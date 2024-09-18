System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.2.0/model","@beyond-js/reactive@1.2.0/entities","@aimpact/http-suite@0.0.1/api","@aimpact/ailearn-sdk@1.0.0/config","@aimpact/chat-sdk@1.2.0/session","uuid@10.0.0","@beyond-js/kernel@0.1.9/core","@aimpact/chat-sdk@1.2.0/api"],function(s,e){"use strict";var t,i,a,r,n,o,c,d,h,p,u;return s({Credits:void 0,ICoinsCreditData:void 0,ICoinModuleConsumptionData:void 0,ICoinAssignmentConsumptionData:void 0,ICreditsConsumptionsData:void 0,LearningModules:void 0,IActivities:void 0,Activity:void 0,ActivityTypes:void 0,LearningModule:void 0,ISuggestionResponse:void 0}),{setters:[function(e){t=e},function(e){i=e},function(e){a=e},function(e){r=e},function(e){n=e},function(e){o=e},function(e){c=e},function(e){d=e},function(e){h=e}],execute:function(){u=t.Bundle,(p=new u({module:{vspecifier:"@aimpact/ailearn-sdk@1.0.0/learning-modules"},type:"ts"},e.meta.url).package()).dependencies.update([["@beyond-js/reactive/model",i],["@beyond-js/reactive/entities",a],["@aimpact/http-suite/api",r],["@aimpact/ailearn-sdk/config",n],["@aimpact/chat-sdk/session",o],["uuid",c],["@beyond-js/kernel/core",d],["@aimpact/chat-sdk/api",h]]),(u=new Map).set("./coins/credits",{hash:1574458122,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Credits=void 0;class i extends e("@beyond-js/reactive/model").ReactiveModel{get available(){return this.total-this.consumed||0}constructor(...e){super({properties:["consumed","total"],...e})}}t.Credits=i}}),u.set("./coins/index",{hash:16742768,creator:function(e,t){(class extends e("@beyond-js/reactive/model").ReactiveModel{})}}),u.set("./coins/types/coins",{hash:2316480134,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),u.set("./collection/index",{hash:1826412075,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LearningModules=void 0;var i=e("@beyond-js/reactive/entities"),s=e("../item"),a=e("./provider");class r extends i.Collection{constructor(){super({storeName:"Modules",db:"chat-api",item:s.LearningModule,provider:a.ModulesProvider,localdb:!1}),this.orderBy="timeCreated",globalThis.collection=this}async load(e){return e=await super.load(e),this.triggerEvent("items.loaded"),e}}t.LearningModules=r}}),u.set("./collection/provider",{hash:2976651968,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModulesProvider=void 0;var i=e("@beyond-js/reactive/model"),s=e("@aimpact/http-suite/api"),a=e("@aimpact/ailearn-sdk/config"),r=e("@aimpact/chat-sdk/session");class n extends i.ReactiveModel{#api;#parent;constructor(e){super(),this.#api=new s.Api(a.default.params.apis.ailearn),this.#parent=e}list=async e=>{if(this.#api.bearer(r.sessionWrapper.user.token),"community"===e.route){const{status:t,data:i}=await this.#api.get("/community/modules");return{status:t,data:{entries:i.items??[]}}}const{status:t,data:i}=await this.#api.get("/modules"+e.route);return{status:t,data:{entries:i.items??[]}}};async deleteItems(e){try{this.#api.bearer(r.sessionWrapper.user.token);var{status:t,data:i}=await this.#api.delete("/modules/drafts/"+e);if(t)return i;throw new Error("error deleting module")}catch(e){console.error(e)}}}t.ModulesProvider=n}}),u.set("./interfaces/activities",{hash:1670046334,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),u.set("./interfaces/draft-improvements",{hash:2979653217,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),u.set("./interfaces/interfaces",{hash:3371199714,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),u.set("./interfaces/learning-module",{hash:3287821027,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),u.set("./introduction/element",{hash:2604797932,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.IntroductionElement=void 0;class i extends e("@beyond-js/reactive/model").ReactiveModel{#parent;properties=["id","type","value"];constructor(e,t){super(),this.#parent=t,"assessment"===e.type&&(e.value=JSON.parse(e.value)),this.set(e)}}t.IntroductionElement=i}}),u.set("./introduction/index",{hash:23176832,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Introduction=void 0;var i=e("@beyond-js/reactive/model"),s=e("@aimpact/chat-sdk/session"),a=e("@aimpact/ailearn-sdk/config"),r=e("@aimpact/http-suite/api"),n=e("./element");class o extends i.ReactiveModel{#parent;#api;#items=new Map;get items(){return this.#items}constructor(e){super(),this.#parent=e,this.#api=new r.Api(a.default.params.apis.ailearn)}async get(e){return this.#items.get(e)}async load(){try{if(await this.isReady,!this.#parent.id)throw new Error("no LessonId to load introductions");this.#api.bearer(s.sessionWrapper.user.token);var{status:e,data:t}=await this.#api.get("/chats/introductions/"+this.#parent.id);if(!e)throw new Error("Introduction not found");Object.values(t.elements).forEach(e=>{var t=new n.IntroductionElement(e,this.#parent);this.#items.set(e.type,t)})}catch(e){console.error("error loading introduction",e)}}}t.Introduction=o}}),u.set("./introduction/interfaces",{hash:4198660095,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),u.set("./item/activities/index",{hash:4089825190,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Activities=void 0;var i=e("@beyond-js/reactive/model"),s=e("@aimpact/http-suite/api"),a=e("@aimpact/ailearn-sdk/config"),r=e("../../suggestions"),n=e("./item"),o=e("./types");class c extends i.ReactiveModel{#learningModule;#api;#parent;#suggestions;#items=new Map;properties=["types","count"];get items(){return[...this.#items.values()].sort((e,t)=>e.order-t.order)}get map(){return this.#items}get availableTypes(){return o.ActivityTypes.items}get valid(){return 0!==this.items.length&&this.items.every(e=>"completed"===e.state)}constructor(e){super(),this.#api=new s.Api(a.default.params.apis.ailearn),this.#learningModule=e,this.#suggestions=new r.Suggestions}setItems(e){e.forEach(async(e,t)=>{this.#items.has(e.id)?this.#items.get(e.id).set(e):(e=new n.Activity({...e,index:t,learningModule:this.#learningModule}),this.#items.set(e.id,e))})}async set(e){if(Array.isArray(e))return this.setItems(e);e||console.trace("what",e),await super.set(e),this.types=e.types}remove(e){if(this.#items.has(e))return this.#items.delete(e),this.trigger("change"),!0}getItems(){const t=[];return this.#items.forEach(e=>t.push(e.getData())),t}clear(){this.#items.clear(),this.trigger("change")}async add(e,t=!1){return await(e=new n.Activity({type:e,manual:t,learningModule:this.#learningModule,order:this.items.length,language:this.#learningModule.language})).isReady,this.#items.set(e.id,e),this.#learningModule.triggerEvent(),e}#saveTimeout;async reorder(e){e.forEach((e,t)=>{e.order=t}),this.#saveTimeout&&clearTimeout(this.#saveTimeout),this.#saveTimeout=setTimeout(()=>this.#learningModule.saveDraft(),500)}}t.Activities=c}}),u.set("./item/activities/item",{hash:550892104,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Activity=void 0;var i=e("./../../suggestions"),s=e("./materials"),a=e("@aimpact/http-suite/api"),r=e("@aimpact/ailearn-sdk/config"),n=e("@aimpact/chat-sdk/session"),o=e("./specs/factory"),c=e("./types"),d=e("uuid");class h extends e("@beyond-js/reactive/model").ReactiveModel{#properties=["id","type","title","description","order","objective","types","duration","materials","specs","picture","language","pictureSuggestions","types"];#dataType;get dataType(){return this.#dataType=c.ActivityTypes.get(this.type),this.#dataType}#api;#learningModule;get learningModule(){return this.#learningModule}#suggestions;#settingsType;#specs;get specs(){return this.#specs}set specs(e){this.#specs.set(e)}get defaultLanguage(){return this.#learningModule?.language}#materials;get materials(){return this.#materials}set materials(e){this.#materials.set(e)}#manual;get manual(){return this.#manual}set manual(e){this.#manual=e}get aiCompleted(){var e=c.ActivityTypes.get(this.type);return!e?.aiContent||(console.log(10,e.aiContent),e.aiContent.every(e=>["role","objective"].includes(e)?!!this.specs[e]:!!this[e]))}get state(){var e=this.#settingsType,t=(e=e.materials?e.materials?.filter(e=>e.required):[]).reduce((e,t)=>(t=t.name,Array.isArray(this.#materials[t])?this.#materials[t].length?e+1:e:[void 0,null,""].includes(this.#materials[t])?e:e+1),0),i=!!this.title&&!!this.description;return(!i||0!==t||this.specs.valid)&&i&&t===e.length&&this.specs.valid?"completed":"processing"}get prepared(){var e=this.#settingsType.specs.includes("objective");return!(!this.title||!this.description||e&&!this.specs.objective)}constructor(e){if(super(),this.reactiveProps(["type","title","description","objective","duration","language"]),this.#learningModule=e.learningModule,this.id=e.id??(0,d.v4)(),this.#specs=o.ActivitySpecsFactory.get(e.type,this.#learningModule,this),this.#settingsType=c.ActivityTypes.get(e.type),this.#materials=new s.ActivityMaterials(this,this.#learningModule,this.#settingsType.materials),!this.#settingsType)throw new Error(`Activity type ${e.type} not found`);this.set(e),this.#api=new a.Api(r.default.params.apis.ailearn),this.#manual=e.manual??!1,e.materials&&this.#materials.set(e.materials,!0),this.#suggestions=new i.Suggestions}set(t){t.materials&&this.#materials.set(t.materials),this.#properties.forEach(e=>{t.hasOwnProperty(e)&&("activities"!==e||t[e])&&(this[e]=t[e])})}getData(){const t={};return this.#properties.forEach(e=>{"specs"===e?t[e]=this[e].getData():"materials"===e?"function"==typeof this.materials?.getData&&(t[e]=this[e]?.getData()):t[e]=this[e]}),t}async generate(e){try{this.fetching=!0;var t=await this.#getSuggestions({type:"activity",id:this.#learningModule.id,activity:this.type,activityId:this.id,language:this.language,notes:e});return await this.set(t),this.#learningModule.saveDraft(),t}catch(e){throw new Error(e.message)}finally{this.fetching=!1}}async#getSuggestions(e){return e=await this.#suggestions.generate(e),await this.#learningModule.set({credits:e.credits}),e}async generatePicture(e=""){if(!e)throw new Error("Prompt is required to generate a picture for the activity.");e=(t=(t={es:{prefix:"Ilustación:",sufix:"genera la imagen en formato 16:9."},en:{prefix:"Illustration:",sufix:"generate the image in 16:9 format."},de:{prefix:"Illustration:",sufix:"generieren Sie das Bild im 16:9-Format."}})[this.language]??t.en).prefix+` ${e} `+t.sufix;var t=(await this.#suggestions.image({prompt:e,size:"1792x1024",format:"url"})).url,e=(this.#api.bearer(n.sessionWrapper.user.token),`/modules/drafts/${this.#learningModule.id}/activities/${this.id}/image`),e=await this.#api.post(e,{url:t});if(this.#learningModule.set({credits:e.data.credits}),this.#learningModule.trigger("credits.change"),this.picture=e.data.picture,this.triggerEvent("image.generated"),e.status)return this.picture;throw new Error(e.error)}async clearContent(){await this.specs.clear(),await this.materials.clear(),await this.#learningModule.saveDraft()}async save(e){return await this.set(e),this.#learningModule.saveDraft()}}t.Activity=h}}),u.set("./item/activities/materials/index",{hash:3168598565,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityMaterials=void 0;var i=e("@beyond-js/reactive/model"),s=e("@aimpact/chat-sdk/api"),a=e("@aimpact/ailearn-sdk/config"),r=e("@aimpact/chat-sdk/session");class n extends i.ReactiveModel{#elements=new Map;get elements(){return this.#elements}#items;get items(){return this.#items}#api;#parent;#learningModule;#questions;#originalData={article:"",synthesis:"",dyslexia:"",introduction:"",flashcard:{}};#emptyData={article:"",synthesis:"",introduction:"",dyslexia:"",flashcard:{}};data=[];get empty(){return!this.properties.some(e=>!!this[e])}constructor(e,t,i){super(),this.#api=new s.Api(a.default.params.apis.ailearn),this.properties=i?i.map(e=>"string"==typeof e?e:e.name):[],this.#items=i??[],this.#learningModule=t,this.#parent=e}getData(){return this.getProperties()}clear(){this.set(this.#emptyData,!0)}async generate(e,t){try{if(this.fetching=!0,"article"===e)return this.generateContent(t);this.#api.bearer(r.sessionWrapper.user.token);var i=`/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials`,{status:s,data:a}=await this.#api.post(i,{title:this.#parent.title,type:this.#parent.type,description:this.#parent.description,article:this.article,language:this.#parent.language,objective:this.#parent.specs.objective,notes:t});if(s)return await Promise.all([this.set(a),this.#learningModule.saveDraft(),this.#learningModule.set({credits:a.credits})]),this.#learningModule.trigger("credits.change"),a;throw new Error("error generating materials")}catch(e){console.error(e)}finally{this.fetching=!1}}set(t,e=!1){e&&(this.#originalData=t),this.data.push(t),this.properties.forEach(e=>{t.hasOwnProperty(e)&&(this[e]=t[e])}),this.triggerEvent()}async generateContent(e){try{this.#api.bearer(r.sessionWrapper.user.token);var t=`/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/article`,{status:i,data:s}=await this.#api.post(t,{title:this.#parent.title,objective:this.#parent.specs.objective,notes:e});if(await this.#learningModule.set({credits:s.credits}),this.#learningModule.trigger("credits.change"),i)return this.set(s),s;throw new Error("error generating article material")}catch(e){console.error(e)}finally{this.fetching=!1}}async generateAudio(e){try{this.#api.bearer(r.sessionWrapper.user.token);var t=`/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/audio`,{status:i,data:s}=await this.#api.post(t,{});if(i)return await Promise.all([this.#learningModule.set({credits:s.credits}),this.set(s)]),this.#learningModule.trigger("credits.change"),s;throw new Error("error generating article material")}catch(e){console.error(e)}finally{this.fetching=!1}}}t.ActivityMaterials=n}}),u.set("./item/activities/specs/character-talk",{hash:1511272129,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterTalkActivitySpecs=void 0;class i extends e("@beyond-js/reactive/model").ReactiveModel{#parent;#properties=["objective","character"];properties=["objective","character"];get valid(){return!!this.objective&&!!this.character}constructor(e){super(),this.reactiveProps(["character"]),this.#parent=e}set(t){let i=!1;this.#properties.forEach(e=>{t.hasOwnProperty(e)&&("questions"!==e?(this[e]=t[e],i=!0):t[e]&&(i=!0))}),i&&this.trigger("change")}getData(){const t={};return this.#properties.forEach(e=>{t[e]=this[e]}),t}}t.CharacterTalkActivitySpecs=i}}),u.set("./item/activities/specs/conversation",{hash:1872403344,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ConversationActivitySpecs=void 0;class i extends e("@beyond-js/reactive/model").ReactiveModel{#parent;#properties=["objective"];properties=["objective"];get valid(){return!!this.objective}constructor(e){super(),this.reactiveProps(["kind","description","topics","criterias","activityId"]),this.#parent=e}set(t){let i=!1;this.#properties.forEach(e=>{t.hasOwnProperty(e)&&("questions"!==e?(this[e]=t[e],i=!0):t[e]&&(i=!0))}),i&&this.trigger("change")}getData(){const t={};return this.#properties.forEach(e=>{t[e]=this[e]}),t}}t.ConversationActivitySpecs=i}}),u.set("./item/activities/specs/factory",{hash:3776427608,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivitySpecsFactory=void 0;var i=e("./"),s=e("./multiple-choice"),e=e("./spoken");class a{static TYPES={default:i.ActivitySpecs,"multiple-choice":s.MultipleChoiceActivitySpecs,spoken:e.SpokenActivitySpecs};static get(e,t,i){return new(this.TYPES[e]||this.TYPES.default)(e,t,i)}}t.ActivitySpecsFactory=a}}),u.set("./item/activities/specs/index",{hash:917170919,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivitySpecs=void 0;var i=e("@beyond-js/reactive/model"),a=e("@aimpact/chat-sdk/api"),r=e("@aimpact/ailearn-sdk/config"),n=e("../types"),o=e("../../../suggestions");class s extends i.ReactiveModel{#parent;properties=["objective","instructions"];#api;suggestions;learningModule;get valid(){return this.isValid}get isValid(){return this.properties.reduce((e,t)=>!!this[t]&&e,!0)}get hasValues(){return this.properties.some(e=>"objective"!==e&&(this[e]&&Array.isArray(this[e])?0<this[e].length:!!this[e]))}get empty(){return!this.hasValues}#type;get type(){return this.#type}constructor(e,t,i){super();var s=n.ActivityTypes.get(e);if(this.learningModule=t,this.parent=i,this.#type=e,!s)throw new Error(`Activity type ${e} not found`);this.suggestions=new o.Suggestions,this.#api=new a.Api(r.default.params.apis.ailearn),this.properties=Array.isArray(s.specs)?s.specs:[],this.#parent=i}set(t){let i=!1;this.properties.forEach(e=>{t.hasOwnProperty(e)&&(i=!0,t[e])&&(this[e]=t[e])}),i&&this.trigger("change")}getData(){const t={};return this.properties.forEach(e=>t[e]=this[e]),t}async generate(e,t){this.fetching=!0;try{var i=await this.suggestions.generate({type:"specifications",id:this.learningModule.id,activityId:this.#parent.id,activity:this.type,notes:"string"==typeof e?e:e?.notes,...t});return await this.set(i),this.learningModule.saveDraft(),this.trigger("specs.generated"),i}catch(e){throw this.fetching=!1,e}}clear(){this.properties.forEach(e=>{"objective"!==e&&(this[e]=void 0)}),this.trigger("change")}}t.ActivitySpecs=s}}),u.set("./item/activities/specs/multiple-choice/index",{hash:2904385456,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MultipleChoiceActivitySpecs=void 0;var i=e("../"),a=e("./questions");class s extends i.ActivitySpecs{#parent;properties=["questions","related"];#questions=[];get questions(){return this.#questions}get valid(){return 0<this.questions.length&&this.#questions.every(e=>e.valid)}get isValid(){return this.valid}get questionLabels(){return this.questions.map(e=>e.question)}set(i){let s=!1;this.properties.forEach(e=>{var t;"questions"===e&&i.hasOwnProperty(e)?(i[e]&&(s=!0),t=i[e]?.map((e,t)=>((t=this.#questions[t]??new a.ActivityQuestion(this.parent)).set("string"==typeof e?{question:e}:e),t)),this.#questions=t):i.hasOwnProperty(e)&&(s=!0,this[e]=i[e])}),s&&this.trigger("change")}getData(){const t={};return this.properties.forEach(e=>{t[e]="questions"===e?this[e].map(e=>e.getData()):this[e]}),t}clear(){this.properties.forEach(e=>{"questions"===e?this.#questions=[]:"objective"!==e&&(this[e]=void 0)}),this.trigger("change")}addAnswer(e,t){this.#questions[e]?(this.#questions[e].addOption(t),this.triggerEvent()):console.warn("Question not found, index:",e)}async generate(e,{related:t}){return(t=await this.suggestions.generate({type:"questions",id:this.learningModule.id,related:t,notes:"string"==typeof e?e:e?.notes})).error||(this.set(t),this.learningModule.saveDraft(),this.trigger("specs.generated")),t}async generateAnswers({notes:e,question:t}){try{return this.fetching=!0,(await this.suggestions.generate({type:"answers",id:this.learningModule.id,question:t??this.question,notes:e})).options}catch(e){throw new Error(e.message)}finally{this.fetching=!1}}}t.MultipleChoiceActivitySpecs=s}}),u.set("./item/activities/specs/multiple-choice/questions/index",{hash:3924675292,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityQuestion=void 0;var i=e("@beyond-js/reactive/model"),s=e("uuid"),a=e("../../../../../suggestions"),r=e("@aimpact/ailearn-sdk/config"),n=e("@aimpact/chat-sdk/api");class o extends i.ReactiveModel{#parent;suggestions;properties=["question","options","correctAnswer"];#api;get valid(){return!!this.question&&1<this.options.length&&void 0!==this.correctAnswer&&null!==this.correctAnswer}constructor(e){super(),this.id=(0,s.v4)(),this.#parent=e,this.learningModule=e.learningModule,this.options=[],this.suggestions=new a.Suggestions,this.#api=new n.Api(r.default.params.apis.ailearn)}set(t){this.properties.forEach(e=>{"correctAnswer"===e&&(this[e]=t.correct_answer),t.hasOwnProperty(e)&&(this[e]=t[e])})}getData(){const t={};return this.properties.forEach(e=>{t[e]=this[e]}),t}addOption(e){return!!this.question&&1<this.options.length&&![void 0,null,NaN].includes(this.correctAnswer)}removeOption(e){this.options.splice(e,1),this.triggerEvent()}setCorrect(e){this.correctAnswer!==e&&(this.correctAnswer=e,this.triggerEvent())}async generateAnswers({notes:e,question:t}){try{this.fetching=!0;var i=await this.suggestions.generate({type:"answers",id:this.learningModule.id,question:t??this.question,notes:e});return this.trigger("specs.generated"),i.options}catch(e){throw new Error(e.message)}finally{this.fetching=!1}}}t.ActivityQuestion=o}}),u.set("./item/activities/specs/multiple-choice/questions/option",{hash:3165191194,creator:function(e,t){}}),u.set("./item/activities/specs/spoken",{hash:3202177657,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SpokenActivitySpecs=void 0;class i extends e("./").ActivitySpecs{properties=["objective","criteria","task","assessment"];#defaultValues={criteria:[],task:"",assessment:""};#criteria=[];get criteria(){return this.#criteria}set criteria(e){this.#criteria=e}get valid(){return this.properties.reduce((e,t)=>!(!this[t]||Array.isArray(this[t])&&!this[t].length)&&e,!0)}constructor(e,t,i){super(e,t,i),this.set(this.#defaultValues)}get isValid(){return this.properties.reduce((e,t)=>!!this[t]&&e,!0)}set(i){let s=!1;this.properties.forEach(e=>{s=!0;var t="criteria"!==e||i[e]?i[e]:[];i.hasOwnProperty(e)&&(this[e]=t)}),s&&this.trigger("change")}async clear(){await this.set(this.#defaultValues),this.trigger("change")}}t.SpokenActivitySpecs=i}}),u.set("./item/activities/types",{hash:2308661213,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityTypes=void 0,t.ActivityTypes=new class{#types=[{id:"content-theory",name:"Content/Theory",specs:["objective"],aiContent:["title","description","objective"],materials:[{name:"article"},{dependencies:"article",name:"synthesis"},{dependencies:"article",name:"dyslexia"},{dependencies:["article"],name:"audios"}],fields:["language"]},{id:"debate",name:"Debate",specs:["objective","subject"],aiContent:["title","description","objective"]},{id:"character-talk",name:"Character Talk",specs:["objective","role"],aiContent:["title","description","objective","role"],fields:["language"]},{id:"multiple-choice",name:"Multiple-Choice",specs:["questions"],materials:[],suggestions:"questions",fields:["questions","language"]},{id:"spoken",name:"Spoken",aiContent:["title","description","objective"],fields:["language"],specs:["objective","assessment","task",{name:"criteria",fields:["name","subject"]}]}];get items(){return this.#types}#map=new Map;get entries(){return this.#map}constructor(){this.#types.forEach(e=>{this.#map.set(e.id,e)})}get(e){return this.#map.get(e)}}}}),u.set("./item/assignments/collection",{hash:2276502694,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleAssignments=void 0;var i=e("@beyond-js/reactive/model"),s=e("./item"),a=e("@aimpact/http-suite/api"),r=e("@aimpact/ailearn-sdk/config"),n=e("@aimpact/chat-sdk/session");class o extends i.ReactiveModel{#parent;#map=new Map;#api;get entries(){return this.#map}get items(){return Array.from(this.#map.values())}#classrooms=new Map;get classrooms(){return this.#classrooms}constructor(e){super(),this.#api=new a.Api(r.default.params.apis.ailearn),this.orderBy="timeCreated",this.#parent=e}set(e){if(!Array.isArray(e))throw new Error("Items must be an array");e.forEach(e=>{var t=this.#map.has(e.id)?this.#map.get(e.id):new s.ModuleAssignment(this.#parent,e);this.#map.set(e.id,t),this.#classrooms.set(e.classroom.id,t)})}async add(e){var t,i={moduleId:this.#parent.id,classroomId:e};if(this.#api.bearer(n.sessionWrapper.user.token),(i=await this.#api.post("/assignments",i)).status)return t=new s.ModuleAssignment(this.#parent,i.data),this.#map.set(i.data.id,t),this.#classrooms.set(e,t),this.#parent.trigger("change"),t;throw new Error(i.error)}}t.ModuleAssignments=o}}),u.set("./item/assignments/item",{hash:3596087344,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleAssignment=void 0;class i extends e("@beyond-js/reactive/model").ReactiveModel{#parent;get dashboard(){return`/assignments/${this.id}/dashboard/classroom`}get link(){return"/assignments/"+this.id}constructor(e,t){super({properties:["classroom","id"]}),this.#parent=e,this.set(t)}}t.ModuleAssignment=i}}),u.set("./item/index",{hash:3005310635,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LearningModule=void 0;var i=e("@aimpact/ailearn-sdk/config"),r=e("@aimpact/chat-sdk/session"),s=e("@aimpact/http-suite/api"),a=e("@beyond-js/reactive/entities"),n=e("../suggestions"),o=e("./activities"),c=e("./assignments/collection"),d=e("./provider"),h=e("../coins/credits");class p extends a.Item{properties=["id","title","description","status","userId","sessions","picture","duration","ia","audience","language","objective","audience","duration","audience","public","playground","totalActivities","target","duration","type","owner","creator","timeCreated","timeUpdated","pictureSuggestions","state","manual"];#activities;get activities(){return this.#activities}set activities(e){this.#activities.clear(),this.#activities.set(e),this.triggerEvent()}#saved;get saved(){return this.#saved}get valid(){return!!(this.id&&this.title&&this.description&&this.objective)}get completed(){return this.valid&&this.activities.valid}#assignments;get assignments(){return this.#assignments}#api;#credits;get credits(){return{...this.#credits.getProperties(),available:this.#credits.available}}set credits(e){this.#credits.set(e)}#suggestions;static instances=new Map;constructor({id:e=void 0,type:t="module"}={}){super({id:e,localdb:!1,provider:d.ModuleProvider}),this.initialise(),this.#suggestions=new n.Suggestions,this.reactiveProps(["fetchingDraft"]),this.#activities=new o.Activities(this),this.#assignments=new c.ModuleAssignments(this),this.#credits=new h.Credits,this.#activities.on("change",this.triggerEvent),this.#api=new s.Api(i.default.params.apis.ailearn),this.type=t,this.contents={characteristics:0},globalThis.model=this}async processLoad(e){this.#saved=!0}async set(e){super.set(e),e.assignments&&this.#assignments.set(e.assignments),this.owner||(this.owner=this.creator),this.credits=e.credits,e.activities&&this.#activities.set(e.activities)}async getModuleSuggestion(e){try{this.fetchingDraft=!0,this.set(e);var t=await this.#getSuggestions({id:this.id,objective:this.objective,type:"module",observations:e.notes,notes:e.notes});t.title||console.warn("the activity was generated without title",t),await this.set({...t,id:t.id,state:"mudule-generated"}),await this.saveDraft({state:"confirmed"}),this.fetchingDraft=!1,this.triggerEvent("activities.generated")}catch(e){throw new Error("ERR_GENERATING_ACTIVITIES")}finally{this.fetchingDraft=!1}}async saveDraft(e={}){return e={...this.getProperties(),...e,activities:this.activities.getItems(),type:"draft"},this.#saved=!0,e=super.publish(e),p.instances.set(this.id,this),e}async refineActivities({observations:e}){var t={duration:this.duration,description:this.description,observations:e,notes:e,target:this.target,objective:this.objective,id:this.id,audience:this.audience},t=await this.#getSuggestions({type:"activities",...t,observations:e,notes:e,totalActivities:5,activities:this.activities.getItems()});return this.set(t),this.triggerEvent("activities.generated"),t}async getObjectiveImprovements({objective:e}){try{return this.fetching=!0,await this.#getSuggestions({type:"objective",id:this.id,objective:e})}catch(e){throw new Error("ERR_GENERATING_ACTIVITIES")}finally{this.fetching=!1}}async#getSuggestions(e){return e=await this.#suggestions.generate(e),await this.#credits.set(e.credits),this.trigger("credits.change"),e}async generateObjective({objective:e,improvements:t}){try{return this.fetching=!0,await this.#getSuggestions({type:"objective-refinements",improvements:t,id:this.id,objective:e})}catch(e){throw new Error("ERR_GENERATING_ACTIVITIES")}finally{this.fetching=!1}}async publish(e){return this.type="module",super.publish(e)}async generatePicture(e=""){try{if(!e)throw new Error("Prompt is required");var t={es:{prefix:"Ilustación:",sufix:"genera la imagen en formato 16:9."},en:{prefix:"Illustration:",sufix:"generate the image in 16:9 format."},de:{prefix:"Illustration:",sufix:"generieren Sie das Bild im 16:9-Format."}},i=t[this.language]??t.en,s=(e=i.prefix+` ${e} `+i.sufix,await this.#suggestions.image({prompt:e,size:"1792x1024",format:"url"})),a=(this.#api.bearer(r.sessionWrapper.user.token),await this.#api.post(`/modules/drafts/${this.id}/image`,{url:s.url}));if(await this.#credits.set(a.data.credits),this.trigger("credits.change"),this.picture=a.data.picture+"?"+performance.now(),this.triggerEvent("image.generated"),a.status)return this.picture;throw new Error("error saving image")}catch(e){console.error(e)}}consumeCoins=async()=>{var e=await this.provider.consumeCoins();return e.status&&(await this.set(e.data),this.trigger("credits.change","add")),e};clone(...e){return this.provider.clone(...e)}static async get(e){var t;return e?.id&&this.instances.has(e.id)?this.instances.get(e.id):(t=new p(e),e.id?await t.load():await t.isReady,e.id&&this.instances.set(e.id,t),t)}}t.LearningModule=p}}),u.set("./item/provider",{hash:3630162107,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleProvider=void 0;var i=e("@beyond-js/reactive/model"),s=e("@aimpact/http-suite/api"),a=e("@aimpact/ailearn-sdk/config"),r=e("@aimpact/chat-sdk/session");class n extends i.ReactiveModel{#api;#parent;constructor(e){super(),this.#api=new s.Api(a.default.params.apis.ailearn),this.#parent=e}load=async e=>{this.#api.bearer(r.sessionWrapper.user.token);var{status:t,data:i}=await this.#api.get("/modules/drafts/"+this.#parent.id);if(t)return this.#parent.set(i),this.#parent.activities.setItems(i.activities),await this.#parent.processLoad(i),{status:t,data:i};throw new Error("error loading module")};async getDraft(e){this.#api.bearer(r.sessionWrapper.user.token);var{status:e,data:t}=await this.#api.get("/modules/drafts/"+e);if(e)return t;throw new Error("error getting module draft")}async delete(){return this.#api.bearer(r.sessionWrapper.user.token),this.#api.delete("/modules/drafts/"+this.#parent.id)}async publish(e={}){return"draft"===e.type?this.saveDraft(e):(this.#api.bearer(r.sessionWrapper.user.token),this.#api.post(`/modules/drafts/${this.#parent.id}/publish`,e))}async saveDraft(e){return this.#api.bearer(r.sessionWrapper.user.token),(e=await this.#api.post("/modules/drafts",e)).status,e}async consumeCoins(){return this.#api.bearer(r.sessionWrapper.user.token),this.#api.post(`/modules/drafts/${this.#parent.id}/coins/consume`,{})}async clone({moduleId:e,ownerId:t,entity:i,type:s}){return this.#api.bearer(r.sessionWrapper.user.token),s=(e={community:`/community/modules/${e}/clone`,module:`/modules/${e}/clone`})[s]??e.module,r.sessionWrapper.user.id===t||"user"===i?this.#api.post(s,{}):this.#api.post(s,{organizationId:t,entity:i})}}t.ModuleProvider=n}}),u.set("./suggestions/index",{hash:3743550615,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Suggestions=void 0;var i=e("@beyond-js/reactive/model"),s=e("@aimpact/http-suite/api"),a=e("@aimpact/ailearn-sdk/config"),r=e("@aimpact/chat-sdk/session");class n extends i.ReactiveModel{#api;constructor(){super(),this.reactiveProps(["type","content"]),this.#api=new s.Api(a.default.params.apis.ailearn)}async generate(e){try{this.#api.bearer(r.sessionWrapper.user.token);var t,i=await this.#api.post("/suggestions",{...e});return i.status?i.data:(t=i.error["text"],t.includes("The related activity")?{error:"NO_RELATED_ACTIVITY"}:t.includes("The draft does not have the following parameters to process the suggestion:")?{error:"INCOMPLETE_MODULE",fields:t.split(":")[1]}:{error:t})}catch(e){throw new Error(e.message)}}async image(e){if(this.#api.bearer(r.sessionWrapper.user.token),(e=await this.#api.post("/images/generate",{language:"es",...e})).status)return e.data[0];throw new Error(e.error.code)}}t.Suggestions=n}}),u.set("./suggestions/interfaces/index",{hash:2888578579,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),p.exports.descriptor=[{im:"./coins/credits",from:"Credits",name:"Credits"},{im:"./coins/types/coins",from:"ICoinsCreditData",name:"ICoinsCreditData"},{im:"./coins/types/coins",from:"ICoinModuleConsumptionData",name:"ICoinModuleConsumptionData"},{im:"./coins/types/coins",from:"ICoinAssignmentConsumptionData",name:"ICoinAssignmentConsumptionData"},{im:"./coins/types/coins",from:"ICreditsConsumptionsData",name:"ICreditsConsumptionsData"},{im:"./collection/index",from:"LearningModules",name:"LearningModules"},{im:"./interfaces/activities",from:"IActivities",name:"IActivities"},{im:"./item/activities/item",from:"Activity",name:"Activity"},{im:"./item/activities/types",from:"ActivityTypes",name:"ActivityTypes"},{im:"./item/index",from:"LearningModule",name:"LearningModule"},{im:"./suggestions/interfaces/index",from:"ISuggestionResponse",name:"ISuggestionResponse"}],p.exports.process=function({require:e,prop:t,value:i}){!e&&"Credits"!==t||s("Credits",e?e("./coins/credits").Credits:i),!e&&"ICoinsCreditData"!==t||s("ICoinsCreditData",e?e("./coins/types/coins").ICoinsCreditData:i),!e&&"ICoinModuleConsumptionData"!==t||s("ICoinModuleConsumptionData",e?e("./coins/types/coins").ICoinModuleConsumptionData:i),!e&&"ICoinAssignmentConsumptionData"!==t||s("ICoinAssignmentConsumptionData",e?e("./coins/types/coins").ICoinAssignmentConsumptionData:i),!e&&"ICreditsConsumptionsData"!==t||s("ICreditsConsumptionsData",e?e("./coins/types/coins").ICreditsConsumptionsData:i),!e&&"LearningModules"!==t||s("LearningModules",e?e("./collection/index").LearningModules:i),!e&&"IActivities"!==t||s("IActivities",e?e("./interfaces/activities").IActivities:i),!e&&"Activity"!==t||s("Activity",e?e("./item/activities/item").Activity:i),!e&&"ActivityTypes"!==t||s("ActivityTypes",e?e("./item/activities/types").ActivityTypes:i),!e&&"LearningModule"!==t||s("LearningModule",e?e("./item/index").LearningModule:i),!e&&"ISuggestionResponse"!==t||s("ISuggestionResponse",e?e("./suggestions/interfaces/index").ISuggestionResponse:i)},s("__beyond_pkg",p),s("hmr",new function(){this.on=(e,t)=>p.hmr.on(e,t),this.off=(e,t)=>p.hmr.off(e,t)}),p.initialise(u)}}});