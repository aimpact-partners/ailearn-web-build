System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.2.0/model","@beyond-js/reactive@1.2.0/database"],function(n,e){var t,s,i,a,o;return n("sdkConfig",void 0),{setters:[function(e){t=e},function(e){s=e},function(e){i=e}],execute:function(){o=t.Bundle,(a=new o({module:{vspecifier:"@aimpact/chat-sdk@1.0.1/startup"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/reactive/model",s],["@beyond-js/reactive/database",i]]),(o=new Map).set("./endpoints",{hash:540830039,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ENDPOINTS=void 0,t.ENDPOINTS={development:"https://dev.agents.api.aimpact.partners",local:"https://dev.agents.api.aimpact.partners",testing:"https://test.agents.api.aimpact.partners",quality:"https://beta.agents.api.aimpact.partners",production:"https://agents.api.aimpact.partners"}}}),o.set("./index",{hash:578775214,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.sdkConfig=void 0;var s=e("@beyond-js/reactive/model"),n=e("./localdb"),i=e("./endpoints");class a extends s.ReactiveModel{#api;#environment;get environment(){return this.#environment}#endpoints=i.ENDPOINTS;get api(){return this.#endpoints[this.#environment]}#userModel;get userModel(){return this.#userModel}set userModel(e){this.#userModel=e,this.triggerEvent()}async initialize({environment:e,userModel:t,localdb:s=!0}){if(this.#environment=e,this.#userModel=t,s)return(0,n.localdb)()}}t.sdkConfig=new a}}),o.set("./localdb",{hash:2345944389,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.localdb=async function(){try{await s.DBManager.config("chat-api@26",{Activities:"id",Assignments:"id, name",Chat:"id, name, userId, category, usage, system, knowledgeBoxId",Classrooms:"id, name",Conversations:"id, name, userId, system",Documents:"id, knowledgeBaseId",KnowledgeBoxes:"id, userId",Messages:"id,  chatId, userId, text, role, usage, timestamp",Modules:"id, type, timeCreated, timeUpdated",Organizations:"id",Projects:"id, project",PromptCategories:"id",Prompts:"id",SharedKnowledgeBases:"id, knowledgeBaseId, sharedWithUserId",Sessions:"id,  classRoomId",StudentsHome:"id",Topics:"id,  title",User:"id"})}catch(e){console.trace("error",e)}};var s=e("@beyond-js/reactive/database")}}),o.set("./types",{hash:263068759,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),a.exports.descriptor=[{im:"./index",from:"sdkConfig",name:"sdkConfig"}],a.exports.process=function({require:e,prop:t,value:s}){!e&&"sdkConfig"!==t||n("sdkConfig",e?e("./index").sdkConfig:s)},n("__beyond_pkg",a),n("hmr",new function(){this.on=(e,t)=>a.hmr.on(e,t),this.off=(e,t)=>a.hmr.off(e,t)}),a.initialise(o)}}});