System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","pragmate-ui@1.0.0-beta.1/form","pragmate-ui@1.0.0-beta.1/icons"],function(a,e){var t,r,n,c,i,o,m;return a("ThemeSwitcher",void 0),{setters:[function(e){t=e},function(e){r=e},function(e){n=e},function(e){c=e},function(e){i=e}],execute:function(){m=t.Bundle,(o=new m({module:{vspecifier:"pragmate-ui@1.0.0-beta.1/theme-switcher"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",r],["react",n],["pragmate-ui/form",c],["pragmate-ui/icons",i]]),brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@1.0.0-beta.1/theme-switcher"),(m=new Map).set("./index",{hash:1174528906,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeSwitcher=function(){let e=globalThis?.matchMedia("(prefers-color-scheme: dark)").matches,t=localStorage.getItem("theme"),r=e?"dark":"light",a=t?"dark"===t:"dark"==r,[n,c]=o.default.useState(a);o.default.useEffect(()=>{t&&document.querySelector("html").setAttribute("data-beyond-mode",t)},[]);var i=n?"moon":"sun";return o.default.createElement("div",{className:"theme"},o.default.createElement("div",{className:"container-theme"},o.default.createElement(s.Icon,{icon:i}),o.default.createElement(m.Switch,{className:"checkbox",checked:n,onChange:function({target:e}){var t=document.querySelector("html"),r=n?"light":"dark";t.setAttribute("data-beyond-mode",r),localStorage.setItem("theme",r),c(e.checked)}})))};var o=e("react"),m=e("pragmate-ui/form"),s=e("pragmate-ui/icons")}}),o.exports.descriptor=[{im:"./index",from:"ThemeSwitcher",name:"ThemeSwitcher"}],o.exports.process=function({require:e,prop:t,value:r}){!e&&"ThemeSwitcher"!==t||a("ThemeSwitcher",e?e("./index").ThemeSwitcher:r)},a("__beyond_pkg",o),a("hmr",new function(){this.on=(e,t)=>o.hmr.on(e,t),this.off=(e,t)=>o.hmr.off(e,t)}),o.initialise(m)}}});