System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","pragmate-ui@0.1.1/icons","@aimpact/chat@1.0.1/components/icons","@aimpact/ailearn-app@0.0.32/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@0.1.1/toast","@aimpact/chat-sdk@1.0.0/session","@aimpact/chat@1.0.1/shared/icons","@aimpact/chat-sdk@1.0.0/widgets/playable","@bgroup/media-manager@1.0.0/audio-player","@aimpact/chat@1.0.1/shared/hooks","pragmate-ui@0.1.1/collapsible"],function(s,e){"use strict";var t,a,n,o,c,r,l,i,u,d,m,p,f,g,h;return s("Messages",void 0),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){o=e},function(e){c=e},function(e){r=e},function(e){l=e},function(e){i=e},function(e){u=e},function(e){d=e},function(e){m=e},function(e){p=e},function(e){f=e}],execute:function(){h=t.Bundle,(g=new h({module:{vspecifier:"@aimpact/ailearn-app@0.0.32/chat/messages"},type:"code"},e.meta.url).package()).dependencies.update([["react",a],["pragmate-ui/icons",n],["@aimpact/chat/components/icons",o],["@aimpact/ailearn-app/components/ui",c],["@beyond-js/react-18-widgets/hooks",r],["pragmate-ui/toast",l],["@aimpact/chat-sdk/session",i],["@aimpact/chat/shared/icons",u],["@aimpact/chat-sdk/widgets/playable",d],["@bgroup/media-manager/audio-player",m],["@aimpact/chat/shared/hooks",p],["pragmate-ui/collapsible",f]]),(h=new Map).set("./answering",{hash:1428612859,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SystemAnswering=void 0;var a=e("react"),s=e("pragmate-ui/icons"),n=e("@aimpact/chat/components/icons");t.SystemAnswering=()=>a.default.createElement("div",{className:"message answering"},a.default.createElement(s.Icon,{className:"lg",icon:n.ICONS["ai-profile"]}),a.default.createElement("div",{className:"dot-animation"},a.default.createElement("span",{className:"dot"}),a.default.createElement("span",{className:"dot"}),a.default.createElement("span",{className:"dot"})))}}),h.set("./index",{hash:2206451622,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Messages=function({store:s,messages:e,texts:n}){const[o,,]=c.default.useState(e.length??[].length);return e.length?(e=e.map((e,t)=>{var a=t===o-1;return c.default.createElement(r.Message,{store:s,key:"message-"+t,message:e,last:a,texts:n})}),c.default.createElement(c.default.Fragment,null,e)):c.default.createElement(a.EmptyCard,{className:"empty-section__container",text:n.empty,icon:"info"})};var c=e("react"),r=e("./message"),a=e("@aimpact/ailearn-app/components/ui")}}),h.set("./message/actions/index",{hash:3317605633,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MessageActions=function({store:e,message:t,text:a,messageTokens:s,play:n=!0}){const o=e.player,[c,r]=p.default.useState("stop"),[l,i]=p.default.useState(!1),u=((0,g.useBinder)([o],()=>i(o.speaking)),(0,g.useBinder)([o],()=>{i(!1),r("")},"on.finish"),e.currentMessage?.id===t?.id&&l),d=u||"play"===c?"stop":"play",m=u||"play"===c?async({})=>{await o.stop(),r("stop"),i(!1)}:async({})=>{r("play"),e.currentMessage=t,o.positionToCut=0,o.textId=t.id,await o.play(a,t.id)};return p.default.createElement("div",null,p.default.createElement("div",{className:"audio__actions"},p.default.createElement(f.IconButton,{onClick:async()=>{await globalThis?.navigator.clipboard.writeText(a),h.toast.success("Message copied to clipboard")},icon:"copy"}),n&&p.default.createElement(f.IconButton,{onClick:m,"data-listen":"api",icon:d})),s&&p.default.createElement("div",{className:"tokens overline"},s," TOKENS"))};var p=e("react"),f=e("pragmate-ui/icons"),g=e("@beyond-js/react-18-widgets/hooks"),h=e("pragmate-ui/toast")}}),h.set("./message/components/profile-icon",{hash:2128465958,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileIcon=function({role:e}){const[t,a]=(0,c.useState)(!1),s="user"===e?"user":globalThis.localStorage.getItem("chat.app.user.default.profile"),n=l.sessionWrapper.user.getProperties(),o="user"===e?n.photoURL:globalThis.localStorage.getItem("chat.app.user.default.profile");return c.default.createElement("picture",{className:"picture__container"},n.photoURL&&!t||"user"!==e?c.default.createElement("img",{alt:"user image profile",src:o,onError:()=>a(!0)}):c.default.createElement(r.Icon,{className:"lg",icon:i.ICONS[s]??s}))};var c=e("react"),r=e("pragmate-ui/icons"),l=e("@aimpact/chat-sdk/session"),i=e("@aimpact/chat/shared/icons")}}),h.set("./message/components/text",{hash:1049416953,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MessageText=function({store:t,texts:e,message:a,playable:s,autoplay:n=!1}){const o=a?.content??"",c=i.default.useRef(null),r=t.player;var l;return(0,u.useBinder)([r],()=>c.current.querySelectorAll(".highlight").forEach(e=>e.classList.remove("highlight")),"on.finish"),"string"!=typeof o?null:(n=a&&"user"!==a.role&&n,l=a.id===t.currentMessage?.id&&n,i.default.createElement("div",{className:"message-text__container",ref:c},o&&i.default.createElement(d.Playable,{content:o,toolTexts:e.tools,playable:s,id:a.id,onClickWord:e=>t.currentMessage=a,player:r,autoplay:l&&n}),a.audio&&i.default.createElement(m.AudioPlayer,{src:a.audio,convert:!0})))};var i=e("react"),u=e("@beyond-js/react-18-widgets/hooks"),d=e("@aimpact/chat-sdk/widgets/playable"),m=e("@bgroup/media-manager/audio-player")}}),h.set("./message/context",{hash:4149788362,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useChatMessageContext=t.ChatMessageContext=void 0;var a=e("react");const s=t.ChatMessageContext=a.default.createContext({});t.useChatMessageContext=()=>a.default.useContext(s)}}),h.set("./message/index",{hash:2663511747,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Message=void 0;var r=e("react"),l=e("@aimpact/chat-sdk/widgets/playable"),i=e("./components/text"),u=e("./actions"),d=e("./components/profile-icon"),m=e("./system-actions");t.Message=r.default.memo(function({store:e,message:t,texts:a}){var[,,]=r.default.useState(t?.content??""),s="message__container "+t.role,n="assistant"===t.role?t.usage?.totalTokens:null,[,o,c]=(0,l.parseText)(t.id,t.content,["transcription","fetching-tool-data","kb-processed-response","function","kb-response"]);return r.default.createElement("div",{className:s,"data-id":t.id},r.default.createElement("section",{className:"picture__container"},r.default.createElement(d.ProfileIcon,{role:t.role})),r.default.createElement("section",{className:"message__content"},r.default.createElement(m.SystemActions,{texts:a,actions:c,message:t}),r.default.createElement(i.MessageText,{store:e,texts:a,playable:!0,message:t})),r.default.createElement("section",{className:"message__actions"},r.default.createElement(u.MessageActions,{store:e,play:!t.audio,message:t,text:o,messageTokens:n})))})}}),h.set("./message/system-actions/action",{hash:2639479614,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Action=function({last:s=!1,texts:e,data:{type:n,data:t}}){var a,o=(0,i.useMarked)(),e=e.systemActions,c=({title:e,children:t})=>{var a=s?u.CollapsibleHeader:l.default.Fragment;return l.default.createElement("div",{className:"message-action "+n+(s?" last-action":"")},l.default.createElement(a,null,l.default.createElement("header",null,l.default.createElement("h4",null,e)),l.default.createElement("section",{className:"detail__content"},t)))};if("fetching-tool-data"===n)return l.default.createElement(c,{title:e[n]});if("kb-response"===n)return a=t.matches.map(e=>l.default.createElement("li",{key:e.id},e.paragraph)),l.default.createElement(c,{title:e[n]},l.default.createElement("ul",null,a));if("kb-processed-response"===n)return l.default.createElement(c,{title:e[n]},l.default.createElement("div",{dangerouslySetInnerHTML:{__html:o(t.response)}}));if("transcription"===n)return l.default.createElement(c,{title:e.transcription},l.default.createElement("p",null,t.transcription));if("function"===n&&"kb"===t.name)try{var r=JSON.parse(t.params).text;return l.default.createElement(c,{title:e.functions[t.name]},l.default.createElement("p",null,r))}catch(e){console.error(e)}return l.default.createElement("div",{className:"message-action "+n},n)};var l=e("react"),i=e("@aimpact/chat/shared/hooks"),u=e("pragmate-ui/collapsible")}}),h.set("./message/system-actions/index",{hash:1979651567,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SystemActions=function({actions:e,texts:a}){return e?.length?(e[e.length-1],s.default.createElement("section",{className:"message-actions__container"},s.default.createElement(o.CollapsibleContainer,null,s.default.createElement(o.CollapsibleContent,null,s.default.createElement("section",{className:"actions__log"},e.map((e,t)=>s.default.createElement(n.Action,{texts:a,key:"action-"+t,data:e}))))))):null};var s=e("react"),n=e("./action"),o=e("pragmate-ui/collapsible")}}),g.exports.descriptor=[{im:"./index",from:"Messages",name:"Messages"}],g.exports.process=function({require:e,prop:t,value:a}){!e&&"Messages"!==t||s("Messages",e?e("./index").Messages:a)},s("__beyond_pkg",g),s("hmr",new function(){this.on=(e,t)=>g.hmr.on(e,t),this.off=(e,t)=>g.hmr.off(e,t)}),g.initialise(h)}}});