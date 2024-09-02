System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.2.0/model","react@18.2.0","@aimpact/ailearn-app@0.1.6-dev.16/components/navbar-header.code","@aimpact/ailearn-app@0.1.6-dev.16/config","@aimpact/ailearn-app@0.1.6-dev.16/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks"],function(a,e){var t,n,r,i,s,o,l,d,c,u,m,p;return a({Controller:void 0,Header:void 0,View:void 0}),{setters:[function(e){t=e},function(e){n=e},function(e){r=e},function(e){i=e},function(e){s=e},function(e){o=e},function(e){l=e},function(e){d=e},function(e){c=e},function(e){u=e}],execute:function(){p=n.Bundle,(m=new p({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.16/assignments/all-in-one",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",i],["@beyond-js/reactive/model",s],["react",o],["@aimpact/ailearn-app/components/navbar-header.code",l],["@aimpact/ailearn-app/config",d],["@aimpact/ailearn-app/components/ui",c],["@beyond-js/react-18-widgets/hooks",u]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-assignments-all-in-one",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.16/assignments/all-in-one.widget",is:"page",route:"/assignments/${assignmentId}/all-in-one/${id}",layout:"chat-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.16/assignments/all-in-one.widget"),(p=new Map).set("./controller",{hash:3286864425,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var n=e("@beyond-js/react-18-widgets/page"),a=e("./store"),r=e("./views");class i extends n.PageReactWidgetController{#store;createStore(){return this.#store=new a.StoreManager,this.#store}get Widget(){return r.View}show(){this.#store.load(this.uri.vars.get("assignmentId"),this.uri.vars.get("id"))}hide(){}}t.Controller=i}}),p.set("./store",{hash:2012117495,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0,e=e("@beyond-js/reactive/model");class n extends e.ReactiveModel{#model;get model(){return this.#model}#items;get items(){return this.#items}#paramsUri;get paramsUri(){return this.#paramsUri}async load(e,t){try{this.#paramsUri={assignmentId:e,activityId:t},this.ready=!0,this.triggerEvent()}catch(e){console.error(e)}}}t.StoreManager=n}}),p.set("./views/context",{hash:2629778794,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useAllInOneContext=t.AllInOneContext=void 0;var n=e("react");let a=t.AllInOneContext=n.default.createContext({});t.useAllInOneContext=()=>n.default.useContext(a)}}),p.set("./views/header",{hash:2504753476,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){var{texts:e,store:t}=(0,r.useAllInOneContext)();return a.default.createElement(a.default.Fragment,null,a.default.createElement(n.NavbarHeader,{breadcrumb:[["Assignment","/assignments/"+t.paramsUri.assignmentId],["Class","/assignments/"+t.paramsUri.assignmentId],["All"]]}),a.default.createElement("h4",{className:"h2 all-in-one__title"},e.title))};var n=e("@aimpact/ailearn-app/components/navbar-header.code"),a=e("react"),r=e("./context")}}),p.set("./views/index",{hash:283244611,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){let[t,n]=(0,o.useState)(!0),[a,,]=(0,o.useState)(e.items),[r,i]=(0,m.useTexts)(u.module.specifier),s;return(0,m.useBinder)([e],()=>{n(e.ready)}),t&&r?(s={texts:i,fetching:e.fetching,store:e,items:a},o.default.createElement(l.AllInOneContext.Provider,{value:s},o.default.createElement("div",null,o.default.createElement(d.Header,null),o.default.createElement("h1",null,"All In One")))):o.default.createElement(c.PageLoader,{fetching:!0})};var o=e("react"),l=e("./context"),d=e("./header"),c=e("@aimpact/ailearn-app/components/ui"),u=e("beyond_context"),m=e("@beyond-js/react-18-widgets/hooks")}}),m.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/header",from:"Header",name:"Header"},{im:"./views/index",from:"View",name:"View"}],m.exports.process=function({require:e,prop:t,value:n}){!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:n),!e&&"Header"!==t||a("Header",e?e("./views/header").Header:n),!e&&"View"!==t||a("View",e?e("./views/index").View:n)},a("__beyond_pkg",m),a("hmr",new function(){this.on=(e,t)=>m.hmr.on(e,t),this.off=(e,t)=>m.hmr.off(e,t)}),m.initialise(p)}}});