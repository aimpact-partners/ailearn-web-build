System.register(["@beyond-js/kernel@0.1.9/bundle"],function(a,e){"use strict";var t,o,r;return a("txt",void 0),{setters:[function(e){t=e}],execute:function(){r=t.Bundle,(o=new r({module:{vspecifier:"@aimpact/ailearn-app@0.0.45/classrooms/join",multibundle:!0},type:"txt"},e.meta.url).package("en")).dependencies.update([]),(r=new Map).set("./txt",{hash:2554964448,creator:function(e,t){t.txt={breadcrumb:{classrooms:"Classroom",management:"Management",join:"Join"},errors:{INVALID_CODE:"The verification code is not valid",ERROR_PUBLISHING:"The request could not be made, please try again later",ALREADY_WAITING:"There is already a request pending for this classroom",ALREADY_MEMBER:"You are already a member of this classroom"},action:{join:"Join"},title:"Join a Classroom",describe:"Join a classroom to access content and participate in educational activities.",form:{title:"Classroom Code",subtitle:"Enter the class code provided by your teacher",placeholder:"Classroom code"},info:{title:"How to join with a valid code",rules:{first:"Use an authorized account",second:"Enter the alphanumeric code to access the classroom"},help:"If you're having trouble joining a classroom, consult with your teacher or visit our Help Center."},messages:{authorized:"You now have access to the classroom",pending:"Your access request is pending approval by the teacher"}}}}),o.exports.descriptor=[{im:"./txt",from:"txt",name:"txt"}],o.exports.process=function({require:e,prop:t,value:o}){!e&&"txt"!==t||a("txt",e?e("./txt").txt:o)},a("__beyond_pkg",o),a("hmr",new function(){this.on=(e,t)=>o.hmr.on(e,t),this.off=(e,t)=>o.hmr.off(e,t)}),o.initialise(r)}}});