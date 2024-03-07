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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 3686010579,
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
            return _react.default.createElement("section", null, _react.default.createElement(_ui.NavbarHeader, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiY29uc3RydWN0b3IiLCJDbGFzc3Jvb20iLCJqb2luIiwidG9rZW4iLCJmZXRjaGluZyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY29kZSIsImUiLCJlcnJvciIsIl9yZWFjdCIsIkpvaW5Db250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VKb2luQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2NvbmZpZyIsIkhlYWRlciIsImhhbmRsZVN1Ym1pdCIsInRleHRzIiwiZGlzYWJsZWQiLCJsZW5ndGgiLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJhY3Rpb24iLCJQYWdlVGl0bGUiLCJ0aXRsZSIsIlBhZ2VTdWJ0aXRsZSIsImRlc2NyaWJlIiwiX2hlYWRlciIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9mb3JtIiwiX3RvYXN0Iiwic2V0VG9rZW4iLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsInZhbHVlIiwiUHJlbG9hZFNjcmVlbiIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJmb3JtIiwic3VidGl0bGUiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwibmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiaW5mbyIsInJ1bGVzIiwiZmlyc3QiLCJzZWNvbmQiLCJoZWxwIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQVAsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFRLE1BQUEsR0FBQVgsT0FBQTtVQUNBLElBQUFZLEtBQUEsR0FBQVosT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUUksTUFBQSxDQUFBRSxhQUEyQjtZQUM1RCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQUMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUYsS0FBQSxDQUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2hDO1lBRUEsTUFBTUMsSUFBSUEsQ0FBQ0MsS0FBSztjQUNmLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLLEVBQUUsT0FBTyxDQUFDO2dCQUUzQixNQUFNSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUNSLEtBQUssQ0FBQ0csSUFBSSxDQUFDO2tCQUFFTSxJQUFJLEVBQUVMO2dCQUFLLENBQUUsQ0FBQztnQkFDbkRFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLEVBQUUsV0FBVyxDQUFDO2dCQUM5QjtnQkFDQTtnQkFDQTtnQkFDQSxPQUFPQSxJQUFJO2VBQ1gsQ0FBQyxPQUFPRSxDQUFDLEVBQUU7Z0JBQ1hKLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDLENBQUMsRUFBRUQsQ0FBQyxDQUFDO2VBQ25CLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDTCxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7O1VBQ0FULE9BQUEsQ0FBQUgsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CRCxJQUFBbUIsTUFBQSxHQUFBMUIsT0FBQTtVQU9PLE1BQU0yQixXQUFXLEdBQUFqQixPQUFBLENBQUFpQixXQUFBLEdBQUdELE1BQUEsQ0FBQUUsT0FBSyxDQUFDQyxhQUFhLENBQWUsRUFBa0IsQ0FBQztVQUN6RSxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBRSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0osV0FBVyxDQUFDO1VBQUNqQixPQUFBLENBQUFvQixjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUmxFLElBQUFKLE1BQUEsR0FBQTFCLE9BQUE7VUFDQSxJQUFBZ0MsR0FBQSxHQUFBaEMsT0FBQTtVQUNBLElBQUFpQyxXQUFBLEdBQUFqQyxPQUFBO1VBQ0EsSUFBQWtDLFFBQUEsR0FBQWxDLE9BQUE7VUFDQSxJQUFBbUMsT0FBQSxHQUFBbkMsT0FBQTtVQUNPO1VBQVUsU0FBVW9DLE1BQU1BLENBQUM7WUFBRWxCLEtBQUs7WUFBRW1CO1VBQVksQ0FBRTtZQUN4RCxNQUFNO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUosY0FBYyxHQUFFO1lBRWxDLE1BQU1TLFFBQVEsR0FBR3JCLEtBQUssQ0FBQ3NCLE1BQU0sS0FBSyxDQUFDO1lBRW5DLE9BQ0NkLE1BQUEsQ0FBQUUsT0FBQSxDQUFBYSxhQUFBLGtCQUNDZixNQUFBLENBQUFFLE9BQUEsQ0FBQWEsYUFBQSxDQUFDVCxHQUFBLENBQUFVLFlBQVk7Y0FDWkMsVUFBVSxFQUFFLENBQ1gsQ0FBQ1IsT0FBQSxDQUFBUCxPQUFNLENBQUNnQixNQUFNLENBQUNDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFDN0IsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUMsRUFDbEMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1lBQ1osR0FFRG5CLE1BQUEsQ0FBQUUsT0FBQSxDQUFBYSxhQUFBLENBQUNSLFdBQUEsQ0FBQWEsTUFBTTtjQUFDUCxRQUFRLEVBQUVBLFFBQVE7Y0FBRVEsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFQSxDQUFBLEtBQU1YLFlBQVk7WUFBRSxHQUN6RUMsS0FBSyxDQUFDVyxNQUFNLENBQUNoQyxJQUFJLENBQ1YsQ0FDSyxFQUNmUyxNQUFBLENBQUFFLE9BQUEsQ0FBQWEsYUFBQSxDQUFDVCxHQUFBLENBQUFrQixTQUFTO2NBQUNDLEtBQUssRUFBRWIsS0FBSyxDQUFDYTtZQUFLLEdBQzVCekIsTUFBQSxDQUFBRSxPQUFBLENBQUFhLGFBQUEsQ0FBQ1QsR0FBQSxDQUFBb0IsWUFBWSxRQUFFZCxLQUFLLENBQUNlLFFBQVEsQ0FBZ0IsQ0FDbEMsQ0FDSDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBM0IsTUFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUFnQyxHQUFBLEdBQUFoQyxPQUFBO1VBQ0EsSUFBQXNELE9BQUEsR0FBQXRELE9BQUE7VUFDQSxJQUFBa0MsUUFBQSxHQUFBbEMsT0FBQTtVQUNBLElBQUFpQyxXQUFBLEdBQUFqQyxPQUFBO1VBQ0EsSUFBQXVELGVBQUEsR0FBQXZELE9BQUE7VUFDQSxJQUFBd0QsTUFBQSxHQUFBeEQsT0FBQTtVQUVBLElBQUF5RCxLQUFBLEdBQUF6RCxPQUFBO1VBQ0EsSUFBQTBELE1BQUEsR0FBQTFELE9BQUE7VUFFTztVQUFVLFNBQ1JTLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUEyQjtZQUMvQyxNQUFNLENBQUNhLEtBQUssRUFBRXlDLFFBQVEsQ0FBQyxHQUFHakMsTUFBQSxDQUFBRSxPQUFLLENBQUNnQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLE1BQU0sQ0FBQ25DLEtBQUssRUFBRW9DLFFBQVEsQ0FBQyxHQUFHbkMsTUFBQSxDQUFBRSxPQUFLLENBQUNnQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRTVDLE1BQU0sQ0FBQ0UsVUFBVSxFQUFFeEIsS0FBSyxDQUFDLEdBQUcsSUFBQWtCLE1BQUEsQ0FBQU8sUUFBUSxFQUFDUixlQUFBLENBQUFTLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBRXRELE1BQU1DLFlBQVksR0FBR0EsQ0FBQztjQUFFQyxhQUFhLEVBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQ2xEVCxRQUFRLENBQUNTLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO2NBQ3RCUixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2IsQ0FBQztZQUVELElBQUksQ0FBQ0MsVUFBVSxFQUFFLE9BQU9wQyxNQUFBLENBQUFFLE9BQUEsQ0FBQWEsYUFBQSxDQUFDUixXQUFBLENBQUFxQyxhQUFhLE9BQUc7WUFFekMsTUFBTWpDLFlBQVksR0FBRyxNQUFBQSxDQUFBLEtBQTBCO2NBQzlDLElBQUk7Z0JBQ0gsTUFBTWhDLEtBQUssQ0FBQ1ksSUFBSSxDQUFDQyxLQUFLLENBQUM7Z0JBQ3ZCd0MsTUFBQSxDQUFBYSxLQUFLLENBQUNDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztlQUNsQyxDQUFDLE9BQU9oRCxDQUFDLEVBQUU7Z0JBQ1hxQyxRQUFRLENBQUNyQyxDQUFDLENBQUNpRCxPQUFPLENBQUM7Z0JBQ25CZixNQUFBLENBQUFhLEtBQUssQ0FBQzlDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzs7WUFFakMsQ0FBQztZQUVELE9BQ0NDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBYSxhQUFBLENBQUNQLFFBQUEsQ0FBQVAsV0FBVyxDQUFDK0MsUUFBUTtjQUNwQkwsS0FBSyxFQUFFO2dCQUNOL0IsS0FBSztnQkFDTGpDOztZQUNBLEdBRURxQixNQUFBLENBQUFFLE9BQUEsQ0FBQWEsYUFBQSxDQUFDYSxPQUFBLENBQUFsQixNQUFNO2NBQUNsQixLQUFLLEVBQUVBLEtBQUs7Y0FBRW1CLFlBQVksRUFBRUE7WUFBWSxFQUFJLEVBQ3BEWCxNQUFBLENBQUFFLE9BQUEsQ0FBQWEsYUFBQSxDQUFDVCxHQUFBLENBQUEyQyxhQUFhO2NBQUNDLFNBQVMsRUFBQztZQUF1QixHQUMvQ2xELE1BQUEsQ0FBQUUsT0FBQSxDQUFBYSxhQUFBO2NBQUttQyxTQUFTLEVBQUM7WUFBaUUsR0FDL0VsRCxNQUFBLENBQUFFLE9BQUEsQ0FBQWEsYUFBQTtjQUFLbUMsU0FBUyxFQUFDO1lBQXVCLEdBQ3JDbEQsTUFBQSxDQUFBRSxPQUFBLENBQUFhLGFBQUE7Y0FBR21DLFNBQVMsRUFBQztZQUFJLEdBQUV0QyxLQUFLLENBQUN1QyxJQUFJLENBQUMxQixLQUFLLENBQUssRUFDeEN6QixNQUFBLENBQUFFLE9BQUEsQ0FBQWEsYUFBQTtjQUFNbUMsU0FBUyxFQUFDO1lBQUksR0FBRXRDLEtBQUssQ0FBQ3VDLElBQUksQ0FBQ0MsUUFBUSxDQUFRLEVBQ2pEcEQsTUFBQSxDQUFBRSxPQUFBLENBQUFhLGFBQUEsQ0FBQ2dCLEtBQUEsQ0FBQXNCLEtBQUs7Y0FDTEMsV0FBVyxFQUFFMUMsS0FBSyxDQUFDdUMsSUFBSSxDQUFDRyxXQUFXO2NBQ25DWCxLQUFLLEVBQUVuRCxLQUFLO2NBQ1orRCxJQUFJLEVBQUMsTUFBTTtjQUNYQyxJQUFJLEVBQUMsTUFBTTtjQUNYQyxRQUFRLEVBQUVqQixZQUFZO2NBQ3RCa0IsUUFBUTtZQUFBLEVBQ1AsQ0FDRyxFQUNOMUQsTUFBQSxDQUFBRSxPQUFBLENBQUFhLGFBQUE7Y0FBS21DLFNBQVMsRUFBQztZQUFrRCxHQUNoRWxELE1BQUEsQ0FBQUUsT0FBQSxDQUFBYSxhQUFBO2NBQU1tQyxTQUFTLEVBQUM7WUFBSSxHQUFFdEMsS0FBSyxDQUFDK0MsSUFBSSxDQUFDbEMsS0FBSyxDQUFRLEVBQzlDekIsTUFBQSxDQUFBRSxPQUFBLENBQUFhLGFBQUEsYUFDQ2YsTUFBQSxDQUFBRSxPQUFBLENBQUFhLGFBQUEsYUFBS0gsS0FBSyxDQUFDK0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLEtBQUssQ0FBTSxFQUNqQzdELE1BQUEsQ0FBQUUsT0FBQSxDQUFBYSxhQUFBLGFBQUtILEtBQUssQ0FBQytDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRSxNQUFNLENBQU0sQ0FDOUIsRUFDTDlELE1BQUEsQ0FBQUUsT0FBQSxDQUFBYSxhQUFBLGVBQU9ILEtBQUssQ0FBQytDLElBQUksQ0FBQ0ksSUFBSSxDQUFRLENBQ3pCLENBQ0QsQ0FDUyxDQUNNO1VBRXpCIn0=