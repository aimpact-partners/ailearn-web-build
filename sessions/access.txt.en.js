System.register(["@beyond-js/kernel@0.1.9/bundle"],function(s,e){"use strict";var t,n,a;return s("txt",void 0),{setters:[function(e){t=e}],execute:function(){a=t.Bundle,(n=new a({module:{vspecifier:"@aimpact/ailearn-app@0.0.40/sessions/access",multibundle:!0},type:"txt"},e.meta.url).package("en")).dependencies.update([]),(a=new Map).set("./txt",{hash:1083291540,creator:function(e,t){t.txt={welcome:"Welcome to AI-Learn",shared:"has been shared with you.",action:"Start the class",save:"Save the Class and start learning.",accessed:"Go to your class chats and continue learning",empty:{welcome:"Oops!",info:"We couldn't find the class.",action:"Please review the link."}}}}),n.exports.descriptor=[{im:"./txt",from:"txt",name:"txt"}],n.exports.process=function({require:e,prop:t,value:n}){!e&&"txt"!==t||s("txt",e?e("./txt").txt:n)},s("__beyond_pkg",n),s("hmr",new function(){this.on=(e,t)=>n.hmr.on(e,t),this.off=(e,t)=>n.hmr.off(e,t)}),n.initialise(a)}}});