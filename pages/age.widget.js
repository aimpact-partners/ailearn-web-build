System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0/jsx-runtime","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/application","@aimpact/chat-sdk@1.1.0/session","react@18.2.0","pragmate-ui@1.0.0-beta.2/form/react-select","@beyond-js/kernel@0.1.9/routing","pragmate-ui@1.0.0-beta.2/components","@aimpact/ailearn-app@0.1.6-dev.16/components/ui","@aimpact/ailearn-app/start","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@1.0.0-beta.2/form","pragmate-ui@1.0.0-beta.2/toast","pragmate-ui@1.0.0-beta.2/list"],function(n,e){var t,a,r,o,s,i,l,c,u,d,m,p,f,h,g,v,y,b,x;return n({Controller:void 0,BirthdayForm:void 0,View:void 0,Form:void 0,PoliciesView:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){o=e},function(e){s=e},function(e){i=e},function(e){l=e},function(e){c=e},function(e){u=e},function(e){d=e},function(e){m=e},function(e){p=e},function(e){f=e},function(e){h=e},function(e){g=e},function(e){v=e},function(e){y=e}],execute:function(){x=a.Bundle,(b=new x({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.16/pages/age",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["react/jsx-runtime",o],["@beyond-js/react-18-widgets/page",s],["@aimpact/ailearn-sdk/application",i],["@aimpact/chat-sdk/session",l],["react",c],["pragmate-ui/form/react-select",u],["@beyond-js/kernel/routing",d],["pragmate-ui/components",m],["@aimpact/ailearn-app/components/ui",p],["@aimpact/ailearn-app/routing",f],["@beyond-js/react-18-widgets/hooks",h],["pragmate-ui/form",g],["pragmate-ui/toast",v],["pragmate-ui/list",y]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-policies-page",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.16/pages/age.widget",is:"page",route:"/user-validation"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.16/pages/age.widget"),(x=new Map).set("./views/policies/policies.mdx",{hash:3258189032,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("react/jsx-runtime");function n(e){return e=Object.assign({h1:"h1",h2:"h2",p:"p"},e.components),(0,a.jsxs)("main",{children:[(0,a.jsx)(e.h1,{children:"Términos y condiciones de uso"}),(0,a.jsx)(e.h2,{children:"Políticas de privacidad"}),(0,a.jsx)(e.p,{children:'Estas condiciones han sido actualizadas el 09/09/2022. Estas son las Condiciones Generales para que los usuarios de\r\nInternet accedan a los contenidos y servicios que RVD.AI (en adelante, "RVD.AI") pone a su disposición a través de los\r\nsitios, en adelante los “Sitios”. El usuario al dar al botón "Leí y acepto los términos y condiciones" en el proceso de\r\nacceso a los contenidos de los Sitios, admite haber leído las presentes'}),(0,a.jsx)(e.h2,{children:"Condiciones Generales"}),(0,a.jsx)(e.p,{children:"Expresa su adhesión plena y sin reservas a todas y cada una de ellas. Asimismo, debido a que ciertos servicios y\r\ncontenidos ofrecidos través de los Sitios pueden contener se recomienda a los usuarios tomar conocimiento específico de\r\nellas. Además de las presentes"}),(0,a.jsx)(e.p,{children:"Condiciones Generales y las normas que los complementan, existen unas condiciones de uso los sitios detalladas."}),(0,a.jsx)(e.h2,{children:"Verificación de mayoría de edad"}),(0,a.jsx)(e.p,{children:"Condiciones detalladas y las normas que los complementan, existen unas condiciones de uso los sitios detalladas en el\r\nReglamento general de lanacion.com.ar que todo usuario debe respetar y que se entenderá conocido por todos los usuarios\r\nde los Sitios."})]})}t.default=function(e={}){var t=(e.components||{}).wrapper;return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(n,e)})):n(e)}}}),x.set("./controller",{hash:990578470,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),r=e("./views");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return r.View}show(){}hide(){}}t.Controller=o}}),x.set("./store",{hash:2770161993,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-sdk/application"),n=e("@aimpact/chat-sdk/session");t.StoreManager=class{application;get session(){return n.sessionWrapper}get user(){return n.sessionWrapper.user}get accepted(){return n.sessionWrapper.user.termsAccepted}get ageDefined(){return 0<n.sessionWrapper.user.age}get validated(){return this.accepted&&this.ageDefined}constructor(){this.application=new a.Application,globalThis.store=this}async validateAge(e){try{return n.sessionWrapper.user.validate(e)}catch(e){console.error(e)}}async accept(e){try{return await n.sessionWrapper.user.acceptTerms(e)}catch(e){console.error(e)}}}}}),x.set("./views/age/date",{hash:3672129423,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DateFields=function({values:e,setValues:t}){var a=(0,l.useModuleContext)().texts,{onChange:t,years:n,days:r,months:o}=(0,c.useOptions)(e,t);return s.default.createElement(s.default.Fragment,null,s.default.createElement(i.ReactSelect,{placeholder:a.years.label,value:e.year,name:"year",options:n,onChange:t}),s.default.createElement(i.ReactSelect,{placeholder:a.months.label,value:e.month,name:"month",onChange:t,options:o}),s.default.createElement(i.ReactSelect,{placeholder:a.days.label,value:e.day,onChange:t,name:"day",options:r}))};var s=e("react"),i=e("pragmate-ui/form/react-select"),l=e("../context"),c=e("./use-options")}}),x.set("./views/age/days",{hash:253935214,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DaysField=function(){var e=(0,n.useModuleContext)().texts,[,,]=a.default.useState("");return e.days.items.map((e,t)=>({value:t+1,label:e})),a.default.createElement(a.default.Fragment,null)};var a=e("react"),n=e("../context")}}),x.set("./views/age/form",{hash:3764882451,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BirthdayForm=function(){let{texts:e,birthdate:a,store:n,setView:r}=(0,m.useModuleContext)(),[t,o]=d.default.useState({year:2024,month:1,day:""}),[s,i]=d.default.useState(!1),l={disabled:!a},c=async e=>{try{var t;i(!0),e.preventDefault(),await n.validateAge(a)?r("policies"):(t=v.Router.getAndCleanPreviousUrl(),f.routing.pushState(t?.uri??"/"))}catch(e){console.error(e)}finally{i(!1)}},u="form-age__container"+(s?" is-fetching":"");return d.default.createElement(d.default.Fragment,null,d.default.createElement(g.PageContainer,{size:"sm",className:u},d.default.createElement("div",{className:"form-age__container"},d.default.createElement("h1",null,e.age.title),d.default.createElement("form",{onSubmit:c},d.default.createElement("div",{className:"age-fields__container"},d.default.createElement(p.DateFields,{values:t,setValues:o})),d.default.createElement("span",null,e.claim),d.default.createElement("section",null,d.default.createElement(h.Button,{type:"submit",fetching:s,variant:"primary",...l,onClick:c},e.button))))))};var d=e("react"),m=e("../context"),p=e("./date"),f=e("@beyond-js/kernel/routing"),h=e("pragmate-ui/components"),g=e("@aimpact/ailearn-app/components/ui"),v=e("@aimpact/ailearn-app/routing")}}),x.set("./views/age/use-options",{hash:3946564185,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useOptions=function(e,n){let{texts:t,setBirthdate:a}=(0,i.useModuleContext)(),r=(s.default.useEffect(()=>{e.year&&e.month&&e.day&&a(e.year+`-${e.month}-`+e.day)},[e]),s.default.useMemo(()=>{var e=(new Date).getFullYear()-13;return Array.from({length:e-1926+1},(e,t)=>({value:1930+t,label:""+(1930+t)})).reverse()},[]));o=e.month,o--;var o=new Date(e.year,1+o,0).getDate(),o=Array.from({length:o},(e,t)=>t+1).map((e,t)=>({value:t+1,label:e}));return{onChange:e=>{let{name:t,value:a}=e.currentTarget;n(e=>({...e,[t]:parseInt(a)}))},years:r,months:t.months.items.map((e,t)=>({value:t+1,label:e})),days:o}};var s=e("react"),i=e("../context")}}),x.set("./views/context",{hash:2862825259,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");let n=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(n)}}),x.set("./views/index",{hash:122770884,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){var[t,a]=(0,c.useTexts)(u.module.specifier),[n,r]=i.useState(e.accepted?"policies":"birthday"),[o,s]=i.useState(e.user?.birthdate);return t?(t={policies:d.PoliciesView,birthday:m.BirthdayForm},i.createElement(l.ModuleContext.Provider,{value:{texts:a,setView:r,birthdate:o,setBirthdate:s,store:e}},i.createElement(t[n],null))):null};var i=e("react"),l=e("./context"),c=e("@beyond-js/react-18-widgets/hooks"),u=e("beyond_context"),d=e("./policies"),m=e("./age/form")}}),x.set("./views/policies/form",{hash:1147934487,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Form=function(){let{texts:t,store:a,birthdate:n}=(0,c.useModuleContext)(),[e,r]=l.default.useState(!1),[o,s]=l.default.useState(!1),i={disabled:!e||o};return l.default.createElement("form",{className:"form--in-content",onSubmit:async e=>{try{s(!0),e.preventDefault(),await a.user.acceptTerms(n)?(f.Router.getAndCleanPreviousUrl(),p.routing.replaceState({},null,"/")):d.toast.error(t.ERROR)}catch(e){console.error(e)}finally{s(!1)}}},l.default.createElement("label",{className:"italic flex-container flex-center flex-vertical-center"},l.default.createElement(u.Checkbox,{name:"accept",onClick:e=>r(e.target.checked)}),l.default.createElement(m.HtmlWrapper,null,t.checkbox)),l.default.createElement("section",{className:"flex-container flex-vertical-center  mt-30"},l.default.createElement(m.Button,{type:"submit",variant:"primary",block:!0,...i},t.button)))};var l=e("react"),c=e("../context"),u=e("pragmate-ui/form"),d=e("pragmate-ui/toast"),m=e("pragmate-ui/components"),p=e("@beyond-js/kernel/routing"),f=e("@aimpact/ailearn-app/routing")}}),x.set("./views/policies/index",{hash:631824728,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PoliciesView=function(){var e=(0,s.useModuleContext)().texts;return a.createElement(a.Fragment,null,a.createElement(n.PageContainer,{size:"sm",className:"page-article-container"},a.createElement("main",null,a.createElement("h1",null,e.terms.title),a.createElement("p",null,a.createElement(o.HtmlWrapper,null,e.terms.claim)),a.createElement("p",null,e.terms.conclusion," ",a.createElement(o.Link,{target:"_blank",href:"/terms-and-conditions"},e.terms.links.terms)," ",e.terms.postConclusion," ",a.createElement(o.Link,{target:"_blank",href:"/privacy"},e.terms.links.privacy)),a.createElement(r.Form,null))))};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),r=e("./form"),o=e("pragmate-ui/components"),s=e("../context")}}),x.set("./views/policies/menu",{hash:1571562254,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AsideMenu=function(){let t=(0,r.useModuleContext)().texts,e=Object.keys(t.menu).map(e=>t.menu[e]);return console.log(e,t),a.default.createElement("aside",null,a.default.createElement(n.List,{items:e,control:({item:e})=>a.default.createElement("li",null,e)}))};var a=e("react"),n=e("pragmate-ui/list"),r=e("../context")}}),b.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/age/form",from:"BirthdayForm",name:"BirthdayForm"},{im:"./views/index",from:"View",name:"View"},{im:"./views/policies/form",from:"Form",name:"Form"},{im:"./views/policies/index",from:"PoliciesView",name:"PoliciesView"}],b.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"BirthdayForm"!==t||n("BirthdayForm",e?e("./views/age/form").BirthdayForm:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a),!e&&"Form"!==t||n("Form",e?e("./views/policies/form").Form:a),!e&&"PoliciesView"!==t||n("PoliciesView",e?e("./views/policies/index").PoliciesView:a)},n("__beyond_pkg",b),n("hmr",new function(){this.on=(e,t)=>b.hmr.on(e,t),this.off=(e,t)=>b.hmr.off(e,t)}),b.initialise(x)}}});