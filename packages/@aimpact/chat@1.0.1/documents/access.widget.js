System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.5/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@aimpact/chat@1.0.1/shared/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
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
    }, function (_beyondJsReactive115Model) {
      dependency_4 = _beyondJsReactive115Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_5 = _aimpactChatSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi0036Link) {
      dependency_8 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Form) {
      dependency_9 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_10 = _pragmateUi0036Icons;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/link', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/icons', dependency_10], ['@aimpact/chat/shared/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15]]);
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
        hash: 2122156927,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyView = void 0;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _form = require("pragmate-ui/form");
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
            }, _react.default.createElement(_form.Button, {
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
        hash: 3368030997,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _components = require("@aimpact/chat/shared/components");
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
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
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
            }), _react.default.createElement("h1", null, texts.welcome), _react.default.createElement("p", null, _react.default.createElement("strong", null, "Knowledge Box ", model.path.toUpperCase(), " has been shared with you."), _react.default.createElement("br", null), texts.save), !_session.sessionWrapper.logged ? _react.default.createElement(_form.Button, {
              icon: 'google',
              onClick: googleLogin,
              loading: isFetching,
              label: 'Google Sign In'
            }) : _react.default.createElement(_form.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiZm91bmQiLCJpZCIsInVuZGVmaW5lZCIsIktub3dsZWRnZUJveCIsIm9uIiwidHJpZ2dlckV2ZW50IiwicmVzcG9uc2UiLCJkYXRhIiwicmVhZHkiLCJjcmVhdGVDaGF0Iiwia2JJZCIsIm5hbWUiLCJjaGF0IiwiQ2hhdCIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwic3BlY3MiLCJrbm93bGVkZ2VCb3hJZCIsInB1Ymxpc2giLCJzdGF0dXMiLCJzYXZlU2hhcmVkRm9sZGVyIiwic2hhcmVkRm9sZGVycyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmaW5kIiwiZm9sZGVyIiwicHVzaCIsInBhdGgiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJjb25zb2xlIiwiX3JlYWN0IiwiX2xpbmsiLCJfZm9ybSIsIl9pY29ucyIsIl9pY29uczIiLCJFbXB0eVZpZXciLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsIkljb24iLCJpY29uIiwiSUNPTlMiLCJMaW5rIiwiaHJlZiIsIkJ1dHRvbiIsImxhYmVsIiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJfZW1wdHlWaWV3IiwiX3JvdXRpbmciLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImlzRmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiaGFuZGxlQ2xpY2siLCJtZXNzYWdlIiwiY2hhdElkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJnb29nbGVMb2dpbiIsImV2ZW50Iiwic2lnbkluV2l0aEdvb2dsZSIsIndlbGNvbWUiLCJ0b1VwcGVyQ2FzZSIsInNhdmUiLCJsb2dnZWQiLCJvbkNsaWNrIiwibG9hZGluZyIsInZhcmlhbnQiLCJhY3Rpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9lbXB0eS12aWV3LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4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