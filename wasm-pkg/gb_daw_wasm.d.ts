declare namespace wasm_bindgen {
	/* tslint:disable */
	/* eslint-disable */
	export function list_songs(tdb_text: string): string;
	export function parse_measure_text(text: string): string;
	export function compile_source_map(tdb_text: string, name: string): string;
	export function voice_config_to_toml(config_json: string): string;
	export function voice_config_activity(config_json: string): string;
	export function emit_song_ast(json: string): string;
	export function rename_part(json: string, old_label: string, new_label: string): string;
	export function resolve_instrument(tdb_text: string, name: string): string;
	export function rename_pattern(json: string, old_label: string, new_label: string): string;
	export function parse_part_settings_text(text: string): string;
	export function parse_demo_text(text: string): string;
	export function parse_song_ast(tdb_text: string, name: string): string;
	export function parse_settings_text(text: string): string;
	export function list_instruments(tdb_text: string): string;
	export class AudioEngine {
	  free(): void;
	  /**
	   * Hot-reload: recompile and swap data while preserving playback position.
	   */
	  reload_tdb(tdb_text: string, name: string): string;
	  take_peaks(): Float32Array;
	  compile_tdb(tdb_text: string, name: string): string;
	  live_key_up(semitone: number): void;
	  set_playing(playing: boolean): void;
	  live_trigger(): void;
	  live_key_down(semitone: number, velocity: number): void;
	  set_mute_mask(mask: number): void;
	  live_load_demo(tdb_text: string, instrument_name: string, demo_json: string): void;
	  live_stop_demo(): void;
	  live_set_active(active: boolean): void;
	  live_set_config(config_json: string): void;
	  playback_position(): string;
	  live_update_config(config_json: string): void;
	  constructor();
	  render(output: Float32Array): void;
	  load_song(json_str: string): void;
	  set_focus(json: string): void;
	}
	
}

declare type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

declare interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_audioengine_free: (a: number, b: number) => void;
  readonly audioengine_compile_tdb: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly audioengine_live_key_down: (a: number, b: number, c: number) => void;
  readonly audioengine_live_key_up: (a: number, b: number) => void;
  readonly audioengine_live_load_demo: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly audioengine_live_set_active: (a: number, b: number) => void;
  readonly audioengine_live_set_config: (a: number, b: number, c: number, d: number) => void;
  readonly audioengine_live_stop_demo: (a: number) => void;
  readonly audioengine_live_trigger: (a: number) => void;
  readonly audioengine_live_update_config: (a: number, b: number, c: number, d: number) => void;
  readonly audioengine_load_song: (a: number, b: number, c: number) => void;
  readonly audioengine_new: () => number;
  readonly audioengine_playback_position: (a: number, b: number) => void;
  readonly audioengine_reload_tdb: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly audioengine_render: (a: number, b: number, c: number, d: number) => void;
  readonly audioengine_set_focus: (a: number, b: number, c: number, d: number) => void;
  readonly audioengine_set_mute_mask: (a: number, b: number) => void;
  readonly audioengine_set_playing: (a: number, b: number) => void;
  readonly audioengine_take_peaks: (a: number, b: number) => void;
  readonly compile_source_map: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly emit_song_ast: (a: number, b: number, c: number) => void;
  readonly list_instruments: (a: number, b: number, c: number) => void;
  readonly list_songs: (a: number, b: number, c: number) => void;
  readonly parse_demo_text: (a: number, b: number, c: number) => void;
  readonly parse_measure_text: (a: number, b: number, c: number) => void;
  readonly parse_part_settings_text: (a: number, b: number, c: number) => void;
  readonly parse_settings_text: (a: number, b: number, c: number) => void;
  readonly parse_song_ast: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly rename_part: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly rename_pattern: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly resolve_instrument: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly voice_config_activity: (a: number, b: number, c: number) => void;
  readonly voice_config_to_toml: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_export_0: (a: number, b: number) => number;
  readonly __wbindgen_export_1: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: (a: number, b: number, c: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
declare function wasm_bindgen (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
