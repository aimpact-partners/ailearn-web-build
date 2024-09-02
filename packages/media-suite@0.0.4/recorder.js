System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/events@0.0.7/events","@beyond-js/reactive@1.2.0/model"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","1.2.0"],["media-suite","0.0.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/reactive@1.2.0/model', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/media-suite/recorder.0.0.4.js
var recorder_0_0_4_exports = {};
__export(recorder_0_0_4_exports, {
  Recorder: () => Recorder,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(recorder_0_0_4_exports);

// node_modules/media-suite/recorder/recorder.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/reactive@1.2.0/model"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "media-suite@0.0.1-beta.1/recorder"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/reactive/model", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 2533696947,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Recorder = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _model = require2("@beyond-js/reactive/model");
    class Recorder2 extends _model.ReactiveModel {
      #initialised = false;
      #source;
      #stream;
      #startTime;
      #initPromise;
      #stopPromise;
      #audioContext;
      #recordingPromise;
      #mediaRecorder;
      #chunks = [];
      get chunks() {
        return this.#chunks;
      }
      #status;
      get status() {
        return this.#status;
      }
      #recording = false;
      get recording() {
        return this.#recording;
      }
      #error;
      get error() {
        return this.#error;
      }
      get valid() {
        return !this.#error;
      }
      #audio;
      get audio() {
        return this.#audio;
      }
      #analyser;
      get analyser() {
        return this.#analyser;
      }
      #speechRecognition;
      #transcription = "";
      get transcription() {
        return this.#transcription;
      }
      #promiseSpeech;
      #permissions;
      #permissionObserver;
      #permissionState;
      constructor() {
        super();
        this.init();
      }
      async hasPermissions() {
        try {
          await navigator.mediaDevices.getUserMedia({
            audio: true
          });
          return true;
        } catch (e) {
          console.log("aja");
          this.#error = e;
          return false;
        }
      }
      async init() {
        try {
          const permissions = await navigator.permissions.query({
            name: "microphone"
          });
          this.#permissions = permissions.state === "granted";
          this.#permissionObserver = permissions;
          this.#permissionState = permissions.state;
          permissions.onchange = this.#onChangeStatus.bind(this);
        } catch (e) {} finally {
          this.ready = true;
        }
      }
      #onChangeStatus() {
        this.#permissionState = this.#permissionObserver.state;
        this.trigger("change");
      }
      getSpeechRecognition() {
        this.#speechRecognition = new webkitSpeechRecognition();
        this.#speechRecognition.lang = "es-ES";
        this.#speechRecognition.continuous = true;
        this.#speechRecognition.interimResults = true;
        this.#promiseSpeech = new _core.PendingPromise();
        this.#speechRecognition.onresult = event => {
          let interimTranscript = "";
          let finalTranscript = "";
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
              this.#transcription = finalTranscript;
              this.#promiseSpeech.resolve(this.#transcription);
            } else {
              interimTranscript += event.results[i][0].transcript;
            }
          }
        };
        this.#speechRecognition.onerror = event => console.error("error in transcription");
        this.#speechRecognition.start();
      }
      #onDataAvailable = event => {
        if (event.data.size === 0) return;
        this.#chunks.push(event.data);
        this.trigger("dataavailable");
      };
      #startRecording = (stream, specs) => {
        this.#mediaRecorder = new MediaRecorder(stream);
        this.#stream = stream;
        this.#audioContext = new (globalThis.AudioContext || globalThis.webkitAudioContext)();
        this.#analyser = this.#audioContext.createAnalyser();
        this.#source = this.#audioContext.createMediaStreamSource(stream);
        if (specs.analyser) this.#source.connect(this.#analyser);
        if (specs.speechRecognition && "webkitSpeechRecognition" in globalThis) {
          this.getSpeechRecognition();
        }
        this.#mediaRecorder.addEventListener("dataavailable", this.#onDataAvailable);
      };
      async initialise(specs = {}) {
        if (this.#initPromise) return await this.#initPromise;
        this.#initPromise = new _core.PendingPromise();
        globalThis?.navigator.mediaDevices.getUserMedia({
          audio: true
        }).then(stream => this.#startRecording(stream, specs)).catch(error => {
          this.#error = error.message;
          this.#initPromise.reject();
        }).finally(() => {
          this.#initialised = true;
          this.#initPromise.resolve();
        });
        return this.#initPromise;
      }
      record(specs = {
        analyser: true
      }) {
        try {
          if (this.#recordingPromise) return this.#recordingPromise;
          this.#recordingPromise = new _core.PendingPromise();
          if (this.#recording) {
            throw new Error("Wait for recorder to be stopped and transcription ready");
          }
          this.#status = "started";
          this.#recording = true;
          this.trigger("change");
          globalThis?.navigator.mediaDevices.getUserMedia({
            audio: true
          }).then(async stream => {
            this.#startRecording(stream, specs);
            this.#recordingPromise.resolve();
            this.#initialised = true;
            this.#mediaRecorder?.start();
          }).catch(error => {
            console.error(error);
            this.#error = error.message;
            this.#recordingPromise.reject();
          });
          return this.#recordingPromise;
        } catch (e) {} finally {}
      }
      stopStream = () => {
        this.#stream.getTracks().forEach(track => track.stop());
      };
      stop() {
        if (!this.#mediaRecorder) {
          console.warn("this.#mediaRecorder no initialize");
          return;
        }
        if (this.#stopPromise) return this.#stopPromise;
        this.#stopPromise = new _core.PendingPromise();
        if (!this.#recording) throw new Error("Recorder is not currently recording");
        this.#status = "stopped";
        const stop = () => {
          this.#chunks = [];
          this.#recording = false;
          this.#mediaRecorder.addEventListener("stop", async () => {
            const audio = new Blob(this.#chunks, {
              type: this.#mediaRecorder.mimeType
            });
            this.#audio = audio;
            const onFinish = () => {
              this.#stopPromise.resolve(audio);
              this.#stopPromise = void 0;
            };
            if (this.#promiseSpeech) {
              this.#promiseSpeech.then(onFinish);
            } else {
              if (this.#stopPromise) {
                onFinish();
              }
            }
            if (this.#recordingPromise) {
              this.#recordingPromise.resolve(audio);
              this.#recordingPromise = void 0;
            }
            this.stopStream();
            this.#mediaRecorder = void 0;
            this.#stream = void 0;
            this.#initPromise = void 0;
          });
          this.#mediaRecorder?.stop();
          this.#speechRecognition?.stop();
          this.trigger("change");
        };
        this.#initialised ? stop() : this.record().then(stop);
        return this.#stopPromise;
      }
    }
    exports.Recorder = Recorder2;
  }
});
ims.set("./interface", {
  hash: 939057662,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "Recorder",
  "name": "Recorder"
}];
var Recorder;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Recorder") && (Recorder = require2 ? require2("./index").Recorder : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21lZGlhLXN1aXRlL3JlY29yZGVyLjAuMC40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21lZGlhLXN1aXRlL3JlY29yZGVyL19fc291cmNlcy9yZWNvcmRlci9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9tZWRpYS1zdWl0ZS9yZWNvcmRlci9fX3NvdXJjZXMvcmVjb3JkZXIvaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbInJlY29yZGVyXzBfMF80X2V4cG9ydHMiLCJfX2V4cG9ydCIsIlJlY29yZGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9jb3JlIiwicmVxdWlyZTIiLCJfbW9kZWwiLCJSZWNvcmRlcjIiLCJSZWFjdGl2ZU1vZGVsIiwiaW5pdGlhbGlzZWQiLCJzb3VyY2UiLCJzdHJlYW0iLCJzdGFydFRpbWUiLCJpbml0UHJvbWlzZSIsInN0b3BQcm9taXNlIiwiYXVkaW9Db250ZXh0IiwicmVjb3JkaW5nUHJvbWlzZSIsIm1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJzdGF0dXMiLCJyZWNvcmRpbmciLCJlcnJvciIsInZhbGlkIiwiYXVkaW8iLCJhbmFseXNlciIsInNwZWVjaFJlY29nbml0aW9uIiwidHJhbnNjcmlwdGlvbiIsInByb21pc2VTcGVlY2giLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25PYnNlcnZlciIsInBlcm1pc3Npb25TdGF0ZSIsImNvbnN0cnVjdG9yIiwiaW5pdCIsImhhc1Blcm1pc3Npb25zIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsIm5hbWUiLCJzdGF0ZSIsIm9uY2hhbmdlIiwib25DaGFuZ2VTdGF0dXMiLCJiaW5kIiwicmVhZHkiLCIjb25DaGFuZ2VTdGF0dXMiLCJ0cmlnZ2VyIiwiZ2V0U3BlZWNoUmVjb2duaXRpb24iLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJQZW5kaW5nUHJvbWlzZSIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsImkiLCJyZXN1bHRJbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJpc0ZpbmFsIiwidHJhbnNjcmlwdCIsInJlc29sdmUiLCJvbmVycm9yIiwic3RhcnQiLCJvbkRhdGFBdmFpbGFibGUiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJzdGFydFJlY29yZGluZyIsIiNzdGFydFJlY29yZGluZyIsInNwZWNzIiwiTWVkaWFSZWNvcmRlciIsImdsb2JhbFRoaXMiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjcmVhdGVBbmFseXNlciIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiY29ubmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXNlIiwidGhlbiIsImNhdGNoIiwibWVzc2FnZSIsInJlamVjdCIsImZpbmFsbHkiLCJyZWNvcmQiLCJFcnJvciIsInN0b3BTdHJlYW0iLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwid2FybiIsIkJsb2IiLCJ0eXBlIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHNCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsc0JBQUE7RUFBQUUsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsc0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7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