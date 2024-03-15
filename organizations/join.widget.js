System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.27/components/ui", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.27/config", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/toast"], function (_export, _context2) {
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
          "vspecifier": "@aimpact/ailearn-app@0.0.27/organizations/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/toast', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/organizations/join.widget');
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
        hash: 2206734503,
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
            async join(token) {
              try {
                this.fetching = true;
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
        hash: 3233269879,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
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
            return React.createElement("section", null, React.createElement(_ui.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Organizations', '/organizations/list'], ['Join', '']]
            }, React.createElement(_components.Button, {
              disabled: disabled,
              variant: "primary",
              onClick: () => handleSubmit()
            }, texts.action.join)), React.createElement(_ui.PageTitle, {
              title: texts.title
            }, React.createElement(_ui.PageSubtitle, null, texts.describe)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiY29uc3RydWN0b3IiLCJPcmdhbml6YXRpb24iLCJqb2luIiwidG9rZW4iLCJmZXRjaGluZyIsImRhdGEiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsImUiLCJlcnJvciIsIl9yZWFjdCIsIkpvaW5Db250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VKb2luQ29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl91aSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfY29uZmlnIiwiSGVhZGVyIiwiaGFuZGxlU3VibWl0IiwidGV4dHMiLCJkaXNhYmxlZCIsImxlbmd0aCIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImFjdGlvbiIsIlBhZ2VUaXRsZSIsInRpdGxlIiwiUGFnZVN1YnRpdGxlIiwiZGVzY3JpYmUiLCJfaGVhZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2Zvcm0iLCJfdG9hc3QiLCJzZXRUb2tlbiIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwidmFsdWUiLCJQcmVsb2FkU2NyZWVuIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsImZvcm0iLCJzdWJ0aXRsZSIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJuYW1lIiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJpbmZvIiwicnVsZXMiLCJmaXJzdCIsInNlY29uZCIsImhlbHAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjs7VUFDQUMsT0FBQSxDQUFBUCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsTUFBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksS0FBQSxHQUFBWixPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRSSxNQUFBLENBQUFFLGFBQTJCO1lBQzVELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBQyxZQUFBO2NBQ0Ms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