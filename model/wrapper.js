System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.2.0/model"],function(s,e){var r,n,a,i;return s("AiLearnWrapper",void 0),{setters:[function(e){r=e},function(e){n=e}],execute:function(){i=r.Bundle,(a=new i({module:{vspecifier:"@aimpact/ailearn-app@0.1.4-test.02/model/wrapper"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/reactive/model",n]]),(i=new Map).set("./index",{hash:3107487842,creator:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.AiLearnWrapper=void 0,e=e("@beyond-js/reactive/model"),r=r.AiLearnWrapper=new class extends e.ReactiveModel{constructor(e){super(e),this.reactiveProps(["sessionModel","sessionAssessment","currentAssignment","isTeacher","currentClassroom"])}setClassroom=async e=>{localStorage.setItem("classroom",JSON.stringify(e)),this.currentClassroom=e}}(""),globalThis.ailearn=r}}),a.exports.descriptor=[{im:"./index",from:"AiLearnWrapper",name:"AiLearnWrapper"}],a.exports.process=function({require:e,prop:r,value:n}){!e&&"AiLearnWrapper"!==r||s("AiLearnWrapper",e?e("./index").AiLearnWrapper:n)},s("__beyond_pkg",a),s("hmr",new function(){this.on=(e,r)=>a.hmr.on(e,r),this.off=(e,r)=>a.hmr.off(e,r)}),a.initialise(i)}}});