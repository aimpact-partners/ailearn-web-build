System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.11/model/gclassroom", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.37/components", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0011ModelGclassroom) {
      dependency_7 = _aimpactAilearnApp0011ModelGclassroom;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_9 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_10 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi0037Components) {
      dependency_12 = _pragmateUi0037Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/sessions/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@aimpact/chat/shared/hooks', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/kernel/routing', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-sessions-access",
        "vspecifier": "@aimpact/ailearn-app@0.0.11/sessions/access.widget",
        "is": "page",
        "route": "/sessions/access/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.11/sessions/access.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUVPO1VBQVUsTUFDWEEsVUFBVyxTQUFRQywrQkFBeUI7WUFDakQsTUFBTTtZQUVOQyxXQUFXO2NBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJQyxtQkFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFDQSxJQUFJQyxNQUFNO2NBQ1QsT0FBT0MsV0FBSTtZQUNaO1lBRUFDLElBQUk7Y0FDSCxJQUFJLENBQUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDOztVQUNBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkQ7VUFDQTtVQUNBO1VBR00sTUFBT1IsWUFBYSxTQUFRUyxvQkFBcUI7WUFDdEQsTUFBTTtZQUNOLElBQUlDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUEsTUFBTTtZQUNOLElBQUlDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUEsT0FBTztZQUNQLElBQUlDLE1BQU07Y0FDVCxPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3BCO1lBRUFSLElBQUksR0FBRyxNQUFPUyxFQUFVLElBQUk7Y0FDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUNBLEVBQUUsS0FBS0EsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHQyxTQUFTOztjQUd4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUlDLGFBQU8sRUFBRTtjQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzNDLE1BQU1DLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUNkLElBQUksQ0FBQztnQkFBRVM7Y0FBRSxDQUFFLENBQUM7Y0FFL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUNLLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUNDLHVCQUFjLENBQUNDLE1BQU0sQ0FBQztjQUVoRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQ0osUUFBUSxDQUFDSyxNQUFNLElBQUlMLFFBQVEsQ0FBQ00sV0FBVztjQUN2RCxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO1lBQ2xCLENBQUM7WUFFREMsV0FBVyxHQUFHLFlBQVc7Y0FDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUNkLE1BQU0sQ0FBQ1MsdUJBQWMsQ0FBQ00sSUFBSSxDQUFDQyxLQUFLLENBQUM7WUFDM0QsQ0FBQzs7VUFDRHBCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RDRDtVQUNBO1VBRU0sTUFBT1IsWUFBYSxTQUFRUyxvQkFBMkI7WUFDNURvQjtjQUNDLEtBQUssRUFBRTtjQUVQQyxzQkFBVSxDQUFDZCxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO1lBQzNDO1lBRUEsSUFBSWMsS0FBSztjQUNSLE9BQU9ELHNCQUFVLENBQUNDLEtBQUs7WUFDeEI7WUFFQSxJQUFJRCxVQUFVO2NBQ2IsT0FBT0Esc0JBQVU7WUFDbEI7WUFDQSxNQUFNRSxRQUFRLENBQUNDLEtBQUssRUFBRUMsSUFBSTtjQUN6QixJQUFJO2dCQUNILElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1MLHNCQUFVLENBQUNNLFFBQVEsQ0FBQ0gsS0FBSyxFQUFFQyxJQUFJLENBQUM7Z0JBQ3RDLElBQUksQ0FBQ0MsUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLElBQUksQ0FBQ1YsS0FBSyxHQUFHLElBQUk7ZUFDakIsQ0FBQyxPQUFPWSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ1AsS0FBSyxDQUFDTSxDQUFDLENBQUM7O1lBRWxCOztVQUNBN0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJEO1VBT08sTUFBTStCLFlBQVksR0FBR0MsY0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBbUIsQ0FBQztVQUFDakM7VUFDOUQsTUFBTWtDLGVBQWUsR0FBRyxNQUFNRixjQUFLLENBQUNHLFVBQVUsQ0FBQ0osWUFBWSxDQUFDO1VBQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNScEU7VUFDQTtVQUVPLE1BQU1vQyxTQUFTLEdBQUcsTUFBSztZQUM3QixNQUFNO2NBQUVDO1lBQUssQ0FBRSxHQUFHLDRCQUFlLEdBQUU7WUFDbkMsT0FDQ0w7Y0FBS00sU0FBUyxFQUFDO1lBQWUsR0FDN0JOO2NBQUtPLEdBQUcsRUFBQyxjQUFjO2NBQUNDLEdBQUcsRUFBQztZQUEwQixFQUFHLEVBQ3pEUjtjQUFNTSxTQUFTLEVBQUM7WUFBZ0IsR0FDL0JOLHlDQUFLSyxLQUFLLENBQUNJLEtBQUssQ0FBQ0MsT0FBTyxDQUFNLEVBQzlCVix3Q0FDQ0EsNkNBQVNLLEtBQUssQ0FBQ0ksS0FBSyxDQUFDRSxJQUFJLENBQVUsRUFDbkNYLHdDQUFNLEVBQ0xLLEtBQUssQ0FBQ0ksS0FBSyxDQUFDRyxNQUFNLENBQ2hCLENBQ0UsQ0FDRjtVQUVSLENBQUM7VUFBQzVDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCRjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU87VUFBVSxTQUNSTixJQUFJLENBQUM7WUFBRW1EO1VBQUssQ0FBRTtZQUN0QixNQUFNLENBQUM1QixLQUFLLEVBQUU2QixRQUFRLENBQUMsR0FBR2QsY0FBSyxDQUFDZSxRQUFRLENBQUNGLEtBQUssQ0FBQzVCLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUMrQixVQUFVLEVBQUVYLEtBQUssQ0FBQyxHQUFHLG9CQUFRLEVBQUNZLHNCQUFNLENBQUNDLFNBQVMsQ0FBQztZQUV0RCxvQkFBUyxFQUFDLENBQUNMLEtBQUssQ0FBQyxFQUFFLE1BQU1DLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDNUIsS0FBSyxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBQytCLFVBQVUsRUFBRSxPQUFPaEIsNkJBQUNtQix5QkFBYSxPQUFHO1lBRW5ELE1BQU1DLE9BQU8sR0FBRyxDQUFDUCxLQUFLLENBQUMxQyxLQUFLLEdBQUdpQyxvQkFBUyxHQUFHaUIsZ0JBQVk7WUFDdkQsT0FDQ3JCLDZCQUFDRCxxQkFBWSxDQUFDdUIsUUFBUTtjQUFDQyxLQUFLLEVBQUU7Z0JBQUVsQixLQUFLO2dCQUFFUTtjQUFLO1lBQUUsR0FDN0NiLDZCQUFDb0IsT0FBTyxPQUFHLENBQ1k7VUFFMUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFYyxTQUFVQyxZQUFZO1lBQ25DLE1BQU07Y0FBRWhCLEtBQUs7Y0FBRVE7WUFBSyxDQUFFLEdBQUcsNEJBQWUsR0FBRTtZQUMxQyxNQUFNO2NBQUUzQztZQUFLLENBQUUsR0FBRzJDLEtBQUs7WUFDdkIsTUFBTSxDQUFDVyxVQUFVLEVBQUVDLFdBQVcsQ0FBQyxHQUFHekIsY0FBSyxDQUFDZSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZELE1BQU0sQ0FBQ3hCLEtBQUssRUFBRW1DLFFBQVEsQ0FBQyxHQUFHMUIsY0FBSyxDQUFDZSxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLE1BQU1ZLFdBQVcsR0FBRyxZQUFXO2NBQzlCLElBQUk7Z0JBQ0hGLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0vQyxRQUFRLEdBQUcsTUFBTUcsdUJBQWMsQ0FBQytDLGdCQUFnQixFQUFFO2dCQUN4RCxJQUFJLENBQUNsRCxRQUFRLENBQUNtRCxNQUFNLEVBQUU7a0JBQ3JCLE1BQU07b0JBQUV0QztrQkFBSyxDQUFFLEdBQUdiLFFBQVE7a0JBQzFCLElBQUlhLEtBQUssS0FBSyxzQkFBc0IsRUFBRTtvQkFDckNrQyxXQUFXLENBQUMsS0FBSyxDQUFDO21CQUNsQixNQUFNO29CQUNOQyxRQUFRLENBQUMsbUNBQW1DLENBQUM7O2tCQUU5Qzs7Z0JBRURJLFdBQVcsRUFBRTtlQUNiLENBQUMsT0FBT2pDLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDUCxLQUFLLENBQUNNLENBQUMsQ0FBQ2tDLE9BQU8sQ0FBQzs7WUFFMUIsQ0FBQztZQUNELE1BQU1ELFdBQVcsR0FBRyxZQUFXO2NBQzlCLElBQUk7Z0JBQ0gsSUFBSWpCLEtBQUssQ0FBQ3pDLE1BQU0sRUFBRTtnQkFFbEJxRCxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNL0MsUUFBUSxHQUFHLE1BQU1tQyxLQUFLLENBQUMzQixXQUFXLEVBQUU7Z0JBQzFDdUMsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbEIsSUFBSSxDQUFDL0MsUUFBUSxDQUFDbUQsTUFBTSxFQUFFO2tCQUNyQi9CLE9BQU8sQ0FBQ1AsS0FBSyxDQUFDYixRQUFRLENBQUNxRCxPQUFPLENBQUM7a0JBQy9COztnQkFHREMsZ0JBQU8sQ0FBQ0MsU0FBUyxDQUFDLFNBQVN2RCxRQUFRLENBQUN3RCxJQUFJLENBQUNDLE1BQU0sRUFBRSxDQUFDO2VBQ2xELENBQUMsT0FBT3RDLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDUCxLQUFLLENBQUNNLENBQUMsQ0FBQ2tDLE9BQU8sQ0FBQzs7WUFFMUIsQ0FBQztZQUVELE1BQU1LLEtBQUssR0FBR3ZCLEtBQUssQ0FBQ3pDLE1BQU0sR0FDekI0Qiw0REFDQ0EseUNBQUs5QixLQUFLLENBQUNhLE1BQU0sQ0FBQ3NELElBQUksQ0FBQ0MsV0FBVyxFQUFFLENBQU0sRUFDMUN0Qyw2Q0FBU0ssS0FBSyxDQUFDa0MsUUFBUSxDQUFVLENBQy9CLEdBRUh2Qyw0REFDQ0EseUNBQUtLLEtBQUssQ0FBQ0ssT0FBTyxDQUFNLEVBQ3hCVix3Q0FDQ0EsNkNBQVM5QixLQUFLLENBQUNhLE1BQU0sQ0FBQ3NELElBQUksQ0FBQ0MsV0FBVyxFQUFFLE1BQVcsRUFDbERqQyxLQUFLLENBQUNtQyxNQUFNLEVBQ2J4Qyx3Q0FBTSxFQUNMSyxLQUFLLENBQUNvQyxJQUFJLENBQ1IsQ0FFTDtZQUVELElBQUlDLE9BQU8sR0FBR3BFLFNBQVM7WUFDdkIsSUFBSSxDQUFDdUMsS0FBSyxDQUFDekMsTUFBTSxFQUFFO2NBQ2xCc0UsT0FBTyxHQUFHLENBQUM3RCx1QkFBYyxDQUFDOEQsTUFBTSxHQUMvQjNDLDZCQUFDNEMsa0JBQU07Z0JBQUNDLElBQUksRUFBQyxRQUFRO2dCQUFDQyxPQUFPLEVBQUVuQixXQUFXO2dCQUFFb0IsT0FBTyxFQUFFdkIsVUFBVTtnQkFBRXdCLEtBQUssRUFBQztjQUFnQixFQUFHLEdBRTFGaEQsNkJBQUM0QyxrQkFBTTtnQkFBQ0ssT0FBTyxFQUFDLFNBQVM7Z0JBQUNILE9BQU8sRUFBRWhCLFdBQVc7Z0JBQUVlLElBQUksRUFBQyxNQUFNO2dCQUFDRSxPQUFPLEVBQUV2QixVQUFVO2dCQUFFd0IsS0FBSyxFQUFFM0MsS0FBSyxDQUFDTztjQUFNLEVBQ3BHOztZQUdGLE9BQ0NaO2NBQUtNLFNBQVMsRUFBQztZQUFlLEdBQzdCTjtjQUFLTyxHQUFHLEVBQUMsY0FBYztjQUFDQyxHQUFHLEVBQUM7WUFBMEIsRUFBRyxFQUN6RFI7Y0FBTU0sU0FBUyxFQUFDO1lBQWdCLEdBQzlCOEIsS0FBSyxFQUNMTSxPQUFPLENBQ0YsQ0FDRjtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiZm91bmQiLCJhY2Nlc3MiLCJpZCIsInVuZGVmaW5lZCIsIlNlc3Npb24iLCJvbiIsInRyaWdnZXJFdmVudCIsInJlc3BvbnNlIiwidXNlcnMiLCJpbmNsdWRlcyIsInNlc3Npb25XcmFwcGVyIiwidXNlcklkIiwibGVzc29uIiwiY2xhc3NSb29tSWQiLCJyZWFkeSIsImNyZWF0ZUNoYXRzIiwidXNlciIsInRva2VuIiwiY29uc3RydWN0b3IiLCJnY2xhc3Nyb29tIiwiZXJyb3IiLCJ2YWxpZGF0ZSIsInN0YXRlIiwiY29kZSIsImZldGNoaW5nIiwiY2FsbGJhY2siLCJlIiwiY29uc29sZSIsIlNoYXJlQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVNoYXJlQ29udGV4dCIsInVzZUNvbnRleHQiLCJFbXB0eVZpZXciLCJ0ZXh0cyIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsImVtcHR5Iiwid2VsY29tZSIsImluZm8iLCJhY3Rpb24iLCJzdG9yZSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiUHJlbG9hZFNjcmVlbiIsIkNvbnRyb2wiLCJTaGFyZUxhbmRpbmciLCJQcm92aWRlciIsInZhbHVlIiwiaXNGZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJnb29nbGVMb2dpbiIsInNpZ25JbldpdGhHb29nbGUiLCJzdGF0dXMiLCJoYW5kbGVDbGljayIsIm1lc3NhZ2UiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZGF0YSIsImNoYXRJZCIsInRpdGxlIiwibmFtZSIsInRvVXBwZXJDYXNlIiwiYWNjZXNzZWQiLCJzaGFyZWQiLCJzYXZlIiwiYnV0dG9ucyIsImxvZ2dlZCIsIkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwibG9hZGluZyIsImxhYmVsIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy92aWV3cy9fY29udGV4dC50cyIsInRzL3ZpZXdzL2VtcHR5LXZpZXcudHN4IiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3MvbGFuZGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=