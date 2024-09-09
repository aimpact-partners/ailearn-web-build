System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.2.0/model","@aimpact/chat-sdk@1.1.0/session","@aimpact/ailearn-app@0.1.6-dev.20/main-layout.widget","@beyond-js/kernel@0.1.9/texts","react@18.2.0","pragmate-ui@1.0.0-beta.6/form","pragmate-ui@1.0.0-beta.6/components","@aimpact/ailearn-app@0.1.6-dev.20/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@1.0.0-beta.6/toast","@beyond-js/kernel@0.1.9/routing"],function(a,e){"use strict";var t,r,n,o,s,i,c,l,d,u,m,p,g,h,f,y,b,v;return a("Controller",void 0),{setters:[function(e){t=e},function(e){r=e},function(e){n=e},function(e){o=e},function(e){s=e},function(e){i=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){g=e},function(e){h=e},function(e){f=e},function(e){y=e}],execute:function(){v=r.Bundle,(b=new v({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.20/organizations/create",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",o],["@aimpact/ailearn-sdk/core",s],["@beyond-js/reactive/model",i],["@aimpact/chat-sdk/session",c],["@aimpact/ailearn-app/main-layout.widget",l],["@beyond-js/kernel/texts",d],["react",u],["pragmate-ui/form",m],["pragmate-ui/components",p],["@aimpact/ailearn-app/components/ui",g],["@beyond-js/react-18-widgets/hooks",h],["pragmate-ui/toast",f],["@beyond-js/kernel/routing",y]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-organizations-create",vspecifier:"@aimpact/ailearn-app@0.1.6-dev.20/organizations/create.widget",is:"page",route:"/organizations/create",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.20/organizations/create.widget"),(v=new Map).set("./controller",{hash:940274451,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=e("@beyond-js/react-18-widgets/page"),a=e("./store"),n=e("./views");class o extends r.PageReactWidgetController{#store;createStore(){return this.#store=new a.StoreManager,this.#store}get Widget(){return n.View}show(){this.#store.load(this.uri.qs.get("id"))}hide(){this.#store.clear()}}t.Controller=o}}),v.set("./store",{hash:3632327376,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var r=e("@aimpact/ailearn-sdk/core"),a=e("@beyond-js/reactive/model"),n=e("@aimpact/chat-sdk/session"),o=e("@aimpact/ailearn-app/main-layout.widget"),s=e("@beyond-js/kernel/texts"),i=e("beyond_context");class c extends a.ReactiveModel{#model;get model(){return this.#model}#texts=new s.CurrentTexts(i.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.#texts.on("change",this.triggerEvent)}clear(){this.#model=void 0,super.ready=!1}setBreadcrumb(){var e=this.setBreadcrumb.bind(this);this.#texts.ready?(this.#texts.off("change",e),o.LayoutBroker.overlay=!1,globalThis.setTimeout(()=>{o.LayoutBroker.breadcrumb=[[this.texts.breadcrumb.organizations,"/organizations/list"],[this.texts.breadcrumb.management,""]]},100)):this.#texts.on("change",e)}async load(){try{this.setBreadcrumb(),this.#model=new r.Organization({})}catch(e){console.error(e)}finally{super.ready=!0}}async delete(e){this.#model.classrooms.remove(e),this.trigger("change")}async save(e){try{this.fetching=!0;var{status:t,data:r}=await this.model.save({...e});if(n.sessionWrapper.user.load(),t)return r;throw new Error("error publishing classroom")}catch(e){console.error(1,e)}finally{this.fetching=!1}}async publish(e){try{this.fetching=!0;var{status:t,data:r}=await this.model.save({...e});if(t)return await n.sessionWrapper.user.load(),r;throw new Error("error publishing classroom")}catch(e){console.error(1,e)}finally{this.fetching=!1}}}t.StoreManager=c}}),v.set("./views/context",{hash:952274567,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var r=e("react");const a=t.ModuleContext=r.createContext({});t.useModuleContext=()=>r.useContext(a)}}),v.set("./views/index",{hash:2538735134,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,r]=l.useState(e.ready),a=((0,h.useBinder)([e],()=>r(e.ready)),e.texts),{fetching:n,values:o,onChange:s,onSubmit:i}=(0,g.useForm)(t,e,a);var c;return t?(c={disabled:n||""===o.name},l.createElement(p.ModuleContext.Provider,{value:{texts:a,store:e}},l.createElement(m.PageContainer,{className:"form-page-container",fetching:n},l.createElement("header",{className:"page__header"},l.createElement("h3",null,a.create.title)),l.createElement("div",{className:"mt-15"}),l.createElement(d.Form,{onSubmit:i,className:"form__container"},l.createElement(d.Input,{label:a.create.name.label,placeholder:a.create.name.placeholder,value:o.name,name:"name",type:"text",onChange:s,required:!0}),l.createElement(d.Textarea,{label:a.create.description.label,name:"description",value:o.description,placeholder:a.create.description.placeholder,onChange:s}),l.createElement("div",{className:"form__footer"},l.createElement(u.Button,{fetching:n,...c,variant:"primary",type:"submit"},a.create.actions.save)))))):null};var l=e("react"),d=e("pragmate-ui/form"),u=e("pragmate-ui/components"),m=e("@aimpact/ailearn-app/components/ui"),p=e("./context"),g=e("./use-form"),h=e("@beyond-js/react-18-widgets/hooks")}}),v.set("./views/use-form",{hash:1912930700,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useForm=function(e,t,r){const a={name:t?.model?.name||"",description:t?.model?.description||""},[n,o]=d.useState(a),[s,i]=d.useState(!1),[,c]=d.useState("");if((0,p.useBinder)([t],()=>{t.ready||o(a)}),!e)return{};const l=t.model;return{values:n,fetching:s,setFetching:i,onChange:({currentTarget:e})=>{var t={...n};t[e.name]=e.value,o(t),c("")},onSubmit:async e=>{e.preventDefault(),e.stopPropagation(),i(!0);try{await t.publish(n),u.toast.success(r.create.success),m.routing.replaceState({},null,"/organizations/view/"+l.id)}catch(e){c(e.message),u.toast.error(r.create.error)}finally{i(!1)}}}};var d=e("react"),u=e("pragmate-ui/toast"),m=e("@beyond-js/kernel/routing"),p=e("@beyond-js/react-18-widgets/hooks")}}),v.set("./views/use-model",{hash:1182693627,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModel=function(t){var[e,,]=o.useState(t.ready),[r,a]=(0,n.useTexts)(s.module.specifier);return o.useEffect(()=>{const e=()=>{};return t.on("change",e),()=>t.off("change",e)}),{ready:e&&r,store:t,texts:a}};var n=e("@beyond-js/react-18-widgets/hooks"),o=e("react"),s=e("beyond_context")}}),b.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"}],b.exports.process=function({require:e,prop:t,value:r}){!e&&"Controller"!==t||a("Controller",e?e("./controller").Controller:r)},a("__beyond_pkg",b),a("hmr",new function(){this.on=(e,t)=>b.hmr.on(e,t),this.off=(e,t)=>b.hmr.off(e,t)}),b.initialise(v)}}});