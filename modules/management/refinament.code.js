System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","pragmate-ui@1.0.0-beta.2/components","pragmate-ui@1.0.0-beta.2/list","pragmate-ui@1.0.0-beta.2/modal","@aimpact/ailearn-app@0.1.6-dev.17/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","framer-motion@10.18.0","@aimpact/ailearn-app@0.1.6-dev.17/main-layout.widget","pragmate-ui@1.0.0-beta.2/form"],function(n,e){var t,a,o,l,r,i,s,u,c,d,m,f;return n("RefinementModal",void 0),{setters:[function(e){t=e},function(e){a=e},function(e){o=e},function(e){l=e},function(e){r=e},function(e){i=e},function(e){s=e},function(e){u=e},function(e){c=e},function(e){d=e}],execute:function(){f=t.Bundle,(m=new f({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.17/modules/management/refinament",multibundle:!0},type:"code"},e.meta.url).package()).dependencies.update([["react",a],["pragmate-ui/components",o],["pragmate-ui/list",l],["pragmate-ui/modal",r],["@aimpact/ailearn-app/components/ui",i],["@beyond-js/react-18-widgets/hooks",s],["framer-motion",u],["@aimpact/ailearn-app/main-layout.widget",c],["pragmate-ui/form",d]]),(f=new Map).set("./context",{hash:1819021868,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModalContext=t.ModalContext=void 0;var a=e("react");let n=t.ModalContext=a.default.createContext({});t.useModalContext=()=>a.default.useContext(n)}}),f.set("./examples",{hash:986637339,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SuggestionExamples=function(){let{texts:t,setView:a,setNotes:n,examples:e}=(0,i.useModalContext)(),[,,]=o.default.useState(null);return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"modal__content--justified"},o.default.createElement("h3",null,t.examples.title),o.default.createElement(r.List,{className:"modal__list--options-selection",items:e.items,control:({item:e})=>o.default.createElement("li",{className:"list__item"},o.default.createElement("span",null,e),o.default.createElement("div",null,o.default.createElement(l.Button,{bordered:!0,variant:"primary",onClick:()=>{n(e),a("suggestions")}},t.actions.select)))}),o.default.createElement("div",{className:"flex-container flex-end mt-30"},o.default.createElement("div",{className:"modal__actions"},o.default.createElement(l.Button,{variant:"default",onClick:()=>a("selection")},t.actions.back)))))};var o=e("react"),l=e("pragmate-ui/components"),r=e("pragmate-ui/list"),i=e("./context")}}),f.set("./index",{hash:3767172514,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RefinementModal=function(e){let{owner:t,title:a,onConsume:n,description:o,required:l,globalTexts:r,show:i,onClose:s,onGenerate:u}=e,[c,d]=b.default.useState(!1),[m,f]=b.default.useState(""),[p,g]=b.default.useState(0<R.LayoutBroker.model.credits?.available?"suggestions":"credits"),[x,v]=b.default.useState(),[C,h]=((0,w.useBinder)([R.LayoutBroker.model],()=>{g(0<R.LayoutBroker.model?.credits?.available?"suggestions":"credits")},"credits.change"),(0,w.useTexts)(M.module.specifier));var E;return i&&C?(e={credits:N.RequestCreditsContainer,suggestions:S.SuggestionsForm,examples:B.SuggestionExamples},e=0<R.LayoutBroker.model?.credits?.available?e[p]:e.credits,E={view:p,owner:t,onConsume:n,error:x,onClose:s,texts:{...h,title:a,description:o},onGenerate:async()=>{try{if(!l||""!==m&&m){if(d(!0),!u)throw Error("No callback provided");await u({notes:m}),s()}else v("Please provide a description")}catch(e){console.error(e)}finally{d(!1)}},setView:g,globalTexts:r,notes:m,setNotes:f},b.default.createElement(j.ModalContext.Provider,{value:E},b.default.createElement(y.Modal,{show:!0,onClose:()=>{f(""),g("suggestions"),s()},closeBackdrop:!1},b.default.createElement(k.AnimatePresence,null,b.default.createElement(e,{key:"control-view"+p}),b.default.createElement(_.ProcessContainer,{fetching:c,key:"control-container-"+p}))))):null};var b=e("react"),y=e("pragmate-ui/modal"),_=e("@aimpact/ailearn-app/components/ui"),w=e("@beyond-js/react-18-widgets/hooks"),M=e("beyond_context"),k=e("framer-motion"),S=e("./suggestions"),j=e("./context"),B=e("./examples"),N=e("./request-credits"),R=e("@aimpact/ailearn-app/main-layout.widget")}}),f.set("./request-credits",{hash:3994175140,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RequestCreditsContainer=function(){var{onClose:e,owner:t,onConsume:a,globalTexts:n}=(0,r.useModalContext)();return o.default.createElement(o.default.Fragment,null,o.default.createElement(l.RequestCreditsForm,{onConsume:a,owner:t,onClose:e,onCancel:e,globalTexts:n,onSuccess:()=>""}))};var o=e("react"),l=e("@aimpact/ailearn-app/components/ui"),r=e("./context")}}),f.set("./suggestions",{hash:4230355763,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SuggestionsForm=function(){let{setView:e,notes:t,setNotes:a,onGenerate:n,texts:o,error:l}=(0,m.useModalContext)(),[r,,]=s.default.useState(!1),i={onChange:e=>{a(e.currentTarget.value)},onClick:n,setView:()=>e("examples"),onBack:()=>e("suggestions")};return s.default.createElement(s.default.Fragment,null,s.default.createElement(u.Form,{className:"modal__content--justified"},s.default.createElement("header",null,s.default.createElement("h3",null,o.title),s.default.createElement("p",null,o.description)),s.default.createElement(c.ErrorRenderer,{error:l}),s.default.createElement(u.Textarea,{label:o.textarea.label,name:"observations",value:t,onChange:i.onChange,placeholder:o.textarea.placeholder})),s.default.createElement("footer",{className:"actions"},s.default.createElement(d.Button,{variant:"primary",onClick:i.onClick},o.actions.generate)),s.default.createElement(c.ProcessContainer,{fetching:r}))};var s=e("react"),u=e("pragmate-ui/form"),c=e("@aimpact/ailearn-app/components/ui"),d=e("pragmate-ui/components"),m=e("./context")}}),m.exports.descriptor=[{im:"./index",from:"RefinementModal",name:"RefinementModal"}],m.exports.process=function({require:e,prop:t,value:a}){!e&&"RefinementModal"!==t||n("RefinementModal",e?e("./index").RefinementModal:a)},n("__beyond_pkg",m),n("hmr",new function(){this.on=(e,t)=>m.hmr.on(e,t),this.off=(e,t)=>m.hmr.off(e,t)}),m.initialise(f)}}});