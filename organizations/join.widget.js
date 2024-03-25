System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.31/components/ui", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/code-verification", "pragmate-ui@0.0.6/components", "@beyond-js/react-18-widgets@1.1.1/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.31/config", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, TokenForm, Header, View, Ready, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_aimpactAilearnApp0031ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0031ComponentsUi;
    }, function (_pragmateUi006Form) {
      dependency_9 = _pragmateUi006Form;
    }, function (_pragmateUi006Toast) {
      dependency_10 = _pragmateUi006Toast;
    }, function (_pragmateUi006CodeVerification) {
      dependency_11 = _pragmateUi006CodeVerification;
    }, function (_pragmateUi006Components) {
      dependency_12 = _pragmateUi006Components;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_13 = _beyondJsReact18Widgets111Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0031Config) {
      dependency_15 = _aimpactAilearnApp0031Config;
    }, function (_aimpactChat101SharedHooks) {
      dependency_16 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.31"], ["@aimpact/ailearn-app", "0.0.31"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.31/organizations/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['framer-motion', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/code-verification', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.31/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.31/organizations/join.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3868668533,
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
              this.#store.load();
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
        hash: 1062720083,
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
            constructor() {
              super();
              this.#model = new _core.Organization({});
            }
            load() {
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
        hash: 2091617601,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TokenForm = TokenForm;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            const [token, setToken] = React.useState('');
            const [error, setError] = React.useState('');
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
                console.log(2, response);
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
            return React.createElement(_ui.PageContainer, {
              className: "token-page__container"
            }, React.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: "token-form__container"
            }, React.createElement("h3", null, texts.form.title), React.createElement("span", {
              className: "p2"
            }, texts.form.subtitle), React.createElement(_ui.ErrorRenderer, {
              error: error
            }), React.createElement(_codeVerification.InputCode, {
              length: 7,
              value: token,
              name: "name",
              type: "text",
              onCodeFull: handleChange,
              required: true
            }), React.createElement(_components.Button, {
              block: true,
              disabled: disabled,
              variant: "primary",
              type: "submit"
            }, texts.action.join)), React.createElement("div", {
              className: "token-info__container flex-container flex-column"
            }, React.createElement("h4", null, texts.info.title), React.createElement("ul", null, React.createElement("li", null, texts.info.rules.first), React.createElement("li", null, texts.info.rules.second)), React.createElement("span", null, texts.info.help)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 852754397,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useJoinContext)();
            return React.createElement("section", null, React.createElement(_ui.NavbarHeader, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJjb25zdHJ1Y3RvciIsIk9yZ2FuaXphdGlvbiIsInJlYWR5IiwiUmVhY3QiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJtb3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX3JlYWN0IiwiSm9pbkNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUpvaW5Db250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9mb3JtIiwiX3RvYXN0IiwiX2NvZGVWZXJpZmljYXRpb24iLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3JvdXRpbmciLCJUb2tlbkZvcm0iLCJ0ZXh0cyIsInNldEpvaW5lZCIsInRva2VuIiwic2V0VG9rZW4iLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJjb2RlIiwiZGlzYWJsZWQiLCJsZW5ndGgiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwiam9pbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3RhdHVzIiwidG9hc3QiLCJzdWNjZXNzIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm9yZ2FuaXphdGlvbiIsImlkIiwiZSIsImVycm9ycyIsIm1lc3NhZ2UiLCJQYWdlQ29udGFpbmVyIiwiRm9ybSIsImZvcm0iLCJ0aXRsZSIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsIklucHV0Q29kZSIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJvbkNvZGVGdWxsIiwicmVxdWlyZWQiLCJCdXR0b24iLCJibG9jayIsInZhcmlhbnQiLCJhY3Rpb24iLCJpbmZvIiwicnVsZXMiLCJmaXJzdCIsInNlY29uZCIsImhlbHAiLCJfY29uZmlnIiwiSGVhZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwib3JnYW5pemF0aW9ucyIsIl9oZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaG9va3MyIiwiX3JlYWR5Iiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJqb2luZWQiLCJDb250cm9sIiwiUmVhZHkiLCJQcm92aWRlciIsIl9hbmltYXRlZERpdiIsImRlc2NyaXB0aW9uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlYWR5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUss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