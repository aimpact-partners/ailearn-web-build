System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-app@0.1.4-test.02/dashboard-layout.widget","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.2.0/model","@beyond-js/kernel@0.1.9/texts","react@18.2.0","pragmate-ui@1.0.0-beta.1/icons","@aimpact/chat-sdk@1.0.1/session","@aimpact/chat@1.0.2/shared/icons","pragmate-ui@1.0.0-beta.1/list","@aimpact/ailearn-app@0.1.4-test.02/components/ui","@aimpact/ailearn-app@0.1.4-test.02/components/navbar-header.code","@aimpact/ailearn-app@0.1.4-test.02/config","@beyond-js/react-18-widgets@1.1.2/hooks","react@18.2.0/jsx-runtime"],function(r,e){var t,a,n,s,o,i,l,c,d,u,m,p,h,f,g,v,y,b,w,x;return r({Controller:void 0,Content:void 0,Header:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){s=e},function(e){o=e},function(e){i=e},function(e){l=e},function(e){c=e},function(e){d=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){h=e},function(e){f=e},function(e){g=e},function(e){v=e},function(e){y=e},function(e){b=e}],execute:function(){x=a.Bundle,(w=new x({module:{vspecifier:"@aimpact/ailearn-app@0.1.4-test.02/dashboard-wall",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",s],["@aimpact/ailearn-app/dashboard-layout.widget",o],["@aimpact/ailearn-sdk/core",i],["@beyond-js/reactive/model",l],["@beyond-js/kernel/texts",c],["react",d],["pragmate-ui/icons",u],["@aimpact/chat-sdk/session",m],["@aimpact/chat/shared/icons",p],["pragmate-ui/list",h],["@aimpact/ailearn-app/components/ui",f],["@aimpact/ailearn-app/components/navbar-header.code",g],["@aimpact/ailearn-app/config",v],["@beyond-js/react-18-widgets/hooks",y],["react/jsx-runtime",b]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"dashboard-wall",vspecifier:"@aimpact/ailearn-app@0.1.4-test.02/dashboard-wall.widget",is:"page",route:"/assignments/${id}/wall",layout:"dashboard-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.4-test.02/dashboard-wall.widget"),(x=new Map).set("./controller",{hash:1571202678,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),r=e("./store"),n=e("./views"),s=e("@aimpact/ailearn-app/dashboard-layout.widget");class o extends a.PageReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager,this.#store}get Widget(){return n.View}show(){s.LayoutBroker.setBackLink(`/assignments/${this.uri.vars.get("id")}/dashboard/classroom`),this.#store.load(this.uri.vars.get("id"))}hide(){s.LayoutBroker.removeOverlay()}}t.Controller=o}}),x.set("./interface",{hash:3506573663,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),x.set("./store",{hash:538185621,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var n=e("@aimpact/ailearn-sdk/core"),a=e("@beyond-js/reactive/model"),s=e("@aimpact/ailearn-app/dashboard-layout.widget"),r=e("@beyond-js/kernel/texts"),o=e("beyond_context");class i extends a.ReactiveModel{#model;get model(){return this.#model}#items;get items(){return this.#items}#id;get id(){return this.#id}#assignment;get assignment(){return this.#assignment}#texts=new r.CurrentTexts(o.module.specifier);get texts(){return this.#texts?.value}get ready(){return super.ready&&this.#texts.ready}constructor(){super(),this.#texts.on("change",this.triggerEvent)}refresh=async()=>{try{this.fetching=!0;var e=(await this.model.load({id:this.#id})).messages;this.#items=e}catch(e){console.error(e)}finally{this.fetching=!1}};async load(r){try{this.#assignment=new n.Assignment({id:r}),this.#model=new n.DashboardWall,this.#id=r;let e=(await this.#model.load({id:r})).messages,t=await this.#assignment.load({id:r}),a=(this.#items=e,s.LayoutBroker.setBackLink(`/assignments/${r}/dashboard/classroom`),()=>{this.#texts.ready&&(s.LayoutBroker.setOverlay(this.texts?.header+" "+t.module.title),this.#texts.off("change",a))});this.ready?a():this.#texts.on("change",a),super.ready=!0,this.triggerEvent()}catch(e){console.error(e)}}}t.StoreManager=i}}),x.set("./views/components/profile-icon",{hash:1205210088,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileIcon=function({role:e}){let[t,a]=(0,o.useState)(!1),r="user"===e?"user":globalThis.localStorage.getItem("chat.app.user.default.profile"),n=l.sessionWrapper.user.getProperties(),s="user"===e?n.photoURL:globalThis.localStorage.getItem("chat.app.user.default.profile");return o.default.createElement("picture",{className:"picture__container"},n.photoURL&&!t||"user"!==e?o.default.createElement("img",{alt:"user image profile",src:s,onError:()=>a(!0)}):o.default.createElement(i.Icon,{className:"lg",icon:c.ICONS[r]??r}))};var o=e("react"),i=e("pragmate-ui/icons"),l=e("@aimpact/chat-sdk/session"),c=e("@aimpact/chat/shared/icons")}}),x.set("./views/content/index",{hash:2680141398,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Content=void 0;var a=e("react"),r=e("../context"),n=e("./item"),s=e("pragmate-ui/list");t.Content=()=>{var e=(0,r.useWallDashboardContext)().items;return a.default.createElement(s.List,{className:"wall__container",items:e,control:n.Item})}}}),x.set("./views/content/item",{hash:1300636804,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({data:e}){var{}=(0,r.useWallDashboardContext)();return a.default.createElement("div",{className:"wall-container",id:e.time},a.default.createElement("p",{className:"title-activity h3"},e.activity.title),a.default.createElement(n.Message,{role:"user",text:e.prompt.content,user:e.user}),a.default.createElement(n.Message,{role:"system",text:e.answer.content,user:void 0}))};var a=e("react"),r=e("../context"),n=e("./message")}}),x.set("./views/content/message",{hash:2364017378,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Message=function({role:e,text:t,user:a}){let[r,n]=(0,o.useState)(!1),s="wall "+e;return o.default.createElement("div",{className:s},o.default.createElement("section",{className:"picture__container"},o.default.createElement(i.ProfileIcon,{role:e,photoUrl:a?.photoUrl})),o.default.createElement("section",{className:"wall-message__container"},o.default.createElement("div",{className:"message-text__container expand-"+r},a&&o.default.createElement("p",{className:"message-user__label-text p2"},a.name),o.default.createElement("p",{className:"message__label-text p2 expand-"+r},(e=r?5e3:280,(a=t).length>e?a.slice(0,e)+"...":a)))),o.default.createElement("section",{className:"wall-actions__container"},o.default.createElement(l.IconButton,{onClick:function(){n(!r)},className:"md",icon:r?"arrowDropUp":"arrowDropDown"})))};var o=e("react"),i=e("../components/profile-icon"),l=e("pragmate-ui/icons")}}),x.set("./views/context",{hash:1277739422,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useWallDashboardContext=t.WallDashboardContext=void 0;var a=e("react");let r=t.WallDashboardContext=a.default.createContext({});t.useWallDashboardContext=()=>a.default.useContext(r)}}),x.set("./views/empty",{hash:3693986805,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,n.useWallDashboardContext)().texts;return a.default.createElement(r.EmptyCard,{text:e.emptyTitle,description:e.empty,icon:"info"})};var a=e("react"),r=e("@aimpact/ailearn-app/components/ui"),n=e("./context")}}),x.set("./views/header",{hash:2381242925,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=function(){var e=(0,n.useWallDashboardContext)().store;return r.default.createElement(r.default.Fragment,null,r.default.createElement(a.NavbarHeader,{breadcrumb:[["Assignment",`/assignments/${e.id}/dashboard/classroom`],["Wall",""]]},r.default.createElement(s.IconButton,{icon:"refresh",onClick:e.refresh})))};var a=e("@aimpact/ailearn-app/components/navbar-header.code"),r=e("react"),n=e("./context"),s=e("pragmate-ui/icons")}}),x.set("./views/index",{hash:31841301,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){let[t,a]=m.default.useState(e.ready),[r,n]=(0,d.useTexts)(u.module.specifier),[s,o]=m.default.useState(e.items?.length??0),i,l;return(0,d.useBinder)([e],()=>{a(e.ready),o(e.items.length)}),t&&r?(i={texts:n,store:e,items:e.items,fetching:e.fetching,totalItems:s},l=0<e.items.length?h.Content:f.EmptyList,m.default.createElement(p.WallDashboardContext.Provider,{value:i},m.default.createElement(c.PageContainer,null,m.default.createElement(l,null)))):m.default.createElement(c.PageLoader,{fetching:!0})};var c=e("@aimpact/ailearn-app/components/ui"),d=e("@beyond-js/react-18-widgets/hooks"),u=e("beyond_context"),m=e("react"),p=e("./context"),h=e("./content"),f=e("./empty")}}),w.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/content/index",from:"Content",name:"Content"},{im:"./views/header",from:"Header",name:"Header"},{im:"./views/index",from:"View",name:"View"}],w.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:a),!e&&"Content"!==t||r("Content",e?e("./views/content/index").Content:a),!e&&"Header"!==t||r("Header",e?e("./views/header").Header:a),!e&&"View"!==t||r("View",e?e("./views/index").View:a)},r("__beyond_pkg",w),r("hmr",new function(){this.on=(e,t)=>w.hmr.on(e,t),this.off=(e,t)=>w.hmr.off(e,t)}),w.initialise(x)}}});