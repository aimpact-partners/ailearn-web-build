System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","framer-motion@10.18.0","pragmate-ui@0.1.1/components"],function(t,e){"use strict";var o,n,r,a,d,s,i;return t({DropdownContainer:void 0,DropdownItem:void 0,DropdownMenu:void 0,DropdownToggle:void 0,useDropdownContext:void 0,Dropdown:void 0,IDropdownProps:void 0,IDropdownItemProps:void 0}),{setters:[function(e){o=e},function(e){n=e},function(e){r=e},function(e){a=e},function(e){d=e}],execute:function(){i=o.Bundle,(s=new i({module:{vspecifier:"pragmate-ui@0.1.1/dropdown"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",n],["react",r],["framer-motion",a],["pragmate-ui/components",d]]),brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.1/dropdown"),(i=new Map).set("./components/animated-div",{hash:744696097,creator:function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.AnimatedDiv=function({children:e,className:o}={children:null,className:""}){return n.createElement(t.motion.div,{className:o,animate:{opacity:1,transition:{duration:.1},y:0},exit:{transition:{duration:.3},opacity:0}},e)};var n=e("react"),t=e("framer-motion")}}),i.set("./components/container",{hash:2258949651,creator:function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.DropdownContainer=function({children:e,className:o}){var{toggleMenu:n,setToggleMenu:t}=(0,a.useDropdownContext)(),t=(0,d.useClickContainer)({toggleMenu:n,setToggleMenu:t})["ref"],o="pui-dropdown-container"+(o?" "+o:"")+(n?" pui-dropdown-container--opened":"");return r.default.createElement("div",{ref:t,className:o},e)};var r=e("react"),a=e("../context"),d=e("../hooks/use-click-container")}}),i.set("./components/item",{hash:4123003515,creator:function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.DropdownItem=function(e){const o=(0,p.useDropdownContext)()["setToggleMenu"],{children:n,className:t,onClick:r,tag:a=u.Link}=e,d=a??"div",s="pui-dropdown-menu__item"+(t?" "+t:""),i=Object.assign({},e);return["children","className","onClick","tag","id"].forEach(e=>delete i[e]),c.default.createElement("li",null,c.default.createElement(d,{className:s,onClick:async e=>{e.stopPropagation(),r&&"function"==typeof r&&await r(e),o(!1)},...i},n))};var c=e("react"),p=e("../context"),u=e("pragmate-ui/components")}}),i.set("./components/menu",{hash:391814111,creator:function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.DropdownMenu=function(e){var o=(0,t.useDropdownContext)()["toggleMenu"];if(!o)return null;return n.default.createElement(r.AnimatedDiv,{className:"pui-dropdown-menu  pui-dropdown-menu--opened"},n.default.createElement("ul",{className:"pui-dropdown-menu__list"},e.children))};var n=e("react"),t=e("../context"),r=e("./animated-div")}}),i.set("./components/toggle",{hash:2994452618,creator:function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.DropdownToggle=function({children:e,className:o}){const n="pui-dropdown__toggle"+(o?" "+o:""),{toggleMenu:t,setToggleMenu:r}=(0,d.useDropdownContext)();return a.createElement("div",{onClick:e=>{e.stopPropagation(),r(!t)},className:n},e)};var a=e("react"),d=e("../context")}}),i.set("./context",{hash:3904183137,creator:function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.useDropdownContext=o.DropdownContext=void 0;var n=e("react");const t=o.DropdownContext=n.default.createContext(null);o.useDropdownContext=()=>(0,n.useContext)(t)}}),i.set("./hooks/use-click-container",{hash:3079559365,creator:function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.useClickContainer=function({toggleMenu:r,setToggleMenu:a}){const d=n.default.useRef(null);return n.default.useEffect(()=>{const e=e=>{var o=d["current"],{target:n,currentTarget:t}=e,e=e.composedPath?e.composedPath():[],e=0<e.length?e[0]:null,n=o===n||o===t||e===o,t=o?.contains(e);!r||n||t||a(!1)};return globalThis.document.addEventListener("click",e),()=>globalThis.document.removeEventListener("click",e)},[r]),{ref:d}};var n=e("react")}}),i.set("./index",{hash:1134357420,creator:function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.Dropdown=function({children:e,className:o}){var[n,t]=r.default.useState(!1),n={toggleMenu:n,setToggleMenu:t};return r.default.createElement(a.DropdownContext.Provider,{value:n},r.default.createElement(d.DropdownContainer,{className:o},e))};var r=e("react"),a=e("./context"),d=e("./components/container")}}),i.set("./types",{hash:2479703114,creator:function(e,o){Object.defineProperty(o,"__esModule",{value:!0})}}),s.exports.descriptor=[{im:"./components/container",from:"DropdownContainer",name:"DropdownContainer"},{im:"./components/item",from:"DropdownItem",name:"DropdownItem"},{im:"./components/menu",from:"DropdownMenu",name:"DropdownMenu"},{im:"./components/toggle",from:"DropdownToggle",name:"DropdownToggle"},{im:"./context",from:"useDropdownContext",name:"useDropdownContext"},{im:"./index",from:"Dropdown",name:"Dropdown"},{im:"./types",from:"IDropdownProps",name:"IDropdownProps"},{im:"./types",from:"IDropdownItemProps",name:"IDropdownItemProps"}],s.exports.process=function({require:e,prop:o,value:n}){!e&&"DropdownContainer"!==o||t("DropdownContainer",e?e("./components/container").DropdownContainer:n),!e&&"DropdownItem"!==o||t("DropdownItem",e?e("./components/item").DropdownItem:n),!e&&"DropdownMenu"!==o||t("DropdownMenu",e?e("./components/menu").DropdownMenu:n),!e&&"DropdownToggle"!==o||t("DropdownToggle",e?e("./components/toggle").DropdownToggle:n),!e&&"useDropdownContext"!==o||t("useDropdownContext",e?e("./context").useDropdownContext:n),!e&&"Dropdown"!==o||t("Dropdown",e?e("./index").Dropdown:n),!e&&"IDropdownProps"!==o||t("IDropdownProps",e?e("./types").IDropdownProps:n),!e&&"IDropdownItemProps"!==o||t("IDropdownItemProps",e?e("./types").IDropdownItemProps:n)},t("__beyond_pkg",s),t("hmr",new function(){this.on=(e,o)=>s.hmr.on(e,o),this.off=(e,o)=>s.hmr.off(e,o)}),s.initialise(i)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvY29tcG9uZW50cy9jb250YWluZXIudHN4IiwiL3RzL2NvbXBvbmVudHMvaXRlbS50c3giLCIvdHMvY29tcG9uZW50cy9tZW51LnRzeCIsIi90cy9jb21wb25lbnRzL3RvZ2dsZS50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvaG9va3MvdXNlLWNsaWNrLWNvbnRhaW5lci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sIm5hbWVzIjpbImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiX2ZyYW1lck1vdGlvbiIsIm1vdGlvbiIsImRpdiIsImFuaW1hdGUiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwieSIsImV4aXQiLCJyZXF1aXJlIiwidG9nZ2xlTWVudSIsInNldFRvZ2dsZU1lbnUiLCJfY29udGV4dCIsInVzZURyb3Bkb3duQ29udGV4dCIsInJlZiIsIl91c2VDbGlja0NvbnRhaW5lciIsInVzZUNsaWNrQ29udGFpbmVyIiwiY2xzIiwiX3JlYWN0IiwiZGVmYXVsdCIsInByb3BzIiwib25DbGljayIsInRhZyIsIl9jb21wb25lbnRzIiwiTGluayIsIkNvbnRyb2wiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsImtleSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiYXdhaXQiLCJfYW5pbWF0ZWREaXYiLCJBbmltYXRlZERpdiIsIkRyb3Bkb3duQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwicGF0aCIsImNvbXBvc2VkUGF0aCIsInBhdGhUYXJnZXQiLCJsZW5ndGgiLCJpc1NhbWVOb2RlIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImdsb2JhbFRoaXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlU3RhdGUiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiX2NvbnRhaW5lciIsIkRyb3Bkb3duQ29udGFpbmVyIiwiZGVmaW5lUHJvcGVydHkiXSwibWFwcGluZ3MiOiJ3N0JBR00sU0FBc0IsQ0FBRUEsU0FBQUEsRUFBVUMsVUFBQUEsQ0FBUyxFQUErQixDQUFFRCxTQUFVLEtBQU1DLFVBQVcsRUFBRSxHQUM5RyxPQUNDQyxFQUFBQyxjQUFDQyxFQUFBQyxPQUFPQyxJQUFHLENBQ1ZMLFVBQVdBLEVBQ1hNLFFBQVMsQ0FDUkMsUUFBUyxFQUNUQyxXQUFZLENBQ1hDLFNBQVUsRSxFQUVYQyxFQUFHLEMsRUFFSkMsS0FBTSxDQUNMSCxXQUFZLENBQ1hDLFNBQVUsRSxFQUVYRixRQUFTLEMsQ0FDVCxFQUVBUixDQUFRLENBR1osRUF4QkEsSUFBQUUsRUFBQVcsRUFBQSxPQUFBLEVBQ0FULEVBQUFTLEVBQUEsZUFBQSxDLCtJQ0lpQixTQUE0QixDQUM1Q2IsU0FBQUEsRUFDQUMsVUFBQUEsQ0FBUyxHQUVULEdBQU0sQ0FBRWEsV0FBQUEsRUFBWUMsY0FBQUEsQ0FBYSxHQUFLLEVBQUFDLEVBQUFDLG9CQUFrQixFQUVoREMsR0FBUSxFQUFBQyxFQUFBQyxtQkFBa0IsQ0FBRU4sV0FBQUEsRUFBWUMsY0FBQUEsQ0FBYSxDQUFFLEVBQXZERyxPQUNGRyxFQUFNLDBCQUF5QnBCLEVBQVksSUFBSUEsRUFBYyxLQUNsRWEsRUFBYSxrQ0FBb0MsSUFHbEQsT0FDQ1EsRUFBQUMsUUFBQXBCLGNBQUEsTUFBQSxDQUFLZSxJQUFLQSxFQUFLakIsVUFBV29CLENBQUcsRUFDM0JyQixDQUFRLENBR1osRUFyQkEsSUFBQXNCLEVBQUFULEVBQUEsT0FBQSxFQUNBRyxFQUFBSCxFQUFBLFlBQUEsRUFDQU0sRUFBQU4sRUFBQSw4QkFBQSxDLHFJQ0VpQixTQUF1QlcsR0FDdkMsTUFBUVQsR0FBa0IsRUFBQUMsRUFBQUMs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