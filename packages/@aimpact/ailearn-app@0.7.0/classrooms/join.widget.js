System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@beyond-js/reactive@2.1.2/model", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@beyond-js/kernel@0.1.14/texts", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "@aimpact/ailearn-app@0.7.0/i18n.ts", "react@18.3.1", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.7.0/components/ui", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/toast", "@aimpact/ailearn-app@0.7.0/components/navbar-header.code", "@aimpact/ailearn-app@0.7.0/config", "@beyond-js/react-18-widgets@1.1.8/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, TokenForm, Header, View, Member, Ready, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_beyondJsReactive212Model) {
      dependency_4 = _beyondJsReactive212Model;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_beyondJsKernel0114Texts) {
      dependency_6 = _beyondJsKernel0114Texts;
    }, function (_aimpactChatSdk155Session) {
      dependency_7 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_8 = _aimpactAilearnSdk120EntitiesClassrooms;
    }, function (_aimpactAilearnApp070I18nTs) {
      dependency_9 = _aimpactAilearnApp070I18nTs;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_12 = _aimpactAilearnApp070ComponentsUi;
    }, function (_beyondJsKernel0114Routing) {
      dependency_13 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Components) {
      dependency_14 = _pragmateUi108Components;
    }, function (_pragmateUi108Form) {
      dependency_15 = _pragmateUi108Form;
    }, function (_pragmateUi108Toast) {
      dependency_16 = _pragmateUi108Toast;
    }, function (_aimpactAilearnApp070ComponentsNavbarHeaderCode) {
      dependency_17 = _aimpactAilearnApp070ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp070Config) {
      dependency_18 = _aimpactAilearnApp070Config;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_19 = _beyondJsReact18Widgets118Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/classrooms/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/components', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/toast', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/classrooms/join.widget');
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
        hash: 2229133108,
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
              this.#texts.on('change', this.validate);
              this.#model = new _classrooms.Classroom({});
            }
            validate = () => {
              if (!this.ready) return;
              _mainLayout.LayoutBroker.set({
                overlay: true,
                breadcrumb: [[this.globalTexts.entities.classrooms, '/classrooms/list'], [this.texts.title]]
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
        hash: 3981595846,
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
              store.code = token;
              try {
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
                _routing.routing.pushState(`/classrooms/view/${response.data.classroom.id}`);
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
        hash: 606348255,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 4023145744,
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
              _routing.routing.pushState(`/classrooms/view/${store.code}`);
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
        hash: 101019236,
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
                _routing.routing.pushState(`/classrooms/view/${store.code}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX2NsYXNzcm9vbXMiLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIlRPVEFMX0NPREVTIiwiY29kZSIsInZhbHVlIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsInZhbGlkQ29kZSIsImxlbmd0aCIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInZhbGlkYXRlIiwiQ2xhc3Nyb29tIiwiTGF5b3V0QnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJ0aXRsZSIsImxvYWRVc2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwicmVmcmVzaCIsImNvbnNvbGUiLCJ3YXJuIiwiUmVhY3QiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJtb3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsIndpZHRoIiwieSIsImV4aXQiLCJfcmVhY3QiLCJKb2luQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlSm9pbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX3JvdXRpbmciLCJfY29tcG9uZW50cyIsIl9mb3JtIiwiX3RvYXN0IiwiX2FuaW1hdGVkRGl2IiwiX2NvbnRleHQiLCJUb2tlbkZvcm0iLCJzZXRWaWV3IiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInN0eWxlQWxlcnQiLCJzZXRTdHlsZUFsZXJ0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwiam9pbiIsImRhdGEiLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsInBlbmRpbmciLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xhc3Nyb29tIiwiaWQiLCJlIiwibWVzc2FnZSIsInN0eWxlIiwiaW5jbHVkZXMiLCJlcnJvcnMiLCJ0b1N0cmluZyIsIkVSUk9SX1BVQkxJU0hJTkciLCJGb3JtIiwiZm9ybSIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsInZhcmlhbnQiLCJWZXJpZmljYXRpb25Db2RlSW5wdXQiLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInR5cGUiLCJhY3Rpb24iLCJpbmZvIiwiaGVscCIsIl9uYXZiYXJIZWFkZXIiLCJIZWFkZXIiLCJOYXZiYXJIZWFkZXIiLCJfcmVhZHkiLCJfbWVtYmVyIiwiX2hvb2tzIiwidXNlU3RvcmUiLCJ2aWV3IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiUHJvdmlkZXIiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwiUmVhZHkiLCJtZW1iZXIiLCJNZW1iZXIiLCJvbkNsaWNrIiwiUGFnZUNvbnRhaW5lciIsImRlc2NyaXB0aW9uIiwic2V0RmV0Y2hpbmciLCJvblJlZnJlc2giLCJhY3Rpb25zIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21lbWJlci50c3giLCIvdHMvdmlld3MvcmVhZHkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDO1lBQ0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRCxJQUFBZSxNQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLFdBQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFB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