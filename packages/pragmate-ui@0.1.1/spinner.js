System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/styles"],function(t,e){"use strict";var n,r,i,s,a;return t("Spinner",void 0),{setters:[function(e){n=e},function(e){r=e},function(e){i=e}],execute:function(){a=n.Bundle,(s=new a({module:{vspecifier:"pragmate-ui@0.1.1/spinner"},type:"code",name:"spinner"},e.meta.url).package()).dependencies.update([["react",r],["@beyond-js/kernel/styles",i]]),brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.1/spinner"),(a=new Map).set("./spinner",{hash:2698121625,creator:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Spinner=void 0;var p=e("react");n.Spinner=(0,p.forwardRef)((e,n)=>{var{color:e,className:r,size:t,type:i,active:s}=e,i=["on-primary","on-secondary","on-surface","on-error","primary","secondary","tertiary"].includes(i)?i:"primary",a={};e&&(a.stroke=e);let o=(r=i+(r?" "+r:""))?r+" pragmate-element-spinner":"pragmate-element-spinner";return s&&(o+=" is-active"),p.default.createElement("div",{className:o,ref:n},p.default.createElement("svg",{viewBox:"0 0 100 100"},p.default.createElement("circle",{cx:"50",cy:"50",r:{xs:30,md:40,lg:50,xl:60}[t]||30,style:a})))})}}),s.exports.descriptor=[{im:"./spinner",from:"Spinner",name:"Spinner"}],s.exports.process=function({require:e,prop:n,value:r}){!e&&"Spinner"!==n||t("Spinner",e?e("./spinner").Spinner:r)},t("__beyond_pkg",s),t("hmr",new function(){this.on=(e,n)=>s.hmr.on(e,n),this.off=(e,n)=>s.hmr.off(e,n)}),s.initialise(a)}}});