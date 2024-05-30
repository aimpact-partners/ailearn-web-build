System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.1.12/model","@aimpact/ailearn-sdk@1.0.0/core","react@18.2.0","framer-motion@10.18.0","@aimpact/ailearn-app@0.0.45/components/ui","pragmate-ui@0.1.1/image","pragmate-ui@0.1.1/form","pragmate-ui@0.1.1/toast","pragmate-ui@0.1.1/code-verification","pragmate-ui@0.1.1/components","@beyond-js/react-18-widgets@1.1.2/hooks","@beyond-js/kernel@0.1.9/routing","@aimpact/ailearn-app@0.0.45/components/navbar-header.code","@aimpact/ailearn-app@0.0.45/config","@aimpact/chat@1.0.1/shared/hooks"],function(n,e){"use strict";var t,a,r,o,i,s,c,d,l,u,m,p,g,f,v,h,y,w,b,j,x;return n({Controller:void 0,TokenForm:void 0,Header:void 0,View:void 0,Ready:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){o=e},function(e){i=e},function(e){s=e},function(e){c=e},function(e){d=e},function(e){l=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){g=e},function(e){f=e},function(e){v=e},function(e){h=e},function(e){y=e},function(e){w=e},function(e){b=e}],execute:function(){x=a.Bundle,(j=new x({module:{vspecifier:"@aimpact/ailearn-app@0.0.45/organizations/join",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",o],["@beyond-js/reactive/model",i],["@aimpact/ailearn-sdk/core",s],["react",c],["framer-motion",d],["@aimpact/ailearn-app/components/ui",l],["pragmate-ui/image",u],["pragmate-ui/form",m],["pragmate-ui/toast",p],["pragmate-ui/code-verification",g],["pragmate-ui/components",f],["@beyond-js/react-18-widgets/hooks",v],["@beyond-js/kernel/routing",h],["@aimpact/ailearn-app/components/navbar-header.code",y],["@aimpact/ailearn-app/config",w],["@aimpact/chat/shared/hooks",b]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-organization-join",vspecifier:"@aimpact/ailearn-app@0.0.45/organizations/join.widget",is:"page",route:"/organizations/join",layout:"general-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.45/organizations/join.widget"),(x=new Map).set("./controller",{hash:198384358,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./views"),r=e("./store");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager,this.#store}get Widget(){return n.View}show(){this.#store.load(this.uri.qs.get("code"))}hide(){this.#store.clear()}}t.Controller=o}}),x.set("./store",{hash:2320737067,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),n=e("@aimpact/ailearn-sdk/core");class r extends a.ReactiveModel{#model;get TOTAL_CODES(){return 7}get model(){return this.#model}#code;get code(){return this.#code}get validCode(){return this.#code&&this.#code.length===this.TOTAL_CODES}constructor(){super(),this.#model=new n.Organization({})}load(e){e&&(this.#code=e),this.ready=!0}clear(){this.ready=!1}}t.StoreManager=r}}),x.set("./views/animated-div",{hash:2258000075,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedDiv=function({children:e,cls:t}={children:null,cls:""}){return a.createElement(n.motion.div,{className:t,initial:{opacity:0},animate:{opacity:1,transition:{duration:.3,delay:.3,width:"auto"},y:0},exit:{transition:{duration:.3},opacity:0}},e)};var a=e("react"),n=e("framer-motion")}}),x.set("./views/context",{hash:1181222785,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useJoinContext=t.JoinContext=void 0;var a=e("react");const n=t.JoinContext=a.default.createContext({});t.useJoinContext=()=>a.default.useContext(n)}}),x.set("./views/form",{hash:1619870297,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.TokenForm=function(){const{texts:a,store:e,setJoined:n}=(0,h.useJoinContext)(),[r,t]=l.useState(e.code??""),[o,i]=l.useState(""),[s,c]=l.useState("error"),d=7!==r.length;return l.createElement("div",{className:"token-page__container"},l.createElement(p.Form,{onSubmit:async()=>{try{var t=await e.model.join({code:r});"PENDING"===t.data.status?(g.toast.success(a.messages.pending),n(!0)):(g.toast.success(a.messages.success),y.routing.pushState("/organizations/view/"+t.data.organization.id))}catch(e){console.error(e);t=["ALREADY_WAITING","ALREADY_MEMBER"].includes(e?.message)?"warning":"danger";c(t),i(a.errors[e?.message?.toString()]??a.errors.ERROR_PUBLISHING)}},className:"token-form__container"},l.createElement("header",null,l.createElement(m.Image,{className:"animate glow delay-1",src:"/assets/RVD.AI.Branding.png",alt:"RVD.AI"}),l.createElement("h1",{className:"animate glow delay-2"},a.title),l.createElement("span",{className:"p1"},a.form.subtitle)),l.createElement(u.ErrorRenderer,{error:o,variant:s}),l.createElement(f.InputCode,{length:e.TOTAL_CODES,value:r,name:"name",type:"text",onCodeFull:e=>{t(e),i("")},required:!0}),l.createElement(v.Button,{disabled:d,variant:"primary",type:"submit"},a.action.join)),l.createElement("div",{className:"token-info__container flex-container flex-column text-center"},l.createElement("p",null,a.info.help)))};var l=e("react"),u=e("@aimpact/ailearn-app/components/ui"),m=e("pragmate-ui/image"),p=e("pragmate-ui/form"),g=e("pragmate-ui/toast"),f=e("pragmate-ui/code-verification"),v=e("pragmate-ui/components"),h=e("./context"),y=e("@beyond-js/kernel/routing")}}),x.set("./views/header",{hash:2045850208,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){var e=(0,r.useJoinContext)()["texts"];return a.createElement("section",null,a.createElement(n.NavbarHeader,{breadcrumb:[[e.breadcrumb.organizations,"/organizations/list"],[e.breadcrumb.join,""]]}))};var a=e("react"),n=e("@aimpact/ailearn-app/components/navbar-header.code"),r=e("./context")}}),x.set("./views/index",{hash:1368011841,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=d.useState(e.ready),[n,r]=((0,g.useBinder)([e],()=>a(e.ready)),(0,p.useTexts)(m.module.specifier)),[o,i]=d.useState(!1);if(!t||!n)return null;var s=o?v.Ready:f.TokenForm,c={texts:r,joined:o,setJoined:i,store:e};return d.createElement(u.JoinContext.Provider,{value:c},d.createElement(l.Header,null),d.createElement(s,null))};var d=e("react"),l=e("./header"),u=e("./context"),m=e("beyond_context"),p=e("@aimpact/chat/shared/hooks"),g=e("@beyond-js/react-18-widgets/hooks"),f=e("./form"),v=e("./ready")}}),x.set("./views/ready",{hash:2535388268,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Ready=function({}){var e=(0,r.useJoinContext)()["texts"],{title:e,description:t}=e.ready;return a.createElement(n.PageContainer,null,a.createElement(o.AnimatedDiv,{cls:"ready-container"},a.createElement("h3",null,e),a.createElement("span",null,t)))};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),r=e("./context"),o=e("./animated-div")}}),j.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/form",from:"TokenForm",name:"TokenForm"},{im:"./views/header",from:"Header",name:"Header"},{im:"./views/index",from:"View",name:"View"},{im:"./views/ready",from:"Ready",name:"Ready"}],j.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"TokenForm"!==t||n("TokenForm",e?e("./views/form").TokenForm:a),!e&&"Header"!==t||n("Header",e?e("./views/header").Header:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a),!e&&"Ready"!==t||n("Ready",e?e("./views/ready").Ready:a)},n("__beyond_pkg",j),n("hmr",new function(){this.on=(e,t)=>j.hmr.on(e,t),this.off=(e,t)=>j.hmr.off(e,t)}),j.initialise(x)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWFkeS50c3giXSwibmFtZXMiOlsiX3BhZ2UiLCJyZXF1aXJlIiwiX3ZpZXdzIiwiX3N0b3JlIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCIjc3RvcmUiLCJjcmVhdGVTdG9yZSIsInRoaXMiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCIjbW9kZWwiLCJUT1RBTF9DT0RFUyIsIm1vZGVsIiwiI2NvZGUiLCJjb2RlIiwidmFsaWRDb2RlIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJzdXBlciIsIk9yZ2FuaXphdGlvbiIsInJlYWR5IiwiY2hpbGRyZW4iLCJjbHMiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJfZnJhbWVyTW90aW9uIiwibW90aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ3aWR0aCIsInkiLCJleGl0IiwiX3JlYWN0IiwiSm9pbkNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUpvaW5Db250ZXh0IiwidXNlQ29udGV4dCIsInRleHRzIiwic3RvcmUiLCJzZXRKb2luZWQiLCJfY29udGV4dCIsInRva2VuIiwic2V0VG9rZW4iLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJzdHlsZUFsZXJ0Iiwic2V0U3R5bGVBbGVydCIsImRpc2FibGVkIiwiX2Zvcm0iLCJGb3JtIiwib25TdWJtaXQiLCJhc3luYyIsInJlc3BvbnNlIiwiYXdhaXQiLCJqb2luIiwiZGF0YSIsInN0YXR1cyIsIl90b2FzdCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwicGVuZGluZyIsIl9yb3V0aW5nIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm9yZ2FuaXphdGlvbiIsImlkIiwiZSIsImNvbnNvbGUiLCJzdHlsZSIsImluY2x1ZGVzIiwibWVzc2FnZSIsImVycm9ycyIsInRvU3RyaW5nIiwiRVJST1JfUFVCTElTSElORyIsIl9pbWFnZSIsIkltYWdlIiwic3JjIiwiYWx0IiwidGl0bGUiLCJmb3JtIiwic3VidGl0bGUiLCJfdWkiLCJFcnJvclJlbmRlcmVyIiwidmFyaWFudCIsIl9jb2RlVmVyaWZpY2F0aW9uIiwiSW5wdXRDb2RlIiwidmFsdWUiLCJuYW1lIiwidHlwZSIsIm9uQ29kZUZ1bGwiLCJyZXF1aXJlZCIsIl9jb21wb25lbnRzIiwiQnV0dG9uIiwiYWN0aW9uIiwiaW5mbyIsImhlbHAiLCJfbmF2YmFySGVhZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIm9yZ2FuaXphdGlvbnMiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJfaG9va3MyIiwidXNlQmluZGVyIiwiX2hvb2tzIiwidXNlVGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJqb2luZWQiLCJDb250cm9sIiwiX3JlYWR5IiwiUmVhZHkiLCJUb2tlbkZvcm0iLCJQcm92aWRlciIsIl9oZWFkZXIiLCJIZWFkZXIiLCJkZXNjcmlwdGlvbiIsIlBhZ2VDb250YWluZXIiLCJfYW5pbWF0ZWREaXYiLCJBbmltYXRlZERpdiJdLCJtYXBwaW5ncyI6ImcxRUFBQSxJQUFBQSxFQUFBQyxFQUFBLGtDQUFBLEVBQ0FDLEVBQUFELEVBQUEsU0FBQSxFQUNBRSxFQUFBRixFQUFBLFNBQUEsUUFHTUcsVUFBbUJKLEVBQUFLLDBCQUN4QkMsT0FDQUMsY0FFQyxPQURBQyxLQUFLRixPQUFTLElBQUlILEVBQUFNLGFBQ1hELEtBQUtGLE1BQ2IsQ0FDQUksYUFDQyxPQUFPUixFQUFBUyxJQUNSLENBRUFDLE9BQ0NKLEtBQUtGLE9BQU9PLEtBQUtMLEtBQUtNLElBQUlDLEdBQUdDLElBQUksTUFBTSxDQUFDLENBQ3pDLENBQ0FDLE9BQ0NULEtBQUtGLE9BQU9ZLE1BQUssQ0FDbEIsQyxDQUNBQyxFQUFBZixXQUFBQSxDLGtJQ3JCRCxJQUFBZ0IsRUFBQW5CLEVBQUEsMkJBQUEsRUFDQW9CLEVBQUFwQixFQUFBLDJCQUFBLFFBRWFRLFVBQXFCVyxFQUFBRSxjQUNqQ0MsT0FFQUMsa0JBQ0MsT0FBTyxDQUNSLENBQ0FDLFlBQ0MsT0FBT2pCLEtBQUtlLE1BQ2IsQ0FFQUcsTUFDQUMsV0FDQyxPQUFPbkIsS0FBS2tCLEtBQ2IsQ0FFQUUsZ0JBQ0MsT0FBT3BCLEtBQUtrQixPQUFTbEIsS0FBS2tCLE1BQU1HLFNBQVdyQixLQUFLZ0IsV0FDakQsQ0FFQU0sY0FDQ0MsTUFBSyxFQUNMdkIsS0FBS2UsT0FBUyxJQUFJRixFQUFBVyxhQUFhLEVBQUUsQ0FDbEMsQ0FFQW5CLEtBQUtjLEdBQ0FBLElBQ0huQixLQUFLa0IsTUFBUUMsR0FFZG5CLEtBQUt5QixNQUFRLENBQUEsQ0FDZCxDQUNBZixRQUNDVixLQUFLeUIsTUFBUSxDQUFBLENBQ2QsQyxDQUNBZCxFQUFBVixhQUFBQSxDLHVJQ2pDSyxTQUFzQixDQUFFeUIsU0FBQUEsRUFBVUMsSUFBQUEsQ0FBRyxFQUF5QixDQUFFRCxTQUFVLEtBQU1DLElBQUssRUFBRSxHQUM1RixPQUNDQyxFQUFBQyxjQUFDQyxFQUFBQyxPQUFPQyxJQUFHLENBQ1ZDLFVBQVdOLEVBQ1hPLFFBQVMsQ0FDUkMsUUFBUyxDLEVBRVZDLFFBQVMsQ0FDUkQsUUFBUyxFQUNURSxXQUFZLENBQ1hDLFNBQVUsR0FDVkMsTUFBTyxHQUNQQyxNQUFPLE0sRUFFUkMsRUFBRyxDLEVBRUpDLEtBQU0sQ0FDTEwsV0FBWSxDQUNYQyxTQUFVLEUsRUFFWEgsUUFBUyxDLENBQ1QsRUFFQVQsQ0FBUSxDQUdaLEVBN0JBLElBQUFFLEVBQUFuQyxFQUFBLE9BQUEsRUFDQXFDLEVBQUFyQyxFQUFBLGVBQUEsQywwSkNEQSxJQUFBa0QsRUFBQWxELEVBQUEsT0FBQSxFQVNPLE1BQU1tRCxFQUFXakMsRUFBQWlDLFlBQUdELEVBQUFFLFFBQU1DLGNBQTRCLEVBQWtCLEVBQ2JuQyxFQUFBb0MsZUFBcENBLElBQU1KLEVBQUFFLFFBQU1HLFdBQVdKLENBQVcsQyw2SENBL0MsV0FFaEIsS0FBTSxDQUFFSyxNQUFBQSxFQUFPQyxNQUFBQSxFQUFPQyxVQUFBQSxDQUFTLEdBQUssRUFBQUMsRUFBQUwsZ0JBQWMsRUFDNUMsQ0FBQ00sRUFBT0MsR0FBWTFCLEVBQU0yQixTQUFTTCxFQUFNL0IsTUFBUSxFQUFFLEVBQ25ELENBQUNxQyxFQUFPQyxHQUFZN0IsRUFBTTJCLFNBQVMsRUFBRSxFQUNyQyxDQUFDRyxFQUFZQyxHQUFpQi9CLEVBQU0yQixTQUFTLE9BQU8sRUFPcERLLEVBQTRCLElBQWpCUCxFQUFNaEMsT0FxQnZCLE9BQ0NPLEVBQUFDLGNBQUEsTUFBQSxDQUFLSSxVQUFVLHVCQUF1QixFQUNyQ0wsRUFBQUMsY0FBQ2dDLEVBQUFDLEtBQUksQ0FBQ0MsU0F0QlNDLFVBQ2hCLElBQ0MsSUFBTUMsRUFBV0MsTUFBTWhCLEVBQU1qQyxNQUFNa0QsS0FBSyxDQUFFaEQsS0FBTWtDLENBQUssQ0FBRSxFQUUxQixZQUF6QlksRUFBU0csS0FBS0MsUUFDakJDLEVBQUFDLE1BQU1DLFFBQVF2QixFQUFNd0IsU0FBU0MsT0FBTyxFQUNwQ3ZCLEVBQVUsQ0FBQSxDQUFJLElBSWZtQixFQUFBQyxNQUFNQyxRQUFRdkIsRUFBTXdCLFNBQVNELE9BQU8sRUFDcENHLEVBQUFDLFFBQVFDLFVBQVUsdUJBQXVCWixFQUFTRyxLQUFLVSxhQUFhQyxFQUFJLEUsQ0FDdkUsTUFBT0MsR0FDUkMsUUFBUXpCLE1BQU13QixDQUFDLEVBQ1RFLEVBQVEsQ0FBQyxrQkFBbUIsa0JBQWtCQyxTQUFTSCxHQUFHSSxPQUFPLEVBQUksVUFBWSxTQUN2RnpCLEVBQWN1QixDQUFLLEVBQ25CekIsRUFBU1IsRUFBTW9DLE9BQU9MLEdBQUdJLFNBQVNFLFNBQVEsSUFBT3JDLEVBQU1vQyxPQUFPRSxnQkFBZ0IsQyxDQUVoRixFQUk0QnRELFVBQVUsdUJBQXVCLEVBQzFETCxFQUFBQyxjQUFBLFNBQUEsS0FDQ0QsRUFBQUMsY0FBQzJELEVBQUFDLE1BQUssQ0FBQ3hELFVBQVUsdUJBQXVCeUQsSUFBSSw4QkFBOEJDLElBQUksUUFBUSxDQUFBLEVBQ3RGL0QsRUFBQUMsY0FBQSxLQUFBLENBQUlJLFVBQVUsc0JBQXNCLEVBQUVnQixFQUFNMkMsS0FBSyxFQUNqRGhFLEVBQUFDLGNBQUEsT0FBQSxDQUFNSSxVQUFVLElBQUksRUFBRWdCLEVBQU00QyxLQUFLQyxRQUFRLENBQVEsRUFHbERsRSxFQUFBQyxjQUFDa0UsRUFBQUMsY0FBYSxDQUFDeEMsTUFBT0EsRUFBT3lDLFFBQVN2QyxDQUFVLENBQUEsRUFDaEQ5QixFQUFBQyxjQUFDcUUsRUFBQUMsVUFBUyxDQUNUOUUsT0FBUTZCLEVBQU1sQyxZQUNkb0YsTUFBTy9DLEVBQ1BnRCxLQUFLLE9BQ0xDLEtBQUssT0FDTEMsV0F6Q2lCcEYsSUFDcEJtQyxFQUFTbkMsQ0FBSSxFQUNic0MsRUFBUyxFQUFFLENBQ1osRUF1Q0krQyxTQUFRLENBQUEsQ0FBQSxDQUFBLEVBRVQ1RSxFQUFBQyxjQUFDNEUsRUFBQUMsT0FBTSxDQUFDOUMsU0FBVUEsRUFBVXFDLFFBQVEsVUFBVUssS0FBSyxRQUFRLEVBQ3pEckQsRUFBTTBELE9BQU94QyxJQUFJLENBQ1YsRUFFVnZDLEVBQUFDLGNBQUEsTUFBQSxDQUFLSSxVQUFVLDhEQUE4RCxFQUM1RUwsRUFBQUMsY0FBQSxJQUFBLEtBQUlvQixFQUFNMkQsS0FBS0MsSUFBSSxDQUFLLENBQ25CLENBR1QsRUF0RUEsSUFBQWpGLEVBQUFuQyxFQUFBLE9BQUEsRUFDQXNHLEVBQUF0RyxFQUFBLG9DQUFBLEVBQ0ErRixFQUFBL0YsRUFBQSxtQkFBQSxFQUNBb0UsRUFBQXBFLEVBQUEsa0JBQUEsRUFDQTZFLEVBQUE3RSxFQUFBLG1CQUFBLEVBQ0F5RyxFQUFBekcsRUFBQSwrQkFBQSxFQUNBZ0gsRUFBQWhILEVBQUEsd0JBQUEsRUFFQTJELEVBQUEzRCxFQUFBLFdBQUEsRUFDQWtGLEVBQUFsRixFQUFBLDJCQUFBLEMsNEhDSGlCLFdBQ2hCLElBQVF3RCxHQUFVLEVBQUFHLEVBQUFMLGdCQUFjLEVBQXhCRSxTQUNSLE9BQ0NyQixFQUFBQyxjQUFBLFVBQUEsS0FDQ0QsRUFBQUMsY0FBQ2lGLEVBQUFDLGFBQVksQ0FDWkMsV0FBWSxDQUNYLENBQUMvRCxFQUFNK0QsV0FBV0MsY0FBZSx1QkFDakMsQ0FBQ2hFLEVBQU0rRCxXQUFXN0MsS0FBTSxJQUN4QixDQUFBLENBQ2MsQ0FHbkIsRUFsQkEsSUFBQXZDLEVBQUFuQyxFQUFBLE9BQUEsRUFFQXFILEVBQUFySCxFQUFBLG9EQUFBLEVBRUEyRCxFQUFBM0QsRUFBQSxXQUFBLEMseUhDUWlCLFNBQ0gsQ0FBRXlELE1BQUFBLENBQUssR0FDcEIsS0FBTSxDQUFDekIsRUFBT3lGLEdBQVl0RixFQUFNMkIsU0FBU0wsRUFBTXpCLEtBQUssRUFFOUMsQ0FBQzBGLEVBQVlsRSxLQURuQixFQUFBbUUsRUFBQUMsV0FBVSxDQUFDbkUsR0FBUSxJQUFNZ0UsRUFBU2hFLEVBQU16QixLQUFLLENBQUMsR0FDbEIsRUFBQTZGLEVBQUFDLFVBQVNDLEVBQUFDLE9BQU9DLFNBQVMsR0FDL0MsQ0FBQ0MsRUFBUXhFLEdBQWF2QixFQUFNMkIsU0FBUyxDQUFBLENBQUssRUFFaEQsR0FBSSxDQUFDOUIsR0FBUyxDQUFDMEYsRUFBWSxPQUFPLEtBRWxDLElBQU1TLEVBQVVELEVBQVNFLEVBQUFDLE1BQVFqRSxFQUFBa0UsVUFDM0IzQixFQUFRLENBQ2JuRCxNQUFBQSxFQUNBMEUsT0FBQUEsRUFDQXhFLFVBQUFBLEVBQ0FELE1BQUFBLEMsRUFFRCxPQUNDdEIsRUFBQUMsY0FBQ3VCLEVBQUFSLFlBQVlvRixTQUFRLENBQUM1QixNQUFPQSxDQUFLLEVBQ2pDeEUsRUFBQUMsY0FBQ29HLEVBQUFDLE9BQU0sSUFBQSxFQUNQdEcsRUFBQUMsY0FBQytGLEVBQU8sSUFBQSxDQUFHLENBR2QsRUFsQ0EsSUFBQWhHLEVBQUFuQyxFQUFBLE9BQUEsRUFFQXdJLEVBQUF4SSxFQUFBLFVBQUEsRUFDQTJELEVBQUEzRCxFQUFBLFdBQUEsRUFFQStILEVBQUEvSCxFQUFBLGdCQUFBLEVBQ0E2SCxFQUFBN0gsRUFBQSw0QkFBQSxFQUdBMkgsRUFBQTNILEVBQUEsbUNBQUEsRUFDQW9FLEVBQUFwRSxFQUFBLFFBQUEsRUFDQW9JLEVBQUFwSSxFQUFBLFNBQUEsQywwSENMaUIsU0FDRixJQUNkLElBQVF3RCxHQUFVLEVBQUFHLEVBQUFMLGdCQUFjLEVBQXhCRSxTQUNGLENBQUUyQyxNQUFBQSxFQUFpQnVDLFlBQUFBLENBQVcsRUFBS2xGLEVBQU14QixNQUMvQyxPQUNDRyxFQUFBQyxjQUFDa0UsRUFBQXFDLGNBQWEsS0FDYnhHLEVBQUFDLGNBQUN3RyxFQUFBQyxZQUFXLENBQUMzRyxJQUFJLGlCQUFpQixFQUNqQ0MsRUFBQUMsY0FBQSxLQUFBLEtBQUsrRCxDQUFLLEVBQ1ZoRSxFQUFBQyxjQUFBLE9BQUEsS0FBT3NHLENBQVcsQ0FBUSxDQUNiLENBR2pCLEVBbEJBLElBQUF2RyxFQUFBbkMsRUFBQSxPQUFBLEVBRUFzRyxFQUFBdEcsRUFBQSxvQ0FBQSxFQUNBMkQsRUFBQTNELEVBQUEsV0FBQSxFQUNBNEksRUFBQTVJLEVBQUEsZ0JBQUEifQ==