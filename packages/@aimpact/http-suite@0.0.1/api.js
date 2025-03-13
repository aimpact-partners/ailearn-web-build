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
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["zod", "3.24.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/ailearn-app", "0.3.24"]]);
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

      /*************************
      INTERNAL MODULE: ./fetcher
      *************************/

      ims.set('./fetcher', {
        hash: 1516729950,
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
                console.log(11, key, value);
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
        hash: 1259019929,
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
                  const response = await this.#handleMetadata(chunk, this.#response);
                  this.#response += response;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmV0Y2hlciIsInJlcXVpcmUiLCJfY29yZSIsIkFwaSIsIkV2ZW50cyIsInVybCIsImZldGNoZXIiLCJhY3Rpb25zIiwic3RyZWFtUmVzcG9uc2UiLCJtZXRhZGF0YSIsInN0cmluZ0NvbnRlbnQiLCJjb25zdHJ1Y3RvciIsIkZldGNoZXIiLCJvbiIsInNwZWNzIiwidHJpZ2dlciIsImdldFJlc3BvbnNlIiwiI2dldFJlc3BvbnNlIiwiYWN0aW9uIiwibWV0aG9kIiwicm91dGUiLCJjbGVhbiIsImdldFVSTCIsImJlYXJlciIsImdldCIsInBvc3QiLCJwdXQiLCJkZWxldGUiLCJzdHJlYW0iLCJleHBvcnRzIiwiX21vZGVsIiwiX3N0cmVhbSIsIlJlYWN0aXZlTW9kZWwiLCJzdHJlYW1lciIsImZvcm1EYXRhSW5zdGFuY2UiLCJjdXN0b21IZWFkZXJzIiwiZGVmYXVsdEhlYWRlcnMiLCJTdHJlYW0iLCJyZXNwb25zZSIsInRva2VuIiwic2V0SGVhZGVycyIsImhlYWRlcnMiLCJnZXRIZWFkZXJzIiwibXVsdGlwYXJ0IiwibWVyZ2VkSGVhZGVycyIsIkhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXBwZW5kIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwiY3JlYXRlRm9ybURhdGEiLCJGb3JtRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzR2V0UGFyYW1zIiwicGFyYW1zIiwibGVuZ3RoIiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIk5hTiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicHJvY2Vzc1BhcmFtcyIsInRvU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImV4ZWN1dGUiLCJtb2RlIiwiYm9keSIsInF1ZXJ5U3RyaW5nIiwiZmV0Y2giLCJqc29uIiwiU0VQQVJBVE9SUyIsIk1FVEFEQVRBIiwiU1RBUlQiLCJFTkQiLCJzdGFydGVkIiwicGFyc2VkIiwiZXhlY3V0aW5nUHJvbWlzZSIsInBhcmVudCIsImN1cnJlbnRUb29sIiwicmVnZXgiLCJSZWdFeHAiLCJjbGVhbmVkU3RyaW5nIiwicmVwbGFjZSIsInRyaW0iLCJwcm9jZXNzUmVzcG9uc2UiLCJwcm9taXNlIiwicGFyc2UiLCJleGMiLCJlcnJvciIsInJlc29sdmUiLCJjbGVhbkN1cnJlbnRUb29sIiwiI2NsZWFuQ3VycmVudFRvb2wiLCJoYW5kbGVNZXRhZGF0YSIsIiNoYW5kbGVNZXRhZGF0YSIsImNodW5rIiwic3BsaXQiLCJoYW5kbGVTdGFydCIsInNwbGl0dGVkIiwic3BsaXR0ZWQyIiwicHVzaCIsImhhbmRsZUVuZCIsInJlYWQiLCIjcmVhZCIsInJlYWRlciIsImdldFJlYWRlciIsImRvbmUiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsInRyaWdnZXJFdmVudCIsIlBlbmRpbmdQcm9taXNlIiwib2siLCJFcnJvciIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL2FwaS50cyIsIi9mZXRjaGVyLnRzIiwiL3N0cmVhbS50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxHQUFJLFNBQVFELEtBQUEsQ0FBQUUsTUFBTTtZQUN2QixDQUFBQyxHQUFJO1lBQ0osSUFBSUEsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUksSUFBSSxFQUFFO1lBQ3ZCO1lBQ0EsQ0FBQUMsT0FBUTtZQUVSLElBQUlDLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBRCxPQUFRLENBQUNDLE9BQU87WUFDN0I7WUFDQSxJQUFJQyxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFGLE9BQVEsQ0FBQ0UsY0FBYztZQUNwQztZQUVBLElBQUlDLFFB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