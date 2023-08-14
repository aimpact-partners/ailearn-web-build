System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@1.0.0/config", "@beyond-js/reactive@1.1.2/model"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp100Config) {
      dependency_2 = _aimpactAilearnApp100Config;
    }, function (_beyondJsReactive112Model) {
      dependency_3 = _beyondJsReactive112Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.2"], ["uuid", "9.0.0"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "0.0.2"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@0.0.2/voice"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfY29uZmlnIiwiVm9pY2VMYWIiLCJFdmVudHMiLCJhcGlLZXkiLCJkZWZhdWx0IiwicGFyYW1zIiwiZWxldmVubGFicyIsImtleSIsInZvaWNlSWQiLCJpZCIsInVybCIsImhlYWRlcnMiLCJhdWRpbyIsInN0b3AiLCJwYXVzZSIsImJsb2IiLCJwbGF5IiwidGV4dCIsImNvbnNvbGUiLCJ3YXJuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwidm9pY2VfaWQiLCJ2b2ljZV9zZXR0aW5ncyIsInN0YWJpbGl0eSIsInNpbWlsYXJpdHlfYm9vc3QiLCJtZWRpYVNvdXJjZSIsIk1lZGlhU291cmNlIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJBdWRpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzb3VyY2VCdWZmZXIiLCJhZGRTb3VyY2VCdWZmZXIiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJwdW1wIiwidmFsdWUiLCJkb25lIiwicmVhZCIsImVuZE9mU3RyZWFtIiwiYXBwZW5kQnVmZmVyIiwiZXhwb3J0cyIsIl9tb2RlbCIsIlZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInNwZWFraW5nIiwiY3VycmVudFdvcmQiLCJwYXVzZWQiLCJzcGVlY2hTeW50aGVzaXMiLCJpbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsInBvc2l0aW9uVG9DdXQiLCJsYW5nIiwicmF0ZSIsIl9tb2JpbGUiLCJUVFMiLCJzcGVhayIsImxvY2FsZSIsInRyaWdnZXIiLCJlIiwiZXJyb3IiLCJfd2ViIiwiY2FuY2VsIiwidXR0ZXJhbmNlIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwib25zdGFydCIsImdsb2JhbFRoaXMiLCJvbnBhdXNlIiwib25yZXN1bWUiLCJvbmJvdW5kYXJ5IiwiZXZlbnQiLCJjaGFySW5kZXgiLCJvbmVuZCIsImNvcmRvdmEiLCJjcmVhdGVCbG9iQXVkaW9Gcm9tVGV4dCIsInR5cGUiLCJ2b2ljZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9udm9pY2VzY2hhbmdlZCIsImdldFZvaWNlcyIsInNlbGVjdGVkVm9pY2UiLCJmaW5kIiwidm9pY2UiLCJFcnJvciIsInJlamVjdCIsImNodW5rcyIsImF1ZGlvRGF0YSIsIkJsb2IiLCJvbmVycm9yIl0sInNvdXJjZXMiOlsiL3ZvaWNlLWxhYi50cyIsIi92b2ljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsUUFBUyxTQUFRSCxLQUFBLENBQUFJLE1BQU07WUFDNUIsQ0FBQUMsTUFBTyxHQUFHSCxPQUFBLENBQUFJLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLENBQUNDLEdBQUc7WUFDdEMsQ0FBQUMsT0FBUSxHQUFHUixPQUFBLENBQUFJLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLENBQUNHLEVBQUU7WUFDdEMsQ0FBQUMsR0FBSSxHQUFHLCtDQUErQyxJQUFJLENBQUMsQ0FBQUYsT0FBUSxTQUFTO1lBRTVFLENBQUFHLE9BQVEsR0FBRztjQUNWLGNBQWMsRUFBRSxrQkFBa0I7Y0FDbEMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBUjthQUNuQjtZQUVELENBQUFTLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBRCxLQUFNLEVBQUU7Y0FDbEIsSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ0UsS0FBSyxFQUFFO1lBQ3BCO1lBRUEsQ0FBQUMsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7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