System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/tracking","@beyond-js/kernel@0.1.9/core","@beyond-js/reactive@1.2.0/model","@aimpact/ailearn-app@0.1.6-dev.16/main-layout.widget","@beyond-js/kernel@0.1.9/texts","react@18.2.0","pragmate-ui@1.0.0-beta.2/image","@aimpact/ailearn-app@0.1.6-dev.16/components/ui","pragmate-ui@1.0.0-beta.2/components","pragmate-ui@1.0.0-beta.2/alert","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@1.0.0-beta.2/list"],function(n,e){var t,a,s,i,r,l,c,o,d,m,u,p,g,f,h,v,y,w;return n({Controller:void 0,AccessDenied:void 0,View:void 0,EmptyList:void 0,List:void 0,Item:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){s=e},function(e){i=e},function(e){r=e},function(e){l=e},function(e){c=e},function(e){o=e},function(e){d=e},function(e){m=e},function(e){u=e},function(e){p=e},function(e){g=e},function(e){f=e},function(e){h=e},function(e){v=e}],execute:function(){w=a.Bundle,(y=new w({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.16/assignment/view",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",s],["@beyond-js/react-18-widgets/page",i],["@aimpact/ailearn-sdk/tracking",r],["@beyond-js/kernel/core",l],["@beyond-js/reactive/model",c],["@aimpact/ailearn-app/main-layout.widget",o],["@beyond-js/kernel/texts",d],["react",m],["pragmate-ui/image",u],["@aimpact/ailearn-app/components/ui",p],["pragmate-ui/components",g],["pragmate-ui/alert",f],["@beyond-js/react-18-widgets/hooks",h],["pragmate-ui/list",v]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-assignment-view",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.16/assignment/view.widget",is:"page",route:"/assignments/${id}",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.16/assignment/view.widget"),(w=new Map).set("./controller",{hash:2589136423,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),s=e("./views");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,globalThis.store=this.#store,this.#store}get Widget(){return s.View}show(){this.#store.load(this.uri.vars.get("id"))}}t.Controller=i}}),w.set("./store",{hash:1785392806,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-sdk/tracking"),n=e("@beyond-js/kernel/core"),s=e("@beyond-js/reactive/model"),i=e("@aimpact/ailearn-app/main-layout.widget"),r=e("@beyond-js/kernel/texts"),l=e("beyond_context");class c extends s.ReactiveModel{#model;get model(){return this.#model}#texts=new r.CurrentTexts(l.module.specifier);get texts(){return this.#texts?.value}#accessed;get accessed(){return this.#model?.accessed}get ready(){return super.ready&&this.#texts.ready}get accessDenied(){return["not_member","pending","invited"].includes(this.#model?.access?.toLowerCase())}#assignmentId;get assignmentId(){return this.#assignmentId}get found(){return this.#model.found}constructor(){super(),this.#texts.on("change",this.triggerEvent)}#id;get id(){return this.#id}async load(e){try{this.#id=e,i.LayoutBroker.clear(),this.#assignmentId=e,this.#model=a.Tracking.get({assignmentId:e}),this.#model.on("change",this.triggerEvent),await this.#model.load({id:e}),globalThis.m=this.#model,["not_member","pending","invited"].includes(this.#model.access)&&(super.ready=!0)}catch(e){"404"!==e.message&&"403"===e.message&&console.log("no cargo")}finally{super.ready=!0,this.triggerEvent()}}async access(){try{let e=new n.PendingPromise;return await this.#model.accessToAssignment(),globalThis.setTimeout(()=>{this.#accessed=!0,this.triggerEvent(),e.resolve(!0)},1500),e}catch(e){console.error(e)}}async requestAccess(){return this.model.requestClassroomAccess()}}t.StoreManager=c}}),w.set("./views/access-denied",{hash:3652787582,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AccessDenied=function({store:t}){let e=t.texts,a=t.model?.access?.toLowerCase(),{title:n,action:s,description:i,subtitle:r}=e[a]??"not_allowed",[l,c]=h.default.useState(),[o,d]=h.default.useState(),[m,u]=h.default.useState(!1),p={disabled:m},{classroom:g,module:f}=t.model.assignment;return h.default.createElement(y.PageContainer,{className:"container__error place-center"},l&&h.default.createElement(E.Alert,{type:"danger"},l),o&&h.default.createElement(E.Alert,{type:"success"},o),h.default.createElement("div",{className:"content"},h.default.createElement("header",null,h.default.createElement("h1",null,n),h.default.createElement("h5",null,r)),g&&f&&h.default.createElement(h.default.Fragment,null,h.default.createElement("article",{className:"access-classroom__container"},h.default.createElement("section",null,h.default.createElement(v.Image,{src:g.picture,alt:g.name})),h.default.createElement("section",null,h.default.createElement("h3",null,g?.name),h.default.createElement("h6",null,f?.title)))),h.default.createElement("p",null,i),h.default.createElement("footer",null,h.default.createElement(w.Button,{variant:"primary",onClick:async()=>{try{var e;u(!0),"pending"===a?await t.load(t.id):(e=await t.requestAccess()).status?d(e.data.message):c(e.error)}catch(e){console.error(e)}finally{u(!1)}},fetching:m,...p},s))),h.default.createElement("div",null,h.default.createElement(v.Image,{src:"/assets/images/students/not-allowed.webp",alt:"Student does not have access",className:"img-100"})))};var h=e("react"),v=e("pragmate-ui/image"),y=e("@aimpact/ailearn-app/components/ui"),w=e("pragmate-ui/components"),E=e("pragmate-ui/alert")}}),w.set("./views/context",{hash:254260041,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useAssignmentContext=t.AssignmentContext=void 0;var a=e("react");let n=t.AssignmentContext=a.default.createContext({});t.useAssignmentContext=()=>a.default.useContext(n)}}),w.set("./views/header",{hash:2400834756,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){let{store:e,texts:t,access:a}=(0,g.useAssignmentContext)(),[n,s]=p.default.useState(!1),[i,r]=p.default.useState(!1),{title:l,description:c,picture:o}=e.model.module;return p.default.createElement(p.default.Fragment,null,p.default.createElement("header",{className:"assigment-header"},p.default.createElement(d.EntityImage,{entity:"module",src:o,alt:l}),p.default.createElement("h1",null,l),p.default.createElement("p",{className:"p1"},c)),p.default.createElement(d.PageTitle,{as:"h3",title:t.activities.title},!a&&!i&&p.default.createElement(u.Button,{variant:"primary",fetching:n,onClick:async()=>{s(!0),await e.access(),s(!1),r(!0)}},t.access)),i&&p.default.createElement(m.Alert,{type:"success",className:"mt-10"},t.accessed))};var d=e("@aimpact/ailearn-app/components/ui"),m=e("pragmate-ui/alert"),u=e("pragmate-ui/components"),p=e("react"),g=e("./context")}}),w.set("./views/index",{hash:2341613247,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){let[t,a]=d.default.useState(e.ready),[,n]=d.default.useState(e.model.items),[s,i]=d.default.useState(e.model.accessed),[,r]=d.default.useState(e.model.access),l=e.texts;var c,o;return(0,u.useBinder)([e],()=>{a(e.ready),n(e.model.items),r(e.model.access),i(e.accessed)}),t&&e.accessDenied?d.default.createElement(y.AccessDenied,{store:e}):t&&!e.found?d.default.createElement("app-missing-control",null):t?(c=(o=e.model.activities).items?h.List:g.EmptyList,d.default.createElement(p.AssignmentContext.Provider,{value:o={texts:l,fetching:e.fetching,store:e,activities:o,access:s}},d.default.createElement(m.PageContainer,null,d.default.createElement("div",{className:"general-container"},d.default.createElement(f.Header,null),d.default.createElement(c,null))))):d.default.createElement(v.Preload,null)};var d=e("react"),m=e("@aimpact/ailearn-app/components/ui"),u=e("@beyond-js/react-18-widgets/hooks"),p=e("./context"),g=e("./list/empty"),f=e("./header"),h=e("./list"),v=e("./preload"),y=e("./access-denied")}}),w.set("./views/list/empty",{hash:2641747395,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,s.useAssignmentContext)().texts;return a.default.createElement(n.EmptyCard,{text:e.empty,icon:"info"})};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),s=e("../context")}}),w.set("./views/list/index",{hash:3947671626,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function(){var e=(0,s.useAssignmentContext)().activities;return n.default.createElement(i.List,{className:"list__container",items:e.items,control:a.Item})};var a=e("./item"),n=e("react"),s=e("../context"),i=e("pragmate-ui/list")}}),w.set("./views/list/item",{hash:1960730437,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({data:e,index:t}){let{store:a,texts:n,access:s}=(0,o.useAssignmentContext)(),i="multiple-choice"===e.type?"assessment":e.type,r=`/assignments/${a.assignmentId}/${i}/`+e.id;return s&&["conversation","content-theory","debate","character-talk"].includes(e.type)&&(r+="/chat/"+e.chat.id),t+=1,c.default.createElement(l.Card,{data:e,type:e.type,entity:"activity",link:r,disabled:!s},c.default.createElement(l.CardContent,{option:"column"},c.default.createElement("section",{className:"card-footer__container"},c.default.createElement("div",{className:"card__text-content"},c.default.createElement("span",{className:"p2"},n.textCounter,t),c.default.createElement("h6",{className:"card__title mt-10"},e.title," "),c.default.createElement("span",{className:"card__subtitle p2"},e.description)))))};var l=e("@aimpact/ailearn-app/components/ui"),c=e("react"),o=e("../context")}}),w.set("./views/preload",{hash:3672949900,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Preload=function(){var{}=(0,i.useAssignmentContext)();return s.default.createElement(a.PageContainer,null,s.default.createElement("header",{className:"assigment-header"},s.default.createElement(n.Image,{className:"entity-image image--preload"}),s.default.createElement(a.SkeletonText,{height:"5px",width:"100px"}),s.default.createElement(a.SkeletonText,{height:"5px",width:"200px"})),s.default.createElement(a.PageTitle,{preload:!0}))};var a=e("@aimpact/ailearn-app/components/ui"),n=e("pragmate-ui/image"),s=e("react"),i=e("./context")}}),y.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/access-denied",from:"AccessDenied",name:"AccessDenied"},{im:"./views/index",from:"View",name:"View"},{im:"./views/list/empty",from:"EmptyList",name:"EmptyList"},{im:"./views/list/index",from:"List",name:"List"},{im:"./views/list/item",from:"Item",name:"Item"}],y.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"AccessDenied"!==t||n("AccessDenied",e?e("./views/access-denied").AccessDenied:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a),!e&&"EmptyList"!==t||n("EmptyList",e?e("./views/list/empty").EmptyList:a),!e&&"List"!==t||n("List",e?e("./views/list/index").List:a),!e&&"Item"!==t||n("Item",e?e("./views/list/item").Item:a)},n("__beyond_pkg",y),n("hmr",new function(){this.on=(e,t)=>y.hmr.on(e,t),this.off=(e,t)=>y.hmr.off(e,t)}),y.initialise(w)}}});