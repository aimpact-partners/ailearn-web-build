System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@aimpact/chat@1.0.1/shared/icons", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
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
    }, function (_react) {
      dependency_3 = _react;
    }, function (_pragmateUi0036Link) {
      dependency_4 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Form) {
      dependency_5 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_6 = _pragmateUi0036Icons;
    }, function (_aimpactChat101SharedIcons) {
      dependency_7 = _aimpactChat101SharedIcons;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_8 = _beyondJsReact18Widgets101Page;
    }, function (_beyondJsReactive112Model) {
      dependency_9 = _beyondJsReactive112Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_10 = _aimpactChatSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['pragmate-ui/link', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/icons', dependency_6], ['@aimpact/chat/shared/icons', dependency_7], ['@beyond-js/react-18-widgets/page', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@aimpact/chat-sdk/core', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-documents-access",
        "vspecifier": "@aimpact/chat@1.0.1/documents/access.widget",
        "is": "page",
        "route": "/documents/access",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/documents/access.widget');
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3893172667,
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
          var _session = require("@aimpact/chat-sdk/session");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEUsT0FBTyxFQUFDLFNBQVM7Y0FBQ0YsT0FBTyxFQUFFYixXQUFXO2NBQUVqRSxJQUFJLEVBQUM7WUFBTSxHQUN6RDZELEtBQUssQ0FBQ29CLE1BQU0sQ0FFZCxDQUNLLENBQ0Y7VUFFUiIsIm5hbWVzIjpbIkVtcHR5VmlldyIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiYWx0Iiwic3JjIiwiSWNvbiIsImljb24iLCJJQ09OUyIsIkxpbmsiLCJocmVmIiwiQnV0dG9uIiwibGFiZWwiLCJleHBvcnRzIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInFzIiwiZ2V0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiZm91bmQiLCJpZCIsInVuZGVmaW5lZCIsIktub3dsZWRnZUJveCIsIm9uIiwidHJpZ2dlckV2ZW50IiwicmVzcG9uc2UiLCJkYXRhIiwicmVhZHkiLCJjcmVhdGVDaGF0Iiwia2JJZCIsIm5hbWUiLCJjaGF0IiwiQ2hhdCIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwic3BlY3MiLCJrbm93bGVkZ2VCb3hJZCIsInB1Ymxpc2giLCJzdGF0dXMiLCJzYXZlU2hhcmVkRm9sZGVyIiwic2hhcmVkRm9sZGVycyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmaW5kIiwiZm9sZGVyIiwicHVzaCIsInBhdGgiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJjb25zb2xlIiwic3RvcmUiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiaXNGZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJQcmVsb2FkU2NyZWVuIiwiaGFuZGxlQ2xpY2siLCJtZXNzYWdlIiwiY2hhdElkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJnb29nbGVMb2dpbiIsImV2ZW50Iiwic2lnbkluV2l0aEdvb2dsZSIsIndlbGNvbWUiLCJ0b1VwcGVyQ2FzZSIsInNhdmUiLCJsb2dnZWQiLCJvbkNsaWNrIiwibG9hZGluZyIsInZhcmlhbnQiLCJhY3Rpb24iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb21wb25lbnRzL2VtcHR5LXZpZXcudHN4Iiwid2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJ3aWRnZXQvdHMvc3RvcmUvaW5kZXgudHMiLCJ3aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19