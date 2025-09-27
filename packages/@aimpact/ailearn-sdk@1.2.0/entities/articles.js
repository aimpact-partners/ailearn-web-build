System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/entities/collection", "@aimpact/ailearn-sdk@1.2.0/entities/drafts", "zod@3.25.67", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/http-suite@0.1.1/api", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/ailearn-sdk@1.2.0/startup"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Articles, DraftArticles, DraftArticle, Article, KBCollection, KBItem, ArticlesProvider, __beyond_pkg, hmr;
  _export({
    Articles: void 0,
    DraftArticles: void 0,
    DraftArticle: void 0,
    Article: void 0,
    KBCollection: void 0,
    KBItem: void 0,
    ArticlesProvider: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
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
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_7 = _aimpactAilearnSdk120Config;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_8 = _aimpactAilearnSdk120Startup;
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
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/entities/articles"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/collection', dependency_1], ['@aimpact/ailearn-sdk/entities/drafts', dependency_2], ['zod', dependency_3], ['@beyond-js/reactive/entities/item', dependency_4], ['@beyond-js/http-suite/api', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/ailearn-sdk/startup', dependency_8]]);
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
        hash: 2730307543,
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
        hash: 3451196317,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Article = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _provider = require("./provider");
          var _zod = require("zod");
          var _collection = require("./kb-objects/collection");
          /*bundle*/
          class Article extends _item.Item {
            constructor(args) {
              super({
                ...args,
                entity: 'Article',
                provider: _provider.ArticlesProvider,
                properties: [
                // Article-specific properties
                'id', 'type', 'creator', 'title', 'description', 'specs', 'owner', 'slug', 'sections', 'content', 'lastModifiedBy', 'categories', 'tags', 'publicationDate', 'isFeatured', {
                  name: 'kbObjects',
                  value: _collection.KBObjects
                },
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

      /***************************************
      INTERNAL MODULE: ./kb-objects/collection
      ***************************************/

      ims.set('./kb-objects/collection', {
        hash: 3499561064,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KBObjects = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class KBObjects extends _collection.Collection {
            #api;
            #parent;
            constructor({
              parent,
              ...args
            } = {
              parent: undefined
            }) {
              super({
                ...args,
                entity: 'KbObjects',
                item: _item.KbObject
              });
              this.#parent = parent;
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            #sections = new Map();
            get sections() {
              return this.#sections;
            }
            //@ts-ignore
            set(data) {
              // console.log(3, items);
              if (Array.isArray(data)) data = {
                items: data
              };
              if (!Array.isArray(data.items)) {
                console.warn('se esta asignando assigments sin dato', data, this);
                return;
              }
              this.setItems(data.items);
              this.items.forEach(item => {
                this.#sections.set(item.section.id, item);
              });
            }
            setItems(items) {
              super.setItems(items);
              this.items.forEach(item => {
                this.#sections.set(item.section.id, item);
              });
            }
            async add(sectionId) {
              const specs = {
                sectionId
              };
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/articles/${this.#parent.id}/assign`, specs);
              if (!response.status) {
                throw new Error(response.error);
              }
              const assignment = new _item.KbObject({
                parent: this,
                ...response.data
              });
              this.#sections.set(sectionId, assignment);
              this.#parent.trigger('change');
              // console.log(this.#map);
              return assignment;
            }
          }
          exports.KBObjects = KBObjects;
        }
      });

      /*********************************
      INTERNAL MODULE: ./kb-objects/item
      *********************************/

      ims.set('./kb-objects/item', {
        hash: 3930383655,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KbObject = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _zod = require("zod");
          /**
           * TODO: Review if this object is really needed.
           */
          class KbObject extends _item.Item {
            get dashboard() {
              return `/dashboard/${this.id}`;
            }
            get link() {
              return `/kb-objects/${this.id}`;
            }
            schema = _zod.z.object({
              id: _zod.z.string(),
              name: _zod.z.string(),
              description: _zod.z.string().optional()
            });
            constructor(args = {}) {
              super({
                ...args,
                entity: 'KbObjects',
                properties: ['section', 'id']
              });
            }
          }
          exports.KbObject = KbObject;
        }
      });

      /*******************************
      INTERNAL MODULE: ./kb/collection
      *******************************/

      ims.set('./kb/collection', {
        hash: 372930906,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KBCollection = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _provider = require("./provider");
          /*bundle*/
          class KBCollection extends _collection.Collection {
            constructor(args) {
              super({
                entity: 'KBItem',
                provider: _provider.KBProvider,
                item: _item.KBItem,
                type: 'kbcollection',
                ...args
              });
            }
          }
          exports.KBCollection = KBCollection;
        }
      });

      /**************************
      INTERNAL MODULE: ./kb/index
      **************************/

      ims.set('./kb/index', {
        hash: 816474602,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          Object.defineProperty(exports, "KBCollection", {
            enumerable: true,
            get: function () {
              return _collection.KBCollection;
            }
          });
          Object.defineProperty(exports, "KBItem", {
            enumerable: true,
            get: function () {
              return _item.KBItem;
            }
          });
          Object.defineProperty(exports, "KBProvider", {
            enumerable: true,
            get: function () {
              return _provider.KBProvider;
            }
          });
          var _collection = require("./collection");
          var _item = require("./item");
          var _provider = require("./provider");
        }
      });

      /*************************
      INTERNAL MODULE: ./kb/item
      *************************/

      ims.set('./kb/item', {
        hash: 625332185,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KBItem = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _provider = require("./provider");
          /*bundle*/
          class KBItem extends _item.Item {
            constructor(args) {
              super({
                ...args,
                entity: 'KBItem',
                provider: _provider.KBProvider,
                properties: ['id', 'score', 'values', 'metadata']
              });
            }
          }
          exports.KBItem = KBItem;
        }
      });

      /*****************************
      INTERNAL MODULE: ./kb/provider
      *****************************/

      ims.set('./kb/provider', {
        hash: 30439688,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KBProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          class KBProvider {
            #api;
            #model;
            constructor(model) {
              this.#model = model;
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            async list(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post('/kb/search', specs);
              if (!response.status) {
                throw new Error('Failed to fetch KB search results');
              }
              return response.data.items;
            }
            async load(id) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/${id}`);
              if (!response.status) {
                throw new Error('Failed to load KB item');
              }
              return response.data;
            }
          }
          exports.KBProvider = KBProvider;
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 569993208,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticlesProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
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
        "im": "./kb/collection",
        "from": "KBCollection",
        "name": "KBCollection"
      }, {
        "im": "./kb/item",
        "from": "KBItem",
        "name": "KBItem"
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
        (require || prop === 'KBCollection') && _export("KBCollection", KBCollection = require ? require('./kb/collection').KBCollection : value);
        (require || prop === 'KBItem') && _export("KBItem", KBItem = require ? require('./kb/item').KBItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9wcm92aWRlciIsIkFydGljbGVzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiYXJncyIsImVudGl0eSIsInByb3ZpZGVyIiwiQXJ0aWNsZXNQcm92aWRlciIsIml0ZW0iLCJBcnRpY2xlIiwidHlwZSIsImV4cG9ydHMiLCJfZHJhZnRzIiwiX2RyYWZ0SXRlbSIsIkRyYWZ0QXJ0aWNsZXMiLCJEcmFmdHMiLCJEcmFmdEFydGljbGUiLCJfem9kIiwiRHJhZnQiLCJwcm9wZXJ0aWVzIiwic2NoZW1hIiwieiIsIm9iamVjdCIsImxpdGVyYWwiLCJjcmVhdG9yIiwiaWQiLCJzdHJpbmciLCJuYW1lIiwicGhvdG9VcmwiLCJvcHRpb25hbCIsInRpdGxlIiwibWluIiwiZGVzY3JpcHRpb24iLCJzcGVjcyIsImFueSIsInNsdWciLCJyZWdleCIsImNvbnRlbnQiLCJsYXN0TW9kaWZpZWRCeSIsImNhdGVnb3JpZXMiLCJhcnJheSIsInRhZ3MiLCJwdWJsaWNhdGlvbkRhdGUiLCJkYXRlIiwiaXNGZWF0dXJlZCIsImJvb2xlYW4iLCJzdGF0ZSIsImVudW0iLCJsYW5ndWFnZSIsInBpY3R1cmUiLCJvd25lciIsImNsb25lZCIsInVzZXIiLCJ1aWQiLCJjcmVhdGVkIiwibnVtYmVyIiwiYWkiLCJ0aW1lQ3JlYXRlZCIsInRpbWVVcGRhdGVkIiwic2F2ZSIsInJlc3BvbnNlIiwiZ2V0UHJvcGVydGllcyIsInNldCIsIkl0ZW0iLCJ2YWx1ZSIsIktCT2JqZWN0cyIsIl9hcGkiLCJfc2Vzc2lvbiIsIl9zdGFydHVwIiwiYXBpIiwicGFyZW50IiwidW5kZWZpbmVkIiwiS2JPYmplY3QiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsInNlY3Rpb25zIiwiTWFwIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsIml0ZW1zIiwiY29uc29sZSIsIndhcm4iLCJzZXRJdGVtcyIsImZvckVhY2giLCJzZWN0aW9uIiwiYWRkIiwic2VjdGlvbklkIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsImJlYXJlciIsInBvc3QiLCJzdGF0dXMiLCJFcnJvciIsImVycm9yIiwiYXNzaWdubWVudCIsInRyaWdnZXIiLCJkYXNoYm9hcmQiLCJsaW5rIiwiS0JDb2xsZWN0aW9uIiwiS0JQcm92aWRlciIsIktCSXRlbSIsIm1vZGVsIiwibGlzdCIsImxvYWQiLCJnZXQiLCJoYXJkY29kZWQiLCJjcmVhdGUiLCJlZGl0IiwicHV0IiwiZGVsZXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvL2NvbGxlY3Rpb24udHMvIiwiLy9kcmFmdC1jb2xsZWN0aW9uLnRzLyIsIi8vZHJhZnQtaXRlbS50cy8iLCIvL2l0ZW0udHMvIiwiLy9rYi1vYmplY3RzL2NvbGxlY3Rpb24udHMiLCIvL2tiLW9iamVjdHMvaXRlbS50cyIsIi8va2IvY29sbGVjdGlvbi50cyIsIi8va2IvaW5kZXgudHMiLCIvL2tiL2l0ZW0udHMiLCIvL2tiL3Byb3ZpZGVyLnRzIiwiLy9wcm92aWRlci50cy8iLCIvL3R5cGVzLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsU0FBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUFPRyxRQUFTLFNBQVFKLFdBQUEsQ0FBQUssVUFBcUM7WUFDN0VDLFlBQVlDLElBQVU7Y0FDckIsS0FBSyxDQUFDO2dCQUNMQyxNQUFNLEVBQUUsU0FBUztnQkFDakJDLFFBQVEsRUFBRU4sU0FBQSxDQUFBTyxnQkFBZ0I7Z0JBQzFCQyxJQUFJLEVBQUVULEtB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