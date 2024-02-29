System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/toast"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_7 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi006Components) {
      dependency_8 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_9 = _aimpactAilearnApp0024Config;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Form) {
      dependency_12 = _pragmateUi006Form;
    }, function (_pragmateUi006Toast) {
      dependency_13 = _pragmateUi006Toast;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/classrooms/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/toast', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/classrooms/join.widget');
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
        hash: 3843663319,
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
            async join(token) {
              try {
                this.fetching = true;
                console.log(token, 'TOKEN');
                const data = await this.model.join({
                  code: token
                });
                console.log(data, 'RES data:');
                // if (!status) {
                // 	throw new Error('error inviting user');
                // }
                return data;
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
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
        hash: 1074259730,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function Header({
            token,
            handleSubmit
          }) {
            const {
              texts
            } = (0, _context.useJoinContext)();
            const disabled = token.length !== 7;
            return _react.default.createElement("section", null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Classrooms', '/classrooms/list'], ['Join', '']]
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              variant: "primary",
              onClick: () => handleSubmit()
            }, texts.action.join)), _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement(_ui.PageSubtitle, null, texts.describe)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3821450297,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _header = require("./header");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          /*bundle*/
          function View({
            store
          }) {
            const [token, setToken] = _react.default.useState('');
            const [error, setError] = _react.default.useState('');
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const handleChange = ({
              currentTarget: target
            }) => {
              setToken(target.value);
              setError('');
            };
            if (!textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const handleSubmit = async () => {
              try {
                await store.join(token);
                _toast.toast.success('Join successfully');
              } catch (e) {
                setError(e.message);
                _toast.toast.error('Error while join');
              }
            };
            return _react.default.createElement(_context.JoinContext.Provider, {
              value: {
                texts,
                store
              }
            }, _react.default.createElement(_header.Header, {
              token: token,
              handleSubmit: handleSubmit
            }), _react.default.createElement(_ui.PageContainer, {
              className: "token-page__container"
            }, _react.default.createElement("div", {
              className: "token-general__container flex-container flex-center flex-column"
            }, _react.default.createElement("div", {
              className: "token-form__container"
            }, _react.default.createElement("p", {
              className: "h3"
            }, texts.form.title), _react.default.createElement("span", {
              className: "p2"
            }, texts.form.subtitle), _react.default.createElement(_form.Input, {
              placeholder: texts.form.placeholder,
              value: token,
              name: "name",
              type: "text",
              onChange: handleChange,
              required: true
            })), _react.default.createElement("div", {
              className: "token-info__container flex-container flex-column"
            }, _react.default.createElement("span", {
              className: "h4"
            }, texts.info.title), _react.default.createElement("ul", null, _react.default.createElement("li", null, texts.info.rules.first), _react.default.createElement("li", null, texts.info.rules.second)), _react.default.createElement("span", null, texts.info.help)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiY29uc3RydWN0b3IiLCJDbGFzc3Jvb20iLCJqb2luIiwidG9rZW4iLCJmZXRjaGluZyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY29kZSIsImUiLCJlcnJvciIsIl9yZWFjdCIsIkpvaW5Db250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VKb2luQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2NvbmZpZyIsIkhlYWRlciIsImhhbmRsZVN1Ym1pdCIsInRleHRzIiwiZGlzYWJsZWQiLCJsZW5ndGgiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYWN0aW9uIiwiUGFnZVRpdGxlIiwidGl0bGUiLCJQYWdlU3VidGl0bGUiLCJkZXNjcmliZSIsIl9oZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfZm9ybSIsIl90b2FzdCIsInNldFRva2VuIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlByZWxvYWRTY3JlZW4iLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiZm9ybSIsInN1YnRpdGxlIiwiSW5wdXQiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImluZm8iLCJydWxlcyIsImZpcnN0Iiwic2Vjb25kIiwiaGVscCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFQLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkRCxJQUFBUSxNQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBWSxLQUFBLEdBQUFaLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFJLE1BQUEsQ0FBQUUsYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUFDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FD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