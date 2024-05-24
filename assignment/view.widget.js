System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/tracking","@beyond-js/kernel@0.1.9/core","@beyond-js/reactive@1.1.12/model","@aimpact/ailearn-app@0.0.34.dev-01/coins-layout.widget","@beyond-js/kernel@0.1.9/texts","react@18.2.0","@aimpact/ailearn-app@0.0.34.dev-01/components/ui","pragmate-ui@0.1.1/alert","pragmate-ui@0.1.1/components","pragmate-ui@0.1.1/image","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.1/shared/components"],function(n,e){"use strict";var t,a,s,i,r,o,c,l,d,u,m,p,f,g,y,v,h,w;return n({Controller:void 0,View:void 0,EmptyList:void 0,List:void 0,Item:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){s=e},function(e){i=e},function(e){r=e},function(e){o=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){y=e},function(e){v=e}],execute:function(){w=a.Bundle,(h=new w({module:{vspecifier:"@aimpact/ailearn-app@0.0.34.dev-01/assignment/view",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",s],["@beyond-js/react-18-widgets/page",i],["@aimpact/ailearn-sdk/tracking",r],["@beyond-js/kernel/core",o],["@beyond-js/reactive/model",c],["@aimpact/ailearn-app/coins-layout.widget",l],["@beyond-js/kernel/texts",d],["react",u],["@aimpact/ailearn-app/components/ui",m],["pragmate-ui/alert",p],["pragmate-ui/components",f],["pragmate-ui/image",g],["@beyond-js/react-18-widgets/hooks",y],["@aimpact/chat/shared/components",v]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-assignment-view",vspecifier:"@aimpact/ailearn-app@0.0.34.dev-01/assignment/view.widget",is:"page",route:"/assignments/${id}",layout:"coins-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.34.dev-01/assignment/view.widget"),(w=new Map).set("./controller",{hash:2589136423,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),s=e("./views");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,globalThis.store=this.#store,this.#store}get Widget(){return s.View}show(){this.#store.load(this.uri.vars.get("id"))}}t.Controller=i}}),w.set("./store",{hash:2512761122,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-sdk/tracking"),n=e("@beyond-js/kernel/core"),s=e("@beyond-js/reactive/model"),i=e("@aimpact/ailearn-app/coins-layout.widget"),r=e("@beyond-js/kernel/texts"),o=e("beyond_context");class c extends s.ReactiveModel{#model;get model(){return this.#model}#texts=new r.CurrentTexts(o.module.specifier);get texts(){return this.#texts?.value}#accessed;get accessed(){return this.#accessed}get ready(){return super.ready&&this.#texts.ready}#assignmentId;get assignmentId(){return this.#assignmentId}#found;get found(){return this.#found}constructor(){super(),this.#texts.on("change",this.triggerEvent)}async load(e){try{i.LayoutBroker.clear(),this.#assignmentId=e,this.#model=new a.Tracking({id:e}),await this.#model.load({id:e}),this.#accessed=this.#model.accessed,super.ready=!0,this.#found=!0,this.triggerEvent()}catch(e){console.error(e),super.ready=!0,this.#found=!1}}async access(){try{const e=new n.PendingPromise;return await this.#model.access(),globalThis.setTimeout(()=>{this.#accessed=!0,this.triggerEvent(),e.resolve(!0)},1500),e}catch(e){console.error(e)}}}t.StoreManager=c}}),w.set("./views/context",{hash:254260041,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useAssignmentContext=t.AssignmentContext=void 0;var a=e("react");const n=t.AssignmentContext=a.default.createContext({});t.useAssignmentContext=()=>a.default.useContext(n)}}),w.set("./views/header",{hash:225749186,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){const{store:e,texts:t,access:a}=(0,f.useAssignmentContext)(),[n,s]=p.default.useState(!1),[i,r]=p.default.useState(!1),{title:o,description:c,picture:l}=e.model.module;return p.default.createElement(p.default.Fragment,null,p.default.createElement("header",{className:"assigment-header"},p.default.createElement(g.Image,{src:l,alt:o}),p.default.createElement("h1",null,o),p.default.createElement("p",{className:"p1"},c)),p.default.createElement(d.SubDivider,{title:t.activities.title},!a&&!i&&p.default.createElement(m.Button,{variant:"primary",fetching:n,onClick:async()=>{s(!0),await e.access(),s(!1),r(!0)}},t.access)),i&&p.default.createElement(u.Alert,{type:"success",className:"mt-10"},t.accessed))};var d=e("@aimpact/ailearn-app/components/ui"),u=e("pragmate-ui/alert"),m=e("pragmate-ui/components"),p=e("react"),f=e("./context"),g=e("pragmate-ui/image")}}),w.set("./views/index",{hash:390390848,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=l.default.useState(e.ready),[,n]=l.default.useState(e.model.items),[s,i]=l.default.useState(e.model.accessed),r=e["texts"];if((0,u.useBinder)([e],()=>{a(e.ready),n(e.model.items),i(e.accessed)}),t&&!e.found)return l.default.createElement("app-missing",null);if(!t)return l.default.createElement(p.PreloadScreen,null);var o=e.model["activities"],c=o.items?y.List:f.EmptyList,o={texts:r,fetching:e.fetching,store:e,activities:o,access:s};return l.default.createElement(m.AssignmentContext.Provider,{value:o},l.default.createElement(d.PageContainer,null,l.default.createElement("div",{className:"general-container"},l.default.createElement(g.Header,null),l.default.createElement(c,null))))};var l=e("react"),d=e("@aimpact/ailearn-app/components/ui"),u=e("@beyond-js/react-18-widgets/hooks"),m=e("./context"),p=e("@aimpact/chat/shared/components"),f=e("./list/empty"),g=e("./header"),y=e("./list")}}),w.set("./views/list/empty",{hash:2641747395,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,s.useAssignmentContext)()["texts"];return a.default.createElement(n.EmptyCard,{text:e.empty,icon:"info"})};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),s=e("../context")}}),w.set("./views/list/index",{hash:394293936,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function(){var e=(0,s.useAssignmentContext)()["activities"];return n.default.createElement(i.ListContainer,{items:e.items,control:a.Item})};var a=e("./item"),n=e("react"),s=e("../context"),i=e("@aimpact/ailearn-app/components/ui")}}),w.set("./views/list/item",{hash:1960730437,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({data:e,index:t}){var{store:a,texts:n,access:s}=(0,l.useAssignmentContext)(),i="multiple-choice"===e.type?"assessment":e.type;let r=`/assignments/${a.assignmentId}/${i}/`+e.id;s&&["conversation","content-theory","debate","character-talk"].includes(e.type)&&(r+="/chat/"+e.chat.id);a=t+1;return c.default.createElement(o.Card,{data:e,type:e.type,entity:"activity",link:r,disabled:!s},c.default.createElement(o.CardContent,{option:"column"},c.default.createElement("section",{className:"card-footer__container"},c.default.createElement("div",{className:"card__text-content"},c.default.createElement("span",{className:"p2"},n.textCounter,a),c.default.createElement("h6",{className:"card__title mt-10"},e.title," "),c.default.createElement("span",{className:"card__subtitle p2"},e.description)))))};var o=e("@aimpact/ailearn-app/components/ui"),c=e("react"),l=e("../context")}}),h.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"},{im:"./views/list/empty",from:"EmptyList",name:"EmptyList"},{im:"./views/list/index",from:"List",name:"List"},{im:"./views/list/item",from:"Item",name:"Item"}],h.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a),!e&&"EmptyList"!==t||n("EmptyList",e?e("./views/list/empty").EmptyList:a),!e&&"List"!==t||n("List",e?e("./views/list/index").List:a),!e&&"Item"!==t||n("Item",e?e("./views/list/item").Item:a)},n("__beyond_pkg",h),n("hmr",new function(){this.on=(e,t)=>h.hmr.on(e,t),this.off=(e,t)=>h.hmr.off(e,t)}),h.initialise(w)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIiNzdG9yZSIsImNyZWF0ZVN0b3JlIiwidGhpcyIsIlN0b3JlTWFuYWdlciIsImdsb2JhbFRoaXMiLCJzdG9yZSIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJleHBvcnRzIiwiX3RyYWNraW5nIiwiX2NvcmUiLCJfbW9kZWwiLCJfY29pbnNMYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwiI21vZGVsIiwibW9kZWwiLCIjdGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0ZXh0cyIsInZhbHVlIiwiI2FjY2Vzc2VkIiwiYWNjZXNzZWQiLCJyZWFkeSIsInN1cGVyIiwiI2Fzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnRJZCIsIiNmb3VuZCIsImZvdW5kIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImlkIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJUcmFja2luZyIsImF3YWl0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjY2VzcyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiX3JlYWN0IiwiQXNzaWdubWVudENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2lnbm1lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb250ZXh0IiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwaWN0dXJlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiX2ltYWdlIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJfdWkiLCJTdWJEaXZpZGVyIiwiYWN0aXZpdGllcyIsIl9jb21wb25lbnRzIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJhc3luYyIsIl9hbGVydCIsIkFsZXJ0IiwidHlwZSIsInNldFJlYWR5Iiwic2V0SXRlbXMiLCJpdGVtcyIsInNldEFjY2VzcyIsIl9ob29rcyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJDb250cm9sIiwiX2xpc3QiLCJMaXN0IiwiX2VtcHR5IiwiRW1wdHlMaXN0IiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiX2hlYWRlciIsIkhlYWRlciIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJMaXN0Q29udGFpbmVyIiwiY29udHJvbCIsIl9pdGVtIiwiSXRlbSIsImRhdGEiLCJpdGVtIiwiaW5kZXgiLCJsZXQiLCJ1cmwiLCJpbmNsdWRlcyIsImNoYXQiLCJudW1iZXJpbmdJdGVtIiwiQ2FyZCIsImVudGl0eSIsImxpbmsiLCJkaXNhYmxlZCIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwidGV4dENvdW50ZXIiXSwibWFwcGluZ3MiOiJtbkVBQUEsSUFBQUEsRUFBQUMsRUFBQSxrQ0FBQSxFQUNBQyxFQUFBRCxFQUFBLFNBQUEsRUFDQUUsRUFBQUYsRUFBQSxTQUFBLFFBR01HLFVBQW1CSixFQUFBSywwQkFDeEJDLE9BQ0FDLGNBR0MsT0FGQUMsS0FBS0YsT0FBUyxJQUFJSixFQUFBTyxhQUNsQkMsV0FBV0MsTUFBUUgsS0FBS0YsT0FDakJFLEtBQUtGLE1BQ2IsQ0FDQU0sYUFDQyxPQUFPVCxFQUFBVSxJQUNSLENBRUFDLE9BQ0NOLEtBQUtGLE9BQU9TLEtBQUtQLEtBQUtRLElBQUlDLEtBQUtDLElBQUksSUFBSSxDQUFDLENBQ3pDLEMsQ0FDQUMsRUFBQWYsV0FBQUEsQyxrSUNsQkQsSUFBQWdCLEVBQUFuQixFQUFBLCtCQUFBLEVBRUFvQixFQUFBcEIsRUFBQSx3QkFBQSxFQUNBcUIsRUFBQXJCLEVBQUEsMkJBQUEsRUFDQXNCLEVBQUF0QixFQUFBLDBDQUFBLEVBQ0F1QixFQUFBdkIsRUFBQSx5QkFBQSxFQUNBd0IsRUFBQXhCLEVBQUEsZ0JBQUEsUUFDYVEsVUFBcUJhLEVBQUFJLGNBQ2pDQyxPQUNBQyxZQUNDLE9BQU9wQixLQUFLbUIsTUFDYixDQUVBRSxPQUFxQyxJQUFJTCxFQUFBTSxhQUFhTCxFQUFBTSxPQUFPQyxTQUFTLEVBQ3RFQyxZQUNDLE9BQU96QixLQUFLcUIsUUFBUUssS0FDckIsQ0FDQUMsVUFDQUMsZUFDQyxPQUFPNUIsS0FBSzJCLFNBQ2IsQ0FDQUUsWUFDQyxPQUFPQyxNQUFNRCxPQUFTN0IsS0FBS3FCLE9BQU9RLEtBQ25DLENBTUFFLGNBQ0FDLG1CQUNDLE9BQU9oQyxLQUFLK0IsYUFDYixDQUVBRSxPQUNBQyxZQUNDLE9BQU9sQyxLQUFLaUMsTUFDYixDQUNBRSxjQUNDTCxNQUFLLEVBQ0w5QixLQUFLcUIsT0FBT2UsR0FBRyxTQUFVcEMsS0FBS3FDLFlBQVksQ0FDM0MsQ0FFQTlCLFdBQVcrQixHQUNWLElBQ0N2QixFQUFBd0IsYUFBYUMsTUFBSyxFQUNsQnhDLEtBQUsrQixjQUFnQk8sRUFFckJ0QyxLQUFLbUIsT0FBUyxJQUFJUCxFQUFBNkIsU0FBUyxDQUFFSCxHQUFBQSxDQUFFLENBQUUsRUFFakNJLE1BQU0xQyxLQUFLbUIsT0FBT1osS0FBSyxDQUFFK0IsR0FBQUEsQ0FBRSxDQUFFLEVBRTdCdEMsS0FBSzJCLFVBQVkzQixLQUFLbUIsT0FBT1MsU0FDN0JFLE1BQU1ELE1BQVEsQ0FBQSxFQUNkN0IsS0FBS2lDLE9BQVMsQ0FBQSxFQUVkakMsS0FBS3FDLGFBQVksQyxDQUNoQixNQUFPTSxHQUNSQyxRQUFRQyxNQUFNRixDQUFDLEVBQ2ZiLE1BQU1ELE1BQVEsQ0FBQSxFQUNkN0IsS0FBS2lDLE9BQVMsQ0FBQSxDLENBRWhCLENBRUFhLGVBQ0MsSUFDQyxNQUFNQyxFQUFVLElBQUlsQyxFQUFBbUMsZUFZcEIsT0FYQU4sTUFBTTFDLEtBQUttQixPQUFPMkIsT0FBTSxFQU14QjVDLFdBQVcrQyxXQUFXLEtBQ3JCakQsS0FBSzJCLFVBQVksQ0FBQSxFQUNqQjNCLEtBQUtxQyxhQUFZLEVBQ2pCVSxFQUFRRyxRQUFRLENBQUEsQ0FBSSxDQUNyQixFQUFHLElBQUksRUFDQUgsQyxDQUNOLE1BQU9KLEdBQ1JDLFFBQVFDLE1BQU1GLENBQUMsQyxDQUVqQixDLENBQ0FoQyxFQUFBVixhQUFBQSxDLHFLQ3BGRCxJQUFBa0QsRUFBQTFELEVBQUEsT0FBQSxFQWFPLE1BQU0yRCxFQUFpQnpDLEVBQUF5QyxrQkFBR0QsRUFBQUUsUUFBTUMsY0FBYyxFQUF3QixFQUNDM0MsRUFBQTRDLHFCQUExQ0EsSUFBTUosRUFBQUUsUUFBTUcsV0FBV0osQ0FBaUIsQywySENQdEUsV0FDTCxLQUFNLENBQUVqRCxNQUFBQSxFQUFPc0IsTUFBQUEsRUFBT3FCLE9BQUFBLENBQU0sR0FBSyxFQUFBVyxFQUFBRixzQkFBb0IsRUFDL0MsQ0FBQ0csRUFBVUMsR0FBZVIsRUFBQUUsUUFBTU8sU0FBUyxDQUFBLENBQUssRUFDOUMsQ0FBQ0MsRUFBYUMsR0FBa0JYLEVBQUFFLFFBQU1PLFNBQVMsQ0FBQSxDQUFLLEVBQ3BELENBQUVHLE1BQUFBLEVBQU9DLFlBQUFBLEVBQXdCQyxRQUFBQSxDQUFPLEVBQUs5RCxFQUFNaUIsTUFBTUcsT0FRL0QsT0FDQzRCLEVBQUFFLFFBQUFhLGNBQUFmLEVBQUFFLFFBQUFjLFNBQUEsS0FDQ2hCLEVBQUFFLFFBQUFhLGNBQUEsU0FBQSxDQUFRRSxVQUFVLGtCQUFrQixFQUNuQ2pCLEVBQUFFLFFBQUFhLGNBQUNHLEVBQUFDLE1BQUssQ0FBQ0MsSUFBS04sRUFBU08sSUFBS1QsQ0FBSyxDQUFBLEVBQy9CWixFQUFBRSxRQUFBYSxjQUFBLEtBQUEsS0FBS0gsQ0FBSyxFQUNWWixFQUFBRSxRQUFBYSxjQUFBLElBQUEsQ0FBR0UsVUFBVSxJQUFJLEVBQUVKLENBQVcsQ0FBSyxFQUdwQ2IsRUFBQUUsUUFBQWEsY0FBQ08sRUFBQUMsV0FBVSxDQUFDWCxNQUFPdEMsRUFBTWtELFdBQVdaLEtBQUssRUFDdkMsQ0FBQ2pCLEdBQVUsQ0FBQ2UsR0FDWlYsRUFBQUUsUUFBQWEsY0FBQ1UsRUFBQUMsT0FBTSxDQUFDQyxRQUFRLFVBQVVwQixTQUFVQSxFQUFVcUIsUUFqQmxDQyxVQUNmckIsRUFBWSxDQUFBLENBQUksRUFDaEJqQixNQUFNdkMsRUFBTTJDLE9BQU0sRUFDbEJhLEVBQVksQ0FBQSxDQUFLLEVBQ2pCRyxFQUFlLENBQUEsQ0FBSSxDQUNwQixDQVlrRSxFQUM1RHJDLEVBQU1xQixNQUFNLENBRWQsRUFHRGUsR0FDQVYsRUFBQUUsUUFBQWEsY0FBQ2UsRUFBQUMsTUFBSyxDQUFDQyxLQUFLLFVBQVVmLFVBQVUsT0FBTyxFQUNyQzNDLEVBQU1HLFFBQVEsQ0FFaEIsQ0FHSixFQTFDQSxJQUFBNkMsRUFBQWhGLEVBQUEsb0NBQUEsRUFDQXdGLEVBQUF4RixFQUFBLG1CQUFBLEVBQ0FtRixFQUFBbkYsRUFBQSx3QkFBQSxFQUNBMEQsRUFBQTFELEVBQUEsT0FBQSxFQUNBZ0UsRUFBQWhFLEVBQUEsV0FBQSxFQUNBNEUsRUFBQTVFLEVBQUEsbUJBQUEsQyx3SENlaUIsU0FDSCxDQUFFVSxNQUFBQSxDQUFLLEdBQ3BCLEtBQU0sQ0FBQzBCLEVBQU91RCxHQUFZakMsRUFBQUUsUUFBTU8sU0FBU3pELEVBQU0wQixLQUFLLEVBQzlDLENBQUEsQ0FBR3dELEdBQVlsQyxFQUFBRSxRQUFNTyxTQUFTekQsRUFBTWlCLE1BQU1rRSxLQUFLLEVBQy9DLENBQUN4QyxFQUFReUMsR0FBYXBDLEVBQUFFLFFBQU1PLFNBQVN6RCxFQUFNaUIsTUFBTVEsUUFBUSxFQUN2REgsRUFBVXRCLEVBQVZzQixTQU1SLElBTEEsRUFBQStELEVBQUFDLFdBQVUsQ0FBQ3RGLEdBQVEsS0FDbEJpRixFQUFTakYsRUFBTTBCLEtBQUssRUFDcEJ3RCxFQUFTbEYsRUFBTWlCLE1BQU1rRSxLQUFLLEVBQzFCQyxFQUFVcEYsRUFBTXlCLFFBQVEsQ0FDekIsQ0FBQyxFQUNHQyxHQUFTLENBQUMxQixFQUFNK0IsTUFBTyxPQUFPaUIsRUFBQUUsUUFBQWEsY0FBQSxjQUFBLElBQUEsRUFDbEMsR0FBSSxDQUFDckMsRUFBTyxPQUFPc0IsRUFBQUUsUUFBQWEsY0FBQ1UsRUFBQWMsY0FBYSxJQUFBLEVBRWpDLElBQVFmLEVBQWV4RSxFQUFNaUIsTUFBckJ1RCxjQUVGZ0IsRUFBVWhCLEVBQVdXLE1BQVFNLEVBQUFDLEtBQU9DLEVBQUFDLFVBQ3BDQyxFQUFlLENBQ3BCdkUsTUFBQUEsRUFDQWlDLFNBQVV2RCxFQUFNdUQsU0FDaEJ2RCxNQUFBQSxFQUNBd0UsV0FBQUEsRUFDQTdCLE9BQUFBLEMsRUFHRCxPQUNDSyxFQUFBRSxRQUFBYSxjQUFDVCxFQUFBTCxrQkFBa0I2QyxTQUFRLENBQUN2RSxNQUFPc0UsQ0FBWSxFQUM5QzdDLEVBQUFFLFFBQUFhLGNBQUNPLEVBQUF5QixjQUFhLEtBQ2IvQyxFQUFBRSxRQUFBYSxjQUFBLE1BQUEsQ0FBS0UsVUFBVSxtQkFBbUIsRUFDakNqQixFQUFBRSxRQUFBYSxjQUFDaUMsRUFBQUMsT0FBTSxJQUFBLEVBQ1BqRCxFQUFBRSxRQUFBYSxjQUFDeUIsRUFBTyxJQUFBLENBQUcsQ0FDTixDQUNTLENBR25CLEVBdkRBLElBQUF4QyxFQUFBMUQsRUFBQSxPQUFBLEVBQ0FnRixFQUFBaEYsRUFBQSxvQ0FBQSxFQUNBK0YsRUFBQS9GLEVBQUEsbUNBQUEsRUFDQWdFLEVBQUFoRSxFQUFBLFdBQUEsRUFDQW1GLEVBQUFuRixFQUFBLGlDQUFBLEVBQ0FxRyxFQUFBckcsRUFBQSxjQUFBLEVBQ0EwRyxFQUFBMUcsRUFBQSxVQUFBLEVBRUFtRyxFQUFBbkcsRUFBQSxRQUFBLEMsbUlDSmlCLFdBQ2hCLElBQVFnQyxHQUFVLEVBQUFnQyxFQUFBRixzQkFBb0IsRUFBOUI5QixTQUNSLE9BQU8wQixFQUFBRSxRQUFBYSxjQUFDTyxFQUFBNEIsVUFBUyxDQUFDQyxLQUFNN0UsRUFBTThFLE1BQU9DLEtBQUssTUFBTSxDQUFBLENBQ2pELEVBUEEsSUFBQXJELEVBQUExRCxFQUFBLE9BQUEsRUFDQWdGLEVBQUFoRixFQUFBLG9DQUFBLEVBQ0FnRSxFQUFBaEUsRUFBQSxZQUFBLEMsNkhDRWlCLFdBQ2hCLElBQVFrRixHQUFlLEVBQUFsQixFQUFBRixzQkFBb0IsRUFBbkNvQixjQUVSLE9BQU94QixFQUFBRSxRQUFBYSxjQUFDTyxFQUFBZ0MsY0FBYSxDQUFDbkIsTUFBT1gsRUFBV1csTUFBT29CLFFBQVNDLEVBQUFDLElBQUksQ0FBQSxDQUM3RCxFQVJBLElBQUFELEVBQUFsSCxFQUFBLFFBQUEsRUFDQTBELEVBQUExRCxFQUFBLE9BQUEsRUFDQWdFLEVBQUFoRSxFQUFBLFlBQUEsRUFDQWdGLEVBQUFoRixFQUFBLG9DQUFBLEMsNkhDRWlCLFNBQWUsQ0FBRW9ILEtBQU1DLEVBQU1DLE1BQUFBLENBQUssR0FDbEQsR0FBTSxDQUFFNUcsTUFBQUEsRUFBT3NCLE1BQUFBLEVBQU9xQixPQUFBQSxDQUFNLEdBQUssRUFBQVcsRUFBQUYsc0JBQW9CLEVBRS9DNEIsRUFBcUIsb0JBQWQyQixFQUFLM0IsS0FBNkIsYUFBZTJCLEVBQUszQixLQUNuRTZCLElBQUlDLGtCQUFzQjlHLEVBQU02QixnQkFBZ0JtRCxLQUFRMkIsRUFBS3hFLEdBQ3ZEUSxHQUFVLENBQUMsZUFBZ0IsaUJBQWtCLFNBQVUsa0JBQWtCb0UsU0FBU0osRUFBSzNCLElBQUksSUFDaEc4QixHQUFPLFNBQVNILEVBQUtLLEtBQUs3RSxJQU9yQjhFLEVBQWdCTCxFQUFRLEVBRTlCLE9BQ0M1RCxFQUFBRSxRQUFBYSxjQUFDTyxFQUFBNEMsS0FBSSxDQUFDUixLQUFNQyxFQUFNM0IsS0FBTTJCLEVBQUszQixLQUFNbUMsT0FBTyxXQUFXQyxLQUFNTixFQUFLTyxTQUFVLENBQUMxRSxDQUFNLEVBQ2hGSyxFQUFBRSxRQUFBYSxjQUFDTyxFQUFBZ0QsWUFBVyxDQUFDQyxPQUFPLFFBQVEsRUFDM0J2RSxFQUFBRSxRQUFBYSxjQUFBLFVBQUEsQ0FBU0UsVUFBVSx3QkFBd0IsRUFDMUNqQixFQUFBRSxRQUFBYSxjQUFBLE1BQUEsQ0FBS0UsVUFBVSxvQkFBb0IsRUFDbENqQixFQUFBRSxRQUFBYSxjQUFBLE9BQUEsQ0FBTUUsVUFBVSxJQUFJLEVBQ2xCM0MsRUFBTWtHLFlBQ05QLENBQWEsRUFFZmpFLEVBQUFFLFFBQUFhLGNBQUEsS0FBQSxDQUFJRSxVQUFVLG1CQUFtQixFQUFFMEMsRUFBSy9DLE0sS0FDeENaLEVBQUFFLFFBQUFhLGNBQUEsT0FBQSxDQUFNRSxVQUFVLG1CQUFtQixFQUFFMEMsRUFBSzlDLFdBQVcsQ0FBUSxDQUN4RCxDQUNHLENBQ0csQ0FHakIsRUFwQ0EsSUFBQVMsRUFBQWhGLEVBQUEsb0NBQUEsRUFFQTBELEVBQUExRCxFQUFBLE9BQUEsRUFDQWdFLEVBQUFoRSxFQUFBLFlBQUEifQ==