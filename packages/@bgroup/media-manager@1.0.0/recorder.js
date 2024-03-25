System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.11/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Recorder, __beyond_pkg, hmr;
  _export("Recorder", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_2 = _beyondJsReactive1111Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "0.0.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/media-manager@1.0.0/recorder"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/reactive/model', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 508076268,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          /*bundle */
          class Recorder extends _model.ReactiveModel {
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
            #transcription = '';
            get transcription() {
              return this.#transcription;
            }
            async hasPermissions() {
              return navigator.permissions.query({
                name: 'microphone'
              });
            }
            #promiseSpeech;
            #permissions;
            #permissionState;
            constructor() {
              super();
              this.init();
            }
            async init() {
              this.#permissions = await navigator.permissions.query({
                name: 'microphone'
              });
              this.ready = true;
              this.#permissionState = this.#permissions.state;
              this.#permissions.onchange = this.#onChangeStatus.bind(this);
            }
            #onChangeStatus() {
              console.log(12, this.#permissions.state);
              this.#permissionState = this.#permissions.state;
              this.trigger('change');
            }
            getSpeechRecognition() {
              //@ts-ignore
              this.#speechRecognition = new webkitSpeechRecognition();
              this.#speechRecognition.lang = 'es-ES';
              this.#speechRecognition.continuous = true;
              this.#speechRecognition.interimResults = true;
              // this.#speechRecognition.lang = 'en-US'; // Change this to the desired language
              this.#promiseSpeech = new _core.PendingPromise();
              this.#speechRecognition.onresult = event => {
                let interimTranscript = '';
                let finalTranscript = '';
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
              this.#speechRecognition.onerror = event => console.error('error in transcription');
              this.#speechRecognition.start();
            }
            #onDataAvailable = event => {
              if (event.data.size === 0) return;
              this.#chunks.push(event.data);
              this.trigger('dataavailable');
            };
            #startRecording = (stream, specs) => {
              this.#mediaRecorder = new MediaRecorder(stream);
              this.#stream = stream;
              // Create an AudioContext
              this.#audioContext = new (globalThis.AudioContext || globalThis.webkitAudioContext)();
              // Create an AnalyserNode
              this.#analyser = this.#audioContext.createAnalyser();
              // Create a source from the stream and connect it to the analyser
              this.#source = this.#audioContext.createMediaStreamSource(stream);
              if (specs.analyser) this.#source.connect(this.#analyser);
              //@ts-ignore
              if (specs.speechRecognition && 'webkitSpeechRecognition' in globalThis) {
                this.getSpeechRecognition();
              }
              this.#mediaRecorder.addEventListener('dataavailable', this.#onDataAvailable);
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
                  throw new Error('Wait for recorder to be stopped and transcription ready');
                }
                this.#status = 'started';
                this.#recording = true;
                this.trigger('change');
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
              //stopping the capturing request by stopping all the tracks on the active stream
              this.#stream.getTracks() //get all tracks from the stream
              .forEach(track => track.stop()); //stop each one
            };
            stop() {
              if (!this.#mediaRecorder) {
                console.warn('this.#mediaRecorder no initialize');
                return;
              }
              if (this.#stopPromise) return this.#stopPromise;
              this.#stopPromise = new _core.PendingPromise();
              if (!this.#recording) throw new Error('Recorder is not currently recording');
              this.#status = 'stopped';
              const stop = () => {
                this.#chunks = [];
                this.#recording = false;
                this.#mediaRecorder.addEventListener('stop', async () => {
                  const audio = new Blob(this.#chunks, {
                    type: this.#mediaRecorder.mimeType
                  });
                  //@ts-ignore
                  this.#audio = audio;
                  const onFinish = () => {
                    this.#stopPromise.resolve(audio);
                    this.#stopPromise = undefined;
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
                    this.#recordingPromise = undefined;
                  }
                  this.stopStream();
                  this.#mediaRecorder = undefined;
                  this.#stream = undefined;
                  this.#initPromise = undefined;
                });
                this.#mediaRecorder?.stop();
                this.#speechRecognition?.stop();
                this.trigger('change');
              };
              this.#initialised ? stop() : this.record().then(stop);
              return this.#stopPromise;
            }
          }
          exports.Recorder = Recorder;
        }
      });

      /***************************
      INTERNAL MODULE: ./interface
      ***************************/

      ims.set('./interface', {
        hash: 939057662,
        creator: function (require, exports) {
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Recorder') && _export("Recorder", Recorder = require ? require('./index').Recorder : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfbW9kZWwiLCJSZWNvcmRlciIsIlJlYWN0aXZlTW9kZWwiLCJpbml0aWFsaXNlZCIsInNvdXJjZSIsInN0cmVhbSIsInN0YXJ0VGltZSIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJhdWRpb0NvbnRleHQiLCJyZWNvcmRpbmdQcm9taXNlIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInN0YXR1cyIsInJlY29yZGluZyIsImVycm9yIiwidmFsaWQiLCJhdWRpbyIsImFuYWx5c2VyIiwic3BlZWNoUmVjb2duaXRpb24iLCJ0cmFuc2NyaXB0aW9uIiwiaGFzUGVybWlzc2lvbnMiLCJuYXZpZ2F0b3IiLCJwZXJtaXNzaW9ucyIsInF1ZXJ5IiwibmFtZSIsInByb21pc2VTcGVlY2giLCJwZXJtaXNzaW9uU3RhdGUiLCJjb25zdHJ1Y3RvciIsImluaXQiLCJyZWFkeSIsInN0YXRlIiwib25jaGFuZ2UiLCJvbkNoYW5nZVN0YXR1cyIsImJpbmQiLCIjb25DaGFuZ2VTdGF0dXMiLCJjb25zb2xlIiwibG9nIiwidHJpZ2dlciIsImdldFNwZWVjaFJlY29nbml0aW9uIiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJsYW5nIiwiY29udGludW91cyIsImludGVyaW1SZXN1bHRzIiwiUGVuZGluZ1Byb21pc2UiLCJvbnJlc3VsdCIsImV2ZW50IiwiaW50ZXJpbVRyYW5zY3JpcHQiLCJmaW5hbFRyYW5zY3JpcHQiLCJpIiwicmVzdWx0SW5kZXgiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaXNGaW5hbCIsInRyYW5zY3JpcHQiLCJyZXNvbHZlIiwib25lcnJvciIsInN0YXJ0Iiwib25EYXRhQXZhaWxhYmxlIiwiZGF0YSIsInNpemUiLCJwdXNoIiwic3RhcnRSZWNvcmRpbmciLCIjc3RhcnRSZWNvcmRpbmciLCJzcGVjcyIsIk1lZGlhUmVjb3JkZXIiLCJnbG9iYWxUaGlzIiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY3JlYXRlQW5hbHlzZXIiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsImNvbm5lY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGlzZSIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJjYXRjaCIsIm1lc3NhZ2UiLCJyZWplY3QiLCJmaW5hbGx5IiwicmVjb3JkIiwiRXJyb3IiLCJlIiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJ3YXJuIiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvaW50ZXJmYWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVcsTUFDWkUsUUFBUyxTQUFRRCxNQUFBLENBQUFFLGFBQXVCO1lBQzdDLENBQUFDLFdBQVksR0FBRyxLQUFLO1lBQ3BCLENBQUFDLE1BQU87WUFDUCxDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsU0FBVTtZQUNWLENBQUFDLFdBQVk7WUFDWixDQUFBQyxXQUFZO1lBQ1osQ0FBQUMsWUFBYTtZQUNiLENBQUFDLGdCQUFpQjtZQUNqQixDQUFBQyxhQUFjO1lBRWQsQ0FBQUMsTUFBTyxHQUFXLEVBQUU7WUFDcEIsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBQyxTQUFVLEdBQUcsS0FBSztZ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