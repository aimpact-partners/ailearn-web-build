System.register(["@beyond-js/kernel@0.1.9/bundle"],function(s,e){"use strict";var n,t,i;return s("extensions",void 0),{setters:[function(e){n=e}],execute:function(){i=n.Bundle,(t=new i({module:{vspecifier:"@aimpact/chat@1.0.1/extensions"},type:"ts"},e.meta.url).package()).dependencies.update([]),(i=new Map).set("./index",{hash:426076955,creator:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.extensions=void 0,n.extensions=new class extends Map{async load(e,n){e=e.map(e=>this.resolve(e,n));let t=await Promise.all(e);return t=t.filter(e=>!!e)}async resolve(e,...n){if(this.has(e))return this.get(e)(...n)}register(e,n){if(this.has(e))throw new Error(`Extension point "${e}" already registered`);if("function"!=typeof n)throw new Error("Invalid parameters");this.set(e,n)}}}}),t.exports.descriptor=[{im:"./index",from:"extensions",name:"extensions"}],t.exports.process=function({require:e,prop:n,value:t}){!e&&"extensions"!==n||s("extensions",e?e("./index").extensions:t)},s("__beyond_pkg",t),s("hmr",new function(){this.on=(e,n)=>t.hmr.on(e,n),this.off=(e,n)=>t.hmr.off(e,n)}),t.initialise(i)}}});