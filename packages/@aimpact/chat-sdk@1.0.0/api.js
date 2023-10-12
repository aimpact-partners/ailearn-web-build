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
        hash: 1157069494,
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
            get actions() {
              return this.#fetcher.actions;
            }
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
              this.#fetcher.on('action.received', () => this.trigger('action.received'));
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
        hash: 1258945813,
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
        hash: 146159398,
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
            #SEPARATORS = {
              METADATA: 'ÿ',
              START: '😸',
              END: '🖋️'
            };
            #actions = [];
            get actions() {
              return this.#actions;
            }
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
            getHeaders = (specs, multipart) => {
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
              if (multipart) {
                console.log(90, 'here');
                headers.delete('Content-Type');
              }
              return headers;
            };
            #formData;
            formData = specs => {
              this.#formData = new FormData();
              const keys = Object.keys(specs);
              keys.forEach(key => {
                this.#formData.append(key, specs[key]);
              });
              return this.#formData;
            };
            #processGetParams(params) {
              const emptyParams = Object.entries(params).length === 0 && params.constructor === Object;
              if (emptyParams) return '';
              const parameters = new URLSearchParams();
              for (const key in params) {
                if (![NaN, undefined, ''].includes(params[key])) {
                  parameters.append(key, params[key]);
                }
              }
              return parameters;
            }
            #processPostParams = (params, multipart) => {
              const emptyParams = Object.entries(params).length === 0 && params.constructor === Object;
              if (emptyParams) return;
              if (multipart) {
                const data = this.formData(params);
                return data;
              }
              return JSON.stringify(params);
            };
            execute = async (url, method = 'get', params = {}, headersSpecs, stream, data) => {
              try {
                if (!headersSpecs) {
                  headersSpecs = {};
                }
                const multipart = params.multipart;
                let headers = this.getHeaders({
                  ...headersSpecs,
                  bearer: params.bearer
                }, multipart);
                delete params.multipart;
                delete params.bearer;
                const specs = {
                  method,
                  headers,
                  mode: 'cors'
                };
                if (params.bearer) delete params.bearer;
                if (method === 'post') {
                  specs.body = this.#processPostParams(params, multipart);
                } else if (method === 'get') {
                  const queryString = this.#processGetParams(params).toString();
                  if (queryString) url += `?${queryString}`;
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
            #processStream = (promise, metadata) => {
              try {
                metadata.parsed.value = JSON.parse(metadata.value);
              } catch (exc) {
                console.error(exc);
                this.#metadata.parsed.error = 'Error parsing metadata';
              }
              promise.resolve({
                value: this.#streamResponse,
                ...metadata.parsed.value
              });
              this.#streamResponse = undefined;
            };
            async #stream(url, specs) {
              const promise = new _core.PendingPromise();
              const response = await fetch(url, specs);
              if (!response.ok) {
                throw new Error('error in stream');
              }
              const reader = response.body?.getReader();
              const metadata = this.#metadata;
              let tool = '';
              while (true) {
                const {
                  done,
                  value
                } = await reader.read();
                if (done) {
                  return this.#processStream(promise, metadata);
                }
                let chunk = new TextDecoder().decode(value);
                const processStartTool = (tool, chunk) => {
                  const splitted = chunk.split(this.#SEPARATORS.START);
                  if (splitted.length > 0) {
                    tool = splitted[1];
                    chunk = splitted[0];
                  }
                  return [tool, chunk];
                };
                if (chunk.includes(this.#SEPARATORS.METADATA)) {
                  metadata.started = true;
                  const split = chunk.split(this.#SEPARATORS.METADATA);
                  metadata.value += split[1];
                  if (split[0]) this.#streamResponse += split[0];
                }
                if (metadata.started) {
                  metadata.value += chunk;
                  this.triggerEvent('stream.response');
                  return;
                }
                if (chunk.includes(this.#SEPARATORS.END)) {
                  [tool, chunk] = processStartTool(tool, chunk);
                  const splitted = tool.split(this.#SEPARATORS.END);
                  tool = splitted[0];
                  chunk = splitted[1];
                  this.#actions.push(tool);
                  this.triggerEvent('action.received');
                  this.#streamResponse += this.#SEPARATORS.START + tool + this.#SEPARATORS.END;
                  tool = '';
                }
                if (chunk.includes(this.#SEPARATORS.START)) {
                  [tool, chunk] = processStartTool(tool, chunk);
                } else {
                  this.#streamResponse += chunk;
                }
                this.triggerEvent('stream.response');
              } // end while
              return promise;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfamNhbGwiLCJBcGkiLCJFdmVudHMiLCJ1cmwiLCJmZXRjaGVyIiwiYWN0aW9ucyIsInN0cmVhbVJlc3BvbnNlIiwibWV0YWRhdGEiLCJjb25zdHJ1Y3RvciIsIkpDYWxsIiwib24iLCJ0cmlnZ2VyIiwiZ2V0UmVzcG9uc2UiLCIjZ2V0UmVzcG9uc2UiLCJhY3Rpb24iLCJtZXRob2QiLCJyb3V0ZSIsInNwZWNzIiwiZ2V0VVJMIiwiYmVhcmVyIiwiZ2V0IiwicG9zdCIsInB1dCIsImRlbGV0ZSIsInN0cmVhbSIsImV4cG9ydHMiLCJfbW9kZWwiLCJKQ2FsbDIiLCJSZWFjdGl2ZU1vZGVsIiwiU0VQQVJBVE9SUyIsIk1FVEFEQVRBIiwiU1RBUlQiLCJFTkQiLCJzdGFydGVkIiwidmFsdWUiLCJwYXJzZWQiLCJ0b29sc0luZm9ybWF0aW9uIiwicmVzcG9uc2UiLCJjaGVja1Rva2VuIiwiaGVhZGVycyIsIndpbmRvdyIsInNlc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2Vzc2lvbk9iamVjdCIsIkpTT04iLCJwYXJzZSIsImFwcGVuZCIsImFjY2Vzc1Rva2VuIiwiZ2V0SGVhZGVycyIsIkhlYWRlcnMiLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsImV4ZWN1dGUiLCJwYXJhbXMiLCJoZWFkZXJzU3BlY3MiLCJtb2RlIiwiZW1wdHlQYXJhbXMiLCJlbnRyaWVzIiwibGVuZ3RoIiwiYm9keSIsInN0cmluZ2lmeSIsInBhcmFtZXRlcnMiLCJVUkxTZWFyY2hQYXJhbXMiLCJOYU4iLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInF1ZXJ5U3RyaW5nIiwidG9TdHJpbmciLCJmZXRjaCIsImpzb24iLCJlIiwiY29uc29sZSIsImVycm9yIiwiI3N0cmVhbSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm9rIiwiRXJyb3IiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJ0b29sIiwiZG9uZSIsInJlYWQiLCJyZXNvbHZlIiwiY2h1bmsiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsInNwbGl0dGVkIiwic3BsaXQiLCJyZXBsYWNlIiwicHVzaCIsInRyaWdnZXJFdmVudCIsImV4YyIsIm11bHRpcGFydCIsImxvZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJwcm9jZXNzR2V0UGFyYW1zIiwiI3Byb2Nlc3NHZXRQYXJhbXMiLCJwcm9jZXNzUG9zdFBhcmFtcyIsIiNwcm9jZXNzUG9zdFBhcmFtcyIsImRhdGEiLCJwcm9jZXNzU3RyZWFtIiwiI3Byb2Nlc3NTdHJlYW0iLCJwcm9jZXNzU3RhcnRUb29sIl0sInNvdXJjZXMiOlsiL2FwaS50cyIsIi9qY2FsbCBjb3B5LnRzIiwiL2pjYWxsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNPO1VBQVUsTUFDWEUsR0FBSSxTQUFRSCxLQUFBLENBQUFJLE1BQU07WUFDdkIsQ0FBQUMsR0FBSTtZQUNKLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJLElBQUksRUFBRTtZQUN2QjtZQUNBLENBQUFDLE9BQVE7WUFFUixJQUFJQyxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUQsT0FBUSxDQUFDQyxPQUFPO1lBQzdCO1lBQ0EsSUFBSUMsY0FBY0EsQ0FBQTtjQUNqQixPQUFPLElBQUksQ0FBQyxDQUFBRixPQUFRLENBQUNFLGNBQWM7WUFDcEM7WUFFQSxJQUFJQyxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUgsT0FBUSxDQUFDRyxRQUFRO1lBQzlCO1lBQ0FDLFlBQVlMLEdBQUc7Y0FDZCxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUEsR0FBSSxHQUFHQSxHQUFHO2NBQ2Ys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