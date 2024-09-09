System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.2.0/model","@aimpact/chat-sdk@1.1.0/session","@aimpact/ailearn-app@0.1.6-dev.20/model/gclassroom","react@18.2.0","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.1.6-dev.20/components/ui","pragmate-ui@1.0.0-beta.6/components","@beyond-js/kernel@0.1.9/routing"],function(s,e){"use strict";var t,a,r,n,o,l,c,i,d,u,m,p,g,f,h;return s({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){n=e},function(e){o=e},function(e){l=e},function(e){c=e},function(e){i=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){g=e}],execute:function(){h=a.Bundle,(f=new h({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.20/sessions/access",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",n],["@aimpact/ailearn-sdk/core",o],["@beyond-js/reactive/model",l],["@aimpact/chat-sdk/session",c],["@aimpact/ailearn-app/model/gclassroom",i],["react",d],["@beyond-js/react-18-widgets/hooks",u],["@aimpact/ailearn-app/components/ui",m],["pragmate-ui/components",p],["@beyond-js/kernel/routing",g]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-sessions-access",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.20/sessions/access.widget",is:"page",route:"/sessions/access/${id}",layout:"chat-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.20/sessions/access.widget"),(h=new Map).set("./controller",{hash:2823156176,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),s=e("./store"),r=e("./views");class n extends a.PageReactWidgetController{#store;createStore(){return this.#store=new s.StoreManager,this.#store}get Widget(){return r.View}show(){this.#store.load(this.uri.vars.get("id"))}}t.Controller=n}}),h.set("./store",{hash:407706767,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-sdk/core"),s=e("@beyond-js/reactive/model"),r=e("@aimpact/chat-sdk/session");class n extends s.ReactiveModel{#model;get model(){return this.#model}#found;get found(){return this.#found}#access;get access(){return this.#access}load=async e=>{this.#model&&this.#model.id!==e&&(this.#model=void 0),this.#model=new a.Session,this.#model.on("change",this.triggerEvent),e=await this.#model.load({id:e}),this.#access=!!e.users?.includes(r.sessionWrapper.userId),this.#found=!!e.lesson&&e.classRoomId,this.ready=!0};createChats=async()=>this.#model.access(r.sessionWrapper.user.token)}t.StoreManager=n}}),h.set("./store/index",{hash:774891343,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),s=e("@aimpact/ailearn-app/model/gclassroom");class r extends a.ReactiveModel{constructor(){super(),s.gclassroom.on("change",this.triggerEvent)}get error(){return s.gclassroom.error}get gclassroom(){return s.gclassroom}async validate(e,t){try{this.fetching=!0,await s.gclassroom.callback(e,t),this.fetching=!1,this.ready=!0}catch(e){console.error(e)}}}t.StoreManager=r}}),h.set("./views/_context",{hash:688727710,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useShareContext=t.ShareContext=void 0;var a=e("react");const s=t.ShareContext=a.default.createContext({});t.useShareContext=()=>a.default.useContext(s)}}),h.set("./views/empty-view",{hash:2796975375,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyView=void 0;var a=e("react"),s=e("./_context");t.EmptyView=()=>{var e=(0,s.useShareContext)().texts;return a.default.createElement("div",{className:"access__class"},a.default.createElement("img",{alt:"Shared class",src:"/assets/shared-class.png"}),a.default.createElement("span",{className:"access-details"},a.default.createElement("h1",null,e.empty.welcome),a.default.createElement("p",null,a.default.createElement("strong",null,e.empty.info),a.default.createElement("br",null),e.empty.action)))}}}),h.set("./views/index",{hash:1510800734,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=o.default.useState(e.ready),[s,r]=(0,l.useTexts)(c.module.specifier);var n;return(0,l.useBinder)([e],()=>a(e.ready)),t&&s?(n=e.found?u.default:m.EmptyView,o.default.createElement(d.ShareContext.Provider,{value:{texts:r,store:e}},o.default.createElement(n,null))):o.default.createElement(i.PageLoader,{fetching:!0})};var o=e("react"),l=e("@beyond-js/react-18-widgets/hooks"),c=e("beyond_context"),i=e("@aimpact/ailearn-app/components/ui"),d=e("./_context"),u=e("./landing"),m=e("./empty-view")}}),h.set("./views/landing",{hash:371531143,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const{texts:e,store:t}=(0,p.useShareContext)(),a=t.model,[s,r]=i.default.useState(!1),[,n]=i.default.useState(""),o=async()=>{try{var e;t.access||(r(!0),e=await t.createChats(),r(!1),e.status?u.routing.pushState("/chat/"+e.data.chatId):console.error(e.message))}catch(e){console.error(e.message)}},l=t.access?i.default.createElement(i.default.Fragment,null,i.default.createElement("h1",null,a.lesson.name.toUpperCase()),i.default.createElement("strong",null,e.accessed)):i.default.createElement(i.default.Fragment,null,i.default.createElement("h1",null,e.welcome),i.default.createElement("p",null,i.default.createElement("strong",null,a.lesson.name.toUpperCase()," "),e.shared,i.default.createElement("br",null),e.save));let c=void 0;return t.access||(c=m.sessionWrapper.logged?i.default.createElement(d.Button,{variant:"primary",onClick:o,icon:"save",loading:s,label:e.action}):i.default.createElement(d.Button,{icon:"google",onClick:async()=>{try{r(!0);var e=await m.sessionWrapper.signInWithGoogle();e.status?o():"POPUP_CLOSED_BY_USER"===e.error?r(!1):n("Error trying to login with Google")}catch(e){console.error(e.message)}},loading:s,label:"Google Sign In"})),i.default.createElement("div",{className:"access__class"},i.default.createElement("img",{alt:"Shared class",src:"/assets/shared-class.png"}),i.default.createElement("span",{className:"access-details"},l,c))};var i=e("react"),d=e("pragmate-ui/components"),u=e("@beyond-js/kernel/routing"),m=e("@aimpact/chat-sdk/session"),p=e("./_context")}}),f.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],f.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||s("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||s("View",e?e("./views/index").View:a)},s("__beyond_pkg",f),s("hmr",new function(){this.on=(e,t)=>f.hmr.on(e,t),this.off=(e,t)=>f.hmr.off(e,t)}),f.initialise(h)}}});