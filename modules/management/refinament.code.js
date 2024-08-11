System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","pragmate-ui@1.0.0-beta.1/components","pragmate-ui@1.0.0-beta.1/list","pragmate-ui@1.0.0-beta.1/modal","@aimpact/ailearn-app@0.1.5-test.03/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","framer-motion@10.18.0","pragmate-ui@1.0.0-beta.1/form"],function(n,e){var t,a,o,l,r,i,s,u,c,m,d;return n("RefinementModal",void 0),{setters:[function(e){t=e},function(e){a=e},function(e){o=e},function(e){l=e},function(e){r=e},function(e){i=e},function(e){s=e},function(e){u=e},function(e){c=e}],execute:function(){d=t.Bundle,(m=new d({module:{vspecifier:"@aimpact/ailearn-app@0.1.5-test.03/modules/management/refinament",multibundle:!0},type:"code"},e.meta.url).package()).dependencies.update([["react",a],["pragmate-ui/components",o],["pragmate-ui/list",l],["pragmate-ui/modal",r],["@aimpact/ailearn-app/components/ui",i],["@beyond-js/react-18-widgets/hooks",s],["framer-motion",u],["pragmate-ui/form",c]]),(d=new Map).set("./context",{hash:3667319482,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModalContext=t.ModalContext=void 0;var a=e("react");let n=t.ModalContext=a.default.createContext({});t.useModalContext=()=>a.default.useContext(n)}}),d.set("./examples",{hash:986637339,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SuggestionExamples=function(){let{texts:t,setView:a,setNotes:n,examples:e}=(0,i.useModalContext)(),[,,]=o.default.useState(null);return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"modal__content--justified"},o.default.createElement("h3",null,t.examples.title),o.default.createElement(r.List,{className:"modal__list--options-selection",items:e.items,control:({item:e})=>o.default.createElement("li",{className:"list__item"},o.default.createElement("span",null,e),o.default.createElement("div",null,o.default.createElement(l.Button,{bordered:!0,variant:"primary",onClick:()=>{n(e),a("suggestions")}},t.actions.select)))}),o.default.createElement("div",{className:"flex-container flex-end mt-30"},o.default.createElement("div",{className:"modal__actions"},o.default.createElement(l.Button,{variant:"default",onClick:()=>a("selection")},t.actions.back)))))};var o=e("react"),l=e("pragmate-ui/components"),r=e("pragmate-ui/list"),i=e("./context")}}),d.set("./index",{hash:4092307453,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RefinementModal=function({title:e,description:t,show:a,onClose:n,onGenerate:o}){let[l,r]=f.default.useState(!1),[i,s]=f.default.useState(""),[u,c]=f.default.useState("suggestions"),[m,d]=(0,x.useTexts)(h.module.specifier);return a&&m?(a=(a={suggestions:E.SuggestionsForm,examples:_.SuggestionExamples})[u],e={view:u,texts:{...d,title:e,description:t},onGenerate:async()=>{try{if(r(!0),!o)throw Error("No callback provided");await o({notes:i}),n()}catch(e){console.error(e)}finally{r(!1)}},setView:c,notes:i,setNotes:s},f.default.createElement(b.ModalContext.Provider,{value:e},f.default.createElement(p.Modal,{show:!0,onClose:()=>{s(""),c("suggestions"),n()},closeBackdrop:!1},f.default.createElement(v.AnimatePresence,null,f.default.createElement(a,{key:"control-view"+u}),f.default.createElement(g.ProcessContainer,{fetching:l,key:"control-container-"+u}))))):null};var f=e("react"),p=e("pragmate-ui/modal"),g=e("@aimpact/ailearn-app/components/ui"),x=e("@beyond-js/react-18-widgets/hooks"),h=e("beyond_context"),v=e("framer-motion"),E=e("./suggestions"),b=e("./context"),_=e("./examples")}}),d.set("./suggestions",{hash:458589364,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SuggestionsForm=function(){let{setView:e,notes:t,setNotes:a,onGenerate:n,texts:o}=(0,m.useModalContext)(),[l,,]=i.default.useState(!1),r={onChange:e=>{a(e.currentTarget.value)},onClick:n,setView:()=>e("examples"),onBack:()=>e("suggestions")};return i.default.createElement(i.default.Fragment,null,i.default.createElement(s.Form,{className:"modal__content--justified"},i.default.createElement("header",null,i.default.createElement("h3",null,o.title),i.default.createElement("p",null,o.description)),i.default.createElement(s.Textarea,{label:o.textarea.label,name:"observations",value:t,onChange:r.onChange,placeholder:o.textarea.placeholder})),i.default.createElement("footer",{className:"actions"},i.default.createElement(c.Button,{variant:"primary",onClick:r.onClick},o.actions.generate)),i.default.createElement(u.ProcessContainer,{fetching:l}))};var i=e("react"),s=e("pragmate-ui/form"),u=e("@aimpact/ailearn-app/components/ui"),c=e("pragmate-ui/components"),m=e("./context")}}),m.exports.descriptor=[{im:"./index",from:"RefinementModal",name:"RefinementModal"}],m.exports.process=function({require:e,prop:t,value:a}){!e&&"RefinementModal"!==t||n("RefinementModal",e?e("./index").RefinementModal:a)},n("__beyond_pkg",m),n("hmr",new function(){this.on=(e,t)=>m.hmr.on(e,t),this.off=(e,t)=>m.hmr.off(e,t)}),m.initialise(d)}}});