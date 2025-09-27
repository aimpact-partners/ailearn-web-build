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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.6.2"]]);
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
        hash: 3707604338,
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

      /***************************
      INTERNAL MODULE: ./mock-data
      ***************************/

      ims.set('./mock-data', {
        hash: 4211787363,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.mockDraftsData = void 0;
          // Hardcoded data for drafts
          const mockDraftsData = exports.mockDraftsData = [{
            id: 'draft-001',
            type: 'article',
            title: 'Introduction to Natural Language Processing',
            description: 'Understanding the basics of NLP and its applications in modern AI systems.',
            language: 'en',
            state: 'draft',
            editors: [],
            owner: {
              id: 'user-004',
              name: 'Dr. Alex Thompson',
              photoUrl: 'https://example.com/photos/alex.jpg'
            },
            creator: {
              id: 'user-004',
              name: 'Dr. Alex Thompson',
              photoUrl: 'https://example.com/photos/alex.jpg'
            }
          }, {
            id: 'draft-002',
            type: 'article',
            title: 'Machine Learning Model Optimization',
            description: 'Techniques and strategies for optimizing machine learning models for production.',
            language: 'en',
            state: 'draft',
            editors: [],
            owner: {
              id: 'user-005',
              name: 'Prof. Lisa Wang',
              photoUrl: 'https://example.com/photos/lisa.jpg'
            },
            creator: {
              id: 'user-005',
              name: 'Prof. Lisa Wang',
              photoUrl: 'https://example.com/photos/lisa.jpg'
            }
          }, {
            id: 'draft-003',
            type: 'article',
            title: 'Ethics in Artificial Intelligence',
            description: 'Exploring the ethical considerations and responsibilities in AI development.',
            language: 'en',
            state: 'draft',
            editors: [],
            owner: {
              id: 'user-006',
              name: 'Dr. James Wilson',
              photoUrl: 'https://example.com/photos/james.jpg'
            },
            creator: {
              id: 'user-006',
              name: 'Dr. James Wilson',
              photoUrl: 'https://example.com/photos/james.jpg'
            }
          }];
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 4096097356,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftsProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _mockData = require("./mock-data");
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
              // Return hardcoded data if enabled
              if (this.hardcoded) {
                console.log('DraftsProvider: Returning hardcoded data for list');
                return _mockData.mockDraftsData;
              }
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
              // Return hardcoded data if enabled
              if (this.hardcoded) {
                console.log(`DraftsProvider: Returning hardcoded data for type ${type}`);
                return _mockData.mockDraftsData.filter(draft => draft.type === type);
              }
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
          }
          exports.DraftsProvider = DraftsProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 331139006,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9wcm92aWRlciIsIkRyYWZ0cyIsIkNvbGxlY3Rpb24iLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJlbnRpdHkiLCJwcm92aWRlciIsIkRyYWZ0c1Byb3ZpZGVyIiwiaXRlbSIsIkRyYWZ0IiwicHJvcGVydGllcyIsInR5cGUiLCJleHBvcnRzIiwiSXRlbSIsIm1vY2tEcmFmdHNEYXRhIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJzdGF0ZSIsImVkaXRvcnMiLCJvd25lciIsIm5hbWUiLCJwaG90b1VybCIsImNyZWF0b3IiLCJfYXBpIiwiX3N0YXJ0dXAiLCJfc2Vzc2lvbiIsIl9tb2NrRGF0YSIsImFwaSIsIm1vZGVsIiwiaGFyZGNvZGVkIiwiQXBpIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJsaXN0Iiwic3BlY3MiLCJjb25zb2xlIiwibG9nIiwibGlzdEJ5VHlwZSIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYmVhcmVyIiwicmVzcG9uc2UiLCJnZXQiLCJzdGF0dXMiLCJFcnJvciIsImRhdGEiLCJmaWx0ZXIiLCJkcmFmdCIsImxvYWQiLCJlZGl0IiwicHV0IiwiZGVsZXRlIiwicHVibGlzaCIsImdldFByb3BlcnRpZXMiLCJwb3N0Iiwic2F2ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvL2NvbGxlY3Rpb24udHMvIiwiLy9pdGVtLnRzLyIsIi8vbW9jay1kYXRhLnRzLyIsIi8vcHJvdmlkZXIudHMvIiwiLy90eXBlcy50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEs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