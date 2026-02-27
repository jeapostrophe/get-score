(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const Fs=!1;var bs=Array.isArray,Bo=Array.prototype.indexOf,Sa=Array.prototype.includes,ys=Array.from,Ho=Object.defineProperty,ba=Object.getOwnPropertyDescriptor,Vo=Object.getOwnPropertyDescriptors,ui=Object.prototype,Go=Array.prototype,ar=Object.getPrototypeOf,Mr=Object.isExtensible;const Ko=()=>{};function Wo(n){for(var e=0;e<n.length;e++)n[e]()}function di(){var n,e,a=new Promise((r,s)=>{n=r,e=s});return{promise:a,resolve:n,reject:e}}const Mn=2,Va=4,ks=8,fi=1<<24,zt=16,vt=32,pa=64,mi=128,nt=512,Rn=1024,En=2048,ht=4096,Un=8192,Lt=16384,Ua=32768,ua=65536,Er=1<<17,pi=1<<18,Ma=1<<19,Uo=1<<20,qt=1<<25,da=65536,Os=1<<21,sr=1<<22,Vt=1<<23,oa=Symbol("$state"),Qo=Symbol("legacy props"),Zo=Symbol(""),sa=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Jo=globalThis.document?.contentType?.includes("xml")??!1;function Xo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Yo(n,e,a){throw new Error("https://svelte.dev/e/each_key_duplicate")}function $o(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function el(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nl(n){throw new Error("https://svelte.dev/e/effect_orphan")}function tl(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function al(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function sl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function rl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function il(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ol(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ll=1,cl=2,hi=4,ul=8,dl=16,fl=1,ml=4,pl=8,hl=16,vl=1,_l=2,qn=Symbol(),vi="http://www.w3.org/1999/xhtml";function gl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function bl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function _i(n){return n===this.v}function yl(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function gi(n){return!yl(n,this.v)}let kl=!1;const wl=[];function Ln(n,e=!1,a=!1){return rs(n,new Map,"",wl,null,a)}function rs(n,e,a,r,s=null,i=!1){if(typeof n=="object"&&n!==null){var o=e.get(n);if(o!==void 0)return o;if(n instanceof Map)return new Map(n);if(n instanceof Set)return new Set(n);if(bs(n)){var c=Array(n.length);e.set(n,c),s!==null&&e.set(s,c);for(var l=0;l<n.length;l+=1){var f=n[l];l in n&&(c[l]=rs(f,e,a,r,null,i))}return c}if(ar(n)===ui){c={},e.set(n,c),s!==null&&e.set(s,c);for(var u in n)c[u]=rs(n[u],e,a,r,null,i);return c}if(n instanceof Date)return structuredClone(n);if(typeof n.toJSON=="function"&&!i)return rs(n.toJSON(),e,a,r,n)}if(n instanceof EventTarget)return n;try{return structuredClone(n)}catch{return n}}let st=null;function Pa(n){st=n}function be(n,e=!1,a){st={p:st,i:!1,c:null,e:null,s:n,x:null,l:null}}function ye(n){var e=st,a=e.e;if(a!==null){e.e=null;for(var r of a)Ni(r)}return n!==void 0&&(e.x=n),e.i=!0,st=e.p,n??{}}function bi(){return!0}let ra=[];function yi(){var n=ra;ra=[],Wo(n)}function Mt(n){if(ra.length===0&&!Ia){var e=ra;queueMicrotask(()=>{e===ra&&yi()})}ra.push(n)}function xl(){for(;ra.length>0;)yi()}function ki(n){var e=Ge;if(e===null)return Fe.f|=Vt,n;if((e.f&Ua)===0&&(e.f&Va)===0)throw n;Aa(n,e)}function Aa(n,e){for(;e!==null;){if((e.f&mi)!==0){if((e.f&Ua)===0)throw n;try{e.b.error(n);return}catch(a){n=a}}e=e.parent}throw n}const Sl=-7169;function vn(n,e){n.f=n.f&Sl|e}function rr(n){(n.f&nt)!==0||n.deps===null?vn(n,Rn):vn(n,ht)}function wi(n){if(n!==null)for(const e of n)(e.f&Mn)===0||(e.f&da)===0||(e.f^=da,wi(e.deps))}function xi(n,e,a){(n.f&En)!==0?e.add(n):(n.f&ht)!==0&&a.add(n),wi(n.deps),vn(n,Rn)}const Ya=new Set;let Ne=null,us=null,ft=null,jn=[],ws=null,zs=!1,Ia=!1;class Gt{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=0;#a=0;#o=null;#r=new Set;#s=new Set;#i=new Map;is_fork=!1;#l=!1;is_deferred(){return this.is_fork||this.#a>0}skip_effect(e){this.#i.has(e)||this.#i.set(e,{d:[],m:[]})}unskip_effect(e){var a=this.#i.get(e);if(a){this.#i.delete(e);for(var r of a.d)vn(r,En),mt(r);for(r of a.m)vn(r,ht),mt(r)}}process(e){jn=[],this.apply();var a=[],r=[];for(const s of e)this.#c(s,a,r);if(this.is_deferred()){this.#u(r),this.#u(a);for(const[s,i]of this.#i)Ti(s,i)}else{for(const s of this.#e)s();this.#e.clear(),this.#n===0&&this.#d(),us=this,Ne=null,Fr(r),Fr(a),us=null,this.#o?.resolve()}ft=null}#c(e,a,r){e.f^=Rn;for(var s=e.first,i=null;s!==null;){var o=s.f,c=(o&(vt|pa))!==0,l=c&&(o&Rn)!==0,f=l||(o&Un)!==0||this.#i.has(s);if(!f&&s.fn!==null){c?s.f^=Rn:i!==null&&(o&(Va|ks|fi))!==0?i.b.defer_effect(s):(o&Va)!==0?a.push(s):Ja(s)&&((o&zt)!==0&&this.#s.add(s),Da(s));var u=s.first;if(u!==null){s=u;continue}}var d=s.parent;for(s=s.next;s===null&&d!==null;)d===i&&(i=null),s=d.next,d=d.parent}}#u(e){for(var a=0;a<e.length;a+=1)xi(e[a],this.#r,this.#s)}capture(e,a){a!==qn&&!this.previous.has(e)&&this.previous.set(e,a),(e.f&Vt)===0&&(this.current.set(e,e.v),ft?.set(e,e.v))}activate(){Ne=this,this.apply()}deactivate(){Ne===this&&(Ne=null,ft=null)}flush(){if(this.activate(),jn.length>0){if(Si(),Ne!==null&&Ne!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#t)e(this);this.#t.clear()}#d(){if(Ya.size>1){this.previous.clear();var e=ft,a=!0;for(const s of Ya){if(s===this){a=!1;continue}const i=[];for(const[c,l]of this.current){if(s.current.has(c))if(a&&l!==s.current.get(c))s.current.set(c,l);else continue;i.push(c)}if(i.length===0)continue;const o=[...s.current.keys()].filter(c=>!this.current.has(c));if(o.length>0){var r=jn;jn=[];const c=new Set,l=new Map;for(const f of i)Pi(f,o,c,l);if(jn.length>0){Ne=s,s.apply();for(const f of jn)s.#c(f,[],[]);s.deactivate()}jn=r}}Ne=null,ft=e}this.committed=!0,Ya.delete(this)}increment(e){this.#n+=1,e&&(this.#a+=1)}decrement(e){this.#n-=1,e&&(this.#a-=1),!this.#l&&(this.#l=!0,Mt(()=>{this.#l=!1,this.is_deferred()?jn.length>0&&this.flush():this.revive()}))}revive(){for(const e of this.#r)this.#s.delete(e),vn(e,En),mt(e);for(const e of this.#s)vn(e,ht),mt(e);this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#o??=di()).promise}static ensure(){if(Ne===null){const e=Ne=new Gt;Ya.add(Ne),Ia||Mt(()=>{Ne===e&&e.flush()})}return Ne}apply(){}}function Pl(n){var e=Ia;Ia=!0;try{for(var a;;){if(xl(),jn.length===0&&(Ne?.flush(),jn.length===0))return ws=null,a;Si()}}finally{Ia=e}}function Si(){zs=!0;var n=null;try{for(var e=0;jn.length>0;){var a=Gt.ensure();if(e++>1e3){var r,s;Al()}a.process(jn),Kt.clear()}}finally{jn=[],zs=!1,ws=null}}function Al(){try{tl()}catch(n){Aa(n,ws)}}let Rt=null;function Fr(n){var e=n.length;if(e!==0){for(var a=0;a<e;){var r=n[a++];if((r.f&(Lt|Un))===0&&Ja(r)&&(Rt=new Set,Da(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Bi(r),Rt?.size>0)){Kt.clear();for(const s of Rt){if((s.f&(Lt|Un))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)Rt.has(o)&&(Rt.delete(o),i.push(o)),o=o.parent;for(let c=i.length-1;c>=0;c--){const l=i[c];(l.f&(Lt|Un))===0&&Da(l)}}Rt.clear()}}Rt=null}}function Pi(n,e,a,r){if(!a.has(n)&&(a.add(n),n.reactions!==null))for(const s of n.reactions){const i=s.f;(i&Mn)!==0?Pi(s,e,a,r):(i&(sr|zt))!==0&&(i&En)===0&&Ai(s,e,r)&&(vn(s,En),mt(s))}}function Ai(n,e,a){const r=a.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const s of n.deps){if(Sa.call(e,s))return!0;if((s.f&Mn)!==0&&Ai(s,e,a))return a.set(s,!0),!0}return a.set(n,!1),!1}function mt(n){for(var e=ws=n;e.parent!==null;){e=e.parent;var a=e.f;if(zs&&e===Ge&&(a&zt)!==0&&(a&pi)===0)return;if((a&(pa|vt))!==0){if((a&Rn)===0)return;e.f^=Rn}}jn.push(e)}function Ti(n,e){if(!((n.f&vt)!==0&&(n.f&Rn)!==0)){(n.f&En)!==0?e.d.push(n):(n.f&ht)!==0&&e.m.push(n),vn(n,Rn);for(var a=n.first;a!==null;)Ti(a,e),a=a.next}}function Tl(n){let e=0,a=fa(0),r;return()=>{or()&&(t(a),cr(()=>(e===0&&(r=Ct(()=>n(()=>ja(a)))),e+=1,()=>{Mt(()=>{e-=1,e===0&&(r?.(),r=void 0,ja(a))})})))}}var Dl=ua|Ma|mi;function Rl(n,e,a){new ql(n,e,a)}class ql{parent;is_pending=!1;#e;#t=null;#n;#a;#o;#r=null;#s=null;#i=null;#l=null;#c=null;#u=0;#d=0;#p=!1;#m=!1;#h=new Set;#v=new Set;#f=null;#k=Tl(()=>(this.#f=fa(this.#u),()=>{this.#f=null}));constructor(e,a,r){this.#e=e,this.#n=a,this.#a=r,this.parent=Ge.b,this.is_pending=!!this.#n.pending,this.#o=Ps(()=>{Ge.b=this;{var s=this.#b();try{this.#r=$n(()=>r(s))}catch(i){this.error(i)}this.#d>0?this.#g():this.is_pending=!1}return()=>{this.#c?.remove()}},Dl)}#w(){try{this.#r=$n(()=>this.#a(this.#e))}catch(e){this.error(e)}}#x(){const e=this.#n.pending;e&&(this.#s=$n(()=>e(this.#e)),Mt(()=>{var a=this.#b();this.#r=this.#_(()=>(Gt.ensure(),$n(()=>this.#a(a)))),this.#d>0?this.#g():(la(this.#s,()=>{this.#s=null}),this.is_pending=!1)}))}#b(){var e=this.#e;return this.is_pending&&(this.#c=Et(),this.#e.before(this.#c),e=this.#c),e}defer_effect(e){xi(e,this.#h,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#_(e){var a=Ge,r=Fe,s=st;kt(this.#o),rt(this.#o),Pa(this.#o.ctx);try{return e()}catch(i){return ki(i),null}finally{kt(a),rt(r),Pa(s)}}#g(){const e=this.#n.pending;this.#r!==null&&(this.#l=document.createDocumentFragment(),this.#l.append(this.#c),Gi(this.#r,this.#l)),this.#s===null&&(this.#s=$n(()=>e(this.#e)))}#y(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#y(e);return}if(this.#d+=e,this.#d===0){this.is_pending=!1;for(const a of this.#h)vn(a,En),mt(a);for(const a of this.#v)vn(a,ht),mt(a);this.#h.clear(),this.#v.clear(),this.#s&&la(this.#s,()=>{this.#s=null}),this.#l&&(this.#e.before(this.#l),this.#l=null)}}update_pending_count(e){this.#y(e),this.#u+=e,!(!this.#f||this.#p)&&(this.#p=!0,Mt(()=>{this.#p=!1,this.#f&&Ta(this.#f,this.#u)}))}get_effect_pending(){return this.#k(),t(this.#f)}error(e){var a=this.#n.onerror;let r=this.#n.failed;if(this.#m||!a&&!r)throw e;this.#r&&(Vn(this.#r),this.#r=null),this.#s&&(Vn(this.#s),this.#s=null),this.#i&&(Vn(this.#i),this.#i=null);var s=!1,i=!1;const o=()=>{if(s){bl();return}s=!0,i&&ol(),Gt.ensure(),this.#u=0,this.#i!==null&&la(this.#i,()=>{this.#i=null}),this.is_pending=this.has_pending_snippet(),this.#r=this.#_(()=>(this.#m=!1,$n(()=>this.#a(this.#e)))),this.#d>0?this.#g():this.is_pending=!1};Mt(()=>{try{i=!0,a?.(e,o),i=!1}catch(c){Aa(c,this.#o&&this.#o.parent)}r&&(this.#i=this.#_(()=>{Gt.ensure(),this.#m=!0;try{return $n(()=>{r(this.#e,()=>e,()=>o)})}catch(c){return Aa(c,this.#o.parent),null}finally{this.#m=!1}}))})}}function Cl(n,e,a,r){const s=xs;var i=n.filter(m=>!m.settled);if(a.length===0&&i.length===0){r(e.map(s));return}var o=Ne,c=Ge,l=Ll(),f=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(m=>m.promise)):null;function u(m){l();try{r(m)}catch(y){(c.f&Lt)===0&&Aa(y,c)}o?.deactivate(),Ns()}if(a.length===0){f.then(()=>u(e.map(s)));return}function d(){l(),Promise.all(a.map(m=>Ml(m))).then(m=>u([...e.map(s),...m])).catch(m=>Aa(m,c))}f?f.then(d):d()}function Ll(){var n=Ge,e=Fe,a=st,r=Ne;return function(i=!0){kt(n),rt(e),Pa(a),i&&r?.activate()}}function Ns(){kt(null),rt(null),Pa(null)}function xs(n){var e=Mn|En,a=Fe!==null&&(Fe.f&Mn)!==0?Fe:null;return Ge!==null&&(Ge.f|=Ma),{ctx:st,deps:null,effects:null,equals:_i,f:e,fn:n,reactions:null,rv:0,v:qn,wv:0,parent:a??Ge,ac:null}}function Ml(n,e,a){let r=Ge;r===null&&Xo();var s=r.b,i=void 0,o=fa(qn),c=!Fe,l=new Map;return Ul(()=>{var f=di();i=f.promise;try{Promise.resolve(n()).then(f.resolve,f.reject).then(()=>{u===Ne&&u.committed&&u.deactivate(),Ns()})}catch(y){f.reject(y),Ns()}var u=Ne;if(c){var d=s.is_rendered();s.update_pending_count(1),u.increment(d),l.get(u)?.reject(sa),l.delete(u),l.set(u,f)}const m=(y,_=void 0)=>{if(u.activate(),_)_!==sa&&(o.f|=Vt,Ta(o,_));else{(o.f&Vt)!==0&&(o.f^=Vt),Ta(o,y);for(const[x,v]of l){if(l.delete(x),x===u)break;v.reject(sa)}}c&&(s.update_pending_count(-1),u.decrement(d))};f.promise.then(m,y=>m(null,y||"unknown"))}),lr(()=>{for(const f of l.values())f.reject(sa)}),new Promise(f=>{function u(d){function m(){d===i?f(o):u(i)}d.then(m,m)}u(i)})}function C(n){const e=xs(n);return Ki(e),e}function Di(n){const e=xs(n);return e.equals=gi,e}function El(n){var e=n.effects;if(e!==null){n.effects=null;for(var a=0;a<e.length;a+=1)Vn(e[a])}}function Fl(n){for(var e=n.parent;e!==null;){if((e.f&Mn)===0)return(e.f&Lt)===0?e:null;e=e.parent}return null}function ir(n){var e,a=Ge;kt(Fl(n));try{n.f&=~da,El(n),e=Zi(n)}finally{kt(a)}return e}function Ri(n){var e=ir(n);if(!n.equals(e)&&(n.wv=Ui(),(!Ne?.is_fork||n.deps===null)&&(n.v=e,n.deps===null))){vn(n,Rn);return}Ut||(ft!==null?(or()||Ne?.is_fork)&&ft.set(n,e):rr(n))}function Ol(n){if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac?.abort(sa),e.teardown=Ko,e.ac=null,Ga(e,0),ur(e))}function qi(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&Da(e)}let Is=new Set;const Kt=new Map;let Ci=!1;function fa(n,e){var a={f:0,v:n,reactions:null,equals:_i,rv:0,wv:0};return a}function V(n,e){const a=fa(n);return Ki(a),a}function zl(n,e=!1,a=!0){const r=fa(n);return e||(r.equals=gi),r}function p(n,e,a=!1){Fe!==null&&(!pt||(Fe.f&Er)!==0)&&bi()&&(Fe.f&(Mn|zt|sr|Er))!==0&&(tt===null||!Sa.call(tt,n))&&il();let r=a?_n(e):e;return Ta(n,r)}function Ta(n,e){if(!n.equals(e)){var a=n.v;Ut?Kt.set(n,e):Kt.set(n,a),n.v=e;var r=Gt.ensure();if(r.capture(n,a),(n.f&Mn)!==0){const s=n;(n.f&En)!==0&&ir(s),rr(s)}n.wv=Ui(),Li(n,En),Ge!==null&&(Ge.f&Rn)!==0&&(Ge.f&(vt|pa))===0&&(Xn===null?Zl([n]):Xn.push(n)),!r.is_fork&&Is.size>0&&!Ci&&Nl()}return e}function Nl(){Ci=!1;for(const n of Is)(n.f&Rn)!==0&&vn(n,ht),Ja(n)&&Da(n);Is.clear()}function ga(n,e=1){var a=t(n),r=e===1?a++:a--;return p(n,a),r}function ja(n){p(n,n.v+1)}function Li(n,e){var a=n.reactions;if(a!==null)for(var r=a.length,s=0;s<r;s++){var i=a[s],o=i.f,c=(o&En)===0;if(c&&vn(i,e),(o&Mn)!==0){var l=i;ft?.delete(l),(o&da)===0&&(o&nt&&(i.f|=da),Li(l,ht))}else c&&((o&zt)!==0&&Rt!==null&&Rt.add(i),mt(i))}}function _n(n){if(typeof n!="object"||n===null||oa in n)return n;const e=ar(n);if(e!==ui&&e!==Go)return n;var a=new Map,r=bs(n),s=V(0),i=ca,o=c=>{if(ca===i)return c();var l=Fe,f=ca;rt(null),jr(i);var u=c();return rt(l),jr(f),u};return r&&a.set("length",V(n.length)),new Proxy(n,{defineProperty(c,l,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&sl();var u=a.get(l);return u===void 0?o(()=>{var d=V(f.value);return a.set(l,d),d}):p(u,f.value,!0),!0},deleteProperty(c,l){var f=a.get(l);if(f===void 0){if(l in c){const u=o(()=>V(qn));a.set(l,u),ja(s)}}else p(f,qn),ja(s);return!0},get(c,l,f){if(l===oa)return n;var u=a.get(l),d=l in c;if(u===void 0&&(!d||ba(c,l)?.writable)&&(u=o(()=>{var y=_n(d?c[l]:qn),_=V(y);return _}),a.set(l,u)),u!==void 0){var m=t(u);return m===qn?void 0:m}return Reflect.get(c,l,f)},getOwnPropertyDescriptor(c,l){var f=Reflect.getOwnPropertyDescriptor(c,l);if(f&&"value"in f){var u=a.get(l);u&&(f.value=t(u))}else if(f===void 0){var d=a.get(l),m=d?.v;if(d!==void 0&&m!==qn)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(c,l){if(l===oa)return!0;var f=a.get(l),u=f!==void 0&&f.v!==qn||Reflect.has(c,l);if(f!==void 0||Ge!==null&&(!u||ba(c,l)?.writable)){f===void 0&&(f=o(()=>{var m=u?_n(c[l]):qn,y=V(m);return y}),a.set(l,f));var d=t(f);if(d===qn)return!1}return u},set(c,l,f,u){var d=a.get(l),m=l in c;if(r&&l==="length")for(var y=f;y<d.v;y+=1){var _=a.get(y+"");_!==void 0?p(_,qn):y in c&&(_=o(()=>V(qn)),a.set(y+"",_))}if(d===void 0)(!m||ba(c,l)?.writable)&&(d=o(()=>V(void 0)),p(d,_n(f)),a.set(l,d));else{m=d.v!==qn;var x=o(()=>_n(f));p(d,x)}var v=Reflect.getOwnPropertyDescriptor(c,l);if(v?.set&&v.set.call(u,f),!m){if(r&&typeof l=="string"){var T=a.get("length"),L=Number(l);Number.isInteger(L)&&L>=T.v&&p(T,L+1)}ja(s)}return!0},ownKeys(c){t(s);var l=Reflect.ownKeys(c).filter(d=>{var m=a.get(d);return m===void 0||m.v!==qn});for(var[f,u]of a)u.v!==qn&&!(f in c)&&l.push(f);return l},setPrototypeOf(){rl()}})}function Or(n){try{if(n!==null&&typeof n=="object"&&oa in n)return n[oa]}catch{}return n}function Il(n,e){return Object.is(Or(n),Or(e))}var zr,Mi,Ei,Fi;function jl(){if(zr===void 0){zr=window,Mi=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,a=Text.prototype;Ei=ba(e,"firstChild").get,Fi=ba(e,"nextSibling").get,Mr(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Mr(a)&&(a.__t=void 0)}}function Et(n=""){return document.createTextNode(n)}function yt(n){return Ei.call(n)}function Qa(n){return Fi.call(n)}function w(n,e){return yt(n)}function Te(n,e=!1){{var a=yt(n);return a instanceof Comment&&a.data===""?Qa(a):a}}function h(n,e=1,a=!1){let r=n;for(;e--;)r=Qa(r);return r}function Bl(n){n.textContent=""}function Oi(){return!1}function Hl(n,e,a){return document.createElementNS(vi,n,void 0)}let Nr=!1;function Vl(){Nr||(Nr=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function Ss(n){var e=Fe,a=Ge;rt(null),kt(null);try{return n()}finally{rt(e),kt(a)}}function zi(n,e,a,r=a){n.addEventListener(e,()=>Ss(a));const s=n.__on_r;s?n.__on_r=()=>{s(),r(!0)}:n.__on_r=()=>r(!0),Vl()}function Gl(n){Ge===null&&(Fe===null&&nl(),el()),Ut&&$o()}function Kl(n,e){var a=e.last;a===null?e.last=e.first=n:(a.next=n,n.prev=a,e.last=n)}function Nt(n,e,a){var r=Ge;r!==null&&(r.f&Un)!==0&&(n|=Un);var s={ctx:st,deps:null,nodes:null,f:n|En|nt,first:null,fn:e,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};if(a)try{Da(s)}catch(c){throw Vn(s),c}else e!==null&&mt(s);var i=s;if(a&&i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Ma)===0&&(i=i.first,(n&zt)!==0&&(n&ua)!==0&&i!==null&&(i.f|=ua)),i!==null&&(i.parent=r,r!==null&&Kl(i,r),Fe!==null&&(Fe.f&Mn)!==0&&(n&pa)===0)){var o=Fe;(o.effects??=[]).push(i)}return s}function or(){return Fe!==null&&!pt}function lr(n){const e=Nt(ks,null,!1);return vn(e,Rn),e.teardown=n,e}function Ie(n){Gl();var e=Ge.f,a=!Fe&&(e&vt)!==0&&(e&Ua)===0;if(a){var r=st;(r.e??=[]).push(n)}else return Ni(n)}function Ni(n){return Nt(Va|Uo,n,!1)}function Wl(n){Gt.ensure();const e=Nt(pa|Ma,n,!0);return(a={})=>new Promise(r=>{a.outro?la(e,()=>{Vn(e),r(void 0)}):(Vn(e),r(void 0))})}function Za(n){return Nt(Va,n,!1)}function Ul(n){return Nt(sr|Ma,n,!0)}function cr(n,e=0){return Nt(ks|e,n,!0)}function ae(n,e=[],a=[],r=[]){Cl(r,e,a,s=>{Nt(ks,()=>n(...s.map(t)),!0)})}function Ps(n,e=0){var a=Nt(zt|e,n,!0);return a}function $n(n){return Nt(vt|Ma,n,!0)}function Ii(n){var e=n.teardown;if(e!==null){const a=Ut,r=Fe;Ir(!0),rt(null);try{e.call(null)}finally{Ir(a),rt(r)}}}function ur(n,e=!1){var a=n.first;for(n.first=n.last=null;a!==null;){const s=a.ac;s!==null&&Ss(()=>{s.abort(sa)});var r=a.next;(a.f&pa)!==0?a.parent=null:Vn(a,e),a=r}}function Ql(n){for(var e=n.first;e!==null;){var a=e.next;(e.f&vt)===0&&Vn(e),e=a}}function Vn(n,e=!0){var a=!1;(e||(n.f&pi)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(ji(n.nodes.start,n.nodes.end),a=!0),ur(n,e&&!a),Ga(n,0),vn(n,Lt);var r=n.nodes&&n.nodes.t;if(r!==null)for(const i of r)i.stop();Ii(n);var s=n.parent;s!==null&&s.first!==null&&Bi(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=null}function ji(n,e){for(;n!==null;){var a=n===e?null:Qa(n);n.remove(),n=a}}function Bi(n){var e=n.parent,a=n.prev,r=n.next;a!==null&&(a.next=r),r!==null&&(r.prev=a),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=a))}function la(n,e,a=!0){var r=[];Hi(n,r,!0);var s=()=>{a&&Vn(n),e&&e()},i=r.length;if(i>0){var o=()=>--i||s();for(var c of r)c.out(o)}else s()}function Hi(n,e,a){if((n.f&Un)===0){n.f^=Un;var r=n.nodes&&n.nodes.t;if(r!==null)for(const c of r)(c.is_global||a)&&e.push(c);for(var s=n.first;s!==null;){var i=s.next,o=(s.f&ua)!==0||(s.f&vt)!==0&&(n.f&zt)!==0;Hi(s,e,o?a:!1),s=i}}}function dr(n){Vi(n,!0)}function Vi(n,e){if((n.f&Un)!==0){n.f^=Un,(n.f&Rn)===0&&(vn(n,En),mt(n));for(var a=n.first;a!==null;){var r=a.next,s=(a.f&ua)!==0||(a.f&vt)!==0;Vi(a,s?e:!1),a=r}var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||e)&&o.in()}}function Gi(n,e){if(n.nodes)for(var a=n.nodes.start,r=n.nodes.end;a!==null;){var s=a===r?null:Qa(a);e.append(a),a=s}}let is=!1,Ut=!1;function Ir(n){Ut=n}let Fe=null,pt=!1;function rt(n){Fe=n}let Ge=null;function kt(n){Ge=n}let tt=null;function Ki(n){Fe!==null&&(tt===null?tt=[n]:tt.push(n))}let Bn=null,Wn=0,Xn=null;function Zl(n){Xn=n}let Wi=1,ia=0,ca=ia;function jr(n){ca=n}function Ui(){return++Wi}function Ja(n){var e=n.f;if((e&En)!==0)return!0;if(e&Mn&&(n.f&=~da),(e&ht)!==0){for(var a=n.deps,r=a.length,s=0;s<r;s++){var i=a[s];if(Ja(i)&&Ri(i),i.wv>n.wv)return!0}(e&nt)!==0&&ft===null&&vn(n,Rn)}return!1}function Qi(n,e,a=!0){var r=n.reactions;if(r!==null&&!(tt!==null&&Sa.call(tt,n)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&Mn)!==0?Qi(i,e,!1):e===i&&(a?vn(i,En):(i.f&Rn)!==0&&vn(i,ht),mt(i))}}function Zi(n){var e=Bn,a=Wn,r=Xn,s=Fe,i=tt,o=st,c=pt,l=ca,f=n.f;Bn=null,Wn=0,Xn=null,Fe=(f&(vt|pa))===0?n:null,tt=null,Pa(n.ctx),pt=!1,ca=++ia,n.ac!==null&&(Ss(()=>{n.ac.abort(sa)}),n.ac=null);try{n.f|=Os;var u=n.fn,d=u();n.f|=Ua;var m=n.deps,y=Ne?.is_fork;if(Bn!==null){var _;if(y||Ga(n,Wn),m!==null&&Wn>0)for(m.length=Wn+Bn.length,_=0;_<Bn.length;_++)m[Wn+_]=Bn[_];else n.deps=m=Bn;if(or()&&(n.f&nt)!==0)for(_=Wn;_<m.length;_++)(m[_].reactions??=[]).push(n)}else!y&&m!==null&&Wn<m.length&&(Ga(n,Wn),m.length=Wn);if(bi()&&Xn!==null&&!pt&&m!==null&&(n.f&(Mn|ht|En))===0)for(_=0;_<Xn.length;_++)Qi(Xn[_],n);if(s!==null&&s!==n){if(ia++,s.deps!==null)for(let x=0;x<a;x+=1)s.deps[x].rv=ia;if(e!==null)for(const x of e)x.rv=ia;Xn!==null&&(r===null?r=Xn:r.push(...Xn))}return(n.f&Vt)!==0&&(n.f^=Vt),d}catch(x){return ki(x)}finally{n.f^=Os,Bn=e,Wn=a,Xn=r,Fe=s,tt=i,Pa(o),pt=c,ca=l}}function Jl(n,e){let a=e.reactions;if(a!==null){var r=Bo.call(a,n);if(r!==-1){var s=a.length-1;s===0?a=e.reactions=null:(a[r]=a[s],a.pop())}}if(a===null&&(e.f&Mn)!==0&&(Bn===null||!Sa.call(Bn,e))){var i=e;(i.f&nt)!==0&&(i.f^=nt,i.f&=~da),rr(i),Ol(i),Ga(i,0)}}function Ga(n,e){var a=n.deps;if(a!==null)for(var r=e;r<a.length;r++)Jl(n,a[r])}function Da(n){var e=n.f;if((e&Lt)===0){vn(n,Rn);var a=Ge,r=is;Ge=n,is=!0;try{(e&(zt|fi))!==0?Ql(n):ur(n),Ii(n);var s=Zi(n);n.teardown=typeof s=="function"?s:null,n.wv=Wi;var i;Fs&&kl&&(n.f&En)!==0&&n.deps}finally{is=r,Ge=a}}}async function Ji(){await Promise.resolve(),Pl()}function t(n){var e=n.f,a=(e&Mn)!==0;if(Fe!==null&&!pt){var r=Ge!==null&&(Ge.f&Lt)!==0;if(!r&&(tt===null||!Sa.call(tt,n))){var s=Fe.deps;if((Fe.f&Os)!==0)n.rv<ia&&(n.rv=ia,Bn===null&&s!==null&&s[Wn]===n?Wn++:Bn===null?Bn=[n]:Bn.push(n));else{(Fe.deps??=[]).push(n);var i=n.reactions;i===null?n.reactions=[Fe]:Sa.call(i,Fe)||i.push(Fe)}}}if(Ut&&Kt.has(n))return Kt.get(n);if(a){var o=n;if(Ut){var c=o.v;return((o.f&Rn)===0&&o.reactions!==null||Yi(o))&&(c=ir(o)),Kt.set(o,c),c}var l=(o.f&nt)===0&&!pt&&Fe!==null&&(is||(Fe.f&nt)!==0),f=(o.f&Ua)===0;Ja(o)&&(l&&(o.f|=nt),Ri(o)),l&&!f&&(qi(o),Xi(o))}if(ft?.has(n))return ft.get(n);if((n.f&Vt)!==0)throw n.v;return n.v}function Xi(n){if(n.f|=nt,n.deps!==null)for(const e of n.deps)(e.reactions??=[]).push(n),(e.f&Mn)!==0&&(e.f&nt)===0&&(qi(e),Xi(e))}function Yi(n){if(n.v===qn)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Kt.has(e)||(e.f&Mn)!==0&&Yi(e))return!0;return!1}function Ct(n){var e=pt;try{return pt=!0,n()}finally{pt=e}}const Xl=["touchstart","touchmove"];function Yl(n){return Xl.includes(n)}const $i=Symbol("events"),eo=new Set,js=new Set;function $l(n,e,a,r={}){function s(i){if(r.capture||Bs.call(e,i),!i.cancelBubble)return Ss(()=>a?.call(this,i))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?Mt(()=>{e.addEventListener(n,s,r)}):e.addEventListener(n,s,r),s}function J(n,e,a,r,s){var i={capture:r,passive:s},o=$l(n,e,a,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&lr(()=>{e.removeEventListener(n,o,i)})}function H(n,e,a){(e[$i]??={})[n]=a}function Ke(n){for(var e=0;e<n.length;e++)eo.add(n[e]);for(var a of js)a(n)}let Br=null;function Bs(n){var e=this,a=e.ownerDocument,r=n.type,s=n.composedPath?.()||[],i=s[0]||n.target;Br=n;var o=0,c=Br===n&&n.__root;if(c){var l=s.indexOf(c);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var f=s.indexOf(e);if(f===-1)return;l<=f&&(o=l)}if(i=s[o]||n.target,i!==e){Ho(n,"currentTarget",{configurable:!0,get(){return i||a}});var u=Fe,d=Ge;rt(null),kt(null);try{for(var m,y=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var x=i[$i]?.[r];x!=null&&(!i.disabled||n.target===i)&&x.call(i,n)}catch(v){m?y.push(v):m=v}if(n.cancelBubble||_===e||_===null)break;i=_}if(m){for(let v of y)queueMicrotask(()=>{throw v});throw m}}finally{n.__root=e,delete n.currentTarget,rt(u),kt(d)}}}const ec=globalThis?.window?.trustedTypes?.createPolicy("svelte-trusted-html",{createHTML:n=>n});function nc(n){return ec?.createHTML(n)??n}function fr(n,e=!1){var a=Hl("template");return n=n.replaceAll("<!>","<!---->"),a.innerHTML=e?nc(n):n,a.content}function Ra(n,e){var a=Ge;a.nodes===null&&(a.nodes={start:n,end:e,a:null,t:null})}function D(n,e){var a=(e&vl)!==0,r=(e&_l)!==0,s,i=!n.startsWith("<!>");return()=>{s===void 0&&(s=fr(i?n:"<!>"+n,!0),a||(s=yt(s)));var o=r||Mi?document.importNode(s,!0):s.cloneNode(!0);if(a){var c=yt(o),l=o.lastChild;Ra(c,l)}else Ra(o,o);return o}}function tc(n,e,a="svg"){var r=!n.startsWith("<!>"),s=`<${a}>${r?n:"<!>"+n}</${a}>`,i;return()=>{if(!i){var o=fr(s,!0),c=yt(o);i=yt(c)}var l=i.cloneNode(!0);return Ra(l,l),l}}function ac(n,e){return tc(n,e,"svg")}function sc(n=""){{var e=Et(n+"");return Ra(e,e),e}}function qa(){var n=document.createDocumentFragment(),e=document.createComment(""),a=Et();return n.append(e,a),Ra(e,a),n}function S(n,e){n!==null&&n.before(e)}function ke(n,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(n.__t??=n.nodeValue)&&(n.__t=a,n.nodeValue=a+"")}function rc(n,e){return ic(n,e)}const $a=new Map;function ic(n,{target:e,anchor:a,props:r={},events:s,context:i,intro:o=!0}){jl();var c=new Set,l=d=>{for(var m=0;m<d.length;m++){var y=d[m];if(!c.has(y)){c.add(y);var _=Yl(y);for(const T of[e,document]){var x=$a.get(T);x===void 0&&(x=new Map,$a.set(T,x));var v=x.get(y);v===void 0?(T.addEventListener(y,Bs,{passive:_}),x.set(y,1)):x.set(y,v+1)}}}};l(ys(eo)),js.add(l);var f=void 0,u=Wl(()=>{var d=a??e.appendChild(Et());return Rl(d,{pending:()=>{}},m=>{be({});var y=st;i&&(y.c=i),s&&(r.$$events=s),f=n(m,r)||{},ye()}),()=>{for(var m of c)for(const x of[e,document]){var y=$a.get(x),_=y.get(m);--_==0?(x.removeEventListener(m,Bs),y.delete(m),y.size===0&&$a.delete(x)):y.set(m,_)}js.delete(l),d!==a&&d.parentNode?.removeChild(d)}});return oc.set(f,u),f}let oc=new WeakMap;class no{anchor;#e=new Map;#t=new Map;#n=new Map;#a=new Set;#o=!0;constructor(e,a=!0){this.anchor=e,this.#o=a}#r=()=>{var e=Ne;if(this.#e.has(e)){var a=this.#e.get(e),r=this.#t.get(a);if(r)dr(r),this.#a.delete(a);else{var s=this.#n.get(a);s&&(this.#t.set(a,s.effect),this.#n.delete(a),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of this.#e){if(this.#e.delete(i),i===e)break;const c=this.#n.get(o);c&&(Vn(c.effect),this.#n.delete(o))}for(const[i,o]of this.#t){if(i===a||this.#a.has(i))continue;const c=()=>{if(Array.from(this.#e.values()).includes(i)){var f=document.createDocumentFragment();Gi(o,f),f.append(Et()),this.#n.set(i,{effect:o,fragment:f})}else Vn(o);this.#a.delete(i),this.#t.delete(i)};this.#o||!r?(this.#a.add(i),la(o,c,!1)):c()}}};#s=e=>{this.#e.delete(e);const a=Array.from(this.#e.values());for(const[r,s]of this.#n)a.includes(r)||(Vn(s.effect),this.#n.delete(r))};ensure(e,a){var r=Ne,s=Oi();if(a&&!this.#t.has(e)&&!this.#n.has(e))if(s){var i=document.createDocumentFragment(),o=Et();i.append(o),this.#n.set(e,{effect:$n(()=>a(o)),fragment:i})}else this.#t.set(e,$n(()=>a(this.anchor)));if(this.#e.set(r,e),s){for(const[c,l]of this.#t)c===e?r.unskip_effect(l):r.skip_effect(l);for(const[c,l]of this.#n)c===e?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(this.#r),r.ondiscard(this.#s)}else this.#r()}}function Y(n,e,a=!1){var r=new no(n),s=a?ua:0;function i(o,c){r.ensure(o,c)}Ps(()=>{var o=!1;e((c,l=0)=>{o=!0,i(l,c)}),o||i(!1,null)},s)}function je(n,e){return e}function lc(n,e,a){for(var r=[],s=e.length,i,o=e.length,c=0;c<s;c++){let d=e[c];la(d,()=>{if(i){if(i.pending.delete(d),i.done.add(d),i.pending.size===0){var m=n.outrogroups;Hs(ys(i.done)),m.delete(i),m.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=r.length===0&&a!==null;if(l){var f=a,u=f.parentNode;Bl(u),u.append(f),n.items.clear()}Hs(e,!l)}else i={pending:new Set(e),done:new Set},(n.outrogroups??=new Set).add(i)}function Hs(n,e=!0){for(var a=0;a<n.length;a++)Vn(n[a],e)}var Hr;function Be(n,e,a,r,s,i=null){var o=n,c=new Map,l=(e&hi)!==0;if(l){var f=n;o=f.appendChild(Et())}var u=null,d=Di(()=>{var T=a();return bs(T)?T:T==null?[]:ys(T)}),m,y=!0;function _(){v.fallback=u,cc(v,m,o,e,r),u!==null&&(m.length===0?(u.f&qt)===0?dr(u):(u.f^=qt,za(u,null,o)):la(u,()=>{u=null}))}var x=Ps(()=>{m=t(d);for(var T=m.length,L=new Set,O=Ne,A=Oi(),k=0;k<T;k+=1){var g=m[k],R=r(g,k),z=y?null:c.get(R);z?(z.v&&Ta(z.v,g),z.i&&Ta(z.i,k),A&&O.unskip_effect(z.e)):(z=uc(c,y?o:Hr??=Et(),g,R,k,s,e,a),y||(z.e.f|=qt),c.set(R,z)),L.add(R)}if(T===0&&i&&!u&&(y?u=$n(()=>i(o)):(u=$n(()=>i(Hr??=Et())),u.f|=qt)),T>L.size&&Yo(),!y)if(A){for(const[B,F]of c)L.has(B)||O.skip_effect(F.e);O.oncommit(_),O.ondiscard(()=>{})}else _();t(d)}),v={effect:x,items:c,outrogroups:null,fallback:u};y=!1}function Ea(n){for(;n!==null&&(n.f&vt)===0;)n=n.next;return n}function cc(n,e,a,r,s){var i=(r&ul)!==0,o=e.length,c=n.items,l=Ea(n.effect.first),f,u=null,d,m=[],y=[],_,x,v,T;if(i)for(T=0;T<o;T+=1)_=e[T],x=s(_,T),v=c.get(x).e,(v.f&qt)===0&&(v.nodes?.a?.measure(),(d??=new Set).add(v));for(T=0;T<o;T+=1){if(_=e[T],x=s(_,T),v=c.get(x).e,n.outrogroups!==null)for(const F of n.outrogroups)F.pending.delete(v),F.done.delete(v);if((v.f&qt)!==0)if(v.f^=qt,v===l)za(v,null,a);else{var L=u?u.next:l;v===n.effect.last&&(n.effect.last=v.prev),v.prev&&(v.prev.next=v.next),v.next&&(v.next.prev=v.prev),jt(n,u,v),jt(n,v,L),za(v,L,a),u=v,m=[],y=[],l=Ea(u.next);continue}if((v.f&Un)!==0&&(dr(v),i&&(v.nodes?.a?.unfix(),(d??=new Set).delete(v))),v!==l){if(f!==void 0&&f.has(v)){if(m.length<y.length){var O=y[0],A;u=O.prev;var k=m[0],g=m[m.length-1];for(A=0;A<m.length;A+=1)za(m[A],O,a);for(A=0;A<y.length;A+=1)f.delete(y[A]);jt(n,k.prev,g.next),jt(n,u,k),jt(n,g,O),l=O,u=g,T-=1,m=[],y=[]}else f.delete(v),za(v,l,a),jt(n,v.prev,v.next),jt(n,v,u===null?n.effect.first:u.next),jt(n,u,v),u=v;continue}for(m=[],y=[];l!==null&&l!==v;)(f??=new Set).add(l),y.push(l),l=Ea(l.next);if(l===null)continue}(v.f&qt)===0&&m.push(v),u=v,l=Ea(v.next)}if(n.outrogroups!==null){for(const F of n.outrogroups)F.pending.size===0&&(Hs(ys(F.done)),n.outrogroups?.delete(F));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||f!==void 0){var R=[];if(f!==void 0)for(v of f)(v.f&Un)===0&&R.push(v);for(;l!==null;)(l.f&Un)===0&&l!==n.fallback&&R.push(l),l=Ea(l.next);var z=R.length;if(z>0){var B=(r&hi)!==0&&o===0?a:null;if(i){for(T=0;T<z;T+=1)R[T].nodes?.a?.measure();for(T=0;T<z;T+=1)R[T].nodes?.a?.fix()}lc(n,R,B)}}i&&Mt(()=>{if(d!==void 0)for(v of d)v.nodes?.a?.apply()})}function uc(n,e,a,r,s,i,o,c){var l=(o&ll)!==0?(o&dl)===0?zl(a,!1,!1):fa(a):null,f=(o&cl)!==0?fa(s):null;return{v:l,i:f,e:$n(()=>(i(e,l??a,f??s,c),()=>{n.delete(r)}))}}function za(n,e,a){if(n.nodes)for(var r=n.nodes.start,s=n.nodes.end,i=e&&(e.f&qt)===0?e.nodes.start:a;r!==null;){var o=Qa(r);if(i.before(r),r===s)return;r=o}}function jt(n,e,a){e===null?n.effect.first=a:e.next=a,a===null?n.effect.last=e:a.prev=e}function to(n,e,a=!1,r=!1,s=!1){var i=n,o="";ae(()=>{var c=Ge;if(o!==(o=e()??"")&&(c.nodes!==null&&(ji(c.nodes.start,c.nodes.end),c.nodes=null),o!=="")){var l=o+"";a?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var f=fr(l);if((a||r)&&(f=yt(f)),Ra(yt(f),f.lastChild),a||r)for(;yt(f);)i.before(yt(f));else i.before(f)}})}function mr(n,e,...a){var r=new no(n);Ps(()=>{const s=e()??null;r.ensure(s,s&&(i=>s(i,...a)))},ua)}function ao(n,e,a){Za(()=>{var r=Ct(()=>e(n,a?.())||{});if(r?.destroy)return()=>r.destroy()})}const Vr=[...` 	
\r\f \v\uFEFF`];function dc(n,e,a){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),a){for(var s in a)if(a[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var c=o+i;(o===0||Vr.includes(r[o-1]))&&(c===r.length||Vr.includes(r[c]))?r=(o===0?"":r.substring(0,o))+r.substring(c+1):o=c}}return r===""?null:r}function Gr(n,e=!1){var a=e?" !important;":";",r="";for(var s in n){var i=n[s];i!=null&&i!==""&&(r+=" "+s+": "+i+a)}return r}function qs(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function fc(n,e){if(e){var a="",r,s;if(Array.isArray(e)?(r=e[0],s=e[1]):r=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,c=!1,l=[];r&&l.push(...Object.keys(r).map(qs)),s&&l.push(...Object.keys(s).map(qs));var f=0,u=-1;const x=n.length;for(var d=0;d<x;d++){var m=n[d];if(c?m==="/"&&n[d-1]==="*"&&(c=!1):i?i===m&&(i=!1):m==="/"&&n[d+1]==="*"?c=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!c&&i===!1&&o===0){if(m===":"&&u===-1)u=d;else if(m===";"||d===x-1){if(u!==-1){var y=qs(n.substring(f,u).trim());if(!l.includes(y)){m!==";"&&d++;var _=n.substring(f,d).trim();a+=" "+_+";"}}f=d+1,u=-1}}}}return r&&(a+=Gr(r)),s&&(a+=Gr(s,!0)),a=a.trim(),a===""?null:a}return n==null?null:String(n)}function _e(n,e,a,r,s,i){var o=n.__className;if(o!==a||o===void 0){var c=dc(a,r,i);c==null?n.removeAttribute("class"):n.className=c,n.__className=a}else if(i&&s!==i)for(var l in i){var f=!!i[l];(s==null||f!==!!s[l])&&n.classList.toggle(l,f)}return i}function Cs(n,e={},a,r){for(var s in a){var i=a[s];e[s]!==i&&(a[s]==null?n.style.removeProperty(s):n.style.setProperty(s,i,r))}}function Ue(n,e,a,r){var s=n.__style;if(s!==e){var i=fc(e,r);i==null?n.removeAttribute("style"):n.style.cssText=i,n.__style=e}else r&&(Array.isArray(r)?(Cs(n,a?.[0],r[0]),Cs(n,a?.[1],r[1],"important")):Cs(n,a,r));return r}function so(n,e,a=!1){if(n.multiple){if(e==null)return;if(!bs(e))return gl();for(var r of n.options)r.selected=e.includes(Ba(r));return}for(r of n.options){var s=Ba(r);if(Il(s,e)){r.selected=!0;return}}(!a||e!==void 0)&&(n.selectedIndex=-1)}function mc(n){var e=new MutationObserver(()=>{so(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),lr(()=>{e.disconnect()})}function pc(n,e,a=e){var r=new WeakSet,s=!0;zi(n,"change",i=>{var o=i?"[selected]":":checked",c;if(n.multiple)c=[].map.call(n.querySelectorAll(o),Ba);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");c=l&&Ba(l)}a(c),Ne!==null&&r.add(Ne)}),Za(()=>{var i=e();if(n===document.activeElement){var o=us??Ne;if(r.has(o))return}if(so(n,i,s),s&&i===void 0){var c=n.querySelector(":checked");c!==null&&(i=Ba(c),a(i))}n.__value=i,s=!1}),mc(n)}function Ba(n){return"__value"in n?n.__value:n.value}const hc=Symbol("is custom element"),vc=Symbol("is html"),_c=Jo?"progress":"PROGRESS";function Wt(n,e){var a=ro(n);a.value===(a.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==_c)||(n.value=e??"")}function Xe(n,e,a,r){var s=ro(n);s[e]!==(s[e]=a)&&(e==="loading"&&(n[Zo]=a),a==null?n.removeAttribute(e):typeof a!="string"&&gc(n).includes(e)?n[e]=a:n.setAttribute(e,a))}function ro(n){return n.__attributes??={[hc]:n.nodeName.includes("-"),[vc]:n.namespaceURI===vi}}var Kr=new Map;function gc(n){var e=n.getAttribute("is")||n.nodeName,a=Kr.get(e);if(a)return a;Kr.set(e,a=[]);for(var r,s=n,i=Element.prototype;i!==s;){r=Vo(s);for(var o in r)r[o].set&&a.push(o);s=ar(s)}return a}function Hn(n,e,a=e){var r=new WeakSet;zi(n,"input",async s=>{var i=s?n.defaultValue:n.value;if(i=Ls(n)?Ms(i):i,a(i),Ne!==null&&r.add(Ne),await Ji(),i!==(i=e())){var o=n.selectionStart,c=n.selectionEnd,l=n.value.length;if(n.value=i??"",c!==null){var f=n.value.length;o===c&&c===l&&f>l?(n.selectionStart=f,n.selectionEnd=f):(n.selectionStart=o,n.selectionEnd=Math.min(c,f))}}}),Ct(e)==null&&n.value&&(a(Ls(n)?Ms(n.value):n.value),Ne!==null&&r.add(Ne)),cr(()=>{var s=e();if(n===document.activeElement){var i=us??Ne;if(r.has(i))return}Ls(n)&&s===Ms(n.value)||n.type==="date"&&!s&&!n.value||s!==n.value&&(n.value=s??"")})}function Ls(n){var e=n.type;return e==="number"||e==="range"}function Ms(n){return n===""?null:+n}function Wr(n,e){return n===e||n?.[oa]===e}function Ft(n={},e,a,r){return Za(()=>{var s,i;return cr(()=>{s=i,i=[],Ct(()=>{n!==a(...i)&&(e(n,...i),s&&Wr(a(...s),n)&&e(null,...s))})}),()=>{Mt(()=>{i&&Wr(a(...i),n)&&e(null,...i)})}}),n}let es=!1;function bc(n){var e=es;try{return es=!1,[n(),es]}finally{es=e}}function ge(n,e,a,r){var s=(a&pl)!==0,i=(a&hl)!==0,o=r,c=!0,l=()=>(c&&(c=!1,o=i?Ct(r):r),o),f;if(s){var u=oa in n||Qo in n;f=ba(n,e)?.set??(u&&e in n?L=>n[e]=L:void 0)}var d,m=!1;s?[d,m]=bc(()=>n[e]):d=n[e],d===void 0&&r!==void 0&&(d=l(),f&&(al(),f(d)));var y;if(y=()=>{var L=n[e];return L===void 0?l():(c=!0,L)},(a&ml)===0)return y;if(f){var _=n.$$legacy;return(function(L,O){return arguments.length>0?((!O||_||m)&&f(O?y():L),L):y()})}var x=!1,v=((a&fl)!==0?xs:Di)(()=>(x=!1,y()));s&&t(v);var T=Ge;return(function(L,O){if(arguments.length>0){const A=O?t(v):s?_n(L):L;return p(v,A),x=!0,o!==void 0&&(o=A),L}return Ut&&x||(T.f&Lt)!==0?v.v:t(v)})}const yc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(yc);const kc=`
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
`;class wc{ctx=null;node=null;gainNode=null;ready=!1;queue=[];observeCallback=null;compileResolve=null;reloadResolve=null;async init(){if(this.ctx)return;this.ctx=new AudioContext({sampleRate:44100});const e="/get-score/",[a,r,s]=await Promise.all([fetch(`${e}wasm-pkg/gb_daw_wasm.js`).then(c=>c.text()),fetch(`${e}audio-processor.js`).then(c=>c.text()),fetch(`${e}wasm-pkg/gb_daw_wasm_bg.wasm`).then(c=>c.arrayBuffer())]),i=new Blob([kc,a,`
`,r],{type:"application/javascript"}),o=URL.createObjectURL(i);await this.ctx.audioWorklet.addModule(o),URL.revokeObjectURL(o),this.node=new AudioWorkletNode(this.ctx,"gb-apu-processor",{outputChannelCount:[2]}),this.gainNode=this.ctx.createGain(),this.node.connect(this.gainNode),this.gainNode.connect(this.ctx.destination),this.node.port.onmessage=c=>{const l=c.data;if(l.type==="ready"){this.ready=!0;for(const f of this.queue)this.node.port.postMessage(f);this.queue=[]}else if(l.type==="compile_result"){if(l.error)this.compileResolve?.reject(new Error(l.error));else{const f=l.debug?JSON.parse(l.debug):null;this.compileResolve?.resolve(f)}this.compileResolve=null}else if(l.type==="reload_result"){if(l.error)this.reloadResolve?.reject(new Error(l.error));else{const f=l.debug?JSON.parse(l.debug):null;this.reloadResolve?.resolve(f)}this.reloadResolve=null}else if(l.type==="peaks")this.observeCallback?.({peaks:l.data,position:null});else if(l.type==="observation"){const f=l.position&&l.position!=="null"?JSON.parse(l.position):null;this.observeCallback?.({peaks:l.peaks,position:f})}else l.type==="error"&&console.error("AudioEngine error:",l.message)},this.node.port.postMessage({type:"init",wasmBytes:s})}async resume(){await this.ctx?.resume()}send(e){this.ready&&this.node?this.node.port.postMessage(e):this.queue.push(e)}setPlaying(e){this.send({type:"set_playing",value:e})}loadSong(e){this.send({type:"load_song",json:JSON.stringify(e)})}requestPeaks(){this.send({type:"take_peaks"})}observe(){this.send({type:"observe"})}onObserve(e){this.observeCallback=e}compileTdb(e,a){return new Promise((r,s)=>{this.compileResolve={resolve:r,reject:s},this.send({type:"compile_tdb",text:e,name:a})})}reloadTdb(e,a){return new Promise((r,s)=>{this.reloadResolve={resolve:r,reject:s},this.send({type:"reload_tdb",text:e,name:a})})}liveSetConfig(e){this.send({type:"live_set_config",configJson:e})}liveUpdateConfig(e){this.send({type:"live_update_config",configJson:e})}liveTrigger(){this.send({type:"live_trigger"})}liveKeyDown(e,a){this.send({type:"live_key_down",semitone:e,velocity:a})}liveKeyUp(e){this.send({type:"live_key_up",semitone:e})}liveSetActive(e){this.send({type:"live_set_active",value:e})}liveLoadDemo(e,a,r){this.send({type:"live_load_demo",tdbText:e,instrumentName:a,demoJson:r})}liveStopDemo(){this.send({type:"live_stop_demo"})}setMuteMask(e){this.send({type:"set_mute_mask",mask:e})}setFocus(e){this.send({type:"set_focus",json:JSON.stringify(e)})}setVolume(e){this.gainNode&&(this.gainNode.gain.value=e)}}const xc=`## scale/maj
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
`,Ur="gb-daw-user-tdb";class Sc{libraryText=xc;#e=V(_n(localStorage.getItem(Ur)??""));get userText(){return t(this.#e)}set userText(e){p(this.#e,e,!0)}#t=C(()=>this.userText?this.userText+(this.userText.endsWith(`
`)?`
`:`

`)+this.libraryText:this.libraryText);get text(){return t(this.#t)}set text(e){p(this.#t,e)}#n=V("");get selectedSection(){return t(this.#n)}set selectedSection(e){p(this.#n,e,!0)}#a=V(0);get revision(){return t(this.#a)}set revision(e){p(this.#a,e,!0)}#o=V(null);get songAst(){return t(this.#o)}set songAst(e){p(this.#o,e,!0)}#r=V("");get selectedPatternLabel(){return t(this.#r)}set selectedPatternLabel(e){p(this.#r,e,!0)}#s=V(0);get selectedPartIndex(){return t(this.#s)}set selectedPartIndex(e){p(this.#s,e,!0)}#i=V("");get selectedInstrument(){return t(this.#i)}set selectedInstrument(e){p(this.#i,e,!0)}get librarySections(){const e=new Set,a=/^## (.+)$/gm;let r;for(;(r=a.exec(this.libraryText))!==null;)e.add(r[1]);return e}get userSections(){const e=new Set,a=/^## (.+)$/gm;let r;for(;(r=a.exec(this.userText))!==null;)e.add(r[1]);return e}isLibraryOnly(e){return this.librarySections.has(e)&&!this.userSections.has(e)}copyToUser(e){const a=this.getSectionContentFrom(this.libraryText,e);if(a===null)return;const r=this.userText.endsWith(`
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
`?r-1:r;this.userText=this.userText.slice(0,c)+this.userText.slice(o),this.persist()}resetUser(){this.userText="",this.persist()}persist(){localStorage.setItem(Ur,this.userText)}reload(){this.revision++}}const te=new Sc;let Qr=!1;async function As(){Qr||(await wasm_bindgen(),Qr=!0)}async function io(n){await As();const e=wasm_bindgen.list_instruments(n);return JSON.parse(e)}async function Pc(n,e){await As();const a=wasm_bindgen.resolve_instrument(n,e);return JSON.parse(a)}async function Ac(n){return await As(),wasm_bindgen.voice_config_to_toml(JSON.stringify(n))}async function Zr(n){await As();const e=wasm_bindgen.voice_config_activity(JSON.stringify(n));return JSON.parse(e)}class Tc{#e=V(null);get position(){return t(this.#e)}set position(e){p(this.#e,e,!0)}#t=V(null);get sourceMap(){return t(this.#t)}set sourceMap(e){p(this.#t,e,!0)}#n=V(!1);get playing(){return t(this.#n)}set playing(e){p(this.#n,e,!0)}updatePosition(e){this.position=e}}const Ae=new Tc;class Dc{#e=V(null);get region(){return t(this.#e)}set region(e){p(this.#e,e,!0)}bridge=null;setBridge(e){this.bridge=e}setRegion(e){this.region=e,this.bridge?.setFocus(e)}clearRegion(){this.setRegion(null)}get totalDuration(){return Ae.sourceMap?.timeline?.total_duration_secs??0}get isFullSong(){return this.region?this.region.start_secs<=0&&this.region.end_secs>=this.totalDuration:!0}get effectiveRegion(){return this.region?this.region:{start_secs:0,end_secs:this.totalDuration}}notchInPart(e,a,r){const s=a.part_start_secs[r],i=a.part_duration_secs[r];if(s==null||i==null||i<=0)return null;const o=e-s;return o<0||o>i?null:o/i}notchInClip(e,a,r,s,i){const o=a.part_start_secs[r];if(o==null)return null;const c=a.clip_timings[r]?.[s]?.[i];if(!c||c.duration_secs<=0)return null;const l=o+c.offset_secs,f=e-l;return f<0||f>c.duration_secs?null:f/c.duration_secs}partTimeRange(e,a){const r=e.part_start_secs[a],s=e.part_duration_secs[a];return r==null||s==null||s<=0?null:{start_secs:r,end_secs:r+s}}clipTimeRange(e,a,r,s){const i=e.part_start_secs[a];if(i==null)return null;const o=e.clip_timings[a]?.[r]?.[s];return!o||o.duration_secs<=0?null:{start_secs:i+o.offset_secs,end_secs:i+o.offset_secs+o.duration_secs}}}const He=new Dc,Jr="gb-daw-theme";class Rc{#e=V("system");get mode(){return t(this.#e)}set mode(e){p(this.#e,e,!0)}#t=V("dark");get _systemPref(){return t(this.#t)}set _systemPref(e){p(this.#t,e,!0)}#n=C(()=>this.mode==="system"?this._systemPref:this.mode);get resolved(){return t(this.#n)}set resolved(e){p(this.#n,e)}constructor(){const e=window.matchMedia("(prefers-color-scheme: dark)");this._systemPref=e.matches?"dark":"light",e.addEventListener("change",r=>{this._systemPref=r.matches?"dark":"light"});const a=localStorage.getItem(Jr);(a==="dark"||a==="light"||a==="system")&&(this.mode=a)}toggle(){const e=["dark","light","system"],a=e.indexOf(this.mode);this.setMode(e[(a+1)%e.length])}setMode(e){this.mode=e,localStorage.setItem(Jr,e)}}const Dn=new Rc;class qc{#e=V(_n(new Set));get mutedPartTracks(){return t(this.#e)}set mutedPartTracks(e){p(this.#e,e,!0)}#t=V(_n(new Set));get soloPartTracks(){return t(this.#t)}set soloPartTracks(e){p(this.#t,e,!0)}#n=V(_n(new Set));get mutedPatternLabels(){return t(this.#n)}set mutedPatternLabels(e){p(this.#n,e,!0)}#a=V(_n(new Set));get soloPatternLabels(){return t(this.#a)}set soloPatternLabels(e){p(this.#a,e,!0)}toggleMutePartTrack(e){const a=new Set(this.mutedPartTracks);a.has(e)?a.delete(e):a.add(e),this.mutedPartTracks=a}toggleSoloPartTrack(e){const a=new Set(this.soloPartTracks);a.has(e)?a.delete(e):a.add(e),this.soloPartTracks=a}toggleMutePatternLabel(e){const a=new Set(this.mutedPatternLabels);a.has(e)?a.delete(e):a.add(e),this.mutedPatternLabels=a}toggleSoloPatternLabel(e){const a=new Set(this.soloPatternLabels);a.has(e)?a.delete(e):a.add(e),this.soloPatternLabels=a}isPartTrackAudible(e){return!(this.mutedPartTracks.has(e)||this.soloPartTracks.size>0&&!this.soloPartTracks.has(e))}isPatternLabelAudible(e){return!(this.mutedPatternLabels.has(e)||this.soloPatternLabels.size>0&&!this.soloPatternLabels.has(e))}clear(){this.mutedPartTracks=new Set,this.soloPartTracks=new Set,this.mutedPatternLabels=new Set,this.soloPatternLabels=new Set}computeMask(e,a,r,s){if(!e||!r||s==null)return 0;const i=e.parts[a];if(!i)return 0;let o=0;for(let c=0;c<i.track_indices.length;c++){const l=i.track_indices[c],f=i.track_voice_offsets[c],u=i.track_voice_counts[c];if(!this.isPartTrackAudible(l)){for(let d=0;d<u;d++)o|=1<<f+d;continue}if(this.mutedPatternLabels.size>0||this.soloPatternLabels.size>0){const d=r.parts.find(v=>v.label===s);if(!d)continue;const m=d.tracks[l];if(!m)continue;const y=m.clips.find(v=>v.name!=="gap");if(!y)continue;const _=`${y.name}@${s}`,x=e.patterns[_];if(!x)continue;for(const v of x.voices)this.isPatternLabelAudible(v.track_label)||(o|=1<<f+v.voice)}}return o>>>0}}const On=new qc;class Cc{#e=V(null);get play(){return t(this.#e)}set play(e){p(this.#e,e,!0)}#t=V(null);get stop(){return t(this.#t)}set stop(e){p(this.#t,e,!0)}#n=V(!1);get playing(){return t(this.#n)}set playing(e){p(this.#n,e,!0)}}const Cn=new Cc,Lc=`# play-button
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
`;function Mc(n){const e=new Map;let a="";for(const r of n.split(`
`))r.startsWith("# ")?a=r.slice(2).trim():a&&r.trim()&&(e.set(a,r.trim()),a="");return e}const Ec=Mc(Lc);class Fc{#e=V("");get current(){return t(this.#e)}set current(e){p(this.#e,e,!0)}set(e){this.current=Ec.get(e)??""}clear(){this.current=""}}const ue=new Fc;var Oc=D("<button> </button>"),zc=D('<span class="hover-help svelte-1h259us"> </span>'),Nc=D('<button class="transport-btn svelte-1h259us">⏹</button>'),Ic=D('<button class="transport-btn svelte-1h259us">⏹</button>'),jc=D('<button class="focus-clear svelte-1h259us" title="Clear focus">&times;</button>'),Bc=D('<div><span class="focus-label svelte-1h259us">Focus</span> <input class="focus-input svelte-1h259us" type="number" step="0.1" min="0"/> <span class="focus-sep svelte-1h259us">&ndash;</span> <input class="focus-input svelte-1h259us" type="number" step="0.1" min="0"/> <!></div>'),Hc=D('<span class="error svelte-1h259us"> </span>'),Vc=D('<div class="transport svelte-1h259us"><button class="transport-btn svelte-1h259us"> </button> <!> <!> <div class="volume-control svelte-1h259us"><span class="volume-icon svelte-1h259us">&#9834;</span> <input class="volume-slider svelte-1h259us" type="range" min="0" max="1" step="0.01" aria-label="Volume"/></div> <!> <!></div>'),Gc=D('<div class="top-bar svelte-1h259us"><div class="mode-tabs svelte-1h259us"><span class="brand svelte-1h259us">Get</span> <!></div> <!> <!> <button class="theme-toggle svelte-1h259us"> </button></div>');function Kc(n,e){be(e,!0);let a=V("stopped"),r=V("not-initialized"),s=V(null),i=null,o=V(null),c=null,l=V(.75);Ie(()=>{e.bridge.onObserve(M=>{Ae.updatePosition(M.position)})});function f(){u(),c=setInterval(()=>e.bridge.observe(),50)}function u(){c&&(clearInterval(c),c=null)}function d(M){M.target instanceof HTMLInputElement||M.target instanceof HTMLTextAreaElement||M.target instanceof HTMLSelectElement||(M.code==="Space"?(M.preventDefault(),_()):M.code==="Escape"&&(t(a)!=="stopped"||Cn.playing)&&(M.preventDefault(),v()))}Ie(()=>(window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d))),Ie(()=>{e.mode==="instrument"&&!Cn.playing&&t(a)==="playing"&&(p(a,"stopped"),Ae.playing=!1,Ae.updatePosition(null),u())}),Ie(()=>{On.mutedPartTracks,On.soloPartTracks,On.mutedPatternLabels,On.soloPatternLabels;const M=Ae.sourceMap,K=Ae.position,Z=te.songAst;if(!Ae.playing){e.bridge.setMuteMask(0);return}const W=K?.part_idx??te.selectedPartIndex,ee=Z?.score.sequence[W]?.part_name??null,ie=On.computeMask(M,W,Z,ee);e.bridge.setMuteMask(ie)}),Ie(()=>{const M=te.text,K=te.selectedSection;if(!(t(a)!=="playing"||!K)&&e.mode!=="instrument")return i&&clearTimeout(i),i=setTimeout(async()=>{try{const Z=M.endsWith(`
`)?M:M+`
`,$=await e.bridge.reloadTdb(Z,K);$&&(Ae.sourceMap=$),p(o,K,!0),p(s,null)}catch(Z){p(s,Z instanceof Error?Z.message:String(Z),!0)}},300),()=>{i&&(clearTimeout(i),i=null)}});async function m(){if(t(r)!=="ready"){p(r,"loading");try{await e.bridge.init(),p(r,"ready")}catch(M){console.error("Failed to init audio bridge:",M),p(r,"error")}}}function y(){return e.mode==="instrument"?Cn.playing:t(a)==="playing"}async function _(){if(p(s,null),e.mode==="instrument"){Cn.playing?(Cn.stop?.(),p(a,"stopped"),Ae.playing=!1,Ae.updatePosition(null),u()):(Cn.playing=!0,Cn.play?.(),p(a,"playing"),Ae.playing=!0,f());return}if(t(a)==="playing"){e.bridge.setPlaying(!1),p(a,"paused"),Ae.playing=!1,u();return}if(t(a)==="paused"){t(o)!==te.selectedSection?await x():(e.bridge.setPlaying(!0),p(a,"playing"),Ae.playing=!0,f());return}await x()}async function x(){if(!te.selectedSection){p(s,"Select a pattern first");return}if(await m(),t(r)==="ready"){await e.bridge.resume();try{const M=te.text.endsWith(`
`)?te.text:te.text+`
`,K=await e.bridge.compileTdb(M,te.selectedSection);K&&(Ae.sourceMap=K),p(o,te.selectedSection,!0),p(a,"playing"),Ae.playing=!0,e.bridge.setPlaying(!0),f()}catch(M){p(s,M instanceof Error?M.message:String(M),!0)}}}function v(){if(e.mode==="instrument"){Cn.stop?.(),p(a,"stopped"),Ae.playing=!1,Ae.updatePosition(null),u();return}e.bridge.setPlaying(!1),p(a,"stopped"),Ae.playing=!1,Ae.updatePosition(null),u()}function T(M){const K=parseFloat(M.target.value);p(l,K,!0),e.bridge.setVolume(K)}function L(M){const K=parseFloat(M.target.value);if(isNaN(K))return;const Z=He.totalDuration,$=Math.max(0,Math.min(K,Z)),W=He.effectiveRegion,ee=Math.max($+.1,W.end_secs);$<=0&&ee>=Z?He.clearRegion():He.setRegion({start_secs:$,end_secs:ee})}function O(M){const K=parseFloat(M.target.value);if(isNaN(K))return;const Z=He.totalDuration,$=Math.max(0,Math.min(K,Z)),W=He.effectiveRegion,ee=Math.min($-.1,W.start_secs);ee<=0&&$>=Z?He.clearRegion():He.setRegion({start_secs:Math.max(0,ee),end_secs:$})}const A=[{id:"song",label:"Score",hint:"mode-score"},{id:"instrument",label:"Tone",hint:"mode-tone"},{id:"help",label:"Help",hint:"mode-help"},{id:"seqn",label:"Source",hint:"mode-source"}];var k=Gc(),g=w(k),R=h(w(g),2);Be(R,17,()=>A,je,(M,K)=>{var Z=Oc();let $;var W=w(Z);ae(()=>{$=_e(Z,1,"mode-tab svelte-1h259us",null,$,{active:e.mode===t(K).id}),ke(W,t(K).label)}),H("click",Z,()=>e.onmode(t(K).id)),J("mouseenter",Z,()=>ue.set(t(K).hint)),S(M,Z)});var z=h(g,2);{var B=M=>{var K=zc(),Z=w(K);ae(()=>ke(Z,ue.current)),S(M,K)};Y(z,M=>{ue.current&&M(B)})}var F=h(z,2);{var Q=M=>{var K=Vc(),Z=w(K),$=w(Z),W=h(Z,2);{var ee=Se=>{var Le=Nc();H("click",Le,v),J("mouseenter",Le,()=>ue.set("stop-button")),S(Se,Le)};Y(W,Se=>{t(a)!=="stopped"&&e.mode!=="instrument"&&Se(ee)})}var ie=h(W,2);{var ce=Se=>{var Le=Ic();H("click",Le,v),J("mouseenter",Le,()=>ue.set("stop-button")),S(Se,Le)};Y(ie,Se=>{Cn.playing&&e.mode==="instrument"&&Se(ce)})}var qe=h(ie,2),re=h(w(qe),2),me=h(qe,2);{var Ce=Se=>{var Le=Bc();let We;var $e=h(w(Le),2),nn=h($e,4),Sn=h(nn,2);{var it=gn=>{var bn=jc();H("click",bn,()=>He.clearRegion()),S(gn,bn)};Y(Sn,gn=>{He.isFullSong||gn(it)})}ae((gn,bn)=>{We=_e(Le,1,"focus-section svelte-1h259us",null,We,{dimmed:He.isFullSong}),Wt($e,gn),Wt(nn,bn)},[()=>He.effectiveRegion.start_secs.toFixed(1),()=>He.effectiveRegion.end_secs.toFixed(1)]),J("mouseenter",Le,()=>ue.set("focus-region")),H("change",$e,L),H("change",nn,O),S(Se,Le)};Y(me,Se=>{e.mode!=="instrument"&&Se(Ce)})}var we=h(me,2);{var Re=Se=>{var Le=Hc(),We=w(Le);ae(()=>ke(We,t(s))),S(Se,Le)};Y(we,Se=>{t(s)&&Se(Re)})}ae(Se=>{ke($,Se),Wt(re,t(l))},[()=>y()?"⏸":"▶"]),H("click",Z,_),J("mouseenter",Z,()=>ue.set("play-button")),J("mouseenter",qe,()=>ue.set("volume-slider")),H("input",re,T),S(M,K)};Y(F,M=>{e.mode!=="help"&&M(Q)})}var E=h(F,2),N=w(E);ae(()=>{Xe(E,"title",`Toggle theme (${Dn.mode??""})`),ke(N,Dn.mode==="system"?"◑":Dn.mode==="dark"?"☾":"☀")}),H("click",E,()=>Dn.toggle()),J("mouseenter",E,()=>ue.set("theme-toggle")),S(n,k),ye()}Ke(["click","input","change"]);let Xr=!1;async function ha(){Xr||(await wasm_bindgen(),Xr=!0)}async function Wc(n){await ha();const e=wasm_bindgen.list_songs(n);return JSON.parse(e)}async function Uc(n,e){await ha();const a=wasm_bindgen.parse_song_ast(n,e);return JSON.parse(a)}async function Vs(n){return await ha(),wasm_bindgen.emit_song_ast(JSON.stringify(n))}async function Qc(n,e,a){await ha();const r=wasm_bindgen.rename_pattern(JSON.stringify(n),e,a);return JSON.parse(r)}async function Zc(n,e,a){await ha();const r=wasm_bindgen.rename_part(JSON.stringify(n),e,a);return JSON.parse(r)}async function Jc(n,e){await ha();const a=wasm_bindgen.compile_source_map(n,e);return JSON.parse(a)}async function Xc(n){await ha();const e=wasm_bindgen.parse_part_settings_text(n);return JSON.parse(e)}const Yc=new Set(["Swing","AccentPct","Groove","Humanize","Strum"]);function Ka(n){return"Group"in n?Object.keys(n.Group)[0]:Object.keys(n)[0]}function pr(n){return"Group"in n?Object.values(n.Group)[0]:Object.values(n)[0]}function $c(n,e){return Yc.has(n)?{Group:{[n]:e}}:{[n]:e}}const eu={Bpm:120,Swing:0,AccentPct:50,Groove:"Off",ChorusRate:1.5,ChorusDepth:.5,ChorusMix:0,ChorusToDelay:0,ChorusToReverb:0,DelayTime:.375,DelayFeedback:.4,DelayDamping:.5,DelayPingPong:!1,DelayMix:0,DelayToReverb:0,ReverbSize:.5,ReverbMix:0,Sidechain:"",SidechainAmt:0,SidechainRelease:.1,TapeStopTime:1e3,TapeStartTime:200,TapeStopCurve:2,MasterDrive:0,CompThreshold:0,CompRatio:1,CompAttack:.01,CompRelease:.1,Humanize:0,Strum:0},nu={Bpm:{min:20,max:300,step:1},Swing:{min:0,max:100,step:1},AccentPct:{min:0,max:100,step:1},ChorusRate:{min:.01,max:20,step:.01},ChorusDepth:{min:0,max:1,step:.01},ChorusMix:{min:0,max:1,step:.01},ChorusToDelay:{min:0,max:1,step:.01},ChorusToReverb:{min:0,max:1,step:.01},DelayTime:{min:.01,max:2,step:.001},DelayFeedback:{min:0,max:1,step:.01},DelayDamping:{min:0,max:1,step:.01},DelayMix:{min:0,max:1,step:.01},DelayToReverb:{min:0,max:1,step:.01},ReverbSize:{min:0,max:1.5,step:.01},ReverbMix:{min:0,max:1,step:.01},SidechainAmt:{min:0,max:1,step:.01},SidechainRelease:{min:.01,max:2,step:.01},TapeStopTime:{min:100,max:5e3,step:10},TapeStartTime:{min:50,max:5e3,step:10},TapeStopCurve:{min:1,max:4,step:.1},MasterDrive:{min:0,max:1,step:.01},CompThreshold:{min:0,max:1,step:.01},CompRatio:{min:1,max:20,step:.1},CompAttack:{min:.001,max:1,step:.001},CompRelease:{min:.01,max:2,step:.01},Humanize:{min:0,max:100,step:1},Strum:{min:0,max:200,step:1}},Bt=[{label:"Rhythm",color:"#66aacc",keys:["Bpm","Swing","AccentPct","Groove","Humanize","Strum"]},{label:"Chorus",color:"#66cc88",prefixes:["Chorus"],keys:["ChorusRate","ChorusDepth","ChorusMix","ChorusToDelay","ChorusToReverb"]},{label:"Delay",color:"#66cc88",prefixes:["Delay"],keys:["DelayTime","DelayFeedback","DelayDamping","DelayPingPong","DelayMix","DelayToReverb"]},{label:"Reverb",color:"#66cc88",prefixes:["Reverb"],keys:["ReverbSize","ReverbMix"]},{label:"Sidechain",color:"#ccaa66",prefixes:["Sidechain"],keys:["Sidechain","SidechainAmt","SidechainRelease"]},{label:"Tape Stop",color:"#cc88cc",prefixes:["Tape"],keys:["TapeStopTime","TapeStartTime","TapeStopCurve"]},{label:"Master",color:"#cc6666",prefixes:["Master","Comp"],keys:["MasterDrive","CompThreshold","CompRatio","CompAttack","CompRelease"]}],tu=[{label:"Rhythm",color:"#3070a0",keys:Bt[0].keys},{label:"Chorus",color:"#2a8a48",prefixes:["Chorus"],keys:Bt[1].keys},{label:"Delay",color:"#2a8a48",prefixes:["Delay"],keys:Bt[2].keys},{label:"Reverb",color:"#2a8a48",prefixes:["Reverb"],keys:Bt[3].keys},{label:"Sidechain",color:"#a08030",prefixes:["Sidechain"],keys:Bt[4].keys},{label:"Tape Stop",color:"#9a50a0",prefixes:["Tape"],keys:Bt[5].keys},{label:"Master",color:"#b04040",prefixes:["Master","Comp"],keys:Bt[6].keys}];function au(n){return n==="light"?tu:Bt}var su=D("<span>&#9656;</span>"),ru=D('<button class="create-btn svelte-181dlmc" title="New">+</button>'),iu=D('<div class="scroll-fade scroll-fade-top svelte-181dlmc"></div>'),ou=D('<span class="lib-badge svelte-181dlmc">L</span>'),lu=D("<button><!> </button>"),cu=D('<div class="scroll-fade scroll-fade-bottom svelte-181dlmc"></div>'),uu=D('<div class="sidebar svelte-181dlmc"><div><!> <span class="sidebar-title svelte-181dlmc"> </span> <!></div> <div class="sidebar-items-wrap svelte-181dlmc"><!> <div class="sidebar-items svelte-181dlmc"></div> <!></div></div>');function Gs(n,e){be(e,!0);let a=ge(e,"collapsible",3,!1),r=ge(e,"defaultCollapsed",3,!1),s=V(!1);Ie(()=>{p(s,r())});let i=V(void 0),o=V(!1),c=V(!1),l=C(()=>a()&&t(s)?e.items.filter(E=>E.id===e.activeId):e.items);function f(){if(!t(i))return;const{scrollTop:E,scrollHeight:N,clientHeight:M}=t(i);p(o,E>1),p(c,E+M<N-1)}Ie(()=>{t(l),requestAnimationFrame(f)}),Ie(()=>{if(!t(i))return;const E=t(i),N=new ResizeObserver(f);return N.observe(E),()=>N.disconnect()});function u(){a()&&(p(s,!t(s)),t(s)||requestAnimationFrame(()=>{t(i)?.querySelector(".sidebar-item.active")?.scrollIntoView({block:"nearest"})}))}function d(){p(s,!0)}var m={collapse:d},y=uu(),_=w(y);let x;var v=w(_);{var T=E=>{var N=su();let M;ae(()=>M=_e(N,1,"chevron svelte-181dlmc",null,M,{open:!t(s)})),S(E,N)};Y(v,E=>{a()&&E(T)})}var L=h(v,2),O=w(L),A=h(L,2);{var k=E=>{var N=ru();H("click",N,M=>{M.stopPropagation(),e.oncreate()}),S(E,N)};Y(A,E=>{e.oncreate&&E(k)})}var g=h(_,2),R=w(g);{var z=E=>{var N=iu();S(E,N)};Y(R,E=>{t(o)&&E(z)})}var B=h(R,2);Be(B,21,()=>t(l),je,(E,N)=>{var M=lu();let K;var Z=w(M);{var $=ie=>{var ce=ou();S(ie,ce)},W=C(()=>e.libraryIds?.has(t(N).id));Y(Z,ie=>{t(W)&&ie($)})}var ee=h(Z,1,!0);ae((ie,ce)=>{K=_e(M,1,"sidebar-item svelte-181dlmc",null,K,ie),M.disabled=ce,ke(ee,t(N).label)},[()=>({active:t(N).id===e.activeId,greyed:e.greyedOut?.has(t(N).id)}),()=>e.greyedOut?.has(t(N).id)]),H("click",M,()=>e.onselect(t(N).id)),S(E,M)}),Ft(B,E=>p(i,E),()=>t(i));var F=h(B,2);{var Q=E=>{var N=cu();S(E,N)};Y(F,E=>{t(c)&&E(Q)})}return ae(()=>{x=_e(_,1,"sidebar-header svelte-181dlmc",null,x,{clickable:a()}),Xe(_,"role",a()?"button":void 0),Xe(_,"tabindex",a()?0:void 0),ke(O,e.title)}),J("mouseenter",y,()=>{e.hint&&ue.set(e.hint)}),H("click",_,u),H("keydown",_,E=>{(E.key==="Enter"||E.key===" ")&&(E.preventDefault(),u())}),J("scroll",B,f),S(n,y),ye(m)}Ke(["click","keydown"]);var du=D('<button class="seq-focus svelte-owygqe" title="Focus">&#8857;</button>'),fu=D('<button class="seq-delete svelte-owygqe" title="Remove">&times;</button>'),mu=D('<div class="seq-actions svelte-owygqe"><!> <!></div>'),pu=D("<span></span>"),hu=D('<div class="seq-item svelte-owygqe"><!> <button draggable="true"><!> <!></button></div>'),vu=D('<div class="seq-bar svelte-owygqe"><!> <button class="seq-add svelte-owygqe" title="Add">+</button></div>');function Wa(n,e){be(e,!0);let a=ge(e,"activeIndex",19,()=>-1),r=ge(e,"activeProgress",3,0),s=V(-1),i=V(-1);function o(v,T){p(s,T,!0),v.dataTransfer&&(v.dataTransfer.effectAllowed="move",v.dataTransfer.setData("text/plain",String(T)))}function c(v,T){v.preventDefault(),v.dataTransfer&&(v.dataTransfer.dropEffect="move"),p(i,T,!0)}function l(){p(i,-1)}function f(v,T){v.preventDefault(),t(s)!==-1&&t(s)!==T&&e.onmove(t(s),T),p(s,-1),p(i,-1)}function u(){p(s,-1),p(i,-1)}let d=V(void 0);function m(v,T,L){if(!e.onfocusdrag)return;v.preventDefault(),v.stopPropagation();const O=k=>{if(!t(d))return;const g=t(d).querySelectorAll(".seq-block");let R=L,z=0;for(let B=0;B<g.length;B++){const F=g[B].getBoundingClientRect();if(k.clientX>=F.left&&k.clientX<=F.right){R=B,z=Math.max(0,Math.min(1,(k.clientX-F.left)/F.width));break}if(B===0&&k.clientX<F.left){R=0,z=0;break}if(B===g.length-1&&k.clientX>F.right){R=B,z=1;break}}e.onfocusdrag(T,z,R)},A=()=>{window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",A)};window.addEventListener("mousemove",O),window.addEventListener("mouseup",A)}var y=vu(),_=w(y);Be(_,17,()=>e.items,je,(v,T,L)=>{var O=hu(),A=w(O);{var k=N=>{var M=mu(),K=w(M);{var Z=ee=>{var ie=du();H("click",ie,()=>e.onfocus(L)),S(ee,ie)};Y(K,ee=>{e.onfocus&&ee(Z)})}var $=h(K,2);{var W=ee=>{var ie=fu();H("click",ie,()=>e.ondelete(L)),S(ee,ie)};Y($,ee=>{e.ondelete&&ee(W)})}S(N,M)};Y(A,N=>{(e.ondelete||e.onfocus)&&N(k)})}var g=h(A,2);let R;var z=w(g);{var B=N=>{var M=qa(),K=Te(M);Be(K,17,()=>e.focusNotches[L],je,(Z,$)=>{var W=pu();ae(ee=>{_e(W,1,`focus-notch ${t($).type??""}`,"svelte-owygqe"),Ue(W,`left: ${ee??""}%`)},[()=>(t($).position*100).toFixed(1)]),H("mousedown",W,ee=>m(ee,t($).type,L)),S(Z,W)}),S(N,M)};Y(z,N=>{e.focusNotches?.[L]&&N(B)})}var F=h(z,2);{var Q=N=>{var M=qa(),K=Te(M);mr(K,()=>e.content,()=>t(T),()=>L),S(N,M)},E=N=>{var M=sc();ae(()=>ke(M,t(T).label)),S(N,M)};Y(F,N=>{e.content?N(Q):N(E,!1)})}ae(N=>{Ue(O,t(T).weight!=null?`flex-grow: ${t(T).weight};`:""),R=_e(g,1,"seq-block svelte-owygqe",null,R,{selected:L===e.selectedIndex,playing:a()>=0&&L===a(),"drag-over":t(i)===L&&t(s)!==L,dragging:t(s)===L,"has-content":e.content!=null}),Ue(g,N)},[()=>a()>=0&&L===a()?`--pb-progress: ${(r()*100).toFixed(1)}%`:""]),H("click",g,()=>e.onselect(L)),J("dragstart",g,N=>o(N,L)),J("dragover",g,N=>c(N,L)),J("dragleave",g,l),J("drop",g,N=>f(N,L)),J("dragend",g,u),S(v,O)});var x=h(_,2);Ft(y,v=>p(d,v),()=>t(d)),H("click",x,function(...v){e.onadd?.apply(this,v)}),S(n,y),ye()}Ke(["click","mousedown"]);function os(n){return Object.keys(n)[0]}function oo(n){return Object.values(n)[0]}const Yr=["Swing","AccentPct","Groove","Humanize","Strum"];function Ha(n){return n==="Accent"?"ac":n.Named}function ya(n){let e=null,a=[],r=n;for(let s=0;s<2;s++)typeof r=="object"&&r!==null&&"Probable"in r?(e=r.Probable[1],r=r.Probable[0]):typeof r=="object"&&r!==null&&"ParameterLocked"in r&&(a=r.ParameterLocked[1],r=r.ParameterLocked[0]);return[r,e,a]}function ls(n){const[e]=ya(n);return e==="Hit"||e==="Accent"||e==="Rest"||e==="Sustain"}function Ks(n){const[e,a,r]=ya(n);let s;if(e==="Hit")s="o";else if(e==="Accent")s="x";else if(e==="Rest")s=".";else if(e==="Sustain")s="-";else if(typeof e=="object"&&"Tonal"in e){const[,i]=e.Tonal;if("Degree"in i)s=String(i.Degree);else{const o=i.Note;let l=["c","","d","","e","f","","g","","a","","b"][o.base]||"?";o.offset>0&&(l+="#".repeat(o.offset)),o.offset<0&&(l+="_".repeat(-o.offset)),o.octave!==null&&(l+=o.octave),s=l}}else s="?";return r.length>0&&(s+="·"),a!==null&&(s+=`?${a}`),s}function _u(n){if("Mix"in n){const e=n.Mix,a=Object.keys(e)[0],r=Object.values(e)[0];return`${a.replace(/([a-z0-9])([A-Z])/g,"$1_$2").toLowerCase()}=${r}`}return"Velocity"in n?`velocity=${n.Velocity}`:""}function Ws(n){if(n==="Hit")return"o";if(n==="Accent")return"x";if(n==="Rest")return".";if(n==="Sustain")return"-";if(typeof n=="object"&&"Tonal"in n){const[e,a]=n.Tonal,r=e==="Accented"?">":e==="Slide"?"~":"";let s;if("Degree"in a)s=String(a.Degree);else{const i=a.Note;let c=["c","","d","","e","f","","g","","a","","b"][i.base]||"?";i.offset>0&&(c+="#".repeat(i.offset)),i.offset<0&&(c+="_".repeat(-i.offset)),i.octave!==null&&(c+=i.octave),s=c}return`${r}${s}`}if(typeof n=="object"&&"ParameterLocked"in n){const[e,a]=n.ParameterLocked,r=a.map(_u).join(",");return`${Ws(e)}{${r}}`}if(typeof n=="object"&&"Probable"in n){const[e,a]=n.Probable;return`${Ws(e)}?${a}`}return"?"}function gu(n){const[e,a,r]=ya(n);let s;if(e==="Rest")s="Hit";else if(e==="Hit")s="Accent";else if(e==="Accent")s="Rest";else if(e==="Sustain")s="Rest";else return n;return s==="Rest"||(r.length>0&&(s={ParameterLocked:[s,r]}),a!==null&&(s={Probable:[s,a]})),s}function bu(n){const e=typeof n=="string"?n:Object.keys(n)[0],a=typeof n=="string"?"":Object.values(n)[0];return`${e}: ${a}`}function lo(n){return"ToneSetting"in n?bu(n.ToneSetting):`${ds(n)}: ${po(n)}`}const ta=[{label:"Tone",color:"#aa88cc",keys:["Octave","Instrument","Scale","Root","Velocity"]},{label:"Arp",color:"#88ccaa",prefixes:["Arp"],keys:["Arp","ArpRate","ArpMode","ArpOctaves","ArpSlide"]},{label:"Voice",color:"#66aacc",keys:["Legato","Voices","Glide"]},{label:"Mix",color:"#ccaa66",suffixes:["Send"],keys:["Level","DrySend","ChorusSend","DelaySend","ReverbSend"]},{label:"Rhythm",color:"#cc8888",keys:["Swing","AccentPct","Groove","Humanize","Strum","StrumIdx"]}],yu=[{label:"Tone",color:"#7a58a8",keys:ta[0].keys},{label:"Arp",color:"#3a8a6a",prefixes:["Arp"],keys:ta[1].keys},{label:"Voice",color:"#3070a0",keys:ta[2].keys},{label:"Mix",color:"#a08030",suffixes:["Send"],keys:ta[3].keys},{label:"Rhythm",color:"#a05050",keys:ta[4].keys}];function co(n){return n==="light"?yu:ta}function $r(n,e){for(const a of e.prefixes??[])if(n.startsWith(a)&&n.length>a.length)return n.slice(a.length);for(const a of e.suffixes??[])if(n.endsWith(a)&&n.length>a.length)return n.slice(0,-a.length);return n}const uo={Octave:{min:0,max:8,step:1},Root:{min:0,max:11,step:1},Velocity:{min:0,max:127,step:1},ArpRate:{min:1,max:64,step:1},ArpOctaves:{min:1,max:4,step:1},Legato:{min:0,max:1,step:.01},Voices:{min:1,max:8,step:1},Glide:{min:0,max:1,step:.01},Level:{min:0,max:1,step:.01},DrySend:{min:0,max:1,step:.01},ChorusSend:{min:0,max:1,step:.01},DelaySend:{min:0,max:1,step:.01},ReverbSend:{min:0,max:1,step:.01},Swing:{min:0,max:100,step:1},AccentPct:{min:0,max:100,step:1},Humanize:{min:0,max:100,step:1},Strum:{min:0,max:200,step:1},StrumIdx:{min:0,max:15,step:1}},fo={Octave:3,Instrument:"",Scale:"",Root:0,Velocity:100,Arp:"Off",ArpRate:4,ArpMode:"Up",ArpOctaves:1,ArpSlide:!1,Legato:.8,Voices:1,Glide:0,Level:1,DrySend:1,ChorusSend:0,DelaySend:0,ReverbSend:0,Swing:0,AccentPct:50,Groove:"Off",Humanize:0,Strum:0,StrumIdx:null};ta.filter(n=>n.label!=="Mix");function ku(n){return co(n).filter(e=>e.label!=="Mix")}function mo(n){return n==="ArpSlide"?"boolean":n==="Scale"||n==="Instrument"||n==="Arp"||n==="ArpMode"||n==="Groove"||n==="StrumIdx"?"string":"number"}function wu(n,e){return n==="StrumIdx"&&e===null?"off":e==null||e===""?"":n==="Arp"&&typeof e=="object"&&e!==null&&"Preset"in e?e.Preset:n==="Arp"&&typeof e=="object"&&e!==null&&"Custom"in e?e.Custom.join(" "):n==="Groove"&&typeof e=="object"&&e!==null&&"Preset"in e?e.Preset:n==="Groove"&&typeof e=="object"&&e!==null&&"Custom"in e?e.Custom.join(" "):String(e)}function ei(n,e){if(n==="Arp"&&typeof e=="string")return e.toLowerCase()==="off"?"Off":{Preset:e};if(n==="Groove"&&typeof e=="string")return e.toLowerCase()==="off"?"Off":{Preset:e};if(n==="StrumIdx"&&typeof e=="string"){if(e.toLowerCase()==="off")return null;const a=parseInt(e,10);return isNaN(a)?e:a}return n==="ArpMode"&&typeof e=="string"?{up:"Up",down:"Down",updown:"UpDown",random:"Random"}[e.toLowerCase()]??e:e}const xu=new Set(["Octave","Scale","Root","Instrument","Legato","Voices","Velocity","Glide","Arp","ArpRate","ArpMode","ArpOctaves","ArpSlide","StrumIdx"]),Su=new Set(["Level","DrySend","ChorusSend","DelaySend","ReverbSend"]),Pu=new Set(["Swing","AccentPct","Groove","Humanize","Strum"]);function ds(n){return"ToneSetting"in n?Object.keys(n.ToneSetting)[0]:"Group"in n?Object.keys(n.Group)[0]:"Mix"in n?Object.keys(n.Mix)[0]:Object.keys(n)[0]}function po(n){return"ToneSetting"in n?Object.values(n.ToneSetting)[0]:"Group"in n?Object.values(n.Group)[0]:"Mix"in n?Object.values(n.Mix)[0]:Object.values(n)[0]}function ni(n,e){return xu.has(n)?{ToneSetting:{[n]:e}}:Pu.has(n)?{Group:{[n]:e}}:Su.has(n)?{Mix:{[n]:e}}:{Mix:{[n]:e}}}function cs(n){let e=0;for(const a of n){if("Beat"in a)break;e++}return e}function Au(n){const e=n.trim();if(e==="-")return"Hold";if(e===".")return"Pass";const a=parseFloat(e);return isNaN(a)?null:{Value:a}}function ti(n){return n==="Hold"?"-":n==="Pass"?".":String(n.Value)}function Us(n){let e=n.trim();e.startsWith("@")&&(e=e.slice(1));const a=e.indexOf(":");if(a<0)return null;const r=e.slice(0,a).trim();if(!r)return null;const s=e.slice(a+1).trim();if(!s)return null;const i=s.split("|"),o=[];for(const c of i){const l=c.trim().split(/\s+/).filter(Boolean),f=[];for(const u of l)if(u==="-")f.push("Hold");else if(u===".")f.push("Pass");else if(u.startsWith("*")){const d=parseInt(u.slice(1),10);if(isNaN(d)||d<1||f.length===0)return null;const m=f[f.length-1];for(let y=1;y<d;y++)f.push(m)}else{const d=parseFloat(u);if(isNaN(d))return null;f.push({Value:d})}if(f.length===0)return null;o.push(f)}return o.length===0?null:{trivia:{leading:[],trailing_comment:null},parameter:r,sections:o}}function Qs(n){let e=n.trim();e.startsWith("$")&&(e=e.slice(1));const a=e.indexOf(":");if(a<0)return null;const r=e.slice(0,a).trim();if(!r)return null;const s=e.slice(a+1).trim();if(!s)return null;const i=s.split(/\s+/).filter(Boolean),o=[];let c=-1;for(const l of i){const f=l.indexOf("@");if(f<0)return null;const u=l.slice(0,f);let d=l.slice(f+1);const m=parseFloat(u);if(isNaN(m))return null;let y="Beats";d.endsWith("s")&&(y="Seconds",d=d.slice(0,-1));const _=parseFloat(d);if(isNaN(_)||_<=c)return null;c=_,o.push({value:m,time:_,time_unit:y})}return o.length===0?null:{trivia:{leading:[],trailing_comment:null},parameter:r,events:o}}var Tu=D("<option> </option>"),Du=D('<label class="mini-label svelte-sehkf">mix <input class="clip-input num-input svelte-sehkf"/></label>'),Ru=D('<span class="clip editing svelte-sehkf"><select class="clip-input name-select svelte-sehkf"><option>gap</option><!></select> <label class="mini-label svelte-sehkf">&times; <input class="clip-input num-input svelte-sehkf"/></label> <!> <button class="ok-btn svelte-sehkf">ok</button> <button class="cancel-btn svelte-sehkf">esc</button></span>'),qu=D('<span class="badge times svelte-sehkf"> </span>'),Cu=D('<span class="badge mix svelte-sehkf"> </span>'),Lu=D('<button class="edit-pattern-btn svelte-sehkf" title="Edit pattern">&#9998;</button>'),Mu=D("<span></span>"),Eu=D('<span role="button" tabindex="0"><span class="clip-name svelte-sehkf"> </span> <!> <!> <!> <button class="delete-btn svelte-sehkf" title="Remove clip">&times;</button> <!></span>');function Fu(n,e){be(e,!0);let a=ge(e,"progress",19,()=>-1),r=ge(e,"focusNotches",3,null),s=V(!1),i=V(""),o=V("1"),c=V("1"),l=V(!1),f=V(void 0);async function u(){t(l)||(p(i,e.clip.name,!0),p(o,String(e.clip.times),!0),p(c,String(e.clip.mix),!0),p(s,!0),await Ji(),t(f)?.focus())}function d(){const O=parseFloat(t(o))||1,A=t(i)==="gap"?1:parseFloat(t(c))||1;e.onchange({name:t(i)||e.clip.name,times:O,mix:A,automation:e.clip.automation,step_automation:e.clip.step_automation}),p(s,!1)}function m(){p(s,!1)}function y(O){O.key==="Enter"&&d(),O.key==="Escape"&&m()}function _(O,A){if(!e.onfocusdrag)return;O.stopPropagation(),O.preventDefault(),p(l,!0);const k=O.currentTarget.parentElement;if(!k)return;function g(z){const B=k.getBoundingClientRect(),F=Math.max(0,Math.min((z.clientX-B.left)/B.width,1));e.onfocusdrag(A,F)}function R(){window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",R),setTimeout(()=>{p(l,!1)},0)}window.addEventListener("mousemove",g),window.addEventListener("mouseup",R)}var x=qa(),v=Te(x);{var T=O=>{var A=Ru(),k=w(A),g=w(k);g.value=g.__value="gap";var R=h(g);Be(R,17,()=>e.patterns.filter(M=>M!=="gap"),je,(M,K)=>{var Z=Tu(),$=w(Z),W={};ae(()=>{ke($,t(K)),W!==(W=t(K))&&(Z.value=(Z.__value=t(K))??"")}),S(M,Z)}),Ft(k,M=>p(f,M),()=>t(f));var z=h(k,2),B=h(w(z)),F=h(z,2);{var Q=M=>{var K=Du(),Z=h(w(K));Hn(Z,()=>t(c),$=>p(c,$)),S(M,K)};Y(F,M=>{t(i)!=="gap"&&M(Q)})}var E=h(F,2),N=h(E,2);H("keydown",A,y),pc(k,()=>t(i),M=>p(i,M)),Hn(B,()=>t(o),M=>p(o,M)),H("click",E,d),H("click",N,m),S(O,A)},L=O=>{var A=Eu();let k;var g=w(A),R=w(g),z=h(g,2);{var B=$=>{var W=qu(),ee=w(W);ae(()=>ke(ee,`×${e.clip.times??""}`)),S($,W)};Y(z,$=>{e.clip.times!==1&&$(B)})}var F=h(z,2);{var Q=$=>{var W=Cu(),ee=w(W);ae(()=>ke(ee,`mix ${e.clip.mix??""}`)),S($,W)};Y(F,$=>{e.clip.mix!==1&&e.clip.name!=="gap"&&$(Q)})}var E=h(F,2);{var N=$=>{var W=Lu();H("click",W,ee=>{ee.stopPropagation(),e.oneditpattern()}),S($,W)};Y(E,$=>{e.clip.name!=="gap"&&$(N)})}var M=h(E,2),K=h(M,2);{var Z=$=>{var W=qa(),ee=Te(W);Be(ee,17,r,je,(ie,ce)=>{var qe=Mu();ae(re=>{_e(qe,1,`focus-notch ${t(ce).type??""}`,"svelte-sehkf"),Ue(qe,`left: ${re??""}%`)},[()=>(t(ce).position*100).toFixed(1)]),H("mousedown",qe,re=>_(re,t(ce).type)),S(ie,qe)}),S($,W)};Y(K,$=>{r()&&$(Z)})}ae($=>{k=_e(A,1,"clip svelte-sehkf",null,k,{playing:a()>=0,gap:e.clip.name==="gap"}),Ue(A,$),ke(R,e.clip.name)},[()=>a()>=0?`--clip-progress: ${(a()*100).toFixed(1)}%`:""]),H("click",A,u),H("keydown",A,$=>$.key==="Enter"&&u()),J("mouseenter",A,()=>ue.set("clip-block")),H("click",M,$=>{$.stopPropagation(),e.ondelete()}),S(O,A)};Y(v,O=>{t(s)?O(T):O(L,!1)})}S(n,x),ye()}Ke(["keydown","click","mousedown"]);var Ou=D("<button> </button>"),zu=D('<button class="tab add svelte-121sxca">+ Add</button>'),Nu=D('<div class="block-selector svelte-121sxca"><!> <!></div>');function ho(n,e){be(e,!0);let a=ge(e,"selected",3,0);var r=Nu(),s=w(r);Be(s,17,()=>e.blocks,je,(c,l,f)=>{var u=Ou();let d;var m=w(u);ae(y=>{d=_e(u,1,"tab svelte-121sxca",null,d,y),ke(m,t(l))},[()=>({active:f===a(),highlighted:e.highlights?.has(f)})]),H("click",u,()=>e.onselect(f)),J("mouseenter",u,()=>{e.hints?.[f]&&ue.set(e.hints[f])}),S(c,u)});var i=h(s,2);{var o=c=>{var l=zu();H("click",l,function(...f){e.onadd?.apply(this,f)}),S(c,l)};Y(i,c=>{e.onadd&&c(o)})}S(n,r),ye()}Ke(["click"]);var Iu=D('<input class="edit-input svelte-e57acq" type="text"/>'),ju=D('<button class="value-display svelte-e57acq"> </button>'),Bu=D('<div><span class="label svelte-e57acq"> </span> <div class="track svelte-e57acq" role="slider"><div class="fill svelte-e57acq"></div> <div class="thumb svelte-e57acq"></div></div> <!></div>');function Zs(n,e){be(e,!0);let a=ge(e,"min",3,0),r=ge(e,"max",3,1),s=ge(e,"step",3,.01),i=ge(e,"disabled",3,!1);function o(W){W.focus()}let c=V(!1),l=V(""),f=V(!1),u=V(void 0),d=C(()=>(e.value-a())/(r()-a())*100);function m(W){return s()>=1?String(Math.round(W)):s()>=.1?W.toFixed(1):W.toFixed(2)}function y(W){const ee=Math.min(r(),Math.max(a(),W));return Math.round(ee/s())*s()}function _(W){if(!t(u))return;const ee=t(u).getBoundingClientRect(),ie=(W-ee.left)/ee.width,ce=Math.min(1,Math.max(0,ie));e.onchange(y(a()+ce*(r()-a())))}function x(W){p(f,!0),W.currentTarget.setPointerCapture(W.pointerId),_(W.clientX)}function v(W){t(f)&&_(W.clientX)}function T(){p(f,!1)}function L(){p(l,m(e.value),!0),p(c,!0)}function O(){const W=parseFloat(t(l));isNaN(W)||e.onchange(y(W)),p(c,!1)}function A(){p(c,!1)}var k=Bu();let g,R;var z=w(k),B=w(z),F=h(z,2);Xe(F,"tabindex",0);var Q=w(F);let E;var N=h(Q,2);let M;Ft(F,W=>p(u,W),()=>t(u));var K=h(F,2);{var Z=W=>{var ee=Iu();Za(()=>Hn(ee,()=>t(l),ie=>p(l,ie))),ao(ee,ie=>o?.(ie)),J("blur",ee,O),H("keydown",ee,ie=>{ie.key==="Enter"&&O(),ie.key==="Escape"&&A()}),S(W,ee)},$=W=>{var ee=ju(),ie=w(ee);ae(ce=>ke(ie,ce),[()=>m(e.value)]),H("dblclick",ee,L),S(W,ee)};Y(K,W=>{t(c)?W(Z):W($,!1)})}ae(()=>{g=_e(k,1,"horz-slider svelte-e57acq",null,g,{disabled:i()}),R=Ue(k,"",R,{"--slider-color":e.color}),ke(B,e.label),Xe(F,"aria-valuenow",e.value),Xe(F,"aria-valuemin",a()),Xe(F,"aria-valuemax",r()),Xe(F,"aria-label",e.label),E=Ue(Q,"",E,{width:`${t(d)??""}%`}),M=Ue(N,"",M,{left:`${t(d)??""}%`})}),J("mouseenter",k,()=>ue.set(e.hint||"settings-slider")),H("pointerdown",F,x),H("pointermove",F,v),H("pointerup",F,T),S(n,k),ye()}Ke(["pointerdown","pointermove","pointerup","keydown","dblclick"]);var Hu=D('<span class="label svelte-1vaxnks"> </span>'),Vu=D("<div><button></button> <!></div>");function at(n,e){be(e,!0);let a=ge(e,"label",3,""),r=ge(e,"disabled",3,!1);var s=Vu();let i,o;var c=w(s);let l;var f=h(c,2);{var u=d=>{var m=Hu(),y=w(m);ae(()=>ke(y,a())),S(d,m)};Y(f,d=>{a()&&d(u)})}ae(()=>{i=_e(s,1,"synth-toggle svelte-1vaxnks",null,i,{disabled:r()}),o=Ue(s,"",o,{"--toggle-color":e.color}),l=_e(c,1,"toggle-btn svelte-1vaxnks",null,l,{active:e.active}),Xe(c,"aria-pressed",e.active),Xe(c,"aria-label",a()||"toggle")}),J("mouseenter",s,()=>{e.hint&&ue.set(e.hint)}),H("click",c,()=>{r()||e.onchange(!e.active)}),S(n,s),ye()}Ke(["click"]);var Gu=D('<button class="delete-btn svelte-3gbruk" title="Delete">&times;</button>');function wt(n,e){be(e,!0);var a=Gu();H("click",a,function(...r){e.onclick?.apply(this,r)}),J("mouseenter",a,()=>ue.set("delete-button")),S(n,a),ye()}Ke(["click"]);var Ku=D('<input class="raw-input svelte-1lt6uwf" type="text"/>');function Ot(n,e){be(e,!0);let a=ge(e,"placeholder",3,""),r=ge(e,"initialValue",3,""),s=V(null);Ie(()=>{t(s)?.focus()});function i(c){if(c.key==="Enter"){c.preventDefault();const l=c.currentTarget.value.trim();l?e.onsubmit(l):e.oncancel()}else c.key==="Escape"&&(c.preventDefault(),e.oncancel())}var o=Ku();Ft(o,c=>p(s,c),()=>t(s)),ae(()=>{Wt(o,r()),Xe(o,"placeholder",a())}),H("keydown",o,i),J("blur",o,function(...c){e.oncancel?.apply(this,c)}),S(n,o),ye()}Ke(["keydown"]);var Wu=D('<div class="toggle-row svelte-c7ragf"><span class="setting-label svelte-c7ragf"> </span> <!></div>'),Uu=D('<div class="text-row svelte-c7ragf"><span class="setting-label svelte-c7ragf"> </span> <input class="text-input svelte-c7ragf" type="text"/></div>'),Qu=D("<div><!> <!></div>"),Zu=D('<div class="settings-list svelte-c7ragf"></div>'),Ju=D('<button class="add-btn svelte-c7ragf" title="Add setting (raw text)">+</button>'),Xu=D('<div class="tabbed-settings-panel svelte-c7ragf"><!> <!> <div class="raw-add svelte-c7ragf"><!></div></div>');function hr(n,e){be(e,!0);let a=ge(e,"inheritedSettings",19,()=>new Map),r=ge(e,"placeholder",3,"e.g. octave 4"),s=V(0),i=V(!1),o=C(()=>e.tabs[t(s)]),c=C(()=>e.tabs.map(g=>g.label));function l(g){return t(o)?$r(g,t(o)):g}let f=C(()=>t(o)?Math.max(...t(o).keys.map(g=>$r(g,t(o)).length))+1:6),u=C(()=>{const g=new Set;for(let R=0;R<e.tabs.length;R++)e.tabs[R].keys.some(z=>e.activeSettings.has(z))&&g.add(R);return g});function d(g){return e.activeSettings.has(g)}function m(g){return e.activeSettings.get(g)??a().get(g)??e.defaults[g]}function y(g){return wu(g,m(g))}var _=Xu(),x=w(_);ho(x,{get blocks(){return t(c)},get selected(){return t(s)},get highlights(){return t(u)},onselect:g=>{p(s,g,!0)},get hints(){return e.tabHints}});var v=h(x,2);{var T=g=>{var R=Zu();let z;Be(R,21,()=>t(o).keys,je,(B,F)=>{const Q=C(()=>d(t(F))),E=C(()=>e.settingType(t(F)));var N=Qu();let M;var K=w(N);{var Z=ce=>{const qe=C(()=>m(t(F))),re=C(()=>e.ranges[t(F)]);{let me=C(()=>l(t(F))),Ce=C(()=>t(re)?.min??0),we=C(()=>t(re)?.max??1),Re=C(()=>t(re)?.step??.01),Se=C(()=>e.settingHints?.[t(F)]);Zs(ce,{get label(){return t(me)},get value(){return t(qe)},get min(){return t(Ce)},get max(){return t(we)},get step(){return t(Re)},get color(){return t(o).color},onchange:Le=>e.onset(t(F),Le),get hint(){return t(Se)}})}},$=ce=>{const qe=C(()=>m(t(F)));var re=Wu(),me=w(re),Ce=w(me),we=h(me,2);{let Re=C(()=>e.settingHints?.[t(F)]);at(we,{get active(){return t(qe)},get color(){return t(o).color},onchange:Se=>e.onset(t(F),Se),get hint(){return t(Re)}})}ae(Re=>ke(Ce,Re),[()=>l(t(F))]),J("mouseenter",re,()=>{e.settingHints?.[t(F)]&&ue.set(e.settingHints[t(F)])}),S(ce,re)},W=ce=>{var qe=Uu(),re=w(qe),me=w(re),Ce=h(re,2);ae((we,Re)=>{ke(me,we),Wt(Ce,Re)},[()=>l(t(F)),()=>y(t(F))]),J("mouseenter",qe,()=>{e.settingHints?.[t(F)]&&ue.set(e.settingHints[t(F)])}),H("change",Ce,we=>e.onset(t(F),we.currentTarget.value)),S(ce,qe)};Y(K,ce=>{t(E)==="number"?ce(Z):t(E)==="boolean"?ce($,1):ce(W,!1)})}var ee=h(K,2);{var ie=ce=>{wt(ce,{onclick:()=>e.ondelete(t(F))})};Y(ee,ce=>{t(Q)&&ce(ie)})}ae(()=>M=_e(N,1,"setting-row svelte-c7ragf",null,M,{unset:!t(Q)})),S(B,N)}),ae(()=>z=Ue(R,"",z,{"--tab-color":t(o).color,"--label-width":`${t(f)??""}ch`})),S(g,R)};Y(v,g=>{t(o)&&g(T)})}var L=h(v,2),O=w(L);{var A=g=>{Ot(g,{get placeholder(){return r()},onsubmit:R=>{p(i,!1),e.onadd(R)},oncancel:()=>{p(i,!1)}})},k=g=>{var R=Ju();H("click",R,()=>{p(i,!0)}),S(g,R)};Y(O,g=>{t(i)?g(A):g(k,!1)})}J("mouseenter",_,()=>ue.set("settings-panel")),S(n,_),ye()}Ke(["change","click"]);function Yu(n,e){be(e,!0);let a=C(()=>{const o=new Map;for(const c of e.settings)o.set(Ka(c),pr(c));return o});function r(o){return o==="DelayPingPong"?"boolean":o==="Sidechain"||o==="Groove"?"string":"number"}const s=["tab-part-rhythm","tab-part-chorus","tab-part-delay","tab-part-reverb","tab-part-sidechain","tab-part-tapestop","tab-part-master"],i={Bpm:"setting-Bpm",Swing:"setting-Swing",AccentPct:"setting-AccentPct",Groove:"setting-Groove",Humanize:"setting-Humanize",Strum:"setting-Strum",ChorusRate:"setting-ChorusRate",ChorusDepth:"setting-ChorusDepth",ChorusMix:"setting-ChorusMix",ChorusToDelay:"setting-ChorusToDelay",ChorusToReverb:"setting-ChorusToReverb",DelayTime:"setting-DelayTime",DelayFeedback:"setting-DelayFeedback",DelayDamping:"setting-DelayDamping",DelayPingPong:"setting-DelayPingPong",DelayMix:"setting-DelayMix",DelayToReverb:"setting-DelayToReverb",ReverbSize:"setting-ReverbSize",ReverbMix:"setting-ReverbMix",Sidechain:"setting-Sidechain",SidechainAmt:"setting-SidechainAmt",SidechainRelease:"setting-SidechainRelease",TapeStopTime:"setting-TapeStopTime",TapeStartTime:"setting-TapeStartTime",TapeStopCurve:"setting-TapeStopCurve",MasterDrive:"setting-MasterDrive",CompThreshold:"setting-CompThreshold",CompRatio:"setting-CompRatio",CompAttack:"setting-CompAttack",CompRelease:"setting-CompRelease"};{let o=C(()=>au(Dn.resolved));hr(n,{get tabs(){return t(o)},get activeSettings(){return t(a)},get defaults(){return eu},get ranges(){return nu},settingType:r,get onset(){return e.onsetsetting},get ondelete(){return e.ondeletesetting},get onadd(){return e.onaddsetting},placeholder:"e.g. bpm 140",get tabHints(){return s},get settingHints(){return i}})}ye()}var $u=D('<button class="auto-label svelte-1fqpyfl" title="Rename parameter"> </button>'),e0=D('<span class="section-sep svelte-1fqpyfl">|</span>'),n0=D("<button> </button>"),t0=D('<span class="val-wrap svelte-1fqpyfl"><!> <!></span>'),a0=D("<!> <!>",1),s0=D('<span class="auto-row svelte-1fqpyfl"><!> <!> <button class="add-val svelte-1fqpyfl" title="Add value">+</button> <!></span>');function Js(n,e){be(e,!0);let a=V(!1),r=V(null);function s(){p(a,!0)}function i(A){const k=Ln(e.auto);k.parameter=A,e.onchange(k),p(a,!1)}function o(){p(a,!1)}function c(A,k){p(r,{section:A,index:k},!0)}function l(A,k,g){const R=Au(g);if(R!==null){const z=Ln(e.auto);z.sections[A][k]=R,e.onchange(z)}p(r,null)}function f(){p(r,null)}function u(A,k){const g=Ln(e.auto);g.sections[A].splice(k,1),g.sections=g.sections.filter(R=>R.length>0),g.sections.length===0?e.ondelete():e.onchange(g)}function d(){const A=Ln(e.auto);A.sections.length===0?A.sections.push(["Pass"]):A.sections[A.sections.length-1].push("Pass"),e.onchange(A)}function m(A){return A==="Hold"?"val-hold":A==="Pass"?"val-pass":"val-number"}var y=s0(),_=w(y);{var x=A=>{Ot(A,{get initialValue(){return e.auto.parameter},onsubmit:i,oncancel:o})},v=A=>{var k=$u(),g=w(k);ae(()=>ke(g,`@${e.auto.parameter??""}`)),H("click",k,s),S(A,k)};Y(_,A=>{t(a)?A(x):A(v,!1)})}var T=h(_,2);Be(T,17,()=>e.auto.sections,je,(A,k,g)=>{var R=a0(),z=Te(R);{var B=Q=>{var E=e0();S(Q,E)};Y(z,Q=>{g>0&&Q(B)})}var F=h(z,2);Be(F,17,()=>t(k),je,(Q,E,N)=>{var M=t0(),K=w(M);{var Z=ee=>{{let ie=C(()=>ti(t(E)));Ot(ee,{get initialValue(){return t(ie)},onsubmit:ce=>l(g,N,ce),oncancel:f})}},$=ee=>{var ie=n0(),ce=w(ie);ae((qe,re)=>{_e(ie,1,`val-cell ${qe??""}`,"svelte-1fqpyfl"),ke(ce,re)},[()=>m(t(E)),()=>ti(t(E))]),H("click",ie,()=>c(g,N)),S(ee,ie)};Y(K,ee=>{t(r)?.section===g&&t(r)?.index===N?ee(Z):ee($,!1)})}var W=h(K,2);wt(W,{onclick:()=>u(g,N)}),S(Q,M)}),S(A,R)});var L=h(T,2),O=h(L,2);wt(O,{get onclick(){return e.ondelete}}),J("mouseenter",y,()=>ue.set("automation-track")),H("click",L,d),S(n,y),ye()}Ke(["click"]);var r0=D('<button class="step-label svelte-szfenj" title="Rename parameter"> </button>'),i0=D('<button class="val-cell svelte-szfenj"> </button>'),o0=D('<span class="val-wrap svelte-szfenj"><!> <!></span>'),l0=D('<span class="step-row svelte-szfenj"><!> <!> <button class="add-val svelte-szfenj" title="Add event">+</button> <!></span>');function Xs(n,e){be(e,!0);let a=V(!1),r=V(null);function s(){p(a,!0)}function i(k){const g=Ln(e.auto);g.parameter=k,e.onchange(g),p(a,!1)}function o(){p(a,!1)}function c(k){const g=k.time_unit==="Seconds"?"s":"";return`${k.value}@${k.time}${g}`}function l(k){const g=k.indexOf("@");if(g<0)return null;const R=k.slice(0,g);let z=k.slice(g+1);const B=parseFloat(R);if(isNaN(B))return null;let F="Beats";z.endsWith("s")&&(F="Seconds",z=z.slice(0,-1));const Q=parseFloat(z);return isNaN(Q)?null:{value:B,time:Q,time_unit:F}}function f(k){p(r,k,!0)}function u(k,g){const R=l(g);if(R){const z=Ln(e.auto);z.events[k]=R,e.onchange(z)}p(r,null)}function d(){p(r,null)}function m(k){const g=Ln(e.auto);g.events.splice(k,1),g.events.length===0?e.ondelete():e.onchange(g)}function y(){const k=Ln(e.auto),g=k.events.length>0?k.events[k.events.length-1].time+1:0;k.events.push({value:0,time:g,time_unit:"Beats"}),e.onchange(k)}var _=l0(),x=w(_);{var v=k=>{Ot(k,{get initialValue(){return e.auto.parameter},onsubmit:i,oncancel:o})},T=k=>{var g=r0(),R=w(g);ae(()=>ke(R,`$${e.auto.parameter??""}`)),H("click",g,s),S(k,g)};Y(x,k=>{t(a)?k(v):k(T,!1)})}var L=h(x,2);Be(L,17,()=>e.auto.events,je,(k,g,R)=>{var z=o0(),B=w(z);{var F=N=>{{let M=C(()=>c(t(g)));Ot(N,{get initialValue(){return t(M)},onsubmit:K=>u(R,K),oncancel:d})}},Q=N=>{var M=i0(),K=w(M);ae(Z=>ke(K,Z),[()=>c(t(g))]),H("click",M,()=>f(R)),S(N,M)};Y(B,N=>{t(r)===R?N(F):N(Q,!1)})}var E=h(B,2);wt(E,{onclick:()=>m(R)}),S(k,z)});var O=h(L,2),A=h(O,2);wt(A,{get onclick(){return e.ondelete}}),J("mouseenter",_,()=>ue.set("step-automation-track")),H("click",O,y),S(n,_),ye()}Ke(["click"]);var c0=D('<input class="rename-part-input svelte-cwrja0"/> <button class="header-btn ok svelte-cwrja0">ok</button> <button class="header-btn cancel svelte-cwrja0">esc</button>',1),u0=D('<button class="header-btn auto-header svelte-cwrja0" title="Add @ automation">+@</button>'),d0=D('<button class="header-btn auto-header svelte-cwrja0" style="color: var(--warning-dim, var(--warning))" title="Add $ step automation">+$</button>'),f0=D('<span class="part-label svelte-cwrja0"> </span> <button title="Toggle settings panel">&#9881;</button> <button class="header-btn svelte-cwrja0" title="Rename part">&#9998;</button> <button class="header-btn svelte-cwrja0" title="Duplicate part">&#10697;</button> <button class="header-btn delete svelte-cwrja0" title="Delete part">&times;</button> <!> <!>',1),m0=D('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0">@</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: v1 v2 | v3 v4"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),p0=D('<div class="part-automation svelte-cwrja0"><!> <!></div>'),h0=D('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0" style="color: var(--warning)">$</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: val@beat val@beat"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),v0=D('<div class="part-automation svelte-cwrja0"><!> <!></div>'),_0=D('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0">@</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: v1 v2 | v3 v4"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),g0=D('<div class="clip-automation svelte-cwrja0"><!> <!></div>'),b0=D('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0" style="color: var(--warning)">$</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: val@beat val@beat"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),y0=D('<div class="clip-automation svelte-cwrja0"><!> <!></div>'),k0=D('<div draggable="true" role="listitem"><!> <!> <!></div>'),w0=D('<button class="delete-track svelte-cwrja0" title="Remove track">&times;</button>'),x0=D('<div draggable="true" role="listitem"><span class="track-handle svelte-cwrja0" title="Drag to reorder">&#9776;</span> <button title="Mute track">M</button> <button title="Solo track">S</button> <div class="track-clips svelte-cwrja0"><!> <button class="add-clip svelte-cwrja0" title="Add clip">+</button> <button class="auto-add-trigger svelte-cwrja0">+@</button> <button class="auto-add-trigger svelte-cwrja0" style="color: var(--warning-dim, var(--warning))">+$</button></div> <!></div>'),S0=D('<!> <!> <div class="tracks-panel svelte-cwrja0"><!> <button class="add-track svelte-cwrja0">+ Track</button></div>',1),P0=D('<div class="part-editor svelte-cwrja0"><div class="part-header svelte-cwrja0"><!></div> <div class="part-body svelte-cwrja0"><!></div></div>');function A0(n,e){be(e,!0),ge(e,"partSeqIdx",3,0);let a=ge(e,"activeTrackClips",3,null),r=ge(e,"focusClipNotches",3,null),s=ge(e,"automation",19,()=>[]),i=ge(e,"stepAutomation",19,()=>[]),o=V(!1),c=C(()=>e.settings.length>0),l=V(!1),f=V("");function u(){p(f,e.partName,!0),p(l,!0)}function d(){const G=t(f).trim();if(!G||G===e.partName){p(l,!1);return}e.onrenamepart(G),p(l,!1)}function m(){p(l,!1)}let y=V(-1),_=V(-1);function x(G,se){p(y,se,!0),G.dataTransfer&&(G.dataTransfer.effectAllowed="move",G.dataTransfer.setData("application/x-track",String(se)))}function v(G,se){G.dataTransfer?.types.includes("application/x-track")&&(G.preventDefault(),G.dataTransfer.dropEffect="move",p(_,se,!0))}function T(){p(_,-1)}function L(G,se){G.preventDefault(),t(y)!==-1&&t(y)!==se&&e.onmovetrack(t(y),se),p(y,-1),p(_,-1)}function O(){p(y,-1),p(_,-1)}let A=V(null),k=V(null);function g(G,se,ve){G.stopPropagation(),p(A,{track:se,clip:ve},!0),G.dataTransfer&&(G.dataTransfer.effectAllowed="move",G.dataTransfer.setData("application/x-clip",`${se}:${ve}`))}function R(G,se,ve){G.dataTransfer?.types.includes("application/x-clip")&&(G.preventDefault(),G.stopPropagation(),G.dataTransfer.dropEffect="move",p(k,{track:se,clip:ve},!0))}function z(G){G.stopPropagation(),p(k,null)}function B(G,se,ve){G.preventDefault(),G.stopPropagation(),t(A)&&(t(A).track!==se||t(A).clip!==ve)&&e.onmoveclip(t(A).track,t(A).clip,se,ve),p(A,null),p(k,null)}function F(){p(A,null),p(k,null)}function Q(G,se){if(G.dataTransfer?.types.includes("application/x-clip")){if(G.preventDefault(),t(A)){const ve=e.tracks[se].length;(t(A).track!==se||t(A).clip!==ve)&&e.onmoveclip(t(A).track,t(A).clip,se,ve)}p(A,null),p(k,null)}}function E(G){G.dataTransfer?.types.includes("application/x-clip")&&(G.preventDefault(),G.dataTransfer.dropEffect="move")}function N(G,se){return t(k)!==null&&t(k).track===G&&t(k).clip===se}function M(G,se){return t(A)!==null&&t(A).track===G&&t(A).clip===se}let K=V(!1),Z=V("");function $(){p(K,!0),p(Z,"")}function W(){const G=Us(t(Z));G&&e.onaddautomation&&e.onaddautomation(G),p(K,!1),p(Z,"")}function ee(){p(K,!1),p(Z,"")}let ie=V(!1),ce=V("");function qe(){p(ie,!0),p(ce,"")}function re(){const G=Qs(t(ce));G&&e.onaddstepautomation&&e.onaddstepautomation(G),p(ie,!1),p(ce,"")}function me(){p(ie,!1),p(ce,"")}let Ce=V(null),we=V("");function Re(G,se){p(Ce,{track:G,clip:se},!0),p(we,"")}function Se(G,se){const ve=Us(t(we));if(ve){const Pe=e.tracks[G][se],Me=[...Pe.automation,ve];e.onchangeclip(G,se,{...Pe,automation:Me})}p(Ce,null),p(we,"")}function Le(){p(Ce,null),p(we,"")}function We(G,se,ve,Pe){const Me=e.tracks[G][se],Qe=[...Me.automation];Qe[ve]=Pe,e.onchangeclip(G,se,{...Me,automation:Qe})}function $e(G,se,ve){const Pe=e.tracks[G][se],Me=Pe.automation.filter((Qe,Ze)=>Ze!==ve);e.onchangeclip(G,se,{...Pe,automation:Me})}let nn=V(null),Sn=V("");function it(G,se){p(nn,{track:G,clip:se},!0),p(Sn,"")}function gn(G,se){const ve=Qs(t(Sn));if(ve){const Pe=e.tracks[G][se],Me=[...Pe.step_automation,ve];e.onchangeclip(G,se,{...Pe,step_automation:Me})}p(nn,null),p(Sn,"")}function bn(){p(nn,null),p(Sn,"")}function Qt(G,se,ve,Pe){const Me=e.tracks[G][se],Qe=[...Me.step_automation];Qe[ve]=Pe,e.onchangeclip(G,se,{...Me,step_automation:Qe})}function Zt(G,se,ve){const Pe=e.tracks[G][se],Me=Pe.step_automation.filter((Qe,Ze)=>Ze!==ve);e.onchangeclip(G,se,{...Pe,step_automation:Me})}var xt=P0(),St=w(xt),Jt=w(St);{var Xt=G=>{var se=c0(),ve=Te(se),Pe=h(ve,2),Me=h(Pe,2);H("keydown",ve,Qe=>{Qe.key==="Enter"&&d(),Qe.key==="Escape"&&m()}),Hn(ve,()=>t(f),Qe=>p(f,Qe)),H("click",Pe,d),H("click",Me,m),S(G,se)},ot=G=>{var se=f0(),ve=Te(se),Pe=w(ve),Me=h(ve,2);let Qe;var Ze=h(Me,2),rn=h(Ze,2),yn=h(rn,2),tn=h(yn,2);{var cn=Je=>{var Ee=u0();H("click",Ee,$),J("mouseenter",Ee,()=>ue.set("add-automation")),S(Je,Ee)};Y(tn,Je=>{e.onaddautomation&&Je(cn)})}var pe=h(tn,2);{var an=Je=>{var Ee=d0();H("click",Ee,qe),J("mouseenter",Ee,()=>ue.set("add-step-automation")),S(Je,Ee)};Y(pe,Je=>{e.onaddstepautomation&&Je(an)})}ae(()=>{ke(Pe,e.partName),Qe=_e(Me,1,"header-btn gear svelte-cwrja0",null,Qe,{glow:t(c),active:t(o)})}),H("click",Me,()=>{p(o,!t(o))}),J("mouseenter",Me,()=>ue.set("part-settings-gear")),H("click",Ze,u),H("click",rn,function(...Je){e.onduplicatepart?.apply(this,Je)}),H("click",yn,function(...Je){e.ondeletepart?.apply(this,Je)}),S(G,se)};Y(Jt,G=>{t(l)?G(Xt):G(ot,!1)})}var Gn=h(St,2),Yt=w(Gn);{var U=G=>{Yu(G,{get settings(){return e.settings},get onsetsetting(){return e.onsetsettingstructured},get ondeletesetting(){return e.ondeletesettingbykey},get onaddsetting(){return e.onaddsetting}})},oe=G=>{var se=S0(),ve=Te(se);{var Pe=tn=>{var cn=p0(),pe=w(cn);Be(pe,17,s,je,(Ee,mn,Ye)=>{Js(Ee,{get auto(){return t(mn)},onchange:pn=>e.onchangeautomation?.(Ye,pn),ondelete:()=>e.ondeleteautomation?.(Ye)})});var an=h(pe,2);{var Je=Ee=>{var mn=m0(),Ye=h(w(mn),2),pn=h(Ye,2),xe=h(pn,2);H("keydown",Ye,ln=>{ln.key==="Enter"&&W(),ln.key==="Escape"&&ee()}),Hn(Ye,()=>t(Z),ln=>p(Z,ln)),H("click",pn,W),H("click",xe,ee),S(Ee,mn)};Y(an,Ee=>{t(K)&&Ee(Je)})}S(tn,cn)};Y(ve,tn=>{(s().length>0||t(K))&&tn(Pe)})}var Me=h(ve,2);{var Qe=tn=>{var cn=v0(),pe=w(cn);Be(pe,17,i,je,(Ee,mn,Ye)=>{Xs(Ee,{get auto(){return t(mn)},onchange:pn=>e.onchangestepautomation?.(Ye,pn),ondelete:()=>e.ondeletestepautomation?.(Ye)})});var an=h(pe,2);{var Je=Ee=>{var mn=h0(),Ye=h(w(mn),2),pn=h(Ye,2),xe=h(pn,2);H("keydown",Ye,ln=>{ln.key==="Enter"&&re(),ln.key==="Escape"&&me()}),Hn(Ye,()=>t(ce),ln=>p(ce,ln)),H("click",pn,re),H("click",xe,me),S(Ee,mn)};Y(an,Ee=>{t(ie)&&Ee(Je)})}S(tn,cn)};Y(Me,tn=>{(i().length>0||t(ie))&&tn(Qe)})}var Ze=h(Me,2),rn=w(Ze);Be(rn,17,()=>e.tracks,je,(tn,cn,pe)=>{var an=x0();let Je;var Ee=h(w(an),2);let mn;var Ye=h(Ee,2);let pn;var xe=h(Ye,2);let ln;var q=w(xe);Be(q,17,()=>t(cn),je,(X,le,he)=>{var en=k0();let Pn;var Qn=w(en);{let sn=C(()=>a()?.get(pe)?.clipIdx===he?a().get(pe).progress:-1),Zn=C(()=>r()?.get(pe)?.[he]??null),Pt=C(()=>e.onfocusclipdrag?(At,An)=>e.onfocusclipdrag(At,An,pe,he):void 0);Fu(Qn,{get clip(){return t(le)},get patterns(){return e.patterns},get progress(){return t(sn)},get focusNotches(){return t(Zn)},onchange:At=>e.onchangeclip(pe,he,At),ondelete:()=>e.ondeleteclip(pe,he),oneditpattern:()=>e.oneditpattern(t(le).name),get onfocusdrag(){return t(Pt)}})}var $t=h(Qn,2);{var ea=sn=>{var Zn=g0(),Pt=w(Zn);Be(Pt,17,()=>t(le).automation,je,(kn,In,Fn)=>{Js(kn,{get auto(){return t(In)},onchange:lt=>We(pe,he,Fn,lt),ondelete:()=>$e(pe,he,Fn)})});var At=h(Pt,2);{var An=kn=>{var In=_0(),Fn=h(w(In),2),lt=h(Fn,2),Kn=h(lt,2);H("keydown",Fn,De=>{De.key==="Enter"&&Se(pe,he),De.key==="Escape"&&Le()}),Hn(Fn,()=>t(we),De=>p(we,De)),H("click",lt,()=>Se(pe,he)),H("click",Kn,Le),S(kn,In)};Y(At,kn=>{t(Ce)?.track===pe&&t(Ce)?.clip===he&&kn(An)})}S(sn,Zn)};Y($t,sn=>{(t(le).automation.length>0||t(Ce)?.track===pe&&t(Ce)?.clip===he)&&sn(ea)})}var na=h($t,2);{var _a=sn=>{var Zn=y0(),Pt=w(Zn);Be(Pt,17,()=>t(le).step_automation,je,(kn,In,Fn)=>{Xs(kn,{get auto(){return t(In)},onchange:lt=>Qt(pe,he,Fn,lt),ondelete:()=>Zt(pe,he,Fn)})});var At=h(Pt,2);{var An=kn=>{var In=b0(),Fn=h(w(In),2),lt=h(Fn,2),Kn=h(lt,2);H("keydown",Fn,De=>{De.key==="Enter"&&gn(pe,he),De.key==="Escape"&&bn()}),Hn(Fn,()=>t(Sn),De=>p(Sn,De)),H("click",lt,()=>gn(pe,he)),H("click",Kn,bn),S(kn,In)};Y(At,kn=>{t(nn)?.track===pe&&t(nn)?.clip===he&&kn(An)})}S(sn,Zn)};Y(na,sn=>{(t(le).step_automation.length>0||t(nn)?.track===pe&&t(nn)?.clip===he)&&sn(_a)})}ae(sn=>{Pn=_e(en,1,"clip-wrapper svelte-cwrja0",null,Pn,sn),Ue(en,`flex-grow: ${t(le).times??""};`)},[()=>({"clip-drag-over":N(pe,he),"clip-dragging":M(pe,he)})]),J("dragstart",en,sn=>g(sn,pe,he)),J("dragover",en,sn=>R(sn,pe,he)),J("dragleave",en,sn=>z(sn)),J("drop",en,sn=>B(sn,pe,he)),J("dragend",en,F),S(X,en)});var j=h(q,2),b=h(j,2),P=h(b,2),I=h(xe,2);{var ne=X=>{var le=w0();H("click",le,()=>e.ondeletetrack(pe)),S(X,le)};Y(I,X=>{e.tracks.length>1&&X(ne)})}ae((X,le,he)=>{Je=_e(an,1,"track-row svelte-cwrja0",null,Je,{"drag-over-track":t(_)===pe&&t(y)!==pe,"dragging-track":t(y)===pe}),mn=_e(Ee,1,"ms-btn mute svelte-cwrja0",null,mn,X),pn=_e(Ye,1,"ms-btn solo svelte-cwrja0",null,pn,le),ln=Ue(xe,"",ln,he)},[()=>({active:On.mutedPartTracks.has(pe)}),()=>({active:On.soloPartTracks.has(pe)}),()=>({opacity:On.isPartTrackAudible(pe)?1:.35})]),J("dragstart",an,X=>x(X,pe)),J("dragover",an,X=>{v(X,pe),E(X)}),J("dragleave",an,T),J("drop",an,X=>{L(X,pe),Q(X,pe)}),J("dragend",an,O),J("mouseenter",an,()=>ue.set("part-clip-track")),H("click",Ee,X=>{X.stopPropagation(),On.toggleMutePartTrack(pe)}),J("mouseenter",Ee,()=>ue.set("mute-button")),H("click",Ye,X=>{X.stopPropagation(),On.toggleSoloPartTrack(pe)}),J("mouseenter",Ye,()=>ue.set("solo-button")),H("click",j,()=>e.onaddclip(pe)),J("mouseenter",j,()=>ue.set("add-clip")),H("click",b,()=>{const X=t(cn).findLastIndex(le=>le.name!=="gap");X>=0&&Re(pe,X)}),J("mouseenter",b,()=>ue.set("add-automation")),H("click",P,()=>{const X=t(cn).findLastIndex(le=>le.name!=="gap");X>=0&&it(pe,X)}),J("mouseenter",P,()=>ue.set("add-step-automation")),S(tn,an)});var yn=h(rn,2);H("click",yn,function(...tn){e.onaddtrack?.apply(this,tn)}),J("mouseenter",yn,()=>ue.set("add-track")),S(G,se)};Y(Yt,G=>{t(o)?G(U):G(oe,!1)})}J("mouseenter",St,()=>ue.set("part-header")),S(n,xt),ye()}Ke(["keydown","click"]);let ai=!1;async function vr(){ai||(await wasm_bindgen(),ai=!0)}async function vo(n){await vr();const e=wasm_bindgen.parse_measure_text(n);return JSON.parse(e)}async function T0(n){await vr();const e=wasm_bindgen.parse_demo_text(n);return JSON.parse(e)}function D0(n){return n.map(e=>e.map(a=>"Beat"in a?a.Beat.map(r=>Ks(r)).join(""):lo(a.Command)).join(" ")).join(" | ")}async function R0(n){await vr();const e=wasm_bindgen.parse_settings_text(n);return JSON.parse(e)}function _o(n,e,a,r){const s=n[e];"Beat"in s&&(s.Beat[a]=r)}async function go(n,e,a,r){const i=(await vo(r)).find(o=>"Beat"in o);if(i&&"Beat"in i&&i.Beat.length>0){const o=n[e];if("Beat"in o)return o.Beat[a]=i.Beat[0],!0}return!1}function q0(n){n.push({Beat:["Rest"]})}function bo(n,e){n.splice(e,1)}function yo(n,e,a){const r=n[e];"Beat"in r&&(r.Beat.splice(a,1),r.Beat.length===0&&n.splice(e,1))}async function Ys(n,e,a){const s=(await vo(a)).filter(i=>"Command"in i);return s.length>0?(n.splice(e,0,...s),!0):!1}function ko(n,e,a){const[r]=n.splice(e,1),s=e<a?a-1:a;n.splice(s,0,r)}function C0(n,e){be(e,!0);let a=C(()=>{const o=new Map;for(const c of e.groupSettings)o.set(os(c),oo(c));for(const c of e.toneSettings){const l=Object.keys(c)[0],f=Object.values(c)[0];o.set(l,f)}return o}),r=C(()=>{const o=new Map;for(const c of e.partSettings)o.set(Ka(c),pr(c));return o});const s={Octave:"setting-Octave",Instrument:"setting-Instrument",Scale:"setting-Scale",Root:"setting-Root",Velocity:"setting-Velocity",Arp:"setting-Arp",ArpRate:"setting-ArpRate",ArpMode:"setting-ArpMode",ArpOctaves:"setting-ArpOctaves",ArpSlide:"setting-ArpSlide",Legato:"setting-Legato",Voices:"setting-Voices",Glide:"setting-Glide",Level:"setting-Level",DrySend:"setting-DrySend",ChorusSend:"setting-ChorusSend",DelaySend:"setting-DelaySend",ReverbSend:"setting-ReverbSend",Swing:"setting-Swing",AccentPct:"setting-AccentPct",Groove:"setting-Groove",Humanize:"setting-Humanize",Strum:"setting-Strum",StrumIdx:"setting-StrumIdx"},i=["tab-track-tone","tab-track-arp","tab-track-voice","tab-track-rhythm"];{let o=C(()=>ku(Dn.resolved));hr(n,{get tabs(){return t(o)},get activeSettings(){return t(a)},get inheritedSettings(){return t(r)},get defaults(){return fo},get ranges(){return uo},get settingType(){return mo},get onset(){return e.onset},get ondelete(){return e.ondelete},get onadd(){return e.onadd},placeholder:"e.g. swing 60",get tabHints(){return i},get settingHints(){return s}})}ye()}var L0=D("<button> </button>"),M0=D('<span class="division-wrap svelte-wo5v94"><!> <!></span>');function E0(n,e){be(e,!0);let a=ge(e,"hasTonal",3,!1),r=V(!1),s=null;const i=C(()=>ya(e.division)[1]),o=C(()=>ya(e.division)[2]);function c(){a()||!ls(e.division)||t(o).length>0?p(r,!0):(s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,e.onchange(gu(e.division))},200))}function l(){s!==null&&(clearTimeout(s),s=null),p(r,!0)}function f(x){const[v]=ya(x);return v==="Hit"?"hit":v==="Accent"?"accent":v==="Rest"?"rest":v==="Sustain"?"sustain":"tonal"}var u=M0(),d=w(u);{var m=x=>{{let v=C(()=>Ks(e.division)),T=C(()=>t(o).length>0?Ws(e.division):"");Ot(x,{get placeholder(){return t(v)},get initialValue(){return t(T)},onsubmit:L=>{p(r,!1),e.onedit(L)},oncancel:()=>{p(r,!1)}})}},y=x=>{var v=L0();let T,L;var O=w(v);ae((A,k,g)=>{T=_e(v,1,`cell ${A??""}`,"svelte-wo5v94",T,{probable:t(i)!==null,locked:t(o).length>0}),Xe(v,"title",k),L=Ue(v,"",L,{opacity:t(i)!==null?.4+.6*(t(i)/100):void 0}),ke(O,g)},[()=>f(e.division),()=>t(i)!==null?`${t(i)}% probability`+(ls(e.division)&&!a()&&t(o).length===0?" — click to cycle, double-click to edit":" — click to edit"):ls(e.division)&&!a()&&t(o).length===0?"Click to cycle, double-click to edit":"Click to edit",()=>Ks(e.division)]),H("click",v,c),H("dblclick",v,l),S(x,v)};Y(d,x=>{t(r)?x(m):x(y,!1)})}var _=h(d,2);wt(_,{get onclick(){return e.ondelete}}),J("mouseenter",u,()=>ue.set("division-cell")),S(n,u),ye()}Ke(["click","dblclick"]);var F0=D('<span class="beat svelte-192akuh"><!> <button class="add-btn svelte-192akuh" title="Add division">+</button> <!></span>');function O0(n,e){be(e,!0);let a=ge(e,"hasTonal",3,!1);var r=F0(),s=w(r);Be(s,17,()=>e.divisions,je,(c,l,f)=>{E0(c,{get division(){return t(l)},get hasTonal(){return a()},onchange:u=>e.onchange(f,u),ondelete:()=>e.ondeletedivision(f),onedit:u=>e.onedit(f,u)})});var i=h(s,2),o=h(i,2);wt(o,{get onclick(){return e.ondeletebeat}}),J("mouseenter",r,()=>ue.set("beat-cell")),H("click",i,function(...c){e.onadddivision?.apply(this,c)}),S(n,r),ye()}Ke(["click"]);var z0=D('<span class="pill-wrap svelte-1heu11r"><span class="pill svelte-1heu11r"> </span> <!></span>');function N0(n,e){be(e,!0);var a=z0(),r=w(a),s=w(r),i=h(r,2);wt(i,{get onclick(){return e.ondelete}}),ae(o=>ke(s,o),[()=>lo(e.command)]),J("mouseenter",a,()=>ue.set("command-pill")),S(n,a),ye()}var I0=D('<span class="playhead svelte-frrp2o"></span>'),j0=D('<button class="insert-btn svelte-frrp2o" title="Insert command here">+</button>'),B0=D('<span draggable="true"><!></span>'),H0=D("<span><!></span> <!>",1),V0=D('<span class="measure svelte-frrp2o"><!> <!> <span><!></span> <button class="add-btn svelte-frrp2o" title="Add beat">+</button> <button class="cmd-btn svelte-frrp2o" title="Add command">cmd</button> <!></span>');function wo(n,e){be(e,!0);let a=ge(e,"playing",3,!1),r=ge(e,"beatPosition",3,0),s=C(()=>e.items.filter(E=>"Beat"in E).length),i=C(()=>e.items.some(E=>"Beat"in E&&E.Beat.some(N=>!ls(N)))),o=V(null),c=V(null),l=V(null);function f(E){return"Beat"in E}function u(E){return"Command"in E}function d(E){const N=e.items[E];f(N)&&(N.Beat.push("Rest"),e.onchange(E,N.Beat.length-1,"Rest"))}function m(E,N){p(c,N,!0),E.dataTransfer?.setData("text/plain",String(N))}function y(){p(c,null),p(l,null)}function _(E,N){E.preventDefault(),p(l,N,!0)}function x(){p(l,null)}function v(E,N){E.preventDefault(),t(c)!==null&&t(c)!==N&&e.onreorderitem(t(c),N),p(c,null),p(l,null)}var T=V0(),L=w(T);{var O=E=>{var N=I0();ae(()=>Ue(N,`left: ${r()/t(s)*100}%`)),S(E,N)};Y(L,E=>{a()&&t(s)>0&&E(O)})}var A=h(L,2);Be(A,17,()=>e.items,je,(E,N,M)=>{var K=H0(),Z=Te(K);let $;var W=w(Z);{var ee=we=>{Ot(we,{placeholder:"e.g. instrument bass",onsubmit:Re=>{p(o,null),e.oninsertcommand(M,Re)},oncancel:()=>{p(o,null)}})},ie=we=>{var Re=j0();H("click",Re,()=>{p(o,M,!0)}),S(we,Re)};Y(W,we=>{t(o)===M?we(ee):we(ie,!1)})}var ce=h(Z,2);{var qe=we=>{O0(we,{get divisions(){return t(N).Beat},get hasTonal(){return t(i)},onchange:(Re,Se)=>e.onchange(M,Re,Se),onadddivision:()=>d(M),ondeletedivision:Re=>e.ondeletedivision(M,Re),ondeletebeat:()=>e.ondeleteitem(M),onedit:(Re,Se)=>e.onedit(M,Re,Se)})},re=C(()=>f(t(N))),me=we=>{var Re=B0();let Se;var Le=w(Re);N0(Le,{get command(){return t(N).Command},ondelete:()=>e.ondeleteitem(M)}),ae(()=>Se=_e(Re,1,"draggable-command svelte-frrp2o",null,Se,{"is-dragging":t(c)===M})),J("dragstart",Re,We=>m(We,M)),J("dragend",Re,y),S(we,Re)},Ce=C(()=>u(t(N)));Y(ce,we=>{t(re)?we(qe):t(Ce)&&we(me,1)})}ae(()=>$=_e(Z,1,"drop-zone svelte-frrp2o",null,$,{active:t(l)===M,dragging:t(c)!==null})),J("dragover",Z,we=>_(we,M)),J("dragleave",Z,x),J("drop",Z,we=>v(we,M)),S(E,K)});var k=h(A,2);let g;var R=w(k);{var z=E=>{Ot(E,{placeholder:"e.g. instrument bass",onsubmit:N=>{p(o,null),e.oninsertcommand(e.items.length,N)},oncancel:()=>{p(o,null)}})};Y(R,E=>{t(o)===e.items.length&&E(z)})}var B=h(k,2),F=h(B,2),Q=h(F,2);wt(Q,{get onclick(){return e.ondeletemeasure}}),ae(()=>g=_e(k,1,"drop-zone svelte-frrp2o",null,g,{active:t(l)===e.items.length,dragging:t(c)!==null})),J("dragover",k,E=>_(E,e.items.length)),J("dragleave",k,x),J("drop",k,E=>v(E,e.items.length)),H("click",B,function(...E){e.onaddbeat?.apply(this,E)}),H("click",F,()=>{p(o,e.items.length,!0)}),S(n,T),ye()}Ke(["click"]);function G0(n,e){be(e,!0);let a=ge(e,"inheritedSettings",19,()=>new Map),r=C(()=>{const o=new Map;for(const c of e.leadingCommands)"Command"in c&&o.set(ds(c.Command),po(c.Command));return o});const s=["tab-track-tone","tab-track-arp","tab-track-voice","tab-track-mix","tab-track-rhythm"],i={Octave:"setting-Octave",Instrument:"setting-Instrument",Scale:"setting-Scale",Root:"setting-Root",Velocity:"setting-Velocity",Arp:"setting-Arp",ArpRate:"setting-ArpRate",ArpMode:"setting-ArpMode",ArpOctaves:"setting-ArpOctaves",ArpSlide:"setting-ArpSlide",Legato:"setting-Legato",Voices:"setting-Voices",Glide:"setting-Glide",Level:"setting-Level",DrySend:"setting-DrySend",ChorusSend:"setting-ChorusSend",DelaySend:"setting-DelaySend",ReverbSend:"setting-ReverbSend",Swing:"setting-Swing",AccentPct:"setting-AccentPct",Groove:"setting-Groove",Humanize:"setting-Humanize",Strum:"setting-Strum",StrumIdx:"setting-StrumIdx"};{let o=C(()=>co(Dn.resolved));hr(n,{get tabs(){return t(o)},get activeSettings(){return t(r)},get inheritedSettings(){return a()},get defaults(){return fo},get ranges(){return uo},get settingType(){return mo},get onset(){return e.onsetcommand},get ondelete(){return e.ondeletecommand},get onadd(){return e.onaddcommand},placeholder:"e.g. octave 4",get tabHints(){return s},get settingHints(){return i}})}ye()}var K0=D('<button class="label svelte-1bopal2" title="Double-click to rename"> </button>'),W0=D('<button title="Toggle track settings">&#9881;</button>'),U0=D('<span class="no-measure svelte-1bopal2">&mdash;</span>'),Q0=D('<button class="auto-add-trigger svelte-1bopal2">+@</button>'),Z0=D('<button class="auto-add-trigger step svelte-1bopal2">+$</button>'),J0=D('<div class="track-row svelte-1bopal2"><!> <!> <!> <!> <!> <!></div>');function X0(n,e){be(e,!0);let a=ge(e,"playingBeat",19,()=>-1),r=V(!1),s=V(!1),i=C(()=>e.track.measures[0]?cs(e.track.measures[0].items):0),o=C(()=>t(i)>0),c=C(()=>{const B=e.track.measures[e.measureIndex];return B?e.measureIndex===0?B.items.slice(t(i)):B.items:[]}),l=C(()=>e.measureIndex===0?t(i):0),f=C(()=>{const B=e.track.measures[0];return B?B.items.slice(0,t(i)):[]});var u=J0(),d=w(u);{var m=B=>{{let F=C(()=>Ha(e.track.designator)),Q=C(()=>Ha(e.track.designator));Ot(B,{get placeholder(){return t(F)},get initialValue(){return t(Q)},onsubmit:E=>{p(r,!1),e.onrename(E)},oncancel:()=>{p(r,!1)}})}},y=B=>{var F=K0(),Q=w(F);ae(E=>ke(Q,E),[()=>Ha(e.track.designator)]),H("dblclick",F,()=>{p(r,!0)}),S(B,F)};Y(d,B=>{t(r)?B(m):B(y,!1)})}var _=h(d,2);{var x=B=>{var F=W0();let Q;ae(()=>Q=_e(F,1,"track-gear-btn svelte-1bopal2",null,Q,{glow:t(o),active:t(s)})),H("click",F,()=>{p(s,!t(s))}),J("mouseenter",F,()=>ue.set("track-settings-gear")),S(B,F)};Y(_,B=>{e.onsetleadingcommand&&B(x)})}var v=h(_,2);wt(v,{get onclick(){return e.ondeletetrack}});var T=h(v,2);{var L=B=>{G0(B,{get leadingCommands(){return t(f)},get inheritedSettings(){return e.inheritedSettings},get onsetcommand(){return e.onsetleadingcommand},get ondeletecommand(){return e.ondeleteleadingcommand},get onaddcommand(){return e.onaddleadingcommand}})},O=B=>{{let F=C(()=>a()>=0),Q=C(()=>a()>=0?a():0);wo(B,{get items(){return t(c)},get playing(){return t(F)},get beatPosition(){return t(Q)},onchange:(E,N,M)=>e.onchange(e.measureIndex,E+t(l),N,M),onaddbeat:()=>{const E=e.track.measures[e.measureIndex];E.items.push({Beat:["Rest"]}),e.onchange(e.measureIndex,E.items.length-1,0,"Rest")},ondeletemeasure:()=>e.ondeletemeasure(e.measureIndex),ondeleteitem:E=>e.ondeleteitem(e.measureIndex,E+t(l)),ondeletedivision:(E,N)=>e.ondeletedivision(e.measureIndex,E+t(l),N),oninsertcommand:(E,N)=>e.oninsertcommand(e.measureIndex,E+t(l),N),onreorderitem:(E,N)=>e.onreorderitem(e.measureIndex,E+t(l),N+t(l)),onedit:(E,N,M)=>e.onedit(e.measureIndex,E+t(l),N,M)})}},A=B=>{var F=U0();S(B,F)};Y(T,B=>{t(s)&&e.onsetleadingcommand&&e.ondeleteleadingcommand&&e.onaddleadingcommand?B(L):e.track.measures[e.measureIndex]?B(O,1):B(A,!1)})}var k=h(T,2);{var g=B=>{var F=Q0();H("click",F,function(...Q){e.onaddautomation?.apply(this,Q)}),J("mouseenter",F,()=>ue.set("add-automation")),S(B,F)};Y(k,B=>{e.onaddautomation&&B(g)})}var R=h(k,2);{var z=B=>{var F=Z0();H("click",F,function(...Q){e.onaddstepautomation?.apply(this,Q)}),J("mouseenter",F,()=>ue.set("add-step-automation")),S(B,F)};Y(R,B=>{e.onaddstepautomation&&B(z)})}J("mouseenter",u,()=>ue.set("track-row")),S(n,u),ye()}Ke(["dblclick","click"]);const Y0=`<p><code>o</code> hit &middot; <code>x</code> accented hit &middot; <code>.</code> rest &middot; <code>-</code> sustain (hold previous note)</p>
<p><code>c</code>&ndash;<code>b</code> note name, optional <code>#</code> sharp / <code>_</code> flat, optional octave digit: <code>c#5</code>, <code>e_</code>, <code>f</code></p>
<p><code>0</code>&ndash;<code>9</code> scale degree relative to root/scale</p>
<p><code>></code> before a note or degree &mdash; accented (velocity 127)</p>
<p><code>~</code> before a note or degree &mdash; pitch slide without re-triggering</p>
<p><code>?N</code> after any hit/note &mdash; probability (1&ndash;99%), e.g. <code>o?50</code>, <code>c?75</code></p>
<p><code>{key=val}</code> after any hit/note &mdash; per-step parameter lock, e.g. <code>o{level=0.5}</code>, <code>c{velocity=80,chorus_send=0.8}</code></p>
<p><code>strum_idx N</code> &mdash; assign track position in strum order (0-based); <code>strum_idx off</code> to opt out</p>
<p><code>@param: values...</code> &mdash; automation track (after a track line). Linear interpolation between keyframe values. <code>-</code> hold &middot; <code>.</code> pass &middot; <code>|</code> section separator &middot; <code>*N</code> repeat</p>
<p><code>$param: value@beat</code> &mdash; step automation. Discrete instant changes at specific beats. <code>s</code> suffix = seconds. Supported at three levels: after a track line (track params like level, velocity, sends), at part level before clips (part params like bpm, effects), or after a clip line (part params scoped to that clip). </p>`;var $0=D('<input class="rename-input svelte-1c399gj"/> <button class="header-btn ok svelte-1c399gj">ok</button> <button class="header-btn cancel svelte-1c399gj">esc</button>',1),ed=D('<span class="selected-label svelte-1c399gj"> </span> <button class="header-btn svelte-1c399gj" title="Rename pattern">&#9998;</button> <button class="header-btn svelte-1c399gj" title="Duplicate pattern">&#10697;</button>',1),nd=D('<pre class="error svelte-1c399gj"> </pre>'),td=D('<div class="group-content svelte-1c399gj"><!></div>'),ad=D('<button title="Mute track">M</button> <button title="Solo track">S</button>',1),sd=D('<span class="auto-add-row svelte-1c399gj"><span class="auto-add-prefix svelte-1c399gj">@</span> <input class="auto-add-input svelte-1c399gj" placeholder="param: v1 v2 | v3 v4"/> <button class="auto-add-btn ok svelte-1c399gj">ok</button> <button class="auto-add-btn cancel svelte-1c399gj">esc</button></span>'),rd=D('<div class="track-automation svelte-1c399gj"><!> <!></div>'),id=D('<span class="auto-add-row svelte-1c399gj"><span class="auto-add-prefix svelte-1c399gj" style="color: var(--warning)">$</span> <input class="auto-add-input svelte-1c399gj" placeholder="param: val@beat val@beat"/> <button class="auto-add-btn ok svelte-1c399gj">ok</button> <button class="auto-add-btn cancel svelte-1c399gj">esc</button></span>'),od=D('<div class="track-automation svelte-1c399gj"><!> <!></div>'),ld=D('<div class="track-container svelte-1c399gj"><div draggable="true" role="listitem"><span class="track-handle svelte-1c399gj" title="Drag to reorder">&#9776;</span> <!> <!></div> <!> <!></div>'),cd=D('<div class="group-content svelte-1c399gj"><!> <button class="add-track svelte-1c399gj">+ Track</button></div>'),ud=D('<div class="group-detail svelte-1c399gj"><div class="group-toolbar svelte-1c399gj"><button title="Toggle group settings">&#9881;</button> <button class="group-delete-btn svelte-1c399gj" title="Delete group">&times;</button> <div><!></div></div> <!></div>'),dd=D("<div><!></div> <!>",1),fd=D('<p class="placeholder svelte-1c399gj">Loading...</p>'),md=D('<p class="placeholder svelte-1c399gj">Select a pattern to edit.</p>'),pd=D('<div class="pattern-editor svelte-1c399gj"><div class="header svelte-1c399gj"><span class="title svelte-1c399gj">Pattern</span> <!></div> <!> <!> <div class="score-help svelte-1c399gj"><!></div></div>');function hd(n,e){be(e,!0);let a=ge(e,"partSettings",19,()=>[]),r=V(null),s=V(!1),i=V(""),o=V(0),c=V(0),l=V(!1),f=C(()=>te.selectedPatternLabel),u=C(()=>te.songAst?.patterns.find(b=>b.label===t(f))??null),d=C(()=>t(u)?t(u).groups:null);Ie(()=>{t(d)&&t(o)>=t(d).length&&p(o,Math.max(0,t(d).length-1),!0)});let m=C(()=>t(d)&&t(o)<t(d).length?t(d)[t(o)]:null),y=C(()=>t(m)?Math.max(...t(m).tracks.map(b=>b.measures.length),0):0),_=C(()=>Array.from({length:t(y)},(b,P)=>({label:String(P+1)})));Ie(()=>{t(c)>=t(y)&&p(c,Math.max(0,t(y)-1),!0)});function x(b){let P=0;for(const I of b.tracks)P=Math.max(P,I.measures.length);return Math.max(P,1)}let v=C(()=>t(d)?t(d).map((b,P)=>({label:`Group ${P+1}`,weight:x(b)})):[]),T=C(()=>{if(!Ae.playing||!Ae.position||!Ae.sourceMap||!t(f)||!t(d))return null;const b=Ae.position;for(let P=0;P<b.tracks.length;P++){const I=b.tracks[P];if(I.done||!I.pattern_key.startsWith(t(f)+"@"))continue;let ne=I.measure_idx;for(let X=0;X<t(d).length;X++){const le=Math.max(...t(d)[X].tracks.map(he=>he.measures.length),0);if(ne<le)return{groupIdx:X,localMeasureIdx:ne,beatTime:I.beat_time};ne-=le}return null}return null}),L=C(()=>t(T)?.groupIdx??-1),O=C(()=>!t(T)||t(T).groupIdx!==t(o)?-1:t(T).localMeasureIdx),A=C(()=>{if(!t(T)||t(L)<0||!t(d))return 0;const b=t(d)[t(L)];if(!b)return 0;const P=Math.max(...b.tracks.map(he=>he.measures.length),1),I=b.tracks[0];if(!I)return 0;const ne=I.measures[t(T).localMeasureIdx],X=ne?ne.items.filter(he=>"Beat"in he).length:1,le=X>0?t(T).beatTime/X:0;return Math.min((t(T).localMeasureIdx+le)/P,1)}),k=C(()=>{if(!t(T)||t(O)<0||!t(d))return 0;const b=t(d)[t(o)];if(!b)return 0;const P=b.tracks[0];if(!P)return 0;const I=P.measures[t(O)],ne=I?I.items.filter(X=>"Beat"in X).length:1;return ne>0?Math.min(t(T).beatTime/ne,1):0});function g(b){return!t(T)||t(T).groupIdx!==t(o)||t(T).localMeasureIdx!==t(c)?-1:t(T).beatTime}let R=V(-1),z=V(-1);function B(b,P){p(R,P,!0),b.dataTransfer&&(b.dataTransfer.effectAllowed="move",b.dataTransfer.setData("application/x-pattern-track",String(P)))}function F(b,P){b.dataTransfer?.types.includes("application/x-pattern-track")&&(b.preventDefault(),b.dataTransfer.dropEffect="move",p(z,P,!0))}function Q(){p(z,-1)}function E(b,P){if(b.preventDefault(),t(R)!==-1&&t(R)!==P&&t(d)){const I=t(d)[t(o)],[ne]=I.tracks.splice(t(R),1);I.tracks.splice(P,0,ne),W()}p(R,-1),p(z,-1)}function N(){p(R,-1),p(z,-1)}function M(){if(!te.songAst||!t(f)||!t(u))return;const b=new Set(te.songAst.patterns.map(X=>X.label));let P=`${t(f)}_copy`,I=2;for(;b.has(P);)P=`${t(f)}_copy_${I}`,I++;const ne={...Ln(t(u)),label:P};te.songAst.patterns.push(ne),te.selectedPatternLabel=P,W()}function K(){t(f)&&(p(i,t(f),!0),p(s,!0))}async function Z(){if(!te.songAst||!t(f)||!t(i).trim()){p(s,!1);return}const b=t(i).trim(),P=t(f);if(b===P){p(s,!1);return}try{te.songAst=await Qc(te.songAst,P,b),te.selectedPatternLabel=b,p(s,!1),W()}catch(I){p(r,I instanceof Error?I.message:String(I),!0),p(s,!1)}}function $(){p(s,!1)}async function W(){if(!(!te.songAst||!te.selectedSection)){p(r,null);try{const b=await Vs(te.songAst);te.replaceSectionContent(te.selectedSection,b)}catch(b){p(r,b instanceof Error?b.message:String(b),!0)}}}function ee(b,P,I,ne,X){t(d)&&(_o(t(d)[t(o)].tracks[b].measures[P].items,I,ne,X),W())}function ie(){if(!t(d))return;const b={leading:[],trailing_comment:null};t(d)[t(o)].tracks.push({trivia:b,designator:{Named:"xx"},measures:[{items:[{Beat:["Rest"]}]}],automation:[],step_automation:[]}),W()}function ce(b,P){if(!t(d))return;const I=t(d)[t(o)].tracks[b];P==="ac"?I.designator="Accent":I.designator={Named:P},W()}function qe(b){t(d)&&(t(d).splice(b,1),W())}function re(b){t(d)&&(t(d)[t(o)].tracks.splice(b,1),W())}function me(b,P){t(d)&&(t(d)[t(o)].tracks[b].measures.splice(P,1),W())}function Ce(b,P,I){t(d)&&(bo(t(d)[t(o)].tracks[b].measures[P].items,I),W())}function we(b,P,I,ne){t(d)&&(yo(t(d)[t(o)].tracks[b].measures[P].items,I,ne),W())}async function Re(b,P,I,ne){if(t(d))try{await Ys(t(d)[t(o)].tracks[b].measures[P].items,I,ne)&&W()}catch(X){p(r,X instanceof Error?X.message:String(X),!0)}}function Se(b,P,I,ne){t(d)&&(ko(t(d)[t(o)].tracks[b].measures[P].items,I,ne),W())}async function Le(b){if(t(d))try{const P=await R0(b),I=t(d)[t(o)];I.group_settings.push(...P.group_settings),I.tone_settings.push(...P.tone_settings),W()}catch(P){p(r,P instanceof Error?P.message:String(P),!0)}}function We(b,P){if(!t(d))return;P=ei(b,P);const I=t(d)[t(o)];if(Yr.includes(b)){const ne=I.group_settings.findIndex(le=>os(le)===b),X={[b]:P};ne>=0?I.group_settings[ne]=X:I.group_settings.push(X)}else{const ne=I.tone_settings.findIndex(le=>Object.keys(le)[0]===b),X={[b]:P};ne>=0?I.tone_settings[ne]=X:I.tone_settings.push(X)}W()}function $e(b){if(!t(d))return;const P=t(d)[t(o)];if(Yr.includes(b)){const I=P.group_settings.findIndex(ne=>os(ne)===b);I>=0&&P.group_settings.splice(I,1)}else{const I=P.tone_settings.findIndex(ne=>Object.keys(ne)[0]===b);I>=0&&P.tone_settings.splice(I,1)}W()}let nn=C(()=>t(m)!=null&&(t(m).group_settings.length>0||t(m).tone_settings.length>0)),Sn=C(()=>{const b=new Map;for(const P of a())b.set(Ka(P),pr(P));if(t(m)){for(const P of t(m).group_settings)b.set(os(P),oo(P));for(const P of t(m).tone_settings){const I=Object.keys(P)[0],ne=Object.values(P)[0];b.set(I,ne)}}return b});async function it(b,P,I,ne,X){if(t(d))try{await go(t(d)[t(o)].tracks[b].measures[P].items,I,ne,X)&&W()}catch(le){p(r,le instanceof Error?le.message:String(le),!0)}}function gn(b,P,I){if(!t(d))return;I=ei(P,I);const ne=t(d)[t(o)].tracks[b].measures[0]?.items;if(!ne)return;const X=cs(ne);for(let le=0;le<X;le++){const he=ne[le];if("Command"in he&&ds(he.Command)===P){ne[le]={Command:ni(P,I)},W();return}}ne.splice(X,0,{Command:ni(P,I)}),W()}function bn(b,P){if(!t(d))return;const I=t(d)[t(o)].tracks[b].measures[0]?.items;if(!I)return;const ne=cs(I);for(let X=0;X<ne;X++){const le=I[X];if("Command"in le&&ds(le.Command)===P){I.splice(X,1),W();return}}}async function Qt(b,P){if(!t(d))return;const I=t(d)[t(o)].tracks[b];I.measures[0]||(I.measures[0]={items:[]});const ne=I.measures[0].items,X=cs(ne);try{await Ys(ne,X,P)&&W()}catch(le){p(r,le instanceof Error?le.message:String(le),!0)}}function Zt(){if(!t(d))return;const b={leading:[],trailing_comment:null};t(d).push({trivia:b,group_settings:[],tone_settings:[],tracks:[]}),p(o,t(d).length-1),W()}function xt(b,P){if(!t(d))return;const[I]=t(d).splice(b,1);t(d).splice(P,0,I),t(o)===b?p(o,P,!0):b<t(o)&&P>=t(o)?ga(o,-1):b>t(o)&&P<=t(o)&&ga(o),W()}function St(){if(!t(d))return;const b=t(d)[t(o)];for(const P of b.tracks)P.measures.push({items:[{Beat:["Rest"]}]});p(c,Math.max(...b.tracks.map(P=>P.measures.length),1)-1),W()}function Jt(b){if(!t(d))return;const P=t(d)[t(o)];for(const ne of P.tracks)b<ne.measures.length&&ne.measures.splice(b,1);const I=Math.max(...P.tracks.map(ne=>ne.measures.length),0);t(c)>=I&&p(c,Math.max(0,I-1),!0),W()}function Xt(b,P){if(!t(d))return;const I=t(d)[t(o)];for(const ne of I.tracks)if(b<ne.measures.length&&P<ne.measures.length){const[X]=ne.measures.splice(b,1);ne.measures.splice(P,0,X)}t(c)===b?p(c,P,!0):b<t(c)&&P>=t(c)?ga(c,-1):b>t(c)&&P<=t(c)&&ga(c),W()}let ot=V(-1),Gn=V("");function Yt(b,P,I){t(d)&&(t(d)[t(o)].tracks[b].automation[P]=I,W())}function U(b,P){t(d)&&(t(d)[t(o)].tracks[b].automation.splice(P,1),W())}function oe(b){p(ot,b,!0),p(Gn,"")}function G(b){if(!t(d))return;const P=Us(t(Gn));P&&(t(d)[t(o)].tracks[b].automation.push(P),W()),p(ot,-1),p(Gn,"")}function se(){p(ot,-1),p(Gn,"")}let ve=V(-1),Pe=V("");function Me(b,P,I){t(d)&&(t(d)[t(o)].tracks[b].step_automation[P]=I,W())}function Qe(b,P){t(d)&&(t(d)[t(o)].tracks[b].step_automation.splice(P,1),W())}function Ze(b){p(ve,b,!0),p(Pe,"")}function rn(b){if(!t(d))return;const P=Qs(t(Pe));P&&(t(d)[t(o)].tracks[b].step_automation.push(P),W()),p(ve,-1),p(Pe,"")}function yn(){p(ve,-1),p(Pe,"")}var tn=pd(),cn=w(tn),pe=h(w(cn),2);{var an=b=>{var P=$0(),I=Te(P),ne=h(I,2),X=h(ne,2);H("keydown",I,le=>{le.key==="Enter"&&Z(),le.key==="Escape"&&$()}),Hn(I,()=>t(i),le=>p(i,le)),H("click",ne,Z),H("click",X,$),S(b,P)},Je=b=>{var P=qa(),I=Te(P);{var ne=X=>{var le=ed(),he=Te(le),en=w(he),Pn=h(he,2),Qn=h(Pn,2);ae(()=>ke(en,t(f))),H("click",Pn,K),H("click",Qn,M),S(X,le)};Y(I,X=>{t(f)&&X(ne)})}S(b,P)};Y(pe,b=>{t(s)?b(an):b(Je,!1)})}var Ee=h(cn,2);{var mn=b=>{var P=nd(),I=w(P);ae(()=>ke(I,t(r))),S(b,P)};Y(Ee,b=>{t(r)&&b(mn)})}var Ye=h(Ee,2);{var pn=b=>{var P=dd(),I=Te(P),ne=w(I);Wa(ne,{get items(){return t(v)},get selectedIndex(){return t(o)},get activeIndex(){return t(L)},get activeProgress(){return t(A)},onselect:he=>{p(o,he,!0)},onmove:xt,onadd:Zt});var X=h(I,2);{var le=he=>{var en=ud(),Pn=w(en),Qn=w(Pn);let $t;var ea=h(Qn,2),na=h(ea,2);let _a;var sn=w(na);Wa(sn,{get items(){return t(_)},get selectedIndex(){return t(c)},get activeIndex(){return t(O)},get activeProgress(){return t(k)},onselect:An=>{t(l)||p(c,An,!0)},onmove:(An,kn)=>{t(l)||Xt(An,kn)},onadd:()=>{t(l)||St()},ondelete:An=>{t(l)||Jt(An)}});var Zn=h(Pn,2);{var Pt=An=>{var kn=td(),In=w(kn);C0(In,{get groupSettings(){return t(m).group_settings},get toneSettings(){return t(m).tone_settings},get partSettings(){return a()},onset:We,ondelete:$e,onadd:Le}),S(An,kn)},At=An=>{var kn=cd(),In=w(kn);Be(In,17,()=>t(m).tracks,je,(lt,Kn,De)=>{const Tr=C(()=>t(Kn).designator==="Accent"?null:Ha(t(Kn).designator));var Dr=ld(),Tt=w(Dr);let Rr,qr;var Cr=h(w(Tt),2);{var Oo=hn=>{const ze=C(()=>Ha(t(Kn).designator));var un=ad(),Tn=Te(un);let _t;var zn=h(Tn,2);let Jn;ae((wn,ct)=>{_t=_e(Tn,1,"ms-btn mute svelte-1c399gj",null,_t,wn),Jn=_e(zn,1,"ms-btn solo svelte-1c399gj",null,Jn,ct)},[()=>({active:On.mutedPatternLabels.has(t(ze))}),()=>({active:On.soloPatternLabels.has(t(ze))})]),H("click",Tn,wn=>{wn.stopPropagation(),On.toggleMutePatternLabel(t(ze))}),J("mouseenter",Tn,()=>ue.set("mute-button")),H("click",zn,wn=>{wn.stopPropagation(),On.toggleSoloPatternLabel(t(ze))}),J("mouseenter",zn,()=>ue.set("solo-button")),S(hn,un)};Y(Cr,hn=>{t(Kn).designator!=="Accent"&&hn(Oo)})}var zo=h(Cr,2);{let hn=C(()=>g());X0(zo,{get track(){return t(Kn)},get measureIndex(){return t(c)},get playingBeat(){return t(hn)},onchange:(ze,un,Tn,_t)=>ee(De,ze,un,Tn,_t),ondeletetrack:()=>re(De),ondeletemeasure:ze=>me(De,ze),ondeleteitem:(ze,un)=>Ce(De,ze,un),ondeletedivision:(ze,un,Tn)=>we(De,ze,un,Tn),oninsertcommand:(ze,un,Tn)=>Re(De,ze,un,Tn),onreorderitem:(ze,un,Tn)=>Se(De,ze,un,Tn),onrename:ze=>ce(De,ze),onedit:(ze,un,Tn,_t)=>it(De,ze,un,Tn,_t),onsetleadingcommand:(ze,un)=>gn(De,ze,un),ondeleteleadingcommand:ze=>bn(De,ze),onaddleadingcommand:ze=>Qt(De,ze),get inheritedSettings(){return t(Sn)},onaddautomation:()=>oe(De),onaddstepautomation:()=>Ze(De)})}var Lr=h(Tt,2);{var No=hn=>{var ze=rd(),un=w(ze);Be(un,17,()=>t(Kn).automation,je,(zn,Jn,wn)=>{Js(zn,{get auto(){return t(Jn)},onchange:ct=>Yt(De,wn,ct),ondelete:()=>U(De,wn)})});var Tn=h(un,2);{var _t=zn=>{var Jn=sd(),wn=h(w(Jn),2),ct=h(wn,2),Rs=h(ct,2);H("keydown",wn,Dt=>{Dt.key==="Enter"&&G(De),Dt.key==="Escape"&&se()}),Hn(wn,()=>t(Gn),Dt=>p(Gn,Dt)),H("click",ct,()=>G(De)),H("click",Rs,se),S(zn,Jn)};Y(Tn,zn=>{t(ot)===De&&zn(_t)})}S(hn,ze)};Y(Lr,hn=>{(t(Kn).automation.length>0||t(ot)===De)&&hn(No)})}var Io=h(Lr,2);{var jo=hn=>{var ze=od(),un=w(ze);Be(un,17,()=>t(Kn).step_automation,je,(zn,Jn,wn)=>{Xs(zn,{get auto(){return t(Jn)},onchange:ct=>Me(De,wn,ct),ondelete:()=>Qe(De,wn)})});var Tn=h(un,2);{var _t=zn=>{var Jn=id(),wn=h(w(Jn),2),ct=h(wn,2),Rs=h(ct,2);H("keydown",wn,Dt=>{Dt.key==="Enter"&&rn(De),Dt.key==="Escape"&&yn()}),Hn(wn,()=>t(Pe),Dt=>p(Pe,Dt)),H("click",ct,()=>rn(De)),H("click",Rs,yn),S(zn,Jn)};Y(Tn,zn=>{t(ve)===De&&zn(_t)})}S(hn,ze)};Y(Io,hn=>{(t(Kn).step_automation.length>0||t(ve)===De)&&hn(jo)})}ae(hn=>{Rr=_e(Tt,1,"track-wrapper svelte-1c399gj",null,Rr,{"drag-over-track":t(z)===De&&t(R)!==De,"dragging-track":t(R)===De}),qr=Ue(Tt,"",qr,hn)},[()=>({opacity:t(Tr)!=null&&!On.isPatternLabelAudible(t(Tr))?.35:1})]),J("dragstart",Tt,hn=>B(hn,De)),J("dragover",Tt,hn=>F(hn,De)),J("dragleave",Tt,Q),J("drop",Tt,hn=>E(hn,De)),J("dragend",Tt,N),S(lt,Dr)});var Fn=h(In,2);H("click",Fn,ie),J("mouseenter",Fn,()=>ue.set("add-track")),S(An,kn)};Y(Zn,An=>{t(l)?An(Pt):An(At,!1)})}ae(()=>{$t=_e(Qn,1,"group-gear-btn svelte-1c399gj",null,$t,{glow:t(nn),active:t(l)}),_a=_e(na,1,"seq-bar-slot svelte-1c399gj",null,_a,{disabled:t(l)})}),H("click",Qn,()=>{p(l,!t(l))}),J("mouseenter",Qn,()=>ue.set("group-settings-gear")),H("click",ea,()=>qe(t(o))),J("mouseenter",na,()=>ue.set("pattern-measure-bar")),S(he,en)};Y(X,he=>{t(m)&&he(le)})}J("mouseenter",I,()=>ue.set("pattern-group-bar")),S(b,P)},xe=b=>{var P=fd();S(b,P)},ln=b=>{var P=md();S(b,P)};Y(Ye,b=>{t(d)?b(pn):t(f)&&!t(r)?b(xe,1):t(f)||b(ln,2)})}var q=h(Ye,2),j=w(q);to(j,()=>Y0),J("mouseenter",cn,()=>ue.set("pattern-header")),S(n,tn),ye()}Ke(["keydown","click"]);var vd=D('<pre class="error svelte-etlaox"> </pre>'),_d=D('<input class="rename-input svelte-etlaox"/> <button class="ctrl-btn ok svelte-etlaox">ok</button> <button class="ctrl-btn cancel svelte-etlaox">esc</button>',1),gd=D('<span class="song-name svelte-etlaox"> </span> <button class="ctrl-btn svelte-etlaox" title="Rename song">&#9998;</button> <button class="ctrl-btn svelte-etlaox" title="Duplicate song">&#10697;</button>',1),bd=D('<div class="song-controls svelte-etlaox"><!></div>'),yd=D('<div class="parts-bar svelte-etlaox"><!> <button class="ctrl-btn repeat-btn svelte-etlaox" title="Repeat selected part">&#8634;</button></div>'),kd=D('<p class="placeholder svelte-etlaox">Loading...</p>'),wd=D('<p class="placeholder svelte-etlaox">Select a song to arrange.</p>'),xd=D('<div class="song-mode svelte-etlaox"><div class="left-column svelte-etlaox"><div class="song-sidebar svelte-etlaox"><!></div> <div class="pattern-sidebar svelte-etlaox"><!></div></div> <div class="zone-1 svelte-etlaox"><!> <!> <!></div> <div class="zone-2 svelte-etlaox"><!></div> <div class="zone-3 svelte-etlaox"><!></div></div>');function Sd(n,e){be(e,!0);let a=V(_n([])),r=C(()=>t(a).includes(te.selectedSection)?te.selectedSection:""),s=C(()=>te.songAst),i=C(()=>t(s)?t(s).patterns.map(q=>q.label):[]),o=C(()=>t(s)?t(s).patterns.filter(q=>q.label!=="gap").map(q=>q.label):[]),c=V(null),l=V(!1),f=V(""),u=C(()=>te.selectedPartIndex),d=C(()=>t(s)&&t(u)<t(s).score.sequence.length?t(s).score.sequence[t(u)].part_name:null),m=C(()=>t(s)&&t(d)?t(s).parts.find(q=>q.label===t(d))??null:null),y=C(()=>t(s)?t(s).score.sequence.map(q=>({label:q.part_name})):[]),_=C(()=>{if(!t(m))return new Set;const q=new Set;for(const j of t(m).tracks)for(const b of j.clips)b.name!=="gap"&&q.add(b.name);return q});Ie(()=>{if(t(m)){for(const q of t(m).tracks)for(const j of q.clips)if(j.name!=="gap"){te.selectedPatternLabel=j.name;return}}});let x=C(()=>{if(!t(m))return;const q=new Set;for(const j of t(o))t(_).has(j)||q.add(j);return q.size>0?q:void 0}),v=C(()=>Ae.playing?Ae.position?.part_idx??-1:-1),T=C(()=>{if(!Ae.playing||!Ae.position||!Ae.sourceMap||!t(s))return null;const q=Ae.position,b=Ae.sourceMap.parts[q.part_idx];if(!b)return null;const P=new Map;for(let I=0;I<q.tracks.length;I++){const ne=q.tracks[I];if(ne.done)continue;const X=b.track_indices[I];if(X==null)continue;const le=ne.clip_duration_secs>0?Math.min(ne.elapsed_secs/ne.clip_duration_secs,1):0;P.set(X,{clipIdx:ne.clip_idx,progress:le})}return P.size>0?P:null}),L=C(()=>{if(t(v)<0||!Ae.position||!Ae.sourceMap)return 0;const q=Ae.position,j=Ae.sourceMap.timeline,b=j.part_start_secs[q.part_idx],P=j.part_duration_secs[q.part_idx];return P<=0?0:Math.max(0,Math.min((q.song_elapsed_secs-b)/P,1))}),O=C(()=>{const q=He.effectiveRegion,j=Ae.sourceMap?.timeline;return!j||!t(s)||q.end_secs<=0?null:t(s).score.sequence.map((b,P)=>{const I=[],ne=He.notchInPart(q.start_secs,j,P);ne!=null&&I.push({position:ne,type:"start"});const X=He.notchInPart(q.end_secs,j,P);return X!=null&&I.push({position:X,type:"end"}),I.length>0?I:null})}),A=C(()=>{const q=He.effectiveRegion,j=Ae.sourceMap?.timeline;if(!j||!t(m)||He.isFullSong||q.end_secs<=0)return null;const b=new Map;for(let P=0;P<t(m).tracks.length;P++){const I=t(m).tracks[P].clips,ne=[];for(let X=0;X<I.length;X++){const le=[],he=He.notchInClip(q.start_secs,j,t(u),P,X);he!=null&&le.push({position:he,type:"start"});const en=He.notchInClip(q.end_secs,j,t(u),P,X);en!=null&&le.push({position:en,type:"end"}),ne.push(le.length>0?le:null)}b.set(P,ne)}return b.size>0?b:null});function k(q){const j=Ae.sourceMap?.timeline;if(!j)return;const b=He.partTimeRange(j,q);b&&He.setRegion(b)}function g(q,j,b){const P=Ae.sourceMap?.timeline;if(!P)return;const I=P.part_start_secs[b],ne=P.part_duration_secs[b];if(I==null||ne==null)return;const X=I+j*ne,le=He.effectiveRegion;q==="start"?He.setRegion({start_secs:Math.min(X,le.end_secs-.1),end_secs:le.end_secs}):He.setRegion({start_secs:le.start_secs,end_secs:Math.max(X,le.start_secs+.1)})}function R(q,j,b,P){const I=Ae.sourceMap?.timeline;if(!I)return;const ne=I.part_start_secs[t(u)],X=I.clip_timings?.[t(u)]?.[b]?.[P];if(ne==null||!X)return;const le=ne+X.offset_secs+j*X.duration_secs,he=He.effectiveRegion;q==="start"?He.setRegion({start_secs:Math.min(le,he.end_secs-.1),end_secs:he.end_secs}):He.setRegion({start_secs:he.start_secs,end_secs:Math.max(le,he.start_secs+.1)})}Ie(()=>{z(te.text)}),Ie(()=>{te.revision,B(t(r))}),Ie(()=>{t(s)&&te.selectedPartIndex>=t(s).score.sequence.length&&(te.selectedPartIndex=Math.max(0,t(s).score.sequence.length-1))});async function z(q){try{const j=await Wc(q);p(a,[...new Set(j)],!0)}catch{p(a,[],!0)}}async function B(q){if(p(c,null),!q||!t(a).includes(q)){te.songAst=null;return}try{if(te.songAst=await Uc(te.text,q),te.songAst&&te.songAst.patterns.length>0&&(te.songAst.patterns.map(b=>b.label).includes(te.selectedPatternLabel)||(te.selectedPatternLabel=te.songAst.patterns[0].label)),!Ae.playing)try{const j=await Jc(te.text,q);Ae.playing||(Ae.sourceMap=j)}catch{}}catch(j){p(c,j instanceof Error?j.message:String(j),!0),te.songAst=null}}function F(q){q&&(te.selectedSection=q,te.selectedPartIndex=0,On.clear(),He.clearRegion())}async function Q(){const q=new Set(t(a));let j=1;for(;q.has(`song_${j}`);)j++;const b=`song_${j}`,P={leading_trivia:[],patterns:[{trivia:[],label:"main",groups:[{trivia:{leading:[],trailing_comment:null},group_settings:[],tone_settings:[],tracks:[]}]}],parts:[{trivia:[],label:"part_1",settings:[{Bpm:120}],automation:[],step_automation:[],tracks:[{trivia:[],clips:[{name:"main",times:1,mix:1,automation:[],step_automation:[]}]}]}],score:{trivia:[],sequence:[{trivia:[],part_name:"part_1"}]},trailing_trivia:[]};try{const I=await Vs(P);te.addSection(b,I),te.selectedSection=b}catch(I){p(c,I instanceof Error?I.message:String(I),!0)}}function E(){t(r)&&(p(f,t(r),!0),p(l,!0))}function N(){if(!t(r)||!t(f).trim()){p(l,!1);return}const q=t(f).trim();if(q===t(r)){p(l,!1);return}te.renameSection(t(r),q),te.selectedSection=q,p(l,!1)}function M(){p(l,!1)}function K(){if(!t(r))return;const q=te.getSectionContent(t(r));if(q===null)return;const j=new Set(t(a));let b=`${t(r)}_copy`,P=2;for(;j.has(b);)b=`${t(r)}_copy_${P}`,P++;te.addSection(b,q),te.selectedSection=b}async function Z(){if(!(!t(r)||!t(s))){p(c,null);try{const q=await Vs(t(s));te.replaceSectionContent(t(r),q)}catch(q){p(c,q instanceof Error?q.message:String(q),!0)}}}function $(q){if(!t(s)||q>=t(s).score.sequence.length)return null;const j=t(s).score.sequence[q].part_name;return t(s).parts.find(b=>b.label===j)??null}function W(q,j){if(!t(s))return;const b=t(s).score.sequence,[P]=b.splice(q,1);b.splice(j,0,P),t(u)===q?te.selectedPartIndex=j:q<t(u)&&j>=t(u)?te.selectedPartIndex--:q>t(u)&&j<=t(u)&&te.selectedPartIndex++,Z()}function ee(){if(!t(s))return;const q=new Set(t(s).parts.map(P=>P.label));let j=1;for(;q.has(`part_${j}`);)j++;const b=`part_${j}`;t(s).parts.push({trivia:[],label:b,settings:[],automation:[],step_automation:[],tracks:[{trivia:[],clips:[{name:"new",times:1,mix:1,automation:[],step_automation:[]}]}]}),t(s).score.sequence.push({trivia:[],part_name:b}),te.selectedPartIndex=t(s).score.sequence.length-1,Z()}function ie(){if(!t(s)||!t(m))return;const q=Ln(t(m)),j=new Set(t(s).parts.map(I=>I.label));let b=`${q.label}_copy`,P=2;for(;j.has(b);)b=`${q.label}_copy_${P}`,P++;q.trivia=[],q.label=b,t(s).parts.push(q),t(s).score.sequence.splice(t(u)+1,0,{trivia:[],part_name:b}),te.selectedPartIndex=t(u)+1,Z()}function ce(){t(s)&&(t(s).score.sequence.splice(t(u),1),Z())}function qe(q){t(s)&&(t(s).score.sequence.splice(q,1),Z())}function re(){!t(s)||!t(d)||(t(s).score.sequence.splice(t(u)+1,0,{trivia:[],part_name:t(d)}),te.selectedPartIndex=t(u)+1,Z())}async function me(q){if(!(!t(s)||!t(d)))try{te.songAst=await Zc(t(s),t(d),q),await Z()}catch(j){p(c,j instanceof Error?j.message:String(j),!0)}}function Ce(q,j,b){const P=$(t(u));!t(s)||!P||(P.tracks[q].clips[j]=b,Z())}function we(q,j){const b=$(t(u));!t(s)||!b||(b.tracks[q].clips.splice(j,1),b.tracks[q].clips.length===0&&b.tracks.splice(q,1),b.tracks.length===0&&t(s).score.sequence.splice(t(u),1),Z())}function Re(q){const j=$(t(u));!t(s)||!j||(j.tracks[q].clips.push({name:"new",times:1,mix:1,automation:[],step_automation:[]}),Z())}function Se(q){const j=$(t(u));!t(s)||!j||(j.tracks.splice(q,1),j.tracks.length===0&&t(s).score.sequence.splice(t(u),1),Z())}function Le(){const q=$(t(u));!t(s)||!q||(q.tracks.push({trivia:[],clips:[{name:"new",times:1,mix:1,automation:[],step_automation:[]}]}),Z())}function We(q,j,b,P){const I=$(t(u));if(!t(s)||!I)return;const[ne]=I.tracks[q].clips.splice(j,1);let X=P;q===b&&j<P&&(X=Math.max(0,P-1)),X=Math.min(X,I.tracks[b].clips.length),I.tracks[b].clips.splice(X,0,ne),Z()}function $e(q,j){const b=$(t(u));if(!t(s)||!b)return;const[P]=b.tracks.splice(q,1);b.tracks.splice(j,0,P),Z()}async function nn(q){const j=$(t(u));if(!(!t(s)||!j))try{const b=await Xc(q);j.settings.push(...b),Z()}catch(b){p(c,b instanceof Error?b.message:String(b),!0)}}function Sn(q){const j=$(t(u));!t(s)||!j||(j.settings.splice(q,1),Z())}function it(q,j){const b=$(t(u));if(!t(s)||!b)return;const P=b.settings.findIndex(ne=>Ka(ne)===q),I=$c(q,j);P>=0?b.settings[P]=I:b.settings.push(I),Z()}function gn(q){const j=$(t(u));if(!t(s)||!j)return;const b=j.settings.findIndex(P=>Ka(P)===q);b>=0&&(j.settings.splice(b,1),Z())}function bn(q,j){const b=$(t(u));!t(s)||!b||(b.automation[q]=j,Z())}function Qt(q){const j=$(t(u));!t(s)||!j||(j.automation.splice(q,1),Z())}function Zt(q){const j=$(t(u));!t(s)||!j||(j.automation.push(q),Z())}function xt(q,j){const b=$(t(u));!t(s)||!b||(b.step_automation[q]=j,Z())}function St(q){const j=$(t(u));!t(s)||!j||(j.step_automation.splice(q,1),Z())}function Jt(q){const j=$(t(u));!t(s)||!j||(j.step_automation.push(q),Z())}function Xt(q){te.selectedPatternLabel=q}function ot(){if(!t(s))return;const q=new Set(t(s).patterns.map(I=>I.label));let j=1;for(;q.has(`pat_${j}`);)j++;const b=`pat_${j}`,P={trivia:[],label:b,groups:[{trivia:{leading:[],trailing_comment:null},group_settings:[],tone_settings:[],tracks:[]}]};t(s).patterns.push(P),te.selectedPatternLabel=b,Z()}let Gn=C(()=>t(a).filter(q=>!q.startsWith("groove/")&&!q.startsWith("arp/"))),Yt=C(()=>t(Gn).map(q=>({id:q,label:q}))),U=C(()=>new Set(t(Gn).filter(q=>te.isLibraryOnly(q)))),oe=C(()=>t(o).map(q=>({id:q,label:q})));var G=xd(),se=w(G),ve=w(se),Pe=w(ve);Gs(Pe,{title:"Songs",get items(){return t(Yt)},get activeId(){return t(r)},get libraryIds(){return t(U)},onselect:F,oncreate:Q,hint:"song-sidebar"});var Me=h(ve,2),Qe=w(Me);{let q=C(()=>t(r)?ot:void 0);Gs(Qe,{title:"Patterns",get items(){return t(oe)},get activeId(){return te.selectedPatternLabel},get greyedOut(){return t(x)},onselect:j=>{te.selectedPatternLabel=j},get oncreate(){return t(q)},hint:"pattern-sidebar"})}var Ze=h(se,2),rn=w(Ze);{var yn=q=>{var j=vd(),b=w(j);ae(()=>ke(b,t(c))),S(q,j)};Y(rn,q=>{t(c)&&q(yn)})}var tn=h(rn,2);{var cn=q=>{var j=bd(),b=w(j);{var P=ne=>{var X=_d(),le=Te(X),he=h(le,2),en=h(he,2);H("keydown",le,Pn=>{Pn.key==="Enter"&&N(),Pn.key==="Escape"&&M()}),Hn(le,()=>t(f),Pn=>p(f,Pn)),H("click",he,N),H("click",en,M),S(ne,X)},I=ne=>{var X=gd(),le=Te(X),he=w(le),en=h(le,2),Pn=h(en,2);ae(()=>ke(he,t(r))),H("click",en,E),J("mouseenter",en,()=>ue.set("song-rename")),H("click",Pn,K),J("mouseenter",Pn,()=>ue.set("song-duplicate")),S(ne,X)};Y(b,ne=>{t(l)?ne(P):ne(I,!1)})}S(q,j)};Y(tn,q=>{t(r)&&q(cn)})}var pe=h(tn,2);{var an=q=>{var j=yd(),b=w(j);{let I=C(()=>t(O)??void 0);Wa(b,{get items(){return t(y)},get selectedIndex(){return t(u)},get activeIndex(){return t(v)},get activeProgress(){return t(L)},get focusNotches(){return t(I)},onselect:ne=>{te.selectedPartIndex=ne},onmove:W,onadd:ee,ondelete:qe,onfocus:k,onfocusdrag:g})}var P=h(b,2);J("mouseenter",j,()=>ue.set("song-parts-bar")),H("click",P,re),S(q,j)};Y(pe,q=>{t(r)&&t(s)&&t(s).score.sequence.length>0&&q(an)})}var Je=h(Ze,2),Ee=w(Je);{var mn=q=>{{let j=C(()=>t(m).tracks.map(P=>P.clips)),b=C(()=>t(v)===t(u)?t(T):null);A0(q,{get partName(){return t(d)},get partSeqIdx(){return t(u)},get tracks(){return t(j)},get settings(){return t(m).settings},get automation(){return t(m).automation},get patterns(){return t(i)},get activeTrackClips(){return t(b)},get focusClipNotches(){return t(A)},onchangeclip:Ce,ondeleteclip:we,onaddclip:Re,ondeletetrack:Se,onaddtrack:Le,onduplicatepart:ie,ondeletepart:ce,onrenamepart:me,onaddsetting:nn,ondeletesetting:Sn,onsetsettingstructured:it,ondeletesettingbykey:gn,oneditpattern:Xt,onmoveclip:We,onmovetrack:$e,onfocusclipdrag:R,onchangeautomation:bn,ondeleteautomation:Qt,onaddautomation:Zt,get stepAutomation(){return t(m).step_automation},onchangestepautomation:xt,ondeletestepautomation:St,onaddstepautomation:Jt})}},Ye=q=>{var j=kd();S(q,j)},pn=q=>{var j=wd();S(q,j)};Y(Ee,q=>{t(r)&&t(s)&&t(m)?q(mn):t(r)&&!t(c)?q(Ye,1):t(r)||q(pn,2)})}var xe=h(Je,2),ln=w(xe);{let q=C(()=>t(m)?.settings??[]);hd(ln,{get partSettings(){return t(q)}})}J("mouseenter",ve,()=>ue.set("song-sidebar")),J("mouseenter",Me,()=>ue.set("pattern-sidebar")),S(n,G),ye()}Ke(["keydown","click"]);const Pd={mod:"#b07cc8",osc:"#5c9ed6",path:"#4db89a",fx:"#d68c4b",vcf:"#5cb86e",amp:"#c8b44e",post:"#7a8ba8"},Ad={mod:"#8a50a8",osc:"#3070b0",path:"#2a8a6a",fx:"#b06830",vcf:"#3a8a48",amp:"#9a8828",post:"#5a6880"};function It(n){return n==="light"?Ad:Pd}const Td={mod:"MOD",osc:"OSC",path:"PATH",fx:"FX",vcf:"VCF",amp:"AMP",post:"POST"},$s=["mod","osc","path","fx","vcf","amp","post"];var Dd=D('<span class="arrow svelte-4okew9"></span>'),Rd=D("<!> <button> </button>",1),qd=D('<div class="signal-flow svelte-4okew9"></div>');function Cd(n,e){be(e,!0);let a=C(()=>It(Dn.resolved));function r(i){if(!e.activity)return!0;switch(i){case"mod":return e.activity.lfo||e.activity.pitch_env||e.activity.filter_env;case"osc":return e.activity.oscs.some(Boolean);case"path":return e.activity.paths.some(Boolean);case"fx":return e.activity.shape_filter||e.activity.waveshaper||e.activity.voice_fx;case"vcf":return e.activity.main_filter;case"amp":return!0;case"post":return e.activity.post_filter||e.activity.pan||e.activity.unison}}var s=qd();Be(s,21,()=>$s,je,(i,o,c)=>{var l=Rd(),f=Te(l);{var u=x=>{var v=Dd();v.textContent="→",S(x,v)};Y(f,x=>{c>0&&x(u)})}var d=h(f,2);let m,y;var _=w(d);ae(x=>{m=_e(d,1,"block svelte-4okew9",null,m,x),y=Ue(d,"",y,{"--block-color":t(a)[t(o)]}),ke(_,Td[t(o)])},[()=>({selected:e.selected===t(o),inactive:!r(t(o))})]),H("click",d,()=>e.onselect(t(o))),S(i,l)}),J("mouseenter",s,()=>ue.set("signal-flow-diagram")),S(n,s),ye()}Ke(["click"]);var Ld=D('<div class="region svelte-get67y"><div class="region-header svelte-get67y"> </div> <div class="region-body svelte-get67y"><!></div></div>');function xn(n,e){let a=ge(e,"color",3,"#cc9944");var r=Ld();let s;var i=w(r),o=w(i),c=h(i,2),l=w(c);mr(l,()=>e.children),ae(()=>{s=Ue(r,"",s,{"--region-color":a()}),ke(o,e.label)}),S(n,r)}const Md={sine:"M2 8 Q6 0 8 8 Q10 16 14 8 Q18 0 22 8",triangle:"M2 12 L8 4 L14 12 L20 4 L22 8",saw:"M2 12 L10 4 L10 12 L18 4 L18 12 L22 8",pulse:"M2 12 L2 4 L8 4 L8 12 L14 12 L14 4 L20 4 L20 12 L22 12","white-noise":"M2 8 L4 4 L5 11 L7 5 L8 13 L10 3 L11 10 L13 6 L14 12 L16 4 L17 9 L19 5 L20 11 L22 8","pink-noise":"M2 8 L4 6 L6 10 L8 5 L10 11 L12 7 L14 10 L16 6 L18 9 L20 7 L22 8",ramp:"M2 12 L10 4 L10 12 L18 4 L18 12 L22 8","s-h":"M2 10 L5 10 L5 5 L9 5 L9 11 L13 11 L13 6 L17 6 L17 10 L22 10",lowpass:"M2 4 L10 4 Q14 4 16 8 Q18 12 22 14",highpass:"M2 14 Q6 12 8 8 Q10 4 14 4 L22 4",bandpass:"M2 14 Q5 14 8 8 Q10 4 12 4 Q14 4 16 8 Q19 14 22 14",ad:"M2 14 L8 3 L20 14",adsr:"M2 14 L6 3 L10 8 L16 8 L22 14",multitap:"M2 14 L4 4 L6 14 L8 6 L10 14 L12 8 L14 14 L18 14"};var Ed=ac('<svg viewBox="0 0 24 16" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path></path></svg>');function Fd(n,e){be(e,!0);let a=ge(e,"size",3,16),r=ge(e,"color",3,"currentColor"),s=C(()=>Md[e.name]??"");var i=Ed(),o=w(i);ae(()=>{Xe(i,"width",a()*1.5),Xe(i,"height",a()),Xe(i,"stroke",r()),Xe(o,"d",t(s))}),S(n,i),ye()}var Od=D('<span class="opt-label svelte-1ed09gu"> </span>'),zd=D("<button><!></button>"),Nd=D('<div><div class="arc-area svelte-1ed09gu"><svg class="pointer-svg svelte-1ed09gu" viewBox="0 0 100 88"><line x1="50" y1="44" stroke-width="2" stroke-linecap="round"></line><circle cx="50" cy="44" r="3"></circle></svg> <!> <span class="selected-label svelte-1ed09gu"> </span></div></div>');function Ca(n,e){be(e,!0);let a=ge(e,"disabled",3,!1),r=C(()=>e.options.findIndex(L=>L.value===e.value)),s=C(()=>t(r)>=0?e.options[t(r)].label??e.options[t(r)].value:"");function i(L){const O=e.options.length;return O<=1?0:-90+180*L/(O-1)}function o(L){const A=i(L)*Math.PI/180,k=50+38*Math.sin(A),g=44-38*Math.cos(A);return`left: ${k}%; top: ${g}%; transform: translate(-50%, -50%)`}function c(){const O=(t(r)>=0?i(t(r)):0)*Math.PI/180;return{x:50+22*Math.sin(O),y:44-22*Math.cos(O)}}var l=Nd();let f,u;var d=w(l),m=w(d),y=w(m),_=h(y),x=h(m,2);Be(x,17,()=>e.options,je,(L,O,A)=>{var k=zd();let g;var R=w(k);{var z=F=>{{let Q=C(()=>A===t(r)?e.color??"var(--block-color, var(--accent))":"var(--text-muted)");Fd(F,{get name(){return t(O).glyph},size:18,get color(){return t(Q)}})}},B=F=>{var Q=Od(),E=w(Q);ae(()=>ke(E,t(O).label??t(O).value)),S(F,Q)};Y(R,F=>{t(O).glyph?F(z):F(B,!1)})}ae(F=>{g=_e(k,1,"option svelte-1ed09gu",null,g,{selected:A===t(r)}),Ue(k,F),Xe(k,"data-tooltip",t(O).label??t(O).value)},[()=>o(A)]),H("click",k,()=>e.onchange(t(O).value)),J("mouseenter",k,()=>{e.hints?.[t(O).value]&&ue.set(e.hints[t(O).value])}),S(L,k)});var v=h(x,2),T=w(v);ae((L,O)=>{f=_e(l,1,"knob svelte-1ed09gu",null,f,{disabled:a()}),u=Ue(l,"",u,{"--knob-color":e.color}),Xe(y,"x2",L),Xe(y,"y2",O),Xe(y,"stroke",e.color??"var(--block-color, var(--accent))"),Xe(_,"fill",e.color??"var(--block-color, var(--accent))"),ke(T,t(s))},[()=>c().x,()=>c().y]),J("mouseenter",l,()=>{a()&&e.hints?.[e.value]&&ue.set(e.hints[e.value])}),S(n,l),ye()}Ke(["click"]);var Id=D('<input class="edit-input svelte-1yf8t8l" type="text"/>'),jd=D('<button class="value-display svelte-1yf8t8l"> </button>'),Bd=D('<div><span class="label svelte-1yf8t8l"> </span> <div class="track svelte-1yf8t8l" role="slider"><div class="fill svelte-1yf8t8l"></div> <div class="thumb svelte-1yf8t8l"></div></div> <!></div>');function fe(n,e){be(e,!0);let a=ge(e,"min",3,0),r=ge(e,"max",3,1),s=ge(e,"step",3,.01),i=ge(e,"unit",3,""),o=ge(e,"disabled",3,!1);function c(ee){ee.focus()}let l=V(!1),f=V(""),u=V(!1),d=V(void 0),m=C(()=>(e.value-a())/(r()-a())*100);function y(ee){return s()>=1?String(Math.round(ee)):s()>=.1?ee.toFixed(1):ee.toFixed(2)}function _(ee){const ie=Math.min(r(),Math.max(a(),ee));return Math.round(ie/s())*s()}function x(ee){if(!t(d))return;const ie=t(d).getBoundingClientRect(),ce=1-(ee-ie.top)/ie.height,qe=Math.min(1,Math.max(0,ce));e.onchange(_(a()+qe*(r()-a())))}function v(ee){p(u,!0),ee.currentTarget.setPointerCapture(ee.pointerId),x(ee.clientY)}function T(ee){t(u)&&x(ee.clientY)}function L(){p(u,!1)}function O(){p(f,y(e.value),!0),p(l,!0)}function A(){const ee=parseFloat(t(f));isNaN(ee)||e.onchange(_(ee)),p(l,!1)}function k(){p(l,!1)}var g=Bd();let R,z;var B=w(g),F=w(B),Q=h(B,2);Xe(Q,"tabindex",0);var E=w(Q);let N;var M=h(E,2);let K;Ft(Q,ee=>p(d,ee),()=>t(d));var Z=h(Q,2);{var $=ee=>{var ie=Id();Za(()=>Hn(ie,()=>t(f),ce=>p(f,ce))),ao(ie,ce=>c?.(ce)),J("blur",ie,A),H("keydown",ie,ce=>{ce.key==="Enter"&&A(),ce.key==="Escape"&&k()}),S(ee,ie)},W=ee=>{var ie=jd(),ce=w(ie);ae(qe=>ke(ce,`${qe??""}${i()??""}`),[()=>y(e.value)]),H("dblclick",ie,O),S(ee,ie)};Y(Z,ee=>{t(l)?ee($):ee(W,!1)})}ae(()=>{R=_e(g,1,"vert svelte-1yf8t8l",null,R,{disabled:o()}),z=Ue(g,"",z,{"--vert-color":e.color}),ke(F,e.label),Xe(Q,"aria-valuenow",e.value),Xe(Q,"aria-valuemin",a()),Xe(Q,"aria-valuemax",r()),Xe(Q,"aria-label",e.label),N=Ue(E,"",N,{height:`${t(m)??""}%`}),K=Ue(M,"",K,{bottom:`${t(m)??""}%`})}),J("mouseenter",g,()=>{e.hint&&ue.set(e.hint)}),H("pointerdown",Q,v),H("pointermove",Q,T),H("pointerup",Q,L),S(n,g),ye()}Ke(["pointerdown","pointermove","pointerup","keydown","dblclick"]);var Hd=D('<div class="vert-group svelte-j7rpns"><!></div>');function fn(n,e){var a=Hd(),r=w(a);mr(r,()=>e.children),S(n,a)}var Vd=D("<button> </button>"),Gd=D('<div><div class="track svelte-zq2sms"><div class="indicator svelte-zq2sms"></div></div> <div class="labels svelte-zq2sms"></div></div>');function La(n,e){be(e,!0);let a=ge(e,"disabled",3,!1),r=C(()=>e.options.indexOf(e.value)),s=C(()=>e.options.length>1?t(r)/(e.options.length-1)*100:0);var i=Gd();let o;var c=w(i),l=w(c);let f;var u=h(c,2);Be(u,21,()=>e.options,je,(d,m,y)=>{var _=Vd();let x;var v=w(_);ae(()=>{x=_e(_,1,"stop svelte-zq2sms",null,x,{active:y===t(r)}),ke(v,t(m))}),H("click",_,()=>e.onchange(t(m))),J("mouseenter",_,()=>{e.hints?.[t(m)]&&ue.set(e.hints[t(m)])}),S(d,_)}),ae(()=>{o=_e(i,1,"synth-switch svelte-zq2sms",null,o,{disabled:a()}),f=Ue(l,"",f,{left:`${t(s)??""}%`})}),J("mouseenter",i,()=>{e.hint&&ue.set(e.hint)}),S(n,i),ye()}Ke(["click"]);var Kd=D('<span class="signal-ref svelte-126zrlx"> </span>');function on(n,e){be(e,!0);let a=C(()=>It(Dn.resolved)),r=C(()=>t(a)[e.blockId]);var s=Kd();let i;var o=w(s);ae(()=>{i=Ue(s,"",i,{background:`color-mix(in srgb, ${t(r)??""} 12.5%, transparent)`,color:t(r),"border-color":`color-mix(in srgb, ${t(r)??""} 25%, transparent)`}),ke(o,e.label)}),J("mouseenter",s,()=>{e.hint&&ue.set(e.hint)}),S(n,s),ye()}function Ht(n){return n?"AD"in n?"AD":"ADSR"in n?"ADSR":"MultiTap"in n?"MultiTap":null:null}function ka(n){return n?"Lowpass"in n?"Lowpass":"Highpass"in n?"Highpass":"Bandpass"in n?"Bandpass":null:null}function wa(n){return"Lowpass"in n?n.Lowpass[0]:"Highpass"in n?n.Highpass[0]:n.Bandpass[0]}function xa(n){return"Lowpass"in n?n.Lowpass[1]:"Highpass"in n?n.Highpass[1]:n.Bandpass[1]}function et(n,e,a){return{[n]:[e,a]}}function xo(n){return n==="Fixed"?"Fixed":"Pitched"in n?"Pitched":"Swept"}function Yn(n){switch(n){case"AD":return{AD:{attack_ms:1,decay_ms:200,start:0,amt:1,exp:!1}};case"ADSR":return{ADSR:{attack_ms:5,decay_ms:200,sustain:.8,release_ms:50}};case"MultiTap":return{MultiTap:{num_taps:3,tap_interval:50,tap_amp:.8,tail_decay:200}}}}function fs(){return{shape:"Sine",freq:{Pitched:{semi:0,fine:0}},fixed_hz:440,pw:.5,pitch_lfo_amt:0,pitch_lfo2_amt:0,pitch_env_amt:0,pw_lfo_amt:0,pw_lfo2_amt:0,phaz_diff:0,phaz_diff_lfo_amt:0,phaz_diff_lfo2_amt:0}}function ms(){return{mix:[1,0,0,0,0,0],pre_filter:null,env:null,post_filter:null}}var Wd=D("<!> <!> <!> <!>",1),Ud=D("<!> <!> <!> <!>",1),Qd=D("<!> <!> <!> <!>",1),Zd=D('<div class="env-panel svelte-ps0so5"><div class="env-toggles svelte-ps0so5"><!> <!></div> <!> <div><!></div></div>');function ps(n,e){be(e,!0);let a=ge(e,"label",3,"Env"),r=ge(e,"value",3,null);const s=[{value:"AD",glyph:"ad",label:"AD"},{value:"ADSR",glyph:"adsr",label:"ADSR"},{value:"MultiTap",glyph:"multitap",label:"Multi"}];let i=V(null),o=V("AD");Ie(()=>{const R=Ht(r());R&&p(o,R,!0)});let c=C(()=>r()??Yn(t(o))),l=C(()=>Ht(t(c)));function f(R){p(o,R,!0),e.onchange(Yn(R))}function u(R){const z=r()??Yn(t(o)),B=Ht(z),F=z[B];e.onchange({[B]:{...F,...R}})}var d=Zd(),m=w(d),y=w(m);{let R=C(()=>r()!==null);at(y,{get label(){return a()},get active(){return t(R)},onchange:z=>{z?e.onchange(t(i)??Yn(t(o))):(p(i,Ln(r()),!0),e.onchange(null))},get color(){return e.color},hint:"toggle-env"})}var _=h(y,2);{var x=R=>{{let z=C(()=>r()===null);at(R,{label:"exp",get active(){return t(c).AD.exp},onchange:B=>u({exp:B}),get color(){return e.color},hint:"toggle-env-exp",get disabled(){return t(z)}})}};Y(_,R=>{"AD"in t(c)&&R(x)})}var v=h(m,2);{let R=C(()=>r()===null);Ca(v,{get options(){return s},get value(){return t(l)},onchange:f,get color(){return e.color},hints:{AD:"env-type-ad",ADSR:"env-type-adsr",MultiTap:"env-type-multi"},get disabled(){return t(R)}})}var T=h(v,2);let L;var O=w(T);{var A=R=>{fn(R,{children:(z,B)=>{var F=Wd(),Q=Te(F);fe(Q,{label:"atk",get value(){return t(c).AD.attack_ms},min:0,max:500,step:.1,onchange:K=>u({attack_ms:K}),get color(){return e.color},hint:"env-ad-atk"});var E=h(Q,2);fe(E,{label:"dec",get value(){return t(c).AD.decay_ms},min:0,max:5e3,step:1,onchange:K=>u({decay_ms:K}),get color(){return e.color},hint:"env-ad-dec"});var N=h(E,2);fe(N,{label:"start",get value(){return t(c).AD.start},min:-1,max:1,step:.01,onchange:K=>u({start:K}),get color(){return e.color},hint:"env-ad-start"});var M=h(N,2);fe(M,{label:"amt",get value(){return t(c).AD.amt},min:-1,max:1,step:.01,onchange:K=>u({amt:K}),get color(){return e.color},hint:"env-ad-amt"}),S(z,F)}})},k=R=>{fn(R,{children:(z,B)=>{var F=Ud(),Q=Te(F);fe(Q,{label:"atk",get value(){return t(c).ADSR.attack_ms},min:0,max:2e3,step:.1,onchange:K=>u({attack_ms:K}),get color(){return e.color},hint:"env-adsr-atk"});var E=h(Q,2);fe(E,{label:"dec",get value(){return t(c).ADSR.decay_ms},min:0,max:5e3,step:1,onchange:K=>u({decay_ms:K}),get color(){return e.color},hint:"env-adsr-dec"});var N=h(E,2);fe(N,{label:"sus",get value(){return t(c).ADSR.sustain},min:0,max:1,step:.01,onchange:K=>u({sustain:K}),get color(){return e.color},hint:"env-adsr-sus"});var M=h(N,2);fe(M,{label:"rel",get value(){return t(c).ADSR.release_ms},min:0,max:5e3,step:1,onchange:K=>u({release_ms:K}),get color(){return e.color},hint:"env-adsr-rel"}),S(z,F)}})},g=R=>{fn(R,{children:(z,B)=>{var F=Qd(),Q=Te(F);fe(Q,{label:"taps",get value(){return t(c).MultiTap.num_taps},min:1,max:16,step:1,onchange:K=>u({num_taps:K}),get color(){return e.color},hint:"env-mt-taps"});var E=h(Q,2);fe(E,{label:"intvl",get value(){return t(c).MultiTap.tap_interval},min:1,max:500,step:1,onchange:K=>u({tap_interval:K}),get color(){return e.color},hint:"env-mt-intvl"});var N=h(E,2);fe(N,{label:"amp",get value(){return t(c).MultiTap.tap_amp},min:0,max:1,step:.01,onchange:K=>u({tap_amp:K}),get color(){return e.color},hint:"env-mt-amp"});var M=h(N,2);fe(M,{label:"tail",get value(){return t(c).MultiTap.tail_decay},min:0,max:5e3,step:1,onchange:K=>u({tail_decay:K}),get color(){return e.color},hint:"env-mt-tail"}),S(z,F)}})};Y(O,R=>{"AD"in t(c)?R(A):"ADSR"in t(c)?R(k,1):"MultiTap"in t(c)&&R(g,2)})}ae(()=>L=_e(T,1,"env-controls svelte-ps0so5",null,L,{inactive:r()===null})),S(n,d),ye()}var Jd=D('<div class="lfo-row svelte-8x2ovf"><div class="lfo-left svelte-8x2ovf"><!> <!></div> <!></div>'),Xd=D('<!> <div class="vert-with-ref"><!> <!></div> <div class="vert-with-ref"><!> <!></div>',1),Yd=D('<div class="lfo-row svelte-8x2ovf"><div class="lfo-left svelte-8x2ovf"><!> <!></div> <!></div>'),$d=D('<div class="block-col svelte-8x2ovf"><div class="block-row svelte-8x2ovf"><!> <!> <!></div> <div class="block-row svelte-8x2ovf"><!> <!></div></div>');function ef(n,e){be(e,!0);const a=[{value:"Ramp",glyph:"ramp",label:"Ramp"},{value:"Pulse",glyph:"pulse",label:"Pls"},{value:"Sine",glyph:"sine",label:"Sin"},{value:"Triangle",glyph:"triangle",label:"Tri"},{value:"S&H",glyph:"s-h",label:"S&H"}],r=["Free","Trig","Rand"];let s=C(()=>It(Dn.resolved).mod);var i=$d(),o=w(i),c=w(o);xn(c,{label:"Osc Start",get color(){return t(s)},children:(y,_)=>{at(y,{get active(){return e.config.osc_start},onchange:x=>e.updateConfig({osc_start:x}),get color(){return t(s)},hint:"toggle-osc-start"})},$$slots:{default:!0}});var l=h(c,2);xn(l,{label:"LFO-1",get color(){return t(s)},children:(y,_)=>{var x=Jd(),v=w(x),T=w(v);{let A=C(()=>e.config.lfo.wave??"S&H");Ca(T,{get options(){return a},get value(){return t(A)},onchange:k=>{const g=k==="S&H"?null:k;e.updateConfig({lfo:{...e.config.lfo,wave:g}})},get color(){return t(s)},hints:{Ramp:"lfo-wave-ramp",Pulse:"lfo-wave-pulse",Sine:"lfo-wave-sine",Triangle:"lfo-wave-tri","S&H":"lfo-wave-sh"}})}var L=h(T,2);La(L,{get options(){return r},get value(){return e.config.lfo.mode},onchange:A=>e.updateConfig({lfo:{...e.config.lfo,mode:A}}),hints:{Free:"lfo-mode-free",Trig:"lfo-mode-trig",Rand:"lfo-mode-rand"}});var O=h(v,2);fn(O,{children:(A,k)=>{fe(A,{label:"rate",get value(){return e.config.lfo.rate},min:0,max:15,step:1,onchange:g=>e.updateConfig({lfo:{...e.config.lfo,rate:g}}),get color(){return t(s)},hint:"lfo-rate"})}}),S(y,x)},$$slots:{default:!0}});var f=h(l,2);xn(f,{label:"LFO-2",get color(){return t(s)},children:(y,_)=>{var x=Yd(),v=w(x),T=w(v);{let A=C(()=>e.config.lfo2.wave??"S&H");Ca(T,{get options(){return a},get value(){return t(A)},onchange:k=>{const g=k==="S&H"?null:k;e.updateConfig({lfo2:{...e.config.lfo2,wave:g}})},get color(){return t(s)},hints:{Ramp:"lfo-wave-ramp",Pulse:"lfo-wave-pulse",Sine:"lfo-wave-sine",Triangle:"lfo-wave-tri","S&H":"lfo-wave-sh"}})}var L=h(T,2);La(L,{get options(){return r},get value(){return e.config.lfo2.mode},onchange:A=>e.updateConfig({lfo2:{...e.config.lfo2,mode:A}}),hints:{Free:"lfo-mode-free",Trig:"lfo-mode-trig",Rand:"lfo-mode-rand"}});var O=h(v,2);fn(O,{children:(A,k)=>{var g=Xd(),R=Te(g);fe(R,{label:"rate",get value(){return e.config.lfo2.rate},min:0,max:15,step:1,onchange:M=>e.updateConfig({lfo2:{...e.config.lfo2,rate:M}}),get color(){return t(s)},hint:"lfo2-rate"});var z=h(R,2),B=w(z);fe(B,{label:"rate",get value(){return e.config.lfo1_to_lfo2_rate},min:0,max:1,step:.01,onchange:M=>e.updateConfig({lfo1_to_lfo2_rate:M}),get color(){return t(s)},hint:"lfo1-to-lfo2-rate"});var F=h(B,2);on(F,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var Q=h(z,2),E=w(Q);fe(E,{label:"depth",get value(){return e.config.lfo1_to_lfo2_depth},min:0,max:1,step:.01,onchange:M=>e.updateConfig({lfo1_to_lfo2_depth:M}),get color(){return t(s)},hint:"lfo1-to-lfo2-depth"});var N=h(E,2);on(N,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"}),S(A,g)}}),S(y,x)},$$slots:{default:!0}});var u=h(o,2),d=w(u);xn(d,{label:"ENV-1 (Pitch)",get color(){return t(s)},children:(y,_)=>{ps(y,{label:"p.env",get value(){return e.config.pitch_env},onchange:x=>e.updateConfig({pitch_env:x}),get color(){return t(s)}})},$$slots:{default:!0}});var m=h(d,2);xn(m,{label:"ENV-2 (Filter)",get color(){return t(s)},children:(y,_)=>{ps(y,{label:"f.env",get value(){return e.config.filter_env},onchange:x=>e.updateConfig({filter_env:x}),get color(){return t(s)}})},$$slots:{default:!0}}),J("mouseenter",i,()=>ue.set("mod-block")),S(n,i),ye()}var nf=D("<!> <!>",1),tf=D("<!> <!> <!> <!>",1),af=D('<!> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div>',1),sf=D('<!> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div>',1),rf=D('<div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div>',1),of=D('<div class="osc-panel svelte-dp5a6t"><div class="shape-col svelte-dp5a6t"><!> <!></div> <div class="freq-group svelte-dp5a6t"><!></div> <div><!></div> <!> <!></div>');function lf(n,e){be(e,!0);const a=[{value:"Sine",glyph:"sine",label:"Sin"},{value:"Triangle",glyph:"triangle",label:"Tri"},{value:"Saw",glyph:"saw",label:"Saw"},{value:"Pulse",glyph:"pulse",label:"Pls"},{value:"WhiteNoise",glyph:"white-noise",label:"Wht"},{value:"PinkNoise",glyph:"pink-noise",label:"Pnk"}],r=["Pitched","Fixed","Swept"];function s(k){e.onchange({...e.value,...k})}function i(k){s({shape:k})}function o(k){let g;switch(k){case"Pitched":g={Pitched:{semi:0,fine:0}};break;case"Fixed":g="Fixed";break;case"Swept":g={Swept:{atk:.1,dec:200,base:48,amt:50}};break;default:return}e.onchange({...e.value,freq:g})}var c=of(),l=w(c),f=w(l);Ca(f,{get options(){return a},get value(){return e.value.shape},onchange:i,get color(){return e.color},hints:{Sine:"osc-shape-sine",Triangle:"osc-shape-tri",Saw:"osc-shape-saw",Pulse:"osc-shape-pulse",WhiteNoise:"osc-shape-white",PinkNoise:"osc-shape-pink"}});var u=h(f,2);{let k=C(()=>xo(e.value.freq));La(u,{get options(){return r},get value(){return t(k)},onchange:o,hints:{Pitched:"osc-freq-pitched",Fixed:"osc-freq-fixed",Swept:"osc-freq-swept"}})}var d=h(l,2),m=w(d);{var y=k=>{fn(k,{children:(g,R)=>{var z=nf(),B=Te(z);fe(B,{label:"semi",get value(){return e.value.freq.Pitched.semi},min:-48,max:48,step:1,onchange:Q=>s({freq:{Pitched:{semi:Q,fine:e.value.freq.Pitched.fine}}}),get color(){return e.color},hint:"osc-semi"});var F=h(B,2);fe(F,{label:"fine",get value(){return e.value.freq.Pitched.fine},min:-100,max:100,step:1,onchange:Q=>s({freq:{Pitched:{semi:e.value.freq.Pitched.semi,fine:Q}}}),get color(){return e.color},hint:"osc-fine"}),S(g,z)}})},_=k=>{fn(k,{children:(g,R)=>{fe(g,{label:"hz",get value(){return e.value.fixed_hz},min:20,max:2e4,step:1,onchange:z=>s({fixed_hz:z}),get color(){return e.color},hint:"osc-hz"})}})},x=k=>{const g=C(()=>e.value.freq.Swept);fn(k,{children:(R,z)=>{var B=tf(),F=Te(B);fe(F,{label:"atk",get value(){return t(g).atk},min:0,max:100,step:.01,onchange:M=>s({freq:{Swept:{...t(g),atk:M}}}),get color(){return e.color},hint:"osc-swept-atk"});var Q=h(F,2);fe(Q,{label:"dec",get value(){return t(g).dec},min:0,max:5e3,step:1,onchange:M=>s({freq:{Swept:{...t(g),dec:M}}}),get color(){return e.color},hint:"osc-swept-dec"});var E=h(Q,2);fe(E,{label:"base",get value(){return t(g).base},min:0,max:135,step:.1,onchange:M=>s({freq:{Swept:{...t(g),base:M}}}),get color(){return e.color},hint:"osc-swept-base"});var N=h(E,2);fe(N,{label:"amt",get value(){return t(g).amt},min:-135,max:135,step:.1,onchange:M=>s({freq:{Swept:{...t(g),amt:M}}}),get color(){return e.color},hint:"osc-swept-amt"}),S(R,B)}})};Y(m,k=>{typeof e.value.freq=="object"&&"Pitched"in e.value.freq?k(y):e.value.freq==="Fixed"?k(_,1):typeof e.value.freq=="object"&&"Swept"in e.value.freq&&k(x,2)})}var v=h(d,2);let T;var L=w(v);fn(L,{children:(k,g)=>{var R=af(),z=Te(R);fe(z,{label:"pw",get value(){return e.value.pw},min:0,max:1,step:.01,onchange:K=>s({pw:K}),get color(){return e.color},hint:"osc-pw"});var B=h(z,2),F=w(B);fe(F,{label:"pw lfo",get value(){return e.value.pw_lfo_amt},min:0,max:1,step:.01,onchange:K=>s({pw_lfo_amt:K}),get color(){return e.color},hint:"osc-pw-lfo"});var Q=h(F,2);on(Q,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var E=h(B,2),N=w(E);fe(N,{label:"pw lfo2",get value(){return e.value.pw_lfo2_amt},min:0,max:1,step:.01,onchange:K=>s({pw_lfo2_amt:K}),get color(){return e.color},hint:"osc-pw-lfo2"});var M=h(N,2);on(M,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),S(k,R)}});var O=h(v,2);fn(O,{children:(k,g)=>{var R=sf(),z=Te(R);fe(z,{label:"pdif",get value(){return e.value.phaz_diff},min:0,max:1,step:.01,onchange:K=>s({phaz_diff:K}),get color(){return e.color},hint:"osc-pdif"});var B=h(z,2),F=w(B);fe(F,{label:"pd lfo",get value(){return e.value.phaz_diff_lfo_amt},min:0,max:1,step:.01,onchange:K=>s({phaz_diff_lfo_amt:K}),get color(){return e.color},hint:"osc-pd-lfo"});var Q=h(F,2);on(Q,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var E=h(B,2),N=w(E);fe(N,{label:"pd lf2",get value(){return e.value.phaz_diff_lfo2_amt},min:0,max:1,step:.01,onchange:K=>s({phaz_diff_lfo2_amt:K}),get color(){return e.color},hint:"osc-pd-lfo2"});var M=h(N,2);on(M,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),S(k,R)}});var A=h(O,2);fn(A,{children:(k,g)=>{var R=rf(),z=Te(R),B=w(z);fe(B,{label:"p.lfo",get value(){return e.value.pitch_lfo_amt},min:0,max:48,step:.1,onchange:$=>s({pitch_lfo_amt:$}),get color(){return e.color},hint:"osc-pitch-lfo"});var F=h(B,2);on(F,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var Q=h(z,2),E=w(Q);fe(E,{label:"p.lfo2",get value(){return e.value.pitch_lfo2_amt},min:0,max:48,step:.1,onchange:$=>s({pitch_lfo2_amt:$}),get color(){return e.color},hint:"osc-pitch-lfo2"});var N=h(E,2);on(N,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"});var M=h(Q,2),K=w(M);fe(K,{label:"p.env",get value(){return e.value.pitch_env_amt},min:-135,max:135,step:.1,onchange:$=>s({pitch_env_amt:$}),get color(){return e.color},hint:"osc-pitch-env"});var Z=h(K,2);on(Z,{label:"ENV-1",blockId:"mod",hint:"ref-env1"}),S(k,R)}}),ae(()=>T=_e(v,1,"pulse-group svelte-dp5a6t",null,T,{inactive:e.value.shape!=="Pulse"})),S(n,c),ye()}var cf=D("<button></button>"),uf=D('<div class="interaction-row svelte-1o0jwca"><div class="vert-with-ref svelte-1o0jwca"><!> <!></div></div>'),df=D('<div class="vert-with-ref svelte-1o0jwca"><!> <!></div> <div class="vert-with-ref svelte-1o0jwca"><!> <!></div>',1),ff=D("<div><!> <!> <!> <!></div>"),mf=D('<div class="osc-tabs svelte-1o0jwca"></div> <div class="osc-body svelte-1o0jwca"><!> <div><!></div></div> <!> <!>',1);function pf(n,e){be(e,!0);let a=ge(e,"focusTab",19,()=>-1),r=C(()=>It(Dn.resolved).osc),s=_n(Array(6).fill(null)),i=V(0);Ie(()=>{a()>=0&&p(i,a())});let o=C(()=>e.config.oscs[t(i)]),c=C(()=>t(o)??fs());var l=mf(),f=Te(l);let u;Be(f,20,()=>({length:6}),je,(A,k,g)=>{const R=C(()=>e.config.oscs[g]!==null);var z=cf();let B;z.textContent=`OSC-${g+1}`,ae(()=>B=_e(z,1,"tab svelte-1o0jwca",null,B,{selected:g===t(i),"osc-active":t(R)})),H("click",z,()=>{p(i,g,!0)}),S(A,z)});var d=h(f,2),m=w(d);{let A=C(()=>t(i)+1),k=C(()=>t(o)!==null);at(m,{get label(){return`OSC-${t(A)??""}`},get active(){return t(k)},onchange:g=>{g?e.setOsc(t(i),s[t(i)]??fs()):(s[t(i)]=Ln(e.config.oscs[t(i)]),e.setOsc(t(i),null))},get color(){return t(r)},hint:"toggle-osc"})}var y=h(m,2);let _;var x=w(y);lf(x,{get index(){return t(i)},get value(){return t(c)},onchange:A=>{t(o)!==null&&e.setOsc(t(i),A)},get color(){return t(r)}});var v=h(d,2);{var T=A=>{xn(A,{label:"Feedback",get color(){return t(r)},children:(k,g)=>{var R=uf(),z=w(R),B=w(z);fe(B,{label:"fb fm",get value(){return e.config.osc_interaction.feedback_fm},min:0,max:3,step:.01,onchange:Q=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,feedback_fm:Q}}),get color(){return t(r)},hint:"osc-fb-fm"});var F=h(B,2);on(F,{label:"OSC-1",blockId:"osc",hint:"ref-osc1"}),S(k,R)},$$slots:{default:!0}})};Y(v,A=>{t(i)===0&&e.config.oscs[0]!==null&&A(T)})}var L=h(v,2);{var O=A=>{xn(A,{label:"Interaction",get color(){return t(r)},children:(k,g)=>{var R=ff();let z;var B=w(R);at(B,{label:"sync",get active(){return e.config.osc_interaction.sync},onchange:M=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,sync:M}}),get color(){return t(r)},hint:"toggle-sync"});var F=h(B,2);{var Q=M=>{fe(M,{label:"window",get value(){return e.config.osc_interaction.sync_window},min:0,max:1,step:.01,onchange:K=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,sync_window:K}}),get color(){return t(r)},hint:"osc-sync-window"})};Y(F,M=>{e.config.osc_interaction.sync&&M(Q)})}var E=h(F,2);at(E,{label:"ring",get active(){return e.config.osc_interaction.ring_mod},onchange:M=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,ring_mod:M}}),get color(){return t(r)},hint:"toggle-ring"});var N=h(E,2);fn(N,{children:(M,K)=>{var Z=df(),$=Te(Z),W=w($);fe(W,{label:"fm",get value(){return e.config.osc_interaction.fm_amt},min:0,max:10,step:.01,onchange:re=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,fm_amt:re}}),get color(){return t(r)},hint:"osc-fm"});var ee=h(W,2);on(ee,{label:"OSC-1",blockId:"osc",hint:"ref-osc1"});var ie=h($,2),ce=w(ie);fe(ce,{label:"fm env",get value(){return e.config.osc_interaction.fm_env_amt},min:-10,max:10,step:.01,onchange:re=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,fm_env_amt:re}}),get color(){return t(r)},hint:"osc-fm-env"});var qe=h(ce,2);on(qe,{label:"ENV-1",blockId:"mod",hint:"ref-env1"}),S(M,Z)}}),ae(()=>z=_e(R,1,"interaction-row svelte-1o0jwca",null,z,{inactive:e.config.oscs[1]===null})),S(k,R)},$$slots:{default:!0}})};Y(L,A=>{t(i)===1&&A(O)})}ae(()=>{u=Ue(f,"",u,{"--_block-accent":t(r)}),_=_e(y,1,"osc-controls svelte-1o0jwca",null,_,{inactive:t(o)===null})}),J("mouseenter",f,()=>ue.set("osc-block")),S(n,l),ye()}Ke(["click"]);var hf=D("<!> <!>",1),vf=D('<div class="biquad-panel svelte-4hmfpi"><!> <div><!> <!></div></div>');function hs(n,e){be(e,!0);let a=ge(e,"label",3,"Filter"),r=ge(e,"value",3,null);const s=[{value:"Lowpass",glyph:"lowpass",label:"LP"},{value:"Highpass",glyph:"highpass",label:"HP"},{value:"Bandpass",glyph:"bandpass",label:"BP"}];let i=V(null),o=C(()=>r()??et("Lowpass",1e3,.7)),c=C(()=>ka(t(o)));function l(T){const L=wa(t(o)),O=xa(t(o));e.onchange(et(T,L,O))}function f(T){e.onchange(et(ka(t(o)),T,xa(t(o))))}function u(T){e.onchange(et(ka(t(o)),wa(t(o)),T))}var d=vf(),m=w(d);{let T=C(()=>r()!==null);at(m,{get label(){return a()},get active(){return t(T)},onchange:L=>{L?e.onchange(t(i)??et("Lowpass",1e3,.7)):(p(i,Ln(r()),!0),e.onchange(null))},get color(){return e.color},hint:"toggle-biquad"})}var y=h(m,2);let _;var x=w(y);{let T=C(()=>t(c)??"Lowpass");Ca(x,{get options(){return s},get value(){return t(T)},onchange:l,get color(){return e.color},hints:{Lowpass:"biquad-type-lp",Highpass:"biquad-type-hp",Bandpass:"biquad-type-bp"}})}var v=h(x,2);fn(v,{children:(T,L)=>{var O=hf(),A=Te(O);{let g=C(()=>wa(t(o)));fe(A,{label:"freq",get value(){return t(g)},min:20,max:2e4,step:1,onchange:f,get color(){return e.color},hint:"biquad-freq"})}var k=h(A,2);{let g=C(()=>xa(t(o)));fe(k,{label:"Q",get value(){return t(g)},min:.1,max:20,step:.01,onchange:u,get color(){return e.color},hint:"biquad-q"})}S(T,O)}}),ae(()=>_=_e(y,1,"biquad-controls svelte-4hmfpi",null,_,{inactive:r()===null})),S(n,d),ye()}var _f=D("<div><!> <!></div>"),gf=D('<div class="path-panel svelte-1mlllm3"><div class="path-row svelte-1mlllm3"><!> <!></div> <div class="path-row svelte-1mlllm3"><!> <!></div></div>');function bf(n,e){be(e,!0),ge(e,"oscCount",3,2);let a=ge(e,"oscActive",19,()=>[]);function r(m){e.onchange({...e.value,...m})}function s(m,y){const _=[...e.value.mix];_[m]=y,e.onchange({...e.value,mix:_})}var i=gf(),o=w(i),c=w(o);fn(c,{children:(m,y)=>{var _=qa(),x=Te(_);Be(x,16,()=>({length:6}),je,(v,T,L)=>{const O=C(()=>a()[L]??!1);var A=_f();let k;var g=w(A);fe(g,{label:`O${L+1}`,get value(){return e.value.mix[L]},min:0,max:1,step:.01,onchange:z=>s(L,z),get color(){return e.color},hint:"path-osc-mix"});var R=h(g,2);on(R,{label:`OSC-${L+1}`,blockId:"osc",hint:"ref-osc"}),ae(()=>k=_e(A,1,"vert-with-ref svelte-1mlllm3",null,k,{inactive:!t(O)})),S(v,A)}),S(m,_)}});var l=h(c,2);xn(l,{label:"Pre Filter",get color(){return e.color},children:(m,y)=>{hs(m,{label:"pre",get value(){return e.value.pre_filter},onchange:_=>r({pre_filter:_}),get color(){return e.color}})},$$slots:{default:!0}});var f=h(o,2),u=w(f);xn(u,{label:"Path Env",get color(){return e.color},children:(m,y)=>{ps(m,{label:"env",get value(){return e.value.env},onchange:_=>r({env:_}),get color(){return e.color}})},$$slots:{default:!0}});var d=h(u,2);xn(d,{label:"Post Filter",get color(){return e.color},children:(m,y)=>{hs(m,{label:"post",get value(){return e.value.post_filter},onchange:_=>r({post_filter:_}),get color(){return e.color}})},$$slots:{default:!0}}),S(n,i),ye()}var yf=D("<button></button>"),kf=D('<div class="path-tabs svelte-1puvzgq"></div> <div class="path-body svelte-1puvzgq"><!> <div><!></div></div>',1);function wf(n,e){be(e,!0);let a=ge(e,"focusTab",19,()=>-1),r=C(()=>It(Dn.resolved).path),s=_n(Array(3).fill(null)),i=V(0);Ie(()=>{a()>=0&&p(i,a())});let o=C(()=>e.config.paths[t(i)]),c=C(()=>t(o)??ms()),l=C(()=>e.config.oscs.map(T=>T!==null));var f=kf(),u=Te(f);let d;Be(u,20,()=>({length:3}),je,(T,L,O)=>{const A=C(()=>e.config.paths[O]!==null);var k=yf();let g;k.textContent=`PATH-${O+1}`,ae(()=>g=_e(k,1,"tab svelte-1puvzgq",null,g,{selected:O===t(i),"path-active":t(A)})),H("click",k,()=>{p(i,O,!0)}),S(T,k)});var m=h(u,2),y=w(m);{let T=C(()=>t(i)+1),L=C(()=>t(o)!==null);at(y,{get label(){return`PATH-${t(T)??""}`},get active(){return t(L)},onchange:O=>{O?e.setPath(t(i),s[t(i)]??ms()):(s[t(i)]=Ln(e.config.paths[t(i)]),e.setPath(t(i),null))},get color(){return t(r)}})}var _=h(y,2);let x;var v=w(_);bf(v,{get index(){return t(i)},get value(){return t(c)},get oscCount(){return e.oscCount},get oscActive(){return t(l)},onchange:T=>e.setPath(t(i),T),get color(){return t(r)}}),ae(()=>{d=Ue(u,"",d,{"--_block-accent":t(r)}),x=_e(_,1,"path-controls svelte-1puvzgq",null,x,{inactive:t(o)===null})}),J("mouseenter",u,()=>ue.set("path-block")),S(n,f),ye()}Ke(["click"]);var xf=D("<!> <!>",1),Sf=D('<div class="ws-row svelte-gtye39"><!> <!> <!> <!></div>'),Pf=D("<!> <!> <!>",1),Af=D('<div class="block-row svelte-gtye39"><!> <!> <!></div>');function Tf(n,e){be(e,!0);let a=C(()=>It(Dn.resolved).fx);var r=Af(),s=w(r);xn(s,{label:"Shape Filter",get color(){return t(a)},children:(c,l)=>{hs(c,{label:"shape",get value(){return e.config.shape_filter},onchange:f=>e.updateConfig({shape_filter:f}),get color(){return t(a)}})},$$slots:{default:!0}});var i=h(s,2);xn(i,{label:"Waveshaper",get color(){return t(a)},children:(c,l)=>{var f=Sf(),u=w(f);at(u,{label:"half rect",get active(){return e.config.half_rect},onchange:x=>e.updateConfig({half_rect:x}),get color(){return t(a)},hint:"toggle-half-rect"});var d=h(u,2);fn(d,{children:(x,v)=>{{let T=C(()=>e.config.soft_clip??0);fe(x,{label:"clip",get value(){return t(T)},min:0,max:10,step:.01,onchange:L=>e.updateConfig({soft_clip:L>0?L:null}),get color(){return t(a)},hint:"fx-clip"})}}});var m=h(d,2);{let x=C(()=>e.config.hard_clip!==null);at(m,{label:"hard clip",get active(){return t(x)},onchange:v=>e.updateConfig({hard_clip:v?[1,.8]:null}),get color(){return t(a)},hint:"toggle-hard-clip"})}var y=h(m,2);{var _=x=>{fn(x,{children:(v,T)=>{var L=xf(),O=Te(L);fe(O,{label:"drive",get value(){return e.config.hard_clip[0]},min:1,max:10,step:.01,onchange:k=>{const g=Ln(e.config.hard_clip);e.updateConfig({hard_clip:[k,g[1]]})},get color(){return t(a)},hint:"fx-hard-drive"});var A=h(O,2);fe(A,{label:"thresh",get value(){return e.config.hard_clip[1]},min:.1,max:1,step:.01,onchange:k=>{const g=Ln(e.config.hard_clip);e.updateConfig({hard_clip:[g[0],k]})},get color(){return t(a)},hint:"fx-hard-thresh"}),S(v,L)}})};Y(y,x=>{e.config.hard_clip&&x(_)})}S(c,f)},$$slots:{default:!0}});var o=h(i,2);xn(o,{label:"Voice FX",get color(){return t(a)},children:(c,l)=>{fn(c,{children:(f,u)=>{var d=Pf(),m=Te(d);{let x=C(()=>e.config.wavefold??0);fe(m,{label:"fold",get value(){return t(x)},min:0,max:10,step:.01,onchange:v=>e.updateConfig({wavefold:v>0?v:null}),get color(){return t(a)},hint:"fx-fold"})}var y=h(m,2);{let x=C(()=>e.config.bit_crush??0);fe(y,{label:"crush",get value(){return t(x)},min:0,max:16,step:1,onchange:v=>e.updateConfig({bit_crush:v>0?v:null}),get color(){return t(a)},hint:"fx-crush"})}var _=h(y,2);{let x=C(()=>e.config.decimate??0);fe(_,{label:"decim",get value(){return t(x)},min:0,max:32,step:1,onchange:v=>e.updateConfig({decimate:v>0?v:null}),get color(){return t(a)},hint:"fx-decim"})}S(f,d)}})},$$slots:{default:!0}}),J("mouseenter",r,()=>ue.set("fx-block")),S(n,r),ye()}var Df=D('<div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div>',1),Rf=D('<!> <!> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <!> <!> <!>',1),qf=D('<div class="filter-panel svelte-1fddr5a"><!> <div><div class="engine-and-mode svelte-1fddr5a"><!> <!></div> <!></div></div>');function Cf(n,e){be(e,!0);const a={engine:"Moog",mode:"Lowpass",cutoff:80,resonance:0,env_amt:0,lfo_amt:0,lfo2_amt:0,velo_amt:0,key_track:0,morph:0,morph_lfo_amt:0,morph_lfo2_amt:0,morph_env_amt:0};let r=ge(e,"value",3,null);const s=[{value:"Lowpass",glyph:"lowpass",label:"LP"},{value:"Highpass",glyph:"highpass",label:"HP"},{value:"Bandpass",glyph:"bandpass",label:"BP"}];let i=V(null),o=C(()=>r()??a),c=C(()=>(t(o).engine??"Moog")==="Svf");function l(g){g?e.onchange(t(i)??{...a}):(p(i,Ln(r()),!0),e.onchange(null))}function f(g){e.onchange({...t(o),engine:g})}function u(g){e.onchange({...t(o),mode:g})}function d(g){e.onchange({...t(o),...g})}var m=qf(),y=w(m);{let g=C(()=>r()!==null);at(y,{label:"vcf",get active(){return t(g)},onchange:l,get color(){return e.color},hint:"toggle-vcf"})}var _=h(y,2);let x;var v=w(_),T=w(v);{let g=C(()=>t(o).engine??"Moog");La(T,{options:["Moog","Svf"],get value(){return t(g)},onchange:f,hints:{Moog:"vcf-engine-moog",Svf:"vcf-engine-svf"}})}var L=h(T,2);{var O=g=>{{let R=C(()=>t(o).morph??0);fe(g,{label:"morph",get value(){return t(R)},min:0,max:1,step:.01,onchange:z=>d({morph:z}),get color(){return e.color},hint:"vcf-morph"})}},A=g=>{Ca(g,{get options(){return s},get value(){return t(o).mode},onchange:u,get color(){return e.color},hints:{Lowpass:"vcf-mode-lp",Highpass:"vcf-mode-hp",Bandpass:"vcf-mode-bp"}})};Y(L,g=>{t(c)?g(O):g(A,!1)})}var k=h(v,2);fn(k,{children:(g,R)=>{var z=Rf(),B=Te(z);fe(B,{label:"cutoff",get value(){return t(o).cutoff},min:0,max:135,step:.1,onchange:me=>d({cutoff:me}),get color(){return e.color},hint:"vcf-cutoff"});var F=h(B,2);fe(F,{label:"reso",get value(){return t(o).resonance},min:0,max:1,step:.01,onchange:me=>d({resonance:me}),get color(){return e.color},hint:"vcf-reso"});var Q=h(F,2),E=w(Q);fe(E,{label:"env",get value(){return t(o).env_amt},min:-135,max:135,step:.1,onchange:me=>d({env_amt:me}),get color(){return e.color},hint:"vcf-env"});var N=h(E,2);on(N,{label:"ENV-2",blockId:"mod",hint:"ref-env2"});var M=h(Q,2),K=w(M);fe(K,{label:"lfo",get value(){return t(o).lfo_amt},min:-135,max:135,step:.1,onchange:me=>d({lfo_amt:me}),get color(){return e.color},hint:"vcf-lfo"});var Z=h(K,2);on(Z,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var $=h(M,2),W=w($);fe(W,{label:"lfo2",get value(){return t(o).lfo2_amt},min:-135,max:135,step:.1,onchange:me=>d({lfo2_amt:me}),get color(){return e.color},hint:"vcf-lfo2"});var ee=h(W,2);on(ee,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"});var ie=h($,2);fe(ie,{label:"velo",get value(){return t(o).velo_amt},min:-135,max:135,step:.1,onchange:me=>d({velo_amt:me}),get color(){return e.color},hint:"vcf-velo"});var ce=h(ie,2);fe(ce,{label:"key",get value(){return t(o).key_track},min:-2,max:2,step:.01,onchange:me=>d({key_track:me}),get color(){return e.color},hint:"vcf-key"});var qe=h(ce,2);{var re=me=>{var Ce=Df(),we=Te(Ce),Re=w(we);{let gn=C(()=>t(o).morph_env_amt??0);fe(Re,{label:"m.env",get value(){return t(gn)},min:-1,max:1,step:.01,onchange:bn=>d({morph_env_amt:bn}),get color(){return e.color},hint:"vcf-morph-env"})}var Se=h(Re,2);on(Se,{label:"ENV-2",blockId:"mod",hint:"ref-env2"});var Le=h(we,2),We=w(Le);{let gn=C(()=>t(o).morph_lfo_amt??0);fe(We,{label:"m.lfo",get value(){return t(gn)},min:-1,max:1,step:.01,onchange:bn=>d({morph_lfo_amt:bn}),get color(){return e.color},hint:"vcf-morph-lfo"})}var $e=h(We,2);on($e,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var nn=h(Le,2),Sn=w(nn);{let gn=C(()=>t(o).morph_lfo2_amt??0);fe(Sn,{label:"m.lfo2",get value(){return t(gn)},min:-1,max:1,step:.01,onchange:bn=>d({morph_lfo2_amt:bn}),get color(){return e.color},hint:"vcf-morph-lfo2"})}var it=h(Sn,2);on(it,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),S(me,Ce)};Y(qe,me=>{t(c)&&me(re)})}S(g,z)}}),ae(()=>x=_e(_,1,"filter-controls svelte-1fddr5a",null,x,{inactive:r()===null})),S(n,m),ye()}var Lf=D("<div><!></div>");function Mf(n,e){be(e,!0);let a=C(()=>It(Dn.resolved).vcf);var r=Lf(),s=w(r);Cf(s,{get value(){return e.config.main_filter},onchange:i=>e.updateConfig({main_filter:i}),get color(){return t(a)}}),J("mouseenter",r,()=>ue.set("vcf-block")),S(n,r),ye()}var Ef=D('<!> <div class="vert-with-ref svelte-yb3nqx"><!> <!></div> <div class="vert-with-ref svelte-yb3nqx"><!> <!></div> <div class="vert-with-ref svelte-yb3nqx"><!> <!></div>',1),Ff=D('<div class="block-row svelte-yb3nqx"><!> <!></div>');function Of(n,e){be(e,!0);let a=C(()=>It(Dn.resolved).amp);var r=Ff(),s=w(r);xn(s,{label:"Envelope",get color(){return t(a)},children:(o,c)=>{ps(o,{label:"amp",get value(){return e.config.amp_env},onchange:l=>e.updateConfig({amp_env:l}),get color(){return t(a)}})},$$slots:{default:!0}});var i=h(s,2);xn(i,{label:"Level",get color(){return t(a)},children:(o,c)=>{fn(o,{children:(l,f)=>{var u=Ef(),d=Te(u);fe(d,{label:"amp",get value(){return e.config.amp},min:0,max:2,step:.01,onchange:k=>e.updateConfig({amp:k}),get color(){return t(a)},hint:"amp-level"});var m=h(d,2),y=w(m);fe(y,{label:"velo",get value(){return e.config.amp_velo_amt},min:0,max:1,step:.01,onchange:k=>e.updateConfig({amp_velo_amt:k}),get color(){return t(a)},hint:"amp-velo"});var _=h(y,2);on(_,{label:"VELO",blockId:"mod",hint:"ref-velo"});var x=h(m,2),v=w(x);fe(v,{label:"vol lfo",get value(){return e.config.vol_lfo_amt},min:0,max:1,step:.01,onchange:k=>e.updateConfig({vol_lfo_amt:k}),get color(){return t(a)},hint:"amp-vol-lfo"});var T=h(v,2);on(T,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var L=h(x,2),O=w(L);fe(O,{label:"vol lfo2",get value(){return e.config.vol_lfo2_amt},min:0,max:1,step:.01,onchange:k=>e.updateConfig({vol_lfo2_amt:k}),get color(){return t(a)},hint:"amp-vol-lfo2"});var A=h(O,2);on(A,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),S(l,u)}})},$$slots:{default:!0}}),J("mouseenter",r,()=>ue.set("amp-block")),S(n,r),ye()}var zf=D('<!> <div class="vert-with-ref svelte-1n1i7mb"><!> <!></div> <div class="vert-with-ref svelte-1n1i7mb"><!> <!></div>',1),Nf=D("<!> <!> <!>",1),If=D('<div class="block-row svelte-1n1i7mb"><!> <!> <!> <!></div>');function jf(n,e){be(e,!0);let a=C(()=>It(Dn.resolved).post);var r=If(),s=w(r);xn(s,{label:"Post Filter",get color(){return t(a)},children:(l,f)=>{hs(l,{label:"post",get value(){return e.config.post_filter},onchange:u=>e.updateConfig({post_filter:u}),get color(){return t(a)}})},$$slots:{default:!0}});var i=h(s,2);xn(i,{label:"Pan",get color(){return t(a)},children:(l,f)=>{fn(l,{children:(u,d)=>{var m=zf(),y=Te(m);fe(y,{label:"pan",get value(){return e.config.pan},min:-1,max:1,step:.01,onchange:A=>e.updateConfig({pan:A}),get color(){return t(a)},hint:"post-pan"});var _=h(y,2),x=w(_);fe(x,{label:"pan lfo",get value(){return e.config.pan_lfo_amt},min:0,max:1,step:.01,onchange:A=>e.updateConfig({pan_lfo_amt:A}),get color(){return t(a)},hint:"post-pan-lfo"});var v=h(x,2);on(v,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var T=h(_,2),L=w(T);fe(L,{label:"pan lfo2",get value(){return e.config.pan_lfo2_amt},min:0,max:1,step:.01,onchange:A=>e.updateConfig({pan_lfo2_amt:A}),get color(){return t(a)},hint:"post-pan-lfo2"});var O=h(L,2);on(O,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),S(u,m)}})},$$slots:{default:!0}});var o=h(i,2);xn(o,{label:"Porta",get color(){return t(a)},children:(l,f)=>{fn(l,{children:(u,d)=>{fe(u,{label:"time",get value(){return e.config.portamento},min:0,max:500,step:1,onchange:m=>e.updateConfig({portamento:m}),get color(){return t(a)},hint:"post-porta-time"})}})},$$slots:{default:!0}});var c=h(o,2);xn(c,{label:"Unison",get color(){return t(a)},children:(l,f)=>{fn(l,{children:(u,d)=>{var m=Nf(),y=Te(m);fe(y,{label:"voices",get value(){return e.config.unison},min:1,max:8,step:1,onchange:v=>e.updateConfig({unison:v}),get color(){return t(a)},hint:"post-unison-voices"});var _=h(y,2);fe(_,{label:"detune",get value(){return e.config.unison_detune},min:0,max:1,step:.001,onchange:v=>e.updateConfig({unison_detune:v}),get color(){return t(a)},hint:"post-unison-detune"});var x=h(_,2);fe(x,{label:"spread",get value(){return e.config.unison_spread},min:0,max:1,step:.01,onchange:v=>e.updateConfig({unison_spread:v}),get color(){return t(a)},hint:"post-unison-spread"}),S(u,m)}})},$$slots:{default:!0}}),J("mouseenter",r,()=>ue.set("post-block")),S(n,r),ye()}var Bf=D('<button aria-label="Piano key"></button>'),Hf=D('<button aria-label="Piano key"></button>'),Vf=D('<div class="keyboard svelte-1hwart2" role="group" aria-label="Piano keyboard"><!> <!></div>');function Gf(n,e){be(e,!0);let a=ge(e,"octave",3,4),r=ge(e,"activeKeys",19,()=>new Set);const s=[0,2,4,5,7,9,11],i=[1,3,-1,6,8,10,-1],o=[0,1,-1,3,4,5,-1];function c(L,O){return(a()+1+O)*12+L}function l(L){e.onkeydown(L)}function f(L){e.onkeyup(L)}function u(){const L=[],O=7.142857142857143;for(let A=0;A<2;A++){const k=A*7*O;for(let g=0;g<7;g++)L.push({semi:c(s[g],A),black:!1,left:k+g*O,width:O});for(let g=0;g<7;g++){if(i[g]===-1)continue;const R=o[g];L.push({semi:c(i[g],A),black:!0,left:k+(R+.65)*O,width:O*.7})}}return L}let d=C(u),m=C(()=>t(d).filter(L=>!L.black)),y=C(()=>t(d).filter(L=>L.black)),_=V(!1);var x=Vf(),v=w(x);Be(v,17,()=>t(m),je,(L,O)=>{var A=Bf();let k,g;ae(R=>{k=_e(A,1,"key white svelte-1hwart2",null,k,R),g=Ue(A,"",g,{left:`${t(O).left??""}%`,width:`${t(O).width??""}%`})},[()=>({active:r().has(t(O).semi)})]),H("pointerdown",A,R=>{R.preventDefault(),l(t(O).semi)}),H("pointerup",A,()=>f(t(O).semi)),J("pointerleave",A,()=>{t(_)&&f(t(O).semi)}),J("pointerenter",A,()=>{t(_)&&l(t(O).semi)}),S(L,A)});var T=h(v,2);Be(T,17,()=>t(y),je,(L,O)=>{var A=Hf();let k,g;ae(R=>{k=_e(A,1,"key black svelte-1hwart2",null,k,R),g=Ue(A,"",g,{left:`${t(O).left??""}%`,width:`${t(O).width??""}%`})},[()=>({active:r().has(t(O).semi)})]),H("pointerdown",A,R=>{R.preventDefault(),l(t(O).semi)}),H("pointerup",A,()=>f(t(O).semi)),J("pointerleave",A,()=>{t(_)&&f(t(O).semi)}),J("pointerenter",A,()=>{t(_)&&l(t(O).semi)}),S(L,A)}),J("mouseenter",x,()=>ue.set("piano-keyboard")),H("pointerdown",x,()=>{p(_,!0)}),H("pointerup",x,()=>{p(_,!1)}),J("pointerleave",x,()=>{p(_,!1)}),S(n,x),ye()}Ke(["pointerdown","pointerup"]);var Kf=D('<button class="hit-btn svelte-1bvy689">Hit</button>');function Wf(n,e){be(e,!0);var a=Kf();J("mouseenter",a,()=>ue.set("hit-button")),H("pointerdown",a,r=>{r.preventDefault(),e.onhit()}),S(n,a),ye()}Ke(["pointerdown"]);var Uf=D('<!> <div class="measure-view svelte-i7auzo"><!></div>',1),Qf=D('<div class="demo-editor svelte-i7auzo"><div class="controls-stack svelte-i7auzo"><span class="label svelte-i7auzo">demo</span> <!> <!> <div class="switch-row svelte-i7auzo"><span class="switch-label svelte-i7auzo">scale</span> <!></div> <div class="switch-row svelte-i7auzo"><span class="switch-label svelte-i7auzo">note</span> <!></div></div> <!></div>');function Zf(n,e){be(e,!0);let a=C(()=>Dn.resolved==="light"?"#b07820":"#cc9944"),r=ge(e,"octave",3,4),s=V(_n([])),i=V(120),o=V(""),c=V(""),l=V(0),f=C(()=>Cn.playing&&Ae.playing),u=C(()=>Ae.position?.tracks[0]??null),d=C(()=>t(f)&&t(u)?t(u).measure_idx:-1),m=C(()=>t(f)&&t(u)?t(u).beat_time:0);function y(re){return re.filter(me=>"Beat"in me).length}Ie(()=>{p(i,e.demo?.bpm??120,!0),p(o,e.demo?.scale??"",!0),p(c,e.demo?.root??"",!0);const re=e.demo?.pattern??"";re?T0(re).then(me=>{p(s,me,!0)}):p(s,[],!0)}),Ie(()=>{t(s).length===0?p(l,0):t(l)>=t(s).length&&p(l,t(s).length-1)});function _(){const re=D0(t(s));e.onchange({pattern:re,bpm:t(i)||null,scale:t(o)||null,root:t(c)||null})}function x(re,me,Ce){_o(t(s)[t(l)],re,me,Ce),_()}async function v(re,me,Ce){try{await go(t(s)[t(l)],re,me,Ce)&&_()}catch{}}function T(){q0(t(s)[t(l)]),_()}function L(re){bo(t(s)[t(l)],re),_()}function O(re,me){yo(t(s)[t(l)],re,me),_()}async function A(re,me){try{await Ys(t(s)[t(l)],re,me)&&_()}catch{}}function k(re,me){ko(t(s)[t(l)],re,me),_()}function g(re){p(l,re,!0)}function R(){t(s).push([{Beat:["Rest","Rest","Rest","Rest"]}]),p(l,t(s).length-1),_()}function z(re){t(s).splice(re,1),t(l)>=t(s).length&&t(s).length>0&&p(l,t(s).length-1),_()}function B(re,me){const[Ce]=t(s).splice(re,1);t(s).splice(me,0,Ce),t(l)===re?p(l,me,!0):re<t(l)&&me>=t(l)?ga(l,-1):re>t(l)&&me<=t(l)&&ga(l),_()}const F=["","maj","min","penta","blues","chrom"],Q=["","c","c#","d","d#","e","f","f#","g","g#","a","a#","b"];var E=Qf(),N=w(E),M=h(w(N),2);Zs(M,{label:"Bpm",get value(){return t(i)},min:40,max:240,step:1,onchange:re=>{p(i,re,!0),_()},get color(){return t(a)},hint:"demo-bpm"});var K=h(M,2);Zs(K,{label:"Oct",get value(){return r()},min:0,max:8,step:1,onchange:re=>e.onoctavechange?.(re),get color(){return t(a)},hint:"demo-oct"});var Z=h(K,2),$=h(w(Z),2);La($,{get options(){return F},get value(){return t(o)},onchange:re=>{p(o,re,!0),_()},hint:"demo-scale"});var W=h(Z,2),ee=h(w(W),2);La(ee,{get options(){return Q},get value(){return t(c)},onchange:re=>{p(c,re,!0),_()},hint:"demo-root"});var ie=h(N,2);{var ce=re=>{var me=Uf(),Ce=Te(me);{let Se=C(()=>t(s).map((We,$e)=>({label:String($e+1)}))),Le=C(()=>t(d)>=0&&t(s)[t(d)]?t(m)/(y(t(s)[t(d)])||1):0);Wa(Ce,{get items(){return t(Se)},get selectedIndex(){return t(l)},get activeIndex(){return t(d)},get activeProgress(){return t(Le)},onselect:g,onadd:R,ondelete:z,onmove:B})}var we=h(Ce,2),Re=w(we);{let Se=C(()=>t(d)===t(l)),Le=C(()=>t(d)===t(l)?t(m):0);wo(Re,{get items(){return t(s)[t(l)]},get playing(){return t(Se)},get beatPosition(){return t(Le)},onchange:(We,$e,nn)=>x(We,$e,nn),onaddbeat:T,ondeletemeasure:()=>z(t(l)),ondeleteitem:L,ondeletedivision:(We,$e)=>O(We,$e),oninsertcommand:(We,$e)=>A(We,$e),onreorderitem:(We,$e)=>k(We,$e),onedit:(We,$e,nn)=>v(We,$e,nn)})}S(re,me)},qe=re=>{Wa(re,{items:[],selectedIndex:-1,onselect:()=>{},onadd:R,onmove:()=>{}})};Y(ie,re=>{t(s).length>0?re(ce):re(qe,!1)})}J("mouseenter",E,()=>ue.set("demo-editor")),S(n,E),ye()}class Jf{#e=V(_n([]));get inputs(){return t(this.#e)}set inputs(e){p(this.#e,e,!0)}access=null;callbacks=null;async init(e){if(this.callbacks=e,!!navigator.requestMIDIAccess)try{this.access=await navigator.requestMIDIAccess(),this.bindInputs(),this.access.onstatechange=()=>this.bindInputs()}catch{}}destroy(){if(this.access){for(const e of this.access.inputs.values())e.onmidimessage=null;this.access.onstatechange=null}this.access=null,this.callbacks=null,this.inputs=[]}bindInputs(){if(!this.access)return;const e=[];for(const a of this.access.inputs.values())a.onmidimessage=r=>this.handleMessage(r),a.name&&e.push(a.name);this.inputs=e}handleMessage(e){const a=e.data;if(!a||a.length<3)return;const r=a[0]&240,s=(a[0]&15)+1,i=a[1],o=a[2];r===144&&o>0?this.callbacks?.onNoteDown(i,o,s):r===128||r===144&&o===0?this.callbacks?.onNoteUp(i,s):r===176&&this.callbacks?.onCC?.(s,i,o)}}const Es=new Jf,_r="gb-daw-midi-cc-map";function Xf(){try{const n=localStorage.getItem(_r);if(!n)return null;const e=JSON.parse(n);if(e&&typeof e.encoder=="number"&&Array.isArray(e.knobs))return e}catch{}return null}function Yf(n){localStorage.setItem(_r,JSON.stringify(n))}class $f{#e=V(0);get regionIndex(){return t(this.#e)}set regionIndex(e){p(this.#e,e,!0)}#t=V(_n([]));get regions(){return t(this.#t)}set regions(e){p(this.#t,e,!0)}#n=V(_n(Xf()));get ccMap(){return t(this.#n)}set ccMap(e){p(this.#n,e,!0)}#a=V(null);get learnStep(){return t(this.#a)}set learnStep(e){p(this.#a,e,!0)}prevCC=new Map;learnSeen=new Set;learnKnobs=[];learnFaders=[];learnPads=[];learnEncoder=-1;get currentRegion(){return this.regions[this.regionIndex]??null}get hasCcMap(){return this.ccMap!==null}get learnPrompt(){const e=this.learnStep;if(!e)return"";switch(e.phase){case"encoder":return"Turn the encoder...";case"knobs":return`Turn knob ${e.index+1} of 8...`;case"faders":return`Move fader ${e.index+1} of 4...`;case"pads":return`Press pad ${e.index+1} of 8 (or press Done to skip)...`}}setRegions(e){this.regions=e,this.regionIndex>=e.length&&(this.regionIndex=Math.max(0,e.length-1))}navigateRegion(e){if(this.regions.length===0)return;let a=this.regionIndex+e;a<0&&(a=this.regions.length-1),a>=this.regions.length&&(a=0),this.regionIndex=a,this.prevCC.clear()}jumpToBlock(e){const a=this.regions.findIndex(r=>r.block===e);a>=0&&(this.regionIndex=a,this.prevCC.clear())}handleCC(e,a,r){if(this.learnStep){this.learnCC(a);return}if(!this.ccMap)return;if(a===this.ccMap.encoder){r>=1&&r<=63?this.navigateRegion(-1):r>=65&&r<=127&&this.navigateRegion(1);return}const s=this.ccMap.knobs.indexOf(a);if(s>=0){this.applyCC(`K${s+1}`,r);return}const i=this.ccMap.faders.indexOf(a);if(i>=0){this.applyCC(`F${i+1}`,r);return}}handlePad(e){if(this.learnStep&&this.learnStep.phase==="pads"){this.learnPadNote(e);return}if(!this.ccMap||this.ccMap.pads.length===0)return;const a=this.ccMap.pads.indexOf(e);a>=0&&a<$s.length&&this.jumpToBlock($s[a])}applyCC(e,a){const r=this.currentRegion;if(!r)return;const s=r.bindings.find(_=>_.slot===e);if(!s)return;if(s.type==="discrete"){const _=s.options??[];if(_.length===0)return;const x=Math.round(a/127*(_.length-1));s.set(_[x]),this.prevCC.set(e,a);return}if(s.type==="toggle"){s.set(a>=64),this.prevCC.set(e,a);return}const i=this.prevCC.get(e);if(this.prevCC.set(e,a),i===void 0)return;const o=a-i;if(o===0)return;const c=s.min??0,l=s.max??1,f=s.step??.01,u=s.get();let d;if(o>0){const _=127-i,x=l-u;d=_>0?u+o*(x/_):u}else{const _=i,x=u-c;d=_>0?u+o*(x/_):u}const m=Math.round(d/f)*f,y=Math.min(l,Math.max(c,m));s.set(y)}startLearn(){this.learnSeen.clear(),this.learnKnobs=[],this.learnFaders=[],this.learnPads=[],this.learnEncoder=-1,this.learnStep={phase:"encoder"}}cancelLearn(){this.learnStep=null}skipPads(){this.finishLearn()}learnCC(e){const a=this.learnStep;if(a)switch(a.phase){case"encoder":this.learnEncoder=e,this.learnSeen.add(e),this.learnStep={phase:"knobs",index:0};break;case"knobs":if(this.learnSeen.has(e))return;this.learnSeen.add(e),this.learnKnobs.push(e),this.learnKnobs.length>=8?this.learnStep={phase:"faders",index:0}:this.learnStep={phase:"knobs",index:this.learnKnobs.length};break;case"faders":if(this.learnSeen.has(e))return;this.learnSeen.add(e),this.learnFaders.push(e),this.learnFaders.length>=4?this.learnStep={phase:"pads",index:0}:this.learnStep={phase:"faders",index:this.learnFaders.length};break}}learnPadNote(e){!this.learnStep||this.learnStep.phase!=="pads"||(this.learnPads.push(e),this.learnPads.length>=8?this.finishLearn():this.learnStep={phase:"pads",index:this.learnPads.length})}finishLearn(){const e={encoder:this.learnEncoder,knobs:this.learnKnobs,faders:this.learnFaders,pads:this.learnPads};this.ccMap=e,Yf(e),this.learnStep=null}clearMap(){this.ccMap=null,localStorage.removeItem(_r)}}const dn=new $f;function de(n,e,a,r,s,i,o){return{slot:n,label:e,type:"vert",min:a,max:r,step:s,get:i,set:o}}function bt(n,e,a,r,s){return{slot:n,label:e,type:"discrete",options:a,get:r,set:s}}function ns(n,e,a,r){return{slot:n,label:e,type:"toggle",get:a,set:r}}function ts(n,e){const a=Ht(n),r=bt("K1","type",["AD","ADSR","MultiTap"],()=>a,s=>e({__type__:s}));return"AD"in n?{type:r,faders:[de("F1","atk",0,500,.1,()=>n.AD.attack_ms,s=>e({attack_ms:s})),de("F2","dec",0,5e3,1,()=>n.AD.decay_ms,s=>e({decay_ms:s})),de("F3","start",-1,1,.01,()=>n.AD.start,s=>e({start:s})),de("F4","amt",-1,1,.01,()=>n.AD.amt,s=>e({amt:s}))]}:"ADSR"in n?{type:r,faders:[de("F1","atk",0,2e3,.1,()=>n.ADSR.attack_ms,s=>e({attack_ms:s})),de("F2","dec",0,5e3,1,()=>n.ADSR.decay_ms,s=>e({decay_ms:s})),de("F3","sus",0,1,.01,()=>n.ADSR.sustain,s=>e({sustain:s})),de("F4","rel",0,5e3,1,()=>n.ADSR.release_ms,s=>e({release_ms:s}))]}:{type:r,faders:[de("F1","taps",1,16,1,()=>n.MultiTap.num_taps,s=>e({num_taps:s})),de("F2","intvl",1,500,1,()=>n.MultiTap.tap_interval,s=>e({tap_interval:s})),de("F3","amp",0,1,.01,()=>n.MultiTap.tap_amp,s=>e({tap_amp:s})),de("F4","tail",0,5e3,1,()=>n.MultiTap.tail_decay,s=>e({tail_decay:s}))]}}const em=["Lowpass","Highpass","Bandpass"];function as(n,e){return{type:bt("K1","type",em,()=>ka(n),a=>{e(et(a,wa(n),xa(n)))}),freq:de("F1","freq",20,2e4,1,()=>wa(n),a=>{e(et(ka(n),a,xa(n)))}),q:de("F2","Q",.1,20,.01,()=>xa(n),a=>{e(et(ka(n),wa(n),a))})}}function nm(n,e,a,r){const s=[],i=["Ramp","Pulse","Sine","Triangle","S&H"],o=["Free","Trig","Rand"];s.push({id:"lfo",label:"LFO-1",block:"mod",bindings:[bt("K1","wave",i,()=>n.lfo.wave??"S&H",u=>{const d=u==="S&H"?null:u;e({lfo:{...n.lfo,wave:d}})}),bt("K2","mode",o,()=>n.lfo.mode,u=>{e({lfo:{...n.lfo,mode:u}})}),de("F1","rate",0,15,1,()=>n.lfo.rate,u=>{e({lfo:{...n.lfo,rate:u}})})]}),s.push({id:"lfo2",label:"LFO-2",block:"mod",bindings:[bt("K1","wave",i,()=>n.lfo2.wave??"S&H",u=>{const d=u==="S&H"?null:u;e({lfo2:{...n.lfo2,wave:d}})}),bt("K2","mode",o,()=>n.lfo2.mode,u=>{e({lfo2:{...n.lfo2,mode:u}})}),de("F1","rate",0,15,1,()=>n.lfo2.rate,u=>{e({lfo2:{...n.lfo2,rate:u}})}),de("F2","L1→rate",0,1,.01,()=>n.lfo1_to_lfo2_rate,u=>{e({lfo1_to_lfo2_rate:u})}),de("F3","L1→dep",0,1,.01,()=>n.lfo1_to_lfo2_depth,u=>{e({lfo1_to_lfo2_depth:u})})]});{const u=n.pitch_env??Yn("AD"),d=ts(u,m=>{if("__type__"in m){e({pitch_env:Yn(m.__type__)});return}const y=Ht(u),_=u[y];e({pitch_env:{[y]:{..._,...m}}})});s.push({id:"pitch-env",label:"ENV-1 Pitch",block:"mod",bindings:[d.type,...d.faders]})}{const u=n.filter_env??Yn("AD"),d=ts(u,m=>{if("__type__"in m){e({filter_env:Yn(m.__type__)});return}const y=Ht(u),_=u[y];e({filter_env:{[y]:{..._,...m}}})});s.push({id:"filter-env",label:"ENV-2 Filter",block:"mod",bindings:[d.type,...d.faders]})}const c=["Sine","Triangle","Saw","Pulse","WhiteNoise","PinkNoise"],l=["Pitched","Fixed","Swept"],f=n.oscs.filter(u=>u!==null).length;for(let u=0;u<n.oscs.length;u++){let d=function(v){const T=n.oscs[y]??fs();a(y,{...T,...v})};const m=n.oscs[u]??fs(),y=u,_=xo(m.freq),x=[];if(_==="Pitched"&&typeof m.freq=="object"&&"Pitched"in m.freq){const v=m.freq.Pitched;x.push(de("F1","semi",-48,48,1,()=>v.semi,T=>{d({freq:{Pitched:{semi:T,fine:v.fine}}})}),de("F2","fine",-100,100,1,()=>v.fine,T=>{d({freq:{Pitched:{semi:v.semi,fine:T}}})}))}else if(_==="Fixed")x.push(de("F1","hz",20,2e4,1,()=>m.fixed_hz,v=>{d({fixed_hz:v})}));else if(_==="Swept"&&typeof m.freq=="object"&&"Swept"in m.freq){const v=m.freq.Swept;x.push(de("F1","atk",0,100,.01,()=>v.atk,T=>{d({freq:{Swept:{...v,atk:T}}})}),de("F2","dec",0,5e3,1,()=>v.dec,T=>{d({freq:{Swept:{...v,dec:T}}})}),de("F3","base",0,135,.1,()=>v.base,T=>{d({freq:{Swept:{...v,base:T}}})}),de("F4","amt",-135,135,.1,()=>v.amt,T=>{d({freq:{Swept:{...v,amt:T}}})}))}s.push({id:`osc-${u}`,label:`OSC-${u+1}`,block:"osc",bindings:[bt("K1","shape",c,()=>m.shape,v=>d({shape:v})),bt("K2","freq",l,()=>_,v=>{let T;switch(v){case"Pitched":T={Pitched:{semi:0,fine:0}};break;case"Fixed":T="Fixed";break;case"Swept":T={Swept:{atk:.1,dec:200,base:48,amt:50}};break;default:return}d({freq:T})}),de("K3","pw",0,1,.01,()=>m.pw,v=>d({pw:v})),de("K4","pw lfo",0,1,.01,()=>m.pw_lfo_amt,v=>d({pw_lfo_amt:v})),de("K5","p.lfo",0,48,.1,()=>m.pitch_lfo_amt,v=>d({pitch_lfo_amt:v})),de("K6","p.env",-135,135,.1,()=>m.pitch_env_amt,v=>d({pitch_env_amt:v})),de("K7","p.lfo2",0,48,.1,()=>m.pitch_lfo2_amt,v=>d({pitch_lfo2_amt:v})),de("K8","pw lfo2",0,1,.01,()=>m.pw_lfo2_amt,v=>d({pw_lfo2_amt:v})),...x]}),s.push({id:`osc-${u}-pdif`,label:`OSC-${u+1} PDif`,block:"osc",bindings:[de("K1","pdif",0,1,.01,()=>m.phaz_diff,v=>d({phaz_diff:v})),de("K2","pd lfo",0,1,.01,()=>m.phaz_diff_lfo_amt,v=>d({phaz_diff_lfo_amt:v})),de("K3","pd lf2",0,1,.01,()=>m.phaz_diff_lfo2_amt,v=>d({phaz_diff_lfo2_amt:v}))]}),u===0&&n.oscs[0]!==null&&s.push({id:"osc-feedback",label:"OSC-1 Feedback",block:"osc",bindings:[de("F1","fb fm",0,3,.01,()=>n.osc_interaction.feedback_fm,v=>{e({osc_interaction:{...n.osc_interaction,feedback_fm:v}})})]}),u===1&&s.push({id:"osc-interact",label:"OSC Interact",block:"osc",bindings:f>=2?[ns("K1","sync",()=>n.osc_interaction.sync,v=>{e({osc_interaction:{...n.osc_interaction,sync:v}})}),de("K2","window",0,1,.01,()=>n.osc_interaction.sync_window,v=>{e({osc_interaction:{...n.osc_interaction,sync_window:v}})}),ns("K3","ring",()=>n.osc_interaction.ring_mod,v=>{e({osc_interaction:{...n.osc_interaction,ring_mod:v}})}),de("F1","fm",0,10,.01,()=>n.osc_interaction.fm_amt,v=>{e({osc_interaction:{...n.osc_interaction,fm_amt:v}})}),de("F2","fm env",-10,10,.01,()=>n.osc_interaction.fm_env_amt,v=>{e({osc_interaction:{...n.osc_interaction,fm_env_amt:v}})})]:[]})}for(let u=0;u<n.paths.length;u++){let d=function(_){const x=n.paths[y]??ms();r(y,{...x,..._})};const m=n.paths[u]??ms(),y=u;s.push({id:`path-${u}-mix`,label:`PATH-${u+1} Mix`,block:"path",bindings:[de("F1","O1",0,1,.01,()=>m.mix[0],_=>{const x=[...m.mix];x[0]=_,d({mix:x})}),de("F2","O2",0,1,.01,()=>m.mix[1],_=>{const x=[...m.mix];x[1]=_,d({mix:x})}),de("F3","O3",0,1,.01,()=>m.mix[2],_=>{const x=[...m.mix];x[2]=_,d({mix:x})}),de("F4","O4",0,1,.01,()=>m.mix[3],_=>{const x=[...m.mix];x[3]=_,d({mix:x})}),de("K1","O5",0,1,.01,()=>m.mix[4],_=>{const x=[...m.mix];x[4]=_,d({mix:x})}),de("K2","O6",0,1,.01,()=>m.mix[5],_=>{const x=[...m.mix];x[5]=_,d({mix:x})})]});{const _=m.pre_filter??et("Lowpass",1e3,.7),x=as(_,v=>d({pre_filter:v}));s.push({id:`path-${u}-pre`,label:`PATH-${u+1} Pre`,block:"path",bindings:[x.type,x.freq,x.q]})}{const _=m.env??Yn("AD"),x=ts(_,v=>{if("__type__"in v){d({env:Yn(v.__type__)});return}const T=Ht(_),L=_[T];d({env:{[T]:{...L,...v}}})});s.push({id:`path-${u}-env`,label:`PATH-${u+1} Env`,block:"path",bindings:[x.type,...x.faders]})}{const _=m.post_filter??et("Lowpass",1e3,.7),x=as(_,v=>d({post_filter:v}));s.push({id:`path-${u}-post`,label:`PATH-${u+1} Post`,block:"path",bindings:[x.type,x.freq,x.q]})}}{const u=n.shape_filter??et("Lowpass",1e3,.7),d=as(u,m=>e({shape_filter:m}));s.push({id:"fx-shape",label:"FX Shape",block:"fx",bindings:[d.type,d.freq,d.q]})}s.push({id:"fx-drive",label:"FX Drive",block:"fx",bindings:[ns("K1","half rect",()=>n.half_rect,u=>e({half_rect:u})),ns("K2","hard clip",()=>n.hard_clip!==null,u=>e({hard_clip:u?[1,.8]:null})),de("K3","hc drv",1,10,.01,()=>n.hard_clip?.[0]??1,u=>{const d=n.hard_clip??[1,.8];e({hard_clip:[u,d[1]]})}),de("K4","hc thr",.1,1,.01,()=>n.hard_clip?.[1]??.8,u=>{const d=n.hard_clip??[1,.8];e({hard_clip:[d[0],u]})}),de("F1","clip",0,10,.01,()=>n.soft_clip??0,u=>e({soft_clip:u>0?u:null})),de("F2","fold",0,10,.01,()=>n.wavefold??0,u=>e({wavefold:u>0?u:null})),de("F3","crush",0,16,1,()=>n.bit_crush??0,u=>e({bit_crush:u>0?u:null})),de("F4","decim",0,32,1,()=>n.decimate??0,u=>e({decimate:u>0?u:null}))]});{const u={engine:"Moog",mode:"Lowpass",cutoff:80,resonance:0,env_amt:0,lfo_amt:0,lfo2_amt:0,velo_amt:0,key_track:0,morph:0,morph_lfo_amt:0,morph_lfo2_amt:0,morph_env_amt:0},d=n.main_filter??u,m=["Moog","Svf"],y=["Lowpass","Highpass","Bandpass"];s.push({id:"vcf",label:"VCF Filter",block:"vcf",bindings:[bt("K1","mode",y,()=>d.mode,_=>{e({main_filter:{...d,mode:_}})}),bt("K2","engine",m,()=>d.engine??"Moog",_=>{e({main_filter:{...d,engine:_}})}),de("K3","env",-135,135,.1,()=>d.env_amt,_=>e({main_filter:{...d,env_amt:_}})),de("K4","lfo",-135,135,.1,()=>d.lfo_amt,_=>e({main_filter:{...d,lfo_amt:_}})),de("K5","morph",0,1,.01,()=>d.morph??0,_=>e({main_filter:{...d,morph:_}})),de("K6","velo",-135,135,.1,()=>d.velo_amt,_=>e({main_filter:{...d,velo_amt:_}})),de("K7","key",-2,2,.01,()=>d.key_track,_=>e({main_filter:{...d,key_track:_}})),de("F1","cutoff",0,135,.1,()=>d.cutoff,_=>e({main_filter:{...d,cutoff:_}})),de("F2","reso",0,1,.01,()=>d.resonance,_=>e({main_filter:{...d,resonance:_}}))]})}{const u=n.amp_env??Yn("ADSR"),d=ts(u,m=>{if("__type__"in m){e({amp_env:Yn(m.__type__)});return}const y=Ht(u),_=u[y];e({amp_env:{[y]:{..._,...m}}})});s.push({id:"amp-env",label:"AMP Env",block:"amp",bindings:[d.type,...d.faders]})}s.push({id:"amp-level",label:"AMP Level",block:"amp",bindings:[de("F1","amp",0,2,.01,()=>n.amp,u=>e({amp:u})),de("F2","velo",0,1,.01,()=>n.amp_velo_amt,u=>e({amp_velo_amt:u})),de("F3","vol lfo",0,1,.01,()=>n.vol_lfo_amt,u=>e({vol_lfo_amt:u})),de("F4","vol lfo2",0,1,.01,()=>n.vol_lfo2_amt,u=>e({vol_lfo2_amt:u}))]});{const u=n.post_filter??et("Lowpass",1e3,.7),d=as(u,m=>e({post_filter:m}));s.push({id:"post-filter",label:"POST Filter",block:"post",bindings:[d.type,d.freq,d.q]})}return s.push({id:"post-pan",label:"POST Pan+Uni",block:"post",bindings:[de("K1","voices",1,8,1,()=>n.unison,u=>e({unison:u})),de("K2","detune",0,1,.001,()=>n.unison_detune,u=>e({unison_detune:u})),de("K3","spread",0,1,.01,()=>n.unison_spread,u=>e({unison_spread:u})),de("K4","porta",0,500,1,()=>n.portamento,u=>e({portamento:u})),de("F1","pan",-1,1,.01,()=>n.pan,u=>e({pan:u})),de("F2","pan lfo",0,1,.01,()=>n.pan_lfo_amt,u=>e({pan_lfo_amt:u})),de("F3","pan lfo2",0,1,.01,()=>n.pan_lfo2_amt,u=>e({pan_lfo2_amt:u}))]}),s}var tm=D('<input class="rename-input svelte-1yx9lnw"/> <button class="header-btn ok svelte-1yx9lnw">ok</button> <button class="header-btn cancel svelte-1yx9lnw">esc</button>',1),am=D('<span class="selected-label svelte-1yx9lnw"> </span> <button class="header-btn svelte-1yx9lnw" title="Rename instrument">&#9998;</button> <button class="header-btn svelte-1yx9lnw" title="Duplicate instrument">&#10697;</button>',1),sm=D('<!> <button class="header-btn new svelte-1yx9lnw" title="New instrument">+ New</button>',1),rm=D('<button class="header-btn midi svelte-1yx9lnw"> </button>'),im=D('<span class="region-slot svelte-1yx9lnw"> </span>'),om=D('<span class="region-slot svelte-1yx9lnw"> </span>'),lm=D('<div class="region-bar svelte-1yx9lnw"><button class="region-nav svelte-1yx9lnw">&#9664;</button> <span class="region-label svelte-1yx9lnw"> </span> <button class="region-nav svelte-1yx9lnw">&#9654;</button> <span class="region-slots svelte-1yx9lnw"><!> <!></span></div>'),cm=D('<!> <div class="header-right svelte-1yx9lnw"><!> <!></div>',1),um=D('<pre class="error svelte-1yx9lnw"> </pre>'),dm=D('<p class="placeholder svelte-1yx9lnw">Loading...</p>'),fm=D('<p class="placeholder svelte-1yx9lnw">Select an instrument to edit.</p>'),mm=D('<button class="learn-btn svelte-1yx9lnw">Skip Pads</button>'),pm=D('<div class="learn-overlay svelte-1yx9lnw"><div class="learn-dialog svelte-1yx9lnw"><h3 class="svelte-1yx9lnw">MIDI Learn</h3> <p class="learn-prompt svelte-1yx9lnw"> </p> <div class="learn-progress svelte-1yx9lnw"><span>Encoder</span> <span>Knobs</span> <span>Faders</span> <span>Pads</span></div> <div class="learn-actions svelte-1yx9lnw"><!> <button class="learn-btn cancel svelte-1yx9lnw">Cancel</button></div></div></div>'),hm=D('<div class="detail-panel svelte-1yx9lnw"><div class="detail-scaler svelte-1yx9lnw"><!></div></div> <div class="bottom-section svelte-1yx9lnw"><!> <div class="live-controls svelte-1yx9lnw"><!> <!></div></div> <!>',1),vm=D('<div class="panel svelte-1yx9lnw"><div class="top-section svelte-1yx9lnw"><div class="header svelte-1yx9lnw"><div class="header-left svelte-1yx9lnw"><span class="title svelte-1yx9lnw">Instrument</span> <!></div> <!></div> <!> <!></div> <!></div>');function _m(n,e){be(e,!0);let a=V(_n([])),r=C(()=>te.selectedInstrument),s=V(null),i=V(4),o=V(null),c=V(null),l=V(!1),f=!1,u=V(!1),d=V(""),m=V("osc"),y=V(null),_=V(_n(new Set)),x=V(!1),v=!1,T=V(void 0),L=V(void 0),O=V(1);Ie(()=>{if(!t(T)||!t(L))return;const U=new ResizeObserver(()=>{if(!t(T)||!t(L))return;const oe=t(T).clientWidth,G=t(T).clientHeight,se=t(L).scrollWidth,ve=t(L).scrollHeight;se>0&&ve>0&&p(O,Math.min(oe/se,G/ve,2)*.92)});return U.observe(t(T)),U.observe(t(L)),()=>U.disconnect()});const A={KeyZ:0,KeyS:1,KeyX:2,KeyD:3,KeyC:4,KeyV:5,KeyG:6,KeyB:7,KeyH:8,KeyN:9,KeyJ:10,KeyM:11},k={KeyQ:0,Digit2:1,KeyW:2,Digit3:3,KeyE:4,KeyR:5,Digit5:6,KeyT:7,Digit6:8,KeyY:9,Digit7:10,KeyU:11};Ie(()=>{te.revision,Ct(()=>W())}),Ie(()=>{const U=t(r);te.revision,U?Ct(()=>ee(U)):(p(s,null),p(y,null),p(o,null))}),Ie(()=>(window.addEventListener("keydown",z),window.addEventListener("keyup",B),()=>{window.removeEventListener("keydown",z),window.removeEventListener("keyup",B)})),Ie(()=>{if(t(s))return Es.init({onNoteDown(U,oe,G){G===10?dn.handlePad(U):Q(U,oe)},onNoteUp(U,oe){E(U)},onCC(U,oe,G){dn.handleCC(U,oe,G)}}),()=>Es.destroy()}),Ie(()=>{if(!t(s))return;const U=nm(t(s),ce,qe,re);Ct(()=>dn.setRegions(U))});let g=V(-1),R=V(-1);Ie(()=>{const U=dn.currentRegion;if(U){if(Ct(()=>{p(m,U.block,!0)}),U.block==="osc"){const oe=U.id.match(/^osc-(\d+)$/);p(g,oe?parseInt(oe[1]):U.id==="osc-feedback"?0:U.id==="osc-interact"?1:-1,!0)}if(U.block==="path"){const oe=U.id.match(/^path-(\d+)-/);p(R,oe?parseInt(oe[1]):-1,!0)}}});function z(U){if(U.repeat||U.target instanceof HTMLInputElement||U.target instanceof HTMLTextAreaElement||U.target instanceof HTMLSelectElement||!t(s))return;if(U.code==="Digit1"){N();return}const oe=A[U.code];if(oe!==void 0){const se=(t(i)+1)*12+oe;Q(se);return}const G=k[U.code];if(G!==void 0){const se=(t(i)+2)*12+G;Q(se);return}}function B(U){if(U.target instanceof HTMLInputElement||U.target instanceof HTMLTextAreaElement||U.target instanceof HTMLSelectElement||!t(s))return;const oe=A[U.code];if(oe!==void 0){const se=(t(i)+1)*12+oe;E(se);return}const G=k[U.code];if(G!==void 0){const se=(t(i)+2)*12+G;E(se);return}}async function F(){v||(await e.bridge.init(),await e.bridge.resume(),v=!0)}async function Q(U,oe=100){await F(),e.bridge.liveKeyDown(U,oe),p(_,new Set([...t(_),U]),!0)}function E(U){e.bridge.liveKeyUp(U);const oe=new Set(t(_));oe.delete(U),p(_,oe,!0)}async function N(){await F(),e.bridge.liveTrigger()}async function M(U=!1){t(s)&&(await F(),U?e.bridge.liveSetConfig(JSON.stringify(t(s))):e.bridge.liveUpdateConfig(JSON.stringify(t(s))))}async function K(){!t(o)?.pattern||!t(r)||(await F(),e.bridge.liveLoadDemo(te.text,t(r),JSON.stringify(t(o))),p(x,!0),Cn.playing=!0)}function Z(){e.bridge.liveStopDemo(),p(x,!1),Cn.playing=!1}Ie(()=>(Cn.play=K,Cn.stop=Z,()=>{Cn.play=null,Cn.stop=null,Cn.playing=!1}));function $(U){p(o,U,!0),ie()}async function W(){try{const U=await io(te.text);p(a,[...new Set(U)],!0)}catch{p(a,[],!0)}}async function ee(U){p(l,!0),p(c,null);try{f=!0;const oe=await Pc(te.text,U);p(s,oe.voice_config,!0),p(i,oe.octave,!0),p(o,oe.demo??null,!0),p(y,await Zr(oe.voice_config),!0),M(!0)}catch(oe){p(c,oe instanceof Error?oe.message:String(oe),!0),p(s,null),p(y,null),p(o,null)}finally{p(l,!1),f=!1}}async function ie(){if(!(!t(s)||!t(r)||f))try{let U=await Ac(t(s));t(i)!==4&&(U=`octave = ${t(i)}
${U}`),t(o)?.pattern&&(U+=`
[demo]
`,U+=`pattern = ${JSON.stringify(t(o).pattern)}
`,t(o).bpm!=null&&(U+=`bpm = ${t(o).bpm}
`),t(o).scale&&(U+=`scale = ${JSON.stringify(t(o).scale)}
`),t(o).root&&(U+=`root = ${JSON.stringify(t(o).root)}
`)),te.replaceSectionContent("instrument/"+t(r),U),p(y,await Zr(t(s)),!0),M()}catch(U){p(c,U instanceof Error?U.message:String(U),!0)}}function ce(U){t(s)&&(p(s,{...t(s),...U},!0),ie())}function qe(U,oe){if(!t(s))return;const G=[...t(s).oscs];G[U]=oe,p(s,{...t(s),oscs:G},!0),ie()}function re(U,oe){if(!t(s))return;const G=[...t(s).paths];G[U]=oe,p(s,{...t(s),paths:G},!0),ie()}function me(){if(!t(s))return 0;let U=0;for(let oe=0;oe<t(s).oscs.length;oe++)t(s).oscs[oe]!==null&&(U=oe+1);return Math.max(U,2)}function Ce(){const U=new Set(t(a));let oe=1;for(;U.has(`inst_${oe}`);)oe++;const G=`inst_${oe}`;te.addSection("instrument/"+G,`octave = 4

`),te.selectedInstrument=G}function we(){t(r)&&(p(d,t(r),!0),p(u,!0))}function Re(){if(!t(r)||!t(d).trim()){p(u,!1);return}const U=t(d).trim(),oe=t(r);if(U===oe){p(u,!1);return}te.renameSection("instrument/"+oe,"instrument/"+U),te.replaceAllInUserText(`instrument ${oe}`,`instrument ${U}`),te.selectedInstrument=U,p(u,!1)}function Se(){p(u,!1)}function Le(){if(!t(r))return;const U=te.getSectionContent("instrument/"+t(r));if(U===null)return;const oe=new Set(t(a));let G=`${t(r)}_copy`,se=2;for(;oe.has(G);)G=`${t(r)}_copy_${se}`,se++;te.addSection("instrument/"+G,U),te.selectedInstrument=G}var We=vm(),$e=w(We),nn=w($e),Sn=w(nn),it=h(w(Sn),2);{var gn=U=>{var oe=tm(),G=Te(oe),se=h(G,2),ve=h(se,2);H("keydown",G,Pe=>{Pe.key==="Enter"&&Re(),Pe.key==="Escape"&&Se()}),Hn(G,()=>t(d),Pe=>p(d,Pe)),H("click",se,Re),H("click",ve,Se),S(U,oe)},bn=U=>{var oe=sm(),G=Te(oe);{var se=Pe=>{var Me=am(),Qe=Te(Me),Ze=w(Qe),rn=h(Qe,2),yn=h(rn,2);ae(()=>ke(Ze,t(r))),H("click",rn,we),H("click",yn,Le),S(Pe,Me)};Y(G,Pe=>{t(r)&&Pe(se)})}var ve=h(G,2);H("click",ve,Ce),S(U,oe)};Y(it,U=>{t(u)?U(gn):U(bn,!1)})}var Qt=h(Sn,2);{var Zt=U=>{var oe=cm(),G=Te(oe);Cd(G,{get activity(){return t(y)},get selected(){return t(m)},onselect:Ze=>{p(m,Ze,!0),dn.jumpToBlock(Ze)}});var se=h(G,2),ve=w(se);{var Pe=Ze=>{var rn=rm(),yn=w(rn);ae(()=>{Xe(rn,"title",dn.hasCcMap?"Re-learn MIDI CCs":"Setup MIDI CCs"),ke(yn,dn.hasCcMap?"Re-learn MIDI":"Setup MIDI")}),H("click",rn,()=>dn.startLearn()),S(Ze,rn)};Y(ve,Ze=>{Es.inputs.length>0&&Ze(Pe)})}var Me=h(ve,2);{var Qe=Ze=>{const rn=C(()=>dn.currentRegion),yn=C(()=>t(rn)?.bindings??[]),tn=C(()=>t(yn).filter(j=>j.slot.startsWith("K"))),cn=C(()=>t(yn).filter(j=>j.slot.startsWith("F")));var pe=lm(),an=w(pe),Je=h(an,2),Ee=w(Je),mn=h(Je,2),Ye=h(mn,2),pn=w(Ye);{var xe=j=>{var b=im(),P=w(b);ae(I=>ke(P,`K[${I??""}]`),[()=>t(tn).map(I=>I.label).join(" ")]),S(j,b)};Y(pn,j=>{t(tn).length>0&&j(xe)})}var ln=h(pn,2);{var q=j=>{var b=om(),P=w(b);ae(I=>ke(P,`F[${I??""}]`),[()=>t(cn).map(I=>I.label).join(" ")]),S(j,b)};Y(ln,j=>{t(cn).length>0&&j(q)})}ae(()=>ke(Ee,t(rn)?.label??"")),J("mouseenter",pe,()=>ue.set("midi-region-bar")),H("click",an,()=>dn.navigateRegion(-1)),H("click",mn,()=>dn.navigateRegion(1)),S(Ze,pe)};Y(Me,Ze=>{dn.regions.length>0&&dn.hasCcMap&&Ze(Qe)})}S(U,oe)};Y(Qt,U=>{t(s)&&U(Zt)})}var xt=h(nn,2);{var St=U=>{var oe=um(),G=w(oe);ae(()=>ke(G,t(c))),S(U,oe)};Y(xt,U=>{t(c)&&U(St)})}var Jt=h(xt,2);{var Xt=U=>{var oe=dm();S(U,oe)},ot=U=>{var oe=fm();S(U,oe)};Y(Jt,U=>{t(l)?U(Xt):t(r)||U(ot,1)})}var Gn=h($e,2);{var Yt=U=>{var oe=hm(),G=Te(oe),se=w(G);let ve;var Pe=w(se);{var Me=xe=>{ef(xe,{get config(){return t(s)},get activity(){return t(y)},updateConfig:ce})},Qe=xe=>{pf(xe,{get config(){return t(s)},get activity(){return t(y)},setOsc:qe,updateConfig:ce,get focusTab(){return t(g)}})},Ze=xe=>{{let ln=C(me);wf(xe,{get config(){return t(s)},get activity(){return t(y)},setPath:re,get oscCount(){return t(ln)},get focusTab(){return t(R)}})}},rn=xe=>{Tf(xe,{get config(){return t(s)},updateConfig:ce})},yn=xe=>{Mf(xe,{get config(){return t(s)},get activity(){return t(y)},updateConfig:ce})},tn=xe=>{Of(xe,{get config(){return t(s)},get activity(){return t(y)},updateConfig:ce})},cn=xe=>{jf(xe,{get config(){return t(s)},updateConfig:ce})};Y(Pe,xe=>{t(m)==="mod"?xe(Me):t(m)==="osc"?xe(Qe,1):t(m)==="path"?xe(Ze,2):t(m)==="fx"?xe(rn,3):t(m)==="vcf"?xe(yn,4):t(m)==="amp"?xe(tn,5):t(m)==="post"&&xe(cn,6)})}Ft(se,xe=>p(L,xe),()=>t(L)),Ft(G,xe=>p(T,xe),()=>t(T));var pe=h(G,2),an=w(pe);Zf(an,{get demo(){return t(o)},onchange:$,get octave(){return t(i)},onoctavechange:xe=>{p(i,xe,!0),ie()}});var Je=h(an,2),Ee=w(Je);Wf(Ee,{onhit:N});var mn=h(Ee,2);Gf(mn,{get octave(){return t(i)},onkeydown:Q,onkeyup:E,get activeKeys(){return t(_)}});var Ye=h(pe,2);{var pn=xe=>{var ln=pm(),q=w(ln),j=h(w(q),2),b=w(j),P=h(j,2),I=w(P);let ne;var X=h(I,2);let le;var he=h(X,2);let en;var Pn=h(he,2);let Qn;var $t=h(P,2),ea=w($t);{var na=sn=>{var Zn=mm();H("click",Zn,()=>dn.skipPads()),S(sn,Zn)};Y(ea,sn=>{dn.learnStep.phase==="pads"&&sn(na)})}var _a=h(ea,2);ae(()=>{ke(b,dn.learnPrompt),ne=_e(I,1,"learn-phase svelte-1yx9lnw",null,ne,{active:dn.learnStep.phase==="encoder"}),le=_e(X,1,"learn-phase svelte-1yx9lnw",null,le,{active:dn.learnStep.phase==="knobs"}),en=_e(he,1,"learn-phase svelte-1yx9lnw",null,en,{active:dn.learnStep.phase==="faders"}),Qn=_e(Pn,1,"learn-phase svelte-1yx9lnw",null,Qn,{active:dn.learnStep.phase==="pads"})}),H("click",_a,()=>dn.cancelLearn()),S(xe,ln)};Y(Ye,xe=>{dn.learnStep&&xe(pn)})}ae(()=>ve=Ue(se,"",ve,{transform:`scale(${t(O)??""})`})),S(U,oe)};Y(Gn,U=>{t(s)&&U(Yt)})}J("mouseenter",nn,()=>ue.set("instrument-header")),S(n,We),ye()}Ke(["keydown","click"]);var gm=D('<textarea spellcheck="false" placeholder="User overrides appear here..." class="svelte-1uk0njm"></textarea>'),bm=D('<textarea readonly="" spellcheck="false" class="readonly svelte-1uk0njm"></textarea>'),ym=D('<textarea readonly="" spellcheck="false" class="readonly svelte-1uk0njm"></textarea>'),km=D('<div class="seqn-editor svelte-1uk0njm"><div class="header svelte-1uk0njm"><div class="tabs svelte-1uk0njm"><button>User</button> <button>Library</button> <button>Merged</button></div> <div class="actions svelte-1uk0njm"><button class="svelte-1uk0njm">Reload</button> <button class="reset-btn svelte-1uk0njm">Reset User</button></div></div> <!></div>');function wm(n,e){be(e,!0);let a=V("user");function r(){te.reload()}function s(g){const R=g.target;te.setUserTextRaw(R.value)}function i(){confirm("Clear all user data? Library entries will remain.")&&te.resetUser()}var o=km(),c=w(o),l=w(c),f=w(l);let u;var d=h(f,2);let m;var y=h(d,2);let _;var x=h(l,2),v=w(x),T=h(v,2),L=h(c,2);{var O=g=>{var R=gm();ae(()=>Wt(R,te.userText)),H("input",R,s),S(g,R)},A=g=>{var R=bm();ae(()=>Wt(R,te.libraryText)),S(g,R)},k=g=>{var R=ym();ae(()=>Wt(R,te.text)),S(g,R)};Y(L,g=>{t(a)==="user"?g(O):t(a)==="library"?g(A,1):g(k,!1)})}ae(()=>{u=_e(f,1,"tab svelte-1uk0njm",null,u,{active:t(a)==="user"}),m=_e(d,1,"tab svelte-1uk0njm",null,m,{active:t(a)==="library"}),_=_e(y,1,"tab svelte-1uk0njm",null,_,{active:t(a)==="merged"})}),J("mouseenter",o,()=>ue.set("seqn-editor")),H("click",f,()=>{p(a,"user")}),H("click",d,()=>{p(a,"library")}),H("click",y,()=>{p(a,"merged")}),H("click",v,r),J("mouseenter",v,()=>ue.set("reload-button")),H("click",T,i),S(n,o),ye()}Ke(["click","input"]);function gr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var va=gr();function So(n){va=n}var aa={exec:()=>null};function Oe(n,e=""){let a=typeof n=="string"?n:n.source,r={replace:(s,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(Nn.caret,"$1"),a=a.replace(s,o),r},getRegex:()=>new RegExp(a,e)};return r}var xm=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Nn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}>`)},Sm=/^(?:[ \t]*(?:\n|$))+/,Pm=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Am=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Xa=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Tm=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,br=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Po=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ao=Oe(Po).replace(/bull/g,br).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Dm=Oe(Po).replace(/bull/g,br).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),yr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Rm=/^[^\n]+/,kr=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,qm=Oe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",kr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Cm=Oe(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,br).getRegex(),Ts="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",wr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Lm=Oe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",wr).replace("tag",Ts).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),To=Oe(yr).replace("hr",Xa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ts).getRegex(),Mm=Oe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",To).getRegex(),xr={blockquote:Mm,code:Pm,def:qm,fences:Am,heading:Tm,hr:Xa,html:Lm,lheading:Ao,list:Cm,newline:Sm,paragraph:To,table:aa,text:Rm},si=Oe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Xa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ts).getRegex(),Em={...xr,lheading:Dm,table:si,paragraph:Oe(yr).replace("hr",Xa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",si).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ts).getRegex()},Fm={...xr,html:Oe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",wr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:aa,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Oe(yr).replace("hr",Xa).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ao).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Om=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,zm=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Do=/^( {2,}|\\)\n(?!\s*$)/,Nm=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ds=/[\p{P}\p{S}]/u,Sr=/[\s\p{P}\p{S}]/u,Ro=/[^\s\p{P}\p{S}]/u,Im=Oe(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Sr).getRegex(),qo=/(?!~)[\p{P}\p{S}]/u,jm=/(?!~)[\s\p{P}\p{S}]/u,Bm=/(?:[^\s\p{P}\p{S}]|~)/u,Co=/(?![*_])[\p{P}\p{S}]/u,Hm=/(?![*_])[\s\p{P}\p{S}]/u,Vm=/(?:[^\s\p{P}\p{S}]|[*_])/u,Gm=Oe(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",xm?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Lo=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Km=Oe(Lo,"u").replace(/punct/g,Ds).getRegex(),Wm=Oe(Lo,"u").replace(/punct/g,qo).getRegex(),Mo="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Um=Oe(Mo,"gu").replace(/notPunctSpace/g,Ro).replace(/punctSpace/g,Sr).replace(/punct/g,Ds).getRegex(),Qm=Oe(Mo,"gu").replace(/notPunctSpace/g,Bm).replace(/punctSpace/g,jm).replace(/punct/g,qo).getRegex(),Zm=Oe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ro).replace(/punctSpace/g,Sr).replace(/punct/g,Ds).getRegex(),Jm=Oe(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Co).getRegex(),Xm="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Ym=Oe(Xm,"gu").replace(/notPunctSpace/g,Vm).replace(/punctSpace/g,Hm).replace(/punct/g,Co).getRegex(),$m=Oe(/\\(punct)/,"gu").replace(/punct/g,Ds).getRegex(),ep=Oe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),np=Oe(wr).replace("(?:-->|$)","-->").getRegex(),tp=Oe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",np).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),vs=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,ap=Oe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",vs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Eo=Oe(/^!?\[(label)\]\[(ref)\]/).replace("label",vs).replace("ref",kr).getRegex(),Fo=Oe(/^!?\[(ref)\](?:\[\])?/).replace("ref",kr).getRegex(),sp=Oe("reflink|nolink(?!\\()","g").replace("reflink",Eo).replace("nolink",Fo).getRegex(),ri=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Pr={_backpedal:aa,anyPunctuation:$m,autolink:ep,blockSkip:Gm,br:Do,code:zm,del:aa,delLDelim:aa,delRDelim:aa,emStrongLDelim:Km,emStrongRDelimAst:Um,emStrongRDelimUnd:Zm,escape:Om,link:ap,nolink:Fo,punctuation:Im,reflink:Eo,reflinkSearch:sp,tag:tp,text:Nm,url:aa},rp={...Pr,link:Oe(/^!?\[(label)\]\((.*?)\)/).replace("label",vs).getRegex(),reflink:Oe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",vs).getRegex()},er={...Pr,emStrongRDelimAst:Qm,emStrongLDelim:Wm,delLDelim:Jm,delRDelim:Ym,url:Oe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ri).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Oe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ri).getRegex()},ip={...er,br:Oe(Do).replace("{2,}","*").getRegex(),text:Oe(er.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ss={normal:xr,gfm:Em,pedantic:Fm},Fa={normal:Pr,gfm:er,breaks:ip,pedantic:rp},op={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ii=n=>op[n];function gt(n,e){if(e){if(Nn.escapeTest.test(n))return n.replace(Nn.escapeReplace,ii)}else if(Nn.escapeTestNoEncode.test(n))return n.replace(Nn.escapeReplaceNoEncode,ii);return n}function oi(n){try{n=encodeURI(n).replace(Nn.percentDecode,"%")}catch{return null}return n}function li(n,e){let a=n.replace(Nn.findPipe,(i,o,c)=>{let l=!1,f=o;for(;--f>=0&&c[f]==="\\";)l=!l;return l?"|":" |"}),r=a.split(Nn.splitPipe),s=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(Nn.slashPipe,"|");return r}function Oa(n,e,a){let r=n.length;if(r===0)return"";let s=0;for(;s<r&&n.charAt(r-s-1)===e;)s++;return n.slice(0,r-s)}function lp(n,e){if(n.indexOf(e[1])===-1)return-1;let a=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])a++;else if(n[r]===e[1]&&(a--,a<0))return r;return a>0?-2:-1}function cp(n,e=0){let a=e,r="";for(let s of n)if(s==="	"){let i=4-a%4;r+=" ".repeat(i),a+=i}else r+=s,a++;return r}function ci(n,e,a,r,s){let i=e.href,o=e.title||null,c=n[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;let l={type:n[0].charAt(0)==="!"?"image":"link",raw:a,href:i,title:o,text:c,tokens:r.inlineTokens(c)};return r.state.inLink=!1,l}function up(n,e,a){let r=n.match(a.other.indentCodeCompensation);if(r===null)return e;let s=r[1];return e.split(`
`).map(i=>{let o=i.match(a.other.beginningSpace);if(o===null)return i;let[c]=o;return c.length>=s.length?i.slice(s.length):i}).join(`
`)}var _s=class{options;rules;lexer;constructor(n){this.options=n||va}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let a=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?a:Oa(a,`
`)}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let a=e[0],r=up(a,e[3]||"",this.rules);return{type:"code",raw:a,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let a=e[2].trim();if(this.rules.other.endingHash.test(a)){let r=Oa(a,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(a=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:a,tokens:this.lexer.inline(a)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:Oa(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let a=Oa(e[0],`
`).split(`
`),r="",s="",i=[];for(;a.length>0;){let o=!1,c=[],l;for(l=0;l<a.length;l++)if(this.rules.other.blockquoteStart.test(a[l]))c.push(a[l]),o=!0;else if(!o)c.push(a[l]);else break;a=a.slice(l);let f=c.join(`
`),u=f.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${f}`:f,s=s?`${s}
${u}`:u;let d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,i,!0),this.lexer.state.top=d,a.length===0)break;let m=i.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){let y=m,_=y.raw+`
`+a.join(`
`),x=this.blockquote(_);i[i.length-1]=x,r=r.substring(0,r.length-y.raw.length)+x.raw,s=s.substring(0,s.length-y.text.length)+x.text;break}else if(m?.type==="list"){let y=m,_=y.raw+`
`+a.join(`
`),x=this.list(_);i[i.length-1]=x,r=r.substring(0,r.length-m.raw.length)+x.raw,s=s.substring(0,s.length-y.raw.length)+x.raw,a=_.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:s}}}list(n){let e=this.rules.block.list.exec(n);if(e){let a=e[1].trim(),r=a.length>1,s={type:"list",raw:"",ordered:r,start:r?+a.slice(0,-1):"",loose:!1,items:[]};a=r?`\\d{1,9}\\${a.slice(-1)}`:`\\${a}`,this.options.pedantic&&(a=r?a:"[*+-]");let i=this.rules.other.listItemRegex(a),o=!1;for(;n;){let l=!1,f="",u="";if(!(e=i.exec(n))||this.rules.block.hr.test(n))break;f=e[0],n=n.substring(f.length);let d=cp(e[2].split(`
`,1)[0],e[1].length),m=n.split(`
`,1)[0],y=!d.trim(),_=0;if(this.options.pedantic?(_=2,u=d.trimStart()):y?_=e[1].length+1:(_=d.search(this.rules.other.nonSpaceChar),_=_>4?1:_,u=d.slice(_),_+=e[1].length),y&&this.rules.other.blankLine.test(m)&&(f+=m+`
`,n=n.substring(m.length+1),l=!0),!l){let x=this.rules.other.nextBulletRegex(_),v=this.rules.other.hrRegex(_),T=this.rules.other.fencesBeginRegex(_),L=this.rules.other.headingBeginRegex(_),O=this.rules.other.htmlBeginRegex(_),A=this.rules.other.blockquoteBeginRegex(_);for(;n;){let k=n.split(`
`,1)[0],g;if(m=k,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),g=m):g=m.replace(this.rules.other.tabCharGlobal,"    "),T.test(m)||L.test(m)||O.test(m)||A.test(m)||x.test(m)||v.test(m))break;if(g.search(this.rules.other.nonSpaceChar)>=_||!m.trim())u+=`
`+g.slice(_);else{if(y||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||T.test(d)||L.test(d)||v.test(d))break;u+=`
`+m}y=!m.trim(),f+=k+`
`,n=n.substring(k.length+1),d=g.slice(_)}}s.loose||(o?s.loose=!0:this.rules.other.doubleBlankLine.test(f)&&(o=!0)),s.items.push({type:"list_item",raw:f,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),s.raw+=f}let c=s.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let l of s.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}}let f=this.rules.other.listTaskCheckbox.exec(l.raw);if(f){let u={type:"checkbox",raw:f[0]+" ",checked:f[0]!=="[ ]"};l.checked=u.checked,s.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=u.raw+l.tokens[0].raw,l.tokens[0].text=u.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(u)):l.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):l.tokens.unshift(u)}}if(!s.loose){let f=l.tokens.filter(d=>d.type==="space"),u=f.length>0&&f.some(d=>this.rules.other.anyLine.test(d.raw));s.loose=u}}if(s.loose)for(let l of s.items){l.loose=!0;for(let f of l.tokens)f.type==="text"&&(f.type="paragraph")}return s}}html(n){let e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){let e=this.rules.block.def.exec(n);if(e){let a=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:a,raw:e[0],href:r,title:s}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let a=li(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(a.length===r.length){for(let o of r)this.rules.other.tableAlignRight.test(o)?i.align.push("right"):this.rules.other.tableAlignCenter.test(o)?i.align.push("center"):this.rules.other.tableAlignLeft.test(o)?i.align.push("left"):i.align.push(null);for(let o=0;o<a.length;o++)i.header.push({text:a[o],tokens:this.lexer.inline(a[o]),header:!0,align:i.align[o]});for(let o of s)i.rows.push(li(o,i.header.length).map((c,l)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:i.align[l]})));return i}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let a=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:a,tokens:this.lexer.inline(a)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let a=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(a)){if(!this.rules.other.endAngleBracket.test(a))return;let i=Oa(a.slice(0,-1),"\\");if((a.length-i.length)%2===0)return}else{let i=lp(e[2],"()");if(i===-2)return;if(i>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],s=i[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(a)?r=r.slice(1):r=r.slice(1,-1)),ci(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let a;if((a=this.rules.inline.reflink.exec(n))||(a=this.rules.inline.nolink.exec(n))){let r=(a[2]||a[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){let i=a[0].charAt(0);return{type:"text",raw:i,text:i}}return ci(a,s,a[0],this.lexer,this.rules)}}emStrong(n,e,a=""){let r=this.rules.inline.emStrongLDelim.exec(n);if(!(!r||r[3]&&a.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!a||this.rules.inline.punctuation.exec(a))){let s=[...r[0]].length-1,i,o,c=s,l=0,f=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*n.length+s);(r=f.exec(e))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(o=[...i].length,r[3]||r[4]){c+=o;continue}else if((r[5]||r[6])&&s%3&&!((s+o)%3)){l+=o;continue}if(c-=o,c>0)continue;o=Math.min(o,o+c+l);let u=[...r[0]][0].length,d=n.slice(0,s+r.index+u+o);if(Math.min(s,o)%2){let y=d.slice(1,-1);return{type:"em",raw:d,text:y,tokens:this.lexer.inlineTokens(y)}}let m=d.slice(2,-2);return{type:"strong",raw:d,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let a=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(a),s=this.rules.other.startingSpaceChar.test(a)&&this.rules.other.endingSpaceChar.test(a);return r&&s&&(a=a.substring(1,a.length-1)),{type:"codespan",raw:e[0],text:a}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,a=""){let r=this.rules.inline.delLDelim.exec(n);if(r&&(!r[1]||!a||this.rules.inline.punctuation.exec(a))){let s=[...r[0]].length-1,i,o,c=s,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*n.length+s);(r=l.exec(e))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(o=[...i].length,o!==s))continue;if(r[3]||r[4]){c+=o;continue}if(c-=o,c>0)continue;o=Math.min(o,o+c);let f=[...r[0]][0].length,u=n.slice(0,s+r.index+f+o),d=u.slice(s,-s);return{type:"del",raw:u,text:d,tokens:this.lexer.inlineTokens(d)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let a,r;return e[2]==="@"?(a=e[1],r="mailto:"+a):(a=e[1],r=a),{type:"link",raw:e[0],text:a,href:r,tokens:[{type:"text",raw:a,text:a}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let a,r;if(e[2]==="@")a=e[0],r="mailto:"+a;else{let s;do s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(s!==e[0]);a=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:a,href:r,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let a=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:a}}}},ut=class nr{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||va,this.options.tokenizer=this.options.tokenizer||new _s,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let a={other:Nn,block:ss.normal,inline:Fa.normal};this.options.pedantic?(a.block=ss.pedantic,a.inline=Fa.pedantic):this.options.gfm&&(a.block=ss.gfm,this.options.breaks?a.inline=Fa.breaks:a.inline=Fa.gfm),this.tokenizer.rules=a}static get rules(){return{block:ss,inline:Fa}}static lex(e,a){return new nr(a).lex(e)}static lexInline(e,a){return new nr(a).inlineTokens(e)}lex(e){e=e.replace(Nn.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let a=0;a<this.inlineQueue.length;a++){let r=this.inlineQueue[a];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,a=[],r=!1){for(this.options.pedantic&&(e=e.replace(Nn.tabCharGlobal,"    ").replace(Nn.spaceLine,""));e;){let s;if(this.options.extensions?.block?.some(o=>(s=o.call({lexer:this},e,a))?(e=e.substring(s.raw.length),a.push(s),!0):!1))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);let o=a.at(-1);s.raw.length===1&&o!==void 0?o.raw+=`
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
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):a.push(s);continue}if(e){let o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,a}inline(e,a=[]){return this.inlineQueue.push({src:e,tokens:a}),a}inlineTokens(e,a=[]){let r=e,s=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)l.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)i=s[2]?s[2].length:0,r=r.slice(0,s.index+i)+"["+"a".repeat(s[0].length-i-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let o=!1,c="";for(;e;){o||(c=""),o=!1;let l;if(this.options.extensions?.inline?.some(u=>(l=u.call({lexer:this},e,a))?(e=e.substring(l.raw.length),a.push(l),!0):!1))continue;if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length);let u=a.at(-1);l.type==="text"&&u?.type==="text"?(u.raw+=l.raw,u.text+=l.text):a.push(l);continue}if(l=this.tokenizer.emStrong(e,r,c)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.del(e,r,c)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.autolink(e)){e=e.substring(l.raw.length),a.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e))){e=e.substring(l.raw.length),a.push(l);continue}let f=e;if(this.options.extensions?.startInline){let u=1/0,d=e.slice(1),m;this.options.extensions.startInline.forEach(y=>{m=y.call({lexer:this},d),typeof m=="number"&&m>=0&&(u=Math.min(u,m))}),u<1/0&&u>=0&&(f=e.substring(0,u+1))}if(l=this.tokenizer.inlineText(f)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(c=l.raw.slice(-1)),o=!0;let u=a.at(-1);u?.type==="text"?(u.raw+=l.raw,u.text+=l.text):a.push(l);continue}if(e){let u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return a}},gs=class{options;parser;constructor(n){this.options=n||va}space(n){return""}code({text:n,lang:e,escaped:a}){let r=(e||"").match(Nn.notSpaceStart)?.[0],s=n.replace(Nn.endingNewline,"")+`
`;return r?'<pre><code class="language-'+gt(r)+'">'+(a?s:gt(s,!0))+`</code></pre>
`:"<pre><code>"+(a?s:gt(s,!0))+`</code></pre>
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
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${gt(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:a}){let r=this.parser.parseInline(a),s=oi(n);if(s===null)return r;n=s;let i='<a href="'+n+'"';return e&&(i+=' title="'+gt(e)+'"'),i+=">"+r+"</a>",i}image({href:n,title:e,text:a,tokens:r}){r&&(a=this.parser.parseInline(r,this.parser.textRenderer));let s=oi(n);if(s===null)return gt(a);n=s;let i=`<img src="${n}" alt="${gt(a)}"`;return e&&(i+=` title="${gt(e)}"`),i+=">",i}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:gt(n.text)}},Ar=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},dt=class tr{options;renderer;textRenderer;constructor(e){this.options=e||va,this.options.renderer=this.options.renderer||new gs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ar}static parse(e,a){return new tr(a).parse(e)}static parseInline(e,a){return new tr(a).parseInline(e)}parse(e){let a="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let o=s,c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){a+=c||"";continue}}let i=s;switch(i.type){case"space":{a+=this.renderer.space(i);break}case"hr":{a+=this.renderer.hr(i);break}case"heading":{a+=this.renderer.heading(i);break}case"code":{a+=this.renderer.code(i);break}case"table":{a+=this.renderer.table(i);break}case"blockquote":{a+=this.renderer.blockquote(i);break}case"list":{a+=this.renderer.list(i);break}case"checkbox":{a+=this.renderer.checkbox(i);break}case"html":{a+=this.renderer.html(i);break}case"def":{a+=this.renderer.def(i);break}case"paragraph":{a+=this.renderer.paragraph(i);break}case"text":{a+=this.renderer.text(i);break}default:{let o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return a}parseInline(e,a=this.renderer){let r="";for(let s=0;s<e.length;s++){let i=e[s];if(this.options.extensions?.renderers?.[i.type]){let c=this.options.extensions.renderers[i.type].call({parser:this},i);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=c||"";continue}}let o=i;switch(o.type){case"escape":{r+=a.text(o);break}case"html":{r+=a.html(o);break}case"link":{r+=a.link(o);break}case"image":{r+=a.image(o);break}case"checkbox":{r+=a.checkbox(o);break}case"strong":{r+=a.strong(o);break}case"em":{r+=a.em(o);break}case"codespan":{r+=a.codespan(o);break}case"br":{r+=a.br(o);break}case"del":{r+=a.del(o);break}case"text":{r+=a.text(o);break}default:{let c='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}},Na=class{options;block;constructor(n){this.options=n||va}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?ut.lex:ut.lexInline}provideParser(){return this.block?dt.parse:dt.parseInline}},dp=class{defaults=gr();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=dt;Renderer=gs;TextRenderer=Ar;Lexer=ut;Tokenizer=_s;Hooks=Na;constructor(...n){this.use(...n)}walkTokens(n,e){let a=[];for(let r of n)switch(a=a.concat(e.call(this,r)),r.type){case"table":{let s=r;for(let i of s.header)a=a.concat(this.walkTokens(i.tokens,e));for(let i of s.rows)for(let o of i)a=a.concat(this.walkTokens(o.tokens,e));break}case"list":{let s=r;a=a.concat(this.walkTokens(s.items,e));break}default:{let s=r;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(i=>{let o=s[i].flat(1/0);a=a.concat(this.walkTokens(o,e))}):s.tokens&&(a=a.concat(this.walkTokens(s.tokens,e)))}}return a}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(a=>{let r={...a};if(r.async=this.defaults.async||r.async||!1,a.extensions&&(a.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let i=e.renderers[s.name];i?e.renderers[s.name]=function(...o){let c=s.renderer.apply(this,o);return c===!1&&(c=i.apply(this,o)),c}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[s.level];i?i.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),a.renderer){let s=this.defaults.renderer||new gs(this.defaults);for(let i in a.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let o=i,c=a.renderer[o],l=s[o];s[o]=(...f)=>{let u=c.apply(s,f);return u===!1&&(u=l.apply(s,f)),u||""}}r.renderer=s}if(a.tokenizer){let s=this.defaults.tokenizer||new _s(this.defaults);for(let i in a.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let o=i,c=a.tokenizer[o],l=s[o];s[o]=(...f)=>{let u=c.apply(s,f);return u===!1&&(u=l.apply(s,f)),u}}r.tokenizer=s}if(a.hooks){let s=this.defaults.hooks||new Na;for(let i in a.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let o=i,c=a.hooks[o],l=s[o];Na.passThroughHooks.has(i)?s[o]=f=>{if(this.defaults.async&&Na.passThroughHooksRespectAsync.has(i))return(async()=>{let d=await c.call(s,f);return l.call(s,d)})();let u=c.call(s,f);return l.call(s,u)}:s[o]=(...f)=>{if(this.defaults.async)return(async()=>{let d=await c.apply(s,f);return d===!1&&(d=await l.apply(s,f)),d})();let u=c.apply(s,f);return u===!1&&(u=l.apply(s,f)),u}}r.hooks=s}if(a.walkTokens){let s=this.defaults.walkTokens,i=a.walkTokens;r.walkTokens=function(o){let c=[];return c.push(i.call(this,o)),s&&(c=c.concat(s.call(this,o))),c}}this.defaults={...this.defaults,...r}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return ut.lex(n,e??this.defaults)}parser(n,e){return dt.parse(n,e??this.defaults)}parseMarkdown(n){return(e,a)=>{let r={...a},s={...this.defaults,...r},i=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=n),s.async)return(async()=>{let o=s.hooks?await s.hooks.preprocess(e):e,c=await(s.hooks?await s.hooks.provideLexer():n?ut.lex:ut.lexInline)(o,s),l=s.hooks?await s.hooks.processAllTokens(c):c;s.walkTokens&&await Promise.all(this.walkTokens(l,s.walkTokens));let f=await(s.hooks?await s.hooks.provideParser():n?dt.parse:dt.parseInline)(l,s);return s.hooks?await s.hooks.postprocess(f):f})().catch(i);try{s.hooks&&(e=s.hooks.preprocess(e));let o=(s.hooks?s.hooks.provideLexer():n?ut.lex:ut.lexInline)(e,s);s.hooks&&(o=s.hooks.processAllTokens(o)),s.walkTokens&&this.walkTokens(o,s.walkTokens);let c=(s.hooks?s.hooks.provideParser():n?dt.parse:dt.parseInline)(o,s);return s.hooks&&(c=s.hooks.postprocess(c)),c}catch(o){return i(o)}}}onError(n,e){return a=>{if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let r="<p>An error occurred:</p><pre>"+gt(a.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(a);throw a}}},ma=new dp;function Ve(n,e){return ma.parse(n,e)}Ve.options=Ve.setOptions=function(n){return ma.setOptions(n),Ve.defaults=ma.defaults,So(Ve.defaults),Ve};Ve.getDefaults=gr;Ve.defaults=va;Ve.use=function(...n){return ma.use(...n),Ve.defaults=ma.defaults,So(Ve.defaults),Ve};Ve.walkTokens=function(n,e){return ma.walkTokens(n,e)};Ve.parseInline=ma.parseInline;Ve.Parser=dt;Ve.parser=dt.parse;Ve.Renderer=gs;Ve.TextRenderer=Ar;Ve.Lexer=ut;Ve.lexer=ut.lex;Ve.Tokenizer=_s;Ve.Hooks=Na;Ve.parse=Ve;Ve.options;Ve.setOptions;Ve.use;Ve.walkTokens;Ve.parseInline;dt.parse;ut.lex;const fp=`# DAW Guide

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
`,mp=`# SEQN Format Reference

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
`,pp=`# Synth Architecture

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
`;var hp=D("<a> </a>"),vp=D('<nav class="help-toc svelte-d7kilv"></nav>'),_p=D('<div class="help-viewer svelte-d7kilv"><div class="help-tabs svelte-d7kilv"><!></div> <div class="help-body svelte-d7kilv"><div class="help-content svelte-d7kilv"><!></div> <!></div></div>');function gp(n,e){be(e,!0);const a=["DAW","Sequencer","Synth"],r=[fp,mp,pp];let s=V(0);function i(k){const g=[],R=new Map,z=new Ve.Renderer;return z.heading=({text:F,depth:Q})=>{if(Q===2||Q===3){let E=F.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");const N=R.get(E)??0;return R.set(E,N+1),N>0&&(E=`${E}-${N}`),g.push({level:Q,id:E,text:F}),`<h${Q} id="${E}">${F}</h${Q}>`}return`<h${Q}>${F}</h${Q}>`},{html:Ve(k,{renderer:z}),toc:g}}let o=C(()=>i(r[t(s)])),c=V(""),l=V(void 0);function f(k){const g=t(o).toc;for(let R=g.length-1;R>=0;R--)if(g[R].id===k){if(g[R].level===2)return k;for(let z=R-1;z>=0;z--)if(g[z].level===2)return g[z].id}return""}let u=C(()=>f(t(c))),d=C(()=>{const k=t(o).toc,g=[];let R="";for(const z of k)z.level===2?(R=z.id,g.push(z)):z.level===3&&R===t(u)&&g.push(z);return g});Ie(()=>{t(s),p(c,""),t(l)&&(t(l).scrollTop=0)}),Ie(()=>{if(t(s),!t(l))return;const k=requestAnimationFrame(()=>{const R=t(l).querySelectorAll("h2[id], h3[id]");if(!R.length)return;const z=new IntersectionObserver(B=>{for(const F of B)F.isIntersecting&&p(c,F.target.id,!0)},{root:t(l),rootMargin:"0px 0px -80% 0px",threshold:0});for(const B of R)z.observe(B);g=()=>z.disconnect()});let g;return()=>{cancelAnimationFrame(k),g?.()}});function m(k){t(l)?.querySelector(`#${CSS.escape(k)}`)?.scrollIntoView({behavior:"smooth",block:"start"})}var y=_p(),_=w(y),x=w(_);ho(x,{get blocks(){return a},get selected(){return t(s)},onselect:k=>{p(s,k,!0)}});var v=h(_,2),T=w(v),L=w(T);to(L,()=>t(o).html),Ft(T,k=>p(l,k),()=>t(l));var O=h(T,2);{var A=k=>{var g=vp();Be(g,21,()=>t(d),je,(R,z)=>{var B=hp();let F;var Q=w(B);ae(()=>{F=_e(B,1,"toc-link svelte-d7kilv",null,F,{"toc-h3":t(z).level===3,active:t(c)===t(z).id,"active-parent":t(z).level===2&&t(z).id===t(u)&&t(c)!==t(z).id}),Xe(B,"href",`#${t(z).id??""}`),ke(Q,t(z).text)}),H("click",B,E=>{E.preventDefault(),m(t(z).id)}),S(R,B)}),S(k,g)};Y(O,k=>{t(o).toc.length>0&&k(A)})}S(n,y),ye()}Ke(["click"]);var bp=D('<div class="instrument-mode svelte-1n46o8q"><div class="instrument-sidebar svelte-1n46o8q"><!></div> <div class="instrument-content svelte-1n46o8q"><!></div></div>'),yp=D('<div class="seqn-mode svelte-1n46o8q"><!></div>'),kp=D('<div class="app svelte-1n46o8q"><!> <div class="content svelte-1n46o8q"><!></div></div>');function wp(n,e){be(e,!0);const a=new wc;Ie(()=>{document.documentElement.className=Dn.resolved==="dark"?"theme-dark":"theme-light"}),He.setBridge(a);let r=V("song"),s=V(_n([]));Ie(()=>{te.revision,i()});async function i(){try{const v=await io(te.text);p(s,[...new Set(v)],!0)}catch{p(s,[],!0)}}let o=C(()=>t(s).map(v=>({id:v,label:v}))),c=C(()=>new Set(t(s).filter(v=>te.isLibraryOnly("instrument/"+v))));var l=kp(),f=w(l);Kc(f,{get bridge(){return a},get mode(){return t(r)},onmode:v=>{p(r,v,!0)}});var u=h(f,2),d=w(u);{var m=v=>{Sd(v,{})},y=v=>{var T=bp(),L=w(T),O=w(L);Gs(O,{title:"Instruments",get items(){return t(o)},get activeId(){return te.selectedInstrument},get libraryIds(){return t(c)},onselect:g=>{te.selectedInstrument=g},hint:"instrument-sidebar"});var A=h(L,2),k=w(A);_m(k,{get bridge(){return a}}),S(v,T)},_=v=>{var T=yp(),L=w(T);wm(L,{}),S(v,T)},x=v=>{gp(v,{})};Y(d,v=>{t(r)==="song"?v(m):t(r)==="instrument"?v(y,1):t(r)==="seqn"?v(_,2):t(r)==="help"&&v(x,3)})}S(n,l),ye()}rc(wp,{target:document.getElementById("app")});
