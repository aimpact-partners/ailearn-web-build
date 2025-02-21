System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/reactive@0.0.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Api, __beyond_pkg, hmr;
  _export("Api", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_aimpactReactive001Model) {
      dependency_2 = _aimpactReactive001Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["zod", "3.24.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@aimpact/reactive/model', dependency_2]]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./api
      *********************/
      ims.set('./api', {
        hash: 3240211034,
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

      /*************************
      INTERNAL MODULE: ./fetcher
      *************************/

      ims.set('./fetcher', {
        hash: 2361657994,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Fetcher = void 0;
          var _model = require("@aimpact/reactive/model");
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
        hash: 1226346110,
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
                console.log(metadata);
                console.error(exc);
                this.#metadata.parsed.error = 'Error parsing metadata';
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
                  continue;
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
              this.#executingPromise = new _core.PendingPromise();
              this.#response = '';
              const response = await fetch(url, specs);
              if (!response.ok) {
                throw new Error('error in stream');
              }
              this.#read(response, this.#executingPromise);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmV0Y2hlciIsInJlcXVpcmUiLCJfY29yZSIsIkFwaSIsIkV2ZW50cyIsInVybCIsImZldGNoZXIiLCJhY3Rpb25zIiwic3RyZWFtUmVzcG9uc2UiLCJtZXRhZGF0YSIsInN0cmluZ0NvbnRlbnQiLCJjb25zdHJ1Y3RvciIsIkZldGNoZXIiLCJvbiIsInRyaWdnZXIiLCJnZXRSZXNwb25zZSIsIiNnZXRSZXNwb25zZSIsImFjdGlvbiIsIm1ldGhvZCIsInJvdXRlIiwic3BlY3MiLCJjbGVhbiIsImdldFVSTCIsImJlYXJlciIsImdldCIsInBvc3QiLCJwdXQiLCJkZWxldGUiLCJzdHJlYW0iLCJleHBvcnRzIiwiX21vZGVsIiwiX3N0cmVhbSIsIlJlYWN0aXZlTW9kZWwiLCJzdHJlYW1lciIsImZvcm1EYXRhSW5zdGFuY2UiLCJjdXN0b21IZWFkZXJzIiwiZGVmYXVsdEhlYWRlcnMiLCJTdHJlYW0iLCJyZXNwb25zZSIsInRva2VuIiwic2V0SGVhZGVycyIsImhlYWRlcnMiLCJnZXRIZWFkZXJzIiwibXVsdGlwYXJ0IiwibWVyZ2VkSGVhZGVycyIsIkhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXBwZW5kIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwiY3JlYXRlRm9ybURhdGEiLCJGb3JtRGF0YSIsInByb2Nlc3NHZXRQYXJhbXMiLCJwYXJhbXMiLCJsZW5ndGgiLCJwYXJhbWV0ZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwiTmFOIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJwcm9jZXNzUGFyYW1zIiwidG9TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiZXhlY3V0ZSIsIm1vZGUiLCJib2R5IiwicXVlcnlTdHJpbmciLCJmZXRjaCIsImpzb24iLCJTRVBBUkFUT1JTIiwiTUVUQURBVEEiLCJTVEFSVCIsIkVORCIsInN0YXJ0ZWQiLCJwYXJzZWQiLCJleGVjdXRpbmdQcm9taXNlIiwicGFyZW50IiwiY3VycmVudFRvb2wiLCJyZWdleCIsIlJlZ0V4cCIsImNsZWFuZWRTdHJpbmciLCJyZXBsYWNlIiwidHJpbSIsInByb2Nlc3NSZXNwb25zZSIsInByb21pc2UiLCJwYXJzZSIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlc29sdmUiLCJjbGVhbkN1cnJlbnRUb29sIiwiI2NsZWFuQ3VycmVudFRvb2wiLCJoYW5kbGVNZXRhZGF0YSIsIiNoYW5kbGVNZXRhZGF0YSIsImNodW5rIiwic3BsaXQiLCJoYW5kbGVTdGFydCIsInNwbGl0dGVkIiwic3BsaXR0ZWQyIiwicHVzaCIsImhhbmRsZUVuZCIsInJlYWQiLCIjcmVhZCIsInJlYWRlciIsImdldFJlYWRlciIsImRvbmUiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsInRyaWdnZXJFdmVudCIsIlBlbmRpbmdQcm9taXNlIiwib2siLCJFcnJvciIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL2FwaS50cyIsIi9mZXRjaGVyLnRzIiwiL3N0cmVhbS50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxHQUFJLFNBQVFELEtBQUEsQ0FBQUUsTUFBTTtZQUN2QixDQUFBQyxHQUFJO1lBQ0osSUFBSUEsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUksSUFBSSxFQUFFO1lBQ3ZCO1lBQ0EsQ0FBQUMsT0FBUTtZQUVSLElBQUlDLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBRCxPQUFRLENBQUNDLE9BQU87WUFDN0I7WUFDQSxJQUFJQyxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFGLE9BQVEsQ0FBQ0UsY0FBYztZQUNwQztZQUVBLElBQUlDLFFB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