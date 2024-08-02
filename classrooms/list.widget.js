System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.2.0/model","@aimpact/ailearn-sdk@1.0.0/core","@aimpact/ailearn-app@0.1.0-dev.09/model/gclassroom","dayjs@1.11.10","@aimpact/ailearn-app@0.1.0-dev.09/main-layout.widget","@beyond-js/kernel@0.1.9/texts","react@18.2.0","pragmate-ui@1.0.0-beta.1/list","@aimpact/ailearn-app@0.1.0-dev.09/components/ui","pragmate-ui@1.0.0-beta.1/icons","pragmate-ui@1.0.0-beta.1/link","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@1.0.0-beta.1/components","@aimpact/ailearn-app@0.1.0-dev.09/components/icons","@aimpact/chat-sdk@1.0.1/session","pragmate-ui@1.0.0-beta.1/alert","pragmate-ui@1.0.0-beta.1/modal","pragmate-ui@1.0.0-beta.1/toast","@aimpact/chat@1.0.2/shared/components"],function(s,e){var t,a,r,o,n,i,l,c,m,d,u,p,f,g,h,y,v,x,E,b,w,_,C,j,k;return s({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){o=e},function(e){n=e},function(e){i=e},function(e){l=e},function(e){c=e},function(e){m=e},function(e){d=e},function(e){u=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){h=e},function(e){y=e},function(e){v=e},function(e){x=e},function(e){E=e},function(e){b=e},function(e){w=e},function(e){_=e},function(e){C=e}],execute:function(){k=a.Bundle,(j=new k({module:{vspecifier:"@aimpact/ailearn-app@0.1.0-dev.09/classrooms/list",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",o],["@beyond-js/reactive/model",n],["@aimpact/ailearn-sdk/core",i],["@aimpact/ailearn-app/model/gclassroom",l],["dayjs",c],["@aimpact/ailearn-app/main-layout.widget",m],["@beyond-js/kernel/texts",d],["react",u],["pragmate-ui/list",p],["@aimpact/ailearn-app/components/ui",f],["pragmate-ui/icons",g],["pragmate-ui/link",h],["@beyond-js/react-18-widgets/hooks",y],["pragmate-ui/components",v],["@aimpact/ailearn-app/components/icons",x],["@aimpact/chat-sdk/session",E],["pragmate-ui/alert",b],["pragmate-ui/modal",w],["pragmate-ui/toast",_],["@aimpact/chat/shared/components",C]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-classroom-list",vspecifier:"@aimpact/ailearn-app@0.1.0-dev.09/classrooms/list.widget",is:"page",route:"/classrooms/list",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.0-dev.09/classrooms/list.widget"),(k=new Map).set("./controller",{hash:3574521443,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),s=e("./views"),r=e("./store");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager,this.#store}show(){this.#store.setBreadcrumb(),this.#store.load()}get Widget(){return s.View}}t.Controller=o}}),k.set("./store",{hash:4192429976,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),s=e("@aimpact/ailearn-sdk/core"),r=e("@aimpact/ailearn-app/model/gclassroom"),o=e("dayjs"),n=e("@aimpact/ailearn-app/main-layout.widget"),i=e("@beyond-js/kernel/texts"),l=e("beyond_context");class c extends a.ReactiveModel{#items=[];get items(){return this.#items}#model;get model(){return this.#model}get gItems(){return 0<r.gclassroom.error.code?[]:r.gclassroom.classes.values().map(e=>({...e,imported:this.model.googleClassroomsIds.has(e.id)}))}#texts=new i.CurrentTexts(l.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}#itemsSelected=new Map;get itemsSelected(){return this.#itemsSelected}constructor(){super(),this.#model=new s.Classrooms,this.model.on("change",this.triggerEvent),r.gclassroom.on("change",this.triggerEvent)}setBreadcrumb(){var e=this.setBreadcrumb.bind(this);this.#texts.ready?(this.#texts.off("change",e),n.LayoutBroker.overlay=!1,globalThis.setTimeout(()=>{n.LayoutBroker.breadcrumb=[[this.texts.breadcrumb.classrooms]]},100)):this.#texts.on("change",e)}async load(){try{this.fetching=!0,await this.model.load(),this.#items=this.model.items,super.ready=!0}catch(e){console.error(e)}finally{this.fetching=!1}}async delete(t){this.#items=this.#items.filter(e=>e.id!==t.id),await t.delete(),this.triggerEvent("items.changed")}loadClasses=async()=>r.gclassroom.courses();async#init(){var e=(0,o.default)();r.gclassroom.lastClassesQueryTime&&r.gclassroom.classes.size?(super.ready=!0,5<e.diff(r.gclassroom.lastClassesQueryTime,"minutes")&&this.loadClasses()):(this.loadClasses(),super.ready=!0)}async saveItemToImport(e){var t=new s.Classroom;await t.isReady,t.set({external:e.id,name:e.name,description:"It does not have a description"}),this.itemsSelected.set(e.id,t),this.triggerEvent()}toggleItem(e){this.itemsSelected.has(e.id)?(this.#itemsSelected.delete(e.id),this.triggerEvent()):this.saveItemToImport(e)}async saveItems(){try{this.fetching=!0;var e=[...this.#itemsSelected.values()].map(e=>({...e.getProperties()})),{status:t,data:a}=await this.model.importFromGoogleClassroom({items:e});if(t)return this.#itemsSelected=new Map,a;throw new Error("error publishing classroom")}catch(e){console.error(1,e)}finally{this.fetching=!1}}}t.StoreManager=c}}),k.set("./views/classroom-list",{hash:1954707885,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ClassroomsList=function({store:e}){let t=(0,m.useModuleContext)().texts,[a,s]=r.useState(e.items);return(0,d.useBinder)([e],()=>s([...e.items]),"items.changed"),r.createElement(i.PageContainer,{className:"classroom-list__container"},r.createElement(i.PageTitle,{title:t.title},r.createElement(c.Link,{href:"/classrooms/create"},r.createElement(l.Icon,{icon:"add-circle"}),t.actions.create)),r.createElement(n.List,{className:" list-unstyled grid-container g-2-columns mt-1",items:a,control:o.Classroom}))};var r=e("react"),o=e("./item"),n=e("pragmate-ui/list"),i=e("@aimpact/ailearn-app/components/ui"),l=e("pragmate-ui/icons"),c=e("pragmate-ui/link"),m=e("./context"),d=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./views/context",{hash:2192064674,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");let s=t.ModuleContext=a.createContext({});t.useModuleContext=()=>a.useContext(s)}}),k.set("./views/empty",{hash:755154019,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,r.useModuleContext)().texts;return a.createElement(o.PageContainer,null,a.createElement(o.PageTitle,{title:e.title},a.createElement("div",{className:"page-title__actions"},a.createElement(s.Link,{className:"add-item",href:"/classrooms/join"},a.createElement(n.AppIcon,{icon:"entities/classroom"}),e.actions.join),a.createElement(s.Link,{href:"/classrooms/create"},a.createElement(n.AppIcon,{icon:"add-circle"}),e.actions.create))),a.createElement(o.EmptyCard,{text:e.empty.title,description:e.empty.description,icon:"edit"},a.createElement("div",{className:"empty__actions"},a.createElement(s.Link,{href:"/classrooms/create",className:"grow btn btn-primary"},e.actions.create))))};var a=e("react"),s=e("pragmate-ui/components"),r=e("./context"),o=e("@aimpact/ailearn-app/components/ui"),n=e("@aimpact/ailearn-app/components/icons")}}),k.set("./views/header",{hash:156270815,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){let{texts:e,fetching:t,store:a}=(0,l.useModuleContext)(),[,s]=(m.sessionWrapper.user.displayName,i.default.useState(t)),[r,o]=i.default.useState(!1),n=!f.gclassroom.authorized;return(0,y.useBinder)([a],()=>s(a.fetching)),i.default.createElement(i.default.Fragment,null,n&&i.default.createElement("div",{className:"alert-extra__container"},i.default.createElement(d.Alert,{type:"info"},e.extraInfo)),a.items&&i.default.createElement(c.PageTitle,{title:e.title},i.default.createElement("div",{className:"page-title__actions"},i.default.createElement(p.Link,{className:"add-item",href:"/classrooms/join"},i.default.createElement(u.Button,{icon:"share-link",variant:"primary"},e.actions.join)),i.default.createElement(p.Link,{className:"add-item",href:"/classrooms/create"},i.default.createElement(u.Button,{icon:"add",variant:"primary"},e.actions.create)))),r&&i.default.createElement(g.Modal,{show:!0,className:"modal-import__general",onClose:function(){o(!r)}},i.default.createElement(h.Import,null)))};var i=e("react"),l=e("./context"),c=e("@aimpact/ailearn-app/components/ui"),m=e("@aimpact/chat-sdk/session"),d=e("pragmate-ui/alert"),u=e("pragmate-ui/components"),p=e("pragmate-ui/link"),f=e("@aimpact/ailearn-app/model/gclassroom"),g=e("pragmate-ui/modal"),h=e("./import"),y=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./views/import/empty",{hash:3044890623,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyExplorer=function({}){var e=(0,r.useModuleContext)().texts;return a.default.createElement("div",{className:"items-modal__empty"},a.default.createElement(s.IconButton,{icon:"circle-exclamation",title:e.empty.titleImport}),a.default.createElement("span",null,e.empty.labelImport))};var a=e("react"),s=e("pragmate-ui/icons"),r=e("../context")}}),k.set("./views/import/index",{hash:947523122,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Import=function(){let{store:e,texts:t}=(0,f.useModuleContext)(),[a,s]=l.default.useState(e.fetching),[r,o]=l.default.useState(e.ready),n=((0,c.useBinder)([e],()=>{o(e.ready),s(e.fetching)}),m.gclassroom.ready&&r),i;return n?(i=e.gItems.length?p.List:u.EmptyExplorer,l.default.createElement("div",{className:"modal-import__container"},l.default.createElement("h4",null,t.import.title),l.default.createElement(i,null),l.default.createElement(g.ProcessContainer,{fetching:a}))):l.default.createElement(d.Spinner,{active:!0,type:"primary"})};var l=e("react"),c=e("@beyond-js/react-18-widgets/hooks"),m=e("@aimpact/ailearn-app/model/gclassroom"),d=e("pragmate-ui/components"),u=e("./empty"),p=e("./list"),f=e("../context"),g=e("@aimpact/ailearn-app/components/ui")}}),k.set("./views/import/items/index",{hash:1993213349,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0;var c=e("react"),m=e("../../context"),d=e("pragmate-ui/icons"),u=e("@beyond-js/react-18-widgets/hooks");t.Item=({item:t})=>{let{store:a,texts:e}=(0,m.useModuleContext)(),[s,r]=c.default.useState(!1),[o,n]=c.default.useState(a.items),i=((0,u.useBinder)([a],()=>n(a.items)),o.some(e=>e.external.id===t.id)),l=a.itemsSelected.has(t.id);return c.default.createElement("li",{key:t.id,className:"gclassroom-item "+(i&&" already"),onClick:e=>{i||(r(!s),a.toggleItem(t))}},c.default.createElement("span",{className:"flex-container flex-space-between"},t.name),l&&c.default.createElement(d.Icon,{icon:"check"}),i&&c.default.createElement("div",{className:"saved__item"},c.default.createElement("span",null,e.actions.imported),c.default.createElement(d.Icon,{icon:"check",className:"disabled-icon"})))}}}),k.set("./views/import/list",{hash:913571725,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function(){let{store:t,texts:e}=(0,i.useModuleContext)(),[a,s]=r.default.useState(t.gItems);(0,o.useBinder)([t],()=>s(t.gItems));return r.default.createElement(r.default.Fragment,null,r.default.createElement(m.List,{specs:{},items:a,control:n.Item,className:"gclassrooms-modal__list"}),r.default.createElement("div",{className:"gclassroom-modal__action flex-container flex-end"},r.default.createElement(l.Button,{icon:"arrowDownloads",variant:"primary",className:"import-button__action circle",onClick:async e=>{e.preventDefault(),e.stopPropagation();try{await t.saveItems(),c.toast.success("Classroom published successfully")}catch(e){c.toast.error("Error while publishing classroom")}},disabled:t.itemsSelected.size<1},e.actions.import)))};var r=e("react"),o=e("@beyond-js/react-18-widgets/hooks"),n=e("./items"),i=e("../context"),l=e("pragmate-ui/components"),c=e("pragmate-ui/toast"),m=e("pragmate-ui/list")}}),k.set("./views/index",{hash:700439127,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){let[t,a]=(0,i.useState)(e.ready),[s,r]=(0,i.useState)(e.fetching),o=((0,d.useBinder)([e],()=>{a(e.ready),r(e.fetching)}),e.texts),n;return t?(n=e.items.length<1?l.EmptyList:u.ClassroomsList,i.default.createElement(c.ModuleContext.Provider,{value:{texts:o,store:e,fetching:s,totalItems:e.items.length}},i.default.createElement(n,{store:e}))):i.default.createElement(m.PreloadScreen,null)};var i=e("react"),l=e("./empty"),c=e("./context"),m=e("@aimpact/chat/shared/components"),d=e("@beyond-js/react-18-widgets/hooks"),u=e("./classroom-list")}}),k.set("./views/item/actions",{hash:1517931771,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({item:e}){let{texts:t,store:a}=(0,r.useModuleContext)();return s.default.createElement("section",{className:"card-footer__actions"},s.default.createElement(o.ConfirmAction,{textPopUp:t?.actions?.delete,icon:"delete",onConfirm:async()=>{await a.delete(e)}}))};var s=e("react"),r=e("../context"),o=e("@aimpact/ailearn-app/components/ui")}}),k.set("./views/item/index",{hash:184380642,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Classroom=function({data:e}){return a.default.createElement(s.Card,null,a.default.createElement(s.CardContent,null,a.default.createElement(r.default,{item:e})),a.default.createElement(s.CardFooter,null,a.default.createElement(o.default,{item:e})))};var a=e("react"),s=e("@aimpact/ailearn-app/components/ui"),r=e("./title"),o=e("./actions")}}),k.set("./views/item/title",{hash:3773496731,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({item:e}){var t=(0,o.useModuleContext)().texts;return a.createElement("section",null,a.createElement("div",{className:"title-card__container flex-container flex-space-between"},a.createElement(s.Link,{href:"/classrooms/view/"+e.id},a.createElement("h4",null,e.name)),e?.external?.id&&a.createElement(r.IconButton,{title:t.actions.gTooltip,icon:"google"})),a.createElement(n.UserData,{data:e.owner}),a.createElement("span",null,e.description))};var a=e("react"),s=e("pragmate-ui/components"),r=e("pragmate-ui/icons"),o=e("../context"),n=e("@aimpact/ailearn-app/components/ui")}}),j.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],j.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||s("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||s("View",e?e("./views/index").View:a)},s("__beyond_pkg",j),s("hmr",new function(){this.on=(e,t)=>j.hmr.on(e,t),this.off=(e,t)=>j.hmr.off(e,t)}),j.initialise(k)}}});