System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.1.12/model","@aimpact/chat-sdk@1.0.0/session","react@18.2.0","pragmate-ui@0.1.1/toast","@beyond-js/kernel@0.1.9/routing","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.0.40/components/navbar-header.code","@aimpact/ailearn-app@0.0.40/config","pragmate-ui@0.1.1/form","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.40/components/ui","pragmate-ui@0.1.1/form/react-select"],function(r,e){"use strict";var t,a,n,o,s,i,c,l,u,d,m,p,h,f,g,v,b,y,w;return r({Controller:void 0,Header:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){o=e},function(e){s=e},function(e){i=e},function(e){c=e},function(e){l=e},function(e){u=e},function(e){d=e},function(e){m=e},function(e){p=e},function(e){h=e},function(e){f=e},function(e){g=e},function(e){v=e},function(e){b=e}],execute:function(){w=a.Bundle,(y=new w({module:{vspecifier:"@aimpact/ailearn-app@0.0.40/classrooms/create",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",o],["@aimpact/ailearn-sdk/core",s],["@beyond-js/reactive/model",i],["@aimpact/chat-sdk/session",c],["react",l],["pragmate-ui/toast",u],["@beyond-js/kernel/routing",d],["@beyond-js/react-18-widgets/hooks",m],["@aimpact/ailearn-app/components/navbar-header.code",p],["@aimpact/ailearn-app/config",h],["pragmate-ui/form",f],["pragmate-ui/components",g],["@aimpact/ailearn-app/components/ui",v],["pragmate-ui/form/react-select",b]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-classrooms-create",vspecifier:"@aimpact/ailearn-app@0.0.40/classrooms/create.widget",is:"page",route:"/classrooms/create",layout:"general-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.40/classrooms/create.widget"),(w=new Map).set("./controller",{hash:940274451,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),r=e("./store"),n=e("./views");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager,this.#store}get Widget(){return n.View}show(){this.#store.load(this.uri.qs.get("id"))}hide(){this.#store.clear()}}t.Controller=o}}),w.set("./store",{hash:1870079049,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-sdk/core"),r=e("@beyond-js/reactive/model"),n=e("@aimpact/chat-sdk/session");class o extends r.ReactiveModel{#model;get model(){return this.#model}get user(){return n.sessionWrapper.user}clear(){this.#model=void 0,this.ready=!1}async load(){try{this.ready=!1,this.#model=new a.Classroom({})}catch(e){console.error(e)}finally{this.ready=!0}}async delete(e){this.#model.classrooms.remove(e),this.trigger("change")}async save(e){try{this.fetching=!0;var{status:t,data:a}=await this.model.save({...e});if(t)return a;throw new Error("error publishing classroom")}catch(e){console.error(1,e)}finally{this.fetching=!1}}}t.StoreManager=o}}),w.set("./views/context",{hash:952274567,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");const r=t.ModuleContext=a.createContext({});t.useModuleContext=()=>a.useContext(r)}}),w.set("./views/events",{hash:2933641159,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useForm=function(e,t,a){const r={name:t?.model?.name||"",description:t?.model?.description||""},[n,o]=u.useState(r),[s,i]=u.useState(!1),[,c]=u.useState("");if((0,p.useBinder)([t],()=>{t.ready||o(r)}),!e)return{};const l=t["model"];return{values:n,fetching:s,setFetching:i,onChange:({currentTarget:e})=>{var t={...n};t[e.name]=e.value,o(t),c("")},onSubmit:async e=>{e.preventDefault(),e.stopPropagation(),i(!0);try{await l.publish(n),d.toast.success(a.create.success),m.routing.replaceState({},null,"/classrooms/view/"+l.id)}catch(e){c(e.message),d.toast.error(a.create.error)}finally{i(!1)}},setValues:o}};var u=e("react"),d=e("pragmate-ui/toast"),m=e("@beyond-js/kernel/routing"),p=e("@beyond-js/react-18-widgets/hooks")}}),w.set("./views/header",{hash:3746281293,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){var e=(0,n.useModuleContext)()["texts"];return r.createElement("section",null,r.createElement(a.NavbarHeader,{breadcrumb:[[e.breadcrumb.organizations,"/organizations/list"],[e.breadcrumb.management,""]]}))};var a=e("@aimpact/ailearn-app/components/navbar-header.code"),r=e("react"),n=e("./context")}}),w.set("./views/index",{hash:2993569487,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){var{ready:t,texts:a}=(0,h.useModel)(e),{fetching:r,values:n,onChange:o,onSubmit:s,setValues:i}=(0,f.useForm)(t,e,a);if(!t)return null;t={disabled:r||""===n.name},e={texts:a,store:e};return c.createElement(m.ModuleContext.Provider,{value:e},c.createElement(p.Header,null),c.createElement(d.PageContainer,{className:"form-page-container",fetching:r},c.createElement("header",{className:"page__header"},c.createElement("h3",null,a.create.title)),c.createElement(l.Form,{onSubmit:s,className:"form__container"},c.createElement(g.OwnershipField,{setValues:i,values:n}),c.createElement(l.Input,{label:a.create.name.label,placeholder:a.create.name.placeholder,value:n.name,name:"name",type:"text",onChange:o,required:!0}),c.createElement(l.Textarea,{label:a.create.description.label,name:"description",value:n.description,placeholder:a.create.description.placeholder,onChange:o}),c.createElement("div",{className:"form__footer"},c.createElement(u.Button,{fetching:r,...t,variant:"primary",type:"submit"},a.create.actions.save)))))};var c=e("react"),l=e("pragmate-ui/form"),u=e("pragmate-ui/components"),d=e("@aimpact/ailearn-app/components/ui"),m=e("./context"),p=e("./header"),h=e("./use-model"),f=e("./events"),g=e("./ownership")}}),w.set("./views/ownership",{hash:2337657386,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OwnershipField=function({setValues:e,values:t}){const{store:a,texts:r}=(0,l.useModuleContext)();if(!a.user.teacher?.orgs)return null;var n={value:"",label:r.schools.select};var o=({currentTarget:t})=>{t.value===a.user.id?e(e=>({...e,owner:a.user.id})):e(e=>({...e,owner:t.value,organizationId:t.value}))},s=[...a.user.teacher.orgs.map(e=>({value:e.id,label:e.name})),{value:a.user.id,label:r.schools.own}];return i.default.createElement("div",null,i.default.createElement("label",{htmlFor:""},r.schools.label),i.default.createElement(c.ReactSelect,{value:t.owner,defaultOption:n,name:"owner",options:s,onChange:o}))};var i=e("react"),c=e("pragmate-ui/form/react-select"),l=e("./context")}}),w.set("./views/use-model",{hash:1182693627,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModel=function(t){var[e,,]=o.useState(t.ready),[a,r]=(0,n.useTexts)(s.module.specifier);return o.useEffect(()=>{const e=()=>{};t.on("change",e);return()=>t.off("change",e)}),{ready:e&&a,store:t,texts:r}};var n=e("@beyond-js/react-18-widgets/hooks"),o=e("react"),s=e("beyond_context")}}),y.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/header",from:"Header",name:"Header"}],y.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:a),!e&&"Header"!==t||r("Header",e?e("./views/header").Header:a)},r("__beyond_pkg",y),r("hmr",new function(){this.on=(e,t)=>y.hmr.on(e,t),this.off=(e,t)=>y.hmr.off(e,t)}),y.initialise(w)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZXZlbnRzLnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvdXNlLW1vZGVsLnRzeCJdLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIiNzdG9yZSIsImNyZWF0ZVN0b3JlIiwidGhpcyIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInFzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwiI21vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ1bmRlZmluZWQiLCJyZWFkeSIsIkNsYXNzcm9vbSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJpZCIsImNsYXNzcm9vbXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiZGF0YSIsImF3YWl0IiwiRXJyb3IiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJzdG9yZSIsInRleHRzIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsIl9ob29rcyIsInVzZUJpbmRlciIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsInZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHVibGlzaCIsIl90b2FzdCIsInRvYXN0Iiwic3VjY2VzcyIsImNyZWF0ZSIsIl9yb3V0aW5nIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsIm1lc3NhZ2UiLCJfY29udGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJfbmF2YmFySGVhZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIm9yZ2FuaXphdGlvbnMiLCJtYW5hZ2VtZW50IiwiX3VzZU1vZGVsIiwidXNlTW9kZWwiLCJfZXZlbnRzIiwidXNlRm9ybSIsImRpc2FibGVkIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJfaGVhZGVyIiwiSGVhZGVyIiwiX3VpIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsInRpdGxlIiwiX2Zvcm0iLCJGb3JtIiwiX293bmVyc2hpcCIsIk93bmVyc2hpcEZpZWxkIiwiSW5wdXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInJlcXVpcmVkIiwiVGV4dGFyZWEiLCJfY29tcG9uZW50cyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwidGVhY2hlciIsIm9yZ3MiLCJsZXQiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsInNlbGVjdCIsIm93bmVyIiwib3JnYW5pemF0aW9uSWQiLCJvcHRpb25zIiwibWFwIiwiaXRlbSIsIm93biIsIl9yZWFjdCIsImRlZmF1bHQiLCJodG1sRm9yIiwiX3JlYWN0U2VsZWN0IiwiUmVhY3RTZWxlY3QiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VFZmZlY3QiLCJvbiIsImNsZWFuVXAiLCJvZmYiXSwibWFwcGluZ3MiOiJ3cEVBQUEsSUFBQUEsRUFBQUMsRUFBQSxrQ0FBQSxFQUNBQyxFQUFBRCxFQUFBLFNBQUEsRUFDQUUsRUFBQUYsRUFBQSxTQUFBLFFBR01HLFVBQW1C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