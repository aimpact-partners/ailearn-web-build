System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/react-18-widgets@1.1.2/base","react@18.2.0"],function(n,e){"use strict";var t,r,o,i,s,d;return n({Controller:void 0,Widget:void 0}),{setters:[function(e){t=e},function(e){r=e},function(e){o=e},function(e){i=e}],execute:function(){d=r.Bundle,(s=new d({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.29/test/web-component"},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/react-18-widgets/base",o],["react",i]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-test-web-component",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.29/test/web-component"}]),(d=new Map).set("./controller",{hash:765100817,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/base"),n=e("./store"),o=e("./views");class i extends r.ReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return o.Widget}show(){}hide(){}unmount(){console.log("end...."),super.unmount(),console.log("end....")}}t.Controller=i}}),d.set("./store",{hash:1793251939,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0,t.StoreManager=class{}}}),d.set("./views/index",{hash:2011496772,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Widget=function(){return r.createElement("div",null,"Im widget")};var r=e("react")}}),s.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"Widget",name:"Widget"}],s.exports.process=function({require:e,prop:t,value:r}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:r),!e&&"Widget"!==t||n("Widget",e?e("./views/index").Widget:r)},n("__beyond_pkg",s),n("hmr",new function(){this.on=(e,t)=>s.hmr.on(e,t),this.off=(e,t)=>s.hmr.off(e,t)}),s.initialise(d)}}});