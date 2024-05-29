System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.1.12/model","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-app@0.0.43/coins-layout.widget","react@18.2.0","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.43/components/ui","@aimpact/chat-sdk@1.0.0/session","@beyond-js/react-18-widgets@1.1.2/hooks","@beyond-js/kernel@0.1.9/routing","pragmate-ui@0.1.1/link","@aimpact/chat@1.0.1/shared/components","pragmate-ui@0.1.1/icons","pragmate-ui@0.1.1/list"],function(n,e){"use strict";var t,a,i,r,o,s,l,c,d,u,m,p,f,g,h,y,v,b,w,x;return n({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){i=e},function(e){r=e},function(e){o=e},function(e){s=e},function(e){l=e},function(e){c=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){h=e},function(e){y=e},function(e){v=e},function(e){b=e}],execute:function(){x=a.Bundle,(w=new x({module:{vspecifier:"@aimpact/ailearn-app@0.0.43/organizations/list",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",i],["@beyond-js/react-18-widgets/page",r],["@beyond-js/reactive/model",o],["@aimpact/ailearn-sdk/core",s],["@beyond-js/kernel/texts",l],["@aimpact/ailearn-app/coins-layout.widget",c],["react",d],["pragmate-ui/components",u],["@aimpact/ailearn-app/components/ui",m],["@aimpact/chat-sdk/session",p],["@beyond-js/react-18-widgets/hooks",f],["@beyond-js/kernel/routing",g],["pragmate-ui/link",h],["@aimpact/chat/shared/components",y],["pragmate-ui/icons",v],["pragmate-ui/list",b]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-organizations-list",vspecifier:"@aimpact/ailearn-app@0.0.43/organizations/list.widget",is:"page",route:"/organizations/list",layout:"coins-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.43/organizations/list.widget"),(x=new Map).set("./controller",{hash:3542939638,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./views"),i=e("./store");class r extends a.PageReactWidgetController{#store;createStore(){return this.#store=new i.StoreManager,this.#store}get Widget(){return n.View}}t.Controller=r}}),x.set("./store",{hash:748708001,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),n=e("@aimpact/ailearn-sdk/core"),i=e("beyond_context"),r=e("@beyond-js/kernel/texts"),o=e("@aimpact/ailearn-app/coins-layout.widget");class s extends a.ReactiveModel{#items;get items(){return this.model.items}#model;get model(){return this.#model}#moduleTexts=new r.CurrentTexts(i.module.specifier);#itemsSelected=new Map;get itemsSelected(){return this.#itemsSelected}get texts(){return this.#moduleTexts.value}get ready(){return super.ready&&this.#moduleTexts.ready}constructor(){super(),this.#model=new n.Organizations,this.model.on("change",this.triggerEvent),this.load(),this.#moduleTexts.on("change",this.triggerEvent)}initialize(){o.LayoutBroker.breadcrumb=[[this.texts.breadcrumb.organizations,""]]}async load(){try{this.fetching=!0,await this.model.load(),super.ready=!0}catch(e){console.error(e)}finally{this.fetching=!1}}async delete(e){await e.delete()}toggleItem(e){this.itemsSelected.has(e.id)&&(this.#itemsSelected.delete(e.id),this.triggerEvent())}}t.StoreManager=s}}),x.set("./views/context",{hash:197669903,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");const n=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(n)}}),x.set("./views/empty",{hash:2357459609,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,i.useModuleContext)()["texts"];return a.default.createElement(r.EmptyCard,{text:e.empty.title,description:e.empty.description,icon:"edit"},a.default.createElement("div",{className:"actions flex-container flex-center"},a.default.createElement(n.Link,{href:"/organizations/create",className:"grow btn btn-primary"},e.actions.create)))};var a=e("react"),n=e("pragmate-ui/components"),i=e("./context"),r=e("@aimpact/ailearn-app/components/ui")}}),x.set("./views/header",{hash:2435326800,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){const{texts:e,fetching:t,store:a}=(0,s.useModuleContext)(),n=c.sessionWrapper.user.displayName,[,i]=o.default.useState(t),r=((0,u.useBinder)([a],()=>i(a.fetching)),e=>m.routing.pushState(e.currentTarget.dataset.href));return o.default.createElement(o.default.Fragment,null,o.default.createElement(l.HeaderCard,{title:e.welcome.message.replace("%name",n),alt:"card-robot",image:"/assets/ai-robot.webp"}),a.items&&o.default.createElement(l.SubDivider,{title:e.title},o.default.createElement("div",{className:"buttons-header__container"},o.default.createElement(d.Button,{onClick:r,icon:"share-link",variant:"primary","data-href":"/organizations/join"},e.actions.join),o.default.createElement(d.Button,{onClick:r,"data-href":"/organizations/create",icon:"add",variant:"primary"},e.actions.create))))};var o=e("react"),s=e("./context"),l=e("@aimpact/ailearn-app/components/ui"),c=e("@aimpact/chat-sdk/session"),d=e("pragmate-ui/components"),u=e("@beyond-js/react-18-widgets/hooks"),m=e("@beyond-js/kernel/routing")}}),x.set("./views/index",{hash:4129544995,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=(0,d.useState)(e.ready),[n,i]=(0,d.useState)(e.fetching),[r,o]=(0,d.useState)(e.items.length),s=e["texts"],l=((0,h.useBinder)([e],()=>{a(e.ready),i(e.fetching),o(e.items.length)}),d.default.useMemo(()=>({texts:s,store:e,fetching:n,totalItems:r}),[s,e,n,r]));if(!t)return d.default.createElement(g.PreloadScreen,null);var c=r<1?m.EmptyList:y.OrganizationsList;return d.default.createElement(d.default.Fragment,null,d.default.createElement(f.ModuleContext.Provider,{value:l},d.default.createElement(u.PageContainer,null,d.default.createElement(u.PageTitle,{title:s.title},d.default.createElement(p.Link,{href:"/modules/management"},d.default.createElement(v.Icon,{icon:"add-circle"}),s.actions.create)),d.default.createElement(c,{store:e}))))};var d=e("react"),u=e("@aimpact/ailearn-app/components/ui"),m=e("./empty"),p=e("pragmate-ui/link"),f=e("./context"),g=e("@aimpact/chat/shared/components"),h=e("@beyond-js/react-18-widgets/hooks"),y=e("./list"),v=e("pragmate-ui/icons")}}),x.set("./views/item/actions",{hash:1517931771,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({item:e}){const{texts:t,store:a}=(0,i.useModuleContext)();return n.default.createElement("section",{className:"card-footer__actions"},n.default.createElement(r.ConfirmAction,{textPopUp:t?.actions?.delete,icon:"delete",onConfirm:async()=>{await a.delete(e)}}))};var n=e("react"),i=e("../context"),r=e("@aimpact/ailearn-app/components/ui")}}),x.set("./views/item/index",{hash:1878075103,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Organization=function({data:e}){return a.default.createElement(n.Card,null,a.default.createElement(n.CardContent,null,a.default.createElement(i.default,{item:e})),a.default.createElement(n.CardFooter,null,a.default.createElement(r.default,{item:e})))};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),i=e("./title"),r=e("./actions")}}),x.set("./views/item/title",{hash:1230832894,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({item:e}){return a.default.createElement("section",null,a.default.createElement("div",{className:"title-card__container flex-container flex-space-between"},a.default.createElement(n.Link,{href:"/organizations/view/"+e.id},a.default.createElement("h4",null,e.name))),a.default.createElement("span",null,e.description))};var a=e("react"),n=e("pragmate-ui/components")}}),x.set("./views/list",{hash:3313635402,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OrganizationsList=function({store:e}){return a.default.createElement("article",{className:"organization-list__container"},a.default.createElement(i.List,{className:"list-unstyled grid-container g-2-columns mt-15",items:e.items,control:n.Organization}))};var a=e("react"),n=e("./item"),i=e("pragmate-ui/list")}}),w.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],w.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",w),n("hmr",new function(){this.on=(e,t)=>w.hmr.on(e,t),this.off=(e,t)=>w.hmr.off(e,t)}),w.initialise(x)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS90aXRsZS50c3giLCIvdHMvdmlld3MvbGlzdC50c3giXSwibmFtZXMiOlsiX3BhZ2UiLCJyZXF1aXJlIiwiX3ZpZXdzIiwiX3N0b3JlIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCIjc3RvcmUiLCJjcmVhdGVTdG9yZSIsInRoaXMiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX2JleW9uZF9jb250ZXh0IiwiX3RleHRzIiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsIiNpdGVtcyIsIml0ZW1zIiwibW9kZWwiLCIjbW9kZWwiLCIjbW9kdWxlVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCIjaXRlbXNTZWxlY3RlZCIsIk1hcCIsIml0ZW1zU2VsZWN0ZWQiLCJ0ZXh0cyIsInZhbHVlIiwicmVhZHkiLCJzdXBlciIsImNvbnN0cnVjdG9yIiwiT3JnYW5pemF0aW9ucyIsIm9uIiwidHJpZ2dlckV2ZW50IiwibG9hZCIsImluaXRpYWxpemUiLCJMYXlvdXRCcm9rZXIiLCJicmVhZGNydW1iIiwib3JnYW5pemF0aW9ucyIsImZldGNoaW5nIiwiYXdhaXQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiaXRlbSIsInRvZ2dsZUl0ZW0iLCJoYXMiLCJpZCIsIl9yZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQiLCJjcmVhdGVFbGVtZW50IiwiX3VpIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJfY29tcG9uZW50cyIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsInN0b3JlIiwidXNlck5hbWUiLCJfc2Vzc2lvbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwib25OYXZpZ2F0ZSIsIl9ob29rcyIsInVzZUJpbmRlciIsImV2ZW50IiwiX3JvdXRpbmciLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJGcmFnbWVudCIsIkhlYWRlckNhcmQiLCJ3ZWxjb21lIiwibWVzc2FnZSIsInJlcGxhY2UiLCJhbHQiLCJpbWFnZSIsIlN1YkRpdmlkZXIiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImRhdGEtaHJlZiIsImpvaW4iLCJzZXRSZWFkeSIsInNldEZldGNoaW5nIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJsZW5ndGgiLCJ1c2VNZW1vIiwiUHJlbG9hZFNjcmVlbiIsIkxpc3RDb250cm9sIiwiX2VtcHR5IiwiRW1wdHlMaXN0IiwiX2xpc3QiLCJPcmdhbml6YXRpb25zTGlzdCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIl9saW5rIiwiX2ljb25zIiwiSWNvbiIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJhc3luYyIsImRhdGEiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJfdGl0bGUiLCJDYXJkRm9vdGVyIiwiX2FjdGlvbnMiLCJuYW1lIiwiTGlzdCIsImNvbnRyb2wiLCJfaXRlbSIsIk9yZ2FuaXphdGlvbiJdLCJtYXBwaW5ncyI6IndzRUFBQSxJQUFBQSxFQUFBQyxFQUFBLGtDQUFBLEVBQ0FDLEVBQUFELEVBQUEsU0FBQSxFQUNBRSxFQUFBRixFQUFBLFNBQUEsUUFHTUcsVUFBbUJKLEVBQUFLLDBCQUN4QkMsT0FDQUMsY0FFQyxPQURBQyxLQUFLRixPQUFTLElBQUlILEVBQUFNLGFBQ1hELEtBQUtGLE1BQ2IsQ0FDQUksYUFDQyxPQUFPUixFQUFBUyxJQUNSLEMsQ0FDQUMsRUFBQVIsV0FBQUEsQyxpSUNkRCxJQUFBUyxFQUFBWixFQUFBLDJCQUFBLEVBQ0FhLEVBQUFiLEVBQUEsMkJBQUEsRUFDQWMsRUFBQWQsRUFBQSxnQkFBQSxFQUNBZSxFQUFBZixFQUFBLHlCQUFBLEVBQ0FnQixFQUFBaEIsRUFBQSwwQ0FBQSxRQUNhUSxVQUFxQkksRUFBQUssY0FDakNDLE9BQ0FDLFlBQ0MsT0FBT1osS0FBS2EsTUFBTUQsS0FDbkIsQ0FFQUUsT0FDQUQsWUFDQyxPQUFPYixLQUFLYyxNQUNiLENBRUFDLGFBQWUsSUFBSVAsRUFBQVEsYUFBYVQsRUFBQVUsT0FBT0MsU0FBUyxFQUNoREMsZUFBaUIsSUFBSUMsSUFDckJDLG9CQUNDLE9BQU9yQixLQUFLbUIsY0FDYixDQUVBRyxZQUNDLE9BQU90QixLQUFLZSxhQUFhUSxLQUMxQixDQUVBQyxZQUNDLE9BQU9DLE1BQU1ELE9BQVN4QixLQUFLZSxhQUFhUyxLQUN6QyxDQUVBRSxjQUNDRCxNQUFLLEVBQ0x6QixLQUFLYyxPQUFTLElBQUlSLEVBQUFxQixjQUNsQjNCLEtBQUthLE1BQU1lLEdBQUcsU0FBVTVCLEtBQUs2QixZQUFZLEVBQ3pDN0IsS0FBSzhCLEtBQUksRUFDVDlCLEtBQUtlLGFBQWFhLEdBQUcsU0FBVTVCLEtBQUs2QixZQUFZLENBQ2pELENBRUFFLGFBQ0N0QixFQUFBdUIsYUFBYUMsV0FBYSxDQUFDLENBQUNqQyxLQUFLc0IsTUFBTVcsV0FBV0MsY0FBZSxJQUNsRSxDQUVBSixhQUNDLElBQ0M5QixLQUFLbUMsU0FBVyxDQUFBLEVBQ2hCQyxNQUFNcEMsS0FBS2EsTUFBTWlCLEtBQUksRUFDckJMLE1BQU1ELE1BQVEsQ0FBQSxDLENBQ2IsTUFBT2EsR0FDUkMsUUFBUUMsTUFBTUYsQ0FBQyxDLENBQ2YsUUFDQXJDLEtBQUttQyxTQUFXLENBQUEsQyxDQUVsQixDQUVBSyxhQUFhQyxHQUNaTCxNQUFNSyxFQUFLRCxPQUFNLENBQ2xCLENBRUFFLFdBQVdELEdBQ056QyxLQUFLcUIsY0FBY3NCLElBQUlGLEVBQUtHLEVBQUUsSUFDakM1QyxLQUFLbUIsZUFBZXFCLE9BQU9DLEVBQUtHLEVBQUUsRUFDbEM1QyxLQUFLNkIsYUFBWSxFQUduQixDLENBQ0F6QixFQUFBSCxhQUFBQSxDLDZKQ2pFRCxJQUFBNEMsRUFBQXBELEVBQUEsT0FBQSxFQVNPLE1BQU1xRCxFQUFhMUMsRUFBQTBDLGNBQUdELEVBQUFFLFFBQU1DLGNBQThCLEVBQW9CLEVBQ2Y1QyxFQUFBNkMsaUJBQXRDQSxJQUFNSixFQUFBRSxRQUFNRyxXQUFXSixDQUFhLEMsOEhDTDlELFdBQ0wsSUFBUXhCLEdBQVUsRUFBQTZCLEVBQUFGLGtCQUFnQixFQUExQjNCLFNBQ1IsT0FDQ3VCLEVBQUFFLFFBQUFLLGNBQUNDLEVBQUFDLFVBQVMsQ0FBQ0MsS0FBTWpDLEVBQU1rQyxNQUFNQyxNQUFPQyxZQUFhcEMsRUFBTWtDLE1BQU1FLFlBQWFDLEtBQUssTUFBTSxFQUNwRmQsRUFBQUUsUUFBQUssY0FBQSxNQUFBLENBQUtRLFVBQVUsb0NBQW9DLEVBQ2xEZixFQUFBRSxRQUFBSyxjQUFDUyxFQUFBQyxLQUFJLENBQUNDLEtBQUssd0JBQXdCSCxVQUFVLHNCQUFzQixFQUNqRXRDLEVBQU0wQyxRQUFRQyxNQUFNLENBQ2YsQ0FDRixDQUdULEVBaEJBLElBQUFwQixFQUFBcEQsRUFBQSxPQUFBLEVBQ0FvRSxFQUFBcEUsRUFBQSx3QkFBQSxFQUNBMEQsRUFBQTFELEVBQUEsV0FBQSxFQUNBNEQsRUFBQTVELEVBQUEsb0NBQUEsQyw0SENJTSxXQUNMLEtBQU0sQ0FBRTZCLE1BQUFBLEVBQU9hLFNBQUFBLEVBQVUrQixNQUFBQSxDQUFLLEdBQUssRUFBQWYsRUFBQUYsa0JBQWdCLEVBQzdDa0IsRUFBV0MsRUFBQUMsZUFBZUMsS0FBS0MsWUFDL0IsQ0FBQSxDQUFVQyxHQUFjM0IsRUFBQUUsUUFBTTBCLFNBQVN0QyxDQUFRLEVBRy9DdUMsSUFETixFQUFBQyxFQUFBQyxXQUFVLENBQUNWLEdBQVEsSUFBTU0sRUFBV04sRUFBTS9CLFFBQVEsQ0FBQyxFQUNoQzBDLEdBQVNDLEVBQUFDLFFBQVFDLFVBQVVILEVBQU1JLGNBQWNDLFFBQVFuQixJQUFJLEdBQzlFLE9BQ0NsQixFQUFBRSxRQUFBSyxjQUFBUCxFQUFBRSxRQUFBb0MsU0FBQSxLQUNDdEMsRUFBQUUsUUFBQUssY0FBQ0MsRUFBQStCLFdBQVUsQ0FDVjNCLE1BQU9uQyxFQUFNK0QsUUFBUUMsUUFBUUMsUUFBUSxRQUFTcEIsQ0FBUSxFQUN0RHFCLElBQUssYUFDTEMsTUFBTSx1QkFBdUIsQ0FBQSxFQUU3QnZCLEVBQU10RCxPQUNOaUMsRUFBQUUsUUFBQUssY0FBQ0MsRUFBQXFDLFdBQVUsQ0FBQ2pDLE1BQU9uQyxFQUFNbUMsS0FBSyxFQUM3QlosRUFBQUUsUUFBQUssY0FBQSxNQUFBLENBQUtRLFVBQVUsMkJBQTJCLEVBQ3pDZixFQUFBRSxRQUFBSyxjQUFDUyxFQUFBOEIsT0FBTSxDQUNOQyxRQUFTbEIsRUFDVGYsS0FBSyxhQUNMa0MsUUFBUSxVQUFTQyxZQUNOLHFCQUFxQixFQUUvQnhFLEVBQU0wQyxRQUFRK0IsSUFBSSxFQUVwQmxELEVBQUFFLFFBQUFLLGNBQUNTLEVBQUE4QixPQUFNLENBQUNDLFFBQVNsQixFQUFVb0IsWUFBWSx3QkFBd0JuQyxLQUFLLE1BQU1rQyxRQUFRLFNBQVMsRUFDekZ2RSxFQUFNMEMsUUFBUUMsTUFBTSxDQUNiLENBQ0osQ0FFUCxDQUdKLEVBeENBLElBQUFwQixFQUFBcEQsRUFBQSxPQUFBLEVBQ0EwRCxFQUFBMUQsRUFBQSxXQUFBLEVBQ0E0RCxFQUFBNUQsRUFBQSxvQ0FBQSxFQUNBMkUsRUFBQTNFLEVBQUEsMkJBQUEsRUFDQW9FLEVBQUFwRSxFQUFBLHdCQUFBLEVBQ0FrRixFQUFBbEYsRUFBQSxtQ0FBQSxFQUNBcUYsRUFBQXJGLEVBQUEsMkJBQUEsQyx5SENJaUIsU0FDSCxDQUFFeUUsTUFBQUEsQ0FBSyxHQUNwQixLQUFNLENBQUMxQyxFQUFPd0UsSUFBWSxFQUFBbkQsRUFBQTRCLFVBQWtCUCxFQUFNMUMsS0FBSyxFQUNqRCxDQUFDVyxFQUFVOEQsSUFBZSxFQUFBcEQsRUFBQTRCLFVBQWtCUCxFQUFNL0IsUUFBUSxFQUMxRCxDQUFDK0QsRUFBWUMsSUFBaUIsRUFBQXRELEVBQUE0QixVQUFpQlAsRUFBTXRELE1BQU13RixNQUFNLEVBQy9EOUUsRUFBVTRDLEVBQVY1QyxTQU9GQyxJQUxOLEVBQUFvRCxFQUFBQyxXQUFVLENBQUNWLEdBQVEsS0FDbEI4QixFQUFTOUIsRUFBTTFDLEtBQUssRUFDcEJ5RSxFQUFZL0IsRUFBTS9CLFFBQVEsRUFDMUJnRSxFQUFjakMsRUFBTXRELE1BQU13RixNQUFNLENBQ2pDLENBQUMsRUFDYXZELEVBQUFFLFFBQU1zRCxRQUNuQixLQUFBLENBQ0MvRSxNQUFBQSxFQUNBNEMsTUFBQUEsRUFDQS9CLFNBQUFBLEVBQ0ErRCxXQUFBQSxDQUNBLEdBQ0QsQ0FBQzVFLEVBQU80QyxFQUFPL0IsRUFBVStELEVBQVcsR0FFckMsR0FBSSxDQUFDMUUsRUFBTyxPQUFPcUIsRUFBQUUsUUFBQUssY0FBQ1MsRUFBQXlDLGNBQWEsSUFBQSxFQUVqQyxJQUFNQyxFQUFjTCxFQUFhLEVBQUlNLEVBQUFDLFVBQVlDLEVBQUFDLGtCQUVqRCxPQUNDOUQsRUFBQUUsUUFBQUssY0FBQVAsRUFBQUUsUUFBQW9DLFNBQUEsS0FDQ3RDLEVBQUFFLFFBQUFLLGNBQUNELEVBQUFMLGNBQWM4RCxTQUFRLENBQUNyRixNQUFPQSxDQUFLLEVBQ25Dc0IsRUFBQUUsUUFBQUssY0FBQ0MsRUFBQXdELGNBQWEsS0FDYmhFLEVBQUFFLFFBQUFLLGNBQUNDLEVBQUF5RCxVQUFTLENBQUNyRCxNQUFPbkMsRUFBTW1DLEtBQUssRUFDNUJaLEVBQUFFLFFBQUFLLGNBQUMyRCxFQUFBakQsS0FBSSxDQUFDQyxLQUFLLHFCQUFxQixFQUMvQmxCLEVBQUFFLFFBQUFLLGNBQUM0RCxFQUFBQyxLQUFJLENBQUN0RCxLQUFLLFlBQVksQ0FBQSxFQUN0QnJDLEVBQU0wQyxRQUFRQyxNQUFNLENBQ2YsRUFFUnBCLEVBQUFFLFFBQUFLLGNBQUNtRCxFQUFXLENBQUNyQyxNQUFPQSxDQUFLLENBQUEsQ0FBSSxDQUNkLENBQ1EsQ0FHNUIsRUFsREEsSUFBQXJCLEVBQUFwRCxFQUFBLE9BQUEsRUFDQTRELEVBQUE1RCxFQUFBLG9DQUFBLEVBQ0ErRyxFQUFBL0csRUFBQSxTQUFBLEVBQ0FzSCxFQUFBdEgsRUFBQSxrQkFBQSxFQUNBMEQsRUFBQTFELEVBQUEsV0FBQSxFQUNBb0UsRUFBQXBFLEVBQUEsaUNBQUEsRUFDQWtGLEVBQUFsRixFQUFBLG1DQUFBLEVBRUFpSCxFQUFBakgsRUFBQSxRQUFBLEVBQ0F1SCxFQUFBdkgsRUFBQSxtQkFBQSxDLG1JQ0xjLFNBQThCLENBQUVnRCxLQUFBQSxDQUFJLEdBQ2pELEtBQU0sQ0FBRW5CLE1BQUFBLEVBQU80QyxNQUFBQSxDQUFLLEdBQUssRUFBQWYsRUFBQUYsa0JBQWdCLEVBTXpDLE9BQ0NKLEVBQUFFLFFBQUFLLGNBQUEsVUFBQSxDQUFTUSxVQUFVLHNCQUFzQixFQUN4Q2YsRUFBQUUsUUFBQUssY0FBQ0MsRUFBQTZELGNBQWEsQ0FBQ0MsVUFBVzdGLEdBQU8wQyxTQUFTeEIsT0FBUW1CLEtBQUssU0FBU3lELFVBTmpEQyxVQUNoQmpGLE1BQU04QixFQUFNMUIsT0FBT0MsQ0FBSSxDQUN4QixDQUlxRixDQUFBLENBQUksQ0FHMUYsRUFoQkEsSUFBQUksRUFBQXBELEVBQUEsT0FBQSxFQUNBMEQsRUFBQTFELEVBQUEsWUFBQSxFQUNBNEQsRUFBQTVELEVBQUEsb0NBQUEsQyxzSUNHTSxTQUF1QixDQUFFNkgsS0FBQUEsQ0FBSSxHQUNsQyxPQUNDekUsRUFBQUUsUUFBQUssY0FBQ0MsRUFBQWtFLEtBQUksS0FDSjFFLEVBQUFFLFFBQUFLLGNBQUNDLEVBQUFtRSxZQUFXLEtBQ1gzRSxFQUFBRSxRQUFBSyxjQUFDcUUsRUFBQTFFLFFBQVUsQ0FBQ04sS0FBTTZFLENBQUksQ0FBQSxDQUFJLEVBRTNCekUsRUFBQUUsUUFBQUssY0FBQ0MsRUFBQXFFLFdBQVUsS0FDVjdFLEVBQUFFLFFBQUFLLGNBQUN1RSxFQUFBNUUsUUFBbUIsQ0FBQ04sS0FBTTZFLENBQUksQ0FBQSxDQUFJLENBQ3ZCLENBR2hCLEVBaEJBLElBQUF6RSxFQUFBcEQsRUFBQSxPQUFBLEVBQ0E0RCxFQUFBNUQsRUFBQSxvQ0FBQSxFQUNBZ0ksRUFBQWhJLEVBQUEsU0FBQSxFQUNBa0ksRUFBQWxJLEVBQUEsV0FBQSxDLGlJQ0FjLFNBQXFCLENBQUVnRCxLQUFBQSxDQUFJLEdBQ3hDLE9BQ0NJLEVBQUFFLFFBQUFLLGNBQUEsVUFBQSxLQUNDUCxFQUFBRSxRQUFBSyxjQUFBLE1BQUEsQ0FBS1EsVUFBVSx5REFBeUQsRUFDdkVmLEVBQUFFLFFBQUFLLGNBQUNTLEVBQUFDLEtBQUksQ0FBQ0MsS0FBTSx1QkFBdUJ0QixFQUFLRyxFQUFJLEVBQzNDQyxFQUFBRSxRQUFBSyxjQUFBLEtBQUEsS0FBS1gsRUFBS21GLElBQUksQ0FBTSxDQUNkLEVBR1IvRSxFQUFBRSxRQUFBSyxjQUFBLE9BQUEsS0FBT1gsRUFBS2lCLFdBQVcsQ0FBUSxDQUdsQyxFQWZBLElBQUFiLEVBQUFwRCxFQUFBLE9BQUEsRUFDQW9FLEVBQUFwRSxFQUFBLHdCQUFBLEMscUlDSU0sU0FBNEIsQ0FBRXlFLE1BQUFBLENBQUssR0FDeEMsT0FDQ3JCLEVBQUFFLFFBQUFLLGNBQUEsVUFBQSxDQUFTUSxVQUFVLDhCQUE4QixFQUNoRGYsRUFBQUUsUUFBQUssY0FBQ3NELEVBQUFtQixLQUFJLENBQ0pqRSxVQUFVLGlEQUNWaEQsTUFBT3NELEVBQU10RCxNQUNia0gsUUFBU0MsRUFBQUMsWUFBWSxDQUFBLENBQ3BCLENBR0wsRUFmQSxJQUFBbkYsRUFBQXBELEVBQUEsT0FBQSxFQUNBc0ksRUFBQXRJLEVBQUEsUUFBQSxFQUNBaUgsRUFBQWpILEVBQUEsa0JBQUEifQ==