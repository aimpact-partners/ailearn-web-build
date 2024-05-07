System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/reactive@1.1.12/model"],function(s,e){"use strict";var t,r,a,n,i;return s({Api:void 0,JCall:void 0}),{setters:[function(e){t=e},function(e){r=e},function(e){a=e}],execute:function(){i=t.Bundle,(n=new i({module:{vspecifier:"@bgroup/http-suite@1.0.3/api"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/core",r],["@beyond-js/reactive/model",a]]),(i=new Map).set("./api",{hash:3516067986,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Api=void 0;var r=e("@beyond-js/kernel/core"),s=e("./jcall");class a extends r.Events{#url;get url(){return this.#url??""}#fetcher;get actions(){return this.#fetcher.actions}get streamResponse(){return this.#fetcher.streamResponse}get metadata(){return this.#fetcher.metadata}constructor(e){super(),this.#url=e,this.#fetcher=new s.JCall,this.#fetcher.on("action.received",()=>this.trigger("action.received")),this.#fetcher.on("stream.response",this.#getResponse)}#getResponse=()=>{this.trigger("stream.response")};async action(e="get",t,r={}){return this.#fetcher[e](this.getURL(t),r)}getURL(e){return""+this.#url+e}bearer(e){return this.#fetcher.bearer(e),this}get(e,t){return this.action("get",e,t)}post(e,t){return this.action("post",e,t)}put(e,t){return this.action("put",e,t)}delete(e,t){return this.action("delete",e,t)}stream(e,t={}){return this.action("stream",e,t)}}t.Api=a}}),i.set("./jcall",{hash:2319073315,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.JCall=void 0;var r=e("@beyond-js/reactive/model"),s=e("./stream");class a extends r.ReactiveModel{get actions(){return this.#streamer.actions}get streamResponse(){return this.#streamer.response}#bearer;bearer(e){return e&&(this.#bearer=e),this}#streamer;constructor(){super(),this.#streamer=new s.Stream(this)}getHeaders=(t,e)=>{let r=new Headers;var s=t.bearer||this.#bearer;return s&&r.append("Authorization","Bearer "+s),t.bearer&&delete t.bearer,Object.keys(t).forEach(e=>{"bearer"!==e&&r.append(e,t[e])}),e&&r.delete("Content-Type"),r};#formData;formData=t=>(this.#formData=new FormData,Object.keys(t).forEach(e=>{this.#formData.append(e,t[e])}),this.#formData);#processGetParams(e){if(0===Object.entries(e).length&&e.constructor===Object)return"";var t=new URLSearchParams;for(const r in e)[NaN,void 0,""].includes(e[r])||t.append(r,e[r]);return t}#processPostParams=(e,t)=>{if(!(0===Object.entries(e).length&&e.constructor===Object))return t?this.formData(e):JSON.stringify(e)};execute=async(e,t="get",r={},s,a,n)=>{try{s=s||{};var i,o=r.multipart,c=this.getHeaders({...s,bearer:r.bearer},o),h=(delete r.multipart,delete r.bearer,{method:t,headers:c,mode:"cors"});return r.bearer&&delete r.bearer,"post"===t||"put"===t||"DELETE"===t?h.body=this.#processPostParams(r,o):"get"===t&&(i=this.#processGetParams(r).toString())&&(e+="?"+i),a?this.#streamer.execute(e,h):(await fetch(e,h)).json()}catch(e){console.error("error jcall",e)}};stream=(e,t,r={"Content-Type":"application/json"})=>this.execute(e,"post",t,r,!0);get=(e,t,r)=>this.execute(e,"get",t);post=(e,t,r={"Content-Type":"application/json"})=>this.execute(e,"post",t,r);delete=(e,t,r={"Content-Type":"application/json"})=>this.execute(e,"DELETE",t,r);put=(e,t,r={"Content-Type":"application/json"})=>this.execute(e,"put",t,r)}t.JCall=a}}),i.set("./stream",{hash:3091227484,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Stream=void 0;var a=e("@beyond-js/kernel/core");t.Stream=class{#SEPARATORS={METADATA:"ÿ",START:"😸",END:"🖋️"};#metadata={started:!1,value:"",parsed:{value:void 0}};get metadata(){return this.#metadata.parsed}#actions=[];get actions(){return this.#actions}#response="";get response(){return this.#response}#parent;#currentTool={started:!1,value:"",parsed:{value:void 0}};constructor(e){this.#parent=e}#processResponse=e=>{var t=this.#metadata;try{this.#metadata.parsed.value=JSON.parse(t.value)}catch(e){console.log(t),console.error(e),this.#metadata.parsed.error="Error parsing metadata"}e.resolve({value:this.#response,...t.parsed.value}),this.#response=void 0};#cleanCurrentTool(){this.#currentTool={started:!1,value:"",parsed:{value:void 0}}}async#handleMetadata(e,t){return this.#metadata.started=!0,e=e.split(this.#SEPARATORS.METADATA),this.#metadata.value+=e[1],e[0]?t+e[0]:t}handleStart(e,t){var r=e.split(this.#SEPARATORS.START);return this.#currentTool.started=!0,e="",r[1].includes(this.#SEPARATORS.END)?(e=r[1].split(this.#SEPARATORS.END),this.#currentTool.value=e[0],this.#actions.push(e[0]),t+=this.#SEPARATORS.START+this.#currentTool.value+this.#SEPARATORS.END):(t+=r[0],this.#currentTool.value+=r[1]),t}handleEnd(e,t){return e=e.split(this.#SEPARATORS.END),this.#currentTool.value+=e[0],this.#currentTool.started=!1,this.#actions.push(this.#currentTool.value),this.#response+=this.#SEPARATORS.START+this.#currentTool.value+this.#SEPARATORS.END,e[1]}async#read(e,t){for(var r=e.body?.getReader();;){var{done:s,value:a}=await r.read(),a=(new TextDecoder).decode(a);if(s)return this.#processResponse(t);if(a.includes(this.#SEPARATORS.METADATA))this.#handleMetadata(a,this.#response);else{if(this.#metadata.started)return this.#metadata.value+=a,void this.#parent.trigger("stream.response");a.includes(this.#SEPARATORS.START)?this.handleStart(a,this.#response):this.#currentTool.started&&a.includes(this.#SEPARATORS.END)&&(this.handleEnd(a,this.#response),this.#cleanCurrentTool()),this.#response+=a,this.#parent.triggerEvent("action.received"),this.#parent.triggerEvent("stream.response")}}}async execute(e,t){try{var r=new a.PendingPromise,s=(this.#response="",await fetch(e,t));if(s.ok)return this.#read(s,r),r;throw new Error("error in stream")}catch(e){console.error(e)}}}}}),n.exports.descriptor=[{im:"./api",from:"Api",name:"Api"},{im:"./jcall",from:"JCall",name:"JCall"}],n.exports.process=function({require:e,prop:t,value:r}){!e&&"Api"!==t||s("Api",e?e("./api").Api:r),!e&&"JCall"!==t||s("JCall",e?e("./jcall").JCall:r)},s("__beyond_pkg",n),s("hmr",new function(){this.on=(e,t)=>n.hmr.on(e,t),this.off=(e,t)=>n.hmr.off(e,t)}),n.initialise(i)}}});