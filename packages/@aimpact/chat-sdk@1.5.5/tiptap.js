System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "react@18.3.1", "@aimpact/chat-sdk@1.5.5/editor"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_aimpactChatSdk155Editor) {
      dependency_5 = _aimpactChatSdk155Editor;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.4"], ["@google-cloud/storage", "7.17.1"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.6.2"], ["@tiptap/extension-code-block", "3.6.2"], ["@tiptap/extension-horizontal-rule", "3.6.2"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.6.2"], ["@tiptap/extension-task-list", "3.6.2"], ["@tiptap/extension-underline", "3.6.2"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.6.2"], ["@tiptap/starter-kit", "3.6.2"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dompurify", "3.2.7"], ["firebase", "11.10.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.22"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.10"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.1"], ["wavesurfer.js", "7.10.3"], ["zod", "3.25.76"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.25"], ["@types/react-dom", "18.3.7"], ["typescript", "5.9.3"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/tiptap"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@aimpact/chat-sdk/editor', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-testing-tiptap",
        "vspecifier": "@aimpact/chat-sdk@1.5.5/tiptap",
        "is": "page",
        "route": "/testing/tiptap"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.5.5/tiptap');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2665194671,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get store() {
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2621148212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          class StoreManager {
            isStore = true;
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 67159996,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _editor = require("@aimpact/chat-sdk/editor");
          function View({
            store
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "slate-container"
            }, _react.default.createElement(_editor.WikiEditor, {
              loaders: {
                image: () => {
                  return window.prompt('Image URL');
                }
              }
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsImlzU3RvcmUiLCJfcmVhY3QiLCJfZWRpdG9yIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIldpa2lFZGl0b3IiLCJsb2FkZXJzIiwiaW1hZ2UiLCJ3aW5kb3ciLCJwcm9tcHQiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFQLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmSyxNQUFPSSxZQUFZO1lBR3hCSSxPQUFPLEdBQUcsSUFBSTs7VUFDZEQsT0FBQSxDQUFBSCxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEQsSUFBQUssTUFBQSxHQUFBWixPQUFBO1VBRUEsSUFBQWEsT0FBQSxHQUFBYixPQUFBO1VBQ00sU0FBVVMsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQ3RELE9BQ0NPLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUFILE1BQUEsQ0FBQUUsT0FBQSxDQUFBRSxRQUFBLFFBQ0NKLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFpQixHQUMvQkwsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0YsT0FBQSxDQUFBSyxVQUFVO2NBQ1ZDLE9BQU8sRUFBRTtnQkFDUkMsS0FBSyxFQUFFQSxDQUFBLEtBQUs7a0JBQ1gsT0FBT0MsTUFBTSxDQUFDQyxNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUNsQzs7WUFDQSxFQUNBLENBQ0csQ0FDSjtVQUVMIiwiaWdub3JlTGlzdCI6W119