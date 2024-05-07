System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","react@18.2.0","@beyond-js/kernel@0.1.9/routing","pragmate-ui@0.1.1/form","pragmate-ui@0.1.1/link","pragmate-ui@0.1.1/alert","pragmate-ui@0.1.1/components","@aimpact/auth@0.0.1/components","@aimpact/chat-sdk@1.0.0/session","@beyond-js/react-18-widgets@1.1.2/hooks"],function(r,e){"use strict";var t,a,s,n,i,o,l,m,c,u,d,p,f,g,w;return r({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){s=e},function(e){n=e},function(e){i=e},function(e){o=e},function(e){l=e},function(e){m=e},function(e){c=e},function(e){u=e},function(e){d=e},function(e){p=e},function(e){f=e}],execute:function(){w=a.Bundle,(g=new w({module:{vspecifier:"@aimpact/auth@0.0.1/auth-register",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",s],["@beyond-js/react-18-widgets/page",n],["react",i],["@beyond-js/kernel/routing",o],["pragmate-ui/form",l],["pragmate-ui/link",m],["pragmate-ui/alert",c],["pragmate-ui/components",u],["@aimpact/auth/components",d],["@aimpact/chat-sdk/session",p],["@beyond-js/react-18-widgets/hooks",f]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"auth-register-page",vspecifier:"@aimpact/auth@0.0.1/auth-register.widget",is:"page",route:"/auth/register",layout:"auth-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/auth@0.0.1/auth-register.widget"),(w=new Map).set("./controller",{hash:1999589969,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),r=e("./views");class s extends a.PageReactWidgetController{get Widget(){return r.View}}t.Controller=s}}),w.set("./views/form",{hash:4172421684,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RegisterForm=function({texts:a}){const r={username:"",password:"",confirmPassword:"",email:"",fetching:!1},[s,n]=(0,d.useState)(r),[e,i]=(0,d.useState)(""),[t,o]=(0,d.useState)(""),l=({currentTarget:t})=>{n(e=>({...e,[t.name]:t.value})),i("")},m=!(s.username&&s.password&&s.confirmPassword&&s.email),c=e=>{i(e)},u=async e=>{o("default");try{e.preventDefault();var t=await y.sessionWrapper.registerWithEmail(s);if(!t.status)return"Firebase: Error (auth/invalid-email)."===t.error?i(a.errorMessages.email):"Firebase: Error (auth/email-already-in-use)."===t.error?i(a.errorMessages.emailExist):"Firebase: Error (auth/network-request-failed)."===t.error?i(a.errorMessages.lostConnection):i(a.errorMessages.internalFail);n(r),p.routing.pushState("/")}catch(e){i(a.errorMessages.internalFail)}finally{o("")}};return d.default.createElement("div",{className:"register-form__content"},d.default.createElement("h3",{className:"register-title__text"},a.createAccount),d.default.createElement(w.Alert,{className:"password-error__alert "+(e&&" visible"),message:e,type:"error",show:!!e,isClose:!0}),d.default.createElement(f.Form,{className:"form-register",onSubmit:u},d.default.createElement("div",{className:"register-form-content__container "+(e&&" visible")},d.default.createElement(v.Input,{label:a.fullName,type:"text",name:"username",value:s.username,onChange:l,required:!0}),d.default.createElement(v.Input,{label:a.password,type:"password",name:"password",value:s.password,onChange:l,required:!0}),d.default.createElement(v.Input,{label:a.confirmPassword,type:"password",name:"confirmPassword",value:s.confirmPassword,onChange:l,onBlur:()=>{s.password!==s.confirmPassword?c(a.errorMessages.match):/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z]).{8,32}$/.test(s.password)||(s.password.length<8||32<s.password.length?c(a.errorMessages.minimumCharacters):/[A-Za-z]/.test(s.password)?/[0-9!@#$%^&*()-_=+{};:,<.>/?]/.test(s.password)?/(?=.*[A-Z])/.test(s.password)?/(?=.*[a-z])/.test(s.password)?/(?=.*[!@#$%^&*(),.?":{}|<>])/.test(s.password)||c(a.errorMessages.minimumSpecial):c(a.errorMessages.minimumLower):c(a.errorMessages.minimumUpper):c(a.errorMessages.minimumNumbers):c(a.errorMessages.minimumLetters))},required:!0}),d.default.createElement(v.Input,{label:a.email,type:"text",name:"email",value:s.email,onChange:l,required:!0})),d.default.createElement("div",{className:"term__container"},d.default.createElement("span",{className:"tyc p2"},a.termsCondition),d.default.createElement("div",{className:"divider-section"}),d.default.createElement("span",{className:"conditions-title__text h6"},a.passwordConditions?.title),d.default.createElement("ul",{className:"conditions-pass__container"},d.default.createElement("li",{className:"p2"},a.passwordConditions?.minimumCharacters),d.default.createElement("li",{className:"p2"},a.passwordConditions?.minimumLetters),d.default.createElement("li",{className:"p2"},a.passwordConditions?.minimumSpecial)),d.default.createElement("div",{className:"divider-section"}),d.default.createElement("div",{className:"form-actions"},d.default.createElement(h.Button,{type:"submit",variant:"primary",disabled:m,onClick:u,loading:"default"===t,label:a.submit}))),d.default.createElement("div",{className:"direct-login__container"},d.default.createElement("div",{className:"form-actions mt-20"},d.default.createElement(g.Link,{className:"h6"},a.helpSignIn),d.default.createElement(g.Link,{href:"/auth/login",className:"h6"},a.alreadyAccount)))))};var d=e("react"),p=e("@beyond-js/kernel/routing"),f=e("pragmate-ui/form"),g=e("pragmate-ui/link"),w=e("pragmate-ui/alert"),h=e("pragmate-ui/components"),v=e("@aimpact/auth/components"),y=e("@aimpact/chat-sdk/session")}}),w.set("./views/index",{hash:1673552028,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function(){var[e,t]=(0,n.useTexts)(s.module.specifier);return e?a.default.createElement("div",{className:"auth-page-container"},a.default.createElement("div",{className:"first-panel"},a.default.createElement("aimpact-login-presentation",{"dynamic-children":!0})),a.default.createElement("div",{className:"second-panel"},a.default.createElement("div",{className:"register-container"},a.default.createElement("div",{className:"register__header"},a.default.createElement(r.ThemeSwitch,{text:t.theme})),a.default.createElement(i.RegisterForm,{texts:t})))):null};var a=e("react"),r=e("@aimpact/auth/components"),s=e("beyond_context"),n=e("@beyond-js/react-18-widgets/hooks"),i=e("./form")}}),g.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],g.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||r("View",e?e("./views/index").View:a)},r("__beyond_pkg",g),r("hmr",new function(){this.on=(e,t)=>g.hmr.on(e,t),this.off=(e,t)=>g.hmr.off(e,t)}),g.initialise(w)}}});