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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
        hash: 775658738,
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
                console.log('validando', item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdGV4dHMiLCJyZXF1aXJlIiwiX21vZGVsIiwiX2JleW9uZF9jb250ZXh0IiwiR2xvYmFsVGV4dHMiLCJSZWFjdGl2ZU1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJvYmplY3QiLCJpbnN0YW5jZSIsInZhbHVlIiwibW9kdWxlcyIsIk1hcCIsInJlYWR5IiwibW9kdWxlc1JlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImxlbmd0aCIsImxvYWQiLCJzaXplIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwibmFtZSIsInNldCIsImV4cG9ydHMiLCJnbG9iYWxUZXh0cyIsImdsb2JhbFRoaXMiLCJndGV4dHMiXSwic291cmNlcyI6WyIvbG9hZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsZUFBQSxHQUFBRixPQUFBO1VBS087VUFBVSxNQUFPRyxXQUFZLFNBQVFGLE1BQUEsQ0FBQUcsYUFBcUI7WUFDaEUsQ0FBQUMsS0FBTSxHQUF5QixJQUFJTixNQUFBLENBQUFPLFlBQVksQ0FBQ0osZUFBQSxDQUFBSyxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUNqRSxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUosS0FBTTtZQUNuQjtZQUNRLE9BQU9LLFFBQVE7WUFDdkIsSUFBSUwsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRU0sS0FBSyxJQUFJLEVBQUU7WUFDaEM7WUFFQSxDQUFBQyxPQUFRLEdBQXNDLElBQUlDLEdBQUcsRUFBRTtZQUN2RCxJQUFJRCxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNTLEtBQUssSUFBSSxJQUFJLENBQUNDLFlBQVksRUFBRTtZQUNoRDtZQUNBQyxZQUFZSixPQUFPLEdBQUcsRUFBRTtjQUN2QixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDWSxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FFakQ7Y0FDQSxJQUFJTixPQUFPLENBQUNPLE1BQU0sRUFBRSxJQUFJLENBQUNDLElBQUksQ0FBQ1IsT0FBTyxDQUFDO1lBQ3ZDO1lBRUFHLFlBQVksR0FBR0EsQ0FBQSxLQUFLO2NBQ25CLElBQUksSUFBSSxDQUFDLENBQUFILE9BQVEsQ0FBQ1MsSUFBSSxLQUFLLENBQUMsRUFBRSxPQUFPLElBQUk7Y0FDekMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFULE9BQVEsQ0FBQ1UsTUFBTSxFQUFFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsSUFBSSxLQUFJO2dCQUN2REMsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFRixJQUFJLENBQUM7Z0JBQzlCLE9BQU9BLElBQUksQ0FBQ1gsS0FBSyxJQUFJVSxHQUFHO2NBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDO1lBQ0QsTUFBTUosSUFBSUEsQ0FBQ1IsT0FBaUI7Y0FDM0IsSUFBSSxDQUFDZ0IsS0FBSyxDQUFDQyxPQUFPLENBQUNqQixPQUFPLENBQUMsRUFBRTtjQUU3QkEsT0FBTyxDQUFDa0IsT0FBTyxDQUFDQyxJQUFJLElBQUc7Z0JBQ3RCLE1BQU1OLElBQUksR0FBRyxJQUFJMUIsTUFBQSxDQUFBTyxZQUFZLENBQVN5QixJQUFJLENBQUM7Z0JBQzNDTixJQUFJLENBQUNSLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Z0JBQ3BDO2dCQUNBLElBQUksQ0FBQyxDQUFBTixPQUFRLENBQUNvQixHQUFHLENBQUNELElBQUksRUFBRU4sSUFBSSxDQUFDO2NBQzlCLENBQUMsQ0FBQztjQUVGO1lBQ0Q7O1VBQ0FRLE9BQUEsQ0FBQTlCLFdBQUEsR0FBQUEsV0FBQTtVQUVNO1VBQVcsTUFBTStCLFdBQVcsR0FBQUQsT0FBQSxDQUFBQyxXQUFBLEdBQUcsSUFBSS9CLFdBQVcsRUFBRTtVQUN2RGdDLFVBQVUsQ0FBQ0MsTUFBTSxHQUFHRixXQUFXIiwiaWdub3JlTGlzdCI6W119