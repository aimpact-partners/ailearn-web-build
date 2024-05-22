System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.1.12/model","@aimpact/chat-sdk@1.0.0/core","@aimpact/chat-sdk@1.0.0/session","react@18.2.0","pragmate-ui@0.1.1/link","pragmate-ui@0.1.1/components","pragmate-ui@0.1.1/icons","@aimpact/chat@1.0.1/shared/icons","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.1/shared/components","@beyond-js/kernel@0.1.9/routing","@aimpact/chat@1.0.1/shared/hooks"],function(o,e){"use strict";var t,a,s,r,n,c,i,l,d,u,m,h,p,g,f,y,w,v;return o({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){s=e},function(e){r=e},function(e){n=e},function(e){c=e},function(e){i=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){h=e},function(e){p=e},function(e){g=e},function(e){f=e},function(e){y=e}],execute:function(){v=a.Bundle,(w=new v({module:{vspecifier:"@aimpact/chat@1.0.1/documents/access",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",s],["@beyond-js/react-18-widgets/page",r],["@beyond-js/reactive/model",n],["@aimpact/chat-sdk/core",c],["@aimpact/chat-sdk/session",i],["react",l],["pragmate-ui/link",d],["pragmate-ui/components",u],["pragmate-ui/icons",m],["@aimpact/chat/shared/icons",h],["@beyond-js/react-18-widgets/hooks",p],["@aimpact/chat/shared/components",g],["@beyond-js/kernel/routing",f],["@aimpact/chat/shared/hooks",y]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"chat-documents-access",vspecifier:"@aimpact/chat@1.0.1/documents/access.widget",is:"page",route:"/documents/access",layout:"auth-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/chat@1.0.1/documents/access.widget"),(v=new Map).set("./controller",{hash:518706050,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),o=e("./views"),s=e("./store");class r extends a.PageReactWidgetController{#store;createStore(){return this.#store=new s.StoreManager,this.#store}get Widget(){return o.View}show(){this.#store.load(this.uri.qs.get("id"))}}t.Controller=r}}),v.set("./store",{hash:824522972,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),s=e("@aimpact/chat-sdk/core"),r=e("@aimpact/chat-sdk/session");class o extends a.ReactiveModel{#model;get model(){return this.#model}#found;get found(){return this.#found}load=async e=>{this.#model&&this.#model.id!==e&&(this.#model=void 0),this.#model=new s.KnowledgeBox,this.#model.on("change",this.triggerEvent);e=await this.#model.load({id:e});this.#found=!!e.data,this.ready=!0};createChat=async(e,t)=>{var a=new s.Chat,o=r.sessionWrapper.userId;return await a.publish({userId:o,knowledgeBoxId:e,name:"[SAVED] "+t}),{status:!0,chat:a}};saveSharedFolder=async(t,e)=>{try{var a=JSON.parse(localStorage.getItem("sharedFolders"))||[];a.find(e=>e.id===t)||(a.push({id:t,path:"[SAVED] "+e}),localStorage.setItem("sharedFolders",JSON.stringify(a)))}catch(e){console.error(e)}}}t.StoreManager=o}}),v.set("./views/empty-view",{hash:927283083,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyView=void 0;var a=e("react"),o=e("pragmate-ui/link"),s=e("pragmate-ui/components"),r=e("pragmate-ui/icons"),n=e("@aimpact/chat/shared/icons");t.EmptyView=()=>a.default.createElement("div",{className:"access__folder"},a.default.createElement("img",{alt:"Shared folder",src:"/assets/shared-folder.png"}),a.default.createElement("span",{className:"access-details"},a.default.createElement(r.Icon,{icon:n.ICONS["aip-chat-logo"],className:"acccess__ailogo"}),a.default.createElement("h1",null,"Welcome to AIM Chat"),a.default.createElement("p",null,a.default.createElement("strong",null,"No pudimos encontrar la carpeta compartida!"),a.default.createElement("br",null),"Revisa que el link se haya copiado correctamente."),a.default.createElement(o.Link,{href:"/documents"},a.default.createElement(s.Button,{icon:"folder",label:"Ir a documentos"}))))}}),v.set("./views/index",{hash:1330162277,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:a}){const[e,t]=d.default.useState(a.ready),[o,s]=d.default.useState(!1),[,r]=d.default.useState(!1),[n,c]=(0,v.useTexts)(b.module.specifier);if((0,u.useBinder)([a],()=>t(a.ready)),!e||!n)return d.default.createElement(p.PreloadScreen,null);if(!a.found)return d.default.createElement(g.EmptyView,null);const i=a["model"],l=async()=>{try{var e,t=await a.createChat(i.id,i.path);await a.saveSharedFolder(i.id,i.path),t.status?(e=t.chat["id"],w.routing.pushState("/chat/"+e)):console.error(t.message)}catch(e){console.error(e.message)}};return d.default.createElement("div",{className:"access__folder"},d.default.createElement("img",{alt:"Shared folder",src:"/assets/shared-folder.png"}),d.default.createElement("span",{className:"access-details"},d.default.createElement(h.Icon,{icon:f.ICONS["aip-chat-logo"],className:"acccess__ailogo"}),d.default.createElement("h1",null,c.welcome),d.default.createElement("p",null,d.default.createElement("strong",null,"Knowledge Box ",i.path.toUpperCase()," has been shared with you."),d.default.createElement("br",null),c.save),y.sessionWrapper.logged?d.default.createElement(m.Button,{variant:"primary",onClick:l,icon:"save"},c.action):d.default.createElement(m.Button,{icon:"google",onClick:async e=>{try{s(!0);var t,a=await y.sessionWrapper.signInWithGoogle();a.status?l():(t=a["error"],"POPUP_CLOSED_BY_USER"===t?s(!1):r("Error trying to login with Google"))}catch(e){console.error(e.message)}},loading:o,label:"Google Sign In"})))};var d=e("react"),u=e("@beyond-js/react-18-widgets/hooks"),m=e("pragmate-ui/components"),h=e("pragmate-ui/icons"),p=e("@aimpact/chat/shared/components"),g=e("./empty-view"),f=e("@aimpact/chat/shared/icons"),y=e("@aimpact/chat-sdk/session"),w=e("@beyond-js/kernel/routing"),v=e("@aimpact/chat/shared/hooks"),b=e("beyond_context")}}),w.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],w.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||o("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||o("View",e?e("./views/index").View:a)},o("__beyond_pkg",w),o("hmr",new function(){this.on=(e,t)=>w.hmr.on(e,t),this.off=(e,t)=>w.hmr.off(e,t)}),w.initialise(v)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2VtcHR5LXZpZXcudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIiNzdG9yZSIsImNyZWF0ZVN0b3JlIiwidGhpcyIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInFzIiwiZ2V0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwiI21vZGVsIiwibW9kZWwiLCIjZm91bmQiLCJmb3VuZCIsImlkIiwidW5kZWZpbmVkIiwiS25vd2xlZGdlQm94Iiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJyZXNwb25zZSIsImF3YWl0IiwiZGF0YSIsInJlYWR5IiwiY3JlYXRlQ2hhdCIsImFzeW5jIiwia2JJZCIsIm5hbWUiLCJjaGF0IiwiQ2hhdCIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwicHVibGlzaCIsImtub3dsZWRnZUJveElkIiwic3RhdHVzIiwic2F2ZVNoYXJlZEZvbGRlciIsInNoYXJlZEZvbGRlcnMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmluZCIsImZvbGRlciIsInB1c2giLCJwYXRoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImVycm9yIiwiY29uc29sZSIsIl9yZWFjdCIsIl9saW5rIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMiLCJfaWNvbnMyIiwiRW1wdHlWaWV3IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJJY29uIiwiaWNvbiIsIklDT05TIiwiTGluayIsImhyZWYiLCJCdXR0b24iLCJsYWJlbCIsInN0b3JlIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImlzRmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwidGV4dHNSZWFkeSIsInRleHRzIiwiX2hvb2tzMiIsInVzZVRleHRzIiwiX2JleW9uZF9jb250ZXh0IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX2hvb2tzIiwidXNlQmluZGVyIiwiX2NvbXBvbmVudHMyIiwiUHJlbG9hZFNjcmVlbiIsIl9lbXB0eVZpZXciLCJoYW5kbGVDbGljayIsImNoYXRJZCIsIl9yb3V0aW5nIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm1lc3NhZ2UiLCJlIiwid2VsY29tZSIsInRvVXBwZXJDYXNlIiwic2F2ZSIsImxvZ2dlZCIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYWN0aW9uIiwiZXZlbnQiLCJzaWduSW5XaXRoR29vZ2xlIiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ink5REFBQSxJQUFBQSxFQUFBQyxFQUFBLGtDQUFBLEVBQ0FDLEVBQUFELEVBQUEsU0FBQSxFQUNBRSxFQUFBRixFQUFBLFNBQUEsUUFHTUcsVUFBbUJKLEVBQUFLLDBCQUN4QkMsT0FFQUMsY0FFQyxPQURBQyxLQUFLRixPQUFTLElBQUlILEVBQUFNLGFBQ1hELEtBQUtGLE1BQ2IsQ0FDQUksYUFDQyxPQUFPUixFQUFBUyxJQUNSLENBRUFDLE9BQ0NKLEtBQUtGLE9BQU9PLEtBQUtMLEtBQUtNLElBQUlDLEdBQUdDLElBQUksSUFBSSxDQUFDLENBQ3ZDLEMsQ0FDQUMsRUFBQWIsV0FBQUEsQyxpSUNuQkQsSUFBQWMsRUFBQWpCLEVBQUEsMkJBQUEsRUFDQWtCLEVBQUFsQixFQUFBLHdCQUFBLEVBQ0FtQixFQUFBbkIsRUFBQSwyQkFBQSxRQUdhUSxVQUFxQlMsRUFBQUcsY0FDakNDLE9BQ0FDLFlBQ0MsT0FBT2YsS0FBS2MsTUFDYixDQUVBRSxPQUNBQyxZQUNDLE9BQU9qQixLQUFLZ0IsTUFDYixDQUVBWCxLQUFjYSxNQUFBQSxJQUNUbEIsS0FBS2MsUUFBVWQsS0FBS2MsT0FBT0ksS0FBT0EsSUFDckNsQixLQUFL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