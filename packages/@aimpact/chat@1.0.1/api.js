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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akIsT0FBTyxDQUFDO1lBQ2pESixHQUFHLEdBQUcsQ0FDTFgsR0FBVyxFQUNYZ0MsTUFBYyxFQUNkakIsVUFBbUI7Y0FDbEIsY0FBYyxFQUFFO2FBQ2hCLEtBQ0csSUFBSSxDQUFDZ0IsT0FBTyxDQUFDL0IsR0FBRyxFQUFFLEtBQUssRUFBRWdDLE1BQU0sRUFBRWpCLE9BQU8sQ0FBQzs7VUFDOUNGIiwibmFtZXMiOlsiQXBpIiwidXJsIiwiY29uc3RydWN0b3IiLCJKQ2FsbCIsImFjdGlvbiIsIm1ldGhvZCIsInJvdXRlIiwic3BlY3MiLCJnZXRVUkwiLCJiZWFyZXIiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsZXRlIiwiZXhwb3J0cyIsImNoZWNrVG9rZW4iLCJoZWFkZXJzIiwid2luZG93Iiwic2Vzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiYXBwZW5kIiwiYWNjZXNzVG9rZW4iLCJnZXRIZWFkZXJzIiwiSGVhZGVycyIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwiZXhlY3V0ZSIsInBhcmFtcyIsImhlYWRlcnNTcGVjcyIsIm1vZGUiLCJlbXB0eVBhcmFtcyIsImVudHJpZXMiLCJsZW5ndGgiLCJib2R5Iiwic3RyaW5naWZ5IiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIk5hTiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicXVlcnlTdHJpbmciLCJ0b1N0cmluZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZSIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYXBpLnRzIiwiamNhbGwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==