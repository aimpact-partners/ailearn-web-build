System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.1/base", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.1.0/toast", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/sidebar/ui", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets111Base) {
      dependency_2 = _beyondJsReact18Widgets111Base;
    }, function (_beyondJsReactive1112Model) {
      dependency_3 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_4 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_5 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi010Toast) {
      dependency_7 = _pragmateUi010Toast;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_8 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SidebarUi) {
      dependency_10 = _aimpactChat101SidebarUi;
    }, function (_beyondJsKernel019Styles) {
      dependency_11 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.3.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/general-layout"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat/wrapper', dependency_5], ['react', dependency_6], ['pragmate-ui/toast', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@aimpact/chat/sidebar/ui', dependency_10], ['@beyond-js/kernel/styles', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "general-layout",
        "vspecifier": "@aimpact/chat@1.0.1/general-layout",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/general-layout');
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
        hash: 3388079717,
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
          const Layout = ({
            store
          }) => {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            return _react.default.createElement("div", {
              className: 'layout'
            }, _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", null), _react.default.createElement(_toast.Toasts, null)), _react.default.createElement(_mobileHeader.MobileHeader, null));
          };
          exports.Layout = Layout;
        }
      });

      /************************************
      INTERNAL MODULE: ./view/mobile-header
      ************************************/

      ims.set('./view/mobile-header', {
        hash: 3681109428,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileHeader = MobileHeader;
          var _react = require("react");
          var _ui = require("@aimpact/chat/sidebar/ui");
          function MobileHeader() {
            return _react.default.createElement("header", {
              className: 'mobile-header'
            }, _react.default.createElement(_ui.AppLogo, null), _react.default.createElement(_ui.ProfileIcon, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImNvbnN0cnVjdG9yIiwiQXBwV3JhcHBlciIsIm9uIiwibGlzdGVuZXIiLCJpbml0IiwiaXNSZWFkeSIsInJlYWR5IiwiX3JlYWN0IiwiX3RvYXN0IiwiX2hvb2tzIiwiX21vYmlsZUhlYWRlciIsIl9jb21wb25lbnRzIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiUHJlbG9hZFNjcmVlbiIsImNsYXNzTmFtZSIsIlRvYXN0cyIsIk1vYmlsZUhlYWRlciIsIl91aSIsIkFwcExvZ28iLCJQcm9maWxlSWNvbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXcvbW9iaWxlLWhlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sS0FBQSxDQUFBTyxNQUFNO1lBQ2Q7O1VBQ0FDLE9BQUEsQ0FBQVAsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFRLE1BQUEsR0FBQVgsT0FBQTtVQUVBLElBQUFZLFFBQUEsR0FBQVosT0FBQTtVQU9NLE1BQU9PLFlBQWEsU0FBUUksTUFBQSxDQUFBRSxhQUFxQjtZQUV0REMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQRixRQUFBLENBQUFHLFVBQVUsQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFFBQVEsQ0FBQztjQUN0QyxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNaO1lBRUFBLElBQUksR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDakIsTUFBTU4sUUFBQSxDQUFBRyxVQUFVLENBQUNJLE9BQU87Y0FDeEIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtZQUNsQixDQUFDO1lBQ0RILFFBQVEsR0FBR0EsQ0FBQSxLQUFLLENBQUUsQ0FBQzs7VUFDbkJQLE9BQUEsQ0FBQUgsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCRCxJQUFBYyxNQUFBLEdBQUFyQixPQUFBO1VBRUEsSUFBQXNCLE1BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBdUIsTUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUF3QixhQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQXlCLFdBQUEsR0FBQXpCLE9BQUE7VUFhTyxNQUFNUyxNQUFNLEdBQWFBLENBQUM7WUFBRUo7VUFBSyxDQUFVLEtBQUk7WUFDckQsTUFBTSxDQUFDZSxLQUFLLEVBQUVNLFFBQVEsQ0FBQyxHQUFHLElBQUFMLE1BQUEsQ0FBQU0sUUFBUSxFQUFDdEIsS0FBSyxDQUFDZSxLQUFLLENBQUM7WUFDL0MsSUFBQUcsTUFBQSxDQUFBSyxTQUFTLEVBQUMsQ0FBQ3ZCLEtBQUssQ0FBQyxFQUFFLE1BQU1xQixRQUFRLENBQUNyQixLQUFLLENBQUNlLEtBQUssQ0FBQyxDQUFDO1lBRS9DLElBQUksQ0FBQ0EsS0FBSyxFQUFFLE9BQU9DLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNMLFdBQUEsQ0FBQU0sYUFBYSxPQUFHO1lBQ3BDLE9BQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFRLEdBRXRCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUNDVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxnQ0FBMEIsRUFDMUJULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNSLE1BQUEsQ0FBQVcsTUFBTSxPQUFHLENBQ0osRUFDUFosTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sYUFBQSxDQUFBVSxZQUFZLE9BQUcsQ0FDWDtVQUVSLENBQUM7VUFBQ3hCLE9BQUEsQ0FBQUQsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDRixJQUFBWSxNQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQW1DLEdBQUEsR0FBQW5DLE9BQUE7VUFFTSxTQUFVa0MsWUFBWUEsQ0FBQTtZQUMzQixPQUNDYixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBZSxHQUNoQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ssR0FBQSxDQUFBQyxPQUFPLE9BQUcsRUFDWGYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ssR0FBQSxDQUFBRSxXQUFXLE9BQUcsQ0FDUDtVQUVYIiwiaWdub3JlTGlzdCI6W119