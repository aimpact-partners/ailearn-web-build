System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.1.12/model","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-app@0.0.32/coins-layout.widget","react@18.2.0","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.32/components/ui","@aimpact/chat@1.0.1/shared/components","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.0.32/components/hooks"],function(r,e){"use strict";var t,a,n,i,o,s,c,l,d,u,m,p,h,v,g,f;return r({Controller:void 0,CharacterCard:void 0,DesktopView:void 0,View:void 0,MobileView:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){i=e},function(e){o=e},function(e){s=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){h=e},function(e){v=e}],execute:function(){f=a.Bundle,(g=new f({module:{vspecifier:"@aimpact/ailearn-app@0.0.32/assignments/character-talk",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",i],["@aimpact/ailearn-sdk/core",o],["@beyond-js/reactive/model",s],["@beyond-js/kernel/texts",c],["@aimpact/ailearn-app/coins-layout.widget",l],["react",d],["pragmate-ui/components",u],["@aimpact/ailearn-app/components/ui",m],["@aimpact/chat/shared/components",p],["@beyond-js/react-18-widgets/hooks",h],["@aimpact/ailearn-app/components/hooks",v]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-character-talk",vspecifier:"@aimpact/ailearn-app@0.0.32/assignments/character-talk.widget",is:"page",route:"/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",layout:"coins-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.32/assignments/character-talk.widget"),(f=new Map).set("./controller",{hash:1310206847,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),r=e("./store"),n=e("./views");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager,this.#store}get Widget(){return n.View}show(){this.#store.load(this.uri.vars.get("assignmentId"),this.uri.vars.get("activityId"),this.uri.vars.get("id"))}}t.Controller=i}}),f.set("./store",{hash:2711739193,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var n=e("@aimpact/ailearn-sdk/core"),a=e("@beyond-js/reactive/model"),r=e("@beyond-js/kernel/texts"),i=e("beyond_context"),o=e("@aimpact/ailearn-app/coins-layout.widget");class s extends a.ReactiveModel{#model;#assignmentId;#activityId;get model(){return this.#model}#items;get items(){return this.#items}#paramsUri;get paramsUri(){return this.#paramsUri}#texts=new r.CurrentTexts(i.module.specifier);get texts(){return this.#texts?.value}#chatId;get chatId(){return this.#chatId}get ready(){return super.ready&&this.#texts.ready}#found;get found(){return this.#found}get canConsumeCredits(){return this.#found}get hasCredits(){return 0<this.#model?.credits?.total}get AIAvailable(){return 0<this.#model?.credits?.total}constructor(){super(),this.#texts.on("change",this.triggerEvent)}async load(e,t,a){try{var r;o.LayoutBroker.overlay=!0,o.LayoutBroker.canConsumeCredits=!0,e===this.#assignmentId&&this.#activityId===t?o.LayoutBroker.addModel(this.#model):(this.#assignmentId=e,this.#activityId=t,r=new n.AssignmentActivity({id:t,assignmentId:e}),this.#chatId=a,this.#paramsUri={assignmentId:e,activityId:t},await(this.#model=r).isReady,await r.load(),o.LayoutBroker.addModel(this.#model),super.ready=!0,this.#found=!0,this.triggerEvent())}catch(e){super.ready=!0,this.#found=!1,o.LayoutBroker.canConsumeCredits=!1,this.triggerEvent()}}}t.StoreManager=s}}),f.set("./views/characters-card",{hash:574123641,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterCard=function(){var e=(0,r.useConversationContext)().texts;return a.default.createElement("section",{className:"character-card__container"},a.default.createElement("span",{className:"character-card__title"},e.selectTitle),a.default.createElement("div",{className:"character-card__actions"}),a.default.createElement(n.Button,{variant:"primary",className:"character-card__button mt-15",onClick:e=>{console.log("clickAvatar")},label:e.buttonText}))};var a=e("react"),r=e("./context"),n=e("pragmate-ui/components")}}),f.set("./views/chat",{hash:1886151761,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatControl=function(){var{store:e,chatId:t,assignmentId:a,texts:r}=(0,i.useConversationContext)();return e.hasCredits?n.default.createElement("aimpact-chat-control",{id:t,"assignment-id":a}):n.default.createElement(o.ChatPreload,{text:r.noCredits,onClick:()=>s.LayoutBroker.ensureCredits(()=>{})})};var n=e("react"),i=e("./context"),o=e("@aimpact/ailearn-app/components/ui"),s=e("@aimpact/ailearn-app/coins-layout.widget")}}),f.set("./views/context",{hash:563708756,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useConversationContext=t.ConversationContext=void 0;var a=e("react");const r=t.ConversationContext=a.default.createContext({});t.useConversationContext=()=>a.default.useContext(r)}}),f.set("./views/desktop",{hash:97198126,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DesktopView=function(){var{store:e,texts:t}=(0,r.useConversationContext)();return a.default.createElement("div",{className:"page-activity-container"},a.default.createElement(n.ActivityHeader,{title:e.model.title,icon:e.model.type,type:e.model.type}),a.default.createElement(n.PageContainer,{className:"content-activity--desktop-container"},a.default.createElement(i.ChatControl,null),a.default.createElement("aside",{className:"content-activity__aside"},a.default.createElement(n.EntityImage,{className:"entity-image-cover",src:e.model.image,entity:"assignment"}),a.default.createElement("h4",null,t.description),a.default.createElement("p",null,e.model.description))))};var a=e("react"),r=e("./context"),n=e("@aimpact/ailearn-app/components/ui"),i=e("./chat")}}),f.set("./views/index",{hash:4117034255,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e,uri:t}){const[a,r]=(0,d.useState)(),[n,,]=(0,d.useState)(e.items),[,i]=d.default.useState(""),o=t.vars.get("assignmentId"),s=t.vars.get("chatId"),c=(0,g.useMediaQuery)();var l;return(0,m.useBinder)([e.model],()=>i(e.model?.title||"")),(0,m.useBinder)([e],()=>r(e.ready)),a&&!e.found?d.default.createElement("app-missing",null):a?(t={texts:e.texts,fetching:e.fetching,chatId:s,assignmentId:o,store:e,items:n},l="md"===c||"lg"===c?v.DesktopView:h.MobileView,d.default.createElement(p.ConversationContext.Provider,{value:t},d.default.createElement(l,null))):d.default.createElement(u.PreloadScreen,null)};var d=e("react"),u=e("@aimpact/chat/shared/components"),m=e("@beyond-js/react-18-widgets/hooks"),p=e("./context"),h=e("./mobile"),v=e("./desktop"),g=e("@aimpact/ailearn-app/components/hooks")}}),f.set("./views/mobile",{hash:906907669,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MobileView=function(){var e=(0,r.useConversationContext)().store;return a.default.createElement("div",{className:"page-activity-container"},a.default.createElement(n.ActivityHeader,{title:e.model.title,icon:e.model.type,type:e.model.type}),a.default.createElement(n.PageContainer,{className:"content-activity--container"},a.default.createElement(n.EntityImage,{className:"entity-image-cover",src:e.model.image,entity:"assignment"}),a.default.createElement(i.ChatControl,null)))};var a=e("react"),r=e("./context"),n=e("@aimpact/ailearn-app/components/ui"),i=e("./chat")}}),g.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/characters-card",from:"CharacterCard",name:"CharacterCard"},{im:"./views/desktop",from:"DesktopView",name:"DesktopView"},{im:"./views/index",from:"View",name:"View"},{im:"./views/mobile",from:"MobileView",name:"MobileView"}],g.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:a),!e&&"CharacterCard"!==t||r("CharacterCard",e?e("./views/characters-card").CharacterCard:a),!e&&"DesktopView"!==t||r("DesktopView",e?e("./views/desktop").DesktopView:a),!e&&"View"!==t||r("View",e?e("./views/index").View:a),!e&&"MobileView"!==t||r("MobileView",e?e("./views/mobile").MobileView:a)},r("__beyond_pkg",g),r("hmr",new function(){this.on=(e,t)=>g.hmr.on(e,t),this.off=(e,t)=>g.hmr.off(e,t)}),g.initialise(f)}}});