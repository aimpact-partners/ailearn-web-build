System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.1.12/model","@aimpact/ailearn-app@0.0.40/model/wrapper","@aimpact/http-suite@1.0.3/api","@beyond-js/kernel@0.1.9/core","@aimpact/ailearn-app@0.0.40/config","dayjs@1.11.10","@aimpact/chat-sdk@1.0.0/session"],function(t,e){"use strict";var s,r,a,i,o,n,c,p,l,h;return t("gclassroom",void 0),{setters:[function(e){s=e},function(e){r=e},function(e){a=e},function(e){i=e},function(e){o=e},function(e){n=e},function(e){c=e},function(e){p=e}],execute:function(){h=s.Bundle,(l=new h({module:{vspecifier:"@aimpact/ailearn-app@0.0.40/model/gclassroom"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/reactive/model",r],["@aimpact/ailearn-app/model/wrapper",a],["@aimpact/http-suite/api",i],["@beyond-js/kernel/core",o],["@aimpact/ailearn-app/config",n],["dayjs",c],["@aimpact/chat-sdk/session",p]]),(h=new Map).set("./class",{hash:956808558,creator:function(e,s){Object.defineProperty(s,"__esModule",{value:!0}),s.GClass=void 0;class r extends e("@beyond-js/reactive/model").ReactiveModel{#course;#name;get name(){return this.#name}#code;get code(){return this.#code}#section;get section(){return this.#section}get id(){return this.#course.id}constructor(e){super(),this.#course=e,this.#init()}#init(){this.#name=this.#course.name,this.#section=this.#course.section}}s.GClass=r}}),h.set("./index",{hash:2999330466,creator:function(e,s){Object.defineProperty(s,"__esModule",{value:!0}),s.gclassroom=s.GClassRoom=void 0;var r=e("@aimpact/ailearn-app/model/wrapper"),t=e("@aimpact/http-suite/api"),a=e("./class"),i=e("@beyond-js/kernel/core"),o=e("@beyond-js/reactive/model"),n=e("@aimpact/ailearn-app/config"),c=e("dayjs"),p=e("@aimpact/chat-sdk/session");class l extends o.ReactiveModel{#promise;#url;#MAX_TIME=3e5;#state;get state(){return this.#state}#code;get code(){return this.#code}get isReady(){return this.#promise}#api;#lastClassesQueryTime;get lastClassesQueryTime(){return this.#lastClassesQueryTime}#error;get error(){return this.#error}#authorized;#processedCallback;get processedCallback(){return this.#processedCallback}get authorized(){return this.#authorized}#classes=new Map;get classes(){return this.#classes}constructor(){super();var e=new t.Api(n.default.params.apis.ailearn);this.#api=e,p.sessionWrapper.on("login",this.onLogin.bind(this)),this.#init()}onLogin(){}async checkPermissions(){try{var e=await this.#api.bearer(p.sessionWrapper.user.token).get("/gclassroom/me");if("error"!==e.status)return e.data.verifiedTeacher;this.#error=e.error}catch(e){console.error(e)}}async#init(){try{var e;if(this.#promise=new i.PendingPromise,await p.sessionWrapper.isReady,!p.sessionWrapper.logged)return p.sessionWrapper.on("change",()=>{p.sessionWrapper.ready&&this.#promise.resolve(!0)}),this.triggerEvent(),this.#promise;e=await this.#api.bearer(p.sessionWrapper.user.token).get("/gclassroom/oauth/authorized"),this.#authorized=e.data.authorized,this.#promise.resolve(!0),r.AiLearnWrapper.isTeacher=!1,this.triggerEvent()}catch(e){console.error(e)}finally{this.ready=!0,this.#promise.resolve(!0)}}async getUrl(){try{var e=await this.#api.bearer(p.sessionWrapper.user.token).get("/gclassroom/oauth/url");if(e.status)return e.data.url;throw new Error(e.error)}catch(e){throw new Error("ERROR_GETTING_URL")}}async callback(e,s){try{this.#state=e,this.#code=s,this.fetching=!0;var r=await this.#api.get("/gclassroom/oauth/callback",{bearer:p.sessionWrapper.user.token,state:e,code:s});"error"===r.status?this.#error=r.error:(this.#authorized=!0,this.#processedCallback=!0,this.triggerEvent())}catch(e){console.trace(e)}finally{this.fetching=!1}}async courses(){try{this.fetching=!0;var e=await this.#api.get("/gclassroom/courses",{bearer:p.sessionWrapper.user.token,id:p.sessionWrapper.user.id});return"error"===e.status?(this.#error=e.error,[]):(e.courses.forEach(e=>{var s=new a.GClass(e);this.#classes.set(e.id,s)}),this.#lastClassesQueryTime=(0,c.default)(),this.#classes)}catch(e){console.error(e)}finally{this.fetching=!1}}}s.GClassRoom=l;s.gclassroom=new l}}),l.exports.descriptor=[{im:"./index",from:"gclassroom",name:"gclassroom"}],l.exports.process=function({require:e,prop:s,value:r}){!e&&"gclassroom"!==s||t("gclassroom",e?e("./index").gclassroom:r)},t("__beyond_pkg",l),t("hmr",new function(){this.on=(e,s)=>l.hmr.on(e,s),this.off=(e,s)=>l.hmr.off(e,s)}),l.initialise(h)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jbGFzcy50cyIsIi9pbmRleC50cyJdLCJuYW1lcyI6WyJHQ2xhc3MiLCJyZXF1aXJlIiwiUmVhY3RpdmVNb2RlbCIsIiNjb3Vyc2UiLCIjbmFtZSIsIm5hbWUiLCJ0aGlzIiwiI2NvZGUiLCJjb2RlIiwiI3NlY3Rpb24iLCJzZWN0aW9uIiwiaWQiLCJjb25zdHJ1Y3RvciIsImdjbGFzcyIsInN1cGVyIiwiI2luaXQiLCJleHBvcnRzIiwiX3dyYXBwZXIiLCJfYXBpIiwiX2NsYXNzIiwiX2NvcmUiLCJfbW9kZWwiLCJfY29uZmlnIiwiX2RheWpzIiwiX3Nlc3Npb24iLCJHQ2xhc3NSb29tIiwiI3Byb21pc2UiLCIjdXJsIiwiI01BWF9USU1FIiwiI3N0YXRlIiwic3RhdGUiLCJpc1JlYWR5IiwiI2FwaSIsIiNsYXN0Q2xhc3Nlc1F1ZXJ5VGltZSIsImxhc3RDbGFzc2VzUXVlcnlUaW1lIiwiI2Vycm9yIiwiZXJyb3IiLCIjYXV0aG9yaXplZCIsIiNwcm9jZXNzZWRDYWxsYmFjayIsInByb2Nlc3NlZENhbGxiYWNrIiwiYXV0aG9yaXplZCIsIiNjbGFzc2VzIiwiTWFwIiwiY2xhc3NlcyIsImFwaSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsInNlc3Npb25XcmFwcGVyIiwib24iLCJvbkxvZ2luIiwiYmluZCIsImNoZWNrUGVybWlzc2lvbnMiLCJyZXNwb25zZSIsImF3YWl0IiwiYmVhcmVyIiwidXNlciIsInRva2VuIiwiZ2V0Iiwic3RhdHVzIiwiZGF0YSIsInZlcmlmaWVkVGVhY2hlciIsImUiLCJjb25zb2xlIiwiUGVuZGluZ1Byb21pc2UiLCJsb2dnZWQiLCJvbkNoYW5nZSIsInJlYWR5IiwicmVzb2x2ZSIsInRyaWdnZXJFdmVudCIsIkFpTGVhcm5XcmFwcGVyIiwiaXNUZWFjaGVyIiwiZ2V0VXJsIiwidXJsIiwiRXJyb3IiLCJjYWxsYmFjayIsImZldGNoaW5nIiwidHJhY2UiLCJjb3Vyc2VzIiwiZm9yRWFjaCIs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