System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","pragmate-ui@0.1.1/components","pragmate-ui@0.1.1/list","pragmate-ui@0.1.1/modal","@aimpact/ailearn-app@0.0.46/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","framer-motion@10.18.0","pragmate-ui@0.1.1/form"],function(n,e){"use strict";var t,a,o,l,r,s,i,c,u,m,d;return n("RefinementModal",void 0),{setters:[function(e){t=e},function(e){a=e},function(e){o=e},function(e){l=e},function(e){r=e},function(e){s=e},function(e){i=e},function(e){c=e},function(e){u=e}],execute:function(){d=t.Bundle,(m=new d({module:{vspecifier:"@aimpact/ailearn-app@0.0.46/modules/management/refinament",multibundle:!0},type:"code"},e.meta.url).package()).dependencies.update([["react",a],["pragmate-ui/components",o],["pragmate-ui/list",l],["pragmate-ui/modal",r],["@aimpact/ailearn-app/components/ui",s],["@beyond-js/react-18-widgets/hooks",i],["framer-motion",c],["pragmate-ui/form",u]]),(d=new Map).set("./context",{hash:3667319482,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModalContext=t.ModalContext=void 0;var a=e("react");const n=t.ModalContext=a.default.createContext({});t.useModalContext=()=>a.default.useContext(n)}}),d.set("./examples",{hash:986637339,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SuggestionExamples=function(){const{texts:t,setView:a,setNotes:n,examples:e}=(0,s.useModalContext)(),[,,]=o.default.useState(null);return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"modal__content--justified"},o.default.createElement("h3",null,t.examples.title),o.default.createElement(r.List,{className:"modal__list--options-selection",items:e.items,control:({item:e})=>{return o.default.createElement("li",{className:"list__item"},o.default.createElement("span",null,e),o.default.createElement("div",null,o.default.createElement(l.Button,{bordered:!0,variant:"primary",onClick:()=>{n(e),a("suggestions")}},t.actions.select)))}}),o.default.createElement("div",{className:"flex-container flex-end mt-30"},o.default.createElement("div",{className:"modal__actions"},o.default.createElement(l.Button,{variant:"default",onClick:()=>a("selection")},t.actions.back)))))};var o=e("react"),l=e("pragmate-ui/components"),r=e("pragmate-ui/list"),s=e("./context")}}),d.set("./index",{hash:4092307453,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RefinementModal=function({title:e,description:t,show:a,onClose:n,onGenerate:o}){const[l,r]=p.default.useState(!1),[s,i]=p.default.useState(""),[c,u]=p.default.useState("suggestions"),[m,d]=(0,h.useTexts)(v.module.specifier);if(!a||!m)return null;var a={suggestions:_.SuggestionsForm,examples:M.SuggestionExamples},a=a[c],f=()=>{i(""),u("suggestions"),n()},e={view:c,texts:{...d,title:e,description:t},onGenerate:async()=>{try{if(r(!0),!o)throw Error("No callback provided");await o({notes:s}),n()}catch(e){console.error(e)}finally{r(!1)}},setView:u,notes:s,setNotes:i};return p.default.createElement(C.ModalContext.Provider,{value:e},p.default.createElement(g.Modal,{show:!0,onClose:f,closeBackdrop:!1},p.default.createElement(E.AnimatePresence,null,p.default.createElement(a,{key:"control-view"+c}),p.default.createElement(x.ProcessContainer,{fetching:l,key:"control-container-"+c}))))};var p=e("react"),g=e("pragmate-ui/modal"),x=e("@aimpact/ailearn-app/components/ui"),h=e("@beyond-js/react-18-widgets/hooks"),v=e("beyond_context"),E=e("framer-motion"),_=e("./suggestions"),C=e("./context"),M=e("./examples")}}),d.set("./suggestions",{hash:2345315582,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SuggestionsForm=function(){const{setView:e,notes:t,setNotes:a,onGenerate:n,texts:o}=(0,m.useModalContext)(),[l,,]=s.default.useState(!1),r={onChange:e=>{a(e.currentTarget.value)},onClick:n,setView:()=>e("examples"),onBack:()=>e("suggestions")};return s.default.createElement(s.default.Fragment,null,s.default.createElement(i.Form,{className:"modal__content--justified"},s.default.createElement("header",null,s.default.createElement("h3",null,o.title),s.default.createElement("p",null,o.description)),s.default.createElement(i.Textarea,{label:o.textarea.label,name:"observations",value:t,onChange:r.onChange,placeholder:o.textarea.placeholder})),s.default.createElement("footer",{className:"actions"},s.default.createElement(u.Button,{variant:"primary",onClick:r.onClick},o.actions.generate)),s.default.createElement(c.ProcessContainer,{fetching:l}))};var s=e("react"),i=e("pragmate-ui/form"),c=e("@aimpact/ailearn-app/components/ui"),u=e("pragmate-ui/components"),m=e("./context")}}),m.exports.descriptor=[{im:"./index",from:"RefinementModal",name:"RefinementModal"}],m.exports.process=function({require:e,prop:t,value:a}){!e&&"RefinementModal"!==t||n("RefinementModal",e?e("./index").RefinementModal:a)},n("__beyond_pkg",m),n("hmr",new function(){this.on=(e,t)=>m.hmr.on(e,t),this.off=(e,t)=>m.hmr.off(e,t)}),m.initialise(d)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi90cy9leGFtcGxlcy50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3N1Z2dlc3Rpb25zLnRzeCJdLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kYWxDb250ZXh0IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsInRleHRzIiwic2V0VmlldyIsInNldE5vdGVzIiwiZXhhbXBsZXMiLCJfY29udGV4dCIsInVzZVN0YXRlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJfbGlzdCIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJJdGVtIiwiaXRlbSIsIl9jb21wb25lbnRzIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJ2YXJpYW50Iiwib25DbGljayIsImFjdGlvbnMiLCJzZWxlY3QiLCJvbkJhY2siLCJiYWNrIiwiZGVzY3JpcHRpb24iLCJzaG93Iiwib25DbG9zZSIsIm9uR2VuZXJhdGUiLCJjYWxsYmFjayIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJub3RlcyIsInZpZXciLCJ0ZXh0c1JlYWR5IiwiX2hvb2tzIiwidXNlVGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJjb250cm9scyIsInN1Z2dlc3Rpb25zIiwiX3N1Z2dlc3Rpb25zIiwiU3VnZ2VzdGlvbnNGb3JtIiwiX2V4YW1wbGVzIiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwiQ29udHJvbCIsImhhbmRsZUNMb3NlIiwiY29udGV4dFZhbHVlIiwiYXN5bmMiLCJFcnJvciIsImF3YWl0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIlByb3ZpZGVyIiwidmFsdWUiLCJfbW9kYWwiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwia2V5IiwiX3VpIiwiUHJvY2Vzc0NvbnRhaW5lciIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiX2Zvcm0iLCJGb3JtIiwiVGV4dGFyZWEiLCJsYWJlbCIsInRleHRhcmVhIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiZ2VuZXJhdGUiXSwibWFwcGluZ3MiOiJ5a0NBQUEsSUFBQUEsRUFBQUMsRUFBQSxPQUFBLEVBYU8sTUFBTUMsRUFBWUMsRUFBQUQsYUFBR0YsRUFBQUksUUFBTUMsY0FBYyxFQUF3QixFQUNKRixFQUFBRyxnQkFBckNBLElBQU1OLEVBQUFJLFFBQU1HLFdBQVdMLENBQVksQyxtSUNQNUQsV0FDTCxLQUFNLENBQUVNLE1BQUFBLEVBQU9DLFFBQUFBLEVBQVNDLFNBQUFBLEVBQVVDLFNBQUFBLENBQVEsR0FBSyxFQUFBQyxFQUFBTixpQkFBZSxFQUN4RCxDQUFBLENBQUEsR0FBMEJOLEVBQUFJLFFBQU1TLFNBQVMsSUFBSSxFQW1CbkQsT0FDQ2IsRUFBQUksUUFBQVUsY0FBQWQsRUFBQUksUUFBQVcsU0FBQSxLQUNDZixFQUFBSSxRQUFBVSxjQUFBLE1BQUEsQ0FBS0UsVUFBVSwyQkFBMkIsRUFDekNoQixFQUFBSSxRQUFBVSxjQUFBLEtBQUEsS0FBS04sRUFBTUcsU0FBU00sS0FBSyxFQUN6QmpCLEVBQUFJLFFBQUFVLGNBQUNJLEVBQUFDLEtBQUksQ0FBQ0gsVUFBVSxpQ0FBaUNJLE1BQU9ULEVBQVNTLE1BQU9DLFFBcEI5REMsQ0FBQUEsQ0FBR0MsS0FBQUEsQ0FBTSxLQUtyQixPQUNDdkIsRUFBQUksUUFBQVUsY0FBQSxLQUFBLENBQUlFLFVBQVUsWUFBWSxFQUN6QmhCLEVBQUFJLFFBQUFVLGNBQUEsT0FBQSxLQUFPUyxDQUFJLEVBQ1h2QixFQUFBSSxRQUFBVSxjQUFBLE1BQUEsS0FDQ2QsRUFBQUksUUFBQVUsY0FBQ1UsRUFBQUMsT0FBTSxDQUFDQyxTQUFRLENBQUEsRUFBQ0MsUUFBUSxVQUFVQyxRQVJ0QkEsS0FDZmxCLEVBQVNhLENBQUksRUFDYmQsRUFBUSxhQUFh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