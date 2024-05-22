System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.1.12/model","react@18.2.0","@aimpact/chat@1.0.1/ui/manager","pragmate-ui@0.1.1/components","pragmate-ui@0.1.1/icons","@aimpact/chat@1.0.1/wrapper","@aimpact/chat@1.0.1/shared/components","@aimpact/chat@1.0.1/shared/icons"],function(n,e){"use strict";var t,a,r,o,c,i,s,l,d,u,p,m,h,f;return n("Controller",void 0),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){o=e},function(e){c=e},function(e){i=e},function(e){s=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){p=e},function(e){m=e}],execute:function(){f=a.Bundle,(h=new f({module:{vspecifier:"@aimpact/chat@1.0.1/chat-page",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",o],["@beyond-js/reactive/model",c],["react",i],["@aimpact/chat/ui/manager",s],["pragmate-ui/components",l],["pragmate-ui/icons",d],["@aimpact/chat/wrapper",u],["@aimpact/chat/shared/components",p],["@aimpact/chat/shared/icons",m]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"chat-wd-page",vspecifier:"@aimpact/chat@1.0.1/chat-page.widget",is:"page",route:"/chat/${id}",layout:"chat-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/chat@1.0.1/chat-page.widget"),(f=new Map).set("./controller",{hash:2861114136,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./views"),r=e("./store");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager,globalThis.store=this.#store,this.#store}get Widget(){return n.View}show(){}hide(){this.#store.clean()}}t.Controller=o}}),f.set("./store",{hash:853805903,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;class a extends e("@beyond-js/reactive/model").ReactiveModel{}t.StoreManager=a}}),f.set("./views/index",{hash:3049306109,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({uri:e}){var[e]=a.default.useState(e.vars.get("id"));return a.default.createElement(a.default.Fragment,null,a.default.createElement("aimpact-chat-control",{id:e}))};var a=e("react")}}),f.set("./views/not-found",{hash:4064363242,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatNotFound=function(){return c.AppWrapper.ready?a.default.createElement("div",{className:"not__found_chat "},a.default.createElement("img",{src:"/assets/not-found.png",alt:"Chat not found"}),a.default.createElement("span",{className:"not__found__details"},a.default.createElement(o.Icon,{icon:s.ICONS["aip-chat-logo"],className:"not-found__ailogo"}),a.default.createElement("h2",null,"Chat not found"),a.default.createElement("p",null,a.default.createElement("strong",null,"We couldn't find a chat associated with that ID.")," ",a.default.createElement("br",null),"Please enter URL correctly or create a new chat."),a.default.createElement(r.Button,{icon:"chat",onClick:function(){n.UIManager.modalOpened=!0},label:"Start New Chat"}))):a.default.createElement(i.PreloadScreen,null)};var a=e("react"),n=e("@aimpact/chat/ui/manager"),r=e("pragmate-ui/components"),o=e("pragmate-ui/icons"),c=e("@aimpact/chat/wrapper"),i=e("@aimpact/chat/shared/components"),s=e("@aimpact/chat/shared/icons")}}),h.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"}],h.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a)},n("__beyond_pkg",h),n("hmr",new function(){this.on=(e,t)=>h.hmr.on(e,t),this.off=(e,t)=>h.hmr.off(e,t)}),h.initialise(f)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4Il0sIm5hbWVzIjpbIl9wYWdlIiwicmVxdWlyZSIsIl92aWV3cyIsIl9zdG9yZSIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiI3N0b3JlIiwiY3JlYXRlU3RvcmUiLCJ0aGlzIiwiU3RvcmVNYW5hZ2VyIiwiZ2xvYmFsVGhpcyIsInN0b3JlIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsInVyaSIsImlkIiwiX3JlYWN0IiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidmFycyIsImdldCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl93cmFwcGVyIiwiQXBwV3JhcHBlciIsInJlYWR5IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiX2ljb25zIiwiSWNvbiIsImljb24iLCJfaWNvbnMyIiwiSUNPTlMiLCJfY29tcG9uZW50cyIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJfbWFuYWdlciIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwibGFiZWwiLCJfY29tcG9uZW50czIiLCJQcmVsb2FkU2NyZWVuIl0sIm1hcHBpbmdzIjoia2xEQUFBLElBQUFBLEVBQUFDLEVBQUEsa0NBQUEsRUFDQUMsRUFBQUQsRUFBQSxTQUFBLEVBQ0FFLEVBQUFGLEVBQUEsU0FBQSxRQVFNRyxVQUFtQkosRUFBQUssMEJBQ3hCQyxPQUVBQyxjQUdDLE9BRkFDLEtBQUtGLE9BQVMsSUFBSUgsRUFBQU0sYUFDbEJDLFdBQVdDLE1BQVFILEtBQUtGLE9BQ2pCRSxLQUFLRixNQUNiLENBQ0FNLGFBQ0MsT0FBT1YsRUFBQVcsSUFDUixDQUVBQyxRQUlBQyxPQUNDUCxLQUFLRixPQUFPVSxNQUFLLENBQ2xCLEMsQ0FDQUMsRUFBQWIsV0FBQUEsQyx1SUNyQllLLFVBUmJSLEVBQUEsMkJBQUEsRUFRa0NpQixlQUEwQ0QsRUFBQVIsYUFBQUEsQyx5SENFdEUsU0FBZSxDQUFTVSxJQUFBQSxDQUFHLEdBQ2hDLEdBQU0sQ0FBQ0MsR0FBTUMsRUFBQUMsUUFBTUMsU0FBU0osRUFBSUssS0FBS0MsSUFBSSxJQUFJLENBQUMsRUFFOUMsT0FDQ0osRUFBQUMsUUFBQUksY0FBQUwsRUFBQUMsUUFBQUssU0FBQSxLQUNDTixFQUFBQyxRQUFBSSxjQUFBLHVCQUFBLENBQXNCTixHQUFJQSxDQUFFLENBQUEsQ0FBSSxDQUduQyxFQWxCQSxJQUFBQyxFQUFBcEIsRUFBQSxPQUFBLEMscUlDUU0sV0FLTCxPQUFLMkIsRUFBQUMsV0FBV0MsTUFFZlQsRUFBQUMsUUFBQUksY0FBQSxNQUFBLENBQUtLLFVBQVUsa0JBQWtCLEVBQ2hDVixFQUFBQyxRQUFBSSxjQUFBLE1BQUEsQ0FBS00sSUFBSSx3QkFBd0JDLElBQUksZ0JBQWdCLENBQUEsRUFDckRaLEVBQUFDLFFBQUFJLGNBQUEsT0FBQSxDQUFNSyxVQUFVLHFCQUFxQixFQUNwQ1YsRUFBQUMsUUFBQUksY0FBQ1EsRUFBQUMsS0FBSSxDQUFDQyxLQUFNQyxFQUFBQyxNQUFNLGlCQUFrQlAsVUFBVSxtQkFBbUIsQ0FBQSxFQUNqRVYsRUFBQUMsUUFBQUksY0FBQSxLQUFBLEtBQUEsZ0JBQUEsRUFDQUwsRUFBQUMsUUFBQUksY0FBQSxJQUFBLEtBQ0NMLEVBQUFDLFFBQUFJLGNBQUEsU0FBQSxLQUFBLGtEQUFBLEUsSUFBa0VMLEVBQUFDLFFBQUFJLGNBQUEsS0FBQSxJQUFBLEUsb0RBR25FTCxFQUFBQyxRQUFBSSxjQUFDYSxFQUFBQyxPQUFNLENBQUNKLEtBQUssT0FBT0ssUUFmdkIsV0FDQ0MsRUFBQUMsVUFBVUMsWUFBYyxDQUFBLENBQ3pCLEVBYTRDQyxNQUFNLGdCQUFnQixDQUFBLENBQUcsQ0FDNUQsRUFacUJ4QixFQUFBQyxRQUFBSSxjQUFDb0IsRUFBQUMsY0FBYSxJQUFBLENBZTdDLEVBNUJBLElBQUExQixFQUFBcEIsRUFBQSxPQUFBLEVBQ0F5QyxFQUFBekMsRUFBQSwwQkFBQSxFQUNBc0MsRUFBQXRDLEVBQUEsd0JBQUEsRUFDQWlDLEVBQUFqQyxFQUFBLG1CQUFBLEVBQ0EyQixFQUFBM0IsRUFBQSx1QkFBQSxFQUNBNkMsRUFBQTdDLEVBQUEsaUNBQUEsRUFDQW9DLEVBQUFwQyxFQUFBLDRCQUFBIn0=