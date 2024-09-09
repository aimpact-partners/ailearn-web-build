System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-app@0.1.6-dev.20/main-layout.widget","@aimpact/chat-sdk@1.1.0/session","@beyond-js/reactive@1.2.0/model","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-sdk@1.0.0/learning-modules","@aimpact/ailearn-sdk@1.0.0/core","react@18.2.0","@aimpact/ailearn-app@0.1.6-dev.20/components/icons","pragmate-ui@1.0.0-beta.6/components","pragmate-ui@1.0.0-beta.6/list","@aimpact/ailearn-app@0.1.6-dev.20/components/ui","@aimpact/ailearn-app@0.1.6-dev.20/components/module-card","@aimpact/ailearn-app@0.1.6-dev.20/modules/owner-assign.code","pragmate-ui@1.0.0-beta.6/modal","pragmate-ui@1.0.0-beta.6/icons","@beyond-js/kernel@0.1.9/routing","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.1.6-dev.20/modules/assign","pragmate-ui@1.0.0-beta.6/image","pragmate-ui@1.0.0-beta.6/swiper"],function(s,e){"use strict";var t,a,n,i,r,o,l,c,m,d,u,p,f,g,h,y,v,E,_,x,w,C,b,M,N,k;return s({Controller:void 0,AssignmentItem:void 0,CommunityItem:void 0,View:void 0,ModuleItem:void 0,UserCard:void 0,ProfileSection:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){i=e},function(e){r=e},function(e){o=e},function(e){l=e},function(e){c=e},function(e){m=e},function(e){d=e},function(e){u=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){h=e},function(e){y=e},function(e){v=e},function(e){E=e},function(e){_=e},function(e){x=e},function(e){w=e},function(e){C=e},function(e){b=e},function(e){M=e}],execute:function(){k=a.Bundle,(N=new k({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.20/home",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",i],["@aimpact/ailearn-app/main-layout.widget",r],["@aimpact/chat-sdk/session",o],["@beyond-js/reactive/model",l],["@beyond-js/kernel/texts",c],["@aimpact/ailearn-sdk/learning-modules",m],["@aimpact/ailearn-sdk/core",d],["react",u],["@aimpact/ailearn-app/components/icons",p],["pragmate-ui/components",f],["pragmate-ui/list",g],["@aimpact/ailearn-app/components/ui",h],["@aimpact/ailearn-app/components/module-card",y],["@aimpact/ailearn-app/modules/owner-assign.code",v],["pragmate-ui/modal",E],["pragmate-ui/icons",_],["@beyond-js/kernel/routing",x],["@beyond-js/react-18-widgets/hooks",w],["@aimpact/ailearn-app/modules/assign",C],["pragmate-ui/image",b],["pragmate-ui/swiper",M]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"student-home",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.20/home.widget",is:"page",route:"/",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.20/home.widget"),(k=new Map).set("./controller",{hash:1066500691,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),s=e("./store"),n=e("./views"),i=e("@aimpact/ailearn-app/main-layout.widget"),r=e("@aimpact/chat-sdk/session");class o extends a.PageReactWidgetController{#store;hideTimeout=null;get Widget(){return n.View}createStore(){return this.#store=new s.StoreManager,this.#store}constructor(e){super(e),r.sessionWrapper.on("logout",this.onLogout),r.sessionWrapper.on("login",this.onLogin)}onLogout=()=>{this.#store.clear(),this.hideTimeout=void 0,r.sessionWrapper.off("logout",this.onLogout)};onLogin=()=>{r.sessionWrapper.on("logout",this.onLogout)};show(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null),i.LayoutBroker.overlay=!1,this.#store.load()}hide(){this.#store.clear()}}t.Controller=o}}),k.set("./store",{hash:1877522955,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),s=e("@beyond-js/kernel/texts"),n=e("beyond_context"),i=e("@aimpact/chat-sdk/session"),r=e("@aimpact/ailearn-app/main-layout.widget"),o=e("@aimpact/ailearn-sdk/learning-modules");class l extends a.ReactiveModel{#model;get model(){return this.#model}get items(){return this.#model.assignments}#texts=new s.CurrentTexts(n.module.specifier);get texts(){return this.#texts?.value}#assignments;get assignments(){return this.#assignments}#drafts;get drafts(){return this.#drafts}#classrooms;get classrooms(){return this.#classrooms}#modules;get modules(){return this.#modules}#community;get community(){return this.#community}get user(){return i.sessionWrapper.user}get isTeacher(){return this.user?.roles.includes("teacher")}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.#texts.on("change",this.triggerEvent)}async load(){try{this.#model=i.sessionWrapper,r.LayoutBroker.overlay=!1;var{status:e,data:t}=await this.#model.user.getHome();e||console.log("error"),this.#drafts=t.drafts,this.#assignments=t.assignments,this.#classrooms=t.classrooms;const s=[];var a=t.modules??[];this.#modules=a.map(e=>(e=new o.LearningModule(e),s.push(e.isReady),e)),await Promise.all(s),a.map((e,t)=>this.#modules[t].set(e)),this.#community=t.community,super.ready=!0,this.triggerEvent(),globalThis.store=this}catch(e){console.error(e)}}clear(){this.#drafts=[],this.#assignments=[],this.#classrooms=[],this.#modules=[],super.ready=!1,this.triggerEvent(),this.#model=void 0}}t.StoreManager=l}}),k.set("./views/aside/classrooms/empty",{hash:3964528968,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyAsideClassrooms=function(){var e=(0,s.useModuleContext)().texts["classrooms"];return a.default.createElement("div",{className:"aside-list__empty-container"},a.default.createElement("figure",{className:"aside-list__empty-icon"},a.default.createElement(n.AppIcon,{icon:"classroom"})),a.default.createElement("h6",null,e.empty.title),a.default.createElement("span",{className:"empty__list"},e.empty.description),a.default.createElement("footer",{className:"aside-list__empty-footer"},a.default.createElement(i.Link,{href:"/classrooms/create",className:"btn btn-secondary"},e.empty.action)))};var a=e("react"),s=e("../../context"),n=e("@aimpact/ailearn-app/components/icons"),i=e("pragmate-ui/components")}}),k.set("./views/aside/classrooms/index",{hash:707758214,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AsideClassrooms=function(){var e,{store:t,texts:{classrooms:a,tour:s}}=(0,i.useModuleContext)();return t.isTeacher?(e=(t=Array.isArray(t.classrooms)?t.classrooms:[]).length,n.default.createElement("div",{"data-tour":"5","data-description":s.classrooms.description,"data-title":s.classrooms.title,className:e="classrooms-container aside-list"+(0===e?" aside-list--empty":"")},n.default.createElement("header",{className:"aside-list__header"},n.default.createElement(r.Link,{href:"/classrooms/list"},n.default.createElement("h5",null,a.title)),n.default.createElement(r.Link,{href:"/classrooms/create"},a.action)),n.default.createElement(l.List,{className:"aside-list__body",items:t,control:o.AsideClassroom,empty:c.EmptyAsideClassrooms}))):null};var n=e("react"),i=e("../../context"),r=e("pragmate-ui/components"),o=e("./item"),l=e("pragmate-ui/list"),c=e("./empty")}}),k.set("./views/aside/classrooms/item",{hash:2334343149,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AsideClassroom=function({item:e}){var t=(0,n.useModuleContext)().texts.classrooms,a=(e.description&&""!==e.description?e:t.items).description,t=(e.name&&""!==e.name?e:t.items).name;return s.default.createElement(r.Link,{href:"/classrooms/view/"+e.id,className:"aside-list__item-container",key:e.id},s.default.createElement("article",{className:"aside-list__item",key:e.id},s.default.createElement(i.EntityImage,{ratio:"square",src:e.picture,entity:"module"}),s.default.createElement("section",{className:"item__content"},s.default.createElement("h6",null,t),s.default.createElement("p",{className:"description"},a))))};var s=e("react"),n=e("../../context"),i=e("@aimpact/ailearn-app/components/ui"),r=e("pragmate-ui/components")}}),k.set("./views/aside/drafts/empty",{hash:3977961536,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyAsideDraft=function(){var e=(0,s.useModuleContext)().texts["drafts"];return a.default.createElement("div",{className:"aside-list__empty-container drafts-container"},a.default.createElement("figure",{className:"aside-list__empty-icon"},a.default.createElement(i.AppIcon,{icon:"module"})),a.default.createElement("h6",null,e.empty.title),a.default.createElement("span",{className:"empty__list"},e.empty.description),a.default.createElement("footer",null,a.default.createElement(n.Link,{href:"/modules/management",className:"btn btn-primary"},e.empty.action)))};var a=e("react"),s=e("../../context"),n=e("pragmate-ui/components"),i=e("@aimpact/ailearn-app/components/icons")}}),k.set("./views/aside/drafts/index",{hash:2122782462,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AsideDrafts=function(){var e,{store:t,texts:{drafts:a,tour:s}}=(0,i.useModuleContext)();return t.isTeacher?(e=(t=Array.isArray(t.drafts)?t.drafts:[]).length,n.default.createElement("div",{"data-tour":"4","data-description":s.drafts.description,"data-title":s.drafts.title,className:e="drafts-container aside-list"+(0===e?" aside-list--empty":"")},n.default.createElement("header",{className:"aside-list__header"},n.default.createElement(o.Link,{href:"/modules/list?tab=draft"},n.default.createElement("h5",null,a.title)),n.default.createElement(o.Link,{href:"/modules/management"},a.action)),n.default.createElement(r.List,{className:"aside-list__body",items:t,control:c.AsideDraftItem,empty:l.EmptyAsideDraft}))):null};var n=e("react"),i=e("../../context"),r=e("pragmate-ui/list"),o=e("pragmate-ui/components"),l=e("./empty"),c=e("./item")}}),k.set("./views/aside/drafts/item",{hash:3290853220,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AsideDraftItem=function({item:e}){var t=(0,n.useModuleContext)().texts.drafts,a=(e.description&&""!==e.description?e:t.items).description,t=(e.title&&""!==e.title?e:t.items).title;return s.default.createElement(r.Link,{href:"/modules/management?id="+e.id,className:"aside-list__item-container",key:e.id},s.default.createElement("article",{className:"aside-list__item",key:e.id},s.default.createElement(i.EntityImage,{ratio:"square",src:e.picture,entity:"module"}),s.default.createElement("section",{className:"item__content"},s.default.createElement("h6",null,t),s.default.createElement("p",{className:"description"},a))))};var s=e("react"),n=e("../../context"),i=e("@aimpact/ailearn-app/components/ui"),r=e("pragmate-ui/components")}}),k.set("./views/aside/index",{hash:488478691,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Aside=function(){return a.default.createElement("aside",{className:"home__aside"},a.default.createElement("div",{className:"sticky-container"},a.default.createElement(s.AsideDrafts,null),a.default.createElement(n.AsideClassrooms,null)))};var a=e("react"),s=e("./drafts"),n=e("./classrooms")}}),k.set("./views/assigments/index",{hash:3433017412,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Assignments=function(){var{assignments:e,texts:t}=(0,s.useModuleContext)().store;return e&&Array.isArray(e)&&e.length?(e=[...e].map(e=>a.default.createElement(n.AssignmentItem,{item:e,key:"assignment-"+e.id})),a.default.createElement("article",{"data-tour":"1","data-description":t.tour.assignments.description,"data-title":t.tour.assignments.title,className:"assigments-list"},a.default.createElement(i.PageTitle,{title:t.assignments.title,as:"h3"}),a.default.createElement(r.Slider,null,e))):null};var a=e("react"),s=e("../context"),n=e("./item"),i=e("@aimpact/ailearn-app/components/ui"),r=e("../slider")}}),k.set("./views/assigments/item",{hash:1415722812,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AssignmentItem=function({item:e}){var{assignments:t}=(0,s.useModuleContext)().store["texts"];return a.default.createElement(n.ModuleCard,{item:e.module,texts:t},a.default.createElement(n.ModuleCardFooter,{className:"actions-end entity__footer--right",item:e.module},a.default.createElement(i.Link,{className:"btn btn-primary",href:"/assignments/"+e.id},t.actions.link)))};var a=e("react"),s=e("../context"),n=e("@aimpact/ailearn-app/components/module-card"),i=e("pragmate-ui/components")}}),k.set("./views/community/index",{hash:1651852022,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CommunityModules=function(){const{community:e,texts:t}=(0,o.useModuleContext)().store,[a,s]=r.default.useState({open:!1,item:null});if(!e||!Array.isArray(e)||!e.length)return null;const n=e=>s(e),i=[...e].map(e=>r.default.createElement(l.CommunityItem,{openModal:n,item:e,key:"module-"+e.id}));return r.default.createElement("article",{"data-tour":"2","data-description":t.tour.community.description,"data-title":t.tour.community.title,className:"assigments-list"},r.default.createElement(m.SectionTitle,{title:t.community.title,href:"/community",actionText:t.community.actions.link}),r.default.createElement(c.Slider,null,i),a.open&&r.default.createElement(d.OwnerAssignForm,{item:a?.item,onClose:n,texts:t,type:"community"}))};var r=e("react"),o=e("../context"),l=e("./item"),c=e("../slider"),m=e("../section-title"),d=e("@aimpact/ailearn-app/modules/owner-assign.code")}}),k.set("./views/community/item",{hash:2064179533,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CommunityItem=function({item:t,openModal:a}){var e=(0,i.useModuleContext)().texts["community"];return s.default.createElement(s.default.Fragment,null,s.default.createElement(n.ModuleCard,{item:t,texts:e},s.default.createElement(n.ModuleCardFooter,{item:t},t?.playground?.assignment&&s.default.createElement("a",{target:"_blank",href:t.playground.assignment,className:"right-action btn btn-primary outline"},e.actions.test),s.default.createElement(r.Button,{variant:"primary",onClick:e=>{e.stopPropagation(),a({open:!0,item:t})},className:"right-action"},e.actions.use))))};var s=e("react"),n=e("@aimpact/ailearn-app/components/module-card"),i=e("../context"),r=e("pragmate-ui/components")}}),k.set("./views/community/organizations-modal",{hash:2236491519,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OrganizationsModal=function({module:a,onClose:e,texts:s}){const[n,i]=c.useState(),[t,r]=c.useState(),[o,l]=c.useState(!1);return c.createElement(m.Modal,{closeBackdrop:!1,closeBackdrop:!1,show:!0,onClose:e,className:"modal__assignment"},c.createElement("h3",null,"Organizations"),c.createElement(p.ErrorRenderer,{error:t}),c.createElement(d.List,{items:u.sessionWrapper.user.organizations,control:({item:e})=>{var t=n?.id===e.id?"list__item item__active":" list__item";return c.createElement("li",{"data-id":e.id,"data-entity":e.entity,className:t,onClick:()=>{i(e)}},c.createElement(p.EntityImage,{src:e.picture,entity:"institution",alt:e.name}),c.createElement("span",null,e.name),n?.id===e.id&&c.createElement(g.Icon,{icon:"circle-check",className:"item__icon"}))},className:"organization-list",specs:{}}),c.createElement("div",{className:"actions__container flex-container flex-end"},c.createElement(f.Button,{variant:"primary",disabled:!n,fetching:o,onClick:async()=>{try{var e,t;n&&(l(!0),await(e=new y.LearningModule({id:a.id})).isReady,(t=await e.clone(a.id,n.id,n.entity)).status||(console.log(t),r(s.errors.failed)),h.routing.pushState("/modules/management?id="+t.data.id))}catch(e){r(s.errors.failed)}finally{l(!1)}}},s.actions.continue)))};var c=e("react"),m=e("pragmate-ui/modal"),d=e("pragmate-ui/list"),u=e("@aimpact/chat-sdk/session"),p=e("@aimpact/ailearn-app/components/ui"),f=e("pragmate-ui/components"),g=e("pragmate-ui/icons"),h=e("@beyond-js/kernel/routing"),y=e("@aimpact/ailearn-sdk/learning-modules")}}),k.set("./views/context",{hash:3298816763,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");const s=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(s)}}),k.set("./views/index",{hash:2380819415,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=(0,o.useState)(e.ready),s=e.texts,n=((0,l.useBinder)([e],()=>a(e.ready)),(0,r.useDriverTour)("home",t,s?.tour?.buttons).ref);var i;return t?(i=e.assignments,i={store:e,fetching:e.fetching,texts:s,items:i},o.default.createElement(c.ModuleContext.Provider,{value:i},o.default.createElement(r.PageContainer,{className:"top-header"},o.default.createElement("div",{ref:n,className:"grid-container columns-8-4"},o.default.createElement("main",{className:"main-panel"},o.default.createElement(m.ProfileSection,null),o.default.createElement(f.CommunityModules,null),o.default.createElement(p.Modules,null),o.default.createElement(d.Assignments,null)),o.default.createElement(u.Aside,null))))):o.default.createElement(r.PageLoader,{fetching:!0})};var r=e("@aimpact/ailearn-app/components/ui"),o=e("react"),l=e("@beyond-js/react-18-widgets/hooks"),c=e("./context"),m=e("./sections/profile-section"),d=e("./assigments"),u=e("./aside"),p=e("./modules"),f=e("./community")}}),k.set("./views/modules/index",{hash:898520914,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Modules=function(){var{modules:e,texts:t}=(0,o.useModuleContext)().store;if(!e||!Array.isArray(e)||!e.length)return null;const[a,s]=r.default.useState({open:!1,item:null}),n=e=>s(e),i=[...e].map(e=>r.default.createElement(l.ModuleItem,{toggleModal:n,item:e,key:"module-"+e.id}));return r.default.createElement("article",{"data-tour":"2","data-description":t.tour.modules.description,"data-title":t.tour.modules.title,className:"assigments-list"},r.default.createElement(d.SectionTitle,{title:t.modules.title,href:"/modules/management"}),r.default.createElement(m.Slider,null,i),a.open&&r.default.createElement(c.ModuleAssignments,{item:a.item,onClose:n,texts:t.assign}))};var r=e("react"),o=e("../context"),l=e("./item"),c=e("@aimpact/ailearn-app/modules/assign"),m=e("../slider"),d=e("../section-title")}}),k.set("./views/modules/item",{hash:3742203390,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleItem=function({item:t,toggleModal:a}){var e=(0,n.useModuleContext)().store["texts"];return s.default.createElement(s.default.Fragment,null,s.default.createElement(i.ModuleCard,{item:t,texts:e},s.default.createElement(i.ModuleCardFooter,{item:t},s.default.createElement(r.Button,{variant:"primary",bordered:!0,onClick:e=>{e.stopPropagation(),a({open:!0,item:t})}},e.actions.assign))))};var s=e("react"),n=e("../context"),i=e("@aimpact/ailearn-app/components/module-card"),r=e("pragmate-ui/components")}}),k.set("./views/section-title",{hash:3311047845,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SectionTitle=function({title:e,actionText:t,href:a,validate:s=!0}){var n=(0,o.useModuleContext)().store.texts,i=l.sessionWrapper?.user?.roles?.includes("teacher")&&s,s=t??n.actions.create;return r.default.createElement(c.PageTitle,{title:e,as:"h3"},i&&r.default.createElement("div",{className:"header__actions"},r.default.createElement(m.Link,{href:a},s)))};var r=e("react"),o=e("./context"),l=e("@aimpact/chat-sdk/session"),c=e("@aimpact/ailearn-app/components/ui"),m=e("pragmate-ui/components")}}),k.set("./views/sections/drafts",{hash:1845378313,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserCard=function(){var{user:e,texts:t}=(0,s.useModuleContext)().store;return a.default.createElement("section",{className:"user-profile"},a.default.createElement(n.Image,{className:"user-profile__img",src:e.photoURL,alt:"Profile Picture"}),a.default.createElement("div",{className:"user-profile__content"},a.default.createElement("div",{className:"content"},a.default.createElement("h6",null,e.displayName),a.default.createElement("span",{className:"p2"},e.email)),a.default.createElement("div",{className:"card__actions"},a.default.createElement("link",{href:"/me"},t.profile.edit))))};var a=e("react"),s=e("../context"),n=e("pragmate-ui/image")}}),k.set("./views/sections/modules",{hash:2211973510,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserCard=function(){var{user:e,texts:t}=(0,n.useModuleContext)().store;return s.default.createElement("section",{className:"user-profile"},s.default.createElement(a.Image,{className:"user-profile__img",src:e.photoURL,alt:"Profile Picture"}),s.default.createElement("div",{className:"user-profile__content"},s.default.createElement("div",{className:"content"},s.default.createElement("h3",null,e.displayName),s.default.createElement("span",{className:"p2"},e.email)),s.default.createElement("div",{className:"card__actions"},s.default.createElement("link",{href:"/me"},t.profile.edit))))};var a=e("pragmate-ui/image"),s=e("react"),n=e("../context")}}),k.set("./views/sections/profile-section",{hash:3203937922,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileSection=function(){var{user:e,texts:t}=(0,s.useModuleContext)().store;return a.default.createElement("section",{className:"user-profile","data-tour":"0","data-description":t.tour.step0.description,"data-title":t.tour.step0.title},a.default.createElement(n.Image,{className:"user-profile__img",src:e.photoURL,alt:"Profile Picture"}),a.default.createElement("div",{className:"user-profile__content flex-container flex-space-between"},a.default.createElement("div",{className:"content"},a.default.createElement("h3",null,e.displayName),a.default.createElement("span",{className:"p2"},e.email)),a.default.createElement("div",{className:"card__actions"},a.default.createElement(i.Link,{href:"/users/me"},t.profile.edit))))};var a=e("react"),s=e("../context"),n=e("pragmate-ui/image"),i=e("pragmate-ui/components")}}),k.set("./views/slider",{hash:3832737510,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Slider=function({children:e}){return a.default.createElement(s.SwiperSlider,{slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},className:"entity__list two-columns",spaceBetween:20},e)};var a=e("react"),s=e("pragmate-ui/swiper")}}),N.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/assigments/item",from:"AssignmentItem",name:"AssignmentItem"},{im:"./views/community/item",from:"CommunityItem",name:"CommunityItem"},{im:"./views/index",from:"View",name:"View"},{im:"./views/modules/item",from:"ModuleItem",name:"ModuleItem"},{im:"./views/sections/drafts",from:"UserCard",name:"UserCard"},{im:"./views/sections/modules",from:"UserCard",name:"UserCard"},{im:"./views/sections/profile-section",from:"ProfileSection",name:"ProfileSection"}],N.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||s("Controller",e?e("./controller").Controller:a),!e&&"AssignmentItem"!==t||s("AssignmentItem",e?e("./views/assigments/item").AssignmentItem:a),!e&&"CommunityItem"!==t||s("CommunityItem",e?e("./views/community/item").CommunityItem:a),!e&&"View"!==t||s("View",e?e("./views/index").View:a),!e&&"ModuleItem"!==t||s("ModuleItem",e?e("./views/modules/item").ModuleItem:a),!e&&"UserCard"!==t||s("UserCard",e?e("./views/sections/drafts").UserCard:a),!e&&"UserCard"!==t||s("UserCard",e?e("./views/sections/modules").UserCard:a),!e&&"ProfileSection"!==t||s("ProfileSection",e?e("./views/sections/profile-section").ProfileSection:a)},s("__beyond_pkg",N),s("hmr",new function(){this.on=(e,t)=>N.hmr.on(e,t),this.off=(e,t)=>N.hmr.off(e,t)}),N.initialise(k)}}});