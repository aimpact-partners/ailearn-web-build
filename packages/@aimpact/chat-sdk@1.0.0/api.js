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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDTmQsR0FBVyxFQUNYNkMsTUFBYyxFQUNkakIsVUFBbUI7Y0FDbEIsY0FBYyxFQUFFO2FBQ2hCLEtBQ0csSUFBSSxDQUFDZ0IsT0FBTyxDQUFDNUMsR0FBRyxFQUFFLE1BQU0sRUFBRTZDLE1BQU0sRUFBRWpCLE9BQU8sQ0FBQztZQUMvQ1osTUFBTSxHQUFHLENBQ1JoQixHQUFXLEVBQ1g2QyxNQUFjLEVBQ2RqQixVQUFtQjtjQUNsQixjQUFjLEVBQUU7YUFDaEIsS0FDRyxJQUFJLENBQUNnQixPQUFPLENBQUM1QyxHQUFHLEVBQUUsUUFBUSxFQUFFNkMsTUFBTSxFQUFFakIsT0FBTyxDQUFDO1lBQ2pEYixHQUFHLEdBQUcsQ0FDTGYsR0FBVyxFQUNYNkMsTUFBYyxFQUNkakIsVUFBbUI7Y0FDbEIsY0FBYyxFQUFFO2FBQ2hCLEtBQ0csSUFBSSxDQUFDZ0IsT0FBTyxDQUFDNUMsR0FBRyxFQUFFLEtBQUssRUFBRTZDLE1BQU0sRUFBRWpCLE9BQU8sQ0FBQzs7VUFDOUNWIiwibmFtZXMiOlsiQXBpIiwiRXZlbnRzIiwidXJsIiwic3RyZWFtUmVzcG9uc2UiLCJtZXRhZGF0YSIsImNvbnN0cnVjdG9yIiwiSkNhbGwiLCJvbiIsInRyaWdnZXIiLCJhY3Rpb24iLCJtZXRob2QiLCJyb3V0ZSIsInNwZWNzIiwiZ2V0VVJMIiwiYmVhcmVyIiwiZ2V0IiwicG9zdCIsInB1dCIsImRlbGV0ZSIsInN0cmVhbSIsImV4cG9ydHMiLCJKQ2FsbDIiLCJSZWFjdGl2ZU1vZGVsIiwiTUVUQURBVEEiLCJTVEFSVCIsIkVORCIsInN0YXJ0ZWQiLCJ2YWx1ZSIsInBhcnNlZCIsImNoZWNrVG9rZW4iLCJoZWFkZXJzIiwid2luZG93Iiwic2Vzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiYXBwZW5kIiwiYWNjZXNzVG9rZW4iLCJnZXRIZWFkZXJzIiwiSGVhZGVycyIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwiZXhlY3V0ZSIsInBhcmFtcyIsImhlYWRlcnNTcGVjcyIsIm1vZGUiLCJlbXB0eVBhcmFtcyIsImVudHJpZXMiLCJsZW5ndGgiLCJib2R5Iiwic3RyaW5naWZ5IiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIk5hTiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicXVlcnlTdHJpbmciLCJ0b1N0cmluZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm9rIiwiRXJyb3IiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJ0b29sIiwiZG9uZSIsInJlYWQiLCJyZXNvbHZlIiwiY2h1bmsiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsInNwbGl0dGVkIiwic3BsaXQiLCJyZXBsYWNlIiwicHVzaCIsInRyaWdnZXJFdmVudCIsImV4YyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYXBpLnRzIiwiamNhbGwgY29weS50cyIsImpjYWxsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdfQ==