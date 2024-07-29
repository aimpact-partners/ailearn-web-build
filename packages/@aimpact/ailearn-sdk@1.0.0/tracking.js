System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.2.0/model","@beyond-js/reactive@1.2.0/entities","@aimpact/chat-sdk@1.0.1/core","@aimpact/http-suite@0.0.1/api","@aimpact/ailearn-sdk@1.0.0/config","@aimpact/chat-sdk@1.0.1/session","@aimpact/media-manager@0.0.1-beta.1/uploader"],function(a,t){var e,s,i,r,n,c,o,d,h,p;return a({Activity:void 0,Tracking:void 0}),{setters:[function(t){e=t},function(t){s=t},function(t){i=t},function(t){r=t},function(t){n=t},function(t){c=t},function(t){o=t},function(t){d=t}],execute:function(){p=e.Bundle,(h=new p({module:{vspecifier:"@aimpact/ailearn-sdk@1.0.0/tracking"},type:"ts"},t.meta.url).package()).dependencies.update([["@beyond-js/reactive/model",s],["@beyond-js/reactive/entities",i],["@aimpact/chat-sdk/core",r],["@aimpact/http-suite/api",n],["@aimpact/ailearn-sdk/config",c],["@aimpact/chat-sdk/session",o],["@aimpact/media-manager/uploader",d]]),(p=new Map).set("./activity/collection",{hash:1150210147,creator:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Activities=void 0;var s=t("@beyond-js/reactive/model"),i=t("./");class a extends s.ReactiveModel{#elements=new Map;get elements(){return this.#elements}get items(){return[...this.#elements.values()]}#tracking;get tracking(){return this.#tracking}#loadChat;get loadChat(){return this.#loadChat}constructor(t,e){super(),this.#tracking=t,this.#loadChat=e}async setData(a){let s=[];return a.order.forEach(t=>{var e;this.#elements.has(t)||(e=new i.Activity({id:t,tracking:this.tracking,loadChat:this.loadChat,data:a.items[t]}),this.#elements.set(t,e),s.push(e.isReady))}),await Promise.all(s),a.order.forEach((t,e)=>{var s=this.#elements.get(t);s.set(a.items[t]),this.#elements.set(t,s)}),Promise.all([])}async load({id:t}){return this.elements.has(t)?this.#elements.get(t):(await(t=new i.Activity({id:t,assignmentId:this.tracking.assignmentId,tracking:this.tracking})).isReady,await t.load(),t)}}e.Activities=a}}),p.set("./activity/index",{hash:3840414374,creator:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Activity=void 0;var r=t("./provider"),s=t("@beyond-js/reactive/entities"),a=t("@aimpact/chat-sdk/core");class i extends s.Item{properties=["id","type","subtype","title","description","language","status","picture","materials","resources","chat","credits","assignmentId","data","user"];#tracking;get tracking(){return this.#tracking}#assignmentId;get assignmentId(){return this.#assignmentId}#feedback;get feedback(){return this.#feedback}#competenciesFeedback;get competenciesFeedback(){return this.#competenciesFeedback}#analysis;get analysis(){return this.#analysis}#assessment;get assessment(){return this.#assessment}#chatModel;get chatModel(){return this.#chatModel}#loadChat;constructor({id:t,assignmentId:e,data:s,tracking:a,loadChat:i}={}){super({id:t,localdb:!1,provider:r.ActivityProvider}),this.#loadChat=i,this.startup(e,s),this.#tracking=a}async startup(t,e){this.#assignmentId=t,this.#loadChat&&e.chat&&this.loadChat(e.chat)}async loadChat(t){var e=new a.Chat({id:t.id});await(this.#chatModel=e).loadAll({id:t.id}),this.triggerEvent("chat.loaded")}async load(t={}){await this.isReady,t.id||(t.id=this.id),t.assignmentId=this.#assignmentId;var{status:t,error:e,data:s}=await super.load(t);if(await this.set(s.activity),await this.#tracking.set({credits:s.credits}),await this.set({credits:s.credits}),t)return this.#process(),s;throw new Error("Error loading assignment: "+e)}#process(){this.materials?.assessment&&(this.#assessment=JSON.parse(this.materials.assessment))}async publish({params:t,type:e}){try{var s=await this.provider.publish({params:t,type:e});this.#tracking=s.data.tracking,this.#assessment.selection="results",this.data=s.data.tracking}catch(t){console.error(t)}}async publishSpoken({params:t,type:e}){try{t.assignmentId=t.assignmentId??this.#assignmentId,t.activityId=t.activityId??this.id;var s=await this.provider.publish({data:t,type:e});this.set({data:s}),this.#analysis=s.analysis,this.#feedback=s.feedback,this.#competenciesFeedback=s.competenciesFeedback}catch(t){console.error(t)}}async set(t){await super.set(t),this.#process(),this.trigger("change")}consumeCoins(){return this.#tracking.consumeCoins()}}e.Activity=i}}),p.set("./activity/provider",{hash:3387378513,creator:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.ActivityProvider=void 0;var s=t("@aimpact/http-suite/api"),a=t("@beyond-js/reactive/model"),r=t("@aimpact/ailearn-sdk/config"),n=t("@aimpact/chat-sdk/session"),c=t("@aimpact/media-manager/uploader");class i extends a.ReactiveModel{#api;#parent;constructor(t){super(),this.#api=new s.Api(r.default.params.apis.ailearn),this.#parent=t}load=async t=>{this.#api.bearer(n.sessionWrapper.user.token);var{status:e,data:s}=await this.#api.get(`/assignments/${t.assignmentId}/activities/`+t.id);if(e)return t?.progress&&await this.#parent.processLoad(s),{status:e,data:s};throw new Error("error loading activity")};publish=async t=>"assessment"==t.type?(delete t.type,this.assessment(t.params)):this.spoken(t.data);assessment=async t=>{this.#api.bearer(n.sessionWrapper.user.token);var{status:t,data:e,error:s}=await this.#api.post("/activities/assessments/completion",t);if(s)throw new Error("error processing assessment");return{status:t,data:e}};spoken=async s=>{try{let t=Object.getOwnPropertyNames(s),e=new FormData;t.forEach(t=>{e.append(t,s[t])});var a=new c.XHRLoader,i=(a.bearer(n.sessionWrapper.user.token),await(await a.upload(e,r.default.params.apis.ailearn+"/activities/spoken/completion")).json());if(i.status)return this.triggerEvent(),i.data;throw new Error("error publishing assessment")}catch(t){console.error(t)}};async consumeCoins(){return this.#api.bearer(n.sessionWrapper.user.token),this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`,{})}}e.ActivityProvider=i}}),p.set("./index",{hash:34470760,creator:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Tracking=void 0;var s=t("./provider"),a=t("./activity/collection"),i=t("@beyond-js/reactive/entities"),r=t("@aimpact/ailearn-sdk/config"),n=t("@aimpact/http-suite/api"),c=t("@aimpact/chat-sdk/session");class o extends i.Item{properties=["module","activities","credits","module","status","user","access","assignment"];#api;#assignmentId;get assignmentId(){return this.#assignmentId}static#instances=new Map;#loadChat;constructor({assignmentId:t,chat:e}){super({id:t,localdb:!1,provider:s.TrackingProvider}),this.#api=new n.Api(r.default.params.apis.ailearn),this.#loadChat=!!e,this.#assignmentId=t,this.#activities=new a.Activities(this,!0)}#accessed;get accessed(){return this.#accessed}#order;get order(){return this.#order}#activities;get activities(){return this.#activities}set activities(t){this.#activities.setData(t)}async load(t={}){await this.isReady,t.id||(t.id=this.id);var{status:t,error:e,data:s}=await super.load(t);if(t)return this.#accessed=s.accessed,this.module=s.module,await this.set({credits:s.credits}),s.activities&&(await this.#activities.setData(s.activities),this.#order=s.activities.order),s;throw 404===e?.code&&(this.found=!1),new Error("404")}async consumeCoins(){var t=await this.provider.consumeCoins();return t.status&&(await this.set(t.data),this.trigger("credits.change","add")),t}async accessToAssignment(){var t={id:this.#assignmentId},t=await this.provider.access(t);return this.#accessed=t.accessed,this.#activities.setData(t.activities),this.#accessed}static get({assignmentId:t,chat:e}){return this.#instances.has(t)?this.#instances.get(t):(e=new o({assignmentId:t,chat:e}),this.#instances.set(t,e),e)}async requestClassroomAccess(){this.#api.bearer(c.sessionWrapper.user.token);var t=await this.#api.post(`/assignments/${this.assignmentId}/classroom/request`,{});return t.status||38!==t.error?.code?"authorized"===t.data.status.toLowerCase()?await this.load({id:this.assignmentId}):await this.set({access:t.data.status}):console.error(t.error),t}}e.Tracking=o}}),p.set("./provider",{hash:3307508261,creator:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.TrackingProvider=void 0;var s=t("@aimpact/http-suite/api"),a=t("@beyond-js/reactive/model"),i=t("@aimpact/ailearn-sdk/config"),r=t("@aimpact/chat-sdk/session");class n extends a.ReactiveModel{#api;#parent;#accessed;get accessed(){return this.#accessed}#activities;get activities(){return this.#activities}constructor(t){super(),this.#api=new s.Api(i.default.params.apis.ailearn),this.#parent=t}load=async t=>{this.#api.bearer(r.sessionWrapper.user.token);var{status:e,data:s,error:a}=await this.#api.get(`/assignments/${t.id}/tracking`,t);if(e)return t?.progress&&await this.#parent.processLoad(s),{status:e,data:s,error:a};throw new Error("error loading class")};async access(t={}){if(this.#api.bearer(r.sessionWrapper.user.token),(t=await this.#api.post(`/assignments/${t.id}/access`,t)).status)return t.data;throw new Error("Error accessing assignment: "+t.error)}async consumeCoins(){return this.#api.bearer(r.sessionWrapper.user.token),this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`,{})}}e.TrackingProvider=n}}),p.set("./types/interfaces",{hash:1162130268,creator:function(t,e){Object.defineProperty(e,"__esModule",{value:!0})}}),h.exports.descriptor=[{im:"./activity/index",from:"Activity",name:"Activity"},{im:"./index",from:"Tracking",name:"Tracking"}],h.exports.process=function({require:t,prop:e,value:s}){!t&&"Activity"!==e||a("Activity",t?t("./activity/index").Activity:s),!t&&"Tracking"!==e||a("Tracking",t?t("./index").Tracking:s)},a("__beyond_pkg",h),a("hmr",new function(){this.on=(t,e)=>h.hmr.on(t,e),this.off=(t,e)=>h.hmr.off(t,e)}),h.initialise(p)}}});