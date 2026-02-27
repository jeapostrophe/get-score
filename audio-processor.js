/**
 * AudioWorkletProcessor that runs the gb-apu WASM engine.
 *
 * The wasm-bindgen JS glue is prepended to this file at runtime by wasm-bridge.ts
 * (via Blob URL), so `wasm_bindgen` is available in this scope.
 *
 * Messages:
 *   init { wasmBytes: ArrayBuffer } → compile + init WASM, posts { type: 'ready' }
 *   set_playing { value: bool }
 *   load_song { json }
 *   take_peaks → posts { type: 'peaks', data: Float32Array }
 */

class GbApuProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.engine = null;
    this.pendingMessages = [];
    this.buf = new Float32Array(256); // 128 frames * 2 channels
    this.port.onmessage = (e) => this.onMessage(e.data);
  }

  onMessage(msg) {
    if (msg.type === 'init') {
      try {
        wasm_bindgen.initSync({ module: new WebAssembly.Module(msg.wasmBytes) });
        this.engine = new wasm_bindgen.AudioEngine();
        for (const m of this.pendingMessages) {
          this.handleCommand(m);
        }
        this.pendingMessages = [];
        this.port.postMessage({ type: 'ready' });
      } catch (err) {
        this.port.postMessage({ type: 'error', message: String(err) });
      }
      return;
    }

    if (!this.engine) {
      this.pendingMessages.push(msg);
      return;
    }

    this.handleCommand(msg);
  }

  handleCommand(msg) {
    const e = this.engine;
    switch (msg.type) {
      case 'set_playing':
        e.set_playing(msg.value);
        break;
      case 'load_song':
        e.load_song(msg.json);
        break;
      case 'compile_tdb': {
        try {
          const result = e.compile_tdb(msg.text, msg.name);
          this.port.postMessage({ type: 'compile_result', error: null, debug: result || null });
        } catch (err) {
          this.port.postMessage({ type: 'compile_result', error: String(err), debug: null });
        }
        break;
      }
      case 'reload_tdb': {
        try {
          const result = e.reload_tdb(msg.text, msg.name);
          this.port.postMessage({ type: 'reload_result', error: null, debug: result || null });
        } catch (err) {
          this.port.postMessage({ type: 'reload_result', error: String(err), debug: null });
        }
        break;
      }
      case 'take_peaks': {
        const peaks = e.take_peaks();
        this.port.postMessage({ type: 'peaks', data: peaks });
        break;
      }
      case 'observe': {
        const peaks = e.take_peaks();
        const position = e.playback_position();
        this.port.postMessage({ type: 'observation', peaks, position });
        break;
      }
      case 'live_set_config': {
        try {
          e.live_set_config(msg.configJson);
        } catch (err) {
          this.port.postMessage({ type: 'error', message: String(err) });
        }
        break;
      }
      case 'live_update_config': {
        try {
          e.live_update_config(msg.configJson);
        } catch (err) {
          this.port.postMessage({ type: 'error', message: String(err) });
        }
        break;
      }
      case 'live_trigger':
        e.live_trigger();
        break;
      case 'live_key_down':
        e.live_key_down(msg.semitone, msg.velocity);
        break;
      case 'live_key_up':
        e.live_key_up(msg.semitone);
        break;
      case 'live_set_active':
        e.live_set_active(msg.value);
        break;
      case 'live_load_demo': {
        try {
          e.live_load_demo(msg.tdbText, msg.instrumentName, msg.demoJson);
        } catch (err) {
          this.port.postMessage({ type: 'error', message: String(err) });
        }
        break;
      }
      case 'live_stop_demo':
        e.live_stop_demo();
        break;
      case 'set_mute_mask':
        e.set_mute_mask(msg.mask);
        break;
      case 'set_focus':
        try {
          e.set_focus(msg.json);
        } catch (err) {
          this.port.postMessage({ type: 'error', message: String(err) });
        }
        break;
    }
  }

  process(_inputs, outputs) {
    if (!this.engine) return true;

    const outL = outputs[0]?.[0];
    const outR = outputs[0]?.[1];
    if (!outL) return true;

    const frames = outL.length;
    if (this.buf.length !== frames * 2) {
      this.buf = new Float32Array(frames * 2);
    }
    this.engine.render(this.buf);

    for (let i = 0; i < frames; i++) {
      outL[i] = this.buf[i * 2];
      if (outR) outR[i] = this.buf[i * 2 + 1];
    }

    return true;
  }
}

registerProcessor('gb-apu-processor', GbApuProcessor);
