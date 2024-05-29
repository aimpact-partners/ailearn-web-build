System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/reactive@1.1.12/model"],function(s,e){"use strict";var t,r,a,n,i;return s({Api:void 0,JCall:void 0}),{setters:[function(e){t=e},function(e){r=e},function(e){a=e}],execute:function(){i=t.Bundle,(n=new i({module:{vspecifier:"@aimpact/chat-sdk@1.0.0/api"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/core",r],["@beyond-js/reactive/model",a]]),(i=new Map).set("./api",{hash:3049452603,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Api=void 0;var r=e("@beyond-js/kernel/core"),s=e("./jcall");class a extends r.Events{#url;get url(){return this.#url??""}#fetcher;get actions(){return this.#fetcher.actions}get streamResponse(){return this.#fetcher.streamResponse}get metadata(){return this.#fetcher.metadata}constructor(e){super(),this.#url=e,this.#fetcher=new s.JCall,this.#fetcher.on("action.received",()=>this.trigger("action.received")),this.#fetcher.on("stream.response",this.#getResponse)}#getResponse=()=>{this.trigger("stream.response")};async action(e="get",t,r={}){return this.#fetcher[e](this.getURL(t),r)}getURL(e){return""+this.#url+e}bearer(e){return this.#fetcher.bearer(e),this}get(e,t){return this.action("get",e,t)}post(e,t){return this.action("post",e,t)}put(e,t){return this.action("put",e,t)}delete(e,t){return this.action("delete",e,t)}stream(e,t={}){return this.action("stream",e,t)}}t.Api=a}}),i.set("./jcall",{hash:3517965285,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.JCall=void 0;var r=e("@beyond-js/reactive/model"),s=e("./stream");class a extends r.ReactiveModel{get actions(){return this.#streamer.actions}get streamResponse(){return this.#streamer.response}#bearer;bearer(e){return e&&(this.#bearer=e),this}#streamer;constructor(){super(),this.#streamer=new s.Stream(this)}getHeaders=(t,e)=>{let r=new Headers;var s=t.bearer||this.#bearer;return s&&r.append("Authorization","Bearer "+s),t.bearer&&delete t.bearer,Object.keys(t).forEach(e=>{"bearer"!==e&&r.append(e,t[e])}),e&&r.delete("Content-Type"),r};#formData;formData=t=>{return this.#formData=new FormData,Object.keys(t).forEach(e=>{this.#formData.append(e,t[e])}),this.#formData};#processGetParams(e){if(0===Object.entries(e).length&&e.constructor===Object)return"";var t=new URLSearchParams;for(const r in e)[NaN,void 0,""].includes(e[r])||t.append(r,e[r]);return t}#processPostParams=(e,t)=>{var r=0===Object.entries(e).length&&e.constructor===Object;if(!r)return t?this.formData(e):JSON.stringify(e)};execute=async(e,t="get",r={},s,a,n)=>{try{s=s||{};var i,o=r.multipart,c=this.getHeaders({...s,bearer:r.bearer},o),h=(delete r.multipart,delete r.bearer,{method:t,headers:c,mode:"cors"});return r.bearer&&delete r.bearer,"post"===t?h.body=this.#processPostParams(r,o):"get"===t&&(i=this.#processGetParams(r).toString())&&(e+="?"+i),a?this.#streamer.execute(e,h):(await fetch(e,h)).json()}catch(e){console.error("error jcall",e)}};stream=(e,t,r={"Content-Type":"application/json"})=>this.execute(e,"post",t,r,!0);get=(e,t,r)=>this.execute(e,"get",t);post=(e,t,r={"Content-Type":"application/json"})=>this.execute(e,"post",t,r);delete=(e,t,r={"Content-Type":"application/json"})=>this.execute(e,"DELETE",t,r);put=(e,t,r={"Content-Type":"application/json"})=>this.execute(e,"PUT",t,r)}t.JCall=a}}),i.set("./stream",{hash:3091227484,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Stream=void 0;var a=e("@beyond-js/kernel/core");t.Stream=class{#SEPARATORS={METADATA:"ÿ",START:"😸",END:"🖋️"};#metadata={started:!1,value:"",parsed:{value:void 0}};get metadata(){return this.#metadata.parsed}#actions=[];get actions(){return this.#actions}#response="";get response(){return this.#response}#parent;#currentTool={started:!1,value:"",parsed:{value:void 0}};constructor(e){this.#parent=e}#processResponse=e=>{var t=this.#metadata;try{this.#metadata.parsed.value=JSON.parse(t.value)}catch(e){console.log(t),console.error(e),this.#metadata.parsed.error="Error parsing metadata"}e.resolve({value:this.#response,...t.parsed.value}),this.#response=void 0};#cleanCurrentTool(){this.#currentTool={started:!1,value:"",parsed:{value:void 0}}}async#handleMetadata(e,t){this.#metadata.started=!0;e=e.split(this.#SEPARATORS.METADATA);return this.#metadata.value+=e[1],e[0]?t+e[0]:t}handleStart(e,t){var r=e.split(this.#SEPARATORS.START);return this.#currentTool.started=!0,e="",r[1].includes(this.#SEPARATORS.END)?(e=r[1].split(this.#SEPARATORS.END),this.#currentTool.value=e[0],this.#actions.push(e[0]),t+=this.#SEPARATORS.START+this.#currentTool.value+this.#SEPARATORS.END):(t+=r[0],this.#currentTool.value+=r[1]),t}handleEnd(e,t){e=e.split(this.#SEPARATORS.END);return this.#currentTool.value+=e[0],this.#currentTool.started=!1,this.#actions.push(this.#currentTool.value),this.#response+=this.#SEPARATORS.START+this.#currentTool.value+this.#SEPARATORS.END,e[1]}async#read(e,t){for(var r=e.body?.getReader();;){var{done:s,value:a}=await r.read(),a=(new TextDecoder).decode(a);if(s)return this.#processResponse(t);if(a.includes(this.#SEPARATORS.METADATA))this.#handleMetadata(a,this.#response);else{if(this.#metadata.started)return this.#metadata.value+=a,void this.#parent.trigger("stream.response");a.includes(this.#SEPARATORS.START)?this.handleStart(a,this.#response):this.#currentTool.started&&a.includes(this.#SEPARATORS.END)&&(this.handleEnd(a,this.#response),this.#cleanCurrentTool()),this.#response+=a,this.#parent.triggerEvent("action.received"),this.#parent.triggerEvent("stream.response")}}}async execute(e,t){try{var r=new a.PendingPromise,s=(this.#response="",await fetch(e,t));if(s.ok)return this.#read(s,r),r;throw new Error("error in stream")}catch(e){console.error(e)}}}}}),n.exports.descriptor=[{im:"./api",from:"Api",name:"Api"},{im:"./jcall",from:"JCall",name:"JCall"}],n.exports.process=function({require:e,prop:t,value:r}){!e&&"Api"!==t||s("Api",e?e("./api").Api:r),!e&&"JCall"!==t||s("JCall",e?e("./jcall").JCall:r)},s("__beyond_pkg",n),s("hmr",new function(){this.on=(e,t)=>n.hmr.on(e,t),this.off=(e,t)=>n.hmr.off(e,t)}),n.initialise(i)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcGkudHMiLCIvamNhbGwudHMiLCIvc3RyZWFtLnRzIl0sIm5hbWVzIjpbIl9jb3JlIiwicmVxdWlyZSIsIl9qY2FsbCIsIkFwaSIsIkV2ZW50cyIsIiN1cmwiLCJ1cmwiLCJ0aGlzIiwiI2ZldGNoZXIiLCJhY3Rpb25zIiwic3RyZWFtUmVzcG9uc2UiLCJtZXRhZGF0YSIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJKQ2FsbCIsIm9uIiwidHJpZ2dlciIsIiNnZXRSZXNwb25zZSIsImFjdGlvbiIsIm1ldGhvZCIsInJvdXRlIiwic3BlY3MiLCJnZXRVUkwiLCJiZWFyZXIiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsZXRlIiwic3RyZWFtIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9zdHJlYW0iLCJSZWFjdGl2ZU1vZGVsIiwiI3N0cmVhbWVyIiwicmVzcG9uc2UiLCIjYmVhcmVyIiwiU3RyZWFtIiwiZ2V0SGVhZGVycyIsIm11bHRpcGFydCIsImxldCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCIjZm9ybURhdGEiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiI3Byb2Nlc3NHZXRQYXJhbXMiLCJwYXJhbXMiLCJlbnRyaWVzIiwibGVuZ3RoIiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIk5hTiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiI3Byb2Nlc3NQb3N0UGFyYW1zIiwiZW1wdHlQYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwiZXhlY3V0ZSIsImFzeW5jIiwiaGVhZGVyc1NwZWNzIiwiZGF0YSIsInF1ZXJ5U3RyaW5nIiwibW9kZSIsImJvZHkiLCJ0b1N0cmluZyIsImF3YWl0IiwiZmV0Y2giLCJqc29uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkNvbnRlbnQtVHlwZSIsIiNTRVBBUkFUT1JTIiwiTUVUQURBVEEiLCJTVEFSVCIsIkVORCIsIiNtZXRhZGF0YSIsInN0YXJ0ZWQiLCJ2YWx1ZSIsInBhcnNlZCIsIiNhY3Rpb25zIiwiI3Jlc3BvbnNlIiwiI3BhcmVudCIsIiNjdXJyZW50VG9vbCIsInBhcmVudCIsIiNwcm9jZXNzUmVzcG9uc2UiLCJwcm9taXNlIiwicGFyc2UiLCJleGMiLCJsb2ciLCJyZXNvbHZlIiwiI2NsZWFuQ3VycmVudFRvb2wiLCIjaGFuZGxlTWV0YWRhdGEiLCJjaHVuayIsInNwbGl0IiwiaGFuZGxlU3RhcnQiLCJzcGxpdHRlZCIsInNwbGl0dGVkMiIsInB1c2giLCJoYW5kbGVFbmQiLCIjcmVhZCIsInJlYWRlciIsImdldFJlYWRlciIsImRvbmUiLCJyZWFkIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJ0cmlnZ2VyRXZlbnQiLCJQZW5kaW5nUHJvbWlzZSIsIm9rIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI2a0JBQUEsSUFBQUEsRUFBQUMsRUFBQSx3QkFBQSxFQUNBQyxFQUFBRCxFQUFBLFNBQUEsUUFFTUUsVUFBWUgsRUFBQUksT0FDakJDLEtBQ0FDLFVBQ0MsT0FBT0MsS0FBS0YsTUFBUSxFQUNyQixDQUNBRyxTQUVBQyxjQUNDLE9BQU9GLEtBQUtDLFNBQVNDLE9BQ3RCLENBQ0FDLHFCQUNDLE9BQU9ILEtBQUtDLFNBQVNFLGNBQ3RCLENBRUFDLGVBQ0MsT0FBT0osS0FBS0MsU0FBU0csUUFDdEIsQ0FDQUMsWUFBWU4sR0FDWE8sTUFBSyxFQUNMTixLQUFLRixLQUFPQyxFQUNaQyxLQUFLQyxTQUFXLElBQUlOLEVBQUFZLE1BQ3BCUCxLQUFLQyxTQUFTTyxHQUFHLGtCQUFtQixJQUFNUixLQUFLUyxRQUFRLGlCQUFpQixDQUFDLEVBQ3pFVCxLQUFLQyxTQUFTTyxHQUFHLGtCQUFtQlIsS0FBS1UsWUFBWSxDQUN0RCxDQUVBQSxhQUFlQSxLQUNkVixLQUFLUyxRQUFRLGlCQUFpQixDQUMvQixFQUNBRSxhQUFhQyxFQUFTLE1BQU9DLEVBQWVDLEVBQWdCLElBQzNELE9BQU9kLEtBQUtDLFNBQVNXLEdBQVFaLEtBQUtlLE9BQU9GLENBQUssRUFB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