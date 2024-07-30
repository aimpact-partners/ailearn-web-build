System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-app@0.1.0-dev.06/main-layout.widget","react@18.2.0","@aimpact/ailearn-sdk@1.0.0/learning-modules","@beyond-js/reactive@1.2.0/model","@aimpact/chat-sdk@1.0.1/session","@beyond-js/kernel@0.1.9/texts","pragmate-ui@1.0.0-beta.1/components","pragmate-ui@1.0.0-beta.1/form","@aimpact/ailearn-app@0.1.0-dev.06/components/ui","pragmate-ui@1.0.0-beta.1/list","pragmate-ui@1.0.0-beta.1/modal","framer-motion@10.18.0","@aimpact/ailearn-app@0.1.0-dev.06/components/icons","pragmate-ui@1.0.0-beta.1/icons","pragmate-ui@1.0.0-beta.1/alert","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.2/shared/hooks","pragmate-ui@1.0.0-beta.1/form/react-select","@beyond-js/kernel@0.1.9/routing"],function(n,e){var t,a,r,o,i,s,l,c,u,d,m,f,v,g,p,h,b,x,y,E,C,w,j,_,M;return n({Controller:void 0,AIButton:void 0,AIIconButton:void 0,DraftContainer:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){o=e},function(e){i=e},function(e){s=e},function(e){l=e},function(e){c=e},function(e){u=e},function(e){d=e},function(e){m=e},function(e){f=e},function(e){v=e},function(e){g=e},function(e){p=e},function(e){h=e},function(e){b=e},function(e){x=e},function(e){y=e},function(e){E=e},function(e){C=e},function(e){w=e},function(e){j=e}],execute:function(){M=a.Bundle,(_=new M({module:{vspecifier:"@aimpact/ailearn-app@0.1.0-dev.06/modules/draft",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",o],["@aimpact/ailearn-app/main-layout.widget",i],["react",s],["@aimpact/ailearn-sdk/learning-modules",l],["@beyond-js/reactive/model",c],["@aimpact/chat-sdk/session",u],["@beyond-js/kernel/texts",d],["pragmate-ui/components",m],["pragmate-ui/form",f],["@aimpact/ailearn-app/components/ui",v],["pragmate-ui/list",g],["pragmate-ui/modal",p],["framer-motion",h],["@aimpact/ailearn-app/components/icons",b],["pragmate-ui/icons",x],["pragmate-ui/alert",y],["@beyond-js/react-18-widgets/hooks",E],["@aimpact/chat/shared/hooks",C],["pragmate-ui/form/react-select",w],["@beyond-js/kernel/routing",j]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-module-objective-management",vspecifier:"@aimpact/ailearn-app@0.1.0-dev.06/modules/draft.widget",is:"page",route:"/modules/management",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.0-dev.06/modules/draft.widget"),(M=new Map).set("./controller",{hash:754132616,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),r=e("./views");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return r.View}show(){this.#store.setBreadcrumb(),this.#store.load(this.uri.qs.get("id"),this.uri.qs.get("activityId"))}hide(){this.#store.hide()}}t.Controller=o}}),M.set("./management",{hash:1108312047,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivitiesManagement=function({store:e,uri:t}){var[t,,]=n.default.useState(t.qs.get("activityId")||null),a=n.default.useRef(null);return n.default.createElement("div",null,n.default.createElement("app-modules-management",{id:e.model.id,activityId:t,ref:a}))};var n=e("react")}}),M.set("./store",{hash:3945122459,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-sdk/learning-modules"),n=e("@beyond-js/reactive/model"),r=e("@aimpact/chat-sdk/session"),o=e("@aimpact/ailearn-app/main-layout.widget"),i=e("@beyond-js/kernel/texts"),s=e("beyond_context");class l extends n.ReactiveModel{#model;#saved=!1;get saved(){return this.#saved}get model(){return this.#model}#improvements;get improvements(){return this.#improvements}get hasCredits(){return 0<this.#model.credits?.total}#improvementsSelected=new Set;get improvementsSelected(){return this.#improvementsSelected}get user(){return r.sessionWrapper.user}#currentProcess;get currentProcess(){return this.#currentProcess}get ownerships(){return[...r.sessionWrapper.user.organizations.map(e=>({value:e.id,label:e.name}))]}get moduleOwner(){if(this.model.owner)return{value:this.model.owner.id,label:this.model.owner.name}}#selected;get defaultValues(){return{audience:"",duration:45,objective:"",totalActivities:5,language:this.#model.language}}get values(){return this.#saved?this.model.getProperties():this.defaultValues}#texts=new i.CurrentTexts(s.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}#objectivesGenerated=new Map;constructor(){super(),this.reactiveProps(["fetchingDraft"]),this.#texts.on("change",this.listenTexts)}listenTexts=()=>{this.triggerEvent("change"),this.#texts.ready&&(o.LayoutBroker.breadcrumb=[[this.texts.breadcrumb.modules,"/modules/list"],[this.texts.breadcrumb.management,""]])};hide(){this.#model=void 0,super.ready=!1,this.#improvements=void 0,this.triggerEvent(),o.LayoutBroker.clear()}clearImprovements(){this.#improvements=void 0,this.triggerEvent("change")}setBreadcrumb(){var e=this.setBreadcrumb.bind(this);this.#texts.ready?(this.#texts.off("change",e),o.LayoutBroker.overlay=!1,globalThis.setTimeout(()=>{o.LayoutBroker.breadcrumb=[[this.texts.breadcrumb.modules,"/modules/list"],[this.texts.breadcrumb.management,""]]},100)):this.#texts.on("change",e)}async load(e){try{var t;e&&this.#model?.id===e||(t={type:"draft",id:e},this.#model=await a.LearningModule.get(t),this.#model.on("change",this.triggerEvent),this.#saved=!!e,o.LayoutBroker.addModel(this.#model,!0),o.LayoutBroker.canConsumeCredits=this.#saved,super.ready=!0,this.triggerEvent())}catch(e){console.error(e)}}listener(){}async save(e){return this.fetching=!0,o.LayoutBroker.addModel(this.#model,!0),await this.model.saveDraft(e),this.fetching=!1,this.triggerEvent(),this.#saved=!0,o.LayoutBroker.canConsumeCredits=!0,this.#model}async clean(){this.#model.activities.clean(),this.#saved=void 0,this.trigger("change")}async getObjectiveImprovements({objective:e}){try{this.#currentProcess="objective",this.fetching=!1;var t=await this.model.getObjectiveImprovements({objective:e});this.#improvements=t,this.triggerEvent("change")}catch(e){console.error(e)}finally{this.#currentProcess=void 0,this.fetching=!1}}async generateObjective({objective:e,improvements:t}){try{var a;return this.#currentProcess="changingObjective",this.fetching=!0,this.#objectivesGenerated.has(t)?this.#objectivesGenerated.get(t):(a=await this.model.generateObjective({objective:e,improvements:t}),this.#objectivesGenerated.set(e,a.objective),this.model.save,this.#model.objective=a.objective,this.#improvements=void 0,this.#improvementsSelected=new Set,this.triggerEvent("change"),this.#model.objective)}catch(e){console.error(e)}finally{this.#currentProcess=void 0,this.fetching=!1}}async generateModuleSuggestion(e){try{this.#currentProcess="generatingDraft",this.fetchingDraft=!0,await this.model.getModuleSuggestion({...e})}catch(e){console.error(e)}finally{this.#currentProcess=void 0,this.fetchingDraft=!1}}}t.StoreManager=l}}),M.set("./use-texts-callback",{hash:4103720571,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useTextsCallback=function(a,n){let[e,r]=s.useState(!1),[t,o]=s.useState({}),i=(s.useEffect(()=>{let t=new l.CurrentTexts(a),e=()=>{var e=t.value;o(e),r(t.ready),t.ready&&n(e)};return t.on("change",e),e(),()=>{t.on("change",e)}},[]),e&&!!t);return[i,t]};var s=e("react"),l=e("@beyond-js/kernel/texts")}}),M.set("./views/activities/context",{hash:1387262165,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModalContext=t.ModalContext=void 0;var a=e("react");let n=t.ModalContext=a.default.createContext({});t.useModalContext=()=>a.default.useContext(n)}}),M.set("./views/activities/examples",{hash:3861214077,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SuggestionExamples=function(){let t=(0,s.useModuleContext)().texts,{setView:a,setNotes:n}=(0,l.useModalContext)(),[,,]=r.default.useState(null);return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"modal__content--justified"},r.default.createElement("h3",null,t.refine.examples.title),r.default.createElement(i.List,{className:"modal__list--options-selection",items:t.refine.examples.items,control:({item:e})=>r.default.createElement("li",{className:"list__item"},r.default.createElement("span",null,e),r.default.createElement("div",null,r.default.createElement(o.Button,{bordered:!0,variant:"primary",onClick:()=>{n(e),a("suggestions")}},t.refine.examples.actions.select)))}),r.default.createElement("div",{className:"flex-container flex-end mt-30"},r.default.createElement("div",{className:"modal__actions"},r.default.createElement(o.Button,{variant:"default",onClick:()=>a("selection")},t.refine.examples.actions.back)))))};var r=e("react"),o=e("pragmate-ui/components"),i=e("pragmate-ui/list"),s=e("../context"),l=e("./context")}}),M.set("./views/activities/generation-form",{hash:3851986133,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.GenerationForm=function({onSave:e}){let{texts:t,ensureCredits:a}=(0,s.useModuleContext)(),n=(0,l.useModalContext)().setView,[,,]=r.default.useState(!1);return r.default.createElement("div",{className:"modal__header"},r.default.createElement("header",null,r.default.createElement("h3",null,t.wizard.modalSuggestions.title),r.default.createElement("div",{className:"description__content"},r.default.createElement("span",null,t.wizard.modalSuggestions.description))),r.default.createElement("footer",{className:"actions mt-30 flex-container flex-center"},r.default.createElement(o.Button,{variant:"primary",bordered:!0,onClick:e},t.wizard.modalSuggestions.buttons.manual),r.default.createElement(i.AIButton,{variant:"primary",onClick:()=>a(()=>n("suggestions"))},t.wizard.modalSuggestions.buttons.generate)))};var r=e("react"),o=e("pragmate-ui/components"),i=e("../components/ai-button"),s=e("../context"),l=e("./context")}}),M.set("./views/activities/index",{hash:2897178663,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModalActivitiesGeneration=function({show:e,onClose:t}){let{texts:a,store:n,values:r}=(0,h.useModuleContext)(),[o,i]=v.default.useState(!1),[s,l]=v.default.useState(""),[c,u]=v.default.useState("selection"),[d,m]=v.default.useState("");var f;return e?(f=(f={selection:b.GenerationForm,suggestions:y.SuggestionsForm,examples:C.SuggestionExamples})[c],v.default.createElement(g.Modal,{show:!0,onClose:()=>{l(""),u("selection"),t()},closeBackdrop:!(e=async()=>{try{(await n.model.saveDraft({state:"confirmed"})).status?t():m("default")}catch(e){m("default")}})},v.default.createElement(w.ErrorRenderer,{error:d,texts:a.refine.errors}),v.default.createElement(E.ModalContext.Provider,{value:{view:c,onGenerate:async()=>{try{i(!0),await n.generateModuleSuggestion({...r,notes:s})}catch(e){console.error(e)}finally{i(!1)}},setView:u,notes:s,setNotes:l}},v.default.createElement(x.AnimatePresence,null,v.default.createElement(f,{onSave:e,key:"control"}),v.default.createElement(p.ProcessContainer,{key:"container",fetching:o}))))):null};var v=e("react"),g=e("pragmate-ui/modal"),p=e("@aimpact/ailearn-app/components/ui"),h=e("../context"),b=e("./generation-form"),x=e("framer-motion"),y=e("./suggestions"),E=e("./context"),C=e("./examples"),w=e("../components/error")}}),M.set("./views/activities/suggestions",{hash:1019468326,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SuggestionsForm=function(){let e=(0,d.useModuleContext)().texts,{setView:t,notes:a,setNotes:n,onGenerate:r}=(0,m.useModalContext)(),[o,,]=s.default.useState(!1),i={onChange:e=>{n(e.currentTarget.value)},onClick:r,setView:()=>t("examples"),onBack:()=>t("selection")};return s.default.createElement(s.default.Fragment,null,s.default.createElement(l.Form,{className:"modal__content--justified"},s.default.createElement("header",null,s.default.createElement("h3",null,e.refine.activities.title),s.default.createElement("p",null,e.refine.activities.description)),s.default.createElement(l.Textarea,{label:e.refine.textarea.label,name:"observations",value:a,onChange:i.onChange,placeholder:e.refine.textarea.placeholder})),s.default.createElement("footer",{className:"actions"},s.default.createElement(u.Button,{variant:"primary",onClick:i.onClick},e.actions.generate)),s.default.createElement(u.Button,{variant:"outline",onClick:i.onBack},e.actions.back),s.default.createElement(c.ProcessContainer,{fetching:o}))};var s=e("react"),l=e("pragmate-ui/form"),c=e("@aimpact/ailearn-app/components/ui"),u=e("pragmate-ui/components"),d=e("../context"),m=e("./context")}}),M.set("./views/coins/alert",{hash:100216912,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoinsAlert=function({show:e,onClose:t,texts:a}){return e?(a=a.coins.alert,n.default.createElement(r.AlertModal,{show:!0,buttonLabel:a.action,onConfirm:t,onClose:t},n.default.createElement("header",null,n.default.createElement("h3",null,a.title),n.default.createElement(o.Battery,{percent:"100",className:"lg"}),n.default.createElement("p",null,a.description)))):null};var n=e("react"),r=e("pragmate-ui/modal"),o=e("@aimpact/ailearn-app/components/ui")}}),M.set("./views/coins/coins-modal",{hash:2894868445,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CoinsModal=function({store:e,show:t,onClose:a,texts:n}){if(!t)return null;let[,r]=s.default.useState(!1),[o,i]=s.default.useState();n=n.coins.modal;return s.default.createElement(l.ConfirmModal,{show:!0,className:"modal-sm",actions:{confirm:{label:n.actions.confirm,variant:"primary"},cancel:{label:n.actions.cancel,variant:"primary",bordered:!0}},onConfirm:async()=>{try{r(!0),await e.model.getCredits(),a()}catch(e){i(n.errors.noCredits)}finally{r(!1)}},onCancel:a,onClose:a},s.default.createElement("header",null,s.default.createElement("h3",null,n.title),s.default.createElement(c.ErrorRenderer,{error:o}),s.default.createElement(c.Battery,{percent:"100",className:"lg"}),s.default.createElement("p",null,n.description)))};var s=e("react"),l=e("pragmate-ui/modal"),c=e("@aimpact/ailearn-app/components/ui")}}),M.set("./views/components/ai-button",{hash:86064447,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AIButton=function({children:e,onClick:t,...a}){return n.default.createElement(o.Button,{...a,icon:r.ICONS.aiStars,onClick:()=>s.LayoutBroker.ensureCredits(t)},e)},t.AIIconButton=function({children:e,onClick:t,...a}){return n.default.createElement(i.IconButton,{...a,icon:r.ICONS.aiStars,onClick:()=>s.LayoutBroker.ensureCredits(t)},e)};var n=e("react"),r=e("@aimpact/ailearn-app/components/icons"),o=e("pragmate-ui/components"),i=e("pragmate-ui/icons"),s=e("@aimpact/ailearn-app/main-layout.widget")}}),M.set("./views/components/error",{hash:3301282445,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorRenderer=function({texts:e,error:t}){return a.default.createElement(n.Alert,{variant:"error"},e[t])};var a=e("react"),n=e("pragmate-ui/alert")}}),M.set("./views/components/footer",{hash:584877816,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StepsFooter=function({submitLabel:e="next",onSubmit:t,disabled:a=!1,previous:n=!0}){let{texts:r,setCurrent:o,current:i}=(0,u.useModuleContext)(),s=r.actions[e];return l.default.createElement("footer",null,n&&l.default.createElement(c.Button,{variant:"primary",bordered:!0,onClick:()=>o(i-1)},r.actions.back),l.default.createElement(c.Button,{type:"submit",variant:"primary",onClick:t,disabled:a,sizing:"lg"},s))};var l=e("react"),c=e("pragmate-ui/components"),u=e("../context")}}),M.set("./views/components/html-render",{hash:3362016598,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.HtmlRender=function({children:e,tag:t="span"}){return a.default.createElement(t,{dangerouslySetInnerHTML:{__html:e}})};var a=e("react")}}),M.set("./views/components/options",{hash:369455942,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getOptions=function(e){return{audience:[[e.audience.school,e.audience.school],[e.audience.university,e.audience.university],[e.audience.company,e.audience.company]],duration:[["15",e.duration.brief],["45",e.duration.standard],["60",e.duration.extended]],language:[["en",e.languages.en],["es",e.languages.es],["pt",e.languages.pt],["fr",e.languages.fr],["de",e.languages.de]]}}}}),M.set("./views/components/radio-button",{hash:54679154,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RadioButton=function({name:n,onChange:r,label:e,selected:t=0}){let{texts:a,store:o}=(0,d.useModuleContext)(),i={disabled:o.fetching||o.model.fetching},s=(0,m.getOptions)(a),l=s[n].map(([e,t],a)=>c.default.createElement(u.Button,{name:n,...i,"data-index":a,onClick:r,key:a,value:e},t));return c.default.createElement("div",{className:"radio-button__container"},c.default.createElement("label",{htmlFor:n},e),c.default.createElement(u.ButtonGroup,{selected:t,...i},l))};var c=e("react"),u=e("pragmate-ui/components"),d=e("../context"),m=e("./options")}}),M.set("./views/context",{hash:491328270,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useSuggestionsContext=t.useModuleContext=t.useDraftManagementContext=t.SuggestionsContext=t.ModuleContext=t.DraftManagementContext=void 0;var a=e("react");let n=t.ModuleContext=a.default.createContext({}),r=(t.useModuleContext=()=>a.default.useContext(n),t.DraftManagementContext=a.default.createContext({})),o=(t.useDraftManagementContext=()=>a.default.useContext(r),t.SuggestionsContext=a.default.createContext({}));t.useSuggestionsContext=()=>a.default.useContext(o)}}),M.set("./views/form/animated-div",{hash:2040524209,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedDiv=function({children:e}={children:null,cls:""}){return a.default.createElement(n.motion.div,{className:"objective__container",initial:{opacity:0},animate:{opacity:1,transition:{duration:.3,delay:.3},y:0},exit:{transition:{duration:.3},opacity:0}},e)};var a=e("react"),n=e("framer-motion")}}),M.set("./views/form/container",{hash:858841082,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DraftContainer=function({store:e}){let[t,a]=(0,E.useTexts)(C.module.specifier),[n,r]=h.useState(e.fetching),[o]=h.useState(0),[,i]=h.useState({}),[s,l]=h.useState(0),[c,u]=h.useState(e.values),[d,m]=h.useState(),[f,v]=h.useState(!1),g=(0,y.useDraftManagementContext)().ensureCredits,p;return(0,b.useBinder)([e],()=>{i({}),r(e?.model?.fetching)}),t&&e.ready?(p={store:e,onChange:e=>{u({...c,[e.currentTarget.name]:e.currentTarget.value})},texts:a,activePanel:o,current:s,setCurrent:l,error:d,ensureCredits:g,setError:m,fetching:n||f,setIsFetching:v,saved:e.saved,values:c,setValues:u},h.createElement(h.Fragment,null,h.createElement(y.ModuleContext.Provider,{value:p},h.createElement(x.PageContainer,{className:" "+(n?"is-fetching":""),fetching:n&&!!e.model?.activities.length},h.createElement(w.DraftForm,null))))):null};var h=e("react"),b=e("@beyond-js/react-18-widgets/hooks"),x=e("@aimpact/ailearn-app/components/ui"),y=e("../context"),E=e("@aimpact/chat/shared/hooks"),C=e("beyond_context"),w=e("./")}}),M.set("./views/form/fields/audience",{hash:1570412911,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AudienceField=function(){let{texts:{audience:t},store:e}=(0,c.useModuleContext)(),{setValues:a,values:n}=(0,c.useModuleContext)(),r={value:"",label:t.input.select},o=Object.keys(t.values).map(e=>(r=e===n.audience?{value:e,label:t.values[e]}:r,{value:e,label:t.values[e]})),i={isDisabled:e.saved};return s.default.createElement("div",null,s.default.createElement("label",{htmlFor:""},t.input.label),s.default.createElement(l.ReactSelect,{name:"audience",value:n.audience,placeholder:t.input.select,options:o,onChange:t=>a(e=>({...e,audience:t.target.value})),...i}))};var s=e("react"),l=e("pragmate-ui/form/react-select"),c=e("../../context")}}),M.set("./views/form/fields/language",{hash:630405900,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LanguageField=function(){let{texts:t,store:e,texts:{},setValues:a}=(0,s.useModuleContext)(),n=["en","es"].map(e=>({value:e,label:t.languages[e]})),r={isDisabled:e.saved};return o.default.createElement("div",null,o.default.createElement("label",{htmlFor:""},t.languages.select.label),o.default.createElement(i.ReactSelect,{placeholder:t.languages.select.placeholder,value:e.model.language,name:"audience",options:n,onChange:t=>a(e=>({...e,language:t.target.value})),...r}))};var o=e("react"),i=e("pragmate-ui/form/react-select"),s=e("../../context")}}),M.set("./views/form/fields/module-length",{hash:1770237194,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DurationField=function(){let{store:e,texts:t,values:a,setValues:n}=(0,l.useModuleContext)(),r={isDisabled:e.saved},o=[{value:15,label:t.duration.brief,totalActivities:3},{value:45,label:t.duration.standard,totalActivities:5},{value:60,label:t.duration.extended,totalActivities:7}];return a?.audienceIndex&&parseInt(a.duration),a?.duration?.index&&parseInt(a.duration.index),a.duration&&o.find(e=>e.value===a.duration),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:""},t.wizard.duration.label),i.default.createElement(s.ReactSelect,{placeholder:t.wizard.duration.placeholder,onChange:t=>{let a=o.find(e=>e.value===parseInt(t.target.value));n(e=>({...e,duration:t.target.value,totalActivities:a.totalActivities}))},name:"duration",value:a.duration,...r,options:o}))};var i=e("react"),s=e("pragmate-ui/form/react-select"),l=e("../../context")}}),M.set("./views/form/fields/objective",{hash:1366466996,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ObjectiveField=function({submitted:e}){var{values:t,texts:{wizard:{messages:a,objective:n}},onChange:r}=(0,s.useModuleContext)();return o.default.createElement("div",{className:"objective-field"},o.default.createElement(i.Textarea,{onChange:r,value:t.objective,name:"objective",placeholder:n.textArea,counter:!0,maxLength:500}),e&&o.default.createElement(l.motion.div,{className:"success-text",initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}}},a.save," ",o.default.createElement(c.Icon,{icon:"check"})))};var o=e("react"),i=e("pragmate-ui/form"),s=e("../../context"),l=e("framer-motion"),c=e("pragmate-ui/icons")}}),M.set("./views/form/fields/ownership",{hash:1198927874,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OwnershipField=function(){let{texts:{wizard:e},store:{},store:n}=(0,s.useModuleContext)(),r=(0,s.useModuleContext)().setValues;e.schools.select,n.model.owner&&(n.model.owner.id,n.model.owner.name);var t=n.model.owner?.id,a={isDisabled:0===n.ownerships.length||n.saved};return o.default.createElement("div",null,o.default.createElement("label",{htmlFor:""},e.schools.label),o.default.createElement(i.ReactSelect,{value:t,placeholder:e.schools.select,name:"owner",options:n.ownerships,onChange:t=>{let a=n.user.organizations.find(e=>e.id===t.target.value);r(e=>({...e,owner:a}))},...a}))};var o=e("react"),i=e("pragmate-ui/form/react-select"),s=e("../../context")}}),M.set("./views/form/index",{hash:2945294510,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DraftForm=function(){let{values:e,error:t,store:a,texts:n,saved:r,fetching:o}=(0,v.useModuleContext)(),[i,s]=m.default.useState(!1),[l,c]=m.default.useState(!1),u=!(e.owner&&e.audience&&e.duration&&e.objective&&e.language),d=a.model.state&&r?n.actions.continue:n.actions.save;return m.default.createElement(m.default.Fragment,null,m.default.createElement(C.Form,{className:"form-create-draft__container",onSubmit:async()=>{try{(r&&"created"===a.model.state?s:(await a.save({...e,state:"created"}),y.routing.replaceState({},void 0,"/modules/management?id="+a.model.id),c))(!0)}catch(e){console.error(e)}}},m.default.createElement(j.ErrorRenderer,{error:t,texts:n}),m.default.createElement(f.AnimatedDiv,null,m.default.createElement("section",{className:"form-body"},m.default.createElement("header",{className:"wizard-form-header"},m.default.createElement("h1",null,n.wizard.introduction.title),m.default.createElement("span",null,n.wizard.introduction.subtitle)),m.default.createElement("section",{className:"wizard-first-step-container"},m.default.createElement(M.LanguageField,null),m.default.createElement(b.OwnershipField,null),m.default.createElement(p.AudienceField,null),m.default.createElement(h.DurationField,null)),m.default.createElement("div",{className:"form-wizard__objective-section"},m.default.createElement(x.ObjectiveField,{submitted:l}))),m.default.createElement(w.ObjectiveSuggestions,null),m.default.createElement("footer",null,m.default.createElement(E.Button,{type:"submit",block:!0,disabled:u,variant:"primary"},d))),m.default.createElement(g.ProcessContainer,{fetching:o})),m.default.createElement(_.ModalActivitiesGeneration,{show:i,onClose:()=>s(!1)}))};var m=e("react"),f=e("./animated-div"),v=e("../context"),g=e("@aimpact/ailearn-app/components/ui"),p=e("./fields/audience"),h=e("./fields/module-length"),b=e("./fields/ownership"),x=e("./fields/objective"),y=e("@beyond-js/kernel/routing"),E=e("pragmate-ui/components"),C=e("pragmate-ui/form"),w=e("./suggestions"),j=e("../components/error"),_=e("../activities"),M=e("./fields/language")}}),M.set("./views/form/suggestions/action",{hash:3089290480,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SuggestionsAction=function({}){let{texts:{actions:e,...t},store:a,values:n,saved:r}=(0,i.useModuleContext)();return o.default.createElement(o.default.Fragment,null,a?.improvements?.irrelevant&&o.default.createElement(s.Alert,{className:"mb-30",type:"warning"},t.suggestions.irrelevant),o.default.createElement("div",{className:"flex-container flex-center flex-05"},o.default.createElement(l.AIButton,{disabled:!r,onClick:async()=>{try{await a.getObjectiveImprovements({objective:n.objective})}catch(e){console.error(e)}},variant:"primary",bordered:!0},e.analyse)))};var o=e("react"),i=e("../../context"),s=e("pragmate-ui/alert"),l=e("../../components/ai-button")}}),M.set("./views/form/suggestions/index",{hash:3766540706,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ObjectiveSuggestions=function(){var e=(0,r.useModuleContext)().store,[t,a]=n.default.useState(!1);return!e.improvements||e.improvements.irrelevant?n.default.createElement(i.SuggestionsAction,null):n.default.createElement(r.SuggestionsContext.Provider,{value:{improvedObjective:t,setImprovedObjective:a}},n.default.createElement(o.ObjectiveImproved,null),n.default.createElement(s.SuggestionsList,{block:!t}))};var n=e("react"),r=e("../../context"),o=e("./objective"),i=e("./action"),s=e("./list")}}),M.set("./views/form/suggestions/list/index",{hash:2623037919,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SuggestionsList=function({block:e}){let{texts:{suggestions:t,actions:a},store:n,values:r,setValues:o}=(0,v.useModuleContext)(),i=(0,v.useSuggestionsContext)().setImprovedObjective,[s,l]=d.default.useState(new Set),c,u;return n.improvements?(c=n.improvements.suggestions,u={disabled:!s.size||e},d.default.createElement("section",{className:"objective-suggestions__container"+(e?" is-disabled":"")},d.default.createElement(f.List,{className:"objective-suggestions__list",specs:{selected:s,setSelected:l,block:e},control:g.ObjectiveSuggestionsItem,items:c}),d.default.createElement("div",{className:"section__actions"},d.default.createElement("span",null,t.total,": ",s.size),d.default.createElement("div",{className:"section__actions"},d.default.createElement(m.Button,{disabled:e,onClick:()=>{l(new Set),i(!1),n.clearImprovements()},variant:"primary",bordered:!0},a.removeSuggestions),d.default.createElement(m.Button,{...u,variant:"primary",onClick:async e=>{var t={objective:r.objective,improvements:Array.from(s).map(e=>n.improvements.suggestions[e].suggestion)};await n.generateObjective(t),i(!1),o(e=>({...e,objective:n.model.objective}))}},a.applySuggestions))))):null};var d=e("react"),m=e("pragmate-ui/components"),f=e("pragmate-ui/list"),v=e("../../../context"),g=e("./item")}}),M.set("./views/form/suggestions/list/item",{hash:4075705557,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ObjectiveSuggestionsItem=function({index:e,item:t,specs:{block:a,selected:n,setSelected:r}}){let{store:o,texts:{suggestions:i}}=(0,u.useModuleContext)(),s="suggestion__item"+(n.has(e)?" selected":""),l={className:s,"data-index":e,onClick:void 0};return a||(l.onClick=e=>{e.stopPropagation();var e=parseInt(e.currentTarget.dataset.index),t=n;t.has(e)?t.delete(e):t.add(e),o.improvementsSelected.add(e),r(new Set(t))}),c.default.createElement("div",{className:s,"data-index":e,...l},c.default.createElement("header",null,c.default.createElement("span",{className:"suggestion-label"},i.origin),c.default.createElement("span",{className:"suggestion-reference"},t.reference)),c.default.createElement("div",{className:"item__content"},c.default.createElement("header",null,c.default.createElement("span",{className:"suggestion-label"},i.label)),t.suggestion))};var c=e("react"),u=e("../../../context")}}),M.set("./views/form/suggestions/objective",{hash:801427851,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ObjectiveImproved=function(){let{texts:{suggestions:{objective:{actions:e}}},store:t,setValues:a,values:n,store:{improvements:r}}=(0,u.useModuleContext)(),{improvedObjective:o,setImprovedObjective:i}=(0,u.useSuggestionsContext)(),s=r.improved,l;return!r||o?null:(l=async e=>{"true"===e.currentTarget.value&&(await t.save({objective:s}),a({...n,objective:s})),i(!0)},c.default.createElement("div",{className:"objective-suggestion"},c.default.createElement("h3",null,s),c.default.createElement("div",{className:"objective-suggestion__actions"},c.default.createElement("span",{className:"primary-text"},e.label),c.default.createElement("div",{className:"section__actions"},c.default.createElement(d.Button,{variant:"primary",bordered:!0,value:"false",onClick:l},e.cancel),c.default.createElement(d.Button,{variant:"primary",value:"true",onClick:l},e.confirm)))))};var c=e("react"),u=e("../../context"),d=e("pragmate-ui/components")}}),M.set("./views/index",{hash:1274783086,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function(e){let t=e.store,[,a]=s.useState(t.fetching),[,n]=s.useState({}),r=t.texts,o,i;return(0,l.useBinder)([t],()=>{n({}),a(t?.model?.fetching)}),t.ready?(o="confirmed"===t.model.state?u.ActivitiesManagement:c.DraftContainer,i={texts:r,store:t,ensureCredits:d.LayoutBroker.ensureCredits},s.createElement(s.Fragment,null,s.createElement(m.DraftManagementContext.Provider,{value:i},s.createElement(o,{store:t,uri:e.uri})))):null};var s=e("react"),l=e("@beyond-js/react-18-widgets/hooks"),c=e("./form/container"),u=e("../management"),d=e("@aimpact/ailearn-app/main-layout.widget"),m=e("./context")}}),_.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/components/ai-button",from:"AIButton",name:"AIButton"},{im:"./views/components/ai-button",from:"AIIconButton",name:"AIIconButton"},{im:"./views/form/container",from:"DraftContainer",name:"DraftContainer"},{im:"./views/index",from:"View",name:"View"}],_.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"AIButton"!==t||n("AIButton",e?e("./views/components/ai-button").AIButton:a),!e&&"AIIconButton"!==t||n("AIIconButton",e?e("./views/components/ai-button").AIIconButton:a),!e&&"DraftContainer"!==t||n("DraftContainer",e?e("./views/form/container").DraftContainer:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",_),n("hmr",new function(){this.on=(e,t)=>_.hmr.on(e,t),this.off=(e,t)=>_.hmr.off(e,t)}),_.initialise(M)}}});