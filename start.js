System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/transversals","@beyond-js/widgets@1.1.0/render","@aimpact/ailearn-app@0.0.46/model/wrapper","@aimpact/ailearn-app@0.0.46/config","@aimpact/chat-sdk@1.0.0/session","@beyond-js/kernel@0.1.9/routing","@aimpact/chat@1.0.1/extensions","react@18.2.0","pragmate-ui@0.1.1/icons","pragmate-ui@0.1.1/image","@beyond-js/reactive@1.1.12/model","@aimpact/ailearn-app@0.0.46/model/gclassroom","@aimpact/ailearn-sdk@1.0.0/core","@aimpact/chat-sdk@1.0.0/startup"],function(a,e){"use strict";var t,i,s,n,r,o,p,c,l,u,m,d,g,h,y,f;return{setters:[function(a){0},function(a){t=a},function(a){i=a},function(a){s=a},function(a){n=a},function(a){r=a},function(a){o=a},function(a){p=a},function(a){c=a},function(a){l=a},function(a){u=a},function(a){m=a},function(a){d=a},function(a){g=a},function(a){h=a}],execute:function(){y=brequire("@beyond-js/kernel/transversals").Transversal,a("__beyond_transversal",y=new y("start","")),y.dependencies.update([["@beyond-js/kernel/transversals",t],["@beyond-js/widgets/render",i],["@aimpact/ailearn-app/model/wrapper",s],["@aimpact/ailearn-app/config",n],["@aimpact/chat-sdk/session",r],["@beyond-js/kernel/routing",o],["@aimpact/chat/extensions",p],["react",c],["pragmate-ui/icons",l],["pragmate-ui/image",u],["@beyond-js/reactive/model",m],["@aimpact/ailearn-app/model/gclassroom",d],["@aimpact/ailearn-sdk/core",g],["@aimpact/chat-sdk/startup",h]]),f=brequire("@beyond-js/widgets/render").widgets,f.register([{name:"aimpact-chat-control",attrs:["id","container","disabled","playable"],vspecifier:"@aimpact/chat@1.0.1/chat-control.widget"},{name:"chat-wd-page",vspecifier:"@aimpact/chat@1.0.1/chat-page.widget",is:"page",route:"/chat/${id}",layout:"chat-layout"},{name:"chat-explorer-view",vspecifier:"@aimpact/chat@1.0.1/conversations/explorer.widget"},{name:"chat-documents-access",vspecifier:"@aimpact/chat@1.0.1/documents/access.widget",is:"page",route:"/documents/access",layout:"auth-layout"},{name:"app-documents-page",vspecifier:"@aimpact/chat@1.0.1/documents.widget",is:"page",route:"/documents",layout:"chat-layout"},{name:"aimpact-chat-user-profile",vspecifier:"@aimpact/chat@1.0.1/user/profile.widget"},{name:"chat-home-page",vspecifier:"@aimpact/chat@1.0.1/home.widget",is:"page",route:"/_this_route_does_not_exists",layout:"chat-layout"},{name:"auth-layout",vspecifier:"@aimpact/chat@1.0.1/auth-layout",is:"layout"},{name:"chat-layout",vspecifier:"@aimpact/chat@1.0.1/chat-layout",is:"layout"},{name:"default-layout",vspecifier:"@aimpact/chat@1.0.1/default-layout",is:"layout"},{name:"general-layout",vspecifier:"@aimpact/chat@1.0.1/general-layout",is:"layout"},{name:"auth-layout",vspecifier:"@aimpact/auth@0.0.1/auth-layout",is:"layout"},{name:"auth-login-page",vspecifier:"@aimpact/auth@0.0.1/auth-login.widget",is:"page",route:"/auth/login",layout:"auth-layout"},{name:"aimpact-login-presentation",attrs:["dynamic-children"],vspecifier:"@aimpact/auth@0.0.1/auth/login/presentation.widget"},{name:"auth-recover-password-page",vspecifier:"@aimpact/auth@0.0.1/auth-recover-password.widget",is:"page",route:"/auth/recover-password",layout:"auth-layout"},{name:"auth-recovery-page",vspecifier:"@aimpact/auth@0.0.1/auth-recovery.widget",is:"page",route:"/auth/recovery",layout:"auth-layout"},{name:"auth-register-page",vspecifier:"@aimpact/auth@0.0.1/auth-register.widget",is:"page",route:"/auth/register",layout:"auth-layout"},{name:"chat-sdk-markdown-page",vspecifier:"@aimpact/chat-sdk@1.0.0//chat-sdk/markdown",is:"page",route:"/chat/sdk/markdown",layout:"general-layout"},{name:"chat-sdk-playable",vspecifier:"@aimpact/chat-sdk@1.0.0/chat-sdk/playable",is:"page",route:"/chat/sdk/playable"},{name:"coming-soon",vspecifier:"pragmate-ui@0.1.1/coming-soon",is:"page",route:"/components/coming-soon"},{name:"pui-template-view-widget",vspecifier:"pragmate-ui@0.1.1/pui/template/palette"},{name:"ailearn-session-dashboard",vspecifier:"@aimpact/ailearn-app@0.0.46/assignments/dashboard.widget",is:"page",route:"/assignments/${id}/dashboard/classroom",layout:"dashboard-layout"},{name:"old-assignment-dashboard-participant",attrs:["id","participant-id"],vspecifier:"@aimpact/ailearn-app@0.0.46/assignment-dashboard-participant.widget",is:"page",route:"/assignments/${assignmentId}/dashboard/participant/${participantId}",layout:"dashboard-layout"},{name:"old-assignment-dashboard-participant-page",vspecifier:"@aimpact/ailearn-app@0.0.46/assignments/dashboard/participant",is:"page",route:"/old-assignments/${assignmentId}/dashboard/participant/${participantId}",layout:"dashboard-layout"},{name:"dashboard-wall",vspecifier:"@aimpact/ailearn-app@0.0.46/dashboard-wall.widget",is:"page",route:"/assignments/${id}/wall",layout:"dashboard-layout"},{name:"ailearn-sessions-access",vspecifier:"@aimpact/ailearn-app@0.0.46/sessions/access.widget",is:"page",route:"/sessions/access/${id}",layout:"chat-layout"},{name:"ailearn-assignments-all-in-one",vspecifier:"@aimpact/ailearn-app@0.0.46/assignments/all-in-one.widget",is:"page",route:"/assignments/${assignmentId}/all-in-one/${id}",layout:"chat-layout"},{name:"ailearn-assignments-assessment",vspecifier:"@aimpact/ailearn-app@0.0.46/assignments/assessment.widget",is:"page",route:"/assignments/${assignmentId}/assessment/${id}",layout:"main-layout"},{name:"ailearn-character-talk",vspecifier:"@aimpact/ailearn-app@0.0.46/assignments/character-talk.widget",is:"page",route:"/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",layout:"main-layout"},{name:"ailearn-content-theory-page",vspecifier:"@aimpact/ailearn-app@0.0.46/assignments/content-theory.widget",is:"page",route:"/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",layout:"main-layout"},{name:"ailearn-debate-activity-page",vspecifier:"@aimpact/ailearn-app@0.0.46/assignments/debate.widget",is:"page",route:"/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",layout:"main-layout"},{name:"ailearn-assignments-spoken",vspecifier:"@aimpact/ailearn-app@0.0.46/assignments/spoken.widget",is:"page",route:"/assignments/${assignmentId}/spoken/${id}",layout:"main-layout"},{name:"ailearn-assignments-coach-list",vspecifier:"@aimpact/ailearn-app@0.0.46/assignments/coach/list.widget",is:"page",route:"/assignments/${id}/coach/list",layout:"main-layout"},{name:"ailearn-assignments-student-list",vspecifier:"@aimpact/ailearn-app@0.0.46/assignments/student/list.widget",is:"page",route:"/assignments/${id}/student/list",layout:"main-layout"},{name:"ailearn-gclassroom-permissions",vspecifier:"@aimpact/ailearn-app@0.0.46/gclassroom-permissions.widget"},{name:"ailearn-assignment-view",vspecifier:"@aimpact/ailearn-app@0.0.46/assignment/view.widget",is:"page",route:"/assignments/${id}",layout:"main-layout"},{name:"ailearn-gclassrooms-access",vspecifier:"@aimpact/ailearn-app@0.0.46/gclassroom/access.widget",is:"page",route:"/gclassroom/access",layout:"chat-layout"},{name:"app-classrooms-create",vspecifier:"@aimpact/ailearn-app@0.0.46/classrooms/create.widget",is:"page",route:"/classrooms/create",layout:"main-layout"},{name:"ailearn-gclassroom-explorer",vspecifier:"@aimpact/ailearn-app@0.0.46/gclassroom-explorer.widget"},{name:"ailearn-classroom-join",vspecifier:"@aimpact/ailearn-app@0.0.46/classrooms/join.widget",is:"page",route:"/classrooms/join",layout:"main-layout"},{name:"ailearn-classroom-list",vspecifier:"@aimpact/ailearn-app@0.0.46/classrooms/list.widget",is:"page",route:"/classrooms/list",layout:"main-layout"},{name:"app-classrooms-view",vspecifier:"@aimpact/ailearn-app@0.0.46/classrooms/view.widget",is:"page",route:"/classrooms/view/${id}",layout:"main-layout"},{name:"ailearn-modules-list",vspecifier:"@aimpact/ailearn-app@0.0.46/modules/list.widget",is:"page",route:"/modules/list",layout:"main-layout"},{name:"app-modules-management",attrs:["id","activityId"],vspecifier:"@aimpact/ailearn-app@0.0.46/modules/management/settings.widget"},{name:"app-module-objective-management",vspecifier:"@aimpact/ailearn-app@0.0.46/modules/draft.widget",is:"page",route:"/modules/management",layout:"main-layout"},{name:"app-organizations-create",vspecifier:"@aimpact/ailearn-app@0.0.46/organizations/create.widget",is:"page",route:"/organizations/create",layout:"main-layout"},{name:"ailearn-organization-join",vspecifier:"@aimpact/ailearn-app@0.0.46/organizations/join.widget",is:"page",route:"/organizations/join",layout:"main-layout"},{name:"ailearn-organizations-list",vspecifier:"@aimpact/ailearn-app@0.0.46/organizations/list.widget",is:"page",route:"/organizations/list",layout:"main-layout"},{name:"app-organizations-view",vspecifier:"@aimpact/ailearn-app@0.0.46/organizations/view.widget",is:"page",route:"/organizations/view/${id}",layout:"main-layout"},{name:"ailearn-user-profile",vspecifier:"@aimpact/ailearn-app@0.0.46/user/profile.widget",is:"page",route:"/users/me",layout:"main-layout"},{name:"dashboard-layout",vspecifier:"@aimpact/ailearn-app@0.0.46/dashboard-layout.widget",is:"layout"},{name:"ailearn-empty-layout",vspecifier:"@aimpact/ailearn-app@0.0.46/layout/empty",is:"layout"},{name:"main-layout",vspecifier:"@aimpact/ailearn-app@0.0.46/main-layout.widget",is:"layout"},{name:"app-not-allowed",vspecifier:"@aimpact/ailearn-app@0.0.46/not-allowed-control.widget"},{name:"app-not-allowed-page",vspecifier:"@aimpact/ailearn-app@0.0.46/not-allowed-page.widget"},{name:"app-missing-element",vspecifier:"@aimpact/ailearn-app@0.0.46/missing.widget"},{name:"app-missing-page",vspecifier:"@aimpact/ailearn-app@0.0.46/missing.widget",is:"page",route:"/not-found",layout:"main-layout"},{name:"app-policies-page",vspecifier:"@aimpact/ailearn-app@0.0.46/pages/age.widget",is:"page",route:"/user-validation"},{name:"student-home",vspecifier:"@aimpact/ailearn-app@0.0.46/home.widget",is:"page",route:"/",layout:"main-layout"},{name:"ailearn-identify-page",vspecifier:"@aimpact/ailearn-app@0.0.46/identify.widget",is:"page",route:"/next-steps"},{name:"privacy-page",vspecifier:"@aimpact/ailearn-app@0.0.46/pages/privacy",is:"page",route:"/privacy"},{name:"ailearn-terms-and-conditions-page",vspecifier:"@aimpact/ailearn-app@0.0.46/pages/terms",is:"page",route:"/terms-and-conditions"},{name:"app-updating-page",vspecifier:"@aimpact/ailearn-app@0.0.46/pages/updating.widget",is:"page",route:"/updating"},{name:"app-template-bottom-bar",vspecifier:"@aimpact/ailearn-app@0.0.46/template/bottom-bar",is:"page",route:"/template/bottom-bar"},{name:"ailearn-template-typography",vspecifier:"@aimpact/ailearn-app@0.0.46/template/typography",is:"page",route:"/template/typography",layout:"ailearn-layout"},{name:"ailearn-ui-components",vspecifier:"@aimpact/ailearn-app@0.0.46/ui/components",is:"page",route:"/ui/components",layout:"chat-layout"},{name:"app-test-components",vspecifier:"@aimpact/ailearn-app@0.0.46/test/blank",is:"page",route:"/tests/blank"},{name:"app-test-web-component",vspecifier:"@aimpact/ailearn-app@0.0.46/test/web-component"}]),(f=[]).push([{module:{vspecifier:"@aimpact/ailearn-app@0.0.46/core/routing"},type:"start"},function(a,e){return a.set("./handlers/beta",{hash:1922975868,creator:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.betaVersion=async function(a,e,t){return i.default.beta||"https://beta.app.rvd.ai"!==globalThis.location.origin?t():{pathname:"/beta"}};var i=a("@aimpact/ailearn-app/config")}}),a.set("./handlers/home",{hash:3464692361,creator:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.checkHome=async function({},a,e){return e()}}}),a.set("./handlers/policies",{hash:751582618,creator:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.checkPolicies=async function({pathname:a},e,t){await n.sessionWrapper.isReady,await n.sessionWrapper.user.isReady;var{termsAccepted:i,age:s}=n.sessionWrapper.user;if(r.PUBLIC_ROUTES.includes(a))return a;if(!i&&17<s||!s)return{pathname:"/user-validation"};if("/user-validation"===a&&i&&17<s)return{pathname:"/"};if(e.previous){const a=e.previous;return e.previous=void 0,{pathname:a}}return t()};var n=a("@aimpact/chat-sdk/session"),r=a("../public-routes")}}),a.set("./handlers/roles",{hash:3416299116,creator:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.checkRoles=async function(a,e,t){var a=a["pathname"],i=(await s.sessionWrapper.isReady,/^\/assignments\/.+$/.test(a));if(i)return t();return s.sessionWrapper.user.roles.length||["/users/me","/organizations/create","/organizations/join"].includes(a)?t():{pathname:"/next-steps"}};var s=a("@aimpact/chat-sdk/session"),t=a("@beyond-js/kernel/routing");s.sessionWrapper.on("logout",()=>{t.routing.replaceState({},"","/")})}}),a.set("./handlers/session",{hash:497316627,creator:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.checkSession=async function(a,e,t){var i=a["pathname"];if(await s.sessionWrapper.isReady,!s.sessionWrapper.logged&&n.PUBLIC_ROUTES.includes(i))return{pathname:i};if(s.sessionWrapper.user.outdated)return{pathname:"/updating"};if(s.sessionWrapper.logged&&n.AUTH_ROUTES.includes(i))return{pathname:"/"};if(!n.AUTH_ROUTES.includes(i)&&n.PUBLIC_ROUTES.includes(i)||s.sessionWrapper.logged)return t();return e.previous=a.uri,{pathname:r}};var s=a("@aimpact/chat-sdk/session"),t=a("@beyond-js/kernel/routing"),n=a("../public-routes");const r="/auth/login";s.sessionWrapper.on("logout",()=>{t.routing.replaceState({},"","/")})}}),a.set("./public-routes",{hash:2866617319,creator:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.PUBLIC_ROUTES=e.AUTH_ROUTES=void 0;e.PUBLIC_ROUTES=["/auth/login","/auth/register","/auth/recovery","/auth/recover-password","/documents/access","/privacy","/terms-and-conditions","/reactive/testing"],e.AUTH_ROUTES=["/auth/login","/auth/register","/auth/recovery","/auth/recover-password"]}}),a.set("./router",{hash:4052659225,creator:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Router=void 0;e.Router=class{#isDefault;get isDefault(){return"/"===this.#pathname}#pathname;get pathname(){return this.#pathname}#data;get data(){return this.#data}#previous;get previous(){return this.#previous}set previous(a){a!==this.#previous&&(this.#previous=a)}#index;#handlers;constructor(a){if(!Array.isArray(a))throw new Error("handlers must be an array");a.forEach(a=>{if("function"!=typeof a)throw new Error("handlers must be an array of functions")}),this.#handlers=a}async process(a,e){return this.#handlers.length?await this.#handlers[a](e,this,async()=>a<this.#handlers.length-1?this.process(a+1,e):e.uri):e.uri}async validate(a){return this.#handlers.length?this.process(0,a):a.uri}}}}),a.set("./routing",{hash:524775312,creator:function(a,e){var t=a("@beyond-js/kernel/routing"),i=a("./router"),s=a("./handlers/session"),n=a("./handlers/policies"),r=a("./handlers/beta"),a=a("./handlers/roles"),r=[r.betaVersion,s.checkSession,n.checkPolicies,a.checkRoles];const o=new i.Router(r);t.routing.redirect=async function(a){try{return(await o.validate(a)).pathname}catch(a){return console.error(a),"/error-500"}},t.routing.missing=async function(){return"app-missing-page"}}}),{dependencies:["@aimpact/ailearn-app/model/wrapper","@aimpact/ailearn-app/config","@aimpact/chat-sdk/session","@beyond-js/kernel/routing"]}}]),f.push([{module:{vspecifier:"@aimpact/ailearn-app@0.0.46/initialize-app"},type:"start"},function(a,e){return a.set("./extensions",{hash:1592816002,creator:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.registerExtensions=function(){var a=t.extensions.register.bind(t.extensions);a("app-menu-icon",()=>({type:"img",src:"/assets/favicon.png"}))};var t=a("@aimpact/chat/extensions")}}),a.set("./icons/profile",{hash:2038903291,creator:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.ProfileIcon=void 0;var s=a("react"),n=a("pragmate-ui/icons"),r=a("@aimpact/chat-sdk/session"),o=a("pragmate-ui/image");e.ProfileIcon=({onClick:a})=>{const[e,t]=s.default.useState(!1);var i;if(r.sessionWrapper.user)return i=r.sessionWrapper.user.getProperties(),s.default.createElement("div",{className:"aside-item",onClick:a},e?s.default.createElement(n.Icon,{className:"lg",icon:"user"}):s.default.createElement(o.Image,{alt:"user image profile",src:i.photoURL,onError:()=>t(!0)}))}}}),a.set("./index",{hash:1018057204,creator:function(a,e){a=a("./startup");globalThis.localStorage?.setItem("chat.app.user.default.profile","/assets/rvd-profile-blue.png"),a.Startup.setup()}}),a.set("./startup",{hash:2859944454,creator:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Startup=void 0;var t=a("@beyond-js/reactive/model"),i=a("./extensions"),s=a("@beyond-js/widgets/render"),n=a("@aimpact/ailearn-app/model/gclassroom"),r=a("@aimpact/chat-sdk/session"),o=a("@aimpact/ailearn-sdk/core"),p=a("@aimpact/ailearn-app/config"),c=a("@aimpact/chat-sdk/startup");class l extends t.ReactiveModel{constructor(){super(),this.#start()}#initSDK=async()=>{var a=p.default["environment"];await c.sdkConfig.initialize({environment:a,userModel:o.User})};#start=async()=>{await this.#initSDK();var a=[n.gclassroom.isReady,r.sessionWrapper.isReady];await Promise.all(a),this.checkMode(),(0,i.registerExtensions)()};checkMode(){var a=localStorage.getItem("aimpact.accessibility.mode")?localStorage.getItem("aimpact.accessibility.mode"):"normal",e=document.querySelector("html");e&&(e.setAttribute("data-accessibility-mode",a),s.widgets.attributes.add("data-accessibility-mode",a))}static setup(){new l}}e.Startup=l}}),e.descriptor=[{im:"./icons/profile",from:"ProfileIcon",name:"ProfileIcon"}],{dependencies:["@aimpact/chat/extensions","react","pragmate-ui/icons","@aimpact/chat-sdk/session","pragmate-ui/image","@beyond-js/reactive/model","@beyond-js/widgets/render","@aimpact/ailearn-app/model/gclassroom","@aimpact/ailearn-sdk/core","@aimpact/ailearn-app/config","@aimpact/chat-sdk/startup"]}}]),y.initialise(f)}}});