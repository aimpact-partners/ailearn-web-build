System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.6/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Api, JCall, __beyond_pkg, hmr;
  _export({
    Api: void 0,
    JCall: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive116Model) {
      dependency_2 = _beyondJsReactive116Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.0/api"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/reactive/model', dependency_2]]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./api
      *********************/
      ims.set('./api', {
        hash: 2897444428,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Api = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _jcall = require("./jcall");
          /*bundle*/
          class Api extends _core.Events {
            #url;
            get url() {
              return this.#url ?? '';
            }
            #fetcher;
            get streamResponse() {
              return this.#fetcher.streamResponse;
            }
            get metadata() {
              return this.#fetcher.metadata;
            }
            constructor(url) {
              super();
              this.#url = url;
              this.#fetcher = new _jcall.JCall();
              this.#fetcher.on('stream.response', this.#getResponse);
            }
            #getResponse = () => {
              this.trigger('stream.response');
            };
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
            stream(route, specs = {}) {
              return this.action('stream', route, specs);
            }
          }
          exports.Api = Api;
        }
      });

      /***********************
      INTERNAL MODULE: ./jcall
      ***********************/

      ims.set('./jcall', {
        hash: 3138101564,
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
            #streamResponse = '';
            get streamResponse() {
              return this.#streamResponse;
            }
            #metadata = {
              started: false,
              value: '',
              parsed: {
                value: void 0
              }
            };
            get metadata() {
              return this.#metadata.parsed;
            }
            #response;
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
            execute = async (url, method = 'get', params = {}, headersSpecs, stream) => {
              try {
                if (!headersSpecs) {
                  headersSpecs = {};
                }
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
            stream = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'post', params, headers, true);
            async #stream(url, specs) {
              try {
                const promise = new _core.PendingPromise();
                const response = await fetch(url, specs);
                if (!response.ok) {
                  throw new Error('error in stream');
                }
                const reader = response.body?.getReader();
                const metadata = this.#metadata;
                while (true) {
                  const {
                    done,
                    value
                  } = await reader.read();
                  if (done) {
                    promise.resolve(value);
                    this.#streamResponse = undefined;
                    break;
                  }
                  const chunk = new TextDecoder().decode(value);
                  if (!metadata.started) {
                    if (!chunk.includes('ÿ')) {
                      this.#streamResponse += chunk;
                    } else {
                      metadata.started = true;
                      const split = chunk.split('ÿ');
                      metadata.value += split[1];
                      if (split[0]) this.#streamResponse += split[0];
                    }
                  } else {
                    metadata.value += chunk;
                  }
                  this.triggerEvent('stream.response');
                } // end while
                try {
                  metadata.parsed.value = JSON.parse(metadata.value);
                } catch (exc) {
                  console.error(exc);
                  this.#metadata.parsed.error = 'Error parsing metadata';
                }
                return promise;
              } catch (e) {
                console.error(e);
              }
              // Parse the metadata data
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2tCQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDdEQsTUFBTSxDQUFDdUMsS0FBSyxHQUFHLHdCQUF3Qjs7Z0JBRXZELE9BQU9DLE9BQU87ZUFDZCxDQUFDLE9BQU9ILENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7Y0FHakI7WUFDRDs7WUFFQTlDLEdBQUcsR0FBRyxDQUFDYixHQUFXLEVBQUV5QyxNQUFjLEVBQUVqQixPQUFlLEtBQUk7Y0FDdEQsT0FBTyxJQUFJLENBQUNnQixPQUFPLENBQUN4QyxHQUFHLEVBQUUsS0FBSyxFQUFFeUMsTUFBTSxDQUFDO1lBQ3hDLENBQUM7WUFDRDNCLElBQUksR0FBRyxDQUNOZCxHQUFXLEVBQ1h5QyxNQUFjLEVBQ2RqQixVQUFtQjtjQUNsQixjQUFjLEVBQUU7YUFDaEIsS0FDRyxJQUFJLENBQUNnQixPQUFPLENBQUN4QyxHQUFHLEVBQUUsTUFBTSxFQUFFeUMsTUFBTSxFQUFFakIsT0FBTyxDQUFDO1lBQy9DUixNQUFNLEdBQUcsQ0FDUmhCLEdBQVcsRUFDWHlDLE1BQWMsRUFDZGpCLFVBQW1CO2NBQ2xCLGNBQWMsRUFBRTthQUNoQixLQUNHLElBQUksQ0FBQ2dCLE9BQU8sQ0FBQ3hDLEdBQUcsRUFBRSxRQUFRLEVBQUV5QyxNQUFNLEVBQUVqQixPQUFPLENBQUM7WUFDakRULEdBQUcsR0FBRyxDQUNMZixHQUFXLEVBQ1h5QyxNQUFjLEVBQ2RqQixVQUFtQjtjQUNsQixjQUFjLEVBQUU7YUFDaEIsS0FDRyxJQUFJLENBQUNnQixPQUFPLENBQUN4QyxHQUFHLEVBQUUsS0FBSyxFQUFFeUMsTUFBTSxFQUFFakIsT0FBTyxDQUFDOztVQUM5Q04iLCJuYW1lcyI6WyJBcGkiLCJFdmVudHMiLCJ1cmwiLCJzdHJlYW1SZXNwb25zZSIsIm1ldGFkYXRhIiwiY29uc3RydWN0b3IiLCJKQ2FsbCIsIm9uIiwidHJpZ2dlciIsImFjdGlvbiIsIm1ldGhvZCIsInJvdXRlIiwic3BlY3MiLCJnZXRVUkwiLCJiZWFyZXIiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsZXRlIiwic3RyZWFtIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJzdGFydGVkIiwidmFsdWUiLCJwYXJzZWQiLCJjaGVja1Rva2VuIiwiaGVhZGVycyIsIndpbmRvdyIsInNlc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2Vzc2lvbk9iamVjdCIsIkpTT04iLCJwYXJzZSIsImFwcGVuZCIsImFjY2Vzc1Rva2VuIiwiZ2V0SGVhZGVycyIsIkhlYWRlcnMiLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsImV4ZWN1dGUiLCJwYXJhbXMiLCJoZWFkZXJzU3BlY3MiLCJtb2RlIiwiZW1wdHlQYXJhbXMiLCJlbnRyaWVzIiwibGVuZ3RoIiwiYm9keSIsInN0cmluZ2lmeSIsInBhcmFtZXRlcnMiLCJVUkxTZWFyY2hQYXJhbXMiLCJOYU4iLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInF1ZXJ5U3RyaW5nIiwidG9TdHJpbmciLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJvayIsIkVycm9yIiwicmVhZGVyIiwiZ2V0UmVhZGVyIiwiZG9uZSIsInJlYWQiLCJyZXNvbHZlIiwiY2h1bmsiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsInNwbGl0IiwidHJpZ2dlckV2ZW50IiwiZXhjIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhcGkudHMiLCJqY2FsbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19