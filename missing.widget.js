System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/base","react@18.2.0","@aimpact/chat@1.0.2/shared/components","@aimpact/chat@1.0.2/shared/hooks","@aimpact/ailearn-app@0.1.0-dev.09/components/ui","pragmate-ui@1.0.0-beta.1/image"],function(a,e){var t,n,r,i,o,s,l,c,d,u,m;return a({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){n=e},function(e){r=e},function(e){i=e},function(e){o=e},function(e){s=e},function(e){l=e},function(e){c=e},function(e){d=e}],execute:function(){m=n.Bundle,(u=new m({module:{vspecifier:"@aimpact/ailearn-app@0.1.0-dev.09/missing",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/base",i],["react",o],["@aimpact/chat/shared/components",s],["@aimpact/chat/shared/hooks",l],["@aimpact/ailearn-app/components/ui",c],["pragmate-ui/image",d]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-missing-control",vspecifier:"@aimpact/ailearn-app@0.1.0-dev.09/missing.widget"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.0-dev.09/missing.widget"),(m=new Map).set("./controller",{hash:253853004,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var n=e("@beyond-js/react-18-widgets/base"),a=e("./views");class r extends n.ReactWidgetController{get Widget(){return a.View}}t.Controller=r}}),m.set("./views/index",{hash:932538500,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({}){var e,[t,n]=(0,i.useTexts)(o.module.specifier);return t?({title:t,conclusion:n,description:e}=n,a.default.createElement(s.PageContainer,{className:"container__error place-center"},a.default.createElement("div",{className:"content"},a.default.createElement("header",null,a.default.createElement("h1",null,"404"),a.default.createElement("h3",null,t)),a.default.createElement("p",null,e),a.default.createElement("p",null,n)),a.default.createElement(l.Image,{src:"/assets/errors/404.png",alt:"404 in RVD.AI",className:"img-error__banner"}))):a.default.createElement(r.PreloadScreen,null)};var a=e("react"),r=e("@aimpact/chat/shared/components"),i=e("@aimpact/chat/shared/hooks"),o=e("beyond_context"),s=e("@aimpact/ailearn-app/components/ui"),l=e("pragmate-ui/image")}}),u.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],u.exports.process=function({require:e,prop:t,value:n}){!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:n),!e&&"View"!==t||a("View",e?e("./views/index").View:n)},a("__beyond_pkg",u),a("hmr",new function(){this.on=(e,t)=>u.hmr.on(e,t),this.off=(e,t)=>u.hmr.off(e,t)}),u.initialise(m)}}});