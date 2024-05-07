System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","pragmate-ui@0.1.1/icons","@aimpact/ailearn-app@0.0.32/components/icons","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.32/coins-layout.widget","pragmate-ui@0.1.1/modal","pragmate-ui@0.1.1/form","pragmate-ui@0.1.1/image","pragmate-ui@0.1.1/alert","@aimpact/ailearn-app@0.0.32/components/ui","@aimpact/chat@1.0.1/shared/hooks","@beyond-js/kernel@0.1.9/styles"],function(n,e){"use strict";var t,a,o,r,i,c,l,u,s,m,d,p,f,g,h;return n({AIButton:void 0,AIIconButton:void 0,CoverImage:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){o=e},function(e){r=e},function(e){i=e},function(e){c=e},function(e){l=e},function(e){u=e},function(e){s=e},function(e){m=e},function(e){d=e},function(e){p=e},function(e){f=e}],execute:function(){h=t.Bundle,(g=new h({module:{vspecifier:"@aimpact/ailearn-app@0.0.32/components/cover-image",multibundle:!0},type:"code"},e.meta.url).package()).dependencies.update([["react",a],["pragmate-ui/icons",o],["@aimpact/ailearn-app/components/icons",r],["pragmate-ui/components",i],["@aimpact/ailearn-app/coins-layout.widget",c],["pragmate-ui/modal",l],["pragmate-ui/form",u],["pragmate-ui/image",s],["pragmate-ui/alert",m],["@aimpact/ailearn-app/components/ui",d],["@aimpact/chat/shared/hooks",p],["@beyond-js/kernel/styles",f]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.32/components/cover-image.code"),(h=new Map).set("./actions",{hash:1327964753,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoverImageActions=function({}){const e=(0,m.useModuleContext)().picture,[t,a]=c.default.useState(!1),[n,o]=c.default.useState(!1),r=e=>{e?.stopPropagation(),a(!t)},i=e=>{e?.stopPropagation(),o(!n)};return c.default.createElement(c.default.Fragment,null,c.default.createElement("figcaption",{className:"actions"},c.default.createElement(u.AppIconButton,{variant:"primary",className:"circle",onClick:r,icon:"aiStars"}),c.default.createElement(l.IconButton,{disabled:!e,variant:"primary",className:"circle",icon:"eye",onClick:i})),c.default.createElement(d.DisplayPicture,{show:n,onClose:i}),c.default.createElement(s.RefinementModal,{show:t,confirm:!!e,onClose:r}))};var c=e("react"),l=e("pragmate-ui/icons"),u=e("@aimpact/ailearn-app/components/icons"),s=e("./modals/refinement-modal"),m=e("./context"),d=e("./display")}}),h.set("./ai-button",{hash:3669703153,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AIButton=function({children:e,onClick:t,...a}){return n.default.createElement(r.Button,{...a,icon:o.ICONS.aiStars,onClick:()=>c.LayoutBroker.ensureCredits(t)},e)},t.AIIconButton=function({children:e,onClick:t,...a}){return n.default.createElement(i.IconButton,{...a,icon:o.ICONS.aiStars,onClick:()=>c.LayoutBroker.ensureCredits(t)},e)};var n=e("react"),o=e("@aimpact/ailearn-app/components/icons"),r=e("pragmate-ui/components"),i=e("pragmate-ui/icons"),c=e("@aimpact/ailearn-app/coins-layout.widget")}}),h.set("./context",{hash:3990638724,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");const n=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(n)}}),h.set("./display",{hash:3282104964,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DisplayPicture=function({show:e,onClose:t}){var a=(0,i.useModuleContext)().picture;return!!e&&n.default.createElement(o.Modal,{show:!0,className:"refine-modal",onClose:t},n.default.createElement(r.Image,{className:"portrait-view",src:a}))};var n=e("react"),o=e("pragmate-ui/modal"),r=e("pragmate-ui/image"),i=e("./context")}}),h.set("./error-renderer",{hash:3355718115,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorRenderer=function({texts:e,error:t}){return t?a.default.createElement(n.Alert,{type:"error"},e[t]):null};var a=e("react"),n=e("pragmate-ui/alert")}}),h.set("./index",{hash:1730650054,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoverImage=function({title:e,description:t,picture:a,suggestions:n,onGenerate:o}){const[r,i]=d.default.useState(a),[c,l]=d.default.useState(!1),[u,s]=(0,C.useTexts)(v.module.specifier),m=d.default.useMemo(()=>({picture:r,setImage:i,title:e,description:t,fetching:c,suggestions:n,setFetching:l,onGenerate:o,texts:s}),[a,u]);return u?d.default.createElement(h.ModuleContext.Provider,{value:m},d.default.createElement("div",{className:"cover-image__container"},a&&d.default.createElement(f.Image,{src:a,className:"rounded circle"}),d.default.createElement(g.CoverImageActions,{setFetching:l,generated:!!a}),d.default.createElement(p.ProcessContainer,{fetching:c}))):null};var d=e("react"),p=e("@aimpact/ailearn-app/components/ui"),f=e("pragmate-ui/image"),g=e("./actions"),h=e("./context"),C=e("@aimpact/chat/shared/hooks"),v=e("beyond_context")}}),h.set("./modals/confirm",{hash:3279452274,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ConfirmRefinementModal=function({show:e,onConfirm:t}){const a=(0,c.useModuleContext)().texts,[,n]=r.default.useState(!1);var o;return e?(o={confirm:{variant:"primary",label:a.actions.confirm},cancel:{label:a.actions.cancel,variant:"primary",bordered:!0}},r.default.createElement(i.ConfirmModal,{onConfirm:t,onCancel:e=()=>n(!1),actions:o,show:!0,title:a.confirm.title,text:a.confirm.subtitle})):null};var r=e("react"),i=e("pragmate-ui/modal"),c=e("../context")}}),h.set("./modals/refinement-modal",{hash:878246538,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RefinementModal=function({show:e,confirm:t,onClose:a}){const{suggestions:n,title:o,description:r,setImage:i,onGenerate:c,texts:l}=(0,w.useModuleContext)(),[u,s]=b.default.useState(!1),[m,d]=b.default.useState(),[p,f]=b.default.useState(n??""),[g,h]=b.default.useState(!1),C={onChange:e=>f(e.currentTarget.value),onClick:async()=>{try{h(!1),s(!0);var e=await c(p);a(),i(e)}catch(e){console.error(e),d(e.message)}finally{window.setTimeout(()=>{s(!1)},100)}}},v=()=>h(!g),y=t?v:C.onClick,I=o||l.title,x=r||l.subtitle;return e?b.default.createElement(E.Modal,{show:!0,className:"refine-modal",onClose:()=>{h(!1),f(n),a()},closeBackdrop:!1},b.default.createElement("header",null,b.default.createElement("h3",null,I)),b.default.createElement("p",null,x),b.default.createElement(M.Form,null,b.default.createElement(k.ErrorRenderer,{texts:l,error:m}),b.default.createElement(M.Textarea,{name:"notes",value:p,onChange:C.onChange,placeholder:l.notes.placeholder})),b.default.createElement("footer",{className:"flex-container flex-center mt-15"},b.default.createElement(B.AIButton,{variant:"primary",onClick:y,disabled:!p},l.actions.generate)),b.default.createElement(A.ConfirmRefinementModal,{show:g,onClose:v,onConfirm:C.onClick}),b.default.createElement(_.ProcessContainer,{fetching:u},b.default.createElement(_.RotatingMessage,{time:"8000",content:l.generating}))):null};var b=e("react"),E=e("pragmate-ui/modal"),M=e("pragmate-ui/form"),_=e("@aimpact/ailearn-app/components/ui"),B=e("../ai-button"),k=e("../error-renderer"),w=e("../context"),A=e("./confirm")}}),h.set("./types",{hash:1353330430,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),g.exports.descriptor=[{im:"./ai-button",from:"AIButton",name:"AIButton"},{im:"./ai-button",from:"AIIconButton",name:"AIIconButton"},{im:"./index",from:"CoverImage",name:"CoverImage"}],g.exports.process=function({require:e,prop:t,value:a}){!e&&"AIButton"!==t||n("AIButton",e?e("./ai-button").AIButton:a),!e&&"AIIconButton"!==t||n("AIIconButton",e?e("./ai-button").AIIconButton:a),!e&&"CoverImage"!==t||n("CoverImage",e?e("./index").CoverImage:a)},n("__beyond_pkg",g),n("hmr",new function(){this.on=(e,t)=>g.hmr.on(e,t),this.off=(e,t)=>g.hmr.off(e,t)}),g.initialise(h)}}});