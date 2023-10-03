System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat@1.0.1/api", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@1.0.0/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, gclassroom, __beyond_pkg, hmr;
  _export("gclassroom", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChat101Api) {
      dependency_1 = _aimpactChat101Api;
    }, function (_beyondJsReactive116Model) {
      dependency_2 = _beyondJsReactive116Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_3 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp100Config) {
      dependency_5 = _aimpactAilearnApp100Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 3974762261,
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
                  const response = await this.#api.bearer(_session.sessionWrapper.user.token).get('/gclassroom/oauth/authorized');
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
                this.#promise.resolve(true);
              }
            }
            async getUrl() {
              try {
                const response = await this.#api.bearer(_session.sessionWrapper.user.token).get('/gclassroom/oauth/url');
                if (!response.status) {
                  throw new Error(response.error);
                }
                return response.data.url;
              } catch (e) {
                throw new Error('ERROR_GETTING_URL');
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
                console.trace(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvcmUiLCJfY29uZmlnIiwiR0NsYXNzUm9vbSIsIlJlYWN0aXZlTW9kZWwiLCJwcm9taXNlIiwidXJsIiwiTUFYX1RJTUUiLCJzdGF0ZSIsImNvZGUiLCJpc1JlYWR5IiwiYXBpIiwiZXJyb3IiLCJhdXRob3JpemVkIiwicHJvY2Vzc2VkQ2FsbGJhY2siLCJjb25zdHJ1Y3RvciIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImluaXQiLCIjaW5pdCIsIlBlbmRpbmdQcm9taXNlIiwic2Vzc2lvbldyYXBwZXIiLCJsb2dnZWQiLCJyZXNwb25zZSIsImJlYXJlciIsInVzZXIiLCJ0b2tlbiIsImdldCIsImRhdGEiLCJyZXNvbHZlIiwidHJpZ2dlckV2ZW50Iiwib25DaGFuZ2UiLCJyZWFkeSIsIm9uIiwiZSIsImNvbnNvbGUiLCJnZXRVcmwiLCJzdGF0dXMiLCJFcnJvciIsImNhbGxiYWNrIiwiZmV0Y2hpbmciLCJ0cmFjZSIsImNvdXJzZXMiLCJpZCIsImV4cG9ydHMiLCJnY2xhc3Nyb29tIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxJQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxPQUFBLEdBQUFKLE9BQUE7VUFFTSxNQUFPSyxVQUFXLFNBQVFKLE1BQUEsQ0FBQUssYUFBeUI7WUFDeEQsQ0FBQUMsT0FBUTtZQUNSLENBQUFDLEdBQUk7WUFDSixDQUFBQyxRQUFTLEdBQUcsTUFBTTtZQUNsQixDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0Es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