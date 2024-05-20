System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.32-dev.48/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32-dev.48/config", "pragmate-ui@0.1.1/image", "@aimpact/ailearn-app@0.0.32-dev.48/components/ui", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/code-verification", "pragmate-ui@0.1.1/components", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032Dev48ComponentsNavbarHeaderCode) {
      dependency_7 = _aimpactAilearnApp0032Dev48ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Dev48Config) {
      dependency_8 = _aimpactAilearnApp0032Dev48Config;
    }, function (_pragmateUi011Image) {
      dependency_9 = _pragmateUi011Image;
    }, function (_aimpactAilearnApp0032Dev48ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032Dev48ComponentsUi;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.32-dev.48"], ["@aimpact/ailearn-app", "0.0.32-dev.48"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.48/classrooms/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/code-verification', dependency_15], ['pragmate-ui/components', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.48/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-dev.48/classrooms/join.widget');
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
        hash: 3885549626,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _image = require("pragmate-ui/image");
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
            }, React.createElement(_header.Header, {
              token: token
            }), React.createElement(_ui.PageContainer, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIlRPVEFMX0NPREVTIiwiY29kZSIsInZhbGlkQ29kZSIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwiQ2xhc3Nyb29tIiwicmVhZHkiLCJfcmVhY3QiLCJKb2luQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlSm9pbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfbmF2YmFySGVhZGVyIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiY2xhc3Nyb29tcyIsImpvaW4iLCJfaW1hZ2UiLCJfdWkiLCJfaGVhZGVyIiwiX2NvbXBvbmVudHMiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfZm9ybSIsIl90b2FzdCIsIl9jb2RlVmVyaWZpY2F0aW9uIiwiX2NvbXBvbmVudHMyIiwiX3JvdXRpbmciLCJfaG9va3MyIiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldFJlYWR5IiwidXNlQmluZGVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiaGFuZGxlQ2hhbmdlIiwiUHJlbG9hZFNjcmVlbiIsImRpc2FibGVkIiwib25TdWJtaXQiLCJyZXNwb25zZSIsInN0YXR1cyIsImVycm9ycyIsIklOVkFMSURfQ09ERSIsImRhdGEiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJwZW5kaW5nIiwiaW5jbHVkZXMiLCJjbGFzc3Jvb20iLCJpZCIsImF1dGhvcml6ZWQiLCJlIiwibWVzc2FnZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiRm9ybSIsIkltYWdlIiwic3JjIiwiYWx0IiwidGl0bGUiLCJmb3JtIiwic3VidGl0bGUiLCJFcnJvclJlbmRlcmVyIiwiSW5wdXRDb2RlIiwidXBwZXIiLCJuYW1lIiwidHlwZSIsIm9uQ29kZUZ1bGwiLCJyZXF1aXJlZCIsIkJ1dHRvbiIsImJsb2NrIiwidmFyaWFudCIsImFjdGlvbiIsImluZm8iLCJoZWxwIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlB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