System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.0.37/toast", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/sidebar/ui"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_2 = _beyondJsReact18Widgets101Base;
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_4 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_5 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi0037Toast) {
      dependency_7 = _pragmateUi0037Toast;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SidebarUi) {
      dependency_10 = _aimpactChat101SidebarUi;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat/wrapper', dependency_5], ['react', dependency_6], ['pragmate-ui/toast', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@aimpact/chat/sidebar/ui', dependency_10]]);
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
        hash: 2389321220,
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
          var _ui = require("@aimpact/chat/sidebar/ui");
          const {
            useState
          } = _react.default;
          const Layout = ({
            store
          }) => {
            const [ready, setReady] = useState(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            return _react.default.createElement("div", {
              className: 'layout'
            }, _react.default.createElement(_ui.Sidebar, null), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", null), _react.default.createElement(_toast.Toasts, null)), _react.default.createElement(_mobileHeader.MobileHeader, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImNvbnN0cnVjdG9yIiwiQXBwV3JhcHBlciIsIm9uIiwibGlzdGVuZXIiLCJpbml0IiwiaXNSZWFkeSIsInJlYWR5IiwiX3JlYWN0IiwiX3RvYXN0IiwiX2hvb2tzIiwiX21vYmlsZUhlYWRlciIsIl9jb21wb25lbnRzIiwiX3VpIiwidXNlU3RhdGUiLCJkZWZhdWx0Iiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiUHJlbG9hZFNjcmVlbiIsImNsYXNzTmFtZSIsIlNpZGViYXIiLCJUb2FzdHMiLCJNb2JpbGVIZWFkZXIiLCJBcHBMb2dvIiwiUHJvZmlsZUljb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3L21vYmlsZS1oZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVB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