System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","react@18.2.0","pragmate-ui@0.1.1/form","pragmate-ui@0.1.1/alert","pragmate-ui@0.1.1/components","@aimpact/auth@0.0.1/components","@beyond-js/react-18-widgets@1.1.2/hooks"],function(r,e){"use strict";var t,a,n,c,l,o,i,s,u,m,d,f;return r({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){c=e},function(e){l=e},function(e){o=e},function(e){i=e},function(e){s=e},function(e){u=e},function(e){m=e}],execute:function(){f=a.Bundle,(d=new f({module:{vspecifier:"@aimpact/auth@0.0.1/auth-recovery",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",c],["react",l],["pragmate-ui/form",o],["pragmate-ui/alert",i],["pragmate-ui/components",s],["@aimpact/auth/components",u],["@beyond-js/react-18-widgets/hooks",m]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"auth-recovery-page",vspecifier:"@aimpact/auth@0.0.1/auth-recovery.widget",is:"page",route:"/auth/recovery",layout:"auth-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/auth@0.0.1/auth-recovery.widget"),(f=new Map).set("./controller",{hash:1999589969,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),r=e("./views");class n extends a.PageReactWidgetController{get Widget(){return r.View}}t.Controller=n}}),f.set("./views/check-email",{hash:4181794838,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CheckYourEmail=function({texts:e}){return a.default.createElement(a.default.Fragment,null,a.default.createElement("h3",{className:"form__title h2"},e.recoveryTitle),a.default.createElement("div",{className:"intro-recovery__text"},a.default.createElement("span",{className:"h4"},e.checkYourEmail?.intro),a.default.createElement("span",{className:"h4"},e.checkYourEmail?.check)),a.default.createElement("div",{className:"divider-section"}),a.default.createElement("div",{className:"intro-recovery__text"},a.default.createElement("span",{className:"h4"},e.checkYourEmail?.warning),a.default.createElement("span",{className:"h4"},e.checkYourEmail?.contact)),a.default.createElement("span",{className:"h3"},e.checkYourEmail?.thanks))};var a=e("react")}}),f.set("./views/form",{hash:2807919184,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RecoveryForm=function({texts:t,setSendRequest:a}){const[r,n]=(0,u.useState)({email:""}),[,c]=(0,u.useState)(!1),[e,l]=(0,u.useState)(""),o={},i=r.email;i||(o.disabled=!0);var s=async e=>{c(!0);var{}=r;try{e.preventDefault(),n({email:""}),a(!0)}catch(e){l(t.errorLogin)}finally{c(!1)}};return u.default.createElement(u.default.Fragment,null,u.default.createElement("h3",{className:"form__title h2"},t.recoveryTitle),u.default.createElement("span",{className:"intro-recovery__text p2"},t.recoverySubtitle," ",t.recoveryIntro),u.default.createElement("div",{className:"divider-section"}),u.default.createElement("span",{className:"intro-recovery__text p2"},t.recoveryInstructions),u.default.createElement(m.Form,{onSubmit:s},u.default.createElement("div",{className:"recovery-form__container"},u.default.createElement(d.Alert,{message:e,mode:"error",isClose:!0}),u.default.createElement(m.Input,{placeholder:t.email,type:"text",name:"email",value:i,onChange:({currentTarget:e})=>{var t={...r};t[e.name]=e.value,n(t),l("")},required:!0}),u.default.createElement(f.Button,{type:"submit",...o,variant:"primary",onClick:s,label:t.recoveryButton}))),u.default.createElement("span",{className:"p2"},t.recoveryFinish),u.default.createElement("span",{className:"p2"},t.recoveryBye))};var u=e("react"),m=e("pragmate-ui/form"),d=e("pragmate-ui/alert"),f=e("pragmate-ui/components")}}),f.set("./views/index",{hash:3477808207,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function(){var[e,t]=(0,n.useState)(!1),[a,r]=(0,o.useTexts)(i.module.specifier);return a?(a=e?u.CheckYourEmail:s.RecoveryForm,n.default.createElement("div",{className:"auth-page-container"},n.default.createElement("div",{className:"first-panel"},n.default.createElement("aimpact-login-presentation",null)),n.default.createElement("div",{className:"second-panel"},n.default.createElement("div",{className:"recovery-container"},n.default.createElement("div",{className:"recovery__header"},n.default.createElement(l.ThemeSwitch,{text:r.theme})),n.default.createElement("div",{className:"recovery__content"},n.default.createElement("div",{className:"recovery-form__container"},n.default.createElement(a,{texts:r,setSendRequest:t}))))))):n.default.createElement(c.Spinner,{active:!0,type:"primary"})};var n=e("react"),c=e("pragmate-ui/components"),l=e("@aimpact/auth/components"),o=e("@beyond-js/react-18-widgets/hooks"),i=e("beyond_context"),s=e("./form"),u=e("./check-email")}}),d.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],d.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||r("View",e?e("./views/index").View:a)},r("__beyond_pkg",d),r("hmr",new function(){this.on=(e,t)=>d.hmr.on(e,t),this.off=(e,t)=>d.hmr.off(e,t)}),d.initialise(f)}}});