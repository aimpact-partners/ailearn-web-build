System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/icons", "@aimpact/chat@1.0.1/shared/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_5 = _aimpactChatSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi003Link) {
      dependency_8 = _pragmateUi003Link;
    }, function (_pragmateUi003Components) {
      dependency_9 = _pragmateUi003Components;
    }, function (_pragmateUi003Icons) {
      dependency_10 = _pragmateUi003Icons;
    }, function (_aimpactChat101SharedIcons) {
      dependency_11 = _aimpactChat101SharedIcons;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_12 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.6"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.18"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.7"], ["socket.io-client", "4.7.2"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/documents/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/link', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/icons', dependency_10], ['@aimpact/chat/shared/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-documents-access",
        "vspecifier": "@aimpact/chat@1.0.1/documents/access.widget",
        "is": "page",
        "route": "/documents/access",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/documents/access.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 518706050,
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
            show() {
              this.#store.load(this.uri.qs.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 824522972,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/chat-sdk/core");
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
            load = async id => {
              if (this.#model && this.#model.id !== id) {
                this.#model = undefined;
              }
              this.#model = new _core.KnowledgeBox();
              this.#model.on('change', this.triggerEvent);
              const response = await this.#model.load({
                id
              });
              // TODO [reactive-0.0.1] @ftovar8 @jircdev model.found siempre viene undefined
              this.#found = !!response.data;
              this.ready = true;
            };
            createChat = async (kbId, name) => {
              const chat = new _core.Chat();
              const userId = _session.sessionWrapper.userId;
              let specs = {
                userId,
                knowledgeBoxId: kbId,
                name: `[SAVED] ${name}`
              };
              await chat.publish(specs);
              return {
                status: true,
                chat
              };
            };
            saveSharedFolder = async (kbId, name) => {
              try {
                const sharedFolders = JSON.parse(localStorage.getItem('sharedFolders')) || [];
                const found = sharedFolders.find(folder => folder.id === kbId);
                if (!found) {
                  sharedFolders.push({
                    id: kbId,
                    path: `[SAVED] ${name}`
                  });
                  localStorage.setItem('sharedFolders', JSON.stringify(sharedFolders));
                }
              } catch (error) {
                console.error(error);
              }
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/empty-view
      **********************************/

      ims.set('./views/empty-view', {
        hash: 927283083,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyView = void 0;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/shared/icons");
          const EmptyView = () => {
            return _react.default.createElement("div", {
              className: 'access__folder'
            }, _react.default.createElement("img", {
              alt: 'Shared folder',
              src: '/assets/shared-folder.png'
            }), _react.default.createElement("span", {
              className: 'access-details'
            }, _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'acccess__ailogo'
            }), _react.default.createElement("h1", null, "Welcome to AIM Chat"), _react.default.createElement("p", null, _react.default.createElement("strong", null, "No pudimos encontrar la carpeta compartida!"), _react.default.createElement("br", null), "Revisa que el link se haya copiado correctamente."), _react.default.createElement(_link.Link, {
              href: '/documents'
            }, _react.default.createElement(_components.Button, {
              icon: 'folder',
              label: 'Ir a documentos'
            }))));
          };
          exports.EmptyView = EmptyView;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1330162277,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _components2 = require("@aimpact/chat/shared/components");
          var _emptyView = require("./empty-view");
          var _icons2 = require("@aimpact/chat/shared/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [isFetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return _react.default.createElement(_components2.PreloadScreen, null);
            // TODO [reactive-0.0.1] @ftovar8 @jircdev model.found siempre viene undefined
            // if (!store.model.found) return <EmptyView />;
            if (!store.found) return _react.default.createElement(_emptyView.EmptyView, null);
            const {
              model
            } = store;
            const handleClick = async () => {
              try {
                const response = await store.createChat(model.id, model.path);
                await store.saveSharedFolder(model.id, model.path);
                if (!response.status) {
                  console.error(response.message);
                  return;
                }
                const {
                  id: chatId
                } = response.chat;
                _routing.routing.pushState(`/chat/${chatId}`);
              } catch (e) {
                console.error(e.message);
              }
            };
            const googleLogin = async event => {
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
            return _react.default.createElement("div", {
              className: 'access__folder'
            }, _react.default.createElement("img", {
              alt: 'Shared folder',
              src: '/assets/shared-folder.png'
            }), _react.default.createElement("span", {
              className: 'access-details'
            }, _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'acccess__ailogo'
            }), _react.default.createElement("h1", null, texts.welcome), _react.default.createElement("p", null, _react.default.createElement("strong", null, "Knowledge Box ", model.path.toUpperCase(), " has been shared with you."), _react.default.createElement("br", null), texts.save), !_session.sessionWrapper.logged ? _react.default.createElement(_components.Button, {
              icon: 'google',
              onClick: googleLogin,
              loading: isFetching,
              label: 'Google Sign In'
            }) : _react.default.createElement(_components.Button, {
              variant: 'primary',
              onClick: handleClick,
              icon: 'save'
            }, texts.action)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiZm91bmQiLCJpZCIsInVuZGVmaW5lZCIsIktub3dsZWRnZUJveCIsIm9uIiwidHJpZ2dlckV2ZW50IiwicmVzcG9uc2UiLCJkYXRhIiwicmVhZHkiLCJjcmVhdGVDaGF0Iiwia2JJZCIsIm5hbWUiLCJjaGF0IiwiQ2hhdCIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwic3BlY3MiLCJrbm93bGVkZ2VCb3hJZCIsInB1Ymxpc2giLCJzdGF0dXMiLCJzYXZlU2hhcmVkRm9sZGVyIiwic2hhcmVkRm9sZGVycyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmaW5kIiwiZm9sZGVyIiwicHVzaCIsInBhdGgiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJjb25zb2xlIiwiX3JlYWN0IiwiX2xpbmsiLCJfY29tcG9uZW50cyIsIl9pY29ucyIsIl9pY29uczIiLCJFbXB0eVZpZXciLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsIkljb24iLCJpY29uIiwiSUNPTlMiLCJMaW5rIiwiaHJlZiIsIkJ1dHRvbiIsImxhYmVsIiwiX2hvb2tzIiwiX2NvbXBvbmVudHMyIiwiX2VtcHR5VmlldyIsIl9yb3V0aW5nIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJpc0ZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImhhbmRsZUNsaWNrIiwibWVzc2FnZSIsImNoYXRJZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiZ29vZ2xlTG9naW4iLCJldmVudCIsInNpZ25JbldpdGhHb29nbGUiLCJ3ZWxjb21lIiwidG9VcHBlckNhc2UiLCJzYXZlIiwibG9nZ2VkIiwib25DbGljayIsImxvYWRpbmciLCJ2YXJpYW50IiwiYWN0aW9uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvZW1wdHktdmlldy50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENB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