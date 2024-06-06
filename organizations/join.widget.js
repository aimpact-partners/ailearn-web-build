System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.46.dev-09/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.46.dev-09/components/ui", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/code-verification", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.46.dev-09/components/navbar-header.code", "@aimpact/ailearn-app@0.0.46.dev-09/config"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev09MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0046Dev09MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_framerMotion2) {
      dependency_9 = _framerMotion2;
    }, function (_aimpactAilearnApp0046Dev09ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0046Dev09ComponentsUi;
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
    }, function (_aimpactAilearnApp0046Dev09ComponentsNavbarHeaderCode) {
      dependency_18 = _aimpactAilearnApp0046Dev09ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0046Dev09Config) {
      dependency_19 = _aimpactAilearnApp0046Dev09Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-09"], ["@aimpact/ailearn-app", "0.0.46.dev-09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/organizations/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['framer-motion', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/image', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/toast', dependency_13], ['pragmate-ui/code-verification', dependency_14], ['pragmate-ui/components', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_18], ['@aimpact/ailearn-app/config', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-09/organizations/join.widget');
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
        hash: 387618585,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiVE9UQUxfQ09ERVMiLCJjb2RlIiwidmFsaWRDb2RlIiwibGVuZ3RoIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsIk9yZ2FuaXphdGlvbiIsInNldEJyZWFkY3J1bWIiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwiam9pbiIsIlJlYWN0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ3aWR0aCIsInkiLCJleGl0IiwiX3JlYWN0IiwiSm9pbkNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUpvaW5Db250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9pbWFnZSIsIl9mb3JtIiwiX3RvYXN0IiwiX2NvZGVWZXJpZmljYXRpb24iLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3JvdXRpbmciLCJUb2tlbkZvcm0iLCJzZXRKb2luZWQiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwic3R5bGVBbGVydCIsInNldFN0eWxlQWxlcnQiLCJoYW5kbGVDaGFuZ2UiLCJkaXNhYmxlZCIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJwZW5kaW5nIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm9yZ2FuaXphdGlvbiIsImlkIiwiZSIsImNvbnNvbGUiLCJzdHlsZSIsImluY2x1ZGVzIiwibWVzc2FnZSIsImVycm9ycyIsInRvU3RyaW5nIiwiRVJST1JfUFVCTElTSElORyIsIkZvcm0iLCJJbWFnZSIsInNyYyIsImFsdCIsInRpdGxlIiwiZm9ybSIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsInZhcmlhbnQiLCJJbnB1dENvZGUiLCJuYW1lIiwidHlwZSIsIm9uQ29kZUZ1bGwiLCJyZXF1aXJlZCIsIkJ1dHRvbiIsImFjdGlvbiIsImluZm8iLCJoZWxwIiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsIm9yZ2FuaXphdGlvbnMiLCJfaG9va3MiLCJfcmVhZHkiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsImpvaW5lZCIsIkNvbnRyb2wiLCJSZWFkeSIsIlByb3ZpZGVyIiwiX2FuaW1hdGVkRGl2IiwiZGVzY3JpcHRpb24iLCJQYWdlQ29udGFpbmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlYWR5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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