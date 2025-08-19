System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.1/entities/collection", "@aimpact/ailearn-sdk@1.2.0/entities/drafts", "zod@3.25.67", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Articles, DraftArticles, DraftArticle, Article, ArticlesProvider, __beyond_pkg, hmr;
  _export({
    Articles: void 0,
    DraftArticles: void 0,
    DraftArticle: void 0,
    Article: void 0,
    ArticlesProvider: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_1 = _beyondJsReactive211EntitiesCollection;
    }, function (_aimpactAilearnSdk120EntitiesDrafts) {
      dependency_2 = _aimpactAilearnSdk120EntitiesDrafts;
    }, function (_zod2) {
      dependency_3 = _zod2;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_4 = _beyondJsReactive211EntitiesItem;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_5 = _beyondJsHttpSuite011Api;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_6 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk155Session) {
      dependency_7 = _aimpactChatSdk155Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/entities/articles"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/collection', dependency_1], ['@aimpact/ailearn-sdk/entities/drafts', dependency_2], ['zod', dependency_3], ['@beyond-js/reactive/entities/item', dependency_4], ['@beyond-js/http-suite/api', dependency_5], ['@aimpact/ailearn-sdk/startup', dependency_6], ['@aimpact/chat-sdk/session', dependency_7]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 2451548620,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Articles = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _provider = require("./provider");
          /*bundle*/
          class Articles extends _collection.Collection {
            constructor(args) {
              super({
                entity: 'Article',
                provider: _provider.ArticlesProvider,
                item: _item.Article,
                type: 'articles',
                ...args
              });
            }
          }
          exports.Articles = Articles;
        }
      });

      /**********************************
      INTERNAL MODULE: ./draft-collection
      **********************************/

      ims.set('./draft-collection', {
        hash: 3001432064,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftArticles = void 0;
          var _drafts = require("@aimpact/ailearn-sdk/entities/drafts");
          var _draftItem = require("./draft-item");
          /*bundle*/
          class DraftArticles extends _drafts.Drafts {
            constructor(args) {
              super({
                ...args,
                entity: 'DraftArticles',
                item: _draftItem.DraftArticle,
                type: 'article' // Pass the type to the parent constructor,
              });
              console.log('Draft', args, this);
            }
          }
          exports.DraftArticles = DraftArticles;
        }
      });

      /****************************
      INTERNAL MODULE: ./draft-item
      ****************************/

      ims.set('./draft-item', {
        hash: 1436464380,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftArticle = void 0;
          var _drafts = require("@aimpact/ailearn-sdk/entities/drafts");
          var _zod = require("zod");
          /*bundle*/
          class DraftArticle extends _drafts.Draft {
            constructor(args) {
              super({
                ...args,
                entity: 'DraftArticle',
                type: 'article',
                properties: [
                // Article-specific properties
                'type', 'creator', 'title', 'description', 'specs', 'slug', 'content', 'lastModifiedBy', 'categories', 'tags', 'publicationDate', 'isFeatured',
                // Parent Draft properties
                'id', 'state', 'language', 'picture', 'owner', 'cloned', 'ai',
                // ITimeStamp properties
                'timeCreated', 'timeUpdated']
              });
            }
            schema = _zod.z.object({
              // Article-specific properties
              type: _zod.z.literal('article'),
              creator: _zod.z.object({
                id: _zod.z.string(),
                name: _zod.z.string(),
                photoUrl: _zod.z.string().optional()
              }),
              title: _zod.z.string().min(1, 'Title is required'),
              description: _zod.z.string().min(1, 'Description is required'),
              specs: _zod.z.any().optional(),
              slug: _zod.z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
              content: _zod.z.string().min(1, 'Content is required'),
              lastModifiedBy: _zod.z.object({
                id: _zod.z.string(),
                name: _zod.z.string(),
                photoUrl: _zod.z.string().optional()
              }).optional(),
              categories: _zod.z.array(_zod.z.string()).optional(),
              tags: _zod.z.array(_zod.z.string()).optional(),
              publicationDate: _zod.z.date().optional(),
              isFeatured: _zod.z.boolean().optional(),
              // Parent Draft properties
              id: _zod.z.string(),
              state: _zod.z.enum(['draft', 'blocked']),
              language: _zod.z.string().min(1, 'Language is required'),
              picture: _zod.z.string().optional(),
              owner: _zod.z.object({
                id: _zod.z.string(),
                name: _zod.z.string(),
                photoUrl: _zod.z.string()
              }),
              cloned: _zod.z.array(_zod.z.object({
                id: _zod.z.string(),
                user: _zod.z.object({
                  uid: _zod.z.string(),
                  name: _zod.z.string()
                }),
                created: _zod.z.number()
              })).optional(),
              ai: _zod.z.boolean().optional(),
              // ITimeStamp properties
              timeCreated: _zod.z.number(),
              timeUpdated: _zod.z.number()
            });
            async save() {
              const response = await this.provider.save(this.getProperties());
              this.set(response);
              return response;
            }
          }
          exports.DraftArticle = DraftArticle;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 48359482,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Article = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _provider = require("./provider");
          var _zod = require("zod");
          /*bundle*/
          class Article extends _item.Item {
            constructor(args) {
              super({
                ...args,
                entity: 'Article',
                provider: _provider.ArticlesProvider,
                properties: [
                // Article-specific properties
                'id', 'type', 'creator', 'title', 'description', 'specs', 'slug', 'content', 'lastModifiedBy', 'categories', 'tags', 'publicationDate', 'isFeatured',
                // ITimeStamp properties
                'timeCreated', 'timeUpdated']
              });
            }
            schema = _zod.z.object({
              // Article-specific properties
              id: _zod.z.string(),
              type: _zod.z.literal('article'),
              creator: _zod.z.object({
                id: _zod.z.string(),
                name: _zod.z.string(),
                photoUrl: _zod.z.string().optional()
              }),
              title: _zod.z.string().min(1, 'Title is required'),
              description: _zod.z.string().min(1, 'Description is required'),
              specs: _zod.z.any().optional(),
              slug: _zod.z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
              content: _zod.z.string().min(1, 'Content is required'),
              lastModifiedBy: _zod.z.object({
                id: _zod.z.string(),
                name: _zod.z.string(),
                photoUrl: _zod.z.string().optional()
              }).optional(),
              categories: _zod.z.array(_zod.z.string()).optional(),
              tags: _zod.z.array(_zod.z.string()).optional(),
              publicationDate: _zod.z.date().optional(),
              isFeatured: _zod.z.boolean().optional(),
              // ITimeStamp properties
              timeCreated: _zod.z.number(),
              timeUpdated: _zod.z.number()
            });
          }
          exports.Article = Article;
        }
      });

      /***************************
      INTERNAL MODULE: ./mock-data
      ***************************/

      ims.set('./mock-data', {
        hash: 3053630320,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.mockArticlesData = void 0;
          // Hardcoded data for articles only (drafts are handled by DraftsProvider)
          const mockArticlesData = exports.mockArticlesData = [{
            id: 'art-001',
            type: 'article',
            title: 'Getting Started with AI Learning',
            description: 'A comprehensive guide to begin your journey in artificial intelligence and machine learning.',
            content: '# Getting Started with AI Learning\n\nArtificial Intelligence (AI) is transforming the way we learn and work...',
            language: 'en',
            state: 'published',
            timeCreated: 1705312800000,
            timeUpdated: 1705750200000,
            owner: {
              id: 'user-001',
              name: 'Dr. Sarah Johnson',
              photoUrl: 'https://example.com/photos/sarah.jpg'
            },
            creator: {
              id: 'user-001',
              name: 'Dr. Sarah Johnson',
              photoUrl: 'https://example.com/photos/sarah.jpg'
            }
          }, {
            id: 'art-002',
            type: 'article',
            title: 'Advanced Neural Network Architectures',
            description: 'Deep dive into complex neural network structures and their applications.',
            content: '# Advanced Neural Network Architectures\n\nNeural networks have evolved significantly...',
            language: 'en',
            state: 'published',
            timeCreated: 1704873600000,
            timeUpdated: 1705599900000,
            owner: {
              id: 'user-002',
              name: 'Prof. Michael Chen',
              photoUrl: 'https://example.com/photos/michael.jpg'
            },
            creator: {
              id: 'user-002',
              name: 'Prof. Michael Chen',
              photoUrl: 'https://example.com/photos/michael.jpg'
            }
          }, {
            id: 'art-003',
            type: 'article',
            title: 'Practical Applications of Computer Vision',
            description: 'Real-world examples and implementations of computer vision technologies.',
            content: '# Practical Applications of Computer Vision\n\nComputer vision is everywhere...',
            language: 'en',
            state: 'published',
            timeCreated: 1704456000000,
            timeUpdated: 1705925700000,
            owner: {
              id: 'user-003',
              name: 'Dr. Emily Rodriguez',
              photoUrl: 'https://example.com/photos/emily.jpg'
            },
            creator: {
              id: 'user-003',
              name: 'Dr. Emily Rodriguez',
              photoUrl: 'https://example.com/photos/emily.jpg'
            }
          }];
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 640710194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticlesProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _mockData = require("./mock-data");
          /*bundle*/
          class ArticlesProvider {
            #api;
            hardcoded = false; // Flag to enable/disable hardcoded data
            #model;
            constructor(model) {
              this.#model = model;
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            async list(specs) {
              // Return hardcoded data if enabled
              if (this.hardcoded) {
                console.log('ArticlesProvider: Returning hardcoded data for list');
                return _mockData.mockArticlesData.filter(article => article.state === 'published');
              }
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get('/articles', specs);
              if (!response.status) {
                throw new Error('Failed to fetch articles');
              }
              return response.data;
            }
            async load(id) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/articles/${id}`);
              if (!response.status) {
                throw new Error('Failed to load article');
              }
              return response.data;
            }
            async create(data) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post('/articles', data);
              if (!response.status) {
                throw new Error('Failed to create article');
              }
              return response.data;
            }
            async edit(id, data) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.put(`/articles/${id}`, data);
              if (!response.status) {
                throw new Error('Failed to update article');
              }
              return response.data;
            }
            async delete(id) {
              const token = await _session.sessionWrapper.user.token;
              if (!id) id = this.#model.id;
              this.#api.bearer(token);
              const response = await this.#api.delete(`/articles/${id}`);
              if (!response.status) {
                throw new Error('Failed to delete article');
              }
              return true;
            }
          }
          exports.ArticlesProvider = ArticlesProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 500572751,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Articles",
        "name": "Articles"
      }, {
        "im": "./draft-collection",
        "from": "DraftArticles",
        "name": "DraftArticles"
      }, {
        "im": "./draft-item",
        "from": "DraftArticle",
        "name": "DraftArticle"
      }, {
        "im": "./item",
        "from": "Article",
        "name": "Article"
      }, {
        "im": "./provider",
        "from": "ArticlesProvider",
        "name": "ArticlesProvider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Articles') && _export("Articles", Articles = require ? require('./collection').Articles : value);
        (require || prop === 'DraftArticles') && _export("DraftArticles", DraftArticles = require ? require('./draft-collection').DraftArticles : value);
        (require || prop === 'DraftArticle') && _export("DraftArticle", DraftArticle = require ? require('./draft-item').DraftArticle : value);
        (require || prop === 'Article') && _export("Article", Article = require ? require('./item').Article : value);
        (require || prop === 'ArticlesProvider') && _export("ArticlesProvider", ArticlesProvider = require ? require('./provider').ArticlesProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9wcm92aWRlciIsIkFydGljbGVzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiYXJncyIsImVudGl0eSIsInByb3ZpZGVyIiwiQXJ0aWNsZXNQcm92aWRlciIsIml0ZW0iLCJBcnRpY2xlIiwidHlwZSIsImV4cG9ydHMiLCJfZHJhZnRzIiwiX2RyYWZ0SXRlbSIsIkRyYWZ0QXJ0aWNsZXMiLCJEcmFmdHMiLCJEcmFmdEFydGljbGUiLCJjb25zb2xlIiwibG9nIiwiX3pvZCIsIkRyYWZ0IiwicHJvcGVydGllcyIsInNjaGVtYSIsInoiLCJvYmplY3QiLCJsaXRlcmFsIiwiY3JlYXRvciIsImlkIiwic3RyaW5nIiwibmFtZSIsInBob3RvVXJsIiwib3B0aW9uYWwiLCJ0aXRsZSIsIm1pbiIsImRlc2NyaXB0aW9uIiwic3BlY3MiLCJhbnkiLCJzbHVnIiwicmVnZXgiLCJjb250ZW50IiwibGFzdE1vZGlmaWVkQnkiLCJjYXRlZ29yaWVzIiwiYXJyYXkiLCJ0YWdzIiwicHVibGljYXRpb25EYXRlIiwiZGF0ZSIsImlzRmVhdHVyZWQiLCJib29sZWFuIiwic3RhdGUiLCJlbnVtIiwibGFuZ3VhZ2UiLCJwaWN0dXJlIiwib3duZXIiLCJjbG9uZWQiLCJ1c2VyIiwidWlkIiwiY3JlYXRlZCIsIm51bWJlciIsImFpIiwidGltZUNyZWF0ZWQiLCJ0aW1lVXBkYXRlZCIsInNhdmUiLCJyZXNwb25zZSIsImdldFByb3BlcnRpZXMiLCJzZXQiLCJJdGVtIiwibW9ja0FydGljbGVzRGF0YSIsIl9hcGkiLCJfc3RhcnR1cCIsIl9zZXNzaW9uIiwiX21vY2tEYXRhIiwiYXBpIiwiaGFyZGNvZGVkIiwibW9kZWwiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsImxpc3QiLCJmaWx0ZXIiLCJhcnRpY2xlIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsImJlYXJlciIsImdldCIsInN0YXR1cyIsIkVycm9yIiwiZGF0YSIsImxvYWQiLCJjcmVhdGUiLCJwb3N0IiwiZWRpdCIsInB1dCIsImRlbGV0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvL2NvbGxlY3Rpb24udHMvIiwiLy9kcmFmdC1jb2xsZWN0aW9uLnRzLyIsIi8vZHJhZnQtaXRlbS50cy8iLCIvL2l0ZW0udHMvIiwiLy9tb2NrLWRhdGEudHMvIiwiLy9wcm92aWRlci50cy8iLCIvL3R5cGVzLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFNBQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFBT0csUUFBUyxTQUFRSixXQUFBLENBQUFLLFVBQXFDO1lBQzdFQyxZQUFZQyxJQUFVO2NBQ3JCLEtBQUssQ0FBQztnQkFDTEMsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCQyxRQUFRLEVBQUVOLFNBQUEsQ0FBQU8sZ0JBQWdCO2dCQUMxQkMsSUFBSSxFQUFFVCxLQUFBLENBQUFVLE9BQU87Z0JBQ2JDLElBQUksRUFBRSxVQUFVO2dCQUNoQixHQUFHTjtlQUNILENBQUM7WUFDSDs7VUFDQU8sT0FBQSxDQUFBVixRQUFBLEdBQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVcsT0FBQSxHQUFBZCxPQUFBO1VBQ0EsSUFBQWUsVUFBQSxHQUFBZixPQUFBO1VBRU87VUFBVSxNQUFPZ0IsYUFBYyxTQUFRRixPQUFBLENBQUFHLE1BQU07WUFDbkRaLFlBQVlDLElBQVU7Y0FDckIsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1BDLE1BQU0sRUFBRSxlQUFlO2dCQUN2QkcsSUFBSSxFQUFFSyxVQUFB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