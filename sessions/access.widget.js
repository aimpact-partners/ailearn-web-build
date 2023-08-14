System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@0.0.2/shared/hooks", "@aimpact/chat@0.0.2/shared/components", "pragmate-ui@0.0.36/form", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive112Model) {
      dependency_5 = _beyondJsReactive112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat002SharedHooks) {
      dependency_9 = _aimpactChat002SharedHooks;
    }, function (_aimpactChat002SharedComponents) {
      dependency_10 = _aimpactChat002SharedComponents;
    }, function (_pragmateUi0036Form) {
      dependency_11 = _pragmateUi0036Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "0.0.2"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/sessions/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat/shared/hooks', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['pragmate-ui/form', dependency_11], ['@beyond-js/kernel/routing', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-sessions-access",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/sessions/access.widget",
        "is": "page",
        "route": "/sessions/access/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/sessions/access.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2823156176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
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
              this.#store.load(this.uri.vars.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 407706767,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #found;
            get found() {
              return this.#found;
            }
            #access;
            get access() {
              return this.#access;
            }
            load = async id => {
              if (this.#model && this.#model.id !== id) {
                this.#model = undefined;
              }
              this.#model = new _core.Session();
              this.#model.on('change', this.triggerEvent);
              const response = await this.#model.load({
                id
              });
              this.#access = !!response.users?.includes(_session.sessionWrapper.userId);
              this.#found = !!response.lesson && response.classRoomId;
              this.ready = true;
            };
            createChats = async () => {
              return await this.#model.access(_session.sessionWrapper.user.token);
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /********************************
      INTERNAL MODULE: ./views/_context
      ********************************/

      ims.set('./views/_context', {
        hash: 151414531,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useShareContext = exports.ShareContext = void 0;
          var React = require("react");
          const ShareContext = React.createContext({});
          exports.ShareContext = ShareContext;
          const useShareContext = () => React.useContext(ShareContext);
          exports.useShareContext = useShareContext;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/empty-view
      **********************************/

      ims.set('./views/empty-view', {
        hash: 1136955024,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyView = void 0;
          var React = require("react");
          var _context = require("./_context");
          const EmptyView = () => {
            const {
              texts
            } = (0, _context.useShareContext)();
            return React.createElement("div", {
              className: "access__class"
            }, React.createElement("img", {
              alt: "Shared class",
              src: "/assets/shared-class.png"
            }), React.createElement("span", {
              className: "access-details"
            }, React.createElement("h1", null, texts.empty.welcome), React.createElement("p", null, React.createElement("strong", null, texts.empty.info), React.createElement("br", null), texts.empty.action)));
          };
          exports.EmptyView = EmptyView;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3531740364,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _components = require("@aimpact/chat/shared/components");
          var _context = require("./_context");
          var _landing = require("./landing");
          var _emptyView = require("./empty-view");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return React.createElement(_components.PreloadScreen, null);
            const Control = !store.found ? _emptyView.EmptyView : _landing.default;
            return React.createElement(_context.ShareContext.Provider, {
              value: {
                texts,
                store
              }
            }, React.createElement(Control, null));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/landing
      *******************************/

      ims.set('./views/landing', {
        hash: 1767542809,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ShareLanding;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/chat-sdk/session");
          var _context = require("./_context");
          function ShareLanding() {
            const {
              texts,
              store
            } = (0, _context.useShareContext)();
            const {
              model
            } = store;
            const [isFetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            const googleLogin = async () => {
              try {
                setFetching(true);
                const response = await _session.sessionWrapper.signInWithGoogle();
                if (!response.status) {
                  const {
                    error
                  } = response;
                  if (error === 'POPUP_CLOSED_BY_USER') {
                    setFetching(false);
                  } else {
                    setError('Error trying to login with Google');
                  }
                  return;
                }
                handleClick();
              } catch (e) {
                console.error(e.message);
              }
            };
            const handleClick = async () => {
              try {
                if (store.access) return;
                setFetching(true);
                const response = await store.createChats();
                setFetching(false);
                if (!response.status) {
                  console.error(response.message);
                  return;
                }
                _routing.routing.pushState(`/chat/${response.data.chatId}`);
              } catch (e) {
                console.error(e.message);
              }
            };
            const title = store.access ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h1", null, model.lesson.name.toUpperCase()), _react.default.createElement("strong", null, texts.accessed)) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h1", null, texts.welcome), _react.default.createElement("p", null, _react.default.createElement("strong", null, model.lesson.name.toUpperCase(), " "), texts.shared, _react.default.createElement("br", null), texts.save));
            let buttons = undefined;
            if (!store.access) {
              buttons = !_session.sessionWrapper.logged ? _react.default.createElement(_form.Button, {
                icon: "google",
                onClick: googleLogin,
                loading: isFetching,
                label: "Google Sign In"
              }) : _react.default.createElement(_form.Button, {
                variant: "primary",
                onClick: handleClick,
                icon: "save",
                loading: isFetching,
                label: texts.action
              });
            }
            return _react.default.createElement("div", {
              className: "access__class"
            }, _react.default.createElement("img", {
              alt: "Shared class",
              src: "/assets/shared-class.png"
            }), _react.default.createElement("span", {
              className: "access-details"
            }, title, buttons));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJmb3VuZCIsImFjY2VzcyIsImlkIiwidW5kZWZpbmVkIiwiU2Vzc2lvbiIsIm9uIiwidHJpZ2dlckV2ZW50IiwicmVzcG9uc2UiLCJ1c2VycyIsImluY2x1ZGVzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VySWQiLCJsZXNzb24iLCJjbGFzc1Jvb21JZCIsInJlYWR5IiwiY3JlYXRlQ2hhdHMiLCJ1c2VyIiwidG9rZW4iLCJSZWFjdCIsIlNoYXJlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTaGFyZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQiLCJFbXB0eVZpZXciLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJlbXB0eSIsIndlbGNvbWUiLCJpbmZvIiwiYWN0aW9uIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9jb21wb25lbnRzIiwiX2xhbmRpbmciLCJfZW1wdHlWaWV3Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJDb250cm9sIiwiZGVmYXVsdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJfcmVhY3QiLCJfZm9ybSIsIl9yb3V0aW5nIiwiU2hhcmVMYW5kaW5nIiwiaXNGZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImdvb2dsZUxvZ2luIiwic2lnbkluV2l0aEdvb2dsZSIsInN0YXR1cyIsImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImRhdGEiLCJjaGF0SWQiLCJ0aXRsZSIsIkZyYWdtZW50IiwibmFtZSIsInRvVXBwZXJDYXNlIiwiYWNjZXNzZWQiLCJzaGFyZWQiLCJzYXZlIiwiYnV0dG9ucyIsImxvZ2dlZCIsIkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwibG9hZGluZyIsImxhYmVsIiwidmFyaWFudCJdLCJzb3VyY2VzIjpbIi93aWRnZXQvdHMvY29udHJvbGxlci50cyIsIi93aWRnZXQvdHMvc3RvcmUudHMiLCIvd2lkZ2V0L3RzL3ZpZXdzL19jb250ZXh0LnRzIiwiL3dpZGdldC90cy92aWV3cy9lbXB0eS12aWV3LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9sYW5kaW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJ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