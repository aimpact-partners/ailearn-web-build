System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.2/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, settings, Config, AiLearnWrapper, __beyond_pkg, hmr;
  _export({
    settings: void 0,
    Config: void 0,
    AiLearnWrapper: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive212Model) {
      dependency_1 = _beyondJsReactive212Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/model/wrapper"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1]]);
      ims = new Map();
      /************************
      INTERNAL MODULE: ./config
      ************************/
      ims.set('./config', {
        hash: 680033772,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.settings = exports.Config = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          let settings = exports.settings = undefined;
          /*bundle*/
          class Config extends _model.ReactiveModel {
            constructor(args = {}) {
              super({
                properties: ['apis', 'project', 'baseUrl', 'version', 'Router', 'environment', 'APP_LOGO', 'APP_NAME', 'APP_SUPPORT_EMAIL', 'tutorials', 'kb'],
                ...args
              });
            }
            static initialize({
              apis,
              project,
              baseUrl,
              version,
              Router,
              APP_LOGO,
              APP_NAME,
              environment,
              ...args
            }) {
              exports.settings = settings = new Config({
                apis,
                project,
                baseUrl,
                version,
                Router,
                APP_LOGO,
                APP_NAME,
                environment,
                ...args
              });
            }
          }
          exports.Config = Config;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2502847480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wrapper = exports.AiLearnWrapper = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Wrapper extends _model.ReactiveModel {
            #device;
            get device() {
              return this.#device;
            }
            constructor(args) {
              super(args);
              // todo: @jircdev view which props are needed and why.
              this.reactiveProps(['sessionModel', 'currentClassroom', 'sessionAssessment', 'currentAssignment', 'isTeacher']);
              this.#device = this.calculateSize();
              globalThis.addEventListener('resize', () => {
                this.#device = this.calculateSize();
              });
            }
            setClassroom = async data => {
              localStorage.setItem('classroom', JSON.stringify(data));
              this.currentClassroom = data;
            };
            calculateSize() {
              const width = globalThis.innerWidth;
              if (!width) {
                console.log('the app is running out of the browser');
                return;
              }
              if (width < 576) {
                return 'xs';
              } else if (width >= 576 && width < 768) {
                return 'sm';
              } else if (width >= 768 && width < 992) {
                return 'md';
              } else {
                return 'lg';
              }
            }
          }
          exports.Wrapper = Wrapper;
          /*bundle*/
          const AiLearnWrapper = exports.AiLearnWrapper = new Wrapper('');
          globalThis.ailearn = AiLearnWrapper;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./config",
        "from": "settings",
        "name": "settings"
      }, {
        "im": "./config",
        "from": "Config",
        "name": "Config"
      }, {
        "im": "./index",
        "from": "AiLearnWrapper",
        "name": "AiLearnWrapper"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'settings') && _export("settings", settings = require ? require('./config').settings : value);
        (require || prop === 'Config') && _export("Config", Config = require ? require('./config').Config : value);
        (require || prop === 'AiLearnWrapper') && _export("AiLearnWrapper", AiLearnWrapper = require ? require('./index').AiLearnWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwic2V0dGluZ3MiLCJleHBvcnRzIiwidW5kZWZpbmVkIiwiQ29uZmlnIiwiUmVhY3RpdmVNb2RlbCIsImNvbnN0cnVjdG9yIiwiYXJncyIsInByb3BlcnRpZXMiLCJpbml0aWFsaXplIiwiYXBpcyIsInByb2plY3QiLCJiYXNlVXJsIiwidmVyc2lvbiIsIlJvdXRlciIsIkFQUF9MT0dPIiwiQVBQX05BTUUiLCJlbnZpcm9ubWVudCIsIldyYXBwZXIiLCJkZXZpY2UiLCJyZWFjdGl2ZVByb3BzIiwiY2FsY3VsYXRlU2l6ZSIsImdsb2JhbFRoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0Q2xhc3Nyb29tIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY3VycmVudENsYXNzcm9vbSIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJBaUxlYXJuV3JhcHBlciIsImFpbGVhcm4iXSwic291cmNlcyI6WyIvY29uZmlnLnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBZU87VUFBVyxJQUFJQyxRQUFRLEdBQUFDLE9BQUEsQ0FBQUQsUUFBQSxHQUFXRSxTQUFTO1VBQzNDO1VBQVUsTUFBT0MsTUFBTyxTQUFRTCxNQUFBLENBQUFNLGFBQXFCO1lBWTNEQyxZQUFZQyxJQUFBLEdBQXlCLEVBQUU7Y0FDdEMsS0FBSyxDQUFDO2dCQUNMQyxVQUFVLEVBQUUsQ0FDWCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsUUFBUSxFQUNSLGFBQWEsRUFDYixVQUFVLEVBQ1YsVUFBVSxFQUNWLG1CQUFtQixFQUNuQixXQUFXLEVBQ1gsSUFBSSxDQUNKO2dCQUNELEdBQUdEO2VBQ0gsQ0FBQztZQUNIO1lBRUEsT0FBT0UsVUFBVUEsQ0FBQztjQUFFQyxJQUFJO2NBQUVDLE9BQU87Y0FBRUMsT0FBTztjQUFFQyxPQUFPO2NBQUVDLE1BQU07Y0FBRUMsUUFBUTtjQUFFQyxRQUFRO2NBQUVDLFdBQVc7Y0FBRSxHQUFHVjtZQUFJLENBQVc7Y0FDL0dMLE9BQUEsQ0FBQUQsUUFBQSxHQUFBQSxRQUFRLEdBQUcsSUFBSUcsTUFBTSxDQUFDO2dCQUFFTSxJQUFJO2dCQUFFQyxPQUFPO2dCQUFFQyxPQUFPO2dCQUFFQyxPQUFPO2dCQUFFQyxNQUFNO2dCQUFFQyxRQUFRO2dCQUFFQyxRQUFRO2dCQUFFQyxXQUFXO2dCQUFFLEdBQUdWO2NBQUksQ0FBRSxDQUFDO1lBQzdHOztVQUNBTCxPQUFBLENBQUFFLE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREQsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBR00sTUFBT2tCLE9BQVEsU0FBUW5CLE1BQUEsQ0FBQU0sYUFBdUI7WUFJbkQsQ0FBQWMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBQ0FiLFlBQVlDLElBQUk7Y0FDZixLQUFLLENBQUNBLElBQUksQ0FBQztjQUNYO2NBQ0EsSUFBSSxDQUFDYSxhQUFhLENBQUMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxDQUFDLENBQUM7Y0FFL0csSUFBSSxDQUFDLENBQUFELE1BQU8sR0FBRyxJQUFJLENBQUNFLGFBQWEsRUFBRTtjQUNuQ0MsVUFBVSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBSztnQkFDMUMsSUFBSSxDQUFDLENBQUFKLE1BQU8sR0FBRyxJQUFJLENBQUNFLGFBQWEsRUFBRTtjQUNwQyxDQUFDLENBQUM7WUFDSDtZQUVBRyxZQUFZLEdBQUcsTUFBTUMsSUFBSSxJQUFHO2NBQzNCQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxXQUFXLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixJQUFJLENBQUMsQ0FBQztjQUN2RCxJQUFJLENBQUNLLGdCQUFnQixHQUFHTCxJQUFJO1lBQzdCLENBQUM7WUFFREosYUFBYUEsQ0FBQTtjQUNaLE1BQU1VLEtBQUssR0FBR1QsVUFBVSxDQUFDVSxVQUFVO2NBQ25DLElBQUksQ0FBQ0QsS0FBSyxFQUFFO2dCQUNYRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQztnQkFDcEQ7O2NBRUQsSUFBSUgsS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDaEIsT0FBTyxJQUFJO2VBQ1gsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLEdBQUcsR0FBRyxFQUFFO2dCQUN2QyxPQUFPLElBQUk7ZUFDWCxNQUFNLElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssR0FBRyxHQUFHLEVBQUU7Z0JBQ3ZDLE9BQU8sSUFBSTtlQUNYLE1BQU07Z0JBQ04sT0FBTyxJQUFJOztZQUViOztVQUNBN0IsT0FBQSxDQUFBZ0IsT0FBQSxHQUFBQSxPQUFBO1VBQ007VUFBVyxNQUFNaUIsY0FBYyxHQUFBakMsT0FBQSxDQUFBaUMsY0FBQSxHQUFHLElBQUlqQixPQUFPLENBQUMsRUFBRSxDQUFDO1VBQ3hESSxVQUFVLENBQUNjLE9BQU8sR0FBR0QsY0FBYyIsImlnbm9yZUxpc3QiOltdfQ==