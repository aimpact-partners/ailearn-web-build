System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/reactive@1.1.12/model","react-dom@18.2.0","pragmate-ui@0.1.1/icons","@beyond-js/kernel@0.1.9/styles"],function(o,e){"use strict";var t,n,r,a,i,u,c,s;return o({ContextMenuContainer:void 0,ContextMenuManager:void 0,ContextMenu:void 0,ContextItem:void 0}),{setters:[function(e){t=e},function(e){n=e},function(e){r=e},function(e){a=e},function(e){i=e},function(e){u=e}],execute:function(){s=t.Bundle,(c=new s({module:{vspecifier:"pragmate-ui@0.1.1/context-menu"},type:"code"},e.meta.url).package()).dependencies.update([["react",n],["@beyond-js/reactive/model",r],["react-dom",a],["pragmate-ui/icons",i],["@beyond-js/kernel/styles",u]]),brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.1/context-menu"),(s=new Map).set("./container",{hash:648905027,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ContextMenuContainer=function({children:e}){const[t,n]=o.default.useState();return o.default.createElement(r.ContextMenuContext.Provider,{value:{closeContextMenu:()=>n(null),opened:!!t,position:t}},o.default.createElement("span",{className:"context-menu__container",onClick:e=>{e.stopPropagation(),e.preventDefault(),n({x:e.clientX,y:e.clientY})}},e))};var o=e("react"),r=e("./context")}}),s.set("./context-menu",{hash:3144112597,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ContextMenuManager=t.ContextMenu=void 0;class n extends e("@beyond-js/reactive/model").ReactiveModel{_event;constructor(){super(),this._event=null,this.init()}get event(){return this._event}get currentTarget(){return this._event?.currentTarget||null}get target(){return this._event?.target||null}init(){globalThis.oncontextmenu=e=>{var t=(this._event=e).target,n=t.closest("[data-context]");t.dataset.context||n?(e.preventDefault(),e.stopPropagation(),e=t.dataset.context||n?.dataset.context,this.triggerEvent("closed"),e&&this.triggerEvent("fired."+e)):(t.classList.contains("ds-context-menu")||t.closest(".ds-context-menu"))&&this.triggerEvent("closed")}}}t.ContextMenu=n,t.ContextMenuManager=new n}}),s.set("./context",{hash:1787625806,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useContextMenuContext=t.ContextMenuContext=void 0;var n=e("react");const o=t.ContextMenuContext=n.default.createContext({});t.useContextMenuContext=()=>n.default.useContext(o)}}),s.set("./index",{hash:57201254,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ContextMenu=function({className:e,unmount:t,children:n}){const a=document.createElement("span"),i=(0,s.useRef)(null),{opened:o,position:u}=(0,l.useContextMenuContext)(),c=()=>{document.removeEventListener("click",c),t(!1)};var r;return(0,s.useEffect)(()=>{var e,t,n,o,r=document.querySelector("body");if(r&&(document.addEventListener("click",c),r.appendChild(a),r=i.current))return{offsetWidth:e,offsetHeight:t}=r,n=e+u.x,o=t+u.y,n>globalThis.innerWidth&&(r.style.left=u.x-e+"px"),o>globalThis.innerHeight&&(r.style.top=u.y-t+"px"),()=>{document.removeEventListener("click",c),a.remove()}},[u?.x,u?.y]),o?(r={position:"absolute",top:u.y+"px",left:u.x+"px"},s.default.createElement("div",{style:r,ref:i,className:e="pui-context-menu "+(e||"")},n)):null};var s=e("react"),l=e("./context")}}),s.set("./item",{hash:2629990627,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ContextItem=function({onClick:t,icon:e,label:n}){const o=(0,i.useContextMenuContext)().closeContextMenu;return r.default.createElement("li",{onClick:async e=>{e.stopPropagation(),await t(e),o()}},e?r.default.createElement(a.Icon,{icon:e}):r.default.createElement("span",null),n)};var r=e("react"),a=e("pragmate-ui/icons"),i=e("./context")}}),c.exports.descriptor=[{im:"./container",from:"ContextMenuContainer",name:"ContextMenuContainer"},{im:"./context-menu",from:"ContextMenuManager",name:"ContextMenuManager"},{im:"./index",from:"ContextMenu",name:"ContextMenu"},{im:"./item",from:"ContextItem",name:"ContextItem"}],c.exports.process=function({require:e,prop:t,value:n}){!e&&"ContextMenuContainer"!==t||o("ContextMenuContainer",e?e("./container").ContextMenuContainer:n),!e&&"ContextMenuManager"!==t||o("ContextMenuManager",e?e("./context-menu").ContextMenuManager:n),!e&&"ContextMenu"!==t||o("ContextMenu",e?e("./index").ContextMenu:n),!e&&"ContextItem"!==t||o("ContextItem",e?e("./item").ContextItem:n)},o("__beyond_pkg",c),o("hmr",new function(){this.on=(e,t)=>c.hmr.on(e,t),this.off=(e,t)=>c.hmr.off(e,t)}),c.initialise(s)}}});