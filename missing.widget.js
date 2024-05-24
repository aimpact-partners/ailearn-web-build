System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/base","react@18.2.0","@aimpact/chat@1.0.1/shared/components","pragmate-ui@0.1.1/image","pragmate-ui@0.1.1/alert","@aimpact/chat@1.0.1/shared/hooks","@aimpact/ailearn-app@0.0.40/components/ui"],function(a,e){"use strict";var t,n,r,i,o,s,l,c,u,d,p,m;return a({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){n=e},function(e){r=e},function(e){i=e},function(e){o=e},function(e){s=e},function(e){l=e},function(e){c=e},function(e){u=e},function(e){d=e}],execute:function(){m=n.Bundle,(p=new m({module:{vspecifier:"@aimpact/ailearn-app@0.0.40/missing",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/base",i],["react",o],["@aimpact/chat/shared/components",s],["pragmate-ui/image",l],["pragmate-ui/alert",c],["@aimpact/chat/shared/hooks",u],["@aimpact/ailearn-app/components/ui",d]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-missing-page",vspecifier:"@aimpact/ailearn-app@0.0.40/missing.widget",is:"page",route:"/not-found",layout:"general-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.40/missing.widget"),(m=new Map).set("./controller",{hash:253853004,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var n=e("@beyond-js/react-18-widgets/base"),a=e("./views");class r extends n.ReactWidgetController{get Widget(){return a.View}}t.Controller=r}}),m.set("./views/index",{hash:1210899119,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({}){var[e,t]=(0,o.useTexts)(s.module.specifier);if(!e)return a.default.createElement(r.PreloadScreen,null);var{title:e,conclusion:t,description:n}=t;return a.default.createElement(l.PageContainer,{className:"container__error place-center"},a.default.createElement("header",null,a.default.createElement("h1",null,"404"),a.default.createElement("h3",null,e)),a.default.createElement("div",{className:"content"},a.default.createElement("p",null,n),a.default.createElement("p",null,t)),a.default.createElement(i.Image,{className:"404-image",className:"Page not found in RVD.AI",src:"/assets/404.png",alt:"404"}))};var a=e("react"),r=e("@aimpact/chat/shared/components"),i=e("pragmate-ui/image"),o=e("@aimpact/chat/shared/hooks"),s=e("beyond_context"),l=e("@aimpact/ailearn-app/components/ui")}}),p.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],p.exports.process=function({require:e,prop:t,value:n}){!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:n),!e&&"View"!==t||a("View",e?e("./views/index").View:n)},a("__beyond_pkg",p),a("hmr",new function(){this.on=(e,t)=>p.hmr.on(e,t),this.off=(e,t)=>p.hmr.off(e,t)}),p.initialise(m)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJfaG9va3MiLCJ1c2VUZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIm1vZHVsZSIsInNwZWNpZmllciIsIl9yZWFjdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiX2NvbXBvbmVudHMiLCJQcmVsb2FkU2NyZWVuIiwidGl0bGUiLCJjb25jbHVzaW9uIiwiZGVzY3JpcHRpb24iLCJfdWkiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiX2ltYWdlIiwiSW1hZ2UiLCJzcmMiLCJhbHQiXSwibWFwcGluZ3MiOiI2OUNBQUEsSUFBQUEsRUFBQUMsRUFBQSxrQ0FBQSxFQUNBQyxFQUFBRCxFQUFBLFNBQUEsUUFHTUUsVUFBbUJILEVBQUFJLHNCQUN4QkMsYUFDQyxPQUFPSCxFQUFBSSxJQUNSLEMsQ0FDQUMsRUFBQUosV0FBQUEsQyx5SENBZ0IsU0FDSCxJQUNiLEdBQU0sQ0FBQ0ssRUFBWUMsSUFBeUMsRUFBQUMsRUFBQUMsVUFBU0MsRUFBQUMsT0FBT0MsU0FBUyxFQUVyRixHQUFJLENBQUNOLEVBQVksT0FBT08sRUFBQUMsUUFBQUMsY0FBQ0MsRUFBQUMsY0FBYSxJQUFBLEVBRXRDLEdBQU0sQ0FBRUMsTUFBQUEsRUFBT0MsV0FBQUEsRUFBWUMsWUFBQUEsQ0FBVyxFQUFLYixFQUUzQyxPQUNDTSxFQUFBQyxRQUFBQyxjQUFDTSxFQUFBQyxjQUFhLENBQUNDLFVBQVUsK0JBQStCLEVBQ3ZEVixFQUFBQyxRQUFBQyxjQUFBLFNBQUEsS0FDQ0YsRUFBQUMsUUFBQUMsY0FBQSxLQUFBLEtBQUEsS0FBQSxFQUNBRixFQUFBQyxRQUFBQyxjQUFBLEtBQUEsS0FBS0csQ0FBSyxDQUFNLEVBRWpCTCxFQUFBQyxRQUFBQyxjQUFBLE1BQUEsQ0FBS1EsVUFBVSxTQUFTLEVBQ3ZCVixFQUFBQyxRQUFBQyxjQUFBLElBQUEsS0FBSUssQ0FBVyxFQUNmUCxFQUFBQyxRQUFBQyxjQUFBLElBQUEsS0FBSUksQ0FBVSxDQUFLLEVBRXBCTixFQUFBQyxRQUFBQyxjQUFDUyxFQUFBQyxNQUFLLENBQUNGLFVBQVUsWUFBNENBLFVBQVUsMkJBQTFDRyxJQUFJLGtCQUFrQkMsSUFBSSxLQUEwQyxDQUFBLENBQUcsQ0FHdkcsRUE3QkEsSUFBQWQsRUFBQWQsRUFBQSxPQUFBLEVBQ0FpQixFQUFBakIsRUFBQSxpQ0FBQSxFQUNBeUIsRUFBQXpCLEVBQUEsbUJBQUEsRUFFQVMsRUFBQVQsRUFBQSw0QkFBQSxFQUNBVyxFQUFBWCxFQUFBLGdCQUFBLEVBQ0FzQixFQUFBdEIsRUFBQSxvQ0FBQSJ9