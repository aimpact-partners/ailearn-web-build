System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.29/components/ui", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.29/config", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/code-verification", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.1/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
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
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp0029ComponentsUi) {
      dependency_7 = _aimpactAilearnApp0029ComponentsUi;
    }, function (_pragmateUi006Components) {
      dependency_8 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0029Config) {
      dependency_9 = _aimpactAilearnApp0029Config;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Form) {
      dependency_12 = _pragmateUi006Form;
    }, function (_pragmateUi006Toast) {
      dependency_13 = _pragmateUi006Toast;
    }, function (_pragmateUi006CodeVerification) {
      dependency_14 = _pragmateUi006CodeVerification;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_16 = _beyondJsReact18Widgets111Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.29"], ["@aimpact/ailearn-app", "0.0.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.29/classrooms/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/toast', dependency_13], ['pragmate-ui/code-verification', dependency_14], ['@beyond-js/kernel/routing', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.29/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.29/classrooms/join.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3868668533,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
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
            show() {
              this.#store.load();
            }
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 370166388,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            constructor() {
              super();
              this.#model = new _core.Classroom({});
            }
            load() {
              this.ready = true;
            }
            clear() {
              this.ready = false;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 4056540268,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useJoinContext = exports.JoinContext = void 0;
          var _react = require("react");
          const JoinContext = exports.JoinContext = _react.default.createContext({});
          const useJoinContext = () => _react.default.useContext(JoinContext);
          exports.useJoinContext = useJoinContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 4057543085,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useJoinContext)();
            return React.createElement("section", null, React.createElement(_ui.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.classrooms, '/classrooms/list'], [texts.breadcrumb.join, '']]
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 260590118,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _header = require("./header");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _codeVerification = require("pragmate-ui/code-verification");
          var _components2 = require("pragmate-ui/components");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [token, setToken] = React.useState('');
            const [error, setError] = React.useState('');
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks2.useBinder)([store], () => setReady(store.ready));
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const handleChange = code => {
              setToken(code);
              setError('');
            };
            if (!textsReady || !ready) return React.createElement(_components.PreloadScreen, null);
            const disabled = token.length !== 7;
            const onSubmit = async () => {
              try {
                const response = await store.model.join({
                  code: token
                });
                if (!response.status) {
                  setError(texts.errors.INVALID_CODE);
                  return;
                }
                if (response.data.status === 'PENDING') {
                  _routing.routing.pushState('/classrooms/list');
                  _toast.toast.success(texts.messages.pending);
                  return;
                }
                if (['ALREADY', 'AUTHORIZED'].includes(response.data.status)) {
                  _routing.routing.pushState(`/classrooms/view/${response.data.classroom.id}`);
                  _toast.toast.success(texts.messages.authorized);
                  return;
                }
                //this.model.join({ code: token });
              } catch (e) {
                setError(texts.errors.INVALID_CODE);
                _toast.toast.error(texts.errors.INVALID_CODE);
              }
            };
            return React.createElement(_context.JoinContext.Provider, {
              value: {
                texts,
                store
              }
            }, React.createElement(_header.Header, {
              token: token
            }), React.createElement(_ui.PageContainer, {
              className: "token-page__container"
            }, React.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: "token-form__container"
            }, React.createElement("h3", null, texts.form.title), React.createElement("span", {
              className: "p2"
            }, texts.form.subtitle), React.createElement(_ui.ErrorRenderer, {
              error: error
            }), React.createElement(_codeVerification.InputCode, {
              upper: true,
              length: 7,
              value: token,
              name: "name",
              type: "text",
              onCodeFull: handleChange,
              required: true
            }), React.createElement(_components2.Button, {
              block: true,
              disabled: disabled,
              variant: "primary",
              type: "submit"
            }, texts.action.join)), React.createElement("div", {
              className: "token-info__container flex-container flex-column"
            }, React.createElement("h4", null, texts.info.title), React.createElement("ul", null, React.createElement("li", null, texts.info.rules.first), React.createElement("li", null, texts.info.rules.second)), React.createElement("span", null, texts.info.help))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/header",
        "from": "Header",
        "name": "Header"
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
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header').Header : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJjb25zdHJ1Y3RvciIsIkNsYXNzcm9vbSIsInJlYWR5IiwiX3JlYWN0IiwiSm9pbkNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUpvaW5Db250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX3VpIiwiX2NvbnRleHQiLCJfY29uZmlnIiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwiY2xhc3Nyb29tcyIsImpvaW4iLCJfaGVhZGVyIiwiX2NvbXBvbmVudHMiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfZm9ybSIsIl90b2FzdCIsIl9jb2RlVmVyaWZpY2F0aW9uIiwiX2NvbXBvbmVudHMyIiwiX3JvdXRpbmciLCJfaG9va3MyIiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldFJlYWR5IiwidXNlQmluZGVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiaGFuZGxlQ2hhbmdlIiwiY29kZSIsIlByZWxvYWRTY3JlZW4iLCJkaXNhYmxlZCIsImxlbmd0aCIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJlcnJvcnMiLCJJTlZBTElEX0NPREUiLCJkYXRhIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwicGVuZGluZyIsImluY2x1ZGVzIiwiY2xhc3Nyb29tIiwiaWQiLCJhdXRob3JpemVkIiwiZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiRm9ybSIsImZvcm0iLCJ0aXRsZSIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsIklucHV0Q29kZSIsInVwcGVyIiwibmFtZSIsInR5cGUiLCJvbkNvZGVGdWxsIiwicmVxdWlyZWQiLCJCdXR0b24iLCJibG9jayIsInZhcmlhbnQiLCJhY3Rpb24iLCJpbmZvIiwicnVsZXMiLCJmaXJzdCIsInNlY29uZCIsImhlbHAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxFQUFFO1lBQ25CO1lBQ0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDUSxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQVgsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRCxJQUFBWSxNQUFBLEdBQUFmLE9BQUE7VUFDQSxJQUFBZ0IsS0FBQSxHQUFBaEIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUVEsTUFBQSxDQUFBRSxhQUEyQjtZQUM1RCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQUMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUYsS0FBQSxDQUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2hDO1lBRUFULElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUNVLEtBQUssR0FBRyxJQUFJO1lBQ2xCO1lBQ0FSLEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUNRLEtBQUssR0FBRyxLQUFLO1lBQ25COztVQUNBUCxPQUFBLENBQUFQLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkQsSUFBQWUsTUFBQSxHQUFBdEIsT0FBQTtVQU9PLE1BQU11QixXQUFXLEdBQUFULE9BQUEsQ0FBQVMsV0FBQSxHQUFHRCxNQUFBLENBQUFFLE9BQUssQ0FBQ0MsYUFBYSxDQUFlLEVBQWtCLENBQUM7VUFDekUsTUFBTUMsY0FBYyxHQUFHQSxDQUFBLEtBQU1KLE1BQUEsQ0FBQUUsT0FBSyxDQUFDRyxVQUFVLENBQUNKLFdBQVcsQ0FBQztVQUFDVCxPQUFBLENBQUFZLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSbEUsSUFBQUUsS0FBQSxHQUFBNUIsT0FBQTtVQUNBLElBQUE2QixHQUFBLEdBQUE3QixPQUFBO1VBRUEsSUFBQThCLFFBQUEsR0FBQTlCLE9BQUE7VUFDQSxJQUFBK0IsT0FBQSxHQUFBL0IsT0FBQTtVQUNPO1VBQVUsU0FBVWdDLE1BQU1BLENBQUE7WUFDaEMsTUFBTTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFKLGNBQWMsR0FBRTtZQUNsQyxPQUNDRSxLQUFBLENBQUFNLGFBQUEsa0JBQ0NOLEtBQUEsQ0FBQU0sYUFBQSxDQUFDTCxHQUFBLENBQUFNLFlBQVk7Y0FDWkMsVUFBVSxFQUFFLENBQ1gsQ0FBQ0wsT0FBQSxDQUFBUCxPQUFNLENBQUNhLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUM3QixDQUFDTCxLQUFLLENBQUNHLFVBQVUsQ0FBQ0csVUFBVSxFQUFFLGtCQUFrQixDQUFDLEVBQ2pELENBQUNOLEtBQUssQ0FBQ0csVUFBVSxDQUFDSSxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQzNCLEVBQ2MsQ0FDUDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCQSxJQUFBWixLQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQTZCLEdBQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBeUMsT0FBQSxHQUFBekMsT0FBQTtVQUNBLElBQUE4QixRQUFBLEdBQUE5QixPQUFBO1VBQ0EsSUFBQTBDLFdBQUEsR0FBQTFDLE9BQUE7VUFDQSxJQUFBMkMsZUFBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUE0QyxNQUFBLEdBQUE1QyxPQUFBO1VBRUEsSUFBQTZDLEtBQUEsR0FBQTdDLE9BQUE7VUFDQSxJQUFBOEMsTUFBQSxHQUFBOUMsT0FBQTtVQUNBLElBQUErQyxpQkFBQSxHQUFBL0MsT0FBQTtVQUNBLElBQUFnRCxZQUFBLEdBQUFoRCxPQUFBO1VBQ0EsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBa0QsT0FBQSxHQUFBbEQsT0FBQTtVQUNPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQy9DLE1BQU0sQ0FBQzhDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUd4QixLQUFLLENBQUN5QixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRzNCLEtBQUssQ0FBQ3lCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTSxDQUFDaEMsS0FBSyxFQUFFbUMsUUFBUSxDQUFDLEdBQUc1QixLQUFLLENBQUN5QixRQUFRLENBQUNoRCxLQUFLLENBQUNnQixLQUFLLENBQUM7WUFDckQsSUFBQTZCLE9BQUEsQ0FBQU8sU0FBUyxFQUFDLENBQUNwRCxLQUFLLENBQUMsRUFBRSxNQUFNbUQsUUFBUSxDQUFDbkQsS0FBSyxDQUFDZ0IsS0FBSyxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDcUMsVUFBVSxFQUFFekIsS0FBSyxDQUFDLEdBQUcsSUFBQVcsTUFBQSxDQUFBZSxRQUFRLEVBQUNoQixlQUFBLENBQUFpQixNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUV0RCxNQUFNQyxZQUFZLEdBQUdDLElBQUksSUFBRztjQUMzQlgsUUFBUSxDQUFDVyxJQUFJLENBQUM7Y0FDZFIsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNiLENBQUM7WUFFRCxJQUFJLENBQUNHLFVBQVUsSUFBSSxDQUFDckMsS0FBSyxFQUFFLE9BQU9PLEtBQUEsQ0FBQU0sYUFBQSxDQUFDUSxXQUFBLENBQUFzQixhQUFhLE9BQUc7WUFDbkQsTUFBTUMsUUFBUSxHQUFHZCxLQUFLLENBQUNlLE1BQU0sS0FBSyxDQUFDO1lBQ25DLE1BQU1DLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQTBCO2NBQzFDLElBQUk7Z0JBQ0gsTUFBTUMsUUFBUSxHQUFHLE1BQU0vRCxLQUFLLENBQUNhLEtBQUssQ0FBQ3NCLElBQUksQ0FBQztrQkFBRXVCLElBQUksRUFBRVo7Z0JBQUssQ0FBRSxDQUFDO2dCQUN4RCxJQUFJLENBQUNpQixRQUFRLENBQUNDLE1BQU0sRUFBRTtrQkFDckJkLFFBQVEsQ0FBQ3RCLEtBQUssQ0FBQ3FDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDO2tCQUNuQzs7Z0JBR0QsSUFBSUgsUUFBUSxDQUFDSSxJQUFJLENBQUNILE1BQU0sS0FBSyxTQUFTLEVBQUU7a0JBQ3ZDcEIsUUFBQSxDQUFBd0IsT0FBTyxDQUFDQyxTQUFTLENBQUMsa0JBQWtCLENBQUM7a0JBQ3JDNUIsTUFBQSxDQUFBNkIsS0FBSyxDQUFDQyxPQUFPLENBQUMzQyxLQUFLLENBQUM0QyxRQUFRLENBQUNDLE9BQU8sQ0FBQztrQkFDckM7O2dCQUVELElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUNDLFFBQVEsQ0FBQ1gsUUFBUSxDQUFDSSxJQUFJLENBQUNILE1BQU0sQ0FBQyxFQUFFO2tCQUM3RHBCLFFBQUEsQ0FBQXdCLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLG9CQUFvQk4sUUFBUSxDQUFDSSxJQUFJLENBQUNRLFNBQVMsQ0FBQ0MsRUFBRSxFQUFFLENBQUM7a0JBQ25FbkMsTUFBQSxDQUFBNkIsS0FBSyxDQUFDQyxPQUFPLENBQUMzQyxLQUFLLENBQUM0QyxRQUFRLENBQUNLLFVBQVUsQ0FBQztrQkFDeEM7O2dCQUdEO2VBQ0EsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1g1QixRQUFRLENBQUN0QixLQUFLLENBQUNxQyxNQUFNLENBQUNDLFlBQVksQ0FBQztnQkFDbkN6QixNQUFBLENBQUE2QixLQUFLLENBQUNyQixLQUFLLENBQUNyQixLQUFLLENBQUNxQyxNQUFNLENBQUNDLFlBQVksQ0FBQzs7WUFFeEMsQ0FBQztZQUVELE9BQ0MzQyxLQUFBLENBQUFNLGFBQUEsQ0FBQ0osUUFBQSxDQUFBUCxXQUFXLENBQUM2RCxRQUFRO2NBQ3BCQyxLQUFLLEVBQUU7Z0JBQ05wRCxLQUFLO2dCQUNMNUI7O1lBQ0EsR0FFRHVCLEtBQUEsQ0FBQU0sYUFBQSxDQUFDTyxPQUFBLENBQUFULE1BQU07Y0FBQ21CLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQ3hCdkIsS0FBQSxDQUFBTSxhQUFBLENBQUNMLEdBQUEsQ0FBQXlELGFBQWE7Y0FBQ0MsU0FBUyxFQUFDO1lBQXVCLEdBQy9DM0QsS0FBQSxDQUFBTSxhQUFBLENBQUNXLEtBQUEsQ0FBQTJDLElBQUk7Y0FBQ3JCLFFBQVEsRUFBRUEsUUFBUTtjQUFFb0IsU0FBUyxFQUFDO1lBQXVCLEdBQzFEM0QsS0FBQSxDQUFBTSxhQUFBLGFBQUtELEtBQUssQ0FBQ3dELElBQUksQ0FBQ0MsS0FBSyxDQUFNLEVBQzNCOUQsS0FBQSxDQUFBTSxhQUFBO2NBQU1xRCxTQUFTLEVBQUM7WUFBSSxHQUFFdEQsS0FBSyxDQUFDd0QsSUFBSSxDQUFDRSxRQUFRLENBQVEsRUFDakQvRCxLQUFBLENBQUFNLGFBQUEsQ0FBQ0wsR0FBQSxDQUFBK0QsYUFBYTtjQUFDdEMsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDL0IxQixLQUFBLENBQUFNLGFBQUEsQ0FBQ2EsaUJBQUEsQ0FBQThDLFNBQVM7Y0FDVEMsS0FBSztjQUNMNUIsTUFBTSxFQUFFLENBQUM7Y0FDVG1CLEtBQUssRUFBRWxDLEtBQUs7Y0FDWjRDLElBQUksRUFBQyxNQUFNO2NBQ1hDLElBQUksRUFBQyxNQUFNO2NBQ1hDLFVBQVUsRUFBRW5DLFlBQVk7Y0FDeEJvQyxRQUFRO1lBQUEsRUFDUCxFQUNGdEUsS0FBQSxDQUFBTSxhQUFBLENBQUNjLFlBQUEsQ0FBQW1ELE1BQU07Y0FBQ0MsS0FBSztjQUFDbkMsUUFBUSxFQUFFQSxRQUFRO2NBQUVvQyxPQUFPLEVBQUMsU0FBUztjQUFDTCxJQUFJLEVBQUM7WUFBUSxHQUMvRC9ELEtBQUssQ0FBQ3FFLE1BQU0sQ0FBQzlELElBQUksQ0FDVixDQUNILEVBQ1BaLEtBQUEsQ0FBQU0sYUFBQTtjQUFLcUQsU0FBUyxFQUFDO1lBQWtELEdBQ2hFM0QsS0FBQSxDQUFBTSxhQUFBLGFBQUtELEtBQUssQ0FBQ3NFLElBQUksQ0FBQ2IsS0FBSyxDQUFNLEVBQzNCOUQsS0FBQSxDQUFBTSxhQUFBLGFBQ0NOLEtBQUEsQ0FBQU0sYUFBQSxhQUFLRCxLQUFLLENBQUNzRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxDQUFNLEVBQ2pDN0UsS0FBQSxDQUFBTSxhQUFBLGFBQUtELEtBQUssQ0FBQ3NFLElBQUksQ0FBQ0MsS0FBSyxDQUFDRSxNQUFNLENBQU0sQ0FDOUIsRUFDTDlFLEtBQUEsQ0FBQU0sYUFBQSxlQUFPRCxLQUFLLENBQUNzRSxJQUFJLENBQUNJLElBQUksQ0FBUSxDQUN6QixDQUNTLENBQ007VUFFekIifQ==