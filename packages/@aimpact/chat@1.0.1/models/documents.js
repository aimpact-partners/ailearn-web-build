System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.11/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Documents, __beyond_pkg, hmr;
  _export("Documents", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive116Model) {
      dependency_1 = _beyondJsReactive116Model;
    }, function (_aimpactChat101Api) {
      dependency_2 = _aimpactChat101Api;
    }, function (_aimpactChatSdk100Session) {
      dependency_3 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0011Config) {
      dependency_4 = _aimpactAilearnApp0011Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/models/documents"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/chat/api', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@aimpact/chat/config', dependency_4]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3920854037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Documents = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/chat/config");
          /*bundle*/ //@ts-ignore

          //@ts-ignore

          class Documents extends _model.ReactiveModel {
            #api;
            get api() {
              return this.#api;
            }
            #url = _config.default.params.DOCUMENTS_SERVER;
            #project;
            constructor() {
              super();
              this.#api = new _api.Api(this.#url);
              this.#project = _config.default.params.project;
            }
            async list(filter) {
              try {
                this.fetching = true;
                const specs = {
                  type: 'files',
                  userId: _session.sessionWrapper.userId,
                  project: this.#project
                };
                if (filter) specs['filter'] = filter;
                const response = await this.#api.get('/list', specs);
                if (!response.status) throw new Error(response.error);
                return response.data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = true;
              }
            }
            async remove(path) {
              try {
                if (!path) {
                  return {
                    status: false,
                    error: 'No path provided'
                  };
                }
                this.fetching = true;
                const specs = {
                  userId: _session.sessionWrapper.userId,
                  project: this.#project
                };
                const response = await this.#api.delete('/delete', specs);
                if (!response.status) throw new Error(response.error);
                return response.data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = true;
              }
            }
          }
          exports.Documents = Documents;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Documents",
        "name": "Documents"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Documents') && _export("Documents", Documents = require ? require('./index').Documents : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX2NvbmZpZyIsIkRvY3VtZW50cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJ1cmwiLCJkZWZhdWx0IiwicGFyYW1zIiwiRE9DVU1FTlRTX1NFUlZFUiIsInByb2plY3QiLCJjb25zdHJ1Y3RvciIsIkFwaSIsImxpc3QiLCJmaWx0ZXIiLCJmZXRjaGluZyIsInNwZWNzIiwidHlwZSIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwicmVzcG9uc2UiLCJnZXQiLCJzdGF0dXMiLCJFcnJvciIsImVycm9yIiwiZGF0YSIsImUiLCJjb25zb2xlIiwicmVtb3ZlIiwicGF0aCIsImRlbGV0ZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFHTyxXQVBQOztVQUVBOztVQUtpQixNQUFPSSxTQUFVLFNBQVFMLE1BQUEsQ0FBQU0sYUFBeUI7WUFDbEUsQ0FBQUMsR0FBSTtZQUNKLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBQ0EsQ0FBQUMsR0FBSSxHQUFHSixPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxnQkFBZ0I7WUFDckMsQ0FBQUMsT0FBUTtZQUNSQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFOLEdBQUksR0FBRyxJQUFJTCxJQUFBLENBQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQU4sR0FBSSxDQUFDO2NBQzlCLElBQUksQ0FBQyxDQUFBSSxPQUFRLEdBQUdSLE9BQUEsQ0FBQUssT0FBTSxDQUFDQyxNQUFNLENBQUNFLE9BQU87WUFDdEM7WUFFQSxNQUFNRyxJQUFJQSxDQUFDQyxNQUEwQjtjQUNwQyxJQUFJO2dCQUNILElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1DLEtBQUssR0FBRztrQkFBRUMsSUFBSSxFQUFFLE9BQU87a0JBQUVDLE1BQU0sRUFBRWpCLFFBQUEsQ0FBQWtCLGNBQWMsQ0FBQ0QsTUFBTTtrQkFBRVIsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBQTtnQkFBUSxDQUFFO2dCQUN0RixJQUFJSSxNQUFNLEVBQUVFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBR0YsTUFBTTtnQkFDcEMsTUFBTU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFmLEdBQUksQ0FBQ2dCLEdBQUcsQ0FBQyxPQUFPLEVBQUVMLEtBQUssQ0FBQztnQkFDcEQsSUFBSSxDQUFDSSxRQUFRLENBQUNFLE1BQU0sRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQ0gsUUFBUSxDQUFDSSxLQUFLLENBQUM7Z0JBQ3JELE9BQU9KLFFBQVEsQ0FBQ0ssSUFBSTtlQUNwQixDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDSCxLQUFLLENBQUNFLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ1gsUUFBUSxHQUFHLElBQUk7O1lBRXRCO1lBRUEsTUFBTWEsTUFBTUEsQ0FBQ0MsSUFBWTtjQUN4QixJQUFJO2dCQUNILElBQUksQ0FBQ0EsSUFBSSxFQUFFO2tCQUNWLE9BQU87b0JBQUVQLE1BQU0sRUFBRSxLQUFLO29CQUFFRSxLQUFLLEVBQUU7a0JBQWtCLENBQUU7O2dCQUVwRCxJQUFJLENBQUNULFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNQyxLQUFLLEdBQUc7a0JBQUVFLE1BQU0sRUFBRWpCLFFBQUEsQ0FBQWtCLGNBQWMsQ0FBQ0QsTUFBTTtrQkFBRVIsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBQTtnQkFBUSxDQUFFO2dCQUN2RSxNQUFNVSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWYsR0FBSSxDQUFDeUIsTUFBTSxDQUFDLFNBQVMsRUFBRWQsS0FBSyxDQUFDO2dCQUN6RCxJQUFJLENBQUNJLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDSCxRQUFRLENBQUNJLEtBQUssQ0FBQztnQkFDckQsT0FBT0osUUFBUSxDQUFDSyxJQUFJO2VBQ3BCLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNILEtBQUssQ0FBQ0UsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDWCxRQUFRLEdBQUcsSUFBSTs7WUFFdEI7O1VBQ0FnQixPQUFBLENBQUE1QixTQUFBLEdBQUFBLFNBQUEifQ==