System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.29/components/ui", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.29/config", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/code-verification", "@beyond-js/react-18-widgets@1.1.1/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp0029ComponentsUi) {
      dependency_7 = _aimpactAilearnApp0029ComponentsUi;
    }, function (_pragmateUi006Components) {
      dependency_8 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0029Config) {
      dependency_9 = _aimpactAilearnApp0029Config;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Form) {
      dependency_12 = _pragmateUi006Form;
    }, function (_pragmateUi006Toast) {
      dependency_13 = _pragmateUi006Toast;
    }, function (_pragmateUi006CodeVerification) {
      dependency_14 = _pragmateUi006CodeVerification;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_15 = _beyondJsReact18Widgets111Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.29"], ["@aimpact/ailearn-app", "0.0.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.29/organizations/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/toast', dependency_13], ['pragmate-ui/code-verification', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.29/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.29/organizations/join.widget');
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
        hash: 921816903,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
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
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [token, setToken] = React.useState('');
            const [error, setError] = React.useState('');
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks2.useBinder)([store], () => setReady(store.ready));
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!ready) return null;
            const handleChange = code => {
              setToken(code);
              setError('');
            };
            if (!textsReady) return React.createElement(_components.PreloadScreen, null);
            const disabled = token.length !== 7;
            const onSubmit = async () => {
              try {
                await store.model.join({
                  code: token
                });
                //this.model.join({ code: token });
                _toast.toast.success('Join successfully');
              } catch (e) {
                setError(e.message);
                _toast.toast.error('Error while join');
              }
            };
            return React.createElement(_context.JoinContext.Provider, {
              value: {
                texts,
                store,
                token
              }
            }, React.createElement(_header.Header, {
              token: token
            }), React.createElement(_ui.PageContainer, {
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
            }), React.createElement(_components2.Button, {
              block: true,
              disabled: disabled,
              variant: "primary",
              type: "submit"
            }, texts.action.join)), React.createElement("div", {
              className: "token-info__container flex-container flex-column"
            }, React.createElement("h4", null, texts.info.title), React.createElement("ul", null, React.createElement("li", null, texts.info.rules.first), React.createElement("li", null, texts.info.rules.second)), React.createElement("span", null, texts.info.help))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJjb25zdHJ1Y3RvciIsIk9yZ2FuaXphdGlvbiIsInJlYWR5IiwiX3JlYWN0IiwiSm9pbkNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUpvaW5Db250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX3VpIiwiX2NvbnRleHQiLCJfY29uZmlnIiwiSGVhZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwib3JnYW5pemF0aW9ucyIsImpvaW4iLCJfaGVhZGVyIiwiX2NvbXBvbmVudHMiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfZm9ybSIsIl90b2FzdCIsIl9jb2RlVmVyaWZpY2F0aW9uIiwiX2NvbXBvbmVudHMyIiwiX2hvb2tzMiIsInRva2VuIiwic2V0VG9rZW4iLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImhhbmRsZUNoYW5nZSIsImNvZGUiLCJQcmVsb2FkU2NyZWVuIiwiZGlzYWJsZWQiLCJsZW5ndGgiLCJvblN1Ym1pdCIsInRvYXN0Iiwic3VjY2VzcyIsImUiLCJtZXNzYWdlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJGb3JtIiwiZm9ybSIsInRpdGxlIiwic3VidGl0bGUiLCJFcnJvclJlbmRlcmVyIiwiSW5wdXRDb2RlIiwibmFtZSIsInR5cGUiLCJvbkNvZGVGdWxsIiwicmVxdWlyZWQiLCJCdXR0b24iLCJibG9jayIsInZhcmlhbnQiLCJhY3Rpb24iLCJpbmZvIiwicnVsZXMiLCJmaXJzdCIsInNlY29uZCIsImhlbHAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksRUFBRTtZQUNuQjtZQUNBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFQLEtBQU0sQ0FBQ1EsS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFYLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkQsSUFBQVksTUFBQSxH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