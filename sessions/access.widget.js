System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.5/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.36/form", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_beyondJsReactive115Model) {
      dependency_5 = _beyondJsReactive115Model;
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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 688727710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useShareContext = exports.ShareContext = void 0;
          var _react = require("react");
          const ShareContext = _react.default.createContext({});
          exports.ShareContext = ShareContext;
          const useShareContext = () => _react.default.useContext(ShareContext);
          exports.useShareContext = useShareContext;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/empty-view
      **********************************/

      ims.set('./views/empty-view', {
        hash: 2796975375,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyView = void 0;
          var _react = require("react");
          var _context = require("./_context");
          const EmptyView = () => {
            const {
              texts
            } = (0, _context.useShareContext)();
            return _react.default.createElement("div", {
              className: "access__class"
            }, _react.default.createElement("img", {
              alt: "Shared class",
              src: "/assets/shared-class.png"
            }), _react.default.createElement("span", {
              className: "access-details"
            }, _react.default.createElement("h1", null, texts.empty.welcome), _react.default.createElement("p", null, _react.default.createElement("strong", null, texts.empty.info), _react.default.createElement("br", null), texts.empty.action)));
          };
          exports.EmptyView = EmptyView;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 261155504,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
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
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const Control = !store.found ? _emptyView.EmptyView : _landing.default;
            return _react.default.createElement(_context.ShareContext.Provider, {
              value: {
                texts,
                store
              }
            }, _react.default.createElement(Control, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJmb3VuZCIsImFjY2VzcyIsImlkIiwidW5kZWZpbmVkIiwiU2Vzc2lvbiIsIm9uIiwidHJpZ2dlckV2ZW50IiwicmVzcG9uc2UiLCJ1c2VycyIsImluY2x1ZGVzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VySWQiLCJsZXNzb24iLCJjbGFzc1Jvb21JZCIsInJlYWR5IiwiY3JlYXRlQ2hhdHMiLCJ1c2VyIiwidG9rZW4iLCJfcmVhY3QiLCJTaGFyZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZVNoYXJlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIkVtcHR5VmlldyIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsImVtcHR5Iiwid2VsY29tZSIsImluZm8iLCJhY3Rpb24iLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaG9va3MyIiwiX2NvbXBvbmVudHMiLCJfbGFuZGluZyIsIl9lbXB0eVZpZXciLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsInZhbHVlIiwiX2Zvcm0iLCJfcm91dGluZyIsIlNoYXJlTGFuZGluZyIsImlzRmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJnb29nbGVMb2dpbiIsInNpZ25JbldpdGhHb29nbGUiLCJzdGF0dXMiLCJoYW5kbGVDbGljayIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJkYXRhIiwiY2hhdElkIiwidGl0bGUiLCJGcmFnbWVudCIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsImFjY2Vzc2VkIiwic2hhcmVkIiwic2F2ZSIsImJ1dHRvbnMiLCJsb2dnZWQiLCJCdXR0b24iLCJpY29uIiwib25DbGljayIsImxvYWRpbmciLCJsYWJlbCIsInZhcmlhbnQiXSwic291cmNlcyI6WyIvd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCIvd2lkZ2V0L3RzL3N0b3JlLnRzIiwiL3dpZGdldC90cy92aWV3cy9fY29udGV4dC50cyIsIi93aWRnZXQvdHMvdmlld3MvZW1wdHktdmlldy50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvbGFuZGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtj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