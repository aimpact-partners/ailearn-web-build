System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/routing"],function(r,e){"use strict";var n,t,i,o,c;return r("Link",void 0),{setters:[function(e){n=e},function(e){t=e},function(e){i=e}],execute:function(){c=n.Bundle,(o=new c({module:{vspecifier:"pragmate-ui@0.1.1/link"},type:"code"},e.meta.url).package()).dependencies.update([["react",t],["@beyond-js/kernel/routing",i]]),(c=new Map).set("./index",{hash:3979789248,creator:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Link=function({href:n,...t}){const r="_blank"===t.target,i={...t};return["href","onClick"].forEach(e=>delete i[e]),o.default.createElement("a",{...i,href:n,onClick:e=>{r||e.preventDefault(),e.stopPropagation(),t.onClick&&"function"==typeof t.onClick&&t.onClick(e),r||c.routing.pushState(n)},target:t.target},t.children)};var o=e("react"),c=e("@beyond-js/kernel/routing")}}),o.exports.descriptor=[{im:"./index",from:"Link",name:"Link"}],o.exports.process=function({require:e,prop:n,value:t}){!e&&"Link"!==n||r("Link",e?e("./index").Link:t)},r("__beyond_pkg",o),r("hmr",new function(){this.on=(e,n)=>o.hmr.on(e,n),this.off=(e,n)=>o.hmr.off(e,n)}),o.initialise(c)}}});