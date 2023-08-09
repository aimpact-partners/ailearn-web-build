System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat@1.0.1/api", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@1.0.0/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, gclassroom, __beyond_pkg, hmr;
  _export("gclassroom", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChat101Api) {
      dependency_1 = _aimpactChat101Api;
    }, function (_beyondJsReactive112Model) {
      dependency_2 = _beyondJsReactive112Model;
    }, function (_aimpactChatSdk101Session) {
      dependency_3 = _aimpactChatSdk101Session;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp100Config) {
      dependency_5 = _aimpactAilearnApp100Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/model/gclassroom"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat/api', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@aimpact/ailearn-app/config', dependency_5]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4143301998,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.gclassroom = exports.GClassRoom = void 0;
          var _api = require("@aimpact/chat/api");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _core = require("@beyond-js/kernel/core");
          var _config = require("@aimpact/ailearn-app/config");
          class GClassRoom extends _model.ReactiveModel {
            #promise;
            #url;
            #MAX_TIME = 300000;
            #state;
            get state() {
              return this.#state;
            }
            #code;
            get code() {
              return this.#code;
            }
            get isReady() {
              return this.#promise;
            }
            #api;
            #error;
            get error() {
              return this.#error;
            }
            #authorized;
            #processedCallback;
            get processedCallback() {
              return this.#processedCallback;
            }
            get authorized() {
              return this.#authorized;
            }
            constructor() {
              super();
              const api = new _api.Api(_config.default.params.apis.ailearn);
              this.#api = api;
              this.#init();
            }
            async #init() {
              try {
                this.#promise = new _core.PendingPromise();
                await _session.sessionWrapper.isReady;
                if (_session.sessionWrapper.logged) {
                  const response = await this.#api.get('/gclassroom/oauth/authorized', {
                    bearer: _session.sessionWrapper.user.token
                  });
                  this.#authorized = response.data.authorized;
                  this.#promise.resolve(true);
                  this.triggerEvent();
                  return;
                }
                const onChange = () => {
                  if (_session.sessionWrapper.ready) {
                    this.#promise.resolve(true);
                  }
                };
                _session.sessionWrapper.on('change', onChange);
                this.triggerEvent();
                return this.#promise;
              } catch (e) {
                console.error(e);
              } finally {
                this.ready = true;
              }
            }
            async getUrl() {
              try {
                const response = await this.#api.get('/gclassroom/oauth/url', {
                  bearer: _session.sessionWrapper.user.token
                });
                if (!response.status) {
                  throw new Error(response.error);
                }
                return response.data.url;
              } catch (e) {
                console.error(e);
              }
            }
            async callback(state, code) {
              try {
                this.#state = state;
                this.#code = code;
                this.fetching = true;
                const response = await this.#api.get('/gclassroom/oauth/callback', {
                  bearer: _session.sessionWrapper.user.token,
                  state,
                  code
                });
                if (response.status === 'error') {
                  this.#error = response.error;
                  return;
                }
                this.#authorized = true;
                this.#processedCallback = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async courses() {
              try {
                this.fetching = true;
                const response = await this.#api.get('/gclassroom/courses', {
                  bearer: _session.sessionWrapper.user.token,
                  id: _session.sessionWrapper.user.id
                });
                if (response.status === 'error') {
                  this.#error = response.error;
                  return [];
                }
                return response.courses;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.GClassRoom = GClassRoom;
          /*bundle */
          const gclassroom = new GClassRoom();
          exports.gclassroom = gclassroom;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "gclassroom",
        "name": "gclassroom"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'gclassroom') && _export("gclassroom", gclassroom = require ? require('./index').gclassroom : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDYixLQUFLO2tCQUM1QixPQUFPLEVBQUU7O2dCQUdWLE9BQU9hLFFBQVEsQ0FBQ21CLE9BQU87ZUFDdkIsQ0FBQyxPQUFPUixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ3pCLEtBQUssQ0FBQ3dCLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ08sUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBRztVQUVNO1VBQVksTUFBTUMsVUFBVSxHQUFHLElBQUl4QyxVQUFVLEVBQUU7VUFBQ3VDIiwibmFtZXMiOlsiR0NsYXNzUm9vbSIsIlJlYWN0aXZlTW9kZWwiLCJzdGF0ZSIsImNvZGUiLCJpc1JlYWR5IiwiZXJyb3IiLCJwcm9jZXNzZWRDYWxsYmFjayIsImF1dGhvcml6ZWQiLCJjb25zdHJ1Y3RvciIsImFwaSIsIkFwaSIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiUGVuZGluZ1Byb21pc2UiLCJzZXNzaW9uV3JhcHBlciIsImxvZ2dlZCIsInJlc3BvbnNlIiwiZ2V0IiwiYmVhcmVyIiwidXNlciIsInRva2VuIiwiZGF0YSIsInJlc29sdmUiLCJ0cmlnZ2VyRXZlbnQiLCJvbkNoYW5nZSIsInJlYWR5Iiwib24iLCJlIiwiY29uc29sZSIsImdldFVybCIsInN0YXR1cyIsIkVycm9yIiwidXJsIiwiY2FsbGJhY2siLCJmZXRjaGluZyIsImNvdXJzZXMiLCJpZCIsImV4cG9ydHMiLCJnY2xhc3Nyb29tIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==