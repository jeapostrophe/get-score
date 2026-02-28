(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const zs=!1;var ys=Array.isArray,Ho=Array.prototype.indexOf,Aa=Array.prototype.includes,ws=Array.from,Vo=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,Go=Object.getOwnPropertyDescriptors,di=Object.prototype,Ko=Array.prototype,rr=Object.getPrototypeOf,Er=Object.isExtensible;const Wo=()=>{};function Uo(n){for(var e=0;e<n.length;e++)n[e]()}function fi(){var n,e,a=new Promise((r,s)=>{n=r,e=s});return{promise:a,resolve:n,reject:e}}const Fn=2,Ka=4,xs=8,mi=1<<24,Ht=16,xt=32,_a=64,pi=128,ct=512,Rn=1024,On=2048,wt=4096,et=8192,zt=16384,Za=32768,ma=65536,Fr=1<<17,hi=1<<18,Fa=1<<19,Qo=1<<20,Ft=1<<25,pa=65536,Ns=1<<21,ir=1<<22,Yt=1<<23,ua=Symbol("$state"),Zo=Symbol("legacy props"),Jo=Symbol(""),oa=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Xo=globalThis.document?.contentType?.includes("xml")??!1;function Yo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function $o(n,e,a){throw new Error("https://svelte.dev/e/each_key_duplicate")}function el(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function nl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tl(n){throw new Error("https://svelte.dev/e/effect_orphan")}function al(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function sl(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function rl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function il(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ol(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ll(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const cl=1,ul=2,vi=4,dl=8,fl=16,ml=1,pl=4,hl=8,vl=16,_l=1,gl=2,Ln=Symbol(),_i="http://www.w3.org/1999/xhtml";function bl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function kl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function gi(n){return n===this.v}function yl(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function bi(n){return!yl(n,this.v)}let wl=!1;const xl=[];function En(n,e=!1,a=!1){return os(n,new Map,"",xl,null,a)}function os(n,e,a,r,s=null,i=!1){if(typeof n=="object"&&n!==null){var o=e.get(n);if(o!==void 0)return o;if(n instanceof Map)return new Map(n);if(n instanceof Set)return new Set(n);if(ys(n)){var c=Array(n.length);e.set(n,c),s!==null&&e.set(s,c);for(var l=0;l<n.length;l+=1){var f=n[l];l in n&&(c[l]=os(f,e,a,r,null,i))}return c}if(rr(n)===di){c={},e.set(n,c),s!==null&&e.set(s,c);for(var u in n)c[u]=os(n[u],e,a,r,null,i);return c}if(n instanceof Date)return structuredClone(n);if(typeof n.toJSON=="function"&&!i)return os(n.toJSON(),e,a,r,n)}if(n instanceof EventTarget)return n;try{return structuredClone(n)}catch{return n}}let ft=null;function Ta(n){ft=n}function ye(n,e=!1,a){ft={p:ft,i:!1,c:null,e:null,s:n,x:null,l:null}}function we(n){var e=ft,a=e.e;if(a!==null){e.e=null;for(var r of a)Ii(r)}return n!==void 0&&(e.x=n),e.i=!0,ft=e.p,n??{}}function ki(){return!0}let la=[];function yi(){var n=la;la=[],Uo(n)}function Nt(n){if(la.length===0&&!Ba){var e=la;queueMicrotask(()=>{e===la&&yi()})}la.push(n)}function Sl(){for(;la.length>0;)yi()}function wi(n){var e=Xe;if(e===null)return Oe.f|=Yt,n;if((e.f&Za)===0&&(e.f&Ka)===0)throw n;Da(n,e)}function Da(n,e){for(;e!==null;){if((e.f&pi)!==0){if((e.f&Za)===0)throw n;try{e.b.error(n);return}catch(a){n=a}}e=e.parent}throw n}const Pl=-7169;function vn(n,e){n.f=n.f&Pl|e}function or(n){(n.f&ct)!==0||n.deps===null?vn(n,Rn):vn(n,wt)}function xi(n){if(n!==null)for(const e of n)(e.f&Fn)===0||(e.f&pa)===0||(e.f^=pa,xi(e.deps))}function Si(n,e,a){(n.f&On)!==0?e.add(n):(n.f&wt)!==0&&a.add(n),xi(n.deps),vn(n,Rn)}const es=new Set;let Be=null,fs=null,bt=null,Un=[],Ss=null,Is=!1,Ba=!1;class $t{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=0;#a=0;#o=null;#r=new Set;#s=new Set;#i=new Map;is_fork=!1;#l=!1;is_deferred(){return this.is_fork||this.#a>0}skip_effect(e){this.#i.has(e)||this.#i.set(e,{d:[],m:[]})}unskip_effect(e){var a=this.#i.get(e);if(a){this.#i.delete(e);for(var r of a.d)vn(r,On),kt(r);for(r of a.m)vn(r,wt),kt(r)}}process(e){Un=[],this.apply();var a=[],r=[];for(const s of e)this.#c(s,a,r);if(this.is_deferred()){this.#u(r),this.#u(a);for(const[s,i]of this.#i)Di(s,i)}else{for(const s of this.#e)s();this.#e.clear(),this.#n===0&&this.#d(),fs=this,Be=null,Or(r),Or(a),fs=null,this.#o?.resolve()}bt=null}#c(e,a,r){e.f^=Rn;for(var s=e.first,i=null;s!==null;){var o=s.f,c=(o&(xt|_a))!==0,l=c&&(o&Rn)!==0,f=l||(o&et)!==0||this.#i.has(s);if(!f&&s.fn!==null){c?s.f^=Rn:i!==null&&(o&(Ka|xs|mi))!==0?i.b.defer_effect(s):(o&Ka)!==0?a.push(s):Ya(s)&&((o&Ht)!==0&&this.#s.add(s),qa(s));var u=s.first;if(u!==null){s=u;continue}}var d=s.parent;for(s=s.next;s===null&&d!==null;)d===i&&(i=null),s=d.next,d=d.parent}}#u(e){for(var a=0;a<e.length;a+=1)Si(e[a],this.#r,this.#s)}capture(e,a){a!==Ln&&!this.previous.has(e)&&this.previous.set(e,a),(e.f&Yt)===0&&(this.current.set(e,e.v),bt?.set(e,e.v))}activate(){Be=this,this.apply()}deactivate(){Be===this&&(Be=null,bt=null)}flush(){if(this.activate(),Un.length>0){if(Pi(),Be!==null&&Be!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#t)e(this);this.#t.clear()}#d(){if(es.size>1){this.previous.clear();var e=bt,a=!0;for(const s of es){if(s===this){a=!1;continue}const i=[];for(const[c,l]of this.current){if(s.current.has(c))if(a&&l!==s.current.get(c))s.current.set(c,l);else continue;i.push(c)}if(i.length===0)continue;const o=[...s.current.keys()].filter(c=>!this.current.has(c));if(o.length>0){var r=Un;Un=[];const c=new Set,l=new Map;for(const f of i)Ai(f,o,c,l);if(Un.length>0){Be=s,s.apply();for(const f of Un)s.#c(f,[],[]);s.deactivate()}Un=r}}Be=null,bt=e}this.committed=!0,es.delete(this)}increment(e){this.#n+=1,e&&(this.#a+=1)}decrement(e){this.#n-=1,e&&(this.#a-=1),!this.#l&&(this.#l=!0,Nt(()=>{this.#l=!1,this.is_deferred()?Un.length>0&&this.flush():this.revive()}))}revive(){for(const e of this.#r)this.#s.delete(e),vn(e,On),kt(e);for(const e of this.#s)vn(e,wt),kt(e);this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#o??=fi()).promise}static ensure(){if(Be===null){const e=Be=new $t;es.add(Be),Ba||Nt(()=>{Be===e&&e.flush()})}return Be}apply(){}}function Al(n){var e=Ba;Ba=!0;try{for(var a;;){if(Sl(),Un.length===0&&(Be?.flush(),Un.length===0))return Ss=null,a;Pi()}}finally{Ba=e}}function Pi(){Is=!0;var n=null;try{for(var e=0;Un.length>0;){var a=$t.ensure();if(e++>1e3){var r,s;Tl()}a.process(Un),ea.clear()}}finally{Un=[],Is=!1,Ss=null}}function Tl(){try{al()}catch(n){Da(n,Ss)}}let Et=null;function Or(n){var e=n.length;if(e!==0){for(var a=0;a<e;){var r=n[a++];if((r.f&(zt|et))===0&&Ya(r)&&(Et=new Set,qa(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Hi(r),Et?.size>0)){ea.clear();for(const s of Et){if((s.f&(zt|et))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)Et.has(o)&&(Et.delete(o),i.push(o)),o=o.parent;for(let c=i.length-1;c>=0;c--){const l=i[c];(l.f&(zt|et))===0&&qa(l)}}Et.clear()}}Et=null}}function Ai(n,e,a,r){if(!a.has(n)&&(a.add(n),n.reactions!==null))for(const s of n.reactions){const i=s.f;(i&Fn)!==0?Ai(s,e,a,r):(i&(ir|Ht))!==0&&(i&On)===0&&Ti(s,e,r)&&(vn(s,On),kt(s))}}function Ti(n,e,a){const r=a.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const s of n.deps){if(Aa.call(e,s))return!0;if((s.f&Fn)!==0&&Ti(s,e,a))return a.set(s,!0),!0}return a.set(n,!1),!1}function kt(n){for(var e=Ss=n;e.parent!==null;){e=e.parent;var a=e.f;if(Is&&e===Xe&&(a&Ht)!==0&&(a&hi)===0)return;if((a&(_a|xt))!==0){if((a&Rn)===0)return;e.f^=Rn}}Un.push(e)}function Di(n,e){if(!((n.f&xt)!==0&&(n.f&Rn)!==0)){(n.f&On)!==0?e.d.push(n):(n.f&wt)!==0&&e.m.push(n),vn(n,Rn);for(var a=n.first;a!==null;)Di(a,e),a=a.next}}function Dl(n){let e=0,a=ha(0),r;return()=>{cr()&&(t(a),dr(()=>(e===0&&(r=Ot(()=>n(()=>Ha(a)))),e+=1,()=>{Nt(()=>{e-=1,e===0&&(r?.(),r=void 0,Ha(a))})})))}}var Rl=ma|Fa|pi;function ql(n,e,a){new Cl(n,e,a)}class Cl{parent;is_pending=!1;#e;#t=null;#n;#a;#o;#r=null;#s=null;#i=null;#l=null;#c=null;#u=0;#d=0;#p=!1;#m=!1;#h=new Set;#v=new Set;#f=null;#y=Dl(()=>(this.#f=ha(this.#u),()=>{this.#f=null}));constructor(e,a,r){this.#e=e,this.#n=a,this.#a=r,this.parent=Xe.b,this.is_pending=!!this.#n.pending,this.#o=Ts(()=>{Xe.b=this;{var s=this.#b();try{this.#r=ot(()=>r(s))}catch(i){this.error(i)}this.#d>0?this.#g():this.is_pending=!1}return()=>{this.#c?.remove()}},Rl)}#w(){try{this.#r=ot(()=>this.#a(this.#e))}catch(e){this.error(e)}}#x(){const e=this.#n.pending;e&&(this.#s=ot(()=>e(this.#e)),Nt(()=>{var a=this.#b();this.#r=this.#_(()=>($t.ensure(),ot(()=>this.#a(a)))),this.#d>0?this.#g():(da(this.#s,()=>{this.#s=null}),this.is_pending=!1)}))}#b(){var e=this.#e;return this.is_pending&&(this.#c=It(),this.#e.before(this.#c),e=this.#c),e}defer_effect(e){Si(e,this.#h,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#_(e){var a=Xe,r=Oe,s=ft;Dt(this.#o),mt(this.#o),Ta(this.#o.ctx);try{return e()}catch(i){return wi(i),null}finally{Dt(a),mt(r),Ta(s)}}#g(){const e=this.#n.pending;this.#r!==null&&(this.#l=document.createDocumentFragment(),this.#l.append(this.#c),Ki(this.#r,this.#l)),this.#s===null&&(this.#s=ot(()=>e(this.#e)))}#k(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#k(e);return}if(this.#d+=e,this.#d===0){this.is_pending=!1;for(const a of this.#h)vn(a,On),kt(a);for(const a of this.#v)vn(a,wt),kt(a);this.#h.clear(),this.#v.clear(),this.#s&&da(this.#s,()=>{this.#s=null}),this.#l&&(this.#e.before(this.#l),this.#l=null)}}update_pending_count(e){this.#k(e),this.#u+=e,!(!this.#f||this.#p)&&(this.#p=!0,Nt(()=>{this.#p=!1,this.#f&&Ra(this.#f,this.#u)}))}get_effect_pending(){return this.#y(),t(this.#f)}error(e){var a=this.#n.onerror;let r=this.#n.failed;if(this.#m||!a&&!r)throw e;this.#r&&(Jn(this.#r),this.#r=null),this.#s&&(Jn(this.#s),this.#s=null),this.#i&&(Jn(this.#i),this.#i=null);var s=!1,i=!1;const o=()=>{if(s){kl();return}s=!0,i&&ll(),$t.ensure(),this.#u=0,this.#i!==null&&da(this.#i,()=>{this.#i=null}),this.is_pending=this.has_pending_snippet(),this.#r=this.#_(()=>(this.#m=!1,ot(()=>this.#a(this.#e)))),this.#d>0?this.#g():this.is_pending=!1};Nt(()=>{try{i=!0,a?.(e,o),i=!1}catch(c){Da(c,this.#o&&this.#o.parent)}r&&(this.#i=this.#_(()=>{$t.ensure(),this.#m=!0;try{return ot(()=>{r(this.#e,()=>e,()=>o)})}catch(c){return Da(c,this.#o.parent),null}finally{this.#m=!1}}))})}}function Ll(n,e,a,r){const s=Ps;var i=n.filter(m=>!m.settled);if(a.length===0&&i.length===0){r(e.map(s));return}var o=Be,c=Xe,l=Ml(),f=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(m=>m.promise)):null;function u(m){l();try{r(m)}catch(y){(c.f&zt)===0&&Da(y,c)}o?.deactivate(),js()}if(a.length===0){f.then(()=>u(e.map(s)));return}function d(){l(),Promise.all(a.map(m=>El(m))).then(m=>u([...e.map(s),...m])).catch(m=>Da(m,c))}f?f.then(d):d()}function Ml(){var n=Xe,e=Oe,a=ft,r=Be;return function(i=!0){Dt(n),mt(e),Ta(a),i&&r?.activate()}}function js(){Dt(null),mt(null),Ta(null)}function Ps(n){var e=Fn|On,a=Oe!==null&&(Oe.f&Fn)!==0?Oe:null;return Xe!==null&&(Xe.f|=Fa),{ctx:ft,deps:null,effects:null,equals:gi,f:e,fn:n,reactions:null,rv:0,v:Ln,wv:0,parent:a??Xe,ac:null}}function El(n,e,a){let r=Xe;r===null&&Yo();var s=r.b,i=void 0,o=ha(Ln),c=!Oe,l=new Map;return Ql(()=>{var f=fi();i=f.promise;try{Promise.resolve(n()).then(f.resolve,f.reject).then(()=>{u===Be&&u.committed&&u.deactivate(),js()})}catch(y){f.reject(y),js()}var u=Be;if(c){var d=s.is_rendered();s.update_pending_count(1),u.increment(d),l.get(u)?.reject(oa),l.delete(u),l.set(u,f)}const m=(y,k=void 0)=>{if(u.activate(),k)k!==oa&&(o.f|=Yt,Ra(o,k));else{(o.f&Yt)!==0&&(o.f^=Yt),Ra(o,y);for(const[w,_]of l){if(l.delete(w),w===u)break;_.reject(oa)}}c&&(s.update_pending_count(-1),u.decrement(d))};f.promise.then(m,y=>m(null,y||"unknown"))}),ur(()=>{for(const f of l.values())f.reject(oa)}),new Promise(f=>{function u(d){function m(){d===i?f(o):u(i)}d.then(m,m)}u(i)})}function E(n){const e=Ps(n);return Wi(e),e}function Ri(n){const e=Ps(n);return e.equals=bi,e}function Fl(n){var e=n.effects;if(e!==null){n.effects=null;for(var a=0;a<e.length;a+=1)Jn(e[a])}}function Ol(n){for(var e=n.parent;e!==null;){if((e.f&Fn)===0)return(e.f&zt)===0?e:null;e=e.parent}return null}function lr(n){var e,a=Xe;Dt(Ol(n));try{n.f&=~pa,Fl(n),e=Ji(n)}finally{Dt(a)}return e}function qi(n){var e=lr(n);if(!n.equals(e)&&(n.wv=Qi(),(!Be?.is_fork||n.deps===null)&&(n.v=e,n.deps===null))){vn(n,Rn);return}ta||(bt!==null?(cr()||Be?.is_fork)&&bt.set(n,e):or(n))}function zl(n){if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac?.abort(oa),e.teardown=Wo,e.ac=null,Wa(e,0),fr(e))}function Ci(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&qa(e)}let Bs=new Set;const ea=new Map;let Li=!1;function ha(n,e){var a={f:0,v:n,reactions:null,equals:gi,rv:0,wv:0};return a}function H(n,e){const a=ha(n);return Wi(a),a}function Nl(n,e=!1,a=!0){const r=ha(n);return e||(r.equals=bi),r}function h(n,e,a=!1){Oe!==null&&(!yt||(Oe.f&Fr)!==0)&&ki()&&(Oe.f&(Fn|Ht|ir|Fr))!==0&&(ut===null||!Aa.call(ut,n))&&ol();let r=a?_n(e):e;return Ra(n,r)}function Ra(n,e){if(!n.equals(e)){var a=n.v;ta?ea.set(n,e):ea.set(n,a),n.v=e;var r=$t.ensure();if(r.capture(n,a),(n.f&Fn)!==0){const s=n;(n.f&On)!==0&&lr(s),or(s)}n.wv=Qi(),Mi(n,On),Xe!==null&&(Xe.f&Rn)!==0&&(Xe.f&(xt|_a))===0&&(rt===null?Jl([n]):rt.push(n)),!r.is_fork&&Bs.size>0&&!Li&&Il()}return e}function Il(){Li=!1;for(const n of Bs)(n.f&Rn)!==0&&vn(n,wt),Ya(n)&&qa(n);Bs.clear()}function ka(n,e=1){var a=t(n),r=e===1?a++:a--;return h(n,a),r}function Ha(n){h(n,n.v+1)}function Mi(n,e){var a=n.reactions;if(a!==null)for(var r=a.length,s=0;s<r;s++){var i=a[s],o=i.f,c=(o&On)===0;if(c&&vn(i,e),(o&Fn)!==0){var l=i;bt?.delete(l),(o&pa)===0&&(o&ct&&(i.f|=pa),Mi(l,wt))}else c&&((o&Ht)!==0&&Et!==null&&Et.add(i),kt(i))}}function _n(n){if(typeof n!="object"||n===null||ua in n)return n;const e=rr(n);if(e!==di&&e!==Ko)return n;var a=new Map,r=ys(n),s=H(0),i=fa,o=c=>{if(fa===i)return c();var l=Oe,f=fa;mt(null),Br(i);var u=c();return mt(l),Br(f),u};return r&&a.set("length",H(n.length)),new Proxy(n,{defineProperty(c,l,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&rl();var u=a.get(l);return u===void 0?o(()=>{var d=H(f.value);return a.set(l,d),d}):h(u,f.value,!0),!0},deleteProperty(c,l){var f=a.get(l);if(f===void 0){if(l in c){const u=o(()=>H(Ln));a.set(l,u),Ha(s)}}else h(f,Ln),Ha(s);return!0},get(c,l,f){if(l===ua)return n;var u=a.get(l),d=l in c;if(u===void 0&&(!d||ya(c,l)?.writable)&&(u=o(()=>{var y=_n(d?c[l]:Ln),k=H(y);return k}),a.set(l,u)),u!==void 0){var m=t(u);return m===Ln?void 0:m}return Reflect.get(c,l,f)},getOwnPropertyDescriptor(c,l){var f=Reflect.getOwnPropertyDescriptor(c,l);if(f&&"value"in f){var u=a.get(l);u&&(f.value=t(u))}else if(f===void 0){var d=a.get(l),m=d?.v;if(d!==void 0&&m!==Ln)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(c,l){if(l===ua)return!0;var f=a.get(l),u=f!==void 0&&f.v!==Ln||Reflect.has(c,l);if(f!==void 0||Xe!==null&&(!u||ya(c,l)?.writable)){f===void 0&&(f=o(()=>{var m=u?_n(c[l]):Ln,y=H(m);return y}),a.set(l,f));var d=t(f);if(d===Ln)return!1}return u},set(c,l,f,u){var d=a.get(l),m=l in c;if(r&&l==="length")for(var y=f;y<d.v;y+=1){var k=a.get(y+"");k!==void 0?h(k,Ln):y in c&&(k=o(()=>H(Ln)),a.set(y+"",k))}if(d===void 0)(!m||ya(c,l)?.writable)&&(d=o(()=>H(void 0)),h(d,_n(f)),a.set(l,d));else{m=d.v!==Ln;var w=o(()=>_n(f));h(d,w)}var _=Reflect.getOwnPropertyDescriptor(c,l);if(_?.set&&_.set.call(u,f),!m){if(r&&typeof l=="string"){var R=a.get("length"),F=Number(l);Number.isInteger(F)&&F>=R.v&&h(R,F+1)}Ha(s)}return!0},ownKeys(c){t(s);var l=Reflect.ownKeys(c).filter(d=>{var m=a.get(d);return m===void 0||m.v!==Ln});for(var[f,u]of a)u.v!==Ln&&!(f in c)&&l.push(f);return l},setPrototypeOf(){il()}})}function zr(n){try{if(n!==null&&typeof n=="object"&&ua in n)return n[ua]}catch{}return n}function jl(n,e){return Object.is(zr(n),zr(e))}var Nr,Ei,Fi,Oi;function Bl(){if(Nr===void 0){Nr=window,Ei=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,a=Text.prototype;Fi=ya(e,"firstChild").get,Oi=ya(e,"nextSibling").get,Er(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Er(a)&&(a.__t=void 0)}}function It(n=""){return document.createTextNode(n)}function Tt(n){return Fi.call(n)}function Ja(n){return Oi.call(n)}function x(n,e){return Tt(n)}function De(n,e=!1){{var a=Tt(n);return a instanceof Comment&&a.data===""?Ja(a):a}}function v(n,e=1,a=!1){let r=n;for(;e--;)r=Ja(r);return r}function Hl(n){n.textContent=""}function zi(){return!1}function Vl(n,e,a){return document.createElementNS(_i,n,void 0)}let Ir=!1;function Gl(){Ir||(Ir=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function As(n){var e=Oe,a=Xe;mt(null),Dt(null);try{return n()}finally{mt(e),Dt(a)}}function Ni(n,e,a,r=a){n.addEventListener(e,()=>As(a));const s=n.__on_r;s?n.__on_r=()=>{s(),r(!0)}:n.__on_r=()=>r(!0),Gl()}function Kl(n){Xe===null&&(Oe===null&&tl(),nl()),ta&&el()}function Wl(n,e){var a=e.last;a===null?e.last=e.first=n:(a.next=n,n.prev=a,e.last=n)}function Vt(n,e,a){var r=Xe;r!==null&&(r.f&et)!==0&&(n|=et);var s={ctx:ft,deps:null,nodes:null,f:n|On|ct,first:null,fn:e,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};if(a)try{qa(s)}catch(c){throw Jn(s),c}else e!==null&&kt(s);var i=s;if(a&&i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Fa)===0&&(i=i.first,(n&Ht)!==0&&(n&ma)!==0&&i!==null&&(i.f|=ma)),i!==null&&(i.parent=r,r!==null&&Wl(i,r),Oe!==null&&(Oe.f&Fn)!==0&&(n&_a)===0)){var o=Oe;(o.effects??=[]).push(i)}return s}function cr(){return Oe!==null&&!yt}function ur(n){const e=Vt(xs,null,!1);return vn(e,Rn),e.teardown=n,e}function He(n){Kl();var e=Xe.f,a=!Oe&&(e&xt)!==0&&(e&Za)===0;if(a){var r=ft;(r.e??=[]).push(n)}else return Ii(n)}function Ii(n){return Vt(Ka|Qo,n,!1)}function Ul(n){$t.ensure();const e=Vt(_a|Fa,n,!0);return(a={})=>new Promise(r=>{a.outro?da(e,()=>{Jn(e),r(void 0)}):(Jn(e),r(void 0))})}function Xa(n){return Vt(Ka,n,!1)}function Ql(n){return Vt(ir|Fa,n,!0)}function dr(n,e=0){return Vt(xs|e,n,!0)}function ae(n,e=[],a=[],r=[]){Ll(r,e,a,s=>{Vt(xs,()=>n(...s.map(t)),!0)})}function Ts(n,e=0){var a=Vt(Ht|e,n,!0);return a}function ot(n){return Vt(xt|Fa,n,!0)}function ji(n){var e=n.teardown;if(e!==null){const a=ta,r=Oe;jr(!0),mt(null);try{e.call(null)}finally{jr(a),mt(r)}}}function fr(n,e=!1){var a=n.first;for(n.first=n.last=null;a!==null;){const s=a.ac;s!==null&&As(()=>{s.abort(oa)});var r=a.next;(a.f&_a)!==0?a.parent=null:Jn(a,e),a=r}}function Zl(n){for(var e=n.first;e!==null;){var a=e.next;(e.f&xt)===0&&Jn(e),e=a}}function Jn(n,e=!0){var a=!1;(e||(n.f&hi)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Bi(n.nodes.start,n.nodes.end),a=!0),fr(n,e&&!a),Wa(n,0),vn(n,zt);var r=n.nodes&&n.nodes.t;if(r!==null)for(const i of r)i.stop();ji(n);var s=n.parent;s!==null&&s.first!==null&&Hi(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=null}function Bi(n,e){for(;n!==null;){var a=n===e?null:Ja(n);n.remove(),n=a}}function Hi(n){var e=n.parent,a=n.prev,r=n.next;a!==null&&(a.next=r),r!==null&&(r.prev=a),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=a))}function da(n,e,a=!0){var r=[];Vi(n,r,!0);var s=()=>{a&&Jn(n),e&&e()},i=r.length;if(i>0){var o=()=>--i||s();for(var c of r)c.out(o)}else s()}function Vi(n,e,a){if((n.f&et)===0){n.f^=et;var r=n.nodes&&n.nodes.t;if(r!==null)for(const c of r)(c.is_global||a)&&e.push(c);for(var s=n.first;s!==null;){var i=s.next,o=(s.f&ma)!==0||(s.f&xt)!==0&&(n.f&Ht)!==0;Vi(s,e,o?a:!1),s=i}}}function mr(n){Gi(n,!0)}function Gi(n,e){if((n.f&et)!==0){n.f^=et,(n.f&Rn)===0&&(vn(n,On),kt(n));for(var a=n.first;a!==null;){var r=a.next,s=(a.f&ma)!==0||(a.f&xt)!==0;Gi(a,s?e:!1),a=r}var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||e)&&o.in()}}function Ki(n,e){if(n.nodes)for(var a=n.nodes.start,r=n.nodes.end;a!==null;){var s=a===r?null:Ja(a);e.append(a),a=s}}let ls=!1,ta=!1;function jr(n){ta=n}let Oe=null,yt=!1;function mt(n){Oe=n}let Xe=null;function Dt(n){Xe=n}let ut=null;function Wi(n){Oe!==null&&(ut===null?ut=[n]:ut.push(n))}let Qn=null,$n=0,rt=null;function Jl(n){rt=n}let Ui=1,ca=0,fa=ca;function Br(n){fa=n}function Qi(){return++Ui}function Ya(n){var e=n.f;if((e&On)!==0)return!0;if(e&Fn&&(n.f&=~pa),(e&wt)!==0){for(var a=n.deps,r=a.length,s=0;s<r;s++){var i=a[s];if(Ya(i)&&qi(i),i.wv>n.wv)return!0}(e&ct)!==0&&bt===null&&vn(n,Rn)}return!1}function Zi(n,e,a=!0){var r=n.reactions;if(r!==null&&!(ut!==null&&Aa.call(ut,n)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&Fn)!==0?Zi(i,e,!1):e===i&&(a?vn(i,On):(i.f&Rn)!==0&&vn(i,wt),kt(i))}}function Ji(n){var e=Qn,a=$n,r=rt,s=Oe,i=ut,o=ft,c=yt,l=fa,f=n.f;Qn=null,$n=0,rt=null,Oe=(f&(xt|_a))===0?n:null,ut=null,Ta(n.ctx),yt=!1,fa=++ca,n.ac!==null&&(As(()=>{n.ac.abort(oa)}),n.ac=null);try{n.f|=Ns;var u=n.fn,d=u();n.f|=Za;var m=n.deps,y=Be?.is_fork;if(Qn!==null){var k;if(y||Wa(n,$n),m!==null&&$n>0)for(m.length=$n+Qn.length,k=0;k<Qn.length;k++)m[$n+k]=Qn[k];else n.deps=m=Qn;if(cr()&&(n.f&ct)!==0)for(k=$n;k<m.length;k++)(m[k].reactions??=[]).push(n)}else!y&&m!==null&&$n<m.length&&(Wa(n,$n),m.length=$n);if(ki()&&rt!==null&&!yt&&m!==null&&(n.f&(Fn|wt|On))===0)for(k=0;k<rt.length;k++)Zi(rt[k],n);if(s!==null&&s!==n){if(ca++,s.deps!==null)for(let w=0;w<a;w+=1)s.deps[w].rv=ca;if(e!==null)for(const w of e)w.rv=ca;rt!==null&&(r===null?r=rt:r.push(...rt))}return(n.f&Yt)!==0&&(n.f^=Yt),d}catch(w){return wi(w)}finally{n.f^=Ns,Qn=e,$n=a,rt=r,Oe=s,ut=i,Ta(o),yt=c,fa=l}}function Xl(n,e){let a=e.reactions;if(a!==null){var r=Ho.call(a,n);if(r!==-1){var s=a.length-1;s===0?a=e.reactions=null:(a[r]=a[s],a.pop())}}if(a===null&&(e.f&Fn)!==0&&(Qn===null||!Aa.call(Qn,e))){var i=e;(i.f&ct)!==0&&(i.f^=ct,i.f&=~pa),or(i),zl(i),Wa(i,0)}}function Wa(n,e){var a=n.deps;if(a!==null)for(var r=e;r<a.length;r++)Xl(n,a[r])}function qa(n){var e=n.f;if((e&zt)===0){vn(n,Rn);var a=Xe,r=ls;Xe=n,ls=!0;try{(e&(Ht|mi))!==0?Zl(n):fr(n),ji(n);var s=Ji(n);n.teardown=typeof s=="function"?s:null,n.wv=Ui;var i;zs&&wl&&(n.f&On)!==0&&n.deps}finally{ls=r,Xe=a}}}async function Xi(){await Promise.resolve(),Al()}function t(n){var e=n.f,a=(e&Fn)!==0;if(Oe!==null&&!yt){var r=Xe!==null&&(Xe.f&zt)!==0;if(!r&&(ut===null||!Aa.call(ut,n))){var s=Oe.deps;if((Oe.f&Ns)!==0)n.rv<ca&&(n.rv=ca,Qn===null&&s!==null&&s[$n]===n?$n++:Qn===null?Qn=[n]:Qn.push(n));else{(Oe.deps??=[]).push(n);var i=n.reactions;i===null?n.reactions=[Oe]:Aa.call(i,Oe)||i.push(Oe)}}}if(ta&&ea.has(n))return ea.get(n);if(a){var o=n;if(ta){var c=o.v;return((o.f&Rn)===0&&o.reactions!==null||$i(o))&&(c=lr(o)),ea.set(o,c),c}var l=(o.f&ct)===0&&!yt&&Oe!==null&&(ls||(Oe.f&ct)!==0),f=(o.f&Za)===0;Ya(o)&&(l&&(o.f|=ct),qi(o)),l&&!f&&(Ci(o),Yi(o))}if(bt?.has(n))return bt.get(n);if((n.f&Yt)!==0)throw n.v;return n.v}function Yi(n){if(n.f|=ct,n.deps!==null)for(const e of n.deps)(e.reactions??=[]).push(n),(e.f&Fn)!==0&&(e.f&ct)===0&&(Ci(e),Yi(e))}function $i(n){if(n.v===Ln)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(ea.has(e)||(e.f&Fn)!==0&&$i(e))return!0;return!1}function Ot(n){var e=yt;try{return yt=!0,n()}finally{yt=e}}const Yl=["touchstart","touchmove"];function $l(n){return Yl.includes(n)}const eo=Symbol("events"),no=new Set,Hs=new Set;function ec(n,e,a,r={}){function s(i){if(r.capture||Vs.call(e,i),!i.cancelBubble)return As(()=>a?.call(this,i))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?Nt(()=>{e.addEventListener(n,s,r)}):e.addEventListener(n,s,r),s}function Z(n,e,a,r,s){var i={capture:r,passive:s},o=ec(n,e,a,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ur(()=>{e.removeEventListener(n,o,i)})}function B(n,e,a){(e[eo]??={})[n]=a}function Ye(n){for(var e=0;e<n.length;e++)no.add(n[e]);for(var a of Hs)a(n)}let Hr=null;function Vs(n){var e=this,a=e.ownerDocument,r=n.type,s=n.composedPath?.()||[],i=s[0]||n.target;Hr=n;var o=0,c=Hr===n&&n.__root;if(c){var l=s.indexOf(c);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var f=s.indexOf(e);if(f===-1)return;l<=f&&(o=l)}if(i=s[o]||n.target,i!==e){Vo(n,"currentTarget",{configurable:!0,get(){return i||a}});var u=Oe,d=Xe;mt(null),Dt(null);try{for(var m,y=[];i!==null;){var k=i.assignedSlot||i.parentNode||i.host||null;try{var w=i[eo]?.[r];w!=null&&(!i.disabled||n.target===i)&&w.call(i,n)}catch(_){m?y.push(_):m=_}if(n.cancelBubble||k===e||k===null)break;i=k}if(m){for(let _ of y)queueMicrotask(()=>{throw _});throw m}}finally{n.__root=e,delete n.currentTarget,mt(u),Dt(d)}}}const nc=globalThis?.window?.trustedTypes?.createPolicy("svelte-trusted-html",{createHTML:n=>n});function tc(n){return nc?.createHTML(n)??n}function pr(n,e=!1){var a=Vl("template");return n=n.replaceAll("<!>","<!---->"),a.innerHTML=e?tc(n):n,a.content}function Ca(n,e){var a=Xe;a.nodes===null&&(a.nodes={start:n,end:e,a:null,t:null})}function D(n,e){var a=(e&_l)!==0,r=(e&gl)!==0,s,i=!n.startsWith("<!>");return()=>{s===void 0&&(s=pr(i?n:"<!>"+n,!0),a||(s=Tt(s)));var o=r||Ei?document.importNode(s,!0):s.cloneNode(!0);if(a){var c=Tt(o),l=o.lastChild;Ca(c,l)}else Ca(o,o);return o}}function ac(n,e,a="svg"){var r=!n.startsWith("<!>"),s=`<${a}>${r?n:"<!>"+n}</${a}>`,i;return()=>{if(!i){var o=pr(s,!0),c=Tt(o);i=Tt(c)}var l=i.cloneNode(!0);return Ca(l,l),l}}function sc(n,e){return ac(n,e,"svg")}function rc(n=""){{var e=It(n+"");return Ca(e,e),e}}function La(){var n=document.createDocumentFragment(),e=document.createComment(""),a=It();return n.append(e,a),Ca(e,a),n}function P(n,e){n!==null&&n.before(e)}function Pe(n,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(n.__t??=n.nodeValue)&&(n.__t=a,n.nodeValue=a+"")}function ic(n,e){return oc(n,e)}const ns=new Map;function oc(n,{target:e,anchor:a,props:r={},events:s,context:i,intro:o=!0}){Bl();var c=new Set,l=d=>{for(var m=0;m<d.length;m++){var y=d[m];if(!c.has(y)){c.add(y);var k=$l(y);for(const R of[e,document]){var w=ns.get(R);w===void 0&&(w=new Map,ns.set(R,w));var _=w.get(y);_===void 0?(R.addEventListener(y,Vs,{passive:k}),w.set(y,1)):w.set(y,_+1)}}}};l(ws(no)),Hs.add(l);var f=void 0,u=Ul(()=>{var d=a??e.appendChild(It());return ql(d,{pending:()=>{}},m=>{ye({});var y=ft;i&&(y.c=i),s&&(r.$$events=s),f=n(m,r)||{},we()}),()=>{for(var m of c)for(const w of[e,document]){var y=ns.get(w),k=y.get(m);--k==0?(w.removeEventListener(m,Vs),y.delete(m),y.size===0&&ns.delete(w)):y.set(m,k)}Hs.delete(l),d!==a&&d.parentNode?.removeChild(d)}});return lc.set(f,u),f}let lc=new WeakMap;class to{anchor;#e=new Map;#t=new Map;#n=new Map;#a=new Set;#o=!0;constructor(e,a=!0){this.anchor=e,this.#o=a}#r=()=>{var e=Be;if(this.#e.has(e)){var a=this.#e.get(e),r=this.#t.get(a);if(r)mr(r),this.#a.delete(a);else{var s=this.#n.get(a);s&&(this.#t.set(a,s.effect),this.#n.delete(a),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of this.#e){if(this.#e.delete(i),i===e)break;const c=this.#n.get(o);c&&(Jn(c.effect),this.#n.delete(o))}for(const[i,o]of this.#t){if(i===a||this.#a.has(i))continue;const c=()=>{if(Array.from(this.#e.values()).includes(i)){var f=document.createDocumentFragment();Ki(o,f),f.append(It()),this.#n.set(i,{effect:o,fragment:f})}else Jn(o);this.#a.delete(i),this.#t.delete(i)};this.#o||!r?(this.#a.add(i),da(o,c,!1)):c()}}};#s=e=>{this.#e.delete(e);const a=Array.from(this.#e.values());for(const[r,s]of this.#n)a.includes(r)||(Jn(s.effect),this.#n.delete(r))};ensure(e,a){var r=Be,s=zi();if(a&&!this.#t.has(e)&&!this.#n.has(e))if(s){var i=document.createDocumentFragment(),o=It();i.append(o),this.#n.set(e,{effect:ot(()=>a(o)),fragment:i})}else this.#t.set(e,ot(()=>a(this.anchor)));if(this.#e.set(r,e),s){for(const[c,l]of this.#t)c===e?r.unskip_effect(l):r.skip_effect(l);for(const[c,l]of this.#n)c===e?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(this.#r),r.ondiscard(this.#s)}else this.#r()}}function J(n,e,a=!1){var r=new to(n),s=a?ma:0;function i(o,c){r.ensure(o,c)}Ts(()=>{var o=!1;e((c,l=0)=>{o=!0,i(l,c)}),o||i(!1,null)},s)}function We(n,e){return e}function cc(n,e,a){for(var r=[],s=e.length,i,o=e.length,c=0;c<s;c++){let d=e[c];da(d,()=>{if(i){if(i.pending.delete(d),i.done.add(d),i.pending.size===0){var m=n.outrogroups;Gs(ws(i.done)),m.delete(i),m.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=r.length===0&&a!==null;if(l){var f=a,u=f.parentNode;Hl(u),u.append(f),n.items.clear()}Gs(e,!l)}else i={pending:new Set(e),done:new Set},(n.outrogroups??=new Set).add(i)}function Gs(n,e=!0){for(var a=0;a<n.length;a++)Jn(n[a],e)}var Vr;function Ue(n,e,a,r,s,i=null){var o=n,c=new Map,l=(e&vi)!==0;if(l){var f=n;o=f.appendChild(It())}var u=null,d=Ri(()=>{var R=a();return ys(R)?R:R==null?[]:ws(R)}),m,y=!0;function k(){_.fallback=u,uc(_,m,o,e,r),u!==null&&(m.length===0?(u.f&Ft)===0?mr(u):(u.f^=Ft,Ia(u,null,o)):da(u,()=>{u=null}))}var w=Ts(()=>{m=t(d);for(var R=m.length,F=new Set,I=Be,C=zi(),S=0;S<R;S+=1){var b=m[S],q=r(b,S),z=y?null:c.get(q);z?(z.v&&Ra(z.v,b),z.i&&Ra(z.i,S),C&&I.unskip_effect(z.e)):(z=dc(c,y?o:Vr??=It(),b,q,S,s,e,a),y||(z.e.f|=Ft),c.set(q,z)),F.add(q)}if(R===0&&i&&!u&&(y?u=ot(()=>i(o)):(u=ot(()=>i(Vr??=It())),u.f|=Ft)),R>F.size&&$o(),!y)if(C){for(const[j,O]of c)F.has(j)||I.skip_effect(O.e);I.oncommit(k),I.ondiscard(()=>{})}else k();t(d)}),_={effect:w,items:c,outrogroups:null,fallback:u};y=!1}function Oa(n){for(;n!==null&&(n.f&xt)===0;)n=n.next;return n}function uc(n,e,a,r,s){var i=(r&dl)!==0,o=e.length,c=n.items,l=Oa(n.effect.first),f,u=null,d,m=[],y=[],k,w,_,R;if(i)for(R=0;R<o;R+=1)k=e[R],w=s(k,R),_=c.get(w).e,(_.f&Ft)===0&&(_.nodes?.a?.measure(),(d??=new Set).add(_));for(R=0;R<o;R+=1){if(k=e[R],w=s(k,R),_=c.get(w).e,n.outrogroups!==null)for(const O of n.outrogroups)O.pending.delete(_),O.done.delete(_);if((_.f&Ft)!==0)if(_.f^=Ft,_===l)Ia(_,null,a);else{var F=u?u.next:l;_===n.effect.last&&(n.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),Zt(n,u,_),Zt(n,_,F),Ia(_,F,a),u=_,m=[],y=[],l=Oa(u.next);continue}if((_.f&et)!==0&&(mr(_),i&&(_.nodes?.a?.unfix(),(d??=new Set).delete(_))),_!==l){if(f!==void 0&&f.has(_)){if(m.length<y.length){var I=y[0],C;u=I.prev;var S=m[0],b=m[m.length-1];for(C=0;C<m.length;C+=1)Ia(m[C],I,a);for(C=0;C<y.length;C+=1)f.delete(y[C]);Zt(n,S.prev,b.next),Zt(n,u,S),Zt(n,b,I),l=I,u=b,R-=1,m=[],y=[]}else f.delete(_),Ia(_,l,a),Zt(n,_.prev,_.next),Zt(n,_,u===null?n.effect.first:u.next),Zt(n,u,_),u=_;continue}for(m=[],y=[];l!==null&&l!==_;)(f??=new Set).add(l),y.push(l),l=Oa(l.next);if(l===null)continue}(_.f&Ft)===0&&m.push(_),u=_,l=Oa(_.next)}if(n.outrogroups!==null){for(const O of n.outrogroups)O.pending.size===0&&(Gs(ws(O.done)),n.outrogroups?.delete(O));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||f!==void 0){var q=[];if(f!==void 0)for(_ of f)(_.f&et)===0&&q.push(_);for(;l!==null;)(l.f&et)===0&&l!==n.fallback&&q.push(l),l=Oa(l.next);var z=q.length;if(z>0){var j=(r&vi)!==0&&o===0?a:null;if(i){for(R=0;R<z;R+=1)q[R].nodes?.a?.measure();for(R=0;R<z;R+=1)q[R].nodes?.a?.fix()}cc(n,q,j)}}i&&Nt(()=>{if(d!==void 0)for(_ of d)_.nodes?.a?.apply()})}function dc(n,e,a,r,s,i,o,c){var l=(o&cl)!==0?(o&fl)===0?Nl(a,!1,!1):ha(a):null,f=(o&ul)!==0?ha(s):null;return{v:l,i:f,e:ot(()=>(i(e,l??a,f??s,c),()=>{n.delete(r)}))}}function Ia(n,e,a){if(n.nodes)for(var r=n.nodes.start,s=n.nodes.end,i=e&&(e.f&Ft)===0?e.nodes.start:a;r!==null;){var o=Ja(r);if(i.before(r),r===s)return;r=o}}function Zt(n,e,a){e===null?n.effect.first=a:e.next=a,a===null?n.effect.last=e:a.prev=e}function ao(n,e,a=!1,r=!1,s=!1){var i=n,o="";ae(()=>{var c=Xe;if(o!==(o=e()??"")&&(c.nodes!==null&&(Bi(c.nodes.start,c.nodes.end),c.nodes=null),o!=="")){var l=o+"";a?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var f=pr(l);if((a||r)&&(f=Tt(f)),Ca(Tt(f),f.lastChild),a||r)for(;Tt(f);)i.before(Tt(f));else i.before(f)}})}function hr(n,e,...a){var r=new to(n);Ts(()=>{const s=e()??null;r.ensure(s,s&&(i=>s(i,...a)))},ma)}function so(n,e,a){Xa(()=>{var r=Ot(()=>e(n,a?.())||{});if(r?.destroy)return()=>r.destroy()})}const Gr=[...` 	
\r\f \v\uFEFF`];function fc(n,e,a){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),a){for(var s in a)if(a[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var c=o+i;(o===0||Gr.includes(r[o-1]))&&(c===r.length||Gr.includes(r[c]))?r=(o===0?"":r.substring(0,o))+r.substring(c+1):o=c}}return r===""?null:r}function Kr(n,e=!1){var a=e?" !important;":";",r="";for(var s in n){var i=n[s];i!=null&&i!==""&&(r+=" "+s+": "+i+a)}return r}function Ls(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function mc(n,e){if(e){var a="",r,s;if(Array.isArray(e)?(r=e[0],s=e[1]):r=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,c=!1,l=[];r&&l.push(...Object.keys(r).map(Ls)),s&&l.push(...Object.keys(s).map(Ls));var f=0,u=-1;const w=n.length;for(var d=0;d<w;d++){var m=n[d];if(c?m==="/"&&n[d-1]==="*"&&(c=!1):i?i===m&&(i=!1):m==="/"&&n[d+1]==="*"?c=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!c&&i===!1&&o===0){if(m===":"&&u===-1)u=d;else if(m===";"||d===w-1){if(u!==-1){var y=Ls(n.substring(f,u).trim());if(!l.includes(y)){m!==";"&&d++;var k=n.substring(f,d).trim();a+=" "+k+";"}}f=d+1,u=-1}}}}return r&&(a+=Kr(r)),s&&(a+=Kr(s,!0)),a=a.trim(),a===""?null:a}return n==null?null:String(n)}function ve(n,e,a,r,s,i){var o=n.__className;if(o!==a||o===void 0){var c=fc(a,r,i);c==null?n.removeAttribute("class"):n.className=c,n.__className=a}else if(i&&s!==i)for(var l in i){var f=!!i[l];(s==null||f!==!!s[l])&&n.classList.toggle(l,f)}return i}function Ms(n,e={},a,r){for(var s in a){var i=a[s];e[s]!==i&&(a[s]==null?n.style.removeProperty(s):n.style.setProperty(s,i,r))}}function $e(n,e,a,r){var s=n.__style;if(s!==e){var i=mc(e,r);i==null?n.removeAttribute("style"):n.style.cssText=i,n.__style=e}else r&&(Array.isArray(r)?(Ms(n,a?.[0],r[0]),Ms(n,a?.[1],r[1],"important")):Ms(n,a,r));return r}function ro(n,e,a=!1){if(n.multiple){if(e==null)return;if(!ys(e))return bl();for(var r of n.options)r.selected=e.includes(Va(r));return}for(r of n.options){var s=Va(r);if(jl(s,e)){r.selected=!0;return}}(!a||e!==void 0)&&(n.selectedIndex=-1)}function pc(n){var e=new MutationObserver(()=>{ro(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ur(()=>{e.disconnect()})}function hc(n,e,a=e){var r=new WeakSet,s=!0;Ni(n,"change",i=>{var o=i?"[selected]":":checked",c;if(n.multiple)c=[].map.call(n.querySelectorAll(o),Va);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");c=l&&Va(l)}a(c),Be!==null&&r.add(Be)}),Xa(()=>{var i=e();if(n===document.activeElement){var o=fs??Be;if(r.has(o))return}if(ro(n,i,s),s&&i===void 0){var c=n.querySelector(":checked");c!==null&&(i=Va(c),a(i))}n.__value=i,s=!1}),pc(n)}function Va(n){return"__value"in n?n.__value:n.value}const vc=Symbol("is custom element"),_c=Symbol("is html"),gc=Xo?"progress":"PROGRESS";function na(n,e){var a=io(n);a.value===(a.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==gc)||(n.value=e??"")}function en(n,e,a,r){var s=io(n);s[e]!==(s[e]=a)&&(e==="loading"&&(n[Jo]=a),a==null?n.removeAttribute(e):typeof a!="string"&&bc(n).includes(e)?n[e]=a:n.setAttribute(e,a))}function io(n){return n.__attributes??={[vc]:n.nodeName.includes("-"),[_c]:n.namespaceURI===_i}}var Wr=new Map;function bc(n){var e=n.getAttribute("is")||n.nodeName,a=Wr.get(e);if(a)return a;Wr.set(e,a=[]);for(var r,s=n,i=Element.prototype;i!==s;){r=Go(s);for(var o in r)r[o].set&&a.push(o);s=rr(s)}return a}function Zn(n,e,a=e){var r=new WeakSet;Ni(n,"input",async s=>{var i=s?n.defaultValue:n.value;if(i=Es(n)?Fs(i):i,a(i),Be!==null&&r.add(Be),await Xi(),i!==(i=e())){var o=n.selectionStart,c=n.selectionEnd,l=n.value.length;if(n.value=i??"",c!==null){var f=n.value.length;o===c&&c===l&&f>l?(n.selectionStart=f,n.selectionEnd=f):(n.selectionStart=o,n.selectionEnd=Math.min(c,f))}}}),Ot(e)==null&&n.value&&(a(Es(n)?Fs(n.value):n.value),Be!==null&&r.add(Be)),dr(()=>{var s=e();if(n===document.activeElement){var i=fs??Be;if(r.has(i))return}Es(n)&&s===Fs(n.value)||n.type==="date"&&!s&&!n.value||s!==n.value&&(n.value=s??"")})}function Es(n){var e=n.type;return e==="number"||e==="range"}function Fs(n){return n===""?null:+n}function Ur(n,e){return n===e||n?.[ua]===e}function jt(n={},e,a,r){return Xa(()=>{var s,i;return dr(()=>{s=i,i=[],Ot(()=>{n!==a(...i)&&(e(n,...i),s&&Ur(a(...s),n)&&e(null,...s))})}),()=>{Nt(()=>{i&&Ur(a(...i),n)&&e(null,...i)})}}),n}let ts=!1;function kc(n){var e=ts;try{return ts=!1,[n(),ts]}finally{ts=e}}function _e(n,e,a,r){var s=(a&hl)!==0,i=(a&vl)!==0,o=r,c=!0,l=()=>(c&&(c=!1,o=i?Ot(r):r),o),f;if(s){var u=ua in n||Zo in n;f=ya(n,e)?.set??(u&&e in n?F=>n[e]=F:void 0)}var d,m=!1;s?[d,m]=kc(()=>n[e]):d=n[e],d===void 0&&r!==void 0&&(d=l(),f&&(sl(),f(d)));var y;if(y=()=>{var F=n[e];return F===void 0?l():(c=!0,F)},(a&pl)===0)return y;if(f){var k=n.$$legacy;return(function(F,I){return arguments.length>0?((!I||k||m)&&f(I?y():F),F):y()})}var w=!1,_=((a&ml)!==0?Ps:Ri)(()=>(w=!1,y()));s&&t(_);var R=Xe;return(function(F,I){if(arguments.length>0){const C=I?t(_):s?_n(F):F;return h(_,C),w=!0,o!==void 0&&(o=C),F}return ta&&w||(R.f&zt)!==0?_.v:t(_)})}const yc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(yc);const wc=`
if (typeof TextDecoder === 'undefined') {
  globalThis.TextDecoder = class TextDecoder {
    decode(buf) {
      const u8 = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
      let s = '';
      for (let i = 0; i < u8.length; i++) s += String.fromCharCode(u8[i]);
      return s;
    }
  };
}
if (typeof TextEncoder === 'undefined') {
  globalThis.TextEncoder = class TextEncoder {
    encode(s) {
      const buf = new Uint8Array(s.length);
      for (let i = 0; i < s.length; i++) buf[i] = s.charCodeAt(i);
      return buf;
    }
  };
}
`;class xc{ctx=null;node=null;gainNode=null;ready=!1;queue=[];observeCallback=null;compileResolve=null;reloadResolve=null;async init(){if(this.ctx)return;this.ctx=new AudioContext({sampleRate:44100});const e="/get-score/",[a,r,s]=await Promise.all([fetch(`${e}wasm-pkg/gb_daw_wasm.js`).then(c=>c.text()),fetch(`${e}audio-processor.js`).then(c=>c.text()),fetch(`${e}wasm-pkg/gb_daw_wasm_bg.wasm`).then(c=>c.arrayBuffer())]),i=new Blob([wc,a,`
`,r],{type:"application/javascript"}),o=URL.createObjectURL(i);await this.ctx.audioWorklet.addModule(o),URL.revokeObjectURL(o),this.node=new AudioWorkletNode(this.ctx,"gb-apu-processor",{outputChannelCount:[2]}),this.gainNode=this.ctx.createGain(),this.node.connect(this.gainNode),this.gainNode.connect(this.ctx.destination),this.node.port.onmessage=c=>{const l=c.data;if(l.type==="ready"){this.ready=!0;for(const f of this.queue)this.node.port.postMessage(f);this.queue=[]}else if(l.type==="compile_result"){if(l.error)this.compileResolve?.reject(new Error(l.error));else{const f=l.debug?JSON.parse(l.debug):null;this.compileResolve?.resolve(f)}this.compileResolve=null}else if(l.type==="reload_result"){if(l.error)this.reloadResolve?.reject(new Error(l.error));else{const f=l.debug?JSON.parse(l.debug):null;this.reloadResolve?.resolve(f)}this.reloadResolve=null}else if(l.type==="peaks")this.observeCallback?.({peaks:l.data,position:null});else if(l.type==="observation"){const f=l.position&&l.position!=="null"?JSON.parse(l.position):null;this.observeCallback?.({peaks:l.peaks,position:f})}else l.type==="error"&&console.error("AudioEngine error:",l.message)},this.node.port.postMessage({type:"init",wasmBytes:s})}async resume(){await this.ctx?.resume()}send(e){this.ready&&this.node?this.node.port.postMessage(e):this.queue.push(e)}setPlaying(e){this.send({type:"set_playing",value:e})}loadSong(e){this.send({type:"load_song",json:JSON.stringify(e)})}requestPeaks(){this.send({type:"take_peaks"})}observe(){this.send({type:"observe"})}onObserve(e){this.observeCallback=e}compileTdb(e,a){return new Promise((r,s)=>{this.compileResolve={resolve:r,reject:s},this.send({type:"compile_tdb",text:e,name:a})})}reloadTdb(e,a){return new Promise((r,s)=>{this.reloadResolve={resolve:r,reject:s},this.send({type:"reload_tdb",text:e,name:a})})}liveSetConfig(e){this.send({type:"live_set_config",configJson:e})}liveUpdateConfig(e){this.send({type:"live_update_config",configJson:e})}liveTrigger(){this.send({type:"live_trigger"})}liveKeyDown(e,a){this.send({type:"live_key_down",semitone:e,velocity:a})}liveKeyUp(e){this.send({type:"live_key_up",semitone:e})}liveSetActive(e){this.send({type:"live_set_active",value:e})}liveLoadDemo(e,a,r){this.send({type:"live_load_demo",tdbText:e,instrumentName:a,demoJson:r})}liveStopDemo(){this.send({type:"live_stop_demo"})}setMuteMask(e){this.send({type:"set_mute_mask",mask:e})}setFocus(e){this.send({type:"set_focus",json:JSON.stringify(e)})}setVolume(e){this.gainNode&&(this.gainNode.gain.value=e)}}const Sc=`## scale/maj
2 2 1 2 2 2 1


## scale/min
2 1 2 2 1 2 2


## scale/dorian
2 1 2 2 2 1 2


## scale/phrygian
1 2 2 2 1 2 2


## scale/lydian
2 2 2 1 2 2 1


## scale/mixolydian
2 2 1 2 2 1 2


## scale/locrian
1 2 2 1 2 2 2


## scale/harmonic-min
2 1 2 2 1 3 1


## scale/melodic-min
2 1 2 2 2 2 1


## scale/blues
3 2 1 1 3 2


## scale/pent-maj
2 2 3 2 3


## scale/pent-min
3 2 2 3 2


## scale/whole-tone
2 2 2 2 2 2


## scale/chromatic
1 1 1 1 1 1 1 1 1 1 1 1


## groove/shuffle
66 34

## groove/triplet
67 33

## groove/hard_swing
75 25

## groove/compound
8 4 4 8 4 4


## arp/major
0 4 7

## arp/min
0 3 7

## arp/7
0 4 7 10

## arp/min7
0 3 7 10

## arp/maj7
0 4 7 11

## arp/dim
0 3 6

## arp/aug
0 4 8

## arp/sus4
0 5 7

## arp/oct
0 12


## template/bass_drum
osc_start = true
amp = 1.0
soft_clip = 0.6
[args]
tone = 75.0
decay = 50.0
[vars]
lpf_freq = "$tone * 20 + 200"
decay_time = "$decay * 5 + 50"
[osc.0]
shape = "Sine"
[osc.0.freq]
Swept = { atk = 0.11, dec = "$decay_time", base = 48.0, amt = 50.0 }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.0.env]
AD = { attack_ms = 2.0, decay_ms = "$decay_time", start = 0.0, amt = 1.0, exp = false }
[path.0.post_filter]
Lowpass = ["$lpf_freq", 1.0]


## template/snare
osc_start = true
amp = 1.0
[args]
tone = 50.0
snappy = 50.0
[vars]
noise_vcf = "$tone * 100 + 800"
snappy_env_amt = "$snappy / 200"
[osc.0]
shape = "Sine"
freq = "Fixed"
fixed_hz = 476.0
[osc.1]
shape = "Sine"
freq = "Fixed"
fixed_hz = 238.0
[osc.2]
shape = "WhiteNoise"
freq = "Fixed"
fixed_hz = 0.0
[path.0]
mix = [0.25, 0.25, 0.0, 0.0, 0.0, 0.0]
[path.0.env]
AD = { attack_ms = 0.1, decay_ms = 50.0, start = 0.0, amt = "$snappy_env_amt", exp = false }
[path.1]
mix = [0.0, 0.0, 0.5, 0.0, 0.0, 0.0]
[path.1.pre_filter]
Highpass = ["$noise_vcf", 1.0]
[path.1.env]
AD = { attack_ms = 0.1, decay_ms = 75.0, start = 0.0, amt = 0.5, exp = false }


## template/conga
osc_start = true
amp = 1.0
[args]
tuning = 50.0
high_freq = 220.0
low_freq = 165.0
osc_decay = 180.0
[vars]
freq = "$low_freq + $tuning / 100 * ($high_freq - $low_freq)"
[osc.0]
shape = "Sine"
freq = "Fixed"
fixed_hz = "$freq"
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.0.env]
AD = { attack_ms = 0.1, decay_ms = "$osc_decay", start = 0.0, amt = 1.0, exp = false }


## template/tom
osc_start = true
amp = 1.0
[args]
tuning = 50.0
high_freq = 100.0
low_freq = 80.0
osc_decay = 200.0
noise_decay = 200.0
[vars]
freq = "$low_freq + $tuning / 100 * ($high_freq - $low_freq)"
[osc.0]
shape = "Sine"
freq = "Fixed"
fixed_hz = "$freq"
[osc.1]
shape = "PinkNoise"
freq = "Fixed"
fixed_hz = 0.0
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.0.env]
AD = { attack_ms = 0.1, decay_ms = "$osc_decay", start = 0.0, amt = 1.0, exp = false }
[path.1]
mix = [0.0, 1.0, 0.0, 0.0, 0.0, 0.0]
[path.1.pre_filter]
Lowpass = [10000.0, 0.7]
[path.1.env]
AD = { attack_ms = 0.1, decay_ms = "$noise_decay", start = 0.0, amt = 0.2, exp = false }


## template/claves
osc_start = true
amp = 1.0
[osc.0]
shape = "Triangle"
freq = "Fixed"
fixed_hz = 2450.0
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.0.pre_filter]
Bandpass = [2450.0, 1.0]
[path.0.env]
AD = { attack_ms = 0.11, decay_ms = 40.0, start = 0.0, amt = 0.7, exp = true }


## template/rimshot
osc_start = true
amp = 1.0
half_rect = true
soft_clip = 3.0
post_filter = { Highpass = [480.0, 1.0] }
[osc.0]
shape = "Sine"
freq = "Fixed"
fixed_hz = 480.0
[osc.1]
shape = "Triangle"
freq = "Fixed"
fixed_hz = 1750.0
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.0.pre_filter]
Bandpass = [480.0, 1.0]
[path.1]
mix = [0.0, 1.0, 0.0, 0.0, 0.0, 0.0]
[path.1.pre_filter]
Highpass = [2450.0, 1.0]
[path.1.env]
AD = { attack_ms = 0.11, decay_ms = 40.0, start = 0.0, amt = 0.7, exp = true }
[amp_env]
AD = { attack_ms = 0.11, decay_ms = 10.0, start = 0.0, amt = 1.7, exp = false }


## template/maracas
osc_start = true
amp = 1.0
[osc.0]
shape = "WhiteNoise"
freq = "Fixed"
fixed_hz = 0.0
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.0.pre_filter]
Highpass = [5000.0, 1.0]
[path.0.env]
AD = { attack_ms = 0.2, decay_ms = 30.0, start = 0.0, amt = 0.5, exp = false }


## template/handclap
osc_start = true
amp = 1.0
[osc.0]
shape = "WhiteNoise"
freq = "Fixed"
fixed_hz = 0.0
[path.0]
mix = [0.5, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.0.pre_filter]
Bandpass = [1000.0, 1.0]
[path.0.env]
MultiTap = { num_taps = 4, tap_interval = 10.0, tap_amp = 0.8, tail_decay = 115.0 }


## template/cowbell
osc_start = true
amp = 1.0
[osc.0]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 800.0
pw = 0.5
[osc.1]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 540.0
pw = 0.5
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[path.0.env]
AD = { attack_ms = 0.11, decay_ms = 15.0, start = 0.0, amt = 0.375, exp = false }
[path.1]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[path.1.env]
AD = { attack_ms = 15.0, decay_ms = 400.0, start = 0.0, amt = 0.125, exp = true }
[shape_filter]
Bandpass = [2640.0, 1.0]


## template/hat
osc_start = true
amp = 1.0
[args]
decay = 50.0
[osc.0]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 263.0
pw = 0.5
[osc.1]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 400.0
pw = 0.5
[osc.2]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 421.0
pw = 0.5
[osc.3]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 474.0
pw = 0.5
[osc.4]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 587.0
pw = 0.5
[osc.5]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 845.0
pw = 0.5
[path.0]
mix = [0.16666667, 0.16666667, 0.16666667, 0.16666667, 0.16666667, 0.16666667]
[path.0.pre_filter]
Bandpass = [10000.0, 1.0]
[path.0.post_filter]
Highpass = [8000.0, 1.0]
[amp_env]
AD = { attack_ms = 0.1, decay_ms = "$decay", start = 0.0, amt = 1.0, exp = false }


## template/cymbal
osc_start = true
amp = 1.0
[args]
tone = 50.0
decay = 50.0
[vars]
low_decay = "$decay * 8.5 + 700"
low_env_amt = "0.666 + $tone / 100 * (0 - 0.666)"
mid_env_amt = "0.333"
high_env_amt = "$tone / 100 * 0.666"
[osc.0]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 263.0
pw = 0.5
[osc.1]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 400.0
pw = 0.5
[osc.2]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 421.0
pw = 0.5
[osc.3]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 474.0
pw = 0.5
[osc.4]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 587.0
pw = 0.5
[osc.5]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 845.0
pw = 0.5
[path.0]
mix = [0.16666667, 0.16666667, 0.16666667, 0.16666667, 0.16666667, 0.16666667]
[path.0.pre_filter]
Bandpass = [5000.0, 1.0]
[path.0.env]
AD = { attack_ms = 0.1, decay_ms = "$low_decay", start = 0.0, amt = "$low_env_amt", exp = true }
[path.0.post_filter]
Highpass = [5000.0, 1.0]
[path.1]
mix = [0.16666667, 0.16666667, 0.16666667, 0.16666667, 0.16666667, 0.16666667]
[path.1.pre_filter]
Bandpass = [10000.0, 1.0]
[path.1.env]
AD = { attack_ms = 0.1, decay_ms = 400.0, start = 0.0, amt = "$mid_env_amt", exp = true }
[path.1.post_filter]
Highpass = [10000.0, 1.0]
[path.2]
mix = [0.16666667, 0.16666667, 0.16666667, 0.16666667, 0.16666667, 0.16666667]
[path.2.pre_filter]
Bandpass = [10000.0, 1.0]
[path.2.env]
AD = { attack_ms = 0.1, decay_ms = 150.0, start = 0.0, amt = "$high_env_amt", exp = true }
[path.2.post_filter]
Highpass = [8000.0, 1.0]


## instrument/bd
parent = ["bass_drum", 75.0, 50.0]
octave = 2


## instrument/kd
parent = ["bass_drum", 75.0, 50.0]
octave = 2


## instrument/sd
parent = ["snare", 50.0, 50.0]


## instrument/sn
parent = ["snare", 50.0, 50.0]


## instrument/lt
parent = ["tom", 50.0, 100.0, 80.0, 200.0, 200.0]


## instrument/mt
parent = ["tom", 50.0, 160.0, 120.0, 130.0, 155.0]


## instrument/ht
parent = ["tom", 50.0, 220.0, 165.0, 200.0, 125.0]


## instrument/lc
parent = ["conga", 50.0, 220.0, 165.0, 180.0]


## instrument/mc
parent = ["conga", 50.0, 310.0, 250.0, 100.0]


## instrument/hc
parent = ["conga", 50.0, 455.0, 370.0, 180.0]


## instrument/cl
parent = ["claves"]


## instrument/rs
parent = ["rimshot"]


## instrument/ma
parent = ["maracas"]


## instrument/cp
parent = ["handclap"]


## instrument/cb
parent = ["cowbell"]


## instrument/cy
parent = ["cymbal", 50.0, 50.0]


## instrument/oh
parent = ["hat", 360.0]


## instrument/ch
parent = ["hat", 50.0]


## instrument/hh
parent = ["hat", 360.0]



## instrument/kick_deep
parent = ["bass_drum", 50.0, 80.0]
octave = 2


## instrument/kick_punchy
osc_start = true
amp = 1.0
soft_clip = 0.8
[osc.0]
shape = "Sine"
[osc.0.freq]
Swept = { atk = 0.05, dec = 120.0, base = 55.0, amt = 80.0 }
[osc.1]
shape = "WhiteNoise"
freq = "Fixed"
fixed_hz = 0.0
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.0.env]
AD = { attack_ms = 0.5, decay_ms = 120.0, start = 0.0, amt = 1.0, exp = false }
[path.0.post_filter]
Lowpass = [400.0, 1.0]
[path.1]
mix = [0.0, 0.3, 0.0, 0.0, 0.0, 0.0]
[path.1.pre_filter]
Highpass = [2000.0, 0.7]
[path.1.env]
AD = { attack_ms = 0.1, decay_ms = 8.0, start = 0.0, amt = 0.4, exp = false }


## instrument/kick_909
osc_start = true
amp = 1.0
soft_clip = 0.5
[osc.0]
shape = "Sine"
[osc.0.freq]
Swept = { atk = 0.1, dec = 200.0, base = 50.0, amt = 60.0 }
[osc.1]
shape = "WhiteNoise"
freq = "Fixed"
fixed_hz = 0.0
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.0.env]
AD = { attack_ms = 1.0, decay_ms = 200.0, start = 0.0, amt = 1.0, exp = false }
[path.0.post_filter]
Lowpass = [500.0, 1.0]
[path.1]
mix = [0.0, 0.2, 0.0, 0.0, 0.0, 0.0]
[path.1.pre_filter]
Bandpass = [3000.0, 0.8]
[path.1.env]
AD = { attack_ms = 0.1, decay_ms = 15.0, start = 0.0, amt = 0.3, exp = false }


## instrument/kick_dist
parent = ["bass_drum", 90.0, 40.0]
soft_clip = 2.5
octave = 2


## instrument/kick_trap
osc_start = true
amp = 1.0
soft_clip = 0.4
[osc.0]
shape = "Sine"
[osc.0.freq]
Swept = { atk = 0.15, dec = 500.0, base = 40.0, amt = 45.0 }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.0.env]
AD = { attack_ms = 2.0, decay_ms = 500.0, start = 0.0, amt = 1.0, exp = false }
[path.0.post_filter]
Lowpass = [250.0, 1.0]


## instrument/kick_electro
osc_start = true
amp = 1.0
soft_clip = 0.7
[osc.0]
shape = "Sine"
[osc.0.freq]
Swept = { atk = 0.05, dec = 80.0, base = 55.0, amt = 150.0 }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.0.env]
AD = { attack_ms = 0.5, decay_ms = 100.0, start = 0.0, amt = 1.0, exp = true }
[path.0.post_filter]
Lowpass = [600.0, 1.0]



## instrument/snare_tight
parent = ["snare", 60.0, 40.0]


## instrument/snare_fat
parent = ["snare", 30.0, 70.0]


## instrument/snare_noise
osc_start = true
amp = 1.0
[osc.0]
shape = "WhiteNoise"
freq = "Fixed"
fixed_hz = 0.0
[osc.1]
shape = "Sine"
freq = "Fixed"
fixed_hz = 200.0
[path.0]
mix = [0.6, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.0.pre_filter]
Bandpass = [5000.0, 0.8]
[path.0.env]
AD = { attack_ms = 0.1, decay_ms = 120.0, start = 0.0, amt = 0.6, exp = false }
[path.1]
mix = [0.0, 0.4, 0.0, 0.0, 0.0, 0.0]
[path.1.env]
AD = { attack_ms = 0.1, decay_ms = 60.0, start = 0.0, amt = 0.3, exp = false }


## instrument/snare_lo
parent = ["snare", 20.0, 30.0]


## instrument/snare_rim
osc_start = true
amp = 1.0
[osc.0]
shape = "Triangle"
freq = "Fixed"
fixed_hz = 1800.0
[osc.1]
shape = "Sine"
freq = "Fixed"
fixed_hz = 500.0
[path.0]
mix = [0.6, 0.4, 0.0, 0.0, 0.0, 0.0]
[path.0.pre_filter]
Highpass = [1000.0, 1.0]
[path.0.env]
AD = { attack_ms = 0.1, decay_ms = 25.0, start = 0.0, amt = 0.8, exp = true }


## instrument/snare_brush
osc_start = true
amp = 1.0
[osc.0]
shape = "PinkNoise"
freq = "Fixed"
fixed_hz = 0.0
[osc.1]
shape = "Sine"
freq = "Fixed"
fixed_hz = 180.0
[path.0]
mix = [0.5, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.0.pre_filter]
Bandpass = [3000.0, 0.5]
[path.0.env]
AD = { attack_ms = 5.0, decay_ms = 150.0, start = 0.0, amt = 0.3, exp = false }
[path.1]
mix = [0.0, 0.3, 0.0, 0.0, 0.0, 0.0]
[path.1.env]
AD = { attack_ms = 2.0, decay_ms = 80.0, start = 0.0, amt = 0.2, exp = false }



## instrument/hat_tight
parent = ["hat", 20.0]


## instrument/hat_pedal
parent = ["hat", 120.0]


## instrument/hat_sizzle
parent = ["hat", 600.0]


## instrument/hat_trash
osc_start = true
amp = 1.0
[osc.0]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 180.0
pw = 0.5
[osc.1]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 275.0
pw = 0.5
[osc.2]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 330.0
pw = 0.5
[osc.3]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 390.0
pw = 0.5
[osc.4]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 500.0
pw = 0.5
[osc.5]
shape = "Pulse"
freq = "Fixed"
fixed_hz = 700.0
pw = 0.5
[path.0]
mix = [0.16666667, 0.16666667, 0.16666667, 0.16666667, 0.16666667, 0.16666667]
[path.0.pre_filter]
Bandpass = [6000.0, 0.8]
[path.0.post_filter]
Highpass = [4000.0, 1.0]
[amp_env]
AD = { attack_ms = 0.1, decay_ms = 200.0, start = 0.0, amt = 1.0, exp = false }


## instrument/hat_click
parent = ["hat", 8.0]



## template/lead_1osc
amp = 1.0
[args]
cutoff = 3000.0
resonance = 0.15
attack_ms = 5.0
release_ms = 100.0
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = "$attack_ms", decay_ms = 200.0, sustain = 0.8, release_ms = "$release_ms" }
[main_filter]
cutoff = "$cutoff"
resonance = "$resonance"
key_track = 20.0


## template/lead_2osc
amp = 1.0
[args]
cutoff = 3000.0
resonance = 0.15
detune = 5
attack_ms = 5.0
release_ms = 100.0
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = "$detune" } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = "$attack_ms", decay_ms = 200.0, sustain = 0.8, release_ms = "$release_ms" }
[main_filter]
cutoff = "$cutoff"
resonance = "$resonance"
key_track = 20.0


## instrument/lead_saw
parent = ["lead_1osc", 2500.0, 0.15, 5.0, 100.0]
octave = 4
[demo]
pattern = "1 3 5 3 | 5 - 4 3 | 2 - - . | 1 - - ."
bpm = 130
scale = "maj"
root = "c"


## instrument/lead_square
amp = 1.0
octave = 4
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.5
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 5.0, decay_ms = 200.0, sustain = 0.8, release_ms = 80.0 }
[main_filter]
cutoff = 2800.0
resonance = 0.1
key_track = 20.0


## instrument/lead_sync
amp = 1.0
octave = 4
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 7, fine = 0 } }
[osc_interaction]
sync = true
[path.0]
mix = [0.3, 0.7, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 3.0, decay_ms = 150.0, sustain = 0.85, release_ms = 80.0 }
[main_filter]
cutoff = 4000.0
resonance = 0.2
key_track = 25.0


## instrument/lead_wsync_vocal
amp = 1.0
octave = 4
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 7, fine = 0 } }
[osc_interaction]
sync = true
sync_window = 0.6
[path.0]
mix = [0.2, 0.8, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 5.0, decay_ms = 200.0, sustain = 0.85, release_ms = 100.0 }
[main_filter]
cutoff = 3500.0
resonance = 0.25
key_track = 20.0
[demo]
pattern = "1 - 3 5 | 8 - 5 3 | 1 - - ."
bpm = 120
scale = "maj"
root = "c"


## instrument/lead_wsync_smooth
amp = 0.9
octave = 4
osc_start = true
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.3
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 12, fine = 0 } }
[osc_interaction]
sync = true
sync_window = 0.35
[path.0]
mix = [0.1, 0.9, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 1.0, decay_ms = 400.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 3.0, decay_ms = 300.0, sustain = 0.7, release_ms = 80.0 }
[main_filter]
cutoff = 2000.0
resonance = 0.3
env_amt = 3000.0
key_track = 20.0
[demo]
pattern = "1 3 5 8 | 5 3 1 . | 1 3 5 8 | 5 - - ."
bpm = 130
scale = "min"
root = "a"


## instrument/pad_wsync
amp = 0.7
octave = 4
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Triangle"
freq = { Pitched = { semi = 19, fine = 0 } }
[osc_interaction]
sync = true
sync_window = 0.85
[path.0]
mix = [0.3, 0.7, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 200.0, decay_ms = 500.0, sustain = 0.8, release_ms = 300.0 }
[main_filter]
cutoff = 80.0
resonance = 0.15
key_track = 30.0
chorus_send = 0.4
reverb_send = 0.3
[demo]
pattern = "1 - - - | 5 - - - | 3 - - - | 1 - - ."
bpm = 90
scale = "maj"
root = "e"


## instrument/lead_acid
amp = 1.0
octave = 3
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.5, decay_ms = 200.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 1.0, decay_ms = 300.0, sustain = 0.0, release_ms = 10.0 }
[main_filter]
cutoff = 200.0
resonance = 0.65
env_amt = 5000.0
key_track = 15.0


## instrument/lead_porta
amp = 1.0
octave = 4
portamento = 80.0
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 5.0, decay_ms = 200.0, sustain = 0.85, release_ms = 80.0 }
[main_filter]
cutoff = 4000.0
resonance = 0.15
key_track = 20.0
[demo]
pattern = "1 3 5 3 | 5 - 4 3 | 2 - - . | 1 - - ."
bpm = 120
scale = "min"
root = "a"


## instrument/lead_acid_porta
amp = 1.0
octave = 3
portamento = 40.0
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.5, decay_ms = 200.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 1.0, decay_ms = 300.0, sustain = 0.0, release_ms = 10.0 }
[main_filter]
cutoff = 200.0
resonance = 0.65
env_amt = 5000.0
key_track = 15.0
[demo]
pattern = "1 - 3 5 | 1 - 5 3 | 1 - - . | 5 - 3 ."
bpm = 135
scale = "min"
root = "a"


## instrument/bass_porta
amp = 1.0
octave = 2
portamento = 60.0
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.5
[path.0]
mix = [0.6, 0.4, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 3.0, decay_ms = 400.0, sustain = 0.8, release_ms = 50.0 }
[main_filter]
cutoff = 600.0
resonance = 0.2
key_track = 10.0
[demo]
pattern = "1 - 5 1 | 3 - 5 . | 4 - 1 4 | 5 - 3 ."
bpm = 110
scale = "min"
root = "e"


## instrument/lead_brass
amp = 1.0
octave = 4
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 8 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 40.0, decay_ms = 200.0, sustain = 0.6, release_ms = 100.0 }
[amp_env]
ADSR = { attack_ms = 30.0, decay_ms = 100.0, sustain = 0.9, release_ms = 80.0 }
[main_filter]
cutoff = 800.0
resonance = 0.1
env_amt = 3000.0
key_track = 20.0


## instrument/lead_fm
amp = 1.0
octave = 4
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc_interaction]
fm_amt = 0.3
[path.0]
mix = [0.0, 1.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 3.0, decay_ms = 400.0, sustain = 0.6, release_ms = 120.0 }


## instrument/lead_fifth
amp = 1.0
octave = 4
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 7, fine = 0 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 5.0, decay_ms = 200.0, sustain = 0.85, release_ms = 100.0 }
[main_filter]
cutoff = 3500.0
resonance = 0.1
key_track = 20.0


## instrument/lead_bright
parent = ["lead_1osc", 8000.0, 0.0, 3.0, 60.0]
octave = 4


## instrument/lead_phaz
amp = 1.0
octave = 4
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
phaz_diff = 0.35
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 5.0, decay_ms = 200.0, sustain = 0.8, release_ms = 80.0 }
[main_filter]
cutoff = 5000.0
resonance = 0.15
key_track = 20.0
[demo]
pattern = "1 3 5 3 | 5 - 4 3 | 2 - - . | 1 - - ."
bpm = 130
scale = "min"
root = "a"


## instrument/pad_phaz_sweep
amp = 0.9
octave = 4
[lfo]
wave = "Triangle"
rate = 3
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = -6 } }
phaz_diff = 0.25
phaz_diff_lfo_amt = 0.2
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 6 } }
phaz_diff = 0.3
phaz_diff_lfo_amt = 0.15
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 300.0, decay_ms = 600.0, sustain = 0.7, release_ms = 500.0 }
[main_filter]
cutoff = 3000.0
resonance = 0.1
key_track = 15.0
reverb_send = 0.3
[demo]
pattern = "1 - - - | 3 - - - | 5 - - - | 1 - - -"
bpm = 80
scale = "min"
root = "d"


## instrument/bass_phaz
amp = 1.0
octave = 3
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
phaz_diff = 0.4
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.5, decay_ms = 250.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 2.0, decay_ms = 300.0, sustain = 0.7, release_ms = 50.0 }
[main_filter]
mode = "Lowpass"
cutoff = 400.0
resonance = 0.25
env_amt = 3000.0
key_track = 10.0
[demo]
pattern = "1 - - 1 | 1 - 5 . | 1 - - 1 | 5 - 3 ."
bpm = 115
scale = "min"
root = "e"


## instrument/lead_svf
amp = 1.0
octave = 4
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = -5 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 5 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 1.0, decay_ms = 300.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 3.0, decay_ms = 200.0, sustain = 0.85, release_ms = 80.0 }
[main_filter]
engine = "Svf"
cutoff = 3500.0
resonance = 0.3
morph = 0.25
env_amt = 2000.0
key_track = 15.0
[demo]
pattern = "1 3 5 3 | 5 - 4 3 | 2 - - . | 1 - - ."
bpm = 130
scale = "min"
root = "a"


## instrument/pad_svf_sweep
amp = 0.9
octave = 4
[lfo]
wave = "Triangle"
rate = 3
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = -7 } }
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 7 } }
pw = 0.4
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 400.0, decay_ms = 800.0, sustain = 0.7, release_ms = 600.0 }
[main_filter]
engine = "Svf"
cutoff = 2000.0
resonance = 0.2
morph = 0.3
morph_lfo_amt = 0.4
key_track = 10.0
reverb_send = 0.35
[demo]
pattern = "1 - - - | 3 - - - | 5 - - - | 1 - - -"
bpm = 80
scale = "min"
root = "d"


## instrument/bass_svf_rez
amp = 1.0
octave = 3
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.5, decay_ms = 200.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 1.0, decay_ms = 300.0, sustain = 0.7, release_ms = 40.0 }
[main_filter]
engine = "Svf"
cutoff = 300.0
resonance = 0.6
morph = 0.0
morph_env_amt = 0.3
env_amt = 2500.0
key_track = 10.0
[demo]
pattern = "1 - - 1 | 1 - 5 . | 1 - - 1 | 5 - 3 ."
bpm = 115
scale = "min"
root = "e"


## instrument/aha_take_on_me_lead
parent = ["lead_1osc", 8000.0, 0.0, 3.0, 60.0]
octave = 4



## instrument/pad_warm
amp = 1.0
octave = 4
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = -8 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 8 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 200.0, decay_ms = 500.0, sustain = 0.8, release_ms = 400.0 }
[main_filter]
cutoff = 1500.0
resonance = 0.05
key_track = 15.0


## instrument/pad_string
amp = 1.0
octave = 4
unison = 3
unison_detune = 0.12
unison_spread = 0.6
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 300.0, decay_ms = 800.0, sustain = 0.85, release_ms = 500.0 }
[main_filter]
cutoff = 2000.0
resonance = 0.0
key_track = 15.0


## instrument/pad_glass
amp = 1.0
octave = 4
[osc.0]
shape = "Triangle"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Triangle"
freq = { Pitched = { semi = 12, fine = 5 } }
[path.0]
mix = [0.6, 0.4, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 150.0, decay_ms = 600.0, sustain = 0.7, release_ms = 500.0 }
[main_filter]
cutoff = 4000.0
resonance = 0.1
key_track = 20.0


## instrument/pad_choir
amp = 1.0
octave = 4
[lfo]
wave = "Triangle"
rate = 3
mode = "Free"
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.35
pw_lfo_amt = 0.2
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 6 } }
pw = 0.45
pw_lfo_amt = 0.15
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 250.0, decay_ms = 500.0, sustain = 0.8, release_ms = 400.0 }
[main_filter]
cutoff = 1800.0
resonance = 0.05
key_track = 15.0


## instrument/pad_evolve
amp = 1.0
octave = 4
lfo1_to_lfo2_depth = 0.9
[lfo]
wave = "Sine"
rate = 1
mode = "Free"
[lfo2]
wave = "Triangle"
rate = 4
mode = "Free"
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = -5 } }
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 5 } }
pw = 0.4
pw_lfo2_amt = 0.15
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 300.0, decay_ms = 800.0, sustain = 0.75, release_ms = 500.0 }
[main_filter]
cutoff = 2000.0
resonance = 0.1
lfo2_amt = 800.0
key_track = 10.0
[demo]
pattern = "1 3 5 3 | 5 - 4 3 | 2 - - . | 1 - - ."
bpm = 90
scale = "min"
root = "d"


## instrument/lead_vibrato_swell
amp = 1.0
octave = 4
lfo1_to_lfo2_depth = 1.0
[lfo]
wave = "Sine"
rate = 1
mode = "Trig"
[lfo2]
wave = "Sine"
rate = 6
mode = "Trig"
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
pitch_lfo2_amt = 0.15
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 10.0, decay_ms = 300.0, sustain = 0.9, release_ms = 100.0 }
[main_filter]
cutoff = 3000.0
resonance = 0.1
key_track = 15.0
[demo]
pattern = "1 - 3 - | 5 - 3 - | 4 - 2 - | 1 - - ."
bpm = 120
scale = "min"
root = "a"


## instrument/pad_shimmer
amp = 1.0
octave = 4
pan_lfo2_amt = 0.6
[lfo]
wave = "Sine"
rate = 4
mode = "Free"
[lfo2]
wave = "Triangle"
rate = 2
mode = "Free"
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = -3 } }
pw = 0.3
pw_lfo_amt = 0.2
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 3 } }
pw = 0.5
pw_lfo2_amt = 0.25
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 200.0, decay_ms = 600.0, sustain = 0.8, release_ms = 400.0 }
[main_filter]
cutoff = 2500.0
resonance = 0.08
lfo_amt = 400.0
lfo2_amt = 600.0
key_track = 12.0
[demo]
pattern = "1 - 5 - | 3 - 1 - | 4 - 2 - | 5 - - ."
bpm = 100
scale = "maj"
root = "f"


## instrument/pad_dark
amp = 1.0
octave = 3
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = -5 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 5 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 400.0, decay_ms = 1000.0, sustain = 0.7, release_ms = 600.0 }
[main_filter]
cutoff = 500.0
resonance = 0.15
key_track = 10.0


## instrument/pad_fbverb_wash
amp = 0.6
octave = 4
reverb_send = 0.8
dry_send = 0.3
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.3
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
AD = { attack_ms = 5.0, decay_ms = 400.0, start = 0.0, amt = 1.0, exp = true }
[main_filter]
cutoff = 2000.0
resonance = 0.1
key_track = 15.0
[demo]
pattern = "1 - - - | 5 - - - | 3 - - - | 1 - - -"
bpm = 70
scale = "min"
root = "d"


## instrument/pad_fbverb_drone
amp = 0.5
octave = 3
reverb_send = 0.9
dry_send = 0.2
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Sine"
freq = { Pitched = { semi = 7, fine = 2 } }
[path.0]
mix = [0.6, 0.4, 0.0, 0.0, 0.0, 0.0]
[amp_env]
AD = { attack_ms = 10.0, decay_ms = 600.0, start = 0.0, amt = 1.0, exp = true }
[demo]
pattern = "1 - - - - - - - | 5 - - - - - - -"
bpm = 60
scale = "min"
root = "a"


## instrument/pad_supersaw
amp = 1.0
octave = 4
unison = 4
unison_detune = 0.15
unison_spread = 0.8
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 100.0, decay_ms = 400.0, sustain = 0.85, release_ms = 350.0 }
[main_filter]
cutoff = 3000.0
resonance = 0.05
key_track = 18.0



## instrument/keys_epiano
amp = 1.0
octave = 4
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Sine"
freq = { Pitched = { semi = 12, fine = 0 } }
[path.0]
mix = [0.7, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.1]
mix = [0.0, 0.3, 0.0, 0.0, 0.0, 0.0]
[path.1.env]
AD = { attack_ms = 0.1, decay_ms = 800.0, start = 0.0, amt = 0.3, exp = true }
[amp_env]
ADSR = { attack_ms = 1.0, decay_ms = 1500.0, sustain = 0.0, release_ms = 200.0 }


## instrument/keys_organ
amp = 1.0
octave = 4
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Sine"
freq = { Pitched = { semi = 12, fine = 0 } }
[osc.2]
shape = "Sine"
freq = { Pitched = { semi = 19, fine = 2 } }
[path.0]
mix = [0.5, 0.3, 0.2, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 2.0, decay_ms = 100.0, sustain = 1.0, release_ms = 30.0 }


## instrument/keys_bell
amp = 1.0
octave = 5
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Sine"
freq = { Pitched = { semi = 14, fine = 10 } }
[osc.2]
shape = "Sine"
freq = { Pitched = { semi = 24, fine = 20 } }
[path.0]
mix = [0.5, 0.0, 0.0, 0.0, 0.0, 0.0]
[path.1]
mix = [0.0, 0.3, 0.0, 0.0, 0.0, 0.0]
[path.1.env]
AD = { attack_ms = 0.1, decay_ms = 1200.0, start = 0.0, amt = 0.3, exp = true }
[path.2]
mix = [0.0, 0.0, 0.2, 0.0, 0.0, 0.0]
[path.2.env]
AD = { attack_ms = 0.1, decay_ms = 600.0, start = 0.0, amt = 0.2, exp = true }
[amp_env]
ADSR = { attack_ms = 1.0, decay_ms = 2000.0, sustain = 0.0, release_ms = 300.0 }


## instrument/keys_clav
amp = 1.0
octave = 4
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.4
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.5, decay_ms = 100.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 1.0, decay_ms = 600.0, sustain = 0.0, release_ms = 30.0 }
[main_filter]
cutoff = 1500.0
resonance = 0.2
env_amt = 4000.0
key_track = 25.0


## instrument/keys_marimba
amp = 1.0
octave = 4
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 1.0, decay_ms = 800.0, sustain = 0.0, release_ms = 80.0 }


## instrument/keys_music_box
amp = 1.0
octave = 6
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Triangle"
freq = { Pitched = { semi = 12, fine = 0 } }
[path.0]
mix = [0.7, 0.3, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.5, decay_ms = 1500.0, sustain = 0.0, release_ms = 200.0 }



## instrument/pluck_guitar
amp = 1.0
octave = 3
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.5, decay_ms = 300.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 1.0, decay_ms = 800.0, sustain = 0.0, release_ms = 50.0 }
[main_filter]
cutoff = 400.0
resonance = 0.1
env_amt = 4000.0
key_track = 20.0


## instrument/pluck_harp
amp = 1.0
octave = 4
[osc.0]
shape = "Triangle"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.5, decay_ms = 400.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 2.0, decay_ms = 1200.0, sustain = 0.0, release_ms = 150.0 }
[main_filter]
cutoff = 600.0
resonance = 0.05
env_amt = 3000.0
key_track = 20.0


## instrument/pluck_kalimba
amp = 1.0
octave = 5
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.5, decay_ms = 600.0, sustain = 0.0, release_ms = 60.0 }


## instrument/pluck_synth
amp = 1.0
octave = 4
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.3, decay_ms = 120.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 0.5, decay_ms = 400.0, sustain = 0.0, release_ms = 30.0 }
[main_filter]
cutoff = 300.0
resonance = 0.3
env_amt = 6000.0
key_track = 20.0


## instrument/pluck_metal
amp = 1.0
octave = 4
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.3
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.3, decay_ms = 80.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 0.5, decay_ms = 500.0, sustain = 0.0, release_ms = 40.0 }
[main_filter]
cutoff = 500.0
resonance = 0.5
env_amt = 5000.0
key_track = 25.0


## instrument/pluck_pizz
amp = 1.0
octave = 4
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 5 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.3, decay_ms = 60.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 0.5, decay_ms = 250.0, sustain = 0.0, release_ms = 20.0 }
[main_filter]
cutoff = 500.0
resonance = 0.1
env_amt = 3000.0
key_track = 20.0



## instrument/bass
amp = 1.0
octave = 2
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 8 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.5, decay_ms = 300.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 2.0, decay_ms = 500.0, sustain = 0.7, release_ms = 50.0 }
[main_filter]
cutoff = 300.0
resonance = 0.15
env_amt = 2000.0
key_track = 10.0
[demo]
pattern = "c . c . | c - d e"
bpm = 120
scale = "min"
root = "c"


## instrument/bass_sub
amp = 1.0
octave = 2
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 5.0, decay_ms = 300.0, sustain = 0.9, release_ms = 40.0 }


## instrument/bass_acid
amp = 1.0
octave = 2
soft_clip = 0.8
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.3, decay_ms = 150.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 1.0, decay_ms = 250.0, sustain = 0.0, release_ms = 10.0 }
[main_filter]
cutoff = 150.0
resonance = 0.7
env_amt = 6000.0
key_track = 10.0


## instrument/bass_wobble
amp = 1.0
octave = 2
[lfo]
wave = "Sine"
rate = 3
mode = "Free"
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 10 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 5.0, decay_ms = 200.0, sustain = 0.9, release_ms = 60.0 }
[main_filter]
cutoff = 400.0
resonance = 0.4
lfo_amt = 2000.0
key_track = 10.0


## instrument/bass_pluck
amp = 1.0
octave = 2
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.3, decay_ms = 100.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 1.0, decay_ms = 400.0, sustain = 0.0, release_ms = 30.0 }
[main_filter]
cutoff = 200.0
resonance = 0.2
env_amt = 4000.0
key_track = 10.0


## instrument/bass_reese
amp = 1.0
octave = 2
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = -12 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 12 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 5.0, decay_ms = 300.0, sustain = 0.85, release_ms = 60.0 }
[main_filter]
cutoff = 600.0
resonance = 0.1
key_track = 8.0


## instrument/bass_fm
amp = 1.0
octave = 2
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc_interaction]
fm_amt = 0.5
fm_env_amt = 1.5
[pitch_env]
AD = { attack_ms = 0.3, decay_ms = 100.0, start = 0.0, amt = 1.0, exp = true }
[path.0]
mix = [0.0, 1.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 1.0, decay_ms = 500.0, sustain = 0.3, release_ms = 50.0 }


## instrument/lead_feedback
amp = 1.0
octave = 4
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc_interaction]
feedback_fm = 0.7
fm_amt = 0.2
[path.0]
mix = [0.3, 0.7, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 3.0, decay_ms = 400.0, sustain = 0.6, release_ms = 120.0 }
[main_filter]
cutoff = 100.0
resonance = 0.15
key_track = 15.0
[demo]
pattern = "1 - 3 5 | 1 - - . | 5 - 3 1 | 5 - - ."
bpm = 120
scale = "min"
root = "a"

## instrument/bass_feedback
amp = 1.0
octave = 2
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc_interaction]
feedback_fm = 1.2
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.3, decay_ms = 200.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 1.0, decay_ms = 600.0, sustain = 0.3, release_ms = 50.0 }
[main_filter]
cutoff = 60.0
resonance = 0.3
env_amt = 40.0
key_track = 10.0
[demo]
pattern = "1 - - 1 | - - 5 - | 1 - - 1 | - - 3 -"
bpm = 110
scale = "min"
root = "e"

## instrument/pad_feedback
amp = 0.7
octave = 4
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = -6 } }
[osc.1]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 6 } }
[osc_interaction]
feedback_fm = 0.4
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 300.0, decay_ms = 800.0, sustain = 0.7, release_ms = 500.0 }
[main_filter]
cutoff = 85.0
resonance = 0.1
key_track = 20.0
[demo]
pattern = "1 - - - | 3 - - - | 5 - - - | 1 - - -"
bpm = 80
scale = "min"
root = "d"


## instrument/jpluck
amp = 1.0
octave = 4
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 5 } }
pw = 0.4
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.3, decay_ms = 150.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 0.5, decay_ms = 350.0, sustain = 0.0, release_ms = 40.0 }
[main_filter]
cutoff = 400.0
resonance = 0.25
env_amt = 5000.0
key_track = 20.0


## pattern1
pattern main
  ch: xo oo xo oo | xo oo xo oo
  sd: .. o. .. o. | .. o. .. o.
  bd: o. .o .. .. | .. .o .. .o

part main_part
  bpm 110
  main

score
  main_part

## pattern2
pattern main
  ch: oo oo oo oo | oo oo oo oo
  cp: .. o. .. o. | .. o. .. o.
  bd: o. .o o. .. | .. .. oo ..
  cb: o. .. o. .. | o. .. o. ..

part main_part
  bpm 120
  main

score
  main_part

## pattern3
pattern main
  oh: .o .o .o .o | .o .o .o .o
  ch: o. o. o. o. | o. o. o. o.
  sd: .. o. .. o. | .. o. .. o.
  bd: o. o. o. o. | o. o. o. o.

part main_part
  bpm 124
  main

score
  main_part

## pattern3_duo
pattern main
  oh: .o .o .o .o
  ch: o. o. o. o.
  sd: .. o. .. o.
  bd: o. o. o. o.
  &
  oh: .o .o .o .o
  ch: o. o. o. o.
  sd: .. o. .. o.
  bd: o. o. o. o.

part main_part
  bpm 124
  main

score
  main_part

## pattern3_weird
pattern first
  swing 62
  oh: .o .o .o .o
  ch: o. o. o. o.
  sd: .. o. .. o.
  bd: o. o. o. o.

pattern second
  swing 0
  oh: .o .o .o .o
  ch: o. o. o. o.
  sd: .. o. .. o.
  bd: o. o. o. o.

part part_1
  bpm 124
  first

part part_2
  bpm 120
  second

score
  part_1
  part_2

## pattern4
pattern main
  ch: o.o .o. o.o .o.
  sd: .o. o.o .o. o.o
  bd: o.o .o. o.o .o.

part main_part
  main

score
  main_part

## funky
pattern main
  swing 62
  bd: o--- ---- o--- ----
  sd: ---- o--- ---- o---
  ch: o-o- o-o- o-o- o-o-

part main_part
  bpm 100
  main

score
  main_part

## burning-up
pattern main
  ch: o.o. o.o. o.o. o.oo
  cp: .... o.o. .... o...
  sd: .... o.o. .... o...
  bd: o... o... o... o.o.

part main_part
  bpm 140
  main

score
  main_part

## get-a-little
pattern main
  ch: oooo oo.o oooo oo.o
  oh: .... ...o .... ...o
  ma: o.oo o.oo o.oo o.oo
  hc: .... .... .... .o..
  cb: o..o ...o ..oo o...
  cp: .... o... .... ....
  rs: .... .... .... o...
  sd: .... o... .... o...
  bd: o... .... o... ....

part main_part
  main

score
  main_part

## i-wanna-dance-with-somebody
pattern main
  ma: o.oo oo.o oooo oo.o
  cp: .oo. o.o. o... o...
  cb: .... .... .ooo .o.o
  sd: .... o... .... o...
  bd: o..o .... o... ....

part main_part
  bpm 119
  main

score
  main_part

## never-gonna-give-you-up
pattern main
  ht: .... oo.o .... ....
  mt: .... .... oo.. ....
  lt: .... .... ..oo oooo
  sd: .... oo.o oooo oooo
  bd: .... .... .... ...o

part main_part
  bpm 113
  main

score
  main_part

## standard
pattern main
  ch: o.o. o.o. o.o. o.o.
  sd: .... o... .... o...
  bd: o... .... o... ....

part main_part
  main

score
  main_part

## thriller
pattern main
  ch: o.o. o.oo o.o. o.o.
  oh: .... .... ...o ...o
  hc: ...o ..o. .... ....
  lc: .... o... o..o ..o.
  cb: ...o ...o .... ....
  cp: .... .... .... o...
  sd: .... o... .... o...
  bd: o... o... o... o...

part main_part
  bpm 118
  main

score
  main_part

## tom-sawyer
pattern main
  mc: oooo .... .... ....
  lc: .... ooo. .... ....
  ht: .... ...o o... ....
  mt: .... .... .o.. ....
  lt: .... .... ..oo oooo
  cy: o... .o.o .o.. ....
  bd: o..o o..o oo.. o..o

part main_part
  bpm 180
  main

score
  main_part

## accented-house
pattern main
  ac: o... .... o... ....
  ch: oooo oooo oooo oooo
  oh: .... ...o .... ...o
  sd: .... x... .... x...
  bd: x..o ..o. x..o ..o.

part main_part
  bpm 126
  main

score
  main_part

## in-the-air-tonight
pattern main
  oh: o... .... .... o... | o... .... .... o...
  ch: ..o. ..o. ..o. ..o. | ..o. ..o. ..o. ..o.
  lc: ..o. ..o. .... x... | ..o. ..o. .... x...
  bd: ..o. o.o. ..o. .... | o.o. x.o. o.o. x.o.

part main_part
  bpm 94.5
  main

score
  main_part

## bass1_ex1
pattern main
  instrument bass
  octave 3
  *: c. .c c. .c- | -- c. c. ..
  oh: oo oo oo oo | oo oo oo oo
  sd: .. o. .. o. | .. o. .. o.
  bd: o. .o o. .. | .. .. o. .o

part main_part
  bpm 110
  main

score
  main_part

## chords1_ex1
pattern main
  root c
  lead: instrument pad_warm
  bass: instrument bass_reese
  &
  lead: .. 2- 2. .. | .. 2- 2. ..
  lead: .. 0- 0. .. | .. 0- 0. ..
  bass: g. .. gg .g | -- g. g. ..
  oh: oo oo oo oo | oo oo oo oo
  sd: .. o. .. o. | .. o. .. o.
  bd: o. .. oo .. | .. o. o. .o

part main_part
  bpm 110
  main

score
  main_part

## simple_scale
pattern main
  instrument keys_epiano
  *: 0 1 2 3 | 4 5 6 7 | 8 7 6 5 | 4 3 2 1
  &
  *: 01 23 45 56 | 76 54 32 10

part main_part
  bpm 120
  main

score
  main_part

## boom_bap
pattern main
  ch: swing 52 o.o. o.o. o.o. o.o.
  sd: swing 63 .... o... .... o.o.
  bd: swing 50 o..o .... ..o. ....

part main_part
  bpm 90
  main

score
  main_part

## all_drums
pattern main
  bd: o
  &
  sd: o
  &
  lt: o
  &
  mt: o
  &
  ht: o
  &
  lc: o
  &
  mc: o
  &
  hc: o
  &
  cl: o
  &
  rs: o
  &
  ma: o
  &
  cp: o
  &
  cb: o
  &
  cy: o
  &
  oh: o
  &
  ch: o

part main_part
  bpm 120
  main

score
  main_part

## instrument_test
pattern main
  root c
  kick_deep: o... o... o... o...
  snare_fat: .... o... .... o...
  hat_tight: oooo oooo oooo oooo
  lead_saw: 0 1 2 3
  bass: g... g... g... g...
  &
  pad_warm: 0--- ---- ---- ----
  keys_epiano: 0.2. 4.2. 0.2. 4.2.
  pluck_guitar: 0.1.2.3. 4.3.2.1. 0.1.2.3. 4.3.2.1.

part main_part
  bpm 120
  main

score
  main_part

## instrument/lofi_keys
amp = 1.0
octave = 4
bit_crush = 8
decimate = 3
chorus_send = 0.4
reverb_send = 0.3
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.5
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 7 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 5.0, decay_ms = 400.0, sustain = 0.6, release_ms = 120.0 }
[main_filter]
cutoff = 2000.0
resonance = 0.1
key_track = 15.0


## instrument/wavefold_bass
amp = 1.0
octave = 2
wavefold = 2.5
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.5, decay_ms = 200.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 2.0, decay_ms = 300.0, sustain = 0.7, release_ms = 40.0 }
[main_filter]
cutoff = 400.0
resonance = 0.2
env_amt = 1500.0
key_track = 10.0


## instrument/crushed_snare
parent = ["snare", 200.0, 160.0, 7500.0, 0.3, 2.0, 0.5, 50.0, 110.0]
bit_crush = 6


## instrument/folded_lead
amp = 1.0
octave = 4
wavefold = 1.8
delay_send = 0.3
reverb_send = 0.2
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 5.0, decay_ms = 500.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 5.0, decay_ms = 200.0, sustain = 0.8, release_ms = 100.0 }
[main_filter]
cutoff = 1500.0
resonance = 0.2
env_amt = 3000.0
lfo_amt = 500.0
key_track = 20.0


## instrument/crunch_lead
amp = 1.0
octave = 4
hard_clip = [3.0, 0.8]
delay_send = 0.25
reverb_send = 0.15
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 5.0, decay_ms = 300.0, sustain = 0.7, release_ms = 100.0 }
[main_filter]
cutoff = 3500.0
resonance = 0.15
key_track = 20.0
[demo]
pattern = "1 - 3 5 | 1 - - . | 5 3 1 . | 5 - - ."
bpm = 130
scale = "min"
root = "a"


## instrument/fuzz_bass
amp = 1.0
octave = 2
hard_clip = [8.0, 0.35]
soft_clip = 0.6
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = -8 } }
pw = 0.4
[path.0]
mix = [0.6, 0.4, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.5, decay_ms = 250.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 2.0, decay_ms = 400.0, sustain = 0.6, release_ms = 40.0 }
[main_filter]
cutoff = 300.0
resonance = 0.3
env_amt = 1200.0
key_track = 10.0
[demo]
pattern = "1 - - 1 | - - 5 - | 1 - - 1 | - - 3 -"
bpm = 100
scale = "min"
root = "e"


## instrument/metal_dist
amp = 0.9
octave = 3
hard_clip = [10.0, 0.3]
wavefold = 1.2
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = -5 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 5 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 3.0, decay_ms = 200.0, sustain = 0.9, release_ms = 80.0 }
[main_filter]
cutoff = 2000.0
resonance = 0.25
key_track = 15.0
[demo]
pattern = "1 1 - 1 | 1 - 1 - | b7 b7 - b7 | b7 - 5 -"
bpm = 140
scale = "min"
root = "e"


## instrument/clip_pad
amp = 0.7
octave = 4
hard_clip = [2.0, 0.9]
reverb_send = 0.4
chorus_send = 0.3
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = -6 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 6 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 200.0, decay_ms = 600.0, sustain = 0.7, release_ms = 400.0 }
[main_filter]
cutoff = 2500.0
resonance = 0.1
key_track = 20.0
[demo]
pattern = "1 - - - | 3 - - - | 5 - - - | 1 - - -"
bpm = 90
scale = "maj"
root = "c"


## fx_demo
pattern main
  scale maj root c
  bd: o... .... o... ....
  sd: .... o... .... o...
  ch: oooo oooo oooo oooo
  &
  instrument folded_lead
  delay_send 0.3 reverb_send 0.2
  *: 0 1 2 3
  &
  instrument lofi_keys
  chorus_send 0.4 reverb_send 0.3
  *: 0--- ---- 2--- ----

part main_part
  bpm 120
  chorus_rate 1.5
  chorus_depth 0.6
  chorus_mix 0.5
  delay_time 4
  delay_feedback 0.4
  delay_damping 0.3
  delay_mix 0.4
  reverb_size 0.6
  reverb_mix 0.3
  chorus_to_reverb 0.3
  delay_to_reverb 0.2
  main

score
  main_part

## sidechain_demo
pattern main
  bd: o... o... o... o...
  sd: .... o... .... o...
  ch: oooo oooo oooo oooo
  &
  instrument pad_warm
  reverb_send 0.3
  *: 0--- ---- ---- ----

part main_part
  bpm 128
  sidechain main.bd sidechain_amt 0.8 sidechain_release 150
  reverb_size 0.5 reverb_mix 0.2
  main

score
  main_part

## accented_melody
pattern main
  scale min root a
  instrument lead_acid
  legato staccato
  velocity 80
  instrument lead_acid
  legato staccato
  *: >0 1 2 >3 | 4 >5 velocity 60 4 3 | >2 1 velocity 80 >0 . | 0 - - .

part main_part
  bpm 120
  main

score
  main_part

## glide_bass
pattern main
  scale pent-min root e_
  instrument bass
  legato legato
  glide 80
  *: 0 - ~2 - | ~4 - ~2 - | 0 - ~3 - | ~2 - ~0 -

part main_part
  bpm 100
  main

score
  main_part

## arp_demo
pattern main
  scale min root a
  instrument folded_lead
  legato legato
  arp min arp_rate 4 arp_mode updown
  chorus_send 0.3 reverb_send 0.4
  *: 0 - - - | 3 - - - | 2 - - - | 0 - - .

part main_part
  bpm 126
  main

score
  main_part

## arp_slide_demo
pattern main
  scale maj root c
  instrument bass
  legato legato
  arp major arp_rate 8 arp_slide true arp_octaves 2
  *: 0 - - - | 4 - - - | 2 - - - | 0 - - .

part main_part
  bpm 110
  main

score
  main_part

## humanize_demo
// Humanize applied at the part level — all tracks get subtle timing variation
pattern drums
  ch: o.o. o.o. o.o. o.o.
  sd: .... o... .... o...
  bd: o..o ..o. o..o ..o.

part main_part
  bpm 105
  humanize 35
  drums

score
  main_part

## humanize_mixed
// Tight drums (no humanize) with a loose humanized melody
pattern drums
  ch: oo oo oo oo
  sd: .... o... .... o...
  bd: o... .... o.o. ....

pattern melody
  humanize 40
  instrument lead
  scale min root a
  octave 4
  legato arco
  *: 0 - 2 - | 4 - 3 - | 2 - 0 - | . - - .

part main_part
  bpm 110
  drums {times 4}
  melody

score
  main_part

## humanize_inline
// Inline humanize change: tight intro then loose
pattern drums
  ch: oo oo | humanize 50 oo oo
  sd: .... o... | .... o...
  bd: o... .... | o.o. ....

part main_part
  bpm 120
  drums

score
  main_part

## strum_chord
// Basic chord strum — three voices stagger onset, drums unaffected
pattern chord
  strum 25
  instrument pad
  scale maj root c
  octave 4
  legato arco
  strum_idx 0
  a: 0 . 0 . | 0 . 0 .
  strum_idx 1
  b: 2 . 2 . | 2 . 2 .
  strum_idx 2
  c: 4 . 4 . | 4 . 4 .

pattern drums
  ch: o.o. o.o. o.o. o.o.
  sd: .... o... .... o...
  bd: o... ..o. o... ..o.

part main_part
  bpm 110
  chord
  drums { times 2 }

score
  main_part

## strum_humanize
// Strum with humanize — chord stays together but drifts naturally
pattern strum_chords
  strum 30
  humanize 40
  instrument pad
  scale min root a
  octave 3
  legato arco
  strum_idx 0
  lo: 0 . . . | 0 . . .
  strum_idx 1
  mid: 2 . . . | 2 . . .
  strum_idx 2
  hi: 4 . . . | 4 . . .

pattern beat
  humanize 25
  ch: o.oo o.oo o.oo o.oo
  sd: .... o... .... o.o.
  bd: o..o .... o..o ....

part main_part
  bpm 95
  strum_chords
  beat { times 2 }

score
  main_part

## pop_demo
pattern intro_drums
  ch: o.o. o.o. o.o. o.o. | o.o. o.o. o.o. o.o.
  sd: .... o... .... o... | .... o... .... o...
  bd: o... .... o.o. .... | o... .... o.o. ....

pattern intro_bass
  instrument bass
  octave 3
  legato arco
  reverb_send 0.2
  *: c... .... .... .... | .... .... c... ---- | c... .... .... .... | .... .... g... ----

pattern verse_drums
  ch: o.o. o.o. o.o. o.o. | o.o. o.o. o.o. o.oo
  sd: .... o... .... o... | .... o... .... o.o.
  bd: o... ..o. o.o. .... | o... ..o. o... ....

pattern verse_bass
  instrument bass
  octave 3
  legato arco
  reverb_send 0.2
  *: c. .c c. .c | -- c. g. .. | a_. .a_ a_. .a_ | -- a_. g. .. | c. .c c. .c | -- c. g. .. | f. .f f. .f | -- f. g. ..

pattern chorus_drums
  oh: .... ...o .... ...o | .... ...o .... ...o
  ch: o.o. o.o. o.o. o.o. | o.o. o.o. o.o. o.o.
  sd: .... o... .... o... | .... o... .... o.o.
  bd: o..o ..o. o..o ..o. | o..o ..o. o... o.o.

pattern chorus_bass
  instrument bass_sub
  octave 2
  legato arco
  reverb_send 0.2
  *: c. .c c. .c | -- c. g. .. | a_. .a_ a_. .a_ | -- a_. e_. .. | f. .f f. .f | -- f. c. .. | g. .g g. .g | -- g. g. ..

pattern chorus_lead
  instrument lead_bright
  octave 5
  legato arco
  chorus_send 0.4 delay_send 0.3 reverb_send 0.5
  scale maj root c
  *: 4 - 3 2 | 0 - - . | 4 - 3 2 | 4 - - . | 4 - 3 2 | 0 - - . | 2 - 1 0 | 0 - - .

pattern bridge_drums
  ch: o... o... o... o... | o... o... o... o...
  sd: .... o... .... o... | .... o... .... o...
  bd: o... .... .... .... | o... .... .... ....

pattern bridge_pad
  instrument pad_warm
  octave 4
  legato legato
  chorus_send 0.5 reverb_send 0.7
  scale maj root c
  *: 0 - - - | - - - - | 4 - - - | - - - - | 3 - - - | - - - - | 0 - - - | - - - .

part part_1
  // intro: drums only (4 bars)
  bpm 120
  reverb_size 0.4 reverb_mix 0.2
  intro_drums { times 2 }
  intro_bass

part part_2
  // verse: drums + bass (8 bars)
  bpm 120
  reverb_size 0.4 reverb_mix 0.2
  verse_drums { times 8 }
  verse_bass { times 2 }

part part_3
  // chorus: drums + bass + lead (8 bars)
  bpm 120
  reverb_size 0.4 reverb_mix 0.2
  sidechain chorus_drums.bd sidechain_amt 0.4 sidechain_release 80
  delay_time 4 delay_feedback 0.3 delay_mix 0.4
  chorus_rate 1.2 chorus_depth 0.4 chorus_mix 0.3
  chorus_drums { times 8 }
  chorus_bass { times 2 }
  chorus_lead { times 2 }

part part_4
  // bridge: drums + pad (4 bars)
  bpm 120
  reverb_size 0.7 reverb_mix 0.4
  chorus_rate 0.8 chorus_depth 0.5 chorus_mix 0.4
  bridge_drums { times 4 }
  bridge_pad

part part_5
  // verse 2
  bpm 120
  reverb_size 0.4 reverb_mix 0.2
  verse_drums { times 8 }
  verse_bass { times 2 }

part part_6
  // chorus 2
  bpm 120
  reverb_size 0.4 reverb_mix 0.2
  sidechain chorus_drums.bd sidechain_amt 0.4 sidechain_release 80
  delay_time 4 delay_feedback 0.3 delay_mix 0.4
  chorus_rate 1.2 chorus_depth 0.4 chorus_mix 0.3
  chorus_drums { times 8 }
  chorus_bass { times 2 }
  chorus_lead { times 2 }

part part_7
  // outro: drums fade out (4 bars)
  bpm 120
  reverb_size 0.4 reverb_mix 0.2
  intro_drums { times 2 }
  intro_bass { mix 0.5 }

score
  part_1
  part_2
  part_3
  part_4
  part_5
  part_6
  part_7

## prob_drums_demo
// Per-step probability: ghost notes and hi-hat variations
pattern drums
  // Ghost snare hits at 30%, open hat flams at 25%
  oh: ........ ...o?25. ........ ...o?25.
  ch: o.o.o.o. o.o.o.o. o.o.o.o. o.o.o.o.
  sd: ....o?30 o...o?30 ....o?30 o.......
  bd: o....... ..o..... o...o... ..o.....

part main
  bpm 120
  reverb_size 0.3 reverb_mix 0.2
  drums

score
  main

## prob_melody_demo
// Per-step probability: evolving melody with random note drops
pattern beat
  ch: o.o. o.o. o.o. o.o.
  sd: .... o... .... o...
  bd: o... .... o.o. ....

pattern melody
  instrument folded_lead
  octave 4
  scale min root e_
  legato arco
  chorus_send 0.3 reverb_send 0.5
  // Core melody with some notes randomly dropped
  *: 0?80 - 2?60 - | 4 - 3?70 - | 2?80 - 1?50 - | 0 - - .

part main
  bpm 126
  reverb_size 0.6 reverb_mix 0.3
  delay_time 4 delay_feedback 0.3 delay_mix 0.3
  beat { times 4 }
  melody

score
  main

## prob_techno_demo
// Per-step probability: techno pattern with stochastic percussion
pattern drums
  // Kick is solid, everything else has probability for variation
  oh: .......o?25 .......o?25 .......o?25 .......o?25
  ch: o?90.o?70. o?90.o?70. o?90.o?70. o?90.o?70.
  sd: ........ o?80..o?40 ........ o?80..o?40
  bd: o...o... o...o... o...o... o...o...

part main
  bpm 130
  reverb_size 0.3 reverb_mix 0.15
  drums

score
  main

## groove_shuffle_demo
// Groove table: shuffle feel using groove preset
pattern drums
  groove shuffle
  oh: .... ...o .... ...o
  ch: oo oo oo oo
  sd: .... o... .... o...
  bd: o... ..o. o... ..o.

part main
  bpm 95
  reverb_size 0.4 reverb_mix 0.2
  drums

score
  main

## groove_compound_demo
// Groove table: compound time feel with [8 4 4] pattern
pattern drums
  groove [8 4 4]
  ch: ooo ooo ooo ooo
  sd: ... o.. ... o..
  bd: o.. ..o o.. ..o

pattern bass
  groove [8 4 4]
  instrument bass
  octave 3
  legato arco
  *: c.. .c. c.. .c. | g.. .g. e_. ...

part main
  bpm 110
  reverb_size 0.5 reverb_mix 0.3
  drums { times 2 }
  bass

score
  main

## groove_custom_demo
// Groove table: custom asymmetric groove for a boom-bap feel
pattern drums
  // Part-level groove [72 28] gives a lopsided swing
  ch: oo oo oo oo
  sd: .... o... .... o.o?40.
  bd: o.o. .... o... ..o.

part main
  bpm 88
  groove [72 28]
  reverb_size 0.3 reverb_mix 0.15
  drums

score
  main

## automation_crescendo
// Track-level @level automation: drum crescendo/decrescendo over 4 measures.
// The hi-hat volume ramps up across the first two measures, then back down.
// The bass drum level holds steady, then punches up for the final measure.
pattern drums
  ch: o.o. o.o. o.o. o.o. | o.o. o.o. o.o. o.o. | o.o. o.o. o.o. o.o. | o.o. o.o. o.o. o.o.
  @level: 40 . . 100 | 100 . . 40
  sd: .... o... .... o... | .... o... .... o... | .... o... .... o... | .... o... .... o...
  bd: o... .... o.o. .... | o... .... o.o. .... | o... .... o.o. .... | o... .... o.o. ....
  @level: 80 - - 100

part main
  bpm 120
  reverb_size 0.3 reverb_mix 0.15
  drums

score
  main

## automation_fx_build
// Part-level @reverb_mix automation: reverb builds from dry to wet over the part.
// Track-level @reverb_send automation: hi-hat sends more signal to reverb over time.
// Demonstrates both part-level and track-level automation together.
pattern drums
  oh: .... ...o .... ...o | .... ...o .... ...o
  ch: o.o. o.o. o.o. o.o. | o.o. o.o. o.o. o.o.
  @reverb_send: 0.0 . . 0.6
  sd: .... o... .... o... | .... o... .... o...
  bd: o..o .... o.o. .... | o..o .... o... ....

part build
  bpm 110
  reverb_size 0.7
  @reverb_mix: 0.05 . . 0.5
  drums { times 2 }

score
  build

## automation_fade
// Clip-level @mix automation: crossfade between two patterns.
// The first clip fades out while the second fades in, creating a smooth transition.
// Demonstrates clip-level automation for crossfading.
pattern beat_a
  ch: o.o. o.o. o.o. o.o.
  sd: .... o... .... o...
  bd: o... .... o... ....

pattern beat_b
  oh: ..o. ..o. ..o. ..o.
  ch: oooo oooo oooo oooo
  sd: .... o..o .... o..o
  bd: o.o. .... o.o. ..o.

part crossfade
  bpm 120
  reverb_size 0.4 reverb_mix 0.2
  beat_a { times 4 }
  @mix: 1.0 . . 0.0
  beat_b { times 4 }
  @mix: 0.0 . . 1.0

score
  crossfade

## tape_stop_demo
// Tape stop: step triggers — drums hold, stop at section 3, start at section 5.
pattern drums
  ch: o.o. o.o. o.o. o.o.
  sd: .... o... .... o...
  bd: o... .... o.o. ....

part stop_and_start
  bpm 120
  tape_stop_time 1000 tape_start_time 200 tape_stop_curve 2.0
  reverb_size 0.4 reverb_mix 0.2
  $tape_stop: 1.0@0 0.0@4 1.0@6
  drums { times 2 }

score
  stop_and_start

## tape_glitch_demo
// Short tape stop for glitchy rhythmic stutter effect.
pattern beat
  ch: oooo oooo oooo oooo
  sd: ..o. ..o. ..o. ..o.
  bd: o..o o..o o..o o..o

part glitch
  bpm 130
  tape_stop_time 150 tape_start_time 100 tape_stop_curve 1.0
  $tape_stop: 1.0@0 0.0@2 1.0@4 0.0@6
  beat { times 2 }

score
  glitch

## step_delay_demo
// Step automation demo: delay kicks in suddenly mid-phrase.
// Dry for 8 beats, then delay ON for 16 beats, then dry for last 8 beats.
// Very obvious: you hear a dry riff, then suddenly drenched in delay, then dry again.
pattern riff
  instrument jpluck
  octave 4
  *: c e g c# | e g c# e# | g c# e# g# | c# e# g# c##

part demo
  bpm 120
  delay_time 6 delay_feedback 0.7 delay_damping 0.3
  $delay_mix: 0.0@0 0.9@8 0.0@24
  riff { times 2 }

score
  demo

## step_track_auto_demo
// Track-level step automation: sudden level/send changes per track.
// Hi-hat level drops to 0.3 at beat 4, returns to 1.0 at beat 8.
// Snare gets reverb send at beat 8.
pattern beat_step
  ch: oooo oooo oooo oooo
  $level: 1.0@0 0.3@4 1.0@8
  sd: ..o. ..o. ..o. ..o.
  $reverb_send: 0.0@0 0.8@8
  bd: o..o o..o o..o o..o

part track_step
  bpm 120
  reverb_size 0.6 reverb_mix 0.4
  beat_step { times 2 }

score
  track_step

## step_clip_auto_demo
// Clip-level step automation: reverb increases during the second clip only.
pattern groove_a
  ch: o.o. o.o. o.o. o.o.
  bd: o... o... o... o...

pattern groove_b
  ch: oooo oooo oooo oooo
  sd: ..o. ..o. ..o. ..o.
  bd: o..o o..o o..o o..o

part clip_step
  bpm 120
  reverb_size 0.6
  groove_a
  groove_b
  $reverb_mix: 0.0@0 0.8@4

score
  clip_step

## instrument/old_aha_take_on_me_lead
# reverb: size=0.7
amp = 0.7812
octave = 4
osc_start = true
reverb_send = 0.17
unison = 4
unison_detune = 0.09
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.252
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 12, fine = 0 } }
pw = 0.2579
[path.0]
mix = [0.3, 0.7, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 240.0 }
[main_filter]
cutoff = 91.0

## instrument/old_bass
amp = 1.2656
octave = 4
osc_start = true
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.5
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 19, fine = 0 } }
pw = 0.5
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 4400.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 200.0 }
[main_filter]
cutoff = 76.0
env_amt = 27.0

## instrument/bass_classic_rez
amp = 1.2656
octave = 4
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 9 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = -9 } }
[osc.2]
shape = "Pulse"
freq = { Pitched = { semi = -12, fine = 0 } }
pw = 0.5
[path.0]
mix = [0.5, 0.5, 0.3906, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 0.0, decay_ms = 750.0, sustain = 0.0, release_ms = 10000.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 200.0 }
[main_filter]
cutoff = 48.0
resonance = 0.77
env_amt = 45.0

## instrument/bass_flange
# voices: mode=Legato, polyphony=1
amp = 0.625
octave = 4
osc_start = true
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 1 } }
pw = 0.5
pitch_env_amt = 30.0
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.5
pitch_env_amt = 30.0
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[pitch_env]
ADSR = { attack_ms = 0.0, decay_ms = 188.0, sustain = 0.0, release_ms = 188.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 200.0 }
[main_filter]
cutoff = 127.0

## instrument/bass_long_tail
amp = 0.7812
octave = 4
osc_start = true
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.125
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 19, fine = 0 } }
[path.0]
mix = [0.7, 0.3, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 0.5, release_ms = 1890.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 5000.0 }
[main_filter]
cutoff = 32.0
env_amt = 94.0

## instrument/bass_surge
amp = 0.7812
octave = 4
osc_start = true
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.252
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 24, fine = 0 } }
pw = 0.2579
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 150.0, decay_ms = 5000.0, sustain = 0.2, release_ms = 650.0 }
[main_filter]
cutoff = 91.0

## instrument/old_bass_wobble
amp = 0.7969
octave = 4
osc_start = true
[lfo]
wave = "Triangle"
rate = 4
mode = "Trig"
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 9, fine = 0 } }
pitch_env_amt = 45.0
[osc.2]
shape = "Pulse"
freq = { Pitched = { semi = -12, fine = 0 } }
pw = 0.5
[osc_interaction]
sync = true
[path.0]
mix = [0.0, 1.0, 1.0, 0.0, 0.0, 0.0]
[pitch_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 0.0, release_ms = 1890.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 78.0
lfo_amt = 23.4

## instrument/bell
amp = 0.7812
octave = 4
osc_start = true
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.249
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 19, fine = 0 } }
pw = 0.249
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 0.0, release_ms = 1890.0 }
[main_filter]
cutoff = 101.0

## instrument/bell_ring
amp = 0.8
octave = 5
osc_start = true
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Sine"
freq = { Pitched = { semi = 19, fine = 0 } }
[osc_interaction]
ring_mod = true
[path.0]
mix = [0.0, 1.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 2500.0, sustain = 0.0, release_ms = 2500.0 }
[main_filter]
cutoff = 110.0
key_track = 15.0
[demo]
pattern = "1 - 5 - | 3 - 1 . | 5 - 3 - | 1 - - ."
bpm = 100
scale = "maj"
root = "c"

## instrument/ring_stab
amp = 1.0
octave = 4
osc_start = true
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 7, fine = 0 } }
[osc_interaction]
ring_mod = true
[path.0]
mix = [0.3, 0.7, 0.0, 0.0, 0.0, 0.0]
[filter_env]
AD = { attack_ms = 0.5, decay_ms = 300.0, start = 0.0, amt = 1.0, exp = true }
[amp_env]
ADSR = { attack_ms = 1.0, decay_ms = 400.0, sustain = 0.0, release_ms = 50.0 }
[main_filter]
cutoff = 400.0
resonance = 0.3
env_amt = 4000.0
key_track = 15.0
[demo]
pattern = "1 - 3 5 | 1 - - . | 4 - 6 1 | 4 - - ."
bpm = 130
scale = "min"
root = "a"

## instrument/ring_pad
amp = 0.7
octave = 4
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Triangle"
freq = { Pitched = { semi = 12, fine = 0 } }
[osc_interaction]
ring_mod = true
[path.0]
mix = [0.4, 0.6, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 200.0, decay_ms = 500.0, sustain = 0.7, release_ms = 400.0 }
[main_filter]
cutoff = 90.0
resonance = 0.15
key_track = 20.0
[demo]
pattern = "1 - - - | 3 - - - | 5 - - - | 1 - - -"
bpm = 80
scale = "min"
root = "d"

## instrument/electric_guitar
amp = 1.0
octave = 4
osc_start = true
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.2047
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.1516
[osc_interaction]
sync = true
[path.0]
mix = [0.4, 0.6, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1700.0, sustain = 0.0, release_ms = 1700.0 }
[main_filter]
cutoff = 135.0

## instrument/hard_lead
# delay: time=3, feed=0.5, spread=0.1
amp = 0.7812
octave = 4
osc_start = true
delay_send = 0.13
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 22 } }
pw = 0.249
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = -22 } }
pw = 0.249
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 250.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 1890.0 }
[main_filter]
cutoff = 50.0
env_amt = 55.0

## instrument/harmony_pluck
# delay: time=4, feed=0.75, spread=0.0
amp = 0.7812
octave = 4
osc_start = true
delay_send = 0.3
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.125
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 7, fine = 0 } }
[path.0]
mix = [0.7, 0.3, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 0.0, decay_ms = 250.0, sustain = 0.0, release_ms = 250.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 650.0 }
[main_filter]
cutoff = 73.0
env_amt = 58.0

## instrument/harpsichord_xxx
amp = 0.6875
octave = 4
osc_start = true
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.252
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 9, fine = 0 } }
pw = 0.125
[path.0]
mix = [0.6, 0.4, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 0.0, decay_ms = 230.0, sustain = 0.65, release_ms = 10000.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 2000.0, sustain = 0.0, release_ms = 350.0 }
[main_filter]
cutoff = 99.0
env_amt = 107.0

## instrument/hoover
# reverb: size=0.5
amp = 0.8438
octave = 4
osc_start = true
reverb_send = 0.17
unison = 4
unison_detune = 0.26
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
pitch_env_amt = 18.0
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 12, fine = 0 } }
pitch_env_amt = 18.0
[osc.2]
shape = "Pulse"
freq = { Pitched = { semi = -12, fine = 0 } }
pw = 0.5
[path.0]
mix = [0.5, 0.5, 0.3906, 0.0, 0.0, 0.0]
[pitch_env]
ADSR = { attack_ms = 150.0, decay_ms = 1890.0, sustain = 0.0, release_ms = 1890.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 110.0

## instrument/init
amp = 1.0
octave = 4
osc_start = true
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 127.0

## instrument/old_jpluck
amp = 1.0
octave = 4
osc_start = true
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.125
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 31, fine = 0 } }
pw = 0.5
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 0.0, decay_ms = 500.0, sustain = 0.0, release_ms = 800.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 500.0, sustain = 0.0, release_ms = 300.0 }
[main_filter]
cutoff = 68.0
env_amt = 53.0

## instrument/keys_shiny_organ
# reverb: size=0.85
amp = 0.5
octave = 4
osc_start = true
reverb_send = 0.31
[lfo]
wave = "Triangle"
rate = 4
mode = "Trig"
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.125
pitch_lfo_amt = 0.0005
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 12, fine = 0 } }
pw = 0.125
pitch_lfo_amt = 0.0005
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[shape_filter]
Highpass = [1479.9777, 0.707]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 1890.0 }
[main_filter]
cutoff = 127.0

## instrument/keys_wash
# voices: mode=Poly, polyphony=4
amp = 1.2969
octave = 4
unison = 4
unison_detune = 0.17
unison_spread = 1.0
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Triangle"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [0.3, 0.7, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 75.0, decay_ms = 1890.0, sustain = 0.0, release_ms = 1890.0 }
[amp_env]
ADSR = { attack_ms = 2.0, decay_ms = 5000.0, sustain = 0.0, release_ms = 1890.0 }
[main_filter]
cutoff = 76.0
env_amt = 32.0

## instrument/lead
amp = 1.2656
octave = 4
osc_start = true
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.5
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 12, fine = 0 } }
pw = 0.5
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 200.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 10000.0 }
[amp_env]
ADSR = { attack_ms = 120.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 107.0
env_amt = 19.0

## instrument/lead_19
amp = 0.7969
octave = 4
osc_start = true
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.125
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 19, fine = 0 } }
[path.0]
mix = [0.7, 0.3, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 2.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 1890.0 }
[main_filter]
cutoff = 76.0

## instrument/lead_big_bend
# voices: mode=Legato, polyphony=1
# portamento_ms=150.0
# delay: time=3, feed=0.5, spread=0.0
amp = 0.7812
octave = 4
delay_send = 0.3
unison = 4
unison_detune = 0.09
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 127.0

## instrument/lead_glitter
# delay: time=4, feed=0.5, spread=0.0
amp = 0.7812
octave = 4
delay_send = 0.3
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 3 } }
pw = 0.125
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = -3 } }
pw = 0.125
[osc.2]
shape = "Triangle"
freq = { Pitched = { semi = -12, fine = 0 } }
pw = 0.5
[path.0]
mix = [0.5, 0.5, 1.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 0.0, decay_ms = 750.0, sustain = 0.0, release_ms = 750.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 0.0, release_ms = 1890.0 }
[main_filter]
cutoff = 73.0
env_amt = 55.0

## instrument/lead_pan
amp = 0.7812
octave = 4
osc_start = true
pan_lfo_amt = 1.0
[lfo]
wave = "Triangle"
rate = 4
mode = "Trig"
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.5
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 31, fine = 0 } }
pw = 0.5
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 1.0, decay_ms = 1890.0, sustain = 0.0, release_ms = 1890.0 }
[main_filter]
cutoff = 89.0

## instrument/lead_pleasant
# delay: time=4, feed=0.5, spread=0.1
amp = 0.9062
octave = 4
osc_start = true
delay_send = 0.13
unison = 2
unison_detune = 0.02
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.5
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 0.0, decay_ms = 750.0, sustain = 0.0, release_ms = 10000.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 77.0
env_amt = 21.0

## instrument/lead_rezzy_noise
# delay: time=3, feed=0.5, spread=0.0
amp = 1.0
octave = 4
osc_start = true
delay_send = 0.13
unison = 2
unison_detune = 0.09
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 24, fine = 0 } }
[osc.2]
shape = "Triangle"
freq = { Pitched = { semi = -12, fine = 0 } }
pw = 0.5
[osc.3]
shape = "WhiteNoise"
freq = "Fixed"
fixed_hz = 0.0
[path.0]
mix = [0.5, 0.5, 0.3906, 0.3906, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 0.0, release_ms = 10000.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 65.0
resonance = 0.77
env_amt = 64.0

## instrument/old_lead_square
# delay: time=5, feed=0.0, spread=0.0
amp = 0.7812
octave = 4
osc_start = true
delay_send = 0.3
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.5
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 19, fine = -3 } }
pw = 0.5
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 95.0

## instrument/lead_swell
amp = 0.8125
octave = 4
osc_start = true
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.252
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 7, fine = 0 } }
pw = 0.252
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 1000.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 750.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 1890.0 }
[main_filter]
cutoff = 51.0
env_amt = 64.0

## instrument/lead_underestimated
# delay: time=3, feed=0.2, spread=0.0
amp = 1.0
octave = 4
delay_send = 0.3
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.2]
shape = "Triangle"
freq = { Pitched = { semi = -12, fine = 0 } }
pw = 0.5
[path.0]
mix = [0.5, 0.5, 1.9844, 0.0, 0.0, 0.0]
[shape_filter]
Highpass = [659.2551, 0.707]
[amp_env]
ADSR = { attack_ms = 2.0, decay_ms = 5000.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 76.0
resonance = 0.77

## instrument/lead_winwood
# voices: mode=Legato, polyphony=1
# portamento_ms=25.0
# reverb: size=0.0
amp = 1.2188
octave = 4
reverb_send = 0.17
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 1 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 88.0
resonance = 0.45

## instrument/octave
amp = 0.7969
octave = 4
osc_start = true
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.125
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 12, fine = 0 } }
pw = 0.125
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 150.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 200.0 }
[main_filter]
cutoff = 89.0

## instrument/organ
amp = 0.7812
octave = 4
osc_start = true
pan_lfo_amt = 0.6
[lfo]
wave = "Triangle"
rate = 4
mode = "Trig"
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.2549
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 12, fine = 0 } }
pw = 0.2549
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 83.0
resonance = 0.45

## instrument/pad
amp = 1.25
octave = 4
osc_start = true
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 19, fine = 0 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 900.0, decay_ms = 1600.0, sustain = 0.11, release_ms = 1890.0 }
[amp_env]
ADSR = { attack_ms = 1000.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 1890.0 }
[main_filter]
cutoff = 70.0
env_amt = 24.0

## instrument/pad_creepy
# delay: time=3, feed=0.5, spread=1.0
amp = 1.2656
octave = 4
osc_start = true
delay_send = 0.5
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.125
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 1000.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 10000.0 }
[amp_env]
ADSR = { attack_ms = 1000.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 650.0 }
[main_filter]
cutoff = 66.0
env_amt = 26.0

## instrument/pad_erie
# reverb: size=0.85
amp = 0.7812
octave = 4
osc_start = true
reverb_send = 0.69
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.5
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 7, fine = 0 } }
pw = 0.5
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 2500.0, decay_ms = 5000.0, sustain = 0.0, release_ms = 10000.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 650.0 }
[main_filter]
cutoff = 50.0
resonance = 1.0
env_amt = 32.0

## instrument/pad_lovely
amp = 1.2656
octave = 4
osc_start = true
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 3 } }
pw = 0.125
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 1000.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 10000.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 5000.0 }
[main_filter]
cutoff = 76.0
env_amt = 32.0

## instrument/pad_lush
amp = 0.7812
octave = 4
osc_start = true
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 3 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = -3 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 1000.0, decay_ms = 5000.0, sustain = 0.0, release_ms = 5000.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 5000.0 }
[main_filter]
cutoff = 66.0
env_amt = 64.0

## instrument/pad_nice
amp = 0.7344
octave = 4
osc_start = true
unison = 4
unison_detune = 0.09
unison_spread = 1.0
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.252
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 19, fine = 0 } }
pw = 0.252
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 0.0, decay_ms = 5000.0, sustain = 0.0, release_ms = 5000.0 }
[amp_env]
ADSR = { attack_ms = 1000.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 1890.0 }
[main_filter]
cutoff = 65.0
env_amt = 32.0

## instrument/pad_warmth
amp = 1.0
octave = 4
osc_start = true
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 5 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = -5 } }
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 150.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 1890.0 }
[main_filter]
cutoff = 72.0

## instrument/pad_wash
amp = 0.7812
octave = 4
osc_start = true
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 9 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = -9 } }
[osc.3]
shape = "WhiteNoise"
freq = "Fixed"
fixed_hz = 0.0
[path.0]
mix = [0.5, 0.5, 0.0, 0.2344, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 2500.0, decay_ms = 5000.0, sustain = 0.0, release_ms = 5000.0 }
[amp_env]
ADSR = { attack_ms = 1000.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 5000.0 }
[main_filter]
cutoff = 51.0
resonance = 0.77
env_amt = 64.0

## instrument/pad_wasqu
amp = 0.7969
octave = 4
osc_start = true
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 3 } }
pw = 0.5
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = -3 } }
pw = 0.5
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 2500.0, decay_ms = 5000.0, sustain = 0.0, release_ms = 5000.0 }
[amp_env]
ADSR = { attack_ms = 2500.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 5000.0 }
[main_filter]
cutoff = 60.0
env_amt = 56.0

## instrument/piccolo
amp = 1.0
octave = 4
osc_start = true
vol_lfo_amt = 0.05
[lfo]
wave = "Triangle"
rate = 3
mode = "Trig"
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Triangle"
freq = { Pitched = { semi = 12, fine = 0 } }
[path.0]
mix = [0.45, 0.55, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 110.0, decay_ms = 10000.0, sustain = 1.0, release_ms = 280.0 }
[amp_env]
ADSR = { attack_ms = 110.0, decay_ms = 10000.0, sustain = 1.0, release_ms = 280.0 }
[main_filter]
cutoff = 28.0
resonance = 0.5
env_amt = 64.0

## instrument/pluck
amp = 1.0
octave = 4
osc_start = true
[osc.0]
shape = "Triangle"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.125
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 7, fine = 0 } }
pw = 0.5
[path.0]
mix = [0.6, 0.4, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 280.0, sustain = 0.0, release_ms = 280.0 }
[main_filter]
cutoff = 93.0

## instrument/pluck_cluck
# voices: mode=Poly, polyphony=2
# delay: time=5, feed=0.75, spread=1.0
amp = 1.9844
octave = 4
osc_start = true
delay_send = 0.13
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Triangle"
freq = { Pitched = { semi = 24, fine = 0 } }
[path.0]
mix = [0.3, 0.7, 0.0, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 0.0, decay_ms = 250.0, sustain = 0.0, release_ms = 250.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 1890.0 }
[main_filter]
cutoff = 66.0
env_amt = 32.0

## instrument/pluck_ditto
# delay: time=4, feed=0.75, spread=0.1
amp = 1.2656
octave = 4
osc_start = true
delay_send = 0.13
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.125
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 24, fine = 0 } }
[path.0]
mix = [0.7, 0.3, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 250.0, sustain = 0.0, release_ms = 200.0 }
[main_filter]
cutoff = 99.0

## instrument/pluck_narrow
# delay: time=4, feed=0.48, spread=0.1
amp = 1.2656
octave = 4
osc_start = true
delay_send = 0.13
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 9 } }
pw = 0.252
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = -9 } }
pw = 0.252
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 650.0, sustain = 0.0, release_ms = 650.0 }
[main_filter]
cutoff = 77.0
resonance = 0.77

## instrument/pluck_sync
amp = 0.7812
octave = 4
osc_start = true
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 27, fine = 0 } }
[osc.2]
shape = "Triangle"
freq = { Pitched = { semi = -12, fine = 0 } }
pw = 0.5
[osc_interaction]
sync = true
[path.0]
mix = [0.0, 1.0, 1.9844, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 2.0, decay_ms = 650.0, sustain = 0.0, release_ms = 650.0 }
[main_filter]
cutoff = 127.0

## instrument/pluck_water
# delay: time=4, feed=0.5, spread=0.1
# reverb: size=0.5
amp = 1.0156
octave = 4
osc_start = true
delay_send = 0.3
reverb_send = 0.69
unison = 4
unison_detune = 0.09
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.252
[osc.2]
shape = "Pulse"
freq = { Pitched = { semi = -12, fine = 0 } }
pw = 0.5
[path.0]
mix = [1.0, 0.0, 0.3906, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 650.0, sustain = 0.0, release_ms = 650.0 }
[main_filter]
cutoff = 88.0
resonance = 0.45

## instrument/pointy_sub
amp = 0.7812
octave = 4
osc_start = true
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.125
[osc.2]
shape = "Triangle"
freq = { Pitched = { semi = -12, fine = 0 } }
pw = 0.5
[path.0]
mix = [1.0, 0.0, 1.9844, 0.0, 0.0, 0.0]
[filter_env]
ADSR = { attack_ms = 2.0, decay_ms = 250.0, sustain = 0.0, release_ms = 10000.0 }
[amp_env]
ADSR = { attack_ms = 2.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 50.0
env_amt = 26.0

## instrument/round_saw
amp = 0.875
octave = 4
osc_start = true
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 70.0

## instrument/shaped_pulse
amp = 0.6406
octave = 4
osc_start = true
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.249
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 88.0

## instrument/square_gate
amp = 1.2656
octave = 4
osc_start = true
[lfo]
wave = "Pulse"
rate = 4
mode = "Trig"
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.252
[osc.1]
shape = "Pulse"
freq = { Pitched = { semi = 12, fine = 0 } }
pw = 0.252
[path.0]
mix = [0.5, 0.5, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 150.0, decay_ms = 5000.0, sustain = 0.0, release_ms = 5000.0 }
[main_filter]
cutoff = 71.0
lfo_amt = 8.52

## instrument/stab_bling
# delay: time=5, feed=0.2, spread=0.0
amp = 1.0
octave = 4
osc_start = true
delay_send = 0.3
unison = 4
unison_detune = 0.17
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.252
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 12, fine = 0 } }
pw = 0.252
[path.0]
mix = [0.7, 0.3, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 0.0, release_ms = 650.0 }
[main_filter]
cutoff = 118.0

## instrument/sub_bass
amp = 1.2812
octave = 4
osc_start = true
[osc.0]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 49.0

## instrument/vocal_male
amp = 0.75
octave = 4
osc_start = true
[lfo]
wave = "Triangle"
rate = 1
mode = "Trig"
[osc.0]
shape = "Pulse"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.1486
pitch_lfo_amt = 0.0017
[osc.1]
shape = "Saw"
freq = { Pitched = { semi = 0, fine = 0 } }
pw = 0.252
pitch_lfo_amt = 0.0017
[path.0]
mix = [0.52, 0.48, 0.0, 0.0, 0.0, 0.0]
[amp_env]
ADSR = { attack_ms = 320.0, decay_ms = 10000.0, sustain = 1.0, release_ms = 930.0 }
[main_filter]
cutoff = 95.0

## instrument/i22_bass_fm
amp = 0.7812
octave = 4
osc_start = true
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 12, fine = 0 } }
[osc.1]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc_interaction]
fm_amt = 0.016
fm_env_amt = 0.03
[path.0]
mix = [0.0, 1.0, 0.0, 0.0, 0.0, 0.0]
[pitch_env]
ADSR = { attack_ms = 0.0, decay_ms = 188.0, sustain = 0.0, release_ms = 188.0 }
[amp_env]
ADSR = { attack_ms = 0.0, decay_ms = 1890.0, sustain = 1.0, release_ms = 15.0 }
[main_filter]
cutoff = 88.0

## instrument/i22_pluck_kalimba
# reverb: size=0.5
amp = 0.9062
octave = 4
osc_start = true
reverb_send = 0.17
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 28, fine = 0 } }
[osc.1]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
[osc_interaction]
fm_amt = 0.016
fm_env_amt = 0.05
[path.0]
mix = [0.0, 1.0, 0.0, 0.0, 0.0, 0.0]
[pitch_env]
ADSR = { attack_ms = 0.0, decay_ms = 188.0, sustain = 0.0, release_ms = 188.0 }
[amp_env]
ADSR = { attack_ms = 2.0, decay_ms = 650.0, sustain = 0.0, release_ms = 650.0 }
[main_filter]
cutoff = 108.0

## instrument/808-bass-drum
amp = 1.875
octave = 4
osc_start = true
[osc.0]
shape = "Sine"
freq = { Pitched = { semi = 0, fine = 0 } }
pitch_env_amt = 60.0
[path.0]
mix = [1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
[pitch_env]
ADSR = { attack_ms = 0.11, decay_ms = 300.0, sustain = 0.0, release_ms = 0.0 }
[amp_env]
ADSR = { attack_ms = 2.0, decay_ms = 300.0, sustain = 0.0, release_ms = 0.0 }
[main_filter]
cutoff = 60.0
resonance = 0.5

## plock_ghost_notes
// Per-step parameter locks: ghost note dynamics using level locks
pattern drums
  ch: oo oo oo oo
  sd: .. o. .. o.
  bd: o. o{level=30} o. o{level=30}

part main_part
  bpm 100
  drums

score
  main_part


## plock_wet_snare
// Per-step parameter locks: reverb spike on snare backbeat
pattern drums
  ch: oo oo oo oo
  sd: .. o{reverb_send=0.9} .. o{reverb_send=0.9}
  bd: o. .o o. ..

part main_part
  bpm 110
  reverb_size 0.7
  reverb_mix 0.4
  drums

score
  main_part


## plock_velocity_melody
// Per-step parameter locks: per-note velocity accents on a melody
pattern melody
  scale maj
  octave 4
  *: c{velocity=120} e{velocity=60} g{velocity=120} e{velocity=60}

part main_part
  bpm 120
  melody

score
  main_part


## $seqn
focus = "tape_stop_demo"
`,Qr="gb-daw-user-tdb";class Pc{libraryText=Sc;#e=H(_n(localStorage.getItem(Qr)??""));get userText(){return t(this.#e)}set userText(e){h(this.#e,e,!0)}#t=E(()=>this.userText?this.userText+(this.userText.endsWith(`
`)?`
`:`

`)+this.libraryText:this.libraryText);get text(){return t(this.#t)}set text(e){h(this.#t,e)}#n=H("");get selectedSection(){return t(this.#n)}set selectedSection(e){h(this.#n,e,!0)}#a=H(0);get revision(){return t(this.#a)}set revision(e){h(this.#a,e,!0)}#o=H(null);get songAst(){return t(this.#o)}set songAst(e){h(this.#o,e,!0)}#r=H("");get selectedPatternLabel(){return t(this.#r)}set selectedPatternLabel(e){h(this.#r,e,!0)}#s=H(0);get selectedPartIndex(){return t(this.#s)}set selectedPartIndex(e){h(this.#s,e,!0)}#i=H("");get selectedInstrument(){return t(this.#i)}set selectedInstrument(e){h(this.#i,e,!0)}get librarySections(){const e=new Set,a=/^## (.+)$/gm;let r;for(;(r=a.exec(this.libraryText))!==null;)e.add(r[1]);return e}get userSections(){const e=new Set,a=/^## (.+)$/gm;let r;for(;(r=a.exec(this.userText))!==null;)e.add(r[1]);return e}isLibraryOnly(e){return this.librarySections.has(e)&&!this.userSections.has(e)}copyToUser(e){const a=this.getSectionContentFrom(this.libraryText,e);if(a===null)return;const r=this.userText.endsWith(`
`)||this.userText===""?"":`
`;this.userText+=`${r}
## ${e}
${a}`}getSectionContentFrom(e,a){const r=`## ${a}
`,s=e.indexOf(r);if(s===-1)return null;const i=s+r.length,o=e.indexOf(`
## `,i);return o===-1?e.slice(i):e.slice(i,o+1)}replaceSectionContent(e,a){this.isLibraryOnly(e)&&this.copyToUser(e);const r=`## ${e}
`,s=this.userText.indexOf(r);if(s===-1)return;const i=s+r.length,o=this.userText.indexOf(`
## `,i),c=o===-1?this.userText.length:o+1;this.userText=this.userText.slice(0,i)+a+this.userText.slice(c),this.persist()}addSection(e,a){const r=this.userText.endsWith(`
`)||this.userText===""?"":`
`;this.userText+=`${r}
## ${e}
${a}`,this.persist()}renameSection(e,a){this.isLibraryOnly(e)&&this.copyToUser(e),this.userText=this.userText.replace(`## ${e}
`,`## ${a}
`),this.persist()}replaceAllInUserText(e,a){this.userText=this.userText.replaceAll(e,a),this.persist()}getSectionContent(e){return this.getSectionContentFrom(this.text,e)}setUserTextRaw(e){this.userText=e,this.persist()}deleteUserSection(e){const a=`## ${e}
`,r=this.userText.indexOf(a);if(r===-1)return;const s=r+a.length,i=this.userText.indexOf(`
## `,s),o=i===-1?this.userText.length:i+1,c=r>0&&this.userText[r-1]===`
`?r-1:r;this.userText=this.userText.slice(0,c)+this.userText.slice(o),this.persist()}resetUser(){this.userText="",this.persist()}persist(){localStorage.setItem(Qr,this.userText)}reload(){this.revision++}}const X=new Pc;let Zr=!1;async function Ds(){Zr||(await wasm_bindgen(),Zr=!0)}async function oo(n){await Ds();const e=wasm_bindgen.list_instruments(n);return JSON.parse(e)}async function Ac(n,e){await Ds();const a=wasm_bindgen.resolve_instrument(n,e);return JSON.parse(a)}async function Tc(n){return await Ds(),wasm_bindgen.voice_config_to_toml(JSON.stringify(n))}async function Jr(n){await Ds();const e=wasm_bindgen.voice_config_activity(JSON.stringify(n));return JSON.parse(e)}class Dc{#e=H(null);get position(){return t(this.#e)}set position(e){h(this.#e,e,!0)}#t=H(null);get sourceMap(){return t(this.#t)}set sourceMap(e){h(this.#t,e,!0)}#n=H(!1);get playing(){return t(this.#n)}set playing(e){h(this.#n,e,!0)}updatePosition(e){this.position=e}}const Se=new Dc;class Rc{#e=H(null);get region(){return t(this.#e)}set region(e){h(this.#e,e,!0)}bridge=null;setBridge(e){this.bridge=e}setRegion(e){this.region=e,this.bridge?.setFocus(e)}clearRegion(){this.setRegion(null)}get totalDuration(){return Se.sourceMap?.timeline?.total_duration_secs??0}get isFullSong(){return this.region?this.region.start_secs<=0&&this.region.end_secs>=this.totalDuration:!0}get effectiveRegion(){return this.region?this.region:{start_secs:0,end_secs:this.totalDuration}}notchInPart(e,a,r){const s=a.part_start_secs[r],i=a.part_duration_secs[r];if(s==null||i==null||i<=0)return null;const o=e-s;return o<0||o>i?null:o/i}notchInClip(e,a,r,s,i){const o=a.part_start_secs[r];if(o==null)return null;const c=a.clip_timings[r]?.[s]?.[i];if(!c||c.duration_secs<=0)return null;const l=o+c.offset_secs,f=e-l;return f<0||f>c.duration_secs?null:f/c.duration_secs}partTimeRange(e,a){const r=e.part_start_secs[a],s=e.part_duration_secs[a];return r==null||s==null||s<=0?null:{start_secs:r,end_secs:r+s}}clipTimeRange(e,a,r,s){const i=e.part_start_secs[a];if(i==null)return null;const o=e.clip_timings[a]?.[r]?.[s];return!o||o.duration_secs<=0?null:{start_secs:i+o.offset_secs,end_secs:i+o.offset_secs+o.duration_secs}}}const Ze=new Rc,Xr="gb-daw-theme";class qc{#e=H("system");get mode(){return t(this.#e)}set mode(e){h(this.#e,e,!0)}#t=H("dark");get _systemPref(){return t(this.#t)}set _systemPref(e){h(this.#t,e,!0)}#n=E(()=>this.mode==="system"?this._systemPref:this.mode);get resolved(){return t(this.#n)}set resolved(e){h(this.#n,e)}constructor(){const e=window.matchMedia("(prefers-color-scheme: dark)");this._systemPref=e.matches?"dark":"light",e.addEventListener("change",r=>{this._systemPref=r.matches?"dark":"light"});const a=localStorage.getItem(Xr);(a==="dark"||a==="light"||a==="system")&&(this.mode=a)}toggle(){const e=["dark","light","system"],a=e.indexOf(this.mode);this.setMode(e[(a+1)%e.length])}setMode(e){this.mode=e,localStorage.setItem(Xr,e)}}const Dn=new qc;class Cc{#e=H(_n(new Set));get mutedPartTracks(){return t(this.#e)}set mutedPartTracks(e){h(this.#e,e,!0)}#t=H(_n(new Set));get soloPartTracks(){return t(this.#t)}set soloPartTracks(e){h(this.#t,e,!0)}#n=H(_n(new Set));get mutedPatternLabels(){return t(this.#n)}set mutedPatternLabels(e){h(this.#n,e,!0)}#a=H(_n(new Set));get soloPatternLabels(){return t(this.#a)}set soloPatternLabels(e){h(this.#a,e,!0)}toggleMutePartTrack(e){const a=new Set(this.mutedPartTracks);a.has(e)?a.delete(e):a.add(e),this.mutedPartTracks=a}toggleSoloPartTrack(e){const a=new Set(this.soloPartTracks);a.has(e)?a.delete(e):a.add(e),this.soloPartTracks=a}toggleMutePatternLabel(e){const a=new Set(this.mutedPatternLabels);a.has(e)?a.delete(e):a.add(e),this.mutedPatternLabels=a}toggleSoloPatternLabel(e){const a=new Set(this.soloPatternLabels);a.has(e)?a.delete(e):a.add(e),this.soloPatternLabels=a}isPartTrackAudible(e){return!(this.mutedPartTracks.has(e)||this.soloPartTracks.size>0&&!this.soloPartTracks.has(e))}isPatternLabelAudible(e){return!(this.mutedPatternLabels.has(e)||this.soloPatternLabels.size>0&&!this.soloPatternLabels.has(e))}clear(){this.mutedPartTracks=new Set,this.soloPartTracks=new Set,this.mutedPatternLabels=new Set,this.soloPatternLabels=new Set}computeMask(e,a,r,s){if(!e||!r||s==null)return 0;const i=e.parts[a];if(!i)return 0;let o=0;for(let c=0;c<i.track_indices.length;c++){const l=i.track_indices[c],f=i.track_voice_offsets[c],u=i.track_voice_counts[c];if(!this.isPartTrackAudible(l)){for(let d=0;d<u;d++)o|=1<<f+d;continue}if(this.mutedPatternLabels.size>0||this.soloPatternLabels.size>0){const d=r.parts.find(_=>_.label===s);if(!d)continue;const m=d.tracks[l];if(!m)continue;const y=m.clips.find(_=>_.name!=="gap");if(!y)continue;const k=`${y.name}@${s}`,w=e.patterns[k];if(!w)continue;for(const _ of w.voices)this.isPatternLabelAudible(_.track_label)||(o|=1<<f+_.voice)}}return o>>>0}}const jn=new Cc;class Lc{#e=H(null);get play(){return t(this.#e)}set play(e){h(this.#e,e,!0)}#t=H(null);get stop(){return t(this.#t)}set stop(e){h(this.#t,e,!0)}#n=H(!1);get playing(){return t(this.#n)}set playing(e){h(this.#n,e,!0)}}const Mn=new Lc,Mc=`# play-button
Start or resume playback from the current position.

# stop-button
Stop playback and reset the playhead to the beginning.

# volume-slider
Adjust the master output volume.

# focus-region
Loop a time region; click focus on a part or drag the notches.

# mode-score
Score mode: arrange songs, parts, and patterns.

# mode-tone
Tone mode: design instrument sounds.

# mode-source
Source mode: edit raw SEQN text directly.

# mode-help
Help mode: documentation and reference.

# song-sidebar
Select a song to edit; songs are independent arrangements.

# song-parts-bar
Sequence of parts; drag to reorder, x to remove, repeat to re-use.

# song-rename
Rename the selected song.

# song-duplicate
Duplicate the selected song.

# part-header
Selected part; click pencil to rename, copy to duplicate.

# part-settings-gear
Toggle between clip tracks and part settings.

# part-clip-track
Drag clips between tracks or within a track; click edit to open pattern.

# clip-block
A pattern reference in a track; shows name, repeat count, and mix level.

# pattern-sidebar
Select a pattern to edit; greyed patterns are unused by this part.

# pattern-header
Pattern name; click pencil to rename, copy to duplicate, + to create.

# pattern-group-bar
Track groups; click to select, drag to reorder, + to add.

# pattern-measure-bar
Measures; click to select, drag to reorder, + adds to all tracks.

# group-settings-gear
Toggle between tracks and group settings (Tone, Arp, Voice, Rhythm).

# track-row
One instrument track; drag handle to reorder, double-click to rename.

# track-settings-gear
Per-track settings (Tone, Arp, Voice, Mix, Rhythm); overrides group.

# beat-cell
Click to cycle drum hits; double-click to enter tonal notes.

# division-cell
Single step in a beat; type note names, scale degrees, or rests.

# command-pill
Inline command; drag to reposition within a measure.

# automation-track
Parameter automation; values interpolate between keyframes.

# step-automation-track
Step automation ($param); discrete value changes at specific beats or times.

# instrument-sidebar
Select an instrument to edit.

# instrument-header
Instrument name; click pencil to rename, copy to duplicate, + to create.

# signal-flow-diagram
Click a block to open its detail panel; inactive blocks are dimmed.

# mod-block
Modulation: LFO and pitch/filter envelopes.

# osc-block
Oscillators: up to 6 wave generators with pitch and shape controls.

# path-block
Mix paths: blend oscillators through filters and envelopes.

# fx-block
Effects: shape filter, waveshaper, wavefold, bit crush, decimate.

# vcf-block
Main filter: resonant Moog or morphing SVF for musical sweeps.

# amp-block
Amplitude: volume envelope, velocity sensitivity, tremolo.

# post-block
Post-processing: filter cleanup, stereo pan, unison spread.

# piano-keyboard
Play notes: Z-M = lower octave, Q-U = upper octave.

# hit-button
Fire a drum hit on voice 0 (shortcut: 1 key).

# demo-editor
Loop a demo pattern with adjustable BPM; edits reflect in real time.

# midi-region-bar
Current MIDI CC region; encoder scrolls, pads 1-7 jump to blocks.

# seqn-editor
Raw SEQN text; edits sync with the pattern editor.

# reload-button
Re-parse the text and sync changes to the visual editor.

# settings-panel
Tabbed settings; highlighted tabs have active overrides.

# settings-slider
Drag to adjust; dimmed values are inherited from the parent level.

# settings-delete
Remove this override; value reverts to inherited default.

# add-button
Add a new item (track, group, measure, beat, etc.).

# delete-button
Delete the selected item.

# rename-button
Enter inline rename mode; press Enter to confirm, Escape to cancel.

# duplicate-button
Create a copy with a _copy suffix.

# drag-handle
Drag vertically to reorder.

# mute-button
Mute: silence this track during playback; other tracks keep playing.

# solo-button
Solo: hear only this track; mutes all others temporarily.

# add-track
Add a new instrument track to this group.

# add-automation
Add a parameter automation lane (+@); type the parameter name and keyframe values.

# add-step-automation
Add a step automation lane (+$); type the parameter name and value@beat pairs.

# add-clip
Add a pattern clip to this track.

# tab-part-rhythm
Rhythm: tempo (BPM), swing, accent, groove, and humanize settings.

# tab-part-chorus
Chorus: modulated delay for width and shimmer; rate, depth, and send routing.

# tab-part-delay
Delay: echo effect; time, feedback, damping, and ping-pong mode.

# tab-part-reverb
Reverb: room ambience; size and wet/dry mix.

# tab-part-sidechain
Sidechain: ducking compression triggered by another track.

# tab-part-tapestop
Tape Stop: vinyl-style slowdown/speedup effect; time and curve.

# tab-part-master
Master: output drive and bus compressor (threshold, ratio, attack, release).

# tab-track-tone
Tone: octave, instrument, scale, root note, and velocity.

# tab-track-arp
Arp: arpeggiator on/off, rate, mode, octave range, and slide.

# tab-track-voice
Voice: legato, polyphony voice count, and glide portamento.

# tab-track-mix
Mix: track level and send amounts to chorus, delay, and reverb.

# tab-track-rhythm
Rhythm: per-track swing, accent, groove, humanize, and strum.

# lfo-rate
LFO-1 rate: oscillation speed (0–15); higher = faster modulation.

# lfo2-rate
LFO-2 rate: oscillation speed (0–15); higher = faster modulation.

# lfo1-to-lfo2-rate
LFO-1 → LFO-2 rate: how much LFO-1 modulates LFO-2's speed.

# lfo1-to-lfo2-depth
LFO-1 → LFO-2 depth: how much LFO-1 modulates LFO-2's amplitude.

# env-ad-atk
Attack: time for the AD envelope to reach its peak (0–500 ms).

# env-ad-dec
Decay: time for the AD envelope to fall after the peak (0–5000 ms).

# env-ad-start
Start: initial level of the AD envelope before the attack (−1 to 1).

# env-ad-amt
Amount: peak amplitude of the AD envelope (−1 to 1).

# env-adsr-atk
Attack: time for the ADSR envelope to reach its peak (0–2000 ms).

# env-adsr-dec
Decay: time to fall from peak to sustain level (0–5000 ms).

# env-adsr-sus
Sustain: level held while the note is held (0–1).

# env-adsr-rel
Release: time to fade to zero after note-off (0–5000 ms).

# env-mt-taps
Taps: number of repeated impulses in the multi-tap envelope (1–16).

# env-mt-intvl
Interval: time between taps in ms (1–500).

# env-mt-amp
Amplitude: peak level of each tap (0–1).

# env-mt-tail
Tail decay: fade-out time after the last tap (0–5000 ms).

# osc-semi
Semitone: coarse pitch offset in semitones (−48 to +48).

# osc-fine
Fine: pitch fine-tune in cents (−100 to +100).

# osc-hz
Frequency: fixed oscillator frequency in Hz (20–20 000).

# osc-swept-atk
Swept attack: time for pitch to rise from base to peak (0–100 ms).

# osc-swept-dec
Swept decay: time for pitch to fall back after the sweep (0–5000 ms).

# osc-swept-base
Swept base: starting pitch in semitones (0–135).

# osc-swept-amt
Swept amount: peak pitch offset in semitones (−135 to +135).

# osc-pw
Pulse width: duty cycle of the pulse wave (0–1); 0.5 = square.

# osc-pw-lfo
LFO-1 modulation depth on pulse width (0–1).

# osc-pw-lfo2
LFO-2 modulation depth on pulse width (0–1).

# osc-pdif
Phase diff: produces phaser-like spectral notches by offsetting oscillator phase (0–1).

# osc-pd-lfo
LFO-1 modulation depth on the phase diff notch effect (0–1).

# osc-pd-lfo2
LFO-2 modulation depth on the phase diff notch effect (0–1).

# osc-pitch-lfo
Vibrato depth from LFO-1 in semitones (0–48).

# osc-pitch-lfo2
Vibrato depth from LFO-2 in semitones (0–48).

# osc-pitch-env
Pitch envelope depth in semitones (−135 to +135).

# osc-fb-fm
Feedback FM: oscillator self-modulation amount (0–3).

# osc-sync-window
Sync window: soft-sync blend (0 = hard sync, 1 = no sync).

# osc-fm
FM: frequency modulation depth from OSC-1 to OSC-2 (0–10).

# osc-fm-env
FM env: ENV-1 modulation of FM depth (−10 to +10).

# vcf-morph
Morph: SVF filter type blend (0 = LP, 0.5 = BP, 1 = HP).

# vcf-cutoff
Cutoff: filter frequency in semitones (0–135); controls brightness.

# vcf-reso
Resonance: peak emphasis at the cutoff frequency (0–1).

# vcf-env
Env: ENV-2 modulation of cutoff in semitones (−135 to +135).

# vcf-lfo
LFO: LFO-1 modulation of cutoff in semitones (−135 to +135).

# vcf-lfo2
LFO-2: LFO-2 modulation of cutoff in semitones (−135 to +135).

# vcf-velo
Velocity: note velocity modulation of cutoff (−135 to +135).

# vcf-key
Key track: pitch-to-cutoff tracking (−2 to +2); 1 = 1:1.

# vcf-morph-env
Morph env: ENV-2 modulation of SVF morph position (−1 to +1).

# vcf-morph-lfo
Morph LFO: LFO-1 modulation of SVF morph position (−1 to +1).

# vcf-morph-lfo2
Morph LFO-2: LFO-2 modulation of SVF morph position (−1 to +1).

# amp-level
Amplitude: overall output level for this voice (0–2).

# amp-velo
Velocity: how much note velocity affects volume (0–1).

# amp-vol-lfo
Vol LFO: LFO-1 tremolo depth (0–1).

# amp-vol-lfo2
Vol LFO-2: LFO-2 tremolo depth (0–1).

# fx-clip
Soft clip: gentle saturation drive amount (0–10); 0 = off.

# fx-hard-drive
Hard clip drive: input gain before clipping (1–10).

# fx-hard-thresh
Hard clip threshold: clipping ceiling (0.1–1).

# fx-fold
Wavefold: fold the signal back on itself for harmonic richness (0–10).

# fx-crush
Bit crush: reduce bit depth for lo-fi grit (0–16 bits); 0 = off.

# fx-decim
Decimate: reduce sample rate for aliasing artifacts (0–32); 0 = off.

# post-pan
Pan: stereo position (−1 left, 0 center, +1 right).

# post-pan-lfo
Pan LFO: LFO-1 auto-pan depth (0–1).

# post-pan-lfo2
Pan LFO-2: LFO-2 auto-pan depth (0–1).

# post-porta-time
Portamento: pitch glide time between notes in ms (0–500).

# post-unison-voices
Unison voices: number of stacked detuned copies (1–8).

# post-unison-detune
Unison detune: pitch spread between unison voices (0–1).

# post-unison-spread
Unison spread: stereo width of unison voices (0–1).

# biquad-freq
Filter frequency: center/cutoff frequency in Hz (20–20 000).

# biquad-q
Filter Q: resonance/bandwidth of the biquad filter (0.1–20).

# path-osc-mix
Oscillator mix: blend level for this oscillator in the path (0–1).

# demo-bpm
Beats per minute for the demo loop (40–240).

# demo-oct
Octave: base octave for note entry in the demo editor (0–8).

# setting-Bpm
Beats per minute: the tempo of this part.

# setting-Swing
Swing: percentage of timing offset for a shuffle feel (0–100).

# setting-AccentPct
Accent: velocity boost for accented beats (0–100%).

# setting-Groove
Groove: named groove template for rhythmic variation.

# setting-Humanize
Humanize: random timing variation in ms for a natural feel.

# setting-Strum
Strum: delay between chord notes in ms for a strummed effect.

# setting-ChorusRate
Chorus rate: LFO speed of the chorus modulation.

# setting-ChorusDepth
Chorus depth: intensity of the chorus pitch wobble.

# setting-ChorusMix
Chorus mix: wet/dry blend (0 = dry, 1 = full chorus).

# setting-ChorusToDelay
Chorus → delay: amount of chorus output routed to the delay bus.

# setting-ChorusToReverb
Chorus → reverb: amount of chorus output routed to the reverb bus.

# setting-DelayTime
Delay time: echo interval in ms or beat divisions.

# setting-DelayFeedback
Delay feedback: how much of the delayed signal is re-fed (0–1).

# setting-DelayDamping
Delay damping: high-frequency roll-off on each feedback repeat.

# setting-DelayMix
Delay mix: wet/dry blend (0 = dry, 1 = full delay).

# setting-DelayToReverb
Delay → reverb: amount of delay output routed to the reverb bus.

# setting-ReverbSize
Reverb size: room size / decay length.

# setting-ReverbMix
Reverb mix: wet/dry blend (0 = dry, 1 = full reverb).

# setting-SidechainAmt
Sidechain amount: ducking depth when triggered.

# setting-SidechainRelease
Sidechain release: time for the ducker to recover after a trigger.

# setting-TapeStopTime
Tape stop time: how long the slowdown takes in ms.

# setting-TapeStartTime
Tape start time: how long the speed-up takes in ms.

# setting-TapeStopCurve
Tape stop curve: shape of the deceleration (0 = linear, 1 = exponential).

# setting-MasterDrive
Master drive: output saturation amount.

# setting-CompThreshold
Compressor threshold: level above which compression kicks in (dB).

# setting-CompRatio
Compressor ratio: gain reduction ratio (e.g. 4 = 4:1).

# setting-CompAttack
Compressor attack: time to react to signal above threshold (ms).

# setting-CompRelease
Compressor release: time to release gain reduction after signal drops (ms).

# setting-Octave
Octave: base octave for note entry (0–8).

# setting-Instrument
Instrument: which synth patch this track uses.

# setting-Scale
Scale: constrain notes to a scale (maj, min, penta, blues, chrom).

# setting-Root
Root: root note of the scale (0–11; 0 = C).

# setting-Velocity
Velocity: default note velocity for this track (0–127).

# setting-Arp
Arp: arpeggiator preset pattern name.

# setting-ArpRate
Arp rate: speed of the arpeggiator in steps per beat (1–64).

# setting-ArpMode
Arp mode: playback order (up, down, updown, random, etc.).

# setting-ArpOctaves
Arp octaves: range of octaves the arpeggiator spans (1–4).

# setting-ArpSlide
Arp slide: enable legato glide between arpeggiated notes.

# setting-Legato
Legato: overlap fraction between consecutive notes (0–1).

# setting-Voices
Voices: maximum polyphony / number of simultaneous notes (1–8).

# setting-Glide
Glide: portamento amount for legato passages (0–1).

# setting-Level
Level: track output volume (0–1).

# setting-DrySend
Dry send: amount of dry signal routed to the main bus (0–1).

# setting-ChorusSend
Chorus send: amount of signal routed to the chorus bus (0–1).

# setting-DelaySend
Delay send: amount of signal routed to the delay bus (0–1).

# setting-ReverbSend
Reverb send: amount of signal routed to the reverb bus (0–1).

# setting-StrumIdx
Strum index: which note in a chord to strum from (off = disabled).

# setting-DelayPingPong
Ping pong: alternate echoes between left and right channels.

# setting-Sidechain
Sidechain: name of the track whose hits trigger ducking.

# ref-lfo1
Signal source: LFO-1 modulation output.

# ref-lfo2
Signal source: LFO-2 modulation output.

# ref-env1
Signal source: ENV-1 (pitch) envelope output.

# ref-env2
Signal source: ENV-2 (filter) envelope output.

# ref-osc
Signal source: oscillator audio output.

# ref-osc1
Signal source: OSC-1 feeding back into itself.

# ref-velo
Signal source: note velocity (0–127).

# toggle-vcf
Toggle the main VCF filter on or off.

# toggle-osc
Toggle this oscillator on or off.

# toggle-osc-start
Osc start: reset oscillator phase on each new note.

# toggle-env
Toggle this envelope on or off.

# toggle-env-exp
Exp: exponential decay curve instead of linear.

# toggle-half-rect
Half rectifier: clip the negative half of the waveform for brightness.

# toggle-hard-clip
Hard clip: aggressive digital clipping distortion.

# toggle-sync
Sync: force OSC-2 to reset when OSC-1 completes a cycle.

# toggle-ring
Ring mod: multiply OSC-1 × OSC-2 for metallic sidebands.

# toggle-biquad
Toggle this biquad filter on or off.

# osc-shape-sine
Sine: a pure, fundamental tone with no harmonics.

# osc-shape-tri
Triangle: a warm, hollow tone with odd harmonics.

# osc-shape-saw
Saw: a bright, buzzy tone with all harmonics.

# osc-shape-pulse
Pulse: a hollow wave; use PW to shape the timbre.

# osc-shape-white
White noise: equal energy across all frequencies.

# osc-shape-pink
Pink noise: warmer noise with less high-frequency content.

# osc-freq-pitched
Pitched: follows MIDI note pitch with semi/fine offsets.

# osc-freq-fixed
Fixed: constant frequency in Hz regardless of note.

# osc-freq-swept
Swept: a pitch sweep from base ± amount, for kicks and toms.

# vcf-mode-lp
Lowpass: cuts high frequencies, passes lows.

# vcf-mode-hp
Highpass: cuts low frequencies, passes highs.

# vcf-mode-bp
Bandpass: passes a narrow band around the cutoff.

# vcf-engine-moog
Moog: classic resonant ladder filter with selectable LP/HP/BP mode.

# vcf-engine-svf
SVF: state-variable filter with smooth morph between LP, BP, and HP.

# env-type-ad
AD: attack-decay envelope for percussive sounds.

# env-type-adsr
ADSR: full envelope with sustain and release for held notes.

# env-type-multi
MultiTap: repeated impulse envelope for rhythmic textures.

# biquad-type-lp
Lowpass: attenuates frequencies above the cutoff.

# biquad-type-hp
Highpass: attenuates frequencies below the cutoff.

# biquad-type-bp
Bandpass: passes a narrow band around the center frequency.

# lfo-wave-ramp
Ramp: rising sawtooth for one-directional sweeps.

# lfo-wave-pulse
Pulse: square-wave switching between extremes.

# lfo-wave-sine
Sine: smooth, rounded modulation.

# lfo-wave-tri
Triangle: linear up-down modulation.

# lfo-wave-sh
S&H: random stepped values (sample-and-hold).

# lfo-mode-free
Free: continuous oscillation, unsynced to notes.

# lfo-mode-trig
Trig: restarts from zero on each note-on.

# lfo-mode-rand
Rand: randomized phase on each note trigger.

# demo-scale
Scale: constrain demo notes to a musical scale.

# demo-root
Root: root note for the demo scale.
`;function Ec(n){const e=new Map;let a="";for(const r of n.split(`
`))r.startsWith("# ")?a=r.slice(2).trim():a&&r.trim()&&(e.set(a,r.trim()),a="");return e}const Fc=Ec(Mc);class Oc{#e=H("");get current(){return t(this.#e)}set current(e){h(this.#e,e,!0)}set(e){this.current=Fc.get(e)??""}clear(){this.current=""}}const le=new Oc;var zc=D("<button> </button>"),Nc=D('<span class="hover-help svelte-1h259us"> </span>'),Ic=D('<button class="transport-btn svelte-1h259us">⏹</button>'),jc=D('<button class="transport-btn svelte-1h259us">⏹</button>'),Bc=D('<button class="focus-clear svelte-1h259us" title="Clear focus">&times;</button>'),Hc=D('<div><span class="focus-label svelte-1h259us">Focus</span> <input class="focus-input svelte-1h259us" type="number" step="0.1" min="0"/> <span class="focus-sep svelte-1h259us">&ndash;</span> <input class="focus-input svelte-1h259us" type="number" step="0.1" min="0"/> <!></div>'),Vc=D('<span class="error svelte-1h259us"> </span>'),Gc=D('<div class="transport svelte-1h259us"><button class="transport-btn svelte-1h259us"> </button> <!> <!> <div class="volume-control svelte-1h259us"><span class="volume-icon svelte-1h259us">&#9834;</span> <input class="volume-slider svelte-1h259us" type="range" min="0" max="1" step="0.01" aria-label="Volume"/></div> <!> <!></div>'),Kc=D('<div class="top-bar svelte-1h259us"><div class="mode-tabs svelte-1h259us"><span class="brand svelte-1h259us">Get</span> <!></div> <!> <!> <button class="theme-toggle svelte-1h259us"> </button></div>');function Wc(n,e){ye(e,!0);let a=H("stopped"),r=H("not-initialized"),s=H(null),i=null,o=H(null),c=null,l=H(.75);He(()=>{e.bridge.onObserve(L=>{Se.updatePosition(L.position)})});function f(){u(),c=setInterval(()=>e.bridge.observe(),50)}function u(){c&&(clearInterval(c),c=null)}function d(L){L.target instanceof HTMLInputElement||L.target instanceof HTMLTextAreaElement||L.target instanceof HTMLSelectElement||(L.code==="Space"?(L.preventDefault(),k()):L.code==="Escape"&&(t(a)!=="stopped"||Mn.playing)&&(L.preventDefault(),_()))}He(()=>(window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d))),He(()=>{e.mode==="instrument"&&!Mn.playing&&t(a)==="playing"&&(h(a,"stopped"),Se.playing=!1,Se.updatePosition(null),u())}),He(()=>{jn.mutedPartTracks,jn.soloPartTracks,jn.mutedPatternLabels,jn.soloPatternLabels;const L=Se.sourceMap,V=Se.position,te=X.songAst;if(!Se.playing){e.bridge.setMuteMask(0);return}const ee=V?.part_idx??X.selectedPartIndex,N=te?.score.sequence[ee]?.part_name??null,ne=jn.computeMask(L,ee,te,N);e.bridge.setMuteMask(ne)}),He(()=>{const L=X.text,V=X.selectedSection;if(!(t(a)!=="playing"||!V)&&e.mode!=="instrument")return i&&clearTimeout(i),i=setTimeout(async()=>{try{const te=L.endsWith(`
`)?L:L+`
`,$=await e.bridge.reloadTdb(te,V);$&&(Se.sourceMap=$),h(o,V,!0),h(s,null)}catch(te){h(s,te instanceof Error?te.message:String(te),!0)}},300),()=>{i&&(clearTimeout(i),i=null)}});async function m(){if(t(r)!=="ready"){h(r,"loading");try{await e.bridge.init(),h(r,"ready")}catch(L){console.error("Failed to init audio bridge:",L),h(r,"error")}}}function y(){return e.mode==="instrument"?Mn.playing:t(a)==="playing"}async function k(){if(h(s,null),e.mode==="instrument"){Mn.playing?(Mn.stop?.(),h(a,"stopped"),Se.playing=!1,Se.updatePosition(null),u()):(Mn.playing=!0,Mn.play?.(),h(a,"playing"),Se.playing=!0,f());return}if(t(a)==="playing"){e.bridge.setPlaying(!1),h(a,"paused"),Se.playing=!1,u();return}if(t(a)==="paused"){t(o)!==X.selectedSection?await w():(e.bridge.setPlaying(!0),h(a,"playing"),Se.playing=!0,f());return}await w()}async function w(){if(!X.selectedSection){h(s,"Select a pattern first");return}if(await m(),t(r)==="ready"){await e.bridge.resume();try{const L=X.text.endsWith(`
`)?X.text:X.text+`
`,V=await e.bridge.compileTdb(L,X.selectedSection);V&&(Se.sourceMap=V),h(o,X.selectedSection,!0),h(a,"playing"),Se.playing=!0,e.bridge.setPlaying(!0),f()}catch(L){h(s,L instanceof Error?L.message:String(L),!0)}}}function _(){if(e.mode==="instrument"){Mn.stop?.(),h(a,"stopped"),Se.playing=!1,Se.updatePosition(null),u();return}e.bridge.setPlaying(!1),h(a,"stopped"),Se.playing=!1,Se.updatePosition(null),u()}function R(L){const V=parseFloat(L.target.value);h(l,V,!0),e.bridge.setVolume(V)}function F(L){const V=parseFloat(L.target.value);if(isNaN(V))return;const te=Ze.totalDuration,$=Math.max(0,Math.min(V,te)),ee=Ze.effectiveRegion,N=Math.max($+.1,ee.end_secs);$<=0&&N>=te?Ze.clearRegion():Ze.setRegion({start_secs:$,end_secs:N})}function I(L){const V=parseFloat(L.target.value);if(isNaN(V))return;const te=Ze.totalDuration,$=Math.max(0,Math.min(V,te)),ee=Ze.effectiveRegion,N=Math.min($-.1,ee.start_secs);N<=0&&$>=te?Ze.clearRegion():Ze.setRegion({start_secs:Math.max(0,N),end_secs:$})}const C=[{id:"song",label:"Score",hint:"mode-score"},{id:"instrument",label:"Tone",hint:"mode-tone"},{id:"help",label:"Help",hint:"mode-help"},{id:"seqn",label:"Source",hint:"mode-source"}];var S=Kc(),b=x(S),q=v(x(b),2);Ue(q,17,()=>C,We,(L,V)=>{var te=zc();let $;var ee=x(te);ae(()=>{$=ve(te,1,"mode-tab svelte-1h259us",null,$,{active:e.mode===t(V).id}),Pe(ee,t(V).label)}),B("click",te,()=>e.onmode(t(V).id)),Z("mouseenter",te,()=>le.set(t(V).hint)),P(L,te)});var z=v(b,2);{var j=L=>{var V=Nc(),te=x(V);ae(()=>Pe(te,le.current)),P(L,V)};J(z,L=>{le.current&&L(j)})}var O=v(z,2);{var W=L=>{var V=Gc(),te=x(V),$=x(te),ee=v(te,2);{var N=xe=>{var Fe=Ic();B("click",Fe,_),Z("mouseenter",Fe,()=>le.set("stop-button")),P(xe,Fe)};J(ee,xe=>{t(a)!=="stopped"&&e.mode!=="instrument"&&xe(N)})}var ne=v(ee,2);{var ce=xe=>{var Fe=jc();B("click",Fe,_),Z("mouseenter",Fe,()=>le.set("stop-button")),P(xe,Fe)};J(ne,xe=>{Mn.playing&&e.mode==="instrument"&&xe(ce)})}var ge=v(ne,2),se=v(x(ge),2),pe=v(ge,2);{var Ve=xe=>{var Fe=Hc();let Qe;var nn=v(x(Fe),2),kn=v(nn,4),Xn=v(kn,2);{var qn=on=>{var Pn=Bc();B("click",Pn,()=>Ze.clearRegion()),P(on,Pn)};J(Xn,on=>{Ze.isFullSong||on(qn)})}ae((on,Pn)=>{Qe=ve(Fe,1,"focus-section svelte-1h259us",null,Qe,{dimmed:Ze.isFullSong}),na(nn,on),na(kn,Pn)},[()=>Ze.effectiveRegion.start_secs.toFixed(1),()=>Ze.effectiveRegion.end_secs.toFixed(1)]),Z("mouseenter",Fe,()=>le.set("focus-region")),B("change",nn,F),B("change",kn,I),P(xe,Fe)};J(pe,xe=>{e.mode!=="instrument"&&xe(Ve)})}var qe=v(pe,2);{var Te=xe=>{var Fe=Vc(),Qe=x(Fe);ae(()=>Pe(Qe,t(s))),P(xe,Fe)};J(qe,xe=>{t(s)&&xe(Te)})}ae(xe=>{Pe($,xe),na(se,t(l))},[()=>y()?"⏸":"▶"]),B("click",te,k),Z("mouseenter",te,()=>le.set("play-button")),Z("mouseenter",ge,()=>le.set("volume-slider")),B("input",se,R),P(L,V)};J(O,L=>{e.mode!=="help"&&L(W)})}var T=v(O,2),M=x(T);ae(()=>{en(T,"title",`Toggle theme (${Dn.mode??""})`),Pe(M,Dn.mode==="system"?"◑":Dn.mode==="dark"?"☾":"☀")}),B("click",T,()=>Dn.toggle()),Z("mouseenter",T,()=>le.set("theme-toggle")),P(n,S),we()}Ye(["click","input","change"]);let Yr=!1;async function ga(){Yr||(await wasm_bindgen(),Yr=!0)}async function Uc(n){await ga();const e=wasm_bindgen.list_songs(n);return JSON.parse(e)}async function Qc(n,e){await ga();const a=wasm_bindgen.parse_song_ast(n,e);return JSON.parse(a)}async function Ks(n){return await ga(),wasm_bindgen.emit_song_ast(JSON.stringify(n))}async function Zc(n,e,a){await ga();const r=wasm_bindgen.rename_pattern(JSON.stringify(n),e,a);return JSON.parse(r)}async function Jc(n,e,a){await ga();const r=wasm_bindgen.rename_part(JSON.stringify(n),e,a);return JSON.parse(r)}async function Xc(n,e){await ga();const a=wasm_bindgen.compile_source_map(n,e);return JSON.parse(a)}async function Yc(n){await ga();const e=wasm_bindgen.parse_part_settings_text(n);return JSON.parse(e)}const $c=new Set(["Swing","AccentPct","Groove","Humanize","Strum"]);function Ua(n){return"Group"in n?Object.keys(n.Group)[0]:Object.keys(n)[0]}function vr(n){return"Group"in n?Object.values(n.Group)[0]:Object.values(n)[0]}function eu(n,e){return $c.has(n)?{Group:{[n]:e}}:{[n]:e}}const nu={Bpm:120,Swing:0,AccentPct:50,Groove:"Off",ChorusRate:1.5,ChorusDepth:.5,ChorusMix:0,ChorusToDelay:0,ChorusToReverb:0,DelayTime:.375,DelayFeedback:.4,DelayDamping:.5,DelayPingPong:!1,DelayMix:0,DelayToReverb:0,ReverbSize:.5,ReverbMix:0,Sidechain:"",SidechainAmt:0,SidechainRelease:.1,TapeStopTime:1e3,TapeStartTime:200,TapeStopCurve:2,MasterDrive:0,CompThreshold:0,CompRatio:1,CompAttack:.01,CompRelease:.1,Humanize:0,Strum:0},tu={Bpm:{min:20,max:300,step:1},Swing:{min:0,max:100,step:1},AccentPct:{min:0,max:100,step:1},ChorusRate:{min:.01,max:20,step:.01},ChorusDepth:{min:0,max:1,step:.01},ChorusMix:{min:0,max:1,step:.01},ChorusToDelay:{min:0,max:1,step:.01},ChorusToReverb:{min:0,max:1,step:.01},DelayTime:{min:.01,max:2,step:.001},DelayFeedback:{min:0,max:1,step:.01},DelayDamping:{min:0,max:1,step:.01},DelayMix:{min:0,max:1,step:.01},DelayToReverb:{min:0,max:1,step:.01},ReverbSize:{min:0,max:1.5,step:.01},ReverbMix:{min:0,max:1,step:.01},SidechainAmt:{min:0,max:1,step:.01},SidechainRelease:{min:.01,max:2,step:.01},TapeStopTime:{min:100,max:5e3,step:10},TapeStartTime:{min:50,max:5e3,step:10},TapeStopCurve:{min:1,max:4,step:.1},MasterDrive:{min:0,max:1,step:.01},CompThreshold:{min:0,max:1,step:.01},CompRatio:{min:1,max:20,step:.1},CompAttack:{min:.001,max:1,step:.001},CompRelease:{min:.01,max:2,step:.01},Humanize:{min:0,max:100,step:1},Strum:{min:0,max:200,step:1}},Jt=[{label:"Rhythm",color:"#66aacc",keys:["Bpm","Swing","AccentPct","Groove","Humanize","Strum"]},{label:"Chorus",color:"#66cc88",prefixes:["Chorus"],keys:["ChorusRate","ChorusDepth","ChorusMix","ChorusToDelay","ChorusToReverb"]},{label:"Delay",color:"#66cc88",prefixes:["Delay"],keys:["DelayTime","DelayFeedback","DelayDamping","DelayPingPong","DelayMix","DelayToReverb"]},{label:"Reverb",color:"#66cc88",prefixes:["Reverb"],keys:["ReverbSize","ReverbMix"]},{label:"Sidechain",color:"#ccaa66",prefixes:["Sidechain"],keys:["Sidechain","SidechainAmt","SidechainRelease"]},{label:"Tape Stop",color:"#cc88cc",prefixes:["Tape"],keys:["TapeStopTime","TapeStartTime","TapeStopCurve"]},{label:"Master",color:"#cc6666",prefixes:["Master","Comp"],keys:["MasterDrive","CompThreshold","CompRatio","CompAttack","CompRelease"]}],au=[{label:"Rhythm",color:"#3070a0",keys:Jt[0].keys},{label:"Chorus",color:"#2a8a48",prefixes:["Chorus"],keys:Jt[1].keys},{label:"Delay",color:"#2a8a48",prefixes:["Delay"],keys:Jt[2].keys},{label:"Reverb",color:"#2a8a48",prefixes:["Reverb"],keys:Jt[3].keys},{label:"Sidechain",color:"#a08030",prefixes:["Sidechain"],keys:Jt[4].keys},{label:"Tape Stop",color:"#9a50a0",prefixes:["Tape"],keys:Jt[5].keys},{label:"Master",color:"#b04040",prefixes:["Master","Comp"],keys:Jt[6].keys}];function su(n){return n==="light"?au:Jt}var ru=D("<span>&#9656;</span>"),iu=D('<button class="create-btn svelte-181dlmc" title="New">+</button>'),ou=D('<div class="scroll-fade scroll-fade-top svelte-181dlmc"></div>'),lu=D('<span class="lib-badge svelte-181dlmc">L</span>'),cu=D("<button><!> </button>"),uu=D('<div class="scroll-fade scroll-fade-bottom svelte-181dlmc"></div>'),du=D('<div class="sidebar svelte-181dlmc"><div><!> <span class="sidebar-title svelte-181dlmc"> </span> <!></div> <div class="sidebar-items-wrap svelte-181dlmc"><!> <div class="sidebar-items svelte-181dlmc"></div> <!></div></div>');function Ws(n,e){ye(e,!0);let a=_e(e,"collapsible",3,!1),r=_e(e,"defaultCollapsed",3,!1),s=H(!1);He(()=>{h(s,r())});let i=H(void 0),o=H(!1),c=H(!1),l=E(()=>a()&&t(s)?e.items.filter(T=>T.id===e.activeId):e.items);function f(){if(!t(i))return;const{scrollTop:T,scrollHeight:M,clientHeight:L}=t(i);h(o,T>1),h(c,T+L<M-1)}He(()=>{t(l),requestAnimationFrame(f)}),He(()=>{if(!t(i))return;const T=t(i),M=new ResizeObserver(f);return M.observe(T),()=>M.disconnect()});function u(){a()&&(h(s,!t(s)),t(s)||requestAnimationFrame(()=>{t(i)?.querySelector(".sidebar-item.active")?.scrollIntoView({block:"nearest"})}))}function d(){h(s,!0)}var m={collapse:d},y=du(),k=x(y);let w;var _=x(k);{var R=T=>{var M=ru();let L;ae(()=>L=ve(M,1,"chevron svelte-181dlmc",null,L,{open:!t(s)})),P(T,M)};J(_,T=>{a()&&T(R)})}var F=v(_,2),I=x(F),C=v(F,2);{var S=T=>{var M=iu();B("click",M,L=>{L.stopPropagation(),e.oncreate()}),P(T,M)};J(C,T=>{e.oncreate&&T(S)})}var b=v(k,2),q=x(b);{var z=T=>{var M=ou();P(T,M)};J(q,T=>{t(o)&&T(z)})}var j=v(q,2);Ue(j,21,()=>t(l),We,(T,M)=>{var L=cu();let V;var te=x(L);{var $=ne=>{var ce=lu();P(ne,ce)},ee=E(()=>e.libraryIds?.has(t(M).id));J(te,ne=>{t(ee)&&ne($)})}var N=v(te,1,!0);ae((ne,ce)=>{V=ve(L,1,"sidebar-item svelte-181dlmc",null,V,ne),L.disabled=ce,Pe(N,t(M).label)},[()=>({active:t(M).id===e.activeId,greyed:e.greyedOut?.has(t(M).id)}),()=>e.greyedOut?.has(t(M).id)]),B("click",L,()=>e.onselect(t(M).id)),P(T,L)}),jt(j,T=>h(i,T),()=>t(i));var O=v(j,2);{var W=T=>{var M=uu();P(T,M)};J(O,T=>{t(c)&&T(W)})}return ae(()=>{w=ve(k,1,"sidebar-header svelte-181dlmc",null,w,{clickable:a()}),en(k,"role",a()?"button":void 0),en(k,"tabindex",a()?0:void 0),Pe(I,e.title)}),Z("mouseenter",y,()=>{e.hint&&le.set(e.hint)}),B("click",k,u),B("keydown",k,T=>{(T.key==="Enter"||T.key===" ")&&(T.preventDefault(),u())}),Z("scroll",j,f),P(n,y),we(m)}Ye(["click","keydown"]);var fu=D('<button class="seq-focus svelte-owygqe" title="Focus">&#8857;</button>'),mu=D('<button class="seq-delete svelte-owygqe" title="Remove">&times;</button>'),pu=D('<div class="seq-actions svelte-owygqe"><!> <!></div>'),hu=D("<span></span>"),vu=D('<div class="seq-item svelte-owygqe"><!> <button draggable="true"><!> <!></button></div>'),_u=D('<div class="seq-bar svelte-owygqe"><!> <button class="seq-add svelte-owygqe" title="Add">+</button></div>');function Qa(n,e){ye(e,!0);let a=_e(e,"activeIndex",19,()=>-1),r=_e(e,"activeProgress",3,0),s=H(-1),i=H(-1);function o(_,R){h(s,R,!0),_.dataTransfer&&(_.dataTransfer.effectAllowed="move",_.dataTransfer.setData("text/plain",String(R)))}function c(_,R){_.preventDefault(),_.dataTransfer&&(_.dataTransfer.dropEffect="move"),h(i,R,!0)}function l(){h(i,-1)}function f(_,R){_.preventDefault(),t(s)!==-1&&t(s)!==R&&e.onmove(t(s),R),h(s,-1),h(i,-1)}function u(){h(s,-1),h(i,-1)}let d=H(void 0);function m(_,R,F){if(!e.onfocusdrag)return;_.preventDefault(),_.stopPropagation();const I=S=>{if(!t(d))return;const b=t(d).querySelectorAll(".seq-block");let q=F,z=0;for(let j=0;j<b.length;j++){const O=b[j].getBoundingClientRect();if(S.clientX>=O.left&&S.clientX<=O.right){q=j,z=Math.max(0,Math.min(1,(S.clientX-O.left)/O.width));break}if(j===0&&S.clientX<O.left){q=0,z=0;break}if(j===b.length-1&&S.clientX>O.right){q=j,z=1;break}}e.onfocusdrag(R,z,q)},C=()=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",C)};window.addEventListener("mousemove",I),window.addEventListener("mouseup",C)}var y=_u(),k=x(y);Ue(k,17,()=>e.items,We,(_,R,F)=>{var I=vu(),C=x(I);{var S=M=>{var L=pu(),V=x(L);{var te=N=>{var ne=fu();B("click",ne,()=>e.onfocus(F)),P(N,ne)};J(V,N=>{e.onfocus&&N(te)})}var $=v(V,2);{var ee=N=>{var ne=mu();B("click",ne,()=>e.ondelete(F)),P(N,ne)};J($,N=>{e.ondelete&&N(ee)})}P(M,L)};J(C,M=>{(e.ondelete||e.onfocus)&&M(S)})}var b=v(C,2);let q;var z=x(b);{var j=M=>{var L=La(),V=De(L);Ue(V,17,()=>e.focusNotches[F],We,(te,$)=>{var ee=hu();ae(N=>{ve(ee,1,`focus-notch ${t($).type??""}`,"svelte-owygqe"),$e(ee,`left: ${N??""}%`)},[()=>(t($).position*100).toFixed(1)]),B("mousedown",ee,N=>m(N,t($).type,F)),P(te,ee)}),P(M,L)};J(z,M=>{e.focusNotches?.[F]&&M(j)})}var O=v(z,2);{var W=M=>{var L=La(),V=De(L);hr(V,()=>e.content,()=>t(R),()=>F),P(M,L)},T=M=>{var L=rc();ae(()=>Pe(L,t(R).label)),P(M,L)};J(O,M=>{e.content?M(W):M(T,!1)})}ae(M=>{$e(I,t(R).weight!=null?`flex-grow: ${t(R).weight};`:""),q=ve(b,1,"seq-block svelte-owygqe",null,q,{selected:F===e.selectedIndex,playing:a()>=0&&F===a(),"drag-over":t(i)===F&&t(s)!==F,dragging:t(s)===F,"has-content":e.content!=null}),$e(b,M)},[()=>a()>=0&&F===a()?`--pb-progress: ${(r()*100).toFixed(1)}%`:""]),B("click",b,()=>e.onselect(F)),Z("dragstart",b,M=>o(M,F)),Z("dragover",b,M=>c(M,F)),Z("dragleave",b,l),Z("drop",b,M=>f(M,F)),Z("dragend",b,u),P(_,I)});var w=v(k,2);jt(y,_=>h(d,_),()=>t(d)),B("click",w,function(..._){e.onadd?.apply(this,_)}),P(n,y),we()}Ye(["click","mousedown"]);function cs(n){return Object.keys(n)[0]}function lo(n){return Object.values(n)[0]}const $r=["Swing","AccentPct","Groove","Humanize","Strum"];function Ga(n){return n==="Accent"?"ac":n.Named}function wa(n){let e=null,a=[],r=n;for(let s=0;s<2;s++)typeof r=="object"&&r!==null&&"Probable"in r?(e=r.Probable[1],r=r.Probable[0]):typeof r=="object"&&r!==null&&"ParameterLocked"in r&&(a=r.ParameterLocked[1],r=r.ParameterLocked[0]);return[r,e,a]}function us(n){const[e]=wa(n);return e==="Hit"||e==="Accent"||e==="Rest"||e==="Sustain"}function Us(n){const[e,a,r]=wa(n);let s;if(e==="Hit")s="o";else if(e==="Accent")s="x";else if(e==="Rest")s=".";else if(e==="Sustain")s="-";else if(typeof e=="object"&&"Tonal"in e){const[,i]=e.Tonal;if("Degree"in i)s=String(i.Degree);else{const o=i.Note;let l=["c","","d","","e","f","","g","","a","","b"][o.base]||"?";o.offset>0&&(l+="#".repeat(o.offset)),o.offset<0&&(l+="_".repeat(-o.offset)),o.octave!==null&&(l+=o.octave),s=l}}else s="?";return r.length>0&&(s+="·"),a!==null&&(s+=`?${a}`),s}function gu(n){if("Mix"in n){const e=n.Mix,a=Object.keys(e)[0],r=Object.values(e)[0];return`${a.replace(/([a-z0-9])([A-Z])/g,"$1_$2").toLowerCase()}=${r}`}return"Velocity"in n?`velocity=${n.Velocity}`:""}function Qs(n){if(n==="Hit")return"o";if(n==="Accent")return"x";if(n==="Rest")return".";if(n==="Sustain")return"-";if(typeof n=="object"&&"Tonal"in n){const[e,a]=n.Tonal,r=e==="Accented"?">":e==="Slide"?"~":"";let s;if("Degree"in a)s=String(a.Degree);else{const i=a.Note;let c=["c","","d","","e","f","","g","","a","","b"][i.base]||"?";i.offset>0&&(c+="#".repeat(i.offset)),i.offset<0&&(c+="_".repeat(-i.offset)),i.octave!==null&&(c+=i.octave),s=c}return`${r}${s}`}if(typeof n=="object"&&"ParameterLocked"in n){const[e,a]=n.ParameterLocked,r=a.map(gu).join(",");return`${Qs(e)}{${r}}`}if(typeof n=="object"&&"Probable"in n){const[e,a]=n.Probable;return`${Qs(e)}?${a}`}return"?"}function bu(n){const[e,a,r]=wa(n);let s;if(e==="Rest")s="Hit";else if(e==="Hit")s="Accent";else if(e==="Accent")s="Rest";else if(e==="Sustain")s="Rest";else return n;return s==="Rest"||(r.length>0&&(s={ParameterLocked:[s,r]}),a!==null&&(s={Probable:[s,a]})),s}function ku(n){const e=typeof n=="string"?n:Object.keys(n)[0],a=typeof n=="string"?"":Object.values(n)[0];return`${e}: ${a}`}function co(n){return"ToneSetting"in n?ku(n.ToneSetting):`${ms(n)}: ${ho(n)}`}const ra=[{label:"Tone",color:"#aa88cc",keys:["Octave","Instrument","Scale","Root","Velocity"]},{label:"Arp",color:"#88ccaa",prefixes:["Arp"],keys:["Arp","ArpRate","ArpMode","ArpOctaves","ArpSlide"]},{label:"Voice",color:"#66aacc",keys:["Legato","Voices","Glide"]},{label:"Mix",color:"#ccaa66",suffixes:["Send"],keys:["Level","DrySend","ChorusSend","DelaySend","ReverbSend"]},{label:"Rhythm",color:"#cc8888",keys:["Swing","AccentPct","Groove","Humanize","Strum","StrumIdx"]}],yu=[{label:"Tone",color:"#7a58a8",keys:ra[0].keys},{label:"Arp",color:"#3a8a6a",prefixes:["Arp"],keys:ra[1].keys},{label:"Voice",color:"#3070a0",keys:ra[2].keys},{label:"Mix",color:"#a08030",suffixes:["Send"],keys:ra[3].keys},{label:"Rhythm",color:"#a05050",keys:ra[4].keys}];function uo(n){return n==="light"?yu:ra}function ei(n,e){for(const a of e.prefixes??[])if(n.startsWith(a)&&n.length>a.length)return n.slice(a.length);for(const a of e.suffixes??[])if(n.endsWith(a)&&n.length>a.length)return n.slice(0,-a.length);return n}const fo={Octave:{min:0,max:8,step:1},Root:{min:0,max:11,step:1},Velocity:{min:0,max:127,step:1},ArpRate:{min:1,max:64,step:1},ArpOctaves:{min:1,max:4,step:1},Legato:{min:0,max:1,step:.01},Voices:{min:1,max:8,step:1},Glide:{min:0,max:1,step:.01},Level:{min:0,max:1,step:.01},DrySend:{min:0,max:1,step:.01},ChorusSend:{min:0,max:1,step:.01},DelaySend:{min:0,max:1,step:.01},ReverbSend:{min:0,max:1,step:.01},Swing:{min:0,max:100,step:1},AccentPct:{min:0,max:100,step:1},Humanize:{min:0,max:100,step:1},Strum:{min:0,max:200,step:1},StrumIdx:{min:0,max:15,step:1}},mo={Octave:3,Instrument:"",Scale:"",Root:0,Velocity:100,Arp:"Off",ArpRate:4,ArpMode:"Up",ArpOctaves:1,ArpSlide:!1,Legato:.8,Voices:1,Glide:0,Level:1,DrySend:1,ChorusSend:0,DelaySend:0,ReverbSend:0,Swing:0,AccentPct:50,Groove:"Off",Humanize:0,Strum:0,StrumIdx:null};ra.filter(n=>n.label!=="Mix");function wu(n){return uo(n).filter(e=>e.label!=="Mix")}function po(n){return n==="ArpSlide"?"boolean":n==="Scale"||n==="Instrument"||n==="Arp"||n==="ArpMode"||n==="Groove"||n==="StrumIdx"?"string":"number"}function xu(n,e){return n==="StrumIdx"&&e===null?"off":e==null||e===""?"":n==="Arp"&&typeof e=="object"&&e!==null&&"Preset"in e?e.Preset:n==="Arp"&&typeof e=="object"&&e!==null&&"Custom"in e?e.Custom.join(" "):n==="Groove"&&typeof e=="object"&&e!==null&&"Preset"in e?e.Preset:n==="Groove"&&typeof e=="object"&&e!==null&&"Custom"in e?e.Custom.join(" "):String(e)}function ni(n,e){if(n==="Arp"&&typeof e=="string")return e.toLowerCase()==="off"?"Off":{Preset:e};if(n==="Groove"&&typeof e=="string")return e.toLowerCase()==="off"?"Off":{Preset:e};if(n==="StrumIdx"&&typeof e=="string"){if(e.toLowerCase()==="off")return null;const a=parseInt(e,10);return isNaN(a)?e:a}return n==="ArpMode"&&typeof e=="string"?{up:"Up",down:"Down",updown:"UpDown",random:"Random"}[e.toLowerCase()]??e:e}const Su=new Set(["Octave","Scale","Root","Instrument","Legato","Voices","Velocity","Glide","Arp","ArpRate","ArpMode","ArpOctaves","ArpSlide","StrumIdx"]),Pu=new Set(["Level","DrySend","ChorusSend","DelaySend","ReverbSend"]),Au=new Set(["Swing","AccentPct","Groove","Humanize","Strum"]);function ms(n){return"ToneSetting"in n?Object.keys(n.ToneSetting)[0]:"Group"in n?Object.keys(n.Group)[0]:"Mix"in n?Object.keys(n.Mix)[0]:Object.keys(n)[0]}function ho(n){return"ToneSetting"in n?Object.values(n.ToneSetting)[0]:"Group"in n?Object.values(n.Group)[0]:"Mix"in n?Object.values(n.Mix)[0]:Object.values(n)[0]}function ti(n,e){return Su.has(n)?{ToneSetting:{[n]:e}}:Au.has(n)?{Group:{[n]:e}}:Pu.has(n)?{Mix:{[n]:e}}:{Mix:{[n]:e}}}function ds(n){let e=0;for(const a of n){if("Beat"in a)break;e++}return e}function Tu(n){const e=n.trim();if(e==="-")return"Hold";if(e===".")return"Pass";const a=parseFloat(e);return isNaN(a)?null:{Value:a}}function ai(n){return n==="Hold"?"-":n==="Pass"?".":String(n.Value)}function Zs(n){let e=n.trim();e.startsWith("@")&&(e=e.slice(1));const a=e.indexOf(":");if(a<0)return null;const r=e.slice(0,a).trim();if(!r)return null;const s=e.slice(a+1).trim();if(!s)return null;const i=s.split("|"),o=[];for(const c of i){const l=c.trim().split(/\s+/).filter(Boolean),f=[];for(const u of l)if(u==="-")f.push("Hold");else if(u===".")f.push("Pass");else if(u.startsWith("*")){const d=parseInt(u.slice(1),10);if(isNaN(d)||d<1||f.length===0)return null;const m=f[f.length-1];for(let y=1;y<d;y++)f.push(m)}else{const d=parseFloat(u);if(isNaN(d))return null;f.push({Value:d})}if(f.length===0)return null;o.push(f)}return o.length===0?null:{trivia:{leading:[],trailing_comment:null},parameter:r,sections:o}}function Js(n){let e=n.trim();e.startsWith("$")&&(e=e.slice(1));const a=e.indexOf(":");if(a<0)return null;const r=e.slice(0,a).trim();if(!r)return null;const s=e.slice(a+1).trim();if(!s)return null;const i=s.split(/\s+/).filter(Boolean),o=[];let c=-1;for(const l of i){const f=l.indexOf("@");if(f<0)return null;const u=l.slice(0,f);let d=l.slice(f+1);const m=parseFloat(u);if(isNaN(m))return null;let y="Beats";d.endsWith("s")&&(y="Seconds",d=d.slice(0,-1));const k=parseFloat(d);if(isNaN(k)||k<=c)return null;c=k,o.push({value:m,time:k,time_unit:y})}return o.length===0?null:{trivia:{leading:[],trailing_comment:null},parameter:r,events:o}}var Du=D("<option> </option>"),Ru=D('<label class="mini-label svelte-sehkf">mix <input class="clip-input num-input svelte-sehkf"/></label>'),qu=D('<span class="clip editing svelte-sehkf"><select class="clip-input name-select svelte-sehkf"><option>gap</option><!></select> <label class="mini-label svelte-sehkf">&times; <input class="clip-input num-input svelte-sehkf"/></label> <!> <button class="ok-btn svelte-sehkf">ok</button> <button class="cancel-btn svelte-sehkf">esc</button></span>'),Cu=D('<span class="badge times svelte-sehkf"> </span>'),Lu=D('<span class="badge mix svelte-sehkf"> </span>'),Mu=D('<button class="edit-pattern-btn svelte-sehkf" title="Edit pattern">&#9998;</button>'),Eu=D("<span></span>"),Fu=D('<span role="button" tabindex="0"><span class="clip-name svelte-sehkf"> </span> <!> <!> <!> <button class="delete-btn svelte-sehkf" title="Remove clip">&times;</button> <!></span>');function Ou(n,e){ye(e,!0);let a=_e(e,"progress",19,()=>-1),r=_e(e,"focusNotches",3,null),s=H(!1),i=H(""),o=H("1"),c=H("1"),l=H(!1),f=H(void 0);async function u(){t(l)||(h(i,e.clip.name,!0),h(o,String(e.clip.times),!0),h(c,String(e.clip.mix),!0),h(s,!0),await Xi(),t(f)?.focus())}function d(){const I=parseFloat(t(o))||1,C=t(i)==="gap"?1:parseFloat(t(c))||1;e.onchange({name:t(i)||e.clip.name,times:I,mix:C,automation:e.clip.automation,step_automation:e.clip.step_automation}),h(s,!1)}function m(){h(s,!1)}function y(I){I.key==="Enter"&&d(),I.key==="Escape"&&m()}function k(I,C){if(!e.onfocusdrag)return;I.stopPropagation(),I.preventDefault(),h(l,!0);const S=I.currentTarget.parentElement;if(!S)return;function b(z){const j=S.getBoundingClientRect(),O=Math.max(0,Math.min((z.clientX-j.left)/j.width,1));e.onfocusdrag(C,O)}function q(){window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",q),setTimeout(()=>{h(l,!1)},0)}window.addEventListener("mousemove",b),window.addEventListener("mouseup",q)}var w=La(),_=De(w);{var R=I=>{var C=qu(),S=x(C),b=x(S);b.value=b.__value="gap";var q=v(b);Ue(q,17,()=>e.patterns.filter(L=>L!=="gap"),We,(L,V)=>{var te=Du(),$=x(te),ee={};ae(()=>{Pe($,t(V)),ee!==(ee=t(V))&&(te.value=(te.__value=t(V))??"")}),P(L,te)}),jt(S,L=>h(f,L),()=>t(f));var z=v(S,2),j=v(x(z)),O=v(z,2);{var W=L=>{var V=Ru(),te=v(x(V));Zn(te,()=>t(c),$=>h(c,$)),P(L,V)};J(O,L=>{t(i)!=="gap"&&L(W)})}var T=v(O,2),M=v(T,2);B("keydown",C,y),hc(S,()=>t(i),L=>h(i,L)),Zn(j,()=>t(o),L=>h(o,L)),B("click",T,d),B("click",M,m),P(I,C)},F=I=>{var C=Fu();let S;var b=x(C),q=x(b),z=v(b,2);{var j=$=>{var ee=Cu(),N=x(ee);ae(()=>Pe(N,`×${e.clip.times??""}`)),P($,ee)};J(z,$=>{e.clip.times!==1&&$(j)})}var O=v(z,2);{var W=$=>{var ee=Lu(),N=x(ee);ae(()=>Pe(N,`mix ${e.clip.mix??""}`)),P($,ee)};J(O,$=>{e.clip.mix!==1&&e.clip.name!=="gap"&&$(W)})}var T=v(O,2);{var M=$=>{var ee=Mu();B("click",ee,N=>{N.stopPropagation(),e.oneditpattern()}),P($,ee)};J(T,$=>{e.clip.name!=="gap"&&$(M)})}var L=v(T,2),V=v(L,2);{var te=$=>{var ee=La(),N=De(ee);Ue(N,17,r,We,(ne,ce)=>{var ge=Eu();ae(se=>{ve(ge,1,`focus-notch ${t(ce).type??""}`,"svelte-sehkf"),$e(ge,`left: ${se??""}%`)},[()=>(t(ce).position*100).toFixed(1)]),B("mousedown",ge,se=>k(se,t(ce).type)),P(ne,ge)}),P($,ee)};J(V,$=>{r()&&$(te)})}ae($=>{S=ve(C,1,"clip svelte-sehkf",null,S,{playing:a()>=0,gap:e.clip.name==="gap"}),$e(C,$),Pe(q,e.clip.name)},[()=>a()>=0?`--clip-progress: ${(a()*100).toFixed(1)}%`:""]),B("click",C,u),B("keydown",C,$=>$.key==="Enter"&&u()),Z("mouseenter",C,()=>le.set("clip-block")),B("click",L,$=>{$.stopPropagation(),e.ondelete()}),P(I,C)};J(_,I=>{t(s)?I(R):I(F,!1)})}P(n,w),we()}Ye(["keydown","click","mousedown"]);var zu=D("<button> </button>"),Nu=D('<button class="tab add svelte-121sxca">+ Add</button>'),Iu=D('<div class="block-selector svelte-121sxca"><!> <!></div>');function vo(n,e){ye(e,!0);let a=_e(e,"selected",3,0);var r=Iu(),s=x(r);Ue(s,17,()=>e.blocks,We,(c,l,f)=>{var u=zu();let d;var m=x(u);ae(y=>{d=ve(u,1,"tab svelte-121sxca",null,d,y),Pe(m,t(l))},[()=>({active:f===a(),highlighted:e.highlights?.has(f)})]),B("click",u,()=>e.onselect(f)),Z("mouseenter",u,()=>{e.hints?.[f]&&le.set(e.hints[f])}),P(c,u)});var i=v(s,2);{var o=c=>{var l=Nu();B("click",l,function(...f){e.onadd?.apply(this,f)}),P(c,l)};J(i,c=>{e.onadd&&c(o)})}P(n,r),we()}Ye(["click"]);var ju=D('<input class="edit-input svelte-e57acq" type="text"/>'),Bu=D('<button class="value-display svelte-e57acq"> </button>'),Hu=D('<div><span class="label svelte-e57acq"> </span> <div class="track svelte-e57acq" role="slider"><div class="fill svelte-e57acq"></div> <div class="thumb svelte-e57acq"></div></div> <!></div>');function Xs(n,e){ye(e,!0);let a=_e(e,"min",3,0),r=_e(e,"max",3,1),s=_e(e,"step",3,.01),i=_e(e,"disabled",3,!1);function o(ee){ee.focus()}let c=H(!1),l=H(""),f=H(!1),u=H(void 0),d=E(()=>(e.value-a())/(r()-a())*100);function m(ee){return s()>=1?String(Math.round(ee)):s()>=.1?ee.toFixed(1):ee.toFixed(2)}function y(ee){const N=Math.min(r(),Math.max(a(),ee));return Math.round(N/s())*s()}function k(ee){if(!t(u))return;const N=t(u).getBoundingClientRect(),ne=(ee-N.left)/N.width,ce=Math.min(1,Math.max(0,ne));e.onchange(y(a()+ce*(r()-a())))}function w(ee){h(f,!0),ee.currentTarget.setPointerCapture(ee.pointerId),k(ee.clientX)}function _(ee){t(f)&&k(ee.clientX)}function R(){h(f,!1)}function F(){h(l,m(e.value),!0),h(c,!0)}function I(){const ee=parseFloat(t(l));isNaN(ee)||e.onchange(y(ee)),h(c,!1)}function C(){h(c,!1)}var S=Hu();let b,q;var z=x(S),j=x(z),O=v(z,2);en(O,"tabindex",0);var W=x(O);let T;var M=v(W,2);let L;jt(O,ee=>h(u,ee),()=>t(u));var V=v(O,2);{var te=ee=>{var N=ju();Xa(()=>Zn(N,()=>t(l),ne=>h(l,ne))),so(N,ne=>o?.(ne)),Z("blur",N,I),B("keydown",N,ne=>{ne.key==="Enter"&&I(),ne.key==="Escape"&&C()}),P(ee,N)},$=ee=>{var N=Bu(),ne=x(N);ae(ce=>Pe(ne,ce),[()=>m(e.value)]),B("dblclick",N,F),P(ee,N)};J(V,ee=>{t(c)?ee(te):ee($,!1)})}ae(()=>{b=ve(S,1,"horz-slider svelte-e57acq",null,b,{disabled:i()}),q=$e(S,"",q,{"--slider-color":e.color}),Pe(j,e.label),en(O,"aria-valuenow",e.value),en(O,"aria-valuemin",a()),en(O,"aria-valuemax",r()),en(O,"aria-label",e.label),T=$e(W,"",T,{width:`${t(d)??""}%`}),L=$e(M,"",L,{left:`${t(d)??""}%`})}),Z("mouseenter",S,()=>le.set(e.hint||"settings-slider")),B("pointerdown",O,w),B("pointermove",O,_),B("pointerup",O,R),P(n,S),we()}Ye(["pointerdown","pointermove","pointerup","keydown","dblclick"]);var Vu=D('<span class="label svelte-1vaxnks"> </span>'),Gu=D("<div><button></button> <!></div>");function dt(n,e){ye(e,!0);let a=_e(e,"label",3,""),r=_e(e,"disabled",3,!1);var s=Gu();let i,o;var c=x(s);let l;var f=v(c,2);{var u=d=>{var m=Vu(),y=x(m);ae(()=>Pe(y,a())),P(d,m)};J(f,d=>{a()&&d(u)})}ae(()=>{i=ve(s,1,"synth-toggle svelte-1vaxnks",null,i,{disabled:r()}),o=$e(s,"",o,{"--toggle-color":e.color}),l=ve(c,1,"toggle-btn svelte-1vaxnks",null,l,{active:e.active}),en(c,"aria-pressed",e.active),en(c,"aria-label",a()||"toggle")}),Z("mouseenter",s,()=>{e.hint&&le.set(e.hint)}),B("click",c,()=>{r()||e.onchange(!e.active)}),P(n,s),we()}Ye(["click"]);var Ku=D('<button class="delete-btn svelte-3gbruk" title="Delete">&times;</button>');function Rt(n,e){ye(e,!0);var a=Ku();B("click",a,function(...r){e.onclick?.apply(this,r)}),Z("mouseenter",a,()=>le.set("delete-button")),P(n,a),we()}Ye(["click"]);var Wu=D('<input class="raw-input svelte-1lt6uwf" type="text"/>');function Bt(n,e){ye(e,!0);let a=_e(e,"placeholder",3,""),r=_e(e,"initialValue",3,""),s=H(null);He(()=>{t(s)?.focus()});function i(c){if(c.key==="Enter"){c.preventDefault();const l=c.currentTarget.value.trim();l?e.onsubmit(l):e.oncancel()}else c.key==="Escape"&&(c.preventDefault(),e.oncancel())}var o=Wu();jt(o,c=>h(s,c),()=>t(s)),ae(()=>{na(o,r()),en(o,"placeholder",a())}),B("keydown",o,i),Z("blur",o,function(...c){e.oncancel?.apply(this,c)}),P(n,o),we()}Ye(["keydown"]);var Uu=D('<div class="toggle-row svelte-c7ragf"><span class="setting-label svelte-c7ragf"> </span> <!></div>'),Qu=D('<div class="text-row svelte-c7ragf"><span class="setting-label svelte-c7ragf"> </span> <input class="text-input svelte-c7ragf" type="text"/></div>'),Zu=D("<div><!> <!></div>"),Ju=D('<div class="settings-list svelte-c7ragf"></div>'),Xu=D('<button class="add-btn svelte-c7ragf" title="Add setting (raw text)">+</button>'),Yu=D('<div class="tabbed-settings-panel svelte-c7ragf"><!> <!> <div class="raw-add svelte-c7ragf"><!></div></div>');function _r(n,e){ye(e,!0);let a=_e(e,"inheritedSettings",19,()=>new Map),r=_e(e,"placeholder",3,"e.g. octave 4"),s=H(0),i=H(!1),o=E(()=>e.tabs[t(s)]),c=E(()=>e.tabs.map(b=>b.label));function l(b){return t(o)?ei(b,t(o)):b}let f=E(()=>t(o)?Math.max(...t(o).keys.map(b=>ei(b,t(o)).length))+1:6),u=E(()=>{const b=new Set;for(let q=0;q<e.tabs.length;q++)e.tabs[q].keys.some(z=>e.activeSettings.has(z))&&b.add(q);return b});function d(b){return e.activeSettings.has(b)}function m(b){return e.activeSettings.get(b)??a().get(b)??e.defaults[b]}function y(b){return xu(b,m(b))}var k=Yu(),w=x(k);vo(w,{get blocks(){return t(c)},get selected(){return t(s)},get highlights(){return t(u)},onselect:b=>{h(s,b,!0)},get hints(){return e.tabHints}});var _=v(w,2);{var R=b=>{var q=Ju();let z;Ue(q,21,()=>t(o).keys,We,(j,O)=>{const W=E(()=>d(t(O))),T=E(()=>e.settingType(t(O)));var M=Zu();let L;var V=x(M);{var te=ce=>{const ge=E(()=>m(t(O))),se=E(()=>e.ranges[t(O)]);{let pe=E(()=>l(t(O))),Ve=E(()=>t(se)?.min??0),qe=E(()=>t(se)?.max??1),Te=E(()=>t(se)?.step??.01),xe=E(()=>e.settingHints?.[t(O)]);Xs(ce,{get label(){return t(pe)},get value(){return t(ge)},get min(){return t(Ve)},get max(){return t(qe)},get step(){return t(Te)},get color(){return t(o).color},onchange:Fe=>e.onset(t(O),Fe),get hint(){return t(xe)}})}},$=ce=>{const ge=E(()=>m(t(O)));var se=Uu(),pe=x(se),Ve=x(pe),qe=v(pe,2);{let Te=E(()=>e.settingHints?.[t(O)]);dt(qe,{get active(){return t(ge)},get color(){return t(o).color},onchange:xe=>e.onset(t(O),xe),get hint(){return t(Te)}})}ae(Te=>Pe(Ve,Te),[()=>l(t(O))]),Z("mouseenter",se,()=>{e.settingHints?.[t(O)]&&le.set(e.settingHints[t(O)])}),P(ce,se)},ee=ce=>{var ge=Qu(),se=x(ge),pe=x(se),Ve=v(se,2);ae((qe,Te)=>{Pe(pe,qe),na(Ve,Te)},[()=>l(t(O)),()=>y(t(O))]),Z("mouseenter",ge,()=>{e.settingHints?.[t(O)]&&le.set(e.settingHints[t(O)])}),B("change",Ve,qe=>e.onset(t(O),qe.currentTarget.value)),P(ce,ge)};J(V,ce=>{t(T)==="number"?ce(te):t(T)==="boolean"?ce($,1):ce(ee,!1)})}var N=v(V,2);{var ne=ce=>{Rt(ce,{onclick:()=>e.ondelete(t(O))})};J(N,ce=>{t(W)&&ce(ne)})}ae(()=>L=ve(M,1,"setting-row svelte-c7ragf",null,L,{unset:!t(W)})),P(j,M)}),ae(()=>z=$e(q,"",z,{"--tab-color":t(o).color,"--label-width":`${t(f)??""}ch`})),P(b,q)};J(_,b=>{t(o)&&b(R)})}var F=v(_,2),I=x(F);{var C=b=>{Bt(b,{get placeholder(){return r()},onsubmit:q=>{h(i,!1),e.onadd(q)},oncancel:()=>{h(i,!1)}})},S=b=>{var q=Xu();B("click",q,()=>{h(i,!0)}),P(b,q)};J(I,b=>{t(i)?b(C):b(S,!1)})}Z("mouseenter",k,()=>le.set("settings-panel")),P(n,k),we()}Ye(["change","click"]);function $u(n,e){ye(e,!0);let a=E(()=>{const o=new Map;for(const c of e.settings)o.set(Ua(c),vr(c));return o});function r(o){return o==="DelayPingPong"?"boolean":o==="Sidechain"||o==="Groove"?"string":"number"}const s=["tab-part-rhythm","tab-part-chorus","tab-part-delay","tab-part-reverb","tab-part-sidechain","tab-part-tapestop","tab-part-master"],i={Bpm:"setting-Bpm",Swing:"setting-Swing",AccentPct:"setting-AccentPct",Groove:"setting-Groove",Humanize:"setting-Humanize",Strum:"setting-Strum",ChorusRate:"setting-ChorusRate",ChorusDepth:"setting-ChorusDepth",ChorusMix:"setting-ChorusMix",ChorusToDelay:"setting-ChorusToDelay",ChorusToReverb:"setting-ChorusToReverb",DelayTime:"setting-DelayTime",DelayFeedback:"setting-DelayFeedback",DelayDamping:"setting-DelayDamping",DelayPingPong:"setting-DelayPingPong",DelayMix:"setting-DelayMix",DelayToReverb:"setting-DelayToReverb",ReverbSize:"setting-ReverbSize",ReverbMix:"setting-ReverbMix",Sidechain:"setting-Sidechain",SidechainAmt:"setting-SidechainAmt",SidechainRelease:"setting-SidechainRelease",TapeStopTime:"setting-TapeStopTime",TapeStartTime:"setting-TapeStartTime",TapeStopCurve:"setting-TapeStopCurve",MasterDrive:"setting-MasterDrive",CompThreshold:"setting-CompThreshold",CompRatio:"setting-CompRatio",CompAttack:"setting-CompAttack",CompRelease:"setting-CompRelease"};{let o=E(()=>su(Dn.resolved));_r(n,{get tabs(){return t(o)},get activeSettings(){return t(a)},get defaults(){return nu},get ranges(){return tu},settingType:r,get onset(){return e.onsetsetting},get ondelete(){return e.ondeletesetting},get onadd(){return e.onaddsetting},placeholder:"e.g. bpm 140",get tabHints(){return s},get settingHints(){return i}})}we()}var e0=D('<button class="auto-label svelte-1fqpyfl" title="Rename parameter"> </button>'),n0=D('<span class="section-sep svelte-1fqpyfl">|</span>'),t0=D("<button> </button>"),a0=D('<span class="val-wrap svelte-1fqpyfl"><!> <!></span>'),s0=D("<!> <!>",1),r0=D('<span class="auto-row svelte-1fqpyfl"><!> <!> <button class="add-val svelte-1fqpyfl" title="Add value">+</button> <!></span>');function Ys(n,e){ye(e,!0);let a=H(!1),r=H(null);function s(){h(a,!0)}function i(C){const S=En(e.auto);S.parameter=C,e.onchange(S),h(a,!1)}function o(){h(a,!1)}function c(C,S){h(r,{section:C,index:S},!0)}function l(C,S,b){const q=Tu(b);if(q!==null){const z=En(e.auto);z.sections[C][S]=q,e.onchange(z)}h(r,null)}function f(){h(r,null)}function u(C,S){const b=En(e.auto);b.sections[C].splice(S,1),b.sections=b.sections.filter(q=>q.length>0),b.sections.length===0?e.ondelete():e.onchange(b)}function d(){const C=En(e.auto);C.sections.length===0?C.sections.push(["Pass"]):C.sections[C.sections.length-1].push("Pass"),e.onchange(C)}function m(C){return C==="Hold"?"val-hold":C==="Pass"?"val-pass":"val-number"}var y=r0(),k=x(y);{var w=C=>{Bt(C,{get initialValue(){return e.auto.parameter},onsubmit:i,oncancel:o})},_=C=>{var S=e0(),b=x(S);ae(()=>Pe(b,`@${e.auto.parameter??""}`)),B("click",S,s),P(C,S)};J(k,C=>{t(a)?C(w):C(_,!1)})}var R=v(k,2);Ue(R,17,()=>e.auto.sections,We,(C,S,b)=>{var q=s0(),z=De(q);{var j=W=>{var T=n0();P(W,T)};J(z,W=>{b>0&&W(j)})}var O=v(z,2);Ue(O,17,()=>t(S),We,(W,T,M)=>{var L=a0(),V=x(L);{var te=N=>{{let ne=E(()=>ai(t(T)));Bt(N,{get initialValue(){return t(ne)},onsubmit:ce=>l(b,M,ce),oncancel:f})}},$=N=>{var ne=t0(),ce=x(ne);ae((ge,se)=>{ve(ne,1,`val-cell ${ge??""}`,"svelte-1fqpyfl"),Pe(ce,se)},[()=>m(t(T)),()=>ai(t(T))]),B("click",ne,()=>c(b,M)),P(N,ne)};J(V,N=>{t(r)?.section===b&&t(r)?.index===M?N(te):N($,!1)})}var ee=v(V,2);Rt(ee,{onclick:()=>u(b,M)}),P(W,L)}),P(C,q)});var F=v(R,2),I=v(F,2);Rt(I,{get onclick(){return e.ondelete}}),Z("mouseenter",y,()=>le.set("automation-track")),B("click",F,d),P(n,y),we()}Ye(["click"]);var i0=D('<button class="step-label svelte-szfenj" title="Rename parameter"> </button>'),o0=D('<button class="val-cell svelte-szfenj"> </button>'),l0=D('<span class="val-wrap svelte-szfenj"><!> <!></span>'),c0=D('<span class="step-row svelte-szfenj"><!> <!> <button class="add-val svelte-szfenj" title="Add event">+</button> <!></span>');function $s(n,e){ye(e,!0);let a=H(!1),r=H(null);function s(){h(a,!0)}function i(S){const b=En(e.auto);b.parameter=S,e.onchange(b),h(a,!1)}function o(){h(a,!1)}function c(S){const b=S.time_unit==="Seconds"?"s":"";return`${S.value}@${S.time}${b}`}function l(S){const b=S.indexOf("@");if(b<0)return null;const q=S.slice(0,b);let z=S.slice(b+1);const j=parseFloat(q);if(isNaN(j))return null;let O="Beats";z.endsWith("s")&&(O="Seconds",z=z.slice(0,-1));const W=parseFloat(z);return isNaN(W)?null:{value:j,time:W,time_unit:O}}function f(S){h(r,S,!0)}function u(S,b){const q=l(b);if(q){const z=En(e.auto);z.events[S]=q,e.onchange(z)}h(r,null)}function d(){h(r,null)}function m(S){const b=En(e.auto);b.events.splice(S,1),b.events.length===0?e.ondelete():e.onchange(b)}function y(){const S=En(e.auto),b=S.events.length>0?S.events[S.events.length-1].time+1:0;S.events.push({value:0,time:b,time_unit:"Beats"}),e.onchange(S)}var k=c0(),w=x(k);{var _=S=>{Bt(S,{get initialValue(){return e.auto.parameter},onsubmit:i,oncancel:o})},R=S=>{var b=i0(),q=x(b);ae(()=>Pe(q,`$${e.auto.parameter??""}`)),B("click",b,s),P(S,b)};J(w,S=>{t(a)?S(_):S(R,!1)})}var F=v(w,2);Ue(F,17,()=>e.auto.events,We,(S,b,q)=>{var z=l0(),j=x(z);{var O=M=>{{let L=E(()=>c(t(b)));Bt(M,{get initialValue(){return t(L)},onsubmit:V=>u(q,V),oncancel:d})}},W=M=>{var L=o0(),V=x(L);ae(te=>Pe(V,te),[()=>c(t(b))]),B("click",L,()=>f(q)),P(M,L)};J(j,M=>{t(r)===q?M(O):M(W,!1)})}var T=v(j,2);Rt(T,{onclick:()=>m(q)}),P(S,z)});var I=v(F,2),C=v(I,2);Rt(C,{get onclick(){return e.ondelete}}),Z("mouseenter",k,()=>le.set("step-automation-track")),B("click",I,y),P(n,k),we()}Ye(["click"]);var u0=D('<input class="rename-part-input svelte-cwrja0"/> <button class="header-btn ok svelte-cwrja0">ok</button> <button class="header-btn cancel svelte-cwrja0">esc</button>',1),d0=D('<button class="header-btn auto-header svelte-cwrja0" title="Add @ automation">+@</button>'),f0=D('<button class="header-btn auto-header svelte-cwrja0" style="color: var(--warning-dim, var(--warning))" title="Add $ step automation">+$</button>'),m0=D('<span class="playback-info svelte-cwrja0"> </span>'),p0=D('<span class="part-label svelte-cwrja0"> </span> <button title="Toggle settings panel">&#9881;</button> <button class="header-btn svelte-cwrja0" title="Rename part">&#9998;</button> <button class="header-btn svelte-cwrja0" title="Duplicate part">&#10697;</button> <button class="header-btn delete svelte-cwrja0" title="Delete part">&times;</button> <!> <!> <!>',1),h0=D('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0">@</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: v1 v2 | v3 v4"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),v0=D('<div class="part-automation svelte-cwrja0"><!> <!></div>'),_0=D('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0" style="color: var(--warning)">$</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: val@beat val@beat"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),g0=D('<div class="part-automation svelte-cwrja0"><!> <!></div>'),b0=D('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0">@</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: v1 v2 | v3 v4"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),k0=D('<div class="clip-automation svelte-cwrja0"><!> <!></div>'),y0=D('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0" style="color: var(--warning)">$</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: val@beat val@beat"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),w0=D('<div class="clip-automation svelte-cwrja0"><!> <!></div>'),x0=D('<div draggable="true" role="listitem"><!> <!> <!></div>'),S0=D('<button class="delete-track svelte-cwrja0" title="Remove track">&times;</button>'),P0=D('<div draggable="true" role="listitem"><span class="track-handle svelte-cwrja0" title="Drag to reorder">&#9776;</span> <button title="Mute track">M</button> <button title="Solo track">S</button> <div class="track-clips svelte-cwrja0"><!> <button class="add-clip svelte-cwrja0" title="Add clip">+</button> <button class="auto-add-trigger svelte-cwrja0">+@</button> <button class="auto-add-trigger svelte-cwrja0" style="color: var(--warning-dim, var(--warning))">+$</button></div> <!></div>'),A0=D('<!> <!> <div class="tracks-panel svelte-cwrja0"><!> <button class="add-track svelte-cwrja0">+ Track</button></div>',1),T0=D('<div class="part-editor svelte-cwrja0"><div class="part-header svelte-cwrja0"><!></div> <div class="part-body svelte-cwrja0"><!></div></div>');function D0(n,e){ye(e,!0),_e(e,"partSeqIdx",3,0);let a=_e(e,"activeTrackClips",3,null),r=_e(e,"focusClipNotches",3,null),s=_e(e,"automation",19,()=>[]),i=_e(e,"stepAutomation",19,()=>[]),o=_e(e,"playbackBeat",3,null),c=_e(e,"playbackSecs",3,null),l=H(!1),f=E(()=>e.settings.length>0),u=H(!1),d=H("");function m(){h(d,e.partName,!0),h(u,!0)}function y(){const Y=t(d).trim();if(!Y||Y===e.partName){h(u,!1);return}e.onrenamepart(Y),h(u,!1)}function k(){h(u,!1)}let w=H(-1),_=H(-1);function R(Y,oe){h(w,oe,!0),Y.dataTransfer&&(Y.dataTransfer.effectAllowed="move",Y.dataTransfer.setData("application/x-track",String(oe)))}function F(Y,oe){Y.dataTransfer?.types.includes("application/x-track")&&(Y.preventDefault(),Y.dataTransfer.dropEffect="move",h(_,oe,!0))}function I(){h(_,-1)}function C(Y,oe){Y.preventDefault(),t(w)!==-1&&t(w)!==oe&&e.onmovetrack(t(w),oe),h(w,-1),h(_,-1)}function S(){h(w,-1),h(_,-1)}let b=H(null),q=H(null);function z(Y,oe,be){Y.stopPropagation(),h(b,{track:oe,clip:be},!0),Y.dataTransfer&&(Y.dataTransfer.effectAllowed="move",Y.dataTransfer.setData("application/x-clip",`${oe}:${be}`))}function j(Y,oe,be){Y.dataTransfer?.types.includes("application/x-clip")&&(Y.preventDefault(),Y.stopPropagation(),Y.dataTransfer.dropEffect="move",h(q,{track:oe,clip:be},!0))}function O(Y){Y.stopPropagation(),h(q,null)}function W(Y,oe,be){Y.preventDefault(),Y.stopPropagation(),t(b)&&(t(b).track!==oe||t(b).clip!==be)&&e.onmoveclip(t(b).track,t(b).clip,oe,be),h(b,null),h(q,null)}function T(){h(b,null),h(q,null)}function M(Y,oe){if(Y.dataTransfer?.types.includes("application/x-clip")){if(Y.preventDefault(),t(b)){const be=e.tracks[oe].length;(t(b).track!==oe||t(b).clip!==be)&&e.onmoveclip(t(b).track,t(b).clip,oe,be)}h(b,null),h(q,null)}}function L(Y){Y.dataTransfer?.types.includes("application/x-clip")&&(Y.preventDefault(),Y.dataTransfer.dropEffect="move")}function V(Y,oe){return t(q)!==null&&t(q).track===Y&&t(q).clip===oe}function te(Y,oe){return t(b)!==null&&t(b).track===Y&&t(b).clip===oe}let $=H(!1),ee=H("");function N(){h($,!0),h(ee,"")}function ne(){const Y=Zs(t(ee));Y&&e.onaddautomation&&e.onaddautomation(Y),h($,!1),h(ee,"")}function ce(){h($,!1),h(ee,"")}let ge=H(!1),se=H("");function pe(){h(ge,!0),h(se,"")}function Ve(){const Y=Js(t(se));Y&&e.onaddstepautomation&&e.onaddstepautomation(Y),h(ge,!1),h(se,"")}function qe(){h(ge,!1),h(se,"")}let Te=H(null),xe=H("");function Fe(Y,oe){h(Te,{track:Y,clip:oe},!0),h(xe,"")}function Qe(Y,oe){const be=Zs(t(xe));if(be){const Me=e.tracks[Y][oe],Re=[...Me.automation,be];e.onchangeclip(Y,oe,{...Me,automation:Re})}h(Te,null),h(xe,"")}function nn(){h(Te,null),h(xe,"")}function kn(Y,oe,be,Me){const Re=e.tracks[Y][oe],Ee=[...Re.automation];Ee[be]=Me,e.onchangeclip(Y,oe,{...Re,automation:Ee})}function Xn(Y,oe,be){const Me=e.tracks[Y][oe],Re=Me.automation.filter((Ee,un)=>un!==be);e.onchangeclip(Y,oe,{...Me,automation:Re})}let qn=H(null),on=H("");function Pn(Y,oe){h(qn,{track:Y,clip:oe},!0),h(on,"")}function Kt(Y,oe){const be=Js(t(on));if(be){const Me=e.tracks[Y][oe],Re=[...Me.step_automation,be];e.onchangeclip(Y,oe,{...Me,step_automation:Re})}h(qn,null),h(on,"")}function Wt(){h(qn,null),h(on,"")}function Ut(Y,oe,be,Me){const Re=e.tracks[Y][oe],Ee=[...Re.step_automation];Ee[be]=Me,e.onchangeclip(Y,oe,{...Re,step_automation:Ee})}function aa(Y,oe,be){const Me=e.tracks[Y][oe],Re=Me.step_automation.filter((Ee,un)=>un!==be);e.onchangeclip(Y,oe,{...Me,step_automation:Re})}var Qt=T0(),qt=x(Qt),sa=x(qt);{var pt=Y=>{var oe=u0(),be=De(oe),Me=v(be,2),Re=v(Me,2);B("keydown",be,Ee=>{Ee.key==="Enter"&&y(),Ee.key==="Escape"&&k()}),Zn(be,()=>t(d),Ee=>h(d,Ee)),B("click",Me,y),B("click",Re,k),P(Y,oe)},nt=Y=>{var oe=p0(),be=De(oe),Me=x(be),Re=v(be,2);let Ee;var un=v(Re,2),zn=v(un,2),Nn=v(zn,2),tn=v(Nn,2);{var dn=Ce=>{var fe=d0();B("click",fe,N),Z("mouseenter",fe,()=>le.set("add-automation")),P(Ce,fe)};J(tn,Ce=>{e.onaddautomation&&Ce(dn)})}var he=v(tn,2);{var ln=Ce=>{var fe=f0();B("click",fe,pe),Z("mouseenter",fe,()=>le.set("add-step-automation")),P(Ce,fe)};J(he,Ce=>{e.onaddstepautomation&&Ce(ln)})}var An=v(he,2);{var an=Ce=>{var fe=m0(),rn=x(fe);ae((Cn,Ne)=>Pe(rn,`${Cn??""} / ${Ne??""}s`),[()=>o().toFixed(1),()=>c().toFixed(1)]),P(Ce,fe)};J(An,Ce=>{o()!=null&&c()!=null&&Ce(an)})}ae(()=>{Pe(Me,e.partName),Ee=ve(Re,1,"header-btn gear svelte-cwrja0",null,Ee,{glow:t(f),active:t(l)})}),B("click",Re,()=>{h(l,!t(l))}),Z("mouseenter",Re,()=>le.set("part-settings-gear")),B("click",un,m),B("click",zn,function(...Ce){e.onduplicatepart?.apply(this,Ce)}),B("click",Nn,function(...Ce){e.ondeletepart?.apply(this,Ce)}),P(Y,oe)};J(sa,Y=>{t(u)?Y(pt):Y(nt,!1)})}var K=v(qt,2),ie=x(K);{var Ae=Y=>{$u(Y,{get settings(){return e.settings},get onsetsetting(){return e.onsetsettingstructured},get ondeletesetting(){return e.ondeletesettingbykey},get onaddsetting(){return e.onaddsetting}})},Ge=Y=>{var oe=A0(),be=De(oe);{var Me=tn=>{var dn=v0(),he=x(dn);Ue(he,17,s,We,(an,Ce,fe)=>{Ys(an,{get auto(){return t(Ce)},onchange:rn=>e.onchangeautomation?.(fe,rn),ondelete:()=>e.ondeleteautomation?.(fe)})});var ln=v(he,2);{var An=an=>{var Ce=h0(),fe=v(x(Ce),2),rn=v(fe,2),Cn=v(rn,2);B("keydown",fe,Ne=>{Ne.key==="Enter"&&ne(),Ne.key==="Escape"&&ce()}),Zn(fe,()=>t(ee),Ne=>h(ee,Ne)),B("click",rn,ne),B("click",Cn,ce),P(an,Ce)};J(ln,an=>{t($)&&an(An)})}P(tn,dn)};J(be,tn=>{(s().length>0||t($))&&tn(Me)})}var Re=v(be,2);{var Ee=tn=>{var dn=g0(),he=x(dn);Ue(he,17,i,We,(an,Ce,fe)=>{$s(an,{get auto(){return t(Ce)},onchange:rn=>e.onchangestepautomation?.(fe,rn),ondelete:()=>e.ondeletestepautomation?.(fe)})});var ln=v(he,2);{var An=an=>{var Ce=_0(),fe=v(x(Ce),2),rn=v(fe,2),Cn=v(rn,2);B("keydown",fe,Ne=>{Ne.key==="Enter"&&Ve(),Ne.key==="Escape"&&qe()}),Zn(fe,()=>t(se),Ne=>h(se,Ne)),B("click",rn,Ve),B("click",Cn,qe),P(an,Ce)};J(ln,an=>{t(ge)&&an(An)})}P(tn,dn)};J(Re,tn=>{(i().length>0||t(ge))&&tn(Ee)})}var un=v(Re,2),zn=x(un);Ue(zn,17,()=>e.tracks,We,(tn,dn,he)=>{var ln=P0();let An;var an=v(x(ln),2);let Ce;var fe=v(an,2);let rn;var Cn=v(fe,2);let Ne;var Gn=x(Cn);Ue(Gn,17,()=>t(dn),We,(Q,re,ue)=>{var ke=x0();let Ie;var Ke=x(ke);{let sn=E(()=>a()?.get(he)?.clipIdx===ue?a().get(he).progress:-1),ht=E(()=>r()?.get(he)?.[ue]??null),Ct=E(()=>e.onfocusclipdrag?(bn,Yn)=>e.onfocusclipdrag(bn,Yn,he,ue):void 0);Ou(Ke,{get clip(){return t(re)},get patterns(){return e.patterns},get progress(){return t(sn)},get focusNotches(){return t(ht)},onchange:bn=>e.onchangeclip(he,ue,bn),ondelete:()=>e.ondeleteclip(he,ue),oneditpattern:()=>e.oneditpattern(t(re).name),get onfocusdrag(){return t(Ct)}})}var Kn=v(Ke,2);{var gn=sn=>{var ht=k0(),Ct=x(ht);Ue(Ct,17,()=>t(re).automation,We,(In,tt,Bn)=>{Ys(In,{get auto(){return t(tt)},onchange:wn=>kn(he,ue,Bn,wn),ondelete:()=>Xn(he,ue,Bn)})});var bn=v(Ct,2);{var Yn=In=>{var tt=b0(),Bn=v(x(tt),2),wn=v(Bn,2),Le=v(wn,2);B("keydown",Bn,at=>{at.key==="Enter"&&Qe(he,ue),at.key==="Escape"&&nn()}),Zn(Bn,()=>t(xe),at=>h(xe,at)),B("click",wn,()=>Qe(he,ue)),B("click",Le,nn),P(In,tt)};J(bn,In=>{t(Te)?.track===he&&t(Te)?.clip===ue&&In(Yn)})}P(sn,ht)};J(Kn,sn=>{(t(re).automation.length>0||t(Te)?.track===he&&t(Te)?.clip===ue)&&sn(gn)})}var yn=v(Kn,2);{var Wn=sn=>{var ht=w0(),Ct=x(ht);Ue(Ct,17,()=>t(re).step_automation,We,(In,tt,Bn)=>{$s(In,{get auto(){return t(tt)},onchange:wn=>Ut(he,ue,Bn,wn),ondelete:()=>aa(he,ue,Bn)})});var bn=v(Ct,2);{var Yn=In=>{var tt=y0(),Bn=v(x(tt),2),wn=v(Bn,2),Le=v(wn,2);B("keydown",Bn,at=>{at.key==="Enter"&&Kt(he,ue),at.key==="Escape"&&Wt()}),Zn(Bn,()=>t(on),at=>h(on,at)),B("click",wn,()=>Kt(he,ue)),B("click",Le,Wt),P(In,tt)};J(bn,In=>{t(qn)?.track===he&&t(qn)?.clip===ue&&In(Yn)})}P(sn,ht)};J(yn,sn=>{(t(re).step_automation.length>0||t(qn)?.track===he&&t(qn)?.clip===ue)&&sn(Wn)})}ae(sn=>{Ie=ve(ke,1,"clip-wrapper svelte-cwrja0",null,Ie,sn),$e(ke,`flex-grow: ${t(re).times??""};`)},[()=>({"clip-drag-over":V(he,ue),"clip-dragging":te(he,ue)})]),Z("dragstart",ke,sn=>z(sn,he,ue)),Z("dragover",ke,sn=>j(sn,he,ue)),Z("dragleave",ke,sn=>O(sn)),Z("drop",ke,sn=>W(sn,he,ue)),Z("dragend",ke,T),P(Q,ke)});var p=v(Gn,2),g=v(p,2),A=v(g,2),G=v(Cn,2);{var U=Q=>{var re=S0();B("click",re,()=>e.ondeletetrack(he)),P(Q,re)};J(G,Q=>{e.tracks.length>1&&Q(U)})}ae((Q,re,ue)=>{An=ve(ln,1,"track-row svelte-cwrja0",null,An,{"drag-over-track":t(_)===he&&t(w)!==he,"dragging-track":t(w)===he}),Ce=ve(an,1,"ms-btn mute svelte-cwrja0",null,Ce,Q),rn=ve(fe,1,"ms-btn solo svelte-cwrja0",null,rn,re),Ne=$e(Cn,"",Ne,ue)},[()=>({active:jn.mutedPartTracks.has(he)}),()=>({active:jn.soloPartTracks.has(he)}),()=>({opacity:jn.isPartTrackAudible(he)?1:.35})]),Z("dragstart",ln,Q=>R(Q,he)),Z("dragover",ln,Q=>{F(Q,he),L(Q)}),Z("dragleave",ln,I),Z("drop",ln,Q=>{C(Q,he),M(Q,he)}),Z("dragend",ln,S),Z("mouseenter",ln,()=>le.set("part-clip-track")),B("click",an,Q=>{Q.stopPropagation(),jn.toggleMutePartTrack(he)}),Z("mouseenter",an,()=>le.set("mute-button")),B("click",fe,Q=>{Q.stopPropagation(),jn.toggleSoloPartTrack(he)}),Z("mouseenter",fe,()=>le.set("solo-button")),B("click",p,()=>e.onaddclip(he)),Z("mouseenter",p,()=>le.set("add-clip")),B("click",g,()=>{const Q=t(dn).findLastIndex(re=>re.name!=="gap");Q>=0&&Fe(he,Q)}),Z("mouseenter",g,()=>le.set("add-automation")),B("click",A,()=>{const Q=t(dn).findLastIndex(re=>re.name!=="gap");Q>=0&&Pn(he,Q)}),Z("mouseenter",A,()=>le.set("add-step-automation")),P(tn,ln)});var Nn=v(zn,2);B("click",Nn,function(...tn){e.onaddtrack?.apply(this,tn)}),Z("mouseenter",Nn,()=>le.set("add-track")),P(Y,oe)};J(ie,Y=>{t(l)?Y(Ae):Y(Ge,!1)})}Z("mouseenter",qt,()=>le.set("part-header")),P(n,Qt),we()}Ye(["keydown","click"]);let si=!1;async function gr(){si||(await wasm_bindgen(),si=!0)}async function _o(n){await gr();const e=wasm_bindgen.parse_measure_text(n);return JSON.parse(e)}async function R0(n){await gr();const e=wasm_bindgen.parse_demo_text(n);return JSON.parse(e)}function q0(n){return n.map(e=>e.map(a=>"Beat"in a?a.Beat.map(r=>Us(r)).join(""):co(a.Command)).join(" ")).join(" | ")}async function C0(n){await gr();const e=wasm_bindgen.parse_settings_text(n);return JSON.parse(e)}function go(n,e,a,r){const s=n[e];"Beat"in s&&(s.Beat[a]=r)}async function bo(n,e,a,r){const i=(await _o(r)).find(o=>"Beat"in o);if(i&&"Beat"in i&&i.Beat.length>0){const o=n[e];if("Beat"in o)return o.Beat[a]=i.Beat[0],!0}return!1}function L0(n){n.push({Beat:["Rest"]})}function ko(n,e){n.splice(e,1)}function yo(n,e,a){const r=n[e];"Beat"in r&&(r.Beat.splice(a,1),r.Beat.length===0&&n.splice(e,1))}async function er(n,e,a){const s=(await _o(a)).filter(i=>"Command"in i);return s.length>0?(n.splice(e,0,...s),!0):!1}function wo(n,e,a){const[r]=n.splice(e,1),s=e<a?a-1:a;n.splice(s,0,r)}function M0(n,e){ye(e,!0);let a=E(()=>{const o=new Map;for(const c of e.groupSettings)o.set(cs(c),lo(c));for(const c of e.toneSettings){const l=Object.keys(c)[0],f=Object.values(c)[0];o.set(l,f)}return o}),r=E(()=>{const o=new Map;for(const c of e.partSettings)o.set(Ua(c),vr(c));return o});const s={Octave:"setting-Octave",Instrument:"setting-Instrument",Scale:"setting-Scale",Root:"setting-Root",Velocity:"setting-Velocity",Arp:"setting-Arp",ArpRate:"setting-ArpRate",ArpMode:"setting-ArpMode",ArpOctaves:"setting-ArpOctaves",ArpSlide:"setting-ArpSlide",Legato:"setting-Legato",Voices:"setting-Voices",Glide:"setting-Glide",Level:"setting-Level",DrySend:"setting-DrySend",ChorusSend:"setting-ChorusSend",DelaySend:"setting-DelaySend",ReverbSend:"setting-ReverbSend",Swing:"setting-Swing",AccentPct:"setting-AccentPct",Groove:"setting-Groove",Humanize:"setting-Humanize",Strum:"setting-Strum",StrumIdx:"setting-StrumIdx"},i=["tab-track-tone","tab-track-arp","tab-track-voice","tab-track-rhythm"];{let o=E(()=>wu(Dn.resolved));_r(n,{get tabs(){return t(o)},get activeSettings(){return t(a)},get inheritedSettings(){return t(r)},get defaults(){return mo},get ranges(){return fo},get settingType(){return po},get onset(){return e.onset},get ondelete(){return e.ondelete},get onadd(){return e.onadd},placeholder:"e.g. swing 60",get tabHints(){return i},get settingHints(){return s}})}we()}var E0=D("<button> </button>"),F0=D('<span class="division-wrap svelte-wo5v94"><!> <!></span>');function O0(n,e){ye(e,!0);let a=_e(e,"hasTonal",3,!1),r=H(!1),s=null;const i=E(()=>wa(e.division)[1]),o=E(()=>wa(e.division)[2]);function c(){a()||!us(e.division)||t(o).length>0?h(r,!0):(s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,e.onchange(bu(e.division))},200))}function l(){s!==null&&(clearTimeout(s),s=null),h(r,!0)}function f(w){const[_]=wa(w);return _==="Hit"?"hit":_==="Accent"?"accent":_==="Rest"?"rest":_==="Sustain"?"sustain":"tonal"}var u=F0(),d=x(u);{var m=w=>{{let _=E(()=>Us(e.division)),R=E(()=>t(o).length>0?Qs(e.division):"");Bt(w,{get placeholder(){return t(_)},get initialValue(){return t(R)},onsubmit:F=>{h(r,!1),e.onedit(F)},oncancel:()=>{h(r,!1)}})}},y=w=>{var _=E0();let R,F;var I=x(_);ae((C,S,b)=>{R=ve(_,1,`cell ${C??""}`,"svelte-wo5v94",R,{probable:t(i)!==null,locked:t(o).length>0}),en(_,"title",S),F=$e(_,"",F,{opacity:t(i)!==null?.4+.6*(t(i)/100):void 0}),Pe(I,b)},[()=>f(e.division),()=>t(i)!==null?`${t(i)}% probability`+(us(e.division)&&!a()&&t(o).length===0?" — click to cycle, double-click to edit":" — click to edit"):us(e.division)&&!a()&&t(o).length===0?"Click to cycle, double-click to edit":"Click to edit",()=>Us(e.division)]),B("click",_,c),B("dblclick",_,l),P(w,_)};J(d,w=>{t(r)?w(m):w(y,!1)})}var k=v(d,2);Rt(k,{get onclick(){return e.ondelete}}),Z("mouseenter",u,()=>le.set("division-cell")),P(n,u),we()}Ye(["click","dblclick"]);var z0=D('<span class="beat svelte-192akuh"><!> <button class="add-btn svelte-192akuh" title="Add division">+</button> <!></span>');function N0(n,e){ye(e,!0);let a=_e(e,"hasTonal",3,!1);var r=z0(),s=x(r);Ue(s,17,()=>e.divisions,We,(c,l,f)=>{O0(c,{get division(){return t(l)},get hasTonal(){return a()},onchange:u=>e.onchange(f,u),ondelete:()=>e.ondeletedivision(f),onedit:u=>e.onedit(f,u)})});var i=v(s,2),o=v(i,2);Rt(o,{get onclick(){return e.ondeletebeat}}),Z("mouseenter",r,()=>le.set("beat-cell")),B("click",i,function(...c){e.onadddivision?.apply(this,c)}),P(n,r),we()}Ye(["click"]);var I0=D('<span class="pill-wrap svelte-1heu11r"><span class="pill svelte-1heu11r"> </span> <!></span>');function j0(n,e){ye(e,!0);var a=I0(),r=x(a),s=x(r),i=v(r,2);Rt(i,{get onclick(){return e.ondelete}}),ae(o=>Pe(s,o),[()=>co(e.command)]),Z("mouseenter",a,()=>le.set("command-pill")),P(n,a),we()}var B0=D('<span class="playhead svelte-frrp2o"></span>'),H0=D('<button class="insert-btn svelte-frrp2o" title="Insert command here">+</button>'),V0=D('<span draggable="true"><!></span>'),G0=D("<span><!></span> <!>",1),K0=D('<span class="measure svelte-frrp2o"><!> <!> <span><!></span> <button class="add-btn svelte-frrp2o" title="Add beat">+</button> <button class="cmd-btn svelte-frrp2o" title="Add command">cmd</button> <!></span>');function xo(n,e){ye(e,!0);let a=_e(e,"playing",3,!1),r=_e(e,"beatPosition",3,0),s=E(()=>e.items.filter(T=>"Beat"in T).length),i=E(()=>e.items.some(T=>"Beat"in T&&T.Beat.some(M=>!us(M)))),o=H(null),c=H(null),l=H(null);function f(T){return"Beat"in T}function u(T){return"Command"in T}function d(T){const M=e.items[T];f(M)&&(M.Beat.push("Rest"),e.onchange(T,M.Beat.length-1,"Rest"))}function m(T,M){h(c,M,!0),T.dataTransfer?.setData("text/plain",String(M))}function y(){h(c,null),h(l,null)}function k(T,M){T.preventDefault(),h(l,M,!0)}function w(){h(l,null)}function _(T,M){T.preventDefault(),t(c)!==null&&t(c)!==M&&e.onreorderitem(t(c),M),h(c,null),h(l,null)}var R=K0(),F=x(R);{var I=T=>{var M=B0();ae(()=>$e(M,`left: ${r()/t(s)*100}%`)),P(T,M)};J(F,T=>{a()&&t(s)>0&&T(I)})}var C=v(F,2);Ue(C,17,()=>e.items,We,(T,M,L)=>{var V=G0(),te=De(V);let $;var ee=x(te);{var N=qe=>{Bt(qe,{placeholder:"e.g. instrument bass",onsubmit:Te=>{h(o,null),e.oninsertcommand(L,Te)},oncancel:()=>{h(o,null)}})},ne=qe=>{var Te=H0();B("click",Te,()=>{h(o,L,!0)}),P(qe,Te)};J(ee,qe=>{t(o)===L?qe(N):qe(ne,!1)})}var ce=v(te,2);{var ge=qe=>{N0(qe,{get divisions(){return t(M).Beat},get hasTonal(){return t(i)},onchange:(Te,xe)=>e.onchange(L,Te,xe),onadddivision:()=>d(L),ondeletedivision:Te=>e.ondeletedivision(L,Te),ondeletebeat:()=>e.ondeleteitem(L),onedit:(Te,xe)=>e.onedit(L,Te,xe)})},se=E(()=>f(t(M))),pe=qe=>{var Te=V0();let xe;var Fe=x(Te);j0(Fe,{get command(){return t(M).Command},ondelete:()=>e.ondeleteitem(L)}),ae(()=>xe=ve(Te,1,"draggable-command svelte-frrp2o",null,xe,{"is-dragging":t(c)===L})),Z("dragstart",Te,Qe=>m(Qe,L)),Z("dragend",Te,y),P(qe,Te)},Ve=E(()=>u(t(M)));J(ce,qe=>{t(se)?qe(ge):t(Ve)&&qe(pe,1)})}ae(()=>$=ve(te,1,"drop-zone svelte-frrp2o",null,$,{active:t(l)===L,dragging:t(c)!==null})),Z("dragover",te,qe=>k(qe,L)),Z("dragleave",te,w),Z("drop",te,qe=>_(qe,L)),P(T,V)});var S=v(C,2);let b;var q=x(S);{var z=T=>{Bt(T,{placeholder:"e.g. instrument bass",onsubmit:M=>{h(o,null),e.oninsertcommand(e.items.length,M)},oncancel:()=>{h(o,null)}})};J(q,T=>{t(o)===e.items.length&&T(z)})}var j=v(S,2),O=v(j,2),W=v(O,2);Rt(W,{get onclick(){return e.ondeletemeasure}}),ae(()=>b=ve(S,1,"drop-zone svelte-frrp2o",null,b,{active:t(l)===e.items.length,dragging:t(c)!==null})),Z("dragover",S,T=>k(T,e.items.length)),Z("dragleave",S,w),Z("drop",S,T=>_(T,e.items.length)),B("click",j,function(...T){e.onaddbeat?.apply(this,T)}),B("click",O,()=>{h(o,e.items.length,!0)}),P(n,R),we()}Ye(["click"]);function W0(n,e){ye(e,!0);let a=_e(e,"inheritedSettings",19,()=>new Map),r=E(()=>{const o=new Map;for(const c of e.leadingCommands)"Command"in c&&o.set(ms(c.Command),ho(c.Command));return o});const s=["tab-track-tone","tab-track-arp","tab-track-voice","tab-track-mix","tab-track-rhythm"],i={Octave:"setting-Octave",Instrument:"setting-Instrument",Scale:"setting-Scale",Root:"setting-Root",Velocity:"setting-Velocity",Arp:"setting-Arp",ArpRate:"setting-ArpRate",ArpMode:"setting-ArpMode",ArpOctaves:"setting-ArpOctaves",ArpSlide:"setting-ArpSlide",Legato:"setting-Legato",Voices:"setting-Voices",Glide:"setting-Glide",Level:"setting-Level",DrySend:"setting-DrySend",ChorusSend:"setting-ChorusSend",DelaySend:"setting-DelaySend",ReverbSend:"setting-ReverbSend",Swing:"setting-Swing",AccentPct:"setting-AccentPct",Groove:"setting-Groove",Humanize:"setting-Humanize",Strum:"setting-Strum",StrumIdx:"setting-StrumIdx"};{let o=E(()=>uo(Dn.resolved));_r(n,{get tabs(){return t(o)},get activeSettings(){return t(r)},get inheritedSettings(){return a()},get defaults(){return mo},get ranges(){return fo},get settingType(){return po},get onset(){return e.onsetcommand},get ondelete(){return e.ondeletecommand},get onadd(){return e.onaddcommand},placeholder:"e.g. octave 4",get tabHints(){return s},get settingHints(){return i}})}we()}var U0=D('<button class="label svelte-1bopal2" title="Double-click to rename"> </button>'),Q0=D('<button title="Toggle track settings">&#9881;</button>'),Z0=D('<span class="no-measure svelte-1bopal2">&mdash;</span>'),J0=D('<button class="auto-add-trigger svelte-1bopal2">+@</button>'),X0=D('<button class="auto-add-trigger step svelte-1bopal2">+$</button>'),Y0=D('<div class="track-row svelte-1bopal2"><!> <!> <!> <!> <!> <!></div>');function $0(n,e){ye(e,!0);let a=_e(e,"playingBeat",19,()=>-1),r=H(!1),s=H(!1),i=E(()=>e.track.measures[0]?ds(e.track.measures[0].items):0),o=E(()=>t(i)>0),c=E(()=>{const j=e.track.measures[e.measureIndex];return j?e.measureIndex===0?j.items.slice(t(i)):j.items:[]}),l=E(()=>e.measureIndex===0?t(i):0),f=E(()=>{const j=e.track.measures[0];return j?j.items.slice(0,t(i)):[]});var u=Y0(),d=x(u);{var m=j=>{{let O=E(()=>Ga(e.track.designator)),W=E(()=>Ga(e.track.designator));Bt(j,{get placeholder(){return t(O)},get initialValue(){return t(W)},onsubmit:T=>{h(r,!1),e.onrename(T)},oncancel:()=>{h(r,!1)}})}},y=j=>{var O=U0(),W=x(O);ae(T=>Pe(W,T),[()=>Ga(e.track.designator)]),B("dblclick",O,()=>{h(r,!0)}),P(j,O)};J(d,j=>{t(r)?j(m):j(y,!1)})}var k=v(d,2);{var w=j=>{var O=Q0();let W;ae(()=>W=ve(O,1,"track-gear-btn svelte-1bopal2",null,W,{glow:t(o),active:t(s)})),B("click",O,()=>{h(s,!t(s))}),Z("mouseenter",O,()=>le.set("track-settings-gear")),P(j,O)};J(k,j=>{e.onsetleadingcommand&&j(w)})}var _=v(k,2);Rt(_,{get onclick(){return e.ondeletetrack}});var R=v(_,2);{var F=j=>{W0(j,{get leadingCommands(){return t(f)},get inheritedSettings(){return e.inheritedSettings},get onsetcommand(){return e.onsetleadingcommand},get ondeletecommand(){return e.ondeleteleadingcommand},get onaddcommand(){return e.onaddleadingcommand}})},I=j=>{{let O=E(()=>a()>=0),W=E(()=>a()>=0?a():0);xo(j,{get items(){return t(c)},get playing(){return t(O)},get beatPosition(){return t(W)},onchange:(T,M,L)=>e.onchange(e.measureIndex,T+t(l),M,L),onaddbeat:()=>{const T=e.track.measures[e.measureIndex];T.items.push({Beat:["Rest"]}),e.onchange(e.measureIndex,T.items.length-1,0,"Rest")},ondeletemeasure:()=>e.ondeletemeasure(e.measureIndex),ondeleteitem:T=>e.ondeleteitem(e.measureIndex,T+t(l)),ondeletedivision:(T,M)=>e.ondeletedivision(e.measureIndex,T+t(l),M),oninsertcommand:(T,M)=>e.oninsertcommand(e.measureIndex,T+t(l),M),onreorderitem:(T,M)=>e.onreorderitem(e.measureIndex,T+t(l),M+t(l)),onedit:(T,M,L)=>e.onedit(e.measureIndex,T+t(l),M,L)})}},C=j=>{var O=Z0();P(j,O)};J(R,j=>{t(s)&&e.onsetleadingcommand&&e.ondeleteleadingcommand&&e.onaddleadingcommand?j(F):e.track.measures[e.measureIndex]?j(I,1):j(C,!1)})}var S=v(R,2);{var b=j=>{var O=J0();B("click",O,function(...W){e.onaddautomation?.apply(this,W)}),Z("mouseenter",O,()=>le.set("add-automation")),P(j,O)};J(S,j=>{e.onaddautomation&&j(b)})}var q=v(S,2);{var z=j=>{var O=X0();B("click",O,function(...W){e.onaddstepautomation?.apply(this,W)}),Z("mouseenter",O,()=>le.set("add-step-automation")),P(j,O)};J(q,j=>{e.onaddstepautomation&&j(z)})}Z("mouseenter",u,()=>le.set("track-row")),P(n,u),we()}Ye(["dblclick","click"]);const ed=`<p><code>o</code> hit &middot; <code>x</code> accented hit &middot; <code>.</code> rest &middot; <code>-</code> sustain (hold previous note)</p>
<p><code>c</code>&ndash;<code>b</code> note name, optional <code>#</code> sharp / <code>_</code> flat, optional octave digit: <code>c#5</code>, <code>e_</code>, <code>f</code></p>
<p><code>0</code>&ndash;<code>9</code> scale degree relative to root/scale</p>
<p><code>></code> before a note or degree &mdash; accented (velocity 127)</p>
<p><code>~</code> before a note or degree &mdash; pitch slide without re-triggering</p>
<p><code>?N</code> after any hit/note &mdash; probability (1&ndash;99%), e.g. <code>o?50</code>, <code>c?75</code></p>
<p><code>{key=val}</code> after any hit/note &mdash; per-step parameter lock, e.g. <code>o{level=0.5}</code>, <code>c{velocity=80,chorus_send=0.8}</code></p>
<p><code>strum_idx N</code> &mdash; assign track position in strum order (0-based); <code>strum_idx off</code> to opt out</p>
<p><code>@param: values...</code> &mdash; automation track (after a track line). Linear interpolation between keyframe values. <code>-</code> hold &middot; <code>.</code> pass &middot; <code>|</code> section separator &middot; <code>*N</code> repeat</p>
<p><code>$param: value@beat</code> &mdash; step automation. Discrete instant changes at specific beats. <code>s</code> suffix = seconds. Supported at three levels: after a track line (track params like level, velocity, sends), at part level before clips (part params like bpm, effects), or after a clip line (part params scoped to that clip). </p>`;var nd=D('<input class="rename-input svelte-1c399gj"/> <button class="header-btn ok svelte-1c399gj">ok</button> <button class="header-btn cancel svelte-1c399gj">esc</button>',1),td=D('<span class="playback-info svelte-1c399gj"> </span>'),ad=D('<span class="selected-label svelte-1c399gj"> </span> <button class="header-btn svelte-1c399gj" title="Rename pattern">&#9998;</button> <button class="header-btn svelte-1c399gj" title="Duplicate pattern">&#10697;</button> <!>',1),sd=D('<pre class="error svelte-1c399gj"> </pre>'),rd=D('<div class="group-content svelte-1c399gj"><!></div>'),id=D('<button title="Mute track">M</button> <button title="Solo track">S</button>',1),od=D('<span class="auto-add-row svelte-1c399gj"><span class="auto-add-prefix svelte-1c399gj">@</span> <input class="auto-add-input svelte-1c399gj" placeholder="param: v1 v2 | v3 v4"/> <button class="auto-add-btn ok svelte-1c399gj">ok</button> <button class="auto-add-btn cancel svelte-1c399gj">esc</button></span>'),ld=D('<div class="track-automation svelte-1c399gj"><!> <!></div>'),cd=D('<span class="auto-add-row svelte-1c399gj"><span class="auto-add-prefix svelte-1c399gj" style="color: var(--warning)">$</span> <input class="auto-add-input svelte-1c399gj" placeholder="param: val@beat val@beat"/> <button class="auto-add-btn ok svelte-1c399gj">ok</button> <button class="auto-add-btn cancel svelte-1c399gj">esc</button></span>'),ud=D('<div class="track-automation svelte-1c399gj"><!> <!></div>'),dd=D('<div class="track-container svelte-1c399gj"><div draggable="true" role="listitem"><span class="track-handle svelte-1c399gj" title="Drag to reorder">&#9776;</span> <!> <!></div> <!> <!></div>'),fd=D('<div class="group-content svelte-1c399gj"><!> <button class="add-track svelte-1c399gj">+ Track</button></div>'),md=D('<div class="group-detail svelte-1c399gj"><div class="group-toolbar svelte-1c399gj"><button title="Toggle group settings">&#9881;</button> <button class="group-delete-btn svelte-1c399gj" title="Delete group">&times;</button> <div><!></div></div> <!></div>'),pd=D("<div><!></div> <!>",1),hd=D('<p class="placeholder svelte-1c399gj">Loading...</p>'),vd=D('<p class="placeholder svelte-1c399gj">Select a pattern to edit.</p>'),_d=D('<div class="pattern-editor svelte-1c399gj"><div class="header svelte-1c399gj"><span class="title svelte-1c399gj">Pattern</span> <!></div> <!> <!> <div class="score-help svelte-1c399gj"><!></div></div>');function gd(n,e){ye(e,!0);let a=_e(e,"partSettings",19,()=>[]),r=H(null),s=H(!1),i=H(""),o=H(0),c=H(0),l=H(!1),f=E(()=>X.selectedPatternLabel),u=E(()=>X.songAst?.patterns.find(p=>p.label===t(f))??null),d=E(()=>t(u)?t(u).groups:null);He(()=>{t(d)&&t(o)>=t(d).length&&h(o,Math.max(0,t(d).length-1),!0)});let m=E(()=>t(d)&&t(o)<t(d).length?t(d)[t(o)]:null),y=E(()=>t(m)?Math.max(...t(m).tracks.map(p=>p.measures.length),0):0),k=E(()=>Array.from({length:t(y)},(p,g)=>({label:String(g+1)})));He(()=>{t(c)>=t(y)&&h(c,Math.max(0,t(y)-1),!0)});function w(p){let g=0;for(const A of p.tracks)g=Math.max(g,A.measures.length);return Math.max(g,1)}let _=E(()=>t(d)?t(d).map((p,g)=>({label:`Group ${g+1}`,weight:w(p)})):[]),R=E(()=>{if(!Se.playing||!Se.position||!Se.sourceMap||!t(f)||!t(d))return null;const p=Se.position;for(let g=0;g<p.tracks.length;g++){const A=p.tracks[g];if(A.done||!A.pattern_key.startsWith(t(f)+"@"))continue;let G=A.measure_idx;for(let U=0;U<t(d).length;U++){const Q=Math.max(...t(d)[U].tracks.map(re=>re.measures.length),0);if(G<Q)return{groupIdx:U,localMeasureIdx:G,beatTime:A.beat_time,elapsedSecs:A.elapsed_secs};G-=Q}return null}return null}),F=E(()=>t(R)?.groupIdx??-1),I=E(()=>!t(R)||t(R).groupIdx!==t(o)?-1:t(R).localMeasureIdx),C=E(()=>{if(!t(R)||t(F)<0||!t(d))return 0;const p=t(d)[t(F)];if(!p)return 0;const g=Math.max(...p.tracks.map(re=>re.measures.length),1),A=p.tracks[0];if(!A)return 0;const G=A.measures[t(R).localMeasureIdx],U=G?G.items.filter(re=>"Beat"in re).length:1,Q=U>0?t(R).beatTime/U:0;return Math.min((t(R).localMeasureIdx+Q)/g,1)}),S=E(()=>{if(!t(R)||t(I)<0||!t(d))return 0;const p=t(d)[t(o)];if(!p)return 0;const g=p.tracks[0];if(!g)return 0;const A=g.measures[t(I)],G=A?A.items.filter(U=>"Beat"in U).length:1;return G>0?Math.min(t(R).beatTime/G,1):0});function b(p){return!t(R)||t(R).groupIdx!==t(o)||t(R).localMeasureIdx!==t(c)?-1:t(R).beatTime}let q=E(()=>{const p=Se.position;if(!p||!Se.sourceMap||!t(f)||!t(d))return null;for(let g=0;g<p.tracks.length;g++){const A=p.tracks[g];if(A.done||!A.pattern_key.startsWith(t(f)+"@"))continue;let G=A.measure_idx,U=0;for(let Q=0;Q<t(d).length;Q++){const re=t(d)[Q],ue=Math.max(...re.tracks.map(ke=>ke.measures.length),0);if(G<ue){for(let ke=0;ke<G;ke++){const Ie=re.tracks.find(Ke=>ke<Ke.measures.length);Ie&&(U+=Ie.measures[ke].items.filter(Ke=>"Beat"in Ke).length)}return U+=A.beat_time,{beat:U,secs:A.elapsed_secs}}for(let ke=0;ke<ue;ke++){const Ie=re.tracks.find(Ke=>ke<Ke.measures.length);Ie&&(U+=Ie.measures[ke].items.filter(Ke=>"Beat"in Ke).length)}G-=ue}return null}return null}),z=H(-1),j=H(-1);function O(p,g){h(z,g,!0),p.dataTransfer&&(p.dataTransfer.effectAllowed="move",p.dataTransfer.setData("application/x-pattern-track",String(g)))}function W(p,g){p.dataTransfer?.types.includes("application/x-pattern-track")&&(p.preventDefault(),p.dataTransfer.dropEffect="move",h(j,g,!0))}function T(){h(j,-1)}function M(p,g){if(p.preventDefault(),t(z)!==-1&&t(z)!==g&&t(d)){const A=t(d)[t(o)],[G]=A.tracks.splice(t(z),1);A.tracks.splice(g,0,G),N()}h(z,-1),h(j,-1)}function L(){h(z,-1),h(j,-1)}function V(){if(!X.songAst||!t(f)||!t(u))return;const p=new Set(X.songAst.patterns.map(U=>U.label));let g=`${t(f)}_copy`,A=2;for(;p.has(g);)g=`${t(f)}_copy_${A}`,A++;const G={...En(t(u)),label:g};X.songAst.patterns.push(G),X.selectedPatternLabel=g,N()}function te(){t(f)&&(h(i,t(f),!0),h(s,!0))}async function $(){if(!X.songAst||!t(f)||!t(i).trim()){h(s,!1);return}const p=t(i).trim(),g=t(f);if(p===g){h(s,!1);return}try{X.songAst=await Zc(X.songAst,g,p),X.selectedPatternLabel=p,h(s,!1),N()}catch(A){h(r,A instanceof Error?A.message:String(A),!0),h(s,!1)}}function ee(){h(s,!1)}async function N(){if(!(!X.songAst||!X.selectedSection)){h(r,null);try{const p=await Ks(X.songAst);X.replaceSectionContent(X.selectedSection,p)}catch(p){h(r,p instanceof Error?p.message:String(p),!0)}}}function ne(p,g,A,G,U){t(d)&&(go(t(d)[t(o)].tracks[p].measures[g].items,A,G,U),N())}function ce(){if(!t(d))return;const p={leading:[],trailing_comment:null};t(d)[t(o)].tracks.push({trivia:p,designator:{Named:"xx"},measures:[{items:[{Beat:["Rest"]}]}],automation:[],step_automation:[]}),N()}function ge(p,g){if(!t(d))return;const A=t(d)[t(o)].tracks[p];g==="ac"?A.designator="Accent":A.designator={Named:g},N()}function se(p){t(d)&&(t(d).splice(p,1),N())}function pe(p){t(d)&&(t(d)[t(o)].tracks.splice(p,1),N())}function Ve(p,g){t(d)&&(t(d)[t(o)].tracks[p].measures.splice(g,1),N())}function qe(p,g,A){t(d)&&(ko(t(d)[t(o)].tracks[p].measures[g].items,A),N())}function Te(p,g,A,G){t(d)&&(yo(t(d)[t(o)].tracks[p].measures[g].items,A,G),N())}async function xe(p,g,A,G){if(t(d))try{await er(t(d)[t(o)].tracks[p].measures[g].items,A,G)&&N()}catch(U){h(r,U instanceof Error?U.message:String(U),!0)}}function Fe(p,g,A,G){t(d)&&(wo(t(d)[t(o)].tracks[p].measures[g].items,A,G),N())}async function Qe(p){if(t(d))try{const g=await C0(p),A=t(d)[t(o)];A.group_settings.push(...g.group_settings),A.tone_settings.push(...g.tone_settings),N()}catch(g){h(r,g instanceof Error?g.message:String(g),!0)}}function nn(p,g){if(!t(d))return;g=ni(p,g);const A=t(d)[t(o)];if($r.includes(p)){const G=A.group_settings.findIndex(Q=>cs(Q)===p),U={[p]:g};G>=0?A.group_settings[G]=U:A.group_settings.push(U)}else{const G=A.tone_settings.findIndex(Q=>Object.keys(Q)[0]===p),U={[p]:g};G>=0?A.tone_settings[G]=U:A.tone_settings.push(U)}N()}function kn(p){if(!t(d))return;const g=t(d)[t(o)];if($r.includes(p)){const A=g.group_settings.findIndex(G=>cs(G)===p);A>=0&&g.group_settings.splice(A,1)}else{const A=g.tone_settings.findIndex(G=>Object.keys(G)[0]===p);A>=0&&g.tone_settings.splice(A,1)}N()}let Xn=E(()=>t(m)!=null&&(t(m).group_settings.length>0||t(m).tone_settings.length>0)),qn=E(()=>{const p=new Map;for(const g of a())p.set(Ua(g),vr(g));if(t(m)){for(const g of t(m).group_settings)p.set(cs(g),lo(g));for(const g of t(m).tone_settings){const A=Object.keys(g)[0],G=Object.values(g)[0];p.set(A,G)}}return p});async function on(p,g,A,G,U){if(t(d))try{await bo(t(d)[t(o)].tracks[p].measures[g].items,A,G,U)&&N()}catch(Q){h(r,Q instanceof Error?Q.message:String(Q),!0)}}function Pn(p,g,A){if(!t(d))return;A=ni(g,A);const G=t(d)[t(o)].tracks[p].measures[0]?.items;if(!G)return;const U=ds(G);for(let Q=0;Q<U;Q++){const re=G[Q];if("Command"in re&&ms(re.Command)===g){G[Q]={Command:ti(g,A)},N();return}}G.splice(U,0,{Command:ti(g,A)}),N()}function Kt(p,g){if(!t(d))return;const A=t(d)[t(o)].tracks[p].measures[0]?.items;if(!A)return;const G=ds(A);for(let U=0;U<G;U++){const Q=A[U];if("Command"in Q&&ms(Q.Command)===g){A.splice(U,1),N();return}}}async function Wt(p,g){if(!t(d))return;const A=t(d)[t(o)].tracks[p];A.measures[0]||(A.measures[0]={items:[]});const G=A.measures[0].items,U=ds(G);try{await er(G,U,g)&&N()}catch(Q){h(r,Q instanceof Error?Q.message:String(Q),!0)}}function Ut(){if(!t(d))return;const p={leading:[],trailing_comment:null};t(d).push({trivia:p,group_settings:[],tone_settings:[],tracks:[]}),h(o,t(d).length-1),N()}function aa(p,g){if(!t(d))return;const[A]=t(d).splice(p,1);t(d).splice(g,0,A),t(o)===p?h(o,g,!0):p<t(o)&&g>=t(o)?ka(o,-1):p>t(o)&&g<=t(o)&&ka(o),N()}function Qt(){if(!t(d))return;const p=t(d)[t(o)];for(const g of p.tracks)g.measures.push({items:[{Beat:["Rest"]}]});h(c,Math.max(...p.tracks.map(g=>g.measures.length),1)-1),N()}function qt(p){if(!t(d))return;const g=t(d)[t(o)];for(const G of g.tracks)p<G.measures.length&&G.measures.splice(p,1);const A=Math.max(...g.tracks.map(G=>G.measures.length),0);t(c)>=A&&h(c,Math.max(0,A-1),!0),N()}function sa(p,g){if(!t(d))return;const A=t(d)[t(o)];for(const G of A.tracks)if(p<G.measures.length&&g<G.measures.length){const[U]=G.measures.splice(p,1);G.measures.splice(g,0,U)}t(c)===p?h(c,g,!0):p<t(c)&&g>=t(c)?ka(c,-1):p>t(c)&&g<=t(c)&&ka(c),N()}let pt=H(-1),nt=H("");function K(p,g,A){t(d)&&(t(d)[t(o)].tracks[p].automation[g]=A,N())}function ie(p,g){t(d)&&(t(d)[t(o)].tracks[p].automation.splice(g,1),N())}function Ae(p){h(pt,p,!0),h(nt,"")}function Ge(p){if(!t(d))return;const g=Zs(t(nt));g&&(t(d)[t(o)].tracks[p].automation.push(g),N()),h(pt,-1),h(nt,"")}function Y(){h(pt,-1),h(nt,"")}let oe=H(-1),be=H("");function Me(p,g,A){t(d)&&(t(d)[t(o)].tracks[p].step_automation[g]=A,N())}function Re(p,g){t(d)&&(t(d)[t(o)].tracks[p].step_automation.splice(g,1),N())}function Ee(p){h(oe,p,!0),h(be,"")}function un(p){if(!t(d))return;const g=Js(t(be));g&&(t(d)[t(o)].tracks[p].step_automation.push(g),N()),h(oe,-1),h(be,"")}function zn(){h(oe,-1),h(be,"")}var Nn=_d(),tn=x(Nn),dn=v(x(tn),2);{var he=p=>{var g=nd(),A=De(g),G=v(A,2),U=v(G,2);B("keydown",A,Q=>{Q.key==="Enter"&&$(),Q.key==="Escape"&&ee()}),Zn(A,()=>t(i),Q=>h(i,Q)),B("click",G,$),B("click",U,ee),P(p,g)},ln=p=>{var g=La(),A=De(g);{var G=U=>{var Q=ad(),re=De(Q),ue=x(re),ke=v(re,2),Ie=v(ke,2),Ke=v(Ie,2);{var Kn=gn=>{var yn=td(),Wn=x(yn);ae((sn,ht)=>Pe(Wn,`${sn??""} / ${ht??""}s`),[()=>t(q).beat.toFixed(1),()=>t(q).secs.toFixed(1)]),P(gn,yn)};J(Ke,gn=>{t(q)&&gn(Kn)})}ae(()=>Pe(ue,t(f))),B("click",ke,te),B("click",Ie,V),P(U,Q)};J(A,U=>{t(f)&&U(G)})}P(p,g)};J(dn,p=>{t(s)?p(he):p(ln,!1)})}var An=v(tn,2);{var an=p=>{var g=sd(),A=x(g);ae(()=>Pe(A,t(r))),P(p,g)};J(An,p=>{t(r)&&p(an)})}var Ce=v(An,2);{var fe=p=>{var g=pd(),A=De(g),G=x(A);Qa(G,{get items(){return t(_)},get selectedIndex(){return t(o)},get activeIndex(){return t(F)},get activeProgress(){return t(C)},onselect:re=>{h(o,re,!0)},onmove:aa,onadd:Ut});var U=v(A,2);{var Q=re=>{var ue=md(),ke=x(ue),Ie=x(ke);let Ke;var Kn=v(Ie,2),gn=v(Kn,2);let yn;var Wn=x(gn);Qa(Wn,{get items(){return t(k)},get selectedIndex(){return t(c)},get activeIndex(){return t(I)},get activeProgress(){return t(S)},onselect:bn=>{t(l)||h(c,bn,!0)},onmove:(bn,Yn)=>{t(l)||sa(bn,Yn)},onadd:()=>{t(l)||Qt()},ondelete:bn=>{t(l)||qt(bn)}});var sn=v(ke,2);{var ht=bn=>{var Yn=rd(),In=x(Yn);M0(In,{get groupSettings(){return t(m).group_settings},get toneSettings(){return t(m).tone_settings},get partSettings(){return a()},onset:nn,ondelete:kn,onadd:Qe}),P(bn,Yn)},Ct=bn=>{var Yn=fd(),In=x(Yn);Ue(In,17,()=>t(m).tracks,We,(Bn,wn,Le)=>{const at=E(()=>t(wn).designator==="Accent"?null:Ga(t(wn).designator));var Rr=dd(),Lt=x(Rr);let qr,Cr;var Lr=v(x(Lt),2);{var zo=hn=>{const je=E(()=>Ga(t(wn).designator));var fn=id(),Tn=De(fn);let St;var Hn=v(Tn,2);let st;ae((xn,vt)=>{St=ve(Tn,1,"ms-btn mute svelte-1c399gj",null,St,xn),st=ve(Hn,1,"ms-btn solo svelte-1c399gj",null,st,vt)},[()=>({active:jn.mutedPatternLabels.has(t(je))}),()=>({active:jn.soloPatternLabels.has(t(je))})]),B("click",Tn,xn=>{xn.stopPropagation(),jn.toggleMutePatternLabel(t(je))}),Z("mouseenter",Tn,()=>le.set("mute-button")),B("click",Hn,xn=>{xn.stopPropagation(),jn.toggleSoloPatternLabel(t(je))}),Z("mouseenter",Hn,()=>le.set("solo-button")),P(hn,fn)};J(Lr,hn=>{t(wn).designator!=="Accent"&&hn(zo)})}var No=v(Lr,2);{let hn=E(()=>b());$0(No,{get track(){return t(wn)},get measureIndex(){return t(c)},get playingBeat(){return t(hn)},onchange:(je,fn,Tn,St)=>ne(Le,je,fn,Tn,St),ondeletetrack:()=>pe(Le),ondeletemeasure:je=>Ve(Le,je),ondeleteitem:(je,fn)=>qe(Le,je,fn),ondeletedivision:(je,fn,Tn)=>Te(Le,je,fn,Tn),oninsertcommand:(je,fn,Tn)=>xe(Le,je,fn,Tn),onreorderitem:(je,fn,Tn)=>Fe(Le,je,fn,Tn),onrename:je=>ge(Le,je),onedit:(je,fn,Tn,St)=>on(Le,je,fn,Tn,St),onsetleadingcommand:(je,fn)=>Pn(Le,je,fn),ondeleteleadingcommand:je=>Kt(Le,je),onaddleadingcommand:je=>Wt(Le,je),get inheritedSettings(){return t(qn)},onaddautomation:()=>Ae(Le),onaddstepautomation:()=>Ee(Le)})}var Mr=v(Lt,2);{var Io=hn=>{var je=ld(),fn=x(je);Ue(fn,17,()=>t(wn).automation,We,(Hn,st,xn)=>{Ys(Hn,{get auto(){return t(st)},onchange:vt=>K(Le,xn,vt),ondelete:()=>ie(Le,xn)})});var Tn=v(fn,2);{var St=Hn=>{var st=od(),xn=v(x(st),2),vt=v(xn,2),Cs=v(vt,2);B("keydown",xn,Mt=>{Mt.key==="Enter"&&Ge(Le),Mt.key==="Escape"&&Y()}),Zn(xn,()=>t(nt),Mt=>h(nt,Mt)),B("click",vt,()=>Ge(Le)),B("click",Cs,Y),P(Hn,st)};J(Tn,Hn=>{t(pt)===Le&&Hn(St)})}P(hn,je)};J(Mr,hn=>{(t(wn).automation.length>0||t(pt)===Le)&&hn(Io)})}var jo=v(Mr,2);{var Bo=hn=>{var je=ud(),fn=x(je);Ue(fn,17,()=>t(wn).step_automation,We,(Hn,st,xn)=>{$s(Hn,{get auto(){return t(st)},onchange:vt=>Me(Le,xn,vt),ondelete:()=>Re(Le,xn)})});var Tn=v(fn,2);{var St=Hn=>{var st=cd(),xn=v(x(st),2),vt=v(xn,2),Cs=v(vt,2);B("keydown",xn,Mt=>{Mt.key==="Enter"&&un(Le),Mt.key==="Escape"&&zn()}),Zn(xn,()=>t(be),Mt=>h(be,Mt)),B("click",vt,()=>un(Le)),B("click",Cs,zn),P(Hn,st)};J(Tn,Hn=>{t(oe)===Le&&Hn(St)})}P(hn,je)};J(jo,hn=>{(t(wn).step_automation.length>0||t(oe)===Le)&&hn(Bo)})}ae(hn=>{qr=ve(Lt,1,"track-wrapper svelte-1c399gj",null,qr,{"drag-over-track":t(j)===Le&&t(z)!==Le,"dragging-track":t(z)===Le}),Cr=$e(Lt,"",Cr,hn)},[()=>({opacity:t(at)!=null&&!jn.isPatternLabelAudible(t(at))?.35:1})]),Z("dragstart",Lt,hn=>O(hn,Le)),Z("dragover",Lt,hn=>W(hn,Le)),Z("dragleave",Lt,T),Z("drop",Lt,hn=>M(hn,Le)),Z("dragend",Lt,L),P(Bn,Rr)});var tt=v(In,2);B("click",tt,ce),Z("mouseenter",tt,()=>le.set("add-track")),P(bn,Yn)};J(sn,bn=>{t(l)?bn(ht):bn(Ct,!1)})}ae(()=>{Ke=ve(Ie,1,"group-gear-btn svelte-1c399gj",null,Ke,{glow:t(Xn),active:t(l)}),yn=ve(gn,1,"seq-bar-slot svelte-1c399gj",null,yn,{disabled:t(l)})}),B("click",Ie,()=>{h(l,!t(l))}),Z("mouseenter",Ie,()=>le.set("group-settings-gear")),B("click",Kn,()=>se(t(o))),Z("mouseenter",gn,()=>le.set("pattern-measure-bar")),P(re,ue)};J(U,re=>{t(m)&&re(Q)})}Z("mouseenter",A,()=>le.set("pattern-group-bar")),P(p,g)},rn=p=>{var g=hd();P(p,g)},Cn=p=>{var g=vd();P(p,g)};J(Ce,p=>{t(d)?p(fe):t(f)&&!t(r)?p(rn,1):t(f)||p(Cn,2)})}var Ne=v(Ce,2),Gn=x(Ne);ao(Gn,()=>ed),Z("mouseenter",tn,()=>le.set("pattern-header")),P(n,Nn),we()}Ye(["keydown","click"]);var bd=D('<pre class="error svelte-etlaox"> </pre>'),kd=D('<input class="rename-input svelte-etlaox"/> <button class="ctrl-btn ok svelte-etlaox">ok</button> <button class="ctrl-btn cancel svelte-etlaox">esc</button>',1),yd=D('<span class="song-name svelte-etlaox"> </span> <button class="ctrl-btn svelte-etlaox" title="Rename song">&#9998;</button> <button class="ctrl-btn svelte-etlaox" title="Duplicate song">&#10697;</button>',1),wd=D('<div class="song-controls svelte-etlaox"><!></div>'),xd=D('<div class="parts-bar svelte-etlaox"><!> <button class="ctrl-btn repeat-btn svelte-etlaox" title="Repeat selected part">&#8634;</button></div>'),Sd=D('<p class="placeholder svelte-etlaox">Loading...</p>'),Pd=D('<p class="placeholder svelte-etlaox">Select a song to arrange.</p>'),Ad=D('<div class="song-mode svelte-etlaox"><div class="left-column svelte-etlaox"><div class="song-sidebar svelte-etlaox"><!></div> <div class="pattern-sidebar svelte-etlaox"><!></div></div> <div class="zone-1 svelte-etlaox"><!> <!> <!></div> <div class="zone-2 svelte-etlaox"><!></div> <div class="zone-3 svelte-etlaox"><!></div></div>');function Td(n,e){ye(e,!0);let a=H(_n([])),r=E(()=>t(a).includes(X.selectedSection)?X.selectedSection:""),s=E(()=>X.songAst),i=E(()=>t(s)?t(s).patterns.map(p=>p.label):[]),o=E(()=>t(s)?t(s).patterns.filter(p=>p.label!=="gap").map(p=>p.label):[]),c=H(null),l=H(!1),f=H(""),u=E(()=>X.selectedPartIndex),d=E(()=>t(s)&&t(u)<t(s).score.sequence.length?t(s).score.sequence[t(u)].part_name:null),m=E(()=>t(s)&&t(d)?t(s).parts.find(p=>p.label===t(d))??null:null),y=E(()=>t(s)?t(s).score.sequence.map(p=>({label:p.part_name})):[]),k=E(()=>{if(!t(m))return new Set;const p=new Set;for(const g of t(m).tracks)for(const A of g.clips)A.name!=="gap"&&p.add(A.name);return p});He(()=>{if(t(m)){for(const p of t(m).tracks)for(const g of p.clips)if(g.name!=="gap"){X.selectedPatternLabel=g.name;return}}});let w=E(()=>{if(!t(m))return;const p=new Set;for(const g of t(o))t(k).has(g)||p.add(g);return p.size>0?p:void 0}),_=E(()=>Se.playing?Se.position?.part_idx??-1:-1),R=E(()=>{if(!Se.playing||!Se.position||!Se.sourceMap||!t(s))return null;const p=Se.position,A=Se.sourceMap.parts[p.part_idx];if(!A)return null;const G=new Map;for(let U=0;U<p.tracks.length;U++){const Q=p.tracks[U];if(Q.done)continue;const re=A.track_indices[U];if(re==null)continue;const ue=Q.clip_duration_secs>0?Math.min(Q.elapsed_secs/Q.clip_duration_secs,1):0;G.set(re,{clipIdx:Q.clip_idx,progress:ue})}return G.size>0?G:null}),F=E(()=>{if(t(_)<0||!Se.position||!Se.sourceMap)return 0;const p=Se.position,g=Se.sourceMap.timeline,A=g.part_start_secs[p.part_idx],G=g.part_duration_secs[p.part_idx];return G<=0?0:Math.max(0,Math.min((p.song_elapsed_secs-A)/G,1))});function I(p){let g=0;for(const A of p.groups){const G=Math.max(...A.tracks.map(U=>U.measures.length),0);for(let U=0;U<G;U++){const Q=A.tracks.find(re=>U<re.measures.length);Q&&(g+=Q.measures[U].items.filter(re=>"Beat"in re).length)}}return g}function C(p,g){let A=0,G=0;for(const U of p.groups){const Q=Math.max(...U.tracks.map(re=>re.measures.length),0);for(let re=0;re<Q;re++){if(G>=g)return A;const ue=U.tracks.find(ke=>re<ke.measures.length);ue&&(A+=ue.measures[re].items.filter(ke=>"Beat"in ke).length),G++}}return A}let S=E(()=>{const p=Se.position,g=Se.sourceMap;if(!p||!g||!t(s)||!t(m)||p.part_idx!==t(u))return null;const G=g.timeline.part_start_secs[p.part_idx],U=p.song_elapsed_secs-G,Q=g.parts[p.part_idx];if(!Q)return{beat:0,secs:U};for(let re=0;re<p.tracks.length;re++){const ue=p.tracks[re];if(ue.done)continue;const ke=Q.track_indices[re];if(ke==null)continue;const Ie=t(m).tracks[ke]?.clips;if(!Ie)continue;let Ke=0;for(let gn=0;gn<ue.clip_idx&&gn<Ie.length;gn++){const yn=Ie[gn];if(yn.name==="gap")continue;const Wn=t(s).patterns.find(sn=>sn.label===yn.name);Wn&&(Ke+=I(Wn)*yn.times)}const Kn=Ie[ue.clip_idx];if(Kn&&Kn.name!=="gap"){const gn=t(s).patterns.find(yn=>yn.label===Kn.name);if(gn){const yn=I(gn),Wn=ue.clip_duration_secs/Math.max(Kn.times,1),sn=Wn>0?Math.floor(ue.elapsed_secs/Wn):0;Ke+=yn*sn,Ke+=C(gn,ue.measure_idx)+ue.beat_time}}return{beat:Ke,secs:U}}return{beat:0,secs:U}}),b=E(()=>{const p=Ze.effectiveRegion,g=Se.sourceMap?.timeline;return!g||!t(s)||p.end_secs<=0?null:t(s).score.sequence.map((A,G)=>{const U=[],Q=Ze.notchInPart(p.start_secs,g,G);Q!=null&&U.push({position:Q,type:"start"});const re=Ze.notchInPart(p.end_secs,g,G);return re!=null&&U.push({position:re,type:"end"}),U.length>0?U:null})}),q=E(()=>{const p=Ze.effectiveRegion,g=Se.sourceMap?.timeline;if(!g||!t(m)||Ze.isFullSong||p.end_secs<=0)return null;const A=new Map;for(let G=0;G<t(m).tracks.length;G++){const U=t(m).tracks[G].clips,Q=[];for(let re=0;re<U.length;re++){const ue=[],ke=Ze.notchInClip(p.start_secs,g,t(u),G,re);ke!=null&&ue.push({position:ke,type:"start"});const Ie=Ze.notchInClip(p.end_secs,g,t(u),G,re);Ie!=null&&ue.push({position:Ie,type:"end"}),Q.push(ue.length>0?ue:null)}A.set(G,Q)}return A.size>0?A:null});function z(p){const g=Se.sourceMap?.timeline;if(!g)return;const A=Ze.partTimeRange(g,p);A&&Ze.setRegion(A)}function j(p,g,A){const G=Se.sourceMap?.timeline;if(!G)return;const U=G.part_start_secs[A],Q=G.part_duration_secs[A];if(U==null||Q==null)return;const re=U+g*Q,ue=Ze.effectiveRegion;p==="start"?Ze.setRegion({start_secs:Math.min(re,ue.end_secs-.1),end_secs:ue.end_secs}):Ze.setRegion({start_secs:ue.start_secs,end_secs:Math.max(re,ue.start_secs+.1)})}function O(p,g,A,G){const U=Se.sourceMap?.timeline;if(!U)return;const Q=U.part_start_secs[t(u)],re=U.clip_timings?.[t(u)]?.[A]?.[G];if(Q==null||!re)return;const ue=Q+re.offset_secs+g*re.duration_secs,ke=Ze.effectiveRegion;p==="start"?Ze.setRegion({start_secs:Math.min(ue,ke.end_secs-.1),end_secs:ke.end_secs}):Ze.setRegion({start_secs:ke.start_secs,end_secs:Math.max(ue,ke.start_secs+.1)})}He(()=>{W(X.text)}),He(()=>{X.revision,T(t(r))}),He(()=>{t(s)&&X.selectedPartIndex>=t(s).score.sequence.length&&(X.selectedPartIndex=Math.max(0,t(s).score.sequence.length-1))});async function W(p){try{const g=await Uc(p);h(a,[...new Set(g)],!0)}catch{h(a,[],!0)}}async function T(p){if(h(c,null),!p||!t(a).includes(p)){X.songAst=null;return}try{if(X.songAst=await Qc(X.text,p),X.songAst&&X.songAst.patterns.length>0&&(X.songAst.patterns.map(A=>A.label).includes(X.selectedPatternLabel)||(X.selectedPatternLabel=X.songAst.patterns[0].label)),!Se.playing)try{const g=await Xc(X.text,p);Se.playing||(Se.sourceMap=g)}catch{}}catch(g){h(c,g instanceof Error?g.message:String(g),!0),X.songAst=null}}function M(p){p&&(X.selectedSection=p,X.selectedPartIndex=0,jn.clear(),Ze.clearRegion())}async function L(){const p=new Set(t(a));let g=1;for(;p.has(`song_${g}`);)g++;const A=`song_${g}`,G={leading_trivia:[],patterns:[{trivia:[],label:"main",groups:[{trivia:{leading:[],trailing_comment:null},group_settings:[],tone_settings:[],tracks:[]}]}],parts:[{trivia:[],label:"part_1",settings:[{Bpm:120}],automation:[],step_automation:[],tracks:[{trivia:[],clips:[{name:"main",times:1,mix:1,automation:[],step_automation:[]}]}]}],score:{trivia:[],sequence:[{trivia:[],part_name:"part_1"}]},trailing_trivia:[]};try{const U=await Ks(G);X.addSection(A,U),X.selectedSection=A}catch(U){h(c,U instanceof Error?U.message:String(U),!0)}}function V(){t(r)&&(h(f,t(r),!0),h(l,!0))}function te(){if(!t(r)||!t(f).trim()){h(l,!1);return}const p=t(f).trim();if(p===t(r)){h(l,!1);return}X.renameSection(t(r),p),X.selectedSection=p,h(l,!1)}function $(){h(l,!1)}function ee(){if(!t(r))return;const p=X.getSectionContent(t(r));if(p===null)return;const g=new Set(t(a));let A=`${t(r)}_copy`,G=2;for(;g.has(A);)A=`${t(r)}_copy_${G}`,G++;X.addSection(A,p),X.selectedSection=A}async function N(){if(!(!t(r)||!t(s))){h(c,null);try{const p=await Ks(t(s));X.replaceSectionContent(t(r),p)}catch(p){h(c,p instanceof Error?p.message:String(p),!0)}}}function ne(p){if(!t(s)||p>=t(s).score.sequence.length)return null;const g=t(s).score.sequence[p].part_name;return t(s).parts.find(A=>A.label===g)??null}function ce(p,g){if(!t(s))return;const A=t(s).score.sequence,[G]=A.splice(p,1);A.splice(g,0,G),t(u)===p?X.selectedPartIndex=g:p<t(u)&&g>=t(u)?X.selectedPartIndex--:p>t(u)&&g<=t(u)&&X.selectedPartIndex++,N()}function ge(){if(!t(s))return;const p=new Set(t(s).parts.map(G=>G.label));let g=1;for(;p.has(`part_${g}`);)g++;const A=`part_${g}`;t(s).parts.push({trivia:[],label:A,settings:[],automation:[],step_automation:[],tracks:[{trivia:[],clips:[{name:"new",times:1,mix:1,automation:[],step_automation:[]}]}]}),t(s).score.sequence.push({trivia:[],part_name:A}),X.selectedPartIndex=t(s).score.sequence.length-1,N()}function se(){if(!t(s)||!t(m))return;const p=En(t(m)),g=new Set(t(s).parts.map(U=>U.label));let A=`${p.label}_copy`,G=2;for(;g.has(A);)A=`${p.label}_copy_${G}`,G++;p.trivia=[],p.label=A,t(s).parts.push(p),t(s).score.sequence.splice(t(u)+1,0,{trivia:[],part_name:A}),X.selectedPartIndex=t(u)+1,N()}function pe(){t(s)&&(t(s).score.sequence.splice(t(u),1),N())}function Ve(p){t(s)&&(t(s).score.sequence.splice(p,1),N())}function qe(){!t(s)||!t(d)||(t(s).score.sequence.splice(t(u)+1,0,{trivia:[],part_name:t(d)}),X.selectedPartIndex=t(u)+1,N())}async function Te(p){if(!(!t(s)||!t(d)))try{X.songAst=await Jc(t(s),t(d),p),await N()}catch(g){h(c,g instanceof Error?g.message:String(g),!0)}}function xe(p,g,A){const G=ne(t(u));!t(s)||!G||(G.tracks[p].clips[g]=A,N())}function Fe(p,g){const A=ne(t(u));!t(s)||!A||(A.tracks[p].clips.splice(g,1),A.tracks[p].clips.length===0&&A.tracks.splice(p,1),A.tracks.length===0&&t(s).score.sequence.splice(t(u),1),N())}function Qe(p){const g=ne(t(u));!t(s)||!g||(g.tracks[p].clips.push({name:"new",times:1,mix:1,automation:[],step_automation:[]}),N())}function nn(p){const g=ne(t(u));!t(s)||!g||(g.tracks.splice(p,1),g.tracks.length===0&&t(s).score.sequence.splice(t(u),1),N())}function kn(){const p=ne(t(u));!t(s)||!p||(p.tracks.push({trivia:[],clips:[{name:"new",times:1,mix:1,automation:[],step_automation:[]}]}),N())}function Xn(p,g,A,G){const U=ne(t(u));if(!t(s)||!U)return;const[Q]=U.tracks[p].clips.splice(g,1);let re=G;p===A&&g<G&&(re=Math.max(0,G-1)),re=Math.min(re,U.tracks[A].clips.length),U.tracks[A].clips.splice(re,0,Q),N()}function qn(p,g){const A=ne(t(u));if(!t(s)||!A)return;const[G]=A.tracks.splice(p,1);A.tracks.splice(g,0,G),N()}async function on(p){const g=ne(t(u));if(!(!t(s)||!g))try{const A=await Yc(p);g.settings.push(...A),N()}catch(A){h(c,A instanceof Error?A.message:String(A),!0)}}function Pn(p){const g=ne(t(u));!t(s)||!g||(g.settings.splice(p,1),N())}function Kt(p,g){const A=ne(t(u));if(!t(s)||!A)return;const G=A.settings.findIndex(Q=>Ua(Q)===p),U=eu(p,g);G>=0?A.settings[G]=U:A.settings.push(U),N()}function Wt(p){const g=ne(t(u));if(!t(s)||!g)return;const A=g.settings.findIndex(G=>Ua(G)===p);A>=0&&(g.settings.splice(A,1),N())}function Ut(p,g){const A=ne(t(u));!t(s)||!A||(A.automation[p]=g,N())}function aa(p){const g=ne(t(u));!t(s)||!g||(g.automation.splice(p,1),N())}function Qt(p){const g=ne(t(u));!t(s)||!g||(g.automation.push(p),N())}function qt(p,g){const A=ne(t(u));!t(s)||!A||(A.step_automation[p]=g,N())}function sa(p){const g=ne(t(u));!t(s)||!g||(g.step_automation.splice(p,1),N())}function pt(p){const g=ne(t(u));!t(s)||!g||(g.step_automation.push(p),N())}function nt(p){X.selectedPatternLabel=p}function K(){if(!t(s))return;const p=new Set(t(s).patterns.map(U=>U.label));let g=1;for(;p.has(`pat_${g}`);)g++;const A=`pat_${g}`,G={trivia:[],label:A,groups:[{trivia:{leading:[],trailing_comment:null},group_settings:[],tone_settings:[],tracks:[]}]};t(s).patterns.push(G),X.selectedPatternLabel=A,N()}let ie=E(()=>t(a).filter(p=>!p.startsWith("groove/")&&!p.startsWith("arp/"))),Ae=E(()=>t(ie).map(p=>({id:p,label:p}))),Ge=E(()=>new Set(t(ie).filter(p=>X.isLibraryOnly(p)))),Y=E(()=>t(o).map(p=>({id:p,label:p})));var oe=Ad(),be=x(oe),Me=x(be),Re=x(Me);Ws(Re,{title:"Songs",get items(){return t(Ae)},get activeId(){return t(r)},get libraryIds(){return t(Ge)},onselect:M,oncreate:L,hint:"song-sidebar"});var Ee=v(Me,2),un=x(Ee);{let p=E(()=>t(r)?K:void 0);Ws(un,{title:"Patterns",get items(){return t(Y)},get activeId(){return X.selectedPatternLabel},get greyedOut(){return t(w)},onselect:g=>{X.selectedPatternLabel=g},get oncreate(){return t(p)},hint:"pattern-sidebar"})}var zn=v(be,2),Nn=x(zn);{var tn=p=>{var g=bd(),A=x(g);ae(()=>Pe(A,t(c))),P(p,g)};J(Nn,p=>{t(c)&&p(tn)})}var dn=v(Nn,2);{var he=p=>{var g=wd(),A=x(g);{var G=Q=>{var re=kd(),ue=De(re),ke=v(ue,2),Ie=v(ke,2);B("keydown",ue,Ke=>{Ke.key==="Enter"&&te(),Ke.key==="Escape"&&$()}),Zn(ue,()=>t(f),Ke=>h(f,Ke)),B("click",ke,te),B("click",Ie,$),P(Q,re)},U=Q=>{var re=yd(),ue=De(re),ke=x(ue),Ie=v(ue,2),Ke=v(Ie,2);ae(()=>Pe(ke,t(r))),B("click",Ie,V),Z("mouseenter",Ie,()=>le.set("song-rename")),B("click",Ke,ee),Z("mouseenter",Ke,()=>le.set("song-duplicate")),P(Q,re)};J(A,Q=>{t(l)?Q(G):Q(U,!1)})}P(p,g)};J(dn,p=>{t(r)&&p(he)})}var ln=v(dn,2);{var An=p=>{var g=xd(),A=x(g);{let U=E(()=>t(b)??void 0);Qa(A,{get items(){return t(y)},get selectedIndex(){return t(u)},get activeIndex(){return t(_)},get activeProgress(){return t(F)},get focusNotches(){return t(U)},onselect:Q=>{X.selectedPartIndex=Q},onmove:ce,onadd:ge,ondelete:Ve,onfocus:z,onfocusdrag:j})}var G=v(A,2);Z("mouseenter",g,()=>le.set("song-parts-bar")),B("click",G,qe),P(p,g)};J(ln,p=>{t(r)&&t(s)&&t(s).score.sequence.length>0&&p(An)})}var an=v(zn,2),Ce=x(an);{var fe=p=>{{let g=E(()=>t(m).tracks.map(Q=>Q.clips)),A=E(()=>t(_)===t(u)?t(R):null),G=E(()=>t(S)?.beat??null),U=E(()=>t(S)?.secs??null);D0(p,{get partName(){return t(d)},get partSeqIdx(){return t(u)},get tracks(){return t(g)},get settings(){return t(m).settings},get automation(){return t(m).automation},get patterns(){return t(i)},get activeTrackClips(){return t(A)},get focusClipNotches(){return t(q)},get playbackBeat(){return t(G)},get playbackSecs(){return t(U)},onchangeclip:xe,ondeleteclip:Fe,onaddclip:Qe,ondeletetrack:nn,onaddtrack:kn,onduplicatepart:se,ondeletepart:pe,onrenamepart:Te,onaddsetting:on,ondeletesetting:Pn,onsetsettingstructured:Kt,ondeletesettingbykey:Wt,oneditpattern:nt,onmoveclip:Xn,onmovetrack:qn,onfocusclipdrag:O,onchangeautomation:Ut,ondeleteautomation:aa,onaddautomation:Qt,get stepAutomation(){return t(m).step_automation},onchangestepautomation:qt,ondeletestepautomation:sa,onaddstepautomation:pt})}},rn=p=>{var g=Sd();P(p,g)},Cn=p=>{var g=Pd();P(p,g)};J(Ce,p=>{t(r)&&t(s)&&t(m)?p(fe):t(r)&&!t(c)?p(rn,1):t(r)||p(Cn,2)})}var Ne=v(an,2),Gn=x(Ne);{let p=E(()=>t(m)?.settings??[]);gd(Gn,{get partSettings(){return t(p)}})}Z("mouseenter",Me,()=>le.set("song-sidebar")),Z("mouseenter",Ee,()=>le.set("pattern-sidebar")),P(n,oe),we()}Ye(["keydown","click"]);const Dd={mod:"#b07cc8",osc:"#5c9ed6",path:"#4db89a",fx:"#d68c4b",vcf:"#5cb86e",amp:"#c8b44e",post:"#7a8ba8"},Rd={mod:"#8a50a8",osc:"#3070b0",path:"#2a8a6a",fx:"#b06830",vcf:"#3a8a48",amp:"#9a8828",post:"#5a6880"};function Gt(n){return n==="light"?Rd:Dd}const qd={mod:"MOD",osc:"OSC",path:"PATH",fx:"FX",vcf:"VCF",amp:"AMP",post:"POST"},nr=["mod","osc","path","fx","vcf","amp","post"];var Cd=D('<span class="arrow svelte-4okew9"></span>'),Ld=D("<!> <button> </button>",1),Md=D('<div class="signal-flow svelte-4okew9"></div>');function Ed(n,e){ye(e,!0);let a=E(()=>Gt(Dn.resolved));function r(i){if(!e.activity)return!0;switch(i){case"mod":return e.activity.lfo||e.activity.pitch_env||e.activity.filter_env;case"osc":return e.activity.oscs.some(Boolean);case"path":return e.activity.paths.some(Boolean);case"fx":return e.activity.shape_filter||e.activity.waveshaper||e.activity.voice_fx;case"vcf":return e.activity.main_filter;case"amp":return!0;case"post":return e.activity.post_filter||e.activity.pan||e.activity.unison}}var s=Md();Ue(s,21,()=>nr,We,(i,o,c)=>{var l=Ld(),f=De(l);{var u=w=>{var _=Cd();_.textContent="→",P(w,_)};J(f,w=>{c>0&&w(u)})}var d=v(f,2);let m,y;var k=x(d);ae(w=>{m=ve(d,1,"block svelte-4okew9",null,m,w),y=$e(d,"",y,{"--block-color":t(a)[t(o)]}),Pe(k,qd[t(o)])},[()=>({selected:e.selected===t(o),inactive:!r(t(o))})]),B("click",d,()=>e.onselect(t(o))),P(i,l)}),Z("mouseenter",s,()=>le.set("signal-flow-diagram")),P(n,s),we()}Ye(["click"]);var Fd=D('<div class="region svelte-get67y"><div class="region-header svelte-get67y"> </div> <div class="region-body svelte-get67y"><!></div></div>');function Sn(n,e){let a=_e(e,"color",3,"#cc9944");var r=Fd();let s;var i=x(r),o=x(i),c=v(i,2),l=x(c);hr(l,()=>e.children),ae(()=>{s=$e(r,"",s,{"--region-color":a()}),Pe(o,e.label)}),P(n,r)}const Od={sine:"M2 8 Q6 0 8 8 Q10 16 14 8 Q18 0 22 8",triangle:"M2 12 L8 4 L14 12 L20 4 L22 8",saw:"M2 12 L10 4 L10 12 L18 4 L18 12 L22 8",pulse:"M2 12 L2 4 L8 4 L8 12 L14 12 L14 4 L20 4 L20 12 L22 12","white-noise":"M2 8 L4 4 L5 11 L7 5 L8 13 L10 3 L11 10 L13 6 L14 12 L16 4 L17 9 L19 5 L20 11 L22 8","pink-noise":"M2 8 L4 6 L6 10 L8 5 L10 11 L12 7 L14 10 L16 6 L18 9 L20 7 L22 8",ramp:"M2 12 L10 4 L10 12 L18 4 L18 12 L22 8","s-h":"M2 10 L5 10 L5 5 L9 5 L9 11 L13 11 L13 6 L17 6 L17 10 L22 10",lowpass:"M2 4 L10 4 Q14 4 16 8 Q18 12 22 14",highpass:"M2 14 Q6 12 8 8 Q10 4 14 4 L22 4",bandpass:"M2 14 Q5 14 8 8 Q10 4 12 4 Q14 4 16 8 Q19 14 22 14",ad:"M2 14 L8 3 L20 14",adsr:"M2 14 L6 3 L10 8 L16 8 L22 14",multitap:"M2 14 L4 4 L6 14 L8 6 L10 14 L12 8 L14 14 L18 14"};var zd=sc('<svg viewBox="0 0 24 16" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path></path></svg>');function Nd(n,e){ye(e,!0);let a=_e(e,"size",3,16),r=_e(e,"color",3,"currentColor"),s=E(()=>Od[e.name]??"");var i=zd(),o=x(i);ae(()=>{en(i,"width",a()*1.5),en(i,"height",a()),en(i,"stroke",r()),en(o,"d",t(s))}),P(n,i),we()}var Id=D('<span class="opt-label svelte-1ed09gu"> </span>'),jd=D("<button><!></button>"),Bd=D('<div><div class="arc-area svelte-1ed09gu"><svg class="pointer-svg svelte-1ed09gu" viewBox="0 0 100 88"><line x1="50" y1="44" stroke-width="2" stroke-linecap="round"></line><circle cx="50" cy="44" r="3"></circle></svg> <!> <span class="selected-label svelte-1ed09gu"> </span></div></div>');function Ma(n,e){ye(e,!0);let a=_e(e,"disabled",3,!1),r=E(()=>e.options.findIndex(F=>F.value===e.value)),s=E(()=>t(r)>=0?e.options[t(r)].label??e.options[t(r)].value:"");function i(F){const I=e.options.length;return I<=1?0:-90+180*F/(I-1)}function o(F){const C=i(F)*Math.PI/180,S=50+38*Math.sin(C),b=44-38*Math.cos(C);return`left: ${S}%; top: ${b}%; transform: translate(-50%, -50%)`}function c(){const I=(t(r)>=0?i(t(r)):0)*Math.PI/180;return{x:50+22*Math.sin(I),y:44-22*Math.cos(I)}}var l=Bd();let f,u;var d=x(l),m=x(d),y=x(m),k=v(y),w=v(m,2);Ue(w,17,()=>e.options,We,(F,I,C)=>{var S=jd();let b;var q=x(S);{var z=O=>{{let W=E(()=>C===t(r)?e.color??"var(--block-color, var(--accent))":"var(--text-muted)");Nd(O,{get name(){return t(I).glyph},size:18,get color(){return t(W)}})}},j=O=>{var W=Id(),T=x(W);ae(()=>Pe(T,t(I).label??t(I).value)),P(O,W)};J(q,O=>{t(I).glyph?O(z):O(j,!1)})}ae(O=>{b=ve(S,1,"option svelte-1ed09gu",null,b,{selected:C===t(r)}),$e(S,O),en(S,"data-tooltip",t(I).label??t(I).value)},[()=>o(C)]),B("click",S,()=>e.onchange(t(I).value)),Z("mouseenter",S,()=>{e.hints?.[t(I).value]&&le.set(e.hints[t(I).value])}),P(F,S)});var _=v(w,2),R=x(_);ae((F,I)=>{f=ve(l,1,"knob svelte-1ed09gu",null,f,{disabled:a()}),u=$e(l,"",u,{"--knob-color":e.color}),en(y,"x2",F),en(y,"y2",I),en(y,"stroke",e.color??"var(--block-color, var(--accent))"),en(k,"fill",e.color??"var(--block-color, var(--accent))"),Pe(R,t(s))},[()=>c().x,()=>c().y]),Z("mouseenter",l,()=>{a()&&e.hints?.[e.value]&&le.set(e.hints[e.value])}),P(n,l),we()}Ye(["click"]);var Hd=D('<input class="edit-input svelte-1yf8t8l" type="text"/>'),Vd=D('<button class="value-display svelte-1yf8t8l"> </button>'),Gd=D('<div><span class="label svelte-1yf8t8l"> </span> <div class="track svelte-1yf8t8l" role="slider"><div class="fill svelte-1yf8t8l"></div> <div class="thumb svelte-1yf8t8l"></div></div> <!></div>');function me(n,e){ye(e,!0);let a=_e(e,"min",3,0),r=_e(e,"max",3,1),s=_e(e,"step",3,.01),i=_e(e,"unit",3,""),o=_e(e,"disabled",3,!1);function c(N){N.focus()}let l=H(!1),f=H(""),u=H(!1),d=H(void 0),m=E(()=>(e.value-a())/(r()-a())*100);function y(N){return s()>=1?String(Math.round(N)):s()>=.1?N.toFixed(1):N.toFixed(2)}function k(N){const ne=Math.min(r(),Math.max(a(),N));return Math.round(ne/s())*s()}function w(N){if(!t(d))return;const ne=t(d).getBoundingClientRect(),ce=1-(N-ne.top)/ne.height,ge=Math.min(1,Math.max(0,ce));e.onchange(k(a()+ge*(r()-a())))}function _(N){h(u,!0),N.currentTarget.setPointerCapture(N.pointerId),w(N.clientY)}function R(N){t(u)&&w(N.clientY)}function F(){h(u,!1)}function I(){h(f,y(e.value),!0),h(l,!0)}function C(){const N=parseFloat(t(f));isNaN(N)||e.onchange(k(N)),h(l,!1)}function S(){h(l,!1)}var b=Gd();let q,z;var j=x(b),O=x(j),W=v(j,2);en(W,"tabindex",0);var T=x(W);let M;var L=v(T,2);let V;jt(W,N=>h(d,N),()=>t(d));var te=v(W,2);{var $=N=>{var ne=Hd();Xa(()=>Zn(ne,()=>t(f),ce=>h(f,ce))),so(ne,ce=>c?.(ce)),Z("blur",ne,C),B("keydown",ne,ce=>{ce.key==="Enter"&&C(),ce.key==="Escape"&&S()}),P(N,ne)},ee=N=>{var ne=Vd(),ce=x(ne);ae(ge=>Pe(ce,`${ge??""}${i()??""}`),[()=>y(e.value)]),B("dblclick",ne,I),P(N,ne)};J(te,N=>{t(l)?N($):N(ee,!1)})}ae(()=>{q=ve(b,1,"vert svelte-1yf8t8l",null,q,{disabled:o()}),z=$e(b,"",z,{"--vert-color":e.color}),Pe(O,e.label),en(W,"aria-valuenow",e.value),en(W,"aria-valuemin",a()),en(W,"aria-valuemax",r()),en(W,"aria-label",e.label),M=$e(T,"",M,{height:`${t(m)??""}%`}),V=$e(L,"",V,{bottom:`${t(m)??""}%`})}),Z("mouseenter",b,()=>{e.hint&&le.set(e.hint)}),B("pointerdown",W,_),B("pointermove",W,R),B("pointerup",W,F),P(n,b),we()}Ye(["pointerdown","pointermove","pointerup","keydown","dblclick"]);var Kd=D('<div class="vert-group svelte-j7rpns"><!></div>');function pn(n,e){var a=Kd(),r=x(a);hr(r,()=>e.children),P(n,a)}var Wd=D("<button> </button>"),Ud=D('<div><div class="track svelte-zq2sms"><div class="indicator svelte-zq2sms"></div></div> <div class="labels svelte-zq2sms"></div></div>');function Ea(n,e){ye(e,!0);let a=_e(e,"disabled",3,!1),r=E(()=>e.options.indexOf(e.value)),s=E(()=>e.options.length>1?t(r)/(e.options.length-1)*100:0);var i=Ud();let o;var c=x(i),l=x(c);let f;var u=v(c,2);Ue(u,21,()=>e.options,We,(d,m,y)=>{var k=Wd();let w;var _=x(k);ae(()=>{w=ve(k,1,"stop svelte-zq2sms",null,w,{active:y===t(r)}),Pe(_,t(m))}),B("click",k,()=>e.onchange(t(m))),Z("mouseenter",k,()=>{e.hints?.[t(m)]&&le.set(e.hints[t(m)])}),P(d,k)}),ae(()=>{o=ve(i,1,"synth-switch svelte-zq2sms",null,o,{disabled:a()}),f=$e(l,"",f,{left:`${t(s)??""}%`})}),Z("mouseenter",i,()=>{e.hint&&le.set(e.hint)}),P(n,i),we()}Ye(["click"]);var Qd=D('<span class="signal-ref svelte-126zrlx"> </span>');function cn(n,e){ye(e,!0);let a=E(()=>Gt(Dn.resolved)),r=E(()=>t(a)[e.blockId]);var s=Qd();let i;var o=x(s);ae(()=>{i=$e(s,"",i,{background:`color-mix(in srgb, ${t(r)??""} 12.5%, transparent)`,color:t(r),"border-color":`color-mix(in srgb, ${t(r)??""} 25%, transparent)`}),Pe(o,e.label)}),Z("mouseenter",s,()=>{e.hint&&le.set(e.hint)}),P(n,s),we()}function Xt(n){return n?"AD"in n?"AD":"ADSR"in n?"ADSR":"MultiTap"in n?"MultiTap":null:null}function xa(n){return n?"Lowpass"in n?"Lowpass":"Highpass"in n?"Highpass":"Bandpass"in n?"Bandpass":null:null}function Sa(n){return"Lowpass"in n?n.Lowpass[0]:"Highpass"in n?n.Highpass[0]:n.Bandpass[0]}function Pa(n){return"Lowpass"in n?n.Lowpass[1]:"Highpass"in n?n.Highpass[1]:n.Bandpass[1]}function lt(n,e,a){return{[n]:[e,a]}}function So(n){return n==="Fixed"?"Fixed":"Pitched"in n?"Pitched":"Swept"}function it(n){switch(n){case"AD":return{AD:{attack_ms:1,decay_ms:200,start:0,amt:1,exp:!1}};case"ADSR":return{ADSR:{attack_ms:5,decay_ms:200,sustain:.8,release_ms:50}};case"MultiTap":return{MultiTap:{num_taps:3,tap_interval:50,tap_amp:.8,tail_decay:200}}}}function ps(){return{shape:"Sine",freq:{Pitched:{semi:0,fine:0}},fixed_hz:440,pw:.5,pitch_lfo_amt:0,pitch_lfo2_amt:0,pitch_env_amt:0,pw_lfo_amt:0,pw_lfo2_amt:0,phaz_diff:0,phaz_diff_lfo_amt:0,phaz_diff_lfo2_amt:0}}function hs(){return{mix:[1,0,0,0,0,0],pre_filter:null,env:null,post_filter:null}}var Zd=D("<!> <!> <!> <!>",1),Jd=D("<!> <!> <!> <!>",1),Xd=D("<!> <!> <!> <!>",1),Yd=D('<div class="env-panel svelte-ps0so5"><div class="env-toggles svelte-ps0so5"><!> <!></div> <!> <div><!></div></div>');function vs(n,e){ye(e,!0);let a=_e(e,"label",3,"Env"),r=_e(e,"value",3,null);const s=[{value:"AD",glyph:"ad",label:"AD"},{value:"ADSR",glyph:"adsr",label:"ADSR"},{value:"MultiTap",glyph:"multitap",label:"Multi"}];let i=H(null),o=H("AD");He(()=>{const q=Xt(r());q&&h(o,q,!0)});let c=E(()=>r()??it(t(o))),l=E(()=>Xt(t(c)));function f(q){h(o,q,!0),e.onchange(it(q))}function u(q){const z=r()??it(t(o)),j=Xt(z),O=z[j];e.onchange({[j]:{...O,...q}})}var d=Yd(),m=x(d),y=x(m);{let q=E(()=>r()!==null);dt(y,{get label(){return a()},get active(){return t(q)},onchange:z=>{z?e.onchange(t(i)??it(t(o))):(h(i,En(r()),!0),e.onchange(null))},get color(){return e.color},hint:"toggle-env"})}var k=v(y,2);{var w=q=>{{let z=E(()=>r()===null);dt(q,{label:"exp",get active(){return t(c).AD.exp},onchange:j=>u({exp:j}),get color(){return e.color},hint:"toggle-env-exp",get disabled(){return t(z)}})}};J(k,q=>{"AD"in t(c)&&q(w)})}var _=v(m,2);{let q=E(()=>r()===null);Ma(_,{get options(){return s},get value(){return t(l)},onchange:f,get color(){return e.color},hints:{AD:"env-type-ad",ADSR:"env-type-adsr",MultiTap:"env-type-multi"},get disabled(){return t(q)}})}var R=v(_,2);let F;var I=x(R);{var C=q=>{pn(q,{children:(z,j)=>{var O=Zd(),W=De(O);me(W,{label:"atk",get value(){return t(c).AD.attack_ms},min:0,max:500,step:.1,onchange:V=>u({attack_ms:V}),get color(){return e.color},hint:"env-ad-atk"});var T=v(W,2);me(T,{label:"dec",get value(){return t(c).AD.decay_ms},min:0,max:5e3,step:1,onchange:V=>u({decay_ms:V}),get color(){return e.color},hint:"env-ad-dec"});var M=v(T,2);me(M,{label:"start",get value(){return t(c).AD.start},min:-1,max:1,step:.01,onchange:V=>u({start:V}),get color(){return e.color},hint:"env-ad-start"});var L=v(M,2);me(L,{label:"amt",get value(){return t(c).AD.amt},min:-1,max:1,step:.01,onchange:V=>u({amt:V}),get color(){return e.color},hint:"env-ad-amt"}),P(z,O)}})},S=q=>{pn(q,{children:(z,j)=>{var O=Jd(),W=De(O);me(W,{label:"atk",get value(){return t(c).ADSR.attack_ms},min:0,max:2e3,step:.1,onchange:V=>u({attack_ms:V}),get color(){return e.color},hint:"env-adsr-atk"});var T=v(W,2);me(T,{label:"dec",get value(){return t(c).ADSR.decay_ms},min:0,max:5e3,step:1,onchange:V=>u({decay_ms:V}),get color(){return e.color},hint:"env-adsr-dec"});var M=v(T,2);me(M,{label:"sus",get value(){return t(c).ADSR.sustain},min:0,max:1,step:.01,onchange:V=>u({sustain:V}),get color(){return e.color},hint:"env-adsr-sus"});var L=v(M,2);me(L,{label:"rel",get value(){return t(c).ADSR.release_ms},min:0,max:5e3,step:1,onchange:V=>u({release_ms:V}),get color(){return e.color},hint:"env-adsr-rel"}),P(z,O)}})},b=q=>{pn(q,{children:(z,j)=>{var O=Xd(),W=De(O);me(W,{label:"taps",get value(){return t(c).MultiTap.num_taps},min:1,max:16,step:1,onchange:V=>u({num_taps:V}),get color(){return e.color},hint:"env-mt-taps"});var T=v(W,2);me(T,{label:"intvl",get value(){return t(c).MultiTap.tap_interval},min:1,max:500,step:1,onchange:V=>u({tap_interval:V}),get color(){return e.color},hint:"env-mt-intvl"});var M=v(T,2);me(M,{label:"amp",get value(){return t(c).MultiTap.tap_amp},min:0,max:1,step:.01,onchange:V=>u({tap_amp:V}),get color(){return e.color},hint:"env-mt-amp"});var L=v(M,2);me(L,{label:"tail",get value(){return t(c).MultiTap.tail_decay},min:0,max:5e3,step:1,onchange:V=>u({tail_decay:V}),get color(){return e.color},hint:"env-mt-tail"}),P(z,O)}})};J(I,q=>{"AD"in t(c)?q(C):"ADSR"in t(c)?q(S,1):"MultiTap"in t(c)&&q(b,2)})}ae(()=>F=ve(R,1,"env-controls svelte-ps0so5",null,F,{inactive:r()===null})),P(n,d),we()}var $d=D('<div class="lfo-row svelte-8x2ovf"><div class="lfo-left svelte-8x2ovf"><!> <!></div> <!></div>'),ef=D('<!> <div class="vert-with-ref"><!> <!></div> <div class="vert-with-ref"><!> <!></div>',1),nf=D('<div class="lfo-row svelte-8x2ovf"><div class="lfo-left svelte-8x2ovf"><!> <!></div> <!></div>'),tf=D('<div class="block-col svelte-8x2ovf"><div class="block-row svelte-8x2ovf"><!> <!> <!></div> <div class="block-row svelte-8x2ovf"><!> <!></div></div>');function af(n,e){ye(e,!0);const a=[{value:"Ramp",glyph:"ramp",label:"Ramp"},{value:"Pulse",glyph:"pulse",label:"Pls"},{value:"Sine",glyph:"sine",label:"Sin"},{value:"Triangle",glyph:"triangle",label:"Tri"},{value:"S&H",glyph:"s-h",label:"S&H"}],r=["Free","Trig","Rand"];let s=E(()=>Gt(Dn.resolved).mod);var i=tf(),o=x(i),c=x(o);Sn(c,{label:"Osc Start",get color(){return t(s)},children:(y,k)=>{dt(y,{get active(){return e.config.osc_start},onchange:w=>e.updateConfig({osc_start:w}),get color(){return t(s)},hint:"toggle-osc-start"})},$$slots:{default:!0}});var l=v(c,2);Sn(l,{label:"LFO-1",get color(){return t(s)},children:(y,k)=>{var w=$d(),_=x(w),R=x(_);{let C=E(()=>e.config.lfo.wave??"S&H");Ma(R,{get options(){return a},get value(){return t(C)},onchange:S=>{const b=S==="S&H"?null:S;e.updateConfig({lfo:{...e.config.lfo,wave:b}})},get color(){return t(s)},hints:{Ramp:"lfo-wave-ramp",Pulse:"lfo-wave-pulse",Sine:"lfo-wave-sine",Triangle:"lfo-wave-tri","S&H":"lfo-wave-sh"}})}var F=v(R,2);Ea(F,{get options(){return r},get value(){return e.config.lfo.mode},onchange:C=>e.updateConfig({lfo:{...e.config.lfo,mode:C}}),hints:{Free:"lfo-mode-free",Trig:"lfo-mode-trig",Rand:"lfo-mode-rand"}});var I=v(_,2);pn(I,{children:(C,S)=>{me(C,{label:"rate",get value(){return e.config.lfo.rate},min:0,max:15,step:1,onchange:b=>e.updateConfig({lfo:{...e.config.lfo,rate:b}}),get color(){return t(s)},hint:"lfo-rate"})}}),P(y,w)},$$slots:{default:!0}});var f=v(l,2);Sn(f,{label:"LFO-2",get color(){return t(s)},children:(y,k)=>{var w=nf(),_=x(w),R=x(_);{let C=E(()=>e.config.lfo2.wave??"S&H");Ma(R,{get options(){return a},get value(){return t(C)},onchange:S=>{const b=S==="S&H"?null:S;e.updateConfig({lfo2:{...e.config.lfo2,wave:b}})},get color(){return t(s)},hints:{Ramp:"lfo-wave-ramp",Pulse:"lfo-wave-pulse",Sine:"lfo-wave-sine",Triangle:"lfo-wave-tri","S&H":"lfo-wave-sh"}})}var F=v(R,2);Ea(F,{get options(){return r},get value(){return e.config.lfo2.mode},onchange:C=>e.updateConfig({lfo2:{...e.config.lfo2,mode:C}}),hints:{Free:"lfo-mode-free",Trig:"lfo-mode-trig",Rand:"lfo-mode-rand"}});var I=v(_,2);pn(I,{children:(C,S)=>{var b=ef(),q=De(b);me(q,{label:"rate",get value(){return e.config.lfo2.rate},min:0,max:15,step:1,onchange:L=>e.updateConfig({lfo2:{...e.config.lfo2,rate:L}}),get color(){return t(s)},hint:"lfo2-rate"});var z=v(q,2),j=x(z);me(j,{label:"rate",get value(){return e.config.lfo1_to_lfo2_rate},min:0,max:1,step:.01,onchange:L=>e.updateConfig({lfo1_to_lfo2_rate:L}),get color(){return t(s)},hint:"lfo1-to-lfo2-rate"});var O=v(j,2);cn(O,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var W=v(z,2),T=x(W);me(T,{label:"depth",get value(){return e.config.lfo1_to_lfo2_depth},min:0,max:1,step:.01,onchange:L=>e.updateConfig({lfo1_to_lfo2_depth:L}),get color(){return t(s)},hint:"lfo1-to-lfo2-depth"});var M=v(T,2);cn(M,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"}),P(C,b)}}),P(y,w)},$$slots:{default:!0}});var u=v(o,2),d=x(u);Sn(d,{label:"ENV-1 (Pitch)",get color(){return t(s)},children:(y,k)=>{vs(y,{label:"p.env",get value(){return e.config.pitch_env},onchange:w=>e.updateConfig({pitch_env:w}),get color(){return t(s)}})},$$slots:{default:!0}});var m=v(d,2);Sn(m,{label:"ENV-2 (Filter)",get color(){return t(s)},children:(y,k)=>{vs(y,{label:"f.env",get value(){return e.config.filter_env},onchange:w=>e.updateConfig({filter_env:w}),get color(){return t(s)}})},$$slots:{default:!0}}),Z("mouseenter",i,()=>le.set("mod-block")),P(n,i),we()}var sf=D("<!> <!>",1),rf=D("<!> <!> <!> <!>",1),of=D('<!> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div>',1),lf=D('<!> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div>',1),cf=D('<div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div>',1),uf=D('<div class="osc-panel svelte-dp5a6t"><div class="shape-col svelte-dp5a6t"><!> <!></div> <div class="freq-group svelte-dp5a6t"><!></div> <div><!></div> <!> <!></div>');function df(n,e){ye(e,!0);const a=[{value:"Sine",glyph:"sine",label:"Sin"},{value:"Triangle",glyph:"triangle",label:"Tri"},{value:"Saw",glyph:"saw",label:"Saw"},{value:"Pulse",glyph:"pulse",label:"Pls"},{value:"WhiteNoise",glyph:"white-noise",label:"Wht"},{value:"PinkNoise",glyph:"pink-noise",label:"Pnk"}],r=["Pitched","Fixed","Swept"];function s(S){e.onchange({...e.value,...S})}function i(S){s({shape:S})}function o(S){let b;switch(S){case"Pitched":b={Pitched:{semi:0,fine:0}};break;case"Fixed":b="Fixed";break;case"Swept":b={Swept:{atk:.1,dec:200,base:48,amt:50}};break;default:return}e.onchange({...e.value,freq:b})}var c=uf(),l=x(c),f=x(l);Ma(f,{get options(){return a},get value(){return e.value.shape},onchange:i,get color(){return e.color},hints:{Sine:"osc-shape-sine",Triangle:"osc-shape-tri",Saw:"osc-shape-saw",Pulse:"osc-shape-pulse",WhiteNoise:"osc-shape-white",PinkNoise:"osc-shape-pink"}});var u=v(f,2);{let S=E(()=>So(e.value.freq));Ea(u,{get options(){return r},get value(){return t(S)},onchange:o,hints:{Pitched:"osc-freq-pitched",Fixed:"osc-freq-fixed",Swept:"osc-freq-swept"}})}var d=v(l,2),m=x(d);{var y=S=>{pn(S,{children:(b,q)=>{var z=sf(),j=De(z);me(j,{label:"semi",get value(){return e.value.freq.Pitched.semi},min:-48,max:48,step:1,onchange:W=>s({freq:{Pitched:{semi:W,fine:e.value.freq.Pitched.fine}}}),get color(){return e.color},hint:"osc-semi"});var O=v(j,2);me(O,{label:"fine",get value(){return e.value.freq.Pitched.fine},min:-100,max:100,step:1,onchange:W=>s({freq:{Pitched:{semi:e.value.freq.Pitched.semi,fine:W}}}),get color(){return e.color},hint:"osc-fine"}),P(b,z)}})},k=S=>{pn(S,{children:(b,q)=>{me(b,{label:"hz",get value(){return e.value.fixed_hz},min:20,max:2e4,step:1,onchange:z=>s({fixed_hz:z}),get color(){return e.color},hint:"osc-hz"})}})},w=S=>{const b=E(()=>e.value.freq.Swept);pn(S,{children:(q,z)=>{var j=rf(),O=De(j);me(O,{label:"atk",get value(){return t(b).atk},min:0,max:100,step:.01,onchange:L=>s({freq:{Swept:{...t(b),atk:L}}}),get color(){return e.color},hint:"osc-swept-atk"});var W=v(O,2);me(W,{label:"dec",get value(){return t(b).dec},min:0,max:5e3,step:1,onchange:L=>s({freq:{Swept:{...t(b),dec:L}}}),get color(){return e.color},hint:"osc-swept-dec"});var T=v(W,2);me(T,{label:"base",get value(){return t(b).base},min:0,max:135,step:.1,onchange:L=>s({freq:{Swept:{...t(b),base:L}}}),get color(){return e.color},hint:"osc-swept-base"});var M=v(T,2);me(M,{label:"amt",get value(){return t(b).amt},min:-135,max:135,step:.1,onchange:L=>s({freq:{Swept:{...t(b),amt:L}}}),get color(){return e.color},hint:"osc-swept-amt"}),P(q,j)}})};J(m,S=>{typeof e.value.freq=="object"&&"Pitched"in e.value.freq?S(y):e.value.freq==="Fixed"?S(k,1):typeof e.value.freq=="object"&&"Swept"in e.value.freq&&S(w,2)})}var _=v(d,2);let R;var F=x(_);pn(F,{children:(S,b)=>{var q=of(),z=De(q);me(z,{label:"pw",get value(){return e.value.pw},min:0,max:1,step:.01,onchange:V=>s({pw:V}),get color(){return e.color},hint:"osc-pw"});var j=v(z,2),O=x(j);me(O,{label:"pw lfo",get value(){return e.value.pw_lfo_amt},min:0,max:1,step:.01,onchange:V=>s({pw_lfo_amt:V}),get color(){return e.color},hint:"osc-pw-lfo"});var W=v(O,2);cn(W,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var T=v(j,2),M=x(T);me(M,{label:"pw lfo2",get value(){return e.value.pw_lfo2_amt},min:0,max:1,step:.01,onchange:V=>s({pw_lfo2_amt:V}),get color(){return e.color},hint:"osc-pw-lfo2"});var L=v(M,2);cn(L,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),P(S,q)}});var I=v(_,2);pn(I,{children:(S,b)=>{var q=lf(),z=De(q);me(z,{label:"pdif",get value(){return e.value.phaz_diff},min:0,max:1,step:.01,onchange:V=>s({phaz_diff:V}),get color(){return e.color},hint:"osc-pdif"});var j=v(z,2),O=x(j);me(O,{label:"pd lfo",get value(){return e.value.phaz_diff_lfo_amt},min:0,max:1,step:.01,onchange:V=>s({phaz_diff_lfo_amt:V}),get color(){return e.color},hint:"osc-pd-lfo"});var W=v(O,2);cn(W,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var T=v(j,2),M=x(T);me(M,{label:"pd lf2",get value(){return e.value.phaz_diff_lfo2_amt},min:0,max:1,step:.01,onchange:V=>s({phaz_diff_lfo2_amt:V}),get color(){return e.color},hint:"osc-pd-lfo2"});var L=v(M,2);cn(L,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),P(S,q)}});var C=v(I,2);pn(C,{children:(S,b)=>{var q=cf(),z=De(q),j=x(z);me(j,{label:"p.lfo",get value(){return e.value.pitch_lfo_amt},min:0,max:48,step:.1,onchange:$=>s({pitch_lfo_amt:$}),get color(){return e.color},hint:"osc-pitch-lfo"});var O=v(j,2);cn(O,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var W=v(z,2),T=x(W);me(T,{label:"p.lfo2",get value(){return e.value.pitch_lfo2_amt},min:0,max:48,step:.1,onchange:$=>s({pitch_lfo2_amt:$}),get color(){return e.color},hint:"osc-pitch-lfo2"});var M=v(T,2);cn(M,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"});var L=v(W,2),V=x(L);me(V,{label:"p.env",get value(){return e.value.pitch_env_amt},min:-135,max:135,step:.1,onchange:$=>s({pitch_env_amt:$}),get color(){return e.color},hint:"osc-pitch-env"});var te=v(V,2);cn(te,{label:"ENV-1",blockId:"mod",hint:"ref-env1"}),P(S,q)}}),ae(()=>R=ve(_,1,"pulse-group svelte-dp5a6t",null,R,{inactive:e.value.shape!=="Pulse"})),P(n,c),we()}var ff=D("<button></button>"),mf=D('<div class="interaction-row svelte-1o0jwca"><div class="vert-with-ref svelte-1o0jwca"><!> <!></div></div>'),pf=D('<div class="vert-with-ref svelte-1o0jwca"><!> <!></div> <div class="vert-with-ref svelte-1o0jwca"><!> <!></div>',1),hf=D("<div><!> <!> <!> <!></div>"),vf=D('<div class="osc-tabs svelte-1o0jwca"></div> <div class="osc-body svelte-1o0jwca"><!> <div><!></div></div> <!> <!>',1);function _f(n,e){ye(e,!0);let a=_e(e,"focusTab",19,()=>-1),r=E(()=>Gt(Dn.resolved).osc),s=_n(Array(6).fill(null)),i=H(0);He(()=>{a()>=0&&h(i,a())});let o=E(()=>e.config.oscs[t(i)]),c=E(()=>t(o)??ps());var l=vf(),f=De(l);let u;Ue(f,20,()=>({length:6}),We,(C,S,b)=>{const q=E(()=>e.config.oscs[b]!==null);var z=ff();let j;z.textContent=`OSC-${b+1}`,ae(()=>j=ve(z,1,"tab svelte-1o0jwca",null,j,{selected:b===t(i),"osc-active":t(q)})),B("click",z,()=>{h(i,b,!0)}),P(C,z)});var d=v(f,2),m=x(d);{let C=E(()=>t(i)+1),S=E(()=>t(o)!==null);dt(m,{get label(){return`OSC-${t(C)??""}`},get active(){return t(S)},onchange:b=>{b?e.setOsc(t(i),s[t(i)]??ps()):(s[t(i)]=En(e.config.oscs[t(i)]),e.setOsc(t(i),null))},get color(){return t(r)},hint:"toggle-osc"})}var y=v(m,2);let k;var w=x(y);df(w,{get index(){return t(i)},get value(){return t(c)},onchange:C=>{t(o)!==null&&e.setOsc(t(i),C)},get color(){return t(r)}});var _=v(d,2);{var R=C=>{Sn(C,{label:"Feedback",get color(){return t(r)},children:(S,b)=>{var q=mf(),z=x(q),j=x(z);me(j,{label:"fb fm",get value(){return e.config.osc_interaction.feedback_fm},min:0,max:3,step:.01,onchange:W=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,feedback_fm:W}}),get color(){return t(r)},hint:"osc-fb-fm"});var O=v(j,2);cn(O,{label:"OSC-1",blockId:"osc",hint:"ref-osc1"}),P(S,q)},$$slots:{default:!0}})};J(_,C=>{t(i)===0&&e.config.oscs[0]!==null&&C(R)})}var F=v(_,2);{var I=C=>{Sn(C,{label:"Interaction",get color(){return t(r)},children:(S,b)=>{var q=hf();let z;var j=x(q);dt(j,{label:"sync",get active(){return e.config.osc_interaction.sync},onchange:L=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,sync:L}}),get color(){return t(r)},hint:"toggle-sync"});var O=v(j,2);{var W=L=>{me(L,{label:"window",get value(){return e.config.osc_interaction.sync_window},min:0,max:1,step:.01,onchange:V=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,sync_window:V}}),get color(){return t(r)},hint:"osc-sync-window"})};J(O,L=>{e.config.osc_interaction.sync&&L(W)})}var T=v(O,2);dt(T,{label:"ring",get active(){return e.config.osc_interaction.ring_mod},onchange:L=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,ring_mod:L}}),get color(){return t(r)},hint:"toggle-ring"});var M=v(T,2);pn(M,{children:(L,V)=>{var te=pf(),$=De(te),ee=x($);me(ee,{label:"fm",get value(){return e.config.osc_interaction.fm_amt},min:0,max:10,step:.01,onchange:se=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,fm_amt:se}}),get color(){return t(r)},hint:"osc-fm"});var N=v(ee,2);cn(N,{label:"OSC-1",blockId:"osc",hint:"ref-osc1"});var ne=v($,2),ce=x(ne);me(ce,{label:"fm env",get value(){return e.config.osc_interaction.fm_env_amt},min:-10,max:10,step:.01,onchange:se=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,fm_env_amt:se}}),get color(){return t(r)},hint:"osc-fm-env"});var ge=v(ce,2);cn(ge,{label:"ENV-1",blockId:"mod",hint:"ref-env1"}),P(L,te)}}),ae(()=>z=ve(q,1,"interaction-row svelte-1o0jwca",null,z,{inactive:e.config.oscs[1]===null})),P(S,q)},$$slots:{default:!0}})};J(F,C=>{t(i)===1&&C(I)})}ae(()=>{u=$e(f,"",u,{"--_block-accent":t(r)}),k=ve(y,1,"osc-controls svelte-1o0jwca",null,k,{inactive:t(o)===null})}),Z("mouseenter",f,()=>le.set("osc-block")),P(n,l),we()}Ye(["click"]);var gf=D("<!> <!>",1),bf=D('<div class="biquad-panel svelte-4hmfpi"><!> <div><!> <!></div></div>');function _s(n,e){ye(e,!0);let a=_e(e,"label",3,"Filter"),r=_e(e,"value",3,null);const s=[{value:"Lowpass",glyph:"lowpass",label:"LP"},{value:"Highpass",glyph:"highpass",label:"HP"},{value:"Bandpass",glyph:"bandpass",label:"BP"}];let i=H(null),o=E(()=>r()??lt("Lowpass",1e3,.7)),c=E(()=>xa(t(o)));function l(R){const F=Sa(t(o)),I=Pa(t(o));e.onchange(lt(R,F,I))}function f(R){e.onchange(lt(xa(t(o)),R,Pa(t(o))))}function u(R){e.onchange(lt(xa(t(o)),Sa(t(o)),R))}var d=bf(),m=x(d);{let R=E(()=>r()!==null);dt(m,{get label(){return a()},get active(){return t(R)},onchange:F=>{F?e.onchange(t(i)??lt("Lowpass",1e3,.7)):(h(i,En(r()),!0),e.onchange(null))},get color(){return e.color},hint:"toggle-biquad"})}var y=v(m,2);let k;var w=x(y);{let R=E(()=>t(c)??"Lowpass");Ma(w,{get options(){return s},get value(){return t(R)},onchange:l,get color(){return e.color},hints:{Lowpass:"biquad-type-lp",Highpass:"biquad-type-hp",Bandpass:"biquad-type-bp"}})}var _=v(w,2);pn(_,{children:(R,F)=>{var I=gf(),C=De(I);{let b=E(()=>Sa(t(o)));me(C,{label:"freq",get value(){return t(b)},min:20,max:2e4,step:1,onchange:f,get color(){return e.color},hint:"biquad-freq"})}var S=v(C,2);{let b=E(()=>Pa(t(o)));me(S,{label:"Q",get value(){return t(b)},min:.1,max:20,step:.01,onchange:u,get color(){return e.color},hint:"biquad-q"})}P(R,I)}}),ae(()=>k=ve(y,1,"biquad-controls svelte-4hmfpi",null,k,{inactive:r()===null})),P(n,d),we()}var kf=D("<div><!> <!></div>"),yf=D('<div class="path-panel svelte-1mlllm3"><div class="path-row svelte-1mlllm3"><!> <!></div> <div class="path-row svelte-1mlllm3"><!> <!></div></div>');function wf(n,e){ye(e,!0),_e(e,"oscCount",3,2);let a=_e(e,"oscActive",19,()=>[]);function r(m){e.onchange({...e.value,...m})}function s(m,y){const k=[...e.value.mix];k[m]=y,e.onchange({...e.value,mix:k})}var i=yf(),o=x(i),c=x(o);pn(c,{children:(m,y)=>{var k=La(),w=De(k);Ue(w,16,()=>({length:6}),We,(_,R,F)=>{const I=E(()=>a()[F]??!1);var C=kf();let S;var b=x(C);me(b,{label:`O${F+1}`,get value(){return e.value.mix[F]},min:0,max:1,step:.01,onchange:z=>s(F,z),get color(){return e.color},hint:"path-osc-mix"});var q=v(b,2);cn(q,{label:`OSC-${F+1}`,blockId:"osc",hint:"ref-osc"}),ae(()=>S=ve(C,1,"vert-with-ref svelte-1mlllm3",null,S,{inactive:!t(I)})),P(_,C)}),P(m,k)}});var l=v(c,2);Sn(l,{label:"Pre Filter",get color(){return e.color},children:(m,y)=>{_s(m,{label:"pre",get value(){return e.value.pre_filter},onchange:k=>r({pre_filter:k}),get color(){return e.color}})},$$slots:{default:!0}});var f=v(o,2),u=x(f);Sn(u,{label:"Path Env",get color(){return e.color},children:(m,y)=>{vs(m,{label:"env",get value(){return e.value.env},onchange:k=>r({env:k}),get color(){return e.color}})},$$slots:{default:!0}});var d=v(u,2);Sn(d,{label:"Post Filter",get color(){return e.color},children:(m,y)=>{_s(m,{label:"post",get value(){return e.value.post_filter},onchange:k=>r({post_filter:k}),get color(){return e.color}})},$$slots:{default:!0}}),P(n,i),we()}var xf=D("<button></button>"),Sf=D('<div class="path-tabs svelte-1puvzgq"></div> <div class="path-body svelte-1puvzgq"><!> <div><!></div></div>',1);function Pf(n,e){ye(e,!0);let a=_e(e,"focusTab",19,()=>-1),r=E(()=>Gt(Dn.resolved).path),s=_n(Array(3).fill(null)),i=H(0);He(()=>{a()>=0&&h(i,a())});let o=E(()=>e.config.paths[t(i)]),c=E(()=>t(o)??hs()),l=E(()=>e.config.oscs.map(R=>R!==null));var f=Sf(),u=De(f);let d;Ue(u,20,()=>({length:3}),We,(R,F,I)=>{const C=E(()=>e.config.paths[I]!==null);var S=xf();let b;S.textContent=`PATH-${I+1}`,ae(()=>b=ve(S,1,"tab svelte-1puvzgq",null,b,{selected:I===t(i),"path-active":t(C)})),B("click",S,()=>{h(i,I,!0)}),P(R,S)});var m=v(u,2),y=x(m);{let R=E(()=>t(i)+1),F=E(()=>t(o)!==null);dt(y,{get label(){return`PATH-${t(R)??""}`},get active(){return t(F)},onchange:I=>{I?e.setPath(t(i),s[t(i)]??hs()):(s[t(i)]=En(e.config.paths[t(i)]),e.setPath(t(i),null))},get color(){return t(r)}})}var k=v(y,2);let w;var _=x(k);wf(_,{get index(){return t(i)},get value(){return t(c)},get oscCount(){return e.oscCount},get oscActive(){return t(l)},onchange:R=>e.setPath(t(i),R),get color(){return t(r)}}),ae(()=>{d=$e(u,"",d,{"--_block-accent":t(r)}),w=ve(k,1,"path-controls svelte-1puvzgq",null,w,{inactive:t(o)===null})}),Z("mouseenter",u,()=>le.set("path-block")),P(n,f),we()}Ye(["click"]);var Af=D("<!> <!>",1),Tf=D('<div class="ws-row svelte-gtye39"><!> <!> <!> <!></div>'),Df=D("<!> <!> <!>",1),Rf=D('<div class="block-row svelte-gtye39"><!> <!> <!></div>');function qf(n,e){ye(e,!0);let a=E(()=>Gt(Dn.resolved).fx);var r=Rf(),s=x(r);Sn(s,{label:"Shape Filter",get color(){return t(a)},children:(c,l)=>{_s(c,{label:"shape",get value(){return e.config.shape_filter},onchange:f=>e.updateConfig({shape_filter:f}),get color(){return t(a)}})},$$slots:{default:!0}});var i=v(s,2);Sn(i,{label:"Waveshaper",get color(){return t(a)},children:(c,l)=>{var f=Tf(),u=x(f);dt(u,{label:"half rect",get active(){return e.config.half_rect},onchange:w=>e.updateConfig({half_rect:w}),get color(){return t(a)},hint:"toggle-half-rect"});var d=v(u,2);pn(d,{children:(w,_)=>{{let R=E(()=>e.config.soft_clip??0);me(w,{label:"clip",get value(){return t(R)},min:0,max:10,step:.01,onchange:F=>e.updateConfig({soft_clip:F>0?F:null}),get color(){return t(a)},hint:"fx-clip"})}}});var m=v(d,2);{let w=E(()=>e.config.hard_clip!==null);dt(m,{label:"hard clip",get active(){return t(w)},onchange:_=>e.updateConfig({hard_clip:_?[1,.8]:null}),get color(){return t(a)},hint:"toggle-hard-clip"})}var y=v(m,2);{var k=w=>{pn(w,{children:(_,R)=>{var F=Af(),I=De(F);me(I,{label:"drive",get value(){return e.config.hard_clip[0]},min:1,max:10,step:.01,onchange:S=>{const b=En(e.config.hard_clip);e.updateConfig({hard_clip:[S,b[1]]})},get color(){return t(a)},hint:"fx-hard-drive"});var C=v(I,2);me(C,{label:"thresh",get value(){return e.config.hard_clip[1]},min:.1,max:1,step:.01,onchange:S=>{const b=En(e.config.hard_clip);e.updateConfig({hard_clip:[b[0],S]})},get color(){return t(a)},hint:"fx-hard-thresh"}),P(_,F)}})};J(y,w=>{e.config.hard_clip&&w(k)})}P(c,f)},$$slots:{default:!0}});var o=v(i,2);Sn(o,{label:"Voice FX",get color(){return t(a)},children:(c,l)=>{pn(c,{children:(f,u)=>{var d=Df(),m=De(d);{let w=E(()=>e.config.wavefold??0);me(m,{label:"fold",get value(){return t(w)},min:0,max:10,step:.01,onchange:_=>e.updateConfig({wavefold:_>0?_:null}),get color(){return t(a)},hint:"fx-fold"})}var y=v(m,2);{let w=E(()=>e.config.bit_crush??0);me(y,{label:"crush",get value(){return t(w)},min:0,max:16,step:1,onchange:_=>e.updateConfig({bit_crush:_>0?_:null}),get color(){return t(a)},hint:"fx-crush"})}var k=v(y,2);{let w=E(()=>e.config.decimate??0);me(k,{label:"decim",get value(){return t(w)},min:0,max:32,step:1,onchange:_=>e.updateConfig({decimate:_>0?_:null}),get color(){return t(a)},hint:"fx-decim"})}P(f,d)}})},$$slots:{default:!0}}),Z("mouseenter",r,()=>le.set("fx-block")),P(n,r),we()}var Cf=D('<div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div>',1),Lf=D('<!> <!> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <!> <!> <!>',1),Mf=D('<div class="filter-panel svelte-1fddr5a"><!> <div><div class="engine-and-mode svelte-1fddr5a"><!> <!></div> <!></div></div>');function Ef(n,e){ye(e,!0);const a={engine:"Moog",mode:"Lowpass",cutoff:80,resonance:0,env_amt:0,lfo_amt:0,lfo2_amt:0,velo_amt:0,key_track:0,morph:0,morph_lfo_amt:0,morph_lfo2_amt:0,morph_env_amt:0};let r=_e(e,"value",3,null);const s=[{value:"Lowpass",glyph:"lowpass",label:"LP"},{value:"Highpass",glyph:"highpass",label:"HP"},{value:"Bandpass",glyph:"bandpass",label:"BP"}];let i=H(null),o=E(()=>r()??a),c=E(()=>(t(o).engine??"Moog")==="Svf");function l(b){b?e.onchange(t(i)??{...a}):(h(i,En(r()),!0),e.onchange(null))}function f(b){e.onchange({...t(o),engine:b})}function u(b){e.onchange({...t(o),mode:b})}function d(b){e.onchange({...t(o),...b})}var m=Mf(),y=x(m);{let b=E(()=>r()!==null);dt(y,{label:"vcf",get active(){return t(b)},onchange:l,get color(){return e.color},hint:"toggle-vcf"})}var k=v(y,2);let w;var _=x(k),R=x(_);{let b=E(()=>t(o).engine??"Moog");Ea(R,{options:["Moog","Svf"],get value(){return t(b)},onchange:f,hints:{Moog:"vcf-engine-moog",Svf:"vcf-engine-svf"}})}var F=v(R,2);{var I=b=>{{let q=E(()=>t(o).morph??0);me(b,{label:"morph",get value(){return t(q)},min:0,max:1,step:.01,onchange:z=>d({morph:z}),get color(){return e.color},hint:"vcf-morph"})}},C=b=>{Ma(b,{get options(){return s},get value(){return t(o).mode},onchange:u,get color(){return e.color},hints:{Lowpass:"vcf-mode-lp",Highpass:"vcf-mode-hp",Bandpass:"vcf-mode-bp"}})};J(F,b=>{t(c)?b(I):b(C,!1)})}var S=v(_,2);pn(S,{children:(b,q)=>{var z=Lf(),j=De(z);me(j,{label:"cutoff",get value(){return t(o).cutoff},min:0,max:135,step:.1,onchange:pe=>d({cutoff:pe}),get color(){return e.color},hint:"vcf-cutoff"});var O=v(j,2);me(O,{label:"reso",get value(){return t(o).resonance},min:0,max:1,step:.01,onchange:pe=>d({resonance:pe}),get color(){return e.color},hint:"vcf-reso"});var W=v(O,2),T=x(W);me(T,{label:"env",get value(){return t(o).env_amt},min:-135,max:135,step:.1,onchange:pe=>d({env_amt:pe}),get color(){return e.color},hint:"vcf-env"});var M=v(T,2);cn(M,{label:"ENV-2",blockId:"mod",hint:"ref-env2"});var L=v(W,2),V=x(L);me(V,{label:"lfo",get value(){return t(o).lfo_amt},min:-135,max:135,step:.1,onchange:pe=>d({lfo_amt:pe}),get color(){return e.color},hint:"vcf-lfo"});var te=v(V,2);cn(te,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var $=v(L,2),ee=x($);me(ee,{label:"lfo2",get value(){return t(o).lfo2_amt},min:-135,max:135,step:.1,onchange:pe=>d({lfo2_amt:pe}),get color(){return e.color},hint:"vcf-lfo2"});var N=v(ee,2);cn(N,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"});var ne=v($,2);me(ne,{label:"velo",get value(){return t(o).velo_amt},min:-135,max:135,step:.1,onchange:pe=>d({velo_amt:pe}),get color(){return e.color},hint:"vcf-velo"});var ce=v(ne,2);me(ce,{label:"key",get value(){return t(o).key_track},min:-2,max:2,step:.01,onchange:pe=>d({key_track:pe}),get color(){return e.color},hint:"vcf-key"});var ge=v(ce,2);{var se=pe=>{var Ve=Cf(),qe=De(Ve),Te=x(qe);{let on=E(()=>t(o).morph_env_amt??0);me(Te,{label:"m.env",get value(){return t(on)},min:-1,max:1,step:.01,onchange:Pn=>d({morph_env_amt:Pn}),get color(){return e.color},hint:"vcf-morph-env"})}var xe=v(Te,2);cn(xe,{label:"ENV-2",blockId:"mod",hint:"ref-env2"});var Fe=v(qe,2),Qe=x(Fe);{let on=E(()=>t(o).morph_lfo_amt??0);me(Qe,{label:"m.lfo",get value(){return t(on)},min:-1,max:1,step:.01,onchange:Pn=>d({morph_lfo_amt:Pn}),get color(){return e.color},hint:"vcf-morph-lfo"})}var nn=v(Qe,2);cn(nn,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var kn=v(Fe,2),Xn=x(kn);{let on=E(()=>t(o).morph_lfo2_amt??0);me(Xn,{label:"m.lfo2",get value(){return t(on)},min:-1,max:1,step:.01,onchange:Pn=>d({morph_lfo2_amt:Pn}),get color(){return e.color},hint:"vcf-morph-lfo2"})}var qn=v(Xn,2);cn(qn,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),P(pe,Ve)};J(ge,pe=>{t(c)&&pe(se)})}P(b,z)}}),ae(()=>w=ve(k,1,"filter-controls svelte-1fddr5a",null,w,{inactive:r()===null})),P(n,m),we()}var Ff=D("<div><!></div>");function Of(n,e){ye(e,!0);let a=E(()=>Gt(Dn.resolved).vcf);var r=Ff(),s=x(r);Ef(s,{get value(){return e.config.main_filter},onchange:i=>e.updateConfig({main_filter:i}),get color(){return t(a)}}),Z("mouseenter",r,()=>le.set("vcf-block")),P(n,r),we()}var zf=D('<!> <div class="vert-with-ref svelte-yb3nqx"><!> <!></div> <div class="vert-with-ref svelte-yb3nqx"><!> <!></div> <div class="vert-with-ref svelte-yb3nqx"><!> <!></div>',1),Nf=D('<div class="block-row svelte-yb3nqx"><!> <!></div>');function If(n,e){ye(e,!0);let a=E(()=>Gt(Dn.resolved).amp);var r=Nf(),s=x(r);Sn(s,{label:"Envelope",get color(){return t(a)},children:(o,c)=>{vs(o,{label:"amp",get value(){return e.config.amp_env},onchange:l=>e.updateConfig({amp_env:l}),get color(){return t(a)}})},$$slots:{default:!0}});var i=v(s,2);Sn(i,{label:"Level",get color(){return t(a)},children:(o,c)=>{pn(o,{children:(l,f)=>{var u=zf(),d=De(u);me(d,{label:"amp",get value(){return e.config.amp},min:0,max:2,step:.01,onchange:S=>e.updateConfig({amp:S}),get color(){return t(a)},hint:"amp-level"});var m=v(d,2),y=x(m);me(y,{label:"velo",get value(){return e.config.amp_velo_amt},min:0,max:1,step:.01,onchange:S=>e.updateConfig({amp_velo_amt:S}),get color(){return t(a)},hint:"amp-velo"});var k=v(y,2);cn(k,{label:"VELO",blockId:"mod",hint:"ref-velo"});var w=v(m,2),_=x(w);me(_,{label:"vol lfo",get value(){return e.config.vol_lfo_amt},min:0,max:1,step:.01,onchange:S=>e.updateConfig({vol_lfo_amt:S}),get color(){return t(a)},hint:"amp-vol-lfo"});var R=v(_,2);cn(R,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var F=v(w,2),I=x(F);me(I,{label:"vol lfo2",get value(){return e.config.vol_lfo2_amt},min:0,max:1,step:.01,onchange:S=>e.updateConfig({vol_lfo2_amt:S}),get color(){return t(a)},hint:"amp-vol-lfo2"});var C=v(I,2);cn(C,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),P(l,u)}})},$$slots:{default:!0}}),Z("mouseenter",r,()=>le.set("amp-block")),P(n,r),we()}var jf=D('<!> <div class="vert-with-ref svelte-1n1i7mb"><!> <!></div> <div class="vert-with-ref svelte-1n1i7mb"><!> <!></div>',1),Bf=D("<!> <!> <!>",1),Hf=D('<div class="block-row svelte-1n1i7mb"><!> <!> <!> <!></div>');function Vf(n,e){ye(e,!0);let a=E(()=>Gt(Dn.resolved).post);var r=Hf(),s=x(r);Sn(s,{label:"Post Filter",get color(){return t(a)},children:(l,f)=>{_s(l,{label:"post",get value(){return e.config.post_filter},onchange:u=>e.updateConfig({post_filter:u}),get color(){return t(a)}})},$$slots:{default:!0}});var i=v(s,2);Sn(i,{label:"Pan",get color(){return t(a)},children:(l,f)=>{pn(l,{children:(u,d)=>{var m=jf(),y=De(m);me(y,{label:"pan",get value(){return e.config.pan},min:-1,max:1,step:.01,onchange:C=>e.updateConfig({pan:C}),get color(){return t(a)},hint:"post-pan"});var k=v(y,2),w=x(k);me(w,{label:"pan lfo",get value(){return e.config.pan_lfo_amt},min:0,max:1,step:.01,onchange:C=>e.updateConfig({pan_lfo_amt:C}),get color(){return t(a)},hint:"post-pan-lfo"});var _=v(w,2);cn(_,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var R=v(k,2),F=x(R);me(F,{label:"pan lfo2",get value(){return e.config.pan_lfo2_amt},min:0,max:1,step:.01,onchange:C=>e.updateConfig({pan_lfo2_amt:C}),get color(){return t(a)},hint:"post-pan-lfo2"});var I=v(F,2);cn(I,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),P(u,m)}})},$$slots:{default:!0}});var o=v(i,2);Sn(o,{label:"Porta",get color(){return t(a)},children:(l,f)=>{pn(l,{children:(u,d)=>{me(u,{label:"time",get value(){return e.config.portamento},min:0,max:500,step:1,onchange:m=>e.updateConfig({portamento:m}),get color(){return t(a)},hint:"post-porta-time"})}})},$$slots:{default:!0}});var c=v(o,2);Sn(c,{label:"Unison",get color(){return t(a)},children:(l,f)=>{pn(l,{children:(u,d)=>{var m=Bf(),y=De(m);me(y,{label:"voices",get value(){return e.config.unison},min:1,max:8,step:1,onchange:_=>e.updateConfig({unison:_}),get color(){return t(a)},hint:"post-unison-voices"});var k=v(y,2);me(k,{label:"detune",get value(){return e.config.unison_detune},min:0,max:1,step:.001,onchange:_=>e.updateConfig({unison_detune:_}),get color(){return t(a)},hint:"post-unison-detune"});var w=v(k,2);me(w,{label:"spread",get value(){return e.config.unison_spread},min:0,max:1,step:.01,onchange:_=>e.updateConfig({unison_spread:_}),get color(){return t(a)},hint:"post-unison-spread"}),P(u,m)}})},$$slots:{default:!0}}),Z("mouseenter",r,()=>le.set("post-block")),P(n,r),we()}var Gf=D('<button aria-label="Piano key"></button>'),Kf=D('<button aria-label="Piano key"></button>'),Wf=D('<div class="keyboard svelte-1hwart2" role="group" aria-label="Piano keyboard"><!> <!></div>');function Uf(n,e){ye(e,!0);let a=_e(e,"octave",3,4),r=_e(e,"activeKeys",19,()=>new Set);const s=[0,2,4,5,7,9,11],i=[1,3,-1,6,8,10,-1],o=[0,1,-1,3,4,5,-1];function c(F,I){return(a()+1+I)*12+F}function l(F){e.onkeydown(F)}function f(F){e.onkeyup(F)}function u(){const F=[],I=7.142857142857143;for(let C=0;C<2;C++){const S=C*7*I;for(let b=0;b<7;b++)F.push({semi:c(s[b],C),black:!1,left:S+b*I,width:I});for(let b=0;b<7;b++){if(i[b]===-1)continue;const q=o[b];F.push({semi:c(i[b],C),black:!0,left:S+(q+.65)*I,width:I*.7})}}return F}let d=E(u),m=E(()=>t(d).filter(F=>!F.black)),y=E(()=>t(d).filter(F=>F.black)),k=H(!1);var w=Wf(),_=x(w);Ue(_,17,()=>t(m),We,(F,I)=>{var C=Gf();let S,b;ae(q=>{S=ve(C,1,"key white svelte-1hwart2",null,S,q),b=$e(C,"",b,{left:`${t(I).left??""}%`,width:`${t(I).width??""}%`})},[()=>({active:r().has(t(I).semi)})]),B("pointerdown",C,q=>{q.preventDefault(),l(t(I).semi)}),B("pointerup",C,()=>f(t(I).semi)),Z("pointerleave",C,()=>{t(k)&&f(t(I).semi)}),Z("pointerenter",C,()=>{t(k)&&l(t(I).semi)}),P(F,C)});var R=v(_,2);Ue(R,17,()=>t(y),We,(F,I)=>{var C=Kf();let S,b;ae(q=>{S=ve(C,1,"key black svelte-1hwart2",null,S,q),b=$e(C,"",b,{left:`${t(I).left??""}%`,width:`${t(I).width??""}%`})},[()=>({active:r().has(t(I).semi)})]),B("pointerdown",C,q=>{q.preventDefault(),l(t(I).semi)}),B("pointerup",C,()=>f(t(I).semi)),Z("pointerleave",C,()=>{t(k)&&f(t(I).semi)}),Z("pointerenter",C,()=>{t(k)&&l(t(I).semi)}),P(F,C)}),Z("mouseenter",w,()=>le.set("piano-keyboard")),B("pointerdown",w,()=>{h(k,!0)}),B("pointerup",w,()=>{h(k,!1)}),Z("pointerleave",w,()=>{h(k,!1)}),P(n,w),we()}Ye(["pointerdown","pointerup"]);var Qf=D('<button class="hit-btn svelte-1bvy689">Hit</button>');function Zf(n,e){ye(e,!0);var a=Qf();Z("mouseenter",a,()=>le.set("hit-button")),B("pointerdown",a,r=>{r.preventDefault(),e.onhit()}),P(n,a),we()}Ye(["pointerdown"]);var Jf=D('<!> <div class="measure-view svelte-i7auzo"><!></div>',1),Xf=D('<div class="demo-editor svelte-i7auzo"><div class="controls-stack svelte-i7auzo"><span class="label svelte-i7auzo">demo</span> <!> <!> <div class="switch-row svelte-i7auzo"><span class="switch-label svelte-i7auzo">scale</span> <!></div> <div class="switch-row svelte-i7auzo"><span class="switch-label svelte-i7auzo">note</span> <!></div></div> <!></div>');function Yf(n,e){ye(e,!0);let a=E(()=>Dn.resolved==="light"?"#b07820":"#cc9944"),r=_e(e,"octave",3,4),s=H(_n([])),i=H(120),o=H(""),c=H(""),l=H(0),f=E(()=>Mn.playing&&Se.playing),u=E(()=>Se.position?.tracks[0]??null),d=E(()=>t(f)&&t(u)?t(u).measure_idx:-1),m=E(()=>t(f)&&t(u)?t(u).beat_time:0);function y(se){return se.filter(pe=>"Beat"in pe).length}He(()=>{h(i,e.demo?.bpm??120,!0),h(o,e.demo?.scale??"",!0),h(c,e.demo?.root??"",!0);const se=e.demo?.pattern??"";se?R0(se).then(pe=>{h(s,pe,!0)}):h(s,[],!0)}),He(()=>{t(s).length===0?h(l,0):t(l)>=t(s).length&&h(l,t(s).length-1)});function k(){const se=q0(t(s));e.onchange({pattern:se,bpm:t(i)||null,scale:t(o)||null,root:t(c)||null})}function w(se,pe,Ve){go(t(s)[t(l)],se,pe,Ve),k()}async function _(se,pe,Ve){try{await bo(t(s)[t(l)],se,pe,Ve)&&k()}catch{}}function R(){L0(t(s)[t(l)]),k()}function F(se){ko(t(s)[t(l)],se),k()}function I(se,pe){yo(t(s)[t(l)],se,pe),k()}async function C(se,pe){try{await er(t(s)[t(l)],se,pe)&&k()}catch{}}function S(se,pe){wo(t(s)[t(l)],se,pe),k()}function b(se){h(l,se,!0)}function q(){t(s).push([{Beat:["Rest","Rest","Rest","Rest"]}]),h(l,t(s).length-1),k()}function z(se){t(s).splice(se,1),t(l)>=t(s).length&&t(s).length>0&&h(l,t(s).length-1),k()}function j(se,pe){const[Ve]=t(s).splice(se,1);t(s).splice(pe,0,Ve),t(l)===se?h(l,pe,!0):se<t(l)&&pe>=t(l)?ka(l,-1):se>t(l)&&pe<=t(l)&&ka(l),k()}const O=["","maj","min","penta","blues","chrom"],W=["","c","c#","d","d#","e","f","f#","g","g#","a","a#","b"];var T=Xf(),M=x(T),L=v(x(M),2);Xs(L,{label:"Bpm",get value(){return t(i)},min:40,max:240,step:1,onchange:se=>{h(i,se,!0),k()},get color(){return t(a)},hint:"demo-bpm"});var V=v(L,2);Xs(V,{label:"Oct",get value(){return r()},min:0,max:8,step:1,onchange:se=>e.onoctavechange?.(se),get color(){return t(a)},hint:"demo-oct"});var te=v(V,2),$=v(x(te),2);Ea($,{get options(){return O},get value(){return t(o)},onchange:se=>{h(o,se,!0),k()},hint:"demo-scale"});var ee=v(te,2),N=v(x(ee),2);Ea(N,{get options(){return W},get value(){return t(c)},onchange:se=>{h(c,se,!0),k()},hint:"demo-root"});var ne=v(M,2);{var ce=se=>{var pe=Jf(),Ve=De(pe);{let xe=E(()=>t(s).map((Qe,nn)=>({label:String(nn+1)}))),Fe=E(()=>t(d)>=0&&t(s)[t(d)]?t(m)/(y(t(s)[t(d)])||1):0);Qa(Ve,{get items(){return t(xe)},get selectedIndex(){return t(l)},get activeIndex(){return t(d)},get activeProgress(){return t(Fe)},onselect:b,onadd:q,ondelete:z,onmove:j})}var qe=v(Ve,2),Te=x(qe);{let xe=E(()=>t(d)===t(l)),Fe=E(()=>t(d)===t(l)?t(m):0);xo(Te,{get items(){return t(s)[t(l)]},get playing(){return t(xe)},get beatPosition(){return t(Fe)},onchange:(Qe,nn,kn)=>w(Qe,nn,kn),onaddbeat:R,ondeletemeasure:()=>z(t(l)),ondeleteitem:F,ondeletedivision:(Qe,nn)=>I(Qe,nn),oninsertcommand:(Qe,nn)=>C(Qe,nn),onreorderitem:(Qe,nn)=>S(Qe,nn),onedit:(Qe,nn,kn)=>_(Qe,nn,kn)})}P(se,pe)},ge=se=>{Qa(se,{items:[],selectedIndex:-1,onselect:()=>{},onadd:q,onmove:()=>{}})};J(ne,se=>{t(s).length>0?se(ce):se(ge,!1)})}Z("mouseenter",T,()=>le.set("demo-editor")),P(n,T),we()}class $f{#e=H(_n([]));get inputs(){return t(this.#e)}set inputs(e){h(this.#e,e,!0)}access=null;callbacks=null;async init(e){if(this.callbacks=e,!!navigator.requestMIDIAccess)try{this.access=await navigator.requestMIDIAccess(),this.bindInputs(),this.access.onstatechange=()=>this.bindInputs()}catch{}}destroy(){if(this.access){for(const e of this.access.inputs.values())e.onmidimessage=null;this.access.onstatechange=null}this.access=null,this.callbacks=null,this.inputs=[]}bindInputs(){if(!this.access)return;const e=[];for(const a of this.access.inputs.values())a.onmidimessage=r=>this.handleMessage(r),a.name&&e.push(a.name);this.inputs=e}handleMessage(e){const a=e.data;if(!a||a.length<3)return;const r=a[0]&240,s=(a[0]&15)+1,i=a[1],o=a[2];r===144&&o>0?this.callbacks?.onNoteDown(i,o,s):r===128||r===144&&o===0?this.callbacks?.onNoteUp(i,s):r===176&&this.callbacks?.onCC?.(s,i,o)}}const Os=new $f,br="gb-daw-midi-cc-map";function em(){try{const n=localStorage.getItem(br);if(!n)return null;const e=JSON.parse(n);if(e&&typeof e.encoder=="number"&&Array.isArray(e.knobs))return e}catch{}return null}function nm(n){localStorage.setItem(br,JSON.stringify(n))}class tm{#e=H(0);get regionIndex(){return t(this.#e)}set regionIndex(e){h(this.#e,e,!0)}#t=H(_n([]));get regions(){return t(this.#t)}set regions(e){h(this.#t,e,!0)}#n=H(_n(em()));get ccMap(){return t(this.#n)}set ccMap(e){h(this.#n,e,!0)}#a=H(null);get learnStep(){return t(this.#a)}set learnStep(e){h(this.#a,e,!0)}prevCC=new Map;learnSeen=new Set;learnKnobs=[];learnFaders=[];learnPads=[];learnEncoder=-1;get currentRegion(){return this.regions[this.regionIndex]??null}get hasCcMap(){return this.ccMap!==null}get learnPrompt(){const e=this.learnStep;if(!e)return"";switch(e.phase){case"encoder":return"Turn the encoder...";case"knobs":return`Turn knob ${e.index+1} of 8...`;case"faders":return`Move fader ${e.index+1} of 4...`;case"pads":return`Press pad ${e.index+1} of 8 (or press Done to skip)...`}}setRegions(e){this.regions=e,this.regionIndex>=e.length&&(this.regionIndex=Math.max(0,e.length-1))}navigateRegion(e){if(this.regions.length===0)return;let a=this.regionIndex+e;a<0&&(a=this.regions.length-1),a>=this.regions.length&&(a=0),this.regionIndex=a,this.prevCC.clear()}jumpToBlock(e){const a=this.regions.findIndex(r=>r.block===e);a>=0&&(this.regionIndex=a,this.prevCC.clear())}handleCC(e,a,r){if(this.learnStep){this.learnCC(a);return}if(!this.ccMap)return;if(a===this.ccMap.encoder){r>=1&&r<=63?this.navigateRegion(-1):r>=65&&r<=127&&this.navigateRegion(1);return}const s=this.ccMap.knobs.indexOf(a);if(s>=0){this.applyCC(`K${s+1}`,r);return}const i=this.ccMap.faders.indexOf(a);if(i>=0){this.applyCC(`F${i+1}`,r);return}}handlePad(e){if(this.learnStep&&this.learnStep.phase==="pads"){this.learnPadNote(e);return}if(!this.ccMap||this.ccMap.pads.length===0)return;const a=this.ccMap.pads.indexOf(e);a>=0&&a<nr.length&&this.jumpToBlock(nr[a])}applyCC(e,a){const r=this.currentRegion;if(!r)return;const s=r.bindings.find(k=>k.slot===e);if(!s)return;if(s.type==="discrete"){const k=s.options??[];if(k.length===0)return;const w=Math.round(a/127*(k.length-1));s.set(k[w]),this.prevCC.set(e,a);return}if(s.type==="toggle"){s.set(a>=64),this.prevCC.set(e,a);return}const i=this.prevCC.get(e);if(this.prevCC.set(e,a),i===void 0)return;const o=a-i;if(o===0)return;const c=s.min??0,l=s.max??1,f=s.step??.01,u=s.get();let d;if(o>0){const k=127-i,w=l-u;d=k>0?u+o*(w/k):u}else{const k=i,w=u-c;d=k>0?u+o*(w/k):u}const m=Math.round(d/f)*f,y=Math.min(l,Math.max(c,m));s.set(y)}startLearn(){this.learnSeen.clear(),this.learnKnobs=[],this.learnFaders=[],this.learnPads=[],this.learnEncoder=-1,this.learnStep={phase:"encoder"}}cancelLearn(){this.learnStep=null}skipPads(){this.finishLearn()}learnCC(e){const a=this.learnStep;if(a)switch(a.phase){case"encoder":this.learnEncoder=e,this.learnSeen.add(e),this.learnStep={phase:"knobs",index:0};break;case"knobs":if(this.learnSeen.has(e))return;this.learnSeen.add(e),this.learnKnobs.push(e),this.learnKnobs.length>=8?this.learnStep={phase:"faders",index:0}:this.learnStep={phase:"knobs",index:this.learnKnobs.length};break;case"faders":if(this.learnSeen.has(e))return;this.learnSeen.add(e),this.learnFaders.push(e),this.learnFaders.length>=4?this.learnStep={phase:"pads",index:0}:this.learnStep={phase:"faders",index:this.learnFaders.length};break}}learnPadNote(e){!this.learnStep||this.learnStep.phase!=="pads"||(this.learnPads.push(e),this.learnPads.length>=8?this.finishLearn():this.learnStep={phase:"pads",index:this.learnPads.length})}finishLearn(){const e={encoder:this.learnEncoder,knobs:this.learnKnobs,faders:this.learnFaders,pads:this.learnPads};this.ccMap=e,nm(e),this.learnStep=null}clearMap(){this.ccMap=null,localStorage.removeItem(br)}}const mn=new tm;function de(n,e,a,r,s,i,o){return{slot:n,label:e,type:"vert",min:a,max:r,step:s,get:i,set:o}}function At(n,e,a,r,s){return{slot:n,label:e,type:"discrete",options:a,get:r,set:s}}function as(n,e,a,r){return{slot:n,label:e,type:"toggle",get:a,set:r}}function ss(n,e){const a=Xt(n),r=At("K1","type",["AD","ADSR","MultiTap"],()=>a,s=>e({__type__:s}));return"AD"in n?{type:r,faders:[de("F1","atk",0,500,.1,()=>n.AD.attack_ms,s=>e({attack_ms:s})),de("F2","dec",0,5e3,1,()=>n.AD.decay_ms,s=>e({decay_ms:s})),de("F3","start",-1,1,.01,()=>n.AD.start,s=>e({start:s})),de("F4","amt",-1,1,.01,()=>n.AD.amt,s=>e({amt:s}))]}:"ADSR"in n?{type:r,faders:[de("F1","atk",0,2e3,.1,()=>n.ADSR.attack_ms,s=>e({attack_ms:s})),de("F2","dec",0,5e3,1,()=>n.ADSR.decay_ms,s=>e({decay_ms:s})),de("F3","sus",0,1,.01,()=>n.ADSR.sustain,s=>e({sustain:s})),de("F4","rel",0,5e3,1,()=>n.ADSR.release_ms,s=>e({release_ms:s}))]}:{type:r,faders:[de("F1","taps",1,16,1,()=>n.MultiTap.num_taps,s=>e({num_taps:s})),de("F2","intvl",1,500,1,()=>n.MultiTap.tap_interval,s=>e({tap_interval:s})),de("F3","amp",0,1,.01,()=>n.MultiTap.tap_amp,s=>e({tap_amp:s})),de("F4","tail",0,5e3,1,()=>n.MultiTap.tail_decay,s=>e({tail_decay:s}))]}}const am=["Lowpass","Highpass","Bandpass"];function rs(n,e){return{type:At("K1","type",am,()=>xa(n),a=>{e(lt(a,Sa(n),Pa(n)))}),freq:de("F1","freq",20,2e4,1,()=>Sa(n),a=>{e(lt(xa(n),a,Pa(n)))}),q:de("F2","Q",.1,20,.01,()=>Pa(n),a=>{e(lt(xa(n),Sa(n),a))})}}function sm(n,e,a,r){const s=[],i=["Ramp","Pulse","Sine","Triangle","S&H"],o=["Free","Trig","Rand"];s.push({id:"lfo",label:"LFO-1",block:"mod",bindings:[At("K1","wave",i,()=>n.lfo.wave??"S&H",u=>{const d=u==="S&H"?null:u;e({lfo:{...n.lfo,wave:d}})}),At("K2","mode",o,()=>n.lfo.mode,u=>{e({lfo:{...n.lfo,mode:u}})}),de("F1","rate",0,15,1,()=>n.lfo.rate,u=>{e({lfo:{...n.lfo,rate:u}})})]}),s.push({id:"lfo2",label:"LFO-2",block:"mod",bindings:[At("K1","wave",i,()=>n.lfo2.wave??"S&H",u=>{const d=u==="S&H"?null:u;e({lfo2:{...n.lfo2,wave:d}})}),At("K2","mode",o,()=>n.lfo2.mode,u=>{e({lfo2:{...n.lfo2,mode:u}})}),de("F1","rate",0,15,1,()=>n.lfo2.rate,u=>{e({lfo2:{...n.lfo2,rate:u}})}),de("F2","L1→rate",0,1,.01,()=>n.lfo1_to_lfo2_rate,u=>{e({lfo1_to_lfo2_rate:u})}),de("F3","L1→dep",0,1,.01,()=>n.lfo1_to_lfo2_depth,u=>{e({lfo1_to_lfo2_depth:u})})]});{const u=n.pitch_env??it("AD"),d=ss(u,m=>{if("__type__"in m){e({pitch_env:it(m.__type__)});return}const y=Xt(u),k=u[y];e({pitch_env:{[y]:{...k,...m}}})});s.push({id:"pitch-env",label:"ENV-1 Pitch",block:"mod",bindings:[d.type,...d.faders]})}{const u=n.filter_env??it("AD"),d=ss(u,m=>{if("__type__"in m){e({filter_env:it(m.__type__)});return}const y=Xt(u),k=u[y];e({filter_env:{[y]:{...k,...m}}})});s.push({id:"filter-env",label:"ENV-2 Filter",block:"mod",bindings:[d.type,...d.faders]})}const c=["Sine","Triangle","Saw","Pulse","WhiteNoise","PinkNoise"],l=["Pitched","Fixed","Swept"],f=n.oscs.filter(u=>u!==null).length;for(let u=0;u<n.oscs.length;u++){let d=function(_){const R=n.oscs[y]??ps();a(y,{...R,..._})};const m=n.oscs[u]??ps(),y=u,k=So(m.freq),w=[];if(k==="Pitched"&&typeof m.freq=="object"&&"Pitched"in m.freq){const _=m.freq.Pitched;w.push(de("F1","semi",-48,48,1,()=>_.semi,R=>{d({freq:{Pitched:{semi:R,fine:_.fine}}})}),de("F2","fine",-100,100,1,()=>_.fine,R=>{d({freq:{Pitched:{semi:_.semi,fine:R}}})}))}else if(k==="Fixed")w.push(de("F1","hz",20,2e4,1,()=>m.fixed_hz,_=>{d({fixed_hz:_})}));else if(k==="Swept"&&typeof m.freq=="object"&&"Swept"in m.freq){const _=m.freq.Swept;w.push(de("F1","atk",0,100,.01,()=>_.atk,R=>{d({freq:{Swept:{..._,atk:R}}})}),de("F2","dec",0,5e3,1,()=>_.dec,R=>{d({freq:{Swept:{..._,dec:R}}})}),de("F3","base",0,135,.1,()=>_.base,R=>{d({freq:{Swept:{..._,base:R}}})}),de("F4","amt",-135,135,.1,()=>_.amt,R=>{d({freq:{Swept:{..._,amt:R}}})}))}s.push({id:`osc-${u}`,label:`OSC-${u+1}`,block:"osc",bindings:[At("K1","shape",c,()=>m.shape,_=>d({shape:_})),At("K2","freq",l,()=>k,_=>{let R;switch(_){case"Pitched":R={Pitched:{semi:0,fine:0}};break;case"Fixed":R="Fixed";break;case"Swept":R={Swept:{atk:.1,dec:200,base:48,amt:50}};break;default:return}d({freq:R})}),de("K3","pw",0,1,.01,()=>m.pw,_=>d({pw:_})),de("K4","pw lfo",0,1,.01,()=>m.pw_lfo_amt,_=>d({pw_lfo_amt:_})),de("K5","p.lfo",0,48,.1,()=>m.pitch_lfo_amt,_=>d({pitch_lfo_amt:_})),de("K6","p.env",-135,135,.1,()=>m.pitch_env_amt,_=>d({pitch_env_amt:_})),de("K7","p.lfo2",0,48,.1,()=>m.pitch_lfo2_amt,_=>d({pitch_lfo2_amt:_})),de("K8","pw lfo2",0,1,.01,()=>m.pw_lfo2_amt,_=>d({pw_lfo2_amt:_})),...w]}),s.push({id:`osc-${u}-pdif`,label:`OSC-${u+1} PDif`,block:"osc",bindings:[de("K1","pdif",0,1,.01,()=>m.phaz_diff,_=>d({phaz_diff:_})),de("K2","pd lfo",0,1,.01,()=>m.phaz_diff_lfo_amt,_=>d({phaz_diff_lfo_amt:_})),de("K3","pd lf2",0,1,.01,()=>m.phaz_diff_lfo2_amt,_=>d({phaz_diff_lfo2_amt:_}))]}),u===0&&n.oscs[0]!==null&&s.push({id:"osc-feedback",label:"OSC-1 Feedback",block:"osc",bindings:[de("F1","fb fm",0,3,.01,()=>n.osc_interaction.feedback_fm,_=>{e({osc_interaction:{...n.osc_interaction,feedback_fm:_}})})]}),u===1&&s.push({id:"osc-interact",label:"OSC Interact",block:"osc",bindings:f>=2?[as("K1","sync",()=>n.osc_interaction.sync,_=>{e({osc_interaction:{...n.osc_interaction,sync:_}})}),de("K2","window",0,1,.01,()=>n.osc_interaction.sync_window,_=>{e({osc_interaction:{...n.osc_interaction,sync_window:_}})}),as("K3","ring",()=>n.osc_interaction.ring_mod,_=>{e({osc_interaction:{...n.osc_interaction,ring_mod:_}})}),de("F1","fm",0,10,.01,()=>n.osc_interaction.fm_amt,_=>{e({osc_interaction:{...n.osc_interaction,fm_amt:_}})}),de("F2","fm env",-10,10,.01,()=>n.osc_interaction.fm_env_amt,_=>{e({osc_interaction:{...n.osc_interaction,fm_env_amt:_}})})]:[]})}for(let u=0;u<n.paths.length;u++){let d=function(k){const w=n.paths[y]??hs();r(y,{...w,...k})};const m=n.paths[u]??hs(),y=u;s.push({id:`path-${u}-mix`,label:`PATH-${u+1} Mix`,block:"path",bindings:[de("F1","O1",0,1,.01,()=>m.mix[0],k=>{const w=[...m.mix];w[0]=k,d({mix:w})}),de("F2","O2",0,1,.01,()=>m.mix[1],k=>{const w=[...m.mix];w[1]=k,d({mix:w})}),de("F3","O3",0,1,.01,()=>m.mix[2],k=>{const w=[...m.mix];w[2]=k,d({mix:w})}),de("F4","O4",0,1,.01,()=>m.mix[3],k=>{const w=[...m.mix];w[3]=k,d({mix:w})}),de("K1","O5",0,1,.01,()=>m.mix[4],k=>{const w=[...m.mix];w[4]=k,d({mix:w})}),de("K2","O6",0,1,.01,()=>m.mix[5],k=>{const w=[...m.mix];w[5]=k,d({mix:w})})]});{const k=m.pre_filter??lt("Lowpass",1e3,.7),w=rs(k,_=>d({pre_filter:_}));s.push({id:`path-${u}-pre`,label:`PATH-${u+1} Pre`,block:"path",bindings:[w.type,w.freq,w.q]})}{const k=m.env??it("AD"),w=ss(k,_=>{if("__type__"in _){d({env:it(_.__type__)});return}const R=Xt(k),F=k[R];d({env:{[R]:{...F,..._}}})});s.push({id:`path-${u}-env`,label:`PATH-${u+1} Env`,block:"path",bindings:[w.type,...w.faders]})}{const k=m.post_filter??lt("Lowpass",1e3,.7),w=rs(k,_=>d({post_filter:_}));s.push({id:`path-${u}-post`,label:`PATH-${u+1} Post`,block:"path",bindings:[w.type,w.freq,w.q]})}}{const u=n.shape_filter??lt("Lowpass",1e3,.7),d=rs(u,m=>e({shape_filter:m}));s.push({id:"fx-shape",label:"FX Shape",block:"fx",bindings:[d.type,d.freq,d.q]})}s.push({id:"fx-drive",label:"FX Drive",block:"fx",bindings:[as("K1","half rect",()=>n.half_rect,u=>e({half_rect:u})),as("K2","hard clip",()=>n.hard_clip!==null,u=>e({hard_clip:u?[1,.8]:null})),de("K3","hc drv",1,10,.01,()=>n.hard_clip?.[0]??1,u=>{const d=n.hard_clip??[1,.8];e({hard_clip:[u,d[1]]})}),de("K4","hc thr",.1,1,.01,()=>n.hard_clip?.[1]??.8,u=>{const d=n.hard_clip??[1,.8];e({hard_clip:[d[0],u]})}),de("F1","clip",0,10,.01,()=>n.soft_clip??0,u=>e({soft_clip:u>0?u:null})),de("F2","fold",0,10,.01,()=>n.wavefold??0,u=>e({wavefold:u>0?u:null})),de("F3","crush",0,16,1,()=>n.bit_crush??0,u=>e({bit_crush:u>0?u:null})),de("F4","decim",0,32,1,()=>n.decimate??0,u=>e({decimate:u>0?u:null}))]});{const u={engine:"Moog",mode:"Lowpass",cutoff:80,resonance:0,env_amt:0,lfo_amt:0,lfo2_amt:0,velo_amt:0,key_track:0,morph:0,morph_lfo_amt:0,morph_lfo2_amt:0,morph_env_amt:0},d=n.main_filter??u,m=["Moog","Svf"],y=["Lowpass","Highpass","Bandpass"];s.push({id:"vcf",label:"VCF Filter",block:"vcf",bindings:[At("K1","mode",y,()=>d.mode,k=>{e({main_filter:{...d,mode:k}})}),At("K2","engine",m,()=>d.engine??"Moog",k=>{e({main_filter:{...d,engine:k}})}),de("K3","env",-135,135,.1,()=>d.env_amt,k=>e({main_filter:{...d,env_amt:k}})),de("K4","lfo",-135,135,.1,()=>d.lfo_amt,k=>e({main_filter:{...d,lfo_amt:k}})),de("K5","morph",0,1,.01,()=>d.morph??0,k=>e({main_filter:{...d,morph:k}})),de("K6","velo",-135,135,.1,()=>d.velo_amt,k=>e({main_filter:{...d,velo_amt:k}})),de("K7","key",-2,2,.01,()=>d.key_track,k=>e({main_filter:{...d,key_track:k}})),de("F1","cutoff",0,135,.1,()=>d.cutoff,k=>e({main_filter:{...d,cutoff:k}})),de("F2","reso",0,1,.01,()=>d.resonance,k=>e({main_filter:{...d,resonance:k}}))]})}{const u=n.amp_env??it("ADSR"),d=ss(u,m=>{if("__type__"in m){e({amp_env:it(m.__type__)});return}const y=Xt(u),k=u[y];e({amp_env:{[y]:{...k,...m}}})});s.push({id:"amp-env",label:"AMP Env",block:"amp",bindings:[d.type,...d.faders]})}s.push({id:"amp-level",label:"AMP Level",block:"amp",bindings:[de("F1","amp",0,2,.01,()=>n.amp,u=>e({amp:u})),de("F2","velo",0,1,.01,()=>n.amp_velo_amt,u=>e({amp_velo_amt:u})),de("F3","vol lfo",0,1,.01,()=>n.vol_lfo_amt,u=>e({vol_lfo_amt:u})),de("F4","vol lfo2",0,1,.01,()=>n.vol_lfo2_amt,u=>e({vol_lfo2_amt:u}))]});{const u=n.post_filter??lt("Lowpass",1e3,.7),d=rs(u,m=>e({post_filter:m}));s.push({id:"post-filter",label:"POST Filter",block:"post",bindings:[d.type,d.freq,d.q]})}return s.push({id:"post-pan",label:"POST Pan+Uni",block:"post",bindings:[de("K1","voices",1,8,1,()=>n.unison,u=>e({unison:u})),de("K2","detune",0,1,.001,()=>n.unison_detune,u=>e({unison_detune:u})),de("K3","spread",0,1,.01,()=>n.unison_spread,u=>e({unison_spread:u})),de("K4","porta",0,500,1,()=>n.portamento,u=>e({portamento:u})),de("F1","pan",-1,1,.01,()=>n.pan,u=>e({pan:u})),de("F2","pan lfo",0,1,.01,()=>n.pan_lfo_amt,u=>e({pan_lfo_amt:u})),de("F3","pan lfo2",0,1,.01,()=>n.pan_lfo2_amt,u=>e({pan_lfo2_amt:u}))]}),s}var rm=D('<input class="rename-input svelte-1yx9lnw"/> <button class="header-btn ok svelte-1yx9lnw">ok</button> <button class="header-btn cancel svelte-1yx9lnw">esc</button>',1),im=D('<span class="selected-label svelte-1yx9lnw"> </span> <button class="header-btn svelte-1yx9lnw" title="Rename instrument">&#9998;</button> <button class="header-btn svelte-1yx9lnw" title="Duplicate instrument">&#10697;</button>',1),om=D('<!> <button class="header-btn new svelte-1yx9lnw" title="New instrument">+ New</button>',1),lm=D('<button class="header-btn midi svelte-1yx9lnw"> </button>'),cm=D('<span class="region-slot svelte-1yx9lnw"> </span>'),um=D('<span class="region-slot svelte-1yx9lnw"> </span>'),dm=D('<div class="region-bar svelte-1yx9lnw"><button class="region-nav svelte-1yx9lnw">&#9664;</button> <span class="region-label svelte-1yx9lnw"> </span> <button class="region-nav svelte-1yx9lnw">&#9654;</button> <span class="region-slots svelte-1yx9lnw"><!> <!></span></div>'),fm=D('<!> <div class="header-right svelte-1yx9lnw"><!> <!></div>',1),mm=D('<pre class="error svelte-1yx9lnw"> </pre>'),pm=D('<p class="placeholder svelte-1yx9lnw">Loading...</p>'),hm=D('<p class="placeholder svelte-1yx9lnw">Select an instrument to edit.</p>'),vm=D('<button class="learn-btn svelte-1yx9lnw">Skip Pads</button>'),_m=D('<div class="learn-overlay svelte-1yx9lnw"><div class="learn-dialog svelte-1yx9lnw"><h3 class="svelte-1yx9lnw">MIDI Learn</h3> <p class="learn-prompt svelte-1yx9lnw"> </p> <div class="learn-progress svelte-1yx9lnw"><span>Encoder</span> <span>Knobs</span> <span>Faders</span> <span>Pads</span></div> <div class="learn-actions svelte-1yx9lnw"><!> <button class="learn-btn cancel svelte-1yx9lnw">Cancel</button></div></div></div>'),gm=D('<div class="detail-panel svelte-1yx9lnw"><div class="detail-scaler svelte-1yx9lnw"><!></div></div> <div class="bottom-section svelte-1yx9lnw"><!> <div class="live-controls svelte-1yx9lnw"><!> <!></div></div> <!>',1),bm=D('<div class="panel svelte-1yx9lnw"><div class="top-section svelte-1yx9lnw"><div class="header svelte-1yx9lnw"><div class="header-left svelte-1yx9lnw"><span class="title svelte-1yx9lnw">Instrument</span> <!></div> <!></div> <!> <!></div> <!></div>');function km(n,e){ye(e,!0);let a=H(_n([])),r=E(()=>X.selectedInstrument),s=H(null),i=H(4),o=H(null),c=H(null),l=H(!1),f=!1,u=H(!1),d=H(""),m=H("osc"),y=H(null),k=H(_n(new Set)),w=H(!1),_=!1,R=H(void 0),F=H(void 0),I=H(1);He(()=>{if(!t(R)||!t(F))return;const K=new ResizeObserver(()=>{if(!t(R)||!t(F))return;const ie=t(R).clientWidth,Ae=t(R).clientHeight,Ge=t(F).scrollWidth,Y=t(F).scrollHeight;Ge>0&&Y>0&&h(I,Math.min(ie/Ge,Ae/Y,2)*.92)});return K.observe(t(R)),K.observe(t(F)),()=>K.disconnect()});const C={KeyZ:0,KeyS:1,KeyX:2,KeyD:3,KeyC:4,KeyV:5,KeyG:6,KeyB:7,KeyH:8,KeyN:9,KeyJ:10,KeyM:11},S={KeyQ:0,Digit2:1,KeyW:2,Digit3:3,KeyE:4,KeyR:5,Digit5:6,KeyT:7,Digit6:8,KeyY:9,Digit7:10,KeyU:11};He(()=>{X.revision,Ot(()=>ee())}),He(()=>{const K=t(r);X.revision,K?Ot(()=>N(K)):(h(s,null),h(y,null),h(o,null))}),He(()=>(window.addEventListener("keydown",z),window.addEventListener("keyup",j),()=>{window.removeEventListener("keydown",z),window.removeEventListener("keyup",j)})),He(()=>{if(t(s))return Os.init({onNoteDown(K,ie,Ae){Ae===10?mn.handlePad(K):W(K,ie)},onNoteUp(K,ie){T(K)},onCC(K,ie,Ae){mn.handleCC(K,ie,Ae)}}),()=>Os.destroy()}),He(()=>{if(!t(s))return;const K=sm(t(s),ce,ge,se);Ot(()=>mn.setRegions(K))});let b=H(-1),q=H(-1);He(()=>{const K=mn.currentRegion;if(K){if(Ot(()=>{h(m,K.block,!0)}),K.block==="osc"){const ie=K.id.match(/^osc-(\d+)$/);h(b,ie?parseInt(ie[1]):K.id==="osc-feedback"?0:K.id==="osc-interact"?1:-1,!0)}if(K.block==="path"){const ie=K.id.match(/^path-(\d+)-/);h(q,ie?parseInt(ie[1]):-1,!0)}}});function z(K){if(K.repeat||K.target instanceof HTMLInputElement||K.target instanceof HTMLTextAreaElement||K.target instanceof HTMLSelectElement||!t(s))return;if(K.code==="Digit1"){M();return}const ie=C[K.code];if(ie!==void 0){const Ge=(t(i)+1)*12+ie;W(Ge);return}const Ae=S[K.code];if(Ae!==void 0){const Ge=(t(i)+2)*12+Ae;W(Ge);return}}function j(K){if(K.target instanceof HTMLInputElement||K.target instanceof HTMLTextAreaElement||K.target instanceof HTMLSelectElement||!t(s))return;const ie=C[K.code];if(ie!==void 0){const Ge=(t(i)+1)*12+ie;T(Ge);return}const Ae=S[K.code];if(Ae!==void 0){const Ge=(t(i)+2)*12+Ae;T(Ge);return}}async function O(){_||(await e.bridge.init(),await e.bridge.resume(),_=!0)}async function W(K,ie=100){await O(),e.bridge.liveKeyDown(K,ie),h(k,new Set([...t(k),K]),!0)}function T(K){e.bridge.liveKeyUp(K);const ie=new Set(t(k));ie.delete(K),h(k,ie,!0)}async function M(){await O(),e.bridge.liveTrigger()}async function L(K=!1){t(s)&&(await O(),K?e.bridge.liveSetConfig(JSON.stringify(t(s))):e.bridge.liveUpdateConfig(JSON.stringify(t(s))))}async function V(){!t(o)?.pattern||!t(r)||(await O(),e.bridge.liveLoadDemo(X.text,t(r),JSON.stringify(t(o))),h(w,!0),Mn.playing=!0)}function te(){e.bridge.liveStopDemo(),h(w,!1),Mn.playing=!1}He(()=>(Mn.play=V,Mn.stop=te,()=>{Mn.play=null,Mn.stop=null,Mn.playing=!1}));function $(K){h(o,K,!0),ne()}async function ee(){try{const K=await oo(X.text);h(a,[...new Set(K)],!0)}catch{h(a,[],!0)}}async function N(K){h(l,!0),h(c,null);try{f=!0;const ie=await Ac(X.text,K);h(s,ie.voice_config,!0),h(i,ie.octave,!0),h(o,ie.demo??null,!0),h(y,await Jr(ie.voice_config),!0),L(!0)}catch(ie){h(c,ie instanceof Error?ie.message:String(ie),!0),h(s,null),h(y,null),h(o,null)}finally{h(l,!1),f=!1}}async function ne(){if(!(!t(s)||!t(r)||f))try{let K=await Tc(t(s));t(i)!==4&&(K=`octave = ${t(i)}
${K}`),t(o)?.pattern&&(K+=`
[demo]
`,K+=`pattern = ${JSON.stringify(t(o).pattern)}
`,t(o).bpm!=null&&(K+=`bpm = ${t(o).bpm}
`),t(o).scale&&(K+=`scale = ${JSON.stringify(t(o).scale)}
`),t(o).root&&(K+=`root = ${JSON.stringify(t(o).root)}
`)),X.replaceSectionContent("instrument/"+t(r),K),h(y,await Jr(t(s)),!0),L()}catch(K){h(c,K instanceof Error?K.message:String(K),!0)}}function ce(K){t(s)&&(h(s,{...t(s),...K},!0),ne())}function ge(K,ie){if(!t(s))return;const Ae=[...t(s).oscs];Ae[K]=ie,h(s,{...t(s),oscs:Ae},!0),ne()}function se(K,ie){if(!t(s))return;const Ae=[...t(s).paths];Ae[K]=ie,h(s,{...t(s),paths:Ae},!0),ne()}function pe(){if(!t(s))return 0;let K=0;for(let ie=0;ie<t(s).oscs.length;ie++)t(s).oscs[ie]!==null&&(K=ie+1);return Math.max(K,2)}function Ve(){const K=new Set(t(a));let ie=1;for(;K.has(`inst_${ie}`);)ie++;const Ae=`inst_${ie}`;X.addSection("instrument/"+Ae,`octave = 4

`),X.selectedInstrument=Ae}function qe(){t(r)&&(h(d,t(r),!0),h(u,!0))}function Te(){if(!t(r)||!t(d).trim()){h(u,!1);return}const K=t(d).trim(),ie=t(r);if(K===ie){h(u,!1);return}X.renameSection("instrument/"+ie,"instrument/"+K),X.replaceAllInUserText(`instrument ${ie}`,`instrument ${K}`),X.selectedInstrument=K,h(u,!1)}function xe(){h(u,!1)}function Fe(){if(!t(r))return;const K=X.getSectionContent("instrument/"+t(r));if(K===null)return;const ie=new Set(t(a));let Ae=`${t(r)}_copy`,Ge=2;for(;ie.has(Ae);)Ae=`${t(r)}_copy_${Ge}`,Ge++;X.addSection("instrument/"+Ae,K),X.selectedInstrument=Ae}var Qe=bm(),nn=x(Qe),kn=x(nn),Xn=x(kn),qn=v(x(Xn),2);{var on=K=>{var ie=rm(),Ae=De(ie),Ge=v(Ae,2),Y=v(Ge,2);B("keydown",Ae,oe=>{oe.key==="Enter"&&Te(),oe.key==="Escape"&&xe()}),Zn(Ae,()=>t(d),oe=>h(d,oe)),B("click",Ge,Te),B("click",Y,xe),P(K,ie)},Pn=K=>{var ie=om(),Ae=De(ie);{var Ge=oe=>{var be=im(),Me=De(be),Re=x(Me),Ee=v(Me,2),un=v(Ee,2);ae(()=>Pe(Re,t(r))),B("click",Ee,qe),B("click",un,Fe),P(oe,be)};J(Ae,oe=>{t(r)&&oe(Ge)})}var Y=v(Ae,2);B("click",Y,Ve),P(K,ie)};J(qn,K=>{t(u)?K(on):K(Pn,!1)})}var Kt=v(Xn,2);{var Wt=K=>{var ie=fm(),Ae=De(ie);Ed(Ae,{get activity(){return t(y)},get selected(){return t(m)},onselect:Re=>{h(m,Re,!0),mn.jumpToBlock(Re)}});var Ge=v(Ae,2),Y=x(Ge);{var oe=Re=>{var Ee=lm(),un=x(Ee);ae(()=>{en(Ee,"title",mn.hasCcMap?"Re-learn MIDI CCs":"Setup MIDI CCs"),Pe(un,mn.hasCcMap?"Re-learn MIDI":"Setup MIDI")}),B("click",Ee,()=>mn.startLearn()),P(Re,Ee)};J(Y,Re=>{Os.inputs.length>0&&Re(oe)})}var be=v(Y,2);{var Me=Re=>{const Ee=E(()=>mn.currentRegion),un=E(()=>t(Ee)?.bindings??[]),zn=E(()=>t(un).filter(Ne=>Ne.slot.startsWith("K"))),Nn=E(()=>t(un).filter(Ne=>Ne.slot.startsWith("F")));var tn=dm(),dn=x(tn),he=v(dn,2),ln=x(he),An=v(he,2),an=v(An,2),Ce=x(an);{var fe=Ne=>{var Gn=cm(),p=x(Gn);ae(g=>Pe(p,`K[${g??""}]`),[()=>t(zn).map(g=>g.label).join(" ")]),P(Ne,Gn)};J(Ce,Ne=>{t(zn).length>0&&Ne(fe)})}var rn=v(Ce,2);{var Cn=Ne=>{var Gn=um(),p=x(Gn);ae(g=>Pe(p,`F[${g??""}]`),[()=>t(Nn).map(g=>g.label).join(" ")]),P(Ne,Gn)};J(rn,Ne=>{t(Nn).length>0&&Ne(Cn)})}ae(()=>Pe(ln,t(Ee)?.label??"")),Z("mouseenter",tn,()=>le.set("midi-region-bar")),B("click",dn,()=>mn.navigateRegion(-1)),B("click",An,()=>mn.navigateRegion(1)),P(Re,tn)};J(be,Re=>{mn.regions.length>0&&mn.hasCcMap&&Re(Me)})}P(K,ie)};J(Kt,K=>{t(s)&&K(Wt)})}var Ut=v(kn,2);{var aa=K=>{var ie=mm(),Ae=x(ie);ae(()=>Pe(Ae,t(c))),P(K,ie)};J(Ut,K=>{t(c)&&K(aa)})}var Qt=v(Ut,2);{var qt=K=>{var ie=pm();P(K,ie)},sa=K=>{var ie=hm();P(K,ie)};J(Qt,K=>{t(l)?K(qt):t(r)||K(sa,1)})}var pt=v(nn,2);{var nt=K=>{var ie=gm(),Ae=De(ie),Ge=x(Ae);let Y;var oe=x(Ge);{var be=fe=>{af(fe,{get config(){return t(s)},get activity(){return t(y)},updateConfig:ce})},Me=fe=>{_f(fe,{get config(){return t(s)},get activity(){return t(y)},setOsc:ge,updateConfig:ce,get focusTab(){return t(b)}})},Re=fe=>{{let rn=E(pe);Pf(fe,{get config(){return t(s)},get activity(){return t(y)},setPath:se,get oscCount(){return t(rn)},get focusTab(){return t(q)}})}},Ee=fe=>{qf(fe,{get config(){return t(s)},updateConfig:ce})},un=fe=>{Of(fe,{get config(){return t(s)},get activity(){return t(y)},updateConfig:ce})},zn=fe=>{If(fe,{get config(){return t(s)},get activity(){return t(y)},updateConfig:ce})},Nn=fe=>{Vf(fe,{get config(){return t(s)},updateConfig:ce})};J(oe,fe=>{t(m)==="mod"?fe(be):t(m)==="osc"?fe(Me,1):t(m)==="path"?fe(Re,2):t(m)==="fx"?fe(Ee,3):t(m)==="vcf"?fe(un,4):t(m)==="amp"?fe(zn,5):t(m)==="post"&&fe(Nn,6)})}jt(Ge,fe=>h(F,fe),()=>t(F)),jt(Ae,fe=>h(R,fe),()=>t(R));var tn=v(Ae,2),dn=x(tn);Yf(dn,{get demo(){return t(o)},onchange:$,get octave(){return t(i)},onoctavechange:fe=>{h(i,fe,!0),ne()}});var he=v(dn,2),ln=x(he);Zf(ln,{onhit:M});var An=v(ln,2);Uf(An,{get octave(){return t(i)},onkeydown:W,onkeyup:T,get activeKeys(){return t(k)}});var an=v(tn,2);{var Ce=fe=>{var rn=_m(),Cn=x(rn),Ne=v(x(Cn),2),Gn=x(Ne),p=v(Ne,2),g=x(p);let A;var G=v(g,2);let U;var Q=v(G,2);let re;var ue=v(Q,2);let ke;var Ie=v(p,2),Ke=x(Ie);{var Kn=yn=>{var Wn=vm();B("click",Wn,()=>mn.skipPads()),P(yn,Wn)};J(Ke,yn=>{mn.learnStep.phase==="pads"&&yn(Kn)})}var gn=v(Ke,2);ae(()=>{Pe(Gn,mn.learnPrompt),A=ve(g,1,"learn-phase svelte-1yx9lnw",null,A,{active:mn.learnStep.phase==="encoder"}),U=ve(G,1,"learn-phase svelte-1yx9lnw",null,U,{active:mn.learnStep.phase==="knobs"}),re=ve(Q,1,"learn-phase svelte-1yx9lnw",null,re,{active:mn.learnStep.phase==="faders"}),ke=ve(ue,1,"learn-phase svelte-1yx9lnw",null,ke,{active:mn.learnStep.phase==="pads"})}),B("click",gn,()=>mn.cancelLearn()),P(fe,rn)};J(an,fe=>{mn.learnStep&&fe(Ce)})}ae(()=>Y=$e(Ge,"",Y,{transform:`scale(${t(I)??""})`})),P(K,ie)};J(pt,K=>{t(s)&&K(nt)})}Z("mouseenter",kn,()=>le.set("instrument-header")),P(n,Qe),we()}Ye(["keydown","click"]);var ym=D('<button class="io-btn svelte-1uk0njm">Import</button> <button class="io-btn svelte-1uk0njm">Export</button>',1),wm=D('<textarea spellcheck="false" placeholder="User overrides appear here..." class="svelte-1uk0njm"></textarea>'),xm=D('<textarea readonly="" spellcheck="false" class="readonly svelte-1uk0njm"></textarea>'),Sm=D('<textarea readonly="" spellcheck="false" class="readonly svelte-1uk0njm"></textarea>'),Pm=D('<div class="seqn-editor svelte-1uk0njm"><div class="header svelte-1uk0njm"><div class="tabs svelte-1uk0njm"><button>User</button> <button>Library</button> <button>Merged</button></div> <div class="actions svelte-1uk0njm"><!> <button class="svelte-1uk0njm">Reload</button> <button class="reset-btn svelte-1uk0njm">Reset User</button></div></div> <!></div>');function Am(n,e){ye(e,!0);let a=H("user");function r(){X.reload()}function s(T){const M=T.target;X.setUserTextRaw(M.value)}function i(){confirm("Clear all user data? Library entries will remain.")&&X.resetUser()}function o(){const T=new Blob([X.userText],{type:"text/plain"}),M=URL.createObjectURL(T),L=document.createElement("a");L.href=M,L.download="user.tdb",L.click(),URL.revokeObjectURL(M)}function c(T){const M=new Map,L=/^## (.+)$/gm;let V,te=null,$=0;for(;(V=L.exec(T))!==null;)te!==null&&M.set(te,T.slice($,V.index).trimEnd()),te=V[1],$=V.index+V[0].length+1;return te!==null&&M.set(te,T.slice($).trimEnd()),M}function l(T){const M=[];for(const[L,V]of T)M.push(`## ${L}
${V}`);return M.join(`

`)+`
`}function f(){const T=document.createElement("input");T.type="file",T.accept=".tdb,.txt",T.onchange=()=>{const M=T.files?.[0];M&&M.text().then(L=>{const V=c(L);if(V.size===0)return;const te=c(X.userText),$=[],ee=[],N=[];for(const ge of V.keys())te.has(ge)?te.get(ge)===V.get(ge)?ee.push(ge):N.push(ge):$.push(ge);const ne=[];if($.length&&ne.push(`${$.length} new`),ee.length&&ne.push(`${ee.length} unchanged`),N.length&&ne.push(`${N.length} overwritten: ${N.join(", ")}`),N.length&&!confirm(`Merge ${M.name}?

${ne.join(`
`)}`))return;const ce=new Map(te);for(const[ge,se]of V)ce.set(ge,se);X.setUserTextRaw(l(ce)),X.reload()})},T.click()}var u=Pm(),d=x(u),m=x(d),y=x(m);let k;var w=v(y,2);let _;var R=v(w,2);let F;var I=v(m,2),C=x(I);{var S=T=>{var M=ym(),L=De(M),V=v(L,2);ae(()=>V.disabled=!X.userText),B("click",L,f),B("click",V,o),P(T,M)};J(C,T=>{t(a)==="user"&&T(S)})}var b=v(C,2),q=v(b,2),z=v(d,2);{var j=T=>{var M=wm();ae(()=>na(M,X.userText)),B("input",M,s),P(T,M)},O=T=>{var M=xm();ae(()=>na(M,X.libraryText)),P(T,M)},W=T=>{var M=Sm();ae(()=>na(M,X.text)),P(T,M)};J(z,T=>{t(a)==="user"?T(j):t(a)==="library"?T(O,1):T(W,!1)})}ae(()=>{k=ve(y,1,"tab svelte-1uk0njm",null,k,{active:t(a)==="user"}),_=ve(w,1,"tab svelte-1uk0njm",null,_,{active:t(a)==="library"}),F=ve(R,1,"tab svelte-1uk0njm",null,F,{active:t(a)==="merged"})}),Z("mouseenter",u,()=>le.set("seqn-editor")),B("click",y,()=>{h(a,"user")}),B("click",w,()=>{h(a,"library")}),B("click",R,()=>{h(a,"merged")}),B("click",b,r),Z("mouseenter",b,()=>le.set("reload-button")),B("click",q,i),P(n,u),we()}Ye(["click","input"]);function kr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var ba=kr();function Po(n){ba=n}var ia={exec:()=>null};function ze(n,e=""){let a=typeof n=="string"?n:n.source,r={replace:(s,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(Vn.caret,"$1"),a=a.replace(s,o),r},getRegex:()=>new RegExp(a,e)};return r}var Tm=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Vn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}>`)},Dm=/^(?:[ \t]*(?:\n|$))+/,Rm=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,qm=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,$a=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Cm=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,yr=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Ao=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,To=ze(Ao).replace(/bull/g,yr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Lm=ze(Ao).replace(/bull/g,yr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),wr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Mm=/^[^\n]+/,xr=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Em=ze(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",xr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Fm=ze(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,yr).getRegex(),Rs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Sr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Om=ze("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Sr).replace("tag",Rs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Do=ze(wr).replace("hr",$a).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rs).getRegex(),zm=ze(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Do).getRegex(),Pr={blockquote:zm,code:Rm,def:Em,fences:qm,heading:Cm,hr:$a,html:Om,lheading:To,list:Fm,newline:Dm,paragraph:Do,table:ia,text:Mm},ri=ze("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",$a).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rs).getRegex(),Nm={...Pr,lheading:Lm,table:ri,paragraph:ze(wr).replace("hr",$a).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ri).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rs).getRegex()},Im={...Pr,html:ze(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Sr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ia,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ze(wr).replace("hr",$a).replace("heading",` *#{1,6} *[^
]`).replace("lheading",To).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},jm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Bm=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ro=/^( {2,}|\\)\n(?!\s*$)/,Hm=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,qs=/[\p{P}\p{S}]/u,Ar=/[\s\p{P}\p{S}]/u,qo=/[^\s\p{P}\p{S}]/u,Vm=ze(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ar).getRegex(),Co=/(?!~)[\p{P}\p{S}]/u,Gm=/(?!~)[\s\p{P}\p{S}]/u,Km=/(?:[^\s\p{P}\p{S}]|~)/u,Lo=/(?![*_])[\p{P}\p{S}]/u,Wm=/(?![*_])[\s\p{P}\p{S}]/u,Um=/(?:[^\s\p{P}\p{S}]|[*_])/u,Qm=ze(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Tm?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Mo=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Zm=ze(Mo,"u").replace(/punct/g,qs).getRegex(),Jm=ze(Mo,"u").replace(/punct/g,Co).getRegex(),Eo="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Xm=ze(Eo,"gu").replace(/notPunctSpace/g,qo).replace(/punctSpace/g,Ar).replace(/punct/g,qs).getRegex(),Ym=ze(Eo,"gu").replace(/notPunctSpace/g,Km).replace(/punctSpace/g,Gm).replace(/punct/g,Co).getRegex(),$m=ze("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,qo).replace(/punctSpace/g,Ar).replace(/punct/g,qs).getRegex(),ep=ze(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Lo).getRegex(),np="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",tp=ze(np,"gu").replace(/notPunctSpace/g,Um).replace(/punctSpace/g,Wm).replace(/punct/g,Lo).getRegex(),ap=ze(/\\(punct)/,"gu").replace(/punct/g,qs).getRegex(),sp=ze(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),rp=ze(Sr).replace("(?:-->|$)","-->").getRegex(),ip=ze("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",rp).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),gs=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,op=ze(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",gs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Fo=ze(/^!?\[(label)\]\[(ref)\]/).replace("label",gs).replace("ref",xr).getRegex(),Oo=ze(/^!?\[(ref)\](?:\[\])?/).replace("ref",xr).getRegex(),lp=ze("reflink|nolink(?!\\()","g").replace("reflink",Fo).replace("nolink",Oo).getRegex(),ii=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Tr={_backpedal:ia,anyPunctuation:ap,autolink:sp,blockSkip:Qm,br:Ro,code:Bm,del:ia,delLDelim:ia,delRDelim:ia,emStrongLDelim:Zm,emStrongRDelimAst:Xm,emStrongRDelimUnd:$m,escape:jm,link:op,nolink:Oo,punctuation:Vm,reflink:Fo,reflinkSearch:lp,tag:ip,text:Hm,url:ia},cp={...Tr,link:ze(/^!?\[(label)\]\((.*?)\)/).replace("label",gs).getRegex(),reflink:ze(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",gs).getRegex()},tr={...Tr,emStrongRDelimAst:Ym,emStrongLDelim:Jm,delLDelim:ep,delRDelim:tp,url:ze(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ii).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ze(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ii).getRegex()},up={...tr,br:ze(Ro).replace("{2,}","*").getRegex(),text:ze(tr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},is={normal:Pr,gfm:Nm,pedantic:Im},za={normal:Tr,gfm:tr,breaks:up,pedantic:cp},dp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},oi=n=>dp[n];function Pt(n,e){if(e){if(Vn.escapeTest.test(n))return n.replace(Vn.escapeReplace,oi)}else if(Vn.escapeTestNoEncode.test(n))return n.replace(Vn.escapeReplaceNoEncode,oi);return n}function li(n){try{n=encodeURI(n).replace(Vn.percentDecode,"%")}catch{return null}return n}function ci(n,e){let a=n.replace(Vn.findPipe,(i,o,c)=>{let l=!1,f=o;for(;--f>=0&&c[f]==="\\";)l=!l;return l?"|":" |"}),r=a.split(Vn.splitPipe),s=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(Vn.slashPipe,"|");return r}function Na(n,e,a){let r=n.length;if(r===0)return"";let s=0;for(;s<r&&n.charAt(r-s-1)===e;)s++;return n.slice(0,r-s)}function fp(n,e){if(n.indexOf(e[1])===-1)return-1;let a=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])a++;else if(n[r]===e[1]&&(a--,a<0))return r;return a>0?-2:-1}function mp(n,e=0){let a=e,r="";for(let s of n)if(s==="	"){let i=4-a%4;r+=" ".repeat(i),a+=i}else r+=s,a++;return r}function ui(n,e,a,r,s){let i=e.href,o=e.title||null,c=n[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;let l={type:n[0].charAt(0)==="!"?"image":"link",raw:a,href:i,title:o,text:c,tokens:r.inlineTokens(c)};return r.state.inLink=!1,l}function pp(n,e,a){let r=n.match(a.other.indentCodeCompensation);if(r===null)return e;let s=r[1];return e.split(`
`).map(i=>{let o=i.match(a.other.beginningSpace);if(o===null)return i;let[c]=o;return c.length>=s.length?i.slice(s.length):i}).join(`
`)}var bs=class{options;rules;lexer;constructor(n){this.options=n||ba}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let a=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?a:Na(a,`
`)}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let a=e[0],r=pp(a,e[3]||"",this.rules);return{type:"code",raw:a,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let a=e[2].trim();if(this.rules.other.endingHash.test(a)){let r=Na(a,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(a=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:a,tokens:this.lexer.inline(a)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:Na(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let a=Na(e[0],`
`).split(`
`),r="",s="",i=[];for(;a.length>0;){let o=!1,c=[],l;for(l=0;l<a.length;l++)if(this.rules.other.blockquoteStart.test(a[l]))c.push(a[l]),o=!0;else if(!o)c.push(a[l]);else break;a=a.slice(l);let f=c.join(`
`),u=f.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${f}`:f,s=s?`${s}
${u}`:u;let d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,i,!0),this.lexer.state.top=d,a.length===0)break;let m=i.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){let y=m,k=y.raw+`
`+a.join(`
`),w=this.blockquote(k);i[i.length-1]=w,r=r.substring(0,r.length-y.raw.length)+w.raw,s=s.substring(0,s.length-y.text.length)+w.text;break}else if(m?.type==="list"){let y=m,k=y.raw+`
`+a.join(`
`),w=this.list(k);i[i.length-1]=w,r=r.substring(0,r.length-m.raw.length)+w.raw,s=s.substring(0,s.length-y.raw.length)+w.raw,a=k.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:s}}}list(n){let e=this.rules.block.list.exec(n);if(e){let a=e[1].trim(),r=a.length>1,s={type:"list",raw:"",ordered:r,start:r?+a.slice(0,-1):"",loose:!1,items:[]};a=r?`\\d{1,9}\\${a.slice(-1)}`:`\\${a}`,this.options.pedantic&&(a=r?a:"[*+-]");let i=this.rules.other.listItemRegex(a),o=!1;for(;n;){let l=!1,f="",u="";if(!(e=i.exec(n))||this.rules.block.hr.test(n))break;f=e[0],n=n.substring(f.length);let d=mp(e[2].split(`
`,1)[0],e[1].length),m=n.split(`
`,1)[0],y=!d.trim(),k=0;if(this.options.pedantic?(k=2,u=d.trimStart()):y?k=e[1].length+1:(k=d.search(this.rules.other.nonSpaceChar),k=k>4?1:k,u=d.slice(k),k+=e[1].length),y&&this.rules.other.blankLine.test(m)&&(f+=m+`
`,n=n.substring(m.length+1),l=!0),!l){let w=this.rules.other.nextBulletRegex(k),_=this.rules.other.hrRegex(k),R=this.rules.other.fencesBeginRegex(k),F=this.rules.other.headingBeginRegex(k),I=this.rules.other.htmlBeginRegex(k),C=this.rules.other.blockquoteBeginRegex(k);for(;n;){let S=n.split(`
`,1)[0],b;if(m=S,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),b=m):b=m.replace(this.rules.other.tabCharGlobal,"    "),R.test(m)||F.test(m)||I.test(m)||C.test(m)||w.test(m)||_.test(m))break;if(b.search(this.rules.other.nonSpaceChar)>=k||!m.trim())u+=`
`+b.slice(k);else{if(y||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||R.test(d)||F.test(d)||_.test(d))break;u+=`
`+m}y=!m.trim(),f+=S+`
`,n=n.substring(S.length+1),d=b.slice(k)}}s.loose||(o?s.loose=!0:this.rules.other.doubleBlankLine.test(f)&&(o=!0)),s.items.push({type:"list_item",raw:f,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),s.raw+=f}let c=s.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let l of s.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}}let f=this.rules.other.listTaskCheckbox.exec(l.raw);if(f){let u={type:"checkbox",raw:f[0]+" ",checked:f[0]!=="[ ]"};l.checked=u.checked,s.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=u.raw+l.tokens[0].raw,l.tokens[0].text=u.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(u)):l.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):l.tokens.unshift(u)}}if(!s.loose){let f=l.tokens.filter(d=>d.type==="space"),u=f.length>0&&f.some(d=>this.rules.other.anyLine.test(d.raw));s.loose=u}}if(s.loose)for(let l of s.items){l.loose=!0;for(let f of l.tokens)f.type==="text"&&(f.type="paragraph")}return s}}html(n){let e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){let e=this.rules.block.def.exec(n);if(e){let a=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:a,raw:e[0],href:r,title:s}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let a=ci(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(a.length===r.length){for(let o of r)this.rules.other.tableAlignRight.test(o)?i.align.push("right"):this.rules.other.tableAlignCenter.test(o)?i.align.push("center"):this.rules.other.tableAlignLeft.test(o)?i.align.push("left"):i.align.push(null);for(let o=0;o<a.length;o++)i.header.push({text:a[o],tokens:this.lexer.inline(a[o]),header:!0,align:i.align[o]});for(let o of s)i.rows.push(ci(o,i.header.length).map((c,l)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:i.align[l]})));return i}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let a=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:a,tokens:this.lexer.inline(a)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let a=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(a)){if(!this.rules.other.endAngleBracket.test(a))return;let i=Na(a.slice(0,-1),"\\");if((a.length-i.length)%2===0)return}else{let i=fp(e[2],"()");if(i===-2)return;if(i>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],s=i[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(a)?r=r.slice(1):r=r.slice(1,-1)),ui(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let a;if((a=this.rules.inline.reflink.exec(n))||(a=this.rules.inline.nolink.exec(n))){let r=(a[2]||a[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){let i=a[0].charAt(0);return{type:"text",raw:i,text:i}}return ui(a,s,a[0],this.lexer,this.rules)}}emStrong(n,e,a=""){let r=this.rules.inline.emStrongLDelim.exec(n);if(!(!r||r[3]&&a.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!a||this.rules.inline.punctuation.exec(a))){let s=[...r[0]].length-1,i,o,c=s,l=0,f=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*n.length+s);(r=f.exec(e))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(o=[...i].length,r[3]||r[4]){c+=o;continue}else if((r[5]||r[6])&&s%3&&!((s+o)%3)){l+=o;continue}if(c-=o,c>0)continue;o=Math.min(o,o+c+l);let u=[...r[0]][0].length,d=n.slice(0,s+r.index+u+o);if(Math.min(s,o)%2){let y=d.slice(1,-1);return{type:"em",raw:d,text:y,tokens:this.lexer.inlineTokens(y)}}let m=d.slice(2,-2);return{type:"strong",raw:d,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let a=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(a),s=this.rules.other.startingSpaceChar.test(a)&&this.rules.other.endingSpaceChar.test(a);return r&&s&&(a=a.substring(1,a.length-1)),{type:"codespan",raw:e[0],text:a}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,a=""){let r=this.rules.inline.delLDelim.exec(n);if(r&&(!r[1]||!a||this.rules.inline.punctuation.exec(a))){let s=[...r[0]].length-1,i,o,c=s,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*n.length+s);(r=l.exec(e))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(o=[...i].length,o!==s))continue;if(r[3]||r[4]){c+=o;continue}if(c-=o,c>0)continue;o=Math.min(o,o+c);let f=[...r[0]][0].length,u=n.slice(0,s+r.index+f+o),d=u.slice(s,-s);return{type:"del",raw:u,text:d,tokens:this.lexer.inlineTokens(d)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let a,r;return e[2]==="@"?(a=e[1],r="mailto:"+a):(a=e[1],r=a),{type:"link",raw:e[0],text:a,href:r,tokens:[{type:"text",raw:a,text:a}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let a,r;if(e[2]==="@")a=e[0],r="mailto:"+a;else{let s;do s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(s!==e[0]);a=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:a,href:r,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let a=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:a}}}},_t=class ar{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ba,this.options.tokenizer=this.options.tokenizer||new bs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let a={other:Vn,block:is.normal,inline:za.normal};this.options.pedantic?(a.block=is.pedantic,a.inline=za.pedantic):this.options.gfm&&(a.block=is.gfm,this.options.breaks?a.inline=za.breaks:a.inline=za.gfm),this.tokenizer.rules=a}static get rules(){return{block:is,inline:za}}static lex(e,a){return new ar(a).lex(e)}static lexInline(e,a){return new ar(a).inlineTokens(e)}lex(e){e=e.replace(Vn.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let a=0;a<this.inlineQueue.length;a++){let r=this.inlineQueue[a];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,a=[],r=!1){for(this.options.pedantic&&(e=e.replace(Vn.tabCharGlobal,"    ").replace(Vn.spaceLine,""));e;){let s;if(this.options.extensions?.block?.some(o=>(s=o.call({lexer:this},e,a))?(e=e.substring(s.raw.length),a.push(s),!0):!1))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);let o=a.at(-1);s.raw.length===1&&o!==void 0?o.raw+=`
`:a.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length);let o=a.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+s.raw,o.text+=`
`+s.text,this.inlineQueue.at(-1).src=o.text):a.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),a.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),a.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),a.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),a.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),a.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),a.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length);let o=a.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+s.raw,o.text+=`
`+s.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},a.push(s));continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),a.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),a.push(s);continue}let i=e;if(this.options.extensions?.startBlock){let o=1/0,c=e.slice(1),l;this.options.extensions.startBlock.forEach(f=>{l=f.call({lexer:this},c),typeof l=="number"&&l>=0&&(o=Math.min(o,l))}),o<1/0&&o>=0&&(i=e.substring(0,o+1))}if(this.state.top&&(s=this.tokenizer.paragraph(i))){let o=a.at(-1);r&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):a.push(s),r=i.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length);let o=a.at(-1);o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):a.push(s);continue}if(e){let o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,a}inline(e,a=[]){return this.inlineQueue.push({src:e,tokens:a}),a}inlineTokens(e,a=[]){let r=e,s=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)l.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)i=s[2]?s[2].length:0,r=r.slice(0,s.index+i)+"["+"a".repeat(s[0].length-i-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let o=!1,c="";for(;e;){o||(c=""),o=!1;let l;if(this.options.extensions?.inline?.some(u=>(l=u.call({lexer:this},e,a))?(e=e.substring(l.raw.length),a.push(l),!0):!1))continue;if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length);let u=a.at(-1);l.type==="text"&&u?.type==="text"?(u.raw+=l.raw,u.text+=l.text):a.push(l);continue}if(l=this.tokenizer.emStrong(e,r,c)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.del(e,r,c)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.autolink(e)){e=e.substring(l.raw.length),a.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e))){e=e.substring(l.raw.length),a.push(l);continue}let f=e;if(this.options.extensions?.startInline){let u=1/0,d=e.slice(1),m;this.options.extensions.startInline.forEach(y=>{m=y.call({lexer:this},d),typeof m=="number"&&m>=0&&(u=Math.min(u,m))}),u<1/0&&u>=0&&(f=e.substring(0,u+1))}if(l=this.tokenizer.inlineText(f)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(c=l.raw.slice(-1)),o=!0;let u=a.at(-1);u?.type==="text"?(u.raw+=l.raw,u.text+=l.text):a.push(l);continue}if(e){let u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return a}},ks=class{options;parser;constructor(n){this.options=n||ba}space(n){return""}code({text:n,lang:e,escaped:a}){let r=(e||"").match(Vn.notSpaceStart)?.[0],s=n.replace(Vn.endingNewline,"")+`
`;return r?'<pre><code class="language-'+Pt(r)+'">'+(a?s:Pt(s,!0))+`</code></pre>
`:"<pre><code>"+(a?s:Pt(s,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,a=n.start,r="";for(let o=0;o<n.items.length;o++){let c=n.items[o];r+=this.listitem(c)}let s=e?"ol":"ul",i=e&&a!==1?' start="'+a+'"':"";return"<"+s+i+`>
`+r+"</"+s+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",a="";for(let s=0;s<n.header.length;s++)a+=this.tablecell(n.header[s]);e+=this.tablerow({text:a});let r="";for(let s=0;s<n.rows.length;s++){let i=n.rows[s];a="";for(let o=0;o<i.length;o++)a+=this.tablecell(i[o]);r+=this.tablerow({text:a})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),a=n.header?"th":"td";return(n.align?`<${a} align="${n.align}">`:`<${a}>`)+e+`</${a}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${Pt(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:a}){let r=this.parser.parseInline(a),s=li(n);if(s===null)return r;n=s;let i='<a href="'+n+'"';return e&&(i+=' title="'+Pt(e)+'"'),i+=">"+r+"</a>",i}image({href:n,title:e,text:a,tokens:r}){r&&(a=this.parser.parseInline(r,this.parser.textRenderer));let s=li(n);if(s===null)return Pt(a);n=s;let i=`<img src="${n}" alt="${Pt(a)}"`;return e&&(i+=` title="${Pt(e)}"`),i+=">",i}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:Pt(n.text)}},Dr=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},gt=class sr{options;renderer;textRenderer;constructor(e){this.options=e||ba,this.options.renderer=this.options.renderer||new ks,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Dr}static parse(e,a){return new sr(a).parse(e)}static parseInline(e,a){return new sr(a).parseInline(e)}parse(e){let a="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let o=s,c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){a+=c||"";continue}}let i=s;switch(i.type){case"space":{a+=this.renderer.space(i);break}case"hr":{a+=this.renderer.hr(i);break}case"heading":{a+=this.renderer.heading(i);break}case"code":{a+=this.renderer.code(i);break}case"table":{a+=this.renderer.table(i);break}case"blockquote":{a+=this.renderer.blockquote(i);break}case"list":{a+=this.renderer.list(i);break}case"checkbox":{a+=this.renderer.checkbox(i);break}case"html":{a+=this.renderer.html(i);break}case"def":{a+=this.renderer.def(i);break}case"paragraph":{a+=this.renderer.paragraph(i);break}case"text":{a+=this.renderer.text(i);break}default:{let o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return a}parseInline(e,a=this.renderer){let r="";for(let s=0;s<e.length;s++){let i=e[s];if(this.options.extensions?.renderers?.[i.type]){let c=this.options.extensions.renderers[i.type].call({parser:this},i);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=c||"";continue}}let o=i;switch(o.type){case"escape":{r+=a.text(o);break}case"html":{r+=a.html(o);break}case"link":{r+=a.link(o);break}case"image":{r+=a.image(o);break}case"checkbox":{r+=a.checkbox(o);break}case"strong":{r+=a.strong(o);break}case"em":{r+=a.em(o);break}case"codespan":{r+=a.codespan(o);break}case"br":{r+=a.br(o);break}case"del":{r+=a.del(o);break}case"text":{r+=a.text(o);break}default:{let c='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}},ja=class{options;block;constructor(n){this.options=n||ba}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?_t.lex:_t.lexInline}provideParser(){return this.block?gt.parse:gt.parseInline}},hp=class{defaults=kr();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=gt;Renderer=ks;TextRenderer=Dr;Lexer=_t;Tokenizer=bs;Hooks=ja;constructor(...n){this.use(...n)}walkTokens(n,e){let a=[];for(let r of n)switch(a=a.concat(e.call(this,r)),r.type){case"table":{let s=r;for(let i of s.header)a=a.concat(this.walkTokens(i.tokens,e));for(let i of s.rows)for(let o of i)a=a.concat(this.walkTokens(o.tokens,e));break}case"list":{let s=r;a=a.concat(this.walkTokens(s.items,e));break}default:{let s=r;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(i=>{let o=s[i].flat(1/0);a=a.concat(this.walkTokens(o,e))}):s.tokens&&(a=a.concat(this.walkTokens(s.tokens,e)))}}return a}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(a=>{let r={...a};if(r.async=this.defaults.async||r.async||!1,a.extensions&&(a.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let i=e.renderers[s.name];i?e.renderers[s.name]=function(...o){let c=s.renderer.apply(this,o);return c===!1&&(c=i.apply(this,o)),c}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[s.level];i?i.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),a.renderer){let s=this.defaults.renderer||new ks(this.defaults);for(let i in a.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let o=i,c=a.renderer[o],l=s[o];s[o]=(...f)=>{let u=c.apply(s,f);return u===!1&&(u=l.apply(s,f)),u||""}}r.renderer=s}if(a.tokenizer){let s=this.defaults.tokenizer||new bs(this.defaults);for(let i in a.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let o=i,c=a.tokenizer[o],l=s[o];s[o]=(...f)=>{let u=c.apply(s,f);return u===!1&&(u=l.apply(s,f)),u}}r.tokenizer=s}if(a.hooks){let s=this.defaults.hooks||new ja;for(let i in a.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let o=i,c=a.hooks[o],l=s[o];ja.passThroughHooks.has(i)?s[o]=f=>{if(this.defaults.async&&ja.passThroughHooksRespectAsync.has(i))return(async()=>{let d=await c.call(s,f);return l.call(s,d)})();let u=c.call(s,f);return l.call(s,u)}:s[o]=(...f)=>{if(this.defaults.async)return(async()=>{let d=await c.apply(s,f);return d===!1&&(d=await l.apply(s,f)),d})();let u=c.apply(s,f);return u===!1&&(u=l.apply(s,f)),u}}r.hooks=s}if(a.walkTokens){let s=this.defaults.walkTokens,i=a.walkTokens;r.walkTokens=function(o){let c=[];return c.push(i.call(this,o)),s&&(c=c.concat(s.call(this,o))),c}}this.defaults={...this.defaults,...r}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return _t.lex(n,e??this.defaults)}parser(n,e){return gt.parse(n,e??this.defaults)}parseMarkdown(n){return(e,a)=>{let r={...a},s={...this.defaults,...r},i=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=n),s.async)return(async()=>{let o=s.hooks?await s.hooks.preprocess(e):e,c=await(s.hooks?await s.hooks.provideLexer():n?_t.lex:_t.lexInline)(o,s),l=s.hooks?await s.hooks.processAllTokens(c):c;s.walkTokens&&await Promise.all(this.walkTokens(l,s.walkTokens));let f=await(s.hooks?await s.hooks.provideParser():n?gt.parse:gt.parseInline)(l,s);return s.hooks?await s.hooks.postprocess(f):f})().catch(i);try{s.hooks&&(e=s.hooks.preprocess(e));let o=(s.hooks?s.hooks.provideLexer():n?_t.lex:_t.lexInline)(e,s);s.hooks&&(o=s.hooks.processAllTokens(o)),s.walkTokens&&this.walkTokens(o,s.walkTokens);let c=(s.hooks?s.hooks.provideParser():n?gt.parse:gt.parseInline)(o,s);return s.hooks&&(c=s.hooks.postprocess(c)),c}catch(o){return i(o)}}}onError(n,e){return a=>{if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let r="<p>An error occurred:</p><pre>"+Pt(a.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(a);throw a}}},va=new hp;function Je(n,e){return va.parse(n,e)}Je.options=Je.setOptions=function(n){return va.setOptions(n),Je.defaults=va.defaults,Po(Je.defaults),Je};Je.getDefaults=kr;Je.defaults=ba;Je.use=function(...n){return va.use(...n),Je.defaults=va.defaults,Po(Je.defaults),Je};Je.walkTokens=function(n,e){return va.walkTokens(n,e)};Je.parseInline=va.parseInline;Je.Parser=gt;Je.parser=gt.parse;Je.Renderer=ks;Je.TextRenderer=Dr;Je.Lexer=_t;Je.lexer=_t.lex;Je.Tokenizer=bs;Je.Hooks=ja;Je.parse=Je;Je.options;Je.setOptions;Je.use;Je.walkTokens;Je.parseInline;gt.parse;_t.lex;const vp=`# DAW Guide

## Getting Started

Get is a web-based music DAW. The synth engine runs as WASM inside your browser -- there is no server, and nothing to install.

### Loading a Song

When the DAW opens you are in **Score** mode. The song sidebar (top-left) lists all available songs. Click a song name to load it. The parts bar and pattern editor populate automatically.

### Playing and Stopping

Use the transport controls in the center of the top bar, or use keyboard shortcuts:

- **Space** -- toggle play / pause
- **Escape** -- stop (resets to the beginning)

Edits made during playback are hot-reloaded automatically. You will hear changes within a fraction of a second without needing to restart.

### Navigating Between Modes

The top bar has three mode tabs:

- **Score** -- arrange songs from parts, clips, and patterns
- **Tone** -- design instrument sounds
- **Source** -- edit the raw SEQN text directly

Click a tab to switch modes. Transport controls and the focus loop display remain visible in all modes.

---

## Modes

### Score

Score mode is a three-zone drill-down layout: **Song** (top), **Part** (middle), **Pattern** (bottom).

#### Song (Zone 1)

The sidebar lists all songs. After selecting a song, the sidebar collapses to show just the selected song name, freeing space for the pattern sidebar below.

The content area shows a **parts bar** -- a horizontal sequence of named part blocks. Each block represents a reference to a part definition. You can:

- Click a part to select it (loads it into Zone 2)
- Drag parts to reorder the sequence
- Click **x** on a part to remove that reference from the sequence
- Click **+** to add a new part
- Click the repeat button to insert another reference to the selected part

Song rename and duplicate controls appear above the parts bar.

#### Part (Zone 2)

Shows the selected part. The header has rename (pencil icon), duplicate, and delete controls.

A gear button toggles between two views:

- **Clip tracks** (default) -- each track is a horizontal row of clips. Clips reference patterns and can be dragged between tracks or repositioned within a track. Click a clip's edit icon to load that pattern into Zone 3.
- **Settings panel** -- part-level settings organized into 6 tabs: Tempo, Chorus, Delay, Reverb, Sidechain, and Master. See [Settings Inheritance](#settings-inheritance) for how these cascade down.

The gear button glows when any settings are actively overridden.

#### Pattern (Zone 3)

The pattern sidebar lists all patterns defined in the selected song. Patterns not used by the active part appear dimmed. The header has rename, duplicate, and "+ New" controls.

Below the header:

- **Group bar** -- groups displayed as clickable blocks. Click to select, drag to reorder, **+** to add a new group.
- **Measure bar** -- numbered measure blocks. Click to select, drag to reorder across all tracks, **+** adds a measure to every track, **x** deletes from every track.
- **Tracks** -- one row per instrument, with drag handles for vertical reordering. Each track shows beat cells for the selected measure.

A gear button on the group toolbar toggles between the track view and a group settings panel (Tone, Arp, Voice, Rhythm tabs). Each track also has its own gear button for track-level settings (Tone, Arp, Voice, Mix, Rhythm tabs).

### Tone

Tone mode is for designing instrument sounds.

The sidebar lists all instruments. The content area shows:

1. **Header row** -- instrument name and management controls (rename, duplicate, + New) on the left; the signal-flow block diagram in the center; MIDI region controls on the right.
2. **Signal flow blocks** -- 7 color-coded blocks representing the synthesis signal chain:
   - **MOD** (purple) -- LFO, pitch envelope (ENV-1), filter envelope (ENV-2)
   - **OSC** (blue) -- up to 6 oscillators with waveform shape, frequency mode, pulse width, and pitch modulation
   - **PATH** (teal) -- up to 3 parallel mix paths with per-oscillator level, biquad filters, and envelopes
   - **FX** (amber) -- shape filter, waveshaper, voice effects (wavefold, bit crush, decimate)
   - **VCF** (green) -- Moog-style filter with cutoff, resonance, and modulation inputs
   - **AMP** (gold) -- amplitude envelope and level controls with velocity and LFO modulation
   - **POST** (slate) -- post filter, pan, and unison (voices, detune, spread)

   Click any block to open its detail panel. Inactive blocks appear at 35% opacity. Cross-block modulation sources appear as small colored pills (e.g. \`[LFO]\`, \`[ENV-2]\`).

3. **Detail panel** -- controls for the selected block. All controls are always visible; disabled ones appear dimmed.
4. **Live preview** (bottom) -- three ways to hear the instrument without playing a song:
   - **Piano keyboard** -- click keys or use your computer keyboard. Lower octave: Z=C, S=C#, X=D, D=D#, C=E, V=F, G=F#, B=G, H=G#, N=A, J=A#, M=B. Upper octave: Q=C, 2=C#, W=D, 3=D#, E=E, R=F, 5=F#, T=G, 6=G#, Y=A, 7=A#, U=B. Supports polyphonic input.
   - **Hit button** -- fires a drum trigger. Press the **1** key as a shortcut.
   - **Demo editor** -- if the instrument defines a \`[demo]\` pattern, it appears here as a loopable mini-sequencer with BPM, scale, and root controls.

   All preview audio runs independently of song playback. Editing parameters while a demo plays reflects changes immediately.

#### MIDI CC Control

Physical MIDI controllers can be mapped to synth parameters. Parameters are organized into regions (named groups of up to 12 bindings: 8 knobs + 4 faders).

- The **encoder** scrolls through regions sequentially
- **Pads 1--7** jump to the first region of each signal-flow block
- Changing region also switches the visible block in the UI (and vice versa -- clicking a block jumps MIDI to it)
- A one-time CC learn flow detects your controller layout and saves it to the browser

The region bar in the header row shows the current region name and a summary of its knob/fader assignments.

### Source

A full-height text editor for direct SEQN notation editing. Click **Reload** to parse your changes and sync them into the visual editors. Changes made in Score or Tone mode are also reflected here.

---

## Transport

The transport controls are always visible in the center of the top bar.

- **Play / Pause** -- toggles between playing and paused. Pausing retains position; resuming continues from the same point.
- **Stop** -- resets to the beginning.
- **Volume** -- master output level.

### Focus Loop

Focus loop lets you loop playback over a specific time region within a song.

**Setting a focus region:**

- Click the **focus button** on any part block in the parts bar to set the focus to that part's time range.

**Adjusting the region:**

- Drag the **green notch** (start) or **orange notch** (end) on the parts bar to move the boundaries. Notches can be dragged across part boundaries.
- Drag notches on individual clip blocks for fine-grained adjustment within a part.
- Edit the start/end time inputs directly in the top bar for precise control.

**Clearing the focus:**

- Click the clear button next to the time inputs in the top bar.

The focus region is preserved across edits and hot-reloads, but cleared when switching songs. When a focus region starts mid-measure, the engine seeks to the exact position so playback begins at the right spot.

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Space | Play / pause |
| Escape | Stop |
| Z--M | Piano lower octave (Tone mode) |
| Q--U | Piano upper octave (Tone mode) |
| 1 | Hit button -- drum trigger (Tone mode) |

---

## Editing Patterns

The pattern editor provides a visual step-sequencer grid for composing rhythms and melodies. For the full notation reference -- beat syntax, automation tracks, inline commands, probability, parameter locks, and more -- see the **Sequencer** tab in the help panel.

Key interactions:

- **Drum entry** -- click a division cell to cycle through rest, hit, and accented hit
- **Tonal entry** -- double-click a division cell to type a note (e.g. \`c4\`, \`e_3\`, \`f#\`)
- **Inline commands** -- displayed as draggable pills; insert at any position via hover-revealed drop zones
- **Automation tracks** -- \`@param: values...\` lines that interpolate between keyframe values
- **Add/remove** -- use the **+** and **x** controls to add or remove beats, divisions, measures, tracks, and groups

---

## Instrument Design

The instrument designer presents a 7-block signal chain modeled after classic analog synthesizer panels. For the full parameter reference -- oscillator shapes, filter modes, envelope types, modulation routing, and all available controls -- see the **Synth** tab in the help panel.

Key concepts:

- **Signal flow**: MOD (modulation sources) feeds into OSC (oscillators), mixed through PATH (parallel paths), shaped by FX (effects) and VCF (filter), scaled by AMP (amplitude), and finalized in POST (pan, unison)
- **Cross-block modulation**: colored SignalRef pills (e.g. \`[LFO]\`, \`[ENV-1]\`) indicate where modulation sources are routed
- **Demo patterns**: instruments can define a \`[demo]\` pattern for auditioning sounds in a loop

---

## Settings Inheritance

Settings in Get follow a **Part > Group > Track** hierarchy.

- **Part settings** (Tempo, Chorus, Delay, Reverb, Sidechain, Master) apply to all groups and tracks within the part.
- **Group settings** (Tone, Arp, Voice, Rhythm) apply to all tracks within the group and inherit from the part.
- **Track settings** (Tone, Arp, Voice, Mix, Rhythm) are the most specific level and inherit from the group.

Values that are inherited (not explicitly set at the current level) appear at **35% opacity**. To override an inherited value, set it directly -- the control becomes fully opaque. To revert an override and restore inheritance, delete the setting.
`,_p=`# SEQN Format Reference

Text-based music sequencer format for the \`gb-apu\` synthesizer. Songs contain pattern definitions and a score that arranges them into a timeline for playback.

---

## Song Structure

A song has three kinds of blocks: **patterns** (musical content), **parts** (playback sections), and a **score** (arrangement).

\`\`\`
pattern intro_drums
  ch: o.o. o.o. o.o. o.o.
  sd: .... o... .... o...
  bd: o... .... o.o. ....

pattern verse_bass
  instrument bass
  octave 3
  legato arco
  *: c. .c c. .c | -- c. g. ..

part intro
  bpm 120
  reverb_size 0.7 reverb_mix 0.3
  intro_drums { times 2 }
  verse_bass

part verse
  bpm 130
  sidechain intro_drums.bd sidechain_amt 0.6
  intro_drums { times 4 }
  verse_bass { times 2 }

score
  intro verse verse
\`\`\`

### Patterns

\`pattern <label>\` introduces a pattern block. The block extends until the next \`pattern\`, \`part\`, \`score\`, or end of section. Pattern content is indented (by convention, 2 spaces).

Within a pattern, \`&\` on its own line separates **track groups**. Group-level settings (\`swing\`, \`accent_pct\`, etc.) and tone settings (\`instrument\`, \`scale\`, \`root\`, etc.) appear before track lines.

### Parts

\`part <label>\` introduces a named part. Each part has:

1. **Settings** -- BPM, effects, sidechain, master chain, and default swing/accent_pct
2. **Automation tracks** (optional) -- \`@param:\` lines before clips for part-level automation
3. **Score tracks** -- lines naming clips (pattern references) to play

Tracks within a part play in parallel. Parts can be reused in the score.

### Score

\`score\` introduces the arrangement. It's a sequence of part names (whitespace-separated). Parts play sequentially in the order listed.

\`\`\`
score
  intro verse verse intro
\`\`\`

### Clips

A clip is a pattern name optionally followed by \`{ key value ... }\`:

\`\`\`
intro_drums                       // play once, full volume
intro_drums { times 2 }          // play twice
intro_drums { times 3 mix 0.8 }  // play 3x at 80% volume
\`\`\`

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| \`times\` | f32 | 1.0 | Number of times to play the pattern |
| \`mix\` | f32 | 1.0 | Volume multiplier (scales trigger levels) |

Multiple clips on one line play sequentially within that track:

\`\`\`
intro_drums { times 3 } fill    // play intro 3x then fill once
\`\`\`

### Built-in Patterns

- **\`gap\`** -- 4 beats of silence at the part's BPM and mixer settings.

---

## Comments

Line comments with \`//\`. A full-line comment is skipped entirely; an inline comment strips everything after \`//\`.

\`\`\`
// Full line comment
pattern drums       // inline comment
ch: o. o. o.        // inline on a track line
\`\`\`

---

## Track Groups

Within a pattern, content is one or more **track groups** separated by \`&\` on its own line. Each group produces one or more measures. Groups are concatenated sequentially into the final pattern.

\`\`\`
pattern main
  swing 55
  ch: o. o. o. o.
  bd: o. .. o. ..
  &
  swing 0
  ch: oo oo oo oo
  bd: o. .o o. .o
\`\`\`

Settings in the first group establish defaults for subsequent groups (except when overridden).

---

## Track Lines

A track line has the form:

\`\`\`
NAME: MEASURE_CONTENT | MEASURE_CONTENT | ...
\`\`\`

**\`NAME\`** is the track designator. Measures are separated by \`|\`.

### Track Designators

- **\`ac\`** -- The **accent track**. Its hits overlay accent markers onto coincident triggers in other tracks. Does not produce sound itself.
- **Any other name** (e.g., \`bd\`, \`sd\`, \`ch\`, \`lead\`, \`*\`) -- A **named track**. The compiler tries to auto-load an instrument matching the track name. The conventional name \`*\` is used for a general-purpose tonal track.

All tracks within a group must have the same number of measures.

---

## Measure Content

A measure is a sequence of **beats** and **commands**, separated by whitespace.

### Beats

A beat is a single whitespace-delimited token containing one or more **divisions**. Each character (or character sequence) is a subdivision of the beat. One division = full beat; two divisions = half each; three = triplets; etc.

| Syntax | Name | Description |
|--------|------|-------------|
| \`o\` | Hit | Trigger (drum) or note onset at accent_level 0 |
| \`x\` | Accent | Trigger at accent_level 1 |
| \`.\` | Rest | Silence; ends any sustained note |
| \`-\` | Sustain | Holds the previous note (no-op for drums) |
| \`C\`-\`B\` | Note | Absolute pitch; starts a new note |
| \`0\`-\`9\` | Degree | Scale degree relative to root/scale |
| \`>\` + note/degree | Accented note | Like Note/Degree but with velocity 127 |
| \`~\` + note/degree | Slide | Changes pitch of active voices without re-triggering |

**Note syntax:** A note letter (\`c\`-\`b\`, case-insensitive), optionally followed by accidentals (\`#\` = sharp, \`_\` = flat, stackable), optionally followed by a single digit for octave override.

Examples:
- \`c\` -- Middle C (octave from context, default 4)
- \`c#\` -- C sharp
- \`e_\` -- E flat
- \`c#5\` -- C sharp in octave 5
- \`f__\` -- F double-flat

**Multi-division tokens** pack multiple events into one beat:

\`\`\`
*: cde .     // three notes in beat 1 (triplet), rest in beat 2
bd: o.o. ..  // four 16th-note subdivisions per beat
ch: oooo oooo oooo oooo  // four 16th hats per beat, four beats
\`\`\`

### Timing

Time is measured in **beats**. Each beat token increments the beat counter. Subdivisions within a beat are evenly spaced: N divisions produce times at \`beat + 0/N, beat + 1/N, ..., beat + (N-1)/N\`.

**Swing** shifts odd-numbered subdivisions within each pair. With \`swing 62\`, in a two-subdivision beat (\`o.\`), the second division moves from 50% to 62% of the beat duration.

**Legato** controls the gap between a note's onset and release. With \`legato 50\`, the release fires at 50% of the distance from note start to the next event (or measure end). Default \`legato 100\` means notes sustain to the next onset or measure boundary.

### Sustain Across Measures

If a note is on at the end of a measure AND the next measure's first division for that track is \`-\` (Sustain), the note rings into the next measure without re-triggering.

\`\`\`
*: c - | - .    // C sustains from measure 1 through beat 1 of measure 2
\`\`\`

### Groove Tables

Groove tables define per-step tick durations in a repeating pattern, providing more flexible timing than simple swing. Each entry is a relative weight -- the time a subdivision occupies is proportional to its weight divided by the sum. The table cycles if shorter than the number of subdivisions.

\`\`\`
groove [66 34]             // shuffle: long-short pattern
groove [8 4 4 8 4 4]       // compound time feel (6/8 style)
groove shuffle              // named preset (equivalent to [66 34])
groove off                  // disable groove, return to swing timing
\`\`\`

Groove can be set at three levels: part setting, group setting, or inline command.

**Swing and groove are mutually exclusive.** Setting \`groove\` resets swing to 50. Setting \`swing\` clears any active groove.

| Preset | Table | Feel |
|--------|-------|------|
| \`shuffle\` | \`[66 34]\` | Standard shuffle |
| \`triplet\` | \`[67 33]\` | Triplet feel |
| \`hard_swing\` | \`[75 25]\` | Heavy swing |
| \`compound\` | \`[8 4 4 8 4 4]\` | 6/8 compound time |

\`\`\`
// Shuffle hi-hats
groove shuffle
ch: oo oo oo oo

// Compound time drums
groove [8 4 4]
ch: ooo ooo ooo ooo
bd: o.. ..o o.. ..o
\`\`\`

### Per-Step Probability

Any active division (hit, accent, note, degree, slide) can have a **probability suffix** \`?N\` where N is 1-99. The event fires only N% of the time on each loop.

\`\`\`
bd: o... o?30. o... o?30.   // ghost kicks at 30%
ch: o?90.o?60. o?90.o?60.   // hi-hats with variation
*: c?80 - d?50 -             // melody notes randomly dropped
\`\`\`

Probability cannot be applied to rests (\`.\`) or sustains (\`-\`). When a note onset is skipped, its corresponding release is also suppressed.

### Per-Step Parameter Locks

Any active division can have **parameter locks** -- per-step overrides that apply only to that single division, then revert. Syntax: \`{key=value}\` immediately after the division character (before any \`?\` probability suffix).

\`\`\`
bd: o{level=0.5} o . .           // first kick at 50% level
sd: .. o{reverb_send=0.8} .. o   // snare with reverb spike on beat 2
*: c{velocity=120} e{velocity=60} g a   // per-note velocity
o{level=0.3,dry_send=0.5} o . .  // multiple parameters
o{level=0.5}?50 o . .            // combined with probability
\`\`\`

**Supported parameters:**

| Parameter | Type | Applies to | Description |
|-----------|------|-----------|-------------|
| \`level\` | f32 | Drums (Trigger) | Override trigger level for this step |
| \`velocity\` | u8 | Tonal (KeyDown) | Override note velocity (0-127) |
| \`dry_send\` | f32 | Both | Override dry bus send level |
| \`chorus_send\` | f32 | Both | Override chorus bus send level |
| \`delay_send\` | f32 | Both | Override delay bus send level |
| \`reverb_send\` | f32 | Both | Override reverb bus send level |

Multiple parameters are separated by commas with no spaces: \`{level=0.5,chorus_send=0.8}\`.

**Level and velocity** locks modify the event directly at compile time. **Send locks** are applied at runtime and revert on the next event for that voice or at the next measure boundary.

### Humanize

Humanize adds controlled randomness to timing, velocity, and level on each loop. The amount (0-100) scales the jitter range. At \`humanize 100\`:

- **Timing**: ~15ms at 120 BPM on note/trigger events
- **Velocity**: +/-10 units on note events (clamped 1-127)
- **Level**: +/-10 units on trigger events (clamped 0-100)

Jitter is recomputed each measure loop so every repetition sounds slightly different.

\`\`\`
humanize 30                   // subtle variation
ch: o o o o
bd: o. .. o. ..
\`\`\`

Humanize can be set at three levels: part setting, group setting, or inline command.

### Strum

Strum offsets onset times across tracks within a group, simulating guitar strumming or harp-like effects. Two settings cooperate:

- **\`strum <ms>\`** -- Group/part-level setting controlling the delay in milliseconds between each strum step.
- **\`strum_idx <n>\`** -- Per-track opt-in setting assigning a position in the strum order (0-based). Tracks without \`strum_idx\` are unaffected.

Each track's notes are delayed by \`strum_idx * strum_ms * bpm / 60000\` beats. A strum of 20ms at 120 BPM offsets each step by 0.4 beats.

\`\`\`
strum 30
strum_idx 0
a: c e g | c e g .
strum_idx 1
b: c e g | c e g .
strum_idx 2
c: c e g | c e g .
\`\`\`

Track \`a\` plays first, \`b\` 30ms later, \`c\` 60ms after \`a\`. Tracks without \`strum_idx\` play on the grid.

**Humanize interaction:** Notes at the same original time across strum-participating tracks share the same timing jitter, keeping the strum shape intact while the chord drifts naturally.

Strum can be set at three levels: part setting, group setting, or inline command. \`strum_idx\` can be set as a tone setting or inline. Use \`strum_idx off\` to remove a track from the strum.

---

## Settings Reference

Settings are divided into three scoping levels.

### Part Settings

Control playback tempo, effects, and mixer. Specified in a \`part\` block before clip lines.

| Keyword | Type | Default | Description |
|---------|------|---------|-------------|
| \`bpm\` | f32 | 120.0 | Beats per minute |
| \`swing\` | f32 | 50.0 | Default swing for patterns in this part |
| \`accent_pct\` | f32 | 20.0 | Default accent percentage |
| \`groove\` | preset/list | (none) | Default groove table |
| \`humanize\` | f32 | 0 | Default humanize amount (0-100) |
| \`strum\` | f32 | 0 | Default strum delay in ms |

**Effects:**

| Keyword | Type | Default | Description |
|---------|------|---------|-------------|
| \`chorus_rate\` | f32 | 1.0 | Chorus LFO rate in Hz |
| \`chorus_depth\` | f32 | 0.5 | Chorus modulation depth 0.0-1.0 |
| \`chorus_mix\` | f32 | 0.5 | Chorus wet mix level |
| \`delay_time\` | u8 | 4 | Rhythmic division (1=whole, 2=half, 4=eighth, etc.) |
| \`delay_feedback\` | f32 | 0.4 | Delay feedback amount 0.0-0.95 |
| \`delay_damping\` | f32 | 0.3 | Delay LP filter coefficient on feedback path |
| \`delay_ping_pong\` | bool | false | Cross-channel feedback |
| \`delay_mix\` | f32 | 0.5 | Delay wet mix level |
| \`reverb_size\` | f32 | 0.5 | Reverb room size 0.0-1.0 |
| \`reverb_mix\` | f32 | 0.3 | Reverb wet mix level |

**Cascade routing:**

| Keyword | Type | Default | Description |
|---------|------|---------|-------------|
| \`chorus_to_delay\` | f32 | 0.0 | Chorus wet -> delay input |
| \`chorus_to_reverb\` | f32 | 0.0 | Chorus wet -> reverb input |
| \`delay_to_reverb\` | f32 | 0.0 | Delay wet -> reverb input |

**Sidechain ducking:**

| Keyword | Type | Default | Description |
|---------|------|---------|-------------|
| \`sidechain\` | string | (none) | \`pattern.track\` format (e.g., \`intro_drums.bd\`) |
| \`sidechain_amt\` | f32 | 0.0 | Duck amount 0.0-1.0 |
| \`sidechain_release\` | f32 | 100.0 | Release time in ms |

**Tape stop:**

| Keyword | Type | Default | Description |
|---------|------|---------|-------------|
| \`tape_stop_time\` | f32 | 500.0 | Tape stop ramp time in ms |
| \`tape_start_time\` | f32 | 200.0 | Tape start ramp time in ms |
| \`tape_stop_curve\` | f32 | 2.0 | Tape stop curve exponent |

**Master chain:**

| Keyword | Type | Default | Description |
|---------|------|---------|-------------|
| \`master_drive\` | f32 | (off) | Soft clip drive amount |
| \`comp_threshold\` | f32 | -6.0 | Compressor threshold in dB |
| \`comp_ratio\` | f32 | 4.0 | Compression ratio (bypassed when <= 1.0) |
| \`comp_attack\` | f32 | 5.0 | Compressor attack in ms |
| \`comp_release\` | f32 | 100.0 | Compressor release in ms |

### Group Settings

Control swing and accent at the track group level within a pattern. Override part defaults.

| Keyword | Type | Default | Description |
|---------|------|---------|-------------|
| \`swing\` | f32 | (from part) | Swing amount (50 = straight, 62 = triplet feel) |
| \`accent_pct\` | f32 | (from part) | Percentage boost for accented hits |
| \`groove\` | preset/list | (from part) | Groove table: preset name, \`[w1 w2 ...]\` weights, or \`off\` |
| \`humanize\` | f32 | (from part) | Humanize amount (0-100) |
| \`strum\` | f32 | (from part) | Strum delay in ms |

### Tone Settings

Control pitch context. Specified at the group level within a pattern.

| Keyword | Type | Default | Description |
|---------|------|---------|-------------|
| \`octave\` | u8 | 4 | Default octave for notes without explicit octave |
| \`scale\` | string | major | Scale name |
| \`root\` | note | C | Root pitch class: \`c\`, \`d#\`, \`e_\`, etc. (\`#\` = sharp, \`_\` = flat) |
| \`instrument\` | string | (none) | Instrument name |
| \`legato\` | f32/preset | 100 | Note duration as percentage of beat span, or preset |
| \`voices\` | u8 | 1 | Round-robin voice count (min 1) |
| \`velocity\` | u8 | 100 | Default velocity for note onsets (0-127) |
| \`glide\` | f32 | 0.0 | Glide/portamento time in ms for \`~\` slides |
| \`arp\` | preset/list | (none) | Arp chord: preset name, \`[0 4 7]\` semitones, or \`off\` |
| \`arp_rate\` | f32 | 4 | Arp steps per beat |
| \`arp_mode\` | string | up | Arp direction: \`up\`, \`down\`, \`updown\`, \`random\` |
| \`arp_octaves\` | u8 | 1 | Octave range for arp pattern |
| \`arp_slide\` | bool | false | Use pitch slides instead of re-triggering |
| \`strum_idx\` | u8/off | (none) | Position in strum order (0-based), or \`off\` |

Legato presets: \`staccato\` (25%), \`arco\` (80%), \`legato\` (100%). Numeric values are percentages.

---

## Inline Commands

Commands appear inline within measure content and take effect immediately for all subsequent events in the track.

| Command | Type | Description |
|---------|------|-------------|
| \`level\` | f32 | Set trigger level for subsequent hits (default 75.0) |
| \`instrument\` | string | Switch instrument mid-measure (reallocates voices) |
| \`octave\` | u8 | Change default octave |
| \`scale\` | string | Change scale |
| \`root\` | note | Change root note |
| \`legato\` | f32/preset | Change note duration |
| \`voices\` | u8 | Change voice count (reallocates voices) |
| \`velocity\` | u8 | Change default velocity (0-127) |
| \`glide\` | f32 | Change glide time in ms for \`~\` slides |
| \`arp\` | preset/list | Set arp chord: preset name, \`[0 4 7]\`, or \`off\` |
| \`arp_rate\` | f32 | Change arp steps per beat |
| \`arp_mode\` | string | Change arp direction |
| \`arp_octaves\` | u8 | Change arp octave range |
| \`arp_slide\` | bool | Toggle slide mode for arp |
| \`swing\` | f32 | Change swing for this track |
| \`accent_pct\` | f32 | Change accent percentage for this track |
| \`groove\` | preset/list | Change groove (\`[w ...]\`, preset, or \`off\`) |
| \`dry_send\` | f32 | Dry bus send level (default 1.0) |
| \`chorus_send\` | f32 | Chorus bus send level (default 0.0) |
| \`delay_send\` | f32 | Delay bus send level (default 0.0) |
| \`reverb_send\` | f32 | Reverb bus send level (default 0.0) |
| \`humanize\` | f32 | Change humanize amount (0-100) |
| \`strum\` | f32 | Change strum delay in ms (0-200) |
| \`strum_idx\` | u8/off | Set or remove strum position for this track |

Commands are \`keyword value\` pairs and consume two tokens from the measure.

\`\`\`
bd: o. level 0.5 .o     // first hit at default level, second at 0.5
*: instrument bass c d   // switch instrument then play notes
*: chorus_send 0.8 reverb_send 0.4 c - d -  // route to effects
\`\`\`

---

## Accent Track

The \`ac\` track marks times where accents apply. Any trigger event whose time coincides with an accent mark gets its \`accent_level\` incremented. A trigger can accumulate multiple accent sources:

- \`x\` in the trigger track itself sets \`accent_level = 1\`
- \`ac\` track overlap adds another \`+1\`

---

## Voice Allocation

The compiler maintains a pool of 32 voices (indices 0-31). Each named track can allocate \`voice_set_size * voices\` from the pool:

- **\`voice_set_size\`** comes from the instrument's unison count (default 1).
- **\`voices\`** is the round-robin count from tone settings (default 1).

For example, \`voices 3\` with a unison-2 instrument allocates 6 voices (3 sets of 2). Each note onset uses the next set in round-robin order, allowing overlapping sustains.

Voices are allocated **lazily** -- only when a track actually plays a note. A track with all rests consumes no voices. Voices are freed and reallocated on inline \`instrument\` or \`voices\` changes.

Tracks within a group are processed in beat-order (all tracks' beat 0, then beat 1, etc.) so voice pool changes in one track are visible to others at the same position.

---

## Arpeggiator

When \`arp\` is active, each note or scale degree triggers a cycling arpeggio at the configured rate. The compiler expands each note into multiple events across its duration.

### Presets

| Preset | Intervals |
|--------|-----------|
| \`major\` | 0, 4, 7 |
| \`min\` | 0, 3, 7 |
| \`7\` | 0, 4, 7, 10 |
| \`min7\` | 0, 3, 7, 10 |
| \`maj7\` | 0, 4, 7, 11 |
| \`dim\` | 0, 3, 6 |
| \`aug\` | 0, 4, 8 |
| \`sus4\` | 0, 5, 7 |
| \`oct\` | 0, 12 |

### Modes

- **\`up\`** (default): play intervals low to high
- **\`down\`**: high to low
- **\`updown\`**: bounce up then back down (excluding endpoints)
- **\`random\`**: deterministic interleaved order

The cycle is continuous -- it does not reset per beat. A note held for 2 beats at \`arp_rate 4\` produces 8 steps total.

With \`arp_octaves 2\`, the interval list is extended with a copy shifted up 12 semitones. For \`arp major\` this gives \`[0, 4, 7, 12, 16, 19]\`.

### Behavior

- By default, each arp step re-triggers the note. With \`arp_slide true\`, subsequent steps use pitch slides instead.
- Arp uses the first voice set only; round-robin is bypassed while arp is active.
- Rests (\`.\`) cancel the arp and silence the note. Sustains (\`-\`) let the arp continue cycling.
- \`arp off\` disables the arpeggiator.

### Examples

\`\`\`
// Major arp at 16th-note rate
arp major arp_rate 4
*: c - - - | d - - - | e - - -

// Custom intervals with slide mode
arp [0 3 7 12] arp_slide true arp_rate 8
*: c - - -

// Disable arp mid-measure
*: arp off c d e f
\`\`\`

---

## Automation

General automation provides continuous parameter control over time using \`@param:\` tracks. Values are linearly interpolated between keyframes.

### Syntax

\`\`\`
@param: VALUE VALUE ... | VALUE VALUE ...
\`\`\`

An automation track starts with \`@\` followed by the parameter name and a colon. The content is a sequence of values separated by whitespace. \`|\` separates **sections** -- top-level time divisions that split the timeline evenly. Within each section, values are spaced evenly, creating keyframes.

### Value Types

| Syntax | Name | Description |
|--------|------|-------------|
| \`0.5\` | Number | A keyframe at this value (0.0-1.0 for most params) |
| \`-\` | Hold | A keyframe at the **previous** value; creates a flat segment |
| \`.\` | Pass | No keyframe; interpolation flows through this point |
| \`*N\` | Repeat | Repeats the previous token N times (e.g., \`-*3\` = \`- - -\`) |

**Interpolation rules:**
- Between two number keyframes, the value ramps linearly.
- \`-\` (hold) creates a keyframe at the current value, producing a flat segment.
- \`.\` (pass) inserts no keyframe, so interpolation continues smoothly.

### Placement Levels

Automation tracks can appear at three levels, each with different allowed parameters:

#### Track-Level Automation

Placed **after a track line** within a pattern. Controls per-voice parameters for that track.

**Allowed parameters:** \`level\`, \`velocity\`, \`dry_send\`, \`chorus_send\`, \`delay_send\`, \`reverb_send\`

\`\`\`
pattern example
  bd: o... o... o... o...
  @level: 0.5 - . 0.8 | 1.0 -*3 0.0
\`\`\`

#### Part-Level Automation

Placed **before clip lines** in a part block. Controls part-wide parameters over the entire part duration.

**Allowed parameters:** \`bpm\`, \`tape_stop_time\`, \`tape_start_time\`, \`tape_stop_curve\`, \`master_drive\`, \`comp_threshold\`, \`comp_ratio\`, \`comp_attack\`, \`comp_release\`, and all effect parameters (\`chorus_rate\`, \`chorus_depth\`, \`chorus_mix\`, \`delay_time\`, \`delay_feedback\`, \`delay_damping\`, \`delay_mix\`, \`delay_ping_pong\`, \`reverb_size\`, \`reverb_mix\`, \`chorus_to_delay\`, \`chorus_to_reverb\`, \`delay_to_reverb\`, \`sidechain_amt\`, \`sidechain_release\`)

\`\`\`
part verse
  bpm 120
  @reverb_mix: 0.2 . . 0.6 | 0.6 -*3 0.3
  @bpm: 120 .*14 130
  drums { times 2 }
  bass { times 2 }
\`\`\`

#### Clip-Level Automation

Placed **after a clip line** in a part block. Controls clip-specific parameters.

**Allowed parameter:** \`mix\`

\`\`\`
part verse
  bpm 120
  drums { times 4 }
    @mix: 0.0 . . 1.0 | 1.0 -*3 0.0
  bass { times 2 }
\`\`\`

#### Step Automation

Step automation uses the \`$\` sigil for discrete, instant parameter changes at specific beat positions. Unlike \`@\` automation which interpolates linearly, \`$\` holds each value until the next event.

**Syntax:**

\`\`\`
$param: value@beat value@beat ...
$param: value@1.5s value@3.0s ...
\`\`\`

Times are **beats** by default (relative to part start). Add \`s\` suffix for seconds.

**Rules:**
- Times must be strictly ascending
- Out-of-bounds times (exceeding part duration) produce a compile error
- \`$param\` and \`@param\` on the same parameter produce a compile error
- Step automation is part-level only (before clips)
- The value before the first event uses the part-level setting default

**Allowed parameters:** Same as part-level \`@\` automation, plus \`tape_stop\` (which is \`$\`-only and cannot use \`@\`).

\`\`\`
part verse
  bpm 120
  tape_stop_time 500
  $tape_stop: 1.0@0 0.0@8 1.0@12
  $reverb_size: 0.3@0 0.8@8
  drums { times 4 }
\`\`\`

**Beat/seconds conversion:** Beat times are converted to seconds using the part's initial BPM. If BPM is also animated via \`@bpm\`, the conversion is approximate.

### Time Layout

Each \`|\`-separated section divides the automation timeline into equal parts. Within a section, values are spaced evenly. For example:

\`\`\`
@level: 0.5 - . 0.8 | 1.0 -*3 0.0
\`\`\`

With 2 sections over 8 beats:
- Section 1 (beats 0-4): keyframe 0.5, hold 0.5, pass, keyframe 0.8
- Section 2 (beats 4-8): keyframe 1.0, hold x3, keyframe 0.0

### Conflict Rules

Using both inline commands and automation for the same parameter on the same track is a compile error.

\`\`\`
// ERROR: cannot use both inline level command and @level automation
bd: level 0.5 o... o... o... o...
@level: 0.3 . . 1.0
\`\`\`

---

## Complete Examples

### Basic Song

\`\`\`
pattern drums
  swing 55
  ac: x... .... x... ....
  oh: .... ...o .... ...o
  ch: o.o. o.o. o.o. o.o.
  sd: .... x... .... x...
  bd: x..o ..o. x..o ..o.

pattern melody
  octave 4 scale min root e_
  instrument jpluck
  legato arco voices 2
  *: chorus_send 0.5 delay_send 0.3 reverb_send 0.6 0 - 2 - | 4 - 3 - | 2 - 1 - | 0 - - .

part main
  bpm 126
  reverb_size 0.7 reverb_mix 0.3
  delay_time 4 delay_feedback 0.35 delay_mix 0.4
  sidechain drums.bd sidechain_amt 0.6 sidechain_release 80
  comp_ratio 3.0 comp_threshold -8
  drums
  melody

score
  main
\`\`\`

### Multi-Part Song

\`\`\`
pattern intro_drums
  ch: o.o. o.o. o.o. o.o.
  sd: .... o... .... o...
  bd: o... .... o.o. ....

pattern verse_bass
  instrument bass
  octave 3
  legato arco
  *: c. .c c. .c | -- c. g. ..

part intro
  bpm 120
  reverb_size 0.4 reverb_mix 0.2
  intro_drums { times 2 }
  verse_bass

part verse
  bpm 120
  reverb_size 0.4 reverb_mix 0.2
  intro_drums { times 4 }
  verse_bass { times 2 }

score
  intro verse
\`\`\`

### Arpeggiator

\`\`\`
pattern arp
  arp major arp_rate 4 arp_mode updown
  octave 4 instrument jpluck
  *: chorus_send 0.5 c - - - | e - - - | g - - - | arp off c d e f

part main
  bpm 120
  arp

score
  main
\`\`\`
`,gp=`# Synth Architecture

## Design Goals

1. **One engine, all sounds** — drums and tonal from the same voice
2. **Declarative config** — pure data structs, no behavior in config types
3. **Optional everything** — unused stages cost only an Option check
4. **Analog character** — Moog filter for musical sweeps, soft clip for warmth
5. **Game-ready** — ~150 ops/sample/voice, 32 voices fits in L1 cache

## Signal Flow (Per-Voice)

\`\`\`
┌──────────────────────────────────────────────────────────────┐
│ MODULATION (computed once per sample)                        │
│                                                              │
│  LFO1 ──────────────────────┬→ LFO2 rate (cross-mod)         │
│  (BPM-synced, 4 waves       ├→ LFO2 depth (cross-mod)        │
│   + S&H, Free/Trig/Rand)    ├→ osc pitch                     │
│                             ├→ pulse width                   │
│                             ├→ main filter cutoff            │
│                             ├→ volume                        │
│                             └→ pan                           │
│                                                              │
│  LFO2 ──────────────────────┬→ osc pitch                     │
│  (BPM-synced, 4 waves       ├→ pulse width                   │
│   + S&H, Free/Trig/Rand)    ├→ main filter cutoff            │
│  (rate & depth optionally   ├→ volume                        │
│   modulated by LFO1)        └→ pan                           │
│                                                              │
│  PitchEnv (AD or ADSR) ─────┬→ osc pitch                     │
│                             └→ FM depth                      │
│                                                              │
│  FilterEnv (AD or ADSR) ──→ main filter cutoff               │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ OSCILLATORS (6 slots, each Option<OscConfig>)                │
│                                                              │
│  Shapes: Sine, Triangle, Saw, Pulse, WhiteNoise, PinkNoise   │
│                                                              │
│  Freq modes:                                                 │
│    Pitched { semi, fine }  — tracks MIDI note via LUT        │
│    Fixed(hz)               — absolute frequency              │
│    Swept { atk, dec,       — AD envelope on pitch            │
│            base, amt }       (for kick drums, risers)        │
│                                                              │
│  Per-osc modulation (Pitched mode only):                     │
│    pitch_lfo_amt, pitch_lfo2_amt, pitch_env_amt,             │
│    pw_lfo_amt, pw_lfo2_amt                                   │
│                                                              │
│  Per-osc PhazDiff (phase difference synthesis):              │
│    phaz_diff: f32               — phase offset (0=off)       │
│    phaz_diff_lfo_amt            — LFO-1 modulation           │
│    phaz_diff_lfo2_amt           — LFO-2 modulation           │
│    out = wave(phase) - wave(phase + offset)                  │
│    Produces phaser-like spectral notches at the oscillator   │
│    level with zero filter cost. Animated when LFO-modulated. │
│                                                              │
│  Osc interactions:                                           │
│    osc[0] feedback FM           (self-mod: sine→saw→noise)   │
│    osc[1] hard-sync to osc[0]   (classic sync leads)         │
│    osc[1] windowed sync         (smooth sync via raised-cos  │
│      sync_window: 0=hard, 1=full Hann window on slave)       │
│    osc[0] → FM → osc[1]         (amt + PitchEnv mod depth)   │
│    osc[0] × osc[1] ring mod     (metallic/bell tones)        │
│                                                              │
│  Output: osc_out[0..6]                                       │
├──────────────────────────────────────────────────────────────┤
│ 3 PATHS (parallel, each Option<PathConfig>)                  │
│                                                              │
│  path[i]:                                                    │
│    sig = Σ(osc_out[j] × mix[j])     mix matrix [f32; 6]      │
│    sig = pre_filter(sig)            opt biquad LP/HP/BP      │
│    sig *= envelope.eval(t)          opt AD/Exp/MultiTap      │
│    sig = post_filter(sig)           opt biquad LP/HP/BP      │
│                                                              │
│  path_sum = Σ path[i]                                        │
├──────────────────────────────────────────────────────────────┤
│ SHAPE FILTER (optional biquad — static shaping)              │
│  e.g., cowbell's 2640Hz BP, bass drum's LP                   │
├──────────────────────────────────────────────────────────────┤
│ WAVESHAPER (optional)                                        │
│  half_rect: bool          — rectification for metallic bite  │
│  soft_clip: Option<f32>   — saturation with drive control    │
│  hard_clip: Option<(f32, f32)> — (drive, threshold) clipper  │
│    Polynomial soft-knee hard clipper. Drive amplifies signal │
│    before clipping (1.0–10.0), threshold sets the ceiling    │
│    (0.1–1.0). Cubic soft-knee taper near threshold reduces   │
│    aliasing without oversampling. Generates dense odd        │
│    harmonics — the aggressive complement to soft_clip's      │
│    warmth. Coexists with soft_clip for serial distortion.    │
├──────────────────────────────────────────────────────────────┤
│ PER-VOICE EFFECTS (optional)                                 │
│                                                              │
│  wavefold: Option<f32>    — triangle fold, drive controls    │
│                             harmonic richness                │
│  bit_crush: Option<u8>    — quantize to N bits (1-16)        │
│  decimate: Option<u8>     — sample-rate reduction,           │
│                             hold period 2+                   │
│                                                              │
│  Order: soft_clip → hard_clip → wavefold                     │
│         → bit_crush → decimate                               │
├──────────────────────────────────────────────────────────────┤
│ MAIN FILTER (optional — the musical filter)                  │
│                                                              │
│  Engine: Moog (default) or Svf                               │
│                                                              │
│  Moog VCF: LP / HP / BP, 24dB/oct resonant                   │
│    Discrete mode: Lowpass, Highpass, Bandpass                │
│                                                              │
│  SVF (state-variable filter): continuous LP→BP→HP            │
│    morph: 0.0 = LP, 0.5 = BP, 1.0 = HP (continuous)          │
│    morph modulation:                                         │
│      + LFO1 × morph_lfo_amt                                  │
│      + LFO2 × morph_lfo2_amt                                 │
│      + FilterEnv × morph_env_amt                             │
│    Chamberlin topology, double-sampled for stability         │
│                                                              │
│  Shared parameters (both engines):                           │
│  cutoff = base                                               │
│         + FilterEnv × env_amt                                │
│         + LFO1 × lfo_amt                                     │
│         + LFO2 × lfo2_amt                                    │
│         + velocity × velo_amt                                │
│         + (note - 60) × key_track                            │
│  resonance: 0.0 .. 1.0                                       │
│                                                              │
│  (None for drums that don't need it)                         │
├──────────────────────────────────────────────────────────────┤
│ AMP STAGE                                                    │
│                                                              │
│  amp_env: AD(lin/exp) | ADSR | MultiTap                      │
│    - AD/MultiTap: evaluated from t (pure, stateless)         │
│    - ADSR: state machine (responds to key_off)               │
│                                                              │
│  amp = base_amp                                              │
│      × amp_env.eval()                                        │
│      × lerp(velocity, 1.0 - velo_amt, 1.0)                   │
│      × (1.0 + LFO1 × vol_lfo_amt)                            │
│      × (1.0 + LFO2 × vol_lfo2_amt)                           │
├──────────────────────────────────────────────────────────────┤
│ POST FILTER (optional biquad — static cleanup)               │
│  e.g., rimshot's 480Hz HP to remove rumble after shaping     │
├──────────────────────────────────────────────────────────────┤
│ STEREO PAN                                                   │
│  pan = base_pan + LFO1 × pan_lfo_amt + LFO2 × pan_lfo2_amt   │
│      + uni × unison_spread                                   │
│  → equal-power pan via LUT → (L, R)                          │
└──────────────────────────────────────────────────────────────┘
\`\`\`

## Effects and Mixer

After all voices are summed, the output passes through a global
mixer with send-based effects and a master chain.

### Send Architecture

Each voice has **4 send levels** (VoiceConfig fields):
- **dry_send** (default 1.0) — direct to output
- **chorus_send** (default 0.0) — to chorus effect bus
- **delay_send** (default 0.0) — to delay effect bus
- **reverb_send** (default 0.0) — to reverb effect bus

Sends are post-gain, post-sidechain-duck. A voice can feed
multiple buses simultaneously (e.g., 0.5 to delay + 0.3 to reverb).

### Effects Cascade

Effects are processed in order with cascade routing between them:

\`\`\`
                chorus_bus ──→ Chorus ──→ chorus_wet
                                            │
                delay_bus ───┬──────────────┤ (× chorus_to_delay)
                             ↓              │
                          Delay ──→ delay_wet
                                            │
                reverb_bus ──┬──────────────┤ (× chorus_to_reverb)
                             │              │ (× delay_to_reverb)
                             ↓              │
                          Reverb ──→ reverb_wet

Final sum = dry + chorus_wet × chorus_mix
                 + delay_wet × delay_mix
                 + reverb_wet × reverb_mix
\`\`\`

**Chorus:** 4 modulated delay lines (2/channel), sine LFO at staggered
phases. ~30ms buffer per line. Linear interpolation for smooth
modulation. Parameters: **rate** (Hz), **depth** (0-1), **mix**.

**Delay:** Tempo-synced stereo echo using RhythmicValue beat divisions.
One-pole LP filter on feedback for damping. Ping-pong mode swaps
L/R feedback paths. 2-second buffer per channel (~706KB heap).
Parameters: **time** (rhythmic value), **feedback**, **damping**, **ping_pong**, **mix**.

**Reverb:** Freeverb-based (8 comb + 4 allpass pairs, stereo spread).
Parameters: **size** (0.0–1.5), **mix**. Soft clipping in comb feedback
path prevents blowup. When size > ~1.07, feedback exceeds unity
gain — the reverb self-oscillates, smearing input into drones,
metallic washes, and pseudo-polyphonic textures (Dreadbox Typhon
"feedback reverb as sound source" technique).

### Sidechain Ducking

A designated voice (**sidechain_source**) feeds an envelope follower.
All other voices are multiplied by \`(1.0 - sidechain_amt × envelope)\`.
The envelope decays exponentially with **sidechain_release** (ms).
One-sample latency: this sample's peak ducks next sample. Imperceptible
at 44.1kHz. Set via sequencer: \`sidechain bd sidechain_amt 0.8\`.

### Tape Stop Effect

Emulates tape machine deceleration/acceleration. Variable-rate sample
playback from a 2-second circular buffer. Zero runtime cost when idle
(passthrough, no buffer activity).

**MixerConfig parameters:**

| Parameter | Type | Range | Default | Description |
|---|---|---|---|---|
| **tape_stop_time** | f32 | 100–5000 | 1000.0 | Deceleration duration in ms |
| **tape_start_time** | f32 | 50–5000 | 200.0 | Acceleration duration in ms |
| **tape_stop_curve** | f32 | 1.0–4.0 | 2.0 | Deceleration/acceleration exponent |
| **tape_stop_speed** | f32 | 0.0–1.0 | 1.0 | Target speed (automation) |

Speed curve: \`speed(t) = (1.0 - t / duration) ^ curve\`. At curve 1.0
the deceleration is linear; at 2.0+ it hangs near normal speed then dives
rapidly at the end (realistic motor inertia).

State machine: Idle → Stopping → Stopped → Starting → Draining → Idle.

**Step trigger behavior:** \`@tape_stop\` uses step interpolation — values
hold at the most recent keyframe instead of lerping between them. This
gives clean triggers at exact section boundaries:
\`@tape_stop: 1.0 - - 0.0 - 1.0\` holds at 1.0 through sections 0–2,
steps to 0.0 at section 3 (trigger stop), steps to 1.0 at section 5
(trigger start).

**Draining state:** When Starting completes (speed reaches 1.0), the read
pointer lags behind write by the accumulated stop/start duration. A direct
jump to passthrough would cause a time-skip glitch. Instead, the effect
enters Draining: over 256 samples (~5.8ms) it crossfades from buffer
playback to direct passthrough, then transitions to Idle. If a new stop
triggers during Draining, it transitions directly to Stopping.

Signal flow position: after effect mix-down, before DC removal.

**Design rationale:** The core technique is variable-rate sample playback.
Write incoming audio into a circular buffer at normal rate; read from it
at a decelerating rate. As the read pointer falls behind the write pointer,
pitch drops and time stretches — the same physics that govern a real tape
machine. Linear interpolation on the fractional read position for smooth,
artifact-free output. ~10 ops/sample when active; 0 when idle.

### Master Chain

Applied after tape stop, in order:

1. **DC removal:** first-order HP at ~5Hz (coeff 0.9993). Always on.
   Removes DC offset from asymmetric waveforms and effects.

2. **Master overdrive** (optional): soft_clip with configurable drive.
   Adds warmth/saturation to the full mix.

3. **Compressor:** RMS envelope follower → gain curve → smoothing.
   Bypassed when ratio <= 1.0 (perfect backward compat when unconfigured).
   Parameters: **threshold** (dB), **ratio**, **attack** (ms), **release** (ms).

4. **Soft limiter:** soft_clip at drive=1.0. Always on.
   Prevents digital clipping on the final output.

## Portamento

A VoiceConfig with **portamento** > 0.0 (value in milliseconds) enables
automatic pitch glide: when key_down is called on a voice that was
already active, the pitch glides from the old note to the new note
over **portamento** ms (constant-time). When the voice was idle, or
portamento is 0, pitch jumps instantly (backward compatible).

This is distinct from the sequencer's \`~\` slide (which uses
\`slide_to()\` and does not retrigger envelopes). Portamento retriggers
envelopes normally but smoothly transitions the pitch.

Reuses the existing glide interpolation in \`sample()\`:

    if note != target_note:
      note += signum(target - note) × glide_rate

## Unison

A VoiceConfig can request multiple synth voices per note via the
**unison** field (default 0 or 1 = single voice). When unison > 1,
the compiler allocates that many voices per note. Each voice
receives a **which** index (0..unison-1) on key_down.

At sample time, the unison offset for each voice is computed as:

    uni = 2 × which / (unison - 1) - 1       (range: -1.0 .. +1.0)

This offset is applied to two parameters:

    note   += uni × unison_detune    (pitch spread in semitones)
    pan    += uni × unison_spread    (stereo spread, -1..+1 range)

The distribution is even: for 4 voices the offsets are -1, -1/3,
+1/3, +1. For 3 voices: -1, 0, +1 (center voice unaffected).
For 1 voice: 0 (no change — backward compatible).

## How Existing Sounds Map to This

| Sound | Oscs | Paths | Shape Filt | Shaper | Voice FX | Main Filt | Amp Env | Post Filt | Sends |
|---|---|---|---|---|---|---|---|---|---|
| **Bass drum** | 1 sine swept | 1 (LP biquad + AD) | - | soft_clip | - | - | - | - | dry 1.0 |
| **Snare** | 2 sine + noise | 2 (AD each) | - | - | - | - | - | - | dry 1.0 |
| **Hihat** | 6 square | 1 (BP+HP biquads) | - | - | - | - | AD | - | dry 1.0 |
| **Lofi keys** | 2 (pulse+saw) | 1 (just mix) | - | - | crush+dec | Moog LP | ADSR | - | ch+rev |
| **Fold bass** | 1 sine pitched | 1 (just mix) | - | - | wavefold | Moog LP sweep | ADSR | - | dry 1.0 |
| **Fold lead** | 1 saw pitched | 1 (just mix) | - | - | wavefold | Moog LP sweep | ADSR | - | dly+rev |
| **Pad** | 2 pitched detuned | 1 (just mix) | - | - | - | Moog LP gentle | ADSR | - | dry 1.0 |

## Trade-offs and Design Decisions

### Why 6 oscillators (not 2, not 8)?

Hihats and cymbals need 6 square waves at inharmonic frequencies — this is THE
sound of 808/909 metallic percussion. For tonal patches, unused slots are None —
cost is 6 branch-not-taken checks per sample (~0 ns). Going below 6 would
require special-casing metallic percussion. Going above adds no known benefit.

### Why does feedback FM live on OscInteraction, not per-oscillator?

Feedback FM is self-modulation of osc[0]: its previous output feeds back into
its own phase, sweeping from pure sine → sawtooth-like → chaotic noise as the
amount increases (DX7 operator 6 behavior). Placing it on OscInteraction keeps
the UI grouped with FM and ring mod. The enriched osc[0] timbre naturally feeds
into osc[1] via the existing FM path, giving two levels of FM complexity from
one simple control. Processing order: feedback → sync → FM → step osc[1] →
windowed sync window → ring mod.

### Why windowed sync instead of just hard sync?

Standard hard sync resets the slave at every master cycle, creating a sharp
discontinuity that aliases badly in digital. Windowed sync applies a raised
cosine window to the slave output, fading it to zero near the master cycle
boundary. The **sync_window** parameter (0.0–1.0) controls the fade width: 0 =
pure hard sync, 1.0 = full Hann window (smoothest). The window removes aliasing
artifacts while preserving the characteristic sync pitch-tracking. Narrow
windows sound close to hard sync; wide windows produce smoother, vocal-like
timbres. Cost: one multiply per sample when active. From ASM Hydrasynth and
Modal Argon8.

### Why is ring mod a bool, not a blend amount?

Ring modulation is \`osc_out[1] *= osc_out[0]\` — a pure multiply between osc 0 and osc 1. A mix knob would be \`lerp(amt, osc1, osc0*osc1)\`, but in practice you get the same effect by adjusting the path mix levels (blend dry osc 1 via one path, ring mod output via another). Keeping it a simple on/off flag matches the existing sync toggle and avoids a redundant control. Ring mod can be combined with FM and hard sync — the processing order is sync → FM → step osc 1 → ring mod, so all three interactions compose naturally.

### Why keep the Moog filter separate from biquads?

The Moog filter handles dynamic cutoff naturally (its internal math works per-sample). Biquad coefficients involve sin/cos to recompute, which is expensive if cutoff changes every sample. The Moog is warmer and
self-oscillates at high resonance — essential for acid/synthwave. Biquads are cleaner and cheaper for static shaping. Using each where it excels.

### Why add the SVF alongside the Moog?

The Moog VCF has discrete LP/HP/BP mode switching. The SVF (state-variable filter) provides continuous morphing between LP, BP, and HP via a single **morph** parameter (0.0→0.5→1.0). When morph is modulated by LFO or
envelope, the filter character sweeps smoothly — a dramatic effect impossible with discrete mode switching. The Chamberlin SVF topology produces all three outputs simultaneously, so morphing is just linear interpolation
with zero extra filter cost. The SVF is thinner than the Moog (12dB/oct vs 24dB/oct) and doesn't self-oscillate as aggressively, making the two complementary: Moog for warm acid sweeps, SVF for morphing sweeps and
cleaner filtering. The **engine** field selects which algorithm processes the signal; both share the same cutoff/resonance/modulation infrastructure. ~8 ops/sample, 8 bytes of state.

### Why 3 modulation envelopes (Pitch, Filter, Amp)?

Classic synth architecture. Common need: fast pitch swoosh on bass (PitchEnv=2ms decay), slow filter opening on pad (FilterEnv=500ms attack), medium amp (ADSR). One shared "mod env" would force these to move together. Three
envelopes costs ~30 extra bytes of state per voice — negligible.

### Why two LFOs?

LFO1 routed to 5 destinations covers ~95% of synthwave sounds. LFO2 adds the remaining 5% that makes patches feel alive: vibrato that fades in (LFO2→LFO1 depth), filter wobble at a different rate than tremolo, and
independent stereo animation. LFO2 has the same 5 routing destinations as LFO1, plus cross-modulation of LFO1's rate and depth. The cost is ~16 bytes of state and ~10 ops/sample per voice — trivial.

### Path envelopes are time-based (AD), Amp envelope supports ADSR — why the split?

Path envelopes shape individual sonic components (noise burst, tone body) — these are always "fire and decay" regardless of key state. The amp envelope controls the overall volume contour — tonal sounds need sustain while
the key is held. This matches how every analog drum machine and synth actually works.

### Velocity is multiplicative, not subtractive

The legacy \`amp -= (1-velo)*amt\` is confusing and can push amp negative before clamping. The updated \`amp *= lerp(velo, 1-amt, 1)\` scales smoothly: at full velocity you get full amp, at zero velocity you get (1-amt) of full
amp. Clearer, more predictable.

### Shape filter → Waveshaper → Main filter ordering

Distortion before filter = acid bass (harmonics get shaped by filter sweep). The shape filter before the waveshaper lets you bandlimit before clipping (cowbell: BP then done; bass drum: LP then clip). If you needed
distortion AFTER the filter, the soft_clip drive can be set low and the main filter resonance cranked — self-oscillation provides the grit.

### Key tracking on filter cutoff

Without this, a bass patch that sounds right at C2 will sound muffled at C4 (because the filter cutoff is absolute). **key_track** = 1.0 makes the filter follow pitch 1:1. Essential for playable patches across the keyboard. The
legacy architecture lacked this.

### Why unison at the voice level, not a chorus effect?

Unison duplicates the entire voice pipeline (oscs, filters, envelopes) with per-voice detune and stereo spread. A chorus effect would share one voice and modulate a delay line — cheaper but thinner. Real supersaw character comes
from N independent oscillators drifting against each other through the same filter. The compiler allocates N synth voices per note when unison > 1, so the cost scales linearly with the unison count. For a 4-voice supersaw pad at
44.1kHz, that's ~480 ops/sample — still comfortable on one thread.

### Why send-based effects instead of per-voice inserts?

Send effects share one instance across all voices — essential for reverb and delay which need shared state (tail continuity). Per-voice effects (wavefold, bit_crush, decimate) are inserts because they're stateless or have
trivial per-voice state. The send architecture also enables cascade routing (chorus → delay → reverb) which creates natural depth staging.

### Why one-sample sidechain latency?

Reading the sidechain peak from the current sample and ducking in the same sample would require two passes over all voices (first to compute sidechain, then to apply duck). One-sample latency lets us do everything in a
single pass: feed this sample's peak, duck next sample. At 44.1kHz, 22.7 microseconds of latency is inaudible.

## Distortion

At the signal level, distortion is any nonlinear transformation of a waveform.
A clean sine wave has one frequency. Push it through a nonlinear function and
it generates new harmonics (overtones) that weren't in the original signal.
The amount and character of the nonlinearity determines the sonic result —
from subtle warmth to aggressive metal crunch.

### Distortion Methods

| Type | What it does | Character |
|---|---|---|
| **Overdrive/soft clip** | Gently compresses peaks, e.g. \`tanh(x * drive)\` | Warm, "tube amp", adds odd harmonics |
| **Hard clip** | Chops signal flat at a threshold, \`clamp(x * drive, -t, t)\` | Aggressive, buzzy — classic distortion pedal |
| **Fuzz** | Extreme clipping, nearly squares the waveform | Very aggressive, wall of harmonics |
| **Wavefolding** | Signal folds back instead of clipping when exceeding threshold | Complex, evolving harmonics that change with input level |
| **Bit crush** | Reduces bit depth, creating quantization steps | Lo-fi, crunchy, digital grit |
| **Decimation** | Reduces effective sample rate | Aliasing artifacts, retro character |

### Soft clip vs hard clip

Soft clip (tanh-style) gradually compresses peaks — the signal bends into the ceiling,
producing a smooth saturation with predominantly odd harmonics. Hard clip
flatly chops the signal at a threshold — the waveform hits a wall, producing
harsher, denser harmonics. At low drive: overdrive warmth vs crunch. At high
drive: tube saturation vs distortion pedal. At extreme drive: both approach a
square wave, but hard clip gets there faster and more abruptly. The classic
"metal is surf rock with distortion" transformation is hard clipping — the
same clean guitar signal pushed through a clipping stage that generates dense
harmonics from what was a simple waveform.

### Signal chain position

Signal chain position matters. Distortion before a filter generates harmonics,
then the filter sculpts them — this is how acid bass and distorted guitar
tones work (the current gb-apu ordering: waveshaper → main filter). Distortion
after a filter produces harsher, more digital-sounding results because the
new harmonics are unfiltered.

### What gb-apu currently provides

**Per-voice waveshaper stage:**
- **soft_clip** (drive) — overdrive/saturation (tanh-style)
- **hard_clip** (drive, threshold) — polynomial soft-knee hard clipper, dense odd harmonics
- **half_rect** — half-wave rectification (metallic bite)

**Per-voice effects:**
- **wavefold** (drive) — wavefolding distortion
- **bit_crush** (bits) — bit depth reduction (1-16 bits)
- **decimate** (period) — sample rate reduction

**Master chain:**
- **master overdrive** — global soft clip on the full mix
- **soft limiter** — always-on clipping prevention

**Implicit distortion:**
- **feedback FM** — osc[0] self-modulation (sine→saw→noise)
- **filter resonance** — Moog VCF self-oscillation at high resonance

The soft_clip and hard_clip stages are serial — a signal can pass through both
for layered distortion (warm saturation into aggressive clipping). Hard clip
uses a polynomial soft-knee transfer function (cubic taper near threshold) to
reduce aliasing without oversampling, at ~5-10 ops/sample with zero per-voice
state cost.

## Efficiency Estimate

Per-sample cost, typical patches:
- **Drum** (hihat, worst case): 6 osc evals + path mix/filter/env + AD = ~100 ops
- **Tonal** (2-osc + Moog): 2 osc evals + LFO + 3 envs + Moog + amp = ~120 ops
- **Total** (16 drums + 16 tonal at 44.1kHz): ~155M ops/sec — comfortably single-threaded

**Mixer overhead** per sample: ~200 ops (chorus + delay + reverb + compressor).
Negligible compared to voice processing.

**Memory per voice:** ~500 bytes config + state. 32 voices = 16KB, fits in L1 cache.
**Mixer state:** ~800KB (mostly delay buffers, heap-allocated, not in hot cache path).
`;var bp=D("<a> </a>"),kp=D('<nav class="help-toc svelte-d7kilv"></nav>'),yp=D('<div class="help-viewer svelte-d7kilv"><div class="help-tabs svelte-d7kilv"><!></div> <div class="help-body svelte-d7kilv"><div class="help-content svelte-d7kilv"><!></div> <!></div></div>');function wp(n,e){ye(e,!0);const a=["DAW","Sequencer","Synth"],r=[vp,_p,gp];let s=H(0);function i(S){const b=[],q=new Map,z=new Je.Renderer;return z.heading=({text:O,depth:W})=>{if(W===2||W===3){let T=O.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");const M=q.get(T)??0;return q.set(T,M+1),M>0&&(T=`${T}-${M}`),b.push({level:W,id:T,text:O}),`<h${W} id="${T}">${O}</h${W}>`}return`<h${W}>${O}</h${W}>`},{html:Je(S,{renderer:z}),toc:b}}let o=E(()=>i(r[t(s)])),c=H(""),l=H(void 0);function f(S){const b=t(o).toc;for(let q=b.length-1;q>=0;q--)if(b[q].id===S){if(b[q].level===2)return S;for(let z=q-1;z>=0;z--)if(b[z].level===2)return b[z].id}return""}let u=E(()=>f(t(c))),d=E(()=>{const S=t(o).toc,b=[];let q="";for(const z of S)z.level===2?(q=z.id,b.push(z)):z.level===3&&q===t(u)&&b.push(z);return b});He(()=>{t(s),h(c,""),t(l)&&(t(l).scrollTop=0)}),He(()=>{if(t(s),!t(l))return;const S=requestAnimationFrame(()=>{const q=t(l).querySelectorAll("h2[id], h3[id]");if(!q.length)return;const z=new IntersectionObserver(j=>{for(const O of j)O.isIntersecting&&h(c,O.target.id,!0)},{root:t(l),rootMargin:"0px 0px -80% 0px",threshold:0});for(const j of q)z.observe(j);b=()=>z.disconnect()});let b;return()=>{cancelAnimationFrame(S),b?.()}});function m(S){t(l)?.querySelector(`#${CSS.escape(S)}`)?.scrollIntoView({behavior:"smooth",block:"start"})}var y=yp(),k=x(y),w=x(k);vo(w,{get blocks(){return a},get selected(){return t(s)},onselect:S=>{h(s,S,!0)}});var _=v(k,2),R=x(_),F=x(R);ao(F,()=>t(o).html),jt(R,S=>h(l,S),()=>t(l));var I=v(R,2);{var C=S=>{var b=kp();Ue(b,21,()=>t(d),We,(q,z)=>{var j=bp();let O;var W=x(j);ae(()=>{O=ve(j,1,"toc-link svelte-d7kilv",null,O,{"toc-h3":t(z).level===3,active:t(c)===t(z).id,"active-parent":t(z).level===2&&t(z).id===t(u)&&t(c)!==t(z).id}),en(j,"href",`#${t(z).id??""}`),Pe(W,t(z).text)}),B("click",j,T=>{T.preventDefault(),m(t(z).id)}),P(q,j)}),P(S,b)};J(I,S=>{t(o).toc.length>0&&S(C)})}P(n,y),we()}Ye(["click"]);var xp=D('<div class="instrument-mode svelte-1n46o8q"><div class="instrument-sidebar svelte-1n46o8q"><!></div> <div class="instrument-content svelte-1n46o8q"><!></div></div>'),Sp=D('<div class="seqn-mode svelte-1n46o8q"><!></div>'),Pp=D('<div class="app svelte-1n46o8q"><!> <div class="content svelte-1n46o8q"><!></div></div>');function Ap(n,e){ye(e,!0);const a=new xc;He(()=>{document.documentElement.className=Dn.resolved==="dark"?"theme-dark":"theme-light"}),Ze.setBridge(a);let r=H("song"),s=H(_n([]));He(()=>{X.revision,i()});async function i(){try{const _=await oo(X.text);h(s,[...new Set(_)],!0)}catch{h(s,[],!0)}}let o=E(()=>t(s).map(_=>({id:_,label:_}))),c=E(()=>new Set(t(s).filter(_=>X.isLibraryOnly("instrument/"+_))));var l=Pp(),f=x(l);Wc(f,{get bridge(){return a},get mode(){return t(r)},onmode:_=>{h(r,_,!0)}});var u=v(f,2),d=x(u);{var m=_=>{Td(_,{})},y=_=>{var R=xp(),F=x(R),I=x(F);Ws(I,{title:"Instruments",get items(){return t(o)},get activeId(){return X.selectedInstrument},get libraryIds(){return t(c)},onselect:b=>{X.selectedInstrument=b},hint:"instrument-sidebar"});var C=v(F,2),S=x(C);km(S,{get bridge(){return a}}),P(_,R)},k=_=>{var R=Sp(),F=x(R);Am(F,{}),P(_,R)},w=_=>{wp(_,{})};J(d,_=>{t(r)==="song"?_(m):t(r)==="instrument"?_(y,1):t(r)==="seqn"?_(k,2):t(r)==="help"&&_(w,3)})}P(n,l),we()}ic(Ap,{target:document.getElementById("app")});
