System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.1.12/model","@beyond-js/react-18-widgets@1.1.2/base","@aimpact/chat-sdk@1.0.0/core","@aimpact/chat@1.0.1/wrapper","react@18.2.0","framer-motion@10.18.0","@aimpact/ailearn-app@0.0.32/components/navbar-header.code","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@0.1.1/icons","pragmate-ui@0.1.1/toast","@aimpact/chat@1.0.1/shared/components","@beyond-js/kernel@0.1.9/styles"],function(a,e){"use strict";var t,r,o,n,i,s,l,c,d,u,m,h,b,y,p,v;return a({LayoutBroker:void 0,Controller:void 0,Header:void 0,OverlayHeader:void 0}),{setters:[function(e){t=e},function(e){r=e},function(e){o=e},function(e){n=e},function(e){i=e},function(e){s=e},function(e){l=e},function(e){c=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){h=e},function(e){b=e},function(e){y=e}],execute:function(){v=r.Bundle,(p=new v({module:{vspecifier:"@aimpact/ailearn-app@0.0.32/dashboard-layout",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/reactive/model",o],["@beyond-js/react-18-widgets/base",n],["@aimpact/chat-sdk/core",i],["@aimpact/chat/wrapper",s],["react",l],["framer-motion",c],["@aimpact/ailearn-app/components/navbar-header.code",d],["@beyond-js/react-18-widgets/hooks",u],["pragmate-ui/icons",m],["pragmate-ui/toast",h],["@aimpact/chat/shared/components",b],["@beyond-js/kernel/styles",y]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"dashboard-layout",vspecifier:"@aimpact/ailearn-app@0.0.32/dashboard-layout.widget",is:"layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.32/dashboard-layout.widget"),(v=new Map).set("./broker",{hash:1675570124,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LayoutBroker=t.Broker=void 0;class r extends e("@beyond-js/reactive/model").ReactiveModel{#model;get model(){return this.#model}#message;get message(){return this.#message}#breadcrumb=[];get breadcrumb(){return this.#breadcrumb}#overlayLabel;get overlayLabel(){return this.#overlayLabel}set breadcrumb(e){if(!Array.isArray(e))throw new Error("Breadcrumb must be an array of objects");this.#breadcrumb=e,this.trigger("change")}#showCredits;get showCredits(){return this.#showCredits}#overlay;get overlay(){return this.#overlay}set overlay(e){this.#overlay!==e&&(this.#overlay=e,this.trigger("change"))}#backLink;get backLink(){return this.#backLink}constructor(){super()}addBreadcrumb(e){this.#breadcrumb=[...this.#breadcrumb,e],this.trigger("change")}showMessage(e,t){this.#message={type:e,message:t},this.trigger("show.message"),globalThis.setTimeout(()=>{this.#message=void 0},2e3)}clear(){this.#model=void 0,this.#breadcrumb=[],this.overlay=!1,this.triggerEvent()}setBackLink(e){this.#backLink=e,this.overlay=!0,this.triggerEvent()}setModel(e){this.#model=e,this.triggerEvent()}setOverlay(e){this.#overlayLabel=e,this.overlay=!0,this.triggerEvent()}removeOverlay(){this.overlay=!1,this.#overlayLabel=void 0,this.#backLink=void 0,this.triggerEvent()}}t.Broker=r,t.LayoutBroker=new r}}),v.set("./controller",{hash:2803709794,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/base"),a=e("./store"),o=e("./view");class n extends r.ReactWidgetController{#store;createStore(){return this.#store=new a.StoreManager,this.#store}get Widget(){return o.Layout}}t.Controller=n}}),v.set("./store",{hash:1310626975,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var r=e("@beyond-js/reactive/model"),a=e("@aimpact/chat/wrapper"),o=e("./broker");class n extends r.ReactiveModel{#broker;get broker(){return this.#broker}get model(){return this.#broker.model}constructor(){super(),a.AppWrapper.on("change",this.listener),this.#broker=o.LayoutBroker,this.#broker.on("change",this.triggerEvent),globalThis.lc=this,console.log("layout controller is being exposed as lc in the global scope"),this.init()}init=async()=>{await a.AppWrapper.isReady,this.ready=!0};listener=()=>{};refresh=()=>{this.#broker?.model?.refresh&&this.#broker.model.refresh()}}t.StoreManager=n}}),v.set("./view/components/animated-label",{hash:2096490113,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedLabel=function({children:e}){const[t,r]=a.default.useState(!!e);return a.default.useEffect(()=>{r(e),globalThis.setTimeout(()=>{r(!1)},2e3)},[e]),a.default.createElement(o.AnimatePresence,null,t&&a.default.createElement(o.motion.span,{layout:!0,initial:{opacity:0,width:"0"},animate:{opacity:1,transition:{duration:.3},width:"auto"},exit:{transition:{duration:.3,width:0},opacity:0}},e))};var a=e("react"),o=e("framer-motion")}}),v.set("./view/components/animated",{hash:796986304,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Animated=function({className:e,children:t,as:r="span"}){return r=(0,o.motion)(r),a.default.createElement(r,{layout:!0,className:e,initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{transition:{duration:.3,width:0},opacity:0}},t)};var a=e("react"),o=e("framer-motion")}}),v.set("./view/components/header",{hash:135863169,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){const e=(0,i.useLayoutContext)().store,[,t]=o.default.useState(!!e.broker.model),[r,a]=o.default.useState([]);return(0,s.useBinder)([e.broker],()=>{t(!!e.broker.model),a(e.broker.breadcrumb)}),o.default.createElement(n.NavbarHeader,{breadcrumb:[,...r]},o.default.createElement(l.IconButton,{className:"right-action",icon:"refresh",onClick:e.refresh}))};var o=e("react"),n=e("@aimpact/ailearn-app/components/navbar-header.code"),i=e("../context"),s=e("@beyond-js/react-18-widgets/hooks"),l=e("pragmate-ui/icons")}}),v.set("./view/components/overlay-header",{hash:1687109263,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OverlayHeader=function(){var e=(0,o.useLayoutContext)().store;return r.default.createElement(a.NavbarHeader,{closable:!0,backlink:e.broker.backLink,detail:e.broker.overlayLabel})};var r=e("react"),a=e("@aimpact/ailearn-app/components/navbar-header.code"),o=e("../context")}}),v.set("./view/context",{hash:772258609,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useLayoutContext=t.LayoutContext=void 0;var r=e("react");const a=t.LayoutContext=r.default.createContext({});t.useLayoutContext=()=>r.default.useContext(a)}}),v.set("./view/index",{hash:616577895,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Layout=void 0;var d=e("react"),u=e("pragmate-ui/toast"),m=e("@beyond-js/react-18-widgets/hooks"),h=e("@aimpact/chat/shared/components"),b=e("./context"),y=e("./components/header"),p=e("beyond_context"),v=e("./components/overlay-header");t.Layout=({store:e})=>{const[t,r]=(0,d.useState)(e.ready);(0,m.useBinder)([e],()=>r(e.ready));var[a,o]=(0,m.useTexts)(p.module.specifier);const[n,i]=d.default.useState(!1),[s,l]=d.default.useState(!1),[,c]=(0,d.useState)({});return(0,m.useBinder)([e.broker],()=>l(!s),"no.credits"),(0,m.useBinder)([e],()=>c({})),a&&t?(a={store:e,texts:o,toggleCoinsModal:()=>i(!n),overlay:e.broker.overlay},o=e.broker.overlay?v.OverlayHeader:y.Header,d.default.createElement(d.default.Fragment,null,d.default.createElement(b.LayoutContext.Provider,{value:a},d.default.createElement("div",{className:"coins-layout__container"},d.default.createElement(o,null),d.default.createElement("main",null,d.default.createElement("beyond-layout-children",null),d.default.createElement(u.Toasts,null)))))):d.default.createElement(h.PreloadScreen,null)}}}),p.exports.descriptor=[{im:"./broker",from:"LayoutBroker",name:"LayoutBroker"},{im:"./controller",from:"Controller",name:"Controller"},{im:"./view/components/header",from:"Header",name:"Header"},{im:"./view/components/overlay-header",from:"OverlayHeader",name:"OverlayHeader"}],p.exports.process=function({require:e,prop:t,value:r}){!e&&"LayoutBroker"!==t||a("LayoutBroker",e?e("./broker").LayoutBroker:r),!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:r),!e&&"Header"!==t||a("Header",e?e("./view/components/header").Header:r),!e&&"OverlayHeader"!==t||a("OverlayHeader",e?e("./view/components/overlay-header").OverlayHeader:r)},a("__beyond_pkg",p),a("hmr",new function(){this.on=(e,t)=>p.hmr.on(e,t),this.off=(e,t)=>p.hmr.off(e,t)}),p.initialise(v)}}});System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.1.12/model","@beyond-js/react-18-widgets@1.1.2/base","@aimpact/chat-sdk@1.0.0/core","@aimpact/chat@1.0.1/wrapper","react@18.2.0","framer-motion@10.18.0","@aimpact/ailearn-app@0.0.32/components/navbar-header.code","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@0.1.1/icons","pragmate-ui@0.1.1/toast","@aimpact/chat@1.0.1/shared/components","@beyond-js/kernel@0.1.9/styles"],function(a,e){"use strict";var t,r,o,n,i,s,l,c,d,u,m,h,b,y,p,v;return a({LayoutBroker:void 0,Controller:void 0,Header:void 0,OverlayHeader:void 0}),{setters:[function(e){t=e},function(e){r=e},function(e){o=e},function(e){n=e},function(e){i=e},function(e){s=e},function(e){l=e},function(e){c=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){h=e},function(e){b=e},function(e){y=e}],execute:function(){v=r.Bundle,(p=new v({module:{vspecifier:"@aimpact/ailearn-app@0.0.32/dashboard-layout",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/reactive/model",o],["@beyond-js/react-18-widgets/base",n],["@aimpact/chat-sdk/core",i],["@aimpact/chat/wrapper",s],["react",l],["framer-motion",c],["@aimpact/ailearn-app/components/navbar-header.code",d],["@beyond-js/react-18-widgets/hooks",u],["pragmate-ui/icons",m],["pragmate-ui/toast",h],["@aimpact/chat/shared/components",b],["@beyond-js/kernel/styles",y]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"dashboard-layout",vspecifier:"@aimpact/ailearn-app@0.0.32/dashboard-layout.widget",is:"layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.32/dashboard-layout.widget"),(v=new Map).set("./broker",{hash:1675570124,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LayoutBroker=t.Broker=void 0;class r extends e("@beyond-js/reactive/model").ReactiveModel{#model;get model(){return this.#model}#message;get message(){return this.#message}#breadcrumb=[];get breadcrumb(){return this.#breadcrumb}#overlayLabel;get overlayLabel(){return this.#overlayLabel}set breadcrumb(e){if(!Array.isArray(e))throw new Error("Breadcrumb must be an array of objects");this.#breadcrumb=e,this.trigger("change")}#showCredits;get showCredits(){return this.#showCredits}#overlay;get overlay(){return this.#overlay}set overlay(e){this.#overlay!==e&&(this.#overlay=e,this.trigger("change"))}#backLink;get backLink(){return this.#backLink}constructor(){super()}addBreadcrumb(e){this.#breadcrumb=[...this.#breadcrumb,e],this.trigger("change")}showMessage(e,t){this.#message={type:e,message:t},this.trigger("show.message"),globalThis.setTimeout(()=>{this.#message=void 0},2e3)}clear(){this.#model=void 0,this.#breadcrumb=[],this.overlay=!1,this.triggerEvent()}setBackLink(e){this.#backLink=e,this.overlay=!0,this.triggerEvent()}setModel(e){this.#model=e,this.triggerEvent()}setOverlay(e){this.#overlayLabel=e,this.overlay=!0,this.triggerEvent()}removeOverlay(){this.overlay=!1,this.#overlayLabel=void 0,this.#backLink=void 0,this.triggerEvent()}}t.Broker=r,t.LayoutBroker=new r}}),v.set("./controller",{hash:2803709794,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/base"),a=e("./store"),o=e("./view");class n extends r.ReactWidgetController{#store;createStore(){return this.#store=new a.StoreManager,this.#store}get Widget(){return o.Layout}}t.Controller=n}}),v.set("./store",{hash:1310626975,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var r=e("@beyond-js/reactive/model"),a=e("@aimpact/chat/wrapper"),o=e("./broker");class n extends r.ReactiveModel{#broker;get broker(){return this.#broker}get model(){return this.#broker.model}constructor(){super(),a.AppWrapper.on("change",this.listener),this.#broker=o.LayoutBroker,this.#broker.on("change",this.triggerEvent),globalThis.lc=this,console.log("layout controller is being exposed as lc in the global scope"),this.init()}init=async()=>{await a.AppWrapper.isReady,this.ready=!0};listener=()=>{};refresh=()=>{this.#broker?.model?.refresh&&this.#broker.model.refresh()}}t.StoreManager=n}}),v.set("./view/components/animated-label",{hash:2096490113,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedLabel=function({children:e}){const[t,r]=a.default.useState(!!e);return a.default.useEffect(()=>{r(e),globalThis.setTimeout(()=>{r(!1)},2e3)},[e]),a.default.createElement(o.AnimatePresence,null,t&&a.default.createElement(o.motion.span,{layout:!0,initial:{opacity:0,width:"0"},animate:{opacity:1,transition:{duration:.3},width:"auto"},exit:{transition:{duration:.3,width:0},opacity:0}},e))};var a=e("react"),o=e("framer-motion")}}),v.set("./view/components/animated",{hash:796986304,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Animated=function({className:e,children:t,as:r="span"}){return r=(0,o.motion)(r),a.default.createElement(r,{layout:!0,className:e,initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{transition:{duration:.3,width:0},opacity:0}},t)};var a=e("react"),o=e("framer-motion")}}),v.set("./view/components/header",{hash:135863169,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){const e=(0,i.useLayoutContext)().store,[,t]=o.default.useState(!!e.broker.model),[r,a]=o.default.useState([]);return(0,s.useBinder)([e.broker],()=>{t(!!e.broker.model),a(e.broker.breadcrumb)}),o.default.createElement(n.NavbarHeader,{breadcrumb:[,...r]},o.default.createElement(l.IconButton,{className:"right-action",icon:"refresh",onClick:e.refresh}))};var o=e("react"),n=e("@aimpact/ailearn-app/components/navbar-header.code"),i=e("../context"),s=e("@beyond-js/react-18-widgets/hooks"),l=e("pragmate-ui/icons")}}),v.set("./view/components/overlay-header",{hash:1687109263,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OverlayHeader=function(){var e=(0,o.useLayoutContext)().store;return r.default.createElement(a.NavbarHeader,{closable:!0,backlink:e.broker.backLink,detail:e.broker.overlayLabel})};var r=e("react"),a=e("@aimpact/ailearn-app/components/navbar-header.code"),o=e("../context")}}),v.set("./view/context",{hash:772258609,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useLayoutContext=t.LayoutContext=void 0;var r=e("react");const a=t.LayoutContext=r.default.createContext({});t.useLayoutContext=()=>r.default.useContext(a)}}),v.set("./view/index",{hash:616577895,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Layout=void 0;var d=e("react"),u=e("pragmate-ui/toast"),m=e("@beyond-js/react-18-widgets/hooks"),h=e("@aimpact/chat/shared/components"),b=e("./context"),y=e("./components/header"),p=e("beyond_context"),v=e("./components/overlay-header");t.Layout=({store:e})=>{const[t,r]=(0,d.useState)(e.ready);(0,m.useBinder)([e],()=>r(e.ready));var[a,o]=(0,m.useTexts)(p.module.specifier);const[n,i]=d.default.useState(!1),[s,l]=d.default.useState(!1),[,c]=(0,d.useState)({});return(0,m.useBinder)([e.broker],()=>l(!s),"no.credits"),(0,m.useBinder)([e],()=>c({})),a&&t?(a={store:e,texts:o,toggleCoinsModal:()=>i(!n),overlay:e.broker.overlay},o=e.broker.overlay?v.OverlayHeader:y.Header,d.default.createElement(d.default.Fragment,null,d.default.createElement(b.LayoutContext.Provider,{value:a},d.default.createElement("div",{className:"coins-layout__container"},d.default.createElement(o,null),d.default.createElement("main",null,d.default.createElement("beyond-layout-children",null),d.default.createElement(u.Toasts,null)))))):d.default.createElement(h.PreloadScreen,null)}}}),p.exports.descriptor=[{im:"./broker",from:"LayoutBroker",name:"LayoutBroker"},{im:"./controller",from:"Controller",name:"Controller"},{im:"./view/components/header",from:"Header",name:"Header"},{im:"./view/components/overlay-header",from:"OverlayHeader",name:"OverlayHeader"}],p.exports.process=function({require:e,prop:t,value:r}){!e&&"LayoutBroker"!==t||a("LayoutBroker",e?e("./broker").LayoutBroker:r),!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:r),!e&&"Header"!==t||a("Header",e?e("./view/components/header").Header:r),!e&&"OverlayHeader"!==t||a("OverlayHeader",e?e("./view/components/overlay-header").OverlayHeader:r)},a("__beyond_pkg",p),a("hmr",new function(){this.on=(e,t)=>p.hmr.on(e,t),this.off=(e,t)=>p.hmr.off(e,t)}),p.initialise(v)}}});