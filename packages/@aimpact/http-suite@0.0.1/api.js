System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.2.0/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Api, __beyond_pkg, hmr;
  _export("Api", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive120Model) {
      dependency_2 = _beyondJsReactive120Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/http-suite@0.0.1/api"
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
        hash: 2822550351,
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

      /*************************
      INTERNAL MODULE: ./fetcher
      *************************/

      ims.set('./fetcher', {
        hash: 3492548172,
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
              'Content-Type': 'application/json'
            };
            defaultHeaders = {
              'Content-Type': 'application/json'
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
              if (token) headers.append('Authorization', `Bearer ${token}`);
              for (const [key, value] of Object.entries(mergedHeaders)) {
                if (key !== 'Authorization' && key !== 'bearer') {
                  headers.append(key, value);
                }
              }
              if (multipart) {
                headers.delete('Content-Type');
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
              if (Object.entries(params).length === 0) return '';
              const parameters = new URLSearchParams();
              for (const [key, value] of Object.entries(params)) {
                if (![NaN, undefined, ''].includes(value)) {
                  parameters.append(key, value);
                }
              }
              return parameters;
            }
            processParams(params = {}, multipart = false, method) {
              if (method === 'get') {
                return this.processGetParams(params).toString();
              }
              if (Object.entries(params).length === 0) return;
              return multipart ? this.createFormData(params) : JSON.stringify(params);
            }
            async execute(url, method = 'get', params = {}, stream = false) {
              const multipart = params.multipart;
              const headers = this.getHeaders({
                bearer: params.bearer
              }, multipart);
              delete params.multipart;
              delete params.bearer;
              const specs = {
                method,
                headers,
                mode: 'cors'
              };
              if (['post', 'put', 'DELETE'].includes(method)) {
                specs.body = this.processParams(params, multipart, method);
              } else if (method === 'get') {
                const queryString = this.processParams(params, multipart, method);
                if (queryString) url += `?${queryString}`;
              }
              if (stream) return this.streamer.execute(url, specs);
              const response = await fetch(url, specs);
              return await response.json();
            }
            stream(url, params = {}) {
              return this.execute(url, 'post', params, true);
            }
            get(url, params = {}) {
              return this.execute(url, 'get', params);
            }
            post(url, params = {}) {
              return this.execute(url, 'post', params);
            }
            delete(url, params = {}) {
              return this.execute(url, 'DELETE', params);
            }
            put(url, params = {}) {
              return this.execute(url, 'put', params);
            }
          }
          exports.Fetcher = Fetcher;
        }
      });

      /************************
      INTERNAL MODULE: ./stream
      ************************/

      ims.set('./stream', {
        hash: 1600582574,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Stream = void 0;
          var _core = require("@beyond-js/kernel/core");
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
              // Expresión regular para encontrar el contenido entre START y END
              const regex = new RegExp(`${START}.*?${END}`, 'gs');
              // Remover el contenido enconsotre los separadores
              const cleanedString = this.#response.replace(regex, '');
              return cleanedString.trim();
            }
            #processResponse = promise => {
              const metadata = this.#metadata;
              try {
                this.#metadata.parsed.value = JSON.parse(metadata.value);
              } catch (exc) {
                console.log(metadata);
                console.error(exc);
                this.#metadata.parsed.error = 'Error parsing metadata';
              }
              promise.resolve({
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
              return split[0] ? response += split[0] : response;
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
              // create the stream reader
              const reader = response.body?.getReader();
              while (true) {
                const {
                  done,
                  value
                } = await reader.read();
                let chunk = new TextDecoder().decode(value);
                if (done) return this.#processResponse(promise);
                if (chunk.includes(this.#SEPARATORS.METADATA)) {
                  this.#handleMetadata(chunk, this.#response);
                  continue;
                }
                if (this.#metadata.started) {
                  this.#metadata.value += chunk;
                  this.#parent.trigger('stream.response');
                  return;
                }
                if (chunk.includes(this.#SEPARATORS.START)) {
                  this.handleStart(chunk, this.#response);
                } else if (this.#currentTool.started && chunk.includes(this.#SEPARATORS.END)) {
                  // ends to receive an action tool
                  this.handleEnd(chunk, this.#response);
                  this.#cleanCurrentTool();
                }
                this.#response += chunk;
                // console.log(44, this.#response);
                this.#parent.triggerEvent('action.received');
                this.#parent.triggerEvent('stream.response');
              }
            }
            async execute(url, specs) {
              try {
                this.#executingPromise = new _core.PendingPromise();
                this.#response = '';
                const response = await fetch(url, specs);
                if (!response.ok) {
                  throw new Error('error in stream');
                }
                this.#read(response, this.#executingPromise);
                return this.#executingPromise;
              } catch (e) {
                console.error(e);
              }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmV0Y2hlciIsInJlcXVpcmUiLCJfY29yZSIsIkFwaSIsIkV2ZW50cyIsInVybCIsImZldGNoZXIiLCJhY3Rpb25zIiwic3RyZWFtUmVzcG9uc2UiLCJtZXRhZGF0YSIsInN0cmluZ0NvbnRlbnQiLCJjb25zdHJ1Y3RvciIsIkZldGNoZXIiLCJvbiIsInRyaWdnZXIiLCJnZXRSZXNwb25zZSIsIiNnZXRSZXNwb25zZSIsImFjdGlvbiIsIm1ldGhvZCIsInJvdXRlIiwic3BlY3MiLCJnZXRVUkwiLCJiZWFyZXIiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsZXRlIiwic3RyZWFtIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9zdHJlYW0iLCJSZWFjdGl2ZU1vZGVsIiwic3RyZWFtZXIiLCJmb3JtRGF0YUluc3RhbmNlIiwiY3VzdG9tSGVhZGVycyIsImRlZmF1bHRIZWFkZXJzIiwiU3RyZWFtIiwicmVzcG9uc2UiLCJ0b2tlbiIsInNldEhlYWRlcnMiLCJoZWFkZXJzIiwiZ2V0SGVhZGVycyIsIm11bHRpcGFydCIsIm1lcmdlZEhlYWRlcnMiLCJIZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImFwcGVuZCIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsImNyZWF0ZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJwcm9jZXNzR2V0UGFyYW1zIiwicGFyYW1zIiwibGVuZ3RoIiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIk5hTiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicHJvY2Vzc1BhcmFtcyIsInRvU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImV4ZWN1dGUiLCJtb2RlIiwiYm9keSIsInF1ZXJ5U3RyaW5nIiwiZmV0Y2giLCJqc29uIiwiU0VQQVJBVE9SUyIsIk1FVEFEQVRBIiwiU1RBUlQiLCJFTkQiLCJzdGFydGVkIiwicGFyc2VkIiwiZXhlY3V0aW5nUHJvbWlzZSIsInBhcmVudCIsImN1cnJlbnRUb29sIiwicmVnZXgiLCJSZWdFeHAiLCJjbGVhbmVkU3RyaW5nIiwicmVwbGFjZSIsInRyaW0iLCJwcm9jZXNzUmVzcG9uc2UiLCJwcm9taXNlIiwicGFyc2UiLCJleGMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZXNvbHZlIiwiY2xlYW5DdXJyZW50VG9vbCIsIiNjbGVhbkN1cnJlbnRUb29sIiwiaGFuZGxlTWV0YWRhdGEiLCIjaGFuZGxlTWV0YWRhdGEiLCJjaHVuayIsInNwbGl0IiwiaGFuZGxlU3RhcnQiLCJzcGxpdHRlZCIsInNwbGl0dGVkMiIsInB1c2giLCJoYW5kbGVFbmQiLCJyZWFkIiwiI3JlYWQiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkb25lIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJ0cmlnZ2VyRXZlbnQiLCJQZW5kaW5nUHJvbWlzZSIsIm9rIiwiRXJyb3IiLCJlIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvYXBpLnRzIiwiL2ZldGNoZXIudHMiLCIvc3RyZWFtLnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLEdBQUksU0FBUUQsS0FBQSxDQUFBRSxNQUFNO1lBQ3ZCLENBQUFDLEdBQUk7WUFDSixJQUFJQSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSSxJQUFJLEVBQUU7WUFDdkI7WUFDQSxDQUFBQyxPQUFRO1lBRVIsSUFBSUMsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFELE9BQVEsQ0FBQ0MsT0FBTztZQUM3QjtZQUNBLElBQUlDLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQUYsT0FBUSxDQUFDRSxjQUFjO1lBQ3BDO1lBRUEsSUFBSUMsUUFBUUEs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