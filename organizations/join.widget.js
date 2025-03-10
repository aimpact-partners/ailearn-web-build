System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.1.0/entities/organizations", "@aimpact/ailearn-app@0.3.20/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.20/i18n.ts", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.20/components/ui", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/code-verification", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app/start", "@aimpact/ailearn-app@0.3.20/components/navbar-header.code", "@aimpact/ailearn-app@0.3.20/config", "@beyond-js/react-18-widgets@1.1.3/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, TokenForm, Header, View, Ready, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk110EntitiesOrganizations) {
      dependency_5 = _aimpactAilearnSdk110EntitiesOrganizations;
    }, function (_aimpactAilearnApp0320MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0320MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk141Session) {
      dependency_8 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnApp0320I18nTs) {
      dependency_9 = _aimpactAilearnApp0320I18nTs;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp0320ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0320ComponentsUi;
    }, function (_pragmateUi100Beta7Image) {
      dependency_13 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Form) {
      dependency_14 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_15 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7CodeVerification) {
      dependency_16 = _pragmateUi100Beta7CodeVerification;
    }, function (_pragmateUi100Beta7Components) {
      dependency_17 = _pragmateUi100Beta7Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnAppStart) {
      dependency_19 = _aimpactAilearnAppStart;
    }, function (_aimpactAilearnApp0320ComponentsNavbarHeaderCode) {
      dependency_20 = _aimpactAilearnApp0320ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0320Config) {
      dependency_21 = _aimpactAilearnApp0320Config;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_22 = _beyondJsReact18Widgets113Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.20"], ["@aimpact/ailearn-app", "0.3.20"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.20/organizations/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/entities/organizations', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/image', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/toast', dependency_15], ['pragmate-ui/code-verification', dependency_16], ['pragmate-ui/components', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@aimpact/ailearn-app/routing', dependency_19], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_20], ['@aimpact/ailearn-app/config', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.3.20/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.20/organizations/join.widget');
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
        hash: 847183720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@aimpact/reactive/model");
          var _organizations = require("@aimpact/ailearn-sdk/entities/organizations");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
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
              this.#model = new _organizations.Organization({});
            }
            setBreadcrumb() {
              const onChange = this.setBreadcrumb.bind(this);
              if (!this.#texts.ready) {
                this.#texts.on('change', onChange);
                return;
              }
              this.#texts.off('change', onChange);
              _mainLayout.LayoutBroker.overlay = false;
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
        hash: 710326149,
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
          var _routing2 = require("@aimpact/ailearn-app/routing");
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
                const response = await store.model.provider.join({
                  code: token
                });
                if (response.data.status === 'PENDING') {
                  _toast.toast.success(texts.messages.pending);
                  setJoined(true);
                  return;
                }
                await store.loadUser();
                _toast.toast.success(texts.messages.success);
                _routing2.Router.cleanPreviousUrl();
                _routing.routing.pushState(`/organizations/view/${response.data.organization.id}`);
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
              error: error,
              variant: styleAlert
            }), React.createElement(_codeVerification.InputCode, {
              length: store.TOTAL_CODES,
              value: token,
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
        hash: 1157414029,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Ready = Ready;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("./context");
          var _animatedDiv = require("./animated-div");
          var _components = require("pragmate-ui/components");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          function Ready({}) {
            const {
              texts,
              store
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
              className: "ready-container"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfb3JnYW5pemF0aW9ucyIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIlRPVEFMX0NPREVTIiwiY29kZSIsInZhbHVlIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsInZhbGlkQ29kZSIsImxlbmd0aCIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsIk9yZ2FuaXphdGlvbiIsInNldEJyZWFkY3J1bWIiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwibG9hZFVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJyZWZyZXNoIiwiY29uc29sZSIsIndhcm4iLCJSZWFjdCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNoaWxkcmVuIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsIm1vdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwid2lkdGgiLCJ5IiwiZXhpdCIsIl9yZWFjdCIsIkpvaW5Db250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VKb2luQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaW1hZ2UiLCJfZm9ybSIsIl90b2FzdCIsIl9jb2RlVmVyaWZpY2F0aW9uIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9yb3V0aW5nIiwiX3JvdXRpbmcyIiwiVG9rZW5Gb3JtIiwic2V0Sm9pbmVkIiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInN0eWxlQWxlcnQiLCJzZXRTdHlsZUFsZXJ0IiwiaGFuZGxlQ2hhbmdlIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwicHJvdmlkZXIiLCJqb2luIiwiZGF0YSIsInN0YXR1cyIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwicGVuZGluZyIsIlJvdXRlciIsImNsZWFuUHJldmlvdXNVcmwiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwib3JnYW5pemF0aW9uIiwiaWQiLCJlIiwibWVzc2FnZSIsInN0eWxlIiwiaW5jbHVkZXMiLCJlcnJvcnMiLCJ0b1N0cmluZyIsIkVSUk9SX1BVQkxJU0hJTkciLCJGb3JtIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImZvcm0iLCJzdWJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiSW5wdXRDb2RlIiwidHlwZSIsIm9uQ29kZUZ1bGwiLCJyZXF1aXJlZCIsIkJ1dHRvbiIsImFjdGlvbiIsImluZm8iLCJoZWxwIiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJvcmdhbml6YXRpb25zIiwiX2hvb2tzIiwiX3JlYWR5Iiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJqb2luZWQiLCJDb250cm9sIiwiUmVhZHkiLCJQcm92aWRlciIsIl9hbmltYXRlZERpdiIsImRlc2NyaXB0aW9uIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm9uUmVmcmVzaCIsImNsYXNzcm9vbSIsIlBhZ2VDb250YWluZXIiLCJvbkNsaWNrIiwiYWN0aW9ucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWFkeS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUM7WUFDQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLEtBQUssRUFBRTtZQUNwQjs7VUFDQUMsT0FBQSxDQUFBZCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJELElBQUFlLE1BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsY0FBQSxH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