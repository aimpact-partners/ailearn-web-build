System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.1.12/model","@aimpact/ailearn-sdk@1.0.0/learning-modules","react@18.2.0","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.32/components/ui","@aimpact/ailearn-app@0.0.32/components/navbar-header.code","@aimpact/chat@1.0.1/shared/components","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.1/shared/hooks","pragmate-ui@0.1.1/link","pragmate-ui@0.1.1/icons","pragmate-ui@0.1.1/modal","pragmate-ui@0.1.1/list","@aimpact/chat-sdk@1.0.0/session","@beyond-js/kernel@0.1.9/routing","pragmate-ui@0.1.1/image","@aimpact/ailearn-app@0.0.32/modules/assign","pragmate-ui@0.1.1/tabs","pragmate-ui@0.1.1/empty"],function(n,e){"use strict";var t,a,i,s,r,o,l,c,m,u,d,p,f,g,h,y,v,b,E,_,w,x,C,j,M;return n({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){i=e},function(e){s=e},function(e){r=e},function(e){o=e},function(e){l=e},function(e){c=e},function(e){m=e},function(e){u=e},function(e){d=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){h=e},function(e){y=e},function(e){v=e},function(e){b=e},function(e){E=e},function(e){_=e},function(e){w=e},function(e){x=e},function(e){C=e}],execute:function(){M=a.Bundle,(j=new M({module:{vspecifier:"@aimpact/ailearn-app@0.0.32/modules/list",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",i],["@beyond-js/react-18-widgets/page",s],["@beyond-js/reactive/model",r],["@aimpact/ailearn-sdk/learning-modules",o],["react",l],["pragmate-ui/components",c],["@aimpact/ailearn-app/components/ui",m],["@aimpact/ailearn-app/components/navbar-header.code",u],["@aimpact/chat/shared/components",d],["@beyond-js/react-18-widgets/hooks",p],["@aimpact/chat/shared/hooks",f],["pragmate-ui/link",g],["pragmate-ui/icons",h],["pragmate-ui/modal",y],["pragmate-ui/list",v],["@aimpact/chat-sdk/session",b],["@beyond-js/kernel/routing",E],["pragmate-ui/image",_],["@aimpact/ailearn-app/modules/assign",w],["pragmate-ui/tabs",x],["pragmate-ui/empty",C]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-modules-list",vspecifier:"@aimpact/ailearn-app@0.0.32/modules/list.widget",is:"page",route:"/modules/list",layout:"general-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.32/modules/list.widget"),(M=new Map).set("./controller",{hash:4171271325,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./views"),i=e("./store");class s extends a.PageReactWidgetController{#store;createStore(){return this.#store=new i.StoreManager,this.#store}get Widget(){return n.View}show(){var e=this.uri.qs.get("tab");this.#store.load(e)}hide(){this.#store.clear()}}t.Controller=s}}),M.set("./store",{hash:1807773611,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),n=e("@aimpact/ailearn-sdk/learning-modules");class i extends a.ReactiveModel{#drafts;get draft(){return this.#drafts}#modules;get modules(){return this.#modules}#community;get community(){return this.#community}#tab;get tab(){return this.#tab}constructor(){super(),(globalThis.c=this).#drafts=new n.LearningModules,this.#modules=new n.LearningModules,this.#community=new n.LearningModules,globalThis.drafts=this.#drafts}clear(){}async loadModules(){this.#tab="published",this.#modules.loaded||(await this.#modules.load({type:"module",route:"",orderBy:"timeCreated"}),this.ready=!0)}async loadDrafts(){this.#tab="draft",this.#drafts.loaded||(await this.#drafts.load({type:"draft",route:"/drafts",orderBy:"timeCreated"}),this.ready=!0)}async loadCommunity(){this.#tab="community",this.#drafts.loaded||(await this.#community.load({type:"community",route:"community",orderBy:"timeCreated"}),this.ready=!0)}load(e="published"){var t={community:this.loadCommunity.bind(this),draft:this.loadDrafts.bind(this),published:this.loadModules.bind(this)};if(!t[e])throw console.trace(),new Error("Invalid type: "+e);t[e]()}async deleteDraft(e){await this.#drafts.elements.get(e).delete()}}t.StoreManager=i}}),M.set("./views/context",{hash:515844683,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useListContext=t.ListContext=void 0;var a=e("react");const n=t.ListContext=a.default.createContext({});t.useListContext=()=>a.default.useContext(n)}}),M.set("./views/empty",{hash:1830535700,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,i.useListContext)().texts;return a.createElement(s.EmptyCard,{text:e.empty.general.title,description:e.empty.general.description,icon:"edit"},a.createElement("div",{className:"actions flex-container flex-center"},a.createElement(n.Link,{href:"/modules/management",className:"grow btn btn-primary"},e.actions.create)))};var a=e("react"),n=e("pragmate-ui/components"),i=e("./context"),s=e("@aimpact/ailearn-app/components/ui")}}),M.set("./views/index",{hash:2765993987,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=(0,f.useTexts)(d.module.specifier),[n,i]=(0,r.useState)(e.ready),[s]=(0,r.useState)(e.fetching);return(0,p.useBinder)([e],()=>i(e.ready)),n&&t?r.default.createElement(m.ListContext.Provider,{value:{texts:a,store:e,fetching:s}},r.default.createElement(o.NavbarHeader,{breadcrumb:[[a.breadcrumb.modules,""]]}),r.default.createElement(l.PageContainer,null,r.default.createElement(l.PageTitle,{title:a.title},r.default.createElement("section",{className:"title__actions"},r.default.createElement(g.Link,{href:"/modules/management"},r.default.createElement(h.Icon,{icon:"add-circle"}),a.actions.create))),r.default.createElement(c.List,null))):r.default.createElement(u.PreloadScreen,null)};var r=e("react"),o=e("@aimpact/ailearn-app/components/navbar-header.code"),l=e("@aimpact/ailearn-app/components/ui"),c=e("./list"),m=e("./context"),u=e("@aimpact/chat/shared/components"),d=e("beyond_context"),p=e("@beyond-js/react-18-widgets/hooks"),f=e("@aimpact/chat/shared/hooks"),g=e("pragmate-ui/link"),h=e("pragmate-ui/icons")}}),M.set("./views/interfaces",{hash:2122662873,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),M.set("./views/item/community/actions",{hash:1952710345,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({module:e}){const t=(0,s.useListContext)().texts,[a,n]=i.useState(!1);return i.createElement("footer",{className:"entity__footer entity__footer--right"},i.createElement(r.Button,{variant:"primary",bordered:!0,onClick:e=>{e.stopPropagation(),n(!0)}},t.actions.use),a&&i.createElement(o.OrganizationsModal,{module:e,onClose:()=>n(!a),texts:t}))};var i=e("react"),s=e("../../context"),r=e("pragmate-ui/components"),o=e("./organizations-modal")}}),M.set("./views/item/community/community",{hash:2927527635,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CommunityItem=function({item:e}){var t=(0,s.useListContext)().texts,a=e.title??e.objective,t=e.description??t.item.description;return n.createElement("article",{className:"entity__item"},n.createElement(i.EntityImage,{src:e.picture,entity:"module",alt:a}),n.createElement("section",{className:"entity__item-content"},n.createElement("h4",null,a),n.createElement("span",null,t)),n.createElement(r.default,{module:e}))};var n=e("react"),i=e("@aimpact/ailearn-app/components/ui"),s=e("../../context"),r=e("./actions")}}),M.set("./views/item/community/organizations-modal",{hash:3310523566,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OrganizationsModal=function({module:t,onClose:e,texts:a}){const[n,i]=c.useState(),[s,r]=c.useState(),[o,l]=c.useState(!1);return c.createElement(m.Modal,{show:!0,onClose:e,closeBackdrop:!1,className:"modal__assignment"},c.createElement("h3",null,"Organizations"),c.createElement(p.ErrorRenderer,{error:s}),c.createElement(u.List,{items:d.sessionWrapper.user.organizations,control:({item:e})=>{var t=n?.id===e.id?"list__item item__active":" list__item";return c.createElement("li",{"data-id":e.id,"data-entity":e.entity,className:t,onClick:()=>{i(e)}},c.createElement(p.EntityImage,{src:e.picture,entity:"institution",alt:e.name}),c.createElement("span",null,e.name),n?.id===e.id&&c.createElement(g.Icon,{icon:"circle-check",className:"item__icon"}))},className:"organization-list",specs:{}}),c.createElement("div",{className:"actions__container flex-container flex-end"},c.createElement(f.Button,{variant:"primary",disabled:!n,fetching:o,onClick:async()=>{try{var e;n&&(l(!0),(e=await t.clone(t.id,n.id,n.entity)).status||(console.log(e),r(a.errors.failed)),h.routing.pushState("/modules/management?id="+e.data.id))}catch(e){r(a.errors.failed)}finally{l(!1)}}},a.actions.continue)))};var c=e("react"),m=e("pragmate-ui/modal"),u=e("pragmate-ui/list"),d=e("@aimpact/chat-sdk/session"),p=e("@aimpact/ailearn-app/components/ui"),f=e("pragmate-ui/components"),g=e("pragmate-ui/icons"),h=e("@beyond-js/kernel/routing")}}),M.set("./views/item/drafts",{hash:747643815,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ItemDrafts=function({item:e}){const{texts:t,store:a}=(0,l.useListContext)(),{title:n,description:i,objective:s}=e;return r.createElement("article",{className:"entity__item"},r.createElement(c.EntityImage,{src:e.picture,entity:"module",alt:n}),r.createElement("section",{className:"entity__item-content"},r.createElement(o.Link,{href:"/modules/management?id="+e.id},r.createElement("h4",null,n??s),r.createElement("span",null,i))),r.createElement("footer",{className:"entity__footer entity__footer--right"},r.createElement(c.ConfirmAction,{textPopUp:t?.actions?.delete,icon:"delete",onConfirm:async()=>{await a.deleteDraft(e.id)}})))};var r=e("react"),o=e("pragmate-ui/components"),l=e("../context"),c=e("@aimpact/ailearn-app/components/ui")}}),M.set("./views/item/module/actions",{hash:3459488891,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({module:e}){const t=(0,s.useListContext)().texts,[a,n]=i.useState(!1);return i.createElement("footer",{className:"entity__footer entity__footer--right"},i.createElement(r.Button,{variant:"primary",bordered:!0,onClick:e=>{e.stopPropagation(),n(!0)}},t.actions.assign),a&&i.createElement(o.ModuleAssignments,{module:e,onClose:()=>n(!a),texts:t.assign}))};var i=e("react"),s=e("../../context"),r=e("pragmate-ui/components"),o=e("@aimpact/ailearn-app/modules/assign")}}),M.set("./views/item/module/module",{hash:2747425906,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({item:e}){var t=(0,r.useListContext)().texts,a=e.title??e.objective,t=e.description??t.item.description;return n.createElement("article",{className:"entity__item"},n.createElement(i.EntityImage,{src:e.picture,entity:"module",alt:a}),n.createElement("section",{className:"entity__item-content"},n.createElement("h4",null,a),n.createElement("span",null,t)),n.createElement(s.default,{module:e}))};var n=e("react"),i=e("@aimpact/ailearn-app/components/ui"),s=e("./actions"),r=e("../../context")}}),M.set("./views/item/status",{hash:3172238619,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({synthesis:e,relevance:t,assessment:a}){var n=(0,r.useListContext)().texts,i=e=>o[e]??"red";return s.default.createElement("section",{className:"statuses"},s.default.createElement("div",{className:"status"},s.default.createElement("div",null,s.default.createElement("div",{className:"status-circle "+i(t?.status)}),s.default.createElement("h5",null,n.classes.elements.relevance)),s.default.createElement("div",null,s.default.createElement("div",{className:"status-circle "+i(e?.status)}),s.default.createElement("h5",null,n.classes.elements.synthesis)),s.default.createElement("div",null,s.default.createElement("div",{className:"status-circle "+i(a?.status)}),s.default.createElement("h5",null,n.classes.elements.assessment))))};var s=e("react"),r=e("../context");const o={ready:"green",processing:"yellow"}}}),M.set("./views/item/title",{hash:2842038646,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({item:e}){var t=(0,s.useListContext)().texts,a=e.title??e.objective,t=e.description??t.item.description;return n.default.createElement("section",null,n.default.createElement(i.Link,{href:"/modules/management?id="+e.id},n.default.createElement("h4",null,a)),n.default.createElement("span",null,t))};var n=e("react"),i=e("pragmate-ui/components"),s=e("../context")}}),M.set("./views/list/index",{hash:1766665070,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function({}){const{texts:e,store:i}=(0,o.useListContext)(),s=["draft","published","community"],t=s.indexOf(i.tab),[a,r]=n.default.useState(t);return n.default.createElement(n.default.Fragment,null,n.default.createElement(l.TabsContainer,{onChange:(e,t)=>{var a=new URLSearchParams(globalThis.location.search),n=s[t];a.set("tab",n),u.routing.replaceState({},document.title,"/modules/list?"+a.toString()),r(t),i.load(n)},active:a},n.default.createElement(l.Tabs,{className:"module-list__tabs"},n.default.createElement(l.Tab,null,e.tabs.drafts),n.default.createElement(l.Tab,null,e.tabs.published),n.default.createElement(l.Tab,null,e.tabs.community)),n.default.createElement(l.Panes,{className:"module-list__panes"},n.default.createElement(c.ManageList,{className:"module-list",collection:i.draft,control:d.ItemDrafts,preventMessage:e.empty.drafts,loadingMessage:e.loading}),n.default.createElement(c.ManageList,{collection:i.modules,control:m.Item,className:"module-list",preventMessage:e.empty.published,loadingMessage:e.loading}),n.default.createElement(c.ManageList,{collection:i.community,control:p.CommunityItem,className:"module-list",preventMessage:e.empty.community,loadingMessage:e.loading}))))};var n=e("react"),o=e("../context"),l=e("pragmate-ui/tabs"),c=e("./manage-list"),m=e("../item/module/module"),u=e("@beyond-js/kernel/routing"),d=e("../item/drafts"),p=e("../item/community/community")}}),M.set("./views/list/manage-list",{hash:603720868,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ManageList=function({collection:e,control:t,preventMessage:a}){const[n,i]=o.useState(e.items??[]),[s,r]=o.useState(e.fetching);return(0,m.useBinder)([e],()=>{i([...e.items]),r(e.fetching)}),!s||n.length?n.length||s?o.createElement(o.Fragment,null,o.createElement(l.List,{className:"entity__list",items:n,control:t})):o.createElement(c.EmptyCard,{text:a.title,description:a.description,icon:"info"}):o.createElement(u.Empty,{className:"loading-list-page"},o.createElement(d.Spinner,{active:!0}))};var o=e("react"),l=e("pragmate-ui/list"),c=e("@aimpact/ailearn-app/components/ui"),m=e("@beyond-js/react-18-widgets/hooks"),u=e("pragmate-ui/empty"),d=e("pragmate-ui/components")}}),j.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],j.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",j),n("hmr",new function(){this.on=(e,t)=>j.hmr.on(e,t),this.off=(e,t)=>j.hmr.off(e,t)}),j.initialise(M)}}});