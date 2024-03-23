System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/ailearn-app@0.0.27/components/ui", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/code-verification", "pragmate-ui@0.0.6/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
    }, function (_aimpactChatSdk100Session) {
      dependency_4 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_7 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_pragmateUi006Components) {
      dependency_9 = _pragmateUi006Components;
    }, function (_pragmateUi006Form) {
      dependency_10 = _pragmateUi006Form;
    }, function (_pragmateUi006CodeVerification) {
      dependency_11 = _pragmateUi006CodeVerification;
    }, function (_pragmateUi006Image) {
      dependency_12 = _pragmateUi006Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/pages/early-access",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['react', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/code-verification', dependency_11], ['pragmate-ui/image', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-access-code-apage",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/pages/early-access.widget",
        "is": "page",
        "route": "/early-access"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/pages/early-access.widget');
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
        hash: 519914475,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          class StoreManager {
            constructor() {}
            async validate(code) {
              return _session.sessionWrapper.user.getAccess(code);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3655038139,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAccessContext = exports.AccessContext = void 0;
          var _react = require("react");
          const AccessContext = exports.AccessContext = _react.default.createContext({});
          const useAccessContext = () => _react.default.useContext(AccessContext);
          exports.useAccessContext = useAccessContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3759170233,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _codeVerification = require("pragmate-ui/code-verification");
          var _image = require("pragmate-ui/image");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [error, setError] = (0, _react.useState)();
            const [code, setCode] = (0, _react.useState)();
            const DIGITS = 7;
            if (!textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const contextValue = {};
            const onCodeFull = code => {
              if (code.length === DIGITS) setCode(code);else setCode(undefined);
            };
            const onSubmit = async event => {
              try {
                setFetching(true);
                const response = await store.validate(code.toUpperCase());
                console.log(99, response);
                if (!response) {
                  setError(texts.invalid);
                  return;
                }
                setError(undefined);
                _routing.routing.pushState('/');
              } catch (e) {
                setError(texts.invalid);
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_context.AccessContext.Provider, {
              value: contextValue
            }, _react.default.createElement("div", {
              className: "ailearn-access-code-page"
            }, _react.default.createElement("header", null, _react.default.createElement(_image.Image, {
              className: "animate glow delay-1",
              src: "/assets/RVD.AI.Branding.png",
              alt: "RVD.AI"
            }), _react.default.createElement("h1", {
              className: "animate glow delay-2"
            }, texts.title), _react.default.createElement("span", {
              className: "animate glow delay-2"
            }, texts.description)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement(_form.Form, {
              className: "animate glow delay-3 ",
              onSubmit: onSubmit
            }, _react.default.createElement(_codeVerification.InputCode, {
              className: "input-code",
              length: DIGITS,
              onCodeFull: onCodeFull
            }), _react.default.createElement(_components.Button, {
              type: "submit",
              onClick: onSubmit,
              fetching: fetching,
              disabled: !code,
              className: "input-code",
              variant: "primary"
            }, texts.button))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX3Nlc3Npb24iLCJjb25zdHJ1Y3RvciIsInZhbGlkYXRlIiwiY29kZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldEFjY2VzcyIsIl9yZWFjdCIsIkFjY2Vzc0NvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFjY2Vzc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3JvdXRpbmciLCJfaG9va3MiLCJfdWkiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX2Zvcm0iLCJfY29kZVZlcmlmaWNhdGlvbiIsIl9pbWFnZSIsIl9iZXlvbmRfY29udGV4dCIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldENvZGUiLCJESUdJVFMiLCJjcmVhdGVFbGVtZW50IiwiU3Bpbm5lciIsImFjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIm9uQ29kZUZ1bGwiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJvblN1Ym1pdCIsImV2ZW50IiwicmVzcG9uc2UiLCJ0b1VwcGVyQ2FzZSIsImNvbnNvbGUiLCJsb2ciLCJpbnZhbGlkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJQcm92aWRlciIsInZhbHVlIiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiRXJyb3JSZW5kZXJlciIsIkZvcm0iLCJJbnB1dENvZGUiLCJCdXR0b24iLCJ0eXBlIiwib25DbGljayIsImRpc2FibGVkIiwidmFyaWFudCIsImJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJO1lBRVI7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCRCxJQUFBVSxRQUFBLEdBQUFiLE9BQUE7VUFDTSxNQUFPTyxZQUFZO1lBQ3hCTyxZQUFBLEdBQWU7WUFFZixNQUFNQyxRQUFRQSxDQUFDQyxJQUFJO2NBQ2xCLE9BQU9ILFFBQUEsQ0FBQUksY0FBYyxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0gsSUFBSSxDQUFDO1lBQzNDOztVQUNBSixPQUFBLENBQUFMLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBYSxNQUFBLEdBQUFwQixPQUFBO1VBUU8sTUFBTXFC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