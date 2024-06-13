System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.1.12/model","react@18.2.0","@aimpact/ailearn-app@0.0.46.dev-20/components/navbar-header.code","@aimpact/ailearn-app@0.0.46.dev-20/config","@aimpact/chat@1.0.1/shared/components","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.1/shared/hooks"],function(a,e){"use strict";var t,n,r,s,i,o,l,d,c,u,m,p,h;return a({Controller:void 0,Header:void 0,View:void 0}),{setters:[function(e){t=e},function(e){n=e},function(e){r=e},function(e){s=e},function(e){i=e},function(e){o=e},function(e){l=e},function(e){d=e},function(e){c=e},function(e){u=e},function(e){m=e}],execute:function(){h=n.Bundle,(p=new h({module:{vspecifier:"@aimpact/ailearn-app@0.0.46.dev-20/assignments/all-in-one",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",s],["@beyond-js/reactive/model",i],["react",o],["@aimpact/ailearn-app/components/navbar-header.code",l],["@aimpact/ailearn-app/config",d],["@aimpact/chat/shared/components",c],["@beyond-js/react-18-widgets/hooks",u],["@aimpact/chat/shared/hooks",m]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-assignments-all-in-one",vspecifier:"@aimpact/ailearn-app@0.0.46.dev-20/assignments/all-in-one.widget",is:"page",route:"/assignments/${assignmentId}/all-in-one/${id}",layout:"chat-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.46.dev-20/assignments/all-in-one.widget"),(h=new Map).set("./controller",{hash:3286864425,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var n=e("@beyond-js/react-18-widgets/page"),a=e("./store"),r=e("./views");class s extends n.PageReactWidgetController{#store;createStore(){return this.#store=new a.StoreManager,this.#store}get Widget(){return r.View}show(){this.#store.load(this.uri.vars.get("assignmentId"),this.uri.vars.get("id"))}hide(){}}t.Controller=s}}),h.set("./store",{hash:2012117495,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;class n extends e("@beyond-js/reactive/model").ReactiveModel{#model;get model(){return this.#model}#items;get items(){return this.#items}#paramsUri;get paramsUri(){return this.#paramsUri}async load(e,t){try{this.#paramsUri={assignmentId:e,activityId:t},this.ready=!0,this.triggerEvent()}catch(e){console.error(e)}}}t.StoreManager=n}}),h.set("./views/context",{hash:2629778794,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useAllInOneContext=t.AllInOneContext=void 0;var n=e("react");const a=t.AllInOneContext=n.default.createContext({});t.useAllInOneContext=()=>n.default.useContext(a)}}),h.set("./views/header",{hash:2504753476,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){var{texts:e,store:t}=(0,r.useAllInOneContext)();return a.default.createElement(a.default.Fragment,null,a.default.createElement(n.NavbarHeader,{breadcrumb:[["Assignment","/assignments/"+t.paramsUri.assignmentId],["Class","/assignments/"+t.paramsUri.assignmentId],["All"]]}),a.default.createElement("h4",{className:"h2 all-in-one__title"},e.title))};var n=e("@aimpact/ailearn-app/components/navbar-header.code"),a=e("react"),r=e("./context")}}),h.set("./views/index",{hash:2162259060,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,n]=(0,o.useState)(!0),[a,,]=(0,o.useState)(e.items),[r,s]=(0,p.useTexts)(u.module.specifier);if((0,m.useBinder)([e],()=>{n(e.ready)}),!t||!r)return o.default.createElement(c.PreloadScreen,null);var i={texts:s,fetching:e.fetching,store:e,items:a};return o.default.createElement(l.AllInOneContext.Provider,{value:i},o.default.createElement("div",null,o.default.createElement(d.Header,null),o.default.createElement("h1",null,"All In One")))};var o=e("react"),l=e("./context"),d=e("./header"),c=e("@aimpact/chat/shared/components"),u=e("beyond_context"),m=e("@beyond-js/react-18-widgets/hooks"),p=e("@aimpact/chat/shared/hooks")}}),p.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/header",from:"Header",name:"Header"},{im:"./views/index",from:"View",name:"View"}],p.exports.process=function({require:e,prop:t,value:n}){!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:n),!e&&"Header"!==t||a("Header",e?e("./views/header").Header:n),!e&&"View"!==t||a("View",e?e("./views/index").View:n)},a("__beyond_pkg",p),a("hmr",new function(){this.on=(e,t)=>p.hmr.on(e,t),this.off=(e,t)=>p.hmr.off(e,t)}),p.initialise(h)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwibmFtZXMiOlsiX3BhZ2UiLCJyZXF1aXJlIiwiX3N0b3JlIiwiX3ZpZXdzIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCIjc3RvcmUiLCJjcmVhdGVTdG9yZSIsInRoaXMiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwiI21vZGVsIiwibW9kZWwiLCIjaXRlbXMiLCJpdGVtcyIsIiNwYXJhbXNVcmkiLCJwYXJhbXNVcmkiLCJhc3NpZ25tZW50SWQiLCJhY3Rpdml0eUlkIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiQWxsSW5PbmVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBbGxJbk9uZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidGV4dHMiLCJzdG9yZSIsIl9jb250ZXh0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX25hdmJhckhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwiX2hvb2tzMiIsInVzZVRleHRzIiwiX2JleW9uZF9jb250ZXh0IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX2hvb2tzIiwidXNlQmluZGVyIiwiX2NvbXBvbmVudHMiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsInZhbHVlIiwiX2hlYWRlciIsIkhlYWRlciJdLCJtYXBwaW5ncyI6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