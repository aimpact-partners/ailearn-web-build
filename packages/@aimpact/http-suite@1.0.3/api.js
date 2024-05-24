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
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/ailearn-app", "0.0.39"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/http-suite@1.0.3/api"
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
        hash: 3516067986,
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
        hash: 2319073315,
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
                if (method === 'post' || method === 'put' || method === 'DELETE') {
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
            }) => {
              return this.execute(url, 'DELETE', params, headers);
            };
            put = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'put', params, headers);
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