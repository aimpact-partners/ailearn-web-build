System.register(["@beyond-js/kernel@0.1.9/bundle"],function(r,e){var t,o,i;return r("txt",void 0),{setters:[function(e){t=e}],execute:function(){i=t.Bundle,(o=new i({module:{vspecifier:"@aimpact/auth@0.0.1/auth-recovery",multibundle:!0},type:"txt"},e.meta.url).package("en")).dependencies.update([]),(i=new Map).set("./txt",{hash:3232058831,creator:function(e,t){t.txt={recoveryTitle:"Password recovery",recoverySubtitle:"We know it can be frustrating to forget your password, but don't worry, we'll help you recover it!",recoveryIntro:"To begin with, we need to verify your identity. Please provide us with your email address. We will send you an email with a link to reset your password. This link will last for 24 hours.",recoveryInstructions:"Please enter the email address",recoveryFinish:"If you have any questions, please do not hesitate to contact us.",recoveryBye:"Thank you for your patience!",checkYourEmail:"To complete the process, please check your email address. We have sent you an email with a link to reset your password. The link will last for 24 hours. If you can't find the email, please check your spam or junk mail folder. If you have not yet received the email, please do not hesitate to contact us. Thank you for your patience.",email:"Email",recoveryButton:"Submit Email",theme:"%them Mode"}}}),o.exports.descriptor=[{im:"./txt",from:"txt",name:"txt"}],o.exports.process=function({require:e,prop:t,value:o}){!e&&"txt"!==t||r("txt",e?e("./txt").txt:o)},r("__beyond_pkg",o),r("hmr",new function(){this.on=(e,t)=>o.hmr.on(e,t),this.off=(e,t)=>o.hmr.off(e,t)}),o.initialise(i)}}});