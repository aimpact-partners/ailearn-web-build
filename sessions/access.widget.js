System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.2.0/model","@aimpact/chat-sdk@1.0.1/session","@aimpact/ailearn-app@0.1.0-dev.09/model/gclassroom","react@18.2.0","@aimpact/chat@1.0.2/shared/hooks","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.2/shared/components","pragmate-ui@1.0.0-beta.1/components","@beyond-js/kernel@0.1.9/routing"],function(s,e){var t,a,r,n,o,c,l,i,d,u,m,p,h,g,f,v;return s({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){n=e},function(e){o=e},function(e){c=e},function(e){l=e},function(e){i=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){h=e},function(e){g=e}],execute:function(){v=a.Bundle,(f=new v({module:{vspecifier:"@aimpact/ailearn-app@0.1.0-dev.09/sessions/access",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",n],["@aimpact/ailearn-sdk/core",o],["@beyond-js/reactive/model",c],["@aimpact/chat-sdk/session",l],["@aimpact/ailearn-app/model/gclassroom",i],["react",d],["@aimpact/chat/shared/hooks",u],["@beyond-js/react-18-widgets/hooks",m],["@aimpact/chat/shared/components",p],["pragmate-ui/components",h],["@beyond-js/kernel/routing",g]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-sessions-access",vspecifier:"@aimpact/ailearn-app@0.1.0-dev.09/sessions/access.widget",is:"page",route:"/sessions/access/${id}",layout:"chat-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.0-dev.09/sessions/access.widget"),(v=new Map).set("./controller",{hash:2823156176,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),s=e("./store"),r=e("./views");class n extends a.PageReactWidgetController{#store;createStore(){return this.#store=new s.StoreManager,this.#store}get Widget(){return r.View}show(){this.#store.load(this.uri.vars.get("id"))}}t.Controller=n}}),v.set("./store",{hash:407706767,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-sdk/core"),s=e("@beyond-js/reactive/model"),r=e("@aimpact/chat-sdk/session");class n extends s.ReactiveModel{#model;get model(){return this.#model}#found;get found(){return this.#found}#access;get access(){return this.#access}load=async e=>{this.#model&&this.#model.id!==e&&(this.#model=void 0),this.#model=new a.Session,this.#model.on("change",this.triggerEvent),e=await this.#model.load({id:e}),this.#access=!!e.users?.includes(r.sessionWrapper.userId),this.#found=!!e.lesson&&e.classRoomId,this.ready=!0};createChats=async()=>this.#model.access(r.sessionWrapper.user.token)}t.StoreManager=n}}),v.set("./store/index",{hash:774891343,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),s=e("@aimpact/ailearn-app/model/gclassroom");class r extends a.ReactiveModel{constructor(){super(),s.gclassroom.on("change",this.triggerEvent)}get error(){return s.gclassroom.error}get gclassroom(){return s.gclassroom}async validate(e,t){try{this.fetching=!0,await s.gclassroom.callback(e,t),this.fetching=!1,this.ready=!0}catch(e){console.error(e)}}}t.StoreManager=r}}),v.set("./views/_context",{hash:688727710,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useShareContext=t.ShareContext=void 0;var a=e("react");let s=t.ShareContext=a.default.createContext({});t.useShareContext=()=>a.default.useContext(s)}}),v.set("./views/empty-view",{hash:2796975375,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyView=void 0;var a=e("react"),s=e("./_context");t.EmptyView=()=>{var e=(0,s.useShareContext)().texts;return a.default.createElement("div",{className:"access__class"},a.default.createElement("img",{alt:"Shared class",src:"/assets/shared-class.png"}),a.default.createElement("span",{className:"access-details"},a.default.createElement("h1",null,e.empty.welcome),a.default.createElement("p",null,a.default.createElement("strong",null,e.empty.info),a.default.createElement("br",null),e.empty.action)))}}}),v.set("./views/index",{hash:1190909594,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){let[t,a]=o.default.useState(e.ready),[s,r]=(0,c.useTexts)(l.module.specifier),n;return(0,i.useBinder)([e],()=>a(e.ready)),t&&s?(n=e.found?m.default:p.EmptyView,o.default.createElement(u.ShareContext.Provider,{value:{texts:r,store:e}},o.default.createElement(n,null))):o.default.createElement(d.PreloadScreen,null)};var o=e("react"),c=e("@aimpact/chat/shared/hooks"),l=e("beyond_context"),i=e("@beyond-js/react-18-widgets/hooks"),d=e("@aimpact/chat/shared/components"),u=e("./_context"),m=e("./landing"),p=e("./empty-view")}}),v.set("./views/landing",{hash:371531143,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){let{texts:e,store:t}=(0,p.useShareContext)(),a=t.model,[s,r]=i.default.useState(!1),[,n]=i.default.useState(""),o=async()=>{try{var e;t.access||(r(!0),e=await t.createChats(),r(!1),e.status?u.routing.pushState("/chat/"+e.data.chatId):console.error(e.message))}catch(e){console.error(e.message)}},c=t.access?i.default.createElement(i.default.Fragment,null,i.default.createElement("h1",null,a.lesson.name.toUpperCase()),i.default.createElement("strong",null,e.accessed)):i.default.createElement(i.default.Fragment,null,i.default.createElement("h1",null,e.welcome),i.default.createElement("p",null,i.default.createElement("strong",null,a.lesson.name.toUpperCase()," "),e.shared,i.default.createElement("br",null),e.save)),l=void 0;return t.access||(l=m.sessionWrapper.logged?i.default.createElement(d.Button,{variant:"primary",onClick:o,icon:"save",loading:s,label:e.action}):i.default.createElement(d.Button,{icon:"google",onClick:async()=>{try{r(!0);var e=await m.sessionWrapper.signInWithGoogle();e.status?o():"POPUP_CLOSED_BY_USER"===e.error?r(!1):n("Error trying to login with Google")}catch(e){console.error(e.message)}},loading:s,label:"Google Sign In"})),i.default.createElement("div",{className:"access__class"},i.default.createElement("img",{alt:"Shared class",src:"/assets/shared-class.png"}),i.default.createElement("span",{className:"access-details"},c,l))};var i=e("react"),d=e("pragmate-ui/components"),u=e("@beyond-js/kernel/routing"),m=e("@aimpact/chat-sdk/session"),p=e("./_context")}}),f.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],f.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||s("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||s("View",e?e("./views/index").View:a)},s("__beyond_pkg",f),s("hmr",new function(){this.on=(e,t)=>f.hmr.on(e,t),this.off=(e,t)=>f.hmr.off(e,t)}),f.initialise(v)}}});