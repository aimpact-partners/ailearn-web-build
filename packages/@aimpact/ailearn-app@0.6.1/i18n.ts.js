System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/texts", "@beyond-js/reactive@2.1.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, GlobalTexts, globalTexts, __beyond_pkg, hmr;
  _export({
    GlobalTexts: void 0,
    globalTexts: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Texts) {
      dependency_1 = _beyondJsKernel0114Texts;
    }, function (_beyondJsReactive211Model) {
      dependency_2 = _beyondJsReactive211Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/i18n",
          "multibundle": true
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/texts', dependency_1], ['@beyond-js/reactive/model', dependency_2]]);
      ims = new Map();
      /************************
      INTERNAL MODULE: ./loader
      ************************/
      ims.set('./loader', {
        hash: 1628457131,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.globalTexts = exports.GlobalTexts = void 0;
          var _texts = require("@beyond-js/kernel/texts");
          var _model = require("@beyond-js/reactive/model");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdGV4dHMiLCJyZXF1aXJlIiwiX21vZGVsIiwiX2JleW9uZF9jb250ZXh0IiwiR2xvYmFsVGV4dHMiLCJSZWFjdGl2ZU1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJvYmplY3QiLCJpbnN0YW5jZSIsInZhbHVlIiwibW9kdWxlcyIsIk1hcCIsInJlYWR5IiwibW9kdWxlc1JlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImxlbmd0aCIsImxvYWQiLCJzaXplIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJuYW1lIiwic2V0IiwiZXhwb3J0cyIsImdsb2JhbFRleHRzIiwiZ2xvYmFsVGhpcyIsImd0ZXh0cyJdLCJzb3VyY2VzIjpbIi8vbG9hZGVyLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLGVBQUEsR0FBQUYsT0FBQTtVQUtPO1VBQVUsTUFBT0csV0FBWSxTQUFRRixNQUFBLENBQUFHLGFBQXFCO1lBQ2hFLENBQUFDLEtBQU0sR0FBeUIsSUFBSU4sTUFBQSxDQUFBTyxZQUFZLENBQUNKLGVBQUEsQ0FBQUssTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDakUsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFKLEtBQU07WUFDbkI7WUFDUSxPQUFPSyxRQUFRO1lBQ3ZCLElBQUlMLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVNLEtBQUssSUFBSSxFQUFFO1lBQ2hDO1lBRUEsQ0FBQUMsT0FBUSxHQUFzQyxJQUFJQyxHQUFHLEVBQUU7WUFDdkQsSUFBSUQsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxJQUFJRSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDUyxLQUFLLElBQUksSUFBSSxDQUFDQyxZQUFZLEVBQUU7WUFDaEQ7WUFDQUMsWUFBWUosT0FBTyxHQUFHLEVBQUU7Y0FDdkIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFQLEtBQU0sQ0FBQ1ksRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBRWpEO2NBQ0EsSUFBSU4sT0FBTyxDQUFDTyxNQUFNLEVBQUUsSUFBSSxDQUFDQyxJQUFJLENBQUNSLE9BQU8sQ0FBQztZQUN2QztZQUVBRyxZQUFZLEdBQUdBLENBQUEsS0FBSztjQUNuQixJQUFJLElBQUksQ0FBQyxDQUFBSCxPQUFRLENBQUNTLElBQUksS0FBSyxDQUFDLEVBQUUsT0FBTyxJQUFJO2NBQ3pDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBVCxPQUFRLENBQUNVLE1BQU0sRUFBRSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLElBQUksS0FBSTtnQkFDdkQsT0FBT0EsSUFBSSxDQUFDWCxLQUFLLElBQUlVLEdBQUc7Y0FDekIsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNULENBQUM7WUFDRCxNQUFNSixJQUFJQSxDQUFDUixPQUFpQjtjQUMzQixJQUFJLENBQUNjLEtBQUssQ0FBQ0MsT0FBTyxDQUFDZixPQUFPLENBQUMsRUFBRTtjQUU3QkEsT0FBTyxDQUFDZ0IsT0FBTyxDQUFDQyxJQUFJLElBQUc7Z0JBQ3RCLE1BQU1KLElBQUksR0FBRyxJQUFJMUIsTUFBQSxDQUFBTyxZQUFZLENBQVN1QixJQUFJLENBQUM7Z0JBQzNDSixJQUFJLENBQUNSLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Z0JBQ3BDO2dCQUNBLElBQUksQ0FBQyxDQUFBTixPQUFRLENBQUNrQixHQUFHLENBQUNELElBQUksRUFBRUosSUFBSSxDQUFDO2NBQzlCLENBQUMsQ0FBQztjQUVGO1lBQ0Q7O1VBQ0FNLE9BQUEsQ0FBQTVCLFdBQUEsR0FBQUEsV0FBQTtVQUVNO1VBQVcsTUFBTTZCLFdBQVcsR0FBQUQsT0FBQSxDQUFBQyxXQUFBLEdBQUcsSUFBSTdCLFdBQVcsRUFBRTtVQUN2RDhCLFVBQVUsQ0FBQ0MsTUFBTSxHQUFHRixXQUFXIiwiaWdub3JlTGlzdCI6W119