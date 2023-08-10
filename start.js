System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@0.1.5/render", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.1/initialize", "@aimpact/chat@1.0.1/extensions", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "@aimpact/chat@1.0.1/navigation"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets015Render) {
      dependency_2 = _beyondJsWidgets015Render;
    }, function (_aimpactChatSdk101Session) {
      dependency_3 = _aimpactChatSdk101Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk101Initialize) {
      dependency_5 = _aimpactChatSdk101Initialize;
    }, function (_aimpactChat101Extensions) {
      dependency_6 = _aimpactChat101Extensions;
    }, function (_aimpactAilearnApp100ModelGclassroom) {
      dependency_7 = _aimpactAilearnApp100ModelGclassroom;
    }, function (_aimpactChat101Navigation) {
      dependency_8 = _aimpactChat101Navigation;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@aimpact/chat-sdk/initialize', dependency_5], ['@aimpact/chat/extensions', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['@aimpact/chat/navigation', dependency_8]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "chat-api-test",
        "vspecifier": "@aimpact/chat-api@1.0.1//tests/page",
        "is": "page",
        "route": "/chat-api/tests"
      }, {
        "name": "chat-explorer-view",
        "vspecifier": "@aimpact/chat@1.0.1/conversations.widget"
      }, {
        "name": "auth-layout",
        "vspecifier": "@aimpact/chat@1.0.1/auth-layout",
        "is": "layout"
      }, {
        "name": "default-layout",
        "vspecifier": "@aimpact/chat@1.0.1/default-layout",
        "is": "layout"
      }, {
        "name": "chat-layout",
        "vspecifier": "@aimpact/chat@1.0.1/chat-layout",
        "is": "layout"
      }, {
        "name": "auth-login-page",
        "vspecifier": "@aimpact/chat@1.0.1/auth-login",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }, {
        "name": "auth-register-page",
        "vspecifier": "@aimpact/chat@1.0.1/auth-register",
        "is": "page",
        "route": "/auth/register",
        "layout": "auth-layout"
      }, {
        "name": "chat-wd-page",
        "vspecifier": "@aimpact/chat@1.0.1/chat.widget",
        "is": "page",
        "route": "/chat/${id}",
        "layout": "chat-layout"
      }, {
        "name": "app-documents-access",
        "vspecifier": "@aimpact/chat@1.0.1/documents/access.widget",
        "is": "page",
        "route": "/documents/access",
        "layout": "auth-layout"
      }, {
        "name": "app-documents-page",
        "vspecifier": "@aimpact/chat@1.0.1/pages/documents.widget",
        "is": "page",
        "route": "/documents",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-home-page",
        "vspecifier": "@aimpact/chat@1.0.1/home.widget",
        "is": "page",
        "route": "/",
        "layout": "chat-layout"
      }, {
        "name": "app-tests",
        "vspecifier": "@aimpact/chat@1.0.1/pages/tests",
        "is": "page",
        "route": "/tests/reactive"
      }, {
        "name": "aimpact-chat-user-profile",
        "vspecifier": "@aimpact/chat@1.0.1/user/profile.widget"
      }, {
        "name": "api-test",
        "vspecifier": "@aimpact/ailearn-api@1.0.0/test",
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
        "name": "ailearn-gclassrooms-access",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/gclassrooms/access.widget",
        "is": "page",
        "route": "/gclassroom/access",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-gclassroom-explorer",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/gclassroom-explorer.widget"
      }, {
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/layout/main",
        "is": "layout"
      }, {
        "name": "ailearn-classes-list",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/lessons/list.widget",
        "is": "page",
        "route": "/lessons/list",
        "layout": "chat-layout"
      }, {
        "name": "class-management",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/classes/management.widget",
        "is": "page",
        "route": "/classes/management/${id}",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-sessions-access",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/sessions/access.widget",
        "is": "page",
        "route": "/sessions/access/${id}",
        "layout": "chat-layout"
      }, {
        "name": "session-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@1.0.0/session-intro.widget"
      }, {
        "name": "ailearn-sessions-list",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/sessions/list.widget",
        "is": "page",
        "route": "/sessions/list/${id}",
        "layout": "chat-layout"
      }]);
      bundles = [];
      /***********************************
      MODULE: @aimpact/ailearn-app/routing
      ***********************************/
      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/routing"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /**********************************
        INTERNAL MODULE: ./handlers/session
        **********************************/

        ims.set('./handlers/session', {
          hash: 1918325337,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkSession = checkSession;
            var _session = require("@aimpact/chat-sdk/session");
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
          dependencies: ['@aimpact/chat-sdk/session', '@beyond-js/kernel/routing']
        };
      }]);

      /******************************************
      MODULE: @aimpact/ailearn-app/initialize-app
      ******************************************/

      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/initialize-app"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /***********************
        INTERNAL MODULE: ./icons
        ***********************/

        ims.set('./icons', {
          hash: 2477701644,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.GoogleClassRoom = void 0;
            const GoogleClassRoom = {
              icon: `<path style="fill:#FFC107;" d="M41,42H7c-2.206,0-4-1.794-4-4V10c0-2.206,1.794-4,4-4h34c2.206,0,4,1.794,4,4v28
	C45,40.206,43.206,42,41,42z"/>
<rect x="7" y="10" style="fill:#388E3C;" width="34" height="28"/>
<rect x="28" y="36" style="fill:#FFFFFF;" width="8" height="2"/>
<circle style="fill:#FFFFFF;" cx="24" cy="20" r="3"/>
<circle style="fill:#A5D6A7;" cx="16" cy="23" r="2"/>
<rect x="7" y="10" style="fill:#2E7D32;" width="34" height="2"/>
<polygon style="fill:#FFAB00;" points="36,38 28,38 32,42 40,42 "/>
<circle style="fill:#A5D6A7;" cx="32" cy="23" r="2"/>
<path style="fill:#A5D6A7;" d="M37,28.688c0-0.445-0.163-0.874-0.468-1.199C35.839,26.75,34.363,26,32,26s-3.839,0.75-4.532,1.489
	C27.163,27.814,27,28.242,27,28.688V30h10V28.688z"/>
<path style="fill:#A5D6A7;" d="M21,28.688c0-0.445-0.163-0.874-0.468-1.199C19.839,26.75,18.363,26,16,26s-3.839,0.75-4.532,1.489
	C11.163,27.814,11,28.242,11,28.688V30h10V28.688z"/>
<path style="fill:#FFFFFF;" d="M30,27.742c0-0.534-0.196-1.048-0.562-1.438C28.607,25.417,26.835,24,24,24s-4.607,1.417-5.438,2.303
	C18.196,26.693,18,27.207,18,27.742V30h12V27.742z"/>`,
              viewBox: '0 0 48 48'
            };
            exports.GoogleClassRoom = GoogleClassRoom;
          }
        });

        /***********************
        INTERNAL MODULE: ./index
        ***********************/

        ims.set('./index', {
          hash: 1337217491,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.appModules = void 0;
            var _initialize = require("@aimpact/chat-sdk/initialize");
            var _extensions = require("@aimpact/chat/extensions");
            var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
            var _navigation = require("@aimpact/chat/navigation");
            var _icons = require("./icons");
            /*bundle */ //import {appModules} from '@aimpact/chat/registry';

            const appModules = [{
              id: 'chat',
              name: 'Chat',
              href: 'chat',
              icon: 'chat',
              Explorer: 'chat-explorer-view'
            }, {
              name: 'Documents',
              href: 'documents',
              idhref: 'documents',
              icon: 'doc'
            }, {
              id: 'lessons',
              name: 'Lessons',
              href: 'lessons/list',
              icon: 'class'
            }];
            exports.appModules = appModules;
            _navigation.AppNavigation.register(appModules);
            (async () => {
              registerExtensions();
              await (0, _initialize.initDB)();
              await _gclassroom.gclassroom.isReady;
              const settings = {
                unauthorized: {
                  attributes: {
                    className: 'is-not-authorized'
                  }
                },
                authorized: {
                  attributes: {
                    className: 'is-authorized'
                  },
                  Explorer: undefined
                }
              };
              const {
                authorized,
                unauthorized
              } = settings;
              _navigation.AppNavigation.update('lessons', _gclassroom.gclassroom.authorized ? authorized : unauthorized);
              if (_gclassroom.gclassroom.authorized) {
                _navigation.AppNavigation.update('courses', {
                  id: 'courses',
                  icon: _icons.GoogleClassRoom,
                  name: 'Google classes',
                  Explorer: 'ailearn-gclassroom-explorer'
                });
              }
            })();
            function registerExtensions() {
              const register = _extensions.extensions.register.bind(_extensions.extensions);
              register('chat-intro', async metadata => {
                if (!metadata.lesson && !metadata.topic) return;
                return 'session-intro';
              });
            }
          }
        });
        exports.descriptor = [{
          "im": "./index",
          "from": "appModules",
          "name": "appModules"
        }];
        return {
          dependencies: ['@aimpact/chat-sdk/initialize', '@aimpact/chat/extensions', '@aimpact/ailearn-app/model/gclassroom', '@aimpact/chat/navigation']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});