System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/base","react@18.2.0"],function(n,e){var t,r,o,s,a,i,l;return n("Controller",void 0),{setters:[function(e){t=e},function(e){r=e},function(e){o=e},function(e){s=e},function(e){a=e}],execute:function(){l=r.Bundle,(i=new l({module:{vspecifier:"@aimpact/ailearn-app@0.1.5-test.03/layout/empty"},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",o],["@beyond-js/react-18-widgets/base",s],["react",a]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-empty-layout",vspecifier:"@aimpact/ailearn-app@0.1.5-test.03/layout/empty",is:"layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.5-test.03/layout/empty"),(l=new Map).set("./controller",{hash:705071867,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/base"),n=e("./views");class o extends r.ReactWidgetController{get Widget(){return n.Layout}}t.Controller=o}}),l.set("./views/index",{hash:1618723681,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Layout=function(){var e=r.useRef();return r.createElement("main",{ref:e},r.createElement("beyond-layout-children",null))};var r=e("react")}}),i.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"}],i.exports.process=function({require:e,prop:t,value:r}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:r)},n("__beyond_pkg",i),n("hmr",new function(){this.on=(e,t)=>i.hmr.on(e,t),this.off=(e,t)=>i.hmr.off(e,t)}),i.initialise(l)}}});