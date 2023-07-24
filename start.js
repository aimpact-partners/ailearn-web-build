System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@0.1.4/render", "@aimpact/chat@0.0.2/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@0.0.1/initialize", "@aimpact/chat@0.0.2/extensions"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets014Render) {
      dependency_2 = _beyondJsWidgets014Render;
    }, function (_aimpactChat002Session) {
      dependency_3 = _aimpactChat002Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk001Initialize) {
      dependency_5 = _aimpactChatSdk001Initialize;
    }, function (_aimpactChat002Extensions) {
      dependency_6 = _aimpactChat002Extensions;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@aimpact/chat/session', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@aimpact/chat-sdk/initialize', dependency_5], ['@aimpact/chat/extensions', dependency_6]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "chat-api-test",
        "vspecifier": "@aimpact/chat-api@1.0.0//tests/page",
        "is": "page",
        "route": "/chat-api/tests"
      }, {
        "name": "auth-layout",
        "vspecifier": "@aimpact/chat@0.0.2/auth-layout",
        "is": "layout"
      }, {
        "name": "default-layout",
        "vspecifier": "@aimpact/chat@0.0.2/default-layout",
        "is": "layout"
      }, {
        "name": "chat-layout",
        "vspecifier": "@aimpact/chat@0.0.2/chat-layout",
        "is": "layout"
      }, {
        "name": "auth-login-page",
        "vspecifier": "@aimpact/chat@0.0.2/auth-login",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }, {
        "name": "auth-register-page",
        "vspecifier": "@aimpact/chat@0.0.2/auth-register",
        "is": "page",
        "route": "/auth/register",
        "layout": "auth-layout"
      }, {
        "name": "chat-wd-page",
        "vspecifier": "@aimpact/chat@0.0.2/chat.widget",
        "is": "page",
        "route": "/chat/${id}",
        "layout": "chat-layout"
      }, {
        "name": "app-documents-access",
        "vspecifier": "@aimpact/chat@0.0.2/documents/access.widget",
        "is": "page",
        "route": "/documents/access",
        "layout": "auth-layout"
      }, {
        "name": "app-documents-page",
        "vspecifier": "@aimpact/chat@0.0.2/pages/documents.widget",
        "is": "page",
        "route": "/documents",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-home-page",
        "vspecifier": "@aimpact/chat@0.0.2/home.widget",
        "is": "page",
        "route": "/",
        "layout": "chat-layout"
      }, {
        "name": "app-tests",
        "vspecifier": "@aimpact/chat@0.0.2/pages/tests",
        "is": "page",
        "route": "/tests/reactive"
      }, {
        "name": "api-test",
        "vspecifier": "@aimpact/ailearn-api@0.0.1/test",
        "is": "page",
        "route": "/ailearn/test"
      }, {
        "name": "reactive-layout",
        "vspecifier": "@beyond-js/reactive@1.1.2/reactive-layout",
        "is": "layout"
      }, {
        "name": "home-page-reactive",
        "vspecifier": "@beyond-js/reactive@1.1.2/home",
        "is": "page",
        "route": "/home-reactive"
      }, {
        "name": "reactive-tests",
        "vspecifier": "@beyond-js/reactive@1.1.2/tests/tests",
        "is": "page",
        "route": "/reactive/tests"
      }, {
        "name": "coming-soon",
        "vspecifier": "pragmate-ui@0.0.36/coming-soon",
        "is": "page",
        "route": "/components/coming-soon"
      }, {
        "name": "class-intro",
        "vspecifier": "@aimpact/ailearn-app@0.0.1/class-intro"
      }, {
        "name": "ailearn-classes-access",
        "vspecifier": "@aimpact/ailearn-app@0.0.1/classes/access.widget",
        "is": "page",
        "route": "/classes/access",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-classes-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.1/classes/list.widget",
        "is": "page",
        "route": "/classes/list",
        "layout": "chat-layout"
      }, {
        "name": "class-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.1/classes/management.widget",
        "is": "page",
        "route": "/classes/management/${id}",
        "layout": "chat-layout"
      }, {
        "name": "home-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.1/home",
        "is": "page",
        "route": "/"
      }, {
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.0.1/layout/main",
        "is": "layout"
      }]);
      bundles = [];
      /***********************************
      MODULE: @aimpact/ailearn-app/routing
      ***********************************/
      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.1/routing"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-sdk", "0.0.1"], ["@aimpact/ailearn-api", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["firebase", "10.0.0"], ["highlight.js", "11.8.0"], ["firebase-admin", "11.10.1"], ["marked", "5.1.1"], ["marked-mangle", "1.1.0"], ["dompurify", "3.0.5"], ["marked-highlight", "2.0.1"], ["socket.io-client", "4.7.1"], ["prismjs", "1.29.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.1"], ["@aimpact/ailearn-app", "0.0.1"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /**********************************
        INTERNAL MODULE: ./handlers/session
        **********************************/

        ims.set('./handlers/session', {
          hash: 4134249425,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkSession = checkSession;
            var _session = require("@aimpact/chat/session");
            async function checkSession(pathname) {
              await _session.sessionWrapper.isReady;
              if (PUBLIC_ROUTES.includes(pathname) || _session.sessionWrapper.logged) return true;
              return {
                pathname: DEFAULT_ROUTE
              };
            }
            const PUBLIC_ROUTES = ['/auth/login', '/auth/register', '/documents/access'];
            const DEFAULT_ROUTE = '/auth/login';
          }
        });

        /******************************
        INTERNAL MODULE: ./router/index
        ******************************/

        ims.set('./router/index', {
          hash: 884112209,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.Router = void 0;
            class Router {
              #isDefault;
              get isDefault() {
                return this.#pathname === '/';
              }
              #pathname;
              get pathname() {
                return this.#pathname;
              }
              #data;
              get data() {
                return this.#data;
              }
              #handlers;
              constructor(handlers) {
                if (!Array.isArray(handlers)) {
                  throw new Error('handlers must be an array');
                }
                handlers.forEach(handler => {
                  if (typeof handler !== 'function') throw new Error('handlers must be an array of functions');
                });
                this.#handlers = handlers;
              }
              async validate(path) {
                for (let handler of this.#handlers) {
                  if (handler === undefined) continue;
                  let response = await handler(path);
                  if (response && typeof response === 'object') {
                    return response;
                    break;
                  }
                }
                return {
                  pathname: path
                };
              }
            }
            exports.Router = Router;
          }
        });

        /*************************
        INTERNAL MODULE: ./routing
        *************************/

        ims.set('./routing', {
          hash: 1070756717,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            var _router = require("./router");
            var _session = require("./handlers/session");
            const router = new _router.Router([_session.checkSession]);
            _routing.routing.redirect = async function redirect(uri) {
              const response = await router.validate(uri.pathname);
              return response.pathname;
            };
          }
        });
        return {
          dependencies: ['@aimpact/chat/session', '@beyond-js/kernel/routing']
        };
      }]);

      /******************************************
      MODULE: @aimpact/ailearn-app/initialize-app
      ******************************************/

      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.1/initialize-app"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-sdk", "0.0.1"], ["@aimpact/ailearn-api", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["firebase", "10.0.0"], ["highlight.js", "11.8.0"], ["firebase-admin", "11.10.1"], ["marked", "5.1.1"], ["marked-mangle", "1.1.0"], ["dompurify", "3.0.5"], ["marked-highlight", "2.0.1"], ["socket.io-client", "4.7.1"], ["prismjs", "1.29.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.1"], ["@aimpact/ailearn-app", "0.0.1"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /***********************
        INTERNAL MODULE: ./index
        ***********************/

        ims.set('./index', {
          hash: 3540433133,
          creator: function (require, exports) {
            "use strict";

            var _initialize = require("@aimpact/chat-sdk/initialize");
            var _extensions = require("@aimpact/chat/extensions");
            (async () => {
              registerExtensions();
              await (0, _initialize.initDB)();
            })();
            function registerExtensions() {
              const register = _extensions.extensions.register.bind(_extensions.extensions);
              register('chat-intro', async metadata => {
                return metadata.classId ? {
                  widget: 'class-intro',
                  isTopic: true
                } : '';
              });
            }
          }
        });
        return {
          dependencies: ['@aimpact/chat-sdk/initialize', '@aimpact/chat/extensions']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});