System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@aimpact/chat@0.0.2/shared/icons", "@beyond-js/react-18-widgets@0.0.6/page", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@0.0.1/core", "@aimpact/chat@0.0.2/session", "@beyond-js/react-18-widgets@0.0.6/hooks", "@aimpact/chat@0.0.2/shared/components", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@0.0.2/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_pragmateUi0036Link) {
      dependency_4 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Form) {
      dependency_5 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_6 = _pragmateUi0036Icons;
    }, function (_aimpactChat002SharedIcons) {
      dependency_7 = _aimpactChat002SharedIcons;
    }, function (_beyondJsReact18Widgets006Page) {
      dependency_8 = _beyondJsReact18Widgets006Page;
    }, function (_beyondJsReactive112Model) {
      dependency_9 = _beyondJsReactive112Model;
    }, function (_aimpactChatSdk001Core) {
      dependency_10 = _aimpactChatSdk001Core;
    }, function (_aimpactChat002Session) {
      dependency_11 = _aimpactChat002Session;
    }, function (_beyondJsReact18Widgets006Hooks) {
      dependency_12 = _beyondJsReact18Widgets006Hooks;
    }, function (_aimpactChat002SharedComponents) {
      dependency_13 = _aimpactChat002SharedComponents;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }, function (_aimpactChat002SharedHooks) {
      dependency_15 = _aimpactChat002SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@0.0.2/documents/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['pragmate-ui/link', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/icons', dependency_6], ['@aimpact/chat/shared/icons', dependency_7], ['@beyond-js/react-18-widgets/page', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@aimpact/chat-sdk/core', dependency_10], ['@aimpact/chat/session', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-documents-access",
        "vspecifier": "@aimpact/chat@0.0.2/documents/access.widget",
        "is": "page",
        "route": "/documents/access",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@0.0.2/documents/access.widget');
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./components/empty-view
      ***************************************/
      ims.set('./components/empty-view', {
        hash: 353282042,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyView = void 0;
          var React = require("react");
          var _link = require("pragmate-ui/link");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/shared/icons");
          const EmptyView = () => {
            return React.createElement("div", {
              className: 'access__folder'
            }, React.createElement("img", {
              alt: 'Shared folder',
              src: '/assets/shared-folder.png'
            }), React.createElement("span", {
              className: 'access-details'
            }, React.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'acccess__ailogo'
            }), React.createElement("h1", null, "Welcome to AIM Chat"), React.createElement("p", null, React.createElement("strong", null, "No pudimos encontrar la carpeta compartida!"), React.createElement("br", null), "Revisa que el link se haya copiado correctamente."), React.createElement(_link.Link, {
              href: '/documents'
            }, React.createElement(_form.Button, {
              icon: 'folder',
              label: 'Ir a documentos'
            }))));
          };
          exports.EmptyView = EmptyView;
        }
      });

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

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 745036300,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/chat-sdk/core");
          var _session = require("@aimpact/chat/session");
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
              console.log('id :', id);
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3039711543,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _components = require("@aimpact/chat/shared/components");
          var _emptyView = require("../components/empty-view");
          var _icons2 = require("@aimpact/chat/shared/icons");
          var _session = require("@aimpact/chat/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            const [isFetching, setFetching] = React.useState(false);
            const [error, setError] = React.useState(false);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return React.createElement(_components.PreloadScreen, null);
            // TODO [reactive-0.0.1] @ftovar8 @jircdev model.found siempre viene undefined
            // if (!store.model.found) return <EmptyView />;
            if (!store.found) return React.createElement(_emptyView.EmptyView, null);
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
            return React.createElement("div", {
              className: 'access__folder'
            }, React.createElement("img", {
              alt: 'Shared folder',
              src: '/assets/shared-folder.png'
            }), React.createElement("span", {
              className: 'access-details'
            }, React.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'acccess__ailogo'
            }), React.createElement("h1", null, texts.welcome), React.createElement("p", null, React.createElement("strong", null, "Knowledge Box ", model.path.toUpperCase(), " has been shared with you."), React.createElement("br", null), texts.save), !_session.sessionWrapper.logged ? React.createElement(_form.Button, {
              icon: 'google',
              onClick: googleLogin,
              loading: isFetching,
              label: 'Google Sign In'
            }) : React.createElement(_form.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO2NBQUVyRCxLQUFLLEVBQUM7WUFBZ0IsRUFBRyxHQUUxRlYsb0JBQUNTLFlBQU07Y0FBQzZFLE9BQU8sRUFBQyxTQUFTO2NBQUNGLE9BQU8sRUFBRWIsV0FBVztjQUFFbEUsSUFBSSxFQUFDO1lBQU0sR0FDekQ4RCxLQUFLLENBQUNvQixNQUFNLENBRWQsQ0FDSyxDQUNGO1VBRVIiLCJuYW1lcyI6WyJFbXB0eVZpZXciLCJSZWFjdCIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsIkljb24iLCJpY29uIiwiSUNPTlMiLCJMaW5rIiwiaHJlZiIsIkJ1dHRvbiIsImxhYmVsIiwiZXhwb3J0cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImZvdW5kIiwiaWQiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwiS25vd2xlZGdlQm94Iiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJyZXNwb25zZSIsImRhdGEiLCJyZWFkeSIsImNyZWF0ZUNoYXQiLCJrYklkIiwibmFtZSIsImNoYXQiLCJDaGF0IiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJzcGVjcyIsImtub3dsZWRnZUJveElkIiwicHVibGlzaCIsInN0YXR1cyIsInNhdmVTaGFyZWRGb2xkZXIiLCJzaGFyZWRGb2xkZXJzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZpbmQiLCJmb2xkZXIiLCJwdXNoIiwicGF0aCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJlcnJvciIsInN0b3JlIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImlzRmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiUHJlbG9hZFNjcmVlbiIsImhhbmRsZUNsaWNrIiwibWVzc2FnZSIsImNoYXRJZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiZ29vZ2xlTG9naW4iLCJldmVudCIsInNpZ25JbldpdGhHb29nbGUiLCJ3ZWxjb21lIiwidG9VcHBlckNhc2UiLCJzYXZlIiwibG9nZ2VkIiwib25DbGljayIsImxvYWRpbmciLCJ2YXJpYW50IiwiYWN0aW9uIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29tcG9uZW50cy9lbXB0eS12aWV3LnRzeCIsIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3N0b3JlL2luZGV4LnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==