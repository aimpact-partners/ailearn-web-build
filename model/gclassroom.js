System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat@1.0.1/api", "@beyond-js/reactive@1.1.3/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@1.0.0/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, gclassroom, __beyond_pkg, hmr;
  _export("gclassroom", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChat101Api) {
      dependency_1 = _aimpactChat101Api;
    }, function (_beyondJsReactive113Model) {
      dependency_2 = _beyondJsReactive113Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_3 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp100Config) {
      dependency_5 = _aimpactAilearnApp100Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 1915642478,
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
                const response = await this.#api.get('/gclassroom/oauth/url', {
                  bearer: _session.sessionWrapper.user.token
                });
                if (!response.status) {
                  throw new Error(response.error);
                }
                return response.data.url;
              } catch (e) {
                console.log(2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVNLE1BQU9BLFVBQVcsU0FBUUMsb0JBQXlCO1lBQ3hELFFBQVE7WUFDUixJQUFJO1lBQ0osU0FBUyxHQUFHLE1BQU07WUFDbEIsTUFBTTtZQUNOLElBQUlDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBQ0EsS0FBSztZQUNMLElBQUlDLElBQUk7Y0FDUCxPQUFPLElBQUksQ0FBQyxLQUFLO1lBQ2xCO1lBRUEsSUFBSUMsT0FBTztjQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVE7WUFDckI7WUFDQSxJQUFJO1lBRUosTUFBTTtZQUNOLElBQUlDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBQ0EsV0FBVztZQUNYLGtCQUFrQjtZQUNsQixJQUFJQyxpQkFBaUI7Y0FDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCO1lBQy9CO1lBQ0EsSUFBSUMsVUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVc7WUFDeEI7WUFDQUM7Y0FDQyxLQUFLLEVBQUU7Y0FFUCxNQUFNQyxHQUFHLEdBQUcsSUFBSUMsUUFBRyxDQUFDQyxlQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDLElBQUksR0FBR0wsR0FBRztjQUNmLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYjtZQUVBLE1BQU0sS0FBSztjQUNWLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJTSxvQkFBYyxFQUFFO2dCQUVwQyxNQUFNQyx1QkFBYyxDQUFDWixPQUFPO2dCQUU1QixJQUFJWSx1QkFBYyxDQUFDQyxNQUFNLEVBQUU7a0JBQzFCLE1BQU1DLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0gsdUJBQWMsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QixDQUFDO2tCQUN0RyxJQUFJLENBQUMsV0FBVyxHQUFHSixRQUFRLENBQUNLLElBQUksQ0FBQ2hCLFVBQVU7a0JBQzNDLElBQUksQ0FBQyxRQUFRLENBQUNpQixPQUFPLENBQUMsSUFBSSxDQUFDO2tCQUUzQixJQUFJLENBQUNDLFlBQVksRUFBRTtrQkFDbkI7O2dCQUdELE1BQU1DLFFBQVEsR0FBRyxNQUFLO2tCQUNyQixJQUFJVix1QkFBYyxDQUFDVyxLQUFLLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUNILE9BQU8sQ0FBQyxJQUFJLENBQUM7O2dCQUU3QixDQUFDO2dCQUNEUix1QkFBYyxDQUFDWSxFQUFFLENBQUMsUUFBUSxFQUFFRixRQUFRLENBQUM7Z0JBRXJDLElBQUksQ0FBQ0QsWUFBWSxFQUFFO2dCQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRO2VBQ3BCLENBQUMsT0FBT0ksQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUN6QixLQUFLLENBQUN3QixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNGLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDOztZQUU3QjtZQUVBLE1BQU1PLE1BQU07Y0FDWCxJQUFJO2dCQUNILE1BQU1iLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUNJLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRTtrQkFDN0RILE1BQU0sRUFBRUgsdUJBQWMsQ0FBQ0ksSUFBSSxDQUFDQztpQkFDNUIsQ0FBQztnQkFFRixJQUFJLENBQUNILFFBQVEsQ0FBQ2MsTUFBTSxFQUFFO2tCQUNyQixNQUFNLElBQUlDLEtBQUssQ0FBQ2YsUUFBUSxDQUFDYixLQUFLLENBQUM7O2dCQUdoQyxPQUFPYSxRQUFRLENBQUNLLElBQUksQ0FBQ1csR0FBRztlQUN4QixDQUFDLE9BQU9MLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE1BQU0sSUFBSUYsS0FBSyxDQUFDLG1CQUFtQixDQUFDOztZQUV0QztZQUVBLE1BQU1HLFFBQVEsQ0FBQ2xDLEtBQUssRUFBRUMsSUFBSTtjQUN6QixJQUFJO2dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUdELEtBQUs7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUdDLElBQUk7Z0JBQ2pCLElBQUksQ0FBQ2tDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNbkIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ0ksR0FBRyxDQUFDLDRCQUE0QixFQUFFO2tCQUNsRUgsTUFBTSxFQUFFSCx1QkFBYyxDQUFDSSxJQUFJLENBQUNDLEtBQUs7a0JBQ2pDbkIsS0FBSztrQkFDTEM7aUJBQ0EsQ0FBQztnQkFFRixJQUFJZSxRQUFRLENBQUNjLE1BQU0sS0FBSyxPQUFPLEVBQUU7a0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUdkLFFBQVEsQ0FBQ2IsS0FBSztrQkFDNUI7O2dCQUdELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSTtnQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUk7Z0JBQzlCLElBQUksQ0FBQ29CLFlBQVksRUFBRTtlQUNuQixDQUFDLE9BQU9JLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDUSxLQUFLLENBQUNULENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ1EsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTUUsT0FBTztjQUNaLElBQUk7Z0JBQ0gsSUFBSSxDQUFDRixRQUFRLEdBQUcsSUFBSTtnQkFFcEIsTUFBTW5CLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUNJLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRTtrQkFDM0RILE1BQU0sRUFBRUgsdUJBQWMsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLO2tCQUNqQ21CLEVBQUUsRUFBRXhCLHVCQUFjLENBQUNJLElBQUksQ0FBQ29CO2lCQUN4QixDQUFDO2dCQUNGLElBQUl0QixRQUFRLENBQUNjLE1BQU0sS0FBSyxPQUFPLEVBQUU7a0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUdkLFFBQVEsQ0FBQ2IsS0FBSztrQkFDNUIsT0FBTyxFQUFFOztnQkFHVixPQUFPYSxRQUFRLENBQUNxQixPQUFPO2VBQ3ZCLENBQUMsT0FBT1YsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUN6QixLQUFLLENBQUN3QixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNRLFFBQVEsR0FBRyxLQUFLOztZQUV2Qjs7VUFDQUk7VUFFTTtVQUFZLE1BQU1DLFVBQVUsR0FBRyxJQUFJMUMsVUFBVSxFQUFFO1VBQUN5QyIsIm5hbWVzIjpbIkdDbGFzc1Jvb20iLCJSZWFjdGl2ZU1vZGVsIiwic3RhdGUiLCJjb2RlIiwiaXNSZWFkeSIsImVycm9yIiwicHJvY2Vzc2VkQ2FsbGJhY2siLCJhdXRob3JpemVkIiwiY29uc3RydWN0b3IiLCJhcGkiLCJBcGkiLCJjb25maWciLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBlbmRpbmdQcm9taXNlIiwic2Vzc2lvbldyYXBwZXIiLCJsb2dnZWQiLCJyZXNwb25zZSIsImJlYXJlciIsInVzZXIiLCJ0b2tlbiIsImdldCIsImRhdGEiLCJyZXNvbHZlIiwidHJpZ2dlckV2ZW50Iiwib25DaGFuZ2UiLCJyZWFkeSIsIm9uIiwiZSIsImNvbnNvbGUiLCJnZXRVcmwiLCJzdGF0dXMiLCJFcnJvciIsInVybCIsImxvZyIsImNhbGxiYWNrIiwiZmV0Y2hpbmciLCJ0cmFjZSIsImNvdXJzZXMiLCJpZCIsImV4cG9ydHMiLCJnY2xhc3Nyb29tIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==