System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/entities/collection", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Drafts, Draft, DraftsProvider, __beyond_pkg, hmr;
  _export({
    Drafts: void 0,
    Draft: void 0,
    DraftsProvider: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_1 = _beyondJsReactive211EntitiesCollection;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_2 = _beyondJsReactive211EntitiesItem;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_3 = _beyondJsHttpSuite011Api;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_4 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk155Session) {
      dependency_5 = _aimpactChatSdk155Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/entities/drafts"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/collection', dependency_1], ['@beyond-js/reactive/entities/item', dependency_2], ['@beyond-js/http-suite/api', dependency_3], ['@aimpact/ailearn-sdk/startup', dependency_4], ['@aimpact/chat-sdk/session', dependency_5]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 3668489271,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Drafts = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _provider = require("./provider");
          /*bundle*/
          class Drafts extends _collection.Collection {
            constructor(args) {
              super({
                entity: 'Draft',
                provider: _provider.DraftsProvider,
                item: _item.Draft,
                ...args,
                properties: ['type']
              });
              this.type = args?.type ?? 'draft';
            }
          }
          exports.Drafts = Drafts;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1989685641,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Draft = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _provider = require("./provider");
          /*bundle*/
          class Draft extends _item.Item {
            constructor(args) {
              super({
                ...args,
                entity: args?.entity || 'Draft',
                provider: _provider.DraftsProvider,
                properties: ['id', 'state', 'language', 'title', 'description', 'picture', 'owner', 'creator', 'cloned', 'ai', 'type', ...(args?.properties || [])]
              });
            }
          }
          exports.Draft = Draft;
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 3589307998,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftsProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          class DraftsProvider {
            #api;
            #model;
            hardcoded = false; // Flag to enable/disable hardcoded data
            constructor(model) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#model = model;
            }
            async list(specs) {
              // Use the type from the model to filter drafts by type
              const type = this.#model?.type || specs?.type;
              if (type) {
                return this.listByType(type, specs);
              }
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get('/drafts', specs);
              if (!response.status) {
                throw new Error('Failed to fetch drafts');
              }
              return response.data;
            }
            async listByType(type, specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/drafts/type/${type}`, specs);
              if (!response.status) {
                throw new Error(`Failed to fetch drafts by type: ${type}`);
              }
              return response.data;
            }
            async load(id) {
              const token = await _session.sessionWrapper.user.token;
              if (!id) id = this.#model.id;
              this.#api.bearer(token);
              const response = await this.#api.get(`/drafts/${id}`);
              if (!response.status) {
                throw new Error('Failed to load draft');
              }
              return response.data;
            }
            async edit(id, data) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.put(`/drafts/${id}`, data);
              if (!response.status) {
                throw new Error('Failed to update draft');
              }
              return response.data;
            }
            async delete(id) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.delete(`/drafts/${id}`);
              if (!response.status) {
                throw new Error('Failed to delete draft');
              }
              return true;
            }
            async publish(data) {
              const token = await _session.sessionWrapper.user.token;
              const id = this.#model.id;
              if (!data) data = this.#model.getProperties();
              this.#api.bearer(token);
              const response = await this.#api.post(`/drafts/${id}/publish`, data);
              if (!response.status) {
                throw new Error('Failed to publish draft');
              }
              return response;
            }
            async save(data) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/drafts`, data);
              if (!response.status) {
                throw new Error('Failed to save draft');
              }
              return response.data;
            }
            async generateImage({
              text,
              files,
              activityId
            }) {
              const token = await _session.sessionWrapper.user.token;
              const id = this.#model.id;
              this.#api.bearer(token);
              const requestBody = {
                text,
                files
              };
              const response = await this.#api.post(`/drafts/${id}/activities/${activityId}/images/generate`, {
                ...requestBody,
                multipart: true
              });
              if (!response.status) {
                return {
                  error: {
                    code: response.error?.code || 500,
                    text: response.error?.message || 'Failed to generate image'
                  }
                };
              }
              return {
                data: response.data
              };
            }
          }
          exports.DraftsProvider = DraftsProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1086198656,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Drafts",
        "name": "Drafts"
      }, {
        "im": "./item",
        "from": "Draft",
        "name": "Draft"
      }, {
        "im": "./provider",
        "from": "DraftsProvider",
        "name": "DraftsProvider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Drafts') && _export("Drafts", Drafts = require ? require('./collection').Drafts : value);
        (require || prop === 'Draft') && _export("Draft", Draft = require ? require('./item').Draft : value);
        (require || prop === 'DraftsProvider') && _export("DraftsProvider", DraftsProvider = require ? require('./provider').DraftsProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9wcm92aWRlciIsIkRyYWZ0cyIsIkNvbGxlY3Rpb24iLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJlbnRpdHkiLCJwcm92aWRlciIsIkRyYWZ0c1Byb3ZpZGVyIiwiaXRlbSIsIkRyYWZ0IiwicHJvcGVydGllcyIsInR5cGUiLCJleHBvcnRzIiwiSXRlbSIsIl9hcGkiLCJfc3RhcnR1cCIsIl9zZXNzaW9uIiwiYXBpIiwibW9kZWwiLCJoYXJkY29kZWQiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsImxpc3QiLCJzcGVjcyIsImxpc3RCeVR5cGUiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsInJlc3BvbnNlIiwiZ2V0Iiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwibG9hZCIsImlkIiwiZWRpdCIsInB1dCIsImRlbGV0ZSIsInB1Ymxpc2giLCJnZXRQcm9wZXJ0aWVzIiwicG9zdCIsInNhdmUiLCJnZW5lcmF0ZUltYWdlIiwidGV4dCIsImZpbGVzIiwiYWN0aXZpdHlJZCIsInJlcXVlc3RCb2R5IiwibXVsdGlwYXJ0IiwiZXJyb3IiLCJjb2RlIiwibWVzc2FnZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvL2NvbGxlY3Rpb24udHMvIiwiLy9pdGVtLnRzLyIsIi8vcHJvdmlkZXIudHMvIiwiLy90eXBlcy50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxTQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQU9HLE1BQU8sU0FBUUosV0FBQSxDQUFBSyxV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LElBQUlBLENBQUNULElBQVU7Y0FDcEIsTUFBTVIsS0FBSyxHQUFHLE1BQU1YLFFBQUEsQ0FBQVksY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFWLEdBQUksQ0FBQ2EsTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTUksUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFkLEdBQUksQ0FBQzBCLElBQUksQ0FBQyxTQUFTLEVBQUVSLElBQUksQ0FBQztjQUN0RCxJQUFJLENBQUNKLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUlDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQzs7Y0FFeEMsT0FBT0gsUUFBUSxDQUFDSSxJQUFJO1lBQ3JCO1lBRUEsTUFBTVUsYUFBYUEsQ0FBQztjQUFFQyxJQUFJO2NBQUVDLEtBQUs7Y0FBRUM7WUFBVSxDQUFFO2NBQzlDLE1BQU1yQixLQUFLLEdBQUcsTUFBTVgsUUFBQSxDQUFBWSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxNQUFNVSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFuQixLQUFNLENBQUNtQixFQUFFO2NBQ3pCLElBQUksQ0FBQyxDQUFBcEIsR0FBSSxDQUFDYSxNQUFNLENBQUNILEtBQUssQ0FBQztjQUV2QixNQUFNc0IsV0FBVyxHQUF3QjtnQkFBRUgsSUFBSTtnQkFBRUM7Y0FBSyxDQUFFO2NBQ3hELE1BQU1oQixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWQsR0FBSSxDQUFDMEIsSUFBSSxDQUFDLFdBQVdOLEVBQUUsZUFBZVcsVUFBVSxrQkFBa0IsRUFBRTtnQkFDL0YsR0FBR0MsV0FBVztnQkFDZEMsU0FBUyxFQUFFO2VBQ1gsQ0FBQztjQUVGLElBQUksQ0FBQ25CLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNyQixPQUFPO2tCQUNOa0IsS0FBSyxFQUFFO29CQUNOQyxJQUFJLEVBQUVyQixRQUFRLENBQUNvQixLQUFLLEVBQUVDLElBQUksSUFBSSxHQUFHO29CQUNqQ04sSUFBSSxFQUFFZixRQUFRLENBQUNvQixLQUFLLEVBQUVFLE9BQU8sSUFBSTs7aUJBRWxDOztjQUdGLE9BQU87Z0JBQ05sQixJQUFJLEVBQUVKLFFBQVEsQ0FBQ0k7ZUFDZjtZQUNGOztVQUNBdkIsT0FBQSxDQUFBTCxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7O1VDMUpEOztVQUVBK0MsTUFBQSxDQUFBQyxjQUFBLENBQUEzQyxPQUFBO1lBQ0E0QyxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=