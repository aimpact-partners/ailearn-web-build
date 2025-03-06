System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.4.1/config", "@aimpact/reactive@0.0.1/model"], function (_export, _context) {
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
    }, function (_aimpactChatSdk141Config) {
      dependency_2 = _aimpactChatSdk141Config;
    }, function (_aimpactReactive001Model) {
      dependency_3 = _aimpactReactive001Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.1/voice"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@aimpact/chat-sdk/config', dependency_2], ['@aimpact/reactive/model', dependency_3]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./voice-lab
      ***************************/
      ims.set('./voice-lab', {
        hash: 3598784126,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VoiceLab = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _config = require("@aimpact/chat-sdk/config");
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
        hash: 2788242733,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Voice = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@aimpact/reactive/model");
          /*bundle*/
          class Voice extends _model.ReactiveModel {
            #speaking = false;
            get speaking() {
              return this.#speaking;
            }
            #id;
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
            #lang;
            get lang() {
              return this.#lang;
            }
            set lang(value) {
              if (value === this.#lang) return;
              this.#lang = value;
              this.trigger('change');
            }
            #instance;
            get instance() {
              return this.#instance;
            }
            #rate = 1.2;
            get rate() {
              return this.#rate;
            }
            set rate(value) {
              if (value === this.#rate) return;
              this.#rate = value;
              this.trigger('change');
            }
            #languages = {
              en: 'en-EN',
              es: 'es-MX',
              pr: 'pt-BR'
            };
            get languages() {
              return this.#languages;
            }
            constructor({
              language,
              rate
            } = {
              rate: 1.25
            }) {
              super({
                lang: language,
                rate: rate
              });
              const LANGS = {
                en: 'en-US',
                es: 'es-MX'
              };
              // if (!language) language = LANGS[languages.current];
              this.reactiveProps(['positionToCut', 'textId', 'playing']);
              this.positionToCut = 0;
              globalThis._voice = this;
              this.lang = language;
              this.rate = rate;
            }
            // set({ language, rate }: { language?: string; rate?: number }) {
            // 	if (language) {
            // 		this.lang = language;
            // 	}
            // 	if (rate) this.rate = rate;
            // }
            #selectedVoice;
            async _web() {
              if (this.#speaking) {
                speechSynthesis.cancel();
                this.trigger('on.finish');
              }
              const text = this.#text;
              const utterance = new SpeechSynthesisUtterance(text);
              utterance.rate = this.rate;
              utterance.lang = this.lang;
              function getSelectedVoice(lang) {
                return speechSynthesis.getVoices().find(voice => voice.name.includes('Google') && voice.lang.startsWith(lang));
              }
              let promise;
              function initializeVoices(lang) {
                if (promise) return promise;
                promise = new _core.PendingPromise();
                if (speechSynthesis.getVoices().length > 0) {
                  // Si las voces ya están disponibles, selecciona la voz directamente
                  promise.resolve(getSelectedVoice(lang));
                  promise = undefined;
                } else {
                  // Esperar a que las voces estén listas
                  speechSynthesis.addEventListener('voiceschanged', () => {
                    promise.resolve(getSelectedVoice(lang));
                    promise = undefined;
                  });
                }
                return promise;
              }
              if (!this.#selectedVoice) {
                const selectedVoice = await initializeVoices(this.lang);
                this.#selectedVoice = selectedVoice;
              }
              const selectedVoice = this.#selectedVoice;
              if (selectedVoice) {
                utterance.voice = selectedVoice;
                utterance.lang = selectedVoice.lang;
              } else {
                utterance.lang = this.#languages[this.lang];
              }
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
                this.trigger('on.finish');
              };
              speechSynthesis.speak(utterance);
            }
            play(text, id) {
              if (text) this.#text = text;
              this.#id = id;
              this._web();
            }
            stop() {
              console.log('llegamos aca');
              speechSynthesis.cancel();
              // Simular el evento 'onend' manualmente
              setTimeout(() => {
                if (this.#speaking) {
                  this.#speaking = false;
                  this.#currentWord = -1;
                  this.trigger('on.finish'); // Disparar el evento manualmente
                }
              }, 100); // Pequeña demora para asegurarse de que la cancelación se ha procesado
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfY29uZmlnIiwiVm9pY2VMYWIiLCJFdmVudHMiLCJhcGlLZXkiLCJkZWZhdWx0IiwicGFyYW1zIiwiZWxldmVubGFicyIsImtleSIsInZvaWNlSWQiLCJpZCIsInVybCIsImhlYWRlcnMiLCJhdWRpbyIsInN0b3AiLCJwYXVzZSIsImJsb2IiLCJwbGF5IiwidGV4dCIsImNvbnNvbGUiLCJ3YXJuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwidm9pY2VfaWQiLCJ2b2ljZV9zZXR0aW5ncyIsInN0YWJpbGl0eSIsInNpbWlsYXJpdHlfYm9vc3QiLCJtZWRpYVNvdXJjZSIsIk1lZGlhU291cmNlIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJBdWRpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzb3VyY2VCdWZmZXIiLCJhZGRTb3VyY2VCdWZmZXIiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJwdW1wIiwidmFsdWUiLCJkb25lIiwicmVhZCIsImVuZE9mU3RyZWFtIiwiYXBwZW5kQnVmZmVyIiwiZXhwb3J0cyIsIl9tb2RlbCIsIlZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInNwZWFraW5nIiwiY3VycmVudFdvcmQiLCJwYXVzZWQiLCJzcGVlY2hTeW50aGVzaXMiLCJsYW5nIiwidHJpZ2dlciIsImluc3RhbmNlIiwicmF0ZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJMQU5HUyIsInJlYWN0aXZlUHJvcHMiLCJwb3NpdGlvblRvQ3V0IiwiZ2xvYmFsVGhpcyIsIl92b2ljZSIsInNlbGVjdGVkVm9pY2UiLCJfd2ViIiwiY2FuY2VsIiwidXR0ZXJhbmNlIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwiZ2V0U2VsZWN0ZWRWb2ljZSIsImdldFZvaWNlcyIsImZpbmQiLCJ2b2ljZSIsIm5hbWUiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJwcm9taXNlIiwiaW5pdGlhbGl6ZVZvaWNlcyIsIlBlbmRpbmdQcm9taXNlIiwibGVuZ3RoIiwicmVzb2x2ZSIsInVuZGVmaW5lZCIsIm9uc3RhcnQiLCJvbnBhdXNlIiwib25yZXN1bWUiLCJvbmJvdW5kYXJ5IiwiZXZlbnQiLCJjaGFySW5kZXgiLCJvbmVuZCIsInNwZWFrIiwibG9nIiwic2V0VGltZW91dCJdLCJzb3VyY2VzIjpbIi92b2ljZS1sYWIudHMiLCIvdm9pY2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFFBQVMsU0FBUUgsS0FBQSxDQUFBSSxNQUFNO1lBQzVCLENBQUFDLE1BQU8sR0FBR0gsT0FBQSxDQUFBSSxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHO1lBQ3RDLENBQUFDLE9BQVEsR0FBR1IsT0FBQSxDQUFBSSxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDRyxFQUFFO1lBQ3RDLENBQUFDLEdBQUksR0FBRywrQ0FBK0MsSUFBSSxDQUFDLENBQUFGLE9BQVEsU0FBUztZQUU1RSxDQUFBRyxPQUFRLEdBQUc7Y0FDVixjQUFjLEVBQUUsa0JBQWtCO2NBQ2xDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQVI7YUFDbkI7WUFFRCxDQUFBUyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQUQsS0FBTSxFQUFFO2NBQ2xCLElBQUksQ0FBQyxDQUFBQSxLQUFNLENBQUNFLEtBQUssRUFBRTtZQUNwQjtZQUVBLENBQUFDLElBQUs7WUFD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