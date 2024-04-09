System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.0/image", "pragmate-ui@0.1.0/form", "pragmate-ui@0.1.0/toast", "pragmate-ui@0.1.0/code-verification", "pragmate-ui@0.1.0/components", "@beyond-js/react-18-widgets@1.1.1/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi010Image) {
      dependency_9 = _pragmateUi010Image;
    }, function (_pragmateUi010Form) {
      dependency_10 = _pragmateUi010Form;
    }, function (_pragmateUi010Toast) {
      dependency_11 = _pragmateUi010Toast;
    }, function (_pragmateUi010CodeVerification) {
      dependency_12 = _pragmateUi010CodeVerification;
    }, function (_pragmateUi010Components) {
      dependency_13 = _pragmateUi010Components;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_14 = _beyondJsReact18Widgets111Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_16 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_17 = _aimpactAilearnApp0032Config;
    }, function (_aimpactChat101SharedHooks) {
      dependency_18 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/organizations/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['framer-motion', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/toast', dependency_11], ['pragmate-ui/code-verification', dependency_12], ['pragmate-ui/components', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@beyond-js/kernel/routing', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['@aimpact/ailearn-app/config', dependency_17], ['@aimpact/chat/shared/hooks', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/organizations/join.widget');
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
        hash: 2600503740,
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
                  delay: 0.3
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
        hash: 3264345869,
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
            const handleChange = code => {
              console.log('listo');
              setToken(code);
              setError('');
            };
            const disabled = token.length !== 7;
            const onSubmit = async () => {
              try {
                const response = await store.model.join({
                  code: store.code
                });
                if (response.data.status === 'PENDING') {
                  _toast.toast.success('Join successfully');
                  setJoined(true);
                  return;
                }
                _routing.routing.pushState(`/organizations/view/${response.data.organization.id}`);
              } catch (e) {
                console.error(e);
                setError(texts.errors[e.message]);
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
              className: "p2"
            }, texts.form.subtitle)), React.createElement(_ui.ErrorRenderer, {
              error: error
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
              className: "token-info__container flex-container flex-column"
            }, React.createElement("h6", null, texts.info.title), React.createElement("ul", null, React.createElement("li", null, texts.info.rules.first), React.createElement("li", null, texts.info.rules.second)), React.createElement("span", null, texts.info.help)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 2732036795,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _context = require("./context");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useJoinContext)();
            return React.createElement("section", null, React.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.organizations, '/organizations/list'], [texts.breadcrumb.join, '']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIlRPVEFMX0NPREVTIiwiY29kZSIsInZhbGlkQ29kZSIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwiT3JnYW5pemF0aW9uIiwicmVhZHkiLCJSZWFjdCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNoaWxkcmVuIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsIm1vdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJfcmVhY3QiLCJKb2luQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlSm9pbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2ltYWdlIiwiX2Zvcm0iLCJfdG9hc3QiLCJfY29kZVZlcmlmaWNhdGlvbiIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfcm91dGluZyIsIlRva2VuRm9ybSIsInRleHRzIiwic2V0Sm9pbmVkIiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJkaXNhYmxlZCIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJqb2luIiwiZGF0YSIsInN0YXR1cyIsInRvYXN0Iiwic3VjY2VzcyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJvcmdhbml6YXRpb24iLCJpZCIsImUiLCJlcnJvcnMiLCJtZXNzYWdlIiwiRm9ybSIsIkltYWdlIiwic3JjIiwiYWx0IiwidGl0bGUiLCJmb3JtIiwic3VidGl0bGUiLCJFcnJvclJlbmRlcmVyIiwiSW5wdXRDb2RlIiwidmFsdWUiLCJuYW1lIiwidHlwZSIsIm9uQ29kZUZ1bGwiLCJyZXF1aXJlZCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb24iLCJpbmZvIiwicnVsZXMiLCJmaXJzdCIsInNlY29uZCIsImhlbHAiLCJfbmF2YmFySGVhZGVyIiwiX2NvbmZpZyIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm9yZ2FuaXphdGlvbnMiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9yZWFkeSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiam9pbmVkIiwiQ29udHJvbCIsIlJlYWR5IiwiUHJvdmlkZXIiLCJfYW5pbWF0ZWREaXYiLCJkZXNjcmlwdGlvbiIsIlBhZ2VDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZm9ybS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcmVhZHkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFB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