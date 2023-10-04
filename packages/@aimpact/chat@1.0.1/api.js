System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/model", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Api, JCall, __beyond_pkg, hmr;
  _export({
    Api: void 0,
    JCall: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive116Model) {
      dependency_1 = _beyondJsReactive116Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/api"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/kernel/core', dependency_2]]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./api
      *********************/
      ims.set('./api', {
        hash: 111610875,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Api = void 0;
          var _jcall = require("./jcall");
          /*bundle*/
          class Api {
            #url;
            get url() {
              return this.#url ?? '';
            }
            #fetcher;
            constructor(url) {
              this.#url = url;
              this.#fetcher = new _jcall.JCall();
            }
            async action(method = 'get', route, specs = {}) {
              return this.#fetcher[method](this.getURL(route), specs);
            }
            getURL(route) {
              return `${this.#url}${route}`;
            }
            bearer(bearer) {
              this.#fetcher.bearer(bearer);
              return this;
            }
            get(route, specs) {
              return this.action('get', route, specs);
            }
            post(route, specs) {
              return this.action('post', route, specs);
            }
            put(route, specs) {
              return this.action('put', route, specs);
            }
            delete(route, specs) {
              return this.action('delete', route, specs);
            }
          }
          exports.Api = Api;
        }
      });

      /***********************
      INTERNAL MODULE: ./jcall
      ***********************/

      ims.set('./jcall', {
        hash: 2059501447,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.JCall = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class JCall extends _model.ReactiveModel {
            #bearer;
            #response;
            bearer(bearer) {
              if (bearer) this.#bearer = bearer;
              return this;
            }
            /**
             *  @deprecated
             */
            checkToken = headers => {
              if (typeof window === 'undefined') return headers;
              let session = window.localStorage.getItem('session');
              if (!session) return headers;
              const sessionObject = JSON.parse(session);
              headers.append('Authorization', `Bearer ${sessionObject.accessToken}`);
              return headers;
            };
            getHeaders = specs => {
              let headers = new Headers();
              const bearer = specs.bearer || this.#bearer;
              if (bearer) {
                headers.append('Authorization', `Bearer ${bearer}`);
              }
              if (specs.bearer) delete specs.bearer;
              const keys = Object.keys(specs);
              keys.forEach(key => {
                if (key === 'bearer') return;
                headers.append(key, specs[key]);
              });
              return headers;
            };
            execute = async (url, method = 'get', params = {}, headersSpecs = {}, stream) => {
              try {
                let headers = this.getHeaders({
                  ...headersSpecs,
                  bearer: params.bearer
                });
                delete params.bearer;
                const specs = {
                  method,
                  headers,
                  mode: 'cors'
                };
                const emptyParams = Object.entries(params).length === 0 && params.constructor === Object;
                if (params.bearer) delete params.bearer;
                if (method === 'post' && !emptyParams) {
                  specs.body = JSON.stringify(params);
                } else if (!emptyParams && method === 'get') {
                  const parameters = new URLSearchParams();
                  for (const key in params) {
                    if (![NaN, undefined, ''].includes(params[key])) {
                      parameters.append(key, params[key]);
                    }
                  }
                  const queryString = parameters.toString();
                  if (queryString) {
                    url += `?${queryString}`;
                  }
                }
                if (stream) return this.#stream(url, specs);
                const response = await fetch(url, specs);
                return response.json();
              } catch (e) {
                console.error('error jcall', e);
              }
            };
            #streamResponse;
            get streamResponse() {
              return this.#streamResponse;
            }
            stream = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'post', params, headers, true);
            async #stream(url, specs) {
              const promise = new _core.PendingPromise();
              const response = await fetch(url, specs);
              if (response.status) {
                throw new Error('error in stream');
              }
              const reader = response.body?.getReader();
              this.#streamResponse = response;
              while (true) {
                const {
                  done,
                  value
                } = await reader.read();
                this.#streamResponse = value;
                if (done) {
                  promise.resolve(value);
                  this.#streamResponse = undefined;
                  break;
                }
                this.triggerEvent('stream.response');
              }
              return promise;
            }
            get = (url, params, headers) => {
              return this.execute(url, 'get', params);
            };
            post = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'post', params, headers);
            delete = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'DELETE', params, headers);
            put = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'PUT', params, headers);
          }
          exports.JCall = JCall;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./api",
        "from": "Api",
        "name": "Api"
      }, {
        "im": "./jcall",
        "from": "JCall",
        "name": "JCall"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Api') && _export("Api", Api = require ? require('./api').Api : value);
        (require || prop === 'JCall') && _export("JCall", JCall = require ? require('./jcall').JCall : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfamNhbGwiLCJyZXF1aXJlIiwiQXBpIiwidXJsIiwiZmV0Y2hlciIsImNvbnN0cnVjdG9yIiwiSkNhbGwiLCJhY3Rpb24iLCJtZXRob2QiLCJyb3V0ZSIsInNwZWNzIiwiZ2V0VVJMIiwiYmVhcmVyIiwiZ2V0IiwicG9zdCIsInB1dCIsImRlbGV0ZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCJyZXNwb25zZSIsImNoZWNrVG9rZW4iLCJoZWFkZXJzIiwid2luZG93Iiwic2Vzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiYXBwZW5kIiwiYWNjZXNzVG9rZW4iLCJnZXRIZWFkZXJzIiwiSGVhZGVycyIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwiZXhlY3V0ZSIsInBhcmFtcyIsImhlYWRlcnNTcGVjcyIsInN0cmVhbSIsIm1vZGUiLCJlbXB0eVBhcmFtcyIsImVudHJpZXMiLCJsZW5ndGgiLCJib2R5Iiwic3RyaW5naWZ5IiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIk5hTiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicXVlcnlTdHJpbmciLCJ0b1N0cmluZyIsImZldGNoIiwianNvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzdHJlYW1SZXNwb25zZSIsIiNzdHJlYW0iLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJzdGF0dXMiLCJFcnJvciIsInJlYWRlciIsImdldFJlYWRlciIsImRvbmUiLCJ2YWx1ZSIsInJlYWQiLCJyZXNvbHZlIiwidHJpZ2dlckV2ZW50Il0sInNvdXJjZXMiOlsiL2FwaS50cyIsIi9qY2FsbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFD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