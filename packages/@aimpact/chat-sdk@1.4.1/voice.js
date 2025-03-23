System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.4.1/config", "@aimpact/reactive@0.0.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, VoiceManager, voiceManager, VoiceLab, Voice, __beyond_pkg, hmr;
  _export({
    VoiceManager: void 0,
    voiceManager: void 0,
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
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@aimpact/chat-sdk/config', dependency_2], ['@aimpact/reactive/model', dependency_3]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./manager
      *************************/
      ims.set('./manager', {
        hash: 2553591272,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.voiceManager = exports.VoiceManager = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJWb2ljZU1hbmFnZXIiLCJsaXN0IiwibG9hZGVkIiwib25SZWFkeSIsImRlZmF1bHRzIiwiTWFwIiwiY29uc3RydWN0b3IiLCJpbml0IiwibG9hZERlZmF1bHRzIiwic2F2ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJsYW5nIiwibmFtZSIsInNldCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzYXZlRGVmYXVsdHMiLCJmcm9tRW50cmllcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZXREZWZhdWx0Iiwic2V0RGVmYXVsdHMiLCJsb2FkIiwiYXZhaWxhYmxlIiwic3BlZWNoU3ludGhlc2lzIiwiZ2V0Vm9pY2VzIiwibGVuZ3RoIiwiY2IiLCJvbnZvaWNlc2NoYW5nZWQiLCJyZWFkeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicHVzaCIsImFsbCIsImJ5TGFuZyIsImZpbHRlciIsInYiLCJzdGFydHNXaXRoIiwiYnlOYW1lIiwiZmluZCIsImdldFZvaWNlIiwiY3VzdG9tTmFtZSIsImdldCIsImN1c3RvbSIsInByaW9yaXRpZXMiLCJ2b2ljZSIsImluY2x1ZGVzIiwiXyIsImNyaXRlcmlvbiIsInVuZGVmaW5lZCIsImdldERlZmF1bHQiLCJleHBvcnRzIiwidm9pY2VNYW5hZ2VyIiwiX2NvcmUiLCJyZXF1aXJlIiwiX2NvbmZpZyIsIlZvaWNlTGFiIiwiRXZlbnRzIiwiYXBpS2V5IiwiZGVmYXVsdCIsInBhcmFtcyIsImVsZXZlbmxhYnMiLCJrZXkiLCJ2b2ljZUlkIiwiaWQiLCJ1cmwiLCJoZWFkZXJzIiwiYXVkaW8iLCJzdG9wIiwicGF1c2UiLCJibG9iIiwicGxheSIsInRleHQiLCJ3YXJuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJ2b2ljZV9pZCIsInZvaWNlX3NldHRpbmdzIiwic3RhYmlsaXR5Iiwic2ltaWxhcml0eV9ib29zdCIsIm1lZGlhU291cmNlIiwiTWVkaWFTb3VyY2UiLCJhdWRpb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNvdXJjZUJ1ZmZlciIsImFkZFNvdXJjZUJ1ZmZlciIsInJlYWRlciIsImdldFJlYWRlciIsInB1bXAiLCJ2YWx1ZSIsImRvbmUiLCJyZWFkIiwiZW5kT2ZTdHJlYW0iLCJhcHBlbmRCdWZmZXIiLCJfbW9kZWwiLCJfbWFuYWdlciIsIlZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInNwZWFraW5nIiwiY3VycmVudFdvcmQiLCJwYXVzZWQiLCJ0cmlnZ2VyIiwiaW5zdGFuY2UiLCJyYXRlIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInByIiwibGFuZ3VhZ2UiLCJMQU5HUyIsInJlYWN0aXZlUHJvcHMiLCJwb3NpdGlvblRvQ3V0IiwiZ2xvYmFsVGhpcyIsIl92b2ljZSIsInNlbGVjdGVkVm9pY2UiLCJfd2ViIiwiY2FuY2VsIiwidXR0ZXJhbmNlIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwicGFyc2VGbG9hdCIsImlzTmFOIiwib25zdGFydCIsIm9ucGF1c2UiLCJvbnJlc3VtZSIsIm9uYm91bmRhcnkiLCJldmVudCIsImNoYXJJbmRleCIsIm9uZW5kIiwic3BlYWsiLCJzZXRUaW1lb3V0Il0sInNvdXJjZXMiOlsiL21hbmFnZXIudHMiLCIvdm9pY2UtbGFiLnRzIiwiL3ZvaWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPO1VBQVUsTUFBT0EsWUFBWTtZQUMzQkMsSUFBSSxHQUEyQixFQUFFO1lBQ2pDQyxNQUFNLEdBQVksS0FBSztZQUN2QkMsT0FBTyxHQUFtQixFQUFFO1lBQzVCQyxRQUFRLEdBQXdCLElBQUlDLEdBQUcsRUFBRTtZQUVqREMsWUFBQTtjQUNDLElBQUksQ0FBQ0MsSUFBSSxFQUFFO2NB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