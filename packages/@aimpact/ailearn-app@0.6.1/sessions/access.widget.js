System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.2.0/core", "@beyond-js/reactive@2.1.1/model", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.6.1/model/gclassroom", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.6.1/components/ui", "pragmate-ui@1.0.8/components", "@beyond-js/kernel@0.1.12/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnSdk120Core) {
      dependency_4 = _aimpactAilearnSdk120Core;
    }, function (_beyondJsReactive211Model) {
      dependency_5 = _beyondJsReactive211Model;
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnApp061ModelGclassroom) {
      dependency_7 = _aimpactAilearnApp061ModelGclassroom;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_9 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_10 = _aimpactAilearnApp061ComponentsUi;
    }, function (_pragmateUi108Components) {
      dependency_11 = _pragmateUi108Components;
    }, function (_beyondJsKernel0112Routing) {
      dependency_12 = _beyondJsKernel0112Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.13.16"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/sessions/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/kernel/routing', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-sessions-access",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/sessions/access.widget",
        "is": "page",
        "route": "/sessions/access/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/sessions/access.widget');
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
        hash: 3693543924,
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
              this.#access = !!response.users?.includes(_session.sessionWrapper.user?.id);
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
        hash: 1510800734,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./_context");
          var _landing = require("./landing");
          var _emptyView = require("./empty-view");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJmb3VuZCIsImFjY2VzcyIsImlkIiwidW5kZWZpbmVkIiwiU2Vzc2lvbiIsIm9uIiwidHJpZ2dlckV2ZW50IiwicmVzcG9uc2UiLCJ1c2VycyIsImluY2x1ZGVzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwibGVzc29uIiwiY2xhc3NSb29tSWQiLCJyZWFkeSIsImNyZWF0ZUNoYXRzIiwidG9rZW4iLCJfZ2NsYXNzcm9vbSIsImNvbnN0cnVjdG9yIiwiZ2NsYXNzcm9vbSIsImVycm9yIiwidmFsaWRhdGUiLCJzdGF0ZSIsImNvZGUiLCJmZXRjaGluZyIsImNhbGxiYWNrIiwiZSIsImNvbnNvbGUiLCJfcmVhY3QiLCJTaGFyZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZVNoYXJlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIkVtcHR5VmlldyIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsImVtcHR5Iiwid2VsY29tZSIsImluZm8iLCJhY3Rpb24iLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfdWkiLCJfbGFuZGluZyIsIl9lbXB0eVZpZXciLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsIkNvbnRyb2wiLCJQcm92aWRlciIsInZhbHVlIiwiX2NvbXBvbmVudHMiLCJfcm91dGluZyIsIlNoYXJlTGFuZGluZyIsImlzRmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwiZ29vZ2xlTG9naW4iLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwiaGFuZGxlQ2xpY2siLCJtZXNzYWdlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImRhdGEiLCJjaGF0SWQiLCJ0aXRsZSIsIkZyYWdtZW50IiwibmFtZSIsInRvVXBwZXJDYXNlIiwiYWNjZXNzZWQiLCJzaGFyZWQiLCJzYXZlIiwiYnV0dG9ucyIsImxvZ2dlZCIsIkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwibG9hZGluZyIsImxhYmVsIiwidmFyaWFudCJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3N0b3JlL2luZGV4LnRzIiwiLy90cy92aWV3cy9fY29udGV4dC50cyIsIi8vdHMvdmlld3MvZW1wdHktdmlldy50c3giLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbGFuZGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQzs7VUFDQUMsT0FBQSxDQUFBWixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJELElBQUFhLEtBQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBaUIsTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUFrQixRQUFBLEdBQUFsQixPQUFBO1VBR00sTUFBT08sWUFBYSxTQUFRVSxNQUFBLENBQUFFLGFBQXFCO1lBQ3RELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBWCxJQUFJLEdBQUcsTUFBT1ksRUFBVSxJQUFJO2NBQzNCLElBQUksSUFBSSxDQUFDLENBQUFILEtBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQUEsS0FBTSxDQUFDRyxFQUFFLEtBQUtBLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxDQUFDLENBQUFILEtBQU0sR0FBR0ksU0FBUzs7Y0FHeEIsSUFBSSxDQUFDLENBQUFKLEtBQU0sR0FBRyxJQUFJSixLQUFBLENBQUFTLE9BQU8sRUFBRTtjQUMzQixJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzNDLE1BQU1DLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBUixLQUFNLENBQUNULElBQUksQ0FBQztnQkFBRVk7Y0FBRSxDQUFFLENBQUM7Y0FFL0MsSUFBSSxDQUFDLENBQUFELE1BQU8sR0FBRyxDQUFDLENBQUNNLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUNaLFFBQUEsQ0FBQWEsY0FBYyxDQUFDQyxJQUFJLEVBQUVULEVBQUUsQ0FBQztjQUVsRSxJQUFJLENBQUMsQ0FBQUYsS0FBTSxHQUFHLENBQUMsQ0FBQ08sUUFBUSxDQUFDSyxNQUFNLElBQUlMLFFBQVEsQ0FBQ00sV0FBVztjQUN2RCxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO1lBQ2xCLENBQUM7WUFFREMsV0FBVyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLENBQUFoQixLQUFNLENBQUNFLE1BQU0sQ0FBQ0osUUFBQSxDQUFBYSxjQUFjLENBQUNDLElBQUksQ0FBQ0ssS0FBSyxDQUFDO1lBQzNELENBQUM7O1VBQ0R0QixPQUFBLENBQUFSLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0QsSUFBQVUsTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUFzQyxXQUFBLEdBQUF0QyxPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRVSxNQUFBLENBQUFFLGFBQTJCO1lBQzVEb0IsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUVQRCxXQUFBLENBQUFFLFVBQVUsQ0FBQ2QsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztZQUMzQztZQUVBLElBQUljLEtBQUtBLENBQUE7Y0FDUixPQUFPSCxXQUFBLENBQUFFLFVBQVUsQ0FBQ0MsS0FBSztZQUN4QjtZQUVBLElBQUlELFVBQVVBLENBQUE7Y0FDYixPQUFPRixXQUFBLENBQUFFLFVBQVU7WUFDbEI7WUFDQSxNQUFNRSxRQUFRQSxDQUFDQyxLQUFLLEVBQUVDLElBQUk7Y0FDekIsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNUCxXQUFBLENBQUFFLFVBQVUsQ0FBQ00sUUFBUSxDQUFDSCxLQUFLLEVBQUVDLElBQUksQ0FBQztnQkFDdEMsSUFBSSxDQUFDQyxRQUFRLEdBQUcsS0FBSztnQkFDckIsSUFBSSxDQUFDVixLQUFLLEdBQUcsSUFBSTtlQUNqQixDQUFDLE9BQU9ZLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDUCxLQUFLLENBQUNNLENBQUMsQ0FBQzs7WUFFbEI7O1VBQ0FoQyxPQUFBLENBQUFSLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkQsSUFBQTBDLE1BQUEsR0FBQWpELE9BQUE7VUFPTyxNQUFNa0QsWUFBWSxHQUFBbkMsT0FBQSxDQUFBbUMsWUFBQSxHQUFHRCxNQUFBLENBQUFFLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQW1CLENBQUM7VUFDN0QsTUFBTUMsZUFBZSxHQUFHQSxDQUFBLEtBQU1KLE1BQUEsQ0FBQUUsT0FBSyxDQUFDRyxVQUFVLENBQUNKLFlBQVksQ0FBQztVQUFDbkMsT0FBQSxDQUFBc0MsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JwRSxJQUFBSixNQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQXVELFFBQUEsR0FBQXZELE9BQUE7VUFFTyxNQUFNd0QsU0FBUyxHQUFHQSxDQUFBLEtBQUs7WUFDN0IsTUFBTTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFGLGVBQWUsR0FBRTtZQUNuQyxPQUNDSixNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QlYsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUE7Y0FBS0UsR0FBRyxFQUFDLGNBQWM7Y0FBQ0MsR0FBRyxFQUFDO1lBQTBCLEVBQUcsRUFDekRaLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFnQixHQUMvQlYsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsYUFBS0QsS0FBSyxDQUFDSyxLQUFLLENBQUNDLE9BQU8sQ0FBTSxFQUM5QmQsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsWUFDQ1QsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsaUJBQVNELEtBQUssQ0FBQ0ssS0FBSyxDQUFDRSxJQUFJLENBQVUsRUFDbkNmLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLFlBQU0sRUFDTEQsS0FBSyxDQUFDSyxLQUFLLENBQUNHLE1BQU0sQ0FDaEIsQ0FDRSxDQUNGO1VBRVIsQ0FBQztVQUFDbEQsT0FBQSxDQUFBeUMsU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCRixJQUFBUCxNQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQWtFLE1BQUEsR0FBQWxFLE9BQUE7VUFDQSxJQUFBbUUsZUFBQSxHQUFBbkUsT0FBQTtVQUdBLElBQUFvRSxHQUFBLEdBQUFwRSxPQUFBO1VBQ0EsSUFBQXVELFFBQUEsR0FBQXZELE9BQUE7VUFDQSxJQUFBcUUsUUFBQSxHQUFBckUsT0FBQTtVQUNBLElBQUFzRSxVQUFBLEdBQUF0RSxPQUFBO1VBRU87VUFBVSxTQUNSUyxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBRTtZQUN0QixNQUFNLENBQUM4QixLQUFLLEVBQUVvQyxRQUFRLENBQUMsR0FBR3RCLE1BQUEsQ0FBQUUsT0FBSyxDQUFDcUIsUUFBUSxDQUFDbkUsS0FBSyxDQUFDOEIsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ3NDLFVBQVUsRUFBRWhCLEtBQUssQ0FBQyxHQUFHLElBQUFTLE1BQUEsQ0FBQVEsUUFBUSxFQUFDUCxlQUFBLENBQUFRLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBRXRELElBQUFWLE1BQUEsQ0FBQVcsU0FBUyxFQUFDLENBQUN4RSxLQUFLLENBQUMsRUFBRSxNQUFNa0UsUUFBUSxDQUFDbEUsS0FBSyxDQUFDOEIsS0FBSyxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBQ3NDLFVBQVUsRUFBRSxPQUFPeEIsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsQ0FBQ1UsR0FBQSxDQUFBVSxVQUFVO2NBQUNqQyxRQUFRLEVBQUU7WUFBSSxFQUFJO1lBRWhFLE1BQU1rQyxPQUFPLEdBQUcsQ0FBQzFFLEtBQUssQ0FBQ2dCLEtBQUssR0FBR2lELFVBQUEsQ0FBQWQsU0FBUyxHQUFHYSxRQUFBLENBQUFsQixPQUFZO1lBQ3ZELE9BQ0NGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLENBQUNILFFBQUEsQ0FBQUwsWUFBWSxDQUFDOEIsUUFBUTtjQUFDQyxLQUFLLEVBQUU7Z0JBQUV4QixLQUFLO2dCQUFFcEQ7Y0FBSztZQUFFLEdBQzdDNEMsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsQ0FBQ3FCLE9BQU8sT0FBRyxDQUNZO1VBRTFCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBOUIsTUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFrRixXQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQW1GLFFBQUEsR0FBQW5GLE9BQUE7VUFDQSxJQUFBa0IsUUFBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUF1RCxRQUFBLEdBQUF2RCxPQUFBO1VBRWMsU0FBVW9GLFlBQVlBLENBQUE7WUFDbkMsTUFBTTtjQUFFM0IsS0FBSztjQUFFcEQ7WUFBSyxDQUFFLEdBQUcsSUFBQWtELFFBQUEsQ0FBQUYsZUFBZSxHQUFFO1lBQzFDLE1BQU07Y0FBRWpDO1lBQUssQ0FBRSxHQUFHZixLQUFLO1lBQ3ZCLE1BQU0sQ0FBQ2dGLFVBQVUsRUFBRUMsV0FBVyxDQUFDLEdBQUdyQyxNQUFBLENBQUFFLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTSxDQUFDL0IsS0FBSyxFQUFFOEMsUUFBUSxDQUFDLEdBQUd0QyxNQUFBLENBQUFFLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTWdCLFdBQVcsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDOUIsSUFBSTtnQkFDSEYsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTTFELFFBQVEsR0FBRyxNQUFNVixRQUFBLENBQUFhLGNBQWMsQ0FBQzBELGdCQUFnQixFQUFFO2dCQUN4RCxJQUFJLENBQUM3RCxRQUFRLENBQUM4RCxNQUFNLEVBQUU7a0JBQ3JCLE1BQU07b0JBQUVqRDtrQkFBSyxDQUFFLEdBQUdiLFFBQVE7a0JBQzFCLElBQUlhLEtBQUssS0FBSyxzQkFBc0IsRUFBRTtvQkFDckM2QyxXQUFXLENBQUMsS0FBSyxDQUFDO21CQUNsQixNQUFNO29CQUNOQyxRQUFRLENBQUMsbUNBQW1DLENBQUM7O2tCQUU5Qzs7Z0JBRURJLFdBQVcsRUFBRTtlQUNiLENBQUMsT0FBTzVDLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDUCxLQUFLLENBQUNNLENBQUMsQ0FBQzZDLE9BQU8sQ0FBQzs7WUFFMUIsQ0FBQztZQUNELE1BQU1ELFdBQVcsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDOUIsSUFBSTtnQkFDSCxJQUFJdEYsS0FBSyxDQUFDaUIsTUFBTSxFQUFFO2dCQUVsQmdFLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0xRCxRQUFRLEdBQUcsTUFBTXZCLEtBQUssQ0FBQytCLFdBQVcsRUFBRTtnQkFDMUNrRCxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNsQixJQUFJLENBQUMxRCxRQUFRLENBQUM4RCxNQUFNLEVBQUU7a0JBQ3JCMUMsT0FBTyxDQUFDUCxLQUFLLENBQUNiLFFBQVEsQ0FBQ2dFLE9BQU8sQ0FBQztrQkFDL0I7O2dCQUdEVCxRQUFBLENBQUFVLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLFNBQVNsRSxRQUFRLENBQUNtRSxJQUFJLENBQUNDLE1BQU0sRUFBRSxDQUFDO2VBQ2xELENBQUMsT0FBT2pELENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDUCxLQUFLLENBQUNNLENBQUMsQ0FBQzZDLE9BQU8sQ0FBQzs7WUFFMUIsQ0FBQztZQUVELE1BQU1LLEtBQUssR0FBRzVGLEtBQUssQ0FBQ2lCLE1BQU0sR0FDekIyQixNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxDQUFBVCxNQUFBLENBQUFFLE9BQUEsQ0FBQStDLFFBQUEsUUFDQ2pELE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLGFBQUt0QyxLQUFLLENBQUNhLE1BQU0sQ0FBQ2tFLElBQUksQ0FBQ0MsV0FBVyxFQUFFLENBQU0sRUFDMUNuRCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxpQkFBU0QsS0FBSyxDQUFDNEMsUUFBUSxDQUFVLENBQy9CLEdBRUhwRCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxDQUFBVCxNQUFBLENBQUFFLE9BQUEsQ0FBQStDLFFBQUEsUUFDQ2pELE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLGFBQUtELEtBQUssQ0FBQ00sT0FBTyxDQUFNLEVBQ3hCZCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxZQUNDVCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxpQkFBU3RDLEtBQUssQ0FBQ2EsTUFBTSxDQUFDa0UsSUFBSSxDQUFDQyxXQUFXLEVBQUUsRSxJQUFXLEVBQ2xEM0MsS0FBSyxDQUFDNkMsTUFBTSxFQUNickQsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsWUFBTSxFQUNMRCxLQUFLLENBQUM4QyxJQUFJLENBQ1IsQ0FFTDtZQUVELElBQUlDLE9BQU8sR0FBR2hGLFNBQVM7WUFDdkIsSUFBSSxDQUFDbkIsS0FBSyxDQUFDaUIsTUFBTSxFQUFFO2NBQ2xCa0YsT0FBTyxHQUFHLENBQUN0RixRQUFBLENBQUFhLGNBQWMsQ0FBQzBFLE1BQU0sR0FDL0J4RCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxDQUFDd0IsV0FBQSxDQUFBd0IsTUFBTTtnQkFBQ0MsSUFBSSxFQUFDLFFBQVE7Z0JBQUNDLE9BQU8sRUFBRXBCLFdBQVc7Z0JBQUVxQixPQUFPLEVBQUV4QixVQUFVO2dCQUFFeUIsS0FBSyxFQUFDO2NBQWdCLEVBQUcsR0FFMUY3RCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxDQUFDd0IsV0FBQSxDQUFBd0IsTUFBTTtnQkFBQ0ssT0FBTyxFQUFDLFNBQVM7Z0JBQUNILE9BQU8sRUFBRWpCLFdBQVc7Z0JBQUVnQixJQUFJLEVBQUMsTUFBTTtnQkFBQ0UsT0FBTyxFQUFFeEIsVUFBVTtnQkFBRXlCLEtBQUssRUFBRXJELEtBQUssQ0FBQ1E7Y0FBTSxFQUNwRzs7WUFHRixPQUNDaEIsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JWLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBO2NBQUtFLEdBQUcsRUFBQyxjQUFjO2NBQUNDLEdBQUcsRUFBQztZQUEwQixFQUFHLEVBQ3pEWixNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJzQyxLQUFLLEVBQ0xPLE9BQU8sQ0FDRixDQUNGO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=