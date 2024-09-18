System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","framer-motion@10.18.0","@beyond-js/react-18-widgets@1.1.2/base","@aimpact/ailearn-sdk@1.0.0/core","@aimpact/ailearn-sdk@1.0.0/learning-modules","@beyond-js/reactive@1.2.0/model","@aimpact/chat-sdk@1.2.0/session","@aimpact/ailearn-app@0.1.6-dev.36/main-layout.widget","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-app@0.1.6-dev.36/i18n.ts","@beyond-js/kernel@0.1.9/routing","pragmate-ui@1.0.0-beta.6/empty","pragmate-ui@1.0.0-beta.6/components","@aimpact/ailearn-app@0.1.6-dev.36/components/ui","pragmate-ui@1.0.0-beta.6/list","pragmate-ui@1.0.0-beta.6/form","pragmate-ui@1.0.0-beta.6/modal","pragmate-ui@1.0.0-beta.6/icons","@aimpact/ailearn-app@0.1.6-dev.36/components/icons","pragmate-ui@1.0.0-beta.6/collapsible","pragmate-ui@1.0.0-beta.6/toast","pragmate-ui@1.0.0-beta.6/chips","@aimpact/ailearn-app@0.1.6-dev.36/config","@aimpact/ailearn-app@0.1.6-dev.36/modules/management/activity.code","pragmate-ui@1.0.0-beta.6/base","pragmate-ui@1.0.0-beta.6/alert","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.1.6-dev.36/components/cover-image.code","pragmate-ui@1.0.0-beta.6/image"],function(i,e){"use strict";var t,a,n,o,l,r,s,c,u,d,m,p,v,f,y,h,g,b,E,w,x,C,_,M,A,k,S,j,P,N,B,I,O,T;return i({Controller:void 0,ActivityView:void 0,AIButton:void 0,AIIconButton:void 0,View:void 0,Header:void 0,ModuleView:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){o=e},function(e){l=e},function(e){r=e},function(e){s=e},function(e){c=e},function(e){u=e},function(e){d=e},function(e){m=e},function(e){p=e},function(e){v=e},function(e){f=e},function(e){y=e},function(e){h=e},function(e){g=e},function(e){b=e},function(e){E=e},function(e){w=e},function(e){x=e},function(e){C=e},function(e){_=e},function(e){M=e},function(e){A=e},function(e){k=e},function(e){S=e},function(e){j=e},function(e){P=e},function(e){N=e},function(e){B=e},function(e){I=e}],execute:function(){T=a.Bundle,(O=new T({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.36/modules/management/settings",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["react",o],["framer-motion",l],["@beyond-js/react-18-widgets/base",r],["@aimpact/ailearn-sdk/core",s],["@aimpact/ailearn-sdk/learning-modules",c],["@beyond-js/reactive/model",u],["@aimpact/chat-sdk/session",d],["@aimpact/ailearn-app/main-layout.widget",m],["@beyond-js/kernel/texts",p],["@aimpact/ailearn-app/i18n.ts",v],["@beyond-js/kernel/routing",f],["pragmate-ui/empty",y],["pragmate-ui/components",h],["@aimpact/ailearn-app/components/ui",g],["pragmate-ui/list",b],["pragmate-ui/form",E],["pragmate-ui/modal",w],["pragmate-ui/icons",x],["@aimpact/ailearn-app/components/icons",C],["pragmate-ui/collapsible",_],["pragmate-ui/toast",M],["pragmate-ui/chips",A],["@aimpact/ailearn-app/config",k],["@aimpact/ailearn-app/modules/management/activity.code",S],["pragmate-ui/base",j],["pragmate-ui/alert",P],["@beyond-js/react-18-widgets/hooks",N],["@aimpact/ailearn-app/components/cover-image.code",B],["pragmate-ui/image",I]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-modules-management",attrs:["id","activityId"],vspecifier:"@aimpact/ailearn-app@0.1.6-dev.36/modules/management/settings.widget"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.36/modules/management/settings.widget"),(T=new Map).set("./animation-container",{hash:1836558385,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedContainer=function({className:e,children:t,as:a="span"}){return a=(0,n.motion)(a),i.default.createElement(a,{layout:!0,className:e,initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{transition:{duration:.3,width:0},opacity:0}},t)};var i=e("react"),n=e("framer-motion")}}),T.set("./controller",{hash:1180616141,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/base"),i=e("./store"),n=e("./views");class o extends a.ReactWidgetController{#store;createStore(){return this.#store=new i.StoreManager(this.attributes),this.#store}get Widget(){return n.View}}t.Controller=o}}),T.set("./store",{hash:2539252405,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var i=e("@aimpact/ailearn-sdk/learning-modules"),a=e("@beyond-js/reactive/model"),n=e("@aimpact/chat-sdk/session"),o=e("beyond_context"),l=e("@aimpact/ailearn-app/main-layout.widget"),r=e("@beyond-js/kernel/texts"),s=e("@aimpact/ailearn-app/i18n.ts"),c=e("@beyond-js/kernel/routing");class u extends a.ReactiveModel{#model;get model(){return this.#model}get user(){return n.sessionWrapper.user}get values(){return this.saved?this.model.getProperties():this.defaultValues}get ownerships(){return n.sessionWrapper.user.schools?.items??[]}get activityTypes(){return i.ActivityTypes}get globalTexts(){return s.globalTexts.texts}#texts=new r.CurrentTexts(o.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}#editActivity;get editActivity(){return this.#editActivity}set editActivity(e){void 0===(this.#editActivity=e)?(l.LayoutBroker.overlay=!1,l.LayoutBroker.backLink=void 0):(l.LayoutBroker.overlay=!0,l.LayoutBroker.backLink="/modules/management?id="+this.model.id),this.trigger("activity.selected")}get view(){return this.#editActivity?"activity":"module"}constructor(e){super();var t=e.get("id"),e=e.get("activityId");if(this.#texts.on("change",this.triggerEvent),c.routing.on("change",()=>{"/modules/management"===c.routing.uri.pathname&&(c.routing.uri.qs.get("activityId")||(this.editActivity=void 0),c.routing.uri.qs.get("id"))&&this.setBreadcrumb()}),!t)throw new Error("No id provided");this.load(t,e)}validateView(e){}async load(e,t){try{var a="new"===e?{type:"draft"}:{id:e,type:"draft"};"new"===e&&this.#model&&this.clean(),this.model&&this.model.id===e||(this.#model=await i.LearningModule.get(a),super.ready=!0,t&&(this.editActivity=this.#model.activities.items.find(e=>e.id===t),l.LayoutBroker.backLink="/modules/management?id="+this.model.id),t&&this.setBreadcrumb(),this.#texts.on("change",this.setBreadcrumb.bind(this)))}catch(e){console.error(e)}}setBreadcrumb(){this.#texts.ready&&(l.LayoutBroker.overlay=this.#editActivity)}async deleteActivity(e){this.#model.activities.remove(e),await this.#model.saveDraft(),this.trigger("change")}async save(e){return await this.model.saveDraft(e),this.#model}async createActivity(e,t){try{return await this.model.activities.add(e.id,t)}catch(e){console.error(e)}}async publish(){this.fetching=!0;var e=await this.model.publish();return this.fetching=!1,e}clean(){this.#model.activities.clean(),this.#model=void 0,super.ready=!1}}t.StoreManager=u}}),T.set("./views/activities/empty",{hash:3918254615,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyActivityList=function(){const e=(0,s.useModuleContext)().texts,[t,a]=n.default.useState(!1),i=()=>{a(!t)};return n.default.createElement("div",{className:"module-activities__list"},n.default.createElement("header",{className:"module__activity-list__header"},n.default.createElement("h2",null,e.module.activities.title),n.default.createElement(c.TourStep,{texts:e.moduleTour,name:"addActivity"},n.default.createElement(l.Button,{variant:"link",icon:"add",onClick:i},e.module.actions.addActivity))),n.default.createElement(c.TourStep,{texts:e.moduleTour,name:"activities",as:"div"},n.default.createElement(o.Empty,null,n.default.createElement("h4",null,e.module.activities.empty.title),n.default.createElement("span",null,e.module.activities.empty.text))),n.default.createElement(r.ModalSelection,{show:t,onClose:i}))};var n=e("react"),o=e("pragmate-ui/empty"),l=e("pragmate-ui/components"),r=e("./list/modal-selection"),s=e("../context"),c=e("@aimpact/ailearn-app/components/ui")}}),T.set("./views/activities/index",{hash:2238730782,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleActivities=function(){const{texts:e,activities:t,onSubmit:a,store:i}=(0,p.useModuleContext)(),[n,o]=u.default.useState(!1),[l,r]=u.default.useState(t),[,s]=u.default.useState(null),c=()=>o(e=>!e);return t.length?u.default.createElement(u.default.Fragment,null,u.default.createElement("header",{className:"module__activity-list__header"},u.default.createElement("h2",null,e.activities.title),u.default.createElement(b.TourStep,{texts:e.moduleTour,name:"addActivity",as:"div"},u.default.createElement(m.Button,{variant:"link",icon:"add",onClick:c},e.actions.add))),u.default.createElement(b.TourStep,{texts:e.moduleTour,name:"activities",as:"div"},u.default.createElement(f.Form,{onSubmit:a},u.default.createElement(g.Reorder.Group,{as:"div",values:l,onReorder:e=>{s(!0),r(e),i.model.activities.reorder(e)}},u.default.createElement(d.List,{className:"module-activity-list",specs:r,items:l,control:v.ModuleActivity})))),u.default.createElement(y.ModalSelection,{show:n,onClose:c})):u.default.createElement(h.EmptyActivityList,null)};var u=e("react"),d=e("pragmate-ui/list"),m=e("pragmate-ui/components"),p=e("../context"),v=e("./list/item"),f=e("pragmate-ui/form"),y=e("./list/modal-selection"),h=e("./empty"),g=e("framer-motion"),b=e("@aimpact/ailearn-app/components/ui")}}),T.set("./views/activities/list/item/delete-modal",{hash:3159365712,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DeleteModal=function({onClose:e,onConfirm:t}){const{texts:a,texts:{actions:i}}=(0,r.useModuleContext)(),[,n]=l.default.useState(!1);return l.default.createElement(o.ConfirmModal,{onConfirm:async()=>{try{n(!0),await t(),n(!1)}catch(e){console.error(e)}finally{e()}},centered:!0,onCancel:e,actions:{confirm:{variant:"primary",label:i.confirm},cancel:{label:i.cancel,variant:"primary",bordered:!0}},show:!0,title:a.activities.delete.title,text:a.activities.delete.subtitle})};var o=e("pragmate-ui/modal"),l=e("react"),r=e("../../../context")}}),T.set("./views/activities/list/item/header",{hash:3906961169,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityListHeader=function({openDeleteModal:t,activity:a,controls:i}){const{texts:{actions:e,activities:n},store:o}=(0,u.useModuleContext)(),l=c.default.useRef(null),r="activity-type__image image--"+a.type,s="activity__state state--"+a.state;return c.default.useEffect(()=>{const e=e=>e.preventDefault(),t=l.current;if(t)return t.addEventListener("touchstart",e,{passive:!1}),()=>{t.removeEventListener("touchstart",e,{passive:!1})}},[l]),c.default.createElement(p.CollapsibleHeader,null,c.default.createElement("header",{className:"flex-container flex-space-between flex-vertical-center"},c.default.createElement("div",{className:"header__main-content"},c.default.createElement("div",{onPointerDown:e=>i.start(e),ref:l,className:"drag-icon__container"},c.default.createElement(d.Icon,{icon:"drag",className:"drag-bullet-point"})),c.default.createElement("section",{className:r},c.default.createElement(m.AppIcon,{icon:m.ICONS[a.type]})),c.default.createElement("div",{className:"activity__data-container flex-container flex-space-between"},c.default.createElement("section",{className:"activity__name"},c.default.createElement("span",{className:"activity__type"},n.types[a.type]),c.default.createElement("h6",null,a.title)))),c.default.createElement("div",{className:"activity__details "},c.default.createElement("div",{className:s},n.states[a.state]),c.default.createElement("div",{className:"actions"},c.default.createElement(d.IconButton,{title:e.edit,icon:"edit",className:"circle",onClick:e=>{e.stopPropagation(),e=o.model.activities.items.find(e=>e.id===a.id),o.editActivity=e,o.model.id,o.setBreadcrumb(),v.routing.pushState(`/modules/management?id=${o.model.id}&activityId=`+a.id)}}),c.default.createElement(d.IconButton,{title:e.delete,icon:"delete",className:"circle",onClick:e=>{e.stopPropagation(),t()}})))))};var c=e("react"),u=e("../../../context"),d=e("pragmate-ui/icons"),m=e("@aimpact/ailearn-app/components/icons"),p=e("pragmate-ui/collapsible"),v=e("@beyond-js/kernel/routing")}}),T.set("./views/activities/list/item/index",{hash:60330569,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleActivity=function({item:t}){const{texts:{activities:e},store:a}=(0,m.useModuleContext)(),i=(0,u.useRef)(null),n=(0,g.useDragControls)(),[o,l]=u.default.useState(!1),[r,s]=u.default.useState(!1),c=()=>s(!r);return u.default.createElement(g.Reorder.Item,{value:t,className:"activity__item",dragListener:!1,dragControls:n,onDragEnd:()=>{l(!1)},as:"div"},u.default.createElement(p.CollapsibleContainer,{onToggle:()=>!o},u.default.createElement("article",{className:"activity-item",ref:i},u.default.createElement(v.ActivityListHeader,{openDeleteModal:c,activity:t,controls:n}),u.default.createElement(p.CollapsibleContent,{className:"activity__pane-content"},u.default.createElement(h.Property,{name:e.objective,value:t.specs.objective}),u.default.createElement(h.Property,{name:e.description,value:t.description}),u.default.createElement(d.ActivitySpecs,{type:t.type,specs:t.specs}))),r&&u.default.createElement(y.DeleteModal,{onConfirm:e=>{try{i.current.classList.add("fade-out"),a.deleteActivity(t.id)}catch(e){console.error(e),f.toast.error(e.message)}},onClose:c})))};var u=e("react"),d=e("./specs"),m=e("../../../context"),p=e("pragmate-ui/collapsible"),v=e("./header"),f=e("pragmate-ui/toast"),y=e("./delete-modal"),h=e("./property"),g=e("framer-motion")}}),T.set("./views/activities/list/item/property",{hash:2437299253,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Property=function({name:e,value:t}){return t?a.default.createElement("div",null,a.default.createElement("h6",null,e),a.default.createElement("span",null,t)):null};var a=e("react")}}),T.set("./views/activities/list/item/specs/index",{hash:1502866493,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivitySpecs=function({specs:e,type:t}){return a.default.createElement(a.default.Fragment,null,e.kind&&a.default.createElement(i.Chip,{type:"primary"},e.kind),a.default.createElement(n.SpecsList,{specs:e,type:t}))};var a=e("react"),i=e("pragmate-ui/chips"),n=e("./list")}}),T.set("./views/activities/list/item/specs/list",{hash:3707831496,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SpecsList=function({type:e,specs:t}){var a,i=(0,r.useModuleContext)().texts.activities,n={"content-theory":["topics",s],"multiple-choice":["questions",c],spoken:["criterias",s]};return!n[e]||([n,a]=n[e],!(e="content-theory"===e&&t.hasOwnProperty("keyConcepts")?t.keyConcepts:t[n]))||Array.isArray(e)&&!e.length?null:o.default.createElement(o.default.Fragment,null,o.default.createElement("h6",null,i[n]),o.default.createElement(l.List,{className:"questions-list",items:e,control:a}))};var o=e("react"),l=e("pragmate-ui/list"),r=e("../../../../context");const s=({data:e})=>o.default.createElement("li",null,e),c=({data:e})=>(e=e.question,o.default.createElement("li",null,e))}}),T.set("./views/activities/list/modal-selection/context",{hash:3888096406,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useCreateActivityContext=t.CreateActivityContext=void 0;var a=e("react");const i=t.CreateActivityContext=a.default.createContext({});t.useCreateActivityContext=()=>a.default.useContext(i)}}),T.set("./views/activities/list/modal-selection/index",{hash:1503471850,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModalSelection=function({show:e,onClose:a}){const i=(0,p.useModuleContext)().store,[t,n]=m.default.useState(null),[o,l]=m.default.useState(null),[r,s]=m.default.useState("list");var c,u;return e?(e=async(e,t=!1)=>(e=await i.createActivity(e,t),n(e),e),c=()=>{s("list"),a()},u={list:y.ModalActivityList,ai:g.ModalActivitySuggestions,requestCredits:b.RequestCreditsContainer},i.model.valid?(e={onClose:a,activity:t,createActivity:e,setActivity:n,navigate:e=>{e||console.error("Activity not found"),i.editActivity=e;var t="/modules/management?id="+i.model.id;f.routing.pushState(t+"&activityId="+e.id),a()},setView:s,selected:o,setSelected:l},m.default.createElement(h.CreateActivityContext.Provider,{value:e},m.default.createElement(d.Modal,{closeBackdrop:!1,show:!0,onClose:c},m.default.createElement(u=u[r],null)))):m.default.createElement(v.ModalValidation,{onClose:c})):null};var d=e("pragmate-ui/modal"),m=e("react"),p=e("../../../context"),v=e("./validation"),f=e("@beyond-js/kernel/routing"),y=e("./list"),h=e("./context"),g=e("./suggestions"),b=e("./request-credits")}}),T.set("./views/activities/list/modal-selection/item",{hash:854135559,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SelectionActivityItem=void 0;var l=e("react"),r=e("../../../context"),s=e("@aimpact/ailearn-app/components/icons"),c=e("pragmate-ui/icons");t.SelectionActivityItem=({item:t,selected:e,setSelected:a})=>{var i=(0,r.useModuleContext)().texts,e="activity__selection-item activity--"+(n=t.id.replace("/","-"))+(t.id===e?.id?" selected":""),n=s.ICONS[n],o="activity-type__image image--"+t.id;return l.default.createElement("li",{className:e,onClick:e=>{a(t)}},l.default.createElement("div",{className:o},l.default.createElement(c.Icon,{icon:n})),l.default.createElement("div",null,l.default.createElement("h6",null,i.activities.types[t.id]),l.default.createElement("span",null,i.activities.descriptionTypes[t.id])))}}}),T.set("./views/activities/list/modal-selection/list",{hash:976716274,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModalActivityList=function({}){const{store:t,texts:e}=(0,s.useModuleContext)(),{setView:a,navigate:i,createActivity:n,selected:o,setSelected:l}=(0,m.useCreateActivityContext)();return r.default.createElement("div",null,r.default.createElement("h3",null,e.activities.createModal.title),r.default.createElement(c.List,{className:"module-activity-list",specs:{selected:o,setSelected:l},items:t.model.activities.availableTypes,control:d.SelectionActivityItem}),r.default.createElement("footer",{className:"actions"},r.default.createElement(p.Button,{variant:"primary",bordered:!0,onClick:async e=>{var t=await n(o,!0);i(t)},disabled:!o},e.actions.manual),r.default.createElement(u.AIButton,{variant:"primary",onClick:async e=>{e.preventDefault(),e.stopPropagation(),t.model.credits.total?(await n(o),a("ai")):a("requestCredits")},disabled:!o,ensure:!1},e.actions.generate)))};var r=e("react"),s=e("../../../context"),c=e("pragmate-ui/list"),u=e("../../../components/ai-button"),d=e("./item"),m=e("./context"),p=e("pragmate-ui/components")}}),T.set("./views/activities/list/modal-selection/request-credits",{hash:2337899099,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RequestCreditsContainer=function(){const{onClose:e,setView:t,createActivity:a,selected:i}=(0,s.useCreateActivityContext)(),n=(0,c.useModuleContext)().store,o={...n.globalTexts};return o.actions.cancel=n.globalTexts.actions.back,l.default.createElement(l.default.Fragment,null,l.default.createElement(r.RequestCreditsForm,{onConsume:n.model.consumeCoins,globalTexts:o,owner:n.model.owner,onClose:e,onCancel:()=>t("list"),onSuccess:async()=>{await a(i),t("ai")}}))};var l=e("react"),r=e("@aimpact/ailearn-app/components/ui"),s=e("./context"),c=e("../../../context")}}),T.set("./views/activities/list/modal-selection/suggestions",{hash:3605372254,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModalActivitySuggestions=function(){const e=(0,p.useModuleContext)().texts,{activity:t,navigate:a,setView:i}=(0,v.useCreateActivityContext)(),[n,o]=c.default.useState(!1),[l,r]=c.default.useState(""),s={onChange:e=>{r(e.currentTarget.value)},onClick:async e=>{try{o(!0),await t.generate(l),a(t)}catch(e){console.error(e)}finally{setTimeout(()=>{o(!1)},2e3)}}};return c.default.createElement(c.default.Fragment,null,c.default.createElement(u.Form,null,c.default.createElement("header",null,c.default.createElement("h3",null,e.refine.title),c.default.createElement("p",null,e.refine.description),c.default.createElement("p",null,e.refine.description2)),c.default.createElement(u.Textarea,{label:e.refine.textarea.label,name:"observations",value:l,onChange:s.onChange,placeholder:e.refine.textarea.placeholder})),c.default.createElement("footer",{className:"actions"},c.default.createElement(m.Button,{variant:"primary",bordered:!0,onClick:()=>i("list")},e.actions.back),c.default.createElement(m.Button,{variant:"primary",onClick:s.onClick},e.actions.generate)),c.default.createElement(d.ProcessContainer,{fetching:n}))};var c=e("react"),u=e("pragmate-ui/form"),d=e("@aimpact/ailearn-app/components/ui"),m=e("pragmate-ui/components"),p=e("../../../context"),v=e("./context")}}),T.set("./views/activities/list/modal-selection/validation",{hash:4222962394,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModalValidation=function({onClose:e}){var t=(0,n.useModuleContext)().texts;return i.default.createElement(a.AlertModal,{show:!0,onClose:e},i.default.createElement("div",null,i.default.createElement("h3",null,t.activities.createModal.validationTitle),i.default.createElement("p",null,t.activities.createModal.validation)))};var a=e("pragmate-ui/modal"),i=e("react"),n=e("../../../context")}}),T.set("./views/activity",{hash:3256072358,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityView=function({store:e}){return a.createElement(i.ModuleActivityForm,{store:e,activity:e.editActivity})};var a=e("react"),i=e("@aimpact/ailearn-app/modules/management/activity.code")}}),T.set("./views/components/ai-button",{hash:2003207470,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AIButton=function({children:e,onClick:t,ensure:a,...i}={ensure:!0}){return n.default.createElement(l.Button,{...i,icon:o.ICONS.aiStars,onClick:t},e)},t.AIIconButton=function({children:e,onClick:t,ensure:a,...i}={ensure:!0}){return n.default.createElement(r.IconButton,{...i,icon:o.ICONS.aiStars,onClick:t},e)};var n=e("react"),o=e("@aimpact/ailearn-app/components/icons"),l=e("pragmate-ui/components"),r=e("pragmate-ui/icons")}}),T.set("./views/components/error",{hash:3301282445,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorRenderer=function({texts:e,error:t}){return a.default.createElement(i.Alert,{variant:"error"},e[t])};var a=e("react"),i=e("pragmate-ui/alert")}}),T.set("./views/context",{hash:1926894984,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");const i=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(i)}}),T.set("./views/index",{hash:3696014292,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function(e){const t=e.store,a=t.texts,[i,n]=r.useState(t.ready),[o,l]=r.useState(t.view);return(0,c.useBinder)([t],()=>{t.ready!==i&&n(t.ready),l(t.view)}),(0,c.useBinder)([t],()=>l(t.view),"activity.selected"),t.ready?"activity"!==o?r.createElement(s.ModuleView,{...e}):r.createElement(u.ActivityView,{...e,texts:a}):r.createElement(d.Preload,null)};var r=e("react"),s=e("./module"),c=e("@beyond-js/react-18-widgets/hooks"),u=e("./activity"),d=e("./preload")}}),T.set("./views/module/description",{hash:1658927461,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleDescription=function({}){const{texts:{module:e,moduleTour:t},store:a}=(0,l.useModuleContext)(),[i,n]=o.default.useState(a.model.description);return o.default.createElement(r.TourStep,{name:"description",texts:t,className:"module-property"},o.default.createElement("h6",null,e.description.label),o.default.createElement(r.ContentEditable,{name:"description",placeholder:e.description.placeholder,onSave:async e=>{e=e.target,n(e.value),a.save({[e.name]:e.value})},selector:"p",content:i}))};var o=e("react"),l=e("../context"),r=e("@aimpact/ailearn-app/components/ui")}}),T.set("./views/module/header",{hash:2514217106,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){const{texts:e,store:t,texts:{},ensureCredits:a}=(0,c.useModuleContext)(),[i,n]=s.default.useState(t.model.title??""),[o,l]=s.default.useState(t.model.picture);return(0,m.useBinder)([t.model],()=>l(t.model.picture),"image.generated"),s.default.createElement(s.default.Fragment,null,s.default.createElement("section",{className:"section-actions__container actions-end pt-0 m-0"},s.default.createElement(u.PublishModule,null)),s.default.createElement("header",{className:"header-module__container flex-container flex-space-between"},s.default.createElement("section",{className:"header-container module-header-description "},s.default.createElement(d.CoverImage,{title:e.picture.title,description:e.picture.description,suggestions:t.model.pictureSuggestions,picture:o,onGenerate:e=>a(e=>t.model.generatePicture(e),e)}),s.default.createElement("div",null,s.default.createElement(r.ContentEditable,{name:"title",as:"h3",onSave:e=>{n(e.target.value),t.save({title:e.target.value})},content:i,placeholder:e.module.title}),s.default.createElement("div",{className:"module__owner"},s.default.createElement("strong",null,e.module.owner,": "),t.model.owner?.name)))))};var r=e("@aimpact/ailearn-app/components/ui"),s=e("react"),c=e("../context"),u=e("./publish"),d=e("@aimpact/ailearn-app/components/cover-image.code"),m=e("@beyond-js/react-18-widgets/hooks")}}),T.set("./views/module/index",{hash:3969363145,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleView=function(e){const t=e.store,[a,i]=m.useState(t.fetching),[n]=m.useState(0),[o,l]=m.useState(t.model?.activities?.items),[,r]=m.useState(),s=t.texts,c=((0,p.useBinder)([t],()=>l(t.model?.activities?.items)),(0,p.useBinder)([t.model],()=>l(t.model?.activities?.items),"activities.generated"),(0,p.useBinder)([t],()=>r(t.editActivity),"activity.selected"),(0,v.useDriverTour)("moduleObjective",t.ready,s?.objectiveTour?.buttons).ref),u={store:t,fetching:a,texts:s,activePanel:n,activities:o,onSubmit:async e=>{e.preventDefault(),i(!0),await t.save(),globalThis.setTimeout(()=>{i(!1)},1e3)},ensureCredits:f.LayoutBroker.ensureCredits,totalActivities:t.model?.activities?.length},d=" "+(a?"is-fetching":"");return m.createElement(y.ModuleContext.Provider,{value:u},m.createElement(v.PageContainer,{className:d,fetching:a&&!!t.model?.activities.length},m.createElement("div",{ref:c},m.createElement(h.Header,null),m.createElement(g.ModuleManagement,null))))};var m=e("react"),p=e("@beyond-js/react-18-widgets/hooks"),v=e("@aimpact/ailearn-app/components/ui"),f=e("@aimpact/ailearn-app/main-layout.widget"),y=e("../context"),h=e("./header"),g=e("./management")}}),T.set("./views/module/management",{hash:2183703171,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleManagement=function(){var{store:e,texts:{module:t}}=(0,n.useModuleContext)();return(0,o.useBinder)([e.model],()=>{},"activities.updated"),a.default.createElement("div",{className:"app-module-creation-page"},a.default.createElement("section",null,a.default.createElement("div",{className:"module-property"},a.default.createElement("h6",null,t.objective,":"),a.default.createElement("p",null," ",e.model.objective)),a.default.createElement(l.ModuleDescription,null)),a.default.createElement(i.ModuleActivities,null))};var a=e("react"),i=e("../activities"),n=e("../context"),o=e("@beyond-js/react-18-widgets/hooks"),l=e("./description")}}),T.set("./views/module/publish",{hash:651384846,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PublishModule=function(){const{store:e,texts:t}=(0,n.useModuleContext)(),a={disabled:"draft"!==e.model.type||!e.model.completed};return i.default.createElement(c.TourStep,{texts:t.moduleTour,name:"publish"},i.default.createElement("div",{className:"publish-action__container"},i.default.createElement(o.Button,{fetching:e.fetching,onClick:async()=>{try{(await e.publish()).status?(l.toast.success(t.toast.modulePublished),r.routing.replaceState({},null,"/modules/list?tab=published")):s.LayoutBroker.showMessage("error",t.errors.CONTACT_ADMIN)}catch(e){l.toast.error(t.toast.errorPublishingModule)}},variant:"primary",...a},t.actions.publish)))};var i=e("react"),n=e("../context"),o=e("pragmate-ui/components"),l=e("pragmate-ui/toast"),r=e("@beyond-js/kernel/routing"),s=e("@aimpact/ailearn-app/main-layout.widget"),c=e("@aimpact/ailearn-app/components/ui")}}),T.set("./views/module/title",{hash:833606887,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleTitle=function({}){const{texts:{module:e},store:t}=(0,n.useModuleContext)(),a=t.model.title??e.title;return i.default.createElement("div",{className:"module-property"},i.default.createElement("h6",null,e.title),i.default.createElement(o.ContentEditable,{name:"title",onSave:async e=>{await t.save(e)},selector:"p"},a))};var i=e("react"),n=e("../context"),o=e("@aimpact/ailearn-app/components/ui")}}),T.set("./views/preload",{hash:42263331,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Preload=function(){return a.default.createElement(n.AnimatedContainer,null,a.default.createElement(n.PageContainer,null,a.default.createElement("section",null,a.default.createElement("div",{className:"section-actions__container actions-end border-top"},a.default.createElement(i.Button,{variant:"primary"})),a.default.createElement("header",{className:"header-module__container flex-container flex-space-between"},a.default.createElement("section",{className:"header-container module-header-description "},a.default.createElement("div",{className:"image-preload"}),a.default.createElement("div",null,a.default.createElement(n.ContentEditable,{name:"title",as:"h3"},a.default.createElement(n.SkeletonText,{height:"10px",width:"100px"})),a.default.createElement("div",{className:"module__owner"},a.default.createElement(n.SkeletonText,{height:"5px",width:"60px"}))))))))};var a=e("react"),i=e("pragmate-ui/components"),n=e("@aimpact/ailearn-app/components/ui")}}),O.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/activity",from:"ActivityView",name:"ActivityView"},{im:"./views/components/ai-button",from:"AIButton",name:"AIButton"},{im:"./views/components/ai-button",from:"AIIconButton",name:"AIIconButton"},{im:"./views/index",from:"View",name:"View"},{im:"./views/module/header",from:"Header",name:"Header"},{im:"./views/module/index",from:"ModuleView",name:"ModuleView"}],O.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||i("Controller",e?e("./controller").Controller:a),!e&&"ActivityView"!==t||i("ActivityView",e?e("./views/activity").ActivityView:a),!e&&"AIButton"!==t||i("AIButton",e?e("./views/components/ai-button").AIButton:a),!e&&"AIIconButton"!==t||i("AIIconButton",e?e("./views/components/ai-button").AIIconButton:a),!e&&"View"!==t||i("View",e?e("./views/index").View:a),!e&&"Header"!==t||i("Header",e?e("./views/module/header").Header:a),!e&&"ModuleView"!==t||i("ModuleView",e?e("./views/module/index").ModuleView:a)},i("__beyond_pkg",O),i("hmr",new function(){this.on=(e,t)=>O.hmr.on(e,t),this.off=(e,t)=>O.hmr.off(e,t)}),O.initialise(T)}}});