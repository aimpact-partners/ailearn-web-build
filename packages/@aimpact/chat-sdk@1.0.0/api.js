System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.6/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Api, JCall2, JCall, __beyond_pkg, hmr;
  _export({
    Api: void 0,
    JCall2: void 0,
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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.2"]]);
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

      /****************************
      INTERNAL MODULE: ./jcall copy
      ****************************/

      ims.set('./jcall copy', {
        hash: 762612604,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.JCall2 = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class JCall2 extends _model.ReactiveModel {
            #SEPARATORS = {
              METADATA: 'ÿ',
              START: '😸',
              END: '🖋️'
            };
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
            #toolsInformation;
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
                //{ started: boolean; value: string; parsed: { value: object | undefined; error?: string } };
                let tool = {
                  started: false,
                  value: '',
                  parsed: {
                    value: undefined,
                    error: undefined
                  }
                };
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
                  if (metadata.started) {
                    metadata.value += chunk;
                    continue;
                  }
                  if (!chunk.includes(this.#SEPARATORS.METADATA)) {
                    this.#streamResponse += chunk;
                    continue;
                  }
                  if (chunk.includes(this.#SEPARATORS.START)) {
                    const splitted = chunk.split(this.#SEPARATORS.START);
                    if (splitted.length > 0) {
                      this.#streamResponse += splitted[0];
                      tool.started = true;
                      tool.value += splitted[1].replace(this.#SEPARATORS.START, '');
                    } else {
                      tool.started = true;
                      tool.value += splitted[0].replace(this.#SEPARATORS.START, '');
                    }
                    continue;
                  }
                  if (chunk.includes(this.#SEPARATORS.END)) {
                    const splitted = chunk.split(this.#SEPARATORS.END);
                    tool.value += splitted[0];
                    tool.parsed = JSON.parse(tool.value);
                    this.#toolsInformation.push(tool);
                    tool = {
                      started: false,
                      value: '',
                      parsed: {
                        value: undefined,
                        error: undefined
                      }
                    };
                    continue;
                  }
                  metadata.started = true;
                  const split = chunk.split(this.#SEPARATORS.METADATA);
                  metadata.value += split[1];
                  if (split[0]) this.#streamResponse += split[0];
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
          exports.JCall2 = JCall2;
        }
      });

      /***********************
      INTERNAL MODULE: ./jcall
      ***********************/

      ims.set('./jcall', {
        hash: 4202077356,
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
        "im": "./jcall copy",
        "from": "JCall2",
        "name": "JCall2"
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
        (require || prop === 'JCall2') && _export("JCall2", JCall2 = require ? require('./jcall copy').JCall2 : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfamNhbGwiLCJBcGkiLCJFdmVudHMiLCJ1cmwiLCJmZXRjaGVyIiwic3RyZWFtUmVzcG9uc2UiLCJtZXRhZGF0YSIsImNvbnN0cnVjdG9yIiwiSkNhbGwiLCJvbiIsImdldFJlc3BvbnNlIiwiI2dldFJlc3BvbnNlIiwidHJpZ2dlciIsImFjdGlvbiIsIm1ldGhvZCIsInJvdXRlIiwic3BlY3MiLCJnZXRVUkwiLCJiZWFyZXIiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsZXRlIiwic3RyZWFtIiwiZXhwb3J0cyIsIl9tb2RlbCIsIkpDYWxsMiIsIlJlYWN0aXZlTW9kZWwiLCJTRVBBUkFUT1JTIiwiTUVUQURBVEEiLCJTVEFSVCIsIkVORCIsInN0YXJ0ZWQiLCJ2YWx1ZSIsInBhcnNlZCIsInRvb2xzSW5mb3JtYXRpb24iLCJyZXNwb25zZSIsImNoZWNrVG9rZW4iLCJoZWFkZXJzIiwid2luZG93Iiwic2Vzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiYXBwZW5kIiwiYWNjZXNzVG9rZW4iLCJnZXRIZWFkZXJzIiwiSGVhZGVycyIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwiZXhlY3V0ZSIsInBhcmFtcyIsImhlYWRlcnNTcGVjcyIsIm1vZGUiLCJlbXB0eVBhcmFtcyIsImVudHJpZXMiLCJsZW5ndGgiLCJib2R5Iiwic3RyaW5naWZ5IiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIk5hTiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicXVlcnlTdHJpbmciLCJ0b1N0cmluZyIsImZldGNoIiwianNvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCIjc3RyZWFtIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwib2siLCJFcnJvciIsInJlYWRlciIsImdldFJlYWRlciIsInRvb2wiLCJkb25lIiwicmVhZCIsInJlc29sdmUiLCJjaHVuayIsIlRleHREZWNvZGVyIiwiZGVjb2RlIiwic3BsaXR0ZWQiLCJzcGxpdCIsInJlcGxhY2UiLCJwdXNoIiwidHJpZ2dlckV2ZW50IiwiZXhjIl0sInNvdXJjZXMiOlsiL2FwaS50cyIsIi9qY2FsbCBjb3B5LnRzIiwiL2pjYWxsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNPO1VBQVUsTUFDWEUsR0FBSSxTQUFRSCxLQUFBLENBQUFJLE1BQU07WUFDdkIsQ0FBQUMsR0FBSTtZQUNKLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJLElBQUksRUFBRTtZQUN2QjtZQUNBLENBQUFDLE9BQVE7WUFFUixJQUFJQyxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFELE9BQVEsQ0FBQ0MsY0FBYztZQUNwQztZQUVBLElBQUlDLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBRixPQUFRLENBQUNFLFFBQVE7WUFDOUI7WUFDQUMsWUFBWUosR0FBRztjQUNkLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBQSxHQUFJLEdBQUdBLEdBQUc7Y0FDZixJQUFJLENBQUMsQ0FBQUMsT0FBUSxHQUFHLElBQUlKLE1BQUEsQ0FBQVEsS0FBSyxFQUFFO2NBQzNCLElBQUksQ0FBQyxDQUFBSixPQUFRLENBQUNLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQUMsV0FBWSxDQUFDO1lBQ3ZEO1lBRUEsQ0FBQUEsV0FBWSxHQUFHQyxDQUFBLEtBQUs7Y0FDbkIsSUFBSSxDQUFDQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFDaEMsQ0FBQztZQUNELE1BQU1DLE1BQU1BLENBQUNDLE1BQU0sR0FBRyxLQUFL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