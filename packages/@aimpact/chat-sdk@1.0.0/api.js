System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.12/model"], function (_export, _context) {
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
    }, function (_beyondJsReactive1112Model) {
      dependency_2 = _beyondJsReactive1112Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.39"]]);
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
        hash: 3049452603,
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
        hash: 3517965285,
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
        hash: 3091227484,
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
                  this.handleStart(chunk, this.#response);
                } else if (this.#currentTool.started && chunk.includes(this.#SEPARATORS.END)) {
                  // ends to receive an action tool
                  this.handleEnd(chunk, this.#response);
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
                this.#response = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfamNhbGwiLCJBcGkiLCJFdmVudHMiLCJ1cmwiLCJmZXRjaGVyIiwiYWN0aW9ucyIsInN0cmVhbVJlc3BvbnNlIiwibWV0YWRhdGEiLCJjb25zdHJ1Y3RvciIsIkpDYWxsIiwib24iLCJ0cmlnZ2VyIiwiZ2V0UmVzcG9uc2UiLCIjZ2V0UmVzcG9uc2UiLCJhY3Rpb24iLCJtZXRob2QiLCJyb3V0ZSIsInNwZWNzIiwiZ2V0VVJMIiwiYmVhcmVyIiwiZ2V0IiwicG9zdCIsInB1dCIsImRlbGV0ZSIsInN0cmVhbSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfc3RyZWFtIiwiUmVhY3RpdmVNb2RlbCIsInN0cmVhbWVyIiwicmVzcG9uc2UiLCJTdHJlYW0iLCJnZXRIZWFkZXJzIiwibXVsdGlwYXJ0IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJwcm9jZXNzR2V0UGFyYW1zIiwiI3Byb2Nlc3NHZXRQYXJhbXMiLCJwYXJhbXMiLCJlbXB0eVBhcmFtcyIsImVudHJpZXMiLCJsZW5ndGgiLCJwYXJhbWV0ZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwiTmFOIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJwcm9jZXNzUG9zdFBhcmFtcyIsIiNwcm9jZXNzUG9zdFBhcmFtcyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZXhlY3V0ZSIsImhlYWRlcnNTcGVjcyIsIm1vZGUiLCJib2R5IiwicXVlcnlTdHJpbmciLCJ0b1N0cmluZyIsImZldGNoIiwianNvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJTRVBBUkFUT1JTIiwiTUVUQURBVEEiLCJTVEFSVCIsIkVORCIsInN0YXJ0ZWQiLCJ2YWx1ZSIsInBhcnNlZCIsInBhcmVudCIsImN1cnJlbnRUb29sIiwicHJvY2Vzc1Jlc3BvbnNlIiwicHJvbWlzZSIsInBhcnNlIiwiZXhjIiwibG9nIiwicmVzb2x2ZSIsImNsZWFuQ3VycmVudFRvb2wiLCIjY2xlYW5DdXJyZW50VG9vbCIsImhhbmRsZU1ldGFkYXRhIiwiI2hhbmRsZU1ldGFkYXRhIiwiY2h1bmsiLCJzcGxpdCIsImhhbmRsZVN0YXJ0Iiwic3BsaXR0ZWQiLCJzcGxpdHRlZDIiLCJwdXNoIiwiaGFuZGxlRW5kIiwicmVhZCIsIiNyZWFkIiwicmVhZGVyIiwiZ2V0UmVhZGVyIiwiZG9uZSIsIlRleHREZWNvZGVyIiwiZGVjb2RlIiwidHJpZ2dlckV2ZW50IiwiUGVuZGluZ1Byb21pc2UiLCJvayIsIkVycm9yIl0sInNvdXJjZXMiOlsiL2FwaS50cyIsIi9qY2FsbC50cyIsIi9zdHJlYW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDTztVQUFVLE1BQ1hFLEdBQUksU0FBUUgsS0FBQSxDQUFBSSxNQUFNO1lBQ3ZCLENBQUFDLEdBQUk7WUFDSixJQUFJQSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSSxJQUFJLEVBQUU7WUFDdkI7WUFDQSxDQUFBQyxPQUFRO1lBRVIsSUFBSUMsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFELE9BQVEsQ0FBQ0MsT0FBTztZQUM3QjtZQUNBLElBQUlDLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQUYsT0FBUSxDQUFDRSxjQUFjO1lBQ3BDO1lBRUEsSUFBSUMsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFILE9BQVEsQ0FBQ0csUUFBUTtZQUM5QjtZQUNBQyxZQUFZTCxHQUFHO2NBQ2QsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFBLEdBQUksR0FBR0EsR0FBRztjQUNmLElBQUksQ0FB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