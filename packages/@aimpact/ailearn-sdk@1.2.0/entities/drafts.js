System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.2/entities/collection", "@beyond-js/reactive@2.1.2/entities/item", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session"], function (_export, _context) {
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
    }, function (_beyondJsReactive212EntitiesCollection) {
      dependency_1 = _beyondJsReactive212EntitiesCollection;
    }, function (_beyondJsReactive212EntitiesItem) {
      dependency_2 = _beyondJsReactive212EntitiesItem;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_3 = _beyondJsHttpSuite011Api;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_4 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk155Session) {
      dependency_5 = _aimpactChatSdk155Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.7.2"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9wcm92aWRlciIsIkRyYWZ0cyIsIkNvbGxlY3Rpb24iLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJlbnRpdHkiLCJwcm92aWRlciIsIkRyYWZ0c1Byb3ZpZGVyIiwiaXRlbSIsIkRyYWZ0IiwicHJvcGVydGllcyIsInR5cGUiLCJleHBvcnRzIiwiSXRlbSIsIl9hcGkiLCJfc3RhcnR1cCIsIl9zZXNzaW9uIiwiYXBpIiwibW9kZWwiLCJoYXJkY29kZWQiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsImxpc3QiLCJzcGVjcyIsImxpc3RCeVR5cGUiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsInJlc3BvbnNlIiwiZ2V0Iiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwibG9hZCIsImlkIiwiZWRpdCIsInB1dCIsImRlbGV0ZSIsInB1Ymxpc2giLCJnZXRQcm9wZXJ0aWVzIiwicG9zdCIsInNhdmUiLCJnZW5lcmF0ZUltYWdlIiwidGV4dCIsImZpbGVzIiwiYWN0aXZpdHlJZCIsInJlcXVlc3RCb2R5IiwibXVsdGlwYXJ0IiwiZXJyb3IiLCJjb2RlIiwibWVzc2FnZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvY29sbGVjdGlvbi50cyIsIi9pdGVtLnRzIiwiL3Byb3ZpZGVyLnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsU0FBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUFPRyxNQUFPLFNBQVFKLFdBQUEsQ0FBQUssVUFBaUM7WUFF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QUFDVCxJQUFVO2NBQ3BCLE1BQU1SLEtBQUssR0FBRyxNQUFNWCxRQUFBLENBQUFZLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2NBQzdDLElBQUksQ0FBQyxDQUFBVixHQUFJLENBQUNhLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2NBRXZCLE1BQU1JLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBZCxHQUFJLENBQUMwQixJQUFJLENBQUMsU0FBUyxFQUFFUixJQUFJLENBQUM7Y0FDdEQsSUFBSSxDQUFDSixRQUFRLENBQUNFLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7O2NBRXhDLE9BQU9ILFFBQVEsQ0FBQ0ksSUFBSTtZQUNyQjtZQUVBLE1BQU1VLGFBQWFBLENBQUM7Y0FBRUMsSUFBSTtjQUFFQyxLQUFLO2NBQUVDO1lBQVUsQ0FBRTtjQUM5QyxNQUFNckIsS0FBSyxHQUFHLE1BQU1YLFFBQUEsQ0FBQVksY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsTUFBTVUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBbkIsS0FBTSxDQUFDbUIsRUFBRTtjQUN6QixJQUFJLENBQUMsQ0FBQXBCLEdBQUksQ0FBQ2EsTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTXNCLFdBQVcsR0FBd0I7Z0JBQUVILElBQUk7Z0JBQUVDO2NBQUssQ0FBRTtjQUN4RCxNQUFNaEIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFkLEdBQUksQ0FBQzBCLElBQUksQ0FBQyxXQUFXTixFQUFFLGVBQWVXLFVBQVUsa0JBQWtCLEVBQUU7Z0JBQy9GLEdBQUdDLFdBQVc7Z0JBQ2RDLFNBQVMsRUFBRTtlQUNYLENBQUM7Y0FFRixJQUFJLENBQUNuQixRQUFRLENBQUNFLE1BQU0sRUFBRTtnQkFDckIsT0FBTztrQkFDTmtCLEtBQUssRUFBRTtvQkFDTkMsSUFBSSxFQUFFckIsUUFBUSxDQUFDb0IsS0FBSyxFQUFFQyxJQUFJLElBQUksR0FBRztvQkFDakNOLElBQUksRUFBRWYsUUFBUSxDQUFDb0IsS0FBSyxFQUFFRSxPQUFPLElBQUk7O2lCQUVsQzs7Y0FHRixPQUFPO2dCQUNObEIsSUFBSSxFQUFFSixRQUFRLENBQUNJO2VBQ2Y7WUFDRjs7VUFDQXZCLE9BQUEsQ0FBQUwsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7OztVQzFKRDs7VUFFQStDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBM0MsT0FBQTtZQUNBNEMsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119