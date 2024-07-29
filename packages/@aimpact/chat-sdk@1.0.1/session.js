System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@aimpact/chat-sdk@1.0.1/users","firebase@10.12.0/auth","@beyond-js/reactive@1.2.0/model","firebase@10.12.0/app","@aimpact/chat-sdk@1.0.1/config"],function(r,e){var t,s,i,a,n,o,u,h,d;return r("sessionWrapper",void 0),{setters:[function(e){t=e},function(e){s=e},function(e){i=e},function(e){a=e},function(e){n=e},function(e){o=e},function(e){u=e}],execute:function(){d=t.Bundle,(h=new d({module:{vspecifier:"@aimpact/chat-sdk@1.0.1/session"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/core",s],["@aimpact/chat-sdk/users",i],["firebase/auth",a],["@beyond-js/reactive/model",n],["firebase/app",o],["@aimpact/chat-sdk/config",u]]),(d=new Map).set("./auth",{hash:4232137602,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Auth=void 0;var a=e("./firebase/config"),o=e("@beyond-js/kernel/core"),s=e("@aimpact/chat-sdk/users"),n=e("firebase/auth"),e=e("@beyond-js/reactive/model");class r extends e.ReactiveModel{#uid;#pendingLogin;#user;get user(){return this.#user}#getUserPromise;#session;constructor(e){super(),this.session=e,(0,n.getRedirectResult)(a.auth).then(this.onRedirectResult.bind(this)),(0,n.onAuthStateChanged)(a.auth,this.onAuthStateChanged.bind(this))}async onRedirectResult(e){e&&this.onAuthStateChanged(e)}async onAuthStateChanged(e){if(!e&&this.#user&&(this.#user=void 0,this.signOut()),e){if(this.#user&&this.#user.id===e.uid)return;var t=await this.getUserModel({id:e.uid});t.setFirebaseUser(e),await t.login(e.accessToken),await this.appLogin(e),this.#user=t}this.ready=!0,this.trigger("ready")}async setUser(e){if(!e&&this.#user&&(this.#user=void 0,this.signOut()),e){if(!e)return;if(this.#user&&this.#user.id===e.uid)return;var t=await this.getUserModel({id:e.uid});t.setFirebaseUser(e),await t.set(e),this.#user=t}this.ready=!0,this.triggerEvent("change")}async getUserModel(e){return this.#user&&this.#user.id===e.id?await this.#user.set(e):(this.#user&&(this.#user=void 0),this.#user=await s.User.getModel(e),await this.#user.initialize(e),this.#user.token&&await this.#user.load()),this.#user}appLogin=async e=>{if(this.#pendingLogin)return this.#pendingLogin;if(e?.uid){if(this.#uid=e.uid,!this.#pendingLogin){this.#pendingLogin=new o.PendingPromise;var{displayName:s,photoURL:r,email:i,phoneNumber:a,uid:n}=e,e=await e.getIdToken();let t=await this.getUserModel({id:n,displayName:s,photoURL:r,email:i,phoneNumber:a,firebaseToken:e});t.login(e).then(e=>{e||console.error("Could not login",e),this.trigger("login"),this.#pendingLogin.resolve({status:!0,model:t})})}return this.#pendingLogin}return{status:!1,error:"INVALID_USER"}};login=async(e,t)=>{try{var s=await(0,n.signInWithEmailAndPassword)(a.auth,e,t);return await this.appLogin(s)}catch(e){return{status:!1,error:e.message}}};0;signInWithGoogle=async()=>{try{var e=await(0,n.signInWithPopup)(a.auth,a.googleProvider);return await this.appLogin(e.user)}catch(e){return{status:!1,error:{"auth/account-exists-with-different-credential":"ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL","auth/popup-closed-by-user":"POPUP_CLOSED_BY_USER"}[e.code]||"CANNOT"}}};registerWithEmail=async(e,t,s)=>{try{var r=await(0,n.createUserWithEmailAndPassword)(a.auth,e,t),i={...r.user,displayName:s};return await this.appLogin({...r,user:i})}catch(e){return{status:!1,error:e.message}}};resetPassword=async e=>{try{return await(0,n.sendPasswordResetEmail)(a.auth,e),{status:!0}}catch(e){return{status:!1,error:e.message}}};confirmPasswordReset=async(e,t)=>{try{return await(0,n.verifyPasswordResetCode)(a.auth,e),await(0,n.confirmPasswordReset)(a.auth,e,t),{status:!0}}catch(e){return{status:!1,error:e.message}}};signOut=async()=>{try{await(this.#pendingLogin=void 0,n.signOut)(a.auth)}catch(e){console.error(e)}};logout=this.signOut}t.Auth=r}}),d.set("./firebase/config",{hash:1942609227,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.googleProvider=t.facebookProvider=t.auth=void 0;var s=e("firebase/app"),r=e("firebase/auth"),e=e("@aimpact/chat-sdk/config"),i={apiKey:"AIzaSyBYiZcPNBky2QvNdVwgCgU_v2B7feLtbQU",authDomain:"aimpact-partners-dev.firebaseapp.com",databaseURL:"https://aimpact-partners-dev-default-rtdb.firebaseio.com",projectId:"aimpact-partners-dev",storageBucket:"aimpact-partners-dev.appspot.com",messagingSenderId:"1081434267674",appId:"1:1081434267674:web:9396cc23e55385b5d171a3",measurementId:"G-QLL5WFH89Y"},a={apiKey:"AIzaSyAEEozzwR0cguqynxvL1qB38i8liOCgtJc",authDomain:"aimpact-partners-prod.firebaseapp.com",projectId:"aimpact-partners-prod",storageBucket:"aimpact-partners-prod.appspot.com",messagingSenderId:"741854278426",appId:"1:741854278426:web:9ff2a50e705edcc501f2a3"},s=(0,s.initializeApp)({local:i,development:i,testing:{apiKey:"AIzaSyDiwwiF_O_WZHyq7QrjnxqIg9EXz1vavV0",authDomain:"chat-api-test-393820.firebaseapp.com",projectId:"chat-api-test-393820",storageBucket:"chat-api-test-393820.appspot.com",messagingSenderId:"1083395329827",appId:"1:1083395329827:web:c6fead0e2d4124b4f90696"},quality:a,production:a}[e.default.environment]);t.auth=(0,r.getAuth)(s),t.googleProvider=new r.GoogleAuthProvider,t.facebookProvider=new r.FacebookAuthProvider}}),d.set("./index",{hash:861747966,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.sessionWrapper=void 0;var s=e("./firebase/config"),r=e("@beyond-js/reactive/model"),i=e("@beyond-js/kernel/core"),a=e("./auth");class n extends r.ReactiveModel{get user(){return this.#auth.user}get userId(){return s.auth.currentUser?s.auth.currentUser.uid:null}get logged(){return!!this.#auth.user}#promise;get isReady(){return this.#promise}#auth;get auth(){return this.#auth}constructor(){super(),this.#promise=new i.PendingPromise,this.#auth=new a.Auth(this),this.#auth.on("login",()=>this.trigger("login")),this.#auth.on("ready",this.listenReady.bind(this))}listenReady(){this.ready=!0,this.#promise.resolve(this.ready),this.triggerEvent("change")}async signInWithGoogle(){try{var e=await this.#auth.signInWithGoogle();return!!e?.status&&(this.triggerEvent("login"),e)}catch(e){return console.error(e),{status:!1,error:"CANNOT"}}}async registerWithEmail({email:e,password:t,username:s}){try{var r=await this.#auth.registerWithEmail(e,t,s);return r.status?r:{status:!1,error:r.error}}catch(e){return{status:!1,error:"CANNOT"}}}async logout(){try{return await this.#auth.signOut(),globalThis.localStorage.clear(),this.triggerEvent("logout"),!0}catch(e){return console.error(e),!1}}}e=t.sessionWrapper=new n,globalThis.s=e}}),h.exports.descriptor=[{im:"./index",from:"sessionWrapper",name:"sessionWrapper"}],h.exports.process=function({require:e,prop:t,value:s}){!e&&"sessionWrapper"!==t||r("sessionWrapper",e?e("./index").sessionWrapper:s)},r("__beyond_pkg",h),r("hmr",new function(){this.on=(e,t)=>h.hmr.on(e,t),this.off=(e,t)=>h.hmr.off(e,t)}),h.initialise(d)}}});