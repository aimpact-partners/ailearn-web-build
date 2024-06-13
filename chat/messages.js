System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","pragmate-ui@0.1.1/icons","@aimpact/chat@1.0.1/components/icons","@aimpact/ailearn-app@0.0.46.dev-20/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@0.1.1/toast","@aimpact/chat-sdk@1.0.0/session","@aimpact/chat@1.0.1/shared/icons","@aimpact/chat-sdk@1.0.0/widgets/playable","@aimpact/chat@1.0.1/shared/hooks","pragmate-ui@0.1.1/collapsible"],function(s,e){"use strict";var t,a,n,o,r,l,c,i,u,d,m,p,f,g;return s({AudioPlayer:void 0,Messages:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){o=e},function(e){r=e},function(e){l=e},function(e){c=e},function(e){i=e},function(e){u=e},function(e){d=e},function(e){m=e},function(e){p=e}],execute:function(){g=t.Bundle,(f=new g({module:{vspecifier:"@aimpact/ailearn-app@0.0.46.dev-20/chat/messages"},type:"code"},e.meta.url).package()).dependencies.update([["react",a],["pragmate-ui/icons",n],["@aimpact/chat/components/icons",o],["@aimpact/ailearn-app/components/ui",r],["@beyond-js/react-18-widgets/hooks",l],["pragmate-ui/toast",c],["@aimpact/chat-sdk/session",i],["@aimpact/chat/shared/icons",u],["@aimpact/chat-sdk/widgets/playable",d],["@aimpact/chat/shared/hooks",m],["pragmate-ui/collapsible",p]]),(g=new Map).set("./answering",{hash:1428612859,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SystemAnswering=void 0;var a=e("react"),s=e("pragmate-ui/icons"),n=e("@aimpact/chat/components/icons");t.SystemAnswering=()=>a.default.createElement("div",{className:"message answering"},a.default.createElement(s.Icon,{className:"lg",icon:n.ICONS["ai-profile"]}),a.default.createElement("div",{className:"dot-animation"},a.default.createElement("span",{className:"dot"}),a.default.createElement("span",{className:"dot"}),a.default.createElement("span",{className:"dot"})))}}),g.set("./audio-player",{hash:1190578037,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AudioPlayer=function({src:e}){if(!e)return console.warn("not audio to process"),null;e=URL.createObjectURL(e);const a=s.default.useRef(null);return s.default.useEffect(()=>{const e=a.current,t=()=>{e.duration===1/0&&(e.currentTime=1e101,e.ontimeupdate=()=>{e.ontimeupdate=null,e.currentTime=0})};return e.addEventListener("loadedmetadata",onloadeddata),()=>e.removeEventListener("loadedmetadata",t)},[e]),e?s.default.createElement("div",{className:"audio-player"},s.default.createElement("audio",{controls:!0,preload:"metadata"},s.default.createElement("source",{src:e,type:"audio/mp3",ref:a}),"Your browser does not support the audio element.")):null};var s=e("react")}}),g.set("./index",{hash:2206451622,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Messages=function({store:s,messages:e,texts:n}){const[o,,]=r.default.useState(e.length??[].length);if(!e.length)return r.default.createElement(a.EmptyCard,{className:"empty-section__container",text:n.empty,icon:"info"});e=e.map((e,t)=>{var a=t===o-1;return r.default.createElement(l.Message,{store:s,key:"message-"+t,message:e,last:a,texts:n})});return r.default.createElement(r.default.Fragment,null,e)};var r=e("react"),l=e("./message"),a=e("@aimpact/ailearn-app/components/ui")}}),g.set("./message/actions/index",{hash:3317605633,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MessageActions=function({store:e,message:t,text:a,messageTokens:s,play:n=!0}){const o=e["player"],[r,l]=p.default.useState("stop"),[c,i]=p.default.useState(!1),u=((0,g.useBinder)([o],()=>i(o.speaking)),(0,g.useBinder)([o],()=>{i(!1),l("")},"on.finish"),e.currentMessage?.id===t?.id&&c),d=u||"play"===r?"stop":"play",m=u||"play"===r?async({})=>{await o.stop(),l("stop"),i(!1)}:async({})=>{l("play"),e.currentMessage=t,o.positionToCut=0,o.textId=t.id,await o.play(a,t.id)};return p.default.createElement("div",null,p.default.createElement("div",{className:"audio__actions"},p.default.createElement(f.IconButton,{onClick:async()=>{await globalThis?.navigator.clipboard.writeText(a),h.toast.success("Message copied to clipboard")},icon:"copy"}),n&&p.default.createElement(f.IconButton,{onClick:m,"data-listen":"api",icon:d})),s&&p.default.createElement("div",{className:"tokens overline"},s," TOKENS"))};var p=e("react"),f=e("pragmate-ui/icons"),g=e("@beyond-js/react-18-widgets/hooks"),h=e("pragmate-ui/toast")}}),g.set("./message/components/profile-icon",{hash:2128465958,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileIcon=function({role:e}){const[t,a]=(0,r.useState)(!1),s="user"===e?"user":globalThis.localStorage.getItem("chat.app.user.default.profile"),n=c.sessionWrapper.user.getProperties(),o="user"===e?n.photoURL:globalThis.localStorage.getItem("chat.app.user.default.profile");return r.default.createElement("picture",{className:"picture__container"},n.photoURL&&!t||"user"!==e?r.default.createElement("img",{alt:"user image profile",src:o,onError:()=>a(!0)}):r.default.createElement(l.Icon,{className:"lg",icon:i.ICONS[s]??s}))};var r=e("react"),l=e("pragmate-ui/icons"),c=e("@aimpact/chat-sdk/session"),i=e("@aimpact/chat/shared/icons")}}),g.set("./message/components/text",{hash:2882109275,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MessageText=function({store:t,texts:e,message:a,playable:s,autoplay:n=!1}){const o=a?.content??"",r=u.default.useRef(null),l=t["player"];if((0,d.useBinder)([l],()=>r.current.querySelectorAll(".highlight").forEach(e=>e.classList.remove("highlight")),"on.finish"),"string"!=typeof o)return null;var c=e=>t.currentMessage=a,n=a&&"user"!==a.role&&n,i=a.id===t.currentMessage?.id&&n;return u.default.createElement("div",{className:"message-text__container",ref:r},o&&u.default.createElement(m.Playable,{content:o,toolTexts:e.tools,playable:s,id:a.id,onClickWord:c,player:l,autoplay:i&&n}),a.audio&&u.default.createElement(p.AudioPlayer,{src:a.audio}))};var u=e("react"),d=e("@beyond-js/react-18-widgets/hooks"),m=e("@aimpact/chat-sdk/widgets/playable"),p=e("../../audio-player")}}),g.set("./message/context",{hash:4149788362,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useChatMessageContext=t.ChatMessageContext=void 0;var a=e("react");const s=t.ChatMessageContext=a.default.createContext({});t.useChatMessageContext=()=>a.default.useContext(s)}}),g.set("./message/index",{hash:2663511747,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Message=void 0;var l=e("react"),c=e("@aimpact/chat-sdk/widgets/playable"),i=e("./components/text"),u=e("./actions"),d=e("./components/profile-icon"),m=e("./system-actions");t.Message=l.default.memo(function({store:e,message:t,texts:a}){var[,,]=l.default.useState(t?.content??""),s="message__container "+t.role,n="assistant"===t.role?t.usage?.totalTokens:null,[,o,r]=(0,c.parseText)(t.id,t.content,["transcription","fetching-tool-data","kb-processed-response","function","kb-response"]);return l.default.createElement("div",{className:s,"data-id":t.id},l.default.createElement("section",{className:"picture__container"},l.default.createElement(d.ProfileIcon,{role:t.role})),l.default.createElement("section",{className:"message__content"},l.default.createElement(m.SystemActions,{texts:a,actions:r,message:t}),l.default.createElement(i.MessageText,{store:e,texts:a,playable:!0,message:t})),l.default.createElement("section",{className:"message__actions"},l.default.createElement(u.MessageActions,{store:e,play:!t.audio,message:t,text:o,messageTokens:n})))})}}),g.set("./message/system-actions/action",{hash:2639479614,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Action=function({last:s=!1,texts:e,data:{type:n,data:t}}){var a=(0,i.useMarked)(),e=e["systemActions"],o=({title:e,children:t})=>{var a=s?u.CollapsibleHeader:c.default.Fragment;return c.default.createElement("div",{...{className:"message-action "+n+(s?" last-action":"")}},c.default.createElement(a,null,c.default.createElement("header",null,c.default.createElement("h4",null,e)),c.default.createElement("section",{className:"detail__content"},t)))};if("fetching-tool-data"===n)return c.default.createElement(o,{title:e[n]});{var r;if("kb-response"===n)return r=t.matches.map(e=>c.default.createElement("li",{key:e.id},e.paragraph)),c.default.createElement(o,{title:e[n]},c.default.createElement("ul",null,r))}if("kb-processed-response"===n)return c.default.createElement(o,{title:e[n]},c.default.createElement("div",{dangerouslySetInnerHTML:{__html:a(t.response)}}));if("transcription"===n)return c.default.createElement(o,{title:e.transcription},c.default.createElement("p",null,t.transcription));if("function"===n&&"kb"===t.name)try{var l=JSON.parse(t.params)["text"];return c.default.createElement(o,{title:e.functions[t.name]},c.default.createElement("p",null,l))}catch(e){console.error(e)}return c.default.createElement("div",{className:"message-action "+n},n)};var c=e("react"),i=e("@aimpact/chat/shared/hooks"),u=e("pragmate-ui/collapsible")}}),g.set("./message/system-actions/index",{hash:1979651567,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SystemActions=function({actions:e,texts:a}){if(!e?.length)return null;e[e.length-1];return s.default.createElement("section",{className:"message-actions__container"},s.default.createElement(o.CollapsibleContainer,null,s.default.createElement(o.CollapsibleContent,null,s.default.createElement("section",{className:"actions__log"},e.map((e,t)=>s.default.createElement(n.Action,{texts:a,key:"action-"+t,data:e}))))))};var s=e("react"),n=e("./action"),o=e("pragmate-ui/collapsible")}}),f.exports.descriptor=[{im:"./audio-player",from:"AudioPlayer",name:"AudioPlayer"},{im:"./index",from:"Messages",name:"Messages"}],f.exports.process=function({require:e,prop:t,value:a}){!e&&"AudioPlayer"!==t||s("AudioPlayer",e?e("./audio-player").AudioPlayer:a),!e&&"Messages"!==t||s("Messages",e?e("./index").Messages:a)},s("__beyond_pkg",f),s("hmr",new function(){this.on=(e,t)=>f.hmr.on(e,t),this.off=(e,t)=>f.hmr.off(e,t)}),f.initialise(g)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hbnN3ZXJpbmcudHN4IiwiL2F1ZGlvLXBsYXllci50c3giLCIvaW5kZXgudHN4IiwiL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiL21lc3NhZ2UvY29udGV4dC50cyIsIi9tZXNzYWdlL2luZGV4LnRzeCIsIi9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giXSwibmFtZXMiOlsiX3JlYWN0IiwicmVxdWlyZSIsIl9pY29ucyIsIl9pY29uczIiLCJleHBvcnRzIiwiU3lzdGVtQW5zd2VyaW5nIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uIiwiaWNvbiIsIklDT05TIiwic3JjIiwiY29uc29sZSIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50Iiwib25Mb2FkZWRNZXRhZGF0YSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlZGRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbHMiLCJwcmVsb2FkIiwidHlwZSIsInN0b3JlIiwibWVzc2FnZXMiLCJ0ZXh0cyIsInRvdGFsTWVzc2FnZXMiLCJ1c2VTdGF0ZSIsImxlbmd0aCIsIl91aSIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsIm91dHB1dCIsIm1hcCIsIm1lc3NhZ2UiLCJpIiwibGFzdCIsIl9tZXNzYWdlIiwiTWVzc2FnZSIsImtleSIsIkZyYWdtZW50IiwibWVzc2FnZVRva2VucyIsInBsYXkiLCJwbGF5ZXIiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImFwcGx5IiwiX2hvb2tzIiwidXNlQmluZGVyIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsImN1cnJlbnRNZXNzYWdlIiwiaWQiLCJvbkNsaWNrIiwiYXN5bmMiLCJhd2FpdCIsInN0b3AiLCJwb3NpdGlvblRvQ3V0IiwidGV4dElkIiwiSWNvbkJ1dHRvbiIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJfdG9hc3QiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkYXRhLWxpc3RlbiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlclByb3BzIiwiX3Nlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwicGhvdG9VUkwiLCJhbHQiLCJvbkVycm9yIiwiaGFuZGxlTG9hZEVycm9yIiwicGxheWFibGUiLCJhdXRvcGxheSIsImNvbnRlbnQiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJvbkNsaWNrV29yZCIsImV2ZW50IiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiX3BsYXlhYmxlIiwiUGxheWFibGUiLCJ0b29sVGV4dHMiLCJ0b29scyIsImF1ZGlvIiwiX2F1ZGlvUGxheWVyIiwiQXVkaW9QbGF5ZXIiLCJDaGF0TWVzc2FnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2hhdE1lc3NhZ2VDb250ZXh0IiwidXNlQ29udGV4dCIsIl90ZXh0IiwiX2FjdGlvbnMiLCJfcHJvZmlsZUljb24iLCJfc3lzdGVtQWN0aW9ucyIsIm1lbW8iLCJjbHMiLCJ1c2FnZSIsInRvdGFsVG9rZW5zIiwicGxheWFibGVDb250ZW50IiwiYWN0aW9ucyIsInBhcnNlVGV4dCIsImRhdGEtaWQiLCJQcm9maWxlSWNvbiIsIlN5c3RlbUFjdGlvbnMiLCJNZXNzYWdlVGV4dCIsIk1lc3NhZ2VBY3Rpb25zIiwiZGF0YSIsIm1hcmsiLCJ1c2VNYXJrZWQiLCJhY3Rpb25zVGV4dHMiLCJzeXN0ZW1BY3Rpb25zIiwiQ29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsIl9jb2xsYXBzaWJsZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwibWF0Y2hlcyIsIml0ZW0iLCJwYXJhZ3JhcGgiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlc3BvbnNlIiwidHJhbnNjcmlwdGlvbiIsIm5hbWUiLCJKU09OIiwicGFyc2UiLCJwYXJhbXMiLCJmdW5jdGlvbnMiLCJlIiwiZXJyb3IiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIl9hY3Rpb24iLCJBY3Rpb24iXSwibWFwcGluZ3MiOiJrNENBQUEsSUFBQUEsRUFBQUMsRUFBQSxPQUFBLEVBQ0FDLEVBQUFELEVBQUEsbUJBQUEsRUFDQUUsRUFBQUYsRUFBQSxnQ0FBQSxFQWFFRyxFQUFBQyxnQkFYNkJBLElBRTdCTCxFQUFBTSxRQUFBQyxjQUFBLE1BQUEsQ0FBS0MsVUFBVSxtQkFBbUIsRUFDakNSLEVBQUFNLFFBQUFDLGNBQUNMLEVBQUFPLEtBQUksQ0FBQ0QsVUFBVSxLQUFLRSxLQUFNUCxFQUFBUSxNQUFNLGFBQWEsQ0FBQSxFQUM5Q1gsRUFBQU0sUUFBQUMsY0FBQSxNQUFBLENBQUtDLFVBQVUsZUFBZSxFQUM3QlIsRUFBQU0sUUFBQUMsY0FBQSxPQUFBLENBQU1DLFVBQVUsS0FBSyxDQUFBLEVBQ3JCUixFQUFBTSxRQUFBQyxjQUFBLE9BQUEsQ0FBTUMsVUFBVSxLQUFLLENBQUEsRUFDckJSLEVBQUFNLFFBQUFDLGNBQUEsT0FBQSxDQUFNQyxVQUFVLEtBQUssQ0FBQSxDQUFRLENBQ3hCLEMsaUlDVFUsU0FBc0IsQ0FBRUksSUFBQUEsQ0FBRyxHQUM3QyxHQUFJLENBQUNBLEVBRUosT0FEQUMsUUFBUUMsS0FBSyxzQkFBc0IsRUFDNUIsS0FHUkYs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