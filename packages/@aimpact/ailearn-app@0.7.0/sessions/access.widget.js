System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-sdk@1.2.0/core", "@beyond-js/reactive@2.1.2/model", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.7.0/model/gclassroom", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/components", "@beyond-js/kernel@0.1.14/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnSdk120Core) {
      dependency_4 = _aimpactAilearnSdk120Core;
    }, function (_beyondJsReactive212Model) {
      dependency_5 = _beyondJsReactive212Model;
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnApp070ModelGclassroom) {
      dependency_7 = _aimpactAilearnApp070ModelGclassroom;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_9 = _beyondJsReact18Widgets118Hooks;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_10 = _aimpactAilearnApp070ComponentsUi;
    }, function (_pragmateUi108Components) {
      dependency_11 = _pragmateUi108Components;
    }, function (_beyondJsKernel0114Routing) {
      dependency_12 = _beyondJsKernel0114Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/sessions/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/kernel/routing', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-sessions-access",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/sessions/access.widget",
        "is": "page",
        "route": "/sessions/access/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/sessions/access.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJmb3VuZCIsImFjY2VzcyIsImlkIiwidW5kZWZpbmVkIiwiU2Vzc2lvbiIsIm9uIiwidHJpZ2dlckV2ZW50IiwicmVzcG9uc2UiLCJ1c2VycyIsImluY2x1ZGVzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwibGVzc29uIiwiY2xhc3NSb29tSWQiLCJyZWFkeSIsImNyZWF0ZUNoYXRzIiwidG9rZW4iLCJfZ2NsYXNzcm9vbSIsImNvbnN0cnVjdG9yIiwiZ2NsYXNzcm9vbSIsImVycm9yIiwidmFsaWRhdGUiLCJzdGF0ZSIsImNvZGUiLCJmZXRjaGluZyIsImNhbGxiYWNrIiwiZSIsImNvbnNvbGUiLCJfcmVhY3QiLCJTaGFyZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZVNoYXJlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIkVtcHR5VmlldyIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsImVtcHR5Iiwid2VsY29tZSIsImluZm8iLCJhY3Rpb24iLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfdWkiLCJfbGFuZGluZyIsIl9lbXB0eVZpZXciLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsIkNvbnRyb2wiLCJQcm92aWRlciIsInZhbHVlIiwiX2NvbXBvbmVudHMiLCJfcm91dGluZyIsIlNoYXJlTGFuZGluZyIsImlzRmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwiZ29vZ2xlTG9naW4iLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwiaGFuZGxlQ2xpY2siLCJtZXNzYWdlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImRhdGEiLCJjaGF0SWQiLCJ0aXRsZSIsIkZyYWdtZW50IiwibmFtZSIsInRvVXBwZXJDYXNlIiwiYWNjZXNzZWQiLCJzaGFyZWQiLCJzYXZlIiwiYnV0dG9ucyIsImxvZ2dlZCIsIkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwibG9hZGluZyIsImxhYmVsIiwidmFyaWFudCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXdzL19jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LXZpZXcudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5kaW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtj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