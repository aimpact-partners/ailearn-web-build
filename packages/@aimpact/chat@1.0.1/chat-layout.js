System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.3/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.0.36/toast", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/sidebar.code", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_2 = _beyondJsReact18Widgets101Base;
    }, function (_beyondJsReactive113Model) {
      dependency_3 = _beyondJsReactive113Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_4 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_5 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi0036Toast) {
      dependency_7 = _pragmateUi0036Toast;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SidebarCode) {
      dependency_10 = _aimpactChat101SidebarCode;
    }, function (_beyondJsKernel019Styles) {
      dependency_11 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/chat-layout"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat/wrapper', dependency_5], ['react', dependency_6], ['pragmate-ui/toast', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@aimpact/chat/sidebar.code', dependency_10], ['@beyond-js/kernel/styles', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-layout",
        "vspecifier": "@aimpact/chat@1.0.1/chat-layout",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/chat-layout');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2803709794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _view = require("./view");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _view.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 941372669,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/chat/wrapper");
          class StoreManager extends _model.ReactiveModel {
            constructor() {
              super();
              _wrapper.AppWrapper.on('change', this.listener);
              this.init();
            }
            init = async () => {
              await _wrapper.AppWrapper.isReady;
              this.ready = true;
            };
            listener = () => {};
          }
          exports.StoreManager = StoreManager;
        }
      });

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 2727964954,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _react = require("react");
          var _toast = require("pragmate-ui/toast");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _mobileHeader = require("./mobile-header");
          var _components = require("@aimpact/chat/shared/components");
          var _sidebar = require("@aimpact/chat/sidebar.code");
          const Layout = ({
            store
          }) => {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            return _react.default.createElement("div", {
              className: 'layout'
            }, _react.default.createElement(_sidebar.Sidebar, null), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", null), _react.default.createElement(_toast.Toasts, null)), _react.default.createElement(_mobileHeader.MobileHeader, null));
          };
          exports.Layout = Layout;
        }
      });

      /************************************
      INTERNAL MODULE: ./view/mobile-header
      ************************************/

      ims.set('./view/mobile-header', {
        hash: 1614294564,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileHeader = MobileHeader;
          var _react = require("react");
          var _sidebar = require("@aimpact/chat/sidebar.code");
          function MobileHeader() {
            return _react.default.createElement("header", {
              className: 'mobile-header'
            }, _react.default.createElement(_sidebar.AppLogo, null), _react.default.createElement(_sidebar.ProfileIcon, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBRU87VUFBVSxNQUNYQSxVQUFXLFNBQVFDLDJCQUFxQjtZQUM3QyxNQUFNO1lBQ05DLFdBQVc7Y0FDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUlDLG1CQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUNBLElBQUlDLE1BQU07Y0FDVCxPQUFPQyxZQUFNO1lBQ2Q7O1VBQ0FDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2REO1VBRUE7VUFPTSxNQUFPSCxZQUFhLFNBQVFJLG9CQUFxQjtZQUV0REM7Y0FDQyxLQUFLLEVBQUU7Y0FDUEMsbUJBQVUsQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFFBQVEsQ0FBQztjQUN0QyxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNaO1lBRUFBLElBQUksR0FBRyxZQUFXO2NBQ2pCLE1BQU1ILG1CQUFVLENBQUNJLE9BQU87Y0FDeEIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtZQUNsQixDQUFDO1lBQ0RILFFBQVEsR0FBRyxNQUFLLENBQUUsQ0FBQzs7VUFDbkJMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCRDtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFLTyxNQUFNRCxNQUFNLEdBQWEsQ0FBQztZQUFFVTtVQUFLLENBQVUsS0FBSTtZQUNyRCxNQUFNLENBQUNELEtBQUssRUFBRUUsUUFBUSxDQUFDLEdBQUcsbUJBQVEsRUFBQ0QsS0FBSyxDQUFDRCxLQUFLLENBQUM7WUFDL0Msb0JBQVMsRUFBQyxDQUFDQyxLQUFLLENBQUMsRUFBRSxNQUFNQyxRQUFRLENBQUNELEtBQUssQ0FBQ0QsS0FBSyxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDQSxLQUFLLEVBQUUsT0FBT0csNkJBQUNDLHlCQUFhLE9BQUc7WUFDcEMsT0FDQ0Q7Y0FBS0UsU0FBUyxFQUFDO1lBQVEsR0FDdEJGLDZCQUFDRyxnQkFBTyxPQUFHLEVBQ1hILDJDQUNDQSw0REFBMEIsRUFDMUJBLDZCQUFDSSxhQUFNLE9BQUcsQ0FDSixFQUNQSiw2QkFBQ0ssMEJBQVksT0FBRyxDQUNYO1VBRVIsQ0FBQztVQUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJGO1VBQ0E7VUFFTSxTQUFVZ0IsWUFBWTtZQUMzQixPQUNDTDtjQUFRRSxTQUFTLEVBQUM7WUFBZSxHQUNoQ0YsNkJBQUNNLGdCQUFPLE9BQUcsRUFDWE4sNkJBQUNPLG9CQUFXLE9BQUcsQ0FDUDtVQUVYIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsIkFwcFdyYXBwZXIiLCJvbiIsImxpc3RlbmVyIiwiaW5pdCIsImlzUmVhZHkiLCJyZWFkeSIsInN0b3JlIiwic2V0UmVhZHkiLCJSZWFjdCIsIlByZWxvYWRTY3JlZW4iLCJjbGFzc05hbWUiLCJTaWRlYmFyIiwiVG9hc3RzIiwiTW9iaWxlSGVhZGVyIiwiQXBwTG9nbyIsIlByb2ZpbGVJY29uIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3L2luZGV4LnRzeCIsInRzL3ZpZXcvbW9iaWxlLWhlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=