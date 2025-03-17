System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-sdk@1.1.0/entities/classrooms", "@aimpact/ailearn-app@0.3.26/i18n.ts", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.26/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/code-verification", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.26/components/navbar-header.code", "@aimpact/ailearn-app@0.3.26/config", "@beyond-js/react-18-widgets@1.1.3/hooks"], function (_export, _context2) {
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
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactReactive001Model) {
      dependency_4 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk141Session) {
      dependency_6 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnSdk110EntitiesClassrooms) {
      dependency_7 = _aimpactAilearnSdk110EntitiesClassrooms;
    }, function (_aimpactAilearnApp0326I18nTs) {
      dependency_8 = _aimpactAilearnApp0326I18nTs;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_framerMotion2) {
      dependency_10 = _framerMotion2;
    }, function (_aimpactAilearnApp0326ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0326ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7CodeVerification) {
      dependency_13 = _pragmateUi100Beta7CodeVerification;
    }, function (_pragmateUi100Beta7Components) {
      dependency_14 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_15 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Image) {
      dependency_16 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_17 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp0326ComponentsNavbarHeaderCode) {
      dependency_18 = _aimpactAilearnApp0326ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0326Config) {
      dependency_19 = _aimpactAilearnApp0326Config;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_20 = _beyondJsReact18Widgets113Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.26"], ["@aimpact/ailearn-app", "0.3.26"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.26/classrooms/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_7], ['@aimpact/ailearn-app/i18n.ts', dependency_8], ['react', dependency_9], ['framer-motion', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['pragmate-ui/code-verification', dependency_13], ['pragmate-ui/components', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/image', dependency_16], ['pragmate-ui/toast', dependency_17], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.3.26/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.26/classrooms/join.widget');
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
        hash: 2605764136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@aimpact/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
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
            set code(value) {
              this.#code = value;
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            get validCode() {
              return this.#code && this.#code.length === this.TOTAL_CODES;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && _i18n.globalTexts.ready;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#model = new _classrooms.Classroom({});
            }
            load(code) {
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
            async refresh() {
              if (!this.#code) {
                console.warn('No classroom code');
                return;
              }
              await this.#model.load({
                code: this.#code
              });
              return this.#model;
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

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 912375296,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TokenForm = TokenForm;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _codeVerification = require("pragmate-ui/code-verification");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _image = require("pragmate-ui/image");
          var _toast = require("pragmate-ui/toast");
          var React = require("react");
          var _context = require("./context");
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
                store.code = token;
                const response = await store.model.join({
                  code: token
                });
                if (response.data.status === 'PENDING') {
                  _toast.toast.success(texts.messages.pending);
                  setJoined(true);
                  return;
                }
                await store.loadUser();
                console.log(1, texts.messages);
                _toast.toast.success(texts.messages.success);
                _routing.routing.pushState(`/classrooms/view/${response.data.classroom.id}`);
              } catch (e) {
                if (e.message === 'ALREADY_WAITING') {
                  setJoined(true);
                  return;
                }
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
              className: "token-info__container flex-container flex-column text-center"
            }, React.createElement("p", null, texts.info.help)));
          }
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
        hash: 1709436477,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          var _ready = require("./ready");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const [joined, setJoined] = React.useState(false);
            if (!ready) return React.createElement(_ui.PageLoader, {
              fetching: true
            });
            // const Control = joined ? Ready : TokenForm;
            const value = {
              texts: store.texts,
              joined,
              setJoined,
              store
            };
            return React.createElement(_context.JoinContext.Provider, {
              value: value
            }, React.createElement(_components.ConditionalContainer, {
              condition: joined,
              ternary: true,
              options: {
                true: React.createElement(_ready.Ready, null),
                false: React.createElement(_form.TokenForm, null)
              }
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/ready
      *****************************/

      ims.set('./views/ready', {
        hash: 2893031494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Ready = Ready;
          var React = require("react");
          var _session = require("@aimpact/chat-sdk/session");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("./context");
          var _animatedDiv = require("./animated-div");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function Ready({}) {
            const {
              store,
              texts
            } = (0, _context.useJoinContext)();
            const {
              title,
              description
            } = texts.ready;
            const [fetching, setFetching] = React.useState(false);
            const [error, setError] = React.useState('');
            const onRefresh = async () => {
              try {
                setFetching(true);
                const classroom = await store.refresh();
                await _session.sessionWrapper.user.load();
                _routing.routing.pushState(`/classrooms/view/${classroom.code}`);
              } catch (e) {
                if (e.code === 105 || e.code === 247) {
                  setError(texts.errors['ALREADY_WAITING']);
                  return;
                }
              } finally {
                setFetching(false);
              }
            };
            const cls = `ready-container ${fetching ? ' is-fetching' : ''}`;
            return React.createElement(_ui.PageContainer, {
              className: cls
            }, React.createElement(_animatedDiv.AnimatedDiv, null, React.createElement("h3", null, title), React.createElement("span", null, description), React.createElement(_ui.ErrorRenderer, {
              error: error,
              variant: "warning"
            }), React.createElement("div", {
              className: "actions__container"
            }, React.createElement(_components.Button, {
              disabled: fetching,
              onClick: onRefresh,
              variant: "primary",
              className: "btn-middle"
            }, store.globalTexts.actions.refresh))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfc2Vzc2lvbiIsIl9jbGFzc3Jvb21zIiwiX2kxOG4iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJUT1RBTF9DT0RFUyIsImNvZGUiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJ2YWxpZENvZGUiLCJsZW5ndGgiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJDbGFzc3Jvb20iLCJsb2FkVXNlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInJlZnJlc2giLCJjb25zb2xlIiwid2FybiIsIlJlYWN0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ3aWR0aCIsInkiLCJleGl0IiwiX3JlYWN0IiwiSm9pbkNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUpvaW5Db250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9yb3V0aW5nIiwiX2NvZGVWZXJpZmljYXRpb24iLCJfY29tcG9uZW50cyIsIl9mb3JtIiwiX2ltYWdlIiwiX3RvYXN0IiwiX2NvbnRleHQiLCJUb2tlbkZvcm0iLCJzZXRKb2luZWQiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwic3R5bGVBbGVydCIsInNldFN0eWxlQWxlcnQiLCJoYW5kbGVDaGFuZ2UiLCJkaXNhYmxlZCIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJqb2luIiwiZGF0YSIsInN0YXR1cyIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwicGVuZGluZyIsImxvZyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjbGFzc3Jvb20iLCJpZCIsImUiLCJtZXNzYWdlIiwic3R5bGUiLCJpbmNsdWRlcyIsImVycm9ycyIsInRvU3RyaW5nIiwiRVJST1JfUFVCTElTSElORyIsIkZvcm0iLCJJbWFnZSIsInNyYyIsImFsdCIsInRpdGxlIiwiZm9ybSIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsIklucHV0Q29kZSIsIm5hbWUiLCJ0eXBlIiwib25Db2RlRnVsbCIsInJlcXVpcmVkIiwiQnV0dG9uIiwidmFyaWFudCIsImFjdGlvbiIsImluZm8iLCJoZWxwIiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJjbGFzc3Jvb21zIiwiX2hvb2tzIiwiX3JlYWR5Iiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJqb2luZWQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJ0cnVlIiwiUmVhZHkiLCJmYWxzZSIsIl9hbmltYXRlZERpdiIsImRlc2NyaXB0aW9uIiwic2V0RmV0Y2hpbmciLCJvblJlZnJlc2giLCJQYWdlQ29udGFpbmVyIiwib25DbGljayIsImFjdGlvbnMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZm9ybS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcmVhZHkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUM7WUFDQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLEtBQUssRUFBRTtZQUNwQjs7VUFDQUMsT0FBQSxDQUFBZCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJELElBQUFlLE1BQUEsR0FBQWxCLE9BQUE7VUFFQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixlQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLFFBQUEsR0FBQXJCLE9BQUE7VUFD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RyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSEQsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTWpELFNBQVMsR0FBRyxNQUFNakcsS0FBSyxDQUFDdUMsT0FBTyxFQUFFO2dCQUN2QyxNQUFNdkIsUUFBQSxDQUFBcUIsY0FBYyxDQUFDQyxJQUFJLENBQUNoQyxJQUFJLEVBQUU7Z0JBQ2hDNkQsUUFBQSxDQUFBNEIsT0FBTyxDQUFDQyxTQUFTLENBQUMsb0JBQW9CQyxTQUFTLENBQUMzRSxJQUFJLEVBQUUsQ0FBQztlQUN2RCxDQUFDLE9BQU82RSxDQUFDLEVBQUU7Z0JBQ1gsSUFBSUEsQ0FBQyxDQUFDN0UsSUFBSSxLQUFLLEdBQUcsSUFBSTZFLENBQUMsQ0FBQzdFLElBQUksS0FBSyxHQUFHLEVBQUU7a0JBQ3JDMEQsUUFBUSxDQUFDdkQsS0FBSyxDQUFDOEUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7a0JBQ3pDOztlQUVELFNBQVM7Z0JBQ1QyQyxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsTUFBTXBHLEdBQUcsR0FBRyxtQkFBbUJ5RixRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUUvRCxPQUNDN0YsS0FBQSxDQUFBSyxhQUFBLENBQUNtQixHQUFBLENBQUFrRixhQUFhO2NBQUNsRyxTQUFTLEVBQUVKO1lBQUcsR0FDNUJKLEtBQUEsQ0FBQUssYUFBQSxDQUFDaUcsWUFBQSxDQUFBcEcsV0FBVyxRQUNYRixLQUFBLENBQUFLLGFBQUEsYUFBSytELEtBQUssQ0FBTSxFQUNoQnBFLEtBQUEsQ0FBQUssYUFBQSxlQUFPa0csV0FBVyxDQUFRLEVBQzFCdkcsS0FBQSxDQUFBSyxhQUFBLENBQUNtQixHQUFBLENBQUErQyxhQUFhO2NBQUNsQyxLQUFLLEVBQUVBLEtBQUs7Y0FBRXlDLE9BQU8sRUFBQztZQUFTLEVBQUcsRUFDakQ5RSxLQUFBLENBQUFLLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQW9CLEdBQ2xDUixLQUFBLENBQUFLLGFBQUEsQ0FBQ3NCLFdBQUEsQ0FBQWtELE1BQU07Y0FBQ25DLFFBQVEsRUFBRW1ELFFBQVE7Y0FBRWMsT0FBTyxFQUFFRixTQUFTO2NBQUUzQixPQUFPLEVBQUMsU0FBUztjQUFDdEUsU0FBUyxFQUFDO1lBQVksR0FDdEZsRCxLQUFLLENBQUN3QixXQUFXLENBQUM4SCxPQUFPLENBQUMvRyxPQUFPLENBQzFCLENBQ0osQ0FDTyxDQUNDO1VBRWxCIiwiaWdub3JlTGlzdCI6W119