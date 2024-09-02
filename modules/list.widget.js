System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-app@0.1.6-dev.16/main-layout.widget","@beyond-js/reactive@1.2.0/model","@aimpact/ailearn-sdk@1.0.0/learning-modules","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-app@0.1.6-dev.16/i18n.ts","react@18.2.0","pragmate-ui@1.0.0-beta.2/components","@aimpact/ailearn-app@0.1.6-dev.16/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@1.0.0-beta.2/icons","@aimpact/ailearn-app@0.1.6-dev.16/components/module-card","pragmate-ui@1.0.0-beta.2/modal","@aimpact/ailearn-app@0.1.6-dev.16/modules/assign","@aimpact/ailearn-app@0.1.6-dev.16/modules/owner-assign.code","pragmate-ui@1.0.0-beta.2/tabs","@beyond-js/kernel@0.1.9/routing","pragmate-ui@1.0.0-beta.2/list","pragmate-ui@1.0.0-beta.2/empty"],function(n,e){var t,a,s,i,r,l,o,c,d,u,m,p,f,g,h,b,v,y,x,w,E,C,j,_;return n({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){s=e},function(e){i=e},function(e){r=e},function(e){l=e},function(e){o=e},function(e){c=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){h=e},function(e){b=e},function(e){v=e},function(e){y=e},function(e){x=e},function(e){w=e},function(e){E=e},function(e){C=e}],execute:function(){_=a.Bundle,(j=new _({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.16/modules/list",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",s],["@beyond-js/react-18-widgets/page",i],["@aimpact/ailearn-app/main-layout.widget",r],["@beyond-js/reactive/model",l],["@aimpact/ailearn-sdk/learning-modules",o],["@beyond-js/kernel/texts",c],["@aimpact/ailearn-app/i18n.ts",d],["react",u],["pragmate-ui/components",m],["@aimpact/ailearn-app/components/ui",p],["@beyond-js/react-18-widgets/hooks",f],["pragmate-ui/icons",g],["@aimpact/ailearn-app/components/module-card",h],["pragmate-ui/modal",b],["@aimpact/ailearn-app/modules/assign",v],["@aimpact/ailearn-app/modules/owner-assign.code",y],["pragmate-ui/tabs",x],["@beyond-js/kernel/routing",w],["pragmate-ui/list",E],["pragmate-ui/empty",C]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-modules-list",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.16/modules/list.widget",is:"page",route:"/modules/list",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.16/modules/list.widget"),(_=new Map).set("./controller",{hash:2233299519,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./views"),s=e("./store");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new s.StoreManager,this.#store}get Widget(){return n.View}show(){var e=this.uri.qs.get("tab");this.#store.init(),this.#store.load(e)}hide(){this.#store.clear()}}t.Controller=i}}),_.set("./store",{hash:3631708832,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-app/main-layout.widget"),n=e("@beyond-js/reactive/model"),s=e("@aimpact/ailearn-sdk/learning-modules"),i=e("@beyond-js/kernel/texts"),r=e("beyond_context"),l=e("@aimpact/ailearn-app/i18n.ts");class o extends n.ReactiveModel{#drafts;get draft(){return this.#drafts}#modules;get modules(){return this.#modules}#tab;get tab(){return this.#tab}#texts=new i.CurrentTexts(r.module.specifier);get texts(){return this.#texts?.value}get globalTexts(){return l.globalTexts.texts}get ready(){return super.ready&&this.#texts.ready&&l.globalTexts.ready}constructor(){super(),this.#drafts=new s.LearningModules,this.#modules=new s.LearningModules}init(){this.#texts.on("change",this.listenTexts),this.listenTexts()}listenTexts=()=>{this.#texts.ready&&(this.setBreadcrumb(),this.triggerEvent())};clear(){super.ready=!1,this.#texts.off("change",this.listenTexts)}setBreadcrumb(){a.LayoutBroker.overlay=!1}async loadModules(){this.#tab="published",this.#modules.loaded||(await this.#modules.load({type:"module",route:""}),globalThis.m=this.#modules,super.ready=!0)}async loadDrafts(){this.#tab="draft",this.#drafts.loaded||(await this.#drafts.load({type:"draft",route:"/drafts"}),super.ready=!0)}load(e="published"){var t={draft:this.loadDrafts.bind(this),published:this.loadModules.bind(this)};if(!t[e])throw new Error("Invalid type: "+e);t[e]()}async deleteDraft(e){await this.#drafts.elements.get(e).delete(),await this.#drafts.load({type:"draft",route:"/drafts"}),this.triggerEvent()}}t.StoreManager=o}}),_.set("./views/context",{hash:515844683,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useListContext=t.ListContext=void 0;var a=e("react");let n=t.ListContext=a.default.createContext({});t.useListContext=()=>a.default.useContext(n)}}),_.set("./views/empty",{hash:1830535700,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,s.useListContext)().texts;return a.createElement(i.EmptyCard,{text:e.empty.general.title,description:e.empty.general.description,icon:"edit"},a.createElement("div",{className:"actions flex-container flex-center"},a.createElement(n.Link,{href:"/modules/management",className:"grow btn btn-primary"},e.actions.create)))};var a=e("react"),n=e("pragmate-ui/components"),s=e("./context"),i=e("@aimpact/ailearn-app/components/ui")}}),_.set("./views/index",{hash:820208469,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){let[t,a]=(0,r.useState)(e.ready),[n]=(0,r.useState)(e.fetching),s=e.texts;return(0,l.useBinder)([e],()=>a(e.ready)),t?r.default.createElement(d.ListContext.Provider,{value:{texts:s,store:e,fetching:n}},r.default.createElement(i.PageContainer,null,r.default.createElement(i.PageTitle,{title:s.title},r.default.createElement("section",{className:"title__actions"},r.default.createElement(c.Link,{href:"/modules/management"},r.default.createElement(o.Icon,{icon:"add-circle"}),s.actions.create))),r.default.createElement(u.List,null))):r.default.createElement(i.PageLoader,{fetching:!0})};var i=e("@aimpact/ailearn-app/components/ui"),r=e("react"),l=e("@beyond-js/react-18-widgets/hooks"),o=e("pragmate-ui/icons"),c=e("pragmate-ui/components"),d=e("./context"),u=e("./list")}}),_.set("./views/interfaces",{hash:12017522,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),_.set("./views/item/drafts",{hash:4141982947,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ItemDrafts=function({item:t}){let{texts:e,store:a}=(0,r.useListContext)(),[n,s]=i.useState(!1);return i.createElement(i.Fragment,null,i.createElement(l.ModuleCard,{item:t,texts:e,href:"/modules/management?id="+t.id},i.createElement(l.ModuleCardFooter,{item:t},i.createElement(o.IconButton,{icon:"delete",onClick:e=>{e.preventDefault(),e.stopPropagation(),s(!0)},title:e.actions.delete}))),n&&i.createElement(c.ConfirmModal,{title:e.deleteItem.title,show:!0,onConfirm:async e=>{await a.deleteDraft(t.id)},btnConfirm:{label:a.globalTexts.actions.confirm},btnCancel:{label:a.globalTexts.actions.cancel},onCancel:()=>s(!1)},i.createElement("span",null,e.deleteItem.description)))};var i=e("react"),r=e("../context"),l=e("@aimpact/ailearn-app/components/module-card"),o=e("pragmate-ui/icons"),c=e("pragmate-ui/modal")}}),_.set("./views/item/module/module",{hash:284885108,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({item:e}){let t=(0,d.useListContext)().texts,[,a]=l.useState(e.getProperties()),[n,s]=l.useState(!1),[i,r]=l.useState(!1);(0,c.useBinder)([e],()=>{globalThis.item=e,a(e.getProperties())});return l.createElement(l.Fragment,null,l.createElement(u.ModuleCard,{item:e,texts:t},l.createElement(u.ModuleCardFooter,{item:e},l.createElement(m.Button,{variant:"primary",bordered:!0,onClick:()=>r(!0)},t.actions.use),l.createElement(m.Button,{variant:"primary",onClick:e=>{e.stopPropagation(),s(!0)}},t.actions.assign))),n&&l.createElement(o.ModuleAssignments,{item:e,onClose:()=>s(!n),texts:t.assign}),i&&l.createElement(p.OwnerAssignForm,{item:e,onClose:()=>r(!i),texts:t.assign}))};var l=e("react"),o=e("@aimpact/ailearn-app/modules/assign"),c=e("@beyond-js/react-18-widgets/hooks"),d=e("../../context"),u=e("@aimpact/ailearn-app/components/module-card"),m=e("pragmate-ui/components"),p=e("@aimpact/ailearn-app/modules/owner-assign.code")}}),_.set("./views/item/status",{hash:3172238619,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({synthesis:e,relevance:t,assessment:a}){var n=(0,r.useListContext)().texts,s=e=>l[e]??"red";return i.default.createElement("section",{className:"statuses"},i.default.createElement("div",{className:"status"},i.default.createElement("div",null,i.default.createElement("div",{className:"status-circle "+s(t?.status)}),i.default.createElement("h5",null,n.classes.elements.relevance)),i.default.createElement("div",null,i.default.createElement("div",{className:"status-circle "+s(e?.status)}),i.default.createElement("h5",null,n.classes.elements.synthesis)),i.default.createElement("div",null,i.default.createElement("div",{className:"status-circle "+s(a?.status)}),i.default.createElement("h5",null,n.classes.elements.assessment))))};var i=e("react"),r=e("../context");let l={ready:"green",processing:"yellow"}}}),_.set("./views/item/title",{hash:2842038646,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({item:e}){var t=(0,i.useListContext)().texts,a=e.title??e.objective,t=e.description??t.item.description;return n.default.createElement("section",null,n.default.createElement(s.Link,{href:"/modules/management?id="+e.id},n.default.createElement("h4",null,a)),n.default.createElement("span",null,t))};var n=e("react"),s=e("pragmate-ui/components"),i=e("../context")}}),_.set("./views/list/index",{hash:40682162,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function({}){let{texts:e,store:s}=(0,l.useListContext)(),i=["draft","published"],t=i.indexOf(s.tab),[a,r]=n.default.useState(t);return n.default.createElement(n.default.Fragment,null,n.default.createElement(o.TabsContainer,{onChange:(e,t)=>{var a=new URLSearchParams(globalThis.location.search),n=i[t];a.set("tab",n),u.routing.replaceState({},document.title,"/modules/list?"+a.toString()),r(t),s.load(n)},active:a},n.default.createElement(o.Tabs,{className:"module-list__tabs"},n.default.createElement(o.Tab,null,e.tabs.drafts),n.default.createElement(o.Tab,null,e.tabs.published)),n.default.createElement(o.Panes,{className:"module-list__panes"},n.default.createElement(c.ManageList,{className:"module-list",name:"draft",collection:s.draft,control:m.ItemDrafts,preventMessage:e.empty.drafts,loadingMessage:e.loading}),n.default.createElement(c.ManageList,{collection:s.modules,name:"modules",control:d.Item,className:"module-list",preventMessage:e.empty.published,loadingMessage:e.loading}))))};var n=e("react"),l=e("../context"),o=e("pragmate-ui/tabs"),c=e("./manage-list"),d=e("../item/module/module"),u=e("@beyond-js/kernel/routing"),m=e("../item/drafts")}}),_.set("./views/list/manage-list",{hash:683784199,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ManageList=function({name:e,control:t,preventMessage:a}){let n=(0,m.useListContext)().store;if(!n[e])throw new Error(`The store ${e} is not defined`);let s=n[e],[i,r]=l.useState({items:s.items,fetching:s.fetching,total:s.items?.length});return(0,d.useBinder)([n[e]],()=>{r({...i,items:n[e].items,fetching:n[e].fetching,total:n[e].items?.length})}),!i.fetching||i.total?n[e].items?.length||n[e].fetching?l.createElement(l.Fragment,null,l.createElement(o.List,{className:"entity__list mt-15",items:n[e].items,control:t})):l.createElement(c.EmptyCard,{text:a.title,description:a.description,icon:"info"}):l.createElement(u.Empty,{className:"loading-list-page"},l.createElement(c.AppLoader,{fetching:!0}))};var l=e("react"),o=e("pragmate-ui/list"),c=e("@aimpact/ailearn-app/components/ui"),d=e("@beyond-js/react-18-widgets/hooks"),u=e("pragmate-ui/empty"),m=e("../context")}}),j.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],j.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",j),n("hmr",new function(){this.on=(e,t)=>j.hmr.on(e,t),this.off=(e,t)=>j.hmr.off(e,t)}),j.initialise(_)}}});