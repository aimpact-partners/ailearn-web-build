System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@1.0.0/config", "@beyond-js/reactive@1.1.4/model"], function (_export, _context) {
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
    }, function (_beyondJsReactive114Model) {
      dependency_3 = _beyondJsReactive114Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUs7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUNyQixPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUN0QixJQUFJLENBQUNBLE9BQU8sQ0FBQyxXQUFXLENBQUM7Y0FDMUIsQ0FBQztjQUVERixlQUFlLENBQUN3QixLQUFLLENBQUNWLFNBQVMsQ0FBQztZQUNqQztZQUVBcEQsSUFBSSxDQUFDQyxJQUF5QixFQUFFTixFQUF1QjtjQUN0RCxJQUFJTSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBR0EsSUFBSTtjQUUzQixJQUFJLENBQUMsR0FBRyxHQUFHTixFQUFFO2NBQ2I0RCxVQUFVLENBQUNRLE9BQU8sR0FBRyxJQUFJLENBQUNDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQ2QsSUFBSSxFQUFFO1lBQ2xEO1lBRUFyRCxJQUFJO2NBQ0h5QyxlQUFlLENBQUNhLE1BQU0sRUFBRTtZQUN6Qjs7VUFDQW5CIiwibmFtZXMiOlsiVm9pY2VMYWIiLCJFdmVudHMiLCJjb25maWciLCJwYXJhbXMiLCJlbGV2ZW5sYWJzIiwia2V5IiwiaWQiLCJhdWRpbyIsInN0b3AiLCJwYXVzZSIsImJsb2IiLCJwbGF5IiwidGV4dCIsImNvbnNvbGUiLCJ3YXJuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInZvaWNlX2lkIiwidm9pY2Vfc2V0dGluZ3MiLCJzdGFiaWxpdHkiLCJzaW1pbGFyaXR5X2Jvb3N0IiwibWVkaWFTb3VyY2UiLCJNZWRpYVNvdXJjZSIsImF1ZGlvVVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwic291cmNlQnVmZmVyIiwiYWRkU291cmNlQnVmZmVyIiwicmVhZGVyIiwiZ2V0UmVhZGVyIiwicHVtcCIsInZhbHVlIiwiZG9uZSIsInJlYWQiLCJlbmRPZlN0cmVhbSIsImFwcGVuZEJ1ZmZlciIsImV4cG9ydHMiLCJWb2ljZSIsIlJlYWN0aXZlTW9kZWwiLCJzcGVha2luZyIsImN1cnJlbnRXb3JkIiwicGF1c2VkIiwic3BlZWNoU3ludGhlc2lzIiwibGFuZyIsInRyaWdnZXIiLCJ0ZXh0SWQiLCJpbnN0YW5jZSIsInJhdGUiLCJjb25zdHJ1Y3RvciIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsInJlYWN0aXZlUHJvcHMiLCJwb3NpdGlvblRvQ3V0IiwiX3dlYiIsImNhbmNlbCIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsIm9uc3RhcnQiLCJnbG9iYWxUaGlzIiwib25wYXVzZSIsIm9ucmVzdW1lIiwib25ib3VuZGFyeSIsImV2ZW50IiwiY2hhckluZGV4Iiwib25lbmQiLCJzcGVhayIsImNvcmRvdmEiLCJfbW9iaWxlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ2b2ljZS1sYWIudHMiLCJ2b2ljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19