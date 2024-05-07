System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.1.12/model","@bgroup/http-suite@1.0.3/api","@aimpact/ailearn-app@0.0.32/config","@aimpact/chat-sdk@1.0.0/session"],function(a,e){"use strict";var i,t,n,o,p,s,r;return a("Application",void 0),{setters:[function(e){i=e},function(e){t=e},function(e){n=e},function(e){o=e},function(e){p=e}],execute:function(){r=i.Bundle,(s=new r({module:{vspecifier:"@aimpact/ailearn-sdk@1.0.0/application"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/reactive/model",t],["@bgroup/http-suite/api",n],["@aimpact/ailearn-sdk/config",o],["@aimpact/chat-sdk/session",p]]),(r=new Map).set("./index",{hash:2450677220,creator:function(e,i){Object.defineProperty(i,"__esModule",{value:!0}),i.Application=void 0;var t=e("@beyond-js/reactive/model"),a=e("@bgroup/http-suite/api"),n=e("@aimpact/ailearn-sdk/config"),o=e("@aimpact/chat-sdk/session");class p extends t.ReactiveModel{#api;constructor(){super(),this.#api=new a.Api(n.default.params.apis.ailearn)}async policies(){try{this.#api.bearer(o.sessionWrapper.user.token);var e=await this.#api.get("/application/metadata/policy");if(e.status)return e.data;throw new Error("Error fetching policies")}catch(e){console.error(e)}}}i.Application=p}}),s.exports.descriptor=[{im:"./index",from:"Application",name:"Application"}],s.exports.process=function({require:e,prop:i,value:t}){!e&&"Application"!==i||a("Application",e?e("./index").Application:t)},a("__beyond_pkg",s),a("hmr",new function(){this.on=(e,i)=>s.hmr.on(e,i),this.off=(e,i)=>s.hmr.off(e,i)}),s.initialise(r)}}});