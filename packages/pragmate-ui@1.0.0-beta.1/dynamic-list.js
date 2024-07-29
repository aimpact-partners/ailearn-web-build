System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","pragmate-ui@1.0.0-beta.1/components","framer-motion@10.18.0","pragmate-ui@1.0.0-beta.1/icons"],function(n,e){var t,a,r,i,o,s,c,m;return n({AddDynamicItem:void 0,DraggableList:void 0,Header:void 0,DynamicItem:void 0,List:void 0,useDynamicListContext:void 0,Provider:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){i=e},function(e){o=e},function(e){s=e}],execute:function(){m=t.Bundle,(c=new m({module:{vspecifier:"pragmate-ui@1.0.0-beta.1/dynamic-list"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",a],["react",r],["pragmate-ui/components",i],["framer-motion",o],["pragmate-ui/icons",s]]),brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@1.0.0-beta.1/dynamic-list"),(m=new Map).set("./components/add-item",{hash:3769438584,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AddDynamicItem=function(){var e=(0,r.useDynamicListContext)().addItem;return a.default.createElement(n.Button,{variant:"primary",onClick:e},"Add")};var a=e("react"),n=e("pragmate-ui/components"),r=e("../context")}}),m.set("./components/dragabble-list",{hash:3835674e3,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DraggableList=function({children:e,className:t=""}){let{values:a,setValues:n}=(0,o.useDynamicListContext)();return r.default.createElement(i.Reorder.Group,{className:t,values:a,onReorder:e=>{n(e)}},e)};var r=e("react"),i=e("framer-motion"),o=e("../context")}}),m.set("./components/header",{hash:3832436420,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function({children:e}){var t=(0,n.useDynamicListContext)().addItem;return a.default.createElement("header",{className:"pui-dynamic-list__header"},a.default.createElement(r.Button,{variant:"primary",onClick:t},"Add"),e)};var a=e("react"),n=e("../context"),r=e("pragmate-ui/components")}}),m.set("./components/item",{hash:639523093,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DynamicItem=function(e){let{children:t,index:a,identifier:n}=e,{removeItem:r,draggable:i,Item:o,registerRef:s}=(0,l.useDynamicListContext)(),c={className:"pui-dynamic-list__item",...i?{value:e.identifier}:{}},m=d.default.createElement(o,{...e},d.default.createElement("div",{className:"item__content"},t),d.default.createElement("section",{className:"item__actions"},d.default.createElement(u.IconButton,{icon:"delete",onClick:()=>r(n.id)})));return d.default.createElement("div",{...c,key:a,ref:e=>s(a,e)},m)};var d=e("react"),l=e("../context"),u=e("pragmate-ui/icons")}}),m.set("./components/list",{hash:2727787293,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function({className:e}){let{name:t,values:r,setValues:i}=(0,s.useDynamicListContext)(),a={className:"pui-dynamic-list "+e},n=r.map((e,n)=>o.default.createElement(c.DynamicItem,{value:e,key:t+"."+n,index:n,identifier:e,setValue:e=>{var t,a=n;(t=[...r])[a]=e,i(t)}},e));return o.default.createElement("div",{...a},n)};var o=e("react"),s=e("../context"),c=e("./item")}}),m.set("./context",{hash:2545632455,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useDynamicListContext=t.DynamicListContext=void 0;var a=e("react");let n=t.DynamicListContext=a.default.createContext({});t.useDynamicListContext=()=>a.default.useContext(n)}}),m.set("./definitions",{hash:733921901,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),m.set("./provider",{hash:811037713,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Provider=function({name:n,onChange:r,draggable:e,children:t,value:a,Item:i,specs:o,className:s}){a&&!Array.isArray(a)&&console.warn("Warning: value prop must be an array or undefined. Received",a);a?.length||(a=[""]);let[c,m]=p.default.useState([...a]),[d,l]=p.default.useState(e),u=(0,p.useRef)([]),f=(p.default.useEffect(()=>{m(a)},[a.length]),{addItem:()=>{var e=[...c,""];m(e)},draggable:d,refs:u,specs:o??{},toggleDraggable:()=>l(!d),removeItem:a=>{var e=c.filter((e,t)=>t!==a),t=(m(e),{name:n,value:e});return r?.({target:t,currentTarget:t}),e},name:n,setItems:m,values:c,registerRef:(e,t)=>{u.current[e]=t},setValue:(e,t)=>{var a=[...c];a[e]=t,m(a)},setValues:e=>{m(e),e={name:n,value:e},r?.({target:e,currentTarget:e})},getDefaultValue:()=>"",items:c,Item:i});return p.default.createElement(v.DynamicListContext.Provider,{value:f},p.default.createElement("div",{className:s},t))};var p=e("react"),v=e("./context")}}),c.exports.descriptor=[{im:"./components/add-item",from:"AddDynamicItem",name:"AddDynamicItem"},{im:"./components/dragabble-list",from:"DraggableList",name:"DraggableList"},{im:"./components/header",from:"Header",name:"Header"},{im:"./components/item",from:"DynamicItem",name:"DynamicItem"},{im:"./components/list",from:"List",name:"List"},{im:"./context",from:"useDynamicListContext",name:"useDynamicListContext"},{im:"./provider",from:"Provider",name:"Provider"}],c.exports.process=function({require:e,prop:t,value:a}){!e&&"AddDynamicItem"!==t||n("AddDynamicItem",e?e("./components/add-item").AddDynamicItem:a),!e&&"DraggableList"!==t||n("DraggableList",e?e("./components/dragabble-list").DraggableList:a),!e&&"Header"!==t||n("Header",e?e("./components/header").Header:a),!e&&"DynamicItem"!==t||n("DynamicItem",e?e("./components/item").DynamicItem:a),!e&&"List"!==t||n("List",e?e("./components/list").List:a),!e&&"useDynamicListContext"!==t||n("useDynamicListContext",e?e("./context").useDynamicListContext:a),!e&&"Provider"!==t||n("Provider",e?e("./provider").Provider:a)},n("__beyond_pkg",c),n("hmr",new function(){this.on=(e,t)=>c.hmr.on(e,t),this.off=(e,t)=>c.hmr.off(e,t)}),c.initialise(m)}}});