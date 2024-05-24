System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.1.12/entities","@aimpact/chat-sdk@1.0.0/api","@aimpact/ailearn-app@0.0.40/config","@aimpact/chat-sdk@1.0.0/session","@beyond-js/kernel@0.1.9/core"],function(a,e){"use strict";var t,s,i,o,r,n,c,d;return a({Audio:void 0,Chats:void 0,IChatProperties:void 0,IChat:void 0,Chat:void 0,Message:void 0,KnowledgeBoxes:void 0,KnowledgeBox:void 0}),{setters:[function(e){t=e},function(e){s=e},function(e){i=e},function(e){o=e},function(e){r=e},function(e){n=e}],execute:function(){d=t.Bundle,(c=new d({module:{vspecifier:"@aimpact/chat-sdk@1.0.0/core"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/reactive/entities",s],["@aimpact/chat-sdk/api",i],["@aimpact/chat-sdk/config",o],["@aimpact/chat-sdk/session",r],["@beyond-js/kernel/core",n]]),(d=new Map).set("./audio/collection",{hash:253578571,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Audios=void 0;var s=e("@beyond-js/reactive/entities"),a=e("./item");class i extends s.Collection{item=a.Audio;storeName="AudioRecords";db="chat-api";constructor(e){super(e),this.init()}}t.Audios=i}}),d.set("./audio/item",{hash:2422576646,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Audio=void 0;class s extends e("@beyond-js/reactive/entities").Item{properties=["id","userId","category"];constructor({id:e=void 0}={}){super({id:e,db:"chat-api",storeName:"AudioRecords"})}}t.Audio=s}}),d.set("./chats/collection/index",{hash:2314788938,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Chats=void 0;var s=e("@beyond-js/reactive/entities"),a=e("../item"),i=e("./provider");class o extends s.Collection{item=a.Chat;constructor(){super({provider:i.ChatCollectionProvider,storeName:"Chat",db:"chat-api"})}}t.Chats=o}}),d.set("./chats/collection/provider",{hash:317469146,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatCollectionProvider=void 0;var s=e("@aimpact/chat-sdk/api"),a=e("@aimpact/chat-sdk/config"),i=e("@aimpact/chat-sdk/session");t.ChatCollectionProvider=class{#api;#parent;constructor(e){this.#api=new s.Api(a.default.params.apis.chat),this.#parent=e}async list(){var e=await i.sessionWrapper.user.firebaseToken,{status:e,data:t}=(this.#api.bearer(e),await this.#api.get("/chats"));if(e)return{status:e,data:t};throw new Error("error loading chat")}}}}),d.set("./chats/interfaces/chat",{hash:824696355,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),d.set("./chats/interfaces/message",{hash:218835744,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),d.set("./chats/item/index",{hash:3728339269,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Chat=void 0;var s=e("@beyond-js/reactive/entities"),a=e("@aimpact/chat-sdk/config"),i=e("@aimpact/chat-sdk/api"),r=e("../messages/item"),o=e("../messages"),n=e("@beyond-js/kernel/core"),c=e("./provider");class d extends s.Item{#api;properties=["id","autoplay","name","userId","system","parent","category","language","usage","children","knowledgeBoxId","user","metadata"];localdb=!1;#messages;get messages(){return this.#messages}constructor({id:e=void 0}={}){super({id:e,db:"chat-api",storeName:"Chat",provider:c.ChatProvider}),this.#api=new i.Api(a.default.params.apis.chat),globalThis.chat=this}loadAll=async e=>{var e=await this.load(e),t=new o.Messages;await t.localLoad({chatId:this.id,sortBy:"timestamp",limit:1e3});t.on("change",this.triggerEvent),e.data.messages?.length&&await t.setEntries(e.data.messages),this.#messages=t,globalThis.m=t,globalThis.c=this};async setAudioMessage(e){try{var t=new r.Message;return await t.isReady,await t.saveMessage(e),this.triggerEvent(),t}catch(e){console.error(e)}}#currentAudio;async saveAudioLocally(e,t=void 0){try{var s=new r.Message,a=(await s.isReady,s.setOffline(!0),{chat:{id:this.id},chatId:this.id,type:"audio",audio:e,role:"user",language:this.language?.default??n.languages.current});return t&&(a.content=t),await(this.#currentAudio=s).saveMessage(a),this.setOffline(!1),this.triggerEvent(),s}catch(e){console.error(e)}}async sendMessage(s){try{this.fetching=!0;const i=new r.Message({chat:this});let e=new r.Message({chat:this}),t=(await Promise.all([i.isReady,e.isReady]),!1);const o=async()=>{t||(t=!0,e.publishSystem({offline:!0,specs:{chatId:this.id,chat:{id:this.id},conversation:{id:this.id},content:"",role:"system"}})),this.trigger(`message.${e.id}.updated`),e.updateContent({content:i.response}),e.triggerEvent(),this.triggerEvent()};i.on("content.updated",o),i.on("response.finished",()=>{e.updateContent({content:i.response}),this.trigger(`message.${e.id}.ended`),this.trigger(`message.${e.id}.updated`),i.off("content.updated",o)});var a={chatId:this.id,systemId:e.id,id:i.id,role:"user"};return"string"==typeof s?a.content=s:(a.multipart=!0,a.audio=s),i.publish(a),{message:i,response:e}}catch(e){console.error(e)}finally{this.fetching=!1}}getMessage(e){return this.#messages.get(e)}}t.Chat=d}}),d.set("./chats/item/provider",{hash:2565157831,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatProvider=void 0;var s=e("@aimpact/chat-sdk/api"),a=e("@aimpact/chat-sdk/config"),i=e("@aimpact/chat-sdk/session");t.ChatProvider=class{#api;#parent;constructor(e){this.#api=new s.Api(a.default.params.apis.chat),this.#parent=e}async load(e){var t=await i.sessionWrapper.user.firebaseToken,{status:t,data:s}=(this.#api.bearer(t),await this.#api.get("/chats/"+this.#parent.id));if(t)return{status:t,data:s};throw new Error("error loading chat")}}}}),d.set("./chats/messages/collection",{hash:2216528992,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Messages=void 0;var s=e("@beyond-js/reactive/entities"),a=e("./item");class i extends s.Collection{item=a.Message;storeName="Messages";db="chat-api";constructor(){super(),this.init()}}t.Messages=i}}),d.set("./chats/messages/index",{hash:1504257781,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Messages=void 0;var s=e("@beyond-js/reactive/entities"),a=e("./item");class i extends s.Collection{item=a.Message;constructor(){super({storeName:"Messages",db:"chat-api"})}}t.Messages=i}}),d.set("./chats/messages/item",{hash:702312539,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Message=void 0;var s=e("@beyond-js/reactive/entities"),a=e("@aimpact/chat-sdk/api"),i=e("@aimpact/chat-sdk/config"),o=e("@aimpact/chat-sdk/session"),r=e("@beyond-js/kernel/core");class n extends s.Item{properties=["id","chatId","audio","chat","userId","role","content","usage","timestamp"];#api;#response="";#chat;localFields=["audio"];#parsedContent;get response(){return this.#response}constructor({id:e=void 0,chat:t}={}){super({id:e,db:"chat-api",storeName:"Messages"}),this.#chat=t;e=new a.Api(i.default.params.apis.chat);this.#api=e,this.reactiveProps(["autoplay"]),this.#listen(),this.initialise()}async initialise(){super.initialise()}#onListen=()=>{this.#response=this.#api.streamResponse,this.trigger("content.updated")};#listen=()=>{this.#api.on("stream.response",this.#onListen)};#offEvents=()=>{this.#api.off("stream.response",this.#onListen)};async publish(e){try{this.setOffline(!0);var t=new r.PendingPromise,s=await o.sessionWrapper.user.firebaseToken;return this.#api.bearer(s).stream(`/chats/${this.#chat.id}/messages`,{...e}).then(e=>{this.trigger("response.finished"),this.#offEvents()}).catch(e=>{console.error(e)}),this.#api.on("action.received",()=>{try{var e=this.#api?.actions?.find(e=>{if("transcription"===JSON.parse(e).type)return!0});e&&(e=JSON.parse(e),super.publish({content:e.data.transcription}))}catch(e){console.error(e)}}),super.publish(e),t}catch(e){console.trace(e)}}async publishSystem({offline:e,specs:t}){this.setOffline(e),super.publish(t)}async updateContent(e){this.setOffline(!0),await super.publish(e),this.trigger("content.updated")}}t.Message=n}}),d.set("./knowledge-boxes/collection",{hash:218534898,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.KnowledgeBoxes=void 0;var s=e("@beyond-js/reactive/entities"),a=e("./item"),i=e("@aimpact/chat-sdk/api"),o=e("@aimpact/chat-sdk/session"),r=e("@aimpact/chat-sdk/config");class n extends s.Collection{item=a.KnowledgeBox;#api;#project;#url=r.default.params.DOCUMENTS_SERVER;get api(){return this.#api}constructor(){super({storeName:"KnowledgeBoxes",db:"chat-api"}),this.#api=new i.Api(this.#url),this.#project=r.default.params.project}async list(e){try{this.fetching=!0;var t={type:"files",userId:o.sessionWrapper.userId,project:this.#project},s=(e&&(t.filter=e),await this.#api.get("/list",t));if(s.status)return s.data;throw new Error(s.error)}catch(e){console.error(e)}finally{this.fetching=!0}}async remove(e){try{if(!e)return{status:!1,error:"No path provided"};this.fetching=!0;var t={userId:o.sessionWrapper.userId,project:this.#project},s=await this.#api.delete("/delete",t);if(s.status)return s.data;throw new Error(s.error)}catch(e){console.error(e)}finally{this.fetching=!0}}}t.KnowledgeBoxes=n}}),d.set("./knowledge-boxes/item",{hash:1885230964,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.KnowledgeBox=void 0;class s extends e("@beyond-js/reactive/entities").Item{properties=["id","path","identifier","documents","type"];constructor({id:e=void 0}={}){super({id:e,db:"chat-api",storeName:"KnowledgeBoxes"})}}t.KnowledgeBox=s}}),c.exports.descriptor=[{im:"./audio/item",from:"Audio",name:"Audio"},{im:"./chats/collection/index",from:"Chats",name:"Chats"},{im:"./chats/interfaces/chat",from:"IChatProperties",name:"IChatProperties"},{im:"./chats/interfaces/chat",from:"IChat",name:"IChat"},{im:"./chats/item/index",from:"Chat",name:"Chat"},{im:"./chats/messages/item",from:"Message",name:"Message"},{im:"./knowledge-boxes/collection",from:"KnowledgeBoxes",name:"KnowledgeBoxes"},{im:"./knowledge-boxes/item",from:"KnowledgeBox",name:"KnowledgeBox"}],c.exports.process=function({require:e,prop:t,value:s}){!e&&"Audio"!==t||a("Audio",e?e("./audio/item").Audio:s),!e&&"Chats"!==t||a("Chats",e?e("./chats/collection/index").Chats:s),!e&&"IChatProperties"!==t||a("IChatProperties",e?e("./chats/interfaces/chat").IChatProperties:s),!e&&"IChat"!==t||a("IChat",e?e("./chats/interfaces/chat").IChat:s),!e&&"Chat"!==t||a("Chat",e?e("./chats/item/index").Chat:s),!e&&"Message"!==t||a("Message",e?e("./chats/messages/item").Message:s),!e&&"KnowledgeBoxes"!==t||a("KnowledgeBoxes",e?e("./knowledge-boxes/collection").KnowledgeBoxes:s),!e&&"KnowledgeBox"!==t||a("KnowledgeBox",e?e("./knowledge-boxes/item").KnowledgeBox:s)},a("__beyond_pkg",c),a("hmr",new function(){this.on=(e,t)=>c.hmr.on(e,t),this.off=(e,t)=>c.hmr.off(e,t)}),c.initialise(d)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hdWRpby9jb2xsZWN0aW9uLnRzIiwiL2F1ZGlvL2l0ZW0udHMiLCIvY2hhdHMvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGF0cy9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0cy9pdGVtL2luZGV4LnRzIiwiL2NoYXRzL2l0ZW0vcHJvdmlkZXIudHMiLCIvY2hhdHMvbWVzc2FnZXMvY29sbGVjdGlvbi50cyIsIi9jaGF0cy9tZXNzYWdlcy9pbmRleC50cyIsIi9jaGF0cy9tZXNzYWdlcy9pdGVtLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9jb2xsZWN0aW9uLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9pdGVtLnRzIl0sIm5hbWVzIjpbIl9lbnRpdGllcyIsInJlcXVpcmUiLCJfaXRlbSIsIkF1ZGlvcyIsIkNvbGxlY3Rpb24iLCJpdGVtIiwiQXVkaW8iLCJzdG9yZU5hbWUiLCJkYiIsImNvbnN0cnVjdG9yIiwiYSIsInN1cGVyIiwidGhpcyIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIl9wcm92aWRlciIsIkNoYXRzIiwiQ2hhdCIsInByb3ZpZGVyIiwiQ2hhdENvbGxlY3Rpb25Qcm92aWRlciIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCIjYXBpIiwiI3BhcmVudCIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiY2hhdCIsImxpc3QiLCJ0b2tlbiIsImF3YWl0Iiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsInN0YXR1cyIsImRhdGEiLCJiZWFyZXIiLCJnZXQiLCJFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbWVzc2FnZXMiLCJfY29yZSIsImxvY2FsZGIiLCIjbWVzc2FnZXMiLCJtZXNzYWdlcyIsIkNoYXRQcm92aWRlciIsImdsb2JhbFRoaXMiLCJsb2FkQWxsIiwic3BlY3MiLCJyZXNwb25zZSIsImxvYWQiLCJjb2xsZWN0aW9uIiwiTWVzc2FnZXMiLCJsb2NhbExvYWQiLCJjaGF0SWQiLCJzb3J0QnkiLCJsaW1pdCIsIm9uIiwidHJpZ2dlckV2ZW50IiwibGVuZ3RoIiwic2V0RW50cmllcyIsIm0iLCJjIiwic2V0QXVkaW9NZXNzYWdlIiwicmVzcG9uc2VJdGVtIiwiTWVzc2FnZSIsImlzUmVhZHkiLCJzYXZlTWVzc2FnZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCIjY3VycmVudEF1ZGlvIiwic2F2ZUF1ZGlvTG9jYWxseSIsImF1ZGlvIiwidHJhbnNjcmlwdGlvbiIsInNldE9mZmxpbmUiLCJ0eXBlIiwicm9sZSIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImNvbnRlbnQiLCJzZW5kTWVzc2FnZSIsImZldGNoaW5nIiwibGV0IiwicHVibGlzaGVkIiwiUHJvbWlzZSIsImFsbCIsIm9uTGlzdGVuIiwiYXN5bmMiLCJwdWJsaXNoU3lzdGVtIiwib2ZmbGluZSIsImNvbnZlcnNhdGlvbiIsInRyaWdnZXIiLCJ1cGRhdGVDb250ZW50Iiwib25FbmQiLCJvZmYiLCJzeXN0ZW1JZCIsIm11bHRpcGFydCIsInB1Ymxpc2giLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsIiNyZXNwb25zZSIsIiNjaGF0IiwibG9jYWxGaWVsZHMiLCIjcGFyc2VkQ29udGVudCIsImFwaSIsInJlYWN0aXZlUHJvcHMiLCIjbGlzdGVuIiwiaW5pdGlhbGlzZSIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwiI29mZkV2ZW50cyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInN0cmVhbSIsInRoZW4iLCJjYXRjaCIsImFjdGlvbnMiLCJmaW5kIiwiYWN0aW9uIiwiSlNPTiIsInBhcnNlIiwidHJhY2UiLCJLbm93bGVkZ2VCb3hlcyIsIktub3dsZWRnZUJveCIsIiNwcm9qZWN0IiwiI3VybCIsIkRPQ1VNRU5UU19TRVJWRVIiLCJwcm9qZWN0IiwiZmls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