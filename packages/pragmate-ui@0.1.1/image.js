System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","pragmate-ui@0.1.1/icons","@beyond-js/kernel@0.1.9/styles"],function(a,e){"use strict";var t,r,n,o,i,s;return a("Image",void 0),{setters:[function(e){t=e},function(e){r=e},function(e){n=e},function(e){o=e}],execute:function(){s=t.Bundle,(i=new s({module:{vspecifier:"pragmate-ui@0.1.1/image"},type:"code",name:"image"},e.meta.url).package()).dependencies.update([["react",r],["pragmate-ui/icons",n],["@beyond-js/kernel/styles",o]]),brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.1/image"),(s=new Map).set("./context",{hash:818759056,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useImageContext=t.ImageContext=void 0;var r=e("react");const a=t.ImageContext=r.createContext({});t.useImageContext=()=>r.useContext(a)}}),s.set("./error/index",{hash:1634346444,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Error=function(){const{src:e,onError:t}=(0,a.useImageContext)();return r.default.createElement("div",{"data-src":e,className:"content-error"},t&&r.default.createElement(n.IconButton,{onClick:e=>{e.stopPropagation(),t&&"function"==typeof t&&t(e)},icon:"refresh"}))};var r=e("react"),a=e("../context"),n=e("pragmate-ui/icons")}}),s.set("./hooks/use-loading",{hash:1800321396,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useLoading=function(n){const[,o]=(0,r.useState)(),[i,s]=(0,r.useState)({size:"200x200",loaded:!1});return(0,r.useEffect)(()=>{var e,t,r,a=n.src;return i.url!==a&&(e=n.size??i.size,e=e,t=a=a,(r=new globalThis.Image).onload=()=>s({...i,loaded:!0,error:!1}),r.onerror=()=>{s({...i,error:!0,loaded:!1})},r.src=t,o(r),s({...i,url:a,size:e,src:t,loaded:!0})),()=>o({...i,onload:void 0,onerror:void 0})},[n.src]),[i,s]};var r=e("react")}}),s.set("./img",{hash:2913122704,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Img=function(){const{src:e,setState:t,state:r,loading:a,alt:n}=(0,c.useImageContext)(),o=a&&"eager"===a||"lazy"===a?a:"eager",i=n??" ";return s.default.createElement("img",{src:e,onLoad:()=>t({...r,error:!1,htmlLoaded:!0}),loading:o,alt:i})};var s=e("react"),c=e("./context")}}),s.set("./index",{hash:1288774939,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Image=function(e){var{className:t,onClick:r,children:a,sizeLoading:n}=e,[o,i]=(0,I.useLoading)(e),{error:s,loaded:c,htmlLoaded:u}=o;let l="pui-image "+(t?" "+t:"");c||u||(l+=" pui-image-preload");s&&(l+=" pui-image-error");const d=s?x.Error:v.Img,m={...e,className:l,onClick:r},f=(["src","alt","onError","children","size","loading","error","sources","sizeLoading"].forEach(e=>delete m[e]),{...e,state:o,src:e.src,setState:i}),g={};(!c||!u||s)&&n&&"object"==typeof n&&n.height&&n.width&&(g.height=n.height,g.width=n.width);return h.default.createElement(p.ImageContext.Provider,{value:f},h.default.createElement("picture",{...m,style:g,"data-src":e.src},h.default.createElement(y.Sources,null),h.default.createElement(d,null),a))};var h=e("react"),p=e("./context"),x=e("./error"),v=e("./img"),y=e("./sources"),I=e("./hooks/use-loading")}}),s.set("./interfaces/index",{hash:3464374419,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),s.set("./sources/index",{hash:1995365142,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Sources=function(){var e=(0,a.useImageContext)()["sources"];if(!e||!Array.isArray(e)||!e.length)return null;e=e.map(e=>r.default.createElement(n.Item,{key:e.srcSet,...e}));return r.default.createElement(r.default.Fragment,null,e)};var r=e("react"),a=e("../context"),n=e("./item")}}),s.set("./sources/item",{hash:377065182,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function(e){if(!e.srcSet)return null;let t="";var{maxWidth:r,minWidth:a}=e;!r&&a&&(t=`(min-width: ${a}px)`);r&&!a&&(t=`(max-width: ${r}px)`);r&&a&&(t=`(min-width: ${a}px) and (max-width: ${r}px)`);const n={...e};return["maxWidth","minWidth"].forEach(e=>delete n[e]),o.default.createElement("source",{media:t,...n})};var o=e("react")}}),i.exports.descriptor=[{im:"./index",from:"Image",name:"Image"}],i.exports.process=function({require:e,prop:t,value:r}){!e&&"Image"!==t||a("Image",e?e("./index").Image:r)},a("__beyond_pkg",i),a("hmr",new function(){this.on=(e,t)=>i.hmr.on(e,t),this.off=(e,t)=>i.hmr.off(e,t)}),i.initialise(s)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2Vycm9yL2luZGV4LnRzeCIsIi90cy9ob29rcy91c2UtbG9hZGluZy50cyIsIi90cy9pbWcudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbmRleC50cyIsIi90cy9zb3VyY2VzL2luZGV4LnRzeCIsIi90cy9zb3VyY2VzL2l0ZW0udHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIkltYWdlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlSW1hZ2VDb250ZXh0IiwidXNlQ29udGV4dCIsInNyYyIsIm9uRXJyb3IiLCJfY29udGV4dCIsIl9yZWFjdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiZGF0YS1zcmMiLCJjbGFzc05hbWUiLCJfaWNvbnMiLCJJY29uQnV0dG9uIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiaWNvbiIsInByb3BzIiwic2V0SW1hZ2UiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJzaXplIiwibG9hZGVkIiwidXNlRWZmZWN0IiwiZmluYWxTcmMiLCJuZXdJbWFnZSIsImN1cnJlbnRTcmMiLCJ1cmwiLCJnbG9iYWxUaGlzIiwiSW1hZ2UiLCJvbmxvYWQiLCJlcnJvciIsIm9uZXJyb3IiLCJ1bmRlZmluZWQiLCJsb2FkaW5nIiwiYWx0IiwibG9hZGluZ0lNRyIsImFsdElNRyIsIm9uTG9hZCIsImh0bWxMb2FkZWQiLCJjaGlsZHJlbiIsInNpemVMb2FkaW5nIiwiX3VzZUxvYWRpbmciLCJ1c2VMb2FkaW5nIiwibGV0IiwiY2xzIiwiQ29udGVudCIsIl9lcnJvciIsIkVycm9yIiwiX2ltZyIsIkltZyIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsImZvckVhY2giLCJwcm9wIiwic3R5bGVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJQcm92aWRlciIsInN0eWxlIiwiX3NvdXJjZXMiLCJTb3VyY2VzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJzb3VyY2VzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsIl9pdGVtIiwiSXRlbSIsImtleSIsInNyY1NldCIsIkZyYWdtZW50IiwibWVkaWEiLCJtYXhXaWR0aCIsIm1pbldpZHRoIl0sIm1hcHBpbmdzIjoiNHRCQUFBLElBQUFBLEVBQUFDLEVBQUEsT0FBQSxFQUdPLE1BQU1DLEVBQVlDLEVBQUFELGFBQTRCRixFQUFNSSxjQUFjLEVBQWMsRUFDVEQsRUFBQUUsZ0JBQS9DQSxJQUFnQkwsRUFBTU0sV0FBV0osQ0FBWSxDLDBIQ0F0RSxXQUNGLEtBQU0sQ0FBRUssSUFBQUEsRUFBS0MsUUFBQUEsQ0FBTyxHQUFLLEVBQUFDLEVBQUFKLGlCQUFlLEVBS3hDLE9BQ0lLLEVBQUFDLFFBQUFDLGNBQUEsTUFBQSxDQUFBQyxXQUFlTixFQUFLTyxVQUFVLGVBQWUsRUFDeENOLEdBQVdFLEVBQUFDLFFBQUFDLGNBQUNHLEVBQUFDLFdBQVUsQ0FBQ0MsUUFOVkMsSUFDbEJBLEVBQU1DLGdCQUFlLEVBQ2pCWCxHQUE4QixZQUFuQixPQUFPQSxHQUF3QkEsRUFBUVUsQ0FBSyxDQUMvRCxFQUd1REUsS0FBSyxTQUFTLENBQUEsQ0FBRyxDQUc1RSxFQWZBLElBQUFWLEVBQUFULEVBQUEsT0FBQSxFQUNBUSxFQUFBUixFQUFBLFlBQUEsRUFDQWMsRUFBQWQsRUFBQSxtQkFBQSxDLHFJQ0NNLFNBQXFCb0IsR0FDMUIsS0FDTSxDQUFBLENBQVFDLElBQVksRUFBQVosRUFBQWEsVUFBUSxFQUM1QixDQUFDQyxFQUFPQyxJQUFZLEVBQUFmLEVBQUFhLFVBRlUsQ0FBRUcsS0FBTSxVQUFXQyxPQUFRLENBQUEsQ0FBSyxDQUVOLEVBc0I5RCxPQVJBLEVBQUFqQixFQUFBa0IsV0FBVSxLQUNULElBYitCRixFQUMzQkcsRUFDRUMsRUFXQUMsRUFBcUJWLEVBQU1kLElBS2pDLE9BSklpQixFQUFNUSxNQUFRRCxJQUNiTCxFQUFlTCxFQUFNSyxNQUFRRixFQUFNRSxLQWZUQSxFQWdC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