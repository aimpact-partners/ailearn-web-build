System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.1.12/model","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-app@0.0.32/coins-layout.widget","@beyond-js/kernel@0.1.9/routing","react@18.2.0","framer-motion@10.18.0","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.32/components/ui","@aimpact/chat-sdk@1.0.0/session","@aimpact/chat-sdk@1.0.0/widgets/markdown","@aimpact/ailearn-app@0.0.32/components/hooks","pragmate-ui@0.1.1/collapsible","@aimpact/chat@1.0.1/shared/components","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.0.32/components/icons"],function(n,e){"use strict";var t,a,i,r,o,s,c,l,d,u,m,p,h,f,y,g,v,C,w,b,k,E;return n({Controller:void 0,CharacterCard:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){i=e},function(e){r=e},function(e){o=e},function(e){s=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){h=e},function(e){f=e},function(e){y=e},function(e){g=e},function(e){v=e},function(e){C=e},function(e){w=e},function(e){b=e}],execute:function(){E=a.Bundle,(k=new E({module:{vspecifier:"@aimpact/ailearn-app@0.0.32/assignments/content-theory",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",i],["@beyond-js/react-18-widgets/page",r],["@aimpact/ailearn-sdk/core",o],["@beyond-js/reactive/model",s],["@beyond-js/kernel/texts",c],["@aimpact/ailearn-app/coins-layout.widget",l],["@beyond-js/kernel/routing",d],["react",u],["framer-motion",m],["pragmate-ui/components",p],["@aimpact/ailearn-app/components/ui",h],["@aimpact/chat-sdk/session",f],["@aimpact/chat-sdk/widgets/markdown",y],["@aimpact/ailearn-app/components/hooks",g],["pragmate-ui/collapsible",v],["@aimpact/chat/shared/components",C],["@beyond-js/react-18-widgets/hooks",w],["@aimpact/ailearn-app/components/icons",b]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-content-theory-page",vspecifier:"@aimpact/ailearn-app@0.0.32/assignments/content-theory.widget",is:"page",route:"/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",layout:"coins-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.32/assignments/content-theory.widget"),(E=new Map).set("./controller",{hash:1310206847,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),i=e("./views");class r extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return i.View}show(){this.#store.load(this.uri.vars.get("assignmentId"),this.uri.vars.get("activityId"),this.uri.vars.get("id"))}}t.Controller=r}}),E.set("./store",{hash:195353752,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var i=e("@aimpact/ailearn-sdk/core"),a=e("@beyond-js/reactive/model"),n=e("@beyond-js/kernel/texts"),r=e("beyond_context"),o=e("@aimpact/ailearn-app/coins-layout.widget");class s extends a.ReactiveModel{#model;#assignmentId;#activityId;get model(){return this.#model}#items;get items(){return this.#items}#paramsUri;get paramsUri(){return this.#paramsUri}#texts=new n.CurrentTexts(r.module.specifier);get texts(){return this.#texts?.value}#chatId;get chatId(){return this.#chatId}get ready(){return super.ready&&this.#texts.ready}#found;get found(){return this.#found}get canConsumeCredits(){return this.#found}constructor(){super(),this.#texts.on("change",this.triggerEvent)}async load(e,t,a){try{var n;o.LayoutBroker.overlay=!0,o.LayoutBroker.canConsumeCredits=!0,e===this.#assignmentId&&this.#activityId===t?o.LayoutBroker.addModel(this.#model):(this.#assignmentId=e,this.#activityId=t,this.#found=!0,n=new i.AssignmentActivity({id:t,assignmentId:e}),this.#chatId=a,this.#paramsUri={assignmentId:e,activityId:t},await(this.#model=n).isReady,await n.load(),o.LayoutBroker.addModel(this.#model),super.ready=!0,this.#found=!0,this.triggerEvent())}catch(e){super.ready=!0,this.#found=!1,o.LayoutBroker.canConsumeCredits=!1,this.triggerEvent()}}}t.StoreManager=s}}),E.set("./views/animation-container",{hash:1836558385,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedContainer=function({className:e,children:t,as:a="span"}){return a=(0,i.motion)(a),n.default.createElement(a,{layout:!0,className:e,initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{transition:{duration:.3,width:0},opacity:0}},t)};var n=e("react"),i=e("framer-motion")}}),E.set("./views/characters-card",{hash:574123641,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterCard=function(){var e=(0,n.useConversationContext)().texts;return a.default.createElement("section",{className:"character-card__container"},a.default.createElement("span",{className:"character-card__title"},e.selectTitle),a.default.createElement("div",{className:"character-card__actions"}),a.default.createElement(i.Button,{variant:"primary",className:"character-card__button mt-15",onClick:e=>{console.log("clickAvatar")},label:e.buttonText}))};var a=e("react"),n=e("./context"),i=e("pragmate-ui/components")}}),E.set("./views/context",{hash:4192360219,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useConversationContext=t.ConversationContext=void 0;var a=e("react");const n=t.ConversationContext=a.default.createContext({});t.useConversationContext=()=>a.default.useContext(n)}}),E.set("./views/controls/chat",{hash:353307036,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityChat=function(){var{chatId:e,assignmentId:t}=(0,n.useConversationContext)();return a.default.createElement(i.AnimatedContainer,{className:"ailearn-chat-container"},a.default.createElement("aimpact-chat-control",{id:e,"assignment-id":t,container:"centered"}))};var a=e("react"),n=e("../context"),i=e("../animation-container")}}),E.set("./views/controls/content-desktop",{hash:3029890651,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityDesktopContent=function(){var e=(0,r.useConversationContext)().store,{article:t,dyslexia:a,audios:n}=e.model.materials,a=c.sessionWrapper.user.accessibilityMode&&a?a:t;return i.default.createElement(s.AnimatedContainer,null,i.default.createElement(o.PageContainer,{className:"content-activity--desktop-container"},i.default.createElement("div",null,i.default.createElement(l.Markdown,null,a)),i.default.createElement("aside",{className:"content-activity__aside"},i.default.createElement("div",null,!!n?.length&&i.default.createElement(o.ActivityAudio,{id:e.model.id}),i.default.createElement(o.EntityImage,{className:"entity-image-cover",src:e.model.image,entity:"assignment"}),i.default.createElement(d.SynthesisDescription,null)))))};var i=e("react"),r=e("../context"),o=e("@aimpact/ailearn-app/components/ui"),s=e("../animation-container"),c=e("@aimpact/chat-sdk/session"),l=e("@aimpact/chat-sdk/widgets/markdown"),d=e("./synsthesis-description")}}),E.set("./views/controls/content",{hash:2444069457,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityContent=function(){var e,t,a,{store:n,texts:i}=(0,s.useConversationContext)(),r=(0,l.useMediaQuery)();return"md"===r||"lg"===r?o.default.createElement(m.ActivityDesktopContent,null):({article:r,synthesis:e,dyslexia:a,audios:t}=n.model.materials,a=p.sessionWrapper.user.accessibilityMode&&a?a:r,console.log(.2,t),o.default.createElement(c.AnimatedContainer,null,o.default.createElement(c.PageContainer,{className:"content-activity--container"},o.default.createElement(c.EntityImage,{className:"entity-image-cover",src:n.model.image,entity:"assignment"}),!!t?.length&&o.default.createElement(c.ActivityAudio,{id:n.model.id}),o.default.createElement("div",{className:"article-content"},o.default.createElement(u.CollapsibleContainer,{open:!0},o.default.createElement(u.CollapsibleHeader,null,o.default.createElement(o.default.Fragment,null,i.article)),o.default.createElement(u.CollapsibleContent,null,o.default.createElement(d.Markdown,null,a)))),e&&o.default.createElement(u.CollapsibleContainer,null,o.default.createElement(u.CollapsibleHeader,null,o.default.createElement(o.default.Fragment,null,i.synthesis)),o.default.createElement(u.CollapsibleContent,null,o.default.createElement(d.Markdown,null,e))))))};var o=e("react"),s=e("../context"),c=e("@aimpact/ailearn-app/components/ui"),l=e("@aimpact/ailearn-app/components/hooks"),d=e("@aimpact/chat-sdk/widgets/markdown"),u=e("pragmate-ui/collapsible"),m=e("./content-desktop"),p=e("@aimpact/chat-sdk/session")}}),E.set("./views/controls/synsthesis-description",{hash:661182598,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SynthesisDescription=function(){var{store:e,texts:t}=(0,i.useConversationContext)(),t=(a=e.model.materials.synthesis)?t.synthesis:t.description,a=a||e.model.description;return n.default.createElement(n.default.Fragment,null,n.default.createElement("h5",null,t),n.default.createElement(r.Markdown,null,a))};var n=e("react"),i=e("../context"),r=e("@aimpact/chat-sdk/widgets/markdown")}}),E.set("./views/index",{hash:3118852360,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e,uri:t}){const[a,n]=(0,p.useState)(!1),[i]=(0,p.useState)(e.items),[,r]=p.default.useState(""),[o,s]=p.default.useState("content"),c=e.texts,l=t.vars.get("assignmentId"),d=t.vars.get("chatId"),u="content"===o?C.ActivityContent:w.ActivityChat,m="content"===o?"chat":e.model.type;return(0,y.useBinder)([e.model],()=>r(e.model?.title||"")),(0,y.useBinder)([e],()=>n(e.ready)),a&&!e.found?p.default.createElement("app-missing",null):a?(t={texts:c,fetching:e.fetching,store:e,chatId:d,assignmentId:l,items:i},p.default.createElement(g.ConversationContext.Provider,{value:t},p.default.createElement(v.ActivityHeader,{title:e.model.title,icon:e.model.type,type:e.model.type}),p.default.createElement(k.AnimatePresence,null,p.default.createElement(u,null)),p.default.createElement(k.motion.button,{className:"floating__button",onClick:()=>{h.LayoutBroker.ensureCredits(()=>s("content"===o?"chat":"content"))}},p.default.createElement(b.AppIcon,{icon:m})))):p.default.createElement(f.PreloadScreen,null)};var p=e("react"),h=e("@aimpact/ailearn-app/coins-layout.widget"),f=e("@aimpact/chat/shared/components"),y=e("@beyond-js/react-18-widgets/hooks"),g=e("./context"),v=e("@aimpact/ailearn-app/components/ui"),C=e("./controls/content"),w=e("./controls/chat"),b=e("@aimpact/ailearn-app/components/icons"),k=e("framer-motion")}}),k.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/characters-card",from:"CharacterCard",name:"CharacterCard"},{im:"./views/index",from:"View",name:"View"}],k.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"CharacterCard"!==t||n("CharacterCard",e?e("./views/characters-card").CharacterCard:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",k),n("hmr",new function(){this.on=(e,t)=>k.hmr.on(e,t),this.off=(e,t)=>k.hmr.off(e,t)}),k.initialise(E)}}});