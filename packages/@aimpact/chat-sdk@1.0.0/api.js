System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.5/model"], function (_export, _context) {
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
    }, function (_beyondJsReactive115Model) {
      dependency_2 = _beyondJsReactive115Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 1924963657,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfamNhbGwiLCJBcGkiLCJFdmVudHMiLCJ1cmwiLCJmZXRjaGVyIiwic3RyZWFtUmVzcG9uc2UiLCJtZXRhZGF0YSIsImNvbnN0cnVjdG9yIiwiSkNhbGwiLCJvbiIsImdldFJlc3BvbnNlIiwiI2dldFJlc3BvbnNlIiwidHJpZ2dlciIsImFjdGlvbiIsIm1ldGhvZCIsInJvdXRlIiwic3BlY3MiLCJnZXRVUkwiLCJiZWFyZXIiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsZXRlIiwic3RyZWFtIiwiZXhwb3J0cyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJzdGFydGVkIiwidmFsdWUiLCJwYXJzZWQiLCJyZXNwb25zZSIsImNoZWNrVG9rZW4iLCJoZWFkZXJzIiwid2luZG93Iiwic2Vzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiYXBwZW5kIiwiYWNjZXNzVG9rZW4iLCJnZXRIZWFkZXJzIiwiSGVhZGVycyIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwiZXhlY3V0ZSIsInBhcmFtcyIsImhlYWRlcnNTcGVjcyIsIm1vZGUiLCJlbXB0eVBhcmFtcyIsImVudHJpZXMiLCJsZW5ndGgiLCJib2R5Iiwic3RyaW5naWZ5IiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIk5hTiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicXVlcnlTdHJpbmciLCJ0b1N0cmluZyIsImZldGNoIiwianNvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCIjc3RyZWFtIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwib2siLCJFcnJvciIsInJlYWRlciIsImdldFJlYWRlciIsImRvbmUiLCJyZWFkIiwicmVzb2x2ZSIsImNodW5rIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJzcGxpdCIsInRyaWdnZXJFdmVudCIsImV4YyJdLCJzb3VyY2VzIjpbIi9hcGku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