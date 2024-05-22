System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@aimpact/ailearn-app@0.0.33.dev-01/config","@beyond-js/reactive@1.1.12/model"],function(a,e){"use strict";var t,i,s,n,r,o;return a({VoiceLab:void 0,Voice:void 0}),{setters:[function(e){t=e},function(e){i=e},function(e){s=e},function(e){n=e}],execute:function(){o=t.Bundle,(r=new o({module:{vspecifier:"@aimpact/chat-sdk@1.0.0/voice"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/kernel/core",i],["@aimpact/chat-sdk/config",s],["@beyond-js/reactive/model",n]]),(o=new Map).set("./voice-lab",{hash:3598784126,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.VoiceLab=void 0;var i=e("@beyond-js/kernel/core"),a=e("@aimpact/chat-sdk/config");class s extends i.Events{#apiKey=a.default.params.elevenlabs.key;#voiceId=a.default.params.elevenlabs.id;#url=`https://api.elevenlabs.io/v1/text-to-speech/${this.#voiceId}/stream`;#headers={"Content-Type":"application/json","xi-api-key":this.#apiKey};#audio;get audio(){return this.#audio}stop(){this.#audio&&this.#audio.pause()}#blob;get blob(){return this.#blob}async play(e){if(e){console.warn("call API");const t=await fetch(this.#url,{method:"POST",headers:this.#headers,body:JSON.stringify({text:e,voice_id:this.#voiceId,voice_settings:{stability:0,similarity_boost:0}})}),n=new MediaSource;e=URL.createObjectURL(n);this.#audio=new Audio(e),n.addEventListener("sourceopen",async()=>{const i=n.addSourceBuffer("audio/mpeg"),a=t.body.getReader(),s=async()=>{var{value:e,done:t}=await a.read();if(t)return n.endOfStream();i.appendBuffer(e),s()};s()}),this.#audio.play()}else console.warn("No hay texto para interpretar")}}t.VoiceLab=s}}),o.set("./voice",{hash:529939667,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Voice=void 0;var i=e("@beyond-js/reactive/model"),a=e("@beyond-js/kernel/core");class s extends i.ReactiveModel{#speaking=!1;get speaking(){return this.#speaking}#id;#text;get text(){return this.#text}set text(e){this.#text=e}#currentWord=-1;get currentWord(){return this.#currentWord}get paused(){return speechSynthesis.paused}#lang;get lang(){return this.#lang}set lang(e){e!==this.#lang&&(this.#lang=e,this.trigger("change"))}#instance;get instance(){return this.#instance}#rate=1.2;get rate(){return this.#rate}set rate(e){e!==this.#rate&&(this.#rate=e,this.trigger("change"))}#languages={en:"en-EN",es:"es-MX",pr:"pt-BR"};constructor({language:e,rate:t}={rate:1.25}){super(),e=e||a.languages.current,this.reactiveProps(["positionToCut","textId","playing"]),this.positionToCut=0,this.lang=e,this.rate=t,this.initialValues({lang:e,rate:t})}set({language:e,rate:t}){e&&(this.lang=e),t&&(this.rate=t)}_web(){this.#speaking&&(speechSynthesis.cancel(),this.trigger("on.finish"));var e=this.#text,e=new SpeechSynthesisUtterance(e);e.lang=this.#languages[this.lang],e.rate=this.rate,e.onstart=()=>{this.#speaking=!0,this.trigger("change")},globalThis.addEventListener("beforeunload",()=>{speechSynthesis.cancel()}),e.onpause=()=>{this.trigger("change")},e.onresume=()=>this.trigger("change"),e.onboundary=e=>{this.#currentWord=0===e.charIndex?0:e.charIndex,this.trigger("change"),this.trigger("boundary")},e.onend=()=>{this.#speaking=!1,this.#currentWord=-1,this.trigger("change"),this.trigger("on.finish")},speechSynthesis.speak(e)}play(e,t){e&&(this.#text=e),this.#id=t,globalThis.cordova?this._mobile():this._web()}stop(){speechSynthesis.cancel()}}t.Voice=s}}),r.exports.descriptor=[{im:"./voice-lab",from:"VoiceLab",name:"VoiceLab"},{im:"./voice",from:"Voice",name:"Voice"}],r.exports.process=function({require:e,prop:t,value:i}){!e&&"VoiceLab"!==t||a("VoiceLab",e?e("./voice-lab").VoiceLab:i),!e&&"Voice"!==t||a("Voice",e?e("./voice").Voice:i)},a("__beyond_pkg",r),a("hmr",new function(){this.on=(e,t)=>r.hmr.on(e,t),this.off=(e,t)=>r.hmr.off(e,t)}),r.initialise(o)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92b2ljZS1sYWIudHMiLCIvdm9pY2UudHMiXSwibmFtZXMiOlsiX2NvcmUiLCJyZXF1aXJlIiwiX2NvbmZpZyIsIlZvaWNlTGFiIiwiRXZlbnRzIiwiI2FwaUtleSIsImRlZmF1bHQiLCJwYXJhbXMiLCJlbGV2ZW5sYWJzIiwia2V5IiwiI3ZvaWNlSWQiLCJpZCIsIiN1cmwiLCJ0aGlzIiwiI2hlYWRlcnMiLCJDb250ZW50LVR5cGUiLCJ4aS1hcGkta2V5IiwiI2F1ZGlvIiwiYXVkaW8iLCJzdG9wIiwicGF1c2UiLCIjYmxvYiIsImJsb2IiLCJwbGF5IiwidGV4dCIsImNvbnNvbGUiLCJ3YXJuIiwicmVzcG9uc2UiLCJhd2FpdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwidm9pY2VfaWQiLCJ2b2ljZV9zZXR0aW5ncyIsInN0YWJpbGl0eSIsInNpbWlsYXJpdHlfYm9vc3QiLCJtZWRpYVNvdXJjZSIsIk1lZGlhU291cmNlIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJBdWRpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhc3luYyIsInNvdXJjZUJ1ZmZlciIsImFkZFNvdXJjZUJ1ZmZlciIsInJlYWRlciIsImdldFJlYWRlciIsInB1bXAiLCJ2YWx1ZSIsImRvbmUiLCJyZWFkIiwiZW5kT2ZTdHJlYW0iLCJhcHBlbmRCdWZmZXIiLCJleHBvcnRzIiwiX21vZGVsIiwiVm9pY2UiLCJSZWFjdGl2ZU1vZGVsIiwiI3NwZWFraW5nIiwic3BlYWtpbmciLCIjaWQiLCIjdGV4dCIsIiNjdXJyZW50V29yZCIsImN1cnJlbnRXb3JkIiwicGF1c2VkIiwic3BlZWNoU3ludGhlc2lzIiwiI2xhbmciLCJsYW5nIiwidHJpZ2dlciIsIiNpbnN0YW5jZSIsImluc3RhbmNlIiwiI3JhdGUiLCJyYXRlIiwiI2xhbmd1YWdlcyIsImVuIiwiZXMiLCJwciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJzdXBlciIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJyZWFjdGl2ZVByb3BzIiwicG9zaXRpb25Ub0N1dCIsImluaXRpYWxWYWx1ZXMiLCJzZXQiLCJfd2ViIiwiY2FuY2VsIiwidXR0ZXJhbmNlIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwib25zdGFydCIsImdsb2JhbFRoaXMiLCJvbnBhdXNlIiwib25yZXN1bWUiLCJvbmJvdW5kYXJ5IiwiZXZlbnQiLCJjaGFySW5kZXgiLCJvbmVuZCIsInNwZWFrIiwiY29yZG92YSIsIl9tb2JpbGUiXSwibWFwcGluZ3MiOiI2ckJBQUEsSUFBQUEsRUFBQUMsRUFBQSx3QkFBQSxFQUNBQyxFQUFBRCxFQUFBLDBCQUFBLFFBR01FLFVBQWlCSCxFQUFBSSxPQUN0QkMsUUFBVUgsRUFBQUksUUFBT0MsT0FBT0MsV0FBV0MsSUFDbkNDLFNBQVdSLEVBQUFJLFFBQU9DLE9BQU9DLFdBQVdHLEdBQ3BDQyxvREFBc0RDLEtBQUtILGtCQUUzREksU0FBVyxDQUNWQyxlQUFnQixtQkFDaEJDLGFBQWNILEtBQUtSLE8sRUFHcEJZLE9BQ0FDLFlBQ0MsT0FBT0wsS0FBS0ksTUFDYixDQUVBRSxPQUNNTixLQUFLSSxRQUNWSixLQUFLSSxPQUFPRyxNQUFLLENBQ2xCLENBRUFDLE1BQ0FDLFdBQ0MsT0FBT1QsS0FBS1EsS0FDYixDQUVBRSxXQUFXQyxHQUNWLEdBQUtBLEVBQUwsQ0FLQUMsUUFBUUMsS0FBSyxVQUFVLEVBRXZCLE1BQU1DLEVBQVdDLE1BQU1DLE1BQU1oQixLQUFLRCxLQUFNLENBQ3ZDa0IsT0FBUSxPQUNSQyxRQUFTbEIsS0FBS0MsU0FDZGtCLEtBQU1DLEtBQUtDLFVBQVUsQ0FDcEJWLEtBQUFBLEVBQ0FXLFNBQVV0QixLQUFLSCxTQUNmMEIsZUFBZ0IsQ0FDZkMsVUFBVyxFQUNYQyxpQkFBa0IsQyxFQUVuQixDLENBQ0QsRUFFS0MsRUFBYyxJQUFJQyxZQUNsQkMsRUFBV0MsSUFBSUMsZ0JBQWdCSixDQUFXLEVBQ2hEMUIsS0FBS0ksT0FBUyxJQUFJMkIs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