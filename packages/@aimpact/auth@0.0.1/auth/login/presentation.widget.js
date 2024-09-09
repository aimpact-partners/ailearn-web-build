System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/react-18-widgets@1.1.2/base","@beyond-js/reactive@1.2.0/model","react@18.2.0","pragmate-ui@1.0.0-beta.6/image","pragmate-ui@1.0.0-beta.6/components","@beyond-js/react-18-widgets@1.1.2/hooks"],function(r,e){"use strict";var t,n,i,o,a,s,d,c,l,u;return r({Controller:void 0,Widget:void 0}),{setters:[function(e){t=e},function(e){n=e},function(e){i=e},function(e){o=e},function(e){a=e},function(e){s=e},function(e){d=e},function(e){c=e}],execute:function(){u=n.Bundle,(l=new u({module:{vspecifier:"@aimpact/auth@0.0.1/auth/login/presentation",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/react-18-widgets/base",i],["@beyond-js/reactive/model",o],["react",a],["pragmate-ui/image",s],["pragmate-ui/components",d],["@beyond-js/react-18-widgets/hooks",c]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"aimpact-login-presentation",attrs:["dynamic-children"],vspecifier:"@aimpact/auth@0.0.1/auth/login/presentation.widget"}]),(u=new Map).set("./controller",{hash:1036550463,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var n=e("@beyond-js/react-18-widgets/base"),r=e("./store"),i=e("./views");class o extends n.ReactWidgetController{#store;createStore(){var e=JSON.parse(this.attributes.get("dynamic-children"));return this.#store=new r.StoreManager(e),this.#store}get Widget(){return i.Widget}show(){}hide(){}}t.Controller=o}}),u.set("./store",{hash:3376796810,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;class n extends e("@beyond-js/reactive/model").ReactiveModel{#dynamicChildren;get dynamicChildren(){return this.#dynamicChildren}constructor(e){super(),this.#dynamicChildren=e}}t.StoreManager=n}}),u.set("./views/index",{hash:1174167929,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Widget=function({store:e}){var[t,n]=(0,s.useTexts)(a.module.specifier);return t?r.default.createElement("div",{className:"presentation-container "+(e.dynamicChildren&&" visible")},r.default.createElement("div",{className:"presentation-header__container"},r.default.createElement("div",{className:"logo__container"},r.default.createElement(i.Image,{src:"/assets/eduscrum/logo.png"}))),r.default.createElement("div",{className:"presentation-content__container "+(e.dynamicChildren&&" visible")},r.default.createElement("h2",{className:"content__title h1"},n.title),r.default.createElement("p",{className:"content__description"},n.description))):r.default.createElement(o.Spinner,{active:!0,type:"primary"})};var r=e("react"),i=e("pragmate-ui/image"),o=e("pragmate-ui/components"),a=e("beyond_context"),s=e("@beyond-js/react-18-widgets/hooks")}}),l.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"Widget",name:"Widget"}],l.exports.process=function({require:e,prop:t,value:n}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:n),!e&&"Widget"!==t||r("Widget",e?e("./views/index").Widget:n)},r("__beyond_pkg",l),r("hmr",new function(){this.on=(e,t)=>l.hmr.on(e,t),this.off=(e,t)=>l.hmr.off(e,t)}),l.initialise(u)}}});