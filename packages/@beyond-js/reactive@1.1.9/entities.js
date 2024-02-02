System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.9/settings", "@beyond-js/reactive@1.1.9/model", "@beyond-js/reactive@1.1.9/database", "@beyond-js/kernel@0.1.9/core", "dexie@3.2.4", "@beyond-js/events@0.0.6/events", "uuid@9.0.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, TCustomAdapter, IConfig, IResponseAdapter, Collection, CollectionLocalProvider, Book, Item, IItem, LocalProvider, CollectionProvider, ItemProvider, RegistryFactory, StoreRecords, __beyond_pkg, hmr;
  _export({
    TCustomAdapter: void 0,
    IConfig: void 0,
    IResponseAdapter: void 0,
    Collection: void 0,
    CollectionLocalProvider: void 0,
    Book: void 0,
    Item: void 0,
    IItem: void 0,
    LocalProvider: void 0,
    CollectionProvider: void 0,
    ItemProvider: void 0,
    RegistryFactory: void 0,
    StoreRecords: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive119Settings) {
      dependency_1 = _beyondJsReactive119Settings;
    }, function (_beyondJsReactive119Model) {
      dependency_2 = _beyondJsReactive119Model;
    }, function (_beyondJsReactive119Database) {
      dependency_3 = _beyondJsReactive119Database;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_dexie2) {
      dependency_5 = _dexie2;
    }, function (_beyondJsEvents006Events) {
      dependency_6 = _beyondJsEvents006Events;
    }, function (_uuid2) {
      dependency_7 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.9"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.9/entities"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/settings', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/reactive/database', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['dexie', dependency_5], ['@beyond-js/events/events', dependency_6], ['uuid', dependency_7]]);
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./adapter/default
      *********************************/
      ims.set('./adapter/default', {
        hash: 351600073,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DefaultAdapter = void 0;
          class DefaultAdapter {
            toClient(data) {
              return Promise.resolve(data);
            }
            fromRemote(data) {
              return Promise.resolve(data);
            }
            fromRemoteList(data) {
              return Promise.resolve(data);
            }
          }
          exports.DefaultAdapter = DefaultAdapter;
        }
      });

      /*******************************
      INTERNAL MODULE: ./adapter/index
      *******************************/

      ims.set('./adapter/index', {
        hash: 1352406609,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResponseAdapter = void 0;
          var _settings = require("@beyond-js/reactive/settings");
          var _default = require("./default");
          var _legacy = require("./legacy");
          class ResponseAdapter {
            static get(parent, adapters) {
              adapters = adapters ? adapters : _settings.ReactiveConfig.adapter;
              const Adapter = adapters === 'default' ? _default.DefaultAdapter : _legacy.LegacyAdapter;
              return new Adapter(parent);
            }
          }
          exports.ResponseAdapter = ResponseAdapter;
        }
      });

      /***********************************
      INTERNAL MODULE: ./adapter/interface
      ***********************************/

      ims.set('./adapter/interface', {
        hash: 2454168762,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************
      INTERNAL MODULE: ./adapter/legacy
      ********************************/

      ims.set('./adapter/legacy', {
        hash: 2991999099,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LegacyAdapter = void 0;
          class LegacyAdapter {
            #parent;
            constructor(parent) {
              this.#parent = parent;
            }
            toClient({
              error,
              data
            } = {}) {
              if (error) {
                return {
                  status: false,
                  error: {
                    message: error
                  }
                };
              }
              return {
                status: true,
                data
              };
            }
            fromRemote(response) {
              const {
                status,
                data,
                error
              } = response;
              if (!status) throw error ?? 'ERROR_DATA_QUERY';
              return data;
            }
            fromRemoteList(data) {
              return Promise.resolve(data);
            }
          }
          exports.LegacyAdapter = LegacyAdapter;
        }
      });

      /*****************************
      INTERNAL MODULE: ./cache/index
      *****************************/

      ims.set('./cache/index', {
        hash: 4043341357,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CacheManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class CacheManager extends _model.ReactiveModel {}
          exports.CacheManager = CacheManager;
        }
      });

      /**********************************
      INTERNAL MODULE: ./collection/index
      **********************************/

      ims.set('./collection/index', {
        hash: 1891352647,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Collection = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _localProvider = require("./local-provider");
          var _publish = require("./publish");
          var _load = require("./load");
          var _adapter = require("../adapter");
          /*bundle */
          class Collection extends _model.ReactiveModel {
            counters = {};
            total = 0;
            next;
            db;
            item;
            #items = [];
            localdb = true;
            #elements = new Map();
            get elements() {
              return this.#elements;
            }
            get items() {
              return this.#items;
            }
            get isOnline() {
              return !this.localProvider ? true : this.localProvider.isOnline;
            }
            set items(value) {
              if (!Array.isArray(value)) {
                return;
              }
              this.#items = value;
              this.triggerEvent();
            }
            #localProvider;
            get localProvider() {
              return this.#localProvider;
            }
            #saveManager;
            #loadManager;
            #provider;
            get provider() {
              return this.#provider;
            }
            sortBy = 'id';
            sortDirection = 'asc';
            #responseAdapter;
            get responseAdapter() {
              return this.#responseAdapter;
            }
            #initialSpecs;
            constructor(specs) {
              super();
              const {
                provider,
                storeName,
                db,
                localdb,
                item
              } = specs;
              this.#initialSpecs = specs;
              if (storeName) this.storeName = storeName;
              if (db) this.db = db;
              if (localdb) this.localdb = localdb;
              if (item) this.item = item;
              if (provider) {
                if (typeof provider !== 'function') {
                  throw new Error('Provider must be a class object');
                }
                this.#provider = new provider();
              }
              this.reactiveProps(['next']);
              this.init();
            }
            init() {
              const getProperty = property => {
                return this[property];
              };
              const setProperty = (property, value) => this[property] = value;
              const bridge = {
                get: getProperty,
                set: setProperty
              };
              this.#responseAdapter = _adapter.ResponseAdapter.get(this, this.#initialSpecs?.adapter);
              this.#localProvider = new _localProvider.CollectionLocalProvider(this, bridge);
              this.#saveManager = new _publish.CollectionSaveManager(this, bridge);
              this.#loadManager = new _load.CollectionLoadManager(this, bridge);
              this.#localProvider.on('items.changed', () => {
                this.#listenItems();
              });
              this.localProvider.init();
              super.initialise();
            }
            #listenItems = async () => {
              if (!this.localdb) return;
              this.#items = await this.#loadManager.processEntries(this.#localProvider.items);
              this.trigger('change');
            };
            setOffline = value => this.localProvider.setOffline(value);
            setItems(values) {
              this.#items = values;
            }
            async store() {
              await this.#localProvider.init();
              return this.#localProvider.store;
            }
            async set(data) {
              const {
                items
              } = data;
              delete data.item;
              await super.set(data);
              if (!items) return;
              items.forEach(item => {
                if (item.id) this.#elements.set(item.id, item);
              });
            }
            async delete(ids) {
              try {
                if (this.#localProvider) await this.#localProvider.softDelete(ids);
                if (this.provider) {
                  await this.provider.deleteItems(ids);
                }
              } catch (e) {
                console.error(e);
              }
            }
            load(args) {
              return this.#loadManager.load(args);
            }
            localLoad(args) {
              return this.#loadManager.localLoad(args);
            }
            filter = args => this.#loadManager.filter(args);
            save = (args, init) => this.#saveManager.save(args, init);
            sync = args => this.#saveManager.sync(args);
            publish = args => this.#saveManager.publish(args);
            toSync = () => this.#saveManager.toSync();
            async setEntries(entries) {
              await this.save(entries, true);
              const items = await this.#loadManager.processEntries(entries, true);
              items.forEach(item => this.#elements.set(item.id, item));
              this.#items = items;
              this.trigger('change');
              return items;
            }
          }
          exports.Collection = Collection;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./collection/interfaces/ICollection
      ***************************************************/

      ims.set('./collection/interfaces/ICollection', {
        hash: 3719123022,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*********************************
      INTERNAL MODULE: ./collection/load
      *********************************/

      ims.set('./collection/load', {
        hash: 3983538747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionLoadManager = void 0;
          var _factory = require("../registry/factory");
          class CollectionLoadManager {
            filter;
            #localProvider;
            #provider;
            #parentBridge;
            #parent;
            #registry;
            #adapter;
            get parent() {
              return this.#parent;
            }
            remoteData = [];
            constructor(parent, parentBridge) {
              this.#parent = parent;
              this.#parentBridge = parentBridge;
              this.#adapter = this.#parent.responseAdapter;
              this.init();
            }
            init() {
              this.#localProvider = this.#parentBridge.get('localProvider');
              this.#provider = this.#parentBridge.get('provider');
              this.#registry = _factory.RegistryFactory.get(this.#parentBridge.get('storeName'));
              if (this.#localProvider) this.#parent.customFilter = this.#localProvider?.customFilter;
            }
            #localLoad = async params => {
              if (!this.#localProvider || !this.#parentBridge.get('localdb')) return [];
              const localData = (await this.#localProvider.load(params)) ?? {
                data: []
              };
              const newItems = await this.processEntries(localData.data);
              let items = params.update === true ? this.parent.items.concat(newItems) : newItems;
              const properties = {
                localLoaded: true,
                fetching: false,
                total: localData.total ?? 0,
                next: !!localData.next,
                items
              };
              if (localData.next) properties.next = localData.next;
              this.#parent.loaded = true;
              this.parent.set(properties);
              return this.#adapter.toClient({
                data: items
              });
            };
            #page = 1;
            #remoteElements = [];
            localLoad = async (params = {}) => {
              try {
                return this.#localLoad(params);
              } catch (e) {
                console.error(e);
              }
            };
            load = async (params = {}) => {
              try {
                this.#parent.fetching = true;
                const {
                  next
                } = this.parent;
                let {
                  start = 0,
                  update
                } = params;
                params.limit = params.limit ?? 30;
                start = update === true && next ? next : start;
                if (update) {
                  this.#page++;
                  params.start = start;
                }
                const localResponse = await this.#localLoad(params);
                if (!this.#parent.isOnline || !this.#provider) return localResponse;
                const {
                  properties,
                  items
                } = await this.#remoteLoad(params);
                this.parent.set(properties);
                return this.#adapter.toClient({
                  data: items
                });
              } catch (exc) {
                console.error(exc);
                return this.#adapter.toClient({
                  error: exc
                });
              } finally {
                this.#parent.fetching = false;
                this.#parent.fetched = true;
                this.#parent.landed = true;
              }
            };
            #remoteLoad = async params => {
              const response = await this.#provider.list(params);
              const data = this.#adapter.fromRemote(response);
              const items = await this.processRemoteEntries(data);
              this.remoteData = response;
              this.#remoteElements = params.update === true ? this.#remoteElements.concat(items) : items;
              const properties = {
                items: this.#remoteElements,
                next: data.next,
                loaded: true,
                fetching: false,
                total: data.total ?? 0
              };
              return {
                properties,
                items
              };
            };
            async processRemoteEntries(data) {
              if (!data.entries && !data.items) {
                throw new Error('The list method must return an object with an entries property');
              }
              const elements = data.items ? data.items : data.entries;
              if (data.deletedEntries) {
                // todo: unify it in recordsFactory
                this.#localProvider.softDelete(data.deletedEntries);
              }
              await this.#localProvider.save(elements);
              return this.setItems(elements);
            }
            async setItems(entries) {
              const promises = [];
              const items = entries.map(record => {
                const item = new this.parent.item({
                  id: record.id,
                  properties: record
                });
                promises.push(item.set(record));
                return item;
              });
              await Promise.all(promises);
              items.forEach((item, index) => {
                item.set(entries[index], true);
              });
              return items;
            }
            /**
             *
             * @param entries
             * @param updateLocalItems
             * @returns
             */
            processEntries = async (entries, updateLocalItems = false) => {
              //	this.#registry.registerList(this.#parentBridge.get('storeName'), entries);
              const promises = [];
              const items = entries.map(record => {
                const specs = {
                  id: record.id
                };
                if (updateLocalItems) specs.properties = record;
                const item = new this.parent.item(specs);
                promises.push(item.set(record));
                return item;
              });
              await Promise.all(promises);
              items.forEach((item, index) => {
                item.set(entries[index], updateLocalItems);
              });
              return items;
            };
            remoteLoad = async params => {
              const response = await this.#provider.load(params);
              if (!response.status) throw 'ERROR_DATA_QUERY';
              return response.data;
            };
          }
          exports.CollectionLoadManager = CollectionLoadManager;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./collection/local-provider/index
      *************************************************/

      ims.set('./collection/local-provider/index', {
        hash: 416299060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionLocalProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _database = require("@beyond-js/reactive/database");
          var _factory = require("../../registry/factory");
          var _saver = require("./saver");
          var _loader = require("./loader");
          /*bundle*/
          class CollectionLocalProvider extends _model.ReactiveModel {
            #isOnline = globalThis.navigator.onLine;
            #offline;
            #database;
            #storeName;
            #databaseName;
            #loadManager;
            #exists = false;
            #found = false;
            #db;
            #registryFactory;
            #parent;
            #saveManager;
            #localdb;
            #store;
            get store() {
              return this.#store;
            }
            #apply = true;
            get apply() {
              return this.#apply;
            }
            /**
             * Defines if the collection is using a local database or not.
             */
            #active;
            get active() {
              return this.#active;
            }
            #items = [];
            get items() {
              return this.#items;
            }
            #setItems = items => {
              this.#items = items;
            };
            get isOnline() {
              return this.#isOnline && !this.#offline && !localStorage.getItem('reactive.offline');
            }
            constructor(parent, bridge) {
              super();
              const {
                db,
                storeName
              } = parent;
              this.#parent = parent;
              this.localdb = bridge.get('localdb');
              if (!this.localdb) {
                this.#apply = false;
                return;
              }
              if (db) this.#registryFactory = _factory.RegistryFactory.get(db);
              this.#databaseName = db;
              this.#storeName = storeName;
              globalThis.addEventListener('online', this.handleConnection);
              globalThis.addEventListener('offline', this.handleConnection);
              this.#loadManager = new _loader.LocalProviderLoader(this, {
                store: this.#store,
                setItems: this.#setItems
              });
            }
            setOffline(value) {
              this.#offline = value;
              this.triggerEvent();
            }
            #promiseInit;
            init = async () => {
              try {
                if (!this.#apply) {
                  this.ready = true;
                  return;
                }
                if (this.#promiseInit) return this.#promiseInit;
                this.#promiseInit = new _core.PendingPromise();
                if (!this.#databaseName || !this.#storeName) {
                  this.#active = false;
                  this.#promiseInit.resolve();
                  return;
                }
                const database = await _database.DBManager.get(this.#databaseName);
                this.#database = database;
                this.#store = database.db[this.#storeName];
                if (!this.#store) {
                  throw new Error(`The store ${this.#storeName} does not exists in the database ${this.#databaseName}`);
                }
                this.#saveManager = new _saver.LocalProviderSaver(this, {
                  registryFactory: this.#registryFactory,
                  storeName: this.#storeName,
                  database: this.#database
                });
                this.ready = true;
                this.#promiseInit.resolve();
              } catch (e) {
                console.error(e);
              }
            };
            handleConnection = () => this.triggerEvent();
            async upsert(data, originalData) {
              if (!this.#apply) return;
              return this.#database.db.transaction('rw', this.store, async () => {
                const instanceIdToIdMap = new Map();
                data.forEach(item => {
                  instanceIdToIdMap.set(item.instanceId, item.id);
                });
                await this.store.bulkPut(data);
              });
            }
            async softDelete(ids) {
              if (!this.#apply) return;
              if (!Array.isArray(ids)) {
                console.error('Expected an array of items for soft deletion');
                return {
                  status: false,
                  data: []
                };
              }
              try {
                const records = await this.store.bulkGet(ids);
                const existingRecords = records.filter(record => record !== undefined);
                if (!existingRecords.length) return;
                // // Prepare items for bulk update
                const itemsToUpdate = existingRecords.map(record => ({
                  ...record,
                  isDeleted: 1
                }));
                // // Perform bulk update
                await this.#store.bulkPut(itemsToUpdate);
                return true;
              } catch (error) {
                console.error('Error occurred while performing a soft delete:', error);
                return {
                  status: false,
                  error: error.message
                };
              }
            }
            save = data => this.#saveManager.save(data);
            saveAll = (items, storeName) => this.#saveManager.saveAll(items, storeName);
            load = params => this.#loadManager.load(params);
          }
          exports.CollectionLocalProvider = CollectionLocalProvider;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./collection/local-provider/loader
      **************************************************/

      ims.set('./collection/local-provider/loader', {
        hash: 1406682736,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LocalProviderLoader = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _dexie = require("dexie");
          class LocalProviderLoader {
            #parent;
            #promiseLoad;
            #params;
            #listItems = new Map();
            #total;
            #page = 0;
            #ids = new Set();
            #conditions = ['or'];
            #setItems;
            #customWhere;
            #defaultWhere = store => store.orderBy('id');
            #currentLimit;
            #currentOffset;
            constructor(parent, parentPrivateProps) {
              this.#parent = parent;
              this.#setItems = parentPrivateProps.setItems;
            }
            #quantity = 0;
            async load(params) {
              if (!this.#parent.apply) return;
              const isSame = JSON.stringify(this.#params) === JSON.stringify(params);
              if (isSame || this.#promiseLoad) return this.#promiseLoad;
              this.#promiseLoad = new _core.PendingPromise();
              await this.#parent.init();
              return this.#performLoad(params);
            }
            async #performLoad(params) {
              try {
                if (!this.#total) this.#total = await this.#parent.store.count();
                let limit = params.limit ?? 30;
                const totalPages = Math.ceil(this.#total / limit);
                if (totalPages < this.#page) {
                  this.#resolvePromiseLoad();
                  return;
                }
                const live = (0, _dexie.liveQuery)(this.where(params, limit));
                this.#page++;
                return this.#subscribeToQuery(live, params, totalPages);
              } catch (error) {
                console.error('Error al cargar los elementos del store:', error);
                return {
                  status: false,
                  data: []
                };
              }
            }
            where = (params, limit) => {
              return async () => {
                let store = this.#parent.store;
                const {
                  sortBy
                } = params;
                const offset = (this.#page - 1) * limit;
                let specs = {
                  ...params
                };
                if (specs.hasOwnProperty('where')) {
                  specs = {
                    ...specs,
                    ...specs.where
                  };
                  delete specs.where;
                }
                const indexes = store.schema.indexes.map(index => index.name);
                Object.keys(specs).forEach(key => {
                  !indexes.includes(key) && delete specs[key];
                });
                const collection = Object.keys(specs).length === 0 ? store : store.where(specs);
                let query = collection;
                this.#currentLimit = limit;
                this.#currentOffset = offset;
                /**
                 * @todo: the isDeleted field must be set as 0 by default.
                 */
                if (sortBy) await query.sortBy(sortBy);
                query = query.filter(i => i.isDeleted !== 1);
                const values = await query.offset(offset).limit(limit).toArray();
                return values;
              };
            };
            customFilter = callback => {
              this.#customWhere = callback;
              return this.#parent;
            };
            async #subscribeToQuery(liveQuery, params, totalPages) {
              let currentPage;
              liveQuery.subscribe({
                next: async items => {
                  const response = await this.#handleQueryResponse(items, params, totalPages, currentPage);
                  this.#resolvePromiseLoad(response);
                },
                error: err => {
                  console.error(err);
                  this.#resolvePromiseLoad({
                    status: false,
                    data: []
                  });
                }
              });
              return this.#promiseLoad;
            }
            /**
             *
             * @param items
             * @param params
             * @param totalPages
             * @param currentPage
             * @returns
             */
            async #handleQueryResponse(items, params, totalPages, currentPage) {
              let sameQuery;
              this.#quantity++;
              if (params.sortBy) items.sort((a, b) => a[params.sortBy] - b[params.sortBy]);
              if (!globalThis.data) globalThis.data = []; // ?
              if (currentPage == this.#page) sameQuery = true;else currentPage = this.#page;
              if (sameQuery && items.length === this.#parent.items.length) return;
              const currentMap = new Set();
              items.forEach(item => {
                this.#listItems.set(item.id, item);
                currentMap.add(item.id);
              });
              if (sameQuery) this.#cleanupItems(currentMap);
              this.#setItems([...this.#listItems.values()]);
              items.forEach(item => this.#ids.add(item.id));
              this.#parent.trigger('items.changed');
              return {
                status: true,
                data: items,
                total: this.#total,
                next: this.#page + 1 >= totalPages ? undefined : true
              };
            }
            #cleanupItems(currentMap) {
              [...this.#listItems.keys()].forEach(id => {
                if (!currentMap.has(id)) {
                  this.#listItems.delete(id);
                }
              });
            }
            #resolvePromiseLoad(response = {}) {
              if (!this.#promiseLoad) return;
              this.#promiseLoad.resolve(response);
              this.#promiseLoad = null;
            }
          }
          exports.LocalProviderLoader = LocalProviderLoader;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./collection/local-provider/saver
      *************************************************/

      ims.set('./collection/local-provider/saver', {
        hash: 1171525252,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LocalProviderSaver = void 0;
          var _registry = require("../../registry");
          class LocalProviderSaver {
            #batches = 200;
            #parent;
            #registryFactory;
            #storeName;
            #database;
            constructor(parent, parentBridge) {
              this.#parent = parent;
              this.#registryFactory = parentBridge.registryFactory;
              this.#storeName = parentBridge.storeName;
              this.#database = parentBridge.database;
            }
            async save(data) {
              const process = (entries, offline = 0) => {
                return entries.map(item => {
                  const record = item.getProperties && typeof item.getProperties === 'function' ? item.getProperties() : item;
                  const toSave = {
                    ...record,
                    offline,
                    instanceId: item.instanceId
                  };
                  return toSave;
                });
              };
              data = process(data, this.#parent.isOnline ? 0 : 1);
              if (!this.#parent.apply) return;
              await this.#registryFactory.init();
              await this.saveAll(data, this.#storeName);
            }
            /**
             * Saves a collection of items to the specified store in batches.
             *
             * @param {Array} items - The items to be saved.
             * @param {string} storeName - The name of the store where items will be saved.
             * @returns {Promise<{ status: boolean, failed?: Array }>} An object containing the status of the operation.
             * If the status is true, all batches have been saved successfully. If the status is false, the failed property contains an array with information about failed batches.
             * Each failed batch object has a status, a reason (if the batch is rejected), an index (the original batch position), and data (the failed batch data).
             * @throws Will throw an error if there's an issue with the Promise.allSettled() call itself.
             */
            async saveAll(items, storeName) {
              if (!this.#parent.apply) return;
              const elements = items.map(item => {
                const registry = new _registry.Registry(storeName);
                if (item.deleted) {
                  registry.isDeleted = 1;
                }
                registry.setValues(item);
                return registry;
              });
              const store = this.#database.db[storeName];
              const promises = [];
              const chunks = [];
              while (elements.length > 0) {
                const batch = elements.splice(0, this.#batches);
                const data = batch.map(item => item.getValues());
                chunks.push(data);
                promises.push(store.bulkPut(data));
              }
              try {
                const results = await Promise.allSettled(promises);
                const mappedFn = (result, index) => ({
                  ...result,
                  index,
                  data: chunks[index]
                });
                const failed = results.map(mappedFn).filter(result => result.status === 'rejected');
                if (!failed.length) return {
                  status: true
                };else {
                  return {
                    status: false,
                    failed
                  };
                }
              } catch (e) {
                return {
                  status: false,
                  failed: e
                };
              }
            }
          }
          exports.LocalProviderSaver = LocalProviderSaver;
        }
      });

      /************************************
      INTERNAL MODULE: ./collection/publish
      ************************************/

      ims.set('./collection/publish', {
        hash: 3613830967,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionSaveManager = void 0;
          class CollectionSaveManager {
            #parent;
            #bridge;
            #localProvider;
            #provider;
            #localdb;
            MAX_RETRIES = 3;
            CHUNK_SIZE = 200;
            #adapter;
            constructor(parent, bridge) {
              this.#parent = parent;
              this.#bridge = bridge;
              this.#adapter = this.#parent.responseAdapter;
              this.init();
            }
            init() {
              this.#localdb = this.#bridge.get('localdb');
              if (this.#localdb) {
                this.#localProvider = this.#bridge.get('localProvider');
              } else {
                console.warn('The collection doesnt use LocalDB');
              }
              this.#provider = this.#bridge.get('provider');
            }
            /**
             *
             * @param data elements to save
             * @param init  lets define if the elements to save will work as a list of elements in the collection when is instanced
             * @returns
             */
            save = async (data = [], init = false) => {
              if (!this.#localdb) return true;
              await this.#localProvider.init();
              await this.#localProvider.save(data);
            };
            publish = async (data = []) => {
              try {
                await this.save(data);
                if (!this.#provider || this.#bridge.get('isOffline')) return;
                const response = await this.#provider.bulkSave(data);
                if (!response.status) throw response.error;
                return this.#adapter.toClient({
                  status: true
                });
              } catch (error) {
                console.error(error);
                return this.#adapter.toClient({
                  error
                });
              }
            };
            // Send chunks with retries
            sendChunk = async chunk => {
              const response = await this.#provider.bulkSave(chunk);
              // Esto es lo que aveces no se ejecuta (el metodo bulkSave del provider tampoco)
              if (response.status) {
                const data = response.data.entries.map(item => ({
                  ...item,
                  offline: 0,
                  instanceId: undefined
                }));
                await this.#localProvider.upsert(data, chunk);
                return {
                  success: true,
                  chunk,
                  response
                };
              }
              return {
                success: false,
                chunk,
                response
              };
            };
            // Split large datasets into smaller chunks
            splitDataIntoChunks = data => {
              const chunks = [];
              for (let i = 0; i < data.length; i += this.CHUNK_SIZE) {
                chunks.push(data.slice(i, i + this.CHUNK_SIZE));
              }
              return chunks;
            };
            sync = async data => {
              await this.#localProvider.init();
              if (!data) data = await this.#parent.localProvider.store.where('offline').equals(1).toArray();
              const chunks = this.splitDataIntoChunks(data);
              const failedChunks = [];
              const successChunks = [];
              for (const [, chunk] of chunks.entries()) {
                const result = await this.sendChunk(chunk);
                if (!result.success) {
                  failedChunks.push(result);
                } else successChunks.push(result);
              }
              this.#bridge.set('items', []);
              await this.#parent.load();
              if (failedChunks.length) {
                const message = failedChunks.length === chunks.length ? 'FAILED_SYNC' : 'INCOMPLETE_SYNC';
                return this.#adapter.toClient({
                  data: {
                    failed: failedChunks,
                    success: successChunks,
                    error: message
                  }
                });
              }
              return this.#adapter.toClient({
                data: successChunks
              });
            };
            toSync = async () => {
              try {
                await this.#localProvider.init();
                return this.#localProvider.store.where('offline').equals(1).toArray();
              } catch (e) {
                console.error(e);
              }
            };
          }
          exports.CollectionSaveManager = CollectionSaveManager;
        }
      });

      /************************************
      INTERNAL MODULE: ./example/collection
      ************************************/

      ims.set('./example/collection', {
        hash: 3039560133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./example/index
      *******************************/

      ims.set('./example/index', {
        hash: 1295999388,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Book = void 0;
          var _index = require("../item/index");
          class UserProvider {}
          /*bundle */
          class Book extends _index.Item {
            properties = ['id', 'title', 'author', 'year'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                storeName: 'book',
                db: 'test'
              });
            }
          }
          exports.Book = Book;
        }
      });

      /*************************************
      INTERNAL MODULE: ./interfaces/provider
      *************************************/

      ims.set('./interfaces/provider', {
        hash: 3176939875,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./item/index
      ****************************/

      ims.set('./item/index', {
        hash: 1107818313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _localProvider = require("./local-provider");
          var _save = require("./save");
          var _load = require("./load");
          var _core = require("@beyond-js/kernel/core");
          var _adapter = require("../adapter");
          /*bundle*/
          class Item extends _model.ReactiveModel {
            id;
            #info = new Map();
            /**
             * Represent the data that is stored in the local database
             */
            #localData = new Map();
            localdb = true;
            #provider;
            storeName;
            db;
            localFields = [];
            #ignoredFields = [];
            #skeleton = [];
            localProvider;
            unique = [];
            #saveManager;
            get skeleton() {
              return this.#skeleton;
            }
            __get(property) {
              return this[property];
            }
            get provider() {
              return this.#provider;
            }
            #isDeleted = 0;
            get isDeleted() {
              return !!this.#isDeleted;
            }
            get store() {
              return this.localProvider.store;
            }
            get isOnline() {
              return this.localProvider.isOnline && !localStorage.getItem('reactive.offline');
            }
            get __instanceId() {
              return this.localProvider.__instanceId;
            }
            get isReady() {
              return this.checkReady();
            }
            #loadManager;
            #objectReady = false;
            #promiseReady;
            #initPromise;
            #config;
            #responseAdapter;
            get responseAdapter() {
              return this.#responseAdapter;
            }
            constructor(config = {}) {
              super();
              const {
                db,
                storeName,
                localdb = true
              } = config;
              this.#config = config;
              this.localdb = localdb;
              this.#responseAdapter = _adapter.ResponseAdapter.get(this, this.#config?.adapter);
              if (db) this.db = db;
              if (storeName) this.storeName = storeName;
              if (config.provider) {
                if (typeof config.provider !== 'function') {
                  throw new Error('Provider must be an function');
                }
                this.#provider = new config.provider(this);
              }
              this.on('object.loaded', this.checkReady);
              this.reactiveProps(['found', 'landed']);
              const getProperty = property => this.__get(property);
              const setProperty = (property, value) => this[property] = value;
              const bridge = {
                get: getProperty,
                set: setProperty
              };
              this.localProvider = new _localProvider.LocalProvider(this, bridge);
              this.#saveManager = new _save.ItemSaveManager(this, bridge);
              this.#loadManager = new _load.ItemLoadManager(this, bridge);
              this.save = this.save.bind(this);
              if (this.db && this.storeName) this.init(config);
            }
            async initialise() {
              this.init(this.#config);
            }
            async init(config) {
              try {
                let id;
                if (this.#initPromise) return this.#initPromise;
                this.#initPromise = new _core.PendingPromise();
                if (config.id) id = config.id;
                await this.localProvider.init(id);
                if (this.#skeleton && this.#skeleton.length > 0) {
                  this.properties = this.#skeleton;
                }
                if (config.properties) this.set(config.properties, true);
                this.ready = true;
                this.#initPromise.resolve(true);
                this.trigger('object.loaded');
                this.set(this.localProvider.registry.values);
              } catch (e) {
                console.error('error initializing', e);
              }
            }
            /**
             * Validates if the object is ready to be used
             *
             * Is implemented internally by methods such as publish or load to avoid errors in cases
             * where could it be called before the object is ready.
             *
             * @returns {Promise<boolean>} A promise that resolves when the object is ready
             */
            checkReady = () => {
              if (this.ready) {
                return this.ready;
              }
              if (this.#promiseReady) return this.#promiseReady;
              this.#promiseReady = new _core.PendingPromise();
              if (this.objectReady) this.#promiseReady.resolve(this.#objectReady);
              const onReady = () => {
                this.#objectReady = true;
                this.#promiseReady.resolve(this.#objectReady);
              };
              this.on('object.loaded', onReady);
              return this.#promiseReady;
            };
            setOffline = value => this.localProvider.setOffline(value);
            /**
             * Set the data of the object
             *
             * @param data The data to set
             * @param init If true, the data will be stored in the local database
             */
            x;
            async set(data, init = false) {
              await this.isReady;
              if (init && this.localdb) {
                this.#localData = new Map(Object.entries(data));
                this.localProvider.save(data);
              }
              this.properties.forEach(property => {
                if (typeof property === 'object') {
                  if (data.hasOwnProperty(property.name)) {}
                  return;
                }
                if (data.hasOwnProperty(property)) this[property] = data[property];
              });
              this.triggerEvent();
            }
            /**
             * @deprecated Please use getProperties instead
             * @see ReactiveModel.properties
             */
            getValues() {
              const values = {};
              const toIterate = this.skeleton.length ? this.skeleton : this.properties;
              toIterate.forEach(field => {
                if (this.hasOwnProperty(field)) values[field] = this[field];
              });
              return values;
            }
            getPropertyNames() {
              return this.properties;
            }
            save(data) {
              return this.#saveManager.save(data);
            }
            sync() {
              return this.#saveManager.sync();
            }
            forceSync() {
              return this.#saveManager.forceSync();
            }
            publish(data) {
              return this.#saveManager.publish(data);
            }
            load(params) {
              return this.#loadManager.load(params);
            }
            async delete() {
              try {
                this.#isDeleted = 1;
                if (this.localProvider) await this.localProvider.delete();
                if (this.provider) await this.provider.delete(this.id);
                this.triggerEvent();
                return true;
              } catch (e) {
                console.error('error', e);
              }
            }
          }
          exports.Item = Item;
        }
      });

      /****************************************
      INTERNAL MODULE: ./item/interfaces/config
      ****************************************/

      ims.set('./item/interfaces/config', {
        hash: 48964159,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************
      INTERNAL MODULE: ./item/interfaces/item
      **************************************/

      ims.set('./item/interfaces/item', {
        hash: 983423751,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************
      INTERNAL MODULE: ./item/load
      ***************************/

      ims.set('./item/load', {
        hash: 1014131453,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemLoadManager = void 0;
          class ItemLoadManager {
            #parent;
            #localProvider;
            #provider;
            #getProperty;
            #bridge;
            #adapter;
            ready;
            constructor(parent, bridge) {
              this.#parent = parent;
              this.#getProperty = bridge.get;
              this.#bridge = bridge;
              this.#adapter = this.#parent.responseAdapter;
              this.init();
            }
            init = () => {
              this.#localProvider = this.#getProperty('localProvider');
              this.#provider = this.#getProperty('provider');
              this.ready = true;
            };
            /**
             * Load the data from the provider and save it in the local database
             *
             * The method returns the data from the provider, if the provider is not set, it returns undefined, if
             * the provider method returns more data than the properties defined in the object, the data will be
             * available in the response.data object returned by the method.
             *
             * @param id
             * @returns
             */
            load = async params => {
              try {
                await this.#getProperty('checkReady')();
                if (!params) {
                  params = {
                    id: this.#parent.id
                  };
                }
                const localdb = await this.#getProperty('localdb');
                const localProvider = this.#getProperty('localProvider');
                if (!params && this.#parent.id) params = {
                  id: this.#parent.id
                };
                if (localdb && localProvider) {
                  const localData = await localProvider.load(params);
                  if (localData?.status) {
                    this.#parent.set(localData.data, true);
                    if (localData.data.__instanceId) this.#localProvider.__instanceId = localData.data.__instanceId;
                    if (!this.#localProvider.__instanceId) this.#localProvider.__instanceId = this.#localProvider.registry.__instanceId;
                  }
                }
                if (localProvider && !localProvider.isOnline) return {
                  status: true
                };
                if (!this.#provider) return;
                const remoteData = await this.remoteLoad(params);
                if (!remoteData) {
                  this.#parent.found = false;
                  return this.#adapter.toClient();
                }
                this.#parent.found = true;
                this.#parent.set(remoteData);
                if (localdb) {
                  let same = true;
                  this.#parent.landed = true;
                  Object.keys(remoteData).forEach(key => {
                    let original = localProvider.registry.values;
                    if (original[key] !== remoteData[key]) same = false;
                  });
                  if (!same) {
                    const id = !isNaN(this.#parent.id) ? parseInt(this.#parent.id) : this.#parent.id;
                    await this.#localProvider.save({
                      ...remoteData,
                      id,
                      __instanceId: this.#localProvider.__instanceId
                    });
                  }
                }
                return this.#adapter.toClient({
                  data: remoteData
                });
              } catch (exc) {
                throw exc;
              } finally {
                this.#parent.fetching = false;
              }
            };
            remoteLoad = async params => {
              // TODO: CHANGE TO LOAD
              if (!this.#parent.isOnline) return;
              /**
               * The data method is validated to support old providers.
               */
              let loadMethod = this.#provider.data ? this.#provider.data.bind(this.#provider) : this.#provider.load.bind(this.#provider);
              if (typeof loadMethod !== 'function') {
                console.error('The provider object is not defined correctly. It must have a data method');
                return;
              }
              const response = await loadMethod(params);
              return this.#adapter.fromRemote(response);
            };
          }
          exports.ItemLoadManager = ItemLoadManager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./item/local-provider
      *************************************/

      ims.set('./item/local-provider', {
        hash: 3914322351,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LocalProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _database = require("@beyond-js/reactive/database");
          var _factory = require("../registry/factory");
          /*bundle*/
          class LocalProvider extends _model.ReactiveModel {
            #isOnline = globalThis.navigator.onLine;
            #store;
            get store() {
              return this.#store;
            }
            #offline;
            #isNew = false;
            #database;
            #storeName;
            #databaseName;
            #originalData;
            #exists = false;
            __instanceId;
            get originalData() {
              return this.#originalData;
            }
            #db;
            get isOnline() {
              return this.#isOnline && !this.#offline && !localStorage.getItem('reactive.offline');
            }
            #parent;
            #getProperty;
            /**
             * @type {RegistryFactory}
             */
            #factoryRegistry;
            /**
             * @type {Registry} Database Record
             *
             */
            #registry;
            #localdb;
            get localdb() {
              return this.#parent.localdb;
            }
            #bridge;
            get registry() {
              return this.#registry;
            }
            #apply;
            constructor(parent, bridge) {
              super();
              this.#getProperty = bridge.get;
              const {
                db,
                storeName
              } = parent;
              this.__id = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
              this.#parent = parent;
              this.#apply = db && storeName;
              this.#databaseName = db;
              this.#storeName = storeName;
              this.#bridge = bridge;
              this.#localdb = bridge.get('localdb');
              this.#factoryRegistry = _factory.RegistryFactory.get(db, this.#localdb);
              this.load = this.load.bind(this);
            }
            setOffline(value) {
              this.#offline = value;
              this.triggerEvent();
            }
            init = async (id = undefined) => {
              try {
                if (this.#localdb) {
                  const database = await _database.DBManager.get(this.#databaseName);
                  this.#database = database;
                  this.#store = database.db[this.#storeName];
                }
                this.#isNew = !!id;
                return this.#getRegistry(id);
              } catch (e) {
                console.error(e);
              }
            };
            deepCompare(obj1, obj2) {
              const keys1 = Object.keys(obj1);
              const keys2 = Object.keys(obj2);
              if (keys1.length !== keys2.length) {
                return false;
              }
              for (let key of keys1) {
                const val1 = obj1[key];
                const val2 = obj2[key];
                const areObjects = this.isObject(val1) && this.isObject(val2);
                if (areObjects && !this.deepCompare(val1, val2) || !areObjects && val1 !== val2) {
                  return false;
                }
              }
              return true;
            }
            isObject(object) {
              return object != null && typeof object === 'object';
            }
            /**
             * todo: @jircdev replace with the model method
             * @param data \
             * @returns
             */
            #isUnpublished(data) {
              const properties = Object.keys(data);
              const toCompare = {
                ...this.#registry.values
              };
              const areEqual = this.deepCompare(toCompare, data);
              return !areEqual;
            }
            async load(params = {}) {
              try {
                let id = params.id;
                //TODO: review @julio
                id = id ?? this.registry.values?.id;
                if (!id) throw 'ID IS REQUIRED';
                await this.#getRegistry(id);
                this.#parent.localLoaded = true;
                this.#parent.set(this.#registry.values);
                return {
                  status: true,
                  data: this.#registry.values
                };
              } catch (e) {
                console.error(e);
                return e;
              }
            }
            /**
             * Retrieves the record from the local database store
             *
             * Also creates a listener for the record changes
             * @param id id of the record
             * @returns
             */
            #getRegistry = async id => {
              let registry = await this.#factoryRegistry.get(this.#storeName, id);
              let data = {
                id
              };
              let found = !!registry;
              if (found) {
                this.#parent.set(registry.values);
                found = true;
                this.#registry = registry;
                this.#registry.on('change', this.#listenRegistry.bind(this));
                this.#isNew = this.#registry?.values?.isNew ? true : false;
                return;
              }
              if (!registry && this.localdb && id) {
                const store = this.#store;
                const localData = await store.get(id);
                if (localData) data = localData;
                found = true;
              }
              if (found) {
                this.#parent.found = found;
                this.#parent.loaded = true;
              }
              registry = this.#factoryRegistry.create(this.#storeName, data);
              this.#registry = registry;
              this.#registry.on('change', this.#listenRegistry.bind(this));
              this.#isNew = this.#registry?.values?.isNew ? true : false;
              return this.#registry.values;
            };
            #listenRegistry() {
              this.#parent.set(this.#registry.values);
            }
            async save(data) {
              try {
                if (!this.#isUnpublished(data)) return;
                data.offline = this.isOnline ? 0 : 1;
                data.isNew = !this.#isNew ? 0 : 1;
                // Add validation for unique fields
                const duplicated = await this.validateUniqueFields(data);
                if (duplicated.length) return {
                  error: 'duplicated',
                  fields: duplicated
                };
                await this.#update(data);
                return this;
              } catch (e) {
                console.error('error saving', e.message);
              }
            }
            async validateUniqueFields(data) {
              if (!this.localdb) return [];
              if (!this.#getProperty('unique').length) return [];
              const checkPromises = this.#getProperty('unique').map(field => this.#store.where(field).equals(data[field]).count().then(count => {
                if (count) {
                  return field;
                }
                return null;
              }));
              const duplicateFields = (await Promise.all(checkPromises)).filter(field => field !== null);
              return duplicateFields;
            }
            delete = async () => {
              if (!this.#database) return;
              const store = this.#database.db[this.#storeName];
              await store.delete(this.#registry.values.id);
            };
            deleteRegistry = async identifier => {
              const store = this.#database.db[this.#storeName];
              await store.delete(identifier);
              this.triggerEvent();
              return true;
            };
            async #update(data) {
              const updated = this.#registry.setValues(data);
              if (!updated) return;
              const store = this.#database.db[this.#storeName];
              await store.put({
                ...this.#registry.values,
                ...data
              });
              this.triggerEvent();
              return true;
            }
          }
          exports.LocalProvider = LocalProvider;
        }
      });

      /***************************
      INTERNAL MODULE: ./item/save
      ***************************/

      ims.set('./item/save', {
        hash: 4272634791,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemSaveManager = void 0;
          class ItemSaveManager {
            #parent;
            #getProperty;
            #bridge;
            #provider;
            #localProvider;
            #adapter;
            constructor(parent, bridge) {
              this.#parent = parent;
              this.#getProperty = bridge.get;
              this.#bridge = bridge;
              this.#adapter = this.#parent.responseAdapter;
              this.init();
            }
            init() {
              this.#parent.localUpdate = this.localUpdate;
              this.#localProvider = this.#getProperty('localProvider');
              this.#provider = this.#getProperty('provider');
            }
            save = async data => {
              try {
                await this.#getProperty('checkReady')();
                if (data) {
                  await this.#parent.set(data);
                }
                if (!this.#parent.isUnpublished) return;
                const properties = {
                  ...data,
                  ...this.#parent.getProperties()
                };
                properties.isNew = this.#localProvider.registry.isNew;
                properties.__instanceId = this.#localProvider.registry.__instanceId;
                if (this.#parent.isOnline && this.#provider) {
                  const response = await this.#publish(properties);
                  this.#localProvider.registry.setValues(response.data);
                  properties.id = response?.data?.id;
                  this.#adapter.fromRemote(response);
                  this.#localProvider.registry.isNew = false;
                }
                if (this.#localProvider) {
                  await this.#localProvider.save(properties);
                }
                this.#parent.triggerEvent();
                return this.#adapter.toClient();
              } catch (e) {
                return e;
              }
            };
            publish = this.save;
            #publish = async properties => {
              try {
                console.log(0.1);
                if (!this.#provider || !this.#bridge.get('isOnline')) return;
                let props = {
                  ...properties
                };
                console.log(2, props);
                this.#parent.localFields.forEach(field => {
                  delete props[field];
                });
                const response = await this.#provider.publish(props);
                const data = this.#adapter.fromRemote(response);
                await this.#parent.set(data);
                if (this.#localProvider) {
                  this.#localProvider.save(data);
                  if (props.id === this.#localProvider.registry.__instanceId) {
                    this.#localProvider.deleteRegistry(props.id);
                  }
                  this.#localProvider.trigger('change');
                }
                return this.#adapter.toClient({
                  data
                });
              } catch (error) {
                console.error('ERROR PUBLISHING', error);
                return this.#adapter.toClient({
                  error
                });
              }
            };
            sync = () => {
              const provider = this.#getProperty('localProvider');
              if (!provider.registry.values.offline) {
                console.warn('registry already synced');
                return;
              }
              this.#publish(provider.registry.values);
              //const data = this.#getProperty("localProvider").store.where("offline").equals(true).toArray();
            };

            forceSync() {
              const provider = this.#getProperty('localProvider');
              const props = {
                ...provider.registry.values
              };
              this.#parent.localFields.forEach(field => {
                delete props[field];
              });
              this.#provider.publish(props);
            }
            localUpdate = async (data = undefined) => {
              try {
                await this.#getProperty('checkReady')();
                if (data) {
                  this.#parent.set(data);
                }
                const properties = this.#parent.getProperties();
                if (this.#localProvider) {
                  // Update the local data without setting it as 'unpublished'
                  // (thus, it won't be queued for syncing)
                  await this.#localProvider.save(properties);
                }
                this.#parent.triggerEvent();
                return this.#adapter.toClient();
              } catch (e) {
                console.error('error updating locally', e);
              }
            };
          }
          exports.ItemSaveManager = ItemSaveManager;
        }
      });

      /**************************************
      INTERNAL MODULE: ./providers/collection
      **************************************/

      ims.set('./providers/collection', {
        hash: 1203865910,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionProvider = void 0;
          /*bundle*/
          class CollectionProvider {
            list(specs) {}
            publish(props) {}
            load(specs) {}
          }
          exports.CollectionProvider = CollectionProvider;
        }
      });

      /********************************
      INTERNAL MODULE: ./providers/item
      ********************************/

      ims.set('./providers/item', {
        hash: 632847434,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemProvider = void 0;
          /*bundle*/
          class ItemProvider {
            delete(id) {}
            publish(props) {}
            load(specs) {}
          }
          exports.ItemProvider = ItemProvider;
        }
      });

      /**********************************
      INTERNAL MODULE: ./registry/factory
      **********************************/

      ims.set('./registry/factory', {
        hash: 2156111450,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RegistryFactory = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _index = require("./index");
          var _core = require("@beyond-js/kernel/core");
          /**
           *
           */
          class RegistryFactory extends _model.ReactiveModel {
            #stores = new Map();
            #dbName;
            #localdb;
            constructor(dbName, localdb = true) {
              super();
              this.#dbName = dbName;
              this.#localdb = localdb;
              this.init();
            }
            #promiseReady;
            async init() {
              if (this.ready) return true;
              if (this.#promiseReady) return this.#promiseReady;
              this.#promiseReady = new _core.PendingPromise();
              this.#promiseReady.resolve();
              this.#promiseReady = undefined;
              this.ready = true;
            }
            /**
             * Loop a list of items and if they don't exist in memorey, create the registry and add it to the store.
             * @param storeName
             * @param items
             */
            registerList(storeName, items) {
              const registries = items.map(item => {
                if (this.hasItem(storeName, item.id)) {
                  return this.getItem(storeName, item.id);
                }
                return this.create(storeName, item);
              });
            }
            /**
             * Validates if the specified item exists in the specified store.
             *
             *  This method is used by the LocalProvider to know if a item was already loaded or not.
             *  If the item is not loaded, the LocalProvider will load it from the database and pass the data to the Factory
             *  to create the registry in memory
             * @param storeName store name
             * @param id Id of the item to validate if exists or is loaded
             * @returns
             */
            hasItem(storeName, id) {
              return this.#stores.has(storeName) && this.#stores.get(storeName).has(id);
            }
            getItem(storeName, id) {
              if (!this.hasItem(storeName, id)) throw new Error(`Item ${id} does not exists in store ${storeName}`);
              return this.#stores.get(storeName).get(id);
            }
            #getStore(store) {
              if (!this.#stores.has(store)) this.#stores.set(store, new Map());
              return this.#stores.get(store);
            }
            create(storeName, data) {
              const registry = new _index.Registry(storeName, data);
              registry.setValues(data);
              this.#getStore(storeName).set(registry.values.id, registry);
              return registry;
            }
            async get(storeName, id = undefined) {
              // if the store map does not exists, create it
              if (!this.#stores.has(storeName)) this.#stores.set(storeName, new Map());
              // if the registry exists, return it
              if (this.#stores.has(storeName) && this.#stores.get(storeName).has(id)) {
                const registry = this.#stores.get(storeName).get(id);
                return registry;
              }
            }
            async has(storeName, id) {
              if (this.#stores.has(storeName) && this.#stores.get(storeName).has(id)) return true;
            }
            static #dbs = new Map();
            /**
             * Returns a RegistryFactory instance for the specified database name.
             *
             * @param dbName IndexedDB database name
             * @returns
             */
            static get(dbName, localdb) {
              if (this.#dbs.has(dbName)) return this.#dbs.get(dbName);
              const db = new RegistryFactory(dbName, localdb);
              this.#dbs.set(dbName, db);
              return db;
            }
          }
          exports.RegistryFactory = RegistryFactory;
        }
      });

      /********************************
      INTERNAL MODULE: ./registry/index
      ********************************/

      ims.set('./registry/index', {
        hash: 2628742516,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Registry = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _uuid = require("uuid");
          class Registry extends _model.ReactiveModel {
            #values = {};
            get values() {
              return this.#values;
            }
            #id;
            #store;
            #isDeleted;
            #isNew;
            __instanceId;
            get isNew() {
              return this.#isNew;
            }
            set isNew(value) {
              this.#isNew = value;
              this.triggerEvent();
            }
            #keyId;
            get isDeleted() {
              return this.#isDeleted;
            }
            set isDeleted(value) {
              if (value === this.#isDeleted) return;
              this.#isDeleted = value;
              this.triggerEvent();
            }
            constructor(store, data = {
              id: undefined
            }) {
              super();
              const {
                id
              } = data;
              this.#store = store;
              this.#isNew = id === undefined;
              this.#id = id;
              this.__instanceId = data.__instanceId ?? (0, _uuid.v4)();
              if (!id) this.#id = this.__instanceId;
              if (this.#id) this.#values.id = this.#id;
            }
            setValues = data => {
              if (!data) {
                return;
              }
              const props = Object.keys(data);
              let updated = false;
              if (!data.id) data.id = this.#id;
              const newValues = {
                ...this.#values
              };
              props.forEach(property => {
                if (data[property] === newValues[property]) return;
                newValues[property] = data[property];
                updated = true;
              });
              if (data.__instanceId) this.__instanceId = data.instanceId;
              newValues.isDeleted = this.isDeleted === 1 ?? 0;
              this.#values = newValues;
              this.triggerEvent();
              return updated;
            };
            getValues() {
              const values = {
                ...this.#values
              };
              if (this.__instanceId) values.__instanceId = this.__instanceId;
              //		if (this.offline) values.offline = this.offline; // this line may be removed, the offline value must be set by the localProvider
              return values;
            }
          }
          exports.Registry = Registry;
        }
      });

      /********************************
      INTERNAL MODULE: ./registry/store
      ********************************/

      ims.set('./registry/store', {
        hash: 51750468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreRecords = void 0;
          var _model = require("@beyond-js/reactive/model");
          class StoreRecords extends _model.ReactiveModel {}
          exports.StoreRecords = StoreRecords;
          const storeFactory = new StoreRecords();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./adapter/index",
        "from": "TCustomAdapter",
        "name": "TCustomAdapter"
      }, {
        "im": "./adapter/index",
        "from": "IConfig",
        "name": "IConfig"
      }, {
        "im": "./adapter/interface",
        "from": "IResponseAdapter",
        "name": "IResponseAdapter"
      }, {
        "im": "./collection/index",
        "from": "Collection",
        "name": "Collection"
      }, {
        "im": "./collection/local-provider/index",
        "from": "CollectionLocalProvider",
        "name": "CollectionLocalProvider"
      }, {
        "im": "./example/index",
        "from": "Book",
        "name": "Book"
      }, {
        "im": "./item/index",
        "from": "Item",
        "name": "Item"
      }, {
        "im": "./item/interfaces/item",
        "from": "IItem",
        "name": "IItem"
      }, {
        "im": "./item/local-provider",
        "from": "LocalProvider",
        "name": "LocalProvider"
      }, {
        "im": "./providers/collection",
        "from": "CollectionProvider",
        "name": "CollectionProvider"
      }, {
        "im": "./providers/item",
        "from": "ItemProvider",
        "name": "ItemProvider"
      }, {
        "im": "./registry/factory",
        "from": "RegistryFactory",
        "name": "RegistryFactory"
      }, {
        "im": "./registry/store",
        "from": "StoreRecords",
        "name": "StoreRecords"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'TCustomAdapter') && _export("TCustomAdapter", TCustomAdapter = require ? require('./adapter/index').TCustomAdapter : value);
        (require || prop === 'IConfig') && _export("IConfig", IConfig = require ? require('./adapter/index').IConfig : value);
        (require || prop === 'IResponseAdapter') && _export("IResponseAdapter", IResponseAdapter = require ? require('./adapter/interface').IResponseAdapter : value);
        (require || prop === 'Collection') && _export("Collection", Collection = require ? require('./collection/index').Collection : value);
        (require || prop === 'CollectionLocalProvider') && _export("CollectionLocalProvider", CollectionLocalProvider = require ? require('./collection/local-provider/index').CollectionLocalProvider : value);
        (require || prop === 'Book') && _export("Book", Book = require ? require('./example/index').Book : value);
        (require || prop === 'Item') && _export("Item", Item = require ? require('./item/index').Item : value);
        (require || prop === 'IItem') && _export("IItem", IItem = require ? require('./item/interfaces/item').IItem : value);
        (require || prop === 'LocalProvider') && _export("LocalProvider", LocalProvider = require ? require('./item/local-provider').LocalProvider : value);
        (require || prop === 'CollectionProvider') && _export("CollectionProvider", CollectionProvider = require ? require('./providers/collection').CollectionProvider : value);
        (require || prop === 'ItemProvider') && _export("ItemProvider", ItemProvider = require ? require('./providers/item').ItemProvider : value);
        (require || prop === 'RegistryFactory') && _export("RegistryFactory", RegistryFactory = require ? require('./registry/factory').RegistryFactory : value);
        (require || prop === 'StoreRecords') && _export("StoreRecords", StoreRecords = require ? require('./registry/store').StoreRecords : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiY291bnRlcnMiLCJ0b3RhbCIsIm5leHQiLCJkYiIsIml0ZW0iLCJpdGVtcyIsImxvY2FsZGIiLCJlbGVtZW50cyIsIk1hcCIsImlzT25saW5lIiwibG9jYWxQcm92aWRlciIsIkFycmF5IiwiaXNBcnJheSIsInRyaWdnZXJFdmVudCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInN0b3JlTmFtZSIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJzZXQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwibGlzdGVuSXRlbXMiLCJpbml0aWFsaXNlIiwiI2xpc3Rlbkl0ZW1zIiwicHJvY2Vzc0VudHJpZXMiLCJ0cmlnZ2VyIiwic2V0T2ZmbGluZSIsInNldEl0ZW1zIiwidmFsdWVzIiwic3RvcmUiLCJmb3JFYWNoIiwiaWQiLCJkZWxldGUiLCJpZHMiLCJzb2Z0RGVsZXRlIiwiZGVsZXRlSXRlbXMiLCJlIiwiY29uc29sZSIsImxvYWQiLCJhcmdzIiwibG9jYWxMb2FkIiwiZmlsdGVyIiwic2F2ZSIsInN5bmMiLCJwdWJsaXNoIiwidG9TeW5jIiwic2V0RW50cmllcyIsImVudHJpZXMiLCJfZmFjdG9yeSIsInBhcmVudEJyaWRnZSIsInJlZ2lzdHJ5IiwicmVtb3RlRGF0YSIsIlJlZ2lzdHJ5RmFjdG9yeSIsImN1c3RvbUZpbHRlciIsInBhcmFtcyIsImxvY2FsRGF0YSIsIm5ld0l0ZW1zIiwidXBkYXRlIiwiY29uY2F0IiwicHJvcGVydGllcyIsImxvY2FsTG9hZGVkIiwiZmV0Y2hpbmciLCJsb2FkZWQiLCJwYWdlIiwicmVtb3RlRWxlbWVudHMiLCJzdGFydCIsImxpbWl0IiwibG9jYWxSZXNwb25zZSIsInJlbW90ZUxvYWQiLCJleGMiLCJmZXRjaGVkIiwibGFuZGVkIiwibGlzdCIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwiZGVsZXRlZEVudHJpZXMiLCJwcm9taXNlcyIsIm1hcCIsInJlY29yZCIsInB1c2giLCJhbGwiLCJpbmRleCIsInVwZGF0ZUxvY2FsSXRlbXMiLCJfY29yZSIsIl9kYXRhYmFzZSIsIl9zYXZlciIsIl9sb2FkZXIiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwiZXhpc3RzIiwiZm91bmQiLCJyZWdpc3RyeUZhY3RvcnkiLCJhcHBseSIsImFjdGl2ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsIkxvY2FsUHJvdmlkZXJMb2FkZXIiLCJwcm9taXNlSW5pdCIsInJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJEQk1hbmFnZXIiLCJMb2NhbFByb3ZpZGVyU2F2ZXIiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwiaW5zdGFuY2VJZCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsIml0ZW1zVG9VcGRhdGUiLCJpc0RlbGV0ZWQiLCJzYXZlQWxsIiwiX2RleGllIiwicHJvbWlzZUxvYWQiLCJsaXN0SXRlbXMiLCJTZXQiLCJjb25kaXRpb25zIiwiY3VzdG9tV2hlcmUiLCJkZWZhdWx0V2hlcmUiLCJvcmRlckJ5IiwiY3VycmVudExpbWl0IiwiY3VycmVudE9mZnNldCIsInBhcmVudFByaXZhdGVQcm9wcyIsInF1YW50aXR5IiwiaXNTYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBlcmZvcm1Mb2FkIiwiI3BlcmZvcm1Mb2FkIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJyZXNvbHZlUHJvbWlzZUxvYWQiLCJsaXZlIiwibGl2ZVF1ZXJ5Iiwid2hlcmUiLCJzdWJzY3JpYmVUb1F1ZXJ5Iiwib2Zmc2V0IiwiaGFzT3duUHJvcGVydHkiLCJpbmRleGVzIiwic2NoZW1hIiwibmFtZSIsImtleXMiLCJrZXkiLCJpbmNsdWRlcyIsImNvbGxlY3Rpb24iLCJxdWVyeSIsImkiLCJ0b0FycmF5IiwiY2FsbGJhY2siLCIjc3Vic2NyaWJlVG9RdWVyeSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwiaGFuZGxlUXVlcnlSZXNwb25zZSIsImVyciIsIiNoYW5kbGVRdWVyeVJlc3BvbnNlIiwic2FtZVF1ZXJ5Iiwic29ydCIsImEiLCJiIiwiY3VycmVudE1hcCIsImFkZCIsImNsZWFudXBJdGVtcyIsIiNjbGVhbnVwSXRlbXMiLCJoYXMiLCIjcmVzb2x2ZVByb21pc2VMb2FkIiwiX3JlZ2lzdHJ5IiwiYmF0Y2hlcyIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIl9pbmRleCIsIlVzZXJQcm92aWRlciIsIkJvb2siLCJJdGVtIiwiX3NhdmUiLCJpbmZvIiwibG9jYWxGaWVsZHMiLCJpZ25vcmVkRmllbGRzIiwic2tlbGV0b24iLCJ1bmlxdWUiLCJfX2dldCIsIl9faW5zdGFuY2VJZCIsImlzUmVhZHkiLCJjaGVja1JlYWR5Iiwib2JqZWN0UmVhZHkiLCJwcm9taXNlUmVhZHkiLCJpbml0UHJvbWlzZSIsImNvbmZpZyIsIkxvY2FsUHJvdmlkZXIiLCJJdGVtU2F2ZU1hbmFnZXIiLCJJdGVtTG9hZE1hbmFnZXIiLCJiaW5kIiwib25SZWFkeSIsIngiLCJ0b0l0ZXJhdGUiLCJmaWVsZCIsImdldFByb3BlcnR5TmFtZXMiLCJmb3JjZVN5bmMiLCJzYW1lIiwib3JpZ2luYWwiLCJpc05hTiIsInBhcnNlSW50IiwibG9hZE1ldGhvZCIsImlzTmV3IiwiZmFjdG9yeVJlZ2lzdHJ5IiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwiZ2V0UmVnaXN0cnkiLCJkZWVwQ29tcGFyZSIsIm9iajEiLCJvYmoyIiwia2V5czEiLCJrZXlzMiIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsImlzT2JqZWN0Iiwib2JqZWN0IiwiaXNVbnB1Ymxpc2hlZCIsIiNpc1VucHVibGlzaGVkIiwidG9Db21wYXJlIiwiYXJlRXF1YWwiLCJsaXN0ZW5SZWdpc3RyeSIsImNyZWF0ZSIsIiNsaXN0ZW5SZWdpc3RyeSIsImR1cGxpY2F0ZWQiLCJ2YWxpZGF0ZVVuaXF1ZUZpZWxkcyIsImZpZWxkcyIsImNoZWNrUHJvbWlzZXMiLCJ0aGVuIiwiZHVwbGljYXRlRmllbGRzIiwiZGVsZXRlUmVnaXN0cnkiLCJpZGVudGlmaWVyIiwiI3VwZGF0ZSIsInVwZGF0ZWQiLCJwdXQiLCJsb2NhbFVwZGF0ZSIsImxvZyIsInByb3BzIiwiQ29sbGVjdGlvblByb3ZpZGVyIiwiSXRlbVByb3ZpZGVyIiwic3RvcmVzIiwiZGJOYW1lIiwicmVnaXN0ZXJMaXN0IiwicmVnaXN0cmllcyIsImhhc0l0ZW0iLCJnZXRTdG9yZSIsIiNnZXRTdG9yZSIsImRicyIsIl91dWlkIiwia2V5SWQiLCJ2NCIsIm5ld1ZhbHVlcyIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VzIjpbIi9hZGFwdGVyL2RlZmF1bHQudHMiLCIvYWRhcHRlci9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvYWRhcHRlci9sZWdhY3kudHMiLCIvY2FjaGUvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9JQ29sbGVjdGlvbi50cyIsIi9jb2xsZWN0aW9uL2xvYWQudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2xvYWRlci50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL3NhdmVyLnRzIiwiL2NvbGxlY3Rpb24vcHVibGlzaC50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFTSxNQUFPQSxjQUFjO1lBQzFCQyxRQUFRQSxDQUFDQyxJQUFTO2NBQ2pCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7WUFFQUcsVUFBVUEsQ0FBQ0gsSUFBUztjQUNuQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFJLGNBQWNBLENBQUNKLElBQVM7Y0FDdkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3Qjs7VUFDQUssT0FBQSxDQUFBUCxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsU0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBYU0sTUFBT0csZUFBZTtZQUMzQixPQUFPQyxHQUFHQSxDQUFDQyxNQUFNLEVBQUVDLFFBQTZCO2NBQy9DQSxRQUFRLEdBQUdBLFFBQVEsR0FBR0EsUUFBUSxHQUFHUCxTQUFBLENBQUFRLGNBQWMsQ0FBQ0MsT0FBTztjQUN2RCxNQUFNQyxPQUFPLEdBQUdILFFBQVEsS0FBSyxTQUFTLEdBQUdMLFFBQUEsQ0FBQVYsY0FBYyxHQUFHVyxPQUFBLENBQUFRLGFBQWE7Y0FDdkUsT0FBTyxJQUFJRCxPQUFPLENBQUNKLE1BQU0sQ0FBQztZQUMzQjs7VUFDQVAsT0FBQSxDQUFBSyxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7O1VDckJEOztVQUVBUSxNQUFBLENBQUFDLGNBQUEsQ0FBQWQsT0FBQTtZQUNBZSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDU00sTUFBT0gsYUFBYTtZQUN6QixDQUFBTCxNQUFPO1lBQ1BTLFlBQVlULE1BQU07Y0FDakIsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUNBYixRQUFRQSxDQUFDO2NBQUV1QixLQUFLO2NBQUV0QjtZQUFJLElBQWMsRUFBRTtjQUNyQyxJQUFJc0IsS0FBSyxFQUFFO2dCQUNWLE9BQU87a0JBQUVDLE1BQU0sRUFBRSxLQUFLO2tCQUFFRCxLQUFLLEVBQUU7b0JBQUVFLE9BQU8sRUFBRUY7a0JBQUs7Z0JBQUUsQ0FBRTs7Y0FHcEQsT0FBTztnQkFBRUMsTUFBTSxFQUFFLElBQUk7Z0JBQUV2QjtjQUFJLENBQUU7WUFDOUI7WUFFQUcsVUFBVUEsQ0FBQ3NCLFFBQWlCO2NBQzNCLE1BQU07Z0JBQUVGLE1BQU07Z0JBQUV2QixJQUFJO2dCQUFFc0I7Y0FBSyxDQUFFLEdBQUdHLFFBQVE7Y0FDeEMsSUFBSSxDQUFDRixNQUFNLEVBQUUsTUFBTUQsS0FBSyxJQUFJLGtCQUFrQjtjQUU5QyxPQUFPdEIsSUFBSTtZQUNaO1lBRUFJLGNBQWNBLENBQUNKLElBQVM7Y0FDdkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3Qjs7VUFDQUssT0FBQSxDQUFBWSxhQUFBLEdBQUFBLGFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENELElBQUFTLE1BQUEsR0FBQW5CLE9BQUE7VUFFTSxNQUFPb0IsWUFBYSxTQUFRRCxNQUFBLENBQUFFLGFBQTJCO1VBQUd2QixPQUFBLENBQUFzQixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDRmhFLElBQUFELE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBc0IsY0FBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF1QixRQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLEtBQUEsR0FBQXhCLE9BQUE7VUFHQSxJQUFBeUIsUUFBQSxHQUFBekIsT0FBQTtVQUlPO1VBQVcsTUFBTzBCLFVBQVcsU0FBUVAsTUFBQSxDQUFBRSxhQUF5QjtZQUtwRU0sUUFBUSxHQUFRLEVBQUU7WUFDbEJDLEtBQUssR0FBVyxDQUFDO1lBQ2pCQyxJQUFJO1lBQ0pDLEVBQUU7WUFDRkMsSUFBSTtZQUVKLENBQUFDLEtBQU0sR0FBMkIsRUFBRTtZQUN6QkMsT0FBTyxHQUFZLElBQUk7WUFFakMsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlGLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUksUUFBUUEsQ0FBQTtjQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUNDLGFBQWEsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDQSxhQUFhLENBQUNELFFBQVE7WUFDaEU7WUFDQSxJQUFJSixLQUFLQSxDQUFDbkIsS0FBNkI7Y0FDdEMsSUFBSSxDQUFDeUIsS0FBSyxDQUFDQyxPQUFPLENBQUMxQixLQUFLLENBQUMsRUFBRTtnQkFDMUI7O2NBRUQsSUFBSSxDQUFDLENBQUFtQixLQUFNLEdBQUduQixLQUFLO2NBQ25CLElBQUksQ0FBQzJCLFlBQVksRUFBRTtZQUNwQjtZQUVBLENBQUFILGFBQWM7WUFDZCxJQUFJQSxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGFBQWM7WUFDM0I7WUFFQSxDQUFBSSxXQUFZO1lBQ1osQ0FBQUMsV0FBWTtZQUNaLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVVQyxNQUFNLEdBQVcsSUFBSTtZQUNyQkMsYUFBYSxHQUFtQixLQUFLO1lBRS9DLENBQUFDLGVBQWdCO1lBQ2hCLElBQUlBLGVBQWVBLENBQUE7Y0FDbEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsZUFBZ0I7WUFDN0I7WUFDQSxDQUFBQyxZQUFhO1lBQ2JqQyxZQUFZa0MsS0FBdUI7Y0FDbEMsS0FBSyxFQUFFO2NBRVAsTUFBTTtnQkFBRUwsUUFBUTtnQkFBRU0sU0FBUztnQkFBRW5CLEVBQUU7Z0JBQUVHLE9BQU87Z0JBQUVGO2NBQUksQ0FBRSxHQUFHaUIsS0FBSztjQUN4RCxJQUFJLENBQUMsQ0FBQUQsWUFBYSxHQUFHQyxLQUFLO2NBQzFCLElBQUlDLFNBQVMsRUFBRSxJQUFJLENBQUNBLFNBQVMsR0FBR0EsU0FBUztjQUN6QyxJQUFJbkIsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRSxHQUFHQSxFQUFFO2NBQ3BCLElBQUlHLE9BQU8sRUFBRSxJQUFJLENBQUNBLE9BQU8sR0FBR0EsT0FBTztjQUNuQyxJQUFJRixJQUFJLEVBQUUsSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUk7Y0FDMUIsSUFBSVksUUFBUSxFQUFFO2dCQUNiLElBQUksT0FBT0EsUUFBUSxLQUFLLFVBQVUsRUFBRTtrQkFDbkMsTUFBTSxJQUFJTyxLQUFLLENBQUMsaUNBQWlDLENBQUM7O2dCQUVuRCxJQUFJLENBQUMsQ0FBQVAsUUFBUyxHQUFHLElBQUlBLFFBQVEsRUFBRTs7Y0FFaEMsSUFBSSxDQUFDUSxhQUFhLENBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztjQUN6QyxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNaO1lBRVVBLElBQUlBLENBQUE7Y0FDYixNQUFNQyxXQUFXLEdBQUdDLFFBQVEsSUFBRztnQkFDOUIsT0FBTyxJQUFJLENBQUNBLFFBQVEsQ0FBQztjQUN0QixDQUFDO2NBQ0QsTUFBTUMsV0FBVyxHQUFHQSxDQUFDRCxRQUFRLEVBQUV6QyxLQUFLLEtBQU0sSUFBSSxDQUFDeUMsUUFBUSxDQUFDLEdBQUd6QyxLQUFNO2NBQ2pFLE1BQU0yQyxNQUFNLEdBQUc7Z0JBQUVwRCxHQUFHLEVBQUVpRCxXQUFXO2dCQUFFSSxHQUFHLEVBQUVGO2NBQVcsQ0FBRTtjQUNyRCxJQUFJLENBQUMsQ0FBQVQsZUFBZ0IsR0FBR3JCLFFBQUEsQ0FBQXRCLGVBQWUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTJDLFlBQWEsRUFBRXZDLE9BQU8sQ0FBQztjQUM5RSxJQUFJLENBQUMsQ0FBQTZCLGFBQWMsR0FBRyxJQUFJZixjQUFBLENBQUFvQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUVGLE1BQU0sQ0FBQztjQUMvRCxJQUFJLENBQUMsQ0FBQWYsV0FBWSxHQUFHLElBQUlsQixRQUFBLENBQUFvQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUVILE1BQU0sQ0FBQztjQUMzRCxJQUFJLENBQUMsQ0FBQWQsV0FBWSxHQUFHLElBQUlsQixLQUFBLENBQUFvQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUVKLE1BQU0sQ0FBQztjQUMzRCxJQUFJLENBQUMsQ0FBQW5CLGFBQWMsQ0FBQ3dCLEVBQUUsQ0FBQyxlQUFlLEVBQUUsTUFBSztnQkFDNUMsSUFBSSxDQUFDLENBQUFDLFdBQVksRUFBRTtjQUNwQixDQUFDLENBQUM7Y0FDRixJQUFJLENBQUN6QixhQUFhLENBQUNlLElBQUksRUFBRTtjQUN6QixLQUFLLENBQUNXLFVBQVUsRUFBRTtZQUNuQjtZQUVBLENBQUFELFdBQVksR0FBRyxNQUFBRSxDQUFBLEtBQVc7Y0FDekIsSUFBSSxDQUFDLElBQUksQ0FBQy9CLE9BQU8sRUFBRTtjQUVuQixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFVLFdBQVksQ0FBQ3VCLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTVCLGFBQWMsQ0FBQ0wsS0FBSyxDQUFDO2NBQy9FLElBQUksQ0FBQ2tDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkIsQ0FBQztZQUVEQyxVQUFVLEdBQUd0RCxLQUFLLElBQUksSUFBSSxDQUFDd0IsYUFBYSxDQUFDOEIsVUFBVSxDQUFDdEQsS0FBSyxDQUFDO1lBRWhEdUQsUUFBUUEsQ0FBQ0MsTUFBTTtjQUN4QixJQUFJLENBQUMsQ0FBQXJDLEtBQU0sR0FBR3FDLE1BQU07WUFDckI7WUFFQSxNQUFNQyxLQUFLQSxDQUFBO2NBQ1YsTUFBTSxJQUFJLENBQUMsQ0FBQWpDLGFBQWMsQ0FBQ2UsSUFBSSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFmLGFBQWMsQ0FBQ2lDLEtBQUs7WUFDakM7WUFFQSxNQUFNYixHQUFHQSxDQUFDaEUsSUFBSTtjQUNiLE1BQU07Z0JBQUV1QztjQUFLLENBQUUsR0FBR3ZDLElBQUk7Y0FDdEIsT0FBT0EsSUFBSSxDQUFDc0MsSUFBSTtjQUVoQixNQUFNLEtBQUssQ0FBQzBCLEdBQUcsQ0FBQ2hFLElBQUksQ0FBQztjQUVyQixJQUFJLENBQUN1QyxLQUFLLEVBQUU7Y0FFWkEsS0FBSyxDQUFDdUMsT0FBTyxDQUFDeEMsSUFBSSxJQUFHO2dCQUNwQixJQUFJQSxJQUFJLENBQUN5QyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUF0QyxRQUFTLENBQUN1QixHQUFHLENBQUMxQixJQUFJLENBQUN5QyxFQUFFLEVBQUV6QyxJQUFJLENBQUM7Y0FDL0MsQ0FBQyxDQUFDO1lBQ0g7WUFDQSxNQUFNMEMsTUFBTUEsQ0FBQ0MsR0FBRztjQUNmLElBQUk7Z0JBQ0gsSUFBSSxJQUFJLENBQUMsQ0FBQXJDLGFBQWMsRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFBQSxhQUFjLENBQUNzQyxVQUFVLENBQUNELEdBQUcsQ0FBQztnQkFDbEUsSUFBSSxJQUFJLENBQUMvQixRQUFRLEVBQUU7a0JBQ2xCLE1BQU0sSUFBSSxDQUFDQSxRQUFRLENBQUNpQyxXQUFXLENBQUNGLEdBQUcsQ0FBQzs7ZUFFckMsQ0FBQyxPQUFPRyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQy9ELEtBQUssQ0FBQzhELENBQUMsQ0FBQzs7WUFFbEI7WUFFQUUsSUFBSUEsQ0FBQ0MsSUFBSztjQUNULE9BQU8sSUFBSSxDQUFDLENBQUF0QyxXQUFZLENBQUNxQyxJQUFJLENBQUNDLElBQUksQ0FBQztZQUNwQztZQUNBQyxTQUFTQSxDQUFDRCxJQUFJO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQXRDLFdBQVksQ0FBQ3VDLFNBQVMsQ0FBQ0QsSUFBSSxDQUFDO1lBQ3pDO1lBQ0FFLE1BQU0sR0FBSUYsSUFBSyxJQUFLLElBQUksQ0FBQyxDQUFBdEMsV0FBWSxDQUFDd0MsTUFBTSxDQUFDRixJQUFJLENBQUM7WUFDbERHLElBQUksR0FBR0EsQ0FBQ0gsSUFBSyxFQUFFNUIsSUFBSyxLQUFLLElBQUksQ0FBQyxDQUFBWCxXQUFZLENBQUMwQyxJQUFJLENBQUNILElBQUksRUFBRTVCLElBQUksQ0FBQztZQUMzRGdDLElBQUksR0FBSUosSUFBSyxJQUFLLElBQUksQ0FBQyxDQUFBdkMsV0FBWSxDQUFDMkMsSUFBSSxDQUFDSixJQUFJLENBQUM7WUFDOUNLLE9BQU8sR0FBSUwsSUFBSyxJQUFLLElBQUksQ0FBQyxDQUFBdkMsV0FBWSxDQUFDNEMsT0FBTyxDQUFDTCxJQUFJLENBQUM7WUFDcERNLE1BQU0sR0FBR0EsQ0FBQSxLQUFNLElBQUksQ0FBQyxDQUFBN0MsV0FBWSxDQUFDNkMsTUFBTSxFQUFFO1lBRXpDLE1BQU1DLFVBQVVBLENBQUNDLE9BQU87Y0FDdkIsTUFBTSxJQUFJLENBQUNMLElBQUksQ0FBQ0ssT0FBTyxFQUFFLElBQUksQ0FBQztjQUM5QixNQUFNeEQsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFVLFdBQVksQ0FBQ3VCLGNBQWMsQ0FBQ3VCLE9BQU8sRUFBRSxJQUFJLENBQUM7Y0FFbkV4RCxLQUFLLENBQUN1QyxPQUFPLENBQUN4QyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUFHLFFBQVMsQ0FBQ3VCLEdBQUcsQ0FBQzFCLElBQUksQ0FBQ3lDLEVBQUUsRUFBRXpDLElBQUksQ0FBQyxDQUFDO2NBQ3hELElBQUksQ0FBQyxDQUFBQyxLQUFNLEdBQUdBLEtBQUs7Y0FDbkIsSUFBSSxDQUFDa0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN0QixPQUFPbEMsS0FBSztZQUNiOztVQUNBbEMsT0FBQSxDQUFBNEIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7OztVQ2xLRDs7VUFFQWYsTUFBQSxDQUFBQyxjQUFBLENBQUFkLE9BQUE7WUFDQWUsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0ZBLElBQUE0RSxRQUFBLEdBQUF6RixPQUFBO1VBV00sTUFBTzRELHFCQUFxQjtZQUNqQ3NCLE1BQU07WUFDTixDQUFBN0MsYUFBYztZQUNkLENBQUFNLFFBQVM7WUFDVCxDQUFBK0MsWUFBYTtZQUliLENBQUFyRixNQUFPO1lBQ1AsQ0FBQXNGLFFBQVM7WUFDVCxDQUFBbkYsT0FBUTtZQUNSLElBQUlILE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRVV1RixVQUFVLEdBQUcsRUFBRTtZQUN6QjlFLFlBQ0NULE1BQWtCLEVBQ2xCcUYsWUFHQztjQUVELElBQUksQ0FBQyxDQUFBckYsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBcUYsWUFBYSxHQUFHQSxZQUFZO2NBQ2pDLElBQUksQ0FBQyxDQUFBbEYsT0FBUSxHQUFHLElBQUksQ0FBQyxDQUFBSCxNQUFPLENBQUN5QyxlQUFlO2NBRTVDLElBQUksQ0FBQ00sSUFBSSxFQUFFO1lBQ1o7WUFFQUEsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBZixhQUFjLEdBQUcsSUFBSSxDQUFDLENBQUFxRCxZQUFhLENBQUN0RixHQUFHLENBQUMsZUFBZSxDQUFDO2NBQzdELElBQUksQ0FBQyxDQUFBdUMsUUFBUyxHQUFHLElBQUksQ0FBQyxDQUFBK0MsWUFBYSxDQUFDdEYsR0FBRyxDQUFDLFVBQVUsQ0FBQztjQUVuRCxJQUFJLENBQUMsQ0FBQXVGLFFBQVMsR0FBR0YsUUFBQSxDQUFBSSxlQUFlLENBQUN6RixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUFzRixZQUFhLENBQUN0RixHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Y0FDekUsSUFBSSxJQUFJLENBQUMsQ0FBQWlDLGFBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQWhDLE1BQU8sQ0FBQ3lGLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQXpELGFBQWMsRUFBRXlELFlBQVk7WUFDdkY7WUFFQSxDQUFBYixTQUFVLEdBQUcsTUFBTWMsTUFBTSxJQUFHO2NBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTFELGFBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBcUQsWUFBYSxDQUFDdEYsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRTtjQUN6RSxNQUFNNEYsU0FBUyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQTNELGFBQWMsQ0FBQzBDLElBQUksQ0FBQ2dCLE1BQU0sQ0FBQyxLQUFLO2dCQUFFdEcsSUFBSSxFQUFFO2NBQUUsQ0FBRTtjQUUxRSxNQUFNd0csUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDaEMsY0FBYyxDQUFDK0IsU0FBUyxDQUFDdkcsSUFBSSxDQUFDO2NBRTFELElBQUl1QyxLQUFLLEdBQUcrRCxNQUFNLENBQUNHLE1BQU0sS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDN0YsTUFBTSxDQUFDMkIsS0FBSyxDQUFDbUUsTUFBTSxDQUFDRixRQUFRLENBQUMsR0FBR0EsUUFBUTtjQUVsRixNQUFNRyxVQUFVLEdBQWtCO2dCQUNqQ0MsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCQyxRQUFRLEVBQUUsS0FBSztnQkFDZjFFLEtBQUssRUFBRW9FLFNBQVMsQ0FBQ3BFLEtBQUssSUFBSSxDQUFDO2dCQUMzQkMsSUFBSSxFQUFFLENBQUMsQ0FBQ21FLFNBQVMsQ0FBQ25FLElBQUk7Z0JBQ3RCRztlQUNBO2NBQ0QsSUFBSWdFLFNBQVMsQ0FBQ25FLElBQUksRUFBRXVFLFVBQVUsQ0FBQ3ZFLElBQUksR0FBR21FLFNBQVMsQ0FBQ25FLElBQUk7Y0FDcEQsSUFBSSxDQUFDLENBQUF4QixNQUFPLENBQUNrRyxNQUFNLEdBQUcsSUFBSTtjQUUxQixJQUFJLENBQUNsRyxNQUFNLENBQUNvRCxHQUFHLENBQUMyQyxVQUFVLENBQUM7Y0FFM0IsT0FBTyxJQUFJLENBQUMsQ0FBQTVGLE9BQVEsQ0FBQ2hCLFFBQVEsQ0FBQztnQkFBRUMsSUFBSSxFQUFFdUM7Y0FBSyxDQUFFLENBQUM7WUFDL0MsQ0FBQztZQUVELENBQUF3RSxJQUFLLEdBQUcsQ0FBQztZQUNULENBQUFDLGNBQWUsR0FBRyxFQUFFO1lBQ3BCeEIsU0FBUyxHQUFHLE1BQUFBLENBQU9jLE1BQUEsR0FBYyxFQUFFLEtBQUk7Y0FDdEMsSUFBSTtnQkFDSCxPQUFPLElBQUksQ0FBQyxDQUFBZCxTQUFVLENBQUNjLE1BQU0sQ0FBQztlQUM5QixDQUFDLE9BQU9sQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQy9ELEtBQUssQ0FBQzhELENBQUMsQ0FBQzs7WUFFbEIsQ0FBQztZQUNERSxJQUFJLEdBQUcsTUFBQUEsQ0FBT2dCLE1BQUEsR0FBYyxFQUFFLEtBQUk7Y0FDakMsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQTFGLE1BQU8sQ0FBQ2lHLFFBQVEsR0FBRyxJQUFJO2dCQUM1QixNQUFNO2tCQUFFekU7Z0JBQUksQ0FBRSxHQUFHLElBQUksQ0FBQ3hCLE1BQU07Z0JBQzVCLElBQUk7a0JBQUVxRyxLQUFLLEdBQUcsQ0FBQztrQkFBRVI7Z0JBQU0sQ0FBRSxHQUFHSCxNQUFNO2dCQUNsQ0EsTUFBTSxDQUFDWSxLQUFLLEdBQUdaLE1BQU0sQ0FBQ1ksS0FBSyxJQUFJLEVBQUU7Z0JBQ2pDRCxLQUFLLEdBQUdSLE1BQU0sS0FBSyxJQUFJLElBQUlyRSxJQUFJLEdBQUdBLElBQUksR0FBRzZFLEtBQUs7Z0JBQzlDLElBQUlSLE1BQU0sRUFBRTtrQkFDWCxJQUFJLENBQUMsQ0FBQU0sSUFBSyxFQUFFO2tCQUNaVCxNQUFNLENBQUNXLEtBQUssR0FBR0EsS0FBSzs7Z0JBR3JCLE1BQU1FLGFBQWEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBM0IsU0FBVSxDQUFDYyxNQUFNLENBQUM7Z0JBRW5ELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTFGLE1BQU8sQ0FBQytCLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBTyxRQUFTLEVBQUUsT0FBT2lFLGFBQWE7Z0JBQ25FLE1BQU07a0JBQUVSLFVBQVU7a0JBQUVwRTtnQkFBSyxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTZFLFVBQVcsQ0FBQ2QsTUFBTSxDQUFDO2dCQUM1RCxJQUFJLENBQUMxRixNQUFNLENBQUNvRCxHQUFHLENBQUMyQyxVQUFVLENBQUM7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLENBQUE1RixPQUFRLENBQUNoQixRQUFRLENBQUM7a0JBQUVDLElBQUksRUFBRXVDO2dCQUFLLENBQUUsQ0FBQztlQUM5QyxDQUFDLE9BQU84RSxHQUFHLEVBQUU7Z0JBQ2JoQyxPQUFPLENBQUMvRCxLQUFLLENBQUMrRixHQUFHLENBQUM7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLENBQUF0RyxPQUFRLENBQUNoQixRQUFRLENBQUM7a0JBQUV1QixLQUFLLEVBQUUrRjtnQkFBRyxDQUFFLENBQUM7ZUFDN0MsU0FBUztnQkFDVCxJQUFJLENBQUMsQ0FBQXpHLE1BQU8sQ0FBQ2lHLFFBQVEsR0FBRyxLQUFLO2dCQUM3QixJQUFJLENBQUMsQ0FBQWpHLE1BQU8sQ0FBQzBHLE9BQU8sR0FBRyxJQUFJO2dCQUMzQixJQUFJLENBQUMsQ0FBQTFHLE1BQU8sQ0FBQzJHLE1BQU0sR0FBRyxJQUFJOztZQUU1QixDQUFDO1lBRUQsQ0FBQUgsVUFBVyxHQUFHLE1BQU9kLE1BQTJCLElBQUk7Y0FDbkQsTUFBTTdFLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBeUIsUUFBUyxDQUFDc0UsSUFBSSxDQUFDbEIsTUFBTSxDQUFDO2NBQ2xELE1BQU10RyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUFlLE9BQVEsQ0FBQ1osVUFBVSxDQUFDc0IsUUFBUSxDQUFDO2NBRS9DLE1BQU1jLEtBQUssR0FBb0IsTUFBTSxJQUFJLENBQUNrRixvQkFBb0IsQ0FBQ3pILElBQUksQ0FBQztjQUVwRSxJQUFJLENBQUNtRyxVQUFVLEdBQUcxRSxRQUFRO2NBRTFCLElBQUksQ0FBQyxDQUFBdUYsY0FBZSxHQUFHVixNQUFNLENBQUNHLE1BQU0sS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUFPLGNBQWUsQ0FBQ04sTUFBTSxDQUFDbkUsS0FBSyxDQUFDLEdBQUdBLEtBQUs7Y0FFMUYsTUFBTW9FLFVBQVUsR0FBRztnQkFDbEJwRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUF5RSxjQUFlO2dCQUMzQjVFLElBQUksRUFBRXBDLElBQUksQ0FBQ29DLElBQUk7Z0JBQ2YwRSxNQUFNLEVBQUUsSUFBSTtnQkFDWkQsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YxRSxLQUFLLEVBQUVuQyxJQUFJLENBQUNtQyxLQUFLLElBQUk7ZUFDckI7Y0FDRCxPQUFPO2dCQUFFd0UsVUFBVTtnQkFBRXBFO2NBQUssQ0FBRTtZQUM3QixDQUFDO1lBRUQsTUFBTWtGLG9CQUFvQkEsQ0FBQ3pILElBQTRCO2NBQ3RELElBQUksQ0FBQ0EsSUFBSSxDQUFDK0YsT0FBTyxJQUFJLENBQUMvRixJQUFJLENBQUN1QyxLQUFLLEVBQUU7Z0JBQ2pDLE1BQU0sSUFBSWtCLEtBQUssQ0FBQyxnRUFBZ0UsQ0FBQzs7Y0FHbEYsTUFBTWhCLFFBQVEsR0FBR3pDLElBQUksQ0FBQ3VDLEtBQUssR0FBR3ZDLElBQUksQ0FBQ3VDLEtBQUssR0FBR3ZDLElBQUksQ0FBQytGLE9BQU87Y0FDdkQsSUFBSS9GLElBQUksQ0FBQzBILGNBQWMsRUFBRTtnQkFDeEI7Z0JBQ0EsSUFBSSxDQUFDLENBQUE5RSxhQUFjLENBQUNzQyxVQUFVLENBQUNsRixJQUFJLENBQUMwSCxjQUFjLENBQUM7O2NBR3BELE1BQU0sSUFBSSxDQUFDLENBQUE5RSxhQUFjLENBQUM4QyxJQUFJLENBQUNqRCxRQUFRLENBQUM7Y0FDeEMsT0FBTyxJQUFJLENBQUNrQyxRQUFRLENBQUNsQyxRQUFRLENBQUM7WUFDL0I7WUFFQSxNQUFNa0MsUUFBUUEsQ0FBQ29CLE9BQW9CO2NBQ2xDLE1BQU00QixRQUFRLEdBQUcsRUFBRTtjQUNuQixNQUFNcEYsS0FBSyxHQUFHd0QsT0FBTyxDQUFDNkIsR0FBRyxDQUFDQyxNQUFNLElBQUc7Z0JBQ2xDLE1BQU12RixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMxQixNQUFNLENBQUMwQixJQUFJLENBQUM7a0JBQUV5QyxFQUFFLEVBQUU4QyxNQUFNLENBQUM5QyxFQUFFO2tCQUFFNEIsVUFBVSxFQUFFa0I7Z0JBQU0sQ0FBRSxDQUFDO2dCQUN4RUYsUUFBUSxDQUFDRyxJQUFJLENBQUN4RixJQUFJLENBQUMwQixHQUFHLENBQUM2RCxNQUFNLENBQUMsQ0FBQztnQkFDL0IsT0FBT3ZGLElBQUk7Y0FDWixDQUFDLENBQUM7Y0FFRixNQUFNckMsT0FBTyxDQUFDOEgsR0FBRyxDQUFDSixRQUFRLENBQUM7Y0FDM0JwRixLQUFLLENBQUN1QyxPQUFPLENBQUMsQ0FBQ3hDLElBQUksRUFBRTBGLEtBQUssS0FBSTtnQkFDN0IxRixJQUFJLENBQUMwQixHQUFHLENBQUMrQixPQUFPLENBQUNpQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDL0IsQ0FBQyxDQUFDO2NBRUYsT0FBT3pGLEtBQUs7WUFDYjtZQUVBOzs7Ozs7WUFNQWlDLGNBQWMsR0FBRyxNQUFBQSxDQUFPdUIsT0FBb0IsRUFBRWtDLGdCQUFnQixHQUFHLEtBQUssS0FBMEI7Y0FDL0Y7Y0FDQSxNQUFNTixRQUFRLEdBQUcsRUFBRTtjQUNuQixNQUFNcEYsS0FBSyxHQUFHd0QsT0FBTyxDQUFDNkIsR0FBRyxDQUFDQyxNQUFNLElBQUc7Z0JBQ2xDLE1BQU10RSxLQUFLLEdBQThDO2tCQUFFd0IsRUFBRSxFQUFFOEMsTUFBTSxDQUFDOUM7Z0JBQUUsQ0FBRTtnQkFDMUUsSUFBSWtELGdCQUFnQixFQUFFMUUsS0FBSyxDQUFDb0QsVUFBVSxHQUFHa0IsTUFBTTtnQkFFL0MsTUFBTXZGLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQzFCLE1BQU0sQ0FBQzBCLElBQUksQ0FBQ2lCLEtBQUssQ0FBQztnQkFDeENvRSxRQUFRLENBQUNHLElBQUksQ0FBQ3hGLElBQUksQ0FBQzBCLEdBQUcsQ0FBQzZELE1BQU0sQ0FBQyxDQUFDO2dCQUMvQixPQUFPdkYsSUFBSTtjQUNaLENBQUMsQ0FBQztjQUVGLE1BQU1yQyxPQUFPLENBQUM4SCxHQUFHLENBQUNKLFFBQVEsQ0FBQztjQUMzQnBGLEtBQUssQ0FBQ3VDLE9BQU8sQ0FBQyxDQUFDeEMsSUFBSSxFQUFFMEYsS0FBSyxLQUFJO2dCQUM3QjFGLElBQUksQ0FBQzBCLEdBQUcsQ0FBQytCLE9BQU8sQ0FBQ2lDLEtBQUssQ0FBQyxFQUFFQyxnQkFBZ0IsQ0FBQztjQUMzQyxDQUFDLENBQUM7Y0FFRixPQUFPMUYsS0FBSztZQUNiLENBQUM7WUFFRDZFLFVBQVUsR0FBRyxNQUFNZCxNQUFNLElBQUc7Y0FDM0IsTUFBTTdFLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBeUIsUUFBUyxDQUFDb0MsSUFBSSxDQUFDZ0IsTUFBTSxDQUFDO2NBQ2xELElBQUksQ0FBQzdFLFFBQVEsQ0FBQ0YsTUFBTSxFQUFFLE1BQU0sa0JBQWtCO2NBQzlDLE9BQU9FLFFBQVEsQ0FBQ3pCLElBQUk7WUFDckIsQ0FBQzs7VUFDREssT0FBQSxDQUFBOEQscUJBQUEsR0FBQUEscUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDak1ELElBQUF6QyxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQTJILEtBQUEsR0FBQTNILE9BQUE7VUFDQSxJQUFBNEgsU0FBQSxHQUFBNUgsT0FBQTtVQUVBLElBQUF5RixRQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTZILE1BQUEsR0FBQTdILE9BQUE7VUFDQSxJQUFBOEgsT0FBQSxHQUFBOUgsT0FBQTtVQVNPO1VBQVUsTUFBTzBELHVCQUF3QixTQUFRdkMsTUFBQSxDQUFBRSxhQUFzQztZQU03RixDQUFBZSxRQUFTLEdBQUcyRixVQUFVLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTTtZQUV2QyxDQUFBQyxPQUFRO1lBQ1IsQ0FBQUMsUUFBUztZQUNULENBQUFsRixTQUFVO1lBQ1YsQ0FBQW1GLFlBQWE7WUFDYixDQUFBMUYsV0FBWTtZQUNaLENBQUEyRixNQUFPLEdBQUcsS0FBSztZQUNmLENBQUFDLEtBQU0sR0FBRyxLQUFLO1lBQ2QsQ0FBQXhHLEVBQUc7WUFDSCxDQUFBeUcsZUFBZ0I7WUFDaEIsQ0FBQWxJLE1BQU87WUFDUCxDQUFBb0MsV0FBWTtZQUNaLENBQUFSLE9BQVE7WUFDUixDQUFBcUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQWtFLEtBQU0sR0FBWSxJQUFJO1lBQ3RCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUE7OztZQUdBLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBLENBQUF6RyxLQUFNLEdBQUcsRUFBRTtZQUNYLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQW9DLFFBQVMsR0FBR3BDLEtBQUssSUFBRztjQUNuQixJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHQSxLQUFLO1lBQ3BCLENBQUM7WUFFRCxJQUFJSSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE4RixPQUFRLElBQUksQ0FBQ1EsWUFBWSxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDckY7WUFFQTdILFlBQ0NULE1BQWtCLEVBQ2xCbUQsTUFHQztjQUVELEtBQUssRUFBRTtjQUNQLE1BQU07Z0JBQUUxQixFQUFFO2dCQUFFbUI7Y0FBUyxDQUFFLEdBQUc1QyxNQUFNO2NBQ2hDLElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDNEIsT0FBTyxHQUFHdUIsTUFBTSxDQUFDcEQsR0FBRyxDQUFDLFNBQVMsQ0FBQztjQUVwQyxJQUFJLENBQUMsSUFBSSxDQUFDNkIsT0FBTyxFQUFFO2dCQUNsQixJQUFJLENBQUMsQ0FBQXVHLEtBQU0sR0FBRyxLQUFLO2dCQUNuQjs7Y0FHRCxJQUFJMUcsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBeUcsZUFBZ0IsR0FBRzlDLFFBQUEsQ0FBQUksZUFBZSxDQUFDekYsR0FBRyxDQUFDMEIsRUFBRSxDQUFDO2NBRXZELElBQUksQ0FBQyxDQUFBc0csWUFBYSxHQUFHdEcsRUFBRTtjQUN2QixJQUFJLENBQUMsQ0FBQW1CLFNBQVUsR0FBR0EsU0FBUztjQUUzQjhFLFVBQVUsQ0FBQ2EsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUM7Y0FDNURkLFVBQVUsQ0FBQ2EsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUM7Y0FFN0QsSUFBSSxDQUFDLENBQUFuRyxXQUFZLEdBQUcsSUFBSW9GLE9BQUEsQ0FBQWdCLG1CQUFtQixDQUFDLElBQUksRUFBRTtnQkFDakR4RSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUFBLEtBQU07Z0JBQ2xCRixRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFBO2VBQ2YsQ0FBQztZQUNIO1lBRUFELFVBQVVBLENBQUN0RCxLQUFjO2NBQ3hCLElBQUksQ0FBQyxDQUFBcUgsT0FBUSxHQUFHckgsS0FBSztjQUNyQixJQUFJLENBQUMyQixZQUFZLEVBQUU7WUFDcEI7WUFFQSxDQUFBdUcsV0FBWTtZQUNaM0YsSUFBSSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNqQixJQUFJO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQW9GLEtBQU0sRUFBRTtrQkFDakIsSUFBSSxDQUFDUSxLQUFLLEdBQUcsSUFBSTtrQkFDakI7O2dCQUVELElBQUksSUFBSSxDQUFDLENBQUFELFdBQVksRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO2dCQUMvQyxJQUFJLENBQUMsQ0FBQUEsV0FBWSxHQUFHLElBQUlwQixLQUFBLENBQUFzQixjQUFjLEVBQUU7Z0JBRXhDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWIsWUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFuRixTQUFVLEVBQUU7a0JBQzVDLElBQUksQ0FBQyxDQUFBd0YsTUFBTyxHQUFHLEtBQUs7a0JBQ3BCLElBQUksQ0FBQyxDQUFBTSxXQUFZLENBQUNwSixPQUFPLEVBQUU7a0JBQzNCOztnQkFHRCxNQUFNd0ksUUFBUSxHQUFvQixNQUFNUCxTQUFBLENBQUFzQixTQUFTLENBQUM5SSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUFnSSxZQUFhLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxDQUFBRCxRQUFTLEdBQUdBLFFBQVE7Z0JBQ3pCLElBQUksQ0FBQyxDQUFBN0QsS0FBTSxHQUFHNkQsUUFBUSxDQUFDckcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBbUIsU0FBVSxDQUFDO2dCQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFxQixLQUFNLEVBQUU7a0JBQ2pCLE1BQU0sSUFBSXBCLEtBQUssQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFBRCxTQUFVLG9DQUFvQyxJQUFJLENBQUMsQ0FBQW1GLFlBQWEsRUFBRSxDQUFDOztnQkFHdEcsSUFBSSxDQUFDLENBQUEzRixXQUFZLEdBQUcsSUFBSW9GLE1BQUEsQ0FBQXNCLGtCQUFrQixDQUFDLElBQUksRUFBRTtrQkFDaERaLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQUEsZUFBZ0I7a0JBQ3RDdEYsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBQSxTQUFVO2tCQUMxQmtGLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQUE7aUJBQ2YsQ0FBQztnQkFFRixJQUFJLENBQUNhLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUMsQ0FBQUQsV0FBWSxDQUFDcEosT0FBTyxFQUFFO2VBQzNCLENBQUMsT0FBT2tGLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDL0QsS0FBSyxDQUFDOEQsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBRU9nRSxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNLElBQUksQ0FBQ3JHLFlBQVksRUFBRTtZQUVwRCxNQUFNNEcsTUFBTUEsQ0FBQzNKLElBQW1CLEVBQUU0SixZQUFtQjtjQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFiLEtBQU0sRUFBRTtjQUNsQixPQUFPLElBQUksQ0FBQyxDQUFBTCxRQUFTLENBQUNyRyxFQUFFLENBQUN3SCxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ2hGLEtBQUssRUFBRSxZQUFXO2dCQUNqRSxNQUFNaUYsaUJBQWlCLEdBQUcsSUFBSXBILEdBQUcsRUFBa0I7Z0JBQ25EMUMsSUFBSSxDQUFDOEUsT0FBTyxDQUFDeEMsSUFBSSxJQUFHO2tCQUNuQndILGlCQUFpQixDQUFDOUYsR0FBRyxDQUFDMUIsSUFBSSxDQUFDeUgsVUFBVSxFQUFFekgsSUFBSSxDQUFDeUMsRUFBRSxDQUFDO2dCQUNoRCxDQUFDLENBQUM7Z0JBRUYsTUFBTSxJQUFJLENBQUNGLEtBQUssQ0FBQ21GLE9BQU8sQ0FBQ2hLLElBQUksQ0FBQztjQUMvQixDQUFDLENBQUM7WUFDSDtZQUVBLE1BQU1rRixVQUFVQSxDQUFDRCxHQUFHO2NBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQThELEtBQU0sRUFBRTtjQUNsQixJQUFJLENBQUNsRyxLQUFLLENBQUNDLE9BQU8sQ0FBQ21DLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QkksT0FBTyxDQUFDL0QsS0FBSyxDQUFDLDhDQUE4QyxDQUFDO2dCQUM3RCxPQUFPO2tCQUFFQyxNQUFNLEVBQUUsS0FBSztrQkFBRXZCLElBQUksRUFBRTtnQkFBRSxDQUFFOztjQUVuQyxJQUFJO2dCQUNILE1BQU1pSyxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUNwRixLQUFLLENBQUNxRixPQUFPLENBQUNqRixHQUFHLENBQUM7Z0JBQzdDLE1BQU1rRixlQUFlLEdBQUdGLE9BQU8sQ0FBQ3hFLE1BQU0sQ0FBQ29DLE1BQU0sSUFBSUEsTUFBTSxLQUFLdUMsU0FBUyxDQUFDO2dCQUN0RSxJQUFJLENBQUNELGVBQWUsQ0FBQ0UsTUFBTSxFQUFFO2dCQUM3QjtnQkFDQSxNQUFNQyxhQUFhLEdBQUdILGVBQWUsQ0FBQ3ZDLEdBQUcsQ0FBQ0MsTUFBTSxLQUFLO2tCQUFFLEdBQUdBLE1BQU07a0JBQUUwQyxTQUFTLEVBQUU7Z0JBQUMsQ0FBRSxDQUFDLENBQUM7Z0JBQ2xGO2dCQUNBLE1BQU0sSUFBSSxDQUFDLENBQUExRixLQUFNLENBQUNtRixPQUFPLENBQUNNLGFBQWEsQ0FBQztnQkFFeEMsT0FBTyxJQUFJO2VBQ1gsQ0FBQyxPQUFPaEosS0FBSyxFQUFFO2dCQUNmK0QsT0FBTyxDQUFDL0QsS0FBSyxDQUFDLGdEQUFnRCxFQUFFQSxLQUFLLENBQUM7Z0JBQ3RFLE9BQU87a0JBQUVDLE1BQU0sRUFBRSxLQUFLO2tCQUFFRCxLQUFLLEVBQUVBLEtBQUssQ0FBQ0U7Z0JBQU8sQ0FBRTs7WUFFaEQ7WUFFQWtFLElBQUksR0FBRzFGLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQWdELFdBQVksQ0FBQzBDLElBQUksQ0FBQzFGLElBQUksQ0FBQztZQUMzQ3dLLE9BQU8sR0FBR0EsQ0FBQ2pJLEtBQUssRUFBRWlCLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQVIsV0FBWSxDQUFDd0gsT0FBTyxDQUFDakksS0FBSyxFQUFFaUIsU0FBUyxDQUFDO1lBQzNFOEIsSUFBSSxHQUFHZ0IsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFBckQsV0FBWSxDQUFDcUMsSUFBSSxDQUFDZ0IsTUFBTSxDQUFDOztVQUMvQ2pHLE9BQUEsQ0FBQTRELHVCQUFBLEdBQUFBLHVCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9LRCxJQUFBaUUsS0FBQSxHQUFBM0gsT0FBQTtVQUVBLElBQUFrSyxNQUFBLEdBQUFsSyxPQUFBO1VBRU0sTUFBTzhJLG1CQUFtQjtZQUMvQixDQUFBekksTUFBTztZQUNQLENBQUE4SixXQUFZO1lBQ1osQ0FBQXBFLE1BQU87WUFDUCxDQUFBcUUsU0FBVSxHQUFHLElBQUlqSSxHQUFHLEVBQUU7WUFDdEIsQ0FBQVAsS0FBTTtZQUNOLENBQUE0RSxJQUFLLEdBQUcsQ0FBQztZQUNULENBQUE5QixHQUFJLEdBQUcsSUFBSTJGLEdBQUcsRUFBRTtZQUNoQixDQUFBQyxVQUFXLEdBQWEsQ0FBQyxJQUFJLENBQUM7WUFDOUIsQ0FBQWxHLFFBQVM7WUFFVCxDQUFBbUcsV0FBWTtZQUNaLENBQUFDLFlBQWEsR0FBR2xHLEtBQUssSUFBSUEsS0FBSyxDQUFDbUcsT0FBTyxDQUFDLElBQUksQ0FBQztZQUM1QyxDQUFBQyxZQUFhO1lBQ2IsQ0FBQUMsYUFBYztZQUVkN0osWUFBWVQsTUFBK0IsRUFBRXVLLGtCQUFrQjtjQUM5RCxJQUFJLENBQUMsQ0FBQXZLLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQStELFFBQVMsR0FBR3dHLGtCQUFrQixDQUFDeEcsUUFBUTtZQUM3QztZQUVBLENBQUF5RyxRQUFTLEdBQUcsQ0FBQztZQUNiLE1BQU05RixJQUFJQSxDQUFDZ0IsTUFBMkI7Y0FDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBMUYsTUFBTyxDQUFDbUksS0FBSyxFQUFFO2NBQ3pCLE1BQU1zQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBakYsTUFBTyxDQUFDLEtBQUtnRixJQUFJLENBQUNDLFNBQVMsQ0FBQ2pGLE1BQU0sQ0FBQztjQUN0RSxJQUFJK0UsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFBWCxXQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtjQUV6RCxJQUFJLENBQUMsQ0FBQUEsV0FBWSxHQUFHLElBQUl4QyxLQUFBLENBQUFzQixjQUFjLEVBQUU7Y0FDeEMsTUFBTSxJQUFJLENBQUMsQ0FBQTVJLE1BQU8sQ0FBQytDLElBQUksRUFBRTtjQUV6QixPQUFPLElBQUksQ0FBQyxDQUFBNkgsV0FBWSxDQUFDbEYsTUFBTSxDQUFDO1lBQ2pDO1lBRUEsTUFBTSxDQUFBa0YsV0FBWUMsQ0FBQ25GLE1BQThCO2NBQ2hELElBQUk7Z0JBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBbkUsS0FBTSxFQUFFLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXZCLE1BQU8sQ0FBQ2lFLEtBQUssQ0FBQzZHLEtBQUssRUFBRTtnQkFDaEUsSUFBSXhFLEtBQUssR0FBR1osTUFBTSxDQUFDWSxLQUFLLElBQUksRUFBRTtnQkFDOUIsTUFBTXlFLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUExSixLQUFNLEdBQUcrRSxLQUFLLENBQUM7Z0JBQ2pELElBQUl5RSxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUE1RSxJQUFLLEVBQUU7a0JBQzVCLElBQUksQ0FBQyxDQUFBK0Usa0JBQW1CLEVBQUU7a0JBQzFCOztnQkFFRCxNQUFNQyxJQUFJLEdBQUcsSUFBQXRCLE1BQUEsQ0FBQXVCLFNBQVMsRUFBQyxJQUFJLENBQUNDLEtBQUssQ0FBQzNGLE1BQU0sRUFBRVksS0FBSyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxDQUFBSCxJQUFLLEVBQUU7Z0JBRVosT0FBTyxJQUFJLENBQUMsQ0FBQW1GLGdCQUFpQixDQUFDSCxJQUFJLEVBQUV6RixNQUFNLEVBQUVxRixVQUFVLENBQUM7ZUFDdkQsQ0FBQyxPQUFPckssS0FBSyxFQUFFO2dCQUNmK0QsT0FBTyxDQUFDL0QsS0FBSyxDQUFDLDBDQUEwQyxFQUFFQSxLQUFLLENBQUM7Z0JBQ2hFLE9BQU87a0JBQUVDLE1BQU0sRUFBRSxLQUFLO2tCQUFFdkIsSUFBSSxFQUFFO2dCQUFFLENBQUU7O1lBRXBDO1lBRUFpTSxLQUFLLEdBQUdBLENBQUMzRixNQUFNLEVBQUVZLEtBQUssS0FBSTtjQUN6QixPQUFPLFlBQVc7Z0JBQ2pCLElBQUlyQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFqRSxNQUFPLENBQUNpRSxLQUFLO2dCQUM5QixNQUFNO2tCQUFFMUI7Z0JBQU0sQ0FBRSxHQUFHbUQsTUFBTTtnQkFDekIsTUFBTTZGLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBcEYsSUFBSyxHQUFHLENBQUMsSUFBSUcsS0FBSztnQkFDdkMsSUFBSTNELEtBQUssR0FBRztrQkFBRSxHQUFHK0M7Z0JBQU0sQ0FBRTtnQkFFekIsSUFBSS9DLEtBQUssQ0FBQzZJLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtrQkFDbEM3SSxLQUFLLEdBQUc7b0JBQUUsR0FBR0EsS0FBSztvQkFBRSxHQUFHQSxLQUFLLENBQUMwSTtrQkFBSyxDQUFFO2tCQUNwQyxPQUFPMUksS0FBSyxDQUFDMEksS0FBSzs7Z0JBR25CLE1BQU1JLE9BQU8sR0FBR3hILEtBQUssQ0FBQ3lILE1BQU0sQ0FBQ0QsT0FBTyxDQUFDekUsR0FBRyxDQUFDSSxLQUFLLElBQUlBLEtBQUssQ0FBQ3VFLElBQUksQ0FBQztnQkFDN0RyTCxNQUFNLENBQUNzTCxJQUFJLENBQUNqSixLQUFLLENBQUMsQ0FBQ3VCLE9BQU8sQ0FBQzJILEdBQUcsSUFBRztrQkFDaEMsQ0FBQ0osT0FBTyxDQUFDSyxRQUFRLENBQUNELEdBQUcsQ0FBQyxJQUFJLE9BQU9sSixLQUFLLENBQUNrSixHQUFHLENBQUM7Z0JBQzVDLENBQUMsQ0FBQztnQkFFRixNQUFNRSxVQUFVLEdBQUd6TCxNQUFNLENBQUNzTCxJQUFJLENBQUNqSixLQUFLLENBQUMsQ0FBQzhHLE1BQU0sS0FBSyxDQUFDLEdBQUd4RixLQUFLLEdBQUlBLEtBQUssQ0FBQ29ILEtBQUssQ0FBQzFJLEtBQUssQ0FBYTtnQkFDNUYsSUFBSXFKLEtBQUssR0FBR0QsVUFBd0I7Z0JBRXBDLElBQUksQ0FBQyxDQUFBMUIsWUFBYSxHQUFHL0QsS0FBSztnQkFDMUIsSUFBSSxDQUFDLENBQUFnRSxhQUFjLEdBQUdpQixNQUFNO2dCQUM1Qjs7O2dCQUlBLElBQUloSixNQUFNLEVBQUUsTUFBTXlKLEtBQUssQ0FBQ3pKLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDO2dCQUN0Q3lKLEtBQUssR0FBR0EsS0FBSyxDQUFDbkgsTUFBTSxDQUFDb0gsQ0FBQyxJQUFJQSxDQUFDLENBQUN0QyxTQUFTLEtBQUssQ0FBQyxDQUFDO2dCQUM1QyxNQUFNM0YsTUFBTSxHQUFHLE1BQU1nSSxLQUFLLENBQUNULE1BQU0sQ0FBQ0EsTUFBTSxDQUFDLENBQUNqRixLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDNEYsT0FBTyxFQUFFO2dCQUNoRSxPQUFPbEksTUFBTTtjQUNkLENBQUM7WUFDRixDQUFDO1lBRUR5QixZQUFZLEdBQUkwRyxRQUFrQixJQUFJO2NBQ3JDLElBQUksQ0FBQyxDQUFBakMsV0FBWSxHQUFHaUMsUUFBUTtjQUM1QixPQUFPLElBQUksQ0FBQyxDQUFBbk0sTUFBTztZQUNwQixDQUFDO1lBRUQsTUFBTSxDQUFBc0wsZ0JBQWlCYyxDQUFDaEIsU0FBMEIsRUFBRTFGLE1BQThCLEVBQUVxRixVQUFrQjtjQUNyRyxJQUFJc0IsV0FBbUI7Y0FDdkJqQixTQUFTLENBQUNrQixTQUFTLENBQUM7Z0JBQ25COUssSUFBSSxFQUFFLE1BQU1HLEtBQUssSUFBRztrQkFDbkIsTUFBTWQsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUEwTCxtQkFBb0IsQ0FBQzVLLEtBQUssRUFBRStELE1BQU0sRUFBRXFGLFVBQVUsRUFBRXNCLFdBQVcsQ0FBQztrQkFDeEYsSUFBSSxDQUFDLENBQUFuQixrQkFBbUIsQ0FBQ3JLLFFBQVEsQ0FBQztnQkFDbkMsQ0FBQztnQkFDREgsS0FBSyxFQUFFOEwsR0FBRyxJQUFHO2tCQUNaL0gsT0FBTyxDQUFDL0QsS0FBSyxDQUFDOEwsR0FBRyxDQUFDO2tCQUNsQixJQUFJLENBQUMsQ0FBQXRCLGtCQUFtQixDQUFDO29CQUFFdkssTUFBTSxFQUFFLEtBQUs7b0JBQUV2QixJQUFJLEVBQUU7a0JBQUUsQ0FBRSxDQUFDO2dCQUN0RDtlQUNBLENBQUM7Y0FDRixPQUFPLElBQUksQ0FBQyxDQUFBMEssV0FBWTtZQUN6QjtZQUVBOzs7Ozs7OztZQVFBLE1BQU0sQ0FBQXlDLG1CQUFvQkUsQ0FDekI5SyxLQUErQixFQUMvQitELE1BQThCLEVBQzlCcUYsVUFBa0IsRUFDbEJzQixXQUFtQjtjQUVuQixJQUFJSyxTQUFrQjtjQUN0QixJQUFJLENBQUMsQ0FBQWxDLFFBQVMsRUFBRTtjQUVoQixJQUFJOUUsTUFBTSxDQUFDbkQsTUFBTSxFQUFFWixLQUFLLENBQUNnTCxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtELENBQUMsQ0FBQ2xILE1BQU0sQ0FBQ25ELE1BQU0sQ0FBQyxHQUFHc0ssQ0FBQyxDQUFDbkgsTUFBTSxDQUFDbkQsTUFBTSxDQUFDLENBQUM7Y0FDNUUsSUFBSSxDQUFDbUYsVUFBVSxDQUFDdEksSUFBSSxFQUFFc0ksVUFBVSxDQUFDdEksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2NBRTVDLElBQUlpTixXQUFXLElBQUksSUFBSSxDQUFDLENBQUFsRyxJQUFLLEVBQUV1RyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQzNDTCxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUFsRyxJQUFLO2NBRTdCLElBQUl1RyxTQUFTLElBQUkvSyxLQUFLLENBQUM4SCxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUF6SixNQUFPLENBQUMyQixLQUFLLENBQUM4SCxNQUFNLEVBQUU7Y0FFN0QsTUFBTXFELFVBQVUsR0FBRyxJQUFJOUMsR0FBRyxFQUFtQjtjQUU3Q3JJLEtBQUssQ0FBQ3VDLE9BQU8sQ0FBQ3hDLElBQUksSUFBRztnQkFDcEIsSUFBSSxDQUFDLENBQUFxSSxTQUFVLENBQUMzRyxHQUFHLENBQUMxQixJQUFJLENBQUN5QyxFQUFFLEVBQUV6QyxJQUFJLENBQUM7Z0JBQ2xDb0wsVUFBVSxDQUFDQyxHQUFHLENBQUNyTCxJQUFJLENBQUN5QyxFQUFFLENBQUM7Y0FDeEIsQ0FBQyxDQUFDO2NBRUYsSUFBSXVJLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQU0sWUFBYSxDQUFDRixVQUFVLENBQUM7Y0FFN0MsSUFBSSxDQUFDLENBQUEvSSxRQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBZ0csU0FBVSxDQUFDL0YsTUFBTSxFQUFFLENBQUMsQ0FBQztjQUM3Q3JDLEtBQUssQ0FBQ3VDLE9BQU8sQ0FBQ3hDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQTJDLEdBQUksQ0FBQzBJLEdBQUcsQ0FBQ3JMLElBQUksQ0FBQ3lDLEVBQUUsQ0FBQyxDQUFDO2NBQzdDLElBQUksQ0FBQyxDQUFBbkUsTUFBTyxDQUFDNkQsT0FBTyxDQUFDLGVBQWUsQ0FBQztjQUVyQyxPQUFPO2dCQUNObEQsTUFBTSxFQUFFLElBQUk7Z0JBQ1p2QixJQUFJLEVBQUV1QyxLQUFLO2dCQUNYSixLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUFBLEtBQU07Z0JBQ2xCQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUEyRSxJQUFLLEdBQUcsQ0FBQyxJQUFJNEUsVUFBVSxHQUFHdkIsU0FBUyxHQUFHO2VBQ2pEO1lBQ0Y7WUFFQSxDQUFBd0QsWUFBYUMsQ0FBQ0gsVUFBZ0M7Y0FDN0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBL0MsU0FBVSxDQUFDNkIsSUFBSSxFQUFFLENBQUMsQ0FBQzFILE9BQU8sQ0FBQ0MsRUFBRSxJQUFHO2dCQUN4QyxJQUFJLENBQUMySSxVQUFVLENBQUNJLEdBQUcsQ0FBQy9JLEVBQUUsQ0FBQyxFQUFFO2tCQUN4QixJQUFJLENBQUMsQ0FBQTRGLFNBQVUsQ0FBQzNGLE1BQU0sQ0FBQ0QsRUFBRSxDQUFDOztjQUU1QixDQUFDLENBQUM7WUFDSDtZQUVBLENBQUErRyxrQkFBbUJpQyxDQUFDdE0sUUFBUSxHQUFHLEVBQUU7Y0FDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBaUosV0FBWSxFQUFFO2NBRXhCLElBQUksQ0FBQyxDQUFBQSxXQUFZLENBQUN4SyxPQUFPLENBQUN1QixRQUFRLENBQUM7Y0FDbkMsSUFBSSxDQUFDLENBQUFpSixXQUFZLEdBQUcsSUFBSTtZQUN6Qjs7VUFDQXJLLE9BQUEsQ0FBQWdKLG1CQUFBLEdBQUFBLG1CQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pLRCxJQUFBMkUsU0FBQSxHQUFBek4sT0FBQTtVQUlNLE1BQU9tSixrQkFBa0I7WUFDOUIsQ0FBQXVFLE9BQVEsR0FBRyxHQUFHO1lBQ2QsQ0FBQXJOLE1BQU87WUFFUCxDQUFBa0ksZUFBZ0I7WUFDaEIsQ0FBQXRGLFNBQVU7WUFDVixDQUFBa0YsUUFBUztZQUNUckgsWUFBWVQsTUFBK0IsRUFBRXFGLFlBQVk7Y0FDeEQsSUFBSSxDQUFDLENBQUFyRixNQUFPLEdBQUdBLE1BQU07Y0FFckIsSUFBSSxDQUFDLENBQUFrSSxlQUFnQixHQUFHN0MsWUFBWSxDQUFDNkMsZUFBZTtjQUNwRCxJQUFJLENBQUMsQ0FBQXRGLFNBQVUsR0FBR3lDLFlBQVksQ0FBQ3pDLFNBQVM7Y0FDeEMsSUFBSSxDQUFDLENBQUFrRixRQUFTLEdBQUd6QyxZQUFZLENBQUN5QyxRQUFRO1lBQ3ZDO1lBRUEsTUFBTWhELElBQUlBLENBQUMxRixJQUE0QjtjQUN0QyxNQUFNa08sT0FBTyxHQUFHQSxDQUFDbkksT0FBK0IsRUFBRTBDLE9BQU8sR0FBRyxDQUFDLEtBQUk7Z0JBQ2hFLE9BQU8xQyxPQUFPLENBQUM2QixHQUFHLENBQUN0RixJQUFJLElBQUc7a0JBQ3pCLE1BQU11RixNQUFNLEdBQ1h2RixJQUFJLENBQUM2TCxhQUFhLElBQUksT0FBTzdMLElBQUksQ0FBQzZMLGFBQWEsS0FBSyxVQUFVLEdBQUc3TCxJQUFJLENBQUM2TCxhQUFhLEVBQUUsR0FBRzdMLElBQUk7a0JBQzdGLE1BQU04TCxNQUFNLEdBQUc7b0JBQUUsR0FBR3ZHLE1BQU07b0JBQUVZLE9BQU87b0JBQUVzQixVQUFVLEVBQUV6SCxJQUFJLENBQUN5SDtrQkFBVSxDQUFFO2tCQUNsRSxPQUFPcUUsTUFBTTtnQkFDZCxDQUFDLENBQUM7Y0FDSCxDQUFDO2NBRURwTyxJQUFJLEdBQUdrTyxPQUFPLENBQUNsTyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUFZLE1BQU8sQ0FBQytCLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2NBRW5ELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQS9CLE1BQU8sQ0FBQ21JLEtBQUssRUFBRTtjQUN6QixNQUFNLElBQUksQ0FBQyxDQUFBRCxlQUFnQixDQUFDbkYsSUFBSSxFQUFFO2NBQ2xDLE1BQU0sSUFBSSxDQUFDNkcsT0FBTyxDQUFDeEssSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBd0QsU0FBVSxDQUFDO1lBQzFDO1lBRUE7Ozs7Ozs7Ozs7WUFXQSxNQUFNZ0gsT0FBT0EsQ0FBQ2pJLEtBQUssRUFBRWlCLFNBQWlCO2NBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTVDLE1BQU8sQ0FBQ21JLEtBQUssRUFBRTtjQUN6QixNQUFNdEcsUUFBUSxHQUFHRixLQUFLLENBQUNxRixHQUFHLENBQUN0RixJQUFJLElBQUc7Z0JBQ2pDLE1BQU00RCxRQUFRLEdBQUcsSUFBSThILFNBQUEsQ0FBQUssUUFBUSxDQUFDN0ssU0FBUyxDQUFDO2dCQUN4QyxJQUFJbEIsSUFBSSxDQUFDZ00sT0FBTyxFQUFFO2tCQUNqQnBJLFFBQVEsQ0FBQ3FFLFNBQVMsR0FBRyxDQUFDOztnQkFFdkJyRSxRQUFRLENBQUNxSSxTQUFTLENBQUNqTSxJQUFJLENBQUM7Z0JBQ3hCLE9BQU80RCxRQUFRO2NBQ2hCLENBQUMsQ0FBQztjQUVGLE1BQU1yQixLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUE2RCxRQUFTLENBQUNyRyxFQUFFLENBQUNtQixTQUFTLENBQUM7Y0FDMUMsTUFBTW1FLFFBQVEsR0FBRyxFQUFFO2NBQ25CLE1BQU02RyxNQUFNLEdBQUcsRUFBRTtjQUVqQixPQUFPL0wsUUFBUSxDQUFDNEgsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0IsTUFBTW9FLEtBQUssR0FBR2hNLFFBQVEsQ0FBQ2lNLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUFULE9BQVEsQ0FBQztnQkFDL0MsTUFBTWpPLElBQUksR0FBR3lPLEtBQUssQ0FBQzdHLEdBQUcsQ0FBQ3RGLElBQUksSUFBSUEsSUFBSSxDQUFDcU0sU0FBUyxFQUFFLENBQUM7Z0JBQ2hESCxNQUFNLENBQUMxRyxJQUFJLENBQUM5SCxJQUFJLENBQUM7Z0JBRWpCMkgsUUFBUSxDQUFDRyxJQUFJLENBQUNqRCxLQUFLLENBQUNtRixPQUFPLENBQUNoSyxJQUFJLENBQUMsQ0FBQzs7Y0FFbkMsSUFBSTtnQkFDSCxNQUFNNE8sT0FBTyxHQUFHLE1BQU0zTyxPQUFPLENBQUM0TyxVQUFVLENBQUNsSCxRQUFRLENBQUM7Z0JBQ2xELE1BQU1tSCxRQUFRLEdBQUdBLENBQUNDLE1BQU0sRUFBRS9HLEtBQUssTUFBTTtrQkFBRSxHQUFHK0csTUFBTTtrQkFBRS9HLEtBQUs7a0JBQUVoSSxJQUFJLEVBQUV3TyxNQUFNLENBQUN4RyxLQUFLO2dCQUFDLENBQUUsQ0FBQztnQkFDL0UsTUFBTWdILE1BQU0sR0FBR0osT0FBTyxDQUFDaEgsR0FBRyxDQUFDa0gsUUFBUSxDQUFDLENBQUNySixNQUFNLENBQUNzSixNQUFNLElBQUlBLE1BQU0sQ0FBQ3hOLE1BQU0sS0FBSyxVQUFVLENBQUM7Z0JBQ25GLElBQUksQ0FBQ3lOLE1BQU0sQ0FBQzNFLE1BQU0sRUFBRSxPQUFPO2tCQUFFOUksTUFBTSxFQUFFO2dCQUFJLENBQUUsQ0FBQyxLQUN2QztrQkFDSixPQUFPO29CQUFFQSxNQUFNLEVBQUUsS0FBSztvQkFBRXlOO2tCQUFNLENBQUU7O2VBRWpDLENBQUMsT0FBTzVKLENBQUMsRUFBRTtnQkFDWCxPQUFPO2tCQUFFN0QsTUFBTSxFQUFFLEtBQUs7a0JBQUV5TixNQUFNLEVBQUU1SjtnQkFBQyxDQUFFOztZQUVyQzs7VUFDQS9FLE9BQUEsQ0FBQXFKLGtCQUFBLEdBQUFBLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVFSyxNQUFPeEYscUJBQXFCO1lBQ2pDLENBQUF0RCxNQUFPO1lBQ1AsQ0FBQW1ELE1BQU87WUFJUCxDQUFBbkIsYUFBYztZQUNkLENBQUFNLFFBQVM7WUFDVCxDQUFBVixPQUFRO1lBQ0V5TSxXQUFXLEdBQUcsQ0FBQztZQUNmQyxVQUFVLEdBQUcsR0FBRztZQUMxQixDQUFBbk8sT0FBUTtZQUNSTSxZQUNDVCxNQUFrQixFQUNsQm1ELE1BR0M7Y0FFRCxJQUFJLENBQUMsQ0FBQW5ELE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQW1ELE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQWhELE9BQVEsR0FBRyxJQUFJLENBQUMsQ0FBQUgsTUFBTyxDQUFDeUMsZUFBZTtjQUM1QyxJQUFJLENBQUNNLElBQUksRUFBRTtZQUNaO1lBRUFBLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQW5CLE9BQVEsR0FBRyxJQUFJLENBQUMsQ0FBQXVCLE1BQU8sQ0FBQ3BELEdBQUcsQ0FBQyxTQUFTLENBQUM7Y0FDM0MsSUFBSSxJQUFJLENBQUMsQ0FBQTZCLE9BQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLENBQUFJLGFBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQW1CLE1BQU8sQ0FBQ3BELEdBQUcsQ0FBQyxlQUFlLENBQUM7ZUFDdkQsTUFBTTtnQkFDTjBFLE9BQU8sQ0FBQzhKLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQzs7Y0FHbEQsSUFBSSxDQUFDLENBQUFqTSxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFhLE1BQU8sQ0FBQ3BELEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDOUM7WUFFQTs7Ozs7O1lBTUErRSxJQUFJLEdBQUcsTUFBQUEsQ0FBTzFGLElBQUksR0FBRyxFQUFFLEVBQUUyRCxJQUFJLEdBQUcsS0FBSyxLQUE2QjtjQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFuQixPQUFRLEVBQUUsT0FBTyxJQUFJO2NBQy9CLE1BQU0sSUFBSSxDQUFDLENBQUFJLGFBQWMsQ0FBQ2UsSUFBSSxFQUFFO2NBRWhDLE1BQU0sSUFBSSxDQUFDLENBQUFmLGFBQWMsQ0FBQzhDLElBQUksQ0FBQzFGLElBQUksQ0FBQztZQUNyQyxDQUFDO1lBRUQ0RixPQUFPLEdBQUcsTUFBQUEsQ0FBTzVGLElBQUksR0FBRyxFQUFFLEtBQXNCO2NBQy9DLElBQUk7Z0JBQ0gsTUFBTSxJQUFJLENBQUMwRixJQUFJLENBQUMxRixJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWtELFFBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQWEsTUFBTyxDQUFDcEQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUV0RCxNQUFNYyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXlCLFFBQVMsQ0FBQ2tNLFFBQVEsQ0FBQ3BQLElBQUksQ0FBQztnQkFDcEQsSUFBSSxDQUFDeUIsUUFBUSxDQUFDRixNQUFNLEVBQUUsTUFBTUUsUUFBUSxDQUFDSCxLQUFLO2dCQUUxQyxPQUFPLElBQUksQ0FBQyxDQUFBUCxPQUFRLENBQUNoQixRQUFRLENBQUM7a0JBQUV3QixNQUFNLEVBQUU7Z0JBQUksQ0FBRSxDQUFDO2VBQy9DLENBQUMsT0FBT0QsS0FBSyxFQUFFO2dCQUNmK0QsT0FBTyxDQUFDL0QsS0FBSyxDQUFDQSxLQUFLLENBQUM7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLENBQUFQLE9BQVEsQ0FBQ2hCLFFBQVEsQ0FBQztrQkFBRXVCO2dCQUFLLENBQUUsQ0FBQzs7WUFFMUMsQ0FBQztZQUVEO1lBQ0ErTixTQUFTLEdBQUcsTUFBT0MsS0FBc0IsSUFBSTtjQUM1QyxNQUFNN04sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF5QixRQUFTLENBQUNrTSxRQUFRLENBQUNFLEtBQUssQ0FBQztjQUVyRDtjQUVBLElBQUk3TixRQUFRLENBQUNGLE1BQU0sRUFBRTtnQkFDcEIsTUFBTXZCLElBQUksR0FBR3lCLFFBQVEsQ0FBQ3pCLElBQUksQ0FBQytGLE9BQU8sQ0FBQzZCLEdBQUcsQ0FBQ3RGLElBQUksS0FBSztrQkFBRSxHQUFHQSxJQUFJO2tCQUFFbUcsT0FBTyxFQUFFLENBQUM7a0JBQUVzQixVQUFVLEVBQUVLO2dCQUFTLENBQUUsQ0FBQyxDQUFDO2dCQUVoRyxNQUFNLElBQUksQ0FBQyxDQUFBeEgsYUFBYyxDQUFDK0csTUFBTSxDQUFDM0osSUFBSSxFQUFFc1AsS0FBSyxDQUFDO2dCQUM3QyxPQUFPO2tCQUFFQyxPQUFPLEVBQUUsSUFBSTtrQkFBRUQsS0FBSztrQkFBRTdOO2dCQUFRLENBQUU7O2NBRzFDLE9BQU87Z0JBQUU4TixPQUFPLEVBQUUsS0FBSztnQkFBRUQsS0FBSztnQkFBRTdOO2NBQVEsQ0FBRTtZQUMzQyxDQUFDO1lBRUQ7WUFDQStOLG1CQUFtQixHQUFHeFAsSUFBSSxJQUFHO2NBQzVCLE1BQU13TyxNQUFNLEdBQUcsRUFBRTtjQUNqQixLQUFLLElBQUkzQixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc3TSxJQUFJLENBQUNxSyxNQUFNLEVBQUV3QyxDQUFDLElBQUksSUFBSSxDQUFDcUMsVUFBVSxFQUFFO2dCQUN0RFYsTUFBTSxDQUFDMUcsSUFBSSxDQUFDOUgsSUFBSSxDQUFDeVAsS0FBSyxDQUFDNUMsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDcUMsVUFBVSxDQUFDLENBQUM7O2NBRWhELE9BQU9WLE1BQU07WUFDZCxDQUFDO1lBRUQ3SSxJQUFJLEdBQUcsTUFBTTNGLElBQUksSUFBRztjQUNuQixNQUFNLElBQUksQ0FBQyxDQUFBNEMsYUFBYyxDQUFDZSxJQUFJLEVBQUU7Y0FDaEMsSUFBSSxDQUFDM0QsSUFBSSxFQUFFQSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVksTUFBTyxDQUFDZ0MsYUFBYSxDQUFDaUMsS0FBSyxDQUFDb0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDeUQsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDNUMsT0FBTyxFQUFFO2NBRTdGLE1BQU0wQixNQUFNLEdBQUcsSUFBSSxDQUFDZ0IsbUJBQW1CLENBQUN4UCxJQUFJLENBQUM7Y0FDN0MsTUFBTTJQLFlBQVksR0FBRyxFQUFFO2NBQ3ZCLE1BQU1DLGFBQWEsR0FBRyxFQUFFO2NBRXhCLEtBQUssTUFBTSxHQUFHTixLQUFLLENBQUMsSUFBSWQsTUFBTSxDQUFDekksT0FBTyxFQUFFLEVBQUU7Z0JBQ3pDLE1BQU1nSixNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUNNLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDO2dCQUMxQyxJQUFJLENBQUNQLE1BQU0sQ0FBQ1EsT0FBTyxFQUFFO2tCQUNwQkksWUFBWSxDQUFDN0gsSUFBSSxDQUFDaUgsTUFBTSxDQUFDO2lCQUN6QixNQUFNYSxhQUFhLENBQUM5SCxJQUFJLENBQUNpSCxNQUFNLENBQUM7O2NBR2xDLElBQUksQ0FBQyxDQUFBaEwsTUFBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztjQUM3QixNQUFNLElBQUksQ0FBQyxDQUFBcEQsTUFBTyxDQUFDMEUsSUFBSSxFQUFFO2NBQ3pCLElBQUlxSyxZQUFZLENBQUN0RixNQUFNLEVBQUU7Z0JBQ3hCLE1BQU03SSxPQUFPLEdBQUdtTyxZQUFZLENBQUN0RixNQUFNLEtBQUttRSxNQUFNLENBQUNuRSxNQUFNLEdBQUcsYUFBYSxHQUFHLGlCQUFpQjtnQkFFekYsT0FBTyxJQUFJLENBQUMsQ0FBQXRKLE9BQVEsQ0FBQ2hCLFFBQVEsQ0FBQztrQkFBRUMsSUFBSSxFQUFFO29CQUFFZ1AsTUFBTSxFQUFFVyxZQUFZO29CQUFFSixPQUFPLEVBQUVLLGFBQWE7b0JBQUV0TyxLQUFLLEVBQUVFO2tCQUFPO2dCQUFFLENBQUUsQ0FBQzs7Y0FHMUcsT0FBTyxJQUFJLENBQUMsQ0FBQVQsT0FBUSxDQUFDaEIsUUFBUSxDQUFDO2dCQUFFQyxJQUFJLEVBQUU0UDtjQUFhLENBQUUsQ0FBQztZQUN2RCxDQUFDO1lBRUQvSixNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ25CLElBQUk7Z0JBQ0gsTUFBTSxJQUFJLENBQUMsQ0FBQWpELGFBQWMsQ0FBQ2UsSUFBSSxFQUFFO2dCQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBZixhQUFjLENBQUNpQyxLQUFLLENBQUNvSCxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUN5RCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM1QyxPQUFPLEVBQUU7ZUFDckUsQ0FBQyxPQUFPMUgsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUMvRCxLQUFLLENBQUM4RCxDQUFDLENBQUM7O1lBRWxCLENBQUM7O1VBQ0QvRSxPQUFBLENBQUE2RCxxQkFBQSxHQUFBQSxxQkFBQTs7Ozs7Ozs7Ozs7VUNqSUQ7O1VBRUFoRCxNQUFBLENBQUFDLGNBQUEsQ0FBQWQsT0FBQTtZQUNBZSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQXlPLE1BQUEsR0FBQXRQLE9BQUE7VUFHQSxNQUFNdVAsWUFBWTtVQU9YO1VBQVcsTUFDWkMsSUFBSyxTQUFRRixNQUFBLENBQUFHLElBQVc7WUFDbkJySixVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7WUFFeER0RixZQUFZO2NBQUUwRCxFQUFFLEdBQUdxRjtZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRXJGLEVBQUU7Z0JBQUV2QixTQUFTLEVBQUUsTUFBTTtnQkFBRW5CLEVBQUUsRUFBRTtjQUFNLENBQUUsQ0FBQztZQUM3Qzs7VUFDQWhDLE9BQUEsQ0FBQTBQLElBQUEsR0FBQUEsSUFBQTs7Ozs7Ozs7Ozs7VUNqQkQ7O1VBRUE3TyxNQUFBLENBQUFDLGNBQUEsQ0FBQWQsT0FBQTtZQUNBZSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQU0sTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFzQixjQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQTBQLEtBQUEsR0FBQTFQLE9BQUE7VUFDQSxJQUFBd0IsS0FBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUEySCxLQUFBLEdBQUEzSCxPQUFBO1VBR0EsSUFBQXlCLFFBQUEsR0FBQXpCLE9BQUE7VUFJTztVQUFVLE1BQU95UCxJQUFXLFNBQVF0TyxNQUFBLENBQUFFLGFBQW9CO1lBTTlEbUQsRUFBRTtZQUNGLENBQUFtTCxJQUFLLEdBQUcsSUFBSXhOLEdBQUcsRUFBRTtZQUNqQjs7O1lBR0EsQ0FBQTZELFNBQVUsR0FBRyxJQUFJN0QsR0FBRyxFQUFFO1lBRVpGLE9BQU8sR0FBRyxJQUFJO1lBQ3hCLENBQUFVLFFBQVM7WUFDQ00sU0FBUztZQUNUbkIsRUFBRTtZQUNaOE4sV0FBVyxHQUFHLEVBQUU7WUFDaEIsQ0FBQUMsYUFBYyxHQUFrQixFQUFFO1lBQ2xDLENBQUFDLFFBQVMsR0FBa0IsRUFBRTtZQUM3QnpOLGFBQWE7WUFFSDBOLE1BQU0sR0FBa0IsRUFBRTtZQUVwQyxDQUFBdE4sV0FBWTtZQUVaLElBQUlxTixRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVRRSxLQUFLQSxDQUFDMU0sUUFBUTtjQUNyQixPQUFPLElBQUksQ0FBQ0EsUUFBUSxDQUFDO1lBQ3RCO1lBRUEsSUFBSVgsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBcUgsU0FBVSxHQUFHLENBQUM7WUFDZCxJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDekI7WUFFQSxJQUFJMUYsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDakMsYUFBYSxDQUFDaUMsS0FBSztZQUNoQztZQUVBLElBQUlsQyxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUNDLGFBQWEsQ0FBQ0QsUUFBUSxJQUFJLENBQUNzRyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRjtZQUVBLElBQUlzSCxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUM1TixhQUFhLENBQUM0TixZQUFZO1lBQ3ZDO1lBRUEsSUFBSUMsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDQyxVQUFVLEVBQUU7WUFDekI7WUFFQSxDQUFBek4sV0FBWTtZQUNaLENBQUEwTixXQUFZLEdBQUcsS0FBSztZQUNwQixDQUFBQyxZQUFhO1lBQ2IsQ0FBQUMsV0FBWTtZQU1aLENBQUFDLE1BQU87WUFDUCxDQUFBek4sZUFBZ0I7WUFDaEIsSUFBSUEsZUFBZUEsQ0FBQTtjQUNsQixPQUFPLElBQUksQ0FBQyxDQUFBQSxlQUFnQjtZQUM3QjtZQUNBaEMsWUFBWXlQLE1BQUEsR0FBc0IsRUFBRTtjQUNuQyxLQUFLLEVBQUU7Y0FDUCxNQUFNO2dCQUFFek8sRUFBRTtnQkFBRW1CLFNBQVM7Z0JBQUVoQixPQUFPLEdBQUc7Y0FBSSxDQUFFLEdBQUdzTyxNQUFNO2NBQ2hELElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDdE8sT0FBTyxHQUFHQSxPQUFPO2NBQ3RCLElBQUksQ0FBQyxDQUFBYSxlQUFnQixHQUFHckIsUUFBQSxDQUFBdEIsZUFBZSxDQUFDQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBbVEsTUFBTyxFQUFFL1AsT0FBTyxDQUFDO2NBRXhFLElBQUlzQixFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFLEdBQUdBLEVBQUU7Y0FDcEIsSUFBSW1CLFNBQVMsRUFBRSxJQUFJLENBQUNBLFNBQVMsR0FBR0EsU0FBUztjQUN6QyxJQUFJc04sTUFBTSxDQUFDNU4sUUFBUSxFQUFFO2dCQUNwQixJQUFJLE9BQU80TixNQUFNLENBQUM1TixRQUFRLEtBQUssVUFBVSxFQUFFO2tCQUMxQyxNQUFNLElBQUlPLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQzs7Z0JBR2hELElBQUksQ0FBQyxDQUFBUCxRQUFTLEdBQUcsSUFBSTROLE1BQU0sQ0FBQzVOLFFBQVEsQ0FBQyxJQUFJLENBQUM7O2NBRzNDLElBQUksQ0FBQ2tCLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDc00sVUFBVSxDQUFDO2NBQ3pDLElBQUksQ0FBQ2hOLGFBQWEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztjQUN2QyxNQUFNRSxXQUFXLEdBQUdDLFFBQVEsSUFBSSxJQUFJLENBQUMwTSxLQUFLLENBQUMxTSxRQUFRLENBQUM7Y0FDcEQsTUFBTUMsV0FBVyxHQUFHQSxDQUFDRCxRQUFRLEVBQUV6QyxLQUFLLEtBQU0sSUFBSSxDQUFDeUMsUUFBUSxDQUFDLEdBQUd6QyxLQUFNO2NBQ2pFLE1BQU0yQyxNQUFNLEdBQUc7Z0JBQUVwRCxHQUFHLEVBQUVpRCxXQUFXO2dCQUFFSSxHQUFHLEVBQUVGO2NBQVcsQ0FBRTtjQUNyRCxJQUFJLENBQUNsQixhQUFhLEdBQUcsSUFBSWYsY0FBQSxDQUFBa1AsYUFBYSxDQUFDLElBQUksRUFBRWhOLE1BQU0sQ0FBQztjQUNwRCxJQUFJLENBQUMsQ0FBQWYsV0FBWSxHQUFHLElBQUlpTixLQUFBLENBQUFlLGVBQWUsQ0FBQyxJQUFJLEVBQUVqTixNQUFNLENBQUM7Y0FDckQsSUFBSSxDQUFDLENBQUFkLFdBQVksR0FBRyxJQUFJbEIsS0FBQSxDQUFBa1AsZUFBZSxDQUFDLElBQUksRUFBRWxOLE1BQU0sQ0FBQztjQUNyRCxJQUFJLENBQUMyQixJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJLENBQUN3TCxJQUFJLENBQUMsSUFBSSxDQUFDO2NBQ2hDLElBQUksSUFBSSxDQUFDN08sRUFBRSxJQUFJLElBQUksQ0FBQ21CLFNBQVMsRUFBRSxJQUFJLENBQUNHLElBQUksQ0FBQ21OLE1BQU0sQ0FBQztZQUNqRDtZQUVVLE1BQU14TSxVQUFVQSxDQUFBO2NBQ3pCLElBQUksQ0FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBbU4sTUFBTyxDQUFDO1lBQ3hCO1lBRVUsTUFBTW5OLElBQUlBLENBQUNtTixNQUFtQjtjQUN2QyxJQUFJO2dCQUNILElBQUkvTCxFQUFFO2dCQUVOLElBQUksSUFBSSxDQUFDLENBQUE4TCxXQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtnQkFFL0MsSUFBSSxDQUFDLENBQUFBLFdBQVksR0FBRyxJQUFJM0ksS0FBQSxDQUFBc0IsY0FBYyxFQUFFO2dCQUV4QyxJQUFJc0gsTUFBTSxDQUFDL0wsRUFBRSxFQUFFQSxFQUFFLEdBQUcrTCxNQUFNLENBQUMvTCxFQUFFO2dCQUU3QixNQUFNLElBQUksQ0FBQ25DLGFBQWEsQ0FBQ2UsSUFBSSxDQUFDb0IsRUFBRSxDQUFDO2dCQUVqQyxJQUFJLElBQUksQ0FBQyxDQUFBc0wsUUFBUyxJQUFJLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUNoRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2tCQUNoRCxJQUFJLENBQUMxRCxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUEwSixRQUFTOztnQkFHakMsSUFBSVMsTUFBTSxDQUFDbkssVUFBVSxFQUFFLElBQUksQ0FBQzNDLEdBQUcsQ0FBQzhNLE1BQU0sQ0FBQ25LLFVBQVUsRUFBRSxJQUFJLENBQUM7Z0JBRXhELElBQUksQ0FBQzRDLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUMsQ0FBQXNILFdBQVksQ0FBQzNRLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQy9CLElBQUksQ0FBQ3VFLE9BQU8sQ0FBQyxlQUFlLENBQUM7Z0JBQzdCLElBQUksQ0FBQ1QsR0FBRyxDQUFDLElBQUksQ0FBQ3BCLGFBQWEsQ0FBQ3NELFFBQVEsQ0FBQ3RCLE1BQU0sQ0FBQztlQUM1QyxDQUFDLE9BQU9RLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDL0QsS0FBSyxDQUFDLG9CQUFvQixFQUFFOEQsQ0FBQyxDQUFDOztZQUV4QztZQUVBOzs7Ozs7OztZQVFVc0wsVUFBVSxHQUFHQSxDQUFBLEtBQUs7Y0FDM0IsSUFBSSxJQUFJLENBQUNuSCxLQUFLLEVBQUU7Z0JBQ2YsT0FBTyxJQUFJLENBQUNBLEtBQUs7O2NBRWxCLElBQUksSUFBSSxDQUFDLENBQUFxSCxZQUFhLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtjQUVqRCxJQUFJLENBQUMsQ0FBQUEsWUFBYSxHQUFHLElBQUkxSSxLQUFBLENBQUFzQixjQUFjLEVBQUU7Y0FFekMsSUFBSSxJQUFJLENBQUNtSCxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUFDLFlBQWEsQ0FBQzFRLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQXlRLFdBQVksQ0FBQztjQUVuRSxNQUFNUSxPQUFPLEdBQUdBLENBQUEsS0FBSztnQkFDcEIsSUFBSSxDQUFDLENBQUFSLFdBQVksR0FBRyxJQUFJO2dCQUN4QixJQUFJLENBQUMsQ0FBQUMsWUFBYSxDQUFDMVEsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBeVEsV0FBWSxDQUFDO2NBQzlDLENBQUM7Y0FDRCxJQUFJLENBQUN2TSxFQUFFLENBQUMsZUFBZSxFQUFFK00sT0FBTyxDQUFDO2NBQ2pDLE9BQU8sSUFBSSxDQUFDLENBQUFQLFlBQWE7WUFDMUIsQ0FBQztZQUVEbE0sVUFBVSxHQUFHdEQsS0FBSyxJQUFJLElBQUksQ0FBQ3dCLGFBQWEsQ0FBQzhCLFVBQVUsQ0FBQ3RELEtBQUssQ0FBQztZQUUxRDs7Ozs7O1lBS0lnUSxDQUFDO1lBQ0wsTUFBTXBOLEdBQUdBLENBQUNoRSxJQUFJLEVBQUUyRCxJQUFJLEdBQUcsS0FBSztjQUMzQixNQUFNLElBQUksQ0FBQzhNLE9BQU87Y0FFbEIsSUFBSTlNLElBQUksSUFBSSxJQUFJLENBQUNuQixPQUFPLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxDQUFBK0QsU0FBVSxHQUFHLElBQUk3RCxHQUFHLENBQUN4QixNQUFNLENBQUM2RSxPQUFPLENBQUMvRixJQUFJLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDNEMsYUFBYSxDQUFDOEMsSUFBSSxDQUFDMUYsSUFBSSxDQUFDOztjQVE5QixJQUFJLENBQUMyRyxVQUFVLENBQUM3QixPQUFPLENBQUVqQixRQUE0QixJQUFJO2dCQUN4RCxJQUFJLE9BQU9BLFFBQVEsS0FBSyxRQUFRLEVBQUU7a0JBQ2pDLElBQUk3RCxJQUFJLENBQUNvTSxjQUFjLENBQUN2SSxRQUFRLENBQUMwSSxJQUFJLENBQUMsRUFBRSxDO2tCQUV4Qzs7Z0JBRUQsSUFBSXZNLElBQUksQ0FBQ29NLGNBQWMsQ0FBQ3ZJLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsUUFBUSxDQUFDLEdBQUc3RCxJQUFJLENBQUM2RCxRQUFRLENBQUM7Y0FDbkUsQ0FBQyxDQUFDO2NBRUYsSUFBSSxDQUFDZCxZQUFZLEVBQUU7WUFDcEI7WUFFQTs7OztZQUlBNEwsU0FBU0EsQ0FBQTtjQUNSLE1BQU0vSixNQUFNLEdBQUcsRUFBRTtjQUNqQixNQUFNeU0sU0FBUyxHQUFHLElBQUksQ0FBQ2hCLFFBQVEsQ0FBQ2hHLE1BQU0sR0FBRyxJQUFJLENBQUNnRyxRQUFRLEdBQUcsSUFBSSxDQUFDMUosVUFBVTtjQUV4RTBLLFNBQVMsQ0FBQ3ZNLE9BQU8sQ0FBQ3dNLEtBQUssSUFBRztnQkFDekIsSUFBSSxJQUFJLENBQUNsRixjQUFjLENBQUNrRixLQUFLLENBQUMsRUFBRTFNLE1BQU0sQ0FBQzBNLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQ0EsS0FBSyxDQUFDO2NBQzVELENBQUMsQ0FBQztjQUNGLE9BQU8xTSxNQUFNO1lBQ2Q7WUFFQTJNLGdCQUFnQkEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDNUssVUFBVTtZQUN2QjtZQUVBakIsSUFBSUEsQ0FBQzFGLElBQUs7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBZ0QsV0FBWSxDQUFDMEMsSUFBSSxDQUFDMUYsSUFBSSxDQUFDO1lBQ3BDO1lBRUEyRixJQUFJQSxDQUFBO2NBQ0gsT0FBTyxJQUFJLENBQUMsQ0FBQTNDLFdBQVksQ0FBQzJDLElBQUksRUFBRTtZQUNoQztZQUVBNkwsU0FBU0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUF4TyxXQUFZLENBQUN3TyxTQUFTLEVBQUU7WUFDckM7WUFFQTVMLE9BQU9BLENBQUM1RixJQUFLO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQWdELFdBQVksQ0FBQzRDLE9BQU8sQ0FBQzVGLElBQUksQ0FBQztZQUN2QztZQUNBc0YsSUFBSUEsQ0FBQ2dCLE1BQU87Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBckQsV0FBWSxDQUFDcUMsSUFBSSxDQUFDZ0IsTUFBTSxDQUFDO1lBQ3RDO1lBQ0EsTUFBTXRCLE1BQU1BLENBQUE7Y0FDWCxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBdUYsU0FBVSxHQUFHLENBQUM7Z0JBQ25CLElBQUksSUFBSSxDQUFDM0gsYUFBYSxFQUFFLE1BQU0sSUFBSSxDQUFDQSxhQUFhLENBQUNvQyxNQUFNLEVBQUU7Z0JBQ3pELElBQUksSUFBSSxDQUFDOUIsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDQSxRQUFRLENBQUM4QixNQUFNLENBQUMsSUFBSSxDQUFDRCxFQUFFLENBQUM7Z0JBQ3RELElBQUksQ0FBQ2hDLFlBQVksRUFBRTtnQkFFbkIsT0FBTyxJQUFJO2VBQ1gsQ0FBQyxPQUFPcUMsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUMvRCxLQUFLLENBQUMsT0FBTyxFQUFFOEQsQ0FBQyxDQUFDOztZQUUzQjs7VUFDQS9FLE9BQUEsQ0FBQTJQLElBQUEsR0FBQUEsSUFBQTs7Ozs7Ozs7Ozs7VUMzUEQ7O1VBRUE5TyxNQUFBLENBQUFDLGNBQUEsQ0FBQWQsT0FBQTtZQUNBZSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFGLE1BQUEsQ0FBQUMsY0FBQSxDQUFBZCxPQUFBO1lBQ0FlLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBTSxNQUFPNlAsZUFBZTtZQUMzQixDQUFBclEsTUFBTztZQUVQLENBQUFnQyxhQUFjO1lBQ2QsQ0FBQU0sUUFBUztZQUNULENBQUFVLFdBQVk7WUFDWixDQUFBRyxNQUFPO1lBQ1AsQ0FBQWhELE9BQVE7WUFDUndJLEtBQUs7WUFFTGxJLFlBQVlULE1BQU0sRUFBRW1ELE1BQU07Y0FDekIsSUFBSSxDQUFDLENBQUFuRCxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFnRCxXQUFZLEdBQUdHLE1BQU0sQ0FBQ3BELEdBQUc7Y0FDOUIsSUFBSSxDQUFDLENBQUFvRCxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFoRCxPQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFILE1BQU8sQ0FBQ3lDLGVBQWU7Y0FDNUMsSUFBSSxDQUFDTSxJQUFJLEVBQUU7WUFDWjtZQUVBQSxJQUFJLEdBQUdBLENBQUEsS0FBSztjQUNYLElBQUksQ0FBQyxDQUFBZixhQUFjLEdBQUcsSUFBSSxDQUFDLENBQUFnQixXQUFZLENBQUMsZUFBZSxDQUFDO2NBQ3hELElBQUksQ0FBQyxDQUFBVixRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFVLFdBQVksQ0FBQyxVQUFVLENBQUM7Y0FDOUMsSUFBSSxDQUFDMkYsS0FBSyxHQUFHLElBQUk7WUFDbEIsQ0FBQztZQUVEOzs7Ozs7Ozs7O1lBVUFqRSxJQUFJLEdBQUcsTUFBT2dCLE1BQVcsSUFBSTtjQUM1QixJQUFJO2dCQUNILE1BQU0sSUFBSSxDQUFDLENBQUExQyxXQUFZLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBRXZDLElBQUksQ0FBQzBDLE1BQU0sRUFBRTtrQkFDWkEsTUFBTSxHQUFHO29CQUFFdkIsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBbkUsTUFBTyxDQUFDbUU7a0JBQUUsQ0FBRTs7Z0JBRWpDLE1BQU12QyxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQW9CLFdBQVksQ0FBQyxTQUFTLENBQUM7Z0JBQ2xELE1BQU1oQixhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUFnQixXQUFZLENBQUMsZUFBZSxDQUFDO2dCQUV4RCxJQUFJLENBQUMwQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUExRixNQUFPLENBQUNtRSxFQUFFLEVBQUV1QixNQUFNLEdBQUc7a0JBQUV2QixFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUFuRSxNQUFPLENBQUNtRTtnQkFBRSxDQUFFO2dCQUVoRSxJQUFJdkMsT0FBTyxJQUFJSSxhQUFhLEVBQUU7a0JBQzdCLE1BQU0yRCxTQUFTLEdBQUcsTUFBTTNELGFBQWEsQ0FBQzBDLElBQUksQ0FBQ2dCLE1BQU0sQ0FBQztrQkFDbEQsSUFBSUMsU0FBUyxFQUFFaEYsTUFBTSxFQUFFO29CQUN0QixJQUFJLENBQUMsQ0FBQVgsTUFBTyxDQUFDb0QsR0FBRyxDQUFDdUMsU0FBUyxDQUFDdkcsSUFBSSxFQUFFLElBQUksQ0FBQztvQkFDdEMsSUFBSXVHLFNBQVMsQ0FBQ3ZHLElBQUksQ0FBQ3dRLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTVOLGFBQWMsQ0FBQzROLFlBQVksR0FBR2pLLFNBQVMsQ0FBQ3ZHLElBQUksQ0FBQ3dRLFlBQVk7b0JBQy9GLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTVOLGFBQWMsQ0FBQzROLFlBQVksRUFDcEMsSUFBSSxDQUFDLENBQUE1TixhQUFjLENBQUM0TixZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUE1TixhQUFjLENBQUNzRCxRQUFRLENBQUNzSyxZQUFZOzs7Z0JBSS9FLElBQUk1TixhQUFhLElBQUksQ0FBQ0EsYUFBYSxDQUFDRCxRQUFRLEVBQUUsT0FBTztrQkFBRXBCLE1BQU0sRUFBRTtnQkFBSSxDQUFFO2dCQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEyQixRQUFTLEVBQUU7Z0JBQ3JCLE1BQU1pRCxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUNpQixVQUFVLENBQUNkLE1BQU0sQ0FBQztnQkFDaEQsSUFBSSxDQUFDSCxVQUFVLEVBQUU7a0JBQ2hCLElBQUksQ0FBQyxDQUFBdkYsTUFBTyxDQUFDaUksS0FBSyxHQUFHLEtBQUs7a0JBQzFCLE9BQU8sSUFBSSxDQUFDLENBQUE5SCxPQUFRLENBQUNoQixRQUFRLEVBQUU7O2dCQUdoQyxJQUFJLENBQUMsQ0FBQWEsTUFBTyxDQUFDaUksS0FBSyxHQUFHLElBQUk7Z0JBRXpCLElBQUksQ0FBQyxDQUFBakksTUFBTyxDQUFDb0QsR0FBRyxDQUFDbUMsVUFBVSxDQUFDO2dCQUM1QixJQUFJM0QsT0FBTyxFQUFFO2tCQUNaLElBQUlpUCxJQUFJLEdBQUcsSUFBSTtrQkFDZixJQUFJLENBQUMsQ0FBQTdRLE1BQU8sQ0FBQzJHLE1BQU0sR0FBRyxJQUFJO2tCQUUxQnJHLE1BQU0sQ0FBQ3NMLElBQUksQ0FBQ3JHLFVBQVUsQ0FBQyxDQUFDckIsT0FBTyxDQUFDMkgsR0FBRyxJQUFHO29CQUNyQyxJQUFJaUYsUUFBUSxHQUFHOU8sYUFBYSxDQUFDc0QsUUFBUSxDQUFDdEIsTUFBTTtvQkFDNUMsSUFBSThNLFFBQVEsQ0FBQ2pGLEdBQUcsQ0FBQyxLQUFLdEcsVUFBVSxDQUFDc0csR0FBRyxDQUFDLEVBQUVnRixJQUFJLEdBQUcsS0FBSztrQkFDcEQsQ0FBQyxDQUFDO2tCQUVGLElBQUksQ0FBQ0EsSUFBSSxFQUFFO29CQUNWLE1BQU0xTSxFQUFFLEdBQUcsQ0FBQzRNLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQS9RLE1BQU8sQ0FBQ21FLEVBQVksQ0FBQyxHQUN6QzZNLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQWhSLE1BQU8sQ0FBQ21FLEVBQVksQ0FBQyxHQUNuQyxJQUFJLENBQUMsQ0FBQW5FLE1BQU8sQ0FBQ21FLEVBQUU7b0JBQ2xCLE1BQU0sSUFBSSxDQUFDLENBQUFuQyxhQUFjLENBQUM4QyxJQUFJLENBQUM7c0JBQzlCLEdBQUdTLFVBQVU7c0JBQ2JwQixFQUFFO3NCQUNGeUwsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBNU4sYUFBYyxDQUFDNE47cUJBQ2xDLENBQUM7OztnQkFJSixPQUFPLElBQUksQ0FBQyxDQUFBelAsT0FBUSxDQUFDaEIsUUFBUSxDQUFDO2tCQUFFQyxJQUFJLEVBQUVtRztnQkFBVSxDQUFFLENBQUM7ZUFDbkQsQ0FBQyxPQUFPa0IsR0FBRyxFQUFFO2dCQUNiLE1BQU1BLEdBQUc7ZUFDVCxTQUFTO2dCQUNULElBQUksQ0FBQyxDQUFBekcsTUFBTyxDQUFDaUcsUUFBUSxHQUFHLEtBQUs7O1lBRS9CLENBQUM7WUFFRE8sVUFBVSxHQUFHLE1BQU1kLE1BQU0sSUFBRztjQUMzQjtjQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTFGLE1BQU8sQ0FBQytCLFFBQVEsRUFBRTtjQUM1Qjs7O2NBR0EsSUFBSWtQLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQTNPLFFBQVMsQ0FBQ2xELElBQUksR0FDakMsSUFBSSxDQUFDLENBQUFrRCxRQUFTLENBQUNsRCxJQUFJLENBQUNrUixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFoTyxRQUFTLENBQUMsR0FDeEMsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ29DLElBQUksQ0FBQzRMLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWhPLFFBQVMsQ0FBQztjQUUzQyxJQUFJLE9BQU8yTyxVQUFVLEtBQUssVUFBVSxFQUFFO2dCQUNyQ3hNLE9BQU8sQ0FBQy9ELEtBQUssQ0FBQywwRUFBMEUsQ0FBQztnQkFDekY7O2NBR0QsTUFBTUcsUUFBUSxHQUFHLE1BQU1vUSxVQUFVLENBQUN2TCxNQUFNLENBQUM7Y0FFekMsT0FBTyxJQUFJLENBQUMsQ0FBQXZGLE9BQVEsQ0FBQ1osVUFBVSxDQUFDc0IsUUFBUSxDQUFDO1lBQzFDLENBQUM7O1VBQ0RwQixPQUFBLENBQUE0USxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkhELElBQUF2UCxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQTRILFNBQUEsR0FBQTVILE9BQUE7VUFFQSxJQUFBeUYsUUFBQSxHQUFBekYsT0FBQTtVQUlPO1VBQVUsTUFDWHdRLGFBQWMsU0FBUXJQLE1BQUEsQ0FBQUUsYUFBa0I7WUFDN0MsQ0FBQWUsUUFBUyxHQUFHMkYsVUFBVSxDQUFDQyxTQUFTLENBQUNDLE1BQU07WUFDdkMsQ0FBQTNELEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUE0RCxPQUFRO1lBQ1IsQ0FBQXFKLEtBQU0sR0FBWSxLQUFLO1lBQ3ZCLENBQUFwSixRQUFTO1lBQ1QsQ0FBQWxGLFNBQVU7WUFDVixDQUFBbUYsWUFBYTtZQUNiLENBQUFpQixZQUFhO1lBQ2IsQ0FBQWhCLE1BQU8sR0FBRyxLQUFLO1lBQ2Y0SCxZQUFZO1lBQ1osSUFBSTVHLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBRUEsQ0FBQXZILEVBQUc7WUFFSCxJQUFJTSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE4RixPQUFRLElBQUksQ0FBQ1EsWUFBWSxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDckY7WUFFQSxDQUFBdEksTUFBTztZQUNQLENBQUFnRCxXQUFZO1lBQ1o7OztZQUdBLENBQUFtTyxlQUFnQjtZQUNoQjs7OztZQUlBLENBQUE3TCxRQUFTO1lBQ1QsQ0FBQTFELE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQTVCLE1BQU8sQ0FBQzRCLE9BQU87WUFDNUI7WUFDQSxDQUFBdUIsTUFBTztZQUVQLElBQUltQyxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLENBQUE2QyxLQUFNO1lBQ04xSCxZQUFZVCxNQUFNLEVBQUVtRCxNQUFNO2NBQ3pCLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxDQUFBSCxXQUFZLEdBQUdHLE1BQU0sQ0FBQ3BELEdBQUc7Y0FDOUIsTUFBTTtnQkFBRTBCLEVBQUU7Z0JBQUVtQjtjQUFTLENBQUUsR0FBRzVDLE1BQU07Y0FDaEMsSUFBSSxDQUFDb1IsSUFBSSxHQUFHcEcsSUFBSSxDQUFDcUcsS0FBSyxDQUFDckcsSUFBSSxDQUFDc0csTUFBTSxFQUFFLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUk7Y0FDbEUsSUFBSSxDQUFDLENBQUF0UixNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFtSSxLQUFNLEdBQUcxRyxFQUFFLElBQUltQixTQUFTO2NBQzdCLElBQUksQ0FBQyxDQUFBbUYsWUFBYSxHQUFHdEcsRUFBRTtjQUN2QixJQUFJLENBQUMsQ0FBQW1CLFNBQVUsR0FBR0EsU0FBUztjQUMzQixJQUFJLENBQUMsQ0FBQU8sTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBdkIsT0FBUSxHQUFHdUIsTUFBTSxDQUFDcEQsR0FBRyxDQUFDLFNBQVMsQ0FBQztjQUNyQyxJQUFJLENBQUMsQ0FBQW9SLGVBQWdCLEdBQUcvTCxRQUFBLENBQUFJLGVBQWUsQ0FBQ3pGLEdBQUcsQ0FBQzBCLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQUcsT0FBUSxDQUFDO2NBQzlELElBQUksQ0FBQzhDLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUksQ0FBQzRMLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDakM7WUFFQXhNLFVBQVVBLENBQUN0RCxLQUFLO2NBQ2YsSUFBSSxDQUFDLENBQUFxSCxPQUFRLEdBQUdySCxLQUFLO2NBRXJCLElBQUksQ0FBQzJCLFlBQVksRUFBRTtZQUNwQjtZQUVBWSxJQUFJLEdBQUcsTUFBQUEsQ0FBT29CLEVBQUEsR0FBa0NxRixTQUFTLEtBQUk7Y0FDNUQsSUFBSTtnQkFDSCxJQUFJLElBQUksQ0FBQyxDQUFBNUgsT0FBUSxFQUFFO2tCQUNsQixNQUFNa0csUUFBUSxHQUFvQixNQUFNUCxTQUFBLENBQUFzQixTQUFTLENBQUM5SSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUFnSSxZQUFhLENBQUM7a0JBQ3pFLElBQUksQ0FBQyxDQUFBRCxRQUFTLEdBQUdBLFFBQVE7a0JBQ3pCLElBQUksQ0FBQyxDQUFBN0QsS0FBTSxHQUFHNkQsUUFBUSxDQUFDckcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBbUIsU0FBVSxDQUFDOztnQkFHM0MsSUFBSSxDQUFDLENBQUFzTyxLQUFNLEdBQUcsQ0FBQyxDQUFDL00sRUFBRTtnQkFDbEIsT0FBTyxJQUFJLENBQUMsQ0FBQW9OLFdBQVksQ0FBQ3BOLEVBQUUsQ0FBQztlQUM1QixDQUFDLE9BQU9LLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDL0QsS0FBSyxDQUFDOEQsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBQ0RnTixXQUFXQSxDQUFDQyxJQUFJLEVBQUVDLElBQUk7Y0FDckIsTUFBTUMsS0FBSyxHQUFHclIsTUFBTSxDQUFDc0wsSUFBSSxDQUFDNkYsSUFBSSxDQUFDO2NBQy9CLE1BQU1HLEtBQUssR0FBR3RSLE1BQU0sQ0FBQ3NMLElBQUksQ0FBQzhGLElBQUksQ0FBQztjQUUvQixJQUFJQyxLQUFLLENBQUNsSSxNQUFNLEtBQUttSSxLQUFLLENBQUNuSSxNQUFNLEVBQUU7Z0JBQ2xDLE9BQU8sS0FBSzs7Y0FHYixLQUFLLElBQUlvQyxHQUFHLElBQUk4RixLQUFLLEVBQUU7Z0JBQ3RCLE1BQU1FLElBQUksR0FBR0osSUFBSSxDQUFDNUYsR0FBRyxDQUFDO2dCQUN0QixNQUFNaUcsSUFBSSxHQUFHSixJQUFJLENBQUM3RixHQUFHLENBQUM7Z0JBRXRCLE1BQU1rRyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxRQUFRLENBQUNILElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQ0csUUFBUSxDQUFDRixJQUFJLENBQUM7Z0JBQzdELElBQUtDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQ1AsV0FBVyxDQUFDSyxJQUFJLEVBQUVDLElBQUksQ0FBQyxJQUFNLENBQUNDLFVBQVUsSUFBSUYsSUFBSSxLQUFLQyxJQUFLLEVBQUU7a0JBQ3BGLE9BQU8sS0FBSzs7O2NBSWQsT0FBTyxJQUFJO1lBQ1o7WUFDQUUsUUFBUUEsQ0FBQ0MsTUFBTTtjQUNkLE9BQU9BLE1BQU0sSUFBSSxJQUFJLElBQUksT0FBT0EsTUFBTSxLQUFLLFFBQVE7WUFDcEQ7WUFDQTs7Ozs7WUFLQSxDQUFBQyxhQUFjQyxDQUFDL1MsSUFBSTtjQUNsQixNQUFNMkcsVUFBVSxHQUFHekYsTUFBTSxDQUFDc0wsSUFBSSxDQUFDeE0sSUFBSSxDQUFDO2NBQ3BDLE1BQU1nVCxTQUFTLEdBQUc7Z0JBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTlNLFFBQVMsQ0FBQ3RCO2NBQU0sQ0FBRTtjQUM5QyxNQUFNcU8sUUFBUSxHQUFHLElBQUksQ0FBQ2IsV0FBVyxDQUFDWSxTQUFTLEVBQUVoVCxJQUFJLENBQUM7Y0FFbEQsT0FBTyxDQUFDaVQsUUFBUTtZQUNqQjtZQUVBLE1BQU0zTixJQUFJQSxDQUFDZ0IsTUFBQSxHQUFjLEVBQUU7Y0FDMUIsSUFBSTtnQkFDSCxJQUFJdkIsRUFBRSxHQUFHdUIsTUFBTSxDQUFDdkIsRUFBRTtnQkFDbEI7Z0JBQ0FBLEVBQUUsR0FBR0EsRUFBRSxJQUFJLElBQUksQ0FBQ21CLFFBQVEsQ0FBQ3RCLE1BQU0sRUFBRUcsRUFBRTtnQkFFbkMsSUFBSSxDQUFDQSxFQUFFLEVBQUUsTUFBTSxnQkFBZ0I7Z0JBRS9CLE1BQU0sSUFBSSxDQUFDLENBQUFvTixXQUFZLENBQUNwTixFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxDQUFBbkUsTUFBTyxDQUFDZ0csV0FBVyxHQUFHLElBQUk7Z0JBQy9CLElBQUksQ0FBQyxDQUFBaEcsTUFBTyxDQUFDb0QsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBa0MsUUFBUyxDQUFDdEIsTUFBTSxDQUFDO2dCQUN2QyxPQUFPO2tCQUFFckQsTUFBTSxFQUFFLElBQUk7a0JBQUV2QixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUFrRyxRQUFTLENBQUN0QjtnQkFBTSxDQUFFO2VBQ3BELENBQUMsT0FBT1EsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUMvRCxLQUFLLENBQUM4RCxDQUFDLENBQUM7Z0JBQ2hCLE9BQU9BLENBQUM7O1lBRVY7WUFFQTs7Ozs7OztZQU9BLENBQUErTSxXQUFZLEdBQUcsTUFBTXBOLEVBQUUsSUFBRztjQUN6QixJQUFJbUIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUE2TCxlQUFnQixDQUFDcFIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBNkMsU0FBVSxFQUFFdUIsRUFBRSxDQUFDO2NBQ25FLElBQUkvRSxJQUFJLEdBQUc7Z0JBQUUrRTtjQUFFLENBQUU7Y0FDakIsSUFBSThELEtBQUssR0FBRyxDQUFDLENBQUMzQyxRQUFRO2NBRXRCLElBQUkyQyxLQUFLLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLENBQUFqSSxNQUFPLENBQUNvRCxHQUFHLENBQUNrQyxRQUFRLENBQUN0QixNQUFNLENBQUM7Z0JBQ2pDaUUsS0FBSyxHQUFHLElBQUk7Z0JBQ1osSUFBSSxDQUFDLENBQUEzQyxRQUFTLEdBQUdBLFFBQVE7Z0JBQ3pCLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUM5QixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBOE8sY0FBZSxDQUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsQ0FBQVksS0FBTSxHQUFHLElBQUksQ0FBQyxDQUFBNUwsUUFBUyxFQUFFdEIsTUFBTSxFQUFFa04sS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLO2dCQUMxRDs7Y0FHRCxJQUFJLENBQUM1TCxRQUFRLElBQUksSUFBSSxDQUFDMUQsT0FBTyxJQUFJdUMsRUFBRSxFQUFFO2dCQUNwQyxNQUFNRixLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFBLEtBQU07Z0JBQ3pCLE1BQU0wQixTQUFTLEdBQUcsTUFBTTFCLEtBQUssQ0FBQ2xFLEdBQUcsQ0FBQ29FLEVBQUUsQ0FBQztnQkFDckMsSUFBSXdCLFNBQVMsRUFBRXZHLElBQUksR0FBR3VHLFNBQVM7Z0JBQy9Cc0MsS0FBSyxHQUFHLElBQUk7O2NBR2IsSUFBSUEsS0FBSyxFQUFFO2dCQUNWLElBQUksQ0FBQyxDQUFBakksTUFBTyxDQUFDaUksS0FBSyxHQUFHQSxLQUFLO2dCQUMxQixJQUFJLENBQUMsQ0FBQWpJLE1BQU8sQ0FBQ2tHLE1BQU0sR0FBRyxJQUFJOztjQUczQlosUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBNkwsZUFBZ0IsQ0FBQ29CLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTNQLFNBQVUsRUFBRXhELElBQUksQ0FBQztjQUM5RCxJQUFJLENBQUMsQ0FBQWtHLFFBQVMsR0FBR0EsUUFBUTtjQUN6QixJQUFJLENBQUMsQ0FBQUEsUUFBUyxDQUFDOUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQThPLGNBQWUsQ0FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztjQUM1RCxJQUFJLENBQUMsQ0FBQVksS0FBTSxHQUFHLElBQUksQ0FBQyxDQUFBNUwsUUFBUyxFQUFFdEIsTUFBTSxFQUFFa04sS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLO2NBQzFELE9BQU8sSUFBSSxDQUFDLENBQUE1TCxRQUFTLENBQUN0QixNQUFNO1lBQzdCLENBQUM7WUFFRCxDQUFBc08sY0FBZUUsQ0FBQTtjQUNkLElBQUksQ0FBQyxDQUFBeFMsTUFBTyxDQUFDb0QsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBa0MsUUFBUyxDQUFDdEIsTUFBTSxDQUFDO1lBQ3hDO1lBQ0EsTUFBTWMsSUFBSUEsQ0FBQzFGLElBQUk7Y0FDZCxJQUFJO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQThTLGFBQWMsQ0FBQzlTLElBQUksQ0FBQyxFQUFFO2dCQUNoQ0EsSUFBSSxDQUFDeUksT0FBTyxHQUFHLElBQUksQ0FBQzlGLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDcEMzQyxJQUFJLENBQUM4UixLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUVqQztnQkFDQSxNQUFNdUIsVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ3RULElBQUksQ0FBQztnQkFFeEQsSUFBSXFULFVBQVUsQ0FBQ2hKLE1BQU0sRUFBRSxPQUFPO2tCQUFFL0ksS0FBSyxFQUFFLFlBQVk7a0JBQUVpUyxNQUFNLEVBQUVGO2dCQUFVLENBQUU7Z0JBRXpFLE1BQU0sSUFBSSxDQUFDLENBQUE1TSxNQUFPLENBQUN6RyxJQUFJLENBQUM7Z0JBRXhCLE9BQU8sSUFBSTtlQUNYLENBQUMsT0FBT29GLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDL0QsS0FBSyxDQUFDLGNBQWMsRUFBRThELENBQUMsQ0FBQzVELE9BQU8sQ0FBQzs7WUFFMUM7WUFFQSxNQUFNOFIsb0JBQW9CQSxDQUFDdFQsSUFBSTtjQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDd0MsT0FBTyxFQUFFLE9BQU8sRUFBRTtjQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFvQixXQUFZLENBQUMsUUFBUSxDQUFDLENBQUN5RyxNQUFNLEVBQUUsT0FBTyxFQUFFO2NBRWxELE1BQU1tSixhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUE1UCxXQUFZLENBQUMsUUFBUSxDQUFDLENBQUNnRSxHQUFHLENBQUMwSixLQUFLLElBQzFELElBQUksQ0FBQyxDQUFBek0sS0FBTSxDQUNUb0gsS0FBSyxDQUFDcUYsS0FBSyxDQUFDLENBQ1o1QixNQUFNLENBQUMxUCxJQUFJLENBQUNzUixLQUFLLENBQUMsQ0FBQyxDQUNuQjVGLEtBQUssRUFBRSxDQUNQK0gsSUFBSSxDQUFDL0gsS0FBSyxJQUFHO2dCQUNiLElBQUlBLEtBQUssRUFBRTtrQkFDVixPQUFPNEYsS0FBSzs7Z0JBRWIsT0FBTyxJQUFJO2NBQ1osQ0FBQyxDQUFDLENBQ0g7Y0FFRCxNQUFNb0MsZUFBZSxHQUFHLENBQUMsTUFBTXpULE9BQU8sQ0FBQzhILEdBQUcsQ0FBQ3lMLGFBQWEsQ0FBQyxFQUFFL04sTUFBTSxDQUFDNkwsS0FBSyxJQUFJQSxLQUFLLEtBQUssSUFBSSxDQUFDO2NBQzFGLE9BQU9vQyxlQUFlO1lBQ3ZCO1lBRUExTyxNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTBELFFBQVMsRUFBRTtjQUVyQixNQUFNN0QsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBNkQsUUFBUyxDQUFDckcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBbUIsU0FBVSxDQUFDO2NBQ2hELE1BQU1xQixLQUFLLENBQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQWtCLFFBQVMsQ0FBQ3RCLE1BQU0sQ0FBQ0csRUFBRSxDQUFDO1lBQzdDLENBQUM7WUFFRDRPLGNBQWMsR0FBRyxNQUFNQyxVQUFVLElBQUc7Y0FDbkMsTUFBTS9PLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQTZELFFBQVMsQ0FBQ3JHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQW1CLFNBQVUsQ0FBQztjQUNoRCxNQUFNcUIsS0FBSyxDQUFDRyxNQUFNLENBQUM0TyxVQUFVLENBQUM7Y0FDOUIsSUFBSSxDQUFDN1EsWUFBWSxFQUFFO2NBQ25CLE9BQU8sSUFBSTtZQUNaLENBQUM7WUFFRCxNQUFNLENBQUEwRCxNQUFPb04sQ0FBQzdULElBQUk7Y0FDakIsTUFBTThULE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQTVOLFFBQVMsQ0FBQ3FJLFNBQVMsQ0FBQ3ZPLElBQUksQ0FBQztjQUM5QyxJQUFJLENBQUM4VCxPQUFPLEVBQUU7Y0FDZCxNQUFNalAsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBNkQsUUFBUyxDQUFDckcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBbUIsU0FBVSxDQUFDO2NBQ2hELE1BQU1xQixLQUFLLENBQUNrUCxHQUFHLENBQUM7Z0JBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTdOLFFBQVMsQ0FBQ3RCLE1BQU07Z0JBQUUsR0FBRzVFO2NBQUksQ0FBRSxDQUFDO2NBQ3RELElBQUksQ0FBQytDLFlBQVksRUFBRTtjQUNuQixPQUFPLElBQUk7WUFDWjs7VUFDQTFDLE9BQUEsQ0FBQTBRLGFBQUEsR0FBQUEsYUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwUEssTUFBT0MsZUFBZTtZQUMzQixDQUFBcFEsTUFBTztZQUNQLENBQUFnRCxXQUFZO1lBQ1osQ0FBQUcsTUFBTztZQUNQLENBQUFiLFFBQVM7WUFDVCxDQUFBTixhQUFjO1lBRWQsQ0FBQTdCLE9BQVE7WUFDUk0sWUFBWVQsTUFBaUIsRUFBRW1ELE1BQU07Y0FDcEMsSUFBSSxDQUFDLENBQUFuRCxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFnRCxXQUFZLEdBQUdHLE1BQU0sQ0FBQ3BELEdBQUc7Y0FDOUIsSUFBSSxDQUFDLENBQUFvRCxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFoRCxPQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFILE1BQU8sQ0FBQ3lDLGVBQWU7Y0FDNUMsSUFBSSxDQUFDTSxJQUFJLEVBQUU7WUFDWjtZQUVBQSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUEvQyxNQUFPLENBQUNvVCxXQUFXLEdBQUcsSUFBSSxDQUFDQSxXQUFXO2NBQzNDLElBQUksQ0FBQyxDQUFBcFIsYUFBYyxHQUFHLElBQUksQ0FBQyxDQUFBZ0IsV0FBWSxDQUFDLGVBQWUsQ0FBQztjQUN4RCxJQUFJLENBQUMsQ0FBQVYsUUFBUyxHQUFHLElBQUksQ0FBQyxDQUFBVSxXQUFZLENBQUMsVUFBVSxDQUFDO1lBQy9DO1lBRUE4QixJQUFJLEdBQUcsTUFBTzFGLElBQUssSUFBSTtjQUN0QixJQUFJO2dCQUNILE1BQU0sSUFBSSxDQUFDLENBQUE0RCxXQUFZLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBRXZDLElBQUk1RCxJQUFJLEVBQUU7a0JBQ1QsTUFBTSxJQUFJLENBQUMsQ0FBQVksTUFBTyxDQUFDb0QsR0FBRyxDQUFDaEUsSUFBSSxDQUFDOztnQkFHN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBWSxNQUFPLENBQUNrUyxhQUFhLEVBQUU7Z0JBRWpDLE1BQU1uTSxVQUFVLEdBQUc7a0JBQUUsR0FBRzNHLElBQUk7a0JBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQVksTUFBTyxDQUFDdU4sYUFBYTtnQkFBRSxDQUFFO2dCQUUvRHhILFVBQVUsQ0FBQ21MLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQWxQLGFBQWMsQ0FBQ3NELFFBQVEsQ0FBQzRMLEtBQUs7Z0JBQ3JEbkwsVUFBVSxDQUFDNkosWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFBNU4sYUFBYyxDQUFDc0QsUUFBUSxDQUFDc0ssWUFBWTtnQkFFbkUsSUFBSSxJQUFJLENBQUMsQ0FBQTVQLE1BQU8sQ0FBQytCLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQU8sUUFBUyxFQUFFO2tCQUM1QyxNQUFNekIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFtRSxPQUFRLENBQUNlLFVBQVUsQ0FBQztrQkFDaEQsSUFBSSxDQUFDLENBQUEvRCxhQUFjLENBQUNzRCxRQUFRLENBQUNxSSxTQUFTLENBQUM5TSxRQUFRLENBQUN6QixJQUFJLENBQUM7a0JBQ3JEMkcsVUFBVSxDQUFDNUIsRUFBRSxHQUFHdEQsUUFBUSxFQUFFekIsSUFBSSxFQUFFK0UsRUFBRTtrQkFDbEMsSUFBSSxDQUFDLENBQUFoRSxPQUFRLENBQUNaLFVBQVUsQ0FBQ3NCLFFBQVEsQ0FBQztrQkFDbEMsSUFBSSxDQUFDLENBQUFtQixhQUFjLENBQUNzRCxRQUFRLENBQUM0TCxLQUFLLEdBQUcsS0FBSzs7Z0JBRzNDLElBQUksSUFBSSxDQUFDLENBQUFsUCxhQUFjLEVBQUU7a0JBQ3hCLE1BQU0sSUFBSSxDQUFDLENBQUFBLGFBQWMsQ0FBQzhDLElBQUksQ0FBQ2lCLFVBQVUsQ0FBQzs7Z0JBRTNDLElBQUksQ0FBQyxDQUFBL0YsTUFBTyxDQUFDbUMsWUFBWSxFQUFFO2dCQUUzQixPQUFPLElBQUksQ0FBQyxDQUFBaEMsT0FBUSxDQUFDaEIsUUFBUSxFQUFFO2VBQy9CLENBQUMsT0FBT3FGLENBQUMsRUFBRTtnQkFDWCxPQUFPQSxDQUFDOztZQUVWLENBQUM7WUFDRFEsT0FBTyxHQUFHLElBQUksQ0FBQ0YsSUFBSTtZQUNuQixDQUFBRSxPQUFRLEdBQUcsTUFBT2UsVUFBVyxJQUFJO2NBQ2hDLElBQUk7Z0JBQ0h0QixPQUFPLENBQUM0TyxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEvUSxRQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWEsTUFBTyxDQUFDcEQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN0RCxJQUFJdVQsS0FBSyxHQUFHO2tCQUFFLEdBQUd2TjtnQkFBVSxDQUFFO2dCQUM3QnRCLE9BQU8sQ0FBQzRPLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLENBQUF0VCxNQUFPLENBQUN1UCxXQUFXLENBQUNyTCxPQUFPLENBQUN3TSxLQUFLLElBQUc7a0JBQ3hDLE9BQU80QyxLQUFLLENBQUM1QyxLQUFLLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQztnQkFDRixNQUFNN1AsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF5QixRQUFTLENBQUMwQyxPQUFPLENBQUNzTyxLQUFLLENBQUM7Z0JBRXBELE1BQU1sVSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUFlLE9BQVEsQ0FBQ1osVUFBVSxDQUFDc0IsUUFBUSxDQUFDO2dCQUMvQyxNQUFNLElBQUksQ0FBQyxDQUFBYixNQUFPLENBQUNvRCxHQUFHLENBQUNoRSxJQUFJLENBQUM7Z0JBQzVCLElBQUksSUFBSSxDQUFDLENBQUE0QyxhQUFjLEVBQUU7a0JBQ3hCLElBQUksQ0FBQyxDQUFBQSxhQUFjLENBQUM4QyxJQUFJLENBQUMxRixJQUFJLENBQUM7a0JBQzlCLElBQUlrVSxLQUFLLENBQUNuUCxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUFuQyxhQUFjLENBQUNzRCxRQUFRLENBQUNzSyxZQUFZLEVBQUU7b0JBQzNELElBQUksQ0FBQyxDQUFBNU4sYUFBYyxDQUFDK1EsY0FBYyxDQUFDTyxLQUFLLENBQUNuUCxFQUFFLENBQUM7O2tCQUc3QyxJQUFJLENBQUMsQ0FBQW5DLGFBQWMsQ0FBQzZCLE9BQU8sQ0FBQyxRQUFRLENBQUM7O2dCQUV0QyxPQUFPLElBQUksQ0FBQyxDQUFBMUQsT0FBUSxDQUFDaEIsUUFBUSxDQUFDO2tCQUFFQztnQkFBSSxDQUFFLENBQUM7ZUFDdkMsQ0FBQyxPQUFPc0IsS0FBSyxFQUFFO2dCQUNmK0QsT0FBTyxDQUFDL0QsS0FBSyxDQUFDLGtCQUFrQixFQUFFQSxLQUFLLENBQUM7Z0JBQ3hDLE9BQU8sSUFBSSxDQUFDLENBQUFQLE9BQVEsQ0FBQ2hCLFFBQVEsQ0FBQztrQkFBRXVCO2dCQUFLLENBQUUsQ0FBQzs7WUFFMUMsQ0FBQztZQUVEcUUsSUFBSSxHQUFHQSxDQUFBLEtBQUs7Y0FDWCxNQUFNekMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBVSxXQUFZLENBQUMsZUFBZSxDQUFDO2NBRW5ELElBQUksQ0FBQ1YsUUFBUSxDQUFDZ0QsUUFBUSxDQUFDdEIsTUFBTSxDQUFDNkQsT0FBTyxFQUFFO2dCQUN0Q3BELE9BQU8sQ0FBQzhKLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdkM7O2NBR0QsSUFBSSxDQUFDLENBQUF2SixPQUFRLENBQUMxQyxRQUFRLENBQUNnRCxRQUFRLENBQUN0QixNQUFNLENBQUM7Y0FDdkM7WUFDRCxDQUFDOztZQUVENE0sU0FBU0EsQ0FBQTtjQUNSLE1BQU10TyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFVLFdBQVksQ0FBQyxlQUFlLENBQUM7Y0FDbkQsTUFBTXNRLEtBQUssR0FBRztnQkFBRSxHQUFHaFIsUUFBUSxDQUFDZ0QsUUFBUSxDQUFDdEI7Y0FBTSxDQUFFO2NBRTdDLElBQUksQ0FBQyxDQUFBaEUsTUFBTyxDQUFDdVAsV0FBVyxDQUFDckwsT0FBTyxDQUFDd00sS0FBSyxJQUFHO2dCQUN4QyxPQUFPNEMsS0FBSyxDQUFDNUMsS0FBSyxDQUFDO2NBQ3BCLENBQUMsQ0FBQztjQUVGLElBQUksQ0FBQyxDQUFBcE8sUUFBUyxDQUFDMEMsT0FBTyxDQUFDc08sS0FBSyxDQUFDO1lBQzlCO1lBQ0FGLFdBQVcsR0FBRyxNQUFBQSxDQUFPaFUsSUFBSSxHQUFHb0ssU0FBUyxLQUFJO2NBQ3hDLElBQUk7Z0JBQ0gsTUFBTSxJQUFJLENBQUMsQ0FBQXhHLFdBQVksQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFFdkMsSUFBSTVELElBQUksRUFBRTtrQkFDVCxJQUFJLENBQUMsQ0FBQVksTUFBTyxDQUFDb0QsR0FBRyxDQUFDaEUsSUFBSSxDQUFDOztnQkFHdkIsTUFBTTJHLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQS9GLE1BQU8sQ0FBQ3VOLGFBQWEsRUFBRTtnQkFFL0MsSUFBSSxJQUFJLENBQUMsQ0FBQXZMLGFBQWMsRUFBRTtrQkFDeEI7a0JBQ0E7a0JBQ0EsTUFBTSxJQUFJLENBQUMsQ0FBQUEsYUFBYyxDQUFDOEMsSUFBSSxDQUFDaUIsVUFBVSxDQUFDOztnQkFHM0MsSUFBSSxDQUFDLENBQUEvRixNQUFPLENBQUNtQyxZQUFZLEVBQUU7Z0JBRTNCLE9BQU8sSUFBSSxDQUFDLENBQUFoQyxPQUFRLENBQUNoQixRQUFRLEVBQUU7ZUFDL0IsQ0FBQyxPQUFPcUYsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUMvRCxLQUFLLENBQUMsd0JBQXdCLEVBQUU4RCxDQUFDLENBQUM7O1lBRTVDLENBQUM7O1VBQ0QvRSxPQUFBLENBQUEyUSxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdElNO1VBQVUsTUFBZ0JtRCxrQkFBa0I7WUFDbEQzTSxJQUFJQSxDQUFDakUsS0FBYSxHQUFHO1lBQ3JCcUMsT0FBT0EsQ0FBQ3NPLEtBQWEsR0FBRztZQUN4QjVPLElBQUlBLENBQUMvQixLQUFhLEdBQUc7O1VBQ3JCbEQsT0FBQSxDQUFBOFQsa0JBQUEsR0FBQUEsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSk07VUFBVSxNQUFnQkMsWUFBWTtZQUM1Q3BQLE1BQU1BLENBQUNELEVBQVUsR0FBRztZQUNwQmEsT0FBT0EsQ0FBQ3NPLEtBQWEsR0FBRztZQUN4QjVPLElBQUlBLENBQUMvQixLQUFhLEdBQUc7O1VBQ3JCbEQsT0FBQSxDQUFBK1QsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pELElBQUExUyxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQXNQLE1BQUEsR0FBQXRQLE9BQUE7VUFDQSxJQUFBMkgsS0FBQSxHQUFBM0gsT0FBQTtVQU1BOzs7VUFHTSxNQUFrQjZGLGVBQWdCLFNBQVExRSxNQUFBLENBQUFFLGFBQXVCO1lBQ3RFLENBQUF5UyxNQUFPLEdBQUcsSUFBSTNSLEdBQUcsRUFBRTtZQUVuQixDQUFBNFIsTUFBTztZQUNQLENBQUE5UixPQUFRO1lBQ1JuQixZQUFZaVQsTUFBTSxFQUFFOVIsT0FBTyxHQUFHLElBQUk7Y0FDakMsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUE4UixNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUE5UixPQUFRLEdBQUdBLE9BQU87Y0FDdkIsSUFBSSxDQUFDbUIsSUFBSSxFQUFFO1lBQ1o7WUFFQSxDQUFBaU4sWUFBYTtZQUNiLE1BQU1qTixJQUFJQSxDQUFBO2NBQ1QsSUFBSSxJQUFJLENBQUM0RixLQUFLLEVBQUUsT0FBTyxJQUFJO2NBQzNCLElBQUksSUFBSSxDQUFDLENBQUFxSCxZQUFhLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtjQUNqRCxJQUFJLENBQUMsQ0FBQUEsWUFBYSxHQUFHLElBQUkxSSxLQUFBLENBQUFzQixjQUFjLEVBQUU7Y0FFekMsSUFBSSxDQUFDLENBQUFvSCxZQUFhLENBQUMxUSxPQUFPLEVBQUU7Y0FDNUIsSUFBSSxDQUFDLENBQUEwUSxZQUFhLEdBQUd4RyxTQUFTO2NBQzlCLElBQUksQ0FBQ2IsS0FBSyxHQUFHLElBQUk7WUFDbEI7WUFFQTs7Ozs7WUFLQWdMLFlBQVlBLENBQUMvUSxTQUFTLEVBQUVqQixLQUFLO2NBQzVCLE1BQU1pUyxVQUFVLEdBQUdqUyxLQUFLLENBQUNxRixHQUFHLENBQUN0RixJQUFJLElBQUc7Z0JBQ25DLElBQUksSUFBSSxDQUFDbVMsT0FBTyxDQUFDalIsU0FBUyxFQUFFbEIsSUFBSSxDQUFDeUMsRUFBRSxDQUFDLEVBQUU7a0JBQ3JDLE9BQU8sSUFBSSxDQUFDbUUsT0FBTyxDQUFDMUYsU0FBUyxFQUFFbEIsSUFBSSxDQUFDeUMsRUFBRSxDQUFDOztnQkFHeEMsT0FBTyxJQUFJLENBQUNvTyxNQUFNLENBQUMzUCxTQUFTLEVBQUVsQixJQUFJLENBQUM7Y0FDcEMsQ0FBQyxDQUFDO1lBQ0g7WUFFQTs7Ozs7Ozs7OztZQVVBbVMsT0FBT0EsQ0FBQ2pSLFNBQVMsRUFBRXVCLEVBQUU7Y0FDcEIsT0FBTyxJQUFJLENBQUMsQ0FBQXNQLE1BQU8sQ0FBQ3ZHLEdBQUcsQ0FBQ3RLLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFBNlEsTUFBTyxDQUFDMVQsR0FBRyxDQUFDNkMsU0FBUyxDQUFDLENBQUNzSyxHQUFHLENBQUMvSSxFQUFFLENBQUM7WUFDMUU7WUFFQW1FLE9BQU9BLENBQUMxRixTQUFTLEVBQUV1QixFQUFFO2NBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMwUCxPQUFPLENBQUNqUixTQUFTLEVBQUV1QixFQUFFLENBQUMsRUFBRSxNQUFNLElBQUl0QixLQUFLLENBQUMsUUFBUXNCLEVBQUUsNkJBQTZCdkIsU0FBUyxFQUFFLENBQUM7Y0FDckcsT0FBTyxJQUFJLENBQUMsQ0FBQTZRLE1BQU8sQ0FBQzFULEdBQUcsQ0FBQzZDLFNBQVMsQ0FBQyxDQUFDN0MsR0FBRyxDQUFDb0UsRUFBRSxDQUFDO1lBQzNDO1lBRUEsQ0FBQTJQLFFBQVNDLENBQUM5UCxLQUFLO2NBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBd1AsTUFBTyxDQUFDdkcsR0FBRyxDQUFDakosS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUF3UCxNQUFPLENBQUNyUSxHQUFHLENBQUNhLEtBQUssRUFBRSxJQUFJbkMsR0FBRyxFQUFFLENBQUM7Y0FDaEUsT0FBTyxJQUFJLENBQUMsQ0FBQTJSLE1BQU8sQ0FBQzFULEdBQUcsQ0FBQ2tFLEtBQUssQ0FBQztZQUMvQjtZQUVBc08sTUFBTUEsQ0FBQzNQLFNBQVMsRUFBRXhELElBQUk7Y0FDckIsTUFBTWtHLFFBQVEsR0FBRyxJQUFJMkosTUFBQSxDQUFBeEIsUUFBUSxDQUFDN0ssU0FBUyxFQUFFeEQsSUFBSSxDQUFDO2NBQzlDa0csUUFBUSxDQUFDcUksU0FBUyxDQUFDdk8sSUFBSSxDQUFDO2NBQ3hCLElBQUksQ0FBQyxDQUFBMFUsUUFBUyxDQUFDbFIsU0FBUyxDQUFDLENBQUNRLEdBQUcsQ0FBQ2tDLFFBQVEsQ0FBQ3RCLE1BQU0sQ0FBQ0csRUFBRSxFQUFFbUIsUUFBUSxDQUFDO2NBQzNELE9BQU9BLFFBQVE7WUFDaEI7WUFFQSxNQUFNdkYsR0FBR0EsQ0FBQzZDLFNBQWlCLEVBQUV1QixFQUFFLEdBQUdxRixTQUFTO2NBQzFDO2NBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBaUssTUFBTyxDQUFDdkcsR0FBRyxDQUFDdEssU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE2USxNQUFPLENBQUNyUSxHQUFHLENBQUNSLFNBQVMsRUFBRSxJQUFJZCxHQUFHLEVBQUUsQ0FBQztjQUN4RTtjQUNBLElBQUksSUFBSSxDQUFDLENBQUEyUixNQUFPLENBQUN2RyxHQUFHLENBQUN0SyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQTZRLE1BQU8sQ0FBQzFULEdBQUcsQ0FBQzZDLFNBQVMsQ0FBQyxDQUFDc0ssR0FBRyxDQUFDL0ksRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZFLE1BQU1tQixRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFtTyxNQUFPLENBQUMxVCxHQUFHLENBQUM2QyxTQUFTLENBQUMsQ0FBQzdDLEdBQUcsQ0FBQ29FLEVBQUUsQ0FBQztnQkFDcEQsT0FBT21CLFFBQVE7O1lBRWpCO1lBRUEsTUFBTTRILEdBQUdBLENBQUN0SyxTQUFTLEVBQUV1QixFQUFFO2NBQ3RCLElBQUksSUFBSSxDQUFDLENBQUFzUCxNQUFPLENBQUN2RyxHQUFHLENBQUN0SyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQTZRLE1BQU8sQ0FBQzFULEdBQUcsQ0FBQzZDLFNBQVMsQ0FBQyxDQUFDc0ssR0FBRyxDQUFDL0ksRUFBRSxDQUFDLEVBQUUsT0FBTyxJQUFJO1lBQ3BGO1lBRUEsT0FBTyxDQUFBNlAsR0FBSSxHQUFHLElBQUlsUyxHQUFHLEVBQUU7WUFFdkI7Ozs7OztZQU1BLE9BQU8vQixHQUFHQSxDQUFDMlQsTUFBTSxFQUFFOVIsT0FBUTtjQUMxQixJQUFJLElBQUksQ0FBQyxDQUFBb1MsR0FBSSxDQUFDOUcsR0FBRyxDQUFDd0csTUFBTSxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQU0sR0FBSSxDQUFDalUsR0FBRyxDQUFDMlQsTUFBTSxDQUFDO2NBQ3ZELE1BQU1qUyxFQUFFLEdBQUcsSUFBSStELGVBQWUsQ0FBQ2tPLE1BQU0sRUFBRTlSLE9BQU8sQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQW9TLEdBQUksQ0FBQzVRLEdBQUcsQ0FBQ3NRLE1BQU0sRUFBRWpTLEVBQUUsQ0FBQztjQUN6QixPQUFPQSxFQUFFO1lBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxR0QsSUFBQVgsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFzVSxLQUFBLEdBQUF0VSxPQUFBO1VBTU0sTUFBTzhOLFFBQVMsU0FBUTNNLE1BQUEsQ0FBQUUsYUFBd0I7WUFDckQsQ0FBQWdELE1BQU8sR0FBUSxFQUFFO1lBQ2pCLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBQ0EsQ0FBQUcsRUFBRztZQUNILENBQUFGLEtBQU07WUFDTixDQUFBMEYsU0FBVTtZQUNWLENBQUF1SCxLQUFNO1lBQ050QixZQUFZO1lBRVosSUFBSXNCLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUEsS0FBS0EsQ0FBQzFRLEtBQWM7Y0FDdkIsSUFBSSxDQUFDLENBQUEwUSxLQUFNLEdBQUcxUSxLQUFLO2NBQ25CLElBQUksQ0FBQzJCLFlBQVksRUFBRTtZQUNwQjtZQUVBLENBQUErUixLQUFNO1lBQ04sSUFBSXZLLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0EsSUFBSUEsU0FBU0EsQ0FBQ25KLEtBQUs7Y0FDbEIsSUFBSUEsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBbUosU0FBVSxFQUFFO2NBRS9CLElBQUksQ0FBQyxDQUFBQSxTQUFVLEdBQUduSixLQUFLO2NBQ3ZCLElBQUksQ0FBQzJCLFlBQVksRUFBRTtZQUNwQjtZQUVBMUIsWUFBWXdELEtBQUssRUFBRTdFLElBQUEsR0FBa0I7Y0FBRStFLEVBQUUsRUFBRXFGO1lBQVMsQ0FBRTtjQUNyRCxLQUFLLEVBQUU7Y0FFUCxNQUFNO2dCQUFFckY7Y0FBRSxDQUFFLEdBQUcvRSxJQUFJO2NBQ25CLElBQUksQ0FBQyxDQUFBNkUsS0FBTSxHQUFHQSxLQUFLO2NBQ25CLElBQUksQ0FBQyxDQUFBaU4sS0FBTSxHQUFHL00sRUFBRSxLQUFLcUYsU0FBUztjQUM5QixJQUFJLENBQUMsQ0FBQXJGLEVBQUcsR0FBR0EsRUFBRTtjQUNiLElBQUksQ0FBQ3lMLFlBQVksR0FBR3hRLElBQUksQ0FBQ3dRLFlBQVksSUFBSSxJQUFBcUUsS0FBQSxDQUFBRSxFQUFNLEdBQUU7Y0FDakQsSUFBSSxDQUFDaFEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBQSxFQUFHLEdBQUcsSUFBSSxDQUFDeUwsWUFBWTtjQUNyQyxJQUFJLElBQUksQ0FBQyxDQUFBekwsRUFBRyxFQUFFLElBQUksQ0FBQyxDQUFBSCxNQUFPLENBQUNHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQUEsRUFBRztZQUN6QztZQUVBd0osU0FBUyxHQUFHdk8sSUFBSSxJQUFHO2NBQ2xCLElBQUksQ0FBQ0EsSUFBSSxFQUFFO2dCQUNWOztjQUVELE1BQU1rVSxLQUFLLEdBQUdoVCxNQUFNLENBQUNzTCxJQUFJLENBQUN4TSxJQUFJLENBQUM7Y0FDL0IsSUFBSThULE9BQU8sR0FBRyxLQUFLO2NBRW5CLElBQUksQ0FBQzlULElBQUksQ0FBQytFLEVBQUUsRUFBRS9FLElBQUksQ0FBQytFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQUEsRUFBRztjQUVoQyxNQUFNaVEsU0FBUyxHQUFHO2dCQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFwUTtjQUFPLENBQUU7Y0FFckNzUCxLQUFLLENBQUNwUCxPQUFPLENBQUNqQixRQUFRLElBQUc7Z0JBQ3hCLElBQUk3RCxJQUFJLENBQUM2RCxRQUFRLENBQUMsS0FBS21SLFNBQVMsQ0FBQ25SLFFBQVEsQ0FBQyxFQUFFO2dCQUM1Q21SLFNBQVMsQ0FBQ25SLFFBQVEsQ0FBQyxHQUFHN0QsSUFBSSxDQUFDNkQsUUFBUSxDQUFDO2dCQUNwQ2lRLE9BQU8sR0FBRyxJQUFJO2NBQ2YsQ0FBQyxDQUFDO2NBQ0YsSUFBSTlULElBQUksQ0FBQ3dRLFlBQVksRUFBRSxJQUFJLENBQUNBLFlBQVksR0FBR3hRLElBQUksQ0FBQytKLFVBQVU7Y0FDMURpTCxTQUFTLENBQUN6SyxTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTLEtBQUssQ0FBQyxJQUFJLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUEzRixNQUFPLEdBQUdvUSxTQUFTO2NBQ3hCLElBQUksQ0FBQ2pTLFlBQVksRUFBRTtjQUVuQixPQUFPK1EsT0FBTztZQUNmLENBQUM7WUFFRG5GLFNBQVNBLENBQUE7Y0FDUixNQUFNL0osTUFBTSxHQUFHO2dCQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFBO2NBQU8sQ0FBRTtjQUVsQyxJQUFJLElBQUksQ0FBQzRMLFlBQVksRUFBRTVMLE1BQU0sQ0FBQzRMLFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVk7Y0FDOUQ7Y0FDQSxPQUFPNUwsTUFBTTtZQUNkOztVQUNBdkUsT0FBQSxDQUFBZ08sUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pGRCxJQUFBM00sTUFBQSxHQUFBbkIsT0FBQTtVQUdNLE1BQW1CMFUsWUFBYSxTQUFRdlQsTUFBQSxDQUFBRSxhQUE0QjtVQUFHdkIsT0FBQSxDQUFBNFUsWUFBQSxHQUFBQSxZQUFBO1VBRTdFLE1BQU1DLFlBQVksR0FBRyxJQUFJRCxZQUFZLEVBQUUifQ==