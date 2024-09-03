System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.2.0/model", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_2 = _beyondJsReact18Widgets112Base;
    }, function (_beyondJsReactive120Model) {
      dependency_3 = _beyondJsReactive120Model;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_beyondJsKernel019Styles) {
      dependency_6 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.1.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["framer-motion", "11.3.21"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.1.6-dev.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/auth@0.0.1/auth-layout"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-layout",
        "vspecifier": "@aimpact/auth@0.0.1/auth-layout",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/auth@0.0.1/auth-layout');
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
        hash: 2811388690,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            isReady() {
              return true;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/layout
      *****************************/

      ims.set('./view/layout', {
        hash: 689511036,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          const Layout = ({
            store
          }) => {
            const [ready, setReady] = (0, _react.useState)(store.isReady());
            (0, _hooks.useBinder)([store], () => setReady(store.isReady()));
            if (!ready) return 'loading....';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfbGF5b3V0IiwiX3N0b3JlTWFuYWdlciIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJpc1JlYWR5IiwiX3JlYWN0IiwiX2hvb2tzIiwicmVhZHkiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS1tYW5hZ2VyLnRzIiwiL3RzL3ZpZXcvbGF5b3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsYUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzVDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNULElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsYUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNwQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDUixPQUFPUCxPQUFBLENBQUFRLE1BQU07WUFDZjs7VUFDREMsT0FBQSxDQUFBUCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsTUFBQSxHQUFBWCxPQUFBO1VBT00sTUFBT08sWUFBYSxTQUFRSSxNQUFBLENBQUFDLGFBQXFCO1lBQ3REQyxPQUFPQSxDQUFBO2NBQ04sT0FBTyxJQUFJO1lBQ1o7O1VBQ0FILE9BQUEsQ0FBQUgsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hELElBQUFPLE1BQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLE1BQUEsR0FBQWYsT0FBQTtVQU1PLE1BQU1TLE1BQU0sR0FBYUEsQ0FBQztZQUFFSjtVQUFLLENBQVUsS0FBSTtZQUNyRCxNQUFNLENBQUNXLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcsSUFBQUgsTUFBQSxDQUFBSSxRQUFRLEVBQUNiLEtBQUssQ0FBQ1EsT0FBTyxFQUFFLENBQUM7WUFDbkQsSUFBQUUsTUFBQSxDQUFBSSxTQUFTLEVBQUMsQ0FBQ2QsS0FBSyxDQUFDLEVBQUUsTUFBTVksUUFBUSxDQUFDWixLQUFLLENBQUNRLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFFbkQsSUFBSSxDQUFDRyxLQUFLLEVBQUUsT0FBTyxhQUFhO1lBQ2hDLE9BQ0NGLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLGVBQ0NQLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLGdDQUEwQixDQUNwQjtVQUVULENBQUM7VUFBQ1gsT0FBQSxDQUFBRCxNQUFBLEdBQUFBLE1BQUEiLCJpZ25vcmVMaXN0IjpbXX0=