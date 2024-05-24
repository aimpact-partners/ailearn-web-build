System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/chat@1.0.1/wrapper","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.1.12/model","react@18.2.0","@aimpact/ailearn-app@0.0.40/components/ui","@aimpact/chat@1.0.1/shared/components","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.1/shared/hooks","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.40/config"],function(n,e){"use strict";var t,a,r,i,s,o,c,l,d,m,u,p,f,h,g,v;return n({Controller:void 0,View:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){i=e},function(e){s=e},function(e){o=e},function(e){c=e},function(e){l=e},function(e){d=e},function(e){m=e},function(e){u=e},function(e){p=e},function(e){f=e},function(e){h=e}],execute:function(){v=a.Bundle,(g=new v({module:{vspecifier:"@aimpact/ailearn-app@0.0.40/assignments/coach/list",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",i],["@aimpact/chat/wrapper",s],["@aimpact/ailearn-sdk/core",o],["@beyond-js/reactive/model",c],["react",l],["@aimpact/ailearn-app/components/ui",d],["@aimpact/chat/shared/components",m],["@beyond-js/react-18-widgets/hooks",u],["@aimpact/chat/shared/hooks",p],["pragmate-ui/components",f],["@aimpact/ailearn-app/config",h]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-assignments-coach-list",vspecifier:"@aimpact/ailearn-app@0.0.40/assignments/coach/list.widget",is:"page",route:"/assignments/${id}/coach/list",layout:"general-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.40/assignments/coach/list.widget"),(v=new Map).set("./controller",{hash:2972444672,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),r=e("./views");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return r.View}show(){this.#store.load(this.uri.vars.get("id"))}hide(){}}t.Controller=i}}),v.set("./store",{hash:2980597350,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@aimpact/chat/wrapper"),n=e("@aimpact/ailearn-sdk/core");class r extends e("@beyond-js/reactive/model").ReactiveModel{#model;get model(){return this.#model}load=async e=>{try{this.#model&&this.#model.id!==e&&(this.#model.off("change",this.triggerEvent),this.#model=void 0),this.#model=new n.Classroom({id:e}),this.#model.on("change",this.triggerEvent),await this.#model.load({id:e}),this.ready=!0}catch(e){"ERROR_DATA_QUERY"===e&&(this.error=!0,this.ready=!0)}};async getLessonData(t){await t.load();var e=a.AppWrapper.chats["items"];e.filter(e=>{if(e.metadata&&e.metadata.lesson?.id===t.id)return!0})}}t.StoreManager=r}}),v.set("./views/context",{hash:3962165658,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useListContext=t.ListContext=void 0;var a=e("react");const n=t.ListContext=a.default.createContext({});t.useListContext=()=>a.default.useContext(n)}}),v.set("./views/index",{hash:2967773448,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e}){const[t,a]=g.default.useState(e.ready),[n,r]=g.default.useState(e.error),[i,s]=(0,w.useTexts)(v.module.specifier),[,o]=g.default.useState(e?.model?.assignments);if((0,y.useBinder)([e],()=>{a(e.ready),r(e.error),o(e.model?.assignments)}),!t||!i)return g.default.createElement(h.PreloadScreen,null);if(n)return g.default.createElement(d.NotFound,{texts:s,textsReady:i});var c=e.model["assignments"],l=c?.length?p.List:m.EmptyList;return g.default.createElement(f.ListContext.Provider,{value:{store:e,items:c,texts:s,fetching:e.fetching}},g.default.createElement(u.Header,null),g.default.createElement("main",{className:"page__container"},g.default.createElement(d.HeaderCard,{option:"light",title:e.model.name},g.default.createElement("p",{className:"header-container__subtitle"}," ",s.description," ")),g.default.createElement(d.SubDivider,{title:s.dividerTitle}),g.default.createElement(l,null)))};var d=e("@aimpact/ailearn-app/components/ui"),m=e("./list/empty"),u=e("./header"),p=e("./list"),f=e("./context"),h=e("@aimpact/chat/shared/components"),g=e("react"),v=e("beyond_context"),y=e("@beyond-js/react-18-widgets/hooks"),w=e("@aimpact/chat/shared/hooks")}}),v.set("./views/list/LessonInfo",{hash:1155994592,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LessonInfo=function({assignmentId:a,topics:e}){return a&&e?n.default.createElement("section",{className:"item__actions"},e.map(e=>{var t=`/assignments/dashboard/${a}.${e.id}/classwork`;return n.default.createElement(r.Link,{key:t,href:t},e.title)})):null};var n=e("react"),r=e("pragmate-ui/components")}}),v.set("./views/list/empty",{hash:1244498565,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyList=function(){var e=(0,r.useListContext)()["texts"];return a.default.createElement(n.EmptyCard,{text:e.empty,icon:"info"})};var a=e("react"),n=e("@aimpact/ailearn-app/components/ui"),r=e("../context")}}),v.set("./views/list/index",{hash:207350619,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.List=function(){var e=(0,r.useListContext)()["items"];return a.default.createElement(i.ListContainer,{items:e,control:n.Item})};var a=e("react"),n=e("./item"),r=e("../context"),i=e("@aimpact/ailearn-app/components/ui")}}),v.set("./views/list/item",{hash:3554530366,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Item=function({data:e}){var t=(0,i.useListContext)()["texts"];var a=!["conversation","debate","character-talk","content-theory"].includes(e.id)&&"multiple-choice"===e.id?"assessment":e.id;var a="/assignments/"+a,n={image:e.module.picture};return r.default.createElement(s.Card,{data:n,link:a},r.default.createElement(s.CardContent,{option:"column",className:"theme-0"},r.default.createElement("section",{className:"card-footer__container"},r.default.createElement("h4",{className:"card__title"},e.module.title),r.default.createElement("span",{className:"card__subtitle p2"},e.module.description)),r.default.createElement("div",{className:"card__footer-actions"},r.default.createElement("hr",{className:"card__divider"}),r.default.createElement("div",{className:"card__details"},r.default.createElement("span",{className:"card__text-hover p2"},t.moduleAccess)))))};var r=e("react"),i=e("../context"),s=e("@aimpact/ailearn-app/components/ui")}}),g.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],g.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a)},n("__beyond_pkg",g),n("hmr",new function(){this.on=(e,t)=>g.hmr.on(e,t),this.off=(e,t)=>g.hmr.off(e,t)}),g.initialise(v)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvTGVzc29uSW5mby50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIiNzdG9yZSIsImNyZWF0ZVN0b3JlIiwidGhpcyIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJoaWRlIiwiZXhwb3J0cyIsIl93cmFwcGVyIiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwiI21vZGVsIiwibW9kZWwiLCJpZCIsIm9mZiIsInRyaWdnZXJFdmVudCIsInVuZGVmaW5lZCIsIkNsYXNzcm9vbSIsIm9uIiwiYXdhaXQiLCJyZWFkeSIsImVycm9yIiwiZ2V0TGVzc29uRGF0YSIsImxlc3NvbiIsImNoYXRzIiwiQXBwV3JhcHBlciIsIml0ZW1zIiwiZmlsdGVyIiwiaXRlbSIsIm1ldGFkYXRhIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsInN0b3JlIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwidGV4dHNSZWFkeSIsInRleHRzIiwiX2hvb2tzMiIsInVzZVRleHRzIiwiX2JleW9uZF9jb250ZXh0IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0SXRlbXMiLCJhc3NpZ25tZW50cyIsIl9ob29rcyIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJfY29tcG9uZW50cyIsIlByZWxvYWRTY3JlZW4iLCJfdWkiLCJOb3RGb3VuZCIsIkNvbnRyb2wiLCJsZW5ndGgiLCJfbGlzdCIsIkxpc3QiLCJfZW1wdHkiLCJFbXB0eUxpc3QiLCJfY29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJmZXRjaGluZyIsIl9oZWFkZXIiLCJIZWFkZXIiLCJjbGFzc05hbWUiLCJIZWFkZXJDYXJkIiwib3B0aW9uIiwidGl0bGUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJTdWJEaXZpZGVyIiwiZGl2aWRlclRpdGxlIiwiYXNzaWdubWVudElkIiwidG9waWNzIiwibWFwIiwidG9waWMiLCJsZXQiLCJ1cmwiLCJMaW5rIiwia2V5IiwiaHJlZiIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImljb24iLCJMaXN0Q29udGFpbmVyIiwiY29udHJvbCIsIl9pdGVtIiwiSXRlbSIsImRhdGEiLCJpbmNsdWRlcyIsImltYWdlIiwicGljdHVyZSIsIkNhcmQiLCJsaW5rIiwiQ2FyZENvbnRlbnQiLCJtb2R1bGVBY2Nlc3MiXSwibWFwcGluZ3MiOiJ3NkRBQUEsSUFBQUEsRUFBQUMsRUFBQSxrQ0FBQSxFQUNBQyxFQUFBRCxFQUFBLFNBQUEsRUFDQUUsRUFBQUYsRUFBQSxTQUFBLFFBR01HLFVBQW1CSixFQUFBSywwQkFDeEJDLE9BQ0FDLGNBRUMsT0FEQUMsS0FBS0YsT0FBUyxJQUFJSixFQUFBTyxhQUNYRCxLQUFLRixNQUNiLENBQ0FJLGFBQ0MsT0FBT1AsRUFBQVEsSUFDUixDQUtBQyxPQUNDSixLQUFLRixPQUFPTyxLQUFLTCxLQUFLTSxJQUFJQyxLQUFLQyxJQUFJLElBQUksQ0FBQyxDQUN6QyxDQUtBQyxRLENBQ0FDLEVBQUFkLFdBQUFBLEMsa0lDMUJELElBQUFlLEVBQUFsQixFQUFBLHVCQUFBLEVBQ0FtQixFQUFBbkIsRUFBQSwyQkFBQSxRQUdhUSxVQUZiUixFQUFBLDJCQUFBLEVBRWtDb0IsY0FDakNDLE9BQ0FDLFlBQ0MsT0FBT2YsS0FBS2MsTUFDYixDQVFBVCxLQUFjVyxNQUFB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