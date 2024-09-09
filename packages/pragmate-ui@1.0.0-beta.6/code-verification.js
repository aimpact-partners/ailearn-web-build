System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0"],function(r,e){"use strict";var t,n,a,u,o;return r("InputCode",void 0),{setters:[function(e){t=e},function(e){n=e},function(e){a=e}],execute:function(){o=t.Bundle,(u=new o({module:{vspecifier:"pragmate-ui@1.0.0-beta.6/code-verification"},type:"code",name:"code-verification"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",n],["react",a]]),brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@1.0.0-beta.6/code-verification"),(o=new Map).set("./code-input",{hash:3163548358,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.InputCode=n;var v=e("react"),g=e("./input");function n({length:t,onCodeFull:a,className:e,value:n=""}){const[u,o]=(0,v.useState)(((t,n)=>{var r=new Array(n).fill("");for(let e=0;e<n&&e<t.length;e++)r[e]=t[e];return r})(n,t)),[r,s]=v.default.useState(n??""),[i,c]=(0,v.useState)(!1),[l,d]=(0,v.useState)(),f=(0,v.useRef)(Array(t)),p=t=>{const n=t.currentTarget.dataset.index;globalThis.setTimeout(()=>{var e;8!==t.which&&"backspace"!==t.key?.toLowerCase()||((e=[...u])[n]="",o(e),d(Number(n)-1))},0)},m=e=>{const t=e.currentTarget.dataset.index,n=e.currentTarget.value;var r=[...u],e=(""!==n&&d(Number(t)+1),r[t]=e.currentTarget.value,o(e=>((e=[...e])[t]=n,s(e.join("")),e)),r.every(e=>""!==e));c(e),(e||!e&&i)&&a(r.join(""))};return(0,v.useEffect)(()=>{r.length===t?(c(!0),a(r)):i&&r.length<t&&(c(!1),a(""))},[r]),(0,v.useEffect)(()=>{setTimeout(()=>f.current[l]?.focus(),100)},[l]),n=e?e+" code-inputs":"code-inputs",(0,v.useEffect)(()=>{const e=e=>{e.stopPropagation(),e=e.clipboardData.getData("text").substring(0,t).split(""),s(e.join("")),o(e)};return f.current[0]?.addEventListener("paste",e),()=>{f.current[0]?.removeEventListener("paste",e)}},[]),e=[...Array(t)].map((e,t)=>v.default.createElement(g.default,{value:u[t]??"",index:t,key:t.toString(),ref:e=>{f.current[t]=e},onKeyDown:p,onChange:m})),v.default.createElement("div",{className:n},e)}n.defaultPros={onCodeFull:()=>null,length:6}}}),o.set("./input",{hash:3296864983,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e("react");t.default=r.default.forwardRef(function(e,t){var n=r.default.useMemo(()=>`box ${e.className??""} `+(Boolean(String(e.value??"").length)?"filled":""),[e.value,e.className]);return r.default.createElement("input",{...e,maxLength:1,"data-index":e.index,type:"text",className:n,ref:t})})}}),u.exports.descriptor=[{im:"./code-input",from:"InputCode",name:"InputCode"}],u.exports.process=function({require:e,prop:t,value:n}){!e&&"InputCode"!==t||r("InputCode",e?e("./code-input").InputCode:n)},r("__beyond_pkg",u),r("hmr",new function(){this.on=(e,t)=>u.hmr.on(e,t),this.off=(e,t)=>u.hmr.off(e,t)}),u.initialise(o)}}});