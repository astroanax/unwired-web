var R=Object.defineProperty;var F=(t,e,n)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>F(t,typeof e!="symbol"?e+"":e,n);function L(){}const _t=t=>t;function G(t,e){for(const n in e)t[n]=e[n];return t}function ht(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function z(t){return t()}function dt(){return Object.create(null)}function I(t){t.forEach(z)}function U(t){return typeof t=="function"}function mt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let p;function pt(t,e){return t===e?!0:(p||(p=document.createElement("a")),p.href=e,t===p.href)}function yt(t,e){return t!=t?e==e:t!==e}function gt(t){return Object.keys(t).length===0}function W(t,...e){if(t==null){for(const i of e)i(void 0);return L}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bt(t,e,n){t.$$.on_destroy.push(W(e,n))}function xt(t,e,n,i){if(t){const s=D(t,e,n,i);return t[0](s)}}function D(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function Et(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function wt(t,e,n,i,s,l){if(s){const c=D(e,n,i,l);t.p(c,s)}}function Tt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Nt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function At(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function kt(t){const e={};for(const n in t)e[n]=!0;return e}function vt(t){return t&&U(t.destroy)?t.destroy:L}function Ct(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let g=!1;function jt(){g=!0}function Ht(){g=!1}function J(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&r.push(u)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:J(1,s,B=>e[n[B]].claim_order,a))-1;i[r]=n[u]+1;const C=u+1;n[C]=r,s=Math.max(C,s)}const l=[],c=[];let o=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(l.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<c.length;r++){for(;a<l.length&&c[r].claim_order>=l[a].claim_order;)a++;const u=a<l.length?l[a]:null;t.insertBefore(c[r],u)}}function Q(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Lt(t){const e=A("style");return e.textContent="/* empty */",X(V(t),e),e.sheet}function X(t,e){return Q(t.head||t,e),e.sheet}function Y(t,e){if(g){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Z(t,e,n){t.insertBefore(e,n||null)}function $(t,e,n){g&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Dt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function A(t){return document.createElement(t)}function M(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function Mt(){return k(" ")}function St(){return k("")}function Pt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const tt=["width","height"];function et(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&tt.indexOf(i)===-1?t[i]=e[i]:v(t,i,e[i])}function Ot(t,e){for(const n in e)v(t,n,e[n])}function nt(t,e){Object.keys(e).forEach(n=>{it(t,n,e[n])})}function it(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:v(t,e,n)}function qt(t){return/-/.test(t)?nt:et}function Bt(t){return t.dataset.svelteH}function Rt(t){return Array.from(t.childNodes)}function S(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,s=!1){S(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function O(t,e,n,i){return P(t,s=>s.nodeName===e,s=>{const l=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>s.removeAttribute(c))},()=>i(e))}function Ft(t,e,n){return O(t,e,n,A)}function Gt(t,e,n){return O(t,e,n,M)}function st(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>k(e),!0)}function zt(t){return st(t," ")}function j(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function It(t,e){const n=j(t,"HTML_TAG_START",0),i=j(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);S(t);const s=t.splice(n,i-n+1);w(s[0]),w(s[s.length-1]);const l=s.slice(1,s.length-1);if(l.length===0)return new b(e);for(const c of l)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,l)}function Ut(t,e){e=""+e,t.data!==e&&(t.data=e)}function Wt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Jt(t,e,n){t.classList.toggle(e,!!n)}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Kt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class rt{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=M(n.nodeName):this.e=A(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Z(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class b extends rt{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)$(this.t,this.n[i],n)}}function Qt(t,e){return new t(e)}let y;function x(t){y=t}function m(){if(!y)throw new Error("Function called outside component initialization");return y}function Vt(t){m().$$.on_mount.push(t)}function Xt(t){m().$$.after_update.push(t)}function Yt(){const t=m();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=ct(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function Zt(t,e){return m().$$.context.set(t,e),e}function $t(t){return m().$$.context.get(t)}function te(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],H=[];let h=[];const T=[],q=Promise.resolve();let N=!1;function lt(){N||(N=!0,q.then(at))}function ee(){return lt(),q}function ot(t){h.push(t)}function ne(t){T.push(t)}const E=new Set;let _=0;function at(){if(_!==0)return;const t=y;do{try{for(;_<d.length;){const e=d[_];_++,x(e),ut(e.$$)}}catch(e){throw d.length=0,_=0,e}for(x(null),d.length=0,_=0;H.length;)H.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];E.has(n)||(E.add(n),n())}h.length=0}while(d.length);for(;T.length;)T.pop()();N=!1,E.clear(),x(t)}function ut(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ot)}}function ie(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{qt as $,V as A,Lt as B,I as C,U as D,ot as E,ct as F,_t as G,dt as H,at as I,gt as J,ie as K,y as L,x as M,z as N,d as O,lt as P,jt as Q,Ht as R,ht as S,m as T,Ct as U,At as V,Zt as W,Yt as X,G as Y,Nt as Z,te as _,Mt as a,vt as a0,Pt as a1,$t as a2,et as a3,M as a4,b as a5,Gt as a6,It as a7,Ot as a8,pt as a9,Bt as aa,Jt as ab,Dt as ac,kt as ad,yt as ae,Kt as af,ne as ag,Rt as b,Ft as c,st as d,A as e,w as f,zt as g,Y as h,$ as i,Ut as j,bt as k,xt as l,Tt as m,L as n,Et as o,St as p,Xt as q,Vt as r,mt as s,k as t,wt as u,v,Wt as w,H as x,Qt as y,ee as z};
