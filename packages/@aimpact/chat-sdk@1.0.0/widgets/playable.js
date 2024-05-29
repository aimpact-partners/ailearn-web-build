System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","pragmate-ui@0.1.1/icons","prismjs@1.29.0","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat-sdk@1.0.0/widgets/markdown"],function(r,e){"use strict";var t,a,n,o,l,s,i,c,u;return r({PlayerButton:void 0,parseText:void 0,Playable:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){o=e},function(e){l=e},function(e){s=e},function(e){i=e}],execute:function(){u=t.Bundle,(c=new u({module:{vspecifier:"@aimpact/chat-sdk@1.0.0/widgets/playable"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",a],["react",n],["pragmate-ui/icons",o],["prismjs",l],["@beyond-js/react-18-widgets/hooks",s],["@aimpact/chat-sdk/widgets/markdown",i]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/chat-sdk@1.0.0/widgets/playable"),(u=new Map).set("./button/PlayerButton",{hash:2994120359,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PlayerButton=function(e){const{player:t,id:a,content:r}=e,[n,o]=u.default.useState("stop"),[,l]=u.default.useState(!1),s=a===t.id,i=s||"play"===n?"stop":"play",c=s||"play"===n?async({})=>{await t.stop(),o("stop"),l(!1)}:async({})=>{o("play"),t.positionToCut=0,await t.play(r,a)};return u.default.createElement(d.IconButton,{onClick:c,"data-listen":"api",icon:i,className:"lg"})};var u=e("react"),d=e("pragmate-ui/icons")}}),u.set("./code/clipboard",{hash:235325129,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Clipboard=function({text:e}){const n=a.default.useRef(null);return a.default.createElement("div",null,a.default.createElement("div",{className:"clipboard__container","data-text":e,ref:n,onClick:async e=>{e=e.currentTarget.dataset.text;if(navigator.clipboard)try{await navigator.clipboard.writeText(e);const r=n.current.querySelector(".action-copied");r.classList.add("show"),globalThis.setTimeout(()=>{r.classList.add("hide"),globalThis.setTimeout(()=>r.classList.remove("show","hide"),300)},500)}catch(e){console.error("some error",e)}else{var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var a=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+a)}catch(e){console.error("Fallback: Oops, unable to copy",e)}}}},a.default.createElement(r.IconButton,{icon:"copy"}),a.default.createElement("span",{className:"action-copied"},"Copied")))};var a=e("react"),r=e("pragmate-ui/icons")}}),u.set("./code/code",{hash:700390424,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Code=function({language:e="typescript",children:t,clipboard:a=!0}){var r="code-container"+(a?" has-clipboard":"");return n.default.createElement("div",{className:r},n.default.createElement("pre",null,n.default.createElement("code",{className:"regular__code language-"+e,dangerouslySetInnerHTML:t?{__html:o.highlight(t,o.languages.javascript,e)}:{__html:""}})),a&&n.default.createElement(l.Clipboard,{text:t,message:""}))};var n=e("react"),o=e("prismjs"),l=e("./clipboard")}}),u.set("./parse-content",{hash:1506779363,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.parseText=void 0;const o={};t.parseText=(e,a,r)=>{if(!a)return[[],""];if(!(e in o&&o[e][1]?.length===a.length)){if(!a)return o[e]=[[],""],[[],""];a=function(e){if("string"!=typeof e)throw new Error("Input must be a string.");var t=[];let a=0;for(const c of e.matchAll(/😸(.*?)🖋️/g)){var[r,n]=c,o=e.slice(a,c.index);if(o)t.push({type:"string",value:o});else try{var{type:l,data:s}=JSON.parse(n);t.push({type:l,data:s}),a=c.index+r.length}catch(e){console.error(e)}}var i=e.slice(a);return i&&t.push({type:"string",value:i}),t}(a);let t=[];const n=[];a.forEach(e=>{r.includes(e.type)?n.push(e):(e=e.value.split(/(```[\s\S]*?```|`[\s\S]*?`)/).filter(e=>""!==e.trim()).map(e=>({content:e,type:e.startsWith("```")||e.startsWith("`")?"code":"text"})),t=[...t,...e])});a=t.filter(e=>"text"===e.type).map(e=>e.content).join(" ");o[e]=[t,a,n]}return o[e]}}}),u.set("./playable/index",{hash:403584792,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Playable=void 0;var y=e("react"),f=e("@beyond-js/react-18-widgets/hooks"),m=e("../use-boundary"),h=e("../parse-content"),b=e("./item");new Map;t.Playable=y.default.memo(function({className:e,id:a,playable:r=!0,content:n,player:o,onClickWord:l}){const t=["transcription","fetching-tool-data","kb-processed-response","function","kb-response"],[s,i]=(0,h.parseText)(a,n,t);var{ref:c,text:u,removeHighlight:d}=(0,m.useBoundary)(a,o,i);if(y.default.useEffect(()=>{r&&s.filter(e=>"code"===e.type)},[!1,r]),!o)throw new Error("Player is not defined");if((0,f.useBinder)([o],d,"on.finish"),"string"!=typeof u)return null;const p=s.filter(e=>!t.includes(e.type));return d=p.map((e,t)=>y.default.createElement(b.PlayableItem,{key:"content-"+t,onClickWord:l,text:n,block:e,index:t,id:a,playable:r,player:o})),y.default.createElement("div",{className:"playable-container"+(e?" "+e:""),ref:c},d)})}}),u.set("./playable/interfaces/playable-props",{hash:1379775263,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),u.set("./playable/item",{hash:577460672,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PlayableItem=void 0;var i=e("react"),c=e("../code/code"),u=e("@aimpact/chat-sdk/widgets/markdown");t.PlayableItem=function({block:e,text:a,id:r,index:n,playable:t,player:o,onClickWord:l}){var s=(0,u.useMarked)(),t=t?{onClick:e=>{var t;e.preventDefault(),e.stopPropagation(),e.target.classList.contains("word")&&(e=e.target.dataset.word,t=a.split(" ").slice(e).join(" "),o.positionToCut=parseInt(e),o.textId=r,o.play(t.replaceAll(/[-\\*_#]+/g,"").trim()),l)&&l()}}:{};if("code"===e.type)return i.default.createElement(c.Code,{key:"code-"+n},e.content.replaceAll("`",""));s=s(e.content).split(" ").map(function(e,a){return e.replace(/([^<]+)|(<[^>]+>)/g,(e,t)=>t?t.split(/\s+/).map(e=>{return!e.trim()||e.match(/[\.,¿¡!\?;:\-\n\t]/)?e:`<span data-word="${t=a++}" data-index="${t}${n}" class="word">${e}</span>`;var t}).join(" "):e)}).join(" ");return i.default.createElement(u.Markdown,{key:"content-"+n,"data-block":n,className:"message-text__container",...t},s)}}}),u.set("./use-boundary",{hash:1124656709,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useBoundary=function(n,o,l){const s=a.default.useRef(null),[,,]=a.default.useState(l??""),i=()=>{s.current.querySelectorAll(".highlight").forEach(e=>e.classList.remove("highlight"))};return a.default.useEffect(()=>{l=l.replaceAll(/[-\\*_#\n\t]+/g,"").trim();const e=()=>{if(n===o.textId){var t=o.currentWord,a=s.current.querySelector(".message-text__container")?.dataset.block;let e="0";if(0<o.positionToCut)return r=o.text.slice(0,t).split(" ").length-1,e=""+(o.positionToCut+r)+a,i(),s.current.querySelector(`[data-index="${e}"]`)?void s.current.querySelector(`[data-index="${e}"]`).classList.add("highlight"):void 0;var r=l.slice(0,t).split(" ").length-1;e=""+r+a,i(),s.current.querySelector(`[data-index="${e}"]`)?.classList.add("highlight")}};return o.on("boundary",e),()=>{o.off("boundary",e)}},[l]),{ref:s,text:l,removeHighlight:i}};var a=e("react")}}),c.exports.descriptor=[{im:"./button/PlayerButton",from:"PlayerButton",name:"PlayerButton"},{im:"./parse-content",from:"parseText",name:"parseText"},{im:"./playable/index",from:"Playable",name:"Playable"}],c.exports.process=function({require:e,prop:t,value:a}){!e&&"PlayerButton"!==t||r("PlayerButton",e?e("./button/PlayerButton").PlayerButton:a),!e&&"parseText"!==t||r("parseText",e?e("./parse-content").parseText:a),!e&&"Playable"!==t||r("Playable",e?e("./playable/index").Playable:a)},r("__beyond_pkg",c),r("hmr",new function(){this.on=(e,t)=>c.hmr.on(e,t),this.off=(e,t)=>c.hmr.off(e,t)}),c.initialise(u)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9idXR0b24vUGxheWVyQnV0dG9uLnRzeCIsIi90cy9jb2RlL2NsaXBib2FyZC50c3giLCIvdHMvY29kZS9jb2RlLnRzeCIsIi90cy9wYXJzZS1jb250ZW50LnRzIiwiL3RzL3BsYXlhYmxlL2luZGV4LnRzeCIsIi9wbGF5YWJsZS1wcm9wcy50cyIsIi90cy9wbGF5YWJsZS9pdGVtLnRzeCIsIi90cy91c2UtYm91bmRhcnkudHN4Il0sIm5hbWVzIjpbInByb3BzIiwicGxheWVyIiwiaWQiLCJjb250ZW50IiwiYWN0aW9uIiwic2V0QWN0aW9uIiwiX3JlYWN0IiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2V0UHJvY2Vzc2luZyIsImFwcGx5IiwiaWNvbiIsIm9uQ2xpY2siLCJhc3luYyIsImF3YWl0Iiwic3RvcCIsInBvc2l0aW9uVG9DdXQiLCJwbGF5IiwiY3JlYXRlRWxlbWVudCIsIl9pY29ucyIsIkljb25CdXR0b24iLCJkYXRhLWxpc3RlbiIsImNsYXNzTmFtZSIsInJlcXVpcmUiLCJ0ZXh0IiwicmVmIiwidXNlUmVmIiwiZGF0YS10ZXh0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNwYW4iLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsIm1zZyIsImV4ZWNDb21tYW5kIiwibG9nIiwiZXJyIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNscyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiUHJpc20iLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiX2NsaXBib2FyZCIsIkNsaXBib2FyZCIsIm1lc3NhZ2UiLCJjYWNoZSIsImV4cG9ydHMiLCJwYXJzZVRleHQiLCJrZXkiLCJBQ1RJT05TIiwibGVuZ3RoIiwiaW5pdGlhbCIsIkVycm9yIiwib3V0cHV0QXJyYXkiLCJsZXQiLCJwcmV2aW91c0luZGV4IiwibWF0Y2giLCJtYXRjaEFsbCIsImZ1bGxNYXRjaCIsImlubmVyQ29udGVudCIsInByZWNlZGluZ1RleHQiLCJzbGljZSIsImluZGV4IiwicHVzaCIsInR5cGUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVtYWluaW5nVGV4dCIsImVsZW1lbnRzIiwiYWN0aW9ucyIsImZvckVhY2giLCJpdGVtIiwiaW5jbHVkZXMiLCJyZXN1bHQiLCJzcGxpdCIsImZpbHRlciIsImJsb2NrIiwidHJpbSIsIm1hcCIsInN0YXJ0c1dpdGgiLCJwbGF5YWJsZSIsImpvaW4iLCJfaG9va3MiLCJfdXNlQm91bmRhcnkiLCJfcGFyc2VDb250ZW50IiwiX2l0ZW0iLCJNYXAiLCJQbGF5YWJsZSIsIm1lbW8iLCJvbkNsaWNrV29yZCIsImJsb2NrcyIsInBsYXlhYmxlQ29udGVudCIsInJlbW92ZUhpZ2hsaWdodCIsInVzZUJvdW5kYXJ5IiwidXNlRWZmZWN0IiwidXNlQmluZGVyIiwiZmluYWxCbG9ja3MiLCJvdXRwdXQiLCJpIiwiUGxheWFibGVJdGVtIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY29kZSIsIl9tYXJrZG93biIsIm1hcmtlZCIsInVzZU1hcmtlZCIsImF0dHJzIiwidGV4dFRvUGxheSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCJ3b3JkIiwicGFyc2VJbnQiLCJ0ZXh0SWQiLCJyZXBsYWNlQWxsIiwiQ29kZSIsImh0bWxTdHJpbmciLCJyZXBsYWNlIiwiY3JlYXRlU3BhbiIsIk1hcmtkb3duIiwiZGF0YS1ibG9jayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwib25Cb3VuZGFyeSIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRXb3JkIiwiZmluYWxQb3NpdGlvbiIsInNlZ21lbnRUb0N1dCIsIm9uIiwib2ZmIl0sIm1hcHBpbmdzIjoiMmdDQUVrQixTQUF1QkEsR0FDeEMsS0FBTSxDQUFFQyxPQUFBQSxFQUFRQyxHQUFBQSxFQUFJQyxRQUFBQSxDQUFPLEVBQUtILEVBQzFCLENBQUNJLEVBQVFDLEdBQWFDLEVBQUFDLFFBQU1DLFNBQVMsTUFBTSxFQUMzQyxDQUFBLENBQWFDLEdBQWlCSCxFQUFBQyxRQUFNQyxTQUFTLENBQUEsQ0FBSyxFQVlsREUsRUFBUVIsSUFBT0QsRUFBT0MsR0FDdEJTLEVBQU9ELEdBQW9CLFNBQVhOLEVBQW9CLE9BQVMsT0FDN0NRLEVBQVVGLEdBQW9CLFNBQVhOLEVBUlRTLE1BQU8sTUFDdEJDLE1BQU1iLEVBQU9jLEtBQUksRUFDakJWLEVBQVUsTUFBTSxFQUNoQkksRUFBYyxDQUFBLENBQUssQ0FDcEIsRUFUZUksTUFBTyxNQUNyQlIsRUFBVSxNQUFNLEVBQ2hCSixFQUFPZSxjQUFnQixFQUN2QkYsTUFBTWIsRUFBT2dCLEtBQUtkLEVBQVNELENBQUUsQ0FDOUIsRUFXQSxPQUFPSSxFQUFBQyxRQUFBVyxjQUFDQyxFQUFBQyxXQUFVLENBQUNSLFFBQVNBLEVBQU9TLGNBQWMsTUFBTVYsS0FBTUEsRUFBTVcsVUFBVSxJQUFJLENBQUEsQ0FDbEYsRUF0QkEsSUFBQWhCLEVBQUFpQixFQUFBLE9BQUEsRUFDQUosRUFBQUksRUFBQSxtQkFBQSxDLGdJQ0lNLFNBQW9CLENBQUVDLEtBQUFBLENBQWEsR0FDeEMsTUFBTUMsRUFBTW5CLEVBQUFDLFFBQU1tQixPQUFPLElBQUksRUF5QzdCLE9BQ0NwQixFQUFBQyxRQUFBVyxjQUFBLE1BQUEsS0FDQ1osRUFBQUMsUUFBQVcsY0FBQSxNQUFBLENBQUtJLFVBQVUsdUJBQXNCSyxZQUFZSCxFQUFNQyxJQUFLQSxFQUFLYixRQXJCN0NnQixNQUFBQSxJQUVmSixFQURTSSxFQUFNQyxjQUNEQyxRQUFRTixLQUM1QixHQUFLTyxVQUFVQyxVQUdmLElBQ0NsQixNQUFNaUIsVUFBVUMsVUFBVUMsVUFBVVQsQ0FBSSxFQUN4QyxNQUFNVSxFQUFPVCxFQUFJVSxRQUFRQyxjQUFjLGdCQUFnQixFQUN2REYsRUFBS0csVUFBVUMsSUFBSSxNQUFNLEVBQ3pCQyxXQUFXQyxXQUFXLEtBQ3JCTixFQUFLRyxVQUFVQyxJQUFJLE1BQU0sRUFDekJDLFdBQVdDLFdBQVcsSUFBTU4sRUFBS0csVUFBVUksT0FBTyxPQUFRLE1BQU0sRUFBRyxHQUFHLENBQ3ZFLEVBQUcsR0FBRyxDLENBQ0wsTUFBT0MsR0FDUkMsUUFBUUMsTUFBTSxhQUFjRixDQUFDLEMsS0FaOUIsQ0FDUUcsSUF4QkZDLEVBQVdDLFNBQVM3QixjQUFjLFVBQVUsRUFDbEQ0QixFQUFTRSxNQUFReEIsRUFHakJzQixFQUFTRyxNQUFNQyxJQUFNLElBQ3JCSixFQUFTRyxNQUFNRSxLQUFPLElBQ3RCTCxFQUFTRyxNQUFNRyxTQUFXLFFBRTFCTCxTQUFTTSxLQUFLQyxZQUFZUixDQUFRLEVBQ2xDQSxFQUFTUyxNQUFLLEVBQ2RULEVBQVNVLE9BQU0sRUFFZixJQUNDLElBQ01DLEVBRGFWLFNBQVNXLFlBQVksTUFBTSxFQUNyQixhQUFlLGVBQ3hDZixRQUFRZ0IsSUFBSSxzQ0FBd0NGLENBQUcsQyxDQUN0RCxNQUFPRyxHQUNSakIsUUFBUUMsTUFBTSxpQ0FBa0NnQixDQUFHLEMsRUFvQnJELENBSW1GLEVBQ2hGdEQsRUFBQUMsUUFBQVcsY0FBQ0MsRUFBQUMsV0FBVSxDQUFDVCxLQUFLLE1BQU0sQ0FBQSxFQUN2QkwsRUFBQUMsUUFBQVcsY0FBQSxPQUFBLENBQU1JLFVBQVUsZUFBZSxFQUFBLFFBQUEsQ0FBYyxDQUN4QyxDQUdULEVBdkRBLElBQUFoQixFQUFBaUIsRUFBQSxPQUFBLEVBQ0FKLEVBQUFJLEVBQUEsbUJBQUEsQyxzSENHTSxTQUFlLENBQUVzQyxTQUFBQSxFQUFXLGFBQWNDLFNBQUFBLEVBQVU5QixVQUFBQSxFQUFZLENBQUEsQ0FBSSxHQUN6RSxJQU9NK0IsRUFBTSxrQkFBaUIvQixFQUFZLGlCQUFtQixJQUM1RCxPQUNDMUIsRUFBQUMsUUFBQVcsY0FBQSxNQUFBLENBQUtJLFVBQVd5QyxDQUFHLEVBQ2xCekQsRUFBQUMsUUFBQVcsY0FBQSxNQUFBLEtBQ0NaLEVBQUFDLFFBQUFXLGNBQUEsT0FBQSxDQUFNSSxVQUFXLDBCQUEwQnVDLEVBQVlHLHdCQVZwREYsRUFJRSxDQUFFRyxPQURJQyxFQUFNQyxVQUFVTCxFQUFVSSxFQUFNRSxVQUFVQyxXQUFZUixDQUFRLENBQ3RELEVBSGIsQ0FBRUksT0FBUSxFQUFFLENBUzRFLENBQUEsQ0FBSSxFQUVsR2pDLEdBQWExQixFQUFBQyxRQUFBVyxjQUFDb0QsRUFBQUMsVUFBUyxDQUFDL0MsS0FBTXNDLEVBQVVVLFFBQVEsRUFBRSxDQUFBLENBQUcsQ0FHekQsRUFyQkEsSUFBQWxFLEVBQUFpQixFQUFBLE9BQUEsRUFDQTJDLEVBQUEzQyxFQUFBLFNBQUEsRUFDQStDLEVBQUEvQyxFQUFBLGFBQUEsQyx1SUNpREEsTUFBTWtELEVBQWUsR0FvRG5CQyxFQUFBQyxVQTNDa0NBLENBQUNDLEVBQUt6RSxFQUFpQjBFLEtBQzFELEdBQUksQ0FBQzFFLEVBQVMsTUFBTyxDQUFDLEdBQUksSUFJMUIsR0FBSXlFLEVBQUFBLEtBQU9ILEdBQVNBLEVBQU1HLEdBQUssSUFBSUUsU0FBVzNFLEVBQVEyRSxRQUF0RCxDQUlBLEdBQUksQ0FBQzNFLEVBRUosT0FEQXNFLEVBQU1HLEdBQU8sQ0FBQyxHQUFJLElBQ1gsQ0FBQyxHQUFJLElBR1BHLEVBN0RQLFNBQXVCNUUsR0FDdEIsR0FBdUIsVUFBbkIsT0FBT0EsRUFDVixNQUFNLElBQUk2RSxNQUFNLHlCQUF5QixFQUcxQyxJQUNJQyxFQUFjLEdBQ2xCQyxJQUFJQyxFQUFnQixFQUVwQixJQUFLLE1BQU1DLEtBQVNqRixFQUFRa0YsU0FKZCxhQUk0QixFQUFHLENBQzVDLEdBQU0sQ0FBQ0MsRUFBV0MsR0FBZ0JILEVBRzVCSSxFQUFnQnJGLEVBQVFzRixNQUFNTixFQUFlQyxFQUFNTSxLQUFLLEVBQzlELEdBQUlGLEVBQ0hQLEVBQVlVLEtBQUssQ0FBRUMsS0FBTSxTQUFVNUMsTUFBT3dDLENBQWEsQ0FBRSxPQUsxRCxJQUNDLEdBQU0sQ0FBRUksS0FBQUEsRUFBTUMsS0FBQUEsQ0FBSSxFQUFLQyxLQUFLQyxNQUFNUixDQUFZLEVBQzlDTixFQUFZVSxLQUFLLENBQUVDLEtBQUFBLEVBQU1DLEtBQUFBLENBQUksQ0FBRSxFQUMvQlYsRUFBZ0JDLEVBQU1NLE1BQVFKLEVBQVVSLE0sQ0FDdkMsTUFBT3BDLEdBQ1JDLFFBQVFDLE1BQU1GLENBQUMsQyxFQUtqQixJQUFNc0QsRUFBZ0I3RixFQUFRc0YsTUFBTU4sQ0FBYSxFQUtqRCxPQUpJYSxHQUNIZixFQUFZVSxLQUFLLENBQUVDLEtBQU0sU0FBVTVDLE1BQU9nRCxDQUFhLENBQUUsRUFHbkRmLENBQ1IsRUF5QitCOUUsQ0FBTyxFQUNyQytFLElBQUllLEVBQVcsR0FDZixNQUFNQyxFQUFvQixHQUUxQm5CLEVBQVFvQixRQUFRQyxJQUNYdkIsRUFBUXdCLFNBQVNELEVBQUtSLElBQUksRUFDN0JNLEVBQVFQLEtBQUtTLENBQWMsR0FLdEJFLEVBRFdGLEVBQWlCcEQsTUFFaEN1RCxNQUFNLDZCQUE2QixFQUNuQ0MsT0FBT0MsR0FBMEIsS0FBakJBLEVBQU1DLEtBQUksQ0FBUyxFQUNuQ0MsSUFBSUYsSUFBSyxDQUNUdEcsUUFBU3NHLEVBQ1RiLEtBQU1hLEVBQU1HLFdBQVcsS0FBSyxHQUFLSCxFQUFNRyxXQUFXLEdBQUcsRUFBSSxPQUFTLE1BQ2xFLEVBQUMsRUFDSFgsRUFBVyxDQUFDLEdBQUdBLEVBQVUsR0FBR0ssR0FDN0IsQ0FBQyxFQUVLTyxFQUFXWixFQUNmTyxPQUFPSixHQUFzQixTQUFkQSxFQUFLUixJQUFlLEVBQ25DZSxJQUFJUCxHQUFRQSxFQUFLakcsT0FBTyxFQUN4QjJHLEtBQUssR0FBRyxFQUVWckMsRUFBTUcsR0FBTyxDQUFDcUIsRUFBVVksRUFBVVgsRSxDQUVsQyxPQUFPekIsRUFBTUcsRUFDZCxDLHNJQ3ZHQSxJQUFBdEUsRUFBQWlCLEVBQUEsT0FBQSxFQUNBd0YsRUFBQXhGLEVBQUEsbUNBQUEsRUFDQXlGLEVBQUF6RixFQUFBLGlCQUFBLEVBQ0EwRixFQUFBMUYsRUFBQSxrQkFBQSxFQUNBMkYsRUFBQTNGLEVBQUEsUUFBQSxFQUdjLElBQUk0RixJQStDZ0J6QyxFQUFBMEMsU0FBRzlHLEVBQUFDLFFBQU04RyxLQTdDM0MsU0FBMkIsQ0FBRS9GLFVBQUFBLEVBQVdwQixHQUFBQSxFQUFJMkcsU0FBQUEsRUFBVyxDQUFBLEVBQU0xRyxRQUFBQSxFQUFTRixPQUFBQSxFQUFRcUgsWUFBQUEsQ0FBVyxHQUd4RixNQUFNekMsRUFBVSxDQUFDLGdCQUFpQixxQkFBc0Isd0JBQXlCLFdBQVksZUFDdkYsQ0FBQzBDLEVBQVFDLElBQW1CLEVBQUFQLEVBQUF0QyxXQUFVekUsRUFBSUMsRUFBUzBFLENBQU8sRUFDaEUsR0FBTSxDQUFFcEQsSUFBQUEsRUFBS0QsS0FBQUEsRUFBTWlHLGdCQUFBQSxDQUFlLEdBQUssRUFBQVQsRUFBQVUsYUFBWXhILEVBQUlELEVBQVF1SCxDQUFlLEVBUTlFLEdBTkFsSCxFQUFBQyxRQUFNb0gsVUFBVSxLQUNWZCxHQUNtQlUsRUFBT2YsT0FBT0osR0FBc0IsU0FBZEEsRUFBS1IsSUFBZSxDQUVuRSxFQUFHLENBVlksQ0FBQSxFQVVEaUIsRUFBUyxFQUVuQixDQUFDNUcsRUFDSixNQUFNLElBQUkrRSxNQUFNLHVCQUF1QixFQUd4QyxJQURBLEVBQUErQixFQUFBYSxXQUFVLENBQUMzSCxHQUFTd0gsRUFBaUIsV0FBVyxFQUM1QixVQUFoQixPQUFPakcsRUFBbUIsT0FBTyxLQUVyQyxNQUFNcUcsRUFBY04sRUFBT2YsT0FBT0osR0FBUSxDQUFDdkIsRUFBUXdCLFNBQVNELEVBQUtSLElBQUksQ0FBQyxFQW1CdEUsT0FsQk1rQyxFQUNZRCxFQUFZbEIsSUFBSSxDQUFDRixFQUFPc0IsSUFDeEN6SCxFQUFBQyxRQUFBVyxjQUFDZ0csRUFBQWMsYUFBWSxDQUNacEQsSUFBSyxXQUFXbUQsRUFDaEJULFlBQWFBLEVBQ2I5RixLQUFNckIsRUFDTnNHLE1BQU9BLEVBQ1BmLE1BQU9xQyxFQUNQN0gsR0FBSUEsRUFDSjJHLFNBQVVBLEVBQ1Y1RyxPQUFRQSxDQUFNLENBQUEsQ0FFZixFQU9ESyxFQUFBQyxRQUFBVyxjQUFBLE1BQUEsQ0FBS0ksVUFGTSxzQkFBcUJBLEVBQVksSUFBSUEsRUFBYyxJQUV6Q0csSUFBS0EsQ0FBRyxFQUMzQnFHLENBQU0sQ0FHVixDQUVpRSxDLHdGQ3BEakVHLE9BQUFDLGVBQUF4RCxFQUFBLGFBQUEsQ0FDQTFCLE1BQUEsQ0FBQSxDQUNBLENBQUEsQyx5SUNKQSxJQUFBMUMsRUFBQWlCLEVBQUEsT0FBQSxFQUNBNEcsRUFBQTVHLEVBQUEsY0FBQSxFQUNBNkcsRUFBQTdHLEVBQUEsb0NBQUEsRUE4REVtRCxFQUFBc0QsYUFyRDBCLFNBQVUsQ0FBRXZCLE1BQUFBLEVBQU9qRixLQUFBQSxFQUFNdEIsR0FBQUEsRUFBSXdGLE1BQUFBLEVBQU9tQixTQUFBQSxFQUFVNUcsT0FBQUEsRUFBUXFILFlBQUFBLENBQVcsR0FDNUYsSUFBTWUsR0FBUyxFQUFBRCxFQUFBRSxXQUFTLEVBa0JsQkMsRUFBUTFCLEVBQVcsQ0FBRWpHLFFBakJYZ0IsSUFJZixJQUdPNEcsRUFOUDVHLEVBQU02RyxlQUFjLEVBQ3BCN0csRUFBTThHLGdCQUFlLEVBRWpCOUcsRUFBTStHLE9BQU90RyxVQUFVdUcsU0FBUyxNQUFNLElBQ25DQyxFQUFPakgsRUFBTStHLE9BQU83RyxRQUFRK0csS0FFNUJMLEVBRGFoSCxFQUFLK0UsTUFBTSxHQUFHLEVBQ0hkLE1BQU1vRCxDQUFJLEVBQUUvQixLQUFLLEdBQUcsRUFDbEQ3RyxFQUFPZSxjQUFnQjhILFNBQVNELENBQUksRUFDcEM1SSxFQUFPOEksT0FBUzdJLEVBRWhCRCxFQUFPZ0IsS0FBS3VILEVBQVdRLFdBQVcsYUFBYyxFQUFFLEVBQUV0QyxLQUFJLENBQUUsRUFDdERZLElBQWFBLEVBQVcsQ0FHOUIsQ0FFa0MsRUFBSyxHQUN2QyxHQUFtQixTQUFmYixFQUFNYixLQUNULE9BQU90RixFQUFBQyxRQUFBVyxjQUFDaUgsRUFBQWMsS0FBSSxDQUFDckUsSUFBSyxRQUFRYyxDQUFPLEVBQUdlLEVBQU10RyxRQUFRNkksV0FBVyxJQUFLLEVBQUUsQ0FBQyxFQXdCaEU3SSxFQUZha0ksRUFBTzVCLEVBQU10RyxPQUFPLEVBRVpvRyxNQUFNLEdBQUcsRUFBRUksSUFuQnRDLFNBQTBCdUMsRUFBWXhELEdBQ3JDLE9BQU93RCxFQUFXQyxRQUFRLHFCQUFzQixDQUFDL0QsRUFBTzVELElBRWxEQSxFQUdFQSxFQUNMK0UsTUFBTSxLQUFLLEVBQ1hJLElBQUlrQyxJQUVKLE1BQUksQ0FBQ0EsRUFBS25DLEtBQUksR0FBTW1DLEVBQUt6RCxNQUFNLG9CQUFvQixFQUFVeUQsc0JBWnZDZCxFQWFFckMsQ0FBSyxtQkFicUNxQyxJQUFJckMsbUJBYXBEbUQsV0FiSE8sSUFBT3JCLENBY3ZCLENBQUMsRUFDQWpCLEtBQUssR0FBRyxFQVZRMUIsQ0FXbEIsQ0FDRixDQUkwRCxFQUFFMEIsS0FBSyxHQUFHLEVBRXBFLE9BRUN4RyxFQUFBQyxRQUFBVyxjQUFDa0gsRUFBQWlCLFNBQVEsQ0FBQ3pFLElBQUssV0FBV2MsRUFBTzRELGFBQWM1RCxFQUFPcEUsVUFBVSwwQkFBeUIsR0FBS2lILENBQUssRUFDakdwSSxDQUFPLENBR1gsQyxpSUM5RE0sU0FBc0JELEVBQUlELEVBQVFFLEdBQ3ZDLE1BQU1zQixFQUFNbkIsRUFBQUMsUUFBTW1CLE9BQU8sSUFBSSxFQUN2QixDQUFBLENBQUEsR0FBa0JwQixFQUFBQyxRQUFNQyxTQUFpQkwsR0FBVyxFQUFFLEVBRXREc0gsRUFBa0JBLEtBQ3ZCaEcsRUFBSVUsUUFBUW9ILGlCQUFpQixZQUFZLEVBQUVwRCxRQUFRcUQsR0FBV0EsRUFBUW5ILFVBQVVJLE9BQU8sV0FBVyxDQUFDLENBQ3BHLEVBdUNBLE9BckNBbkMsRUFBQUMsUUFBTW9ILFVBQVUsS0FJZnhILEVBQVVBLEVBQVE2SSxXQUFXLGlCQUFrQixFQUFFLEVBQUV0QyxLQUFJLEVBRXZELE1BQU0rQyxFQUFhQSxLQUNsQixHQUFJdkosSUFBT0QsRUFBTzhJLE9BQWxCLENBQ0EsSUFBTVcsRUFBZXpKLEVBQU8wSixZQUN0QmxELEVBQVFoRixFQUFJVSxRQUFRQyxjQUFjLDBCQUEwQixHQUFHTixRQUFRMkUsTUFDN0V2QixJQUFJMEUsRUFBZ0IsSUFFcEIsR0FBMkIsRUFBdkIzSixFQUFPZSxjQUtWLE9BSk02SSxFQUFlNUosRUFBT3VCLEtBQUtpRSxNQUFNLEVBQUdpRSxDQUFZLEVBQUVuRCxNQUFNLEdBQUcsRUFBRXpCLE9BQVMsRUFDNUU4RSxFQUFnQixJQUFHM0osRUFBT2UsY0FBZ0I2SSxHQUFlcEQsRUFFekRnQixFQUFlLEVBQ1ZoRyxFQUFJVSxRQUFRQyw4QkFBOEJ3SCxLQUFpQixFQUdoRW5JLEtBQUFBLEVBQUlVLFFBQVFDLDhCQUE4QndILEtBQWlCLEVBQUV2SCxVQUFVQyxJQUFJLFdBQVcsRUFGckYsS0FBQSxFQU1GLElBQ01jLEVBRFVqRCxFQUFRc0YsTUFBTSxFQUFHaUUsQ0FBWSxFQUNwQm5ELE1BQU0sR0FBRyxFQUFFekIsT0FBUyxFQUM3QzhFLEVBQWdCLEdBQUd4RyxFQUFXcUQsRUFDOUJnQixFQUFlLEVBQ2ZoRyxFQUFJVSxRQUFRQyw4QkFBOEJ3SCxLQUFpQixHQUFHdkgsVUFBVUMsSUFBSSxXQUFXLENBckI3RCxDQXNCM0IsRUFHQSxPQURBckMsRUFBTzZKLEdBQUcsV0FBWUwsQ0FBVSxFQUN6QixLQUNOeEosRUFBTzhKLElBQUksV0FBWU4sQ0FBVSxDQUNsQyxDQUNELEVBQUcsQ0FBQ3RKLEVBQVEsRUFFTCxDQUFFc0IsSUFBQUEsRUFBS0QsS0FBTXJCLEVBQVNzSCxnQkFBQUEsQ0FBZSxDQUM3QyxFQWhEQSxJQUFBbkgsRUFBQWlCLEVBQUEsT0FBQSJ9