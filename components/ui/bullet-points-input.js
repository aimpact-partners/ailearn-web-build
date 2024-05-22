System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","pragmate-ui@0.1.1/components","pragmate-ui@0.1.1/list","pragmate-ui@0.1.1/icons"],function(l,e){"use strict";var t,n,o,i,u,s,a,r;return l({BulletPointsInputContext:void 0,useBulletPointsInputContext:void 0,Control:void 0,useBulletPoints:void 0,BulletPointsInput:void 0,ActionsContainer:void 0,BulletPointsInputItem:void 0}),{setters:[function(e){t=e},function(e){n=e},function(e){o=e},function(e){i=e},function(e){u=e},function(e){s=e}],execute:function(){r=t.Bundle,(a=new r({module:{vspecifier:"@aimpact/ailearn-app@0.0.33.dev-01/components/ui/bullet-points-input"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",n],["react",o],["pragmate-ui/components",i],["pragmate-ui/list",u],["pragmate-ui/icons",s]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.33.dev-01/components/ui/bullet-points-input"),(r=new Map).set("./context",{hash:323603441,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useBulletPointsInputContext=t.BulletPointsInputContext=void 0;var n=e("react");const l=t.BulletPointsInputContext=n.default.createContext({});t.useBulletPointsInputContext=()=>n.default.useContext(l)}}),r.set("./control",{hash:1043499290,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Control=void 0;t.Control=class{constructor(){}}}}),r.set("./hooks/use-bullet-points",{hash:273495920,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useBulletPoints=function(t,n,{minBulletPoints:l,maxBulletPoints:e,values:o=[""]}){const i=o.length?o:[""],u=(0,B.useRef)([]),[s,a]=(0,B.useState)(null),[r,c]=(0,B.useState)(null),d=e=>{t({currentTarget:{name:n,value:e}})},p=()=>{i.length<e&&(d([...i,""]),setTimeout(()=>{f(i.length)},0))},m=e=>{var t;i.length>l&&((t=[...i]).splice(e,1),f(t.length-1),d(t))},f=e=>{e=u.current[e];e&&(e.focus(),e.setSelectionRange(0,e.value.length))},P=i.length>l;return{bulletPoints:i,handleInputChange:(e,t)=>{var t=t.target["value"],n=[...i];n[e]=t,d(n)},handleKeyDown:(e,t)=>{var n=e===i.length-1,l=""!==i[e].trim();"Tab"===t.key?(t.preventDefault(),n&&l?p():t.shiftKey||"Tab"!==t.key?"Tab"===t.key&&t.shiftKey&&f(e-1):f(e+1)):"Backspace"===t.key&&""===i[e]&&1<i.length&&(t.preventDefault(),m(e))},addBulletPoint:p,removeBulletPoint:m,registerBulletPointRef:(e,t)=>{u.current[e]=t},canRemoveBulletPoint:P,handleDragOver:e=>{s!==e&&c(e)},handleDragEnd:()=>{var e=[...i],t=i[s];e.splice(s,1),e.splice(r,0,t),a(null)},handleDragStart:(e,t)=>{a(t)}}};var B=e("react")}}),r.set("./index",{hash:112770758,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BulletPointsInput=void 0;var d=e("react"),p=e("./hooks/use-bullet-points"),m=e("./context"),f=e("pragmate-ui/list"),P=e("./item");t.BulletPointsInput=({children:e,values:t=[],actions:n,className:l,specs:o,handleChange:i,Item:u=P.BulletPointsInputItem,disabled:s=!1,minBulletPoints:a=1,maxBulletPoints:r=10,fieldName:c})=>{var i=(0,p.useBulletPoints)(i,c,{maxBulletPoints:r,minBulletPoints:a,values:t}),{bulletPoints:c,addBulletPoint:r}=i;return d.default.createElement(m.BulletPointsInputContext.Provider,{value:{hook:i,disabled:s,actions:n,addBulletPoint:r,specs:o}},d.default.createElement("section",{className:"bullet-points-form"+(l?" "+l:"")},e,d.default.createElement(f.List,{className:"bullet-point-items__list list-unstyled",items:c,control:u,container:"div"})))}}}),r.set("./interfaces",{hash:1562726509,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),r.set("./item/actions",{hash:718966097,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActionsContainer=function({index:n,fetching:l,setFetching:o,data:i}){const{hook:e,actions:u}=(0,c.useBulletPointsInputContext)(),{removeBulletPoint:t,canRemoveBulletPoint:s}=e,a=[];u&&Object.keys(u).forEach(t=>{var e={...u[t]};e.disabled=l||e.requireValue&&!i,delete e.requireValue,delete e.onClick;a.push(r.default.createElement(d.IconButton,{className:"circle",key:`action.${n}.`+t,...e,onClick:async e=>{try{e.preventDefault(),o(!0),await u[t].onClick(e,n,i),o(!1)}catch(e){console.error(e)}}}))});return r.default.createElement("section",{className:"bullet-point__actions flex-container flex-center"},a,s&&r.default.createElement(d.IconButton,{icon:"delete",title:"Delete",className:"delete-bullet-point circle",onClick:()=>t(n)}))};var r=e("react"),c=e("../context"),d=e("pragmate-ui/icons")}}),r.set("./item/index",{hash:1969141284,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BulletPointsInputItem=function({data:e,index:t}){const{hook:n,disabled:l}=(0,f.useBulletPointsInputContext)(),{handleInputChange:o,handleKeyDown:i,registerBulletPointRef:u,handleDragEnd:s,handleDragOver:a,handleDragStart:r}=n,[c,d]=m.default.useState(!1),p="bullet-points-item"+(c?" is-fetching":"");return m.default.createElement("div",{key:t,className:p,draggable:!0,onDragStart:e=>r(e,t),onDragOver:()=>a(t),onDragEnd:s},m.default.createElement(P.Icon,{icon:"drag",className:"drag-bullet-point"}),m.default.createElement("label",{className:"bullet-point-item__content"},m.default.createElement("span",null,t+1,"."),m.default.createElement("input",{className:"bullet-points-input",type:"text",value:e??"",disabled:l,onChange:e=>o(t,e),onKeyDown:e=>i(t,e),ref:e=>u(t,e)})),m.default.createElement(B.ActionsContainer,{index:t,fetching:c,setFetching:d,data:e}))};var m=e("react"),f=e("../context"),P=e("pragmate-ui/icons"),B=e("./actions")}}),a.exports.descriptor=[{im:"./context",from:"BulletPointsInputContext",name:"BulletPointsInputContext"},{im:"./context",from:"useBulletPointsInputContext",name:"useBulletPointsInputContext"},{im:"./control",from:"Control",name:"Control"},{im:"./hooks/use-bullet-points",from:"useBulletPoints",name:"useBulletPoints"},{im:"./index",from:"BulletPointsInput",name:"BulletPointsInput"},{im:"./item/actions",from:"ActionsContainer",name:"ActionsContainer"},{im:"./item/index",from:"BulletPointsInputItem",name:"BulletPointsInputItem"}],a.exports.process=function({require:e,prop:t,value:n}){!e&&"BulletPointsInputContext"!==t||l("BulletPointsInputContext",e?e("./context").BulletPointsInputContext:n),!e&&"useBulletPointsInputContext"!==t||l("useBulletPointsInputContext",e?e("./context").useBulletPointsInputContext:n),!e&&"Control"!==t||l("Control",e?e("./control").Control:n),!e&&"useBulletPoints"!==t||l("useBulletPoints",e?e("./hooks/use-bullet-points").useBulletPoints:n),!e&&"BulletPointsInput"!==t||l("BulletPointsInput",e?e("./index").BulletPointsInput:n),!e&&"ActionsContainer"!==t||l("ActionsContainer",e?e("./item/actions").ActionsContainer:n),!e&&"BulletPointsInputItem"!==t||l("BulletPointsInputItem",e?e("./item/index").BulletPointsInputItem:n)},l("__beyond_pkg",a),l("hmr",new function(){this.on=(e,t)=>a.hmr.on(e,t),this.off=(e,t)=>a.hmr.off(e,t)}),a.initialise(r)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2wudHMiLCIvdHMvaG9va3MvdXNlLWJ1bGxldC1wb2ludHMudHMiLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy9pdGVtL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbnRyb2wiLCJjb25zdHJ1Y3RvciIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJtaW5CdWxsZXRQb2ludHMiLCJtYXhCdWxsZXRQb2ludHMiLCJ2YWx1ZXMiLCJidWxsZXRQb2ludHMiLCJsZW5ndGgiLCJidWxsZXRQb2ludFJlZnMiLCJ1c2VSZWYiLCJkcmFnZ2VkSW5kZXgiLCJzZXREcmFnZ2VkSW5kZXgiLCJ1c2VTdGF0ZSIsImRyb3BwZWRJbmRleCIsInNldERyb3BwZWRJbmRleCIsImhhbmRsZUJ1bGxldFBvaW50c0NoYW5nZSIsInVwZGF0ZWRCdWxsZXRQb2ludHMiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJhZGRCdWxsZXRQb2ludCIsInNldFRpbWVvdXQiLCJmb2N1c0J1bGxldFBvaW50IiwicmVtb3ZlQnVsbGV0UG9pbnQiLCJpbmRleCIsInNwbGljZSIsImlucHV0RWxlbWVudCIsImN1cnJlbnQiLCJmb2N1cyIsInNldFNlbGVjdGlvblJhbmdlIiwiY2FuUmVtb3ZlQnVsbGV0UG9pbnQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlS2V5RG93biIsImlzTGFzdEJ1bGxldFBvaW50IiwiaXNOb3RFbXB0eSIsInRyaW0iLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInNoaWZ0S2V5IiwicmVnaXN0ZXJCdWxsZXRQb2ludFJlZiIsImVsZW1lbnQiLCJoYW5kbGVEcmFnT3ZlciIsImRyb3BwZWRQb3NpdGlvbiIsImhhbmRsZURyYWdFbmQiLCJuZXdCdWxsZXRQb2ludHMiLCJtb3ZlZEJ1bGxldFBvaW50IiwiaGFuZGxlRHJhZ1N0YXJ0IiwiXyIsIl91c2VCdWxsZXRQb2ludHMiLCJfY29udGV4dCIsIl9saXN0IiwiX2l0ZW0iLCJCdWxsZXRQb2ludHNJbnB1dCIsImNoaWxkcmVuIiwiYWN0aW9ucyIsImNsYXNzTmFtZSIsInNwZWNzIiwiSXRlbSIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsImRpc2FibGVkIiwiZmllbGROYW1lIiwiaG9vayIsInVzZUJ1bGxldFBvaW50cyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJjb250YWluZXIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJkYXRhIiwia2V5cyIsImZvckVhY2giLCJhdHRycyIsInJlcXVpcmVWYWx1ZSIsIm9uQ2xpY2siLCJwdXNoIiwiX2ljb25zIiwiSWNvbkJ1dHRvbiIsImF3YWl0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImljb24iLCJ0aXRsZSIsImNscyIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnT3ZlciIsIm9uRHJhZ0VuZCIsIkljb24iLCJ0eXBlIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJyZWYiLCJfYWN0aW9ucyIsIkFjdGlvbnNDb250YWluZXIiXSwibWFwcGluZ3MiOiI2bkNBQUEsSUFBQUEsRUFBQUMsRUFBQSxPQUFBLEVBWW1CLE1BQU1DLEVBQXdCQyxFQUFBRCx5QkFBR0YsRUFBQUksUUFBTUMsY0FBYyxFQUErQixFQUNDRixFQUFBRyw0QkFBakRBLElBQU1OLEVBQUFJLFFBQU1HLFdBQVdMLENBQXdCLEMsK0hDVnJHQyxFQUFBSyxjQURBQyxlLGdKQ0NpQixTQUNqQkMsRUFDQUMsRUFDQSxDQUFFQyxnQkFBQUEs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