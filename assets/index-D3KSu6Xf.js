(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const Ds=!1;var ms=Array.isArray,Lo=Array.prototype.indexOf,ha=Array.prototype.includes,ps=Array.from,Mo=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,Eo=Object.getOwnPropertyDescriptors,ei=Object.prototype,Oo=Array.prototype,Qs=Object.getPrototypeOf,xr=Object.isExtensible;const Fo=()=>{};function zo(n){for(var e=0;e<n.length;e++)n[e]()}function ni(){var n,e,a=new Promise((r,s)=>{n=r,e=s});return{promise:a,resolve:n,reject:e}}const Ln=2,Oa=4,hs=8,ti=1<<24,Dt=16,ft=32,ia=64,ai=128,$n=512,Dn=1024,Mn=2048,dt=4096,Un=8192,St=16384,Na=32768,na=65536,Sr=1<<17,si=1<<18,Sa=1<<19,Io=1<<20,wt=1<<25,ta=65536,Rs=1<<21,Zs=1<<22,zt=1<<23,Yt=Symbol("$state"),No=Symbol("legacy props"),jo=Symbol(""),Zt=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Bo=globalThis.document?.contentType?.includes("xml")??!1;function Ho(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Vo(n,e,a){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Go(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ko(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Wo(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Uo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Qo(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Zo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Jo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Xo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Yo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const $o=1,el=2,ri=4,nl=8,tl=16,al=1,sl=4,rl=8,il=16,ol=1,ll=2,qn=Symbol(),ii="http://www.w3.org/1999/xhtml";function cl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function ul(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function oi(n){return n===this.v}function dl(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function li(n){return!dl(n,this.v)}let fl=!1;const ml=[];function Wn(n,e=!1,a=!1){return $a(n,new Map,"",ml,null,a)}function $a(n,e,a,r,s=null,i=!1){if(typeof n=="object"&&n!==null){var o=e.get(n);if(o!==void 0)return o;if(n instanceof Map)return new Map(n);if(n instanceof Set)return new Set(n);if(ms(n)){var c=Array(n.length);e.set(n,c),s!==null&&e.set(s,c);for(var l=0;l<n.length;l+=1){var f=n[l];l in n&&(c[l]=$a(f,e,a,r,null,i))}return c}if(Qs(n)===ei){c={},e.set(n,c),s!==null&&e.set(s,c);for(var u in n)c[u]=$a(n[u],e,a,r,null,i);return c}if(n instanceof Date)return structuredClone(n);if(typeof n.toJSON=="function"&&!i)return $a(n.toJSON(),e,a,r,n)}if(n instanceof EventTarget)return n;try{return structuredClone(n)}catch{return n}}let tt=null;function va(n){tt=n}function ye(n,e=!1,a){tt={p:tt,i:!1,c:null,e:null,s:n,x:null,l:null}}function ke(n){var e=tt,a=e.e;if(a!==null){e.e=null;for(var r of a)Di(r)}return n!==void 0&&(e.x=n),e.i=!0,tt=e.p,n??{}}function ci(){return!0}let Jt=[];function ui(){var n=Jt;Jt=[],zo(n)}function Pt(n){if(Jt.length===0&&!Ca){var e=Jt;queueMicrotask(()=>{e===Jt&&ui()})}Jt.push(n)}function pl(){for(;Jt.length>0;)ui()}function di(n){var e=Ue;if(e===null)return Fe.f|=zt,n;if((e.f&Na)===0&&(e.f&Oa)===0)throw n;_a(n,e)}function _a(n,e){for(;e!==null;){if((e.f&ai)!==0){if((e.f&Na)===0)throw n;try{e.b.error(n);return}catch(a){n=a}}e=e.parent}throw n}const hl=-7169;function vn(n,e){n.f=n.f&hl|e}function Js(n){(n.f&$n)!==0||n.deps===null?vn(n,Dn):vn(n,dt)}function fi(n){if(n!==null)for(const e of n)(e.f&Ln)===0||(e.f&ta)===0||(e.f^=ta,fi(e.deps))}function mi(n,e,a){(n.f&Mn)!==0?e.add(n):(n.f&dt)!==0&&a.add(n),fi(n.deps),vn(n,Dn)}const Wa=new Set;let Be=null,ss=null,lt=null,Bn=[],vs=null,qs=!1,Ca=!1;class It{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=0;#a=0;#o=null;#r=new Set;#s=new Set;#i=new Map;is_fork=!1;#l=!1;is_deferred(){return this.is_fork||this.#a>0}skip_effect(e){this.#i.has(e)||this.#i.set(e,{d:[],m:[]})}unskip_effect(e){var a=this.#i.get(e);if(a){this.#i.delete(e);for(var r of a.d)vn(r,Mn),ct(r);for(r of a.m)vn(r,dt),ct(r)}}process(e){Bn=[],this.apply();var a=[],r=[];for(const s of e)this.#c(s,a,r);if(this.is_deferred()){this.#u(r),this.#u(a);for(const[s,i]of this.#i)_i(s,i)}else{for(const s of this.#e)s();this.#e.clear(),this.#n===0&&this.#d(),ss=this,Be=null,Pr(r),Pr(a),ss=null,this.#o?.resolve()}lt=null}#c(e,a,r){e.f^=Dn;for(var s=e.first,i=null;s!==null;){var o=s.f,c=(o&(ft|ia))!==0,l=c&&(o&Dn)!==0,f=l||(o&Un)!==0||this.#i.has(s);if(!f&&s.fn!==null){c?s.f^=Dn:i!==null&&(o&(Oa|hs|ti))!==0?i.b.defer_effect(s):(o&Oa)!==0?a.push(s):Ha(s)&&((o&Dt)!==0&&this.#s.add(s),ba(s));var u=s.first;if(u!==null){s=u;continue}}var d=s.parent;for(s=s.next;s===null&&d!==null;)d===i&&(i=null),s=d.next,d=d.parent}}#u(e){for(var a=0;a<e.length;a+=1)mi(e[a],this.#r,this.#s)}capture(e,a){a!==qn&&!this.previous.has(e)&&this.previous.set(e,a),(e.f&zt)===0&&(this.current.set(e,e.v),lt?.set(e,e.v))}activate(){Be=this,this.apply()}deactivate(){Be===this&&(Be=null,lt=null)}flush(){if(this.activate(),Bn.length>0){if(pi(),Be!==null&&Be!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#t)e(this);this.#t.clear()}#d(){if(Wa.size>1){this.previous.clear();var e=lt,a=!0;for(const s of Wa){if(s===this){a=!1;continue}const i=[];for(const[c,l]of this.current){if(s.current.has(c))if(a&&l!==s.current.get(c))s.current.set(c,l);else continue;i.push(c)}if(i.length===0)continue;const o=[...s.current.keys()].filter(c=>!this.current.has(c));if(o.length>0){var r=Bn;Bn=[];const c=new Set,l=new Map;for(const f of i)hi(f,o,c,l);if(Bn.length>0){Be=s,s.apply();for(const f of Bn)s.#c(f,[],[]);s.deactivate()}Bn=r}}Be=null,lt=e}this.committed=!0,Wa.delete(this)}increment(e){this.#n+=1,e&&(this.#a+=1)}decrement(e){this.#n-=1,e&&(this.#a-=1),!this.#l&&(this.#l=!0,Pt(()=>{this.#l=!1,this.is_deferred()?Bn.length>0&&this.flush():this.revive()}))}revive(){for(const e of this.#r)this.#s.delete(e),vn(e,Mn),ct(e);for(const e of this.#s)vn(e,dt),ct(e);this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#o??=ni()).promise}static ensure(){if(Be===null){const e=Be=new It;Wa.add(Be),Ca||Pt(()=>{Be===e&&e.flush()})}return Be}apply(){}}function vl(n){var e=Ca;Ca=!0;try{for(var a;;){if(pl(),Bn.length===0&&(Be?.flush(),Bn.length===0))return vs=null,a;pi()}}finally{Ca=e}}function pi(){qs=!0;var n=null;try{for(var e=0;Bn.length>0;){var a=It.ensure();if(e++>1e3){var r,s;_l()}a.process(Bn),Nt.clear()}}finally{Bn=[],qs=!1,vs=null}}function _l(){try{Uo()}catch(n){_a(n,vs)}}let kt=null;function Pr(n){var e=n.length;if(e!==0){for(var a=0;a<e;){var r=n[a++];if((r.f&(St|Un))===0&&Ha(r)&&(kt=new Set,ba(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Ci(r),kt?.size>0)){Nt.clear();for(const s of kt){if((s.f&(St|Un))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)kt.has(o)&&(kt.delete(o),i.push(o)),o=o.parent;for(let c=i.length-1;c>=0;c--){const l=i[c];(l.f&(St|Un))===0&&ba(l)}}kt.clear()}}kt=null}}function hi(n,e,a,r){if(!a.has(n)&&(a.add(n),n.reactions!==null))for(const s of n.reactions){const i=s.f;(i&Ln)!==0?hi(s,e,a,r):(i&(Zs|Dt))!==0&&(i&Mn)===0&&vi(s,e,r)&&(vn(s,Mn),ct(s))}}function vi(n,e,a){const r=a.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const s of n.deps){if(ha.call(e,s))return!0;if((s.f&Ln)!==0&&vi(s,e,a))return a.set(s,!0),!0}return a.set(n,!1),!1}function ct(n){for(var e=vs=n;e.parent!==null;){e=e.parent;var a=e.f;if(qs&&e===Ue&&(a&Dt)!==0&&(a&si)===0)return;if((a&(ia|ft))!==0){if((a&Dn)===0)return;e.f^=Dn}}Bn.push(e)}function _i(n,e){if(!((n.f&ft)!==0&&(n.f&Dn)!==0)){(n.f&Mn)!==0?e.d.push(n):(n.f&dt)!==0&&e.m.push(n),vn(n,Dn);for(var a=n.first;a!==null;)_i(a,e),a=a.next}}function gl(n){let e=0,a=aa(0),r;return()=>{Ys()&&(t(a),er(()=>(e===0&&(r=xt(()=>n(()=>La(a)))),e+=1,()=>{Pt(()=>{e-=1,e===0&&(r?.(),r=void 0,La(a))})})))}}var bl=na|Sa|ai;function yl(n,e,a){new kl(n,e,a)}class kl{parent;is_pending=!1;#e;#t=null;#n;#a;#o;#r=null;#s=null;#i=null;#l=null;#c=null;#u=0;#d=0;#p=!1;#m=!1;#h=new Set;#v=new Set;#f=null;#k=gl(()=>(this.#f=aa(this.#u),()=>{this.#f=null}));constructor(e,a,r){this.#e=e,this.#n=a,this.#a=r,this.parent=Ue.b,this.is_pending=!!this.#n.pending,this.#o=bs(()=>{Ue.b=this;{var s=this.#b();try{this.#r=Jn(()=>r(s))}catch(i){this.error(i)}this.#d>0?this.#g():this.is_pending=!1}return()=>{this.#c?.remove()}},bl)}#w(){try{this.#r=Jn(()=>this.#a(this.#e))}catch(e){this.error(e)}}#x(){const e=this.#n.pending;e&&(this.#s=Jn(()=>e(this.#e)),Pt(()=>{var a=this.#b();this.#r=this.#_(()=>(It.ensure(),Jn(()=>this.#a(a)))),this.#d>0?this.#g():($t(this.#s,()=>{this.#s=null}),this.is_pending=!1)}))}#b(){var e=this.#e;return this.is_pending&&(this.#c=At(),this.#e.before(this.#c),e=this.#c),e}defer_effect(e){mi(e,this.#h,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#_(e){var a=Ue,r=Fe,s=tt;_t(this.#o),at(this.#o),va(this.#o.ctx);try{return e()}catch(i){return di(i),null}finally{_t(a),at(r),va(s)}}#g(){const e=this.#n.pending;this.#r!==null&&(this.#l=document.createDocumentFragment(),this.#l.append(this.#c),Ei(this.#r,this.#l)),this.#s===null&&(this.#s=Jn(()=>e(this.#e)))}#y(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#y(e);return}if(this.#d+=e,this.#d===0){this.is_pending=!1;for(const a of this.#h)vn(a,Mn),ct(a);for(const a of this.#v)vn(a,dt),ct(a);this.#h.clear(),this.#v.clear(),this.#s&&$t(this.#s,()=>{this.#s=null}),this.#l&&(this.#e.before(this.#l),this.#l=null)}}update_pending_count(e){this.#y(e),this.#u+=e,!(!this.#f||this.#p)&&(this.#p=!0,Pt(()=>{this.#p=!1,this.#f&&ga(this.#f,this.#u)}))}get_effect_pending(){return this.#k(),t(this.#f)}error(e){var a=this.#n.onerror;let r=this.#n.failed;if(this.#m||!a&&!r)throw e;this.#r&&(Vn(this.#r),this.#r=null),this.#s&&(Vn(this.#s),this.#s=null),this.#i&&(Vn(this.#i),this.#i=null);var s=!1,i=!1;const o=()=>{if(s){ul();return}s=!0,i&&Yo(),It.ensure(),this.#u=0,this.#i!==null&&$t(this.#i,()=>{this.#i=null}),this.is_pending=this.has_pending_snippet(),this.#r=this.#_(()=>(this.#m=!1,Jn(()=>this.#a(this.#e)))),this.#d>0?this.#g():this.is_pending=!1};Pt(()=>{try{i=!0,a?.(e,o),i=!1}catch(c){_a(c,this.#o&&this.#o.parent)}r&&(this.#i=this.#_(()=>{It.ensure(),this.#m=!0;try{return Jn(()=>{r(this.#e,()=>e,()=>o)})}catch(c){return _a(c,this.#o.parent),null}finally{this.#m=!1}}))})}}function wl(n,e,a,r){const s=_s;var i=n.filter(m=>!m.settled);if(a.length===0&&i.length===0){r(e.map(s));return}var o=Be,c=Ue,l=xl(),f=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(m=>m.promise)):null;function u(m){l();try{r(m)}catch(b){(c.f&St)===0&&_a(b,c)}o?.deactivate(),Cs()}if(a.length===0){f.then(()=>u(e.map(s)));return}function d(){l(),Promise.all(a.map(m=>Sl(m))).then(m=>u([...e.map(s),...m])).catch(m=>_a(m,c))}f?f.then(d):d()}function xl(){var n=Ue,e=Fe,a=tt,r=Be;return function(i=!0){_t(n),at(e),va(a),i&&r?.activate()}}function Cs(){_t(null),at(null),va(null)}function _s(n){var e=Ln|Mn,a=Fe!==null&&(Fe.f&Ln)!==0?Fe:null;return Ue!==null&&(Ue.f|=Sa),{ctx:tt,deps:null,effects:null,equals:oi,f:e,fn:n,reactions:null,rv:0,v:qn,wv:0,parent:a??Ue,ac:null}}function Sl(n,e,a){let r=Ue;r===null&&Ho();var s=r.b,i=void 0,o=aa(qn),c=!Fe,l=new Map;return Il(()=>{var f=ni();i=f.promise;try{Promise.resolve(n()).then(f.resolve,f.reject).then(()=>{u===Be&&u.committed&&u.deactivate(),Cs()})}catch(b){f.reject(b),Cs()}var u=Be;if(c){var d=s.is_rendered();s.update_pending_count(1),u.increment(d),l.get(u)?.reject(Zt),l.delete(u),l.set(u,f)}const m=(b,_=void 0)=>{if(u.activate(),_)_!==Zt&&(o.f|=zt,ga(o,_));else{(o.f&zt)!==0&&(o.f^=zt),ga(o,b);for(const[w,h]of l){if(l.delete(w),w===u)break;h.reject(Zt)}}c&&(s.update_pending_count(-1),u.decrement(d))};f.promise.then(m,b=>m(null,b||"unknown"))}),$s(()=>{for(const f of l.values())f.reject(Zt)}),new Promise(f=>{function u(d){function m(){d===i?f(o):u(i)}d.then(m,m)}u(i)})}function q(n){const e=_s(n);return Oi(e),e}function gi(n){const e=_s(n);return e.equals=li,e}function Pl(n){var e=n.effects;if(e!==null){n.effects=null;for(var a=0;a<e.length;a+=1)Vn(e[a])}}function Al(n){for(var e=n.parent;e!==null;){if((e.f&Ln)===0)return(e.f&St)===0?e:null;e=e.parent}return null}function Xs(n){var e,a=Ue;_t(Al(n));try{n.f&=~ta,Pl(n),e=Ni(n)}finally{_t(a)}return e}function bi(n){var e=Xs(n);if(!n.equals(e)&&(n.wv=zi(),(!Be?.is_fork||n.deps===null)&&(n.v=e,n.deps===null))){vn(n,Dn);return}Bt||(lt!==null?(Ys()||Be?.is_fork)&&lt.set(n,e):Js(n))}function Tl(n){if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac?.abort(Zt),e.teardown=Fo,e.ac=null,Fa(e,0),nr(e))}function yi(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&ba(e)}let Ls=new Set;const Nt=new Map;let ki=!1;function aa(n,e){var a={f:0,v:n,reactions:null,equals:oi,rv:0,wv:0};return a}function j(n,e){const a=aa(n);return Oi(a),a}function Dl(n,e=!1,a=!0){const r=aa(n);return e||(r.equals=li),r}function p(n,e,a=!1){Fe!==null&&(!ut||(Fe.f&Sr)!==0)&&ci()&&(Fe.f&(Ln|Dt|Zs|Sr))!==0&&(et===null||!ha.call(et,n))&&Xo();let r=a?_n(e):e;return ga(n,r)}function ga(n,e){if(!n.equals(e)){var a=n.v;Bt?Nt.set(n,e):Nt.set(n,a),n.v=e;var r=It.ensure();if(r.capture(n,a),(n.f&Ln)!==0){const s=n;(n.f&Mn)!==0&&Xs(s),Js(s)}n.wv=zi(),wi(n,Mn),Ue!==null&&(Ue.f&Dn)!==0&&(Ue.f&(ft|ia))===0&&(Qn===null?jl([n]):Qn.push(n)),!r.is_fork&&Ls.size>0&&!ki&&Rl()}return e}function Rl(){ki=!1;for(const n of Ls)(n.f&Dn)!==0&&vn(n,dt),Ha(n)&&ba(n);Ls.clear()}function ca(n,e=1){var a=t(n),r=e===1?a++:a--;return p(n,a),r}function La(n){p(n,n.v+1)}function wi(n,e){var a=n.reactions;if(a!==null)for(var r=a.length,s=0;s<r;s++){var i=a[s],o=i.f,c=(o&Mn)===0;if(c&&vn(i,e),(o&Ln)!==0){var l=i;lt?.delete(l),(o&ta)===0&&(o&$n&&(i.f|=ta),wi(l,dt))}else c&&((o&Dt)!==0&&kt!==null&&kt.add(i),ct(i))}}function _n(n){if(typeof n!="object"||n===null||Yt in n)return n;const e=Qs(n);if(e!==ei&&e!==Oo)return n;var a=new Map,r=ms(n),s=j(0),i=ea,o=c=>{if(ea===i)return c();var l=Fe,f=ea;at(null),qr(i);var u=c();return at(l),qr(f),u};return r&&a.set("length",j(n.length)),new Proxy(n,{defineProperty(c,l,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Zo();var u=a.get(l);return u===void 0?o(()=>{var d=j(f.value);return a.set(l,d),d}):p(u,f.value,!0),!0},deleteProperty(c,l){var f=a.get(l);if(f===void 0){if(l in c){const u=o(()=>j(qn));a.set(l,u),La(s)}}else p(f,qn),La(s);return!0},get(c,l,f){if(l===Yt)return n;var u=a.get(l),d=l in c;if(u===void 0&&(!d||ua(c,l)?.writable)&&(u=o(()=>{var b=_n(d?c[l]:qn),_=j(b);return _}),a.set(l,u)),u!==void 0){var m=t(u);return m===qn?void 0:m}return Reflect.get(c,l,f)},getOwnPropertyDescriptor(c,l){var f=Reflect.getOwnPropertyDescriptor(c,l);if(f&&"value"in f){var u=a.get(l);u&&(f.value=t(u))}else if(f===void 0){var d=a.get(l),m=d?.v;if(d!==void 0&&m!==qn)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(c,l){if(l===Yt)return!0;var f=a.get(l),u=f!==void 0&&f.v!==qn||Reflect.has(c,l);if(f!==void 0||Ue!==null&&(!u||ua(c,l)?.writable)){f===void 0&&(f=o(()=>{var m=u?_n(c[l]):qn,b=j(m);return b}),a.set(l,f));var d=t(f);if(d===qn)return!1}return u},set(c,l,f,u){var d=a.get(l),m=l in c;if(r&&l==="length")for(var b=f;b<d.v;b+=1){var _=a.get(b+"");_!==void 0?p(_,qn):b in c&&(_=o(()=>j(qn)),a.set(b+"",_))}if(d===void 0)(!m||ua(c,l)?.writable)&&(d=o(()=>j(void 0)),p(d,_n(f)),a.set(l,d));else{m=d.v!==qn;var w=o(()=>_n(f));p(d,w)}var h=Reflect.getOwnPropertyDescriptor(c,l);if(h?.set&&h.set.call(u,f),!m){if(r&&typeof l=="string"){var A=a.get("length"),C=Number(l);Number.isInteger(C)&&C>=A.v&&p(A,C+1)}La(s)}return!0},ownKeys(c){t(s);var l=Reflect.ownKeys(c).filter(d=>{var m=a.get(d);return m===void 0||m.v!==qn});for(var[f,u]of a)u.v!==qn&&!(f in c)&&l.push(f);return l},setPrototypeOf(){Jo()}})}function Ar(n){try{if(n!==null&&typeof n=="object"&&Yt in n)return n[Yt]}catch{}return n}function ql(n,e){return Object.is(Ar(n),Ar(e))}var Tr,xi,Si,Pi;function Cl(){if(Tr===void 0){Tr=window,xi=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,a=Text.prototype;Si=ua(e,"firstChild").get,Pi=ua(e,"nextSibling").get,xr(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),xr(a)&&(a.__t=void 0)}}function At(n=""){return document.createTextNode(n)}function vt(n){return Si.call(n)}function ja(n){return Pi.call(n)}function k(n,e){return vt(n)}function Ae(n,e=!1){{var a=vt(n);return a instanceof Comment&&a.data===""?ja(a):a}}function v(n,e=1,a=!1){let r=n;for(;e--;)r=ja(r);return r}function Ll(n){n.textContent=""}function Ai(){return!1}function Ml(n,e,a){return document.createElementNS(ii,n,void 0)}let Dr=!1;function El(){Dr||(Dr=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function gs(n){var e=Fe,a=Ue;at(null),_t(null);try{return n()}finally{at(e),_t(a)}}function Ti(n,e,a,r=a){n.addEventListener(e,()=>gs(a));const s=n.__on_r;s?n.__on_r=()=>{s(),r(!0)}:n.__on_r=()=>r(!0),El()}function Ol(n){Ue===null&&(Fe===null&&Wo(),Ko()),Bt&&Go()}function Fl(n,e){var a=e.last;a===null?e.last=e.first=n:(a.next=n,n.prev=a,e.last=n)}function Rt(n,e,a){var r=Ue;r!==null&&(r.f&Un)!==0&&(n|=Un);var s={ctx:tt,deps:null,nodes:null,f:n|Mn|$n,first:null,fn:e,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};if(a)try{ba(s)}catch(c){throw Vn(s),c}else e!==null&&ct(s);var i=s;if(a&&i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Sa)===0&&(i=i.first,(n&Dt)!==0&&(n&na)!==0&&i!==null&&(i.f|=na)),i!==null&&(i.parent=r,r!==null&&Fl(i,r),Fe!==null&&(Fe.f&Ln)!==0&&(n&ia)===0)){var o=Fe;(o.effects??=[]).push(i)}return s}function Ys(){return Fe!==null&&!ut}function $s(n){const e=Rt(hs,null,!1);return vn(e,Dn),e.teardown=n,e}function He(n){Ol();var e=Ue.f,a=!Fe&&(e&ft)!==0&&(e&Na)===0;if(a){var r=tt;(r.e??=[]).push(n)}else return Di(n)}function Di(n){return Rt(Oa|Io,n,!1)}function zl(n){It.ensure();const e=Rt(ia|Sa,n,!0);return(a={})=>new Promise(r=>{a.outro?$t(e,()=>{Vn(e),r(void 0)}):(Vn(e),r(void 0))})}function Ba(n){return Rt(Oa,n,!1)}function Il(n){return Rt(Zs|Sa,n,!0)}function er(n,e=0){return Rt(hs|e,n,!0)}function te(n,e=[],a=[],r=[]){wl(r,e,a,s=>{Rt(hs,()=>n(...s.map(t)),!0)})}function bs(n,e=0){var a=Rt(Dt|e,n,!0);return a}function Jn(n){return Rt(ft|Sa,n,!0)}function Ri(n){var e=n.teardown;if(e!==null){const a=Bt,r=Fe;Rr(!0),at(null);try{e.call(null)}finally{Rr(a),at(r)}}}function nr(n,e=!1){var a=n.first;for(n.first=n.last=null;a!==null;){const s=a.ac;s!==null&&gs(()=>{s.abort(Zt)});var r=a.next;(a.f&ia)!==0?a.parent=null:Vn(a,e),a=r}}function Nl(n){for(var e=n.first;e!==null;){var a=e.next;(e.f&ft)===0&&Vn(e),e=a}}function Vn(n,e=!0){var a=!1;(e||(n.f&si)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(qi(n.nodes.start,n.nodes.end),a=!0),nr(n,e&&!a),Fa(n,0),vn(n,St);var r=n.nodes&&n.nodes.t;if(r!==null)for(const i of r)i.stop();Ri(n);var s=n.parent;s!==null&&s.first!==null&&Ci(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=null}function qi(n,e){for(;n!==null;){var a=n===e?null:ja(n);n.remove(),n=a}}function Ci(n){var e=n.parent,a=n.prev,r=n.next;a!==null&&(a.next=r),r!==null&&(r.prev=a),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=a))}function $t(n,e,a=!0){var r=[];Li(n,r,!0);var s=()=>{a&&Vn(n),e&&e()},i=r.length;if(i>0){var o=()=>--i||s();for(var c of r)c.out(o)}else s()}function Li(n,e,a){if((n.f&Un)===0){n.f^=Un;var r=n.nodes&&n.nodes.t;if(r!==null)for(const c of r)(c.is_global||a)&&e.push(c);for(var s=n.first;s!==null;){var i=s.next,o=(s.f&na)!==0||(s.f&ft)!==0&&(n.f&Dt)!==0;Li(s,e,o?a:!1),s=i}}}function tr(n){Mi(n,!0)}function Mi(n,e){if((n.f&Un)!==0){n.f^=Un,(n.f&Dn)===0&&(vn(n,Mn),ct(n));for(var a=n.first;a!==null;){var r=a.next,s=(a.f&na)!==0||(a.f&ft)!==0;Mi(a,s?e:!1),a=r}var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||e)&&o.in()}}function Ei(n,e){if(n.nodes)for(var a=n.nodes.start,r=n.nodes.end;a!==null;){var s=a===r?null:ja(a);e.append(a),a=s}}let es=!1,Bt=!1;function Rr(n){Bt=n}let Fe=null,ut=!1;function at(n){Fe=n}let Ue=null;function _t(n){Ue=n}let et=null;function Oi(n){Fe!==null&&(et===null?et=[n]:et.push(n))}let Hn=null,Kn=0,Qn=null;function jl(n){Qn=n}let Fi=1,Xt=0,ea=Xt;function qr(n){ea=n}function zi(){return++Fi}function Ha(n){var e=n.f;if((e&Mn)!==0)return!0;if(e&Ln&&(n.f&=~ta),(e&dt)!==0){for(var a=n.deps,r=a.length,s=0;s<r;s++){var i=a[s];if(Ha(i)&&bi(i),i.wv>n.wv)return!0}(e&$n)!==0&&lt===null&&vn(n,Dn)}return!1}function Ii(n,e,a=!0){var r=n.reactions;if(r!==null&&!(et!==null&&ha.call(et,n)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&Ln)!==0?Ii(i,e,!1):e===i&&(a?vn(i,Mn):(i.f&Dn)!==0&&vn(i,dt),ct(i))}}function Ni(n){var e=Hn,a=Kn,r=Qn,s=Fe,i=et,o=tt,c=ut,l=ea,f=n.f;Hn=null,Kn=0,Qn=null,Fe=(f&(ft|ia))===0?n:null,et=null,va(n.ctx),ut=!1,ea=++Xt,n.ac!==null&&(gs(()=>{n.ac.abort(Zt)}),n.ac=null);try{n.f|=Rs;var u=n.fn,d=u();n.f|=Na;var m=n.deps,b=Be?.is_fork;if(Hn!==null){var _;if(b||Fa(n,Kn),m!==null&&Kn>0)for(m.length=Kn+Hn.length,_=0;_<Hn.length;_++)m[Kn+_]=Hn[_];else n.deps=m=Hn;if(Ys()&&(n.f&$n)!==0)for(_=Kn;_<m.length;_++)(m[_].reactions??=[]).push(n)}else!b&&m!==null&&Kn<m.length&&(Fa(n,Kn),m.length=Kn);if(ci()&&Qn!==null&&!ut&&m!==null&&(n.f&(Ln|dt|Mn))===0)for(_=0;_<Qn.length;_++)Ii(Qn[_],n);if(s!==null&&s!==n){if(Xt++,s.deps!==null)for(let w=0;w<a;w+=1)s.deps[w].rv=Xt;if(e!==null)for(const w of e)w.rv=Xt;Qn!==null&&(r===null?r=Qn:r.push(...Qn))}return(n.f&zt)!==0&&(n.f^=zt),d}catch(w){return di(w)}finally{n.f^=Rs,Hn=e,Kn=a,Qn=r,Fe=s,et=i,va(o),ut=c,ea=l}}function Bl(n,e){let a=e.reactions;if(a!==null){var r=Lo.call(a,n);if(r!==-1){var s=a.length-1;s===0?a=e.reactions=null:(a[r]=a[s],a.pop())}}if(a===null&&(e.f&Ln)!==0&&(Hn===null||!ha.call(Hn,e))){var i=e;(i.f&$n)!==0&&(i.f^=$n,i.f&=~ta),Js(i),Tl(i),Fa(i,0)}}function Fa(n,e){var a=n.deps;if(a!==null)for(var r=e;r<a.length;r++)Bl(n,a[r])}function ba(n){var e=n.f;if((e&St)===0){vn(n,Dn);var a=Ue,r=es;Ue=n,es=!0;try{(e&(Dt|ti))!==0?Nl(n):nr(n),Ri(n);var s=Ni(n);n.teardown=typeof s=="function"?s:null,n.wv=Fi;var i;Ds&&fl&&(n.f&Mn)!==0&&n.deps}finally{es=r,Ue=a}}}async function ji(){await Promise.resolve(),vl()}function t(n){var e=n.f,a=(e&Ln)!==0;if(Fe!==null&&!ut){var r=Ue!==null&&(Ue.f&St)!==0;if(!r&&(et===null||!ha.call(et,n))){var s=Fe.deps;if((Fe.f&Rs)!==0)n.rv<Xt&&(n.rv=Xt,Hn===null&&s!==null&&s[Kn]===n?Kn++:Hn===null?Hn=[n]:Hn.push(n));else{(Fe.deps??=[]).push(n);var i=n.reactions;i===null?n.reactions=[Fe]:ha.call(i,Fe)||i.push(Fe)}}}if(Bt&&Nt.has(n))return Nt.get(n);if(a){var o=n;if(Bt){var c=o.v;return((o.f&Dn)===0&&o.reactions!==null||Hi(o))&&(c=Xs(o)),Nt.set(o,c),c}var l=(o.f&$n)===0&&!ut&&Fe!==null&&(es||(Fe.f&$n)!==0),f=(o.f&Na)===0;Ha(o)&&(l&&(o.f|=$n),bi(o)),l&&!f&&(yi(o),Bi(o))}if(lt?.has(n))return lt.get(n);if((n.f&zt)!==0)throw n.v;return n.v}function Bi(n){if(n.f|=$n,n.deps!==null)for(const e of n.deps)(e.reactions??=[]).push(n),(e.f&Ln)!==0&&(e.f&$n)===0&&(yi(e),Bi(e))}function Hi(n){if(n.v===qn)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Nt.has(e)||(e.f&Ln)!==0&&Hi(e))return!0;return!1}function xt(n){var e=ut;try{return ut=!0,n()}finally{ut=e}}const Hl=["touchstart","touchmove"];function Vl(n){return Hl.includes(n)}const Vi=Symbol("events"),Gi=new Set,Ms=new Set;function Gl(n,e,a,r={}){function s(i){if(r.capture||Es.call(e,i),!i.cancelBubble)return gs(()=>a?.call(this,i))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?Pt(()=>{e.addEventListener(n,s,r)}):e.addEventListener(n,s,r),s}function Q(n,e,a,r,s){var i={capture:r,passive:s},o=Gl(n,e,a,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&$s(()=>{e.removeEventListener(n,o,i)})}function N(n,e,a){(e[Vi]??={})[n]=a}function Ye(n){for(var e=0;e<n.length;e++)Gi.add(n[e]);for(var a of Ms)a(n)}let Cr=null;function Es(n){var e=this,a=e.ownerDocument,r=n.type,s=n.composedPath?.()||[],i=s[0]||n.target;Cr=n;var o=0,c=Cr===n&&n.__root;if(c){var l=s.indexOf(c);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var f=s.indexOf(e);if(f===-1)return;l<=f&&(o=l)}if(i=s[o]||n.target,i!==e){Mo(n,"currentTarget",{configurable:!0,get(){return i||a}});var u=Fe,d=Ue;at(null),_t(null);try{for(var m,b=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var w=i[Vi]?.[r];w!=null&&(!i.disabled||n.target===i)&&w.call(i,n)}catch(h){m?b.push(h):m=h}if(n.cancelBubble||_===e||_===null)break;i=_}if(m){for(let h of b)queueMicrotask(()=>{throw h});throw m}}finally{n.__root=e,delete n.currentTarget,at(u),_t(d)}}}const Kl=globalThis?.window?.trustedTypes?.createPolicy("svelte-trusted-html",{createHTML:n=>n});function Wl(n){return Kl?.createHTML(n)??n}function ar(n,e=!1){var a=Ml("template");return n=n.replaceAll("<!>","<!---->"),a.innerHTML=e?Wl(n):n,a.content}function ya(n,e){var a=Ue;a.nodes===null&&(a.nodes={start:n,end:e,a:null,t:null})}function T(n,e){var a=(e&ol)!==0,r=(e&ll)!==0,s,i=!n.startsWith("<!>");return()=>{s===void 0&&(s=ar(i?n:"<!>"+n,!0),a||(s=vt(s)));var o=r||xi?document.importNode(s,!0):s.cloneNode(!0);if(a){var c=vt(o),l=o.lastChild;ya(c,l)}else ya(o,o);return o}}function Ul(n,e,a="svg"){var r=!n.startsWith("<!>"),s=`<${a}>${r?n:"<!>"+n}</${a}>`,i;return()=>{if(!i){var o=ar(s,!0),c=vt(o);i=vt(c)}var l=i.cloneNode(!0);return ya(l,l),l}}function Ql(n,e){return Ul(n,e,"svg")}function Zl(n=""){{var e=At(n+"");return ya(e,e),e}}function ka(){var n=document.createDocumentFragment(),e=document.createComment(""),a=At();return n.append(e,a),ya(e,a),n}function S(n,e){n!==null&&n.before(e)}function xe(n,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(n.__t??=n.nodeValue)&&(n.__t=a,n.nodeValue=a+"")}function Jl(n,e){return Xl(n,e)}const Ua=new Map;function Xl(n,{target:e,anchor:a,props:r={},events:s,context:i,intro:o=!0}){Cl();var c=new Set,l=d=>{for(var m=0;m<d.length;m++){var b=d[m];if(!c.has(b)){c.add(b);var _=Vl(b);for(const A of[e,document]){var w=Ua.get(A);w===void 0&&(w=new Map,Ua.set(A,w));var h=w.get(b);h===void 0?(A.addEventListener(b,Es,{passive:_}),w.set(b,1)):w.set(b,h+1)}}}};l(ps(Gi)),Ms.add(l);var f=void 0,u=zl(()=>{var d=a??e.appendChild(At());return yl(d,{pending:()=>{}},m=>{ye({});var b=tt;i&&(b.c=i),s&&(r.$$events=s),f=n(m,r)||{},ke()}),()=>{for(var m of c)for(const w of[e,document]){var b=Ua.get(w),_=b.get(m);--_==0?(w.removeEventListener(m,Es),b.delete(m),b.size===0&&Ua.delete(w)):b.set(m,_)}Ms.delete(l),d!==a&&d.parentNode?.removeChild(d)}});return Yl.set(f,u),f}let Yl=new WeakMap;class Ki{anchor;#e=new Map;#t=new Map;#n=new Map;#a=new Set;#o=!0;constructor(e,a=!0){this.anchor=e,this.#o=a}#r=()=>{var e=Be;if(this.#e.has(e)){var a=this.#e.get(e),r=this.#t.get(a);if(r)tr(r),this.#a.delete(a);else{var s=this.#n.get(a);s&&(this.#t.set(a,s.effect),this.#n.delete(a),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of this.#e){if(this.#e.delete(i),i===e)break;const c=this.#n.get(o);c&&(Vn(c.effect),this.#n.delete(o))}for(const[i,o]of this.#t){if(i===a||this.#a.has(i))continue;const c=()=>{if(Array.from(this.#e.values()).includes(i)){var f=document.createDocumentFragment();Ei(o,f),f.append(At()),this.#n.set(i,{effect:o,fragment:f})}else Vn(o);this.#a.delete(i),this.#t.delete(i)};this.#o||!r?(this.#a.add(i),$t(o,c,!1)):c()}}};#s=e=>{this.#e.delete(e);const a=Array.from(this.#e.values());for(const[r,s]of this.#n)a.includes(r)||(Vn(s.effect),this.#n.delete(r))};ensure(e,a){var r=Be,s=Ai();if(a&&!this.#t.has(e)&&!this.#n.has(e))if(s){var i=document.createDocumentFragment(),o=At();i.append(o),this.#n.set(e,{effect:Jn(()=>a(o)),fragment:i})}else this.#t.set(e,Jn(()=>a(this.anchor)));if(this.#e.set(r,e),s){for(const[c,l]of this.#t)c===e?r.unskip_effect(l):r.skip_effect(l);for(const[c,l]of this.#n)c===e?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(this.#r),r.ondiscard(this.#s)}else this.#r()}}function ne(n,e,a=!1){var r=new Ki(n),s=a?na:0;function i(o,c){r.ensure(o,c)}bs(()=>{var o=!1;e((c,l=0)=>{o=!0,i(l,c)}),o||i(!1,null)},s)}function $e(n,e){return e}function $l(n,e,a){for(var r=[],s=e.length,i,o=e.length,c=0;c<s;c++){let d=e[c];$t(d,()=>{if(i){if(i.pending.delete(d),i.done.add(d),i.pending.size===0){var m=n.outrogroups;Os(ps(i.done)),m.delete(i),m.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=r.length===0&&a!==null;if(l){var f=a,u=f.parentNode;Ll(u),u.append(f),n.items.clear()}Os(e,!l)}else i={pending:new Set(e),done:new Set},(n.outrogroups??=new Set).add(i)}function Os(n,e=!0){for(var a=0;a<n.length;a++)Vn(n[a],e)}var Lr;function en(n,e,a,r,s,i=null){var o=n,c=new Map,l=(e&ri)!==0;if(l){var f=n;o=f.appendChild(At())}var u=null,d=gi(()=>{var A=a();return ms(A)?A:A==null?[]:ps(A)}),m,b=!0;function _(){h.fallback=u,ec(h,m,o,e,r),u!==null&&(m.length===0?(u.f&wt)===0?tr(u):(u.f^=wt,Ra(u,null,o)):$t(u,()=>{u=null}))}var w=bs(()=>{m=t(d);for(var A=m.length,C=new Set,O=Be,P=Ai(),y=0;y<A;y+=1){var g=m[y],D=r(g,y),L=b?null:c.get(D);L?(L.v&&ga(L.v,g),L.i&&ga(L.i,y),P&&O.unskip_effect(L.e)):(L=nc(c,b?o:Lr??=At(),g,D,y,s,e,a),b||(L.e.f|=wt),c.set(D,L)),C.add(D)}if(A===0&&i&&!u&&(b?u=Jn(()=>i(o)):(u=Jn(()=>i(Lr??=At())),u.f|=wt)),A>C.size&&Vo(),!b)if(P){for(const[W,z]of c)C.has(W)||O.skip_effect(z.e);O.oncommit(_),O.ondiscard(()=>{})}else _();t(d)}),h={effect:w,items:c,outrogroups:null,fallback:u};b=!1}function Aa(n){for(;n!==null&&(n.f&ft)===0;)n=n.next;return n}function ec(n,e,a,r,s){var i=(r&nl)!==0,o=e.length,c=n.items,l=Aa(n.effect.first),f,u=null,d,m=[],b=[],_,w,h,A;if(i)for(A=0;A<o;A+=1)_=e[A],w=s(_,A),h=c.get(w).e,(h.f&wt)===0&&(h.nodes?.a?.measure(),(d??=new Set).add(h));for(A=0;A<o;A+=1){if(_=e[A],w=s(_,A),h=c.get(w).e,n.outrogroups!==null)for(const z of n.outrogroups)z.pending.delete(h),z.done.delete(h);if((h.f&wt)!==0)if(h.f^=wt,h===l)Ra(h,null,a);else{var C=u?u.next:l;h===n.effect.last&&(n.effect.last=h.prev),h.prev&&(h.prev.next=h.next),h.next&&(h.next.prev=h.prev),Et(n,u,h),Et(n,h,C),Ra(h,C,a),u=h,m=[],b=[],l=Aa(u.next);continue}if((h.f&Un)!==0&&(tr(h),i&&(h.nodes?.a?.unfix(),(d??=new Set).delete(h))),h!==l){if(f!==void 0&&f.has(h)){if(m.length<b.length){var O=b[0],P;u=O.prev;var y=m[0],g=m[m.length-1];for(P=0;P<m.length;P+=1)Ra(m[P],O,a);for(P=0;P<b.length;P+=1)f.delete(b[P]);Et(n,y.prev,g.next),Et(n,u,y),Et(n,g,O),l=O,u=g,A-=1,m=[],b=[]}else f.delete(h),Ra(h,l,a),Et(n,h.prev,h.next),Et(n,h,u===null?n.effect.first:u.next),Et(n,u,h),u=h;continue}for(m=[],b=[];l!==null&&l!==h;)(f??=new Set).add(l),b.push(l),l=Aa(l.next);if(l===null)continue}(h.f&wt)===0&&m.push(h),u=h,l=Aa(h.next)}if(n.outrogroups!==null){for(const z of n.outrogroups)z.pending.size===0&&(Os(ps(z.done)),n.outrogroups?.delete(z));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||f!==void 0){var D=[];if(f!==void 0)for(h of f)(h.f&Un)===0&&D.push(h);for(;l!==null;)(l.f&Un)===0&&l!==n.fallback&&D.push(l),l=Aa(l.next);var L=D.length;if(L>0){var W=(r&ri)!==0&&o===0?a:null;if(i){for(A=0;A<L;A+=1)D[A].nodes?.a?.measure();for(A=0;A<L;A+=1)D[A].nodes?.a?.fix()}$l(n,D,W)}}i&&Pt(()=>{if(d!==void 0)for(h of d)h.nodes?.a?.apply()})}function nc(n,e,a,r,s,i,o,c){var l=(o&$o)!==0?(o&tl)===0?Dl(a,!1,!1):aa(a):null,f=(o&el)!==0?aa(s):null;return{v:l,i:f,e:Jn(()=>(i(e,l??a,f??s,c),()=>{n.delete(r)}))}}function Ra(n,e,a){if(n.nodes)for(var r=n.nodes.start,s=n.nodes.end,i=e&&(e.f&wt)===0?e.nodes.start:a;r!==null;){var o=ja(r);if(i.before(r),r===s)return;r=o}}function Et(n,e,a){e===null?n.effect.first=a:e.next=a,a===null?n.effect.last=e:a.prev=e}function Wi(n,e,a=!1,r=!1,s=!1){var i=n,o="";te(()=>{var c=Ue;if(o!==(o=e()??"")&&(c.nodes!==null&&(qi(c.nodes.start,c.nodes.end),c.nodes=null),o!=="")){var l=o+"";a?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var f=ar(l);if((a||r)&&(f=vt(f)),ya(vt(f),f.lastChild),a||r)for(;vt(f);)i.before(vt(f));else i.before(f)}})}function sr(n,e,...a){var r=new Ki(n);bs(()=>{const s=e()??null;r.ensure(s,s&&(i=>s(i,...a)))},na)}function Ui(n,e,a){Ba(()=>{var r=xt(()=>e(n,a?.())||{});if(r?.destroy)return()=>r.destroy()})}const Mr=[...` 	
\r\f \v\uFEFF`];function tc(n,e,a){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),a){for(var s in a)if(a[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var c=o+i;(o===0||Mr.includes(r[o-1]))&&(c===r.length||Mr.includes(r[c]))?r=(o===0?"":r.substring(0,o))+r.substring(c+1):o=c}}return r===""?null:r}function Er(n,e=!1){var a=e?" !important;":";",r="";for(var s in n){var i=n[s];i!=null&&i!==""&&(r+=" "+s+": "+i+a)}return r}function xs(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function ac(n,e){if(e){var a="",r,s;if(Array.isArray(e)?(r=e[0],s=e[1]):r=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,c=!1,l=[];r&&l.push(...Object.keys(r).map(xs)),s&&l.push(...Object.keys(s).map(xs));var f=0,u=-1;const w=n.length;for(var d=0;d<w;d++){var m=n[d];if(c?m==="/"&&n[d-1]==="*"&&(c=!1):i?i===m&&(i=!1):m==="/"&&n[d+1]==="*"?c=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!c&&i===!1&&o===0){if(m===":"&&u===-1)u=d;else if(m===";"||d===w-1){if(u!==-1){var b=xs(n.substring(f,u).trim());if(!l.includes(b)){m!==";"&&d++;var _=n.substring(f,d).trim();a+=" "+_+";"}}f=d+1,u=-1}}}}return r&&(a+=Er(r)),s&&(a+=Er(s,!0)),a=a.trim(),a===""?null:a}return n==null?null:String(n)}function ve(n,e,a,r,s,i){var o=n.__className;if(o!==a||o===void 0){var c=tc(a,r,i);c==null?n.removeAttribute("class"):n.className=c,n.__className=a}else if(i&&s!==i)for(var l in i){var f=!!i[l];(s==null||f!==!!s[l])&&n.classList.toggle(l,f)}return i}function Ss(n,e={},a,r){for(var s in a){var i=a[s];e[s]!==i&&(a[s]==null?n.style.removeProperty(s):n.style.setProperty(s,i,r))}}function Xe(n,e,a,r){var s=n.__style;if(s!==e){var i=ac(e,r);i==null?n.removeAttribute("style"):n.style.cssText=i,n.__style=e}else r&&(Array.isArray(r)?(Ss(n,a?.[0],r[0]),Ss(n,a?.[1],r[1],"important")):Ss(n,a,r));return r}function Qi(n,e,a=!1){if(n.multiple){if(e==null)return;if(!ms(e))return cl();for(var r of n.options)r.selected=e.includes(Ma(r));return}for(r of n.options){var s=Ma(r);if(ql(s,e)){r.selected=!0;return}}(!a||e!==void 0)&&(n.selectedIndex=-1)}function sc(n){var e=new MutationObserver(()=>{Qi(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),$s(()=>{e.disconnect()})}function rc(n,e,a=e){var r=new WeakSet,s=!0;Ti(n,"change",i=>{var o=i?"[selected]":":checked",c;if(n.multiple)c=[].map.call(n.querySelectorAll(o),Ma);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");c=l&&Ma(l)}a(c),Be!==null&&r.add(Be)}),Ba(()=>{var i=e();if(n===document.activeElement){var o=ss??Be;if(r.has(o))return}if(Qi(n,i,s),s&&i===void 0){var c=n.querySelector(":checked");c!==null&&(i=Ma(c),a(i))}n.__value=i,s=!1}),sc(n)}function Ma(n){return"__value"in n?n.__value:n.value}const ic=Symbol("is custom element"),oc=Symbol("is html"),lc=Bo?"progress":"PROGRESS";function jt(n,e){var a=Zi(n);a.value===(a.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==lc)||(n.value=e??"")}function nn(n,e,a,r){var s=Zi(n);s[e]!==(s[e]=a)&&(e==="loading"&&(n[jo]=a),a==null?n.removeAttribute(e):typeof a!="string"&&cc(n).includes(e)?n[e]=a:n.setAttribute(e,a))}function Zi(n){return n.__attributes??={[ic]:n.nodeName.includes("-"),[oc]:n.namespaceURI===ii}}var Or=new Map;function cc(n){var e=n.getAttribute("is")||n.nodeName,a=Or.get(e);if(a)return a;Or.set(e,a=[]);for(var r,s=n,i=Element.prototype;i!==s;){r=Eo(s);for(var o in r)r[o].set&&a.push(o);s=Qs(s)}return a}function Yn(n,e,a=e){var r=new WeakSet;Ti(n,"input",async s=>{var i=s?n.defaultValue:n.value;if(i=Ps(n)?As(i):i,a(i),Be!==null&&r.add(Be),await ji(),i!==(i=e())){var o=n.selectionStart,c=n.selectionEnd,l=n.value.length;if(n.value=i??"",c!==null){var f=n.value.length;o===c&&c===l&&f>l?(n.selectionStart=f,n.selectionEnd=f):(n.selectionStart=o,n.selectionEnd=Math.min(c,f))}}}),xt(e)==null&&n.value&&(a(Ps(n)?As(n.value):n.value),Be!==null&&r.add(Be)),er(()=>{var s=e();if(n===document.activeElement){var i=ss??Be;if(r.has(i))return}Ps(n)&&s===As(n.value)||n.type==="date"&&!s&&!n.value||s!==n.value&&(n.value=s??"")})}function Ps(n){var e=n.type;return e==="number"||e==="range"}function As(n){return n===""?null:+n}function Fr(n,e){return n===e||n?.[Yt]===e}function Tt(n={},e,a,r){return Ba(()=>{var s,i;return er(()=>{s=i,i=[],xt(()=>{n!==a(...i)&&(e(n,...i),s&&Fr(a(...s),n)&&e(null,...s))})}),()=>{Pt(()=>{i&&Fr(a(...i),n)&&e(null,...i)})}}),n}let Qa=!1;function uc(n){var e=Qa;try{return Qa=!1,[n(),Qa]}finally{Qa=e}}function ge(n,e,a,r){var s=(a&rl)!==0,i=(a&il)!==0,o=r,c=!0,l=()=>(c&&(c=!1,o=i?xt(r):r),o),f;if(s){var u=Yt in n||No in n;f=ua(n,e)?.set??(u&&e in n?C=>n[e]=C:void 0)}var d,m=!1;s?[d,m]=uc(()=>n[e]):d=n[e],d===void 0&&r!==void 0&&(d=l(),f&&(Qo(),f(d)));var b;if(b=()=>{var C=n[e];return C===void 0?l():(c=!0,C)},(a&sl)===0)return b;if(f){var _=n.$$legacy;return(function(C,O){return arguments.length>0?((!O||_||m)&&f(O?b():C),C):b()})}var w=!1,h=((a&al)!==0?_s:gi)(()=>(w=!1,b()));s&&t(h);var A=Ue;return(function(C,O){if(arguments.length>0){const P=O?t(h):s?_n(C):C;return p(h,P),w=!0,o!==void 0&&(o=P),C}return Bt&&w||(A.f&St)!==0?h.v:t(h)})}const dc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(dc);const fc=`
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
`;class mc{ctx=null;node=null;gainNode=null;ready=!1;queue=[];observeCallback=null;compileResolve=null;reloadResolve=null;async init(){if(this.ctx)return;this.ctx=new AudioContext({sampleRate:44100});const e="/get-score/",[a,r,s]=await Promise.all([fetch(`${e}wasm-pkg/gb_daw_wasm.js`).then(c=>c.text()),fetch(`${e}audio-processor.js`).then(c=>c.text()),fetch(`${e}wasm-pkg/gb_daw_wasm_bg.wasm`).then(c=>c.arrayBuffer())]),i=new Blob([fc,a,`
`,r],{type:"application/javascript"}),o=URL.createObjectURL(i);await this.ctx.audioWorklet.addModule(o),URL.revokeObjectURL(o),this.node=new AudioWorkletNode(this.ctx,"gb-apu-processor",{outputChannelCount:[2]}),this.gainNode=this.ctx.createGain(),this.node.connect(this.gainNode),this.gainNode.connect(this.ctx.destination),this.node.port.onmessage=c=>{const l=c.data;if(l.type==="ready"){this.ready=!0;for(const f of this.queue)this.node.port.postMessage(f);this.queue=[]}else if(l.type==="compile_result"){if(l.error)this.compileResolve?.reject(new Error(l.error));else{const f=l.debug?JSON.parse(l.debug):null;this.compileResolve?.resolve(f)}this.compileResolve=null}else if(l.type==="reload_result"){if(l.error)this.reloadResolve?.reject(new Error(l.error));else{const f=l.debug?JSON.parse(l.debug):null;this.reloadResolve?.resolve(f)}this.reloadResolve=null}else if(l.type==="peaks")this.observeCallback?.({peaks:l.data,position:null});else if(l.type==="observation"){const f=l.position&&l.position!=="null"?JSON.parse(l.position):null;this.observeCallback?.({peaks:l.peaks,position:f})}else l.type==="error"&&console.error("AudioEngine error:",l.message)},this.node.port.postMessage({type:"init",wasmBytes:s})}async resume(){await this.ctx?.resume()}send(e){this.ready&&this.node?this.node.port.postMessage(e):this.queue.push(e)}setPlaying(e){this.send({type:"set_playing",value:e})}loadSong(e){this.send({type:"load_song",json:JSON.stringify(e)})}requestPeaks(){this.send({type:"take_peaks"})}observe(){this.send({type:"observe"})}onObserve(e){this.observeCallback=e}compileTdb(e,a){return new Promise((r,s)=>{this.compileResolve={resolve:r,reject:s},this.send({type:"compile_tdb",text:e,name:a})})}reloadTdb(e,a){return new Promise((r,s)=>{this.reloadResolve={resolve:r,reject:s},this.send({type:"reload_tdb",text:e,name:a})})}liveSetConfig(e){this.send({type:"live_set_config",configJson:e})}liveUpdateConfig(e){this.send({type:"live_update_config",configJson:e})}liveTrigger(){this.send({type:"live_trigger"})}liveKeyDown(e,a){this.send({type:"live_key_down",semitone:e,velocity:a})}liveKeyUp(e){this.send({type:"live_key_up",semitone:e})}liveSetActive(e){this.send({type:"live_set_active",value:e})}liveLoadDemo(e,a,r){this.send({type:"live_load_demo",tdbText:e,instrumentName:a,demoJson:r})}liveStopDemo(){this.send({type:"live_stop_demo"})}setMuteMask(e){this.send({type:"set_mute_mask",mask:e})}setFocus(e){this.send({type:"set_focus",json:JSON.stringify(e)})}setVolume(e){this.gainNode&&(this.gainNode.gain.value=e)}}const pc=`## scale/maj
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
`,zr="gb-daw-user-tdb";class hc{libraryText=pc;#e=j(_n(localStorage.getItem(zr)??""));get userText(){return t(this.#e)}set userText(e){p(this.#e,e,!0)}#t=q(()=>this.userText?this.userText+(this.userText.endsWith(`
`)?`
`:`

`)+this.libraryText:this.libraryText);get text(){return t(this.#t)}set text(e){p(this.#t,e)}#n=j("");get selectedSection(){return t(this.#n)}set selectedSection(e){p(this.#n,e,!0)}#a=j(0);get revision(){return t(this.#a)}set revision(e){p(this.#a,e,!0)}#o=j(null);get songAst(){return t(this.#o)}set songAst(e){p(this.#o,e,!0)}#r=j("");get selectedPatternLabel(){return t(this.#r)}set selectedPatternLabel(e){p(this.#r,e,!0)}#s=j(0);get selectedPartIndex(){return t(this.#s)}set selectedPartIndex(e){p(this.#s,e,!0)}#i=j("");get selectedInstrument(){return t(this.#i)}set selectedInstrument(e){p(this.#i,e,!0)}get librarySections(){const e=new Set,a=/^## (.+)$/gm;let r;for(;(r=a.exec(this.libraryText))!==null;)e.add(r[1]);return e}get userSections(){const e=new Set,a=/^## (.+)$/gm;let r;for(;(r=a.exec(this.userText))!==null;)e.add(r[1]);return e}isLibraryOnly(e){return this.librarySections.has(e)&&!this.userSections.has(e)}copyToUser(e){const a=this.getSectionContentFrom(this.libraryText,e);if(a===null)return;const r=this.userText.endsWith(`
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
`?r-1:r;this.userText=this.userText.slice(0,c)+this.userText.slice(o),this.persist()}resetUser(){this.userText="",this.persist()}persist(){localStorage.setItem(zr,this.userText)}reload(){this.revision++}}const ee=new hc;let Ir=!1;async function ys(){Ir||(await wasm_bindgen(),Ir=!0)}async function Ji(n){await ys();const e=wasm_bindgen.list_instruments(n);return JSON.parse(e)}async function vc(n,e){await ys();const a=wasm_bindgen.resolve_instrument(n,e);return JSON.parse(a)}async function _c(n){return await ys(),wasm_bindgen.voice_config_to_toml(JSON.stringify(n))}async function Nr(n){await ys();const e=wasm_bindgen.voice_config_activity(JSON.stringify(n));return JSON.parse(e)}class gc{#e=j(null);get position(){return t(this.#e)}set position(e){p(this.#e,e,!0)}#t=j(null);get sourceMap(){return t(this.#t)}set sourceMap(e){p(this.#t,e,!0)}#n=j(!1);get playing(){return t(this.#n)}set playing(e){p(this.#n,e,!0)}updatePosition(e){this.position=e}}const Pe=new gc;class bc{#e=j(null);get region(){return t(this.#e)}set region(e){p(this.#e,e,!0)}bridge=null;setBridge(e){this.bridge=e}setRegion(e){this.region=e,this.bridge?.setFocus(e)}clearRegion(){this.setRegion(null)}get totalDuration(){return Pe.sourceMap?.timeline?.total_duration_secs??0}get isFullSong(){return this.region?this.region.start_secs<=0&&this.region.end_secs>=this.totalDuration:!0}get effectiveRegion(){return this.region?this.region:{start_secs:0,end_secs:this.totalDuration}}notchInPart(e,a,r){const s=a.part_start_secs[r],i=a.part_duration_secs[r];if(s==null||i==null||i<=0)return null;const o=e-s;return o<0||o>i?null:o/i}notchInClip(e,a,r,s,i){const o=a.part_start_secs[r];if(o==null)return null;const c=a.clip_timings[r]?.[s]?.[i];if(!c||c.duration_secs<=0)return null;const l=o+c.offset_secs,f=e-l;return f<0||f>c.duration_secs?null:f/c.duration_secs}partTimeRange(e,a){const r=e.part_start_secs[a],s=e.part_duration_secs[a];return r==null||s==null||s<=0?null:{start_secs:r,end_secs:r+s}}clipTimeRange(e,a,r,s){const i=e.part_start_secs[a];if(i==null)return null;const o=e.clip_timings[a]?.[r]?.[s];return!o||o.duration_secs<=0?null:{start_secs:i+o.offset_secs,end_secs:i+o.offset_secs+o.duration_secs}}}const Ke=new bc,jr="gb-daw-theme";class yc{#e=j("system");get mode(){return t(this.#e)}set mode(e){p(this.#e,e,!0)}#t=j("dark");get _systemPref(){return t(this.#t)}set _systemPref(e){p(this.#t,e,!0)}#n=q(()=>this.mode==="system"?this._systemPref:this.mode);get resolved(){return t(this.#n)}set resolved(e){p(this.#n,e)}constructor(){const e=window.matchMedia("(prefers-color-scheme: dark)");this._systemPref=e.matches?"dark":"light",e.addEventListener("change",r=>{this._systemPref=r.matches?"dark":"light"});const a=localStorage.getItem(jr);(a==="dark"||a==="light"||a==="system")&&(this.mode=a)}toggle(){this.setMode(this.resolved==="dark"?"light":"dark")}setMode(e){this.mode=e,localStorage.setItem(jr,e)}}const Fn=new yc;class kc{#e=j(_n(new Set));get mutedPartTracks(){return t(this.#e)}set mutedPartTracks(e){p(this.#e,e,!0)}#t=j(_n(new Set));get soloPartTracks(){return t(this.#t)}set soloPartTracks(e){p(this.#t,e,!0)}#n=j(_n(new Set));get mutedPatternLabels(){return t(this.#n)}set mutedPatternLabels(e){p(this.#n,e,!0)}#a=j(_n(new Set));get soloPatternLabels(){return t(this.#a)}set soloPatternLabels(e){p(this.#a,e,!0)}toggleMutePartTrack(e){const a=new Set(this.mutedPartTracks);a.has(e)?a.delete(e):a.add(e),this.mutedPartTracks=a}toggleSoloPartTrack(e){const a=new Set(this.soloPartTracks);a.has(e)?a.delete(e):a.add(e),this.soloPartTracks=a}toggleMutePatternLabel(e){const a=new Set(this.mutedPatternLabels);a.has(e)?a.delete(e):a.add(e),this.mutedPatternLabels=a}toggleSoloPatternLabel(e){const a=new Set(this.soloPatternLabels);a.has(e)?a.delete(e):a.add(e),this.soloPatternLabels=a}isPartTrackAudible(e){return!(this.mutedPartTracks.has(e)||this.soloPartTracks.size>0&&!this.soloPartTracks.has(e))}isPatternLabelAudible(e){return!(this.mutedPatternLabels.has(e)||this.soloPatternLabels.size>0&&!this.soloPatternLabels.has(e))}clear(){this.mutedPartTracks=new Set,this.soloPartTracks=new Set,this.mutedPatternLabels=new Set,this.soloPatternLabels=new Set}computeMask(e,a,r,s){if(!e||!r||s==null)return 0;const i=e.parts[a];if(!i)return 0;let o=0;for(let c=0;c<i.track_indices.length;c++){const l=i.track_indices[c],f=i.track_voice_offsets[c],u=i.track_voice_counts[c];if(!this.isPartTrackAudible(l)){for(let d=0;d<u;d++)o|=1<<f+d;continue}if(this.mutedPatternLabels.size>0||this.soloPatternLabels.size>0){const d=r.parts.find(h=>h.label===s);if(!d)continue;const m=d.tracks[l];if(!m)continue;const b=m.clips.find(h=>h.name!=="gap");if(!b)continue;const _=`${b.name}@${s}`,w=e.patterns[_];if(!w)continue;for(const h of w.voices)this.isPatternLabelAudible(h.track_label)||(o|=1<<f+h.voice)}}return o>>>0}}const On=new kc;class wc{#e=j(null);get play(){return t(this.#e)}set play(e){p(this.#e,e,!0)}#t=j(null);get stop(){return t(this.#t)}set stop(e){p(this.#t,e,!0)}#n=j(!1);get playing(){return t(this.#n)}set playing(e){p(this.#n,e,!0)}}const Cn=new wc,xc=`# play-button
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
`;function Sc(n){const e=new Map;let a="";for(const r of n.split(`
`))r.startsWith("# ")?a=r.slice(2).trim():a&&r.trim()&&(e.set(a,r.trim()),a="");return e}const Pc=Sc(xc);class Ac{#e=j("");get current(){return t(this.#e)}set current(e){p(this.#e,e,!0)}set(e){this.current=Pc.get(e)??""}clear(){this.current=""}}const ue=new Ac;var Tc=T("<button> </button>"),Dc=T('<span class="hover-help svelte-1h259us"> </span>'),Rc=T('<button class="transport-btn svelte-1h259us">⏹</button>'),qc=T('<button class="transport-btn svelte-1h259us">⏹</button>'),Cc=T('<button class="focus-clear svelte-1h259us" title="Clear focus">&times;</button>'),Lc=T('<div><span class="focus-label svelte-1h259us">Focus</span> <input class="focus-input svelte-1h259us" type="number" step="0.1" min="0"/> <span class="focus-sep svelte-1h259us">&ndash;</span> <input class="focus-input svelte-1h259us" type="number" step="0.1" min="0"/> <!></div>'),Mc=T('<span class="error svelte-1h259us"> </span>'),Ec=T('<div class="transport svelte-1h259us"><button class="transport-btn svelte-1h259us"> </button> <!> <!> <div class="volume-control svelte-1h259us"><span class="volume-icon svelte-1h259us">&#9834;</span> <input class="volume-slider svelte-1h259us" type="range" min="0" max="1" step="0.01" aria-label="Volume"/></div> <!> <!></div>'),Oc=T('<div class="top-bar svelte-1h259us"><div class="mode-tabs svelte-1h259us"><span class="brand svelte-1h259us">Get</span> <!></div> <!> <!> <button class="theme-toggle svelte-1h259us" title="Toggle theme"> </button></div>');function Fc(n,e){ye(e,!0);let a=j("stopped"),r=j("not-initialized"),s=j(null),i=null,o=j(null),c=null,l=j(.75);He(()=>{e.bridge.onObserve(M=>{Pe.updatePosition(M.position)})});function f(){u(),c=setInterval(()=>e.bridge.observe(),50)}function u(){c&&(clearInterval(c),c=null)}function d(M){M.target instanceof HTMLInputElement||M.target instanceof HTMLTextAreaElement||M.target instanceof HTMLSelectElement||(M.code==="Space"?(M.preventDefault(),_()):M.code==="Escape"&&(t(a)!=="stopped"||Cn.playing)&&(M.preventDefault(),h()))}He(()=>(window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d))),He(()=>{e.mode==="instrument"&&!Cn.playing&&t(a)==="playing"&&(p(a,"stopped"),Pe.playing=!1,Pe.updatePosition(null),u())}),He(()=>{On.mutedPartTracks,On.soloPartTracks,On.mutedPatternLabels,On.soloPatternLabels;const M=Pe.sourceMap,V=Pe.position,U=ee.songAst;if(!Pe.playing){e.bridge.setMuteMask(0);return}const G=V?.part_idx??ee.selectedPartIndex,Y=U?.score.sequence[G]?.part_name??null,re=On.computeMask(M,G,U,Y);e.bridge.setMuteMask(re)}),He(()=>{const M=ee.text,V=ee.selectedSection;if(!(t(a)!=="playing"||!V)&&e.mode!=="instrument")return i&&clearTimeout(i),i=setTimeout(async()=>{try{const U=M.endsWith(`
`)?M:M+`
`,Z=await e.bridge.reloadTdb(U,V);Z&&(Pe.sourceMap=Z),p(o,V,!0),p(s,null)}catch(U){p(s,U instanceof Error?U.message:String(U),!0)}},300),()=>{i&&(clearTimeout(i),i=null)}});async function m(){if(t(r)!=="ready"){p(r,"loading");try{await e.bridge.init(),p(r,"ready")}catch(M){console.error("Failed to init audio bridge:",M),p(r,"error")}}}function b(){return e.mode==="instrument"?Cn.playing:t(a)==="playing"}async function _(){if(p(s,null),e.mode==="instrument"){Cn.playing?(Cn.stop?.(),p(a,"stopped"),Pe.playing=!1,Pe.updatePosition(null),u()):(Cn.playing=!0,Cn.play?.(),p(a,"playing"),Pe.playing=!0,f());return}if(t(a)==="playing"){e.bridge.setPlaying(!1),p(a,"paused"),Pe.playing=!1,u();return}if(t(a)==="paused"){t(o)!==ee.selectedSection?await w():(e.bridge.setPlaying(!0),p(a,"playing"),Pe.playing=!0,f());return}await w()}async function w(){if(!ee.selectedSection){p(s,"Select a pattern first");return}if(await m(),t(r)==="ready"){await e.bridge.resume();try{const M=ee.text.endsWith(`
`)?ee.text:ee.text+`
`,V=await e.bridge.compileTdb(M,ee.selectedSection);V&&(Pe.sourceMap=V),p(o,ee.selectedSection,!0),p(a,"playing"),Pe.playing=!0,e.bridge.setPlaying(!0),f()}catch(M){p(s,M instanceof Error?M.message:String(M),!0)}}}function h(){if(e.mode==="instrument"){Cn.stop?.(),p(a,"stopped"),Pe.playing=!1,Pe.updatePosition(null),u();return}e.bridge.setPlaying(!1),p(a,"stopped"),Pe.playing=!1,Pe.updatePosition(null),u()}function A(M){const V=parseFloat(M.target.value);p(l,V,!0),e.bridge.setVolume(V)}function C(M){const V=parseFloat(M.target.value);if(isNaN(V))return;const U=Ke.totalDuration,Z=Math.max(0,Math.min(V,U)),G=Ke.effectiveRegion,Y=Math.max(Z+.1,G.end_secs);Z<=0&&Y>=U?Ke.clearRegion():Ke.setRegion({start_secs:Z,end_secs:Y})}function O(M){const V=parseFloat(M.target.value);if(isNaN(V))return;const U=Ke.totalDuration,Z=Math.max(0,Math.min(V,U)),G=Ke.effectiveRegion,Y=Math.min(Z-.1,G.start_secs);Y<=0&&Z>=U?Ke.clearRegion():Ke.setRegion({start_secs:Math.max(0,Y),end_secs:Z})}const P=[{id:"song",label:"Score",hint:"mode-score"},{id:"instrument",label:"Tone",hint:"mode-tone"},{id:"help",label:"Help",hint:"mode-help"},{id:"seqn",label:"Source",hint:"mode-source"}];var y=Oc(),g=k(y),D=v(k(g),2);en(D,17,()=>P,$e,(M,V)=>{var U=Tc();let Z;var G=k(U);te(()=>{Z=ve(U,1,"mode-tab svelte-1h259us",null,Z,{active:e.mode===t(V).id}),xe(G,t(V).label)}),N("click",U,()=>e.onmode(t(V).id)),Q("mouseenter",U,()=>ue.set(t(V).hint)),S(M,U)});var L=v(g,2);{var W=M=>{var V=Dc(),U=k(V);te(()=>xe(U,ue.current)),S(M,V)};ne(L,M=>{ue.current&&M(W)})}var z=v(L,2);{var $=M=>{var V=Ec(),U=k(V),Z=k(U),G=v(U,2);{var Y=Se=>{var Ee=Rc();N("click",Ee,h),Q("mouseenter",Ee,()=>ue.set("stop-button")),S(Se,Ee)};ne(G,Se=>{t(a)!=="stopped"&&e.mode!=="instrument"&&Se(Y)})}var re=v(G,2);{var ce=Se=>{var Ee=qc();N("click",Ee,h),Q("mouseenter",Ee,()=>ue.set("stop-button")),S(Se,Ee)};ne(re,Se=>{Cn.playing&&e.mode==="instrument"&&Se(ce)})}var De=v(re,2),se=v(k(De),2),he=v(De,2);{var Le=Se=>{var Ee=Lc();let Qe;var tn=v(k(Ee),2),gn=v(tn,4),zn=v(gn,2);{var st=yn=>{var Pn=Cc();N("click",Pn,()=>Ke.clearRegion()),S(yn,Pn)};ne(zn,yn=>{Ke.isFullSong||yn(st)})}te((yn,Pn)=>{Qe=ve(Ee,1,"focus-section svelte-1h259us",null,Qe,{dimmed:Ke.isFullSong}),jt(tn,yn),jt(gn,Pn)},[()=>Ke.effectiveRegion.start_secs.toFixed(1),()=>Ke.effectiveRegion.end_secs.toFixed(1)]),Q("mouseenter",Ee,()=>ue.set("focus-region")),N("change",tn,C),N("change",gn,O),S(Se,Ee)};ne(he,Se=>{e.mode!=="instrument"&&Se(Le)})}var we=v(he,2);{var Te=Se=>{var Ee=Mc(),Qe=k(Ee);te(()=>xe(Qe,t(s))),S(Se,Ee)};ne(we,Se=>{t(s)&&Se(Te)})}te(Se=>{xe(Z,Se),jt(se,t(l))},[()=>b()?"⏸":"▶"]),N("click",U,_),Q("mouseenter",U,()=>ue.set("play-button")),Q("mouseenter",De,()=>ue.set("volume-slider")),N("input",se,A),S(M,V)};ne(z,M=>{e.mode!=="help"&&M($)})}var F=v(z,2),B=k(F);te(()=>xe(B,Fn.resolved==="dark"?"☾":"☀")),N("click",F,()=>Fn.toggle()),Q("mouseenter",F,()=>ue.set("theme-toggle")),S(n,y),ke()}Ye(["click","input","change"]);let Br=!1;async function oa(){Br||(await wasm_bindgen(),Br=!0)}async function zc(n){await oa();const e=wasm_bindgen.list_songs(n);return JSON.parse(e)}async function Ic(n,e){await oa();const a=wasm_bindgen.parse_song_ast(n,e);return JSON.parse(a)}async function Fs(n){return await oa(),wasm_bindgen.emit_song_ast(JSON.stringify(n))}async function Nc(n,e,a){await oa();const r=wasm_bindgen.rename_pattern(JSON.stringify(n),e,a);return JSON.parse(r)}async function jc(n,e,a){await oa();const r=wasm_bindgen.rename_part(JSON.stringify(n),e,a);return JSON.parse(r)}async function Bc(n,e){await oa();const a=wasm_bindgen.compile_source_map(n,e);return JSON.parse(a)}async function Hc(n){await oa();const e=wasm_bindgen.parse_part_settings_text(n);return JSON.parse(e)}const Vc=new Set(["Swing","AccentPct","Groove","Humanize","Strum"]);function za(n){return"Group"in n?Object.keys(n.Group)[0]:Object.keys(n)[0]}function rr(n){return"Group"in n?Object.values(n.Group)[0]:Object.values(n)[0]}function Gc(n,e){return Vc.has(n)?{Group:{[n]:e}}:{[n]:e}}const Kc={Bpm:120,Swing:0,AccentPct:50,Groove:"Off",ChorusRate:1.5,ChorusDepth:.5,ChorusMix:0,ChorusToDelay:0,ChorusToReverb:0,DelayTime:.375,DelayFeedback:.4,DelayDamping:.5,DelayPingPong:!1,DelayMix:0,DelayToReverb:0,ReverbSize:.5,ReverbMix:0,Sidechain:"",SidechainAmt:0,SidechainRelease:.1,TapeStopTime:1e3,TapeStartTime:200,TapeStopCurve:2,MasterDrive:0,CompThreshold:0,CompRatio:1,CompAttack:.01,CompRelease:.1,Humanize:0,Strum:0},Wc={Bpm:{min:20,max:300,step:1},Swing:{min:0,max:100,step:1},AccentPct:{min:0,max:100,step:1},ChorusRate:{min:.01,max:20,step:.01},ChorusDepth:{min:0,max:1,step:.01},ChorusMix:{min:0,max:1,step:.01},ChorusToDelay:{min:0,max:1,step:.01},ChorusToReverb:{min:0,max:1,step:.01},DelayTime:{min:.01,max:2,step:.001},DelayFeedback:{min:0,max:1,step:.01},DelayDamping:{min:0,max:1,step:.01},DelayMix:{min:0,max:1,step:.01},DelayToReverb:{min:0,max:1,step:.01},ReverbSize:{min:0,max:1.5,step:.01},ReverbMix:{min:0,max:1,step:.01},SidechainAmt:{min:0,max:1,step:.01},SidechainRelease:{min:.01,max:2,step:.01},TapeStopTime:{min:100,max:5e3,step:10},TapeStartTime:{min:50,max:5e3,step:10},TapeStopCurve:{min:1,max:4,step:.1},MasterDrive:{min:0,max:1,step:.01},CompThreshold:{min:0,max:1,step:.01},CompRatio:{min:1,max:20,step:.1},CompAttack:{min:.001,max:1,step:.001},CompRelease:{min:.01,max:2,step:.01},Humanize:{min:0,max:100,step:1},Strum:{min:0,max:200,step:1}},Ot=[{label:"Rhythm",color:"#66aacc",keys:["Bpm","Swing","AccentPct","Groove","Humanize","Strum"]},{label:"Chorus",color:"#66cc88",prefixes:["Chorus"],keys:["ChorusRate","ChorusDepth","ChorusMix","ChorusToDelay","ChorusToReverb"]},{label:"Delay",color:"#66cc88",prefixes:["Delay"],keys:["DelayTime","DelayFeedback","DelayDamping","DelayPingPong","DelayMix","DelayToReverb"]},{label:"Reverb",color:"#66cc88",prefixes:["Reverb"],keys:["ReverbSize","ReverbMix"]},{label:"Sidechain",color:"#ccaa66",prefixes:["Sidechain"],keys:["Sidechain","SidechainAmt","SidechainRelease"]},{label:"Tape Stop",color:"#cc88cc",prefixes:["Tape"],keys:["TapeStopTime","TapeStartTime","TapeStopCurve"]},{label:"Master",color:"#cc6666",prefixes:["Master","Comp"],keys:["MasterDrive","CompThreshold","CompRatio","CompAttack","CompRelease"]}],Uc=[{label:"Rhythm",color:"#3070a0",keys:Ot[0].keys},{label:"Chorus",color:"#2a8a48",prefixes:["Chorus"],keys:Ot[1].keys},{label:"Delay",color:"#2a8a48",prefixes:["Delay"],keys:Ot[2].keys},{label:"Reverb",color:"#2a8a48",prefixes:["Reverb"],keys:Ot[3].keys},{label:"Sidechain",color:"#a08030",prefixes:["Sidechain"],keys:Ot[4].keys},{label:"Tape Stop",color:"#9a50a0",prefixes:["Tape"],keys:Ot[5].keys},{label:"Master",color:"#b04040",prefixes:["Master","Comp"],keys:Ot[6].keys}];function Qc(n){return n==="light"?Uc:Ot}var Zc=T("<span>&#9656;</span>"),Jc=T('<button class="create-btn svelte-181dlmc" title="New">+</button>'),Xc=T('<div class="scroll-fade scroll-fade-top svelte-181dlmc"></div>'),Yc=T('<span class="lib-badge svelte-181dlmc">L</span>'),$c=T("<button><!> </button>"),eu=T('<div class="scroll-fade scroll-fade-bottom svelte-181dlmc"></div>'),nu=T('<div class="sidebar svelte-181dlmc"><div><!> <span class="sidebar-title svelte-181dlmc"> </span> <!></div> <div class="sidebar-items-wrap svelte-181dlmc"><!> <div class="sidebar-items svelte-181dlmc"></div> <!></div></div>');function zs(n,e){ye(e,!0);let a=ge(e,"collapsible",3,!1),r=ge(e,"defaultCollapsed",3,!1),s=j(!1);He(()=>{p(s,r())});let i=j(void 0),o=j(!1),c=j(!1),l=q(()=>a()&&t(s)?e.items.filter(F=>F.id===e.activeId):e.items);function f(){if(!t(i))return;const{scrollTop:F,scrollHeight:B,clientHeight:M}=t(i);p(o,F>1),p(c,F+M<B-1)}He(()=>{t(l),requestAnimationFrame(f)}),He(()=>{if(!t(i))return;const F=t(i),B=new ResizeObserver(f);return B.observe(F),()=>B.disconnect()});function u(){a()&&(p(s,!t(s)),t(s)||requestAnimationFrame(()=>{t(i)?.querySelector(".sidebar-item.active")?.scrollIntoView({block:"nearest"})}))}function d(){p(s,!0)}var m={collapse:d},b=nu(),_=k(b);let w;var h=k(_);{var A=F=>{var B=Zc();let M;te(()=>M=ve(B,1,"chevron svelte-181dlmc",null,M,{open:!t(s)})),S(F,B)};ne(h,F=>{a()&&F(A)})}var C=v(h,2),O=k(C),P=v(C,2);{var y=F=>{var B=Jc();N("click",B,M=>{M.stopPropagation(),e.oncreate()}),S(F,B)};ne(P,F=>{e.oncreate&&F(y)})}var g=v(_,2),D=k(g);{var L=F=>{var B=Xc();S(F,B)};ne(D,F=>{t(o)&&F(L)})}var W=v(D,2);en(W,21,()=>t(l),$e,(F,B)=>{var M=$c();let V;var U=k(M);{var Z=re=>{var ce=Yc();S(re,ce)},G=q(()=>e.libraryIds?.has(t(B).id));ne(U,re=>{t(G)&&re(Z)})}var Y=v(U,1,!0);te((re,ce)=>{V=ve(M,1,"sidebar-item svelte-181dlmc",null,V,re),M.disabled=ce,xe(Y,t(B).label)},[()=>({active:t(B).id===e.activeId,greyed:e.greyedOut?.has(t(B).id)}),()=>e.greyedOut?.has(t(B).id)]),N("click",M,()=>e.onselect(t(B).id)),S(F,M)}),Tt(W,F=>p(i,F),()=>t(i));var z=v(W,2);{var $=F=>{var B=eu();S(F,B)};ne(z,F=>{t(c)&&F($)})}return te(()=>{w=ve(_,1,"sidebar-header svelte-181dlmc",null,w,{clickable:a()}),nn(_,"role",a()?"button":void 0),nn(_,"tabindex",a()?0:void 0),xe(O,e.title)}),Q("mouseenter",b,()=>{e.hint&&ue.set(e.hint)}),N("click",_,u),N("keydown",_,F=>{(F.key==="Enter"||F.key===" ")&&(F.preventDefault(),u())}),Q("scroll",W,f),S(n,b),ke(m)}Ye(["click","keydown"]);var tu=T('<button class="seq-focus svelte-owygqe" title="Focus">&#8857;</button>'),au=T('<button class="seq-delete svelte-owygqe" title="Remove">&times;</button>'),su=T('<div class="seq-actions svelte-owygqe"><!> <!></div>'),ru=T("<span></span>"),iu=T('<div class="seq-item svelte-owygqe"><!> <button draggable="true"><!> <!></button></div>'),ou=T('<div class="seq-bar svelte-owygqe"><!> <button class="seq-add svelte-owygqe" title="Add">+</button></div>');function Ia(n,e){ye(e,!0);let a=ge(e,"activeIndex",19,()=>-1),r=ge(e,"activeProgress",3,0),s=j(-1),i=j(-1);function o(h,A){p(s,A,!0),h.dataTransfer&&(h.dataTransfer.effectAllowed="move",h.dataTransfer.setData("text/plain",String(A)))}function c(h,A){h.preventDefault(),h.dataTransfer&&(h.dataTransfer.dropEffect="move"),p(i,A,!0)}function l(){p(i,-1)}function f(h,A){h.preventDefault(),t(s)!==-1&&t(s)!==A&&e.onmove(t(s),A),p(s,-1),p(i,-1)}function u(){p(s,-1),p(i,-1)}let d=j(void 0);function m(h,A,C){if(!e.onfocusdrag)return;h.preventDefault(),h.stopPropagation();const O=y=>{if(!t(d))return;const g=t(d).querySelectorAll(".seq-block");let D=C,L=0;for(let W=0;W<g.length;W++){const z=g[W].getBoundingClientRect();if(y.clientX>=z.left&&y.clientX<=z.right){D=W,L=Math.max(0,Math.min(1,(y.clientX-z.left)/z.width));break}if(W===0&&y.clientX<z.left){D=0,L=0;break}if(W===g.length-1&&y.clientX>z.right){D=W,L=1;break}}e.onfocusdrag(A,L,D)},P=()=>{window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",P)};window.addEventListener("mousemove",O),window.addEventListener("mouseup",P)}var b=ou(),_=k(b);en(_,17,()=>e.items,$e,(h,A,C)=>{var O=iu(),P=k(O);{var y=B=>{var M=su(),V=k(M);{var U=Y=>{var re=tu();N("click",re,()=>e.onfocus(C)),S(Y,re)};ne(V,Y=>{e.onfocus&&Y(U)})}var Z=v(V,2);{var G=Y=>{var re=au();N("click",re,()=>e.ondelete(C)),S(Y,re)};ne(Z,Y=>{e.ondelete&&Y(G)})}S(B,M)};ne(P,B=>{(e.ondelete||e.onfocus)&&B(y)})}var g=v(P,2);let D;var L=k(g);{var W=B=>{var M=ka(),V=Ae(M);en(V,17,()=>e.focusNotches[C],$e,(U,Z)=>{var G=ru();te(Y=>{ve(G,1,`focus-notch ${t(Z).type??""}`,"svelte-owygqe"),Xe(G,`left: ${Y??""}%`)},[()=>(t(Z).position*100).toFixed(1)]),N("mousedown",G,Y=>m(Y,t(Z).type,C)),S(U,G)}),S(B,M)};ne(L,B=>{e.focusNotches?.[C]&&B(W)})}var z=v(L,2);{var $=B=>{var M=ka(),V=Ae(M);sr(V,()=>e.content,()=>t(A),()=>C),S(B,M)},F=B=>{var M=Zl();te(()=>xe(M,t(A).label)),S(B,M)};ne(z,B=>{e.content?B($):B(F,!1)})}te(B=>{Xe(O,t(A).weight!=null?`flex-grow: ${t(A).weight};`:""),D=ve(g,1,"seq-block svelte-owygqe",null,D,{selected:C===e.selectedIndex,playing:a()>=0&&C===a(),"drag-over":t(i)===C&&t(s)!==C,dragging:t(s)===C,"has-content":e.content!=null}),Xe(g,B)},[()=>a()>=0&&C===a()?`--pb-progress: ${(r()*100).toFixed(1)}%`:""]),N("click",g,()=>e.onselect(C)),Q("dragstart",g,B=>o(B,C)),Q("dragover",g,B=>c(B,C)),Q("dragleave",g,l),Q("drop",g,B=>f(B,C)),Q("dragend",g,u),S(h,O)});var w=v(_,2);Tt(b,h=>p(d,h),()=>t(d)),N("click",w,function(...h){e.onadd?.apply(this,h)}),S(n,b),ke()}Ye(["click","mousedown"]);function ns(n){return Object.keys(n)[0]}function Xi(n){return Object.values(n)[0]}const Hr=["Swing","AccentPct","Groove","Humanize","Strum"];function Ea(n){return n==="Accent"?"ac":n.Named}function da(n){let e=null,a=[],r=n;for(let s=0;s<2;s++)typeof r=="object"&&r!==null&&"Probable"in r?(e=r.Probable[1],r=r.Probable[0]):typeof r=="object"&&r!==null&&"ParameterLocked"in r&&(a=r.ParameterLocked[1],r=r.ParameterLocked[0]);return[r,e,a]}function ts(n){const[e]=da(n);return e==="Hit"||e==="Accent"||e==="Rest"||e==="Sustain"}function Is(n){const[e,a,r]=da(n);let s;if(e==="Hit")s="o";else if(e==="Accent")s="x";else if(e==="Rest")s=".";else if(e==="Sustain")s="-";else if(typeof e=="object"&&"Tonal"in e){const[,i]=e.Tonal;if("Degree"in i)s=String(i.Degree);else{const o=i.Note;let l=["c","","d","","e","f","","g","","a","","b"][o.base]||"?";o.offset>0&&(l+="#".repeat(o.offset)),o.offset<0&&(l+="_".repeat(-o.offset)),o.octave!==null&&(l+=o.octave),s=l}}else s="?";return r.length>0&&(s+="·"),a!==null&&(s+=`?${a}`),s}function lu(n){if("Mix"in n){const e=n.Mix,a=Object.keys(e)[0],r=Object.values(e)[0];return`${a.replace(/([a-z0-9])([A-Z])/g,"$1_$2").toLowerCase()}=${r}`}return"Velocity"in n?`velocity=${n.Velocity}`:""}function Ns(n){if(n==="Hit")return"o";if(n==="Accent")return"x";if(n==="Rest")return".";if(n==="Sustain")return"-";if(typeof n=="object"&&"Tonal"in n){const[e,a]=n.Tonal,r=e==="Accented"?">":e==="Slide"?"~":"";let s;if("Degree"in a)s=String(a.Degree);else{const i=a.Note;let c=["c","","d","","e","f","","g","","a","","b"][i.base]||"?";i.offset>0&&(c+="#".repeat(i.offset)),i.offset<0&&(c+="_".repeat(-i.offset)),i.octave!==null&&(c+=i.octave),s=c}return`${r}${s}`}if(typeof n=="object"&&"ParameterLocked"in n){const[e,a]=n.ParameterLocked,r=a.map(lu).join(",");return`${Ns(e)}{${r}}`}if(typeof n=="object"&&"Probable"in n){const[e,a]=n.Probable;return`${Ns(e)}?${a}`}return"?"}function cu(n){const[e,a,r]=da(n);let s;if(e==="Rest")s="Hit";else if(e==="Hit")s="Accent";else if(e==="Accent")s="Rest";else if(e==="Sustain")s="Rest";else return n;return s==="Rest"||(r.length>0&&(s={ParameterLocked:[s,r]}),a!==null&&(s={Probable:[s,a]})),s}function uu(n){const e=typeof n=="string"?n:Object.keys(n)[0],a=typeof n=="string"?"":Object.values(n)[0];return`${e}: ${a}`}function Yi(n){return"ToneSetting"in n?uu(n.ToneSetting):`${rs(n)}: ${ao(n)}`}const Ut=[{label:"Tone",color:"#aa88cc",keys:["Octave","Instrument","Scale","Root","Velocity"]},{label:"Arp",color:"#88ccaa",prefixes:["Arp"],keys:["Arp","ArpRate","ArpMode","ArpOctaves","ArpSlide"]},{label:"Voice",color:"#66aacc",keys:["Legato","Voices","Glide"]},{label:"Mix",color:"#ccaa66",suffixes:["Send"],keys:["Level","DrySend","ChorusSend","DelaySend","ReverbSend"]},{label:"Rhythm",color:"#cc8888",keys:["Swing","AccentPct","Groove","Humanize","Strum","StrumIdx"]}],du=[{label:"Tone",color:"#7a58a8",keys:Ut[0].keys},{label:"Arp",color:"#3a8a6a",prefixes:["Arp"],keys:Ut[1].keys},{label:"Voice",color:"#3070a0",keys:Ut[2].keys},{label:"Mix",color:"#a08030",suffixes:["Send"],keys:Ut[3].keys},{label:"Rhythm",color:"#a05050",keys:Ut[4].keys}];function $i(n){return n==="light"?du:Ut}function Vr(n,e){for(const a of e.prefixes??[])if(n.startsWith(a)&&n.length>a.length)return n.slice(a.length);for(const a of e.suffixes??[])if(n.endsWith(a)&&n.length>a.length)return n.slice(0,-a.length);return n}const eo={Octave:{min:0,max:8,step:1},Root:{min:0,max:11,step:1},Velocity:{min:0,max:127,step:1},ArpRate:{min:1,max:64,step:1},ArpOctaves:{min:1,max:4,step:1},Legato:{min:0,max:1,step:.01},Voices:{min:1,max:8,step:1},Glide:{min:0,max:1,step:.01},Level:{min:0,max:1,step:.01},DrySend:{min:0,max:1,step:.01},ChorusSend:{min:0,max:1,step:.01},DelaySend:{min:0,max:1,step:.01},ReverbSend:{min:0,max:1,step:.01},Swing:{min:0,max:100,step:1},AccentPct:{min:0,max:100,step:1},Humanize:{min:0,max:100,step:1},Strum:{min:0,max:200,step:1},StrumIdx:{min:0,max:15,step:1}},no={Octave:3,Instrument:"",Scale:"",Root:0,Velocity:100,Arp:"Off",ArpRate:4,ArpMode:"Up",ArpOctaves:1,ArpSlide:!1,Legato:.8,Voices:1,Glide:0,Level:1,DrySend:1,ChorusSend:0,DelaySend:0,ReverbSend:0,Swing:0,AccentPct:50,Groove:"Off",Humanize:0,Strum:0,StrumIdx:null};Ut.filter(n=>n.label!=="Mix");function fu(n){return $i(n).filter(e=>e.label!=="Mix")}function to(n){return n==="ArpSlide"?"boolean":n==="Scale"||n==="Instrument"||n==="Arp"||n==="ArpMode"||n==="Groove"||n==="StrumIdx"?"string":"number"}function mu(n,e){return n==="StrumIdx"&&e===null?"off":e==null||e===""?"":n==="Arp"&&typeof e=="object"&&e!==null&&"Preset"in e?e.Preset:n==="Arp"&&typeof e=="object"&&e!==null&&"Custom"in e?e.Custom.join(" "):n==="Groove"&&typeof e=="object"&&e!==null&&"Preset"in e?e.Preset:n==="Groove"&&typeof e=="object"&&e!==null&&"Custom"in e?e.Custom.join(" "):String(e)}function Gr(n,e){if(n==="Arp"&&typeof e=="string")return e.toLowerCase()==="off"?"Off":{Preset:e};if(n==="Groove"&&typeof e=="string")return e.toLowerCase()==="off"?"Off":{Preset:e};if(n==="StrumIdx"&&typeof e=="string"){if(e.toLowerCase()==="off")return null;const a=parseInt(e,10);return isNaN(a)?e:a}return n==="ArpMode"&&typeof e=="string"?{up:"Up",down:"Down",updown:"UpDown",random:"Random"}[e.toLowerCase()]??e:e}const pu=new Set(["Octave","Scale","Root","Instrument","Legato","Voices","Velocity","Glide","Arp","ArpRate","ArpMode","ArpOctaves","ArpSlide","StrumIdx"]),hu=new Set(["Level","DrySend","ChorusSend","DelaySend","ReverbSend"]),vu=new Set(["Swing","AccentPct","Groove","Humanize","Strum"]);function rs(n){return"ToneSetting"in n?Object.keys(n.ToneSetting)[0]:"Group"in n?Object.keys(n.Group)[0]:"Mix"in n?Object.keys(n.Mix)[0]:Object.keys(n)[0]}function ao(n){return"ToneSetting"in n?Object.values(n.ToneSetting)[0]:"Group"in n?Object.values(n.Group)[0]:"Mix"in n?Object.values(n.Mix)[0]:Object.values(n)[0]}function Kr(n,e){return pu.has(n)?{ToneSetting:{[n]:e}}:vu.has(n)?{Group:{[n]:e}}:hu.has(n)?{Mix:{[n]:e}}:{Mix:{[n]:e}}}function as(n){let e=0;for(const a of n){if("Beat"in a)break;e++}return e}function _u(n){const e=n.trim();if(e==="-")return"Hold";if(e===".")return"Pass";const a=parseFloat(e);return isNaN(a)?null:{Value:a}}function Wr(n){return n==="Hold"?"-":n==="Pass"?".":String(n.Value)}function js(n){let e=n.trim();e.startsWith("@")&&(e=e.slice(1));const a=e.indexOf(":");if(a<0)return null;const r=e.slice(0,a).trim();if(!r)return null;const s=e.slice(a+1).trim();if(!s)return null;const i=s.split("|"),o=[];for(const c of i){const l=c.trim().split(/\s+/).filter(Boolean),f=[];for(const u of l)if(u==="-")f.push("Hold");else if(u===".")f.push("Pass");else if(u.startsWith("*")){const d=parseInt(u.slice(1),10);if(isNaN(d)||d<1||f.length===0)return null;const m=f[f.length-1];for(let b=1;b<d;b++)f.push(m)}else{const d=parseFloat(u);if(isNaN(d))return null;f.push({Value:d})}if(f.length===0)return null;o.push(f)}return o.length===0?null:{trivia:{leading:[],trailing_comment:null},parameter:r,sections:o}}function gu(n){const e=n.events.map(a=>{const r=a.time_unit==="Seconds"?"s":"";return`${a.value}@${a.time}${r}`}).join(" ");return`$${n.parameter}: ${e}`}function bu(n){let e=n.trim();e.startsWith("$")&&(e=e.slice(1));const a=e.indexOf(":");if(a<0)return null;const r=e.slice(0,a).trim();if(!r)return null;const s=e.slice(a+1).trim();if(!s)return null;const i=s.split(/\s+/).filter(Boolean),o=[];let c=-1;for(const l of i){const f=l.indexOf("@");if(f<0)return null;const u=l.slice(0,f);let d=l.slice(f+1);const m=parseFloat(u);if(isNaN(m))return null;let b="Beats";d.endsWith("s")&&(b="Seconds",d=d.slice(0,-1));const _=parseFloat(d);if(isNaN(_)||_<=c)return null;c=_,o.push({value:m,time:_,time_unit:b})}return o.length===0?null:{trivia:{leading:[],trailing_comment:null},parameter:r,events:o}}var yu=T("<option> </option>"),ku=T('<label class="mini-label svelte-sehkf">mix <input class="clip-input num-input svelte-sehkf"/></label>'),wu=T('<span class="clip editing svelte-sehkf"><select class="clip-input name-select svelte-sehkf"><option>gap</option><!></select> <label class="mini-label svelte-sehkf">&times; <input class="clip-input num-input svelte-sehkf"/></label> <!> <button class="ok-btn svelte-sehkf">ok</button> <button class="cancel-btn svelte-sehkf">esc</button></span>'),xu=T('<span class="badge times svelte-sehkf"> </span>'),Su=T('<span class="badge mix svelte-sehkf"> </span>'),Pu=T('<button class="edit-pattern-btn svelte-sehkf" title="Edit pattern">&#9998;</button>'),Au=T("<span></span>"),Tu=T('<span role="button" tabindex="0"><span class="clip-name svelte-sehkf"> </span> <!> <!> <!> <button class="delete-btn svelte-sehkf" title="Remove clip">&times;</button> <!></span>');function Du(n,e){ye(e,!0);let a=ge(e,"progress",19,()=>-1),r=ge(e,"focusNotches",3,null),s=j(!1),i=j(""),o=j("1"),c=j("1"),l=j(!1),f=j(void 0);async function u(){t(l)||(p(i,e.clip.name,!0),p(o,String(e.clip.times),!0),p(c,String(e.clip.mix),!0),p(s,!0),await ji(),t(f)?.focus())}function d(){const O=parseFloat(t(o))||1,P=t(i)==="gap"?1:parseFloat(t(c))||1;e.onchange({name:t(i)||e.clip.name,times:O,mix:P,automation:e.clip.automation}),p(s,!1)}function m(){p(s,!1)}function b(O){O.key==="Enter"&&d(),O.key==="Escape"&&m()}function _(O,P){if(!e.onfocusdrag)return;O.stopPropagation(),O.preventDefault(),p(l,!0);const y=O.currentTarget.parentElement;if(!y)return;function g(L){const W=y.getBoundingClientRect(),z=Math.max(0,Math.min((L.clientX-W.left)/W.width,1));e.onfocusdrag(P,z)}function D(){window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",D),setTimeout(()=>{p(l,!1)},0)}window.addEventListener("mousemove",g),window.addEventListener("mouseup",D)}var w=ka(),h=Ae(w);{var A=O=>{var P=wu(),y=k(P),g=k(y);g.value=g.__value="gap";var D=v(g);en(D,17,()=>e.patterns.filter(M=>M!=="gap"),$e,(M,V)=>{var U=yu(),Z=k(U),G={};te(()=>{xe(Z,t(V)),G!==(G=t(V))&&(U.value=(U.__value=t(V))??"")}),S(M,U)}),Tt(y,M=>p(f,M),()=>t(f));var L=v(y,2),W=v(k(L)),z=v(L,2);{var $=M=>{var V=ku(),U=v(k(V));Yn(U,()=>t(c),Z=>p(c,Z)),S(M,V)};ne(z,M=>{t(i)!=="gap"&&M($)})}var F=v(z,2),B=v(F,2);N("keydown",P,b),rc(y,()=>t(i),M=>p(i,M)),Yn(W,()=>t(o),M=>p(o,M)),N("click",F,d),N("click",B,m),S(O,P)},C=O=>{var P=Tu();let y;var g=k(P),D=k(g),L=v(g,2);{var W=Z=>{var G=xu(),Y=k(G);te(()=>xe(Y,`×${e.clip.times??""}`)),S(Z,G)};ne(L,Z=>{e.clip.times!==1&&Z(W)})}var z=v(L,2);{var $=Z=>{var G=Su(),Y=k(G);te(()=>xe(Y,`mix ${e.clip.mix??""}`)),S(Z,G)};ne(z,Z=>{e.clip.mix!==1&&e.clip.name!=="gap"&&Z($)})}var F=v(z,2);{var B=Z=>{var G=Pu();N("click",G,Y=>{Y.stopPropagation(),e.oneditpattern()}),S(Z,G)};ne(F,Z=>{e.clip.name!=="gap"&&Z(B)})}var M=v(F,2),V=v(M,2);{var U=Z=>{var G=ka(),Y=Ae(G);en(Y,17,r,$e,(re,ce)=>{var De=Au();te(se=>{ve(De,1,`focus-notch ${t(ce).type??""}`,"svelte-sehkf"),Xe(De,`left: ${se??""}%`)},[()=>(t(ce).position*100).toFixed(1)]),N("mousedown",De,se=>_(se,t(ce).type)),S(re,De)}),S(Z,G)};ne(V,Z=>{r()&&Z(U)})}te(Z=>{y=ve(P,1,"clip svelte-sehkf",null,y,{playing:a()>=0,gap:e.clip.name==="gap"}),Xe(P,Z),xe(D,e.clip.name)},[()=>a()>=0?`--clip-progress: ${(a()*100).toFixed(1)}%`:""]),N("click",P,u),N("keydown",P,Z=>Z.key==="Enter"&&u()),Q("mouseenter",P,()=>ue.set("clip-block")),N("click",M,Z=>{Z.stopPropagation(),e.ondelete()}),S(O,P)};ne(h,O=>{t(s)?O(A):O(C,!1)})}S(n,w),ke()}Ye(["keydown","click","mousedown"]);var Ru=T("<button> </button>"),qu=T('<button class="tab add svelte-121sxca">+ Add</button>'),Cu=T('<div class="block-selector svelte-121sxca"><!> <!></div>');function so(n,e){ye(e,!0);let a=ge(e,"selected",3,0);var r=Cu(),s=k(r);en(s,17,()=>e.blocks,$e,(c,l,f)=>{var u=Ru();let d;var m=k(u);te(b=>{d=ve(u,1,"tab svelte-121sxca",null,d,b),xe(m,t(l))},[()=>({active:f===a(),highlighted:e.highlights?.has(f)})]),N("click",u,()=>e.onselect(f)),Q("mouseenter",u,()=>{e.hints?.[f]&&ue.set(e.hints[f])}),S(c,u)});var i=v(s,2);{var o=c=>{var l=qu();N("click",l,function(...f){e.onadd?.apply(this,f)}),S(c,l)};ne(i,c=>{e.onadd&&c(o)})}S(n,r),ke()}Ye(["click"]);var Lu=T('<input class="edit-input svelte-e57acq" type="text"/>'),Mu=T('<button class="value-display svelte-e57acq"> </button>'),Eu=T('<div><span class="label svelte-e57acq"> </span> <div class="track svelte-e57acq" role="slider"><div class="fill svelte-e57acq"></div> <div class="thumb svelte-e57acq"></div></div> <!></div>');function Bs(n,e){ye(e,!0);let a=ge(e,"min",3,0),r=ge(e,"max",3,1),s=ge(e,"step",3,.01),i=ge(e,"disabled",3,!1);function o(G){G.focus()}let c=j(!1),l=j(""),f=j(!1),u=j(void 0),d=q(()=>(e.value-a())/(r()-a())*100);function m(G){return s()>=1?String(Math.round(G)):s()>=.1?G.toFixed(1):G.toFixed(2)}function b(G){const Y=Math.min(r(),Math.max(a(),G));return Math.round(Y/s())*s()}function _(G){if(!t(u))return;const Y=t(u).getBoundingClientRect(),re=(G-Y.left)/Y.width,ce=Math.min(1,Math.max(0,re));e.onchange(b(a()+ce*(r()-a())))}function w(G){p(f,!0),G.currentTarget.setPointerCapture(G.pointerId),_(G.clientX)}function h(G){t(f)&&_(G.clientX)}function A(){p(f,!1)}function C(){p(l,m(e.value),!0),p(c,!0)}function O(){const G=parseFloat(t(l));isNaN(G)||e.onchange(b(G)),p(c,!1)}function P(){p(c,!1)}var y=Eu();let g,D;var L=k(y),W=k(L),z=v(L,2);nn(z,"tabindex",0);var $=k(z);let F;var B=v($,2);let M;Tt(z,G=>p(u,G),()=>t(u));var V=v(z,2);{var U=G=>{var Y=Lu();Ba(()=>Yn(Y,()=>t(l),re=>p(l,re))),Ui(Y,re=>o?.(re)),Q("blur",Y,O),N("keydown",Y,re=>{re.key==="Enter"&&O(),re.key==="Escape"&&P()}),S(G,Y)},Z=G=>{var Y=Mu(),re=k(Y);te(ce=>xe(re,ce),[()=>m(e.value)]),N("dblclick",Y,C),S(G,Y)};ne(V,G=>{t(c)?G(U):G(Z,!1)})}te(()=>{g=ve(y,1,"horz-slider svelte-e57acq",null,g,{disabled:i()}),D=Xe(y,"",D,{"--slider-color":e.color}),xe(W,e.label),nn(z,"aria-valuenow",e.value),nn(z,"aria-valuemin",a()),nn(z,"aria-valuemax",r()),nn(z,"aria-label",e.label),F=Xe($,"",F,{width:`${t(d)??""}%`}),M=Xe(B,"",M,{left:`${t(d)??""}%`})}),Q("mouseenter",y,()=>ue.set(e.hint||"settings-slider")),N("pointerdown",z,w),N("pointermove",z,h),N("pointerup",z,A),S(n,y),ke()}Ye(["pointerdown","pointermove","pointerup","keydown","dblclick"]);var Ou=T('<span class="label svelte-1vaxnks"> </span>'),Fu=T("<div><button></button> <!></div>");function nt(n,e){ye(e,!0);let a=ge(e,"label",3,""),r=ge(e,"disabled",3,!1);var s=Fu();let i,o;var c=k(s);let l;var f=v(c,2);{var u=d=>{var m=Ou(),b=k(m);te(()=>xe(b,a())),S(d,m)};ne(f,d=>{a()&&d(u)})}te(()=>{i=ve(s,1,"synth-toggle svelte-1vaxnks",null,i,{disabled:r()}),o=Xe(s,"",o,{"--toggle-color":e.color}),l=ve(c,1,"toggle-btn svelte-1vaxnks",null,l,{active:e.active}),nn(c,"aria-pressed",e.active),nn(c,"aria-label",a()||"toggle")}),Q("mouseenter",s,()=>{e.hint&&ue.set(e.hint)}),N("click",c,()=>{r()||e.onchange(!e.active)}),S(n,s),ke()}Ye(["click"]);var zu=T('<button class="delete-btn svelte-3gbruk" title="Delete">&times;</button>');function Ht(n,e){ye(e,!0);var a=zu();N("click",a,function(...r){e.onclick?.apply(this,r)}),Q("mouseenter",a,()=>ue.set("delete-button")),S(n,a),ke()}Ye(["click"]);var Iu=T('<input class="raw-input svelte-1lt6uwf" type="text"/>');function sa(n,e){ye(e,!0);let a=ge(e,"placeholder",3,""),r=ge(e,"initialValue",3,""),s=j(null);He(()=>{t(s)?.focus()});function i(c){if(c.key==="Enter"){c.preventDefault();const l=c.currentTarget.value.trim();l?e.onsubmit(l):e.oncancel()}else c.key==="Escape"&&(c.preventDefault(),e.oncancel())}var o=Iu();Tt(o,c=>p(s,c),()=>t(s)),te(()=>{jt(o,r()),nn(o,"placeholder",a())}),N("keydown",o,i),Q("blur",o,function(...c){e.oncancel?.apply(this,c)}),S(n,o),ke()}Ye(["keydown"]);var Nu=T('<div class="toggle-row svelte-c7ragf"><span class="setting-label svelte-c7ragf"> </span> <!></div>'),ju=T('<div class="text-row svelte-c7ragf"><span class="setting-label svelte-c7ragf"> </span> <input class="text-input svelte-c7ragf" type="text"/></div>'),Bu=T("<div><!> <!></div>"),Hu=T('<div class="settings-list svelte-c7ragf"></div>'),Vu=T('<button class="add-btn svelte-c7ragf" title="Add setting (raw text)">+</button>'),Gu=T('<div class="tabbed-settings-panel svelte-c7ragf"><!> <!> <div class="raw-add svelte-c7ragf"><!></div></div>');function ir(n,e){ye(e,!0);let a=ge(e,"inheritedSettings",19,()=>new Map),r=ge(e,"placeholder",3,"e.g. octave 4"),s=j(0),i=j(!1),o=q(()=>e.tabs[t(s)]),c=q(()=>e.tabs.map(g=>g.label));function l(g){return t(o)?Vr(g,t(o)):g}let f=q(()=>t(o)?Math.max(...t(o).keys.map(g=>Vr(g,t(o)).length))+1:6),u=q(()=>{const g=new Set;for(let D=0;D<e.tabs.length;D++)e.tabs[D].keys.some(L=>e.activeSettings.has(L))&&g.add(D);return g});function d(g){return e.activeSettings.has(g)}function m(g){return e.activeSettings.get(g)??a().get(g)??e.defaults[g]}function b(g){return mu(g,m(g))}var _=Gu(),w=k(_);so(w,{get blocks(){return t(c)},get selected(){return t(s)},get highlights(){return t(u)},onselect:g=>{p(s,g,!0)},get hints(){return e.tabHints}});var h=v(w,2);{var A=g=>{var D=Hu();let L;en(D,21,()=>t(o).keys,$e,(W,z)=>{const $=q(()=>d(t(z))),F=q(()=>e.settingType(t(z)));var B=Bu();let M;var V=k(B);{var U=ce=>{const De=q(()=>m(t(z))),se=q(()=>e.ranges[t(z)]);{let he=q(()=>l(t(z))),Le=q(()=>t(se)?.min??0),we=q(()=>t(se)?.max??1),Te=q(()=>t(se)?.step??.01),Se=q(()=>e.settingHints?.[t(z)]);Bs(ce,{get label(){return t(he)},get value(){return t(De)},get min(){return t(Le)},get max(){return t(we)},get step(){return t(Te)},get color(){return t(o).color},onchange:Ee=>e.onset(t(z),Ee),get hint(){return t(Se)}})}},Z=ce=>{const De=q(()=>m(t(z)));var se=Nu(),he=k(se),Le=k(he),we=v(he,2);{let Te=q(()=>e.settingHints?.[t(z)]);nt(we,{get active(){return t(De)},get color(){return t(o).color},onchange:Se=>e.onset(t(z),Se),get hint(){return t(Te)}})}te(Te=>xe(Le,Te),[()=>l(t(z))]),Q("mouseenter",se,()=>{e.settingHints?.[t(z)]&&ue.set(e.settingHints[t(z)])}),S(ce,se)},G=ce=>{var De=ju(),se=k(De),he=k(se),Le=v(se,2);te((we,Te)=>{xe(he,we),jt(Le,Te)},[()=>l(t(z)),()=>b(t(z))]),Q("mouseenter",De,()=>{e.settingHints?.[t(z)]&&ue.set(e.settingHints[t(z)])}),N("change",Le,we=>e.onset(t(z),we.currentTarget.value)),S(ce,De)};ne(V,ce=>{t(F)==="number"?ce(U):t(F)==="boolean"?ce(Z,1):ce(G,!1)})}var Y=v(V,2);{var re=ce=>{Ht(ce,{onclick:()=>e.ondelete(t(z))})};ne(Y,ce=>{t($)&&ce(re)})}te(()=>M=ve(B,1,"setting-row svelte-c7ragf",null,M,{unset:!t($)})),S(W,B)}),te(()=>L=Xe(D,"",L,{"--tab-color":t(o).color,"--label-width":`${t(f)??""}ch`})),S(g,D)};ne(h,g=>{t(o)&&g(A)})}var C=v(h,2),O=k(C);{var P=g=>{sa(g,{get placeholder(){return r()},onsubmit:D=>{p(i,!1),e.onadd(D)},oncancel:()=>{p(i,!1)}})},y=g=>{var D=Vu();N("click",D,()=>{p(i,!0)}),S(g,D)};ne(O,g=>{t(i)?g(P):g(y,!1)})}Q("mouseenter",_,()=>ue.set("settings-panel")),S(n,_),ke()}Ye(["change","click"]);function Ku(n,e){ye(e,!0);let a=q(()=>{const o=new Map;for(const c of e.settings)o.set(za(c),rr(c));return o});function r(o){return o==="DelayPingPong"?"boolean":o==="Sidechain"||o==="Groove"?"string":"number"}const s=["tab-part-rhythm","tab-part-chorus","tab-part-delay","tab-part-reverb","tab-part-sidechain","tab-part-tapestop","tab-part-master"],i={Bpm:"setting-Bpm",Swing:"setting-Swing",AccentPct:"setting-AccentPct",Groove:"setting-Groove",Humanize:"setting-Humanize",Strum:"setting-Strum",ChorusRate:"setting-ChorusRate",ChorusDepth:"setting-ChorusDepth",ChorusMix:"setting-ChorusMix",ChorusToDelay:"setting-ChorusToDelay",ChorusToReverb:"setting-ChorusToReverb",DelayTime:"setting-DelayTime",DelayFeedback:"setting-DelayFeedback",DelayDamping:"setting-DelayDamping",DelayPingPong:"setting-DelayPingPong",DelayMix:"setting-DelayMix",DelayToReverb:"setting-DelayToReverb",ReverbSize:"setting-ReverbSize",ReverbMix:"setting-ReverbMix",Sidechain:"setting-Sidechain",SidechainAmt:"setting-SidechainAmt",SidechainRelease:"setting-SidechainRelease",TapeStopTime:"setting-TapeStopTime",TapeStartTime:"setting-TapeStartTime",TapeStopCurve:"setting-TapeStopCurve",MasterDrive:"setting-MasterDrive",CompThreshold:"setting-CompThreshold",CompRatio:"setting-CompRatio",CompAttack:"setting-CompAttack",CompRelease:"setting-CompRelease"};{let o=q(()=>Qc(Fn.resolved));ir(n,{get tabs(){return t(o)},get activeSettings(){return t(a)},get defaults(){return Kc},get ranges(){return Wc},settingType:r,get onset(){return e.onsetsetting},get ondelete(){return e.ondeletesetting},get onadd(){return e.onaddsetting},placeholder:"e.g. bpm 140",get tabHints(){return s},get settingHints(){return i}})}ke()}var Wu=T('<button class="auto-label svelte-1fqpyfl" title="Rename parameter"> </button>'),Uu=T('<span class="section-sep svelte-1fqpyfl">|</span>'),Qu=T("<button> </button>"),Zu=T('<span class="val-wrap svelte-1fqpyfl"><!> <!></span>'),Ju=T("<!> <!>",1),Xu=T('<span class="auto-row svelte-1fqpyfl"><!> <!> <button class="add-val svelte-1fqpyfl" title="Add value">+</button> <!></span>');function Hs(n,e){ye(e,!0);let a=j(!1),r=j(null);function s(){p(a,!0)}function i(P){const y=Wn(e.auto);y.parameter=P,e.onchange(y),p(a,!1)}function o(){p(a,!1)}function c(P,y){p(r,{section:P,index:y},!0)}function l(P,y,g){const D=_u(g);if(D!==null){const L=Wn(e.auto);L.sections[P][y]=D,e.onchange(L)}p(r,null)}function f(){p(r,null)}function u(P,y){const g=Wn(e.auto);g.sections[P].splice(y,1),g.sections=g.sections.filter(D=>D.length>0),g.sections.length===0?e.ondelete():e.onchange(g)}function d(){const P=Wn(e.auto);P.sections.length===0?P.sections.push(["Pass"]):P.sections[P.sections.length-1].push("Pass"),e.onchange(P)}function m(P){return P==="Hold"?"val-hold":P==="Pass"?"val-pass":"val-number"}var b=Xu(),_=k(b);{var w=P=>{sa(P,{get initialValue(){return e.auto.parameter},onsubmit:i,oncancel:o})},h=P=>{var y=Wu(),g=k(y);te(()=>xe(g,`@${e.auto.parameter??""}`)),N("click",y,s),S(P,y)};ne(_,P=>{t(a)?P(w):P(h,!1)})}var A=v(_,2);en(A,17,()=>e.auto.sections,$e,(P,y,g)=>{var D=Ju(),L=Ae(D);{var W=$=>{var F=Uu();S($,F)};ne(L,$=>{g>0&&$(W)})}var z=v(L,2);en(z,17,()=>t(y),$e,($,F,B)=>{var M=Zu(),V=k(M);{var U=Y=>{{let re=q(()=>Wr(t(F)));sa(Y,{get initialValue(){return t(re)},onsubmit:ce=>l(g,B,ce),oncancel:f})}},Z=Y=>{var re=Qu(),ce=k(re);te((De,se)=>{ve(re,1,`val-cell ${De??""}`,"svelte-1fqpyfl"),xe(ce,se)},[()=>m(t(F)),()=>Wr(t(F))]),N("click",re,()=>c(g,B)),S(Y,re)};ne(V,Y=>{t(r)?.section===g&&t(r)?.index===B?Y(U):Y(Z,!1)})}var G=v(V,2);Ht(G,{onclick:()=>u(g,B)}),S($,M)}),S(P,D)});var C=v(A,2),O=v(C,2);Ht(O,{get onclick(){return e.ondelete}}),Q("mouseenter",b,()=>ue.set("automation-track")),N("click",C,d),S(n,b),ke()}Ye(["click"]);var Yu=T('<input class="rename-part-input svelte-cwrja0"/> <button class="header-btn ok svelte-cwrja0">ok</button> <button class="header-btn cancel svelte-cwrja0">esc</button>',1),$u=T('<span class="part-label svelte-cwrja0"> </span> <button title="Toggle settings panel">&#9881;</button> <button class="header-btn svelte-cwrja0" title="Rename part">&#9998;</button> <button class="header-btn svelte-cwrja0" title="Duplicate part">&#10697;</button> <button class="header-btn delete svelte-cwrja0" title="Delete part">&times;</button>',1),e0=T('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0">@</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: v1 v2 | v3 v4"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),n0=T('<button class="auto-add-trigger svelte-cwrja0">+@</button>'),t0=T('<div class="part-automation svelte-cwrja0"><!> <!></div>'),a0=T('<div class="part-automation-hint svelte-cwrja0"><button class="auto-add-trigger svelte-cwrja0">+@</button></div>'),s0=T('<span class="step-auto-row svelte-cwrja0"><span class="step-auto-label svelte-cwrja0"> </span> <button class="auto-add-btn cancel svelte-cwrja0">&times;</button></span>'),r0=T('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0" style="color: var(--warning)">$</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: val@beat val@beat"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),i0=T('<button class="auto-add-trigger svelte-cwrja0" style="color: var(--warning-dim, var(--warning))">+$</button>'),o0=T('<div class="part-automation svelte-cwrja0"><!> <!></div>'),l0=T('<div class="part-automation-hint svelte-cwrja0"><button class="auto-add-trigger svelte-cwrja0" style="color: var(--warning-dim, var(--warning))">+$</button></div>'),c0=T('<span class="auto-add-row svelte-cwrja0"><span class="auto-add-prefix svelte-cwrja0">@</span> <input class="auto-add-input svelte-cwrja0" placeholder="param: v1 v2 | v3 v4"/> <button class="auto-add-btn ok svelte-cwrja0">ok</button> <button class="auto-add-btn cancel svelte-cwrja0">esc</button></span>'),u0=T('<button class="auto-add-trigger svelte-cwrja0">+@</button>'),d0=T('<div class="clip-automation svelte-cwrja0"><!> <!></div>'),f0=T('<div class="clip-automation-hint svelte-cwrja0"><button class="auto-add-trigger svelte-cwrja0">+@</button></div>'),m0=T('<div draggable="true" role="listitem"><!> <!></div>'),p0=T('<button class="delete-track svelte-cwrja0" title="Remove track">&times;</button>'),h0=T('<div draggable="true" role="listitem"><span class="track-handle svelte-cwrja0" title="Drag to reorder">&#9776;</span> <button title="Mute track">M</button> <button title="Solo track">S</button> <div class="track-clips svelte-cwrja0"><!> <button class="add-clip svelte-cwrja0" title="Add clip">+</button></div> <!></div>'),v0=T('<!> <!> <div class="tracks-panel svelte-cwrja0"><!> <button class="add-track svelte-cwrja0">+ Track</button></div>',1),_0=T('<div class="part-editor svelte-cwrja0"><div class="part-header svelte-cwrja0"><!></div> <div class="part-body svelte-cwrja0"><!></div></div>');function g0(n,e){ye(e,!0),ge(e,"partSeqIdx",3,0);let a=ge(e,"activeTrackClips",3,null),r=ge(e,"focusClipNotches",3,null),s=ge(e,"automation",19,()=>[]),i=ge(e,"stepAutomation",19,()=>[]),o=j(!1),c=q(()=>e.settings.length>0),l=j(!1),f=j("");function u(){p(f,e.partName,!0),p(l,!0)}function d(){const ie=t(f).trim();if(!ie||ie===e.partName){p(l,!1);return}e.onrenamepart(ie),p(l,!1)}function m(){p(l,!1)}let b=j(-1),_=j(-1);function w(ie,be){p(b,be,!0),ie.dataTransfer&&(ie.dataTransfer.effectAllowed="move",ie.dataTransfer.setData("application/x-track",String(be)))}function h(ie,be){ie.dataTransfer?.types.includes("application/x-track")&&(ie.preventDefault(),ie.dataTransfer.dropEffect="move",p(_,be,!0))}function A(){p(_,-1)}function C(ie,be){ie.preventDefault(),t(b)!==-1&&t(b)!==be&&e.onmovetrack(t(b),be),p(b,-1),p(_,-1)}function O(){p(b,-1),p(_,-1)}let P=j(null),y=j(null);function g(ie,be,qe){ie.stopPropagation(),p(P,{track:be,clip:qe},!0),ie.dataTransfer&&(ie.dataTransfer.effectAllowed="move",ie.dataTransfer.setData("application/x-clip",`${be}:${qe}`))}function D(ie,be,qe){ie.dataTransfer?.types.includes("application/x-clip")&&(ie.preventDefault(),ie.stopPropagation(),ie.dataTransfer.dropEffect="move",p(y,{track:be,clip:qe},!0))}function L(ie){ie.stopPropagation(),p(y,null)}function W(ie,be,qe){ie.preventDefault(),ie.stopPropagation(),t(P)&&(t(P).track!==be||t(P).clip!==qe)&&e.onmoveclip(t(P).track,t(P).clip,be,qe),p(P,null),p(y,null)}function z(){p(P,null),p(y,null)}function $(ie,be){if(ie.dataTransfer?.types.includes("application/x-clip")){if(ie.preventDefault(),t(P)){const qe=e.tracks[be].length;(t(P).track!==be||t(P).clip!==qe)&&e.onmoveclip(t(P).track,t(P).clip,be,qe)}p(P,null),p(y,null)}}function F(ie){ie.dataTransfer?.types.includes("application/x-clip")&&(ie.preventDefault(),ie.dataTransfer.dropEffect="move")}function B(ie,be){return t(y)!==null&&t(y).track===ie&&t(y).clip===be}function M(ie,be){return t(P)!==null&&t(P).track===ie&&t(P).clip===be}let V=j(!1),U=j("");function Z(){p(V,!0),p(U,"")}function G(){const ie=js(t(U));ie&&e.onaddautomation&&e.onaddautomation(ie),p(V,!1),p(U,"")}function Y(){p(V,!1),p(U,"")}let re=j(!1),ce=j("");function De(){p(re,!0),p(ce,"")}function se(){const ie=bu(t(ce));ie&&e.onaddstepautomation&&e.onaddstepautomation(ie),p(re,!1),p(ce,"")}function he(){p(re,!1),p(ce,"")}let Le=j(null),we=j("");function Te(ie,be){p(Le,{track:ie,clip:be},!0),p(we,"")}function Se(ie,be){const qe=js(t(we));if(qe){const an=e.tracks[ie][be],mn=[...an.automation,qe];e.onchangeclip(ie,be,{...an,automation:mn})}p(Le,null),p(we,"")}function Ee(){p(Le,null),p(we,"")}function Qe(ie,be,qe,an){const mn=e.tracks[ie][be],H=[...mn.automation];H[qe]=an,e.onchangeclip(ie,be,{...mn,automation:H})}function tn(ie,be,qe){const an=e.tracks[ie][be],mn=an.automation.filter((H,ae)=>ae!==qe);e.onchangeclip(ie,be,{...an,automation:mn})}var gn=_0(),zn=k(gn),st=k(zn);{var yn=ie=>{var be=Yu(),qe=Ae(be),an=v(qe,2),mn=v(an,2);N("keydown",qe,H=>{H.key==="Enter"&&d(),H.key==="Escape"&&m()}),Yn(qe,()=>t(f),H=>p(f,H)),N("click",an,d),N("click",mn,m),S(ie,be)},Pn=ie=>{var be=$u(),qe=Ae(be),an=k(qe),mn=v(qe,2);let H;var ae=v(mn,2),_e=v(ae,2),Oe=v(_e,2);te(()=>{xe(an,e.partName),H=ve(mn,1,"header-btn gear svelte-cwrja0",null,H,{glow:t(c),active:t(o)})}),N("click",mn,()=>{p(o,!t(o))}),Q("mouseenter",mn,()=>ue.set("part-settings-gear")),N("click",ae,u),N("click",_e,function(...sn){e.onduplicatepart?.apply(this,sn)}),N("click",Oe,function(...sn){e.ondeletepart?.apply(this,sn)}),S(ie,be)};ne(st,ie=>{t(l)?ie(yn):ie(Pn,!1)})}var Vt=v(zn,2),Gt=k(Vt);{var Ct=ie=>{Ku(ie,{get settings(){return e.settings},get onsetsetting(){return e.onsetsettingstructured},get ondeletesetting(){return e.ondeletesettingbykey},get onaddsetting(){return e.onaddsetting}})},Kt=ie=>{var be=v0(),qe=Ae(be);{var an=Ze=>{var on=t0(),me=k(on);en(me,17,s,$e,(Je,Ne,rn)=>{Hs(Je,{get auto(){return t(Ne)},onchange:ln=>e.onchangeautomation?.(rn,ln),ondelete:()=>e.ondeleteautomation?.(rn)})});var Ie=v(me,2);{var kn=Je=>{var Ne=e0(),rn=v(k(Ne),2),ln=v(rn,2),An=v(ln,2);N("keydown",rn,E=>{E.key==="Enter"&&G(),E.key==="Escape"&&Y()}),Yn(rn,()=>t(U),E=>p(U,E)),N("click",ln,G),N("click",An,Y),S(Je,Ne)},wn=Je=>{var Ne=n0();N("click",Ne,Z),Q("mouseenter",Ne,()=>ue.set("add-automation")),S(Je,Ne)};ne(Ie,Je=>{t(V)?Je(kn):Je(wn,!1)})}S(Ze,on)},mn=Ze=>{var on=a0(),me=k(on);N("click",me,Z),Q("mouseenter",me,()=>ue.set("add-automation")),S(Ze,on)};ne(qe,Ze=>{s().length>0||t(V)?Ze(an):e.onaddautomation&&Ze(mn,1)})}var H=v(qe,2);{var ae=Ze=>{var on=o0(),me=k(on);en(me,17,i,$e,(Je,Ne,rn)=>{var ln=s0(),An=k(ln),E=k(An),I=v(An,2);te(J=>xe(E,J),[()=>gu(t(Ne))]),N("click",I,()=>e.ondeletestepautomation?.(rn)),S(Je,ln)});var Ie=v(me,2);{var kn=Je=>{var Ne=r0(),rn=v(k(Ne),2),ln=v(rn,2),An=v(ln,2);N("keydown",rn,E=>{E.key==="Enter"&&se(),E.key==="Escape"&&he()}),Yn(rn,()=>t(ce),E=>p(ce,E)),N("click",ln,se),N("click",An,he),S(Je,Ne)},wn=Je=>{var Ne=i0();N("click",Ne,De),S(Je,Ne)};ne(Ie,Je=>{t(re)?Je(kn):Je(wn,!1)})}S(Ze,on)},_e=Ze=>{var on=l0(),me=k(on);N("click",me,De),S(Ze,on)};ne(H,Ze=>{i().length>0||t(re)?Ze(ae):e.onaddstepautomation&&Ze(_e,1)})}var Oe=v(H,2),sn=k(Oe);en(sn,17,()=>e.tracks,$e,(Ze,on,me)=>{var Ie=h0();let kn;var wn=v(k(Ie),2);let Je;var Ne=v(wn,2);let rn;var ln=v(Ne,2);let An;var E=k(ln);en(E,17,()=>t(on),$e,(oe,x,R)=>{var K=m0();let le;var pe=k(K);{let Ce=q(()=>a()?.get(me)?.clipIdx===R?a().get(me).progress:-1),hn=q(()=>r()?.get(me)?.[R]??null),xn=q(()=>e.onfocusclipdrag?(mt,Wt)=>e.onfocusclipdrag(mt,Wt,me,R):void 0);Du(pe,{get clip(){return t(x)},get patterns(){return e.patterns},get progress(){return t(Ce)},get focusNotches(){return t(hn)},onchange:mt=>e.onchangeclip(me,R,mt),ondelete:()=>e.ondeleteclip(me,R),oneditpattern:()=>e.oneditpattern(t(x).name),get onfocusdrag(){return t(xn)}})}var Re=v(pe,2);{var Me=Ce=>{var hn=d0(),xn=k(hn);en(xn,17,()=>t(x).automation,$e,(Tn,In,Gn)=>{Hs(Tn,{get auto(){return t(In)},onchange:gt=>Qe(me,R,Gn,gt),ondelete:()=>tn(me,R,Gn)})});var mt=v(xn,2);{var Wt=Tn=>{var In=c0(),Gn=v(k(In),2),gt=v(Gn,2),bt=v(gt,2);N("keydown",Gn,Ve=>{Ve.key==="Enter"&&Se(me,R),Ve.key==="Escape"&&Ee()}),Yn(Gn,()=>t(we),Ve=>p(we,Ve)),N("click",gt,()=>Se(me,R)),N("click",bt,Ee),S(Tn,In)},Rn=Tn=>{var In=u0();N("click",In,()=>Te(me,R)),Q("mouseenter",In,()=>ue.set("add-automation")),S(Tn,In)};ne(mt,Tn=>{t(Le)?.track===me&&t(Le)?.clip===R?Tn(Wt):Tn(Rn,!1)})}S(Ce,hn)},Ge=Ce=>{var hn=f0(),xn=k(hn);N("click",xn,()=>Te(me,R)),Q("mouseenter",xn,()=>ue.set("add-automation")),S(Ce,hn)};ne(Re,Ce=>{t(x).automation.length>0||t(Le)?.track===me&&t(Le)?.clip===R?Ce(Me):t(x).name!=="gap"&&Ce(Ge,1)})}te(Ce=>{le=ve(K,1,"clip-wrapper svelte-cwrja0",null,le,Ce),Xe(K,`flex-grow: ${t(x).times??""};`)},[()=>({"clip-drag-over":B(me,R),"clip-dragging":M(me,R)})]),Q("dragstart",K,Ce=>g(Ce,me,R)),Q("dragover",K,Ce=>D(Ce,me,R)),Q("dragleave",K,Ce=>L(Ce)),Q("drop",K,Ce=>W(Ce,me,R)),Q("dragend",K,z),S(oe,K)});var I=v(E,2),J=v(ln,2);{var X=oe=>{var x=p0();N("click",x,()=>e.ondeletetrack(me)),S(oe,x)};ne(J,oe=>{e.tracks.length>1&&oe(X)})}te((oe,x,R)=>{kn=ve(Ie,1,"track-row svelte-cwrja0",null,kn,{"drag-over-track":t(_)===me&&t(b)!==me,"dragging-track":t(b)===me}),Je=ve(wn,1,"ms-btn mute svelte-cwrja0",null,Je,oe),rn=ve(Ne,1,"ms-btn solo svelte-cwrja0",null,rn,x),An=Xe(ln,"",An,R)},[()=>({active:On.mutedPartTracks.has(me)}),()=>({active:On.soloPartTracks.has(me)}),()=>({opacity:On.isPartTrackAudible(me)?1:.35})]),Q("dragstart",Ie,oe=>w(oe,me)),Q("dragover",Ie,oe=>{h(oe,me),F(oe)}),Q("dragleave",Ie,A),Q("drop",Ie,oe=>{C(oe,me),$(oe,me)}),Q("dragend",Ie,O),Q("mouseenter",Ie,()=>ue.set("part-clip-track")),N("click",wn,oe=>{oe.stopPropagation(),On.toggleMutePartTrack(me)}),Q("mouseenter",wn,()=>ue.set("mute-button")),N("click",Ne,oe=>{oe.stopPropagation(),On.toggleSoloPartTrack(me)}),Q("mouseenter",Ne,()=>ue.set("solo-button")),N("click",I,()=>e.onaddclip(me)),Q("mouseenter",I,()=>ue.set("add-clip")),S(Ze,Ie)});var pn=v(sn,2);N("click",pn,function(...Ze){e.onaddtrack?.apply(this,Ze)}),Q("mouseenter",pn,()=>ue.set("add-track")),S(ie,be)};ne(Gt,ie=>{t(o)?ie(Ct):ie(Kt,!1)})}Q("mouseenter",zn,()=>ue.set("part-header")),S(n,gn),ke()}Ye(["keydown","click"]);let Ur=!1;async function or(){Ur||(await wasm_bindgen(),Ur=!0)}async function ro(n){await or();const e=wasm_bindgen.parse_measure_text(n);return JSON.parse(e)}async function b0(n){await or();const e=wasm_bindgen.parse_demo_text(n);return JSON.parse(e)}function y0(n){return n.map(e=>e.map(a=>"Beat"in a?a.Beat.map(r=>Is(r)).join(""):Yi(a.Command)).join(" ")).join(" | ")}async function k0(n){await or();const e=wasm_bindgen.parse_settings_text(n);return JSON.parse(e)}function io(n,e,a,r){const s=n[e];"Beat"in s&&(s.Beat[a]=r)}async function oo(n,e,a,r){const i=(await ro(r)).find(o=>"Beat"in o);if(i&&"Beat"in i&&i.Beat.length>0){const o=n[e];if("Beat"in o)return o.Beat[a]=i.Beat[0],!0}return!1}function w0(n){n.push({Beat:["Rest"]})}function lo(n,e){n.splice(e,1)}function co(n,e,a){const r=n[e];"Beat"in r&&(r.Beat.splice(a,1),r.Beat.length===0&&n.splice(e,1))}async function Vs(n,e,a){const s=(await ro(a)).filter(i=>"Command"in i);return s.length>0?(n.splice(e,0,...s),!0):!1}function uo(n,e,a){const[r]=n.splice(e,1),s=e<a?a-1:a;n.splice(s,0,r)}function x0(n,e){ye(e,!0);let a=q(()=>{const o=new Map;for(const c of e.groupSettings)o.set(ns(c),Xi(c));for(const c of e.toneSettings){const l=Object.keys(c)[0],f=Object.values(c)[0];o.set(l,f)}return o}),r=q(()=>{const o=new Map;for(const c of e.partSettings)o.set(za(c),rr(c));return o});const s={Octave:"setting-Octave",Instrument:"setting-Instrument",Scale:"setting-Scale",Root:"setting-Root",Velocity:"setting-Velocity",Arp:"setting-Arp",ArpRate:"setting-ArpRate",ArpMode:"setting-ArpMode",ArpOctaves:"setting-ArpOctaves",ArpSlide:"setting-ArpSlide",Legato:"setting-Legato",Voices:"setting-Voices",Glide:"setting-Glide",Level:"setting-Level",DrySend:"setting-DrySend",ChorusSend:"setting-ChorusSend",DelaySend:"setting-DelaySend",ReverbSend:"setting-ReverbSend",Swing:"setting-Swing",AccentPct:"setting-AccentPct",Groove:"setting-Groove",Humanize:"setting-Humanize",Strum:"setting-Strum",StrumIdx:"setting-StrumIdx"},i=["tab-track-tone","tab-track-arp","tab-track-voice","tab-track-rhythm"];{let o=q(()=>fu(Fn.resolved));ir(n,{get tabs(){return t(o)},get activeSettings(){return t(a)},get inheritedSettings(){return t(r)},get defaults(){return no},get ranges(){return eo},get settingType(){return to},get onset(){return e.onset},get ondelete(){return e.ondelete},get onadd(){return e.onadd},placeholder:"e.g. swing 60",get tabHints(){return i},get settingHints(){return s}})}ke()}var S0=T("<button> </button>"),P0=T('<span class="division-wrap svelte-wo5v94"><!> <!></span>');function A0(n,e){ye(e,!0);let a=ge(e,"hasTonal",3,!1),r=j(!1),s=null;const i=q(()=>da(e.division)[1]),o=q(()=>da(e.division)[2]);function c(){a()||!ts(e.division)||t(o).length>0?p(r,!0):(s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,e.onchange(cu(e.division))},200))}function l(){s!==null&&(clearTimeout(s),s=null),p(r,!0)}function f(w){const[h]=da(w);return h==="Hit"?"hit":h==="Accent"?"accent":h==="Rest"?"rest":h==="Sustain"?"sustain":"tonal"}var u=P0(),d=k(u);{var m=w=>{{let h=q(()=>Is(e.division)),A=q(()=>t(o).length>0?Ns(e.division):"");sa(w,{get placeholder(){return t(h)},get initialValue(){return t(A)},onsubmit:C=>{p(r,!1),e.onedit(C)},oncancel:()=>{p(r,!1)}})}},b=w=>{var h=S0();let A,C;var O=k(h);te((P,y,g)=>{A=ve(h,1,`cell ${P??""}`,"svelte-wo5v94",A,{probable:t(i)!==null,locked:t(o).length>0}),nn(h,"title",y),C=Xe(h,"",C,{opacity:t(i)!==null?.4+.6*(t(i)/100):void 0}),xe(O,g)},[()=>f(e.division),()=>t(i)!==null?`${t(i)}% probability`+(ts(e.division)&&!a()&&t(o).length===0?" — click to cycle, double-click to edit":" — click to edit"):ts(e.division)&&!a()&&t(o).length===0?"Click to cycle, double-click to edit":"Click to edit",()=>Is(e.division)]),N("click",h,c),N("dblclick",h,l),S(w,h)};ne(d,w=>{t(r)?w(m):w(b,!1)})}var _=v(d,2);Ht(_,{get onclick(){return e.ondelete}}),Q("mouseenter",u,()=>ue.set("division-cell")),S(n,u),ke()}Ye(["click","dblclick"]);var T0=T('<span class="beat svelte-192akuh"><!> <button class="add-btn svelte-192akuh" title="Add division">+</button> <!></span>');function D0(n,e){ye(e,!0);let a=ge(e,"hasTonal",3,!1);var r=T0(),s=k(r);en(s,17,()=>e.divisions,$e,(c,l,f)=>{A0(c,{get division(){return t(l)},get hasTonal(){return a()},onchange:u=>e.onchange(f,u),ondelete:()=>e.ondeletedivision(f),onedit:u=>e.onedit(f,u)})});var i=v(s,2),o=v(i,2);Ht(o,{get onclick(){return e.ondeletebeat}}),Q("mouseenter",r,()=>ue.set("beat-cell")),N("click",i,function(...c){e.onadddivision?.apply(this,c)}),S(n,r),ke()}Ye(["click"]);var R0=T('<span class="pill-wrap svelte-1heu11r"><span class="pill svelte-1heu11r"> </span> <!></span>');function q0(n,e){ye(e,!0);var a=R0(),r=k(a),s=k(r),i=v(r,2);Ht(i,{get onclick(){return e.ondelete}}),te(o=>xe(s,o),[()=>Yi(e.command)]),Q("mouseenter",a,()=>ue.set("command-pill")),S(n,a),ke()}var C0=T('<span class="playhead svelte-frrp2o"></span>'),L0=T('<button class="insert-btn svelte-frrp2o" title="Insert command here">+</button>'),M0=T('<span draggable="true"><!></span>'),E0=T("<span><!></span> <!>",1),O0=T('<span class="measure svelte-frrp2o"><!> <!> <span><!></span> <button class="add-btn svelte-frrp2o" title="Add beat">+</button> <button class="cmd-btn svelte-frrp2o" title="Add command">cmd</button> <!></span>');function fo(n,e){ye(e,!0);let a=ge(e,"playing",3,!1),r=ge(e,"beatPosition",3,0),s=q(()=>e.items.filter(F=>"Beat"in F).length),i=q(()=>e.items.some(F=>"Beat"in F&&F.Beat.some(B=>!ts(B)))),o=j(null),c=j(null),l=j(null);function f(F){return"Beat"in F}function u(F){return"Command"in F}function d(F){const B=e.items[F];f(B)&&(B.Beat.push("Rest"),e.onchange(F,B.Beat.length-1,"Rest"))}function m(F,B){p(c,B,!0),F.dataTransfer?.setData("text/plain",String(B))}function b(){p(c,null),p(l,null)}function _(F,B){F.preventDefault(),p(l,B,!0)}function w(){p(l,null)}function h(F,B){F.preventDefault(),t(c)!==null&&t(c)!==B&&e.onreorderitem(t(c),B),p(c,null),p(l,null)}var A=O0(),C=k(A);{var O=F=>{var B=C0();te(()=>Xe(B,`left: ${r()/t(s)*100}%`)),S(F,B)};ne(C,F=>{a()&&t(s)>0&&F(O)})}var P=v(C,2);en(P,17,()=>e.items,$e,(F,B,M)=>{var V=E0(),U=Ae(V);let Z;var G=k(U);{var Y=we=>{sa(we,{placeholder:"e.g. instrument bass",onsubmit:Te=>{p(o,null),e.oninsertcommand(M,Te)},oncancel:()=>{p(o,null)}})},re=we=>{var Te=L0();N("click",Te,()=>{p(o,M,!0)}),S(we,Te)};ne(G,we=>{t(o)===M?we(Y):we(re,!1)})}var ce=v(U,2);{var De=we=>{D0(we,{get divisions(){return t(B).Beat},get hasTonal(){return t(i)},onchange:(Te,Se)=>e.onchange(M,Te,Se),onadddivision:()=>d(M),ondeletedivision:Te=>e.ondeletedivision(M,Te),ondeletebeat:()=>e.ondeleteitem(M),onedit:(Te,Se)=>e.onedit(M,Te,Se)})},se=q(()=>f(t(B))),he=we=>{var Te=M0();let Se;var Ee=k(Te);q0(Ee,{get command(){return t(B).Command},ondelete:()=>e.ondeleteitem(M)}),te(()=>Se=ve(Te,1,"draggable-command svelte-frrp2o",null,Se,{"is-dragging":t(c)===M})),Q("dragstart",Te,Qe=>m(Qe,M)),Q("dragend",Te,b),S(we,Te)},Le=q(()=>u(t(B)));ne(ce,we=>{t(se)?we(De):t(Le)&&we(he,1)})}te(()=>Z=ve(U,1,"drop-zone svelte-frrp2o",null,Z,{active:t(l)===M,dragging:t(c)!==null})),Q("dragover",U,we=>_(we,M)),Q("dragleave",U,w),Q("drop",U,we=>h(we,M)),S(F,V)});var y=v(P,2);let g;var D=k(y);{var L=F=>{sa(F,{placeholder:"e.g. instrument bass",onsubmit:B=>{p(o,null),e.oninsertcommand(e.items.length,B)},oncancel:()=>{p(o,null)}})};ne(D,F=>{t(o)===e.items.length&&F(L)})}var W=v(y,2),z=v(W,2),$=v(z,2);Ht($,{get onclick(){return e.ondeletemeasure}}),te(()=>g=ve(y,1,"drop-zone svelte-frrp2o",null,g,{active:t(l)===e.items.length,dragging:t(c)!==null})),Q("dragover",y,F=>_(F,e.items.length)),Q("dragleave",y,w),Q("drop",y,F=>h(F,e.items.length)),N("click",W,function(...F){e.onaddbeat?.apply(this,F)}),N("click",z,()=>{p(o,e.items.length,!0)}),S(n,A),ke()}Ye(["click"]);function F0(n,e){ye(e,!0);let a=ge(e,"inheritedSettings",19,()=>new Map),r=q(()=>{const o=new Map;for(const c of e.leadingCommands)"Command"in c&&o.set(rs(c.Command),ao(c.Command));return o});const s=["tab-track-tone","tab-track-arp","tab-track-voice","tab-track-mix","tab-track-rhythm"],i={Octave:"setting-Octave",Instrument:"setting-Instrument",Scale:"setting-Scale",Root:"setting-Root",Velocity:"setting-Velocity",Arp:"setting-Arp",ArpRate:"setting-ArpRate",ArpMode:"setting-ArpMode",ArpOctaves:"setting-ArpOctaves",ArpSlide:"setting-ArpSlide",Legato:"setting-Legato",Voices:"setting-Voices",Glide:"setting-Glide",Level:"setting-Level",DrySend:"setting-DrySend",ChorusSend:"setting-ChorusSend",DelaySend:"setting-DelaySend",ReverbSend:"setting-ReverbSend",Swing:"setting-Swing",AccentPct:"setting-AccentPct",Groove:"setting-Groove",Humanize:"setting-Humanize",Strum:"setting-Strum",StrumIdx:"setting-StrumIdx"};{let o=q(()=>$i(Fn.resolved));ir(n,{get tabs(){return t(o)},get activeSettings(){return t(r)},get inheritedSettings(){return a()},get defaults(){return no},get ranges(){return eo},get settingType(){return to},get onset(){return e.onsetcommand},get ondelete(){return e.ondeletecommand},get onadd(){return e.onaddcommand},placeholder:"e.g. octave 4",get tabHints(){return s},get settingHints(){return i}})}ke()}var z0=T('<button class="label svelte-1bopal2" title="Double-click to rename"> </button>'),I0=T('<button title="Toggle track settings">&#9881;</button>'),N0=T('<span class="no-measure svelte-1bopal2">&mdash;</span>'),j0=T('<div class="track-row svelte-1bopal2"><!> <!> <!> <!></div>');function B0(n,e){ye(e,!0);let a=ge(e,"playingBeat",19,()=>-1),r=j(!1),s=j(!1),i=q(()=>e.track.measures[0]?as(e.track.measures[0].items):0),o=q(()=>t(i)>0),c=q(()=>{const y=e.track.measures[e.measureIndex];return y?e.measureIndex===0?y.items.slice(t(i)):y.items:[]}),l=q(()=>e.measureIndex===0?t(i):0),f=q(()=>{const y=e.track.measures[0];return y?y.items.slice(0,t(i)):[]});var u=j0(),d=k(u);{var m=y=>{{let g=q(()=>Ea(e.track.designator)),D=q(()=>Ea(e.track.designator));sa(y,{get placeholder(){return t(g)},get initialValue(){return t(D)},onsubmit:L=>{p(r,!1),e.onrename(L)},oncancel:()=>{p(r,!1)}})}},b=y=>{var g=z0(),D=k(g);te(L=>xe(D,L),[()=>Ea(e.track.designator)]),N("dblclick",g,()=>{p(r,!0)}),S(y,g)};ne(d,y=>{t(r)?y(m):y(b,!1)})}var _=v(d,2);{var w=y=>{var g=I0();let D;te(()=>D=ve(g,1,"track-gear-btn svelte-1bopal2",null,D,{glow:t(o),active:t(s)})),N("click",g,()=>{p(s,!t(s))}),Q("mouseenter",g,()=>ue.set("track-settings-gear")),S(y,g)};ne(_,y=>{e.onsetleadingcommand&&y(w)})}var h=v(_,2);Ht(h,{get onclick(){return e.ondeletetrack}});var A=v(h,2);{var C=y=>{F0(y,{get leadingCommands(){return t(f)},get inheritedSettings(){return e.inheritedSettings},get onsetcommand(){return e.onsetleadingcommand},get ondeletecommand(){return e.ondeleteleadingcommand},get onaddcommand(){return e.onaddleadingcommand}})},O=y=>{{let g=q(()=>a()>=0),D=q(()=>a()>=0?a():0);fo(y,{get items(){return t(c)},get playing(){return t(g)},get beatPosition(){return t(D)},onchange:(L,W,z)=>e.onchange(e.measureIndex,L+t(l),W,z),onaddbeat:()=>{const L=e.track.measures[e.measureIndex];L.items.push({Beat:["Rest"]}),e.onchange(e.measureIndex,L.items.length-1,0,"Rest")},ondeletemeasure:()=>e.ondeletemeasure(e.measureIndex),ondeleteitem:L=>e.ondeleteitem(e.measureIndex,L+t(l)),ondeletedivision:(L,W)=>e.ondeletedivision(e.measureIndex,L+t(l),W),oninsertcommand:(L,W)=>e.oninsertcommand(e.measureIndex,L+t(l),W),onreorderitem:(L,W)=>e.onreorderitem(e.measureIndex,L+t(l),W+t(l)),onedit:(L,W,z)=>e.onedit(e.measureIndex,L+t(l),W,z)})}},P=y=>{var g=N0();S(y,g)};ne(A,y=>{t(s)&&e.onsetleadingcommand&&e.ondeleteleadingcommand&&e.onaddleadingcommand?y(C):e.track.measures[e.measureIndex]?y(O,1):y(P,!1)})}Q("mouseenter",u,()=>ue.set("track-row")),S(n,u),ke()}Ye(["dblclick","click"]);const H0=`<p><code>o</code> hit &middot; <code>x</code> accented hit &middot; <code>.</code> rest &middot; <code>-</code> sustain (hold previous note)</p>
<p><code>c</code>&ndash;<code>b</code> note name, optional <code>#</code> sharp / <code>_</code> flat, optional octave digit: <code>c#5</code>, <code>e_</code>, <code>f</code></p>
<p><code>0</code>&ndash;<code>9</code> scale degree relative to root/scale</p>
<p><code>></code> before a note or degree &mdash; accented (velocity 127)</p>
<p><code>~</code> before a note or degree &mdash; pitch slide without re-triggering</p>
<p><code>?N</code> after any hit/note &mdash; probability (1&ndash;99%), e.g. <code>o?50</code>, <code>c?75</code></p>
<p><code>{key=val}</code> after any hit/note &mdash; per-step parameter lock, e.g. <code>o{level=0.5}</code>, <code>c{velocity=80,chorus_send=0.8}</code></p>
<p><code>strum_idx N</code> &mdash; assign track position in strum order (0-based); <code>strum_idx off</code> to opt out</p>
<p><code>@param: values...</code> &mdash; automation track (after a track line). Linear interpolation between keyframe values. <code>-</code> hold &middot; <code>.</code> pass &middot; <code>|</code> section separator &middot; <code>*N</code> repeat</p>
<p><code>$param: value@beat</code> &mdash; step automation (part-level only). Discrete instant changes at specific beats. <code>s</code> suffix = seconds. </p>`;var V0=T('<input class="rename-input svelte-1c399gj"/> <button class="header-btn ok svelte-1c399gj">ok</button> <button class="header-btn cancel svelte-1c399gj">esc</button>',1),G0=T('<span class="selected-label svelte-1c399gj"> </span> <button class="header-btn svelte-1c399gj" title="Rename pattern">&#9998;</button> <button class="header-btn svelte-1c399gj" title="Duplicate pattern">&#10697;</button>',1),K0=T('<pre class="error svelte-1c399gj"> </pre>'),W0=T('<div class="group-content svelte-1c399gj"><!></div>'),U0=T('<button title="Mute track">M</button> <button title="Solo track">S</button>',1),Q0=T('<span class="auto-add-row svelte-1c399gj"><span class="auto-add-prefix svelte-1c399gj">@</span> <input class="auto-add-input svelte-1c399gj" placeholder="param: v1 v2 | v3 v4"/> <button class="auto-add-btn ok svelte-1c399gj">ok</button> <button class="auto-add-btn cancel svelte-1c399gj">esc</button></span>'),Z0=T('<button class="auto-add-trigger svelte-1c399gj">+@</button>'),J0=T('<div class="track-automation svelte-1c399gj"><!> <!></div>'),X0=T('<div class="track-automation-hint svelte-1c399gj"><button class="auto-add-trigger svelte-1c399gj">+@</button></div>'),Y0=T('<div class="track-container svelte-1c399gj"><div draggable="true" role="listitem"><span class="track-handle svelte-1c399gj" title="Drag to reorder">&#9776;</span> <!> <!></div> <!></div>'),$0=T('<div class="group-content svelte-1c399gj"><!> <button class="add-track svelte-1c399gj">+ Track</button></div>'),ed=T('<div class="group-detail svelte-1c399gj"><div class="group-toolbar svelte-1c399gj"><button title="Toggle group settings">&#9881;</button> <button class="group-delete-btn svelte-1c399gj" title="Delete group">&times;</button> <div><!></div></div> <!></div>'),nd=T("<div><!></div> <!>",1),td=T('<p class="placeholder svelte-1c399gj">Loading...</p>'),ad=T('<p class="placeholder svelte-1c399gj">Select a pattern to edit.</p>'),sd=T('<div class="pattern-editor svelte-1c399gj"><div class="header svelte-1c399gj"><span class="title svelte-1c399gj">Pattern</span> <!></div> <!> <!> <div class="score-help svelte-1c399gj"><!></div></div>');function rd(n,e){ye(e,!0);let a=ge(e,"partSettings",19,()=>[]),r=j(null),s=j(!1),i=j(""),o=j(0),c=j(0),l=j(!1),f=q(()=>ee.selectedPatternLabel),u=q(()=>ee.songAst?.patterns.find(E=>E.label===t(f))??null),d=q(()=>t(u)?t(u).groups:null);He(()=>{t(d)&&t(o)>=t(d).length&&p(o,Math.max(0,t(d).length-1),!0)});let m=q(()=>t(d)&&t(o)<t(d).length?t(d)[t(o)]:null),b=q(()=>t(m)?Math.max(...t(m).tracks.map(E=>E.measures.length),0):0),_=q(()=>Array.from({length:t(b)},(E,I)=>({label:String(I+1)})));He(()=>{t(c)>=t(b)&&p(c,Math.max(0,t(b)-1),!0)});function w(E){let I=0;for(const J of E.tracks)I=Math.max(I,J.measures.length);return Math.max(I,1)}let h=q(()=>t(d)?t(d).map((E,I)=>({label:`Group ${I+1}`,weight:w(E)})):[]),A=q(()=>{if(!Pe.playing||!Pe.position||!Pe.sourceMap||!t(f)||!t(d))return null;const E=Pe.position;for(let I=0;I<E.tracks.length;I++){const J=E.tracks[I];if(J.done||!J.pattern_key.startsWith(t(f)+"@"))continue;let X=J.measure_idx;for(let oe=0;oe<t(d).length;oe++){const x=Math.max(...t(d)[oe].tracks.map(R=>R.measures.length),0);if(X<x)return{groupIdx:oe,localMeasureIdx:X,beatTime:J.beat_time};X-=x}return null}return null}),C=q(()=>t(A)?.groupIdx??-1),O=q(()=>!t(A)||t(A).groupIdx!==t(o)?-1:t(A).localMeasureIdx),P=q(()=>{if(!t(A)||t(C)<0||!t(d))return 0;const E=t(d)[t(C)];if(!E)return 0;const I=Math.max(...E.tracks.map(R=>R.measures.length),1),J=E.tracks[0];if(!J)return 0;const X=J.measures[t(A).localMeasureIdx],oe=X?X.items.filter(R=>"Beat"in R).length:1,x=oe>0?t(A).beatTime/oe:0;return Math.min((t(A).localMeasureIdx+x)/I,1)}),y=q(()=>{if(!t(A)||t(O)<0||!t(d))return 0;const E=t(d)[t(o)];if(!E)return 0;const I=E.tracks[0];if(!I)return 0;const J=I.measures[t(O)],X=J?J.items.filter(oe=>"Beat"in oe).length:1;return X>0?Math.min(t(A).beatTime/X,1):0});function g(E){return!t(A)||t(A).groupIdx!==t(o)||t(A).localMeasureIdx!==t(c)?-1:t(A).beatTime}let D=j(-1),L=j(-1);function W(E,I){p(D,I,!0),E.dataTransfer&&(E.dataTransfer.effectAllowed="move",E.dataTransfer.setData("application/x-pattern-track",String(I)))}function z(E,I){E.dataTransfer?.types.includes("application/x-pattern-track")&&(E.preventDefault(),E.dataTransfer.dropEffect="move",p(L,I,!0))}function $(){p(L,-1)}function F(E,I){if(E.preventDefault(),t(D)!==-1&&t(D)!==I&&t(d)){const J=t(d)[t(o)],[X]=J.tracks.splice(t(D),1);J.tracks.splice(I,0,X),G()}p(D,-1),p(L,-1)}function B(){p(D,-1),p(L,-1)}function M(){if(!ee.songAst||!t(f)||!t(u))return;const E=new Set(ee.songAst.patterns.map(oe=>oe.label));let I=`${t(f)}_copy`,J=2;for(;E.has(I);)I=`${t(f)}_copy_${J}`,J++;const X={...Wn(t(u)),label:I};ee.songAst.patterns.push(X),ee.selectedPatternLabel=I,G()}function V(){t(f)&&(p(i,t(f),!0),p(s,!0))}async function U(){if(!ee.songAst||!t(f)||!t(i).trim()){p(s,!1);return}const E=t(i).trim(),I=t(f);if(E===I){p(s,!1);return}try{ee.songAst=await Nc(ee.songAst,I,E),ee.selectedPatternLabel=E,p(s,!1),G()}catch(J){p(r,J instanceof Error?J.message:String(J),!0),p(s,!1)}}function Z(){p(s,!1)}async function G(){if(!(!ee.songAst||!ee.selectedSection)){p(r,null);try{const E=await Fs(ee.songAst);ee.replaceSectionContent(ee.selectedSection,E)}catch(E){p(r,E instanceof Error?E.message:String(E),!0)}}}function Y(E,I,J,X,oe){t(d)&&(io(t(d)[t(o)].tracks[E].measures[I].items,J,X,oe),G())}function re(){if(!t(d))return;const E={leading:[],trailing_comment:null};t(d)[t(o)].tracks.push({trivia:E,designator:{Named:"xx"},measures:[{items:[{Beat:["Rest"]}]}],automation:[]}),G()}function ce(E,I){if(!t(d))return;const J=t(d)[t(o)].tracks[E];I==="ac"?J.designator="Accent":J.designator={Named:I},G()}function De(E){t(d)&&(t(d).splice(E,1),G())}function se(E){t(d)&&(t(d)[t(o)].tracks.splice(E,1),G())}function he(E,I){t(d)&&(t(d)[t(o)].tracks[E].measures.splice(I,1),G())}function Le(E,I,J){t(d)&&(lo(t(d)[t(o)].tracks[E].measures[I].items,J),G())}function we(E,I,J,X){t(d)&&(co(t(d)[t(o)].tracks[E].measures[I].items,J,X),G())}async function Te(E,I,J,X){if(t(d))try{await Vs(t(d)[t(o)].tracks[E].measures[I].items,J,X)&&G()}catch(oe){p(r,oe instanceof Error?oe.message:String(oe),!0)}}function Se(E,I,J,X){t(d)&&(uo(t(d)[t(o)].tracks[E].measures[I].items,J,X),G())}async function Ee(E){if(t(d))try{const I=await k0(E),J=t(d)[t(o)];J.group_settings.push(...I.group_settings),J.tone_settings.push(...I.tone_settings),G()}catch(I){p(r,I instanceof Error?I.message:String(I),!0)}}function Qe(E,I){if(!t(d))return;I=Gr(E,I);const J=t(d)[t(o)];if(Hr.includes(E)){const X=J.group_settings.findIndex(x=>ns(x)===E),oe={[E]:I};X>=0?J.group_settings[X]=oe:J.group_settings.push(oe)}else{const X=J.tone_settings.findIndex(x=>Object.keys(x)[0]===E),oe={[E]:I};X>=0?J.tone_settings[X]=oe:J.tone_settings.push(oe)}G()}function tn(E){if(!t(d))return;const I=t(d)[t(o)];if(Hr.includes(E)){const J=I.group_settings.findIndex(X=>ns(X)===E);J>=0&&I.group_settings.splice(J,1)}else{const J=I.tone_settings.findIndex(X=>Object.keys(X)[0]===E);J>=0&&I.tone_settings.splice(J,1)}G()}let gn=q(()=>t(m)!=null&&(t(m).group_settings.length>0||t(m).tone_settings.length>0)),zn=q(()=>{const E=new Map;for(const I of a())E.set(za(I),rr(I));if(t(m)){for(const I of t(m).group_settings)E.set(ns(I),Xi(I));for(const I of t(m).tone_settings){const J=Object.keys(I)[0],X=Object.values(I)[0];E.set(J,X)}}return E});async function st(E,I,J,X,oe){if(t(d))try{await oo(t(d)[t(o)].tracks[E].measures[I].items,J,X,oe)&&G()}catch(x){p(r,x instanceof Error?x.message:String(x),!0)}}function yn(E,I,J){if(!t(d))return;J=Gr(I,J);const X=t(d)[t(o)].tracks[E].measures[0]?.items;if(!X)return;const oe=as(X);for(let x=0;x<oe;x++){const R=X[x];if("Command"in R&&rs(R.Command)===I){X[x]={Command:Kr(I,J)},G();return}}X.splice(oe,0,{Command:Kr(I,J)}),G()}function Pn(E,I){if(!t(d))return;const J=t(d)[t(o)].tracks[E].measures[0]?.items;if(!J)return;const X=as(J);for(let oe=0;oe<X;oe++){const x=J[oe];if("Command"in x&&rs(x.Command)===I){J.splice(oe,1),G();return}}}async function Vt(E,I){if(!t(d))return;const J=t(d)[t(o)].tracks[E];J.measures[0]||(J.measures[0]={items:[]});const X=J.measures[0].items,oe=as(X);try{await Vs(X,oe,I)&&G()}catch(x){p(r,x instanceof Error?x.message:String(x),!0)}}function Gt(){if(!t(d))return;const E={leading:[],trailing_comment:null};t(d).push({trivia:E,group_settings:[],tone_settings:[],tracks:[]}),p(o,t(d).length-1),G()}function Ct(E,I){if(!t(d))return;const[J]=t(d).splice(E,1);t(d).splice(I,0,J),t(o)===E?p(o,I,!0):E<t(o)&&I>=t(o)?ca(o,-1):E>t(o)&&I<=t(o)&&ca(o),G()}function Kt(){if(!t(d))return;const E=t(d)[t(o)];for(const I of E.tracks)I.measures.push({items:[{Beat:["Rest"]}]});p(c,Math.max(...E.tracks.map(I=>I.measures.length),1)-1),G()}function ie(E){if(!t(d))return;const I=t(d)[t(o)];for(const X of I.tracks)E<X.measures.length&&X.measures.splice(E,1);const J=Math.max(...I.tracks.map(X=>X.measures.length),0);t(c)>=J&&p(c,Math.max(0,J-1),!0),G()}function be(E,I){if(!t(d))return;const J=t(d)[t(o)];for(const X of J.tracks)if(E<X.measures.length&&I<X.measures.length){const[oe]=X.measures.splice(E,1);X.measures.splice(I,0,oe)}t(c)===E?p(c,I,!0):E<t(c)&&I>=t(c)?ca(c,-1):E>t(c)&&I<=t(c)&&ca(c),G()}let qe=j(-1),an=j("");function mn(E,I,J){t(d)&&(t(d)[t(o)].tracks[E].automation[I]=J,G())}function H(E,I){t(d)&&(t(d)[t(o)].tracks[E].automation.splice(I,1),G())}function ae(E){p(qe,E,!0),p(an,"")}function _e(E){if(!t(d))return;const I=js(t(an));I&&(t(d)[t(o)].tracks[E].automation.push(I),G()),p(qe,-1),p(an,"")}function Oe(){p(qe,-1),p(an,"")}var sn=sd(),pn=k(sn),Ze=v(k(pn),2);{var on=E=>{var I=V0(),J=Ae(I),X=v(J,2),oe=v(X,2);N("keydown",J,x=>{x.key==="Enter"&&U(),x.key==="Escape"&&Z()}),Yn(J,()=>t(i),x=>p(i,x)),N("click",X,U),N("click",oe,Z),S(E,I)},me=E=>{var I=ka(),J=Ae(I);{var X=oe=>{var x=G0(),R=Ae(x),K=k(R),le=v(R,2),pe=v(le,2);te(()=>xe(K,t(f))),N("click",le,V),N("click",pe,M),S(oe,x)};ne(J,oe=>{t(f)&&oe(X)})}S(E,I)};ne(Ze,E=>{t(s)?E(on):E(me,!1)})}var Ie=v(pn,2);{var kn=E=>{var I=K0(),J=k(I);te(()=>xe(J,t(r))),S(E,I)};ne(Ie,E=>{t(r)&&E(kn)})}var wn=v(Ie,2);{var Je=E=>{var I=nd(),J=Ae(I),X=k(J);Ia(X,{get items(){return t(h)},get selectedIndex(){return t(o)},get activeIndex(){return t(C)},get activeProgress(){return t(P)},onselect:R=>{p(o,R,!0)},onmove:Ct,onadd:Gt});var oe=v(J,2);{var x=R=>{var K=ed(),le=k(K),pe=k(le);let Re;var Me=v(pe,2),Ge=v(Me,2);let Ce;var hn=k(Ge);Ia(hn,{get items(){return t(_)},get selectedIndex(){return t(c)},get activeIndex(){return t(O)},get activeProgress(){return t(y)},onselect:Rn=>{t(l)||p(c,Rn,!0)},onmove:(Rn,Tn)=>{t(l)||be(Rn,Tn)},onadd:()=>{t(l)||Kt()},ondelete:Rn=>{t(l)||ie(Rn)}});var xn=v(le,2);{var mt=Rn=>{var Tn=W0(),In=k(Tn);x0(In,{get groupSettings(){return t(m).group_settings},get toneSettings(){return t(m).tone_settings},get partSettings(){return a()},onset:Qe,ondelete:tn,onadd:Ee}),S(Rn,Tn)},Wt=Rn=>{var Tn=$0(),In=k(Tn);en(In,17,()=>t(m).tracks,$e,(gt,bt,Ve)=>{const gr=q(()=>t(bt).designator==="Accent"?null:Ea(t(bt).designator));var br=Y0(),yt=k(br);let yr,kr;var wr=v(k(yt),2);{var Ao=bn=>{const je=q(()=>Ea(t(bt).designator));var un=U0(),En=Ae(un);let Lt;var Pa=v(En,2);let rt;te((jn,Mt)=>{Lt=ve(En,1,"ms-btn mute svelte-1c399gj",null,Lt,jn),rt=ve(Pa,1,"ms-btn solo svelte-1c399gj",null,rt,Mt)},[()=>({active:On.mutedPatternLabels.has(t(je))}),()=>({active:On.soloPatternLabels.has(t(je))})]),N("click",En,jn=>{jn.stopPropagation(),On.toggleMutePatternLabel(t(je))}),Q("mouseenter",En,()=>ue.set("mute-button")),N("click",Pa,jn=>{jn.stopPropagation(),On.toggleSoloPatternLabel(t(je))}),Q("mouseenter",Pa,()=>ue.set("solo-button")),S(bn,un)};ne(wr,bn=>{t(bt).designator!=="Accent"&&bn(Ao)})}var To=v(wr,2);{let bn=q(()=>g());B0(To,{get track(){return t(bt)},get measureIndex(){return t(c)},get playingBeat(){return t(bn)},onchange:(je,un,En,Lt)=>Y(Ve,je,un,En,Lt),ondeletetrack:()=>se(Ve),ondeletemeasure:je=>he(Ve,je),ondeleteitem:(je,un)=>Le(Ve,je,un),ondeletedivision:(je,un,En)=>we(Ve,je,un,En),oninsertcommand:(je,un,En)=>Te(Ve,je,un,En),onreorderitem:(je,un,En)=>Se(Ve,je,un,En),onrename:je=>ce(Ve,je),onedit:(je,un,En,Lt)=>st(Ve,je,un,En,Lt),onsetleadingcommand:(je,un)=>yn(Ve,je,un),ondeleteleadingcommand:je=>Pn(Ve,je),onaddleadingcommand:je=>Vt(Ve,je),get inheritedSettings(){return t(zn)}})}var Do=v(yt,2);{var Ro=bn=>{var je=J0(),un=k(je);en(un,17,()=>t(bt).automation,$e,(rt,jn,Mt)=>{Hs(rt,{get auto(){return t(jn)},onchange:Ga=>mn(Ve,Mt,Ga),ondelete:()=>H(Ve,Mt)})});var En=v(un,2);{var Lt=rt=>{var jn=Q0(),Mt=v(k(jn),2),Ga=v(Mt,2),Co=v(Ga,2);N("keydown",Mt,Ka=>{Ka.key==="Enter"&&_e(Ve),Ka.key==="Escape"&&Oe()}),Yn(Mt,()=>t(an),Ka=>p(an,Ka)),N("click",Ga,()=>_e(Ve)),N("click",Co,Oe),S(rt,jn)},Pa=rt=>{var jn=Z0();N("click",jn,()=>ae(Ve)),Q("mouseenter",jn,()=>ue.set("add-automation")),S(rt,jn)};ne(En,rt=>{t(qe)===Ve?rt(Lt):rt(Pa,!1)})}S(bn,je)},qo=bn=>{var je=X0(),un=k(je);N("click",un,()=>ae(Ve)),Q("mouseenter",un,()=>ue.set("add-automation")),S(bn,je)};ne(Do,bn=>{t(bt).automation.length>0||t(qe)===Ve?bn(Ro):bn(qo,!1)})}te(bn=>{yr=ve(yt,1,"track-wrapper svelte-1c399gj",null,yr,{"drag-over-track":t(L)===Ve&&t(D)!==Ve,"dragging-track":t(D)===Ve}),kr=Xe(yt,"",kr,bn)},[()=>({opacity:t(gr)!=null&&!On.isPatternLabelAudible(t(gr))?.35:1})]),Q("dragstart",yt,bn=>W(bn,Ve)),Q("dragover",yt,bn=>z(bn,Ve)),Q("dragleave",yt,$),Q("drop",yt,bn=>F(bn,Ve)),Q("dragend",yt,B),S(gt,br)});var Gn=v(In,2);N("click",Gn,re),Q("mouseenter",Gn,()=>ue.set("add-track")),S(Rn,Tn)};ne(xn,Rn=>{t(l)?Rn(mt):Rn(Wt,!1)})}te(()=>{Re=ve(pe,1,"group-gear-btn svelte-1c399gj",null,Re,{glow:t(gn),active:t(l)}),Ce=ve(Ge,1,"seq-bar-slot svelte-1c399gj",null,Ce,{disabled:t(l)})}),N("click",pe,()=>{p(l,!t(l))}),Q("mouseenter",pe,()=>ue.set("group-settings-gear")),N("click",Me,()=>De(t(o))),Q("mouseenter",Ge,()=>ue.set("pattern-measure-bar")),S(R,K)};ne(oe,R=>{t(m)&&R(x)})}Q("mouseenter",J,()=>ue.set("pattern-group-bar")),S(E,I)},Ne=E=>{var I=td();S(E,I)},rn=E=>{var I=ad();S(E,I)};ne(wn,E=>{t(d)?E(Je):t(f)&&!t(r)?E(Ne,1):t(f)||E(rn,2)})}var ln=v(wn,2),An=k(ln);Wi(An,()=>H0),Q("mouseenter",pn,()=>ue.set("pattern-header")),S(n,sn),ke()}Ye(["keydown","click"]);var id=T('<pre class="error svelte-etlaox"> </pre>'),od=T('<input class="rename-input svelte-etlaox"/> <button class="ctrl-btn ok svelte-etlaox">ok</button> <button class="ctrl-btn cancel svelte-etlaox">esc</button>',1),ld=T('<span class="song-name svelte-etlaox"> </span> <button class="ctrl-btn svelte-etlaox" title="Rename song">&#9998;</button> <button class="ctrl-btn svelte-etlaox" title="Duplicate song">&#10697;</button>',1),cd=T('<div class="song-controls svelte-etlaox"><!></div>'),ud=T('<div class="parts-bar svelte-etlaox"><!> <button class="ctrl-btn repeat-btn svelte-etlaox" title="Repeat selected part">&#8634;</button></div>'),dd=T('<p class="placeholder svelte-etlaox">Loading...</p>'),fd=T('<p class="placeholder svelte-etlaox">Select a song to arrange.</p>'),md=T('<div class="song-mode svelte-etlaox"><div class="left-column svelte-etlaox"><div class="song-sidebar svelte-etlaox"><!></div> <div class="pattern-sidebar svelte-etlaox"><!></div></div> <div class="zone-1 svelte-etlaox"><!> <!> <!></div> <div class="zone-2 svelte-etlaox"><!></div> <div class="zone-3 svelte-etlaox"><!></div></div>');function pd(n,e){ye(e,!0);let a=j(_n([])),r=q(()=>t(a).includes(ee.selectedSection)?ee.selectedSection:""),s=q(()=>ee.songAst),i=q(()=>t(s)?t(s).patterns.map(x=>x.label):[]),o=q(()=>t(s)?t(s).patterns.filter(x=>x.label!=="gap").map(x=>x.label):[]),c=j(null),l=j(!1),f=j(""),u=q(()=>ee.selectedPartIndex),d=q(()=>t(s)&&t(u)<t(s).score.sequence.length?t(s).score.sequence[t(u)].part_name:null),m=q(()=>t(s)&&t(d)?t(s).parts.find(x=>x.label===t(d))??null:null),b=q(()=>t(s)?t(s).score.sequence.map(x=>({label:x.part_name})):[]),_=q(()=>{if(!t(m))return new Set;const x=new Set;for(const R of t(m).tracks)for(const K of R.clips)K.name!=="gap"&&x.add(K.name);return x});He(()=>{if(t(m)){for(const x of t(m).tracks)for(const R of x.clips)if(R.name!=="gap"){ee.selectedPatternLabel=R.name;return}}});let w=q(()=>{if(!t(m))return;const x=new Set;for(const R of t(o))t(_).has(R)||x.add(R);return x.size>0?x:void 0}),h=q(()=>Pe.playing?Pe.position?.part_idx??-1:-1),A=q(()=>{if(!Pe.playing||!Pe.position||!Pe.sourceMap||!t(s))return null;const x=Pe.position,K=Pe.sourceMap.parts[x.part_idx];if(!K)return null;const le=new Map;for(let pe=0;pe<x.tracks.length;pe++){const Re=x.tracks[pe];if(Re.done)continue;const Me=K.track_indices[pe];if(Me==null)continue;const Ge=Re.clip_duration_secs>0?Math.min(Re.elapsed_secs/Re.clip_duration_secs,1):0;le.set(Me,{clipIdx:Re.clip_idx,progress:Ge})}return le.size>0?le:null}),C=q(()=>{if(t(h)<0||!Pe.position||!Pe.sourceMap)return 0;const x=Pe.position,R=Pe.sourceMap.timeline,K=R.part_start_secs[x.part_idx],le=R.part_duration_secs[x.part_idx];return le<=0?0:Math.max(0,Math.min((x.song_elapsed_secs-K)/le,1))}),O=q(()=>{const x=Ke.effectiveRegion,R=Pe.sourceMap?.timeline;return!R||!t(s)||x.end_secs<=0?null:t(s).score.sequence.map((K,le)=>{const pe=[],Re=Ke.notchInPart(x.start_secs,R,le);Re!=null&&pe.push({position:Re,type:"start"});const Me=Ke.notchInPart(x.end_secs,R,le);return Me!=null&&pe.push({position:Me,type:"end"}),pe.length>0?pe:null})}),P=q(()=>{const x=Ke.effectiveRegion,R=Pe.sourceMap?.timeline;if(!R||!t(m)||Ke.isFullSong||x.end_secs<=0)return null;const K=new Map;for(let le=0;le<t(m).tracks.length;le++){const pe=t(m).tracks[le].clips,Re=[];for(let Me=0;Me<pe.length;Me++){const Ge=[],Ce=Ke.notchInClip(x.start_secs,R,t(u),le,Me);Ce!=null&&Ge.push({position:Ce,type:"start"});const hn=Ke.notchInClip(x.end_secs,R,t(u),le,Me);hn!=null&&Ge.push({position:hn,type:"end"}),Re.push(Ge.length>0?Ge:null)}K.set(le,Re)}return K.size>0?K:null});function y(x){const R=Pe.sourceMap?.timeline;if(!R)return;const K=Ke.partTimeRange(R,x);K&&Ke.setRegion(K)}function g(x,R,K){const le=Pe.sourceMap?.timeline;if(!le)return;const pe=le.part_start_secs[K],Re=le.part_duration_secs[K];if(pe==null||Re==null)return;const Me=pe+R*Re,Ge=Ke.effectiveRegion;x==="start"?Ke.setRegion({start_secs:Math.min(Me,Ge.end_secs-.1),end_secs:Ge.end_secs}):Ke.setRegion({start_secs:Ge.start_secs,end_secs:Math.max(Me,Ge.start_secs+.1)})}function D(x,R,K,le){const pe=Pe.sourceMap?.timeline;if(!pe)return;const Re=pe.part_start_secs[t(u)],Me=pe.clip_timings?.[t(u)]?.[K]?.[le];if(Re==null||!Me)return;const Ge=Re+Me.offset_secs+R*Me.duration_secs,Ce=Ke.effectiveRegion;x==="start"?Ke.setRegion({start_secs:Math.min(Ge,Ce.end_secs-.1),end_secs:Ce.end_secs}):Ke.setRegion({start_secs:Ce.start_secs,end_secs:Math.max(Ge,Ce.start_secs+.1)})}He(()=>{L(ee.text)}),He(()=>{ee.revision,W(t(r))}),He(()=>{t(s)&&ee.selectedPartIndex>=t(s).score.sequence.length&&(ee.selectedPartIndex=Math.max(0,t(s).score.sequence.length-1))});async function L(x){try{const R=await zc(x);p(a,[...new Set(R)],!0)}catch{p(a,[],!0)}}async function W(x){if(p(c,null),!x||!t(a).includes(x)){ee.songAst=null;return}try{if(ee.songAst=await Ic(ee.text,x),ee.songAst&&ee.songAst.patterns.length>0&&(ee.songAst.patterns.map(K=>K.label).includes(ee.selectedPatternLabel)||(ee.selectedPatternLabel=ee.songAst.patterns[0].label)),!Pe.playing)try{const R=await Bc(ee.text,x);Pe.playing||(Pe.sourceMap=R)}catch{}}catch(R){p(c,R instanceof Error?R.message:String(R),!0),ee.songAst=null}}function z(x){x&&(ee.selectedSection=x,ee.selectedPartIndex=0,On.clear(),Ke.clearRegion())}async function $(){const x=new Set(t(a));let R=1;for(;x.has(`song_${R}`);)R++;const K=`song_${R}`,le={leading_trivia:[],patterns:[{trivia:[],label:"main",groups:[{trivia:{leading:[],trailing_comment:null},group_settings:[],tone_settings:[],tracks:[]}]}],parts:[{trivia:[],label:"part_1",settings:[{Bpm:120}],automation:[],step_automation:[],tracks:[{trivia:[],clips:[{name:"main",times:1,mix:1,automation:[]}]}]}],score:{trivia:[],sequence:[{trivia:[],part_name:"part_1"}]},trailing_trivia:[]};try{const pe=await Fs(le);ee.addSection(K,pe),ee.selectedSection=K}catch(pe){p(c,pe instanceof Error?pe.message:String(pe),!0)}}function F(){t(r)&&(p(f,t(r),!0),p(l,!0))}function B(){if(!t(r)||!t(f).trim()){p(l,!1);return}const x=t(f).trim();if(x===t(r)){p(l,!1);return}ee.renameSection(t(r),x),ee.selectedSection=x,p(l,!1)}function M(){p(l,!1)}function V(){if(!t(r))return;const x=ee.getSectionContent(t(r));if(x===null)return;const R=new Set(t(a));let K=`${t(r)}_copy`,le=2;for(;R.has(K);)K=`${t(r)}_copy_${le}`,le++;ee.addSection(K,x),ee.selectedSection=K}async function U(){if(!(!t(r)||!t(s))){p(c,null);try{const x=await Fs(t(s));ee.replaceSectionContent(t(r),x)}catch(x){p(c,x instanceof Error?x.message:String(x),!0)}}}function Z(x){if(!t(s)||x>=t(s).score.sequence.length)return null;const R=t(s).score.sequence[x].part_name;return t(s).parts.find(K=>K.label===R)??null}function G(x,R){if(!t(s))return;const K=t(s).score.sequence,[le]=K.splice(x,1);K.splice(R,0,le),t(u)===x?ee.selectedPartIndex=R:x<t(u)&&R>=t(u)?ee.selectedPartIndex--:x>t(u)&&R<=t(u)&&ee.selectedPartIndex++,U()}function Y(){if(!t(s))return;const x=new Set(t(s).parts.map(le=>le.label));let R=1;for(;x.has(`part_${R}`);)R++;const K=`part_${R}`;t(s).parts.push({trivia:[],label:K,settings:[],automation:[],step_automation:[],tracks:[{trivia:[],clips:[{name:"new",times:1,mix:1,automation:[]}]}]}),t(s).score.sequence.push({trivia:[],part_name:K}),ee.selectedPartIndex=t(s).score.sequence.length-1,U()}function re(){if(!t(s)||!t(m))return;const x=Wn(t(m)),R=new Set(t(s).parts.map(pe=>pe.label));let K=`${x.label}_copy`,le=2;for(;R.has(K);)K=`${x.label}_copy_${le}`,le++;x.trivia=[],x.label=K,t(s).parts.push(x),t(s).score.sequence.splice(t(u)+1,0,{trivia:[],part_name:K}),ee.selectedPartIndex=t(u)+1,U()}function ce(){t(s)&&(t(s).score.sequence.splice(t(u),1),U())}function De(x){t(s)&&(t(s).score.sequence.splice(x,1),U())}function se(){!t(s)||!t(d)||(t(s).score.sequence.splice(t(u)+1,0,{trivia:[],part_name:t(d)}),ee.selectedPartIndex=t(u)+1,U())}async function he(x){if(!(!t(s)||!t(d)))try{ee.songAst=await jc(t(s),t(d),x),await U()}catch(R){p(c,R instanceof Error?R.message:String(R),!0)}}function Le(x,R,K){const le=Z(t(u));!t(s)||!le||(le.tracks[x].clips[R]=K,U())}function we(x,R){const K=Z(t(u));!t(s)||!K||(K.tracks[x].clips.splice(R,1),K.tracks[x].clips.length===0&&K.tracks.splice(x,1),K.tracks.length===0&&t(s).score.sequence.splice(t(u),1),U())}function Te(x){const R=Z(t(u));!t(s)||!R||(R.tracks[x].clips.push({name:"new",times:1,mix:1,automation:[]}),U())}function Se(x){const R=Z(t(u));!t(s)||!R||(R.tracks.splice(x,1),R.tracks.length===0&&t(s).score.sequence.splice(t(u),1),U())}function Ee(){const x=Z(t(u));!t(s)||!x||(x.tracks.push({trivia:[],clips:[{name:"new",times:1,mix:1,automation:[]}]}),U())}function Qe(x,R,K,le){const pe=Z(t(u));if(!t(s)||!pe)return;const[Re]=pe.tracks[x].clips.splice(R,1);let Me=le;x===K&&R<le&&(Me=Math.max(0,le-1)),Me=Math.min(Me,pe.tracks[K].clips.length),pe.tracks[K].clips.splice(Me,0,Re),U()}function tn(x,R){const K=Z(t(u));if(!t(s)||!K)return;const[le]=K.tracks.splice(x,1);K.tracks.splice(R,0,le),U()}async function gn(x){const R=Z(t(u));if(!(!t(s)||!R))try{const K=await Hc(x);R.settings.push(...K),U()}catch(K){p(c,K instanceof Error?K.message:String(K),!0)}}function zn(x){const R=Z(t(u));!t(s)||!R||(R.settings.splice(x,1),U())}function st(x,R){const K=Z(t(u));if(!t(s)||!K)return;const le=K.settings.findIndex(Re=>za(Re)===x),pe=Gc(x,R);le>=0?K.settings[le]=pe:K.settings.push(pe),U()}function yn(x){const R=Z(t(u));if(!t(s)||!R)return;const K=R.settings.findIndex(le=>za(le)===x);K>=0&&(R.settings.splice(K,1),U())}function Pn(x,R){const K=Z(t(u));!t(s)||!K||(K.automation[x]=R,U())}function Vt(x){const R=Z(t(u));!t(s)||!R||(R.automation.splice(x,1),U())}function Gt(x){const R=Z(t(u));!t(s)||!R||(R.automation.push(x),U())}function Ct(x,R){const K=Z(t(u));!t(s)||!K||(K.step_automation[x]=R,U())}function Kt(x){const R=Z(t(u));!t(s)||!R||(R.step_automation.splice(x,1),U())}function ie(x){const R=Z(t(u));!t(s)||!R||(R.step_automation.push(x),U())}function be(x){ee.selectedPatternLabel=x}function qe(){if(!t(s))return;const x=new Set(t(s).patterns.map(pe=>pe.label));let R=1;for(;x.has(`pat_${R}`);)R++;const K=`pat_${R}`,le={trivia:[],label:K,groups:[{trivia:{leading:[],trailing_comment:null},group_settings:[],tone_settings:[],tracks:[]}]};t(s).patterns.push(le),ee.selectedPatternLabel=K,U()}let an=q(()=>t(a).filter(x=>!x.startsWith("groove/")&&!x.startsWith("arp/"))),mn=q(()=>t(an).map(x=>({id:x,label:x}))),H=q(()=>new Set(t(an).filter(x=>ee.isLibraryOnly(x)))),ae=q(()=>t(o).map(x=>({id:x,label:x})));var _e=md(),Oe=k(_e),sn=k(Oe),pn=k(sn);zs(pn,{title:"Songs",get items(){return t(mn)},get activeId(){return t(r)},get libraryIds(){return t(H)},onselect:z,oncreate:$,hint:"song-sidebar"});var Ze=v(sn,2),on=k(Ze);{let x=q(()=>t(r)?qe:void 0);zs(on,{title:"Patterns",get items(){return t(ae)},get activeId(){return ee.selectedPatternLabel},get greyedOut(){return t(w)},onselect:R=>{ee.selectedPatternLabel=R},get oncreate(){return t(x)},hint:"pattern-sidebar"})}var me=v(Oe,2),Ie=k(me);{var kn=x=>{var R=id(),K=k(R);te(()=>xe(K,t(c))),S(x,R)};ne(Ie,x=>{t(c)&&x(kn)})}var wn=v(Ie,2);{var Je=x=>{var R=cd(),K=k(R);{var le=Re=>{var Me=od(),Ge=Ae(Me),Ce=v(Ge,2),hn=v(Ce,2);N("keydown",Ge,xn=>{xn.key==="Enter"&&B(),xn.key==="Escape"&&M()}),Yn(Ge,()=>t(f),xn=>p(f,xn)),N("click",Ce,B),N("click",hn,M),S(Re,Me)},pe=Re=>{var Me=ld(),Ge=Ae(Me),Ce=k(Ge),hn=v(Ge,2),xn=v(hn,2);te(()=>xe(Ce,t(r))),N("click",hn,F),Q("mouseenter",hn,()=>ue.set("song-rename")),N("click",xn,V),Q("mouseenter",xn,()=>ue.set("song-duplicate")),S(Re,Me)};ne(K,Re=>{t(l)?Re(le):Re(pe,!1)})}S(x,R)};ne(wn,x=>{t(r)&&x(Je)})}var Ne=v(wn,2);{var rn=x=>{var R=ud(),K=k(R);{let pe=q(()=>t(O)??void 0);Ia(K,{get items(){return t(b)},get selectedIndex(){return t(u)},get activeIndex(){return t(h)},get activeProgress(){return t(C)},get focusNotches(){return t(pe)},onselect:Re=>{ee.selectedPartIndex=Re},onmove:G,onadd:Y,ondelete:De,onfocus:y,onfocusdrag:g})}var le=v(K,2);Q("mouseenter",R,()=>ue.set("song-parts-bar")),N("click",le,se),S(x,R)};ne(Ne,x=>{t(r)&&t(s)&&t(s).score.sequence.length>0&&x(rn)})}var ln=v(me,2),An=k(ln);{var E=x=>{{let R=q(()=>t(m).tracks.map(le=>le.clips)),K=q(()=>t(h)===t(u)?t(A):null);g0(x,{get partName(){return t(d)},get partSeqIdx(){return t(u)},get tracks(){return t(R)},get settings(){return t(m).settings},get automation(){return t(m).automation},get patterns(){return t(i)},get activeTrackClips(){return t(K)},get focusClipNotches(){return t(P)},onchangeclip:Le,ondeleteclip:we,onaddclip:Te,ondeletetrack:Se,onaddtrack:Ee,onduplicatepart:re,ondeletepart:ce,onrenamepart:he,onaddsetting:gn,ondeletesetting:zn,onsetsettingstructured:st,ondeletesettingbykey:yn,oneditpattern:be,onmoveclip:Qe,onmovetrack:tn,onfocusclipdrag:D,onchangeautomation:Pn,ondeleteautomation:Vt,onaddautomation:Gt,get stepAutomation(){return t(m).step_automation},onchangestepautomation:Ct,ondeletestepautomation:Kt,onaddstepautomation:ie})}},I=x=>{var R=dd();S(x,R)},J=x=>{var R=fd();S(x,R)};ne(An,x=>{t(r)&&t(s)&&t(m)?x(E):t(r)&&!t(c)?x(I,1):t(r)||x(J,2)})}var X=v(ln,2),oe=k(X);{let x=q(()=>t(m)?.settings??[]);rd(oe,{get partSettings(){return t(x)}})}Q("mouseenter",sn,()=>ue.set("song-sidebar")),Q("mouseenter",Ze,()=>ue.set("pattern-sidebar")),S(n,_e),ke()}Ye(["keydown","click"]);const hd={mod:"#b07cc8",osc:"#5c9ed6",path:"#4db89a",fx:"#d68c4b",vcf:"#5cb86e",amp:"#c8b44e",post:"#7a8ba8"},vd={mod:"#8a50a8",osc:"#3070b0",path:"#2a8a6a",fx:"#b06830",vcf:"#3a8a48",amp:"#9a8828",post:"#5a6880"};function qt(n){return n==="light"?vd:hd}const _d={mod:"MOD",osc:"OSC",path:"PATH",fx:"FX",vcf:"VCF",amp:"AMP",post:"POST"},Gs=["mod","osc","path","fx","vcf","amp","post"];var gd=T('<span class="arrow svelte-4okew9"></span>'),bd=T("<!> <button> </button>",1),yd=T('<div class="signal-flow svelte-4okew9"></div>');function kd(n,e){ye(e,!0);let a=q(()=>qt(Fn.resolved));function r(i){if(!e.activity)return!0;switch(i){case"mod":return e.activity.lfo||e.activity.pitch_env||e.activity.filter_env;case"osc":return e.activity.oscs.some(Boolean);case"path":return e.activity.paths.some(Boolean);case"fx":return e.activity.shape_filter||e.activity.waveshaper||e.activity.voice_fx;case"vcf":return e.activity.main_filter;case"amp":return!0;case"post":return e.activity.post_filter||e.activity.pan||e.activity.unison}}var s=yd();en(s,21,()=>Gs,$e,(i,o,c)=>{var l=bd(),f=Ae(l);{var u=w=>{var h=gd();h.textContent="→",S(w,h)};ne(f,w=>{c>0&&w(u)})}var d=v(f,2);let m,b;var _=k(d);te(w=>{m=ve(d,1,"block svelte-4okew9",null,m,w),b=Xe(d,"",b,{"--block-color":t(a)[t(o)]}),xe(_,_d[t(o)])},[()=>({selected:e.selected===t(o),inactive:!r(t(o))})]),N("click",d,()=>e.onselect(t(o))),S(i,l)}),Q("mouseenter",s,()=>ue.set("signal-flow-diagram")),S(n,s),ke()}Ye(["click"]);var wd=T('<div class="region svelte-get67y"><div class="region-header svelte-get67y"> </div> <div class="region-body svelte-get67y"><!></div></div>');function Sn(n,e){let a=ge(e,"color",3,"#cc9944");var r=wd();let s;var i=k(r),o=k(i),c=v(i,2),l=k(c);sr(l,()=>e.children),te(()=>{s=Xe(r,"",s,{"--region-color":a()}),xe(o,e.label)}),S(n,r)}const xd={sine:"M2 8 Q6 0 8 8 Q10 16 14 8 Q18 0 22 8",triangle:"M2 12 L8 4 L14 12 L20 4 L22 8",saw:"M2 12 L10 4 L10 12 L18 4 L18 12 L22 8",pulse:"M2 12 L2 4 L8 4 L8 12 L14 12 L14 4 L20 4 L20 12 L22 12","white-noise":"M2 8 L4 4 L5 11 L7 5 L8 13 L10 3 L11 10 L13 6 L14 12 L16 4 L17 9 L19 5 L20 11 L22 8","pink-noise":"M2 8 L4 6 L6 10 L8 5 L10 11 L12 7 L14 10 L16 6 L18 9 L20 7 L22 8",ramp:"M2 12 L10 4 L10 12 L18 4 L18 12 L22 8","s-h":"M2 10 L5 10 L5 5 L9 5 L9 11 L13 11 L13 6 L17 6 L17 10 L22 10",lowpass:"M2 4 L10 4 Q14 4 16 8 Q18 12 22 14",highpass:"M2 14 Q6 12 8 8 Q10 4 14 4 L22 4",bandpass:"M2 14 Q5 14 8 8 Q10 4 12 4 Q14 4 16 8 Q19 14 22 14",ad:"M2 14 L8 3 L20 14",adsr:"M2 14 L6 3 L10 8 L16 8 L22 14",multitap:"M2 14 L4 4 L6 14 L8 6 L10 14 L12 8 L14 14 L18 14"};var Sd=Ql('<svg viewBox="0 0 24 16" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path></path></svg>');function Pd(n,e){ye(e,!0);let a=ge(e,"size",3,16),r=ge(e,"color",3,"currentColor"),s=q(()=>xd[e.name]??"");var i=Sd(),o=k(i);te(()=>{nn(i,"width",a()*1.5),nn(i,"height",a()),nn(i,"stroke",r()),nn(o,"d",t(s))}),S(n,i),ke()}var Ad=T('<span class="opt-label svelte-1ed09gu"> </span>'),Td=T("<button><!></button>"),Dd=T('<div><div class="arc-area svelte-1ed09gu"><svg class="pointer-svg svelte-1ed09gu" viewBox="0 0 100 88"><line x1="50" y1="44" stroke-width="2" stroke-linecap="round"></line><circle cx="50" cy="44" r="3"></circle></svg> <!> <span class="selected-label svelte-1ed09gu"> </span></div></div>');function wa(n,e){ye(e,!0);let a=ge(e,"disabled",3,!1),r=q(()=>e.options.findIndex(C=>C.value===e.value)),s=q(()=>t(r)>=0?e.options[t(r)].label??e.options[t(r)].value:"");function i(C){const O=e.options.length;return O<=1?0:-90+180*C/(O-1)}function o(C){const P=i(C)*Math.PI/180,y=50+38*Math.sin(P),g=44-38*Math.cos(P);return`left: ${y}%; top: ${g}%; transform: translate(-50%, -50%)`}function c(){const O=(t(r)>=0?i(t(r)):0)*Math.PI/180;return{x:50+22*Math.sin(O),y:44-22*Math.cos(O)}}var l=Dd();let f,u;var d=k(l),m=k(d),b=k(m),_=v(b),w=v(m,2);en(w,17,()=>e.options,$e,(C,O,P)=>{var y=Td();let g;var D=k(y);{var L=z=>{{let $=q(()=>P===t(r)?e.color??"var(--block-color, var(--accent))":"var(--text-muted)");Pd(z,{get name(){return t(O).glyph},size:18,get color(){return t($)}})}},W=z=>{var $=Ad(),F=k($);te(()=>xe(F,t(O).label??t(O).value)),S(z,$)};ne(D,z=>{t(O).glyph?z(L):z(W,!1)})}te(z=>{g=ve(y,1,"option svelte-1ed09gu",null,g,{selected:P===t(r)}),Xe(y,z),nn(y,"data-tooltip",t(O).label??t(O).value)},[()=>o(P)]),N("click",y,()=>e.onchange(t(O).value)),Q("mouseenter",y,()=>{e.hints?.[t(O).value]&&ue.set(e.hints[t(O).value])}),S(C,y)});var h=v(w,2),A=k(h);te((C,O)=>{f=ve(l,1,"knob svelte-1ed09gu",null,f,{disabled:a()}),u=Xe(l,"",u,{"--knob-color":e.color}),nn(b,"x2",C),nn(b,"y2",O),nn(b,"stroke",e.color??"var(--block-color, var(--accent))"),nn(_,"fill",e.color??"var(--block-color, var(--accent))"),xe(A,t(s))},[()=>c().x,()=>c().y]),S(n,l),ke()}Ye(["click"]);var Rd=T('<input class="edit-input svelte-1yf8t8l" type="text"/>'),qd=T('<button class="value-display svelte-1yf8t8l"> </button>'),Cd=T('<div><span class="label svelte-1yf8t8l"> </span> <div class="track svelte-1yf8t8l" role="slider"><div class="fill svelte-1yf8t8l"></div> <div class="thumb svelte-1yf8t8l"></div></div> <!></div>');function fe(n,e){ye(e,!0);let a=ge(e,"min",3,0),r=ge(e,"max",3,1),s=ge(e,"step",3,.01),i=ge(e,"unit",3,""),o=ge(e,"disabled",3,!1);function c(Y){Y.focus()}let l=j(!1),f=j(""),u=j(!1),d=j(void 0),m=q(()=>(e.value-a())/(r()-a())*100);function b(Y){return s()>=1?String(Math.round(Y)):s()>=.1?Y.toFixed(1):Y.toFixed(2)}function _(Y){const re=Math.min(r(),Math.max(a(),Y));return Math.round(re/s())*s()}function w(Y){if(!t(d))return;const re=t(d).getBoundingClientRect(),ce=1-(Y-re.top)/re.height,De=Math.min(1,Math.max(0,ce));e.onchange(_(a()+De*(r()-a())))}function h(Y){p(u,!0),Y.currentTarget.setPointerCapture(Y.pointerId),w(Y.clientY)}function A(Y){t(u)&&w(Y.clientY)}function C(){p(u,!1)}function O(){p(f,b(e.value),!0),p(l,!0)}function P(){const Y=parseFloat(t(f));isNaN(Y)||e.onchange(_(Y)),p(l,!1)}function y(){p(l,!1)}var g=Cd();let D,L;var W=k(g),z=k(W),$=v(W,2);nn($,"tabindex",0);var F=k($);let B;var M=v(F,2);let V;Tt($,Y=>p(d,Y),()=>t(d));var U=v($,2);{var Z=Y=>{var re=Rd();Ba(()=>Yn(re,()=>t(f),ce=>p(f,ce))),Ui(re,ce=>c?.(ce)),Q("blur",re,P),N("keydown",re,ce=>{ce.key==="Enter"&&P(),ce.key==="Escape"&&y()}),S(Y,re)},G=Y=>{var re=qd(),ce=k(re);te(De=>xe(ce,`${De??""}${i()??""}`),[()=>b(e.value)]),N("dblclick",re,O),S(Y,re)};ne(U,Y=>{t(l)?Y(Z):Y(G,!1)})}te(()=>{D=ve(g,1,"vert svelte-1yf8t8l",null,D,{disabled:o()}),L=Xe(g,"",L,{"--vert-color":e.color}),xe(z,e.label),nn($,"aria-valuenow",e.value),nn($,"aria-valuemin",a()),nn($,"aria-valuemax",r()),nn($,"aria-label",e.label),B=Xe(F,"",B,{height:`${t(m)??""}%`}),V=Xe(M,"",V,{bottom:`${t(m)??""}%`})}),Q("mouseenter",g,()=>{e.hint&&ue.set(e.hint)}),N("pointerdown",$,h),N("pointermove",$,A),N("pointerup",$,C),S(n,g),ke()}Ye(["pointerdown","pointermove","pointerup","keydown","dblclick"]);var Ld=T('<div class="vert-group svelte-j7rpns"><!></div>');function fn(n,e){var a=Ld(),r=k(a);sr(r,()=>e.children),S(n,a)}var Md=T("<button> </button>"),Ed=T('<div><div class="track svelte-zq2sms"><div class="indicator svelte-zq2sms"></div></div> <div class="labels svelte-zq2sms"></div></div>');function xa(n,e){ye(e,!0);let a=ge(e,"disabled",3,!1),r=q(()=>e.options.indexOf(e.value)),s=q(()=>e.options.length>1?t(r)/(e.options.length-1)*100:0);var i=Ed();let o;var c=k(i),l=k(c);let f;var u=v(c,2);en(u,21,()=>e.options,$e,(d,m,b)=>{var _=Md();let w;var h=k(_);te(()=>{w=ve(_,1,"stop svelte-zq2sms",null,w,{active:b===t(r)}),xe(h,t(m))}),N("click",_,()=>e.onchange(t(m))),Q("mouseenter",_,()=>{e.hints?.[t(m)]&&ue.set(e.hints[t(m)])}),S(d,_)}),te(()=>{o=ve(i,1,"synth-switch svelte-zq2sms",null,o,{disabled:a()}),f=Xe(l,"",f,{left:`${t(s)??""}%`})}),Q("mouseenter",i,()=>{e.hint&&ue.set(e.hint)}),S(n,i),ke()}Ye(["click"]);var Od=T('<span class="signal-ref svelte-126zrlx"> </span>');function cn(n,e){ye(e,!0);let a=q(()=>qt(Fn.resolved)),r=q(()=>t(a)[e.blockId]);var s=Od();let i;var o=k(s);te(()=>{i=Xe(s,"",i,{background:`color-mix(in srgb, ${t(r)??""} 12.5%, transparent)`,color:t(r),"border-color":`color-mix(in srgb, ${t(r)??""} 25%, transparent)`}),xe(o,e.label)}),Q("mouseenter",s,()=>{e.hint&&ue.set(e.hint)}),S(n,s),ke()}function Ft(n){return n?"AD"in n?"AD":"ADSR"in n?"ADSR":"MultiTap"in n?"MultiTap":null:null}function fa(n){return n?"Lowpass"in n?"Lowpass":"Highpass"in n?"Highpass":"Bandpass"in n?"Bandpass":null:null}function ma(n){return"Lowpass"in n?n.Lowpass[0]:"Highpass"in n?n.Highpass[0]:n.Bandpass[0]}function pa(n){return"Lowpass"in n?n.Lowpass[1]:"Highpass"in n?n.Highpass[1]:n.Bandpass[1]}function Xn(n,e,a){return{[n]:[e,a]}}function mo(n){return n==="Fixed"?"Fixed":"Pitched"in n?"Pitched":"Swept"}function Zn(n){switch(n){case"AD":return{AD:{attack_ms:1,decay_ms:200,start:0,amt:1,exp:!1}};case"ADSR":return{ADSR:{attack_ms:5,decay_ms:200,sustain:.8,release_ms:50}};case"MultiTap":return{MultiTap:{num_taps:3,tap_interval:50,tap_amp:.8,tail_decay:200}}}}function is(){return{shape:"Sine",freq:{Pitched:{semi:0,fine:0}},fixed_hz:440,pw:.5,pitch_lfo_amt:0,pitch_lfo2_amt:0,pitch_env_amt:0,pw_lfo_amt:0,pw_lfo2_amt:0,phaz_diff:0,phaz_diff_lfo_amt:0,phaz_diff_lfo2_amt:0}}function os(){return{mix:[1,0,0,0,0,0],pre_filter:null,env:null,post_filter:null}}var Fd=T("<!> <!> <!> <!>",1),zd=T("<!> <!> <!> <!>",1),Id=T("<!> <!> <!> <!>",1),Nd=T('<div class="env-panel svelte-ps0so5"><div class="env-toggles svelte-ps0so5"><!> <!></div> <!> <div><!></div></div>');function ls(n,e){ye(e,!0);let a=ge(e,"label",3,"Env"),r=ge(e,"value",3,null);const s=[{value:"AD",glyph:"ad",label:"AD"},{value:"ADSR",glyph:"adsr",label:"ADSR"},{value:"MultiTap",glyph:"multitap",label:"Multi"}];let i=j(null),o=j("AD");He(()=>{const D=Ft(r());D&&p(o,D,!0)});let c=q(()=>r()??Zn(t(o))),l=q(()=>Ft(t(c)));function f(D){p(o,D,!0),e.onchange(Zn(D))}function u(D){const L=r()??Zn(t(o)),W=Ft(L),z=L[W];e.onchange({[W]:{...z,...D}})}var d=Nd(),m=k(d),b=k(m);{let D=q(()=>r()!==null);nt(b,{get label(){return a()},get active(){return t(D)},onchange:L=>{L?e.onchange(t(i)??Zn(t(o))):(p(i,Wn(r()),!0),e.onchange(null))},get color(){return e.color},hint:"toggle-env"})}var _=v(b,2);{var w=D=>{{let L=q(()=>r()===null);nt(D,{label:"exp",get active(){return t(c).AD.exp},onchange:W=>u({exp:W}),get color(){return e.color},hint:"toggle-env-exp",get disabled(){return t(L)}})}};ne(_,D=>{"AD"in t(c)&&D(w)})}var h=v(m,2);{let D=q(()=>r()===null);wa(h,{get options(){return s},get value(){return t(l)},onchange:f,get color(){return e.color},hints:{AD:"env-type-ad",ADSR:"env-type-adsr",MultiTap:"env-type-multi"},get disabled(){return t(D)}})}var A=v(h,2);let C;var O=k(A);{var P=D=>{fn(D,{children:(L,W)=>{var z=Fd(),$=Ae(z);fe($,{label:"atk",get value(){return t(c).AD.attack_ms},min:0,max:500,step:.1,onchange:V=>u({attack_ms:V}),get color(){return e.color},hint:"env-ad-atk"});var F=v($,2);fe(F,{label:"dec",get value(){return t(c).AD.decay_ms},min:0,max:5e3,step:1,onchange:V=>u({decay_ms:V}),get color(){return e.color},hint:"env-ad-dec"});var B=v(F,2);fe(B,{label:"start",get value(){return t(c).AD.start},min:-1,max:1,step:.01,onchange:V=>u({start:V}),get color(){return e.color},hint:"env-ad-start"});var M=v(B,2);fe(M,{label:"amt",get value(){return t(c).AD.amt},min:-1,max:1,step:.01,onchange:V=>u({amt:V}),get color(){return e.color},hint:"env-ad-amt"}),S(L,z)}})},y=D=>{fn(D,{children:(L,W)=>{var z=zd(),$=Ae(z);fe($,{label:"atk",get value(){return t(c).ADSR.attack_ms},min:0,max:2e3,step:.1,onchange:V=>u({attack_ms:V}),get color(){return e.color},hint:"env-adsr-atk"});var F=v($,2);fe(F,{label:"dec",get value(){return t(c).ADSR.decay_ms},min:0,max:5e3,step:1,onchange:V=>u({decay_ms:V}),get color(){return e.color},hint:"env-adsr-dec"});var B=v(F,2);fe(B,{label:"sus",get value(){return t(c).ADSR.sustain},min:0,max:1,step:.01,onchange:V=>u({sustain:V}),get color(){return e.color},hint:"env-adsr-sus"});var M=v(B,2);fe(M,{label:"rel",get value(){return t(c).ADSR.release_ms},min:0,max:5e3,step:1,onchange:V=>u({release_ms:V}),get color(){return e.color},hint:"env-adsr-rel"}),S(L,z)}})},g=D=>{fn(D,{children:(L,W)=>{var z=Id(),$=Ae(z);fe($,{label:"taps",get value(){return t(c).MultiTap.num_taps},min:1,max:16,step:1,onchange:V=>u({num_taps:V}),get color(){return e.color},hint:"env-mt-taps"});var F=v($,2);fe(F,{label:"intvl",get value(){return t(c).MultiTap.tap_interval},min:1,max:500,step:1,onchange:V=>u({tap_interval:V}),get color(){return e.color},hint:"env-mt-intvl"});var B=v(F,2);fe(B,{label:"amp",get value(){return t(c).MultiTap.tap_amp},min:0,max:1,step:.01,onchange:V=>u({tap_amp:V}),get color(){return e.color},hint:"env-mt-amp"});var M=v(B,2);fe(M,{label:"tail",get value(){return t(c).MultiTap.tail_decay},min:0,max:5e3,step:1,onchange:V=>u({tail_decay:V}),get color(){return e.color},hint:"env-mt-tail"}),S(L,z)}})};ne(O,D=>{"AD"in t(c)?D(P):"ADSR"in t(c)?D(y,1):"MultiTap"in t(c)&&D(g,2)})}te(()=>C=ve(A,1,"env-controls svelte-ps0so5",null,C,{inactive:r()===null})),S(n,d),ke()}var jd=T('<div class="lfo-row svelte-8x2ovf"><div class="lfo-left svelte-8x2ovf"><!> <!></div> <!></div>'),Bd=T('<!> <div class="vert-with-ref"><!> <!></div> <div class="vert-with-ref"><!> <!></div>',1),Hd=T('<div class="lfo-row svelte-8x2ovf"><div class="lfo-left svelte-8x2ovf"><!> <!></div> <!></div>'),Vd=T('<div class="block-col svelte-8x2ovf"><div class="block-row svelte-8x2ovf"><!> <!> <!></div> <div class="block-row svelte-8x2ovf"><!> <!></div></div>');function Gd(n,e){ye(e,!0);const a=[{value:"Ramp",glyph:"ramp",label:"Ramp"},{value:"Pulse",glyph:"pulse",label:"Pls"},{value:"Sine",glyph:"sine",label:"Sin"},{value:"Triangle",glyph:"triangle",label:"Tri"},{value:"S&H",glyph:"s-h",label:"S&H"}],r=["Free","Trig","Rand"];let s=q(()=>qt(Fn.resolved).mod);var i=Vd(),o=k(i),c=k(o);Sn(c,{label:"Osc Start",get color(){return t(s)},children:(b,_)=>{nt(b,{get active(){return e.config.osc_start},onchange:w=>e.updateConfig({osc_start:w}),get color(){return t(s)},hint:"toggle-osc-start"})},$$slots:{default:!0}});var l=v(c,2);Sn(l,{label:"LFO-1",get color(){return t(s)},children:(b,_)=>{var w=jd(),h=k(w),A=k(h);{let P=q(()=>e.config.lfo.wave??"S&H");wa(A,{get options(){return a},get value(){return t(P)},onchange:y=>{const g=y==="S&H"?null:y;e.updateConfig({lfo:{...e.config.lfo,wave:g}})},get color(){return t(s)},hints:{Ramp:"lfo-wave-ramp",Pulse:"lfo-wave-pulse",Sine:"lfo-wave-sine",Triangle:"lfo-wave-tri","S&H":"lfo-wave-sh"}})}var C=v(A,2);xa(C,{get options(){return r},get value(){return e.config.lfo.mode},onchange:P=>e.updateConfig({lfo:{...e.config.lfo,mode:P}}),hints:{Free:"lfo-mode-free",Trig:"lfo-mode-trig",Rand:"lfo-mode-rand"}});var O=v(h,2);fn(O,{children:(P,y)=>{fe(P,{label:"rate",get value(){return e.config.lfo.rate},min:0,max:15,step:1,onchange:g=>e.updateConfig({lfo:{...e.config.lfo,rate:g}}),get color(){return t(s)},hint:"lfo-rate"})}}),S(b,w)},$$slots:{default:!0}});var f=v(l,2);Sn(f,{label:"LFO-2",get color(){return t(s)},children:(b,_)=>{var w=Hd(),h=k(w),A=k(h);{let P=q(()=>e.config.lfo2.wave??"S&H");wa(A,{get options(){return a},get value(){return t(P)},onchange:y=>{const g=y==="S&H"?null:y;e.updateConfig({lfo2:{...e.config.lfo2,wave:g}})},get color(){return t(s)},hints:{Ramp:"lfo-wave-ramp",Pulse:"lfo-wave-pulse",Sine:"lfo-wave-sine",Triangle:"lfo-wave-tri","S&H":"lfo-wave-sh"}})}var C=v(A,2);xa(C,{get options(){return r},get value(){return e.config.lfo2.mode},onchange:P=>e.updateConfig({lfo2:{...e.config.lfo2,mode:P}}),hints:{Free:"lfo-mode-free",Trig:"lfo-mode-trig",Rand:"lfo-mode-rand"}});var O=v(h,2);fn(O,{children:(P,y)=>{var g=Bd(),D=Ae(g);fe(D,{label:"rate",get value(){return e.config.lfo2.rate},min:0,max:15,step:1,onchange:M=>e.updateConfig({lfo2:{...e.config.lfo2,rate:M}}),get color(){return t(s)},hint:"lfo2-rate"});var L=v(D,2),W=k(L);fe(W,{label:"rate",get value(){return e.config.lfo1_to_lfo2_rate},min:0,max:1,step:.01,onchange:M=>e.updateConfig({lfo1_to_lfo2_rate:M}),get color(){return t(s)},hint:"lfo1-to-lfo2-rate"});var z=v(W,2);cn(z,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var $=v(L,2),F=k($);fe(F,{label:"depth",get value(){return e.config.lfo1_to_lfo2_depth},min:0,max:1,step:.01,onchange:M=>e.updateConfig({lfo1_to_lfo2_depth:M}),get color(){return t(s)},hint:"lfo1-to-lfo2-depth"});var B=v(F,2);cn(B,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"}),S(P,g)}}),S(b,w)},$$slots:{default:!0}});var u=v(o,2),d=k(u);Sn(d,{label:"ENV-1 (Pitch)",get color(){return t(s)},children:(b,_)=>{ls(b,{label:"p.env",get value(){return e.config.pitch_env},onchange:w=>e.updateConfig({pitch_env:w}),get color(){return t(s)}})},$$slots:{default:!0}});var m=v(d,2);Sn(m,{label:"ENV-2 (Filter)",get color(){return t(s)},children:(b,_)=>{ls(b,{label:"f.env",get value(){return e.config.filter_env},onchange:w=>e.updateConfig({filter_env:w}),get color(){return t(s)}})},$$slots:{default:!0}}),Q("mouseenter",i,()=>ue.set("mod-block")),S(n,i),ke()}var Kd=T("<!> <!>",1),Wd=T("<!> <!> <!> <!>",1),Ud=T('<!> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div>',1),Qd=T('<!> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div>',1),Zd=T('<div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div> <div class="vert-with-ref svelte-dp5a6t"><!> <!></div>',1),Jd=T('<div class="osc-panel svelte-dp5a6t"><div class="shape-col svelte-dp5a6t"><!> <!></div> <div class="freq-group svelte-dp5a6t"><!></div> <div><!></div> <!> <!></div>');function Xd(n,e){ye(e,!0);const a=[{value:"Sine",glyph:"sine",label:"Sin"},{value:"Triangle",glyph:"triangle",label:"Tri"},{value:"Saw",glyph:"saw",label:"Saw"},{value:"Pulse",glyph:"pulse",label:"Pls"},{value:"WhiteNoise",glyph:"white-noise",label:"Wht"},{value:"PinkNoise",glyph:"pink-noise",label:"Pnk"}],r=["Pitched","Fixed","Swept"];function s(y){e.onchange({...e.value,...y})}function i(y){s({shape:y})}function o(y){let g;switch(y){case"Pitched":g={Pitched:{semi:0,fine:0}};break;case"Fixed":g="Fixed";break;case"Swept":g={Swept:{atk:.1,dec:200,base:48,amt:50}};break;default:return}e.onchange({...e.value,freq:g})}var c=Jd(),l=k(c),f=k(l);wa(f,{get options(){return a},get value(){return e.value.shape},onchange:i,get color(){return e.color},hints:{Sine:"osc-shape-sine",Triangle:"osc-shape-tri",Saw:"osc-shape-saw",Pulse:"osc-shape-pulse",WhiteNoise:"osc-shape-white",PinkNoise:"osc-shape-pink"}});var u=v(f,2);{let y=q(()=>mo(e.value.freq));xa(u,{get options(){return r},get value(){return t(y)},onchange:o,hints:{Pitched:"osc-freq-pitched",Fixed:"osc-freq-fixed",Swept:"osc-freq-swept"}})}var d=v(l,2),m=k(d);{var b=y=>{fn(y,{children:(g,D)=>{var L=Kd(),W=Ae(L);fe(W,{label:"semi",get value(){return e.value.freq.Pitched.semi},min:-48,max:48,step:1,onchange:$=>s({freq:{Pitched:{semi:$,fine:e.value.freq.Pitched.fine}}}),get color(){return e.color},hint:"osc-semi"});var z=v(W,2);fe(z,{label:"fine",get value(){return e.value.freq.Pitched.fine},min:-100,max:100,step:1,onchange:$=>s({freq:{Pitched:{semi:e.value.freq.Pitched.semi,fine:$}}}),get color(){return e.color},hint:"osc-fine"}),S(g,L)}})},_=y=>{fn(y,{children:(g,D)=>{fe(g,{label:"hz",get value(){return e.value.fixed_hz},min:20,max:2e4,step:1,onchange:L=>s({fixed_hz:L}),get color(){return e.color},hint:"osc-hz"})}})},w=y=>{const g=q(()=>e.value.freq.Swept);fn(y,{children:(D,L)=>{var W=Wd(),z=Ae(W);fe(z,{label:"atk",get value(){return t(g).atk},min:0,max:100,step:.01,onchange:M=>s({freq:{Swept:{...t(g),atk:M}}}),get color(){return e.color},hint:"osc-swept-atk"});var $=v(z,2);fe($,{label:"dec",get value(){return t(g).dec},min:0,max:5e3,step:1,onchange:M=>s({freq:{Swept:{...t(g),dec:M}}}),get color(){return e.color},hint:"osc-swept-dec"});var F=v($,2);fe(F,{label:"base",get value(){return t(g).base},min:0,max:135,step:.1,onchange:M=>s({freq:{Swept:{...t(g),base:M}}}),get color(){return e.color},hint:"osc-swept-base"});var B=v(F,2);fe(B,{label:"amt",get value(){return t(g).amt},min:-135,max:135,step:.1,onchange:M=>s({freq:{Swept:{...t(g),amt:M}}}),get color(){return e.color},hint:"osc-swept-amt"}),S(D,W)}})};ne(m,y=>{typeof e.value.freq=="object"&&"Pitched"in e.value.freq?y(b):e.value.freq==="Fixed"?y(_,1):typeof e.value.freq=="object"&&"Swept"in e.value.freq&&y(w,2)})}var h=v(d,2);let A;var C=k(h);fn(C,{children:(y,g)=>{var D=Ud(),L=Ae(D);fe(L,{label:"pw",get value(){return e.value.pw},min:0,max:1,step:.01,onchange:V=>s({pw:V}),get color(){return e.color},hint:"osc-pw"});var W=v(L,2),z=k(W);fe(z,{label:"pw lfo",get value(){return e.value.pw_lfo_amt},min:0,max:1,step:.01,onchange:V=>s({pw_lfo_amt:V}),get color(){return e.color},hint:"osc-pw-lfo"});var $=v(z,2);cn($,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var F=v(W,2),B=k(F);fe(B,{label:"pw lfo2",get value(){return e.value.pw_lfo2_amt},min:0,max:1,step:.01,onchange:V=>s({pw_lfo2_amt:V}),get color(){return e.color},hint:"osc-pw-lfo2"});var M=v(B,2);cn(M,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),S(y,D)}});var O=v(h,2);fn(O,{children:(y,g)=>{var D=Qd(),L=Ae(D);fe(L,{label:"pdif",get value(){return e.value.phaz_diff},min:0,max:1,step:.01,onchange:V=>s({phaz_diff:V}),get color(){return e.color},hint:"osc-pdif"});var W=v(L,2),z=k(W);fe(z,{label:"pd lfo",get value(){return e.value.phaz_diff_lfo_amt},min:0,max:1,step:.01,onchange:V=>s({phaz_diff_lfo_amt:V}),get color(){return e.color},hint:"osc-pd-lfo"});var $=v(z,2);cn($,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var F=v(W,2),B=k(F);fe(B,{label:"pd lf2",get value(){return e.value.phaz_diff_lfo2_amt},min:0,max:1,step:.01,onchange:V=>s({phaz_diff_lfo2_amt:V}),get color(){return e.color},hint:"osc-pd-lfo2"});var M=v(B,2);cn(M,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),S(y,D)}});var P=v(O,2);fn(P,{children:(y,g)=>{var D=Zd(),L=Ae(D),W=k(L);fe(W,{label:"p.lfo",get value(){return e.value.pitch_lfo_amt},min:0,max:48,step:.1,onchange:Z=>s({pitch_lfo_amt:Z}),get color(){return e.color},hint:"osc-pitch-lfo"});var z=v(W,2);cn(z,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var $=v(L,2),F=k($);fe(F,{label:"p.lfo2",get value(){return e.value.pitch_lfo2_amt},min:0,max:48,step:.1,onchange:Z=>s({pitch_lfo2_amt:Z}),get color(){return e.color},hint:"osc-pitch-lfo2"});var B=v(F,2);cn(B,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"});var M=v($,2),V=k(M);fe(V,{label:"p.env",get value(){return e.value.pitch_env_amt},min:-135,max:135,step:.1,onchange:Z=>s({pitch_env_amt:Z}),get color(){return e.color},hint:"osc-pitch-env"});var U=v(V,2);cn(U,{label:"ENV-1",blockId:"mod",hint:"ref-env1"}),S(y,D)}}),te(()=>A=ve(h,1,"pulse-group svelte-dp5a6t",null,A,{inactive:e.value.shape!=="Pulse"})),S(n,c),ke()}var Yd=T("<button></button>"),$d=T('<div class="interaction-row svelte-1o0jwca"><div class="vert-with-ref svelte-1o0jwca"><!> <!></div></div>'),ef=T('<div class="vert-with-ref svelte-1o0jwca"><!> <!></div> <div class="vert-with-ref svelte-1o0jwca"><!> <!></div>',1),nf=T("<div><!> <!> <!> <!></div>"),tf=T('<div class="osc-tabs svelte-1o0jwca"></div> <div class="osc-body svelte-1o0jwca"><!> <div><!></div></div> <!> <!>',1);function af(n,e){ye(e,!0);let a=ge(e,"focusTab",19,()=>-1),r=q(()=>qt(Fn.resolved).osc),s=_n(Array(6).fill(null)),i=j(0);He(()=>{a()>=0&&p(i,a())});let o=q(()=>e.config.oscs[t(i)]),c=q(()=>t(o)??is());var l=tf(),f=Ae(l);let u;en(f,20,()=>({length:6}),$e,(P,y,g)=>{const D=q(()=>e.config.oscs[g]!==null);var L=Yd();let W;L.textContent=`OSC-${g+1}`,te(()=>W=ve(L,1,"tab svelte-1o0jwca",null,W,{selected:g===t(i),"osc-active":t(D)})),N("click",L,()=>{p(i,g,!0)}),S(P,L)});var d=v(f,2),m=k(d);{let P=q(()=>t(i)+1),y=q(()=>t(o)!==null);nt(m,{get label(){return`OSC-${t(P)??""}`},get active(){return t(y)},onchange:g=>{g?e.setOsc(t(i),s[t(i)]??is()):(s[t(i)]=Wn(e.config.oscs[t(i)]),e.setOsc(t(i),null))},get color(){return t(r)},hint:"toggle-osc"})}var b=v(m,2);let _;var w=k(b);Xd(w,{get index(){return t(i)},get value(){return t(c)},onchange:P=>{t(o)!==null&&e.setOsc(t(i),P)},get color(){return t(r)}});var h=v(d,2);{var A=P=>{Sn(P,{label:"Feedback",get color(){return t(r)},children:(y,g)=>{var D=$d(),L=k(D),W=k(L);fe(W,{label:"fb fm",get value(){return e.config.osc_interaction.feedback_fm},min:0,max:3,step:.01,onchange:$=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,feedback_fm:$}}),get color(){return t(r)},hint:"osc-fb-fm"});var z=v(W,2);cn(z,{label:"OSC-1",blockId:"osc",hint:"ref-osc1"}),S(y,D)},$$slots:{default:!0}})};ne(h,P=>{t(i)===0&&e.config.oscs[0]!==null&&P(A)})}var C=v(h,2);{var O=P=>{Sn(P,{label:"Interaction",get color(){return t(r)},children:(y,g)=>{var D=nf();let L;var W=k(D);nt(W,{label:"sync",get active(){return e.config.osc_interaction.sync},onchange:M=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,sync:M}}),get color(){return t(r)},hint:"toggle-sync"});var z=v(W,2);{var $=M=>{fe(M,{label:"window",get value(){return e.config.osc_interaction.sync_window},min:0,max:1,step:.01,onchange:V=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,sync_window:V}}),get color(){return t(r)},hint:"osc-sync-window"})};ne(z,M=>{e.config.osc_interaction.sync&&M($)})}var F=v(z,2);nt(F,{label:"ring",get active(){return e.config.osc_interaction.ring_mod},onchange:M=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,ring_mod:M}}),get color(){return t(r)},hint:"toggle-ring"});var B=v(F,2);fn(B,{children:(M,V)=>{var U=ef(),Z=Ae(U),G=k(Z);fe(G,{label:"fm",get value(){return e.config.osc_interaction.fm_amt},min:0,max:10,step:.01,onchange:se=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,fm_amt:se}}),get color(){return t(r)},hint:"osc-fm"});var Y=v(G,2);cn(Y,{label:"OSC-1",blockId:"osc",hint:"ref-osc1"});var re=v(Z,2),ce=k(re);fe(ce,{label:"fm env",get value(){return e.config.osc_interaction.fm_env_amt},min:-10,max:10,step:.01,onchange:se=>e.updateConfig({osc_interaction:{...e.config.osc_interaction,fm_env_amt:se}}),get color(){return t(r)},hint:"osc-fm-env"});var De=v(ce,2);cn(De,{label:"ENV-1",blockId:"mod",hint:"ref-env1"}),S(M,U)}}),te(()=>L=ve(D,1,"interaction-row svelte-1o0jwca",null,L,{inactive:e.config.oscs[1]===null})),S(y,D)},$$slots:{default:!0}})};ne(C,P=>{t(i)===1&&P(O)})}te(()=>{u=Xe(f,"",u,{"--_block-accent":t(r)}),_=ve(b,1,"osc-controls svelte-1o0jwca",null,_,{inactive:t(o)===null})}),Q("mouseenter",f,()=>ue.set("osc-block")),S(n,l),ke()}Ye(["click"]);var sf=T("<!> <!>",1),rf=T('<div class="biquad-panel svelte-4hmfpi"><!> <div><!> <!></div></div>');function cs(n,e){ye(e,!0);let a=ge(e,"label",3,"Filter"),r=ge(e,"value",3,null);const s=[{value:"Lowpass",glyph:"lowpass",label:"LP"},{value:"Highpass",glyph:"highpass",label:"HP"},{value:"Bandpass",glyph:"bandpass",label:"BP"}];let i=j(null),o=q(()=>r()??Xn("Lowpass",1e3,.7)),c=q(()=>fa(t(o)));function l(A){const C=ma(t(o)),O=pa(t(o));e.onchange(Xn(A,C,O))}function f(A){e.onchange(Xn(fa(t(o)),A,pa(t(o))))}function u(A){e.onchange(Xn(fa(t(o)),ma(t(o)),A))}var d=rf(),m=k(d);{let A=q(()=>r()!==null);nt(m,{get label(){return a()},get active(){return t(A)},onchange:C=>{C?e.onchange(t(i)??Xn("Lowpass",1e3,.7)):(p(i,Wn(r()),!0),e.onchange(null))},get color(){return e.color},hint:"toggle-biquad"})}var b=v(m,2);let _;var w=k(b);{let A=q(()=>t(c)??"Lowpass");wa(w,{get options(){return s},get value(){return t(A)},onchange:l,get color(){return e.color},hints:{Lowpass:"biquad-type-lp",Highpass:"biquad-type-hp",Bandpass:"biquad-type-bp"}})}var h=v(w,2);fn(h,{children:(A,C)=>{var O=sf(),P=Ae(O);{let g=q(()=>ma(t(o)));fe(P,{label:"freq",get value(){return t(g)},min:20,max:2e4,step:1,onchange:f,get color(){return e.color},hint:"biquad-freq"})}var y=v(P,2);{let g=q(()=>pa(t(o)));fe(y,{label:"Q",get value(){return t(g)},min:.1,max:20,step:.01,onchange:u,get color(){return e.color},hint:"biquad-q"})}S(A,O)}}),te(()=>_=ve(b,1,"biquad-controls svelte-4hmfpi",null,_,{inactive:r()===null})),S(n,d),ke()}var of=T("<div><!> <!></div>"),lf=T('<div class="path-panel svelte-1mlllm3"><div class="path-row svelte-1mlllm3"><!> <!></div> <div class="path-row svelte-1mlllm3"><!> <!></div></div>');function cf(n,e){ye(e,!0),ge(e,"oscCount",3,2);let a=ge(e,"oscActive",19,()=>[]);function r(m){e.onchange({...e.value,...m})}function s(m,b){const _=[...e.value.mix];_[m]=b,e.onchange({...e.value,mix:_})}var i=lf(),o=k(i),c=k(o);fn(c,{children:(m,b)=>{var _=ka(),w=Ae(_);en(w,16,()=>({length:6}),$e,(h,A,C)=>{const O=q(()=>a()[C]??!1);var P=of();let y;var g=k(P);fe(g,{label:`O${C+1}`,get value(){return e.value.mix[C]},min:0,max:1,step:.01,onchange:L=>s(C,L),get color(){return e.color},hint:"path-osc-mix"});var D=v(g,2);cn(D,{label:`OSC-${C+1}`,blockId:"osc",hint:"ref-osc"}),te(()=>y=ve(P,1,"vert-with-ref svelte-1mlllm3",null,y,{inactive:!t(O)})),S(h,P)}),S(m,_)}});var l=v(c,2);Sn(l,{label:"Pre Filter",get color(){return e.color},children:(m,b)=>{cs(m,{label:"pre",get value(){return e.value.pre_filter},onchange:_=>r({pre_filter:_}),get color(){return e.color}})},$$slots:{default:!0}});var f=v(o,2),u=k(f);Sn(u,{label:"Path Env",get color(){return e.color},children:(m,b)=>{ls(m,{label:"env",get value(){return e.value.env},onchange:_=>r({env:_}),get color(){return e.color}})},$$slots:{default:!0}});var d=v(u,2);Sn(d,{label:"Post Filter",get color(){return e.color},children:(m,b)=>{cs(m,{label:"post",get value(){return e.value.post_filter},onchange:_=>r({post_filter:_}),get color(){return e.color}})},$$slots:{default:!0}}),S(n,i),ke()}var uf=T("<button></button>"),df=T('<div class="path-tabs svelte-1puvzgq"></div> <div class="path-body svelte-1puvzgq"><!> <div><!></div></div>',1);function ff(n,e){ye(e,!0);let a=ge(e,"focusTab",19,()=>-1),r=q(()=>qt(Fn.resolved).path),s=_n(Array(3).fill(null)),i=j(0);He(()=>{a()>=0&&p(i,a())});let o=q(()=>e.config.paths[t(i)]),c=q(()=>t(o)??os()),l=q(()=>e.config.oscs.map(A=>A!==null));var f=df(),u=Ae(f);let d;en(u,20,()=>({length:3}),$e,(A,C,O)=>{const P=q(()=>e.config.paths[O]!==null);var y=uf();let g;y.textContent=`PATH-${O+1}`,te(()=>g=ve(y,1,"tab svelte-1puvzgq",null,g,{selected:O===t(i),"path-active":t(P)})),N("click",y,()=>{p(i,O,!0)}),S(A,y)});var m=v(u,2),b=k(m);{let A=q(()=>t(i)+1),C=q(()=>t(o)!==null);nt(b,{get label(){return`PATH-${t(A)??""}`},get active(){return t(C)},onchange:O=>{O?e.setPath(t(i),s[t(i)]??os()):(s[t(i)]=Wn(e.config.paths[t(i)]),e.setPath(t(i),null))},get color(){return t(r)}})}var _=v(b,2);let w;var h=k(_);cf(h,{get index(){return t(i)},get value(){return t(c)},get oscCount(){return e.oscCount},get oscActive(){return t(l)},onchange:A=>e.setPath(t(i),A),get color(){return t(r)}}),te(()=>{d=Xe(u,"",d,{"--_block-accent":t(r)}),w=ve(_,1,"path-controls svelte-1puvzgq",null,w,{inactive:t(o)===null})}),Q("mouseenter",u,()=>ue.set("path-block")),S(n,f),ke()}Ye(["click"]);var mf=T("<!> <!>",1),pf=T('<div class="ws-row svelte-gtye39"><!> <!> <!> <!></div>'),hf=T("<!> <!> <!>",1),vf=T('<div class="block-row svelte-gtye39"><!> <!> <!></div>');function _f(n,e){ye(e,!0);let a=q(()=>qt(Fn.resolved).fx);var r=vf(),s=k(r);Sn(s,{label:"Shape Filter",get color(){return t(a)},children:(c,l)=>{cs(c,{label:"shape",get value(){return e.config.shape_filter},onchange:f=>e.updateConfig({shape_filter:f}),get color(){return t(a)}})},$$slots:{default:!0}});var i=v(s,2);Sn(i,{label:"Waveshaper",get color(){return t(a)},children:(c,l)=>{var f=pf(),u=k(f);nt(u,{label:"half rect",get active(){return e.config.half_rect},onchange:w=>e.updateConfig({half_rect:w}),get color(){return t(a)},hint:"toggle-half-rect"});var d=v(u,2);fn(d,{children:(w,h)=>{{let A=q(()=>e.config.soft_clip??0);fe(w,{label:"clip",get value(){return t(A)},min:0,max:10,step:.01,onchange:C=>e.updateConfig({soft_clip:C>0?C:null}),get color(){return t(a)},hint:"fx-clip"})}}});var m=v(d,2);{let w=q(()=>e.config.hard_clip!==null);nt(m,{label:"hard clip",get active(){return t(w)},onchange:h=>e.updateConfig({hard_clip:h?[1,.8]:null}),get color(){return t(a)},hint:"toggle-hard-clip"})}var b=v(m,2);{var _=w=>{fn(w,{children:(h,A)=>{var C=mf(),O=Ae(C);fe(O,{label:"drive",get value(){return e.config.hard_clip[0]},min:1,max:10,step:.01,onchange:y=>{const g=Wn(e.config.hard_clip);e.updateConfig({hard_clip:[y,g[1]]})},get color(){return t(a)},hint:"fx-hard-drive"});var P=v(O,2);fe(P,{label:"thresh",get value(){return e.config.hard_clip[1]},min:.1,max:1,step:.01,onchange:y=>{const g=Wn(e.config.hard_clip);e.updateConfig({hard_clip:[g[0],y]})},get color(){return t(a)},hint:"fx-hard-thresh"}),S(h,C)}})};ne(b,w=>{e.config.hard_clip&&w(_)})}S(c,f)},$$slots:{default:!0}});var o=v(i,2);Sn(o,{label:"Voice FX",get color(){return t(a)},children:(c,l)=>{fn(c,{children:(f,u)=>{var d=hf(),m=Ae(d);{let w=q(()=>e.config.wavefold??0);fe(m,{label:"fold",get value(){return t(w)},min:0,max:10,step:.01,onchange:h=>e.updateConfig({wavefold:h>0?h:null}),get color(){return t(a)},hint:"fx-fold"})}var b=v(m,2);{let w=q(()=>e.config.bit_crush??0);fe(b,{label:"crush",get value(){return t(w)},min:0,max:16,step:1,onchange:h=>e.updateConfig({bit_crush:h>0?h:null}),get color(){return t(a)},hint:"fx-crush"})}var _=v(b,2);{let w=q(()=>e.config.decimate??0);fe(_,{label:"decim",get value(){return t(w)},min:0,max:32,step:1,onchange:h=>e.updateConfig({decimate:h>0?h:null}),get color(){return t(a)},hint:"fx-decim"})}S(f,d)}})},$$slots:{default:!0}}),Q("mouseenter",r,()=>ue.set("fx-block")),S(n,r),ke()}var gf=T('<div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div>',1),bf=T('<!> <!> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <div class="vert-with-ref svelte-1fddr5a"><!> <!></div> <!> <!> <!>',1),yf=T('<div class="filter-panel svelte-1fddr5a"><!> <div><div class="engine-and-mode svelte-1fddr5a"><!> <!></div> <!></div></div>');function kf(n,e){ye(e,!0);const a={engine:"Moog",mode:"Lowpass",cutoff:80,resonance:0,env_amt:0,lfo_amt:0,lfo2_amt:0,velo_amt:0,key_track:0,morph:0,morph_lfo_amt:0,morph_lfo2_amt:0,morph_env_amt:0};let r=ge(e,"value",3,null);const s=[{value:"Lowpass",glyph:"lowpass",label:"LP"},{value:"Highpass",glyph:"highpass",label:"HP"},{value:"Bandpass",glyph:"bandpass",label:"BP"}];let i=j(null),o=q(()=>r()??a),c=q(()=>(t(o).engine??"Moog")==="Svf");function l(g){g?e.onchange(t(i)??{...a}):(p(i,Wn(r()),!0),e.onchange(null))}function f(g){e.onchange({...t(o),engine:g})}function u(g){e.onchange({...t(o),mode:g})}function d(g){e.onchange({...t(o),...g})}var m=yf(),b=k(m);{let g=q(()=>r()!==null);nt(b,{label:"vcf",get active(){return t(g)},onchange:l,get color(){return e.color},hint:"toggle-vcf"})}var _=v(b,2);let w;var h=k(_),A=k(h);{let g=q(()=>t(o).engine??"Moog");xa(A,{options:["Moog","Svf"],get value(){return t(g)},onchange:f,hints:{Moog:"vcf-engine-moog",Svf:"vcf-engine-svf"}})}var C=v(A,2);{var O=g=>{{let D=q(()=>t(o).morph??0);fe(g,{label:"morph",get value(){return t(D)},min:0,max:1,step:.01,onchange:L=>d({morph:L}),get color(){return e.color},hint:"vcf-morph"})}},P=g=>{wa(g,{get options(){return s},get value(){return t(o).mode},onchange:u,get color(){return e.color},hints:{Lowpass:"vcf-mode-lp",Highpass:"vcf-mode-hp",Bandpass:"vcf-mode-bp"}})};ne(C,g=>{t(c)?g(O):g(P,!1)})}var y=v(h,2);fn(y,{children:(g,D)=>{var L=bf(),W=Ae(L);fe(W,{label:"cutoff",get value(){return t(o).cutoff},min:0,max:135,step:.1,onchange:he=>d({cutoff:he}),get color(){return e.color},hint:"vcf-cutoff"});var z=v(W,2);fe(z,{label:"reso",get value(){return t(o).resonance},min:0,max:1,step:.01,onchange:he=>d({resonance:he}),get color(){return e.color},hint:"vcf-reso"});var $=v(z,2),F=k($);fe(F,{label:"env",get value(){return t(o).env_amt},min:-135,max:135,step:.1,onchange:he=>d({env_amt:he}),get color(){return e.color},hint:"vcf-env"});var B=v(F,2);cn(B,{label:"ENV-2",blockId:"mod",hint:"ref-env2"});var M=v($,2),V=k(M);fe(V,{label:"lfo",get value(){return t(o).lfo_amt},min:-135,max:135,step:.1,onchange:he=>d({lfo_amt:he}),get color(){return e.color},hint:"vcf-lfo"});var U=v(V,2);cn(U,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var Z=v(M,2),G=k(Z);fe(G,{label:"lfo2",get value(){return t(o).lfo2_amt},min:-135,max:135,step:.1,onchange:he=>d({lfo2_amt:he}),get color(){return e.color},hint:"vcf-lfo2"});var Y=v(G,2);cn(Y,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"});var re=v(Z,2);fe(re,{label:"velo",get value(){return t(o).velo_amt},min:-135,max:135,step:.1,onchange:he=>d({velo_amt:he}),get color(){return e.color},hint:"vcf-velo"});var ce=v(re,2);fe(ce,{label:"key",get value(){return t(o).key_track},min:-2,max:2,step:.01,onchange:he=>d({key_track:he}),get color(){return e.color},hint:"vcf-key"});var De=v(ce,2);{var se=he=>{var Le=gf(),we=Ae(Le),Te=k(we);{let yn=q(()=>t(o).morph_env_amt??0);fe(Te,{label:"m.env",get value(){return t(yn)},min:-1,max:1,step:.01,onchange:Pn=>d({morph_env_amt:Pn}),get color(){return e.color},hint:"vcf-morph-env"})}var Se=v(Te,2);cn(Se,{label:"ENV-2",blockId:"mod",hint:"ref-env2"});var Ee=v(we,2),Qe=k(Ee);{let yn=q(()=>t(o).morph_lfo_amt??0);fe(Qe,{label:"m.lfo",get value(){return t(yn)},min:-1,max:1,step:.01,onchange:Pn=>d({morph_lfo_amt:Pn}),get color(){return e.color},hint:"vcf-morph-lfo"})}var tn=v(Qe,2);cn(tn,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var gn=v(Ee,2),zn=k(gn);{let yn=q(()=>t(o).morph_lfo2_amt??0);fe(zn,{label:"m.lfo2",get value(){return t(yn)},min:-1,max:1,step:.01,onchange:Pn=>d({morph_lfo2_amt:Pn}),get color(){return e.color},hint:"vcf-morph-lfo2"})}var st=v(zn,2);cn(st,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),S(he,Le)};ne(De,he=>{t(c)&&he(se)})}S(g,L)}}),te(()=>w=ve(_,1,"filter-controls svelte-1fddr5a",null,w,{inactive:r()===null})),S(n,m),ke()}var wf=T("<div><!></div>");function xf(n,e){ye(e,!0);let a=q(()=>qt(Fn.resolved).vcf);var r=wf(),s=k(r);kf(s,{get value(){return e.config.main_filter},onchange:i=>e.updateConfig({main_filter:i}),get color(){return t(a)}}),Q("mouseenter",r,()=>ue.set("vcf-block")),S(n,r),ke()}var Sf=T('<!> <div class="vert-with-ref svelte-yb3nqx"><!> <!></div> <div class="vert-with-ref svelte-yb3nqx"><!> <!></div> <div class="vert-with-ref svelte-yb3nqx"><!> <!></div>',1),Pf=T('<div class="block-row svelte-yb3nqx"><!> <!></div>');function Af(n,e){ye(e,!0);let a=q(()=>qt(Fn.resolved).amp);var r=Pf(),s=k(r);Sn(s,{label:"Envelope",get color(){return t(a)},children:(o,c)=>{ls(o,{label:"amp",get value(){return e.config.amp_env},onchange:l=>e.updateConfig({amp_env:l}),get color(){return t(a)}})},$$slots:{default:!0}});var i=v(s,2);Sn(i,{label:"Level",get color(){return t(a)},children:(o,c)=>{fn(o,{children:(l,f)=>{var u=Sf(),d=Ae(u);fe(d,{label:"amp",get value(){return e.config.amp},min:0,max:2,step:.01,onchange:y=>e.updateConfig({amp:y}),get color(){return t(a)},hint:"amp-level"});var m=v(d,2),b=k(m);fe(b,{label:"velo",get value(){return e.config.amp_velo_amt},min:0,max:1,step:.01,onchange:y=>e.updateConfig({amp_velo_amt:y}),get color(){return t(a)},hint:"amp-velo"});var _=v(b,2);cn(_,{label:"VELO",blockId:"mod",hint:"ref-velo"});var w=v(m,2),h=k(w);fe(h,{label:"vol lfo",get value(){return e.config.vol_lfo_amt},min:0,max:1,step:.01,onchange:y=>e.updateConfig({vol_lfo_amt:y}),get color(){return t(a)},hint:"amp-vol-lfo"});var A=v(h,2);cn(A,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var C=v(w,2),O=k(C);fe(O,{label:"vol lfo2",get value(){return e.config.vol_lfo2_amt},min:0,max:1,step:.01,onchange:y=>e.updateConfig({vol_lfo2_amt:y}),get color(){return t(a)},hint:"amp-vol-lfo2"});var P=v(O,2);cn(P,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),S(l,u)}})},$$slots:{default:!0}}),Q("mouseenter",r,()=>ue.set("amp-block")),S(n,r),ke()}var Tf=T('<!> <div class="vert-with-ref svelte-1n1i7mb"><!> <!></div> <div class="vert-with-ref svelte-1n1i7mb"><!> <!></div>',1),Df=T("<!> <!> <!>",1),Rf=T('<div class="block-row svelte-1n1i7mb"><!> <!> <!> <!></div>');function qf(n,e){ye(e,!0);let a=q(()=>qt(Fn.resolved).post);var r=Rf(),s=k(r);Sn(s,{label:"Post Filter",get color(){return t(a)},children:(l,f)=>{cs(l,{label:"post",get value(){return e.config.post_filter},onchange:u=>e.updateConfig({post_filter:u}),get color(){return t(a)}})},$$slots:{default:!0}});var i=v(s,2);Sn(i,{label:"Pan",get color(){return t(a)},children:(l,f)=>{fn(l,{children:(u,d)=>{var m=Tf(),b=Ae(m);fe(b,{label:"pan",get value(){return e.config.pan},min:-1,max:1,step:.01,onchange:P=>e.updateConfig({pan:P}),get color(){return t(a)},hint:"post-pan"});var _=v(b,2),w=k(_);fe(w,{label:"pan lfo",get value(){return e.config.pan_lfo_amt},min:0,max:1,step:.01,onchange:P=>e.updateConfig({pan_lfo_amt:P}),get color(){return t(a)},hint:"post-pan-lfo"});var h=v(w,2);cn(h,{label:"LFO-1",blockId:"mod",hint:"ref-lfo1"});var A=v(_,2),C=k(A);fe(C,{label:"pan lfo2",get value(){return e.config.pan_lfo2_amt},min:0,max:1,step:.01,onchange:P=>e.updateConfig({pan_lfo2_amt:P}),get color(){return t(a)},hint:"post-pan-lfo2"});var O=v(C,2);cn(O,{label:"LFO-2",blockId:"mod",hint:"ref-lfo2"}),S(u,m)}})},$$slots:{default:!0}});var o=v(i,2);Sn(o,{label:"Porta",get color(){return t(a)},children:(l,f)=>{fn(l,{children:(u,d)=>{fe(u,{label:"time",get value(){return e.config.portamento},min:0,max:500,step:1,onchange:m=>e.updateConfig({portamento:m}),get color(){return t(a)},hint:"post-porta-time"})}})},$$slots:{default:!0}});var c=v(o,2);Sn(c,{label:"Unison",get color(){return t(a)},children:(l,f)=>{fn(l,{children:(u,d)=>{var m=Df(),b=Ae(m);fe(b,{label:"voices",get value(){return e.config.unison},min:1,max:8,step:1,onchange:h=>e.updateConfig({unison:h}),get color(){return t(a)},hint:"post-unison-voices"});var _=v(b,2);fe(_,{label:"detune",get value(){return e.config.unison_detune},min:0,max:1,step:.001,onchange:h=>e.updateConfig({unison_detune:h}),get color(){return t(a)},hint:"post-unison-detune"});var w=v(_,2);fe(w,{label:"spread",get value(){return e.config.unison_spread},min:0,max:1,step:.01,onchange:h=>e.updateConfig({unison_spread:h}),get color(){return t(a)},hint:"post-unison-spread"}),S(u,m)}})},$$slots:{default:!0}}),Q("mouseenter",r,()=>ue.set("post-block")),S(n,r),ke()}var Cf=T('<button aria-label="Piano key"></button>'),Lf=T('<button aria-label="Piano key"></button>'),Mf=T('<div class="keyboard svelte-1hwart2" role="group" aria-label="Piano keyboard"><!> <!></div>');function Ef(n,e){ye(e,!0);let a=ge(e,"octave",3,4),r=ge(e,"activeKeys",19,()=>new Set);const s=[0,2,4,5,7,9,11],i=[1,3,-1,6,8,10,-1],o=[0,1,-1,3,4,5,-1];function c(C,O){return(a()+1+O)*12+C}function l(C){e.onkeydown(C)}function f(C){e.onkeyup(C)}function u(){const C=[],O=7.142857142857143;for(let P=0;P<2;P++){const y=P*7*O;for(let g=0;g<7;g++)C.push({semi:c(s[g],P),black:!1,left:y+g*O,width:O});for(let g=0;g<7;g++){if(i[g]===-1)continue;const D=o[g];C.push({semi:c(i[g],P),black:!0,left:y+(D+.65)*O,width:O*.7})}}return C}let d=q(u),m=q(()=>t(d).filter(C=>!C.black)),b=q(()=>t(d).filter(C=>C.black)),_=j(!1);var w=Mf(),h=k(w);en(h,17,()=>t(m),$e,(C,O)=>{var P=Cf();let y,g;te(D=>{y=ve(P,1,"key white svelte-1hwart2",null,y,D),g=Xe(P,"",g,{left:`${t(O).left??""}%`,width:`${t(O).width??""}%`})},[()=>({active:r().has(t(O).semi)})]),N("pointerdown",P,D=>{D.preventDefault(),l(t(O).semi)}),N("pointerup",P,()=>f(t(O).semi)),Q("pointerleave",P,()=>{t(_)&&f(t(O).semi)}),Q("pointerenter",P,()=>{t(_)&&l(t(O).semi)}),S(C,P)});var A=v(h,2);en(A,17,()=>t(b),$e,(C,O)=>{var P=Lf();let y,g;te(D=>{y=ve(P,1,"key black svelte-1hwart2",null,y,D),g=Xe(P,"",g,{left:`${t(O).left??""}%`,width:`${t(O).width??""}%`})},[()=>({active:r().has(t(O).semi)})]),N("pointerdown",P,D=>{D.preventDefault(),l(t(O).semi)}),N("pointerup",P,()=>f(t(O).semi)),Q("pointerleave",P,()=>{t(_)&&f(t(O).semi)}),Q("pointerenter",P,()=>{t(_)&&l(t(O).semi)}),S(C,P)}),Q("mouseenter",w,()=>ue.set("piano-keyboard")),N("pointerdown",w,()=>{p(_,!0)}),N("pointerup",w,()=>{p(_,!1)}),Q("pointerleave",w,()=>{p(_,!1)}),S(n,w),ke()}Ye(["pointerdown","pointerup"]);var Of=T('<button class="hit-btn svelte-1bvy689">Hit</button>');function Ff(n,e){ye(e,!0);var a=Of();Q("mouseenter",a,()=>ue.set("hit-button")),N("pointerdown",a,r=>{r.preventDefault(),e.onhit()}),S(n,a),ke()}Ye(["pointerdown"]);var zf=T('<!> <div class="measure-view svelte-i7auzo"><!></div>',1),If=T('<div class="demo-editor svelte-i7auzo"><div class="controls-stack svelte-i7auzo"><span class="label svelte-i7auzo">demo</span> <!> <!> <div class="switch-row svelte-i7auzo"><span class="switch-label svelte-i7auzo">scale</span> <!></div> <div class="switch-row svelte-i7auzo"><span class="switch-label svelte-i7auzo">note</span> <!></div></div> <!></div>');function Nf(n,e){ye(e,!0);let a=q(()=>Fn.resolved==="light"?"#b07820":"#cc9944"),r=ge(e,"octave",3,4),s=j(_n([])),i=j(120),o=j(""),c=j(""),l=j(0),f=q(()=>Cn.playing&&Pe.playing),u=q(()=>Pe.position?.tracks[0]??null),d=q(()=>t(f)&&t(u)?t(u).measure_idx:-1),m=q(()=>t(f)&&t(u)?t(u).beat_time:0);function b(se){return se.filter(he=>"Beat"in he).length}He(()=>{p(i,e.demo?.bpm??120,!0),p(o,e.demo?.scale??"",!0),p(c,e.demo?.root??"",!0);const se=e.demo?.pattern??"";se?b0(se).then(he=>{p(s,he,!0)}):p(s,[],!0)}),He(()=>{t(s).length===0?p(l,0):t(l)>=t(s).length&&p(l,t(s).length-1)});function _(){const se=y0(t(s));e.onchange({pattern:se,bpm:t(i)||null,scale:t(o)||null,root:t(c)||null})}function w(se,he,Le){io(t(s)[t(l)],se,he,Le),_()}async function h(se,he,Le){try{await oo(t(s)[t(l)],se,he,Le)&&_()}catch{}}function A(){w0(t(s)[t(l)]),_()}function C(se){lo(t(s)[t(l)],se),_()}function O(se,he){co(t(s)[t(l)],se,he),_()}async function P(se,he){try{await Vs(t(s)[t(l)],se,he)&&_()}catch{}}function y(se,he){uo(t(s)[t(l)],se,he),_()}function g(se){p(l,se,!0)}function D(){t(s).push([{Beat:["Rest","Rest","Rest","Rest"]}]),p(l,t(s).length-1),_()}function L(se){t(s).splice(se,1),t(l)>=t(s).length&&t(s).length>0&&p(l,t(s).length-1),_()}function W(se,he){const[Le]=t(s).splice(se,1);t(s).splice(he,0,Le),t(l)===se?p(l,he,!0):se<t(l)&&he>=t(l)?ca(l,-1):se>t(l)&&he<=t(l)&&ca(l),_()}const z=["","maj","min","penta","blues","chrom"],$=["","c","c#","d","d#","e","f","f#","g","g#","a","a#","b"];var F=If(),B=k(F),M=v(k(B),2);Bs(M,{label:"Bpm",get value(){return t(i)},min:40,max:240,step:1,onchange:se=>{p(i,se,!0),_()},get color(){return t(a)},hint:"demo-bpm"});var V=v(M,2);Bs(V,{label:"Oct",get value(){return r()},min:0,max:8,step:1,onchange:se=>e.onoctavechange?.(se),get color(){return t(a)},hint:"demo-oct"});var U=v(V,2),Z=v(k(U),2);xa(Z,{get options(){return z},get value(){return t(o)},onchange:se=>{p(o,se,!0),_()},hint:"demo-scale"});var G=v(U,2),Y=v(k(G),2);xa(Y,{get options(){return $},get value(){return t(c)},onchange:se=>{p(c,se,!0),_()},hint:"demo-root"});var re=v(B,2);{var ce=se=>{var he=zf(),Le=Ae(he);{let Se=q(()=>t(s).map((Qe,tn)=>({label:String(tn+1)}))),Ee=q(()=>t(d)>=0&&t(s)[t(d)]?t(m)/(b(t(s)[t(d)])||1):0);Ia(Le,{get items(){return t(Se)},get selectedIndex(){return t(l)},get activeIndex(){return t(d)},get activeProgress(){return t(Ee)},onselect:g,onadd:D,ondelete:L,onmove:W})}var we=v(Le,2),Te=k(we);{let Se=q(()=>t(d)===t(l)),Ee=q(()=>t(d)===t(l)?t(m):0);fo(Te,{get items(){return t(s)[t(l)]},get playing(){return t(Se)},get beatPosition(){return t(Ee)},onchange:(Qe,tn,gn)=>w(Qe,tn,gn),onaddbeat:A,ondeletemeasure:()=>L(t(l)),ondeleteitem:C,ondeletedivision:(Qe,tn)=>O(Qe,tn),oninsertcommand:(Qe,tn)=>P(Qe,tn),onreorderitem:(Qe,tn)=>y(Qe,tn),onedit:(Qe,tn,gn)=>h(Qe,tn,gn)})}S(se,he)},De=se=>{Ia(se,{items:[],selectedIndex:-1,onselect:()=>{},onadd:D,onmove:()=>{}})};ne(re,se=>{t(s).length>0?se(ce):se(De,!1)})}Q("mouseenter",F,()=>ue.set("demo-editor")),S(n,F),ke()}class jf{#e=j(_n([]));get inputs(){return t(this.#e)}set inputs(e){p(this.#e,e,!0)}access=null;callbacks=null;async init(e){if(this.callbacks=e,!!navigator.requestMIDIAccess)try{this.access=await navigator.requestMIDIAccess(),this.bindInputs(),this.access.onstatechange=()=>this.bindInputs()}catch{}}destroy(){if(this.access){for(const e of this.access.inputs.values())e.onmidimessage=null;this.access.onstatechange=null}this.access=null,this.callbacks=null,this.inputs=[]}bindInputs(){if(!this.access)return;const e=[];for(const a of this.access.inputs.values())a.onmidimessage=r=>this.handleMessage(r),a.name&&e.push(a.name);this.inputs=e}handleMessage(e){const a=e.data;if(!a||a.length<3)return;const r=a[0]&240,s=(a[0]&15)+1,i=a[1],o=a[2];r===144&&o>0?this.callbacks?.onNoteDown(i,o,s):r===128||r===144&&o===0?this.callbacks?.onNoteUp(i,s):r===176&&this.callbacks?.onCC?.(s,i,o)}}const Ts=new jf,lr="gb-daw-midi-cc-map";function Bf(){try{const n=localStorage.getItem(lr);if(!n)return null;const e=JSON.parse(n);if(e&&typeof e.encoder=="number"&&Array.isArray(e.knobs))return e}catch{}return null}function Hf(n){localStorage.setItem(lr,JSON.stringify(n))}class Vf{#e=j(0);get regionIndex(){return t(this.#e)}set regionIndex(e){p(this.#e,e,!0)}#t=j(_n([]));get regions(){return t(this.#t)}set regions(e){p(this.#t,e,!0)}#n=j(_n(Bf()));get ccMap(){return t(this.#n)}set ccMap(e){p(this.#n,e,!0)}#a=j(null);get learnStep(){return t(this.#a)}set learnStep(e){p(this.#a,e,!0)}prevCC=new Map;learnSeen=new Set;learnKnobs=[];learnFaders=[];learnPads=[];learnEncoder=-1;get currentRegion(){return this.regions[this.regionIndex]??null}get hasCcMap(){return this.ccMap!==null}get learnPrompt(){const e=this.learnStep;if(!e)return"";switch(e.phase){case"encoder":return"Turn the encoder...";case"knobs":return`Turn knob ${e.index+1} of 8...`;case"faders":return`Move fader ${e.index+1} of 4...`;case"pads":return`Press pad ${e.index+1} of 8 (or press Done to skip)...`}}setRegions(e){this.regions=e,this.regionIndex>=e.length&&(this.regionIndex=Math.max(0,e.length-1))}navigateRegion(e){if(this.regions.length===0)return;let a=this.regionIndex+e;a<0&&(a=this.regions.length-1),a>=this.regions.length&&(a=0),this.regionIndex=a,this.prevCC.clear()}jumpToBlock(e){const a=this.regions.findIndex(r=>r.block===e);a>=0&&(this.regionIndex=a,this.prevCC.clear())}handleCC(e,a,r){if(this.learnStep){this.learnCC(a);return}if(!this.ccMap)return;if(a===this.ccMap.encoder){r>=1&&r<=63?this.navigateRegion(-1):r>=65&&r<=127&&this.navigateRegion(1);return}const s=this.ccMap.knobs.indexOf(a);if(s>=0){this.applyCC(`K${s+1}`,r);return}const i=this.ccMap.faders.indexOf(a);if(i>=0){this.applyCC(`F${i+1}`,r);return}}handlePad(e){if(this.learnStep&&this.learnStep.phase==="pads"){this.learnPadNote(e);return}if(!this.ccMap||this.ccMap.pads.length===0)return;const a=this.ccMap.pads.indexOf(e);a>=0&&a<Gs.length&&this.jumpToBlock(Gs[a])}applyCC(e,a){const r=this.currentRegion;if(!r)return;const s=r.bindings.find(_=>_.slot===e);if(!s)return;if(s.type==="discrete"){const _=s.options??[];if(_.length===0)return;const w=Math.round(a/127*(_.length-1));s.set(_[w]),this.prevCC.set(e,a);return}if(s.type==="toggle"){s.set(a>=64),this.prevCC.set(e,a);return}const i=this.prevCC.get(e);if(this.prevCC.set(e,a),i===void 0)return;const o=a-i;if(o===0)return;const c=s.min??0,l=s.max??1,f=s.step??.01,u=s.get();let d;if(o>0){const _=127-i,w=l-u;d=_>0?u+o*(w/_):u}else{const _=i,w=u-c;d=_>0?u+o*(w/_):u}const m=Math.round(d/f)*f,b=Math.min(l,Math.max(c,m));s.set(b)}startLearn(){this.learnSeen.clear(),this.learnKnobs=[],this.learnFaders=[],this.learnPads=[],this.learnEncoder=-1,this.learnStep={phase:"encoder"}}cancelLearn(){this.learnStep=null}skipPads(){this.finishLearn()}learnCC(e){const a=this.learnStep;if(a)switch(a.phase){case"encoder":this.learnEncoder=e,this.learnSeen.add(e),this.learnStep={phase:"knobs",index:0};break;case"knobs":if(this.learnSeen.has(e))return;this.learnSeen.add(e),this.learnKnobs.push(e),this.learnKnobs.length>=8?this.learnStep={phase:"faders",index:0}:this.learnStep={phase:"knobs",index:this.learnKnobs.length};break;case"faders":if(this.learnSeen.has(e))return;this.learnSeen.add(e),this.learnFaders.push(e),this.learnFaders.length>=4?this.learnStep={phase:"pads",index:0}:this.learnStep={phase:"faders",index:this.learnFaders.length};break}}learnPadNote(e){!this.learnStep||this.learnStep.phase!=="pads"||(this.learnPads.push(e),this.learnPads.length>=8?this.finishLearn():this.learnStep={phase:"pads",index:this.learnPads.length})}finishLearn(){const e={encoder:this.learnEncoder,knobs:this.learnKnobs,faders:this.learnFaders,pads:this.learnPads};this.ccMap=e,Hf(e),this.learnStep=null}clearMap(){this.ccMap=null,localStorage.removeItem(lr)}}const dn=new Vf;function de(n,e,a,r,s,i,o){return{slot:n,label:e,type:"vert",min:a,max:r,step:s,get:i,set:o}}function ht(n,e,a,r,s){return{slot:n,label:e,type:"discrete",options:a,get:r,set:s}}function Za(n,e,a,r){return{slot:n,label:e,type:"toggle",get:a,set:r}}function Ja(n,e){const a=Ft(n),r=ht("K1","type",["AD","ADSR","MultiTap"],()=>a,s=>e({__type__:s}));return"AD"in n?{type:r,faders:[de("F1","atk",0,500,.1,()=>n.AD.attack_ms,s=>e({attack_ms:s})),de("F2","dec",0,5e3,1,()=>n.AD.decay_ms,s=>e({decay_ms:s})),de("F3","start",-1,1,.01,()=>n.AD.start,s=>e({start:s})),de("F4","amt",-1,1,.01,()=>n.AD.amt,s=>e({amt:s}))]}:"ADSR"in n?{type:r,faders:[de("F1","atk",0,2e3,.1,()=>n.ADSR.attack_ms,s=>e({attack_ms:s})),de("F2","dec",0,5e3,1,()=>n.ADSR.decay_ms,s=>e({decay_ms:s})),de("F3","sus",0,1,.01,()=>n.ADSR.sustain,s=>e({sustain:s})),de("F4","rel",0,5e3,1,()=>n.ADSR.release_ms,s=>e({release_ms:s}))]}:{type:r,faders:[de("F1","taps",1,16,1,()=>n.MultiTap.num_taps,s=>e({num_taps:s})),de("F2","intvl",1,500,1,()=>n.MultiTap.tap_interval,s=>e({tap_interval:s})),de("F3","amp",0,1,.01,()=>n.MultiTap.tap_amp,s=>e({tap_amp:s})),de("F4","tail",0,5e3,1,()=>n.MultiTap.tail_decay,s=>e({tail_decay:s}))]}}const Gf=["Lowpass","Highpass","Bandpass"];function Xa(n,e){return{type:ht("K1","type",Gf,()=>fa(n),a=>{e(Xn(a,ma(n),pa(n)))}),freq:de("F1","freq",20,2e4,1,()=>ma(n),a=>{e(Xn(fa(n),a,pa(n)))}),q:de("F2","Q",.1,20,.01,()=>pa(n),a=>{e(Xn(fa(n),ma(n),a))})}}function Kf(n,e,a,r){const s=[],i=["Ramp","Pulse","Sine","Triangle","S&H"],o=["Free","Trig","Rand"];s.push({id:"lfo",label:"LFO-1",block:"mod",bindings:[ht("K1","wave",i,()=>n.lfo.wave??"S&H",u=>{const d=u==="S&H"?null:u;e({lfo:{...n.lfo,wave:d}})}),ht("K2","mode",o,()=>n.lfo.mode,u=>{e({lfo:{...n.lfo,mode:u}})}),de("F1","rate",0,15,1,()=>n.lfo.rate,u=>{e({lfo:{...n.lfo,rate:u}})})]}),s.push({id:"lfo2",label:"LFO-2",block:"mod",bindings:[ht("K1","wave",i,()=>n.lfo2.wave??"S&H",u=>{const d=u==="S&H"?null:u;e({lfo2:{...n.lfo2,wave:d}})}),ht("K2","mode",o,()=>n.lfo2.mode,u=>{e({lfo2:{...n.lfo2,mode:u}})}),de("F1","rate",0,15,1,()=>n.lfo2.rate,u=>{e({lfo2:{...n.lfo2,rate:u}})}),de("F2","L1→rate",0,1,.01,()=>n.lfo1_to_lfo2_rate,u=>{e({lfo1_to_lfo2_rate:u})}),de("F3","L1→dep",0,1,.01,()=>n.lfo1_to_lfo2_depth,u=>{e({lfo1_to_lfo2_depth:u})})]});{const u=n.pitch_env??Zn("AD"),d=Ja(u,m=>{if("__type__"in m){e({pitch_env:Zn(m.__type__)});return}const b=Ft(u),_=u[b];e({pitch_env:{[b]:{..._,...m}}})});s.push({id:"pitch-env",label:"ENV-1 Pitch",block:"mod",bindings:[d.type,...d.faders]})}{const u=n.filter_env??Zn("AD"),d=Ja(u,m=>{if("__type__"in m){e({filter_env:Zn(m.__type__)});return}const b=Ft(u),_=u[b];e({filter_env:{[b]:{..._,...m}}})});s.push({id:"filter-env",label:"ENV-2 Filter",block:"mod",bindings:[d.type,...d.faders]})}const c=["Sine","Triangle","Saw","Pulse","WhiteNoise","PinkNoise"],l=["Pitched","Fixed","Swept"],f=n.oscs.filter(u=>u!==null).length;for(let u=0;u<n.oscs.length;u++){let d=function(h){const A=n.oscs[b]??is();a(b,{...A,...h})};const m=n.oscs[u]??is(),b=u,_=mo(m.freq),w=[];if(_==="Pitched"&&typeof m.freq=="object"&&"Pitched"in m.freq){const h=m.freq.Pitched;w.push(de("F1","semi",-48,48,1,()=>h.semi,A=>{d({freq:{Pitched:{semi:A,fine:h.fine}}})}),de("F2","fine",-100,100,1,()=>h.fine,A=>{d({freq:{Pitched:{semi:h.semi,fine:A}}})}))}else if(_==="Fixed")w.push(de("F1","hz",20,2e4,1,()=>m.fixed_hz,h=>{d({fixed_hz:h})}));else if(_==="Swept"&&typeof m.freq=="object"&&"Swept"in m.freq){const h=m.freq.Swept;w.push(de("F1","atk",0,100,.01,()=>h.atk,A=>{d({freq:{Swept:{...h,atk:A}}})}),de("F2","dec",0,5e3,1,()=>h.dec,A=>{d({freq:{Swept:{...h,dec:A}}})}),de("F3","base",0,135,.1,()=>h.base,A=>{d({freq:{Swept:{...h,base:A}}})}),de("F4","amt",-135,135,.1,()=>h.amt,A=>{d({freq:{Swept:{...h,amt:A}}})}))}s.push({id:`osc-${u}`,label:`OSC-${u+1}`,block:"osc",bindings:[ht("K1","shape",c,()=>m.shape,h=>d({shape:h})),ht("K2","freq",l,()=>_,h=>{let A;switch(h){case"Pitched":A={Pitched:{semi:0,fine:0}};break;case"Fixed":A="Fixed";break;case"Swept":A={Swept:{atk:.1,dec:200,base:48,amt:50}};break;default:return}d({freq:A})}),de("K3","pw",0,1,.01,()=>m.pw,h=>d({pw:h})),de("K4","pw lfo",0,1,.01,()=>m.pw_lfo_amt,h=>d({pw_lfo_amt:h})),de("K5","p.lfo",0,48,.1,()=>m.pitch_lfo_amt,h=>d({pitch_lfo_amt:h})),de("K6","p.env",-135,135,.1,()=>m.pitch_env_amt,h=>d({pitch_env_amt:h})),de("K7","p.lfo2",0,48,.1,()=>m.pitch_lfo2_amt,h=>d({pitch_lfo2_amt:h})),de("K8","pw lfo2",0,1,.01,()=>m.pw_lfo2_amt,h=>d({pw_lfo2_amt:h})),...w]}),s.push({id:`osc-${u}-pdif`,label:`OSC-${u+1} PDif`,block:"osc",bindings:[de("K1","pdif",0,1,.01,()=>m.phaz_diff,h=>d({phaz_diff:h})),de("K2","pd lfo",0,1,.01,()=>m.phaz_diff_lfo_amt,h=>d({phaz_diff_lfo_amt:h})),de("K3","pd lf2",0,1,.01,()=>m.phaz_diff_lfo2_amt,h=>d({phaz_diff_lfo2_amt:h}))]}),u===0&&n.oscs[0]!==null&&s.push({id:"osc-feedback",label:"OSC-1 Feedback",block:"osc",bindings:[de("F1","fb fm",0,3,.01,()=>n.osc_interaction.feedback_fm,h=>{e({osc_interaction:{...n.osc_interaction,feedback_fm:h}})})]}),u===1&&s.push({id:"osc-interact",label:"OSC Interact",block:"osc",bindings:f>=2?[Za("K1","sync",()=>n.osc_interaction.sync,h=>{e({osc_interaction:{...n.osc_interaction,sync:h}})}),de("K2","window",0,1,.01,()=>n.osc_interaction.sync_window,h=>{e({osc_interaction:{...n.osc_interaction,sync_window:h}})}),Za("K3","ring",()=>n.osc_interaction.ring_mod,h=>{e({osc_interaction:{...n.osc_interaction,ring_mod:h}})}),de("F1","fm",0,10,.01,()=>n.osc_interaction.fm_amt,h=>{e({osc_interaction:{...n.osc_interaction,fm_amt:h}})}),de("F2","fm env",-10,10,.01,()=>n.osc_interaction.fm_env_amt,h=>{e({osc_interaction:{...n.osc_interaction,fm_env_amt:h}})})]:[]})}for(let u=0;u<n.paths.length;u++){let d=function(_){const w=n.paths[b]??os();r(b,{...w,..._})};const m=n.paths[u]??os(),b=u;s.push({id:`path-${u}-mix`,label:`PATH-${u+1} Mix`,block:"path",bindings:[de("F1","O1",0,1,.01,()=>m.mix[0],_=>{const w=[...m.mix];w[0]=_,d({mix:w})}),de("F2","O2",0,1,.01,()=>m.mix[1],_=>{const w=[...m.mix];w[1]=_,d({mix:w})}),de("F3","O3",0,1,.01,()=>m.mix[2],_=>{const w=[...m.mix];w[2]=_,d({mix:w})}),de("F4","O4",0,1,.01,()=>m.mix[3],_=>{const w=[...m.mix];w[3]=_,d({mix:w})}),de("K1","O5",0,1,.01,()=>m.mix[4],_=>{const w=[...m.mix];w[4]=_,d({mix:w})}),de("K2","O6",0,1,.01,()=>m.mix[5],_=>{const w=[...m.mix];w[5]=_,d({mix:w})})]});{const _=m.pre_filter??Xn("Lowpass",1e3,.7),w=Xa(_,h=>d({pre_filter:h}));s.push({id:`path-${u}-pre`,label:`PATH-${u+1} Pre`,block:"path",bindings:[w.type,w.freq,w.q]})}{const _=m.env??Zn("AD"),w=Ja(_,h=>{if("__type__"in h){d({env:Zn(h.__type__)});return}const A=Ft(_),C=_[A];d({env:{[A]:{...C,...h}}})});s.push({id:`path-${u}-env`,label:`PATH-${u+1} Env`,block:"path",bindings:[w.type,...w.faders]})}{const _=m.post_filter??Xn("Lowpass",1e3,.7),w=Xa(_,h=>d({post_filter:h}));s.push({id:`path-${u}-post`,label:`PATH-${u+1} Post`,block:"path",bindings:[w.type,w.freq,w.q]})}}{const u=n.shape_filter??Xn("Lowpass",1e3,.7),d=Xa(u,m=>e({shape_filter:m}));s.push({id:"fx-shape",label:"FX Shape",block:"fx",bindings:[d.type,d.freq,d.q]})}s.push({id:"fx-drive",label:"FX Drive",block:"fx",bindings:[Za("K1","half rect",()=>n.half_rect,u=>e({half_rect:u})),Za("K2","hard clip",()=>n.hard_clip!==null,u=>e({hard_clip:u?[1,.8]:null})),de("K3","hc drv",1,10,.01,()=>n.hard_clip?.[0]??1,u=>{const d=n.hard_clip??[1,.8];e({hard_clip:[u,d[1]]})}),de("K4","hc thr",.1,1,.01,()=>n.hard_clip?.[1]??.8,u=>{const d=n.hard_clip??[1,.8];e({hard_clip:[d[0],u]})}),de("F1","clip",0,10,.01,()=>n.soft_clip??0,u=>e({soft_clip:u>0?u:null})),de("F2","fold",0,10,.01,()=>n.wavefold??0,u=>e({wavefold:u>0?u:null})),de("F3","crush",0,16,1,()=>n.bit_crush??0,u=>e({bit_crush:u>0?u:null})),de("F4","decim",0,32,1,()=>n.decimate??0,u=>e({decimate:u>0?u:null}))]});{const u={engine:"Moog",mode:"Lowpass",cutoff:80,resonance:0,env_amt:0,lfo_amt:0,lfo2_amt:0,velo_amt:0,key_track:0,morph:0,morph_lfo_amt:0,morph_lfo2_amt:0,morph_env_amt:0},d=n.main_filter??u,m=["Moog","Svf"],b=["Lowpass","Highpass","Bandpass"];s.push({id:"vcf",label:"VCF Filter",block:"vcf",bindings:[ht("K1","mode",b,()=>d.mode,_=>{e({main_filter:{...d,mode:_}})}),ht("K2","engine",m,()=>d.engine??"Moog",_=>{e({main_filter:{...d,engine:_}})}),de("K3","env",-135,135,.1,()=>d.env_amt,_=>e({main_filter:{...d,env_amt:_}})),de("K4","lfo",-135,135,.1,()=>d.lfo_amt,_=>e({main_filter:{...d,lfo_amt:_}})),de("K5","morph",0,1,.01,()=>d.morph??0,_=>e({main_filter:{...d,morph:_}})),de("K6","velo",-135,135,.1,()=>d.velo_amt,_=>e({main_filter:{...d,velo_amt:_}})),de("K7","key",-2,2,.01,()=>d.key_track,_=>e({main_filter:{...d,key_track:_}})),de("F1","cutoff",0,135,.1,()=>d.cutoff,_=>e({main_filter:{...d,cutoff:_}})),de("F2","reso",0,1,.01,()=>d.resonance,_=>e({main_filter:{...d,resonance:_}}))]})}{const u=n.amp_env??Zn("ADSR"),d=Ja(u,m=>{if("__type__"in m){e({amp_env:Zn(m.__type__)});return}const b=Ft(u),_=u[b];e({amp_env:{[b]:{..._,...m}}})});s.push({id:"amp-env",label:"AMP Env",block:"amp",bindings:[d.type,...d.faders]})}s.push({id:"amp-level",label:"AMP Level",block:"amp",bindings:[de("F1","amp",0,2,.01,()=>n.amp,u=>e({amp:u})),de("F2","velo",0,1,.01,()=>n.amp_velo_amt,u=>e({amp_velo_amt:u})),de("F3","vol lfo",0,1,.01,()=>n.vol_lfo_amt,u=>e({vol_lfo_amt:u})),de("F4","vol lfo2",0,1,.01,()=>n.vol_lfo2_amt,u=>e({vol_lfo2_amt:u}))]});{const u=n.post_filter??Xn("Lowpass",1e3,.7),d=Xa(u,m=>e({post_filter:m}));s.push({id:"post-filter",label:"POST Filter",block:"post",bindings:[d.type,d.freq,d.q]})}return s.push({id:"post-pan",label:"POST Pan+Uni",block:"post",bindings:[de("K1","voices",1,8,1,()=>n.unison,u=>e({unison:u})),de("K2","detune",0,1,.001,()=>n.unison_detune,u=>e({unison_detune:u})),de("K3","spread",0,1,.01,()=>n.unison_spread,u=>e({unison_spread:u})),de("K4","porta",0,500,1,()=>n.portamento,u=>e({portamento:u})),de("F1","pan",-1,1,.01,()=>n.pan,u=>e({pan:u})),de("F2","pan lfo",0,1,.01,()=>n.pan_lfo_amt,u=>e({pan_lfo_amt:u})),de("F3","pan lfo2",0,1,.01,()=>n.pan_lfo2_amt,u=>e({pan_lfo2_amt:u}))]}),s}var Wf=T('<input class="rename-input svelte-1yx9lnw"/> <button class="header-btn ok svelte-1yx9lnw">ok</button> <button class="header-btn cancel svelte-1yx9lnw">esc</button>',1),Uf=T('<span class="selected-label svelte-1yx9lnw"> </span> <button class="header-btn svelte-1yx9lnw" title="Rename instrument">&#9998;</button> <button class="header-btn svelte-1yx9lnw" title="Duplicate instrument">&#10697;</button>',1),Qf=T('<!> <button class="header-btn new svelte-1yx9lnw" title="New instrument">+ New</button>',1),Zf=T('<button class="header-btn midi svelte-1yx9lnw"> </button>'),Jf=T('<span class="region-slot svelte-1yx9lnw"> </span>'),Xf=T('<span class="region-slot svelte-1yx9lnw"> </span>'),Yf=T('<div class="region-bar svelte-1yx9lnw"><button class="region-nav svelte-1yx9lnw">&#9664;</button> <span class="region-label svelte-1yx9lnw"> </span> <button class="region-nav svelte-1yx9lnw">&#9654;</button> <span class="region-slots svelte-1yx9lnw"><!> <!></span></div>'),$f=T('<!> <div class="header-right svelte-1yx9lnw"><!> <!></div>',1),em=T('<pre class="error svelte-1yx9lnw"> </pre>'),nm=T('<p class="placeholder svelte-1yx9lnw">Loading...</p>'),tm=T('<p class="placeholder svelte-1yx9lnw">Select an instrument to edit.</p>'),am=T('<button class="learn-btn svelte-1yx9lnw">Skip Pads</button>'),sm=T('<div class="learn-overlay svelte-1yx9lnw"><div class="learn-dialog svelte-1yx9lnw"><h3 class="svelte-1yx9lnw">MIDI Learn</h3> <p class="learn-prompt svelte-1yx9lnw"> </p> <div class="learn-progress svelte-1yx9lnw"><span>Encoder</span> <span>Knobs</span> <span>Faders</span> <span>Pads</span></div> <div class="learn-actions svelte-1yx9lnw"><!> <button class="learn-btn cancel svelte-1yx9lnw">Cancel</button></div></div></div>'),rm=T('<div class="detail-panel svelte-1yx9lnw"><div class="detail-scaler svelte-1yx9lnw"><!></div></div> <div class="bottom-section svelte-1yx9lnw"><!> <div class="live-controls svelte-1yx9lnw"><!> <!></div></div> <!>',1),im=T('<div class="panel svelte-1yx9lnw"><div class="top-section svelte-1yx9lnw"><div class="header svelte-1yx9lnw"><div class="header-left svelte-1yx9lnw"><span class="title svelte-1yx9lnw">Instrument</span> <!></div> <!></div> <!> <!></div> <!></div>');function om(n,e){ye(e,!0);let a=j(_n([])),r=q(()=>ee.selectedInstrument),s=j(null),i=j(4),o=j(null),c=j(null),l=j(!1),f=!1,u=j(!1),d=j(""),m=j("osc"),b=j(null),_=j(_n(new Set)),w=j(!1),h=!1,A=j(void 0),C=j(void 0),O=j(1);He(()=>{if(!t(A)||!t(C))return;const H=new ResizeObserver(()=>{if(!t(A)||!t(C))return;const ae=t(A).clientWidth,_e=t(A).clientHeight,Oe=t(C).scrollWidth,sn=t(C).scrollHeight;Oe>0&&sn>0&&p(O,Math.min(ae/Oe,_e/sn,2)*.92)});return H.observe(t(A)),H.observe(t(C)),()=>H.disconnect()});const P={KeyZ:0,KeyS:1,KeyX:2,KeyD:3,KeyC:4,KeyV:5,KeyG:6,KeyB:7,KeyH:8,KeyN:9,KeyJ:10,KeyM:11},y={KeyQ:0,Digit2:1,KeyW:2,Digit3:3,KeyE:4,KeyR:5,Digit5:6,KeyT:7,Digit6:8,KeyY:9,Digit7:10,KeyU:11};He(()=>{ee.revision,xt(()=>G())}),He(()=>{const H=t(r);ee.revision,H?xt(()=>Y(H)):(p(s,null),p(b,null),p(o,null))}),He(()=>(window.addEventListener("keydown",L),window.addEventListener("keyup",W),()=>{window.removeEventListener("keydown",L),window.removeEventListener("keyup",W)})),He(()=>{if(t(s))return Ts.init({onNoteDown(H,ae,_e){_e===10?dn.handlePad(H):$(H,ae)},onNoteUp(H,ae){F(H)},onCC(H,ae,_e){dn.handleCC(H,ae,_e)}}),()=>Ts.destroy()}),He(()=>{if(!t(s))return;const H=Kf(t(s),ce,De,se);xt(()=>dn.setRegions(H))});let g=j(-1),D=j(-1);He(()=>{const H=dn.currentRegion;if(H){if(xt(()=>{p(m,H.block,!0)}),H.block==="osc"){const ae=H.id.match(/^osc-(\d+)$/);p(g,ae?parseInt(ae[1]):H.id==="osc-feedback"?0:H.id==="osc-interact"?1:-1,!0)}if(H.block==="path"){const ae=H.id.match(/^path-(\d+)-/);p(D,ae?parseInt(ae[1]):-1,!0)}}});function L(H){if(H.repeat||H.target instanceof HTMLInputElement||H.target instanceof HTMLTextAreaElement||H.target instanceof HTMLSelectElement||!t(s))return;if(H.code==="Digit1"){B();return}const ae=P[H.code];if(ae!==void 0){const Oe=(t(i)+1)*12+ae;$(Oe);return}const _e=y[H.code];if(_e!==void 0){const Oe=(t(i)+2)*12+_e;$(Oe);return}}function W(H){if(H.target instanceof HTMLInputElement||H.target instanceof HTMLTextAreaElement||H.target instanceof HTMLSelectElement||!t(s))return;const ae=P[H.code];if(ae!==void 0){const Oe=(t(i)+1)*12+ae;F(Oe);return}const _e=y[H.code];if(_e!==void 0){const Oe=(t(i)+2)*12+_e;F(Oe);return}}async function z(){h||(await e.bridge.init(),await e.bridge.resume(),h=!0)}async function $(H,ae=100){await z(),e.bridge.liveKeyDown(H,ae),p(_,new Set([...t(_),H]),!0)}function F(H){e.bridge.liveKeyUp(H);const ae=new Set(t(_));ae.delete(H),p(_,ae,!0)}async function B(){await z(),e.bridge.liveTrigger()}async function M(H=!1){t(s)&&(await z(),H?e.bridge.liveSetConfig(JSON.stringify(t(s))):e.bridge.liveUpdateConfig(JSON.stringify(t(s))))}async function V(){!t(o)?.pattern||!t(r)||(await z(),e.bridge.liveLoadDemo(ee.text,t(r),JSON.stringify(t(o))),p(w,!0),Cn.playing=!0)}function U(){e.bridge.liveStopDemo(),p(w,!1),Cn.playing=!1}He(()=>(Cn.play=V,Cn.stop=U,()=>{Cn.play=null,Cn.stop=null,Cn.playing=!1}));function Z(H){p(o,H,!0),re()}async function G(){try{const H=await Ji(ee.text);p(a,[...new Set(H)],!0)}catch{p(a,[],!0)}}async function Y(H){p(l,!0),p(c,null);try{f=!0;const ae=await vc(ee.text,H);p(s,ae.voice_config,!0),p(i,ae.octave,!0),p(o,ae.demo??null,!0),p(b,await Nr(ae.voice_config),!0),M(!0)}catch(ae){p(c,ae instanceof Error?ae.message:String(ae),!0),p(s,null),p(b,null),p(o,null)}finally{p(l,!1),f=!1}}async function re(){if(!(!t(s)||!t(r)||f))try{let H=await _c(t(s));t(i)!==4&&(H=`octave = ${t(i)}
${H}`),t(o)?.pattern&&(H+=`
[demo]
`,H+=`pattern = ${JSON.stringify(t(o).pattern)}
`,t(o).bpm!=null&&(H+=`bpm = ${t(o).bpm}
`),t(o).scale&&(H+=`scale = ${JSON.stringify(t(o).scale)}
`),t(o).root&&(H+=`root = ${JSON.stringify(t(o).root)}
`)),ee.replaceSectionContent("instrument/"+t(r),H),p(b,await Nr(t(s)),!0),M()}catch(H){p(c,H instanceof Error?H.message:String(H),!0)}}function ce(H){t(s)&&(p(s,{...t(s),...H},!0),re())}function De(H,ae){if(!t(s))return;const _e=[...t(s).oscs];_e[H]=ae,p(s,{...t(s),oscs:_e},!0),re()}function se(H,ae){if(!t(s))return;const _e=[...t(s).paths];_e[H]=ae,p(s,{...t(s),paths:_e},!0),re()}function he(){if(!t(s))return 0;let H=0;for(let ae=0;ae<t(s).oscs.length;ae++)t(s).oscs[ae]!==null&&(H=ae+1);return Math.max(H,2)}function Le(){const H=new Set(t(a));let ae=1;for(;H.has(`inst_${ae}`);)ae++;const _e=`inst_${ae}`;ee.addSection("instrument/"+_e,`octave = 4

`),ee.selectedInstrument=_e}function we(){t(r)&&(p(d,t(r),!0),p(u,!0))}function Te(){if(!t(r)||!t(d).trim()){p(u,!1);return}const H=t(d).trim(),ae=t(r);if(H===ae){p(u,!1);return}ee.renameSection("instrument/"+ae,"instrument/"+H),ee.replaceAllInUserText(`instrument ${ae}`,`instrument ${H}`),ee.selectedInstrument=H,p(u,!1)}function Se(){p(u,!1)}function Ee(){if(!t(r))return;const H=ee.getSectionContent("instrument/"+t(r));if(H===null)return;const ae=new Set(t(a));let _e=`${t(r)}_copy`,Oe=2;for(;ae.has(_e);)_e=`${t(r)}_copy_${Oe}`,Oe++;ee.addSection("instrument/"+_e,H),ee.selectedInstrument=_e}var Qe=im(),tn=k(Qe),gn=k(tn),zn=k(gn),st=v(k(zn),2);{var yn=H=>{var ae=Wf(),_e=Ae(ae),Oe=v(_e,2),sn=v(Oe,2);N("keydown",_e,pn=>{pn.key==="Enter"&&Te(),pn.key==="Escape"&&Se()}),Yn(_e,()=>t(d),pn=>p(d,pn)),N("click",Oe,Te),N("click",sn,Se),S(H,ae)},Pn=H=>{var ae=Qf(),_e=Ae(ae);{var Oe=pn=>{var Ze=Uf(),on=Ae(Ze),me=k(on),Ie=v(on,2),kn=v(Ie,2);te(()=>xe(me,t(r))),N("click",Ie,we),N("click",kn,Ee),S(pn,Ze)};ne(_e,pn=>{t(r)&&pn(Oe)})}var sn=v(_e,2);N("click",sn,Le),S(H,ae)};ne(st,H=>{t(u)?H(yn):H(Pn,!1)})}var Vt=v(zn,2);{var Gt=H=>{var ae=$f(),_e=Ae(ae);kd(_e,{get activity(){return t(b)},get selected(){return t(m)},onselect:me=>{p(m,me,!0),dn.jumpToBlock(me)}});var Oe=v(_e,2),sn=k(Oe);{var pn=me=>{var Ie=Zf(),kn=k(Ie);te(()=>{nn(Ie,"title",dn.hasCcMap?"Re-learn MIDI CCs":"Setup MIDI CCs"),xe(kn,dn.hasCcMap?"Re-learn MIDI":"Setup MIDI")}),N("click",Ie,()=>dn.startLearn()),S(me,Ie)};ne(sn,me=>{Ts.inputs.length>0&&me(pn)})}var Ze=v(sn,2);{var on=me=>{const Ie=q(()=>dn.currentRegion),kn=q(()=>t(Ie)?.bindings??[]),wn=q(()=>t(kn).filter(R=>R.slot.startsWith("K"))),Je=q(()=>t(kn).filter(R=>R.slot.startsWith("F")));var Ne=Yf(),rn=k(Ne),ln=v(rn,2),An=k(ln),E=v(ln,2),I=v(E,2),J=k(I);{var X=R=>{var K=Jf(),le=k(K);te(pe=>xe(le,`K[${pe??""}]`),[()=>t(wn).map(pe=>pe.label).join(" ")]),S(R,K)};ne(J,R=>{t(wn).length>0&&R(X)})}var oe=v(J,2);{var x=R=>{var K=Xf(),le=k(K);te(pe=>xe(le,`F[${pe??""}]`),[()=>t(Je).map(pe=>pe.label).join(" ")]),S(R,K)};ne(oe,R=>{t(Je).length>0&&R(x)})}te(()=>xe(An,t(Ie)?.label??"")),Q("mouseenter",Ne,()=>ue.set("midi-region-bar")),N("click",rn,()=>dn.navigateRegion(-1)),N("click",E,()=>dn.navigateRegion(1)),S(me,Ne)};ne(Ze,me=>{dn.regions.length>0&&dn.hasCcMap&&me(on)})}S(H,ae)};ne(Vt,H=>{t(s)&&H(Gt)})}var Ct=v(gn,2);{var Kt=H=>{var ae=em(),_e=k(ae);te(()=>xe(_e,t(c))),S(H,ae)};ne(Ct,H=>{t(c)&&H(Kt)})}var ie=v(Ct,2);{var be=H=>{var ae=nm();S(H,ae)},qe=H=>{var ae=tm();S(H,ae)};ne(ie,H=>{t(l)?H(be):t(r)||H(qe,1)})}var an=v(tn,2);{var mn=H=>{var ae=rm(),_e=Ae(ae),Oe=k(_e);let sn;var pn=k(Oe);{var Ze=X=>{Gd(X,{get config(){return t(s)},get activity(){return t(b)},updateConfig:ce})},on=X=>{af(X,{get config(){return t(s)},get activity(){return t(b)},setOsc:De,updateConfig:ce,get focusTab(){return t(g)}})},me=X=>{{let oe=q(he);ff(X,{get config(){return t(s)},get activity(){return t(b)},setPath:se,get oscCount(){return t(oe)},get focusTab(){return t(D)}})}},Ie=X=>{_f(X,{get config(){return t(s)},updateConfig:ce})},kn=X=>{xf(X,{get config(){return t(s)},get activity(){return t(b)},updateConfig:ce})},wn=X=>{Af(X,{get config(){return t(s)},get activity(){return t(b)},updateConfig:ce})},Je=X=>{qf(X,{get config(){return t(s)},updateConfig:ce})};ne(pn,X=>{t(m)==="mod"?X(Ze):t(m)==="osc"?X(on,1):t(m)==="path"?X(me,2):t(m)==="fx"?X(Ie,3):t(m)==="vcf"?X(kn,4):t(m)==="amp"?X(wn,5):t(m)==="post"&&X(Je,6)})}Tt(Oe,X=>p(C,X),()=>t(C)),Tt(_e,X=>p(A,X),()=>t(A));var Ne=v(_e,2),rn=k(Ne);Nf(rn,{get demo(){return t(o)},onchange:Z,get octave(){return t(i)},onoctavechange:X=>{p(i,X,!0),re()}});var ln=v(rn,2),An=k(ln);Ff(An,{onhit:B});var E=v(An,2);Ef(E,{get octave(){return t(i)},onkeydown:$,onkeyup:F,get activeKeys(){return t(_)}});var I=v(Ne,2);{var J=X=>{var oe=sm(),x=k(oe),R=v(k(x),2),K=k(R),le=v(R,2),pe=k(le);let Re;var Me=v(pe,2);let Ge;var Ce=v(Me,2);let hn;var xn=v(Ce,2);let mt;var Wt=v(le,2),Rn=k(Wt);{var Tn=Gn=>{var gt=am();N("click",gt,()=>dn.skipPads()),S(Gn,gt)};ne(Rn,Gn=>{dn.learnStep.phase==="pads"&&Gn(Tn)})}var In=v(Rn,2);te(()=>{xe(K,dn.learnPrompt),Re=ve(pe,1,"learn-phase svelte-1yx9lnw",null,Re,{active:dn.learnStep.phase==="encoder"}),Ge=ve(Me,1,"learn-phase svelte-1yx9lnw",null,Ge,{active:dn.learnStep.phase==="knobs"}),hn=ve(Ce,1,"learn-phase svelte-1yx9lnw",null,hn,{active:dn.learnStep.phase==="faders"}),mt=ve(xn,1,"learn-phase svelte-1yx9lnw",null,mt,{active:dn.learnStep.phase==="pads"})}),N("click",In,()=>dn.cancelLearn()),S(X,oe)};ne(I,X=>{dn.learnStep&&X(J)})}te(()=>sn=Xe(Oe,"",sn,{transform:`scale(${t(O)??""})`})),S(H,ae)};ne(an,H=>{t(s)&&H(mn)})}Q("mouseenter",gn,()=>ue.set("instrument-header")),S(n,Qe),ke()}Ye(["keydown","click"]);var lm=T('<textarea spellcheck="false" placeholder="User overrides appear here..." class="svelte-1uk0njm"></textarea>'),cm=T('<textarea readonly="" spellcheck="false" class="readonly svelte-1uk0njm"></textarea>'),um=T('<textarea readonly="" spellcheck="false" class="readonly svelte-1uk0njm"></textarea>'),dm=T('<div class="seqn-editor svelte-1uk0njm"><div class="header svelte-1uk0njm"><div class="tabs svelte-1uk0njm"><button>User</button> <button>Library</button> <button>Merged</button></div> <div class="actions svelte-1uk0njm"><button class="svelte-1uk0njm">Reload</button> <button class="reset-btn svelte-1uk0njm">Reset User</button></div></div> <!></div>');function fm(n,e){ye(e,!0);let a=j("user");function r(){ee.reload()}function s(g){const D=g.target;ee.setUserTextRaw(D.value)}function i(){confirm("Clear all user data? Library entries will remain.")&&ee.resetUser()}var o=dm(),c=k(o),l=k(c),f=k(l);let u;var d=v(f,2);let m;var b=v(d,2);let _;var w=v(l,2),h=k(w),A=v(h,2),C=v(c,2);{var O=g=>{var D=lm();te(()=>jt(D,ee.userText)),N("input",D,s),S(g,D)},P=g=>{var D=cm();te(()=>jt(D,ee.libraryText)),S(g,D)},y=g=>{var D=um();te(()=>jt(D,ee.text)),S(g,D)};ne(C,g=>{t(a)==="user"?g(O):t(a)==="library"?g(P,1):g(y,!1)})}te(()=>{u=ve(f,1,"tab svelte-1uk0njm",null,u,{active:t(a)==="user"}),m=ve(d,1,"tab svelte-1uk0njm",null,m,{active:t(a)==="library"}),_=ve(b,1,"tab svelte-1uk0njm",null,_,{active:t(a)==="merged"})}),Q("mouseenter",o,()=>ue.set("seqn-editor")),N("click",f,()=>{p(a,"user")}),N("click",d,()=>{p(a,"library")}),N("click",b,()=>{p(a,"merged")}),N("click",h,r),Q("mouseenter",h,()=>ue.set("reload-button")),N("click",A,i),S(n,o),ke()}Ye(["click","input"]);function cr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var la=cr();function po(n){la=n}var Qt={exec:()=>null};function ze(n,e=""){let a=typeof n=="string"?n:n.source,r={replace:(s,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(Nn.caret,"$1"),a=a.replace(s,o),r},getRegex:()=>new RegExp(a,e)};return r}var mm=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Nn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}>`)},pm=/^(?:[ \t]*(?:\n|$))+/,hm=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,vm=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Va=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,_m=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ur=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ho=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,vo=ze(ho).replace(/bull/g,ur).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),gm=ze(ho).replace(/bull/g,ur).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),dr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,bm=/^[^\n]+/,fr=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ym=ze(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",fr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),km=ze(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ur).getRegex(),ks="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",mr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,wm=ze("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",mr).replace("tag",ks).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),_o=ze(dr).replace("hr",Va).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ks).getRegex(),xm=ze(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",_o).getRegex(),pr={blockquote:xm,code:hm,def:ym,fences:vm,heading:_m,hr:Va,html:wm,lheading:vo,list:km,newline:pm,paragraph:_o,table:Qt,text:bm},Qr=ze("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Va).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ks).getRegex(),Sm={...pr,lheading:gm,table:Qr,paragraph:ze(dr).replace("hr",Va).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Qr).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ks).getRegex()},Pm={...pr,html:ze(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",mr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Qt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ze(dr).replace("hr",Va).replace("heading",` *#{1,6} *[^
]`).replace("lheading",vo).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Am=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Tm=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,go=/^( {2,}|\\)\n(?!\s*$)/,Dm=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ws=/[\p{P}\p{S}]/u,hr=/[\s\p{P}\p{S}]/u,bo=/[^\s\p{P}\p{S}]/u,Rm=ze(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,hr).getRegex(),yo=/(?!~)[\p{P}\p{S}]/u,qm=/(?!~)[\s\p{P}\p{S}]/u,Cm=/(?:[^\s\p{P}\p{S}]|~)/u,ko=/(?![*_])[\p{P}\p{S}]/u,Lm=/(?![*_])[\s\p{P}\p{S}]/u,Mm=/(?:[^\s\p{P}\p{S}]|[*_])/u,Em=ze(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",mm?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),wo=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Om=ze(wo,"u").replace(/punct/g,ws).getRegex(),Fm=ze(wo,"u").replace(/punct/g,yo).getRegex(),xo="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",zm=ze(xo,"gu").replace(/notPunctSpace/g,bo).replace(/punctSpace/g,hr).replace(/punct/g,ws).getRegex(),Im=ze(xo,"gu").replace(/notPunctSpace/g,Cm).replace(/punctSpace/g,qm).replace(/punct/g,yo).getRegex(),Nm=ze("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,bo).replace(/punctSpace/g,hr).replace(/punct/g,ws).getRegex(),jm=ze(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,ko).getRegex(),Bm="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Hm=ze(Bm,"gu").replace(/notPunctSpace/g,Mm).replace(/punctSpace/g,Lm).replace(/punct/g,ko).getRegex(),Vm=ze(/\\(punct)/,"gu").replace(/punct/g,ws).getRegex(),Gm=ze(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Km=ze(mr).replace("(?:-->|$)","-->").getRegex(),Wm=ze("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Km).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),us=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Um=ze(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",us).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),So=ze(/^!?\[(label)\]\[(ref)\]/).replace("label",us).replace("ref",fr).getRegex(),Po=ze(/^!?\[(ref)\](?:\[\])?/).replace("ref",fr).getRegex(),Qm=ze("reflink|nolink(?!\\()","g").replace("reflink",So).replace("nolink",Po).getRegex(),Zr=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,vr={_backpedal:Qt,anyPunctuation:Vm,autolink:Gm,blockSkip:Em,br:go,code:Tm,del:Qt,delLDelim:Qt,delRDelim:Qt,emStrongLDelim:Om,emStrongRDelimAst:zm,emStrongRDelimUnd:Nm,escape:Am,link:Um,nolink:Po,punctuation:Rm,reflink:So,reflinkSearch:Qm,tag:Wm,text:Dm,url:Qt},Zm={...vr,link:ze(/^!?\[(label)\]\((.*?)\)/).replace("label",us).getRegex(),reflink:ze(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",us).getRegex()},Ks={...vr,emStrongRDelimAst:Im,emStrongLDelim:Fm,delLDelim:jm,delRDelim:Hm,url:ze(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Zr).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ze(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Zr).getRegex()},Jm={...Ks,br:ze(go).replace("{2,}","*").getRegex(),text:ze(Ks.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ya={normal:pr,gfm:Sm,pedantic:Pm},Ta={normal:vr,gfm:Ks,breaks:Jm,pedantic:Zm},Xm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jr=n=>Xm[n];function pt(n,e){if(e){if(Nn.escapeTest.test(n))return n.replace(Nn.escapeReplace,Jr)}else if(Nn.escapeTestNoEncode.test(n))return n.replace(Nn.escapeReplaceNoEncode,Jr);return n}function Xr(n){try{n=encodeURI(n).replace(Nn.percentDecode,"%")}catch{return null}return n}function Yr(n,e){let a=n.replace(Nn.findPipe,(i,o,c)=>{let l=!1,f=o;for(;--f>=0&&c[f]==="\\";)l=!l;return l?"|":" |"}),r=a.split(Nn.splitPipe),s=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(Nn.slashPipe,"|");return r}function Da(n,e,a){let r=n.length;if(r===0)return"";let s=0;for(;s<r&&n.charAt(r-s-1)===e;)s++;return n.slice(0,r-s)}function Ym(n,e){if(n.indexOf(e[1])===-1)return-1;let a=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])a++;else if(n[r]===e[1]&&(a--,a<0))return r;return a>0?-2:-1}function $m(n,e=0){let a=e,r="";for(let s of n)if(s==="	"){let i=4-a%4;r+=" ".repeat(i),a+=i}else r+=s,a++;return r}function $r(n,e,a,r,s){let i=e.href,o=e.title||null,c=n[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;let l={type:n[0].charAt(0)==="!"?"image":"link",raw:a,href:i,title:o,text:c,tokens:r.inlineTokens(c)};return r.state.inLink=!1,l}function ep(n,e,a){let r=n.match(a.other.indentCodeCompensation);if(r===null)return e;let s=r[1];return e.split(`
`).map(i=>{let o=i.match(a.other.beginningSpace);if(o===null)return i;let[c]=o;return c.length>=s.length?i.slice(s.length):i}).join(`
`)}var ds=class{options;rules;lexer;constructor(n){this.options=n||la}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let a=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?a:Da(a,`
`)}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let a=e[0],r=ep(a,e[3]||"",this.rules);return{type:"code",raw:a,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let a=e[2].trim();if(this.rules.other.endingHash.test(a)){let r=Da(a,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(a=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:a,tokens:this.lexer.inline(a)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:Da(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let a=Da(e[0],`
`).split(`
`),r="",s="",i=[];for(;a.length>0;){let o=!1,c=[],l;for(l=0;l<a.length;l++)if(this.rules.other.blockquoteStart.test(a[l]))c.push(a[l]),o=!0;else if(!o)c.push(a[l]);else break;a=a.slice(l);let f=c.join(`
`),u=f.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${f}`:f,s=s?`${s}
${u}`:u;let d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,i,!0),this.lexer.state.top=d,a.length===0)break;let m=i.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){let b=m,_=b.raw+`
`+a.join(`
`),w=this.blockquote(_);i[i.length-1]=w,r=r.substring(0,r.length-b.raw.length)+w.raw,s=s.substring(0,s.length-b.text.length)+w.text;break}else if(m?.type==="list"){let b=m,_=b.raw+`
`+a.join(`
`),w=this.list(_);i[i.length-1]=w,r=r.substring(0,r.length-m.raw.length)+w.raw,s=s.substring(0,s.length-b.raw.length)+w.raw,a=_.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:s}}}list(n){let e=this.rules.block.list.exec(n);if(e){let a=e[1].trim(),r=a.length>1,s={type:"list",raw:"",ordered:r,start:r?+a.slice(0,-1):"",loose:!1,items:[]};a=r?`\\d{1,9}\\${a.slice(-1)}`:`\\${a}`,this.options.pedantic&&(a=r?a:"[*+-]");let i=this.rules.other.listItemRegex(a),o=!1;for(;n;){let l=!1,f="",u="";if(!(e=i.exec(n))||this.rules.block.hr.test(n))break;f=e[0],n=n.substring(f.length);let d=$m(e[2].split(`
`,1)[0],e[1].length),m=n.split(`
`,1)[0],b=!d.trim(),_=0;if(this.options.pedantic?(_=2,u=d.trimStart()):b?_=e[1].length+1:(_=d.search(this.rules.other.nonSpaceChar),_=_>4?1:_,u=d.slice(_),_+=e[1].length),b&&this.rules.other.blankLine.test(m)&&(f+=m+`
`,n=n.substring(m.length+1),l=!0),!l){let w=this.rules.other.nextBulletRegex(_),h=this.rules.other.hrRegex(_),A=this.rules.other.fencesBeginRegex(_),C=this.rules.other.headingBeginRegex(_),O=this.rules.other.htmlBeginRegex(_),P=this.rules.other.blockquoteBeginRegex(_);for(;n;){let y=n.split(`
`,1)[0],g;if(m=y,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),g=m):g=m.replace(this.rules.other.tabCharGlobal,"    "),A.test(m)||C.test(m)||O.test(m)||P.test(m)||w.test(m)||h.test(m))break;if(g.search(this.rules.other.nonSpaceChar)>=_||!m.trim())u+=`
`+g.slice(_);else{if(b||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||A.test(d)||C.test(d)||h.test(d))break;u+=`
`+m}b=!m.trim(),f+=y+`
`,n=n.substring(y.length+1),d=g.slice(_)}}s.loose||(o?s.loose=!0:this.rules.other.doubleBlankLine.test(f)&&(o=!0)),s.items.push({type:"list_item",raw:f,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),s.raw+=f}let c=s.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let l of s.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}}let f=this.rules.other.listTaskCheckbox.exec(l.raw);if(f){let u={type:"checkbox",raw:f[0]+" ",checked:f[0]!=="[ ]"};l.checked=u.checked,s.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=u.raw+l.tokens[0].raw,l.tokens[0].text=u.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(u)):l.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):l.tokens.unshift(u)}}if(!s.loose){let f=l.tokens.filter(d=>d.type==="space"),u=f.length>0&&f.some(d=>this.rules.other.anyLine.test(d.raw));s.loose=u}}if(s.loose)for(let l of s.items){l.loose=!0;for(let f of l.tokens)f.type==="text"&&(f.type="paragraph")}return s}}html(n){let e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){let e=this.rules.block.def.exec(n);if(e){let a=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:a,raw:e[0],href:r,title:s}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let a=Yr(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(a.length===r.length){for(let o of r)this.rules.other.tableAlignRight.test(o)?i.align.push("right"):this.rules.other.tableAlignCenter.test(o)?i.align.push("center"):this.rules.other.tableAlignLeft.test(o)?i.align.push("left"):i.align.push(null);for(let o=0;o<a.length;o++)i.header.push({text:a[o],tokens:this.lexer.inline(a[o]),header:!0,align:i.align[o]});for(let o of s)i.rows.push(Yr(o,i.header.length).map((c,l)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:i.align[l]})));return i}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let a=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:a,tokens:this.lexer.inline(a)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let a=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(a)){if(!this.rules.other.endAngleBracket.test(a))return;let i=Da(a.slice(0,-1),"\\");if((a.length-i.length)%2===0)return}else{let i=Ym(e[2],"()");if(i===-2)return;if(i>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],s=i[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(a)?r=r.slice(1):r=r.slice(1,-1)),$r(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let a;if((a=this.rules.inline.reflink.exec(n))||(a=this.rules.inline.nolink.exec(n))){let r=(a[2]||a[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){let i=a[0].charAt(0);return{type:"text",raw:i,text:i}}return $r(a,s,a[0],this.lexer,this.rules)}}emStrong(n,e,a=""){let r=this.rules.inline.emStrongLDelim.exec(n);if(!(!r||r[3]&&a.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!a||this.rules.inline.punctuation.exec(a))){let s=[...r[0]].length-1,i,o,c=s,l=0,f=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*n.length+s);(r=f.exec(e))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(o=[...i].length,r[3]||r[4]){c+=o;continue}else if((r[5]||r[6])&&s%3&&!((s+o)%3)){l+=o;continue}if(c-=o,c>0)continue;o=Math.min(o,o+c+l);let u=[...r[0]][0].length,d=n.slice(0,s+r.index+u+o);if(Math.min(s,o)%2){let b=d.slice(1,-1);return{type:"em",raw:d,text:b,tokens:this.lexer.inlineTokens(b)}}let m=d.slice(2,-2);return{type:"strong",raw:d,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let a=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(a),s=this.rules.other.startingSpaceChar.test(a)&&this.rules.other.endingSpaceChar.test(a);return r&&s&&(a=a.substring(1,a.length-1)),{type:"codespan",raw:e[0],text:a}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,a=""){let r=this.rules.inline.delLDelim.exec(n);if(r&&(!r[1]||!a||this.rules.inline.punctuation.exec(a))){let s=[...r[0]].length-1,i,o,c=s,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*n.length+s);(r=l.exec(e))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(o=[...i].length,o!==s))continue;if(r[3]||r[4]){c+=o;continue}if(c-=o,c>0)continue;o=Math.min(o,o+c);let f=[...r[0]][0].length,u=n.slice(0,s+r.index+f+o),d=u.slice(s,-s);return{type:"del",raw:u,text:d,tokens:this.lexer.inlineTokens(d)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let a,r;return e[2]==="@"?(a=e[1],r="mailto:"+a):(a=e[1],r=a),{type:"link",raw:e[0],text:a,href:r,tokens:[{type:"text",raw:a,text:a}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let a,r;if(e[2]==="@")a=e[0],r="mailto:"+a;else{let s;do s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(s!==e[0]);a=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:a,href:r,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let a=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:a}}}},it=class Ws{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||la,this.options.tokenizer=this.options.tokenizer||new ds,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let a={other:Nn,block:Ya.normal,inline:Ta.normal};this.options.pedantic?(a.block=Ya.pedantic,a.inline=Ta.pedantic):this.options.gfm&&(a.block=Ya.gfm,this.options.breaks?a.inline=Ta.breaks:a.inline=Ta.gfm),this.tokenizer.rules=a}static get rules(){return{block:Ya,inline:Ta}}static lex(e,a){return new Ws(a).lex(e)}static lexInline(e,a){return new Ws(a).inlineTokens(e)}lex(e){e=e.replace(Nn.carriageReturn,`
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
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):a.push(s);continue}if(e){let o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,a}inline(e,a=[]){return this.inlineQueue.push({src:e,tokens:a}),a}inlineTokens(e,a=[]){let r=e,s=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)l.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)i=s[2]?s[2].length:0,r=r.slice(0,s.index+i)+"["+"a".repeat(s[0].length-i-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let o=!1,c="";for(;e;){o||(c=""),o=!1;let l;if(this.options.extensions?.inline?.some(u=>(l=u.call({lexer:this},e,a))?(e=e.substring(l.raw.length),a.push(l),!0):!1))continue;if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length);let u=a.at(-1);l.type==="text"&&u?.type==="text"?(u.raw+=l.raw,u.text+=l.text):a.push(l);continue}if(l=this.tokenizer.emStrong(e,r,c)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.del(e,r,c)){e=e.substring(l.raw.length),a.push(l);continue}if(l=this.tokenizer.autolink(e)){e=e.substring(l.raw.length),a.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e))){e=e.substring(l.raw.length),a.push(l);continue}let f=e;if(this.options.extensions?.startInline){let u=1/0,d=e.slice(1),m;this.options.extensions.startInline.forEach(b=>{m=b.call({lexer:this},d),typeof m=="number"&&m>=0&&(u=Math.min(u,m))}),u<1/0&&u>=0&&(f=e.substring(0,u+1))}if(l=this.tokenizer.inlineText(f)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(c=l.raw.slice(-1)),o=!0;let u=a.at(-1);u?.type==="text"?(u.raw+=l.raw,u.text+=l.text):a.push(l);continue}if(e){let u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return a}},fs=class{options;parser;constructor(n){this.options=n||la}space(n){return""}code({text:n,lang:e,escaped:a}){let r=(e||"").match(Nn.notSpaceStart)?.[0],s=n.replace(Nn.endingNewline,"")+`
`;return r?'<pre><code class="language-'+pt(r)+'">'+(a?s:pt(s,!0))+`</code></pre>
`:"<pre><code>"+(a?s:pt(s,!0))+`</code></pre>
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
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${pt(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:a}){let r=this.parser.parseInline(a),s=Xr(n);if(s===null)return r;n=s;let i='<a href="'+n+'"';return e&&(i+=' title="'+pt(e)+'"'),i+=">"+r+"</a>",i}image({href:n,title:e,text:a,tokens:r}){r&&(a=this.parser.parseInline(r,this.parser.textRenderer));let s=Xr(n);if(s===null)return pt(a);n=s;let i=`<img src="${n}" alt="${pt(a)}"`;return e&&(i+=` title="${pt(e)}"`),i+=">",i}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:pt(n.text)}},_r=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},ot=class Us{options;renderer;textRenderer;constructor(e){this.options=e||la,this.options.renderer=this.options.renderer||new fs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new _r}static parse(e,a){return new Us(a).parse(e)}static parseInline(e,a){return new Us(a).parseInline(e)}parse(e){let a="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let o=s,c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){a+=c||"";continue}}let i=s;switch(i.type){case"space":{a+=this.renderer.space(i);break}case"hr":{a+=this.renderer.hr(i);break}case"heading":{a+=this.renderer.heading(i);break}case"code":{a+=this.renderer.code(i);break}case"table":{a+=this.renderer.table(i);break}case"blockquote":{a+=this.renderer.blockquote(i);break}case"list":{a+=this.renderer.list(i);break}case"checkbox":{a+=this.renderer.checkbox(i);break}case"html":{a+=this.renderer.html(i);break}case"def":{a+=this.renderer.def(i);break}case"paragraph":{a+=this.renderer.paragraph(i);break}case"text":{a+=this.renderer.text(i);break}default:{let o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return a}parseInline(e,a=this.renderer){let r="";for(let s=0;s<e.length;s++){let i=e[s];if(this.options.extensions?.renderers?.[i.type]){let c=this.options.extensions.renderers[i.type].call({parser:this},i);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=c||"";continue}}let o=i;switch(o.type){case"escape":{r+=a.text(o);break}case"html":{r+=a.html(o);break}case"link":{r+=a.link(o);break}case"image":{r+=a.image(o);break}case"checkbox":{r+=a.checkbox(o);break}case"strong":{r+=a.strong(o);break}case"em":{r+=a.em(o);break}case"codespan":{r+=a.codespan(o);break}case"br":{r+=a.br(o);break}case"del":{r+=a.del(o);break}case"text":{r+=a.text(o);break}default:{let c='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}},qa=class{options;block;constructor(n){this.options=n||la}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?it.lex:it.lexInline}provideParser(){return this.block?ot.parse:ot.parseInline}},np=class{defaults=cr();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ot;Renderer=fs;TextRenderer=_r;Lexer=it;Tokenizer=ds;Hooks=qa;constructor(...n){this.use(...n)}walkTokens(n,e){let a=[];for(let r of n)switch(a=a.concat(e.call(this,r)),r.type){case"table":{let s=r;for(let i of s.header)a=a.concat(this.walkTokens(i.tokens,e));for(let i of s.rows)for(let o of i)a=a.concat(this.walkTokens(o.tokens,e));break}case"list":{let s=r;a=a.concat(this.walkTokens(s.items,e));break}default:{let s=r;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(i=>{let o=s[i].flat(1/0);a=a.concat(this.walkTokens(o,e))}):s.tokens&&(a=a.concat(this.walkTokens(s.tokens,e)))}}return a}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(a=>{let r={...a};if(r.async=this.defaults.async||r.async||!1,a.extensions&&(a.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let i=e.renderers[s.name];i?e.renderers[s.name]=function(...o){let c=s.renderer.apply(this,o);return c===!1&&(c=i.apply(this,o)),c}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[s.level];i?i.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),a.renderer){let s=this.defaults.renderer||new fs(this.defaults);for(let i in a.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let o=i,c=a.renderer[o],l=s[o];s[o]=(...f)=>{let u=c.apply(s,f);return u===!1&&(u=l.apply(s,f)),u||""}}r.renderer=s}if(a.tokenizer){let s=this.defaults.tokenizer||new ds(this.defaults);for(let i in a.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let o=i,c=a.tokenizer[o],l=s[o];s[o]=(...f)=>{let u=c.apply(s,f);return u===!1&&(u=l.apply(s,f)),u}}r.tokenizer=s}if(a.hooks){let s=this.defaults.hooks||new qa;for(let i in a.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let o=i,c=a.hooks[o],l=s[o];qa.passThroughHooks.has(i)?s[o]=f=>{if(this.defaults.async&&qa.passThroughHooksRespectAsync.has(i))return(async()=>{let d=await c.call(s,f);return l.call(s,d)})();let u=c.call(s,f);return l.call(s,u)}:s[o]=(...f)=>{if(this.defaults.async)return(async()=>{let d=await c.apply(s,f);return d===!1&&(d=await l.apply(s,f)),d})();let u=c.apply(s,f);return u===!1&&(u=l.apply(s,f)),u}}r.hooks=s}if(a.walkTokens){let s=this.defaults.walkTokens,i=a.walkTokens;r.walkTokens=function(o){let c=[];return c.push(i.call(this,o)),s&&(c=c.concat(s.call(this,o))),c}}this.defaults={...this.defaults,...r}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return it.lex(n,e??this.defaults)}parser(n,e){return ot.parse(n,e??this.defaults)}parseMarkdown(n){return(e,a)=>{let r={...a},s={...this.defaults,...r},i=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=n),s.async)return(async()=>{let o=s.hooks?await s.hooks.preprocess(e):e,c=await(s.hooks?await s.hooks.provideLexer():n?it.lex:it.lexInline)(o,s),l=s.hooks?await s.hooks.processAllTokens(c):c;s.walkTokens&&await Promise.all(this.walkTokens(l,s.walkTokens));let f=await(s.hooks?await s.hooks.provideParser():n?ot.parse:ot.parseInline)(l,s);return s.hooks?await s.hooks.postprocess(f):f})().catch(i);try{s.hooks&&(e=s.hooks.preprocess(e));let o=(s.hooks?s.hooks.provideLexer():n?it.lex:it.lexInline)(e,s);s.hooks&&(o=s.hooks.processAllTokens(o)),s.walkTokens&&this.walkTokens(o,s.walkTokens);let c=(s.hooks?s.hooks.provideParser():n?ot.parse:ot.parseInline)(o,s);return s.hooks&&(c=s.hooks.postprocess(c)),c}catch(o){return i(o)}}}onError(n,e){return a=>{if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let r="<p>An error occurred:</p><pre>"+pt(a.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(a);throw a}}},ra=new np;function We(n,e){return ra.parse(n,e)}We.options=We.setOptions=function(n){return ra.setOptions(n),We.defaults=ra.defaults,po(We.defaults),We};We.getDefaults=cr;We.defaults=la;We.use=function(...n){return ra.use(...n),We.defaults=ra.defaults,po(We.defaults),We};We.walkTokens=function(n,e){return ra.walkTokens(n,e)};We.parseInline=ra.parseInline;We.Parser=ot;We.parser=ot.parse;We.Renderer=fs;We.TextRenderer=_r;We.Lexer=it;We.lexer=it.lex;We.Tokenizer=ds;We.Hooks=qa;We.parse=We;We.options;We.setOptions;We.use;We.walkTokens;We.parseInline;ot.parse;it.lex;const tp=`# DAW Guide

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
`,ap=`# SEQN Format Reference

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
`,sp=`# Synth Architecture

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
`;var rp=T("<a> </a>"),ip=T('<nav class="help-toc svelte-d7kilv"></nav>'),op=T('<div class="help-viewer svelte-d7kilv"><div class="help-tabs svelte-d7kilv"><!></div> <div class="help-body svelte-d7kilv"><div class="help-content svelte-d7kilv"><!></div> <!></div></div>');function lp(n,e){ye(e,!0);const a=["DAW","Sequencer","Synth"],r=[tp,ap,sp];let s=j(0);function i(y){const g=[],D=new Map,L=new We.Renderer;return L.heading=({text:z,depth:$})=>{if($===2||$===3){let F=z.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");const B=D.get(F)??0;return D.set(F,B+1),B>0&&(F=`${F}-${B}`),g.push({level:$,id:F,text:z}),`<h${$} id="${F}">${z}</h${$}>`}return`<h${$}>${z}</h${$}>`},{html:We(y,{renderer:L}),toc:g}}let o=q(()=>i(r[t(s)])),c=j(""),l=j(void 0);function f(y){const g=t(o).toc;for(let D=g.length-1;D>=0;D--)if(g[D].id===y){if(g[D].level===2)return y;for(let L=D-1;L>=0;L--)if(g[L].level===2)return g[L].id}return""}let u=q(()=>f(t(c))),d=q(()=>{const y=t(o).toc,g=[];let D="";for(const L of y)L.level===2?(D=L.id,g.push(L)):L.level===3&&D===t(u)&&g.push(L);return g});He(()=>{t(s),p(c,""),t(l)&&(t(l).scrollTop=0)}),He(()=>{if(t(s),!t(l))return;const y=requestAnimationFrame(()=>{const D=t(l).querySelectorAll("h2[id], h3[id]");if(!D.length)return;const L=new IntersectionObserver(W=>{for(const z of W)z.isIntersecting&&p(c,z.target.id,!0)},{root:t(l),rootMargin:"0px 0px -80% 0px",threshold:0});for(const W of D)L.observe(W);g=()=>L.disconnect()});let g;return()=>{cancelAnimationFrame(y),g?.()}});function m(y){t(l)?.querySelector(`#${CSS.escape(y)}`)?.scrollIntoView({behavior:"smooth",block:"start"})}var b=op(),_=k(b),w=k(_);so(w,{get blocks(){return a},get selected(){return t(s)},onselect:y=>{p(s,y,!0)}});var h=v(_,2),A=k(h),C=k(A);Wi(C,()=>t(o).html),Tt(A,y=>p(l,y),()=>t(l));var O=v(A,2);{var P=y=>{var g=ip();en(g,21,()=>t(d),$e,(D,L)=>{var W=rp();let z;var $=k(W);te(()=>{z=ve(W,1,"toc-link svelte-d7kilv",null,z,{"toc-h3":t(L).level===3,active:t(c)===t(L).id,"active-parent":t(L).level===2&&t(L).id===t(u)&&t(c)!==t(L).id}),nn(W,"href",`#${t(L).id??""}`),xe($,t(L).text)}),N("click",W,F=>{F.preventDefault(),m(t(L).id)}),S(D,W)}),S(y,g)};ne(O,y=>{t(o).toc.length>0&&y(P)})}S(n,b),ke()}Ye(["click"]);var cp=T('<div class="instrument-mode svelte-1n46o8q"><div class="instrument-sidebar svelte-1n46o8q"><!></div> <div class="instrument-content svelte-1n46o8q"><!></div></div>'),up=T('<div class="seqn-mode svelte-1n46o8q"><!></div>'),dp=T('<div class="app svelte-1n46o8q"><!> <div class="content svelte-1n46o8q"><!></div></div>');function fp(n,e){ye(e,!0);const a=new mc;He(()=>{document.documentElement.className=Fn.resolved==="dark"?"theme-dark":"theme-light"}),Ke.setBridge(a);let r=j("song"),s=j(_n([]));He(()=>{ee.revision,i()});async function i(){try{const h=await Ji(ee.text);p(s,[...new Set(h)],!0)}catch{p(s,[],!0)}}let o=q(()=>t(s).map(h=>({id:h,label:h}))),c=q(()=>new Set(t(s).filter(h=>ee.isLibraryOnly("instrument/"+h))));var l=dp(),f=k(l);Fc(f,{get bridge(){return a},get mode(){return t(r)},onmode:h=>{p(r,h,!0)}});var u=v(f,2),d=k(u);{var m=h=>{pd(h,{})},b=h=>{var A=cp(),C=k(A),O=k(C);zs(O,{title:"Instruments",get items(){return t(o)},get activeId(){return ee.selectedInstrument},get libraryIds(){return t(c)},onselect:g=>{ee.selectedInstrument=g},hint:"instrument-sidebar"});var P=v(C,2),y=k(P);om(y,{get bridge(){return a}}),S(h,A)},_=h=>{var A=up(),C=k(A);fm(C,{}),S(h,A)},w=h=>{lp(h,{})};ne(d,h=>{t(r)==="song"?h(m):t(r)==="instrument"?h(b,1):t(r)==="seqn"?h(_,2):t(r)==="help"&&h(w,3)})}S(n,l),ke()}Jl(fp,{target:document.getElementById("app")});
