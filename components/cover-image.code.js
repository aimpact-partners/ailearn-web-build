System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","pragmate-ui@1.0.0-beta.2/icons","@aimpact/ailearn-app@0.1.6-dev.16/components/icons","@aimpact/ailearn-app@0.1.6-dev.16/main-layout.widget","@aimpact/ailearn-app@0.1.6-dev.16/modules/management/refinament.code","pragmate-ui@1.0.0-beta.2/components","pragmate-ui@1.0.0-beta.2/modal","pragmate-ui@1.0.0-beta.2/form","pragmate-ui@1.0.0-beta.2/image","pragmate-ui@1.0.0-beta.2/alert","@aimpact/ailearn-app@0.1.6-dev.16/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","@beyond-js/kernel@0.1.9/styles"],function(n,e){var t,a,o,r,i,l,c,u,s,m,d,p,f,g,v,C;return n({AIButton:void 0,AIIconButton:void 0,CoverImage:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){o=e},function(e){r=e},function(e){i=e},function(e){l=e},function(e){c=e},function(e){u=e},function(e){s=e},function(e){m=e},function(e){d=e},function(e){p=e},function(e){f=e},function(e){g=e}],execute:function(){C=t.Bundle,(v=new C({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.16/components/cover-image",multibundle:!0},type:"code"},e.meta.url).package()).dependencies.update([["react",a],["pragmate-ui/icons",o],["@aimpact/ailearn-app/components/icons",r],["@aimpact/ailearn-app/main-layout.widget",i],["@aimpact/ailearn-app/modules/management/refinament.code",l],["pragmate-ui/components",c],["pragmate-ui/modal",u],["pragmate-ui/form",s],["pragmate-ui/image",m],["pragmate-ui/alert",d],["@aimpact/ailearn-app/components/ui",p],["@beyond-js/react-18-widgets/hooks",f],["@beyond-js/kernel/styles",g]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.16/components/cover-image.code"),(C=new Map).set("./actions",{hash:2739297041,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoverImageActions=function({}){let{picture:e,title:t,description:a,texts:n,onGenerate:o}=(0,I.useModuleContext)(),[r,i]=v.default.useState(!1),[l,c]=v.default.useState(!1),u=()=>i(!r),s=e=>{e?.stopPropagation(),c(!l)},{owner:m,credits:d,consumeCoins:p}=h.LayoutBroker.model,f=t||n.title,g=a||n.subtitle;return v.default.createElement(v.default.Fragment,null,v.default.createElement("figcaption",{className:"actions"},v.default.createElement(y.AppIconButton,{variant:"primary",className:"circle",onClick:u,icon:"aiStars"}),v.default.createElement(C.IconButton,{disabled:!e,variant:"primary",className:"circle",icon:"eye",onClick:s})),v.default.createElement(x.DisplayPicture,{show:l,onClose:s}),v.default.createElement(b.RefinementModal,{show:r,required:!0,owner:m,credits:d,onConsume:p,globalTexts:h.LayoutBroker.globalTexts,onClose:u,confirm:!!e,title:f,onGenerate:({notes:e})=>o(e),description:g}))};var v=e("react"),C=e("pragmate-ui/icons"),y=e("@aimpact/ailearn-app/components/icons"),h=e("@aimpact/ailearn-app/main-layout.widget"),b=e("@aimpact/ailearn-app/modules/management/refinament.code"),I=e("./context"),x=e("./display")}}),C.set("./ai-button",{hash:86064447,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AIButton=function({children:e,onClick:t,...a}){return n.default.createElement(r.Button,{...a,icon:o.ICONS.aiStars,onClick:()=>l.LayoutBroker.ensureCredits(t)},e)},t.AIIconButton=function({children:e,onClick:t,...a}){return n.default.createElement(i.IconButton,{...a,icon:o.ICONS.aiStars,onClick:()=>l.LayoutBroker.ensureCredits(t)},e)};var n=e("react"),o=e("@aimpact/ailearn-app/components/icons"),r=e("pragmate-ui/components"),i=e("pragmate-ui/icons"),l=e("@aimpact/ailearn-app/main-layout.widget")}}),C.set("./context",{hash:3990638724,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");let n=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(n)}}),C.set("./display",{hash:3184932770,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DisplayPicture=function({show:e,onClose:t}){var a=(0,i.useModuleContext)().picture;return!!e&&n.default.createElement(o.Modal,{closeBackdrop:!1,show:!0,className:"refine-modal refine-modal--visualization",onClose:t},n.default.createElement(r.Image,{className:"portrait-view",src:a}))};var n=e("react"),o=e("pragmate-ui/modal"),r=e("pragmate-ui/image"),i=e("./context")}}),C.set("./error-renderer",{hash:4166111875,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorRenderer=function({texts:e,error:t}){return t?(t=e[t]||e.default,a.default.createElement(n.Alert,{type:"error"},t)):null};var a=e("react"),n=e("pragmate-ui/alert")}}),C.set("./index",{hash:2541469158,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoverImage=function({title:e,description:t,picture:a,entity:n,type:o,suggestions:r,onGenerate:i}){let[l,c]=f.default.useState(a),[u,s]=f.default.useState(!1),[m,d]=(0,y.useTexts)(h.module.specifier),p=f.default.useMemo(()=>({picture:l,setImage:c,title:e,description:t,fetching:u,suggestions:r,setFetching:s,onGenerate:i,texts:d}),[a,m]);return m?f.default.createElement(C.ModuleContext.Provider,{value:p},f.default.createElement("div",{className:"cover-image__container"},f.default.createElement(g.EntityImage,{type:o,src:a,entity:n,className:"rounded circle"}),f.default.createElement(v.CoverImageActions,null),f.default.createElement(g.ProcessContainer,{fetching:u}))):f.default.createElement("div",{className:"cover-image-skeleton"})};var f=e("react"),g=e("@aimpact/ailearn-app/components/ui"),v=e("./actions"),C=e("./context"),y=e("@beyond-js/react-18-widgets/hooks"),h=e("beyond_context")}}),C.set("./modals/confirm",{hash:3279452274,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ConfirmRefinementModal=function({show:e,onConfirm:t}){let a=(0,l.useModuleContext)().texts,[,n]=r.default.useState(!1);var o;return e?(o={confirm:{variant:"primary",label:a.actions.confirm},cancel:{label:a.actions.cancel,variant:"primary",bordered:!0}},r.default.createElement(i.ConfirmModal,{onConfirm:t,onCancel:e=()=>n(!1),actions:o,show:!0,title:a.confirm.title,text:a.confirm.subtitle})):null};var r=e("react"),i=e("pragmate-ui/modal"),l=e("../context")}}),C.set("./modals/refinement-modal",{hash:4022374994,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RefinementModal=function({show:e,confirm:t,onClose:a}){let{suggestions:n,title:o,description:r,setImage:i,onGenerate:l,texts:c}=(0,_.useModuleContext)(),[u,s]=x.default.useState(!1),[m,d]=x.default.useState(),[p,f]=x.default.useState(n??""),[g,v]=x.default.useState(!1),C={onChange:e=>f(e.currentTarget.value),onClick:async()=>{try{v(!1),s(!0);var e=await l(p);a(),i(e)}catch(e){d(e.message)}finally{window.setTimeout(()=>{s(!1)},100)}}},y=()=>v(!g),h=t?y:C.onClick,b=o||c.title,I=r||c.subtitle;return e?x.default.createElement(E.Modal,{show:!0,className:"refine-modal",onClose:()=>{v(!1),f(n),a()},closeBackdrop:!1},x.default.createElement("header",null,x.default.createElement("h3",null,b)),x.default.createElement("p",null,I),x.default.createElement(M.Form,null,x.default.createElement(w.ErrorRenderer,{texts:c.errors,error:m}),x.default.createElement(M.Textarea,{name:"notes",value:p,onChange:C.onChange,placeholder:c.notes.placeholder})),x.default.createElement("footer",{className:"flex-container flex-center mt-15"},x.default.createElement(B.AIButton,{variant:"primary",onClick:h,disabled:!p},c.actions.generate)),x.default.createElement(A.ConfirmRefinementModal,{show:g,onClose:y,onConfirm:C.onClick}),x.default.createElement(k.ProcessContainer,{fetching:u})):null};var x=e("react"),E=e("pragmate-ui/modal"),M=e("pragmate-ui/form"),k=e("@aimpact/ailearn-app/components/ui"),B=e("../ai-button"),w=e("../error-renderer"),_=e("../context"),A=e("./confirm")}}),C.set("./types",{hash:866614475,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),v.exports.descriptor=[{im:"./ai-button",from:"AIButton",name:"AIButton"},{im:"./ai-button",from:"AIIconButton",name:"AIIconButton"},{im:"./index",from:"CoverImage",name:"CoverImage"}],v.exports.process=function({require:e,prop:t,value:a}){!e&&"AIButton"!==t||n("AIButton",e?e("./ai-button").AIButton:a),!e&&"AIIconButton"!==t||n("AIIconButton",e?e("./ai-button").AIIconButton:a),!e&&"CoverImage"!==t||n("CoverImage",e?e("./index").CoverImage:a)},n("__beyond_pkg",v),n("hmr",new function(){this.on=(e,t)=>v.hmr.on(e,t),this.off=(e,t)=>v.hmr.off(e,t)}),v.initialise(C)}}});