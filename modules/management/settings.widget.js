System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","framer-motion@10.18.0","@beyond-js/react-18-widgets@1.1.2/base","@aimpact/ailearn-sdk@1.0.0/learning-modules","@beyond-js/reactive@1.2.0/model","@aimpact/chat-sdk@1.0.1/session","@aimpact/ailearn-app@0.1.0-dev.08/main-layout.widget","@beyond-js/kernel@0.1.9/texts","@beyond-js/kernel@0.1.9/routing","pragmate-ui@1.0.0-beta.1/empty","pragmate-ui@1.0.0-beta.1/components","pragmate-ui@1.0.0-beta.1/list","pragmate-ui@1.0.0-beta.1/form","pragmate-ui@1.0.0-beta.1/modal","pragmate-ui@1.0.0-beta.1/icons","@aimpact/ailearn-app@0.1.0-dev.08/components/icons","pragmate-ui@1.0.0-beta.1/collapsible","pragmate-ui@1.0.0-beta.1/toast","pragmate-ui@1.0.0-beta.1/chips","@aimpact/ailearn-app@0.1.0-dev.08/components/ui","@aimpact/ailearn-app@0.1.0-dev.08/config","@aimpact/ailearn-app@0.1.0-dev.08/modules/management/activity.code","pragmate-ui@1.0.0-beta.1/alert","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.1.0-dev.08/components/cover-image.code","pragmate-ui@1.0.0-beta.1/image"],function(i,e){var t,a,n,l,o,r,s,c,u,d,m,p,v,f,y,h,g,b,E,w,x,C,_,M,A,k,j,B,S,N,P;return i({Controller:void 0,ActivityView:void 0,AIButton:void 0,AIIconButton:void 0,View:void 0,Header:void 0,ModuleView:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){l=e},function(e){o=e},function(e){r=e},function(e){s=e},function(e){c=e},function(e){u=e},function(e){d=e},function(e){m=e},function(e){p=e},function(e){v=e},function(e){f=e},function(e){y=e},function(e){h=e},function(e){g=e},function(e){b=e},function(e){E=e},function(e){w=e},function(e){x=e},function(e){C=e},function(e){_=e},function(e){M=e},function(e){A=e},function(e){k=e},function(e){j=e},function(e){B=e},function(e){S=e}],execute:function(){P=a.Bundle,(N=new P({module:{vspecifier:"@aimpact/ailearn-app@0.1.0-dev.08/modules/management/settings",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["react",l],["framer-motion",o],["@beyond-js/react-18-widgets/base",r],["@aimpact/ailearn-sdk/learning-modules",s],["@beyond-js/reactive/model",c],["@aimpact/chat-sdk/session",u],["@aimpact/ailearn-app/main-layout.widget",d],["@beyond-js/kernel/texts",m],["@beyond-js/kernel/routing",p],["pragmate-ui/empty",v],["pragmate-ui/components",f],["pragmate-ui/list",y],["pragmate-ui/form",h],["pragmate-ui/modal",g],["pragmate-ui/icons",b],["@aimpact/ailearn-app/components/icons",E],["pragmate-ui/collapsible",w],["pragmate-ui/toast",x],["pragmate-ui/chips",C],["@aimpact/ailearn-app/components/ui",_],["@aimpact/ailearn-app/config",M],["@aimpact/ailearn-app/modules/management/activity.code",A],["pragmate-ui/alert",k],["@beyond-js/react-18-widgets/hooks",j],["@aimpact/ailearn-app/components/cover-image.code",B],["pragmate-ui/image",S]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-modules-management",attrs:["id","activityId"],vspecifier:"@aimpact/ailearn-app@0.1.0-dev.08/modules/management/settings.widget"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.0-dev.08/modules/management/settings.widget"),(P=new Map).set("./animation-container",{hash:1836558385,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedContainer=function({className:e,children:t,as:a="span"}){return a=(0,n.motion)(a),i.default.createElement(a,{layout:!0,className:e,initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{transition:{duration:.3,width:0},opacity:0}},t)};var i=e("react"),n=e("framer-motion")}}),P.set("./controller",{hash:1180616141,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/base"),i=e("./store"),n=e("./views");class l extends a.ReactWidgetController{#store;createStore(){return this.#store=new i.StoreManager(this.attributes),this.#store}get Widget(){return n.View}}t.Controller=l}}),P.set("./store",{hash:3243366045,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var i=e("@aimpact/ailearn-sdk/learning-modules"),a=e("@beyond-js/reactive/model"),n=e("@aimpact/chat-sdk/session"),l=e("beyond_context"),o=e("@aimpact/ailearn-app/main-layout.widget"),r=e("@beyond-js/kernel/texts"),s=e("@beyond-js/kernel/routing");class c extends a.ReactiveModel{#model;get model(){return this.#model}get user(){return n.sessionWrapper.user}get values(){return this.saved?this.model.getProperties():this.defaultValues}get ownerships(){return n.sessionWrapper.user.schools?.items??[]}get activityTypes(){return i.ActivityTypes}#texts=new r.CurrentTexts(l.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}#editActivity;get editActivity(){return this.#editActivity}set editActivity(e){void 0===(this.#editActivity=e)?(o.LayoutBroker.overlay=!1,o.LayoutBroker.backLink=void 0):(o.LayoutBroker.overlay=!0,o.LayoutBroker.backLink="/modules/management?id="+this.model.id),this.trigger("activity.selected")}get view(){return this.#editActivity?"activity":"module"}constructor(e){super();var t=e.get("id"),e=e.get("activityId");if(this.#texts.on("change",this.triggerEvent),s.routing.on("change",()=>{"/modules/management"===s.routing.uri.pathname&&(s.routing.uri.qs.get("activityId")||(this.editActivity=void 0),s.routing.uri.qs.get("id"))&&this.setBreadcrumb()}),!t)throw new Error("No id provided");this.load(t,e)}clean(){this.#model.activities.clean(),this.#model=void 0,super.ready=!1}validateView(e){}async load(e,t){try{var a="new"===e?{type:"draft"}:{id:e,type:"draft"};"new"===e&&this.#model&&this.clean(),this.model&&this.model.id===e||(this.#model=await i.LearningModule.get(a),super.ready=!0,t&&(this.editActivity=this.#model.activities.items.find(e=>e.id===t),o.LayoutBroker.backLink="/modules/management?id="+this.model.id),t&&this.setBreadcrumb(),this.#texts.on("change",this.setBreadcrumb.bind(this)))}catch(e){console.error(e)}}setBreadcrumb(){if(this.#texts.ready){let e=[[this.texts.breadcrumb.modules,"/modules/list"]],t=this.#editActivity?.title??this.texts.breadcrumb.management;this.#editActivity?(e.push([this.model.title,"/modules/management?id="+this.model.id]),o.LayoutBroker.overlay=!0):(e.push([t]),o.LayoutBroker.overlay=!1,globalThis.setTimeout(()=>{o.LayoutBroker.breadcrumb=e},100))}}async deleteActivity(e){this.#model.activities.remove(e),await this.#model.saveDraft(),this.trigger("change")}async save(e){return await this.model.saveDraft(e),this.#model}async createActivity(e,t){try{return await this.model.activities.add(e.id,t)}catch(e){console.error(e)}}async publish(){this.fetching=!0;var e=await this.model.publish();return this.fetching=!1,e}}t.StoreManager=c}}),P.set("./views/activities/empty",{hash:4094756849,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyActivityList=function(){let e=(0,s.useModuleContext)().texts,[t,a]=n.default.useState(!1),i=()=>{a(!t)};return n.default.createElement("div",{className:"module-activities__list"},n.default.createElement("header",{className:"module__activity-list__header"},n.default.createElement("h2",null,e.module.activities.title),n.default.createElement("div",null,n.default.createElement(o.Button,{variant:"link",icon:"add",onClick:i},e.module.actions.addActivity))),n.default.createElement(l.Empty,null,n.default.createElement("h4",null,e.module.activities.empty.title),n.default.createElement("span",null,e.module.activities.empty.text)),n.default.createElement(r.ModalSelection,{show:t,onClose:i}))};var n=e("react"),l=e("pragmate-ui/empty"),o=e("pragmate-ui/components"),r=e("./list/selection/modal"),s=e("../context")}}),P.set("./views/activities/index",{hash:2010269373,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleActivities=function(){let{texts:e,activities:t,onSubmit:a,store:i}=(0,p.useModuleContext)(),[n,l]=u.default.useState(!1),[o,r]=u.default.useState(t),[,s]=u.default.useState(null),c=()=>l(e=>!e);return t.length?u.default.createElement(u.default.Fragment,null,u.default.createElement("header",{className:"module__activity-list__header"},u.default.createElement("h2",null,e.activities.title),u.default.createElement(m.Button,{variant:"link",icon:"add",onClick:c},e.actions.add)),u.default.createElement(f.Form,{onSubmit:a},u.default.createElement(g.Reorder.Group,{as:"div",values:o,onReorder:e=>{s(!0),r(e),i.model.activities.reorder(e)}},u.default.createElement(d.List,{className:"module-activity-list",specs:r,items:o,control:v.ModuleActivity}))),u.default.createElement(y.ModalSelection,{show:n,onClose:c})):u.default.createElement(h.EmptyActivityList,null)};var u=e("react"),d=e("pragmate-ui/list"),m=e("pragmate-ui/components"),p=e("../context"),v=e("./list/item"),f=e("pragmate-ui/form"),y=e("./list/selection/modal"),h=e("./empty"),g=e("framer-motion")}}),P.set("./views/activities/list/item/delete-modal",{hash:3159365712,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DeleteModal=function({onClose:e,onConfirm:t}){let{texts:a,texts:{actions:i}}=(0,r.useModuleContext)(),[,n]=o.default.useState(!1);return o.default.createElement(l.ConfirmModal,{onConfirm:async()=>{try{n(!0),await t(),n(!1)}catch(e){console.error(e)}finally{e()}},centered:!0,onCancel:e,actions:{confirm:{variant:"primary",label:i.confirm},cancel:{label:i.cancel,variant:"primary",bordered:!0}},show:!0,title:a.activities.delete.title,text:a.activities.delete.subtitle})};var l=e("pragmate-ui/modal"),o=e("react"),r=e("../../../context")}}),P.set("./views/activities/list/item/header",{hash:3906961169,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityListHeader=function({openDeleteModal:t,activity:a,controls:i}){let{texts:{actions:e,activities:n},store:l}=(0,u.useModuleContext)(),o=c.default.useRef(null),r="activity-type__image image--"+a.type,s="activity__state state--"+a.state;return c.default.useEffect(()=>{let e=e=>e.preventDefault(),t=o.current;if(t)return t.addEventListener("touchstart",e,{passive:!1}),()=>{t.removeEventListener("touchstart",e,{passive:!1})}},[o]),c.default.createElement(p.CollapsibleHeader,null,c.default.createElement("header",{className:"flex-container flex-space-between flex-vertical-center"},c.default.createElement("div",{className:"header__main-content"},c.default.createElement("div",{onPointerDown:e=>i.start(e),ref:o,className:"drag-icon__container"},c.default.createElement(d.Icon,{icon:"drag",className:"drag-bullet-point"})),c.default.createElement("section",{className:r},c.default.createElement(m.AppIcon,{icon:m.ICONS[a.type]})),c.default.createElement("div",{className:"activity__data-container flex-container flex-space-between"},c.default.createElement("section",{className:"activity__name"},c.default.createElement("span",{className:"activity__type"},n.types[a.type]),c.default.createElement("h6",null,a.title)))),c.default.createElement("div",{className:"activity__details "},c.default.createElement("div",{className:s},n.states[a.state]),c.default.createElement("div",{className:"actions"},c.default.createElement(d.IconButton,{title:e.edit,icon:"edit",className:"circle",onClick:e=>{e.stopPropagation(),e=l.model.activities.items.find(e=>e.id===a.id),l.editActivity=e,l.model.id,l.setBreadcrumb(),v.routing.pushState(`/modules/management?id=${l.model.id}&activityId=`+a.id)}}),c.default.createElement(d.IconButton,{title:e.delete,icon:"delete",className:"circle",onClick:e=>{e.stopPropagation(),t()}})))))};var c=e("react"),u=e("../../../context"),d=e("pragmate-ui/icons"),m=e("@aimpact/ailearn-app/components/icons"),p=e("pragmate-ui/collapsible"),v=e("@beyond-js/kernel/routing")}}),P.set("./views/activities/list/item/index",{hash:60330569,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleActivity=function({item:t}){let{texts:{activities:e},store:a}=(0,m.useModuleContext)(),i=(0,u.useRef)(null),n=(0,g.useDragControls)(),[l,o]=u.default.useState(!1),[r,s]=u.default.useState(!1),c=()=>s(!r);return u.default.createElement(g.Reorder.Item,{value:t,className:"activity__item",dragListener:!1,dragControls:n,onDragEnd:()=>{o(!1)},as:"div"},u.default.createElement(p.CollapsibleContainer,{onToggle:()=>!l},u.default.createElement("article",{className:"activity-item",ref:i},u.default.createElement(v.ActivityListHeader,{openDeleteModal:c,activity:t,controls:n}),u.default.createElement(p.CollapsibleContent,{className:"activity__pane-content"},u.default.createElement(h.Property,{name:e.objective,value:t.specs.objective}),u.default.createElement(h.Property,{name:e.description,value:t.description}),u.default.createElement(d.ActivitySpecs,{type:t.type,specs:t.specs}))),r&&u.default.createElement(y.DeleteModal,{onConfirm:e=>{try{i.current.classList.add("fade-out"),a.deleteActivity(t.id)}catch(e){console.error(e),f.toast.error(e.message)}},onClose:c})))};var u=e("react"),d=e("./specs"),m=e("../../../context"),p=e("pragmate-ui/collapsible"),v=e("./header"),f=e("pragmate-ui/toast"),y=e("./delete-modal"),h=e("./property"),g=e("framer-motion")}}),P.set("./views/activities/list/item/property",{hash:2437299253,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Property=function({name:e,value:t}){return t?a.default.createElement("div",null,a.default.createElement("h6",null,e),a.default.createElement("span",null,t)):null};var a=e("react")}}),P.set("./views/activities/list/item/specs/index",{hash:1502866493,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivitySpecs=function({specs:e,type:t}){return a.default.createElement(a.default.Fragment,null,e.kind&&a.default.createElement(i.Chip,{type:"primary"},e.kind),a.default.createElement(n.SpecsList,{specs:e,type:t}))};var a=e("react"),i=e("pragmate-ui/chips"),n=e("./list")}}),P.set("./views/activities/list/item/specs/list",{hash:3707831496,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SpecsList=function({type:e,specs:t}){var a,i=(0,r.useModuleContext)().texts.activities,n={"content-theory":["topics",s],"multiple-choice":["questions",c],spoken:["criterias",s]};return!n[e]||([n,a]=n[e],!(e="content-theory"===e&&t.hasOwnProperty("keyConcepts")?t.keyConcepts:t[n]))||Array.isArray(e)&&!e.length?null:l.default.createElement(l.default.Fragment,null,l.default.createElement("h6",null,i[n]),l.default.createElement(o.List,{className:"questions-list",items:e,control:a}))};var l=e("react"),o=e("pragmate-ui/list"),r=e("../../../../context");let s=({data:e})=>l.default.createElement("li",null,e),c=({data:e})=>(e=e.question,l.default.createElement("li",null,e))}}),P.set("./views/activities/list/selection/context",{hash:357112821,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useCreateActivityContext=t.CreateActivityContext=void 0;var a=e("react");let i=t.CreateActivityContext=a.default.createContext({});t.useCreateActivityContext=()=>a.default.useContext(i)}}),P.set("./views/activities/list/selection/item",{hash:2049796178,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SelectionActivityItem=void 0;var o=e("react"),r=e("../../../context"),s=e("@aimpact/ailearn-app/components/icons"),c=e("pragmate-ui/icons");t.SelectionActivityItem=({item:t,specs:{selected:e,setSelected:a}})=>{var i=(0,r.useModuleContext)().texts,e="activity__selection-item activity--"+(n=t.id.replace("/","-"))+(t.id===e?.id?" selected":""),n=s.ICONS[n],l="activity-type__image image--"+t.id;return o.default.createElement("li",{className:e,onClick:e=>{a(t)}},o.default.createElement("div",{className:l},o.default.createElement(c.Icon,{icon:n})),o.default.createElement("div",null,o.default.createElement("h6",null,i.activities.types[t.id]),o.default.createElement("span",null,i.activities.descriptionTypes[t.id])))}}}),P.set("./views/activities/list/selection/list",{hash:3441130200,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModalActivityList=function({}){let{store:e,texts:t}=(0,s.useModuleContext)(),[a,i]=r.default.useState(null),{setView:n,navigate:l,createActivity:o}=(0,m.useCreateActivityContext)();return r.default.createElement("div",null,r.default.createElement("h3",null,t.activities.createModal.title),r.default.createElement(c.List,{className:"module-activity-list",specs:{selected:a,setSelected:i},items:e.model.activities.types,control:d.SelectionActivityItem}),r.default.createElement("footer",{className:"actions"},r.default.createElement(p.Button,{variant:"primary",bordered:!0,onClick:async()=>{var e=await o(a,!0);l(e)},disabled:!a},t.actions.manual),r.default.createElement(u.AIButton,{variant:"primary",onClick:async()=>{await o(a),n("ai")},disabled:!a},t.actions.generate)))};var r=e("react"),s=e("../../../context"),c=e("pragmate-ui/list"),u=e("../../../components/ai-button"),d=e("./item"),m=e("./context"),p=e("pragmate-ui/components")}}),P.set("./views/activities/list/selection/modal",{hash:1089213316,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModalSelection=function({show:e,onClose:i}){let{store:n,texts:l}=(0,m.useModuleContext)(),[t,a]=d.default.useState(null),[o,r]=d.default.useState("list");var s,c;return e?(e=async(e,t=!1)=>(e=await n.createActivity(e,t),a(e),e),s=()=>{r("list"),i()},c={list:y.ModalActivityList,ai:g.ModalActivitySuggestions},n.model.valid?d.default.createElement(h.CreateActivityContext.Provider,{value:{onClose:i,activity:t,createActivity:e,setActivity:a,navigate:e=>{e||console.error("Activity not found"),n.editActivity=e;var t="/modules/management?id="+n.model.id,a=l.activities.types[e.type];p.LayoutBroker.addMultipleBreadcrumb([[a,e.id]]),f.routing.pushState(t+"&activityId="+e.id),i()},setView:r}},d.default.createElement(u.Modal,{closeBackdrop:!1,show:!0,onClose:s},d.default.createElement(c=c[o],null))):d.default.createElement(v.ModalValidation,{onClose:s})):null};var u=e("pragmate-ui/modal"),d=e("react"),m=e("../../../context"),p=e("@aimpact/ailearn-app/main-layout.widget"),v=e("./validation"),f=e("@beyond-js/kernel/routing"),y=e("./list"),h=e("./context"),g=e("./suggestions")}}),P.set("./views/activities/list/selection/suggestions",{hash:2138648183,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModalActivitySuggestions=function(){let e=(0,m.useModuleContext)().texts,{activity:t,navigate:a}=(0,p.useCreateActivityContext)(),[i,n]=s.default.useState(!1),[l,o]=s.default.useState(""),r={onChange:e=>{o(e.currentTarget.value)},onClick:async e=>{try{n(!0),await t.generate(l),a(t)}catch(e){}finally{setTimeout(()=>{n(!1)},2e3)}}};return s.default.createElement(s.default.Fragment,null,s.default.createElement(c.Form,null,s.default.createElement("header",null,s.default.createElement("h3",null,e.refine.title),s.default.createElement("p",null,e.refine.description),s.default.createElement("p",null,e.refine.description2)),s.default.createElement(c.Textarea,{label:e.refine.textarea.label,name:"observations",value:l,onChange:r.onChange,placeholder:e.refine.textarea.placeholder})),s.default.createElement("footer",{className:"actions"},s.default.createElement(d.Button,{variant:"primary",onClick:r.onClick},e.actions.generate)),s.default.createElement(u.ProcessContainer,{fetching:i}))};var s=e("react"),c=e("pragmate-ui/form"),u=e("@aimpact/ailearn-app/components/ui"),d=e("pragmate-ui/components"),m=e("../../../context"),p=e("./context")}}),P.set("./views/activities/list/selection/validation",{hash:4222962394,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModalValidation=function({onClose:e}){var t=(0,n.useModuleContext)().texts;return i.default.createElement(a.AlertModal,{show:!0,onClose:e},i.default.createElement("div",null,i.default.createElement("h3",null,t.activities.createModal.validationTitle),i.default.createElement("p",null,t.activities.createModal.validation)))};var a=e("pragmate-ui/modal"),i=e("react"),n=e("../../../context")}}),P.set("./views/activity",{hash:3256072358,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityView=function({store:e}){return a.createElement(i.ModuleActivityForm,{store:e,activity:e.editActivity})};var a=e("react"),i=e("@aimpact/ailearn-app/modules/management/activity.code")}}),P.set("./views/components/ai-button",{hash:2168291771,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AIButton=function({children:e,onClick:t,...a}){return i.default.createElement(l.Button,{...a,icon:n.ICONS.aiStars,onClick:()=>r.LayoutBroker.ensureCredits(t)},e)},t.AIIconButton=function({children:e,onClick:t,...a}){return i.default.createElement(o.IconButton,{...a,icon:n.ICONS.aiStars,onClick:()=>r.LayoutBroker.ensureCredits(t)},e)};var i=e("react"),n=e("@aimpact/ailearn-app/components/icons"),l=e("pragmate-ui/components"),o=e("pragmate-ui/icons"),r=e("@aimpact/ailearn-app/main-layout.widget")}}),P.set("./views/components/error",{hash:3301282445,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorRenderer=function({texts:e,error:t}){return a.default.createElement(i.Alert,{variant:"error"},e[t])};var a=e("react"),i=e("pragmate-ui/alert")}}),P.set("./views/context",{hash:1926894984,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");let i=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(i)}}),P.set("./views/index",{hash:3696014292,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function(e){let t=e.store,a=t.texts,[i,n]=r.useState(t.ready),[l,o]=r.useState(t.view);return(0,c.useBinder)([t],()=>{t.ready!==i&&n(t.ready),o(t.view)}),(0,c.useBinder)([t],()=>o(t.view),"activity.selected"),t.ready?"activity"!==l?r.createElement(s.ModuleView,{...e}):r.createElement(u.ActivityView,{...e,texts:a}):r.createElement(d.Preload,null)};var r=e("react"),s=e("./module"),c=e("@beyond-js/react-18-widgets/hooks"),u=e("./activity"),d=e("./preload")}}),P.set("./views/module/description",{hash:1562269950,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleDescription=function({}){let{texts:{module:e},store:t}=(0,n.useModuleContext)(),a=t.model.description;return i.default.createElement("div",{className:"module-property"},i.default.createElement("h6",null,e.description.label),i.default.createElement(l.ContentEditable,{name:"description",placeholder:e.description.placeholder,onSave:async e=>{e=e.target,t.save({[e.name]:e.value})},selector:"p",content:a}))};var i=e("react"),n=e("../context"),l=e("@aimpact/ailearn-app/components/ui")}}),P.set("./views/module/header",{hash:4021694862,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){let{texts:e,store:t,texts:{},ensureCredits:a}=(0,s.useModuleContext)(),i=t.model.title,[n,l]=r.default.useState(t.model.picture);return(0,d.useBinder)([t.model],()=>l(t.model.picture),"image.generated"),r.default.createElement(o.AnimatedContainer,null,r.default.createElement("section",{className:"section-actions__container actions-end pt-0 m-0"},r.default.createElement(c.PublishModule,null)),r.default.createElement("header",{className:"header-module__container flex-container flex-space-between"},r.default.createElement("section",{className:"header-container module-header-description "},r.default.createElement(u.CoverImage,{title:e.picture.title,description:e.picture.description,suggestions:t.model.pictureSuggestions,picture:n,onGenerate:e=>a(e=>t.model.generatePicture(e),e)}),r.default.createElement("div",null,r.default.createElement(o.ContentEditable,{name:"title",as:"h3",onSave:e=>{m.LayoutBroker.trimBreadcrumb(1),m.LayoutBroker.addBreadcrumb([e.target.value,""]),t.save({title:e.target.value})},content:i,placeholder:e.module.title}),r.default.createElement("div",{className:"module__owner"},r.default.createElement("strong",null,e.module.owner,": "),t.model.owner?.name)))))};var o=e("@aimpact/ailearn-app/components/ui"),r=e("react"),s=e("../context"),c=e("./publish"),u=e("@aimpact/ailearn-app/components/cover-image.code"),d=e("@beyond-js/react-18-widgets/hooks"),m=e("@aimpact/ailearn-app/main-layout.widget")}}),P.set("./views/module/index",{hash:2125922520,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleView=function(e){let t=e.store,[a,i]=d.useState(t.fetching),[n]=d.useState(0),[l,o]=d.useState(t.model?.activities?.items),[,r]=d.useState(),s=t.texts,c=((0,m.useBinder)([t],()=>o(t.model?.activities?.items)),(0,m.useBinder)([t.model],()=>o(t.model?.activities?.items),"activities.generated"),(0,m.useBinder)([t],()=>r(t.editActivity),"activity.selected"),{store:t,fetching:a,texts:s,activePanel:n,activities:l,onSubmit:async e=>{e.preventDefault(),i(!0),await t.save(),globalThis.setTimeout(()=>{i(!1)},1e3)},ensureCredits:v.LayoutBroker.ensureCredits,totalActivities:t.model?.activities?.length}),u=" "+(a?"is-fetching":"");return d.createElement(f.ModuleContext.Provider,{value:c},d.createElement(p.PageContainer,{className:u,fetching:a&&!!t.model?.activities.length},d.createElement(y.Header,null),d.createElement(h.ModuleManagement,null)))};var d=e("react"),m=e("@beyond-js/react-18-widgets/hooks"),p=e("@aimpact/ailearn-app/components/ui"),v=e("@aimpact/ailearn-app/main-layout.widget"),f=e("../context"),y=e("./header"),h=e("./management")}}),P.set("./views/module/management",{hash:3566650205,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleManagement=function(){var{store:e,texts:{module:t}}=(0,n.useModuleContext)();return e.model.title??t.title,(0,l.useBinder)([e.model],()=>{},"activities.updated"),a.default.createElement("div",{className:"app-module-creation-page"},a.default.createElement("section",null,a.default.createElement("div",{className:"module-property"},a.default.createElement("h6",null,t.objective,":"),a.default.createElement("p",null," ",e.model.objective)),a.default.createElement(o.ModuleDescription,null)),a.default.createElement(i.ModuleActivities,null))};var a=e("react"),i=e("../activities"),n=e("../context"),l=e("@beyond-js/react-18-widgets/hooks"),o=e("./description")}}),P.set("./views/module/publish",{hash:800701692,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PublishModule=function(){let{store:e,texts:t}=(0,n.useModuleContext)(),a={disabled:"draft"!==e.model.type||!e.model.completed};return i.default.createElement("div",{className:"publish-action__container"},i.default.createElement(l.Button,{fetching:e.fetching,onClick:async()=>{try{(await e.publish()).status?(o.toast.success(t.toast.modulePublished),r.routing.replaceState({},null,"/modules/list?tab=published")):s.LayoutBroker.showMessage("error",t.errors.CONTACT_ADMIN)}catch(e){o.toast.error(t.toast.errorPublishingModule)}},variant:"primary",...a},t.actions.publish))};var i=e("react"),n=e("../context"),l=e("pragmate-ui/components"),o=e("pragmate-ui/toast"),r=e("@beyond-js/kernel/routing"),s=e("@aimpact/ailearn-app/main-layout.widget")}}),P.set("./views/module/title",{hash:833606887,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleTitle=function({}){let{texts:{module:e},store:t}=(0,n.useModuleContext)(),a=t.model.title??e.title;return i.default.createElement("div",{className:"module-property"},i.default.createElement("h6",null,e.title),i.default.createElement(l.ContentEditable,{name:"title",onSave:async e=>{await t.save(e)},selector:"p"},a))};var i=e("react"),n=e("../context"),l=e("@aimpact/ailearn-app/components/ui")}}),P.set("./views/preload",{hash:42263331,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Preload=function(){return a.default.createElement(n.AnimatedContainer,null,a.default.createElement(n.PageContainer,null,a.default.createElement("section",null,a.default.createElement("div",{className:"section-actions__container actions-end border-top"},a.default.createElement(i.Button,{variant:"primary"})),a.default.createElement("header",{className:"header-module__container flex-container flex-space-between"},a.default.createElement("section",{className:"header-container module-header-description "},a.default.createElement("div",{className:"image-preload"}),a.default.createElement("div",null,a.default.createElement(n.ContentEditable,{name:"title",as:"h3"},a.default.createElement(n.SkeletonText,{height:"10px",width:"100px"})),a.default.createElement("div",{className:"module__owner"},a.default.createElement(n.SkeletonText,{height:"5px",width:"60px"}))))))))};var a=e("react"),i=e("pragmate-ui/components"),n=e("@aimpact/ailearn-app/components/ui")}}),N.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/activity",from:"ActivityView",name:"ActivityView"},{im:"./views/components/ai-button",from:"AIButton",name:"AIButton"},{im:"./views/components/ai-button",from:"AIIconButton",name:"AIIconButton"},{im:"./views/index",from:"View",name:"View"},{im:"./views/module/header",from:"Header",name:"Header"},{im:"./views/module/index",from:"ModuleView",name:"ModuleView"}],N.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||i("Controller",e?e("./controller").Controller:a),!e&&"ActivityView"!==t||i("ActivityView",e?e("./views/activity").ActivityView:a),!e&&"AIButton"!==t||i("AIButton",e?e("./views/components/ai-button").AIButton:a),!e&&"AIIconButton"!==t||i("AIIconButton",e?e("./views/components/ai-button").AIIconButton:a),!e&&"View"!==t||i("View",e?e("./views/index").View:a),!e&&"Header"!==t||i("Header",e?e("./views/module/header").Header:a),!e&&"ModuleView"!==t||i("ModuleView",e?e("./views/module/index").ModuleView:a)},i("__beyond_pkg",N),i("hmr",new function(){this.on=(e,t)=>N.hmr.on(e,t),this.off=(e,t)=>N.hmr.off(e,t)}),N.initialise(P)}}});