System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/chat@1.0.2/wrapper","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.2.0/model","react@18.2.0","@aimpact/ailearn-app@0.1.3-test.02/components/ui","@aimpact/chat@1.0.2/shared/components","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.2/shared/hooks","pragmate-ui@1.0.0-beta.1/components","@aimpact/ailearn-app@0.1.3-test.02/config","pragmate-ui@1.0.0-beta.1/list"],function(n,e){var t,a,s,i,r,o,c,l,d,m,u,p,f,h,g,v,y;return n({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){s=e},function(e){i=e},function(e){r=e},function(e){o=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){m=e},function(e){u=e},function(e){p=e},function(e){f=e},function(e){h=e},function(e){g=e}],execute:function(){y=a.Bundle,(v=new y({module:{vspecifier:"@aimpact/ailearn-app@0.1.3-test.02/assignments/coach/list",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",s],["@beyond-js/react-18-widgets/page",i],["@aimpact/chat/wrapper",r],["@aimpact/ailearn-sdk/core",o],["@beyond-js/reactive/model",c],["react",l],["@aimpact/ailearn-app/components/ui",d],["@aimpact/chat/shared/components",m],["@beyond-js/react-18-widgets/hooks",u],["@aimpact/chat/shared/hooks",p],["pragmate-ui/components",f],["@aimpact/ailearn-app/config",h],["pragmate-ui/list",g]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-assignments-coach-list",vspecifier:"@aimpact/ailearn-app@0.1.3-test.02/assignments/coach/list.widget",is:"page",route:"/assignments/${id}/coach/list",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.3-test.02/assignments/coach/list.widget"),(y=new Map).set("./controller",{hash:2972444672,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),s=e("./views");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return s.View}show(){this.#store.load(this.uri.vars.get("id"))}hide(){}}t.Controller=i}}),y.set("./store",{hash:2980597350,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/chat/wrapper"),n=e("@aimpact/ailearn-sdk/core"),e=e("@beyond-js/reactive/model");class s extends e.ReactiveModel{#model;get model(){return this.#model}load=async e=>{try{this.#model&&this.#model.id!==e&&(this.#model.off("change",this.triggerEvent),this.#model=void 0),this.#model=new n.Classroom({id:e}),this.#model.on("change",this.triggerEvent),await this.#model.load({id:e}),this.ready=!0}catch(e){"ERROR_DATA_QUERY"===e&&(this.error=!0,this.ready=!0)}};async getLessonData(t){await t.load(),a.AppWrapper.chats.items.filter(e=>{if(e.metadata&&e.metadata.lesson?.id===t.id)return!0})}}t.StoreManager=s}}),y.set("./views/context",{hash:3962165658,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useListContext=t.ListContext=void 0;var a=e("react");let n=t.ListContext=a.default.createContext({});t.useListContext=()=>a.default.useContext(n)}}),y.set("./views/index",{hash:2967773448,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){let[t,a]=g.default.useState(e.ready),[n,s]=g.default.useState(e.error),[i,r]=(0,_.useTexts)(v.module.specifier),[,o]=g.default.useState(e?.model?.assignments),c,l;return(0,y.useBinder)([e],()=>{a(e.ready),s(e.error),o(e.model?.assignments)}),t&&i?n?g.default.createElement(d.NotFound,{texts:r,textsReady:i}):(l=(c=e.model.assignments)?.length?p.List:m.EmptyList,g.default.createElement(f.ListContext.Provider,{value:{store:e,items:c,texts:r,fetching:e.fetching}},g.default.createElement(u.Header,null),g.default.createElement("main",{className:"page__container"},g.default.createElement(d.HeaderCard,{option:"light",title:e.model.name},g.default.createElement("p",{className:"header-container__subtitle"}," ",r.description," ")),g.default.createElement(d.SubDivider,{title:r.dividerTitle}),g.default.createElement(l,null)))):g.default.createElement(h.PreloadScreen,null)};var d=e("@aimpact/ailearn-app/components/ui"),m=e("./list/empty"),u=e("./header"),p=e("./list"),f=e("./context"),h=e("@aimpact/chat/shared/components"),g=e("react"),v=e("beyond_context"),y=e("@beyond-js/react-18-widgets/hooks"),_=e("@aimpact/chat/shared/hooks")}}),y.set("./views/list/LessonInfo",{hash:1155994592,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LessonInfo=function({assignmentId:a,topics:e}){return a&&e?n.default.createElement("section",{className:"item__actions"},e.map(e=>{var t=`/assignments/dashboard/${a}.${e.id}/classwork`;return n.default.createElement(s.Link,{key:t,href:t},e.title)})):null};var n=e("react"),s=e("pragmate-ui/components")}}),y.set("./views/list/empty",{hash:1244498565,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,s.useListContext)().texts;return a.default.createElement(n.EmptyCard,{text:e.empty,icon:"info"})};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),s=e("../context")}}),y.set("./views/list/index",{hash:3476004597,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function(){var e=(0,s.useListContext)().items;return a.default.createElement(i.List,{className:"list__container",items:e,control:n.Item})};var a=e("react"),n=e("./item"),s=e("../context"),i=e("pragmate-ui/list")}}),y.set("./views/list/item",{hash:3554530366,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({data:e}){var t=(0,i.useListContext)().texts,a=["conversation","debate","character-talk","content-theory"].includes(e.id)||"multiple-choice"!==e.id?e.id:"assessment",n={image:e.module.picture};return s.default.createElement(r.Card,{data:n,link:"/assignments/"+a},s.default.createElement(r.CardContent,{option:"column",className:"theme-0"},s.default.createElement("section",{className:"card-footer__container"},s.default.createElement("h4",{className:"card__title"},e.module.title),s.default.createElement("span",{className:"card__subtitle p2"},e.module.description)),s.default.createElement("div",{className:"card__footer-actions"},s.default.createElement("hr",{className:"card__divider"}),s.default.createElement("div",{className:"card__details"},s.default.createElement("span",{className:"card__text-hover p2"},t.moduleAccess)))))};var s=e("react"),i=e("../context"),r=e("@aimpact/ailearn-app/components/ui")}}),v.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],v.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",v),n("hmr",new function(){this.on=(e,t)=>v.hmr.on(e,t),this.off=(e,t)=>v.hmr.off(e,t)}),v.initialise(y)}}});