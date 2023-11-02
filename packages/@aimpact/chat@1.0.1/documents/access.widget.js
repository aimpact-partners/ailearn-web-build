System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.37/link", "pragmate-ui@0.0.37/components", "pragmate-ui@0.0.37/icons", "@aimpact/chat@1.0.1/shared/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
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
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_5 = _aimpactChatSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi0037Link) {
      dependency_8 = _pragmateUi0037Link;
    }, function (_pragmateUi0037Components) {
      dependency_9 = _pragmateUi0037Components;
    }, function (_pragmateUi0037Icons) {
      dependency_10 = _pragmateUi0037Icons;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBQzRCLE9BQU8sRUFBQyxTQUFTO2NBQUNGLE9BQU8sRUFBRWIsV0FBVztjQUFFakIsSUFBSSxFQUFDO1lBQU0sR0FDekRhLEtBQUssQ0FBQ29CLE1BQU0sQ0FFZCxDQUNLLENBQ0Y7VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJmb3VuZCIsImlkIiwidW5kZWZpbmVkIiwiS25vd2xlZGdlQm94Iiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJyZXNwb25zZSIsImRhdGEiLCJyZWFkeSIsImNyZWF0ZUNoYXQiLCJrYklkIiwibmFtZSIsImNoYXQiLCJDaGF0IiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJzcGVjcyIsImtub3dsZWRnZUJveElkIiwicHVibGlzaCIsInN0YXR1cyIsInNhdmVTaGFyZWRGb2xkZXIiLCJzaGFyZWRGb2xkZXJzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZpbmQiLCJmb2xkZXIiLCJwdXNoIiwicGF0aCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJlcnJvciIsImNvbnNvbGUiLCJFbXB0eVZpZXciLCJSZWFjdCIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsIkljb24iLCJpY29uIiwiSUNPTlMiLCJMaW5rIiwiaHJlZiIsIkJ1dHRvbiIsImxhYmVsIiwic3RvcmUiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiaXNGZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJQcmVsb2FkU2NyZWVuIiwiaGFuZGxlQ2xpY2siLCJtZXNzYWdlIiwiY2hhdElkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJnb29nbGVMb2dpbiIsImV2ZW50Iiwic2lnbkluV2l0aEdvb2dsZSIsIndlbGNvbWUiLCJ0b1VwcGVyQ2FzZSIsInNhdmUiLCJsb2dnZWQiLCJvbkNsaWNrIiwibG9hZGluZyIsInZhcmlhbnQiLCJhY3Rpb24iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS50cyIsInRzL3ZpZXdzL2VtcHR5LXZpZXcudHN4IiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19