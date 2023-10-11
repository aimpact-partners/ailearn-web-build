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
        hash: 541106167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfamNhbGwiLCJBcGkiLCJFdmVudHMiLCJ1cmwiLCJmZXRjaGVyIiwic3RyZWFtUmVzcG9uc2UiLCJtZXRhZGF0YSIsImNvbnN0cnVjdG9yIiwiSkNhbGwiLCJvbiIsImdldFJlc3BvbnNlIiwiI2dldFJlc3BvbnNlIiwidHJpZ2dlciIsImFjdGlvbiIsIm1ldGhvZCIsInJvdXRlIiwic3BlY3MiLCJnZXRVUkwiLCJiZWFyZXIiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsZXRlIiwic3RyZWFtIiwiZXhwb3J0cyIsIl9tb2RlbCIsIkpDYWxsMiIsIlJlYWN0aXZlTW9kZWwiLCJTRVBBUkFUT1JTIiwiTUVUQURBVEEiLCJTVEFSVCIsIkVORCIsInN0YXJ0ZWQiLCJ2YWx1ZSIsInBhcnNlZCIsInRvb2xzSW5mb3JtYXRpb24iLCJyZXNwb25zZSIsImNoZWNrVG9rZW4iLCJoZWFkZXJzIiwid2luZG93Iiwic2Vzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiYXBwZW5kIiwiYWNjZXNzVG9rZW4iLCJnZXRIZWFkZXJzIiwiSGVhZGVycyIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwiZXhlY3V0ZSIsInBhcmFtcyIsImhlYWRlcnNTcGVjcyIsIm1vZGUiLCJlbXB0eVBhcmFtcyIsImVudHJpZXMiLCJsZW5ndGgiLCJib2R5Iiwic3RyaW5naWZ5IiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIk5hTiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicXVlcnlTdHJpbmciLCJ0b1N0cmluZyIsImZldGNoIiwianNvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCIjc3RyZWFtIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwib2siLCJFcnJvciIsInJlYWRlciIsImdldFJlYWRlciIsInRvb2wiLCJkb25lIiwicmVhZCIsInJlc29sdmUiLCJjaHVuayIsIlRleHREZWNvZGVyIiwiZGVjb2RlIiwic3BsaXR0ZWQiLCJzcGxpdCIsInJlcGxhY2UiLCJwdXNoIiwidHJpZ2dlckV2ZW50IiwiZXhjIiwibXVsdGlwYXJ0IiwibG9nIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInByb2Nlc3NHZXRQYXJhbXMiLCIjcHJvY2Vzc0dldFBhcmFtcyIsInByb2Nlc3NQb3N0UGFyYW1zIiwiI3Byb2Nlc3NQb3N0UGFyYW1zIiwiZGF0YSIsInByb2Nlc3NTdHJlYW0iLCIjcHJvY2Vzc1N0cmVhbSIsInByb2Nlc3NTdGFydFRvb2wiXSwic291cmNlcyI6WyIvYXBpLnRzIiwiL2pjYWxsIGNvcHkudHMiLCIvamNhbGwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ087VUFBVSxNQUNYRSxHQUFJLFNBQVFILEtBQUEsQ0FBQUksTUFBTTtZQUN2QixDQUFBQyxHQUFJO1lBQ0osSUFBSUEsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUksSUFBSSxFQUFFO1lBQ3ZCO1lBQ0EsQ0FBQUMsT0FBUTtZQUVSLElBQUlDLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQUQsT0FBUSxDQUFDQyxjQUFjO1lBQ3BDO1lBRUEsSUFBSUMsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFGLE9BQVEsQ0FBQ0UsUUFBUTtZQUM5QjtZQUNBQyxZQUFZSixHQUFHO2NBQ2QsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFBLEdBQUksR0FBR0EsR0FBRztjQUNmLElBQUksQ0FBQyxDQUFBQyxPQUFRLEdBQUcsSUFBSUosTUFBQSxDQUFBUSxLQUFLLEVBQUU7Y0FDM0IsSUFBSSxDQUFDLENBQUFKLE9BQVEs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