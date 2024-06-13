System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","@beyond-js/react-18-widgets@1.1.2/base","@aimpact/ailearn-app@0.0.46.dev-20/main-layout.widget","@beyond-js/kernel@0.1.9/routing","@beyond-js/reactive@1.1.12/model","@beyond-js/kernel@0.1.9/core","@aimpact/chat@1.0.1/wrapper","@beyond-js/kernel@0.1.9/texts","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.0.46.dev-20/components/ui","pragmate-ui@0.1.1/components","@aimpact/chat-sdk@1.0.0/session","@aimpact/ailearn-app@0.0.46.dev-20/config","pragmate-ui@0.1.1/form","@aimpact/ailearn-app@0.0.46.dev-20/model/gclassroom","pragmate-ui@0.1.1/image","pragmate-ui@0.1.1/modal","pragmate-ui@0.1.1/icons"],function(n,e){"use strict";var t,a,i,r,l,s,o,c,u,d,m,p,g,f,h,y,v,b,E,x,w,_,k;return n({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){i=e},function(e){r=e},function(e){l=e},function(e){s=e},function(e){o=e},function(e){c=e},function(e){u=e},function(e){d=e},function(e){m=e},function(e){p=e},function(e){g=e},function(e){f=e},function(e){h=e},function(e){y=e},function(e){v=e},function(e){b=e},function(e){E=e},function(e){x=e},function(e){w=e}],execute:function(){k=a.Bundle,(_=new k({module:{vspecifier:"@aimpact/ailearn-app@0.0.46.dev-20/user/profile",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",i],["react",r],["@beyond-js/react-18-widgets/base",l],["@aimpact/ailearn-app/main-layout.widget",s],["@beyond-js/kernel/routing",o],["@beyond-js/reactive/model",c],["@beyond-js/kernel/core",u],["@aimpact/chat/wrapper",d],["@beyond-js/kernel/texts",m],["@beyond-js/react-18-widgets/hooks",p],["@aimpact/ailearn-app/components/ui",g],["pragmate-ui/components",f],["@aimpact/chat-sdk/session",h],["@aimpact/ailearn-app/config",y],["pragmate-ui/form",v],["@aimpact/ailearn-app/model/gclassroom",b],["pragmate-ui/image",E],["pragmate-ui/modal",x],["pragmate-ui/icons",w]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-user-profile",vspecifier:"@aimpact/ailearn-app@0.0.46.dev-20/user/profile.widget",is:"page",route:"/users/me",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.46.dev-20/user/profile.widget"),(k=new Map).set("./context",{hash:2620943352,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useProfileContext=t.ProfileContext=void 0;var a=e("react");const n=t.ProfileContext=a.default.createContext({});t.useProfileContext=()=>a.default.useContext(n)}}),k.set("./controller",{hash:1263483942,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/base"),n=e("./store"),i=e("./views"),r=e("@aimpact/ailearn-app/main-layout.widget"),l=e("@beyond-js/kernel/routing");class s extends a.ReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return i.View}show(){r.LayoutBroker.overlay=!0,r.LayoutBroker.clearModel(),r.LayoutBroker.backLink=()=>l.routing.back()}}t.Controller=s}}),k.set("./store",{hash:1852175479,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),n=e("@beyond-js/kernel/core"),i=e("@beyond-js/widgets/render"),r=e("@aimpact/chat/wrapper"),l=e("@aimpact/ailearn-app/main-layout.widget"),s=e("@beyond-js/kernel/texts"),o=e("beyond_context");class c extends a.ReactiveModel{properties=["language","accessibility","audioSpeed"];#texts=new s.CurrentTexts(o.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.#texts.on("change",this.triggerEvent);var e=[null,void 0,"undefined"].includes(localStorage.getItem("aimpact.audio.speed"))?1:localStorage.getItem("aimpact.audio.speed"),t=["dyslexia","normal"].includes(localStorage.getItem("aimpact.chat.accessibility"))?localStorage.getItem("aimpact.chat.accessibility"):"normal";this.reactiveProps(["language","accessibility","audioSpeed"]),super.ready=!0,this.language=n.languages.current,this.audioSpeed=e,this.accessibility=t,this.initialValues({accessibility:t,language:n.languages.current,audioSpeed:this.audioSpeed}),globalThis.store=this}save=()=>{this.fetching=!0,n.languages.current=this.language;var e=document.querySelector("html");return r.AppWrapper.setSettings({accessibility:this.accessibility,audioSpeed:this.audioSpeed,language:this.language}),r.AppWrapper.accessibility=this.accessibility,r.AppWrapper.audioSpeed=this.audioSpeed,r.AppWrapper.language=this.language,e.setAttribute("data-accessibility-mode",this.accessibility),localStorage.setItem("aimpact.accessibility.mode",this.accessibility),localStorage.setItem("aimpact.audio.speed",this.audioSpeed),i.widgets.attributes.add("data-accessibility-mode",this.accessibility),window.setTimeout(()=>{n.languages.current=this.language,l.LayoutBroker.overlay=!0,this.initialValues({language:n.languages.current}),this.fetching=!1},1e3),!0}}t.StoreManager=c}}),k.set("./views/audio",{hash:329133774,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AudioSettings=function(){const{texts:e,store:t}=(0,i.useProfileContext)(),[,a]=n.default.useState(1);(0,r.useBinder)([t],()=>{a(t.audioSpeed)});return n.default.createElement(n.default.Fragment,null,n.default.createElement("label",null,e.audio.title),n.default.createElement("section",{className:"audio__container field__container"},n.default.createElement("h5",{htmlFor:"audioRange"},e.audio.speed,n.default.createElement("input",{value:t.audioSpeed,name:"audioRange",onInput:e=>{t.audioSpeed=e.currentTarget.value},type:"range",max:"2",min:"0.25",step:"0.25"})),n.default.createElement("div",{className:"speed__quantity"},n.default.createElement("span",null,"0.25"),n.default.createElement("span",null,"0.50"),n.default.createElement("span",null,"0.75"),n.default.createElement("span",null,"1"),n.default.createElement("span",null,"1.25"),n.default.createElement("span",null,"1.50"),n.default.createElement("span",null,"1.75"),n.default.createElement("span",null,"2"))))};var n=e("react"),i=e("../context"),r=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./views/index",{hash:3639814685,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=u.default.useState(e.ready),[{fetching:n},i]=u.default.useState({isUnpublished:e.isUnpublished,fetching:e.fetching}),[,r]=u.default.useState(e.accessibility),l=e["texts"];if((0,d.useBinder)([e],()=>{a(e.ready),i({isUnpublished:e.isUnpublished,fetching:e.fetching}),r(e.dyslexia)}),!t)return null;var s=g.sessionWrapper.user.getProperties(),{displayName:o,email:c}=s;return u.default.createElement(u.default.Fragment,null,u.default.createElement(h.ProfileContext.Provider,{value:{store:e,texts:l,fetching:n}},u.default.createElement(m.PageContainer,{className:"profile-container"},u.default.createElement("main",null,u.default.createElement("header",{className:"profile-header"},u.default.createElement(f.default,{userProps:s}),u.default.createElement("h4",{className:"h3"},o)),u.default.createElement("div",{className:"divider-section"}),u.default.createElement("div",{className:"profile__item"},u.default.createElement("h5",null,l.email),u.default.createElement("span",null,c)),u.default.createElement(y.LanguageSelector,null),u.default.createElement(v.ModeSelection,null),u.default.createElement(b.AudioSettings,null),e.isUnpublished&&u.default.createElement(p.Button,{variant:"primary",fetching:n,onClick:e.save},l.save)),u.default.createElement("footer",{className:"app-version"},l.version,": ",E.default.version))))};var u=e("react"),d=e("@beyond-js/react-18-widgets/hooks"),m=e("@aimpact/ailearn-app/components/ui"),p=e("pragmate-ui/components"),g=e("@aimpact/chat-sdk/session"),f=e("./profile-image/ImagePicker"),h=e("../context"),y=e("./language-selector"),v=e("./mode-selection"),b=e("./audio"),E=e("@aimpact/ailearn-app/config")}}),k.set("./views/language-selector/index",{hash:2809078089,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LanguageSelector=function(){const{texts:e,store:t}=(0,l.useProfileContext)(),[,a]=i.default.useState(t.language),n=((0,s.useBinder)([t],()=>a(t.language)),e=>{t.language=e.target.value});return i.default.createElement(i.default.Fragment,null,i.default.createElement("h5",null,e.language),i.default.createElement("section",{className:"language-selector  field__container"},i.default.createElement(r.Radio,{onChange:n,checked:"en"===t.language,name:"language",value:"en",label:"English"}),i.default.createElement(r.Radio,{onChange:n,checked:"es"===t.language,name:"language",value:"es",label:"Spanish"})))};var i=e("react"),r=e("pragmate-ui/form"),l=e("../../context"),s=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./views/mode-selection",{hash:3652541598,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModeSelection=function(){const{texts:e,store:a}=(0,r.useProfileContext)(),[t,n]=i.default.useState("dyslexia"===a.accessibility);(0,l.useBinder)([a],()=>n("dyslexia"===a.accessibility));return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:" field__container"},i.default.createElement("h5",null,e.textMode),i.default.createElement("section",{className:"language-selector"},i.default.createElement(s.Checkbox,{onChange:e=>{var t="dyslexia"===a.accessibility?"normal":"dyslexia";a.accessibility=t,n("dyslexia"==t),e.preventDefault()},checked:t,name:"check",label:e.dyslexia}))))};var i=e("react"),r=e("../context"),l=e("@beyond-js/react-18-widgets/hooks"),s=e("pragmate-ui/form")}}),k.set("./views/permissions/index",{hash:805220452,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Permissions=function(){const a=(0,i.useProfileContext)()["texts"],e=[{src:"/assets/gclassroom.png",alt:"Google classroom",title:a.permissions.gclassroom.title,check:l.gclassroom.authorized,modal:!0}];return n.default.createElement("div",{className:"permissions__container"},n.default.createElement("label",null,a.permissions.title),n.default.createElement("div",{className:"permissions-items__container"},e.map((e,t)=>n.default.createElement(r.PermissionItem,{key:t,connectionValue:e,texts:a}))))};var n=e("react"),i=e("../../context"),r=e("./item"),l=e("@aimpact/ailearn-app/model/gclassroom")}}),k.set("./views/permissions/interfaces",{hash:1464281530,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),k.set("./views/permissions/item",{hash:4207650292,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PermissionItem=void 0;var r=e("react"),l=e("pragmate-ui/image"),s=e("pragmate-ui/modal"),o=e("pragmate-ui/components");t.PermissionItem=({connectionValue:a})=>{var[e,,]=r.default.useState(a.check);const[t,n]=r.default.useState(!1),i=()=>{n(!t)};return r.default.createElement("div",{className:"permission-item"},r.default.createElement(e?()=>{var e=a.src||a.icon,t=a.src?a.alt:a.title;return r.default.createElement("div",{className:"permission-menu__item admit"},r.default.createElement(l.Image,{src:e,alt:t}),r.default.createElement("span",null,a.title))}:()=>r.default.createElement("div",{className:"permission-menu__item"},r.default.createElement(o.Button,{icon:"add",variant:"primary",onClick:i,label:a.title})),null),t&&a?.modal&&r.default.createElement(s.Modal,{closeBackdrop:!1,show:!0,className:"beauty-modal",onClose:()=>{n(!t)}},r.default.createElement("ailearn-gclassroom-permissions",null)))}}}),k.set("./views/profile-image/ImagePicker",{hash:1499835956,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({userProps:e}){var[t,,]=a.default.useState(e.photoURL);return a.default.createElement("section",{className:"user-image-wrapper"},t&&a.default.createElement(n.UserImage,{src:t??"",alt:e.displayName}))};var a=e("react"),n=e("./")}}),k.set("./views/profile-image/index",{hash:2599470037,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserImage=function({src:e,alt:t}){return a.default.createElement(n.Image,{className:"user-image",src:e,alt:t})};var a=e("react"),n=e("pragmate-ui/image")}}),_.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],_.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",_),n("hmr",new function(){this.on=(e,t)=>_.hmr.on(e,t),this.off=(e,t)=>_.hmr.off(e,t)}),_.initialise(k)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXVkaW8udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZS1zZWxlY3Rvci9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kZS1zZWxlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvSW1hZ2VQaWNrZXIudHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvaW5kZXgudHN4Il0sIm5hbWVzIjpbIl9yZWFjdCIsInJlcXVpcmUiLCJQcm9maWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZVByb2ZpbGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9iYXNlIiwiX3N0b3JlIiwiX3ZpZXdzIiwiX21haW5MYXlvdXQiLCJfcm91dGluZyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCIjc3RvcmUiLCJjcmVhdGVTdG9yZSIsInRoaXMiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJjbGVhck1vZGVsIiwiYmFja0xpbmsiLCJyb3V0aW5nIiwiYmFjayIsIl9tb2RlbCIsIl9jb3JlIiwiX3JlbmRlciIsIl93cmFwcGVyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCIjdGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0ZXh0cyIsInZhbHVlIiwicmVhZHkiLCJzdXBlciIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJhdWRpb1NwZWVkIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJyZWFjdGl2ZVByb3BzIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiYWNjZXNzaWJpbGl0eSIsImluaXRpYWxWYWx1ZXMiLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJzYXZlIiwiZmV0Y2hpbmciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBcHBXcmFwcGVyIiwic2V0U2V0dGluZ3MiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiX2NvbnRleHQiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwiX2hvb2tzIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiYXVkaW8iLCJ0aXRsZSIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJzcGVlZCIsIm5hbWUiLCJvbklucHV0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidHlwZSIsIm1heCIsIm1pbiIsInN0ZXAiLCJzZXRSZWFkeSIsInNldFN0b3JlIiwiaXNVbnB1Ymxpc2hlZCIsInNldEFjY2Vzc2liaWx0eSIsImR5c2xleGlhIiwidXNlclByb3BzIiwiX3Nlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlByb3ZpZGVyIiwiX3VpIiwiUGFnZUNvbnRhaW5lciIsIl9JbWFnZVBpY2tlciIsIl9sYW5ndWFnZVNlbGVjdG9yIiwiTGFuZ3VhZ2VTZWxlY3RvciIsIl9tb2RlU2VsZWN0aW9uIiwiTW9kZVNlbGVjdGlvbiIsIl9hdWRpbyIsIkF1ZGlvU2V0dGluZ3MiLCJfY29tcG9uZW50cyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwidmVyc2lvbiIsIl9jb25maWciLCJzZXRMYW5ndWFnZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIl9mb3JtIiwiUmFkaW8iLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJsYWJlbCIsInNldENoZWNrZWQiLCJ0ZXh0TW9kZSIsIkNoZWNrYm94IiwicHJldmVudERlZmF1bHQiLCJjb25uZWN0aW9uVmFsdWVzIiwic3JjIiwiYWx0IiwicGVybWlzc2lvbnMiLCJnY2xhc3Nyb29tIiwiY2hlY2siLCJfZ2NsYXNzcm9vbSIsImF1dGhvcml6ZWQiLCJtb2RhbCIsIm1hcCIsImNvbm5lY3Rpb25WYWx1ZSIsImluZGV4IiwiX2l0ZW0iLCJQZXJtaXNzaW9uSXRlbSIsImtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwiX21vZGFsIiwiY2hlY2tlZEl0ZW0iLCJzZXRTaG93IiwiaGFuZGxlVmluY3VsYXJDbGljayIsImFkZExhYmVsIiwiaWNvbiIsIkltYWdlIiwiYWRkQnV0dG9uIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwib25DbG9zZSIsImhhbmRsZU1vZGFsIiwiaW1nIiwicGhvdG9VUkwiLCJfIiwiVXNlckltYWdlIl0sIm1hcHBpbmdzIjoiODlFQUFBLElBQUFBLEVBQUFDLEVBQUEsT0FBQSxFQVNPLE1BQU1DLEVBQWNDLEVBQUFELGVBQUdGLEVBQUFJLFFBQU1DLGNBQWMsRUFBcUIsRUFDQ0YsRUFBQUcsa0JBQXZDQSxJQUFNTixFQUFBSSxRQUFNRyxXQUFXTCxDQUFjLEMscUlDVnRFLElBQUFNLEVBQUFQLEVBQUEsa0NBQUEsRUFDQVEsRUFBQVIsRUFBQSxTQUFBLEVBQ0FTLEVBQUFULEVBQUEsU0FBQSxFQUNBVSxFQUFBVixFQUFBLHlDQUFBLEVBQ0FXLEVBQUFYLEVBQUEsMkJBQUEsUUFFTVksVUFBbUJMLEVBQUFNLHNCQUN4QkMsT0FDQUMsY0FHQyxPQUZBQyxLQUFLRixPQUFTLElBQUlOLEVBQUFTLGFBRVhELEtBQUtGLE1BQ2IsQ0FDQUksYUFDQyxPQUFPVCxFQUFBVSxJQUNSLENBRUFDLE9BQ0NWLEVBQUFXLGFBQWFD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