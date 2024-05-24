System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-sdk@1.0.0/core","@beyond-js/reactive@1.1.12/model","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-app@0.0.40/coins-layout.widget","@aimpact/ailearn-sdk@1.0.0/tracking","react@18.2.0","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.40/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.1/shared/components","@aimpact/ailearn-app@0.0.40/components/hooks"],function(n,e){"use strict";var t,a,r,i,o,s,c,d,l,u,m,p,h,g,v,y,f;return n({Controller:void 0,CharacterCard:void 0,DesktopView:void 0,View:void 0,MobileView:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){r=e},function(e){i=e},function(e){o=e},function(e){s=e},function(e){c=e},function(e){d=e},function(e){l=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){h=e},function(e){g=e},function(e){v=e}],execute:function(){f=a.Bundle,(y=new f({module:{vspecifier:"@aimpact/ailearn-app@0.0.40/assignments/debate",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",r],["@beyond-js/react-18-widgets/page",i],["@aimpact/ailearn-sdk/core",o],["@beyond-js/reactive/model",s],["@beyond-js/kernel/texts",c],["@aimpact/ailearn-app/coins-layout.widget",d],["@aimpact/ailearn-sdk/tracking",l],["react",u],["pragmate-ui/components",m],["@aimpact/ailearn-app/components/ui",p],["@beyond-js/react-18-widgets/hooks",h],["@aimpact/chat/shared/components",g],["@aimpact/ailearn-app/components/hooks",v]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-debate-activity-page",vspecifier:"@aimpact/ailearn-app@0.0.40/assignments/debate.widget",is:"page",route:"/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",layout:"coins-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.40/assignments/debate.widget"),(f=new Map).set("./controller",{hash:1310206847,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),n=e("./store"),r=e("./views");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new n.StoreManager,this.#store}get Widget(){return r.View}show(){this.#store.load(this.uri.vars.get("assignmentId"),this.uri.vars.get("activityId"),this.uri.vars.get("id"))}}t.Controller=i}}),f.set("./store",{hash:1532018939,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),n=e("@beyond-js/kernel/texts"),r=e("beyond_context"),i=e("@aimpact/ailearn-app/coins-layout.widget"),o=e("@aimpact/ailearn-sdk/tracking");class s extends a.ReactiveModel{#model;#assignmentId;#activityId;get model(){return this.#model}#items;get items(){return this.#items}#paramsUri;get paramsUri(){return this.#paramsUri}#texts=new n.CurrentTexts(r.module.specifier);get texts(){return this.#texts?.value}#chatId;get chatId(){return this.#chatId}get ready(){return super.ready&&this.#texts.ready}#found;get found(){return this.#found}get hasCredits(){return 0<this.#model?.credits?.total}get canConsumeCredits(){return this.#found}#tracking;get tracking(){return this.#tracking}constructor(){super(),this.#texts.on("change",this.triggerEvent)}async load(e,t,a){try{var n,r;this.#chatId=a,i.LayoutBroker.overlay=!0,i.LayoutBroker.canConsumeCredits=!0,e===this.#assignmentId&&this.#activityId===t?i.LayoutBroker.addModel(this.#tracking):(this.#assignmentId=e,this.#activityId=t,n=new o.Tracking({assignmentId:e}),r=await(this.#tracking=n).activities.load({id:t}),this.#model=r,i.LayoutBroker.addModel(this.#tracking),super.ready=!0,this.#found=!0,this.triggerEvent())}catch(e){super.ready=!0,this.#found=!1,i.LayoutBroker.canConsumeCredits=!1}}}t.StoreManager=s}}),f.set("./views/characters-card",{hash:574123641,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterCard=function(){var e=(0,n.useConversationContext)()["texts"],t=e=>{console.log("clickAvatar")};return a.default.createElement("section",{className:"character-card__container"},a.default.createElement("span",{className:"character-card__title"},e.selectTitle),a.default.createElement("div",{className:"character-card__actions"}),a.default.createElement(r.Button,{variant:"primary",className:"character-card__button mt-15",onClick:t,label:e.buttonText}))};var a=e("react"),n=e("./context"),r=e("pragmate-ui/components")}}),f.set("./views/chat",{hash:19038571,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatControl=function(){const{store:e,chatId:t,assignmentId:a,texts:n}=(0,s.useConversationContext)(),[r,i]=o.default.useState(e.hasCredits);return(0,l.useBinder)([e.model],()=>{i(e.hasCredits)},"credits.change"),r?o.default.createElement("aimpact-chat-control",{id:t,"assignment-id":a}):o.default.createElement(c.ChatPreload,{text:n.noCredits,onClick:()=>d.LayoutBroker.ensureCredits(()=>{})})};var o=e("react"),s=e("./context"),c=e("@aimpact/ailearn-app/components/ui"),d=e("@aimpact/ailearn-app/coins-layout.widget"),l=e("@beyond-js/react-18-widgets/hooks")}}),f.set("./views/context",{hash:3226836486,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useConversationContext=t.ConversationContext=void 0;var a=e("react");const n=t.ConversationContext=a.default.createContext({});t.useConversationContext=()=>a.default.useContext(n)}}),f.set("./views/desktop",{hash:1756712869,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DesktopView=function(){var{store:e,texts:t}=(0,n.useConversationContext)();return a.default.createElement("div",{className:"page-activity-container"},a.default.createElement(r.ActivityHeader,{title:e.model.title,icon:e.model.type,type:e.model.type}),a.default.createElement(r.PageContainer,{className:"content-activity--desktop-container"},a.default.createElement(i.ChatControl,null),a.default.createElement("aside",{className:"content-activity__aside"},a.default.createElement("div",null,a.default.createElement(r.EntityImage,{className:"entity-image-cover",type:e.model.type,src:e.model.picture,entity:"activity"}),a.default.createElement("h4",null,t.description),a.default.createElement("p",null,e.model.description)))))};var a=e("react"),n=e("./context"),r=e("@aimpact/ailearn-app/components/ui"),i=e("./chat")}}),f.set("./views/index",{hash:2564894817,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e,uri:t}){const[a,n]=(0,d.useState)(e.ready),[r]=(0,d.useState)(e.items),i=(0,p.useMediaQuery)(),o=t.vars.get("assignmentId"),s=t.vars.get("chatId");if((0,u.useBinder)([e],()=>{n(e.ready)}),a&&!e.found)return d.default.createElement("app-missing",null);if(!a)return d.default.createElement(l.PreloadScreen,null);var t={texts:e.texts,fetching:e.fetching,store:e,chatId:s,assignmentId:o,items:r},c="md"===i||"lg"===i?h.DesktopView:g.MobileView;return d.default.createElement(m.ConversationContext.Provider,{value:t},d.default.createElement(c,null))};var d=e("react"),l=e("@aimpact/chat/shared/components"),u=e("@beyond-js/react-18-widgets/hooks"),m=e("./context"),p=e("@aimpact/ailearn-app/components/hooks"),h=e("./desktop"),g=e("./mobile")}}),f.set("./views/mobile",{hash:1703638579,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MobileView=function(){var e=(0,n.useConversationContext)()["store"];return a.default.createElement("div",{className:"page-activity-container"},a.default.createElement(r.ActivityHeader,{title:e.model.title,icon:e.model.type,type:e.model.type}),a.default.createElement(r.PageContainer,{className:"content-activity--container"},a.default.createElement(r.EntityImage,{className:"entity-image-cover",src:e.model.picture,type:e.model.type,entity:"activity"}),a.default.createElement(i.ChatControl,null)))};var a=e("react"),n=e("./context"),r=e("@aimpact/ailearn-app/components/ui"),i=e("./chat")}}),y.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/characters-card",from:"CharacterCard",name:"CharacterCard"},{im:"./views/desktop",from:"DesktopView",name:"DesktopView"},{im:"./views/index",from:"View",name:"View"},{im:"./views/mobile",from:"MobileView",name:"MobileView"}],y.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||n("Controller",e?e("./controller").Controller:a),!e&&"CharacterCard"!==t||n("CharacterCard",e?e("./views/characters-card").CharacterCard:a),!e&&"DesktopView"!==t||n("DesktopView",e?e("./views/desktop").DesktopView:a),!e&&"View"!==t||n("View",e?e("./views/index").View:a),!e&&"MobileView"!==t||n("MobileView",e?e("./views/mobile").MobileView:a)},n("__beyond_pkg",y),n("hmr",new function(){this.on=(e,t)=>y.hmr.on(e,t),this.off=(e,t)=>y.hmr.off(e,t)}),y.initialise(f)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXJhY3RlcnMtY2FyZC50c3giLCIvdHMvdmlld3MvY2hhdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9iaWxlLnRzeCJdLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIiNzdG9yZSIsImNyZWF0ZVN0b3JlIiwidGhpcyIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJleHBvcnRzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0IiwiX3RyYWNraW5nIiwiUmVhY3RpdmVNb2RlbCIsIiNtb2RlbCIsIiNhc3NpZ25tZW50SWQiLCIjYWN0aXZpdHlJZCIsIm1vZGVsIiwiI2l0ZW1zIiwiaXRlbXMiLCIjcGFyYW1zVXJpIiwicGFyYW1zVXJpIiwiI3RleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHMiLCJ2YWx1ZSIsIiNjaGF0SWQiLCJjaGF0SWQiLCJyZWFkeSIsInN1cGVyIiwiI2ZvdW5kIiwiZm91bmQiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCIjdHJhY2tpbmciLCJ0cmFja2luZyIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJhc3NpZ25tZW50SWQiLCJhY3Rpdml0eUlkIiwiYWN0aXZpdHkiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJUcmFja2luZyIsImF3YWl0IiwiYWN0aXZpdGllcyIsImlkIiwiZSIsIl9jb250ZXh0IiwidXNlQ29udmVyc2F0aW9uQ29udGV4dCIsIm9uQWN0aW9uQ2xpY2siLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJfcmVhY3QiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNlbGVjdFRpdGxlIiwiX2NvbXBvbmVudHMiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsInN0b3JlIiwic2V0SGFzQ3JlZGl0cyIsInVzZVN0YXRlIiwiX2hvb2tzIiwidXNlQmluZGVyIiwiYXNzaWdubWVudC1pZCIsIl91aSIsIkNoYXRQcmVsb2FkIiwidGV4dCIsIm5vQ3JlZGl0cyIsImVuc3VyZUNyZWRpdHMiLCJDb252ZXJzYXRpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiaWNvbiIsInR5cGUiLCJQYWdlQ29udGFpbmVyIiwiX2NoYXQiLCJDaGF0Q29udHJvbCIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsImRlc2NyaXB0aW9uIiwic2V0UmVhZHkiLCJzaXplIiwiX2hvb2tzMiIsInVzZU1lZGlhUXVlcnkiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJDb250cm9sIiwiX2Rlc2t0b3AiLCJEZXNrdG9wVmlldyIsIl9tb2JpbGUiLCJNb2JpbGVWaWV3IiwiUHJvdmlkZXIiXSwibWFwcGluZ3MiOiJ1b0VBQUEsSUFBQUEsRUFBQUMsRUFBQSxrQ0FBQSxFQUNBQyxFQUFBRCxFQUFBLFNBQUEsRUFDQUUsRUFBQUYsRUFBQSxTQUFBLFFBR01HLFVBQW1CSixFQUFBSywwQkFDeEJDLE9BQ0FDLGNBRUMsT0FEQUMsS0FBS0YsT0FBUyxJQUFJSixFQUFBTyxhQUNYRCxLQUFLRixNQUNiLENBQ0FJLGFBQ0MsT0FBT1AsRUFBQVEsSUFDUixDQUtBQyxPQUVDSixLQUFLRixPQUFPTyxLQUFLTCxLQUFLTSxJ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