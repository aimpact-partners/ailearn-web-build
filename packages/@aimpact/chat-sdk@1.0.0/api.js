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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
        hash: 2275927224,
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
              let tool = '';
              while (true) {
                const {
                  done,
                  value
                } = await reader.read();
                if (done) {
                  return this.#processStream(promise, metadata);
                }
                let chunk = new TextDecoder().decode(value);
                const processStartTool = (tool, chunk) => {
                  if (!chunk.includes(this.#SEPARATORS.START)) return [tool, chunk];
                  const splitted = chunk.split(this.#SEPARATORS.START);
                  if (splitted.length > 0) {
                    tool = splitted[1];
                    chunk = splitted[0] ?? '';
                  }
                  return [tool, chunk];
                };
                if (chunk.includes(this.#SEPARATORS.METADATA)) {
                  metadata.started = true;
                  const split = chunk.split(this.#SEPARATORS.METADATA);
                  metadata.value += split[1];
                  if (split[0]) this.#streamResponse += split[0];
                }
                if (metadata.started) {
                  metadata.value += chunk;
                  this.triggerEvent('stream.response');
                  return;
                }
                if (chunk.includes(this.#SEPARATORS.END)) {
                  [tool, chunk] = processStartTool(tool, chunk);
                  const splitted = tool.split(this.#SEPARATORS.END);
                  tool = splitted[0];
                  chunk = splitted[1] ?? '';
                  this.#actions.push(tool);
                  this.triggerEvent('action.received');
                  this.#streamResponse += this.#SEPARATORS.START + tool + this.#SEPARATORS.END;
                  tool = '';
                }
                if (chunk.includes(this.#SEPARATORS.START)) {
                  [tool, chunk] = processStartTool(tool, chunk);
                } else {
                  this.#streamResponse += chunk;
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfamNhbGwiLCJBcGkiLCJFdmVudHMiLCJ1cmwiLCJmZXRjaGVyIiwiYWN0aW9ucyIsInN0cmVhbVJlc3BvbnNlIiwibWV0YWRhdGEiLCJjb25zdHJ1Y3RvciIsIkpDYWxsIiwib24iLCJ0cmlnZ2VyIiwiZ2V0UmVzcG9uc2UiLCIjZ2V0UmVzcG9uc2UiLCJhY3Rpb24iLCJtZXRob2QiLCJyb3V0ZSIsInNwZWNzIiwiZ2V0VVJMIiwiYmVhcmVyIiwiZ2V0IiwicG9zdCIsInB1dCIsImRlbGV0ZSIsInN0cmVhbSIsImV4cG9ydHMiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiU0VQQVJBVE9SUyIsIk1FVEFEQVRBIiwiU1RBUlQiLCJFTkQiLCJzdGFydGVkIiwidmFsdWUiLCJwYXJzZWQiLCJyZXNwb25zZSIsImdldEhlYWRlcnMiLCJtdWx0aXBhcnQiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwiY29uc29sZSIsImxvZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJwcm9jZXNzR2V0UGFyYW1zIiwiI3Byb2Nlc3NHZXRQYXJhbXMiLCJwYXJhbXMiLCJlbXB0eVBhcmFtcyIsImVudHJpZXMiLCJsZW5ndGgiLCJwYXJhbWV0ZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwiTmFOIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJwcm9jZXNzUG9zdFBhcmFtcyIsIiNwcm9jZXNzUG9zdFBhcmFtcyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZXhlY3V0ZSIsImhlYWRlcnNTcGVjcyIsIm1vZGUiLCJib2R5IiwicXVlcnlTdHJpbmciLCJ0b1N0cmluZyIsImZldGNoIiwianNvbiIsImUiLCJlcnJvciIsInByb2Nlc3NTdHJlYW0iLCIjcHJvY2Vzc1N0cmVhbSIsInByb21pc2UiLCJwYXJzZSIsImV4YyIsInJlc29sdmUiLCIjc3RyZWFtIiwiUGVuZGluZ1Byb21pc2UiLCJvayIsIkVycm9yIiwicmVhZGVyIiwiZ2V0UmVhZGVyIiwidG9vbCIsImRvbmUiLCJyZWFkIiwiY2h1bmsiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsInByb2Nlc3NTdGFydFRvb2wiLCJzcGxpdHRlZCIsInNwbGl0IiwidHJpZ2dlckV2ZW50IiwicHVzaCJdLCJzb3VyY2VzIjpbIi9hcGkudHMiLCIvamNhbGwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ087VUFBVSxNQUNYRSxHQUFJLFNBQVFILEtBQUEsQ0FBQUksTUFBTTtZQUN2QixDQUFBQyxHQUFJO1lBQ0osSUFBSUEsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUksSUFBSSxFQUFFO1lBQ3ZCO1lBQ0EsQ0FBQUMsT0FBUTtZQUVSLElBQUlDLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBRCxPQUFRLENBQUNDLE9BQU87WUFDN0I7WUFDQSxJQUFJQyxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFGLE9BQVEsQ0FBQ0UsY0FBYztZQUNwQztZQUVBLElBQUlDLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBSCxPQUFRLENBQUNHLFFBQVE7WUFDOUI7WUFDQUMsWUFBWUwsR0FBRztjQUNkLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBQSxHQUFJLEdBQUdBLEdBQUc7Y0FDZixJQUFJLENBQUMsQ0FBQUMsT0FBUSxHQUFHLElBQUlKLE1BQUEsQ0FBQVMsS0FBSyxFQUFFO2NBQzNCLElBQUksQ0FBQyxDQUFBTCxPQUFRLENBQUNNLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Y0FDMUUsSUFBSSxDQUFDLENBQUFQLE9BQVEsQ0FBQ00sRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFBRSxXQUFZLENBQUM7WUFDdkQ7WUFFQSxDQUFBQSxXQUFZLEdBQUdDLENBQUEsS0FBSztjQUNuQixJQUFJLENBQUNGLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsTUFBTUcsTUFBTUEsQ0FBQ0MsTUFBTSxHQUFHLEtBQUssRUFBRUMsS0FBYSxFQUFFQyxLQUFBLEdBQWdCLEVBQUU7Y0FDN0QsT0FBTyxJQUFJLENBQUMsQ0FBQWIsT0FBUSxDQUFDVyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDLEVBQUVDLEtBQUssQ0FBQztZQUN4RDtZQUVBQyxNQUFNQSxDQUFDRixLQUFhO2NBQ25CLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQWIsR0FBSSxHQUFHYSxLQUFLLEVBQUU7WUFDOUI7WUFFQUcsTUFBTUEsQ0FBQ0EsTUFBTTtjQUNaLElBQUksQ0FBQyxDQUFBZixPQUFRLENBQUNlLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDO2NBQzVCLE9BQU8sSUFBSTtZQUNaO1lBQ0FDLEdBQUdBLENBQUNKLEtBQWEsRUFBRUMsS0FBYztjQUNoQyxPQUFPLElBQUksQ0FBQ0gsTUFBTSxDQUFDLEtBQUssRUFBRUUsS0FBSyxFQUFFQyxLQUFLLENBQUM7WUFDeEM7WUFFQUksSUFBSUEsQ0FBQ0wsS0FBYSxFQUFFQyxLQUFhO2NBQ2hDLE9BQU8sSUFBSSxDQUFDSCxNQUFNLENBQUMsTUFBTSxFQUFFRSxLQUFLLEVBQUVDLEtBQUssQ0FBQztZQUN6QztZQUNBSyxHQUFHQSxDQUFDTixLQUFhLEVBQUVDLEtBQWE7Y0FDL0IsT0FBTyxJQUFJLENBQUNILE1BQU0sQ0FBQyxLQUFLLEVBQUVFLEtBQUssRUFBRUMsS0FBSyxDQUFDO1lBQ3hDO1lBQ0FNLE1BQU1BLENBQUNQLEtBQWEsRUFBRUMsS0FBYTtjQUNsQyxPQUFPLElBQUksQ0FBQ0gsTUFBTSxDQUFDLFFBQVEsRUFBRUUsS0FBSyxFQUFFQyxLQUFLLENBQUM7WUFDM0M7WUFFQU8sTUFBTUEsQ0FBQ1IsS0FBYSxFQUFFQyxLQUFBLEdBQWdCLEVBQUU7Y0FDdkMsT0FBTyxJQUFJLENBQUNILE1BQU0sQ0FBQyxRQUFRLEVBQUVFLEtBQUssRUFBRUMsS0FBSyxDQUFDO1lBQzNDOztVQUNBUSxPQUFBLENBQUF4QixHQUFBLEdBQUFBLEdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0RELElBQUF5QixNQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQUQsS0FBQSxHQUFBQyxPQUFBO1VBU087VUFBVSxNQUNYVSxLQUFNLFNBQVFpQixNQUFBLENBQUFDLGFBQW9CO1lBQ3ZDLENBQUFyQixjQUFlLEdBQVcsRUFBRTtZQUM1QixDQUFBc0IsVUFBVyxHQUFHO2NBQ2JDLFFBQVEsRUFBRSxHQUFHO2NBQ2JDLEtBQUssRUFBRSxJQUFJO2NBQ1hDLEdBQUcsRUFBRTthQUNMO1lBRUQsQ0FBQTFCLE9BQVEsR0FBRyxFQUFFO1lBQ2IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFDQSxJQUFJQyxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGNBQWU7WUFDNUI7WUFFQSxDQUFBQyxRQUFTLEdBQStGO2NBQ3ZHeUIsT0FBTyxFQUFFLEtBQUs7Y0FDZEMsS0FBSyxFQUFFLEVBQUU7Y0FDVEMsTUFBTSxFQUFFO2dCQUFFRCxLQUFLLEVBQUUsS0FBSztjQUFDO2FBQ3ZCO1lBQ0QsSUFBSTFCLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUMyQixNQUFNO1lBQzdCO1lBRUEsQ0FBQUMsUUFBUztZQUNULENBQUFoQixNQUFPO1lBQ1BBLE1BQU1BLENBQUNBLE1BQTBCO2NBQ2hDLElBQUlBLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQUEsTUFBTyxHQUFHQSxNQUFNO2NBQ2pDLE9BQU8sSUFBSTtZQUNaO1lBRUFpQixVQUFVLEdBQUdBLENBQUNuQixLQUFVLEVBQUVvQixTQUFTLEtBQWE7Y0FDL0MsSUFBSUMsT0FBTyxHQUFZLElBQUlDLE9BQU8sRUFBRTtjQUVwQyxNQUFNcEIsTUFBTSxHQUFHRixLQUFLLENBQUNFLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQUEsTUFBTztjQUUzQyxJQUFJQSxNQUFNLEVBQUU7Z0JBQ1htQixPQUFPLENBQUNFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsVUFBVXJCLE1BQU0sRUFBRSxDQUFDOztjQUVwRCxJQUFJRixLQUFLLENBQUNFLE1BQU0sRUFBRSxPQUFPRixLQUFLLENBQUNFLE1BQU07Y0FFckMsTUFBTXNCLElBQUksR0FBYUMsTUFBTSxDQUFDRCxJQUFJLENBQUN4QixLQUFLLENBQUM7Y0FDekN3QixJQUFJLENBQUNFLE9BQU8sQ0FBRUMsR0FBVyxJQUFVO2dCQUNsQyxJQUFJQSxHQUFHLEtBQUssUUFBUSxFQUFFO2dCQUV0Qk4sT0FBTyxDQUFDRSxNQUFNLENBQUNJLEdBQUcsRUFBRTNCLEtBQUssQ0FBQzJCLEdBQUcsQ0FBQyxDQUFDO2NBQ2hDLENBQUMsQ0FBQztjQUVGLElBQUlQLFNBQVMsRUFBRTtnQkFDZFEsT0FBTyxDQUFDQyxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQztnQkFDdkJSLE9BQU8sQ0FBQ2YsTUFBTSxDQUFDLGNBQWMsQ0FBQzs7Y0FHL0IsT0FBT2UsT0FBTztZQUNmLENBQUM7WUFFRCxDQUFBUyxRQUFTO1lBQ1RBLFFBQVEsR0FBSTlCLEtBQTBCLElBQWM7Y0FDbkQsSUFBSSxDQUFDLENBQUE4QixRQUFTLEdBQUcsSUFBSUMsUUFBUSxFQUFFO2NBQy9CLE1BQU1QLElBQUksR0FBYUMsTUFBTSxDQUFDRCxJQUFJLENBQUN4QixLQUFLLENBQUM7Y0FDekN3QixJQUFJLENBQUNFLE9BQU8sQ0FBRUMsR0FBVyxJQUFVO2dCQUNsQyxJQUFJLENBQUMsQ0FBQUcsUUFBUyxDQUFDUCxNQUFNLENBQUNJLEdBQUcsRUFBRTNCLEtBQUssQ0FBQzJCLEdBQUcsQ0FBQyxDQUFDO2NBQ3ZDLENBQUMsQ0FBQztjQUNGLE9BQU8sSUFBSSxDQUFDLENBQUFHLFFBQVM7WUFDdEIsQ0FBQztZQUVELENBQUFFLGdCQUFpQkMsQ0FBQ0MsTUFBOEI7Y0FDL0MsTUFBTUMsV0FBVyxHQUFZVixNQUFNLENBQUNXLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDLENBQUNHLE1BQU0sS0FBSyxDQUFDLElBQUlILE1BQU0sQ0FBQzNDLFdBQVcsS0FBS2tDLE1BQU07Y0FDakcsSUFBSVUsV0FBVyxFQUFFLE9BQU8sRUFBRTtjQUMxQixNQUFNRyxVQUFVLEdBQW9CLElBQUlDLGVBQWUsRUFBRTtjQUN6RCxLQUFLLE1BQU1aLEdBQUcsSUFBSU8sTUFBTSxFQUFFO2dCQUN6QixJQUFJLENBQUMsQ0FBQ00sR0FBRyxFQUFFQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUNDLFFBQVEsQ0FBQ1IsTUFBTSxDQUFDUCxHQUFHLENBQUMsQ0FBQyxFQUFFO2tCQUNoRFcsVUFBVSxDQUFDZixNQUFNLENBQUNJLEdBQUcsRUFBRU8sTUFBTSxDQUFDUCxHQUFHLENBQUMsQ0FBQzs7O2NBR3JDLE9BQU9XLFVBQVU7WUFDbEI7WUFFQSxDQUFBSyxpQkFBa0IsR0FBR0MsQ0FBQ1YsTUFBTSxFQUFFZCxTQUFTLEtBQXVCO2NBQzdELE1BQU1lLFdBQVcsR0FBWVYsTUFBTSxDQUFDVyxPQUFPLENBQUNGLE1BQU0sQ0FBQyxDQUFDRyxNQUFNLEtBQUssQ0FBQyxJQUFJSCxNQUFNLENBQUMzQyxXQUFXLEtBQUtrQyxNQUFNO2NBQ2pHLElBQUlVLFdBQVcsRUFBRTtjQUVqQixJQUFJZixTQUFTLEVBQUU7Z0JBQ2QsTUFBTXlCLElBQUksR0FBRyxJQUFJLENBQUNmLFFBQVEsQ0FBQ0ksTUFBTSxDQUFDO2dCQUNsQyxPQUFPVyxJQUFJOztjQUdaLE9BQU9DLElBQUksQ0FBQ0MsU0FBUyxDQUFDYixNQUFNLENBQUM7WUFDOUIsQ0FBQztZQUNEYyxPQUFPLEdBQUcsTUFBQUEsQ0FDVDlELEdBQVcsRUFDWFksTUFBQSxHQUFpQixLQUFLLEVBQ3RCb0MsTUFBQSxHQUE4QixFQUFFLEVBQ2hDZSxZQUFxQixFQUNyQjFDLE1BQWdCLEVBQ2hCc0MsSUFBZSxLQUNFO2NBQ2pCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDSSxZQUFZLEVBQUU7a0JBQ2xCQSxZQUFZLEdBQUcsRUFBRTs7Z0JBRWxCLE1BQU03QixTQUFTLEdBQUdjLE1BQU0sQ0FBQ2QsU0FBUztnQkFDbEMsSUFBSUMsT0FBTyxHQUFHLElBQUksQ0FBQ0YsVUFBVSxDQUFDO2tCQUFFLEdBQUc4QixZQUFZO2tCQUFFL0MsTUFBTSxFQUFFZ0MsTUFBTSxDQUFDaEM7Z0JBQU0sQ0FBRSxFQUFFa0IsU0FBUyxDQUFDO2dCQUNwRixPQUFPYyxNQUFNLENBQUNkLFNBQVM7Z0JBQ3ZCLE9BQU9jLE1BQU0sQ0FBQ2hDLE1BQU07Z0JBRXBCLE1BQU1GLEtBQUssR0FBZ0I7a0JBQUVGLE1BQU07a0JBQUV1QixPQUFPO2tCQUFFNkIsSUFBSSxFQUFFO2dCQUFNLENBQUU7Z0JBRTVELElBQUloQixNQUFNLENBQUNoQyxNQUFNLEVBQUUsT0FBT2dDLE1BQU0sQ0FBQ2hDLE1BQU07Z0JBRXZDLElBQUlKLE1BQU0sS0FBSyxNQUFNLEVBQUU7a0JBQ3RCRSxLQUFLLENBQUNtRCxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUFSLGlCQUFrQixDQUFDVCxNQUFNLEVBQUVkLFNBQVMsQ0FBQztpQkFDdkQsTUFBTSxJQUFJdEIsTUFBTSxLQUFLLEtBQUssRUFBRTtrQkFDNUIsTUFBTXNELFdBQVcsR0FBVyxJQUFJLENBQUMsQ0FBQXBCLGdCQUFpQixDQUFDRSxNQUFNLENBQUMsQ0FBQ21CLFFBQVEsRUFBRTtrQkFDckUsSUFBSUQsV0FBVyxFQUFFbEUsR0FBRyxJQUFJLElBQUlrRSxXQUFXLEVBQUU7O2dCQUcxQyxJQUFJN0MsTUFBTSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU8sQ0FBQ3JCLEdBQUcsRUFBRWMsS0FBSyxDQUFDO2dCQUUzQyxNQUFNa0IsUUFBUSxHQUFhLE1BQU1vQyxLQUFLLENBQUNwRSxHQUFHLEVBQUVjLEtBQUssQ0FBQztnQkFDbEQsT0FBT2tCLFFBQVEsQ0FBQ3FDLElBQUksRUFBRTtlQUN0QixDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWDVCLE9BQU8sQ0FBQzZCLEtBQUssQ0FBQyxhQUFhLEVBQUVELENBQUMsQ0FBQzs7WUFFakMsQ0FBQztZQUVEakQsTUFBTSxHQUFHQSxDQUNSckIsR0FBVyxFQUNYZ0QsTUFBYyxFQUNkYixPQUFBLEdBQW1CO2NBQ2xCLGNBQWMsRUFBRTthQUNoQixLQUNHLElBQUksQ0FBQzJCLE9BQU8sQ0FBQzlELEdBQUcsRUFBRSxNQUFNLEVBQUVnRCxNQUFNLEVBQUViLE9BQU8sRUFBRSxJQUFJLENBQUM7WUFFckQsQ0FBQXFDLGFBQWMsR0FBR0MsQ0FBQ0MsT0FBTyxFQUFFdEUsUUFBUSxLQUFJO2NBQ3RDLElBQUk7Z0JBQ0hBLFFBQVEsQ0FBQzJCLE1BQU0sQ0FBQ0QsS0FBSyxHQUFHOEIsSUFBSSxDQUFDZSxLQUFLLENBQUN2RSxRQUFRLENBQUMwQixLQUFLLENBQUM7ZUFDbEQsQ0FBQyxPQUFPOEMsR0FBRyxFQUFFO2dCQUNibEMsT0FBTyxDQUFDNkIsS0FBSyxDQUFDSyxHQUFHLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxDQUFBeEUsUUFBUyxDQUFDMkIsTUFBTSxDQUFDd0MsS0FBSyxHQUFHLHdCQUF3Qjs7Y0FHdkRHLE9BQU8sQ0FBQ0csT0FBTyxDQUFDO2dCQUNmL0MsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBM0IsY0FBZTtnQkFDM0IsR0FBR0MsUUFBUSxDQUFDMkIsTUFBTSxDQUFDRDtlQUNuQixDQUFDO2NBQ0YsSUFBSSxDQUFDLENBQUEzQixjQUFlLEdBQUdvRCxTQUFTO1lBQ2pDLENBQUM7WUFFRCxNQUFNLENBQUFsQyxNQUFPeUQsQ0FBQzlFLEdBQUcsRUFBRWMsS0FBSztjQUN2QixNQUFNNEQsT0FBTyxHQUFHLElBQUkvRSxLQUFBLENBQUFvRixjQUFjLEVBQUU7Y0FDcEMsTUFBTS9DLFFBQVEsR0FBYSxNQUFNb0MsS0FBSyxDQUFDcEUsR0FBRyxFQUFFYyxLQUFLLENBQUM7Y0FFbEQsSUFBSSxDQUFDa0IsUUFBUSxDQUFDZ0QsRUFBRSxFQUFFO2dCQUNqQixNQUFNLElBQUlDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7Y0FFbkMsTUFBTUMsTUFBTSxHQUFHbEQsUUFBUSxDQUFDaUMsSUFBSSxFQUFFa0IsU0FBUyxFQUFFO2NBRXpDLE1BQU0vRSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFBLFFBQVM7Y0FDL0IsSUFBSWdGLElBQUksR0FBRyxFQUFFO2NBQ2IsT0FBTyxJQUFJLEVBQUU7Z0JBQ1osTUFBTTtrQkFBRUMsSUFBSTtrQkFBRXZEO2dCQUFLLENBQUUsR0FBRyxNQUFNb0QsTUFBTSxDQUFDSSxJQUFJLEVBQUU7Z0JBRTNDLElBQUlELElBQUksRUFBRTtrQkFDVCxPQUFPLElBQUksQ0FBQyxDQUFBYixhQUFjLENBQUNFLE9BQU8sRUFBRXRFLFFBQVEsQ0FBQzs7Z0JBRzlDLElBQUltRixLQUFLLEdBQUcsSUFBSUMsV0FBVyxFQUFFLENBQUNDLE1BQU0sQ0FBQzNELEtBQUssQ0FBQztnQkFFM0MsTUFBTTRELGdCQUFnQixHQUFHQSxDQUFDTixJQUFJLEVBQUVHLEtBQUssS0FBSTtrQkFDeEMsSUFBSSxDQUFDQSxLQUFLLENBQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUEvQixVQUFXLENBQUNFLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQ3lELElBQUksRUFBRUcsS0FBSyxDQUFDO2tCQUNqRSxNQUFNSSxRQUFRLEdBQUdKLEtBQUssQ0FBQ0ssS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBbkUsVUFBVyxDQUFDRSxLQUFLLENBQUM7a0JBQ3BELElBQUlnRSxRQUFRLENBQUN4QyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN4QmlDLElBQUksR0FBR08sUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDbEJKLEtBQUssR0FBR0ksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7O2tCQUUxQixPQUFPLENBQUNQLElBQUksRUFBRUcsS0FBSyxDQUFDO2dCQUNyQixDQUFDO2dCQUVELElBQUlBLEtBQUssQ0FBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQS9CLFVBQVcsQ0FBQ0MsUUFBUSxDQUFDLEVBQUU7a0JBQzlDdEIsUUFBUSxDQUFDeUIsT0FBTyxHQUFHLElBQUk7a0JBQ3ZCLE1BQU0rRCxLQUFLLEdBQUdMLEtBQUssQ0FBQ0ssS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBbkUsVUFBVyxDQUFDQyxRQUFRLENBQUM7a0JBQ3BEdEIsUUFBUSxDQUFDMEIsS0FBSyxJQUFJOEQsS0FBSyxDQUFDLENBQUMsQ0FBQztrQkFDMUIsSUFBSUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBekYsY0FBZSxJQUFJeUYsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Z0JBRy9DLElBQUl4RixRQUFRLENBQUN5QixPQUFPLEVBQUU7a0JBQ3JCekIsUUFBUSxDQUFDMEIsS0FBSyxJQUFJeUQsS0FBSztrQkFDdkIsSUFBSSxDQUFDTSxZQUFZLENBQUMsaUJBQWlCLENBQUM7a0JBQ3BDOztnQkFHRCxJQUFJTixLQUFLLENBQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUEvQixVQUFXLENBQUNHLEdBQUcsQ0FBQyxFQUFFO2tCQUN6QyxDQUFDd0QsSUFBSSxFQUFFRyxLQUFLLENBQUMsR0FBR0csZ0JBQWdCLENBQUNOLElBQUksRUFBRUcsS0FBSyxDQUFDO2tCQUU3QyxNQUFNSSxRQUFRLEdBQUdQLElBQUksQ0FBQ1EsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBbkUsVUFBVyxDQUFDRyxHQUFHLENBQUM7a0JBQ2pEd0QsSUFBSSxHQUFHTyxRQUFRLENBQUMsQ0FBQyxDQUFDO2tCQUNsQkosS0FBSyxHQUFHSSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtrQkFDekIsSUFBSSxDQUFDLENBQUF6RixPQUFRLENBQUM0RixJQUFJLENBQUNWLElBQUksQ0FBQztrQkFDeEIsSUFBSSxDQUFDUyxZQUFZLENBQUMsaUJBQWlCLENBQUM7a0JBQ3BDLElBQUksQ0FBQyxDQUFBMUYsY0FBZSxJQUFJLElBQUksQ0FBQyxDQUFBc0IsVUFBVyxDQUFDRSxLQUFLLEdBQUd5RCxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUEzRCxVQUFXLENBQUNHLEdBQUc7a0JBQzVFd0QsSUFBSSxHQUFHLEVBQUU7O2dCQUdWLElBQUlHLEtBQUssQ0FBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQS9CLFVBQVcsQ0FBQ0UsS0FBSyxDQUFDLEVBQUU7a0JBQzNDLENBQUN5RCxJQUFJLEVBQUVHLEtBQUssQ0FBQyxHQUFHRyxnQkFBZ0IsQ0FBQ04sSUFBSSxFQUFFRyxLQUFLLENBQUM7aUJBQzdDLE1BQU07a0JBQ04sSUFBSSxDQUFDLENBQUFwRixjQUFlLElBQUlvRixLQUFLOztnQkFHOUIsSUFBSSxDQUFDTSxZQUFZLENBQUMsaUJBQWlCLENBQUM7ZUFDcEMsQ0FBQztjQUVGLE9BQU9uQixPQUFPO2NBRWQ7WUFDRDs7WUFFQXpELEdBQUcsR0FBR0EsQ0FBQ2pCLEdBQVcsRUFBRWdELE1BQWMsRUFBRWIsT0FBZSxLQUFJO2NBQ3RELE9BQU8sSUFBSSxDQUFDMkIsT0FBTyxDQUFDOUQsR0FBRyxFQUFFLEtBQUssRUFBRWdELE1BQU0sQ0FBQztZQUN4QyxDQUFDO1lBQ0Q5QixJQUFJLEdBQUdBLENBQ05sQixHQUFXLEVBQ1hnRCxNQUFjLEVBQ2RiLE9BQUEsR0FBbUI7Y0FDbEIsY0FBYyxFQUFFO2FBQ2hCLEtBQ0csSUFBSSxDQUFDMkIsT0FBTyxDQUFDOUQsR0FBRyxFQUFFLE1BQU0sRUFBRWdELE1BQU0sRUFBRWIsT0FBTyxDQUFDO1lBQy9DZixNQUFNLEdBQUdBLENBQ1JwQixHQUFXLEVBQ1hnRCxNQUFjLEVBQ2RiLE9BQUEsR0FBbUI7Y0FDbEIsY0FBYyxFQUFFO2FBQ2hCLEtBQ0csSUFBSSxDQUFDMkIsT0FBTyxDQUFDOUQsR0FBRyxFQUFFLFFBQVEsRUFBRWdELE1BQU0sRUFBRWIsT0FBTyxDQUFDO1lBQ2pEaEIsR0FBRyxHQUFHQSxDQUNMbkIsR0FBVyxFQUNYZ0QsTUFBYyxFQUNkYixPQUFBLEdBQW1CO2NBQ2xCLGNBQWMsRUFBRTthQUNoQixLQUNHLElBQUksQ0FBQzJCLE9BQU8sQ0FBQzlELEdBQUcsRUFBRSxLQUFLLEVBQUVnRCxNQUFNLEVBQUViLE9BQU8sQ0FBQzs7VUFDOUNiLE9BQUEsQ0FBQWhCLEtBQUEsR0FBQUEsS0FBQSJ9