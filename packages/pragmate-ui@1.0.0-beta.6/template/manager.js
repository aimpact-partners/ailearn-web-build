System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.2.0/model"],function(o,e){"use strict";var t,r,s,n;return o({hslToHex:void 0,TplManager:void 0,getCSSCustomPropIndex:void 0}),{setters:[function(e){t=e},function(e){r=e}],execute:function(){n=t.Bundle,(s=new n({module:{vspecifier:"pragmate-ui@1.0.0-beta.6/template/manager"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/reactive/model",r]]),(n=new Map).set("./colors/converters",{hash:3901188594,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.hexToRgb=function(e){return e=e.replace(/^#/,""),{r:(e=parseInt(e,16))>>16&255,g:e>>8&255,b:e=255&e}},t.hslToHex=function(t,e,r){r/=100;const o=e*Math.min(r,1-r)/100,s=e=>(e=(e+t/30)%12,e=r-o*Math.max(Math.min(e-3,9-e,1),-1),Math.round(255*e).toString(16).padStart(2,"0"));return"#"+s(0)+s(8)+s(4)},t.rgbToHex=function(e,t,r){return"#"+(e<<16|t<<8|r).toString(16).padStart(6,"0")}}}),n.set("./colors/darken",{hash:3264955651,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.darkenHexColor=function(e,t){var{r:e,g:r,b:o}=(0,s.hexToRgb)(e),t=Math.floor(t/100*255),e=Math.max(0,e-t),r=Math.max(0,r-t),o=Math.max(0,o-t);return(0,s.rgbToHex)(e,r,o)};var s=e("./converters")}}),n.set("./colors/lighen",{hash:4269504386,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.lightenHexColor=function(e,t){var{r:e,g:r,b:o}=(0,s.hexToRgb)(e),t=Math.floor(t/100*255),e=Math.min(255,e+t),r=Math.min(255,r+t),o=Math.min(255,o+t);return(0,s.rgbToHex)(e,r,o)};var s=e("./converters")}}),n.set("./index",{hash:1743232617,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.TplManager=t.TemplateManager=void 0;var r=e("@beyond-js/reactive/model"),o=e("./properties");class s extends r.ReactiveModel{#root;get root(){return this.#root}#rootSelector;#theme;#stylesheet;#dark;get dark(){return this.#dark}#light;get light(){return this.#light}constructor(){super(),this.#rootSelector=document.querySelector("html"),this.#theme=this.#rootSelector.dataset.beyondMode??"light";var e=this.getCustomProperties(this.#theme);this.#root=e,this.initialise()}getCustomProperties(e){var t=new URL("./styles.css",window.location.origin).href;return(0,o.getCSSCustomPropsObjectFromStylesheet)(t,e)}#getProperties(){const t=new URL("./styles.css",window.location.origin).href;var e=Array.from(document.styleSheets).find(e=>e.href.split("?")[0]===t),r=Array.from(e.cssRules);const o=(e,t)=>e instanceof CSSStyleRule&&e.selectorText===t;this.#dark=r.find(e=>o(e,':root[data-beyond-mode="dark"]')),this.#light=r.find(e=>o(e,':root[data-beyond-mode="light"]')),this.#stylesheet=e}initialise(){this.#getProperties(),new MutationObserver(e=>{e.forEach(e=>{"attributes"===e.type&&"data-beyond-mode"===e.attributeName&&(this.#theme=this.#rootSelector.dataset.beyondMode??"light",this.#getProperties(),this.#root=this.getCustomProperties(this.#theme),this.trigger("change"))})}).observe(this.#rootSelector,{attributes:!0})}}t.TemplateManager=s,t.TplManager=new s}}),n.set("./properties",{hash:1794570333,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.toCamelCase=t.getCSSCustomPropsObjectFromStylesheet=t.getCSSCustomPropsObject=t.getCSSCustomPropIndexFromStylesheet=t.getCSSCustomPropIndex=void 0;const r=e=>!e.href||0===e.href.indexOf(window.location.origin),o=e=>1===e.type,s=()=>Array.from(document.styleSheets).filter(r).reduce((e,t)=>(t=Array.from(t.cssRules).filter(o).reduce((e,t)=>{const r=t;return t=Array.from(r.style).map(e=>[e.trim(),r.style.getPropertyValue(e).trim()]).filter(([e])=>e.startsWith("--")),e.concat(t)},[]),e.concat(t)),[]),n=(t.getCSSCustomPropIndex=s,e=>e.replace(/-([a-z0-9])/g,function(e,t){return/\d/.test(t)?t:t.toUpperCase()})),a=(t.toCamelCase=n,t.getCSSCustomPropsObject=()=>{var e=s();const r={};return e.forEach(([e,t])=>{e=n(e.slice(2)),r[e]=t}),r},(t,e)=>{var r=Array.from(document.styleSheets).find(e=>e.href.split("?")[0]===t);return r?Array.from(r.cssRules).filter(o).reduce((e,t)=>{const r=t;return t=Array.from(r.style).map(e=>[e=e.trim(),r.style.getPropertyValue(e).trim().trim()]).filter(([e])=>e.startsWith("--")),e.concat(t)},[]):[]});t.getCSSCustomPropIndexFromStylesheet=a,t.getCSSCustomPropsObjectFromStylesheet=(e,t)=>{e=a(e);const r={};return e.forEach(([e,t])=>{e=n(e.slice(2)),r[e]=t}),r}}}),s.exports.descriptor=[{im:"./colors/converters",from:"hslToHex",name:"hslToHex"},{im:"./index",from:"TplManager",name:"TplManager"},{im:"./properties",from:"getCSSCustomPropIndex",name:"getCSSCustomPropIndex"}],s.exports.process=function({require:e,prop:t,value:r}){!e&&"hslToHex"!==t||o("hslToHex",e?e("./colors/converters").hslToHex:r),!e&&"TplManager"!==t||o("TplManager",e?e("./index").TplManager:r),!e&&"getCSSCustomPropIndex"!==t||o("getCSSCustomPropIndex",e?e("./properties").getCSSCustomPropIndex:r)},o("__beyond_pkg",s),o("hmr",new function(){this.on=(e,t)=>s.hmr.on(e,t),this.off=(e,t)=>s.hmr.off(e,t)}),s.initialise(n)}}});