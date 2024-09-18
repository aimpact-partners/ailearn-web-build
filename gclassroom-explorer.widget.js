System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/base","@aimpact/ailearn-app@0.1.6-dev.36/model/gclassroom","@beyond-js/reactive@1.2.0/model","@aimpact/chat-sdk@1.2.0/core","dayjs@1.11.13","react@18.2.0","pragmate-ui@1.0.0-beta.6/icons","pragmate-ui@1.0.0-beta.6/components","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.1.6-dev.36/model/wrapper","@beyond-js/kernel@0.1.9/routing"],function(a,e){"use strict";var t,r,s,o,n,i,l,c,d,u,m,p,f,g,y,v;return a({Controller:void 0,Explorer:void 0}),{setters:[function(e){t=e},function(e){r=e},function(e){s=e},function(e){o=e},function(e){n=e},function(e){i=e},function(e){l=e},function(e){c=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){f=e},function(e){g=e}],execute:function(){v=r.Bundle,(y=new v({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.36/gclassroom-explorer",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",s],["@beyond-js/react-18-widgets/base",o],["@aimpact/ailearn-app/model/gclassroom",n],["@beyond-js/reactive/model",i],["@aimpact/chat-sdk/core",l],["dayjs",c],["react",d],["pragmate-ui/icons",u],["pragmate-ui/components",m],["@beyond-js/react-18-widgets/hooks",p],["@aimpact/ailearn-app/model/wrapper",f],["@beyond-js/kernel/routing",g]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-gclassroom-explorer",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.36/gclassroom-explorer.widget"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.36/gclassroom-explorer.widget"),(v=new Map).set("./controller",{hash:4293631984,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/base"),a=e("./store"),s=e("./views");class o extends r.ReactWidgetController{#store;createStore(){return this.#store=new a.StoreManager,this.#store}get Widget(){return s.Explorer}}t.Controller=o}}),v.set("./store",{hash:699880654,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var r=e("@beyond-js/reactive/model"),a=e("@aimpact/ailearn-app/model/gclassroom"),s=e("dayjs");class o extends r.ReactiveModel{get isReady(){return a.gclassroom.isReady}#items=new Map;get items(){return[...a.gclassroom.classes.values()]}#lastTime;constructor(){super(),a.gclassroom.on("change",this.triggerEvent),this.#init()}loadClasses=async()=>{this.fetching=!0,await a.gclassroom.courses(),this.fetching=!1};async#init(){var e=(0,s.default)();a.gclassroom.lastClassesQueryTime&&a.gclassroom.classes.size?(this.ready=!0,5<e.diff(a.gclassroom.lastClassesQueryTime,"minutes")&&this.loadClasses()):(await this.loadClasses(),this.ready=!0)}}t.StoreManager=o}}),v.set("./views/context",{hash:825742320,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useExplorerContext=t.ExplorerContext=void 0;var r=e("react");const a=t.ExplorerContext=r.default.createContext({});t.useExplorerContext=()=>r.default.useContext(a)}}),v.set("./views/empty",{hash:2813385547,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyExplorer=function({}){return r.default.createElement("div",{className:"sidebar__empty"},r.default.createElement(a.Icon,{icon:"circle-exclamation"}),r.default.createElement("h4",null,"There are no items to show"))};var r=e("react"),a=e("pragmate-ui/icons")}}),v.set("./views/index",{hash:1285394067,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Explorer=function({store:e}){const[t,r]=(0,y.useTexts)(g.module.specifier),[,a]=m.default.useState(e.fetching),[s,o]=m.default.useState(e.ready),n=((0,y.useBinder)([e],()=>{o(e.ready),a(e.fetching)}),t&&f.gclassroom.ready&&s);var i;return n?(i=e.items.length?u.List:l.EmptyExplorer,m.default.createElement(c.ExplorerContext.Provider,{value:{store:e,texts:r}},m.default.createElement("article",null,m.default.createElement("header",{className:"aside__top"},m.default.createElement("h3",null,r.title),m.default.createElement(d.IconButton,{onClick:e.loadClasses,variant:"default",className:"circle",icon:"refresh"})),m.default.createElement(i,null)))):m.default.createElement(p.Spinner,{active:!0,type:"primary"})};var l=e("./empty"),c=e("./context"),d=e("pragmate-ui/icons"),u=e("./list"),m=e("react"),p=e("pragmate-ui/components"),f=e("@aimpact/ailearn-app/model/gclassroom"),g=e("beyond_context"),y=e("@beyond-js/react-18-widgets/hooks")}}),v.set("./views/items/actions",{hash:4062573251,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ItemActions=function({}){return null}}}),v.set("./views/items/index",{hash:3797049068,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0,e("@aimpact/ailearn-app/model/wrapper");var r=e("./actions"),a=e("pragmate-ui/components"),s=e("react"),o=e("@beyond-js/kernel/routing");t.Item=({item:e})=>{var{}=o.routing.uri,t="any"===e.id;return s.default.createElement("li",{key:e.id,className:"sidebar-item "+(t?"current":"")},s.default.createElement(a.Link,{href:`/assignments/${e.id}/student/list`},e.name),s.default.createElement(r.ItemActions,{item:e,chatId:"any",isCurrent:t}))}}}),v.set("./views/list",{hash:2807483691,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function({}){const e=(0,o.useExplorerContext)().store,[,t]=a.default.useState(e.items),r=((0,s.useBinder)([e],()=>t(e.items)),e.items.map(e=>a.default.createElement(n.Item,{item:e,key:e.id})));return a.default.createElement("ul",{className:"sidebar__list"},r)};var a=e("react"),s=e("@beyond-js/react-18-widgets/hooks"),o=e("./context"),n=e("./items")}}),y.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"Explorer",name:"Explorer"}],y.exports.process=function({require:e,prop:t,value:r}){!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:r),!e&&"Explorer"!==t||a("Explorer",e?e("./views/index").Explorer:r)},a("__beyond_pkg",y),a("hmr",new function(){this.on=(e,t)=>y.hmr.on(e,t),this.off=(e,t)=>y.hmr.off(e,t)}),y.initialise(v)}}});