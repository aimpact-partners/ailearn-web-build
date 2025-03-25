System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, CurrentTexts, Texts, __beyond_pkg, hmr;
  _export({
    CurrentTexts: void 0,
    Texts: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", null], ["@types/node", "18.11.18"], ["@beyond-js/kernel", "0.1.9"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/kernel@0.1.9/texts"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./current
      *************************/
      ims.set('./current', {
        hash: 1735458173,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CurrentTexts = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _texts = require("./texts");
          /*bundle*/ /**
                      * The texts loaded by the current language (not available in SSR environment)
                      */
          class CurrentTexts extends _core.Events {
            #texts = new Map();
            #bundle;
            get bundle() {
              return this.#bundle;
            }
            #enabled = false;
            get enabled() {
              return this.#enabled;
            }
            set enabled(value) {
              this.#enabled = !!value;
              value && this.fetch().catch(exc => console.error(exc.stack));
            }
            #last;
            get #current() {
              const {
                current: language
              } = _core.languages;
              if (this.#texts.has(language)) return this.#texts.get(language);
              const texts = new _texts.Texts(this.#bundle, {
                language
              });
              this.#texts.set(language, texts);
              return texts;
            }
            get loading() {
              return this.#current.loading;
            }
            get loaded() {
              return this.#current.loaded;
            }
            /*
            @deprecated
            old versions
             */
            get ready() {
              !this.loaded && !this.loading && this.fetch().catch(exc => console.error(exc.stack));
              return this.loaded;
            }
            get value() {
              return this.#current.value;
            }
            /**
             * Current texts constructor
             *
             * @param {string} bundle
             */
            constructor(bundle) {
              super();
              this.#bundle = bundle;
              if (!bundle) throw new Error(`Bundle parameter must be specified`);
              _core.languages.on('change', this.#change);
              this.#current.on('change', this.#triggerChange);
              this.#last = this.#current;
            }
            #triggerChange = () => {
              this.trigger('change');
            };
            #change = () => {
              this.#last.off('change', this.#triggerChange);
              this.#enabled && this.fetch().catch(exc => console.log(exc.stack));
              this.#current.on('change', this.#triggerChange);
              this.#last = this.#current;
              this.#triggerChange();
            };
            async fetch() {
              await _core.languages.ready;
              await this.#current.fetch();
            }
            /**
             * @deprecated Deprecated method. Use .fetch instead
             * @return {Promise<void>}
             */
            async load() {
              await this.#current.fetch();
            }
            destroy() {
              this.#texts.forEach(texts => texts.destroy());
              _core.languages.off('change', this.#change);
            }
            toJSON() {
              return {};
            }
          }
          exports.CurrentTexts = CurrentTexts;
        }
      });

      /***********************
      INTERNAL MODULE: ./texts
      ***********************/

      ims.set('./texts', {
        hash: 678111696,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Texts = void 0;
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class Texts extends _core.Events {
            /**
             * The module resource
             * @type {string}
             * @private
             */
            #module;
            get module() {
              return this.#module;
            }
            /**
             * The bundle name. Ex: 'txt'
             * @type {string}
             * @private
             */
            #bundle;
            get bundle() {
              return this.#bundle;
            }
            /**
             * The transversal bundle name. Ex: 'txt-menu'
             * @type {string}
             * @private
             */
            #transversal;
            get transversal() {
              return this.#transversal;
            }
            #multilanguage;
            get multilanguage() {
              return this.#multilanguage;
            }
            #language;
            get language() {
              return this.#language;
            }
            // The loaded bundle
            #texts;
            #loaded = false;
            get loaded() {
              return this.#loaded;
            }
            #loading;
            get loading() {
              return this.#loading;
            }
            get value() {
              return this.#texts?.txt;
            }
            get ready() {
              if (this.#loading) return false;
              this.fetch().catch(exc => console.log(exc.stack));
              return !this.#loading && this.#loaded;
            }
            /**
             * Module texts constructor
             *
             * @param {string} module The module resource
             * @param {{transversal: string, language: string}} specs
             */
            constructor(module, specs) {
              if (!module) throw new Error('Invalid parameters');
              super();
              this.#module = module;
              specs = specs ? specs : {};
              this.#language = specs.language;
              this.#multilanguage = !!specs.language;
              this.#bundle = !specs.transversal ? specs.bundle ? specs.bundle : 'txt' : void 0;
              this.#transversal = specs.transversal;
            }
            // Used by HMR when packaged has been updated
            #update = () => this.trigger('change');
            async fetch() {
              if (this.#loading || this.#loaded) return;
              this.#loading = true;
              this.trigger('change');
              const language = this.#language ? `.${this.#language}` : '';
              const {
                specifier,
                resource
              } = (() => {
                if (this.#transversal) {
                  const specifier = `${this.#module}.${this.#transversal}${language}`;
                  const pkg = (() => {
                    const split = this.#module.split('/');
                    return split[0].startsWith('@') ? `${split[0]}/${split[1]}` : split[0];
                  })();
                  const resource = `${pkg}/${this.#transversal}${language}`;
                  return {
                    specifier,
                    resource
                  };
                } else {
                  const specifier = `${this.#module}.${this.#bundle}${language}`;
                  return {
                    specifier,
                    resource: specifier
                  };
                }
              })();
              const imported = await bimport(resource);
              this.#texts = (() => {
                if (!this.#transversal) return imported;
                const {
                  __beyond_transversal: transversal
                } = imported;
                return transversal.bundles.get(specifier);
              })();
              this.#texts.hmr.on('change', this.#update);
              this.#loading = false;
              this.#loaded = true;
              this.trigger('change');
            }
            /**
             * @deprecated Deprecated method. Use .fetch instead
             * @return {Promise<void>}
             */
            async load() {
              await this.fetch();
            }
            destroy() {
              this.#texts?.hmr.off('change', this.#update);
            }
            toJSON() {
              return {};
            }
          }
          exports.Texts = Texts;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./current",
        "from": "CurrentTexts",
        "name": "CurrentTexts"
      }, {
        "im": "./texts",
        "from": "Texts",
        "name": "Texts"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CurrentTexts') && _export("CurrentTexts", CurrentTexts = require ? require('./current').CurrentTexts : value);
        (require || prop === 'Texts') && _export("Texts", Texts = require ? require('./texts').Texts : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfdGV4dHMiLCJDdXJyZW50VGV4dHMiLCJFdmVudHMiLCJ0ZXh0cyIsIk1hcCIsImJ1bmRsZSIsImVuYWJsZWQiLCJ2YWx1ZSIsImZldGNoIiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImxhc3QiLCJjdXJyZW50IiwiI2N1cnJlbnQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImhhcyIsImdldCIsIlRleHRzIiwic2V0IiwibG9hZGluZyIsImxvYWRlZCIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJFcnJvciIsIm9uIiwiY2hhbmdlIiwidHJpZ2dlckNoYW5nZSIsIiN0cmlnZ2VyQ2hhbmdlIiwidHJpZ2dlciIsIiNjaGFuZ2UiLCJvZmYiLCJsb2ciLCJsb2FkIiwiZGVzdHJveSIsImZvckVhY2giLCJ0b0pTT04iLCJleHBvcnRzIiwibW9kdWxlIiwidHJhbnN2ZXJzYWwiLCJtdWx0aWxhbmd1YWdlIiwidHh0Iiwic3BlY3MiLCJ1cGRhdGUiLCIjdXBkYXRlIiwic3BlY2lmaWVyIiwicmVzb3VyY2UiLCJwa2ciLCJzcGxpdCIsInN0YXJ0c1dpdGgiLCJpbXBvcnRlZCIsImJpbXBvcnQiLCJfX2JleW9uZF90cmFuc3ZlcnNhbCIsImJ1bmRsZXMiLCJobXIiXSwic291cmNlcyI6WyIvY3VycmVudC50cyIsIi90ZXh0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBYU8sV0FIUDs7O1VBR2lCLE1BQ1hFLFlBQStCLFNBQVFILEtBQUEsQ0FBQUksTUFBTTtZQUMvQyxDQUFBQyxLQUFNLEdBQXlDLElBQUlDLEdBQUcsRUFBRTtZQUUvQyxDQUFBQyxNQUFPO1lBQ2hCLElBQUlBLE1BQU1BLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3ZCO1lBRUEsQ0FBQUMsT0FBUSxHQUFHLEtBQUs7WUFDaEIsSUFBSUEsT0FBT0EsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDeEI7WUFFQSxJQUFJQSxPQUFPQSxDQUFDQyxLQUFLO2NBQ2IsSUFBSSxDQUFDLENBQUFELE9BQVEsR0FBRyxDQUFDLENBQUNDLEtBQUs7Y0FDdkJBLEtBQUssSUFBSSxJQUFJLENBQUNDLEtBQUssRUFBRSxDQUFDQyxLQUFLLENBQUNDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDLENBQUM7WUFDaEU7WUFFQSxDQUFBQyxJQUFLO1lBRUwsSUFBSSxDQUFBQyxPQUFRQyxDQUFBO2NBQ1IsTUFBTTtnQkFBQ0QsT0FBTyxFQUFFRTtjQUFRLENBQUMsR0FBR25CLEtBQUEsQ0FBQW9CLFNBQVM7Y0FDckMsSUFBSSxJQUFJLENBQUMsQ0FBQWYsS0FBTSxDQUFDZ0IsR0FBRyxDQUFDRixRQUFRLENBQUMsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBZCxLQUFNLENBQUNpQixHQUFHLENBQUNILFFBQVEsQ0FBQztjQUUvRCxNQUFNZCxLQUFLLEdBQTRCLElBQUlILE1BQUEsQ0FBQXFCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQWhCLE1BQU8sRUFBRTtnQkFBQ1k7Y0FBUSxDQUFDLENBQUM7Y0FDMUUsSUFBSSxDQUFDLENBQUFkLEtBQU0sQ0FBQ21CLEdBQUcsQ0FBQ0wsUUFBUSxFQUFFZCxLQUFLLENBQUM7Y0FDaEMsT0FBT0EsS0FBSztZQUNoQjtZQUVBLElBQUlvQixPQUFPQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQVIsT0FBUSxDQUFDUSxPQUFPO1lBQ2hDO1lBRUEsSUFBSUMsTUFBTUEsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFULE9BQVEsQ0FBQ1MsTUFBTTtZQUMvQjtZQUVBOzs7O1lBSUEsSUFBSUMsS0FBS0EsQ0FBQTtjQUNMLENBQUMsSUFBSSxDQUFDRCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUNELE9BQU8sSUFBSSxJQUFJLENBQUNmLEtBQUssRUFBRSxDQUFDQyxLQUFLLENBQUVDLEdBQVUsSUFBS0MsT0FBTyxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDLENBQUM7Y0FDN0YsT0FBTyxJQUFJLENBQUNXLE1BQU07WUFDdEI7WUFFQSxJQUFJakIsS0FBS0EsQ0FBQTtjQUNMLE9BQU8sSUFBSSxDQUFDLENBQUFRLE9BQVEsQ0FBQ1IsS0FBSztZQUM5QjtZQUVBOzs7OztZQUtBbUIsWUFBWXJCLE1BQWM7Y0FDdEIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUNBLE1BQU0sRUFBRSxNQUFNLElBQUlzQixLQUFLLENBQUMsb0NBQW9DLENBQUM7Y0FFbEU3QixLQUFBLENBQUFvQixTQUFTLENBQUNVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFDLE1BQU8sQ0FBQztjQUNwQyxJQUFJLENBQUMsQ0FBQWQsT0FBUSxDQUFDYSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBRSxhQUFjLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUFoQixJQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFDLE9BQVE7WUFDOUI7WUFFQSxDQUFBZSxhQUFjLEdBQUdDLENBQUEsS0FBSztjQUNsQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDMUIsQ0FBQztZQUVELENBQUFILE1BQU8sR0FBR0ksQ0FBQSxLQUFLO2NBQ1gsSUFBSSxDQUFDLENBQUFuQixJQUFLLENBQUNvQixHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBSixhQUFjLENBQUM7Y0FFN0MsSUFBSSxDQUFDLENBQUF4QixPQUFRLElBQUksSUFBSSxDQUFDRSxLQUFLLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ3dCLEdBQUcsQ0FBQ3pCLEdBQUcsQ0FBQ0csS0FBSyxDQUFDLENBQUM7Y0FDbEUsSUFBSSxDQUFDLENBQUFFLE9BQVEsQ0FBQ2EsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQUUsYUFBYyxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBaEIsSUFBSyxHQUFHLElBQUksQ0FBQyxDQUFBQyxPQUFRO2NBRTFCLElBQUksQ0FBQyxDQUFBZSxhQUFjLEVBQUU7WUFDekIsQ0FBQztZQUVELE1BQU10QixLQUFLQSxDQUFBO2NBQ1AsTUFBTVYsS0FBQSxDQUFBb0IsU0FBUyxDQUFDTyxLQUFLO2NBQ3JCLE1BQU0sSUFBSSxDQUFDLENBQUFWLE9BQVEsQ0FBQ1AsS0FBSyxFQUFFO1lBQy9CO1lBRUE7Ozs7WUFJQSxNQUFNNEIsSUFBSUEsQ0FBQTtjQUNOLE1BQU0sSUFBSSxDQUFDLENBQUFyQixPQUFRLENBQUNQLEtBQUssRUFBRTtZQUMvQjtZQUVBNkIsT0FBT0EsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBbEMsS0FBTSxDQUFDbUMsT0FBTyxDQUFDbkMsS0FBSyxJQUFJQSxLQUFLLENBQUNrQyxPQUFPLEVBQUUsQ0FBQztjQUM3Q3ZDLEtBQUEsQ0FBQW9CLFNBQVMsQ0FBQ2dCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFMLE1BQU8sQ0FBQztZQUN6QztZQUVBVSxNQUFNQSxDQUFBO2NBQ0YsT0FBTyxFQUFFO1lBQ2I7O1VBQ0hDLE9BQUEsQ0FBQXZDLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuSEQsSUFBQUgsS0FBQSxHQUFBQyxPQUFBO1VBWU87VUFBVSxNQUNYc0IsS0FBd0IsU0FBUXZCLEtBQUEsQ0FBQUksTUFBTTtZQUN4Qzs7Ozs7WUFLUyxDQUFBdUMsTUFBTztZQUNoQixJQUFJQSxNQUFNQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUN2QjtZQUVBOzs7OztZQUtTLENBQUFwQyxNQUFPO1lBQ2hCLElBQUlBLE1BQU1BLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3ZCO1lBRUE7Ozs7O1lBS1MsQ0FBQXFDLFdBQVk7WUFDckIsSUFBSUEsV0FBV0EsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDNUI7WUFFUyxDQUFBQyxhQUFjO1lBQ3ZCLElBQUlBLGFBQWFBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzlCO1lBRVMsQ0FBQTFCLFFBQVM7WUFDbEIsSUFBSUEsUUFBUUEsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDekI7WUFFQTtZQUNBLENBQUFkLEtBQU07WUFFTixDQUFBcUIsTUFBTyxHQUFHLEtBQUs7WUFDZixJQUFJQSxNQUFNQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUN2QjtZQUVBLENBQUFELE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUN4QjtZQUVBLElBQUloQixLQUFLQSxDQUFBO2NBQ0wsT0FBTyxJQUFJLENBQUMsQ0FBQUosS0FBTSxFQUFFeUMsR0FBRztZQUMzQjtZQUVBLElBQUluQixLQUFLQSxDQUFBO2NBQ0wsSUFBSSxJQUFJLENBQUMsQ0FBQUYsT0FBUSxFQUFFLE9BQU8sS0FBSztjQUMvQixJQUFJLENBQUNmLEtBQUssRUFBRSxDQUFDQyxLQUFLLENBQUNDLEdBQUcsSUFBSUMsT0FBTyxDQUFDd0IsR0FBRyxDQUFDekIsR0FBRyxDQUFDRyxLQUFLLENBQUMsQ0FBQztjQUNqRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUFVLE9BQVEsSUFBSSxJQUFJLENBQUMsQ0FBQUMsTUFBTztZQUN6QztZQUVBOzs7Ozs7WUFNQUUsWUFBWWUsTUFBYyxFQUFFSSxLQUFtRTtjQUMzRixJQUFJLENBQUNKLE1BQU0sRUFBRSxNQUFNLElBQUlkLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztjQUVsRCxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQWMsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCSSxLQUFLLEdBQUdBLEtBQUssR0FBR0EsS0FBSyxHQUFHLEVBQUU7Y0FFMUIsSUFBSSxDQUFDLENBQUE1QixRQUFTLEdBQUc0QixLQUFLLENBQUM1QixRQUFRO2NBQy9CLElBQUksQ0FBQyxDQUFBMEIsYUFBYyxHQUFHLENBQUMsQ0FBQ0UsS0FBSyxDQUFDNUIsUUFBUTtjQUN0QyxJQUFJLENBQUMsQ0FBQVosTUFBTyxHQUFHLENBQUN3QyxLQUFLLENBQUNILFdBQVcsR0FBSUcsS0FBSyxDQUFDeEMsTUFBTSxHQUFHd0MsS0FBSyxDQUFDeEMsTUFBTSxHQUFHLEtBQUssR0FBSSxLQUFLLENBQUM7Y0FDbEYsSUFBSSxDQUFDLENBQUFxQyxXQUFZLEdBQUdHLEtBQUssQ0FBQ0gsV0FBVztZQUN6QztZQUVBO1lBQ0EsQ0FBQUksTUFBTyxHQUFHQyxDQUFBLEtBQU0sSUFBSSxDQUFDZixPQUFPLENBQUMsUUFBUSxDQUFDO1lBRXRDLE1BQU14QixLQUFLQSxDQUFBO2NBQ1AsSUFBSSxJQUFJLENBQUMsQ0FBQWUsT0FBUSxJQUFJLElBQUksQ0FBQyxDQUFBQyxNQUFPLEVBQUU7Y0FFbkMsSUFBSSxDQUFDLENBQUFELE9BQVEsR0FBRyxJQUFJO2NBQ3BCLElBQUksQ0FBQ1MsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUV0QixNQUFNZixRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFBLFFBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBQSxRQUFTLEVBQUUsR0FBRyxFQUFFO2NBRTNELE1BQU07Z0JBQUMrQixTQUFTO2dCQUFFQztjQUFRLENBQUMsR0FBRyxDQUFDLE1BQUs7Z0JBQ2hDLElBQUksSUFBSSxDQUFDLENBQUFQLFdBQVksRUFBRTtrQkFDbkIsTUFBTU0sU0FBUyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUFQLE1BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQUMsV0FBWSxHQUFHekIsUUFBUSxFQUFFO2tCQUNuRSxNQUFNaUMsR0FBRyxHQUFHLENBQUMsTUFBSztvQkFDZCxNQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFWLE1BQU8sQ0FBQ1UsS0FBSyxDQUFDLEdBQUcsQ0FBQztvQkFDckMsT0FBT0EsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBR0QsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBR0EsS0FBSyxDQUFDLENBQUMsQ0FBQztrQkFDMUUsQ0FBQyxFQUFDLENBQUU7a0JBQ0osTUFBTUYsUUFBUSxHQUFHLEdBQUdDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQVIsV0FBWSxHQUFHekIsUUFBUSxFQUFFO2tCQUN6RCxPQUFPO29CQUFDK0IsU0FBUztvQkFBRUM7a0JBQVEsQ0FBQztpQkFDL0IsTUFBTTtrQkFDSCxNQUFNRCxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQVAsTUFBTyxJQUFJLElBQUksQ0FBQyxDQUFBcEMsTUFBTyxHQUFHWSxRQUFRLEVBQUU7a0JBQzlELE9BQU87b0JBQUMrQixTQUFTO29CQUFFQyxRQUFRLEVBQUVEO2tCQUFTLENBQUM7O2NBRS9DLENBQUMsRUFBQyxDQUFFO2NBRUosTUFBTUssUUFBUSxHQUFHLE1BQU1DLE9BQU8sQ0FBQ0wsUUFBUSxDQUFDO2NBRXhDLElBQUksQ0FBQyxDQUFBOUMsS0FBTSxHQUFHLENBQUMsTUFBSztnQkFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBdUMsV0FBWSxFQUFFLE9BQU9XLFFBQVE7Z0JBRXZDLE1BQU07a0JBQUNFLG9CQUFvQixFQUFFYjtnQkFBVyxDQUFDLEdBQUdXLFFBQVE7Z0JBQ3BELE9BQU9YLFdBQVcsQ0FBQ2MsT0FBTyxDQUFDcEMsR0FBRyxDQUFDNEIsU0FBUyxDQUFDO2NBQzdDLENBQUMsRUFBQyxDQUFFO2NBRUosSUFBSSxDQUFDLENBQUE3QyxLQUFNLENBQUNzRCxHQUFHLENBQUM3QixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBa0IsTUFBTyxDQUFDO2NBRTFDLElBQUksQ0FBQyxDQUFBdkIsT0FBUSxHQUFHLEtBQUs7Y0FDckIsSUFBSSxDQUFDLENBQUFDLE1BQU8sR0FBRyxJQUFJO2NBQ25CLElBQUksQ0FBQ1EsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUMxQjtZQUVBOzs7O1lBSUEsTUFBTUksSUFBSUEsQ0FBQTtjQUNOLE1BQU0sSUFBSSxDQUFDNUIsS0FBSyxFQUFFO1lBQ3RCO1lBRUE2QixPQUFPQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFsQyxLQUFNLEVBQUVzRCxHQUFHLENBQUN2QixHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBWSxNQUFPLENBQUM7WUFDaEQ7WUFFQVAsTUFBTUEsQ0FBQTtjQUNGLE9BQU8sRUFBRTtZQUNiOztVQUNIQyxPQUFBLENBQUFuQixLQUFBLEdBQUFBLEtBQUEiLCJpZ25vcmVMaXN0IjpbXX0=