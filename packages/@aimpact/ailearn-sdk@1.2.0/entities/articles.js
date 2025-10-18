System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/entities/collection", "@aimpact/ailearn-sdk@1.2.0/entities/drafts", "zod@3.25.67", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Articles, DraftArticles, DraftArticle, Article, KBCollection, KBItem, ArticlesProvider, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_6 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk155Session) {
      dependency_7 = _aimpactChatSdk155Session;
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
        hash: 3875533770,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KBObjects = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
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
        hash: 583720403,
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

      /*************************
      INTERNAL MODULE: ./kb/item
      *************************/

      ims.set('./kb/item', {
        hash: 4150469282,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9wcm92aWRlciIsIkFydGljbGVzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiYXJncyIsImVudGl0eSIsInByb3ZpZGVyIiwiQXJ0aWNsZXNQcm92aWRlciIsIml0ZW0iLCJBcnRpY2xlIiwidHlwZSIsImV4cG9ydHMiLCJfZHJhZnRzIiwiX2RyYWZ0SXRlbSIsIkRyYWZ0QXJ0aWNsZXMiLCJEcmFmdHMiLCJEcmFmdEFydGljbGUiLCJfem9kIiwiRHJhZnQiLCJwcm9wZXJ0aWVzIiwic2NoZW1hIiwieiIsIm9iamVjdCIsImxpdGVyYWwiLCJjcmVhdG9yIiwiaWQiLCJzdHJpbmciLCJuYW1lIiwicGhvdG9VcmwiLCJvcHRpb25hbCIsInRpdGxlIiwibWluIiwiZGVzY3JpcHRpb24iLCJzcGVjcyIsImFueSIsInNsdWciLCJyZWdleCIsImNvbnRlbnQiLCJsYXN0TW9kaWZpZWRCeSIsImNhdGVnb3JpZXMiLCJhcnJheSIsInRhZ3MiLCJwdWJsaWNhdGlvbkRhdGUiLCJkYXRlIiwiaXNGZWF0dXJlZCIsImJvb2xlYW4iLCJzdGF0ZSIsImVudW0iLCJsYW5ndWFnZSIsInBpY3R1cmUiLCJvd25lciIsImNsb25lZCIsInVzZXIiLCJ1aWQiLCJjcmVhdGVkIiwibnVtYmVyIiwiYWkiLCJ0aW1lQ3JlYXRlZCIsInRpbWVVcGRhdGVkIiwic2F2ZSIsInJlc3BvbnNlIiwiZ2V0UHJvcGVydGllcyIsInNldCIsIkl0ZW0iLCJ2YWx1ZSIsIktCT2JqZWN0cyIsIl9hcGkiLCJfc3RhcnR1cCIsIl9zZXNzaW9uIiwiYXBpIiwicGFyZW50IiwidW5kZWZpbmVkIiwiS2JPYmplY3QiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsInNlY3Rpb25zIiwiTWFwIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsIml0ZW1zIiwiY29uc29sZSIsIndhcm4iLCJzZXRJdGVtcyIsImZvckVhY2giLCJzZWN0aW9uIiwiYWRkIiwic2VjdGlvbklkIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsImJlYXJlciIsInBvc3QiLCJzdGF0dXMiLCJFcnJvciIsImVycm9yIiwiYXNzaWdubWVudCIsInRyaWdnZXIiLCJkYXNoYm9hcmQiLCJsaW5rIiwiS0JDb2xsZWN0aW9uIiwiS0JQcm92aWRlciIsIktCSXRlbSIsIm1vZGVsIiwibGlzdCIsImxvYWQiLCJnZXQiLCJoYXJkY29kZWQiLCJjcmVhdGUiLCJlZGl0IiwicHV0IiwiZGVsZXRlIl0sInNvdXJjZXMiOlsiLy9jb2xsZWN0aW9uLnRzLyIsIi8vZHJhZnQtY29sbGVjdGlvbi50cy8iLCIvL2RyYWZ0LWl0ZW0udHMvIiwiLy9pdGVtLnRzLyIsIi8va2Itb2JqZWN0cy9jb2xsZWN0aW9uLnRzIiwiLy9rYi1vYmplY3RzL2l0ZW0udHMiLCIvL2tiL2NvbGxlY3Rpb24udHMiLCIvL2tiL2l0ZW0udHMiLCIvL2tiL3Byb3ZpZGVyLnRzIiwiLy9wcm92aWRlci50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFNBQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFBT0csUUFBUyxTQUFRSixXQUFBLENBQUFLLFVBQXFDO1lBQzdFQyxZQUFZQyxJQUFVO2NBQ3JCLEtBQUssQ0FBQztnQkFDTEMsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCQyxRQUFRLEVBQUVOLFNBQUEsQ0FBQU8sZ0JBQWdCO2dCQUMxQkMsSUFBSSxFQUFFVCxLQUFBLENBQUFVLE9BQU87Z0JBQ2JDLElBQUksRUFBRSxVQUFVO2dCQUNoQixHQUFHTjtlQUNILENBQUM7WUFDSDs7VUFD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