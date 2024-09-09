System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-app@0.1.6-dev.20/main-layout.widget","@beyond-js/reactive@1.2.0/model","@aimpact/ailearn-sdk@1.0.0/learning-modules","@beyond-js/kernel@0.1.9/texts","react@18.2.0","pragmate-ui@1.0.0-beta.6/components","@aimpact/ailearn-app@0.1.6-dev.20/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.1.6-dev.20/components/module-card","@aimpact/ailearn-app@0.1.6-dev.20/modules/owner-assign.code","pragmate-ui@1.0.0-beta.6/list","pragmate-ui@1.0.0-beta.6/empty"],function(a,e){"use strict";var t,n,i,r,o,s,c,l,m,u,d,p,g,y,f,h,v,x;return a({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){n=e},function(e){i=e},function(e){r=e},function(e){o=e},function(e){s=e},function(e){c=e},function(e){l=e},function(e){m=e},function(e){u=e},function(e){d=e},function(e){p=e},function(e){g=e},function(e){y=e},function(e){f=e},function(e){h=e}],execute:function(){x=n.Bundle,(v=new x({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.20/community",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",i],["@beyond-js/react-18-widgets/page",r],["@aimpact/ailearn-app/main-layout.widget",o],["@beyond-js/reactive/model",s],["@aimpact/ailearn-sdk/learning-modules",c],["@beyond-js/kernel/texts",l],["react",m],["pragmate-ui/components",u],["@aimpact/ailearn-app/components/ui",d],["@beyond-js/react-18-widgets/hooks",p],["@aimpact/ailearn-app/components/module-card",g],["@aimpact/ailearn-app/modules/owner-assign.code",y],["pragmate-ui/list",f],["pragmate-ui/empty",h]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-community-modules",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.20/community.widget",is:"page",route:"/community",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.20/community.widget"),(x=new Map).set("./controller",{hash:2233299519,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var n=e("@beyond-js/react-18-widgets/page"),a=e("./views"),i=e("./store");class r extends n.PageReactWidgetController{#store;createStore(){return this.#store=new i.StoreManager,this.#store}get Widget(){return a.View}show(){var e=this.uri.qs.get("tab");this.#store.init(),this.#store.load(e)}hide(){this.#store.clear()}}t.Controller=r}}),x.set("./store",{hash:3024302075,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var n=e("@aimpact/ailearn-app/main-layout.widget"),a=e("@beyond-js/reactive/model"),i=e("@aimpact/ailearn-sdk/learning-modules"),r=e("@beyond-js/kernel/texts"),o=e("beyond_context");class s extends a.ReactiveModel{#drafts;#community;get community(){return this.#community}#tab;get tab(){return this.#tab}#texts=new r.CurrentTexts(o.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.#community=new i.LearningModules}init(){this.#texts.on("change",this.listenTexts),this.listenTexts()}listenTexts=()=>{this.#texts.ready&&(this.setBreadcrumb(),this.triggerEvent())};clear(){super.ready=!1,this.#texts.off("change",this.listenTexts)}setBreadcrumb(){n.LayoutBroker.overlay=!1}async loadCommunity(){this.#tab="community",this.#drafts.loaded}async load(e=0){await this.#community.load({type:"community",route:"community"}),super.ready=!0}}t.StoreManager=s}}),x.set("./views/context",{hash:515844683,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useListContext=t.ListContext=void 0;var n=e("react");const a=t.ListContext=n.default.createContext({});t.useListContext=()=>n.default.useContext(a)}}),x.set("./views/empty",{hash:1830535700,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,i.useListContext)().texts;return n.createElement(r.EmptyCard,{text:e.empty.general.title,description:e.empty.general.description,icon:"edit"},n.createElement("div",{className:"actions flex-container flex-center"},n.createElement(a.Link,{href:"/modules/management",className:"grow btn btn-primary"},e.actions.create)))};var n=e("react"),a=e("pragmate-ui/components"),i=e("./context"),r=e("@aimpact/ailearn-app/components/ui")}}),x.set("./views/index",{hash:2597826220,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,n]=(0,r.useState)(e.ready),[a]=(0,r.useState)(e.fetching),i=e.texts;return(0,l.useBinder)([e],()=>n(e.ready)),t?r.default.createElement(c.ListContext.Provider,{value:{texts:i,store:e,fetching:a}},r.default.createElement(o.PageContainer,null,r.default.createElement(o.PageTitle,{title:i.title}),r.default.createElement(s.List,null))):r.default.createElement(o.PageLoader,null)};var r=e("react"),o=e("@aimpact/ailearn-app/components/ui"),s=e("./list"),c=e("./context"),l=e("@beyond-js/react-18-widgets/hooks")}}),x.set("./views/interfaces",{hash:1566956740,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),x.set("./views/item",{hash:2255600940,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CommunityItem=function({item:t}){const e=(0,o.useListContext)().texts,[n,a]=i.useState(!1);return i.createElement(i.Fragment,null,i.createElement(r.ModuleCard,{item:t,texts:e},i.createElement(r.ModuleCardFooter,{item:t},t?.playground?.assignment&&i.createElement("a",{target:"_blank",href:t.playground.assignment,className:"right-action btn btn-primary outline"},e.actions.test),i.createElement(s.Button,{variant:"primary",onClick:e=>{e.stopPropagation(),a({open:!0,item:t})},className:"right-action"},e.actions.use))),n&&i.createElement(c.OwnerAssignForm,{item:t,onClose:()=>a(!n),texts:e,type:"community"}))};var i=e("react"),r=e("@aimpact/ailearn-app/components/module-card"),o=e("./context"),s=e("pragmate-ui/components"),c=e("@aimpact/ailearn-app/modules/owner-assign.code")}}),x.set("./views/list",{hash:1213970019,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function({}){const{store:e,texts:t}=(0,s.useListContext)(),n=t.empty.community,a=e.community,[i,r]=o.useState({items:a.items,fetching:a.fetching,total:a.items?.length});return(0,u.useBinder)([a],()=>{r({...i,items:a.items,fetching:a.fetching,total:a.items?.length})}),!i.fetching||i.total?a.items?.length||a.fetching?o.createElement(o.Fragment,null,o.createElement(l.List,{className:"entity__list mt-1",items:a.items,control:c.CommunityItem})):o.createElement(m.EmptyCard,{text:n.title,description:n.description,icon:"info"}):o.createElement(d.Empty,{className:"loading-list-page"},o.createElement(p.Spinner,{active:!0}))};var o=e("react"),s=e("./context"),c=e("./item"),l=e("pragmate-ui/list"),m=e("@aimpact/ailearn-app/components/ui"),u=e("@beyond-js/react-18-widgets/hooks"),d=e("pragmate-ui/empty"),p=e("pragmate-ui/components")}}),v.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],v.exports.process=function({require:e,prop:t,value:n}){!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:n),!e&&"View"!==t||a("View",e?e("./views/index").View:n)},a("__beyond_pkg",v),a("hmr",new function(){this.on=(e,t)=>v.hmr.on(e,t),this.off=(e,t)=>v.hmr.off(e,t)}),v.initialise(x)}}});