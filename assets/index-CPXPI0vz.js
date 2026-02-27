(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const zs=!1;var ys=Array.isArray,Ho=Array.prototype.indexOf,Aa=Array.prototype.includes,ws=Array.from,Vo=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,Go=Object.getOwnPropertyDescriptors,di=Object.prototype,Ko=Array.prototype,rr=Object.getPrototypeOf,Er=Object.isExtensible;const Wo=()=>{};function Uo(n){for(var e=0;e<n.length;e++)n[e]()}function fi(){var n,e,a=new Promise((r,s)=>{n=r,e=s});return{promise:a,resolve:n,reject:e}}const Fn=2,Ka=4,xs=8,mi=1<<24,Ht=16,xt=32,_a=64,pi=128,ct=512,Rn=1024,On=2048,wt=4096,et=8192,zt=16384,Za=32768,ma=65536,Fr=1<<17,hi=1<<18,Fa=1<<19,Qo=1<<20,Ft=1<<25,pa=65536,Ns=1<<21,ir=1<<22,Yt=1<<23,ua=Symbol("$state"),Zo=Symbol("legacy props"),Jo=Symbol(""),oa=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Xo=globalThis.document?.contentType?.includes("xml")??!1;function Yo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function $o(n,e,a){throw new Error("https://svelte.dev/e/each_key_duplicate")}function el(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function nl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tl(n){throw new Error("https://svelte.dev/e/effect_orphan")}function al(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function sl(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function rl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function il(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ol(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ll(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const cl=1,ul=2,vi=4,dl=8,fl=16,ml=1,pl=4,hl=8,vl=16,_l=1,gl=2,Ln=Symbol(),_i="http://www.w3.org/1999/xhtml";function bl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function kl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function gi(n){return n===this.v}function yl(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function bi(n){return!yl(n,this.v)}let wl=!1;const xl=[];function En(n,e=!1,a=!1){return os(n,new Map,"",xl,null,a)}function os(n,e,a,r,s=null,i=!1){if(typeof n=="object"&&n!==null){var o=e.get(n);if(o!==void 0)return o;if(n instanceof Map)return new Map(n);if(n instanceof Set)return new Set(n);if(ys(n)){var c=Array(n.length);e.set(n,c),s!==null&&e.set(s,c);for(var l=0;l<n.length;l+=1){var f=n[l];l in n&&(c[l]=os(f,e,a,r,null,i))}return c}if(rr(n)===di){c={},e.set(n,c),s!==null&&e.set(s,c);for(var u in n)c[u]=os(n[u],e,a,r,null,i);return c}if(n instanceof Date)return structuredClone(n);if(typeof n.toJSON=="function"&&!i)return os(n.toJSON(),e,a,r,n)}if(n instanceof EventTarget)return n;try{return structuredClone(n)}catch{return n}}let ft=null;function Ta(n){ft=n}function ke(n,e=!1,a){ft={p:ft,i:!1,c:null,e:null,s:n,x:null,l:null}}function ye(n){var e=ft,a=e.e;if(a!==null){e.e=null;for(var r of a)Ii(r)}return n!==void 0&&(e.x=n),e.i=!0,ft=e.p,n??{}}function ki(){return!0}let la=[];function yi(){var n=la;la=[],Uo(n)}function Nt(n){if(la.length===0&&!Ba){var e=la;queueMicrotask(()=>{e===la&&yi()})}la.push(n)}function Sl(){for(;la.length>0;)yi()}function wi(n){var e=Xe;if(e===null)return Oe.f|=Yt,n;if((e.f&Za)===0&&(e.f&Ka)===0)throw n;Da(n,e)}function Da(n,e){for(;e!==null;){if((e.f&pi)!==0){if((e.f&Za)===0)throw n;try{e.b.error(n);return}catch(a){n=a}}e=e.parent}throw n}const Pl=-7169;function vn(n,e){n.f=n.f&Pl|e}function or(n){(n.f&ct)!==0||n.deps===null?vn(n,Rn):vn(n,wt)}function xi(n){if(n!==null)for(const e of n)(e.f&Fn)===0||(e.f&pa)===0||(e.f^=pa,xi(e.deps))}function Si(n,e,a){(n.f&On)!==0?e.add(n):(n.f&wt)!==0&&a.add(n),xi(n.deps),vn(n,Rn)}const es=new Set;let Be=null,fs=null,bt=null,Un=[],Ss=null,Is=!1,Ba=!1;class $t{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=0;#a=0;#o=null;#r=new Set;#s=new Set;#i=new Map;is_fork=!1;#l=!1;is_deferred(){return this.is_fork||this.#a>0}skip_effect(e){this.#i.has(e)||this.#i.set(e,{d:[],m:[]})}unskip_effect(e){var a=this.#i.get(e);if(a){this.#i.delete(e);for(var r of a.d)vn(r,On),kt(r);for(r of a.m)vn(r,wt),kt(r)}}process(e){Un=[],this.apply();var a=[],r=[];for(const s of e)this.#c(s,a,r);if(this.is_deferred()){this.#u(r),this.#u(a);for(const[s,i]of this.#i)Di(s,i)}else{for(const s of this.#e)s();this.#e.clear(),this.#n===0&&this.#d(),fs=this,Be=null,Or(r),Or(a),fs=null,this.#o?.resolve()}bt=null}#c(e,a,r){e.f^=Rn;for(var s=e.first,i=null;s!==null;){var o=s.f,c=(o&(xt|_a))!==0,l=c&&(o&Rn)!==0,f=l||(o&et)!==0||this.#i.has(s);if(!f&&s.fn!==null){c?s.f^=Rn:i!==null&&(o&(Ka|xs|mi))!==0?i.b.defer_effect(s):(o&Ka)!==0?a.push(s):Ya(s)&&((o&Ht)!==0&&this.#s.add(s),qa(s));var u=s.first;if(u!==null){s=u;continue}}var d=s.parent;for(s=s.next;s===null&&d!==null;)d===i&&(i=null),s=d.next,d=d.parent}}#u(e){for(var a=0;a<e.length;a+=1)Si(e[a],this.#r,this.#s)}capture(e,a){a!==Ln&&!this.previous.has(e)&&this.previous.set(e,a),(e.f&Yt)===0&&(this.current.set(e,e.v),bt?.set(e,e.v))}activate(){Be=this,this.apply()}deactivate(){Be===this&&(Be=null,bt=null)}flush(){if(this.activate(),Un.length>0){if(Pi(),Be!==null&&Be!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#t)e(this);this.#t.clear()}#d(){if(es.size>1){this.previous.clear();var e=bt,a=!0;for(const s of es){if(s===this){a=!1;continue}const i=[];for(const[c,l]of this.current){if(s.current.has(c))if(a&&l!==s.current.get(c))s.current.set(c,l);else continue;i.push(c)}if(i.length===0)continue;const o=[...s.current.keys()].filter(c=>!this.current.has(c));if(o.length>0){var r=Un;Un=[];const c=new Set,l=new Map;for(const f of i)Ai(f,o,c,l);if(Un.length>0){Be=s,s.apply();for(const f of Un)s.#c(f,[],[]);s.deactivate()}Un=r}}Be=null,bt=e}this.committed=!0,es.delete(this)}increment(e){this.#n+=1,e&&(this.#a+=1)}decrement(e){this.#n-=1,e&&(this.#a-=1),!this.#l&&(this.#l=!0,Nt(()=>{this.#l=!1,this.is_deferred()?Un.length>0&&this.flush():this.revive()}))}revive(){for(const e of this.#r)this.#s.delete(e),vn(e,On),kt(e);for(const e of this.#s)vn(e,wt),kt(e);this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#o??=fi()).promise}static ensure(){if(Be===null){const e=Be=new $t;es.add(Be),Ba||Nt(()=>{Be===e&&e.flush()})}return Be}apply(){}}function Al(n){var e=Ba;Ba=!0;try{for(var a;;){if(Sl(),Un.length===0&&(Be?.flush(),Un.length===0))return Ss=null,a;Pi()}}finally{Ba=e}}function Pi(){Is=!0;var n=null;try{for(var e=0;Un.length>0;){var a=$t.ensure();if(e++>1e3){var r,s;Tl()}a.process(Un),ea.clear()}}finally{Un=[],Is=!1,Ss=null}}function Tl(){try{al()}catch(n){Da(n,Ss)}}let Et=null;function Or(n){var e=n.length;if(e!==0){for(var a=0;a<e;){var r=n[a++];if((r.f&(zt|et))===0&&Ya(r)&&(Et=new Set,qa(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Hi(r),Et?.size>0)){ea.clear();for(const s of Et){if((s.f&(zt|et))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)Et.has(o)&&(Et.delete(o),i.push(o)),o=o.parent;for(let c=i.length-1;c>=0;c--){const l=i[c];(l.f&(zt|et))===0&&qa(l)}}Et.clear()}}Et=null}}function Ai(n,e,a,r){if(!a.has(n)&&(a.add(n),n.reactions!==null))for(const s of n.reactions){const i=s.f;(i&Fn)!==0?Ai(s,e,a,r):(i&(ir|Ht))!==0&&(i&On)===0&&Ti(s,e,r)&&(vn(s,On),kt(s))}}function Ti(n,e,a){const r=a.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const s of n.deps){if(Aa.call(e,s))return!0;if((s.f&Fn)!==0&&Ti(s,e,a))return a.set(s,!0),!0}return a.set(n,!1),!1}function kt(n){for(var e=Ss=n;e.parent!==null;){e=e.parent;var a=e.f;if(Is&&e===Xe&&(a&Ht)!==0&&(a&hi)===0)return;if((a&(_a|xt))!==0){if((a&Rn)===0)return;e.f^=Rn}}Un.push(e)}function Di(n,e){if(!((n.f&xt)!==0&&(n.f&Rn)!==0)){(n.f&On)!==0?e.d.push(n):(n.f&wt)!==0&&e.m.push(n),vn(n,Rn);for(var a=n.first;a!==null;)Di(a,e),a=a.next}}function Dl(n){let e=0,a=ha(0),r;return()=>{cr()&&(t(a),dr(()=>(e===0&&(r=Ot(()=>n(()=>Ha(a)))),e+=1,()=>{Nt(()=>{e-=1,e===0&&(r?.(),r=void 0,Ha(a))})})))}}var Rl=ma|Fa|pi;function ql(n,e,a){new Cl(n,e,a)}class Cl{parent;is_pending=!1;#e;#t=null;#n;#a;#o;#r=null;#s=null;#i=null;#l=null;#c=null;#u=0;#d=0;#p=!1;#m=!1;#h=new Set;#v=new Set;#f=null;#y=Dl(()=>(this.#f=ha(this.#u),()=>{this.#f=null}));constructor(e,a,r){this.#e=e,this.#n=a,this.#a=r,this.parent=Xe.b,this.is_pending=!!this.#n.pending,this.#o=Ts(()=>{Xe.b=this;{var s=this.#b();try{this.#r=ot(()=>r(s))}catch(i){this.error(i)}this.#d>0?this.#g():this.is_pending=!1}return()=>{this.#c?.remove()}},Rl)}#w(){try{this.#r=ot(()=>this.#a(this.#e))}catch(e){this.error(e)}}#x(){const e=this.#n.pending;e&&(this.#s=ot(()=>e(this.#e)),Nt(()=>{var a=this.#b();this.#r=this.#_(()=>($t.ensure(),ot(()=>this.#a(a)))),this.#d>0?this.#g():(da(this.#s,()=>{this.#s=null}),this.is_pending=!1)}))}#b(){var e=this.#e;return this.is_pending&&(this.#c=It(),this.#e.before(this.#c),e=this.#c),e}defer_effect(e){Si(e,this.#h,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#_(e){var a=Xe,r=Oe,s=ft;Dt(this.#o),mt(this.#o),Ta(this.#o.ctx);try{return e()}catch(i){return wi(i),null}finally{Dt(a),mt(r),Ta(s)}}#g(){const e=this.#n.pending;this.#r!==null&&(this.#l=document.createDocumentFragment(),this.#l.append(this.#c),Ki(this.#r,this.#l)),this.#s===null&&(this.#s=ot(()=>e(this.#e)))}#k(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#k(e);return}if(this.#d+=e,this.#d===0){this.is_pending=!1;for(const a of this.#h)vn(a,On),kt(a);for(const a of this.#v)vn(a,wt),kt(a);this.#h.clear(),this.#v.clear(),this.#s&&da(this.#s,()=>{this.#s=null}),this.#l&&(this.#e.before(this.#l),this.#l=null)}}update_pending_count(e){this.#k(e),this.#u+=e,!(!this.#f||this.#p)&&(this.#p=!0,Nt(()=>{this.#p=!1,this.#f&&Ra(this.#f,this.#u)}))}get_effect_pending(){return this.#y(),t(this.#f)}error(e){var a=this.#n.onerror;let r=this.#n.failed;if(this.#m||!a&&!r)throw e;this.#r&&(Jn(this.#r),this.#r=null),this.#s&&(Jn(this.#s),this.#s=null),this.#i&&(Jn(this.#i),this.#i=null);var s=!1,i=!1;const o=()=>{if(s){kl();return}s=!0,i&&ll(),$t.ensure(),this.#u=0,this.#i!==null&&da(this.#i,()=>{this.#i=null}),this.is_pending=this.has_pending_snippet(),this.#r=this.#_(()=>(this.#m=!1,ot(()=>this.#a(this.#e)))),this.#d>0?this.#g():this.is_pending=!1};Nt(()=>{try{i=!0,a?.(e,o),i=!1}catch(c){Da(c,this.#o&&this.#o.parent)}r&&(this.#i=this.#_(()=>{$t.ensure(),this.#m=!0;try{return ot(()=>{r(this.#e,()=>e,()=>o)})}catch(c){return Da(c,this.#o.parent),null}finally{this.#m=!1}}))})}}function Ll(n,e,a,r){const s=Ps;var i=n.filter(m=>!m.settled);if(a.length===0&&i.length===0){r(e.map(s));return}var o=Be,c=Xe,l=Ml(),f=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(m=>m.promise)):null;function u(m){l();try{r(m)}catch(y){(c.f&zt)===0&&Da(y,c)}o?.deactivate(),js()}if(a.length===0){f.then(()=>u(e.map(s)));return}function d(){l(),Promise.all(a.map(m=>El(m))).then(m=>u([...e.map(s),...m])).catch(m=>Da(m,c))}f?f.then(d):d()}function Ml(){var n=Xe,e=Oe,a=ft,r=Be;return function(i=!0){Dt(n),mt(e),Ta(a),i&&r?.activate()}}function js(){Dt(null),mt(null),Ta(null)}function Ps(n){var e=Fn|On,a=Oe!==null&&(Oe.f&Fn)!==0?Oe:null;return Xe!==null&&(Xe.f|=Fa),{ctx:ft,deps:null,effects:null,equals:gi,f:e,fn:n,reactions:null,rv:0,v:Ln,wv:0,parent:a??Xe,ac:null}}function El(n,e,a){let r=Xe;r===null&&Yo();var s=r.b,i=void 0,o=ha(Ln),c=!Oe,l=new Map;return Ql(()=>{var f=fi();i=f.promise;try{Promise.resolve(n()).then(f.resolve,f.reject).then(()=>{u===Be&&u.committed&&u.deactivate(),js()})}catch(y){f.reject(y),js()}var u=Be;if(c){var d=s.is_rendered();s.update_pending_count(1),u.increment(d),l.get(u)?.reject(oa),l.delete(u),l.set(u,f)}const m=(y,k=void 0)=>{if(u.activate(),k)k!==oa&&(o.f|=Yt,Ra(o,k));else{(o.f&Yt)!==0&&(o.f^=Yt),Ra(o,y);for(const[w,_]of l){if(l.delete(w),w===u)break;_.reject(oa)}}c&&(s.update_pending_count(-1),u.decrement(d))};f.promise.then(m,y=>m(null,y||"unknown"))}),ur(()=>{for(const f of l.values())f.reject(oa)}),new Promise(f=>{function u(d){function m(){d===i?f(o):u(i)}d.then(m,m)}u(i)})}function C(n){const e=Ps(n);return Wi(e),e}function Ri(n){const e=Ps(n);return e.equals=bi,e}function Fl(n){var e=n.effects;if(e!==null){n.effects=null;for(var a=0;a<e.length;a+=1)Jn(e[a])}}function Ol(n){for(var e=n.parent;e!==null;){if((e.f&Fn)===0)return(e.f&zt)===0?e:null;e=e.parent}return null}function lr(n){var e,a=Xe;Dt(Ol(n));try{n.f&=~pa,Fl(n),e=Ji(n)}finally{Dt(a)}return e}function qi(n){var e=lr(n);if(!n.equals(e)&&(n.wv=Qi(),(!Be?.is_fork||n.deps===null)&&(n.v=e,n.deps===null))){vn(n,Rn);return}ta||(bt!==null?(cr()||Be?.is_fork)&&bt.set(n,e):or(n))}function zl(n){if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac?.abort(oa),e.teardown=Wo,e.ac=null,Wa(e,0),fr(e))}function Ci(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&qa(e)}let Bs=new Set;const ea=new Map;let Li=!1;function ha(n,e){var a={f:0,v:n,reactions:null,equals:gi,rv:0,wv:0};return a}function H(n,e){const a=ha(n);return Wi(a),a}function Nl(n,e=!1,a=!0){const r=ha(n);return e||(r.equals=bi),r}function h(n,e,a=!1){Oe!==null&&(!yt||(Oe.f&Fr)!==0)&&ki()&&(Oe.f&(Fn|Ht|ir|Fr))!==0&&(ut===null||!Aa.call(ut,n))&&ol();let r=a?_n(e):e;return Ra(n,r)}function Ra(n,e){if(!n.equals(e)){var a=n.v;ta?ea.set(n,e):ea.set(n,a),n.v=e;var r=$t.ensure();if(r.capture(n,a),(n.f&Fn)!==0){const s=n;(n.f&On)!==0&&lr(s),or(s)}n.wv=Qi(),Mi(n,On),Xe!==null&&(Xe.f&Rn)!==0&&(Xe.f&(xt|_a))===0&&(rt===null?Jl([n]):rt.push(n)),!r.is_fork&&Bs.size>0&&!Li&&Il()}return e}function Il(){Li=!1;for(const n of Bs)(n.f&Rn)!==0&&vn(n,wt),Ya(n)&&qa(n);Bs.clear()}function ka(n,e=1){var a=t(n),r=e===1?a++:a--;return h(n,a),r}function Ha(n){h(n,n.v+1)}function Mi(n,e){var a=n.reactions;if(a!==null)for(var r=a.length,s=0;s<r;s++){var i=a[s],o=i.f,c=(o&On)===0;if(c&&vn(i,e),(o&Fn)!==0){var l=i;bt?.delete(l),(o&pa)===0&&(o&ct&&(i.f|=pa),Mi(l,wt))}else c&&((o&Ht)!==0&&Et!==null&&Et.add(i),kt(i))}}function _n(n){if(typeof n!="object"||n===null||ua in n)return n;const e=rr(n);if(e!==di&&e!==Ko)return n;var a=new Map,r=ys(n),s=H(0),i=fa,o=c=>{if(fa===i)return c();var l=Oe,f=fa;mt(null),Br(i);var u=c();return mt(l),Br(f),u};return r&&a.set("length",H(n.length)),new Proxy(n,{defineProperty(c,l,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&rl();var u=a.get(l);return u===void 0?o(()=>{var d=H(f.value);return a.set(l,d),d}):h(u,f.value,!0),!0},deleteProperty(c,l){var f=a.get(l);if(f===void 0){if(l in c){const u=o(()=>H(Ln));a.set(l,u),Ha(s)}}else h(f,Ln),Ha(s);return!0},get(c,l,f){if(l===ua)return n;var u=a.get(l),d=l in c;if(u===void 0&&(!d||ya(c,l)?.writable)&&(u=o(()=>{var y=_n(d?c[l]:Ln),k=H(y);return k}),a.set(l,u)),u!==void 0){var m=t(u);return m===Ln?void 0:m}return Reflect.get(c,l,f)},getOwnPropertyDescriptor(c,l){var f=Reflect.getOwnPropertyDescriptor(c,l);if(f&&"value"in f){var u=a.get(l);u&&(f.value=t(u))}else if(f===void 0){var d=a.get(l),m=d?.v;if(d!==void 0&&m!==Ln)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(c,l){if(l===ua)return!0;var f=a.get(l),u=f!==void 0&&f.v!==Ln||Reflect.has(c,l);if(f!==void 0||Xe!==null&&(!u||ya(c,l)?.writable)){f===void 0&&(f=o(()=>{var m=u?_n(c[l]):Ln,y=H(m);return y}),a.set(l,f));var d=t(f);if(d===Ln)return!1}return u},set(c,l,f,u){var d=a.get(l),m=l in c;if(r&&l==="length")for(var y=f;y<d.v;y+=1){var k=a.get(y+"");k!==void 0?h(k,Ln):y in c&&(k=o(()=>H(Ln)),a.set(y+"",k))}if(d===void 0)(!m||ya(c,l)?.writable)&&(d=o(()=>H(void 0)),h(d,_n(f)),a.set(l,d));else{m=d.v!==Ln;var w=o(()=>_n(f));h(d,w)}var _=Reflect.getOwnPropertyDescriptor(c,l);if(_?.set&&_.set.call(u,f),!m){if(r&&typeof l=="string"){var D=a.get("length"),L=Number(l);Number.isInteger(L)&&L>=D.v&&h(D,L+1)}Ha(s)}return!0},ownKeys(c){t(s);var l=Reflect.ownKeys(c).filter(d=>{var m=a.get(d);return m===void 0||m.v!==Ln});for(var[f,u]of a)u.v!==Ln&&!(f in c)&&l.push(f);return l},setPrototypeOf(){il()}})}function zr(n){try{if(n!==null&&typeof n=="object"&&ua in n)return n[ua]}catch{}return n}function jl(n,e){return Object.is(zr(n),zr(e))}var Nr,Ei,Fi,Oi;function Bl(){if(Nr===void 0){Nr=window,Ei=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,a=Text.prototype;Fi=ya(e,"firstChild").get,Oi=ya(e,"nextSibling").get,Er(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Er(a)&&(a.__t=void 0)}}function It(n=""){return document.createTextNode(n)}function Tt(n){return Fi.call(n)}function Ja(n){return Oi.call(n)}function x(n,e){return Tt(n)}function Te(n,e=!1){{var a=Tt(n);return a instanceof Comment&&a.data===""?Ja(a):a}}function v(n,e=1,a=!1){let r=n;for(;e--;)r=Ja(r);return r}function Hl(n){n.textContent=""}function zi(){return!1}function Vl(n,e,a){return document.createElementNS(_i,n,void 0)}let Ir=!1;function Gl(){Ir||(Ir=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function As(n){var e=Oe,a=Xe;mt(null),Dt(null);try{return n()}finally{mt(e),Dt(a)}}function Ni(n,e,a,r=a){n.addEventListener(e,()=>As(a));const s=n.__on_r;s?n.__on_r=()=>{s(),r(!0)}:n.__on_r=()=>r(!0),Gl()}function Kl(n){Xe===null&&(Oe===null&&tl(),nl()),ta&&el()}function Wl(n,e){var a=e.last;a===null?e.last=e.first=n:(a.next=n,n.prev=a,e.last=n)}function Vt(n,e,a){var r=Xe;r!==null&&(r.f&et)!==0&&(n|=et);var s={ctx:ft,deps:null,nodes:null,f:n|On|ct,first:null,fn:e,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};if(a)try{qa(s)}catch(c){throw Jn(s),c}else e!==null&&kt(s);var i=s;if(a&&i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Fa)===0&&(i=i.first,(n&Ht)!==0&&(n&ma)!==0&&i!==null&&(i.f|=ma)),i!==null&&(i.parent=r,r!==null&&Wl(i,r),Oe!==null&&(Oe.f&Fn)!==0&&(n&_a)===0)){var o=Oe;(o.effects??=[]).push(i)}return s}function cr(){return Oe!==null&&!yt}function ur(n){const e=Vt(xs,null,!1);return vn(e,Rn),e.teardown=n,e}function He(n){Kl();var e=Xe.f,a=!Oe&&(e&xt)!==0&&(e&Za)===0;if(a){var r=ft;(r.e??=[]).push(n)}else return Ii(n)}function Ii(n){return Vt(Ka|Qo,n,!1)}function Ul(n){$t.ensure();const e=Vt(_a|Fa,n,!0);return(a={})=>new Promise(r=>{a.outro?da(e,()=>{Jn(e),r(void 0)}):(Jn(e),r(void 0))})}function Xa(n){return Vt(Ka,n,!1)}function Ql(n){return Vt(ir|Fa,n,!0)}function dr(n,e=0){return Vt(xs|e,n,!0)}function te(n,e=[],a=[],r=[]){Ll(r,e,a,s=>{Vt(xs,()=>n(...s.map(t)),!0)})}function Ts(n,e=0){var a=Vt(Ht|e,n,!0);return a}function ot(n){return Vt(xt|Fa,n,!0)}function ji(n){var e=n.teardown;if(e!==null){const a=ta,r=Oe;jr(!0),mt(null);try{e.call(null)}finally{jr(a),mt(r)}}}function fr(n,e=!1){var a=n.first;for(n.first=n.last=null;a!==null;){const s=a.ac;s!==null&&As(()=>{s.abort(oa)});var r=a.next;(a.f&_a)!==0?a.parent=null:Jn(a,e),a=r}}function Zl(n){for(var e=n.first;e!==null;){var a=e.next;(e.f&xt)===0&&Jn(e),e=a}}function Jn(n,e=!0){var a=!1;(e||(n.f&hi)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Bi(n.nodes.start,n.nodes.end),a=!0),fr(n,e&&!a),Wa(n,0),vn(n,zt);var r=n.nodes&&n.nodes.t;if(r!==null)for(const i of r)i.stop();ji(n);var s=n.parent;s!==null&&s.first!==null&&Hi(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=null}function Bi(n,e){for(;n!==null;){var a=n===e?null:Ja(n);n.remove(),n=a}}function Hi(n){var e=n.parent,a=n.prev,r=n.next;a!==null&&(a.next=r),r!==null&&(r.prev=a),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=a))}function da(n,e,a=!0){var r=[];Vi(n,r,!0);var s=()=>{a&&Jn(n),e&&e()},i=r.length;if(i>0){var o=()=>--i||s();for(var c of r)c.out(o)}else s()}function Vi(n,e,a){if((n.f&et)===0){n.f^=et;var r=n.nodes&&n.nodes.t;if(r!==null)for(const c of r)(c.is_global||a)&&e.push(c);for(var s=n.first;s!==null;){var i=s.next,o=(s.f&ma)!==0||(s.f&xt)!==0&&(n.f&Ht)!==0;Vi(s,e,o?a:!1),s=i}}}function mr(n){Gi(n,!0)}function Gi(n,e){if((n.f&et)!==0){n.f^=et,(n.f&Rn)===0&&(vn(n,On),kt(n));for(var a=n.first;a!==null;){var r=a.next,s=(a.f&ma)!==0||(a.f&xt)!==0;Gi(a,s?e:!1),a=r}var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||e)&&o.in()}}function Ki(n,e){if(n.nodes)for(var a=n.nodes.start,r=n.nodes.end;a!==null;){var s=a===r?null:Ja(a);e.append(a),a=s}}let ls=!1,ta=!1;function jr(n){ta=n}let Oe=null,yt=!1;function mt(n){Oe=n}let Xe=null;function Dt(n){Xe=n}let ut=null;function Wi(n){Oe!==null&&(ut===null?ut=[n]:ut.push(n))}let Qn=null,$n=0,rt=null;function Jl(n){rt=n}let Ui=1,ca=0,fa=ca;function Br(n){fa=n}function Qi(){return++Ui}function Ya(n){var e=n.f;if((e&On)!==0)return!0;if(e&Fn&&(n.f&=~pa),(e&wt)!==0){for(var a=n.deps,r=a.length,s=0;s<r;s++){var i=a[s];if(Ya(i)&&qi(i),i.wv>n.wv)return!0}(e&ct)!==0&&bt===null&&vn(n,Rn)}return!1}function Zi(n,e,a=!0){var r=n.reactions;if(r!==null&&!(ut!==null&&Aa.call(ut,n)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&Fn)!==0?Zi(i,e,!1):e===i&&(a?vn(i,On):(i.f&Rn)!==0&&vn(i,wt),kt(i))}}function Ji(n){var e=Qn,a=$n,r=rt,s=Oe,i=ut,o=ft,c=yt,l=fa,f=n.f;Qn=null,$n=0,rt=null,Oe=(f&(xt|_a))===0?n:null,ut=null,Ta(n.ctx),yt=!1,fa=++ca,n.ac!==null&&(As(()=>{n.ac.abort(oa)}),n.ac=null);try{n.f|=Ns;var u=n.fn,d=u();n.f|=Za;var m=n.deps,y=Be?.is_fork;if(Qn!==null){var k;if(y||Wa(n,$n),m!==null&&$n>0)for(m.length=$n+Qn.length,k=0;k<Qn.length;k++)m[$n+k]=Qn[k];else n.deps=m=Qn;if(cr()&&(n.f&ct)!==0)for(k=$n;k<m.length;k++)(m[k].reactions??=[]).push(n)}else!y&&m!==null&&$n<m.length&&(Wa(n,$n),m.length=$n);if(ki()&&rt!==null&&!yt&&m!==null&&(n.f&(Fn|wt|On))===0)for(k=0;k<rt.length;k++)Zi(rt[k],n);if(s!==null&&s!==n){if(ca++,s.deps!==null)for(let w=0;w<a;w+=1)s.deps[w].rv=ca;if(e!==null)for(const w of e)w.rv=ca;rt!==null&&(r===null?r=rt:r.push(...rt))}return(n.f&Yt)!==0&&(n.f^=Yt),d}catch(w){return wi(w)}finally{n.f^=Ns,Qn=e,$n=a,rt=r,Oe=s,ut=i,Ta(o),yt=c,fa=l}}function Xl(n,e){let a=e.reactions;if(a!==null){var r=Ho.call(a,n);if(r!==-1){var s=a.length-1;s===0?a=e.reactions=null:(a[r]=a[s],a.pop())}}if(a===null&&(e.f&Fn)!==0&&(Qn===null||!Aa.call(Qn,e))){var i=e;(i.f&ct)!==0&&(i.f^=ct,i.f&=~pa),or(i),zl(i),Wa(i,0)}}function Wa(n,e){var a=n.deps;if(a!==null)for(var r=e;r<a.length;r++)Xl(n,a[r])}function qa(n){var e=n.f;if((e&zt)===0){vn(n,Rn);var a=Xe,r=ls;Xe=n,ls=!0;try{(e&(Ht|mi))!==0?Zl(n):fr(n),ji(n);var s=Ji(n);n.teardown=typeof s=="function"?s:null,n.wv=Ui;var i;zs&&wl&&(n.f&On)!==0&&n.deps}finally{ls=r,Xe=a}}}async function Xi(){await Promise.resolve(),Al()}function t(n){var e=n.f,a=(e&Fn)!==0;if(Oe!==null&&!yt){var r=Xe!==null&&(Xe.f&zt)!==0;if(!r&&(ut===null||!Aa.call(ut,n))){var s=Oe.deps;if((Oe.f&Ns)!==0)n.rv<ca&&(n.rv=ca,Qn===null&&s!==null&&s[$n]===n?$n++:Qn===null?Qn=[n]:Qn.push(n));else{(Oe.deps??=[]).push(n);var i=n.reactions;i===null?n.reactions=[Oe]:Aa.call(i,Oe)||i.push(Oe)}}}if(ta&&ea.has(n))return ea.get(n);if(a){var o=n;if(ta){var c=o.v;return((o.f&Rn)===0&&o.reactions!==null||$i(o))&&(c=lr(o)),ea.set(o,c),c}var l=(o.f&ct)===0&&!yt&&Oe!==null&&(ls||(Oe.f&ct)!==0),f=(o.f&Za)===0;Ya(o)&&(l&&(o.f|=ct),qi(o)),l&&!f&&(Ci(o),Yi(o))}if(bt?.has(n))return bt.get(n);if((n.f&Yt)!==0)throw n.v;return n.v}function Yi(n){if(n.f|=ct,n.deps!==null)for(const e of n.deps)(e.reactions??=[]).push(n),(e.f&Fn)!==0&&(e.f&ct)===0&&(Ci(e),Yi(e))}function $i(n){if(n.v===Ln)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(ea.has(e)||(e.f&Fn)!==0&&$i(e))return!0;return!1}function Ot(n){var e=yt;try{return yt=!0,n()}finally{yt=e}}const Yl=["touchstart","touchmove"];function $l(n){return Yl.includes(n)}const eo=Symbol("events"),no=new Set,Hs=new Set;function ec(n,e,a,r={}){function s(i){if(r.capture||Vs.call(e,i),!i.cancelBubble)return As(()=>a?.call(this,i))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?Nt(()=>{e.addEventListener(n,s,r)}):e.addEventListener(n,s,r),s}function Z(n,e,a,r,s){var i={capture:r,passive:s},o=ec(n,e,a,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ur(()=>{e.removeEventListener(n,o,i)})}function B(n,e,a){(e[eo]??={})[n]=a}function Ye(n){for(var e=0;e<n.length;e++)no.add(n[e]);for(var a of Hs)a(n)}let Hr=null;function Vs(n){var e=this,a=e.ownerDocument,r=n.type,s=n.composedPath?.()||[],i=s[0]||n.target;Hr=n;var o=0,c=Hr===n&&n.__root;if(c){var l=s.indexOf(c);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var f=s.indexOf(e);if(f===-1)return;l<=f&&(o=l)}if(i=s[o]||n.target,i!==e){Vo(n,"currentTarget",{configurable:!0,get(){return i||a}});var u=Oe,d=Xe;mt(null),Dt(null);try{for(var m,y=[];i!==null;){var k=i.assignedSlot||i.parentNode||i.host||null;try{var w=i[eo]?.[r];w!=null&&(!i.disabled||n.target===i)&&w.call(i,n)}catch(_){m?y.push(_):m=_}if(n.cancelBubble||k===e||k===null)break;i=k}if(m){for(let _ of y)queueMicrotask(()=>{throw _});throw m}}finally{n.__root=e,delete n.currentTarget,mt(u),Dt(d)}}}const nc=globalThis?.window?.trustedTypes?.createPolicy("svelte-trusted-html",{createHTML:n=>n});function tc(n){return nc?.createHTML(n)??n}function pr(n,e=!1){var a=Vl("template");return n=n.replaceAll("<!>","<!---->"),a.innerHTML=e?tc(n):n,a.content}function Ca(n,e){var a=Xe;a.nodes===null&&(a.nodes={start:n,end:e,a:null,t:null})}function T(n,e){var a=(e&_l)!==0,r=(e&gl)!==0,s,i=!n.startsWith("<!>");return()=>{s===void 0&&(s=pr(i?n:"<!>"+n,!0),a||(s=Tt(s)));var o=r||Ei?document.importNode(s,!0):s.cloneNode(!0);if(a){var c=Tt(o),l=o.lastChild;Ca(c,l)}else Ca(o,o);return o}}function ac(n,e,a="svg"){var r=!n.startsWith("<!>"),s=`<${a}>${r?n:"<!>"+n}</${a}>`,i;return()=>{if(!i){var o=pr(s,!0),c=Tt(o);i=Tt(c)}var l=i.cloneNode(!0);return Ca(l,l),l}}function sc(n,e){return ac(n,e,"svg")}function rc(n=""){{var e=It(n+"");return Ca(e,e),e}}function La(){var n=document.createDocumentFragment(),e=document.createComment(""),a=It();return n.append(e,a),Ca(e,a),n}function A(n,e){n!==null&&n.before(e)}function Se(n,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(n.__t??=n.nodeValue)&&(n.__t=a,n.nodeValue=a+"")}function ic(n,e){return oc(n,e)}const ns=new Map;function oc(n,{target:e,anchor:a,props:r={},events:s,context:i,intro:o=!0}){Bl();var c=new Set,l=d=>{for(var m=0;m<d.length;m++){var y=d[m];if(!c.has(y)){c.add(y);var k=$l(y);for(const D of[e,document]){var w=ns.get(D);w===void 0&&(w=new Map,ns.set(D,w));var _=w.get(y);_===void 0?(D.addEventListener(y,Vs,{passive:k}),w.set(y,1)):w.set(y,_+1)}}}};l(ws(no)),Hs.add(l);var f=void 0,u=Ul(()=>{var d=a??e.appendChild(It());return ql(d,{pending:()=>{}},m=>{ke({});var y=ft;i&&(y.c=i),s&&(r.$$events=s),f=n(m,r)||{},ye()}),()=>{for(var m of c)for(const w of[e,document]){var y=ns.get(w),k=y.get(m);--k==0?(w.removeEventListener(m,Vs),y.delete(m),y.size===0&&ns.delete(w)):y.set(m,k)}Hs.delete(l),d!==a&&d.parentNode?.removeChild(d)}});return lc.set(f,u),f}let lc=new WeakMap;class to{anchor;#e=new Map;#t=new Map;#n=new Map;#a=new Set;#o=!0;constructor(e,a=!0){this.anchor=e,this.#o=a}#r=()=>{var e=Be;if(this.#e.has(e)){var a=this.#e.get(e),r=this.#t.get(a);if(r)mr(r),this.#a.delete(a);else{var s=this.#n.get(a);s&&(this.#t.set(a,s.effect),this.#n.delete(a),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of this.#e){if(this.#e.delete(i),i===e)break;const c=this.#n.get(o);c&&(Jn(c.effect),this.#n.delete(o))}for(const[i,o]of this.#t){if(i===a||this.#a.has(i))continue;const c=()=>{if(Array.from(this.#e.values()).includes(i)){var f=document.createDocumentFragment();Ki(o,f),f.append(It()),this.#n.set(i,{effect:o,fragment:f})}else Jn(o);this.#a.delete(i),this.#t.delete(i)};this.#o||!r?(this.#a.add(i),da(o,c,!1)):c()}}};#s=e=>{this.#e.delete(e);const a=Array.from(this.#e.values());for(const[r,s]of this.#n)a.includes(r)||(Jn(s.effect),this.#n.delete(r))};ensure(e,a){var r=Be,s=zi();if(a&&!this.#t.has(e)&&!this.#n.has(e))if(s){var i=document.createDocumentFragment(),o=It();i.append(o),this.#n.set(e,{effect:ot(()=>a(o)),fragment:i})}else this.#t.set(e,ot(()=>a(this.anchor)));if(this.#e.set(r,e),s){for(const[c,l]of this.#t)c===e?r.unskip_effect(l):r.skip_effect(l);for(const[c,l]of this.#n)c===e?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(this.#r),r.ondiscard(this.#s)}else this.#r()}}function J(n,e,a=!1){var r=new to(n),s=a?ma:0;function i(o,c){r.ensure(o,c)}Ts(()=>{var o=!1;e((c,l=0)=>{o=!0,i(l,c)}),o||i(!1,null)},s)}function We(n,e){return e}function cc(n,e,a){for(var r=[],s=e.length,i,o=e.length,c=0;c<s;c++){let d=e[c];da(d,()=>{if(i){if(i.pending.delete(d),i.done.add(d),i.pending.size===0){var m=n.outrogroups;Gs(ws(i.done)),m.delete(i),m.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=r.length===0&&a!==null;if(l){var f=a,u=f.parentNode;Hl(u),u.append(f),n.items.clear()}Gs(e,!l)}else i={pending:new Set(e),done:new Set},(n.outrogroups??=new Set).add(i)}function Gs(n,e=!0){for(var a=0;a<n.length;a++)Jn(n[a],e)}var Vr;function Ue(n,e,a,r,s,i=null){var o=n,c=new Map,l=(e&vi)!==0;if(l){var f=n;o=f.appendChild(It())}var u=null,d=Ri(()=>{var D=a();return ys(D)?D:D==null?[]:ws(D)}),m,y=!0;function k(){_.fallback=u,uc(_,m,o,e,r),u!==null&&(m.length===0?(u.f&Ft)===0?mr(u):(u.f^=Ft,Ia(u,null,o)):da(u,()=>{u=null}))}var w=Ts(()=>{m=t(d);for(var D=m.length,L=new Set,z=Be,q=zi(),S=0;S<D;S+=1){var g=m[S],R=r(g,S),O=y?null:c.get(R);O?(O.v&&Ra(O.v,g),O.i&&Ra(O.i,S),q&&z.unskip_effect(O.e)):(O=dc(c,y?o:Vr??=It(),g,R,S,s,e,a),y||(O.e.f|=Ft),c.set(R,O)),L.add(R)}if(D===0&&i&&!u&&(y?u=ot(()=>i(o)):(u=ot(()=>i(Vr??=It())),u.f|=Ft)),D>L.size&&$o(),!y)if(q){for(const[I,F]of c)L.has(I)||z.skip_effect(F.e);z.oncommit(k),z.ondiscard(()=>{})}else k();t(d)}),_={effect:w,items:c,outrogroups:null,fallback:u};y=!1}function Oa(n){for(;n!==null&&(n.f&xt)===0;)n=n.next;return n}function uc(n,e,a,r,s){var i=(r&dl)!==0,o=e.length,c=n.items,l=Oa(n.effect.first),f,u=null,d,m=[],y=[],k,w,_,D;if(i)for(D=0;D<o;D+=1)k=e[D],w=s(k,D),_=c.get(w).e,(_.f&Ft)===0&&(_.nodes?.a?.measure(),(d??=new Set).add(_));for(D=0;D<o;D+=1){if(k=e[D],w=s(k,D),_=c.get(w).e,n.outrogroups!==null)for(const F of n.outrogroups)F.pending.delete(_),F.done.delete(_);if((_.f&Ft)!==0)if(_.f^=Ft,_===l)Ia(_,null,a);else{var L=u?u.next:l;_===n.effect.last&&(n.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),Zt(n,u,_),Zt(n,_,L),Ia(_,L,a),u=_,m=[],y=[],l=Oa(u.next);continue}if((_.f&et)!==0&&(mr(_),i&&(_.nodes?.a?.unfix(),(d??=new Set).delete(_))),_!==l){if(f!==void 0&&f.has(_)){if(m.length<y.length){var z=y[0],q;u=z.prev;var S=m[0],g=m[m.length-1];for(q=0;q<m.length;q+=1)Ia(m[q],z,a);for(q=0;q<y.length;q+=1)f.delete(y[q]);Zt(n,S.prev,g.next),Zt(n,u,S),Zt(n,g,z),l=z,u=g,D-=1,m=[],y=[]}else f.delete(_),Ia(_,l,a),Zt(n,_.prev,_.next),Zt(n,_,u===null?n.effect.first:u.next),Zt(n,u,_),u=_;continue}for(m=[],y=[];l!==null&&l!==_;)(f??=new Set).add(l),y.push(l),l=Oa(l.next);if(l===null)continue}(_.f&Ft)===0&&m.push(_),u=_,l=Oa(_.next)}if(n.outrogroups!==null){for(const F of n.outrogroups)F.pending.size===0&&(Gs(ws(F.done)),n.outrogroups?.delete(F));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||f!==void 0){var R=[];if(f!==void 0)for(_ of f)(_.f&et)===0&&R.push(_);for(;l!==null;)(l.f&et)===0&&l!==n.fallback&&R.push(l),l=Oa(l.next);var O=R.length;if(O>0){var I=(r&vi)!==0&&o===0?a:null;if(i){for(D=0;D<O;D+=1)R[D].nodes?.a?.measure();for(D=0;D<O;D+=1)R[D].nodes?.a?.fix()}cc(n,R,I)}}i&&Nt(()=>{if(d!==void 0)for(_ of d)_.nodes?.a?.apply()})}function dc(n,e,a,r,s,i,o,c){var l=(o&cl)!==0?(o&fl)===0?Nl(a,!1,!1):ha(a):null,f=(o&ul)!==0?ha(s):null;return{v:l,i:f,e:ot(()=>(i(e,l??a,f??s,c),()=>{n.delete(r)}))}}function Ia(n,e,a){if(n.nodes)for(var r=n.nodes.start,s=n.nodes.end,i=e&&(e.f&Ft)===0?e.nodes.start:a;r!==null;){var o=Ja(r);if(i.before(r),r===s)return;r=o}}function Zt(n,e,a){e===null?n.effect.first=a:e.next=a,a===null?n.effect.last=e:a.prev=e}function ao(n,e,a=!1,r=!1,s=!1){var i=n,o="";te(()=>{var c=Xe;if(o!==(o=e()??"")&&(c.nodes!==null&&(Bi(c.nodes.start,c.nodes.end),c.nodes=null),o!=="")){var l=o+"";a?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var f=pr(l);if((a||r)&&(f=Tt(f)),Ca(Tt(f),f.lastChild),a||r)for(;Tt(f);)i.before(Tt(f));else i.before(f)}})}function hr(n,e,...a){var r=new to(n);Ts(()=>{const s=e()??null;r.ensure(s,s&&(i=>s(i,...a)))},ma)}function so(n,e,a){Xa(()=>{var r=Ot(()=>e(n,a?.())||{});if(r?.destroy)return()=>r.destroy()})}const Gr=[...` 	
\r\f \v\uFEFF`];function fc(n,e,a){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),a){for(var s in a)if(a[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var c=o+i;(o===0||Gr.includes(r[o-1]))&&(c===r.length||Gr.includes(r[c]))?r=(o===0?"":r.substring(0,o))+r.substring(c+1):o=c}}return r===""?null:r}function Kr(n,e=!1){var a=e?" !important;":";",r="";for(var s in n){var i=n[s];i!=null&&i!==""&&(r+=" "+s+": "+i+a)}return r}function Ls(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function mc(n,e){if(e){var a="",r,s;if(Array.isArray(e)?(r=e[0],s=e[1]):r=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,c=!1,l=[];r&&l.push(...Object.keys(r).map(Ls)),s&&l.push(...Object.keys(s).map(Ls));var f=0,u=-1;const w=n.length;for(var d=0;d<w;d++){var m=n[d];if(c?m==="/"&&n[d-1]==="*"&&(c=!1):i?i===m&&(i=!1):m==="/"&&n[d+1]==="*"?c=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!c&&i===!1&&o===0){if(m===":"&&u===-1)u=d;else if(m===";"||d===w-1){if(u!==-1){var y=Ls(n.substring(f,u).trim());if(!l.includes(y)){m!==";"&&d++;var k=n.substring(f,d).trim();a+=" "+k+";"}}f=d+1,u=-1}}}}return r&&(a+=Kr(r)),s&&(a+=Kr(s,!0)),a=a.trim(),a===""?null:a}return n==null?null:String(n)}function ve(n,e,a,r,s,i){var o=n.__className;if(o!==a||o===void 0){var c=fc(a,r,i);c==null?n.removeAttribute("class"):n.className=c,n.__className=a}else if(i&&s!==i)for(var l in i){var f=!!i[l];(s==null||f!==!!s[l])&&n.classList.toggle(l,f)}return i}function Ms(n,e={},a,r){for(var s in a){var i=a[s];e[s]!==i&&(a[s]==null?n.style.removeProperty(s):n.style.setProperty(s,i,r))}}function $e(n,e,a,r){var s=n.__style;if(s!==e){var i=mc(e,r);i==null?n.removeAttribute("style"):n.style.cssText=i,n.__style=e}else r&&(Array.isArray(r)?(Ms(n,a?.[0],r[0]),Ms(n,a?.[1],r[1],"important")):Ms(n,a,r));return r}function ro(n,e,a=!1){if(n.multiple){if(e==null)return;if(!ys(e))return bl();for(var r of n.options)r.selected=e.includes(Va(r));return}for(r of n.options){var s=Va(r);if(jl(s,e)){r.selected=!0;return}}(!a||e!==void 0)&&(n.selectedIndex=-1)}function pc(n){var e=new MutationObserver(()=>{ro(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ur(()=>{e.disconnect()})}function hc(n,e,a=e){var r=new WeakSet,s=!0;Ni(n,"change",i=>{var o=i?"[selected]":":checked",c;if(n.multiple)c=[].map.call(n.querySelectorAll(o),Va);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");c=l&&Va(l)}a(c),Be!==null&&r.add(Be)}),Xa(()=>{var i=e();if(n===document.activeElement){var o=fs??Be;if(r.has(o))return}if(ro(n,i,s),s&&i===void 0){var c=n.querySelector(":checked");c!==null&&(i=Va(c),a(i))}n.__value=i,s=!1}),pc(n)}function Va(n){return"__value"in n?n.__value:n.value}const vc=Symbol("is custom element"),_c=Symbol("is html"),gc=Xo?"progress":"PROGRESS";function na(n,e){var a=io(n);a.value===(a.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==gc)||(n.value=e??"")}function en(n,e,a,r){var s=io(n);s[e]!==(s[e]=a)&&(e==="loading"&&(n[Jo]=a),a==null?n.removeAttribute(e):typeof a!="string"&&bc(n).includes(e)?n[e]=a:n.setAttribute(e,a))}function io(n){return n.__attributes??={[vc]:n.nodeName.includes("-"),[_c]:n.namespaceURI===_i}}var Wr=new Map;function bc(n){var e=n.getAttribute("is")||n.nodeName,a=Wr.get(e);if(a)return a;Wr.set(e,a=[]);for(var r,s=n,i=Element.prototype;i!==s;){r=Go(s);for(var o in r)r[o].set&&a.push(o);s=rr(s)}return a}function Zn(n,e,a=e){var r=new WeakSet;Ni(n,"input",async s=>{var i=s?n.defaultValue:n.value;if(i=Es(n)?Fs(i):i,a(i),Be!==null&&r.add(Be),await Xi(),i!==(i=e())){var o=n.selectionStart,c=n.selectionEnd,l=n.value.length;if(n.value=i??"",c!==null){var f=n.value.length;o===c&&c===l&&f>l?(n.selectionStart=f,n.selectionEnd=f):(n.selectionStart=o,n.selectionEnd=Math.min(c,f))}}}),Ot(e)==null&&n.value&&(a(Es(n)?Fs(n.value):n.value),Be!==null&&r.add(Be)),dr(()=>{var s=e();if(n===document.activeElement){var i=fs??Be;if(r.has(i))return}Es(n)&&s===Fs(n.value)||n.type==="date"&&!s&&!n.value||s!==n.value&&(n.value=s??"")})}function Es(n){var e=n.type;return e==="number"||e==="range"}function Fs(n){return n===""?null:+n}function Ur(n,e){return n===e||n?.[ua]===e}function jt(n={},e,a,r){return Xa(()=>{var s,i;return dr(()=>{s=i,i=[],Ot(()=>{n!==a(...i)&&(e(n,...i),s&&Ur(a(...s),n)&&e(null,...s))})}),()=>{Nt(()=>{i&&Ur(a(...i),n)&&e(null,...i)})}}),n}let ts=!1;function kc(n){var e=ts;try{return ts=!1,[n(),ts]}finally{ts=e}}function _e(n,e,a,r){var s=(a&hl)!==0,i=(a&vl)!==0,o=r,c=!0,l=()=>(c&&(c=!1,o=i?Ot(r):r),o),f;if(s){var u=ua in n||Zo in n;f=ya(n,e)?.set??(u&&e in n?L=>n[e]=L:void 0)}var d,m=!1;s?[d,m]=kc(()=>n[e]):d=n[e],d===void 0&&r!==void 0&&(d=l(),f&&(sl(),f(d)));var y;if(y=()=>{var L=n[e];return L===void 0?l():(c=!0,L)},(a&pl)===0)return y;if(f){var k=n.$$legacy;return(function(L,z){return arguments.length>0?((!z||k||m)&&f(z?y():L),L):y()})}var w=!1,_=((a&ml)!==0?Ps:Ri)(()=>(w=!1,y()));s&&t(_);var D=Xe;return(function(L,z){if(arguments.length>0){const q=z?t(_):s?_n(L):L;return h(_,q),w=!0,o!==void 0&&(o=q),L}return ta&&w||(D.f&zt)!==0?_.v:t(_)})}const yc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(yc);const wc=`
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
focus = "step_reverb_demo"
`,Qr="gb-daw-user-tdb";class Pc{libraryText=Sc;#e=H(_n(localStorage.getItem(Qr)??""));get userText(){return t(this.#e)}set userText(e){h(this.#e,e,!0)}#t=C(()=>this.userText?this.userText+(this.userText.endsWith(`
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
`?r-1:r;this.userText=this.userText.slice(0,c)+this.userText.slice(o),this.persist()}resetUser(){this.userText="",this.persist()}persist(){localStorage.setItem(Qr,this.userText)}reload(){this.revision++}}const Y=new Pc;let Zr=!1;async function Ds(){Zr||(await wasm_bindgen(),Zr=!0)}async function oo(n){await Ds();const e=wasm_bindgen.list_instruments(n);return JSON.parse(e)}async function Ac(n,e){await Ds();const a=wasm_bindgen.resolve_instrument(n,e);return JSON.parse(a)}async function Tc(n){return await Ds(),wasm_bindgen.voice_config_to_toml(JSON.stringify(n))}async function Jr(n){await Ds();const e=wasm_bindgen.voice_config_activity(JSON.stringify(n));return JSON.parse(e)}class Dc{#e=H(null);get position(){return t(this.#e)}set position(e){h(this.#e,e,!0)}#t=H(null);get sourceMap(){return t(this.#t)}set sourceMap(e){h(this.#t,e,!0)}#n=H(!1);get playing(){return t(this.#n)}set playing(e){h(this.#n,e,!0)}updatePosition(e){this.position=e}}const xe=new Dc;class Rc{#e=H(null);get region(){return t(this.#e)}set region(e){h(this.#e,e,!0)}bridge=null;setBridge(e){this.bridge=e}setRegion(e){this.region=e,this.bridge?.setFocus(e)}clearRegion(){this.setRegion(null)}get totalDuration(){return xe.sourceMap?.timeline?.total_duration_secs??0}get isFullSong(){return this.region?this.region.start_secs<=0&&this.region.end_secs>=this.totalDuration:!0}get effectiveRegion(){return this.region?this.region:{start_secs:0,end_secs:this.totalDuration}}notchInPart(e,a,r){const s=a.part_start_secs[r],i=a.part_duration_secs[r];if(s==null||i==null||i<=0)return null;const o=e-s;return o<0||o>i?null:o/i}notchInClip(e,a,r,s,i){const o=a.part_start_secs[r];if(o==null)return null;const c=a.clip_timings[r]?.[s]?.[i];if(!c||c.duration_secs<=0)return null;const l=o+c.offset_secs,f=e-l;return f<0||f>c.duration_secs?null:f/c.duration_secs}partTimeRange(e,a){const r=e.part_start_secs[a],s=e.part_duration_secs[a];return r==null||s==null||s<=0?null:{start_secs:r,end_secs:r+s}}clipTimeRange(e,a,r,s){const i=e.part_start_secs[a];if(i==null)return null;const o=e.clip_timings[a]?.[r]?.[s];return!o||o.duration_secs<=0?null:{start_secs:i+o.offset_secs,end_secs:i+o.offset_secs+o.duration_secs}}}const Ze=new Rc,Xr="gb-daw-theme";class qc{#e=H("system");get mode(){return t(this.#e)}set mode(e){h(this.#e,e,!0)}#t=H("dark");get _systemPref(){return t(this.#t)}set _systemPref(e){h(this.#t,e,!0)}#n=C(()=>this.mode==="system"?this._systemPref:this.mode);get resolved(){return t(this.#n)}set resolved(e){h(this.#n,e)}constructor(){const e=window.matchMedia("(prefers-color-scheme: dark)");this._systemPref=e.matches?"dark":"light",e.addEventListener("change",r=>{this._systemPref=r.matches?"dark":"light"});const a=localStorage.getItem(Xr);(a==="dark"||a==="light"||a==="system")&&(this.mode=a)}toggle(){const e=["dark","light","system"],a=e.indexOf(this.mode);this.setMode(e[(a+1)%e.length])}setMode(e){this.mode=e,localStorage.setItem(Xr,e)}}const Dn=new qc;class Cc{#e=H(_n(new Set));get mutedPartTracks(){return t(this.#e)}set mutedPartTracks(e){h(this.#e,e,!0)}#t=H(_n(new Set));get soloPartTracks(){return t(this.#t)}set soloPartTracks(e){h(this.#t,e,!0)}#n=H(_n(new Set));get mutedPatternLabels(){return t(this.#n)}set mutedPatternLabels(e){h(this.#n,e,!0)}#a=H(_n(new Set));get soloPatternLabels(){return t(this.#a)}set soloPatternLabels(e){h(this.#a,e,!0)}toggleMutePartTrack(e){const a=new Set(this.mutedPartTracks);a.has(e)?a.delete(e):a.add(e),this.mutedPartTracks=a}toggleSoloPartTrack(e){const a=new Set(this.soloPartTracks);a.has(e)?a.delete(e):a.add(e),this.soloPartTracks=a}toggleMutePatternLabel(e){const a=new Set(this.mutedPatternLabels);a.has(e)?a.delete(e):a.add(e),this.mutedPatternLabels=a}toggleSoloPatternLabel(e){const a=new Set(this.soloPatternLabels);a.has(e)?a.delete(e):a.add(e),this.soloPatternLabels=a}isPartTrackAudible(e){return!(this.mutedPartTracks.has(e)||this.soloPartTracks.size>0&&!this.soloPartTracks.has(e))}isPatternLabelAudible(e){return!(this.mutedPatternLabels.has(e)||this.soloPatternLabels.size>0&&!this.soloPatternLabels.has(e))}clear(){this.mutedPartTracks=new Set,this.soloPartTracks=new Set,this.mutedPatternLabels=new Set,this.soloPatternLabels=new Set}computeMask(e,a,r,s){if(!e||!r||s==null)return 0;const i=e.parts[a];if(!i)return 0;let o=0;for(let c=0;c<i.track_indices.length;c++){const l=i.track_indices[c],f=i.track_voice_offsets[c],u=i.track_voice_counts[c];if(!this.isPartTrackAudible(l)){for(let d=0;d<u;d++)o|=1<<f+d;continue}if(this.mutedPatternLabels.size>0||this.soloPatternLabels.size>0){const d=r.parts.find(_=>_.label===s);if(!d)continue;const m=d.tracks[l];if(!m)continue;const y=m.clips.find(_=>_.name!=="gap");if(!y)continue;const k=`${y.name}@${s}`,w=e.patterns[k];if(!w)continue;for(const _ of w.voices)this.isPatternLabelAudible(_.track_label)||(o|=1<<f+_.voice)}}return o>>>0}}const jn=new Cc;class Lc{#e=H(null);get play(){return t(this.#e)}set play(e){h(this.#e,e,!0)}#t=H(null);get stop(){return t(this.#t)}set stop(e){h(this.#t,e,!0)}#n=H(!1);get playing(){return t(this.#n)}set playing(e){h(this.#n,e,!0)}}const Mn=new Lc,Mc=`# play-button
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
`))r.startsWith("# ")?a=r.slice(2).trim():a&&r.trim()&&(e.set(a,r.trim()),a="");return e}const Fc=Ec(Mc);class Oc{#e=H("");get current(){return t(this.#e)}set current(e){h(this.#e,e,!0)}set(e){this.current=Fc.get(e)??""}clear(){this.current=""}}const le=new Oc;var zc=T("<button> </button>"),Nc=T('<span class="hover-help svelte-1h259us"> </span>'),Ic=T('<button class="transport-btn svelte-1h259us">⏹</button>'),jc=T('<button class="transport-btn svelte-1h259us">⏹</button>'),Bc=T('<button class="focus-clear svelte-1h259us" title="Clear focus">&times;</button>'),Hc=T('<div><span class="focus-label svelte-1h259us">Focus</span> <input class="focus-input svelte-1h259us" type="number" step="0.1" min="0"/> <span class="focus-sep svelte-1h259us">&ndash;</span> <input class="focus-input svelte-1h259us" type="number" step="0.1" min="0"/> <!></div>'),Vc=T('<span class="error svelte-1h259us"> </span>'),Gc=T('<div class="transport svelte-1h259us"><button class="transport-btn svelte-1h259us"> </button> <!> <!> <div class="volume-control svelte-1h259us"><span class="volume-icon svelte-1h259us">&#9834;</span> <input class="volume-slider svelte-1h259us" type="range" min="0" max="1" step="0.01" aria-label="Volume"/></div> <!> <!></div>'),Kc=T('<div class="top-bar svelte-1h259us"><div class="mode-tabs svelte-1h259us"><span class="brand svelte-1h259us">Get</span> <!></div> <!> <!> <button class="theme-toggle svelte-1h259us"> </button></div>');function Wc(n,e){ke(e,!0);let a=H("stopped"),r=H("not-initialized"),s=H(null),i=null,o=H(null),c=null,l=H(.75);He(()=>{e.bridge.onObserve(E=>{xe.updatePosition(E.position)})});function f(){u(),c=setInterval(()=>e.bridge.observe(),50)}function u(){c&&(clearInterval(c),c=null)}function d(E){E.target instanceof HTMLInputElement||E.target instanceof HTMLTextAreaElement||E.target instanceof HTMLSelectElement||(E.code==="Space"?(E.preventDefault(),k()):E.code==="Escape"&&(t(a)!=="stopped"||Mn.playing)&&(E.preventDefault(),_()))}He(()=>(window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d))),He(()=>{e.mode==="instrument"&&!Mn.playing&&t(a)==="playing"&&(h(a,"stopped"),xe.playing=!1,xe.updatePosition(null),u())}),He(()=>{jn.mutedPartTracks,jn.soloPartTracks,jn.mutedPatternLabels,jn.soloPatternLabels;const E=xe.sourceMap,G=xe.position,re=Y.songAst;if(!xe.playing){e.bridge.setMuteMask(0);return}const $=G?.part_idx??Y.selectedPartIndex,N=re?.score.sequence[$]?.part_name??null,ee=jn.computeMask(E,$,re,N);e.bridge.setMuteMask(ee)}),He(()=>{const E=Y.text,G=Y.selectedSection;if(!(t(a)!=="playing"||!G)&&e.mode!=="instrument")return i&&clearTimeout(i),i=setTimeout(async()=>{try{const re=E.endsWith(`
`)?E:E+`
`,ne=await e.bridge.reloadTdb(re,G);ne&&(xe.sourceMap=ne),h(o,G,!0),h(s,null)}catch(re){h(s,re instanceof Error?re.message:String(re),!0)}},300),()=>{i&&(clearTimeout(i),i=null)}});async function m(){if(t(r)!=="ready"){h(r,"loading");try{await e.bridge.init(),h(r,"ready")}catch(E){console.error("Failed to init audio bridge:",E),h(r,"error")}}}function y(){return e.mode==="instrument"?Mn.playing:t(a)==="playing"}async function k(){if(h(s,null),e.mode==="instrument"){Mn.playing?(Mn.stop?.(),h(a,"stopped"),xe.playing=!1,xe.updatePosition(null),u()):(Mn.playing=!0,Mn.play?.(),h(a,"playing"),xe.playing=!0,f());return}if(t(a)==="playing"){e.bridge.setPlaying(!1),h(a,"paused"),xe.playing=!1,u();return}if(t(a)==="paused"){t(o)!==Y.selectedSection?await w():(e.bridge.setPlaying(!0),h(a,"playing"),xe.playing=!0,f());return}await w()}async function w(){if(!Y.selectedSection){h(s,"Select a pattern first");return}if(await m(),t(r)==="ready"){await e.bridge.resume();try{const E=Y.text.endsWith(`
`)?Y.text:Y.text+`
`,G=await e.bridge.compileTdb(E,Y.selectedSection);G&&(xe.sourceMap=G),h(o,Y.selectedSection,!0),h(a,"playing"),xe.playing=!0,e.bridge.setPlaying(!0),f()}catch(E){h(s,E instanceof Error?E.message:String(E),!0)}}}function _(){if(e.mode==="instrument"){Mn.stop?.(),h(a,"stopped"),xe.playing=!1,xe.updatePosition(null),u();return}e.bridge.setPlaying(!1),h(a,"stopped"),xe.playing=!1,xe.updatePosition(null),u()}function D(E){const G=parseFloat(E.target.value);h(l,G,!0),e.bridge.setVolume(G)}function L(E){const G=parseFloat(E.target.value);if(isNaN(G))return;const re=Ze.totalDuration,ne=Math.max(0,Math.min(G,re)),$=Ze.effectiveRegion,N=Math.max(ne+.1,$.end_secs);ne<=0&&N>=re?Ze.clearRegion():Ze.setRegion({start_secs:ne,end_secs:N})}function z(E){const G=parseFloat(E.target.value);if(isNaN(G))return;const re=Ze.totalDuration,ne=Math.max(0,Math.min(G,re)),$=Ze.effectiveRegion,N=Math.min(ne-.1,$.start_secs);N<=0&&ne>=re?Ze.clearRegion():Ze.setRegion({start_secs:Math.max(0,N),end_secs:ne})}const q=[{id:"song",label:"Score",hint:"mode-score"},{id:"instrument",label:"Tone",hint:"mode-tone"},{id:"help",label:"Help",hint:"mode-help"},{id:"seqn",label:"Source",hint:"mode-source"}];var S=Kc(),g=x(S),R=v(x(g),2);Ue(R,17,()=>q,We,(E,G)=>{var re=zc();let ne;var $=x(re);te(()=>{ne=ve(re,1,"mode-tab svelte-1h259us",null,ne,{active:e.mode===t(G).id}),Se($,t(G).label)}),B("click",re,()=>e.onmode(t(G).id)),Z("mouseenter",re,()=>le.set(t(G).hint)),A(E,re)});var O=v(g,2);{var I=E=>{var G=Nc(),re=x(G);te(()=>Se(re,le.current)),A(E,G)};J(O,E=>{le.current&&E(I)})}var F=v(O,2);{var W=E=>{var G=Gc(),re=x(G),ne=x(re),$=v(re,2);{var N=we=>{var Fe=Ic();B("click",Fe,_),Z("mouseenter",Fe,()=>le.set("stop-button")),A(we,Fe)};J($,we=>{t(a)!=="stopped"&&e.mode!=="instrument"&&we(N)})}var ee=v($,2);{var de=we=>{var Fe=jc();B("click",Fe,_),Z("mouseenter",Fe,()=>le.set("stop-button")),A(we,Fe)};J(ee,we=>{Mn.playing&&e.mode==="instrument"&&we(de)})}var De=v(ee,2),se=v(x(De),2),pe=v(De,2);{var Ve=we=>{var Fe=Hc();let Qe;var nn=v(x(Fe),2),kn=v(nn,4),Xn=v(kn,2);{var qn=on=>{var Pn=Bc();B("click",Pn,()=>Ze.clearRegion()),A(on,Pn)};J(Xn,on=>{Ze.isFullSong||on(qn)})}te((on,Pn)=>{Qe=ve(Fe,1,"focus-section svelte-1h259us",null,Qe,{dimmed:Ze.isFullSong}),na(nn,on),na(kn,Pn)},[()=>Ze.effectiveRegion.start_secs.toFixed(1),()=>Ze.effectiveRegion.end_secs.toFixed(1)]),Z("mouseenter",Fe,()=>le.set("focus-region")),B("change",nn,L),B("change",kn,z),A(we,Fe)};J(pe,we=>{e.mode!=="instrument"&&we(Ve)})}var qe=v(pe,2);{var Ae=we=>{var Fe=Vc(),Qe=x(Fe);te(()=>Se(Qe,t(s))),A(we,Fe)};J(qe,we=>{t(s)&&we(Ae)})}te(we=>{Se(ne,we),na(se,t(l))},[()=>y()?"⏸":"▶"]),B("click",re,k),Z("mouseenter",re,()=>le.set("play-button")),Z("mouseenter",De,()=>le.set("volume-slider")),B("input",se,D),A(E,G)};J(F,E=>{e.mode!=="help"&&E(W)})}var M=v(F,2),j=x(M);te(()=>{en(M,"title",`Toggle theme (${Dn.mode??""})`),Se(j,Dn.mode==="system"?"◑":Dn.mode==="dark"?"☾":"☀")}),B("click",M,()=>Dn.toggle()),Z("mouseenter",M,()=>le.set("theme-toggle")),A(n,S),ye()}Ye(["click","input","change"]);let Yr=!1;async function ga(){Yr||(await wasm_bindgen(),Yr=!0)}async function Uc(n){await ga();const e=wasm_bindgen.list_songs(n);return JSON.parse(e)}async function Qc(n,e){await ga();const a=wasm_bindgen.parse_song_ast(n,e);return JSON.parse(a)}async function Ks(n){return await ga(),wasm_bindgen.emit_song_ast(JSON.stringify(n))}async function Zc(n,e,a){await ga();const r=wasm_bindgen.rename_pattern(JSON.stringify(n),e,a);return JSON.parse(r)}async function Jc(n,e,a){await ga();const r=wasm_bindgen.rename_part(JSON.stringify(n),e,a);return JSON.parse(r)}async function Xc(n,e){await ga();const a=wasm_bindgen.compile_source_map(n,e);return JSON.parse(a)}async function Yc(n){await ga();const e=wasm_bindgen.parse_part_settings_text(n);return JSON.parse(e)}const $c=new Set(["Swing","AccentPct","Groove","Humanize","Strum"]);function Ua(n){return"Group"in n?Object.keys(n.Group)[0]:Object.keys(n)[0]}function vr(n){return"Group"in n?Object.values(n.Group)[0]:Object.values(n)[0]}function eu(n,e){return $c.has(n)?{Group:{[n]:e}}:{[n]:e}}const nu={Bpm:120,Swing:0,AccentPct:50,Groove:"Off",ChorusRate:1.5,ChorusDepth:.5,ChorusMix:0,ChorusToDelay:0,ChorusToReverb:0,DelayTime:.375,DelayFeedback:.4,DelayDamping:.5,DelayPingPong:!1,DelayMix:0,DelayToReverb:0,ReverbSize:.5,ReverbMix:0,Sidechain:"",SidechainAmt:0,SidechainRelease:.1,TapeStopTime:1e3,TapeStartTime:200,TapeStopCurve:2,MasterDrive:0,CompThreshold:0,CompRatio:1,CompAttack:.01,CompRelease:.1,Humanize:0,Strum:0},tu={Bpm:{min:20,max:300,step:1},Swing:{min:0,max:100,step:1},AccentPct:{min:0,max:100,step:1},ChorusRate:{min:.01,max:20,step:.01},ChorusDepth:{min:0,max:1,step:.01},ChorusMix:{min:0,max:1,step:.01},ChorusToDelay:{min:0,max:1,step:.01},ChorusToReverb:{min:0,max:1,step:.01},DelayTime:{min:.01,max:2,step:.001},DelayFeedback:{min:0,max:1,step:.01},DelayDamping:{min:0,max:1,step:.01},DelayMix:{min:0,max:1,step:.01},DelayToReverb:{min:0,max:1,step:.01},ReverbSize:{min:0,max:1.5,step:.01},ReverbMix:{min:0,max:1,step:.01},SidechainAmt:{min:0,max:1,step:.01},SidechainRelease:{min:.01,max:2,step:.01},TapeStopTime:{min:100,max:5e3,step:10},TapeStartTime:{min:50,max:5e3,step:10},TapeStopCurve:{min:1,max:4,step:.1},MasterDrive:{min:0,max:1,step:.01},CompThreshold:{min:0,max:1,step:.01},CompRatio:{min:1,max:20,step:.1},CompAttack:{min:.001,max:1,step:.001},CompRelease:{min:.01,max:2,step:.01},Humanize:{min:0,max:100,step:1},Strum:{min:0,max:200,step:1}},Jt=[{label:"Rhythm",color:"#66aacc",keys:["Bpm","Swing","AccentPct","Groove","Humanize","Strum"]},{label:"Chorus",color:"#66cc88",prefixes:["Chorus"],keys:["ChorusRate","ChorusDepth","ChorusMix","ChorusToDelay","ChorusToReverb"]},{label:"Delay",color:"#66cc88",prefixes:["Delay"],keys:["DelayTime","DelayFeedback","DelayDamping","DelayPingPong","DelayMix","DelayToReverb"]},{label:"Reverb",color:"#66cc88",prefixes:["Reverb"],keys:["ReverbSize","ReverbMix"]},{label:"Sidechain",color:"#ccaa66",prefixes:["Sidechain"],keys:["Sidechain","SidechainAmt","SidechainRelease"]},{label:"Tape Stop",color:"#cc88cc",prefixes:["Tape"],keys:["TapeStopTime","TapeStartTime","TapeStopCurve"]},{label:"Master",color:"#cc6666",prefixes:["Master","Comp"],keys:["MasterDrive","CompThreshold","CompRatio","CompAttack","CompRelease"]}],au=[{label:"Rhythm",color:"#3070a0",keys:Jt[0].keys},{label:"Chorus",color:"#2a8a48",prefixes:["Chorus"],keys:Jt[1].keys},{label:"Delay",color:"#2a8a48",prefixes:["Delay"],keys:Jt[2].keys},{label:"Reverb",color:"#2a8a48",prefixes:["Reverb"],keys:Jt[3].keys},{label:"Sidechain",color:"#a08030",prefixes:["Sidechain"],keys:Jt[4].keys},{label:"Tape Stop",color:"#9a50a0",prefixes:["Tape"],keys:Jt[5].keys},{label:"Master",color:"#b04040",prefixes:["Master","Comp"],keys:Jt[6].keys}];function su(n){return n==="light"?au:Jt}var ru=T("<span>&#9656;</span>"),iu=T('<button class="create-btn svelte-181dlmc" title="New">+</button>'),ou=T('<div class="scroll-fade scroll-fade-top svelte-181dlmc"></div>'),lu=T('<span class="lib-badge svelte-181dlmc">L</span>'),cu=T("<button><!> </button>"),uu=T('<div class="scroll-fade scroll-fade-bottom svelte-181dlmc"></div>'),du=T('<div class="sidebar svelte-181dlmc"><div><!> <span class="sidebar-title svelte-181dlmc"> </span> <!></div> <div class="sidebar-items-wrap svelte-181dlmc"><!> <div class="sidebar-items svelte-181dlmc"></div> <!></div></div>');function Ws(n,e){ke(e,!0);let a=_e(e,"collapsible",3,!1),r=_e(e,"defaultCollapsed",3,!1),s=H(!1);He(()=>{h(s,r())});let i=H(void 0),o=H(!1),c=H(!1),l=C(()=>a()&&t(s)?e.items.filter(M=>M.id===e.activeId):e.items);function f(){if(!t(i))return;const{scrollTop:M,scrollHeight:j,clientHeight:E}=t(i);h(o,M>1),h(c,M+E<j-1)}He(()=>{t(l),requestAnimationFrame(f)}),He(()=>{if(!t(i))return;const M=t(i),j=new ResizeObserver(f);return j.observe(M),()=>j.disconnect()});function u(){a()&&(h(s,!t(s)),t(s)||requestAnimationFrame(()=>{t(i)?.querySelector(".sidebar-item.active")?.scrollIntoView({block:"nearest"})}))}function d(){h(s,!0)}var m={collapse:d},y=du(),k=x(y);let w;var _=x(k);{var D=M=>{var j=ru();let E;te(()=>E=ve(j,1,"chevron svelte-181dlmc",null,E,{open:!t(s)})),A(M,j)};J(_,M=>{a()&&M(D)})}var L=v(_,2),z=x(L),q=v(L,2);{var S=M=>{var j=iu();B("click",j,E=>{E.stopPropagation(),e.oncreate()}),A(M,j)};J(q,M=>{e.oncreate&&M(S)})}var g=v(k,2),R=x(g);{var O=M=>{var j=ou();A(M,j)};J(R,M=>{t(o)&&M(O)})}var I=v(R,2);Ue(I,21,()=>t(l),We,(M,j)=>{var E=cu();let G;var re=x(E);{var ne=ee=>{var de=lu();A(ee,de)},$=C(()=>e.libraryIds?.has(t(j).id));J(re,ee=>{t($)&&ee(ne)})}var N=v(re,1,!0);te((ee,de)=>{G=ve(E,1,"sidebar-item svelte-181dlmc",null,G,ee),E.disabled=de,Se(N,t(j).label)},[()=>({active:t(j).id===e.activeId,greyed:e.greyedOut?.has(t(j).id)}),()=>e.greyedOut?.has(t(j).id)]),B("click",E,()=>e.onselect(t(j).id)),A(M,E)}),jt(I,M=>h(i,M),()=>t(i));var F=v(I,2);{var W=M=>{var j=uu();A(M,j)};J(F,M=>{t(c)&&M(W)})}return te(()=>{w=ve(k,1,"sidebar-header svelte-181dlmc",null,w,{clickable:a()}),en(k,"role",a()?"button":void 0),en(k,"tabindex",a()?0:void 0),Se(z,e.title)}),Z("mouseenter",y,()=>{e.hint&&le.set(e.hint)}),B("click",k,u),B("keydown",k,M=>{(M.key==="Enter"||M.key===" ")&&(M.preventDefault(),u())}),Z("scroll",I,f),A(n,y),ye(m)}Ye(["click","keydown"]);var fu=T('<button class="seq-focus svelte-owygqe" title="Focus">&#8857;</button>'),mu=T('<button class="seq-delete svelte-owygqe" title="Remove">&times;</button>'),pu=T('<div class="seq-actions svelte-owygqe"><!> <!></div>'),hu=T("<span></span>"),vu=T('<div class="seq-item svelte-owygqe"><!> <button draggable="true"><!> <!></button></div>'),_u=T('<div class="seq-bar svelte-owygqe"><!> <button class="seq-add svelte-owygqe" title="Add">+</button></div>');function Qa(n,e){ke(e,!0);let a=_e(e,"activeIndex",19,()=>-1),r=_e(e,"activeProgress",3,0),s=H(-1),i=H(-1);function o(_,D){h(s,D,!0),_.dataTransfer&&(_.dataTransfer.effectAllowed="move",_.dataTransfer.setData("text/plain",String(D)))}function c(_,D){_.preventDefault(),_.dataTransfer&&(_.dataTransfer.dropEffect="move"),h(i,D,!0)}function l(){h(i,-1)}function f(_,D){_.preventDefault(),t(s)!==-1&&t(s)!==D&&e.onmove(t(s),D),h(s,-1),h(i,-1)}function u(){h(s,-1),h(i,-1)}let d=H(void 0);function m(_,D,L){if(!e.onfocusdrag)return;_.preventDefault(),_.stopPropagation();const z=S=>{if(!t(d))return;const g=t(d).querySelectorAll(".seq-block");let R=L,O=0;for(let I=0;I<g.length;I++){const F=g[I].getBoundingClientRect();if(S.clientX>=F.left&&S.clientX<=F.right){R=I,O=Math.max(0,Math.min(1,(S.clientX-F.left)/F.width));break}if(I===0&&S.clientX<F.left){R=0,O=0;break}if(I===g.length-1&&S.clientX>F.right){R=I,O=1;break}}e.onfocusdrag(D,O,R)},q=()=>{window.removeEventListener("mousemove",z),window.removeEventListener("mouseup",q)};window.addEventListener("mousemove",z),window.addEventListener("mouseup",q)}var y=_u(),k=x(y);Ue(k,17,()=>e.items,We,(_,D,L)=>{var z=vu(),q=x(z);{var S=j=>{var E=pu(),G=x(E);{var re=N=>{var ee=fu();B("click",ee,()=>e.onfocus(L)),A(N,ee)};J(G,N=>{e.onfocus&&N(re)})}var ne=v(G,2);{var $=N=>{var ee=mu();B("click",ee,()=>e.ondelete(L)),A(N,ee)};J(ne,N=>{e.ondelete&&N($)})}A(j,E)};J(q,j=>{(e.ondelete||e.onfocus)&&j(S)})}var g=v(q,2);let R;var O=x(g);{var I=j=>{var E=La(),G=Te(E);Ue(G,17,()=>e.focusNotches[L],We,(re,ne)=>{var $=hu();te(N=>{ve($,1,`focus-notch ${t(ne).type??""}`,"svelte-owygqe"),$e($,`left: ${N??""}%`)},[()=>(t(ne).position*100).toFixed(1)]),B("mousedown",$,N=>m(N,t(ne).type,L)),A(re,$)}),A(j,E)};J(O,j=>{e.focusNotches?.[L]&&j(I)})}var F=v(O,2);{var W=j=>{var E=La(),G=Te(E);hr(G,()=>e.content,()=>t(D),()=>L),A(j,E)},M=j=>{var E=rc();te(()=>Se(E,t(D).label)),A(j,E)};J(F,j=>{e.content?j(W):j(M,!1)})}te(j=>{$e(z,t(D).weight!=null?`flex-grow: ${t(D).weight};`:""),R=ve(g,1,"seq-block svelte-owygqe",null,R,{selected:L===e.selectedIndex,playing:a()>=0&&L===a(),"drag-over":t(i)===L&&t(s)!==L,dragging:t(s)===L,"has-content":e.content!=null}),$e(g,j)},[()=>a()>=0&&L===a()?`--pb-progress: ${(r()*100).toFixed(1)}%`:""]),B("click",g,()=>e.onselect(L)),Z("dragstart",g,j=>o(j,L)),Z("dragover",g,j=>c(j,L)),Z("dragleave",g,l),Z("drop",g,j=>f(j,L)),Z("dragend",g,u),A(_,z)});var w=v(k,2);jt(y,_=>h(d,_),()=>t(d)),B("click",w,function(..._){e.onadd?.apply(this,_)}),A(n,y),ye()}Ye(["click","mousedown"]);function cs(n){return Object.keys(n)[0]}function lo(n){return Object.values(n)[0]}const $r=["Swing","AccentPct","Groove","Humanize","Strum"];function Ga(n){return n==="Accent"?"ac":n.Named}function wa(n){let e=null,a=[],r=n;for(let s=0;s<2;s++)typeof r=="object"&&r!==null&&"Probable"in r?(e=r.Probable[1],r=r.Probable[0]):typeof r=="object"&&r!==null&&"ParameterLocked"in r&&(a=r.ParameterLocked[1],r=r.ParameterLocked[0]);return[r,e,a]}function us(n){const[e]=wa(n);return e==="Hit"||e==="Accent"||e==="Rest"||e==="Sustain"}function Us(n){const[e,a,r]=wa(n);let s;if(e==="Hit")s="o";else if(e==="Accent")s="x";else if(e==="Rest")s=".";else if(e==="Sustain")s="-";else if(typeof e=="object"&&"Tonal"in e){const[,i]=e.Tonal;if("Degree"in i)s=String(i.Degree);else{const o=i.Note;let l=["c","","d","","e","f","","g","","a","","b"][o.base]||"?";o.offset>0&&(l+="#".repeat(o.offset)),o.offset<0&&(l+="_".repeat(-o.offset)),o.octave!==null&&(l+=o.octave),s=l}}else s="?";return r.length>0&&(s+="·"),a!==null&&(s+=`?${a}`),s}function gu(n){if("Mix"in n){const e=n.Mix,a=Object.keys(e)[0],r=Object.values(e)[0];return`${a.replace(/([a-z0-9])([A-Z])/g,"$1_$2").toLowerCase()}=${r}`}return"Velocity"in n?`velocity=${n.Velocity}`:""}function Qs(n){if(n==="Hit")return"o";if(n==="Accent")return"x";if(n==="Rest")return".";if(n==="Sustain")return"-";if(typeof n=="object"&&"Tonal"in n){const[e,a]=n.Tonal,r=e==="Accented"?">":e==="Slide"?"~":"";let s;if("Degree"in a)s=String(a.Degree);else{const i=a.Note;let c=["c","","d","","e","f","","g","","a","","b"][i.base]||"?";i.offset>0&&(c+="#".repeat(i.offset)),i.offset<0&&(c+="_".repeat(-i.offset)),i.octave!==null&&(c+=i.octave),s=c}return`${r}${s}`}if(typeof n=="object"&&"ParameterLocked"in n){const[e,a]=n.ParameterLocked,r=a.map(gu).join(",");return`${Qs(e)}{${r}}`}if(typeof n=="object"&&"Probable"in n){const[e,a]=n.Probable;return`${Qs(e)}?${a}`}return"?"}function bu(n){const[e,a,r]=wa(n);let s;if(e==="Rest")s="Hit";else if(e==="Hit")s="Accent";else if(e==="Accent")s="Rest";else if(e==="Sustain")s="Rest";else return n;return s==="Rest"||(r.length>0&&(s={ParameterLocked:[s,r]}),a!==null&&(s={Probable:[s,a]})),s}function ku(n){const e=typeof n=="string"?n:Object.keys(n)[0],a=typeof n=="string"?"":Object.values(n)[0];return`${e}: ${a}`}function co(n){return"ToneSetting"in n?ku(n.ToneSetting):`${ms(n)}: ${ho(n)}`}const ra=[{label:"Tone",color:"#aa88cc",keys:["Octave","Instrument","Scale","Root","Velocity"]},{label:"Arp",color:"#88ccaa",prefixes:["Arp"],keys:["Arp","ArpRate","ArpMode","ArpOctaves","ArpSlide"]},{label:"Voice",color:"#66aacc",keys:["Legato","Voices","Glide"]},{label:"Mix",color:"#ccaa66",suffixes:["Send"],keys:["Level","DrySend","ChorusSend","DelaySend","ReverbSend"]},{label:"Rhythm",color:"#cc8888",keys:["Swing","AccentPct","Groove","Humanize","Strum","StrumIdx"]}],yu=[{label:"Tone",color:"#7a58a8",keys:ra[0].keys},{label:"Arp",color:"#3a8a6a",prefixes:["Arp"],keys:ra[1].keys},{label:"Voice",color:"#3070a0",keys:ra[2].keys},{label:"Mix",color:"#a08030",suffixes:["Send"],keys:ra[3].keys},{label:"Rhythm",color:"#a05050",keys:ra[4].keys}];function uo(n){return n==="light"?yu:ra}function ei(n,e){for(const a of e.prefixes??[])if(n.startsWith(a)&&n.length>a.length)return n.slice(a.length);for(const a of e.suffixes??[])if(n.endsWith(a)&&n.length>a.length)return n.slice(0,-a.length);return n}const fo={Octave:{min:0,max:8,step:1},Root:{min:0,max:11,step:1},Velocity:{min:0,max:127,step:1},ArpRate:{min:1,max:64,step:1},ArpOctaves:{min:1,max:4,step:1},Legato:{min:0,max:1,step:.01},Voices:{min:1,max:8,step:1},Glide:{min:0,max:1,step:.01},Level:{min:0,max:1,step:.01},DrySend:{min:0,max:1,step:.01},ChorusSend:{min:0,max:1,step:.01},DelaySend:{min:0,max:1,step:.01},ReverbSend:{min:0,max:1,step:.01},Swing:{min:0,max:100,step:1},AccentPct:{min:0,max:100,step:1},Humanize:{min:0,max:100,step:1},Strum:{min:0,max:200,step:1},StrumIdx:{min:0,max:15,step:1}},mo={Octave:3,Instrument:"",Scale:"",Root:0,Velocity:100,Arp:"Off",ArpRate:4,ArpMode:"Up",ArpOctaves:1,ArpSlide:!1,Legato:.8,Voices:1,Glide:0,Level:1,DrySend:1,ChorusSend:0,DelaySend:0,ReverbSend:0,Swing:0,AccentPct:50,Groove:"Off",Humanize:0,Strum:0,StrumIdx:null};ra.filter(n=>n.label!=="Mix");function wu(n){return uo(n).filter(e=>e.label!=="Mix")}function po(n){return n==="ArpSlide"?"boolean":n==="Scale"||n==="Instrument"||n==="Arp"||n==="ArpMode"||n==="Groove"||n==="StrumIdx"?"string":"number"}function xu(n,e){return n==="StrumIdx"&&e===null?"off":e==null||e===""?"":n==="Arp"&&typeof e=="object"&&e!==null&&"Preset"in e?e.Preset:n==="Arp"&&typeof e=="object"&&e!==null&&"Custom"in e?e.Custom.join(" "):n==="Groove"&&typeof e=="object"&&e!==null&&"Preset"in e?e.Preset:n==="Groove"&&typeof e=="object"&&e!==null&&"Custom"in e?e.Custom.join(" "):String(e)}function ni(n,e){if(n==="Arp"&&typeof e=="string")return e.toLowerCase()==="off"?"Off":{Preset:e};if(n==="Groove"&&typeof e=="string")return e.toLowerCase()==="off"?"Off":{Preset:e};if(n==="StrumIdx"&&typeof e=="string"){if(e.toLowerCase()==="off")return null;const a=parseInt(e,10);return isNaN(a)?e:a}return n==="ArpMode"&&typeof e=="string"?{up:"Up",down:"Down",updown:"UpDown",random:"Random"}[e.toLowerCase()]??e:e}const Su=new Set(["Octave","Scale","Root","Instrument","Legato","Voices","Velocity","Glide","Arp","ArpRate","ArpMode","ArpOctaves","ArpSlide","StrumIdx"]),Pu=new Set(["Level","DrySend","ChorusSend","DelaySend","ReverbSend"]),Au=new Set(["Swing","AccentPct","Groove","Humanize","Strum"]);function ms(n){return"ToneSetting"in n?Object.keys(n.ToneSetting)[0]:"Group"in n?Object.keys(n.Group)[0]:"Mix"in n?Object.keys(n.Mix)[0]:Object.keys(n)[0]}function ho(n){return"ToneSetting"in n?Object.values(n.ToneSetting)[0]:"Group"in n?Object.values(n.Group)[0]:"Mix"in n?Object.values(n.Mix)[0]:Object.values(n)[0]}function ti(n,e){return Su.has(n)?{ToneSetting:{[n]:e}}:Au.has(n)?{Group:{[n]:e}}:Pu.has(n)?{Mix:{[n]:e}}:{Mix:{[n]:e}}}function ds(n){let e=0;for(const a of n){if("Beat"in a)break;e++}return e}function Tu(n){const e=n.trim();if(e==="-")return"Hold";if(e===".")return"Pass";const a=parseFloat(e);return isNaN(a)?null:{Value:a}}function ai(n){return n==="Hold"?"-":n==="Pass"?".":String(n.Value)}function Zs(n){let e=n.trim();e.startsWith("@")&&(e=e.slice(1));const a=e.indexOf(":");if(a<0)return null;const r=e.slice(0,a).trim();if(!r)return null;const s=e.slice(a+1).trim();if(!s)return null;const i=s.split("|"),o=[];for(const c of i){const l=c.trim().split(/\s+/).filter(Boolean),f=[];for(const u of l)if(u==="-")f.push("Hold");else if(u===".")f.push("Pass");else if(u.startsWith("*")){const d=parseInt(u.slice(1),10);if(isNaN(d)||d<1||f.length===0)return null;const m=f[f.length-1];for(let y=1;y<d;y++)f.push(m)}else{const d=parseFloat(u);if(isNaN(d))return null;f.push({Value:d})}if(f.length===0)return null;o.push(f)}return o.length===0?null:{trivia:{leading:[],trailing_comment:null},parameter:r,sections:o}}function Js(n){let e=n.trim();e.startsWith("$")&&(e=e.slice(1));const a=e.indexOf(":");if(a<0)return null;const r=e.slice(0,a).trim();if(!r)return null;const s=e.slice(a+1).trim();if(!s)return null;const i=s.split(/\s+/).filter(Boolean),o=[];let c=-1;for(const l of i){const f=l.indexOf("@");if(f<0)return null;const u=l.slice(0,f);let d=l.slice(f+1);const m=parseFloat(u);if(isNaN(m))return null;let y="Beats";d.endsWith("s")&&(y="Seconds",d=d.slice(0,-1));const k=parseFloat(d);if(isNaN(k)||k<=c)return null;c=k,o.push({value:m,time:k,time_unit:y})}return o.length===0?null:{trivia:{leading:[],trailing_comment:null},parameter:r,events:o}}var Du=T("<option> </option>"),Ru=T('<label class="mini-label svelte-sehkf">mix <input class="clip-input num-input svelte-sehkf"/></label>'),qu=T('<span class="clip editing svelte-sehkf"><select class="clip-input name-select svelte-sehkf"><option>gap</option><!></select> <label class="mini-label svelte-sehkf">&times; <input class="clip-input num-input svelte-sehkf"/></label> <!> <button class="ok-btn svelte-sehkf">ok</button> <button class="cancel-btn svelte-sehkf">esc</button></span>'),Cu=T('<span class="badge times svelte-sehkf"> </span>'),Lu=T('<span class="badge mix svelte-sehkf"> </span>'),Mu=T('<button class="edit-pattern-btn svelte-sehkf" title="Edit pattern">&#9998;</button>'),Eu=T("<span></span>"),Fu=T('<span role="button" tabindex="0"><span class="clip-name svelte-sehkf"> </span> <!> <!> <!> <button class="delete-btn svelte-sehkf" title="Remove clip">&times;</button> <!></span>');function Ou(n,e){ke(e,!0);let a=_e(e,"progress",19,()=>-1),r=_e(e,"focusNotches",3,null),s=H(!1),i=H(""),o=H("1"),c=H("1"),l=H(!1),f=H(void 0);async function u(){t(l)||(h(i,e.clip.name,!0),h(o,String(e.clip.times),!0),h(c,String(e.clip.mix),!0),h(s,!0),await Xi(),t(f)?.focus())}function d(){const z=parseFloat(t(o))||1,q=t(i)==="gap"?1:parseFloat(t(c))||1;e.onchange({name:t(i)||e.clip.name,times:z,mix:q,automation:e.clip.automation,step_automation:e.clip.step_automation}),h(s,!1)}function m(){h(s,!1)}function y(z){z.key==="Enter"&&d(),z.key==="Escape"&&m()}function k(z,q){if(!e.onfocusdrag)return;z.stopPropagation(),z.preventDefault(),h(l,!0);const S=z.currentTarget.parentElement;if(!S)return;function g(O){const I=S.getBoundingClientRect(),F=Math.max(0,Math.min((O.clientX-I.left)/I.width,1));e.onfocusdrag(q,F)}function R(){window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",R),setTimeout(()=>{h(l,!1)},0)}window.addEventListener("mousemove",g),window.addEventListener("mouseup",R)}var w=La(),_=Te(w);{var D=z=>{var q=qu(),S=x(q),g=x(S);g.value=g.__value="gap";var R=v(g);Ue(R,17,()=>e.patterns.filter(E=>E!=="gap"),We,(E,G)=>{var re=Du(),ne=x(re),$={};te(()=>{Se(ne,t(G)),$!==($=t(G))&&(re.value=(re.__value=t(G))??"")}),A(E,re)}),jt(S,E=>h(f,E),()=>t(f));var O=v(S,2),I=v(x(O)),F=v(O,2);{var W=E=>{var G=Ru(),re=v(x(G));Zn(re,()=>t(c),ne=>h(c,ne)),A(E,G)};J(F,E=>{t(i)!=="gap"&&E(W)})}var M=v(F,2),j=v(M,2);B("keydown",q,y),hc(S,()=>t(i),E=>h(i,E)),Zn(I,()=>t(o),E=>h(o,E)),B("click",M,d),B("click",j,m),A(z,q)},L=z=>{var q=Fu();let S;var g=x(q),R=x(g),O=v(g,2);{var I=ne=>{var $=Cu(),N=x($);te(()=>Se(N,`×${e.clip.times??""}`)),A(ne,$)};J(O,ne=>{e.clip.times!==1&&ne(I)})}var F=v(O,2);{var W=ne=>{var $=Lu(),N=x($);te(()=>Se(N,`mix ${e.clip.mix??""}`)),A(ne,$)};J(F,ne=>{e.clip.mix!==1&&e.clip.name!=="gap"&&ne(W)})}var M=v(F,2);{var j=ne=>{var $=Mu();B("click",$,N=>{N.stopPropagation(),e.oneditpattern()}),A(ne,$)};J(M,ne=>{e.clip.name!=="gap"&&ne(j)})}var E=v(M,2),G=v(E,2);{var re=ne=>{var $=La(),N=Te($);Ue(N,17,r,We,(ee,de)=>{var De=Eu();te(se=>{ve(De,1,`focus-notch ${t(de).type??""}`,"svelte-sehkf"),$e(De,`left: ${se??""}%`)},[()=>(t(de).position*100).toFixed(1)]),B("mousedown",De,se=>k(se,t(de).type)),A(ee,De)}),A(ne,$)};J(G,ne=>{r()&&ne(re)})}te(ne=>{S=ve(q,1,"clip svelte-sehkf",null,S,{playing:a()>=0,gap:e.clip.name==="gap"}),$e(q,ne),Se(R,e.clip.name)},[()=>a()>=0?`--clip-progress: ${(a()*100).toFixed(1)}%`:""]),B("click",q,u),B("keydown",q,ne=>ne.key==="Enter"&&u()),Z("mouseenter",q,()=>le.set("clip-block")),B("click",E,ne=>{ne.stopPropagation(),e.ondelete()}),A(z,q)};J(_,z=>{t(s)?z(D):z(L,!1)})}A(n,w),ye()}Ye(["keydown","click","mousedown"]);var zu=T("<button> </button>"),Nu=T('<button class="tab add svelte-121sxca">+ Add</button>'),Iu=T('<div class="block-selector svelte-121sxca"><!> <!></div>');function vo(n,e){ke(e,!0);let a=_e(e,"selected",3,0);var r=Iu(),s=x(r);Ue(s,17,()=>e.blocks,We,(c,l,f)=>{var u=zu();let d;var m=x(u);te(y=>{d=ve(u,1,"tab svelte-121sxca",null,d,y),Se(m,t(l))},[()=>({active:f===a(),highlighted:e.highlights?.has(f)})]),B("click",u,()=>e.onselect(f)),Z("mouseenter",u,()=>{e.hints?.[f]&&le.set(e.hints[f])}),A(c,u)});var i=v(s,2);{var o=c=>{var l=Nu();B("click",l,function(...f){e.onadd?.apply(this,f)}),A(c,l)};J(i,c=>{e.onadd&&c(o)})}A(n,r),ye()}Ye(["click"]);var ju=T('<input class="edit-input svelte-e57acq" type="text"/>'),Bu=T('<button class="value-display svelte-e57acq"> </button>'),Hu=T('<div><span class="label svelte-e57acq"> </span> <div class="track svelte-e57acq" role="slider"><div class="fill svelte-e57acq"></div> <div class="thumb svelte-e57acq"></div></div> <!></div>');function Xs(n,e){ke(e,!0);let a=_e(e,"min",3,0),r=_e(e,"max",3,1),s=_e(e,"step",3,.01),i=_e(e,"disabled",3,!1);function o($){$.focus()}let c=H(!1),l=H(""),f=H(!1),u=H(void 0),d=C(()=>(e.value-a())/(r()-a())*100);function m($){return s()>=1?String(Math.round($)):s()>=.1?$.toFixed(1):$.toFixed(2)}function y($){const N=Math.min(r(),Math.max(a(),$));return Math.round(N/s())*s()}function k($){if(!t(u))return;const N=t(u).getBoundingClientRect(),ee=($-N.left)/N.width,de=Math.min(1,Math.max(0,ee));e.onchange(y(a()+de*(r()-a())))}function w($){h(f,!0),$.currentTarget.setPointerCapture($.pointerId),k($.clientX)}function _($){t(f)&&k($.clientX)}function D(){h(f,!1)}function L(){h(l,m(e.value),!0),h(c,!0)}function z(){const $=parseFloat(t(l));isNaN($)||e.onchange(y($)),h(c,!1)}function q(){h(c,!1)}var S=Hu();let g,R;var O=x(S),I=x(O),F=v(O,2);en(F,"tabindex",0);var W=x(F);let M;var j=v(W,2);let E;jt(F,$=>h(u,$),()=>t(u));var G=v(F,2);{var re=$=>{var N=ju();Xa(()=>Zn(N,()=>t(l),ee=>h(l,ee))),so(N,ee=>o?.(ee)),Z("blur",N,z),B("keydown",N,ee=>{ee.key==="Enter"&&z(),ee.key==="Escape"&&q()}),A($,N)},ne=$=>{var N=Bu(),ee=x(N);te(de=>Se(ee,de),[()=>m(e.value)]),B("dblclick",N,L),A($,N)};J(G,$=>{t(c)?$(re):$(ne,!1)})}te(()=>{g=ve(S,1,"horz-slider svelte-e57acq",null,g,{disabled:i()}),R=$e(S,"",R,{"--slider-color":e.color}),Se(I,e.label),en(F,"aria-valuenow",e.value),en(F,"aria-valuemin",a()),en(F,"aria-valuemax",r()),en(F,"aria-label",e.label),M=$e(W,"",M,{width:`${t(d)??""}%`}),E=$e(j,"",E,{left:`${t(d)??""}%`})}),Z("mouseenter",S,()=>le.set(e.hint||"settings-slider")),B("pointerdown",F,w),B("pointermove",F,_),B("pointerup",F,D),A(n,S),ye()}Ye(["pointerdown","pointermove","pointerup","keydown","dblclick"]);var Vu=T('<span class="label svelte-1vaxnks"> </span>'),Gu=T("<div><button></button> <!></div>");function dt(n,e){ke(e,!0);let a=_e(e,"label",3,""),r=_e(e,"disabled",3,!1);var s=Gu();let i,o;var c=x(s);let l;var f=v(c,2);{var u=d=>{var m=Vu(),y=x(m);te(()=>Se(y,a())),A(d,m)};J(f,d=>{a()&&d(u)})}te(()=>{i=ve(s,1,"synth-toggle svelte-1vaxnks",null,i,{disabled:r()}),o=$e(s,"",o,{"--toggle-color":e.color}),l=ve(c,1,"toggle-btn svelte-1vaxnks",null,l,{active:e.active}),en(c,"aria-pressed",e.active),en(c,"aria-label",a()||"toggle")}),Z("mouseenter",s,()=>{e.hint&&le.set(e.hint)}),B("click",c,()=>{r()||e.onchange(!e.active)}),A(n,s),ye()}Ye(["click"]);var Ku=T('<button class="delete-btn svelte-3gbruk" title="Delete">&times;</button>');function Rt(n,e){ke(e,!0);var a=Ku();B("click",a,function(...r){e.onclick?.apply(this,r)}),Z("mouseenter",a,()=>le.set("delete-button")),A(n,a),ye()}Ye(["click"]);var Wu=T('<input class="raw-input svelte-1lt6uwf" type="text"/>');function Bt(n,e){ke(e,!0);let a=_e(e,"placeholder",3,""),r=_e(e,"initialValue",3,""),s=H(null);He(()=>{t(s)?.focus()});function i(c){if(c.key==="Enter"){c.preventDefault();const l=c.currentTarget.value.trim();l?e.onsubmit(l):e.oncancel()}else c.key==="Escape"&&(c.preventDefault(),e.oncancel())}var o=Wu();jt(o,c=>h(s,c),()=>t(s)),te(()=>{na(o,r()),en(o,"placeholder",a())}),B("keydown",o,i),Z("blur",o,function(...c){e.oncancel?.apply(this,c)}),A(n,o),ye()}Ye(["keydown"]);var Uu=T('<div class="toggle-row svelte-c7ragf"><span class="setting-label svelte-c7ragf"> </span> <!></div>'),Qu=T('<div class="text-row svelte-c7ragf"><span class="setting-label svelte-c7ragf"> </span> <input class="text-input svelte-c7ragf" type="text"/></div>'),Zu=T("<div><!> <!></div>"),Ju=T('<div class="settings-list svelte-c7ragf"></div>'),Xu=T('<button class="add-btn svelte-c7ragf" title="Add setting (raw text)">+</button>'),Yu=T('<div class="tabbed-settings-panel svelte-c7ragf"><!> <!> <div class="raw-add svelte-c7ragf"><!></div></div>');function _r(n,e){ke(e,!0);let a=_e(e,"inheritedSettings",19,()=>new Map),r=_e(e,"placeholder",3,"e.g. octave 4"),s=H(0),i=H(!1),o=C(()=>e.tabs[t(s)]),c=C(()=>e.tabs.map(g=>g.label));function l(g){return t(o)?ei(g,t(o)):g}let f=C(()=>t(o)?Math.max(...t(o).keys.map(g=>ei(g,t(o)).length))+1:6),u=C(()=>{const g=new Set;for(let R=0;R<e.tabs.length;R++)e.tabs[R].keys.some(O=>e.activeSettings.has(O))&&g.add(R);return g});function d(g){return e.activeSettings.has(g)}function m(g){return e.activeSettings.get(g)??a().get(g)??e.defaults[g]}function y(g){return xu(g,m(g))}var k=Yu(),w=x(k);vo(w,{get blocks(){return t(c)},get selected(){return t(s)},get highlights(){return t(u)},onselect:g=>{h(s,g,!0)},get hints(){return e.tabHints}});var _=v(w,2);{var D=g=>{var R=Ju();let O;Ue(R,21,()=>t(o).keys,We,(I,F)=>{const W=C(()=>d(t(F))),M=C(()=>e.settingType(t(F)));var j=Zu();let E;var G=x(j);{var re=de=>{const De=C(()=>m(t(F))),se=C(()=>e.ranges[t(F)]);{let pe=C(()=>l(t(F))),Ve=C(()=>t(se)?.min??0),qe=C(()=>t(se)?.max??1),Ae=C(()=>t(se)?.step??.01),we=C(()=>e.settingHints?.[t(F)]);Xs(de,{get label(){return t(pe)},get value(){return t(De)},get min(){return t(Ve)},get max(){return t(qe)},get step(){return t(Ae)},get color(){return t(o).color},onchange:Fe=>e.onset(t(F),Fe),get hint(){return t(we)}})}},ne=de=>{const De=C(()=>m(t(F)));var se=Uu(),pe=x(se),Ve=x(pe),qe=v(pe,2);{let Ae=C(()=>e.settingHints?.[t(F)]);dt(qe,{get active(){return t(De)},get color(){return t(o).color},onchange:we=>e.onset(t(F),we),get hint(){return t(Ae)}})}te(Ae=>Se(Ve,Ae),[()=>l(t(F))]),Z("mouseenter",se,()=>{e.settingHints?.[t(F)]&&le.set(e.settingHints[t(F)])}),A(de,se)},$=de=>{var De=Qu(),se=x(De),pe=x(se),Ve=v(se,2);te((qe,Ae)=>{Se(pe,qe),na(Ve,Ae)},[()=>l(t(F)),()=>y(t(F))]),Z("mouseenter",De,()=>{e.settingHints?.[t(F)]&&le.set(e.settingHints[t(F)])}),B("change",Ve,qe=>e.onset(t(F),qe.currentTarget.value)),A(de,De)};J(G,de=>{t(M)==="number"?de(re):t(M)==="boolean"?de(ne,1):de($,!1)})}var N=v(G,2);{var ee=de=>{Rt(de,{onclick:()=>e.ondelete(t(F))})};J(N,de=>{t(W)&&de(ee)})}te(()=>E=ve(j,1,"setting-row svelte-c7ragf",null,E,{unset:!t(W)})),A(I,j)}),te(()=>O=$e(R,"",O,{"--tab-color":t(o).color,"--label-width":`${t(f)??""}ch`})),A(g,R)};J(_,g=>{t(o)&&g(D)})}var L=v(_,2),z=x(L);{var q=g=>{Bt(g,{get placeholder(){return r()},onsubmit:R=>{h(i,!1),e.onadd(R)},oncancel:()=>{h(i,!1)}})},S=g=>{var R=Xu();B("click",R,()=>{h(i,!0)}),A(g,R)};J(z,g=>{t(i)?g(q):g(S,!1)})}Z("mouseenter",k,()=>le.set("settings-panel")),A(n,k),ye()}Ye(["change","click"]);function $u(n,e){ke(e,!0);let a=C(()=>{const o=new Map;for(const c of e.settings)o.set(Ua(c),vr(c));return o});function r(o){return o==="DelayPingPong"?"boolean":o==="Sidechain"||o==="Groove"?"string":"number"}const s=["tab-part-rhythm","tab-part-chorus","tab-part-delay","tab-part-reverb","tab-part-sidechain","tab-part-tapestop","tab-part-master"],i={Bpm:"setting-Bpm",Swing:"setting-Swing",AccentPct:"setting-AccentPct",Groove:"setting-Groove",Humanize:"setting-Humanize",Strum:"setting-Strum",ChorusRate:"setting-ChorusRate",ChorusDepth:"setting-ChorusDepth",ChorusMix:"setting-ChorusMix",ChorusToDelay:"setting-ChorusToDelay",ChorusToReverb:"setting-ChorusToReverb",DelayTime:"setting-DelayTime",DelayFeedback:"setting-DelayFeedback",DelayDamping:"setting-DelayDamping",DelayPingPong:"setting-DelayPingPong",DelayMix:"setting-DelayMix",DelayToReverb:"setting-DelayToReverb",ReverbSize:"setting-ReverbSize",ReverbMix:"setting-ReverbMix",Sidechain:"setting-Sidechain",SidechainAmt:"setting-SidechainAmt",SidechainRelease:"setting-SidechainRelease",TapeStopTime:"setting-TapeStopTime",TapeStartTime:"setting-TapeStartTime",TapeStopCurve:"setting-TapeStopCurve",MasterDrive:"setting-MasterDrive",CompThreshold:"setting-CompThreshold",CompRatio:"setting-CompRatio",CompAttack:"setting-CompAttack",CompRelease:"setting-CompRelease"};{let o=C(()=>su(Dn.resolved));_r(n,{get tabs(){return t(o)},get activeSettings(){return t(a)},get defaults(){return nu},get ranges(){return tu},settingType:r,get onset(){return e.onsetsetting},get ondelete(){return e.ondeletesetting},get onadd(){return e.onaddsetting},placeholder:"e.g. bpm 140",get tabHints(){return s},get settingHints(){return i}})}ye()}var e0=T('<button class="auto-label svelte-1fqpyfl" title="Rename parameter"> </button>'),n0=T('<span class="section-sep svelte-1fqpyfl">|</span>'),t0=T("<button> </button>"),a0=T('<span class="val-wrap svelte-1fqpyfl"><!> <!></span>'),s0=T("<!> <!>",1),r0=T('<span class="auto-row svelte-1fqpyfl"><!> <!> <button class="add-val svelte-1fqpyfl" title="Add value">+</button> <!></span>');function Ys(n,e){ke(e,!0);let a=H(!1),r=H(null);function s(){h(a,!0)}function i(q){const S=En(e.auto);S.parameter=q,e.onchange(S),h(a,!1)}function o(){h(a,!1)}function c(q,S){h(r,{section:q,index:S},!0)}function l(q,S,g){const R=Tu(g);if(R!==null){const O=En(e.auto);O.sections[q][S]=R,e.onchange(O)}h(r,null)}function f(){h(r,null)}function u(q,S){const g=En(e.auto);g.sections[q].splice(S,1),g.sections=g.sections.filter(R=>R.length>0),g.sections.length===0?e.ondelete():e.onchange(g)}function d(){const q=En(e.auto);q.sections.length===0?q.sections.push(["Pass"]):q.sections[q.sections.length-1].push("Pass"),e.onchange(q)}function m(q){return q==="Hold"?"val-hold":q==="Pass"?"val-pass":"val-number"}var y=r0(),k=x(y);{var w=q=>{Bt(q,{get initialValue(){return e.auto.parameter},onsubmit:i,oncancel:o})},_=q=>{var S=e0(),g=x(S);te(()=>Se(g,`@${e.auto.parameter??""}`)),B("click",S,s),A(q,S)};J(k,q=>{t(a)?q(w):q(_,!1)})}var D=v(k,2);Ue(D,17,()=>e.auto.sections,We,(q,S,g)=>{var R=s0(),O=Te(R);{var I=W=>{var M=n0();A(W,M)};J(O,W=>{g>0&&W(I)})}var F=v(O,2);Ue(F,17,()=>t(S),We,(W,M,j)=>{var E=a0(),G=x(E);{var re=N=>{{let ee=C(()=>ai(t(M)));Bt(N,{get initialValue(){return t(ee)},onsubmit:de=>l(g,j,de),oncancel:f})}},ne=N=>{var ee=t0(),de=x(ee);te((De,se)=>{ve(ee,1,`val-cell ${De??""}`,"svelte-1fqpyfl"),Se(de,se)},[()=>m(t(M)),()=>ai(t(M))]),B("click",ee,()=>c(g,j)),A(N,ee)};J(G,N=>{t(r)?.section===g&&t(r)?.index===j?N(re):N(ne,!1)})}var $=v(G,2);Rt($,{onclick:()=>u(g,j)}),A(W,E)}),A(q,R)});var L=v(D,2),z=v(L,2);Rt(z,{get onclick(){return e.ondelete}}),Z("mouseenter",y,()=>le.set("automation-track")),B("click",L,d),A(n,y),ye()}Ye(["click"]);var i0=T('<button class="step-label svelte-szfenj" title="Rename parameter"> </button>'),o0=T('<button class="val-cell svelte-szfenj"> </button>'),l0=T('<span class="val-wrap svelte-szfenj"><!> <!></span>'),c0=T('<span class="step-row svelte-szfenj"><!> <!> <button class="add-val svelte-szfenj" title="Add event">+</button> <!></span>');function $s(n,e){ke(e,!0);let a=H(!1),r=H(null);function s(){h(a,!0)}function i(S){const g=En(e.auto);g.parameter=S,e.onchange(g),h(a,!1)}function o(){h(a,!1)}function c(S){const g=S.time_unit==="Seconds"?"s":"";return`${S.value}@${S.time}${g}`}function l(S){const g=S.indexOf("@");if(g<0)return null;const R=S.slice(0,g);let O=S.slice(g+1);const I=parseFloat(R);if(isNaN(I))return null;let F="Beats";O.endsWith("s")&&(F="Seconds",O=O.slice(0,-1));const W=parseFloat(O);return isNaN(W)?null:{value:I,time:W,time_unit:F}}function f(S){h(r,S,!0)}function u(S,g){const R=l(g);if(R){const O=En(e.auto);O.events[S]=R,e.onchange(O)}h(r,null)}function d(){h(r,null)}function m(S){const g=En(e.auto);g.events.splice(S,1),g.events.length===0?e.ondelete():e.onchange(g)}function y(){const S=En(e.auto),g=S.events.length>0?S.events[S.events.length-1].time+1:0;S.events.push({value:0,time:g,time_unit:"Beats"}),e.onchange(S)}var k=c0(),w=x(k);{var _=S=>{Bt(S,{get initialValue(){return e.auto.parameter},onsubmit:i,oncancel:o})},D=S=>{var g=i0(),R=x(g);te(()=>Se(R,`$${e.auto.parameter??""}`)),B("click",g,s),A(S,g)};J(w,S=>{t(a)?S(_):S(D,!1)})}var L=v(w,2);Ue(L,17,()=>e.auto.events,We,(S,g,R)=>{var O=l0(),I=x(O);{var F=j=>{{let E=C(()=>c(t(g)));Bt(j,{get initialValue(){return t(E)},onsubmit:G=>u(R,G),oncancel:d})}},W=j=>{var E=o0(),G=x(E);te(re=>Se(G,re),[()=>c(t(g))]),B("click",E,()=>f(R)),A(j,E)};J(I,j=>{t(r)===R?j(F):j(W,!1)})}var M=v(I,2);Rt(M,{onclick:()=>m(R)}),A(S,O)});var z=v(L,2),q=v(z,2);Rt(q,{get onclick(){return e.ondelete}}),Z("mouseenter",k,()=>le.set("step-automation-track")),B("click",z,y),A(n,k),ye()}Ye(["click"]);var u0=T('<input class="rename-part-input svelte-cwrja0"/> <button class="header-btn ok svelte-cwrja0">ok</button> <button class="header-btn cancel svelte-cwrja0">esc</button>',1),d0=T('<button class="header-btn auto-header svelte-cwrja0" title="Add @ automation">+@</button>'),f0=T('<button class="header-btn auto-header svelte-cwrja0" style="color: var(--warning-dim, var(--warning))" title="Add $ step automation">+$</button>'),m0=T('<span class="playback-info svelte-cwrja0"> </span>'),p0=T('<span class="part-label svelte-cwrja0"> </span> <button title="Toggle settings panel">&#9881;</button> <button class="header-btn svelte-cwrja0" title="Rename part">&#9998;</button> <button class="header-btn svelte-cwrja0" title="Duplicate part">&#10697;</button> <button class="header-btn delete svelte-cwrja0" title="Delete part">&times;</button> <!> <!> <!>',1),h0=T('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0">@</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: v1 v2 | v3 v4"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),v0=T('<div class="part-automation svelte-cwrja0"><!> <!></div>'),_0=T('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0" style="color: var(--warning)">$</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: val@beat val@beat"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),g0=T('<div class="part-automation svelte-cwrja0"><!> <!></div>'),b0=T('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0">@</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: v1 v2 | v3 v4"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),k0=T('<div class="clip-automation svelte-cwrja0"><!> <!></div>'),y0=T('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0" style="color: var(--warning)">$</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: val@beat val@beat"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),w0=T('<div class="clip-automation svelte-cwrja0"><!> <!></div>'),x0=T('<div draggable="true" role="listitem"><!> <!> <!></div>'),S0=T('<button class="delete-track svelte-cwrja0" title="Remove track">&times;</button>'),P0=T('<div draggable="true" role="listitem"><span class="track-handle svelte-cwrja0" title="Drag to reorder">&#9776;</span> <button title="Mute track">M</button> <button title="Solo track">S</button> <div class="track-clips svelte-cwrja0"><!> <button class="add-clip svelte-cwrja0" title="Add clip">+</button> <button class="auto-add-trigger svelte-cwrja0">+@</button> <button class="auto-add-trigger svelte-cwrja0" style="color: var(--warning-dim, var(--warning))">+$</button></div> <!></div>'),A0=T('<!> <!> <div class="tracks-panel svelte-cwrja0"><!> <button class="add-track svelte-cwrja0">+ Track</button></div>',1),T0=T('<div class="part-editor svelte-cwrja0"><div class="part-header svelte-cwrja0"><!></div> <div class="part-body svelte-cwrja0"><!></div></div>');function D0(n,e){ke(e,!0),_e(e,"partSeqIdx",3,0);let a=_e(e,"activeTrackClips",3,null),r=_e(e,"focusClipNotches",3,null),s=_e(e,"automation",19,()=>[]),i=_e(e,"stepAutomation",19,()=>[]),o=_e(e,"playbackBeat",3,null),c=_e(e,"playbackSecs",3,null),l=H(!1),f=C(()=>e.settings.length>0),u=H(!1),d=H("");function m(){h(d,e.partName,!0),h(u,!0)}function y(){const X=t(d).trim();if(!X||X===e.partName){h(u,!1);return}e.onrenamepart(X),h(u,!1)}function k(){h(u,!1)}let w=H(-1),_=H(-1);function D(X,oe){h(w,oe,!0),X.dataTransfer&&(X.dataTransfer.effectAllowed="move",X.dataTransfer.setData("application/x-track",String(oe)))}function L(X,oe){X.dataTransfer?.types.includes("application/x-track")&&(X.preventDefault(),X.dataTransfer.dropEffect="move",h(_,oe,!0))}function z(){h(_,-1)}function q(X,oe){X.preventDefault(),t(w)!==-1&&t(w)!==oe&&e.onmovetrack(t(w),oe),h(w,-1),h(_,-1)}function S(){h(w,-1),h(_,-1)}let g=H(null),R=H(null);function O(X,oe,ge){X.stopPropagation(),h(g,{track:oe,clip:ge},!0),X.dataTransfer&&(X.dataTransfer.effectAllowed="move",X.dataTransfer.setData("application/x-clip",`${oe}:${ge}`))}function I(X,oe,ge){X.dataTransfer?.types.includes("application/x-clip")&&(X.preventDefault(),X.stopPropagation(),X.dataTransfer.dropEffect="move",h(R,{track:oe,clip:ge},!0))}function F(X){X.stopPropagation(),h(R,null)}function W(X,oe,ge){X.preventDefault(),X.stopPropagation(),t(g)&&(t(g).track!==oe||t(g).clip!==ge)&&e.onmoveclip(t(g).track,t(g).clip,oe,ge),h(g,null),h(R,null)}function M(){h(g,null),h(R,null)}function j(X,oe){if(X.dataTransfer?.types.includes("application/x-clip")){if(X.preventDefault(),t(g)){const ge=e.tracks[oe].length;(t(g).track!==oe||t(g).clip!==ge)&&e.onmoveclip(t(g).track,t(g).clip,oe,ge)}h(g,null),h(R,null)}}function E(X){X.dataTransfer?.types.includes("application/x-clip")&&(X.preventDefault(),X.dataTransfer.dropEffect="move")}function G(X,oe){return t(R)!==null&&t(R).track===X&&t(R).clip===oe}function re(X,oe){return t(g)!==null&&t(g).track===X&&t(g).clip===oe}let ne=H(!1),$=H("");function N(){h(ne,!0),h($,"")}function ee(){const X=Zs(t($));X&&e.onaddautomation&&e.onaddautomation(X),h(ne,!1),h($,"")}function de(){h(ne,!1),h($,"")}let De=H(!1),se=H("");function pe(){h(De,!0),h(se,"")}function Ve(){const X=Js(t(se));X&&e.onaddstepautomation&&e.onaddstepautomation(X),h(De,!1),h(se,"")}function qe(){h(De,!1),h(se,"")}let Ae=H(null),we=H("");function Fe(X,oe){h(Ae,{track:X,clip:oe},!0),h(we,"")}function Qe(X,oe){const ge=Zs(t(we));if(ge){const Me=e.tracks[X][oe],Re=[...Me.automation,ge];e.onchangeclip(X,oe,{...Me,automation:Re})}h(Ae,null),h(we,"")}function nn(){h(Ae,null),h(we,"")}function kn(X,oe,ge,Me){const Re=e.tracks[X][oe],Ee=[...Re.automation];Ee[ge]=Me,e.onchangeclip(X,oe,{...Re,automation:Ee})}function Xn(X,oe,ge){const Me=e.tracks[X][oe],Re=Me.automation.filter((Ee,un)=>un!==ge);e.onchangeclip(X,oe,{...Me,automation:Re})}let qn=H(null),on=H("");function Pn(X,oe){h(qn,{track:X,clip:oe},!0),h(on,"")}function Kt(X,oe){const ge=Js(t(on));if(ge){const Me=e.tracks[X][oe],Re=[...Me.step_automation,ge];e.onchangeclip(X,oe,{...Me,step_automation:Re})}h(qn,null),h(on,"")}function Wt(){h(qn,null),h(on,"")}function Ut(X,oe,ge,Me){const Re=e.tracks[X][oe],Ee=[...Re.step_automation];Ee[ge]=Me,e.onchangeclip(X,oe,{...Re,step_automation:Ee})}function aa(X,oe,ge){const Me=e.tracks[X][oe],Re=Me.step_automation.filter((Ee,un)=>un!==ge);e.onchangeclip(X,oe,{...Me,step_automation:Re})}var Qt=T0(),qt=x(Qt),sa=x(qt);{var pt=X=>{var oe=u0(),ge=Te(oe),Me=v(ge,2),Re=v(Me,2);B("keydown",ge,Ee=>{Ee.key==="Enter"&&y(),Ee.key==="Escape"&&k()}),Zn(ge,()=>t(d),Ee=>h(d,Ee)),B("click",Me,y),B("click",Re,k),A(X,oe)},nt=X=>{var oe=p0(),ge=Te(oe),Me=x(ge),Re=v(ge,2);let Ee;var un=v(Re,2),zn=v(un,2),Nn=v(zn,2),tn=v(Nn,2);{var dn=Ce=>{var fe=d0();B("click",fe,N),Z("mouseenter",fe,()=>le.set("add-automation")),A(Ce,fe)};J(tn,Ce=>{e.onaddautomation&&Ce(dn)})}var he=v(tn,2);{var ln=Ce=>{var fe=f0();B("click",fe,pe),Z("mouseenter",fe,()=>le.set("add-step-automation")),A(Ce,fe)};J(he,Ce=>{e.onaddstepautomation&&Ce(ln)})}var An=v(he,2);{var an=Ce=>{var fe=m0(),rn=x(fe);te((Cn,Ne)=>Se(rn,`${Cn??""} / ${Ne??""}s`),[()=>o().toFixed(1),()=>c().toFixed(1)]),A(Ce,fe)};J(An,Ce=>{o()!=null&&c()!=null&&Ce(an)})}te(()=>{Se(Me,e.partName),Ee=ve(Re,1,"header-btn gear svelte-cwrja0",null,Ee,{glow:t(f),active:t(l)})}),B("click",Re,()=>{h(l,!t(l))}),Z("mouseenter",Re,()=>le.set("part-settings-gear")),B("click",un,m),B("click",zn,function(...Ce){e.onduplicatepart?.apply(this,Ce)}),B("click",Nn,function(...Ce){e.ondeletepart?.apply(this,Ce)}),A(X,oe)};J(sa,X=>{t(u)?X(pt):X(nt,!1)})}var K=v(qt,2),ie=x(K);{var Pe=X=>{$u(X,{get settings(){return e.settings},get onsetsetting(){return e.onsetsettingstructured},get ondeletesetting(){return e.ondeletesettingbykey},get onaddsetting(){return e.onaddsetting}})},Ge=X=>{var oe=A0(),ge=Te(oe);{var Me=tn=>{var dn=v0(),he=x(dn);Ue(he,17,s,We,(an,Ce,fe)=>{Ys(an,{get auto(){return t(Ce)},onchange:rn=>e.onchangeautomation?.(fe,rn),ondelete:()=>e.ondeleteautomation?.(fe)})});var ln=v(he,2);{var An=an=>{var Ce=h0(),fe=v(x(Ce),2),rn=v(fe,2),Cn=v(rn,2);B("keydown",fe,Ne=>{Ne.key==="Enter"&&ee(),Ne.key==="Escape"&&de()}),Zn(fe,()=>t($),Ne=>h($,Ne)),B("click",rn,ee),B("click",Cn,de),A(an,Ce)};J(ln,an=>{t(ne)&&an(An)})}A(tn,dn)};J(ge,tn=>{(s().length>0||t(ne))&&tn(Me)})}var Re=v(ge,2);{var Ee=tn=>{var dn=g0(),he=x(dn);Ue(he,17,i,We,(an,Ce,fe)=>{$s(an,{get auto(){return t(Ce)},onchange:rn=>e.onchangestepautomation?.(fe,rn),ondelete:()=>e.ondeletestepautomation?.(fe)})});var ln=v(he,2);{var An=an=>{var Ce=_0(),fe=v(x(Ce),2),rn=v(fe,2),Cn=v(rn,2);B("keydown",fe,Ne=>{Ne.key==="Enter"&&Ve(),Ne.key==="Escape"&&qe()}),Zn(fe,()=>t(se),Ne=>h(se,Ne)),B("click",rn,Ve),B("click",Cn,qe),A(an,Ce)};J(ln,an=>{t(De)&&an(An)})}A(tn,dn)};J(Re,tn=>{(i().length>0||t(De))&&tn(Ee)})}var un=v(Re,2),zn=x(un);Ue(zn,17,()=>e.tracks,We,(tn,dn,he)=>{var ln=P0();let An;var an=v(x(ln),2);let Ce;var fe=v(an,2);let rn;var Cn=v(fe,2);let Ne;var Gn=x(Cn);Ue(Gn,17,()=>t(dn),We,(Q,ae,ce)=>{var be=x0();let Ie;var Ke=x(be);{let sn=C(()=>a()?.get(he)?.clipIdx===ce?a().get(he).progress:-1),ht=C(()=>r()?.get(he)?.[ce]??null),Ct=C(()=>e.onfocusclipdrag?(bn,Yn)=>e.onfocusclipdrag(bn,Yn,he,ce):void 0);Ou(Ke,{get clip(){return t(ae)},get patterns(){return e.patterns},get progress(){return t(sn)},get focusNotches(){return t(ht)},onchange:bn=>e.onchangeclip(he,ce,bn),ondelete:()=>e.ondeleteclip(he,ce),oneditpattern:()=>e.oneditpattern(t(ae).name),get onfocusdrag(){return t(Ct)}})}var Kn=v(Ke,2);{var gn=sn=>{var ht=k0(),Ct=x(ht);Ue(Ct,17,()=>t(ae).automation,We,(In,tt,Bn)=>{Ys(In,{get auto(){return t(tt)},onchange:wn=>kn(he,ce,Bn,wn),ondelete:()=>Xn(he,ce,Bn)})});var bn=v(Ct,2);{var Yn=In=>{var tt=b0(),Bn=v(x(tt),2),wn=v(Bn,2),Le=v(wn,2);B("keydown",Bn,at=>{at.key==="Enter"&&Qe(he,ce),at.key==="Escape"&&nn()}),Zn(Bn,()=>t(we),at=>h(we,at)),B("click",wn,()=>Qe(he,ce)),B("click",Le,nn),A(In,tt)};J(bn,In=>{t(Ae)?.track===he&&t(Ae)?.clip===ce&&In(Yn)})}A(sn,ht)};J(Kn,sn=>{(t(ae).automation.length>0||t(Ae)?.track===he&&t(Ae)?.clip===ce)&&sn(gn)})}var yn=v(Kn,2);{var Wn=sn=>{var ht=w0(),Ct=x(ht);Ue(Ct,17,()=>t(ae).step_automation,We,(In,tt,Bn)=>{$s(In,{get auto(){return t(tt)},onchange:wn=>Ut(he,ce,Bn,wn),ondelete:()=>aa(he,ce,Bn)})});var bn=v(Ct,2);{var Yn=In=>{var tt=y0(),Bn=v(x(tt),2),wn=v(Bn,2),Le=v(wn,2);B("keydown",Bn,at=>{at.key==="Enter"&&Kt(he,ce),at.key==="Escape"&&Wt()}),Zn(Bn,()=>t(on),at=>h(on,at)),B("click",wn,()=>Kt(he,ce)),B("click",Le,Wt),A(In,tt)};J(bn,In=>{t(qn)?.track===he&&t(qn)?.clip===ce&&In(Yn)})}A(sn,ht)};J(yn,sn=>{(t(ae).step_automation.length>0||t(qn)?.track===he&&t(qn)?.clip===ce)&&sn(Wn)})}te(sn=>{Ie=ve(be,1,"clip-wrapper svelte-cwrja0",null,Ie,sn),$e(be,`flex-grow: ${t(ae).times??""};`)},[()=>({"clip-drag-over":G(he,ce),"clip-dragging":re(he,ce)})]),Z("dragstart",be,sn=>O(sn,he,ce)),Z("dragover",be,sn=>I(sn,he,ce)),Z("dragleave",be,sn=>F(sn)),Z("drop",be,sn=>W(sn,he,ce)),Z("dragend",be,M),A(Q,be)});var p=v(Gn,2),b=v(p,2),P=v(b,2),V=v(Cn,2);{var U=Q=>{var ae=S0();B("click",ae,()=>e.ondeletetrack(he)),A(Q,ae)};J(V,Q=>{e.tracks.length>1&&Q(U)})}te((Q,ae,ce)=>{An=ve(ln,1,"track-row svelte-cwrja0",null,An,{"drag-over-track":t(_)===he&&t(w)!==he,"dragging-track":t(w)===he}),Ce=ve(an,1,"ms-btn mute svelte-cwrja0",null,Ce,Q),rn=ve(fe,1,"ms-btn solo svelte-cwrja0",null,rn,ae),Ne=$e(Cn,"",Ne,ce)},[()=>({active:jn.mutedPartTracks.has(he)}),()=>({active:jn.soloPartTracks.has(he)}),()=>({opacity:jn.isPartTrackAudible(he)?1:.35})]),Z("dragstart",ln,Q=>D(Q,he)),Z("dragover",ln,Q=>{L(Q,he),E(Q)}),Z("dragleave",ln,z),Z("drop",ln,Q=>{q(Q,he),j(Q,he)}),Z("dragend",ln,S),Z("mouseenter",ln,()=>le.set("part-clip-track")),B("click",an,Q=>{Q.stopPropagation(),jn.toggleMutePartTrack(he)}),Z("mouseenter",an,()=>le.set("mute-button")),B("click",fe,Q=>{Q.stopPropagation(),jn.toggleSoloPartTrack(he)}),Z("mouseenter",fe,()=>le.set("solo-button")),B("click",p,()=>e.onaddclip(he)),Z("mouseenter",p,()=>le.set("add-clip")),B("click",b,()=>{const Q=t(dn).findLastIndex(ae=>ae.name!=="gap");Q>=0&&Fe(he,Q)}),Z("mouseenter",b,()=>le.set("add-automation")),B("click",P,()=>{const Q=t(dn).findLastIndex(ae=>ae.name!=="gap");Q>=0&&Pn(he,Q)}),Z("mouseenter",P,()=>le.set("add-step-automation")),A(tn,ln)});var Nn=v(zn,2);B("click",Nn,function(...tn){e.onaddtrack?.apply(this,tn)}),Z("mouseenter",Nn,()=>le.set("add-track")),A(X,oe)};J(ie,X=>{t(l)?X(Pe):X(Ge,!1)})}Z("mouseenter",qt,()=>le.set("part-header")),A(n,Qt),ye()}Ye(["keydown","click"]);let si=!1;async function gr(){si||(await wasm_bindgen(),si=!0)}async function _o(n){await gr();const e=wasm_bindgen.parse_measure_text(n);return JSON.parse(e)}async function R0(n){await gr();const e=wasm_bindgen.parse_demo_text(n);return JSON.parse(e)}function q0(n){return n.map(e=>e.map(a=>"Beat"in a?a.Beat.map(r=>Us(r)).join(""):co(a.Command)).join(" ")).join(" | ")}async function C0(n){await gr();const e=wasm_bindgen.parse_settings_text(n);return JSON.parse(e)}function go(n,e,a,r){const s=n[e];"Beat"in s&&(s.Beat[a]=r)}async function bo(n,e,a,r){const i=(await _o(r)).find(o=>"Beat"in o);if(i&&"Beat"in i&&i.Beat.length>0){const o=n[e];if("Beat"in o)return o.Beat[a]=i.Beat[0],!0}return!1}function L0(n){n.push({Beat:["Rest"]})}function ko(n,e){n.splice(e,1)}function yo(n,e,a){const r=n[e];"Beat"in r&&(r.Beat.splice(a,1),r.Beat.length===0&&n.splice(e,1))}async function er(n,e,a){const s=(await _o(a)).filter(i=>"Command"in i);return s.length>0?(n.splice(e,0,...s),!0):!1}function wo(n,e,a){const[r]=n.splice(e,1),s=e<a?a-1:a;n.splice(s,0,r)}function M0(n,e){ke(e,!0);let a=C(()=>{const o=new Map;for(const c of e.groupSettings)o.set(cs(c),lo(c));for(const c of e.toneSettings){const l=Object.keys(c)[0],f=Object.values(c)[0];o.set(l,f)}return o}),r=C(()=>{const o=new Map;for(const c of e.partSettings)o.set(Ua(c),vr(c));return o});const s={Octave:"setting-Octave",Instrument:"setting-Instrument",Scale:"setting-Scale",Root:"setting-Root",Velocity:"setting-Velocity",Arp:"setting-Arp",ArpRate:"setting-ArpRate",ArpMode:"setting-ArpMode",ArpOctaves:"setting-ArpOctaves",ArpSlide:"setting-ArpSlide",Legato:"setting-Legato",Voices:"setting-Voices",Glide:"setting-Glide",Level:"setting-Level",DrySend:"setting-DrySend",ChorusSend:"setting-ChorusSend",DelaySend:"setting-DelaySend",ReverbSend:"setting-ReverbSend",Swing:"setting-Swing",AccentPct:"setting-AccentPct",Groove:"setting-Groove",Humanize:"setting-Humanize",Strum:"setting-Strum",StrumIdx:"setting-StrumIdx"},i=["tab-track-tone","tab-track-arp","tab-track-voice","tab-track-rhythm"];{let o=C(()=>wu(Dn.resolved));_r(n,{get tabs(){return t(o)},get activeSettings(){return t(a)},get inheritedSettings(){return t(r)},get defaults(){return mo},get ranges(){return fo},get settingType(){return po},get onset(){return e.onset},get ondelete(){return e.ondelete},get onadd(){return e.onadd},placeholder:"e.g. swing 60",get tabHints(){return i},get settingHints(){return s}})}ye()}var E0=T("<button> </button>"),F0=T('<span class="division-wrap svelte-wo5v94"><!> <!></span>');function O0(n,e){ke(e,!0);let a=_e(e,"hasTonal",3,!1),r=H(!1),s=null;const i=C(()=>wa(e.division)[1]),o=C(()=>wa(e.division)[2]);function c(){a()||!us(e.division)||t(o).length>0?h(r,!0):(s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,e.onchange(bu(e.division))},200))}function l(){s!==null&&(clearTimeout(s),s=null),h(r,!0)}function f(w){const[_]=wa(w);return _==="Hit"?"hit":_==="Accent"?"accent":_==="Rest"?"rest":_==="Sustain"?"sustain":"tonal"}var u=F0(),d=x(u);{var m=w=>{{let _=C(()=>Us(e.division)),D=C(()=>t(o).length>0?Qs(e.division):"");Bt(w,{get placeholder(){return t(_)},get initialValue(){return t(D)},onsubmit:L=>{h(r,!1),e.onedit(L)},oncancel:()=>{h(r,!1)}})}},y=w=>{var _=E0();let D,L;var z=x(_);te((q,S,g)=>{D=ve(_,1,`cell ${q??""}`,"svelte-wo5v94",D,{probable:t(i)!==null,locked:t(o).length>0}),en(_,"title",S),L=$e(_,"",L,{opacity:t(i)!==null?.4+.6*(t(i)/100):void 0}),Se(z,g)},[()=>f(e.division),()=>t(i)!==null?`${t(i)}% probability`+(us(e.division)&&!a()&&t(o).length===0?" — click to cycle, double-click to edit":" — click to edit"):us(e.division)&&!a()&&t(o).length===0?"Click to cycle, double-click to edit":"Click to edit",()=>Us(e.division)]),B("click",_,c),B("dblclick",_,l),A(w,_)};J(d,w=>{t(r)?w(m):w(y,!1)})}var k=v(d,2);Rt(k,{get onclick(){return e.ondelete}}),Z("mouseenter",u,()=>le.set("division-cell")),A(n,u),ye()}Ye(["click","dblclick"]);var z0=T('<span class="beat svelte-192akuh"><!> <button class="add-btn svelte-192akuh" title="Add division">+</button> <!></span>');function N0(n,e){ke(e,!0);let a=_e(e,"hasTonal",3,!1);var r=z0(),s=x(r);Ue(s,17,()=>e.divisions,We,(c,l,f)=>{O0(c,{get division(){return t(l)},get hasTonal(){return a()},onchange:u=>e.onchange(f,u),ondelete:()=>e.ondeletedivision(f),onedit:u=>e.onedit(f,u)})});var i=v(s,2),o=v(i,2);Rt(o,{get onclick(){return e.ondeletebeat}}),Z("mouseenter",r,()=>le.set("beat-cell")),B("click",i,function(...c){e.onadddivision?.apply(this,c)}),A(n,r),ye()}Ye(["click"]);var I0=T('<span class="pill-wrap svelte-1heu11r"><span class="pill svelte-1heu11r"> </span> <!></span>');function j0(n,e){ke(e,!0);var a=I0(),r=x(a),s=x(r),i=v(r,2);Rt(i,{get onclick(){return e.ondelete}}),te(o=>Se(s,o),[()=>co(e.command)]),Z("mouseenter",a,()=>le.set("command-pill")),A(n,a),ye()}var B0=T('<span class="playhead svelte-frrp2o"></span>'),H0=T('<button class="insert-btn svelte-frrp2o" title="Insert command here">+</button>'),V0=T('<span draggable="true"><!></span>'),G0=T("<span><!></span> <!>",1),K0=T('<span class="measure svelte-frrp2o"><!> <!> <span><!></span> <button class="add-btn svelte-frrp2o" title="Add beat">+</button> <button class="cmd-btn svelte-frrp2o" title="Add command">cmd</button> <!></span>');function xo(n,e){ke(e,!0);let a=_e(e,"playing",3,!1),r=_e(e,"beatPosition",3,0),s=C(()=>e.items.filter(M=>"Beat"in M).length),i=C(()=>e.items.some(M=>"Beat"in M&&M.Beat.some(j=>!us(j)))),o=H(null),c=H(null),l=H(null);function f(M){return"Beat"in M}function u(M){return"Command"in M}function d(M){const j=e.items[M];f(j)&&(j.Beat.push("Rest"),e.onchange(M,j.Beat.length-1,"Rest"))}function m(M,j){h(c,j,!0),M.dataTransfer?.setData("text/plain",String(j))}function y(){h(c,null),h(l,null)}function k(M,j){M.preventDefault(),h(l,j,!0)}function w(){h(l,null)}function _(M,j){M.preventDefault(),t(c)!==null&&t(c)!==j&&e.onreorderitem(t(c),j),h(c,null),h(l,null)}var D=K0(),L=x(D);{var z=M=>{var j=B0();te(()=>$e(j,`left: ${r()/t(s)*100}%`)),A(M,j)};J(L,M=>{a()&&t(s)>0&&M(z)})}var q=v(L,2);Ue(q,17,()=>e.items,We,(M,j,E)=>{var G=G0(),re=Te(G);let ne;var $=x(re);{var N=qe=>{Bt(qe,{placeholder:"e.g. instrument bass",onsubmit:Ae=>{h(o,null),e.oninsertcommand(E,Ae)},oncancel:()=>{h(o,null)}})},ee=qe=>{var Ae=H0();B("click",Ae,()=>{h(o,E,!0)}),A(qe,Ae)};J($,qe=>{t(o)===E?qe(N):qe(ee,!1)})}var de=v(re,2);{var De=qe=>{N0(qe,{get divisions(){return t(j).Beat},get hasTonal(){return t(i)},onchange:(Ae,we)=>e.onchange(E,Ae,we),onadddivision:()=>d(E),ondeletedivision:Ae=>e.ondeletedivision(E,Ae),ondeletebeat:()=>e.ondeleteitem(E),onedit:(Ae,we)=>e.onedit(E,Ae,we)})},se=C(()=>f(t(j))),pe=qe=>{var Ae=V0();let we;var Fe=x(Ae);j0(Fe,{get command(){return t(j).Command},ondelete:()=>e.ondeleteitem(E)}),te(()=>we=ve(Ae,1,"draggable-command svelte-frrp2o",null,we,{"is-dragging":t(c)===E})),Z("dragstart",Ae,Qe=>m(Qe,E)),Z("dragend",Ae,y),A(qe,Ae)},Ve=C(()=>u(t(j)));J(de,qe=>{t(se)?qe(De):t(Ve)&&qe(pe,1)})}te(()=>ne=ve(re,1,"drop-zone svelte-frrp2o",null,ne,{active:t(l)===E,dragging:t(c)!==null})),Z("dragover",re,qe=>k(qe,E)),Z("dragleave",re,w),Z("drop",re,qe=>_(qe,E)),A(M,G)});var S=v(q,2);let g;var R=x(S);{var O=M=>{Bt(M,{placeholder:"e.g. instrument bass",onsubmit:j=>{h(o,null),e.oninsertcommand(e.items.length,j)},oncancel:()=>{h(o,null)}})};J(R,M=>{t(o)===e.items.length&&M(O)})}var I=v(S,2),F=v(I,2),W=v(F,2);Rt(W,{get onclick(){return e.ondeletemeasure}}),te(()=>g=ve(S,1,"drop-zone svelte-frrp2o",null,g,{active:t(l)===e.items.length,dragging:t(c)!==null})),Z("dragover",S,M=>k(M,e.items.length)),Z("dragleave",S,w),Z("drop",S,M=>_(M,e.items.length)),B("click",I,function(...M){e.onaddbeat?.apply(this,M)}),B("click",F,()=>{h(o,e.items.length,!0)}),A(n,D),ye()}Ye(["click"]);function W0(n,e){ke(e,!0);let a=_e(e,"inheritedSettings",19,()=>new Map),r=C(()=>{const o=new Map;for(const c of e.leadingCommands)"Command"in c&&o.set(ms(c.Command),ho(c.Command));return o});const s=["tab-track-tone","tab-track-arp","tab-track-voice","tab-track-mix","tab-track-rhythm"],i={Octave:"setting-Octave",Instrument:"setting-Instrument",Scale:"setting-Scale",Root:"setting-Root",Velocity:"setting-Velocity",Arp:"setting-Arp",ArpRate:"setting-ArpRate",ArpMode:"setting-ArpMode",ArpOctaves:"setting-ArpOctaves",ArpSlide:"setting-ArpSlide",Legato:"setting-Legato",Voices:"setting-Voices",Glide:"setting-Glide",Level:"setting-Level",DrySend:"setting-DrySend",ChorusSend:"setting-ChorusSend",DelaySend:"setting-DelaySend",ReverbSend:"setting-ReverbSend",Swing:"setting-Swing",AccentPct:"setting-AccentPct",Groove:"setting-Groove",Humanize:"setting-Humanize",Strum:"setting-Strum",StrumIdx:"setting-StrumIdx"};{let o=C(()=>uo(Dn.resolved));_r(n,{get tabs(){return t(o)},get activeSettings(){return t(r)},get inheritedSettings(){return a()},get defaults(){return mo},get ranges(){return fo},get settingType(){return po},get onset(){return e.onsetcommand},get ondelete(){return e.ondeletecommand},get onadd(){return e.onaddcommand},placeholder:"e.g. octave 4",get tabHints(){return s},get settingHints(){return i}})}ye()}var U0=T('<button class="label svelte-1bopal2" title="Double-click to rename"> </button>'),Q0=T('<button title="Toggle track settings">&#9881;</button>'),Z0=T('<span class="no-measure svelte-1bopal2">&mdash;</span>'),J0=T('<button class="auto-add-trigger svelte-1bopal2">+@</button>'),X0=T('<button class="auto-add-trigger step svelte-1bopal2">+$</button>'),Y0=T('<div class="track-row svelte-1bopal2"><!> <!> <!> <!> <!> <!></div>');function $0(n,e){ke(e,!0);let a=_e(e,"playingBeat",19,()=>-1),r=H(!1),s=H(!1),i=C(()=>e.track.measures[0]?ds(e.track.measures[0].items):0),o=C(()=>t(i)>0),c=C(()=>{const I=e.track.measures[e.measureIndex];return I?e.measureIndex===0?I.items.slice(t(i)):I.items:[]}),l=C(()=>e.measureIndex===0?t(i):0),f=C(()=>{const I=e.track.measures[0];return I?I.items.slice(0,t(i)):[]});var u=Y0(),d=x(u);{var m=I=>{{let F=C(()=>Ga(e.track.designator)),W=C(()=>Ga(e.track.designator));Bt(I,{get placeholder(){return t(F)},get initialValue(){return t(W)},onsubmit:M=>{h(r,!1),e.onrename(M)},oncancel:()=>{h(r,!1)}})}},y=I=>{var F=U0(),W=x(F);te(M=>Se(W,M),[()=>Ga(e.track.designator)]),B("dblclick",F,()=>{h(r,!0)}),A(I,F)};J(d,I=>{t(r)?I(m):I(y,!1)})}var k=v(d,2);{var w=I=>{var F=Q0();let W;te(()=>W=ve(F,1,"track-gear-btn svelte-1bopal2",null,W,{glow:t(o),active:t(s)})),B("click",F,()=>{h(s,!t(s))}),Z("mouseenter",F,()=>le.set("track-settings-gear")),A(I,F)};J(k,I=>{e.onsetleadingcommand&&I(w)})}var _=v(k,2);Rt(_,{get onclick(){return e.ondeletetrack}});var D=v(_,2);{var L=I=>{W0(I,{get leadingCommands(){return t(f)},get inheritedSettings(){return e.inheritedSettings},get onsetcommand(){return e.onsetleadingcommand},get ondeletecommand(){return e.ondeleteleadingcommand},get onaddcommand(){return e.onaddleadingcommand}})},z=I=>{{let F=C(()=>a()>=0),W=C(()=>a()>=0?a():0);xo(I,{get items(){return t(c)},get playing(){return t(F)},get beatPosition(){return t(W)},onchange:(M,j,E)=>e.onchange(e.measureIndex,M+t(l),j,E),onaddbeat:()=>{const M=e.track.measures[e.measureIndex];M.items.push({Beat:["Rest"]}),e.onchange(e.measureIndex,M.items.length-1,0,"Rest")},ondeletemeasure:()=>e.ondeletemeasure(e.measureIndex),ondeleteitem:M=>e.ondeleteitem(e.measureIndex,M+t(l)),ondeletedivision:(M,j)=>e.ondeletedivision(e.measureIndex,M+t(l),j),oninsertcommand:(M,j)=>e.oninsertcommand(e.measureIndex,M+t(l),j),onreorderitem:(M,j)=>e.onreorderitem(e.measureIndex,M+t(l),j+t(l)),onedit:(M,j,E)=>e.onedit(e.measureIndex,M+t(l),j,E)})}},q=I=>{var F=Z0();A(I,F)};J(D,I=>{t(s)&&e.onsetleadingcommand&&e.ondeleteleadingcommand&&e.onaddleadingcommand?I(L):e.track.measures[e.measureIndex]?I(z,1):I(q,!1)})}var S=v(D,2);{var g=I=>{var F=J0();B("click",F,function(...W){e.onaddautomation?.apply(this,W)}),Z("mouseenter",F,()=>le.set("add-automation")),A(I,F)};J(S,I=>{e.onaddautomation&&I(g)})}var R=v(S,2);{var O=I=>{var F=X0();B("click",F,function(...W){e.onaddstepautomation?.apply(this,W)}),Z("mouseenter",F,()=>le.set("add-step-automation")),A(I,F)};J(R,I=>{e.onaddstepautomation&&I(O)})}Z("mouseenter",u,()=>le.set("track-row")),A(n,u),ye()}Ye(["dblclick","click"]);const ed=`<p><code>o</code> hit &middot; <code>x</code> accented hit &middot; <code>.</code> rest &middot; <code>-</code> sustain (hold previous note)</p>
<p><code>c</code>&ndash;<code>b</code> note name, optional <code>#</code> sharp / <code>_</code> flat, optional octave digit: <code>c#5</code>, <code>e_</code>, <code>f</code></p>
<p><code>0</code>&ndash;<code>9</code> scale degree relative to root/scale</p>
<p><code>></code> before a note or degree &mdash; accented (velocity 127)</p>
<p><code>~</code> before a note or degree &mdash; pitch slide without re-triggering</p>
<p><code>?N</code> after any hit/note &mdash; probability (1&ndash;99%), e.g. <code>o?50</code>, <code>c?75</code></p>
<p><code>{key=val}</code> after any hit/note &mdash; per-step parameter lock, e.g. <code>o{level=0.5}</code>, <code>c{velocity=80,chorus_send=0.8}</code></p>
<p><code>strum_idx N</code> &mdash; assign track position in strum order (0-based); <code>strum_idx off</code> to opt out</p>
<p><code>@param: values...</code> &mdash; automation track (after a track line). Linear interpolation between keyframe values. <code>-</code> hold &middot; <code>.</code> pass &middot; <code>|</code> section separator &middot; <code>*N</code> repeat</p>
<p><code>$param: value@beat</code> &mdash; step automation. Discrete instant changes at specific beats. <code>s</code> suffix = seconds. Supported at three levels: after a track line (track params like level, velocity, sends), at part level before clips (part params like bpm, effects), or after a clip line (part params scoped to that clip). </p>`;var nd=T('<input class="rename-input svelte-1c399gj"/> <button class="header-btn ok svelte-1c399gj">ok</button> <button class="header-btn cancel svelte-1c399gj">esc</button>',1),td=T('<span class="playback-info svelte-1c399gj"> </span>'),ad=T('<span class="selected-label svelte-1c399gj"> </span> <button class="header-btn svelte-1c399gj" title="Rename pattern">&#9998;</button> <button class="header-btn svelte-1c399gj" title="Duplicate pattern">&#10697;</button> <!>',1),sd=T('<pre class="error svelte-1c399gj"> </pre>'),rd=T('<div class="group-content svelte-1c399gj"><!></div>'),id=T('<button title="Mute track">M</button> <button title="Solo track">S</button>',1),od=T('<span class="auto-add-row svelte-1c399gj"><span class="auto-add-prefix svelte-1c399gj">@</span> <input class="auto-add-input svelte-1c399gj" placeholder="param: v1 v2 | v3 v4"/> <button class="auto-add-btn ok svelte-1c399gj">ok</button> <button class="auto-add-btn cancel svelte-1c399gj">esc</button></span>'),ld=T('<div class="track-automation svelte-1c399gj"><!> <!></div>'),cd=T('<span class="auto-add-row svelte-1c399gj"><span class="auto-add-prefix svelte-1c399gj" style="color: var(--warning)">$</span> <input class="auto-add-input svelte-1c399gj" placeholder="param: val@beat val@beat"/> <button class="auto-add-btn ok svelte-1c399gj">ok</button> <button class="auto-add-btn cancel svelte-1c399gj">esc</button></span>'),ud=T('<div class="track-automation svelte-1c399gj"><!> <!></div>'),dd=T('<div class="track-container svelte-1c399gj"><div draggable="true" role="listitem"><span class="track-handle svelte-1c399gj" title="Drag to reorder">&#9776;</span> <!> <!></div> <!> <!></div>'),fd=T('<div class="group-content svelte-1c399gj"><!> <button class="add-track svelte-1c399gj">+ Track</button></div>'),md=T('<div class="group-detail svelte-1c399gj"><div class="group-toolbar svelte-1c399gj"><button title="Toggle group settings">&#9881;</button> <button class="group-delete-btn svelte-1c399gj" title="Delete group">&times;</button> <div><!></div></div> <!></div>'),pd=T("<div><!></div> <!>",1),hd=T('<p class="placeholder svelte-1c399gj">Loading...</p>'),vd=T('<p class="placeholder svelte-1c399gj">Select a pattern to edit.</p>'),_d=T('<div class="pattern-editor svelte-1c399gj"><div class="header svelte-1c399gj"><span class="title svelte-1c399gj">Pattern</span> <!></div> <!> <!> <div class="score-help svelte-1c399gj"><!></div></div>');function gd(n,e){ke(e,!0);let a=_e(e,"partSettings",19,()=>[]),r=H(null),s=H(!1),i=H(""),o=H(0),c=H(0),l=H(!1),f=C(()=>Y.selectedPatternLabel),u=C(()=>Y.songAst?.patterns.find(p=>p.label===t(f))??null),d=C(()=>t(u)?t(u).groups:null);He(()=>{t(d)&&t(o)>=t(d).length&&h(o,Math.max(0,t(d).length-1),!0)});let m=C(()=>t(d)&&t(o)<t(d).length?t(d)[t(o)]:null),y=C(()=>t(m)?Math.max(...t(m).tracks.map(p=>p.measures.length),0):0),k=C(()=>Array.from({length:t(y)},(p,b)=>({label:String(b+1)})));He(()=>{t(c)>=t(y)&&h(c,Math.max(0,t(y)-1),!0)});function w(p){let b=0;for(const P of p.tracks)b=Math.max(b,P.measures.length);return Math.max(b,1)}let _=C(()=>t(d)?t(d).map((p,b)=>({label:`Group ${b+1}`,weight:w(p)})):[]),D=C(()=>{if(!xe.playing||!xe.position||!xe.sourceMap||!t(f)||!t(d))return null;const p=xe.position;for(let b=0;b<p.tracks.length;b++){const P=p.tracks[b];if(P.done||!P.pattern_key.startsWith(t(f)+"@"))continue;let V=P.measure_idx;for(let U=0;U<t(d).length;U++){const Q=Math.max(...t(d)[U].tracks.map(ae=>ae.measures.length),0);if(V<Q)return{groupIdx:U,localMeasureIdx:V,beatTime:P.beat_time,elapsedSecs:P.elapsed_secs};V-=Q}return null}return null}),L=C(()=>t(D)?.groupIdx??-1),z=C(()=>!t(D)||t(D).groupIdx!==t(o)?-1:t(D).localMeasureIdx),q=C(()=>{if(!t(D)||t(L)<0||!t(d))return 0;const p=t(d)[t(L)];if(!p)return 0;const b=Math.max(...p.tracks.map(ae=>ae.measures.length),1),P=p.tracks[0];if(!P)return 0;const V=P.measures[t(D).localMeasureIdx],U=V?V.items.filter(ae=>"Beat"in ae).length:1,Q=U>0?t(D).beatTime/U:0;return Math.min((t(D).localMeasureIdx+Q)/b,1)}),S=C(()=>{if(!t(D)||t(z)<0||!t(d))return 0;const p=t(d)[t(o)];if(!p)return 0;const b=p.tracks[0];if(!b)return 0;const P=b.measures[t(z)],V=P?P.items.filter(U=>"Beat"in U).length:1;return V>0?Math.min(t(D).beatTime/V,1):0});function g(p){return!t(D)||t(D).groupIdx!==t(o)||t(D).localMeasureIdx!==t(c)?-1:t(D).beatTime}let R=C(()=>{const p=xe.position;if(!p||!xe.sourceMap||!t(f)||!t(d))return null;for(let b=0;b<p.tracks.length;b++){const P=p.tracks[b];if(P.done||!P.pattern_key.startsWith(t(f)+"@"))continue;let V=P.measure_idx,U=0;for(let Q=0;Q<t(d).length;Q++){const ae=t(d)[Q],ce=Math.max(...ae.tracks.map(be=>be.measures.length),0);if(V<ce){for(let be=0;be<V;be++){const Ie=ae.tracks.find(Ke=>be<Ke.measures.length);Ie&&(U+=Ie.measures[be].items.filter(Ke=>"Beat"in Ke).length)}return U+=P.beat_time,{beat:U,secs:P.elapsed_secs}}for(let be=0;be<ce;be++){const Ie=ae.tracks.find(Ke=>be<Ke.measures.length);Ie&&(U+=Ie.measures[be].items.filter(Ke=>"Beat"in Ke).length)}V-=ce}return null}return null}),O=H(-1),I=H(-1);function F(p,b){h(O,b,!0),p.dataTransfer&&(p.dataTransfer.effectAllowed="move",p.dataTransfer.setData("application/x-pattern-track",String(b)))}function W(p,b){p.dataTransfer?.types.includes("application/x-pattern-track")&&(p.preventDefault(),p.dataTransfer.dropEffect="move",h(I,b,!0))}function M(){h(I,-1)}function j(p,b){if(p.preventDefault(),t(O)!==-1&&t(O)!==b&&t(d)){const P=t(d)[t(o)],[V]=P.tracks.splice(t(O),1);P.tracks.splice(b,0,V),N()}h(O,-1),h(I,-1)}function E(){h(O,-1),h(I,-1)}function G(){if(!Y.songAst||!t(f)||!t(u))return;const p=new Set(Y.songAst.patterns.map(U=>U.label));let b=`${t(f)}_copy`,P=2;for(;p.has(b);)b=`${t(f)}_copy_${P}`,P++;const V={...En(t(u)),label:b};Y.songAst.patterns.push(V),Y.selectedPatternLabel=b,N()}function re(){t(f)&&(h(i,t(f),!0),h(s,!0))}async function ne(){if(!Y.songAst||!t(f)||!t(i).trim()){h(s,!1);return}const p=t(i).trim(),b=t(f);if(p===b){h(s,!1);return}try{Y.songAst=await Zc(Y.songAst,b,p),Y.selectedPatternLabel=p,h(s,!1),N()}catch(P){h(r,P instanceof Error?P.message:String(P),!0),h(s,!1)}}function $(){h(s,!1)}async function N(){if(!(!Y.songAst||!Y.selectedSection)){h(r,null);try{const p=await Ks(Y.songAst);Y.replaceSectionContent(Y.selectedSection,p)}catch(p){h(r,p instanceof Error?p.message:String(p),!0)}}}function ee(p,b,P,V,U){t(d)&&(go(t(d)[t(o)].tracks[p].measures[b].items,P,V,U),N())}function de(){if(!t(d))return;const p={leading:[],trailing_comment:null};t(d)[t(o)].tracks.push({trivia:p,designator:{Named:"xx"},measures:[{items:[{Beat:["Rest"]}]}],automation:[],step_automation:[]}),N()}function De(p,b){if(!t(d))return;const P=t(d)[t(o)].tracks[p];b==="ac"?P.designator="Accent":P.designator={Named:b},N()}function se(p){t(d)&&(t(d).splice(p,1),N())}function pe(p){t(d)&&(t(d)[t(o)].tracks.splice(p,1),N())}function Ve(p,b){t(d)&&(t(d)[t(o)].tracks[p].measures.splice(b,1),N())}function qe(p,b,P){t(d)&&(ko(t(d)[t(o)].tracks[p].measures[b].items,P),N())}function Ae(p,b,P,V){t(d)&&(yo(t(d)[t(o)].tracks[p].measures[b].items,P,V),N())}async function we(p,b,P,V){if(t(d))try{await er(t(d)[t(o)].tracks[p].measures[b].items,P,V)&&N()}catch(U){h(r,U instanceof Error?U.message:String(U),!0)}}function Fe(p,b,P,V){t(d)&&(wo(t(d)[t(o)].tracks[p].measures[b].items,P,V),N())}async function Qe(p){if(t(d))try{const b=await C0(p),P=t(d)[t(o)];P.group_settings.push(...b.group_settings),P.tone_settings.push(...b.tone_settings),N()}catch(b){h(r,b instanceof Error?b.message:String(b),!0)}}function nn(p,b){if(!t(d))return;b=ni(p,b);const P=t(d)[t(o)];if($r.includes(p)){const V=P.group_settings.findIndex(Q=>cs(Q)===p),U={[p]:b};V>=0?P.group_settings[V]=U:P.group_settings.push(U)}else{const V=P.tone_settings.findIndex(Q=>Object.keys(Q)[0]===p),U={[p]:b};V>=0?P.tone_settings[V]=U:P.tone_settings.push(U)}N()}function kn(p){if(!t(d))return;const b=t(d)[t(o)];if($r.includes(p)){const P=b.group_settings.findIndex(V=>cs(V)===p);P>=0&&b.group_settings.splice(P,1)}else{const P=b.tone_settings.findIndex(V=>Object.keys(V)[0]===p);P>=0&&b.tone_settings.splice(P,1)}N()}let Xn=C(()=>t(m)!=null&&(t(m).group_settings.length>0||t(m).tone_settings.length>0)),qn=C(()=>{const p=new Map;for(const b of a())p.set(Ua(b),vr(b));if(t(m)){for(const b of t(m).group_settings)p.set(cs(b),lo(b));for(const b of t(m).tone_settings){const P=Object.keys(b)[0],V=Object.values(b)[0];p.set(P,V)}}return p});async function on(p,b,P,V,U){if(t(d))try{await bo(t(d)[t(o)].tracks[p].measures[b].items,P,V,U)&&N()}catch(Q){h(r,Q instanceof Error?Q.message:String(Q),!0)}}function Pn(p,b,P){if(!t(d))return;P=ni(b,P);const V=t(d)[t(o)].tracks[p].measures[0]?.items;if(!V)return;const U=ds(V);for(let Q=0;Q<U;Q++){const ae=V[Q];if("Command"in ae&&ms(ae.Command)===b){V[Q]={Command:ti(b,P)},N();return}}V.splice(U,0,{Command:ti(b,P)}),N()}function Kt(p,b){if(!t(d))return;const P=t(d)[t(o)].tracks[p].measures[0]?.items;if(!P)return;const V=ds(P);for(let U=0;U<V;U++){const Q=P[U];if("Command"in Q&&ms(Q.Command)===b){P.splice(U,1),N();return}}}async function Wt(p,b){if(!t(d))return;const P=t(d)[t(o)].tracks[p];P.measures[0]||(P.measures[0]={items:[]});const V=P.measures[0].items,U=ds(V);try{await er(V,U,b)&&N()}catch(Q){h(r,Q instanceof Error?Q.message:String(Q),!0)}}function Ut(){if(!t(d))return;const p={leading:[],trailing_comment:null};t(d).push({trivia:p,group_settings:[],tone_settings:[],tracks:[]}),h(o,t(d).length-1),N()}function aa(p,b){if(!t(d))return;const[P]=t(d).splice(p,1);t(d).splice(b,0,P),t(o)===p?h(o,b,!0):p<t(o)&&b>=t(o)?ka(o,-1):p>t(o)&&b<=t(o)&&ka(o),N()}function Qt(){if(!t(d))return;const p=t(d)[t(o)];for(const b of p.tracks)b.measures.push({items:[{Beat:["Rest"]}]});h(c,Math.max(...p.tracks.map(b=>b.measures.length),1)-1),N()}function qt(p){if(!t(d))return;const b=t(d)[t(o)];for(const V of b.tracks)p<V.measures.length&&V.measures.splice(p,1);const P=Math.max(...b.tracks.map(V=>V.measures.length),0);t(c)>=P&&h(c,Math.max(0,P-1),!0),N()}function sa(p,b){if(!t(d))return;const P=t(d)[t(o)];for(const V of P.tracks)if(p<V.measures.length&&b<V.measures.length){const[U]=V.measures.splice(p,1);V.measures.splice(b,0,U)}t(c)===p?h(c,b,!0):p<t(c)&&b>=t(c)?ka(c,-1):p>t(c)&&b<=t(c)&&ka(c),N()}let pt=H(-1),nt=H("");function K(p,b,P){t(d)&&(t(d)[t(o)].tracks[p].automation[b]=P,N())}function ie(p,b){t(d)&&(t(d)[t(o)].tracks[p].automation.splice(b,1),N())}function Pe(p){h(pt,p,!0),h(nt,"")}function Ge(p){if(!t(d))return;const b=Zs(t(nt));b&&(t(d)[t(o)].tracks[p].automation.push(b),N()),h(pt,-1),h(nt,"")}function X(){h(pt,-1),h(nt,"")}let oe=H(-1),ge=H("");function Me(p,b,P){t(d)&&(t(d)[t(o)].tracks[p].step_automation[b]=P,N())}function Re(p,b){t(d)&&(t(d)[t(o)].tracks[p].step_automation.splice(b,1),N())}function Ee(p){h(oe,p,!0),h(ge,"")}function un(p){if(!t(d))return;const b=Js(t(ge));b&&(t(d)[t(o)].tracks[p].step_automation.push(b),N()),h(oe,-1),h(ge,"")}function zn(){h(oe,-1),h(ge,"")}var Nn=_d(),tn=x(Nn),dn=v(x(tn),2);{var he=p=>{var b=nd(),P=Te(b),V=v(P,2),U=v(V,2);B("keydown",P,Q=>{Q.key==="Enter"&&ne(),Q.key==="Escape"&&$()}),Zn(P,()=>t(i),Q=>h(i,Q)),B("click",V,ne),B("click",U,$),A(p,b)},ln=p=>{var b=La(),P=Te(b);{var V=U=>{var Q=ad(),ae=Te(Q),ce=x(ae),be=v(ae,2),Ie=v(be,2),Ke=v(Ie,2);{var Kn=gn=>{var yn=td(),Wn=x(yn);te((sn,ht)=>Se(Wn,`${sn??""} / ${ht??""}s`),[()=>t(R).beat.toFixed(1),()=>t(R).secs.toFixed(1)]),A(gn,yn)};J(Ke,gn=>{t(R)&&gn(Kn)})}te(()=>Se(ce,t(f))),B("click",be,re),B("click",Ie,G),A(U,Q)};J(P,U=>{t(f)&&U(V)})}A(p,b)};J(dn,p=>{t(s)?p(he):p(ln,!1)})}var An=v(tn,2);{var an=p=>{var b=sd(),P=x(b);te(()=>Se(P,t(r))),A(p,b)};J(An,p=>{t(r)&&p(an)})}var Ce=v(An,2);{var fe=p=>{var b=pd(),P=Te(b),V=x(P);Qa(V,{get items(){return t(_)},get selectedIndex(){return t(o)},get activeIndex(){return t(L)},get activeProgress(){return t(q)},onselect:ae=>{h(o,ae,!0)},onmove:aa,onadd:Ut});var U=v(P,2);{var Q=ae=>{var ce=md(),be=x(ce),Ie=x(be);let Ke;var Kn=v(Ie,2),gn=v(Kn,2);let yn;var Wn=x(gn);Qa(Wn,{get items(){return t(k)},get selectedIndex(){return t(c)},get activeIndex(){return t(z)},get activeProgress(){return t(S)},onselect:bn=>{t(l)||h(c,bn,!0)},onmove:(bn,Yn)=>{t(l)||sa(bn,Yn)},onadd:()=>{t(l)||Qt()},ondelete:bn=>{t(l)||qt(bn)}});var sn=v(be,2);{var ht=bn=>{var Yn=rd(),In=x(Yn);M0(In,{get groupSettings(){return t(m).group_settings},get toneSettings(){return t(m).tone_settings},get partSettings(){return a()},onset:nn,ondelete:kn,onadd:Qe}),A(bn,Yn)},Ct=bn=>{var Yn=fd(),In=x(Yn);Ue(In,17,()=>t(m).tracks,We,(Bn,wn,Le)=>{const at=C(()=>t(wn).designator==="Accent"?null:Ga(t(wn).designator));var Rr=dd(),Lt=x(Rr);let qr,Cr;var Lr=v(x(Lt),2);{var zo=hn=>{const je=C(()=>Ga(t(wn).designator));var fn=id(),Tn=Te(fn);let St;var Hn=v(Tn,2);let st;te((xn,vt)=>{St=ve(Tn,1,"ms-btn mute svelte-1c399gj",null,St,xn),st=ve(Hn,1,"ms-btn solo svelte-1c399gj",null,st,vt)},[()=>({active:jn.mutedPatternLabels.has(t(je))}),()=>({active:jn.soloPatternLabels.has(t(je))})]),B("click",Tn,xn=>{xn.stopPropagation(),jn.toggleMutePatternLabel(t(je))}),Z("mouseenter",Tn,()=>le.set("mute-button")),B("click",Hn,xn=>{xn.stopPropagation(),jn.toggleSoloPatternLabel(t(je))}),Z("mouseenter",Hn,()=>le.set("solo-button")),A(hn,fn)};J(Lr,hn=>{t(wn).designator!=="Accent"&&hn(zo)})}var No=v(Lr,2);{let hn=C(()=>g());$0(No,{get track(){return t(wn)},get measureIndex(){return t(c)},get playingBeat(){return t(hn)},onchange:(je,fn,Tn,St)=>ee(Le,je,fn,Tn,St),ondeletetrack:()=>pe(Le),ondeletemeasure:je=>Ve(Le,je),ondeleteitem:(je,fn)=>qe(Le,je,fn),ondeletedivision:(je,fn,Tn)=>Ae(Le,je,fn,Tn),oninsertcommand:(je,fn,Tn)=>we(Le,je,fn,Tn),onreorderitem:(je,fn,Tn)=>Fe(Le,je,fn,Tn),onrename:je=>De(Le,je),onedit:(je,fn,Tn,St)=>on(Le,je,fn,Tn,St),onsetleadingcommand:(je,fn)=>Pn(Le,je,fn),ondeleteleadingcommand:je=>Kt(Le,je),onaddleadingcommand:je=>Wt(Le,je),get inheritedSettings(){return t(qn)},onaddautomation:()=>Pe(Le),onaddstepautomation:()=>Ee(Le)})}var Mr=v(Lt,2);{var Io=hn=>{var je=ld(),fn=x(je);Ue(fn,17,()=>t(wn).automation,We,(Hn,st,xn)=>{Ys(Hn,{get auto(){return t(st)},onchange:vt=>K(Le,xn,vt),ondelete:()=>ie(Le,xn)})});var Tn=v(fn,2);{var St=Hn=>{var st=od(),xn=v(x(st),2),vt=v(xn,2),Cs=v(vt,2);B("keydown",xn,Mt=>{Mt.key==="Enter"&&Ge(Le),Mt.key==="Escape"&&X()}),Zn(xn,()=>t(nt),Mt=>h(nt,Mt)),B("click",vt,()=>Ge(Le)),B("click",Cs,X),A(Hn,st)};J(Tn,Hn=>{t(pt)===Le&&Hn(St)})}A(hn,je)};J(Mr,hn=>{(t(wn).automation.length>0||t(pt)===Le)&&hn(Io)})}var jo=v(Mr,2);{var Bo=hn=>{var je=ud(),fn=x(je);Ue(fn,17,()=>t(wn).step_automation,We,(Hn,st,xn)=>{$s(Hn,{get auto(){return t(st)},onchange:vt=>Me(Le,xn,vt),ondelete:()=>Re(Le,xn)})});var Tn=v(fn,2);{var St=Hn=>{var st=cd(),xn=v(x(st),2),vt=v(xn,2),Cs=v(vt,2);B("keydown",xn,Mt=>{Mt.key==="Enter"&&un(Le),Mt.key==="Escape"&&zn()}),Zn(xn,()=>t(ge),Mt=>h(ge,Mt)),B("click",vt,()=>un(Le)),B("click",Cs,zn),A(Hn,st)};J(Tn,Hn=>{t(oe)===Le&&Hn(St)})}A(hn,je)};J(jo,hn=>{(t(wn).step_automation.length>0||t(oe)===Le)&&hn(Bo)})}te(hn=>{qr=ve(Lt,1,"track-wrapper svelte-1c399gj",null,qr,{"drag-over-track":t(I)===Le&&t(O)!==Le,"dragging-track":t(O)===Le}),Cr=$e(Lt,"",Cr,hn)},[()=>({opacity:t(at)!=null&&!jn.isPatternLabelAudible(t(at))?.35:1})]),Z("dragstart",Lt,hn=>F(hn,Le)),Z("dragover",Lt,hn=>W(hn,Le)),Z("dragleave",Lt,M),Z("drop",Lt,hn=>j(hn,Le)),Z("dragend",Lt,E),A(Bn,Rr)});var tt=v(In,2);B("click",tt,de),Z("mouseenter",tt,()=>le.set("add-track")),A(bn,Yn)};J(sn,bn=>{t(l)?bn(ht):bn(Ct,!1)})}te(()=>{Ke=ve(Ie,1,"group-gear-btn svelte-1c399gj",null,Ke,{glow:t(Xn),active:t(l)}),yn=ve(gn,1,"seq-bar-slot svelte-1c399gj",null,yn,{disabled:t(l)})}),B("click",Ie,()=>{h(l,!t(l))}),Z("mouseenter",Ie,()=>le.set("group-settings-gear")),B("click",Kn,()=>se(t(o))),Z("mouseenter",gn,()=>le.set("pattern-measure-bar")),A(ae,ce)};J(U,ae=>{t(m)&&ae(Q)})}Z("mouseenter",P,()=>le.set("pattern-group-bar")),A(p,b)},rn=p=>{var b=hd();A(p,b)},Cn=p=>{var b=vd();A(p,b)};J(Ce,p=>{t(d)?p(fe):t(f)&&!t(r)?p(rn,1):t(f)||p(Cn,2)})}var Ne=v(Ce,2),Gn=x(Ne);ao(Gn,()=>ed),Z("mouseenter",tn,()=>le.set("pattern-header")),A(n,Nn),ye()}Ye(["keydown","click"]);var bd=T('<pre class="error svelte-etlaox"> </pre>'),kd=T('<input class="rename-input svelte-etlaox"/> <button class="ctrl-btn ok svelte-etlaox">ok</button> <button class="ctrl-btn cancel svelte-etlaox">esc</button>',1),yd=T('<span class="song-name svelte-etlaox"> </span> <button class="ctrl-btn svelte-etlaox" title="Rename song">&#9998;</button> <button class="ctrl-btn svelte-etlaox" title="Duplicate song">&#10697;</button>',1),wd=T('<div class="song-controls svelte-etlaox"><!></div>'),xd=T('<div class="parts-bar svelte-etlaox"><!> <button class="ctrl-btn repeat-btn svelte-etlaox" title="Repeat selected part">&#8634;</button></div>'),Sd=T('<p class="placeholder svelte-etlaox">Loading...</p>'),Pd=T('<p class="placeholder svelte-etlaox">Select a song to arrange.</p>'),Ad=T('<div class="song-mode svelte-etlaox"><div class="left-column svelte-etlaox"><div class="song-sidebar svelte-etlaox"><!></div> <div class="pattern-sidebar svelte-etlaox"><!></div></div> <div class="zone-1 svelte-etlaox"><!> <!> <!></div> <div class="zone-2 svelte-etlaox"><!></div> <div class="zone-3 svelte-etlaox"><!></div></div>');function Td(n,e){ke(e,!0);let a=H(_n([])),r=C(()=>t(a).includes(Y.selectedSection)?Y.selectedSection:""),s=C(()=>Y.songAst),i=C(()=>t(s)?t(s).patterns.map(p=>p.label):[]),o=C(()=>t(s)?t(s).patterns.filter(p=>p.label!=="gap").map(p=>p.label):[]),c=H(null),l=H(!1),f=H(""),u=C(()=>Y.selectedPartIndex),d=C(()=>t(s)&&t(u)<t(s).score.sequence.length?t(s).score.sequence[t(u)].part_name:null),m=C(()=>t(s)&&t(d)?t(s).parts.find(p=>p.label===t(d))??null:null),y=C(()=>t(s)?t(s).score.sequence.map(p=>({label:p.part_name})):[]),k=C(()=>{if(!t(m))return new Set;const p=new Set;for(const b of t(m).tracks)for(const P of b.clips)P.name!=="gap"&&p.add(P.name);return p});He(()=>{if(t(m)){for(const p of t(m).tracks)for(const b of p.clips)if(b.name!=="gap"){Y.selectedPatternLabel=b.name;return}}});let w=C(()=>{if(!t(m))return;const p=new Set;for(const b of t(o))t(k).has(b)||p.add(b);return p.size>0?p:void 0}),_=C(()=>xe.playing?xe.position?.part_idx??-1:-1),D=C(()=>{if(!xe.playing||!xe.position||!xe.sourceMap||!t(s))return null;const p=xe.position,P=xe.sourceMap.parts[p.part_idx];if(!P)return null;const V=new Map;for(let U=0;U<p.tracks.length;U++){const Q=p.tracks[U];if(Q.done)continue;const ae=P.track_indices[U];if(ae==null)continue;const ce=Q.clip_duration_secs>0?Math.min(Q.elapsed_secs/Q.clip_duration_secs,1):0;V.set(ae,{clipIdx:Q.clip_idx,progress:ce})}return V.size>0?V:null}),L=C(()=>{if(t(_)<0||!xe.position||!xe.sourceMap)return 0;const p=xe.position,b=xe.sourceMap.timeline,P=b.part_start_secs[p.part_idx],V=b.part_duration_secs[p.part_idx];return V<=0?0:Math.max(0,Math.min((p.song_elapsed_secs-P)/V,1))});function z(p){let b=0;for(const P of p.groups){const V=Math.max(...P.tracks.map(U=>U.measures.length),0);for(let U=0;U<V;U++){const Q=P.tracks.find(ae=>U<ae.measures.length);Q&&(b+=Q.measures[U].items.filter(ae=>"Beat"in ae).length)}}return b}function q(p,b){let P=0,V=0;for(const U of p.groups){const Q=Math.max(...U.tracks.map(ae=>ae.measures.length),0);for(let ae=0;ae<Q;ae++){if(V>=b)return P;const ce=U.tracks.find(be=>ae<be.measures.length);ce&&(P+=ce.measures[ae].items.filter(be=>"Beat"in be).length),V++}}return P}let S=C(()=>{const p=xe.position,b=xe.sourceMap;if(!p||!b||!t(s)||!t(m)||p.part_idx!==t(u))return null;const V=b.timeline.part_start_secs[p.part_idx],U=p.song_elapsed_secs-V,Q=b.parts[p.part_idx];if(!Q)return{beat:0,secs:U};for(let ae=0;ae<p.tracks.length;ae++){const ce=p.tracks[ae];if(ce.done)continue;const be=Q.track_indices[ae];if(be==null)continue;const Ie=t(m).tracks[be]?.clips;if(!Ie)continue;let Ke=0;for(let gn=0;gn<ce.clip_idx&&gn<Ie.length;gn++){const yn=Ie[gn];if(yn.name==="gap")continue;const Wn=t(s).patterns.find(sn=>sn.label===yn.name);Wn&&(Ke+=z(Wn)*yn.times)}const Kn=Ie[ce.clip_idx];if(Kn&&Kn.name!=="gap"){const gn=t(s).patterns.find(yn=>yn.label===Kn.name);if(gn){const yn=z(gn),Wn=ce.clip_duration_secs/Math.max(Kn.times,1),sn=Wn>0?Math.floor(ce.elapsed_secs/Wn):0;Ke+=yn*sn,Ke+=q(gn,ce.measure_idx)+ce.beat_time}}return{beat:Ke,secs:U}}return{beat:0,secs:U}}),g=C(()=>{const p=Ze.effectiveRegion,b=xe.sourceMap?.timeline;return!b||!t(s)||p.end_secs<=0?null:t(s).score.sequence.map((P,V)=>{const U=[],Q=Ze.notchInPart(p.start_secs,b,V);Q!=null&&U.push({position:Q,type:"start"});const ae=Ze.notchInPart(p.end_secs,b,V);return ae!=null&&U.push({position:ae,type:"end"}),U.length>0?U:null})}),R=C(()=>{const p=Ze.effectiveRegion,b=xe.sourceMap?.timeline;if(!b||!t(m)||Ze.isFullSong||p.end_secs<=0)return null;const P=new Map;for(let V=0;V<t(m).tracks.length;V++){const U=t(m).tracks[V].clips,Q=[];for(let ae=0;ae<U.length;ae++){const ce=[],be=Ze.notchInClip(p.start_secs,b,t(u),V,ae);be!=null&&ce.push({position:be,type:"start"});const Ie=Ze.notchInClip(p.end_secs,b,t(u),V,ae);Ie!=null&&ce.push({position:Ie,type:"end"}),Q.push(ce.length>0?ce:null)}P.set(V,Q)}return P.size>0?P:null});function O(p){const b=xe.sourceMap?.timeline;if(!b)return;const P=Ze.partTimeRange(b,p);P&&Ze.setRegion(P)}function I(p,b,P){const V=xe.sourceMap?.timeline;if(!V)return;const U=V.part_start_secs[P],Q=V.part_duration_secs[P];if(U==null||Q==null)return;const ae=U+b*Q,ce=Ze.effectiveRegion;p==="start"?Ze.setRegion({start_secs:Math.min(ae,ce.end_secs-.1),end_secs:ce.end_secs}):Ze.setRegion({start_secs:ce.start_secs,end_secs:Math.max(ae,ce.start_secs+.1)})}function F(p,b,P,V){const U=xe.sourceMap?.timeline;if(!U)return;const Q=U.part_start_secs[t(u)],ae=U.clip_timings?.[t(u)]?.[P]?.[V];if(Q==null||!ae)return;const ce=Q+ae.offset_secs+b*ae.duration_secs,be=Ze.effectiveRegion;p==="start"?Ze.setRegion({start_secs:Math.min(ce,be.end_secs-.1),end_secs:be.end_secs}):Ze.setRegion({start_secs:be.start_secs,end_secs:Math.max(ce,be.start_secs+.1)})}He(()=>{W(Y.text)}),He(()=>{Y.revision,M(t(r))}),He(()=>{t(s)&&Y.selectedPartIndex>=t(s).score.sequence.length&&(Y.selectedPartIndex=Math.max(0,t(s).score.sequence.length-1))});async function W(p){try{const b=await Uc(p);h(a,[...new Set(b)],!0)}catch{h(a,[],!0)}}async function M(p){if(h(c,null),!p||!t(a).includes(p)){Y.songAst=null;return}try{if(Y.songAst=await Qc(Y.text,p),Y.songAst&&Y.songAst.patterns.length>0&&(Y.songAst.patterns.map(P=>P.label).includes(Y.selectedPatternLabel)||(Y.selectedPatternLabel=Y.songAst.patterns[0].label)),!xe.playing)try{const b=await Xc(Y.text,p);xe.playing||(xe.sourceMap=b)}catch{}}catch(b){h(c,b instanceof Error?b.message:String(b),!0),Y.songAst=null}}function j(p){p&&(Y.selectedSection=p,Y.selectedPartIndex=0,jn.clear(),Ze.clearRegion())}async function E(){const p=new Set(t(a));let b=1;for(;p.has(`song_${b}`);)b++;const P=`song_${b}`,V={leading_trivia:[],patterns:[{trivia:[],label:"main",groups:[{trivia:{leading:[],trailing_comment:null},group_settings:[],tone_settings:[],tracks:[]}]}],parts:[{trivia:[],label:"part_1",settings:[{Bpm:120}],automation:[],step_automation:[],tracks:[{trivia:[],clips:[{name:"main",times:1,mix:1,automation:[],step_automation:[]}]}]}],score:{trivia:[],sequence:[{trivia:[],part_name:"part_1"}]},trailing_trivia:[]};try{const U=await Ks(V);Y.addSection(P,U),Y.selectedSection=P}catch(U){h(c,U instanceof Error?U.message:String(U),!0)}}function G(){t(r)&&(h(f,t(r),!0),h(l,!0))}function re(){if(!t(r)||!t(f).trim()){h(l,!1);return}const p=t(f).trim();if(p===t(r)){h(l,!1);return}Y.renameSection(t(r),p),Y.selectedSection=p,h(l,!1)}function ne(){h(l,!1)}function $(){if(!t(r))return;const p=Y.getSectionContent(t(r));if(p===null)return;const b=new Set(t(a));let P=`${t(r)}_copy`,V=2;for(;b.has(P);)P=`${t(r)}_copy_${V}`,V++;Y.addSection(P,p),Y.selectedSection=P}async function N(){if(!(!t(r)||!t(s))){h(c,null);try{const p=await Ks(t(s));Y.replaceSectionContent(t(r),p)}catch(p){h(c,p instanceof Error?p.message:String(p),!0)}}}function ee(p){if(!t(s)||p>=t(s).score.sequence.length)return null;const b=t(s).score.sequence[p].part_name;return t(s).parts.find(P=>P.label===b)??null}function de(p,b){if(!t(s))return;const P=t(s).score.sequence,[V]=P.splice(p,1);P.splice(b,0,V),t(u)===p?Y.selectedPartIndex=b:p<t(u)&&b>=t(u)?Y.selectedPartIndex--:p>t(u)&&b<=t(u)&&Y.selectedPartIndex++,N()}function De(){if(!t(s))return;const p=new Set(t(s).parts.map(V=>V.label));let b=1;for(;p.has(`part_${b}`);)b++;const P=`part_${b}`;t(s).parts.push({trivia:[],label:P,settings:[],automation:[],step_automation:[],tracks:[{trivia:[],clips:[{name:"new",times:1,mix:1,automation:[],step_automation:[]}]}]}),t(s).score.sequence.push({trivia:[],part_name:P}),Y.selectedPartIndex=t(s).score.sequence.length-1,N()}function se(){if(!t(s)||!t(m))return;const p=En(t(m)),b=new Set(t(s).parts.map(U=>U.label));let P=`${p.label}_copy`,V=2;for(;b.has(P);)P=`${p.label}_copy_${V}`,V++;p.trivia=[],p.label=P,t(s).parts.push(p),t(s).score.sequence.splice(t(u)+1,0,{trivia:[],part_name:P}),Y.selectedPartIndex=t(u)+1,N()}function pe(){t(s)&&(t(s).score.sequence.splice(t(u),1),N())}function Ve(p){t(s)&&(t(s).score.sequence.splice(p,1),N())}function qe(){!t(s)||!t(d)||(t(s).score.sequence.splice(t(u)+1,0,{trivia:[],part_name:t(d)}),Y.selectedPartIndex=t(u)+1,N())}async function Ae(p){if(!(!t(s)||!t(d)))try{Y.songAst=await Jc(t(s),t(d),p),await N()}catch(b){h(c,b instanceof Error?b.message:String(b),!0)}}function we(p,b,P){const V=ee(t(u));!t(s)||!V||(V.tracks[p].clips[b]=P,N())}function Fe(p,b){const P=ee(t(u));!t(s)||!P||(P.tracks[p].clips.splice(b,1),P.tracks[p].clips.length===0&&P.tracks.splice(p,1),P.tracks.length===0&&t(s).score.sequence.splice(t(u),1),N())}function Qe(p){const b=ee(t(u));!t(s)||!b||(b.tracks[p].clips.push({name:"new",times:1,mix:1,automation:[],step_automation:[]}),N())}function nn(p){const b=ee(t(u));!t(s)||!b||(b.tracks.splice(p,1),b.tracks.length===0&&t(s).score.sequence.splice(t(u),1),N())}function kn(){const p=ee(t(u));!t(s)||!p||(p.tracks.push({trivia:[],clips:[{name:"new",times:1,mix:1,automation:[],step_automation:[]}]}),N())}function Xn(p,b,P,V){const U=ee(t(u));if(!t(s)||!U)return;const[Q]=U.tracks[p].clips.splice(b,1);let ae=V;p===P&&b<V&&(ae=Math.max(0,V-1)),ae=Math.min(ae,U.tracks[P].clips.length),U.tracks[P].clips.splice(ae,0,Q),N()}function qn(p,b){const P=ee(t(u));if(!t(s)||!P)return;const[V]=P.tracks.splice(p,1);P.tracks.splice(b,0,V),N()}async function on(p){const b=ee(t(u));if(!(!t(s)||!b))try{const P=await Yc(p);b.settings.push(...P),N()}catch(P){h(c,P instanceof Error?P.message:String(P),!0)}}function Pn(p){const b=ee(t(u));!t(s)||!b||(b.settings.splice(p,1),N())}function Kt(p,b){const P=ee(t(u));if(!t(s)||!P)return;const V=P.settings.findIndex(Q=>Ua(Q)===p),U=eu(p,b);V>=0?P.settings[V]=U:P.settings.push(U),N()}function Wt(p){const b=ee(t(u));if(!t(s)||!b)return;const P=b.settings.findIndex(V=>Ua(V)===p);P>=0&&(b.settings.splice(P,1),N())}function Ut(p,b){const P=ee(t(u));!t(s)||!P||(P.automation[p]=b,N())}function aa(p){const b=ee(t(u));!t(s)||!b||(b.automation.splice(p,1),N())}function Qt(p){const b=ee(t(u));!t(s)||!b||(b.automation.push(p),N())}function qt(p,b){const P=ee(t(u));!t(s)||!P||(P.step_automation[p]=b,N())}function sa(p){const b=ee(t(u));!t(s)||!b||(b.step_automation.splice(p,1),N())}function pt(p){const b=ee(t(u));!t(s)||!b||(b.step_automation.push(p),N())}function nt(p){Y.selectedPatternLabel=p}function K(){if(!t(s))return;const p=new Set(t(s).patterns.map(U=>U.label));let b=1;for(;p.has(`pat_${b}`);)b++;const P=`pat_${b}`,V={trivia:[],label:P,groups:[{trivia:{leading:[],trailing_comment:null},group_settings:[],tone_settings:[],tracks:[]}]};t(s).patterns.push(V),Y.selectedPatternLabel=P,N()}let ie=C(()=>t(a).filter(p=>!p.startsWith("groove/")&&!p.startsWith("arp/"))),Pe=C(()=>t(ie).map(p=>({id:p,label:p}))),Ge=C(()=>new Set(t(ie).filter(p=>Y.isLibraryOnly(p)))),X=C(()=>t(o).map(p=>({id:p,label:p})));var oe=Ad(),ge=x(oe),Me=x(ge),Re=x(Me);Ws(Re,{title:"Songs",get items(){return t(Pe)},get activeId(){return t(r)},get libraryIds(){return t(Ge)},onselect:j,oncreate:E,hint:"song-sidebar"});var Ee=v(Me,2),un=x(Ee);{let p=C(()=>t(r)?K:void 0);Ws(un,{title:"Patterns",get items(){return t(X)},get activeId(){return Y.selectedPatternLabel},get greyedOut(){return t(w)},onselect:b=>{Y.selectedPatternLabel=b},get oncreate(){return t(p)},hint:"pattern-sidebar"})}var zn=v(ge,2),Nn=x(zn);{var tn=p=>{var b=bd(),P=x(b);te(()=>Se(P,t(c))),A(p,b)};J(Nn,p=>{t(c)&&p(tn)})}var dn=v(Nn,2);{var he=p=>{var b=wd(),P=x(b);{var V=Q=>{var ae=kd(),ce=Te(ae),be=v(ce,2),Ie=v(be,2);B("keydown",ce,Ke=>{Ke.key==="Enter"&&re(),Ke.key==="Escape"&&ne()}),Zn(ce,()=>t(f),Ke=>h(f,Ke)),B("click",be,re),B("click",Ie,ne),A(Q,ae)},U=Q=>{var ae=yd(),ce=Te(ae),be=x(ce),Ie=v(ce,2),Ke=v(Ie,2);te(()=>Se(be,t(r))),B("click",Ie,G),Z("mouseenter",Ie,()=>le.set("song-rename")),B("click",Ke,$),Z("mouseenter",Ke,()=>le.set("song-duplicate")),A(Q,ae)};J(P,Q=>{t(l)?Q(V):Q(U,!1)})}A(p,b)};J(dn,p=>{t(r)&&p(he)})}var ln=v(dn,2);{var An=p=>{var b=xd(),P=x(b);{let U=C(()=>t(g)??void 0);Qa(P,{get items(){return t(y)},get selectedIndex(){return t(u)},get activeIndex(){return t(_)},get activeProgress(){return t(L)},get focusNotches(){return t(U)},onselect:Q=>{Y.selectedPartIndex=Q},onmove:de,onadd:De,ondelete:Ve,onfocus:O,onfocusdrag:I})}var V=v(P,2);Z("mouseenter",b,()=>le.set("song-parts-bar")),B("click",V,qe),A(p,b)};J(ln,p=>{t(r)&&t(s)&&t(s).score.sequence.length>0&&p(An)})}var an=v(zn,2),Ce=x(an);{var fe=p=>{{let b=C(()=>t(m).tracks.map(Q=>Q.clips)),P=C(()=>t(_)===t(u)?t(D):null),V=C(()=>t(S)?.beat??null),U=C(()=>t(S)?.secs??null);D0(p,{get partName(){return t(d)},get partSeqIdx(){return t(u)},get tracks(){return t(b)},get settings(){return t(m).settings},get automation(){return t(m).automation},get patterns(){return t(i)},get activeTrackClips(){return t(P)},get focusClipNotches(){return t(R)},get playbackBeat(){return t(V)},get playbackSecs(){return t(U)},onchangeclip:we,ondeleteclip:Fe,onaddclip:Qe,ondeletetrack:nn,onaddtrack:kn,onduplicatepart:se,ondeletepart:pe,onrenamepart:Ae,onaddsetting:on,ondeletesetting:Pn,onsetsettingstructured:Kt,ondeletesettingbykey:Wt,oneditpattern:nt,onmoveclip:Xn,onmovetrack:qn,onfocusclipdrag:F,onchangeautomation:Ut,ondeleteautomation:aa,onaddautomation:Qt,get stepAutomation(){return t(m).step_automation},onchangestepautomation:qt,ondeletestepautomation:sa,onaddstepautomation:pt})}},rn=p=>{var b=Sd();A(p,b)},Cn=p=>{var b=Pd();A(p,b)};J(Ce,p=>{t(r)&&t(s)&&t(m)?p(fe):t(r)&&!t(c)?p(rn,1):t(r)||p(Cn,2)})}var Ne=v(an,2),Gn=x(Ne);{let p=C(()=>t(m)?.settings??[]);gd(Gn,{get partSettings(){return t(p)}})}Z("mouseenter",Me,()=>le.set("song-sidebar")),Z("mouseenter",Ee,()=>le.set("pattern-sidebar")),A(n,oe),ye()}Ye(["keydown","click"]);const Dd={mod:"#b07cc8",osc:"#5c9ed6",path:"#4db89a",fx:"#d68c4b",vcf:"#5cb86e",amp:"#c8b44e",post:"#7a8ba8"},Rd={mod:"#8a50a8",osc:"#3070b0",path:"#2a8a6a",fx:"#b06830",vcf:"#3a8a48",amp:"#9a8828",post:"#5a6880"};function Gt(n){return n==="light"?Rd:Dd}const qd={mod:"MOD",osc:"OSC",path:"PATH",fx:"FX",vcf:"VCF",amp:"AMP",post:"POST"},nr=["mod","osc","path","fx","vcf","amp","post"];var Cd=T('<span class="arrow svelte-4okew9"></span>'),Ld=T("<!> <button> </button>",1),Md=T('<div class="signal-flow svelte-4okew9"></div>');function Ed(n,e){ke(e,!0);let a=C(()=>Gt(Dn.resolved));function r(i){if(!e.activity)return!0;switch(i){case"mod":return e.activity.lfo||e.activity.pitch_env||e.activity.filter_env;case"osc":return e.activity.oscs.some(Boolean);case"path":return e.activity.paths.some(Boolean);case"fx":return e.activity.shape_filter||e.activity.waveshaper||e.activity.voice_fx;case"vcf":return e.activity.main_filter;case"amp":return!0;case"post":return e.activity.post_filter||e.activity.pan||e.activity.unison}}var s=Md();Ue(s,21,()=>nr,We,(i,o,c)=>{var l=Ld(),f=Te(l);{var u=w=>{var _=Cd();_.textContent="→",A(w,_)};J(f,w=>{c>0&&w(u)})}var d=v(f,2);let m,y;var k=x(d);te(w=>{m=ve(d,1,"block svelte-4okew9",null,m,w),y=$e(d,"",y,{"--block-color":t(a)[t(o)]}),Se(k,qd[t(o)])},[()=>({selected:e.selected===t(o),inactive:!r(t(o))})]),B("click",d,()=>e.onselect(t(o))),A(i,l)}),Z("mouseenter",s,()=>le.set("signal-flow-diagram")),A(n,s),ye()}Ye(["click"]);var Fd=T('<div class="region svelte-get67y"><div class="region-header svelte-get67y"> </div> <div class="region-body svelte-get67y"><!></div></div>');function Sn(n,e){let a=_e(e,"color",3,"#cc9944");var r=Fd();let s;var i=x(r),o=x(i),c=v(i,2),l=x(c);hr(l,()=>e.children),te(()=>{s=$e(r,"",s,{"--region-color":a()}),Se(o,e.label)}),A(n,r)}const Od={sine:"M2 8 Q6 0 8 8 Q10 16 14 8 Q18 0 22 8",triangle:"M2 12 L8 4 L14 12 L20 4 L22 8",saw:"M2 12 L10 4 L10 12 L18 4 L18 12 L22 8",pulse:"M2 12 L2 4 L8 4 L8 12 L14 12 L14 4 L20 4 L20 12 L22 12","white-noise":"M2 8 L4 4 L5 11 L7 5 L8 13 L10 3 L11 10 L13 6 L14 12 L16 4 L17 9 L19 5 L20 11 L22 8","pink-noise":"M2 8 L4 6 L6 10 L8 5 L10 11 L12 7 L14 10 L16 6 L18 9 L20 7 L22 8",ramp:"M2 12 L10 4 L10 12 L18 4 L18 12 L22 8","s-h":"M2 10 L5 10 L5 5 L9 5 L9 11 L13 11 L13 6 L17 6 L17 10 L22 10",lowpass:"M2 4 L10 4 Q14 4 16 8 Q18 12 22 14",highpass:"M2 14 Q6 12 8 8 Q10 4 14 4 L22 4",bandpass:"M2 14 Q5 14 8 8 Q10 4 12 4 Q14 4 16 8 Q19 14 22 14",ad:"M2 14 L8 3 L20 14",adsr:"M2 14 L6 3 L10 8 L16 8 L22 14",multitap:"M2 14 L4 4 L6 14 L8 6 L10 14 L12 8 L14 14 L18 14"};var zd=sc('<svg viewBox="0 0 24 16" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path></path></svg>');function Nd(n,e){ke(e,!0);let a=_e(e,"size",3,16),r=_e(e,"color",3,"currentColor"),s=C(()=>Od[e.name]??"");var i=zd(),o=x(i);te(()=>{en(i,"width",a()*1.5),en(i,"height",a()),en(i,"stroke",r()),en(o,"d",t(s))}),A(n,i),ye()}var Id=T('<span class="opt-label svelte-1ed09gu"> </span>'),jd=T("<button><!></button>"),Bd=T('<div><div class="arc-area svelte-1ed09gu"><svg class="pointer-svg svelte-1ed09gu" viewBox="0 0 100 88"><line x1="50" y1="44" stroke-width="2" stroke-linecap="round"></line><circle cx="50" cy="44" r="3"></circle></svg> <!> <span class="selected-label svelte-1ed09gu"> </span></div></div>');function Ma(n,e){ke(e,!0);let a=_e(e,"disabled",3,!1),r=C(()=>e.options.findIndex(L=>L.value===e.value)),s=C(()=>t(r)>=0?e.options[t(r)].label??e.options[t(r)].value:"");function i(L){const z=e.options.length;return z<=1?0:-90+180*L/(z-1)}function o(L){const q=i(L)*Math.PI/180,S=50+38*Math.sin(q),g=44-38*Math.cos(q);return`left: ${S}%; top: ${g}%; transform: translate(-50%, -50%)`}function c(){const z=(t(r)>=0?i(t(r)):0)*Math.PI/180;return{x:50+22*Math.sin(z),y:44-22*Math.cos(z)}}var l=Bd();let f,u;var d=x(l),m=x(d),y=x(m),k=v(y),w=v(m,2);Ue(w,17,()=>e.options,We,(L,z,q)=>{var S=jd();let g;var R=x(S);{var O=F=>{{let W=C(()=>q===t(r)?e.color??"var(--block-color, var(--accent))":"var(--text-muted)");Nd(F,{get name(){return t(z).glyph},size:18,get color(){return t(W)}})}},I=F=>{var W=Id(),M=x(W);te(()=>Se(M,t(z).label??t(z).value)),A(F,W)};J(R,F=>{t(z).glyph?F(O):F(I,!1)})}te(F=>{g=ve(S,1,"option svelte-1ed09gu",null,g,{selected:q===t(r)}),$e(S,F),en(S,"data-tooltip",t(z).label??t(z).value)},[()=>o(q)]),B("click",S,()=>e.onchange(t(z).value)),Z("mouseenter",S,()=>{e.hints?.[t(z).value]&&le.set(e.hints[t(z).value])}),A(L,S)});var _=v(w,2),D=x(_);te((L,z)=>{f=ve(l,1,"knob svelte-1ed09gu",null,f,{disabled:a()}),u=$e(l,"",u,{"--knob-color":e.color}),en(y,"x2",L),en(y,"y2",z),en(y,"stroke",e.color??"var(--block-color, var(--accent))"),en(k,"fill",e.color??"var(--block-color, var(--accent))"),Se(D,t(s))},[()=>c().x,()=>c().y]),Z("mouseenter",l,()=>{a()&&e.hints?.[e.value]&&le.set(e.hints[e.value])}),A(n,l),ye()}Ye(["click"]);var Hd=T('<input class="edit-input svelte-1yf8t8l" type="text"/>'),Vd=T('<button class="value-display svelte-1yf8t8l"> </button>'),Gd=T('<div><span class="label svelte-1yf8t8l"> </span> <div class="track svelte-1yf8t8l" role="slider"><div class="fill svelte-1yf8t8l"></div> <div class="thumb svelte-1yf8t8l"></div></div> <!></div>');function me(n,e){ke(e,!0);let a=_e(e,"min",3,0),r=_e(e,"max",3,1),s=_e(e,"step",3,.01),i=_e(e,"unit",3,""),o=_e(e,"disabled",3,!1);function c(N){N.focus()}let l=H(!1),f=H(""),u=H(!1),d=H(void 0),m=C(()=>(e.value-a())/(r()-a())*100);function y(N){return s()>=1?String(Math.round(N)):s()>=.1?N.toFixed(1):N.toFixed(2)}function k(N){const ee=Math.min(r(),Math.max(a(),N));return Math.round(ee/s())*s()}function w(N){if(!t(d))return;const ee=t(d).getBoundingClientRect(),de=1-(N-ee.top)/ee.height,De=Math.min(1,Math.max(0,de));e.onchange(k(a()+De*(r()-a())))}function _(N){h(u,!0),N.currentTarget.setPointerCapture(N.pointerId),w(N.clientY)}function D(N){t(u)&&w(N.clientY)}function L(){h(u,!1)}function z(){h(f,y(e.value),!0),h(l,!0)}function q(){const N=parseFloat(t(f));isNaN(N)||e.onchange(k(N)),h(l,!1)}function S(){h(l,!1)}var g=Gd();let R,O;var I=x(g),F=x(I),W=v(I,2);en(W,"tabindex",0);var M=x(W);let j;var E=v(M,2);let G;jt(W,N=>h(d,N),()=>t(d));var re=v(W,2);{var ne=N=>{var ee=Hd();Xa(()=>Zn(ee,()=>t(f),de=>h(f,de))),so(ee,de=>c?.(de)),Z("blur",ee,q),B("keydown",ee,de=>{de.key==="Enter"&&q(),de.key==="Escape"&&S()}),A(N,ee)},$=N=>{var ee=Vd(),de=x(ee);te(De=>Se(de,`${De??""}${i()??""}`),[()=>y(e.value)]),B("dblclick",ee,z),A(N,ee)};J(re,N=>{t(l)?N(ne):N($,!1)})}te(()=>{R=ve(g,1,"vert svelte-1yf8t8l",null,R,{disabled:o()}),O=$e(g,"",O,{"--vert-color":e.color}),Se(F,e.label),en(W,"aria-valuenow",e.value),en(W,"aria-valuemin",a()),en(W,"aria-valuemax",r()),en(W,"aria-label",e.label),j=$e(M,"",j,{height:`${t(m)??""}%`}),G=$e(E,"",G,{bottom:`${t(m)??""}%`})}),Z("mouseenter",g,()=>{e.hint&&le.set(e.hint)}),B("pointerdown",W,_),B("pointermove",W,D),B("pointerup",W,L),A(n,g),ye()}Ye(["pointerdown","pointermove","pointerup","keydown","dblclick"]);var Kd=T('<div class="vert-group svelte-j7rpns"><!></div>');function pn(n,e){var a=Kd(),r=x(a);hr(r,()=>e.children),A(n,a)}var Wd=T("<button> </button>"),Ud=T('<div><div class="track svelte-zq2sms"><div class="indicator svelte-zq2sms"></div></div> <div class="labels svelte-zq2sms"></div></div>');function Ea(n,e){ke(e,!0);let a=_e(e,"disabled",3,!1),r=C(()=>e.options.indexOf(e.value)),s=C(()=>e.options.length>1?t(r)/(e.options.length-1)*100:0);var i=Ud();let o;var c=x(i),l=x(c);let f;var u=v(c,2);Ue(u,21,()=>e.options,We,(d,m,y)=>{var k=Wd();let w;var _=x(k);te(()=>{w=ve(k,1,"stop svelte-zq2sms",null,w,{active:y===t(r)}),Se(_,t(m))}),B("click",k,()=>e.onchange(t(m))),Z("mouseenter",k,()=>{e.hints?.[t(m)]&&le.set(e.hints[t(m)])}),A(d,k)}),te(()=>{o=ve(i,1,"synth-switch svelte-zq2sms",null,o,{disabled:a()}),f=$e(l,"",f,{left:`${t(s)??""}%`})}),Z("mouseenter",i,()=>{e.hint&&le.set(e.hint)}),A(n,i),ye()}Ye(["click"]);var Qd=T('<span class="signal-ref svelte-126zrlx"> </span>');function cn(n,e){ke(e,!0);let a=C(()=>Gt(Dn.resolved)),r=C(()=>t(a)[e.blockId]);var s=Qd();let i;var o=x(s);te(()=>{i=$e(s,"",i,{background:`color-mix(in srgb, ${t(r)??""} 12.5%, transparent)`,color:t(r),"border-color":`color-mix(in srgb, ${t(r)??""} 25%, transparent)`}),Se(o,e.label)}),Z("mouseenter",s,()=>{e.hint&&le.set(e.hint)}),A(n,s),ye()}function Xt(n){return n?"AD"in n?"AD":"ADSR"in n?"ADSR":"MultiTap"in n?"MultiTap":null:null}function xa(n){return n?"Lowpass"in n?"Lowpass":"Highpass"in n?"Highpass":"Bandpass"in n?"Bandpass":null:null}function Sa(n){return"Lowpass"in n?n.Lowpass[0]:"Highpass"in n?n.Highpass[0]:n.Bandpass[0]}function Pa(n){return"Lowpass"in n?n.Lowpass[1]:"Highpass"in n?n.Highpass[1]:n.Bandpass[1]}function lt(n,e,a){return{[n]:[e,a]}}function So(n){return n==="Fixed"?"Fixed":"Pitched"in n?"Pitched":"Swept"}function it(n){switch(n){case"AD":return{AD:{attack_ms:1,decay_ms:200,start:0,amt:1,exp:!1}};case"ADSR":return{ADSR:{attack_ms:5,decay_ms:200,sustain:.8,release_ms:50}};case"MultiTap":return{MultiTap:{num_taps:3,tap_interval:50,tap_amp:.8,tail_decay:200}}}}function ps(){return{shape:"Sine",freq:{Pitched:{semi:0,fine:0}},fixed_hz:440,pw:.5,pitch_lfo_amt:0,pitch_lfo2_amt:0,pitch_env_amt:0,pw_lfo_amt:0,pw_lfo2_amt:0,phaz_diff:0,phaz_diff_lfo_amt:0,phaz_diff_lfo2_amt:0}}function hs(){return{mix:[1,0,0,0,0,0],pre_filter:null,env:null,post_filter:null}}var Zd=T("<!> <!> <!> <!>",1),Jd=T("<!> <!> <!> <!>",1),Xd=T("<!> <!> <!> <!>",1),Yd=T('<div class="env-panel svelte-ps0so5"><div class="env-toggles svelte-ps0so5"><!> <!></div> <!> <div><!></div></div>');function vs(n,e){ke(e,!0);let a=_e(e,"label",3,"Env"),r=_e(e,"value",3,null);const s=[{value:"AD",glyph:"ad",label:"AD"},{value:"ADSR",glyph:"adsr",label:"ADSR"},{value:"MultiTap",glyph:"multitap",label:"Multi"}];let i=H(null),o=H("AD");He(()=>{const R=Xt(r());R&&h(o,R,!0)});let c=C(()=>r()??it(t(o))),l=C(()=>Xt(t(c)));function f(R){h(o,R,!0),e.onchange(it(R))}function u(R){const O=r()??it(t(o)),I=Xt(O),F=O[I];e.onchange({[I]:{...F,...R}})}var d=Yd(),m=x(d),y=x(m);{let R=C(()=>r()!==null);dt(y,{get label(){return a()},get active(){return t(R)},onchange:O=>{O?e.onchange(t(i)??it(t(o))):(h(i,En(r()),!0),e.onchange(null))},get color(){return e.color},hint:"toggle-env"})}var k=v(y,2);{var w=R=>{{let O=C(()=>r()===null);dt(R,{label:"exp",get active(){return t(c).AD.exp},onchange:I=>u({exp:I}),get color(){return e.color},hint:"toggle-env-exp",get disabled(){return t(O)}})}};J(k,R=>{"AD"in t(c)&&R(w)})}var _=v(m,2);{let R=C(()=>r()===null);Ma(_,{get options(){return s},get value(){return t(l)},onchange:f,get color(){return e.color},hints:{AD:"env-type-ad",ADSR:"env-type-adsr",MultiTap:"env-type-multi"},get disabled(){return t(R)}})}var D=v(_,2);let L;var z=x(D);{var q=R=>{pn(R,{children:(O,I)=>{var F=Zd(),W=Te(F);me(W,{label:"atk",get value(){return t(c).AD.attack_ms},min:0,max:500,step:.1,onchange:G=>u({attack_ms:G}),get color(){return e.color},hint:"env-ad-atk"});var M=v(W,2);me(M,{label:"dec",get value(){return t(c).AD.decay_ms},min:0,max:5e3,step:1,onchange:G=>u({decay_ms:G}),get color(){return e.color},hint:"env-ad-dec"});var j=v(M,2);me(j,{label:"start",get value(){return t(c).AD.start},min:-1,max:1,step:.01,onchange:G=>u({start:G}),get color(){return e.color},hint:"env-ad-start"});var E=v(j,2);me(E,{label:"amt",get value(){return t(c).AD.amt},min:-1,max:1,step:.01,onchange:G=>u({amt:G}),get color(){return e.color},hint:"env-ad-amt"}),A(O,F)}})},S=R=>{pn(R,{children:(O,I)=>{var F=Jd(),W=Te(F);me(W,{label:"atk",get value(){return t(c).ADSR.attack_ms},min:0,max:2e3,step:.1,onchange:G=>u({attack_ms:G}),get color(){return e.color},hint:"env-adsr-atk"});var M=v(W,2);me(M,{label:"dec",get value(){return t(c).ADSR.decay_ms},min:0,max:5e3,step:1,onchange:G=>u({decay_ms:G}),get color(){return e.color},hint:"env-adsr-dec"});var j=v(M,2);me(j,{label:"sus",get value(){return t(c).ADSR.sustain},min:0,max:1,step:.01,onchange:G=>u({sustain:G}),get color(){return e.color},hint:"env-adsr-sus"});var E=v(j,2);me(E,{label:"rel",get value(){return t(c).ADSR.release_ms},min:0,max:5e3,step:1,onchange:G=>u({release_ms:G}),get color(){return e.color},hint:"env-adsr-rel"}),A(O,F)}})},g=R=>{pn(R,{children:(O,I)=>{var F=Xd(),W=Te(F);me(W,{label:"taps",get value(){return t(c).MultiTap.num_taps},min:1,max:16,step:1,onchange:G=>u({num_taps:G}),get color(){return e.color},hint:"env-mt-taps"});var M=v(W,2);me(M,{label:"intvl",get value(){return t(c).MultiTap.tap_interval},min:1,max:500,step:1,onchange:G=>u({tap_interval:G}),get color(){return e.color},hint:"env-mt-intvl"});var j=v(M,2);me(j,{label:"amp",get value(){return t(c).MultiTap.tap_amp},min:0,max:1,step:.01,onchange:G=>u({tap_amp:G}),get color(){return e.color},hint:"env-mt-amp"});var E=v(j,2);me(E,{label:"tail",get value(){return t(c).MultiTap.tail_decay},min:0,max:5e3,step:1,onchange:G=>u({tail_decay:G}),get color(){return e.color},hint:"env-mt-tail"}),A(O,F)}})};J(z,R=>{"AD"in t(c)?R(q):"ADSR"in t(c)?R(S,1):"MultiTap"in t(c)&&R(g,2)})}te(()=>L=ve(D,1,"env-controls svelte-ps0so5",null,L,{inactive:r()===null})),A(n,d),ye()}var $d=T('<div class="lfo-row svelte-8x2ovf"><div class="lfo-left svelte-8x2ovf"><!> <!></div> <!></div>'),ef=T('<!> <div class="vert-with-ref"><!> <!></div> <div class="vert-with-ref"><!> <!></div>',1),nf=T('<div class="lfo-row svelte-8x2ovf"><div class="lfo-left svelte-8x2ovf"><!> <!></div> <!></div>'),tf=T('<div class="block-col svelte-8x2ovf"><div class="block-row svelte-8x2ovf"><!> <!> <!></div> <div class="block-row svelte-8x2ovf"><!> <!></div></div>');function af(n,e){ke(e,!0);const a=[{value:"Ramp",glyph:"ramp",label:"Ramp"},{value:"Pulse",glyph:"pulse",label:"Pls"},{value:"Sine",glyph:"sine",label:"Sin"},{value:"Triangle",glyph:"triangle",label:"Tri"},{value:"S&H",glyph:"s-h",label:"S&H"}],r=["Free","Trig","Rand"];let s=C(()=>Gt(Dn.resolved).mod);var i=tf(),o=x(i),c=x(o);Sn(c,{label:"Osc Start",get color(){return t(s)},children:(y,k)=>{dt(y,{get active(){return e.config.osc_start},onchange:w=>e.updateConfig({osc_start:w}),get color(){return t(s)},hint:"toggle-osc-start"})},$$slots:{default:!0}});var l=v(c,2);Sn(l,{label:"LFO-1",get color(){return t(s)},children:(y,k)=>{var w=$d(),_=x(w),D=x(_);{let q=C(()=>e.config.lfo.wave??"S&H");Ma(D,{get options(){return a},get value(){return t(q)},onchange:S=>{const g=S==="S&H"?null:S;e.updateConfig({lfo:{...e.config.lfo,wave:g}})},get color(){return t(s)},hints:{Ramp:"lfo-wave-ramp",Pulse:"lfo-wave-pulse",Sine:"lfo-wave-sine",Triangle:"lfo-wave-tri","S&H":"lfo-wave-sh"}})}var L=v(D,2);Ea(L,{get options(){return r},get value(){return e.config.lfo.mode},onchange:q=>e.updateConfig({lfo:{...e.config.lfo,mode:q}}),hints:{Free:"lfo-mode-free",Trig:"lfo-mode-trig",Rand:"lfo-mode-rand"}});var z=v(_,2);pn(z,{children:(q,S)=>{me(q,{label:"rate",get value(){return e.config.lfo.rate},min:0,max:15,step:1,onchange:g=>e.updateConfig({lfo:{...e.config.lfo,rate:g}}),get color(){return t(s)},hint:"lfo-rate"})}}),A(y,w)},$$slots:{default:!0}});var f=v(l,2);Sn(f,{label:"LFO-2",get color(){return t(s)},children:(y,k)=>{var w=nf(),_=x(w),D=x(_);{let q=C(()=>e.config.lfo2.wave??"S&H");Ma(D,{get options(){return a},get value(){return t(q)},onchange:S=>{const g=S==="S&H"?null:S;e.updateConfig({lfo2:{...e.config.lfo2,wave:g}})},get color(){return t(s)},hints:{Ramp:"lfo-wave-ramp",Pulse:"lfo-wave-pulse",Sine:"lfo-wave-sine",Triangle:"lfo-wave-tri","S&H":"lfo-wave-sh"}})}var L=v(D,2);Ea(L,{get options(){return r},get value(){return e.config.lfo2.mode},onchange:q=>e.updateConfig({lfo2:{...e.config.lfo2,mode:q}}),hints:{Free:"lfo-mode-free",Trig:"lfo-mode-trig",Rand:"lfo-mode-rand"}});var z=v(_,2);pn(z,{children:(q,S)=>{var g=ef(),R=Te(g);me(R,{label:"rate",get value(){return e.config.lfo2.rate},min:0,max:15,step:1,onchange:E=>e.updateConfig({lfo2:{...e.config.lfo2,rate:E}}),get color(){return t(s)},hint:"lfo2-rate"});var O=v(R,2),I=x(O);me(I,{label:"rate",get value(){return e.config.lfo1_to_lfo2_rate},min:0,max:1,step:.01,onchange:E=>e.updateConfig({lfo1_to_lfo2_rate:E}),get color(){return t(s)},hint:"lfo1-to-lfo2-rate"});var F=v(I,2);cn(F,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var W=v(O,2),M=x(W);me(M,{label:"depth",get value(){return e.config.lfo1_to_lfo2_depth},min:0,max:1,step:.01,onchange:E=>e.updateConfig({lfo1_to_lfo2_depth:E}),get color(){return t(s)},hint:"lfo1-to-lfo2-depth"});var j=v(M,2);cn(j,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"}),A(q,g)}}),A(y,w)},$$slots:{default:!0}});var u=v(o,2),d=x(u);Sn(d,{label:"ENV-1 (Pitch)",get color(){return t(s)},children:(y,k)=>{vs(y,{label:"p.env",get value(){return e.config.pitch_env},onchange:w=>e.updateConfig({pitch_env:w}),get color(){return t(s)}})},$$slots:{default:!0}});var m=v(d,2);Sn(m,{label:"ENV-2 (Filter)",get color(){return t(s)},children:(y,k)=>{vs(y,{label:"f.env",get value(){return e.config.filter_env},onchange:w=>e.updateConfig({filter_env:w}),get color(){return t(s)}})},$$slots:{default:!0}}),Z("mouseenter",i,()=>le.set("mod-block")),A(n,i),ye()}var sf=T("<!> <!>",1),rf=T("<!> <!> <!> <!>",1),of=T('<!> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div>',1),lf=T('<!> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div>',1),cf=T('<div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div>',1),uf=T('<div class="osc-panel svelte-dp5a6t"><div class="shape-col svelte-dp5a6t"><!> <!></div> <div class="freq-group svelte-dp5a6t"><!></div> <div><!></div> <!> <!></div>');function df(n,e){ke(e,!0);const a=[{value:"Sine",glyph:"sine",label:"Sin"},{value:"Triangle",glyph:"triangle",label:"Tri"},{value:"Saw",glyph:"saw",label:"Saw"},{value:"Pulse",glyph:"pulse",label:"Pls"},{value:"WhiteNoise",glyph:"white-noise",label:"Wht"},{value:"PinkNoise",glyph:"pink-noise",label:"Pnk"}],r=["Pitched","Fixed","Swept"];function s(S){e.onchange({...e.value,...S})}function i(S){s({shape:S})}function o(S){let g;switch(S){case"Pitched":g={Pitched:{semi:0,fine:0}};break;case"Fixed":g="Fixed";break;case"Swept":g={Swept:{atk:.1,dec:200,base:48,amt:50}};break;default:return}e.onchange({...e.value,freq:g})}var c=uf(),l=x(c),f=x(l);Ma(f,{get options(){return a},get value(){return e.value.shape},onchange:i,get color(){return e.color},hints:{Sine:"osc-shape-sine",Triangle:"osc-shape-tri",Saw:"osc-shape-saw",Pulse:"osc-shape-pulse",WhiteNoise:"osc-shape-white",PinkNoise:"osc-shape-pink"}});var u=v(f,2);{let S=C(()=>So(e.value.freq));Ea(u,{get options(){return r},get value(){return t(S)},onchange:o,hints:{Pitched:"osc-freq-pitched",Fixed:"osc-freq-fixed",Swept:"osc-freq-swept"}})}var d=v(l,2),m=x(d);{var y=S=>{pn(S,{children:(g,R)=>{var O=sf(),I=Te(O);me(I,{label:"semi",get value(){return e.value.freq.Pitched.semi},min:-48,max:48,step:1,onchange:W=>s({freq:{Pitched:{semi:W,fine:e.value.freq.Pitched.fine}}}),get color(){return e.color},hint:"osc-semi"});var F=v(I,2);me(F,{label:"fine",get value(){return e.value.freq.Pitched.fine},min:-100,max:100,step:1,onchange:W=>s({freq:{Pitched:{semi:e.value.freq.Pitched.semi,fine:W}}}),get color(){return e.color},hint:"osc-fine"}),A(g,O)}})},k=S=>{pn(S,{children:(g,R)=>{me(g,{label:"hz",get value(){return e.value.fixed_hz},min:20,max:2e4,step:1,onchange:O=>s({fixed_hz:O}),get color(){return e.color},hint:"osc-hz"})}})},w=S=>{const g=C(()=>e.value.freq.Swept);pn(S,{children:(R,O)=>{var I=rf(),F=Te(I);me(F,{label:"atk",get value(){return t(g).atk},min:0,max:100,step:.01,onchange:E=>s({freq:{Swept:{...t(g),atk:E}}}),get color(){return e.color},hint:"osc-swept-atk"});var W=v(F,2);me(W,{label:"dec",get value(){return t(g).dec},min:0,max:5e3,step:1,onchange:E=>s({freq:{Swept:{...t(g),dec:E}}}),get color(){return e.color},hint:"osc-swept-dec"});var M=v(W,2);me(M,{label:"base",get value(){return t(g).base},min:0,max:135,step:.1,onchange:E=>s({freq:{Swept:{...t(g),base:E}}}),get color(){return e.color},hint:"osc-swept-base"});var j=v(M,2);me(j,{label:"amt",get value(){return t(g).amt},min:-135,max:135,step:.1,onchange:E=>s({freq:{Swept:{...t(g),amt:E}}}),get color(){return e.color},hint:"osc-swept-amt"}),A(R,I)}})};J(m,S=>{typeof e.value.freq=="object"&&"Pitched"in e.value.freq?S(y):e.value.freq==="Fixed"?S(k,1):typeof e.value.freq=="object"&&"Swept"in e.value.freq&&S(w,2)})}var _=v(d,2);let D;var L=x(_);pn(L,{children:(S,g)=>{var R=of(),O=Te(R);me(O,{label:"pw",get value(){return e.value.pw},min:0,max:1,step:.01,onchange:G=>s({pw:G}),get color(){return e.color},hint:"osc-pw"});var I=v(O,2),F=x(I);me(F,{label:"pw lfo",get value(){return e.value.pw_lfo_amt},min:0,max:1,step:.01,onchange:G=>s({pw_lfo_amt:G}),get color(){return e.color},hint:"osc-pw-lfo"});var W=v(F,2);cn(W,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var M=v(I,2),j=x(M);me(j,{label:"pw lfo2",get value(){return e.value.pw_lfo2_amt},min:0,max:1,step:.01,onchange:G=>s({pw_lfo2_amt:G}),get color(){return e.color},hint:"osc-pw-lfo2"});var E=v(j,2);cn(E,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),A(S,R)}});var z=v(_,2);pn(z,{children:(S,g)=>{var R=lf(),O=Te(R);me(O,{label:"pdif",get value(){return e.value.phaz_diff},min:0,max:1,step:.01,onchange:G=>s({phaz_diff:G}),get color(){return e.color},hint:"osc-pdif"});var I=v(O,2),F=x(I);me(F,{label:"pd lfo",get value(){return e.value.phaz_diff_lfo_amt},min:0,max:1,step:.01,onchange:G=>s({phaz_diff_lfo_amt:G}),get color(){return e.color},hint:"osc-pd-lfo"});var W=v(F,2);cn(W,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var M=v(I,2),j=x(M);me(j,{label:"pd lf2",get value(){return e.value.phaz_diff_lfo2_amt},min:0,max:1,step:.01,onchange:G=>s({phaz_diff_lfo2_amt:G}),get color(){return e.color},hint:"osc-pd-lfo2"});var E=v(j,2);cn(E,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),A(S,R)}});var q=v(z,2);pn(q,{children:(S,g)=>{var R=cf(),O=Te(R),I=x(O);me(I,{label:"p.lfo",get value(){return e.value.pitch_lfo_amt},min:0,max:48,step:.1,onchange:ne=>s({pitch_lfo_amt:ne}),get color(){return e.color},hint:"osc-pitch-lfo"});var F=v(I,2);cn(F,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var W=v(O,2),M=x(W);me(M,{label:"p.lfo2",get value(){return e.value.pitch_lfo2_amt},min:0,max:48,step:.1,onchange:ne=>s({pitch_lfo2_amt:ne}),get color(){return e.color},hint:"osc-pitch-lfo2"});var j=v(M,2);cn(j,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"});var E=v(W,2),G=x(E);me(G,{label:"p.env",get value(){return e.value.pitch_env_amt},min:-135,max:135,step:.1,onchange:ne=>s({pitch_env_amt:ne}),get color(){return e.color},hint:"osc-pitch-env"});var re=v(G,2);cn(re,{label:"ENV-1",blockId:"mod",hint:"ref-env1"}),A(S,R)}}),te(()=>D=ve(_,1,"pulse-group svelte-dp5a6t",null,D,{inactive:e.value.shape!=="Pulse"})),A(n,c),ye()}var ff=T("<button></button>"),mf=T('<div class="interaction-row svelte-1o0jwca"><div class="vert-with-ref svelte-1o0jwca"><!> <!></div></div>'),pf=T('<div class="vert-with-ref svelte-1o0jwca"><!> <!></div> <div class="vert-with-ref svelte-1o0jwca"><!> <!></div>',1),hf=T("<div><!> <!> <!> <!></div>"),vf=T('<div class="osc-tabs svelte-1o0jwca"></div> <div class="osc-body svelte-1o0jwca"><!> <div><!></div></div> <!> <!>',1);function _f(n,e){ke(e,!0);let a=_e(e,"focusTab",19,()=>-1),r=C(()=>Gt(Dn.resolved).osc),s=_n(Array(6).fill(null)),i=H(0);He(()=>{a()>=0&&h(i,a())});let o=C(()=>e.config.oscs[t(i)]),c=C(()=>t(o)??ps());var l=vf(),f=Te(l);let u;Ue(f,20,()=>({length:6}),We,(q,S,g)=>{const R=C(()=>e.config.oscs[g]!==null);var O=ff();let I;O.textContent=`OSC-${g+1}`,te(()=>I=ve(O,1,"tab svelte-1o0jwca",null,I,{selected:g===t(i),"osc-active":t(R)})),B("click",O,()=>{h(i,g,!0)}),A(q,O)});var d=v(f,2),m=x(d);{let q=C(()=>t(i)+1),S=C(()=>t(o)!==null);dt(m,{get label(){return`OSC-${t(q)??""}`},get active(){return t(S)},onchange:g=>{g?e.setOsc(t(i),s[t(i)]??ps()):(s[t(i)]=En(e.config.oscs[t(i)]),e.setOsc(t(i),null))},get color(){return t(r)},hint:"toggle-osc"})}var y=v(m,2);let k;var w=x(y);df(w,{get index(){return t(i)},get value(){return t(c)},onchange:q=>{t(o)!==null&&e.setOsc(t(i),q)},get color(){return t(r)}});var _=v(d,2);{var D=q=>{Sn(q,{label:"Feedback",get color(){return t(r)},children:(S,g)=>{var R=mf(),O=x(R),I=x(O);me(I,{label:"fb fm",get value(){return e.config.osc_interaction.feedback_fm},min:0,max:3,step:.01,onchange:W=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,feedback_fm:W}}),get color(){return t(r)},hint:"osc-fb-fm"});var F=v(I,2);cn(F,{label:"OSC-1",blockId:"osc",hint:"ref-osc1"}),A(S,R)},$$slots:{default:!0}})};J(_,q=>{t(i)===0&&e.config.oscs[0]!==null&&q(D)})}var L=v(_,2);{var z=q=>{Sn(q,{label:"Interaction",get color(){return t(r)},children:(S,g)=>{var R=hf();let O;var I=x(R);dt(I,{label:"sync",get active(){return e.config.osc_interaction.sync},onchange:E=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,sync:E}}),get color(){return t(r)},hint:"toggle-sync"});var F=v(I,2);{var W=E=>{me(E,{label:"window",get value(){return e.config.osc_interaction.sync_window},min:0,max:1,step:.01,onchange:G=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,sync_window:G}}),get color(){return t(r)},hint:"osc-sync-window"})};J(F,E=>{e.config.osc_interaction.sync&&E(W)})}var M=v(F,2);dt(M,{label:"ring",get active(){return e.config.osc_interaction.ring_mod},onchange:E=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,ring_mod:E}}),get color(){return t(r)},hint:"toggle-ring"});var j=v(M,2);pn(j,{children:(E,G)=>{var re=pf(),ne=Te(re),$=x(ne);me($,{label:"fm",get value(){return e.config.osc_interaction.fm_amt},min:0,max:10,step:.01,onchange:se=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,fm_amt:se}}),get color(){return t(r)},hint:"osc-fm"});var N=v($,2);cn(N,{label:"OSC-1",blockId:"osc",hint:"ref-osc1"});var ee=v(ne,2),de=x(ee);me(de,{label:"fm env",get value(){return e.config.osc_interaction.fm_env_amt},min:-10,max:10,step:.01,onchange:se=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,fm_env_amt:se}}),get color(){return t(r)},hint:"osc-fm-env"});var De=v(de,2);cn(De,{label:"ENV-1",blockId:"mod",hint:"ref-env1"}),A(E,re)}}),te(()=>O=ve(R,1,"interaction-row svelte-1o0jwca",null,O,{inactive:e.config.oscs[1]===null})),A(S,R)},$$slots:{default:!0}})};J(L,q=>{t(i)===1&&q(z)})}te(()=>{u=$e(f,"",u,{"--_block-accent":t(r)}),k=ve(y,1,"osc-controls svelte-1o0jwca",null,k,{inactive:t(o)===null})}),Z("mouseenter",f,()=>le.set("osc-block")),A(n,l),ye()}Ye(["click"]);var gf=T("<!> <!>",1),bf=T('<div class="biquad-panel svelte-4hmfpi"><!> <div><!> <!></div></div>');function _s(n,e){ke(e,!0);let a=_e(e,"label",3,"Filter"),r=_e(e,"value",3,null);const s=[{value:"Lowpass",glyph:"lowpass",label:"LP"},{value:"Highpass",glyph:"highpass",label:"HP"},{value:"Bandpass",glyph:"bandpass",label:"BP"}];let i=H(null),o=C(()=>r()??lt("Lowpass",1e3,.7)),c=C(()=>xa(t(o)));function l(D){const L=Sa(t(o)),z=Pa(t(o));e.onchange(lt(D,L,z))}function f(D){e.onchange(lt(xa(t(o)),D,Pa(t(o))))}function u(D){e.onchange(lt(xa(t(o)),Sa(t(o)),D))}var d=bf(),m=x(d);{let D=C(()=>r()!==null);dt(m,{get label(){return a()},get active(){return t(D)},onchange:L=>{L?e.onchange(t(i)??lt("Lowpass",1e3,.7)):(h(i,En(r()),!0),e.onchange(null))},get color(){return e.color},hint:"toggle-biquad"})}var y=v(m,2);let k;var w=x(y);{let D=C(()=>t(c)??"Lowpass");Ma(w,{get options(){return s},get value(){return t(D)},onchange:l,get color(){return e.color},hints:{Lowpass:"biquad-type-lp",Highpass:"biquad-type-hp",Bandpass:"biquad-type-bp"}})}var _=v(w,2);pn(_,{children:(D,L)=>{var z=gf(),q=Te(z);{let g=C(()=>Sa(t(o)));me(q,{label:"freq",get value(){return t(g)},min:20,max:2e4,step:1,onchange:f,get color(){return e.color},hint:"biquad-freq"})}var S=v(q,2);{let g=C(()=>Pa(t(o)));me(S,{label:"Q",get value(){return t(g)},min:.1,max:20,step:.01,onchange:u,get color(){return e.color},hint:"biquad-q"})}A(D,z)}}),te(()=>k=ve(y,1,"biquad-controls svelte-4hmfpi",null,k,{inactive:r()===null})),A(n,d),ye()}var kf=T("<div><!> <!></div>"),yf=T('<div class="path-panel svelte-1mlllm3"><div class="path-row svelte-1mlllm3"><!> <!></div> <div class="path-row svelte-1mlllm3"><!> <!></div></div>');function wf(n,e){ke(e,!0),_e(e,"oscCount",3,2);let a=_e(e,"oscActive",19,()=>[]);function r(m){e.onchange({...e.value,...m})}function s(m,y){const k=[...e.value.mix];k[m]=y,e.onchange({...e.value,mix:k})}var i=yf(),o=x(i),c=x(o);pn(c,{children:(m,y)=>{var k=La(),w=Te(k);Ue(w,16,()=>({length:6}),We,(_,D,L)=>{const z=C(()=>a()[L]??!1);var q=kf();let S;var g=x(q);me(g,{label:`O${L+1}`,get value(){return e.value.mix[L]},min:0,max:1,step:.01,onchange:O=>s(L,O),get color(){return e.color},hint:"path-osc-mix"});var R=v(g,2);cn(R,{label:`OSC-${L+1}`,blockId:"osc",hint:"ref-osc"}),te(()=>S=ve(q,1,"vert-with-ref svelte-1mlllm3",null,S,{inactive:!t(z)})),A(_,q)}),A(m,k)}});var l=v(c,2);Sn(l,{label:"Pre Filter",get color(){return e.color},children:(m,y)=>{_s(m,{label:"pre",get value(){return e.value.pre_filter},onchange:k=>r({pre_filter:k}),get color(){return e.color}})},$$slots:{default:!0}});var f=v(o,2),u=x(f);Sn(u,{label:"Path Env",get color(){return e.color},children:(m,y)=>{vs(m,{label:"env",get value(){return e.value.env},onchange:k=>r({env:k}),get color(){return e.color}})},$$slots:{default:!0}});var d=v(u,2);Sn(d,{label:"Post Filter",get color(){return e.color},children:(m,y)=>{_s(m,{label:"post",get value(){return e.value.post_filter},onchange:k=>r({post_filter:k}),get color(){return e.color}})},$$slots:{default:!0}}),A(n,i),ye()}var xf=T("<button></button>"),Sf=T('<div class="path-tabs svelte-1puvzgq"></div> <div class="path-body svelte-1puvzgq"><!> <div><!></div></div>',1);function Pf(n,e){ke(e,!0);let a=_e(e,"focusTab",19,()=>-1),r=C(()=>Gt(Dn.resolved).path),s=_n(Array(3).fill(null)),i=H(0);He(()=>{a()>=0&&h(i,a())});let o=C(()=>e.config.paths[t(i)]),c=C(()=>t(o)??hs()),l=C(()=>e.config.oscs.map(D=>D!==null));var f=Sf(),u=Te(f);let d;Ue(u,20,()=>({length:3}),We,(D,L,z)=>{const q=C(()=>e.config.paths[z]!==null);var S=xf();let g;S.textContent=`PATH-${z+1}`,te(()=>g=ve(S,1,"tab svelte-1puvzgq",null,g,{selected:z===t(i),"path-active":t(q)})),B("click",S,()=>{h(i,z,!0)}),A(D,S)});var m=v(u,2),y=x(m);{let D=C(()=>t(i)+1),L=C(()=>t(o)!==null);dt(y,{get label(){return`PATH-${t(D)??""}`},get active(){return t(L)},onchange:z=>{z?e.setPath(t(i),s[t(i)]??hs()):(s[t(i)]=En(e.config.paths[t(i)]),e.setPath(t(i),null))},get color(){return t(r)}})}var k=v(y,2);let w;var _=x(k);wf(_,{get index(){return t(i)},get value(){return t(c)},get oscCount(){return e.oscCount},get oscActive(){return t(l)},onchange:D=>e.setPath(t(i),D),get color(){return t(r)}}),te(()=>{d=$e(u,"",d,{"--_block-accent":t(r)}),w=ve(k,1,"path-controls svelte-1puvzgq",null,w,{inactive:t(o)===null})}),Z("mouseenter",u,()=>le.set("path-block")),A(n,f),ye()}Ye(["click"]);var Af=T("<!> <!>",1),Tf=T('<div class="ws-row svelte-gtye39"><!> <!> <!> <!></div>'),Df=T("<!> <!> <!>",1),Rf=T('<div class="block-row svelte-gtye39"><!> <!> <!></div>');function qf(n,e){ke(e,!0);let a=C(()=>Gt(Dn.resolved).fx);var r=Rf(),s=x(r);Sn(s,{label:"Shape Filter",get color(){return t(a)},children:(c,l)=>{_s(c,{label:"shape",get value(){return e.config.shape_filter},onchange:f=>e.updateConfig({shape_filter:f}),get color(){return t(a)}})},$$slots:{default:!0}});var i=v(s,2);Sn(i,{label:"Waveshaper",get color(){return t(a)},children:(c,l)=>{var f=Tf(),u=x(f);dt(u,{label:"half rect",get active(){return e.config.half_rect},onchange:w=>e.updateConfig({half_rect:w}),get color(){return t(a)},hint:"toggle-half-rect"});var d=v(u,2);pn(d,{children:(w,_)=>{{let D=C(()=>e.config.soft_clip??0);me(w,{label:"clip",get value(){return t(D)},min:0,max:10,step:.01,onchange:L=>e.updateConfig({soft_clip:L>0?L:null}),get color(){return t(a)},hint:"fx-clip"})}}});var m=v(d,2);{let w=C(()=>e.config.hard_clip!==null);dt(m,{label:"hard clip",get active(){return t(w)},onchange:_=>e.updateConfig({hard_clip:_?[1,.8]:null}),get color(){return t(a)},hint:"toggle-hard-clip"})}var y=v(m,2);{var k=w=>{pn(w,{children:(_,D)=>{var L=Af(),z=Te(L);me(z,{label:"drive",get value(){return e.config.hard_clip[0]},min:1,max:10,step:.01,onchange:S=>{const g=En(e.config.hard_clip);e.updateConfig({hard_clip:[S,g[1]]})},get color(){return t(a)},hint:"fx-hard-drive"});var q=v(z,2);me(q,{label:"thresh",get value(){return e.config.hard_clip[1]},min:.1,max:1,step:.01,onchange:S=>{const g=En(e.config.hard_clip);e.updateConfig({hard_clip:[g[0],S]})},get color(){return t(a)},hint:"fx-hard-thresh"}),A(_,L)}})};J(y,w=>{e.config.hard_clip&&w(k)})}A(c,f)},$$slots:{default:!0}});var o=v(i,2);Sn(o,{label:"Voice FX",get color(){return t(a)},children:(c,l)=>{pn(c,{children:(f,u)=>{var d=Df(),m=Te(d);{let w=C(()=>e.config.wavefold??0);me(m,{label:"fold",get value(){return t(w)},min:0,max:10,step:.01,onchange:_=>e.updateConfig({wavefold:_>0?_:null}),get color(){return t(a)},hint:"fx-fold"})}var y=v(m,2);{let w=C(()=>e.config.bit_crush??0);me(y,{label:"crush",get value(){return t(w)},min:0,max:16,step:1,onchange:_=>e.updateConfig({bit_crush:_>0?_:null}),get color(){return t(a)},hint:"fx-crush"})}var k=v(y,2);{let w=C(()=>e.config.decimate??0);me(k,{label:"decim",get value(){return t(w)},min:0,max:32,step:1,onchange:_=>e.updateConfig({decimate:_>0?_:null}),get color(){return t(a)},hint:"fx-decim"})}A(f,d)}})},$$slots:{default:!0}}),Z("mouseenter",r,()=>le.set("fx-block")),A(n,r),ye()}var Cf=T('<div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div>',1),Lf=T('<!> <!> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <!> <!> <!>',1),Mf=T('<div class="filter-panel svelte-1fddr5a"><!> <div><div class="engine-and-mode svelte-1fddr5a"><!> <!></div> <!></div></div>');function Ef(n,e){ke(e,!0);const a={engine:"Moog",mode:"Lowpass",cutoff:80,resonance:0,env_amt:0,lfo_amt:0,lfo2_amt:0,velo_amt:0,key_track:0,morph:0,morph_lfo_amt:0,morph_lfo2_amt:0,morph_env_amt:0};let r=_e(e,"value",3,null);const s=[{value:"Lowpass",glyph:"lowpass",label:"LP"},{value:"Highpass",glyph:"highpass",label:"HP"},{value:"Bandpass",glyph:"bandpass",label:"BP"}];let i=H(null),o=C(()=>r()??a),c=C(()=>(t(o).engine??"Moog")==="Svf");function l(g){g?e.onchange(t(i)??{...a}):(h(i,En(r()),!0),e.onchange(null))}function f(g){e.onchange({...t(o),engine:g})}function u(g){e.onchange({...t(o),mode:g})}function d(g){e.onchange({...t(o),...g})}var m=Mf(),y=x(m);{let g=C(()=>r()!==null);dt(y,{label:"vcf",get active(){return t(g)},onchange:l,get color(){return e.color},hint:"toggle-vcf"})}var k=v(y,2);let w;var _=x(k),D=x(_);{let g=C(()=>t(o).engine??"Moog");Ea(D,{options:["Moog","Svf"],get value(){return t(g)},onchange:f,hints:{Moog:"vcf-engine-moog",Svf:"vcf-engine-svf"}})}var L=v(D,2);{var z=g=>{{let R=C(()=>t(o).morph??0);me(g,{label:"morph",get value(){return t(R)},min:0,max:1,step:.01,onchange:O=>d({morph:O}),get color(){return e.color},hint:"vcf-morph"})}},q=g=>{Ma(g,{get options(){return s},get value(){return t(o).mode},onchange:u,get color(){return e.color},hints:{Lowpass:"vcf-mode-lp",Highpass:"vcf-mode-hp",Bandpass:"vcf-mode-bp"}})};J(L,g=>{t(c)?g(z):g(q,!1)})}var S=v(_,2);pn(S,{children:(g,R)=>{var O=Lf(),I=Te(O);me(I,{label:"cutoff",get value(){return t(o).cutoff},min:0,max:135,step:.1,onchange:pe=>d({cutoff:pe}),get color(){return e.color},hint:"vcf-cutoff"});var F=v(I,2);me(F,{label:"reso",get value(){return t(o).resonance},min:0,max:1,step:.01,onchange:pe=>d({resonance:pe}),get color(){return e.color},hint:"vcf-reso"});var W=v(F,2),M=x(W);me(M,{label:"env",get value(){return t(o).env_amt},min:-135,max:135,step:.1,onchange:pe=>d({env_amt:pe}),get color(){return e.color},hint:"vcf-env"});var j=v(M,2);cn(j,{label:"ENV-2",blockId:"mod",hint:"ref-env2"});var E=v(W,2),G=x(E);me(G,{label:"lfo",get value(){return t(o).lfo_amt},min:-135,max:135,step:.1,onchange:pe=>d({lfo_amt:pe}),get color(){return e.color},hint:"vcf-lfo"});var re=v(G,2);cn(re,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var ne=v(E,2),$=x(ne);me($,{label:"lfo2",get value(){return t(o).lfo2_amt},min:-135,max:135,step:.1,onchange:pe=>d({lfo2_amt:pe}),get color(){return e.color},hint:"vcf-lfo2"});var N=v($,2);cn(N,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"});var ee=v(ne,2);me(ee,{label:"velo",get value(){return t(o).velo_amt},min:-135,max:135,step:.1,onchange:pe=>d({velo_amt:pe}),get color(){return e.color},hint:"vcf-velo"});var de=v(ee,2);me(de,{label:"key",get value(){return t(o).key_track},min:-2,max:2,step:.01,onchange:pe=>d({key_track:pe}),get color(){return e.color},hint:"vcf-key"});var De=v(de,2);{var se=pe=>{var Ve=Cf(),qe=Te(Ve),Ae=x(qe);{let on=C(()=>t(o).morph_env_amt??0);me(Ae,{label:"m.env",get value(){return t(on)},min:-1,max:1,step:.01,onchange:Pn=>d({morph_env_amt:Pn}),get color(){return e.color},hint:"vcf-morph-env"})}var we=v(Ae,2);cn(we,{label:"ENV-2",blockId:"mod",hint:"ref-env2"});var Fe=v(qe,2),Qe=x(Fe);{let on=C(()=>t(o).morph_lfo_amt??0);me(Qe,{label:"m.lfo",get value(){return t(on)},min:-1,max:1,step:.01,onchange:Pn=>d({morph_lfo_amt:Pn}),get color(){return e.color},hint:"vcf-morph-lfo"})}var nn=v(Qe,2);cn(nn,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var kn=v(Fe,2),Xn=x(kn);{let on=C(()=>t(o).morph_lfo2_amt??0);me(Xn,{label:"m.lfo2",get value(){return t(on)},min:-1,max:1,step:.01,onchange:Pn=>d({morph_lfo2_amt:Pn}),get color(){return e.color},hint:"vcf-morph-lfo2"})}var qn=v(Xn,2);cn(qn,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),A(pe,Ve)};J(De,pe=>{t(c)&&pe(se)})}A(g,O)}}),te(()=>w=ve(k,1,"filter-controls svelte-1fddr5a",null,w,{inactive:r()===null})),A(n,m),ye()}var Ff=T("<div><!></div>");function Of(n,e){ke(e,!0);let a=C(()=>Gt(Dn.resolved).vcf);var r=Ff(),s=x(r);Ef(s,{get value(){return e.config.main_filter},onchange:i=>e.updateConfig({main_filter:i}),get color(){return t(a)}}),Z("mouseenter",r,()=>le.set("vcf-block")),A(n,r),ye()}var zf=T('<!> <div class="vert-with-ref svelte-yb3nqx"><!> <!></div> <div class="vert-with-ref svelte-yb3nqx"><!> <!></div> <div class="vert-with-ref svelte-yb3nqx"><!> <!></div>',1),Nf=T('<div class="block-row svelte-yb3nqx"><!> <!></div>');function If(n,e){ke(e,!0);let a=C(()=>Gt(Dn.resolved).amp);var r=Nf(),s=x(r);Sn(s,{label:"Envelope",get color(){return t(a)},children:(o,c)=>{vs(o,{label:"amp",get value(){return e.config.amp_env},onchange:l=>e.updateConfig({amp_env:l}),get color(){return t(a)}})},$$slots:{default:!0}});var i=v(s,2);Sn(i,{label:"Level",get color(){return t(a)},children:(o,c)=>{pn(o,{children:(l,f)=>{var u=zf(),d=Te(u);me(d,{label:"amp",get value(){return e.config.amp},min:0,max:2,step:.01,onchange:S=>e.updateConfig({amp:S}),get color(){return t(a)},hint:"amp-level"});var m=v(d,2),y=x(m);me(y,{label:"velo",get value(){return e.config.amp_velo_amt},min:0,max:1,step:.01,onchange:S=>e.updateConfig({amp_velo_amt:S}),get color(){return t(a)},hint:"amp-velo"});var k=v(y,2);cn(k,{label:"VELO",blockId:"mod",hint:"ref-velo"});var w=v(m,2),_=x(w);me(_,{label:"vol lfo",get value(){return e.config.vol_lfo_amt},min:0,max:1,step:.01,onchange:S=>e.updateConfig({vol_lfo_amt:S}),get color(){return t(a)},hint:"amp-vol-lfo"});var D=v(_,2);cn(D,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var L=v(w,2),z=x(L);me(z,{label:"vol lfo2",get value(){return e.config.vol_lfo2_amt},min:0,max:1,step:.01,onchange:S=>e.updateConfig({vol_lfo2_amt:S}),get color(){return t(a)},hint:"amp-vol-lfo2"});var q=v(z,2);cn(q,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),A(l,u)}})},$$slots:{default:!0}}),Z("mouseenter",r,()=>le.set("amp-block")),A(n,r),ye()}var jf=T('<!> <div class="vert-with-ref svelte-1n1i7mb"><!> <!></div> <div class="vert-with-ref svelte-1n1i7mb"><!> <!></div>',1),Bf=T("<!> <!> <!>",1),Hf=T('<div class="block-row svelte-1n1i7mb"><!> <!> <!> <!></div>');function Vf(n,e){ke(e,!0);let a=C(()=>Gt(Dn.resolved).post);var r=Hf(),s=x(r);Sn(s,{label:"Post Filter",get color(){return t(a)},children:(l,f)=>{_s(l,{label:"post",get value(){return e.config.post_filter},onchange:u=>e.updateConfig({post_filter:u}),get color(){return t(a)}})},$$slots:{default:!0}});var i=v(s,2);Sn(i,{label:"Pan",get color(){return t(a)},children:(l,f)=>{pn(l,{children:(u,d)=>{var m=jf(),y=Te(m);me(y,{label:"pan",get value(){return e.config.pan},min:-1,max:1,step:.01,onchange:q=>e.updateConfig({pan:q}),get color(){return t(a)},hint:"post-pan"});var k=v(y,2),w=x(k);me(w,{label:"pan lfo",get value(){return e.config.pan_lfo_amt},min:0,max:1,step:.01,onchange:q=>e.updateConfig({pan_lfo_amt:q}),get color(){return t(a)},hint:"post-pan-lfo"});var _=v(w,2);cn(_,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var D=v(k,2),L=x(D);me(L,{label:"pan lfo2",get value(){return e.config.pan_lfo2_amt},min:0,max:1,step:.01,onchange:q=>e.updateConfig({pan_lfo2_amt:q}),get color(){return t(a)},hint:"post-pan-lfo2"});var z=v(L,2);cn(z,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),A(u,m)}})},$$slots:{default:!0}});var o=v(i,2);Sn(o,{label:"Porta",get color(){return t(a)},children:(l,f)=>{pn(l,{children:(u,d)=>{me(u,{label:"time",get value(){return e.config.portamento},min:0,max:500,step:1,onchange:m=>e.updateConfig({portamento:m}),get color(){return t(a)},hint:"post-porta-time"})}})},$$slots:{default:!0}});var c=v(o,2);Sn(c,{label:"Unison",get color(){return t(a)},children:(l,f)=>{pn(l,{children:(u,d)=>{var m=Bf(),y=Te(m);me(y,{label:"voices",get value(){return e.config.unison},min:1,max:8,step:1,onchange:_=>e.updateConfig({unison:_}),get color(){return t(a)},hint:"post-unison-voices"});var k=v(y,2);me(k,{label:"detune",get value(){return e.config.unison_detune},min:0,max:1,step:.001,onchange:_=>e.updateConfig({unison_detune:_}),get color(){return t(a)},hint:"post-unison-detune"});var w=v(k,2);me(w,{label:"spread",get value(){return e.config.unison_spread},min:0,max:1,step:.01,onchange:_=>e.updateConfig({unison_spread:_}),get color(){return t(a)},hint:"post-unison-spread"}),A(u,m)}})},$$slots:{default:!0}}),Z("mouseenter",r,()=>le.set("post-block")),A(n,r),ye()}var Gf=T('<button aria-label="Piano key"></button>'),Kf=T('<button aria-label="Piano key"></button>'),Wf=T('<div class="keyboard svelte-1hwart2" role="group" aria-label="Piano keyboard"><!> <!></div>');function Uf(n,e){ke(e,!0);let a=_e(e,"octave",3,4),r=_e(e,"activeKeys",19,()=>new Set);const s=[0,2,4,5,7,9,11],i=[1,3,-1,6,8,10,-1],o=[0,1,-1,3,4,5,-1];function c(L,z){return(a()+1+z)*12+L}function l(L){e.onkeydown(L)}function f(L){e.onkeyup(L)}function u(){const L=[],z=7.142857142857143;for(let q=0;q<2;q++){const S=q*7*z;for(let g=0;g<7;g++)L.push({semi:c(s[g],q),black:!1,left:S+g*z,width:z});for(let g=0;g<7;g++){if(i[g]===-1)continue;const R=o[g];L.push({semi:c(i[g],q),black:!0,left:S+(R+.65)*z,width:z*.7})}}return L}let d=C(u),m=C(()=>t(d).filter(L=>!L.black)),y=C(()=>t(d).filter(L=>L.black)),k=H(!1);var w=Wf(),_=x(w);Ue(_,17,()=>t(m),We,(L,z)=>{var q=Gf();let S,g;te(R=>{S=ve(q,1,"key white svelte-1hwart2",null,S,R),g=$e(q,"",g,{left:`${t(z).left??""}%`,width:`${t(z).width??""}%`})},[()=>({active:r().has(t(z).semi)})]),B("pointerdown",q,R=>{R.preventDefault(),l(t(z).semi)}),B("pointerup",q,()=>f(t(z).semi)),Z("pointerleave",q,()=>{t(k)&&f(t(z).semi)}),Z("pointerenter",q,()=>{t(k)&&l(t(z).semi)}),A(L,q)});var D=v(_,2);Ue(D,17,()=>t(y),We,(L,z)=>{var q=Kf();let S,g;te(R=>{S=ve(q,1,"key black svelte-1hwart2",null,S,R),g=$e(q,"",g,{left:`${t(z).left??""}%`,width:`${t(z).width??""}%`})},[()=>({active:r().has(t(z).semi)})]),B("pointerdown",q,R=>{R.preventDefault(),l(t(z).semi)}),B("pointerup",q,()=>f(t(z).semi)),Z("pointerleave",q,()=>{t(k)&&f(t(z).semi)}),Z("pointerenter",q,()=>{t(k)&&l(t(z).semi)}),A(L,q)}),Z("mouseenter",w,()=>le.set("piano-keyboard")),B("pointerdown",w,()=>{h(k,!0)}),B("pointerup",w,()=>{h(k,!1)}),Z("pointerleave",w,()=>{h(k,!1)}),A(n,w),ye()}Ye(["pointerdown","pointerup"]);var Qf=T('<button class="hit-btn svelte-1bvy689">Hit</button>');function Zf(n,e){ke(e,!0);var a=Qf();Z("mouseenter",a,()=>le.set("hit-button")),B("pointerdown",a,r=>{r.preventDefault(),e.onhit()}),A(n,a),ye()}Ye(["pointerdown"]);var Jf=T('<!> <div class="measure-view svelte-i7auzo"><!></div>',1),Xf=T('<div class="demo-editor svelte-i7auzo"><div class="controls-stack svelte-i7auzo"><span class="label svelte-i7auzo">demo</span> <!> <!> <div class="switch-row svelte-i7auzo"><span class="switch-label svelte-i7auzo">scale</span> <!></div> <div class="switch-row svelte-i7auzo"><span class="switch-label svelte-i7auzo">note</span> <!></div></div> <!></div>');function Yf(n,e){ke(e,!0);let a=C(()=>Dn.resolved==="light"?"#b07820":"#cc9944"),r=_e(e,"octave",3,4),s=H(_n([])),i=H(120),o=H(""),c=H(""),l=H(0),f=C(()=>Mn.playing&&xe.playing),u=C(()=>xe.position?.tracks[0]??null),d=C(()=>t(f)&&t(u)?t(u).measure_idx:-1),m=C(()=>t(f)&&t(u)?t(u).beat_time:0);function y(se){return se.filter(pe=>"Beat"in pe).length}He(()=>{h(i,e.demo?.bpm??120,!0),h(o,e.demo?.scale??"",!0),h(c,e.demo?.root??"",!0);const se=e.demo?.pattern??"";se?R0(se).then(pe=>{h(s,pe,!0)}):h(s,[],!0)}),He(()=>{t(s).length===0?h(l,0):t(l)>=t(s).length&&h(l,t(s).length-1)});function k(){const se=q0(t(s));e.onchange({pattern:se,bpm:t(i)||null,scale:t(o)||null,root:t(c)||null})}function w(se,pe,Ve){go(t(s)[t(l)],se,pe,Ve),k()}async function _(se,pe,Ve){try{await bo(t(s)[t(l)],se,pe,Ve)&&k()}catch{}}function D(){L0(t(s)[t(l)]),k()}function L(se){ko(t(s)[t(l)],se),k()}function z(se,pe){yo(t(s)[t(l)],se,pe),k()}async function q(se,pe){try{await er(t(s)[t(l)],se,pe)&&k()}catch{}}function S(se,pe){wo(t(s)[t(l)],se,pe),k()}function g(se){h(l,se,!0)}function R(){t(s).push([{Beat:["Rest","Rest","Rest","Rest"]}]),h(l,t(s).length-1),k()}function O(se){t(s).splice(se,1),t(l)>=t(s).length&&t(s).length>0&&h(l,t(s).length-1),k()}function I(se,pe){const[Ve]=t(s).splice(se,1);t(s).splice(pe,0,Ve),t(l)===se?h(l,pe,!0):se<t(l)&&pe>=t(l)?ka(l,-1):se>t(l)&&pe<=t(l)&&ka(l),k()}const F=["","maj","min","penta","blues","chrom"],W=["","c","c#","d","d#","e","f","f#","g","g#","a","a#","b"];var M=Xf(),j=x(M),E=v(x(j),2);Xs(E,{label:"Bpm",get value(){return t(i)},min:40,max:240,step:1,onchange:se=>{h(i,se,!0),k()},get color(){return t(a)},hint:"demo-bpm"});var G=v(E,2);Xs(G,{label:"Oct",get value(){return r()},min:0,max:8,step:1,onchange:se=>e.onoctavechange?.(se),get color(){return t(a)},hint:"demo-oct"});var re=v(G,2),ne=v(x(re),2);Ea(ne,{get options(){return F},get value(){return t(o)},onchange:se=>{h(o,se,!0),k()},hint:"demo-scale"});var $=v(re,2),N=v(x($),2);Ea(N,{get options(){return W},get value(){return t(c)},onchange:se=>{h(c,se,!0),k()},hint:"demo-root"});var ee=v(j,2);{var de=se=>{var pe=Jf(),Ve=Te(pe);{let we=C(()=>t(s).map((Qe,nn)=>({label:String(nn+1)}))),Fe=C(()=>t(d)>=0&&t(s)[t(d)]?t(m)/(y(t(s)[t(d)])||1):0);Qa(Ve,{get items(){return t(we)},get selectedIndex(){return t(l)},get activeIndex(){return t(d)},get activeProgress(){return t(Fe)},onselect:g,onadd:R,ondelete:O,onmove:I})}var qe=v(Ve,2),Ae=x(qe);{let we=C(()=>t(d)===t(l)),Fe=C(()=>t(d)===t(l)?t(m):0);xo(Ae,{get items(){return t(s)[t(l)]},get playing(){return t(we)},get beatPosition(){return t(Fe)},onchange:(Qe,nn,kn)=>w(Qe,nn,kn),onaddbeat:D,ondeletemeasure:()=>O(t(l)),ondeleteitem:L,ondeletedivision:(Qe,nn)=>z(Qe,nn),oninsertcommand:(Qe,nn)=>q(Qe,nn),onreorderitem:(Qe,nn)=>S(Qe,nn),onedit:(Qe,nn,kn)=>_(Qe,nn,kn)})}A(se,pe)},De=se=>{Qa(se,{items:[],selectedIndex:-1,onselect:()=>{},onadd:R,onmove:()=>{}})};J(ee,se=>{t(s).length>0?se(de):se(De,!1)})}Z("mouseenter",M,()=>le.set("demo-editor")),A(n,M),ye()}class $f{#e=H(_n([]));get inputs(){return t(this.#e)}set inputs(e){h(this.#e,e,!0)}access=null;callbacks=null;async init(e){if(this.callbacks=e,!!navigator.requestMIDIAccess)try{this.access=await navigator.requestMIDIAccess(),this.bindInputs(),this.access.onstatechange=()=>this.bindInputs()}catch{}}destroy(){if(this.access){for(const e of this.access.inputs.values())e.onmidimessage=null;this.access.onstatechange=null}this.access=null,this.callbacks=null,this.inputs=[]}bindInputs(){if(!this.access)return;const e=[];for(const a of this.access.inputs.values())a.onmidimessage=r=>this.handleMessage(r),a.name&&e.push(a.name);this.inputs=e}handleMessage(e){const a=e.data;if(!a||a.length<3)return;const r=a[0]&240,s=(a[0]&15)+1,i=a[1],o=a[2];r===144&&o>0?this.callbacks?.onNoteDown(i,o,s):r===128||r===144&&o===0?this.callbacks?.onNoteUp(i,s):r===176&&this.callbacks?.onCC?.(s,i,o)}}const Os=new $f,br="gb-daw-midi-cc-map";function em(){try{const n=localStorage.getItem(br);if(!n)return null;const e=JSON.parse(n);if(e&&typeof e.encoder=="number"&&Array.isArray(e.knobs))return e}catch{}return null}function nm(n){localStorage.setItem(br,JSON.stringify(n))}class tm{#e=H(0);get regionIndex(){return t(this.#e)}set regionIndex(e){h(this.#e,e,!0)}#t=H(_n([]));get regions(){return t(this.#t)}set regions(e){h(this.#t,e,!0)}#n=H(_n(em()));get ccMap(){return t(this.#n)}set ccMap(e){h(this.#n,e,!0)}#a=H(null);get learnStep(){return t(this.#a)}set learnStep(e){h(this.#a,e,!0)}prevCC=new Map;learnSeen=new Set;learnKnobs=[];learnFaders=[];learnPads=[];learnEncoder=-1;get currentRegion(){return this.regions[this.regionIndex]??null}get hasCcMap(){return this.ccMap!==null}get learnPrompt(){const e=this.learnStep;if(!e)return"";switch(e.phase){case"encoder":return"Turn the encoder...";case"knobs":return`Turn knob ${e.index+1} of 8...`;case"faders":return`Move fader ${e.index+1} of 4...`;case"pads":return`Press pad ${e.index+1} of 8 (or press Done to skip)...`}}setRegions(e){this.regions=e,this.regionIndex>=e.length&&(this.regionIndex=Math.max(0,e.length-1))}navigateRegion(e){if(this.regions.length===0)return;let a=this.regionIndex+e;a<0&&(a=this.regions.length-1),a>=this.regions.length&&(a=0),this.regionIndex=a,this.prevCC.clear()}jumpToBlock(e){const a=this.regions.findIndex(r=>r.block===e);a>=0&&(this.regionIndex=a,this.prevCC.clear())}handleCC(e,a,r){if(this.learnStep){this.learnCC(a);return}if(!this.ccMap)return;if(a===this.ccMap.encoder){r>=1&&r<=63?this.navigateRegion(-1):r>=65&&r<=127&&this.navigateRegion(1);return}const s=this.ccMap.knobs.indexOf(a);if(s>=0){this.applyCC(`K${s+1}`,r);return}const i=this.ccMap.faders.indexOf(a);if(i>=0){this.applyCC(`F${i+1}`,r);return}}handlePad(e){if(this.learnStep&&this.learnStep.phase==="pads"){this.learnPadNote(e);return}if(!this.ccMap||this.ccMap.pads.length===0)return;const a=this.ccMap.pads.indexOf(e);a>=0&&a<nr.length&&this.jumpToBlock(nr[a])}applyCC(e,a){const r=this.currentRegion;if(!r)return;const s=r.bindings.find(k=>k.slot===e);if(!s)return;if(s.type==="discrete"){const k=s.options??[];if(k.length===0)return;const w=Math.round(a/127*(k.length-1));s.set(k[w]),this.prevCC.set(e,a);return}if(s.type==="toggle"){s.set(a>=64),this.prevCC.set(e,a);return}const i=this.prevCC.get(e);if(this.prevCC.set(e,a),i===void 0)return;const o=a-i;if(o===0)return;const c=s.min??0,l=s.max??1,f=s.step??.01,u=s.get();let d;if(o>0){const k=127-i,w=l-u;d=k>0?u+o*(w/k):u}else{const k=i,w=u-c;d=k>0?u+o*(w/k):u}const m=Math.round(d/f)*f,y=Math.min(l,Math.max(c,m));s.set(y)}startLearn(){this.learnSeen.clear(),this.learnKnobs=[],this.learnFaders=[],this.learnPads=[],this.learnEncoder=-1,this.learnStep={phase:"encoder"}}cancelLearn(){this.learnStep=null}skipPads(){this.finishLearn()}learnCC(e){const a=this.learnStep;if(a)switch(a.phase){case"encoder":this.learnEncoder=e,this.learnSeen.add(e),this.learnStep={phase:"knobs",index:0};break;case"knobs":if(this.learnSeen.has(e))return;this.learnSeen.add(e),this.learnKnobs.push(e),this.learnKnobs.length>=8?this.learnStep={phase:"faders",index:0}:this.learnStep={phase:"knobs",index:this.learnKnobs.length};break;case"faders":if(this.learnSeen.has(e))return;this.learnSeen.add(e),this.learnFaders.push(e),this.learnFaders.length>=4?this.learnStep={phase:"pads",index:0}:this.learnStep={phase:"faders",index:this.learnFaders.length};break}}learnPadNote(e){!this.learnStep||this.learnStep.phase!=="pads"||(this.learnPads.push(e),this.learnPads.length>=8?this.finishLearn():this.learnStep={phase:"pads",index:this.learnPads.length})}finishLearn(){const e={encoder:this.learnEncoder,knobs:this.learnKnobs,faders:this.learnFaders,pads:this.learnPads};this.ccMap=e,nm(e),this.learnStep=null}clearMap(){this.ccMap=null,localStorage.removeItem(br)}}const mn=new tm;function ue(n,e,a,r,s,i,o){return{slot:n,label:e,type:"vert",min:a,max:r,step:s,get:i,set:o}}function At(n,e,a,r,s){return{slot:n,label:e,type:"discrete",options:a,get:r,set:s}}function as(n,e,a,r){return{slot:n,label:e,type:"toggle",get:a,set:r}}function ss(n,e){const a=Xt(n),r=At("K1","type",["AD","ADSR","MultiTap"],()=>a,s=>e({__type__:s}));return"AD"in n?{type:r,faders:[ue("F1","atk",0,500,.1,()=>n.AD.attack_ms,s=>e({attack_ms:s})),ue("F2","dec",0,5e3,1,()=>n.AD.decay_ms,s=>e({decay_ms:s})),ue("F3","start",-1,1,.01,()=>n.AD.start,s=>e({start:s})),ue("F4","amt",-1,1,.01,()=>n.AD.amt,s=>e({amt:s}))]}:"ADSR"in n?{type:r,faders:[ue("F1","atk",0,2e3,.1,()=>n.ADSR.attack_ms,s=>e({attack_ms:s})),ue("F2","dec",0,5e3,1,()=>n.ADSR.decay_ms,s=>e({decay_ms:s})),ue("F3","sus",0,1,.01,()=>n.ADSR.sustain,s=>e({sustain:s})),ue("F4","rel",0,5e3,1,()=>n.ADSR.release_ms,s=>e({release_ms:s}))]}:{type:r,faders:[ue("F1","taps",1,16,1,()=>n.MultiTap.num_taps,s=>e({num_taps:s})),ue("F2","intvl",1,500,1,()=>n.MultiTap.tap_interval,s=>e({tap_interval:s})),ue("F3","amp",0,1,.01,()=>n.MultiTap.tap_amp,s=>e({tap_amp:s})),ue("F4","tail",0,5e3,1,()=>n.MultiTap.tail_decay,s=>e({tail_decay:s}))]}}const am=["Lowpass","Highpass","Bandpass"];function rs(n,e){return{type:At("K1","type",am,()=>xa(n),a=>{e(lt(a,Sa(n),Pa(n)))}),freq:ue("F1","freq",20,2e4,1,()=>Sa(n),a=>{e(lt(xa(n),a,Pa(n)))}),q:ue("F2","Q",.1,20,.01,()=>Pa(n),a=>{e(lt(xa(n),Sa(n),a))})}}function sm(n,e,a,r){const s=[],i=["Ramp","Pulse","Sine","Triangle","S&H"],o=["Free","Trig","Rand"];s.push({id:"lfo",label:"LFO-1",block:"mod",bindings:[At("K1","wave",i,()=>n.lfo.wave??"S&H",u=>{const d=u==="S&H"?null:u;e({lfo:{...n.lfo,wave:d}})}),At("K2","mode",o,()=>n.lfo.mode,u=>{e({lfo:{...n.lfo,mode:u}})}),ue("F1","rate",0,15,1,()=>n.lfo.rate,u=>{e({lfo:{...n.lfo,rate:u}})})]}),s.push({id:"lfo2",label:"LFO-2",block:"mod",bindings:[At("K1","wave",i,()=>n.lfo2.wave??"S&H",u=>{const d=u==="S&H"?null:u;e({lfo2:{...n.lfo2,wave:d}})}),At("K2","mode",o,()=>n.lfo2.mode,u=>{e({lfo2:{...n.lfo2,mode:u}})}),ue("F1","rate",0,15,1,()=>n.lfo2.rate,u=>{e({lfo2:{...n.lfo2,rate:u}})}),ue("F2","L1→rate",0,1,.01,()=>n.lfo1_to_lfo2_rate,u=>{e({lfo1_to_lfo2_rate:u})}),ue("F3","L1→dep",0,1,.01,()=>n.lfo1_to_lfo2_depth,u=>{e({lfo1_to_lfo2_depth:u})})]});{const u=n.pitch_env??it("AD"),d=ss(u,m=>{if("__type__"in m){e({pitch_env:it(m.__type__)});return}const y=Xt(u),k=u[y];e({pitch_env:{[y]:{...k,...m}}})});s.push({id:"pitch-env",label:"ENV-1 Pitch",block:"mod",bindings:[d.type,...d.faders]})}{const u=n.filter_env??it("AD"),d=ss(u,m=>{if("__type__"in m){e({filter_env:it(m.__type__)});return}const y=Xt(u),k=u[y];e({filter_env:{[y]:{...k,...m}}})});s.push({id:"filter-env",label:"ENV-2 Filter",block:"mod",bindings:[d.type,...d.faders]})}const c=["Sine","Triangle","Saw","Pulse","WhiteNoise","PinkNoise"],l=["Pitched","Fixed","Swept"],f=n.oscs.filter(u=>u!==null).length;for(let u=0;u<n.oscs.length;u++){let d=function(_){const D=n.oscs[y]??ps();a(y,{...D,..._})};const m=n.oscs[u]??ps(),y=u,k=So(m.freq),w=[];if(k==="Pitched"&&typeof m.freq=="object"&&"Pitched"in m.freq){const _=m.freq.Pitched;w.push(ue("F1","semi",-48,48,1,()=>_.semi,D=>{d({freq:{Pitched:{semi:D,fine:_.fine}}})}),ue("F2","fine",-100,100,1,()=>_.fine,D=>{d({freq:{Pitched:{semi:_.semi,fine:D}}})}))}else if(k==="Fixed")w.push(ue("F1","hz",20,2e4,1,()=>m.fixed_hz,_=>{d({fixed_hz:_})}));else if(k==="Swept"&&typeof m.freq=="object"&&"Swept"in m.freq){const _=m.freq.Swept;w.push(ue("F1","atk",0,100,.01,()=>_.atk,D=>{d({freq:{Swept:{..._,atk:D}}})}),ue("F2","dec",0,5e3,1,()=>_.dec,D=>{d({freq:{Swept:{..._,dec:D}}})}),ue("F3","base",0,135,.1,()=>_.base,D=>{d({freq:{Swept:{..._,base:D}}})}),ue("F4","amt",-135,135,.1,()=>_.amt,D=>{d({freq:{Swept:{..._,amt:D}}})}))}s.push({id:`osc-${u}`,label:`OSC-${u+1}`,block:"osc",bindings:[At("K1","shape",c,()=>m.shape,_=>d({shape:_})),At("K2","freq",l,()=>k,_=>{let D;switch(_){case"Pitched":D={Pitched:{semi:0,fine:0}};break;case"Fixed":D="Fixed";break;case"Swept":D={Swept:{atk:.1,dec:200,base:48,amt:50}};break;default:return}d({freq:D})}),ue("K3","pw",0,1,.01,()=>m.pw,_=>d({pw:_})),ue("K4","pw lfo",0,1,.01,()=>m.pw_lfo_amt,_=>d({pw_lfo_amt:_})),ue("K5","p.lfo",0,48,.1,()=>m.pitch_lfo_amt,_=>d({pitch_lfo_amt:_})),ue("K6","p.env",-135,135,.1,()=>m.pitch_env_amt,_=>d({pitch_env_amt:_})),ue("K7","p.lfo2",0,48,.1,()=>m.pitch_lfo2_amt,_=>d({pitch_lfo2_amt:_})),ue("K8","pw lfo2",0,1,.01,()=>m.pw_lfo2_amt,_=>d({pw_lfo2_amt:_})),...w]}),s.push({id:`osc-${u}-pdif`,label:`OSC-${u+1} PDif`,block:"osc",bindings:[ue("K1","pdif",0,1,.01,()=>m.phaz_diff,_=>d({phaz_diff:_})),ue("K2","pd lfo",0,1,.01,()=>m.phaz_diff_lfo_amt,_=>d({phaz_diff_lfo_amt:_})),ue("K3","pd lf2",0,1,.01,()=>m.phaz_diff_lfo2_amt,_=>d({phaz_diff_lfo2_amt:_}))]}),u===0&&n.oscs[0]!==null&&s.push({id:"osc-feedback",label:"OSC-1 Feedback",block:"osc",bindings:[ue("F1","fb fm",0,3,.01,()=>n.osc_interaction.feedback_fm,_=>{e({osc_interaction:{...n.osc_interaction,feedback_fm:_}})})]}),u===1&&s.push({id:"osc-interact",label:"OSC Interact",block:"osc",bindings:f>=2?[as("K1","sync",()=>n.osc_interaction.sync,_=>{e({osc_interaction:{...n.osc_interaction,sync:_}})}),ue("K2","window",0,1,.01,()=>n.osc_interaction.sync_window,_=>{e({osc_interaction:{...n.osc_interaction,sync_window:_}})}),as("K3","ring",()=>n.osc_interaction.ring_mod,_=>{e({osc_interaction:{...n.osc_interaction,ring_mod:_}})}),ue("F1","fm",0,10,.01,()=>n.osc_interaction.fm_amt,_=>{e({osc_interaction:{...n.osc_interaction,fm_amt:_}})}),ue("F2","fm env",-10,10,.01,()=>n.osc_interaction.fm_env_amt,_=>{e({osc_interaction:{...n.osc_interaction,fm_env_amt:_}})})]:[]})}for(let u=0;u<n.paths.length;u++){let d=function(k){const w=n.paths[y]??hs();r(y,{...w,...k})};const m=n.paths[u]??hs(),y=u;s.push({id:`path-${u}-mix`,label:`PATH-${u+1} Mix`,block:"path",bindings:[ue("F1","O1",0,1,.01,()=>m.mix[0],k=>{const w=[...m.mix];w[0]=k,d({mix:w})}),ue("F2","O2",0,1,.01,()=>m.mix[1],k=>{const w=[...m.mix];w[1]=k,d({mix:w})}),ue("F3","O3",0,1,.01,()=>m.mix[2],k=>{const w=[...m.mix];w[2]=k,d({mix:w})}),ue("F4","O4",0,1,.01,()=>m.mix[3],k=>{const w=[...m.mix];w[3]=k,d({mix:w})}),ue("K1","O5",0,1,.01,()=>m.mix[4],k=>{const w=[...m.mix];w[4]=k,d({mix:w})}),ue("K2","O6",0,1,.01,()=>m.mix[5],k=>{const w=[...m.mix];w[5]=k,d({mix:w})})]});{const k=m.pre_filter??lt("Lowpass",1e3,.7),w=rs(k,_=>d({pre_filter:_}));s.push({id:`path-${u}-pre`,label:`PATH-${u+1} Pre`,block:"path",bindings:[w.type,w.freq,w.q]})}{const k=m.env??it("AD"),w=ss(k,_=>{if("__type__"in _){d({env:it(_.__type__)});return}const D=Xt(k),L=k[D];d({env:{[D]:{...L,..._}}})});s.push({id:`path-${u}-env`,label:`PATH-${u+1} Env`,block:"path",bindings:[w.type,...w.faders]})}{const k=m.post_filter??lt("Lowpass",1e3,.7),w=rs(k,_=>d({post_filter:_}));s.push({id:`path-${u}-post`,label:`PATH-${u+1} Post`,block:"path",bindings:[w.type,w.freq,w.q]})}}{const u=n.shape_filter??lt("Lowpass",1e3,.7),d=rs(u,m=>e({shape_filter:m}));s.push({id:"fx-shape",label:"FX Shape",block:"fx",bindings:[d.type,d.freq,d.q]})}s.push({id:"fx-drive",label:"FX Drive",block:"fx",bindings:[as("K1","half rect",()=>n.half_rect,u=>e({half_rect:u})),as("K2","hard clip",()=>n.hard_clip!==null,u=>e({hard_clip:u?[1,.8]:null})),ue("K3","hc drv",1,10,.01,()=>n.hard_clip?.[0]??1,u=>{const d=n.hard_clip??[1,.8];e({hard_clip:[u,d[1]]})}),ue("K4","hc thr",.1,1,.01,()=>n.hard_clip?.[1]??.8,u=>{const d=n.hard_clip??[1,.8];e({hard_clip:[d[0],u]})}),ue("F1","clip",0,10,.01,()=>n.soft_clip??0,u=>e({soft_clip:u>0?u:null})),ue("F2","fold",0,10,.01,()=>n.wavefold??0,u=>e({wavefold:u>0?u:null})),ue("F3","crush",0,16,1,()=>n.bit_crush??0,u=>e({bit_crush:u>0?u:null})),ue("F4","decim",0,32,1,()=>n.decimate??0,u=>e({decimate:u>0?u:null}))]});{const u={engine:"Moog",mode:"Lowpass",cutoff:80,resonance:0,env_amt:0,lfo_amt:0,lfo2_amt:0,velo_amt:0,key_track:0,morph:0,morph_lfo_amt:0,morph_lfo2_amt:0,morph_env_amt:0},d=n.main_filter??u,m=["Moog","Svf"],y=["Lowpass","Highpass","Bandpass"];s.push({id:"vcf",label:"VCF Filter",block:"vcf",bindings:[At("K1","mode",y,()=>d.mode,k=>{e({main_filter:{...d,mode:k}})}),At("K2","engine",m,()=>d.engine??"Moog",k=>{e({main_filter:{...d,engine:k}})}),ue("K3","env",-135,135,.1,()=>d.env_amt,k=>e({main_filter:{...d,env_amt:k}})),ue("K4","lfo",-135,135,.1,()=>d.lfo_amt,k=>e({main_filter:{...d,lfo_amt:k}})),ue("K5","morph",0,1,.01,()=>d.morph??0,k=>e({main_filter:{...d,morph:k}})),ue("K6","velo",-135,135,.1,()=>d.velo_amt,k=>e({main_filter:{...d,velo_amt:k}})),ue("K7","key",-2,2,.01,()=>d.key_track,k=>e({main_filter:{...d,key_track:k}})),ue("F1","cutoff",0,135,.1,()=>d.cutoff,k=>e({main_filter:{...d,cutoff:k}})),ue("F2","reso",0,1,.01,()=>d.resonance,k=>e({main_filter:{...d,resonance:k}}))]})}{const u=n.amp_env??it("ADSR"),d=ss(u,m=>{if("__type__"in m){e({amp_env:it(m.__type__)});return}const y=Xt(u),k=u[y];e({amp_env:{[y]:{...k,...m}}})});s.push({id:"amp-env",label:"AMP Env",block:"amp",bindings:[d.type,...d.faders]})}s.push({id:"amp-level",label:"AMP Level",block:"amp",bindings:[ue("F1","amp",0,2,.01,()=>n.amp,u=>e({amp:u})),ue("F2","velo",0,1,.01,()=>n.amp_velo_amt,u=>e({amp_velo_amt:u})),ue("F3","vol lfo",0,1,.01,()=>n.vol_lfo_amt,u=>e({vol_lfo_amt:u})),ue("F4","vol lfo2",0,1,.01,()=>n.vol_lfo2_amt,u=>e({vol_lfo2_amt:u}))]});{const u=n.post_filter??lt("Lowpass",1e3,.7),d=rs(u,m=>e({post_filter:m}));s.push({id:"post-filter",label:"POST Filter",block:"post",bindings:[d.type,d.freq,d.q]})}return s.push({id:"post-pan",label:"POST Pan+Uni",block:"post",bindings:[ue("K1","voices",1,8,1,()=>n.unison,u=>e({unison:u})),ue("K2","detune",0,1,.001,()=>n.unison_detune,u=>e({unison_detune:u})),ue("K3","spread",0,1,.01,()=>n.unison_spread,u=>e({unison_spread:u})),ue("K4","porta",0,500,1,()=>n.portamento,u=>e({portamento:u})),ue("F1","pan",-1,1,.01,()=>n.pan,u=>e({pan:u})),ue("F2","pan lfo",0,1,.01,()=>n.pan_lfo_amt,u=>e({pan_lfo_amt:u})),ue("F3","pan lfo2",0,1,.01,()=>n.pan_lfo2_amt,u=>e({pan_lfo2_amt:u}))]}),s}var rm=T('<input class="rename-input svelte-1yx9lnw"/> <button class="header-btn ok svelte-1yx9lnw">ok</button> <button class="header-btn cancel svelte-1yx9lnw">esc</button>',1),im=T('<span class="selected-label svelte-1yx9lnw"> </span> <button class="header-btn svelte-1yx9lnw" title="Rename instrument">&#9998;</button> <button class="header-btn svelte-1yx9lnw" title="Duplicate instrument">&#10697;</button>',1),om=T('<!> <button class="header-btn new svelte-1yx9lnw" title="New instrument">+ New</button>',1),lm=T('<button class="header-btn midi svelte-1yx9lnw"> </button>'),cm=T('<span class="region-slot svelte-1yx9lnw"> </span>'),um=T('<span class="region-slot svelte-1yx9lnw"> </span>'),dm=T('<div class="region-bar svelte-1yx9lnw"><button class="region-nav svelte-1yx9lnw">&#9664;</button> <span class="region-label svelte-1yx9lnw"> </span> <button class="region-nav svelte-1yx9lnw">&#9654;</button> <span class="region-slots svelte-1yx9lnw"><!> <!></span></div>'),fm=T('<!> <div class="header-right svelte-1yx9lnw"><!> <!></div>',1),mm=T('<pre class="error svelte-1yx9lnw"> </pre>'),pm=T('<p class="placeholder svelte-1yx9lnw">Loading...</p>'),hm=T('<p class="placeholder svelte-1yx9lnw">Select an instrument to edit.</p>'),vm=T('<button class="learn-btn svelte-1yx9lnw">Skip Pads</button>'),_m=T('<div class="learn-overlay svelte-1yx9lnw"><div class="learn-dialog svelte-1yx9lnw"><h3 class="svelte-1yx9lnw">MIDI Learn</h3> <p class="learn-prompt svelte-1yx9lnw"> </p> <div class="learn-progress svelte-1yx9lnw"><span>Encoder</span> <span>Knobs</span> <span>Faders</span> <span>Pads</span></div> <div class="learn-actions svelte-1yx9lnw"><!> <button class="learn-btn cancel svelte-1yx9lnw">Cancel</button></div></div></div>'),gm=T('<div class="detail-panel svelte-1yx9lnw"><div class="detail-scaler svelte-1yx9lnw"><!></div></div> <div class="bottom-section svelte-1yx9lnw"><!> <div class="live-controls svelte-1yx9lnw"><!> <!></div></div> <!>',1),bm=T('<div class="panel svelte-1yx9lnw"><div class="top-section svelte-1yx9lnw"><div class="header svelte-1yx9lnw"><div class="header-left svelte-1yx9lnw"><span class="title svelte-1yx9lnw">Instrument</span> <!></div> <!></div> <!> <!></div> <!></div>');function km(n,e){ke(e,!0);let a=H(_n([])),r=C(()=>Y.selectedInstrument),s=H(null),i=H(4),o=H(null),c=H(null),l=H(!1),f=!1,u=H(!1),d=H(""),m=H("osc"),y=H(null),k=H(_n(new Set)),w=H(!1),_=!1,D=H(void 0),L=H(void 0),z=H(1);He(()=>{if(!t(D)||!t(L))return;const K=new ResizeObserver(()=>{if(!t(D)||!t(L))return;const ie=t(D).clientWidth,Pe=t(D).clientHeight,Ge=t(L).scrollWidth,X=t(L).scrollHeight;Ge>0&&X>0&&h(z,Math.min(ie/Ge,Pe/X,2)*.92)});return K.observe(t(D)),K.observe(t(L)),()=>K.disconnect()});const q={KeyZ:0,KeyS:1,KeyX:2,KeyD:3,KeyC:4,KeyV:5,KeyG:6,KeyB:7,KeyH:8,KeyN:9,KeyJ:10,KeyM:11},S={KeyQ:0,Digit2:1,KeyW:2,Digit3:3,KeyE:4,KeyR:5,Digit5:6,KeyT:7,Digit6:8,KeyY:9,Digit7:10,KeyU:11};He(()=>{Y.revision,Ot(()=>$())}),He(()=>{const K=t(r);Y.revision,K?Ot(()=>N(K)):(h(s,null),h(y,null),h(o,null))}),He(()=>(window.addEventListener("keydown",O),window.addEventListener("keyup",I),()=>{window.removeEventListener("keydown",O),window.removeEventListener("keyup",I)})),He(()=>{if(t(s))return Os.init({onNoteDown(K,ie,Pe){Pe===10?mn.handlePad(K):W(K,ie)},onNoteUp(K,ie){M(K)},onCC(K,ie,Pe){mn.handleCC(K,ie,Pe)}}),()=>Os.destroy()}),He(()=>{if(!t(s))return;const K=sm(t(s),de,De,se);Ot(()=>mn.setRegions(K))});let g=H(-1),R=H(-1);He(()=>{const K=mn.currentRegion;if(K){if(Ot(()=>{h(m,K.block,!0)}),K.block==="osc"){const ie=K.id.match(/^osc-(\d+)$/);h(g,ie?parseInt(ie[1]):K.id==="osc-feedback"?0:K.id==="osc-interact"?1:-1,!0)}if(K.block==="path"){const ie=K.id.match(/^path-(\d+)-/);h(R,ie?parseInt(ie[1]):-1,!0)}}});function O(K){if(K.repeat||K.target instanceof HTMLInputElement||K.target instanceof HTMLTextAreaElement||K.target instanceof HTMLSelectElement||!t(s))return;if(K.code==="Digit1"){j();return}const ie=q[K.code];if(ie!==void 0){const Ge=(t(i)+1)*12+ie;W(Ge);return}const Pe=S[K.code];if(Pe!==void 0){const Ge=(t(i)+2)*12+Pe;W(Ge);return}}function I(K){if(K.target instanceof HTMLInputElement||K.target instanceof HTMLTextAreaElement||K.target instanceof HTMLSelectElement||!t(s))return;const ie=q[K.code];if(ie!==void 0){const Ge=(t(i)+1)*12+ie;M(Ge);return}const Pe=S[K.code];if(Pe!==void 0){const Ge=(t(i)+2)*12+Pe;M(Ge);return}}async function F(){_||(await e.bridge.init(),await e.bridge.resume(),_=!0)}async function W(K,ie=100){await F(),e.bridge.liveKeyDown(K,ie),h(k,new Set([...t(k),K]),!0)}function M(K){e.bridge.liveKeyUp(K);const ie=new Set(t(k));ie.delete(K),h(k,ie,!0)}async function j(){await F(),e.bridge.liveTrigger()}async function E(K=!1){t(s)&&(await F(),K?e.bridge.liveSetConfig(JSON.stringify(t(s))):e.bridge.liveUpdateConfig(JSON.stringify(t(s))))}async function G(){!t(o)?.pattern||!t(r)||(await F(),e.bridge.liveLoadDemo(Y.text,t(r),JSON.stringify(t(o))),h(w,!0),Mn.playing=!0)}function re(){e.bridge.liveStopDemo(),h(w,!1),Mn.playing=!1}He(()=>(Mn.play=G,Mn.stop=re,()=>{Mn.play=null,Mn.stop=null,Mn.playing=!1}));function ne(K){h(o,K,!0),ee()}async function $(){try{const K=await oo(Y.text);h(a,[...new Set(K)],!0)}catch{h(a,[],!0)}}async function N(K){h(l,!0),h(c,null);try{f=!0;const ie=await Ac(Y.text,K);h(s,ie.voice_config,!0),h(i,ie.octave,!0),h(o,ie.demo??null,!0),h(y,await Jr(ie.voice_config),!0),E(!0)}catch(ie){h(c,ie instanceof Error?ie.message:String(ie),!0),h(s,null),h(y,null),h(o,null)}finally{h(l,!1),f=!1}}async function ee(){if(!(!t(s)||!t(r)||f))try{let K=await Tc(t(s));t(i)!==4&&(K=`octave = ${t(i)}
${K}`),t(o)?.pattern&&(K+=`
[demo]
`,K+=`pattern = ${JSON.stringify(t(o).pattern)}
`,t(o).bpm!=null&&(K+=`bpm = ${t(o).bpm}
`),t(o).scale&&(K+=`scale = ${JSON.stringify(t(o).scale)}
`),t(o).root&&(K+=`root = ${JSON.stringify(t(o).root)}
`)),Y.replaceSectionContent("instrument/"+t(r),K),h(y,await Jr(t(s)),!0),E()}catch(K){h(c,K instanceof Error?K.message:String(K),!0)}}function de(K){t(s)&&(h(s,{...t(s),...K},!0),ee())}function De(K,ie){if(!t(s))return;const Pe=[...t(s).oscs];Pe[K]=ie,h(s,{...t(s),oscs:Pe},!0),ee()}function se(K,ie){if(!t(s))return;const Pe=[...t(s).paths];Pe[K]=ie,h(s,{...t(s),paths:Pe},!0),ee()}function pe(){if(!t(s))return 0;let K=0;for(let ie=0;ie<t(s).oscs.length;ie++)t(s).oscs[ie]!==null&&(K=ie+1);return Math.max(K,2)}function Ve(){const K=new Set(t(a));let ie=1;for(;K.has(`inst_${ie}`);)ie++;const Pe=`inst_${ie}`;Y.addSection("instrument/"+Pe,`octave = 4

`),Y.selectedInstrument=Pe}function qe(){t(r)&&(h(d,t(r),!0),h(u,!0))}function Ae(){if(!t(r)||!t(d).trim()){h(u,!1);return}const K=t(d).trim(),ie=t(r);if(K===ie){h(u,!1);return}Y.renameSection("instrument/"+ie,"instrument/"+K),Y.replaceAllInUserText(`instrument ${ie}`,`instrument ${K}`),Y.selectedInstrument=K,h(u,!1)}function we(){h(u,!1)}function Fe(){if(!t(r))return;const K=Y.getSectionContent("instrument/"+t(r));if(K===null)return;const ie=new Set(t(a));let Pe=`${t(r)}_copy`,Ge=2;for(;ie.has(Pe);)Pe=`${t(r)}_copy_${Ge}`,Ge++;Y.addSection("instrument/"+Pe,K),Y.selectedInstrument=Pe}var Qe=bm(),nn=x(Qe),kn=x(nn),Xn=x(kn),qn=v(x(Xn),2);{var on=K=>{var ie=rm(),Pe=Te(ie),Ge=v(Pe,2),X=v(Ge,2);B("keydown",Pe,oe=>{oe.key==="Enter"&&Ae(),oe.key==="Escape"&&we()}),Zn(Pe,()=>t(d),oe=>h(d,oe)),B("click",Ge,Ae),B("click",X,we),A(K,ie)},Pn=K=>{var ie=om(),Pe=Te(ie);{var Ge=oe=>{var ge=im(),Me=Te(ge),Re=x(Me),Ee=v(Me,2),un=v(Ee,2);te(()=>Se(Re,t(r))),B("click",Ee,qe),B("click",un,Fe),A(oe,ge)};J(Pe,oe=>{t(r)&&oe(Ge)})}var X=v(Pe,2);B("click",X,Ve),A(K,ie)};J(qn,K=>{t(u)?K(on):K(Pn,!1)})}var Kt=v(Xn,2);{var Wt=K=>{var ie=fm(),Pe=Te(ie);Ed(Pe,{get activity(){return t(y)},get selected(){return t(m)},onselect:Re=>{h(m,Re,!0),mn.jumpToBlock(Re)}});var Ge=v(Pe,2),X=x(Ge);{var oe=Re=>{var Ee=lm(),un=x(Ee);te(()=>{en(Ee,"title",mn.hasCcMap?"Re-learn MIDI CCs":"Setup MIDI CCs"),Se(un,mn.hasCcMap?"Re-learn MIDI":"Setup MIDI")}),B("click",Ee,()=>mn.startLearn()),A(Re,Ee)};J(X,Re=>{Os.inputs.length>0&&Re(oe)})}var ge=v(X,2);{var Me=Re=>{const Ee=C(()=>mn.currentRegion),un=C(()=>t(Ee)?.bindings??[]),zn=C(()=>t(un).filter(Ne=>Ne.slot.startsWith("K"))),Nn=C(()=>t(un).filter(Ne=>Ne.slot.startsWith("F")));var tn=dm(),dn=x(tn),he=v(dn,2),ln=x(he),An=v(he,2),an=v(An,2),Ce=x(an);{var fe=Ne=>{var Gn=cm(),p=x(Gn);te(b=>Se(p,`K[${b??""}]`),[()=>t(zn).map(b=>b.label).join(" ")]),A(Ne,Gn)};J(Ce,Ne=>{t(zn).length>0&&Ne(fe)})}var rn=v(Ce,2);{var Cn=Ne=>{var Gn=um(),p=x(Gn);te(b=>Se(p,`F[${b??""}]`),[()=>t(Nn).map(b=>b.label).join(" ")]),A(Ne,Gn)};J(rn,Ne=>{t(Nn).length>0&&Ne(Cn)})}te(()=>Se(ln,t(Ee)?.label??"")),Z("mouseenter",tn,()=>le.set("midi-region-bar")),B("click",dn,()=>mn.navigateRegion(-1)),B("click",An,()=>mn.navigateRegion(1)),A(Re,tn)};J(ge,Re=>{mn.regions.length>0&&mn.hasCcMap&&Re(Me)})}A(K,ie)};J(Kt,K=>{t(s)&&K(Wt)})}var Ut=v(kn,2);{var aa=K=>{var ie=mm(),Pe=x(ie);te(()=>Se(Pe,t(c))),A(K,ie)};J(Ut,K=>{t(c)&&K(aa)})}var Qt=v(Ut,2);{var qt=K=>{var ie=pm();A(K,ie)},sa=K=>{var ie=hm();A(K,ie)};J(Qt,K=>{t(l)?K(qt):t(r)||K(sa,1)})}var pt=v(nn,2);{var nt=K=>{var ie=gm(),Pe=Te(ie),Ge=x(Pe);let X;var oe=x(Ge);{var ge=fe=>{af(fe,{get config(){return t(s)},get activity(){return t(y)},updateConfig:de})},Me=fe=>{_f(fe,{get config(){return t(s)},get activity(){return t(y)},setOsc:De,updateConfig:de,get focusTab(){return t(g)}})},Re=fe=>{{let rn=C(pe);Pf(fe,{get config(){return t(s)},get activity(){return t(y)},setPath:se,get oscCount(){return t(rn)},get focusTab(){return t(R)}})}},Ee=fe=>{qf(fe,{get config(){return t(s)},updateConfig:de})},un=fe=>{Of(fe,{get config(){return t(s)},get activity(){return t(y)},updateConfig:de})},zn=fe=>{If(fe,{get config(){return t(s)},get activity(){return t(y)},updateConfig:de})},Nn=fe=>{Vf(fe,{get config(){return t(s)},updateConfig:de})};J(oe,fe=>{t(m)==="mod"?fe(ge):t(m)==="osc"?fe(Me,1):t(m)==="path"?fe(Re,2):t(m)==="fx"?fe(Ee,3):t(m)==="vcf"?fe(un,4):t(m)==="amp"?fe(zn,5):t(m)==="post"&&fe(Nn,6)})}jt(Ge,fe=>h(L,fe),()=>t(L)),jt(Pe,fe=>h(D,fe),()=>t(D));var tn=v(Pe,2),dn=x(tn);Yf(dn,{get demo(){return t(o)},onchange:ne,get octave(){return t(i)},onoctavechange:fe=>{h(i,fe,!0),ee()}});var he=v(dn,2),ln=x(he);Zf(ln,{onhit:j});var An=v(ln,2);Uf(An,{get octave(){return t(i)},onkeydown:W,onkeyup:M,get activeKeys(){return t(k)}});var an=v(tn,2);{var Ce=fe=>{var rn=_m(),Cn=x(rn),Ne=v(x(Cn),2),Gn=x(Ne),p=v(Ne,2),b=x(p);let P;var V=v(b,2);let U;var Q=v(V,2);let ae;var ce=v(Q,2);let be;var Ie=v(p,2),Ke=x(Ie);{var Kn=yn=>{var Wn=vm();B("click",Wn,()=>mn.skipPads()),A(yn,Wn)};J(Ke,yn=>{mn.learnStep.phase==="pads"&&yn(Kn)})}var gn=v(Ke,2);te(()=>{Se(Gn,mn.learnPrompt),P=ve(b,1,"learn-phase svelte-1yx9lnw",null,P,{active:mn.learnStep.phase==="encoder"}),U=ve(V,1,"learn-phase svelte-1yx9lnw",null,U,{active:mn.learnStep.phase==="knobs"}),ae=ve(Q,1,"learn-phase svelte-1yx9lnw",null,ae,{active:mn.learnStep.phase==="faders"}),be=ve(ce,1,"learn-phase svelte-1yx9lnw",null,be,{active:mn.learnStep.phase==="pads"})}),B("click",gn,()=>mn.cancelLearn()),A(fe,rn)};J(an,fe=>{mn.learnStep&&fe(Ce)})}te(()=>X=$e(Ge,"",X,{transform:`scale(${t(z)??""})`})),A(K,ie)};J(pt,K=>{t(s)&&K(nt)})}Z("mouseenter",kn,()=>le.set("instrument-header")),A(n,Qe),ye()}Ye(["keydown","click"]);var ym=T('<textarea spellcheck="false" placeholder="User overrides appear here..." class="svelte-1uk0njm"></textarea>'),wm=T('<textarea readonly="" spellcheck="false" class="readonly svelte-1uk0njm"></textarea>'),xm=T('<textarea readonly="" spellcheck="false" class="readonly svelte-1uk0njm"></textarea>'),Sm=T('<div class="seqn-editor svelte-1uk0njm"><div class="header svelte-1uk0njm"><div class="tabs svelte-1uk0njm"><button>User</button> <button>Library</button> <button>Merged</button></div> <div class="actions svelte-1uk0njm"><button class="svelte-1uk0njm">Reload</button> <button class="reset-btn svelte-1uk0njm">Reset User</button></div></div> <!></div>');function Pm(n,e){ke(e,!0);let a=H("user");function r(){Y.reload()}function s(g){const R=g.target;Y.setUserTextRaw(R.value)}function i(){confirm("Clear all user data? Library entries will remain.")&&Y.resetUser()}var o=Sm(),c=x(o),l=x(c),f=x(l);let u;var d=v(f,2);let m;var y=v(d,2);let k;var w=v(l,2),_=x(w),D=v(_,2),L=v(c,2);{var z=g=>{var R=ym();te(()=>na(R,Y.userText)),B("input",R,s),A(g,R)},q=g=>{var R=wm();te(()=>na(R,Y.libraryText)),A(g,R)},S=g=>{var R=xm();te(()=>na(R,Y.text)),A(g,R)};J(L,g=>{t(a)==="user"?g(z):t(a)==="library"?g(q,1):g(S,!1)})}te(()=>{u=ve(f,1,"tab svelte-1uk0njm",null,u,{active:t(a)==="user"}),m=ve(d,1,"tab svelte-1uk0njm",null,m,{active:t(a)==="library"}),k=ve(y,1,"tab svelte-1uk0njm",null,k,{active:t(a)==="merged"})}),Z("mouseenter",o,()=>le.set("seqn-editor")),B("click",f,()=>{h(a,"user")}),B("click",d,()=>{h(a,"library")}),B("click",y,()=>{h(a,"merged")}),B("click",_,r),Z("mouseenter",_,()=>le.set("reload-button")),B("click",D,i),A(n,o),ye()}Ye(["click","input"]);function kr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var ba=kr();function Po(n){ba=n}var ia={exec:()=>null};function ze(n,e=""){let a=typeof n=="string"?n:n.source,r={replace:(s,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(Vn.caret,"$1"),a=a.replace(s,o),r},getRegex:()=>new RegExp(a,e)};return r}var Am=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Vn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}>`)},Tm=/^(?:[ \t]*(?:\n|$))+/,Dm=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Rm=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,$a=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,qm=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,yr=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Ao=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,To=ze(Ao).replace(/bull/g,yr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Cm=ze(Ao).replace(/bull/g,yr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),wr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Lm=/^[^\n]+/,xr=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Mm=ze(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",xr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Em=ze(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,yr).getRegex(),Rs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Sr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Fm=ze("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Sr).replace("tag",Rs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Do=ze(wr).replace("hr",$a).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rs).getRegex(),Om=ze(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Do).getRegex(),Pr={blockquote:Om,code:Dm,def:Mm,fences:Rm,heading:qm,hr:$a,html:Fm,lheading:To,list:Em,newline:Tm,paragraph:Do,table:ia,text:Lm},ri=ze("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",$a).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rs).getRegex(),zm={...Pr,lheading:Cm,table:ri,paragraph:ze(wr).replace("hr",$a).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ri).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rs).getRegex()},Nm={...Pr,html:ze(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Sr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ia,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ze(wr).replace("hr",$a).replace("heading",` *#{1,6} *[^
]`).replace("lheading",To).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Im=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,jm=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ro=/^( {2,}|\\)\n(?!\s*$)/,Bm=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,qs=/[\p{P}\p{S}]/u,Ar=/[\s\p{P}\p{S}]/u,qo=/[^\s\p{P}\p{S}]/u,Hm=ze(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ar).getRegex(),Co=/(?!~)[\p{P}\p{S}]/u,Vm=/(?!~)[\s\p{P}\p{S}]/u,Gm=/(?:[^\s\p{P}\p{S}]|~)/u,Lo=/(?![*_])[\p{P}\p{S}]/u,Km=/(?![*_])[\s\p{P}\p{S}]/u,Wm=/(?:[^\s\p{P}\p{S}]|[*_])/u,Um=ze(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Am?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Mo=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Qm=ze(Mo,"u").replace(/punct/g,qs).getRegex(),Zm=ze(Mo,"u").replace(/punct/g,Co).getRegex(),Eo="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Jm=ze(Eo,"gu").replace(/notPunctSpace/g,qo).replace(/punctSpace/g,Ar).replace(/punct/g,qs).getRegex(),Xm=ze(Eo,"gu").replace(/notPunctSpace/g,Gm).replace(/punctSpace/g,Vm).replace(/punct/g,Co).getRegex(),Ym=ze("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,qo).replace(/punctSpace/g,Ar).replace(/punct/g,qs).getRegex(),$m=ze(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Lo).getRegex(),ep="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",np=ze(ep,"gu").replace(/notPunctSpace/g,Wm).replace(/punctSpace/g,Km).replace(/punct/g,Lo).getRegex(),tp=ze(/\\(punct)/,"gu").replace(/punct/g,qs).getRegex(),ap=ze(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),sp=ze(Sr).replace("(?:-->|$)","-->").getRegex(),rp=ze("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",sp).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),gs=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,ip=ze(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",gs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Fo=ze(/^!?\[(label)\]\[(ref)\]/).replace("label",gs).replace("ref",xr).getRegex(),Oo=ze(/^!?\[(ref)\](?:\[\])?/).replace("ref",xr).getRegex(),op=ze("reflink|nolink(?!\\()","g").replace("reflink",Fo).replace("nolink",Oo).getRegex(),ii=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Tr={_backpedal:ia,anyPunctuation:tp,autolink:ap,blockSkip:Um,br:Ro,code:jm,del:ia,delLDelim:ia,delRDelim:ia,emStrongLDelim:Qm,emStrongRDelimAst:Jm,emStrongRDelimUnd:Ym,escape:Im,link:ip,nolink:Oo,punctuation:Hm,reflink:Fo,reflinkSearch:op,tag:rp,text:Bm,url:ia},lp={...Tr,link:ze(/^!?\[(label)\]\((.*?)\)/).replace("label",gs).getRegex(),reflink:ze(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",gs).getRegex()},tr={...Tr,emStrongRDelimAst:Xm,emStrongLDelim:Zm,delLDelim:$m,delRDelim:np,url:ze(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ii).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ze(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ii).getRegex()},cp={...tr,br:ze(Ro).replace("{2,}","*").getRegex(),text:ze(tr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},is={normal:Pr,gfm:zm,pedantic:Nm},za={normal:Tr,gfm:tr,breaks:cp,pedantic:lp},up={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},oi=n=>up[n];function Pt(n,e){if(e){if(Vn.escapeTest.test(n))return n.replace(Vn.escapeReplace,oi)}else if(Vn.escapeTestNoEncode.test(n))return n.replace(Vn.escapeReplaceNoEncode,oi);return n}function li(n){try{n=encodeURI(n).replace(Vn.percentDecode,"%")}catch{return null}return n}function ci(n,e){let a=n.replace(Vn.findPipe,(i,o,c)=>{let l=!1,f=o;for(;--f>=0&&c[f]==="\\";)l=!l;return l?"|":" |"}),r=a.split(Vn.splitPipe),s=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(Vn.slashPipe,"|");return r}function Na(n,e,a){let r=n.length;if(r===0)return"";let s=0;for(;s<r&&n.charAt(r-s-1)===e;)s++;return n.slice(0,r-s)}function dp(n,e){if(n.indexOf(e[1])===-1)return-1;let a=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])a++;else if(n[r]===e[1]&&(a--,a<0))return r;return a>0?-2:-1}function fp(n,e=0){let a=e,r="";for(let s of n)if(s==="	"){let i=4-a%4;r+=" ".repeat(i),a+=i}else r+=s,a++;return r}function ui(n,e,a,r,s){let i=e.href,o=e.title||null,c=n[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;let l={type:n[0].charAt(0)==="!"?"image":"link",raw:a,href:i,title:o,text:c,tokens:r.inlineTokens(c)};return r.state.inLink=!1,l}function mp(n,e,a){let r=n.match(a.other.indentCodeCompensation);if(r===null)return e;let s=r[1];return e.split(`
`).map(i=>{let o=i.match(a.other.beginningSpace);if(o===null)return i;let[c]=o;return c.length>=s.length?i.slice(s.length):i}).join(`
`)}var bs=class{options;rules;lexer;constructor(n){this.options=n||ba}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let a=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?a:Na(a,`
`)}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let a=e[0],r=mp(a,e[3]||"",this.rules);return{type:"code",raw:a,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let a=e[2].trim();if(this.rules.other.endingHash.test(a)){let r=Na(a,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(a=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:a,tokens:this.lexer.inline(a)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:Na(e[0],`
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
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:s}}}list(n){let e=this.rules.block.list.exec(n);if(e){let a=e[1].trim(),r=a.length>1,s={type:"list",raw:"",ordered:r,start:r?+a.slice(0,-1):"",loose:!1,items:[]};a=r?`\\d{1,9}\\${a.slice(-1)}`:`\\${a}`,this.options.pedantic&&(a=r?a:"[*+-]");let i=this.rules.other.listItemRegex(a),o=!1;for(;n;){let l=!1,f="",u="";if(!(e=i.exec(n))||this.rules.block.hr.test(n))break;f=e[0],n=n.substring(f.length);let d=fp(e[2].split(`
`,1)[0],e[1].length),m=n.split(`
`,1)[0],y=!d.trim(),k=0;if(this.options.pedantic?(k=2,u=d.trimStart()):y?k=e[1].length+1:(k=d.search(this.rules.other.nonSpaceChar),k=k>4?1:k,u=d.slice(k),k+=e[1].length),y&&this.rules.other.blankLine.test(m)&&(f+=m+`
`,n=n.substring(m.length+1),l=!0),!l){let w=this.rules.other.nextBulletRegex(k),_=this.rules.other.hrRegex(k),D=this.rules.other.fencesBeginRegex(k),L=this.rules.other.headingBeginRegex(k),z=this.rules.other.htmlBeginRegex(k),q=this.rules.other.blockquoteBeginRegex(k);for(;n;){let S=n.split(`
`,1)[0],g;if(m=S,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),g=m):g=m.replace(this.rules.other.tabCharGlobal,"    "),D.test(m)||L.test(m)||z.test(m)||q.test(m)||w.test(m)||_.test(m))break;if(g.search(this.rules.other.nonSpaceChar)>=k||!m.trim())u+=`
`+g.slice(k);else{if(y||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||D.test(d)||L.test(d)||_.test(d))break;u+=`
`+m}y=!m.trim(),f+=S+`
`,n=n.substring(S.length+1),d=g.slice(k)}}s.loose||(o?s.loose=!0:this.rules.other.doubleBlankLine.test(f)&&(o=!0)),s.items.push({type:"list_item",raw:f,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),s.raw+=f}let c=s.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let l of s.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}}let f=this.rules.other.listTaskCheckbox.exec(l.raw);if(f){let u={type:"checkbox",raw:f[0]+" ",checked:f[0]!=="[ ]"};l.checked=u.checked,s.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=u.raw+l.tokens[0].raw,l.tokens[0].text=u.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(u)):l.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):l.tokens.unshift(u)}}if(!s.loose){let f=l.tokens.filter(d=>d.type==="space"),u=f.length>0&&f.some(d=>this.rules.other.anyLine.test(d.raw));s.loose=u}}if(s.loose)for(let l of s.items){l.loose=!0;for(let f of l.tokens)f.type==="text"&&(f.type="paragraph")}return s}}html(n){let e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){let e=this.rules.block.def.exec(n);if(e){let a=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:a,raw:e[0],href:r,title:s}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let a=ci(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(a.length===r.length){for(let o of r)this.rules.other.tableAlignRight.test(o)?i.align.push("right"):this.rules.other.tableAlignCenter.test(o)?i.align.push("center"):this.rules.other.tableAlignLeft.test(o)?i.align.push("left"):i.align.push(null);for(let o=0;o<a.length;o++)i.header.push({text:a[o],tokens:this.lexer.inline(a[o]),header:!0,align:i.align[o]});for(let o of s)i.rows.push(ci(o,i.header.length).map((c,l)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:i.align[l]})));return i}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let a=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:a,tokens:this.lexer.inline(a)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let a=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(a)){if(!this.rules.other.endAngleBracket.test(a))return;let i=Na(a.slice(0,-1),"\\");if((a.length-i.length)%2===0)return}else{let i=dp(e[2],"()");if(i===-2)return;if(i>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],s=i[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(a)?r=r.slice(1):r=r.slice(1,-1)),ui(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let a;if((a=this.rules.inline.reflink.exec(n))||(a=this.rules.inline.nolink.exec(n))){let r=(a[2]||a[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){let i=a[0].charAt(0);return{type:"text",raw:i,text:i}}return ui(a,s,a[0],this.lexer,this.rules)}}emStrong(n,e,a=""){let r=this.rules.inline.emStrongLDelim.exec(n);if(!(!r||r[3]&&a.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!a||this.rules.inline.punctuation.exec(a))){let s=[...r[0]].length-1,i,o,c=s,l=0,f=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*n.length+s);(r=f.exec(e))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(o=[...i].length,r[3]||r[4]){c+=o;continue}else if((r[5]||r[6])&&s%3&&!((s+o)%3)){l+=o;continue}if(c-=o,c>0)continue;o=Math.min(o,o+c+l);let u=[...r[0]][0].length,d=n.slice(0,s+r.index+u+o);if(Math.min(s,o)%2){let y=d.slice(1,-1);return{type:"em",raw:d,text:y,tokens:this.lexer.inlineTokens(y)}}let m=d.slice(2,-2);return{type:"strong",raw:d,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let a=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(a),s=this.rules.other.startingSpaceChar.test(a)&&this.rules.other.endingSpaceChar.test(a);return r&&s&&(a=a.substring(1,a.length-1)),{type:"codespan",raw:e[0],text:a}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,a=""){let r=this.rules.inline.delLDelim.exec(n);if(r&&(!r[1]||!a||this.rules.inline.punctuation.exec(a))){let s=[...r[0]].length-1,i,o,c=s,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*n.length+s);(r=l.exec(e))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(o=[...i].length,o!==s))continue;if(r[3]||r[4]){c+=o;continue}if(c-=o,c>0)continue;o=Math.min(o,o+c);let f=[...r[0]][0].length,u=n.slice(0,s+r.index+f+o),d=u.slice(s,-s);return{type:"del",raw:u,text:d,tokens:this.lexer.inlineTokens(d)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let a,r;return e[2]==="@"?(a=e[1],r="mailto:"+a):(a=e[1],r=a),{type:"link",raw:e[0],text:a,href:r,tokens:[{type:"text",raw:a,text:a}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let a,r;if(e[2]==="@")a=e[0],r="mailto:"+a;else{let s;do s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(s!==e[0]);a=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:a,href:r,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let a=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:a}}}},_t=class ar{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ba,this.options.tokenizer=this.options.tokenizer||new bs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let a={other:Vn,block:is.normal,inline:za.normal};this.options.pedantic?(a.block=is.pedantic,a.inline=za.pedantic):this.options.gfm&&(a.block=is.gfm,this.options.breaks?a.inline=za.breaks:a.inline=za.gfm),this.tokenizer.rules=a}static get rules(){return{block:is,inline:za}}static lex(e,a){return new ar(a).lex(e)}static lexInline(e,a){return new ar(a).inlineTokens(e)}lex(e){e=e.replace(Vn.carriageReturn,`
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
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${Pt(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:a}){let r=this.parser.parseInline(a),s=li(n);if(s===null)return r;n=s;let i='<a href="'+n+'"';return e&&(i+=' title="'+Pt(e)+'"'),i+=">"+r+"</a>",i}image({href:n,title:e,text:a,tokens:r}){r&&(a=this.parser.parseInline(r,this.parser.textRenderer));let s=li(n);if(s===null)return Pt(a);n=s;let i=`<img src="${n}" alt="${Pt(a)}"`;return e&&(i+=` title="${Pt(e)}"`),i+=">",i}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:Pt(n.text)}},Dr=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},gt=class sr{options;renderer;textRenderer;constructor(e){this.options=e||ba,this.options.renderer=this.options.renderer||new ks,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Dr}static parse(e,a){return new sr(a).parse(e)}static parseInline(e,a){return new sr(a).parseInline(e)}parse(e){let a="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let o=s,c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){a+=c||"";continue}}let i=s;switch(i.type){case"space":{a+=this.renderer.space(i);break}case"hr":{a+=this.renderer.hr(i);break}case"heading":{a+=this.renderer.heading(i);break}case"code":{a+=this.renderer.code(i);break}case"table":{a+=this.renderer.table(i);break}case"blockquote":{a+=this.renderer.blockquote(i);break}case"list":{a+=this.renderer.list(i);break}case"checkbox":{a+=this.renderer.checkbox(i);break}case"html":{a+=this.renderer.html(i);break}case"def":{a+=this.renderer.def(i);break}case"paragraph":{a+=this.renderer.paragraph(i);break}case"text":{a+=this.renderer.text(i);break}default:{let o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return a}parseInline(e,a=this.renderer){let r="";for(let s=0;s<e.length;s++){let i=e[s];if(this.options.extensions?.renderers?.[i.type]){let c=this.options.extensions.renderers[i.type].call({parser:this},i);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=c||"";continue}}let o=i;switch(o.type){case"escape":{r+=a.text(o);break}case"html":{r+=a.html(o);break}case"link":{r+=a.link(o);break}case"image":{r+=a.image(o);break}case"checkbox":{r+=a.checkbox(o);break}case"strong":{r+=a.strong(o);break}case"em":{r+=a.em(o);break}case"codespan":{r+=a.codespan(o);break}case"br":{r+=a.br(o);break}case"del":{r+=a.del(o);break}case"text":{r+=a.text(o);break}default:{let c='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}},ja=class{options;block;constructor(n){this.options=n||ba}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?_t.lex:_t.lexInline}provideParser(){return this.block?gt.parse:gt.parseInline}},pp=class{defaults=kr();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=gt;Renderer=ks;TextRenderer=Dr;Lexer=_t;Tokenizer=bs;Hooks=ja;constructor(...n){this.use(...n)}walkTokens(n,e){let a=[];for(let r of n)switch(a=a.concat(e.call(this,r)),r.type){case"table":{let s=r;for(let i of s.header)a=a.concat(this.walkTokens(i.tokens,e));for(let i of s.rows)for(let o of i)a=a.concat(this.walkTokens(o.tokens,e));break}case"list":{let s=r;a=a.concat(this.walkTokens(s.items,e));break}default:{let s=r;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(i=>{let o=s[i].flat(1/0);a=a.concat(this.walkTokens(o,e))}):s.tokens&&(a=a.concat(this.walkTokens(s.tokens,e)))}}return a}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(a=>{let r={...a};if(r.async=this.defaults.async||r.async||!1,a.extensions&&(a.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let i=e.renderers[s.name];i?e.renderers[s.name]=function(...o){let c=s.renderer.apply(this,o);return c===!1&&(c=i.apply(this,o)),c}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[s.level];i?i.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),a.renderer){let s=this.defaults.renderer||new ks(this.defaults);for(let i in a.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let o=i,c=a.renderer[o],l=s[o];s[o]=(...f)=>{let u=c.apply(s,f);return u===!1&&(u=l.apply(s,f)),u||""}}r.renderer=s}if(a.tokenizer){let s=this.defaults.tokenizer||new bs(this.defaults);for(let i in a.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let o=i,c=a.tokenizer[o],l=s[o];s[o]=(...f)=>{let u=c.apply(s,f);return u===!1&&(u=l.apply(s,f)),u}}r.tokenizer=s}if(a.hooks){let s=this.defaults.hooks||new ja;for(let i in a.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let o=i,c=a.hooks[o],l=s[o];ja.passThroughHooks.has(i)?s[o]=f=>{if(this.defaults.async&&ja.passThroughHooksRespectAsync.has(i))return(async()=>{let d=await c.call(s,f);return l.call(s,d)})();let u=c.call(s,f);return l.call(s,u)}:s[o]=(...f)=>{if(this.defaults.async)return(async()=>{let d=await c.apply(s,f);return d===!1&&(d=await l.apply(s,f)),d})();let u=c.apply(s,f);return u===!1&&(u=l.apply(s,f)),u}}r.hooks=s}if(a.walkTokens){let s=this.defaults.walkTokens,i=a.walkTokens;r.walkTokens=function(o){let c=[];return c.push(i.call(this,o)),s&&(c=c.concat(s.call(this,o))),c}}this.defaults={...this.defaults,...r}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return _t.lex(n,e??this.defaults)}parser(n,e){return gt.parse(n,e??this.defaults)}parseMarkdown(n){return(e,a)=>{let r={...a},s={...this.defaults,...r},i=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=n),s.async)return(async()=>{let o=s.hooks?await s.hooks.preprocess(e):e,c=await(s.hooks?await s.hooks.provideLexer():n?_t.lex:_t.lexInline)(o,s),l=s.hooks?await s.hooks.processAllTokens(c):c;s.walkTokens&&await Promise.all(this.walkTokens(l,s.walkTokens));let f=await(s.hooks?await s.hooks.provideParser():n?gt.parse:gt.parseInline)(l,s);return s.hooks?await s.hooks.postprocess(f):f})().catch(i);try{s.hooks&&(e=s.hooks.preprocess(e));let o=(s.hooks?s.hooks.provideLexer():n?_t.lex:_t.lexInline)(e,s);s.hooks&&(o=s.hooks.processAllTokens(o)),s.walkTokens&&this.walkTokens(o,s.walkTokens);let c=(s.hooks?s.hooks.provideParser():n?gt.parse:gt.parseInline)(o,s);return s.hooks&&(c=s.hooks.postprocess(c)),c}catch(o){return i(o)}}}onError(n,e){return a=>{if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let r="<p>An error occurred:</p><pre>"+Pt(a.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(a);throw a}}},va=new pp;function Je(n,e){return va.parse(n,e)}Je.options=Je.setOptions=function(n){return va.setOptions(n),Je.defaults=va.defaults,Po(Je.defaults),Je};Je.getDefaults=kr;Je.defaults=ba;Je.use=function(...n){return va.use(...n),Je.defaults=va.defaults,Po(Je.defaults),Je};Je.walkTokens=function(n,e){return va.walkTokens(n,e)};Je.parseInline=va.parseInline;Je.Parser=gt;Je.parser=gt.parse;Je.Renderer=ks;Je.TextRenderer=Dr;Je.Lexer=_t;Je.lexer=_t.lex;Je.Tokenizer=bs;Je.Hooks=ja;Je.parse=Je;Je.options;Je.setOptions;Je.use;Je.walkTokens;Je.parseInline;gt.parse;_t.lex;const hp=`# DAW Guide

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
`,vp=`# SEQN Format Reference

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
`,_p=`# Synth Architecture

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
`;var gp=T("<a> </a>"),bp=T('<nav class="help-toc svelte-d7kilv"></nav>'),kp=T('<div class="help-viewer svelte-d7kilv"><div class="help-tabs svelte-d7kilv"><!></div> <div class="help-body svelte-d7kilv"><div class="help-content svelte-d7kilv"><!></div> <!></div></div>');function yp(n,e){ke(e,!0);const a=["DAW","Sequencer","Synth"],r=[hp,vp,_p];let s=H(0);function i(S){const g=[],R=new Map,O=new Je.Renderer;return O.heading=({text:F,depth:W})=>{if(W===2||W===3){let M=F.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");const j=R.get(M)??0;return R.set(M,j+1),j>0&&(M=`${M}-${j}`),g.push({level:W,id:M,text:F}),`<h${W} id="${M}">${F}</h${W}>`}return`<h${W}>${F}</h${W}>`},{html:Je(S,{renderer:O}),toc:g}}let o=C(()=>i(r[t(s)])),c=H(""),l=H(void 0);function f(S){const g=t(o).toc;for(let R=g.length-1;R>=0;R--)if(g[R].id===S){if(g[R].level===2)return S;for(let O=R-1;O>=0;O--)if(g[O].level===2)return g[O].id}return""}let u=C(()=>f(t(c))),d=C(()=>{const S=t(o).toc,g=[];let R="";for(const O of S)O.level===2?(R=O.id,g.push(O)):O.level===3&&R===t(u)&&g.push(O);return g});He(()=>{t(s),h(c,""),t(l)&&(t(l).scrollTop=0)}),He(()=>{if(t(s),!t(l))return;const S=requestAnimationFrame(()=>{const R=t(l).querySelectorAll("h2[id], h3[id]");if(!R.length)return;const O=new IntersectionObserver(I=>{for(const F of I)F.isIntersecting&&h(c,F.target.id,!0)},{root:t(l),rootMargin:"0px 0px -80% 0px",threshold:0});for(const I of R)O.observe(I);g=()=>O.disconnect()});let g;return()=>{cancelAnimationFrame(S),g?.()}});function m(S){t(l)?.querySelector(`#${CSS.escape(S)}`)?.scrollIntoView({behavior:"smooth",block:"start"})}var y=kp(),k=x(y),w=x(k);vo(w,{get blocks(){return a},get selected(){return t(s)},onselect:S=>{h(s,S,!0)}});var _=v(k,2),D=x(_),L=x(D);ao(L,()=>t(o).html),jt(D,S=>h(l,S),()=>t(l));var z=v(D,2);{var q=S=>{var g=bp();Ue(g,21,()=>t(d),We,(R,O)=>{var I=gp();let F;var W=x(I);te(()=>{F=ve(I,1,"toc-link svelte-d7kilv",null,F,{"toc-h3":t(O).level===3,active:t(c)===t(O).id,"active-parent":t(O).level===2&&t(O).id===t(u)&&t(c)!==t(O).id}),en(I,"href",`#${t(O).id??""}`),Se(W,t(O).text)}),B("click",I,M=>{M.preventDefault(),m(t(O).id)}),A(R,I)}),A(S,g)};J(z,S=>{t(o).toc.length>0&&S(q)})}A(n,y),ye()}Ye(["click"]);var wp=T('<div class="instrument-mode svelte-1n46o8q"><div class="instrument-sidebar svelte-1n46o8q"><!></div> <div class="instrument-content svelte-1n46o8q"><!></div></div>'),xp=T('<div class="seqn-mode svelte-1n46o8q"><!></div>'),Sp=T('<div class="app svelte-1n46o8q"><!> <div class="content svelte-1n46o8q"><!></div></div>');function Pp(n,e){ke(e,!0);const a=new xc;He(()=>{document.documentElement.className=Dn.resolved==="dark"?"theme-dark":"theme-light"}),Ze.setBridge(a);let r=H("song"),s=H(_n([]));He(()=>{Y.revision,i()});async function i(){try{const _=await oo(Y.text);h(s,[...new Set(_)],!0)}catch{h(s,[],!0)}}let o=C(()=>t(s).map(_=>({id:_,label:_}))),c=C(()=>new Set(t(s).filter(_=>Y.isLibraryOnly("instrument/"+_))));var l=Sp(),f=x(l);Wc(f,{get bridge(){return a},get mode(){return t(r)},onmode:_=>{h(r,_,!0)}});var u=v(f,2),d=x(u);{var m=_=>{Td(_,{})},y=_=>{var D=wp(),L=x(D),z=x(L);Ws(z,{title:"Instruments",get items(){return t(o)},get activeId(){return Y.selectedInstrument},get libraryIds(){return t(c)},onselect:g=>{Y.selectedInstrument=g},hint:"instrument-sidebar"});var q=v(L,2),S=x(q);km(S,{get bridge(){return a}}),A(_,D)},k=_=>{var D=xp(),L=x(D);Pm(L,{}),A(_,D)},w=_=>{yp(_,{})};J(d,_=>{t(r)==="song"?_(m):t(r)==="instrument"?_(y,1):t(r)==="seqn"?_(k,2):t(r)==="help"&&_(w,3)})}A(n,l),ye()}ic(Pp,{target:document.getElementById("app")});
