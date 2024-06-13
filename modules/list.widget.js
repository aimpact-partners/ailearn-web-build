System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-app@0.0.46.dev-20/main-layout.widget","@beyond-js/reactive@1.1.12/model","@aimpact/ailearn-sdk@1.0.0/learning-modules","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-app@0.0.46.dev-20/config","react@18.2.0","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.46.dev-20/components/ui","@aimpact/chat@1.0.1/shared/components","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@0.1.1/link","pragmate-ui@0.1.1/icons","pragmate-ui@0.1.1/modal","pragmate-ui@0.1.1/list","@aimpact/chat-sdk@1.0.0/session","@beyond-js/kernel@0.1.9/routing","@aimpact/ailearn-app@0.0.46.dev-20/modules/assign","pragmate-ui@0.1.1/tabs","pragmate-ui@0.1.1/empty"],function(n,e){"use strict";var t,a,i,s,r,o,l,c,m,u,d,p,f,g,y,h,v,b,E,_,x,w,C,j,M;return n({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){i=e},function(e){s=e},function(e){r=e},function(e){o=e},function(e){l=e},function(e){c=e},function(e){m=e},function(e){u=e},function(e){d=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){y=e},function(e){h=e},function(e){v=e},function(e){b=e},function(e){E=e},function(e){_=e},function(e){x=e},function(e){w=e},function(e){C=e}],execute:function(){M=a.Bundle,(j=new M({module:{vspecifier:"@aimpact/ailearn-app@0.0.46.dev-20/modules/list",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",i],["@beyond-js/react-18-widgets/page",s],["@aimpact/ailearn-app/main-layout.widget",r],["@beyond-js/reactive/model",o],["@aimpact/ailearn-sdk/learning-modules",l],["@beyond-js/kernel/texts",c],["@aimpact/ailearn-app/config",m],["react",u],["pragmate-ui/components",d],["@aimpact/ailearn-app/components/ui",p],["@aimpact/chat/shared/components",f],["@beyond-js/react-18-widgets/hooks",g],["pragmate-ui/link",y],["pragmate-ui/icons",h],["pragmate-ui/modal",v],["pragmate-ui/list",b],["@aimpact/chat-sdk/session",E],["@beyond-js/kernel/routing",_],["@aimpact/ailearn-app/modules/assign",x],["pragmate-ui/tabs",w],["pragmate-ui/empty",C]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-modules-list",vspecifier:"@aimpact/ailearn-app@0.0.46.dev-20/modules/list.widget",is:"page",route:"/modules/list",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.46.dev-20/modules/list.widget"),(M=new Map).set("./controller",{hash:2233299519,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./views"),i=e("./store");class s extends a.PageReactWidgetController{#store;createStore(){return this.#store=new i.StoreManager,this.#store}get Widget(){return n.View}show(){var e=this.uri.qs.get("tab");this.#store.init(),this.#store.load(e)}hide(){this.#store.clear()}}t.Controller=s}}),M.set("./store",{hash:2709789408,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-app/main-layout.widget"),n=e("@beyond-js/reactive/model"),i=e("@aimpact/ailearn-sdk/learning-modules"),s=e("@beyond-js/kernel/texts"),r=e("beyond_context");class o extends n.ReactiveModel{#drafts;get draft(){return this.#drafts}#modules;get modules(){return this.#modules}#community;get community(){return this.#community}#tab;get tab(){return this.#tab}#texts=new s.CurrentTexts(r.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.#drafts=new i.LearningModules,this.#modules=new i.LearningModules,this.#community=new i.LearningModules}init(){this.#texts.on("change",this.listenTexts),this.listenTexts()}listenTexts=()=>{this.#texts.ready&&(this.setBreadcrumb(),this.triggerEvent())};clear(){super.ready=!1,this.#texts.off("change",this.listenTexts)}setBreadcrumb(){a.LayoutBroker.overlay=!1,globalThis.setTimeout(()=>{a.LayoutBroker.breadcrumb=[[this.texts.breadcrumb.modules]]},100)}async loadModules(){this.#tab="published",this.#modules.loaded||(await this.#modules.load({type:"module",route:""}),globalThis.m=this.#modules,super.ready=!0)}async loadDrafts(){this.#tab="draft",this.#drafts.loaded||(await this.#drafts.load({type:"draft",route:"/drafts"}),super.ready=!0)}async loadCommunity(){this.#tab="community",this.#drafts.loaded||(await this.#community.load({type:"community",route:"community"}),super.ready=!0)}load(e="published"){var t={community:this.loadCommunity.bind(this),draft:this.loadDrafts.bind(this),published:this.loadModules.bind(this)};if(!t[e])throw new Error("Invalid type: "+e);t[e]()}async deleteDraft(e){await this.#drafts.elements.get(e).delete(),await this.#drafts.load({type:"draft",route:"/drafts"}),this.triggerEvent()}}t.StoreManager=o}}),M.set("./views/context",{hash:515844683,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useListContext=t.ListContext=void 0;var a=e("react");const n=t.ListContext=a.default.createContext({});t.useListContext=()=>a.default.useContext(n)}}),M.set("./views/empty",{hash:1830535700,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,i.useListContext)()["texts"];return a.createElement(s.EmptyCard,{text:e.empty.general.title,description:e.empty.general.description,icon:"edit"},a.createElement("div",{className:"actions flex-container flex-center"},a.createElement(n.Link,{href:"/modules/management",className:"grow btn btn-primary"},e.actions.create)))};var a=e("react"),n=e("pragmate-ui/components"),i=e("./context"),s=e("@aimpact/ailearn-app/components/ui")}}),M.set("./views/index",{hash:4253326050,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=(0,r.useState)(e.ready),[n]=(0,r.useState)(e.fetching),i=e["texts"];if((0,u.useBinder)([e],()=>a(e.ready)),!t)return r.default.createElement(m.PreloadScreen,null);var s={texts:i,store:e,fetching:n};return r.default.createElement(c.ListContext.Provider,{value:s},r.default.createElement(o.PageContainer,null,r.default.createElement(o.PageTitle,{title:i.title},r.default.createElement("section",{className:"title__actions"},r.default.createElement(d.Link,{href:"/modules/management"},r.default.createElement(p.Icon,{icon:"add-circle"}),i.actions.create))),r.default.createElement(l.List,null)))};var r=e("react"),o=e("@aimpact/ailearn-app/components/ui"),l=e("./list"),c=e("./context"),m=e("@aimpact/chat/shared/components"),u=e("@beyond-js/react-18-widgets/hooks"),d=e("pragmate-ui/link"),p=e("pragmate-ui/icons")}}),M.set("./views/interfaces",{hash:2122662873,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),M.set("./views/item/community/actions",{hash:1952710345,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({module:e}){const t=(0,s.useListContext)()["texts"],[a,n]=i.useState(!1);return i.createElement("footer",{className:"entity__footer entity__footer--right"},i.createElement(r.Button,{variant:"primary",bordered:!0,onClick:e=>{e.stopPropagation(),n(!0)}},t.actions.use),a&&i.createElement(o.OrganizationsModal,{module:e,onClose:()=>n(!a),texts:t}))};var i=e("react"),s=e("../../context"),r=e("pragmate-ui/components"),o=e("./organizations-modal")}}),M.set("./views/item/community/community",{hash:2763903222,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CommunityItem=function({item:e}){var t=(0,r.useListContext)()["texts"],a=e.title??e.objective,t=e.description??t.item.description,n=e.owner??e.creator;return i.createElement("article",{className:"entity__item"},i.createElement(s.EntityImage,{src:e.picture,entity:"module",alt:a}),i.createElement("section",{className:"entity__item-content"},i.createElement(s.UserData,{data:n}),i.createElement("h4",null,a),i.createElement("span",null,t)),i.createElement(o.default,{module:e}))};var i=e("react"),s=e("@aimpact/ailearn-app/components/ui"),r=e("../../context"),o=e("./actions")}}),M.set("./views/item/community/organizations-modal",{hash:3363988201,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OrganizationsModal=function({module:t,onClose:e,texts:a}){const[n,i]=c.useState(),[s,r]=c.useState(),[o,l]=c.useState(!1);return c.createElement(m.Modal,{closeBackdrop:!1,closeBackdrop:!1,show:!0,onClose:e,className:"modal__assignment"},c.createElement("h3",null,"Organizations"),c.createElement(p.ErrorRenderer,{error:s}),c.createElement(u.List,{items:d.sessionWrapper.user.organizations,control:({item:e})=>{var t=n?.id===e.id?"list__item item__active":" list__item";return c.createElement("li",{"data-id":e.id,"data-entity":e.entity,className:t,onClick:()=>{i(e)}},c.createElement(p.EntityImage,{src:e.picture,entity:"institution",alt:e.name}),c.createElement("span",null,e.name),n?.id===e.id&&c.createElement(g.Icon,{icon:"circle-check",className:"item__icon"}))},className:"organization-list",specs:{}}),c.createElement("div",{className:"actions__container flex-container flex-end"},c.createElement(f.Button,{variant:"primary",disabled:!n,fetching:o,onClick:async()=>{try{var e;n&&(l(!0),(e=await t.clone(t.id,n.id,n.entity)).status||(console.log(e),r(a.errors.failed)),y.routing.pushState("/modules/management?id="+e.data.id))}catch(e){r(a.errors.failed)}finally{l(!1)}}},a.actions.continue)))};var c=e("react"),m=e("pragmate-ui/modal"),u=e("pragmate-ui/list"),d=e("@aimpact/chat-sdk/session"),p=e("@aimpact/ailearn-app/components/ui"),f=e("pragmate-ui/components"),g=e("pragmate-ui/icons"),y=e("@beyond-js/kernel/routing")}}),M.set("./views/item/drafts",{hash:4252064745,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ItemDrafts=function({item:e}){const{texts:t,store:a}=(0,c.useListContext)(),{title:n,description:i,objective:s}=e,r=e.owner??e.creator;return o.createElement("article",{className:"entity__item entity__item--clickable"},o.createElement(m.EntityImage,{src:e.picture,entity:"module",alt:n}),o.createElement("section",{className:"entity__item-content"},o.createElement(m.UserData,{data:r}),o.createElement(l.Link,{href:"/modules/management?id="+e.id},o.createElement("h6",null,n??s),o.createElement("span",null,i))),o.createElement("footer",{className:"entity__footer entity__footer--right"},o.createElement(m.ConfirmAction,{textPopUp:t?.actions?.delete,icon:"delete",onConfirm:async()=>{await a.deleteDraft(e.id)}})))};var o=e("react"),l=e("pragmate-ui/components"),c=e("../context"),m=e("@aimpact/ailearn-app/components/ui")}}),M.set("./views/item/module/actions",{hash:1438689458,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({module:e}){const t=(0,s.useListContext)()["texts"],[a,n]=i.useState(!1);return i.createElement("footer",{className:"entity__footer entity__footer--right"},i.createElement(r.Button,{variant:"primary",bordered:!0,onClick:e=>{e.stopPropagation(),n(!0)}},t.actions.assign),a&&i.createElement(o.ModuleAssignments,{module:e,onClose:()=>n(!a),texts:t.assign}))};var i=e("react"),s=e("../../context"),r=e("pragmate-ui/components"),o=e("@aimpact/ailearn-app/modules/assign")}}),M.set("./views/item/module/module",{hash:667640775,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({item:e}){var t=(0,o.useListContext)()["texts"],a=e.title??e.objective,t=e.description??t.item.description,n=e.owner??e.creator;return i.createElement("article",{className:"entity__item"},i.createElement(s.EntityImage,{src:e.picture,entity:"module",alt:a}),i.createElement("section",{className:"entity__item-content"},i.createElement(s.UserData,{data:n}),i.createElement("h4",null,a),i.createElement("span",null,t)),i.createElement(r.default,{module:e}))};var i=e("react"),s=e("@aimpact/ailearn-app/components/ui"),r=e("./actions"),o=e("../../context")}}),M.set("./views/item/status",{hash:3172238619,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({synthesis:e,relevance:t,assessment:a}){var n=(0,r.useListContext)()["texts"],i=e=>{return o[e]??"red"};return s.default.createElement("section",{className:"statuses"},s.default.createElement("div",{className:"status"},s.default.createElement("div",null,s.default.createElement("div",{className:"status-circle "+i(t?.status)}),s.default.createElement("h5",null,n.classes.elements.relevance)),s.default.createElement("div",null,s.default.createElement("div",{className:"status-circle "+i(e?.status)}),s.default.createElement("h5",null,n.classes.elements.synthesis)),s.default.createElement("div",null,s.default.createElement("div",{className:"status-circle "+i(a?.status)}),s.default.createElement("h5",null,n.classes.elements.assessment))))};var s=e("react"),r=e("../context");const o={ready:"green",processing:"yellow"}}}),M.set("./views/item/title",{hash:2842038646,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({item:e}){var t=(0,s.useListContext)()["texts"],a=e.title??e.objective,t=e.description??t.item.description;return n.default.createElement("section",null,n.default.createElement(i.Link,{href:"/modules/management?id="+e.id},n.default.createElement("h4",null,a)),n.default.createElement("span",null,t))};var n=e("react"),i=e("pragmate-ui/components"),s=e("../context")}}),M.set("./views/list/index",{hash:1766665070,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function({}){const{texts:e,store:i}=(0,o.useListContext)(),s=["draft","published","community"],t=s.indexOf(i.tab),[a,r]=n.default.useState(t);return n.default.createElement(n.default.Fragment,null,n.default.createElement(l.TabsContainer,{onChange:(e,t)=>{var a=new URLSearchParams(globalThis.location.search),n=s[t];a.set("tab",n),u.routing.replaceState({},document.title,"/modules/list?"+a.toString()),r(t),i.load(n)},active:a},n.default.createElement(l.Tabs,{className:"module-list__tabs"},n.default.createElement(l.Tab,null,e.tabs.drafts),n.default.createElement(l.Tab,null,e.tabs.published),n.default.createElement(l.Tab,null,e.tabs.community)),n.default.createElement(l.Panes,{className:"module-list__panes"},n.default.createElement(c.ManageList,{className:"module-list",collection:i.draft,control:d.ItemDrafts,preventMessage:e.empty.drafts,loadingMessage:e.loading}),n.default.createElement(c.ManageList,{collection:i.modules,control:m.Item,className:"module-list",preventMessage:e.empty.published,loadingMessage:e.loading}),n.default.createElement(c.ManageList,{collection:i.community,control:p.CommunityItem,className:"module-list",preventMessage:e.empty.community,loadingMessage:e.loading}))))};var n=e("react"),o=e("../context"),l=e("pragmate-ui/tabs"),c=e("./manage-list"),m=e("../item/module/module"),u=e("@beyond-js/kernel/routing"),d=e("../item/drafts"),p=e("../item/community/community")}}),M.set("./views/list/manage-list",{hash:603720868,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ManageList=function({collection:e,control:t,preventMessage:a}){const[n,i]=o.useState(e.items??[]),[s,r]=o.useState(e.fetching);return(0,m.useBinder)([e],()=>{i([...e.items]),r(e.fetching)}),!s||n.length?n.length||s?o.createElement(o.Fragment,null,o.createElement(l.List,{className:"entity__list",items:n,control:t})):o.createElement(c.EmptyCard,{text:a.title,description:a.description,icon:"info"}):o.createElement(u.Empty,{className:"loading-list-page"},o.createElement(d.Spinner,{active:!0}))};var o=e("react"),l=e("pragmate-ui/list"),c=e("@aimpact/ailearn-app/components/ui"),m=e("@beyond-js/react-18-widgets/hooks"),u=e("pragmate-ui/empty"),d=e("pragmate-ui/components")}}),j.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],j.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",j),n("hmr",new function(){this.on=(e,t)=>j.hmr.on(e,t),this.off=(e,t)=>j.hmr.off(e,t)}),j.initialise(M)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL2l0ZW0vY29tbXVuaXR5L2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vY29tbXVuaXR5L2NvbW11bml0eS50c3giLCIvdHMvdmlld3MvaXRlbS9jb21tdW5pdHkvb3JnYW5pemF0aW9ucy1tb2RhbC50c3giLCIvdHMvdmlld3MvaXRlbS9kcmFmdHMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vbW9kdWxlL21vZHVsZS50c3giLCIvdHMvdmlld3MvaXRlbS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vdGl0bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvbWFuYWdlLWxpc3QudHN4Il0sIm5hbWVzIjpbIl9wYWdlIiwicmVxdWlyZSIsIl92aWV3cyIsIl9zdG9yZSIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiI3N0b3JlIiwiY3JlYXRlU3RvcmUiLCJ0aGlzIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ0YWIiLCJ1cmkiLCJxcyIsImdldCIsImluaXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9tYWluTGF5b3V0IiwiX21vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCIjZHJhZnRzIiwiZHJhZnQiLCIjbW9kdWxlcyIsIm1vZHVsZXMiLCIjY29tbXVuaXR5IiwiY29tbXVuaXR5IiwiI3RhYiIsIiN0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRleHRzIiwidmFsdWUiLCJyZWFkeSIsInN1cGVyIiwiY29uc3RydWN0b3IiLCJMZWFybmluZ01vZHVsZXMiLCJvbiIsImxpc3RlblRleHRzIiwic2V0QnJlYWRjcnVtYiIsInRyaWdnZXJFdmVudCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImJyZWFkY3J1bWIiLCJsb2FkTW9kdWxlcyIsImxvYWRlZCIsImF3YWl0IiwidHlwZSIsInJvdXRlIiwibSIsImxvYWREcmFmdHMiLCJsb2FkQ29tbXVuaXR5IiwidHlwZXMiLCJiaW5kIiwicHVibGlzaGVkIiwiRXJyb3IiLCJkZWxldGVEcmFmdCIsImlkIiwiZWxlbWVudHMiLCJkZWxldGUiLCJfcmVhY3QiLCJMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGlzdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJfdWkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJnZW5lcmFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJfY29tcG9uZW50cyIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsInN0b3JlIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwiX2hvb2tzIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIl9saW5rIiwiX2ljb25zIiwiSWNvbiIsIl9saXN0IiwiTGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidXNlIiwiX29yZ2FuaXphdGlvbnNNb2RhbCIsIk9yZ2FuaXphdGlvbnNNb2RhbCIsIm9uQ2xvc2UiLCJ0b2dnbGVNb2RhbCIsIml0ZW0iLCJvYmplY3RpdmUiLCJvd25lckRhdGEiLCJvd25lciIsImNyZWF0b3IiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJhbHQiLCJVc2VyRGF0YSIsImRhdGEiLCJfYWN0aW9ucyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJlcnJvciIsInNldEVycm9yIiwic2V0RmV0Y2hpbmciLCJfbW9kYWwiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJFcnJvclJlbmRlcmVyIiwiaXRlbXMiLCJfc2Vzc2lvbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsIm9yZ2FuaXphdGlvbnMiLCJjb250cm9sIiwiSXRlbSIsImRhdGEtaWQiLCJkYXRhLWVudGl0eSIsIm5hbWUiLCJzcGVjcyIsImRpc2FibGVkIiwiYXN5bmMiLCJyZXNwb25zZSIsImNsb25lIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImZhaWxlZCIsIl9yb3V0aW5nIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImNvbnRpbnVlIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsImFzc2lnbiIsIl9hc3NpZ24iLCJNb2R1bGVBc3NpZ25tZW50cyIsInN5bnRoZXNpcyIsInJlbGV2YW5jZSIsImFzc2Vzc21lbnQiLCJnZXRTdGF0dXNDb2xvciIsIlNUQVRVU19DT0xPUlMiLCJjbGFzc2VzIiwicHJvY2Vzc2luZyIsInRhYnMiLCJ0YWJJbmRleCIsImluZGV4T2YiLCJ0YWJTZWxlY3QiLCJ1c2VUYWJTZWxlY3QiLCJGcmFnbWVudCIsIl90YWJzIiwiVGFic0NvbnRhaW5lciIsIm9uQ2hhbmdlIiwiaW5kZXgiLCJsZXQiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNldCIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidG9TdHJpbmciLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwiZHJhZnRzIiwiUGFuZXMiLCJfbWFuYWdlTGlzdCIsIk1hbmFnZUxpc3QiLCJjb2xsZWN0aW9uIiwiX2RyYWZ0cyIsIkl0ZW1EcmFmdHMiLCJwcmV2ZW50TWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwibG9hZGluZyIsIl9tb2R1bGUiLCJfY29tbXVuaXR5IiwiQ29tbXVuaXR5SXRlbSIsInNldEl0ZW1zIiwibGVuZ3RoIiwiX2VtcHR5IiwiRW1wdHkiLCJTcGlubmVyIl0sIm1hcHBpbmdzIjoiaW9GQUFBLElBQUFBLEVBQUFDLEVBQUEsa0NBQUEsRUFDQUMsRUFBQUQsRUFBQSxTQUFBLEVBQ0FFLEVBQUFGLEVBQUEsU0FBQSxRQUlNRyxVQUFtQkosRUFBQUssMEJBQ3hCQyxPQUNBQyxjQUVDLE9BREFDLEtBQUtGLE9BQVMsSUFBSUgsRUFBQU0sYUFDR0QsS0FBS0YsTUFDM0IsQ0FDQUksYUFDQyxPQUFPUixFQUFBUyxJQUNSLENBRUFDLE9BQ0MsSUFBTUMsRUFBTUwsS0FBS00sSUFBSUMsR0FBR0MsSUFBSSxLQUFLLEVBQ2pDUixLQUFLRixPQUFPVyxLQUFJLEVBQ2hCVCxLQUFLRixPQUFPWSxLQUFLTCxDQUFHLENBQ3JCLENBRUFNLE9BQ0NYLEtBQUtGLE9BQU9jLE1BQUssQ0FDbEIsQyxDQUNBQyxFQUFBakIsV0FBQUEsQyxrSUN6QkQsSUFBQWtCLEVBQUFyQixFQUFBLHlDQUFBLEVBQ0FzQixFQUFBdEIsRUFBQSwyQkFBQSxFQUNBdUIsRUFBQXZCLEVBQUEsdUNBQUEsRUFDQXdCLEVBQUF4QixFQUFBLHlCQUFBLEVBQ0F5QixFQUFBekIsRUFBQSxnQkFBQSxRQUdhUSxVQUFxQmMsRUFBQUksY0FDakNDLFFBRUFDLFlBQ0MsT0FBT3JCLEtBQUtvQixPQUNiLENBRUFFLFNBQ0FDLGNBQ0MsT0FBT3ZCLEtBQUtzQixRQUNiLENBRUFFLFdBQ0FDLGdCQUNDLE9BQU96QixLQUFLd0IsVUFDYixDQUNBRSxLQUNBckIsVUFDQyxPQUFPTCxLQUFLMEIsSUFDYixDQUNBQyxPQUFxQyxJQUFJ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