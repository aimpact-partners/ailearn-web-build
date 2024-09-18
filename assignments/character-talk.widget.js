System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-app@0.1.6-dev.36/entities/assignments/activities/base","react@18.2.0","@aimpact/ailearn-app@0.1.6-dev.36/components/ui","@aimpact/chat-sdk@1.2.0/chat-component.code","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat-sdk@1.2.0/wrapper","@aimpact/chat-sdk@1.2.0/widgets/markdown","simplebar-react@3.2.6","pragmate-ui@1.0.0-beta.6/collapsible","pragmate-ui@1.0.0-beta.6/tabs","pragmate-ui@1.0.0-beta.6/empty","@aimpact/ailearn-app@0.1.6-dev.36/components/hooks"],function(n,e){"use strict";var t,a,i,o,s,r,c,l,d,u,m,p,f,h,v,y,g,b;return n({Controller:void 0,ActivityContent:void 0,Aside:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){i=e},function(e){o=e},function(e){s=e},function(e){r=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){f=e},function(e){h=e},function(e){v=e},function(e){y=e}],execute:function(){b=a.Bundle,(g=new b({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.36/assignments/character-talk",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",i],["@beyond-js/react-18-widgets/page",o],["@aimpact/ailearn-app/entities/assignments/activities/base",s],["react",r],["@aimpact/ailearn-app/components/ui",c],["@aimpact/chat-sdk/chat-component.code",l],["@beyond-js/react-18-widgets/hooks",d],["@aimpact/chat-sdk/wrapper",u],["@aimpact/chat-sdk/widgets/markdown",m],["simplebar-react",p],["pragmate-ui/collapsible",f],["pragmate-ui/tabs",h],["pragmate-ui/empty",v],["@aimpact/ailearn-app/components/hooks",y]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-character-talk",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.36/assignments/character-talk.widget",is:"page",route:"/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.36/assignments/character-talk.widget"),(b=new Map).set("./controller",{hash:2337850378,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),i=e("./views");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return i.View}show(){this.#store.load(this.uri.vars.get("assignmentId"),this.uri.vars.get("activityId"),this.uri.vars.get("chatId"))}}t.Controller=o}}),b.set("./store",{hash:2331614413,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("beyond_context");class n extends e("@aimpact/ailearn-app/entities/assignments/activities/base").BaseStoreManager{constructor(){super(a.module.specifier)}}t.StoreManager=n}}),b.set("./views/chat/desktop",{hash:3832272993,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DesktopChat=function(){const{store:e,setShowCoinsModal:t}=(0,l.useModuleContext)(),a=e.chatId,n={},[,i]=o.default.useState({});return(0,d.useBinder)([e.model],()=>i({}),"credits.change"),e.hasCredits||(n.onClick=()=>{t(!0)},n.disabled=!0),o.default.createElement("div",{className:"main-activity-container"},o.default.createElement(s.ActivityHeader,{title:e.model.title,icon:e.model.type,type:e.model.type}),o.default.createElement(r.AgentsChatContainer,{id:a,empty:c.EmptyChat,icon:"/assets/rvd/profile-blue.png"},o.default.createElement("div",{className:"chat__wrapper"},o.default.createElement("div",{className:"chat__container"},o.default.createElement(r.AgentsChatPanel,null)),o.default.createElement("div",{className:"center-container chat-input__layout-container"},o.default.createElement(r.AgentsChatInput,{...n})))))};var o=e("react"),s=e("@aimpact/ailearn-app/components/ui"),r=e("@aimpact/chat-sdk/chat-component.code"),c=e("../empty"),l=e("../context"),d=e("@beyond-js/react-18-widgets/hooks")}}),b.set("./views/chat/mobile",{hash:1909768582,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MobileChat=function(){const{store:e,setShowCoinsModal:t}=(0,c.useModuleContext)(),a=e.chatId,n={};return e.hasCredits||(n.onClick=()=>{t(!0)},n.disabled=!0),i.default.createElement(i.default.Fragment,null,i.default.createElement(s.AgentsChatContainer,{id:a,empty:r.EmptyChat,icon:"/assets/rvd/profile-blue.png"},i.default.createElement("div",{className:"chat__container"},i.default.createElement(o.ActivityHeader,{title:e.model.title,icon:e.model.type,type:e.model.type}),i.default.createElement(s.AgentsChatPanel,null)),i.default.createElement("div",{className:"center-container chat-input__layout-container"},i.default.createElement(s.AgentsChatInput,{...n}))))};var i=e("react"),o=e("@aimpact/ailearn-app/components/ui"),s=e("@aimpact/chat-sdk/chat-component.code"),r=e("../empty"),c=e("../context")}}),b.set("./views/content/content",{hash:3079487590,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityContent=function(){var{texts:e,store:t}=(0,s.useModuleContext)(),a=t.model.materials.audios,[n,,]=o.default.useState(c.AppWrapper.accessibility??"normal"),i=(a&&Object.keys(a))??[];return o.default.useRef(null),i=i.length,n=("normal"!=n&&a?.dyslexia?.url?a.dyslexia:a?.article)?.url,o.default.createElement("div",{className:"activity-content"},o.default.createElement(r.EntityImage,{className:"entity-image-cover",src:t.model.picture,type:t.model.type,entity:"activity"}),o.default.createElement("section",{className:"main__content"},!!i&&o.default.createElement(r.ActivityAudio,{src:n}),o.default.createElement(o.default.Fragment,null,o.default.createElement("h3",null,e.description),o.default.createElement("p",null,t.model.description))))};var o=e("react"),s=e("../context"),r=e("@aimpact/ailearn-app/components/ui"),c=e("@aimpact/chat-sdk/wrapper")}}),b.set("./views/content/desktop/aside",{hash:3103456928,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Aside=function(){return a.default.createElement("aside",{className:"activity-chat__aside"},a.default.createElement(n.ActivityContent,null))};var a=e("react"),n=e("../content")}}),b.set("./views/content/desktop/index",{hash:1656254542,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DesktopContent=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement(n.PageContainer,{className:"content-activity--desktop-container"},a.default.createElement(o.DesktopChat,null),a.default.createElement(i.Aside,null)))};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),i=e("./aside"),o=e("../../chat/desktop")}}),b.set("./views/content/mobile",{hash:399617847,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MobileContent=function(){var e=(0,o.useModuleContext)().texts;return a.default.createElement("main",{className:"mobile-view"},a.default.createElement(n.TabsContainer,{active:0},a.default.createElement(n.Panes,null,a.default.createElement(i.MobileChat,null),a.default.createElement(s.ActivityContent,null)),a.default.createElement(n.Tabs,null,a.default.createElement(n.Tab,null,e.tabs.chat),a.default.createElement(n.Tab,null,e.tabs.content))))};var a=e("react"),n=e("pragmate-ui/tabs"),i=e("../chat/mobile"),o=e("../context"),s=e("./content")}}),b.set("./views/context",{hash:4293477980,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");const n=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(n)}}),b.set("./views/empty",{hash:598048447,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyChat=function(){const{texts:{chat:{empty:e}},store:t}=(0,r.useModuleContext)(),[,a]=s.default.useState({});var n,i;return(0,c.useBinder)([t.model],()=>a({}),"credits.change"),t?.model?({title:n,description:i}=t.hasCredits?e.credits:e.noCredits,s.default.createElement("div",{className:" empty-chat"},s.default.createElement(o.Empty,{icon:"info",className:""},s.default.createElement("h3",null,n),s.default.createElement("span",null,i)))):null};var o=e("pragmate-ui/empty"),s=e("react"),r=e("./context"),c=e("@beyond-js/react-18-widgets/hooks")}}),b.set("./views/global",{hash:1370001867,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),b.set("./views/index",{hash:4063798611,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e,uri:t}){const[a,n]=(0,d.useState)(e.ready),[i]=(0,d.useState)(e.items),{}=e,[o,s]=d.default.useState(!1),r=t.vars.get("assignmentId"),c=t.vars.get("chatId"),l=(0,f.useMediaQuery)();return(0,m.useBinder)([e],()=>n(e.ready)),a&&!e.found?d.default.createElement("app-missing",null):a?(t={texts:e.texts,fetching:e.fetching,store:e,chatId:c,assignmentId:r,items:i,setShowCoinsModal:s},d.default.createElement(d.default.Fragment,null,d.default.createElement(p.ModuleContext.Provider,{value:t},"md"===l||"lg"===l?d.default.createElement(h.DesktopContent,null):d.default.createElement(v.MobileContent,null)),o&&d.default.createElement(u.CoinsModal,{show:o,type:"interactive",onClose:()=>s(!1),globalTexts:e.globalTexts,onConsume:e.model.consumeCoins}))):d.default.createElement(u.PageLoader,{fetching:!0})};var d=e("react"),u=e("@aimpact/ailearn-app/components/ui"),m=e("@beyond-js/react-18-widgets/hooks"),p=e("./context"),f=e("@aimpact/ailearn-app/components/hooks"),h=e("./content/desktop"),v=e("./content/mobile")}}),g.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/content/content",from:"ActivityContent",name:"ActivityContent"},{im:"./views/content/desktop/aside",from:"Aside",name:"Aside"},{im:"./views/index",from:"View",name:"View"}],g.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"ActivityContent"!==t||n("ActivityContent",e?e("./views/content/content").ActivityContent:a),!e&&"Aside"!==t||n("Aside",e?e("./views/content/desktop/aside").Aside:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",g),n("hmr",new function(){this.on=(e,t)=>g.hmr.on(e,t),this.off=(e,t)=>g.hmr.off(e,t)}),g.initialise(b)}}});