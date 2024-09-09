System.register(["@beyond-js/kernel@0.1.9/bundle","@aimpact/chat-sdk@1.1.0/core","@aimpact/chat-sdk@1.1.0/session","@beyond-js/reactive@1.2.0/model","@beyond-js/kernel@0.1.9/core"],function(i,e){"use strict";var t,a,r,s,n,c,p;return i({Wrapper:void 0,AppWrapper:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){s=e},function(e){n=e}],execute:function(){p=t.Bundle,(c=new p({module:{vspecifier:"@aimpact/chat-sdk@1.1.0/wrapper"},type:"ts"},e.meta.url).package()).dependencies.update([["@aimpact/chat-sdk/core",a],["@aimpact/chat-sdk/session",r],["@beyond-js/reactive/model",s],["@beyond-js/kernel/core",n]]),(p=new Map).set("./index",{hash:2289235394,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Wrapper=t.AppWrapper=void 0;var a=e("@aimpact/chat-sdk/core"),i=e("@aimpact/chat-sdk/session"),r=e("@beyond-js/reactive/model"),s=e("@beyond-js/kernel/core");class n extends r.ReactiveModel{#chats;get chats(){return this.#chats}#language=s.languages.current;get language(){return this.#language}set language(e){this.#language=e,this.triggerEvent("app.settings.change")}#audioSpeed=localStorage.getItem("aimpact.audio.speed")?parseInt(localStorage.getItem("aimpact.audio.speed")):1;get audioSpeed(){return this.#audioSpeed}set audioSpeed(e){e&&(this.#audioSpeed=e,localStorage.setItem("aimpact.audio.speed",e.toString()),this.triggerEvent("app.settings.change"))}#accessibility=localStorage.getItem("aimpact.chat.accessibility")?localStorage.getItem("aimpact.chat.accessibility"):"normal";get accesiibility(){return this.#accessibility}set accesiibility(e){this.#accessibility=e,localStorage.setItem("aimpact.chat.accessibility",e),this.triggerEvent("app.settings.change")}set accessibility(e){this.#accessibility=e,localStorage.setItem("aimpact.chat.accessibility",e),this.triggerEvent()}#currentChat;get currentChat(){return this.#currentChat}set currentChat(e){if(!e?.id)throw new Error("invalid chat");this.#currentChat?.id!==e?.id&&(this.#currentChat=e,this.triggerEvent())}#ready;get isReady(){return this.#ready}constructor(){super(),this.reactiveProps(["isUpdating","selectedKnowledgeBoxId"]),i.sessionWrapper.on("change",this.validateSession.bind(this)),this.load()}validateSession(){i.sessionWrapper.logged&&(this.ready=!1,this.#ready=void 0,this.load())}async load(){if(this.#ready)return this.#ready;var e;this.#ready=new s.PendingPromise,await i.sessionWrapper.isReady,i.sessionWrapper.logged&&(e=new a.Chats,this.#chats=e),this.ready=!0,this.#ready.resolve(!0)}setSettings(t){Object.keys(t).forEach(e=>this[e]=t[e]),this.triggerEvent()}}e=new(t.Wrapper=n),r=t.AppWrapper=e,globalThis.app=r}}),c.exports.descriptor=[{im:"./index",from:"Wrapper",name:"Wrapper"},{im:"./index",from:"AppWrapper",name:"AppWrapper"}],c.exports.process=function({require:e,prop:t,value:a}){!e&&"Wrapper"!==t||i("Wrapper",e?e("./index").Wrapper:a),!e&&"AppWrapper"!==t||i("AppWrapper",e?e("./index").AppWrapper:a)},i("__beyond_pkg",c),i("hmr",new function(){this.on=(e,t)=>c.hmr.on(e,t),this.off=(e,t)=>c.hmr.off(e,t)}),c.initialise(p)}}});