System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat@1.0.1/api", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@1.0.0/config"], function (_export, _context) {
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
    }, function (_aimpactChatSdk100Session) {
      dependency_3 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp100Config) {
      dependency_5 = _aimpactAilearnApp100Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvcmUiLCJfY29uZmlnIiwiR0NsYXNzUm9vbSIsIlJlYWN0aXZlTW9kZWwiLCJwcm9taXNlIiwidXJsIiwiTUFYX1RJTUUiLCJzdGF0ZSIsImNvZGUiLCJpc1JlYWR5IiwiYXBpIiwiZXJyb3IiLCJhdXRob3JpemVkIiwicHJvY2Vzc2VkQ2FsbGJhY2siLCJjb25zdHJ1Y3RvciIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImluaXQiLCIjaW5pdCIsIlBlbmRpbmdQcm9taXNlIiwic2Vzc2lvbldyYXBwZXIiLCJsb2dnZWQiLCJyZXNwb25zZSIsImdldCIsImJlYXJlciIsInVzZXIiLCJ0b2tlbiIsImRhdGEiLCJyZXNvbHZlIiwidHJpZ2dlckV2ZW50Iiwib25DaGFuZ2UiLCJyZWFkeSIsIm9uIiwiZSIsImNvbnNvbGUiLCJnZXRVcmwiLCJzdGF0dXMiLCJFcnJvciIsImNhbGxiYWNrIiwiZmV0Y2hpbmciLCJjb3Vyc2VzIiwiaWQiLCJleHBvcnRzIiwiZ2NsYXNzcm9vbSJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsSUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksT0FBQSxHQUFBSixPQUFBO1VBRU0sTUFBT0ssVUFBVyxTQUFRSixNQUFBLENBQUFLLGFBQXlCO1lBQ3hELENBQUFDLE9BQVE7WUFDUixDQUFBQyxHQUFJO1lBQ0osQ0FBQUMsUUFBUyxHQUFHLE1BQU07WUFDbEIsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FD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