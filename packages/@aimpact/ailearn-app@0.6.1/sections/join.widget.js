System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@beyond-js/kernel@0.1.12/texts", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-sdk@1.2.0/entities/sections", "@aimpact/ailearn-app@0.6.1/i18n.ts", "react@18.3.1", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.6.1/components/ui", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/toast", "@aimpact/ailearn-app@0.6.1/components/navbar-header.code", "@aimpact/ailearn-app@0.6.1/config", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.6.1/shared/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, TokenForm, Header, View, Member, Ready, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    TokenForm: void 0,
    Header: void 0,
    View: void 0,
    Member: void 0,
    Ready: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_beyondJsReactive211Model) {
      dependency_4 = _beyondJsReactive211Model;
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp061MainLayoutWidget;
    }, function (_beyondJsKernel0112Texts) {
      dependency_6 = _beyondJsKernel0112Texts;
    }, function (_aimpactChatSdk155Session) {
      dependency_7 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnSdk120EntitiesSections) {
      dependency_8 = _aimpactAilearnSdk120EntitiesSections;
    }, function (_aimpactAilearnApp061I18nTs) {
      dependency_9 = _aimpactAilearnApp061I18nTs;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_12 = _aimpactAilearnApp061ComponentsUi;
    }, function (_beyondJsKernel0112Routing) {
      dependency_13 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi108Components) {
      dependency_14 = _pragmateUi108Components;
    }, function (_pragmateUi108Form) {
      dependency_15 = _pragmateUi108Form;
    }, function (_pragmateUi108Toast) {
      dependency_16 = _pragmateUi108Toast;
    }, function (_aimpactAilearnApp061ComponentsNavbarHeaderCode) {
      dependency_17 = _aimpactAilearnApp061ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp061Config) {
      dependency_18 = _aimpactAilearnApp061Config;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_19 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp061SharedHooks) {
      dependency_20 = _aimpactAilearnApp061SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.13.16"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/sections/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/ailearn-sdk/entities/sections', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/components', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/toast', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/ailearn-app/shared/hooks', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-sections-join",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/sections/join.widget",
        "is": "page",
        "route": "/kb/sections/join",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/sections/join.widget');
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
        hash: 1812511407,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          var _sections = require("@aimpact/ailearn-sdk/entities/sections");
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
              this.#texts.on('change', this.validate);
              this.#model = new _sections.Section({});
            }
            validate = () => {
              if (!this.ready) return;
              _mainLayout.LayoutBroker.set({
                overlay: true,
                breadcrumb: [[this.globalTexts.entities.kbSections, '/kb/sections/list'], [this.texts.title]]
              });
            };
            load(code) {
              if (code) {
                this.#code = code;
              }
              super.ready = true;
              this.validate();
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
        hash: 540270041,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TokenForm = TokenForm;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var React = require("react");
          var _animatedDiv = require("./animated-div");
          var _context = require("./context");
          /*bundle*/
          function TokenForm() {
            const {
              texts,
              store,
              setView
            } = (0, _context.useJoinContext)();
            const [token, setToken] = React.useState(store.code ?? '');
            const [error, setError] = React.useState('');
            const [styleAlert, setStyleAlert] = React.useState('error');
            const handleChange = event => {
              setToken(event.currentTarget.value);
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
                  setView('ready');
                  return;
                }
                await store.loadUser();
                _toast.toast.success(texts.messages.success);
                _routing.routing.pushState(`/kb/sections/view/${response.data.classroom.id}`);
              } catch (e) {
                if (e.message === 'ALREADY_WAITING') {
                  setView('ready');
                  return;
                }
                if (e.message === 'ALREADY_MEMBER') {
                  setView('member');
                  return;
                }
                const style = ['ALREADY_WAITING'].includes(e?.message) ? 'warning' : 'danger';
                setStyleAlert(style);
                setError(texts.errors[e?.message?.toString()] ?? texts.errors.ERROR_PUBLISHING);
              }
            };
            return React.createElement(_animatedDiv.AnimatedDiv, {
              cls: "token-page__container"
            }, React.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: "token-form__container"
            }, React.createElement("header", null, React.createElement("h1", {
              className: "animate glow delay-2"
            }, texts.title), React.createElement("span", {
              className: "p1"
            }, texts.form.subtitle)), React.createElement(_ui.ErrorRenderer, {
              error: error,
              variant: "error"
            }), React.createElement(_ui.VerificationCodeInput, {
              length: store.TOTAL_CODES,
              value: token,
              onChange: handleChange
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
        hash: 558505639,
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
              breadcrumb: [[texts.breadcrumb.kbSections, '/kb/sections/list'], [texts.breadcrumb.join, '']]
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3180803445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _form = require("./form");
          var _ready = require("./ready");
          var _member = require("./member");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const {
              ready
            } = store;
            (0, _hooks.useStore)(store);
            const [view, setView] = React.useState('form');
            if (!ready) return React.createElement(_ui.PageLoader, {
              fetching: true
            });
            // const Control = joined ? Ready : TokenForm;
            const value = {
              texts: store.texts,
              view,
              setView,
              store
            };
            return React.createElement(_context.JoinContext.Provider, {
              value: value
            }, React.createElement(_components.ConditionalContainer, {
              condition: view,
              ternary: true,
              options: {
                ready: React.createElement(_ready.Ready, null),
                member: React.createElement(_member.Member, null),
                form: React.createElement(_form.TokenForm, null)
              }
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/member
      ******************************/

      ims.set('./views/member', {
        hash: 680122481,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Member = Member;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("./context");
          var _animatedDiv = require("./animated-div");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function Member({}) {
            const {
              store,
              texts
            } = (0, _context.useJoinContext)();
            const {
              title,
              action
            } = texts.member;
            const onClick = async () => {
              _routing.routing.pushState(`/kb/sections/view/${store.code}`);
            };
            const cls = `ready-container `;
            return React.createElement(_ui.PageContainer, {
              className: cls
            }, React.createElement(_animatedDiv.AnimatedDiv, null, React.createElement("h3", null, title), React.createElement("div", {
              className: "actions__container"
            }, React.createElement(_components.Button, {
              onClick: onClick,
              variant: "primary",
              className: "btn-middle"
            }, action))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/ready
      *****************************/

      ims.set('./views/ready', {
        hash: 1783321271,
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
                await store.refresh();
                await _session.sessionWrapper.user.load();
                _routing.routing.pushState(`/kb/sections/view/${store.code}`);
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
        "im": "./views/member",
        "from": "Member",
        "name": "Member"
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
        (require || prop === 'Member') && _export("Member", Member = require ? require('./views/member').Member : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX3NlY3Rpb25zIiwiX2kxOG4iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJUT1RBTF9DT0RFUyIsImNvZGUiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJ2YWxpZENvZGUiLCJsZW5ndGgiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ2YWxpZGF0ZSIsIlNlY3Rpb24iLCJMYXlvdXRCcm9rZXIiLCJzZXQiLCJvdmVybGF5IiwiYnJlYWRjcnVtYiIsImVudGl0aWVzIiwia2JTZWN0aW9ucyIsInRpdGxlIiwibG9hZFVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJyZWZyZXNoIiwiY29uc29sZSIsIndhcm4iLCJSZWFjdCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNoaWxkcmVuIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsIm1vdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwid2lkdGgiLCJ5IiwiZXhpdCIsIl9yZWFjdCIsIkpvaW5Db250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VKb2luQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfcm91dGluZyIsIl9jb21wb25lbnRzIiwiX2Zvcm0iLCJfdG9hc3QiLCJfYW5pbWF0ZWREaXYiLCJfY29udGV4dCIsIlRva2VuRm9ybSIsInNldFZpZXciLCJ0b2tlbiIsInNldFRva2VuIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwic3R5bGVBbGVydCIsInNldFN0eWxlQWxlcnQiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkaXNhYmxlZCIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJqb2luIiwiZGF0YSIsInN0YXR1cyIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwicGVuZGluZyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjbGFzc3Jvb20iLCJpZCIsImUiLCJtZXNzYWdlIiwic3R5bGUiLCJpbmNsdWRlcyIsImVycm9ycyIsInRvU3RyaW5nIiwiRVJST1JfUFVCTElTSElORyIsIkZvcm0iLCJmb3JtIiwic3VidGl0bGUiLCJFcnJvclJlbmRlcmVyIiwidmFyaWFudCIsIlZlcmlmaWNhdGlvbkNvZGVJbnB1dCIsIm9uQ2hhbmdlIiwiQnV0dG9uIiwidHlwZSIsImFjdGlvbiIsImluZm8iLCJoZWxwIiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsIl9yZWFkeSIsIl9tZW1iZXIiLCJfaG9va3MiLCJ1c2VTdG9yZSIsInZpZXciLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJSZWFkeSIsIm1lbWJlciIsIk1lbWJlciIsIm9uQ2xpY2siLCJQYWdlQ29udGFpbmVyIiwiZGVzY3JpcHRpb24iLCJzZXRGZXRjaGluZyIsIm9uUmVmcmVzaCIsImFjdGlvbnMiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9hbmltYXRlZC1kaXYudHN4IiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9mb3JtLnRzeCIsIi8vdHMvdmlld3MvaGVhZGVyLnRzeCIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy90cy92aWV3cy9tZW1iZXIudHN4IiwiLy90cy92aWV3cy9yZWFkeS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQztZQUNBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkQsSUFBQWUsTUFBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixXQUFBLEdBQUFuQixPQUFBO1VB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