System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "react-icons@5.2.1/io5"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_reactIcons521Io) {
      dependency_5 = _reactIcons521Io;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.33.dev-01"], ["@aimpact/ailearn-app", "0.0.33.dev-01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.33.dev-01/template/bottom-bar"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['react-icons/io5', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-template-bottom-bar",
        "vspecifier": "@aimpact/ailearn-app@0.0.33.dev-01/template/bottom-bar",
        "is": "page",
        "route": "/template/bottom-bar"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.33.dev-01/template/bottom-bar');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX2lvIiwiQm90dG9tQmFyIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJb0NhbWVyYSIsIklvSW1hZ2UiLCJJb0RvY3VtZW50IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiSW9TZW5kIiwiSW9BcnJvd1VwIiwiX2JvdHRvbUJhciIsIkZyYWdtZW50Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYm90dG9tLWJhci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJO1lBRVI7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCSyxNQUFPSSxZQUFZO1VBQTJCSyxPQUFBLENBQUFMLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNEcEQsSUFBQU0sTUFBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsR0FBQSxHQUFBZCxPQUFBO1VBRU8sTUFBTWUsU0FBUyxHQUFhQSxDQUFBLEtBQUs7WUFDdkMsT0FDQ0YsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVksR0FDMUJMLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUFhLEdBQzlCTCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxHQUFBLENBQUFLLFFBQVEsT0FBRyxDQUNKLEVBQ1ROLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUFhLEdBQzlCTCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxHQUFBLENBQUFNLE9BQU8sT0FBRyxDQUNILEVBQ1RQLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUFhLEdBQzlCTCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxHQUFBLENBQUFPLFVBQVUsT0FBRyxDQUNOLEVBQ1RSLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQU9LLElBQUksRUFBQyxNQUFNO2NBQUNKLFNBQVMsRUFBQyxlQUFlO2NBQUNLLFdBQVcsRUFBQztZQUFTLEVBQUcsRUFDckVWLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUFhLEdBQzlCTCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxHQUFBLENBQUFVLE1BQU0sT0FBRyxDQUNGLEVBQ1RYLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUFhLEdBQzlCTCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxHQUFBLENBQUFXLFNBQVMsT0FBRyxDQUNMLENBQ0o7VUFFUixDQUFDO1VBQUNiLE9BQUEsQ0FBQUcsU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCRixJQUFBRixNQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBMEIsVUFBQSxHQUFBMUIsT0FBQTtVQUVNLFNBQVVTLElBQUlBLENBQUE7WUFDbkIsT0FDQ0ksTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQUosTUFBQSxDQUFBRyxPQUFBLENBQUFXLFFBQUEsUUFDQ2QsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsMEJBQW1CLEVBQ25CSixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUyxVQUFBLENBQUFYLFNBQVMsT0FBRyxDQUNYO1VBRUwifQ==