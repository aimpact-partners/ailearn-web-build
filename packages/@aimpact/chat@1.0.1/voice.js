System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.2/config", "@beyond-js/reactive@1.1.6/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, VoiceLab, Voice, __beyond_pkg, hmr;
  _export({
    VoiceLab: void 0,
    Voice: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp002Config) {
      dependency_2 = _aimpactAilearnApp002Config;
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/voice"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@aimpact/chat/config', dependency_2], ['@beyond-js/reactive/model', dependency_3]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./voice-lab
      ***************************/
      ims.set('./voice-lab', {
        hash: 2319831110,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VoiceLab = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _config = require("@aimpact/chat/config");
          /*bundle*/
          class VoiceLab extends _core.Events {
            #apiKey = _config.default.params.elevenlabs.key;
            #voiceId = _config.default.params.elevenlabs.id;
            #url = `https://api.elevenlabs.io/v1/text-to-speech/${this.#voiceId}/stream`;
            #headers = {
              'Content-Type': 'application/json',
              'xi-api-key': this.#apiKey
            };
            #audio;
            get audio() {
              return this.#audio;
            }
            stop() {
              if (!this.#audio) return;
              this.#audio.pause();
            }
            #blob;
            get blob() {
              return this.#blob;
            }
            async play(text) {
              if (!text) {
                console.warn('No hay texto para interpretar');
                return;
              }
              console.warn('call API');
              const response = await fetch(this.#url, {
                method: 'POST',
                headers: this.#headers,
                body: JSON.stringify({
                  text,
                  voice_id: this.#voiceId,
                  voice_settings: {
                    stability: 0,
                    similarity_boost: 0
                  }
                })
              });
              const mediaSource = new MediaSource();
              const audioURL = URL.createObjectURL(mediaSource);
              this.#audio = new Audio(audioURL);
              mediaSource.addEventListener('sourceopen', async () => {
                const sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');
                const reader = response.body.getReader();
                const pump = async () => {
                  const {
                    value,
                    done
                  } = await reader.read();
                  if (done) return mediaSource.endOfStream();
                  sourceBuffer.appendBuffer(value);
                  pump();
                };
                pump();
              });
              this.#audio.play();
            }
          }
          exports.VoiceLab = VoiceLab;
        }
      });

      /***********************
      INTERNAL MODULE: ./voice
      ***********************/

      ims.set('./voice', {
        hash: 2125437645,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Voice = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Voice extends _model.ReactiveModel {
            #speaking = false;
            get speaking() {
              return this.#speaking;
            }
            #text;
            get text() {
              return this.#text;
            }
            set text(value) {
              this.#text = value;
            }
            #currentWord = -1;
            get currentWord() {
              return this.#currentWord;
            }
            get paused() {
              return speechSynthesis.paused;
            }
            #instance;
            get instance() {
              return this.#instance;
            }
            constructor() {
              super();
              this.reactiveProps(['lang', 'positionToCut']);
              this.positionToCut = 0;
              this.lang = 'es';
              this.rate = 1.5;
            }
            _mobile() {
              TTS.speak({
                text: this.#text,
                locale: 'es-Latn',
                rate: 0.75
              }, () => this.trigger('play.finish'), e => console.error(e));
            }
            _web() {
              if (this.#speaking) {
                speechSynthesis.cancel();
                this.trigger('on.finish');
              }
              const text = this.#text;
              const utterance = new SpeechSynthesisUtterance(text);
              utterance.lang = this.lang;
              utterance.rate = this.rate;
              utterance.onstart = () => {
                this.#speaking = true;
                this.trigger('change');
              };
              globalThis.addEventListener('beforeunload', () => {
                speechSynthesis.cancel();
              });
              utterance.onpause = () => {
                this.trigger('change');
              };
              utterance.onresume = () => this.trigger('change');
              utterance.onboundary = event => {
                this.#currentWord = event.charIndex === 0 ? 0 : event.charIndex;
                this.trigger('change');
                this.trigger('boundary');
              };
              utterance.onend = () => {
                this.#speaking = false;
                this.#currentWord = -1;
                this.trigger('change');
                this.trigger('on.finish');
              };
              speechSynthesis.speak(utterance);
            }
            play(text) {
              if (text) this.#text = text;
              globalThis.cordova ? this._mobile() : this._web();
            }
            stop() {
              if (globalThis.cordova) {
                this.#text = '';
                this.play();
                return;
              }
              speechSynthesis.cancel();
            }
            async createBlobAudioFromText(text, type = 'audio/mp3', lang = 'en-US') {
              const voices = await new Promise(resolve => {
                speechSynthesis.onvoiceschanged = () => resolve(speechSynthesis.getVoices());
              });
              const selectedVoice = voices.find(voice => voice.lang === lang);
              if (!selectedVoice) {
                throw new Error(`Voice for language ${lang} not found.`);
              }
              const utterance = new SpeechSynthesisUtterance(text);
              utterance.voice = selectedVoice;
              return await new Promise((resolve, reject) => {
                const chunks = [];
                utterance.onend = () => {
                  const audioData = new Blob(chunks, {
                    type
                  });
                  resolve(audioData);
                };
                utterance.onerror = error => {
                  reject(error);
                };
                speechSynthesis.speak(utterance);
              });
            }
          }
          exports.Voice = Voice;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./voice-lab",
        "from": "VoiceLab",
        "name": "VoiceLab"
      }, {
        "im": "./voice",
        "from": "Voice",
        "name": "Voice"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'VoiceLab') && _export("VoiceLab", VoiceLab = require ? require('./voice-lab').VoiceLab : value);
        (require || prop === 'Voice') && _export("Voice", Voice = require ? require('./voice').Voice : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sR0FBRzdCLEtBQUssSUFBRztrQkFDM0J5QixNQUFNLENBQUN6QixLQUFLLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRGIsZUFBZSxDQUFDUyxLQUFLLENBQUNPLFNBQVMsQ0FBQztjQUNqQyxDQUFDLENBQUM7WUFDSDs7VUFRQXRCIiwibmFtZXMiOlsiVm9pY2VMYWIiLCJFdmVudHMiLCJjb25maWciLCJwYXJhbXMiLCJlbGV2ZW5sYWJzIiwia2V5IiwiaWQiLCJhdWRpbyIsInN0b3AiLCJwYXVzZSIsImJsb2IiLCJwbGF5IiwidGV4dCIsImNvbnNvbGUiLCJ3YXJuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInZvaWNlX2lkIiwidm9pY2Vfc2V0dGluZ3MiLCJzdGFiaWxpdHkiLCJzaW1pbGFyaXR5X2Jvb3N0IiwibWVkaWFTb3VyY2UiLCJNZWRpYVNvdXJjZSIsImF1ZGlvVVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwic291cmNlQnVmZmVyIiwiYWRkU291cmNlQnVmZmVyIiwicmVhZGVyIiwiZ2V0UmVhZGVyIiwicHVtcCIsInZhbHVlIiwiZG9uZSIsInJlYWQiLCJlbmRPZlN0cmVhbSIsImFwcGVuZEJ1ZmZlciIsImV4cG9ydHMiLCJWb2ljZSIsIlJlYWN0aXZlTW9kZWwiLCJzcGVha2luZyIsImN1cnJlbnRXb3JkIiwicGF1c2VkIiwic3BlZWNoU3ludGhlc2lzIiwiaW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJwb3NpdGlvblRvQ3V0IiwibGFuZyIsInJhdGUiLCJfbW9iaWxlIiwiVFRTIiwic3BlYWsiLCJsb2NhbGUiLCJ0cmlnZ2VyIiwiZSIsImVycm9yIiwiX3dlYiIsImNhbmNlbCIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsIm9uc3RhcnQiLCJnbG9iYWxUaGlzIiwib25wYXVzZSIsIm9ucmVzdW1lIiwib25ib3VuZGFyeSIsImV2ZW50IiwiY2hhckluZGV4Iiwib25lbmQiLCJjb3Jkb3ZhIiwiY3JlYXRlQmxvYkF1ZGlvRnJvbVRleHQiLCJ0eXBlIiwidm9pY2VzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvbnZvaWNlc2NoYW5nZWQiLCJnZXRWb2ljZXMiLCJzZWxlY3RlZFZvaWNlIiwiZmluZCIsInZvaWNlIiwiRXJyb3IiLCJyZWplY3QiLCJjaHVua3MiLCJhdWRpb0RhdGEiLCJCbG9iIiwib25lcnJvciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidm9pY2UtbGFiLnRzIiwidm9pY2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==