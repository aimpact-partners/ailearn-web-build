System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.3/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.36/form", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_beyondJsReactive113Model) {
      dependency_5 = _beyondJsReactive113Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_9 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi0036Form) {
      dependency_11 = _pragmateUi0036Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImZvdW5kIiwiYWNjZXNzIiwiaWQiLCJ1bmRlZmluZWQiLCJTZXNzaW9uIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJyZXNwb25zZSIsInVzZXJzIiwiaW5jbHVkZXMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXJJZCIsImxlc3NvbiIsImNsYXNzUm9vbUlkIiwicmVhZHkiLCJjcmVhdGVDaGF0cyIsInVzZXIiLCJ0b2tlbiIsIlNoYXJlQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVNoYXJlQ29udGV4dCIsInVzZUNvbnRleHQiLCJFbXB0eVZpZXciLCJ0ZXh0cyIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsImVtcHR5Iiwid2VsY29tZSIsImluZm8iLCJhY3Rpb24iLCJzdG9yZSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiUHJlbG9hZFNjcmVlbiIsIkNvbnRyb2wiLCJTaGFyZUxhbmRpbmciLCJQcm92aWRlciIsInZhbHVlIiwiaXNGZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImdvb2dsZUxvZ2luIiwic2lnbkluV2l0aEdvb2dsZSIsInN0YXR1cyIsImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImRhdGEiLCJjaGF0SWQiLCJ0aXRsZSIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsImFjY2Vzc2VkIiwic2hhcmVkIiwic2F2ZSIsImJ1dHRvbnMiLCJsb2dnZWQiLCJCdXR0b24iLCJpY29uIiwib25DbGljayIsImxvYWRpbmciLCJsYWJlbCIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3N0b3JlLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL19jb250ZXh0LnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2VtcHR5LXZpZXcudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9sYW5kaW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=