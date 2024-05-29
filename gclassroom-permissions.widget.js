System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/base","@beyond-js/reactive@1.1.12/model","@aimpact/ailearn-app@0.0.43/model/gclassroom","react@18.2.0","pragmate-ui@0.1.1/components","pragmate-ui@0.1.1/alert","@aimpact/chat@1.0.1/shared/hooks","pragmate-ui@0.1.1/image"],function(r,e){"use strict";var t,a,o,s,n,i,l,c,m,d,u,p,g;return r({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){o=e},function(e){s=e},function(e){n=e},function(e){i=e},function(e){l=e},function(e){c=e},function(e){m=e},function(e){d=e},function(e){u=e}],execute:function(){g=a.Bundle,(p=new g({module:{vspecifier:"@aimpact/ailearn-app@0.0.43/gclassroom-permissions",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",o],["@beyond-js/react-18-widgets/base",s],["@beyond-js/reactive/model",n],["@aimpact/ailearn-app/model/gclassroom",i],["react",l],["pragmate-ui/components",c],["pragmate-ui/alert",m],["@aimpact/chat/shared/hooks",d],["pragmate-ui/image",u]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-gclassroom-permissions",vspecifier:"@aimpact/ailearn-app@0.0.43/gclassroom-permissions.widget"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.43/gclassroom-permissions.widget"),(g=new Map).set("./controller",{hash:2254236919,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/base"),r=e("./store"),o=e("./view");class s extends a.ReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager,this.#store}get Widget(){return o.View}}t.Controller=s}}),g.set("./store",{hash:652728289,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),r=e("@aimpact/ailearn-app/model/gclassroom");class o extends a.ReactiveModel{get authorized(){return r.gclassroom.authorized}#gclassrooms=[];get gclassrooms(){return this.#gclassrooms}}t.StoreManager=o}}),g.set("./view",{hash:3677759952,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({}){const[e,a]=(0,d.useTexts)(l.module.specifier),[t,r]=i.default.useState(!1),[o,s]=i.default.useState(null);if(!e)return null;var n=async e=>{try{r(!0);var t=await u.gclassroom.getUrl();if(!t)throw new Error("ERROR_GETTING_URL");r(!1),window.location.href=t}catch(e){console.error(3,a.ERROR_GETTING_URL,e),s(a.ERROR_GETTING_URL)}finally{r(!1)}};return i.default.createElement("div",{className:"gclassroom__container"},i.default.createElement("div",{className:"card"},i.default.createElement("div",{className:"card__content"},i.default.createElement("span",{className:"h5"},a.preTitle),i.default.createElement("h3",{className:"h3"},a.title),i.default.createElement(p.Image,{src:"/assets/gclassroom.png",alt:"Google classroom"}),o&&i.default.createElement(m.Alert,{type:"error"},o),i.default.createElement("span",{className:"instructions_text"},a.instructions),i.default.createElement("section",{className:"actions"},i.default.createElement(c.Button,{onClick:n,loading:t,className:"btn btn-primary"},a.action)))))};var i=e("react"),l=e("beyond_context"),c=e("pragmate-ui/components"),m=e("pragmate-ui/alert"),d=e("@aimpact/chat/shared/hooks"),u=e("@aimpact/ailearn-app/model/gclassroom"),p=e("pragmate-ui/image")}}),p.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./view",from:"View",name:"View"}],p.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||r("View",e?e("./view").View:a)},r("__beyond_pkg",p),r("hmr",new function(){this.on=(e,t)=>p.hmr.on(e,t),this.off=(e,t)=>p.hmr.off(e,t)}),p.initialise(g)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcudHN4Il0sIm5hbWVzIjpbIl9iYXNlIiwicmVxdWlyZSIsIl9zdG9yZSIsIl92aWV3IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIiNzdG9yZSIsImNyZWF0ZVN0b3JlIiwidGhpcyIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX21vZGVsIiwiX2djbGFzc3Jvb20iLCJSZWFjdGl2ZU1vZGVsIiwiYXV0aG9yaXplZCIsImdjbGFzc3Jvb20iLCIjZ2NsYXNzcm9vbXMiLCJnY2xhc3Nyb29tcyIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsIl9ob29rcyIsInVzZVRleHRzIiwiX2JleW9uZF9jb250ZXh0IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIl9yZWFjdCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJvbkNsaWNrIiwiZXZlbnQiLCJ1cmwiLCJhd2FpdCIsImdldFVybCIsIkVycm9yIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZSIsImNvbnNvbGUiLCJFUlJPUl9HRVRUSU5HX1VSTCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJwcmVUaXRsZSIsInRpdGxlIiwiX2ltYWdlIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJfYWxlcnQiLCJBbGVydCIsInR5cGUiLCJpbnN0cnVjdGlvbnMiLCJfY29tcG9uZW50cyIsIkJ1dHRvbiIsImxvYWRpbmciLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI4aURBQUEsSUFBQUEsRUFBQUMsRUFBQSxrQ0FBQSxFQUNBQyxFQUFBRCxFQUFBLFNBQUEsRUFDQUUsRUFBQUYsRUFBQSxRQUFBLFFBRXdCRyxVQUFtQkosRUFBQUssc0JBQzFDQyxPQUNBQyxjQUVDLE9BREFDLEtBQUtGLE9BQVMsSUFBSUosRUFBQU8sYUFD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