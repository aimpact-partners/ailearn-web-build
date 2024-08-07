System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.2.0/model","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-app@0.1.3-test.02/main-layout.widget","@aimpact/ailearn-sdk@1.0.0/tracking","react@18.2.0","framer-motion@10.18.0","pragmate-ui@1.0.0-beta.1/components","@aimpact/ailearn-app@0.1.3-test.02/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat-sdk@1.0.1/widgets/markdown","@aimpact/chat@1.0.2/wrapper","@aimpact/ailearn-app@0.1.3-test.02/components/hooks","pragmate-ui@1.0.0-beta.1/collapsible","@aimpact/chat@1.0.2/shared/components","@aimpact/ailearn-app@0.1.3-test.02/components/icons"],function(n,e){var t,a,r,i,o,s,c,l,d,u,m,p,h,y,f,g,v,C,b,w,k;return n({Controller:void 0,CharacterCard:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){i=e},function(e){o=e},function(e){s=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){h=e},function(e){y=e},function(e){f=e},function(e){g=e},function(e){v=e},function(e){C=e},function(e){b=e}],execute:function(){k=a.Bundle,(w=new k({module:{vspecifier:"@aimpact/ailearn-app@0.1.3-test.02/assignments/content-theory",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",i],["@beyond-js/reactive/model",o],["@beyond-js/kernel/texts",s],["@aimpact/ailearn-app/main-layout.widget",c],["@aimpact/ailearn-sdk/tracking",l],["react",d],["framer-motion",u],["pragmate-ui/components",m],["@aimpact/ailearn-app/components/ui",p],["@beyond-js/react-18-widgets/hooks",h],["@aimpact/chat-sdk/widgets/markdown",y],["@aimpact/chat/wrapper",f],["@aimpact/ailearn-app/components/hooks",g],["pragmate-ui/collapsible",v],["@aimpact/chat/shared/components",C],["@aimpact/ailearn-app/components/icons",b]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-content-theory-page",vspecifier:"@aimpact/ailearn-app@0.1.3-test.02/assignments/content-theory.widget",is:"page",route:"/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.3-test.02/assignments/content-theory.widget"),(k=new Map).set("./controller",{hash:1643034851,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),r=e("./views");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return r.View}show(){this.#store.load(this.uri.vars.get("assignmentId"),this.uri.vars.get("activityId"),this.uri.vars.get("id")),this.#store.playable=!0}hide(){this.#store.playable=!1}}t.Controller=i}}),k.set("./store",{hash:2332836851,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),n=e("@beyond-js/kernel/texts"),r=e("beyond_context"),i=e("@aimpact/ailearn-app/main-layout.widget"),o=e("@aimpact/ailearn-sdk/tracking");class s extends a.ReactiveModel{#model;#assignmentId;#activityId;get model(){return this.#model}#items;get items(){return this.#items}#paramsUri;get paramsUri(){return this.#paramsUri}#texts=new n.CurrentTexts(r.module.specifier);get texts(){return this.#texts?.value}#chatId;get chatId(){return this.#chatId}get ready(){return super.ready&&this.#texts.ready}#found;get found(){return this.#found}get canConsumeCredits(){return this.#found}#playable;get playable(){return this.#playable}set playable(e){this.#playable!==e&&(this.#playable=e,this.triggerEvent())}#tracking;get tracking(){return this.#tracking}get hasArticle(){return!!this.#model?.materials?.article}"";constructor(){super(),this.#texts.on("change",this.triggerEvent)}async load(e,t,a){try{var n,r;i.LayoutBroker.overlay=!0,i.LayoutBroker.canConsumeCredits=!0,e===this.#assignmentId&&this.#activityId===t?i.LayoutBroker.addModel(this.#tracking):(this.#assignmentId=e,this.#activityId=t,n=o.Tracking.get({assignmentId:e}),r=await(this.#tracking=n).activities.load({id:t}),this.#model=r,i.LayoutBroker.addModel(this.#tracking),super.ready=!0,this.#found=!0,this.triggerEvent())}catch(e){super.ready=!0,this.#found=!1,i.LayoutBroker.canConsumeCredits=!1,this.triggerEvent()}}}t.StoreManager=s}}),k.set("./views/animation-container",{hash:1836558385,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedContainer=function({className:e,children:t,as:a="span"}){return a=(0,r.motion)(a),n.default.createElement(a,{layout:!0,className:e,initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{transition:{duration:.3,width:0},opacity:0}},t)};var n=e("react"),r=e("framer-motion")}}),k.set("./views/characters-card",{hash:574123641,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterCard=function(){var e=(0,n.useConversationContext)().texts;return a.default.createElement("section",{className:"character-card__container"},a.default.createElement("span",{className:"character-card__title"},e.selectTitle),a.default.createElement("div",{className:"character-card__actions"}),a.default.createElement(r.Button,{variant:"primary",className:"character-card__button mt-15",onClick:e=>{console.log("clickAvatar")},label:e.buttonText}))};var a=e("react"),n=e("./context"),r=e("pragmate-ui/components")}}),k.set("./views/context",{hash:1536175329,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useConversationContext=t.ConversationContext=void 0;var a=e("react");let n=t.ConversationContext=a.default.createContext({});t.useConversationContext=()=>a.default.useContext(n)}}),k.set("./views/controls/chat",{hash:2680075782,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityChat=function(){let{chatId:e,assignmentId:t,store:a}=(0,o.useConversationContext)(),[n,r]=i.default.useState(a.playable);return(0,l.useBinder)([a],()=>r(a.playable)),i.default.createElement(s.AnimatedContainer,{className:"ailearn-chat-container"},i.default.createElement(c.PageContainer,null,i.default.createElement("aimpact-chat-control",{id:e,"assignment-id":t,container:"centered",playable:n})))};var i=e("react"),o=e("../context"),s=e("../animation-container"),c=e("@aimpact/ailearn-app/components/ui"),l=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./views/controls/content-desktop",{hash:2769064571,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityDesktopContent=function(){let e=(0,f.useConversationContext)().store,{article:t,dyslexia:a,audios:n}=e.model.materials,[r,i]=h.default.useState(m.AppWrapper.accessibility),o="normal"===r?t:a,s=((0,p.useBinder)([m.AppWrapper],()=>i(m.AppWrapper.accessibility)),(n&&Object.keys(n))??[]),c=s.length,l=("normal"!=r&&n?.dyslexia?.url?n.dyslexia:n?.article)?.url;return h.default.createElement(y.AnimatedContainer,null,h.default.createElement(d.PageContainer,{className:"content-activity--desktop-container"},h.default.createElement("div",null,h.default.createElement(u.Markdown,null,o)),h.default.createElement("aside",{className:"content-activity__aside"},h.default.createElement("div",null,!!c&&h.default.createElement(d.ActivityAudio,{src:l}),h.default.createElement(d.EntityImage,{className:"entity-image-cover",src:e.model.picture,entity:"activity",type:e.model.type}),h.default.createElement(g.SynthesisDescription,null)))))};var d=e("@aimpact/ailearn-app/components/ui"),u=e("@aimpact/chat-sdk/widgets/markdown"),m=e("@aimpact/chat/wrapper"),p=e("@beyond-js/react-18-widgets/hooks"),h=e("react"),y=e("../animation-container"),f=e("../context"),g=e("./synsthesis-description")}}),k.set("./views/controls/content",{hash:1588063096,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityContent=function(){let{store:e,texts:t}=(0,C.useConversationContext)(),{article:a,synthesis:n,dyslexia:r,audios:i}=e.model.materials,[o,s]=v.default.useState(y.AppWrapper.accessibility),c="normal"===o?a:r,l=((0,f.useBinder)([y.AppWrapper],()=>s(y.AppWrapper.accessibility)),(0,m.useMediaQuery)());var d,u;return"md"===l||"lg"===l?v.default.createElement(b.ActivityDesktopContent,null):(d=("normal"!=o&&i?.dyslexia?.url?i.dyslexia:i?.article)?.url,u=((i&&Object.keys(i))??[]).length,v.default.createElement(p.AnimatedContainer,null,v.default.createElement(p.PageContainer,{className:"content-activity--container"},v.default.createElement(p.EntityImage,{className:"entity-image-cover",src:e.model.picture,type:e.model.type,entity:"activity"}),!!u&&v.default.createElement(p.ActivityAudio,{src:d}),v.default.createElement("div",{className:"article-content"},v.default.createElement(g.CollapsibleContainer,{open:!0},v.default.createElement(g.CollapsibleHeader,null,v.default.createElement(v.default.Fragment,null,t.article)),v.default.createElement(g.CollapsibleContent,null,v.default.createElement(h.Markdown,null,c)))),n&&v.default.createElement(g.CollapsibleContainer,null,v.default.createElement(g.CollapsibleHeader,null,v.default.createElement(v.default.Fragment,null,t.synthesis)),v.default.createElement(g.CollapsibleContent,null,v.default.createElement(h.Markdown,null,n))))))};var m=e("@aimpact/ailearn-app/components/hooks"),p=e("@aimpact/ailearn-app/components/ui"),h=e("@aimpact/chat-sdk/widgets/markdown"),y=e("@aimpact/chat/wrapper"),f=e("@beyond-js/react-18-widgets/hooks"),g=e("pragmate-ui/collapsible"),v=e("react"),C=e("../context"),b=e("./content-desktop")}}),k.set("./views/controls/synsthesis-description",{hash:661182598,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SynthesisDescription=function(){var{store:e,texts:t}=(0,r.useConversationContext)(),t=(a=e.model.materials.synthesis)?t.synthesis:t.description,a=a||e.model.description;return n.default.createElement(n.default.Fragment,null,n.default.createElement("h5",null,t),n.default.createElement(i.Markdown,null,a))};var n=e("react"),r=e("../context"),i=e("@aimpact/chat-sdk/widgets/markdown")}}),k.set("./views/index",{hash:1220275823,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e,uri:t}){let[a,n]=(0,m.useState)(e.ready),[r]=(0,m.useState)(e.items),[i,o]=m.default.useState(),s=e.texts,c=t.vars.get("assignmentId"),l=t.vars.get("chatId"),d="content"===i||void 0===i&&e.hasArticle?v.ActivityContent:C.ActivityChat,u="content"===i?"chat":e.model?.type;return(0,y.useBinder)([e],()=>{n(e.ready)}),a&&!e.found?m.default.createElement("app-missing",null):a?(t={texts:s,fetching:e.fetching,store:e,chatId:l,assignmentId:c,items:r,playable:e.playable},m.default.createElement(f.ConversationContext.Provider,{value:t},m.default.createElement(g.ActivityHeader,{title:e.model.title,icon:e.model.type,type:e.model.type}),m.default.createElement(w.AnimatePresence,null,m.default.createElement(d,null)),e.hasArticle&&m.default.createElement(w.motion.button,{className:"floating__button",onClick:()=>{p.LayoutBroker.ensureCredits(()=>o([void 0,"content"].includes(i)?"chat":"content"))}},m.default.createElement(b.AppIcon,{icon:u})))):m.default.createElement(h.PreloadScreen,null)};var m=e("react"),p=e("@aimpact/ailearn-app/main-layout.widget"),h=e("@aimpact/chat/shared/components"),y=e("@beyond-js/react-18-widgets/hooks"),f=e("./context"),g=e("@aimpact/ailearn-app/components/ui"),v=e("./controls/content"),C=e("./controls/chat"),b=e("@aimpact/ailearn-app/components/icons"),w=e("framer-motion")}}),w.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/characters-card",from:"CharacterCard",name:"CharacterCard"},{im:"./views/index",from:"View",name:"View"}],w.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"CharacterCard"!==t||n("CharacterCard",e?e("./views/characters-card").CharacterCard:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",w),n("hmr",new function(){this.on=(e,t)=>w.hmr.on(e,t),this.off=(e,t)=>w.hmr.off(e,t)}),w.initialise(k)}}});