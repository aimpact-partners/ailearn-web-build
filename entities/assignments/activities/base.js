System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@aimpact/ailearn-app@0.1.7/main-layout.widget","@beyond-js/reactive@1.2.0/model","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-sdk@1.0.0/tracking","@aimpact/ailearn-app@0.1.7/i18n.ts"],function(n,e){"use strict";var t,a,i,s,r,o,d,u,c;return n({IModuleContext:void 0,ModuleContext:void 0,useModuleContext:void 0,BaseStoreManager:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){i=e},function(e){s=e},function(e){r=e},function(e){o=e},function(e){d=e}],execute:function(){c=t.Bundle,(u=new c({module:{vspecifier:"@aimpact/ailearn-app@0.1.7/entities/assignments/activities/base"},type:"code"},e.meta.url).package()).dependencies.update([["react",a],["@aimpact/ailearn-app/main-layout.widget",i],["@beyond-js/reactive/model",s],["@beyond-js/kernel/texts",r],["@aimpact/ailearn-sdk/tracking",o],["@aimpact/ailearn-app/i18n.ts",d]]),(c=new Map).set("./context",{hash:1555775956,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");const n=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(n)}}),c.set("./store",{hash:121885797,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BaseStoreManager=void 0;var s=e("@aimpact/ailearn-app/main-layout.widget"),a=e("@beyond-js/reactive/model"),n=e("@beyond-js/kernel/texts"),r=e("@aimpact/ailearn-sdk/tracking"),i=e("@aimpact/ailearn-app/i18n.ts");class o extends a.ReactiveModel{isStore;#assignmentId;get assignmentId(){return this.#assignmentId}#model;get model(){return this.#model}#activityId;get globalTexts(){return i.globalTexts.texts}#items;get items(){return this.#items}#paramsUri;get paramsUri(){return this.#paramsUri}#answers=new Map;get answers(){return this.#answers}#texts;get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready&&i.globalTexts.ready}#found;get found(){return this.#found}get canConsumeCredits(){return this.#found}get hasCredits(){return 0<this.#tracking?.credits?.total}get AIAvailable(){return 0<this.#tracking?.credits?.total}#tracking;get tracking(){return this.#tracking}#chatId;get chatId(){return this.#chatId}constructor(e){super(),this.#texts=new n.CurrentTexts(e),this.assignmentId||(this.#assignmentId=this.sessionId),this.#texts.on("change",this.triggerEvent),i.globalTexts.on("change",this.triggerEvent),globalThis.sm=this}async load(e,t,a){try{var n,i;s.LayoutBroker.overlay=!0,s.LayoutBroker.canConsumeCredits=!0,this.#chatId=a,e===this.#assignmentId&&this.#activityId===t?s.LayoutBroker.addModel(this.#tracking):(this.#assignmentId=e,this.#activityId=t,n=r.Tracking.get({assignmentId:e}),i=await(this.#tracking=n).activities.load({id:t}),this.#model=i,s.LayoutBroker.addModel(this.#tracking),super.ready=!0,this.#found=!0,this.triggerEvent())}catch(e){super.ready=!0,this.#found=!1,s.LayoutBroker.canConsumeCredits=!1}}updateTracking=async()=>{var e=r.Tracking.get({assignmentId:this.assignmentId});await(this.#tracking=e).activities.load({id:this.#activityId})}}t.BaseStoreManager=o}}),u.exports.descriptor=[{im:"./context",from:"IModuleContext",name:"IModuleContext"},{im:"./context",from:"ModuleContext",name:"ModuleContext"},{im:"./context",from:"useModuleContext",name:"useModuleContext"},{im:"./store",from:"BaseStoreManager",name:"BaseStoreManager"}],u.exports.process=function({require:e,prop:t,value:a}){!e&&"IModuleContext"!==t||n("IModuleContext",e?e("./context").IModuleContext:a),!e&&"ModuleContext"!==t||n("ModuleContext",e?e("./context").ModuleContext:a),!e&&"useModuleContext"!==t||n("useModuleContext",e?e("./context").useModuleContext:a),!e&&"BaseStoreManager"!==t||n("BaseStoreManager",e?e("./store").BaseStoreManager:a)},n("__beyond_pkg",u),n("hmr",new function(){this.on=(e,t)=>u.hmr.on(e,t),this.off=(e,t)=>u.hmr.off(e,t)}),u.initialise(c)}}});