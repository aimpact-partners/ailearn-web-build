System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.2.0/model","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-app@0.1.0-dev.03/main-layout.widget","@aimpact/ailearn-sdk@1.0.0/tracking","react@18.2.0","pragmate-ui@1.0.0-beta.1/components","@aimpact/ailearn-app@0.1.0-dev.03/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.2/shared/components","@aimpact/ailearn-app@0.1.0-dev.03/components/hooks"],function(r,e){var t,a,n,i,o,s,c,l,d,u,m,p,h,g,v,y;return r({Controller:void 0,CharacterCard:void 0,DesktopView:void 0,View:void 0,MobileView:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){i=e},function(e){o=e},function(e){s=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){h=e},function(e){g=e}],execute:function(){y=a.Bundle,(v=new y({module:{vspecifier:"@aimpact/ailearn-app@0.1.0-dev.03/assignments/character-talk",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",i],["@beyond-js/reactive/model",o],["@beyond-js/kernel/texts",s],["@aimpact/ailearn-app/main-layout.widget",c],["@aimpact/ailearn-sdk/tracking",l],["react",d],["pragmate-ui/components",u],["@aimpact/ailearn-app/components/ui",m],["@beyond-js/react-18-widgets/hooks",p],["@aimpact/chat/shared/components",h],["@aimpact/ailearn-app/components/hooks",g]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-character-talk",vspecifier:"@aimpact/ailearn-app@0.1.0-dev.03/assignments/character-talk.widget",is:"page",route:"/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.0-dev.03/assignments/character-talk.widget"),(y=new Map).set("./controller",{hash:1310206847,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),r=e("./store"),n=e("./views");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager,this.#store}get Widget(){return n.View}show(){this.#store.load(this.uri.vars.get("assignmentId"),this.uri.vars.get("activityId"),this.uri.vars.get("id"))}}t.Controller=i}}),y.set("./store",{hash:1675439,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),r=e("@beyond-js/kernel/texts"),n=e("beyond_context"),i=e("@aimpact/ailearn-app/main-layout.widget"),o=e("@aimpact/ailearn-sdk/tracking");class s extends a.ReactiveModel{#model;#assignmentId;#activityId;#tracking;get tracking(){return this.#tracking}get model(){return this.#model}#items;get items(){return this.#items}#paramsUri;get paramsUri(){return this.#paramsUri}#texts=new r.CurrentTexts(n.module.specifier);get texts(){return this.#texts?.value}#chatId;get chatId(){return this.#chatId}get ready(){return super.ready&&this.#texts.ready}#found;get found(){return this.#found}get canConsumeCredits(){return this.#found}get hasCredits(){return 0<this.#tracking?.credits?.total}get AIAvailable(){return 0<this.#tracking?.credits?.total}constructor(){super(),this.#texts.on("change",this.triggerEvent)}async load(e,t,a){try{var r,n;this.#chatId=a,i.LayoutBroker.overlay=!0,i.LayoutBroker.canConsumeCredits=!0,e===this.#assignmentId&&this.#activityId===t?i.LayoutBroker.addModel(this.#tracking):(this.#assignmentId=e,this.#activityId=t,r=o.Tracking.get({assignmentId:e}),n=await(this.#tracking=r).activities.load({id:t}),this.#model=n,i.LayoutBroker.addModel(this.#tracking),super.ready=!0,this.#found=!0,this.triggerEvent(),this.triggerEvent())}catch(e){console.error(e),super.ready=!0,this.#found=!1,i.LayoutBroker.canConsumeCredits=!1,this.triggerEvent()}}}t.StoreManager=s}}),y.set("./views/characters-card",{hash:574123641,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterCard=function(){var e=(0,r.useConversationContext)().texts;return a.default.createElement("section",{className:"character-card__container"},a.default.createElement("span",{className:"character-card__title"},e.selectTitle),a.default.createElement("div",{className:"character-card__actions"}),a.default.createElement(n.Button,{variant:"primary",className:"character-card__button mt-15",onClick:e=>{console.log("clickAvatar")},label:e.buttonText}))};var a=e("react"),r=e("./context"),n=e("pragmate-ui/components")}}),y.set("./views/chat",{hash:686071543,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatControl=function(){let{store:e,chatId:t,assignmentId:a,texts:r}=(0,s.useConversationContext)(),[n,i]=o.default.useState(e.hasCredits);return(0,d.useBinder)([e.model.tracking],()=>{i(e.hasCredits)},"credits.change"),n?o.default.createElement("aimpact-chat-control",{id:t,"assignment-id":a}):o.default.createElement(c.ChatPreload,{text:r.noCredits,onClick:()=>l.LayoutBroker.ensureCredits(()=>{})})};var o=e("react"),s=e("./context"),c=e("@aimpact/ailearn-app/components/ui"),l=e("@aimpact/ailearn-app/main-layout.widget"),d=e("@beyond-js/react-18-widgets/hooks")}}),y.set("./views/context",{hash:563708756,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useConversationContext=t.ConversationContext=void 0;var a=e("react");let r=t.ConversationContext=a.default.createContext({});t.useConversationContext=()=>a.default.useContext(r)}}),y.set("./views/desktop",{hash:362503832,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DesktopView=function(){var{store:e,texts:t}=(0,r.useConversationContext)();return a.default.createElement("div",{className:"page-activity-container"},a.default.createElement(n.ActivityHeader,{icon:e.model.type,title:e.model.title,type:e.model.type}),a.default.createElement(n.PageContainer,{className:"content-activity--desktop-container"},a.default.createElement(i.ChatControl,null),a.default.createElement("aside",{className:"content-activity__aside"},a.default.createElement("div",null,a.default.createElement(n.EntityImage,{className:"entity-image-cover",src:e.model.picture,type:e.model.type,entity:"activity"}),a.default.createElement("h4",null,t.description),a.default.createElement("p",null,e.model.description)))))};var a=e("react"),r=e("./context"),n=e("@aimpact/ailearn-app/components/ui"),i=e("./chat")}}),y.set("./views/index",{hash:1786098072,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e,uri:t}){let[a,r]=(0,l.useState)(e.ready),[n,,]=(0,l.useState)(e.items),i=t.vars.get("assignmentId"),o=t.vars.get("chatId"),s=(0,g.useMediaQuery)();var c;return(0,u.useBinder)([e],()=>r(e.ready)),a&&!e.found?l.default.createElement("app-missing",null):a?(t={texts:e.texts,fetching:e.fetching,chatId:o,assignmentId:i,store:e,items:n},c="md"===s||"lg"===s?h.DesktopView:p.MobileView,l.default.createElement(m.ConversationContext.Provider,{value:t},l.default.createElement(c,null))):l.default.createElement(d.PreloadScreen,null)};var l=e("react"),d=e("@aimpact/chat/shared/components"),u=e("@beyond-js/react-18-widgets/hooks"),m=e("./context"),p=e("./mobile"),h=e("./desktop"),g=e("@aimpact/ailearn-app/components/hooks")}}),y.set("./views/mobile",{hash:2362117843,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MobileView=function(){var e=(0,r.useConversationContext)().store;return a.default.createElement("div",{className:"page-activity-container"},a.default.createElement(n.ActivityHeader,{title:e.model.title,icon:e.model.type,type:e.model.type}),a.default.createElement(n.PageContainer,{className:"content-activity--container"},a.default.createElement(n.EntityImage,{className:"entity-image-cover",type:e.model.type,src:e.model.picture,entity:"activity"}),a.default.createElement(i.ChatControl,null)))};var a=e("react"),r=e("./context"),n=e("@aimpact/ailearn-app/components/ui"),i=e("./chat")}}),v.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/characters-card",from:"CharacterCard",name:"CharacterCard"},{im:"./views/desktop",from:"DesktopView",name:"DesktopView"},{im:"./views/index",from:"View",name:"View"},{im:"./views/mobile",from:"MobileView",name:"MobileView"}],v.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:a),!e&&"CharacterCard"!==t||r("CharacterCard",e?e("./views/characters-card").CharacterCard:a),!e&&"DesktopView"!==t||r("DesktopView",e?e("./views/desktop").DesktopView:a),!e&&"View"!==t||r("View",e?e("./views/index").View:a),!e&&"MobileView"!==t||r("MobileView",e?e("./views/mobile").MobileView:a)},r("__beyond_pkg",v),r("hmr",new function(){this.on=(e,t)=>v.hmr.on(e,t),this.off=(e,t)=>v.hmr.off(e,t)}),v.initialise(y)}}});