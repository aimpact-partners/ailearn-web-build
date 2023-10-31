System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@0.1.5/render", "@aimpact/ailearn-app@0.0.10/model/gclassroom", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.0/initialize", "@aimpact/chat@1.0.1/extensions", "@aimpact/chat@1.0.1/sidebar/manager", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.0.10/shared/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets015Render) {
      dependency_2 = _beyondJsWidgets015Render;
    }, function (_aimpactAilearnApp0010ModelGclassroom) {
      dependency_3 = _aimpactAilearnApp0010ModelGclassroom;
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
    }, function (_aimpactAilearnApp0010SharedIcons) {
      dependency_11 = _aimpactAilearnApp0010SharedIcons;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@aimpact/ailearn-app/model/gclassroom', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@aimpact/chat-sdk/initialize', dependency_6], ['@aimpact/chat/extensions', dependency_7], ['@aimpact/chat/sidebar/manager', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['@aimpact/ailearn-app/shared/icons', dependency_11]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "chat-api-test",
        "vspecifier": "@aimpact/chat-api@0.1.0//tests/page",
        "is": "page",
        "route": "/chat-api/tests"
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
        "name": "chat-wd-page",
        "vspecifier": "@aimpact/chat@1.0.1/chat.widget",
        "is": "page",
        "route": "/chat/${id}",
        "layout": "chat-layout"
      }, {
        "name": "chat-explorer-view",
        "vspecifier": "@aimpact/chat@1.0.1/conversations/explorer.widget"
      }, {
        "name": "chat-documents-access",
        "vspecifier": "@aimpact/chat@1.0.1/documents/access.widget",
        "is": "page",
        "route": "/documents/access",
        "layout": "auth-layout"
      }, {
        "name": "app-documents-page",
        "vspecifier": "@aimpact/chat@1.0.1/documents.widget",
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
        "name": "aimpact-chat-user-profile",
        "vspecifier": "@aimpact/chat@1.0.1/user/profile.widget"
      }, {
        "name": "ailearn-api-test",
        "vspecifier": "@aimpact/ailearn-api@0.1.0/test",
        "is": "page",
        "route": "/ailearn-api/test"
      }, {
        "name": "reactive-layout",
        "vspecifier": "@beyond-js/reactive@1.1.6/reactive-layout",
        "is": "layout"
      }, {
        "name": "coming-soon",
        "vspecifier": "pragmate-ui@0.0.3/coming-soon",
        "is": "page",
        "route": "/components/coming-soon"
      }, {
        "name": "pui-template-view-widget",
        "vspecifier": "pragmate-ui@0.0.3/pui/template/palette"
      }, {
        "name": "ailearn-sessions-access",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/sessions/access.widget",
        "is": "page",
        "route": "/sessions/access/${id}",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-assessment-oral",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/assessments/oral-test.widget"
      }, {
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/dashboard/${id}/classwork",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-assigment-user-detail-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/assignments/dashboard/user-detail.widget",
        "is": "page",
        "route": "/assignments/dashboard/user-detail/${id}",
        "layout": "chat-layout"
      }, {
        "name": "session-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@0.0.10/session-intro.widget"
      }, {
        "name": "ailearn-assigments-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/assigments/list.widget",
        "is": "page",
        "route": "/assigments/list/${id}",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-gclassroom-permissions",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/gclassroom/permissions.widget",
        "is": "page",
        "route": "/gclassroom/permissions"
      }, {
        "name": "ailearn-gclassrooms-access",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/gclassrooms/access.widget",
        "is": "page",
        "route": "/gclassroom/access",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-gclassroom-explorer",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/gclassroom-explorer.widget"
      }, {
        "name": "ailearn-classworks-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/classworks/create.widget",
        "is": "page",
        "route": "/classworks/create",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-classworks-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/classworks/list.widget",
        "is": "page",
        "route": "/classworks/list",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-classworks-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/classworks/management.widget",
        "is": "page",
        "route": "/classworks/management/${id}",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-layout",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/layout/main",
        "is": "layout"
      }, {
        "name": "ailearn-test-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/test.widget",
        "is": "page",
        "route": "/ailearn/test"
      }, {
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/ui/components",
        "is": "page",
        "route": "/ui/components",
        "layout": "chat-layout"
      }]);
      bundles = [];
      /***********************************
      MODULE: @aimpact/ailearn-app/routing
      ***********************************/
      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.10/routing"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.10"], ["@aimpact/ailearn-app", "0.0.10"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /*************************************
        INTERNAL MODULE: ./handlers/gclassroom
        *************************************/

        ims.set('./handlers/gclassroom', {
          hash: 186397415,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.isGclassroomAuthorized = isGclassroomAuthorized;
            var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
            async function isGclassroomAuthorized(pathname) {
              await _gclassroom.gclassroom.isReady;
              if (pathname === '/gclassroom/access' && !_gclassroom.gclassroom.authorized) return true;
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
          hash: 1596357318,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkSession = checkSession;
            var _session = require("@aimpact/chat-sdk/session");
            const PUBLIC_ROUTES = ['/auth/login', '/auth/register', '/documents/access', '/reactive/testing'];
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
          "vspecifier": "@aimpact/ailearn-app@0.0.10/initialize-app",
          "multibundle": true
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.10"], ["@aimpact/ailearn-app", "0.0.10"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /***********************
        INTERNAL MODULE: ./index
        ***********************/

        ims.set('./index', {
          hash: 727936161,
          creator: function (require, exports) {
            "use strict";

            var _initialize = require("@aimpact/chat-sdk/initialize");
            var _extensions = require("@aimpact/chat/extensions");
            var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
            var _manager = require("@aimpact/chat/sidebar/manager");
            var _render = require("@beyond-js/widgets/render");
            var _texts = require("@beyond-js/kernel/texts");
            var _beyond_context = require("beyond_context");
            var _core = require("@beyond-js/kernel/core");
            var _icons = require("@aimpact/ailearn-app/shared/icons");
            const promise = new _core.PendingPromise();
            const textsModel = new _texts.CurrentTexts(_beyond_context.module.specifier);
            //set dyslexia mode
            const dyslexiaMode = localStorage.getItem('aimpact.accessibility.mode') ? localStorage.getItem('aimpact.accessibility.mode') : 'normal';
            const container = document.querySelector('html');
            container.setAttribute('data-accessibility-mode', dyslexiaMode);
            _render.widgets.attributes.add('data-accessibility-mode', dyslexiaMode);
            //---------------------------
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
                id: 'classes',
                icon: _icons.ICONS.classes,
                name: texts.google,
                Explorer: 'ailearn-gclassroom-explorer'
              }, {
                id: 'classworks',
                name: texts.classworks,
                href: 'classworks/list',
                icon: _icons.ICONS.classworks
              }, {
                name: texts.documents,
                href: 'documents',
                idhref: 'documents',
                icon: 'documents'
              }, {
                id: 'chat',
                name: texts.chat,
                href: 'chat',
                icon: 'chat',
                Explorer: 'chat-explorer-view'
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
              register('app-menu-icon', () => {
                return {
                  type: 'img',
                  src: '/assets/favicon.png'
                };
              });
            }
          }
        });
        return {
          dependencies: ['@aimpact/chat-sdk/initialize', '@aimpact/chat/extensions', '@aimpact/ailearn-app/model/gclassroom', '@aimpact/chat/sidebar/manager', '@beyond-js/widgets/render', '@beyond-js/kernel/texts', '@beyond-js/kernel/core', '@aimpact/ailearn-app/shared/icons']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});