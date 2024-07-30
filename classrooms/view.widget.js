System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.2.0/model","@aimpact/ailearn-app@0.1.0-dev.06/main-layout.widget","@beyond-js/kernel@0.1.9/texts","@aimpact/chat-sdk@1.0.1/session","@aimpact/ailearn-app@0.1.0-dev.06/components/navbar-header.code","react@18.2.0","@aimpact/ailearn-app@0.1.0-dev.06/config","pragmate-ui@1.0.0-beta.1/components","@aimpact/ailearn-app@0.1.0-dev.06/components/ui","pragmate-ui@1.0.0-beta.1/icons","pragmate-ui@1.0.0-beta.1/toast","@aimpact/ailearn-app@0.1.0-dev.06/components/cover-image.code","@aimpact/chat@1.0.2/shared/hooks","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.2/shared/components","pragmate-ui@1.0.0-beta.1/form/react-select","pragmate-ui@1.0.0-beta.1/list","pragmate-ui@1.0.0-beta.1/image","framer-motion@10.18.0","pragmate-ui@1.0.0-beta.1/form","pragmate-ui@1.0.0-beta.1/modal"],function(r,e){var t,a,n,o,l,i,s,c,d,m,u,p,f,h,v,g,y,b,E,x,w,_,C,j,N,M,k,S;return r({Controller:void 0,Header:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){o=e},function(e){l=e},function(e){i=e},function(e){s=e},function(e){c=e},function(e){d=e},function(e){m=e},function(e){u=e},function(e){p=e},function(e){f=e},function(e){h=e},function(e){v=e},function(e){g=e},function(e){y=e},function(e){b=e},function(e){E=e},function(e){x=e},function(e){w=e},function(e){_=e},function(e){C=e},function(e){j=e},function(e){N=e},function(e){M=e}],execute:function(){S=a.Bundle,(k=new S({module:{vspecifier:"@aimpact/ailearn-app@0.1.0-dev.06/classrooms/view",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",o],["@aimpact/ailearn-sdk/core",l],["@beyond-js/reactive/model",i],["@aimpact/ailearn-app/main-layout.widget",s],["@beyond-js/kernel/texts",c],["@aimpact/chat-sdk/session",d],["@aimpact/ailearn-app/components/navbar-header.code",m],["react",u],["@aimpact/ailearn-app/config",p],["pragmate-ui/components",f],["@aimpact/ailearn-app/components/ui",h],["pragmate-ui/icons",v],["pragmate-ui/toast",g],["@aimpact/ailearn-app/components/cover-image.code",y],["@aimpact/chat/shared/hooks",b],["@beyond-js/react-18-widgets/hooks",E],["@aimpact/chat/shared/components",x],["pragmate-ui/form/react-select",w],["pragmate-ui/list",_],["pragmate-ui/image",C],["framer-motion",j],["pragmate-ui/form",N],["pragmate-ui/modal",M]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-classrooms-view",vspecifier:"@aimpact/ailearn-app@0.1.0-dev.06/classrooms/view.widget",is:"page",route:"/classrooms/view/${id}",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.0-dev.06/classrooms/view.widget"),(S=new Map).set("./controller",{hash:398392217,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),r=e("./store"),n=e("./views");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager,this.#store}get Widget(){return n.View}show(){this.#store.load(this.uri.vars.get("id"))}hide(){this.#store.clear()}}t.Controller=o}}),S.set("./store",{hash:3774788326,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/ailearn-sdk/core"),r=e("@beyond-js/reactive/model"),n=e("@aimpact/ailearn-app/main-layout.widget"),o=e("@beyond-js/kernel/texts"),l=e("beyond_context");class i extends r.ReactiveModel{#model;get model(){return this.#model}#params;get params(){return this.#params}#objectives=[];get objectives(){return this.#objectives}get managers(){return this.model.managers}get pendings(){return this.model.pendings}get members(){return this.model.members}#texts=new o.CurrentTexts(l.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}#found=!0;get found(){return this.#found}get isAdmin(){return!!this.#model?.isAdmin}constructor(){super(),this.#texts.on("change",this.triggerEvent),globalThis.m=this}clear(){this.#model=void 0,super.ready=!1}setBreadcrumb(){var e=this.setBreadcrumb.bind(this);this.#texts.ready?(this.#texts.off("change",e),n.LayoutBroker.overlay=!1,globalThis.setTimeout(()=>{n.LayoutBroker.breadcrumb=[[this.texts.breadcrumb.classrooms,"/classrooms/list"],[this.texts.breadcrumb.management,""]]},100)):this.#texts.on("change",e)}async load(e){try{super.ready=!1,await this.isReady,this.setBreadcrumb();var t={id:this.#params=e};this.#model=new a.Classroom(t),e&&await this.#model.load({id:e})}catch(e){super.ready=!0}finally{super.ready=!0}}async delete(e){this.#model.classrooms.remove(e),this.trigger("change")}async save(e){try{this.fetching=!0;var t="new"!==this.#params?{...e,id:this.#params}:e,{status:a,data:r}=await this.model.save(t);if(a)return r;throw new Error("ERROR_PUBLISHING_CLASSROOM")}catch(e){throw new Error(e)}finally{this.fetching=!1}}async invite(e){try{this.fetching=!0;var{status:t,data:a}=await this.model.invite(e);if(t)return a;throw new Error("error inviting user")}catch(e){throw new Error(e)}finally{this.fetching=!1}}async approve(e){try{this.fetching=!0;var t=await this.model.approve(e);if(t.status)return t;throw new Error("Error inviting user")}catch(e){console.error(e)}finally{this.fetching=!1}}async reject(e){try{return this.fetching=!0,await this.model.reject(e)}catch(e){console.error(1,e)}finally{this.fetching=!1}}async updateRole(e){try{return this.fetching=!0,await this.model.updateRole(e)}catch(e){console.error(e)}finally{this.fetching=!1}}}t.StoreManager=i}}),S.set("./views/components/header",{hash:96155070,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){var{}=(0,n.useModuleContext)();return r.default.createElement(a.NavbarHeader,{breadcrumb:!0})};var a=e("@aimpact/ailearn-app/components/navbar-header.code"),r=e("react"),n=e("../context")}}),S.set("./views/context",{hash:2774478415,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");let r=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(r)}}),S.set("./views/empty",{hash:2255378898,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyEntity=function(){var e=(0,n.useModuleContext)().texts;return a.default.createElement(o.EmptyCard,{text:e.empty.title,description:e.empty.description,icon:"edit"},a.default.createElement("div",{className:"actions flex-container flex-center"},a.default.createElement(r.Link,{href:"/classrooms/create",className:"grow btn btn-primary"},e.actions.create)))};var a=e("react"),r=e("pragmate-ui/components"),n=e("./context"),o=e("@aimpact/ailearn-app/components/ui")}}),S.set("./views/header/code-section",{hash:1109021617,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CodeSection=function(){let{store:e,texts:t}=(0,n.useModuleContext)(),a=e.model.joinSpecs.code;return r.default.createElement("div",{className:"top-code__container"},r.default.createElement("section",{className:"code-content"},r.default.createElement("span",{className:"code__label"},t.orgCode),r.default.createElement("span",{className:"code__text"},a)),r.default.createElement(o.IconButton,{"data-text":e.model.joinSpecs?.code,title:t.actions.copy,className:"copy__button",icon:"link",disabled:!e.model.joinSpecs?.code,onClick:async e=>{try{e.stopPropagation(),await navigator.clipboard.writeText(i.default.params.baseUrl+"/classrooms/join?code="+a),l.toast.success(t.messages.copy)}catch(e){console.error(t.copyError,e)}}}))};var r=e("react"),n=e("../context"),o=e("pragmate-ui/icons"),l=e("pragmate-ui/toast"),i=e("@aimpact/ailearn-app/config")}}),S.set("./views/header/header",{hash:2711683958,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderContainer=function(){let{store:t,texts:e}=(0,o.useModuleContext)(),a=({target:e})=>t.model.save({[e.name]:e.value}),{}=t.model.join;return r.default.createElement("div",{className:"page-container__header"},r.default.createElement("div",{className:"cover-content__container"},r.default.createElement(n.ContentEditable,{as:"h1",name:"title",onSave:a,placeholder:e.title.placeholder,content:t.model.name,editable:t.isAdmin}),r.default.createElement(n.ContentEditable,{as:"p",name:"title",onSave:a,placeholder:e.description.placeholder,content:t.model.description,editable:t.isAdmin})),r.default.createElement("div",{className:"flex-container flex-vertical-center"},r.default.createElement(l.CoverImage,null)),r.default.createElement("div",{className:"flex-container flex-vertical-center"},r.default.createElement(i.CodeSection,null)))};var r=e("react"),n=e("@aimpact/ailearn-app/components/ui"),o=e("../context"),l=e("@aimpact/ailearn-app/components/cover-image.code"),i=e("./code-section")}}),S.set("./views/index",{hash:1318348832,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){let[t,a]=(0,d.useTexts)(m.module.specifier),[r,n]=i.default.useState(e.fetching),[o,l]=i.default.useState(e.ready);return(0,u.useBinder)([e.model],()=>n(e.model?.fetching)),(0,u.useBinder)([e],()=>l(e.ready)),o&&t?e.model.found&&!e.model.hasAccess?i.default.createElement("app-not-allowed",null):e.model.found?i.default.createElement(c.ModuleContext.Provider,{value:{store:e,fetching:r,texts:a}},i.default.createElement(s.PageContainer,{className:"app-classroom-creation-page",fetching:r},i.default.createElement(f.HeaderContainer,null),i.default.createElement("div",{className:"list-info__container"},i.default.createElement(v.ApprovalList,{type:"pendings"}),i.default.createElement(h.PeopleList,{role:"members"}),i.default.createElement(h.PeopleList,{role:"managers"})))):i.default.createElement("app-missing-control",null):i.default.createElement(p.PreloadScreen,null)};var i=e("react"),s=e("@aimpact/ailearn-app/components/ui"),c=e("./context"),d=e("@aimpact/chat/shared/hooks"),m=e("beyond_context"),u=e("@beyond-js/react-18-widgets/hooks"),p=e("@aimpact/chat/shared/components"),f=e("./header/header"),h=e("./list/people"),v=e("./list/approval")}}),S.set("./views/list/approval/choice-rule",{hash:4153822883,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChoiceRole=function({item:t,setRemoved:a}){let[r,n]=i.default.useState("member"),{texts:o,store:l}=(0,s.useModuleContext)(),e=[{value:"member",label:o.list.members.role},{value:"manager",label:o.list.managers.role}];return t.invited?null:i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"div-select__button"},i.default.createElement(d.ReactSelect,{className:"select-option",options:e,value:r,onChange:e=>n(e.target.value)})),i.default.createElement(m.Button,{variant:"primary","data-action":"approve",onClick:async e=>{if(e.preventDefault(),e=e.currentTarget.dataset.action,l[e])try{await l[e]({uid:t.uid,role:r}),a(!0),c.toast.success(o.messages.approval.success)}catch(e){c.toast.error(o.messages.approval.error)}else console.error("action not found",e)},bordered:!0,disabled:!r},o.actions.approve))};var i=e("react"),s=e("../../context"),c=e("pragmate-ui/toast"),d=e("pragmate-ui/form/react-select"),m=e("pragmate-ui/components")}}),S.set("./views/list/approval/index",{hash:675757176,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ApprovalList=function({type:e}){let{store:t,texts:a}=(0,m.useModuleContext)(),r=t.model[e],n=a.list[e],[o,l]=i.default.useState(r);return(0,u.useBinder)([t.model],()=>l([...t.model[e]]),["member.invited","model.pendings.list.changed"]),o.length?i.default.createElement("div",{className:"people-list__container"},i.default.createElement("div",{className:"subtitle-list_container"},i.default.createElement("h4",null,n.title)),i.default.createElement(s.List,{items:o,control:d.Item})):i.default.createElement(c.EmptyList,null)};var i=e("react"),s=e("pragmate-ui/list"),c=e("../empty"),d=e("./item"),m=e("../../context"),u=e("@beyond-js/react-18-widgets/hooks")}}),S.set("./views/list/approval/item",{hash:163814243,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({item:e}){var[t,a]=r.default.useState(!1);return r.default.createElement(i.AnimatePresence,null,!t&&r.default.createElement(i.motion.li,{key:e.id,exit:{transition:{duration:.3},opacity:0},className:"person-item__container "+(e.invited&&!e.authorized&&" invited")},r.default.createElement("div",{className:"user-personal-info"},e?.photoUrl?r.default.createElement(n.Image,{src:e?.photoUrl}):r.default.createElement(o.Icon,{className:"lg",icon:"user"}),r.default.createElement("div",null,r.default.createElement("h5",null,e.name),r.default.createElement("span",null,e.email))),r.default.createElement("section",{className:"actions_buttons"},r.default.createElement(l.ChoiceRole,{item:e,setRemoved:a}))))};var r=e("react"),n=e("pragmate-ui/image"),o=e("pragmate-ui/icons"),l=e("./choice-rule"),i=e("framer-motion")}}),S.set("./views/list/approval/pending-data",{hash:3084286369,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PendingData=function({item:e}){var t;return e.invited?(t=(0,r.useModuleContext)().texts,("member"===e.role?t.list.members:t.list.managers).role,a.default.createElement(a.default.Fragment,null)):null};var a=e("react"),r=e("../../context")}}),S.set("./views/list/empty",{hash:3228659036,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function({role:e=void 0}){let t=(0,s.useModuleContext)().texts,[a,r]=i.default.useState(!1),n=t.list[e];var o,l;return n?(o=()=>r(!a),l=(l=!!e)?t.empty.labelList.replace("%action",`"${t.actions.invite}"`):t.empty.pending,i.default.createElement("section",{className:"people-list__container"},i.default.createElement("div",{className:"subtitle-list_container"},i.default.createElement("h4",null,n.title),e&&i.default.createElement(d.Button,{icon:"add",label:t.actions.invite,className:"add",onClick:o})),i.default.createElement("div",{className:"person-item__container flex-container flex-center"},i.default.createElement("span",{className:"p2"}," ",l)),i.default.createElement(c.InvitationForm,{show:a,role:e,onClose:o}))):null};var i=e("react"),s=e("../context"),c=e("./people/invitation-form"),d=e("pragmate-ui/components")}}),S.set("./views/list/people/index",{hash:2030416860,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PeopleList=function({role:e}){let{texts:t,store:a}=(0,m.useModuleContext)(),[r,n]=c.default.useState(!1),[o,l]=c.default.useState([...a[e]]),i=t.list[e],s=()=>n(!r);return(0,d.useBinder)([a.model],()=>l([...a[e]]),`model.${e}.invited`),o.length?c.default.createElement("section",{className:"people-list__container"},c.default.createElement("div",{className:"subtitle-list_container"},c.default.createElement("h4",null,i.title),e&&a.isAdmin&&c.default.createElement(u.Button,{icon:"add",label:t.actions.invite,className:"add",onClick:s})),c.default.createElement(p.List,{items:o,control:f.Item}),c.default.createElement(v.InvitationForm,{show:r,role:e,onClose:s})):c.default.createElement(h.EmptyList,{role:e})};var c=e("react"),d=e("@beyond-js/react-18-widgets/hooks"),m=e("../../context"),u=e("pragmate-ui/components"),p=e("pragmate-ui/list"),f=e("./item"),h=e("../empty"),v=e("./invitation-form")}}),S.set("./views/list/people/invitation-form",{hash:4076513027,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.InvitationForm=function({show:e,onClose:t,role:a}){let{store:r,texts:n}=(0,E.useModuleContext)(),[o,l]=g.default.useState(!1),[i,s]=g.default.useState(""),c={name:"",email:"",role:""},[d,m]=g.default.useState(c),u={managers:"manager",members:"member"},p=()=>{m(c),s(""),l(!1),t()},f=({currentTarget:e})=>{var t={...d};t[e.name]=e.value,m(t),s("")};var h,v;return e?(e=n.modal.invite.title.replace("%role",n.list[a].role),{name:h,email:v}=d,n.list.members.role,n.list.managers.role,g.default.createElement(w.Modal,{closeBackdrop:!1,show:!0,className:"modal-form",onClose:p},g.default.createElement("header",{className:"modal-form__header"},g.default.createElement("h3",null,e)),g.default.createElement(y.Form,{className:"mt-15",onSubmit:async e=>{e.preventDefault(),l(!0),(e=await r.invite({...d,role:u[a]})).status||(s(e.error),b.toast.success(i)),b.toast.success(n.system.invite.success),p()}},g.default.createElement(y.Input,{label:"Name",type:"text",name:"name",value:h,onChange:f,placeholder:"Input user name",required:!0}),g.default.createElement(y.Input,{placeholder:"Input user email",label:"Email",type:"email",name:"email",value:v,onChange:f,required:!0}),g.default.createElement("div",{className:"form-actions flex-container flex-end"},g.default.createElement(x.Button,{type:"submit",variant:"primary",icon:"paperPlane",loading:o,label:"Submit"}))))):null};var g=e("react"),y=e("pragmate-ui/form"),b=e("pragmate-ui/toast"),E=e("../../context"),x=e("pragmate-ui/components"),w=e("pragmate-ui/modal")}}),S.set("./views/list/people/item/edition",{hash:2522348492,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EditionModal=function({item:t,show:e,onClose:a}){let{texts:r,store:n}=(0,f.useModuleContext)(),[o,l]=d.default.useState(t.role||"teacher"),[i,s]=d.default.useState(!1);var c;return e?(c=[{value:"teacher",label:r.list.members.single},{value:"manager",label:r.list.managers.single}],d.default.createElement(m.Modal,{closeBackdrop:!(e=async e=>{e.preventDefault();try{s(!0),await n.updateRole({role:o,uid:t.uid}),v.toast.success(r.system.invite.success)}catch(e){v.toast.error("Error: Updating role"),console.error(e)}finally{s(!1)}}),show:!0,className:"modal-form",onClose:a},d.default.createElement(u.Form,{onSubmit:e},d.default.createElement("div",{className:"header-text"},d.default.createElement("span",{className:"h4"},r.modal.edit.title),d.default.createElement("p",{className:"p2"},r.modal.edit.info)),d.default.createElement(p.ReactSelect,{options:c,defaultValue:o,onChange:e=>{l(e.target.value)}}),d.default.createElement("footer",{className:"form-actions flex-container flex-end"},d.default.createElement(h.Button,{type:"submit",variant:"primary",icon:"paperPlane",loading:i,onClick:e},r.actions.save))))):null};var d=e("react"),m=e("pragmate-ui/modal"),u=e("pragmate-ui/form"),p=e("pragmate-ui/form/react-select"),f=e("../../../context"),h=e("pragmate-ui/components"),v=e("pragmate-ui/toast")}}),S.set("./views/list/people/item/index",{hash:2241312517,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({item:e}){let{texts:t,store:a}=(0,c.useModuleContext)(),[r,n]=l.default.useState(!1),o=()=>n(!r);return l.default.createElement("li",{key:e.id,className:"person-item__container"},l.default.createElement("div",{className:"user-personal-info"},e?.photoUrl?l.default.createElement(i.Image,{src:e?.photoUrl}):l.default.createElement(d.Icon,{className:"lg",icon:"user"}),l.default.createElement("span",{className:"h5"},e.name)),a.isAdmin&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"actions_buttons"},l.default.createElement(s.Button,{variant:"primary",bordered:!0,onClick:o},t.actions.edit),l.default.createElement(m.EditionModal,{item:e,show:r,onClose:o}))))};var l=e("react"),i=e("pragmate-ui/image"),s=e("pragmate-ui/components"),c=e("../../../context"),d=e("pragmate-ui/icons"),m=e("./edition")}}),k.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/components/header",from:"Header",name:"Header"},{im:"./views/index",from:"View",name:"View"}],k.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:a),!e&&"Header"!==t||r("Header",e?e("./views/components/header").Header:a),!e&&"View"!==t||r("View",e?e("./views/index").View:a)},r("__beyond_pkg",k),r("hmr",new function(){this.on=(e,t)=>k.hmr.on(e,t),this.off=(e,t)=>k.hmr.off(e,t)}),k.initialise(S)}}});