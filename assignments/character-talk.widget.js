System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@beyond-js/reactive@1.1.12/model","@beyond-js/kernel@0.1.9/texts","@aimpact/ailearn-app@0.0.46.dev-20/main-layout.widget","@aimpact/ailearn-sdk@1.0.0/tracking","react@18.2.0","pragmate-ui@0.1.1/components","@aimpact/ailearn-app@0.0.46.dev-20/components/ui","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/chat@1.0.1/shared/components","@aimpact/ailearn-app@0.0.46.dev-20/components/hooks"],function(r,e){"use strict";var t,a,n,i,o,s,c,d,l,u,m,p,h,v,g,f;return r({Controller:void 0,CharacterCard:void 0,DesktopView:void 0,View:void 0,MobileView:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){i=e},function(e){o=e},function(e){s=e},function(e){c=e},function(e){d=e},function(e){l=e},function(e){u=e},function(e){m=e},function(e){p=e},function(e){h=e},function(e){v=e}],execute:function(){f=a.Bundle,(g=new f({module:{vspecifier:"@aimpact/ailearn-app@0.0.46.dev-20/assignments/character-talk",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",i],["@beyond-js/reactive/model",o],["@beyond-js/kernel/texts",s],["@aimpact/ailearn-app/main-layout.widget",c],["@aimpact/ailearn-sdk/tracking",d],["react",l],["pragmate-ui/components",u],["@aimpact/ailearn-app/components/ui",m],["@beyond-js/react-18-widgets/hooks",p],["@aimpact/chat/shared/components",h],["@aimpact/ailearn-app/components/hooks",v]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"ailearn-character-talk",vspecifier:"@aimpact/ailearn-app@0.0.46.dev-20/assignments/character-talk.widget",is:"page",route:"/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",layout:"main-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.0.46.dev-20/assignments/character-talk.widget"),(f=new Map).set("./controller",{hash:1310206847,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),r=e("./store"),n=e("./views");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new r.StoreManager,this.#store}get Widget(){return n.View}show(){this.#store.load(this.uri.vars.get("assignmentId"),this.uri.vars.get("activityId"),this.uri.vars.get("id"))}}t.Controller=i}}),f.set("./store",{hash:52166411,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var a=e("@beyond-js/reactive/model"),r=e("@beyond-js/kernel/texts"),n=e("beyond_context"),i=e("@aimpact/ailearn-app/main-layout.widget"),o=e("@aimpact/ailearn-sdk/tracking");class s extends a.ReactiveModel{#model;#assignmentId;#activityId;#tracking;get tracking(){return this.#tracking}get model(){return this.#model}#items;get items(){return this.#items}#paramsUri;get paramsUri(){return this.#paramsUri}#texts=new r.CurrentTexts(n.module.specifier);get texts(){return this.#texts?.value}#chatId;get chatId(){return this.#chatId}get ready(){return super.ready&&this.#texts.ready}#found;get found(){return this.#found}get canConsumeCredits(){return this.#found}get hasCredits(){return 0<this.#tracking?.credits?.total}get AIAvailable(){return 0<this.#tracking?.credits?.total}constructor(){super(),this.#texts.on("change",this.triggerEvent)}async load(e,t,a){try{var r,n;this.#chatId=a,i.LayoutBroker.overlay=!0,i.LayoutBroker.canConsumeCredits=!0,e===this.#assignmentId&&this.#activityId===t?i.LayoutBroker.addModel(this.#tracking):(this.#assignmentId=e,this.#activityId=t,r=new o.Tracking({assignmentId:e}),n=await(this.#tracking=r).activities.load({id:t}),this.#model=n,i.LayoutBroker.addModel(this.#tracking),super.ready=!0,this.#found=!0,this.triggerEvent(),this.triggerEvent())}catch(e){console.error(e),super.ready=!0,this.#found=!1,i.LayoutBroker.canConsumeCredits=!1,this.triggerEvent()}}}t.StoreManager=s}}),f.set("./views/characters-card",{hash:574123641,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterCard=function(){var e=(0,r.useConversationContext)()["texts"],t=e=>{console.log("clickAvatar")};return a.default.createElement("section",{className:"character-card__container"},a.default.createElement("span",{className:"character-card__title"},e.selectTitle),a.default.createElement("div",{className:"character-card__actions"}),a.default.createElement(n.Button,{variant:"primary",className:"character-card__button mt-15",onClick:t,label:e.buttonText}))};var a=e("react"),r=e("./context"),n=e("pragmate-ui/components")}}),f.set("./views/chat",{hash:686071543,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatControl=function(){const{store:e,chatId:t,assignmentId:a,texts:r}=(0,s.useConversationContext)(),[n,i]=o.default.useState(e.hasCredits);return(0,l.useBinder)([e.model.tracking],()=>{i(e.hasCredits)},"credits.change"),n?o.default.createElement("aimpact-chat-control",{id:t,"assignment-id":a}):o.default.createElement(c.ChatPreload,{text:r.noCredits,onClick:()=>d.LayoutBroker.ensureCredits(()=>{})})};var o=e("react"),s=e("./context"),c=e("@aimpact/ailearn-app/components/ui"),d=e("@aimpact/ailearn-app/main-layout.widget"),l=e("@beyond-js/react-18-widgets/hooks")}}),f.set("./views/context",{hash:563708756,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useConversationContext=t.ConversationContext=void 0;var a=e("react");const r=t.ConversationContext=a.default.createContext({});t.useConversationContext=()=>a.default.useContext(r)}}),f.set("./views/desktop",{hash:362503832,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DesktopView=function(){var{store:e,texts:t}=(0,r.useConversationContext)();return a.default.createElement("div",{className:"page-activity-container"},a.default.createElement(n.ActivityHeader,{icon:e.model.type,title:e.model.title,type:e.model.type}),a.default.createElement(n.PageContainer,{className:"content-activity--desktop-container"},a.default.createElement(i.ChatControl,null),a.default.createElement("aside",{className:"content-activity__aside"},a.default.createElement("div",null,a.default.createElement(n.EntityImage,{className:"entity-image-cover",src:e.model.picture,type:e.model.type,entity:"activity"}),a.default.createElement("h4",null,t.description),a.default.createElement("p",null,e.model.description)))))};var a=e("react"),r=e("./context"),n=e("@aimpact/ailearn-app/components/ui"),i=e("./chat")}}),f.set("./views/index",{hash:168313424,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=function({store:e,uri:t}){const[a,r]=(0,d.useState)(),[n,,]=(0,d.useState)(e.items),i=t.vars.get("assignmentId"),o=t.vars.get("chatId"),s=(0,v.useMediaQuery)();if((0,u.useBinder)([e],()=>r(e.ready)),a&&!e.found)return d.default.createElement("app-missing",null);if(!a)return d.default.createElement(l.PreloadScreen,null);var t={texts:e.texts,fetching:e.fetching,chatId:o,assignmentId:i,store:e,items:n},c="md"===s||"lg"===s?h.DesktopView:p.MobileView;return d.default.createElement(m.ConversationContext.Provider,{value:t},d.default.createElement(c,null))};var d=e("react"),l=e("@aimpact/chat/shared/components"),u=e("@beyond-js/react-18-widgets/hooks"),m=e("./context"),p=e("./mobile"),h=e("./desktop"),v=e("@aimpact/ailearn-app/components/hooks")}}),f.set("./views/mobile",{hash:2362117843,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MobileView=function(){var e=(0,r.useConversationContext)()["store"];return a.default.createElement("div",{className:"page-activity-container"},a.default.createElement(n.ActivityHeader,{title:e.model.title,icon:e.model.type,type:e.model.type}),a.default.createElement(n.PageContainer,{className:"content-activity--container"},a.default.createElement(n.EntityImage,{className:"entity-image-cover",type:e.model.type,src:e.model.picture,entity:"activity"}),a.default.createElement(i.ChatControl,null)))};var a=e("react"),r=e("./context"),n=e("@aimpact/ailearn-app/components/ui"),i=e("./chat")}}),g.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/characters-card",from:"CharacterCard",name:"CharacterCard"},{im:"./views/desktop",from:"DesktopView",name:"DesktopView"},{im:"./views/index",from:"View",name:"View"},{im:"./views/mobile",from:"MobileView",name:"MobileView"}],g.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:a),!e&&"CharacterCard"!==t||r("CharacterCard",e?e("./views/characters-card").CharacterCard:a),!e&&"DesktopView"!==t||r("DesktopView",e?e("./views/desktop").DesktopView:a),!e&&"View"!==t||r("View",e?e("./views/index").View:a),!e&&"MobileView"!==t||r("MobileView",e?e("./views/mobile").MobileView:a)},r("__beyond_pkg",g),r("hmr",new function(){this.on=(e,t)=>g.hmr.on(e,t),this.off=(e,t)=>g.hmr.off(e,t)}),g.initialise(f)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXJhY3RlcnMtY2FyZC50c3giLCIvdHMvdmlld3MvY2hhdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9iaWxlLnRzeCJdLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIiNzdG9yZSIsImNyZWF0ZVN0b3JlIiwidGhpcyIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJleHBvcnRzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX21haW5MYXlvdXQiLCJfdHJhY2tpbmciLCJSZWFjdGl2ZU1vZGVsIiwiI21vZGVsIiwiI2Fzc2lnbm1lbnRJZCIsIiNhY3Rpdml0eUlkIiwiI3RyYWNraW5nIiwidHJhY2tpbmciLCJtb2RlbCIsIiNpdGVtcyIsIml0ZW1zIiwiI3BhcmFtc1VyaSIsInBhcmFtc1VyaSIsIiN0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRleHRzIiwidmFsdWUiLCIjY2hhdElkIiwiY2hhdElkIiwicmVhZHkiLCJzdXBlciIsIiNmb3VuZCIsImZvdW5kIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiQUlBdmFpbGFibGUiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImFkZE1vZGVsIiwiVHJhY2tpbmciLCJhd2FpdCIsImFjdGl2aXRpZXMiLCJpZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfY29udGV4dCIsInVzZUNvbnZlcnNhdGlvbkNvbnRleHQiLCJvbkFjdGlvbkNsaWNrIiwiZXZlbnQiLCJsb2ciLCJfcmVhY3QiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNlbGVjdFRpdGxlIiwiX2NvbXBvbmVudHMiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwiYnV0dG9uVGV4dCIsInN0b3JlIiwic2V0SGFzQ3JlZGl0cyIsInVzZVN0YXRlIiwiX2hvb2tzIiwidXNlQmluZGVyIiwiYXNzaWdubWVudC1pZCIsIl91aSIsIkNoYXRQcmVsb2FkIiwidGV4dCIsIm5vQ3JlZGl0cyIsImVuc3VyZUNyZWRpdHMiLCJDb252ZXJzYXRpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJBY3Rpdml0eUhlYWRlciIsImljb24iLCJ0eXBlIiwidGl0bGUiLCJQYWdlQ29udGFpbmVyIiwiX2NoYXQiLCJDaGF0Q29udHJvbCIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsImRlc2NyaXB0aW9uIiwic2V0UmVhZHkiLCJzaXplIiwiX2hvb2tzMiIsInVzZU1lZGlhUXVlcnkiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJDb250cm9sIiwiX2Rlc2t0b3AiLCJEZXNrdG9wVmlldyIsIl9tb2JpbGUiLCJNb2JpbGVWaWV3IiwiUHJvdmlkZXIiXSwibWFwcGluZ3MiOiJtbkVBQUEsSUFBQUEsRUFBQUMsRUFBQSxrQ0FBQSxFQUNBQyxFQUFBRCxFQUFBLFNBQUEsRUFDQUUsRUFBQUYsRUFBQSxTQUFBLFFBR01HLFVBQW1CSixFQUFBSywwQkFDeEJDLE9BQ0FDLGNBRUMsT0FEQUMsS0FBS0YsT0FBUyxJQUFJSixFQUFBTyxhQUNYRCxLQUFLRixNQUNiLENBQ0FJLGFBQ0MsT0FBT1AsRUFBQVEsSUFDUixDQUtBQyxPQUVDSixLQUFL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