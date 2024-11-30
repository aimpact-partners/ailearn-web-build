System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/react-18-widgets@1.1.2/page","react@18.2.0","@aimpact/chat-sdk@1.3.0/widgets/markdown"],function(o,e){var t,r,n,a,s,i,d;return o({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){r=e},function(e){n=e},function(e){a=e},function(e){s=e}],execute:function(){d=r.Bundle,(i=new d({module:{vspecifier:"@aimpact/chat-sdk@1.3.0/tests/markdown"},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/react-18-widgets/page",n],["react",a],["@aimpact/chat-sdk/widgets/markdown",s]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"chat-sdk-markdown-page",vspecifier:"@aimpact/chat-sdk@1.3.0/tests/markdown",is:"page",route:"/chat/sdk/markdown",layout:"general-layout"}]),(d=new Map).set("./controller",{hash:1927493790,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/page"),o=e("./store"),n=e("./views");class a extends r.PageReactWidgetController{#store;createStore(){return this.#store=new o.StoreManager,this.#store}get Widget(){return n.View}show(){}hide(){}}t.Controller=a}}),d.set("./store",{hash:1793251939,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0,t.StoreManager=class{}}}),d.set("./views/index",{hash:914870481,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function(){return r.createElement(r.Fragment,null,r.createElement("h2",null,"Hello i'm markdown page"),r.createElement(o.Markdown,{content:n}))};var r=e("react"),o=e("@aimpact/chat-sdk/widgets/markdown");let n=`
# Hola como estas
## Hola como estas
### Hola como estas
#### Hola como estas

- bien
- mal
- regular

 1. bien
 2. mal
 3. regular
`}}),i.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],i.exports.process=function({require:e,prop:t,value:r}){!e&&"Controller"!==t||o("Controller",e?e("./controller").Controller:r),!e&&"View"!==t||o("View",e?e("./views/index").View:r)},o("__beyond_pkg",i),o("hmr",new function(){this.on=(e,t)=>i.hmr.on(e,t),this.off=(e,t)=>i.hmr.off(e,t)}),i.initialise(d)}}});