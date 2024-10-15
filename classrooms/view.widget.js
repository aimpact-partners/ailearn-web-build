System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-app@0.1.13/main-layout.widget","@aimpact/ailearn-app@0.1.13/widgets/base","@aimpact/ailearn-sdk@1.0.0/entities/classrooms","react@18.2.0","pragmate-ui@1.0.0-beta.6/alert","pragmate-ui@1.0.0-beta.6/modal","pragmate-ui@1.0.0-beta.6/form","pragmate-ui@1.0.0-beta.6/form/react-select","pragmate-ui@1.0.0-beta.6/components","@aimpact/ailearn-app@0.1.13/components/ui","pragmate-ui@1.0.0-beta.6/toast","pragmate-ui@1.0.0-beta.6/icons","@aimpact/ailearn-app@0.1.13/config","@aimpact/ailearn-app@0.1.13/components/icons","@beyond-js/kernel@0.1.9/routing","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@1.0.0-beta.6/list","@aimpact/chat-sdk@1.3.0/session","pragmate-ui@1.0.0-beta.6/image","framer-motion@10.18.0"],function(n,e){var t,a,o,r,l,i,s,c,m,u,d,f,p,g,v,h,y,E,b,w,C,x,_,M,N,j;return n({Controller:void 0,StoreManager:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){o=e},function(e){r=e},function(e){l=e},function(e){i=e},function(e){s=e},function(e){c=e},function(e){m=e},function(e){u=e},function(e){d=e},function(e){f=e},function(e){p=e},function(e){g=e},function(e){v=e},function(e){h=e},function(e){y=e},function(e){E=e},function(e){b=e},function(e){w=e},function(e){C=e},function(e){x=e},function(e){_=e},function(e){M=e}],execute:function(){j=a.Bundle,(N=new j({module:{vspecifier:"@aimpact/ailearn-app@0.1.13/classrooms/view",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",o],["@beyond-js/react-18-widgets/page",r],["@aimpact/ailearn-app/main-layout.widget",l],["@aimpact/ailearn-app/widgets/base",i],["@aimpact/ailearn-sdk/entities/classrooms",s],["react",c],["pragmate-ui/alert",m],["pragmate-ui/modal",u],["pragmate-ui/form",d],["pragmate-ui/form/react-select",f],["pragmate-ui/components",p],["@aimpact/ailearn-app/components/ui",g],["pragmate-ui/toast",v],["pragmate-ui/icons",h],["@aimpact/ailearn-app/config",y],["@aimpact/ailearn-app/components/icons",E],["@beyond-js/kernel/routing",b],["@beyond-js/react-18-widgets/hooks",w],["pragmate-ui/list",C],["@aimpact/chat-sdk/session",x],["pragmate-ui/image",_],["framer-motion",M]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-classrooms-view",vspecifier:"@aimpact/ailearn-app@0.1.13/classrooms/view.widget",is:"page",route:"/classrooms/view/${id}",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.13/classrooms/view.widget"),(j=new Map).set("./controller",{hash:2137039665,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),o=e("./views"),r=e("@aimpact/ailearn-app/main-layout.widget");class l extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return o.View}show(){this.#store.load(this.uri.vars.get("id")),r.LayoutBroker.refresh=()=>this.#store.load(this.uri.vars.get("id"))}hide(){r.LayoutBroker.refresh=null}}t.Controller=l}}),j.set("./store",{hash:3153977744,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-app/widgets/base"),n=e("beyond_context"),o=e("@aimpact/ailearn-sdk/entities/classrooms");class r extends a.ViewStoreManager{get isAdmin(){return!!this.model?.isAdmin}constructor(){super(n.module.specifier,o.Classroom),this.defineReactiveProps(["fetching"])}async approve({uid:e,role:t}){try{this.fetching=!0;var a=await this.model.approve({id:this.model.id,uid:e,role:t});if(a.status)return a;throw new Error("Error inviting user")}catch(e){console.error(e)}finally{this.fetching=!1}}async reject(e){try{return this.fetching=!0,await this.model.reject({id:this.model.id,uid:e})}catch(e){console.error(1,e)}finally{this.fetching=!1}}async cancelInvitation(e){try{return this.fetching=!0,await this.model.cancelInvitation({id:this.model.id,email:e})}catch(e){console.error(1,e)}finally{this.fetching=!1}}async updateRole(e){try{return this.fetching=!0,await this.model.updateRole(e)}catch(e){console.error(e)}finally{this.fetching=!1}}async removeMember(e){try{return this.fetching=!0,await this.model.removeMember({id:this.model.id,uid:e})}catch(e){console.error(e)}finally{this.fetching=!1}}}t.StoreManager=r}}),j.set("./views/coins",{hash:3348126422,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EntityCoins=function(){var{store:e,texts:t}=(0,o.useModuleContext)(),a=e.model;return a.coins&&e.isAdmin?n.default.createElement(r.Alert,{type:"info",className:"profile-coins__section mt-15"},n.default.createElement("h3",null,t.coins.label),n.default.createElement("div",{className:"coins-detail__container"},n.default.createElement("div",{className:"coins-section__item"},n.default.createElement("span",null,t.coins.assignments),n.default.createElement("span",null,a.coins.assignments.count)),n.default.createElement("div",{className:"coins-section__item"},n.default.createElement("span",null,t.coins.modules),n.default.createElement("span",null,a.coins.modules.count)))):null};var n=e("react"),o=e("./context"),r=e("pragmate-ui/alert")}}),j.set("./views/context",{hash:631431152,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");let n=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(n)}}),j.set("./views/forms/approve",{hash:2319959616,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ApproveModal=function({item:t,show:e,onClose:a}){let{texts:n,store:o}=(0,h.useModuleContext)(),[r,l]=f.default.useState(null),[i,s]=f.default.useState(null),[c,m]=f.default.useState(!1);var u,d;return e?(u=[{value:"member",label:n.roles.member.title},{value:"manager",label:n.roles.manager.title}],d=!r,f.default.createElement(p.Modal,{show:!0,className:"modal-form",onClose:a,closeBackdrop:!(e=async e=>{e.preventDefault();try{m(!0),await o.model.approve({role:r,uid:t.uid}),b.toast.success(n.system.invite.success),a()}catch(e){s(n.errors[e.code.toString()]),console.error(e.code)}finally{m(!1)}})},f.default.createElement(g.Form,{onSubmit:e},f.default.createElement("div",{className:"header-text"},f.default.createElement("h4",null,n.forms.approve.title),f.default.createElement("span",{className:"p2"},n.forms.approve.description)),f.default.createElement(E.ErrorRenderer,{error:i}),f.default.createElement(v.ReactSelect,{options:u,placeholder:n.form.role.placeholder,onChange:e=>{l(e.target.value)}}),f.default.createElement("footer",{className:"form-actions flex-container flex-end"},f.default.createElement(y.Button,{disabled:d,type:"submit",variant:"primary",icon:"paperPlane",loading:c,onClick:e},n.actions.approve))))):null};var f=e("react"),p=e("pragmate-ui/modal"),g=e("pragmate-ui/form"),v=e("pragmate-ui/form/react-select"),h=e("../context"),y=e("pragmate-ui/components"),E=e("@aimpact/ailearn-app/components/ui"),b=e("pragmate-ui/toast")}}),j.set("./views/forms/confirm",{hash:208852941,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ConfirmModal=function({item:t,show:e,onClose:a}){let{texts:n,store:o}=(0,g.useModuleContext)(),[r,l]=u.default.useState(t.role||"teacher"),[i,s]=u.default.useState(!1);var c,m;return e?(c=[{value:"teacher",label:n.roles.member.title},{value:"manager",label:n.roles.manager.title}],m=r===t.role||i||!r,u.default.createElement(d.Modal,{show:!0,className:"modal-form",onClose:a,closeBackdrop:!(e=async e=>{e.preventDefault();try{s(!0),await o.updateRole({role:r,uid:t.uid}),h.toast.success(n.system.invite.success)}catch(e){h.toast.error("Error: Updating role"),console.error(e)}finally{s(!1)}})},u.default.createElement(f.Form,{onSubmit:e},u.default.createElement("div",{className:"header-text"},u.default.createElement("h4",null,n.editForm.title),u.default.createElement("span",{className:"p2"},n.editForm.info)),u.default.createElement(p.ReactSelect,{options:c,defaultValue:r,onChange:e=>{l(e.target.value)}}),u.default.createElement("footer",{className:"form-actions flex-container flex-end"},u.default.createElement(v.Button,{disabled:m,type:"submit",variant:"primary",icon:"paperPlane",loading:i,onClick:e},n.actions.save))))):null};var u=e("react"),d=e("pragmate-ui/modal"),f=e("pragmate-ui/form"),p=e("pragmate-ui/form/react-select"),g=e("../context"),v=e("pragmate-ui/components"),h=e("pragmate-ui/toast")}}),j.set("./views/forms/edition",{hash:2480319406,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RoleModal=function({item:t,show:e,onClose:a,role:n}){let{texts:o,store:r}=(0,v.useModuleContext)(),[l,i]=d.default.useState(t.role||"teacher"),[s,c]=d.default.useState(!1);var m,u;return e?(m=[{value:"teacher",label:o.roles.member.title},{value:"manager",label:o.roles.manager.title}],u=l===t.role||s||!l,d.default.createElement(f.Modal,{show:!0,className:"modal-form",onClose:a,closeBackdrop:!(e=async e=>{e.preventDefault();try{c(!0),await r.updateRole({role:l,uid:t.uid}),y.toast.success(o.system.invite.success)}catch(e){y.toast.error("Error: Updating role"),console.error(e)}finally{c(!1)}})},d.default.createElement(p.Form,{onSubmit:e},d.default.createElement("div",{className:"header-text"},d.default.createElement("h4",null,o.editForm.title),d.default.createElement("span",{className:"p2"},o.editForm.info)),d.default.createElement(g.ReactSelect,{value:n,options:m,onChange:e=>{i(e.target.value)}}),d.default.createElement("footer",{className:"form-actions flex-container flex-end"},d.default.createElement(h.Button,{disabled:u,type:"submit",variant:"primary",icon:"paperPlane",loading:s,onClick:e},o.actions.save))))):null};var d=e("react"),f=e("pragmate-ui/modal"),p=e("pragmate-ui/form"),g=e("pragmate-ui/form/react-select"),v=e("../context"),h=e("pragmate-ui/components"),y=e("pragmate-ui/toast")}}),j.set("./views/forms/invite",{hash:3826441221,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.InvitationForm=function({show:e,onClose:t}){let{store:a,texts:n}=(0,h.useModuleContext)(),[o,r]=p.default.useState(!1),[l,i]=p.default.useState(""),s={name:"",email:""},[c,m]=p.default.useState(s),u=()=>{m(s),i(""),r(!1),t()},d=({currentTarget:e})=>{var t={...c};t[e.name]=e.value,m(t),i("")};var f;return e?(e=["manager","member"].map(e=>({value:e,label:n.roles[e].title})),f=c.name,p.default.createElement(E.Modal,{closeBackdrop:!1,show:!0,className:"modal-form",onClose:u},p.default.createElement("header",{className:"modal-form__header"},p.default.createElement("h3",null,n.form.title)),p.default.createElement(b.ReactSelect,{name:"role",placeholder:n.form.role.placeholder,options:e,onChange:d}),p.default.createElement(g.Form,{className:"mt-15",onSubmit:async e=>{e.preventDefault(),r(!0),(await a.model.invite({...c})).status||v.toast.success(l),v.toast.success(n.system.invite.success),u()}},p.default.createElement(g.Input,{label:n.form.name.label,type:"text",name:"name",value:f,variant:"floating",onChange:d,placeholder:n.form.name.placeholder,required:!0}),p.default.createElement(g.Input,{placeholder:n.form.email.placeholder,label:n.form.email.label,type:"email",variant:"floating",name:"email",onChange:d,required:!0}),p.default.createElement("div",{className:"form-actions flex-container flex-end"},p.default.createElement(y.Button,{type:"submit",variant:"primary",loading:o,label:n.actions.invite}))))):null};var p=e("react"),g=e("pragmate-ui/form"),v=e("pragmate-ui/toast"),h=e("../context"),y=e("pragmate-ui/components"),E=e("pragmate-ui/modal"),b=e("pragmate-ui/form/react-select")}}),j.set("./views/global",{hash:2142904461,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),j.set("./views/header/code-section",{hash:956506259,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CodeSection=function(){let{store:e,texts:t}=(0,o.useModuleContext)(),a=e.model.joinSpecs.code;return n.default.createElement("div",{className:"group-code__container"},n.default.createElement("section",{className:"code-content"},n.default.createElement("span",{className:"code__label"},t.orgCode),n.default.createElement("span",{className:"code__text"},a)),n.default.createElement(r.IconButton,{"data-text":e.model.joinSpecs?.code,title:t.actions.copy,className:"copy__button",icon:"link",disabled:!e.model.joinSpecs?.code,onClick:async e=>{try{e.stopPropagation(),await navigator.clipboard.writeText(i.default.params.baseUrl+"/classrooms/join?code="+a),l.toast.success(t.messages.copy)}catch(e){console.error(t.copyError,e)}}}))};var n=e("react"),o=e("../context"),r=e("pragmate-ui/icons"),l=e("pragmate-ui/toast"),i=e("@aimpact/ailearn-app/config")}}),j.set("./views/header/header",{hash:3911763608,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderContainer=function(){let e=(0,o.useModuleContext)().store;return a.default.createElement("header",{className:"page-container__header mb-1"},a.default.createElement("div",{className:"cover-content__container bg-primary"},a.default.createElement(n.EntityImage,{src:e.model.picture,entity:"institution"}),a.default.createElement("span",null,a.default.createElement("h1",null,e.model.name))),a.default.createElement(l.AppIconButton,{className:"btn-header__edit-action",icon:"edit",onClick:()=>i.routing.pushState("/classrooms/management?id="+e.model.id)}),a.default.createElement(r.CodeSection,null))};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),o=e("../context"),r=e("./code-section"),l=e("@aimpact/ailearn-app/components/icons"),i=e("@beyond-js/kernel/routing")}}),j.set("./views/index",{hash:1138499143,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){let[t,a]=o.default.useState(e.ready),n=e.texts;return(0,i.useBinder)([e],()=>a(e.ready)),t?e.model.found&&!e.model.hasAccess?o.default.createElement("app-not-allowed",null):e.model.found?o.default.createElement(l.ModuleContext.Provider,{value:{store:e,fetching:e.fetching,texts:n}},o.default.createElement(r.PageContainer,{className:"app-classroom-creation-page",fetching:e.fetching},o.default.createElement(s.HeaderContainer,null),o.default.createElement(c.Members,null))):o.default.createElement("app-missing-control",null):o.default.createElement(r.PageLoader,{fetching:!0})};var o=e("react"),r=e("@aimpact/ailearn-app/components/ui"),l=e("./context"),i=e("@beyond-js/react-18-widgets/hooks"),s=e("./header/header"),c=e("./list")}}),j.set("./views/list/empty",{hash:1165083918,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(e){var t=(0,o.useModuleContext)().texts,t="pending"===e?t.empty.pending:t.empty.rol;return a.default.createElement(n.EmptyCard,{text:t.title,icon:"info"})};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),o=e("../context")}}),j.set("./views/list/filters",{hash:1612210512,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Filters=function({selected:e,setSelected:t}){let{texts:a,store:n}=(0,c.useModuleContext)(),o=e=>{e=e.currentTarget.value,t("all"===e?"authorizedPeople":e)},r=(0,s.useMediaQuery)();var l;return"xs"===r?(l=Object.keys(a.roles).map(e=>({value:a.roles[e].identifier,label:a.roles[e].entity})),i.default.createElement(m.ReactSelect,{value:e,name:"owner",options:l,onChange:o})):(e=Object.keys(a.roles).map(e=>{var t=n.model.pendings.length;return i.default.createElement(s.Button,{variant:"default",key:e,value:a.roles[e].identifier},i.default.createElement("div",null,a.roles[e].entity,"pending"===e&&0<t&&i.default.createElement("i",{className:"button-group__badge"},n.model.pendings.length)))}),i.default.createElement(s.ButtonGroup,{onChange:o,selected:0,orientation:"column",size:"tall",variant:"default"},e))};var i=e("react"),s=e("pragmate-ui/components"),c=e("../context"),m=e("pragmate-ui/form/react-select")}}),j.set("./views/list/index",{hash:4264040610,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Members=function(){let{texts:e,store:t}=(0,m.useModuleContext)(),[a,n]=c.default.useState("authorizedPeople"),[o,r]=c.default.useState(!1),l=()=>r(!o),[,i]=c.default.useState(performance.now()),s=(globalThis.model=t.model,t.model[a]);return(0,v.useBinder)([t.model],()=>i(performance.now())),c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"flex-container flex-space-between"},c.default.createElement(h.Filters,{selected:a,setSelected:n})," ",t.isAdmin&&c.default.createElement(f.Button,{icon:"add",label:e.actions.invite,className:"add",onClick:l})),0===s.length?c.default.createElement(p.EmptyList,{role:a}):c.default.createElement(d.List,{className:"people-list__container",items:s,control:u.Item}),c.default.createElement(g.InvitationForm,{show:o,onClose:l,role:a}))};var c=e("react"),m=e("../context"),u=e("./item"),d=e("pragmate-ui/list"),f=e("pragmate-ui/components"),p=e("./empty"),g=e("../forms/invite"),v=e("@beyond-js/react-18-widgets/hooks"),h=e("./filters")}}),j.set("./views/list/item/actions",{hash:1222758772,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ItemActions=function({item:e}){let{texts:t,store:a}=(0,m.useModuleContext)(),[n,o]=s.default.useState(!1),[r,l]=s.default.useState(!1),i=()=>a.removeMember(e.uid);return a.model.isAdmin&&e.id!==f.sessionWrapper.user.id?s.default.createElement(s.default.Fragment,null,s.default.createElement("section",{className:"item-actions"},s.default.createElement(c.AppIconButton,{title:t.actions.delete,onClick:()=>l(!r),icon:"delete",variant:"default",sizing:"sm",className:"circle"})),n&&s.default.createElement(u.RoleModal,{item:e,show:n,onClose:()=>o(!n),role:e.role}),r&&s.default.createElement(d.ConfirmModal,{title:t.forms.delete.title,show:!0,onConfirm:i,actions:{confirm:{label:t.actions.confirm,onClick:i,className:"btn-primary"},cancel:{label:t.actions.cancel,onClick:()=>l(!1),className:"btn-secondary"}}},s.default.createElement("span",null,t.forms.delete.description))):null};var s=e("react"),c=e("@aimpact/ailearn-app/components/icons"),m=e("../../context"),u=e("../../forms/edition"),d=e("pragmate-ui/modal"),f=e("@aimpact/chat-sdk/session")}}),j.set("./views/list/item/confirm-action",{hash:1946251026,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ConfirmAction=function({}){var[,,]=a.default.useState(!1);return a.default.createElement(a.default.Fragment,null)};var a=e("react")}}),j.set("./views/list/item/index",{hash:233032695,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({item:e}){var t,a=(0,r.useModuleContext)().texts;return e.invited?n.default.createElement(l.InvitedItem,{item:e}):!1===e.authorized?n.default.createElement(i.PendingItem,{item:e}):(t=e.role??"member",n.default.createElement("li",{className:"person-item__container"},n.default.createElement("div",{className:"user-personal-info"},n.default.createElement(o.Image,{className:"user__img",src:e?.photoUrl}),n.default.createElement("span",{className:"h5"},e.name)),n.default.createElement("span",{className:"role"},a.roles[t]?.title),n.default.createElement(s.ItemActions,{item:e})))};var n=e("react"),o=e("pragmate-ui/image"),r=e("../../context"),l=e("./invited"),i=e("./pending"),s=e("./actions")}}),j.set("./views/list/item/invited",{hash:2456437675,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.InvitedItem=function({item:e}){let{texts:t,store:a}=(0,c.useModuleContext)(),[n,o]=i.default.useState(!1),r=()=>o(!n),l=async()=>{await a.cancelInvitation(e.email),r()};return i.default.createElement(d.motion.li,{className:"person-item__container"},i.default.createElement("div",{className:"user-personal-info"},i.default.createElement(s.Image,{className:"user__img",src:e?.photoUrl}),i.default.createElement("div",null,i.default.createElement("span",{className:"item-name"},e.name),i.default.createElement("span",{className:"item-email"},e.email))),i.default.createElement("div",{className:"item-actions"},i.default.createElement(u.Button,{variant:"primary",onClick:r},t.actions.cancel)),n&&i.default.createElement(m.ConfirmModal,{title:t.forms.cancel.title,show:!0,onConfirm:l,actions:{confirm:{label:t.actions.confirm,onClick:l,className:"btn-primary"},cancel:{label:t.actions.cancel,onClick:r,className:"btn-secondary"}}},i.default.createElement("span",null,t.forms.cancel.description)))};var i=e("react"),s=e("pragmate-ui/image"),c=e("../../context"),m=e("pragmate-ui/modal"),u=e("pragmate-ui/components"),d=e("framer-motion")}}),j.set("./views/list/item/pending/RejectPending",{hash:2392877374,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RejectPending=function({item:e}){let{texts:t,store:a}=(0,s.useModuleContext)(),[n,o]=i.default.useState(!1),r=()=>o(!n),l=async()=>{e.invited?await a.model.cancelInvitation({email:e.email}):await a.model.reject({uid:e.id}),r()};return i.default.createElement(i.default.Fragment,null,i.default.createElement(m.Button,{variant:"primary",onClick:r},t.actions.reject),n&&i.default.createElement(c.ConfirmModal,{title:t.forms.cancel.title,show:!0,onConfirm:l,actions:{confirm:{label:t.actions.confirm,onClick:l,className:"btn-primary"},cancel:{label:t.actions.cancel,onClick:r,className:"btn-secondary"}}},i.default.createElement("span",null,t.forms.cancel.description)))};var i=e("react"),s=e("../../../context"),c=e("pragmate-ui/modal"),m=e("pragmate-ui/components")}}),j.set("./views/list/item/pending/confirm",{hash:1858777722,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ConfirmPending=function({item:e}){let t=(0,l.useModuleContext)().texts,[a,n]=r.default.useState(!1),o=()=>n(!a);return r.default.createElement(r.default.Fragment,null,r.default.createElement(i.Button,{variant:"primary",onClick:o},t.actions.approve),a&&r.default.createElement(s.ApproveModal,{item:e,show:a,onClose:o}))};var r=e("react"),l=e("../../../context"),i=e("pragmate-ui/components"),s=e("../../../forms/approve")}}),j.set("./views/list/item/pending/index",{hash:2509603142,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PendingItem=function({item:e}){let{texts:t,store:a}=(0,c.useModuleContext)(),[n,o]=i.default.useState(!1),r=()=>o(!n),l=async()=>{await a.cancelInvitation(e.email),r()};return i.default.createElement("li",{className:"person-item__container"},i.default.createElement("div",{className:"user-personal-info"},i.default.createElement(s.Image,{className:"user__img",src:e?.photoUrl}),i.default.createElement("span",{className:"h5"},e.name)),i.default.createElement("div",{className:"item-actions"},i.default.createElement(u.RejectPending,{item:e}),i.default.createElement(d.ConfirmPending,{item:e})),n&&i.default.createElement(m.ConfirmModal,{title:t.forms.cancel.title,show:!0,onConfirm:l,actions:{confirm:{label:t.actions.confirm,onClick:l,className:"btn-primary"},cancel:{label:t.actions.cancel,onClick:r,className:"btn-secondary"}}},i.default.createElement("span",null,t.forms.cancel.description)))};var i=e("react"),s=e("pragmate-ui/image"),c=e("../../../context"),m=e("pragmate-ui/modal"),u=e("./RejectPending"),d=e("./confirm")}}),N.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./store",from:"StoreManager",name:"StoreManager"},{im:"./views/index",from:"View",name:"View"}],N.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"StoreManager"!==t||n("StoreManager",e?e("./store").StoreManager:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",N),n("hmr",new function(){this.on=(e,t)=>N.hmr.on(e,t),this.off=(e,t)=>N.hmr.off(e,t)}),N.initialise(j)}}});