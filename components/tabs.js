System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0"],function(n,e){var t,a,r,s,o;return n({TabsContainer:void 0,Panes:void 0,Tab:void 0,Tabs:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e}],execute:function(){o=t.Bundle,(s=new o({module:{vspecifier:"@aimpact/ailearn-app@0.1.4-test.02/components/tabs"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",a],["react",r]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.4-test.02/components/tabs"),(o=new Map).set("./context",{hash:1113529643,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useTabsContext=t.TabsContext=void 0;var a=e("react");let n=t.TabsContext=a.default.createContext({});t.useTabsContext=()=>a.default.useContext(n)}}),o.set("./index",{hash:2369255195,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.TabsContainer=void 0;var s=e("react"),o=e("./context");let i=s.default.useState;t.TabsContainer=({active:e,onChange:t,children:a,panes:n})=>{var e=e||0,[e,r]=i(e);return s.default.createElement(o.TabsContext.Provider,{value:{panes:n,activeTab:e,setActiveTab:r,onChange:t}},s.default.createElement("section",{className:"tab-container"},a))}}}),o.set("./interfaces",{hash:3382115399,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),o.set("./panes",{hash:466290051,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Panes=function({children:e}){var t=(0,n.useTabsContext)().activeTab,e=(e=a.default.Children.toArray(e))[t];return a.default.createElement("section",{className:"tab-content"},e)};var a=e("react"),n=e("./context")}}),o.set("./tab",{hash:1261380326,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Tab=function(t){let{children:e,index:a,disabled:n}=t,{activeTab:r,setActiveTab:s,onChange:o}=(0,u.useTabsContext)(),i=`tab ${a===r?"active":""} `+(n?" is-disabled":""),c={};return n||(c.onClick=e=>{o&&o(e,a),t.onClick&&t.onClick(e),s(a)}),l.default.createElement("div",{className:i,...c},e)};var l=e("react"),u=e("./context")}}),o.set("./tabs",{hash:3220024426,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Tabs=void 0;var n=e("react"),r=e("./context"),s=e("./use-scroll"),o=e("./tab");t.Tabs=({children:e})=>{var t=(0,r.useTabsContext)().activeTab,a=n.default.useRef(null),t=((0,s.useScroll)(a,t),e.map((e,t)=>(t={...e.props,index:t,key:t},n.default.isValidElement(e)&&e.type===o.Tab?n.default.cloneElement(e,t):e)));return n.default.createElement("header",{className:"tab-menu"},n.default.createElement("div",{className:"tabs",ref:a},t))}}}),o.set("./use-scroll",{hash:3827999018,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useScroll=function(r,s){a.default.useEffect(()=>{var e,t,a,n=s;(n=r.current?.querySelectorAll(".tab")[n])&&(t=(e=r.current).getBoundingClientRect(),n=n.getBoundingClientRect(),a=e.scrollLeft,n.left<t.left?e.scrollTo({left:a+n.left-t.left,behavior:"smooth"}):n.right>t.right&&e.scrollTo({left:a+n.right-t.right,behavior:"smooth"}))},[s])};var a=e("react")}}),s.exports.descriptor=[{im:"./index",from:"TabsContainer",name:"TabsContainer"},{im:"./panes",from:"Panes",name:"Panes"},{im:"./tab",from:"Tab",name:"Tab"},{im:"./tabs",from:"Tabs",name:"Tabs"}],s.exports.process=function({require:e,prop:t,value:a}){!e&&"TabsContainer"!==t||n("TabsContainer",e?e("./index").TabsContainer:a),!e&&"Panes"!==t||n("Panes",e?e("./panes").Panes:a),!e&&"Tab"!==t||n("Tab",e?e("./tab").Tab:a),!e&&"Tabs"!==t||n("Tabs",e?e("./tabs").Tabs:a)},n("__beyond_pkg",s),n("hmr",new function(){this.on=(e,t)=>s.hmr.on(e,t),this.off=(e,t)=>s.hmr.off(e,t)}),s.initialise(o)}}});