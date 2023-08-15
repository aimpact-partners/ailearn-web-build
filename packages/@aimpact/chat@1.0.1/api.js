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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.2"], ["uuid", "9.0.0"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 872565771,
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
        hash: 4147802668,
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
              return this.#bearer;
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
            get = (url, params, headers) => this.execute(url, 'get', params, headers);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfamNhbGwiLCJyZXF1aXJlIiwiQXBpIiwidXJsIiwiZmV0Y2hlciIsImNvbnN0cnVjdG9yIiwiSkNhbGwiLCJhY3Rpb24iLCJtZXRob2QiLCJyb3V0ZSIsInNwZWNzIiwiZ2V0VVJMIiwiYmVhcmVyIiwiZ2V0IiwicG9zdCIsInB1dCIsImRlbGV0ZSIsImV4cG9ydHMiLCJjaGVja1Rva2VuIiwiaGVhZGVycyIsIndpbmRvdyIsInNlc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2Vzc2lvbk9iamVjdCIsIkpTT04iLCJwYXJzZSIsImFwcGVuZCIsImFjY2Vzc1Rva2VuIiwiZ2V0SGVhZGVycyIsIkhlYWRlcnMiLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsImV4ZWN1dGUiLCJwYXJhbXMiLCJoZWFkZXJzU3BlY3MiLCJtb2RlIiwiZW1wdHlQYXJhbXMiLCJlbnRyaWVzIiwibGVuZ3RoIiwiYm9keSIsInN0cmluZ2lmeSIsInBhcmFtZXRlcnMiLCJVUkxTZWFyY2hQYXJhbXMiLCJOYU4iLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInF1ZXJ5U3RyaW5nIiwidG9TdHJpbmciLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlcyI6WyIvYXBpLnRzIiwiL2pjYWxsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxNQUNYQyxHQUFHO1lBQ1IsQ0FBQUMsR0FBSTtZQUNKLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJLElBQUksRUFBRTtZQUN2QjtZQUNBLENBQUFDLE9BQVE7WUFDUkMsWUFBWUYsR0FBRztjQUNkLElBQUksQ0FBQyxDQUFBQSxHQUFJLEdBQUdBLEdBQUc7Y0FD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