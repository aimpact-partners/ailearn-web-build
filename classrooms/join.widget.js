System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.45/components/navbar-header.code", "@aimpact/ailearn-app@0.0.45/config", "pragmate-ui@0.1.1/image", "@aimpact/ailearn-app@0.0.45/components/ui", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/code-verification", "pragmate-ui@0.1.1/components", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp0045ComponentsNavbarHeaderCode) {
      dependency_7 = _aimpactAilearnApp0045ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0045Config) {
      dependency_8 = _aimpactAilearnApp0045Config;
    }, function (_pragmateUi011Image) {
      dependency_9 = _pragmateUi011Image;
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0045ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Form) {
      dependency_13 = _pragmateUi011Form;
    }, function (_pragmateUi011Toast) {
      dependency_14 = _pragmateUi011Toast;
    }, function (_pragmateUi011CodeVerification) {
      dependency_15 = _pragmateUi011CodeVerification;
    }, function (_pragmateUi011Components) {
      dependency_16 = _pragmateUi011Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/classrooms/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/code-verification', dependency_15], ['pragmate-ui/components', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/classrooms/join.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 198384358,
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
              this.#store.load(this.uri.qs.get('code'));
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
        hash: 1876651355,
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
            get TOTAL_CODES() {
              return 7;
            }
            #code;
            get code() {
              return this.#code;
            }
            get validCode() {
              return this.#code && this.#code.length === this.TOTAL_CODES;
            }
            constructor() {
              super();
              this.#model = new _core.Classroom({});
            }
            load(code) {
              if (code) {
                this.#code = code;
              }
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
        hash: 1987354350,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _context = require("./context");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useJoinContext)();
            return React.createElement("section", null, React.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[texts.breadcrumb.classrooms, '/classrooms/list'], [texts.breadcrumb.join, '']]
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2785762224,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            const [token, setToken] = React.useState(store.code ?? '');
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
                setError(texts.errors[e?.message] ?? texts.errors.INVALID_CODE);
              }
            };
            return React.createElement(_context.JoinContext.Provider, {
              value: {
                texts,
                store
              }
            }, React.createElement(_ui.PageContainer, {
              className: "token-page__container"
            }, React.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: "token-form__container"
            }, React.createElement("header", null, React.createElement(_image.Image, {
              className: "animate glow delay-1",
              src: "/assets/RVD.AI.Branding.png",
              alt: "RVD.AI"
            }), React.createElement("h1", {
              className: "animate glow delay-2"
            }, texts.title), React.createElement("span", {
              className: "p1"
            }, texts.form.subtitle)), React.createElement(_ui.ErrorRenderer, {
              error: error
            }), React.createElement(_codeVerification.InputCode, {
              upper: true,
              length: store.TOTAL_CODES,
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
            }, React.createElement("p", {
              className: "text-center"
            }, texts.info.help))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIlRPVEFMX0NPREVTIiwiY29kZSIsInZhbGlkQ29kZSIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwiQ2xhc3Nyb29tIiwicmVhZHkiLCJfcmVhY3QiLCJKb2luQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlSm9pbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfbmF2YmFySGVhZGVyIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiY2xhc3Nyb29tcyIsImpvaW4iLCJfaW1hZ2UiLCJfdWkiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9mb3JtIiwiX3RvYXN0IiwiX2NvZGVWZXJpZmljYXRpb24iLCJfY29tcG9uZW50czIiLCJfcm91dGluZyIsIl9ob29rczIiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJoYW5kbGVDaGFuZ2UiLCJQcmVsb2FkU2NyZWVuIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwic3RhdHVzIiwiZXJyb3JzIiwiSU5WQUxJRF9DT0RFIiwiZGF0YSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsInBlbmRpbmciLCJpbmNsdWRlcyIsImNsYXNzcm9vbSIsImlkIiwiYXV0aG9yaXplZCIsImUiLCJtZXNzYWdlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJGb3JtIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImZvcm0iLCJzdWJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJJbnB1dENvZGUiLCJ1cHBlciIsIm5hbWUiLCJ0eXBlIiwib25Db2RlRnVsbCIsInJlcXVpcmVkIiwiQnV0dG9uIiwiYmxvY2siLCJ2YXJpYW50IiwiYWN0aW9uIiwiaW5mbyIsImhlbHAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNI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