System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.1.12/model","@beyond-js/kernel@0.1.9/core"],function(s,e){"use strict";var t,i,r,o,a;return s("mediaDevice",void 0),{setters:[function(e){t=e},function(e){i=e},function(e){r=e}],execute:function(){a=t.Bundle,(o=new a({module:{vspecifier:"@bgroup/media-manager@1.0.0/main"},type:"code"},e.meta.url).package()).dependencies.update([["@beyond-js/reactive/model",i],["@beyond-js/kernel/core",r]]),(a=new Map).set("./desktop",{hash:1222938740,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DesktopMediaDevice=void 0;var i=e("@beyond-js/reactive/model"),n=e("./files"),s=e("./input"),c=e("./xhr");class r extends i.ReactiveModel{static instance;#selector;PLATFORM="DESKTOP";#stream;#constraints={};#inputFile;#files;#promise;get isReady(){return!0}constructor(){super(),this.#files=new n.MediaFiles(this,{})}async getUserMedia(e){return JSON.stringify(this.#constraints)!==JSON.stringify(e)&&(this.#constraints=e,this.#stream=await navigator.mediaDevices.getUserMedia(e)),this.#stream}async activateCamera(e,t){e=await this.getUserMedia(e),this.#stream=e,t.srcObject=e,this.#selector=t}static getInstance(){return r.instance||(r.instance=new r),r.instance}desactivateCamera(){this.#stream&&(this.#stream.getTracks().forEach(e=>{e.stop(),this.#stream.removeTrack(e)}),this.#selector&&(this.#selector.srcObject=void 0,this.#selector=void 0),this.#constraints=void 0,this.#stream=void 0)}async getPicture(){var e=await this.getUserMedia({video:!0,audio:!1}),e=await new globalThis.ImageCapture(e.getVideoTracks()[0]).takePhoto();return this.clean(),e}clean(){this.#constraints={},this.#stream&&(this.#stream.getTracks().forEach(e=>{e.stop(),this.#stream.removeTrack(e)}),this.#selector&&(this.#selector.srcObject=void 0,this.#selector=void 0),this.#stream=void 0)}async getVideoStream(){return this.getUserMedia({video:!0,audio:!1})}takePicture(e){}openGallery(e,t=0){}upload(e,t=0){new FormData}setInputFile(e){return this.#inputFile=new s.InputFile(e,this.#files),this.#inputFile}publish=async(e,t)=>{try{const o=new FormData;var i,s=this.#files;const a=1<s.total?t.name+"[]":t.name;for(i in console.log(1,s.entries),s.entries.forEach(e=>o.append(a,e)),t)t.hasOwnProperty(i)&&o.append(i,t[i]);var r=await(new c.XHRLoader).upload(o,e);return this.#files=new n.MediaFiles(this,{}),console.log(1,this.#files.entries),r.json()}catch(e){console.error(e)}}}t.DesktopMediaDevice=r.getInstance()}}),a.set("./file-manager",{hash:4123506600,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getUrl=function(e){return s||(s=new i.PendingPromise,globalThis.resolveLocalFileSystemURL(e,function(e){e.file(e=>{const t=new FileReader;t.onloadend=e=>{s.resolve(t.result),s=void 0},t.readAsDataURL(e)})})),s};var i=e("@beyond-js/kernel/core");let s}}),a.set("./files/index",{hash:1266923743,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MediaFiles=void 0;var i=e("@beyond-js/kernel/core");class s extends e("@beyond-js/reactive/model").ReactiveModel{#loaded=0;#specs;#type;regExp=/[^\w\d.]/g;#errors=[];#promise;get errors(){return this.#errors}_total=0;get total(){return this._total}set total(e){e!==this._total&&(this._total=e)}_items=new Map;get items(){return this._items}get entries(){return[...this._items.values()]}constructor(e,t){super(),this.#specs=t,this.#type=t.type||"any"}FILE_TYPE=Object.freeze({document:["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","text/plain","application/pdf"],image:["image/png","image/jpeg","image/gif"],json:["application/json"],zip:["application/x-zip-compressed"],audio:["audio/mpeg","audio/ogg","audio/wav","audio/webm","audio/aac","audio/flac"]});#onload=e=>{e.target?.removeEventListener&&e.target.removeEventListener("load",this.#onload),this.#specs.onload&&"function"==typeof this.#specs.onload&&this.#specs.onload(e)};#onloadend=(e,t)=>{this.#loaded=this.#loaded+1,t.src=e.target.result,this.#processFile(t),e.target?.removeEventListener&&e.target.removeEventListener("onloadend",this.#onloadend),this.triggerEvent("file.loaded"),this.#loaded===this._items.size&&this.triggerEvent("loadend"),this.#specs.onloadend&&"function"==typeof this.#specs.onloadend&&this.#specs.onload(e)};#processFile(e){var t=e.name.replace(this.regExp,"");e=this._items.get(t),this._items.set(t,e)}#onerror=e=>console.error(4,e);validate=t=>{var e=!!this.FILE_TYPE[this.#type].find(e=>e===t.type);return e||this.#errors.push(t.name.replace(this.regExp,"")),e};#readFile=async t=>{var e;"any"===this.#type||await this.validate(t)?((e=new FileReader).onload=e=>this.#onload(e),e.onloadend=e=>this.#onloadend(e,t),e.onerror=e=>this.#onerror(e),e.readAsDataURL(t)):this.triggerEvent("error")};#validateLoad=()=>{this.#loaded,this._items.size};clean=()=>{this._items=new Map,this.#loaded=0};readLocal=async t=>{var i=[];for(let e=0;e<t.length;++e){var s=t[e];this._items.set(s.name.replace(this.regExp,""),s),i.push(this.#readFile(s))}await Promise.all(i)};getMobileUrl(e){return this.#promise||(this.#promise=new i.PendingPromise,globalThis.resolveLocalFileSystemURL(e,e=>{e.file(s=>{const r=new FileReader;r.onloadend=e=>{var t=new Blob([r.result],{type:s.type}),i=s.name.replace(this.regExp,"");s.blob=t,this._items.set(i,s),this.#promise.resolve(URL.createObjectURL(t)),this.#promise=void 0},this._items.set(s.name.replace(this.regExp,""),s),r.readAsArrayBuffer(s)})})),this.#promise}}t.MediaFiles=s}}),a.set("./i-camera",{hash:1945745868,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),a.set("./index",{hash:3083892194,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.mediaDevice=void 0;var i=e("./desktop"),e=e("./mobile");let s;t.mediaDevice=(t=!1,(s=t?void 0:s)||(t=Object.freeze({MOBILE:0,DESKTOP:1}),t=globalThis.cordova?t.MOBILE:t.DESKTOP,i=Object.freeze({1:i.DesktopMediaDevice,0:e.MobileMediaDevice}),s=i[t]),s)}}),a.set("./input",{hash:2249157670,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.InputFile=void 0;class i extends e("@beyond-js/reactive/model").ReactiveModel{#input=document.createElement("input");#errors;#selector;#files;get files(){return this.#files}constructor(e,t,i={}){super(),this.#selector=e,this.#files=t,this.#files.on("error",this.getErrors),this.#files.on("loadend",this.filesLoaded),this.setAttributes(i),e&&this.create()}filesLoaded=()=>this.triggerEvent("loadend");pictureLoaded=()=>this.triggerEvent("pictureLoaded");pictureLoading=()=>this.triggerEvent("pictureLoading");getErrors=()=>console.log("error");openDialog=()=>{this.#input.click()};setAttributes=e=>{var t,i={type:"file",style:"display:none",name:"input_upload",...e=e||{}};for(t in i)this.#input.setAttribute(t,i[t])};clean=async()=>this.#files.clean();#onChangeInput=async e=>{await this.clean(),e=e.currentTarget,this.#files.total=e.files.length,this.#files.readLocal(e.files)};create(){this.#selector.after(this.#input),this.#selector&&(this.#selector.addEventListener("click",this.openDialog),this.#input.addEventListener("change",this.#onChangeInput))}}t.InputFile=i}}),a.set("./interfaces",{hash:2938605133,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}),a.set("./mobile",{hash:3878263831,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMediaDevice=t.MediaCameraDevice=void 0;var i=e("@beyond-js/reactive/model"),s=e("@beyond-js/kernel/core"),n=e("./files"),c=e("./xhr");class r extends i.ReactiveModel{#source;#selector;PLATFORM="MOBILE";static instance;#files;#DEFAULT_OPTIONS={quality:80,destinationType:globalThis.Camera?.DestinationType?.FILE_URI,sourceType:1,encodingType:globalThis.Camera?.EncodingType.JPEG,mediaType:globalThis.Camera?.MediaType.PICTURE,allowEdit:!1,correctOrientation:!0};constructor(){super(),this.#files=new n.MediaFiles(this,{})}#promise;get isReady(){return!!globalThis.Camera}get source(){return this.#source}#sourceType=0;get sourceType(){return this.#sourceType}set sourceType(e){this.#sourceType!==e&&(this.#sourceType=e)}#mediaType=globalThis.Camera?.MediaType.PICTURE;get mediaType(){return this.#mediaType}set mediaType(e){this.#mediaType!==e&&(this.#mediaType=e)}set source(e){this.#source=e}onSuccess=async function(e){e=await this.#files.getMobileUrl(e),this.#promise.resolve(e),this.#promise=void 0};onFail=e=>{console.error("Failed because: "+e),this.#promise.reject(),this.#promise=void 0};setOptions=e=>({...this.#DEFAULT_OPTIONS,...e});getPicture=e=>(this.#promise||(this.#promise=new s.PendingPromise,navigator.camera?.getPicture(e=>this.onSuccess(e),this.onFail,this.setOptions(e))),this.#promise);openGallery(e){return this.#selector=e,this.getPicture({sourceType:0})}static getInstance(){return r.instance||(r.instance=new r),r.instance}publish=async(e,t)=>{try{const o=new FormData;var i,s=this.#files;const a=1<s.total?t.name+"[]":t.name;for(i in s.entries.forEach(e=>{o.append(a,e.blob,e.name)}),t)t.hasOwnProperty(i)&&o.append(i,t[i]);var r=await(new c.XHRLoader).upload(o,e);return this.#files=new n.MediaFiles(this,{}),r.json()}catch(e){console.error(e)}}}t.MediaCameraDevice=r,t.MobileMediaDevice=r.getInstance()}}),a.set("./xhr",{hash:3466930214,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.XHRLoader=void 0;class i extends e("@beyond-js/reactive/model").ReactiveModel{promise;uploaded;progress;error;constructor(){super(),this.promise=void 0,this.uploaded=!1,this.progress=0,this.error=!1}get uploading(){return!!this.promise}get isUploaded(){return this.uploaded}get uploadProgress(){return this.progress}get hasError(){return this.error}onProgress(e){e.lengthComputable&&(e=Math.round(100*e.loaded/e.total),this.progress=parseInt(e.toString())),this.triggerEvent("change")}onCompleted(e){this.uploaded=!0,this.promise.resolve(),this.triggerEvent("change"),setTimeout(()=>{this.promise=void 0,this.triggerEvent("change")},100)}onError(e){console.error("Error uploading picture",e),this.error=!0,this.promise.reject(),this.triggerEvent("change")}onAbort(){this.promise.resolve(!1),this.triggerEvent("change")}async upload(e,t){try{return fetch(t,{method:"post",body:e})}catch(e){console.error("error",e)}}abort(){this.promise&&(this.promise.reject(),this.triggerEvent("change"))}}t.XHRLoader=i}}),o.exports.descriptor=[{im:"./index",from:"mediaDevice",name:"mediaDevice"}],o.exports.process=function({require:e,prop:t,value:i}){!e&&"mediaDevice"!==t||s("mediaDevice",e?e("./index").mediaDevice:i)},s("__beyond_pkg",o),s("hmr",new function(){this.on=(e,t)=>o.hmr.on(e,t),this.off=(e,t)=>o.hmr.off(e,t)}),o.initialise(a)}}});