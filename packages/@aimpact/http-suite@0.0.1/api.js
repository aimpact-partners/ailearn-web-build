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
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/ailearn-app", "0.0.57"]]);
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
        hash: 3581339992,
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
              this.execute(url, 'DELETE', params, headers);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfamNhbGwiLCJBcGkiLCJFdmVudHMiLCJ1cmwiLCJmZXRjaGVyIiwiYWN0aW9ucyIsInN0cmVhbVJlc3BvbnNlIiwibWV0YWRhdGEiLCJjb25zdHJ1Y3RvciIsIkpDYWxsIiwib24iLCJ0cmlnZ2VyIiwiZ2V0UmVzcG9uc2UiLCIjZ2V0UmVzcG9uc2UiLCJhY3Rpb24iLCJtZXRob2QiLCJyb3V0ZSIsInNwZWNzIiwiZ2V0VVJMIiwiYmVhcmVyIiwiZ2V0IiwicG9zdCIsInB1dCIsImRlbGV0ZSIsInN0cmVhbSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfc3RyZWFtIiwiUmVhY3RpdmVNb2RlbCIsInN0cmVhbWVyIiwicmVzcG9uc2UiLCJTdHJlYW0iLCJnZXRIZWFkZXJzIiwibXVsdGlwYXJ0IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJwcm9jZXNzR2V0UGFyYW1zIiwiI3Byb2Nlc3NHZXRQYXJhbXMiLCJwYXJhbXMiLCJlbXB0eVBhcmFtcyIsImVudHJpZXMiLCJsZW5ndGgiLCJwYXJhbWV0ZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwiTmFOIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJwcm9jZXNzUG9zdFBhcmFtcyIsIiNwcm9jZXNzUG9zdFBhcmFtcyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZXhlY3V0ZSIsImhlYWRlcnNTcGVjcyIsIm1vZGUiLCJib2R5IiwicXVlcnlTdHJpbmciLCJ0b1N0cmluZyIsImZldGNoIiwianNvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJTRVBBUkFUT1JTIiwiTUVUQURBVEEiLCJTVEFSVCIsIkVORCIsInN0YXJ0ZWQiLCJ2YWx1ZSIsInBhcnNlZCIsInBhcmVudCIsImN1cnJlbnRUb29sIiwicHJvY2Vzc1Jlc3BvbnNlIiwicHJvbWlzZSIsInBhcnNlIiwiZXhjIiwibG9nIiwicmVzb2x2ZSIsImNsZWFuQ3VycmVudFRvb2wiLCIjY2xlYW5DdXJyZW50VG9vbCIsImhhbmRsZU1ldGFkYXRhIiwiI2hhbmRsZU1ldGFkYXRhIiwiY2h1bmsiLCJzcGxpdCIsImhhbmRsZVN0YXJ0Iiwic3BsaXR0ZWQiLCJzcGxpdHRlZDIiLCJwdXNoIiwiaGFuZGxlRW5kIiwicmVhZCIsIiNyZWFkIiwicmVhZGVyIiwiZ2V0UmVhZGVyIiwiZG9uZSIsIlRleHREZWNvZGVyIiwiZGVjb2RlIiwidHJpZ2dlckV2ZW50IiwiUGVuZGluZ1Byb21pc2UiLCJvayIsIkVycm9yIl0sInNvdXJjZXMiOlsiL2FwaS50cyIsIi9qY2FsbC50cyIsIi9zdHJlYW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDTztVQUFVLE1BQ1hFLEdBQUksU0FBUUgsS0FBQSxDQUFBSSxNQUFNO1lBQ3ZCLENBQUFDLEdBQUk7WUFDSixJQUFJQSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSSxJQUFJLEVBQUU7WUFDdkI7WUFDQSxDQUFBQyxPQUFRO1lBRVIsSUFBSUMsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFELE9BQVEsQ0FBQ0MsT0FBTztZQUM3QjtZQUNBLElBQUlDLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQUYsT0FBUSxDQUFDRSxjQUFjO1lBQ3BDO1lBRUEsSUFBSUMsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFILE9BQVEsQ0FBQ0csUUFBUTtZQUM5QjtZQUNBQyxZQUFZTCxHQUFHO2NBQ2QsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFBLEdBQUksR0FBR0EsR0FBRztjQUNmLElBQUksQ0FBQyxDQUFBQyxPQUFRLEdBQUcsSUFBSUosTUFBQSxDQUFBUyxLQUFLLEVBQUU7Y0FDM0IsSUFBSSxDQUFDLENBQUFMLE9BQVEsQ0FBQ00sRUFBRSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztjQUMxRSxJQUFJLENBQUMsQ0FBQVAsT0FBUSxDQUFDTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUFFLFdBQVksQ0FBQztZQUN2RDtZQUVBLENBQUFBLFdBQVksR0FBR0MsQ0FBQSxLQUFLO2NBQ25CLElBQUksQ0FBQ0YsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQ2hDLENBQUM7WUFDRCxNQUFNRyxNQUFNQSxDQUFDQyxNQUFNLEdBQUcsS0FBSyxFQUFFQyxLQUFhLEVBQUVDLEtBQUEsR0FBZ0IsRUFBRTtjQUM3RCxPQUFPLElBQUksQ0FBQyxDQUFBYixPQUFRLENBQUNXLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQ0csTUFBTSxDQUFDRixLQUFLLENBQUMsRUFBRUMsS0FBSyxDQUFDO1lBQ3hEO1lBRUFDLE1BQU1BLENBQUNGLEtBQWE7Y0FDbkIsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBYixHQUFJLEdBQUdhLEtBQUssRUFBRTtZQUM5QjtZQUVBRyxNQUFNQSxDQUFDQSxNQUFNO2NBQ1osSUFBSSxDQUFDLENBQUFmLE9BQVEsQ0FBQ2UsTUFBTSxDQUFDQSxNQUFNLENBQUM7Y0FDNUIsT0FBTyxJQUFJO1lBQ1o7WUFDQUMsR0FBR0EsQ0FBQ0osS0FBYSxFQUFFQyxLQUFjO2NBQ2hDLE9BQU8sSUFBSSxDQUFDSCxNQUFNLENBQUMsS0FBSyxFQUFFRSxLQUFLLEVBQUVDLEtBQUssQ0FBQztZQUN4QztZQUVBSSxJQUFJQSxDQUFDTCxLQUFhLEVBQUVDLEtBQWE7Y0FDaEMsT0FBTyxJQUFJLENBQUNILE1BQU0sQ0FBQyxNQUFNLEVBQUVFLEtBQUssRUFBRUMsS0FBSyxDQUFDO1lBQ3pDO1lBQ0FLLEdBQUdBLENBQUNOLEtBQWEsRUFBRUMsS0FBYTtjQUMvQixPQUFPLElBQUksQ0FBQ0gsTUFBTSxDQUFDLEtBQUssRUFBRUUsS0FBSyxFQUFFQyxLQUFLLENBQUM7WUFDeEM7WUFDQU0sTUFBTUEsQ0FBQ1AsS0FBYSxFQUFFQyxLQUFjO2NBQ25DLE9BQU8sSUFBSSxDQUFDSCxNQUFNLENBQUMsUUFBUSxFQUFFRSxLQUFLLEVBQUVDLEtBQUssQ0FBQztZQUMzQztZQUVBTyxNQUFNQSxDQUFDUixLQUFhLEVBQUVDLEtBQUEsR0FBZ0IsRUFBRTtjQUN2QyxPQUFPLElBQUksQ0FBQ0gsTUFBTSxDQUFDLFFBQVEsRUFBRUUsS0FBSyxFQUFFQyxLQUFLLENBQUM7WUFDM0M7O1VBQ0FRLE9BQUEsQ0FBQXhCLEdBQUEsR0FBQUEsR0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1REQsSUFBQXlCLE1BQUEsR0FBQTNCLE9BQUE7VUFDQSxJQUFBNEIsT0FBQSxHQUFBNUIsT0FBQTtVQU1PO1VBQVUsTUFDVlUsS0FBTSxTQUFRaUIsTUFBQSxDQUFBRSxhQUFvQjtZQUN4QyxJQUFJdkIsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUF3QixRQUFTLENBQUN4QixPQUFPO1lBQzlCO1lBQ0EsSUFBSUMsY0FBY0EsQ0FBQTtjQUNqQixPQUFPLElBQUksQ0FBQyxDQUFBdUIsUUFBUyxDQUFDQyxRQUFRO1lBQy9CO1lBRUEsQ0FBQVgsTUFBTztZQUNQQSxNQUFNQSxDQUFDQSxNQUEwQjtjQUNoQyxJQUFJQSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUNqQyxPQUFPLElBQUk7WUFDWjtZQUNBLENBQUFVLFFBQVM7WUFDVHJCLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQXFCLFFBQVMsR0FBRyxJQUFJRixPQUFBLENBQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDbEM7WUFFQUMsVUFBVSxHQUFHQSxDQUFDZixLQUFVLEVBQUVnQixTQUFTLEtBQWE7Y0FDL0MsSUFBSUMsT0FBTyxHQUFZLElBQUlDLE9BQU8sRUFBRTtjQUVwQyxNQUFNaEIsTUFBTSxHQUFHRixLQUFLLENBQUNFLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQUEsTUFBTztjQUUzQyxJQUFJQSxNQUFNLEVBQUU7Z0JBQ1hlLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDLGVBQWUsRUFBRSxVQUFVakIsTUFBTSxFQUFFLENBQUM7O2NBRXBELElBQUlGLEtBQUssQ0FBQ0UsTUFBTSxFQUFFLE9BQU9GLEtBQUssQ0FBQ0UsTUFBTTtjQUVyQyxNQUFNa0IsSUFBSSxHQUFhQyxNQUFNLENBQUNELElBQUksQ0FBQ3BCLEtBQUssQ0FBQztjQUN6Q29CLElBQUksQ0FBQ0UsT0FBTyxDQUFFQyxHQUFXLElBQVU7Z0JBQ2xDLElBQUlBLEdBQUcsS0FBSyxRQUFRLEVBQUU7Z0JBQ3RCTixPQUFPLENBQUNFLE1BQU0sQ0FBQ0ksR0FBRyxFQUFFdkIsS0FBSyxDQUFDdUIsR0FBRyxDQUFDLENBQUM7Y0FDaEMsQ0FBQyxDQUFDO2NBRUYsSUFBSVAsU0FBUyxFQUFFO2dCQUNkQyxPQUFPLENBQUNYLE1BQU0sQ0FBQyxjQUFjLENBQUM7O2NBRy9CLE9BQU9XLE9BQU87WUFDZixDQUFDO1lBRUQsQ0FBQU8sUUFBUztZQUNUQSxRQUFRLEdBQUl4QixLQUEwQixJQUFjO2NBQ25ELElBQUksQ0FBQyxDQUFBd0IsUUFBUyxHQUFHLElBQUlDLFFBQVEsRUFBRTtjQUMvQixNQUFNTCxJQUFJLEdBQWFDLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDcEIsS0FBSyxDQUFDO2NBQ3pDb0IsSUFBSSxDQUFDRSxPQUFPLENBQUVDLEdBQVcsSUFBVTtnQkFDbEMsSUFBSSxDQUFDLENBQUFDLFFBQVMsQ0FBQ0wsTUFBTSxDQUFDSSxHQUFHLEVBQUV2QixLQUFLLENBQUN1QixHQUFHLENBQUMsQ0FBQztjQUN2QyxDQUFDLENBQUM7Y0FDRixPQUFPLElBQUksQ0FBQyxDQUFBQyxRQUFTO1lBQ3RCLENBQUM7WUFFRCxDQUFBRSxnQkFBaUJDLENBQ2hCQyxNQUE4QjtjQUU5QixNQUFNQyxXQUFXLEdBQ2hCUixNQUFNLENBQUNTLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDLENBQUNHLE1BQU0sS0FBSyxDQUFDLElBQ25DSCxNQUFNLENBQUNyQyxXQUFXLEtBQUs4QixNQUFNO2NBQzlCLElBQUlRLFdBQVcsRUFBRSxPQUFPLEVBQUU7Y0FDMUIsTUFBTUcsVUFBVSxHQUFvQixJQUFJQyxlQUFlLEVBQUU7Y0FDekQsS0FBSyxNQUFNVixHQUFHLElBQUlLLE1BQU0sRUFBRTtnQkFDekIsSUFBSSxDQUFDLENBQUNNLEdBQUcsRUFBRUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDQyxRQUFRLENBQUNSLE1BQU0sQ0FBQ0wsR0FBRyxDQUFDLENBQUMsRUFBRTtrQkFDaERTLFVBQVUsQ0FBQ2IsTUFBTSxDQUFDSSxHQUFHLEVBQUVLLE1BQU0sQ0FBQ0wsR0FBRyxDQUFDLENBQUM7OztjQUdyQyxPQUFPUyxVQUFVO1lBQ2xCO1lBRUEsQ0FBQUssaUJBQWtCLEdBQUdDLENBQUNWLE1BQU0sRUFBRVosU0FBUyxLQUF1QjtjQUM3RCxNQUFNYSxXQUFXLEdBQ2hCUixNQUFNLENBQUNTLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDLENBQUNHLE1BQU0sS0FBSyxDQUFDLElBQ25DSCxNQUFNLENBQUNyQyxXQUFXLEtBQUs4QixNQUFNO2NBQzlCLElBQUlRLFdBQVcsRUFBRTtjQUVqQixJQUFJYixTQUFTLEVBQUU7Z0JBQ2QsTUFBTXVCLElBQUksR0FBRyxJQUFJLENBQUNmLFFBQVEsQ0FBQ0ksTUFBTSxDQUFDO2dCQUNsQyxPQUFPVyxJQUFJOztjQUdaLE9BQU9DLElBQUksQ0FBQ0MsU0FBUyxDQUFDYixNQUFNLENBQUM7WUFDOUIsQ0FBQztZQUNEYyxPQUFPLEdBQUcsTUFBQUEsQ0FDVHhELEdBQVcsRUFDWFksTUFBQSxHQUFpQixLQUFLLEVBQ3RCOEIsTUFBQSxHQUE4QixFQUFFLEVBQ2hDZSxZQUFxQixFQUNyQnBDLE1BQWdCLEVBQ2hCZ0MsSUFBZSxLQUNFO2NBQ2pCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDSSxZQUFZLEVBQUU7a0JBQ2xCQSxZQUFZLEdBQUcsRUFBRTs7Z0JBRWxCLE1BQU0zQixTQUFTLEdBQUdZLE1BQU0sQ0FBQ1osU0FBUztnQkFDbEMsSUFBSUMsT0FBTyxHQUFHLElBQUksQ0FBQ0YsVUFBVSxDQUM1QjtrQkFBRSxHQUFHNEIsWUFBWTtrQkFBRXpDLE1BQU0sRUFBRTBCLE1BQU0sQ0FBQzFCO2dCQUFNLENBQUUsRUFDMUNjLFNBQVMsQ0FDVDtnQkFDRCxPQUFPWSxNQUFNLENBQUNaLFNBQVM7Z0JBQ3ZCLE9BQU9ZLE1BQU0sQ0FBQzFCLE1BQU07Z0JBRXBCLE1BQU1GLEtBQUssR0FBZ0I7a0JBQUVGLE1BQU07a0JBQUVtQixPQUFPO2tCQUFFMkIsSUFBSSxFQUFFO2dCQUFNLENBQUU7Z0JBRTVELElBQUloQixNQUFNLENBQUMxQixNQUFNLEVBQUUsT0FBTzBCLE1BQU0sQ0FBQzFCLE1BQU07Z0JBRXZDLElBQUlKLE1BQU0sS0FBSyxNQUFNLElBQUlBLE1BQU0sS0FBSyxLQUFLLElBQUlBLE1BQU0sS0FBSyxRQUFRLEVBQUU7a0JBQ2pFRSxLQUFLLENBQUM2QyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUFSLGlCQUFrQixDQUFDVCxNQUFNLEVBQUVaLFNBQVMsQ0FBQztpQkFDdkQsTUFBTSxJQUFJbEIsTUFBTSxLQUFLLEtBQUssRUFBRTtrQkFDNUIsTUFBTWdELFdBQVcsR0FDaEIsSUFBSSxDQUFDLENBQUFwQixnQkFBaUIsQ0FBQ0UsTUFBTSxDQUFDLENBQUNtQixRQUFRLEVBQUU7a0JBQzFDLElBQUlELFdBQVcsRUFBRTVELEdBQUcsSUFBSSxJQUFJNEQsV0FBVyxFQUFFOztnQkFHMUMsSUFBSXZDLE1BQU0sRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBSyxRQUFTLENBQUM4QixPQUFPLENBQUN4RCxHQUFHLEVBQUVjLEtBQUssQ0FBQztnQkFFckQsTUFBTWEsUUFBUSxHQUFhLE1BQU1tQyxLQUFLLENBQUM5RCxHQUFHLEVBQUVjLEtBQUssQ0FBQztnQkFDbEQsT0FBT2EsUUFBUSxDQUFDb0MsSUFBSSxFQUFFO2VBQ3RCLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxhQUFhLEVBQUVGLENBQUMsQ0FBQzs7WUFFakMsQ0FBQztZQUVEM0MsTUFBTSxHQUFHQSxDQUNSckIsR0FBVyxFQUNYMEMsTUFBYyxFQUNkWCxPQUFBLEdBQW1CO2NBQ2xCLGNBQWMsRUFBRTthQUNoQixLQUNHLElBQUksQ0FBQ3lCLE9BQU8sQ0FBQ3hELEdBQUcsRUFBRSxNQUFNLEVBQUUwQyxNQUFNLEVBQUVYLE9BQU8sRUFBRSxJQUFJLENBQUM7WUFFckRkLEdBQUcsR0FBR0EsQ0FBQ2pCLEdBQVcsRUFBRTBDLE1BQWMsRUFBRVgsT0FBZSxLQUFJO2NBQ3RELE9BQU8sSUFBSSxDQUFDeUIsT0FBTyxDQUFDeEQsR0FBRyxFQUFFLEtBQUssRUFBRTBDLE1BQU0sQ0FBQztZQUN4QyxDQUFDO1lBQ0R4QixJQUFJLEdBQUdBLENBQ05sQixHQUFXLEVBQ1gwQyxNQUFjLEVBQ2RYLE9BQUEsR0FBbUI7Y0FDbEIsY0FBYyxFQUFFO2FBQ2hCLEtBQ0csSUFBSSxDQUFDeUIsT0FBTyxDQUFDeEQsR0FBRyxFQUFFLE1BQU0sRUFBRTBDLE1BQU0sRUFBRVgsT0FBTyxDQUFDO1lBQy9DWCxNQUFNLEdBQUdBLENBQ1JwQixHQUFXLEVBQ1gwQyxNQUFjLEVBQ2RYLE9BQUEsR0FBbUI7Y0FDbEIsY0FBYyxFQUFFO2FBQ2hCLEtBQ0U7Y0FDSCxJQUFJLENBQUN5QixPQUFPLENBQUN4RCxHQUFHLEVBQUUsUUFBUSxFQUFFMEMsTUFBTSxFQUFFWCxPQUFPLENBQUM7WUFDN0MsQ0FBQztZQUNEWixHQUFHLEdBQUdBLENBQ0xuQixHQUFXLEVBQ1gwQyxNQUFjLEVBQ2RYLE9BQUEsR0FBbUI7Y0FDbEIsY0FBYyxFQUFFO2FBQ2hCLEtBQ0csSUFBSSxDQUFDeUIsT0FBTyxDQUFDeEQsR0FBRyxFQUFFLEtBQUssRUFBRTBDLE1BQU0sRUFBRVgsT0FBTyxDQUFDOztVQUM5Q1QsT0FBQSxDQUFBaEIsS0FBQSxHQUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BLRCxJQUFBWCxLQUFBLEdBQUFDLE9BQUE7VUFLTSxNQUFPZ0MsTUFBTTtZQUNsQixDQUFBdUMsVUFBVyxHQUFHO2NBQ2JDLFFBQVEsRUFBRSxHQUFHO2NBQ2JDLEtBQUssRUFBRSxJQUFJO2NBQ1hDLEdBQUcsRUFBRTthQUNMO1lBRUQsQ0FBQWxFLFFBQVMsR0FBZTtjQUN2Qm1FLE9BQU8sRUFBRSxLQUFLO2NBQ2RDLEtBQUssRUFBRSxFQUFFO2NBQ1RDLE1BQU0sRUFBRTtnQkFBRUQsS0FBSyxFQUFFLEtBQUs7Y0FBQzthQUN2QjtZQUNELElBQUlwRSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUyxDQUFDcUUsTUFBTTtZQUM3QjtZQUNBLENBQUF2RSxPQUFRLEdBQWEsRUFBRTtZQUN2QixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUNBLENBQUF5QixRQUFTLEdBQVcsRUFBRTtZQUN0QixJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUErQyxNQUFPO1lBQ1AsQ0FBQUMsV0FBWSxHQUFHO2NBQUVKLE9BQU8sRUFBRSxLQUFLO2NBQUVDLEtBQUssRUFBRSxFQUFFO2NBQUVDLE1BQU0sRUFBRTtnQkFBRUQsS0FBSyxFQUFFLEtBQUs7Y0FBQztZQUFFLENBQUU7WUFDdkVuRSxZQUFZcUUsTUFBTTtjQUNqQixJQUFJLENBQUMsQ0FBQUEsTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBRUEsQ0FBQUUsZUFBZ0IsR0FBR0MsT0FBTyxJQUFHO2NBQzVCLE1BQU16RSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFBLFFBQVM7Y0FFL0IsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQUEsUUFBUyxDQUFDcUUsTUFBTSxDQUFDRCxLQUFLLEdBQUdsQixJQUFJLENBQUN3QixLQUFLLENBQUMxRSxRQUFRLENBQUNvRSxLQUFLLENBQUM7ZUFDeEQsQ0FBQyxPQUFPTyxHQUFHLEVBQUU7Z0JBQ2JkLE9BQU8sQ0FBQ2UsR0FBRyxDQUFDNUUsUUFBUSxDQUFDO2dCQUNyQjZELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDYSxHQUFHLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxDQUFBM0UsUUFBUyxDQUFDcUUsTUFBTSxDQUFDUCxLQUFLLEdBQUcsd0JBQXdCOztjQUd2RFcsT0FBTyxDQUFDSSxPQUFPLENBQUM7Z0JBQ2ZULEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTdDLFFBQVM7Z0JBQ3JCLEdBQUd2QixRQUFRLENBQUNxRSxNQUFNLENBQUNEO2VBQ25CLENBQUM7Y0FDRixJQUFJLENBQUMsQ0FBQTdDLFFBQVMsR0FBR3NCLFNBQVM7WUFDM0IsQ0FBQztZQUVELENBQUFpQyxnQkFBaUJDLENBQUE7Y0FDaEIsSUFBSSxDQUFDLENBQUFSLFdBQVksR0FBRztnQkFBRUosT0FBTyxFQUFFLEtBQUs7Z0JBQUVDLEtBQUssRUFBRSxFQUFFO2dCQUFFQyxNQUFNLEVBQUU7a0JBQUVELEtBQUssRUFBRSxLQUFLO2dCQUFDO2NBQUUsQ0FBRTtZQUM3RTtZQUVBLE1BQU0sQ0FBQVksY0FBZUMsQ0FBQ0MsS0FBYSxFQUFFM0QsUUFBZ0I7Y0FDcEQsSUFBSSxDQUFDLENBQUF2QixRQUFTLENBQUNtRSxPQUFPLEdBQUcsSUFBSTtjQUM3QixNQUFNZ0IsS0FBSyxHQUFHRCxLQUFLLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQXBCLFVBQVcsQ0FBQ0MsUUFBUSxDQUFDO2NBQ3BELElBQUksQ0FBQyxDQUFBaEUsUUFBUyxDQUFDb0UsS0FBSyxJQUFJZSxLQUFLLENBQUMsQ0FBQyxDQUFDO2NBQ2hDLE9BQU9BLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBSTVELFFBQVEsSUFBSTRELEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBSTVELFFBQVE7WUFDcEQ7WUFFQTZELFdBQVdBLENBQUNGLEtBQWEsRUFBRTNELFFBQWdCO2NBQzFDLE1BQU04RCxRQUFRLEdBQUdILEtBQUssQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBcEIsVUFBVyxDQUFDRSxLQUFLLENBQUM7Y0FDcEQsSUFBSSxDQUFDLENBQUFNLFdBQVksQ0FBQ0osT0FBTyxHQUFHLElBQUk7Y0FDaENlLEtBQUssR0FBRyxFQUFFO2NBQ1YsSUFBSUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDdkMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBaUIsVUFBVyxDQUFDRyxHQUFHLENBQUMsRUFBRTtnQkFDL0MsTUFBTW9CLFNBQVMsR0FBR0QsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUFwQixVQUFXLENBQUNHLEdBQUcsQ0FBQztnQkFDekQsSUFBSSxDQUFDLENBQUFLLFdBQVksQ0FBQ0gsS0FBSyxHQUFHa0IsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLENBQUF4RixPQUFRLENBQUN5RixJQUFJLENBQUNELFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMvRCxRQUFRLElBQUksSUFBSSxDQUFDLENBQUF3QyxVQUFXLENBQUNFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQU0sV0FBWSxDQUFDSCxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFMLFVBQVcsQ0FBQ0csR0FBRztlQUNuRixNQUFNO2dCQUNOM0MsUUFBUSxJQUFJOEQsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLENBQUFkLFdBQVksQ0FBQ0gsS0FBSyxJQUFJaUIsUUFBUSxDQUFDLENBQUMsQ0FBQzs7Y0FFdkMsT0FBTzlELFFBQVE7WUFDaEI7WUFFQWlFLFNBQVNBLENBQUNOLEtBQWEsRUFBRTNELFFBQWdCO2NBQ3hDLE1BQU04RCxRQUFRLEdBQUdILEtBQUssQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBcEIsVUFBVyxDQUFDRyxHQUFHLENBQUM7Y0FDbEQsSUFBSSxDQUFDLENBQUFLLFdBQVksQ0FBQ0gsS0FBSyxJQUFJaUIsUUFBUSxDQUFDLENBQUMsQ0FBQztjQUN0QyxJQUFJLENBQUMsQ0FBQWQsV0FBWSxDQUFDSixPQUFPLEdBQUcsS0FBSztjQUNqQyxJQUFJLENBQUMsQ0FBQXJFLE9BQVEsQ0FBQ3lGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWhCLFdBQVksQ0FBQ0gsS0FBSyxDQUFDO2NBQzNDLElBQUksQ0FBQyxDQUFBN0MsUUFBUyxJQUFJLElBQUksQ0FBQyxDQUFBd0MsVUFBVyxDQUFDRSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFNLFdBQVksQ0FBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBTCxVQUFXLENBQUNHLEdBQUc7Y0FDekYsT0FBT21CLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkI7WUFFQSxNQUFNLENBQUFJLElBQUtDLENBQUNuRSxRQUFRLEVBQUVrRCxPQUFPO2NBQzVCO2NBQ0EsTUFBTWtCLE1BQU0sR0FBR3BFLFFBQVEsQ0FBQ2dDLElBQUksRUFBRXFDLFNBQVMsRUFBRTtjQUN6QyxPQUFPLElBQUksRUFBRTtnQkFDWixNQUFNO2tCQUFFQyxJQUFJO2tCQUFFekI7Z0JBQUssQ0FBRSxHQUFHLE1BQU11QixNQUFNLENBQUNGLElBQUksRUFBRTtnQkFDM0MsSUFBSVAsS0FBSyxHQUFHLElBQUlZLFdBQVcsRUFBRSxDQUFDQyxNQUFNLENBQUMzQixLQUFLLENBQUM7Z0JBRTNDLElBQUl5QixJQUFJLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQXJCLGVBQWdCLENBQUNDLE9BQU8sQ0FBQztnQkFFL0MsSUFBSVMsS0FBSyxDQUFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBaUIsVUFBVyxDQUFDQyxRQUFRLENBQUMsRUFBRTtrQkFDOUMsSUFBSSxDQUFDLENBQUFnQixjQUFlLENBQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTNELFFBQVMsQ0FBQztrQkFDM0M7O2dCQUdELElBQUksSUFBSSxDQUFDLENBQUF2QixRQUFTLENBQUNtRSxPQUFPLEVBQUU7a0JBQzNCLElBQUksQ0FBQyxDQUFBbkUsUUFBUyxDQUFDb0UsS0FBSyxJQUFJYyxLQUFLO2tCQUM3QixJQUFJLENBQUMsQ0FBQVosTUFBTyxDQUFDbEUsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2tCQUN2Qzs7Z0JBR0QsSUFBSThFLEtBQUssQ0FBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQWlCLFVBQVcsQ0FBQ0UsS0FBSyxDQUFDLEVBQUU7a0JBQzNDLElBQUksQ0FBQ21CLFdBQVcsQ0FBQ0YsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBM0QsUUFBUyxDQUFDO2lCQUN2QyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUFnRCxXQUFZLENBQUNKLE9BQU8sSUFBSWUsS0FBSyxDQUFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBaUIsVUFBVyxDQUFDRyxHQUFHLENBQUMsRUFBRTtrQkFDN0U7a0JBQ0EsSUFBSSxDQUFDc0IsU0FBUyxDQUFDTixLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUEzRCxRQUFTLENBQUM7a0JBQ3JDLElBQUksQ0FBQyxDQUFBdUQsZ0JBQWlCLEVBQUU7O2dCQUd6QixJQUFJLENBQUMsQ0FBQXZELFFBQVMsSUFBSTJELEtBQUs7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBWixNQUFPLENBQUMwQixZQUFZLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxDQUFBMUIsTUFBTyxDQUFDMEIsWUFBWSxDQUFDLGlCQUFpQixDQUFDOztZQUU5QztZQUVBLE1BQU01QyxPQUFPQSxDQUFDeEQsR0FBRyxFQUFFYyxLQUFLO2NBQ3ZCLElBQUk7Z0JBQ0gsTUFBTStELE9BQU8sR0FBRyxJQUFJbEYsS0FBQSxDQUFBMEcsY0FBYyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsQ0FBQTFFLFFBQVMsR0FBRyxFQUFFO2dCQUNuQixNQUFNQSxRQUFRLEdBQWEsTUFBTW1DLEtBQUssQ0FBQzlELEdBQUcsRUFBRWMsS0FBSyxDQUFDO2dCQUVsRCxJQUFJLENBQUNhLFFBQVEsQ0FBQzJFLEVBQUUsRUFBRTtrQkFDakIsTUFBTSxJQUFJQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7O2dCQUduQyxJQUFJLENBQUMsQ0FBQVYsSUFBSyxDQUFDbEUsUUFBUSxFQUFFa0QsT0FBTyxDQUFDO2dCQUM3QixPQUFPQSxPQUFPO2VBQ2QsQ0FBQyxPQUFPYixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCOztVQUNBMUMsT0FBQSxDQUFBTSxNQUFBLEdBQUFBLE1BQUEiLCJpZ25vcmVMaXN0IjpbXX0=