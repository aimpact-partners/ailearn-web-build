System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@0.1.5/render", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.0/initialize", "@aimpact/chat@1.0.1/extensions", "@aimpact/chat@1.0.1/sidebar/manager", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets015Render) {
      dependency_2 = _beyondJsWidgets015Render;
    }, function (_aimpactAilearnApp100ModelGclassroom) {
      dependency_3 = _aimpactAilearnApp100ModelGclassroom;
    }, function (_aimpactChatSdk100Session) {
      dependency_4 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk100Initialize) {
      dependency_6 = _aimpactChatSdk100Initialize;
    }, function (_aimpactChat101Extensions) {
      dependency_7 = _aimpactChat101Extensions;
    }, function (_aimpactChat101SidebarManager) {
      dependency_8 = _aimpactChat101SidebarManager;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Core) {
      dependency_10 = _beyondJsKernel019Core;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@aimpact/ailearn-app/model/gclassroom', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@aimpact/chat-sdk/initialize', dependency_6], ['@aimpact/chat/extensions', dependency_7], ['@aimpact/chat/sidebar/manager', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@beyond-js/kernel/core', dependency_10]]);

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
        "name": "chat-wd-page",
        "vspecifier": "@aimpact/chat@1.0.1/chat.widget",
        "is": "page",
        "route": "/chat/${id}",
        "layout": "chat-layout"
      }, {
        "name": "chat-explorer-view",
        "vspecifier": "@aimpact/chat@1.0.1/conversations/explorer.widget"
      }, {
        "name": "auth-layout",
        "vspecifier": "@aimpact/chat@1.0.1/auth-layout",
        "is": "layout"
      }, {
        "name": "chat-layout",
        "vspecifier": "@aimpact/chat@1.0.1/chat-layout",
        "is": "layout"
      }, {
        "name": "default-layout",
        "vspecifier": "@aimpact/chat@1.0.1/default-layout",
        "is": "layout"
      }, {
        "name": "auth-login-page",
        "vspecifier": "@aimpact/chat@1.0.1/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }, {
        "name": "auth-register-page",
        "vspecifier": "@aimpact/chat@1.0.1/auth-register.widget",
        "is": "page",
        "route": "/auth/register",
        "layout": "auth-layout"
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
        "vspecifier": "@beyond-js/reactive@1.1.4/reactive-layout",
        "is": "layout"
      }, {
        "name": "reactive-tests",
        "vspecifier": "@beyond-js/reactive@1.1.4/tests/tests",
        "is": "page",
        "route": "/reactive/tests"
      }, {
        "name": "coming-soon",
        "vspecifier": "pragmate-ui@0.0.36/coming-soon",
        "is": "page",
        "route": "/components/coming-soon"
      }, {
        "name": "pui-template-palette-page",
        "vspecifier": "pragmate-ui@0.0.36/template/generator.widget",
        "is": "page",
        "route": "/pui/palette/generator"
      }, {
        "name": "pui-template-palette-page",
        "vspecifier": "pragmate-ui@0.0.36/template/palette.widget",
        "is": "page",
        "route": "/pui/palette"
      }, {
        "name": "ailearn-assessment-oral",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/assessments/oral.widget"
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
        "name": "ailearn-gclassroom-permissions",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/gclassroom/permissions.widget",
        "is": "page",
        "route": "/gclassroom/permissions"
      }, {
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/layout/main",
        "is": "layout"
      }, {
        "name": "ailearn-lessons-create",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/lessons/create.widget",
        "is": "page",
        "route": "/lessons/create",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-classes-list",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/lessons/list.widget",
        "is": "page",
        "route": "/lessons/list",
        "layout": "chat-layout"
      }, {
        "name": "class-management",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/lessons/management.widget",
        "is": "page",
        "route": "/lessons/management/${id}",
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
          const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /*************************************
        INTERNAL MODULE: ./handlers/gclassroom
        *************************************/

        ims.set('./handlers/gclassroom', {
          hash: 2554059583,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.isGclassroomAuthorized = isGclassroomAuthorized;
            var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
            async function isGclassroomAuthorized(pathname) {
              await _gclassroom.gclassroom.isReady;
              if (pathname === '/gclassroom/access') return true;
              if (!_gclassroom.gclassroom.authorized) return {
                pathname: '/gclassroom/permissions'
              };
              return true;
            }
          }
        });

        /**********************************
        INTERNAL MODULE: ./handlers/session
        **********************************/

        ims.set('./handlers/session', {
          hash: 487617999,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkSession = checkSession;
            var _session = require("@aimpact/chat-sdk/session");
            const PUBLIC_ROUTES = ['/auth/login', '/auth/register', '/documents/access'];
            const DEFAULT_ROUTE = '/auth/login';
            async function checkSession(pathname) {
              await _session.sessionWrapper.isReady;
              if (!_session.sessionWrapper.logged && PUBLIC_ROUTES.includes(pathname)) return {
                pathname
              };
              if (PUBLIC_ROUTES.includes(pathname) || _session.sessionWrapper.logged) return true;
              return {
                pathname: DEFAULT_ROUTE
              };
            }
          }
        });

        /************************
        INTERNAL MODULE: ./router
        ************************/

        ims.set('./router', {
          hash: 1377662046,
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
                  if (response !== true) {
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
          hash: 1950431254,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            var _router = require("./router");
            var _session = require("./handlers/session");
            var _gclassroom = require("./handlers/gclassroom");
            const router = new _router.Router([_session.checkSession, _gclassroom.isGclassroomAuthorized]);
            _routing.routing.redirect = async function redirect(uri) {
              const response = await router.validate(uri.pathname);
              return response.pathname;
            };
          }
        });
        return {
          dependencies: ['@aimpact/ailearn-app/model/gclassroom', '@aimpact/chat-sdk/session', '@beyond-js/kernel/routing']
        };
      }]);

      /******************************************
      MODULE: @aimpact/ailearn-app/initialize-app
      ******************************************/

      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/initialize-app",
          "multibundle": true
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
          hash: 2290793438,
          creator: function (require, exports) {
            "use strict";

            var _initialize = require("@aimpact/chat-sdk/initialize");
            var _extensions = require("@aimpact/chat/extensions");
            var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
            var _manager = require("@aimpact/chat/sidebar/manager");
            var _icons = require("./icons");
            var _texts = require("@beyond-js/kernel/texts");
            var _beyond_context = require("beyond_context");
            var _core = require("@beyond-js/kernel/core");
            const promise = new _core.PendingPromise();
            const textsModel = new _texts.CurrentTexts(_beyond_context.module.specifier);
            const listener = () => {
              if (!textsModel.ready) return;
              promise.resolve();
            };
            textsModel.on('change', listener);
            listener();
            (async () => {
              registerExtensions();
              await (0, _initialize.initDB)();
              await _gclassroom.gclassroom.isReady;
              await promise;
              const texts = textsModel.value;
              const appModules = [{
                id: 'chat',
                name: texts.chat,
                href: 'chat',
                icon: 'chat',
                Explorer: 'chat-explorer-view'
              }, {
                name: texts.documents,
                href: 'documents',
                idhref: 'documents',
                icon: 'doc'
              }, {
                id: 'lessons',
                name: texts.lessons,
                href: 'lessons/list',
                icon: 'class'
              }, {
                id: 'courses',
                icon: _icons.GoogleClassRoom,
                name: texts.google,
                Explorer: 'ailearn-gclassroom-explorer'
              }];
              _manager.SidebarManager.register(appModules);
            })();
            function registerExtensions() {
              const register = _extensions.extensions.register.bind(_extensions.extensions);
              register('chat-intro', async metadata => {
                if (!metadata?.lesson && !metadata?.topic) return;
                return {
                  control: 'session-intro',
                  metadata: {
                    avoidChat: metadata.lesson && !metadata?.topic
                  }
                };
              });
            }
          }
        });
        return {
          dependencies: ['@aimpact/chat-sdk/initialize', '@aimpact/chat/extensions', '@aimpact/ailearn-app/model/gclassroom', '@aimpact/chat/sidebar/manager', '@beyond-js/kernel/texts', '@beyond-js/kernel/core']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});