System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-app@0.1.0-test.11/main-layout.widget","@aimpact/chat@1.0.2/chat-control.widget","@beyond-js/reactive@1.2.0/model","@aimpact/media-manager@0.0.1-beta.1/recorder","@aimpact/chat-sdk@1.0.1/voice","@aimpact/ailearn-sdk@1.0.0/tracking","react@18.2.0","pragmate-ui@1.0.0-beta.1/components","pragmate-ui@1.0.0-beta.1/alert","@aimpact/chat-sdk@1.0.1/widgets/markdown","@aimpact/chat-sdk@1.0.1/session","@aimpact/ailearn-app@0.1.0-test.11/components/ui","@aimpact/chat@1.0.2/shared/components","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@1.0.0-beta.1/icons","pragmate-ui@1.0.0-beta.1/modal"],function(r,e){var t,a,n,o,s,i,l,c,d,u,m,p,f,g,v,h,y,w,k,E,_,b,x,C;return r({Controller:void 0,AudioPlayer:void 0,View:void 0,RecordingButton:void 0,PermissionsErrorModal:void 0,RecordingControl:void 0,PermissionsModal:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){o=e},function(e){s=e},function(e){i=e},function(e){l=e},function(e){c=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){v=e},function(e){h=e},function(e){y=e},function(e){w=e},function(e){k=e},function(e){E=e},function(e){_=e},function(e){b=e}],execute:function(){C=a.Bundle,(x=new C({module:{vspecifier:"@aimpact/ailearn-app@0.1.0-test.11/assignments/spoken",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",o],["@aimpact/ailearn-sdk/core",s],["@beyond-js/kernel/texts",i],["@aimpact/ailearn-app/main-layout.widget",l],["@aimpact/chat/chat-control.widget",c],["@beyond-js/reactive/model",d],["@aimpact/media-manager/recorder",u],["@aimpact/chat-sdk/voice",m],["@aimpact/ailearn-sdk/tracking",p],["react",f],["pragmate-ui/components",g],["pragmate-ui/alert",v],["@aimpact/chat-sdk/widgets/markdown",h],["@aimpact/chat-sdk/session",y],["@aimpact/ailearn-app/components/ui",w],["@aimpact/chat/shared/components",k],["@beyond-js/react-18-widgets/hooks",E],["pragmate-ui/icons",_],["pragmate-ui/modal",b]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-assignments-spoken",vspecifier:"@aimpact/ailearn-app@0.1.0-test.11/assignments/spoken.widget",is:"page",route:"/assignments/${assignmentId}/spoken/${id}",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.0-test.11/assignments/spoken.widget"),(C=new Map).set("./controller",{hash:3286864425,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),r=e("./store"),n=e("./views");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager,this.#store}get Widget(){return n.View}show(){this.#store.load(this.uri.vars.get("assignmentId"),this.uri.vars.get("id"))}hide(){}}t.Controller=o}}),C.set("./store",{hash:724565050,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/kernel/texts"),r=e("beyond_context"),n=e("@aimpact/ailearn-app/main-layout.widget"),o=e("@aimpact/chat/chat-control.widget"),s=e("@beyond-js/reactive/model"),i=e("@aimpact/media-manager/recorder"),l=e("@aimpact/chat-sdk/voice"),c=e("@aimpact/ailearn-sdk/tracking");class d extends s.ReactiveModel{#model;get model(){return this.#model}#introduction;get introduction(){return this.#introduction}#activityId;#assignmentId;get assignmentId(){return this.#assignmentId}#items;get items(){return this.#items}#audioManager=new o.AudioManager(this);get audioManager(){return this.#audioManager}#voice;get voice(){return this.#voice}#recorder;get recorder(){return this.#recorder}#assessment;get assessment(){return this.#assessment}#paramsUri;get paramsUri(){return this.#paramsUri}#texts=new a.CurrentTexts(r.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}#found;get found(){return this.#found}get canConsumeCredits(){return this.#found}#tracking;get tracking(){return this.#tracking}constructor(){super(),this.#voice=new l.Voice,this.assignmentId||(this.#assignmentId=this.sessionId),this.#texts.on("change",this.triggerEvent),this.#recorder=new i.Recorder}async load(e,t){try{var a,r;n.LayoutBroker.overlay=!0,n.LayoutBroker.canConsumeCredits=!0,e===this.#assignmentId&&this.#activityId===t?n.LayoutBroker.addModel(this.#tracking):(this.#assignmentId=e,this.#activityId=t,a=c.Tracking.get({assignmentId:e}),r=await(this.#tracking=a).activities.load({id:t}),this.#model=r,n.LayoutBroker.addModel(this.#tracking),super.ready=!0,this.#found=!0,this.triggerEvent())}catch(e){console.trace(e),super.ready=!0,this.#found=!1,n.LayoutBroker.canConsumeCredits=!1}}sendSpoken=async e=>{try{var t={audio:e,assignmentId:this.#assignmentId,activityId:this.#activityId};return this.model.publishSpoken({params:t,type:"spoken"})}catch(e){super.ready=!0,this.#found=!1}}}t.StoreManager=d}}),C.set("./views/analysis/feedback",{hash:1890784375,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Feedback=function(){let a=(0,n.useSpokenContext)().store,e=Object.keys(a.model.data);return r.default.createElement(r.default.Fragment,null,e.map((e,t)=>(e=a.model.data[e],r.default.createElement("article",{key:e.name.replace(" ",""),className:"assessment__analysis-item"},r.default.createElement("section",{className:"item__icon__container"},e.icon),r.default.createElement("section",null,r.default.createElement("header",null,r.default.createElement("h3",null,e.name)),r.default.createElement("p",null,e.feedback))))))};var r=e("react"),n=e("../context")}}),C.set("./views/analysis/index",{hash:2639330932,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Analysis=function(){let{texts:{assessments:e},store:t,setView:a}=(0,f.useSpokenContext)(),[r,n]=d.default.useState("feedback"),o={feedback:p.Feedback},s=o[r],i=g.sessionWrapper.user.displayName,l=t.model.resources.specs.task?.replace("%1",i);return d.default.createElement("div",{className:"assessment-analysis__container"},d.default.createElement("header",null,d.default.createElement("div",{className:"flex-container space-between"},d.default.createElement("section",null,d.default.createElement(c.ButtonGroup,{selected:0,variant:"primary"},d.default.createElement(c.Button,{"data-view":"feedback",onClick:e=>{n(e.currentTarget.dataset.view)}},e.analysis),d.default.createElement(c.Button,{onClick:e=>{e.preventDefault(),a("recording")}},e.redo))))),d.default.createElement(u.Alert,{type:"info",className:"activity__info"},d.default.createElement(m.Markdown,{content:l})),d.default.createElement(s,null))};var c=e("pragmate-ui/components"),d=e("react"),u=e("pragmate-ui/alert"),m=e("@aimpact/chat-sdk/widgets/markdown"),p=e("./feedback"),f=e("../context"),g=e("@aimpact/chat-sdk/session")}}),C.set("./views/audio-player",{hash:1190578037,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AudioPlayer=function({src:e}){if(!e)return console.warn("not audio to process"),null;e=URL.createObjectURL(e);let a=r.default.useRef(null);return r.default.useEffect(()=>{let e=a.current,t=()=>{e.duration===1/0&&(e.currentTime=1e101,e.ontimeupdate=()=>{e.ontimeupdate=null,e.currentTime=0})};return e.addEventListener("loadedmetadata",onloadeddata),()=>e.removeEventListener("loadedmetadata",t)},[e]),e?r.default.createElement("div",{className:"audio-player"},r.default.createElement("audio",{controls:!0,preload:"metadata"},r.default.createElement("source",{src:e,type:"audio/mp3",ref:a}),"Your browser does not support the audio element.")):null};var r=e("react")}}),C.set("./views/context",{hash:3296568220,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useSpokenContext=t.SpokenContext=void 0;var a=e("react");let r=t.SpokenContext=a.default.createContext({});t.useSpokenContext=()=>a.default.useContext(r)}}),C.set("./views/index",{hash:1693468854,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){let[t,a]=(0,p.useState)(e.ready),[r]=(0,p.useState)(e.items),[n,o]=p.default.useState(e.model?.data?"analysis":"recording"),[s,i]=p.default.useState(!1),[l,c]=p.default.useState(!1),d=e.texts,u,m;return(0,w.useBinder)([e],()=>{a(e.ready),o(e.model?.data?"analysis":"recording")}),t&&!e.found?p.default.createElement("app-missing",null):t?(u={store:e,recorder:e.recorder,recording:s,setRecording:i,texts:d,fetching:e.fetching,items:r,audio:e.recorder.audio,setView:o,sending:l,setSending:c,onSubmit:e=>{e.preventDefault()}},m="analysis"===n?v.Analysis:h.RecordingControl,p.default.createElement("div",null,p.default.createElement(y.SpokenContext.Provider,{value:u},p.default.createElement(f.ActivityHeader,{title:e.model.title,icon:"spoken",type:e.model.type}),p.default.createElement(f.PageContainer,null,p.default.createElement(m,null))))):p.default.createElement(g.PreloadScreen,null)};var p=e("react"),f=e("@aimpact/ailearn-app/components/ui"),g=e("@aimpact/chat/shared/components"),v=e("./analysis"),h=e("./recording"),y=e("./context"),w=e("@beyond-js/react-18-widgets/hooks")}}),C.set("./views/recording/button",{hash:2375701035,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RecordingButton=void 0;var w=e("react"),k=e("pragmate-ui/components"),E=e("./modal"),_=e("../context"),b=e("@aimpact/ailearn-app/main-layout.widget"),x=e("./error-modal");t.RecordingButton=({disabled:e,action:t,setAction:a})=>{let{texts:r,recorder:n,recording:o,setRecording:s,audio:i}=(0,_.useSpokenContext)(),[l,c]=(0,w.useState)(!1),[d,u]=(0,w.useState)(!1),[m,p]=(0,w.useState)(!1);var f=o?"stop":"mic",g=!o&&i,g=o?"stop":g?"redo":"record";let[v,h]=(0,w.useState)(globalThis?.localStorage.getItem("aimpact.recording.permission")),y=async e=>{try{c(!0),v&&"true"===v?(async()=>{try{await n.record(),s(!o),a("start")}catch(e){p(!0)}})():u(!0)}catch(e){console.error(e),p(!0)}finally{c(!1)}};return w.default.createElement(w.default.Fragment,null,w.default.createElement(k.Button,{variant:"primary",icon:f,fetching:l,onClick:"start"===t?async e=>{await n.stop(),s(!1),a("reset")}:e=>{e.preventDefault(),b.LayoutBroker.ensureCredits(y)},disabled:e||l},r[g]),w.default.createElement(E.PermissionsModal,{show:d,onClose:e=>{c(!1),u(!1)},onConfirm:()=>{n.hasPermissions().then(()=>{globalThis?.localStorage.setItem("aimpact.recording.permission","true"),h("true")}).catch(e=>{console.log("permisos no concedidos"),p(!0)})}}),w.default.createElement(x.PermissionsErrorModal,{show:m,onClose:()=>p(!1)}))}}}),C.set("./views/recording/error-modal",{hash:1218241359,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PermissionsErrorModal=void 0;var r=e("react"),n=e("pragmate-ui/icons"),o=e("pragmate-ui/modal"),s=e("../context");t.PermissionsErrorModal=({show:e,onClose:t})=>{var a;return e?(e=(0,s.useSpokenContext)().texts,{title:e,description:a}=e.permissions.error,r.default.createElement(r.default.Fragment,null,r.default.createElement(o.AlertModal,{className:"modal--centered",open:!0,show:!0,onClose:t,centered:!0},r.default.createElement("div",{className:"permissions__modal-container"},r.default.createElement("div",{className:"title-intro__modal-container"},r.default.createElement("h3",null,e)),r.default.createElement(n.Icon,{className:"mic__modal-icon lg my-10",icon:"mic"}),r.default.createElement("p",{className:"description__modal-text"},a))))):null}}}),C.set("./views/recording/index",{hash:153949891,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RecordingControl=void 0;var d=e("@aimpact/chat-sdk/session"),u=e("react"),m=e("pragmate-ui/alert"),p=e("@aimpact/chat-sdk/widgets/markdown"),f=e("../timer"),g=e("../context"),v=e("./tabs"),h=e("./result"),y=e("./button");t.RecordingControl=({disabled:e=!1})=>{var{texts:t,recording:a,sending:r,audio:n,store:o}=(0,g.useSpokenContext)(),s=u.default.useRef(null),a=!a&&n,n="recording-player__container"+(r?" is-sending":""),[i,l]=u.default.useState(""),c=d.sessionWrapper.user.displayName,c=o.model.resources.specs.task?.replace("%1",c),e={disabled:e,action:i,setAction:l};return u.default.createElement(u.default.Fragment,null,u.default.createElement(v.ButtonTabs,{available:!!o.model.data}),u.default.createElement(m.Alert,{type:"info",className:"activity__info"},u.default.createElement(p.Markdown,{content:c})),u.default.createElement("div",{className:"recording__container flex-container flex-center"},u.default.createElement("section",{ref:s,className:n},u.default.createElement("div",{className:"recording-player__content"},u.default.createElement(f.Timer,{action:i}),u.default.createElement(y.RecordingButton,{...e}),u.default.createElement(h.RecordingResult,{show:a})),r&&u.default.createElement("div",{className:"sending__data"},u.default.createElement("h3",{className:"sending-message"},t.assessments.processMessages[0])))))}}}),C.set("./views/recording/modal",{hash:957625054,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PermissionsModal=void 0;var o=e("react"),s=e("pragmate-ui/icons"),i=e("pragmate-ui/modal"),l=e("../context");t.PermissionsModal=({show:e,onClose:t,onConfirm:a})=>{var r,n;return e?(r=(e=(0,l.useSpokenContext)().texts).permissions.title,n=e.permissions.description,o.default.createElement(o.default.Fragment,null,o.default.createElement(i.AlertModal,{className:"modal--centered",open:!0,show:!0,onClose:t,centered:!0,onConfirm:a},o.default.createElement("div",{className:"permissions__modal-container"},o.default.createElement("div",{className:"title-intro__modal-container"},o.default.createElement("span",{className:"intro__modal-text p2"},e.permissions.intro),o.default.createElement("h3",null,r)),o.default.createElement(s.Icon,{className:"mic__modal-icon lg my-10",icon:"mic"}),o.default.createElement("p",{className:"description__modal-text"},n))))):null}}}),C.set("./views/recording/result",{hash:3648048102,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RecordingResult=function({show:e}){let{texts:t,audio:a,setView:r,store:n,setSending:o,sending:s}=(0,d.useSpokenContext)();if(e)return e=e=>{e.preventDefault(),o(!0),n.sendSpoken(a).then(e=>{r("analysis"),o(!1)}),setTimeout(()=>{globalThis.setTimeout(()=>{s&&o(!1)},45e3)},100)},i.default.createElement("div",{className:"recording__result-container"},i.default.createElement(l.AudioPlayer,{src:n.recorder.audio}),i.default.createElement(c.Button,{icon:"send",onClick:e,variant:"primary"},t.send))};var i=e("react"),l=e("../audio-player"),c=e("pragmate-ui/components"),d=e("../context")}}),C.set("./views/recording/tabs",{hash:2166838320,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonTabs=function({available:e}){let{texts:t,setView:a}=(0,o.useSpokenContext)();return e?r.default.createElement("div",{className:"flex-container space-between"},r.default.createElement("section",null,r.default.createElement(n.ButtonGroup,{selected:1,variant:"primary"},r.default.createElement(n.Button,{"data-view":"feedback",onClick:e=>a("analysis")},t.assessments.analysis),r.default.createElement(n.Button,null,t.assessments.redo)))):null};var r=e("react"),n=e("pragmate-ui/components"),o=e("../context")}}),C.set("./views/recording/use-recording",{hash:2475814657,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useRecording=function(){var{}=(0,r.useSpokenContext)(),[e,t]=a.default.useState(!1);return{showModal:e,setShowModal:t}};var a=e("react"),r=e("../context")}}),C.set("./views/timer/index",{hash:3970133054,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=function({action:e}){var t=["restart","start"].includes(e),a=["restart","reset"].includes(e),[,t,a,,]=(0,n.useTimer)(t,a,"reset"===e),e=a.toString().padStart(2,"0"),a=t.toString().padStart(2,"0");return r.default.createElement("div",{className:"timer__container"},r.default.createElement("span",null,""+a),r.default.createElement("span",{className:"timer__separator"},":"),r.default.createElement("span",null,""+e))};var r=e("react"),n=e("./use-timer")}}),C.set("./views/timer/use-timer",{hash:1583638382,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useTimer=function(t,e,a=!0){let[r,n]=c(0),o=(d(()=>{let e;return a&&n(0),t&&(e=setInterval(()=>{n(e=>e+1)},10)),()=>{clearInterval(e)}},[t]),d(()=>{e&&n(0)},[e]),r%100),s=Math.floor(r/100%60),i=Math.floor(r/6e3%60),l=Math.floor(r/36e4);return[l,i,s,o]};let a=e("react"),{useState:c,useEffect:d}=a.default}}),x.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/audio-player",from:"AudioPlayer",name:"AudioPlayer"},{im:"./views/index",from:"View",name:"View"},{im:"./views/recording/button",from:"RecordingButton",name:"RecordingButton"},{im:"./views/recording/error-modal",from:"PermissionsErrorModal",name:"PermissionsErrorModal"},{im:"./views/recording/index",from:"RecordingControl",name:"RecordingControl"},{im:"./views/recording/modal",from:"PermissionsModal",name:"PermissionsModal"}],x.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:a),!e&&"AudioPlayer"!==t||r("AudioPlayer",e?e("./views/audio-player").AudioPlayer:a),!e&&"View"!==t||r("View",e?e("./views/index").View:a),!e&&"RecordingButton"!==t||r("RecordingButton",e?e("./views/recording/button").RecordingButton:a),!e&&"PermissionsErrorModal"!==t||r("PermissionsErrorModal",e?e("./views/recording/error-modal").PermissionsErrorModal:a),!e&&"RecordingControl"!==t||r("RecordingControl",e?e("./views/recording/index").RecordingControl:a),!e&&"PermissionsModal"!==t||r("PermissionsModal",e?e("./views/recording/modal").PermissionsModal:a)},r("__beyond_pkg",x),r("hmr",new function(){this.on=(e,t)=>x.hmr.on(e,t),this.off=(e,t)=>x.hmr.off(e,t)}),x.initialise(C)}}});