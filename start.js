System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@1.1.0/render", "@aimpact/ailearn-app@0.1.3-test.04/model/wrapper", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/image", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-app@0.1.3-test.04/model/gclassroom", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.1.3-test.04/config", "@aimpact/chat-sdk@1.0.1/startup"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets110Render) {
      dependency_2 = _beyondJsWidgets110Render;
    }, function (_aimpactAilearnApp013Test04ModelWrapper) {
      dependency_3 = _aimpactAilearnApp013Test04ModelWrapper;
    }, function (_aimpactChatSdk101Session) {
      dependency_4 = _aimpactChatSdk101Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_7 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Image) {
      dependency_8 = _pragmateUi100Beta1Image;
    }, function (_beyondJsReactive120Model) {
      dependency_9 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnApp013Test04ModelGclassroom) {
      dependency_10 = _aimpactAilearnApp013Test04ModelGclassroom;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_11 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp013Test04Config) {
      dependency_12 = _aimpactAilearnApp013Test04Config;
    }, function (_aimpactChatSdk101Startup) {
      dependency_13 = _aimpactChatSdk101Startup;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@aimpact/ailearn-app/model/wrapper', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['react', dependency_6], ['pragmate-ui/icons', dependency_7], ['pragmate-ui/image', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@aimpact/ailearn-app/model/gclassroom', dependency_10], ['@aimpact/ailearn-sdk/core', dependency_11], ['@aimpact/ailearn-app/config', dependency_12], ['@aimpact/chat-sdk/startup', dependency_13]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "aimpact-chat-control",
        "attrs": ["id", "container", "disabled", "playable"],
        "vspecifier": "@aimpact/chat@1.0.2/chat-control.widget"
      }, {
        "name": "chat-wd-page",
        "vspecifier": "@aimpact/chat@1.0.2/chat-page.widget",
        "is": "page",
        "route": "/chat/${id}",
        "layout": "chat-layout"
      }, {
        "name": "chat-explorer-view",
        "vspecifier": "@aimpact/chat@1.0.2/conversations/explorer.widget"
      }, {
        "name": "chat-documents-access",
        "vspecifier": "@aimpact/chat@1.0.2/documents/access.widget",
        "is": "page",
        "route": "/documents/access",
        "layout": "auth-layout"
      }, {
        "name": "app-documents-page",
        "vspecifier": "@aimpact/chat@1.0.2/documents.widget",
        "is": "page",
        "route": "/documents",
        "layout": "chat-layout"
      }, {
        "name": "aimpact-chat-user-profile",
        "vspecifier": "@aimpact/chat@1.0.2/user/profile.widget"
      }, {
        "name": "chat-home-page",
        "vspecifier": "@aimpact/chat@1.0.2/home.widget",
        "is": "page",
        "route": "/_this_route_does_not_exists",
        "layout": "chat-layout"
      }, {
        "name": "auth-layout",
        "vspecifier": "@aimpact/chat@1.0.2/auth-layout",
        "is": "layout"
      }, {
        "name": "chat-layout",
        "vspecifier": "@aimpact/chat@1.0.2/chat-layout",
        "is": "layout"
      }, {
        "name": "default-layout",
        "vspecifier": "@aimpact/chat@1.0.2/default-layout",
        "is": "layout"
      }, {
        "name": "general-layout",
        "vspecifier": "@aimpact/chat@1.0.2/general-layout",
        "is": "layout"
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
        "name": "chat-sdk-markdown-page",
        "vspecifier": "@aimpact/chat-sdk@1.0.1//chat-sdk/markdown",
        "is": "page",
        "route": "/chat/sdk/markdown",
        "layout": "general-layout"
      }, {
        "name": "chat-sdk-playable",
        "vspecifier": "@aimpact/chat-sdk@1.0.1/chat-sdk/playable",
        "is": "page",
        "route": "/chat/sdk/playable"
      }, {
        "name": "coming-soon",
        "vspecifier": "pragmate-ui@1.0.0-beta.1/coming-soon",
        "is": "page",
        "route": "/components/coming-soon"
      }, {
        "name": "pui-template-view-widget",
        "vspecifier": "pragmate-ui@1.0.0-beta.1/pui/template/palette"
      }, {
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "dashboard-layout"
      }, {
        "name": "old-assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/assignment-dashboard-participant.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "dashboard-layout"
      }, {
        "name": "dashboard-wall",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/dashboard-wall.widget",
        "is": "page",
        "route": "/assignments/${id}/wall",
        "layout": "dashboard-layout"
      }, {
        "name": "ailearn-sessions-access",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/sessions/access.widget",
        "is": "page",
        "route": "/sessions/access/${id}",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-assignments-all-in-one",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/assignments/all-in-one.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/all-in-one/${id}",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-character-talk",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/assignments/character-talk.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-debate-activity-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/assignments/debate.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-assignments-coach-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/assignments/coach/list.widget",
        "is": "page",
        "route": "/assignments/${id}/coach/list",
        "layout": "main-layout"
      }, {
        "name": "ailearn-assignments-student-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/assignments/student/list.widget",
        "is": "page",
        "route": "/assignments/${id}/student/list",
        "layout": "main-layout"
      }, {
        "name": "ailearn-gclassroom-permissions",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/gclassroom-permissions.widget"
      }, {
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-gclassrooms-access",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/gclassroom/access.widget",
        "is": "page",
        "route": "/gclassroom/access",
        "layout": "chat-layout"
      }, {
        "name": "app-classrooms-create",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/classrooms/create.widget",
        "is": "page",
        "route": "/classrooms/create",
        "layout": "main-layout"
      }, {
        "name": "ailearn-gclassroom-explorer",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/gclassroom-explorer.widget"
      }, {
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "main-layout"
      }, {
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }, {
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }, {
        "name": "app-modules-management",
        "attrs": ["id", "activityId"],
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/modules/management/settings.widget"
      }, {
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }, {
        "name": "app-organizations-create",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/organizations/create.widget",
        "is": "page",
        "route": "/organizations/create",
        "layout": "main-layout"
      }, {
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "main-layout"
      }, {
        "name": "ailearn-organizations-list",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/organizations/list.widget",
        "is": "page",
        "route": "/organizations/list",
        "layout": "main-layout"
      }, {
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }, {
        "name": "dashboard-layout",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/dashboard-layout.widget",
        "is": "layout"
      }, {
        "name": "ailearn-empty-layout",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/layout/empty",
        "is": "layout"
      }, {
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/main-layout.widget",
        "is": "layout"
      }, {
        "name": "app-policies-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/pages/age.widget",
        "is": "page",
        "route": "/user-validation"
      }, {
        "name": "ailearn-community-modules",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/community.widget",
        "is": "page",
        "route": "/community",
        "layout": "main-layout"
      }, {
        "name": "app-not-allowed",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/not-allowed-control.widget"
      }, {
        "name": "app-not-allowed-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/not-allowed-page.widget"
      }, {
        "name": "app-missing-control",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/missing.widget"
      }, {
        "name": "app-missing-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/missing-page.widget",
        "is": "page",
        "route": "/error-404",
        "layout": "main-layout"
      }, {
        "name": "app-system-error-control",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/system-error-widget.widget"
      }, {
        "name": "app-system-error-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/system-error.widget",
        "is": "page",
        "route": "/error-500",
        "layout": "main-layout"
      }, {
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }, {
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }, {
        "name": "privacy-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/pages/privacy",
        "is": "page",
        "route": "/privacy"
      }, {
        "name": "ailearn-terms-and-conditions-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/pages/terms",
        "is": "page",
        "route": "/terms-and-conditions"
      }, {
        "name": "app-updating-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/pages/updating.widget",
        "is": "page",
        "route": "/updating"
      }, {
        "name": "app-template-bottom-bar",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/template/bottom-bar",
        "is": "page",
        "route": "/template/bottom-bar"
      }, {
        "name": "ailearn-template-typography",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/template/typography",
        "is": "page",
        "route": "/template/typography",
        "layout": "ailearn-layout"
      }, {
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/ui/components",
        "is": "page",
        "route": "/ui/components",
        "layout": "chat-layout"
      }, {
        "name": "app-test-components",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/test/blank",
        "is": "page",
        "route": "/tests/blank"
      }, {
        "name": "app-test-web-component",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/test/web-component"
      }]);
      bundles = [];
      /***********************************
      MODULE: @aimpact/ailearn-app/routing
      ***********************************/
      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/routing"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-test.04"], ["@aimpact/ailearn-app", "0.1.3-test.04"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /*******************************
        INTERNAL MODULE: ./handlers/home
        *******************************/

        ims.set('./handlers/home', {
          hash: 3464692361,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkHome = checkHome;
            async function checkHome({
              pathname
            }, router, next) {
              return next();
            }
          }
        });

        /***********************************
        INTERNAL MODULE: ./handlers/policies
        ***********************************/

        ims.set('./handlers/policies', {
          hash: 779423052,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkPolicies = checkPolicies;
            var _session = require("@aimpact/chat-sdk/session");
            var _publicRoutes = require("../public-routes");
            async function checkPolicies(uriObject, router, next) {
              await _session.sessionWrapper.isReady;
              await _session.sessionWrapper?.user?.isReady;
              const {
                pathname,
                uri
              } = uriObject;
              const {
                termsAccepted,
                age
              } = _session.sessionWrapper.user;
              if (_publicRoutes.PUBLIC_ROUTES.includes(pathname)) return uri;
              if (!termsAccepted && age > 17 || !age) {
                if (pathname && pathname !== '/user-validation') router.previous = uriObject;
                return {
                  pathname: '/user-validation'
                };
              }
              if (pathname === '/user-validation' && termsAccepted && age > 17) {
                return {
                  pathname: '/'
                };
              }
              return next();
            }
          }
        });

        /********************************
        INTERNAL MODULE: ./handlers/roles
        ********************************/

        ims.set('./handlers/roles', {
          hash: 2323505560,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkRoles = checkRoles;
            var _session = require("@aimpact/chat-sdk/session");
            async function checkRoles(uri, router, next) {
              const {
                pathname
              } = uri;
              await _session.sessionWrapper.isReady;
              const regex = /^\/assignments\/.+$/;
              const isAssigment = regex.test(pathname);
              if (isAssigment) return next();
              const validRoutes = ['/users/me', '/organizations/create', '/organizations/join'];
              function containsPath(paths, url) {
                for (const path of paths) {
                  if (url.includes(path)) {
                    return true;
                  }
                }
                return false;
              }
              if (!_session.sessionWrapper.user.roles.length && !containsPath(validRoutes, uri.uri)) {
                return {
                  pathname: '/next-steps'
                };
              }
              return next();
            }
          }
        });

        /**********************************
        INTERNAL MODULE: ./handlers/session
        **********************************/

        ims.set('./handlers/session', {
          hash: 683799712,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkSession = checkSession;
            var _session = require("@aimpact/chat-sdk/session");
            var _routing = require("@beyond-js/kernel/routing");
            var _publicRoutes = require("../public-routes");
            const DEFAULT_ROUTE = '/auth/login';
            const onLogout = () => {
              _routing.routing.replaceState({}, '', '/');
            };
            _session.sessionWrapper.on('logout', onLogout);
            async function checkSession(uri, router, next) {
              const {
                pathname
              } = uri;
              await _session.sessionWrapper.isReady;
              if (!_session.sessionWrapper.logged && _publicRoutes.PUBLIC_ROUTES.includes(pathname)) {
                return {
                  pathname
                };
              }
              if (_session.sessionWrapper.logged && _session.sessionWrapper.user?.outdated) {
                return {
                  pathname: '/updating'
                };
              }
              if (_session.sessionWrapper.logged && _publicRoutes.AUTH_ROUTES.includes(pathname)) {
                return {
                  pathname: '/'
                };
              }
              if (!_publicRoutes.AUTH_ROUTES.includes(pathname) && _publicRoutes.PUBLIC_ROUTES.includes(pathname) || _session.sessionWrapper.logged) {
                //	if (router.previous !== pathname) return { pathname: router.previous };
                return next(router.previous);
              }
              router.previous = uri;
              //Linda te consulte si eras la misma de la foto y creo que me bloqueaste, no quise ofender, pero me ha pasado que no es asi, queria conocerte para los ultimos dias de la semana, si podes, contestame, gracias
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
          hash: 2866617319,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PUBLIC_ROUTES = exports.AUTH_ROUTES = void 0;
            const PUBLIC_ROUTES = exports.PUBLIC_ROUTES = ['/auth/login', '/auth/register', '/auth/recovery', '/auth/recover-password', '/documents/access', '/privacy', '/terms-and-conditions', '/reactive/testing'];
            const AUTH_ROUTES = exports.AUTH_ROUTES = ['/auth/login', '/auth/register', '/auth/recovery', '/auth/recover-password'];
          }
        });

        /************************
        INTERNAL MODULE: ./router
        ************************/

        ims.set('./router', {
          hash: 1955322997,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.Router = void 0;
            let previousURL;
            /*bundle*/
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
                return previousURL;
              }
              set previous(uri) {
                if (uri?.uri === this.#previous?.uri) return;
                this.#previous = uri;
                previousURL = uri;
              }
              #index;
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
              async process(index, uri) {
                const next = async newUri => {
                  newUri = newUri || uri;
                  if (index < this.#handlers.length - 1) {
                    return await this.process(index + 1, newUri);
                  }
                  // If there are no more handlers, just return the current URI.
                  return newUri;
                };
                if (!this.#handlers.length) return uri.uri;
                const response = await this.#handlers[index](uri, this, next);
                // if (this.previous) return { pathname: this.previous };
                return response;
              }
              async validate(uri) {
                if (!this.#handlers.length) return uri;
                return this.process(0, uri);
                // return uri.uri;
              }
              static getPreviousUrl() {
                return previousURL;
              }
            }
            exports.Router = Router;
          }
        });

        /*************************
        INTERNAL MODULE: ./routing
        *************************/

        ims.set('./routing', {
          hash: 2688367902,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            var _policies = require("./handlers/policies");
            var _roles = require("./handlers/roles");
            var _session = require("./handlers/session");
            var _router = require("./router");
            var _session2 = require("@aimpact/chat-sdk/session");
            const handlers = [_session.checkSession, _policies.checkPolicies, _roles.checkRoles];
            // const handlers = [checkSession];
            const router = new _router.Router(handlers);
            /**
             * The redirect function must returns
             * @param uri
             * @returns
             */
            _routing.routing.redirect = async function redirect(uri) {
              try {
                const onLogout = () => {
                  _routing.routing.replaceState({}, '', '/');
                  router.previous = undefined;
                };
                _session2.sessionWrapper.on('logout', onLogout);
                const response = await router.validate(uri);
                const finalRoute = response?.uri ?? response.pathname;
                return response.pathname;
              } catch (e) {
                console.error(e);
                return '/error-500';
              }
            };
            _routing.routing.missing = async function redirect() {
              return 'app-missing-page';
            };
          }
        });
        exports.descriptor = [{
          "im": "./router",
          "from": "Router",
          "name": "Router"
        }];
        return {
          dependencies: ['@aimpact/ailearn-app/model/wrapper', '@aimpact/chat-sdk/session', '@beyond-js/kernel/routing']
        };
      }]);

      /******************************************
      MODULE: @aimpact/ailearn-app/initialize-app
      ******************************************/

      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-test.04/initialize-app"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-test.04"], ["@aimpact/ailearn-app", "0.1.3-test.04"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /****************************
        INTERNAL MODULE: ./extensions
        ****************************/

        ims.set('./extensions', {
          hash: 2049006555,
          creator: function (require, exports) {
            // import { extensions } from '@aimpact/chat/extensions';
            // export function registerExtensions() {
            // 	const register = extensions.register.bind(extensions);
            // 	// register('chat-intro', async metadata => {
            // 	// 	if (!metadata.activity && !metadata?.lesson && !metadata?.topic) return;
            // 	// 	return {
            // 	// 		control: 'assignment-intro',
            // 	// 		metadata: {
            // 	// 			avoidChat: false
            // 	// 		}
            // 	// 	};
            // 	// });
            // 	register('app-menu-icon', () => {
            // 		return {
            // 			type: 'img',
            // 			src: '/assets/favicon.png'
            // 		};
            // 	});
            // }
            "use strict";
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
          hash: 1018057204,
          creator: function (require, exports) {
            "use strict";

            var _startup = require("./startup");
            globalThis.localStorage?.setItem('chat.app.user.default.profile', '/assets/rvd-profile-blue.png');
            _startup.Startup.setup();
          }
        });

        /*************************
        INTERNAL MODULE: ./startup
        *************************/

        ims.set('./startup', {
          hash: 2790733772,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.Startup = void 0;
            var _model = require("@beyond-js/reactive/model");
            var _render = require("@beyond-js/widgets/render");
            var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
            var _session = require("@aimpact/chat-sdk/session");
            var _core = require("@aimpact/ailearn-sdk/core");
            var _config = require("@aimpact/ailearn-app/config");
            var _startup = require("@aimpact/chat-sdk/startup");
            class Startup extends _model.ReactiveModel {
              constructor() {
                super();
                this.#start();
                // SDKSettings.userModel = User;
              }
              #initSDK = async () => {
                //@ts-ignore
                const {
                  environment
                } = _config.default;
                await _startup.sdkConfig.initialize({
                  environment,
                  userModel: _core.User
                });
              };
              #start = async () => {
                await this.#initSDK();
                const promises = [_gclassroom.gclassroom.isReady, _session.sessionWrapper.isReady];
                await Promise.all(promises);
                this.checkMode();
                // registerExtensions();
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
          dependencies: ['react', 'pragmate-ui/icons', '@aimpact/chat-sdk/session', 'pragmate-ui/image', '@beyond-js/reactive/model', '@beyond-js/widgets/render', '@aimpact/ailearn-app/model/gclassroom', '@aimpact/ailearn-sdk/core', '@aimpact/ailearn-app/config', '@aimpact/chat-sdk/startup']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});