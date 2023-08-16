System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, Api, JCall, __beyond_pkg, hmr;
  _export({
    Api: void 0,
    JCall: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
      __pkg.dependencies.update([]);
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
        hash: 776767059,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.JCall = void 0;
          /*bundle*/
          class JCall {
            #bearer;
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
            execute = async (url, method = 'get', params = {}, headersSpecs = {}) => {
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
                const response = await fetch(url, specs);
                return response.json();
              } catch (e) {
                console.error('error jcall', e);
              }
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVnQyxNQUFNLEVBQUVqQixPQUFPLENBQUM7WUFDakRKLEdBQUcsR0FBRyxDQUNMWCxHQUFXLEVBQ1hnQyxNQUFjLEVBQ2RqQixVQUFtQjtjQUNsQixjQUFjLEVBQUU7YUFDaEIsS0FDRyxJQUFJLENBQUNnQixPQUFPLENBQUMvQixHQUFHLEVBQUUsS0FBSyxFQUFFZ0MsTUFBTSxFQUFFakIsT0FBTyxDQUFDOztVQUM5Q0YiLCJuYW1lcyI6WyJBcGkiLCJ1cmwiLCJjb25zdHJ1Y3RvciIsIkpDYWxsIiwiYWN0aW9uIiwibWV0aG9kIiwicm91dGUiLCJzcGVjcyIsImdldFVSTCIsImJlYXJlciIsImdldCIsInBvc3QiLCJwdXQiLCJkZWxldGUiLCJleHBvcnRzIiwiY2hlY2tUb2tlbiIsImhlYWRlcnMiLCJ3aW5kb3ciLCJzZXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNlc3Npb25PYmplY3QiLCJKU09OIiwicGFyc2UiLCJhcHBlbmQiLCJhY2Nlc3NUb2tlbiIsImdldEhlYWRlcnMiLCJIZWFkZXJzIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJleGVjdXRlIiwicGFyYW1zIiwiaGVhZGVyc1NwZWNzIiwibW9kZSIsImVtcHR5UGFyYW1zIiwiZW50cmllcyIsImxlbmd0aCIsImJvZHkiLCJzdHJpbmdpZnkiLCJwYXJhbWV0ZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwiTmFOIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJxdWVyeVN0cmluZyIsInRvU3RyaW5nIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJlIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhcGkudHMiLCJqY2FsbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19