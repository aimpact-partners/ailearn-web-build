System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.24/model/gclassroom", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/components", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0024ModelGclassroom) {
      dependency_7 = _aimpactAilearnApp0024ModelGclassroom;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_9 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_10 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi006Components) {
      dependency_12 = _pragmateUi006Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.24/sessions/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@aimpact/chat/shared/hooks', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/kernel/routing', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-sessions-access",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/sessions/access.widget",
        "is": "page",
        "route": "/sessions/access/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/sessions/access.widget');
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
        hash: 2817674597,
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

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 774891343,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          class StoreManager extends _model.ReactiveModel {
            constructor() {
              super();
              _gclassroom.gclassroom.on('change', this.triggerEvent);
            }
            get error() {
              return _gclassroom.gclassroom.error;
            }
            get gclassroom() {
              return _gclassroom.gclassroom;
            }
            async validate(state, code) {
              try {
                this.fetching = true;
                await _gclassroom.gclassroom.callback(state, code);
                this.fetching = false;
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
            }
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
          const ShareContext = exports.ShareContext = _react.default.createContext({});
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
        hash: 371531143,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ShareLanding;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
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
              buttons = !_session.sessionWrapper.logged ? _react.default.createElement(_components.Button, {
                icon: "google",
                onClick: googleLogin,
                loading: isFetching,
                label: "Google Sign In"
              }) : _react.default.createElement(_components.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJmb3VuZCIsImFjY2VzcyIsImlkIiwidW5kZWZpbmVkIiwiU2Vzc2lvbiIsIm9uIiwidHJpZ2dlckV2ZW50IiwicmVzcG9uc2UiLCJ1c2VycyIsImluY2x1ZGVzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VySWQiLCJsZXNzb24iLCJjbGFzc1Jvb21JZCIsInJlYWR5IiwiY3JlYXRlQ2hhdHMiLCJ1c2VyIiwidG9rZW4iLCJfZ2NsYXNzcm9vbSIsImNvbnN0cnVjdG9yIiwiZ2NsYXNzcm9vbSIsImVycm9yIiwidmFsaWRhdGUiLCJzdGF0ZSIsImNvZGUiLCJmZXRjaGluZyIsImNhbGxiYWNrIiwiZSIsImNvbnNvbGUiLCJfcmVhY3QiLCJTaGFyZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZVNoYXJlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIkVtcHR5VmlldyIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsImVtcHR5Iiwid2VsY29tZSIsImluZm8iLCJhY3Rpb24iLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaG9va3MyIiwiX2NvbXBvbmVudHMiLCJfbGFuZGluZyIsIl9lbXB0eVZpZXciLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsInZhbHVlIiwiX3JvdXRpbmciLCJTaGFyZUxhbmRpbmciLCJpc0ZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsImdvb2dsZUxvZ2luIiwic2lnbkluV2l0aEdvb2dsZSIsInN0YXR1cyIsImhhbmRsZUNsaWNrIiwibWVzc2FnZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJkYXRhIiwiY2hhdElkIiwidGl0bGUiLCJGcmFnbWVudCIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsImFjY2Vzc2VkIiwic2hhcmVkIiwic2F2ZSIsImJ1dHRvbnMiLCJsb2dnZWQiLCJCdXR0b24iLCJpY29uIiwib25DbGljayIsImxvYWRpbmciLCJsYWJlbCIsInZhcmlhbnQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy92aWV3cy9fY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS12aWV3LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0Es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