System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/kernel@0.1.9/core","@beyond-js/reactive@1.1.12/model","@aimpact/ailearn-app@0.0.32/coins-layout.widget","@beyond-js/kernel@0.1.9/texts","react@18.2.0","@aimpact/ailearn-app@0.0.32/components/ui","pragmate-ui@0.1.1/alert","pragmate-ui@0.1.1/components","pragmate-ui@0.1.1/image","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.1/shared/components"],function(n,e){"use strict";var t,a,s,i,r,o,c,l,d,m,u,p,f,g,y,h,v,w;return n({Controller:void 0,View:void 0,EmptyList:void 0,List:void 0,Item:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){s=e},function(e){i=e},function(e){r=e},function(e){o=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){m=e},function(e){u=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){y=e},function(e){h=e}],execute:function(){w=a.Bundle,(v=new w({module:{vspecifier:"@aimpact/ailearn-app@0.0.32/assignment/view",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",s],["@beyond-js/react-18-widgets/page",i],["@aimpact/ailearn-sdk/core",r],["@beyond-js/kernel/core",o],["@beyond-js/reactive/model",c],["@aimpact/ailearn-app/coins-layout.widget",l],["@beyond-js/kernel/texts",d],["react",m],["@aimpact/ailearn-app/components/ui",u],["pragmate-ui/alert",p],["pragmate-ui/components",f],["pragmate-ui/image",g],["@beyond-js/react-18-widgets/hooks",y],["@aimpact/chat/shared/components",h]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-assignment-view",vspecifier:"@aimpact/ailearn-app@0.0.32/assignment/view.widget",is:"page",route:"/assignments/${id}",layout:"coins-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.32/assignment/view.widget"),(w=new Map).set("./controller",{hash:2589136423,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),s=e("./views");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,globalThis.store=this.#store,this.#store}get Widget(){return s.View}show(){this.#store.load(this.uri.vars.get("id"))}}t.Controller=i}}),w.set("./store",{hash:4018084404,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-sdk/core"),n=e("@beyond-js/kernel/core"),s=e("@beyond-js/reactive/model"),i=e("@aimpact/ailearn-app/coins-layout.widget"),r=e("@beyond-js/kernel/texts"),o=e("beyond_context");class c extends s.ReactiveModel{#model;get model(){return this.#model}#texts=new r.CurrentTexts(o.module.specifier);get texts(){return this.#texts?.value}#accessed;get accessed(){return this.#accessed}get ready(){return super.ready&&this.#texts.ready}#assignmentId;get assignmentId(){return this.#assignmentId}#found;get found(){return this.#found}constructor(){super(),this.#texts.on("change",this.triggerEvent)}async load(e){try{i.LayoutBroker.clear(),this.#assignmentId=e,this.#model=new a.Assignment({id:e}),await this.#model.load({id:e}),this.#accessed=this.#model.accessed,super.ready=!0,this.#found=!0,this.triggerEvent()}catch(e){super.ready=!0,this.#found=!1}}async access(){try{const e=new n.PendingPromise;return await this.#model.access(),globalThis.setTimeout(()=>{this.#accessed=!0,this.triggerEvent(),e.resolve(!0)},1500),e}catch(e){console.error(e)}}}t.StoreManager=c}}),w.set("./views/context",{hash:254260041,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useAssignmentContext=t.AssignmentContext=void 0;var a=e("react");const n=t.AssignmentContext=a.default.createContext({});t.useAssignmentContext=()=>a.default.useContext(n)}}),w.set("./views/header",{hash:225749186,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){const{store:e,texts:t,access:a}=(0,f.useAssignmentContext)(),[n,s]=p.default.useState(!1),[i,r]=p.default.useState(!1),{title:o,description:c,picture:l}=e.model.module;return p.default.createElement(p.default.Fragment,null,p.default.createElement("header",{className:"assigment-header"},p.default.createElement(g.Image,{src:l,alt:o}),p.default.createElement("h1",null,o),p.default.createElement("p",{className:"p1"},c)),p.default.createElement(d.SubDivider,{title:t.activities.title},!a&&!i&&p.default.createElement(u.Button,{variant:"primary",fetching:n,onClick:async()=>{s(!0),await e.access(),s(!1),r(!0)}},t.access)),i&&p.default.createElement(m.Alert,{type:"success",className:"mt-10"},t.accessed))};var d=e("@aimpact/ailearn-app/components/ui"),m=e("pragmate-ui/alert"),u=e("pragmate-ui/components"),p=e("react"),f=e("./context"),g=e("pragmate-ui/image")}}),w.set("./views/index",{hash:390390848,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=l.default.useState(e.ready),[,n]=l.default.useState(e.model.items),[s,i]=l.default.useState(e.model.accessed),r=e.texts;var o,c;return(0,m.useBinder)([e],()=>{a(e.ready),n(e.model.items),i(e.accessed)}),t&&!e.found?l.default.createElement("app-missing",null):t?(o=(c=e.model.activities).items?y.List:f.EmptyList,c={texts:r,fetching:e.fetching,store:e,activities:c,access:s},l.default.createElement(u.AssignmentContext.Provider,{value:c},l.default.createElement(d.PageContainer,null,l.default.createElement("div",{className:"general-container"},l.default.createElement(g.Header,null),l.default.createElement(o,null))))):l.default.createElement(p.PreloadScreen,null)};var l=e("react"),d=e("@aimpact/ailearn-app/components/ui"),m=e("@beyond-js/react-18-widgets/hooks"),u=e("./context"),p=e("@aimpact/chat/shared/components"),f=e("./list/empty"),g=e("./header"),y=e("./list")}}),w.set("./views/list/empty",{hash:2641747395,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,s.useAssignmentContext)().texts;return a.default.createElement(n.EmptyCard,{text:e.empty,icon:"info"})};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),s=e("../context")}}),w.set("./views/list/index",{hash:394293936,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function(){var e=(0,s.useAssignmentContext)().activities;return n.default.createElement(i.ListContainer,{items:e.items,control:a.Item})};var a=e("./item"),n=e("react"),s=e("../context"),i=e("@aimpact/ailearn-app/components/ui")}}),w.set("./views/list/item",{hash:1675374334,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({data:e,index:t}){var{store:a,texts:n,access:s}=(0,l.useAssignmentContext)(),i="multiple-choice"===e.type?"assessment":e.type;let r=`/assignments/${a.assignmentId}/${i}/`+e.id;return s&&["conversation","content-theory","debate","character-talk"].includes(e.type)&&(r+="/chat/"+e.chat.id),c.default.createElement(o.Card,{data:e,link:r,disabled:!s},c.default.createElement(o.CardContent,{option:"column"},c.default.createElement("section",{className:"card-footer__container"},c.default.createElement("div",{className:"card__text-content"},c.default.createElement("span",{className:"p2"},n.textCounter,t+1),c.default.createElement("h4",{className:"card__title mt-10"},e.title),c.default.createElement("span",{className:"card__subtitle p2"},e.description)))))};var o=e("@aimpact/ailearn-app/components/ui"),c=e("react"),l=e("../context")}}),v.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"},{im:"./views/list/empty",from:"EmptyList",name:"EmptyList"},{im:"./views/list/index",from:"List",name:"List"},{im:"./views/list/item",from:"Item",name:"Item"}],v.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a),!e&&"EmptyList"!==t||n("EmptyList",e?e("./views/list/empty").EmptyList:a),!e&&"List"!==t||n("List",e?e("./views/list/index").List:a),!e&&"Item"!==t||n("Item",e?e("./views/list/item").Item:a)},n("__beyond_pkg",v),n("hmr",new function(){this.on=(e,t)=>v.hmr.on(e,t),this.off=(e,t)=>v.hmr.off(e,t)}),v.initialise(w)}}});