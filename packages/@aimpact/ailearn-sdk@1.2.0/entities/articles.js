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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.6.3"]]);
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
        hash: 750344149,
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
              slug: _zod.z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'WRONG_SLUG'),
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