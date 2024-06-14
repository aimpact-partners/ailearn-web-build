System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","pragmate-ui@0.1.1/components","framer-motion@10.18.0","pragmate-ui@0.1.1/icons"],function(a,e){"use strict";var t,n,r,i,o,s,c,m;return a({AddDynamicItem:void 0,Header:void 0,DynamicItem:void 0,List:void 0,useDynamicListContext:void 0,Provider:void 0}),{setters:[function(e){t=e},function(e){n=e},function(e){r=e},function(e){i=e},function(e){o=e},function(e){s=e}],execute:function(){m=t.Bundle,(c=new m({module:{vspecifier:"pragmate-ui@0.1.1/dynamic-list"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",n],["react",r],["pragmate-ui/components",i],["framer-motion",o],["pragmate-ui/icons",s]]),brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.1/dynamic-list"),(m=new Map).set("./components/add-item",{hash:2399851570,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AddDynamicItem=function({}){var[,,]=n.default.useState(),e=(0,r.useDynamicListContext)()["addItem"];return n.default.createElement(a.Button,{variant:"primary",onClick:e},"Add")};var n=e("react"),a=e("pragmate-ui/components"),r=e("../context")}}),m.set("./components/dragabble-list",{hash:792233935,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DraggableList=function({children:e,className:t=""}){const{values:n,setValues:a}=(0,o.useDynamicListContext)();return r.default.createElement(i.Reorder.Group,{className:t,values:n,onReorder:e=>{a(e)}},e)};var r=e("react"),i=e("framer-motion"),o=e("../context")}}),m.set("./components/header",{hash:2912242721,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function({children:e}){var[,,]=n.default.useState(),t=(0,a.useDynamicListContext)()["addItem"];return n.default.createElement("header",{className:"pui-dynamic-list__header"},n.default.createElement(r.Button,{variant:"primary",onClick:t},"Add"),e)};var n=e("react"),a=e("../context"),r=e("pragmate-ui/components")}}),m.set("./components/item",{hash:3585517604,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DynamicItem=function(e){const{children:t,index:n,identifier:a}=e,{removeItem:r,draggable:i,Item:o,registerRef:s}=(0,u.useDynamicListContext)(),c={className:"pui-dynamic-list__item",...i?{value:e.identifier}:{}},m=d.default.createElement(o,{...e},d.default.createElement("div",{className:"item__content"},t),d.default.createElement("section",{className:"item__actions"},d.default.createElement(l.IconButton,{icon:"delete",onClick:()=>r(a.id)})));return d.default.createElement("div",{...c,key:n,ref:e=>s(n,e)},m)};var d=e("react"),u=e("../context"),l=e("pragmate-ui/icons")}}),m.set("./components/list",{hash:241077873,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function({className:e}){const{name:t,values:r,setValues:i}=(0,s.useDynamicListContext)(),n={className:"pui-dynamic-list "+e},a=r.map((e,a)=>{return o.default.createElement(c.DynamicItem,{value:e,key:t+"."+a,index:a,identifier:e,setValue:e=>{return t=a,e=e,(n=[...r])[t]=e,void i(n);var t,n}},e)});return o.default.createElement("div",{...n},a)};var o=e("react"),s=e("../context"),c=e("./item")}}),m.set("./context",{hash:4099544747,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useDynamicListContext=t.DynamicListContext=void 0;var n=e("react");const a=t.DynamicListContext=n.default.createContext({});t.useDynamicListContext=()=>n.default.useContext(a)}}),m.set("./provider",{hash:1170767405,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Provider=function({name:a,onChange:r,draggable:e,children:t,value:n,Item:i,specs:o,className:s}){n&&!Array.isArray(n)&&console.warn("Warning: value prop must be an array or undefined. Received",n);const c=()=>"";n?.length||(n=[""]);const[m,d]=y.default.useState([...n]),[u,l]=y.default.useState(e),f=(0,y.useRef)([]),v=(y.default.useEffect(()=>{d(n)},[n.length]),{addItem:()=>{var e=[...m,""];d(e)},draggable:u,refs:f,specs:o??{},toggleDraggable:()=>l(!u),removeItem:n=>{var e=m.filter((e,t)=>t!==n),t=(d(e),{name:a,value:e});return r?.({target:t,currentTarget:t}),e},name:a,setItems:d,values:m,registerRef:(e,t)=>{f.current[e]=t},setValue:(e,t)=>{var n=[...m];n[e]=t,d(n)},setValues:e=>{d(e);e={name:a,value:e};r?.({target:e,currentTarget:e})},getDefaultValue:c,items:m,Item:i});return y.default.createElement(p.DynamicListContext.Provider,{value:v},y.default.createElement("div",{className:s},t))};var y=e("react"),p=e("./context")}}),m.set("./types",{hash:733921901,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),c.exports.descriptor=[{im:"./components/add-item",from:"AddDynamicItem",name:"AddDynamicItem"},{im:"./components/header",from:"Header",name:"Header"},{im:"./components/item",from:"DynamicItem",name:"DynamicItem"},{im:"./components/list",from:"List",name:"List"},{im:"./context",from:"useDynamicListContext",name:"useDynamicListContext"},{im:"./provider",from:"Provider",name:"Provider"}],c.exports.process=function({require:e,prop:t,value:n}){!e&&"AddDynamicItem"!==t||a("AddDynamicItem",e?e("./components/add-item").AddDynamicItem:n),!e&&"Header"!==t||a("Header",e?e("./components/header").Header:n),!e&&"DynamicItem"!==t||a("DynamicItem",e?e("./components/item").DynamicItem:n),!e&&"List"!==t||a("List",e?e("./components/list").List:n),!e&&"useDynamicListContext"!==t||a("useDynamicListContext",e?e("./context").useDynamicListContext:n),!e&&"Provider"!==t||a("Provider",e?e("./provider").Provider:n)},a("__beyond_pkg",c),a("hmr",new function(){this.on=(e,t)=>c.hmr.on(e,t),this.off=(e,t)=>c.hmr.off(e,t)}),c.initialise(m)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2FkZC1pdGVtLnRzeCIsIi90cy9jb21wb25lbnRzL2RyYWdhYmJsZS1saXN0LnRzeCIsIi90cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvY29tcG9uZW50cy9pdGVtLnRzeCIsIi90cy9jb21wb25lbnRzL2xpc3QudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL3Byb3ZpZGVyLnRzeCIsIi90eXBlcy50cyJdLCJuYW1lcyI6WyJfcmVhY3QiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJhZGRJdGVtIiwiX2NvbnRleHQiLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJjcmVhdGVFbGVtZW50IiwiX2NvbXBvbmVudHMiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsInJlcXVpcmUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInZhbHVlcyIsInNldFZhbHVlcyIsIl9mcmFtZXJNb3Rpb24iLCJSZW9yZGVyIiwiR3JvdXAiLCJvblJlb3JkZXIiLCJwcm9wcyIsImluZGV4IiwiaWRlbnRpZmllciIsInJlbW92ZUl0ZW0iLCJkcmFnZ2FibGUiLCJJdGVtIiwicmVnaXN0ZXJSZWYiLCJhdHRycyIsInZhbHVlIiwiYm9keSIsIl9pY29ucyIsIkljb25CdXR0b24iLCJpY29uIiwib25SZW1vdmUiLCJpZCIsImtleSIsInJlZiIsImVsZW1lbnQiLCJuYW1lIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsIl9pdGVtIiwiRHluYW1pY0l0ZW0iLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlIiwiRHluYW1pY0xpc3RDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0Iiwib25DaGFuZ2UiLCJzcGVjcyIsIkFycmF5IiwiaXNBcnJheSIsImNvbnNvbGUiLCJ3YXJuIiwiZ2V0RGVmYXVsdFZhbHVlIiwibGVuZ3RoIiwiaXRlbXMiLCJzZXRJdGVtcyIsImlzRHJhZ2dhYmxlIiwic2V0SXNEcmFnZ2FibGUiLCJyZWZzIiwidXNlUmVmIiwicHJvdmlkZXJEYXRhIiwidXNlRWZmZWN0IiwidG9nZ2xlRHJhZ2dhYmxlIiwibmV3SXRlbXMiLCJmaWx0ZXIiLCJfIiwiaSIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50IiwiUHJvdmlkZXIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Im84QkFJa0IsU0FBeUIsSUFDMUMsR0FBTSxDQUFBLENBQUEsR0FBb0JBLEVBQUFDLFFBQU1DLFNBQVEsRUFDaENDLEdBQVksRUFBQUMsRUFBQUMsdUJBQXFCLEVBQWpDRixXQUVSLE9BQ0NILEVBQUFDLFFBQUFLLGNBQUNDLEVBQUFDLE9BQU0sQ0FBQ0MsUUFBUSxVQUFVQyxRQUFTUCxDQUFPLEVBQUEsS0FBQSxDQUk1QyxFQWJBLElBQUFILEVBQUFXLEVBQUEsT0FBQSxFQUVBSixFQUFBSSxFQUFBLHdCQUFBLEVBQ0FQLEVBQUFPLEVBQUEsWUFBQSxDLCtJQ0NNLFNBQXdCLENBQUVDLFNBQUFBLEVBQVVDLFVBQUFBLEVBQVksRUFBRSxHQUN2RCxLQUFNLENBQUVDLE9BQUFBLEVBQVFDLFVBQUFBLENBQVMsR0FBSyxFQUFBWCxFQUFBQyx1QkFBcUIsRUFFbkQsT0FDQ0wsRUFBQUMsUUFBQUssY0FBQ1UsRUFBQUMsUUFBUUMsTUFBSyxDQUNiTCxVQUFXQSxFQUNYQyxPQUFRQSxFQUNSSyxVQUFXTCxJQUNWQyxFQUFVRCxDQUFNLENBQ2pCLENBQUMsRUFFQUYsQ0FBUSxDQUdaLEVBbEJBLElBQUFaLEVBQUFXLEVBQUEsT0FBQSxFQUNBSyxFQUFBTCxFQUFBLGVBQUEsRUFDQVAsRUFBQU8sRUFBQSxZQUFBLEMsaUlDQ2tCLFNBQWlCLENBQUVDLFNBQUFBLENBQVEsR0FDNUMsR0FBTSxDQUFBLENBQUEsR0FBb0JaLEVBQUFDLFFBQU1DLFNBQVEsRUFDaENDLEdBQVksRUFBQUMsRUFBQUMsdUJBQXFCLEVBQWpDRixXQUVSLE9BQ0NILEVBQUFDLFFBQUFLLGNBQUEsU0FBQSxDQUFRTyxV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