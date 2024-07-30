System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.2.0/model","@aimpact/chat-sdk@1.0.1/session","@aimpact/ailearn-app@0.1.0-dev.08/main-layout.widget","@beyond-js/kernel@0.1.9/texts","react@18.2.0","pragmate-ui@1.0.0-beta.1/alert","@aimpact/ailearn-app@0.1.0-dev.08/components/navbar-header.code","@aimpact/ailearn-app@0.1.0-dev.08/components/ui","@aimpact/ailearn-app@0.1.0-dev.08/config","pragmate-ui@1.0.0-beta.1/icons","pragmate-ui@1.0.0-beta.1/toast","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.2/shared/components","pragmate-ui@1.0.0-beta.1/form/react-select","pragmate-ui@1.0.0-beta.1/components","pragmate-ui@1.0.0-beta.1/list","pragmate-ui@1.0.0-beta.1/image","framer-motion@10.18.0","pragmate-ui@1.0.0-beta.1/form","pragmate-ui@1.0.0-beta.1/modal"],function(n,e){var t,a,r,o,i,l,s,c,d,u,m,p,f,v,g,h,y,b,E,w,_,x,C,j,N,M,k;return n({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){o=e},function(e){i=e},function(e){l=e},function(e){s=e},function(e){c=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){f=e},function(e){v=e},function(e){g=e},function(e){h=e},function(e){y=e},function(e){b=e},function(e){E=e},function(e){w=e},function(e){_=e},function(e){x=e},function(e){C=e},function(e){j=e},function(e){N=e}],execute:function(){k=a.Bundle,(M=new k({module:{vspecifier:"@aimpact/ailearn-app@0.1.0-dev.08/organizations/view",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",o],["@aimpact/ailearn-sdk/core",i],["@beyond-js/reactive/model",l],["@aimpact/chat-sdk/session",s],["@aimpact/ailearn-app/main-layout.widget",c],["@beyond-js/kernel/texts",d],["react",u],["pragmate-ui/alert",m],["@aimpact/ailearn-app/components/navbar-header.code",p],["@aimpact/ailearn-app/components/ui",f],["@aimpact/ailearn-app/config",v],["pragmate-ui/icons",g],["pragmate-ui/toast",h],["@beyond-js/react-18-widgets/hooks",y],["@aimpact/chat/shared/components",b],["pragmate-ui/form/react-select",E],["pragmate-ui/components",w],["pragmate-ui/list",_],["pragmate-ui/image",x],["framer-motion",C],["pragmate-ui/form",j],["pragmate-ui/modal",N]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-organizations-view",vspecifier:"@aimpact/ailearn-app@0.1.0-dev.08/organizations/view.widget",is:"page",route:"/organizations/view/${id}",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.0-dev.08/organizations/view.widget"),(k=new Map).set("./controller",{hash:398392217,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),r=e("./views");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return r.View}show(){this.#store.load(this.uri.vars.get("id"))}hide(){this.#store.clear()}}t.Controller=o}}),k.set("./store",{hash:77906207,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-sdk/core"),n=e("@beyond-js/reactive/model"),r=e("@aimpact/ailearn-app/main-layout.widget"),o=e("@beyond-js/kernel/texts"),i=e("beyond_context");class l extends n.ReactiveModel{#model;get model(){return this.#model}#params;get params(){return this.#params}#objectives=[];get objectives(){return this.#objectives}get managers(){return this.model.managers}get pendings(){return this.model.pendings}get members(){return this.model.members}get isAdmin(){return!!this.#model?.isAdmin}#errorLoading;get errorLoading(){return this.#errorLoading}#texts=new o.CurrentTexts(i.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.#texts.on("change",this.triggerEvent),this.#model=new a.Organization({})}setBreadcrumb(){var e=this.setBreadcrumb.bind(this);this.#texts.ready?(this.#texts.off("change",e),r.LayoutBroker.overlay=!1,globalThis.setTimeout(()=>{r.LayoutBroker.breadcrumb=[[this.texts.breadcrumb.organizations,"/organizations/list"],[this.texts.breadcrumb.management,""]]},100)):this.#texts.on("change",e)}clear(){this.#model=void 0,super.ready=!1}async load(e){try{super.ready=!1,this.setBreadcrumb();var t={id:this.#params=e};this.#model=new a.Organization(t),e&&await this.#model.load({id:e})}catch(e){this.#errorLoading=e}finally{super.ready=!0}}async delete(e){this.#model.classrooms.remove(e),this.trigger("change")}async save(e){try{this.fetching=!0;var t="new"!==this.#params?{...e,id:this.#params}:e,{status:a,data:n}=await this.model.save(t);if(a)return n;throw new Error("ERROR_PUBLISHING_ORGANIZATION")}catch(e){throw new Error(e)}finally{this.fetching=!1}}async invite(e){try{this.fetching=!0;var{status:t,data:a}=await this.model.invite(e);if(t)return a;throw new Error("error inviting user")}catch(e){throw new Error(e)}finally{this.fetching=!1}}async approve(e){try{this.fetching=!0;var t=await this.model.approve(e);if(t.status)return t;throw new Error("Error inviting user")}catch(e){console.error(e)}finally{this.fetching=!1}}async reject(e){try{return this.fetching=!0,await this.model.reject(e)}catch(e){console.error(1,e)}finally{this.fetching=!1}}async updateRole(e){try{return this.fetching=!0,await this.model.updateRole(e)}catch(e){console.error(e)}finally{this.fetching=!1}}}t.StoreManager=l}}),k.set("./views/coins",{hash:3348126422,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EntityCoins=function(){var{store:e,texts:t}=(0,r.useModuleContext)(),a=e.model;return a.coins&&e.isAdmin?n.default.createElement(o.Alert,{type:"info",className:"profile-coins__section mt-15"},n.default.createElement("h3",null,t.coins.label),n.default.createElement("div",{className:"coins-detail__container"},n.default.createElement("div",{className:"coins-section__item"},n.default.createElement("span",null,t.coins.assignments),n.default.createElement("span",null,a.coins.assignments.count)),n.default.createElement("div",{className:"coins-section__item"},n.default.createElement("span",null,t.coins.modules),n.default.createElement("span",null,a.coins.modules.count)))):null};var n=e("react"),r=e("./context"),o=e("pragmate-ui/alert")}}),k.set("./views/context",{hash:631431152,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");let n=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(n)}}),k.set("./views/empty",{hash:1175359991,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyOrganization=function({texts:e}){return a.default.createElement(a.default.Fragment,null,a.default.createElement(n.NavbarHeader,{breadcrumb:[[e.breadcrumb.organizations,"/organizations/list"]]}),a.default.createElement(r.EmptyCard,{text:e.empty.title,icon:"search"}))};var a=e("react"),n=e("@aimpact/ailearn-app/components/navbar-header.code"),r=e("@aimpact/ailearn-app/components/ui")}}),k.set("./views/header/code-section",{hash:3092822369,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CodeSection=function(){let{store:e,texts:t}=(0,r.useModuleContext)(),a=e.model.joinSpecs.code;return n.default.createElement("div",{className:"top-code__container"},n.default.createElement("section",{className:"code-content"},n.default.createElement("span",{className:"code__label"},t.orgCode),n.default.createElement("span",{className:"code__text"},a)),n.default.createElement(o.IconButton,{"data-text":e.model.joinSpecs?.code,title:t.actions.copy,className:"copy__button",icon:"link",disabled:!e.model.joinSpecs?.code,onClick:async e=>{try{e.stopPropagation(),await navigator.clipboard.writeText(l.default.params.baseUrl+"/organizations/join?code="+a),i.toast.success(t.messages.copy)}catch(e){console.error(t.copyError,e)}}}))};var n=e("react"),r=e("../context"),o=e("pragmate-ui/icons"),i=e("pragmate-ui/toast"),l=e("@aimpact/ailearn-app/config")}}),k.set("./views/header/header",{hash:988023841,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderContainer=function(){let{store:t,texts:e}=(0,o.useModuleContext)(),a=({target:e})=>t.model.save({[e.name]:e.value}),{}=t.model.join;return n.default.createElement("header",{className:"page-container__header"},n.default.createElement("div",{className:"cover-content__container"},n.default.createElement(r.ContentEditable,{as:"h1",name:"title",onSave:a,placeholder:e.name,content:t.model.name,editable:t.isAdmin}),n.default.createElement(r.ContentEditable,{as:"p",name:"title",onSave:a,placeholder:e.description,content:t.model.description,editable:t.isAdmin})),n.default.createElement("div",{className:"flex-container flex-vertical-center"},n.default.createElement(i.CodeSection,null)))};var n=e("react"),r=e("@aimpact/ailearn-app/components/ui"),o=e("../context"),i=e("./code-section")}}),k.set("./views/index",{hash:3054385552,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){let[t,a]=i.default.useState(e.fetching),[n,r]=i.default.useState(e.ready),o=e.texts;return(0,c.useBinder)([e.model],()=>a(e.model?.fetching)),(0,c.useBinder)([e],()=>r(e.ready)),n?e.model.found&&!e.model.hasAccess?i.default.createElement("app-not-allowed",null):e.model.found?i.default.createElement(s.ModuleContext.Provider,{value:{store:e,fetching:t,texts:o}},i.default.createElement(l.PageContainer,{className:"app-organization-creation-page",fetching:t},i.default.createElement(u.HeaderContainer,null),i.default.createElement(f.EntityCoins,null),i.default.createElement("div",{className:"list-info__container "},i.default.createElement(p.ApprovalList,{type:"pendings"}),i.default.createElement(m.PeopleList,{role:"members"}),i.default.createElement(m.PeopleList,{role:"managers"})))):i.default.createElement("app-missing-control",null):i.default.createElement(d.PreloadScreen,null)};var i=e("react"),l=e("@aimpact/ailearn-app/components/ui"),s=e("./context"),c=e("@beyond-js/react-18-widgets/hooks"),d=e("@aimpact/chat/shared/components"),u=e("./header/header"),m=e("./list/people"),p=e("./list/approval"),f=e("./coins")}}),k.set("./views/list/approval/choice-role",{hash:158218919,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChoiceRole=function({item:t,setRemoved:a}){let[n,r]=s.default.useState("member"),{texts:o,store:i}=(0,c.useModuleContext)(),e=[{value:"member",label:o.list.members.role},{value:"manager",label:o.list.managers.role}],l=async e=>{if(e.preventDefault(),e=e.currentTarget.dataset.action,i[e])try{await i[e]({uid:t.uid,role:n}),a(!0),d.toast.success(o.messages.approval.success)}catch(e){d.toast.error(o.messages.approval.error)}else console.error("action not found",e)};return t.invited?null:s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:"div-select__button"},s.default.createElement(u.ReactSelect,{className:"select-option",options:e,value:n,onChange:e=>r(e.target.value)})),s.default.createElement(m.Button,{disabled:!n,variant:"primary","data-action":"approve",onClick:l,bordered:!0},o.actions.approve),s.default.createElement(m.Button,{variant:"error","data-action":"reject",disabled:!0,onClick:l},o.actions.reject))};var s=e("react"),c=e("../../context"),d=e("pragmate-ui/toast"),u=e("pragmate-ui/form/react-select"),m=e("pragmate-ui/components")}}),k.set("./views/list/approval/index",{hash:675757176,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ApprovalList=function({type:e}){let{store:t,texts:a}=(0,u.useModuleContext)(),n=t.model[e],r=a.list[e],[o,i]=l.default.useState(n);return(0,m.useBinder)([t.model],()=>i([...t.model[e]]),["member.invited","model.pendings.list.changed"]),o.length?l.default.createElement("div",{className:"people-list__container"},l.default.createElement("div",{className:"subtitle-list_container"},l.default.createElement("h4",null,r.title)),l.default.createElement(s.List,{items:o,control:d.Item})):l.default.createElement(c.EmptyList,null)};var l=e("react"),s=e("pragmate-ui/list"),c=e("../empty"),d=e("./item"),u=e("../../context"),m=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./views/list/approval/item",{hash:143904859,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({item:e}){var[t,a]=n.default.useState(!1);return n.default.createElement(l.AnimatePresence,null,!t&&n.default.createElement(l.motion.li,{key:e.id,exit:{transition:{duration:.3},opacity:0},className:"person-item__container "+(e.invited&&!e.authorized&&" invited")},n.default.createElement("div",{className:"user-personal-info"},e?.photoUrl?n.default.createElement(r.Image,{src:e?.photoUrl}):n.default.createElement(o.Icon,{className:"lg",icon:"user"}),n.default.createElement("div",null,n.default.createElement("h5",null,e.name),n.default.createElement("span",null,e.email))),n.default.createElement("section",{className:"actions_buttons"},n.default.createElement(i.ChoiceRole,{item:e,setRemoved:a}))))};var n=e("react"),r=e("pragmate-ui/image"),o=e("pragmate-ui/icons"),i=e("./choice-role"),l=e("framer-motion")}}),k.set("./views/list/approval/pending-data",{hash:3084286369,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PendingData=function({item:e}){var t;return e.invited?(t=(0,n.useModuleContext)().texts,("member"===e.role?t.list.members:t.list.managers).role,a.default.createElement(a.default.Fragment,null)):null};var a=e("react"),n=e("../../context")}}),k.set("./views/list/empty",{hash:3228659036,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function({role:e=void 0}){let t=(0,s.useModuleContext)().texts,[a,n]=l.default.useState(!1),r=t.list[e];var o,i;return r?(o=()=>n(!a),i=(i=!!e)?t.empty.labelList.replace("%action",`"${t.actions.invite}"`):t.empty.pending,l.default.createElement("section",{className:"people-list__container"},l.default.createElement("div",{className:"subtitle-list_container"},l.default.createElement("h4",null,r.title),e&&l.default.createElement(d.Button,{icon:"add",label:t.actions.invite,className:"add",onClick:o})),l.default.createElement("div",{className:"person-item__container flex-container flex-center"},l.default.createElement("span",{className:"p2"}," ",i)),l.default.createElement(c.InvitationForm,{show:a,role:e,onClose:o}))):null};var l=e("react"),s=e("../context"),c=e("./people/invitation-form"),d=e("pragmate-ui/components")}}),k.set("./views/list/people/index",{hash:2583108385,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PeopleList=function({role:e}){let{texts:t,store:a}=(0,d.useModuleContext)(),[n,r]=c.default.useState(!1),[o,i]=c.default.useState([...a[e]]),l=t.list[e],s=()=>r(!n);return(0,g.useBinder)([a.model],()=>i([...a[e]]),`model.${e}.invited`),o.length?c.default.createElement("section",{className:"people-list__container"},c.default.createElement("div",{className:"subtitle-list_container"},c.default.createElement("h4",null,l.title),e&&a.isAdmin&&c.default.createElement(u.Button,{icon:"add",label:t.actions.invite,className:"add",onClick:s})),c.default.createElement(m.List,{items:o,control:p.Item}),c.default.createElement(v.InvitationForm,{show:n,role:e,onClose:s})):c.default.createElement(f.EmptyList,{role:e})};var c=e("react"),d=e("../../context"),u=e("pragmate-ui/components"),m=e("pragmate-ui/list"),p=e("./item"),f=e("../empty"),v=e("./invitation-form"),g=e("@beyond-js/react-18-widgets/hooks")}}),k.set("./views/list/people/invitation-form",{hash:316032393,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.InvitationForm=function({show:e,onClose:t,role:a}){let{store:n,texts:r}=(0,b.useModuleContext)(),[o,i]=g.default.useState(!1),[l,s]=g.default.useState(""),c={name:"",email:""},[d,u]=g.default.useState(c),m={managers:"manager",members:"member"},p=()=>{u(c),s(""),i(!1),t()},f=({currentTarget:e})=>{var t={...d};t[e.name]=e.value,u(t),s("")};var v;return e?(e=r.modal.invite.title.replace("%role",r.list[a].role),v=d.name,g.default.createElement(w.Modal,{closeBackdrop:!1,show:!0,className:"modal-form",onClose:p},g.default.createElement("header",{className:"modal-form__header"},g.default.createElement("h3",null,e)),g.default.createElement(h.Form,{className:"mt-15",onSubmit:async e=>{e.preventDefault(),i(!0),(e=await n.invite({...d,role:m[a]})).status||(s(e.error),y.toast.success(l)),y.toast.success(r.system.invite.success),p()}},g.default.createElement(h.Input,{label:"Name",type:"text",name:"name",value:v,onChange:f,placeholder:"Input user name",required:!0}),g.default.createElement(h.Input,{placeholder:"Input user email",label:"Email",variant:"floating",type:"email",name:"email",onChange:f,required:!0}),g.default.createElement("div",{className:"form-actions flex-container flex-end"},g.default.createElement(E.Button,{type:"submit",variant:"primary",icon:"paperPlane",loading:o,label:"Submit"}))))):null};var g=e("react"),h=e("pragmate-ui/form"),y=e("pragmate-ui/toast"),b=e("../../context"),E=e("pragmate-ui/components"),w=e("pragmate-ui/modal")}}),k.set("./views/list/people/item/actions",{hash:1015060535,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ItemActions=function({item:e}){let{texts:t,store:a}=(0,c.useModuleContext)(),[n,r]=i.default.useState(!1),o=()=>r(!n);return a.isAdmin?i.default.createElement("div",{className:"actions_buttons"},i.default.createElement(l.Button,{variant:"primary",bordered:!0,onClick:o},t.actions.edit),i.default.createElement(s.EditionModal,{item:e,show:n,onClose:o})):null};var i=e("react"),l=e("pragmate-ui/components"),s=e("./edition"),c=e("../../../context")}}),k.set("./views/list/people/item/edition",{hash:3766980633,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EditionModal=function({item:t,show:e,onClose:a}){let{texts:n,store:r}=(0,f.useModuleContext)(),[o,i]=d.default.useState(t.role||"teacher"),[l,s]=d.default.useState(!1);var c;return e?(c=[{value:"teacher",label:n.list.members.single},{value:"manager",label:n.list.managers.single}],d.default.createElement(u.Modal,{show:!0,className:"modal-form",onClose:a,closeBackdrop:!(e=async e=>{e.preventDefault();try{s(!0),await r.updateRole({role:o,uid:t.uid}),g.toast.success(n.system.invite.success)}catch(e){g.toast.error("Error: Updating role"),console.error(e)}finally{s(!1)}})},d.default.createElement(m.Form,{onSubmit:e},d.default.createElement("div",{className:"header-text"},d.default.createElement("span",{className:"h4"},n.modal.edit.title),d.default.createElement("p",{className:"p2"},n.modal.edit.info)),d.default.createElement(p.ReactSelect,{options:c,defaultValue:o,onChange:e=>{i(e.target.value)}}),d.default.createElement("footer",{className:"form-actions flex-container flex-end"},d.default.createElement(v.Button,{type:"submit",variant:"primary",icon:"paperPlane",loading:l,onClick:e},n.actions.save))))):null};var d=e("react"),u=e("pragmate-ui/modal"),m=e("pragmate-ui/form"),p=e("pragmate-ui/form/react-select"),f=e("../../../context"),v=e("pragmate-ui/components"),g=e("pragmate-ui/toast")}}),k.set("./views/list/people/item/index",{hash:1226103164,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({item:e}){return a.default.createElement("li",{key:e.id,className:"person-item__container"},a.default.createElement("div",{className:"user-personal-info"},a.default.createElement(n.Image,{className:"user__img",src:e?.photoUrl}),a.default.createElement("span",{className:"h5"},e.name)),a.default.createElement(r.ItemActions,{item:e}))};var a=e("react"),n=e("pragmate-ui/image"),r=e("./actions")}}),M.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],M.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",M),n("hmr",new function(){this.on=(e,t)=>M.hmr.on(e,t),this.off=(e,t)=>M.hmr.off(e,t)}),M.initialise(k)}}});