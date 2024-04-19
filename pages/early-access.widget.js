System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/code-verification", "pragmate-ui@0.1.1/image"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactChatSdk100Session) {
      dependency_4 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_7 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_pragmateUi011Form) {
      dependency_10 = _pragmateUi011Form;
    }, function (_pragmateUi011CodeVerification) {
      dependency_11 = _pragmateUi011CodeVerification;
    }, function (_pragmateUi011Image) {
      dependency_12 = _pragmateUi011Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/pages/early-access",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['react', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/code-verification', dependency_11], ['pragmate-ui/image', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-access-code-apage",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/pages/early-access.widget",
        "is": "page",
        "route": "/early-access"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/pages/early-access.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 110174081,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          console.log(20, 'page');
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
            show() {
              console.log(30, 'page show');
            }
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
        hash: 1510118411,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJjb25zb2xlIiwibG9nIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJoaWRlIiwiZXhwb3J0cyIsIl9zZXNzaW9uIiwiY29uc3RydWN0b3IiLCJ2YWxpZGF0ZSIsImNvZGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRBY2Nlc3MiLCJfcmVhY3QiLCJBY2Nlc3NDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBY2Nlc3NDb250ZXh0IiwidXNlQ29udGV4dCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwiX3VpIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9mb3JtIiwiX2NvZGVWZXJpZmljYXRpb24iLCJfaW1hZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJzZXRDb2RlIiwiRElHSVRTIiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJvbkNvZGVGdWxsIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwib25TdWJtaXQiLCJldmVudCIsInJlc3BvbnNlIiwidG9VcHBlckNhc2UiLCJpbnZhbGlkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJQcm92aWRlciIsInZhbHVlIiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiRXJyb3JSZW5kZXJlciIsIkZvcm0iLCJJbnB1dENvZGUiLCJCdXR0b24iLCJ0eXBlIiwib25DbGljayIsImRpc2FibGVkIiwidmFyaWFudCIsImJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0FHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7VUFDaEI7VUFBVSxNQUNYQyxVQUFXLFNBQVFOLEtBQUEsQ0FBQU8seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSU4sTUFBQSxDQUFBUSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUixNQUFBLENBQUFTLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIVCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDO1lBQzdCO1lBRUE7OztZQUdBUyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCRCxJQUFBVSxRQUFBLEdBQUFmLE9BQUE7VUFDTSxNQUFPUyxZQUFZO1lBQ3hCTyxZQUFBLEdBQWU7WUFFZixNQUFNQyxRQUFRQSxDQUFDQyxJQUFJO2NBQ2xCLE9BQU9ILFFBQUEsQ0FBQUksY0FBYyxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0gsSUFBSSxDQUFDO1lBQzNDOztVQUNBSixPQUFBLENBQUFMLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBYSxNQUFBLEdBQUF0QixPQUFBO1VBUU8sTUFBTXVCLGFBQWEsR0FBQVQsT0FBQSxDQUFBUyxhQUFBLEdBQUdELE1BQUEsQ0FBQUUsT0FBSyxDQUFDQyxhQUFhLENBQWlCLEVBQW9CLENBQUM7VUFDL0UsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBRSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0osYUFBYSxDQUFDO1VBQUNULE9BQUEsQ0FBQVksZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVHRFLElBQUFKLE1BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBNEIsUUFBQSxHQUFBNUIsT0FBQTtVQUNBLElBQUE2QixNQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQThCLEdBQUEsR0FBQTlCLE9BQUE7VUFDQSxJQUFBK0IsUUFBQSxHQUFBL0IsT0FBQTtVQUNBLElBQUFnQyxXQUFBLEdBQUFoQyxPQUFBO1VBRUEsSUFBQWlDLEtBQUEsR0FBQWpDLE9BQUE7VUFDQSxJQUFBa0MsaUJBQUEsR0FBQWxDLE9BQUE7VUFDQSxJQUFBbUMsTUFBQSxHQUFBbkMsT0FBQTtVQUVBLElBQUFvQyxlQUFBLEdBQUFwQyxPQUFBO1VBRU87VUFBVSxTQUNSVyxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBMkI7WUFDL0MsTUFBTSxDQUFDOEIsVUFBVSxFQUFFQyxLQUFLLENBQUMsR0FBbUMsSUFBQVQsTUFBQSxDQUFBVSxRQUFRLEVBQUNILGVBQUEsQ0FBQUksTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEYsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHLElBQUFyQixNQUFBLENBQUFzQixRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxJQUFBeEIsTUFBQSxDQUFBc0IsUUFBUSxHQUFFO1lBQ3BDLE1BQU0sQ0FBQzFCLElBQUksRUFBRTZCLE9BQU8sQ0FBQyxHQUFHLElBQUF6QixNQUFBLENBQUFzQixRQUFRLEdBQVU7WUFDMUMsTUFBTUksTUFBTSxHQUFHLENBQUM7WUFDaEIsSUFBSSxDQUFDWCxVQUFVLEVBQUUsT0FBT2YsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBLENBQUNqQixXQUFBLENBQUFrQixPQUFPO2NBQUNDLE1BQU07WUFBQSxFQUFHO1lBRTFDLE1BQU1DLFlBQVksR0FBRyxFQUFFO1lBQ3ZCLE1BQU1DLFVBQVUsR0FBR25DLElBQUksSUFBRztjQUN6QixJQUFJQSxJQUFJLENBQUNvQyxNQUFNLEtBQUtOLE1BQU0sRUFBRUQsT0FBTyxDQUFDN0IsSUFBSSxDQUFDLENBQUMsS0FDckM2QixPQUFPLENBQUNRLFNBQVMsQ0FBQztZQUN4QixDQUFDO1lBQ0QsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUM5QixJQUFJO2dCQUNIZCxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNZSxRQUFRLEdBQUcsTUFBTW5ELEtBQUssQ0FBQ1UsUUFBUSxDQUFDQyxJQUFJLENBQUN5QyxXQUFXLEVBQUUsQ0FBQztnQkFFekQsSUFBSSxDQUFDRCxRQUFRLEVBQUU7a0JBQ2RaLFFBQVEsQ0FBQ1IsS0FBSyxDQUFDc0IsT0FBTyxDQUFDO2tCQUN2Qjs7Z0JBRURkLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDO2dCQUNuQjNCLFFBQUEsQ0FBQWlDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLEdBQUcsQ0FBQztlQUN0QixDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWGpCLFFBQVEsQ0FBQ1IsS0FBSyxDQUFDc0IsT0FBTyxDQUFDO2dCQUN2QnpELE9BQU8sQ0FBQzBDLEtBQUssQ0FBQ2tCLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUcEIsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE9BQ0NyQixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUEsQ0FBQ2xCLFFBQUEsQ0FBQVIsYUFBYSxDQUFDeUMsUUFBUTtjQUFDQyxLQUFLLEVBQUViO1lBQVksR0FDMUM5QixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUE7Y0FBS2lCLFNBQVMsRUFBQztZQUEwQixHQUN4QzVDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQSxpQkFDQzNCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQSxDQUFDZCxNQUFBLENBQUFnQyxLQUFLO2NBQUNELFNBQVMsRUFBQyxzQkFBc0I7Y0FBQ0UsR0FBRyxFQUFDLDZCQUE2QjtjQUFDQyxHQUFHLEVBQUM7WUFBUSxFQUFHLEVBQ3pGL0MsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQUlpQixTQUFTLEVBQUM7WUFBc0IsR0FBRTVCLEtBQUssQ0FBQ2dDLEtBQUssQ0FBTSxFQUN2RGhELE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQTtjQUFNaUIsU0FBUyxFQUFDO1lBQXNCLEdBQUU1QixLQUFLLENBQUNpQyxXQUFXLENBQVEsQ0FDekQsRUFDVGpELE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQSxDQUFDbkIsR0FBQSxDQUFBMEMsYUFBYTtjQUFDM0IsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFFL0J2QixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUEsQ0FBQ2hCLEtBQUEsQ0FBQXdDLElBQUk7Y0FBQ1AsU0FBUyxFQUFDLHVCQUF1QjtjQUFDVixRQUFRLEVBQUVBO1lBQVEsR0FDekRsQyxNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUEsQ0FBQ2YsaUJBQUEsQ0FBQXdDLFNBQVM7Y0FBQ1IsU0FBUyxFQUFDLFlBQVk7Y0FBQ1osTUFBTSxFQUFFTixNQUFNO2NBQUVLLFVBQVUsRUFBRUE7WUFBVSxFQUFJLEVBQzVFL0IsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBLENBQUNqQixXQUFBLENBQUEyQyxNQUFNO2NBQ05DLElBQUksRUFBQyxRQUFRO2NBQ2JDLE9BQU8sRUFBRXJCLFFBQVE7Y0FDakJkLFFBQVEsRUFBRUEsUUFBUTtjQUNsQm9DLFFBQVEsRUFBRSxDQUFDNUQsSUFBSTtjQUNmZ0QsU0FBUyxFQUFDLFlBQVk7Y0FDdEJhLE9BQU8sRUFBQztZQUFTLEdBRWhCekMsS0FBSyxDQUFDMEMsTUFBTSxDQUNMLENBQ0gsQ0FDRixDQUNrQjtVQUUzQiIsImlnbm9yZUxpc3QiOltdfQ==