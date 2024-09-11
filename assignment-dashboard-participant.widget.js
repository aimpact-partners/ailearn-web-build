System.register(["@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/styles","@beyond-js/react-18-widgets@1.1.2/page","@aimpact/ailearn-app@0.1.6-dev.29/dashboard-layout.widget","@aimpact/ailearn-sdk@1.0.0/tracking","@beyond-js/reactive@1.2.0/model","@aimpact/ailearn-sdk@1.0.0/core","@aimpact/chat-sdk@1.1.0/voice","@aimpact/chat-sdk@1.1.0/wrapper","react@18.2.0","@beyond-js/react-18-widgets@1.1.2/hooks","@aimpact/ailearn-app@0.1.6-dev.29/components/ui","@aimpact/ailearn-app@0.1.6-dev.29/components/hooks","@aimpact/chat-sdk@1.1.0/chat-component.code","@aimpact/chat-sdk@1.1.0/widgets/markdown","pragmate-ui@1.0.0-beta.6/empty","@aimpact/media-manager@0.0.1-beta.1/audio-player","pragmate-ui@1.0.0-beta.6/list","@aimpact/ailearn-app@0.1.6-dev.29/config","pragmate-ui@1.0.0-beta.6/alert","@aimpact/ailearn-app@0.1.6-dev.29/components/icons","pragmate-ui@1.0.0-beta.6/icons","pragmate-ui@1.0.0-beta.6/tabs","pragmate-ui@1.0.0-beta.6/dropdown"],function(s,e){"use strict";var t,a,n,r,i,l,o,c,u,d,m,p,f,h,v,g,y,E,w,b,_,x,M,k,C,j,I;return s({Controller:void 0,Widget:void 0,MultipleChoiceReport:void 0,AssessmentQuestions:void 0,Results:void 0}),{setters:[function(e){t=e},function(e){a=e},function(e){n=e},function(e){r=e},function(e){i=e},function(e){l=e},function(e){o=e},function(e){c=e},function(e){u=e},function(e){d=e},function(e){m=e},function(e){p=e},function(e){f=e},function(e){h=e},function(e){v=e},function(e){g=e},function(e){y=e},function(e){E=e},function(e){w=e},function(e){b=e},function(e){_=e},function(e){x=e},function(e){M=e},function(e){k=e},function(e){C=e}],execute:function(){I=a.Bundle,(j=new I({module:{vspecifier:"@aimpact/ailearn-app@0.1.6-dev.29/assignment-dashboard-participant",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",n],["@beyond-js/react-18-widgets/page",r],["@aimpact/ailearn-app/dashboard-layout.widget",i],["@aimpact/ailearn-sdk/tracking",l],["@beyond-js/reactive/model",o],["@aimpact/ailearn-sdk/core",c],["@aimpact/chat-sdk/voice",u],["@aimpact/chat-sdk/wrapper",d],["react",m],["@beyond-js/react-18-widgets/hooks",p],["@aimpact/ailearn-app/components/ui",f],["@aimpact/ailearn-app/components/hooks",h],["@aimpact/chat-sdk/chat-component.code",v],["@aimpact/chat-sdk/widgets/markdown",g],["pragmate-ui/empty",y],["@aimpact/media-manager/audio-player",E],["pragmate-ui/list",w],["@aimpact/ailearn-app/config",b],["pragmate-ui/alert",_],["@aimpact/ailearn-app/components/icons",x],["pragmate-ui/icons",M],["pragmate-ui/tabs",k],["pragmate-ui/dropdown",C]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"old-assignment-dashboard-participant",attrs:["id","participant-id"],vspecifier:"@aimpact/ailearn-app@0.1.6-dev.29/assignment-dashboard-participant.widget",is:"page",route:"/assignments/${assignmentId}/dashboard/participant/${participantId}",layout:"dashboard-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@aimpact/ailearn-app@0.1.6-dev.29/assignment-dashboard-participant.widget"),(I=new Map).set("./controller",{hash:4204674960,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var a=e("@beyond-js/react-18-widgets/page"),s=e("./store"),n=e("./views"),r=e("@aimpact/ailearn-app/dashboard-layout.widget");class i extends a.PageReactWidgetController{#store;createStore(){return this.#store=new s.StoreManager,this.#store}get Widget(){return n.Widget}show(){r.LayoutBroker.setBackLink(`/assignments/${this.uri.vars.get("assignmentId")}/dashboard/classroom`),this.#store.load(this.uri.vars.get("assignmentId"),this.uri.vars.get("participantId"))}hide(){r.LayoutBroker.removeOverlay(),this.#store.clear()}}t.Controller=i}}),I.set("./store",{hash:2022707116,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StoreManager=void 0;var s=e("@aimpact/ailearn-sdk/tracking"),a=e("@beyond-js/reactive/model"),n=e("@aimpact/chat-sdk/voice"),r=e("@aimpact/chat-sdk/wrapper"),i=e("@aimpact/ailearn-app/dashboard-layout.widget");class l extends a.ReactiveModel{#assessment;get assessment(){return this.#assessment}#assessmentId;get assessmentId(){return this.#assessmentId}#userId;get userId(){return this.#userId}#players={web:n.Voice,lab:n.VoiceLab};#assignmentId;get assignmentId(){return this.#assignmentId}#currentPlayer;#player="web";get player(){return this.#currentPlayer}#model;get model(){return this.#model}#accessed;get accessed(){return this.#accessed}#user;get user(){return this.#user}constructor(){super(),this.#currentPlayer=new this.#players[this.#player]({language:r.AppWrapper.language,rate:r.AppWrapper.audioSpeed}),r.AppWrapper.on("app.settings.change",this.ListenAppChanges)}ListenAppChanges=()=>{this.#currentPlayer.set({rate:r.AppWrapper.audioSpeed,languuage:r.AppWrapper.language})};async load(e,t){try{var a;this.#userId===t&&this.#assignmentId===e||(this.#model&&(this.#model=void 0),this.#assignmentId=e,this.#model=s.Tracking.get({assignmentId:e,userId:t,chat:!0}),a=await this.#model.load({id:e,userId:t}),this.#user=a.user,this.#userId=t,this.#accessed=this.#model.accessed,i.LayoutBroker.setOverlay(a.user.name),this.ready=!0,this.triggerEvent())}catch(e){console.error(e)}}async refresh(){try{this.fetching=!0,await this.#model.load({id:this.#assignmentId}),this.#accessed=this.#model.accessed,this.fetching=!1,this.triggerEvent("data.updated")}catch(e){console.error(e)}}clear(){this.#model=void 0,this.ready=!1,this.triggerEvent(),this.#assessmentId=void 0,this.#accessed=void 0,this.#userId=void 0,this.#assessmentId=void 0,this.#user=void 0,console.log("clean...")}}t.StoreManager=l}}),I.set("./views/activity/index",{hash:3303124398,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Activity=function({item:e}){var t=(0,i.useModuleContext)().texts.activities,a={conversation:n.UserChat,"content-theory":n.UserChat,"character-talk":n.UserChat,debate:n.UserChat,"multiple-choice":l.MaterialAssessment,assessment:l.MaterialAssessment,spoken:o.SpokenAnalysis}[e.type]??r.DefaultMaterial;return s.default.createElement("div",null,s.default.createElement("header",{className:"dashboard-activity__header"},s.default.createElement("h2",null,e.title),s.default.createElement("section",{className:"activity-information"},s.default.createElement("span",null,s.default.createElement("strong",null,t.type,":")," ",e.type),e.subtype&&s.default.createElement("span",null,s.default.createElement("strong",null,t.subtype,":")," ",e.subtype)),s.default.createElement("section",{className:"activity__description mb-30"},s.default.createElement("h3",null,t.description),s.default.createElement("p",{className:"p2"},e.description))),s.default.createElement(a,{item:e}))};var s=e("react"),n=e("../materials/chat"),r=e("../materials"),i=e("../contexts"),l=e("../materials/assessment"),o=e("../materials/spoken")}}),I.set("./views/contexts",{hash:1549540459,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.useModuleContext=t.ModuleContext=void 0;var a=e("react");const s=t.ModuleContext=a.default.createContext({});t.useModuleContext=()=>a.default.useContext(s)}}),I.set("./views/index",{hash:3267508299,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Widget=function({store:e,store:{assessment:t}}){const[a,s]=u.default.useState(e.ready),[n,r]=(0,d.useTexts)(c.module.specifier),[,i]=u.default.useState(e.model?.activities?.elements),l=(0,f.useMediaQuery)(),o={store:e,assessment:t,texts:r,size:l};return(0,d.useBinder)([e],()=>s(e.ready)),(0,d.useBinder)([e],()=>i(e.model?.activities?.elements),"data.updated"),a&&n?(t="md"===l||"lg"===l?h.DesktopView:v.MobileView,u.default.createElement(m.ModuleContext.Provider,{value:o},u.default.createElement(t,null))):u.default.createElement(p.PageLoader,{fetching:!0})};var c=e("beyond_context"),u=e("react"),d=e("@beyond-js/react-18-widgets/hooks"),m=e("./contexts"),p=e("@aimpact/ailearn-app/components/ui"),f=e("@aimpact/ailearn-app/components/hooks"),h=e("./views/desktop"),v=e("./views/mobile")}}),I.set("./views/interfaces/selection-props",{hash:1293687720,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),I.set("./views/materials/assessment",{hash:2954736454,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MaterialAssessment=function({item:e}){return{"multiple-choice":n.MultipleChoiceReport}.hasOwnProperty(e.subtype)?e.subtype:s.DefaultMaterial,a.default.createElement("div",null,a.default.createElement(n.MultipleChoiceReport,{item:e}))};var a=e("react"),s=e("./index"),n=e("./multiple")}}),I.set("./views/materials/chat",{hash:1688661405,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UserChat=function({item:e}){var t,a=(0,n.useModuleContext)().texts["chat"];return e.chatModel?.id?(t=e.chatModel.id,s.default.createElement(s.default.Fragment,null,e?.data?.messages?.synthesis&&s.default.createElement(s.default.Fragment,null,s.default.createElement("h4",null,a.synthesis),s.default.createElement("p",null,e.data.messages?.synthesis)),s.default.createElement("h4",null,a.title),s.default.createElement("div",{className:"messages__list"},s.default.createElement(r.AgentsChatContainer,{id:t,empty:l.EmptyChat,icon:"/assets/rvd/profile-blue.png"},s.default.createElement(r.AgentsChatPanel,null))))):s.default.createElement(i.EmptyMaterial,null)};var s=e("react"),n=e("../contexts"),r=e("@aimpact/chat-sdk/chat-component.code"),i=e("./empty"),l=e("./empty-chat")}}),I.set("./views/materials/competencies",{hash:705765139,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CompetenciesFeedback=function(){var e=(0,n.useModuleContext)().store;return a.default.createElement(s.Markdown,{content:e.assessment.competenciesFeedback})};var a=e("react"),s=e("@aimpact/chat-sdk/widgets/markdown"),n=e("../contexts")}}),I.set("./views/materials/empty-chat",{hash:2295812042,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyChat=function(){var{texts:{chat:{empty:e}},store:t}=(0,n.useModuleContext)();return t?.model?({title:t,description:e}=e,s.default.createElement("div",{className:"empty-chat"},s.default.createElement(a.Empty,{icon:"info",className:""},s.default.createElement("h3",null,t),s.default.createElement("span",null,e)))):null};var a=e("pragmate-ui/empty"),s=e("react"),n=e("../contexts")}}),I.set("./views/materials/empty",{hash:2917864446,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyMaterial=function({message:e}){var t=(0,n.useModuleContext)().texts;return e=e??t.activities.empty,a.default.createElement(s.EmptyCard,{icon:"info",text:e,className:"empty-section__container"})};var a=e("react"),s=e("@aimpact/ailearn-app/components/ui"),n=e("../contexts")}}),I.set("./views/materials/index",{hash:3713624883,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultMaterial=function({item:e}){return a.default.createElement("div",null,e.description)};var a=e("react")}}),I.set("./views/materials/multiple/counters",{hash:2297740904,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Counters=function({item:e}){var t,a=(0,n.useModuleContext)().texts;return e.data?({total:e,correct:t}=e.data.counters,s.default.createElement("section",{className:"assessment-counters flex-container my-15 flex-end primary-text"},s.default.createElement("div",null,a.total,": ",e," / ",a.correct,": ",t))):null};var s=e("react"),n=e("../../contexts")}}),I.set("./views/materials/multiple/index",{hash:2358138782,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MultipleChoiceReport=void 0;var n=e("react"),r=e("../../contexts"),i=e("./questions"),l=e("./counters"),o=e("../empty"),c=e("@beyond-js/react-18-widgets/hooks");t.MultipleChoiceReport=({item:e})=>{var{store:t,texts:a}=(0,r.useModuleContext)();const[,s]=n.default.useState({});return(0,c.useBinder)([t],()=>{s({...e.counters})}),e.data?n.default.createElement(n.default.Fragment,null,n.default.createElement(l.Counters,{item:e}),n.default.createElement(i.AssessmentQuestions,{item:e,showAnswers:!0})):n.default.createElement(o.EmptyMaterial,{message:a.activities.empty})}}}),I.set("./views/materials/multiple/option",{hash:3009204594,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ItemOption=function({option:e,i:t,data:a,showAnswers:s,question:n}){let r=`option-item${a.answer===t?" option--selected":""} `;return a.answer===t&&(r+="option"+(a.accuracy?" option--correct":" option--wrong")),s&&t===n.correctAnswer&&(r+=" option--correct"),i.default.createElement("div",{key:e,className:r},i.default.createElement("span",null,e))};var i=e("react")}}),I.set("./views/materials/multiple/questions",{hash:3468111054,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AssessmentQuestions=void 0;var i=e("react"),l=e("./option");t.AssessmentQuestions=({item:e,showAnswers:r})=>{const t=e.data.responses??[];return e=e.assessment.questions.map((a,s)=>{const n=(t&&t[s])??{};var e=a.options.map((e,t)=>(e={i:t,data:n,question:a,option:e,showAnswers:r},i.default.createElement(l.ItemOption,{key:`question.${t}.option.`+s,...e})));return i.default.createElement("div",{key:a.question,className:"question__container question__container--results"},i.default.createElement("h5",null,a.question),e)}),i.default.createElement(i.default.Fragment,null,e)}}}),I.set("./views/materials/spoken/index",{hash:3941760103,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SpokenAnalysis=function({item:t}){var e,{texts:a,store:s}=(0,r.useModuleContext)();return t.data?(e=Object.keys(t.data).map(e=>t.data[e]),s=`${c.default.params.apis.ailearn}/assignments/${s.model.assignmentId}/activities/${t.id}/tracking/${s.userId}/audio`,n.default.createElement("div",{className:"assessment-analysis__container"},n.default.createElement("h4",null,a.assessments.title),n.default.createElement("p",{className:"p2"},a.assessments.oralText),n.default.createElement("div",{className:"flex-container flex-space-between flex-vertical-center"},n.default.createElement("h4",null,a.studentAudio),n.default.createElement("div",{className:"audio-player"},n.default.createElement("audio",{controls:!0,preload:"metadata"},n.default.createElement("source",{src:s}),"Your browser does not support the audio element."))),n.default.createElement(i.List,{container:"div",items:e,control:o.SpokenItem}))):n.default.createElement(l.EmptyMaterial,{message:a.activities.empty})};var n=e("react"),r=e("../../contexts"),i=e("pragmate-ui/list"),l=e("../empty"),o=e("./item"),c=e("@aimpact/ailearn-app/config")}}),I.set("./views/materials/spoken/item",{hash:419659886,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SpokenItem=void 0;var a=e("react");t.SpokenItem=({data:e})=>a.default.createElement("article",{className:"assessment__analysis-item"},a.default.createElement("section",{className:"item__icon__container"},a.default.createElement("span",null,e.icon)),a.default.createElement("section",null,a.default.createElement("header",null,a.default.createElement("h5",null,e.name)),a.default.createElement("p",{className:"p2"},e.feedback)))}}),I.set("./views/pane",{hash:1265456538,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Pane=function({id:e,className:t}){var a=(a=(0,r.useModuleContext)().store).model.activities.elements.get(e),e="pane__container"+(t?" "+t:"");return s.default.createElement("article",{className:e},s.default.createElement(n.Activity,{item:a}))};var s=e("react"),n=e("./activity"),r=e("./contexts")}}),I.set("./views/results/index",{hash:3428475853,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Results=void 0;var r=e("react"),i=e("pragmate-ui/alert");t.Results=({store:e,texts:t,assessments:a})=>{const{evaluation:n,evaluation:{counters:s}}=e.selection;return e=a.questions.map((e,t)=>{const s=n.answers[t];return t=e.options.map((e,t)=>{let a=`option-item${s.answer===t?" option--selected":""} `;return s.answer===t&&(a+="option"+(s.accuracy?" option--correct":" option--wrong")),r.default.createElement("div",{key:e,className:a},r.default.createElement("span",null,e))}),r.default.createElement("div",{key:e.text,className:"question__container question__container--results"},r.default.createElement("h3",null,e.text),t)}),r.default.createElement("div",{className:"assessment__container"},r.default.createElement("h3",null,t.results),r.default.createElement(i.Alert,{type:"info"},r.default.createElement("div",{className:"flex-container flex-100 flex-space-between"},r.default.createElement("strong",null,t.correct,":"),r.default.createElement("section",null,r.default.createElement("span",null,s.correct),"/",r.default.createElement("span",null,s.total))),r.default.createElement("div",{className:"flex-container flex-space-between flex-100"},r.default.createElement("strong",null,t.wrong,":"),r.default.createElement("section",null,r.default.createElement("span",null,s.wrong),"/",r.default.createElement("span",null,s.total)))),e)}}}),I.set("./views/tab",{hash:3987010072,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.TabApp=function({id:e,index:t}){var a=(0,l.useModuleContext)().store,e="activity-type__image image--"+(a=a.model.activities.elements.get(e)).type;return s.default.createElement(i.Tab,{index:t},s.default.createElement("div",null,s.default.createElement("section",{className:e},s.default.createElement(r.Icon,{icon:n.ICONS[a.type]}))),s.default.createElement("span",null,a.title))};var s=e("react"),n=e("@aimpact/ailearn-app/components/icons"),r=e("pragmate-ui/icons"),i=e("pragmate-ui/tabs"),l=e("./contexts")}}),I.set("./views/views/desktop",{hash:2525857580,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DesktopView=function(){const e=(0,c.useModuleContext)().store,a=[],s=[];return e.model.order.forEach((e,t)=>{a.push(n.default.createElement(l.TabApp,{key:""+e,id:e,index:t})),s.push(n.default.createElement(o.Pane,{key:e+".pane",id:e}))}),n.default.createElement(r.PageContainer,null,n.default.createElement(i.TabsContainer,{className:"dashboard-tabs"},n.default.createElement(i.Tabs,{className:"tab"},a),n.default.createElement(i.Panes,{className:"panes"},s)))};var n=e("react"),r=e("@aimpact/ailearn-app/components/ui"),i=e("pragmate-ui/tabs"),l=e("../tab"),o=e("../pane"),c=e("../contexts")}}),I.set("./views/views/mobile",{hash:3127012801,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MobileView=function(){function t({id:t,as:e=u.DropdownItem}){var a=n.model.activities.elements.get(t),s="icon-select  icon--"+a.type;return i.default.createElement(e,{className:"select-dropdown",onClick:e=>{e.preventDefault(),r(t)}},i.default.createElement("div",{className:"dropdown-toggle__content"},i.default.createElement("section",{className:s},i.default.createElement(l.AppIcon,{className:"icon-select",icon:a.type})),i.default.createElement("span",null,a.title)))}const n=(0,c.useModuleContext)().store,[a,r]=i.default.useState(n.model.order[0]),e=n.model.order.filter(e=>e!==a).map(e=>i.default.createElement(t,{id:e,key:e}));return i.default.createElement(s.PageContainer,null,i.default.createElement(u.Dropdown,{className:"dropdown-menu"},i.default.createElement(u.DropdownToggle,null,i.default.createElement(d.ToggleOption,{as:"div",key:0,id:a})),i.default.createElement(u.DropdownMenu,null,e)),i.default.createElement(o.Pane,{id:a}))};var i=e("react"),s=e("@aimpact/ailearn-app/components/ui"),l=e("@aimpact/ailearn-app/components/icons"),o=e("../pane"),c=e("../contexts"),u=e("pragmate-ui/dropdown"),d=e("./toggle")}}),I.set("./views/views/toggle",{hash:1908666995,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ToggleOption=function({id:e,as:t=i.DropdownItem}){var a=(0,r.useModuleContext)().store,e="icon-select  icon--"+(a=a.model.activities.elements.get(e)).type;return s.default.createElement(t,{className:"select-dropdown"},s.default.createElement("div",{className:"dropdown-toggle__content"},s.default.createElement("section",{className:e},s.default.createElement(n.AppIcon,{className:"icon-select",icon:a.type})),s.default.createElement("span",null,a.title)),s.default.createElement(n.AppIcon,{icon:"arrowDropDown"}))};var s=e("react"),n=e("@aimpact/ailearn-app/components/icons"),r=e("../contexts"),i=e("pragmate-ui/dropdown")}}),j.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"Widget",name:"Widget"},{im:"./views/materials/multiple/index",from:"MultipleChoiceReport",name:"MultipleChoiceReport"},{im:"./views/materials/multiple/questions",from:"AssessmentQuestions",name:"AssessmentQuestions"},{im:"./views/results/index",from:"Results",name:"Results"}],j.exports.process=function({require:e,prop:t,value:a}){!e&&"Controller"!==t||s("Controller",e?e("./controller").Controller:a),!e&&"Widget"!==t||s("Widget",e?e("./views/index").Widget:a),!e&&"MultipleChoiceReport"!==t||s("MultipleChoiceReport",e?e("./views/materials/multiple/index").MultipleChoiceReport:a),!e&&"AssessmentQuestions"!==t||s("AssessmentQuestions",e?e("./views/materials/multiple/questions").AssessmentQuestions:a),!e&&"Results"!==t||s("Results",e?e("./views/results/index").Results:a)},s("__beyond_pkg",j),s("hmr",new function(){this.on=(e,t)=>j.hmr.on(e,t),this.off=(e,t)=>j.hmr.off(e,t)}),j.initialise(I)}}});