System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.23/config", "@beyond-js/reactive@1.1.6/model"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0023Config) {
      dependency_2 = _aimpactAilearnApp0023Config;
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.23"]]);
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
        hash: 2348959716,
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
              // TTS.speak(
              // 	{
              // 		text: this.#text,
              // 		locale: 'es-Latn', //"en-GB",
              // 		rate: 0.75,
              // 	},
              // 	() => this.trigger('play.finish'),
              // 	e => console.error(e)
              // );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfY29uZmlnIiwiVm9pY2VMYWIiLCJFdmVudHMiLCJhcGlLZXkiLCJkZWZhdWx0IiwicGFyYW1zIiwiZWxldmVubGFicyIsImtleSIsInZvaWNlSWQiLCJpZCIsInVybCIsImhlYWRlcnMiLCJhdWRpbyIsInN0b3AiLCJwYXVzZSIsImJsb2IiLCJwbGF5IiwidGV4dCIsImNvbnNvbGUiLCJ3YXJuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwidm9pY2VfaWQiLCJ2b2ljZV9zZXR0aW5ncyIsInN0YWJpbGl0eSIsInNpbWlsYXJpdHlfYm9vc3QiLCJtZWRpYVNvdXJjZSIsIk1lZGlhU291cmNlIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJBdWRpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzb3VyY2VCdWZmZXIiLCJhZGRTb3VyY2VCdWZmZXIiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJwdW1wIiwidmFsdWUiLCJkb25lIiwicmVhZCIsImVuZE9mU3RyZWFtIiwiYXBwZW5kQnVmZmVyIiwiZXhwb3J0cyIsIl9tb2RlbCIsIlZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInNwZWFraW5nIiwiY3VycmVudFdvcmQiLCJwYXVzZWQiLCJzcGVlY2hTeW50aGVzaXMiLCJpbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsInBvc2l0aW9uVG9DdXQiLCJsYW5nIiwicmF0ZSIsIl9tb2JpbGUiLCJfd2ViIiwiY2FuY2VsIiwidHJpZ2dlciIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsIm9uc3RhcnQiLCJnbG9iYWxUaGlzIiwib25wYXVzZSIsIm9ucmVzdW1lIiwib25ib3VuZGFyeSIsImV2ZW50IiwiY2hhckluZGV4Iiwib25lbmQiLCJzcGVhayIsImNvcmRvdmEiLCJjcmVhdGVCbG9iQXVkaW9Gcm9tVGV4dCIsInR5cGUiLCJ2b2ljZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9udm9pY2VzY2hhbmdlZCIsImdldFZvaWNlcyIsInNlbGVjdGVkVm9pY2UiLCJmaW5kIiwidm9pY2UiLCJFcnJvciIsInJlamVjdCIsImNodW5rcyIsImF1ZGlvRGF0YSIsIkJsb2IiLCJvbmVycm9yIiwiZXJyb3IiXSwic291cmNlcyI6WyIvdm9pY2UtbGFiLnRzIiwiL3ZvaWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxRQUFTLFNBQVFILEtBQUEsQ0FBQUksTUFBTTtZQUM1QixDQUFBQyxNQUFPLEdBQUdILE9BQUEsQ0FBQUksT0FBTSxDQUFDQyxNQUFNLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRztZQUN0QyxDQUFBQyxPQUFRLEdBQUdSLE9BQUEsQ0FBQUksT0FBTSxDQUFDQyxNQUFNLENBQUNDLFVBQVUsQ0FBQ0csRUFBRTtZQUN0QyxDQUFBQyxHQUFJLEdBQUcsK0NBQStDLElBQUksQ0FBQyxDQUFBRixPQUFRLFNBQVM7WUFFNUUsQ0FBQUcsT0FBUSxHQUFHO2NBQ1YsY0FBYyxFQUFFLGtCQUFrQjtjQUNsQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUFSO2FBQ25CO1lBRUQsQ0FBQVMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFELEtBQU0sRUFBRTtjQUNsQixJQUFJLENBQUMsQ0FBQUEsS0FBTSxDQUFDRSxLQUFLLEVBQUU7WUFDcEI7WUFFQSxDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFD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