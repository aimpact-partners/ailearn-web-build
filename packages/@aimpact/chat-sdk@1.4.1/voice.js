System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.4.1/config", "@aimpact/reactive@0.0.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, VoiceManager, voiceManager, VoiceLab, Voice, __beyond_pkg, hmr;
  _export({
    VoiceManager: void 0,
    voiceManager: void 0,
    VoiceLab: void 0,
    Voice: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Routing) {
      dependency_1 = _beyondJsKernel019Routing;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk141Config) {
      dependency_3 = _aimpactChatSdk141Config;
    }, function (_aimpactReactive001Model) {
      dependency_4 = _aimpactReactive001Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@beyond-js/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.29"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/routing', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['@aimpact/chat-sdk/config', dependency_3], ['@aimpact/reactive/model', dependency_4]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./manager
      *************************/
      ims.set('./manager', {
        hash: 3898714715,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.voiceManager = exports.VoiceManager = void 0;
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          class VoiceManager {
            list = [];
            loaded = false;
            onReady = [];
            defaults = new Map();
            constructor() {
              this.init();
              this.loadDefaults();
            }
            loadDefaults() {
              const saved = localStorage.getItem('voice.defaults');
              if (saved) {
                try {
                  const defaults = JSON.parse(saved);
                  Object.entries(defaults).forEach(([lang, name]) => {
                    this.defaults.set(lang, name);
                  });
                } catch (e) {
                  console.error('Error loading defaults:', e);
                }
              }
            }
            saveDefaults() {
              const defaults = Object.fromEntries(this.defaults);
              localStorage.setItem('voice.defaults', JSON.stringify(defaults));
            }
            setDefault(lang, name) {
              this.defaults.set(lang, name);
              this.saveDefaults();
            }
            setDefaults(defaults) {
              Object.entries(defaults).forEach(([lang, name]) => {
                this.defaults.set(lang, name);
              });
              this.saveDefaults();
            }
            init() {
              const load = () => {
                const available = speechSynthesis.getVoices();
                if (available.length) {
                  this.list = available;
                  this.loaded = true;
                  this.onReady.forEach(cb => cb());
                  this.onReady = [];
                }
              };
              speechSynthesis.onvoiceschanged = load;
              load();
              globalThis.document.addEventListener('onBack', this.onBack.bind(this));
            }
            #onBackCallback;
            get onBackCallback() {
              return this.#onBackCallback;
            }
            set onBackCallback(callback) {
              this.#onBackCallback = callback;
            }
            onBack() {
              if (!this.onBackCallback) {
                _routing.routing.back();
                return;
              }
            }
            async ready() {
              if (this.loaded) return;
              return new Promise(resolve => this.onReady.push(resolve));
            }
            get all() {
              return this.list;
            }
            byLang(lang) {
              return this.list.filter(v => v.lang.startsWith(lang));
            }
            byName(name) {
              return this.list.find(v => v.name === name);
            }
            getVoice(lang) {
              // Check if there's a custom default for this language
              const customName = this.defaults.get(lang);
              if (customName) {
                const custom = this.byName(customName);
                if (custom) return custom;
              }
              // If no custom or it doesn't exist anymore, fall back to default logic
              const available = this.byLang(lang);
              // Prioridades por calidad
              const priorities = [voice => voice.name.includes('Google'), voice => voice.name.includes('Microsoft'), _ => true // fallback
              ];
              for (const criterion of priorities) {
                const voice = available.find(criterion);
                if (voice) return voice;
              }
              return undefined;
            }
            // Alias for backward compatibility
            getDefault(lang) {
              return this.getVoice(lang);
            }
          }
          // Export singleton instance
          exports.VoiceManager = VoiceManager;
          /*bundle*/
          const voiceManager = exports.voiceManager = new VoiceManager();
        }
      });

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
        hash: 3290403489,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Voice = void 0;
          var _model = require("@aimpact/reactive/model");
          var _manager = require("./manager");
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
              utterance.rate = isNaN(rate) ? this.rate : rate;
              utterance.lang = this.lang;
              // Esperar a que el voiceManager esté listo
              await _manager.voiceManager.ready();
              // Obtener la voz seleccionada o por defecto
              const selectedVoice = _manager.voiceManager.getVoice(this.lang);
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
        "im": "./manager",
        "from": "VoiceManager",
        "name": "VoiceManager"
      }, {
        "im": "./manager",
        "from": "voiceManager",
        "name": "voiceManager"
      }, {
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
        (require || prop === 'VoiceManager') && _export("VoiceManager", VoiceManager = require ? require('./manager').VoiceManager : value);
        (require || prop === 'voiceManager') && _export("voiceManager", voiceManager = require ? require('./manager').voiceManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJWb2ljZU1hbmFnZXIiLCJsaXN0IiwibG9hZGVkIiwib25SZWFkeSIsImRlZmF1bHRzIiwiTWFwIiwiY29uc3RydWN0b3IiLCJpbml0IiwibG9hZERlZmF1bHRzIiwic2F2ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJsYW5nIiwibmFtZSIsInNldCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzYXZlRGVmYXVsdHMiLCJmcm9tRW50cmllcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZXREZWZhdWx0Iiwic2V0RGVmYXVsdHMiLCJsb2FkIiwiYXZhaWxhYmxlIiwic3BlZWNoU3ludGhlc2lzIiwiZ2V0Vm9pY2VzIiwibGVuZ3RoIiwiY2IiLCJvbnZvaWNlc2NoYW5nZWQiLCJnbG9iYWxUaGlzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib25CYWNrIiwiYmluZCIsIm9uQmFja0NhbGxiYWNrIiwiY2FsbGJhY2siLCJyb3V0aW5nIiwiYmFjayIsInJlYWR5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJwdXNoIiwiYWxsIiwiYnlMYW5nIiwiZmlsdGVyIiwidiIsInN0YXJ0c1dpdGgiLCJieU5hbWUiLCJmaW5kIiwiZ2V0Vm9pY2UiLCJjdXN0b21OYW1lIiwiZ2V0IiwiY3VzdG9tIiwicHJpb3JpdGllcyIsInZvaWNlIiwiaW5jbHVkZXMiLCJfIiwiY3JpdGVyaW9uIiwidW5kZWZpbmVkIiwiZ2V0RGVmYXVsdCIsImV4cG9ydHMiLCJ2b2ljZU1hbmFnZXIiLCJfY29yZSIsIl9jb25maWciLCJWb2ljZUxhYiIsIkV2ZW50cyIsImFwaUtleSIsImRlZmF1bHQiLCJwYXJhbXMiLCJlbGV2ZW5sYWJzIiwia2V5Iiwidm9pY2VJZCIsImlkIiwidXJsIiwiaGVhZGVycyIsImF1ZGlvIiwic3RvcCIsInBhdXNlIiwiYmxvYiIsInBsYXkiLCJ0ZXh0Iiwid2FybiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwidm9pY2VfaWQiLCJ2b2ljZV9zZXR0aW5ncyIsInN0YWJpbGl0eSIsInNpbWlsYXJpdHlfYm9vc3QiLCJtZWRpYVNvdXJjZSIsIk1lZGlhU291cmNlIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJBdWRpbyIsInNvdXJjZUJ1ZmZlciIsImFkZFNvdXJjZUJ1ZmZlciIsInJlYWRlciIsImdldFJlYWRlciIsInB1bXAiLCJ2YWx1ZSIsImRvbmUiLCJyZWFkIiwiZW5kT2ZTdHJlYW0iLCJhcHBlbmRCdWZmZXIiLCJfbW9kZWwiLCJfbWFuYWdlciIsIlZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInNwZWFraW5nIiwiY3VycmVudFdvcmQiLCJwYXVzZWQiLCJ0cmlnZ2VyIiwiaW5zdGFuY2UiLCJyYXRlIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInByIiwibGFuZ3VhZ2UiLCJMQU5HUyIsInJlYWN0aXZlUHJvcHMiLCJwb3NpdGlvblRvQ3V0IiwiX3ZvaWNlIiwic2VsZWN0ZWRWb2ljZSIsIl93ZWIiLCJjYW5jZWwiLCJ1dHRlcmFuY2UiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJvbnN0YXJ0Iiwib25wYXVzZSIsIm9ucmVzdW1lIiwib25ib3VuZGFyeSIsImV2ZW50IiwiY2hhckluZGV4Iiwib25lbmQiLCJzcGVhayIsInNldFRpbWVvdXQiXSwic291cmNlcyI6WyIvbWFuYWdlci50cyIsIi92b2ljZS1sYWIudHMiLCIvdm9pY2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUE7VUFDTztVQUFVLE1BQU9DLFlBQVk7WUFDM0JDLElBQUksR0FBMkIsRUFBRTtZQUNqQ0Ms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