System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","framer-motion@10.18.0","@aimpact/ailearn-app@0.1.7/config","pragmate-ui@1.0.0-beta.6/icons","pragmate-ui@1.0.0-beta.6/form","@aimpact/ailearn-app@0.1.7/components/icons","pragmate-ui@1.0.0-beta.6/components","pragmate-ui@1.0.0-beta.6/image","pragmate-ui@1.0.0-beta.6/toast","pragmate-ui@1.0.0-beta.6/modal","pragmate-ui@1.0.0-beta.6/base","pragmate-ui@1.0.0-beta.6/empty","pragmate-ui@1.0.0-beta.6/alert","js-confetti@0.12.0","driver.js@1.3.1","@beyond-js/kernel@0.1.9/texts","pragmate-ui@1.0.0-beta.6/spinner"],function(r,e){"use strict";var t,a,n,o,i,c,s,l,d,u,m,f,p,v,h,g,y,C,b,E,_;return r({AnimatedContainer:void 0,ActivityAudio:void 0,ChatPreload:void 0,ActivityHeader:void 0,AIButton:void 0,AIIconButton:void 0,AudioPlayer:void 0,Battery:void 0,CardContent:void 0,CardFooter:void 0,CardImage:void 0,Card:void 0,ConfirmAction:void 0,ContentEditable:void 0,CoinsModal:void 0,OwnerImage:void 0,RequestCreditsForm:void 0,EmptyCard:void 0,EntityImage:void 0,ErrorRenderer:void 0,HeaderCounter:void 0,HeaderTitle:void 0,HeaderCard:void 0,useConfetti:void 0,useDriverTour:void 0,useTextsCallback:void 0,AppLoader:void 0,PreloadScreen:void 0,PageLoader:void 0,PageContainer:void 0,ProcessContainer:void 0,PageTitle:void 0,PageSubtitle:void 0,ProcessButton:void 0,ProcessIconButton:void 0,RadioButton:void 0,RadioGroup:void 0,RotatingMessage:void 0,SkeletonText:void 0,SubDivider:void 0,TourStep:void 0,UserData:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){o=e},function(e){i=e},function(e){c=e},function(e){s=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){f=e},function(e){p=e},function(e){v=e},function(e){h=e},function(e){g=e},function(e){y=e},function(e){C=e},function(e){b=e}],execute:function(){_=t.Bundle,(E=new _({module:{vspecifier:"@aimpact/ailearn-app@0.1.7/components/ui"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",a],["react",n],["framer-motion",o],["@aimpact/ailearn-app/config",i],["pragmate-ui/icons",c],["pragmate-ui/form",s],["@aimpact/ailearn-app/components/icons",l],["pragmate-ui/components",d],["pragmate-ui/image",u],["pragmate-ui/toast",m],["pragmate-ui/modal",f],["pragmate-ui/base",p],["pragmate-ui/empty",v],["pragmate-ui/alert",h],["js-confetti",g],["driver.js",y],["@beyond-js/kernel/texts",C],["pragmate-ui/spinner",b]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.7/components/ui"),(_=new Map).set("./activities/animation-container",{hash:584485339,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedContainer=function({className:e,children:t,as:a="span"}){return a=(0,n.motion)(a),r.default.createElement(a,{layout:!0,className:e,initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{transition:{duration:.3,width:0},opacity:0}},t)};var r=e("react"),n=e("framer-motion")}}),_.set("./activities/audio",{hash:2399738441,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityAudio=function({src:e}){return e?a.default.createElement("div",{className:"audio-player"},a.default.createElement("audio",{controls:!0,preload:"metadata"},a.default.createElement("source",{src:e}),"Your browser does not support the audio element.")):null};var a=e("react")}}),_.set("./activities/chat-preload",{hash:2289740302,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatPreload=function({onClick:e}){return a.default.createElement("div",{className:"chat__preload-container"},a.default.createElement(r.EmptyCard,{className:"empty-section__container"}),a.default.createElement("div",{className:"input-container ",onClick:e},a.default.createElement("form",{className:"chat-input-form"},a.default.createElement(o.Textarea,{disabled:!0,className:"input__textarea"}),a.default.createElement("span",{className:"input__icon  input__icon--right"},a.default.createElement(n.IconButton,{icon:"send",disabled:!0})))))};var a=e("react"),r=e("../empty"),n=e("pragmate-ui/icons"),o=e("pragmate-ui/form")}}),_.set("./activities/header",{hash:823467044,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityHeader=function({type:e,title:t,icon:a,children:r}){return n.default.createElement("div",{className:"header-container"},n.default.createElement("header",{className:e="activity-header activity-header--"+e},n.default.createElement(o.AppIcon,{icon:a}),n.default.createElement("h1",null,t),r))};var n=e("react"),o=e("@aimpact/ailearn-app/components/icons")}}),_.set("./ai-button",{hash:3147089097,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AIButton=function({children:e,...t}){return r.default.createElement(a.Button,{...t,icon:n.ICONS.aiStars},e)},t.AIIconButton=function({children:e,onClick:t,...a}){return r.default.createElement(o.IconButton,{...a,icon:n.ICONS.aiStars},e)};var r=e("react"),n=e("@aimpact/ailearn-app/components/icons"),a=e("pragmate-ui/components"),o=e("pragmate-ui/icons")}}),_.set("./animation-container",{hash:584318629,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedContainer=function({className:e,children:t,as:a="span",...r}){return a=(0,o.motion)(a),r={animate:{opacity:1,transition:{duration:.3}},initial:{opacity:0},exit:{transition:{duration:.3,width:0},opacity:0},...r},n.default.createElement(a,{layout:!0,className:e,...r},t)};var n=e("react"),o=e("framer-motion")}}),_.set("./audio-player",{hash:1039808834,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AudioPlayer=function({src:e,url:t}){if(!e&&!t)return console.warn("not audio to process"),null;e=t??URL.createObjectURL(e);const a=r.default.useRef(null);return r.default.useEffect(()=>{const e=a.current;e.addEventListener("loadedmetadata",()=>{e.duration===1/0&&(e.currentTime=1e101,e.ontimeupdate=()=>{e.ontimeupdate=null,e.currentTime=0})})},[e]),e?r.default.createElement("div",{className:"audio-player"},r.default.createElement("audio",{controls:!0,preload:"metadata"},r.default.createElement("source",{src:e,type:"audio/mpeg",ref:a}),"Your browser does not support the audio element.")):null};var r=e("react")}}),_.set("./battery",{hash:1193312247,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Battery=function({percent:e=20}){const t=r.default.useRef(null),a=(r.default.useEffect(()=>{t.current.style.width=e+"%"},[e]),"percentage "+(e<20?"low":e<60?"medium":"high"));return r.default.createElement("div",{className:"battery-component"},r.default.createElement("div",{className:"level"},r.default.createElement("div",{ref:t,className:a})))};var r=e("react")}}),_.set("./card/content",{hash:822507004,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CardContent=function({children:e,className:t,option:a="row",simple:r}){return n.default.createElement("div",{className:a=`card__content display-${a} ${t&&" "+t} `+(r&&" is-simple")},e)};var n=e("react")}}),_.set("./card/footer",{hash:1147762825,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CardFooter=function({children:e,className:t,simple:a}){return r.default.createElement("footer",{className:t=`card__footer ${t&&" "+t} `+(a&&" is-simple")},e)};var r=e("react")}}),_.set("./card/image",{hash:3826144859,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CardImage=function({src:e,className:t,alt:a,children:r}){return o.default.createElement(n.Image,{src:e,alt:a,className:t="card__top "+(t?" "+t:"")},r)};var n=e("pragmate-ui/image"),o=e("react")}}),_.set("./card/index",{hash:1698619199,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Card=function({link:e,data:t,children:a,disabled:r,simple:n,className:o,type:i}){var c=!r&&e?l.Link:"span",e=r||[void 0,null,""].includes(e)?{}:{href:e,className:"unstyled"};let s="card "+o;return r&&(s+=" is-disabled"),n&&(s+=" is-simple"),o=()=>{globalThis?.sessionStorage.setItem("navigation.view","true")},d.default.createElement(c,{...e,onClick:o},d.default.createElement("div",{className:s},t&&d.default.createElement(u.EntityImage,{className:"card__top",src:t.picture,alt:t.title,type:i}),a))};var l=e("pragmate-ui/components"),d=e("react"),u=e("../entity-image")}}),_.set("./confirm-action",{hash:3756593877,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ConfirmAction=function({textPopUp:e="",icon:t="delete",className:a="circle"}){const[r,n]=o.default.useState(!1);return o.default.createElement(o.default.Fragment,null,o.default.createElement(i.IconButton,{title:e,icon:t,onClick:function(){n(!r)},className:a}),r&&o.default.createElement(c.ConfirmModal,{show:!0,className:"beauty-modal"}))};var o=e("react"),i=e("pragmate-ui/icons"),c=(e("pragmate-ui/toast"),e("pragmate-ui/modal"))}}),_.set("./content-editable/index",{hash:2281896928,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ContentEditable=void 0;var v=e("react"),h=e("pragmate-ui/icons"),g=e("./use-container");t.ContentEditable=({onSave:a,selector:e="div",as:t="div",className:r,content:n,placeholder:o,lineBreak:i=!0,editable:c=!0,name:s})=>{t=t||e;const[l,d]=(0,v.useState)(!1),{ref:u,value:m}=(0,g.useClickContainer)(n,o,l);if(!c)return v.default.createElement(t,{ref:u},m);e="pui-content-editable"+(r?" "+r:""),o=l?"save":"edit",c=l?"pui-editable-selector":"",r={onClick:l?void 0:()=>{d(!l),l||setTimeout(()=>{var e,t,a=u.current;a&&((e=document.createRange()).selectNodeContents(a),e.collapse(!1),(t=globalThis.getSelection())&&(t.removeAllRanges(),t.addRange(e)),a.focus())},0)}};const[f,p]=v.default.useState(n);return v.default.createElement("div",{className:e,...r,onBlur:async e=>{e.stopPropagation();var t,e=e.currentTarget.textContent.replace(/[\n\t\r\f\v]/g,"");d(!1),e!==f&&(t={target:t={name:s,value:e},currentTarget:t},p(e),await a(t))}},v.default.createElement(t,{ref:u,className:c,contentEditable:l,suppressContentEditableWarning:!0,onPaste:l?e=>{e.preventDefault(),e=e.clipboardData.getData("text/plain"),document.execCommand("insertText",!1,e)}:void 0,onKeyDown:l?e=>{i&&"Enter"===e.key&&e.preventDefault()}:void 0},m),v.default.createElement("div",{className:"pui-content-editable__actions"},v.default.createElement(h.Icon,{icon:o})))}}}),_.set("./content-editable/types",{hash:250591186,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),_.set("./content-editable/use-container",{hash:1642257852,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useClickContainer=function(e,t,a=!1){var r=c.default.useRef(null),[n]=c.default.useState(!1),[o,i]=c.default.useState({edited:!1,content:""}),o=o?.edited?o.content:e;return{ref:r,isOutSide:n,value:e=a?o||"":""===o||void 0===o?t:o||t||"",setValue:i}};var c=e("react")}}),_.set("./credits/ai-button",{hash:2003207470,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AIButton=function({children:e,onClick:t,ensure:a,...r}={ensure:!0}){return n.default.createElement(i.Button,{...r,icon:o.ICONS.aiStars,onClick:t},e)},t.AIIconButton=function({children:e,onClick:t,ensure:a,...r}={ensure:!0}){return n.default.createElement(c.IconButton,{...r,icon:o.ICONS.aiStars,onClick:t},e)};var n=e("react"),o=e("@aimpact/ailearn-app/components/icons"),i=e("pragmate-ui/components"),c=e("pragmate-ui/icons")}}),_.set("./credits/animations",{hash:3779295974,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.animations=void 0,t.animations={slideDown:{initial:{y:"-50%",opacity:0},animate:{y:0,opacity:1,transition:{duration:.3}},exit:{y:"50%",opacity:0,transition:{duration:.3}}},default:{initial:{opacity:0},animate:{y:0,opacity:1,transition:{duration:.3}},exit:{y:"50%",opacity:0,transition:{duration:.3}}},fadeInUpfadeOutLeft:{initial:{y:"-90%",opacity:0},animate:{y:0,opacity:1,transition:{duration:.3}},exit:{x:"50%",opacity:0,transition:{duration:.3}}}}}}),_.set("./credits/coins-modal",{hash:3482662785,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoinsModal=function({owner:e,globalTexts:t,show:a,onClose:r,onConsume:n,type:o="generative"}){return a?i.default.createElement(c.Modal,{show:!0,className:"modal-sm modal-centered",onClose:r},i.default.createElement(s.RequestCreditsForm,{onSuccess:r,onClose:r,onCancel:r,onConsume:n,type:o,globalTexts:t,owner:e})):null};var i=e("react"),c=e("pragmate-ui/modal"),s=e("./request-credits")}}),_.set("./credits/image",{hash:315420214,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OwnerImage=function({owner:e}){return e?.photoUrl?a.default.createElement(r.Image,{src:e.photoUrl,className:"circle"}):a.default.createElement(n.AppIcon,{icon:"school",className:"pui-image"})};var a=e("react"),r=e("pragmate-ui/image"),n=e("@aimpact/ailearn-app/components/icons")}}),_.set("./credits/request-credits",{hash:107178297,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RequestCreditsForm=function({onClose:e,globalTexts:t,owner:a,onConsume:r,onCancel:n,type:o="generative",onSuccess:i}){const[c,s]=v.default.useState(!1),[l,d]=v.default.useState(),u=t.actions,m=t.requestCredits,f=t.errors,p=(n=n??e,m.detail[o]??m.detail.interactive);return v.default.createElement(y.motion.div,{..._.animations.default,className:"modal__form request__container text-center"},v.default.createElement("header",null,v.default.createElement("h3",null,m.title),v.default.createElement("span",null,m.subtitle)),v.default.createElement(h.ErrorRenderer,{error:l,variant:"warning"}),a&&v.default.createElement(v.default.Fragment,null,v.default.createElement("div",{className:"primary-container text-center"},v.default.createElement(E.OwnerImage,{owner:a}),v.default.createElement("div",{className:"owner-info"},v.default.createElement("span",null,a.name),v.default.createElement("span",null,m.ownerDescription)))),v.default.createElement("h6",null,m.action),v.default.createElement("section",{className:"actions__container"},v.default.createElement(C.Button,{variant:"primary",bordered:!0,onClick:n},u.cancel),v.default.createElement(g.AIButton,{variant:"primary",onClick:async()=>{try{s(!0);var e=await r();if(!e.status)throw 48===e.error.code&&i(),new Error(f.NO_CREDITS);i&&i()}catch(e){d(m.alerts.noCredits)}finally{s(!1)}}},u.continue)),v.default.createElement("div",{className:"mt-2 text-center"},v.default.createElement("span",{className:"small-text"},p)),v.default.createElement(b.ProcessContainer,{fetching:c,key:"processing"}))};var v=e("react"),h=e("../error-renderer"),g=e("../ai-button"),y=e("framer-motion"),C=e("pragmate-ui/components"),b=e("../page/process-container"),E=e("./image"),_=e("./animations")}}),_.set("./empty",{hash:941402273,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyCard=function({text:e,className:t,description:a,children:r}){return n.default.createElement(o.Empty,{className:t="empty-section__container"+(t?" "+t:"")},n.default.createElement("h3",null,e),n.default.createElement("p",{className:"p1"},a),r)};var n=e("react"),o=e("pragmate-ui/empty")}}),_.set("./entity-image",{hash:1498560856,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EntityImage=function({src:e,ratio:t,alt:a="",entity:r="activity",type:n,size:o="sm",preload:i,className:c}){let s=`entity-image ${c||""} `+r;return t&&(s+=" img--"+t),e&&""!==e||(e=`/assets/images/entities/${r}/${n?n+"/":""}700.jpg`),i?l.default.createElement("div",{className:s+" entity-image--preload"}):l.default.createElement(d.Image,{src:e+"?size="+o,alt:a,className:s})};var l=e("react"),d=e("pragmate-ui/image")}}),_.set("./error-renderer",{hash:3647494150,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorRenderer=function({error:e,variant:t="error"}){return e?a.default.createElement(r.Alert,{type:t},e):null};var a=e("react"),r=e("pragmate-ui/alert")}}),_.set("./header-card/header-counter",{hash:3049264674,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderCounter=function({list:e,className:t}){return t="header-counter__container "+(t?" "+t:""),e=e.map((e,t)=>n.default.createElement(o,{item:e,key:t,index:t+1})),n.default.createElement("div",{className:t},e)};var a=e("pragmate-ui/icons"),r=e("pragmate-ui/components"),n=e("react");const o=({item:e,index:t})=>n.default.createElement(r.Link,{className:"unstyled",href:e.url},n.default.createElement(({status:e})=>{switch(e){case"done":return n.default.createElement("div",{className:"counter-list__number status-done"},t);case"waiting":return n.default.createElement("div",{className:"counter-list__number status-waiting"},t);case"current":return n.default.createElement("div",{className:"counter-list__number status-current"},t);default:return n.default.createElement(a.Icon,{className:"lg",icon:"refresh"})}},{status:e.status}))}}),_.set("./header-card/header-title",{hash:1777028730,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderTitle=function({title:e}){return a.default.createElement("section",{className:"header-card__title-container"},a.default.createElement("h3",{className:"h1 header-card__title-text"},e))};var a=e("react")}}),_.set("./header-card/index",{hash:1274014296,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderCard=function({className:e,children:t,image:a,alt:r,option:n="dark",title:o,list:i}){return d.default.createElement("div",{className:n="header-card__container option-"+n+(e?" "+e:"")},d.default.createElement("section",{className:"header-card__text"},o&&d.default.createElement(s.HeaderTitle,{title:o}),d.default.createElement("section",{className:"header-card__content"},t)),i&&d.default.createElement(c.HeaderCounter,{list:i,className:"header-card__counter"}),a&&d.default.createElement(l.Image,{src:a,alt:r,className:"header-card__image"}))};var c=e("./header-counter"),s=e("./header-title"),l=e("pragmate-ui/image"),d=e("react")}}),_.set("./hooks/use-confetti",{hash:679209707,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useConfetti=function(e){const t={confettiNumber:300,confettiColors:["#ff0a54","#ff477e","#ff7096","#ff85a1","#fbb1bd","#f9bec7"],emojis:["🎉","🎊"],emojiSize:18};r.default.useEffect(()=>{(new a.default).addConfetti({...t,...e})},[])};var a=e("js-confetti"),r=e("react")}}),_.set("./hooks/use-driver-tour",{hash:2915660010,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useDriverTour=function(e,a,n={}){const o=r.default.useRef(null),i=`ailearn.${e}.tour`,c=localStorage.getItem(i);return r.default.useEffect(()=>{if(a&&!c){var e=o.current.querySelectorAll("[data-tour]");const r=[],t=(e?.forEach(e=>{var{title:t,description:a}=e.dataset;r.push({element:e,popover:{title:t,description:a}})}),(0,s.driver)({popoverClass:"pui-popover-tour",steps:r,onNextClick:()=>{if(t.hasNextStep())return t.moveNext(),!0;localStorage.setItem(i,"done"),t.destroy()},...n}));t.drive()}},[a]),{ref:o}};var r=e("react"),s=e("driver.js")}}),_.set("./hooks/use-texts-callback",{hash:2445678329,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useTextsCallback=function(a,r){const[e,n]=c.useState(!1),[t,o]=c.useState({}),i=(c.useEffect(()=>{const t=new s.CurrentTexts(a),e=()=>{var e=t.value;o(e),n(t.ready),t.ready&&r(e)};return t.on("change",e),e(),()=>{t.on("change",e)}},[]),e&&!!t);return[i,t]};var c=e("react"),s=e("@beyond-js/kernel/texts")}}),_.set("./loaders/loader",{hash:1998167168,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AppLoader=function(){return a.default.createElement("div",{className:"process__loader"},a.default.createElement("div",{className:"square"}),a.default.createElement("div",{className:"square"}),a.default.createElement("div",{className:"square last"}),a.default.createElement("div",{className:"square clear"}),a.default.createElement("div",{className:"square"}),a.default.createElement("div",{className:"square last"}),a.default.createElement("div",{className:"square clear"}),a.default.createElement("div",{className:"square "}),a.default.createElement("div",{className:"square last"}))};var a=e("react")}}),_.set("./loaders/pre-load",{hash:2462171743,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PreloadScreen=function(){return a.default.createElement("div",{className:"preload-screen active"},a.default.createElement(r.Spinner,{active:!0,type:"primary"}))};var a=e("react"),r=e("pragmate-ui/spinner")}}),_.set("./page/loader",{hash:1583197324,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PageLoader=function({children:e,className:t,fetching:a}){return a?r.default.createElement("div",{className:t="page-loader-container"+(t?" "+t:"")},a&&r.default.createElement("div",{className:"page__container__fetching"},r.default.createElement("div",null,r.default.createElement(n.AppLoader,null),e))):null};var r=e("react"),n=e("../loaders/loader")}}),_.set("./page/page-container",{hash:2975860987,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PageContainer=function({children:e,className:t,fetching:a,size:r=void 0}){var n={sm:"container-sm",default:""},r=n[r]||n.default;return o.default.createElement("div",{className:"page__container "+r+(t?" "+t:"")},e,a&&o.default.createElement("div",{className:"page__container__fetching"},o.default.createElement(i.Spinner,{active:!0,size:"xl"})))};var o=e("react"),i=e("pragmate-ui/components")}}),_.set("./page/process-container",{hash:183968273,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProcessContainer=function({children:e,className:t,fetching:a}){return a?r.default.createElement("div",{className:t="process-container"+(t?" "+t:"")},a&&r.default.createElement("div",{className:"page__container__fetching"},r.default.createElement("div",null,r.default.createElement(n.AppLoader,null),e))):null};var r=e("react"),n=e("../loaders/loader")}}),_.set("./page/title",{hash:1304239518,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PageSubtitle=function({children:e}){return n.default.createElement("span",{className:"post-title"},e)},t.PageTitle=function({preload:e,title:t,children:a,as:r="h1"}){return e?n.default.createElement("header",{className:"page-title__section"},n.default.createElement(o.SkeletonText,{height:"8px",width:"100px"}),a):n.default.createElement("header",{className:"page-title__section"},n.default.createElement(r,null,t),a)};var n=e("react"),o=e("../skeleton-text")}}),_.set("./process-button",{hash:3041374255,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProcessButton=function({children:e,onClick:t,disabled:a,...r}){const[n,o]=c.default.useState(!1);return c.default.createElement(s.Button,{...r,onClick:async()=>{o(!0),await t(),o(!1)},disabled:a||n},e)},t.ProcessIconButton=function({children:e,disabled:t,className:a,onClick:r,...n}){const[o,i]=c.default.useState(!1);return o?c.default.createElement("button",{className:"process-button process-button--fetching"},c.default.createElement(s.Spinner,{active:!0,type:"primary"})):c.default.createElement(l.AppIconButton,{className:a=a?a+" process-button":"process-button",...n,onClick:async e=>{e.stopPropagation(),i(!0),await r(),setTimeout(()=>{i(!1)},300)},disabled:t||o},e)};var c=e("react"),s=e("pragmate-ui/components"),l=e("@aimpact/ailearn-app/components/icons")}}),_.set("./radio/index",{hash:2799162414,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RadioButton=function({label:e,onChange:t,...a}){const r=n.useRef(null);return n.createElement("label",{className:"radio-button",onChange:e=>{var t;r.current&&(t=new Event("change",{bubbles:!0,cancelable:!0}),r.current.dispatchEvent(t))}},n.createElement("span",null,n.createElement("input",{type:"radio",ref:r,onChange:t,...a}),n.createElement(o.motion.div,{className:"radio-button__custom",animate:{scale:a.checked?1.1:1},transition:{duration:.2}},a.checked&&n.createElement(o.motion.div,{className:"radio-button__inner",layout:!0}))),e)};var n=e("react"),o=e("framer-motion")}}),_.set("./radio/radio-group",{hash:40498085,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RadioGroup=function({children:e,value:t,onChange:a}){return r.createElement("div",null,r.Children.map(e,e=>r.isValidElement(e)&&"string"==typeof e.props.value?r.cloneElement(e,{checked:e.props.value===t,onChange:()=>a(e.props.value)}):e))};var r=e("react")}}),_.set("./rotating-message",{hash:3462340237,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RotatingMessage=function({content:a,time:r=2e3}){const n=o.default.useRef(null);return o.default.useEffect(()=>{const e=n.current;let t=0;globalThis.setInterval(()=>{e.classList.remove("fade-in-up"),e.classList.add("fade-out-up"),setTimeout(()=>{e.innerHTML=a[t],e.classList.remove("fade-out-up"),e.classList.add("fade-in-up")},r/2),t===a.length-1&&(t=0),t++},r)},[]),o.default.createElement("span",{ref:n,className:"rotating-message"},a[0])};var o=e("react")}}),_.set("./skeleton-text",{hash:1426306877,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SkeletonText=function(e){return a.default.createElement("span",{className:"skeleton-text",style:{width:e.width||"100%",height:e.height||"14px",background:e.color||"",borderRadius:e.radio||""}},a.default.createElement("span",{style:{display:e.stopAnimation?"none":"block"}}))};var a=e("react")}}),_.set("./sub-divider",{hash:1862752652,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SubDivider=function({title:e,children:t}){return a.default.createElement("div",{className:"subdivider__container"},a.default.createElement("h3",null,e),t)};var a=e("react")}}),_.set("./tour-step",{hash:3613274651,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.TourStep=function({className:e,name:t,texts:a,children:r,as:n="span"}){var o=Object.keys(a);return a.hasOwnProperty(t)&&o?(o=o.indexOf(t),i.default.createElement(n,{className:e="tour-step "+(e||""),"data-description":a[t].description,"data-title":a[t].title,"data-tour":o},r)):(console.warn(`The text ${t} is not defined in the texts object`,a),null)};var i=e("react")}}),_.set("./user-data",{hash:1947842681,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserData=function({label:e,data:t}){var a;return t?({photoUrl:t,name:a}=t,r.createElement("div",{className:"user-data__section"},e&&r.createElement("h6",{className:"user-data__label"},e),r.createElement("section",{className:"user-data__detail"},r.createElement(n.Image,{className:"user-data__img",src:t}),r.createElement("span",{className:"user-data__name"},a)))):null};var r=e("react"),n=e("pragmate-ui/image")}}),E.exports.descriptor=[{im:"./activities/animation-container",from:"AnimatedContainer",name:"AnimatedContainer"},{im:"./activities/audio",from:"ActivityAudio",name:"ActivityAudio"},{im:"./activities/chat-preload",from:"ChatPreload",name:"ChatPreload"},{im:"./activities/header",from:"ActivityHeader",name:"ActivityHeader"},{im:"./ai-button",from:"AIButton",name:"AIButton"},{im:"./ai-button",from:"AIIconButton",name:"AIIconButton"},{im:"./animation-container",from:"AnimatedContainer",name:"AnimatedContainer"},{im:"./audio-player",from:"AudioPlayer",name:"AudioPlayer"},{im:"./battery",from:"Battery",name:"Battery"},{im:"./card/content",from:"CardContent",name:"CardContent"},{im:"./card/footer",from:"CardFooter",name:"CardFooter"},{im:"./card/image",from:"CardImage",name:"CardImage"},{im:"./card/index",from:"Card",name:"Card"},{im:"./confirm-action",from:"ConfirmAction",name:"ConfirmAction"},{im:"./content-editable/index",from:"ContentEditable",name:"ContentEditable"},{im:"./credits/ai-button",from:"AIButton",name:"AIButton"},{im:"./credits/ai-button",from:"AIIconButton",name:"AIIconButton"},{im:"./credits/coins-modal",from:"CoinsModal",name:"CoinsModal"},{im:"./credits/image",from:"OwnerImage",name:"OwnerImage"},{im:"./credits/request-credits",from:"RequestCreditsForm",name:"RequestCreditsForm"},{im:"./empty",from:"EmptyCard",name:"EmptyCard"},{im:"./entity-image",from:"EntityImage",name:"EntityImage"},{im:"./error-renderer",from:"ErrorRenderer",name:"ErrorRenderer"},{im:"./header-card/header-counter",from:"HeaderCounter",name:"HeaderCounter"},{im:"./header-card/header-title",from:"HeaderTitle",name:"HeaderTitle"},{im:"./header-card/index",from:"HeaderCard",name:"HeaderCard"},{im:"./hooks/use-confetti",from:"useConfetti",name:"useConfetti"},{im:"./hooks/use-driver-tour",from:"useDriverTour",name:"useDriverTour"},{im:"./hooks/use-texts-callback",from:"useTextsCallback",name:"useTextsCallback"},{im:"./loaders/loader",from:"AppLoader",name:"AppLoader"},{im:"./loaders/pre-load",from:"PreloadScreen",name:"PreloadScreen"},{im:"./page/loader",from:"PageLoader",name:"PageLoader"},{im:"./page/page-container",from:"PageContainer",name:"PageContainer"},{im:"./page/process-container",from:"ProcessContainer",name:"ProcessContainer"},{im:"./page/title",from:"PageTitle",name:"PageTitle"},{im:"./page/title",from:"PageSubtitle",name:"PageSubtitle"},{im:"./process-button",from:"ProcessButton",name:"ProcessButton"},{im:"./process-button",from:"ProcessIconButton",name:"ProcessIconButton"},{im:"./radio/index",from:"RadioButton",name:"RadioButton"},{im:"./radio/radio-group",from:"RadioGroup",name:"RadioGroup"},{im:"./rotating-message",from:"RotatingMessage",name:"RotatingMessage"},{im:"./skeleton-text",from:"SkeletonText",name:"SkeletonText"},{im:"./sub-divider",from:"SubDivider",name:"SubDivider"},{im:"./tour-step",from:"TourStep",name:"TourStep"},{im:"./user-data",from:"UserData",name:"UserData"}],E.exports.process=function({require:e,prop:t,value:a}){!e&&"AnimatedContainer"!==t||r("AnimatedContainer",e?e("./activities/animation-container").AnimatedContainer:a),!e&&"ActivityAudio"!==t||r("ActivityAudio",e?e("./activities/audio").ActivityAudio:a),!e&&"ChatPreload"!==t||r("ChatPreload",e?e("./activities/chat-preload").ChatPreload:a),!e&&"ActivityHeader"!==t||r("ActivityHeader",e?e("./activities/header").ActivityHeader:a),!e&&"AIButton"!==t||r("AIButton",e?e("./ai-button").AIButton:a),!e&&"AIIconButton"!==t||r("AIIconButton",e?e("./ai-button").AIIconButton:a),!e&&"AnimatedContainer"!==t||r("AnimatedContainer",e?e("./animation-container").AnimatedContainer:a),!e&&"AudioPlayer"!==t||r("AudioPlayer",e?e("./audio-player").AudioPlayer:a),!e&&"Battery"!==t||r("Battery",e?e("./battery").Battery:a),!e&&"CardContent"!==t||r("CardContent",e?e("./card/content").CardContent:a),!e&&"CardFooter"!==t||r("CardFooter",e?e("./card/footer").CardFooter:a),!e&&"CardImage"!==t||r("CardImage",e?e("./card/image").CardImage:a),!e&&"Card"!==t||r("Card",e?e("./card/index").Card:a),!e&&"ConfirmAction"!==t||r("ConfirmAction",e?e("./confirm-action").ConfirmAction:a),!e&&"ContentEditable"!==t||r("ContentEditable",e?e("./content-editable/index").ContentEditable:a),!e&&"AIButton"!==t||r("AIButton",e?e("./credits/ai-button").AIButton:a),!e&&"AIIconButton"!==t||r("AIIconButton",e?e("./credits/ai-button").AIIconButton:a),!e&&"CoinsModal"!==t||r("CoinsModal",e?e("./credits/coins-modal").CoinsModal:a),!e&&"OwnerImage"!==t||r("OwnerImage",e?e("./credits/image").OwnerImage:a),!e&&"RequestCreditsForm"!==t||r("RequestCreditsForm",e?e("./credits/request-credits").RequestCreditsForm:a),!e&&"EmptyCard"!==t||r("EmptyCard",e?e("./empty").EmptyCard:a),!e&&"EntityImage"!==t||r("EntityImage",e?e("./entity-image").EntityImage:a),!e&&"ErrorRenderer"!==t||r("ErrorRenderer",e?e("./error-renderer").ErrorRenderer:a),!e&&"HeaderCounter"!==t||r("HeaderCounter",e?e("./header-card/header-counter").HeaderCounter:a),!e&&"HeaderTitle"!==t||r("HeaderTitle",e?e("./header-card/header-title").HeaderTitle:a),!e&&"HeaderCard"!==t||r("HeaderCard",e?e("./header-card/index").HeaderCard:a),!e&&"useConfetti"!==t||r("useConfetti",e?e("./hooks/use-confetti").useConfetti:a),!e&&"useDriverTour"!==t||r("useDriverTour",e?e("./hooks/use-driver-tour").useDriverTour:a),!e&&"useTextsCallback"!==t||r("useTextsCallback",e?e("./hooks/use-texts-callback").useTextsCallback:a),!e&&"AppLoader"!==t||r("AppLoader",e?e("./loaders/loader").AppLoader:a),!e&&"PreloadScreen"!==t||r("PreloadScreen",e?e("./loaders/pre-load").PreloadScreen:a),!e&&"PageLoader"!==t||r("PageLoader",e?e("./page/loader").PageLoader:a),!e&&"PageContainer"!==t||r("PageContainer",e?e("./page/page-container").PageContainer:a),!e&&"ProcessContainer"!==t||r("ProcessContainer",e?e("./page/process-container").ProcessContainer:a),!e&&"PageTitle"!==t||r("PageTitle",e?e("./page/title").PageTitle:a),!e&&"PageSubtitle"!==t||r("PageSubtitle",e?e("./page/title").PageSubtitle:a),!e&&"ProcessButton"!==t||r("ProcessButton",e?e("./process-button").ProcessButton:a),!e&&"ProcessIconButton"!==t||r("ProcessIconButton",e?e("./process-button").ProcessIconButton:a),!e&&"RadioButton"!==t||r("RadioButton",e?e("./radio/index").RadioButton:a),!e&&"RadioGroup"!==t||r("RadioGroup",e?e("./radio/radio-group").RadioGroup:a),!e&&"RotatingMessage"!==t||r("RotatingMessage",e?e("./rotating-message").RotatingMessage:a),!e&&"SkeletonText"!==t||r("SkeletonText",e?e("./skeleton-text").SkeletonText:a),!e&&"SubDivider"!==t||r("SubDivider",e?e("./sub-divider").SubDivider:a),!e&&"TourStep"!==t||r("TourStep",e?e("./tour-step").TourStep:a),!e&&"UserData"!==t||r("UserData",e?e("./user-data").UserData:a)},r("__beyond_pkg",E),r("hmr",new function(){this.on=(e,t)=>E.hmr.on(e,t),this.off=(e,t)=>E.hmr.off(e,t)}),E.initialise(_)}}});