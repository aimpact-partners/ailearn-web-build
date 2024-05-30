System.register(["@beyond-js/kernel@0.1.9/bundle","@aimpact/chat-sdk@1.0.0/settings","@beyond-js/kernel@0.1.9/core","firebase@10.12.0/auth","@beyond-js/reactive@1.1.12/model","firebase@10.12.0/app","@aimpact/ailearn-app@0.0.45/config"],function(r,e){"use strict";var t,s,i,a,n,o,u,h,d;return r("sessionWrapper",void 0),{setters:[function(e){t=e},function(e){s=e},function(e){i=e},function(e){a=e},function(e){n=e},function(e){o=e},function(e){u=e}],execute:function(){d=t.Bundle,(h=new d({module:{vspecifier:"@aimpact/chat-sdk@1.0.0/session"},type:"ts"},e.meta.url).package()).dependencies.update([["@aimpact/chat-sdk/settings",s],["@beyond-js/kernel/core",i],["firebase/auth",a],["@beyond-js/reactive/model",n],["firebase/app",o],["@aimpact/chat-sdk/config",u]]),(d=new Map).set("./auth",{hash:1646407332,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Auth=void 0;var a=e("./firebase/config"),s=e("@aimpact/chat-sdk/settings"),o=e("@beyond-js/kernel/core"),n=e("firebase/auth");class r extends e("@beyond-js/reactive/model").ReactiveModel{#uid;#pendingLogin;#user;get user(){return this.#user}#getUserPromise;#session;constructor(e){super(),this.session=e,(0,n.getRedirectResult)(a.auth).then(this.onRedirectResult.bind(this)),(0,n.onAuthStateChanged)(a.auth,this.onAuthStateChanged.bind(this))}async onRedirectResult(e){e&&this.onAuthStateChanged(e)}async onAuthStateChanged(e){if(!e&&this.#user&&(this.#user=void 0,this.signOut()),e){if(this.#user&&this.#user.id===e.uid)return;var t=await this.getUserModel({id:e.uid});t.setFirebaseUser(e),await t.login(e.accessToken),await this.appLogin(e),this.#user=t}this.ready=!0,this.trigger("ready")}async setUser(e){if(!e&&this.#user&&(this.#user=void 0,this.signOut()),e){if(!e)return;if(this.#user&&this.#user.id===e.uid)return;var t=await this.getUserModel({id:e.uid});t.setFirebaseUser(e),await t.set(e),this.#user=t}this.ready=!0,this.triggerEvent("change")}async getUserModel(e){return this.#user&&this.#user.id===e.id?await this.#user.set(e):(this.#user&&(this.#user=void 0),this.#user=new s.SDKSettings.userModel(e),await this.#user.initialize(e),this.#user.token&&await this.#user.load()),this.#user}appLogin=async e=>{if(this.#pendingLogin)return this.#pendingLogin;if(e.user?.uid){if(this.#uid===e.user.uid)return;if(this.#uid=e.user.uid,!this.#pendingLogin){this.#pendingLogin=new o.PendingPromise;var{displayName:t,photoURL:s,email:r,phoneNumber:i,uid:a}=e.user,e=await e.user.getIdToken();const n=await this.getUserModel({id:a,displayName:t,photoURL:s,email:r,phoneNumber:i,firebaseToken:e});n.login(e).then(e=>{e||console.error("Could not login",e),this.trigger("login"),this.#pendingLogin.resolve({status:!0,user:n})})}return this.#pendingLogin}return{status:!1,error:"INVALID_USER"}};login=async(e,t)=>{try{var s=await(0,n.signInWithEmailAndPassword)(a.auth,e,t);return await this.appLogin(s)}catch(e){return{status:!1,error:e.message}}};0;signInWithGoogle=async()=>{try{var e=await(0,n.signInWithPopup)(a.auth,a.googleProvider);return await this.appLogin(e)}catch(e){return{status:!1,error:{"auth/account-exists-with-different-credential":"ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL","auth/popup-closed-by-user":"POPUP_CLOSED_BY_USER"}[e.code]||"CANNOT"}}};registerWithEmail=async(e,t,s)=>{try{var r=await(0,n.createUserWithEmailAndPassword)(a.auth,e,t),i={...r.user,displayName:s};return await this.appLogin({...r,user:i})}catch(e){return{status:!1,error:e.message}}};resetPassword=async e=>{try{return await(0,n.sendPasswordResetEmail)(a.auth,e),{status:!0}}catch(e){return{status:!1,error:e.message}}};confirmPasswordReset=async(e,t)=>{try{return await(0,n.verifyPasswordResetCode)(a.auth,e),await(0,n.confirmPasswordReset)(a.auth,e,t),{status:!0}}catch(e){return{status:!1,error:e.message}}};signOut=async()=>{try{await(this.#pendingLogin=void 0,n.signOut)(a.auth)}catch(e){console.error(e)}};logout=this.signOut}t.Auth=r}}),d.set("./firebase/config",{hash:2348430544,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.googleProvider=t.facebookProvider=t.auth=void 0;var s=e("firebase/app"),r=e("firebase/auth"),e=e("@aimpact/chat-sdk/config"),i={apiKey:"AIzaSyBYiZcPNBky2QvNdVwgCgU_v2B7feLtbQU",authDomain:"aimpact-partners-dev.firebaseapp.com",databaseURL:"https://aimpact-partners-dev-default-rtdb.firebaseio.com",projectId:"aimpact-partners-dev",storageBucket:"aimpact-partners-dev.appspot.com",messagingSenderId:"1081434267674",appId:"1:1081434267674:web:9396cc23e55385b5d171a3",measurementId:"G-QLL5WFH89Y"},a={apiKey:"AIzaSyAEEozzwR0cguqynxvL1qB38i8liOCgtJc",authDomain:"aimpact-partners-prod.firebaseapp.com",projectId:"aimpact-partners-prod",storageBucket:"aimpact-partners-prod.appspot.com",messagingSenderId:"741854278426",appId:"1:741854278426:web:9ff2a50e705edcc501f2a3"},s=(0,s.initializeApp)({local:i,development:i,testing:{apiKey:"AIzaSyDiwwiF_O_WZHyq7QrjnxqIg9EXz1vavV0",authDomain:"chat-api-test-393820.firebaseapp.com",projectId:"chat-api-test-393820",storageBucket:"chat-api-test-393820.appspot.com",messagingSenderId:"1083395329827",appId:"1:1083395329827:web:c6fead0e2d4124b4f90696"},quality:a,production:a}[e.default.environment]);t.auth=(0,r.getAuth)(s),t.googleProvider=new r.GoogleAuthProvider,t.facebookProvider=new r.FacebookAuthProvider}}),d.set("./index",{hash:3248857962,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.sessionWrapper=void 0;var s=e("./firebase/config"),r=e("@beyond-js/reactive/model"),i=e("@beyond-js/kernel/core"),a=e("./auth");class n extends r.ReactiveModel{get user(){return this.#auth.user}get userId(){return s.auth.currentUser?s.auth.currentUser.uid:null}get logged(){return!!this.#auth.user}#promise;get isReady(){return this.#promise}#auth;get auth(){return this.#auth}constructor(){super(),this.#promise=new i.PendingPromise,this.#auth=new a.Auth(this),this.#auth.on("login",()=>this.trigger("login")),this.#auth.on("ready",this.listenReady.bind(this))}listenReady(){this.ready=!0,this.#promise.resolve(this.ready),this.triggerEvent("change")}async signInWithGoogle(){try{var e=await this.#auth.signInWithGoogle();return e?.status?(this.triggerEvent("login"),e):!1}catch(e){return console.error(e),{status:!1,error:"CANNOT"}}}async registerWithEmail({email:e,password:t,username:s}){try{var r=await this.#auth.registerWithEmail(e,t,s);return r.status?r:{status:!1,error:r.error}}catch(e){return{status:!1,error:"CANNOT"}}}async logout(){try{return await this.#auth.signOut(),globalThis.localStorage.clear(),this.triggerEvent("logout"),!0}catch(e){return console.error(e),!1}}}e=t.sessionWrapper=new n;globalThis.s=e}}),h.exports.descriptor=[{im:"./index",from:"sessionWrapper",name:"sessionWrapper"}],h.exports.process=function({require:e,prop:t,value:s}){!e&&"sessionWrapper"!==t||r("sessionWrapper",e?e("./index").sessionWrapper:s)},r("__beyond_pkg",h),r("hmr",new function(){this.on=(e,t)=>h.hmr.on(e,t),this.off=(e,t)=>h.hmr.off(e,t)}),h.initialise(d)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hdXRoLnRzIiwiL2ZpcmViYXNlL2NvbmZpZy50cyIsIi9pbmRleC50cyJdLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9zZXR0aW5ncyIsIl9jb3JlIiwiX2F1dGgiLCJBdXRoIiwiUmVhY3RpdmVNb2RlbCIsIiN1aWQiLCIjcGVuZGluZ0xvZ2luIiwiI3VzZXIiLCJ1c2VyIiwidGhpcyIsIiNnZXRVc2VyUHJvbWlzZSIsIiNzZXNzaW9uIiwiY29uc3RydWN0b3IiLCJzZXNzaW9uIiwic3VwZXIiLCJnZXRSZWRpcmVjdFJlc3VsdCIsImF1dGgiLCJ0aGVuIiwib25SZWRpcmVjdFJlc3VsdCIsImJpbmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJkYXRhIiwidW5kZWZpbmVkIiwic2lnbk91dCIsImlkIiwidWlkIiwiYXdhaXQiLCJnZXRVc2VyTW9kZWwiLCJzZXRGaXJlYmFzZVVzZXIiLCJsb2dpbiIsImFjY2Vzc1Rva2VuIiwiYXBwTG9naW4iLCJyZWFkeSIsInRyaWdnZXIiLCJzZXRVc2VyIiwic2V0IiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJTREtTZXR0aW5ncyIsInVzZXJNb2RlbCIsImluaXRpYWxpemUiLCJ0b2tlbiIsImxvYWQiLCJyZXNwb25zZSIsIlBlbmRpbmdQcm9taXNlIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJmaXJlYmFzZVRva2VuIiwiZ2V0SWRUb2tlbiIsImNvdWxkTG9nIiwiY29uc29sZSIsImVycm9yIiwicmVzb2x2ZSIsInN0YXR1cyIsImFzeW5jIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsIm1lc3NhZ2UiLCIwIiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25JbldpdGhQb3B1cCIsImdvb2dsZVByb3ZpZGVyIiwiYXV0aC9hY2NvdW50LWV4aXN0cy13aXRoLWRpZmZlcmVudC1jcmVkZW50aWFsIiwiYXV0aC9wb3B1cC1jbG9zZWQtYnktdXNlciIsImNvZGUiLCJyZWdpc3RlcldpdGhFbWFpbCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlcldpdGhEaXNwbGF5TmFtZSIsInJlc2V0UGFzc3dvcmQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJuZXdQYXNzd29yZCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibG9nb3V0IiwiZXhwb3J0cyIsIl9hcHAiLCJERVYiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJCRVRBIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImxvY2FsIiwiZGV2ZWxvcG1lbnQiLCJ0ZXN0aW5nIiwicXVhbGl0eSIsInByb2R1Y3Rpb24iLCJkZWZhdWx0IiwiZW52aXJvbm1lbnQiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiX21vZGVsIiwiU2Vzc2lvbk1hbmFnZXIiLCIjYXV0aCIsInVzZXJJZCIsImN1cnJlbnRVc2VyIiwibG9nZ2VkIiwiI3Byb21pc2UiLCJpc1JlYWR5Iiwib24iLCJsaXN0ZW5SZWFkeSIsImUiLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJzZXNzaW9uV3JhcHBlciIsInMiXSwibWFwcGluZ3MiOiIyM0JBQUEsSUFBQUEsRUFBQUMsRUFBQSxtQkFBQSxFQUNBQyxFQUFBRCxFQUFBLDRCQUFBLEVBQ0FFLEVBQUFGLEVBQUEsd0JBQUEsRUFFQUcsRUFBQUgsRUFBQSxlQUFBLFFBZWFJLFVBRmJKLEVBQUEsMkJBQUEsRUFFMEJLLGNBQ3pCQyxLQUNBQyxjQUNBQyxNQUNBQyxXQUNDLE9BQU9DLEtBQUtGLEtBQ2IsQ0FFQUcsZ0JBQ0FDLFNBQ0FDLFlB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