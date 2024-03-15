System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.27/config", "@beyond-js/reactive@1.1.11/model"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0027Config) {
      dependency_2 = _aimpactAilearnApp0027Config;
    }, function (_beyondJsReactive1111Model) {
      dependency_3 = _beyondJsReactive1111Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.27"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@aimpact/chat-sdk/config', dependency_2], ['@beyond-js/reactive/model', dependency_3]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfY29uZmlnIiwiVm9pY2VMYWIiLCJFdmVudHMiLCJhcGlLZXkiLCJkZWZhdWx0IiwicGFyYW1zIiwiZWxldmVubGFicyIsImtleSIsInZvaWNlSWQiLCJpZCIsInVybCIsImhlYWRlcnMiLCJhdWRpbyIsInN0b3AiLCJwYXVzZSIsImJsb2IiLCJwbGF5IiwidGV4dCIsImNvbnNvbGUiLCJ3YXJuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwidm9pY2VfaWQiLCJ2b2ljZV9zZXR0aW5ncyIsInN0YWJpbGl0eSIsInNpbWlsYXJpdHlfYm9vc3QiLCJtZWRpYVNvdXJjZSIsIk1lZGlhU291cmNlIiwiYXVkaW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJBdWRpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzb3VyY2VCdWZmZXIiLCJhZGRTb3VyY2VCdWZmZXIiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJwdW1wIiwidmFsdWUiLCJkb25lIiwicmVhZCIsImVuZE9mU3RyZWFtIiwiYXBwZW5kQnVmZmVyIiwiZXhwb3J0cyIsIl9tb2RlbCIsIlZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInNwZWFraW5nIiwiY3VycmVudFdvcmQiLCJwYXVzZWQiLCJzcGVlY2hTeW50aGVzaXMiLCJsYW5nIiwidHJpZ2dlciIsImluc3RhbmNlIiwicmF0ZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJjdXJyZW50IiwicmVhY3RpdmVQcm9wcyIsInBvc2l0aW9uVG9DdXQiLCJpbml0aWFsVmFsdWVzIiwic2V0IiwiX3dlYiIsImNhbmNlbCIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsIm9uc3RhcnQiLCJnbG9iYWxUaGlzIiwib25wYXVzZSIsIm9ucmVzdW1lIiwib25ib3VuZGFyeSIsImV2ZW50IiwiY2hhckluZGV4Iiwib25lbmQiLCJzcGVhayIsImNvcmRvdmEiLCJfbW9iaWxlIl0sInNvdXJjZXMiOlsiL3ZvaWNlLWxhYi50cyIsIi92b2ljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsUUFBUyxTQUFRSCxLQUFBLENBQUFJLE1BQU07WUFDNUIsQ0FBQUMsTUFBTyxHQUFHSCxPQUFBLENBQUFJLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLENBQUNDLEdBQUc7WUFDdEMsQ0FBQUMsT0FBUSxHQUFHUixPQUFBLENBQUFJLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLENBQUNHLEVBQUU7WUFDdEMsQ0FBQUMsR0FBSSxHQUFHLCtDQUErQyxJQUFJLENBQUMsQ0FBQUYsT0FBUSxTQUFTO1lBRTVFLENBQUFHLE9BQVEsR0FBRztjQUNWLGNBQWMsRUFBRSxrQkFBa0I7Y0FDbEMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBUjthQUNuQjtZQUVELENBQUFTLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBRCxLQUFNLEVBQUU7Y0FDbEIsSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ0UsS0FBSyxFQUFFO1lBQ3BCO1lBRUEsQ0FBQUMsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBRUEsTUFBTUMsSUFBSUEsQ0FBQ0MsSUFBWTtjQUN0QixJQUFJLENBQUNBLElBQUksRUFBRTtnQkFDVkMsT0FBTyxDQUFDQyxJQUFJLENBQUMsK0JBQStCLENBQUM7Z0JBQzdDOztjQUdERCxPQUFPLENBQUNDLElBQUksQ0FBQyxVQUFVLENBQUM7Y0FFeEIsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQVgsR0FBSSxFQUFFO2dCQUN2Q1ksTUFBTSxFQUFFLE1BQU07Z0JBQ2RYLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQUEsT0FBUTtnQkFDdEJZLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7a0JBQ3BCUixJQUFJO2tCQUNKUyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFsQixPQUFRO2tCQUN2Qm1CLGNBQWMsRUFBRTtvQkFDZkMsU0FBUyxFQUFFLENBQUM7b0JBQ1pDLGdCQUFnQixFQUFFOztpQkFFbkI7ZUFDRCxDQUFDO2NBRUYsTUFBTUMsV0FBVyxHQUFHLElBQUlDLFdBQVcsRUFBRTtjQUNyQyxNQUFNQyxRQUFRLEdBQUdDLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDSixXQUFXLENBQUM7Y0FDakQsSUFBSSxDQUFDLENBQUFsQixLQUFNLEdBQUcsSUFBSXVCLEtBQUssQ0FBQ0gsUUFBUSxDQUFDO2NBRWpDRixXQUFXLENBQUNNLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFXO2dCQUNyRCxNQUFNQyxZQUFZLEdBQUdQLFdBQVcsQ0FBQ1EsZUFBZSxDQUFDLFlBQVksQ0FBQztnQkFDOUQsTUFBTUMsTUFBTSxHQUFHbkIsUUFBUSxDQUFDRyxJQUFJLENBQUNpQixTQUFTLEVBQUU7Z0JBQ3hDLE1BQU1DLElBQUksR0FBRyxNQUFBQSxDQUFBLEtBQVc7a0JBQ3ZCLE1BQU07b0JBQUVDLEtBQUs7b0JBQUVDO2tCQUFJLENBQUUsR0FBRyxNQUFNSixNQUFNLENBQUNLLElBQUksRUFBRTtrQkFDM0MsSUFBSUQsSUFBSSxFQUFFLE9BQU9iLFdBQVcsQ0FBQ2UsV0FBVyxFQUFFO2tCQUUxQ1IsWUFBWSxDQUFDUyxZQUFZLENBQUNKLEtBQUssQ0FBQztrQkFDaENELElBQUksRUFBRTtnQkFDUCxDQUFDO2dCQUNEQSxJQUFJLEVBQUU7Y0FDUCxDQUFDLENBQUM7Y0FFRixJQUFJLENBQUMsQ0FBQTdCLEtBQU0sQ0FBQ0ksSUFBSSxFQUFFO1lBQ25COztVQUNBK0IsT0FBQSxDQUFBOUMsUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BFRCxJQUFBK0MsTUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFELEtBQUEsR0FBQUMsT0FBQTtVQUNPO1VBQVUsTUFBT2tELEtBQU0sU0FBUUQsTUFBQSxDQUFBRSxhQUFvQjtZQUN6RCxDQUFBQyxRQUFTLEdBQUcsS0FBSztZQUNqQixJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUExQyxFQUFHO1lBQ0gsQ0FBQVEsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBRUEsSUFBSUEsSUFBSUEsQ0FBQ3lCLEtBQWE7Y0FDckIsSUFBSSxDQUFDLENBQUF6QixJQUFLLEdBQUd5QixLQUFLO1lBQ25CO1lBRUEsQ0FBQVUsV0FBWSxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPQyxlQUFlLENBQUNELE1BQU07WUFDOUI7WUFFQSxDQUFBRSxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxJQUFJQSxJQUFJQSxDQUFDYixLQUFLO2NBQ2IsSUFBSUEsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBYSxJQUFLLEVBQUU7Y0FDMUIsSUFBSSxDQUFDLENBQUFBLElBQUssR0FBR2IsS0FBSztjQUVsQixJQUFJLENBQUNjLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFJQSxDQUFBQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBQyxJQUFLLEdBQUcsR0FBRztZQUNYLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBRUEsSUFBSUEsSUFBSUEsQ0FBQ2hCLEtBQWE7Y0FDckIsSUFBSUEsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBZ0IsSUFBSyxFQUFFO2NBQzFCLElBQUksQ0FBQyxDQUFBQSxJQUFLLEdBQUdoQixLQUFLO2NBQ2xCLElBQUksQ0FBQ2MsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUdBLENBQUFHLFNBQVUsR0FBRztjQUNaQyxFQUFFLEVBQUUsT0FBTztjQUNYQyxFQUFFLEVBQUUsT0FBTztjQUNYQyxFQUFFLEVBQUU7YUFDSjtZQUNEQyxZQUFZO2NBQUVDLFFBQVE7Y0FBRU47WUFBSSxJQUEyQztjQUFFQSxJQUFJLEVBQUU7WUFBSSxDQUFFO2NBQ3BGLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ00sUUFBUSxFQUFFQSxRQUFRLEdBQUdsRSxLQUFBLENBQUE2RCxTQUFTLENBQUNNLE9BQU87Y0FDM0MsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7Y0FDL0MsSUFBSSxDQUFDQyxhQUFhLEdBQUcsQ0FBQztjQUV0QixJQUFJLENBQUNaLElBQUksR0FBR1MsUUFBUTtjQUNwQixJQUFJLENBQUNOLElBQUksR0FBR0EsSUFBSTtjQUVoQixJQUFJLENBQUNVLGFBQWEsQ0FBQztnQkFDbEJiLElBQUksRUFBRVMsUUFBUTtnQkFDZE4sSUFBSSxFQUFFQTtlQUNOLENBQUM7WUFDSDtZQUVBVyxHQUFHQSxDQUFDO2NBQUVMLFFBQVE7Y0FBRU47WUFBSSxDQUFFO2NBQ3JCLElBQUlNLFFBQVEsRUFBRTtnQkFDYixJQUFJLENBQUNULElBQUksR0FBR1MsUUFBUTs7Y0FFckIsSUFBSU4sSUFBSSxFQUFFLElBQUksQ0FBQ0EsSUFBSSxHQUFHQSxJQUFJO1lBQzNCO1lBQ0FZLElBQUlBLENBQUE7Y0FDSCxJQUFJLElBQUksQ0FBQyxDQUFBbkIsUUFBUyxFQUFFO2dCQUNuQkcsZUFBZSxDQUFDaUIsTUFBTSxFQUFFO2dCQUN4QixJQUFJLENBQUNmLE9BQU8sQ0FBQyxXQUFXLENBQUM7O2NBRzFCLE1BQU12QyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUFBLElBQUs7Y0FDdkIsTUFBTXVELFNBQVMsR0FBRyxJQUFJQyx3QkFBd0IsQ0FBQ3hELElBQUksQ0FBQztjQUNwRHVELFNBQVMsQ0FBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQUksU0FBVSxDQUFDLElBQUksQ0FBQ0osSUFBSSxDQUFDO2NBQzNDaUIsU0FBUyxDQUFDZCxJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJO2NBRTFCYyxTQUFTLENBQUNFLE9BQU8sR0FBRyxNQUFLO2dCQUN4QixJQUFJLENBQUMsQ0FBQXZCLFFBQVMsR0FBRyxJQUFJO2dCQUNyQixJQUFJLENBQUNLLE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDdkIsQ0FBQztjQUNEbUIsVUFBVSxDQUFDdkMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLE1BQUs7Z0JBQ2hEa0IsZUFBZSxDQUFDaUIsTUFBTSxFQUFFO2NBQ3pCLENBQUMsQ0FBQztjQUVGQyxTQUFTLENBQUNJLE9BQU8sR0FBRyxNQUFLO2dCQUN4QixJQUFJLENBQUNwQixPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ3ZCLENBQUM7Y0FDRGdCLFNBQVMsQ0FBQ0ssUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDckIsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUVqRGdCLFNBQVMsQ0FBQ00sVUFBVSxHQUFHQyxLQUFLLElBQUc7Z0JBQzlCLElBQUksQ0FBQyxDQUFBM0IsV0FBWSxHQUFHMkIsS0FBSyxDQUFDQyxTQUFTLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBR0QsS0FBSyxDQUFDQyxTQUFTO2dCQUUvRCxJQUFJLENBQUN4QixPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUN0QixJQUFJLENBQUNBLE9BQU8sQ0FBQyxVQUFVLENBQUM7Y0FDekIsQ0FBQztjQUVEZ0IsU0FBUyxDQUFDUyxLQUFLLEdBQUcsTUFBSztnQkFDdEIsSUFBSSxDQUFDLENBQUE5QixRQUFTLEdBQUcsS0FBSztnQkFDdEIsSUFBSSxDQUFDLENBQUFDLFdBQVksR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQ0ksT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDdEIsSUFBSSxDQUFDQSxPQUFPLENBQUMsV0FBVyxDQUFDO2NBQzFCLENBQUM7Y0FFREYsZUFBZSxDQUFDNEIsS0FBSyxDQUFDVixTQUFTLENBQUM7WUFDakM7WUFFQXhELElBQUlBLENBQUNDLElBQXlCLEVBQUVSLEVBQXVCO2NBQ3RELElBQUlRLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQUEsSUFBSyxHQUFHQSxJQUFJO2NBRTNCLElBQUksQ0FBQyxDQUFBUixFQUFHLEdBQUdBLEVBQUU7Y0FDYmtFLFVBQVUsQ0FBQ1EsT0FBTyxHQUFHLElBQUksQ0FBQ0MsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDZCxJQUFJLEVBQUU7WUFDbEQ7WUFFQXpELElBQUlBLENBQUE7Y0FDSHlDLGVBQWUsQ0FBQ2lCLE1BQU0sRUFBRTtZQUN6Qjs7VUFDQXhCLE9BQUEsQ0FBQUUsS0FBQSxHQUFBQSxLQUFBIn0=