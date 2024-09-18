System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","pragmate-ui@1.0.0-beta.6/components","pragmate-ui@1.0.0-beta.6/list","pragmate-ui@1.0.0-beta.6/modal","@aimpact/ailearn-app@0.1.7/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","framer-motion@10.18.0","@aimpact/ailearn-app@0.1.7/main-layout.widget","pragmate-ui@1.0.0-beta.6/form"],function(n,e){"use strict";var t,a,o,r,l,s,i,u,c,d,m,f;return n("RefinementModal",void 0),{setters:[function(e){t=e},function(e){a=e},function(e){o=e},function(e){r=e},function(e){l=e},function(e){s=e},function(e){i=e},function(e){u=e},function(e){c=e},function(e){d=e}],execute:function(){f=t.Bundle,(m=new f({module:{vspecifier:"@aimpact/ailearn-app@0.1.7/modules/management/refinament",multibundle:!0},type:"code"},e.meta.url).package()).dependencies.update([["react",a],["pragmate-ui/components",o],["pragmate-ui/list",r],["pragmate-ui/modal",l],["@aimpact/ailearn-app/components/ui",s],["@beyond-js/react-18-widgets/hooks",i],["framer-motion",u],["@aimpact/ailearn-app/main-layout.widget",c],["pragmate-ui/form",d]]),(f=new Map).set("./context",{hash:1819021868,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModalContext=t.ModalContext=void 0;var a=e("react");const n=t.ModalContext=a.default.createContext({});t.useModalContext=()=>a.default.useContext(n)}}),f.set("./examples",{hash:986637339,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SuggestionExamples=function(){const{texts:t,setView:a,setNotes:n,examples:e}=(0,s.useModalContext)(),[,,]=o.default.useState(null);return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"modal__content--justified"},o.default.createElement("h3",null,t.examples.title),o.default.createElement(l.List,{className:"modal__list--options-selection",items:e.items,control:({item:e})=>o.default.createElement("li",{className:"list__item"},o.default.createElement("span",null,e),o.default.createElement("div",null,o.default.createElement(r.Button,{bordered:!0,variant:"primary",onClick:()=>{n(e),a("suggestions")}},t.actions.select)))}),o.default.createElement("div",{className:"flex-container flex-end mt-30"},o.default.createElement("div",{className:"modal__actions"},o.default.createElement(r.Button,{variant:"default",onClick:()=>a("selection")},t.actions.back)))))};var o=e("react"),r=e("pragmate-ui/components"),l=e("pragmate-ui/list"),s=e("./context")}}),f.set("./index",{hash:2510269501,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RefinementModal=function(e){const{owner:t,title:a,value:n,onConsume:o,description:r,required:l,globalTexts:s,show:i,onClose:u,onGenerate:c}=e,[d,m]=y.default.useState(!1),[f,p]=y.default.useState(n??""),[g,x]=y.default.useState(0<P.LayoutBroker.model.credits?.available?"suggestions":"credits"),[v,C]=y.default.useState(),[h,E]=((0,M.useBinder)([P.LayoutBroker.model],()=>{x(0<P.LayoutBroker.model?.credits?.available?"suggestions":"credits")},"credits.change"),(0,M.useTexts)(k.module.specifier));var b;return i&&h?(e={credits:R.RequestCreditsContainer,suggestions:j.SuggestionsForm,examples:N.SuggestionExamples},e=0<P.LayoutBroker.model?.credits?.available?e[g]:e.credits,b={view:g,owner:t,onConsume:o,error:v,onClose:u,texts:{...E,title:a,description:r},onGenerate:async()=>{try{if(!l||""!==f&&f){if(m(!0),!c)throw Error("No callback provided");var e=await c({notes:f});e.error?C(E.errors[e.error]??E.errors.default):u()}else C("Please provide a description")}catch(e){console.error(e)}finally{m(!1)}},setView:x,globalTexts:s,notes:f,setNotes:p},y.default.createElement(B.ModalContext.Provider,{value:b},y.default.createElement(_.Modal,{show:!0,onClose:()=>{p(""),x("suggestions"),u()},closeBackdrop:!1},y.default.createElement(S.AnimatePresence,null,y.default.createElement(e,{key:"control-view"+g}),y.default.createElement(w.ProcessContainer,{fetching:d,key:"control-container-"+g}))))):null};var y=e("react"),_=e("pragmate-ui/modal"),w=e("@aimpact/ailearn-app/components/ui"),M=e("@beyond-js/react-18-widgets/hooks"),k=e("beyond_context"),S=e("framer-motion"),j=e("./suggestions"),B=e("./context"),N=e("./examples"),R=e("./request-credits"),P=e("@aimpact/ailearn-app/main-layout.widget")}}),f.set("./request-credits",{hash:3994175140,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RequestCreditsContainer=function(){var{onClose:e,owner:t,onConsume:a,globalTexts:n}=(0,l.useModalContext)();return o.default.createElement(o.default.Fragment,null,o.default.createElement(r.RequestCreditsForm,{onConsume:a,owner:t,onClose:e,onCancel:e,globalTexts:n,onSuccess:()=>""}))};var o=e("react"),r=e("@aimpact/ailearn-app/components/ui"),l=e("./context")}}),f.set("./suggestions",{hash:4230355763,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SuggestionsForm=function(){const{setView:e,notes:t,setNotes:a,onGenerate:n,texts:o,error:r}=(0,m.useModalContext)(),[l,,]=i.default.useState(!1),s={onChange:e=>{a(e.currentTarget.value)},onClick:n,setView:()=>e("examples"),onBack:()=>e("suggestions")};return i.default.createElement(i.default.Fragment,null,i.default.createElement(u.Form,{className:"modal__content--justified"},i.default.createElement("header",null,i.default.createElement("h3",null,o.title),i.default.createElement("p",null,o.description)),i.default.createElement(c.ErrorRenderer,{error:r}),i.default.createElement(u.Textarea,{label:o.textarea.label,name:"observations",value:t,onChange:s.onChange,placeholder:o.textarea.placeholder})),i.default.createElement("footer",{className:"actions"},i.default.createElement(d.Button,{variant:"primary",onClick:s.onClick},o.actions.generate)),i.default.createElement(c.ProcessContainer,{fetching:l}))};var i=e("react"),u=e("pragmate-ui/form"),c=e("@aimpact/ailearn-app/components/ui"),d=e("pragmate-ui/components"),m=e("./context")}}),m.exports.descriptor=[{im:"./index",from:"RefinementModal",name:"RefinementModal"}],m.exports.process=function({require:e,prop:t,value:a}){!e&&"RefinementModal"!==t||n("RefinementModal",e?e("./index").RefinementModal:a)},n("__beyond_pkg",m),n("hmr",new function(){this.on=(e,t)=>m.hmr.on(e,t),this.off=(e,t)=>m.hmr.off(e,t)}),m.initialise(f)}}});