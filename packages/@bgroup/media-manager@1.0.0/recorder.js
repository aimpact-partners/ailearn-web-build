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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.0"], ["socket.io-client", "4.7.1"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "0.0.10"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQ2xCLElBQUksQ0FBQ2lCLFFBQVEsQ0FBQzttQkFDbEMsTUFBTTtvQkFDTixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7c0JBQ3RCQSxRQUFRLEVBQUU7OztrQkFJWixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDckMsT0FBTyxDQUFDakMsS0FBSyxDQUFDO29CQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUd1RSxTQUFTOztrQkFFbkMsSUFBSSxDQUFDVixVQUFVLEVBQUU7a0JBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUdVLFNBQVM7a0JBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUdBLFNBQVM7a0JBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUdBLFNBQVM7Z0JBQzlCLENBQUMsQ0FBQztnQkFFRixJQUFJLENBQUMsY0FBYyxFQUFFTixJQUFJLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxrQkFBa0IsRUFBRUEsSUFBSSxFQUFFO2dCQUUvQixJQUFJLENBQUNqRCxPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ3ZCLENBQUM7Y0FFRCxJQUFJLENBQUMsWUFBWSxHQUFHaUQsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDUCxNQUFNLEVBQUUsQ0FBQ0wsSUFBSSxDQUFDWSxJQUFJLENBQUM7Y0FDckQsT0FBTyxJQUFJLENBQUMsWUFBWTtZQUN6Qjs7VUFDQU87Ozs7Ozs7Ozs7O1VDN09EOztVQUVBQztZQUNBQztVQUNBIiwibmFtZXMiOlsiUmVjb3JkZXIiLCJSZWFjdGl2ZU1vZGVsIiwiY2h1bmtzIiwic3RhdHVzIiwicmVjb3JkaW5nIiwiZXJyb3IiLCJ2YWxpZCIsImF1ZGlvIiwiYW5hbHlzZXIiLCJ0cmFuc2NyaXB0aW9uIiwiaGFzUGVybWlzc2lvbnMiLCJuYXZpZ2F0b3IiLCJwZXJtaXNzaW9ucyIsInF1ZXJ5IiwibmFtZSIsImNvbnN0cnVjdG9yIiwiaW5pdCIsInJlYWR5Iiwic3RhdGUiLCJvbmNoYW5nZSIsImJpbmQiLCJjb25zb2xlIiwibG9nIiwidHJpZ2dlciIsImdldFNwZWVjaFJlY29nbml0aW9uIiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJsYW5nIiwiY29udGludW91cyIsImludGVyaW1SZXN1bHRzIiwiUGVuZGluZ1Byb21pc2UiLCJvbnJlc3VsdCIsImV2ZW50IiwiaW50ZXJpbVRyYW5zY3JpcHQiLCJmaW5hbFRyYW5zY3JpcHQiLCJpIiwicmVzdWx0SW5kZXgiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaXNGaW5hbCIsInRyYW5zY3JpcHQiLCJyZXNvbHZlIiwib25lcnJvciIsInN0YXJ0IiwiZGF0YSIsInNpemUiLCJwdXNoIiwic3RyZWFtIiwic3BlY3MiLCJNZWRpYVJlY29yZGVyIiwiZ2xvYmFsVGhpcyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJjb25uZWN0Iiwic3BlZWNoUmVjb2duaXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGlzZSIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJjYXRjaCIsIm1lc3NhZ2UiLCJyZWplY3QiLCJmaW5hbGx5IiwicmVjb3JkIiwiRXJyb3IiLCJlIiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJ3YXJuIiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIk9iamVjdCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJpbmRleC50cyIsImludGVyZmFjZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19