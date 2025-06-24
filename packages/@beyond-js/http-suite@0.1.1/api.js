System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/core", "@beyond-js/reactive@2.0.5/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Api, __beyond_pkg, hmr;
  _export("Api", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Core) {
      dependency_1 = _beyondJsKernel0112Core;
    }, function (_beyondJsReactive205Model) {
      dependency_2 = _beyondJsReactive205Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "2.1.0"], ["socket.io-client", "4.7.2"], ["zod", "3.24.2"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/rvd", "0.5.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/http-suite@0.1.1/api"
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
        hash: 1219348070,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Api = void 0;
          var _fetcher = require("./fetcher");
          var _core = require("@beyond-js/kernel/core");
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
            get stringContent() {
              return this.#fetcher.stringContent;
            }
            constructor(url) {
              super();
              this.#url = url;
              this.#fetcher = new _fetcher.Fetcher();
              this.#fetcher.on('action.received', specs => this.trigger('action.received', specs));
              this.#fetcher.on('stream.response', this.#getResponse);
            }
            #getResponse = () => {
              this.trigger('stream.response');
            };
            async action(method = 'get', route, specs = {}) {
              this.#fetcher.clean();
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
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 3982783585,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ApiError = void 0;
          class ApiError extends Error {
            original;
            constructor(message, cause) {
              super(message);
              this.name = 'ApiError';
              this.original = cause;
              if (cause instanceof Error) {
                // Extiende los datos del error original
                this.stack = cause.stack ? `${this.stack}\nCaused by: ${cause.stack}` : this.stack;
                // Opcional: puedes copiar más propiedades si lo deseas
                // this.message += ` (caused by: ${cause.message})`;
              }
            }
          }
          exports.ApiError = ApiError;
        }
      });

      /*************************
      INTERNAL MODULE: ./fetcher
      *************************/

      ims.set('./fetcher', {
        hash: 524422151,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Fetcher = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _stream = require("./stream");
          class Fetcher extends _model.ReactiveModel {
            #bearer;
            streamer;
            formDataInstance;
            customHeaders = {
              "Content-Type": "application/json"
            };
            defaultHeaders = {
              "Content-Type": "application/json"
            };
            constructor() {
              super();
              this.streamer = new _stream.Stream(this);
            }
            get actions() {
              return this.streamer.actions;
            }
            get streamResponse() {
              return this.streamer.response;
            }
            get stringContent() {
              return this.streamer.stringContent;
            }
            get metadata() {
              return this.streamer.metadata;
            }
            bearer(token) {
              if (token) this.#bearer = token;
              return this;
            }
            setHeaders(headers) {
              this.customHeaders = {
                ...this.defaultHeaders,
                ...headers
              };
              return this;
            }
            getHeaders(specs = {}, multipart = false) {
              const mergedHeaders = {
                ...this.customHeaders,
                ...specs
              };
              const headers = new Headers();
              const token = mergedHeaders.Authorization || this.#bearer;
              if (token) headers.append("Authorization", `Bearer ${token}`);
              for (const [key, value] of Object.entries(mergedHeaders)) {
                if (key !== "Authorization" && key !== "bearer") {
                  headers.append(key, value);
                }
              }
              if (multipart) {
                headers.delete("Content-Type");
              }
              return headers;
            }
            createFormData(specs = {}) {
              this.formDataInstance = new FormData();
              for (const [key, value] of Object.entries(specs)) {
                this.formDataInstance.append(key, value);
              }
              return this.formDataInstance;
            }
            processGetParams(params = {}) {
              if (Object.entries(params).length === 0) return "";
              const parameters = new URLSearchParams();
              for (const [key, value] of Object.entries(params)) {
                if (![NaN, undefined, ""].includes(value)) {
                  parameters.append(key, value);
                }
              }
              return parameters;
            }
            processParams(params = {}, multipart = false, method) {
              if (method === "get") {
                return this.processGetParams(params).toString();
              }
              if (Object.entries(params).length === 0) return;
              return multipart ? this.createFormData(params) : JSON.stringify(params);
            }
            async execute(url, method = "get", params = {}, stream = false) {
              const multipart = params.multipart;
              const headers = this.getHeaders({
                bearer: params.bearer
              }, multipart);
              delete params.multipart;
              delete params.bearer;
              const specs = {
                method,
                headers,
                mode: "cors"
              };
              if (["post", "put", "DELETE"].includes(method)) {
                specs.body = this.processParams(params, multipart, method);
              } else if (method === "get") {
                const queryString = this.processParams(params, multipart, method);
                if (queryString) url += `?${queryString}`;
              }
              if (stream) return this.streamer.execute(url, specs);
              const response = await fetch(url, specs);
              return await response.json();
            }
            stream(url, params = {}) {
              return this.execute(url, "post", params, true);
            }
            get(url, params = {}) {
              return this.execute(url, "get", params);
            }
            post(url, params = {}) {
              return this.execute(url, "post", params);
            }
            delete(url, params = {}) {
              return this.execute(url, "DELETE", params);
            }
            put(url, params = {}) {
              return this.execute(url, "put", params);
            }
            clean() {
              this.streamer.clean();
            }
          }
          exports.Fetcher = Fetcher;
        }
      });

      /************************
      INTERNAL MODULE: ./stream
      ************************/

      ims.set('./stream', {
        hash: 1519673351,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Stream = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _error = require("./error");
          class Stream {
            #SEPARATORS = {
              METADATA: 'ÿ',
              START: '😸',
              END: '🖋️'
            };
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
            #actions = [];
            get actions() {
              return this.#actions;
            }
            #response = '';
            get response() {
              return this.#response;
            }
            #executingPromise;
            #parent;
            #currentTool = {
              started: false,
              value: '',
              parsed: {
                value: void 0
              }
            };
            constructor(parent) {
              this.#parent = parent;
            }
            get stringContent() {
              const {
                START,
                END
              } = this.#SEPARATORS;
              if (!this.#response) return;
              const regex = new RegExp(`${START}.*?${END}`, 'gs');
              return this.#response.replace(regex, '').trim();
            }
            clean() {
              this.#metadata = {
                started: false,
                value: '',
                parsed: {
                  value: void 0
                }
              };
              this.#actions = [];
              this.#response = '';
              this.#executingPromise = undefined;
            }
            #processResponse = promise => {
              const metadata = this.#metadata;
              try {
                this.#metadata.parsed.value = JSON.parse(metadata.value);
              } catch (exc) {
                this.#metadata.parsed.error = 'Error parsing metadata';
                promise?.reject(new _error.ApiError('Failed to parse metadata', exc));
                return;
              }
              promise?.resolve({
                value: this.#response,
                ...metadata.parsed.value
              });
              this.#metadata = {
                started: false,
                value: '',
                parsed: {
                  value: void 0
                }
              };
              this.#response = undefined;
              this.#executingPromise = undefined;
            };
            #cleanCurrentTool() {
              this.#currentTool = {
                started: false,
                value: '',
                parsed: {
                  value: void 0
                }
              };
            }
            async #handleMetadata(chunk, response) {
              this.#metadata.started = true;
              const split = chunk.split(this.#SEPARATORS.METADATA);
              this.#metadata.value += split[1];
              return split[0] ? split[0] : '';
            }
            handleStart(chunk, response) {
              const splitted = chunk.split(this.#SEPARATORS.START);
              this.#currentTool.started = true;
              chunk = '';
              if (splitted[1].includes(this.#SEPARATORS.END)) {
                const splitted2 = splitted[1].split(this.#SEPARATORS.END);
                this.#currentTool.value = splitted2[0];
                this.#actions.push(splitted2[0]);
                response += this.#SEPARATORS.START + this.#currentTool.value + this.#SEPARATORS.END;
              } else {
                response += splitted[0];
                this.#currentTool.value += splitted[1];
              }
              return response;
            }
            handleEnd(chunk, response) {
              const splitted = chunk.split(this.#SEPARATORS.END);
              this.#currentTool.value += splitted[0];
              this.#currentTool.started = false;
              this.#actions.push(this.#currentTool.value);
              this.#response += this.#SEPARATORS.START + this.#currentTool.value + this.#SEPARATORS.END;
              return splitted[1];
            }
            async #read(response, promise) {
              const reader = response.body?.getReader();
              if (!reader) {
                promise.reject(new _error.ApiError('Response body is not readable'));
                return;
              }
              try {
                // throw new Error('test 2');
                while (true) {
                  const {
                    done,
                    value
                  } = await reader.read();
                  if (done) {
                    this.#processResponse(promise);
                    return;
                  }
                  if (!value) continue;
                  let chunk = new TextDecoder().decode(value);
                  if (chunk.includes(this.#SEPARATORS.METADATA)) {
                    const cleaned = await this.#handleMetadata(chunk, this.#response);
                    this.#response += cleaned;
                    this.#parent.triggerEvent('stream.response');
                    continue;
                  }
                  if (this.#metadata.started) {
                    this.#metadata.value += chunk;
                    this.#parent.trigger('stream.response');
                    this.#parent.trigger('action.received', this.#metadata.value);
                    continue;
                  }
                  if (chunk.includes(this.#SEPARATORS.START)) {
                    this.handleStart(chunk, this.#response);
                  } else if (this.#currentTool.started && chunk.includes(this.#SEPARATORS.END)) {
                    this.handleEnd(chunk, this.#response);
                    this.#cleanCurrentTool();
                  }
                  this.#response += chunk;
                  this.#parent.triggerEvent('action.received');
                  this.#parent.triggerEvent('stream.response');
                }
              } catch (e) {
                promise.reject(new _error.ApiError('Stream reading failed', e));
              }
            }
            async execute(url, specs) {
              this.#executingPromise = new _core.PendingPromise();
              this.#response = '';
              let response;
              try {
                response = await fetch(url, specs);
                if (!response.ok) {
                  throw new _error.ApiError(`Stream request failed with status ${response.status}`);
                }
                await this.#read(response, this.#executingPromise);
              } catch (e) {
                console.error('Stream execution failed', e);
                this.#executingPromise.reject(new _error.ApiError('Stream execution failed', e));
              }
              return this.#executingPromise;
            }
          }
          exports.Stream = Stream;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 573802250,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./api",
        "from": "Api",
        "name": "Api"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Api') && _export("Api", Api = require ? require('./api').Api : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmV0Y2hlciIsInJlcXVpcmUiLCJfY29yZSIsIkFwaSIsIkV2ZW50cyIsInVybCIsImZldGNoZXIiLCJhY3Rpb25zIiwic3RyZWFtUmVzcG9uc2UiLCJtZXRhZGF0YSIsInN0cmluZ0NvbnRlbnQiLCJjb25zdHJ1Y3RvciIsIkZldGNoZXIiLCJvbiIsInNwZWNzIiwidHJpZ2dlciIsImdldFJlc3BvbnNlIiwiI2dldFJlc3BvbnNlIiwiYWN0aW9uIiwibWV0aG9kIiwicm91dGUiLCJjbGVhbiIsImdldFVSTCIsImJlYXJlciIsImdldCIsInBvc3QiLCJwdXQiLCJkZWxldGUiLCJzdHJlYW0iLCJleHBvcnRzIiwiQXBpRXJyb3IiLCJFcnJvciIsIm9yaWdpbmFsIiwibWVzc2FnZSIsImNhdXNlIiwibmFtZSIsInN0YWNrIiwiX21vZGVsIiwiX3N0cmVhbSIsIlJlYWN0aXZlTW9kZWwiLCJzdHJlYW1lciIsImZvcm1EYXRhSW5zdGFuY2UiLCJjdXN0b21IZWFkZXJzIiwiZGVmYXVsdEhlYWRlcnMiLCJTdHJlYW0iLCJyZXNwb25zZSIsInRva2VuIiwic2V0SGVhZGVycyIsImhlYWRlcnMiLCJnZXRIZWFkZXJzIiwibXVsdGlwYXJ0IiwibWVyZ2VkSGVhZGVycyIsIkhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXBwZW5kIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwiY3JlYXRlRm9ybURhdGEiLCJGb3JtRGF0YSIsInByb2Nlc3NHZXRQYXJhbXMiLCJwYXJhbXMiLCJsZW5ndGgiLCJwYXJhbWV0ZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwiTmFOIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJwcm9jZXNzUGFyYW1zIiwidG9TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiZXhlY3V0ZSIsIm1vZGUiLCJib2R5IiwicXVlcnlTdHJpbmciLCJmZXRjaCIsImpzb24iLCJfZXJyb3IiLCJTRVBBUkFUT1JTIiwiTUVUQURBVEEiLCJTVEFSVCIsIkVORCIsInN0YXJ0ZWQiLCJwYXJzZWQiLCJleGVjdXRpbmdQcm9taXNlIiwicGFyZW50IiwiY3VycmVudFRvb2wiLCJyZWdleCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJ0cmltIiwicHJvY2Vzc1Jlc3BvbnNlIiwicHJvbWlzZSIsInBhcnNlIiwiZXhjIiwiZXJyb3IiLCJyZWplY3QiLCJyZXNvbHZlIiwiY2xlYW5DdXJyZW50VG9vbCIsIiNjbGVhbkN1cnJlbnRUb29sIiwiaGFuZGxlTWV0YWRhdGEiLCIjaGFuZGxlTWV0YWRhdGEiLCJjaHVuayIsInNwbGl0IiwiaGFuZGxlU3RhcnQiLCJzcGxpdHRlZCIsInNwbGl0dGVkMiIsInB1c2giLCJoYW5kbGVFbmQiLCJyZWFkIiwiI3JlYWQiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkb25lIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJjbGVhbmVkIiwidHJpZ2dlckV2ZW50IiwiZSIsIlBlbmRpbmdQcm9taXNlIiwib2siLCJzdGF0dXMiLCJjb25zb2xlIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvYXBpLnRzIiwiL2Vycm9yLnRzIiwiL2ZldGNoZXIudHMiLCIvc3RyZWFtLnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsR0FBSSxTQUFRRCxLQUFBLENBQUFFLE1BQU07WUFDdkIsQ0FBQUMsR0FBSTtZQUNKLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJLElBQUksRUFBRTtZQUN2QjtZQUNBLENBQUFDLE9BQVE7WUFFUixJQUFJQyxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUQsT0FBUSxDQUFDQyxPQUFP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