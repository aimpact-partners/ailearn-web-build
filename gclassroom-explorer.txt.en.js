System.register(["@beyond-js/kernel@0.1.9/bundle"],function(s,e){"use strict";var t,o,n;return s("txt",void 0),{setters:[function(e){t=e}],execute:function(){n=t.Bundle,(o=new n({module:{vspecifier:"@aimpact/ailearn-app@0.0.43/gclassroom-explorer",multibundle:!0},type:"txt"},e.meta.url).package("en")).dependencies.update([]),(n=new Map).set("./txt",{hash:620171615,creator:function(e,t){t.txt={title:"Classrooms",unauthorized:{text:"You need to give access to Google Classroom to see this section. Please, click the button below to give access.",action:"Give access"}}}}),o.exports.descriptor=[{im:"./txt",from:"txt",name:"txt"}],o.exports.process=function({require:e,prop:t,value:o}){!e&&"txt"!==t||s("txt",e?e("./txt").txt:o)},s("__beyond_pkg",o),s("hmr",new function(){this.on=(e,t)=>o.hmr.on(e,t),this.off=(e,t)=>o.hmr.off(e,t)}),o.initialise(n)}}});