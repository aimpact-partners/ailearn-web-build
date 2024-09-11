System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-app@0.1.6-dev.29/main-layout.widget","@beyond-js/widgets@1.1.0/controller","@beyond-js/reactive@1.2.0/model","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/kernel@0.1.9/texts","react@18.2.0","pragmate-ui@1.0.0-beta.6/components","@aimpact/ailearn-app@0.1.6-dev.29/components/ui","@aimpact/chat-sdk@1.1.0/session","@beyond-js/react-18-widgets@1.1.2/hooks","@beyond-js/kernel@0.1.9/routing","pragmate-ui@1.0.0-beta.6/icons","pragmate-ui@1.0.0-beta.6/list"],function(n,e){"use strict";var t,a,i,r,o,s,l,c,d,u,m,p,f,g,h,y,v,b,w;return n({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){i=e},function(e){r=e},function(e){o=e},function(e){s=e},function(e){l=e},function(e){c=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){h=e},function(e){y=e},function(e){v=e}],execute:function(){w=a.Bundle,(b=new w({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.29/organizations/list",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",i],["@beyond-js/react-18-widgets/page",r],["@aimpact/ailearn-app/main-layout.widget",o],["@beyond-js/widgets/controller",s],["@beyond-js/reactive/model",l],["@aimpact/ailearn-sdk/core",c],["@beyond-js/kernel/texts",d],["react",u],["pragmate-ui/components",m],["@aimpact/ailearn-app/components/ui",p],["@aimpact/chat-sdk/session",f],["@beyond-js/react-18-widgets/hooks",g],["@beyond-js/kernel/routing",h],["pragmate-ui/icons",y],["pragmate-ui/list",v]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-organizations-list",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.29/organizations/list.widget",is:"page",route:"/organizations/list",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.29/organizations/list.widget"),(w=new Map).set("./controller",{hash:1968607220,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./views"),i=e("./store");class r extends a.PageReactWidgetController{#store;createStore(){return this.#store=new i.StoreManager,this.#store}show(){this.#store.load()}get Widget(){return n.View}hide(){}}t.Controller=r}}),w.set("./store",{hash:2258581121,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),n=e("@aimpact/ailearn-sdk/core"),i=e("beyond_context"),r=e("@beyond-js/kernel/texts");class o extends a.ReactiveModel{isStore;#items;get items(){return this.model.items}#model;get model(){return this.#model}#itemsSelected=new Map;get itemsSelected(){return this.#itemsSelected}#texts=new r.CurrentTexts(i.module.specifier);get texts(){return this.#texts.value}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.#model=new n.Organizations,this.model.on("change",this.triggerEvent),this.#texts.on("change",this.triggerEvent)}async load(){try{this.fetching=!0,await this.model.load(),super.ready=!0}catch(e){console.error(e)}finally{this.fetching=!1}}async delete(e){await e.delete()}toggleItem(e){this.itemsSelected.has(e.id)&&(this.#itemsSelected.delete(e.id),this.triggerEvent())}}t.StoreManager=o}}),w.set("./views/context",{hash:197669903,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");const n=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(n)}}),w.set("./views/empty",{hash:543647172,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,i.useModuleContext)().texts;return a.default.createElement(r.EmptyCard,{text:e.empty.title,description:e.empty.description,icon:"edit"},a.default.createElement("div",{className:"actions flex-container flex-center"},a.default.createElement(n.Link,{href:"/organizations/create",className:"grow btn btn-primary"},e.actions.register)))};var a=e("react"),n=e("pragmate-ui/components"),i=e("./context"),r=e("@aimpact/ailearn-app/components/ui")}}),w.set("./views/header",{hash:140426853,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){const{texts:e,fetching:t,store:a}=(0,s.useModuleContext)(),n=c.sessionWrapper.user.displayName,[,i]=o.default.useState(t),r=((0,u.useBinder)([a],()=>i(a.fetching)),e=>m.routing.pushState(e.currentTarget.dataset.href));return o.default.createElement(o.default.Fragment,null,o.default.createElement(l.HeaderCard,{title:e.welcome.message.replace("%name",n),alt:"card-robot",image:"/assets/ai-robot.webp"}),a.items&&o.default.createElement(l.SubDivider,{title:e.title},o.default.createElement("div",{className:"buttons-header__container"},o.default.createElement(d.Button,{onClick:r,icon:"share-link",variant:"primary","data-href":"/organizations/join"},e.actions.join),o.default.createElement(d.Button,{onClick:r,"data-href":"/organizations/create",icon:"add",variant:"primary"},e.actions.register))))};var o=e("react"),s=e("./context"),l=e("@aimpact/ailearn-app/components/ui"),c=e("@aimpact/chat-sdk/session"),d=e("pragmate-ui/components"),u=e("@beyond-js/react-18-widgets/hooks"),m=e("@beyond-js/kernel/routing")}}),w.set("./views/index",{hash:3845690689,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=(0,d.useState)(e.ready),[n,i]=(0,d.useState)(e.fetching),[r,o]=(0,d.useState)(e.items.length),s=e.texts,l=((0,g.useBinder)([e],()=>{a(e.ready),i(e.fetching),o(e.items.length)}),d.default.useMemo(()=>({texts:s,store:e,fetching:n,totalItems:r}),[s,e,n,r]));var c;return t?(c=r<1?m.EmptyList:h.OrganizationsList,d.default.createElement(d.default.Fragment,null,d.default.createElement(f.ModuleContext.Provider,{value:l},d.default.createElement(u.PageContainer,null,d.default.createElement(u.PageTitle,{title:s.title},d.default.createElement("div",{className:"page-title__actions"},d.default.createElement(p.Link,{href:"/organizations/join"},s.actions.join),d.default.createElement(p.Link,{href:"/organizations/create"},d.default.createElement(y.Icon,{icon:"add-circle"}),s.actions.register))),d.default.createElement(c,{store:e}))))):d.default.createElement(u.PageLoader,{fetching:!0})};var d=e("react"),u=e("@aimpact/ailearn-app/components/ui"),m=e("./empty"),p=e("pragmate-ui/components"),f=e("./context"),g=e("@beyond-js/react-18-widgets/hooks"),h=e("./list"),y=e("pragmate-ui/icons")}}),w.set("./views/item/actions",{hash:3332734905,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({}){var{}=(0,a.useModuleContext)();return null},e("react");var a=e("../context");e("@aimpact/ailearn-app/components/ui")}}),w.set("./views/item/index",{hash:1878075103,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Organization=function({data:e}){return a.default.createElement(n.Card,null,a.default.createElement(n.CardContent,null,a.default.createElement(i.default,{item:e})),a.default.createElement(n.CardFooter,null,a.default.createElement(r.default,{item:e})))};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),i=e("./title"),r=e("./actions")}}),w.set("./views/item/title",{hash:1230832894,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({item:e}){return a.default.createElement("section",null,a.default.createElement("div",{className:"title-card__container flex-container flex-space-between"},a.default.createElement(n.Link,{href:"/organizations/view/"+e.id},a.default.createElement("h4",null,e.name))),a.default.createElement("span",null,e.description))};var a=e("react"),n=e("pragmate-ui/components")}}),w.set("./views/list",{hash:527795951,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OrganizationsList=function({store:e}){return a.default.createElement("article",{className:"organization-list__container"},a.default.createElement(i.List,{className:"list-unstyled grid-container g-2-columns mt-1",items:e.items,control:n.Organization}))};var a=e("react"),n=e("./item"),i=e("pragmate-ui/list")}}),b.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],b.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",b),n("hmr",new function(){this.on=(e,t)=>b.hmr.on(e,t),this.off=(e,t)=>b.hmr.off(e,t)}),b.initialise(w)}}});