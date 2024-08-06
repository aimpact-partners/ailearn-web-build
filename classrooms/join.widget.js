System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.1.1/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.1/components/ui", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/code-verification", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/form", "pragmate-ui@1.0.0-beta.1/image", "pragmate-ui@1.0.0-beta.1/toast", "@aimpact/ailearn-app@0.1.1/components/navbar-header.code", "@aimpact/ailearn-app@0.1.1/config", "@aimpact/chat@1.0.2/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp011MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp011MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_framerMotion2) {
      dependency_9 = _framerMotion2;
    }, function (_aimpactAilearnApp011ComponentsUi) {
      dependency_10 = _aimpactAilearnApp011ComponentsUi;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta1CodeVerification) {
      dependency_12 = _pragmateUi100Beta1CodeVerification;
    }, function (_pragmateUi100Beta1Components) {
      dependency_13 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Form) {
      dependency_14 = _pragmateUi100Beta1Form;
    }, function (_pragmateUi100Beta1Image) {
      dependency_15 = _pragmateUi100Beta1Image;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_16 = _pragmateUi100Beta1Toast;
    }, function (_aimpactAilearnApp011ComponentsNavbarHeaderCode) {
      dependency_17 = _aimpactAilearnApp011ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp011Config) {
      dependency_18 = _aimpactAilearnApp011Config;
    }, function (_aimpactChat102SharedComponents) {
      dependency_19 = _aimpactChat102SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_20 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.1"], ["@aimpact/ailearn-app", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.1/classrooms/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['framer-motion', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/code-verification', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/image', dependency_15], ['pragmate-ui/toast', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.1.1/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.1/classrooms/join.widget');
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
        hash: 2606608609,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
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
              this.#model = new _core.Classroom({});
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
        hash: 3279233729,
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
                const response = await store.model.join({
                  code: token
                });
                if (response.data.status === 'PENDING') {
                  _toast.toast.success(texts.messages.pending);
                  setJoined(true);
                  return;
                }
                _toast.toast.success(texts.messages.success);
                _routing.routing.pushState(`/classrooms/view/${response.data.classroom.id}`);
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
        hash: 3131275827,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
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
            if (!ready) return React.createElement(_components.PreloadScreen, null);
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
        hash: 661222086,
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
            return React.createElement(_ui.PageContainer, {
              className: "ready-container"
            }, React.createElement(_animatedDiv.AnimatedDiv, null, React.createElement("h3", null, title), React.createElement("span", null, description)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIlRPVEFMX0NPREVTIiwiY29kZSIsInZhbGlkQ29kZSIsImxlbmd0aCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJDbGFzc3Jvb20iLCJSZWFjdCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNoaWxkcmVuIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsIm1vdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwid2lkdGgiLCJ5IiwiZXhpdCIsIl9yZWFjdCIsIkpvaW5Db250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VKb2luQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfcm91dGluZyIsIl9jb2RlVmVyaWZpY2F0aW9uIiwiX2NvbXBvbmVudHMiLCJfZm9ybSIsIl9pbWFnZSIsIl90b2FzdCIsIl9jb250ZXh0IiwiVG9rZW5Gb3JtIiwic2V0Sm9pbmVkIiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInN0eWxlQWxlcnQiLCJzZXRTdHlsZUFsZXJ0IiwiaGFuZGxlQ2hhbmdlIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwiam9pbiIsImRhdGEiLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsInBlbmRpbmciLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xhc3Nyb29tIiwiaWQiLCJlIiwiY29uc29sZSIsInN0eWxlIiwiaW5jbHVkZXMiLCJtZXNzYWdlIiwiZXJyb3JzIiwidG9TdHJpbmciLCJFUlJPUl9QVUJMSVNISU5HIiwiRm9ybSIsIkltYWdlIiwic3JjIiwiYWx0IiwidGl0bGUiLCJmb3JtIiwic3VidGl0bGUiLCJFcnJvclJlbmRlcmVyIiwiSW5wdXRDb2RlIiwibmFtZSIsInR5cGUiLCJvbkNvZGVGdWxsIiwicmVxdWlyZWQiLCJCdXR0b24iLCJ2YXJpYW50IiwiYWN0aW9uIiwiaW5mbyIsImhlbHAiLCJfbmF2YmFySGVhZGVyIiwiSGVhZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsImNsYXNzcm9vbXMiLCJfaG9va3MiLCJfcmVhZHkiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsImpvaW5lZCIsIlByZWxvYWRTY3JlZW4iLCJDb250cm9sIiwiUmVhZHkiLCJQcm92aWRlciIsIl9hbmltYXRlZERpdiIsImRlc2NyaXB0aW9uIiwiUGFnZUNvbnRhaW5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWFkeS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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