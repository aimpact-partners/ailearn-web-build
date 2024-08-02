System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-app@0.1.0-dev.09/main-layout.widget","@aimpact/chat-sdk@1.0.1/session","@beyond-js/reactive@1.2.0/model","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-sdk@1.0.0/learning-modules","react@18.2.0","pragmate-ui@1.0.0-beta.1/components","pragmate-ui@1.0.0-beta.1/list","@aimpact/ailearn-app@0.1.0-dev.09/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","dayjs@1.11.10","pragmate-ui@1.0.0-beta.1/modal","pragmate-ui@1.0.0-beta.1/icons","@beyond-js/kernel@0.1.9/routing","pragmate-ui@1.0.0-beta.1/image","@aimpact/ailearn-app@0.1.0-dev.09/modules/assign","pragmate-ui@1.0.0-beta.1/link","pragmate-ui@1.0.0-beta.1/swiper"],function(s,e){var t,a,r,i,n,l,o,c,m,d,u,f,p,g,y,h,v,_,E,b,x,w,M,N;return s({Controller:void 0,AssignmentItem:void 0,View:void 0,LibraryItem:void 0,UserData:void 0,ModuleItem:void 0,UserCard:void 0,ProfileSection:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){i=e},function(e){n=e},function(e){l=e},function(e){o=e},function(e){c=e},function(e){m=e},function(e){d=e},function(e){u=e},function(e){f=e},function(e){p=e},function(e){g=e},function(e){y=e},function(e){h=e},function(e){v=e},function(e){_=e},function(e){E=e},function(e){b=e},function(e){x=e},function(e){w=e}],execute:function(){N=a.Bundle,(M=new N({module:{vspecifier:"@aimpact/ailearn-app@0.1.0-dev.09/home",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",i],["@aimpact/ailearn-app/main-layout.widget",n],["@aimpact/chat-sdk/session",l],["@beyond-js/reactive/model",o],["@beyond-js/kernel/texts",c],["@aimpact/ailearn-sdk/learning-modules",m],["react",d],["pragmate-ui/components",u],["pragmate-ui/list",f],["@aimpact/ailearn-app/components/ui",p],["@beyond-js/react-18-widgets/hooks",g],["dayjs",y],["pragmate-ui/modal",h],["pragmate-ui/icons",v],["@beyond-js/kernel/routing",_],["pragmate-ui/image",E],["@aimpact/ailearn-app/modules/assign",b],["pragmate-ui/link",x],["pragmate-ui/swiper",w]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"student-home",vspecifier:"@aimpact/ailearn-app@0.1.0-dev.09/home.widget",is:"page",route:"/",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.0-dev.09/home.widget"),(N=new Map).set("./controller",{hash:1066500691,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),s=e("./store"),r=e("./views"),i=e("@aimpact/ailearn-app/main-layout.widget"),n=e("@aimpact/chat-sdk/session");class l extends a.PageReactWidgetController{#store;hideTimeout=null;get Widget(){return r.View}createStore(){return this.#store=new s.StoreManager,this.#store}constructor(e){super(e),n.sessionWrapper.on("logout",this.onLogout),n.sessionWrapper.on("login",this.onLogin)}onLogout=()=>{this.#store.clear(),this.hideTimeout=void 0,n.sessionWrapper.off("logout",this.onLogout)};onLogin=()=>{n.sessionWrapper.on("logout",this.onLogout)};show(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null),i.LayoutBroker.overlay=!1,this.#store.load()}hide(){this.#store.clear()}}t.Controller=l}}),N.set("./store",{hash:233267658,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),s=e("@beyond-js/kernel/texts"),r=e("beyond_context"),i=e("@aimpact/chat-sdk/session"),n=e("@aimpact/ailearn-app/main-layout.widget"),l=e("@aimpact/ailearn-sdk/learning-modules");class o extends a.ReactiveModel{#model;get model(){return this.#model}get items(){return this.#model.assignments}#texts=new s.CurrentTexts(r.module.specifier);get texts(){return this.#texts?.value}#assignments;get assignments(){return this.#assignments}#drafts;get drafts(){return this.#drafts}#classrooms;get classrooms(){return this.#classrooms}#modules;get modules(){return this.#modules}#library;get library(){return this.#library}get user(){return i.sessionWrapper.user}get isTeacher(){return this.user?.roles.includes("teacher")}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.#texts.on("change",this.triggerEvent)}setBreadcrumb(){var e=this.setBreadcrumb.bind(this);this.#texts.ready?(this.#texts.off("change",e),n.LayoutBroker.breadcrumb=[],n.LayoutBroker.overlay=!1,globalThis.setTimeout(()=>n.LayoutBroker.breadcrumb=[],100)):this.#texts.on("change",e)}async load(){try{this.#model=i.sessionWrapper,this.setBreadcrumb();var{status:a,data:s}=await this.#model.user.getHome();a||console.log("error"),this.#drafts=s.drafts,this.#assignments=s.assignments,this.#classrooms=s.classrooms;let t=[],e=s.modules??[];this.#modules=e.map(e=>(e=new l.LearningModule(e),t.push(e.isReady),e)),await Promise.all(t),e.map((e,t)=>this.#modules[t].set(e)),this.#library=s.library,super.ready=!0,this.triggerEvent(),globalThis.store=this}catch(a){console.error(a)}}clear(){this.#drafts=[],this.#assignments=[],this.#classrooms=[],this.#modules=[],super.ready=!1,this.triggerEvent(),this.#model=void 0}}t.StoreManager=o}}),N.set("./views/aside/classrooms/empty",{hash:1484426367,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyAside=function(){var e=(0,s.useModuleContext)().texts["classrooms"];return a.default.createElement("div",{className:"aside-list__empty-container"},a.default.createElement("span",{className:"empty__list"},e.empty))};var a=e("react"),s=e("../../context")}}),N.set("./views/aside/classrooms/index",{hash:3198656142,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AsideClassrooms=function(){var e,{store:t,texts:{classrooms:a,tour:s}}=(0,i.useModuleContext)();return t.isTeacher?(e=(t=Array.isArray(t.classrooms)?t.classrooms:[]).length,r.default.createElement("div",{"data-tour":"5","data-description":s.classrooms.description,"data-title":s.classrooms.title,className:e="classrooms-container aside-list"+(0===e?" aside-list--empty":"")},r.default.createElement("header",{className:"aside-list__header"},r.default.createElement(n.Link,{href:"/classrooms/list"},r.default.createElement("h5",null,a.title)),r.default.createElement(n.Link,{href:"/classrooms/create"},a.action)),r.default.createElement(o.List,{className:"aside-list__body",items:t,control:l.AsideClassroom,empty:c.EmptyAside}))):null};var r=e("react"),i=e("../../context"),n=e("pragmate-ui/components"),l=e("./item"),o=e("pragmate-ui/list"),c=e("./empty")}}),N.set("./views/aside/classrooms/item",{hash:2334343149,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AsideClassroom=function({item:e}){var t=(0,r.useModuleContext)().texts.classrooms,a=(e.description&&""!==e.description?e:t.items).description,t=(e.name&&""!==e.name?e:t.items).name;return s.default.createElement(n.Link,{href:"/classrooms/view/"+e.id,className:"aside-list__item-container",key:e.id},s.default.createElement("article",{className:"aside-list__item",key:e.id},s.default.createElement(i.EntityImage,{ratio:"square",src:e.picture,entity:"module"}),s.default.createElement("section",{className:"item__content"},s.default.createElement("h6",null,t),s.default.createElement("p",{className:"description"},a))))};var s=e("react"),r=e("../../context"),i=e("@aimpact/ailearn-app/components/ui"),n=e("pragmate-ui/components")}}),N.set("./views/aside/drafts/empty",{hash:4014005494,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyAsideDraft=function(){var e=(0,s.useModuleContext)().texts["drafts"];return a.default.createElement("div",{className:"aside-list__empty-container drafts-container"},a.default.createElement("span",{className:"empty__list"},e.empty.description),a.default.createElement(r.Button,{variant:"primary"},e.empty.action))};var a=e("react"),s=e("../../context"),r=e("pragmate-ui/components")}}),N.set("./views/aside/drafts/index",{hash:3313557509,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AsideDrafts=function(){var e,{store:t,texts:{drafts:a,tour:s}}=(0,i.useModuleContext)();return t.isTeacher?(e=(t=Array.isArray(t.drafts)?t.drafts:[]).length,r.default.createElement("div",{"data-tour":"4","data-description":s.drafts.description,"data-title":s.drafts.title,className:e="drafts-container aside-list"+(0===e?" aside-list--empty":"")},r.default.createElement("header",{className:"aside-list__header"},r.default.createElement(l.Link,{href:"/modules/list?tab=draft"},r.default.createElement("h5",null,a.title))),r.default.createElement(n.List,{className:"aside-list__body",items:t,control:o.EmptyAsideDraft,empty:o.EmptyAsideDraft}))):null};var r=e("react"),i=e("../../context"),n=e("pragmate-ui/list"),l=e("pragmate-ui/components"),o=e("./empty")}}),N.set("./views/aside/drafts/item",{hash:1434928967,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyAsideDraft=function({item:e}){var t=(0,r.useModuleContext)().texts.classrooms,a=(e.description&&""!==e.description?e:t.items).description,t=(e.name&&""!==e.name?e:t.items).name;return s.default.createElement(n.Link,{href:"/modules/management?id="+e.id,className:"aside-list__item-container",key:e.id},s.default.createElement("article",{className:"aside-list__item",key:e.id},s.default.createElement(i.EntityImage,{ratio:"square",src:e.picture,entity:"module"}),s.default.createElement("section",{className:"item__content"},s.default.createElement("h6",null,t),s.default.createElement("p",{className:"description"},a))))};var s=e("react"),r=e("../../context"),i=e("@aimpact/ailearn-app/components/ui"),n=e("pragmate-ui/components")}}),N.set("./views/aside/index",{hash:488478691,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Aside=function(){return a.default.createElement("aside",{className:"home__aside"},a.default.createElement("div",{className:"sticky-container"},a.default.createElement(s.AsideDrafts,null),a.default.createElement(r.AsideClassrooms,null)))};var a=e("react"),s=e("./drafts"),r=e("./classrooms")}}),N.set("./views/assigments/index",{hash:3433017412,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Assignments=function(){var{assignments:e,texts:t}=(0,s.useModuleContext)().store;return e&&Array.isArray(e)&&e.length?(e=[...e].map(e=>a.default.createElement(r.AssignmentItem,{item:e,key:"assignment-"+e.id})),a.default.createElement("article",{"data-tour":"1","data-description":t.tour.assignments.description,"data-title":t.tour.assignments.title,className:"assigments-list"},a.default.createElement(i.PageTitle,{title:t.assignments.title,as:"h3"}),a.default.createElement(n.Slider,null,e))):null};var a=e("react"),s=e("../context"),r=e("./item"),i=e("@aimpact/ailearn-app/components/ui"),n=e("../slider")}}),N.set("./views/assigments/item",{hash:372228545,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AssignmentItem=function({item:e}){var t=(0,l.useModuleContext)().store["texts"],{module:a,title:s}=e;return n.default.createElement("article",{className:"entity__item"},n.default.createElement(r.EntityImage,{src:e.module?.picture,entity:"module",alt:s}),n.default.createElement("section",{className:"entity__item-content"},n.default.createElement(i.Link,{href:"/assignments/"+e.id},n.default.createElement("h4",null,a.title),n.default.createElement("span",null,a.description))),n.default.createElement("footer",{className:"entity__footer"},n.default.createElement("span",{className:"card-number__detail"},t.assignments.activities,": ",a.activities.count)))};var r=e("@aimpact/ailearn-app/components/ui"),i=e("pragmate-ui/components"),n=e("react"),l=e("../context")}}),N.set("./views/context",{hash:2793963965,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");let s=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(s)}}),N.set("./views/index",{hash:2312783643,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){let[t,a]=(0,l.useState)(e.ready),s=e.texts,r=((0,o.useBinder)([e],()=>a(e.ready)),(0,n.useDriverTour)("home",t,s?.tour?.buttons).ref);var i;return t?(i=e.model.assignments,i={store:e,fetching:e.fetching,texts:s,items:i},l.default.createElement(c.ModuleContext.Provider,{value:i},l.default.createElement(n.PageContainer,{className:"top-header"},l.default.createElement("div",{ref:r,className:"grid-container columns-8-4"},l.default.createElement("main",{className:"main-panel"},l.default.createElement(m.ProfileSection,null),l.default.createElement(p.LibraryModules,null),l.default.createElement(f.Modules,null),l.default.createElement(d.Assignments,null)),l.default.createElement(u.Aside,null))))):l.default.createElement(n.PageLoader,{fetching:!0})};var n=e("@aimpact/ailearn-app/components/ui"),l=e("react"),o=e("@beyond-js/react-18-widgets/hooks"),c=e("./context"),m=e("./sections/profile-section"),d=e("./assigments"),u=e("./aside"),f=e("./modules"),p=e("./library")}}),N.set("./views/library/actions",{hash:1185132931,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({openModal:t,item:a}){var e=(0,l.useModuleContext)().texts["library"],s=a.owner??a.creator,r=(0,c.default)(a.timeCreated).format("MM/DD/YYYY");return i.createElement("footer",{className:"entity__footer"},i.createElement(o.UserData,{data:s,date:r}),i.createElement(n.Button,{variant:"primary",bordered:!0,onClick:e=>{e.stopPropagation(),t({open:!0,item:a})},className:"right-action"},e.actions.use))};var i=e("react"),n=e("pragmate-ui/components"),l=e("../context"),o=e("./user-data"),c=e("dayjs")}}),N.set("./views/library/index",{hash:2786330662,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LibraryModules=function(){let{library:e,texts:t}=(0,l.useModuleContext)().store,[a,s]=n.default.useState({open:!1,item:null});if(!e||!Array.isArray(e)||!e.length)return null;let r=e=>s(e),i=[...e].map(e=>n.default.createElement(o.LibraryItem,{openModal:r,item:e,key:"module-"+e.id}));return n.default.createElement("article",{"data-tour":"2","data-description":t.tour.library.description,"data-title":t.tour.library.title,className:"assigments-list"},n.default.createElement(d.SectionTitle,{title:t.library.title,href:"/community",actionText:t.library.actions.link}),n.default.createElement(m.Slider,null,i),a.open&&n.default.createElement(c.OrganizationsModal,{module:a?.item,onClose:r,texts:t}))};var n=e("react"),l=e("../context"),o=e("./item"),c=e("./organizations-modal"),m=e("../slider"),d=e("../section-title")}}),N.set("./views/library/item",{hash:1099852261,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LibraryItem=function({item:e,openModal:t}){var a=e.title;return r.default.createElement("article",{className:"entity__item"},r.default.createElement(s.EntityImage,{src:e?.picture,entity:"module",alt:a}),r.default.createElement("section",{className:"entity__item-content"},r.default.createElement("h4",null,e.title),r.default.createElement("span",null,e.description)),r.default.createElement("footer",{className:"entity__footer"}),r.default.createElement(i.default,{openModal:t,item:e}))};var s=e("@aimpact/ailearn-app/components/ui"),r=e("react"),i=e("./actions")}}),N.set("./views/library/organizations-modal",{hash:2236491519,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OrganizationsModal=function({module:a,onClose:e,texts:s}){let[r,i]=c.useState(),[t,n]=c.useState(),[l,o]=c.useState(!1);return c.createElement(m.Modal,{closeBackdrop:!1,closeBackdrop:!1,show:!0,onClose:e,className:"modal__assignment"},c.createElement("h3",null,"Organizations"),c.createElement(f.ErrorRenderer,{error:t}),c.createElement(d.List,{items:u.sessionWrapper.user.organizations,control:({item:e})=>{var t=r?.id===e.id?"list__item item__active":" list__item";return c.createElement("li",{"data-id":e.id,"data-entity":e.entity,className:t,onClick:()=>{i(e)}},c.createElement(f.EntityImage,{src:e.picture,entity:"institution",alt:e.name}),c.createElement("span",null,e.name),r?.id===e.id&&c.createElement(g.Icon,{icon:"circle-check",className:"item__icon"}))},className:"organization-list",specs:{}}),c.createElement("div",{className:"actions__container flex-container flex-end"},c.createElement(p.Button,{variant:"primary",disabled:!r,fetching:l,onClick:async()=>{try{var e,t;r&&(o(!0),await(e=new h.LearningModule({id:a.id})).isReady,(t=await e.clone(a.id,r.id,r.entity)).status||(console.log(t),n(s.errors.failed)),y.routing.pushState("/modules/management?id="+t.data.id))}catch(e){n(s.errors.failed)}finally{o(!1)}}},s.actions.continue)))};var c=e("react"),m=e("pragmate-ui/modal"),d=e("pragmate-ui/list"),u=e("@aimpact/chat-sdk/session"),f=e("@aimpact/ailearn-app/components/ui"),p=e("pragmate-ui/components"),g=e("pragmate-ui/icons"),y=e("@beyond-js/kernel/routing"),h=e("@aimpact/ailearn-sdk/learning-modules")}}),N.set("./views/library/user-data",{hash:3207490455,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserData=function({label:e,date:t,data:a}){var s;return a?({photoUrl:a,name:s}=a,r.createElement("div",{className:"user-data__section"},e&&r.createElement("h6",{className:"user-data__label"},e),r.createElement("section",{className:"user-data__detail"},r.createElement(i.Image,{className:"user-data__img",src:a}),r.createElement("div",null,r.createElement("span",{className:"user-data__name"},s),r.createElement("span",{className:"user-data__date"},t))))):null};var r=e("react"),i=e("pragmate-ui/image")}}),N.set("./views/modules/actions",{hash:2127081963,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({item:t,toggleModal:a}){var e=(0,i.useModuleContext)().texts;return s.createElement("footer",{className:"entity__footer entity__footer--right"},s.createElement(r.Button,{variant:"primary",bordered:!0,onClick:e=>{e.stopPropagation(),a({open:!0,item:t})}},e.actions.assign))};var s=e("react"),r=e("pragmate-ui/components"),i=e("../context")}}),N.set("./views/modules/index",{hash:3159387844,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Modules=function(){var{modules:e,texts:t}=(0,l.useModuleContext)().store;if(!e||!Array.isArray(e)||!e.length)return null;let[a,s]=n.default.useState({open:!1,item:null}),r=e=>s(e),i=[...e].map(e=>n.default.createElement(o.ModuleItem,{toggleModal:r,item:e,key:"module-"+e.id}));return n.default.createElement("article",{"data-tour":"2","data-description":t.tour.modules.description,"data-title":t.tour.modules.title,className:"assigments-list"},n.default.createElement(d.SectionTitle,{title:t.modules.title,href:"/modules/management"}),n.default.createElement(m.Slider,null,i),a.open&&n.default.createElement(c.ModuleAssignments,{module:a.item,onClose:r,texts:t.assign}))};var n=e("react"),l=e("../context"),o=e("./item"),c=e("@aimpact/ailearn-app/modules/assign"),m=e("../slider"),d=e("../section-title")}}),N.set("./views/modules/item",{hash:4059421781,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleItem=function({item:e,toggleModal:t}){var a=(0,l.useModuleContext)().store["texts"],s=e.title,r=e.owner??e.creator;return n.default.createElement("article",{className:"entity__item"},n.default.createElement(i.EntityImage,{src:e?.picture,entity:"module",alt:s}),n.default.createElement("section",{className:"entity__item-content"},n.default.createElement(i.UserData,{data:r}),n.default.createElement("h4",null,e.title),n.default.createElement("span",null,e.description)),n.default.createElement("footer",{className:"entity__footer"},n.default.createElement("span",{className:"card-number__detail"},a.modules.activities,": ",e.activities.count)),n.default.createElement(o.default,{toggleModal:t,item:e}))};var i=e("@aimpact/ailearn-app/components/ui"),n=e("react"),l=e("../context"),o=e("./actions")}}),N.set("./views/section-title",{hash:2349579646,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SectionTitle=function({title:e,actionText:t,href:a,validate:s=!0}){var r=(0,l.useModuleContext)().store.texts,i=o.sessionWrapper?.user?.roles?.includes("teacher")&&s,s=t??r.actions.create;return n.default.createElement(c.PageTitle,{title:e,as:"h3"},i&&n.default.createElement("div",{className:"header__actions"},n.default.createElement(m.Link,{href:a},s)))};var n=e("react"),l=e("./context"),o=e("@aimpact/chat-sdk/session"),c=e("@aimpact/ailearn-app/components/ui"),m=e("pragmate-ui/link")}}),N.set("./views/sections/drafts",{hash:1845378313,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserCard=function(){var{user:e,texts:t}=(0,s.useModuleContext)().store;return a.default.createElement("section",{className:"user-profile"},a.default.createElement(r.Image,{className:"user-profile__img",src:e.photoURL,alt:"Profile Picture"}),a.default.createElement("div",{className:"user-profile__content"},a.default.createElement("div",{className:"content"},a.default.createElement("h6",null,e.displayName),a.default.createElement("span",{className:"p2"},e.email)),a.default.createElement("div",{className:"card__actions"},a.default.createElement("link",{href:"/me"},t.profile.edit))))};var a=e("react"),s=e("../context"),r=e("pragmate-ui/image")}}),N.set("./views/sections/modules",{hash:2211973510,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserCard=function(){var{user:e,texts:t}=(0,r.useModuleContext)().store;return s.default.createElement("section",{className:"user-profile"},s.default.createElement(a.Image,{className:"user-profile__img",src:e.photoURL,alt:"Profile Picture"}),s.default.createElement("div",{className:"user-profile__content"},s.default.createElement("div",{className:"content"},s.default.createElement("h3",null,e.displayName),s.default.createElement("span",{className:"p2"},e.email)),s.default.createElement("div",{className:"card__actions"},s.default.createElement("link",{href:"/me"},t.profile.edit))))};var a=e("pragmate-ui/image"),s=e("react"),r=e("../context")}}),N.set("./views/sections/profile-section",{hash:3739530922,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileSection=function(){var{user:e,texts:t}=(0,s.useModuleContext)().store;return a.default.createElement("section",{className:"user-profile","data-tour":"0","data-description":t.tour.step0.description,"data-title":t.tour.step0.title},a.default.createElement(r.Image,{className:"user-profile__img",src:e.photoURL,alt:"Profile Picture"}),a.default.createElement("div",{className:"user-profile__content flex-container flex-space-between"},a.default.createElement("div",{className:"content"},a.default.createElement("h3",null,e.displayName),a.default.createElement("span",{className:"p2"},e.email)),a.default.createElement("div",{className:"card__actions"},a.default.createElement(i.Link,{href:"/users/me"},t.profile.edit))))};var a=e("react"),s=e("../context"),r=e("pragmate-ui/image"),i=e("pragmate-ui/link")}}),N.set("./views/slider",{hash:909644286,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Slider=function({children:e}){return a.default.createElement(s.SwiperSlider,{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},className:"entity__list two-columns",breakpoints:{0:{slidesPerView:1.2},600:{slidesPerView:2.1},900:{slidesPerView:2.1}},spaceBetween:20},e)};var a=e("react"),s=e("pragmate-ui/swiper")}}),M.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/assigments/item",from:"AssignmentItem",name:"AssignmentItem"},{im:"./views/index",from:"View",name:"View"},{im:"./views/library/item",from:"LibraryItem",name:"LibraryItem"},{im:"./views/library/user-data",from:"UserData",name:"UserData"},{im:"./views/modules/item",from:"ModuleItem",name:"ModuleItem"},{im:"./views/sections/drafts",from:"UserCard",name:"UserCard"},{im:"./views/sections/modules",from:"UserCard",name:"UserCard"},{im:"./views/sections/profile-section",from:"ProfileSection",name:"ProfileSection"}],M.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||s("Controller",e?e("./controller").Controller:a),!e&&"AssignmentItem"!==t||s("AssignmentItem",e?e("./views/assigments/item").AssignmentItem:a),!e&&"View"!==t||s("View",e?e("./views/index").View:a),!e&&"LibraryItem"!==t||s("LibraryItem",e?e("./views/library/item").LibraryItem:a),!e&&"UserData"!==t||s("UserData",e?e("./views/library/user-data").UserData:a),!e&&"ModuleItem"!==t||s("ModuleItem",e?e("./views/modules/item").ModuleItem:a),!e&&"UserCard"!==t||s("UserCard",e?e("./views/sections/drafts").UserCard:a),!e&&"UserCard"!==t||s("UserCard",e?e("./views/sections/modules").UserCard:a),!e&&"ProfileSection"!==t||s("ProfileSection",e?e("./views/sections/profile-section").ProfileSection:a)},s("__beyond_pkg",M),s("hmr",new function(){this.on=(e,t)=>M.hmr.on(e,t),this.off=(e,t)=>M.hmr.off(e,t)}),M.initialise(N)}}});