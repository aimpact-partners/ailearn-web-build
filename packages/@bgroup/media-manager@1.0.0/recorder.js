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
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 2937543697,
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
            #startRecording = stream => {
              this.#mediaRecorder = new MediaRecorder(stream);
              this.#stream = stream;
              // Create an AudioContext
              this.#audioContext = new (globalThis.AudioContext || globalThis.webkitAudioContext)();
              // Create an AnalyserNode
              this.#analyser = this.#audioContext.createAnalyser();
              // Create a source from the stream and connect it to the analyser
              this.#source = this.#audioContext.createMediaStreamSource(stream);
              // this.#source.connect(this.#analyser);
              //@ts-ignore
              if ('webkitSpeechRecognition' in globalThis && 1 === 2) {
                this.getSpeechRecognition();
              } else {
                console.error('Speech recognition not supported');
              }
              this.#mediaRecorder.addEventListener('dataavailable', this.#onDataAvailable);
            };
            async initialise() {
              if (this.#initPromise) return await this.#initPromise;
              this.#initPromise = new _core.PendingPromise();
              globalThis?.navigator.mediaDevices.getUserMedia({
                audio: true
              }).then(this.#startRecording).catch(error => {
                this.#error = error.message;
                this.#initPromise.reject();
              }).finally(() => {
                this.#initialised = true;
                this.#initPromise.resolve();
              });
              return this.#initPromise;
            }
            record() {
              try {
                if (this.#recordingPromise) return this.#recordingPromise;
                // TODO - @ftovar ERROR
                // this.#chunks = [];
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
                  this.#startRecording(stream);
                  this.#recordingPromise.resolve();
                  this.#initialised = true;
                  await this.#mediaRecorder?.start();
                }).catch(error => {
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
              this.#initialised ? stop() : this.initialise().then(stop);
              return this.#stopPromise;
            }
          }
          exports.Recorder = Recorder;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfbW9kZWwiLCJSZWNvcmRlciIsIlJlYWN0aXZlTW9kZWwiLCJpbml0aWFsaXNlZCIsInNvdXJjZSIsInN0cmVhbSIsInN0YXJ0VGltZSIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJhdWRpb0NvbnRleHQiLCJyZWNvcmRpbmdQcm9taXNlIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInN0YXR1cyIsInJlY29yZGluZyIsImVycm9yIiwidmFsaWQiLCJhdWRpbyIsImFuYWx5c2VyIiwic3BlZWNoUmVjb2duaXRpb24iLCJ0cmFuc2NyaXB0aW9uIiwiaGFzUGVybWlzc2lvbnMiLCJuYXZpZ2F0b3IiLCJwZXJtaXNzaW9ucyIsInF1ZXJ5IiwibmFtZSIsInByb21pc2VTcGVlY2giLCJwZXJtaXNzaW9uU3RhdGUiLCJjb25zdHJ1Y3RvciIsImluaXQiLCJyZWFkeSIsInN0YXRlIiwib25jaGFuZ2UiLCJvbkNoYW5nZVN0YXR1cyIsImJpbmQiLCIjb25DaGFuZ2VTdGF0dXMiLCJjb25zb2xlIiwibG9nIiwidHJpZ2dlciIsImdldFNwZWVjaFJlY29nbml0aW9uIiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJsYW5nIiwiY29udGludW91cyIsImludGVyaW1SZXN1bHRzIiwiUGVuZGluZ1Byb21pc2UiLCJvbnJlc3VsdCIsImV2ZW50IiwiaW50ZXJpbVRyYW5zY3JpcHQiLCJmaW5hbFRyYW5zY3JpcHQiLCJpIiwicmVzdWx0SW5kZXgiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaXNGaW5hbCIsInRyYW5zY3JpcHQiLCJyZXNvbHZlIiwib25lcnJvciIsInN0YXJ0Iiwib25EYXRhQXZhaWxhYmxlIiwiZGF0YSIsInNpemUiLCJwdXNoIiwic3RhcnRSZWNvcmRpbmciLCJNZWRpYVJlY29yZGVyIiwiZ2xvYmFsVGhpcyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGlzZSIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJjYXRjaCIsIm1lc3NhZ2UiLCJyZWplY3QiLCJmaW5hbGx5IiwicmVjb3JkIiwiRXJyb3IiLCJlIiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJ3YXJuIiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwidW5kZWZpbmVkIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ087VUFBVyxNQUNaRSxRQUFTLFNBQVFELE1BQUEsQ0FBQUUsYUFBdUI7WUFDN0MsQ0FBQUMsV0FBWSxHQUFHLEtBQUs7WUFDcEIsQ0FBQUMsTUFBTztZQUNQLENBQUFDLE1BQU87WUFDUCxDQUFBQyxTQUFVO1lBQ1YsQ0FBQUMsV0FBWTtZQUNaLENBQUFDLFdBQVk7WUFDWixDQUFBQyxZQUFhO1lBQ2IsQ0FBQUMsZ0JBQWlCO1lBQ2pCLENBQUFDLGFBQWM7WUFFZCxDQUFBQyxNQUFPLEdBQVcsRUFBRTtZQUNwQixJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFDLFNBQVUsR0FBRyxLQUFLO1lBQ2xCLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRUEsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtB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