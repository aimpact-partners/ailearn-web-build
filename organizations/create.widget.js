System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.1.12/model","@aimpact/chat-sdk@1.0.0/session","react@18.2.0","@aimpact/ailearn-app@0.0.34.dev-01/components/navbar-header.code","@aimpact/ailearn-app@0.0.34.dev-01/config","pragmate-ui@0.1.1/form","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.34.dev-01/components/ui","pragmate-ui@0.1.1/toast","@beyond-js/kernel@0.1.9/routing","@beyond-js/react-18-widgets@1.1.2/hooks"],function(r,e){"use strict";var t,a,n,o,s,i,c,l,d,u,m,p,h,g,f,v,y,b;return r({Controller:void 0,Header:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){o=e},function(e){s=e},function(e){i=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){h=e},function(e){g=e},function(e){f=e},function(e){v=e}],execute:function(){b=a.Bundle,(y=new b({module:{vspecifier:"@aimpact/ailearn-app@0.0.34.dev-01/organizations/create",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",o],["@aimpact/ailearn-sdk/core",s],["@beyond-js/reactive/model",i],["@aimpact/chat-sdk/session",c],["react",l],["@aimpact/ailearn-app/components/navbar-header.code",d],["@aimpact/ailearn-app/config",u],["pragmate-ui/form",m],["pragmate-ui/components",p],["@aimpact/ailearn-app/components/ui",h],["pragmate-ui/toast",g],["@beyond-js/kernel/routing",f],["@beyond-js/react-18-widgets/hooks",v]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-organizations-create",vspecifier:"@aimpact/ailearn-app@0.0.34.dev-01/organizations/create.widget",is:"page",route:"/organizations/create",layout:"general-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.34.dev-01/organizations/create.widget"),(b=new Map).set("./controller",{hash:940274451,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),r=e("./store"),n=e("./views");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager,this.#store}get Widget(){return n.View}show(){this.#store.load(this.uri.qs.get("id"))}hide(){this.#store.clear()}}t.Controller=o}}),b.set("./store",{hash:523044439,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-sdk/core"),r=e("@beyond-js/reactive/model"),n=e("@aimpact/chat-sdk/session");class o extends r.ReactiveModel{#model;get model(){return this.#model}clear(){this.#model=void 0,this.ready=!1}async load(){try{this.ready=!1,this.#model=new a.Organization({})}catch(e){console.error(e)}finally{this.ready=!0}}async delete(e){this.#model.classrooms.remove(e),this.trigger("change")}async save(e){try{this.fetching=!0;var{status:t,data:a}=await this.model.save({...e});if(t)return a;throw new Error("error publishing classroom")}catch(e){console.error(1,e)}finally{this.fetching=!1}}async publish(e){try{this.fetching=!0;var{status:t,data:a}=await this.model.save({...e});if(t)return await n.sessionWrapper.user.load(),a;throw new Error("error publishing classroom")}catch(e){console.error(1,e)}finally{this.fetching=!1}}}t.StoreManager=o}}),b.set("./views/context",{hash:952274567,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");const r=t.ModuleContext=a.createContext({});t.useModuleContext=()=>a.useContext(r)}}),b.set("./views/header",{hash:3746281293,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){var e=(0,n.useModuleContext)()["texts"];return r.createElement("section",null,r.createElement(a.NavbarHeader,{breadcrumb:[[e.breadcrumb.organizations,"/organizations/list"],[e.breadcrumb.management,""]]}))};var a=e("@aimpact/ailearn-app/components/navbar-header.code"),r=e("react"),n=e("./context")}}),b.set("./views/index",{hash:1305740004,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){var{ready:t,texts:a}=(0,p.useModel)(e),{fetching:r,values:n,onChange:o,onSubmit:s}=(0,h.useForm)(t,e,a);if(!t)return null;t={disabled:r||""===n.name||""===n.description},e={texts:a,store:e};return i.createElement(u.ModuleContext.Provider,{value:e},i.createElement(m.Header,null),i.createElement(d.PageContainer,{className:"form-page-container",fetching:r},i.createElement("header",{className:"page__header"},i.createElement("h3",null,a.create.title)),i.createElement(c.Form,{onSubmit:s,className:"form__container"},i.createElement(c.Input,{label:a.create.name.label,placeholder:a.create.name.placeholder,value:n.name,name:"name",type:"text",onChange:o,required:!0}),i.createElement(c.Textarea,{label:a.create.description.label,name:"description",value:n.description,placeholder:a.create.description.placeholder,onChange:o,required:!0}),i.createElement("div",{className:"form__footer"},i.createElement(l.Button,{fetching:r,...t,variant:"primary",type:"submit"},a.create.actions.save)))))};var i=e("react"),c=e("pragmate-ui/form"),l=e("pragmate-ui/components"),d=e("@aimpact/ailearn-app/components/ui"),u=e("./context"),m=e("./header"),p=e("./use-model"),h=e("./use-form")}}),b.set("./views/use-form",{hash:1912930700,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useForm=function(e,t,a){const r={name:t?.model?.name||"",description:t?.model?.description||""},[n,o]=d.useState(r),[s,i]=d.useState(!1),[,c]=d.useState("");if((0,p.useBinder)([t],()=>{t.ready||o(r)}),!e)return{};const l=t["model"];return{values:n,fetching:s,setFetching:i,onChange:({currentTarget:e})=>{var t={...n};t[e.name]=e.value,o(t),c("")},onSubmit:async e=>{e.preventDefault(),e.stopPropagation(),i(!0);try{await t.publish(n),u.toast.success(a.create.success),m.routing.replaceState({},null,"/organizations/view/"+l.id)}catch(e){c(e.message),u.toast.error(a.create.error)}finally{i(!1)}}}};var d=e("react"),u=e("pragmate-ui/toast"),m=e("@beyond-js/kernel/routing"),p=e("@beyond-js/react-18-widgets/hooks")}}),b.set("./views/use-model",{hash:1182693627,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModel=function(t){var[e,,]=o.useState(t.ready),[a,r]=(0,n.useTexts)(s.module.specifier);return o.useEffect(()=>{const e=()=>{};t.on("change",e);return()=>t.off("change",e)}),{ready:e&&a,store:t,texts:r}};var n=e("@beyond-js/react-18-widgets/hooks"),o=e("react"),s=e("beyond_context")}}),y.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/header",from:"Header",name:"Header"}],y.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:a),!e&&"Header"!==t||r("Header",e?e("./views/header").Header:a)},r("__beyond_pkg",y),r("hmr",new function(){this.on=(e,t)=>y.hmr.on(e,t),this.off=(e,t)=>y.hmr.off(e,t)}),y.initialise(b)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvdXNlLWZvcm0udHMiLCIvdHMvdmlld3MvdXNlLW1vZGVsLnRzeCJdLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIiNzdG9yZSIsImNyZWF0ZVN0b3JlIiwidGhpcyIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInFzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwiI21vZGVsIiwibW9kZWwiLCJ1bmRlZmluZWQiLCJyZWFkeSIsIk9yZ2FuaXphdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJpZCIsImNsYXNzcm9vbXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiZGF0YSIsImF3YWl0IiwiRXJyb3IiLCJwdWJsaXNoIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidGV4dHMiLCJfY29udGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJfbmF2YmFySGVhZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIm9yZ2FuaXphdGlvbnMiLCJtYW5hZ2VtZW50Iiwic3RvcmUiLCJfdXNlTW9kZWwiLCJ1c2VNb2RlbCIsIm9uQ2hhbmdlIiwib25TdWJtaXQiLCJfdXNlRm9ybSIsInVzZUZvcm0iLCJkaXNhYmxlZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJfaGVhZGVyIiwiSGVhZGVyIiwiX3VpIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsImNyZWF0ZSIsInRpdGxlIiwiX2Zvcm0iLCJGb3JtIiwiSW5wdXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInJlcXVpcmVkIiwiVGV4dGFyZWEiLCJfY29tcG9uZW50cyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsIl9ob29rcyIsInVzZUJpbmRlciIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiX3RvYXN0IiwidG9hc3QiLCJzdWNjZXNzIiwiX3JvdXRpbmciLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwibWVzc2FnZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUVmZmVjdCIsIm9uIiwiY2xlYW5VcCIsIm9mZiJdLCJtYXBwaW5ncyI6Im9uRUFBQSxJQUFBQSxFQUFBQyxFQUFBLGtDQUFBLEVBQ0FDLEVBQUFELEVBQUEsU0FBQSxFQUNBRSxFQUFBRixFQUFBLFNBQUEsUUFHTUcsVUFBbUJKLEVBQUFLLDBCQUN4QkMsT0FDQUMsY0FFQyxPQURBQyxLQUFLRixPQUFTLElBQUlKLEVBQUFPLGFBQ1hELEtBQUtGLE1BQ2IsQ0FDQUksYUFDQyxPQUFPUCxFQUFBUSxJQUNSLENBRUFDLE9BQ0NKLEtBQUtGLE9BQU9PLEtBQUtMLEtBQUtNLElBQUlDLEdBQUdDLElBQUksSUFBSSxDQUFDLENBQ3ZDLENBRUFDLE9BQ0NULEtBQUtGLE9BQU9ZLE1BQUssQ0FDbEIsQyxDQUNBQyxFQUFBZixX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