System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@1.0.0/config", "@beyond-js/reactive@1.1.5/model"], function (_export, _context) {
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
    }, function (_beyondJsReactive115Model) {
      dependency_3 = _beyondJsReactive115Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.0/voice"
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
        hash: 1554860377,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Voice = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
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
            #lang;
            get lang() {
              return this.#lang;
            }
            set lang(value) {
              if (value === this.#lang) return;
              this.#lang = value;
              this.trigger('change');
            }
            #id;
            get textId() {
              return this.#id;
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
            constructor(language) {
              super();
              if (!language) language = _core.languages.current;
              this.reactiveProps(['lang', 'positionToCut']);
              this.positionToCut = 0;
              this.lang = language;
              this.rate = 1.2;
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
            play(text, id) {
              if (text) this.#text = text;
              this.#id = id;
              globalThis.cordova ? this._mobile() : this._web();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfY29uZmlnIiwiVm9pY2VMYWIiLCJFdmVudHMiLCJhcGlLZXkiLCJkZWZhdWx0IiwicGFyYW1zIiwiZWxldmVubGFicyIsImtleSIsInZvaWNlSWQiLCJpZCIsInVybCIsImhlYWRlcnMiLCJhdWRpbyIsInN0b3AiLCJwYXVzZSIsImJsb2IiLCJwbGF5IiwidGV4dCIsImNvbnNvbGUiLCJ3YXJuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwidm9pY2VfaWQiLCJ2b2ljZV9zZXR0aW5ncyIsInN0YWJpbGl0eSIsInNpbWlsYXJpdHlfYm9vc3QiLCJtZWRpYVNvdXJjZSIsIk1lZGlhU291cmNlIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJBdWRpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzb3VyY2VCdWZmZXIiLCJhZGRTb3VyY2VCdWZmZXIiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJwdW1wIiwidmFsdWUiLCJkb25lIiwicmVhZCIsImVuZE9mU3RyZWFtIiwiYXBwZW5kQnVmZmVyIiwiZXhwb3J0cyIsIl9tb2RlbCIsIlZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInNwZWFraW5nIiwiY3VycmVudFdvcmQiLCJwYXVzZWQiLCJzcGVlY2hTeW50aGVzaXMiLCJsYW5nIiwidHJpZ2dlciIsInRleHRJZCIsImluc3RhbmNlIiwicmF0ZSIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwicmVhY3RpdmVQcm9wcyIsInBvc2l0aW9uVG9DdXQiLCJfd2ViIiwiY2FuY2VsIiwidXR0ZXJhbmNlIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwib25zdGFydCIsImdsb2JhbFRoaXMiLCJvbnBhdXNlIiwib25yZXN1bWUiLCJvbmJvdW5kYXJ5IiwiZXZlbnQiLCJjaGFySW5kZXgiLCJvbmVuZCIsInNwZWFrIiwiY29yZG92YSIsIl9tb2JpbGUiXSwic291cmNlcyI6WyIvdm9pY2UtbGFiLnRzIiwiL3ZvaWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxRQUFTLFNBQVFILEtBQUEsQ0FBQUksTUFBTTtZQUM1QixDQUFBQyxNQUFPLEdBQUdILE9BQUEsQ0FBQUksT0FBTSxDQUFDQyxNQUFNLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRztZQUN0QyxDQUFBQyxPQUFRLEdBQUdSLE9BQUEsQ0FBQUksT0FBTSxDQUFDQyxNQUFNLENBQUNDLFVBQVUsQ0FBQ0csRUFBRTtZQUN0QyxDQUFBQyxHQUFJLEdBQUcsK0NBQStDLElBQUksQ0FBQyxDQUFBRixPQUFRLFNBQVM7WUFFNUUsQ0FBQUcsT0FBUSxHQUFHO2NBQ1YsY0FBYyxFQUFFLGtCQUFrQjtjQUNsQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUFSO2FBQ25CO1lBRUQsQ0FBQVMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFELEtBQU0sRUFBRTtjQUNsQixJQUFJLENBQUMsQ0FBQUEsS0FBTSxDQUFDRSxLQUFLLEVBQUU7WUFDcEI7WUFFQSxDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxNQUFNQyxJQUFJQSxDQUFDQyxJQUFZO2NBQ3RCLElBQUksQ0FBQ0EsSUFBSSxFQUFFO2dCQUNWQyxPQUFPLENBQUNDLElBQUksQ0FBQywrQkFBK0IsQ0FBQztnQkFDN0M7O2NBR0RELE9BQU8sQ0FBQ0MsSUFBSSxD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