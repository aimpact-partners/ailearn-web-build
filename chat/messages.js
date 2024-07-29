System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","pragmate-ui@1.0.0-beta.1/icons","@aimpact/chat@1.0.2/components/icons","@aimpact/ailearn-app@0.1.0-dev.03/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@1.0.0-beta.1/toast","@aimpact/chat-sdk@1.0.1/session","@aimpact/chat@1.0.2/shared/icons","@aimpact/chat-sdk@1.0.1/widgets/playable","@aimpact/chat@1.0.2/shared/hooks","pragmate-ui@1.0.0-beta.1/collapsible"],function(s,e){var t,a,n,r,o,l,c,i,u,d,m,p,f,g;return s({AudioPlayer:void 0,Messages:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){r=e},function(e){o=e},function(e){l=e},function(e){c=e},function(e){i=e},function(e){u=e},function(e){d=e},function(e){m=e},function(e){p=e}],execute:function(){g=t.Bundle,(f=new g({module:{vspecifier:"@aimpact/ailearn-app@0.1.0-dev.03/chat/messages"},type:"code"},e.meta.url).package()).dependencies.update([["react",a],["pragmate-ui/icons",n],["@aimpact/chat/components/icons",r],["@aimpact/ailearn-app/components/ui",o],["@beyond-js/react-18-widgets/hooks",l],["pragmate-ui/toast",c],["@aimpact/chat-sdk/session",i],["@aimpact/chat/shared/icons",u],["@aimpact/chat-sdk/widgets/playable",d],["@aimpact/chat/shared/hooks",m],["pragmate-ui/collapsible",p]]),(g=new Map).set("./answering",{hash:1428612859,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SystemAnswering=void 0;var a=e("react"),s=e("pragmate-ui/icons"),n=e("@aimpact/chat/components/icons");t.SystemAnswering=()=>a.default.createElement("div",{className:"message answering"},a.default.createElement(s.Icon,{className:"lg",icon:n.ICONS["ai-profile"]}),a.default.createElement("div",{className:"dot-animation"},a.default.createElement("span",{className:"dot"}),a.default.createElement("span",{className:"dot"}),a.default.createElement("span",{className:"dot"})))}}),g.set("./audio-player",{hash:1190578037,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AudioPlayer=function({src:e}){if(!e)return console.warn("not audio to process"),null;e=URL.createObjectURL(e);let a=s.default.useRef(null);return s.default.useEffect(()=>{let e=a.current,t=()=>{e.duration===1/0&&(e.currentTime=1e101,e.ontimeupdate=()=>{e.ontimeupdate=null,e.currentTime=0})};return e.addEventListener("loadedmetadata",onloadeddata),()=>e.removeEventListener("loadedmetadata",t)},[e]),e?s.default.createElement("div",{className:"audio-player"},s.default.createElement("audio",{controls:!0,preload:"metadata"},s.default.createElement("source",{src:e,type:"audio/mp3",ref:a}),"Your browser does not support the audio element.")):null};var s=e("react")}}),g.set("./index",{hash:2048350410,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Messages=function({store:s,messages:e,texts:n,userPicture:r}){let[o,,]=l.default.useState(e.length??[].length);return globalThis.s=s,e.length?(e=e.map((e,t)=>{var a=t===o-1;return l.default.createElement(c.Message,{userPicture:r,store:s,key:"message-"+t,message:e,last:a,texts:n})}),l.default.createElement(l.default.Fragment,null,e)):l.default.createElement(a.EmptyCard,{className:"empty-section__container",text:n.empty,icon:"info"})};var l=e("react"),c=e("./message"),a=e("@aimpact/ailearn-app/components/ui")}}),g.set("./message/actions/index",{hash:3317605633,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MessageActions=function({store:e,message:t,text:a,messageTokens:s,play:n=!0}){let r=e.player,[o,l]=p.default.useState("stop"),[c,i]=p.default.useState(!1),u=((0,g.useBinder)([r],()=>i(r.speaking)),(0,g.useBinder)([r],()=>{i(!1),l("")},"on.finish"),e.currentMessage?.id===t?.id&&c),d=u||"play"===o?"stop":"play",m=u||"play"===o?async({})=>{await r.stop(),l("stop"),i(!1)}:async({})=>{l("play"),e.currentMessage=t,r.positionToCut=0,r.textId=t.id,await r.play(a,t.id)};return p.default.createElement("div",null,p.default.createElement("div",{className:"audio__actions"},p.default.createElement(f.IconButton,{onClick:async()=>{await globalThis?.navigator.clipboard.writeText(a),h.toast.success("Message copied to clipboard")},icon:"copy"}),n&&p.default.createElement(f.IconButton,{onClick:m,"data-listen":"api",icon:d})),s&&p.default.createElement("div",{className:"tokens overline"},s," TOKENS"))};var p=e("react"),f=e("pragmate-ui/icons"),g=e("@beyond-js/react-18-widgets/hooks"),h=e("pragmate-ui/toast")}}),g.set("./message/components/profile-icon",{hash:757370342,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileIcon=function({role:e,userPicture:t}){let[a,s]=(0,l.useState)(!1),n="user"===e?"user":globalThis.localStorage.getItem("chat.app.user.default.profile"),r=i.sessionWrapper.user.getProperties(),o="user"===e?t:globalThis.localStorage.getItem("chat.app.user.default.profile");return l.default.createElement("picture",{className:"picture__container"},r.photoURL&&!a||"user"!==e?l.default.createElement("img",{alt:"user image profile",src:o,onError:()=>s(!0)}):l.default.createElement(c.Icon,{className:"lg",icon:u.ICONS[n]??n}))};var l=e("react"),c=e("pragmate-ui/icons"),i=e("@aimpact/chat-sdk/session"),u=e("@aimpact/chat/shared/icons")}}),g.set("./message/components/text",{hash:2882109275,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MessageText=function({store:t,texts:e,message:a,playable:s,autoplay:n=!1}){let r=a?.content??"",o=i.default.useRef(null),l=t.player;var c;return(0,u.useBinder)([l],()=>o.current.querySelectorAll(".highlight").forEach(e=>e.classList.remove("highlight")),"on.finish"),"string"!=typeof r?null:(n=a&&"user"!==a.role&&n,c=a.id===t.currentMessage?.id&&n,i.default.createElement("div",{className:"message-text__container",ref:o},r&&i.default.createElement(d.Playable,{content:r,toolTexts:e.tools,playable:s,id:a.id,onClickWord:e=>t.currentMessage=a,player:l,autoplay:c&&n}),a.audio&&i.default.createElement(m.AudioPlayer,{src:a.audio})))};var i=e("react"),u=e("@beyond-js/react-18-widgets/hooks"),d=e("@aimpact/chat-sdk/widgets/playable"),m=e("../../audio-player")}}),g.set("./message/context",{hash:4149788362,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useChatMessageContext=t.ChatMessageContext=void 0;var a=e("react");let s=t.ChatMessageContext=a.default.createContext({});t.useChatMessageContext=()=>a.default.useContext(s)}}),g.set("./message/index",{hash:2471031835,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Message=void 0;var c=e("react"),i=e("@aimpact/chat-sdk/widgets/playable"),u=e("./components/text"),d=e("./actions"),m=e("./components/profile-icon"),p=e("./system-actions");t.Message=c.default.memo(function({store:e,message:t,texts:a,userPicture:s}){var[,,]=c.default.useState(t?.content??""),n="message__container "+t.role,r="assistant"===t.role?t.usage?.totalTokens:null,[,o,l]=(0,i.parseText)(t.id,t.content,["transcription","fetching-tool-data","kb-processed-response","function","kb-response"]);return c.default.createElement("div",{className:n,"data-id":t.id},c.default.createElement("section",{className:"picture__container"},c.default.createElement(m.ProfileIcon,{role:t.role,userPicture:s})),c.default.createElement("section",{className:"message__content"},c.default.createElement(p.SystemActions,{texts:a,actions:l,message:t}),c.default.createElement(u.MessageText,{store:e,texts:a,playable:!0,message:t}),c.default.createElement("section",{className:"message__actions"},c.default.createElement(d.MessageActions,{store:e,play:!t.audio,message:t,text:o,messageTokens:r}))))})}}),g.set("./message/system-actions/action",{hash:2639479614,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Action=function({last:s=!1,texts:e,data:{type:n,data:t}}){var a,r=(0,i.useMarked)(),e=e.systemActions,o=({title:e,children:t})=>{var a=s?u.CollapsibleHeader:c.default.Fragment;return c.default.createElement("div",{className:"message-action "+n+(s?" last-action":"")},c.default.createElement(a,null,c.default.createElement("header",null,c.default.createElement("h4",null,e)),c.default.createElement("section",{className:"detail__content"},t)))};if("fetching-tool-data"===n)return c.default.createElement(o,{title:e[n]});if("kb-response"===n)return a=t.matches.map(e=>c.default.createElement("li",{key:e.id},e.paragraph)),c.default.createElement(o,{title:e[n]},c.default.createElement("ul",null,a));if("kb-processed-response"===n)return c.default.createElement(o,{title:e[n]},c.default.createElement("div",{dangerouslySetInnerHTML:{__html:r(t.response)}}));if("transcription"===n)return c.default.createElement(o,{title:e.transcription},c.default.createElement("p",null,t.transcription));if("function"===n&&"kb"===t.name)try{var l=JSON.parse(t.params).text;return c.default.createElement(o,{title:e.functions[t.name]},c.default.createElement("p",null,l))}catch(e){console.error(e)}return c.default.createElement("div",{className:"message-action "+n},n)};var c=e("react"),i=e("@aimpact/chat/shared/hooks"),u=e("pragmate-ui/collapsible")}}),g.set("./message/system-actions/index",{hash:1979651567,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SystemActions=function({actions:e,texts:a}){return e?.length?(e[e.length-1],s.default.createElement("section",{className:"message-actions__container"},s.default.createElement(r.CollapsibleContainer,null,s.default.createElement(r.CollapsibleContent,null,s.default.createElement("section",{className:"actions__log"},e.map((e,t)=>s.default.createElement(n.Action,{texts:a,key:"action-"+t,data:e}))))))):null};var s=e("react"),n=e("./action"),r=e("pragmate-ui/collapsible")}}),f.exports.descriptor=[{im:"./audio-player",from:"AudioPlayer",name:"AudioPlayer"},{im:"./index",from:"Messages",name:"Messages"}],f.exports.process=function({require:e,prop:t,value:a}){!e&&"AudioPlayer"!==t||s("AudioPlayer",e?e("./audio-player").AudioPlayer:a),!e&&"Messages"!==t||s("Messages",e?e("./index").Messages:a)},s("__beyond_pkg",f),s("hmr",new function(){this.on=(e,t)=>f.hmr.on(e,t),this.off=(e,t)=>f.hmr.off(e,t)}),f.initialise(g)}}});