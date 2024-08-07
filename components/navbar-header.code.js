System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/kernel@0.1.9/routing","pragmate-ui@1.0.0-beta.1/icons","react@18.2.0","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@1.0.0-beta.1/image","pragmate-ui@1.0.0-beta.1/breadcrumb","@aimpact/ailearn-app@0.1.3-test.02/components/ui","@aimpact/chat-sdk@1.0.1/session","pragmate-ui@1.0.0-beta.1/components","@aimpact/ailearn-app@0.1.3-test.02/components/icons","pragmate-ui@1.0.0-beta.1/dropdown","@beyond-js/widgets@1.1.0/render"],function(n,e){var t,a,r,o,u,s,c,l,i,d,m,f,p,h,g,b;return n({NavbarHeader:void 0,ProfileIcon:void 0,ThemeSwitcher:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){o=e},function(e){u=e},function(e){s=e},function(e){c=e},function(e){l=e},function(e){i=e},function(e){d=e},function(e){m=e},function(e){f=e},function(e){p=e},function(e){h=e}],execute:function(){b=t.Bundle,(g=new b({module:{vspecifier:"@aimpact/ailearn-app@0.1.3-test.02/components/navbar-header",multibundle:!0},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",a],["@beyond-js/kernel/routing",r],["pragmate-ui/icons",o],["react",u],["@beyond-js/react-18-widgets/hooks",s],["pragmate-ui/image",c],["pragmate-ui/breadcrumb",l],["@aimpact/ailearn-app/components/ui",i],["@aimpact/chat-sdk/session",d],["pragmate-ui/components",m],["@aimpact/ailearn-app/components/icons",f],["pragmate-ui/dropdown",p],["@beyond-js/widgets/render",h]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.3-test.02/components/navbar-header.code"),(b=new Map).set("./closable",{hash:4203241015,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ClosableIcon=function({apply:e,backlink:t}){return e?r.default.createElement(n.IconButton,{icon:"close",onClick:e=e=>{if(e.stopPropagation(),"function"==typeof t)return t();a.routing.replaceState({},null,t)}}):null};var a=e("@beyond-js/kernel/routing"),n=e("pragmate-ui/icons"),r=e("react")}}),b.set("./context",{hash:1377720157,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");let n=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(n)}}),b.set("./index",{hash:39249844,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.NavbarHeader=function({children:e,detail:t,className:a,closable:n=!1,updated:r,breadcrumb:o,backlink:u=void 0}){let s="navbar-header"+(a?" "+a:""),c=f.default.useRef(),[l,i]=f.default.useState(!1),[d,m]=(0,p.useTexts)(b.module.specifier);return d?(r={texts:m,menuOpened:l,toggleMenu:a=()=>i(!l),updated:r},f.default.createElement(v.ModuleContext.Provider,{value:r},f.default.createElement("header",{className:s,ref:c},f.default.createElement("section",{className:"left-section"},!n&&f.default.createElement(h.IconButton,{icon:"bars",onClick:a,className:"hamburger-icon circle"}),f.default.createElement(k.ClosableIcon,{apply:n,backlink:u}),!n&&f.default.createElement(g.Image,{onClick:()=>x.routing.pushState("/"),src:"/assets/rvd/logo.png",alt:"RVD.AI",className:"navbar-logo"}),n&&t&&f.default.createElement("span",{className:"detail"},t),o&&f.default.createElement(C.AnimatedContainer,null,f.default.createElement(y.BreadCrumb,{className:"desktop-breadcrumb",items:o,separator:":"}))),f.default.createElement("section",{className:"right-section"},e,f.default.createElement(E.UserMenu,null))),f.default.createElement(M.AsideMenu,null))):f.default.createElement(_.Preload,null)};var f=e("react"),p=e("@beyond-js/react-18-widgets/hooks"),h=e("pragmate-ui/icons"),g=e("pragmate-ui/image"),b=e("beyond_context"),v=e("./context"),M=e("./menu"),E=e("./user-menu"),y=e("pragmate-ui/breadcrumb"),x=e("@beyond-js/kernel/routing"),k=e("./closable"),_=e("./preload"),C=e("@aimpact/ailearn-app/components/ui")}}),b.set("./menu/context",{hash:617749427,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useOffCanvasMenuContext=t.OffCanvasMenuContext=void 0;var a=e("react");let n=t.OffCanvasMenuContext=a.default.createContext({});t.useOffCanvasMenuContext=()=>a.default.useContext(n)}}),b.set("./menu/index",{hash:3773047745,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AsideMenu=function(){let{toggleMenu:t,menuOpened:a,texts:e}=(0,d.useModuleContext)(),n=(0,i.useRef)(null),r=h.sessionWrapper.user,[o,u]=i.default.useState(!!r.teacher||!!r?.roles?.includes("teacher")),s=((0,p.useBinder)([r],()=>{u(!!r.teacher||!!r?.roles.includes("teacher"))},["user.loaded","login"]),"off-canvas-menu"+(a?" open":"")),c="off-canvas-menu-container"+(a?" opened":""),l=o?f.TeacherMenu:g.StudentMenu;return i.default.createElement(b.OffCanvasMenuContext.Provider,{value:{texts:e,menuOpened:a,toggleMenu:t}},i.default.createElement("div",{className:c,onClick:e=>{n.current.isSameNode(e.target)&&t(!a)},ref:n},i.default.createElement("aside",{className:s},i.default.createElement("header",{className:"flex flex-container flex-space-between"},i.default.createElement("div",{className:"menu__header"},i.default.createElement(m.Icon,{icon:"bars",onClick:t}),"RVD.AI Rivadavia"),i.default.createElement(m.Icon,{icon:"close",onClick:t})),i.default.createElement(l,null))))};var i=e("react"),d=e("../context"),m=e("pragmate-ui/icons"),f=e("./teacher"),p=e("@beyond-js/react-18-widgets/hooks"),h=e("@aimpact/chat-sdk/session"),g=e("./student"),b=e("./context")}}),b.set("./menu/item",{hash:2183568391,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MenuItem=function({icon:e,href:t,children:a,...n}){let r=t?l.Link:"div",{toggleMenu:o,menuOpened:u}=(0,d.useOffCanvasMenuContext)(),s={className:"container__item"};return t&&(s.href=t),t=()=>o(!u),c.default.createElement("li",{...n},c.default.createElement(r,{...s,onClick:t},e&&c.default.createElement(i.AppIcon,{name:e}),a))};var c=e("react"),l=e("pragmate-ui/components"),i=e("@aimpact/ailearn-app/components/icons"),d=e("./context")}}),b.set("./menu/student",{hash:2338361162,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StudentMenu=function(){var e=(0,n.useModuleContext)().texts.menu;return a.default.createElement("nav",null,a.default.createElement(r.MenuItem,{icon:"home",href:"/"},e.home),a.default.createElement(r.MenuItem,{icon:"entities/classroom",href:"/classrooms/join"},e.classrooms))};var a=e("react"),n=e("../context"),r=e("./item")}}),b.set("./menu/teacher",{hash:2417268694,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.TeacherMenu=function(){var e=(0,n.useModuleContext)().texts.menu;return a.default.createElement("nav",null,a.default.createElement(r.MenuItem,{icon:"home",href:"/"},e.home),a.default.createElement(r.MenuItem,{icon:"community",href:"/community"},e.community),a.default.createElement(r.MenuItem,{icon:"entities/module",href:"/modules/list"},e.modules),a.default.createElement(r.MenuItem,{icon:"entities/school",href:"/organizations/list"},e.organizations),a.default.createElement(r.MenuItem,{icon:"entities/classroom",href:"/classrooms/list"},e.classrooms))};var a=e("react"),n=e("../context"),r=e("./item")}}),b.set("./menu/use-session",{hash:4175025227,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useSession=function(){}}}),b.set("./preload",{hash:3972098412,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Preload=function(){return a.default.createElement(r.AnimatedContainer,null,a.default.createElement("header",{className:"navbar-header preload"},a.default.createElement("div",{className:"left-section"}),a.default.createElement("div",{className:"right-section"},a.default.createElement(n.Image,{className:"profile-img preload"}))))};var a=e("react"),n=e("pragmate-ui/image"),r=e("@aimpact/ailearn-app/components/ui")}}),b.set("./user-menu/index",{hash:2656601671,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserMenu=function(){var e=(0,c.useModuleContext)().texts;return a.default.createElement(n.Dropdown,{className:"user-menu"},a.default.createElement(n.DropdownToggle,{className:"content-user"},a.default.createElement(s.ProfileIcon,null)),a.default.createElement(n.DropdownMenu,null,a.default.createElement(u.UserMenuItem,{href:"/users/me",icon:"user"},e.userMenu.preferences),a.default.createElement(u.UserMenuItem,{onClick:async e=>{e.stopPropagation(),await r.sessionWrapper.logout(),o.routing.pushState("/auth/login")},icon:"exit"},e.userMenu.logout)))};var a=e("react"),n=e("pragmate-ui/dropdown"),r=e("@aimpact/chat-sdk/session"),o=e("@beyond-js/kernel/routing"),u=e("./item"),s=e("./profile"),c=e("../context")}}),b.set("./user-menu/item",{hash:1711784581,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserMenuItem=function({icon:e,children:t,...a}){return n.default.createElement(r.DropdownItem,{...a},n.default.createElement("div",{className:"container__item"},e&&n.default.createElement(o.Icon,{icon:e}),t))};var n=e("react"),r=e("pragmate-ui/dropdown"),o=e("pragmate-ui/icons")}}),b.set("./user-menu/profile",{hash:2952732086,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileIcon=void 0;var r=e("react"),o=e("pragmate-ui/icons"),u=e("@aimpact/chat-sdk/session"),s=e("pragmate-ui/image"),c=e("@beyond-js/react-18-widgets/hooks");t.ProfileIcon=()=>{let[e,t]=r.default.useState(!1),[a,n]=r.default.useState(u.sessionWrapper.user?.getProperties()??{});if((0,c.useBinder)([u.sessionWrapper],()=>n(u.sessionWrapper.user.getProperties()),"login"),u.sessionWrapper.user)return r.default.createElement("div",{className:"dropdown-menu__user-icon"},e?r.default.createElement(o.Icon,{className:"lg",icon:"user"}):r.default.createElement(s.Image,{alt:"user image profile",src:a.photoURL,onError:()=>t(!0)}))}}}),b.set("./user-menu/theme-button",{hash:1023347963,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeSwitcher=function(){let e=globalThis?.matchMedia("(prefers-color-scheme: dark)").matches,t=localStorage.getItem("theme"),a=e?"dark":"light",n=t??a,[r,o]=s.default.useState("dark"===n?"sun":"moon");function u(e){e.preventDefault();var e=document.querySelector("html"),t="sun"===r?"light":"dark";e.setAttribute("data-beyond-mode",t),localStorage.setItem("theme",t),l.widgets.attributes.add("data-beyond-mode",t),o("dark"==t?"sun":"moon")}return s.default.useEffect(()=>{t&&document.querySelector("html").setAttribute("data-beyond-mode",t)},[]),s.default.createElement(i.UserMenuItem,{onClick:u},s.default.createElement(c.Icon,{icon:r,onClick:u}),s.default.createElement("span",null,"Theme"))};var s=e("react"),c=e("pragmate-ui/icons"),l=e("@beyond-js/widgets/render"),i=e("./item")}}),b.set("./user-menu/user-item",{hash:1679571895,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserItem=function(){return a.default.createElement("div",null)};var a=e("react")}}),g.exports.descriptor=[{im:"./index",from:"NavbarHeader",name:"NavbarHeader"},{im:"./user-menu/profile",from:"ProfileIcon",name:"ProfileIcon"},{im:"./user-menu/theme-button",from:"ThemeSwitcher",name:"ThemeSwitcher"}],g.exports.process=function({require:e,prop:t,value:a}){!e&&"NavbarHeader"!==t||n("NavbarHeader",e?e("./index").NavbarHeader:a),!e&&"ProfileIcon"!==t||n("ProfileIcon",e?e("./user-menu/profile").ProfileIcon:a),!e&&"ThemeSwitcher"!==t||n("ThemeSwitcher",e?e("./user-menu/theme-button").ThemeSwitcher:a)},n("__beyond_pkg",g),n("hmr",new function(){this.on=(e,t)=>g.hmr.on(e,t),this.off=(e,t)=>g.hmr.off(e,t)}),g.initialise(b)}}});