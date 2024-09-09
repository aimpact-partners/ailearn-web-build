System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/chat-sdk@1.1.0/wrapper","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.2.0/model","react@18.2.0","@aimpact/ailearn-app@0.1.6-dev.20/components/navbar-header.code","@aimpact/ailearn-app@0.1.6-dev.20/config","@aimpact/ailearn-app@0.1.6-dev.20/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@1.0.0-beta.6/components","pragmate-ui@1.0.0-beta.6/list"],function(n,e){"use strict";var t,a,r,s,i,o,l,c,d,u,m,p,f,h,v,g;return n({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){s=e},function(e){i=e},function(e){o=e},function(e){l=e},function(e){c=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){f=e},function(e){h=e}],execute:function(){g=a.Bundle,(v=new g({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.20/assignments/student/list",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",s],["@aimpact/chat-sdk/wrapper",i],["@aimpact/ailearn-sdk/core",o],["@beyond-js/reactive/model",l],["react",c],["@aimpact/ailearn-app/components/navbar-header.code",d],["@aimpact/ailearn-app/config",u],["@aimpact/ailearn-app/components/ui",m],["@beyond-js/react-18-widgets/hooks",p],["pragmate-ui/components",f],["pragmate-ui/list",h]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-assignments-student-list",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.20/assignments/student/list.widget",is:"page",route:"/assignments/${id}/student/list",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.20/assignments/student/list.widget"),(g=new Map).set("./controller",{hash:2972444672,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),r=e("./views");class s extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return r.View}show(){this.#store.load(this.uri.vars.get("id"))}hide(){}}t.Controller=s}}),g.set("./store",{hash:3790138872,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/chat-sdk/wrapper"),n=e("@aimpact/ailearn-sdk/core");class r extends e("@beyond-js/reactive/model").ReactiveModel{#model;get model(){return this.#model}load=async e=>{try{this.#model&&this.#model.id!==e&&(this.#model.off("change",this.triggerEvent),this.#model=void 0),this.#model=new n.Classroom({id:e}),this.#model.on("change",this.triggerEvent),await this.#model.load({id:e}),this.ready=!0}catch(e){"ERROR_DATA_QUERY"===e&&(this.error=!0,this.ready=!0)}};async getLessonData(t){await t.load(),a.AppWrapper.chats.items.filter(e=>{if(e.metadata&&e.metadata.lesson?.id===t.id)return!0})}}t.StoreManager=r}}),g.set("./views/context",{hash:3962165658,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useListContext=t.ListContext=void 0;var a=e("react");const n=t.ListContext=a.default.createContext({});t.useListContext=()=>a.default.useContext(n)}}),g.set("./views/header",{hash:2410908791,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){var{}=(0,r.useListContext)();return n.default.createElement(a.NavbarHeader,{breadcrumb:[["Assignment List"]]})};var a=e("@aimpact/ailearn-app/components/navbar-header.code"),n=e("react"),r=e("./context")}}),g.set("./views/index",{hash:3893191733,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=h.default.useState(e.ready),[n,r]=h.default.useState(e.error),[s,i]=(0,g.useTexts)(v.module.specifier),[,o]=h.default.useState(e?.model?.assignments);var l,c;return(0,g.useBinder)([e],()=>{a(e.ready),r(e.error),o(e.model?.assignments)}),t&&s?n?h.default.createElement(d.NotFound,{texts:i,textsReady:s}):(c=(l=e.model.assignments)?.length?p.List:u.EmptyList,h.default.createElement(f.ListContext.Provider,{value:{store:e,items:l,texts:i,fetching:e.fetching}},h.default.createElement(m.Header,null),h.default.createElement("main",{className:"page__container"},h.default.createElement(d.HeaderCard,{option:"light",title:e.model.name},h.default.createElement("p",{className:"header-container__subtitle"}," ",i.description," ")),h.default.createElement(d.SubDivider,{title:i.dividerTitle}),h.default.createElement(c,null)))):h.default.createElement(d.PageLoader,{fetching:!0})};var d=e("@aimpact/ailearn-app/components/ui"),u=e("./list/empty"),m=e("./header"),p=e("./list"),f=e("./context"),h=e("react"),v=e("beyond_context"),g=e("@beyond-js/react-18-widgets/hooks")}}),g.set("./views/list/LessonInfo",{hash:1155994592,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LessonInfo=function({assignmentId:a,topics:e}){return a&&e?n.default.createElement("section",{className:"item__actions"},e.map(e=>{var t=`/assignments/dashboard/${a}.${e.id}/classwork`;return n.default.createElement(r.Link,{key:t,href:t},e.title)})):null};var n=e("react"),r=e("pragmate-ui/components")}}),g.set("./views/list/empty",{hash:1244498565,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,r.useListContext)().texts;return a.default.createElement(n.EmptyCard,{text:e.empty,icon:"info"})};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),r=e("../context")}}),g.set("./views/list/index",{hash:253696287,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function(){var e=useListContext().items;return a.default.createElement(r.List,{className:"list__container",items:e,control:n.Item})};var a=e("react"),n=e("./item"),r=e("pragmate-ui/list")}}),g.set("./views/list/item",{hash:2807436029,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({data:e}){var t=(0,s.useListContext)().texts,a=["conversation","debate","character-talk","content-theory"].includes(e.id)||"multiple-choice"!==e.id?e.id:"assessment",n={image:e.module.picture};return r.default.createElement(i.Card,{data:n,link:"/assignments/"+a},r.default.createElement(i.CardContent,{option:"column",className:"theme-0"},r.default.createElement("h3",null,"hola"),r.default.createElement("section",{className:"card-footer__container"},r.default.createElement("div",{className:"card__text-content"},r.default.createElement("h4",{className:"card__title"},e.module.title),r.default.createElement("span",{className:"card__subtitle p2"},e.module.description))),r.default.createElement("div",{className:"card__footer-actions"},r.default.createElement("hr",{className:"card__divider"}),r.default.createElement("div",{className:"card__details"},r.default.createElement("span",{className:"card__text-hover p2"},t.moduleAccess)))))};var r=e("react"),s=e("../context"),i=e("@aimpact/ailearn-app/components/ui")}}),v.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],v.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",v),n("hmr",new function(){this.on=(e,t)=>v.hmr.on(e,t),this.off=(e,t)=>v.hmr.off(e,t)}),v.initialise(g)}}});