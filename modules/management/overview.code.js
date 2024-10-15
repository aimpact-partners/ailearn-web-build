System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","react@18.2.0","pragmate-ui@1.0.0-beta.6/empty","pragmate-ui@1.0.0-beta.6/components","@aimpact/ailearn-app@0.1.13/components/ui","pragmate-ui@1.0.0-beta.6/list","pragmate-ui@1.0.0-beta.6/form","framer-motion@10.18.0","pragmate-ui@1.0.0-beta.6/modal","pragmate-ui@1.0.0-beta.6/icons","@aimpact/ailearn-app@0.1.13/components/icons","pragmate-ui@1.0.0-beta.6/collapsible","@beyond-js/kernel@0.1.9/routing","pragmate-ui@1.0.0-beta.6/toast","pragmate-ui@1.0.0-beta.6/chips","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.1.13/components/cover-image.code","@aimpact/ailearn-app@0.1.13/main-layout.widget"],function(l,e){var t,a,n,i,o,r,c,s,u,d,m,p,f,v,y,g,h,E,x,C,b;return l({Header:void 0,ModuleOverview:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){i=e},function(e){o=e},function(e){r=e},function(e){c=e},function(e){s=e},function(e){u=e},function(e){d=e},function(e){m=e},function(e){p=e},function(e){f=e},function(e){v=e},function(e){y=e},function(e){g=e},function(e){h=e},function(e){E=e},function(e){x=e}],execute:function(){b=t.Bundle,(C=new b({module:{vspecifier:"@aimpact/ailearn-app@0.1.13/modules/management/overview",multibundle:!0},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/styles",a],["react",n],["pragmate-ui/empty",i],["pragmate-ui/components",o],["@aimpact/ailearn-app/components/ui",r],["pragmate-ui/list",c],["pragmate-ui/form",s],["framer-motion",u],["pragmate-ui/modal",d],["pragmate-ui/icons",m],["@aimpact/ailearn-app/components/icons",p],["pragmate-ui/collapsible",f],["@beyond-js/kernel/routing",v],["pragmate-ui/toast",y],["pragmate-ui/chips",g],["@beyond-js/react-18-widgets/hooks",h],["@aimpact/ailearn-app/components/cover-image.code",E],["@aimpact/ailearn-app/main-layout.widget",x]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.13/modules/management/overview.code"),(b=new Map).set("./activities/empty",{hash:3049423641,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyActivityList=function(){var{texts:e,toggleModal:t}=(0,i.useModuleContext)();return a.default.createElement("div",{className:"module-activities__list"},a.default.createElement("header",{className:"module__activity-list__header"},a.default.createElement("h2",null,e.module.activities.title),a.default.createElement(o.TourStep,{texts:e.moduleTour,name:"addActivity"},a.default.createElement(n.Button,{variant:"link",icon:"add",onClick:t},e.module.actions.addActivity))),a.default.createElement(o.TourStep,{texts:e.moduleTour,name:"activities",as:"div"},a.default.createElement(l.Empty,null,a.default.createElement("h4",null,e.module.activities.empty.title),a.default.createElement("span",null,e.module.activities.empty.text))))};var a=e("react"),l=e("pragmate-ui/empty"),n=e("pragmate-ui/components"),i=e("../context"),o=e("@aimpact/ailearn-app/components/ui")}}),b.set("./activities/index",{hash:3340430950,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleActivities=function(){let{texts:e,activities:t,onSubmit:a,store:l,toggleModal:n}=(0,d.useModuleContext)(),[i,o]=c.default.useState(t),[,r]=c.default.useState(null);return t.length?c.default.createElement(c.default.Fragment,null,c.default.createElement("header",{className:"module__activity-list__header"},c.default.createElement("h2",null,e.activities.title),c.default.createElement(y.TourStep,{texts:e.moduleTour,name:"addActivity",as:"div"},c.default.createElement(u.Button,{variant:"link",icon:"add",onClick:n},e.actions.add))),c.default.createElement(y.TourStep,{texts:e.moduleTour,name:"activities",as:"div"},c.default.createElement(p.Form,{onSubmit:a},c.default.createElement(v.Reorder.Group,{as:"div",values:i,onReorder:e=>{r(!0),o(e),l.model.activities.reorder(e)}},c.default.createElement(s.List,{className:"module-activity-list",specs:o,items:i,control:m.ModuleActivity}))))):c.default.createElement(f.EmptyActivityList,null)};var c=e("react"),s=e("pragmate-ui/list"),u=e("pragmate-ui/components"),d=e("../context"),m=e("./list/item"),p=e("pragmate-ui/form"),f=e("./empty"),v=e("framer-motion"),y=e("@aimpact/ailearn-app/components/ui")}}),b.set("./activities/list/item/delete-modal",{hash:1701603921,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DeleteModal=function({onClose:e,onConfirm:t}){let{texts:a,store:{globalTexts:{actions:l}}}=(0,r.useModuleContext)(),[,n]=o.default.useState(!1);return o.default.createElement(i.ConfirmModal,{onConfirm:async()=>{try{n(!0),await t(),n(!1)}catch(e){console.error(e)}finally{e()}},centered:!0,onCancel:e,actions:{confirm:{variant:"primary",label:l.confirm},cancel:{label:l.cancel,variant:"primary",bordered:!0}},show:!0,title:a.activities.delete.title,text:a.activities.delete.subtitle})};var i=e("pragmate-ui/modal"),o=e("react"),r=e("../../../context")}}),b.set("./activities/list/item/header",{hash:3913417097,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityListHeader=function({openDeleteModal:t,activity:a,controls:l}){let{texts:{actions:e,activities:n},store:i}=(0,u.useModuleContext)(),o=s.default.useRef(null),r="activity-type__image image--"+a.type,c="activity__state state--"+a.state;return s.default.useEffect(()=>{let e=e=>e.preventDefault(),t=o.current;if(t)return t.addEventListener("touchstart",e,{passive:!1}),()=>{t.removeEventListener("touchstart",e,{passive:!1})}},[o]),s.default.createElement(p.CollapsibleHeader,null,s.default.createElement("header",{className:"flex-container flex-space-between flex-vertical-center"},s.default.createElement("div",{className:"header__main-content"},s.default.createElement("div",{onPointerDown:e=>l.start(e),ref:o,className:"drag-icon__container"},s.default.createElement(d.Icon,{icon:"drag",className:"drag-bullet-point"})),s.default.createElement("section",{className:r},s.default.createElement(m.AppIcon,{icon:m.ICONS[a.type]})),s.default.createElement("div",{className:"activity__data-container flex-container flex-space-between"},s.default.createElement("section",{className:"activity__name"},s.default.createElement("span",{className:"activity__type"},n.types[a.type]),s.default.createElement("h6",null,a.title)))),s.default.createElement("div",{className:"activity__details "},s.default.createElement("div",{className:c},n.states[a.state]),s.default.createElement("div",{className:"actions"},s.default.createElement(d.IconButton,{title:e.edit,icon:"edit",className:"circle",onClick:e=>{e.stopPropagation(),i.editActivity(a),e=i.model.activities.items.find(e=>e.id===a.id),i.editActivity(e),f.routing.pushState(`/modules/management?id=${i.model.id}&activityId=`+a.id)}}),s.default.createElement(d.IconButton,{title:e.delete,icon:"delete",className:"circle",onClick:e=>{e.stopPropagation(),t()}})))))};var s=e("react"),u=e("../../../context"),d=e("pragmate-ui/icons"),m=e("@aimpact/ailearn-app/components/icons"),p=e("pragmate-ui/collapsible"),f=e("@beyond-js/kernel/routing")}}),b.set("./activities/list/item/index",{hash:707022477,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleActivity=function({item:t}){let{texts:{activities:e},store:a}=(0,m.useModuleContext)(),l=(0,u.useRef)(null),n=(0,h.useDragControls)(),[i,o]=u.default.useState(!1),[r,c]=u.default.useState(!1),s=()=>c(!r);return u.default.createElement(h.Reorder.Item,{value:t,className:"activity__item",dragListener:!1,dragControls:n,onDragEnd:()=>{o(!1)},as:"div"},u.default.createElement(p.CollapsibleContainer,{onToggle:()=>!i},u.default.createElement("article",{className:"activity-item",ref:l},u.default.createElement(f.ActivityListHeader,{openDeleteModal:s,activity:t,controls:n}),u.default.createElement(p.CollapsibleContent,{className:"activity__pane-content"},t.specs.empty&&!t.description?u.default.createElement("h6",null,e.activity.empty):u.default.createElement(u.default.Fragment,null,u.default.createElement(g.Property,{name:e.objective,value:t.specs.objective}),u.default.createElement(g.Property,{name:e.description,value:t.description}),u.default.createElement(d.ActivitySpecs,{type:t.type,specs:t.specs})))),r&&u.default.createElement(y.DeleteModal,{onConfirm:e=>{try{l.current.classList.add("fade-out"),a.model.activities.remove(t.id)}catch(e){console.error(e),v.toast.error(e.message)}},onClose:s})))};var u=e("react"),d=e("./specs"),m=e("../../../context"),p=e("pragmate-ui/collapsible"),f=e("./header"),v=e("pragmate-ui/toast"),y=e("./delete-modal"),g=e("./property"),h=e("framer-motion")}}),b.set("./activities/list/item/property",{hash:2437299253,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Property=function({name:e,value:t}){return t?a.default.createElement("div",null,a.default.createElement("h6",null,e),a.default.createElement("span",null,t)):null};var a=e("react")}}),b.set("./activities/list/item/specs/index",{hash:3192841847,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivitySpecs=function({specs:e,type:t}){return a.default.createElement(a.default.Fragment,null,e.kind&&a.default.createElement(l.Chip,{variant:"primary"},e.kind),a.default.createElement(n.SpecsList,{specs:e,type:t}))};var a=e("react"),l=e("pragmate-ui/chips"),n=e("./list")}}),b.set("./activities/list/item/specs/list",{hash:3707831496,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SpecsList=function({type:e,specs:t}){var a,l=(0,r.useModuleContext)().texts.activities,n={"content-theory":["topics",c],"multiple-choice":["questions",s],spoken:["criterias",c]};return!n[e]||([n,a]=n[e],!(e="content-theory"===e&&t.hasOwnProperty("keyConcepts")?t.keyConcepts:t[n]))||Array.isArray(e)&&!e.length?null:i.default.createElement(i.default.Fragment,null,i.default.createElement("h6",null,l[n]),i.default.createElement(o.List,{className:"questions-list",items:e,control:a}))};var i=e("react"),o=e("pragmate-ui/list"),r=e("../../../../context");let c=({data:e})=>i.default.createElement("li",null,e),s=({data:e})=>(e=e.question,i.default.createElement("li",null,e))}}),b.set("./activities/list/modal-selection/context",{hash:3888096406,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useCreateActivityContext=t.CreateActivityContext=void 0;var a=e("react");let l=t.CreateActivityContext=a.default.createContext({});t.useCreateActivityContext=()=>a.default.useContext(l)}}),b.set("./activities/list/modal-selection/index",{hash:4247845884,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModalSelection=function({show:e,onClose:t}){let a=(0,m.useModuleContext)().store,[l,n]=d.default.useState(null),[i,o]=d.default.useState(null),[r,c]=d.default.useState("list");var s;return e?(e=async(e,t=!1)=>(e=await a.model.activities.add(e,t),n(e),e),s=()=>{c("list"),t()},a.model.valid?(e={onClose:t,activity:l,createActivity:e,setActivity:n,navigate:e=>{e||console.error("Activity not found"),a.editActivity(e),f.routing.pushState(a.url+"&activityId="+e.id),t()},setView:c,selected:i,setSelected:o},d.default.createElement(y.CreateActivityContext.Provider,{value:e},d.default.createElement(u.Modal,{closeBackdrop:!1,show:!0,onClose:s},d.default.createElement(E.ConditionalContainer,{condition:r,options:{list:d.default.createElement(v.ModalActivityList,{onClose:s}),ai:d.default.createElement(g.ModalActivitySuggestions,null),requestCredits:d.default.createElement(h.RequestCreditsContainer,null)}})))):d.default.createElement(p.ModalValidation,{onClose:s})):null};var u=e("pragmate-ui/modal"),d=e("react"),m=e("../../../context"),p=e("./validation"),f=e("@beyond-js/kernel/routing"),v=e("./list"),y=e("./context"),g=e("./suggestions"),h=e("./request-credits"),E=e("pragmate-ui/components")}}),b.set("./activities/list/modal-selection/item",{hash:2879810046,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SelectionActivityItem=void 0;var i=e("react"),o=e("../../../context"),r=e("@aimpact/ailearn-app/components/icons"),c=e("pragmate-ui/icons");t.SelectionActivityItem=({item:t,selected:e,setSelected:a})=>{var l=(0,o.useModuleContext)().texts,n=(console.log(1,e),r.ICONS[t]);return i.default.createElement("li",{className:"activity__selection-item activity--"+t+(t===e?" selected":""),onClick:e=>{a(t)}},i.default.createElement("div",{className:"activity-type__image image--"+t},i.default.createElement(c.Icon,{icon:n})),i.default.createElement("div",null,i.default.createElement("h6",null,l.activities.types[t]),i.default.createElement("span",null,l.activities.descriptionTypes[t])))}}}),b.set("./activities/list/modal-selection/list",{hash:1059129825,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModalActivityList=function({}){let{store:t,texts:e}=(0,c.useModuleContext)(),{setView:a,navigate:l,createActivity:n,selected:i,setSelected:o}=(0,m.useCreateActivityContext)();return r.default.createElement("div",null,r.default.createElement("h3",null,e.activities.createModal.title),r.default.createElement(s.List,{className:"module-activity-list",specs:{selected:i,setSelected:o},items:t.model.activities.availableTypes,control:d.SelectionActivityItem}),r.default.createElement("footer",{className:"actions flex-container gap-05"},r.default.createElement(p.Button,{variant:"primary",bordered:!0,onClick:async e=>{var t=await n(i,!0);l(t)},disabled:!i},e.actions.manual),r.default.createElement(u.AIButton,{variant:"primary",onClick:async e=>{e.preventDefault(),e.stopPropagation(),t.model.credits.total?(await n(i),a("ai")):a("requestCredits")},disabled:!i,ensure:!1},e.actions.generate)))};var r=e("react"),c=e("../../../context"),s=e("pragmate-ui/list"),u=e("@aimpact/ailearn-app/components/ui"),d=e("./item"),m=e("./context"),p=e("pragmate-ui/components")}}),b.set("./activities/list/modal-selection/request-credits",{hash:2337899099,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RequestCreditsContainer=function(){let{onClose:e,setView:t,createActivity:a,selected:l}=(0,c.useCreateActivityContext)(),n=(0,s.useModuleContext)().store,i={...n.globalTexts};i.actions.cancel=n.globalTexts.actions.back;return o.default.createElement(o.default.Fragment,null,o.default.createElement(r.RequestCreditsForm,{onConsume:n.model.consumeCoins,globalTexts:i,owner:n.model.owner,onClose:e,onCancel:()=>t("list"),onSuccess:async()=>{await a(l),t("ai")}}))};var o=e("react"),r=e("@aimpact/ailearn-app/components/ui"),c=e("./context"),s=e("../../../context")}}),b.set("./activities/list/modal-selection/suggestions",{hash:3605372254,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModalActivitySuggestions=function(){let e=(0,p.useModuleContext)().texts,{activity:t,navigate:a,setView:l}=(0,f.useCreateActivityContext)(),[n,i]=s.default.useState(!1),[o,r]=s.default.useState(""),c={onChange:e=>{r(e.currentTarget.value)},onClick:async e=>{try{i(!0),await t.generate(o),a(t)}catch(e){console.error(e)}finally{setTimeout(()=>{i(!1)},2e3)}}};return s.default.createElement(s.default.Fragment,null,s.default.createElement(u.Form,null,s.default.createElement("header",null,s.default.createElement("h3",null,e.refine.title),s.default.createElement("p",null,e.refine.description),s.default.createElement("p",null,e.refine.description2)),s.default.createElement(u.Textarea,{label:e.refine.textarea.label,name:"observations",value:o,onChange:c.onChange,placeholder:e.refine.textarea.placeholder})),s.default.createElement("footer",{className:"actions"},s.default.createElement(m.Button,{variant:"primary",bordered:!0,onClick:()=>l("list")},e.actions.back),s.default.createElement(m.Button,{variant:"primary",onClick:c.onClick},e.actions.generate)),s.default.createElement(d.ProcessContainer,{fetching:n}))};var s=e("react"),u=e("pragmate-ui/form"),d=e("@aimpact/ailearn-app/components/ui"),m=e("pragmate-ui/components"),p=e("../../../context"),f=e("./context")}}),b.set("./activities/list/modal-selection/validation",{hash:4222962394,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModalValidation=function({onClose:e}){var t=(0,n.useModuleContext)().texts;return l.default.createElement(a.AlertModal,{show:!0,onClose:e},l.default.createElement("div",null,l.default.createElement("h3",null,t.activities.createModal.validationTitle),l.default.createElement("p",null,t.activities.createModal.validation)))};var a=e("pragmate-ui/modal"),l=e("react"),n=e("../../../context")}}),b.set("./body/description",{hash:1658927461,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleDescription=function({}){let{texts:{module:e,moduleTour:t},store:a}=(0,o.useModuleContext)(),[l,n]=i.default.useState(a.model.description);return i.default.createElement(r.TourStep,{name:"description",texts:t,className:"module-property"},i.default.createElement("h6",null,e.description.label),i.default.createElement(r.ContentEditable,{name:"description",placeholder:e.description.placeholder,onSave:async e=>{e=e.target,n(e.value),a.save({[e.name]:e.value})},selector:"p",content:l}))};var i=e("react"),o=e("../context"),r=e("@aimpact/ailearn-app/components/ui")}}),b.set("./body/index",{hash:3646264377,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleData=function(){var{store:e,texts:{module:t}}=(0,l.useModuleContext)();return(0,n.useBinder)([e.model],()=>{},"activities.updated"),a.default.createElement("section",null,a.default.createElement("div",{className:"module-property"},a.default.createElement("h6",null,t.objective,":"),a.default.createElement("p",null," ",e.model.objective)),a.default.createElement(i.ModuleDescription,null))};var a=e("react"),l=e("../context"),n=e("@beyond-js/react-18-widgets/hooks"),i=e("./description")}}),b.set("./context",{hash:2525156511,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");let l=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(l)}}),b.set("./header",{hash:1520979135,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){let{texts:e,store:t,texts:{}}=(0,c.useModuleContext)(),[a,l]=r.default.useState(t.model.title??""),[n,i]=r.default.useState(t.model.picture);return(0,d.useBinder)([t.model],()=>i(t.model.picture),"image.generated"),r.default.createElement(r.default.Fragment,null,r.default.createElement("section",{className:"section-actions__container actions-end pt-0 m-0"},r.default.createElement(s.PublishModule,null)),r.default.createElement("header",{className:"header-module__container flex-container flex-space-between"},r.default.createElement("section",{className:"header-container module-header-description "},r.default.createElement(u.CoverImage,{title:e.picture.title,description:e.picture.description,suggestions:t.model.pictureSuggestions,picture:n,onGenerate:e=>m.LayoutBroker.ensureCredits(e=>t.model.generatePicture(e),e)}),r.default.createElement("div",null,r.default.createElement(o.ContentEditable,{name:"title",as:"h3",onSave:e=>{l(e.target.value),t.save({title:e.target.value})},content:a,placeholder:e.module.title}),r.default.createElement("div",{className:"module__owner"},r.default.createElement("strong",null,e.module.owner,": "),t.model.owner?.name)))))};var o=e("@aimpact/ailearn-app/components/ui"),r=e("react"),c=e("./context"),s=e("./publish"),u=e("@aimpact/ailearn-app/components/cover-image.code"),d=e("@beyond-js/react-18-widgets/hooks"),m=e("@aimpact/ailearn-app/main-layout.widget")}}),b.set("./index",{hash:2848134042,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleOverview=function(e){let{store:t,fetching:a}=e,[l,n]=(0,d.useTexts)(m.module.specifier),[i,o]=c.useState(!1),r;if(l)return r={store:t,texts:n,showModal:i,toggleModal:e=()=>o(!i),activities:t.model.activities.items},c.createElement(v.PageContainer,{className:a?"is-fetching":"",fetching:a&&!!t.model?.activities.length},c.createElement(s.ModuleContext.Provider,{value:r},c.createElement(u.Header,null),c.createElement("div",{className:"app-module-creation-page"},c.createElement(p.ModuleData,null),c.createElement(f.ModuleActivities,null)),c.createElement(y.ModalSelection,{show:i,onClose:e})))};var c=e("react"),s=e("./context"),u=e("./header"),d=e("@beyond-js/react-18-widgets/hooks"),m=e("beyond_context"),p=e("./body"),f=e("./activities"),v=e("@aimpact/ailearn-app/components/ui"),y=e("./activities/list/modal-selection")}}),b.set("./preload",{hash:3382098941,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Preload=function(){return a.default.createElement(n.AnimatedContainer,null,a.default.createElement(n.PageContainer,null,a.default.createElement("section",null,a.default.createElement("div",{className:"section-actions__container actions-end border-top"},a.default.createElement(l.Button,{variant:"primary"})),a.default.createElement("header",{className:"header-module__container flex-container flex-space-between"},a.default.createElement("section",{className:"header-container module-header-description "},a.default.createElement("div",{className:"image-preload"}),a.default.createElement("div",null,a.default.createElement(n.ContentEditable,{name:"title",as:"h3"},a.default.createElement(n.SkeletonText,{height:"10px",width:"100px"})),a.default.createElement("div",{className:"module__owner"},a.default.createElement(n.SkeletonText,{height:"5px",width:"60px"}))))))))};var a=e("react"),l=e("pragmate-ui/components"),n=e("@aimpact/ailearn-app/components/ui")}}),b.set("./publish",{hash:2417245294,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PublishModule=function(){let{store:e,texts:t}=(0,n.useModuleContext)(),a={disabled:"draft"!==e.model.type||!e.model.completed};return l.default.createElement(s.TourStep,{texts:t.moduleTour,name:"publish",index:10},l.default.createElement("div",{className:"publish-action__container"},l.default.createElement(i.Button,{fetching:e.fetching,onClick:async()=>{try{(await e.model.publish()).status?(o.toast.success(t.toast.modulePublished),r.routing.replaceState({},null,"/modules/list?tab=published")):c.LayoutBroker.showMessage("error",t.errors.CONTACT_ADMIN)}catch(e){console.log(e),o.toast.error(t.toast.errorPublishingModule)}},variant:"primary",...a},t.actions.publish)))};var l=e("react"),n=e("./context"),i=e("pragmate-ui/components"),o=e("pragmate-ui/toast"),r=e("@beyond-js/kernel/routing"),c=e("@aimpact/ailearn-app/main-layout.widget"),s=e("@aimpact/ailearn-app/components/ui")}}),C.exports.descriptor=[{im:"./header",from:"Header",name:"Header"},{im:"./index",from:"ModuleOverview",name:"ModuleOverview"}],C.exports.process=function({require:e,prop:t,value:a}){!e&&"Header"!==t||l("Header",e?e("./header").Header:a),!e&&"ModuleOverview"!==t||l("ModuleOverview",e?e("./index").ModuleOverview:a)},l("__beyond_pkg",C),l("hmr",new function(){this.on=(e,t)=>C.hmr.on(e,t),this.off=(e,t)=>C.hmr.off(e,t)}),C.initialise(b)}}});