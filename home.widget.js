System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.1.12/model","@beyond-js/kernel@0.1.9/texts","@aimpact/chat-sdk@1.0.0/session","react@18.2.0","pragmate-ui@0.1.1/list","pragmate-ui@0.1.1/link","pragmate-ui@0.1.1/components","pragmate-ui@0.1.1/image","@aimpact/ailearn-app@0.0.45/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks"],function(a,e){"use strict";var t,s,r,n,i,o,l,c,d,u,m,f,p,g,v,h;return a({Controller:void 0,AssignmentItem:void 0,View:void 0,UserCard:void 0}),{setters:[function(e){t=e},function(e){s=e},function(e){r=e},function(e){n=e},function(e){i=e},function(e){o=e},function(e){l=e},function(e){c=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){f=e},function(e){p=e},function(e){g=e}],execute:function(){h=s.Bundle,(v=new h({module:{vspecifier:"@aimpact/ailearn-app@0.0.45/home",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",n],["@beyond-js/reactive/model",i],["@beyond-js/kernel/texts",o],["@aimpact/chat-sdk/session",l],["react",c],["pragmate-ui/list",d],["pragmate-ui/link",u],["pragmate-ui/components",m],["pragmate-ui/image",f],["@aimpact/ailearn-app/components/ui",p],["@beyond-js/react-18-widgets/hooks",g]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"student-home",vspecifier:"@aimpact/ailearn-app@0.0.45/home.widget",is:"page",route:"/",layout:"coins-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.45/home.widget"),(h=new Map).set("./controller",{hash:2747464748,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var s=e("@beyond-js/react-18-widgets/page"),a=e("./store"),r=e("./views");class n extends s.PageReactWidgetController{#store;createStore(){return this.#store=new a.StoreManager,this.#store}get Widget(){return r.View}show(){this.#store.load()}hide(){}}t.Controller=n}}),h.set("./store",{hash:3864631672,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var s=e("@beyond-js/reactive/model"),a=e("@beyond-js/kernel/texts"),r=e("beyond_context"),n=e("@aimpact/chat-sdk/session");class i extends s.ReactiveModel{#model;get model(){return this.#model}get items(){return this.#model.assignments}#texts=new a.CurrentTexts(r.module.specifier);get texts(){return this.#texts?.value}#assignments;get assignments(){return this.#assignments}#drafts;get drafts(){return this.#drafts}get user(){return n.sessionWrapper.user}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.#texts.on("change",this.triggerEvent)}async load(){try{this.#model=n.sessionWrapper;var{status:e,data:t}=await this.#model.user.getHome();e||console.log("error"),this.#drafts=t.drafts,this.#assignments=t.assignments,super.ready=!0,this.triggerEvent(),globalThis.store=this}catch(e){console.error(e)}}}t.StoreManager=i}}),h.set("./views/assigments/index",{hash:2383910485,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Assignments=function(){var{assignments:e,texts:t}=(0,a.useModuleContext)()["store"],e=[...e,...e,...e];return s.default.createElement("article",{className:"assigments-list"},s.default.createElement("header",{className:"page-section__header"},s.default.createElement("h3",null,t.assignments.title)),s.default.createElement(r.List,{className:"entity__list two-columns",items:e,control:n.AssignmentItem}))};var s=e("react"),a=e("../context"),r=e("pragmate-ui/list"),n=e("./item")}}),h.set("./views/assigments/item",{hash:1636261416,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AssignmentItem=function({item:e}){var{texts:t}=(0,o.useModuleContext)()["store"],{module:s,title:a}=e;return r.default.createElement("article",{className:"entity__item"},r.default.createElement(i.EntityImage,{src:e.picture,entity:"module",alt:a}),r.default.createElement("section",{className:"entity__item-content"},r.default.createElement(n.Link,{href:"/modules/management?id="+e.id},r.default.createElement("h4",null,s.title),r.default.createElement("span",null,s.description))),r.default.createElement("footer",{className:"entity__footer"},r.default.createElement("span",{className:"card-number__detail"},t.assignments.activities,": ",s.activities.count)))};var r=e("react"),n=e("pragmate-ui/components"),i=e("@aimpact/ailearn-app/components/ui"),o=e("../context")}}),h.set("./views/context",{hash:2793963965,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var s=e("react");const a=t.ModuleContext=s.default.createContext({});t.useModuleContext=()=>s.default.useContext(a)}}),h.set("./views/index",{hash:79994270,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,s]=(0,i.useState)(e.ready),a=e["texts"];if((0,o.useBinder)([e],()=>s(e.ready)),!t)return i.default.createElement(c.Spinner,{active:!0});var r=e.model["assignments"],r={store:e,fetching:e.fetching,texts:a,items:r},{}=e;return i.default.createElement(l.ModuleContext.Provider,{value:r},i.default.createElement(n.PageContainer,null,i.default.createElement("div",{className:"grid-container columns-8-4"},i.default.createElement("main",null,i.default.createElement(d.UserCard,null),i.default.createElement("h1",null,a.title)))))};var n=e("@aimpact/ailearn-app/components/ui"),i=e("react"),o=e("@beyond-js/react-18-widgets/hooks"),l=e("./context"),c=e("pragmate-ui/components"),d=e("./sections/user-card")}}),h.set("./views/sections/drafts",{hash:2808383044,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserCard=function(){var{user:e,texts:t}=(0,a.useModuleContext)()["store"];return s.default.createElement("section",{className:"user-profile"},s.default.createElement(r.Image,{className:"user-profile__img",src:e.photoURL,alt:"Profile Picture"}),s.default.createElement("div",{className:"user-profile__content"},s.default.createElement("div",{className:"content"},s.default.createElement("h3",null,e.displayName),s.default.createElement("span",{className:"p2"},e.email)),s.default.createElement("div",{className:"card__actions"},s.default.createElement("link",{href:"/me"},t.profile.edit))))};var s=e("react"),a=e("../context"),r=e("pragmate-ui/image")}}),h.set("./views/sections/modules",{hash:2808383044,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserCard=function(){var{user:e,texts:t}=(0,a.useModuleContext)()["store"];return s.default.createElement("section",{className:"user-profile"},s.default.createElement(r.Image,{className:"user-profile__img",src:e.photoURL,alt:"Profile Picture"}),s.default.createElement("div",{className:"user-profile__content"},s.default.createElement("div",{className:"content"},s.default.createElement("h3",null,e.displayName),s.default.createElement("span",{className:"p2"},e.email)),s.default.createElement("div",{className:"card__actions"},s.default.createElement("link",{href:"/me"},t.profile.edit))))};var s=e("react"),a=e("../context"),r=e("pragmate-ui/image")}}),h.set("./views/sections/user-card",{hash:3346926153,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserCard=function(){var{user:e,texts:t}=(0,a.useModuleContext)()["store"];return s.default.createElement("section",{className:"user-profile"},s.default.createElement(r.Image,{className:"user-profile__img",src:e.photoURL,alt:"Profile Picture"}),s.default.createElement("div",{className:"user-profile__content flex-container flex-space-between"},s.default.createElement("div",{className:"content"},s.default.createElement("h3",null,e.displayName),s.default.createElement("span",{className:"p2"},e.email)),s.default.createElement("div",{className:"card__actions"},s.default.createElement(n.Link,{href:"/users/me"},t.profile.edit))))};var s=e("react"),a=e("../context"),r=e("pragmate-ui/image"),n=e("pragmate-ui/link")}}),v.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/assigments/item",from:"AssignmentItem",name:"AssignmentItem"},{im:"./views/index",from:"View",name:"View"},{im:"./views/sections/drafts",from:"UserCard",name:"UserCard"},{im:"./views/sections/modules",from:"UserCard",name:"UserCard"},{im:"./views/sections/user-card",from:"UserCard",name:"UserCard"}],v.exports.process=function({require:e,prop:t,value:s}){!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:s),!e&&"AssignmentItem"!==t||a("AssignmentItem",e?e("./views/assigments/item").AssignmentItem:s),!e&&"View"!==t||a("View",e?e("./views/index").View:s),!e&&"UserCard"!==t||a("UserCard",e?e("./views/sections/drafts").UserCard:s),!e&&"UserCard"!==t||a("UserCard",e?e("./views/sections/modules").UserCard:s),!e&&"UserCard"!==t||a("UserCard",e?e("./views/sections/user-card").UserCard:s)},a("__beyond_pkg",v),a("hmr",new function(){this.on=(e,t)=>v.hmr.on(e,t),this.off=(e,t)=>v.hmr.off(e,t)}),v.initialise(h)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2Fzc2lnbWVudHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbWVudHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvZHJhZnRzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9tb2R1bGVzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy91c2VyLWNhcmQudHN4Il0sIm5hbWVzIjpbIl9wYWdlIiwicmVxdWlyZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiI3N0b3JlIiwiY3JlYXRlU3RvcmUiLCJ0aGlzIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCIjbW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwiYXNzaWdubWVudHMiLCIjdGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0ZXh0cyIsInZhbHVlIiwiI2Fzc2lnbm1lbnRzIiwiI2RyYWZ0cyIsImRyYWZ0cyIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInJlYWR5Iiwic3VwZXIiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50Iiwic3RhdHVzIiwiZGF0YSIsImF3YWl0IiwiZ2V0SG9tZSIsImNvbnNvbGUiLCJsb2ciLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJlIiwiZXJyb3IiLCJfY29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJvdXRwdXQiLCJfcmVhY3QiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwiX2xpc3QiLCJMaXN0IiwiY29udHJvbCIsIl9pdGVtIiwiQXNzaWdubWVudEl0ZW0iLCJpdGVtIiwiX3VpIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiYWx0IiwiX2NvbXBvbmVudHMiLCJMaW5rIiwiaHJlZiIsImlkIiwiZGVzY3JpcHRpb24iLCJhY3Rpdml0aWVzIiwiY291bnQiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiX2hvb2tzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiX3VzZXJDYXJkIiwiVXNlckNhcmQiLCJfaW1hZ2UiLCJJbWFnZSIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInByb2ZpbGUiLCJlZGl0IiwiX2xpbmsiXSwibWFwcGluZ3MiOiJxeURBQUEsSUFBQUEsRUFBQUMsRUFBQSxrQ0FBQSxFQUNBQyxFQUFBRCxFQUFBLFNBQUEsRUFDQUUsRUFBQUYsRUFBQSxTQUFBLFFBR01HLFVBQW1CSixFQUFBSywwQkFDeEJDLE9BQ0FDLGNBRUMsT0FEQUMsS0FBS0YsT0FBUyxJQUFJSixFQUFBTyxhQUNYRCxLQUFLRixNQUNiLENBQ0FJLGFBQ0MsT0FBT1AsRUFBQVEsSUFDUixDQUtBQyxPQUNDSixLQUFLRixPQUFPTyxLQUFJLENBQ2pCLENBS0FDLFEsQ0FDQUMsRUFBQVgsV0FBQUEsQyxrSUN6QkQsSUFBQVksRUFBQWYsRUFBQSwyQkFBQSxFQUNBZ0IsRUFBQWhCLEVBQUEseUJBQUEsRUFDQWlCLEVBQUFqQixFQUFBLGdCQUFBLEVBQ0FrQixFQUFBbEIsRUFBQSwyQkFBQSxRQUNhUSxVQUFxQk8sRUFBQUksY0FDakNDLE9BRUFDLFlBQ0MsT0FBT2QsS0FBS2EsTUFDYixDQUVBRSxZQUNDLE9BQU9mLEtBQUthLE9BQU9HLFdBQ3BCLENBQ0FDLE9BQXFDLElBQUlSLEVBQUFTLGFBQWFSLEVBQUFTLE9BQU9DLFNBQVMsRUFDdEVDLFlBQ0MsT0FBT3JCLEtBQUtpQixRQUFRSyxLQUNyQixDQUNBQyxhQUNBUCxrQkFDQyxPQUFPaEIsS0FBS3VCLFlBQ2IsQ0FFQUMsUUFDQUMsYUFDQyxPQUFPekIsS0FBS3dCLE9BQ2IsQ0FFQUUsV0FDQyxPQUFPZixFQUFBZ0IsZUFBZUQsSUFDdkIsQ0FDQUUsWUFDQyxPQUFPQyxNQUFNRCxPQUFTNUIsS0FBS2lCLE9BQU9XLEtBQ25DLENBQ0FFLGNBQ0NELE1BQUssRUFDTDdCLEtBQUtpQixPQUFPYyxHQUFHLFNBQVUvQixLQUFLZ0MsWUFBWSxDQUMzQyxDQUNBM0IsYUFDQyxJQUNDTCxLQUFLYSxPQUFTRixFQUFBZ0IsZUFFZCxHQUFNLENBQUVNLE9BQUFBLEVBQVFDLEtBQUFBLENBQUksRUFBS0MsTUFBTW5DLEtBQUthLE9BQU9hLEtBQUtVLFFBQU8sRUFDbERILEdBQ0pJLFFBQVFDLElBQUksT0FBTyxFQUdwQnRDLEtBQUt3QixRQUFVVSxFQUFLVCxPQUNwQnpCLEtBQUt1QixhQUFlVyxFQUFLbEIsWUFDekJhLE1BQU1ELE1BQVEsQ0FBQSxFQUNkNUIsS0FBS2dDLGFBQVksRUFDakJPLFdBQVdDLE1BQVF4QyxJLENBQ2xCLE1BQU95QyxHQUNSSixRQUFRSyxNQUFNRCxDQUFDLEMsQ0FFakIsQyxDQUNBbEMsRUFBQU4sYUFBQUEsQywySUNuREssV0FDTCxHQUNRLENBQUVlLFlBQUFBLEVBQWFLLE1BQUFBLENBQUssR0FDeEIsRUFBQXNCLEVBQUFDLGtCQUFnQixFQURuQkosU0FFS0ssRUFBUyxDQUFDLEdBQUc3QixFQUFhLEdBQUdBLEVBQWEsR0FBR0EsR0FDbkQsT0FDQzhCLEVBQUFDLFFBQUFDLGNBQUEsVUFBQSxDQUFTQyxVQUFVLGlCQUFpQixFQUNuQ0gsRUFBQUMsUUFBQUMsY0FBQSxTQUFBLENBQVFDLFVBQVUsc0JBQXNCLEVBQ3ZDSCxFQUFBQyxRQUFBQyxjQUFBLEtBQUEsS0FBSzNCLEVBQU1MLFlBQVlrQyxLQUFLLENBQU0sRUFFbkNKLEVBQUFDLFFBQUFDLGNBQUNHLEVBQUFDLEtBQVksQ0FBQ0gsVUFBVSwyQkFBMkJsQyxNQUFPOEIsRUFBUVEsUUFBU0MsRUFBQUMsY0FBYyxDQUFBLENBQUksQ0FHaEcsRUFuQkEsSUFBQVQsRUFBQXJELEVBQUEsT0FBQSxFQUNBa0QsRUFBQWxELEVBQUEsWUFBQSxFQUNBMEQsRUFBQTFELEVBQUEsa0JBQUEsRUFDQTZELEVBQUE3RCxFQUFBLFFBQUEsQyw2SUNLaUIsU0FDTyxDQUFFK0QsS0FBQUEsQ0FBSSxHQUM3QixHQUNRLENBQWVuQyxNQUFBQSxDQUFLLEdBQ3hCLEVBQUFzQixFQUFBQyxrQkFBZ0IsRUFEbkJKLFNBR0ssQ0FBRXJCLE9BQUFBLEVBQW1CK0IsTUFBQUEsQ0FBNkIsRUFBS00sRUFFN0QsT0FDQ1YsRUFBQUMsUUFBQUMsY0FBQSxVQUFBLENBQVNDLFVBQVUsY0FBYyxFQUNoQ0gsRUFBQUMsUUFBQUMsY0FBQ1MsRUFBQUMsWUFBVyxDQUFDQyxJQUFLSCxFQUFLSSxRQUFTQyxPQUFPLFNBQVNDLElBQUtaLENBQUssQ0FBQSxFQUMxREosRUFBQUMsUUFBQUMsY0FBQSxVQUFBLENBQVNDLFVBQVUsc0JBQXNCLEVBQ3hDSCxFQUFBQyxRQUFBQyxjQUFDZSxFQUFBQyxLQUFJLENBQUNDLEtBQU0sMEJBQTBCVCxFQUFLVSxFQUFJLEVBQzlDcEIsRUFBQUMsUUFBQUMsY0FBQSxLQUFBLEtBQUs3QixFQUFPK0IsS0FBSyxFQUNqQkosRUFBQUMsUUFBQUMsY0FBQSxPQUFBLEtBQU83QixFQUFPZ0QsV0FBVyxDQUFRLENBQzNCLEVBRVJyQixFQUFBQyxRQUFBQyxjQUFBLFNBQUEsQ0FBUUMsVUFBVSxnQkFBZ0IsRUFDakNILEVBQUFDLFFBQUFDLGNBQUEsT0FBQSxDQUFNQyxVQUFVLHFCQUFxQixFQUNuQzVCLEVBQU1MLFlBQVlvRCxXLEtBQWNqRCxFQUFPaUQsV0FBV0MsS0FBSyxDQUNsRCxDQUNDLENBR1osRUFoQ0EsSUFBQXZCLEVBQUFyRCxFQUFBLE9BQUEsRUFFQXNFLEVBQUF0RSxFQUFBLHdCQUFBLEVBRUFnRSxFQUFBaEUsRUFBQSxvQ0FBQSxFQUVBa0QsRUFBQWxELEVBQUEsWUFBQSxDLDhKQ05BLElBQUFxRCxFQUFBckQsRUFBQSxPQUFBLEVBUU8sTUFBTTZFLEVBQWEvRCxFQUFBK0QsY0FBR3hCLEVBQUFDLFFBQU13QixjQUE4QixFQUFvQixFQUNmaEUsRUFBQXFDLGlCQUF0Q0EsSUFBTUUsRUFBQUMsUUFBTXlCLFdBQVdGLENBQWEsQyx1SENBbkQsU0FDSCxDQUFFOUIsTUFBQUEsQ0FBSyxHQUNwQixLQUFNLENBQUNaLEVBQU82QyxJQUFZLEVBQUEzQixFQUFBNEIsVUFBa0JsQyxFQUFNWixLQUFLLEVBRS9DUCxFQUFVbUIsRUFBVm5CLFNBR1IsSUFGQSxFQUFBc0QsRUFBQUMsV0FBVSxDQUFDcEMsR0FBUSxJQUFNaUMsRUFBU2pDLEVBQU1aLEtBQUssQ0FBQyxFQUUxQyxDQUFDQSxFQUFPLE9BQU9rQixFQUFBQyxRQUFBQyxjQUFDZSxFQUFBYyxRQUFPLENBQUNDLE9BQU0sQ0FBQSxDQUFBLENBQUEsRUFFbEMsSUFBUTlELEVBQWdCd0IsRUFBTTFCLE1BQXRCRSxlQUNGK0QsRUFBZSxDQUNwQnZDLE1BQUFBLEVBQ0F3QyxTQUFVeEMsRUFBTXdDLFNBQ2hCM0QsTUFBQUEsRUFDQU4sTUFBT0MsQyxFQUdGLEdBQVd3QixFQUVqQixPQUNDTSxFQUFBQyxRQUFBQyxjQUFDTCxFQUFBMkIsY0FBY1csU0FBUSxDQUFDM0QsTUFBT3lELENBQVksRUFDMUNqQyxFQUFBQyxRQUFBQyxjQUFDUyxFQUFBeUIsY0FBYSxLQUNicEMsRUFBQUMsUUFBQUMsY0FBQSxNQUFBLENBQUtDLFVBQVUsNEJBQTRCLEVBQzFDSCxFQUFBQyxRQUFBQyxjQUFBLE9BQUEsS0FDQ0YsRUFBQUMsUUFBQUMsY0FBQ21DLEVBQUFDLFNBQVEsSUFBQSxFQUVUdEMsRUFBQUMsUUFBQUMsY0FBQSxLQUFBLEtBQUszQixFQUFNNkIsS0FBSyxDQUFNLENBQ2hCLENBQ0YsQ0FDUyxDQUduQixFQXpDQSxJQUFBTyxFQUFBaEUsRUFBQSxvQ0FBQSxFQUNBcUQsRUFBQXJELEVBQUEsT0FBQSxFQUNBa0YsRUFBQWxGLEVBQUEsbUNBQUEsRUFDQWtELEVBQUFsRCxFQUFBLFdBQUEsRUFDQXNFLEVBQUF0RSxFQUFBLHdCQUFBLEVBRUEwRixFQUFBMUYsRUFBQSxzQkFBQSxDLHVJQ0VpQixXQUVoQixHQUNRLENBQUVpQyxLQUFBQSxFQUFNTCxNQUFBQSxDQUFLLEdBQ2pCLEVBQUFzQixFQUFBQyxrQkFBZ0IsRUFEbkJKLFNBR0QsT0FDQ00sRUFBQUMsUUFBQUMsY0FBQSxVQUFBLENBQVNDLFVBQVUsY0FBYyxFQUNoQ0gsRUFBQUMsUUFBQUMsY0FBQ3FDLEVBQUFDLE1BQUssQ0FBQ3JDLFVBQVUsb0JBQW9CVSxJQUFLakMsRUFBSzZELFNBQVV6QixJQUFJLGlCQUFpQixDQUFBLEVBQzlFaEIsRUFBQUMsUUFBQUMsY0FBQSxNQUFBLENBQUtDLFVBQVUsdUJBQXVCLEVBQ3JDSCxFQUFBQyxRQUFBQyxjQUFBLE1BQUEsQ0FBS0MsVUFBVSxTQUFTLEVBQ3ZCSCxFQUFBQyxRQUFBQyxjQUFBLEtBQUEsS0FBS3RCLEVBQUs4RCxXQUFXLEVBQ3JCMUMsRUFBQUMsUUFBQUMsY0FBQSxPQUFBLENBQU1DLFVBQVUsSUFBSSxFQUFFdkIsRUFBSytELEtBQUssQ0FBUSxFQUV6QzNDLEVBQUFDLFFBQUFDLGNBQUEsTUFBQSxDQUFLQyxVQUFVLGVBQWUsRUFDN0JILEVBQUFDLFFBQUFDLGNBQUEsT0FBQSxDQUFNaUIsS0FBSyxLQUFLLEVBQUU1QyxFQUFNcUUsUUFBUUMsSUFBSSxDQUFRLENBQ3ZDLENBQ0QsQ0FHVCxFQTNCQSxJQUFBN0MsRUFBQXJELEVBQUEsT0FBQSxFQUVBa0QsRUFBQWxELEVBQUEsWUFBQSxFQUdBNEYsRUFBQTVGLEVBQUEsbUJBQUEsQyx3SUNFaUIsV0FFaEIsR0FDUSxDQUFFaUMsS0FBQUEsRUFBTUwsTUFBQUEsQ0FBSyxHQUNqQixFQUFBc0IsRUFBQUMsa0JBQWdCLEVBRG5CSixTQUdELE9BQ0NNLEVBQUFDLFFBQUFDLGNBQUEsVUFBQSxDQUFTQyxVQUFVLGNBQWMsRUFDaENILEVBQUFDLFFBQUFDLGNBQUNxQyxFQUFBQyxNQUFLLENBQUNyQyxVQUFVLG9CQUFvQlUsSUFBS2pDLEVBQUs2RCxTQUFVekIsSUFBSSxpQkFBaUIsQ0FBQSxFQUM5RWhCLEVBQUFDLFFBQUFDLGNBQUEsTUFBQSxDQUFLQyxVQUFVLHVCQUF1QixFQUNyQ0gsRUFBQUMsUUFBQUMsY0FBQSxNQUFBLENBQUtDLFVBQVUsU0FBUyxFQUN2QkgsRUFBQUMsUUFBQUMsY0FBQSxLQUFBLEtBQUt0QixFQUFLOEQsV0FBVyxFQUNyQjFDLEVBQUFDLFFBQUFDLGNBQUEsT0FBQSxDQUFNQyxVQUFVLElBQUksRUFBRXZCLEVBQUsrRCxLQUFLLENBQVEsRUFFekMzQyxFQUFBQyxRQUFBQyxjQUFBLE1BQUEsQ0FBS0MsVUFBVSxlQUFlLEVBQzdCSCxFQUFBQyxRQUFBQyxjQUFBLE9BQUEsQ0FBTWlCLEtBQUssS0FBSyxFQUFFNUMsRUFBTXFFLFFBQVFDLElBQUksQ0FBUSxDQUN2QyxDQUNELENBR1QsRUEzQkEsSUFBQTdDLEVBQUFyRCxFQUFBLE9BQUEsRUFFQWtELEVBQUFsRCxFQUFBLFlBQUEsRUFHQTRGLEVBQUE1RixFQUFBLG1CQUFBLEMsMElDRmlCLFdBRWhCLEdBQ1EsQ0FBRWlDLEtBQUFBLEVBQU1MLE1BQUFBLENBQUssR0FDakIsRUFBQXNCLEVBQUFDLGtCQUFnQixFQURuQkosU0FHRCxPQUNDTSxFQUFBQyxRQUFBQyxjQUFBLFVBQUEsQ0FBU0MsVUFBVSxjQUFjLEVBQ2hDSCxFQUFBQyxRQUFBQyxjQUFDcUMsRUFBQUMsTUFBSyxDQUFDckMsVUFBVSxvQkFBb0JVLElBQUtqQyxFQUFLNkQsU0FBVXpCLElBQUksaUJBQWlCLENBQUEsRUFDOUVoQixFQUFBQyxRQUFBQyxjQUFBLE1BQUEsQ0FBS0MsVUFBVSx5REFBeUQsRUFDdkVILEVBQUFDLFFBQUFDLGNBQUEsTUFBQSxDQUFLQyxVQUFVLFNBQVMsRUFDdkJILEVBQUFDLFFBQUFDLGNBQUEsS0FBQSxLQUFLdEIsRUFBSzhELFdBQVcsRUFDckIxQyxFQUFBQyxRQUFBQyxjQUFBLE9BQUEsQ0FBTUMsVUFBVSxJQUFJLEVBQUV2QixFQUFLK0QsS0FBSyxDQUFRLEVBRXpDM0MsRUFBQUMsUUFBQUMsY0FBQSxNQUFBLENBQUtDLFVBQVUsZUFBZSxFQUM3QkgsRUFBQUMsUUFBQUMsY0FBQzRDLEVBQUE1QixLQUFJLENBQUNDLEtBQUssV0FBVyxFQUFFNUMsRUFBTXFFLFFBQVFDLElBQUksQ0FBUSxDQUM3QyxDQUNELENBR1QsRUF4QkEsSUFBQTdDLEVBQUFyRCxFQUFBLE9BQUEsRUFDQWtELEVBQUFsRCxFQUFBLFlBQUEsRUFDQTRGLEVBQUE1RixFQUFBLG1CQUFBLEVBQ0FtRyxFQUFBbkcsRUFBQSxrQkFBQSJ9