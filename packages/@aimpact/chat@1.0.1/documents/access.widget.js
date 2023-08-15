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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.2"], ["uuid", "9.0.0"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbGluayIsIl9mb3JtIiwiX2ljb25zIiwiX2ljb25zMiIsIkVtcHR5VmlldyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJJY29uIiwiaWNvbiIsIklDT05TIiwiTGluayIsImhyZWYiLCJCdXR0b24iLCJsYWJlbCIsImV4cG9ydHMiLCJfcGFnZSIsIl92aWV3cyIsIl9zdG9yZSIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInFzIiwiZ2V0IiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImZvdW5kIiwiaWQiLCJ1bmRlZmluZWQiLCJLbm93bGVkZ2VCb3giLCJvbiIsInRyaWdnZXJFdmVudCIsInJlc3BvbnNlIiwiZGF0YSIsInJlYWR5IiwiY3JlYXRlQ2hhdCIsImtiSWQiLCJuYW1lIiwiY2hhdCIsIkNoYXQiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInNwZWNzIiwia25vd2xlZGdlQm94SWQiLCJwdWJsaXNoIiwic3RhdHVzIiwic2F2ZVNoYXJlZEZvbGRlciIsInNoYXJlZEZvbGRlcnMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmluZCIsImZvbGRlciIsInB1c2giLCJwYXRoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImVycm9yIiwiY29uc29sZSIsIl9ob29rcyIsIl9jb21wb25lbnRzIiwiX2VtcHR5VmlldyIsIl9yb3V0aW5nIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJpc0ZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImhhbmRsZUNsaWNrIiwibWVzc2FnZSIsImNoYXRJZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiZ29vZ2xlTG9naW4iLCJldmVudCIsInNpZ25JbldpdGhHb29nbGUiLCJ3ZWxjb21lIiwidG9VcHBlckNhc2UiLCJzYXZlIiwibG9nZ2VkIiwib25DbGljayIsImxvYWRpbmciLCJ2YXJpYW50IiwiYWN0aW9uIl0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb21wb25lbnRzL2VtcHR5LXZpZXcudHN4IiwiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy9zdG9yZS9pbmRleC50cyIsIi93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUVBLElBQUFJLE9BQUEsR0FBQUosT0FBQTtVQUVPLE1BQU1LLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO1lBQzdCLE9BQ0NOLEtBQUEsQ0FBQU8sYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJSLEtBQUEsQ0FBQU8sYUFBQTtjQUFLRSxHQUFHLEVBQUMsZUFBZTtjQUFDQyxHQUFHLEVBQUM7WUFBMkIsRUFBRyxFQUMzRFYsS0FBQSxDQUFBTyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFnQixHQUMvQlIsS0FBQSxDQUFBTyxhQUFBLENBQUNILE1BQUEsQ0FBQU8sSUFBSTtjQUFDQyxJQUFJLEVBQUVQLE9BQUEsQ0FB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