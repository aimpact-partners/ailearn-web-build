System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.2.0/model","@beyond-js/kernel@0.1.9/texts","react@18.2.0","@aimpact/chat@1.0.2/ui/manager","pragmate-ui@1.0.0-beta.1/components","pragmate-ui@1.0.0-beta.1/icons","@aimpact/chat@1.0.2/wrapper","@aimpact/chat@1.0.2/shared/components","@aimpact/chat@1.0.2/shared/icons"],function(n,e){var t,a,r,o,c,i,s,l,d,u,p,m,h,f,g;return n("Controller",void 0),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){o=e},function(e){c=e},function(e){i=e},function(e){s=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){p=e},function(e){m=e},function(e){h=e}],execute:function(){g=a.Bundle,(f=new g({module:{vspecifier:"@aimpact/chat@1.0.2/chat-page",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",o],["@beyond-js/reactive/model",c],["@beyond-js/kernel/texts",i],["react",s],["@aimpact/chat/ui/manager",l],["pragmate-ui/components",d],["pragmate-ui/icons",u],["@aimpact/chat/wrapper",p],["@aimpact/chat/shared/components",m],["@aimpact/chat/shared/icons",h]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"chat-wd-page",vspecifier:"@aimpact/chat@1.0.2/chat-page.widget",is:"page",route:"/chat/${id}",layout:"chat-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/chat@1.0.2/chat-page.widget"),(g=new Map).set("./controller",{hash:2861114136,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./views"),r=e("./store");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager,globalThis.store=this.#store,this.#store}get Widget(){return n.View}show(){}hide(){this.#store.clean()}}t.Controller=o}}),g.set("./store",{hash:734981720,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),n=e("@beyond-js/kernel/texts"),r=e("beyond_context");class o extends a.ReactiveModel{#texts=new n.CurrentTexts(r.module.specifier);get texts(){return this.#texts?.value}}t.StoreManager=o}}),g.set("./views/index",{hash:3049306109,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({uri:e}){var[e]=a.default.useState(e.vars.get("id"));return a.default.createElement(a.default.Fragment,null,a.default.createElement("aimpact-chat-control",{id:e}))};var a=e("react")}}),g.set("./views/not-found",{hash:4064363242,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatNotFound=function(){return c.AppWrapper.ready?a.default.createElement("div",{className:"not__found_chat "},a.default.createElement("img",{src:"/assets/not-found.png",alt:"Chat not found"}),a.default.createElement("span",{className:"not__found__details"},a.default.createElement(o.Icon,{icon:s.ICONS["aip-chat-logo"],className:"not-found__ailogo"}),a.default.createElement("h2",null,"Chat not found"),a.default.createElement("p",null,a.default.createElement("strong",null,"We couldn't find a chat associated with that ID.")," ",a.default.createElement("br",null),"Please enter URL correctly or create a new chat."),a.default.createElement(r.Button,{icon:"chat",onClick:function(){n.UIManager.modalOpened=!0},label:"Start New Chat"}))):a.default.createElement(i.PreloadScreen,null)};var a=e("react"),n=e("@aimpact/chat/ui/manager"),r=e("pragmate-ui/components"),o=e("pragmate-ui/icons"),c=e("@aimpact/chat/wrapper"),i=e("@aimpact/chat/shared/components"),s=e("@aimpact/chat/shared/icons")}}),f.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"}],f.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a)},n("__beyond_pkg",f),n("hmr",new function(){this.on=(e,t)=>f.hmr.on(e,t),this.off=(e,t)=>f.hmr.off(e,t)}),f.initialise(g)}}});