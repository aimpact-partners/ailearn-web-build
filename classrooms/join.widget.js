System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/image", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/code-verification", "pragmate-ui@0.1.1/components", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.1/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    View: void 0
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
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_7 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_8 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Image) {
      dependency_9 = _pragmateUi011Image;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Form) {
      dependency_13 = _pragmateUi011Form;
    }, function (_pragmateUi011Toast) {
      dependency_14 = _pragmateUi011Toast;
    }, function (_pragmateUi011CodeVerification) {
      dependency_15 = _pragmateUi011CodeVerification;
    }, function (_pragmateUi011Components) {
      dependency_16 = _pragmateUi011Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_18 = _beyondJsReact18Widgets111Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/classrooms/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/code-verification', dependency_15], ['pragmate-ui/components', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/classrooms/join.widget');
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
        hash: 1876651355,
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
            constructor() {
              super();
              this.#model = new _core.Classroom({});
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

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 718551146,
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
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.classrooms, '/classrooms/list'], [texts.breadcrumb.join, '']]
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 827743800,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _header = require("./header");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _codeVerification = require("pragmate-ui/code-verification");
          var _components2 = require("pragmate-ui/components");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [token, setToken] = React.useState(store.code ?? '');
            const [error, setError] = React.useState('');
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks2.useBinder)([store], () => setReady(store.ready));
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const handleChange = code => {
              setToken(code);
              setError('');
            };
            if (!textsReady || !ready) return React.createElement(_components.PreloadScreen, null);
            const disabled = token.length !== 7;
            const onSubmit = async () => {
              try {
                const response = await store.model.join({
                  code: token
                });
                if (!response.status) {
                  setError(texts.errors.INVALID_CODE);
                  return;
                }
                if (response.data.status === 'PENDING') {
                  _routing.routing.pushState('/classrooms/list');
                  _toast.toast.success(texts.messages.pending);
                  return;
                }
                if (['ALREADY', 'AUTHORIZED'].includes(response.data.status)) {
                  _routing.routing.pushState(`/classrooms/view/${response.data.classroom.id}`);
                  _toast.toast.success(texts.messages.authorized);
                  return;
                }
                //this.model.join({ code: token });
              } catch (e) {
                setError(texts.errors.INVALID_CODE);
                _toast.toast.error(texts.errors.INVALID_CODE);
              }
            };
            return React.createElement(_context.JoinContext.Provider, {
              value: {
                texts,
                store
              }
            }, React.createElement(_header.Header, {
              token: token
            }), React.createElement("div", {
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
              upper: true,
              length: store.TOTAL_CODES,
              value: token,
              name: "name",
              type: "text",
              onCodeFull: handleChange,
              required: true
            }), React.createElement(_components2.Button, {
              block: true,
              disabled: disabled,
              variant: "primary",
              type: "submit"
            }, texts.action.join)), React.createElement("div", {
              className: "token-info__container flex-container flex-column"
            }, React.createElement("p", {
              className: "text-center"
            }, texts.info.help))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header').Header : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIlRPVEFMX0NPREVTIiwiY29kZSIsInZhbGlkQ29kZSIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwiQ2xhc3Nyb29tIiwicmVhZHkiLCJfcmVhY3QiLCJKb2luQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlSm9pbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfbmF2YmFySGVhZGVyIiwiX2NvbnRleHQiLCJfY29uZmlnIiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwiY2xhc3Nyb29tcyIsImpvaW4iLCJfaW1hZ2UiLCJfdWkiLCJfaGVhZGVyIiwiX2NvbXBvbmVudHMiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfZm9ybSIsIl90b2FzdCIsIl9jb2RlVmVyaWZpY2F0aW9uIiwiX2NvbXBvbmVudHMyIiwiX3JvdXRpbmciLCJfaG9va3MyIiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldFJlYWR5IiwidXNlQmluZGVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiaGFuZGxlQ2hhbmdlIiwiUHJlbG9hZFNjcmVlbiIsImRpc2FibGVkIiwib25TdWJtaXQiLCJyZXNwb25zZSIsInN0YXR1cyIsImVycm9ycyIsIklOVkFMSURfQ09ERSIsImRhdGEiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJwZW5kaW5nIiwiaW5jbHVkZXMiLCJjbGFzc3Jvb20iLCJpZCIsImF1dGhvcml6ZWQiLCJlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsIkZvcm0iLCJJbWFnZSIsInNyYyIsImFsdCIsInRpdGxlIiwiZm9ybSIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsIklucHV0Q29kZSIsInVwcGVyIiwibmFtZSIsInR5cGUiLCJvbkNvZGVGdWxsIiwicmVxdWlyZWQiLCJCdXR0b24iLCJibG9jayIsInZhcmlhbnQiLCJhY3Rpb24iLCJpbmZvIiwiaGVscCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJ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