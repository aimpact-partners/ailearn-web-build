System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/react-18-widgets@1.1.2/base","react@18.2.0"],function(t,e){var r,n,i,o,s,a;return t({Controller:void 0,View:void 0}),{setters:[function(e){r=e},function(e){n=e},function(e){i=e},function(e){o=e}],execute:function(){a=n.Bundle,(s=new a({module:{vspecifier:"@aimpact/ailearn-app@0.1.0-dev.06/missing-page",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",r],["@beyond-js/react-18-widgets/base",i],["react",o]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-missing-page",vspecifier:"@aimpact/ailearn-app@0.1.0-dev.06/missing-page.widget",is:"page",route:"/error-404",layout:"main-layout"}]),(a=new Map).set("./controller",{hash:253853004,creator:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.Controller=void 0;var n=e("@beyond-js/react-18-widgets/base"),t=e("./views");class i extends n.ReactWidgetController{get Widget(){return t.View}}r.Controller=i}}),a.set("./views/index",{hash:2470885191,creator:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.View=function({}){return n.default.createElement("app-missing-control",null)};var n=e("react")}}),s.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],s.exports.process=function({require:e,prop:r,value:n}){!e&&"Controller"!==r||t("Controller",e?e("./controller").Controller:n),!e&&"View"!==r||t("View",e?e("./views/index").View:n)},t("__beyond_pkg",s),t("hmr",new function(){this.on=(e,r)=>s.hmr.on(e,r),this.off=(e,r)=>s.hmr.off(e,r)}),s.initialise(a)}}});