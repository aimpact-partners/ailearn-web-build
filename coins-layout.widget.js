System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.1.12/model","@beyond-js/react-18-widgets@1.1.2/base","@aimpact/chat-sdk@1.0.0/core","@aimpact/chat@1.0.1/wrapper","react@18.2.0","pragmate-ui@0.1.1/modal","@aimpact/ailearn-app@0.0.33.dev-01/components/ui","pragmate-ui@0.1.1/components","pragmate-ui@0.1.1/chips","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@0.1.1/icons","framer-motion@10.18.0","@aimpact/ailearn-app@0.0.33.dev-01/components/navbar-header.code","pragmate-ui@0.1.1/toast","@aimpact/chat@1.0.1/shared/components","@beyond-js/kernel@0.1.9/styles"],function(a,e){"use strict";var t,r,o,n,s,i,c,l,d,u,m,h,p,b,f,g,v,y,C,k;return a({LayoutBroker:void 0,Controller:void 0,Header:void 0,OverlayHeader:void 0}),{setters:[function(e){t=e},function(e){r=e},function(e){o=e},function(e){n=e},function(e){s=e},function(e){i=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){h=e},function(e){p=e},function(e){b=e},function(e){f=e},function(e){g=e},function(e){v=e},function(e){y=e}],execute:function(){k=r.Bundle,(C=new k({module:{vspecifier:"@aimpact/ailearn-app@0.0.33.dev-01/coins-layout",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/reactive/model",o],["@beyond-js/react-18-widgets/base",n],["@aimpact/chat-sdk/core",s],["@aimpact/chat/wrapper",i],["react",c],["pragmate-ui/modal",l],["@aimpact/ailearn-app/components/ui",d],["pragmate-ui/components",u],["pragmate-ui/chips",m],["@beyond-js/react-18-widgets/hooks",h],["pragmate-ui/icons",p],["framer-motion",b],["@aimpact/ailearn-app/components/navbar-header.code",f],["pragmate-ui/toast",g],["@aimpact/chat/shared/components",v],["@beyond-js/kernel/styles",y]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"coins-layout",vspecifier:"@aimpact/ailearn-app@0.0.33.dev-01/coins-layout.widget",is:"layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.33.dev-01/coins-layout.widget"),(k=new Map).set("./broker",{hash:2938168133,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LayoutBroker=t.Broker=void 0;class r extends e("@beyond-js/reactive/model").ReactiveModel{#model;get model(){return this.#model}get hasCredits(){return 0<this.#model?.credits?.total}#message;get message(){return this.#message}#breadcrumb=[];get breadcrumb(){return this.#breadcrumb}set breadcrumb(e){if(!Array.isArray(e))throw new Error("Breadcrumb must be an array of objects");this.#breadcrumb=e,this.trigger("change")}#showCredits;get showCredits(){return this.#showCredits}#overlay;get overlay(){return this.#overlay}set overlay(e){this.#overlay!==e&&(this.#overlay=e,this.trigger("change"))}#canConsumeCredits;get canConsumeCredits(){return this.#model?.canConsumeCredits||this.#canConsumeCredits}set canConsumeCredits(e){this.#canConsumeCredits!==e&&(this.#canConsumeCredits=e,this.trigger("change"))}#backLink;get backLink(){return this.#backLink}set backLink(e){this.#backLink=e,this.trigger("change")}constructor(){super(),this.ensureCredits=this.ensureCredits.bind(this)}addModel(e,t=!0){e.id!==this.#model?.id&&(this.#model=e,this.#showCredits=t,this.#model.on("change",this.onListen.bind(this)),this.trigger("change"),e.assignmentId)&&(this.#backLink="/assignments/"+e.assignmentId)}async onListen(){this.#showCredits!==this.#model?.saved&&(this.#showCredits=this.#model.saved,this.triggerEvent())}async ensureCredits(e,...t){if(this.#model||console.error("No model found"),this.hasCredits)return e(...t);this.trigger("no.credits")}addBreadcrumb(e){this.#breadcrumb=[...this.#breadcrumb,e],this.trigger("change")}addMultipleBreadcrumb(e){this.#breadcrumb=[...this.#breadcrumb,...e],this.trigger("change")}trimBreadcrumb(e){e<=this.breadcrumb.length&&(this.breadcrumb.length-=e,this.triggerEvent("change"))}showMessage(e,t){this.#message={type:e,message:t},this.trigger("show.message"),globalThis.setTimeout(()=>{this.#message=void 0},2e3)}clear(){this.#model=void 0,this.#breadcrumb=[],this.overlay=!1,this.triggerEvent()}}t.Broker=r;t.LayoutBroker=new r}}),k.set("./controller",{hash:2803709794,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/base"),a=e("./store"),o=e("./view");class n extends r.ReactWidgetController{#store;createStore(){return this.#store=new a.StoreManager,this.#store}get Widget(){return o.Layout}}t.Controller=n}}),k.set("./store",{hash:2951602853,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var r=e("@beyond-js/reactive/model"),a=e("@aimpact/chat/wrapper"),o=e("./broker");class n extends r.ReactiveModel{#broker;get broker(){return this.#broker}get showCredits(){return this.#broker.showCredits}get model(){return this.#broker.model}get saved(){return this.#broker?.model?.saved}constructor(){super(),a.AppWrapper.on("change",this.listener),this.#broker=o.LayoutBroker,this.#broker.on("change",this.triggerEvent),globalThis.lc=this,console.log("layout controller is being exposed as lc in the global scope"),this.init()}init=async()=>{await a.AppWrapper.isReady,this.ready=!0};listener=()=>{}}t.StoreManager=n}}),k.set("./view/coins/alert",{hash:3955356505,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoinsAlert=function({show:e,onClose:t,texts:r}){return e?(r=r.coins.alert,a.default.createElement(o.AlertModal,{show:!0,buttonLabel:r.action,onConfirm:t,onClose:t},a.default.createElement("header",null,a.default.createElement("h3",null,r.title),a.default.createElement("p",null,r.description)))):null};var a=e("react"),o=e("pragmate-ui/modal")}}),k.set("./view/coins/coins-modal",{hash:705841434,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoinsModal=function({store:t,show:e,onClose:r,texts:a}){if(!e)return null;const[,o]=i.default.useState(!1),[n,s]=i.default.useState();a=a.coins.modal;return i.default.createElement(c.ConfirmModal,{show:!0,className:"modal-sm modal-centered",centered:!0,actions:{confirm:{label:a.actions.confirm,variant:"primary"},cancel:{label:a.actions.cancel,variant:"primary",bordered:!0}},onConfirm:async()=>{try{o(!0);var e=await t.model.consumeCoins();if(!e.status)throw new Error({48:"NO_CREDITS"}[e.error.code]);r()}catch(e){console.error(e),s(a.errors.noCredits)}finally{o(!1)}},onCancel:r,onClose:r},i.default.createElement("header",null,i.default.createElement("h3",null,a.title),i.default.createElement(l.ErrorRenderer,{error:n,variant:"warning"}),i.default.createElement(l.Battery,{percent:"100",className:"lg"}),i.default.createElement("p",null,a.description)))};var i=e("react"),c=e("pragmate-ui/modal"),l=e("@aimpact/ailearn-app/components/ui")}}),k.set("./view/coins/credits",{hash:540256088,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CreditsContainer=function(){const{store:t,toggleCoinsModal:e,texts:{coins:{header:r}}}=(0,g.useLayoutContext)(),[a,o]=u.default.useState(""),[,n]=u.default.useState(t.hasCredits),s=(0,u.useRef)(null),i="credits__container"+(t.broker.canConsumeCredits?"":" is-disabled"),c=t.broker.hasCredits?h.Chip:m.Button,l={className:"credits-action",onClick:void 0,variant:t.broker.hasCredits?"success":"primary",disabled:t.broker.hasCredits||!t.broker.canConsumeCredits},d=t.broker.hasCredits?r.actions.available:r.actions.require;(0,b.useBinder)([t.broker.model],e=>{s.current.classList.add("success--container"),o(r.messages[e]),n(t.broker.hasCredits)},"credits.change"),t.broker.hasCredits?l.className="success--chip":l.onClick=e;return u.default.createElement("div",{className:i,ref:s},u.default.createElement(f.AnimatedLabel,null,a),t.broker.hasCredits&&u.default.createElement(p.Battery,{percent:100}),u.default.createElement(c,{...l},d))};var u=e("react"),m=e("pragmate-ui/components"),h=e("pragmate-ui/chips"),p=e("@aimpact/ailearn-app/components/ui"),b=e("@beyond-js/react-18-widgets/hooks"),f=e("../components/animated-label"),g=e("../context")}}),k.set("./view/coins/notifications-bar",{hash:608402207,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationsBar=function({}){const{broker:e}=(0,u.useLayoutContext)()["store"],[t,r]=s.default.useState(!0),[a,o]=s.default.useState(void 0);if((0,m.useBinder)([e],()=>{o(e.message)},"show.message"),!a)return null;var n="notifications-bar center-items notifications--"+a?.type;return s.default.createElement(l.AnimatePresence,null,t&&s.default.createElement(d.Animated,{as:"div",className:n},s.default.createElement(i.HtmlWrapper,null,a.message),s.default.createElement(c.Icon,{className:"close-icon",icon:"close",onClick:()=>{o(void 0),r(!1)}})))};var s=e("react"),i=e("pragmate-ui/components"),c=e("pragmate-ui/icons"),l=e("framer-motion"),d=e("../components/animated"),u=e("../context"),m=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./view/components/animated-label",{hash:2096490113,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedLabel=function({children:e}){const[t,r]=a.default.useState(!!e);return a.default.useEffect(()=>{r(e),globalThis.setTimeout(()=>{r(!1)},2e3)},[e]),a.default.createElement(o.AnimatePresence,null,t&&a.default.createElement(o.motion.span,{layout:!0,initial:{opacity:0,width:"0"},animate:{opacity:1,transition:{duration:.3},width:"auto"},exit:{transition:{duration:.3,width:0},opacity:0}},e))};var a=e("react"),o=e("framer-motion")}}),k.set("./view/components/animated",{hash:796986304,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Animated=function({className:e,children:t,as:r="span"}){r=(0,o.motion)(r);return a.default.createElement(r,{layout:!0,className:e,initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{transition:{duration:.3,width:0},opacity:0}},t)};var a=e("react"),o=e("framer-motion")}}),k.set("./view/components/header",{hash:3652372777,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){const e=(0,i.useLayoutContext)()["store"],[t,r]=(e.saved&&e.hasCredits,n.default.useState(!!e.broker.model)),[a,o]=n.default.useState([]);return(0,l.useBinder)([e.broker],()=>{r(!!e.broker.model),o(e.broker.breadcrumb)}),n.default.createElement(s.NavbarHeader,{breadcrumb:[,...a]},t&&n.default.createElement(c.CreditsContainer,null))};var n=e("react"),s=e("@aimpact/ailearn-app/components/navbar-header.code"),i=e("../context"),c=e("../coins/credits"),l=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./view/components/overlay-header",{hash:2194629961,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OverlayHeader=function(){var e=(0,o.useLayoutContext)()["store"];return r.default.createElement(a.NavbarHeader,{closable:!0,backlink:e.broker.backLink},!!e.broker.model&&r.default.createElement(n.CreditsContainer,null))};var r=e("react"),a=e("@aimpact/ailearn-app/components/navbar-header.code"),o=e("../context"),n=e("../coins/credits")}}),k.set("./view/context",{hash:772258609,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useLayoutContext=t.LayoutContext=void 0;var r=e("react");const a=t.LayoutContext=r.default.createContext({});t.useLayoutContext=()=>r.default.useContext(a)}}),k.set("./view/index",{hash:1946992666,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Layout=void 0;var h=e("react"),p=e("pragmate-ui/toast"),b=e("@beyond-js/react-18-widgets/hooks"),f=e("@aimpact/chat/shared/components"),g=e("./context"),v=e("./components/header"),y=e("beyond_context"),C=e("./coins/alert"),k=e("./coins/coins-modal"),w=e("./coins/notifications-bar"),E=e("./components/overlay-header");t.Layout=({store:e})=>{const[t,r]=(0,h.useState)(e.ready);(0,b.useBinder)([e],()=>r(e.ready));var[a,o]=(0,b.useTexts)(y.module.specifier);const[n,s]=h.default.useState(!1),[i,c]=h.default.useState(!1),[,l]=(0,h.useState)({});var d,u=()=>c(!i),m=()=>s(!n);return(0,b.useBinder)([e.broker],u,"no.credits"),(0,b.useBinder)([e],()=>l({})),a&&t?(a={store:e,texts:o,toggleCoinsModal:m,overlay:e.broker.overlay},d=e.broker.overlay?E.OverlayHeader:v.Header,h.default.createElement(h.default.Fragment,null,h.default.createElement(g.LayoutContext.Provider,{value:a},h.default.createElement("div",{className:"coins-layout__container"},h.default.createElement(d,null),h.default.createElement(w.NotificationsBar,null),h.default.createElement("main",null,h.default.createElement("beyond-layout-children",null),h.default.createElement(p.Toasts,null)))),h.default.createElement(C.CoinsAlert,{texts:o,show:i,onClose:u}),h.default.createElement(k.CoinsModal,{store:e,texts:o,show:n,onClose:m}))):h.default.createElement(f.PreloadScreen,null)}}}),C.exports.descriptor=[{im:"./broker",from:"LayoutBroker",name:"LayoutBroker"},{im:"./controller",from:"Controller",name:"Controller"},{im:"./view/components/header",from:"Header",name:"Header"},{im:"./view/components/overlay-header",from:"OverlayHeader",name:"OverlayHeader"}],C.exports.process=function({require:e,prop:t,value:r}){!e&&"LayoutBroker"!==t||a("LayoutBroker",e?e("./broker").LayoutBroker:r),!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:r),!e&&"Header"!==t||a("Header",e?e("./view/components/header").Header:r),!e&&"OverlayHeader"!==t||a("OverlayHeader",e?e("./view/components/overlay-header").OverlayHeader:r)},a("__beyond_pkg",C),a("hmr",new function(){this.on=(e,t)=>C.hmr.on(e,t),this.off=(e,t)=>C.hmr.off(e,t)}),C.initialise(k)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9icm9rZXIudHMiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3L2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3L2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3L2NvaW5zL2NyZWRpdHMudHN4IiwiL3RzL3ZpZXcvY29pbnMvbm90aWZpY2F0aW9ucy1iYXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvb3ZlcmxheS1oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29udGV4dC50cyIsIi90cy92aWV3L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJCcm9rZXIiLCJyZXF1aXJlIiwiUmVhY3RpdmVNb2RlbCIsIiNtb2RlbCIsIm1vZGVsIiwidGhpcyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCIjbWVzc2FnZSIsIm1lc3NhZ2UiLCIjYnJlYWRjcnVtYiIsImJyZWFkY3J1bWIiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwidHJpZ2dlciIsIiNzaG93Q3JlZGl0cyIsInNob3dDcmVkaXRzIiwiI292ZXJsYXkiLCJvdmVybGF5IiwiI2NhbkNvbnN1bWVDcmVkaXRzIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCIjYmFja0xpbmsiLCJiYWNrTGluayIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJlbnN1cmVDcmVkaXRzIiwiYmluZCIsImFkZE1vZGVsIiwiaWQiLCJvbiIsIm9uTGlzdGVuIiwiYXNzaWdubWVudElkIiwic2F2ZWQiLCJ0cmlnZ2VyRXZlbnQiLCJjYWxsYmFjayIsInNwZWNzIiwiY29uc29sZSIsImVycm9yIiwiYWRkQnJlYWRjcnVtYiIsIml0ZW1zIiwiYWRkTXVsdGlwbGVCcmVhZGNydW1iIiwidHJpbUJyZWFkY3J1bWIiLCJjb3VudCIsImxlbmd0aCIsInNob3dNZXNzYWdlIiwidHlwZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJleHBvcnRzIiwiTGF5b3V0QnJva2VyIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCIjc3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkxheW91dCIsIl9tb2RlbCIsIl93cmFwcGVyIiwiX2Jyb2tlciIsIiNicm9rZXIiLCJicm9rZXIiLCJBcHBXcmFwcGVyIiwibGlzdGVuZXIiLCJsYyIsImxvZyIsImluaXQiLCJhc3luYyIsImF3YWl0IiwiaXNSZWFkeSIsInJlYWR5Iiwic2hvdyIsIm9uQ2xvc2UiLCJ0ZXh0cyIsImNvaW5zIiwiYWxlcnQiLCJfcmVhY3QiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIl9tb2RhbCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdG9yZSIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsIm1vZGFsIiwiQ29uZmlybU1vZGFsIiwiY2xhc3NOYW1lIiwiY2VudGVyZWQiLCJhY3Rpb25zIiwiY29uZmlybSIsImxhYmVsIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwiYW5zd2VyIiwiY29uc3VtZUNvaW5zIiwic3RhdHVzIiwiNDgiLCJjb2RlIiwiZSIsImVycm9ycyIsIm5vQ3JlZGl0cyIsIm9uQ2FuY2VsIiwiX3VpIiwiRXJyb3JSZW5kZXJlciIsIkJhdHRlcnkiLCJwZXJjZW50IiwidG9nZ2xlQ29pbnNNb2RhbCIsImhlYWRlciIsIl9jb250ZXh0IiwidXNlTGF5b3V0Q29udGV4dCIsInNldE1lc3NhZ2UiLCJzZXRIYXNDcmVkaXRzIiwicmVmIiwidXNlUmVmIiwiY2xzIiwiQ29udHJvbCIsIl9jaGlwcyIsIkNoaXAiLCJfY29tcG9uZW50cyIsIkJ1dHRvbiIsImF0dHJzIiwib25DbGljayIsImRpc2FibGVkIiwiYXZhaWxhYmxlIiwiX2hvb2tzIiwidXNlQmluZGVyIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1lc3NhZ2VzIiwiX2FuaW1hdGVkTGFiZWwiLCJBbmltYXRlZExhYmVsIiwic2V0U2hvdyIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJfYW5pbWF0ZWQiLCJBbmltYXRlZCIsImFzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbnMiLCJJY29uIiwiaWNvbiIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwibW90aW9uIiwic3BhbiIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2lkdGgiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIkNvbXBvbmVudCIsImhhc01vZGVsIiwic2V0SGFzTW9kZWwiLCJzZXRCcmVhZGNydW1iIiwiX25hdmJhckhlYWRlciIsIk5hdmJhckhlYWRlciIsIl9jcmVkaXRzIiwiQ3JlZGl0c0NvbnRhaW5lciIsImNsb3NhYmxlIiwiYmFja2xpbmsiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX2FsZXJ0IiwiX2NvaW5zTW9kYWwiLCJfbm90aWZpY2F0aW9uc0JhciIsIl9vdmVybGF5SGVhZGVyIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInNldFVwZGF0ZSIsIkhlYWRlckNvbnRyb2wiLCJ0b2dnbGVDb2luc0FsZXJ0IiwiT3ZlcmxheUhlYWRlciIsIkhlYWRlciIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJOb3RpZmljYXRpb25zQmFyIiwiVG9hc3RzIiwiQ29pbnNBbGVydCIsIkNvaW5zTW9kYWwiLCJQcmVsb2FkU2NyZWVuIl0sIm1hcHBpbmdzIjoiMnJFQU1hQSxVQU5iQyxFQUFBLDJCQUFBLEVBTTRCQyxjQUMzQkMsT0FDQUMsWUFDQyxPQUFPQyxLQUFLRixNQUNiLENBQ0FHLGlCQUNDLE9BQXFDLEVBQTlCRCxLQUFLRixRQUFRSSxTQUFTQyxLQUM5QixDQUVBQyxTQUNBQyxjQUNDLE9BQU9MLEtBQUtJLFFBQ2IsQ0FFQUUsWUFBYyxHQUNkQyxpQkFDQyxPQUFPUCxLQUFLTSxXQUNiLENBRUFDLGVBQWVDLEdBQ2QsR0FBSSxDQUFDQyxNQUFNQyxRQUFRRixDQUFLLEVBQUcsTUFBTSxJQUFJRyxNQUFNLHdDQUF3QyxFQUNuRlgsS0FBS00sWUFBY0UsRUFDbkJSLEtBQUtZLFFBQVEsUUFBUSxDQUN0QixDQUVBQyxhQUNBQyxrQkFDQyxPQUFPZCxLQUFLYSxZQUNiLENBRUFFLFNBQ0FDLGNBQ0MsT0FBT2hCLEtBQUtlLFFBQ2IsQ0FDQUMsWUFBWVIsR0FDUFIsS0FBS2UsV0FBYVAsSUFDdEJSLEtBQUtlLFNBQVdQLEVBRWhCUixLQUFLWSxRQUFRLFFBQVEsRUFDdEIsQ0FPQUssbUJBQ0FDLHdCQUNDLE9BQU9sQixLQUFLRixRQUFRb0IsbUJBQXFCbEIsS0FBS2lCLGtCQUMvQyxDQUVBQyxzQkFBc0JWLEdBQ2pCUixLQUFLaUIscUJBQXVCVCxJQUNoQ1IsS0FBS2lCLG1CQUFxQlQsRUFDMUJSLEtBQUtZLFFBQVEsUUFBUSxFQUN0QixDQUNBTyxVQUNBQyxlQUNDLE9BQU9wQixLQUFLbUIsU0FDYixDQUVBQyxhQUFhWixHQUNaUixLQUFLbUIsVUFBWVgsRUFDakJSLEtBQUtZLFFBQVEsUUFBUSxDQUN0QixDQUNBUyxjQUNDQyxNQUFLLEVBRUx0QixLQUFLdUIsY0FBZ0J2QixLQUFLdUIsY0FBY0MsS0FBS3hCLElBQUksQ0FDbEQsQ0FDQXlCLFNBQVMxQixFQUFPZSxFQUFjLENBQUEsR0FDekJmLEVBQU0yQixLQUFPMUIsS0FBS0YsUUFBUTRCLEtBRTlCMUIsS0FBS0YsT0FBU0MsRUFDZEMsS0FBS2EsYUFBZUMsRUFDcEJkLEtBQUtGLE9BQU82QixHQUFHLFNBQVUzQixLQUFLNEIsU0FBU0osS0FBS3hCLElBQUksQ0FBQyxFQUNqREEsS0FBS1ksUUFBUSxRQUFRLEVBRWpCYixFQUFNOEIsZ0JBQ1Q3QixLQUFLbUIsVUFBWSxnQkFBZ0JwQixFQUFNOEIsYUFHekMsQ0FFQUQsaUJBQ0s1QixLQUFLYSxlQUFpQmIsS0FBS0YsUUFBUWdDLFFBSXZDOUIsS0FBS2EsYUFBZWIsS0FBS0YsT0FBT2dDLE1BQ2hDOUIsS0FBSytCLGFBQVksRUFDbEIsQ0FFQVIsb0JBQW9CUyxLQUFhQyxHQUtoQyxHQUZLakMsS0FBS0YsUUFBUW9DLFFBQVFDLE1BQU0sZ0JBQWdCLEVBRTNDbkMsS0FBS0MsV0FLVixPQUFPK0IsRUFBUyxHQUFHQyxDQUFLLEVBSnZCakMsS0FBS1ksUUFBUSxZQUFZLENBSzNCLENBRUF3QixjQUFjQyxHQUNickMsS0FBS00sWUFBYyxDQUFDLEdBQUdOLEtBQUtNLFlBQWErQixHQUN6Q3JDLEtBQUtZLFFBQVEsUUFBUSxDQUN0QixDQUNBMEIsc0JBQXNCRCxHQUNyQnJDLEtBQUtNLFlBQWMsQ0FBQyxHQUFHTixLQUFLTSxZQUFhLEdBQUcrQixHQUM1Q3JDLEtBQUtZLFFBQVEsUUFBUSxDQUN0QixDQUNBMkIsZUFBZUMsR0FDVkEsR0FBU3hDLEtBQUtPLFdBQVdrQyxTQUM1QnpDLEtBQUtPLFdBQVdrQyxRQUFVRCxFQUMxQnhDLEtBQUsrQixhQUFhLFFBQVEsRUFFNUIsQ0FFQVcsWUFBWUMsRUFBTXRDLEdBQ2pCTCxLQUFLSSxTQUFXLENBQUV1QyxLQUFBQSxFQUFNdEMsUUFBQUEsQ0FBTyxFQUMvQkwsS0FBS1ksUUFBUSxjQUFjLEVBRTNCZ0MsV0FBV0MsV0FBVyxLQUNyQjdDLEtBQUtJLFNBQVcwQyxLQUFBQSxDQUNqQixFQUFHLEdBQUksQ0FDUixDQUVBQyxRQUNDL0MsS0FBS0YsT0FBU2dELEtBQUFBLEVBQ2Q5QyxLQUFLTSxZQUFjLEdBQ25CTixLQUFLZ0IsUUFBVSxDQUFBLEVBQ2ZoQixLQUFLK0IsYUFBWSxDQUNsQixDLENBQ0FpQixFQUFBckQsT0FBQUEsRUFFb0NxRCxFQUFBQyxhQUFHLElBQUl0RCxDLHFJQ2hKNUMsSUFBQXVELEVBQUF0RCxFQUFBLGtDQUFBLEVBQ0F1RCxFQUFBdkQsRUFBQSxTQUFBLEVBQ0F3RCxFQUFBeEQsRUFBQSxRQUFBLFFBR015RCxVQUFtQkgsRUFBQUksc0JBQ3hCQyxPQUNBQyxjQUVDLE9BREF4RCxLQUFLdUQsT0FBUyxJQUFJSixFQUFBTSxhQUNYekQsS0FBS3VELE1BQ2IsQ0FDQUcsYUFDQyxPQUFPTixFQUFBTyxNQUNSLEMsQ0FDQVgsRUFBQUssV0FBQUEsQyxrSUNkRCxJQUFBTyxFQUFBaEUsRUFBQSwyQkFBQSxFQUVBaUUsRUFBQWpFLEVBQUEsdUJBQUEsRUFDQWtFLEVBQUFsRSxFQUFBLFVBQUEsUUFPYTZELFVBQXFCRyxFQUFBL0QsY0FFakNrRSxRQUNBQyxhQUNDLE9BQU9oRSxLQUFLK0QsT0FDYixDQUNBakQsa0JBQ0MsT0FBT2QsS0FBSytELFFBQVFqRCxXQUNyQixDQUVBZixZQUNDLE9BQU9DLEtBQUsrRCxRQUFRaEUsS0FDckIsQ0FDQStCLFlBQ0MsT0FBTzlCLEtBQUsrRCxTQUFTaEUsT0FBTytCLEtBQzdCLENBQ0FULGNBQ0NDLE1BQUssRUFDTHVDLEVBQUFJLFdBQVd0QyxHQUFHLFNBQVUzQixLQUFLa0UsUUFBUSxFQUNyQ2xFLEtBQUsrRCxRQUFVRCxFQUFBYixhQUNmakQsS0FBSytELFFBQVFwQyxHQUFHLFNBQVUzQixLQUFLK0IsWUFBWSxFQUMzQ2EsV0FBV3VCLEdBQUtuRSxLQUNoQmtDLFFBQVFrQyxJQUFJLDhEQUE4RCxFQUMxRXBFLEtBQUtxRSxLQUFJLENBQ1YsQ0FFQUEsS0FBT0MsVUFDTkMsTUFBTVYsRUFBQUksV0FBV08sUUFDakJ4RSxLQUFLeUUsTUFBUSxDQUFBLENBQ2QsRUFDQVAsU0FBV0EsTSxDQUNYbEIsRUFBQVMsYUFBQUEsQyxvSUN0Q0ssU0FBcUIsQ0FBRWlCLEtBQUFBLEVBQU1DLFFBQUFBLEVBQVNDLE1BQUFBLENBQUssR0FDaEQsT0FBS0YsR0FDTEUsRUFBUUEsRUFBTUMsTUFBTUMsTUFHbkJDLEVBQUFDLFFBQUFDLGNBQUNDLEVBQUFDLFdBQVUsQ0FBQ1QsS0FBSSxDQUFBLEVBQUNVLFlBQWFSLEVBQU1TLE9BQVFDLFVBQVdYLEVBQVNBLFFBQVNBLENBQU8sRUFDL0VJLEVBQUFDLFFBQUFDLGNBQUEsU0FBQSxLQUNDRixFQUFBQyxRQUFBQyxjQUFBLEtBQUEsS0FBS0wsRUFBTVcsS0FBSyxFQUVoQlIsRUFBQUMsUUFBQUMsY0FBQSxJQUFBLEtBQUlMLEVBQU1ZLFdBQVcsQ0FBSyxDQUNsQixHQVRPLElBWW5CLEVBaEJBLElBQUFULEVBQUFuRixFQUFBLE9BQUEsRUFDQXNGLEVBQUF0RixFQUFBLG1CQUFBLEMseUlDR00sU0FBcUIsQ0FBRTZGLE1BQUFBLEVBQU9mLEtBQUFBLEVBQU1DLFFBQUFBLEVBQVNDLE1BQUFBLENBQUssR0FDdkQsR0FBSSxDQUFDRixFQUFNLE9BQU8sS0FDbEIsS0FBTSxDQUFBLENBQVdnQixHQUFlWCxFQUFBQyxRQUFNVyxTQUFTLENBQUEsQ0FBSyxFQUM5QyxDQUFDeEQsRUFBT3lELEdBQVliLEVBQUFDLFFBQU1XLFNBQVEsRUFDeENmLEVBQVFBLEVBQU1DLE1BQU1nQixNQW9CcEIsT0FDQ2QsRUFBQUMsUUFBQUMsY0FBQ0MsRUFBQVksYUFBWSxDQUNacEIsS0FBSSxDQUFBLEVBQ0pxQixVQUFVLDBCQUNWQyxTQUFRLENBQUEsRUFDUkMsUUFBUyxDQUVSQyxRQUFTLENBQUVDLE1BQU92QixFQUFNcUIsUUFBUUMsUUFBU0UsUUFBUyxTQUFTLEVBQzNEQyxPQUFRLENBQUVGLE1BQU92QixFQUFNcUIsUUFBUUksT0FBUUQsUUFBUyxVQUFXRSxTQUFVLENBQUEsQ0FBSSxDLEVBRTFFaEIsVUE1QmdCaEIsVUFDakIsSUFDQ29CLEVBQVksQ0FBQSxDQUFJLEVBQ2hCLElBQU1hLEVBQVNoQyxNQUFNa0IsRUFBTTFGLE1BQU15RyxhQUFZLEVBQzdDLEdBQUksQ0FBQ0QsRUFBT0UsT0FJWCxNQUFNLElBQUk5RixNQUhLLENBQ2QrRixHQUFJLFksRUFFa0JILEVBQU9wRSxNQUFNd0UsS0FBSyxFQUUxQ2hDLEVBQU8sQyxDQUNOLE1BQU9pQyxHQUNSMUUsUUFBUUMsTUFBTXlFLENBQUMsRUFDZmhCLEVBQVNoQixFQUFNaUMsT0FBT0MsU0FBUyxDLENBQy9CLFFBQ0FwQixFQUFZLENBQUEsQ0FBSyxDLENBRW5CLEVBWUVxQixTQUFVcEMsRUFDVkEsUUFBU0EsQ0FBTyxFQUVoQkksRUFBQUMsUUFBQUMsY0FBQSxTQUFBLEtBQ0NGLEVBQUFDLFFBQUFDLGNBQUEsS0FBQSxLQUFLTCxFQUFNVyxLQUFLLEVBQ2hCUixFQUFBQyxRQUFBQyxjQUFDK0IsRUFBQUMsY0FBYSxDQUFDOUUsTUFBT0EsRUFBT2lFLFFBQVEsU0FBUyxDQUFBLEVBQzlDckIsRUFBQUMsUUFBQUMsY0FBQytCLEVBQUFFLFFBQU8sQ0FBQ0MsUUFBUSxNQUFNcEIsVUFBVSxJQUFJLENBQUEsRUFDckNoQixFQUFBQyxRQUFBQyxjQUFBLElBQUEsS0FBSUwsRUFBTVksV0FBVyxDQUFLLENBQ2xCLENBR1osRUFsREEsSUFBQVQsRUFBQW5GLEVBQUEsT0FBQSxFQUNBc0YsRUFBQXRGLEVBQUEsbUJBQUEsRUFDQW9ILEVBQUFwSCxFQUFBLG9DQUFBLEMsMklDT00sV0FDTCxLQUFNLENBQ0w2RixNQUFBQSxFQUNBMkIsaUJBQUFBLEVBQ0F4QyxNQUFPLENBQ05DLE1BQU8sQ0FBRXdDLE9BQVF6QyxDQUFLLENBQUUsQ0FDeEIsR0FDRSxFQUFBMEMsRUFBQUMsa0JBQWdCLEVBQ2QsQ0FBQ2xILEVBQVNtSCxHQUFjekMsRUFBQUMsUUFBTVcsU0FBUyxFQUFFLEVBQ3pDLENBQUEsQ0FBYThCLEdBQWlCMUMsRUFBQUMsUUFBTVcsU0FBU0YsRUFBTXhGLFVBQVUsRUFDN0R5SCxHQUFNLEVBQUEzQyxFQUFBNEMsUUFBTyxJQUFJLEVBQ2pCQyxFQUFNLHNCQUFzQm5DLEVBQU16QixPQUFPOUMsa0JBQXFDLEdBQWpCLGdCQUc3RDJHLEVBQVVwQyxFQUFNekIsT0FBTy9ELFdBQWE2SCxFQUFBQyxLQUFPQyxFQUFBQyxPQUMzQ0MsRUFBUSxDQUNibkMsVUFBVyxpQkFDWG9DLFFBQVNyRixLQUFBQSxFQUNUc0QsUUFBU1gsRUFBTXpCLE9BQU8vRCxXQUFhLFVBQVksVUFDL0NtSSxTQUFVM0MsRUFBTXpCLE9BQU8vRCxZQUFjLENBQUN3RixFQUFNekIsT0FBTzlDLGlCLEVBRTlDaUYsRUFBUVYsRUFBTXpCLE9BQU8vRCxXQUFhMkUsRUFBTXFCLFFBQVFvQyxVQUFZekQsRUFBTXFCLFFBQVFyRyxTQU9oRixFQUFBMEksRUFBQUMsV0FBVSxDQUFDOUMsRUFBTXpCLE9BQU9qRSxPQU5BNEMsSUFDdkIrRSxFQUFJYyxRQUFRQyxVQUFVQyxJQUFJLG9CQUFvQixFQUM5Q2xCLEVBQVc1QyxFQUFNK0QsU0FBU2hHLEVBQUssRUFDL0I4RSxFQUFjaEMsRUFBTXpCLE9BQU8vRCxVQUFVLENBQ3RDLEVBRWlELGdCQUFnQixFQUU1RHdGLEVBQU16QixPQUFPL0QsV0FHakJpSSxFQUFNbkMsVUFBWSxnQkFGbEJtQyxFQUFNQyxRQUFVZixFQUtqQixPQUNDckMsRUFBQUMsUUFBQUMsY0FBQSxNQUFBLENBQUtjLFVBQVc2QixFQUFLRixJQUFLQSxDQUFHLEVBQzVCM0MsRUFBQUMsUUFBQUMsY0FBQzJELEVBQUFDLGNBQWEsS0FBRXhJLENBQU8sRUFDdEJvRixFQUFNekIsT0FBTy9ELFlBQWM4RSxFQUFBQyxRQUFBQyxjQUFDK0IsRUFBQUUsUUFBTyxDQUFDQyxRQUFTLEdBQUcsQ0FBQSxFQUNqRHBDLEVBQUFDLFFBQUFDLGNBQUM0QyxFQUFPLENBQUEsR0FBS0ssQ0FBSyxFQUFHL0IsQ0FBSyxDQUFXLENBR3hDLEVBcERBLElBQUFwQixFQUFBbkYsRUFBQSxPQUFBLEVBRUFvSSxFQUFBcEksRUFBQSx3QkFBQSxFQUNBa0ksRUFBQWxJLEVBQUEsbUJBQUEsRUFDQW9ILEVBQUFwSCxFQUFBLG9DQUFBLEVBQ0EwSSxFQUFBMUksRUFBQSxtQ0FBQSxFQUNBZ0osRUFBQWhKLEVBQUEsOEJBQUEsRUFDQTBILEVBQUExSCxFQUFBLFlBQUEsQyxxSkNBTSxTQUEyQixJQUNoQyxLQUNRLENBQUVvRSxPQUFBQSxDQUFNLEdBQ1osRUFBQXNELEVBQUFDLGtCQUFnQixFQURuQjlCLFNBRUssQ0FBQ2YsRUFBTW9FLEdBQVcvRCxFQUFBQyxRQUFNVyxTQUFTLENBQUEsQ0FBSSxFQUNyQyxDQUFDdEYsRUFBU21ILEdBQWN6QyxFQUFBQyxRQUFNVyxTQUFTN0MsS0FBQUEsQ0FBUyxFQWN0RCxJQVJBLEVBQUF3RixFQUFBQyxXQUNDLENBQUN2RSxHQUNELEtBQ0N3RCxFQUFXeEQsRUFBTzNELE9BQU8sQ0FDMUIsRUFDQSxjQUFjLEVBR1gsQ0FBQ0EsRUFBUyxPQUFPLEtBQ3JCLElBQU11SCxFQUFNLGlEQUFpRHZILEdBQVNzQyxLQUN0RSxPQUNDb0MsRUFBQUMsUUFBQUMsY0FBQzhELEVBQUFDLGdCQUFlLEtBQ2R0RSxHQUNBSyxFQUFBQyxRQUFBQyxjQUFDZ0UsRUFBQUMsU0FBUSxDQUFDQyxHQUFHLE1BQU1wRCxVQUFXNkIsQ0FBRyxFQUNoQzdDLEVBQUFDLFFBQUFDLGNBQUMrQyxFQUFBb0IsWUFBVyxLQUFFL0ksRUFBUUEsT0FBTyxFQUM3QjBFLEVBQUFDLFFBQUFDLGNBQUNvRSxFQUFBQyxLQUFJLENBQUN2RCxVQUFVLGFBQWF3RCxLQUFLLFFBQVFwQixRQXBCOUJ4RCxLQUNmNkMsRUFBVzFFLEtBQUFBLENBQVMsRUFDcEJnRyxFQUFRLENBQUEsQ0FBSyxDQUNkLENBaUI4RCxDQUFBLENBQUksQ0FFL0QsQ0FHSixFQXRDQSxJQUFBL0QsRUFBQW5GLEVBQUEsT0FBQSxFQUNBb0ksRUFBQXBJLEVBQUEsd0JBQUEsRUFDQXlKLEVBQUF6SixFQUFBLG1CQUFBLEVBQ0FtSixFQUFBbkosRUFBQSxlQUFBLEVBQ0FxSixFQUFBckosRUFBQSx3QkFBQSxFQUNBMEgsRUFBQTFILEVBQUEsWUFBQSxFQUNBMEksRUFBQTFJLEVBQUEsbUNBQUEsQyxxSkNKTSxTQUF3QixDQUFFNEosU0FBQUEsQ0FBUSxHQUN2QyxLQUFNLENBQUM5RSxFQUFNb0UsR0FBVy9ELEVBQUFDLFFBQU1XLFNBQVMsQ0FBQyxDQUFDNkQsQ0FBUSxFQVNqRCxPQVBBekUsRUFBQUMsUUFBTXlFLFVBQVUsS0FDZlgsRUFBUVUsQ0FBUSxFQUNoQjVHLFdBQVdDLFdBQVcsS0FDckJpRyxFQUFRLENBQUEsQ0FBSyxDQUNkLEVBQUcsR0FBSSxDQUNSLEVBQUcsQ0FBQ1UsRUFBUyxFQUdaekUsRUFBQUMsUUFBQUMsY0FBQzhELEVBQUFDLGdCQUFlLEtBQ2R0RSxHQUNBSyxFQUFBQyxRQUFBQyxjQUFDOEQsRUFBQVcsT0FBT0MsS0FBSSxDQUNYQyxPQUFNLENBQUEsRUFDTkMsUUFBUyxDQUNSQyxRQUFTLEVBQ1RDLE1BQU8sRyxFQUVSQyxRQUFTLENBQ1JGLFFBQVMsRUFDVEcsV0FBWSxDQUNYQyxTQUFVLEUsRUFFWEgsTUFBTyxNLEVBRVJJLEtBQU0sQ0FDTEYsV0FBWSxDQUNYQyxTQUFVLEdBQ1ZILE1BQU8sQyxFQUVSRCxRQUFTLEMsQ0FDVCxFQUVBTixDQUFRLENBRVYsQ0FHSixFQXpDQSxJQUFBekUsRUFBQW5GLEVBQUEsT0FBQSxFQUNBbUosRUFBQW5KLEVBQUEsZUFBQSxDLHlJQ0NNLFNBQW1CLENBQUVtRyxVQUFBQSxFQUFXeUQsU0FBQUEsRUFBVUwsR0FBQUEsRUFBSyxNQUFNLEdBQ3BEaUIsR0FBWSxFQUFBckIsRUFBQVcsUUFBT1AsQ0FBRSxFQUMzQixPQUNDcEUsRUFBQUMsUUFBQUMsY0FBQ21GLEVBQVMsQ0FDVFIsT0FBTSxDQUFBLEVBQ043RCxVQUFXQSxFQUNYOEQsUUFBUyxDQUNSQyxRQUFTLEMsRUFFVkUsUUFBUyxDQUNSRixRQUFTLEVBQ1RHLFdBQVksQ0FDWEMsU0FBVSxFLEdBR1pDLEtBQU0sQ0FDTEYsV0FBWSxDQUNYQyxTQUFVLEdBQ1ZILE1BQU8sQyxFQUVSRCxRQUFTLEMsQ0FDVCxFQUVBTixDQUFRLENBR1osRUE1QkEsSUFBQXpFLEVBQUFuRixFQUFBLE9BQUEsRUFDQW1KLEVBQUFuSixFQUFBLGVBQUEsQyxzSUNNaUIsV0FDaEIsTUFBUTZGLEdBQWlCLEVBQUE2QixFQUFBQyxrQkFBZ0IsRUFBakM5QixTQUVGLENBQUM0RSxFQUFVQyxJQUREN0UsRUFBTTNELE9BQVUyRCxFQUFNeEYsV0FDTjhFLEVBQUFDLFFBQU1XLFNBQVMsQ0FBQyxDQUFDRixFQUFNekIsT0FBT2pFLEtBQUssR0FDN0QsQ0FBQ1EsRUFBWWdLLEdBQWlCeEYsRUFBQUMsUUFBTVcsU0FBUyxFQUFFLEVBTXJELE9BTEEsRUFBQTJDLEVBQUFDLFdBQVUsQ0FBQzlDLEVBQU16QixRQUFTLEtBQ3pCc0csRUFBWSxDQUFDLENBQUM3RSxFQUFNekIsT0FBT2pFLEtBQUssRUFDaEN3SyxFQUFjOUUsRUFBTXpCLE9BQU96RCxVQUFVLENBQ3RDLENBQUMsRUFFTXdFLEVBQUFDLFFBQUFDLGNBQUN1RixFQUFBQyxhQUFZLENBQUNsSyxXQUFZLENBQUEsQ0FBRyxHQUFHQSxFQUFXLEVBQUc4SixHQUFZdEYsRUFBQUMsUUFBQUMsY0FBQ3lGLEVBQUFDLGlCQUFnQixJQUFBLENBQUcsQ0FDdEYsRUFsQkEsSUFBQTVGLEVBQUFuRixFQUFBLE9BQUEsRUFDQTRLLEVBQUE1SyxFQUFBLG9EQUFBLEVBRUEwSCxFQUFBMUgsRUFBQSxZQUFBLEVBQ0E4SyxFQUFBOUssRUFBQSxrQkFBQSxFQUNBMEksRUFBQTFJLEVBQUEsbUNBQUEsQyxxSkNDaUIsV0FDaEIsSUFBUTZGLEdBQVUsRUFBQTZCLEVBQUFDLGtCQUFnQixFQUExQjlCLFNBRVIsT0FDQ1YsRUFBQUMsUUFBQUMsY0FBQ3VGLEVBQUFDLGFBQVksQ0FBQ0csU0FBUSxDQUFBLEVBQUNDLFNBQVVwRixFQUFNekIsT0FBTzVDLFFBQVEsRUFDcEQsQ0FBQyxDQUFDcUUsRUFBTXpCLE9BQU9qRSxPQUFTZ0YsRUFBQUMsUUFBQUMsY0FBQ3lGLEVBQUFDLGlCQUFnQixJQUFBLENBQUcsQ0FHaEQsRUFkQSxJQUFBNUYsRUFBQW5GLEVBQUEsT0FBQSxFQUNBNEssRUFBQTVLLEVBQUEsb0RBQUEsRUFFQTBILEVBQUExSCxFQUFBLFlBQUEsRUFDQThLLEVBQUE5SyxFQUFBLGtCQUFBLEMsNEpDSkEsSUFBQW1GLEVBQUFuRixFQUFBLE9BQUEsRUFRTyxNQUFNa0wsRUFBYTlILEVBQUE4SCxjQUFHL0YsRUFBQUMsUUFBTStGLGNBQWMsRUFBb0IsRUFDQy9ILEVBQUF1RSxpQkFBdENBLElBQU14QyxFQUFBQyxRQUFNZ0csV0FBV0YsQ0FBYSxDLGlJQ1RwRSxJQUFBL0YsRUFBQW5GLEVBQUEsT0FBQSxFQUVBcUwsRUFBQXJMLEVBQUEsbUJBQUEsRUFDQTBJLEVBQUExSSxFQUFBLG1DQUFBLEVBQ0FvSSxFQUFBcEksRUFBQSxpQ0FBQSxFQUNBMEgsRUFBQTFILEVBQUEsV0FBQSxFQUNBc0wsRUFBQXRMLEVBQUEscUJBQUEsRUFDQXVMLEVBQUF2TCxFQUFBLGdCQUFBLEVBQ0F3TCxFQUFBeEwsRUFBQSxlQUFBLEVBQ0F5TCxFQUFBekwsRUFBQSxxQkFBQSxFQUNBMEwsRUFBQTFMLEVBQUEsMkJBQUEsRUFDQTJMLEVBQUEzTCxFQUFBLDZCQUFBLEVBK0NFb0QsRUFBQVcsT0FsQzhCQSxDQUFBQSxDQUFHOEIsTUFBQUEsQ0FBZSxLQUNqRCxLQUFNLENBQUNoQixFQUFPK0csSUFBWSxFQUFBekcsRUFBQVksVUFBU0YsRUFBTWhCLEtBQUssR0FDOUMsRUFBQTZELEVBQUFDLFdBQVUsQ0FBQzlDLEdBQVEsSUFBTStGLEVBQVMvRixFQUFNaEIsS0FBSyxDQUFDLEVBQzlDLEdBQU0sQ0FBQ2dILEVBQVk3RyxJQUFTLEVBQUEwRCxFQUFBb0QsVUFBU1AsRUFBQVEsT0FBT0MsU0FBUyxFQUNyRCxLQUFNLENBQUNDLEVBQWdCQyxHQUFxQi9HLEVBQUFDLFFBQU1XLFNBQVMsQ0FBQSxDQUFLLEVBQzFELENBQUNvRyxFQUFnQkMsR0FBcUJqSCxFQUFBQyxRQUFNVyxTQUFTLENBQUEsQ0FBSyxFQUMxRCxDQUFBLENBQUdzRyxJQUFhLEVBQUFsSCxFQUFBWSxVQUFTLEVBQUUsRUFDakMsSUFTTXVHLEVBVEFDLEVBQW1CQSxJQUFNSCxFQUFrQixDQUFDRCxDQUFjLEVBQzFEM0UsRUFBbUJBLElBQU0wRSxFQUFrQixDQUFDRCxDQUFjLEVBS2hFLE9BSEEsRUFBQXZELEVBQUFDLFdBQVUsQ0FBQzlDLEVBQU16QixRQUFTbUksRUFBa0IsWUFBWSxHQUN4RCxFQUFBN0QsRUFBQUMsV0FBVSxDQUFDOUMsR0FBUSxJQUFNd0csRUFBVSxFQUFFLENBQUMsRUFFakNSLEdBQWVoSCxHQUVkakUsRUFBUSxDQUFFaUYsTUFBQUEsRUFBT2IsTUFBQUEsRUFBT3dDLGlCQUFBQSxFQUFrQnBHLFFBQVN5RSxFQUFNekIsT0FBT2hELE9BQU8sRUFDdkVrTCxFQUFpQnpHLEVBQU16QixPQUFPaEQsUUFBbUJ1SyxFQUFBYSxjQUFUbEIsRUFBQW1CLE9BRzdDdEgsRUFBQUMsUUFBQUMsY0FBQUYsRUFBQUMsUUFBQXNILFNBQUEsS0FDQ3ZILEVBQUFDLFFBQUFDLGNBQUNxQyxFQUFBd0QsY0FBY3lCLFNBQVEsQ0FBQy9MLE1BQU9BLENBQUssRUFDbkN1RSxFQUFBQyxRQUFBQyxjQUFBLE1BQUEsQ0FBS2MsVUFBVSx5QkFBeUIsRUFDdkNoQixFQUFBQyxRQUFBQyxjQUFDaUgsRUFBYSxJQUFBLEVBQ2RuSCxFQUFBQyxRQUFBQyxjQUFDcUcsRUFBQWtCLGlCQUFnQixJQUFBLEVBQ2pCekgsRUFBQUMsUUFBQUMsY0FBQSxPQUFBLEtBQ0NGLEVBQUFDLFFBQUFDLGNBQUEseUJBQUEsSUFBQSxFQUNBRixFQUFBQyxRQUFBQyxjQUFDZ0csRUFBQXdCLE9BQU0sSUFBQSxDQUFHLENBQ0osQ0FDRixFQUVQMUgsRUFBQUMsUUFBQUMsY0FBQ21HLEVBQUFzQixXQUFVLENBQUM5SCxNQUFPQSxFQUFPRixLQUFNcUgsRUFBZ0JwSCxRQUFTd0gsQ0FBZ0IsQ0FBQSxFQUN6RXBILEVBQUFDLFFBQUFDLGNBQUNvRyxFQUFBc0IsV0FBVSxDQUFDbEgsTUFBT0EsRUFBT2IsTUFBT0EsRUFBT0YsS0FBTW1ILEVBQWdCbEgsUUFBU3lDLENBQWdCLENBQUEsQ0FBSSxHQWxCM0RyQyxFQUFBQyxRQUFBQyxjQUFDK0MsRUFBQTRFLGNBQWEsSUFBQSxDQXFCakQifQ==