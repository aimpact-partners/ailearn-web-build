System.register(["@beyond-js/kernel@0.1.9/bundle"],function(s,e){"use strict";var t,o,n;return s("txt",void 0),{setters:[function(e){t=e}],execute:function(){n=t.Bundle,(o=new n({module:{vspecifier:"@aimpact/ailearn-app@0.0.46.dev-20/classrooms/create",multibundle:!0},type:"txt"},e.meta.url).package("en")).dependencies.update([]),(n=new Map).set("./txt",{hash:2334167527,creator:function(e,t){t.txt={breadcrumb:{classrooms:"Classroom",management:"Management"},create:{title:"Add Classroom",success:"Classroom published successfully",error:"Error while publishing classroom",name:{label:"Classroom Name",placeholder:"What will be the name of the Classroom?"},description:{label:"Classroom Description",placeholder:"Add some detail"},actions:{save:"Continue"}},errors:{default:"The classroom could not be registered. Please validate the data and try again"},institution:{label:"Institution",select:"Select institution",own:"Does not belong to a institution"}}}}),o.exports.descriptor=[{im:"./txt",from:"txt",name:"txt"}],o.exports.process=function({require:e,prop:t,value:o}){!e&&"txt"!==t||s("txt",e?e("./txt").txt:o)},s("__beyond_pkg",o),s("hmr",new function(){this.on=(e,t)=>o.hmr.on(e,t),this.off=(e,t)=>o.hmr.off(e,t)}),o.initialise(n)}}});