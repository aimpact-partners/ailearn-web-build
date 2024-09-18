System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","pragmate-ui@1.0.0-beta.6/components","pragmate-ui@1.0.0-beta.6/list","@aimpact/ailearn-app@0.1.6-dev.36/components/ui","pragmate-ui@1.0.0-beta.6/empty","pragmate-ui@1.0.0-beta.6/modal","@aimpact/ailearn-app@0.1.6-dev.36/config","pragmate-ui@1.0.0-beta.6/toast","pragmate-ui@1.0.0-beta.6/icons","@aimpact/ailearn-app@0.1.6-dev.36/components/icons","@beyond-js/reactive@1.2.0/model","@aimpact/ailearn-sdk@1.0.0/core","@aimpact/chat-sdk@1.2.0/session","@beyond-js/kernel@0.1.9/styles"],function(s,e){"use strict";var t,a,n,o,r,i,l,c,m,d,u,p,f,g,h,y,v;return s("ModuleAssignments",void 0),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){o=e},function(e){r=e},function(e){i=e},function(e){l=e},function(e){c=e},function(e){m=e},function(e){d=e},function(e){u=e},function(e){p=e},function(e){f=e},function(e){g=e},function(e){h=e}],execute:function(){v=t.Bundle,(y=new v({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.36/modules/assign"},type:"code"},e.meta.url).package()).dependencies.update([["react",a],["pragmate-ui/components",n],["pragmate-ui/list",o],["@aimpact/ailearn-app/components/ui",r],["pragmate-ui/empty",i],["pragmate-ui/modal",l],["@aimpact/ailearn-app/config",c],["pragmate-ui/toast",m],["pragmate-ui/icons",d],["@aimpact/ailearn-app/components/icons",u],["@beyond-js/reactive/model",p],["@aimpact/ailearn-sdk/core",f],["@aimpact/chat-sdk/session",g],["@beyond-js/kernel/styles",h]]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.36/modules/assign"),(v=new Map).set("./classrooms",{hash:2823949906,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Classrooms=void 0;var r=e("react"),i=e("pragmate-ui/components"),l=e("./item"),c=e("pragmate-ui/list"),m=e("./empty"),d=e("@aimpact/ailearn-app/components/ui");t.Classrooms=({onClose:e,state:t,module:a,texts:s})=>{var[n,o]=r.default.useState();return t.ready?0===t.model.items.length?r.default.createElement(m.EmptyList,{texts:s}):(t=t.model.items,r.default.createElement(r.default.Fragment,null,r.default.createElement("header",null,r.default.createElement("h3",null,s.title),r.default.createElement("h5",{className:"module-name"},s.module,": ",a.title)),r.default.createElement("div",{className:"modal__container"},r.default.createElement(d.ErrorRenderer,{error:n}),r.default.createElement(c.List,{className:"classroom__list",items:t,control:l.ClassroomItem,specs:{module:a,texts:s,onClose:e,setError:o}})))):r.default.createElement(i.Spinner,{active:!0})}}}),v.set("./empty",{hash:511639491,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function({texts:e}){return a.default.createElement("div",null,a.default.createElement(s.Empty,null,a.default.createElement("h3",null,e.empty.title),a.default.createElement("p",null,e.empty.description),a.default.createElement("div",{className:"empty__actions"},a.default.createElement(n.Link,{href:"/classrooms/create",className:"btn btn-primary btn-bordered"},e.empty.action))))};var a=e("react"),s=e("pragmate-ui/empty"),n=e("pragmate-ui/components")}}),v.set("./index",{hash:1516419438,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleAssignments=function({onClose:e,item:t,texts:a}){var[,s]=(0,i.useStore)({module:t});return n.default.createElement(r.Modal,{show:!0,onClose:e,closeBackdrop:!1,className:"modal--assignment"},n.default.createElement(o.Classrooms,{onClose:e,state:s,module:t,texts:a}))};var n=e("react"),o=e("./classrooms"),r=e("pragmate-ui/modal"),i=e("./use-store")}}),v.set("./item/actions",{hash:1846059321,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ItemActions=void 0;var d=e("pragmate-ui/components"),u=e("react"),p=e("@aimpact/ailearn-app/config"),f=e("pragmate-ui/toast"),g=e("pragmate-ui/icons"),h=e("@aimpact/ailearn-app/components/icons");t.ItemActions=e=>{const{setError:a,texts:s,module:n,onClose:t,item:o}=e,[r,i]=u.default.useState(!1),[l,c]=u.default.useState(n.assignments.classrooms.get(o.id));if(l){const m=""+p.default.params.baseUrl+l.link;return u.default.createElement("div",{className:"item__actions flex flex-container flex-vertical-center flex-space-between"},u.default.createElement(d.Link,{title:s.dashboard,onClick:t,target:"_blank",href:l.dashboard},u.default.createElement(h.AppIconButton,{bordered:!0,className:"circle",icon:"dashboard",title:s.actions.dashboard})),u.default.createElement(d.Link,{title:s.dashboard,onClick:t,target:"_blank",href:m},u.default.createElement(h.AppIconButton,{bordered:!0,className:"circle",icon:"link",title:s.actions.navigate})),u.default.createElement(g.IconButton,{className:"circle",icon:"copy",onClick:e=>{e.stopPropagation(),navigator.clipboard.writeText(m),f.toast.success(s.messages.copied)},title:s.actions.copy}))}return u.default.createElement("div",{className:"item__actions"},u.default.createElement(d.Button,{variant:"primary",bordered:!0,loading:r,onClick:async e=>{try{e.stopPropagation(),i(!0),e.preventDefault();var t=await n.assignments.add(o.id);c(t),i(!1),f.toast.success(s.messages.assigned)}catch(e){a(s.errors.default)}}},s.actions.assign.button))}}}),v.set("./item/index",{hash:470978484,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ClassroomItem=void 0;var s=e("react"),n=e("./actions"),o=e("@aimpact/ailearn-app/components/ui");t.ClassroomItem=({item:e,...t})=>{var a=""+e.name+(e.section?" - "+e.section:"");return s.default.createElement("li",{key:e.id},s.default.createElement(o.EntityImage,{entity:"classroom",ratio:"square",className:"list-item__image"}),s.default.createElement("section",{className:"list-item__content"},s.default.createElement("h4",null,a),s.default.createElement("div",{className:"item__actions"},s.default.createElement(n.ItemActions,{item:e,...t}))))}}}),v.set("./store",{hash:3977937475,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),s=e("@aimpact/ailearn-sdk/core"),n=e("@aimpact/chat-sdk/session");class o extends a.ReactiveModel{properties=["model"];#module;get module(){return this.#module}#associated;get associated(){return this.#associated}constructor(e){super(),this.model=new s.Classrooms,this.model.on("change",this.triggerEvent),this.load(e)}async load(e){this.#module=e.module,this.#associated=e.associated;try{const e={user:!0};this.#module.owner?.id&&this.#module.owner?.id!==n.sessionWrapper.user.id&&(e.organizationId=this.module.owner?.id),await this.model.load(e),this.ready=!0}catch(e){console.error(e)}}async delete(e){await e.delete()}}t.StoreManager=o}}),v.set("./use-store",{hash:4027213740,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useStore=function(a){const[e,s]=o.default.useState(),[t,n]=o.default.useState({});return o.default.useEffect(()=>{const t=new r.StoreManager(a),e=(s(t),()=>{n(e=>({...e,ready:t.ready,...t.getProperties()}))});return t.on("change",e),()=>{t.off("change",e)}},[]),[e,t]};var o=e("react"),r=e("./store")}}),y.exports.descriptor=[{im:"./index",from:"ModuleAssignments",name:"ModuleAssignments"}],y.exports.process=function({require:e,prop:t,value:a}){!e&&"ModuleAssignments"!==t||s("ModuleAssignments",e?e("./index").ModuleAssignments:a)},s("__beyond_pkg",y),s("hmr",new function(){this.on=(e,t)=>y.hmr.on(e,t),this.off=(e,t)=>y.hmr.off(e,t)}),y.initialise(v)}}});