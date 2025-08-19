System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "react@18.3.1", "react-icons@5.5.0/io5"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_reactIcons550Io) {
      dependency_5 = _reactIcons550Io;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/template/bottom-bar"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['react-icons/io5', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-template-bottom-bar",
        "vspecifier": "@aimpact/ailearn-app@0.5.7/template/bottom-bar",
        "is": "page",
        "route": "/template/bottom-bar"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/template/bottom-bar');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1927493790,
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
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {}
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1793251939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          class StoreManager {}
          exports.StoreManager = StoreManager;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/bottom-bar
      **********************************/

      ims.set('./views/bottom-bar', {
        hash: 2676281599,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BottomBar = void 0;
          var _react = require("react");
          var _io = require("react-icons/io5");
          const BottomBar = () => {
            return _react.default.createElement("div", {
              className: "bottom-bar"
            }, _react.default.createElement("button", {
              className: "icon-button"
            }, _react.default.createElement(_io.IoCamera, null)), _react.default.createElement("button", {
              className: "icon-button"
            }, _react.default.createElement(_io.IoImage, null)), _react.default.createElement("button", {
              className: "icon-button"
            }, _react.default.createElement(_io.IoDocument, null)), _react.default.createElement("input", {
              type: "text",
              className: "message-input",
              placeholder: "Message"
            }), _react.default.createElement("button", {
              className: "icon-button"
            }, _react.default.createElement(_io.IoSend, null)), _react.default.createElement("button", {
              className: "icon-button"
            }, _react.default.createElement(_io.IoArrowUp, null)));
          };
          exports.BottomBar = BottomBar;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1024548891,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _bottomBar = require("./bottom-bar");
          function View() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h1", null, "hola mundo"), _react.default.createElement(_bottomBar.BottomBar, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX2lvIiwiQm90dG9tQmFyIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJb0NhbWVyYSIsIklvSW1hZ2UiLCJJb0RvY3VtZW50IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiSW9TZW5kIiwiSW9BcnJvd1VwIiwiX2JvdHRvbUJhciIsIkZyYWdtZW50Il0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvYm90dG9tLWJhci50c3giLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTtZQUVSOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFULFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkssTUFBT0ksWUFBWTtVQUEyQkssT0FBQSxDQUFBTCxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDRHBELElBQUFNLE1BQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLEdBQUEsR0FBQWQsT0FBQTtVQUVPLE1BQU1lLFNBQVMsR0FBYUEsQ0FBQSxLQUFLO1lBQ3ZDLE9BQ0NGLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFZLEdBQzFCTCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBYSxHQUM5QkwsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0gsR0FBQSxDQUFBSyxRQUFRLE9BQUcsQ0FDSixFQUNUTixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBYSxHQUM5QkwsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0gsR0FBQSxDQUFBTSxPQUFPLE9BQUcsQ0FDSCxFQUNUUCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBYSxHQUM5QkwsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0gsR0FBQSxDQUFBTyxVQUFVLE9BQUcsQ0FDTixFQUNUUixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFPSyxJQUFJLEVBQUMsTUFBTTtjQUFDSixTQUFTLEVBQUMsZUFBZTtjQUFDSyxXQUFXLEVBQUM7WUFBUyxFQUFHLEVBQ3JFVixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBYSxHQUM5QkwsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0gsR0FBQSxDQUFBVSxNQUFNLE9BQUcsQ0FDRixFQUNUWCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBYSxHQUM5QkwsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0gsR0FBQSxDQUFBVyxTQUFTLE9BQUcsQ0FDTCxDQUNKO1VBRVIsQ0FBQztVQUFDYixPQUFBLENBQUFHLFNBQUEsR0FBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkYsSUFBQUYsTUFBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQTBCLFVBQUEsR0FBQTFCLE9BQUE7VUFFTSxTQUFVUyxJQUFJQSxDQUFBO1lBQ25CLE9BQ0NJLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUFKLE1BQUEsQ0FBQUcsT0FBQSxDQUFBVyxRQUFBLFFBQ0NkLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLDBCQUFtQixFQUNuQkosTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1MsVUFBQSxDQUFBWCxTQUFTLE9BQUcsQ0FDWDtVQUVMIiwiaWdub3JlTGlzdCI6W119