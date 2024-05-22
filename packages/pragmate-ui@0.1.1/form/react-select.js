System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","react-select@5.8.0","is-mobile@4.0.0"],function(l,e){"use strict";var t,r,a,n,s,o,c;return l("ReactSelect",void 0),{setters:[function(e){t=e},function(e){r=e},function(e){a=e},function(e){n=e},function(e){s=e}],execute:function(){c=t.Bundle,(o=new c({module:{vspecifier:"pragmate-ui@0.1.1/form/react-select"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",r],["react",a],["react-select",n],["is-mobile",s]]),brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.1/form/react-select"),(c=new Map).set("./index",{hash:2707568277,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ReactSelect=function(t){let e={...t},r=t["name"];var l=(0,c.useStyles)()["ref"];delete e.onChange;var a=t.options.find(e=>e.value===t.value);var n=({value:e})=>{t.onChange&&(e={value:e,name:r},t.onChange({target:e,currentTarget:{...e}}))};if((0,i.default)({tablet:!0}))return s.default.createElement(u.MobileSelect,{...t});n={onChange:n,...e,value:a};return s.default.createElement("div",{className:"pui-select",ref:l},t.label&&s.default.createElement("label",null,t.label),s.default.createElement(o.default,{classNamePrefix:"pui-react-select",...n}))};var s=e("react"),o=e("react-select"),c=e("./use-styles"),i=e("is-mobile"),u=e("./mobile-select")}}),c.set("./mobile-select",{hash:2753569965,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MobileSelect=function({options:e,...t}){const r=e.map(({value:e,label:t},r)=>a.default.createElement("option",{title:t,key:e+"-"+r,value:e},t)),l={...t};t.isDisabled&&(l.disabled=!0);return["isDisabled","defaultOption","key"].forEach(e=>delete l[e]),a.default.createElement("div",{className:"pui-mobile-select__container"},a.default.createElement("select",{title:"select",...l,className:"pui-mobile-select"},a.default.createElement("option",{value:""},t.placeholder),r))};var a=e("react")}}),c.set("./observer",{hash:3933443758,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StyleObserver=void 0;t.StyleObserver=class{observer;constructor({callback:t}){this.observer=new MutationObserver(e=>{e.forEach(e=>{"childList"===e.type&&t(e.addedNodes)})})}startObserving(e){e&&this.observer.observe(e,{childList:!0})}stopObserving(){this.observer.disconnect()}}}}),c.set("./use-styles",{hash:2902897892,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useStyles=function(){const n=r.default.useRef(null);return r.default.useEffect(()=>{if(n.current){const l=n.current.getRootNode()?.host;l||console.warn("is not inside a web component"),l.shadowRoot.insertedStyles||(l.shadowRoot.insertedStyles=new Set);var e=document.head.querySelectorAll("style[data-emotion]"),t=e=>{const r=new Set;e.forEach(e=>{var t=e?.textContent;e instanceof HTMLStyleElement&&!r.has(t)&&(e=e.cloneNode(!0),l.shadowRoot.appendChild(e),r.add(t))})};const a=new s.StyleObserver({callback:t});var r=document.head;return a.startObserving(r),t(e),()=>a.stopObserving()}},[n.current]),{ref:n}};var r=e("react"),s=e("./observer")}}),o.exports.descriptor=[{im:"./index",from:"ReactSelect",name:"ReactSelect"}],o.exports.process=function({require:e,prop:t,value:r}){!e&&"ReactSelect"!==t||l("ReactSelect",e?e("./index").ReactSelect:r)},l("__beyond_pkg",o),l("hmr",new function(){this.on=(e,t)=>o.hmr.on(e,t),this.off=(e,t)=>o.hmr.off(e,t)}),o.initialise(c)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giLCIvdHMvbW9iaWxlLXNlbGVjdC50c3giLCIvdHMvb2JzZXJ2ZXIudHMiLCIvdHMvdXNlLXN0eWxlcy50cyJdLCJuYW1lcyI6WyJwcm9wcyIsImxldCIsInByb3BlcnRpZXMiLCJuYW1lIiwicmVmIiwiX3VzZVN0eWxlcyIsInVzZVN0eWxlcyIsIm9uQ2hhbmdlIiwidmFsdWUiLCJvcHRpb25zIiwiZmluZCIsIml0ZW0iLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiX2lzTW9iaWxlIiwiZGVmYXVsdCIsInRhYmxldCIsIl9yZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJfbW9iaWxlU2VsZWN0IiwiTW9iaWxlU2VsZWN0IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJsYWJlbCIsIl9yZWFjdFNlbGVjdCIsImNsYXNzTmFtZVByZWZpeCIsInJlcXVpcmUiLCJvdXRwdXQiLCJtYXAiLCJpbmRleCIsInRpdGxlIiwia2V5IiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwiZm9yRWFjaCIsInBsYWNlaG9sZGVyIiwiZXhwb3J0cyIsIlN0eWxlT2JzZXJ2ZXIiLCJvYnNlcnZlciIsImNvbnN0cnVjdG9yIiwiY2FsbGJhY2siLCJ0aGlzIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwidHlwZSIsImFkZGVkTm9kZXMiLCJzdGFydE9ic2VydmluZyIsInRhcmdldE5vZGUiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3RvcE9ic2VydmluZyIsImRpc2Nvbm5lY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiaG9zdCIsImdldFJvb3ROb2RlIiwiY29uc29sZSIsIndhcm4iLCJzaGFkb3dSb290IiwiaW5zZXJ0ZWRTdHlsZXMiLCJTZXQiLCJoZWFkU3R5bGVzIiwiZG9jdW1lbnQiLCJoZWFkIiwicXVlcnlTZWxlY3RvckFsbCIsIm5vZGVzIiwibm9kZSIsInN0eWxlQ29udGVudCIsInRleHRDb250ZW50IiwiSFRNTFN0eWxlRWxlbWVudCIsImhhcyIsImNsb25lZFN0eWxlIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJhZGQiLCJzdHlsZU9ic2VydmVyIiwiX29ic2VydmVyIl0sIm1hcHBpbmdzIjoiNnZCQU1pQixTQUNJQSxHQUNwQkMsSUFBSUMsRUFBYSxDQUFFLEdBQUdGLENBQUssRUFDckJHLEVBQVNILEVBQVRHLFFBQ04sSUFBUUMsR0FBUSxFQUFBQyxFQUFBQyxXQUFTLEVBQWpCRixPQUNSLE9BQU9GLEVBQVdLLFNBQ2xCTixJQUFJTyxFQUFRUixFQUFNUyxRQUFRQyxLQUFLQyxHQUFRQSxFQUFLSCxRQUFVUixFQUFNUSxLQUFLLEVBRWpFLElBQU1ELEVBQVdBLENBQUFBLENBQVVDLE1BQUFBLENBQU8sS0FDNUJSLEVBQU1PLFdBQ0xLLEVBQVMsQ0FBRUosTUFBQUEsRUFBT0wsS0FBQUEsQ0FBSSxFQUM1QkgsRUFBTU8sU0FBUyxDQUFFSyxPQUFBQSxFQUFRQyxjQUFlLENBQUUsR0FBR0QsQ0FBTSxDQUFFLENBQUUsRUFDeEQsRUFFQSxJQUFJLEVBQUFFLEVBQUFDLFNBQVMsQ0FBRUMsT0FBUSxDQUFBLENBQUksQ0FBRSxFQUFHLE9BQU9DLEVBQUFGLFFBQUFHLGNBQUNDLEVBQUFDLGFBQVksQ0FBQSxHQUFLcEIsQ0FBSyxDQUFBLEVBRXhEcUIsRUFBUSxDQUFFZCxTQUFBQSxFQUFVLEdBQUdMLEVBQVlNLE1BQUFBLENBQUssRUFFOUMsT0FDQ1MsRUFBQUYsUUFBQUcsY0FBQSxNQUFBLENBQUtJLFVBQVUsYUFBYWxCLElBQUtBLENBQUcsRUFDbENKLEVBQU11QixPQUFTTixFQUFBRixRQUFBRyxjQUFBLFFBQUEsS0FBUWxCLEVBQU11QixLQUFLLEVBQ25DTixFQUFBRixRQUFBRyxjQUFDTSxFQUFBVCxRQUFNLENBQUNVLGdCQUFnQixtQkFBa0IsR0FBS0osQ0FBSyxDQUFBLENBQUksQ0FHM0QsRUE5QkEsSUFBQUosRUFBQVMsRUFBQSxPQUFBLEVBQ0FGLEVBQUFFLEVBQUEsY0FBQSxFQUNBckIs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