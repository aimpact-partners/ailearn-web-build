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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.20"]]);
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
        hash: 987209493,
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
            #selectedVoice;
            async _web() {
              if (this.#speaking) {
                speechSynthesis.cancel();
                this.trigger('on.finish');
              }
              const text = this.#text;
              const utterance = new SpeechSynthesisUtterance(text);
              const rate = localStorage.getItem('aimpact.audio.speed') ? parseFloat(localStorage.getItem('aimpact.audio.speed')) : this.rate;
              utterance.rate = rate;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfY29uZmlnIiwiVm9pY2VMYWIiLCJFdmVudHMiLCJhcGlLZXkiLCJkZWZhdWx0IiwicGFyYW1zIiwiZWxldmVubGFicyIsImtleSIsInZvaWNlSWQiLCJpZCIsInVybCIsImhlYWRlcnMiLCJhdWRpbyIsInN0b3AiLCJwYXVzZSIsImJsb2IiLCJwbGF5IiwidGV4dCIsImNvbnNvbGUiLCJ3YXJuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwidm9pY2VfaWQiLCJ2b2ljZV9zZXR0aW5ncyIsInN0YWJpbGl0eSIsInNpbWlsYXJpdHlfYm9vc3QiLCJtZWRpYVNvdXJjZSIsIk1lZGlhU291cmNlIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJBdWRpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzb3VyY2VCdWZmZXIiLCJhZGRTb3VyY2VCdWZmZXIiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJwdW1wIiwidmFsdWUiLCJkb25lIiwicmVhZCIsImVuZE9mU3RyZWFtIiwiYXBwZW5kQnVmZmVyIiwiZXhwb3J0cyIsIl9tb2RlbCIsIlZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInNwZWFraW5nIiwiY3VycmVudFdvcmQiLCJwYXVzZWQiLCJzcGVlY2hTeW50aGVzaXMiLCJsYW5nIiwidHJpZ2dlciIsImluc3RhbmNlIiwicmF0ZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJMQU5HUyIsInJlYWN0aXZlUHJvcHMiLCJwb3NpdGlvblRvQ3V0IiwiZ2xvYmFsVGhpcyIsIl92b2ljZSIsInNlbGVjdGVkVm9pY2UiLCJfd2ViIiwiY2FuY2VsIiwidXR0ZXJhbmNlIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlRmxvYXQiLCJnZXRTZWxlY3RlZFZvaWNlIiwiZ2V0Vm9pY2VzIiwiZmluZCIsInZvaWNlIiwibmFtZSIsImluY2x1ZGVzIiwic3RhcnRzV2l0aCIsInByb21pc2UiLCJpbml0aWFsaXplVm9pY2VzIiwiUGVuZGluZ1Byb21pc2UiLCJsZW5ndGgiLCJyZXNvbHZlIiwidW5kZWZpbmVkIiwib25zdGFydCIsIm9ucGF1c2UiLCJvbnJlc3VtZSIsIm9uYm91bmRhcnkiLCJldmVudCIsImNoYXJJbmRleCIsIm9uZW5kIiwic3BlYWsiLCJsb2ciLCJzZXRUaW1lb3V0Il0sInNvdXJjZXMiOlsiL3ZvaWNlLWxhYi50cyIsIi92b2ljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsUUFBUyxTQUFRSCxLQUFBLENBQUFJLE1BQU07WUFDNUIsQ0FBQUMsTUFBTyxHQUFHSCxPQUFBLENBQUFJLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLENBQUNDLEdBQUc7WUFDdEMsQ0FBQUMsT0FBUSxHQUFHUixPQUFBLENBQUFJLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLENBQUNHLEVBQUU7WUFDdEMsQ0FBQUMsR0FBSSxHQUFHLCtDQUErQyxJQUFJLENBQUMsQ0FBQUYsT0FBUSxTQUFTO1lBRTVFLENBQUFHLE9BQVEsR0FBRztjQUNWLGNBQWMsRUFBRSxrQkFBa0I7Y0FDbEMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBUjthQUNuQjtZQUVELENBQUFTLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBRCxLQUFNLEVBQUU7Y0FDbEIsSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FB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