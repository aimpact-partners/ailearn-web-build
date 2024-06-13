System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/tracking","@beyond-js/kernel@0.1.9/core","@beyond-js/reactive@1.1.12/model","@aimpact/ailearn-app@0.0.46.dev-20/main-layout.widget","@beyond-js/kernel@0.1.9/texts","react@18.2.0","@aimpact/ailearn-app@0.0.46.dev-20/components/ui","pragmate-ui@0.1.1/alert","pragmate-ui@0.1.1/components","pragmate-ui@0.1.1/image","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.1/shared/components"],function(n,e){"use strict";var t,a,s,i,r,o,c,l,d,m,u,p,f,g,y,h,v,w;return n({Controller:void 0,View:void 0,EmptyList:void 0,List:void 0,Item:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){s=e},function(e){i=e},function(e){r=e},function(e){o=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){m=e},function(e){u=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){y=e},function(e){h=e}],execute:function(){w=a.Bundle,(v=new w({module:{vspecifier:"@aimpact/ailearn-app@0.0.46.dev-20/assignment/view",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",s],["@beyond-js/react-18-widgets/page",i],["@aimpact/ailearn-sdk/tracking",r],["@beyond-js/kernel/core",o],["@beyond-js/reactive/model",c],["@aimpact/ailearn-app/main-layout.widget",l],["@beyond-js/kernel/texts",d],["react",m],["@aimpact/ailearn-app/components/ui",u],["pragmate-ui/alert",p],["pragmate-ui/components",f],["pragmate-ui/image",g],["@beyond-js/react-18-widgets/hooks",y],["@aimpact/chat/shared/components",h]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-assignment-view",vspecifier:"@aimpact/ailearn-app@0.0.46.dev-20/assignment/view.widget",is:"page",route:"/assignments/${id}",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.46.dev-20/assignment/view.widget"),(w=new Map).set("./controller",{hash:2589136423,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),s=e("./views");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,globalThis.store=this.#store,this.#store}get Widget(){return s.View}show(){this.#store.load(this.uri.vars.get("id"))}}t.Controller=i}}),w.set("./store",{hash:3496669586,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-sdk/tracking"),n=e("@beyond-js/kernel/core"),s=e("@beyond-js/reactive/model"),i=e("@aimpact/ailearn-app/main-layout.widget"),r=e("@beyond-js/kernel/texts"),o=e("beyond_context");class c extends s.ReactiveModel{#model;get model(){return this.#model}#texts=new r.CurrentTexts(o.module.specifier);get texts(){return this.#texts?.value}#accessed;get accessed(){return this.#accessed}get ready(){return super.ready&&this.#texts.ready}#assignmentId;get assignmentId(){return this.#assignmentId}#found;get found(){return this.#found}constructor(){super(),this.#texts.on("change",this.triggerEvent)}async load(e){try{i.LayoutBroker.clear(),this.#assignmentId=e,this.#model=new a.Tracking({assignmentId:e}),await this.#model.load({id:e}),this.#accessed=this.#model.accessed,super.ready=!0,this.#found=!0,this.triggerEvent()}catch(e){console.error(e),super.ready=!0,this.#found=!1}}async access(){try{const e=new n.PendingPromise;return await this.#model.access(),globalThis.setTimeout(()=>{this.#accessed=!0,this.triggerEvent(),e.resolve(!0)},1500),e}catch(e){console.error(e)}}}t.StoreManager=c}}),w.set("./views/context",{hash:254260041,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useAssignmentContext=t.AssignmentContext=void 0;var a=e("react");const n=t.AssignmentContext=a.default.createContext({});t.useAssignmentContext=()=>a.default.useContext(n)}}),w.set("./views/header",{hash:2400834756,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){const{store:e,texts:t,access:a}=(0,f.useAssignmentContext)(),[n,s]=p.default.useState(!1),[i,r]=p.default.useState(!1),{title:o,description:c,picture:l}=e.model.module;return p.default.createElement(p.default.Fragment,null,p.default.createElement("header",{className:"assigment-header"},p.default.createElement(d.EntityImage,{entity:"module",src:l,alt:o}),p.default.createElement("h1",null,o),p.default.createElement("p",{className:"p1"},c)),p.default.createElement(d.PageTitle,{as:"h3",title:t.activities.title},!a&&!i&&p.default.createElement(u.Button,{variant:"primary",fetching:n,onClick:async()=>{s(!0),await e.access(),s(!1),r(!0)}},t.access)),i&&p.default.createElement(m.Alert,{type:"success",className:"mt-10"},t.accessed))};var d=e("@aimpact/ailearn-app/components/ui"),m=e("pragmate-ui/alert"),u=e("pragmate-ui/components"),p=e("react"),f=e("./context")}}),w.set("./views/index",{hash:2820988512,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=l.default.useState(e.ready),[,n]=l.default.useState(e.model.items),[s,i]=l.default.useState(e.model.accessed),r=e["texts"];if((0,m.useBinder)([e],()=>{a(e.ready),n(e.model.items),i(e.accessed)}),t&&!e.found)return l.default.createElement("app-missing",null);if(!t)return l.default.createElement(y.Preload,null);var o=e.model["activities"],c=o.items?g.List:p.EmptyList,o={texts:r,fetching:e.fetching,store:e,activities:o,access:s};return l.default.createElement(u.AssignmentContext.Provider,{value:o},l.default.createElement(d.PageContainer,null,l.default.createElement("div",{className:"general-container"},l.default.createElement(f.Header,null),l.default.createElement(c,null))))};var l=e("react"),d=e("@aimpact/ailearn-app/components/ui"),m=e("@beyond-js/react-18-widgets/hooks"),u=e("./context"),p=e("./list/empty"),f=e("./header"),g=e("./list"),y=e("./preload")}}),w.set("./views/list/empty",{hash:2641747395,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,s.useAssignmentContext)()["texts"];return a.default.createElement(n.EmptyCard,{text:e.empty,icon:"info"})};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),s=e("../context")}}),w.set("./views/list/index",{hash:394293936,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function(){var e=(0,s.useAssignmentContext)()["activities"];return n.default.createElement(i.ListContainer,{items:e.items,control:a.Item})};var a=e("./item"),n=e("react"),s=e("../context"),i=e("@aimpact/ailearn-app/components/ui")}}),w.set("./views/list/item",{hash:1960730437,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({data:e,index:t}){var{store:a,texts:n,access:s}=(0,l.useAssignmentContext)(),i="multiple-choice"===e.type?"assessment":e.type;let r=`/assignments/${a.assignmentId}/${i}/`+e.id;s&&["conversation","content-theory","debate","character-talk"].includes(e.type)&&(r+="/chat/"+e.chat.id);a=t+1;return c.default.createElement(o.Card,{data:e,type:e.type,entity:"activity",link:r,disabled:!s},c.default.createElement(o.CardContent,{option:"column"},c.default.createElement("section",{className:"card-footer__container"},c.default.createElement("div",{className:"card__text-content"},c.default.createElement("span",{className:"p2"},n.textCounter,a),c.default.createElement("h6",{className:"card__title mt-10"},e.title," "),c.default.createElement("span",{className:"card__subtitle p2"},e.description)))))};var o=e("@aimpact/ailearn-app/components/ui"),c=e("react"),l=e("../context")}}),w.set("./views/preload",{hash:3672949900,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Preload=function(){var{}=(0,i.useAssignmentContext)();return s.default.createElement(a.PageContainer,null,s.default.createElement("header",{className:"assigment-header"},s.default.createElement(n.Image,{className:"entity-image image--preload"}),s.default.createElement(a.SkeletonText,{height:"5px",width:"100px"}),s.default.createElement(a.SkeletonText,{height:"5px",width:"200px"})),s.default.createElement(a.PageTitle,{preload:!0}))};var a=e("@aimpact/ailearn-app/components/ui"),n=e("pragmate-ui/image"),s=e("react"),i=e("./context")}}),v.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"},{im:"./views/list/empty",from:"EmptyList",name:"EmptyList"},{im:"./views/list/index",from:"List",name:"List"},{im:"./views/list/item",from:"Item",name:"Item"}],v.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a),!e&&"EmptyList"!==t||n("EmptyList",e?e("./views/list/empty").EmptyList:a),!e&&"List"!==t||n("List",e?e("./views/list/index").List:a),!e&&"Item"!==t||n("Item",e?e("./views/list/item").Item:a)},n("__beyond_pkg",v),n("hmr",new function(){this.on=(e,t)=>v.hmr.on(e,t),this.off=(e,t)=>v.hmr.off(e,t)}),v.initialise(w)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9wcmVsb2FkLnRzeCJdLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIiNzdG9yZSIsImNyZWF0ZVN0b3JlIiwidGhpcyIsIlN0b3JlTWFuYWdlciIsImdsb2JhbFRoaXMiLCJzdG9yZSIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJleHBvcnRzIiwiX3RyYWNraW5nIiwiX2NvcmUiLCJfbW9kZWwiLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCIjbW9kZWwiLCJtb2RlbCIsIiN0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRleHRzIiwidmFsdWUiLCIjYWNjZXNzZWQiLCJhY2Nlc3NlZCIsInJlYWR5Iiwic3VwZXIiLCIjYXNzaWdubWVudElkIiwiYXNzaWdubWVudElkIiwiI2ZvdW5kIiwiZm91bmQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsIlRyYWNraW5nIiwiYXdhaXQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWNjZXNzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJfcmVhY3QiLCJBc3NpZ25tZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzaG93TWVzc2FnZSIsInNldFNob3dNZXNzYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBpY3R1cmUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJfdWkiLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsInNyYyIsImFsdCIsIlBhZ2VUaXRsZSIsImFzIiwiYWN0aXZpdGllcyIsIl9jb21wb25lbnRzIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJhc3luYyIsIl9hbGVydCIsIkFsZXJ0IiwidHlwZSIsInNldFJlYWR5Iiwic2V0SXRlbXMiLCJpdGVtcyIsInNldEFjY2VzcyIsIl9ob29rcyIsInVzZUJpbmRlciIsIl9wcmVsb2FkIiwiUHJlbG9hZCIsIkNvbnRyb2wiLCJfbGlzdCIsIkxpc3QiLCJfZW1wdHkiLCJFbXB0eUxpc3QiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJfaGVhZGVyIiwiSGVhZGVyIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiaWNvbiIsIkxpc3RDb250YWluZXIiLCJjb250cm9sIiwiX2l0ZW0iLCJJdGVtIiwiZGF0YSIsIml0ZW0iLCJpbmRleCIsImxldCIsInVybCIsImluY2x1ZGVzIiwiY2hhdCIsIm51bWJlcmluZ0l0ZW0iLCJDYXJkIiwibGluayIsImRpc2FibGVkIiwiQ2FyZENvbnRlbnQiLCJvcHRpb24iLCJ0ZXh0Q291bnRlciIsIl9pbWFnZSIsIkltYWdlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJwcmVsb2FkIl0sIm1hcHBpbmdzIjoiZ25FQUFBLElBQUFBLEVBQUFDLEVBQUEsa0NBQUEsRUFDQUMsRUFBQUQsRUFBQSxTQUFBLEVBQ0FFLEVBQUFGLEVBQUEsU0FBQSxRQUdNRyxVQUFtQkosRUFB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