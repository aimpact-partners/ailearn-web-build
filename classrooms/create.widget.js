System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.2.0/model","@aimpact/chat-sdk@1.2.0/session","@aimpact/ailearn-app@0.1.6-dev.36/main-layout.widget","@beyond-js/kernel@0.1.9/texts","react@18.2.0","pragmate-ui@1.0.0-beta.6/toast","@beyond-js/kernel@0.1.9/routing","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@1.0.0-beta.6/form","pragmate-ui@1.0.0-beta.6/components","@aimpact/ailearn-app@0.1.6-dev.36/components/ui","pragmate-ui@1.0.0-beta.6/form/react-select"],function(a,e){"use strict";var t,r,n,o,s,i,c,l,u,d,m,p,h,g,f,v,y,b,w;return a("Controller",void 0),{setters:[function(e){t=e},function(e){r=e},function(e){n=e},function(e){o=e},function(e){s=e},function(e){i=e},function(e){c=e},function(e){l=e},function(e){u=e},function(e){d=e},function(e){m=e},function(e){p=e},function(e){h=e},function(e){g=e},function(e){f=e},function(e){v=e},function(e){y=e}],execute:function(){w=r.Bundle,(b=new w({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.36/classrooms/create",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",o],["@aimpact/ailearn-sdk/core",s],["@beyond-js/reactive/model",i],["@aimpact/chat-sdk/session",c],["@aimpact/ailearn-app/main-layout.widget",l],["@beyond-js/kernel/texts",u],["react",d],["pragmate-ui/toast",m],["@beyond-js/kernel/routing",p],["@beyond-js/react-18-widgets/hooks",h],["pragmate-ui/form",g],["pragmate-ui/components",f],["@aimpact/ailearn-app/components/ui",v],["pragmate-ui/form/react-select",y]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-classrooms-create",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.36/classrooms/create.widget",is:"page",route:"/classrooms/create",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.36/classrooms/create.widget"),(w=new Map).set("./controller",{hash:940274451,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/page"),a=e("./store"),n=e("./views");class o extends r.PageReactWidgetController{#store;createStore(){return this.#store=new a.StoreManager,this.#store}get Widget(){return n.View}show(){this.#store.load(this.uri.qs.get("id"))}hide(){this.#store.clear()}}t.Controller=o}}),w.set("./store",{hash:2242666799,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var r=e("@aimpact/ailearn-sdk/core"),a=e("@beyond-js/reactive/model"),n=e("@aimpact/chat-sdk/session"),o=e("@beyond-js/kernel/texts"),s=e("beyond_context");class i extends a.ReactiveModel{#model;get model(){return this.#model}get user(){return n.sessionWrapper.user}#texts=new o.CurrentTexts(s.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.#texts.on("change",this.triggerEvent)}clear(){this.#model=void 0,super.ready=!1}setBreadcrumb(){var e=this.setBreadcrumb.bind(this);this.#texts.ready?this.#texts.off("change",e):this.#texts.on("change",e)}async load(){try{this.setBreadcrumb(),super.ready=!1,this.#model=new r.Classroom({})}catch(e){console.error(e)}finally{super.ready=!0}}async delete(e){this.#model.classrooms.remove(e),this.trigger("change")}async save(e){try{this.fetching=!0;var{status:t,data:r}=await this.model.save({...e});if(t)return r;throw new Error("error publishing classroom")}catch(e){console.error(1,e)}finally{this.fetching=!1}}}t.StoreManager=i}}),w.set("./views/context",{hash:952274567,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var r=e("react");const a=t.ModuleContext=r.createContext({});t.useModuleContext=()=>r.useContext(a)}}),w.set("./views/events",{hash:2581073038,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useForm=function(e,t,r){const a={name:t?.model?.name||"",description:t?.model?.description||""},[n,o]=d.useState(a),[s,i]=d.useState(!1),[c,l]=d.useState("");if((0,h.useBinder)([t],()=>{t.ready||o(a)}),!e)return{};const u=t.model;return{values:n,fetching:s,error:c,setFetching:i,onChange:({currentTarget:e})=>{var t={...n};t[e.name]=e.value,o(t),l("")},onSubmit:async e=>{e.preventDefault(),e.stopPropagation(),i(!0);try{await u.publish(n),m.toast.success(r.create.success),p.routing.replaceState({},null,"/classrooms/view/"+u.id)}catch(e){console.error(e),l(r.errors.default)}finally{i(!1)}},setValues:o}};var d=e("react"),m=e("pragmate-ui/toast"),p=e("@beyond-js/kernel/routing"),h=e("@beyond-js/react-18-widgets/hooks")}}),w.set("./views/index",{hash:3215304630,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){var{ready:t,texts:r}=(0,h.useModel)(e),{fetching:a,values:n,onChange:o,onSubmit:s,setValues:i,error:c}=(0,g.useForm)(t,e,r);return t?(t={disabled:a||""===n.name},l.createElement(p.ModuleContext.Provider,{value:e={texts:r,store:e}},l.createElement(m.PageContainer,{className:"form-page-container",fetching:a},l.createElement("header",{className:"page__header"},l.createElement("h3",null,r.create.title)),l.createElement(m.ErrorRenderer,{error:c,texts:r.errors}),l.createElement(u.Form,{onSubmit:s,className:"form__container"},l.createElement(f.OwnershipField,{setValues:i,values:n}),l.createElement(u.Input,{label:r.create.name.label,placeholder:r.create.name.placeholder,value:n.name,name:"name",type:"text",onChange:o,required:!0}),l.createElement(u.Textarea,{label:r.create.description.label,name:"description",value:n.description,placeholder:r.create.description.placeholder,onChange:o}),l.createElement("div",{className:"form__footer"},l.createElement(d.Button,{fetching:a,...t,variant:"primary",type:"submit"},r.create.actions.save)))))):null};var l=e("react"),u=e("pragmate-ui/form"),d=e("pragmate-ui/components"),m=e("@aimpact/ailearn-app/components/ui"),p=e("./context"),h=e("./use-model"),g=e("./events"),f=e("./ownership")}}),w.set("./views/ownership",{hash:2753087712,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OwnershipField=function({setValues:e,values:t}){const{store:r,texts:a}=(0,c.useModuleContext)();var n,o;return r.user.teacher?.orgs?(n={value:"",label:a.institution.select},o=[...r.user.teacher.orgs.map(e=>({value:e.id,label:e.name})),{value:r.user.id,label:a.institution.own}],s.default.createElement("div",null,s.default.createElement("label",{htmlFor:""},a.institution.label," *"),s.default.createElement(i.ReactSelect,{value:t.owner,defaultOption:n,name:"owner",options:o,onChange:({currentTarget:t})=>{t.value===r.user.id?e(e=>({...e,owner:r.user.id})):e(e=>({...e,owner:t.value,organizationId:t.value}))}}))):null};var s=e("react"),i=e("pragmate-ui/form/react-select"),c=e("./context")}}),w.set("./views/use-model",{hash:347815426,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModel=function(t){const[e,r]=a.useState(t.ready);return a.useEffect(()=>{const e=()=>{r(t.ready)};return t.on("change",e),()=>t.off("change",e)}),{ready:e,store:t,texts:t?.texts}};var a=e("react")}}),b.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"}],b.exports.process=function({require:e,prop:t,value:r}){!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:r)},a("__beyond_pkg",b),a("hmr",new function(){this.on=(e,t)=>b.hmr.on(e,t),this.off=(e,t)=>b.hmr.off(e,t)}),b.initialise(w)}}});