System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.2.0/model","@aimpact/ailearn-app@0.1.0-dev.06/model/gclassroom","react@18.2.0","@aimpact/chat@1.0.2/shared/hooks","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.2/shared/components","pragmate-ui@1.0.0-beta.1/alert","pragmate-ui@1.0.0-beta.1/image"],function(a,e){var t,r,o,s,n,i,c,l,d,u,m,g,p,h;return a({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){r=e},function(e){o=e},function(e){s=e},function(e){n=e},function(e){i=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){g=e}],execute:function(){h=r.Bundle,(p=new h({module:{vspecifier:"@aimpact/ailearn-app@0.1.0-dev.06/gclassroom/access",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",o],["@beyond-js/react-18-widgets/page",s],["@beyond-js/reactive/model",n],["@aimpact/ailearn-app/model/gclassroom",i],["react",c],["@aimpact/chat/shared/hooks",l],["@beyond-js/react-18-widgets/hooks",d],["@aimpact/chat/shared/components",u],["pragmate-ui/alert",m],["pragmate-ui/image",g]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-gclassrooms-access",vspecifier:"@aimpact/ailearn-app@0.1.0-dev.06/gclassroom/access.widget",is:"page",route:"/gclassroom/access",layout:"chat-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.0-dev.06/gclassroom/access.widget"),(h=new Map).set("./controller",{hash:1069450016,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/page"),a=e("./store"),o=e("./views");class s extends r.PageReactWidgetController{#store;createStore(){return this.#store=new a.StoreManager,this.#store}get Widget(){return o.View}show(){this.uri.qs.get("state")&&this.uri.qs.get("code")?this.#store.validate(this.uri.qs.get("state"),this.uri.qs.get("code")):this.#store.ready=!0}hide(){}}t.Controller=s}}),h.set("./store",{hash:774891343,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var r=e("@beyond-js/reactive/model"),a=e("@aimpact/ailearn-app/model/gclassroom");class o extends r.ReactiveModel{constructor(){super(),a.gclassroom.on("change",this.triggerEvent)}get error(){return a.gclassroom.error}get gclassroom(){return a.gclassroom}async validate(e,t){try{this.fetching=!0,await a.gclassroom.callback(e,t),this.fetching=!1,this.ready=!0}catch(e){console.error(e)}}}t.StoreManager=o}}),h.set("./views/index",{hash:1084354450,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){let[t,r]=(0,c.useTexts)(d.module.specifier),{error:a,fetching:o}=e.gclassroom,[s,n]=i.default.useState(e.fetching||o);return(0,l.useBinder)([e],()=>n(e.fetching)),!t||s?i.default.createElement(u.PreloadScreen,null):i.default.createElement("div",{className:"page__container place-center"},i.default.createElement("div",{className:"card"},i.default.createElement("div",{className:"card__content"},i.default.createElement("h1",null,r.title),i.default.createElement(g.Image,{src:"/assets/gclassroom.png",alt:"Google classroom"}),a&&i.default.createElement(m.Alert,{type:"error"},a?.text),i.default.createElement("h4",null,r.subtitle))))};var i=e("react"),c=e("@aimpact/chat/shared/hooks"),l=e("@beyond-js/react-18-widgets/hooks"),d=e("beyond_context"),u=e("@aimpact/chat/shared/components"),m=e("pragmate-ui/alert"),g=e("pragmate-ui/image")}}),p.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],p.exports.process=function({require:e,prop:t,value:r}){!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:r),!e&&"View"!==t||a("View",e?e("./views/index").View:r)},a("__beyond_pkg",p),a("hmr",new function(){this.on=(e,t)=>p.hmr.on(e,t),this.off=(e,t)=>p.hmr.off(e,t)}),p.initialise(h)}}});