System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.11/config", "@beyond-js/reactive@1.1.6/model"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0011Config) {
      dependency_2 = _aimpactAilearnApp0011Config;
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
        hash: 890151779,
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
            constructor({
              language,
              rate
            } = {
              rate: 1.25
            }) {
              super();
              if (!language) language = _core.languages.current;
              this.reactiveProps(['positionToCut', 'textId']);
              this.positionToCut = 0;
              this.lang = language;
              this.rate = rate;
              this.initialValues({
                lang: language,
                rate: rate
              });
            }
            set({
              language,
              rate
            }) {
              if (language) {
                this.lang = language;
              }
              if (rate) this.rate = rate;
            }
            _web() {
              if (this.#speaking) {
                speechSynthesis.cancel();
                this.trigger('on.finish');
              }
              const text = this.#text;
              const utterance = new SpeechSynthesisUtterance(text);
              utterance.lang = this.#languages[this.lang];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQyxRQUFRLENBQUM7Y0FDdkIsQ0FBQztjQUNEZ0IsU0FBUyxDQUFDSyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUNyQixPQUFPLENBQUMsUUFBUSxDQUFDO2NBRWpEZ0IsU0FBUyxDQUFDTSxVQUFVLEdBQUdDLEtBQUssSUFBRztnQkFDOUIsSUFBSSxDQUFDLFlBQVksR0FBR0EsS0FBSyxDQUFDQyxTQUFTLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBR0QsS0FBSyxDQUFDQyxTQUFTO2dCQUUvRCxJQUFJLENBQUN4QixPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUN0QixJQUFJLENBQUNBLE9BQU8sQ0FBQyxVQUFVLENBQUM7Y0FDekIsQ0FBQztjQUVEZ0IsU0FBUyxDQUFDUyxLQUFLLEdBQUcsTUFBSztnQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLO2dCQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDekIsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDdEIsSUFBSSxDQUFDQSxPQUFPLENBQUMsV0FBVyxDQUFDO2NBQzFCLENBQUM7Y0FFREYsZUFBZSxDQUFDNEIsS0FBSyxDQUFDVixTQUFTLENBQUM7WUFDakM7WUFFQXhELElBQUksQ0FBQ0MsSUFBeUIsRUFBRU4sRUFBdUI7Y0FDdEQsSUFBSU0sSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUdBLElBQUk7Y0FFM0IsSUFBSSxDQUFDLEdBQUcsR0FBR04sRUFBRTtjQUNiZ0UsVUFBVSxDQUFDUSxPQUFPLEdBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUNkLElBQUksRUFBRTtZQUNsRDtZQUVBekQsSUFBSTtjQUNIeUMsZUFBZSxDQUFDaUIsTUFBTSxFQUFFO1lBQ3pCOztVQUNBdkIiLCJuYW1lcyI6WyJWb2ljZUxhYiIsIkV2ZW50cyIsImNvbmZpZyIsInBhcmFtcyIsImVsZXZlbmxhYnMiLCJrZXkiLCJpZCIsImF1ZGlvIiwic3RvcCIsInBhdXNlIiwiYmxvYiIsInBsYXkiLCJ0ZXh0IiwiY29uc29sZSIsIndhcm4iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwidm9pY2VfaWQiLCJ2b2ljZV9zZXR0aW5ncyIsInN0YWJpbGl0eSIsInNpbWlsYXJpdHlfYm9vc3QiLCJtZWRpYVNvdXJjZSIsIk1lZGlhU291cmNlIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJBdWRpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzb3VyY2VCdWZmZXIiLCJhZGRTb3VyY2VCdWZmZXIiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJwdW1wIiwidmFsdWUiLCJkb25lIiwicmVhZCIsImVuZE9mU3RyZWFtIiwiYXBwZW5kQnVmZmVyIiwiZXhwb3J0cyIsIlZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInNwZWFraW5nIiwiY3VycmVudFdvcmQiLCJwYXVzZWQiLCJzcGVlY2hTeW50aGVzaXMiLCJsYW5nIiwidHJpZ2dlciIsImluc3RhbmNlIiwicmF0ZSIsImVuIiwiZXMiLCJwciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwicmVhY3RpdmVQcm9wcyIsInBvc2l0aW9uVG9DdXQiLCJpbml0aWFsVmFsdWVzIiwic2V0IiwiX3dlYiIsImNhbmNlbCIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsIm9uc3RhcnQiLCJnbG9iYWxUaGlzIiwib25wYXVzZSIsIm9ucmVzdW1lIiwib25ib3VuZGFyeSIsImV2ZW50IiwiY2hhckluZGV4Iiwib25lbmQiLCJzcGVhayIsImNvcmRvdmEiLCJfbW9iaWxlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ2b2ljZS1sYWIudHMiLCJ2b2ljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19