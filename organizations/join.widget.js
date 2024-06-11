System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.46.dev-15/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.46.dev-15/components/ui", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/code-verification", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.46.dev-15/components/navbar-header.code", "@aimpact/ailearn-app@0.0.46.dev-15/config"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, TokenForm, Header, View, Ready, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0046Dev15MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0046Dev15MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_framerMotion2) {
      dependency_9 = _framerMotion2;
    }, function (_aimpactAilearnApp0046Dev15ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0046Dev15ComponentsUi;
    }, function (_pragmateUi011Image) {
      dependency_11 = _pragmateUi011Image;
    }, function (_pragmateUi011Form) {
      dependency_12 = _pragmateUi011Form;
    }, function (_pragmateUi011Toast) {
      dependency_13 = _pragmateUi011Toast;
    }, function (_pragmateUi011CodeVerification) {
      dependency_14 = _pragmateUi011CodeVerification;
    }, function (_pragmateUi011Components) {
      dependency_15 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0046Dev15ComponentsNavbarHeaderCode) {
      dependency_18 = _aimpactAilearnApp0046Dev15ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0046Dev15Config) {
      dependency_19 = _aimpactAilearnApp0046Dev15Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-15"], ["@aimpact/ailearn-app", "0.0.46.dev-15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-15/organizations/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['framer-motion', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/image', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/toast', dependency_13], ['pragmate-ui/code-verification', dependency_14], ['pragmate-ui/components', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_18], ['@aimpact/ailearn-app/config', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-15/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-15/organizations/join.widget');
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
        hash: 1705262060,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiVE9UQUxfQ09ERVMiLCJjb2RlIiwidmFsaWRDb2RlIiwibGVuZ3RoIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsIk9yZ2FuaXphdGlvbiIsInNldEJyZWFkY3J1bWIiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwiam9pbiIsIlJlYWN0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ3aWR0aCIsInkiLCJleGl0IiwiX3JlYWN0IiwiSm9pbkNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUpvaW5Db250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9pbWFnZSIsIl9mb3JtIiwiX3RvYXN0IiwiX2NvZGVWZXJpZmljYXRpb24iLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3JvdXRpbmciLCJUb2tlbkZvcm0iLCJzZXRKb2luZWQiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwic3R5bGVBbGVydCIsInNldFN0eWxlQWxlcnQiLCJoYW5kbGVDaGFuZ2UiLCJkaXNhYmxlZCIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJwZW5kaW5nIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm9yZ2FuaXphdGlvbiIsImlkIiwiZSIsImNvbnNvbGUiLCJzdHlsZSIsImluY2x1ZGVzIiwibWVzc2FnZSIsImVycm9ycyIsInRvU3RyaW5nIiwiRVJST1JfUFVCTElTSElORyIsIkZvcm0iLCJJbWFnZSIsInNyYyIsImFsdCIsInRpdGxlIiwiZm9ybSIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsInZhcmlhbnQiLCJJbnB1dENvZGUiLCJuYW1lIiwidHlwZSIsIm9uQ29kZUZ1bGwiLCJyZXF1aXJlZCIsIkJ1dHRvbiIsImFjdGlvbiIsImluZm8iLCJoZWxwIiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsIm9yZ2FuaXphdGlvbnMiLCJfaG9va3MiLCJfcmVhZHkiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsImpvaW5lZCIsIkNvbnRyb2wiLCJSZWFkeSIsIlByb3ZpZGVyIiwiX2FuaW1hdGVkRGl2IiwiZGVzY3JpcHRpb24iLCJQYWdlQ29udGFpbmVyIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiaG9tZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWFkeS50c3giXSwic291cmNlc0NvbnRl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