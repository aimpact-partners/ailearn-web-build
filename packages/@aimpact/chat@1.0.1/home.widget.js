System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","react@18.2.0","pragmate-ui@0.1.1/icons","pragmate-ui@0.1.1/components","@beyond-js/kernel@0.1.9/routing","@aimpact/chat@1.0.1/ui/manager","@aimpact/chat@1.0.1/wrapper","@aimpact/chat@1.0.1/shared/hooks"],function(n,e){"use strict";var t,a,r,l,o,c,i,s,u,d,m,p,f;return n("Controller",void 0),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){l=e},function(e){o=e},function(e){c=e},function(e){i=e},function(e){s=e},function(e){u=e},function(e){d=e},function(e){m=e}],execute:function(){f=a.Bundle,(p=new f({module:{vspecifier:"@aimpact/chat@1.0.1/home",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",l],["react",o],["pragmate-ui/icons",c],["pragmate-ui/components",i],["@beyond-js/kernel/routing",s],["@aimpact/chat/ui/manager",u],["@aimpact/chat/wrapper",d],["@aimpact/chat/shared/hooks",m]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"chat-home-page",vspecifier:"@aimpact/chat@1.0.1/home.widget",is:"page",route:"/_this_route_does_not_exists",layout:"chat-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/chat@1.0.1/home.widget"),(f=new Map).set("./controller",{hash:1999589969,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./views");class r extends a.PageReactWidgetController{get Widget(){return n.View}}t.Controller=r}}),f.set("./views/index",{hash:3893292162,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function(){var[e,t]=(0,c.useTexts)(i.module.specifier);return e?a.default.createElement("section",{className:"empty-view-container"},a.default.createElement("header",{className:"empty-view-banner"},a.default.createElement("div",{className:"title-xl"},t.welcome.title),a.default.createElement("p",null,t.welcome.text)),a.default.createElement("section",{className:"cards"},a.default.createElement("div",{className:"empty-view-card"},a.default.createElement("header",null,a.default.createElement(n.Icon,{icon:"add-chat",className:"lg"}),a.default.createElement("h1",null,t.chat.title)),a.default.createElement("p",null,t.chat.subtitle,t.chat.description),a.default.createElement(r.Button,{onClick:()=>o.UIManager.modalOpened=!0,label:"Start Chat"})),a.default.createElement("div",{className:"empty-view-card"},a.default.createElement("header",null,a.default.createElement(n.Icon,{icon:"upload-file",className:"lg"}),a.default.createElement("h1",null,t.kb.title)),a.default.createElement("p",null,t.kb.subtitle,t.kb.description),a.default.createElement(r.Button,{onClick:()=>l.routing.pushState("/documents"),label:t.kb.action})))):a.default.createElement(r.Spinner,null)};var a=e("react"),n=e("pragmate-ui/icons"),r=e("pragmate-ui/components"),l=e("@beyond-js/kernel/routing"),o=e("@aimpact/chat/ui/manager"),c=e("@aimpact/chat/shared/hooks"),i=e("beyond_context")}}),p.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"}],p.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a)},n("__beyond_pkg",p),n("hmr",new function(){this.on=(e,t)=>p.hmr.on(e,t),this.off=(e,t)=>p.hmr.off(e,t)}),p.initialise(f)}}});