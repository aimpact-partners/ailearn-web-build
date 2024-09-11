System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/kernel@0.1.9/routing","pragmate-ui@1.0.0-beta.6/icons","react@18.2.0","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@1.0.0-beta.6/image","@aimpact/chat-sdk@1.1.0/session","pragmate-ui@1.0.0-beta.6/components","@aimpact/ailearn-app@0.1.6-dev.29/components/icons","@aimpact/ailearn-app@0.1.6-dev.29/components/ui","pragmate-ui@1.0.0-beta.6/dropdown","@beyond-js/widgets@1.1.0/render"],function(a,e){"use strict";var t,n,r,o,u,s,c,l,i,d,m,f,p,h,g;return a({NavbarHeader:void 0,ProfileIcon:void 0,ThemeSwitcher:void 0}),{setters:[function(e){t=e},function(e){n=e},function(e){r=e},function(e){o=e},function(e){u=e},function(e){s=e},function(e){c=e},function(e){l=e},function(e){i=e},function(e){d=e},function(e){m=e},function(e){f=e},function(e){p=e}],execute:function(){g=t.Bundle,(h=new g({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.29/components/navbar-header",multibundle:!0},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",n],["@beyond-js/kernel/routing",r],["pragmate-ui/icons",o],["react",u],["@beyond-js/react-18-widgets/hooks",s],["pragmate-ui/image",c],["@aimpact/chat-sdk/session",l],["pragmate-ui/components",i],["@aimpact/ailearn-app/components/icons",d],["@aimpact/ailearn-app/components/ui",m],["pragmate-ui/dropdown",f],["@beyond-js/widgets/render",p]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.29/components/navbar-header.code"),(g=new Map).set("./closable",{hash:4203241015,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ClosableIcon=function({apply:e,backlink:t}){return e?r.default.createElement(a.IconButton,{icon:"close",onClick:e=e=>{if(e.stopPropagation(),"function"==typeof t)return t();n.routing.replaceState({},null,t)}}):null};var n=e("@beyond-js/kernel/routing"),a=e("pragmate-ui/icons"),r=e("react")}}),g.set("./context",{hash:1377720157,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var n=e("react");const a=t.ModuleContext=n.default.createContext({});t.useModuleContext=()=>n.default.useContext(a)}}),g.set("./index",{hash:4066031702,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.NavbarHeader=function({children:e,detail:t,className:n,closable:a=!1,updated:r,backlink:o=void 0}){const u="navbar-header"+(n?" "+n:""),s=m.default.useRef(),[c,l]=m.default.useState(!1),[i,d]=(0,f.useTexts)(g.module.specifier);return i?(r={texts:d,menuOpened:c,toggleMenu:n=()=>l(!c),updated:r},m.default.createElement(v.ModuleContext.Provider,{value:r},m.default.createElement("header",{className:u,ref:s},m.default.createElement("section",{className:"left-section"},!a&&m.default.createElement(p.IconButton,{icon:"bars",onClick:n,className:"hamburger-icon circle"}),m.default.createElement(y.ClosableIcon,{apply:a,backlink:o}),!a&&m.default.createElement(h.Image,{onClick:()=>E.routing.pushState("/"),src:"/assets/rvd/logo.png",alt:"RVD.AI",className:"navbar-logo"}),a&&t&&m.default.createElement("span",{className:"detail"},t),m.default.createElement("app-breadcrumb",null)),m.default.createElement("section",{className:"right-section"},e,m.default.createElement(M.UserMenu,null))),m.default.createElement(b.AsideMenu,null))):m.default.createElement(x.Preload,null)};var m=e("react"),f=e("@beyond-js/react-18-widgets/hooks"),p=e("pragmate-ui/icons"),h=e("pragmate-ui/image"),g=e("beyond_context"),v=e("./context"),b=e("./menu"),M=e("./user-menu"),E=e("@beyond-js/kernel/routing"),y=e("./closable"),x=e("./preload")}}),g.set("./menu/context",{hash:617749427,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useOffCanvasMenuContext=t.OffCanvasMenuContext=void 0;var n=e("react");const a=t.OffCanvasMenuContext=n.default.createContext({});t.useOffCanvasMenuContext=()=>n.default.useContext(a)}}),g.set("./menu/index",{hash:3690413341,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AsideMenu=function(){const{toggleMenu:t,menuOpened:n,texts:e}=(0,d.useModuleContext)(),a=(0,i.useRef)(null),r=h.sessionWrapper.user,[o,u]=i.default.useState(!!r.teacher||!!r?.roles?.includes("teacher")),s=((0,p.useBinder)([r],()=>{u(!!r.teacher||!!r?.roles.includes("teacher"))},["user.loaded","login"]),"off-canvas-menu"+(n?" open":"")),c="off-canvas-menu-container"+(n?" opened":""),l=o?f.TeacherMenu:g.StudentMenu;return i.default.createElement(v.OffCanvasMenuContext.Provider,{value:{texts:e,menuOpened:n,toggleMenu:t}},i.default.createElement("div",{className:c,onClick:e=>{a.current.isSameNode(e.target)&&t(!n)},ref:a},i.default.createElement("aside",{className:s},i.default.createElement("header",{className:"flex flex-container flex-space-between"},i.default.createElement("div",{className:"menu__header"},i.default.createElement(m.Icon,{icon:"bars",onClick:t}),"RVD.AI Rivadavia"),i.default.createElement(m.Icon,{icon:"close",onClick:t})),i.default.createElement(l,null))))};var i=e("react"),d=e("../context"),m=e("pragmate-ui/icons"),f=e("./teacher"),p=e("@beyond-js/react-18-widgets/hooks"),h=e("@aimpact/chat-sdk/session"),g=e("./student"),v=e("./context")}}),g.set("./menu/item",{hash:2183568391,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MenuItem=function({icon:e,href:t,children:n,...a}){const r=t?l.Link:"div",{toggleMenu:o,menuOpened:u}=(0,d.useOffCanvasMenuContext)(),s={className:"container__item"};return t&&(s.href=t),t=()=>o(!u),c.default.createElement("li",{...a},c.default.createElement(r,{...s,onClick:t},e&&c.default.createElement(i.AppIcon,{name:e}),n))};var c=e("react"),l=e("pragmate-ui/components"),i=e("@aimpact/ailearn-app/components/icons"),d=e("./context")}}),g.set("./menu/student",{hash:2338361162,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StudentMenu=function(){var e=(0,a.useModuleContext)().texts["menu"];return n.default.createElement("nav",null,n.default.createElement(r.MenuItem,{icon:"home",href:"/"},e.home),n.default.createElement(r.MenuItem,{icon:"entities/classroom",href:"/classrooms/join"},e.classrooms))};var n=e("react"),a=e("../context"),r=e("./item")}}),g.set("./menu/teacher",{hash:2417268694,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.TeacherMenu=function(){var e=(0,a.useModuleContext)().texts["menu"];return n.default.createElement("nav",null,n.default.createElement(r.MenuItem,{icon:"home",href:"/"},e.home),n.default.createElement(r.MenuItem,{icon:"community",href:"/community"},e.community),n.default.createElement(r.MenuItem,{icon:"entities/module",href:"/modules/list"},e.modules),n.default.createElement(r.MenuItem,{icon:"entities/school",href:"/organizations/list"},e.organizations),n.default.createElement(r.MenuItem,{icon:"entities/classroom",href:"/classrooms/list"},e.classrooms))};var n=e("react"),a=e("../context"),r=e("./item")}}),g.set("./menu/use-session",{hash:4175025227,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useSession=function(){}}}),g.set("./preload",{hash:3972098412,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Preload=function(){return n.default.createElement(r.AnimatedContainer,null,n.default.createElement("header",{className:"navbar-header preload"},n.default.createElement("div",{className:"left-section"}),n.default.createElement("div",{className:"right-section"},n.default.createElement(a.Image,{className:"profile-img preload"}))))};var n=e("react"),a=e("pragmate-ui/image"),r=e("@aimpact/ailearn-app/components/ui")}}),g.set("./user-menu/index",{hash:2656601671,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserMenu=function(){var e=(0,c.useModuleContext)().texts;return n.default.createElement(a.Dropdown,{className:"user-menu"},n.default.createElement(a.DropdownToggle,{className:"content-user"},n.default.createElement(s.ProfileIcon,null)),n.default.createElement(a.DropdownMenu,null,n.default.createElement(u.UserMenuItem,{href:"/users/me",icon:"user"},e.userMenu.preferences),n.default.createElement(u.UserMenuItem,{onClick:async e=>{e.stopPropagation(),await r.sessionWrapper.logout(),o.routing.pushState("/auth/login")},icon:"exit"},e.userMenu.logout)))};var n=e("react"),a=e("pragmate-ui/dropdown"),r=e("@aimpact/chat-sdk/session"),o=e("@beyond-js/kernel/routing"),u=e("./item"),s=e("./profile"),c=e("../context")}}),g.set("./user-menu/item",{hash:1711784581,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserMenuItem=function({icon:e,children:t,...n}){return a.default.createElement(r.DropdownItem,{...n},a.default.createElement("div",{className:"container__item"},e&&a.default.createElement(o.Icon,{icon:e}),t))};var a=e("react"),r=e("pragmate-ui/dropdown"),o=e("pragmate-ui/icons")}}),g.set("./user-menu/profile",{hash:2952732086,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileIcon=void 0;var r=e("react"),o=e("pragmate-ui/icons"),u=e("@aimpact/chat-sdk/session"),s=e("pragmate-ui/image"),c=e("@beyond-js/react-18-widgets/hooks");t.ProfileIcon=()=>{const[e,t]=r.default.useState(!1),[n,a]=r.default.useState(u.sessionWrapper.user?.getProperties()??{});if((0,c.useBinder)([u.sessionWrapper],()=>a(u.sessionWrapper.user.getProperties()),"login"),u.sessionWrapper.user)return r.default.createElement("div",{className:"dropdown-menu__user-icon"},e?r.default.createElement(o.Icon,{className:"lg",icon:"user"}):r.default.createElement(s.Image,{alt:"user image profile",src:n.photoURL,onError:()=>t(!0)}))}}}),g.set("./user-menu/theme-button",{hash:1023347963,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeSwitcher=function(){const e=globalThis?.matchMedia("(prefers-color-scheme: dark)").matches,t=localStorage.getItem("theme"),n=e?"dark":"light",a=t??n,[r,o]=s.default.useState("dark"===a?"sun":"moon");function u(e){e.preventDefault();var e=document.querySelector("html"),t="sun"===r?"light":"dark";e.setAttribute("data-beyond-mode",t),localStorage.setItem("theme",t),l.widgets.attributes.add("data-beyond-mode",t),o("dark"==t?"sun":"moon")}return s.default.useEffect(()=>{t&&document.querySelector("html").setAttribute("data-beyond-mode",t)},[]),s.default.createElement(i.UserMenuItem,{onClick:u},s.default.createElement(c.Icon,{icon:r,onClick:u}),s.default.createElement("span",null,"Theme"))};var s=e("react"),c=e("pragmate-ui/icons"),l=e("@beyond-js/widgets/render"),i=e("./item")}}),g.set("./user-menu/user-item",{hash:1679571895,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserItem=function(){return n.default.createElement("div",null)};var n=e("react")}}),h.exports.descriptor=[{im:"./index",from:"NavbarHeader",name:"NavbarHeader"},{im:"./user-menu/profile",from:"ProfileIcon",name:"ProfileIcon"},{im:"./user-menu/theme-button",from:"ThemeSwitcher",name:"ThemeSwitcher"}],h.exports.process=function({require:e,prop:t,value:n}){!e&&"NavbarHeader"!==t||a("NavbarHeader",e?e("./index").NavbarHeader:n),!e&&"ProfileIcon"!==t||a("ProfileIcon",e?e("./user-menu/profile").ProfileIcon:n),!e&&"ThemeSwitcher"!==t||a("ThemeSwitcher",e?e("./user-menu/theme-button").ThemeSwitcher:n)},a("__beyond_pkg",h),a("hmr",new function(){this.on=(e,t)=>h.hmr.on(e,t),this.off=(e,t)=>h.hmr.off(e,t)}),h.initialise(g)}}});