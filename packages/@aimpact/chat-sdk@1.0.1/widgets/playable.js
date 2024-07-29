System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","pragmate-ui@1.0.0-beta.1/icons","prismjs@1.29.0","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat-sdk@1.0.1/widgets/markdown"],function(r,e){var t,a,n,o,l,s,i,c,d;return r({PlayerButton:void 0,parseText:void 0,Playable:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){o=e},function(e){l=e},function(e){s=e},function(e){i=e}],execute:function(){d=t.Bundle,(c=new d({module:{vspecifier:"@aimpact/chat-sdk@1.0.1/widgets/playable"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",a],["react",n],["pragmate-ui/icons",o],["prismjs",l],["@beyond-js/react-18-widgets/hooks",s],["@aimpact/chat-sdk/widgets/markdown",i]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/chat-sdk@1.0.1/widgets/playable"),(d=new Map).set("./button/PlayerButton",{hash:2994120359,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PlayerButton=function(e){let{player:t,id:a,content:r}=e,[n,o]=d.default.useState("stop"),[,l]=d.default.useState(!1),s=a===t.id,i=s||"play"===n?"stop":"play",c=s||"play"===n?async({})=>{await t.stop(),o("stop"),l(!1)}:async({})=>{o("play"),t.positionToCut=0,await t.play(r,a)};return d.default.createElement(u.IconButton,{onClick:c,"data-listen":"api",icon:i,className:"lg"})};var d=e("react"),u=e("pragmate-ui/icons")}}),d.set("./code/clipboard",{hash:235325129,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Clipboard=function({text:e}){let r=a.default.useRef(null);return a.default.createElement("div",null,a.default.createElement("div",{className:"clipboard__container","data-text":e,ref:r,onClick:async t=>{if(t=t.currentTarget.dataset.text,navigator.clipboard)try{await navigator.clipboard.writeText(t);let e=r.current.querySelector(".action-copied");e.classList.add("show"),globalThis.setTimeout(()=>{e.classList.add("hide"),globalThis.setTimeout(()=>e.classList.remove("show","hide"),300)},500)}catch(e){console.error("some error",e)}else{var e=document.createElement("textarea");e.value=t,e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{var a=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+a)}catch(e){console.error("Fallback: Oops, unable to copy",e)}}}},a.default.createElement(n.IconButton,{icon:"copy"}),a.default.createElement("span",{className:"action-copied"},"Copied")))};var a=e("react"),n=e("pragmate-ui/icons")}}),d.set("./code/code",{hash:700390424,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Code=function({language:e="typescript",children:t,clipboard:a=!0}){return r.default.createElement("div",{className:"code-container"+(a?" has-clipboard":"")},r.default.createElement("pre",null,r.default.createElement("code",{className:"regular__code language-"+e,dangerouslySetInnerHTML:t?{__html:n.highlight(t,n.languages.javascript,e)}:{__html:""}})),a&&r.default.createElement(o.Clipboard,{text:t,message:""}))};var r=e("react"),n=e("prismjs"),o=e("./clipboard")}}),d.set("./parse-content",{hash:1506779363,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.parseText=void 0;let o={};t.parseText=(e,r,n)=>{if(!r)return[[],""];if(!(e in o&&o[e][1]?.length===r.length)){if(!r)return o[e]=[[],""],[[],""];r=function(e){if("string"!=typeof e)throw new Error("Input must be a string.");var t,a=[];let r=0;for(t of e.matchAll(/😸(.*?)🖋️/g)){var[n,o]=t,l=e.slice(r,t.index);if(l)a.push({type:"string",value:l});else try{var{type:s,data:i}=JSON.parse(o);a.push({type:s,data:i}),r=t.index+n.length}catch(e){console.error(e)}}var c=e.slice(r);return c&&a.push({type:"string",value:c}),a}(r);let t=[],a=[];r.forEach(e=>{n.includes(e.type)?a.push(e):(e=e.value.split(/(```[\s\S]*?```|`[\s\S]*?`)/).filter(e=>""!==e.trim()).map(e=>({content:e,type:e.startsWith("```")||e.startsWith("`")?"code":"text"})),t=[...t,...e])}),r=t.filter(e=>"text"===e.type).map(e=>e.content).join(" "),o[e]=[t,r,a]}return o[e]}}}),d.set("./playable/index",{hash:403584792,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Playable=void 0;var p=e("react"),y=e("@beyond-js/react-18-widgets/hooks"),f=e("../use-boundary"),m=e("../parse-content"),h=e("./item");new Map,t.Playable=p.default.memo(function({className:e,id:a,playable:r=!0,content:n,player:o,onClickWord:l}){let t=["transcription","fetching-tool-data","kb-processed-response","function","kb-response"],[s,i]=(0,m.parseText)(a,n,t);var{ref:c,text:d,removeHighlight:u}=(0,f.useBoundary)(a,o,i);if(p.default.useEffect(()=>{r&&s.filter(e=>"code"===e.type)},[!1,r]),o)return(0,y.useBinder)([o],u,"on.finish"),"string"!=typeof d?null:(u=s.filter(e=>!t.includes(e.type)).map((e,t)=>p.default.createElement(h.PlayableItem,{key:"content-"+t,onClickWord:l,text:n,block:e,index:t,id:a,playable:r,player:o})),p.default.createElement("div",{className:"playable-container"+(e?" "+e:""),ref:c},u));throw new Error("Player is not defined")})}}),d.set("./playable/interfaces/playable-props",{hash:1379775263,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),d.set("./playable/item",{hash:577460672,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PlayableItem=void 0;var i=e("react"),c=e("../code/code"),d=e("@aimpact/chat-sdk/widgets/markdown");t.PlayableItem=function({block:e,text:a,id:r,index:n,playable:t,player:o,onClickWord:l}){var s=(0,d.useMarked)(),t=t?{onClick:e=>{var t;e.preventDefault(),e.stopPropagation(),e.target.classList.contains("word")&&(e=e.target.dataset.word,t=a.split(" ").slice(e).join(" "),o.positionToCut=parseInt(e),o.textId=r,o.play(t.replaceAll(/[-\\*_#]+/g,"").trim()),l)&&l()}}:{};return"code"===e.type?i.default.createElement(c.Code,{key:"code-"+n},e.content.replaceAll("`","")):(s=s(e.content).split(" ").map(function(e,a){return e.replace(/([^<]+)|(<[^>]+>)/g,(e,t)=>t?t.split(/\s+/).map(e=>{return!e.trim()||e.match(/[\.,¿¡!\?;:\-\n\t]/)?e:`<span data-word="${t=a++}" data-index="${t}${n}" class="word">${e}</span>`;var t}).join(" "):e)}).join(" "),i.default.createElement(d.Markdown,{key:"content-"+n,"data-block":n,className:"message-text__container",...t},s))}}}),d.set("./use-boundary",{hash:1124656709,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useBoundary=function(t,n,o){let l=a.default.useRef(null),[,,]=a.default.useState(o??""),s=()=>{l.current.querySelectorAll(".highlight").forEach(e=>e.classList.remove("highlight"))};return a.default.useEffect(()=>{o=o.replaceAll(/[-\\*_#\n\t]+/g,"").trim();let e=()=>{if(t===n.textId){let e=n.currentWord,t=l.current.querySelector(".message-text__container")?.dataset.block,a="0";if(0<n.positionToCut)return r=n.text.slice(0,e).split(" ").length-1,a=""+(n.positionToCut+r)+t,s(),l.current.querySelector(`[data-index="${a}"]`)?void l.current.querySelector(`[data-index="${a}"]`).classList.add("highlight"):void 0;var r=o.slice(0,e).split(" ").length-1;a=""+r+t,s(),l.current.querySelector(`[data-index="${a}"]`)?.classList.add("highlight")}};return n.on("boundary",e),()=>{n.off("boundary",e)}},[o]),{ref:l,text:o,removeHighlight:s}};var a=e("react")}}),c.exports.descriptor=[{im:"./button/PlayerButton",from:"PlayerButton",name:"PlayerButton"},{im:"./parse-content",from:"parseText",name:"parseText"},{im:"./playable/index",from:"Playable",name:"Playable"}],c.exports.process=function({require:e,prop:t,value:a}){!e&&"PlayerButton"!==t||r("PlayerButton",e?e("./button/PlayerButton").PlayerButton:a),!e&&"parseText"!==t||r("parseText",e?e("./parse-content").parseText:a),!e&&"Playable"!==t||r("Playable",e?e("./playable/index").Playable:a)},r("__beyond_pkg",c),r("hmr",new function(){this.on=(e,t)=>c.hmr.on(e,t),this.off=(e,t)=>c.hmr.off(e,t)}),c.initialise(d)}}});