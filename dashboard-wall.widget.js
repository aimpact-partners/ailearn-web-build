System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-app@0.0.40/dashboard-layout.widget","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.1.12/model","@beyond-js/kernel@0.1.9/texts","react@18.2.0","pragmate-ui@0.1.1/icons","@aimpact/chat-sdk@1.0.0/session","@aimpact/chat@1.0.1/shared/icons","pragmate-ui@0.1.1/list","@aimpact/ailearn-app@0.0.40/components/ui","@aimpact/ailearn-app@0.0.40/components/navbar-header.code","@aimpact/ailearn-app@0.0.40/config","pragmate-ui@0.1.1/components","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@0.1.1/alert","react@18.2.0/jsx-runtime"],function(r,e){"use strict";var t,a,n,s,o,i,c,l,d,u,m,p,h,f,g,v,y,b,w,x,_,C;return r({Controller:void 0,Content:void 0,Header:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){s=e},function(e){o=e},function(e){i=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){h=e},function(e){f=e},function(e){g=e},function(e){v=e},function(e){y=e},function(e){b=e},function(e){w=e},function(e){x=e}],execute:function(){C=a.Bundle,(_=new C({module:{vspecifier:"@aimpact/ailearn-app@0.0.40/dashboard-wall",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",s],["@aimpact/ailearn-app/dashboard-layout.widget",o],["@aimpact/ailearn-sdk/core",i],["@beyond-js/reactive/model",c],["@beyond-js/kernel/texts",l],["react",d],["pragmate-ui/icons",u],["@aimpact/chat-sdk/session",m],["@aimpact/chat/shared/icons",p],["pragmate-ui/list",h],["@aimpact/ailearn-app/components/ui",f],["@aimpact/ailearn-app/components/navbar-header.code",g],["@aimpact/ailearn-app/config",v],["pragmate-ui/components",y],["@beyond-js/react-18-widgets/hooks",b],["pragmate-ui/alert",w],["react/jsx-runtime",x]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"dashboard-wall",vspecifier:"@aimpact/ailearn-app@0.0.40/dashboard-wall.widget",is:"page",route:"/assignments/${id}/wall",layout:"dashboard-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.40/dashboard-wall.widget"),(C=new Map).set("./controller",{hash:1571202678,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),r=e("./store"),n=e("./views"),s=e("@aimpact/ailearn-app/dashboard-layout.widget");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager,this.#store}get Widget(){return n.View}show(){s.LayoutBroker.setBackLink(`/assignments/${this.uri.vars.get("id")}/dashboard/classroom`),this.#store.load(this.uri.vars.get("id"))}hide(){s.LayoutBroker.removeOverlay()}}t.Controller=o}}),C.set("./interface",{hash:3506573663,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),C.set("./store",{hash:538185621,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var n=e("@aimpact/ailearn-sdk/core"),a=e("@beyond-js/reactive/model"),s=e("@aimpact/ailearn-app/dashboard-layout.widget"),r=e("@beyond-js/kernel/texts"),o=e("beyond_context");class i extends a.ReactiveModel{#model;get model(){return this.#model}#items;get items(){return this.#items}#id;get id(){return this.#id}#assignment;get assignment(){return this.#assignment}#texts=new r.CurrentTexts(o.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.#texts.on("change",this.triggerEvent)}refresh=async()=>{try{this.fetching=!0;var e=(await this.model.load({id:this.#id}))["messages"];this.#items=e}catch(e){console.error(e)}finally{this.fetching=!1}};async load(e){try{this.#assignment=new n.Assignment({id:e}),this.#model=new n.DashboardWall,this.#id=e;var t=(await this.#model.load({id:e}))["messages"];const a=await this.#assignment.load({id:e}),r=(this.#items=t,s.LayoutBroker.setBackLink(`/assignments/${e}/dashboard/classroom`),()=>{this.#texts.ready&&(s.LayoutBroker.setOverlay(this.texts?.header+" "+a.module.title),this.#texts.off("change",r))});this.ready?r():this.#texts.on("change",r),super.ready=!0,this.triggerEvent()}catch(e){console.error(e)}}}t.StoreManager=i}}),C.set("./views/components/profile-icon",{hash:1205210088,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileIcon=function({role:e}){const[t,a]=(0,o.useState)(!1),r="user"===e?"user":globalThis.localStorage.getItem("chat.app.user.default.profile"),n=c.sessionWrapper.user.getProperties(),s="user"===e?n.photoURL:globalThis.localStorage.getItem("chat.app.user.default.profile");return o.default.createElement("picture",{className:"picture__container"},n.photoURL&&!t||"user"!==e?o.default.createElement("img",{alt:"user image profile",src:s,onError:()=>a(!0)}):o.default.createElement(i.Icon,{className:"lg",icon:l.ICONS[r]??r}))};var o=e("react"),i=e("pragmate-ui/icons"),c=e("@aimpact/chat-sdk/session"),l=e("@aimpact/chat/shared/icons")}}),C.set("./views/content/index",{hash:2680141398,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Content=void 0;var a=e("react"),r=e("../context"),n=e("./item"),s=e("pragmate-ui/list");t.Content=()=>{var e=(0,r.useWallDashboardContext)()["items"];return a.default.createElement(s.List,{className:"wall__container",items:e,control:n.Item})}}}),C.set("./views/content/item",{hash:1300636804,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({data:e}){var{}=(0,r.useWallDashboardContext)();return a.default.createElement("div",{className:"wall-container",id:e.time},a.default.createElement("p",{className:"title-activity h3"},e.activity.title),a.default.createElement(n.Message,{role:"user",text:e.prompt.content,user:e.user}),a.default.createElement(n.Message,{role:"system",text:e.answer.content,user:void 0}))};var a=e("react"),r=e("../context"),n=e("./message")}}),C.set("./views/content/message",{hash:2364017378,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Message=function({role:e,text:t,user:a}){const[r,n]=(0,o.useState)(!1),s="wall "+e;return o.default.createElement("div",{className:s},o.default.createElement("section",{className:"picture__container"},o.default.createElement(i.ProfileIcon,{role:e,photoUrl:a?.photoUrl})),o.default.createElement("section",{className:"wall-message__container"},o.default.createElement("div",{className:"message-text__container expand-"+r},a&&o.default.createElement("p",{className:"message-user__label-text p2"},a.name),o.default.createElement("p",{className:"message__label-text p2 expand-"+r},function(e,t){return e.length>t?e.slice(0,t)+"...":e}(t,r?5e3:280)))),o.default.createElement("section",{className:"wall-actions__container"},o.default.createElement(c.IconButton,{onClick:function(){n(!r)},className:"md",icon:r?"arrowDropUp":"arrowDropDown"})))};var o=e("react"),i=e("../components/profile-icon"),c=e("pragmate-ui/icons")}}),C.set("./views/context",{hash:1277739422,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useWallDashboardContext=t.WallDashboardContext=void 0;var a=e("react");const r=t.WallDashboardContext=a.default.createContext({});t.useWallDashboardContext=()=>a.default.useContext(r)}}),C.set("./views/empty",{hash:3693986805,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,n.useWallDashboardContext)()["texts"];return a.default.createElement(r.EmptyCard,{text:e.emptyTitle,description:e.empty,icon:"info"})};var a=e("react"),r=e("@aimpact/ailearn-app/components/ui"),n=e("./context")}}),C.set("./views/header",{hash:2381242925,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){var e=(0,n.useWallDashboardContext)()["store"];return r.default.createElement(r.default.Fragment,null,r.default.createElement(a.NavbarHeader,{breadcrumb:[["Assignment",`/assignments/${e.id}/dashboard/classroom`],["Wall",""]]},r.default.createElement(s.IconButton,{icon:"refresh",onClick:e.refresh})))};var a=e("@aimpact/ailearn-app/components/navbar-header.code"),r=e("react"),n=e("./context"),s=e("pragmate-ui/icons")}}),C.set("./views/index",{hash:4132403512,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=l.default.useState(e.ready),[r,n]=(0,u.useTexts)(m.module.specifier),[s,o]=l.default.useState(e.items?.length??0);if((0,u.useBinder)([e],()=>{a(e.ready),o(e.items.length)}),!t||!r)return l.default.createElement(d.Spinner,{active:!0});var i={texts:n,store:e,items:e.items,fetching:e.fetching,totalItems:s},c=0<e.items.length?f.Content:g.EmptyList;return l.default.createElement(p.WallDashboardContext.Provider,{value:i},l.default.createElement(h.PageContainer,null,l.default.createElement(c,null)))};var l=e("react"),d=e("pragmate-ui/components"),u=e("@beyond-js/react-18-widgets/hooks"),m=e("beyond_context"),p=e("./context"),h=e("@aimpact/ailearn-app/components/ui"),f=e("./content"),g=e("./empty")}}),_.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/content/index",from:"Content",name:"Content"},{im:"./views/header",from:"Header",name:"Header"},{im:"./views/index",from:"View",name:"View"}],_.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:a),!e&&"Content"!==t||r("Content",e?e("./views/content/index").Content:a),!e&&"Header"!==t||r("Header",e?e("./views/header").Header:a),!e&&"View"!==t||r("View",e?e("./views/index").View:a)},r("__beyond_pkg",_),r("hmr",new function(){this.on=(e,t)=>_.hmr.on(e,t),this.off=(e,t)=>_.hmr.off(e,t)}),_.initialise(C)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL2ludGVyZmFjZS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZW50L21lc3NhZ2UudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sIm5hbWVzIjpbIl9wYWdlIiwicmVxdWlyZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIiNzdG9yZSIsImNyZWF0ZVN0b3JlIiwidGhpcyIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiTGF5b3V0QnJva2VyIiwic2V0QmFja0xpbmsiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJyZW1vdmVPdmVybGF5IiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCIjbW9kZWwiLCJtb2RlbCIsIiNpdGVtcyIsIml0ZW1zIiwiI2lkIiwiaWQiLCIjYXNzaWdubWVudCIsImFzc2lnbm1lbnQiLCIjdGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0ZXh0cyIsInJlYWR5Iiwic3VwZXIiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwicmVmcmVzaCIsImFzeW5jIiwiZmV0Y2hpbmciLCJtZXNzYWdlcyIsImF3YWl0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkFzc2lnbm1lbnQiLCJEYXNoYm9hcmRXYWxsIiwiZGF0YSIsInNldE92ZXJsYXkiLCJoZWFkZXIiLCJ0aXRsZSIsIm9mZiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJfcmVhY3QiLCJ1c2VTdGF0ZSIsImljb24iLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJQcm9wcyIsIl9zZXNzaW9uIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZ2V0UHJvcGVydGllcyIsInNyYyIsInBob3RvVVJMIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhbHQiLCJvbkVycm9yIiwiaGFuZGxlTG9hZEVycm9yIiwiX2ljb25zIiwiSWNvbiIsIl9pY29uczIiLCJJQ09OUyIsIl9jb250ZXh0IiwiX2l0ZW0iLCJfbGlzdCIsIkNvbnRlbnQiLCJ1c2VXYWxsRGFzaGJvYXJkQ29udGV4dCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsInRpbWUiLCJhY3Rpdml0eSIsIl9tZXNzYWdlIiwiTWVzc2FnZSIsInRleHQiLCJwcm9tcHQiLCJjb250ZW50IiwiYW5zd2VyIiwidW5kZWZpbmVkIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kIiwiY2xzIiwiX3Byb2ZpbGVJY29uIiwiUHJvZmlsZUljb24iLCJwaG90b1VybCIsIm5hbWUiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzbGljZSIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiV2FsbERhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIkVtcHR5Q2FyZCIsImVtcHR5VGl0bGUiLCJkZXNjcmlwdGlvbiIsImVtcHR5Iiwic3RvcmUiLCJGcmFnbWVudCIsIl9uYXZiYXJIZWFkZXIiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwiX2hvb2tzIiwidXNlVGV4dHMiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInVzZUJpbmRlciIsIl9jb21wb25lbnRzIiwiU3Bpbm5lciIsImFjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJfY29udGVudCIsIl9lbXB0eSIsIkVtcHR5TGlzdCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Inc2RUFBQSxJQUFBQSxFQUFBQyxFQUFBLGtDQUFBLEVBQ0FDLEVBQUFELEVBQUEsU0FBQSxFQUNBRSxFQUFBRixFQUFBLFNBQUEsRUFDQUcsRUFBQUgsRUFBQSw4Q0FBQSxRQUVNSSxVQUFtQkwsRUFBQU0sMEJBQ3hCQyxPQUNBQyxjQUVDLE9BREFDLEtBQUtGLE9BQVMsSUFBSUwsRUFBQVEsYUFDWEQsS0FBS0YsTUFDYixDQUVBSSxhQUNDLE9BQU9SLEVBQUFTLElBQ1IsQ0FLQUMsT0FDQ1QsRUFBQVUsYUFBYUMsNEJBQTRCTixLQUFLTyxJQUFJQyxLQUFLQyxJQUFJLElBQUksdUJBQXVCLEVBQ3RGVCxLQUFLRixPQUFPWSxLQUFLVixLQUFLTyxJQUFJQyxLQUFLQyxJQUFJLElBQUksQ0FBQyxDQUN6QyxDQUtBRSxPQUNDaEIsRUFBQVUsYUFBYU8sY0FBYSxDQUMzQixDLENBQ0FDLEVBQUFqQixXQUFBQSxDLCtEQzVCRGtCLE9BQUFDLGVBQUFGLEVBQUEsYUFBQSxDQUNBRyxNQUFBLENBQUEsQ0FDQSxDQUFBLEMsaUlDSkEsSUFBQUMsRUFBQXpCLEVBQUEsMkJBQUEsRUFFQTBCLEVBQUExQixFQUFBLDJCQUFBLEVBR0FHLEVBQUFILEVBQUEsOENBQUEsRUFDQTJCLEVBQUEzQixFQUFBLHlCQUFBLEVBQ0E0QixFQUFBNUIsRUFBQSxnQkFBQSxRQUNhUyxVQUFxQmlCLEVBQUFHLGNBQ2pDQyxPQUVBQyxZQUNDLE9BQU92QixLQUFLc0IsTUFDYixDQUVBRSxPQUNBQyxZQUNDLE9BQU96QixLQUFLd0IsTUFDYixDQUVBRSxJQUNBQyxTQUNDLE9BQU8zQixLQUFLMEIsR0FDYixDQUVBRSxZQUNBQyxpQkFDQyxPQUFPN0IsS0FBSzRCLFdBQ2IsQ0FDQUUs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