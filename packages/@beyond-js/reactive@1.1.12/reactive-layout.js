System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/base","react@18.2.0"],function(n,e){"use strict";var t,r,o,s,i,l,a;return n("Controller",void 0),{setters:[function(e){t=e},function(e){r=e},function(e){o=e},function(e){s=e},function(e){i=e}],execute:function(){a=r.Bundle,(l=new a({module:{vspecifier:"@beyond-js/reactive@1.1.12/reactive-layout"},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",o],["@beyond-js/react-18-widgets/base",s],["react",i]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"reactive-layout",vspecifier:"@beyond-js/reactive@1.1.12/reactive-layout",is:"layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@beyond-js/reactive@1.1.12/reactive-layout"),(a=new Map).set("./controller",{hash:2328700451,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/base"),n=e("./views");class o extends r.ReactWidgetController{get Widget(){return n.Layout}}t.Controller=o}}),a.set("./views/index",{hash:1901748492,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Layout=function(){return r.createElement("main",null,r.createElement("beyond-layout-children",null))};var r=e("react")}}),l.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"}],l.exports.process=function({require:e,prop:t,value:r}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:r)},n("__beyond_pkg",l),n("hmr",new function(){this.on=(e,t)=>l.hmr.on(e,t),this.off=(e,t)=>l.hmr.off(e,t)}),l.initialise(a)}}});