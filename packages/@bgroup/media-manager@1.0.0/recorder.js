System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.6/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Recorder, __beyond_pkg, hmr;
  _export("Recorder", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive116Model) {
      dependency_2 = _beyondJsReactive116Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "0.0.14"]]);
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
        hash: 2765502814,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfbW9kZWwiLCJSZWNvcmRlciIsIlJlYWN0aXZlTW9kZWwiLCJpbml0aWFsaXNlZCIsInNvdXJjZSIsInN0cmVhbSIsInN0YXJ0VGltZSIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJhdWRpb0NvbnRleHQiLCJyZWNvcmRpbmdQcm9taXNlIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInN0YXR1cyIsInJlY29yZGluZyIsImVycm9yIiwidmFsaWQiLCJhdWRpbyIsImFuYWx5c2VyIiwic3BlZWNoUmVjb2duaXRpb24iLCJ0cmFuc2NyaXB0aW9uIiwiaGFzUGVybWlzc2lvbnMiLCJuYXZpZ2F0b3IiLCJwZXJtaXNzaW9ucyIsInF1ZXJ5IiwibmFtZSIsInByb21pc2VTcGVlY2giLCJwZXJtaXNzaW9uU3RhdGUiLCJjb25zdHJ1Y3RvciIsImluaXQiLCJyZWFkeSIsInN0YXRlIiwib25jaGFuZ2UiLCJvbkNoYW5nZVN0YXR1cyIsImJpbmQiLCIjb25DaGFuZ2VTdGF0dXMiLCJ0cmlnZ2VyIiwiZ2V0U3BlZWNoUmVjb2duaXRpb24iLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJQZW5kaW5nUHJvbWlzZSIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsImkiLCJyZXN1bHRJbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJpc0ZpbmFsIiwidHJhbnNjcmlwdCIsInJlc29sdmUiLCJvbmVycm9yIiwiY29uc29sZSIsInN0YXJ0Iiwib25EYXRhQXZhaWxhYmxlIiwiZGF0YSIsInNpemUiLCJwdXNoIiwic3RhcnRSZWNvcmRpbmciLCIjc3RhcnRSZWNvcmRpbmciLCJzcGVjcyIsIk1lZGlhUmVjb3JkZXIiLCJnbG9iYWxUaGlzIiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY3JlYXRlQW5hbHlzZXIiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsImNvbm5lY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGlzZSIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJjYXRjaCIsIm1lc3NhZ2UiLCJyZWplY3QiLCJmaW5hbGx5IiwicmVjb3JkIiwiRXJyb3IiLCJlIiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJ3YXJuIiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvaW50ZXJmYWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVcsTUFDWkUsUUFBUyxTQUFRRCxNQUFBLENBQUFFLGFBQXVCO1lBQzdDLENBQUFDLFdBQVksR0FBRyxLQUFLO1lBQ3BCLENBQUFDLE1BQU87WUFDUCxDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsU0FBVTtZQUNWLENBQUFDLFdBQVk7WUFDWixDQUFBQyxXQUFZO1lBQ1osQ0FBQUMsWUFBYTtZQUNiLENBQUFDLGdCQUFpQjtZQUNqQixDQUFBQyxhQUFjO1lBRWQsQ0FBQUMsTUFBTyxHQUFXLEVBQUU7WUFDcEIsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBQyxTQUFVLEdBQUcsS0FBSztZQUNsQixJ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