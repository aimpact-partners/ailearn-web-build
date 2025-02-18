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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 2133241649,
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
              if (!language) language = _core.languages.current;
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
            _web() {
              if (this.#speaking) {
                speechSynthesis.cancel();
                this.trigger('on.finish');
              }
              const text = this.#text;
              const utterance = new SpeechSynthesisUtterance(text);
              utterance.rate = this.rate;
              const selectedVoice = speechSynthesis.getVoices().find(voice => voice.name.includes('Google español') && voice.lang === 'es-ES');
              if (selectedVoice) {
                utterance.voice = selectedVoice;
                utterance.lang = 'es-ES';
              } else {
                utterance.lang = this.#languages[this.lang];
              }
              utterance.rate = 1.0;
              speechSynthesis.speak(utterance);
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
            play(text, id) {
              if (text) this.#text = text;
              this.#id = id;
              this._web();
            }
            stop() {
              speechSynthesis.cancel();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfY29uZmlnIiwiVm9pY2VMYWIiLCJFdmVudHMiLCJhcGlLZXkiLCJkZWZhdWx0IiwicGFyYW1zIiwiZWxldmVubGFicyIsImtleSIsInZvaWNlSWQiLCJpZCIsInVybCIsImhlYWRlcnMiLCJhdWRpbyIsInN0b3AiLCJwYXVzZSIsImJsb2IiLCJwbGF5IiwidGV4dCIsImNvbnNvbGUiLCJ3YXJuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwidm9pY2VfaWQiLCJ2b2ljZV9zZXR0aW5ncyIsInN0YWJpbGl0eSIsInNpbWlsYXJpdHlfYm9vc3QiLCJtZWRpYVNvdXJjZSIsIk1lZGlhU291cmNlIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJBdWRpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzb3VyY2VCdWZmZXIiLCJhZGRTb3VyY2VCdWZmZXIiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJwdW1wIiwidmFsdWUiLCJkb25lIiwicmVhZCIsImVuZE9mU3RyZWFtIiwiYXBwZW5kQnVmZmVyIiwiZXhwb3J0cyIsIl9tb2RlbCIsIlZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInNwZWFraW5nIiwiY3VycmVudFdvcmQiLCJwYXVzZWQiLCJzcGVlY2hTeW50aGVzaXMiLCJsYW5nIiwidHJpZ2dlciIsImluc3RhbmNlIiwicmF0ZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJjdXJyZW50IiwicmVhY3RpdmVQcm9wcyIsInBvc2l0aW9uVG9DdXQiLCJnbG9iYWxUaGlzIiwiX3ZvaWNlIiwiX3dlYiIsImNhbmNlbCIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsInNlbGVjdGVkVm9pY2UiLCJnZXRWb2ljZXMiLCJmaW5kIiwidm9pY2UiLCJuYW1lIiwiaW5jbHVkZXMiLCJzcGVhayIsIm9uc3RhcnQiLCJvbnBhdXNlIiwib25yZXN1bWUiLCJvbmJvdW5kYXJ5IiwiZXZlbnQiLCJjaGFySW5kZXgiLCJvbmVuZCJdLCJzb3VyY2VzIjpbIi92b2ljZS1sYWIudHMiLCIvdm9pY2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFFBQVMsU0FBUUgsS0FBQSxDQUFBSSxNQUFNO1lBQzVCLENBQUFDLE1BQU8sR0FBR0gsT0FBQSxDQUFBSSxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHO1lBQ3RDLENBQUFDLE9BQVEsR0FBR1IsT0FBQSxDQUFBSSxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDRyxFQUFFO1lBQ3RDLENBQUFDLEdBQUksR0FBRywrQ0FBK0MsSUFBSSxDQUFDLENBQUFGLE9BQVEsU0FBUztZQUU1RSxDQUFBRyxPQUFRLEdBQUc7Y0FDVixjQUFjLEVBQUUsa0JBQWtCO2NBQ2xDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQVI7YUFDbkI7WUFFRCxDQUFBUyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQUQsS0FBTSxFQUFFO2NBQ2xCLElBQUksQ0FBQyxDQUFBQSxLQUFNLENBQUNFLEtBQUssRUFBRTtZQUNwQjtZQUVBLENBQUFDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUVBLE1BQU1DLElBQUlBLENBQUNDLElBQVk7Y0FDdEIsSUFBSSxDQUFDQSxJQUFJLEVBQUU7Z0JBQ1ZDLE9BQU8sQ0FB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