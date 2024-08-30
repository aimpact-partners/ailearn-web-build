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
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/ailearn-app", "0.1.6-dev.09"]]);
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
        hash: 896303390,
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
        hash: 1856040650,
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
        hash: 3674916421,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmV0Y2hlciIsInJlcXVpcmUiLCJfY29yZSIsIkFwaSIsIkV2ZW50cyIsInVybCIsImZldGNoZXIiLCJhY3Rpb25zIiwic3RyZWFtUmVzcG9uc2UiLCJtZXRhZGF0YSIsImNvbnN0cnVjdG9yIiwiRmV0Y2hlciIsIm9uIiwidHJpZ2dlciIsImdldFJlc3BvbnNlIiwiI2dldFJlc3BvbnNlIiwiYWN0aW9uIiwibWV0aG9kIiwicm91dGUiLCJzcGVjcyIsImdldFVSTCIsImJlYXJlciIsImdldCIsInBvc3QiLCJwdXQiLCJkZWxldGUiLCJzdHJlYW0iLCJleHBvcnRzIiwiX21vZGVsIiwiX3N0cmVhbSIsIlJlYWN0aXZlTW9kZWwiLCJzdHJlYW1lciIsImZvcm1EYXRhSW5zdGFuY2UiLCJjdXN0b21IZWFkZXJzIiwiZGVmYXVsdEhlYWRlcnMiLCJTdHJlYW0iLCJyZXNwb25zZSIsInRva2VuIiwic2V0SGVhZGVycyIsImhlYWRlcnMiLCJnZXRIZWFkZXJzIiwibXVsdGlwYXJ0IiwibWVyZ2VkSGVhZGVycyIsIkhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXBwZW5kIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwiY3JlYXRlRm9ybURhdGEiLCJGb3JtRGF0YSIsInByb2Nlc3NHZXRQYXJhbXMiLCJwYXJhbXMiLCJsZW5ndGgiLCJwYXJhbWV0ZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwiTmFOIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJwcm9jZXNzUGFyYW1zIiwidG9TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiZXhlY3V0ZSIsIm1vZGUiLCJib2R5IiwicXVlcnlTdHJpbmciLCJmZXRjaCIsImpzb24iLCJTRVBBUkFUT1JTIiwiTUVUQURBVEEiLCJTVEFSVCIsIkVORCIsInN0YXJ0ZWQiLCJwYXJzZWQiLCJleGVjdXRpbmdQcm9taXNlIiwicGFyZW50IiwiY3VycmVudFRvb2wiLCJwcm9jZXNzUmVzcG9uc2UiLCJwcm9taXNlIiwicGFyc2UiLCJleGMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZXNvbHZlIiwiY2xlYW5DdXJyZW50VG9vbCIsIiNjbGVhbkN1cnJlbnRUb29sIiwiaGFuZGxlTWV0YWRhdGEiLCIjaGFuZGxlTWV0YWRhdGEiLCJjaHVuayIsInNwbGl0IiwiaGFuZGxlU3RhcnQiLCJzcGxpdHRlZCIsInNwbGl0dGVkMiIsInB1c2giLCJoYW5kbGVFbmQiLCJyZWFkIiwiI3JlYWQiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkb25lIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJ0cmlnZ2VyRXZlbnQiLCJQZW5kaW5nUHJvbWlzZSIsIm9rIiwiRXJyb3IiLCJlIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvYXBpLnRzIiwiL2ZldGNoZXIudHMiLCIvc3RyZWFtLnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLEdBQUksU0FBUUQsS0FBQSxDQUFBRSxNQUFNO1lBQ3ZCLENBQUFDLEdBQUk7WUFDSixJQUFJQSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSSxJQUFJLEVBQUU7WUFDdkI7WUFDQSxDQUFBQyxPQUFRO1lBRVIsSUFBSUMsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFELE9BQVEsQ0FBQ0MsT0FBTztZQUM3QjtZQUNBLElBQUlDLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQUYsT0FBUSxDQUFDRSxjQUFjO1lBQ3BDO1lBRUEsSUFBSUMsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFILE9BQVEsQ0FBQ0csUUFBUTtZQUM5QjtZQUNBQyxZQUFZTCxH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