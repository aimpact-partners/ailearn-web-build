System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.1.3/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.1/session", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.3/components/ui", "pragmate-ui@1.0.0-beta.1/image", "pragmate-ui@1.0.0-beta.1/form", "pragmate-ui@1.0.0-beta.1/toast", "pragmate-ui@1.0.0-beta.1/code-verification", "pragmate-ui@1.0.0-beta.1/components", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.1.3/components/navbar-header.code", "@aimpact/ailearn-app@0.1.3/config", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, TokenForm, Header, View, Ready, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp013MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp013MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk101Session) {
      dependency_8 = _aimpactChatSdk101Session;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_framerMotion2) {
      dependency_10 = _framerMotion2;
    }, function (_aimpactAilearnApp013ComponentsUi) {
      dependency_11 = _aimpactAilearnApp013ComponentsUi;
    }, function (_pragmateUi100Beta1Image) {
      dependency_12 = _pragmateUi100Beta1Image;
    }, function (_pragmateUi100Beta1Form) {
      dependency_13 = _pragmateUi100Beta1Form;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_14 = _pragmateUi100Beta1Toast;
    }, function (_pragmateUi100Beta1CodeVerification) {
      dependency_15 = _pragmateUi100Beta1CodeVerification;
    }, function (_pragmateUi100Beta1Components) {
      dependency_16 = _pragmateUi100Beta1Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp013ComponentsNavbarHeaderCode) {
      dependency_18 = _aimpactAilearnApp013ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp013Config) {
      dependency_19 = _aimpactAilearnApp013Config;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_20 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3"], ["@aimpact/ailearn-app", "0.1.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3/organizations/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['react', dependency_9], ['framer-motion', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/image', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/code-verification', dependency_15], ['pragmate-ui/components', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.1.3/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3/organizations/join.widget');
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
        hash: 2248981582,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
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
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#model = new _core.Organization({});
            }
            setBreadcrumb() {
              const onChange = this.setBreadcrumb.bind(this);
              if (!this.#texts.ready) {
                this.#texts.on('change', onChange);
                return;
              }
              this.#texts.off('change', onChange);
              _mainLayout.LayoutBroker.overlay = false;
              globalThis.setTimeout(() => {
                _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.join, '']];
              }, 100);
            }
            load(code) {
              this.setBreadcrumb();
              if (code) {
                this.#code = code;
              }
              super.ready = true;
            }
            clear() {
              super.ready = false;
            }
            async loadUser() {
              await _session.sessionWrapper.user.load();
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
        hash: 3348771364,
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
                await store.loadUser();
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
        hash: 1813320273,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          var _ready = require("./ready");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const [joined, setJoined] = React.useState(false);
            if (!ready) return null;
            const Control = joined ? _ready.Ready : _form.TokenForm;
            const value = {
              texts: store.texts,
              joined,
              setJoined,
              store
            };
            return React.createElement(_context.JoinContext.Provider, {
              value: value
            }, React.createElement(Control, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/ready
      *****************************/

      ims.set('./views/ready', {
        hash: 97868858,
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
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function Ready({}) {
            const {
              texts
            } = (0, _context.useJoinContext)();
            const {
              title,
              description
            } = texts.ready;
            return React.createElement(_ui.PageContainer, null, React.createElement(_animatedDiv.AnimatedDiv, {
              cls: "ready-container"
            }, React.createElement("h3", null, title), React.createElement("span", null, description), React.createElement(_components.Link, {
              href: "/",
              className: "btn btn-primary outline"
            }, texts.actions.home)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJUT1RBTF9DT0RFUyIsImNvZGUiLCJ2YWxpZENvZGUiLCJsZW5ndGgiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiT3JnYW5pemF0aW9uIiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImJyZWFkY3J1bWIiLCJqb2luIiwibG9hZFVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJSZWFjdCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNoaWxkcmVuIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsIm1vdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwid2lkdGgiLCJ5IiwiZXhpdCIsIl9yZWFjdCIsIkpvaW5Db250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VKb2luQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaW1hZ2UiLCJfZm9ybSIsIl90b2FzdCIsIl9jb2RlVmVyaWZpY2F0aW9uIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9yb3V0aW5nIiwiVG9rZW5Gb3JtIiwic2V0Sm9pbmVkIiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInN0eWxlQWxlcnQiLCJzZXRTdHlsZUFsZXJ0IiwiaGFuZGxlQ2hhbmdlIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwiZGF0YSIsInN0YXR1cyIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwicGVuZGluZyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJvcmdhbml6YXRpb24iLCJpZCIsImUiLCJjb25zb2xlIiwic3R5bGUiLCJpbmNsdWRlcyIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJ0b1N0cmluZyIsIkVSUk9SX1BVQkxJU0hJTkciLCJGb3JtIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImZvcm0iLCJzdWJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiSW5wdXRDb2RlIiwibmFtZSIsInR5cGUiLCJvbkNvZGVGdWxsIiwicmVxdWlyZWQiLCJCdXR0b24iLCJhY3Rpb24iLCJpbmZvIiwiaGVscCIsIl9uYXZiYXJIZWFkZXIiLCJIZWFkZXIiLCJOYXZiYXJIZWFkZXIiLCJvcmdhbml6YXRpb25zIiwiX2hvb2tzIiwiX3JlYWR5Iiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJqb2luZWQiLCJDb250cm9sIiwiUmVhZHkiLCJQcm92aWRlciIsIl9hbmltYXRlZERpdiIsImRlc2NyaXB0aW9uIiwiUGFnZUNvbnRhaW5lciIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImhvbWUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZm9ybS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcmVhZHkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUM7WUFDQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLEtBQUssRUFBRTtZQUNwQjs7VUFDQUMsT0FBQSxDQUFBZCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJELElBQUFlLE1BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsS0FBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixXQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLE1BQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBc0IsZUFBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF1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