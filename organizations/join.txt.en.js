System.register(["@beyond-js/kernel@0.1.9/bundle"],function(o,t){"use strict";var e,i,n;return o("txt",void 0),{setters:[function(t){e=t}],execute:function(){n=e.Bundle,(i=new n({module:{vspecifier:"@aimpact/ailearn-app@0.0.46/organizations/join",multibundle:!0},type:"txt"},t.meta.url).package("en")).dependencies.update([]),(n=new Map).set("./txt",{hash:3462258886,creator:function(t,e){e.txt={actions:{home:"Go to home"},breadcrumb:{organizations:"Insitutions",management:"crear",join:"Join an institution"},errors:{ERROR_PUBLISHING:"The request could not be made, please try again later",INVALID_CODE:"The code is not valid",ALREADY_WAITING:"You have already made the request to join the organization, wait for the administrator to accept you or contact him",ALREADY_MEMBER:"You are already a member of the organization"},action:{join:"Join"},title:"Join a organization",describe:"Join a organization to access content and participate in educational activities.",form:{title:"Organization Code",subtitle:"Enter the code provided by the organization administrator",placeholder:"Organization code"},info:{title:"How to join with a valid code",help:"If you have trouble joining, check with the organization administrator"},ready:{title:"Request sent",description:"Now you must wait for the administrator to approve it and then you can have access"},messages:{success:"You have joined the organization!",pending:"Your access request is pending approval by the teacher"}}}}),i.exports.descriptor=[{im:"./txt",from:"txt",name:"txt"}],i.exports.process=function({require:t,prop:e,value:i}){!t&&"txt"!==e||o("txt",t?t("./txt").txt:i)},o("__beyond_pkg",i),o("hmr",new function(){this.on=(t,e)=>i.hmr.on(t,e),this.off=(t,e)=>i.hmr.off(t,e)}),i.initialise(n)}}});