System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_2 = _beyondJsReact18Widgets112Base;
    }, function (_beyondJsReactive1112Model) {
      dependency_3 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_4 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_5 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_7 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_8 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Styles) {
      dependency_9 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/auth", "1.7.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.46.dev-06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/auth-layout"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat/wrapper', dependency_5], ['react', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['@aimpact/chat/shared/components', dependency_8], ['@beyond-js/kernel/styles', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-layout",
        "vspecifier": "@aimpact/chat@1.0.1/auth-layout",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/auth-layout');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 420276778,
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
        hash: 361361061,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/chat/wrapper");
          class StoreManager extends _model.ReactiveModel {
            isReady() {
              return _wrapper.AppWrapper.isReady;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/layout
      *****************************/

      ims.set('./view/layout', {
        hash: 2589127662,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("@aimpact/chat/shared/components");
          const Layout = ({
            store
          }) => {
            const [ready, setReady] = (0, _react.useState)(store.isReady());
            (0, _hooks.useBinder)([store], () => setReady(store.isReady()));
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            return _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfbGF5b3V0IiwiX3N0b3JlTWFuYWdlciIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImlzUmVhZHkiLCJBcHBXcmFwcGVyIiwiX3JlYWN0IiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJyZWFkeSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS1tYW5hZ2VyLnRzIiwiL3RzL3ZpZXcvbGF5b3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsYUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzVDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNULElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsYUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNwQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDUixPQUFPUCxPQUFBLENBQUFRLE1BQU07WUFDZjs7VUFDREMsT0FBQSxDQUFBUCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsTUFBQSxHQUFBWCxPQUFBO1VBRUEsSUFBQVksUUFBQSxHQUFBWixPQUFBO1VBTU0sTUFBT08sWUFBYSxTQUFRSSxNQUFBLENBQUFFLGFBQXFCO1lBQ3REQyxPQUFPQSxDQUFBO2NBQ04sT0FBT0YsUUFBQSxDQUFBRyxVQUFVLENBQUNELE9BQU87WUFDMUI7O1VBQ0FKLE9BQUEsQ0FBQUgsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pELElBQUFTLE1BQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBaUIsTUFBQSxHQUFBakIsT0FBQTtVQUVBLElBQUFrQixXQUFBLEdBQUFsQixPQUFBO1VBSU8sTUFBTVMsTUFBTSxHQUFhQSxDQUFDO1lBQUVKO1VBQUssQ0FBVSxLQUFJO1lBQ3JELE1BQU0sQ0FBQ2MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxJQUFBSixNQUFBLENBQUFLLFFBQVEsRUFBQ2hCLEtBQUssQ0FBQ1MsT0FBTyxFQUFFLENBQUM7WUFDbkQsSUFBQUcsTUFBQSxDQUFBSyxTQUFTLEVBQUMsQ0FBQ2pCLEtBQUssQ0FBQyxFQUFFLE1BQU1lLFFBQVEsQ0FBQ2YsS0FBSyxDQUFDUyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBRW5ELElBQUksQ0FBQ0ssS0FBSyxFQUFFLE9BQU9ILE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNOLFdBQUEsQ0FBQU8sYUFBYSxPQUFHO1lBQ3BDLE9BQ0NULE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLGVBQ0NSLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLGdDQUEwQixDQUNwQjtVQUVULENBQUM7VUFBQ2QsT0FBQSxDQUFBRCxNQUFBLEdBQUFBLE1BQUEifQ==