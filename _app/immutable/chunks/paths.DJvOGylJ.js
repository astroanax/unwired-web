import{n as c,s as p}from"./scheduler.BtD6mfSm.js";const t=[];function d(n,l=c){let i;const o=new Set;function r(e){if(p(n,e)&&(n=e,i)){const b=!t.length;for(const s of o)s[1](),t.push(s,n);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function u(e){r(e(n))}function _(e,b=c){const s=[e,b];return o.add(s),o.size===1&&(i=l(r,u)||c),e(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:u,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_1kpy67k)==null?void 0:f.base)??"/unwired-web";var a;const g=((a=globalThis.__sveltekit_1kpy67k)==null?void 0:a.assets)??h;export{g as a,h as b,d as w};
