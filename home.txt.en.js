System.register(["@beyond-js/kernel@0.1.9/bundle"],function(r,e){"use strict";var t,i,o;return r("txt",void 0),{setters:[function(e){t=e}],execute:function(){o=t.Bundle,(i=new o({module:{vspecifier:"@aimpact/ailearn-app@0.0.40/home",multibundle:!0},type:"txt"},e.meta.url).package("en")).dependencies.update([]),(o=new Map).set("./txt",{hash:1809345290,creator:function(e,t){t.txt={header:"Header title",dividerTitle:"My learning modules",greeting:"¡Hello, %name!",greetingIntro:"Here you will find the learning module that your teacher will share with you in order to work on the curricular objectives. Enter the different classrooms and have fun learning with a personalised tutor.",moduleSubtitleText:"Activities",moduleAccess:"Access",blackList:{title:"Oops, we haven't retrieved recent modules.",description:"Soon, you'll be able to view your most recent activities. Here, you'll find a list of the modules you accessed previously. We're looking forward to it! 🚀"}}}}),i.exports.descriptor=[{im:"./txt",from:"txt",name:"txt"}],i.exports.process=function({require:e,prop:t,value:i}){!e&&"txt"!==t||r("txt",e?e("./txt").txt:i)},r("__beyond_pkg",i),r("hmr",new function(){this.on=(e,t)=>i.hmr.on(e,t),this.off=(e,t)=>i.hmr.off(e,t)}),i.initialise(o)}}});