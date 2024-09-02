System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","pragmate-ui@1.0.0-beta.2/components","pragmate-ui@1.0.0-beta.2/list","pragmate-ui@1.0.0-beta.2/icons"],function(l,e){var t,n,o,i,u,a,s,r;return l({BulletPointsInputContext:void 0,useBulletPointsInputContext:void 0,Control:void 0,useBulletPoints:void 0,BulletPointsInput:void 0,ActionsContainer:void 0,BulletPointsInputItem:void 0}),{setters:[function(e){t=e},function(e){n=e},function(e){o=e},function(e){i=e},function(e){u=e},function(e){a=e}],execute:function(){r=t.Bundle,(s=new r({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.16/components/ui/bullet-points-input"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",n],["react",o],["pragmate-ui/components",i],["pragmate-ui/list",u],["pragmate-ui/icons",a]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.16/components/ui/bullet-points-input"),(r=new Map).set("./context",{hash:323603441,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useBulletPointsInputContext=t.BulletPointsInputContext=void 0;var n=e("react");let l=t.BulletPointsInputContext=n.default.createContext({});t.useBulletPointsInputContext=()=>n.default.useContext(l)}}),r.set("./control",{hash:1043499290,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Control=void 0,t.Control=class{constructor(){}}}}),r.set("./hooks/use-bullet-points",{hash:273495920,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useBulletPoints=function(t,n,{minBulletPoints:l,maxBulletPoints:e,values:o=[""]}){let i=o.length?o:[""],u=(0,B.useRef)([]),[a,s]=(0,B.useState)(null),[r,c]=(0,B.useState)(null),d=e=>{t({currentTarget:{name:n,value:e}})},p=()=>{i.length<e&&(d([...i,""]),setTimeout(()=>{f(i.length)},0))},m=e=>{var t;i.length>l&&((t=[...i]).splice(e,1),f(t.length-1),d(t))},f=e=>{(e=u.current[e])&&(e.focus(),e.setSelectionRange(0,e.value.length))},P=i.length>l;return{bulletPoints:i,handleInputChange:(e,t)=>{var t=t.target.value,n=[...i];n[e]=t,d(n)},handleKeyDown:(e,t)=>{var n=e===i.length-1,l=""!==i[e].trim();"Tab"===t.key?(t.preventDefault(),n&&l?p():t.shiftKey||"Tab"!==t.key?"Tab"===t.key&&t.shiftKey&&f(e-1):f(e+1)):"Backspace"===t.key&&""===i[e]&&1<i.length&&(t.preventDefault(),m(e))},addBulletPoint:p,removeBulletPoint:m,registerBulletPointRef:(e,t)=>{u.current[e]=t},canRemoveBulletPoint:P,handleDragOver:e=>{a!==e&&c(e)},handleDragEnd:()=>{var e=[...i],t=i[a];e.splice(a,1),e.splice(r,0,t),s(null)},handleDragStart:(e,t)=>{s(t)}}};var B=e("react")}}),r.set("./index",{hash:112770758,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BulletPointsInput=void 0;var d=e("react"),p=e("./hooks/use-bullet-points"),m=e("./context"),f=e("pragmate-ui/list"),P=e("./item");t.BulletPointsInput=({children:e,values:t=[],actions:n,className:l,specs:o,handleChange:i,Item:u=P.BulletPointsInputItem,disabled:a=!1,minBulletPoints:s=1,maxBulletPoints:r=10,fieldName:c})=>{var{bulletPoints:c,addBulletPoint:r}=i=(0,p.useBulletPoints)(i,c,{maxBulletPoints:r,minBulletPoints:s,values:t});return d.default.createElement(m.BulletPointsInputContext.Provider,{value:{hook:i,disabled:a,actions:n,addBulletPoint:r,specs:o}},d.default.createElement("section",{className:"bullet-points-form"+(l?" "+l:"")},e,d.default.createElement(f.List,{className:"bullet-point-items__list list-unstyled",items:c,control:u,container:"div"})))}}}),r.set("./interfaces",{hash:1562726509,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),r.set("./item/actions",{hash:718966097,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActionsContainer=function({index:n,fetching:l,setFetching:o,data:i}){let{hook:e,actions:u}=(0,c.useBulletPointsInputContext)(),{removeBulletPoint:t,canRemoveBulletPoint:a}=e,s=[];return u&&Object.keys(u).forEach(t=>{var e={...u[t]};e.disabled=l||e.requireValue&&!i,delete e.requireValue,delete e.onClick,s.push(r.default.createElement(d.IconButton,{className:"circle",key:`action.${n}.`+t,...e,onClick:async e=>{try{e.preventDefault(),o(!0),await u[t].onClick(e,n,i),o(!1)}catch(e){console.error(e)}}}))}),r.default.createElement("section",{className:"bullet-point__actions flex-container flex-center"},s,a&&r.default.createElement(d.IconButton,{icon:"delete",title:"Delete",className:"delete-bullet-point circle",onClick:()=>t(n)}))};var r=e("react"),c=e("../context"),d=e("pragmate-ui/icons")}}),r.set("./item/index",{hash:1969141284,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BulletPointsInputItem=function({data:e,index:t}){let{hook:n,disabled:l}=(0,f.useBulletPointsInputContext)(),{handleInputChange:o,handleKeyDown:i,registerBulletPointRef:u,handleDragEnd:a,handleDragOver:s,handleDragStart:r}=n,[c,d]=m.default.useState(!1),p="bullet-points-item"+(c?" is-fetching":"");return m.default.createElement("div",{key:t,className:p,draggable:!0,onDragStart:e=>r(e,t),onDragOver:()=>s(t),onDragEnd:a},m.default.createElement(P.Icon,{icon:"drag",className:"drag-bullet-point"}),m.default.createElement("label",{className:"bullet-point-item__content"},m.default.createElement("span",null,t+1,"."),m.default.createElement("input",{className:"bullet-points-input",type:"text",value:e??"",disabled:l,onChange:e=>o(t,e),onKeyDown:e=>i(t,e),ref:e=>u(t,e)})),m.default.createElement(B.ActionsContainer,{index:t,fetching:c,setFetching:d,data:e}))};var m=e("react"),f=e("../context"),P=e("pragmate-ui/icons"),B=e("./actions")}}),s.exports.descriptor=[{im:"./context",from:"BulletPointsInputContext",name:"BulletPointsInputContext"},{im:"./context",from:"useBulletPointsInputContext",name:"useBulletPointsInputContext"},{im:"./control",from:"Control",name:"Control"},{im:"./hooks/use-bullet-points",from:"useBulletPoints",name:"useBulletPoints"},{im:"./index",from:"BulletPointsInput",name:"BulletPointsInput"},{im:"./item/actions",from:"ActionsContainer",name:"ActionsContainer"},{im:"./item/index",from:"BulletPointsInputItem",name:"BulletPointsInputItem"}],s.exports.process=function({require:e,prop:t,value:n}){!e&&"BulletPointsInputContext"!==t||l("BulletPointsInputContext",e?e("./context").BulletPointsInputContext:n),!e&&"useBulletPointsInputContext"!==t||l("useBulletPointsInputContext",e?e("./context").useBulletPointsInputContext:n),!e&&"Control"!==t||l("Control",e?e("./control").Control:n),!e&&"useBulletPoints"!==t||l("useBulletPoints",e?e("./hooks/use-bullet-points").useBulletPoints:n),!e&&"BulletPointsInput"!==t||l("BulletPointsInput",e?e("./index").BulletPointsInput:n),!e&&"ActionsContainer"!==t||l("ActionsContainer",e?e("./item/actions").ActionsContainer:n),!e&&"BulletPointsInputItem"!==t||l("BulletPointsInputItem",e?e("./item/index").BulletPointsInputItem:n)},l("__beyond_pkg",s),l("hmr",new function(){this.on=(e,t)=>s.hmr.on(e,t),this.off=(e,t)=>s.hmr.off(e,t)}),s.initialise(r)}}});