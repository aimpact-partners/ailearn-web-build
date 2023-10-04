System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.37/components", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
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
    }, function (_pragmateUi0037Components) {
      dependency_11 = _pragmateUi0037Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.2/sessions/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat/shared/hooks', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/kernel/routing', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-sessions-access",
        "vspecifier": "@aimpact/ailearn-app@0.0.2/sessions/access.widget",
        "is": "page",
        "route": "/sessions/access/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.2/sessions/access.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJmb3VuZCIsImFjY2VzcyIsImlkIiwidW5kZWZpbmVkIiwiU2Vzc2lvbiIsIm9uIiwidHJpZ2dlckV2ZW50IiwicmVzcG9uc2UiLCJ1c2VycyIsImluY2x1ZGVzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VySWQiLCJsZXNzb24iLCJjbGFzc1Jvb21JZCIsInJlYWR5IiwiY3JlYXRlQ2hhdHMiLCJ1c2VyIiwidG9rZW4iLCJfcmVhY3QiLCJTaGFyZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZVNoYXJlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIkVtcHR5VmlldyIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsImVtcHR5Iiwid2VsY29tZSIsImluZm8iLCJhY3Rpb24iLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaG9va3MyIiwiX2NvbXBvbmVudHMiLCJfbGFuZGluZyIsIl9lbXB0eVZpZXciLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsInZhbHVlIiwiX3JvdXRpbmciLCJTaGFyZUxhbmRpbmciLCJpc0ZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJlcnJvciIsInNldEVycm9yIiwiZ29vZ2xlTG9naW4iLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwiaGFuZGxlQ2xpY2siLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZGF0YSIsImNoYXRJZCIsInRpdGxlIiwiRnJhZ21lbnQiLCJuYW1lIiwidG9VcHBlckNhc2UiLCJhY2Nlc3NlZCIsInNoYXJlZCIsInNhdmUiLCJidXR0b25zIiwibG9nZ2VkIiwiQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJ2YXJpYW50Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvX2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHktdmlldy50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDOztVQUNBQyxPQUFBLENBQUFaLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkQsSUFBQWEsS0FBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLFFBQUEsR0FBQWxCLE9BQUE7VUFHTSxNQUFPTyxZQUFhLFNBQVFVLE1BQUEsQ0FBQUUsYUFBcUI7WUFDdEQsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUFYLElBQUksR0FBRyxNQUFPWSxFQUFVLElBQUk7Y0FDM0IsSUFBSSxJQUFJLENBQUMsQ0FBQUgsS0FBTSxJQUFJLElBQUksQ0FBQyxDQUFBQSxLQUFNLENBQUNHLEVBQUUsS0FBS0EsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsQ0FBQUgsS0FBTSxHQUFHSSxTQUFTOztjQUd4QixJQUFJLENBQUMsQ0FBQUosS0FBTSxHQUFHLElBQUlKLEtBQUEsQ0FBQVMsT0FBTyxFQUFFO2NBQzNCLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDM0MsTUFBTUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1QsSUFBSSxDQUFDO2dCQUFFWTtjQUFFLENBQUUsQ0FBQztjQUUvQyxJQUFJLENBQUMsQ0FBQUQsTUFBTyxHQUFHLENBQUMsQ0FBQ00sUUFBUSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQ1osUUFBQSxDQUFBYSxjQUFjLENBQUNDLE1BQU0sQ0FBQztjQUVoRSxJQUFJLENBQUMsQ0FBQVgsS0FBTSxHQUFHLENBQUMsQ0FBQ08sUUFBUSxDQUFDSyxNQUFNLElBQUlMLFFBQVEsQ0FBQ00sV0FBVztjQUN2RCxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO1lBQ2xCLENBQUM7WUFFREMsV0FBVyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLENBQUFoQixLQUFNLENBQUNFLE1BQU0sQ0FBQ0osUUFBQSxDQUFBYSxjQUFjLENBQUNNLElBQUksQ0FBQ0MsS0FBSyxDQUFDO1lBQzNELENBQUM7O1VBQ0R2QixPQUFBLENBQUFSLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2Q0QsSUFBQWdDLE1BQUEsR0FBQXZDLE9BQUE7VUFPTyxNQUFNd0MsWUFBWSxHQUFHRCxNQUFBLENBQUFFLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQW1CLENBQUM7VUFBQzNCLE9BQUEsQ0FBQXlCLFlBQUEsR0FBQUEsWUFBQTtVQUM5RCxNQUFNRyxlQUFlLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBRSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0osWUFBWSxDQUFDO1VBQUN6QixPQUFBLENBQUE0QixlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUnBFLElBQUFKLE1BQUEsR0FBQXZDLE9BQUE7VUFDQSxJQUFBNkMsUUFBQSxHQUFBN0MsT0FBQTtVQUVPLE1BQU04QyxTQUFTLEdBQUdBLENBQUEsS0FBSztZQUM3QixNQUFNO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQUYsZUFBZSxHQUFFO1lBQ25DLE9BQ0NKLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFlLEdBQzdCVixNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQTtjQUFLRSxHQUFHLEVBQUMsY0FBYztjQUFDQyxHQUFHLEVBQUM7WUFBMEIsRUFBRyxFQUN6RFosTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQWdCLEdBQy9CVixNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxhQUFLRCxLQUFLLENBQUNLLEtBQUssQ0FBQ0MsT0FBTyxDQUFNLEVBQzlCZCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxZQUNDVCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxpQkFBU0QsS0FBSyxDQUFDSyxLQUFLLENBQUNFLElBQUksQ0FBVSxFQUNuQ2YsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsWUFBTSxFQUNMRCxLQUFLLENBQUNLLEtBQUssQ0FBQ0csTUFBTSxDQUNoQixDQUNFLENBQ0Y7VUFFUixDQUFDO1VBQUN4QyxPQUFBLENBQUErQixTQUFBLEdBQUFBLFNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJGLElBQUFQLE1BQUEsR0FBQXZDLE9BQUE7VUFDQSxJQUFBd0QsZUFBQSxHQUFBeEQsT0FBQTtVQUNBLElBQUF5RCxNQUFBLEdBQUF6RCxPQUFBO1VBQ0EsSUFBQTBELE9BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUE2QyxRQUFBLEdBQUE3QyxPQUFBO1VBQ0EsSUFBQTRELFFBQUEsR0FBQTVELE9BQUE7VUFDQSxJQUFBNkQsVUFBQSxHQUFBN0QsT0FBQTtVQUVPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQUU7WUFDdEIsTUFBTSxDQUFDOEIsS0FBSyxFQUFFMkIsUUFBUSxDQUFDLEdBQUd2QixNQUFBLENBQUFFLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBQzFELEtBQUssQ0FBQzhCLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUM2QixVQUFVLEVBQUVqQixLQUFLLENBQUMsR0FBRyxJQUFBVyxPQUFBLENBQUFPLFFBQVEsRUFBQ1QsZUFBQSxDQUFBVSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUV0RCxJQUFBVixNQUFBLENBQUFXLFNBQVMsRUFBQyxDQUFDL0QsS0FBSyxDQUFDLEVBQUUsTUFBTXlELFFBQVEsQ0FBQ3pELEtBQUssQ0FBQzhCLEtBQUssQ0FBQyxDQUFDO1lBRS9DLElBQUksQ0FBQ0EsS0FBSyxJQUFJLENBQUM2QixVQUFVLEVBQUUsT0FBT3pCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLENBQUNXLFdBQUEsQ0FBQVUsYUFBYSxPQUFHO1lBRW5ELE1BQU1DLE9BQU8sR0FBRyxDQUFDakUsS0FBSyxDQUFDZ0IsS0FBSyxHQUFHd0MsVUFBQSxDQUFBZixTQUFTLEdBQUdjLFFBQUEsQ0FBQW5CLE9BQVk7WUFDdkQsT0FDQ0YsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsQ0FBQ0gsUUFBQSxDQUFBTCxZQUFZLENBQUMrQixRQUFRO2NBQUNDLEtBQUssRUFBRTtnQkFBRXpCLEtBQUs7Z0JBQUUxQztjQUFLO1lBQUUsR0FDN0NrQyxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxDQUFDc0IsT0FBTyxPQUFHLENBQ1k7VUFFMUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUEvQixNQUFBLEdBQUF2QyxPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBeUUsUUFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUFrQixRQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQTZDLFFBQUEsR0FBQTdDLE9BQUE7VUFFYyxTQUFVMEUsWUFBWUEsQ0FBQTtZQUNuQyxNQUFNO2NBQUUzQixLQUFLO2NBQUUxQztZQUFLLENBQUUsR0FBRyxJQUFBd0MsUUFBQSxDQUFBRixlQUFlLEdBQUU7WUFDMUMsTUFBTTtjQUFFdkI7WUFBSyxDQUFFLEdBQUdmLEtBQUs7WUFDdkIsTUFBTSxDQUFDc0UsVUFBVSxFQUFFQyxXQUFXLENBQUMsR0FBR3JDLE1BQUEsQ0FBQUUsT0FBSyxDQUFDc0IsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNLENBQUNjLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUd2QyxNQUFBLENBQUFFLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTWdCLFdBQVcsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDOUIsSUFBSTtnQkFDSEgsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTWhELFFBQVEsR0FBRyxNQUFNVixRQUFBLENBQUFhLGNBQWMsQ0FBQ2lELGdCQUFnQixFQUFFO2dCQUN4RCxJQUFJLENBQUNwRCxRQUFRLENBQUNxRCxNQUFNLEVBQUU7a0JBQ3JCLE1BQU07b0JBQUVKO2tCQUFLLENBQUUsR0FBR2pELFFBQVE7a0JBQzFCLElBQUlpRCxLQUFLLEtBQUssc0JBQXNCLEVBQUU7b0JBQ3JDRCxXQUFXLENBQUMsS0FBSyxDQUFDO21CQUNsQixNQUFNO29CQUNORSxRQUFRLENBQUMsbUNBQW1DLENBQUM7O2tCQUU5Qzs7Z0JBRURJLFdBQVcsRUFBRTtlQUNiLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNQLEtBQUssQ0FBQ00sQ0FBQyxDQUFDRSxPQUFPLENBQUM7O1lBRTFCLENBQUM7WUFDRCxNQUFNSCxXQUFXLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzlCLElBQUk7Z0JBQ0gsSUFBSTdFLEtBQUssQ0FBQ2lCLE1BQU0sRUFBRTtnQkFFbEJzRCxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNaEQsUUFBUSxHQUFHLE1BQU12QixLQUFLLENBQUMrQixXQUFXLEVBQUU7Z0JBQzFDd0MsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbEIsSUFBSSxDQUFDaEQsUUFBUSxDQUFDcUQsTUFBTSxFQUFFO2tCQUNyQkcsT0FBTyxDQUFDUCxLQUFLLENBQUNqRCxRQUFRLENBQUN5RCxPQUFPLENBQUM7a0JBQy9COztnQkFHRFosUUFBQSxDQUFBYSxPQUFPLENBQUNDLFNBQVMsQ0FBQyxTQUFTM0QsUUFBUSxDQUFDNEQsSUFBSSxDQUFDQyxNQUFNLEVBQUUsQ0FBQztlQUNsRCxDQUFDLE9BQU9OLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDUCxLQUFLLENBQUNNLENBQUMsQ0FBQ0UsT0FBTyxDQUFDOztZQUUxQixDQUFDO1lBRUQsTUFBTUssS0FBSyxHQUFHckYsS0FBSyxDQUFDaUIsTUFBTSxHQUN6QmlCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLENBQUFULE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0QsUUFBQSxRQUNDcEQsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsYUFBSzVCLEtBQUssQ0FBQ2EsTUFBTSxDQUFDMkQsSUFBSSxDQUFDQyxXQUFXLEVBQUUsQ0FBTSxFQUMxQ3RELE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLGlCQUFTRCxLQUFLLENBQUMrQyxRQUFRLENBQVUsQ0FDL0IsR0FFSHZELE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLENBQUFULE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0QsUUFBQSxRQUNDcEQsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsYUFBS0QsS0FBSyxDQUFDTSxPQUFPLENBQU0sRUFDeEJkLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLFlBQ0NULE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLGlCQUFTNUIsS0FBSyxDQUFDYSxNQUFNLENBQUMyRCxJQUFJLENBQUNDLFdBQVcsRUFBRSxFLElBQVcsRUFDbEQ5QyxLQUFLLENBQUNnRCxNQUFNLEVBQ2J4RCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxZQUFNLEVBQ0xELEtBQUssQ0FBQ2lELElBQUksQ0FDUixDQUVMO1lBRUQsSUFBSUMsT0FBTyxHQUFHekUsU0FBUztZQUN2QixJQUFJLENBQUNuQixLQUFLLENBQUNpQixNQUFNLEVBQUU7Y0FDbEIyRSxPQUFPLEdBQUcsQ0FBQy9FLFFBQUEsQ0FBQWEsY0FBYyxDQUFDbUUsTUFBTSxHQUMvQjNELE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLENBQUNXLFdBQUEsQ0FBQXdDLE1BQU07Z0JBQUNDLElBQUksRUFBQyxRQUFRO2dCQUFDQyxPQUFPLEVBQUV0QixXQUFXO2dCQUFFdUIsT0FBTyxFQUFFM0IsVUFBVTtnQkFBRTRCLEtBQUssRUFBQztjQUFnQixFQUFHLEdBRTFGaEUsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsQ0FBQ1csV0FBQSxDQUFBd0MsTUFBTTtnQkFBQ0ssT0FBTyxFQUFDLFNBQVM7Z0JBQUNILE9BQU8sRUFBRW5CLFdBQVc7Z0JBQUVrQixJQUFJLEVBQUMsTUFBTTtnQkFBQ0UsT0FBTyxFQUFFM0IsVUFBVTtnQkFBRTRCLEtBQUssRUFBRXhELEtBQUssQ0FBQ1E7Y0FBTSxFQUNwRzs7WUFHRixPQUNDaEIsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JWLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBO2NBQUtFLEdBQUcsRUFBQyxjQUFjO2NBQUNDLEdBQUcsRUFBQztZQUEwQixFQUFHLEVBQ3pEWixNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ5QyxLQUFLLEVBQ0xPLE9BQU8sQ0FDRixDQUNGO1VBRVIifQ==