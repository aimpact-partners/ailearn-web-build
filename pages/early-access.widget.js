System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/code-verification"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactChatSdk100Session) {
      dependency_4 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_7 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi006Components) {
      dependency_8 = _pragmateUi006Components;
    }, function (_pragmateUi006Image) {
      dependency_9 = _pragmateUi006Image;
    }, function (_pragmateUi006Form) {
      dependency_10 = _pragmateUi006Form;
    }, function (_pragmateUi006CodeVerification) {
      dependency_11 = _pragmateUi006CodeVerification;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['react', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/code-verification', dependency_11]]);
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
        hash: 1774896653,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _beyond_context = require("beyond_context");
          var _form = require("pragmate-ui/form");
          var _codeVerification = require("pragmate-ui/code-verification");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [error, setError] = (0, _react.useState)(false);
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
                if (!response.status || !response.data.valid) setError(true);
                _routing.routing.pushState('/');
              } catch (e) {
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
            }, texts.description)), error && _react.default.createElement("h5", {
              className: "animate glow delay-1 error-text"
            }, texts.invalid), _react.default.createElement(_form.Form, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX3Nlc3Npb24iLCJjb25zdHJ1Y3RvciIsInZhbGlkYXRlIiwiY29kZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldEFjY2VzcyIsIl9yZWFjdCIsIkFjY2Vzc0NvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFjY2Vzc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3JvdXRpbmciLCJfaG9va3MiLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX2ltYWdlIiwiX2JleW9uZF9jb250ZXh0IiwiX2Zvcm0iLCJfY29kZVZlcmlmaWNhdGlvbiIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldENvZGUiLCJESUdJVFMiLCJjcmVhdGVFbGVtZW50IiwiU3Bpbm5lciIsImFjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIm9uQ29kZUZ1bGwiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJvblN1Ym1pdCIsImV2ZW50IiwicmVzcG9uc2UiLCJ0b1VwcGVyQ2FzZSIsInN0YXR1cyIsImRhdGEiLCJ2YWxpZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJjbGFzc05hbWUiLCJJbWFnZSIsInNyYyIsImFsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbnZhbGlkIiwiRm9ybSIsIklucHV0Q29kZSIsIkJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ2YXJpYW50IiwiYnV0dG9uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJO1lBRVI7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCRCxJQUFBVSxRQUFBLEdBQUFiLE9BQUE7VUFDTSxNQUFPTyxZQUFZO1lBQ3hCTyxZQUFBLEdBQWU7WUFFZixNQUFNQyxRQUFRQSxDQUFDQyxJQUFJO2NBQ2xCLE9BQU9ILFFBQUEsQ0FBQUksY0FBYyxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0gsSUFBSSxDQUFDO1lBQzNDOztVQUNBSixPQUFBLENBQUFMLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBYSxNQUFBLEdBQUFwQixPQUFBO1VBUU8sTUFBTXFCLGFBQWEs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