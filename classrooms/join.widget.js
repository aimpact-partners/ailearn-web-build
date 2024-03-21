System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.27/components/ui", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.27/config", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/code-verification", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_7 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_pragmateUi006Components) {
      dependency_8 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_9 = _aimpactAilearnApp0027Config;
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
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/classrooms/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/toast', dependency_13], ['pragmate-ui/code-verification', dependency_14], ['@beyond-js/kernel/routing', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/classrooms/join.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3542939638,
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
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 949667783,
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
              this.#model = new _core.Classroom({});
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
        hash: 4057543085,
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
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.classrooms, '/classrooms/list'], [texts.breadcrumb.join, '']]
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4098268898,
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
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function View({
            store
          }) {
            const [token, setToken] = React.useState('');
            const [error, setError] = React.useState('');
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const handleChange = code => {
              console.log(100, code);
              setToken(code);
              setError('');
            };
            if (!textsReady) return React.createElement(_components.PreloadScreen, null);
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
                  _routing.routing.pushState(`/classrooms/view${response.data.classroom.id}`);
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
              upper: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiY29uc3RydWN0b3IiLCJDbGFzc3Jvb20iLCJfcmVhY3QiLCJKb2luQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlSm9pbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfdWkiLCJfY29udGV4dCIsIl9jb25maWciLCJIZWFkZXIiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJjbGFzc3Jvb21zIiwiam9pbiIsIl9oZWFkZXIiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9mb3JtIiwiX3RvYXN0IiwiX2NvZGVWZXJpZmljYXRpb24iLCJfY29tcG9uZW50czIiLCJfcm91dGluZyIsInRva2VuIiwic2V0VG9rZW4iLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJoYW5kbGVDaGFuZ2UiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsIlByZWxvYWRTY3JlZW4iLCJkaXNhYmxlZCIsImxlbmd0aCIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJlcnJvcnMiLCJJTlZBTElEX0NPREUiLCJkYXRhIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwicGVuZGluZyIsImluY2x1ZGVzIiwiY2xhc3Nyb29tIiwiaWQiLCJhdXRob3JpemVkIiwiZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiRm9ybSIsImZvcm0iLCJ0aXRsZSIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsIklucHV0Q29kZSIsInVwcGVyIiwibmFtZSIsInR5cGUiLCJvbkNvZGVGdWxsIiwicmVxdWlyZWQiLCJCdXR0b24iLCJibG9jayIsInZhcmlhbnQiLCJhY3Rpb24iLCJpbmZvIiwicnVsZXMiLCJmaXJzdCIsInNlY29uZCIsImhlbHAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQVAsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFRLE1BQUEsR0FBQVgsT0FBQTtVQUNBLElBQUFZLEtBQUEsR0FBQVosT0FBQTtVQUVNLE1BQU9P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