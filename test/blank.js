System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/react-18-widgets@1.1.2/page","react@18.2.0"],function(n,e){"use strict";var t,r,o,i,s,a;return n({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){r=e},function(e){o=e},function(e){i=e}],execute:function(){a=r.Bundle,(s=new a({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.29/test/blank"},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/react-18-widgets/page",o],["react",i]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-test-components",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.29/test/blank",is:"page",route:"/tests/blank"}]),(a=new Map).set("./controller",{hash:2758008120,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/page"),n=e("./store"),o=e("./view");class i extends r.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return o.View}show(){}hide(){}}t.Controller=i}}),a.set("./store",{hash:1793251939,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0,t.StoreManager=class{}}}),a.set("./view/index",{hash:3132331412,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function(){const[e,t]=r.useState(!0);return r.createElement(r.Fragment,null,e&&r.createElement("app-test-web-component",null),r.createElement("button",{onClick:()=>{t(!e)}},"Click me!"))};var r=e("react")}}),s.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./view/index",from:"View",name:"View"}],s.exports.process=function({require:e,prop:t,value:r}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:r),!e&&"View"!==t||n("View",e?e("./view/index").View:r)},n("__beyond_pkg",s),n("hmr",new function(){this.on=(e,t)=>s.hmr.on(e,t),this.off=(e,t)=>s.hmr.off(e,t)}),s.initialise(a)}}});