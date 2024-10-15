System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/reactive/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, GlobalTexts, globalTexts, __beyond_pkg, hmr;
  _export({
    GlobalTexts: void 0,
    globalTexts: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Texts) {
      dependency_1 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_2 = _aimpactAilearnSdk100ReactiveModel;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/i18n",
          "multibundle": true
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/texts', dependency_1], ['@aimpact/ailearn-sdk/reactive/model', dependency_2]]);
      ims = new Map();
      /************************
      INTERNAL MODULE: ./loader
      ************************/
      ims.set('./loader', {
        hash: 1339849998,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.globalTexts = exports.GlobalTexts = void 0;
          var _texts = require("@beyond-js/kernel/texts");
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          class GlobalTexts extends _model.ReactiveModel {
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get object() {
              return this.#texts;
            }
            static instance;
            get texts() {
              return this.#texts?.value ?? {};
            }
            #modules = new Map();
            get modules() {
              return this.#modules;
            }
            get ready() {
              return this.#texts.ready && this.modulesReady();
            }
            constructor(modules = []) {
              super();
              this.#texts.on('change', () => this.triggerEvent);
              // this.#texts.fetch();
              if (modules.length) this.load(modules);
            }
            modulesReady = () => {
              if (this.#modules.size === 0) return true;
              return [...this.#modules.values()].reduce((acc, item) => {
                return item.ready && acc;
              }, true);
            };
            async load(modules) {
              if (!Array.isArray(modules)) return;
              modules.forEach(name => {
                const item = new _texts.CurrentTexts(name);
                item.on('change', this.triggerEvent);
                // item.fetch();
                this.#modules.set(name, item);
              });
              // return this.instance;
            }
          }
          exports.GlobalTexts = GlobalTexts;
          /*bundle*/
          const globalTexts = exports.globalTexts = new GlobalTexts();
          globalThis.gtexts = globalTexts;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./loader",
        "from": "GlobalTexts",
        "name": "GlobalTexts"
      }, {
        "im": "./loader",
        "from": "globalTexts",
        "name": "globalTexts"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'GlobalTexts') && _export("GlobalTexts", GlobalTexts = require ? require('./loader').GlobalTexts : value);
        (require || prop === 'globalTexts') && _export("globalTexts", globalTexts = require ? require('./loader').globalTexts : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdGV4dHMiLCJyZXF1aXJlIiwiX21vZGVsIiwiX2JleW9uZF9jb250ZXh0IiwiR2xvYmFsVGV4dHMiLCJSZWFjdGl2ZU1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJvYmplY3QiLCJpbnN0YW5jZSIsInZhbHVlIiwibW9kdWxlcyIsIk1hcCIsInJlYWR5IiwibW9kdWxlc1JlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImxlbmd0aCIsImxvYWQiLCJzaXplIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJuYW1lIiwic2V0IiwiZXhwb3J0cyIsImdsb2JhbFRleHRzIiwiZ2xvYmFsVGhpcyIsImd0ZXh0cyJdLCJzb3VyY2VzIjpbIi9sb2FkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxlQUFBLEdBQUFGLE9BQUE7VUFLTztVQUFVLE1BQU9HLFdBQVksU0FBUUYsTUFBQSxDQUFBRyxhQUFxQjtZQUNoRSxDQUFBQyxLQUFNLEdBQXlCLElBQUlOLE1BQUEsQ0FBQU8sWUFBWSxDQUFDSixlQUFBLENBQUFLLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ2pFLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBSixLQUFNO1lBQ25CO1lBQ1EsT0FBT0ssUUFBUTtZQUN2QixJQUFJTCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFTSxLQUFLLElBQUksRUFBRTtZQUNoQztZQUVBLENBQUFDLE9BQVEsR0FBc0MsSUFBSUMsR0FBRyxFQUFFO1lBQ3ZELElBQUlELE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1MsS0FBSyxJQUFJLElBQUksQ0FBQ0MsWUFBWSxFQUFFO1lBQ2hEO1lBQ0FDLFlBQVlKLE9BQU8sR0FBRyxFQUFFO2NBQ3ZCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUNDLFlBQVksQ0FBQztjQUVqRDtjQUNBLElBQUlOLE9BQU8sQ0FBQ08sTUFBTSxFQUFFLElBQUksQ0FBQ0MsSUFBSSxDQUFDUixPQUFPLENBQUM7WUFDdkM7WUFFQUcsWUFBWSxHQUFHQSxDQUFBLEtBQUs7Y0FDbkIsSUFBSSxJQUFJLENBQUMsQ0FBQUgsT0FBUSxDQUFDUyxJQUFJLEtBQUssQ0FBQyxFQUFFLE9BQU8sSUFBSTtjQUN6QyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQVQsT0FBUSxDQUFDVSxNQUFNLEVBQUUsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFQyxJQUFJLEtBQUk7Z0JBQ3ZELE9BQU9BLElBQUksQ0FBQ1gsS0FBSyxJQUFJVSxHQUFHO2NBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDO1lBQ0QsTUFBTUosSUFBSUEsQ0FBQ1IsT0FBaUI7Y0FDM0IsSUFBSSxDQUFDYyxLQUFLLENBQUNDLE9BQU8sQ0FBQ2YsT0FBTyxDQUFDLEVBQUU7Y0FFN0JBLE9BQU8sQ0FBQ2dCLE9BQU8sQ0FBQ0MsSUFBSSxJQUFHO2dCQUN0QixNQUFNSixJQUFJLEdBQUcsSUFBSTFCLE1BQUEsQ0FBQU8sWUFBWSxDQUFTdUIsSUFBSSxDQUFDO2dCQUMzQ0osSUFBSSxDQUFDUixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2dCQUNwQztnQkFDQSxJQUFJLENBQUMsQ0FBQU4sT0FBUSxDQUFDa0IsR0FBRyxDQUFDRCxJQUFJLEVBQUVKLElBQUksQ0FBQztjQUM5QixDQUFDLENBQUM7Y0FFRjtZQUNEOztVQUNBTSxPQUFBLENBQUE1QixXQUFBLEdBQUFBLFdBQUE7VUFFTTtVQUFXLE1BQU02QixXQUFXLEdBQUFELE9BQUEsQ0FBQUMsV0FBQSxHQUFHLElBQUk3QixXQUFXLEVBQUU7VUFDdkQ4QixVQUFVLENBQUNDLE1BQU0sR0FBR0YsV0FBVyIsImlnbm9yZUxpc3QiOltdfQ==