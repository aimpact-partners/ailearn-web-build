System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/widgets@1.1.0/routing","@beyond-js/react-18-widgets@1.1.2/base"],function(n,e){var t,i,r,o,a;return n("PageReactWidgetController",void 0),{setters:[function(e){t=e},function(e){i=e},function(e){r=e}],execute:function(){a=t.Bundle,(o=new a({module:{vspecifier:"@beyond-js/react-18-widgets@1.1.2/page"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/routing",i],["@beyond-js/react-18-widgets/base",r]]),(a=new Map).set("./page",{hash:953195477,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PageReactWidgetController=void 0;var i=e("@beyond-js/react-18-widgets/base"),n=e("@beyond-js/widgets/routing");class r extends i.ReactWidgetController{#uri;get uri(){return this.#uri}mount(){return super.mount({uri:this.#uri})}onQueryStringChange({}){}async initialise(){var e=this.widget;(e=n.manager.pages.obtain({widget:e}).uri).on("change",this.onQueryStringChange.bind(this)),this.#uri=e,await super.initialise()}}t.PageReactWidgetController=r}}),o.exports.descriptor=[{im:"./page",from:"PageReactWidgetController",name:"PageReactWidgetController"}],o.exports.process=function({require:e,prop:t,value:i}){!e&&"PageReactWidgetController"!==t||n("PageReactWidgetController",e?e("./page").PageReactWidgetController:i)},n("__beyond_pkg",o),n("hmr",new function(){this.on=(e,t)=>o.hmr.on(e,t),this.off=(e,t)=>o.hmr.off(e,t)}),o.initialise(a)}}});