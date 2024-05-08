System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/base","@beyond-js/reactive@1.1.12/model","@aimpact/chat-sdk@1.0.0/voice","@aimpact/chat@1.0.1/wrapper","@bgroup/media-manager@1.0.0/recorder","@aimpact/chat-sdk@1.0.0/core","@aimpact/chat@1.0.1/extensions","react@18.2.0","pragmate-ui@0.1.1/icons","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.1/messages.code","pragmate-ui@0.1.1/perfect-scrollbar","@aimpact/chat@1.0.1/shared/components","pragmate-ui@0.1.1/preload","@aimpact/chat@1.0.1/shared/hooks","pragmate-ui@0.1.1/form","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.32/config","pragmate-ui@0.1.1/modal","pragmate-ui@0.1.1/toast","@aimpact/chat@1.0.1/ui/manager","@aimpact/chat@1.0.1/shared/icons"],function(n,e){"use strict";var t,a,r,s,o,i,c,l,u,d,h,m,p,f,g,v,y,b,w,x,C,E,_,M,S,P,k;return n({Controller:void 0,AudioManager:void 0,Chat:void 0,ChatInput:void 0,RecordingButton:void 0,PermissionsModal:void 0,SystemModal:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){s=e},function(e){o=e},function(e){i=e},function(e){c=e},function(e){l=e},function(e){u=e},function(e){d=e},function(e){h=e},function(e){m=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){v=e},function(e){y=e},function(e){b=e},function(e){w=e},function(e){x=e},function(e){C=e},function(e){E=e},function(e){_=e},function(e){M=e},function(e){S=e}],execute:function(){k=a.Bundle,(P=new k({module:{vspecifier:"@aimpact/chat@1.0.1/chat-control",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/base",s],["@beyond-js/reactive/model",o],["@aimpact/chat-sdk/voice",i],["@aimpact/chat/wrapper",c],["@bgroup/media-manager/recorder",l],["@aimpact/chat-sdk/core",u],["@aimpact/chat/extensions",d],["react",h],["pragmate-ui/icons",m],["@beyond-js/react-18-widgets/hooks",p],["@aimpact/chat/messages.code",f],["pragmate-ui/perfect-scrollbar",g],["@aimpact/chat/shared/components",v],["pragmate-ui/preload",y],["@aimpact/chat/shared/hooks",b],["pragmate-ui/form",w],["pragmate-ui/components",x],["@aimpact/chat/config",C],["pragmate-ui/modal",E],["pragmate-ui/toast",_],["@aimpact/chat/ui/manager",M],["@aimpact/chat/shared/icons",S]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"aimpact-chat-control",attrs:["id","container","disabled"],vspecifier:"@aimpact/chat@1.0.1/chat-control.widget"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/chat@1.0.1/chat-control.widget"),(k=new Map).set("./controller",{hash:1654100939,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/base"),n=e("./views"),r=e("./store");class s extends a.ReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager(this.attributes.get("id")),globalThis.store=this.#store,this.#store}get Widget(){return n.View}constructor(...e){super(...e),this.attributes.on("change",()=>this.#store?.checkAttributes(this.attributes))}}t.Controller=s}}),k.set("./interfaces/messages",{hash:775952468,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),k.set("./store/audio",{hash:870182366,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AudioManager=void 0;var a=e("@beyond-js/reactive/model"),n=e("@aimpact/chat-sdk/voice"),r=e("@aimpact/chat/wrapper"),s=e("@bgroup/media-manager/recorder");class o extends a.ReactiveModel{#parent;#recorder;get recorder(){return this.#recorder}#players={web:n.Voice,lab:n.VoiceLab};#player="web";get player(){return this.#currentPlayer}#currentPlayer;constructor(e){super({}),this.#recorder=new s.Recorder,this.#parent=e,this.reactiveProps(["autoplay"]),this.#currentPlayer=new this.#players[this.#player]({language:r.AppWrapper.language,rate:r.AppWrapper.audioSpeed}),r.AppWrapper.on("app.settings.change",this.listenAppChanges)}listenAppChanges=()=>{this.#currentPlayer.set({rate:r.AppWrapper.audioSpeed,languuage:r.AppWrapper.language})};selectPlayer(e){if(!this.#players[e])throw new Error(`Player ${e} not found`);this.#player=e,this.trigger("change")}}t.AudioManager=o}}),k.set("./store/index",{hash:2692844052,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),n=e("@aimpact/chat-sdk/core"),r=e("@aimpact/chat/wrapper"),s=e("./audio"),o=e("@aimpact/chat/extensions");class i extends a.ReactiveModel{#messages;#EXTENSIONS=["chat-intro"];get messages(){return this.#messages}#name;get name(){return this.#name}#category;get category(){return this.#category}#chat;get chat(){return this.#chat}#chats=r.AppWrapper.chats;get chats(){return this.#chats.items??[]}#audio=new s.AudioManager(this);get audioManager(){return this.#audio}#kbs=r.AppWrapper.knowledgeBoxes;get kbs(){return this.#kbs.items??[]}#selectedKb;get selectedKb(){return this.#selectedKb}set selectedKb(e){this.#selectedKb=e}#selectedModel="GPT 4";get selectedModel(){return this.#selectedModel}set selectedModel(e){this.#selectedModel=e}#notFound;get notFound(){return this.#notFound}set notFound(e){this.#notFound=e}get selectedKbPath(){return this.#kbs.items.find(e=>e.id===this.#selectedKb)?.path??"No Knowledge Box"}#currentMessage;get currentMessage(){return this.#currentMessage}set currentMessage(e){e?.id!==this.#currentMessage?.id&&(this.#currentMessage=e)}#disabled;get disabled(){return this.#disabled}set disabled(e){this.#disabled!==e&&(this.#disabled=e,this.triggerEvent("change"))}#extensions=new Map;get extensions(){return this.#extensions}#id;constructor(e){super(e),this.#id=e,this.reactiveProps(["waitingResponse","autoplay"]),this.autoplay=!0,this.load(e)}clean(){this.fetching=!1,this.ready=!1}load=async e=>{if(e){this.fetching=!0;const t=new n.Chat({id:e});if(await t.loadAll({id:e}),globalThis.chat=t,(r.AppWrapper.currentChat=t).found){e=this.#kbs.items.find(e=>e.id===t.knowledgeBoxId),this.#selectedKb=e?e.id:"default",this.audioManager.player.set({language:t.language?.default??r.AppWrapper.language}),t.on("change",()=>{this.#messages=t.messages?.items,this.triggerEvent("new.message")}),this.#chat=t;const a=await o.extensions.load(this.#EXTENSIONS,t.metadata);this.#EXTENSIONS.forEach((e,t)=>{this.#extensions.set(e,a[t])}),this.#messages=t.messages.items,this.fetching=!1,this.ready=!0,this.notFound=!1}else this.fetching=!1,this.ready=!0,this.notFound=!0}else this.ready=!0,this.notFound=!0};async sendMessage(e){try{if(performance.mark("start"),this.#currentMessage=void 0,"string"!=typeof e||![void 0,"",null].includes(e)){this.fetching=!0,this.waitingResponse=!0;const{message:t,response:a}=await this.#chat.sendMessage(e),n=(this.response=a,this.#currentMessage=t,()=>{this.triggerEvent(`message.${a.id}.updated`)}),r=()=>{t.off("content.updated",n),this.triggerEvent("chat.available"),this.triggerEvent(`message.${a.id}.received`),t.off("response.finished",r)};t.on("content.updated",n),t.on("response.finished",r),this.waitingResponse=!1,this.triggerEvent("new.message")}}catch(e){console.error(e)}finally{this.waitingResponse=!1,this.fetching=!1}}checkAttributes(e){this.disabled="true"===e.get("disabled")}}t.StoreManager=i}}),k.set("./views/chat/back-arrow",{hash:1969928412,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BackArrow=function({store:e,separator:t}){const a=i.default.useRef(null),n=(0,u.useChatContext)().attributes,r=i.default.useRef(null),s=((0,l.useBinder)([e],()=>globalThis.setTimeout(()=>{var e=r.current.closest(".chat-control__container").querySelector(".chat__content");e&&(e.scrollHeight-e.clientHeight-e.scrollTop<=100?(r.current.classList.remove("show"),s()):r.current.classList.add("show"))},100),"new.message"),()=>{t.current?.scrollIntoView({block:"end",behavior:"smooth"})});i.default.useEffect(()=>{const e=r.current.closest(".chat-control__container").querySelector(".chat__content"),t=()=>{e&&(e.scrollHeight-e.clientHeight-e.scrollTop<=100?r.current.classList.remove("show"):r.current.classList.add("show"))};return e.addEventListener("scroll",t),()=>{e?.removeEventListener("scroll",t)}},[]);let o="scroll-bottom show circle";return n.has("container")&&(o+="scroll-bottom--"+n.get("container")),e="container__icon "+(n.has("container")?" container--"+n.get("container"):""),i.default.createElement("div",{className:e,ref:r},i.default.createElement(c.IconButton,{ref:a,icon:"backArrow",variant:"tertiary",className:o,onClick:s}))};var i=e("react"),c=e("pragmate-ui/icons"),l=e("@beyond-js/react-18-widgets/hooks"),u=e("../context")}}),k.set("./views/chat/content",{hash:640135663,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Content=function({separator:e}){const{store:t,texts:a,attributes:n}=(0,m.useChatContext)(),r=t.messages,[,s]=u.default.useState(r.length??[].length),[o,i,c]=(0,d.useExtension)("chat-intro");(0,p.useBinder)([t],()=>{s(t.messages.length)},"new.message");let l="chat__content";return n.has("container")&&(l+=" container--"+n.get("container")),u.default.createElement("div",{className:l},u.default.createElement(f.ExtensionRenderer,{component:c,reference:o}),i&&u.default.createElement(u.default.Fragment,null,u.default.createElement(h.Messages,{chat:t.chat,player:t.audioManager.player,current:t.currentMessage,store:t,messages:t.messages,texts:a}),u.default.createElement("div",{ref:e,className:"separator"})))};var u=e("react"),d=e("./use-extension"),h=e("@aimpact/chat/messages.code"),m=e("../context"),p=e("@beyond-js/react-18-widgets/hooks"),f=e("./extension-renderer")}}),k.set("./views/chat/extension-renderer",{hash:1172650975,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ExtensionRenderer=function({component:e,reference:t}){var a=(0,r.useChatContext)().store["chat"];return e?n.default.createElement(n.default.Fragment,null,n.default.createElement(e,{ref:t,metadata:JSON.stringify(a.metadata)})):null};var n=e("react"),r=e("../context")}}),k.set("./views/chat/index",{hash:1679945563,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Chat=function(e){var t=(0,o.useChatContext)().store,a=t.extensions.get("chat-intro"),[n]=s.default.useState(!1),r=s.default.useRef(null);return s.default.createElement("div",{className:"chat-control__container"+(n?" reader__container":"")},s.default.createElement(l.Content,{separator:r}),s.default.createElement("div",{className:"footer-container"},s.default.createElement(c.BackArrow,{store:t,separator:r}),!a?.metadata?.avoidChat&&s.default.createElement(i.ChatInput,{store:t,isWaiting:!1})))};var s=e("react"),o=e("../context"),i=e("../input"),c=e("./back-arrow"),l=e("./content")}}),k.set("./views/chat/skeleton",{hash:975554159,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatSkeleton=function(){var{}=(0,n.useChatContext)();return a.default.createElement("div",{className:"chat-container"},a.default.createElement(r.CollapsibleHeader,{title:a.default.createElement(s.Preload,{width:"400px",height:"30px"})}),a.default.createElement("div",{className:"send"}))};var a=e("react"),n=e("../context"),r=e("@aimpact/chat/shared/components"),s=e("pragmate-ui/preload")}}),k.set("./views/chat/use-extension",{hash:2889823330,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useExtension=function(e){const[t,a]=o.default.useState(!1),n=o.default.useRef(null),r=(0,i.useChatContext)().store["extensions"],s=r.get(e)?.control;return o.default.useEffect(()=>{const e=e=>a(!0);if(n?.current)return n.current.addEventListener("ready",e),()=>n.current?.removeEventListener("ready",e)},[n?.current]),[n,t||!s,s]};var o=e("react"),i=e("../context")}}),k.set("./views/context",{hash:2340798180,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useChatContext=t.ChatContext=void 0;var a=e("react");const n=t.ChatContext=a.default.createContext({});t.useChatContext=()=>a.default.useContext(n)}}),k.set("./views/index",{hash:4081883635,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e,...t}){const[,a]=f.default.useState(e.fetching),[n,r]=f.default.useState(e.ready),[s,o]=(0,x.useTexts)(C.module.specifier),[i,c]=f.default.useState("top"),{autoplay:l,messages:u,audioManager:{player:d}}=e,h=((0,g.useBinder)([e],()=>{a(e.fetching),r(e.ready)}),{setScrollPosition:e=>{e||console.trace("setScrollPosition called with no value"),c(e)},scrollPosition:i,store:e,texts:o,autoplay:l,messages:u,player:d,attributes:t.attributes}),m=e.notFound?w.ChatNotFound:v.Chat,p=n&&s?m:b.ChatSkeleton;return f.default.createElement(y.ChatContext.Provider,{value:h},f.default.createElement(p,null))};var f=e("react"),g=e("@beyond-js/react-18-widgets/hooks"),v=e("./chat"),y=e("./context"),b=e("./chat/skeleton"),w=e("./not-found"),x=e("@aimpact/chat/shared/hooks"),C=e("beyond_context")}}),k.set("./views/input/context",{hash:3186216388,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useInputContext=t.InputContext=void 0;var a=e("react");const n=t.InputContext=a.default.createContext(null);t.useInputContext=()=>a.default.useContext(n)}}),k.set("./views/input/index",{hash:1111216055,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatInput=void 0;var g=e("react"),v=e("pragmate-ui/form"),y=e("pragmate-ui/components"),b=e("@aimpact/chat/config"),w=e("@beyond-js/react-18-widgets/hooks"),x=e("./context"),C=e("./recording"),E=e("./system/index"),_=e("./text-input");t.ChatInput=({store:t,isWaiting:e=!1})=>{const[a,n]=g.default.useState(!1),[r,s]=g.default.useState(!1),[o,i]=g.default.useState(!1),[c,l]=g.default.useState(""),u=t.audioManager["recorder"];(0,w.useBinder)([t],()=>i(t.waitingResponse));var d={disabled:!1},h=async()=>{l(""),s(!0),t.sendMessage(c)},m=c.length?h:async e=>{s(!0),e.preventDefault(),e.stopPropagation(),e=await u.stop(),t.sendMessage(e),n(!a),s(!1)};!["",void 0,null].includes(c.replaceAll("\n",""))&&c.trim().length||(d.disabled=!0);let p="input-container "+(o||e||r?"is-fetching":"");t.disabled&&(p+="is-disabled");var f=b.default.params.config.system;return g.default.createElement("div",{className:p},g.default.createElement(x.InputContext.Provider,{value:{store:t,onSubmit:m,recorder:u,setRecording:n,recording:a,disabled:t.disabled}},f&&g.default.createElement(E.SystemModal,{chat:t.chat}),g.default.createElement(v.Form,{onSubmit:m,className:"chat-input-form"},g.default.createElement(_.TextInput,{store:t,text:c,disabled:t.disabled,setFetching:s,fetching:r||a||o||e,setText:l,handleSend:h}),g.default.createElement("span",{className:"input__icon  input__icon--right"},c.length?g.default.createElement(y.Button,{icon:"send-arrow",onClick:h,disabled:d.disabled||t.waitingResponse}):g.default.createElement(C.RecordingButton,{store:t,disabled:a||t.waitingResponse})))))}}}),k.set("./views/input/player",{hash:964401253,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Player=void 0;var n=e("react"),r=e("pragmate-ui/icons"),s=e("./timer"),o=e("./context");t.Player=()=>{const{onSubmit:e,recorder:t,setRecording:a}=(0,o.useInputContext)();return n.default.createElement("div",{className:"recording-player__container"},n.default.createElement(r.IconButton,{className:"circle",icon:"delete",onClick:async e=>{e.preventDefault(),await t.stop(),a(!1)}}),n.default.createElement(s.Timer,{action:"start"}),n.default.createElement(r.IconButton,{icon:"send",className:"circle",variant:"primary",onClick:e}))}}}),k.set("./views/input/recording/index",{hash:536807308,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RecordingButton=void 0;var d=e("react"),h=e("pragmate-ui/components"),m=e("../player"),p=e("../../context"),f=e("../context"),g=e("./modal");t.RecordingButton=({store:{},disabled:e})=>{const{recorder:t,recording:a,setRecording:n}=(0,f.useInputContext)(),[r,s]=(0,d.useState)(!1),[o,i]=(0,d.useState)(!1),[c,,]=(0,d.useState)(globalThis?.localStorage.getItem("aimpact.recording.permission"));var{}=(0,p.useChatContext)();const l=async()=>{await t.record(),n(!a)},u=()=>{t.hasPermissions().then(l).catch(e=>{console.log("permisos no concedidos")})};return a?d.default.createElement(m.Player,null):d.default.createElement(d.default.Fragment,null,d.default.createElement(h.Button,{icon:"mic",fetching:r,onClick:async e=>{try{e.preventDefault(),s(!0),c&&"true"===c?u():i(!0)}catch(e){console.error(e)}finally{s(!1)}},disabled:e||r}),d.default.createElement(g.PermissionsModal,{show:o,onClose:e=>{s(!1),i(!1)},onConfirm:u}))}}}),k.set("./views/input/recording/modal",{hash:1234381782,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PermissionsModal=void 0;var s=e("react"),o=e("pragmate-ui/icons"),i=e("pragmate-ui/modal"),c=e("../../context");t.PermissionsModal=({show:e,onClose:t,onConfirm:a})=>{var n,r;return e?(n=(e=(0,c.useChatContext)().texts).permissions.title,r=e.permissions.description,s.default.createElement(s.default.Fragment,null,s.default.createElement(i.AlertModal,{open:!0,show:!0,onClose:t,centered:!0,onConfirm:a},s.default.createElement("div",{className:"permissions__modal-container"},s.default.createElement("div",{className:"title-intro__modal-container"},s.default.createElement("span",{className:"intro__modal-text p2"},e.permissions.intro),s.default.createElement("h3",null,n)),s.default.createElement(o.Icon,{className:"mic__modal-icon lg my-10",icon:"mic"}),s.default.createElement("p",{className:"description__modal-text"},r))))):null}}}),k.set("./views/input/system/form",{hash:42578936,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UIForm=void 0;var d=e("react"),h=e("pragmate-ui/form"),m=e("pragmate-ui/components"),p=e("pragmate-ui/toast"),f=e("../../context");t.UIForm=({chat:t,closeModal:e})=>{const[a,n]=d.default.useState(t?.system),[r,s]=d.default.useState(!1),[o,i]=d.default.useState(!1),c=(0,f.useChatContext)().texts;function l(){s(!1),i(!1),n(t?.system),e()}var u=async e=>{e.preventDefault(),i(!0),(e=await t.publish({system:a})).status||s(e.error),p.toast.success(c.system.success),l()};return d.default.createElement(h.Form,{onSubmit:u,className:"system-form"},r&&d.default.createElement("div",{className:"error error-container"},r),d.default.createElement(h.Textarea,{rows:5,value:a,placeholder:"Agrega tu contenido...",onChange:function(e){e=e.target.value,n(e)}}),d.default.createElement("footer",null,d.default.createElement(m.Button,{icon:"close-circle",label:"Cancel",variant:"link outline",onClick:l}),d.default.createElement(m.Button,{type:"submit",icon:"save",onClick:u,label:"Submit",loading:o})))}}}),k.set("./views/input/system/index",{hash:4053747498,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SystemModal=void 0;var r=e("react"),s=e("./form"),o=e("pragmate-ui/components"),i=e("pragmate-ui/icons"),c=e("../../context");t.SystemModal=({chat:e})=>{const t=r.default.useRef(null);var a=(0,c.useChatContext)().texts["assistant"],n=()=>t.current.close();return r.default.createElement("div",{className:"input__icon  input__icon--left"},r.default.createElement(o.Button,{icon:"code",onClick:()=>t.current.showModal(),mode:"primary"}),r.default.createElement("dialog",{ref:t,onClose:n},r.default.createElement(i.IconButton,{icon:"close",className:"close",onClick:n}),r.default.createElement("header",null,r.default.createElement("h1",null,a.assistant)),r.default.createElement("div",null,r.default.createElement("p",null,a.message)),r.default.createElement(s.UIForm,{chat:e,closeModal:n})))}}}),k.set("./views/input/text-input",{hash:1981085893,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.TextInput=function({setFetching:e,store:t,setText:a,handleSend:n,fetching:r,text:s,disabled:o}){const i=l.default.useRef(null),c=(l.default.useEffect(()=>{var e=i.current;e.style.height="auto",e.style.height=1==s.length?"auto":e.scrollHeight+"px",["undefined",void 0].includes(s.replaceAll("\n",""))},[s]),(0,u.useBinder)([t],()=>{globalThis.setTimeout(()=>i.current.focus(),300),e(!1)},"chat.available"),{disabled:r||o});return l.default.createElement("textarea",{...c,rows:1,value:s,onChange:e=>{e=e.target.value,["undefined",void 0].includes(e.replaceAll("\n"))||a(e)},onKeyDown:e=>{var t;"Enter"!==e.key||(t=e.target.value.replaceAll("\n"),["",void 0,null].includes(t))||(e.shiftKey?a(e=>e+"\n"):n())},autoFocus:!0,className:"input__textarea",ref:i})};var l=e("react"),u=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./views/input/timer/index",{hash:1478628646,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=function({action:e}){var t=["restart","start"].includes(e),e="restart"===e,[,t,e,,]=(0,n.useTimer)(t,e),e=e.toString().padStart(2,"0"),t=t.toString().padStart(2,"0");return a.default.createElement("div",{className:"timer-message__container"},a.default.createElement("span",null,""+t,":"),a.default.createElement("span",null,""+e))};var a=e("react"),n=e("./use-timer")}}),k.set("./views/input/timer/use-timer",{hash:1623060353,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useTimer=function(t,e){const[a,n]=c(0),r=(l(()=>{let e;return t&&(e=setInterval(()=>{n(e=>e+1)},10)),()=>{clearInterval(e)}},[t]),l(()=>{e&&n(0)},[e]),a%100),s=Math.floor(a/100%60),o=Math.floor(a/6e3%60),i=Math.floor(a/36e4);return[i,o,s,r]};const{useState:c,useEffect:l}=e("react").default}}),k.set("./views/not-found",{hash:4064363242,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatNotFound=function(){return o.AppWrapper.ready?a.default.createElement("div",{className:"not__found_chat "},a.default.createElement("img",{src:"/assets/not-found.png",alt:"Chat not found"}),a.default.createElement("span",{className:"not__found__details"},a.default.createElement(s.Icon,{icon:c.ICONS["aip-chat-logo"],className:"not-found__ailogo"}),a.default.createElement("h2",null,"Chat not found"),a.default.createElement("p",null,a.default.createElement("strong",null,"We couldn't find a chat associated with that ID.")," ",a.default.createElement("br",null),"Please enter URL correctly or create a new chat."),a.default.createElement(r.Button,{icon:"chat",onClick:function(){n.UIManager.modalOpened=!0},label:"Start New Chat"}))):a.default.createElement(i.PreloadScreen,null)};var a=e("react"),n=e("@aimpact/chat/ui/manager"),r=e("pragmate-ui/components"),s=e("pragmate-ui/icons"),o=e("@aimpact/chat/wrapper"),i=e("@aimpact/chat/shared/components"),c=e("@aimpact/chat/shared/icons")}}),P.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./store/audio",from:"AudioManager",name:"AudioManager"},{im:"./views/chat/index",from:"Chat",name:"Chat"},{im:"./views/input/index",from:"ChatInput",name:"ChatInput"},{im:"./views/input/recording/index",from:"RecordingButton",name:"RecordingButton"},{im:"./views/input/recording/modal",from:"PermissionsModal",name:"PermissionsModal"},{im:"./views/input/system/index",from:"SystemModal",name:"SystemModal"}],P.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"AudioManager"!==t||n("AudioManager",e?e("./store/audio").AudioManager:a),!e&&"Chat"!==t||n("Chat",e?e("./views/chat/index").Chat:a),!e&&"ChatInput"!==t||n("ChatInput",e?e("./views/input/index").ChatInput:a),!e&&"RecordingButton"!==t||n("RecordingButton",e?e("./views/input/recording/index").RecordingButton:a),!e&&"PermissionsModal"!==t||n("PermissionsModal",e?e("./views/input/recording/modal").PermissionsModal:a),!e&&"SystemModal"!==t||n("SystemModal",e?e("./views/input/system/index").SystemModal:a)},n("__beyond_pkg",P),n("hmr",new function(){this.on=(e,t)=>P.hmr.on(e,t),this.off=(e,t)=>P.hmr.off(e,t)}),P.initialise(k)}}});