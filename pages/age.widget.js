System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0/jsx-runtime","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/application","@aimpact/chat-sdk@1.0.0/session","react@18.2.0","pragmate-ui@0.1.1/form/react-select","pragmate-ui@0.1.1/form","@beyond-js/kernel@0.1.9/routing","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.34.dev-01/components/ui","@aimpact/chat@1.0.1/shared/hooks","pragmate-ui@0.1.1/toast","pragmate-ui@0.1.1/list"],function(n,e){"use strict";var t,a,r,o,s,i,l,c,u,d,m,p,f,h,g,v,y,x;return n({Controller:void 0,BirthdayForm:void 0,View:void 0,Form:void 0,PoliciesView:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){o=e},function(e){s=e},function(e){i=e},function(e){l=e},function(e){c=e},function(e){u=e},function(e){d=e},function(e){m=e},function(e){p=e},function(e){f=e},function(e){h=e},function(e){g=e},function(e){v=e}],execute:function(){x=a.Bundle,(y=new x({module:{vspecifier:"@aimpact/ailearn-app@0.0.34.dev-01/pages/age",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["react/jsx-runtime",o],["@beyond-js/react-18-widgets/page",s],["@aimpact/ailearn-sdk/application",i],["@aimpact/chat-sdk/session",l],["react",c],["pragmate-ui/form/react-select",u],["pragmate-ui/form",d],["@beyond-js/kernel/routing",m],["pragmate-ui/components",p],["@aimpact/ailearn-app/components/ui",f],["@aimpact/chat/shared/hooks",h],["pragmate-ui/toast",g],["pragmate-ui/list",v]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-policies-page",vspecifier:"@aimpact/ailearn-app@0.0.34.dev-01/pages/age.widget",is:"page",route:"/user-validation"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.34.dev-01/pages/age.widget"),(x=new Map).set("./views/policies/policies.mdx",{hash:3258189032,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("react/jsx-runtime");function n(e){e=Object.assign({h1:"h1",h2:"h2",p:"p"},e.components);return(0,a.jsxs)("main",{children:[(0,a.jsx)(e.h1,{children:"Términos y condiciones de uso"}),(0,a.jsx)(e.h2,{children:"Políticas de privacidad"}),(0,a.jsx)(e.p,{children:'Estas condiciones han sido actualizadas el 09/09/2022. Estas son las Condiciones Generales para que los usuarios de\r\nInternet accedan a los contenidos y servicios que RVD.AI (en adelante, "RVD.AI") pone a su disposición a través de los\r\nsitios, en adelante los “Sitios”. El usuario al dar al botón "Leí y acepto los términos y condiciones" en el proceso de\r\nacceso a los contenidos de los Sitios, admite haber leído las presentes'}),(0,a.jsx)(e.h2,{children:"Condiciones Generales"}),(0,a.jsx)(e.p,{children:"Expresa su adhesión plena y sin reservas a todas y cada una de ellas. Asimismo, debido a que ciertos servicios y\r\ncontenidos ofrecidos través de los Sitios pueden contener se recomienda a los usuarios tomar conocimiento específico de\r\nellas. Además de las presentes"}),(0,a.jsx)(e.p,{children:"Condiciones Generales y las normas que los complementan, existen unas condiciones de uso los sitios detalladas."}),(0,a.jsx)(e.h2,{children:"Verificación de mayoría de edad"}),(0,a.jsx)(e.p,{children:"Condiciones detalladas y las normas que los complementan, existen unas condiciones de uso los sitios detalladas en el\r\nReglamento general de lanacion.com.ar que todo usuario debe respetar y que se entenderá conocido por todos los usuarios\r\nde los Sitios."})]})}t.default=function(e={}){var t=(e.components||{})["wrapper"];return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(n,e)})):n(e)}}}),x.set("./controller",{hash:990578470,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),r=e("./views");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return r.View}show(){}hide(){}}t.Controller=o}}),x.set("./store",{hash:2770161993,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-sdk/application"),n=e("@aimpact/chat-sdk/session");t.StoreManager=class{application;get session(){return n.sessionWrapper}get user(){return n.sessionWrapper.user}get accepted(){return n.sessionWrapper.user.termsAccepted}get ageDefined(){return 0<n.sessionWrapper.user.age}get validated(){return this.accepted&&this.ageDefined}constructor(){this.application=new a.Application,globalThis.store=this}async validateAge(e){try{return n.sessionWrapper.user.validate(e)}catch(e){console.error(e)}}async accept(e){try{return await n.sessionWrapper.user.acceptTerms(e)}catch(e){console.error(e)}}}}}),x.set("./views/age/date",{hash:3672129423,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DateFields=function({values:e,setValues:t}){var a=(0,l.useModuleContext)()["texts"],{onChange:t,years:n,days:r,months:o}=(0,c.useOptions)(e,t);return s.default.createElement(s.default.Fragment,null,s.default.createElement(i.ReactSelect,{placeholder:a.years.label,value:e.year,name:"year",options:n,onChange:t}),s.default.createElement(i.ReactSelect,{placeholder:a.months.label,value:e.month,name:"month",onChange:t,options:o}),s.default.createElement(i.ReactSelect,{placeholder:a.days.label,value:e.day,onChange:t,name:"day",options:r}))};var s=e("react"),i=e("pragmate-ui/form/react-select"),l=e("../context"),c=e("./use-options")}}),x.set("./views/age/days",{hash:253935214,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DaysField=function(){const e=(0,n.useModuleContext)()["texts"],[,,]=a.default.useState("");e.days.items.map((e,t)=>({value:t+1,label:e}));return a.default.createElement(a.default.Fragment,null)};var a=e("react"),n=e("../context")}}),x.set("./views/age/form",{hash:3355733224,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BirthdayForm=function(){const{texts:e,birthdate:t,store:a,setView:n}=(0,m.useModuleContext)(),[r,o]=d.default.useState({year:2024,month:1,day:""}),[s,i]=d.default.useState(!1),l={disabled:!t},c=async e=>{try{i(!0),e.preventDefault(),await a.validateAge(t)?n("policies"):f.routing.pushState("/")}catch(e){console.error(e)}finally{i(!1)}},u="form-age__container"+(s?" is-fetching":"");return d.default.createElement(d.default.Fragment,null,d.default.createElement(g.PageContainer,{size:"sm",className:u},d.default.createElement("div",{className:"form-age__container"},d.default.createElement("h1",null,e.age.title),d.default.createElement("form",{onSubmit:c},d.default.createElement("div",{className:"age-fields__container"},d.default.createElement(p.DateFields,{values:r,setValues:o})),d.default.createElement("span",null,e.claim),d.default.createElement("section",null,d.default.createElement(h.Button,{type:"submit",fetching:s,variant:"primary",...l,onClick:c},e.button))))))};var d=e("react"),m=e("../context"),p=e("./date"),f=e("@beyond-js/kernel/routing"),h=e("pragmate-ui/components"),g=e("@aimpact/ailearn-app/components/ui")}}),x.set("./views/age/use-options",{hash:3946564185,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useOptions=function(e,n){const{texts:t,setBirthdate:a}=(0,l.useModuleContext)(),r=(i.default.useEffect(()=>{e.year&&e.month&&e.day&&a(`${e.year}-${e.month}-`+e.day)},[e]),i.default.useMemo(()=>{var e=(new Date).getFullYear()-13;return Array.from({length:e-1926+1},(e,t)=>({value:1930+t,label:""+(1930+t)})).reverse()},[]));var o=function(e,t){return e--,new Date(t,e+1,0).getDate()}(e.month,e.year),o=(e=>Array.from({length:e},(e,t)=>t+1))(o).map((e,t)=>({value:t+1,label:e})),s=t.months.items.map((e,t)=>({value:t+1,label:e}));return{onChange:e=>{const{name:t,value:a}=e.currentTarget;n(e=>({...e,[t]:parseInt(a)}))},years:r,months:s,days:o}};var i=e("react"),l=e("../context")}}),x.set("./views/context",{hash:3251310977,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");const n=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(n)}}),x.set("./views/index",{hash:786822683,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){var[t,a]=(0,c.useTexts)(u.module.specifier),[n,r]=i.useState(e.accepted?"policies":"birthday"),[o,s]=i.useState(e.user?.birthdate);if(console.log(1,o),!t)return null;t={policies:d.PoliciesView,birthday:m.BirthdayForm},a={texts:a,setView:r,birthdate:o,setBirthdate:s,store:e},r=t[n];return i.createElement(l.ModuleContext.Provider,{value:a},i.createElement(r,null))};var i=e("react"),l=e("./context"),c=e("@aimpact/chat/shared/hooks"),u=e("beyond_context"),d=e("./policies"),m=e("./age/form")}}),x.set("./views/policies/form",{hash:719735052,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Form=function(){const{texts:t,store:a,birthdate:n}=(0,c.useModuleContext)(),[e,r]=l.default.useState(!1),[o,s]=l.default.useState(!1),i={disabled:!e||o};return l.default.createElement("form",{className:"form--in-content",onSubmit:async e=>{try{s(!0),e.preventDefault(),await a.user.acceptTerms(n)?p.routing.replaceState({},null,"/"):d.toast.error(t.ERROR)}catch(e){console.error(e)}finally{s(!1)}}},l.default.createElement("label",{className:"italic flex-container flex-center flex-vertical-center"},l.default.createElement(u.Checkbox,{name:"accept",onClick:e=>r(e.target.checked)}),l.default.createElement(m.HtmlWrapper,null,t.checkbox)),l.default.createElement("section",{className:"flex-container flex-vertical-center  mt-30"},l.default.createElement(m.Button,{type:"submit",variant:"primary",block:!0,...i},t.button)))};var l=e("react"),c=e("../context"),u=e("pragmate-ui/form"),d=e("pragmate-ui/toast"),m=e("pragmate-ui/components"),p=e("@beyond-js/kernel/routing")}}),x.set("./views/policies/index",{hash:628096821,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PoliciesView=function(){var e=(0,s.useModuleContext)()["texts"];return a.createElement(a.Fragment,null,a.createElement(n.PageContainer,{size:"sm",className:"page-article-container"},a.createElement("main",null,a.createElement("h1",null,e.terms.title),a.createElement("p",null,a.createElement(o.HtmlWrapper,null,e.terms.claim)),a.createElement("p",null,e.terms.conclusion," ",a.createElement(o.Link,{target:"_blank",href:"/app/terms"},e.terms.links.terms)," ",e.terms.postConclusion," ",a.createElement(o.Link,{target:"_blank",href:"/app/privacy"},e.terms.links.privacy)),a.createElement(r.Form,null))))};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),r=e("./form"),o=e("pragmate-ui/components"),s=e("../context")}}),x.set("./views/policies/menu",{hash:1571562254,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AsideMenu=function(){const t=(0,r.useModuleContext)()["texts"],e=Object.keys(t.menu).map(e=>t.menu[e]);return console.log(e,t),a.default.createElement("aside",null,a.default.createElement(n.List,{items:e,control:({item:e})=>a.default.createElement("li",null,e)}))};var a=e("react"),n=e("pragmate-ui/list"),r=e("../context")}}),y.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/age/form",from:"BirthdayForm",name:"BirthdayForm"},{im:"./views/index",from:"View",name:"View"},{im:"./views/policies/form",from:"Form",name:"Form"},{im:"./views/policies/index",from:"PoliciesView",name:"PoliciesView"}],y.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"BirthdayForm"!==t||n("BirthdayForm",e?e("./views/age/form").BirthdayForm:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a),!e&&"Form"!==t||n("Form",e?e("./views/policies/form").Form:a),!e&&"PoliciesView"!==t||n("PoliciesView",e?e("./views/policies/index").PoliciesView:a)},n("__beyond_pkg",y),n("hmr",new function(){this.on=(e,t)=>y.hmr.on(e,t),this.off=(e,t)=>y.hmr.off(e,t)}),y.initialise(x)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy92aWV3cy9wb2xpY2llcy92aWV3c1xccG9saWNpZXNcXHBvbGljaWVzLm1keCIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FnZS9kYXRlLnRzeCIsIi90cy92aWV3cy9hZ2UvZGF5cy50c3giLCIvdHMvdmlld3MvYWdlL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2FnZS91c2Utb3B0aW9ucy50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvZm9ybS50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BvbGljaWVzL21lbnUudHN4Il0sIm5hbWVzIjpbIl9wYWdlIiwicmVxdWlyZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiI3N0b3JlIiwiY3JlYXRlU3RvcmUiLCJ0aGlzIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJoaWRlIiwiZXhwb3J0cyIsIl9hcHBsaWNhdGlvbiIsIl9zZXNzaW9uIiwiYXBwbGljYXRpb24iLCJzZXNzaW9uIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYWNjZXB0ZWQiLCJ0ZXJtc0FjY2VwdGVkIiwiYWdlRGVmaW5lZCIsImFnZSIsInZhbGlkYXRlZCIsImNvbnN0cnVjdG9yIiwiQXBwbGljYXRpb24iLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJ2YWxpZGF0ZUFnZSIsImJpcnRoZGF0ZSIsInZhbGlkYXRlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjY2VwdCIsImF3YWl0IiwiYWNjZXB0VGVybXMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0ZXh0cyIsIl9jb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ2hhbmdlIiwieWVhcnMiLCJkYXlzIiwibW9udGhzIiwiX3VzZU9wdGlvbnMiLCJ1c2VPcHRpb25zIiwiX3JlYWN0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9yZWFjdFNlbGVjdCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsInZhbHVlIiwieWVhciIsIm5hbWUiLCJvcHRpb25zIiwibW9udGgiLCJkYXkiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2V0VmlldyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJkaXNhYmxlZCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIl9yb3V0aW5nIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImNscyIsIl91aSIsIlBhZ2VDb250YWluZXIiLCJzaXplIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJfZGF0ZSIsIkRhdGVGaWVsZHMiLCJjbGFpbSIsIl9jb21wb25lbnRzIiwiQnV0dG9uIiwidHlwZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYnV0dG9uIiwic2V0QmlydGhkYXRlIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsImN1cnJlbnRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsInJldmVyc2UiLCJ0b3RhbERheXMiLCJnZXREYXRlIiwibnVtYmVyIiwiaSIsImN1cnJlbnRUYXJnZXQiLCJwcmV2U3RhdGUiLCJwYXJzZUludCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInRleHRzUmVhZHkiLCJfaG9va3MiLCJ1c2VUZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIm1vZHVsZSIsInNwZWNpZmllciIsInZpZXciLCJSZWFjdCIsImxvZyIsIlZpZXdzIiwicG9saWNpZXMiLCJfcG9saWNpZXMiLCJQb2xpY2llc1ZpZXciLCJiaXJ0aGRheSIsIl9mb3JtIiwiQmlydGhkYXlGb3JtIiwiQ29udHJvbCIsIlByb3ZpZGVyIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJyZXBsYWNlU3RhdGUiLCJfdG9hc3QiLCJ0b2FzdCIsIkVSUk9SIiwiQ2hlY2tib3giLCJ0YXJnZXQiLCJIdG1sV3JhcHBlciIsImNoZWNrYm94IiwiYmxvY2siLCJ0ZXJtcyIsImNvbmNsdXNpb24iLCJMaW5rIiwiaHJlZiIsImxpbmtzIiwicG9zdENvbmNsdXNpb24iLCJwcml2YWN5IiwiRm9ybSIsIk9iamVjdCIsImtleXMiLCJtZW51Iiwia2V5IiwiX2xpc3QiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iXSwibWFwcGluZ3MiOiI2cUVBRUUsK0IsNEJBRUMseUIsMkJBRUgscWIsNEJBS0csdUIsMkJBRUgsK1EsMkJBSUEsaUgsNEJBRUcsaUMsMkJBRUgsb1EsZ1JDckJBLElBQUFBLEVBQUFDLEVBQUEsa0NBQUEsRUFDQUMsRUFBQUQsRUFBQSxTQUFBLEVBRUFFLEVBQUFGLEVBQUEsU0FBQSxRQUdNRyxVQUFtQkosRUFBQUssMEJBQ3hCQyxPQUNBQyxjQUVDLE9BREFDLEtBQUtGLE9BQVMsSUFBSUosRUFBQU8sYUFDR0QsS0FBS0YsTUFDM0IsQ0FDQUksYUFDQyxPQUFPUCxFQUFBUSxJQUNSLENBS0FDLFFBS0FDLFEsQ0FDQUMsRUFBQVYsV0FBQUEsQyxrSUN6QkQsSUFBQVcsRUFBQWQsRUFBQSxrQ0FBQSxFQUVBZSxFQUFBZixFQUFBLDJCQUFBLEVBNENDYSxFQUFBTCxtQkF6Q0FRLFlBRUFDLGNBQ0MsT0FBT0YsRUFBQUcsY0FDUixDQUVBQyxXQUNDLE9BQU9KLEVBQUFHLGVBQWVDLElBQ3ZCLENBRUFDLGVBQ0MsT0FBT0wsRUFBQUcsZUFBZUMsS0FBS0UsYUFDNUIsQ0FFQUMsaUJBQ0MsT0FBaUMsRUFBMUJQLEVBQUFHLGVBQWVDLEtBQUtJLEdBQzVCLENBRUFDLGdCQUNDLE9BQU9qQixLQUFLYSxVQUFZYixLQUFLZSxVQUM5QixDQUNBRyxjQUNDbEIsS0FBS1MsWUFBYyxJQUFJRixFQUFBWSxZQUN2QkMsV0FBV0MsTUFBUXJCLElBQ3BCLENBRUFzQixrQkFBa0JDLEdBQ2pCLElBQ0Ms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