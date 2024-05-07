System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.1.12/model","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-app@0.0.32/coins-layout.widget","react@18.2.0","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.32/components/ui","@aimpact/chat@1.0.1/shared/components","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.0.32/components/hooks"],function(n,e){"use strict";var t,a,r,i,o,s,c,d,l,u,m,p,h,v,g,y;return n({Controller:void 0,CharacterCard:void 0,DesktopView:void 0,View:void 0,MobileView:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){i=e},function(e){o=e},function(e){s=e},function(e){c=e},function(e){d=e},function(e){l=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){h=e},function(e){v=e}],execute:function(){y=a.Bundle,(g=new y({module:{vspecifier:"@aimpact/ailearn-app@0.0.32/assignments/debate",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",i],["@aimpact/ailearn-sdk/core",o],["@beyond-js/reactive/model",s],["@beyond-js/kernel/texts",c],["@aimpact/ailearn-app/coins-layout.widget",d],["react",l],["pragmate-ui/components",u],["@aimpact/ailearn-app/components/ui",m],["@aimpact/chat/shared/components",p],["@beyond-js/react-18-widgets/hooks",h],["@aimpact/ailearn-app/components/hooks",v]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-debate-activity-page",vspecifier:"@aimpact/ailearn-app@0.0.32/assignments/debate.widget",is:"page",route:"/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",layout:"coins-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.32/assignments/debate.widget"),(y=new Map).set("./controller",{hash:1310206847,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),r=e("./views");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return r.View}show(){this.#store.load(this.uri.vars.get("assignmentId"),this.uri.vars.get("activityId"),this.uri.vars.get("id"))}}t.Controller=i}}),y.set("./store",{hash:2033716279,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var r=e("@aimpact/ailearn-sdk/core"),a=e("@beyond-js/reactive/model"),n=e("@beyond-js/kernel/texts"),i=e("beyond_context"),o=e("@aimpact/ailearn-app/coins-layout.widget");class s extends a.ReactiveModel{#model;#assignmentId;#activityId;get model(){return this.#model}#items;get items(){return this.#items}#paramsUri;get paramsUri(){return this.#paramsUri}#texts=new n.CurrentTexts(i.module.specifier);get texts(){return this.#texts?.value}#chatId;get chatId(){return this.#chatId}get ready(){return super.ready&&this.#texts.ready}#found;get found(){return this.#found}get hasCredits(){return 0<this.#model?.credits?.total}get canConsumeCredits(){return this.#found}constructor(){super(),this.#texts.on("change",this.triggerEvent)}async load(e,t,a){try{var n;o.LayoutBroker.overlay=!0,o.LayoutBroker.canConsumeCredits=!0,e===this.#assignmentId&&this.#activityId===t?o.LayoutBroker.addModel(this.#model):(this.#assignmentId=e,this.#activityId=t,n=new r.AssignmentActivity({id:t,assignmentId:e}),this.#chatId=a,this.#paramsUri={assignmentId:e,activityId:t},await(this.#model=n).isReady,await n.load(),o.LayoutBroker.addModel(this.#model),o.LayoutBroker.canConsumeCredits=!0,this.#found=!0,super.ready=!0,console.log(3),this.triggerEvent())}catch(e){super.ready=!0,this.#found=!1,o.LayoutBroker.canConsumeCredits=!1}}}t.StoreManager=s}}),y.set("./views/characters-card",{hash:574123641,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterCard=function(){var e=(0,n.useConversationContext)().texts;return a.default.createElement("section",{className:"character-card__container"},a.default.createElement("span",{className:"character-card__title"},e.selectTitle),a.default.createElement("div",{className:"character-card__actions"}),a.default.createElement(r.Button,{variant:"primary",className:"character-card__button mt-15",onClick:e=>{console.log("clickAvatar")},label:e.buttonText}))};var a=e("react"),n=e("./context"),r=e("pragmate-ui/components")}}),y.set("./views/chat",{hash:3850554498,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatControl=function(){var{store:e,chatId:t,assignmentId:a,texts:n}=(0,i.useConversationContext)();return e.hasCredits?r.default.createElement("aimpact-chat-control",{id:t,"assignment-id":a}):r.default.createElement(o.ChatPreload,{text:n.noCredits,onClick:()=>s.LayoutBroker.ensureCredits(()=>{})})};var r=e("react"),i=e("./context"),o=e("@aimpact/ailearn-app/components/ui"),s=e("@aimpact/ailearn-app/coins-layout.widget")}}),y.set("./views/context",{hash:3226836486,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useConversationContext=t.ConversationContext=void 0;var a=e("react");const n=t.ConversationContext=a.default.createContext({});t.useConversationContext=()=>a.default.useContext(n)}}),y.set("./views/desktop",{hash:97198126,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DesktopView=function(){var{store:e,texts:t}=(0,n.useConversationContext)();return a.default.createElement("div",{className:"page-activity-container"},a.default.createElement(r.ActivityHeader,{title:e.model.title,icon:e.model.type,type:e.model.type}),a.default.createElement(r.PageContainer,{className:"content-activity--desktop-container"},a.default.createElement(i.ChatControl,null),a.default.createElement("aside",{className:"content-activity__aside"},a.default.createElement(r.EntityImage,{className:"entity-image-cover",src:e.model.image,entity:"assignment"}),a.default.createElement("h4",null,t.description),a.default.createElement("p",null,e.model.description))))};var a=e("react"),n=e("./context"),r=e("@aimpact/ailearn-app/components/ui"),i=e("./chat")}}),y.set("./views/index",{hash:2718327468,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e,uri:t}){const[a,n]=(0,l.useState)(e.ready),[r]=(0,l.useState)(e.items),[,i]=l.default.useState(""),o=(0,h.useMediaQuery)(),s=t.vars.get("assignmentId"),c=t.vars.get("chatId");var d;return(0,m.useBinder)([e.model],()=>i(e.model?.title||"")),(0,m.useBinder)([e],()=>{console.log("me disparo",e.ready),n(e.ready)}),a&&!e.found?l.default.createElement("app-missing",null):a?(t={texts:e.texts,fetching:e.fetching,store:e,chatId:c,assignmentId:s,items:r},d="md"===o||"lg"===o?v.DesktopView:g.MobileView,l.default.createElement(p.ConversationContext.Provider,{value:t},l.default.createElement(d,null))):l.default.createElement(u.PreloadScreen,null)};var l=e("react"),u=e("@aimpact/chat/shared/components"),m=e("@beyond-js/react-18-widgets/hooks"),p=e("./context"),h=e("@aimpact/ailearn-app/components/hooks"),v=e("./desktop"),g=e("./mobile")}}),y.set("./views/mobile",{hash:906907669,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MobileView=function(){var e=(0,n.useConversationContext)().store;return a.default.createElement("div",{className:"page-activity-container"},a.default.createElement(r.ActivityHeader,{title:e.model.title,icon:e.model.type,type:e.model.type}),a.default.createElement(r.PageContainer,{className:"content-activity--container"},a.default.createElement(r.EntityImage,{className:"entity-image-cover",src:e.model.image,entity:"assignment"}),a.default.createElement(i.ChatControl,null)))};var a=e("react"),n=e("./context"),r=e("@aimpact/ailearn-app/components/ui"),i=e("./chat")}}),g.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/characters-card",from:"CharacterCard",name:"CharacterCard"},{im:"./views/desktop",from:"DesktopView",name:"DesktopView"},{im:"./views/index",from:"View",name:"View"},{im:"./views/mobile",from:"MobileView",name:"MobileView"}],g.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"CharacterCard"!==t||n("CharacterCard",e?e("./views/characters-card").CharacterCard:a),!e&&"DesktopView"!==t||n("DesktopView",e?e("./views/desktop").DesktopView:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a),!e&&"MobileView"!==t||n("MobileView",e?e("./views/mobile").MobileView:a)},n("__beyond_pkg",g),n("hmr",new function(){this.on=(e,t)=>g.hmr.on(e,t),this.off=(e,t)=>g.hmr.off(e,t)}),g.initialise(y)}}});System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.1.12/model","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-app@0.0.32/coins-layout.widget","react@18.2.0","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.32/components/ui","@aimpact/chat@1.0.1/shared/components","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.0.32/components/hooks"],function(n,e){"use strict";var t,a,r,i,o,s,c,d,l,u,m,p,h,v,g,y;return n({Controller:void 0,CharacterCard:void 0,DesktopView:void 0,View:void 0,MobileView:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){i=e},function(e){o=e},function(e){s=e},function(e){c=e},function(e){d=e},function(e){l=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){h=e},function(e){v=e}],execute:function(){y=a.Bundle,(g=new y({module:{vspecifier:"@aimpact/ailearn-app@0.0.32/assignments/debate",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",i],["@aimpact/ailearn-sdk/core",o],["@beyond-js/reactive/model",s],["@beyond-js/kernel/texts",c],["@aimpact/ailearn-app/coins-layout.widget",d],["react",l],["pragmate-ui/components",u],["@aimpact/ailearn-app/components/ui",m],["@aimpact/chat/shared/components",p],["@beyond-js/react-18-widgets/hooks",h],["@aimpact/ailearn-app/components/hooks",v]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-debate-activity-page",vspecifier:"@aimpact/ailearn-app@0.0.32/assignments/debate.widget",is:"page",route:"/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",layout:"coins-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.32/assignments/debate.widget"),(y=new Map).set("./controller",{hash:1310206847,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),r=e("./views");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return r.View}show(){this.#store.load(this.uri.vars.get("assignmentId"),this.uri.vars.get("activityId"),this.uri.vars.get("id"))}}t.Controller=i}}),y.set("./store",{hash:2033716279,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var r=e("@aimpact/ailearn-sdk/core"),a=e("@beyond-js/reactive/model"),n=e("@beyond-js/kernel/texts"),i=e("beyond_context"),o=e("@aimpact/ailearn-app/coins-layout.widget");class s extends a.ReactiveModel{#model;#assignmentId;#activityId;get model(){return this.#model}#items;get items(){return this.#items}#paramsUri;get paramsUri(){return this.#paramsUri}#texts=new n.CurrentTexts(i.module.specifier);get texts(){return this.#texts?.value}#chatId;get chatId(){return this.#chatId}get ready(){return super.ready&&this.#texts.ready}#found;get found(){return this.#found}get hasCredits(){return 0<this.#model?.credits?.total}get canConsumeCredits(){return this.#found}constructor(){super(),this.#texts.on("change",this.triggerEvent)}async load(e,t,a){try{var n;o.LayoutBroker.overlay=!0,o.LayoutBroker.canConsumeCredits=!0,e===this.#assignmentId&&this.#activityId===t?o.LayoutBroker.addModel(this.#model):(this.#assignmentId=e,this.#activityId=t,n=new r.AssignmentActivity({id:t,assignmentId:e}),this.#chatId=a,this.#paramsUri={assignmentId:e,activityId:t},await(this.#model=n).isReady,await n.load(),o.LayoutBroker.addModel(this.#model),o.LayoutBroker.canConsumeCredits=!0,this.#found=!0,super.ready=!0,console.log(3),this.triggerEvent())}catch(e){super.ready=!0,this.#found=!1,o.LayoutBroker.canConsumeCredits=!1}}}t.StoreManager=s}}),y.set("./views/characters-card",{hash:574123641,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterCard=function(){var e=(0,n.useConversationContext)().texts;return a.default.createElement("section",{className:"character-card__container"},a.default.createElement("span",{className:"character-card__title"},e.selectTitle),a.default.createElement("div",{className:"character-card__actions"}),a.default.createElement(r.Button,{variant:"primary",className:"character-card__button mt-15",onClick:e=>{console.log("clickAvatar")},label:e.buttonText}))};var a=e("react"),n=e("./context"),r=e("pragmate-ui/components")}}),y.set("./views/chat",{hash:3850554498,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatControl=function(){var{store:e,chatId:t,assignmentId:a,texts:n}=(0,i.useConversationContext)();return e.hasCredits?r.default.createElement("aimpact-chat-control",{id:t,"assignment-id":a}):r.default.createElement(o.ChatPreload,{text:n.noCredits,onClick:()=>s.LayoutBroker.ensureCredits(()=>{})})};var r=e("react"),i=e("./context"),o=e("@aimpact/ailearn-app/components/ui"),s=e("@aimpact/ailearn-app/coins-layout.widget")}}),y.set("./views/context",{hash:3226836486,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useConversationContext=t.ConversationContext=void 0;var a=e("react");const n=t.ConversationContext=a.default.createContext({});t.useConversationContext=()=>a.default.useContext(n)}}),y.set("./views/desktop",{hash:97198126,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DesktopView=function(){var{store:e,texts:t}=(0,n.useConversationContext)();return a.default.createElement("div",{className:"page-activity-container"},a.default.createElement(r.ActivityHeader,{title:e.model.title,icon:e.model.type,type:e.model.type}),a.default.createElement(r.PageContainer,{className:"content-activity--desktop-container"},a.default.createElement(i.ChatControl,null),a.default.createElement("aside",{className:"content-activity__aside"},a.default.createElement(r.EntityImage,{className:"entity-image-cover",src:e.model.image,entity:"assignment"}),a.default.createElement("h4",null,t.description),a.default.createElement("p",null,e.model.description))))};var a=e("react"),n=e("./context"),r=e("@aimpact/ailearn-app/components/ui"),i=e("./chat")}}),y.set("./views/index",{hash:2718327468,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e,uri:t}){const[a,n]=(0,l.useState)(e.ready),[r]=(0,l.useState)(e.items),[,i]=l.default.useState(""),o=(0,h.useMediaQuery)(),s=t.vars.get("assignmentId"),c=t.vars.get("chatId");var d;return(0,m.useBinder)([e.model],()=>i(e.model?.title||"")),(0,m.useBinder)([e],()=>{console.log("me disparo",e.ready),n(e.ready)}),a&&!e.found?l.default.createElement("app-missing",null):a?(t={texts:e.texts,fetching:e.fetching,store:e,chatId:c,assignmentId:s,items:r},d="md"===o||"lg"===o?v.DesktopView:g.MobileView,l.default.createElement(p.ConversationContext.Provider,{value:t},l.default.createElement(d,null))):l.default.createElement(u.PreloadScreen,null)};var l=e("react"),u=e("@aimpact/chat/shared/components"),m=e("@beyond-js/react-18-widgets/hooks"),p=e("./context"),h=e("@aimpact/ailearn-app/components/hooks"),v=e("./desktop"),g=e("./mobile")}}),y.set("./views/mobile",{hash:906907669,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MobileView=function(){var e=(0,n.useConversationContext)().store;return a.default.createElement("div",{className:"page-activity-container"},a.default.createElement(r.ActivityHeader,{title:e.model.title,icon:e.model.type,type:e.model.type}),a.default.createElement(r.PageContainer,{className:"content-activity--container"},a.default.createElement(r.EntityImage,{className:"entity-image-cover",src:e.model.image,entity:"assignment"}),a.default.createElement(i.ChatControl,null)))};var a=e("react"),n=e("./context"),r=e("@aimpact/ailearn-app/components/ui"),i=e("./chat")}}),g.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/characters-card",from:"CharacterCard",name:"CharacterCard"},{im:"./views/desktop",from:"DesktopView",name:"DesktopView"},{im:"./views/index",from:"View",name:"View"},{im:"./views/mobile",from:"MobileView",name:"MobileView"}],g.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"CharacterCard"!==t||n("CharacterCard",e?e("./views/characters-card").CharacterCard:a),!e&&"DesktopView"!==t||n("DesktopView",e?e("./views/desktop").DesktopView:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a),!e&&"MobileView"!==t||n("MobileView",e?e("./views/mobile").MobileView:a)},n("__beyond_pkg",g),n("hmr",new function(){this.on=(e,t)=>g.hmr.on(e,t),this.off=(e,t)=>g.hmr.off(e,t)}),g.initialise(y)}}});