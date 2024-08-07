System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-app@0.1.3-test.02/dashboard-layout.widget","@beyond-js/reactive@1.2.0/model","@aimpact/http-suite@0.0.1/api","@aimpact/ailearn-sdk@1.0.0/config","@aimpact/chat-sdk@1.0.1/session","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-sdk@1.0.0/core","react@18.2.0","@aimpact/ailearn-app@0.1.3-test.02/components/ui","@aimpact/ailearn-app@0.1.3-test.02/components/navbar-header.code","pragmate-ui@1.0.0-beta.1/icons","@aimpact/ailearn-app@0.1.3-test.02/config","pragmate-ui@1.0.0-beta.1/empty","@aimpact/ailearn-app@0.1.3-test.02/shared/charts","@aimpact/ailearn-app@0.1.3-test.02/components/icons","pragmate-ui@1.0.0-beta.1/link","pragmate-ui@1.0.0-beta.1/list","pragmate-ui@1.0.0-beta.1/components","@beyond-js/react-18-widgets@1.1.2/hooks","pragmate-ui@1.0.0-beta.1/chips","pragmate-ui@1.0.0-beta.1/image","@aimpact/ailearn-app@0.1.3-test.02/utils","pragmate-ui@1.0.0-beta.1/tooltip"],function(s,e){var t,a,i,r,n,o,l,c,d,u,p,m,h,f,g,v,b,y,_,E,w,k,x,j,C,S,N,P,O;return s({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){i=e},function(e){r=e},function(e){n=e},function(e){o=e},function(e){l=e},function(e){c=e},function(e){d=e},function(e){u=e},function(e){p=e},function(e){m=e},function(e){h=e},function(e){f=e},function(e){g=e},function(e){v=e},function(e){b=e},function(e){y=e},function(e){_=e},function(e){E=e},function(e){w=e},function(e){k=e},function(e){x=e},function(e){j=e},function(e){C=e},function(e){S=e},function(e){N=e}],execute:function(){O=a.Bundle,(P=new O({module:{vspecifier:"@aimpact/ailearn-app@0.1.3-test.02/assignments/dashboard",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",i],["@beyond-js/react-18-widgets/page",r],["@aimpact/ailearn-app/dashboard-layout.widget",n],["@beyond-js/reactive/model",o],["@aimpact/http-suite/api",l],["@aimpact/ailearn-sdk/config",c],["@aimpact/chat-sdk/session",d],["@beyond-js/kernel/texts",u],["@aimpact/ailearn-sdk/core",p],["react",m],["@aimpact/ailearn-app/components/ui",h],["@aimpact/ailearn-app/components/navbar-header.code",f],["pragmate-ui/icons",g],["@aimpact/ailearn-app/config",v],["pragmate-ui/empty",b],["@aimpact/ailearn-app/shared/charts",y],["@aimpact/ailearn-app/components/icons",_],["pragmate-ui/link",E],["pragmate-ui/list",w],["pragmate-ui/components",k],["@beyond-js/react-18-widgets/hooks",x],["pragmate-ui/chips",j],["pragmate-ui/image",C],["@aimpact/ailearn-app/utils",S],["pragmate-ui/tooltip",N]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-session-dashboard",vspecifier:"@aimpact/ailearn-app@0.1.3-test.02/assignments/dashboard.widget",is:"page",route:"/assignments/${id}/dashboard/classroom",layout:"dashboard-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.3-test.02/assignments/dashboard.widget"),(O=new Map).set("./controller",{hash:3329750896,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),s=e("./store"),i=e("./views"),r=e("@aimpact/ailearn-app/dashboard-layout.widget");class n extends a.PageReactWidgetController{#store;createStore(){return this.#store=new s.StoreManager,this.#store}get Widget(){return i.View}show(){r.LayoutBroker.removeOverlay(),this.uri.vars.get("id")&&this.#store.load(this.uri.vars.get("id"))}hide(){this.#store.clear()}}t.Controller=n}}),O.set("./model/index",{hash:1076452296,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Dashboard=void 0;var a=e("@beyond-js/reactive/model"),s=e("@aimpact/http-suite/api"),i=e("@aimpact/ailearn-sdk/config"),n=e("@aimpact/chat-sdk/session");class r extends a.ReactiveModel{#api;#participants=[];get participants(){return this.#participants}#module;get module(){return this.#module}#classroom;get classroom(){return this.#classroom}#activities;get activities(){return this.#activities}#error=null;get error(){return this.#error}get totalParticipants(){return Object.keys(this.participants).length}get totalMultiple(){return this.participants.reduce((e,t)=>t.selection?e+1:e,0)}get totalSpoken(){return this.participants.reduce((e,t)=>t.selection?e+1:e,0)}constructor(){super(),this.#api=new s.Api(i.default.params.apis.ailearn),this.reactiveProps(["selection","spoken","found","assessment"]),globalThis.model=this}async load(r){if(this.#api.bearer(n.sessionWrapper.user.token),!(r=await this.#api.get(`/assignments/${r}/dashboard`)).status)throw"object"==typeof r.error&&(this.#error=r.error),new Error(r.error?.text);if(0===Object.keys(r.data).length)this.found=!1;else{let{module:e,participants:t,activities:a,classroom:s,id:i}=r.data;this.#participants=Object.keys(t).map(e=>t[e]),(globalThis.model=this).#module=e,this.#classroom=s,this.#activities=a,this.id=i,this.found=!0}this.ready=!0}}t.Dashboard=r}}),O.set("./model/interfaces",{hash:876901058,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),O.set("./store",{hash:2739484460,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("./model"),s=e("@beyond-js/reactive/model"),i=e("@beyond-js/kernel/texts"),r=e("beyond_context"),n=e("@aimpact/ailearn-app/dashboard-layout.widget");class o extends s.ReactiveModel{#model;#session;get session(){return this.#session}#assignmentId;get assignmentId(){return this.#assignmentId}get assignment(){return this.#session}get model(){return this.#model}#texts=new i.CurrentTexts(r.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.#texts.on("change",this.triggerEvent),n.LayoutBroker.setModel(this)}async load(e){try{this.fetching=!0,this.#assignmentId=e;var t=new a.Dashboard;await(this.#model=t).load(e),globalThis.m=t}catch(e){}finally{super.ready=!0,this.fetching=!1}}refresh=async()=>{try{this.fetching=!0,await this.model.load(this.#assignmentId),this.trigger("data.updated")}catch(e){console.error(e)}finally{this.fetching=!1}};clear(){n.LayoutBroker.clear()}}t.StoreManager=o}}),O.set("./views/404",{hash:2398831463,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.NotFound=function({store:e}){return 403!==e.model.error?.code?a.default.createElement(a.default.Fragment,null,a.default.createElement("app-missing",null)):a.default.createElement("app-not-allowed",null)};var a=e("react")}}),O.set("./views/charts/index",{hash:2122160673,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Charts=function({}){return a.default.createElement("section",{className:"charts__container"},a.default.createElement(s.MultipleChart,null),a.default.createElement(i.SpokenChart,null))};var a=e("react"),s=e("./multiple"),i=e("./spoken")}}),O.set("./views/charts/multiple",{hash:3126676244,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MultipleChart=function(){let{store:t,texts:e}=(0,n.useDashboardContext)();globalThis.store=t;let a,s;return Object.keys(t.model.activities.items).forEach(e=>{a||(e=t.model.activities.items?.[e])&&"multiple-choice"===e.type&&(a=e)}),a?(s=t.model.participants.reduce((e,t)=>e+(Object.values(t.activities).some(e=>(e=e.data?.counters)&&void 0!==e.total&&void 0!==e.correct&&void 0!==e.wrong)?1:0),0),i.default.createElement("article",{className:"charts__item"},i.default.createElement("h3",null,a.title),i.default.createElement(r.Chart,{options:{series:[t.model.participants.length-s,s],labels:[e.participation.pending,e.participation.total],...o.CHART_BASE_SPECS,responsive:o.RESPONSIVE_BASE_SPECS}}))):null};var i=e("react"),r=e("@aimpact/ailearn-app/shared/charts"),n=e("../context"),o=e("./settings")}}),O.set("./views/charts/settings",{hash:1370120933,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.RESPONSIVE_BASE_SPECS=t.CHART_BASE_SPECS=void 0,t.CHART_BASE_SPECS={theme:{palette:"palette7"},legend:{position:"bottom",horizontalAlign:"left"},chart:{type:"donut",height:"200px"},dataLabels:{formatter:(e,t)=>{var{seriesIndex:t,w:{config:{series:a}}}=t;return a[t]}}},t.RESPONSIVE_BASE_SPECS=[{breakpoint:480,options:{legend:{position:"bottom"},chart:{width:"180px",height:"180px"}}},{breakpoint:880,options:{legend:{position:"bottom",horizontalAlign:"left"},chart:{width:"160px"}}}]}}),O.set("./views/charts/spoken",{hash:2354747298,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SpokenChart=function(){let{store:e,texts:t,model:a}=(0,l.useDashboardContext)(),s=a.activities.items,i=Object.keys(s).find(e=>"spoken"===s[e].type);var r;return i?(r=e.model.participants.reduce((e,t)=>t.activities[i]?e+1:e,0),r=e.model.participants.length-r,n.default.createElement("article",{className:"charts__item"},n.default.createElement("h3",null,t.spoken),n.default.createElement(o.Chart,{options:{series:[r,e.model.participants.length-r],labels:[t.participation.pending,t.participation.total],...c.CHART_BASE_SPECS,responsive:c.RESPONSIVE_BASE_SPECS}}))):null};var n=e("react"),o=e("@aimpact/ailearn-app/shared/charts"),l=e("../context"),c=e("./settings")}}),O.set("./views/context",{hash:2781856426,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useDashboardContext=t.DashboardContext=void 0;var a=e("react");let s=t.DashboardContext=a.default.createContext({});t.useDashboardContext=()=>a.default.useContext(s)}}),O.set("./views/empty",{hash:255829608,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Empty=function({store:e,texts:t}){return a.default.createElement(a.default.Fragment,null,a.default.createElement(s.PageContainer,null,a.default.createElement(r.Empty,{className:"empty-section__container",icon:i.ICONS.classworks},a.default.createElement("h3",{className:"title"},e.model.module.title),a.default.createElement("p",null,t.empty))))};var a=e("react"),s=e("@aimpact/ailearn-app/components/ui"),i=e("@aimpact/ailearn-app/components/icons"),t=e("@aimpact/ailearn-app/config"),r=e("pragmate-ui/empty");t.default?.params?.APP_NAME}}),O.set("./views/header",{hash:3869208283,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){var{model:e,texts:t,store:a}=(0,d.useDashboardContext)(),{title:e,description:s,picture:i,owner:r,creator:n}=e.module;return l.default.createElement("section",{className:"page__header-container"},l.default.createElement("header",{className:"assigment-header"},l.default.createElement("section",{className:"main-content"},l.default.createElement(o.EntityImage,{entity:"module",src:i,alt:e}),l.default.createElement("h1",null,e),l.default.createElement("p",{className:"p1 hidden-xs"},s),l.default.createElement("div",{className:"module__managers-section"},l.default.createElement("div",{className:"module__managers-section"},r&&l.default.createElement(p.UserData,{label:t.owner,data:r}),n&&l.default.createElement(p.UserData,{label:t.creator,data:n})))),l.default.createElement("div",{className:"actions"},l.default.createElement(c.Link,{className:"btn btn-primary outline pui-button has-icon ",href:`/assignments/${a.assignmentId}/wall`},t.actions.wall,l.default.createElement(u.Icon,{className:"md",icon:"shared-folder"})))),l.default.createElement("div",{className:"actions"}))};var o=e("@aimpact/ailearn-app/components/ui"),l=e("react"),c=e("pragmate-ui/link"),d=e("./context"),u=e("pragmate-ui/icons"),p=e("./user-data")}}),O.set("./views/index",{hash:893801648,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){let[t,a]=(0,u.useState)(e.ready),[,s]=(0,u.useState)(e.model?.participants?.length??0),i=e.texts,{}=e.model;return(0,m.useBinder)([e],()=>a(e.ready)),(0,m.useBinder)([e],()=>s(e.model?.participants?.length),"data.updated"),t?e.model.found?0===e.model.totalParticipants?u.default.createElement(l.Empty,{store:e,texts:i}):u.default.createElement(o.DashboardContext.Provider,{value:{texts:i,model:e.model,store:e}},u.default.createElement(n.PageContainer,{className:"dashboard-container"},u.default.createElement(f.Header,null),u.default.createElement(r.Charts,{data:e.model.participants}),u.default.createElement("div",{className:"dashboard__list"},u.default.createElement(d.List,{className:"list-unstyled users__list",items:e.model.participants,control:c.Item})))):u.default.createElement(h.NotFound,{store:e,texts:i}):u.default.createElement(p.Spinner,{active:!0})};var t=e("@aimpact/ailearn-app/config"),r=e("./charts"),n=e("@aimpact/ailearn-app/components/ui"),o=e("./context"),l=e("./empty"),c=e("./item"),d=e("pragmate-ui/list"),u=e("react"),p=e("pragmate-ui/components"),m=e("@beyond-js/react-18-widgets/hooks"),h=e("./404"),f=e("./header");t.default?.params?.APP_NAME}}),O.set("./views/item/activity",{hash:3057335224,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleActivity=function({data:a}){let{user:e,activity:t}=a,s=(0,u.useDashboardContext)().texts,i=Object.keys(e.activities).includes(t.id),r=i?"success":"warning",n=("assessment"===t.type&&"multiple-choice"===t.subtype&&a.data&&[].push(c.default.createElement("span",null,a.data.counters.correct," /",a.data.counters.total)),i?"Done":"Pending");var o,l;return"spoken"===t.type&&a.data&&(o=Object.keys(a.data),n=o.reduce((e,t)=>e+a.data[t].icon,""),r="default"),"assessment"===t.type&&"multiple-choice"===t.subtype&&a.data&&({correct:o,total:l}=a.data?.counters,o<l/2&&(r="error"),n=o+" /"+l),i&&e.activities[t.id].data?.messages&&(n=s.messageCounter+e.activities[t.id].data?.messages.count),c.default.createElement("li",{key:e.id+"."+t.id},c.default.createElement("span",null,t.title),c.default.createElement(d.Chip,{variant:r,className:r+"-chip"},n))};var c=e("react"),d=e("pragmate-ui/chips"),u=e("../context")}}),O.set("./views/item/index",{hash:2627011468,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({data:t}){let{texts:e,model:a,store:s}=(0,p.useDashboardContext)(),{items:i,order:r}=a.activities,n={user:{name:"Julio Rodríguez",id:"tHXKJj7aQsVW9oSvCKRg24dKfds1"},...t},o=Object.keys(t.activities),l=r.map(e=>({activity:i[e],user:n,key:e,data:t.activities[e]?.data})),c=o.length/r.length*100,d=`/assignments/${s.assignmentId}/dashboard/participant/`+n.user.id;return u.default.createElement("li",{className:"dashboard-card card__user"},u.default.createElement(g.Link,{href:d,onClick:()=>localStorage.setItem("student.details",JSON.stringify(n.user))},u.default.createElement("header",null,u.default.createElement(f.Image,{src:n.user?.photoUrl?n.user.photoUrl:"https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/Avatar/default",alt:n.user.name+"-avatar",className:"avatar__image"}),u.default.createElement("h5",null,n.user.name)),u.default.createElement("div",{className:"detail__info"},u.default.createElement("h6",{className:"percentil-section"},e.percentil,u.default.createElement("span",null,(0,v.limitDecimals)(c),"%")),u.default.createElement(m.List,{className:"list-unstyled user-activity__data",items:l,control:h.ModuleActivity}))))};var u=e("react"),p=e("../context"),m=e("pragmate-ui/list"),h=e("./activity"),f=e("pragmate-ui/image"),g=e("pragmate-ui/components"),v=e("@aimpact/ailearn-app/utils")}}),O.set("./views/item/spoken",{hash:924288822,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SpokenData=function({data:e}){var t=(0,i.useDashboardContext)().texts,a=Object.keys(r.Faces),e=e.spoken&&Object.keys(e.spoken)?.length;return s.default.createElement("section",{className:"card__detail"},s.default.createElement("h4",null,t.spoken),e?s.default.createElement(o.List,{className:"spoken-evaluation",items:a,control:({data:e})=>s.default.createElement(n.Tooltip,{content:e},s.default.createElement("span",{className:"result__icon"},r.Faces[e]))}):s.default.createElement("span",{className:"spoken-evaluation"},"No evaluation"))};var s=e("react"),i=e("../context"),r=e("@aimpact/ailearn-sdk/core"),n=e("pragmate-ui/tooltip"),o=e("pragmate-ui/list")}}),O.set("./views/user-data",{hash:49731699,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserData=function({label:e,data:{photoUrl:t,name:a}}){return s.createElement("div",{className:"user-data__section"},s.createElement("h6",{className:"user-data__label"},e),s.createElement("section",{className:"user-data__detail"},s.createElement(i.Image,{className:"user-data__img",src:t}),s.createElement("span",{className:"user-data__name"},a)))};var s=e("react"),i=e("pragmate-ui/image")}}),P.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],P.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||s("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||s("View",e?e("./views/index").View:a)},s("__beyond_pkg",P),s("hmr",new function(){this.on=(e,t)=>P.hmr.on(e,t),this.off=(e,t)=>P.hmr.off(e,t)}),P.initialise(O)}}});