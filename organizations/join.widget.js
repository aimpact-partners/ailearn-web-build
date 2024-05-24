System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.39/components/ui", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/code-verification", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.39/components/navbar-header.code", "@aimpact/ailearn-app@0.0.39/config", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, TokenForm, Header, View, Ready, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    TokenForm: void 0,
    Header: void 0,
    View: void 0,
    Ready: void 0
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
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_aimpactAilearnApp0039ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0039ComponentsUi;
    }, function (_pragmateUi011Image) {
      dependency_9 = _pragmateUi011Image;
    }, function (_pragmateUi011Form) {
      dependency_10 = _pragmateUi011Form;
    }, function (_pragmateUi011Toast) {
      dependency_11 = _pragmateUi011Toast;
    }, function (_pragmateUi011CodeVerification) {
      dependency_12 = _pragmateUi011CodeVerification;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0039ComponentsNavbarHeaderCode) {
      dependency_16 = _aimpactAilearnApp0039ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0039Config) {
      dependency_17 = _aimpactAilearnApp0039Config;
    }, function (_aimpactChat101SharedHooks) {
      dependency_18 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.39"], ["@aimpact/ailearn-app", "0.0.39"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.39/organizations/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['framer-motion', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/toast', dependency_11], ['pragmate-ui/code-verification', dependency_12], ['pragmate-ui/components', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@beyond-js/kernel/routing', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['@aimpact/ailearn-app/config', dependency_17], ['@aimpact/chat/shared/hooks', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.39/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.39/organizations/join.widget');
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
        hash: 2320737067,
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
            get TOTAL_CODES() {
              return 7;
            }
            get model() {
              return this.#model;
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
              this.#model = new _core.Organization({});
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

      /************************************
      INTERNAL MODULE: ./views/animated-div
      ************************************/

      ims.set('./views/animated-div', {
        hash: 2258000075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedDiv = AnimatedDiv;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedDiv({
            children,
            cls
          } = {
            children: null,
            cls: ''
          }) {
            return React.createElement(_framerMotion.motion.div, {
              className: cls,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.3,
                  width: 'auto'
                },
                y: 0
              },
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1181222785,
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

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 1619870297,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TokenForm = TokenForm;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _image = require("pragmate-ui/image");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _codeVerification = require("pragmate-ui/code-verification");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function TokenForm() {
            const {
              texts,
              store,
              setJoined
            } = (0, _context.useJoinContext)();
            const [token, setToken] = React.useState(store.code ?? '');
            const [error, setError] = React.useState('');
            const [styleAlert, setStyleAlert] = React.useState('error');
            const handleChange = code => {
              setToken(code);
              setError('');
            };
            const disabled = token.length !== 7;
            const onSubmit = async () => {
              try {
                const response = await store.model.join({
                  code: token
                });
                if (response.data.status === 'PENDING') {
                  _toast.toast.success(texts.messages.pending);
                  setJoined(true);
                  return;
                }
                _toast.toast.success(texts.messages.success);
                _routing.routing.pushState(`/organizations/view/${response.data.organization.id}`);
              } catch (e) {
                console.error(e);
                const style = ['ALREADY_WAITING', 'ALREADY_MEMBER'].includes(e?.message) ? 'warning' : 'danger';
                setStyleAlert(style);
                setError(texts.errors[e?.message?.toString()] ?? texts.errors.ERROR_PUBLISHING);
              }
            };
            return React.createElement("div", {
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
              error: error,
              variant: styleAlert
            }), React.createElement(_codeVerification.InputCode, {
              length: store.TOTAL_CODES,
              value: token,
              name: "name",
              type: "text",
              onCodeFull: handleChange,
              required: true
            }), React.createElement(_components.Button, {
              disabled: disabled,
              variant: "primary",
              type: "submit"
            }, texts.action.join)), React.createElement("div", {
              className: "token-info__container flex-container flex-column text-center"
            }, React.createElement("p", null, texts.info.help)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 2045850208,
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
              breadcrumb: [[texts.breadcrumb.organizations, '/organizations/list'], [texts.breadcrumb.join, '']]
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1368011841,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("./header");
          var _context = require("./context");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          var _ready = require("./ready");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks2.useBinder)([store], () => setReady(store.ready));
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [joined, setJoined] = React.useState(false);
            if (!ready || !textsReady) return null;
            const Control = joined ? _ready.Ready : _form.TokenForm;
            const value = {
              texts,
              joined,
              setJoined,
              store
            };
            return React.createElement(_context.JoinContext.Provider, {
              value: value
            }, React.createElement(_header.Header, null), React.createElement(Control, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/ready
      *****************************/

      ims.set('./views/ready', {
        hash: 2535388268,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Ready = Ready;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _animatedDiv = require("./animated-div");
          /*bundle*/
          function Ready({}) {
            const {
              texts
            } = (0, _context.useJoinContext)();
            const {
              title,
              subtitle,
              description
            } = texts.ready;
            return React.createElement(_ui.PageContainer, null, React.createElement(_animatedDiv.AnimatedDiv, {
              cls: "ready-container"
            }, React.createElement("h3", null, title), React.createElement("span", null, description)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/form",
        "from": "TokenForm",
        "name": "TokenForm"
      }, {
        "im": "./views/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/ready",
        "from": "Ready",
        "name": "Ready"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'TokenForm') && _export("TokenForm", TokenForm = require ? require('./views/form').TokenForm : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header').Header : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'Ready') && _export("Ready", Ready = require ? require('./views/ready').Ready : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIlRPVEFMX0NPREVTIiwiY29kZSIsInZhbGlkQ29kZSIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwiT3JnYW5pemF0aW9uIiwicmVhZHkiLCJSZWFjdCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNoaWxkcmVuIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsIm1vdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwid2lkdGgiLCJ5IiwiZXhpdCIsIl9yZWFjdCIsIkpvaW5Db250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VKb2luQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaW1hZ2UiLCJfZm9ybSIsIl90b2FzdCIsIl9jb2RlVmVyaWZpY2F0aW9uIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9yb3V0aW5nIiwiVG9rZW5Gb3JtIiwidGV4dHMiLCJzZXRKb2luZWQiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwic3R5bGVBbGVydCIsInNldFN0eWxlQWxlcnQiLCJoYW5kbGVDaGFuZ2UiLCJkaXNhYmxlZCIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJqb2luIiwiZGF0YSIsInN0YXR1cyIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwicGVuZGluZyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJvcmdhbml6YXRpb24iLCJpZCIsImUiLCJjb25zb2xlIiwic3R5bGUiLCJpbmNsdWRlcyIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJ0b1N0cmluZyIsIkVSUk9SX1BVQkxJU0hJTkciLCJGb3JtIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImZvcm0iLCJzdWJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiSW5wdXRDb2RlIiwidmFsdWUiLCJuYW1lIiwidHlwZSIsIm9uQ29kZUZ1bGwiLCJyZXF1aXJlZCIsIkJ1dHRvbiIsImFjdGlvbiIsImluZm8iLCJoZWxwIiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJvcmdhbml6YXRpb25zIiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJfcmVhZHkiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImpvaW5lZCIsIkNvbnRyb2wiLCJSZWFkeSIsIlByb3ZpZGVyIiwiX2FuaW1hdGVkRGl2IiwiZGVzY3JpcHRpb24iLCJQYWdlQ29udGFpbmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlYWR5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUM7WUFDQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLEtBQUssRUFBRTtZQUNwQjs7VUFDQUMsT0FBQSxDQUFBZCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJELElBQUFlLE1BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsS0FBQSxHQUFBbkIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUVcsTUFBQSxDQUFBRSxhQUEyQjtZQUM1RCxDQUFBQyxLQUFNO1lBRU4sSUFBSUMsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sQ0FBQztZQUNUO1lBQ0EsSUFBSUQsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBRSxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxJQUFJQyxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUQsSUFBSyxJQUFJLElBQUksQ0FBQyxDQUFBQSxJQUFLLENBQUNFLE1BQU0sS0FBSyxJQUFJLENBQUNILFdBQVc7WUFDNUQ7WUFFQUksWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBTCxLQUFNLEdBQUcsSUFBSUYsS0FBQSxDQUFBUSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ25DO1lBRUFoQixJQUFJQSxDQUFDWSxJQUFJO2NBQ1IsSUFBSUEsSUFBSSxFQUFFO2dCQUNULElBQUksQ0FBQyxDQUFBQSxJQUFLLEdBQUdBLElBQUk7O2NBRWxCLElBQUksQ0FBQ0ssS0FBSyxHQUFHLElBQUk7WUFDbEI7WUFDQVosS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQ1ksS0FBSyxHQUFHLEtBQUs7WUFDbkI7O1VBQ0FYLE9BQUEsQ0FBQVYsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BDRCxJQUFBc0IsS0FBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUE4QixhQUFBLEdBQUE5QixPQUFBO1VBRU0sU0FBVStCLFdBQVdBLENBQUM7WUFBRUMsUUFBUTtZQUFFQztVQUFHLElBQXlCO1lBQUVELFFBQVEsRUFBRSxJQUFJO1lBQUVDLEdBQUcsRUFBRTtVQUFFLENBQUU7WUFDOUYsT0FDQ0osS0FBQSxDQUFBSyxhQUFBLENBQUNKLGFBQUEsQ0FBQUssTUFBTSxDQUFDQyxHQUFHO2NBQ1ZDLFNBQVMsRUFBRUosR0FBRztjQUNkSyxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFLEdBQUc7a0JBQ2JDLEtBQUssRUFBRSxHQUFHO2tCQUNWQyxLQUFLLEVBQUU7aUJBQ1A7Z0JBQ0RDLENBQUMsRUFBRTtlQUNIO2NBQ0RDLElBQUksRUFBRTtnQkFDTEwsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUU7aUJBQ1Y7Z0JBQ0RILE9BQU8sRUFBRTs7WUFDVCxHQUVBUCxRQUFRLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQWUsTUFBQSxHQUFBL0MsT0FBQTtVQVNPLE1BQU1nRCxXQUFXLEdBQUEvQixPQUFBLENBQUErQixXQUFBLEdBQUdELE1BQUEsQ0FBQUUsT0FBSyxDQUFDQyxhQUFhLENBQWUsRUFBa0IsQ0FBQztVQUN6RSxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBRSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0osV0FBVyxDQUFDO1VBQUMvQixPQUFBLENBQUFrQyxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVmxFLElBQUF0QixLQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQXFELEdBQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBc0QsTUFBQSxHQUFBdEQsT0FBQTtVQUNBLElBQUF1RCxLQUFBLEdBQUF2RCxPQUFBO1VBQ0EsSUFBQXdELE1BQUEsR0FBQXhELE9BQUE7VUFDQSxJQUFBeUQsaUJBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBMEQsV0FBQSxHQUFBMUQsT0FBQTtVQUVBLElBQUEyRCxRQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQTRELFFBQUEsR0FBQTVELE9BQUE7VUFDTztVQUFVLFNBQ1I2RCxTQUFTQSxDQUFBO1lBQ2pCLE1BQU07Y0FBRUMsS0FBSztjQUFFekQsS0FBSztjQUFFMEQ7WUFBUyxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBUixjQUFjLEdBQUU7WUFDcEQsTUFBTSxDQUFDYSxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHcEMsS0FBSyxDQUFDcUMsUUFBUSxDQUFDN0QsS0FBSyxDQUFDa0IsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMxRCxNQUFNLENBQUM0QyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHdkMsS0FBSyxDQUFDcUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNLENBQUNHLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUd6QyxLQUFLLENBQUNxQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBRTNELE1BQU1LLFlBQVksR0FBR2hELElBQUksSUFBRztjQUMzQjBDLFFBQVEsQ0FBQzFDLElBQUksQ0FBQztjQUNkNkMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNiLENBQUM7WUFFRCxNQUFNSSxRQUFRLEdBQUdSLEtBQUssQ0FBQ3ZDLE1BQU0sS0FBSyxDQUFDO1lBQ25DLE1BQU1nRCxRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUEwQjtjQUMxQyxJQUFJO2dCQUNILE1BQU1DLFFBQVEsR0FBRyxNQUFNckUsS0FBSyxDQUFDZ0IsS0FBSyxDQUFDc0QsSUFBSSxDQUFDO2tCQUFFcEQsSUFBSSxFQUFFeUM7Z0JBQUssQ0FBRSxDQUFDO2dCQUV4RCxJQUFJVSxRQUFRLENBQUNFLElBQUksQ0FBQ0MsTUFBTSxLQUFLLFNBQVMsRUFBRTtrQkFDdkNyQixNQUFBLENBQUFzQixLQUFLLENBQUNDLE9BQU8sQ0FBQ2pCLEtBQUssQ0FBQ2tCLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDO2tCQUNyQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUM7a0JBQ2Y7O2dCQUdEUCxNQUFBLENBQUFzQixLQUFLLENBQUNDLE9BQU8sQ0FBQ2pCLEtBQUssQ0FBQ2tCLFFBQVEsQ0FBQ0QsT0FBTyxDQUFDO2dCQUNyQ25CLFFBQUEsQ0FBQXNCLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLHVCQUF1QlQsUUFBUSxDQUFDRSxJQUFJLENBQUNRLFlBQVksQ0FBQ0MsRUFBRSxFQUFFLENBQUM7ZUFDekUsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ3BCLEtBQUssQ0FBQ21CLENBQUMsQ0FBQztnQkFDaEIsTUFBTUUsS0FBSyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQ0MsUUFBUSxDQUFDSCxDQUFDLEVBQUVJLE9BQU8sQ0FBQyxHQUFHLFNBQVMsR0FBRyxRQUFRO2dCQUMvRnBCLGFBQWEsQ0FBQ2tCLEtBQUssQ0FBQztnQkFDcEJwQixRQUFRLENBQUNOLEtBQUssQ0FBQzZCLE1BQU0sQ0FBQ0wsQ0FBQyxFQUFFSSxPQUFPLEVBQUVFLFFBQVEsRUFBRSxDQUFDLElBQUk5QixLQUFLLENBQUM2QixNQUFNLENBQUNFLGdCQUFnQixDQUFDOztZQUVqRixDQUFDO1lBRUQsT0FDQ2hFLEtBQUEsQ0FBQUssYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBdUIsR0FDckNSLEtBQUEsQ0FBQUssYUFBQSxDQUFDcUIsS0FBQSxDQUFBdUMsSUFBSTtjQUFDckIsUUFBUSxFQUFFQSxRQUFRO2NBQUVwQyxTQUFTLEVBQUM7WUFBdUIsR0FDMURSLEtBQUEsQ0FBQUssYUFBQSxpQkFDQ0wsS0FBQSxDQUFBSyxhQUFBLENBQUNvQixNQUFBLENBQUF5QyxLQUFLO2NBQUMxRCxTQUFTLEVBQUMsc0JBQXNCO2NBQUMyRCxHQUFHLEVBQUMsNkJBQTZCO2NBQUNDLEdBQUcsRUFBQztZQUFRLEVBQUcsRUFDekZwRSxLQUFBLENBQUFLLGFBQUE7Y0FBSUcsU0FBUyxFQUFDO1lBQXNCLEdBQUV5QixLQUFLLENBQUNvQyxLQUFLLENBQU0sRUFDdkRyRSxLQUFBLENBQUFLLGFBQUE7Y0FBTUcsU0FBUyxFQUFDO1lBQUksR0FBRXlCLEtBQUssQ0FBQ3FDLElBQUksQ0FBQ0MsUUFBUSxDQUFRLENBQ3pDLEVBRVR2RSxLQUFBLENBQUFLLGFBQUEsQ0FBQ21CLEdBQUEsQ0FBQWdELGFBQWE7Y0FBQ2xDLEtBQUssRUFBRUEsS0FBSztjQUFFbUMsT0FBTyxFQUFFakM7WUFBVSxFQUFJLEVBQ3BEeEMsS0FBQSxDQUFBSyxhQUFBLENBQUN1QixpQkFBQSxDQUFBOEMsU0FBUztjQUNUOUUsTUFBTSxFQUFFcEIsS0FBSyxDQUFDaUIsV0FBVztjQUN6QmtGLEtBQUssRUFBRXhDLEtBQUs7Y0FDWnlDLElBQUksRUFBQyxNQUFNO2NBQ1hDLElBQUksRUFBQyxNQUFNO2NBQ1hDLFVBQVUsRUFBRXBDLFlBQVk7Y0FDeEJxQyxRQUFRO1lBQUEsRUFDUCxFQUNGL0UsS0FBQSxDQUFBSyxhQUFBLENBQUN3QixXQUFBLENBQUFtRCxNQUFNO2NBQUNyQyxRQUFRLEVBQUVBLFFBQVE7Y0FBRThCLE9BQU8sRUFBQyxTQUFTO2NBQUNJLElBQUksRUFBQztZQUFRLEdBQ3pENUMsS0FBSyxDQUFDZ0QsTUFBTSxDQUFDbkMsSUFBSSxDQUNWLENBQ0gsRUFDUDlDLEtBQUEsQ0FBQUssYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBOEQsR0FDNUVSLEtBQUEsQ0FBQUssYUFBQSxZQUFJNEIsS0FBSyxDQUFDaUQsSUFBSSxDQUFDQyxJQUFJLENBQUssQ0FDbkIsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFQSxJQUFBbkYsS0FBQSxHQUFBN0IsT0FBQTtVQUVBLElBQUFpSCxhQUFBLEdBQUFqSCxPQUFBO1VBRUEsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFFTztVQUFVLFNBQVVrSCxNQUFNQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRXBEO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQVIsY0FBYyxHQUFFO1lBQ2xDLE9BQ0N0QixLQUFBLENBQUFLLGFBQUEsa0JBQ0NMLEtBQUEsQ0FBQUssYUFBQSxDQUFDK0UsYUFBQSxDQUFBRSxZQUFZO2NBQ1pDLFVBQVUsRUFBRSxDQUNYLENBQUN0RCxLQUFLLENBQUNzRCxVQUFVLENBQUNDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxFQUN2RCxDQUFDdkQsS0FBSyxDQUFDc0QsVUFBVSxDQUFDekMsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUMzQixFQUNjLENBQ1A7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkEsSUFBQTlDLEtBQUEsR0FBQTdCLE9BQUE7VUFFQSxJQUFBc0gsT0FBQSxHQUFBdEgsT0FBQTtVQUNBLElBQUEyRCxRQUFBLEdBQUEzRCxPQUFBO1VBRUEsSUFBQXVILGVBQUEsR0FBQXZILE9BQUE7VUFDQSxJQUFBd0gsTUFBQSxHQUFBeEgsT0FBQTtVQUdBLElBQUF5SCxPQUFBLEdBQUF6SCxPQUFBO1VBQ0EsSUFBQXVELEtBQUEsR0FBQXZELE9BQUE7VUFDQSxJQUFBMEgsTUFBQSxHQUFBMUgsT0FBQTtVQUNPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQy9DLE1BQU0sQ0FBQ3VCLEtBQUssRUFBRStGLFFBQVEsQ0FBQyxHQUFHOUYsS0FBSyxDQUFDcUMsUUFBUSxDQUFDN0QsS0FBSyxDQUFDdUIsS0FBSyxDQUFDO1lBQ3JELElBQUE2RixPQUFBLENBQUFHLFNBQVMsRUFBQyxDQUFDdkgsS0FBSyxDQUFDLEVBQUUsTUFBTXNILFFBQVEsQ0FBQ3RILEtBQUssQ0FBQ3VCLEtBQUssQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ2lHLFVBQVUsRUFBRS9ELEtBQUssQ0FBQyxHQUFHLElBQUEwRCxNQUFBLENBQUFNLFFBQVEsRUFBQ1AsZUFBQSxDQUFBUSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RCxNQUFNLENBQUNDLE1BQU0sRUFBRWxFLFNBQVMsQ0FBQyxHQUFHbEMsS0FBSyxDQUFDcUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVqRCxJQUFJLENBQUN0QyxLQUFLLElBQUksQ0FBQ2lHLFVBQVUsRUFBRSxPQUFPLElBQUk7WUFFdEMsTUFBTUssT0FBTyxHQUFHRCxNQUFNLEdBQUdQLE1BQUEsQ0FBQVMsS0FBSyxHQUFHNUUsS0FBQSxDQUFBTSxTQUFTO1lBQzFDLE1BQU0yQyxLQUFLLEdBQUc7Y0FDYjFDLEtBQUs7Y0FDTG1FLE1BQU07Y0FDTmxFLFNBQVM7Y0FDVDFEO2FBQ0E7WUFDRCxPQUNDd0IsS0FBQSxDQUFBSyxhQUFBLENBQUN5QixRQUFBLENBQUFYLFdBQVcsQ0FBQ29GLFFBQVE7Y0FBQzVCLEtBQUssRUFBRUE7WUFBSyxHQUNqQzNFLEtBQUEsQ0FBQUssYUFBQSxDQUFDb0YsT0FBQSxDQUFBSixNQUFNLE9BQUcsRUFDVnJGLEtBQUEsQ0FBQUssYUFBQSxDQUFDZ0csT0FBTyxPQUFHLENBQ1c7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBLElBQUFyRyxLQUFBLEdBQUE3QixPQUFBO1VBRUEsSUFBQXFELEdBQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFxSSxZQUFBLEdBQUFySSxPQUFBO1VBRU87VUFBVSxTQUNSbUksS0FBS0EsQ0FBQyxFQUFFO1lBQ2hCLE1BQU07Y0FBRXJFO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQVIsY0FBYyxHQUFFO1lBQ2xDLE1BQU07Y0FBRStDLEtBQUs7Y0FBRUUsUUFBUTtjQUFFa0M7WUFBVyxDQUFFLEdBQUd4RSxLQUFLLENBQUNsQyxLQUFLO1lBQ3BELE9BQ0NDLEtBQUEsQ0FBQUssYUFBQSxDQUFDbUIsR0FBQSxDQUFBa0YsYUFBYSxRQUNiMUcsS0FBQSxDQUFBSyxhQUFBLENBQUNtRyxZQUFBLENBQUF0RyxXQUFXO2NBQUNFLEdBQUcsRUFBQztZQUFpQixHQUNqQ0osS0FBQSxDQUFBSyxhQUFBLGFBQUtnRSxLQUFLLENBQU0sRUFDaEJyRSxLQUFBLENBQUFLLGFBQUEsZUFBT29HLFdBQVcsQ0FBUSxDQUNiLENBQ0M7VUFFbEIifQ==