System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","pragmate-ui@0.1.1/icons","@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/routing","pragmate-ui@0.1.1/components","pragmate-ui@0.1.1/spinner","pragmate-ui@0.1.1/image","@beyond-js/kernel@0.1.9/styles"],function(n,e){"use strict";var t,a,o,r,l,c,i,d,u,m,s;return n({AudioPlayer:void 0,ThemeSwitch:void 0,CollapsibleHeader:void 0,ConfirmationModal:void 0,LabeledIconButton:void 0,Input:void 0,Loading:void 0,PreloadScreen:void 0,ThemeSwitcher:void 0,WelcomeBoard:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){o=e},function(e){r=e},function(e){l=e},function(e){c=e},function(e){i=e},function(e){d=e},function(e){u=e}],execute:function(){s=t.Bundle,(m=new s({module:{vspecifier:"@aimpact/chat@1.0.1/shared/components"},type:"code"},e.meta.url).package()).dependencies.update([["react",a],["pragmate-ui/icons",o],["@beyond-js/widgets/render",r],["@beyond-js/kernel/routing",l],["pragmate-ui/components",c],["pragmate-ui/spinner",i],["pragmate-ui/image",d],["@beyond-js/kernel/styles",u]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/chat@1.0.1/shared/components"),(s=new Map).set("./AudioPlayer",{hash:1215290757,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AudioPlayer=function({src:e,create:t=!0}){if(!e)return console.warn("not audio to process"),null;e=t?e:URL.createObjectURL(e);const a=n.default.useRef(null);return n.default.useEffect(()=>{const e=a.current;e.addEventListener("loadedmetadata",()=>{e.duration===1/0&&(e.currentTime=1e101,e.ontimeupdate=()=>{e.ontimeupdate=null,e.currentTime=0})})},[e]),e?n.default.createElement("div",{className:"audio-player"},n.default.createElement("audio",{controls:!0,preload:"metadata"},n.default.createElement("source",{src:e,type:"audio/mp3",ref:a}),"Your browser does not support the audio element.")):null};var n=e("react")}}),s.set("./change-theme",{hash:1133681995,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeSwitch=function({fetching:e,text:t}){const a=globalThis?.matchMedia("(prefers-color-scheme: dark)").matches,[n,o]=(0,u.useState)(a?"sun":"moon"),[r,l]=(0,u.useState)(localStorage.getItem("theme")||(a?"dark":"light")),[c,i]=(0,u.useState)(t?.replace("%them",r)),d=((0,u.useEffect)(()=>{document.documentElement.setAttribute("data-beyond-mode",r),localStorage.setItem("theme",r),s.widgets.attributes.add("data-beyond-mode",r),i(t?.replace("%them",r))},[r,t]),()=>{var e="dark"===r?"light":"dark";l(e),o("dark"==e?"sun":"moon")});return u.default.createElement("div",{className:"theme-switch__container",onClick:d},u.default.createElement(m.Icon,{icon:n,disabled:e,onClick:d}),t&&c)};var u=e("react"),m=e("pragmate-ui/icons"),s=e("@beyond-js/widgets/render")}}),s.set("./collapsible",{hash:4076329207,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CollapsibleHeader=void 0;var u=e("react"),m=e("pragmate-ui/icons");t.CollapsibleHeader=({title:e,subtitle:t,navigateBack:a,actions:n,children:o,collapsed:r=!0})=>{const[l,c]=(0,u.useState)(!o||r);var i="collapsible-wrapper "+(l?"collapsed":""),r="collapse-button lg primary circle "+(l||r?"collapsed":""),d="collapsible-menu "+(l?"collapsed":"");return u.default.createElement("header",{className:"collapsible-header"},u.default.createElement("nav",{className:d},u.default.createElement("div",{className:"collapsible-nav"},a&&u.default.createElement(m.IconButton,{className:"md",icon:"backArrow",onClick:a}),u.default.createElement("span",null,u.default.createElement(s,{content:e}),t&&u.default.createElement("h3",null,t))),u.default.createElement("div",{className:"collapsible-actions"},n,o&&u.default.createElement(m.IconButton,{className:r,icon:"expandMore",onClick:()=>c(!l)}))),u.default.createElement("div",{className:i},o&&u.default.createElement("section",{className:"collapsible-content"},o)))};const s=({content:e})=>"string"==typeof e?u.default.createElement("h1",null,e):e}}),s.set("./confirmation-modal",{hash:4087826673,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ConfirmationModal=void 0;var o=e("react"),r=e("pragmate-ui/components"),l=e("pragmate-ui/icons");t.ConfirmationModal=o.default.forwardRef((e,t)=>{var{content:e,cancel:a,submit:n}=e;return o.default.createElement("dialog",{ref:t,className:"confirmation-modal"},o.default.createElement(l.IconButton,{icon:"close",className:"close",onClick:a}),o.default.createElement("header",null,o.default.createElement("h1",null,"Atention!")),o.default.createElement("p",null,e),o.default.createElement("footer",null,o.default.createElement(r.Button,{icon:"close-circle",variant:"link outline",onClick:a},"Cancel"),o.default.createElement(r.Button,{icon:"save",variant:"primary",onClick:n},"Submit")))})}}),s.set("./icon-button",{hash:1737455888,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LabeledIconButton=void 0;var r=e("react"),l=e("pragmate-ui/components"),c=e("pragmate-ui/icons");t.LabeledIconButton=r.default.forwardRef((e,t)=>{const{icon:a,label:n,...o}=e;return r.default.createElement(l.Button,{ref:t,label:r.default.createElement("div",{className:"icon-button"},r.default.createElement(c.Icon,{icon:a}),n),...o})})}}),s.set("./input",{hash:2171317613,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;var r=e("react");t.Input=({name:e,label:t,disabled:a,className:n,...o})=>r.default.createElement("div",{className:`input-wrapper ${n} `},r.default.createElement("input",{name:e,disabled:a,...o,autoComplete:"off"}),!a&&r.default.createElement("label",{htmlFor:e},t))}}),s.set("./loading",{hash:477427642,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=void 0;var a=e("react"),n=e("pragmate-ui/spinner");t.Loading=()=>a.default.createElement("div",{className:"spinner-container"},a.default.createElement(n.Spinner,{className:"spinner",type:"primary",active:!0}))}}),s.set("./pre-load",{hash:2462171743,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PreloadScreen=function(){return a.default.createElement("div",{className:"preload-screen active"},a.default.createElement(n.Spinner,{active:!0,type:"primary"}))};var a=e("react"),n=e("pragmate-ui/spinner")}}),s.set("./theme-button",{hash:1327465984,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeSwitcher=function({fetching:e}){const t=globalThis?.matchMedia("(prefers-color-scheme: dark)").matches,a=localStorage.getItem("theme"),n=t?"dark":"light",o=a??n,[r,l]=i.default.useState("dark"===o?"sun":"moon");function c(e){e.preventDefault();var e=document.querySelector("html"),t="sun"===r?"light":"dark";e.setAttribute("data-beyond-mode",t),localStorage.setItem("theme",t),u.widgets.attributes.add("data-beyond-mode",t),l("dark"==t?"sun":"moon")}return i.default.useEffect(()=>{a&&document.querySelector("html").setAttribute("data-beyond-mode",a)},[]),i.default.createElement("div",{className:"",onClick:c},i.default.createElement(d.Icon,{icon:r,disabled:e,onClick:c}))};var i=e("react"),d=e("pragmate-ui/icons"),u=e("@beyond-js/widgets/render")}}),s.set("./welcome-board",{hash:3618433111,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.WelcomeBoard=function({image:e="https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/white-logo",title:t,description:a,children:n}){return o.default.createElement("div",{className:"board-container"},o.default.createElement("div",{className:"board-header__container"},o.default.createElement("div",{className:"logo__container"},o.default.createElement(r.Image,{src:e}))),!!n&&n,t|a&&o.default.createElement("div",{className:"board-content__container"},!!t&&o.default.createElement("p",{className:"board-content__title h1"},t),!!a&&o.default.createElement("p",{className:"board-content__description h4"},a)))};var o=e("react"),r=e("pragmate-ui/image")}}),m.exports.descriptor=[{im:"./AudioPlayer",from:"AudioPlayer",name:"AudioPlayer"},{im:"./change-theme",from:"ThemeSwitch",name:"ThemeSwitch"},{im:"./collapsible",from:"CollapsibleHeader",name:"CollapsibleHeader"},{im:"./confirmation-modal",from:"ConfirmationModal",name:"ConfirmationModal"},{im:"./icon-button",from:"LabeledIconButton",name:"LabeledIconButton"},{im:"./input",from:"Input",name:"Input"},{im:"./loading",from:"Loading",name:"Loading"},{im:"./pre-load",from:"PreloadScreen",name:"PreloadScreen"},{im:"./theme-button",from:"ThemeSwitcher",name:"ThemeSwitcher"},{im:"./welcome-board",from:"WelcomeBoard",name:"WelcomeBoard"}],m.exports.process=function({require:e,prop:t,value:a}){!e&&"AudioPlayer"!==t||n("AudioPlayer",e?e("./AudioPlayer").AudioPlayer:a),!e&&"ThemeSwitch"!==t||n("ThemeSwitch",e?e("./change-theme").ThemeSwitch:a),!e&&"CollapsibleHeader"!==t||n("CollapsibleHeader",e?e("./collapsible").CollapsibleHeader:a),!e&&"ConfirmationModal"!==t||n("ConfirmationModal",e?e("./confirmation-modal").ConfirmationModal:a),!e&&"LabeledIconButton"!==t||n("LabeledIconButton",e?e("./icon-button").LabeledIconButton:a),!e&&"Input"!==t||n("Input",e?e("./input").Input:a),!e&&"Loading"!==t||n("Loading",e?e("./loading").Loading:a),!e&&"PreloadScreen"!==t||n("PreloadScreen",e?e("./pre-load").PreloadScreen:a),!e&&"ThemeSwitcher"!==t||n("ThemeSwitcher",e?e("./theme-button").ThemeSwitcher:a),!e&&"WelcomeBoard"!==t||n("WelcomeBoard",e?e("./welcome-board").WelcomeBoard:a)},n("__beyond_pkg",m),n("hmr",new function(){this.on=(e,t)=>m.hmr.on(e,t),this.off=(e,t)=>m.hmr.off(e,t)}),m.initialise(s)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9BdWRpb1BsYXllci50c3giLCIvdHMvY2hhbmdlLXRoZW1lLnRzeCIsIi90cy9jb2xsYXBzaWJsZS50c3giLCIvdHMvY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi90cy9pY29uLWJ1dHRvbi50c3giLCIvdHMvaW5wdXQudHN4IiwiL3RzL2xvYWRpbmcudHN4IiwiL3RzL3ByZS1sb2FkLnRzeCIsIi90cy90aGVtZS1idXR0b24udHN4IiwiL3RzL3dlbGNvbWUtYm9hcmQudHN4Il0sIm5hbWVzIjpbInNyYyIsImNyZWF0ZSIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwiX3JlYWN0IiwiZGVmYXVsdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsInR5cGUiLCJyZXF1aXJlIiwiZmV0Y2hpbmciLCJ0ZXh0IiwicHJlZmVyc0RhcmtNb2RlIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiaWNvbiIsInNldEljb24iLCJ1c2VTdGF0ZSIsImN1cnJlbnRUaGVtZSIsInNldEN1cnJlbnRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmludFRleHQiLCJzZXRQcmludFRleHQiLCJyZXBsYWNlIiwiaGFuZGxlQ2hhbmdlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwiX3JlbmRlciIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwibmV3VGhlbWUiLCJvbkNsaWNrIiwiX2ljb25zIiwiSWNvbiIsImRpc2FibGVkIiwiZXhwb3J0cyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJzdWJ0aXRsZSIsIm5hdmlnYXRlQmFjayIsImFjdGlvbnMiLCJjaGlsZHJlbiIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwic2V0SXNDb2xsYXBzZWQiLCJjbHMiLCJidG5DbHMiLCJtZW51Q2xzIiwiSWNvbkJ1dHRvbiIsIlRpdGxlIiwiY29udGVudCIsImhhbmRsZUNvbGxhcHNlIiwiX2NvbXBvbmVudHMiLCJDb25maXJtYXRpb25Nb2RhbCIsImZvcndhcmRSZWYiLCJwcm9wcyIsImNhbmNlbCIsInN1Ym1pdCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJMYWJlbGVkSWNvbkJ1dHRvbiIsImxhYmVsIiwicmVzdCIsIklucHV0IiwibmFtZSIsImF1dG9Db21wbGV0ZSIsImh0bWxGb3IiLCJfc3Bpbm5lciIsIkxvYWRpbmciLCJTcGlubmVyIiwiYWN0aXZlIiwidGhlbWUiLCJ0aGVtZVN0b3JhZ2UiLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsIl9pbWFnZSIsIkltYWdlIl0sIm1hcHBpbmdzIjoiMnhDQUdtQixTQUFzQixDQUFFQSxJQUFBQSxFQUFLQyxPQUFBQSxFQUFTLENBQUEsQ0FBSSxHQUM1RCxHQUFJLENBQUNELEVBRUosT0FEQUUsUUFBUUMsS0FBSyxzQkFBc0IsRUFDNUIsS0FHUkgsRUFBTUMsRUFBU0QsRUFBTUksSUFBSUMsZ0JBQWdCTCxDQUFHLEVBQzVDLE1BQU1NLEVBQU1DLEVBQUFDLFFBQU1DLE9BQU8sSUFBSSxFQWU3QixPQWJBRixFQUFBQyxRQUFNRSxVQUFVLEtBQ2YsTUFBTUMsRUFBU0wsRUFBSU0sUUFDbkJELEVBQU9FLGlCQUFpQixpQkFBa0IsS0FDckNGLEVBQU9HLFdBQWFDLEVBQUFBLElBQ3ZCSixFQUFPSyxZQUFjLE1BQ3JCTCxFQUFPTSxhQUFlLEtBQ3JCTixFQUFPTSxhQUFlLEtBQ3RCTixFQUFPSyxZQUFjLENBQ3RCLEVBRUYsQ0FBQyxD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