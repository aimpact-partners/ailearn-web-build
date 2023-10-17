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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.10"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQ2dCLE9BQU8sQ0FBQ2hDLEdBQUcsRUFBRSxRQUFRLEVBQUVpQyxNQUFNLEVBQUVqQixPQUFPLENBQUM7WUFDakRMLEdBQUcsR0FBRyxDQUNMWCxHQUFXLEVBQ1hpQyxNQUFjLEVBQ2RqQixVQUFtQjtjQUNsQixjQUFjLEVBQUU7YUFDaEIsS0FDRyxJQUFJLENBQUNnQixPQUFPLENBQUNoQyxHQUFHLEVBQUUsS0FBSyxFQUFFaUMsTUFBTSxFQUFFakIsT0FBTyxDQUFDOztVQUM5Q0giLCJuYW1lcyI6WyJBcGkiLCJ1cmwiLCJjb25zdHJ1Y3RvciIsIkpDYWxsIiwiYWN0aW9uIiwibWV0aG9kIiwicm91dGUiLCJzcGVjcyIsImdldFVSTCIsImJlYXJlciIsImdldCIsInBvc3QiLCJwdXQiLCJkZWxldGUiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsImNoZWNrVG9rZW4iLCJoZWFkZXJzIiwid2luZG93Iiwic2Vzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiYXBwZW5kIiwiYWNjZXNzVG9rZW4iLCJnZXRIZWFkZXJzIiwiSGVhZGVycyIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwiZXhlY3V0ZSIsInBhcmFtcyIsImhlYWRlcnNTcGVjcyIsInN0cmVhbSIsIm1vZGUiLCJlbXB0eVBhcmFtcyIsImVudHJpZXMiLCJsZW5ndGgiLCJib2R5Iiwic3RyaW5naWZ5IiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIk5hTiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicXVlcnlTdHJpbmciLCJ0b1N0cmluZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInN0cmVhbVJlc3BvbnNlIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwic3RhdHVzIiwiRXJyb3IiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkb25lIiwidmFsdWUiLCJyZWFkIiwicmVzb2x2ZSIsInRyaWdnZXJFdmVudCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYXBpLnRzIiwiamNhbGwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==