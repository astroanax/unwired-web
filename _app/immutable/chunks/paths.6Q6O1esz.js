import{n as c,s as h}from"./scheduler.BtD6mfSm.js";const t=[];function d(n,l=c){let i;const o=new Set;function r(e){if(h(n,e)&&(n=e,i)){const b=!t.length;for(const s of o)s[1](),t.push(s,n);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function u(e){r(e(n))}function _(e,b=c){const s=[e,b];return o.add(s),o.size===1&&(i=l(r,u)||c),e(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:u,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_14vw3hz)==null?void 0:f.base)??"/unwired-web";var a;const g=((a=globalThis.__sveltekit_14vw3hz)==null?void 0:a.assets)??p;export{g as a,p as b,d as w};
