System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.1.12/model","@aimpact/ailearn-sdk@1.0.0/core","@aimpact/ailearn-app@0.0.32/model/gclassroom","dayjs@1.11.10","react@18.2.0","pragmate-ui@0.1.1/list","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.32/components/ui","@aimpact/chat-sdk@1.0.0/session","pragmate-ui@0.1.1/alert","pragmate-ui@0.1.1/link","pragmate-ui@0.1.1/modal","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@0.1.1/icons","pragmate-ui@0.1.1/toast","@aimpact/ailearn-app@0.0.32/components/navbar-header.code","@aimpact/chat@1.0.1/shared/components","@aimpact/chat@1.0.1/shared/hooks","@aimpact/ailearn-app@0.0.32/config"],function(s,e){"use strict";var t,a,o,r,n,i,l,c,m,d,u,p,f,g,h,v,y,E,x,w,b,_,C,j,k;return s({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){o=e},function(e){r=e},function(e){n=e},function(e){i=e},function(e){l=e},function(e){c=e},function(e){m=e},function(e){d=e},function(e){u=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){h=e},function(e){v=e},function(e){y=e},function(e){E=e},function(e){x=e},function(e){w=e},function(e){b=e},function(e){_=e},function(e){C=e}],execute:function(){k=a.Bundle,(j=new k({module:{vspecifier:"@aimpact/ailearn-app@0.0.32/classrooms/list",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",o],["@beyond-js/react-18-widgets/page",r],["@beyond-js/reactive/model",n],["@aimpact/ailearn-sdk/core",i],["@aimpact/ailearn-app/model/gclassroom",l],["dayjs",c],["react",m],["pragmate-ui/list",d],["pragmate-ui/components",u],["@aimpact/ailearn-app/components/ui",p],["@aimpact/chat-sdk/session",f],["pragmate-ui/alert",g],["pragmate-ui/link",h],["pragmate-ui/modal",v],["@beyond-js/react-18-widgets/hooks",y],["pragmate-ui/icons",E],["pragmate-ui/toast",x],["@aimpact/ailearn-app/components/navbar-header.code",w],["@aimpact/chat/shared/components",b],["@aimpact/chat/shared/hooks",_],["@aimpact/ailearn-app/config",C]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-classroom-list",vspecifier:"@aimpact/ailearn-app@0.0.32/classrooms/list.widget",is:"page",route:"/classrooms/list",layout:"general-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.32/classrooms/list.widget"),(k=new Map).set("./controller",{hash:3542939638,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),s=e("./views"),o=e("./store");class r extends a.PageReactWidgetController{#store;createStore(){return this.#store=new o.StoreManager,this.#store}get Widget(){return s.View}}t.Controller=r}}),k.set("./store",{hash:3233327053,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),s=e("@aimpact/ailearn-sdk/core"),o=e("@aimpact/ailearn-app/model/gclassroom"),r=e("dayjs");class n extends a.ReactiveModel{#items;get items(){return this.model.items}#model;get model(){return this.#model}get gItems(){return 0<o.gclassroom.error.code?[]:o.gclassroom.classes.values().map(e=>({...e,imported:this.model.googleClassroomsIds.has(e.id)}))}#itemsSelected=new Map;get itemsSelected(){return this.#itemsSelected}constructor(){super(),this.#model=new s.Classrooms,globalThis.c=this.#model,this.model.on("change",this.triggerEvent),o.gclassroom.on("change",this.triggerEvent),this.#init(),this.load()}async load(){try{this.fetching=!0,await this.model.load(),this.ready=!0}catch(e){console.error(e)}finally{this.fetching=!1}}async delete(e){await e.delete()}loadClasses=async()=>o.gclassroom.courses();async#init(){var e=(0,r.default)();o.gclassroom.lastClassesQueryTime&&o.gclassroom.classes.size?(this.ready=!0,5<e.diff(o.gclassroom.lastClassesQueryTime,"minutes")&&this.loadClasses()):(this.loadClasses(),this.ready=!0)}async saveItemToImport(e){var t=new s.Classroom;await t.isReady,t.set({external:e.id,name:e.name,description:"It does not have a description"}),this.itemsSelected.set(e.id,t),this.triggerEvent()}toggleItem(e){this.itemsSelected.has(e.id)?(this.#itemsSelected.delete(e.id),this.triggerEvent()):this.saveItemToImport(e)}async saveItems(){try{this.fetching=!0;var e=[...this.#itemsSelected.values()].map(e=>({...e.getProperties()})),{status:t,data:a}=await this.model.importFromGoogleClassroom({items:e});if(t)return this.#itemsSelected=new Map,a;throw new Error("error publishing classroom")}catch(e){console.error(1,e)}finally{this.fetching=!1}}}t.StoreManager=n}}),k.set("./views/classroom-list",{hash:3520326632,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ClassroomsList=function({store:e}){return a.default.createElement("article",{className:"classroom-list__container"},a.default.createElement(o.List,{className:"list-unstyled grid-container g-2-columns mt-15",items:e.items,control:s.Classroom}))};var a=e("react"),s=e("./item"),o=e("pragmate-ui/list")}}),k.set("./views/context",{hash:2192064674,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");const s=t.ModuleContext=a.createContext({});t.useModuleContext=()=>a.useContext(s)}}),k.set("./views/empty",{hash:2085668566,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,o.useModuleContext)().texts;return a.default.createElement(r.EmptyCard,{text:e.empty.title,description:e.empty.description,icon:"edit"},a.default.createElement("div",{className:"actions flex-container flex-center"},a.default.createElement(s.Link,{href:"/classrooms/create",className:"grow btn btn-primary"},e.actions.create)))};var a=e("react"),s=e("pragmate-ui/components"),o=e("./context"),r=e("@aimpact/ailearn-app/components/ui")}}),k.set("./views/header",{hash:2094042495,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){const{texts:e,fetching:t,store:a}=(0,l.useModuleContext)(),[,s]=(m.sessionWrapper.user.displayName,i.default.useState(t)),[o,r]=i.default.useState(!1),n=!f.gclassroom.authorized;return(0,v.useBinder)([a],()=>s(a.fetching)),i.default.createElement(i.default.Fragment,null,n&&i.default.createElement("div",{className:"alert-extra__container"},i.default.createElement(d.Alert,{type:"info"},e.extraInfo)),a.items&&i.default.createElement(c.PageTitle,{title:e.title},i.default.createElement("div",{className:"buttons-header__container"},i.default.createElement(p.Link,{className:"add-item",href:"/classrooms/join"},i.default.createElement(u.Button,{icon:"share-link",variant:"primary"},e.actions.join)),i.default.createElement(p.Link,{className:"add-item",href:"/classrooms/create"},i.default.createElement(u.Button,{icon:"add",variant:"primary"},e.actions.create)))),o&&i.default.createElement(g.Modal,{show:!0,className:"modal-import__general",onClose:function(){r(!o)}},i.default.createElement(h.Import,null)))};var i=e("react"),l=e("./context"),c=e("@aimpact/ailearn-app/components/ui"),m=e("@aimpact/chat-sdk/session"),d=e("pragmate-ui/alert"),u=e("pragmate-ui/components"),p=e("pragmate-ui/link"),f=e("@aimpact/ailearn-app/model/gclassroom"),g=e("pragmate-ui/modal"),h=e("./import"),v=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./views/import/empty",{hash:3044890623,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyExplorer=function({}){var e=(0,o.useModuleContext)().texts;return a.default.createElement("div",{className:"items-modal__empty"},a.default.createElement(s.IconButton,{icon:"circle-exclamation",title:e.empty.titleImport}),a.default.createElement("span",null,e.empty.labelImport))};var a=e("react"),s=e("pragmate-ui/icons"),o=e("../context")}}),k.set("./views/import/index",{hash:947523122,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Import=function(){const{store:e,texts:t}=(0,f.useModuleContext)(),[a,s]=l.default.useState(e.fetching),[o,r]=l.default.useState(e.ready),n=((0,c.useBinder)([e],()=>{r(e.ready),s(e.fetching)}),m.gclassroom.ready&&o);var i;return n?(i=e.gItems.length?p.List:u.EmptyExplorer,l.default.createElement("div",{className:"modal-import__container"},l.default.createElement("h4",null,t.import.title),l.default.createElement(i,null),l.default.createElement(g.ProcessContainer,{fetching:a}))):l.default.createElement(d.Spinner,{active:!0,type:"primary"})};var l=e("react"),c=e("@beyond-js/react-18-widgets/hooks"),m=e("@aimpact/ailearn-app/model/gclassroom"),d=e("pragmate-ui/components"),u=e("./empty"),p=e("./list"),f=e("../context"),g=e("@aimpact/ailearn-app/components/ui")}}),k.set("./views/import/items/index",{hash:1993213349,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0;var c=e("react"),m=e("../../context"),d=e("pragmate-ui/icons"),u=e("@beyond-js/react-18-widgets/hooks");t.Item=({item:t})=>{const{store:a,texts:e}=(0,m.useModuleContext)(),[s,o]=c.default.useState(!1),[r,n]=c.default.useState(a.items),i=((0,u.useBinder)([a],()=>n(a.items)),r.some(e=>e.external.id===t.id));var l=a.itemsSelected.has(t.id);return c.default.createElement("li",{key:t.id,className:"gclassroom-item "+(i&&" already"),onClick:e=>{i||(o(!s),a.toggleItem(t))}},c.default.createElement("span",{className:"flex-container flex-space-between"},t.name),l&&c.default.createElement(d.Icon,{icon:"check"}),i&&c.default.createElement("div",{className:"saved__item"},c.default.createElement("span",null,e.actions.imported),c.default.createElement(d.Icon,{icon:"check",className:"disabled-icon"})))}}}),k.set("./views/import/list",{hash:913571725,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function(){const{store:t,texts:e}=(0,i.useModuleContext)(),[a,s]=o.default.useState(t.gItems);return(0,r.useBinder)([t],()=>s(t.gItems)),o.default.createElement(o.default.Fragment,null,o.default.createElement(m.List,{specs:{},items:a,control:n.Item,className:"gclassrooms-modal__list"}),o.default.createElement("div",{className:"gclassroom-modal__action flex-container flex-end"},o.default.createElement(l.Button,{icon:"arrowDownloads",variant:"primary",className:"import-button__action circle",onClick:async e=>{e.preventDefault(),e.stopPropagation();try{await t.saveItems(),c.toast.success("Classroom published successfully")}catch(e){c.toast.error("Error while publishing classroom")}},disabled:t.itemsSelected.size<1},e.actions.import)))};var o=e("react"),r=e("@beyond-js/react-18-widgets/hooks"),n=e("./items"),i=e("../context"),l=e("pragmate-ui/components"),c=e("pragmate-ui/toast"),m=e("pragmate-ui/list")}}),k.set("./views/index",{hash:1976729040,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=(0,E.useTexts)(v.module.specifier),[s,o]=(0,m.useState)(e.ready),[r,n]=(0,m.useState)(e.fetching),[i,l]=(0,m.useState)(e.items.length);var c;return(0,y.useBinder)([e],()=>{o(e.ready),n(e.fetching),l(e.items.length)}),s&&t&&w.gclassroom.ready?(c=i<1?p.EmptyList:x.ClassroomsList,m.default.createElement(g.ModuleContext.Provider,{value:{texts:a,store:e,fetching:r,totalItems:i}},m.default.createElement(u.NavbarHeader,{breadcrumb:[[a.breadcrumb.classrooms,""]]}),m.default.createElement(d.PageContainer,null,m.default.createElement(f.Header,null),m.default.createElement(c,{store:e})))):m.default.createElement(h.PreloadScreen,null)};var m=e("react"),d=e("@aimpact/ailearn-app/components/ui"),u=e("@aimpact/ailearn-app/components/navbar-header.code"),p=e("./empty"),f=e("./header"),g=e("./context"),h=e("@aimpact/chat/shared/components"),v=e("beyond_context"),y=e("@beyond-js/react-18-widgets/hooks"),E=e("@aimpact/chat/shared/hooks"),x=e("./classroom-list"),w=e("@aimpact/ailearn-app/model/gclassroom")}}),k.set("./views/item/actions",{hash:1517931771,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({item:e}){const{texts:t,store:a}=(0,o.useModuleContext)();return s.default.createElement("section",{className:"card-footer__actions"},s.default.createElement(r.ConfirmAction,{textPopUp:t?.actions?.delete,icon:"delete",onConfirm:async()=>{await a.delete(e)}}))};var s=e("react"),o=e("../context"),r=e("@aimpact/ailearn-app/components/ui")}}),k.set("./views/item/index",{hash:184380642,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Classroom=function({data:e}){return a.default.createElement(s.Card,null,a.default.createElement(s.CardContent,null,a.default.createElement(o.default,{item:e})),a.default.createElement(s.CardFooter,null,a.default.createElement(r.default,{item:e})))};var a=e("react"),s=e("@aimpact/ailearn-app/components/ui"),o=e("./title"),r=e("./actions")}}),k.set("./views/item/title",{hash:3370489448,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({item:e}){var t=(0,r.useModuleContext)().texts;return a.default.createElement("section",null,a.default.createElement("div",{className:"title-card__container flex-container flex-space-between"},a.default.createElement(s.Link,{href:"/classrooms/view/"+e.id},a.default.createElement("h4",null,e.name)),e?.external?.id&&a.default.createElement(o.IconButton,{title:t.actions.gTooltip,icon:"google"})),a.default.createElement("span",null,e.description))};var a=e("react"),s=e("pragmate-ui/components"),o=e("pragmate-ui/icons"),r=e("../context")}}),j.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],j.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||s("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||s("View",e?e("./views/index").View:a)},s("__beyond_pkg",j),s("hmr",new function(){this.on=(e,t)=>j.hmr.on(e,t),this.off=(e,t)=>j.hmr.off(e,t)}),j.initialise(k)}}});System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.1.12/model","@aimpact/ailearn-sdk@1.0.0/core","@aimpact/ailearn-app@0.0.32/model/gclassroom","dayjs@1.11.10","react@18.2.0","pragmate-ui@0.1.1/list","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.32/components/ui","@aimpact/chat-sdk@1.0.0/session","pragmate-ui@0.1.1/alert","pragmate-ui@0.1.1/link","pragmate-ui@0.1.1/modal","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@0.1.1/icons","pragmate-ui@0.1.1/toast","@aimpact/ailearn-app@0.0.32/components/navbar-header.code","@aimpact/chat@1.0.1/shared/components","@aimpact/chat@1.0.1/shared/hooks","@aimpact/ailearn-app@0.0.32/config"],function(s,e){"use strict";var t,a,o,r,n,i,l,c,m,d,u,p,f,g,h,v,y,E,x,w,b,_,C,j,k;return s({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){o=e},function(e){r=e},function(e){n=e},function(e){i=e},function(e){l=e},function(e){c=e},function(e){m=e},function(e){d=e},function(e){u=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){h=e},function(e){v=e},function(e){y=e},function(e){E=e},function(e){x=e},function(e){w=e},function(e){b=e},function(e){_=e},function(e){C=e}],execute:function(){k=a.Bundle,(j=new k({module:{vspecifier:"@aimpact/ailearn-app@0.0.32/classrooms/list",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",o],["@beyond-js/react-18-widgets/page",r],["@beyond-js/reactive/model",n],["@aimpact/ailearn-sdk/core",i],["@aimpact/ailearn-app/model/gclassroom",l],["dayjs",c],["react",m],["pragmate-ui/list",d],["pragmate-ui/components",u],["@aimpact/ailearn-app/components/ui",p],["@aimpact/chat-sdk/session",f],["pragmate-ui/alert",g],["pragmate-ui/link",h],["pragmate-ui/modal",v],["@beyond-js/react-18-widgets/hooks",y],["pragmate-ui/icons",E],["pragmate-ui/toast",x],["@aimpact/ailearn-app/components/navbar-header.code",w],["@aimpact/chat/shared/components",b],["@aimpact/chat/shared/hooks",_],["@aimpact/ailearn-app/config",C]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-classroom-list",vspecifier:"@aimpact/ailearn-app@0.0.32/classrooms/list.widget",is:"page",route:"/classrooms/list",layout:"general-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.32/classrooms/list.widget"),(k=new Map).set("./controller",{hash:3542939638,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),s=e("./views"),o=e("./store");class r extends a.PageReactWidgetController{#store;createStore(){return this.#store=new o.StoreManager,this.#store}get Widget(){return s.View}}t.Controller=r}}),k.set("./store",{hash:3233327053,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),s=e("@aimpact/ailearn-sdk/core"),o=e("@aimpact/ailearn-app/model/gclassroom"),r=e("dayjs");class n extends a.ReactiveModel{#items;get items(){return this.model.items}#model;get model(){return this.#model}get gItems(){return 0<o.gclassroom.error.code?[]:o.gclassroom.classes.values().map(e=>({...e,imported:this.model.googleClassroomsIds.has(e.id)}))}#itemsSelected=new Map;get itemsSelected(){return this.#itemsSelected}constructor(){super(),this.#model=new s.Classrooms,globalThis.c=this.#model,this.model.on("change",this.triggerEvent),o.gclassroom.on("change",this.triggerEvent),this.#init(),this.load()}async load(){try{this.fetching=!0,await this.model.load(),this.ready=!0}catch(e){console.error(e)}finally{this.fetching=!1}}async delete(e){await e.delete()}loadClasses=async()=>o.gclassroom.courses();async#init(){var e=(0,r.default)();o.gclassroom.lastClassesQueryTime&&o.gclassroom.classes.size?(this.ready=!0,5<e.diff(o.gclassroom.lastClassesQueryTime,"minutes")&&this.loadClasses()):(this.loadClasses(),this.ready=!0)}async saveItemToImport(e){var t=new s.Classroom;await t.isReady,t.set({external:e.id,name:e.name,description:"It does not have a description"}),this.itemsSelected.set(e.id,t),this.triggerEvent()}toggleItem(e){this.itemsSelected.has(e.id)?(this.#itemsSelected.delete(e.id),this.triggerEvent()):this.saveItemToImport(e)}async saveItems(){try{this.fetching=!0;var e=[...this.#itemsSelected.values()].map(e=>({...e.getProperties()})),{status:t,data:a}=await this.model.importFromGoogleClassroom({items:e});if(t)return this.#itemsSelected=new Map,a;throw new Error("error publishing classroom")}catch(e){console.error(1,e)}finally{this.fetching=!1}}}t.StoreManager=n}}),k.set("./views/classroom-list",{hash:3520326632,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ClassroomsList=function({store:e}){return a.default.createElement("article",{className:"classroom-list__container"},a.default.createElement(o.List,{className:"list-unstyled grid-container g-2-columns mt-15",items:e.items,control:s.Classroom}))};var a=e("react"),s=e("./item"),o=e("pragmate-ui/list")}}),k.set("./views/context",{hash:2192064674,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");const s=t.ModuleContext=a.createContext({});t.useModuleContext=()=>a.useContext(s)}}),k.set("./views/empty",{hash:2085668566,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,o.useModuleContext)().texts;return a.default.createElement(r.EmptyCard,{text:e.empty.title,description:e.empty.description,icon:"edit"},a.default.createElement("div",{className:"actions flex-container flex-center"},a.default.createElement(s.Link,{href:"/classrooms/create",className:"grow btn btn-primary"},e.actions.create)))};var a=e("react"),s=e("pragmate-ui/components"),o=e("./context"),r=e("@aimpact/ailearn-app/components/ui")}}),k.set("./views/header",{hash:2094042495,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){const{texts:e,fetching:t,store:a}=(0,l.useModuleContext)(),[,s]=(m.sessionWrapper.user.displayName,i.default.useState(t)),[o,r]=i.default.useState(!1),n=!f.gclassroom.authorized;return(0,v.useBinder)([a],()=>s(a.fetching)),i.default.createElement(i.default.Fragment,null,n&&i.default.createElement("div",{className:"alert-extra__container"},i.default.createElement(d.Alert,{type:"info"},e.extraInfo)),a.items&&i.default.createElement(c.PageTitle,{title:e.title},i.default.createElement("div",{className:"buttons-header__container"},i.default.createElement(p.Link,{className:"add-item",href:"/classrooms/join"},i.default.createElement(u.Button,{icon:"share-link",variant:"primary"},e.actions.join)),i.default.createElement(p.Link,{className:"add-item",href:"/classrooms/create"},i.default.createElement(u.Button,{icon:"add",variant:"primary"},e.actions.create)))),o&&i.default.createElement(g.Modal,{show:!0,className:"modal-import__general",onClose:function(){r(!o)}},i.default.createElement(h.Import,null)))};var i=e("react"),l=e("./context"),c=e("@aimpact/ailearn-app/components/ui"),m=e("@aimpact/chat-sdk/session"),d=e("pragmate-ui/alert"),u=e("pragmate-ui/components"),p=e("pragmate-ui/link"),f=e("@aimpact/ailearn-app/model/gclassroom"),g=e("pragmate-ui/modal"),h=e("./import"),v=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./views/import/empty",{hash:3044890623,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyExplorer=function({}){var e=(0,o.useModuleContext)().texts;return a.default.createElement("div",{className:"items-modal__empty"},a.default.createElement(s.IconButton,{icon:"circle-exclamation",title:e.empty.titleImport}),a.default.createElement("span",null,e.empty.labelImport))};var a=e("react"),s=e("pragmate-ui/icons"),o=e("../context")}}),k.set("./views/import/index",{hash:947523122,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Import=function(){const{store:e,texts:t}=(0,f.useModuleContext)(),[a,s]=l.default.useState(e.fetching),[o,r]=l.default.useState(e.ready),n=((0,c.useBinder)([e],()=>{r(e.ready),s(e.fetching)}),m.gclassroom.ready&&o);var i;return n?(i=e.gItems.length?p.List:u.EmptyExplorer,l.default.createElement("div",{className:"modal-import__container"},l.default.createElement("h4",null,t.import.title),l.default.createElement(i,null),l.default.createElement(g.ProcessContainer,{fetching:a}))):l.default.createElement(d.Spinner,{active:!0,type:"primary"})};var l=e("react"),c=e("@beyond-js/react-18-widgets/hooks"),m=e("@aimpact/ailearn-app/model/gclassroom"),d=e("pragmate-ui/components"),u=e("./empty"),p=e("./list"),f=e("../context"),g=e("@aimpact/ailearn-app/components/ui")}}),k.set("./views/import/items/index",{hash:1993213349,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0;var c=e("react"),m=e("../../context"),d=e("pragmate-ui/icons"),u=e("@beyond-js/react-18-widgets/hooks");t.Item=({item:t})=>{const{store:a,texts:e}=(0,m.useModuleContext)(),[s,o]=c.default.useState(!1),[r,n]=c.default.useState(a.items),i=((0,u.useBinder)([a],()=>n(a.items)),r.some(e=>e.external.id===t.id));var l=a.itemsSelected.has(t.id);return c.default.createElement("li",{key:t.id,className:"gclassroom-item "+(i&&" already"),onClick:e=>{i||(o(!s),a.toggleItem(t))}},c.default.createElement("span",{className:"flex-container flex-space-between"},t.name),l&&c.default.createElement(d.Icon,{icon:"check"}),i&&c.default.createElement("div",{className:"saved__item"},c.default.createElement("span",null,e.actions.imported),c.default.createElement(d.Icon,{icon:"check",className:"disabled-icon"})))}}}),k.set("./views/import/list",{hash:913571725,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function(){const{store:t,texts:e}=(0,i.useModuleContext)(),[a,s]=o.default.useState(t.gItems);return(0,r.useBinder)([t],()=>s(t.gItems)),o.default.createElement(o.default.Fragment,null,o.default.createElement(m.List,{specs:{},items:a,control:n.Item,className:"gclassrooms-modal__list"}),o.default.createElement("div",{className:"gclassroom-modal__action flex-container flex-end"},o.default.createElement(l.Button,{icon:"arrowDownloads",variant:"primary",className:"import-button__action circle",onClick:async e=>{e.preventDefault(),e.stopPropagation();try{await t.saveItems(),c.toast.success("Classroom published successfully")}catch(e){c.toast.error("Error while publishing classroom")}},disabled:t.itemsSelected.size<1},e.actions.import)))};var o=e("react"),r=e("@beyond-js/react-18-widgets/hooks"),n=e("./items"),i=e("../context"),l=e("pragmate-ui/components"),c=e("pragmate-ui/toast"),m=e("pragmate-ui/list")}}),k.set("./views/index",{hash:1976729040,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=(0,E.useTexts)(v.module.specifier),[s,o]=(0,m.useState)(e.ready),[r,n]=(0,m.useState)(e.fetching),[i,l]=(0,m.useState)(e.items.length);var c;return(0,y.useBinder)([e],()=>{o(e.ready),n(e.fetching),l(e.items.length)}),s&&t&&w.gclassroom.ready?(c=i<1?p.EmptyList:x.ClassroomsList,m.default.createElement(g.ModuleContext.Provider,{value:{texts:a,store:e,fetching:r,totalItems:i}},m.default.createElement(u.NavbarHeader,{breadcrumb:[[a.breadcrumb.classrooms,""]]}),m.default.createElement(d.PageContainer,null,m.default.createElement(f.Header,null),m.default.createElement(c,{store:e})))):m.default.createElement(h.PreloadScreen,null)};var m=e("react"),d=e("@aimpact/ailearn-app/components/ui"),u=e("@aimpact/ailearn-app/components/navbar-header.code"),p=e("./empty"),f=e("./header"),g=e("./context"),h=e("@aimpact/chat/shared/components"),v=e("beyond_context"),y=e("@beyond-js/react-18-widgets/hooks"),E=e("@aimpact/chat/shared/hooks"),x=e("./classroom-list"),w=e("@aimpact/ailearn-app/model/gclassroom")}}),k.set("./views/item/actions",{hash:1517931771,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({item:e}){const{texts:t,store:a}=(0,o.useModuleContext)();return s.default.createElement("section",{className:"card-footer__actions"},s.default.createElement(r.ConfirmAction,{textPopUp:t?.actions?.delete,icon:"delete",onConfirm:async()=>{await a.delete(e)}}))};var s=e("react"),o=e("../context"),r=e("@aimpact/ailearn-app/components/ui")}}),k.set("./views/item/index",{hash:184380642,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Classroom=function({data:e}){return a.default.createElement(s.Card,null,a.default.createElement(s.CardContent,null,a.default.createElement(o.default,{item:e})),a.default.createElement(s.CardFooter,null,a.default.createElement(r.default,{item:e})))};var a=e("react"),s=e("@aimpact/ailearn-app/components/ui"),o=e("./title"),r=e("./actions")}}),k.set("./views/item/title",{hash:3370489448,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({item:e}){var t=(0,r.useModuleContext)().texts;return a.default.createElement("section",null,a.default.createElement("div",{className:"title-card__container flex-container flex-space-between"},a.default.createElement(s.Link,{href:"/classrooms/view/"+e.id},a.default.createElement("h4",null,e.name)),e?.external?.id&&a.default.createElement(o.IconButton,{title:t.actions.gTooltip,icon:"google"})),a.default.createElement("span",null,e.description))};var a=e("react"),s=e("pragmate-ui/components"),o=e("pragmate-ui/icons"),r=e("../context")}}),j.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],j.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||s("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||s("View",e?e("./views/index").View:a)},s("__beyond_pkg",j),s("hmr",new function(){this.on=(e,t)=>j.hmr.on(e,t),this.off=(e,t)=>j.hmr.off(e,t)}),j.initialise(k)}}});