System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.2.0/model","@beyond-js/react-18-widgets@1.1.2/base","@aimpact/chat-sdk@1.0.1/core","@aimpact/chat@1.0.2/wrapper","@beyond-js/kernel@0.1.9/texts","react@18.2.0","pragmate-ui@1.0.0-beta.1/modal","@aimpact/ailearn-app@0.1.4-test.02/components/ui","pragmate-ui@1.0.0-beta.1/components","pragmate-ui@1.0.0-beta.1/chips","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@1.0.0-beta.1/icons","framer-motion@10.18.0","@aimpact/ailearn-app@0.1.4-test.02/components/navbar-header.code","pragmate-ui@1.0.0-beta.1/toast","@beyond-js/kernel@0.1.9/styles"],function(a,e){var t,r,n,o,s,i,l,c,d,u,m,h,f,p,b,g,y,v,C,k;return a({LayoutBroker:void 0,Controller:void 0,Header:void 0,OverlayHeader:void 0}),{setters:[function(e){t=e},function(e){r=e},function(e){n=e},function(e){o=e},function(e){s=e},function(e){i=e},function(e){l=e},function(e){c=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){h=e},function(e){f=e},function(e){p=e},function(e){b=e},function(e){g=e},function(e){y=e},function(e){v=e}],execute:function(){k=r.Bundle,(C=new k({module:{vspecifier:"@aimpact/ailearn-app@0.1.4-test.02/main-layout",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/reactive/model",n],["@beyond-js/react-18-widgets/base",o],["@aimpact/chat-sdk/core",s],["@aimpact/chat/wrapper",i],["@beyond-js/kernel/texts",l],["react",c],["pragmate-ui/modal",d],["@aimpact/ailearn-app/components/ui",u],["pragmate-ui/components",m],["pragmate-ui/chips",h],["@beyond-js/react-18-widgets/hooks",f],["pragmate-ui/icons",p],["framer-motion",b],["@aimpact/ailearn-app/components/navbar-header.code",g],["pragmate-ui/toast",y],["@beyond-js/kernel/styles",v]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"main-layout",vspecifier:"@aimpact/ailearn-app@0.1.4-test.02/main-layout.widget",is:"layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.4-test.02/main-layout.widget"),(k=new Map).set("./broker",{hash:1503138189,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LayoutBroker=t.Broker=void 0,e=e("@beyond-js/reactive/model");class r extends e.ReactiveModel{#model;get model(){return this.#model}get hasCredits(){return 0<this.#model?.credits?.total}#message;get message(){return this.#message}#breadcrumb=[];get breadcrumb(){return this.#breadcrumb}set breadcrumb(e){if(!Array.isArray(e))throw new Error("Breadcrumb must be an array of objects");this.#breadcrumb=e,this.trigger("change")}#showCredits;get showCredits(){return this.#showCredits}#overlay;get overlay(){return this.#overlay}set overlay(e){this.#overlay!==e&&(this.#overlay=e,this.trigger("change"))}#canConsumeCredits;get canConsumeCredits(){return this.#model?.canConsumeCredits||this.#canConsumeCredits}set canConsumeCredits(e){this.#canConsumeCredits!==e&&(this.#canConsumeCredits=e,this.trigger("change"))}#backLink;get backLink(){return this.#backLink}set backLink(e){this.#backLink=e,this.trigger("change")}constructor(){super(),this.ensureCredits=this.ensureCredits.bind(this)}addModel(e,t=!0){void 0!==e.id&&e.id===this.#model?.id||(this.#model=e,this.#showCredits=t,this.#model.on("change",this.onListen.bind(this)),this.trigger("change"),e.assignmentId&&(this.#backLink="/assignments/"+e.assignmentId))}clearModel(){this.#model=void 0,this.#showCredits=!1}async onListen(){this.#showCredits!==this.#model?.saved&&(this.#showCredits=this.#model?.saved,this.triggerEvent())}async ensureCredits(e,...t){if(this.#model||console.error("No model found"),this.hasCredits)return e(...t);this.trigger("no.credits")}addBreadcrumb(e){this.#breadcrumb=[...this.#breadcrumb,e],this.trigger("change")}addMultipleBreadcrumb(e){this.#breadcrumb=[...this.#breadcrumb,...e],this.trigger("change")}trimBreadcrumb(e){e<=this.breadcrumb.length&&(this.breadcrumb.length-=e,this.triggerEvent("change"))}showMessage(e,t){this.#message={type:e,message:t},this.trigger("show.message"),globalThis.setTimeout(()=>{this.#message=void 0},2e3)}clear(){this.#model=void 0,this.#breadcrumb=[],this.overlay=!1,this.triggerEvent()}}t.Broker=r,t.LayoutBroker=new r}}),k.set("./controller",{hash:514040884,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/base"),a=e("./store"),n=e("./view");class o extends r.ReactWidgetController{#store;createStore(){return this.#store=new a.StoreManager,this.#store}get Widget(){return n.Layout}}t.Controller=o}}),k.set("./store",{hash:2543502439,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var r=e("@beyond-js/reactive/model"),a=e("@aimpact/chat/wrapper"),n=e("./broker"),o=e("@beyond-js/kernel/texts"),s=e("beyond_context");class i extends r.ReactiveModel{#broker;get broker(){return this.#broker}get showCredits(){return this.#broker.showCredits}#texts=new o.CurrentTexts(s.module.specifier);get texts(){return this.#texts?.value??{}}get model(){return this.#broker.model}get saved(){return this.#broker?.model?.saved}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.init()}init=async()=>{await a.AppWrapper.isReady,super.ready=!0,this.#broker=n.LayoutBroker,a.AppWrapper.on("change",this.triggerEvent),this.#broker.on("change",this.triggerEvent),this.#texts.on("change",this.triggerEvent)};listen=()=>{this.#broker.on("change",this.triggerEvent),this.#texts.on("change",this.triggerEvent)};close(){this.#broker.off("change",this.triggerEvent),this.#texts.off("change",this.triggerEvent)}}t.StoreManager=i}}),k.set("./view/coins/alert",{hash:3955356505,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoinsAlert=function({show:e,onClose:t,texts:r}){return e?(r=r.coins.alert,a.default.createElement(n.AlertModal,{show:!0,buttonLabel:r.action,onConfirm:t,onClose:t},a.default.createElement("header",null,a.default.createElement("h3",null,r.title),a.default.createElement("p",null,r.description)))):null};var a=e("react"),n=e("pragmate-ui/modal")}}),k.set("./view/coins/coins-modal",{hash:3281594040,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoinsModal=function({store:t,show:e,onClose:r,texts:a}){if(!e)return null;let[,n]=i.default.useState(!1),[o,s]=i.default.useState();a=a.coins.modal;return i.default.createElement(l.ConfirmModal,{show:!0,className:"modal-sm modal-centered",centered:!0,actions:{confirm:{label:a.actions.confirm,variant:"primary"},cancel:{label:a.actions.cancel,variant:"primary",bordered:!0}},onConfirm:async()=>{try{n(!0);var e=await t.model.consumeCoins();if(!e.status)throw new Error({48:"NO_CREDITS"}[e.error.code]);r()}catch(e){s(a.errors.noCredits)}finally{n(!1)}},onCancel:r,onClose:r},i.default.createElement("header",null,i.default.createElement("h3",null,a.title),i.default.createElement(c.ErrorRenderer,{error:o,variant:"warning"}),i.default.createElement(c.Battery,{percent:"100",className:"lg"}),i.default.createElement("p",null,a.description)))};var i=e("react"),l=e("pragmate-ui/modal"),c=e("@aimpact/ailearn-app/components/ui")}}),k.set("./view/coins/credits",{hash:2423712070,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CreditsContainer=function(){let{store:t,toggleCoinsModal:e,texts:r}=(0,g.useLayoutContext)(),[a,n]=u.default.useState(""),[,o]=u.default.useState(t.hasCredits),s=(0,u.useRef)(null),i="credits__container"+(t.broker.canConsumeCredits?"":" is-disabled");if((0,p.useBinder)([t.broker.model],e=>{s.current.classList.add("success--container"),n(r?.messages[e]),o(t.broker.hasCredits)},"credits.change"),!r?.coins)return null;r=r.coins.header;var l=t.broker.hasCredits?h.Chip:m.Button,c={className:"credits-action",onClick:void 0,variant:t.broker.hasCredits?"success":"primary",disabled:t.broker.hasCredits||!t.broker.canConsumeCredits},d=t.broker.hasCredits?r.actions.available:r.actions.require;return t.broker.hasCredits?c.className="success--chip":c.onClick=e,u.default.createElement("div",{className:i,ref:s},u.default.createElement(b.AnimatedLabel,null,a),t.broker.hasCredits&&u.default.createElement(f.Battery,{percent:100}),u.default.createElement(l,{...c},d))};var u=e("react"),m=e("pragmate-ui/components"),h=e("pragmate-ui/chips"),f=e("@aimpact/ailearn-app/components/ui"),p=e("@beyond-js/react-18-widgets/hooks"),b=e("../components/animated-label"),g=e("../context")}}),k.set("./view/coins/notifications-bar",{hash:608402207,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationsBar=function({}){let e=(0,u.useLayoutContext)().store.broker,[t,r]=s.default.useState(!0),[a,n]=s.default.useState(void 0),o;return(0,m.useBinder)([e],()=>{n(e.message)},"show.message"),a?(o="notifications-bar center-items notifications--"+a?.type,s.default.createElement(c.AnimatePresence,null,t&&s.default.createElement(d.Animated,{as:"div",className:o},s.default.createElement(i.HtmlWrapper,null,a.message),s.default.createElement(l.Icon,{className:"close-icon",icon:"close",onClick:()=>{n(void 0),r(!1)}})))):null};var s=e("react"),i=e("pragmate-ui/components"),l=e("pragmate-ui/icons"),c=e("framer-motion"),d=e("../components/animated"),u=e("../context"),m=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./view/components/animated-label",{hash:2096490113,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedLabel=function({children:e}){let[t,r]=a.default.useState(!!e);return a.default.useEffect(()=>{r(e),globalThis.setTimeout(()=>{r(!1)},2e3)},[e]),a.default.createElement(n.AnimatePresence,null,t&&a.default.createElement(n.motion.span,{layout:!0,initial:{opacity:0,width:"0"},animate:{opacity:1,transition:{duration:.3},width:"auto"},exit:{transition:{duration:.3,width:0},opacity:0}},e))};var a=e("react"),n=e("framer-motion")}}),k.set("./view/components/animated",{hash:796986304,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Animated=function({className:e,children:t,as:r="span"}){return r=(0,n.motion)(r),a.default.createElement(r,{layout:!0,className:e,initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{transition:{duration:.3,width:0},opacity:0}},t)};var a=e("react"),n=e("framer-motion")}}),k.set("./view/components/header",{hash:2400594431,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){let e=(0,c.useLayoutContext)().store,[t,r]=(e.saved&&e,i.default.useState(!!e.broker.model)),[a,n]=i.default.useState(),[o,s]=((0,u.useBinder)([l.hmr],()=>n(performance.now())),i.default.useState([]));return(0,u.useBinder)([e.broker],()=>{r(!!e.broker.model),s(e.broker.breadcrumb)}),i.default.createElement(l.NavbarHeader,{updated:a,breadcrumb:[,...o]},t&&i.default.createElement(d.CreditsContainer,null))};var i=e("react"),l=e("@aimpact/ailearn-app/components/navbar-header.code"),c=e("../context"),d=e("../coins/credits"),u=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./view/components/overlay-header",{hash:2194629961,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OverlayHeader=function(){var e=(0,n.useLayoutContext)().store;return r.default.createElement(a.NavbarHeader,{closable:!0,backlink:e.broker.backLink},!!e.broker.model&&r.default.createElement(o.CreditsContainer,null))};var r=e("react"),a=e("@aimpact/ailearn-app/components/navbar-header.code"),n=e("../context"),o=e("../coins/credits")}}),k.set("./view/context",{hash:772258609,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useLayoutContext=t.LayoutContext=void 0;var r=e("react");let a=t.LayoutContext=r.default.createContext({});t.useLayoutContext=()=>r.default.useContext(a)}}),k.set("./view/index",{hash:2323863151,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Layout=void 0;var h=e("react"),f=e("pragmate-ui/toast"),p=e("@beyond-js/react-18-widgets/hooks"),b=e("./context"),g=e("./components/header"),y=e("./coins/alert"),v=e("./coins/coins-modal"),C=e("./coins/notifications-bar"),k=e("./components/overlay-header");t.Layout=({store:e})=>{let[t,r]=(0,h.useState)(e.ready),[a,n]=h.default.useState(!1),[o,s]=h.default.useState(!1),[,i]=(0,h.useState)({}),l=()=>s(!o),c=()=>n(!a),d=e.texts,u=((0,p.useBinder)([e],()=>r(e.ready)),(0,p.useBinder)([e.broker],l,"no.credits"),(0,p.useBinder)([e],()=>i({})),{store:e,texts:d,toggleCoinsModal:c,overlay:e.broker.overlay}),m=e.broker.overlay?k.OverlayHeader:g.Header;return h.default.createElement(h.default.Fragment,null,h.default.createElement(b.LayoutContext.Provider,{value:u},h.default.createElement("div",{className:"main-layout__container"},h.default.createElement(m,null),h.default.createElement(C.NotificationsBar,null),h.default.createElement("main",null,h.default.createElement("beyond-layout-children",null),h.default.createElement(f.Toasts,null)))),t&&h.default.createElement(h.default.Fragment,null,h.default.createElement(y.CoinsAlert,{texts:d,show:o,onClose:l}),h.default.createElement(v.CoinsModal,{store:e,texts:d,show:a,onClose:c})))}}}),k.set("./view/preload",{hash:246890105,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Preload=function(){return React.createElement(React.Fragment,null)}}}),C.exports.descriptor=[{im:"./broker",from:"LayoutBroker",name:"LayoutBroker"},{im:"./controller",from:"Controller",name:"Controller"},{im:"./view/components/header",from:"Header",name:"Header"},{im:"./view/components/overlay-header",from:"OverlayHeader",name:"OverlayHeader"}],C.exports.process=function({require:e,prop:t,value:r}){!e&&"LayoutBroker"!==t||a("LayoutBroker",e?e("./broker").LayoutBroker:r),!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:r),!e&&"Header"!==t||a("Header",e?e("./view/components/header").Header:r),!e&&"OverlayHeader"!==t||a("OverlayHeader",e?e("./view/components/overlay-header").OverlayHeader:r)},a("__beyond_pkg",C),a("hmr",new function(){this.on=(e,t)=>C.hmr.on(e,t),this.off=(e,t)=>C.hmr.off(e,t)}),C.initialise(k)}}});