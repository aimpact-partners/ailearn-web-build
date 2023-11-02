System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.2.0/model"], function (_export, _context) {
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
    }, function (_beyondJsReactive120Model) {
      dependency_2 = _beyondJsReactive120Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.11"]]);
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

      /***********************
      INTERNAL MODULE: ./jcall
      ***********************/

      ims.set('./jcall', {
        hash: 1055841372,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.JCall = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _stream = require("./stream");
          /*bundle*/
          class JCall extends _model.ReactiveModel {
            get actions() {
              return this.#streamer.actions;
            }
            get streamResponse() {
              return this.#streamer.response;
            }
            #bearer;
            bearer(bearer) {
              if (bearer) this.#bearer = bearer;
              return this;
            }
            #streamer;
            constructor() {
              super();
              this.#streamer = new _stream.Stream(this);
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
                if (stream) return this.#streamer.execute(url, specs);
                const response = await fetch(url, specs);
                return response.json();
              } catch (e) {
                console.error('error jcall', e);
              }
            };
            stream = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'post', params, headers, true);
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

      /************************
      INTERNAL MODULE: ./stream
      ************************/

      ims.set('./stream', {
        hash: 1510277562,
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
              this.#response = undefined;
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
                  this.#response += this.handleStart(chunk, this.#response);
                } else if (this.#currentTool.started && chunk.includes(this.#SEPARATORS.END)) {
                  // ends to receive an action tool
                  this.#response += this.handleEnd(chunk, this.#response);
                  this.#cleanCurrentTool();
                }
                this.#response += chunk;
                this.#parent.triggerEvent('action.received');
                this.#parent.triggerEvent('stream.response');
              }
            }
            async execute(url, specs) {
              try {
                const promise = new _core.PendingPromise();
                const response = await fetch(url, specs);
                if (!response.ok) {
                  throw new Error('error in stream');
                }
                this.#read(response, promise);
                return promise;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.Stream = Stream;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFTLENBQUNOLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2tCQUN2RCxJQUFJLENBQUMsaUJBQWlCLEVBQUU7O2dCQUd6QixJQUFJLENBQUMsU0FBUyxJQUFJQSxLQUFLO2dCQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDYSxZQUFZLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxPQUFPLENBQUNBLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQzs7WUFFOUM7WUFFQSxNQUFNcEMsT0FBTyxDQUFDOUMsR0FBRyxFQUFFVyxLQUFLO2NBQ3ZCLElBQUk7Z0JBQ0gsTUFBTXFELE9BQU8sR0FBRyxJQUFJbUIsb0JBQWMsRUFBRTtnQkFDcEMsTUFBTTlELFFBQVEsR0FBYSxNQUFNK0IsS0FBSyxDQUFDcEQsR0FBRyxFQUFFVyxLQUFLLENBQUM7Z0JBRWxELElBQUksQ0FBQ1UsUUFBUSxDQUFDK0QsRUFBRSxFQUFFO2tCQUNqQixNQUFNLElBQUlDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7Z0JBR25DLElBQUksQ0FBQyxLQUFLLENBQUNoRSxRQUFRLEVBQUUyQyxPQUFPLENBQUM7Z0JBQzdCLE9BQU9BLE9BQU87ZUFDZCxDQUFDLE9BQU9WLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7O1VBQ0FuQyIsIm5hbWVzIjpbIkFwaSIsIkV2ZW50cyIsInVybCIsImFjdGlvbnMiLCJzdHJlYW1SZXNwb25zZSIsIm1ldGFkYXRhIiwiY29uc3RydWN0b3IiLCJKQ2FsbCIsIm9uIiwidHJpZ2dlciIsImFjdGlvbiIsIm1ldGhvZCIsInJvdXRlIiwic3BlY3MiLCJnZXRVUkwiLCJiZWFyZXIiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsZXRlIiwic3RyZWFtIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJyZXNwb25zZSIsIlN0cmVhbSIsImdldEhlYWRlcnMiLCJtdWx0aXBhcnQiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInBhcmFtcyIsImVtcHR5UGFyYW1zIiwiZW50cmllcyIsImxlbmd0aCIsInBhcmFtZXRlcnMiLCJVUkxTZWFyY2hQYXJhbXMiLCJOYU4iLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZXhlY3V0ZSIsImhlYWRlcnNTcGVjcyIsIm1vZGUiLCJib2R5IiwicXVlcnlTdHJpbmciLCJ0b1N0cmluZyIsImZldGNoIiwianNvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJNRVRBREFUQSIsIlNUQVJUIiwiRU5EIiwic3RhcnRlZCIsInZhbHVlIiwicGFyc2VkIiwicGFyZW50IiwicHJvbWlzZSIsInBhcnNlIiwiZXhjIiwibG9nIiwicmVzb2x2ZSIsImNodW5rIiwic3BsaXQiLCJoYW5kbGVTdGFydCIsInNwbGl0dGVkIiwic3BsaXR0ZWQyIiwicHVzaCIsImhhbmRsZUVuZCIsInJlYWRlciIsImdldFJlYWRlciIsImRvbmUiLCJyZWFkIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJ0cmlnZ2VyRXZlbnQiLCJQZW5kaW5nUHJvbWlzZSIsIm9rIiwiRXJyb3IiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImFwaS50cyIsImpjYWxsLnRzIiwic3RyZWFtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdfQ==