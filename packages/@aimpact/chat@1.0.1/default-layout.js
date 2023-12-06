System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.3/base", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets103Base) {
      dependency_2 = _beyondJsReact18Widgets103Base;
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_4 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_5 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_beyondJsKernel019Styles) {
      dependency_7 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.19"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/default-layout"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat/wrapper', dependency_5], ['react', dependency_6], ['@beyond-js/kernel/styles', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "default-layout",
        "vspecifier": "@aimpact/chat@1.0.1/default-layout",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/default-layout');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2747796075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _layout = require("./view/layout");
          var _storeManager = require("./store-manager");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _storeManager.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _layout.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*******************************
      INTERNAL MODULE: ./store-manager
      *******************************/

      ims.set('./store-manager', {
        hash: 1995927563,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/chat/wrapper");
          class StoreManager extends _model.ReactiveModel {
            get user() {
              return;
            }
            constructor() {
              super();
              _wrapper.AppWrapper.on('change', this.triggerEvent);
            }
            isReady() {
              return _wrapper.AppWrapper.ready;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/layout
      *****************************/

      ims.set('./view/layout', {
        hash: 1012068149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _react = require("react");
          const Layout = ({
            store
          }) => {
            return _react.default.createElement("beyond-layout-children", null);
          };
          exports.Layout = Layout;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfbGF5b3V0IiwiX3N0b3JlTWFuYWdlciIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsInVzZXIiLCJjb25zdHJ1Y3RvciIsIkFwcFdyYXBwZXIiLCJvbiIsInRyaWdnZXJFdmVudCIsImlzUmVhZHkiLCJyZWFkeSIsIl9yZWFjdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUtbWFuYWdlci50cyIsIi90cy92aWV3L2xheW91dC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsYUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsYUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxPQUFBLENBQUFRLE1BQU07WUFDZDs7VUFDQUMsT0FBQSxDQUFBUCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsTUFBQSxHQUFBWCxPQUFBO1VBRUEsSUFBQVksUUFBQSxHQUFBWixPQUFBO1VBT00sTUFBT08sWUFBYSxTQUFRSSxNQUFBLENBQUFFLGFBQXFCO1lBQ3RELElBQUlDLElBQUlBLENBQUE7Y0FDUDtZQUNEO1lBRUFDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUEgsUUFBQSxDQUFBSSxVQUFVLENBQUNDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7WUFDM0M7WUFDQUMsT0FBT0EsQ0FBQTtjQUNOLE9BQU9QLFFBQUEsQ0FBQUksVUFBVSxDQUFDSSxLQUFLO1lBQ3hCOztVQUNBVixPQUFBLENBQUFILFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkQsSUFBQWMsTUFBQSxHQUFBckIsT0FBQTtVQUtPLE1BQU1TLE1BQU0sR0FBYUEsQ0FBQztZQUFDSjtVQUFLLENBQVMsS0FBSTtZQUNuRCxPQUFPZ0IsTUFBQSxDQUFBQyxPQUFBLENBQUFDLGFBQUEsZ0NBQTBCO1VBQ2xDLENBQUM7VUFBQ2IsT0FBQSxDQUFBRCxNQUFBLEdBQUFBLE1BQUEifQ==