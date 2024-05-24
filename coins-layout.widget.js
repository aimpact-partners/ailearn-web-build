System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.1.12/model","@beyond-js/react-18-widgets@1.1.2/base","@aimpact/chat-sdk@1.0.0/core","@aimpact/chat@1.0.1/wrapper","@beyond-js/kernel@0.1.9/texts","react@18.2.0","pragmate-ui@0.1.1/modal","@aimpact/ailearn-app@0.0.34.dev-01/components/ui","pragmate-ui@0.1.1/components","pragmate-ui@0.1.1/chips","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@0.1.1/icons","framer-motion@10.18.0","@aimpact/ailearn-app@0.0.34.dev-01/components/navbar-header.code","pragmate-ui@0.1.1/toast","@beyond-js/kernel@0.1.9/styles"],function(a,e){"use strict";var t,r,n,o,s,i,c,d,l,u,m,h,p,f,b,g,y,v,C,k;return a({LayoutBroker:void 0,Controller:void 0,Header:void 0,OverlayHeader:void 0}),{setters:[function(e){t=e},function(e){r=e},function(e){n=e},function(e){o=e},function(e){s=e},function(e){i=e},function(e){c=e},function(e){d=e},function(e){l=e},function(e){u=e},function(e){m=e},function(e){h=e},function(e){p=e},function(e){f=e},function(e){b=e},function(e){g=e},function(e){y=e},function(e){v=e}],execute:function(){k=r.Bundle,(C=new k({module:{vspecifier:"@aimpact/ailearn-app@0.0.34.dev-01/coins-layout",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/reactive/model",n],["@beyond-js/react-18-widgets/base",o],["@aimpact/chat-sdk/core",s],["@aimpact/chat/wrapper",i],["@beyond-js/kernel/texts",c],["react",d],["pragmate-ui/modal",l],["@aimpact/ailearn-app/components/ui",u],["pragmate-ui/components",m],["pragmate-ui/chips",h],["@beyond-js/react-18-widgets/hooks",p],["pragmate-ui/icons",f],["framer-motion",b],["@aimpact/ailearn-app/components/navbar-header.code",g],["pragmate-ui/toast",y],["@beyond-js/kernel/styles",v]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"coins-layout",vspecifier:"@aimpact/ailearn-app@0.0.34.dev-01/coins-layout.widget",is:"layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.34.dev-01/coins-layout.widget"),(k=new Map).set("./broker",{hash:2938168133,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LayoutBroker=t.Broker=void 0;class r extends e("@beyond-js/reactive/model").ReactiveModel{#model;get model(){return this.#model}get hasCredits(){return 0<this.#model?.credits?.total}#message;get message(){return this.#message}#breadcrumb=[];get breadcrumb(){return this.#breadcrumb}set breadcrumb(e){if(!Array.isArray(e))throw new Error("Breadcrumb must be an array of objects");this.#breadcrumb=e,this.trigger("change")}#showCredits;get showCredits(){return this.#showCredits}#overlay;get overlay(){return this.#overlay}set overlay(e){this.#overlay!==e&&(this.#overlay=e,this.trigger("change"))}#canConsumeCredits;get canConsumeCredits(){return this.#model?.canConsumeCredits||this.#canConsumeCredits}set canConsumeCredits(e){this.#canConsumeCredits!==e&&(this.#canConsumeCredits=e,this.trigger("change"))}#backLink;get backLink(){return this.#backLink}set backLink(e){this.#backLink=e,this.trigger("change")}constructor(){super(),this.ensureCredits=this.ensureCredits.bind(this)}addModel(e,t=!0){e.id!==this.#model?.id&&(this.#model=e,this.#showCredits=t,this.#model.on("change",this.onListen.bind(this)),this.trigger("change"),e.assignmentId)&&(this.#backLink="/assignments/"+e.assignmentId)}async onListen(){this.#showCredits!==this.#model?.saved&&(this.#showCredits=this.#model.saved,this.triggerEvent())}async ensureCredits(e,...t){if(this.#model||console.error("No model found"),this.hasCredits)return e(...t);this.trigger("no.credits")}addBreadcrumb(e){this.#breadcrumb=[...this.#breadcrumb,e],this.trigger("change")}addMultipleBreadcrumb(e){this.#breadcrumb=[...this.#breadcrumb,...e],this.trigger("change")}trimBreadcrumb(e){e<=this.breadcrumb.length&&(this.breadcrumb.length-=e,this.triggerEvent("change"))}showMessage(e,t){this.#message={type:e,message:t},this.trigger("show.message"),globalThis.setTimeout(()=>{this.#message=void 0},2e3)}clear(){this.#model=void 0,this.#breadcrumb=[],this.overlay=!1,this.triggerEvent()}}t.Broker=r;t.LayoutBroker=new r}}),k.set("./controller",{hash:2803709794,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/base"),a=e("./store"),n=e("./view");class o extends r.ReactWidgetController{#store;createStore(){return this.#store=new a.StoreManager,this.#store}get Widget(){return n.Layout}}t.Controller=o}}),k.set("./store",{hash:4209388385,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var r=e("@beyond-js/reactive/model"),a=e("@aimpact/chat/wrapper"),n=e("./broker"),o=e("@beyond-js/kernel/texts"),s=e("beyond_context");class i extends r.ReactiveModel{#broker;get broker(){return this.#broker}get showCredits(){return this.#broker.showCredits}#texts=new o.CurrentTexts(s.module.specifier);get texts(){return this.#texts?.value}get model(){return this.#broker.model}get saved(){return this.#broker?.model?.saved}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),a.AppWrapper.on("change",this.listener),this.#broker=n.LayoutBroker,this.#broker.on("change",this.triggerEvent),this.#texts.on("change",this.triggerEvent),this.init()}init=async()=>{await a.AppWrapper.isReady,super.ready=!0};listener=()=>{}}t.StoreManager=i}}),k.set("./view/coins/alert",{hash:3955356505,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoinsAlert=function({show:e,onClose:t,texts:r}){return e?(r=r.coins.alert,a.default.createElement(n.AlertModal,{show:!0,buttonLabel:r.action,onConfirm:t,onClose:t},a.default.createElement("header",null,a.default.createElement("h3",null,r.title),a.default.createElement("p",null,r.description)))):null};var a=e("react"),n=e("pragmate-ui/modal")}}),k.set("./view/coins/coins-modal",{hash:3281594040,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoinsModal=function({store:t,show:e,onClose:r,texts:a}){if(!e)return null;const[,n]=i.default.useState(!1),[o,s]=i.default.useState();a=a.coins.modal;return i.default.createElement(c.ConfirmModal,{show:!0,className:"modal-sm modal-centered",centered:!0,actions:{confirm:{label:a.actions.confirm,variant:"primary"},cancel:{label:a.actions.cancel,variant:"primary",bordered:!0}},onConfirm:async()=>{try{n(!0);var e=await t.model.consumeCoins();if(!e.status)throw new Error({48:"NO_CREDITS"}[e.error.code]);r()}catch(e){s(a.errors.noCredits)}finally{n(!1)}},onCancel:r,onClose:r},i.default.createElement("header",null,i.default.createElement("h3",null,a.title),i.default.createElement(d.ErrorRenderer,{error:o,variant:"warning"}),i.default.createElement(d.Battery,{percent:"100",className:"lg"}),i.default.createElement("p",null,a.description)))};var i=e("react"),c=e("pragmate-ui/modal"),d=e("@aimpact/ailearn-app/components/ui")}}),k.set("./view/coins/credits",{hash:1755494759,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CreditsContainer=function(){const{store:t,toggleCoinsModal:e,texts:{coins:{header:r}}}=(0,g.useLayoutContext)(),[a,n]=u.default.useState(""),[,o]=u.default.useState(t.hasCredits),s=(0,u.useRef)(null),i="credits__container"+(t.broker.canConsumeCredits?"":" is-disabled"),c=t.broker.hasCredits?h.Chip:m.Button,d={className:"credits-action",onClick:void 0,variant:t.broker.hasCredits?"success":"primary",disabled:t.broker.hasCredits||!t.broker.canConsumeCredits},l=t.broker.hasCredits?r.actions.available:r.actions.require;(0,f.useBinder)([t.broker.model],e=>{s.current.classList.add("success--container"),n(r.messages[e]),o(t.broker.hasCredits)},"credits.change"),t.broker.hasCredits?d.className="success--chip":d.onClick=e;return u.default.createElement("div",{className:i,ref:s},u.default.createElement(b.AnimatedLabel,null,a),t.broker.hasCredits&&u.default.createElement(p.Battery,{percent:100}),u.default.createElement(c,{...d},l))};var u=e("react"),m=e("pragmate-ui/components"),h=e("pragmate-ui/chips"),p=e("@aimpact/ailearn-app/components/ui"),f=e("@beyond-js/react-18-widgets/hooks"),b=e("../components/animated-label"),g=e("../context")}}),k.set("./view/coins/notifications-bar",{hash:608402207,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationsBar=function({}){const{broker:e}=(0,u.useLayoutContext)()["store"],[t,r]=s.default.useState(!0),[a,n]=s.default.useState(void 0);if((0,m.useBinder)([e],()=>{n(e.message)},"show.message"),!a)return null;var o="notifications-bar center-items notifications--"+a?.type;return s.default.createElement(d.AnimatePresence,null,t&&s.default.createElement(l.Animated,{as:"div",className:o},s.default.createElement(i.HtmlWrapper,null,a.message),s.default.createElement(c.Icon,{className:"close-icon",icon:"close",onClick:()=>{n(void 0),r(!1)}})))};var s=e("react"),i=e("pragmate-ui/components"),c=e("pragmate-ui/icons"),d=e("framer-motion"),l=e("../components/animated"),u=e("../context"),m=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./view/components/animated-label",{hash:2096490113,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedLabel=function({children:e}){const[t,r]=a.default.useState(!!e);return a.default.useEffect(()=>{r(e),globalThis.setTimeout(()=>{r(!1)},2e3)},[e]),a.default.createElement(n.AnimatePresence,null,t&&a.default.createElement(n.motion.span,{layout:!0,initial:{opacity:0,width:"0"},animate:{opacity:1,transition:{duration:.3},width:"auto"},exit:{transition:{duration:.3,width:0},opacity:0}},e))};var a=e("react"),n=e("framer-motion")}}),k.set("./view/components/animated",{hash:796986304,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Animated=function({className:e,children:t,as:r="span"}){r=(0,n.motion)(r);return a.default.createElement(r,{layout:!0,className:e,initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{transition:{duration:.3,width:0},opacity:0}},t)};var a=e("react"),n=e("framer-motion")}}),k.set("./view/components/header",{hash:2400594431,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){const e=(0,d.useLayoutContext)()["store"],[t,r]=(e.saved&&e.hasCredits,i.default.useState(!!e.broker.model)),[a,n]=i.default.useState(),[o,s]=((0,u.useBinder)([c.hmr],()=>n(performance.now())),i.default.useState([]));return(0,u.useBinder)([e.broker],()=>{r(!!e.broker.model),s(e.broker.breadcrumb)}),i.default.createElement(c.NavbarHeader,{updated:a,breadcrumb:[,...o]},t&&i.default.createElement(l.CreditsContainer,null))};var i=e("react"),c=e("@aimpact/ailearn-app/components/navbar-header.code"),d=e("../context"),l=e("../coins/credits"),u=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./view/components/overlay-header",{hash:2194629961,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OverlayHeader=function(){var e=(0,n.useLayoutContext)()["store"];return r.default.createElement(a.NavbarHeader,{closable:!0,backlink:e.broker.backLink},!!e.broker.model&&r.default.createElement(o.CreditsContainer,null))};var r=e("react"),a=e("@aimpact/ailearn-app/components/navbar-header.code"),n=e("../context"),o=e("../coins/credits")}}),k.set("./view/context",{hash:772258609,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useLayoutContext=t.LayoutContext=void 0;var r=e("react");const a=t.LayoutContext=r.default.createContext({});t.useLayoutContext=()=>r.default.useContext(a)}}),k.set("./view/index",{hash:2146646064,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Layout=void 0;var h=e("react"),p=e("pragmate-ui/toast"),f=e("@beyond-js/react-18-widgets/hooks"),b=e("./context"),g=e("./components/header"),y=e("./coins/alert"),v=e("./coins/coins-modal"),C=e("./coins/notifications-bar"),k=e("./components/overlay-header");t.Layout=({store:e})=>{const[t,r]=(0,h.useState)(e.ready),[a,n]=h.default.useState(!1),[o,s]=h.default.useState(!1),[,i]=(0,h.useState)({});var c=()=>s(!o),d=()=>n(!a),l=e["texts"],u=((0,f.useBinder)([e],()=>r(e.ready)),(0,f.useBinder)([e.broker],c,"no.credits"),(0,f.useBinder)([e],()=>i({})),{store:e,texts:l,toggleCoinsModal:d,overlay:e.broker.overlay}),m=e.broker.overlay?k.OverlayHeader:g.Header;return h.default.createElement(h.default.Fragment,null,h.default.createElement(b.LayoutContext.Provider,{value:u},h.default.createElement("div",{className:"coins-layout__container"},h.default.createElement(m,null),h.default.createElement(C.NotificationsBar,null),h.default.createElement("main",null,h.default.createElement("beyond-layout-children",null),h.default.createElement(p.Toasts,null)))),t&&h.default.createElement(h.default.Fragment,null,h.default.createElement(y.CoinsAlert,{texts:l,show:o,onClose:c}),h.default.createElement(v.CoinsModal,{store:e,texts:l,show:a,onClose:d})))}}}),k.set("./view/preload",{hash:246890105,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Preload=function(){return React.createElement(React.Fragment,null)}}}),C.exports.descriptor=[{im:"./broker",from:"LayoutBroker",name:"LayoutBroker"},{im:"./controller",from:"Controller",name:"Controller"},{im:"./view/components/header",from:"Header",name:"Header"},{im:"./view/components/overlay-header",from:"OverlayHeader",name:"OverlayHeader"}],C.exports.process=function({require:e,prop:t,value:r}){!e&&"LayoutBroker"!==t||a("LayoutBroker",e?e("./broker").LayoutBroker:r),!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:r),!e&&"Header"!==t||a("Header",e?e("./view/components/header").Header:r),!e&&"OverlayHeader"!==t||a("OverlayHeader",e?e("./view/components/overlay-header").OverlayHeader:r)},a("__beyond_pkg",C),a("hmr",new function(){this.on=(e,t)=>C.hmr.on(e,t),this.off=(e,t)=>C.hmr.off(e,t)}),C.initialise(k)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9icm9rZXIudHMiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3L2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3L2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3L2NvaW5zL2NyZWRpdHMudHN4IiwiL3RzL3ZpZXcvY29pbnMvbm90aWZpY2F0aW9ucy1iYXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvb3ZlcmxheS1oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29udGV4dC50cyIsIi90cy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3L3ByZWxvYWQudHN4Il0sIm5hbWVzIjpbIkJyb2tlciIsInJlcXVpcmUiLCJSZWFjdGl2ZU1vZGVsIiwiI21vZGVsIiwibW9kZWwiLCJ0aGlzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIiNtZXNzYWdlIiwibWVzc2FnZSIsIiNicmVhZGNydW1iIiwiYnJlYWRjcnVtYiIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJ0cmlnZ2VyIiwiI3Nob3dDcmVkaXRzIiwic2hvd0NyZWRpdHMiLCIjb3ZlcmxheSIsIm92ZXJsYXkiLCIjY2FuQ29uc3VtZUNyZWRpdHMiLCJjYW5Db25zdW1lQ3JlZGl0cyIsIiNiYWNrTGluayIsImJhY2tMaW5rIiwiY29uc3RydWN0b3IiLCJzdXBlciIsImVuc3VyZUNyZWRpdHMiLCJiaW5kIiwiYWRkTW9kZWwiLCJpZCIsIm9uIiwib25MaXN0ZW4iLCJhc3NpZ25tZW50SWQiLCJzYXZlZCIsInRyaWdnZXJFdmVudCIsImNhbGxiYWNrIiwic3BlY3MiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRCcmVhZGNydW1iIiwiaXRlbXMiLCJhZGRNdWx0aXBsZUJyZWFkY3J1bWIiLCJ0cmltQnJlYWRjcnVtYiIsImNvdW50IiwibGVuZ3RoIiwic2hvd01lc3NhZ2UiLCJ0eXBlIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJ1bmRlZmluZWQiLCJjbGVhciIsImV4cG9ydHMiLCJMYXlvdXRCcm9rZXIiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIiNzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiX21vZGVsIiwiX3dyYXBwZXIiLCJfYnJva2VyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiI2Jyb2tlciIsImJyb2tlciIsIiN0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRleHRzIiwicmVhZHkiLCJBcHBXcmFwcGVyIiwibGlzdGVuZXIiLCJpbml0IiwiYXN5bmMiLCJhd2FpdCIsImlzUmVhZHkiLCJzaG93Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJfcmVhY3QiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIl9tb2RhbCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdG9yZSIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsIm1vZGFsIiwiQ29uZmlybU1vZGFsIiwiY2xhc3NOYW1lIiwiY2VudGVyZWQiLCJhY3Rpb25zIiwiY29uZmlybSIsImxhYmVsIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwiYW5zd2VyIiwiY29uc3VtZUNvaW5zIiwic3RhdHVzIiwiNDgiLCJjb2RlIiwiZSIsImVycm9ycyIsIm5vQ3JlZGl0cyIsIm9uQ2FuY2VsIiwiX3VpIiwiRXJyb3JSZW5kZXJlciIsIkJhdHRlcnkiLCJwZXJjZW50IiwidG9nZ2xlQ29pbnNNb2RhbCIsImhlYWRlciIsIl9jb250ZXh0IiwidXNlTGF5b3V0Q29udGV4dCIsInNldE1lc3NhZ2UiLCJzZXRIYXNDcmVkaXRzIiwicmVmIiwidXNlUmVmIiwiY2xzIiwiQ29udHJvbCIsIl9jaGlwcyIsIkNoaXAiLCJfY29tcG9uZW50cyIsIkJ1dHRvbiIsImF0dHJzIiwib25DbGljayIsImRpc2FibGVkIiwiYXZhaWxhYmxlIiwiX2hvb2tzIiwidXNlQmluZGVyIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1lc3NhZ2VzIiwiX2FuaW1hdGVkTGFiZWwiLCJBbmltYXRlZExhYmVsIiwic2V0U2hvdyIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJfYW5pbWF0ZWQiLCJBbmltYXRlZCIsImFzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbnMiLCJJY29uIiwiaWNvbiIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwibW90aW9uIiwic3BhbiIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2lkdGgiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIkNvbXBvbmVudCIsImhhc01vZGVsIiwic2V0SGFzTW9kZWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInNldEJyZWFkY3J1bWIiLCJfbmF2YmFySGVhZGVyIiwiaG1yIiwicGVyZm9ybWFuY2UiLCJub3ciLCJOYXZiYXJIZWFkZXIiLCJfY3JlZGl0cyIsIkNyZWRpdHNDb250YWluZXIiLCJjbG9zYWJsZSIsImJhY2tsaW5rIiwiTGF5b3V0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RvYXN0IiwiX2hlYWRlciIsIl9hbGVydCIsIl9jb2luc01vZGFsIiwiX25vdGlmaWNhdGlvbnNCYXIiLCJfb3ZlcmxheUhlYWRlciIsInNldFJlYWR5Iiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNob3dDb2luc0FsZXJ0Iiwic2V0U2hvd0NvaW5zQWxlcnQiLCJzZXRVcGRhdGUiLCJ0b2dnbGVDb2luc0FsZXJ0IiwiSGVhZGVyQ29udHJvbCIsIk92ZXJsYXlIZWFkZXIiLCJIZWFkZXIiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiTm90aWZpY2F0aW9uc0JhciIsIlRvYXN0cyIsIkNvaW5zQWxlcnQiLCJDb2luc01vZGFsIiwiUmVhY3QiXSwibWFwcGluZ3MiOiIycUVBTWFBLFVBTmJDLEVBQUEsMkJBQUEsRUFNNEJDLGNBQzNCQyxPQUNBQyxZQUNDLE9BQU9DLEtBQUtGLE1BQ2IsQ0FDQUcsaUJBQ0MsT0FBcUMsRUFBOUJELEtBQUtGLFFBQVFJLFNBQVNDLEtBQzlCLENBRUFDLFNBQ0FDLGNBQ0MsT0FBT0wsS0FBS0ksUUFDYixDQUVBRSxZQUFjLEdBQ2RDLGlCQUNDLE9BQU9QLEtBQUtNLFdBQ2IsQ0FFQUMsZUFBZUMsR0FDZCxHQUFJLENBQUNDLE1BQU1DLFFBQVFGLENBQUssRUFBRyxNQUFNLElBQUlHLE1BQU0sd0NBQXdDLEVBQ25GWCxLQUFLTSxZQUFjRSxFQUNuQlIsS0FBS1ksUUFBUSxRQUFRLENBQ3RCLENBRUFDLGFBQ0FDLGtCQUNDLE9BQU9kLEtBQUthLFlBQ2IsQ0FFQUUsU0FDQUMsY0FDQyxPQUFPaEIsS0FBS2UsUUFDYixDQUNBQyxZQUFZUixHQUNQUixLQUFLZSxXQUFhUCxJQUN0QlIsS0FBS2UsU0FBV1AsRUFFaEJSLEtBQUtZLFFBQVEsUUFBUSxFQUN0QixDQU9BSyxtQkFDQUMsd0JBQ0MsT0FBT2xCLEtBQUtGLFFBQVFvQixtQkFBcUJsQixLQUFLaUIsa0JBQy9DLENBRUFDLHNCQUFzQlYsR0FDakJSLEtBQUtpQixxQkFBdUJULElBQ2hDUixLQUFLaUIsbUJBQXFCVCxFQUMxQlIsS0FBS1ksUUFBUSxRQUFRLEVBQ3RCLENBQ0FPLFVBQ0FDLGVBQ0MsT0FBT3BCLEtBQUttQixTQUNiLENBRUFDLGFBQWFaLEdBQ1pSLEtBQUttQixVQUFZWCxFQUNqQlIsS0FBS1ksUUFBUSxRQUFRLENBQ3RCLENBQ0FTLGNBQ0NDLE1BQUssRUFFTHRCLEtBQUt1QixjQUFn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