System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","pragmate-ui@0.1.1/icons","@aimpact/ailearn-app@0.0.43/components/icons","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.43/coins-layout.widget","pragmate-ui@0.1.1/modal","pragmate-ui@0.1.1/form","pragmate-ui@0.1.1/image","pragmate-ui@0.1.1/alert","@aimpact/ailearn-app@0.0.43/components/ui","@aimpact/chat@1.0.1/shared/hooks","@beyond-js/kernel@0.1.9/styles"],function(n,e){"use strict";var t,a,o,r,i,c,l,u,s,m,d,f,p,g,h;return n({AIButton:void 0,AIIconButton:void 0,CoverImage:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){o=e},function(e){r=e},function(e){i=e},function(e){c=e},function(e){l=e},function(e){u=e},function(e){s=e},function(e){m=e},function(e){d=e},function(e){f=e},function(e){p=e}],execute:function(){h=t.Bundle,(g=new h({module:{vspecifier:"@aimpact/ailearn-app@0.0.43/components/cover-image",multibundle:!0},type:"code"},e.meta.url).package()).dependencies.update([["react",a],["pragmate-ui/icons",o],["@aimpact/ailearn-app/components/icons",r],["pragmate-ui/components",i],["@aimpact/ailearn-app/coins-layout.widget",c],["pragmate-ui/modal",l],["pragmate-ui/form",u],["pragmate-ui/image",s],["pragmate-ui/alert",m],["@aimpact/ailearn-app/components/ui",d],["@aimpact/chat/shared/hooks",f],["@beyond-js/kernel/styles",p]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.43/components/cover-image.code"),(h=new Map).set("./actions",{hash:1327964753,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoverImageActions=function({}){const e=(0,m.useModuleContext)()["picture"],[t,a]=c.default.useState(!1),[n,o]=c.default.useState(!1),r=e=>{e?.stopPropagation(),a(!t)},i=e=>{e?.stopPropagation(),o(!n)};return c.default.createElement(c.default.Fragment,null,c.default.createElement("figcaption",{className:"actions"},c.default.createElement(u.AppIconButton,{variant:"primary",className:"circle",onClick:r,icon:"aiStars"}),c.default.createElement(l.IconButton,{disabled:!e,variant:"primary",className:"circle",icon:"eye",onClick:i})),c.default.createElement(d.DisplayPicture,{show:n,onClose:i}),c.default.createElement(s.RefinementModal,{show:t,confirm:!!e,onClose:r}))};var c=e("react"),l=e("pragmate-ui/icons"),u=e("@aimpact/ailearn-app/components/icons"),s=e("./modals/refinement-modal"),m=e("./context"),d=e("./display")}}),h.set("./ai-button",{hash:3669703153,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AIButton=function({children:e,onClick:t,...a}){var n=()=>l.LayoutBroker.ensureCredits(t);return o.default.createElement(i.Button,{...a,icon:r.ICONS.aiStars,onClick:n},e)},t.AIIconButton=function({children:e,onClick:t,...a}){var n=()=>l.LayoutBroker.ensureCredits(t);return o.default.createElement(c.IconButton,{...a,icon:r.ICONS.aiStars,onClick:n},e)};var o=e("react"),r=e("@aimpact/ailearn-app/components/icons"),i=e("pragmate-ui/components"),c=e("pragmate-ui/icons"),l=e("@aimpact/ailearn-app/coins-layout.widget")}}),h.set("./context",{hash:3990638724,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");const n=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(n)}}),h.set("./display",{hash:1991588045,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DisplayPicture=function({show:e,onClose:t}){var a=(0,i.useModuleContext)()["picture"];return!!e&&n.default.createElement(o.Modal,{show:!0,className:"refine-modal refine-modal--visualization",onClose:t},n.default.createElement(r.Image,{className:"portrait-view",src:a}))};var n=e("react"),o=e("pragmate-ui/modal"),r=e("pragmate-ui/image"),i=e("./context")}}),h.set("./error-renderer",{hash:4166111875,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorRenderer=function({texts:e,error:t}){if(!t)return null;t=e[t]||e.default;return a.default.createElement(n.Alert,{type:"error"},t)};var a=e("react"),n=e("pragmate-ui/alert")}}),h.set("./index",{hash:849537479,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoverImage=function({title:e,description:t,picture:a,entity:n,type:o,suggestions:r,onGenerate:i}){const[c,l]=p.default.useState(a),[u,s]=p.default.useState(!1),[m,d]=(0,C.useTexts)(y.module.specifier),f=p.default.useMemo(()=>({picture:c,setImage:l,title:e,description:t,fetching:u,suggestions:r,setFetching:s,onGenerate:i,texts:d}),[a,m]);return m?p.default.createElement(v.ModuleContext.Provider,{value:f},p.default.createElement("div",{className:"cover-image__container"},p.default.createElement(g.EntityImage,{type:o,src:a,entity:n,className:"rounded circle"}),p.default.createElement(h.CoverImageActions,null),p.default.createElement(g.ProcessContainer,{fetching:u}))):p.default.createElement("div",{className:"cover-image-skeleton"})};var p=e("react"),g=e("@aimpact/ailearn-app/components/ui"),h=e("./actions"),v=e("./context"),C=e("@aimpact/chat/shared/hooks"),y=e("beyond_context")}}),h.set("./modals/confirm",{hash:3279452274,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ConfirmRefinementModal=function({show:e,onConfirm:t}){const a=(0,c.useModuleContext)()["texts"],[,n]=r.default.useState(!1);if(!e)return null;var e=()=>n(!1),o={confirm:{variant:"primary",label:a.actions.confirm},cancel:{label:a.actions.cancel,variant:"primary",bordered:!0}};return r.default.createElement(i.ConfirmModal,{onConfirm:t,onCancel:e,actions:o,show:!0,title:a.confirm.title,text:a.confirm.subtitle})};var r=e("react"),i=e("pragmate-ui/modal"),c=e("../context")}}),h.set("./modals/refinement-modal",{hash:2772671465,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RefinementModal=function({show:e,confirm:t,onClose:a}){const{suggestions:n,title:o,description:r,setImage:i,onGenerate:c,texts:l}=(0,w.useModuleContext)(),[u,s]=E.default.useState(!1),[m,d]=E.default.useState(),[f,p]=E.default.useState(n??""),[g,h]=E.default.useState(!1),v={onChange:e=>p(e.currentTarget.value),onClick:async()=>{try{h(!1),s(!0);var e=await c(f);a(),i(e)}catch(e){d(e.message)}finally{window.setTimeout(()=>{s(!1)},100)}}},C=()=>h(!g),y=t?C:v.onClick,I=o||l.title,x=r||l.subtitle;return e?E.default.createElement(b.Modal,{show:!0,className:"refine-modal",onClose:()=>{h(false),p(n),a()},closeBackdrop:!1},E.default.createElement("header",null,E.default.createElement("h3",null,I)),E.default.createElement("p",null,x),E.default.createElement(M.Form,null,E.default.createElement(B.ErrorRenderer,{texts:l.errors,error:m}),E.default.createElement(M.Textarea,{name:"notes",value:f,onChange:v.onChange,placeholder:l.notes.placeholder})),E.default.createElement("footer",{className:"flex-container flex-center mt-15"},E.default.createElement(k.AIButton,{variant:"primary",onClick:y,disabled:!f},l.actions.generate)),E.default.createElement(A.ConfirmRefinementModal,{show:g,onClose:C,onConfirm:v.onClick}),E.default.createElement(_.ProcessContainer,{fetching:u})):null};var E=e("react"),b=e("pragmate-ui/modal"),M=e("pragmate-ui/form"),_=e("@aimpact/ailearn-app/components/ui"),k=e("../ai-button"),B=e("../error-renderer"),w=e("../context"),A=e("./confirm")}}),h.set("./types",{hash:866614475,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),g.exports.descriptor=[{im:"./ai-button",from:"AIButton",name:"AIButton"},{im:"./ai-button",from:"AIIconButton",name:"AIIconButton"},{im:"./index",from:"CoverImage",name:"CoverImage"}],g.exports.process=function({require:e,prop:t,value:a}){!e&&"AIButton"!==t||n("AIButton",e?e("./ai-button").AIButton:a),!e&&"AIIconButton"!==t||n("AIIconButton",e?e("./ai-button").AIIconButton:a),!e&&"CoverImage"!==t||n("CoverImage",e?e("./index").CoverImage:a)},n("__beyond_pkg",g),n("hmr",new function(){this.on=(e,t)=>g.hmr.on(e,t),this.off=(e,t)=>g.hmr.off(e,t)}),g.initialise(h)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2Rpc3BsYXkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbW9kYWxzL2NvbmZpcm0udHN4IiwiL3RzL21vZGFscy9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90eXBlcy50cyJdLCJuYW1lcyI6WyJwaWN0dXJlIiwiX2NvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJfcmVhY3QiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzaG93RGlzcGxheVBpY3R1cmUiLCJzZXRTaG93RGlzcGxheVBpY3R1cmUiLCJ0b2dnbGVNb2RhbCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlRGlzcGxheVBpY3R1cmUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJfaWNvbnMyIiwiQXBwSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiaWNvbiIsIl9pY29ucyIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIl9kaXNwbGF5IiwiRGlzcGxheVBpY3R1cmUiLCJzaG93Iiwib25DbG9zZSIsIl9yZWZpbmVtZW50TW9kYWwiLCJSZWZpbmVtZW50TW9kYWwiLCJjb25maXJtIiwicmVxdWlyZSIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIl9jb2luc0xheW91dCIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJfY29tcG9uZW50cyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJNb2RhbCIsIl9pbWFnZSIsIkltYWdlIiwic3JjIiwidGV4dHMiLCJlcnJvciIsIm1lc3NhZ2UiLCJfYWxlcnQiLCJBbGVydCIsInR5cGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZW50aXR5Iiwic3VnZ2VzdGlvbnMiLCJvbkdlbmVyYXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwiX2hvb2tzIiwidXNlVGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInVzZU1lbW8iLCJQcm92aWRlciIsIl91aSIsIkVudGl0eUltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlQWN0aW9ucyIsIlByb2Nlc3NDb250YWluZXIiLCJvbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsIm9uQ2FuY2VsIiwiYWN0aW9ucyIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJDb25maXJtTW9kYWwiLCJ0ZXh0Iiwic3VidGl0bGUiLCJzZXRFcnJvciIsIm5vdGVzIiwic2V0Tm90ZXMiLCJvcGVuQ29uZmlybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImFzeW5jIiwiYXdhaXQiLCJlIiwid2luZG93Iiwic2V0VGltZW91dCIsInRvZ2dsZUNvbmZpcm0iLCJvbkNsaWNrQWN0aW9uIiwidGl0bGVMYWJlbCIsImRlc2NyaXB0aW9uTGFiZWwiLCJoYW5kbGVDbG9zZSIsImNsb3NlQmFja2Ryb3AiLCJfZm9ybSIsIkZvcm0iLCJfZXJyb3JSZW5kZXJlciIsIkVycm9yUmVuZGVyZXIiLCJlcnJvcnMiLCJUZXh0YXJlYSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIl9haUJ1dHRvbiIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfY29uZmlybSIsIkNvbmZpcm1SZWZpbmVtZW50TW9kYWwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6ImlqREFPTSxTQUE0QixJQUNqQyxNQUFRQSxHQUFZLEVBQUFDLEVBQUFDLGtCQUFnQixFQUE1QkYsV0FDRixDQUFDRyxFQUFXQyxHQUF3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