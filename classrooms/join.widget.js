System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.2.0/model","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/kernel@0.1.9/texts","@aimpact/chat-sdk@1.2.0/session","react@18.2.0","framer-motion@10.18.0","@aimpact/ailearn-app@0.1.7/components/ui","@beyond-js/kernel@0.1.9/routing","pragmate-ui@1.0.0-beta.6/code-verification","pragmate-ui@1.0.0-beta.6/components","pragmate-ui@1.0.0-beta.6/form","pragmate-ui@1.0.0-beta.6/image","pragmate-ui@1.0.0-beta.6/toast","@aimpact/ailearn-app@0.1.7/components/navbar-header.code","@aimpact/ailearn-app@0.1.7/config","@beyond-js/react-18-widgets@1.1.2/hooks"],function(r,e){"use strict";var t,a,n,o,i,s,c,d,l,m,u,p,g,f,y,v,h,b,w,x,j,k;return r({Controller:void 0,TokenForm:void 0,Header:void 0,View:void 0,Ready:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){o=e},function(e){i=e},function(e){s=e},function(e){c=e},function(e){d=e},function(e){l=e},function(e){m=e},function(e){u=e},function(e){p=e},function(e){g=e},function(e){f=e},function(e){y=e},function(e){v=e},function(e){h=e},function(e){b=e},function(e){w=e},function(e){x=e}],execute:function(){k=a.Bundle,(j=new k({module:{vspecifier:"@aimpact/ailearn-app@0.1.7/classrooms/join",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",o],["@beyond-js/reactive/model",i],["@aimpact/ailearn-sdk/core",s],["@beyond-js/kernel/texts",c],["@aimpact/chat-sdk/session",d],["react",l],["framer-motion",m],["@aimpact/ailearn-app/components/ui",u],["@beyond-js/kernel/routing",p],["pragmate-ui/code-verification",g],["pragmate-ui/components",f],["pragmate-ui/form",y],["pragmate-ui/image",v],["pragmate-ui/toast",h],["@aimpact/ailearn-app/components/navbar-header.code",b],["@aimpact/ailearn-app/config",w],["@beyond-js/react-18-widgets/hooks",x]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-classroom-join",vspecifier:"@aimpact/ailearn-app@0.1.7/classrooms/join.widget",is:"page",route:"/classrooms/join",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.7/classrooms/join.widget"),(k=new Map).set("./controller",{hash:198384358,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),r=e("./views"),n=e("./store");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return r.View}show(){this.#store.load(this.uri.qs.get("code"))}hide(){this.#store.clear()}}t.Controller=o}}),k.set("./store",{hash:3102642359,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),r=e("@aimpact/ailearn-sdk/core"),n=e("@beyond-js/kernel/texts"),o=e("beyond_context"),i=e("@aimpact/chat-sdk/session");class s extends a.ReactiveModel{#model;get model(){return this.#model}get TOTAL_CODES(){return 7}#code;get code(){return this.#code}get validCode(){return this.#code&&this.#code.length===this.TOTAL_CODES}#texts=new n.CurrentTexts(o.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.#texts.on("change",this.triggerEvent),this.#model=new r.Classroom({})}load(e){e&&(this.#code=e),super.ready=!0}clear(){super.ready=!1}async loadUser(){await i.sessionWrapper.user.load()}}t.StoreManager=s}}),k.set("./views/animated-div",{hash:2258000075,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedDiv=function({children:e,cls:t}={children:null,cls:""}){return a.createElement(r.motion.div,{className:t,initial:{opacity:0},animate:{opacity:1,transition:{duration:.3,delay:.3,width:"auto"},y:0},exit:{transition:{duration:.3},opacity:0}},e)};var a=e("react"),r=e("framer-motion")}}),k.set("./views/context",{hash:4056540268,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useJoinContext=t.JoinContext=void 0;var a=e("react");const r=t.JoinContext=a.default.createContext({});t.useJoinContext=()=>a.default.useContext(r)}}),k.set("./views/form",{hash:4071157769,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.TokenForm=function(){const{texts:a,store:e,setJoined:r}=(0,v.useJoinContext)(),[n,t]=y.useState(e.code??""),[o,i]=y.useState(""),[,s]=y.useState("error"),c=7!==n.length;return y.createElement("div",{className:"token-page__container"},y.createElement(p.Form,{onSubmit:async()=>{try{var t=await e.model.join({code:n});"PENDING"===t.data.status?(f.toast.success(a.messages.pending),r(!0)):(await e.loadUser(),f.toast.success(a.messages.success),l.routing.pushState("/classrooms/view/"+t.data.classroom.id))}catch(e){console.error(e),t=["ALREADY_WAITING","ALREADY_MEMBER"].includes(e?.message)?"warning":"danger",s(t),i(a.errors[e?.message?.toString()]??a.errors.ERROR_PUBLISHING)}},className:"token-form__container"},y.createElement("header",null,y.createElement(g.Image,{className:"animate glow delay-1",src:"/assets/RVD.AI.Branding.png",alt:"RVD.AI"}),y.createElement("h1",{className:"animate glow delay-2"},a.title),y.createElement("span",{className:"p1"},a.form.subtitle)),y.createElement(d.ErrorRenderer,{error:o}),y.createElement(m.InputCode,{length:e.TOTAL_CODES,value:n,name:"name",type:"text",onCodeFull:e=>{t(e),i("")},required:!0}),y.createElement(u.Button,{disabled:c,variant:"primary",type:"submit"},a.action.join)),y.createElement("div",{className:"token-info__container flex-container flex-column text-center"},y.createElement("p",null,a.info.help)))};var d=e("@aimpact/ailearn-app/components/ui"),l=e("@beyond-js/kernel/routing"),m=e("pragmate-ui/code-verification"),u=e("pragmate-ui/components"),p=e("pragmate-ui/form"),g=e("pragmate-ui/image"),f=e("pragmate-ui/toast"),y=e("react"),v=e("./context")}}),k.set("./views/header",{hash:1987354350,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){var e=(0,n.useJoinContext)().texts;return a.createElement("section",null,a.createElement(r.NavbarHeader,{breadcrumb:[[e.breadcrumb.classrooms,"/classrooms/list"],[e.breadcrumb.join,""]]}))};var a=e("react"),r=e("@aimpact/ailearn-app/components/navbar-header.code"),n=e("./context")}}),k.set("./views/index",{hash:939369968,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=s.useState(e.ready),[r,n]=((0,l.useBinder)([e],()=>a(e.ready)),s.useState(!1));var o,i;return t?(o=r?u.Ready:m.TokenForm,i={texts:e.texts,joined:r,setJoined:n,store:e},s.createElement(c.JoinContext.Provider,{value:i},s.createElement(o,null))):s.createElement(d.PageLoader,{fetching:!0})};var s=e("react"),c=e("./context"),d=e("@aimpact/ailearn-app/components/ui"),l=e("@beyond-js/react-18-widgets/hooks"),m=e("./form"),u=e("./ready")}}),k.set("./views/ready",{hash:661222086,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Ready=function({}){var{title:e,description:t}=(0,n.useJoinContext)().texts.ready;return a.createElement(r.PageContainer,{className:"ready-container"},a.createElement(o.AnimatedDiv,null,a.createElement("h3",null,e),a.createElement("span",null,t)))};var a=e("react"),r=e("@aimpact/ailearn-app/components/ui"),n=e("./context"),o=e("./animated-div")}}),j.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/form",from:"TokenForm",name:"TokenForm"},{im:"./views/header",from:"Header",name:"Header"},{im:"./views/index",from:"View",name:"View"},{im:"./views/ready",from:"Ready",name:"Ready"}],j.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:a),!e&&"TokenForm"!==t||r("TokenForm",e?e("./views/form").TokenForm:a),!e&&"Header"!==t||r("Header",e?e("./views/header").Header:a),!e&&"View"!==t||r("View",e?e("./views/index").View:a),!e&&"Ready"!==t||r("Ready",e?e("./views/ready").Ready:a)},r("__beyond_pkg",j),r("hmr",new function(){this.on=(e,t)=>j.hmr.on(e,t),this.off=(e,t)=>j.hmr.off(e,t)}),j.initialise(k)}}});