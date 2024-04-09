System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@1.1.0/render", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32/model/wrapper", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.1.0/icons", "pragmate-ui@0.1.0/image", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.0/initialize", "@aimpact/ailearn-app@0.0.32/model/gclassroom", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/settings"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets110Render) {
      dependency_2 = _beyondJsWidgets110Render;
    }, function (_aimpactChatSdk100Session) {
      dependency_3 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0032ModelWrapper) {
      dependency_4 = _aimpactAilearnApp0032ModelWrapper;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101Extensions) {
      dependency_6 = _aimpactChat101Extensions;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi010Icons) {
      dependency_8 = _pragmateUi010Icons;
    }, function (_pragmateUi010Image) {
      dependency_9 = _pragmateUi010Image;
    }, function (_beyondJsReactive1112Model) {
      dependency_10 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_11 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Core) {
      dependency_12 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk100Initialize) {
      dependency_13 = _aimpactChatSdk100Initialize;
    }, function (_aimpactAilearnApp0032ModelGclassroom) {
      dependency_14 = _aimpactAilearnApp0032ModelGclassroom;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_15 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Settings) {
      dependency_16 = _aimpactChatSdk100Settings;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@aimpact/ailearn-app/model/wrapper', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@aimpact/chat/extensions', dependency_6], ['react', dependency_7], ['pragmate-ui/icons', dependency_8], ['pragmate-ui/image', dependency_9], ['@beyond-js/reactive/model', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@beyond-js/kernel/core', dependency_12], ['@aimpact/chat-sdk/initialize', dependency_13], ['@aimpact/ailearn-app/model/gclassroom', dependency_14], ['@aimpact/ailearn-sdk/core', dependency_15], ['@aimpact/chat-sdk/settings', dependency_16]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "aimpact-chat-control",
        "attrs": ["id", "container"],
        "vspecifier": "@aimpact/chat@1.0.1/chat-control.widget"
      }, {
        "name": "chat-wd-page",
        "vspecifier": "@aimpact/chat@1.0.1/chat-page.widget",
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
        "name": "aimpact-chat-user-profile",
        "vspecifier": "@aimpact/chat@1.0.1/user/profile.widget"
      }, {
        "name": "chat-home-page",
        "vspecifier": "@aimpact/chat@1.0.1/home.widget",
        "is": "page",
        "route": "/_this_route_does_not_exists",
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
        "name": "general-layout",
        "vspecifier": "@aimpact/chat@1.0.1/general-layout",
        "is": "layout"
      }, {
        "name": "chat-sdk-markdown-page",
        "vspecifier": "@aimpact/chat-sdk@1.0.0//chat-sdk/markdown",
        "is": "page",
        "route": "/chat/sdk/markdown",
        "layout": "general-layout"
      }, {
        "name": "chat-sdk-playable",
        "vspecifier": "@aimpact/chat-sdk@1.0.0/chat-sdk/playable",
        "is": "page",
        "route": "/chat/sdk/playable"
      }, {
        "name": "auth-layout",
        "vspecifier": "@aimpact/auth@0.0.1/auth-layout",
        "is": "layout"
      }, {
        "name": "auth-login-page",
        "vspecifier": "@aimpact/auth@0.0.1/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }, {
        "name": "aimpact-login-presentation",
        "attrs": ["dynamic-children"],
        "vspecifier": "@aimpact/auth@0.0.1/auth/login/presentation.widget"
      }, {
        "name": "auth-recover-password-page",
        "vspecifier": "@aimpact/auth@0.0.1/auth-recover-password.widget",
        "is": "page",
        "route": "/auth/recover-password",
        "layout": "auth-layout"
      }, {
        "name": "auth-recovery-page",
        "vspecifier": "@aimpact/auth@0.0.1/auth-recovery.widget",
        "is": "page",
        "route": "/auth/recovery",
        "layout": "auth-layout"
      }, {
        "name": "auth-register-page",
        "vspecifier": "@aimpact/auth@0.0.1/auth-register.widget",
        "is": "page",
        "route": "/auth/register",
        "layout": "auth-layout"
      }, {
        "name": "reactive-layout",
        "vspecifier": "@beyond-js/reactive@1.1.12/reactive-layout",
        "is": "layout"
      }, {
        "name": "coming-soon",
        "vspecifier": "pragmate-ui@0.1.0/coming-soon",
        "is": "page",
        "route": "/components/coming-soon"
      }, {
        "name": "pui-template-view-widget",
        "vspecifier": "pragmate-ui@0.1.0/pui/template/palette"
      }, {
        "name": "ailearn-sessions-access",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/sessions/access.widget",
        "is": "page",
        "route": "/sessions/access/${id}",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-assignments-all-in-one",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/all-in-one.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/all-in-one/${id}",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "general-layout"
      }, {
        "name": "ailearn-assignments-chat",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/chat.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/activity/${activityId}/chat/${chatId}",
        "layout": "general-layout"
      }, {
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "general-layout"
      }, {
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "general-layout"
      }, {
        "name": "assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignment-dashboard-participant.widget"
      }, {
        "name": "assignment-dashboard-participant-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/dashboard/participant",
        "is": "page",
        "route": "/assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "general-layout"
      }, {
        "name": "dashboard-wall",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/dashboard-wall.widget",
        "is": "page",
        "route": "/assignments/${id}/wall",
        "layout": "general-layout"
      }, {
        "name": "assignment-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignment-intro.widget"
      }, {
        "name": "ailearn-assignments-coach-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/coach/list.widget",
        "is": "page",
        "route": "/assignments/${id}/coach/list",
        "layout": "general-layout"
      }, {
        "name": "ailearn-assignments-student-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/student/list.widget",
        "is": "page",
        "route": "/assignments/${id}/student/list",
        "layout": "general-layout"
      }, {
        "name": "ailearn-gclassroom-permissions",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/gclassroom-permissions.widget"
      }, {
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "general-layout"
      }, {
        "name": "ailearn-gclassrooms-access",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/gclassroom/access.widget",
        "is": "page",
        "route": "/gclassroom/access",
        "layout": "chat-layout"
      }, {
        "name": "app-classrooms-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/classrooms/create.widget",
        "is": "page",
        "route": "/classrooms/create",
        "layout": "general-layout"
      }, {
        "name": "ailearn-gclassroom-explorer",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/gclassroom-explorer.widget"
      }, {
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "general-layout"
      }, {
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "general-layout"
      }, {
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "general-layout"
      }, {
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "general-layout"
      }, {
        "name": "app-modules-management",
        "attrs": ["id", "activityId"],
        "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/management/settings.widget"
      }, {
        "name": "app-modules-management-ceate",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "general-layout"
      }, {
        "name": "app-organizations-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/organizations/create.widget",
        "is": "page",
        "route": "/organizations/create",
        "layout": "general-layout"
      }, {
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "general-layout"
      }, {
        "name": "ailearn-organizations-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/organizations/list.widget",
        "is": "page",
        "route": "/organizations/list",
        "layout": "general-layout"
      }, {
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "general-layout"
      }, {
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "general-layout"
      }, {
        "name": "ailearn-empty-layout",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/layout/empty",
        "is": "layout"
      }, {
        "name": "ailearn-layout",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/layout/main",
        "is": "layout"
      }, {
        "name": "app-policies-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/pages/age.widget",
        "is": "page",
        "route": "/user-validation"
      }, {
        "name": "ailearn-access-code-apage",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/pages/early-access.widget",
        "is": "page",
        "route": "/early-access"
      }, {
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/home.widget",
        "is": "page",
        "route": "/",
        "layout": "general-layout"
      }, {
        "name": "app-missing",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/missing.widget",
        "is": "page",
        "route": "/not-found",
        "layout": "general-layout"
      }, {
        "name": "ailearn-terms-and-conditions-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/pages/terms",
        "is": "page",
        "route": "/app/${page}"
      }, {
        "name": "ailearn-template-tipography",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/template/typography",
        "is": "page",
        "route": "/template/typography",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/ui/components",
        "is": "page",
        "route": "/ui/components",
        "layout": "chat-layout"
      }]);
      bundles = [];
      /****************************************
      MODULE: @aimpact/ailearn-app/core/routing
      ****************************************/
      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/core/routing"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /*********************************
        INTERNAL MODULE: ./handlers/access
        *********************************/

        ims.set('./handlers/access', {
          hash: 3522041985,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkAccess = checkAccess;
            var _session = require("@aimpact/chat-sdk/session");
            const PUBLIC_ROUTES = ['/auth/login', '/auth/register', '/auth/recovery', '/auth/recover-password', '/documents/access', '/reactive/testing', '/terms-and-conditions', '/privacy'];
            async function checkAccess(pathname) {
              await _session.sessionWrapper.isReady;
              if (!_session.sessionWrapper.logged && PUBLIC_ROUTES.includes(pathname)) return true;
              if (_session.sessionWrapper.logged && (await _session.sessionWrapper.user.hasAccess())) {
                return true;
              }
              return {
                pathname: '/early-access'
              };
            }
          }
        });

        /*******************************
        INTERNAL MODULE: ./handlers/home
        *******************************/

        ims.set('./handlers/home', {
          hash: 2813883843,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkHome = checkHome;
            async function checkHome(pathname) {
              return true;
            }
          }
        });

        /***********************************
        INTERNAL MODULE: ./handlers/policies
        ***********************************/

        ims.set('./handlers/policies', {
          hash: 4089028535,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkPolicies = checkPolicies;
            var _session = require("@aimpact/chat-sdk/session");
            const PUBLIC_ROUTES = ['/app/terms', '/app/privacy'];
            async function checkPolicies(pathname, router) {
              await _session.sessionWrapper.isReady;
              const {
                termsAccepted,
                age
              } = _session.sessionWrapper.user;
              if (PUBLIC_ROUTES.includes(pathname)) return true;
              if (!termsAccepted && age > 17 || !age) {
                return {
                  pathname: '/user-validation'
                };
              }
              if (router.previous) {
                const pathname = router.previous;
                router.previous = void 0;
                return {
                  pathname
                };
              }
              return true;
            }
          }
        });

        /**********************************
        INTERNAL MODULE: ./handlers/session
        **********************************/

        ims.set('./handlers/session', {
          hash: 4264826578,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkSession = checkSession;
            var _session = require("@aimpact/chat-sdk/session");
            var _routing = require("@beyond-js/kernel/routing");
            const PUBLIC_ROUTES = ['/auth/login', '/auth/register', '/auth/recovery', '/auth/recover-password', '/documents/access', '/reactive/testing'];
            const DEFAULT_ROUTE = '/auth/login';
            const onLogout = () => {
              _routing.routing.replaceState({}, '', '/');
            };
            _session.sessionWrapper.on('logout', onLogout);
            async function checkSession(pathname, router) {
              await _session.sessionWrapper.isReady;
              if (!_session.sessionWrapper.logged && PUBLIC_ROUTES.includes(pathname)) {
                return {
                  pathname
                };
              }
              if (PUBLIC_ROUTES.includes(pathname) || _session.sessionWrapper.logged) return true;
              router.previous = pathname;
              return {
                pathname: DEFAULT_ROUTE
              };
            }
          }
        });

        /*******************************
        INTERNAL MODULE: ./public-routes
        *******************************/

        ims.set('./public-routes', {
          hash: 2497449379,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PUBLIC_ROUTES = void 0;
            const PUBLIC_ROUTES = exports.PUBLIC_ROUTES = ['/auth/login', '/auth/register', '/auth/recovery', '/auth/recover-password', '/documents/access', '/reactive/testing'];
          }
        });

        /************************
        INTERNAL MODULE: ./router
        ************************/

        ims.set('./router', {
          hash: 2413344932,
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
              #previous;
              get previous() {
                return this.#previous;
              }
              set previous(pathname) {
                if (pathname === this.#previous) return;
                this.#previous = pathname;
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
                  let response = await handler(path, this);
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
          hash: 945938749,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            var _router = require("./router");
            var _session = require("./handlers/session");
            var _home = require("./handlers/home");
            var _access = require("./handlers/access");
            var _policies = require("./handlers/policies");
            const router = new _router.Router([_session.checkSession, _access.checkAccess, _policies.checkPolicies, _home.checkHome]);
            _routing.routing.redirect = async function redirect(uri) {
              const response = await router.validate(uri.pathname);
              return response.pathname;
            };
            _routing.routing.missing = async function redirect() {
              return 'app-missing';
            };
          }
        });
        return {
          dependencies: ['@aimpact/chat-sdk/session', '@aimpact/ailearn-app/model/wrapper', '@beyond-js/kernel/routing']
        };
      }]);

      /******************************************
      MODULE: @aimpact/ailearn-app/initialize-app
      ******************************************/

      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/initialize-app"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /****************************
        INTERNAL MODULE: ./extensions
        ****************************/

        ims.set('./extensions', {
          hash: 1654010933,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.registerExtensions = registerExtensions;
            var _extensions = require("@aimpact/chat/extensions");
            function registerExtensions() {
              const register = _extensions.extensions.register.bind(_extensions.extensions);
              register('chat-intro', async metadata => {
                if (!metadata.activity && !metadata?.lesson && !metadata?.topic) return;
                return {
                  control: 'assignment-intro',
                  metadata: {
                    avoidChat: false
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

        /*******************************
        INTERNAL MODULE: ./icons/profile
        *******************************/

        ims.set('./icons/profile', {
          hash: 2038903291,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.ProfileIcon = void 0;
            var _react = require("react");
            var _icons = require("pragmate-ui/icons");
            var _session = require("@aimpact/chat-sdk/session");
            var _image = require("pragmate-ui/image");
            /* bundle */
            const ProfileIcon = ({
              onClick
            }) => {
              const [loadError, setLoadError] = _react.default.useState(false);
              if (!_session.sessionWrapper.user) return;
              const userProps = _session.sessionWrapper.user.getProperties();
              const handleLoadError = () => setLoadError(true);
              return _react.default.createElement("div", {
                className: "aside-item",
                onClick: onClick
              }, !loadError ? _react.default.createElement(_image.Image, {
                alt: "user image profile",
                src: userProps.photoURL,
                onError: handleLoadError
              }) : _react.default.createElement(_icons.Icon, {
                className: "lg",
                icon: 'user'
              }));
            };
            exports.ProfileIcon = ProfileIcon;
          }
        });

        /***********************
        INTERNAL MODULE: ./index
        ***********************/

        ims.set('./index', {
          hash: 2120717246,
          creator: function (require, exports) {
            "use strict";

            var _startup = require("./startup");
            _startup.Startup.setup();
          }
        });

        /*************************
        INTERNAL MODULE: ./startup
        *************************/

        ims.set('./startup', {
          hash: 1329009314,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.Startup = void 0;
            var _model = require("@beyond-js/reactive/model");
            var _extensions = require("./extensions");
            var _render = require("@beyond-js/widgets/render");
            var _initialize = require("@aimpact/chat-sdk/initialize");
            var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
            var _session = require("@aimpact/chat-sdk/session");
            var _core = require("@aimpact/ailearn-sdk/core");
            var _settings = require("@aimpact/chat-sdk/settings");
            class Startup extends _model.ReactiveModel {
              constructor() {
                super();
                this.#start();
                _settings.SDKSettings.userModel = _core.User;
              }
              #start = async () => {
                const promises = [(0, _initialize.initDB)(), _gclassroom.gclassroom.isReady, _session.sessionWrapper.isReady];
                await Promise.all(promises);
                this.checkMode();
                (0, _extensions.registerExtensions)();
              };
              checkMode() {
                const dyslexiaMode = localStorage.getItem('aimpact.accessibility.mode') ? localStorage.getItem('aimpact.accessibility.mode') : 'normal';
                const container = document.querySelector('html');
                if (container) {
                  container.setAttribute('data-accessibility-mode', dyslexiaMode);
                  _render.widgets.attributes.add('data-accessibility-mode', dyslexiaMode);
                }
              }
              static setup() {
                const instance = new Startup();
              }
            }
            exports.Startup = Startup;
          }
        });
        exports.descriptor = [{
          "im": "./icons/profile",
          "from": "ProfileIcon",
          "name": "ProfileIcon"
        }];
        return {
          dependencies: ['@aimpact/chat/extensions', 'react', 'pragmate-ui/icons', '@aimpact/chat-sdk/session', 'pragmate-ui/image', '@beyond-js/reactive/model', '@beyond-js/kernel/texts', '@beyond-js/kernel/core', '@beyond-js/widgets/render', '@aimpact/chat-sdk/initialize', '@aimpact/ailearn-app/model/gclassroom', '@aimpact/ailearn-sdk/core', '@aimpact/chat-sdk/settings']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});