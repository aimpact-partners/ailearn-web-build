System.register(["@beyond-js/kernel@0.1.9/bundle"],function(n,e){var i,t,s;return n("limitDecimals",void 0),{setters:[function(e){i=e}],execute:function(){s=i.Bundle,(t=new s({module:{vspecifier:"@aimpact/ailearn-app@0.1.4-test.02/utils"},type:"code"},e.meta.url).package()).dependencies.update([]),(s=new Map).set("./numbers",{hash:3200269471,creator:function(e,i){Object.defineProperty(i,"__esModule",{value:!0}),i.limitDecimals=void 0,i.limitDecimals=(e,i=2)=>Math.round(e*Math.pow(10,i))/Math.pow(10,i)}}),t.exports.descriptor=[{im:"./numbers",from:"limitDecimals",name:"limitDecimals"}],t.exports.process=function({require:e,prop:i,value:t}){!e&&"limitDecimals"!==i||n("limitDecimals",e?e("./numbers").limitDecimals:t)},n("__beyond_pkg",t),n("hmr",new function(){this.on=(e,i)=>t.hmr.on(e,i),this.off=(e,i)=>t.hmr.off(e,i)}),t.initialise(s)}}});