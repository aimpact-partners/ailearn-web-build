System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets110Render) {
      dependency_2 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Routing) {
      dependency_3 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@beyond-js/kernel/routing', dependency_3]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "aimpact-chat-control",
        "attrs": ["id", "container", "disabled", "playable"],
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
        "name": "coming-soon",
        "vspecifier": "pragmate-ui@0.1.1/coming-soon",
        "is": "page",
        "route": "/components/coming-soon"
      }, {
        "name": "pui-template-view-widget",
        "vspecifier": "pragmate-ui@0.1.1/pui/template/palette"
      }, {
        "name": "app-missing",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/missing.widget"
      }, {
        "name": "app-beta-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/beta.widget",
        "is": "page",
        "route": "/",
        "layout": "ailearn-layout"
      }, {
        "name": "ailearn-layout",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/layout/main",
        "is": "layout"
      }]);
      bundles = [];
      /***********************************
      MODULE: @aimpact/ailearn-app/routing
      ***********************************/
      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/routing"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /*******************************
        INTERNAL MODULE: ./handlers/home
        *******************************/

        ims.set('./handlers/home', {
          hash: 1401025958,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkHome = checkHome;
            async function checkHome(uri, router, next) {
              const {
                pathname
              } = uri;
              if (pathname !== '/') {
                globalThis.localStorage.setItem('app.pathname', pathname);
                return {
                  pathname: '/'
                };
              }
              return next();
            }
          }
        });

        /************************
        INTERNAL MODULE: ./router
        ************************/

        ims.set('./router', {
          hash: 4052659225,
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
                const next = async () => {
                  if (index < this.#handlers.length - 1) {
                    return await this.process(index + 1, uri);
                  }
                  // If there are no more handlers, just return the current URI.
                  return uri.uri;
                };
                if (!this.#handlers.length) return uri.uri;
                const response = await this.#handlers[index](uri, this, next);
                return response;
              }
              async validate(uri) {
                if (!this.#handlers.length) return uri.uri;
                return this.process(0, uri);
                // return uri.uri;
              }
            }
            exports.Router = Router;
          }
        });

        /*************************
        INTERNAL MODULE: ./routing
        *************************/

        ims.set('./routing', {
          hash: 1526586716,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            var _router = require("./router");
            var _home = require("./handlers/home");
            const handlers = [_home.checkHome];
            // const handlers = [checkSession];
            const router = new _router.Router(handlers);
            _routing.routing.redirect = async function redirect(uri) {
              try {
                const response = await router.validate(uri);
                return response.pathname;
              } catch (e) {
                return '/error-500';
              }
            };
            _routing.routing.missing = async function redirect() {
              return 'app-missing-page';
            };
          }
        });
        return {
          dependencies: ['@beyond-js/kernel/routing']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});