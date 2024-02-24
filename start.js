System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@0.1.5/render", "@aimpact/ailearn-app@0.0.24/model/wrapper", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/image", "@aimpact/chat@1.0.1/sidebar/manager", "@aimpact/ailearn-app@0.0.24/shared/icons", "@beyond-js/reactive@1.1.11/model", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.0/initialize", "@aimpact/ailearn-app@0.0.24/model/gclassroom", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/settings"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets015Render) {
      dependency_2 = _beyondJsWidgets015Render;
    }, function (_aimpactAilearnApp0024ModelWrapper) {
      dependency_3 = _aimpactAilearnApp0024ModelWrapper;
    }, function (_aimpactChatSdk100Session) {
      dependency_4 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101Extensions) {
      dependency_6 = _aimpactChat101Extensions;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi006Icons) {
      dependency_8 = _pragmateUi006Icons;
    }, function (_pragmateUi006Image) {
      dependency_9 = _pragmateUi006Image;
    }, function (_aimpactChat101SidebarManager) {
      dependency_10 = _aimpactChat101SidebarManager;
    }, function (_aimpactAilearnApp0024SharedIcons) {
      dependency_11 = _aimpactAilearnApp0024SharedIcons;
    }, function (_beyondJsReactive1111Model) {
      dependency_12 = _beyondJsReactive1111Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_13 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Core) {
      dependency_14 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk100Initialize) {
      dependency_15 = _aimpactChatSdk100Initialize;
    }, function (_aimpactAilearnApp0024ModelGclassroom) {
      dependency_16 = _aimpactAilearnApp0024ModelGclassroom;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_17 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Settings) {
      dependency_18 = _aimpactChatSdk100Settings;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@aimpact/ailearn-app/model/wrapper', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@aimpact/chat/extensions', dependency_6], ['react', dependency_7], ['pragmate-ui/icons', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/chat/sidebar/manager', dependency_10], ['@aimpact/ailearn-app/shared/icons', dependency_11], ['@beyond-js/reactive/model', dependency_12], ['@beyond-js/kernel/texts', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['@aimpact/chat-sdk/initialize', dependency_15], ['@aimpact/ailearn-app/model/gclassroom', dependency_16], ['@aimpact/ailearn-sdk/core', dependency_17], ['@aimpact/chat-sdk/settings', dependency_18]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "aimpact-chat-control",
        "attrs": ["id"],
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
        "vspecifier": "@beyond-js/reactive@1.1.11/reactive-layout",
        "is": "layout"
      }, {
        "name": "coming-soon",
        "vspecifier": "pragmate-ui@0.0.6/coming-soon",
        "is": "page",
        "route": "/components/coming-soon"
      }, {
        "name": "pui-template-view-widget",
        "vspecifier": "pragmate-ui@0.0.6/pui/template/palette"
      }, {
        "name": "ailearn-sessions-access",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/sessions/access.widget",
        "is": "page",
        "route": "/sessions/access/${id}",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-assignments-all-in-one",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/all-in-one.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/all-in-one/${id}",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "general-layout"
      }, {
        "name": "ailearn-assignments-chat",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/chat.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/activity/${activityId}/chat/${chatId}",
        "layout": "general-layout"
      }, {
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "general-layout"
      }, {
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "general-layout"
      }, {
        "name": "assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignment-dashboard-participant.widget"
      }, {
        "name": "assignment-dashboard-participant-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/dashboard/participant",
        "is": "page",
        "route": "/assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "general-layout"
      }, {
        "name": "dashboard-wall",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/dashboard-wall.widget",
        "is": "page",
        "route": "/assignments/${id}/wall",
        "layout": "general-layout"
      }, {
        "name": "assignment-intro",
        "attrs": ["metadata"],
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignment-intro.widget"
      }, {
        "name": "ailearn-assignments-coach-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/coach/list.widget",
        "is": "page",
        "route": "/assignments/${id}/coach/list",
        "layout": "general-layout"
      }, {
        "name": "ailearn-assignments-student-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/student/list.widget",
        "is": "page",
        "route": "/assignments/${id}/student/list",
        "layout": "general-layout"
      }, {
        "name": "ailearn-gclassroom-permissions",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/gclassroom-permissions.widget"
      }, {
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "general-layout"
      }, {
        "name": "ailearn-gclassrooms-access",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/gclassroom/access.widget",
        "is": "page",
        "route": "/gclassroom/access",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-gclassroom-explorer",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/gclassroom-explorer.widget"
      }, {
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "general-layout"
      }, {
        "name": "ailearn-classroom-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "general-layout"
      }, {
        "name": "app-classroom-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/classroom/management.widget",
        "is": "page",
        "route": "/classroom/management/${id}",
        "layout": "general-layout"
      }, {
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "general-layout"
      }, {
        "name": "app-modules-management",
        "attrs": ["id"],
        "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management/settings.widget"
      }, {
        "name": "app-modules-management-ceate",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "general-layout"
      }, {
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "general-layout"
      }, {
        "name": "ailearn-organizations-list",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/organizations/list.widget",
        "is": "page",
        "route": "/organizations/list",
        "layout": "general-layout"
      }, {
        "name": "app-organization-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/organization/management.widget",
        "is": "page",
        "route": "/organization/management/${id}",
        "layout": "general-layout"
      }, {
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/user/profile.widget"
      }, {
        "name": "ailearn-layout",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/layout/main",
        "is": "layout"
      }, {
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/home.widget",
        "is": "page",
        "route": "/home",
        "layout": "general-layout"
      }, {
        "name": "ailearn-missing",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/missing.widget",
        "is": "page",
        "route": "/not-found",
        "layout": "general-layout"
      }, {
        "name": "ailearn-template-tipography",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/template/typography",
        "is": "page",
        "route": "/template/typography",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/ui/components",
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
          "vspecifier": "@aimpact/ailearn-app@0.0.24/core/routing"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /*******************************
        INTERNAL MODULE: ./handlers/home
        *******************************/

        ims.set('./handlers/home', {
          hash: 3990652094,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkHome = checkHome;
            var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
            async function checkHome(pathname) {
              // if (pathname === '/home' && AiLearnWrapper.isTeacher) return { pathname: '/modules/list' };
              if (pathname === '/') {
                const pathname = _wrapper.AiLearnWrapper.isTeacher ? '/home' : '/home';
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
          hash: 294390580,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkSession = checkSession;
            var _session = require("@aimpact/chat-sdk/session");
            const PUBLIC_ROUTES = ['/auth/login', '/auth/register', '/auth/recovery', '/auth/recover-password', '/documents/access', '/reactive/testing'];
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
          hash: 1391861491,
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
          hash: 19167772,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            var _router = require("./router");
            var _session = require("./handlers/session");
            var _home = require("./handlers/home");
            const router = new _router.Router([_session.checkSession, _home.checkHome]);
            _routing.routing.redirect = async function redirect(uri) {
              const response = await router.validate(uri.pathname);
              return response.pathname;
            };
            _routing.routing.missing = async function redirect() {
              return '/not-found';
            };
          }
        });
        return {
          dependencies: ['@aimpact/ailearn-app/model/wrapper', '@aimpact/chat-sdk/session', '@beyond-js/kernel/routing']
        };
      }]);

      /******************************************
      MODULE: @aimpact/ailearn-app/initialize-app
      ******************************************/

      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/initialize-app",
          "multibundle": true
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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

        /**********************
        INTERNAL MODULE: ./menu
        **********************/

        ims.set('./menu', {
          hash: 256472181,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.initMenu = initMenu;
            var _manager = require("@aimpact/chat/sidebar/manager");
            var _icons = require("@aimpact/ailearn-app/shared/icons");
            var _profile = require("./icons/profile");
            var _session = require("@aimpact/chat-sdk/session");
            async function initMenu(texts) {
              const modules = [{
                id: 'modules',
                icon: _icons.ICONS.classworks,
                name: texts.modules,
                href: 'modules/list'
              }, {
                id: 'classrooms',
                icon: _icons.ICONS.classes,
                name: texts.classrooms,
                href: 'classrooms/list'
              }];
              if (_session.sessionWrapper.logged) {
                renderBottom();
              } else {
                _session.sessionWrapper.on('login', renderBottom);
              }
              function renderBottom() {
                const modulesBottom = [{
                  id: 'profile',
                  control: _profile.ProfileIcon,
                  title: _session.sessionWrapper.user.getProperties().email,
                  Explorer: 'ailearn-user-profile',
                  order: 'start'
                }];
                _manager.SidebarManager.register(modulesBottom, 'bottom');
              }
              _manager.SidebarManager.register(modules);
            }
          }
        });

        /*************************
        INTERNAL MODULE: ./startup
        *************************/

        ims.set('./startup', {
          hash: 3897884481,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.Startup = void 0;
            var _model = require("@beyond-js/reactive/model");
            var _texts = require("@beyond-js/kernel/texts");
            var _core = require("@beyond-js/kernel/core");
            var _beyond_context = require("beyond_context");
            var _menu = require("./menu");
            var _extensions = require("./extensions");
            var _render = require("@beyond-js/widgets/render");
            var _initialize = require("@aimpact/chat-sdk/initialize");
            var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
            var _session = require("@aimpact/chat-sdk/session");
            var _core2 = require("@aimpact/ailearn-sdk/core");
            var _settings = require("@aimpact/chat-sdk/settings");
            class Startup extends _model.ReactiveModel {
              #textReady;
              #textsModel;
              #texts;
              get texts() {
                return this.#texts;
              }
              constructor() {
                super();
                this.#textsModel = new _texts.CurrentTexts(_beyond_context.module.specifier);
                this.#textsModel.on('change', this.#start);
                this.#textReady = new _core.PendingPromise();
                this.#start();
                _settings.SDKSettings.userModel = _core2.User;
              }
              #start = async () => {
                if (!this.#textsModel.ready) return this.#textReady;
                const promises = [(0, _initialize.initDB)(), _gclassroom.gclassroom.isReady, _session.sessionWrapper.isReady];
                await Promise.all(promises);
                this.#textReady.resolve();
                this.#texts = this.#textsModel.value;
                (0, _menu.initMenu)(this.#texts);
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
          dependencies: ['@aimpact/chat/extensions', 'react', 'pragmate-ui/icons', '@aimpact/chat-sdk/session', 'pragmate-ui/image', '@aimpact/chat/sidebar/manager', '@aimpact/ailearn-app/shared/icons', '@beyond-js/reactive/model', '@beyond-js/kernel/texts', '@beyond-js/kernel/core', '@beyond-js/widgets/render', '@aimpact/chat-sdk/initialize', '@aimpact/ailearn-app/model/gclassroom', '@aimpact/ailearn-sdk/core', '@aimpact/chat-sdk/settings']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});