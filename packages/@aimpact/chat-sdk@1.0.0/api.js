System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.6/model"], function (_export, _context) {
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
        hash: 3314564368,
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
                console.log(metadata);
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
              let tool = {
                started: false,
                value: '',
                parsed: {
                  value: void 0
                }
              };
              while (true) {
                const {
                  done,
                  value
                } = await reader.read();
                if (done) {
                  return this.#processStream(promise, metadata);
                }
                let chunk = new TextDecoder().decode(value);
                // starts to receive an action tool
                if (chunk.includes(this.#SEPARATORS.START)) {
                  const splitted = chunk.split(this.#SEPARATORS.START);
                  tool.started = true;
                  chunk = '';
                  if (splitted[1].includes(this.#SEPARATORS.END)) {
                    // the action tool is completed
                    const splitted2 = splitted[1].split(this.#SEPARATORS.END);
                    tool.value = splitted2[0];
                    this.#actions.push(splitted2[0]);
                    this.#streamResponse += this.#SEPARATORS.START + tool.value + this.#SEPARATORS.END;
                  } else {
                    this.#streamResponse += splitted[0];
                    tool.value += splitted[1];
                  }
                  this.triggerEvent('stream.response');
                  this.triggerEvent('action.received');
                  continue;
                }
                if (tool.started && chunk.includes(this.#SEPARATORS.END)) {
                  // ends to receive an action tool
                  const splitted = chunk.split(this.#SEPARATORS.END);
                  tool.value += splitted[0];
                  tool.started = false;
                  this.#actions.push(tool.value);
                  this.triggerEvent('stream.response');
                  this.triggerEvent('action.received');
                  this.#streamResponse += this.#SEPARATORS.START + tool.value + this.#SEPARATORS.END;
                  tool = {
                    started: false,
                    value: '',
                    parsed: {
                      value: void 0
                    }
                  };
                  chunk = splitted[1];
                }
                if (chunk.includes(this.#SEPARATORS.METADATA)) {
                  metadata.started = true;
                  const split = chunk.split(this.#SEPARATORS.METADATA);
                  metadata.value += split[1];
                  if (split[0]) this.#streamResponse += split[0];
                  continue;
                }
                if (metadata.started) {
                  metadata.value += chunk;
                  this.triggerEvent('stream.response');
                  return;
                }
                this.#streamResponse += chunk;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SztrQkFDdkIsSUFBSSxDQUFDTyxZQUFZLENBQUMsaUJBQWlCLENBQUM7a0JBQ3BDOztnQkFHRCxJQUFJLENBQUMsZUFBZSxJQUFJUCxLQUFLO2dCQUM3QixJQUFJLENBQUNPLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztlQUNwQyxDQUFDO2NBRUYsT0FBT25CLE9BQU87Y0FFZDtZQUNEOztZQUVBakQsR0FBRyxHQUFHLENBQUNkLEdBQVcsRUFBRXdDLE1BQWMsRUFBRVgsT0FBZSxLQUFJO2NBQ3RELE9BQU8sSUFBSSxDQUFDdUIsT0FBTyxDQUFDcEQsR0FBRyxFQUFFLEtBQUssRUFBRXdDLE1BQU0sQ0FBQztZQUN4QyxDQUFDO1lBQ0R6QixJQUFJLEdBQUcsQ0FDTmYsR0FBVyxFQUNYd0MsTUFBYyxFQUNkWCxVQUFtQjtjQUNsQixjQUFjLEVBQUU7YUFDaEIsS0FDRyxJQUFJLENBQUN1QixPQUFPLENBQUNwRCxHQUFHLEVBQUUsTUFBTSxFQUFFd0MsTUFBTSxFQUFFWCxPQUFPLENBQUM7WUFDL0NaLE1BQU0sR0FBRyxDQUNSakIsR0FBVyxFQUNYd0MsTUFBYyxFQUNkWCxVQUFtQjtjQUNsQixjQUFjLEVBQUU7YUFDaEIsS0FDRyxJQUFJLENBQUN1QixPQUFPLENBQUNwRCxHQUFHLEVBQUUsUUFBUSxFQUFFd0MsTUFBTSxFQUFFWCxPQUFPLENBQUM7WUFDakRiLEdBQUcsR0FBRyxDQUNMaEIsR0FBVyxFQUNYd0MsTUFBYyxFQUNkWCxVQUFtQjtjQUNsQixjQUFjLEVBQUU7YUFDaEIsS0FDRyxJQUFJLENBQUN1QixPQUFPLENBQUNwRCxHQUFHLEVBQUUsS0FBSyxFQUFFd0MsTUFBTSxFQUFFWCxPQUFPLENBQUM7O1VBQzlDViIsIm5hbWVzIjpbIkFwaSIsIkV2ZW50cyIsInVybCIsImFjdGlvbnMiLCJzdHJlYW1SZXNwb25zZSIsIm1ldGFkYXRhIiwiY29uc3RydWN0b3IiLCJKQ2FsbCIsIm9uIiwidHJpZ2dlciIsImFjdGlvbiIsIm1ldGhvZCIsInJvdXRlIiwic3BlY3MiLCJnZXRVUkwiLCJiZWFyZXIiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsZXRlIiwic3RyZWFtIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJNRVRBREFUQSIsIlNUQVJUIiwiRU5EIiwic3RhcnRlZCIsInZhbHVlIiwicGFyc2VkIiwiZ2V0SGVhZGVycyIsIm11bHRpcGFydCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInBhcmFtcyIsImVtcHR5UGFyYW1zIiwiZW50cmllcyIsImxlbmd0aCIsInBhcmFtZXRlcnMiLCJVUkxTZWFyY2hQYXJhbXMiLCJOYU4iLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZXhlY3V0ZSIsImhlYWRlcnNTcGVjcyIsIm1vZGUiLCJib2R5IiwicXVlcnlTdHJpbmciLCJ0b1N0cmluZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZSIsImVycm9yIiwicHJvbWlzZSIsInBhcnNlIiwiZXhjIiwicmVzb2x2ZSIsIlBlbmRpbmdQcm9taXNlIiwib2siLCJFcnJvciIsInJlYWRlciIsImdldFJlYWRlciIsInRvb2wiLCJkb25lIiwicmVhZCIsImNodW5rIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJzcGxpdHRlZCIsInNwbGl0Iiwic3BsaXR0ZWQyIiwicHVzaCIsInRyaWdnZXJFdmVudCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYXBpLnRzIiwiamNhbGwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==