System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/react-18-widgets@1.1.2/base","react@18.2.0","@aimpact/chat@1.0.2/shared/components","pragmate-ui@1.0.0-beta.1/image","@aimpact/chat@1.0.2/shared/hooks","@aimpact/ailearn-app@0.1.5-test.03/components/ui"],function(n,e){var t,a,r,o,i,l,c,s,d,p;return n({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){o=e},function(e){i=e},function(e){l=e},function(e){c=e},function(e){s=e}],execute:function(){p=a.Bundle,(d=new p({module:{vspecifier:"@aimpact/ailearn-app@0.1.5-test.03/not-allowed-page",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/react-18-widgets/base",r],["react",o],["@aimpact/chat/shared/components",i],["pragmate-ui/image",l],["@aimpact/chat/shared/hooks",c],["@aimpact/ailearn-app/components/ui",s]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-not-allowed-page",vspecifier:"@aimpact/ailearn-app@0.1.5-test.03/not-allowed-page.widget"}]),(p=new Map).set("./controller",{hash:253853004,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/base"),n=e("./views");class r extends a.ReactWidgetController{get Widget(){return n.View}}t.Controller=r}}),p.set("./views/index",{hash:1718283041,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({}){var e,[t,a]=(0,i.useTexts)(l.module.specifier);return t?({title:t,conclusion:a,description:e}=a,n.default.createElement(c.PageContainer,{className:"container__error place-center"},n.default.createElement("div",{className:"content"},n.default.createElement("h1",null,"403"),n.default.createElement("h3",null,t),n.default.createElement("p",null,e),n.default.createElement("p",null,a)),n.default.createElement(o.Image,{src:"/assets/errors/404.png",alt:"Page not allowed in RVD.AI"}))):n.default.createElement(r.PreloadScreen,null)};var n=e("react"),r=e("@aimpact/chat/shared/components"),o=e("pragmate-ui/image"),i=e("@aimpact/chat/shared/hooks"),l=e("beyond_context"),c=e("@aimpact/ailearn-app/components/ui")}}),d.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],d.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",d),n("hmr",new function(){this.on=(e,t)=>d.hmr.on(e,t),this.off=(e,t)=>d.hmr.off(e,t)}),d.initialise(p)}}});