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
        hash: 1396161967,
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
              if (!this.#localProvider) return;
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
        hash: 1513158061,
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
        hash: 1858268298,
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
        hash: 3271791775,
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
                  registry.isDeleted = true;
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
        hash: 2780304391,
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
              const response = await this.#update({
                isDeleted: 1
              });
              return response;
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
        hash: 270111630,
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
                console.log(0.1);
                await this.#getProperty('checkReady')();
                console.log(0.2);
                if (data) {
                  await this.#parent.set(data);
                }
                console.log(0.3, this.#parent.isUnpublished);
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
        hash: 738374833,
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
              newValues.isDeleleted = this.isDeleted === 1 ?? 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiY291bnRlcnMiLCJ0b3RhbCIsIm5leHQiLCJkYiIsIml0ZW0iLCJpdGVtcyIsImxvY2FsZGIiLCJlbGVtZW50cyIsIk1hcCIsImlzT25saW5lIiwibG9jYWxQcm92aWRlciIsIkFycmF5IiwiaXNBcnJheSIsInRyaWdnZXJFdmVudCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInN0b3JlTmFtZSIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJzZXQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwibGlzdGVuSXRlbXMiLCJpbml0aWFsaXNlIiwiI2xpc3Rlbkl0ZW1zIiwicHJvY2Vzc0VudHJpZXMiLCJ0cmlnZ2VyIiwic2V0T2ZmbGluZSIsInNldEl0ZW1zIiwidmFsdWVzIiwic3RvcmUiLCJmb3JFYWNoIiwiaWQiLCJkZWxldGUiLCJpZHMiLCJzb2Z0RGVsZXRlIiwiZGVsZXRlSXRlbXMiLCJlIiwiY29uc29sZSIsImxvYWQiLCJhcmdzIiwibG9jYWxMb2FkIiwiZmlsdGVyIiwic2F2ZSIsInN5bmMiLCJwdWJsaXNoIiwidG9TeW5jIiwic2V0RW50cmllcyIsImVudHJpZXMiLCJfZmFjdG9yeSIsInBhcmVudEJyaWRnZSIsInJlZ2lzdHJ5IiwicmVtb3RlRGF0YSIsIlJlZ2lzdHJ5RmFjdG9yeSIsImN1c3RvbUZpbHRlciIsInBhcmFtcyIsImxvY2FsRGF0YSIsIm5ld0l0ZW1zIiwidXBkYXRlIiwiY29uY2F0IiwicHJvcGVydGllcyIsImxvY2FsTG9hZGVkIiwiZmV0Y2hpbmciLCJsb2FkZWQiLCJwYWdlIiwicmVtb3RlRWxlbWVudHMiLCJzdGFydCIsImxpbWl0IiwibG9jYWxSZXNwb25zZSIsInJlbW90ZUxvYWQiLCJleGMiLCJmZXRjaGVkIiwibGFuZGVkIiwibGlzdCIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwiZGVsZXRlZEVudHJpZXMiLCJwcm9taXNlcyIsIm1hcCIsInJlY29yZCIsInB1c2giLCJhbGwiLCJpbmRleCIsInVwZGF0ZUxvY2FsSXRlbXMiLCJfY29yZSIsIl9kYXRhYmFzZSIsIl9zYXZlciIsIl9sb2FkZXIiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwiZXhpc3RzIiwiZm91bmQiLCJyZWdpc3RyeUZhY3RvcnkiLCJhcHBseSIsImFjdGl2ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsIkxvY2FsUHJvdmlkZXJMb2FkZXIiLCJwcm9taXNlSW5pdCIsInJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJEQk1hbmFnZXIiLCJMb2NhbFByb3ZpZGVyU2F2ZXIiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwiaW5zdGFuY2VJZCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsIml0ZW1zVG9VcGRhdGUiLCJpc0RlbGV0ZWQiLCJzYXZlQWxsIiwiX2RleGllIiwicHJvbWlzZUxvYWQiLCJsaXN0SXRlbXMiLCJTZXQiLCJjb25kaXRpb25zIiwiY3VzdG9tV2hlcmUiLCJkZWZhdWx0V2hlcmUiLCJvcmRlckJ5IiwiY3VycmVudExpbWl0IiwiY3VycmVudE9mZnNldCIsInBhcmVudFByaXZhdGVQcm9wcyIsInF1YW50aXR5IiwiaXNTYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBlcmZvcm1Mb2FkIiwiI3BlcmZvcm1Mb2FkIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJyZXNvbHZlUHJvbWlzZUxvYWQiLCJsaXZlIiwibGl2ZVF1ZXJ5Iiwid2hlcmUiLCJzdWJzY3JpYmVUb1F1ZXJ5Iiwib2Zmc2V0IiwiaGFzT3duUHJvcGVydHkiLCJpbmRleGVzIiwic2NoZW1hIiwibmFtZSIsImtleXMiLCJrZXkiLCJpbmNsdWRlcyIsImNvbGxlY3Rpb24iLCJxdWVyeSIsImkiLCJ0b0FycmF5IiwiY2FsbGJhY2siLCIjc3Vic2NyaWJlVG9RdWVyeSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwiaGFuZGxlUXVlcnlSZXNwb25zZSIsImVyciIsIiNoYW5kbGVRdWVyeVJlc3BvbnNlIiwic2FtZVF1ZXJ5Iiwic29ydCIsImEiLCJiIiwiY3VycmVudE1hcCIsImFkZCIsImNsZWFudXBJdGVtcyIsIiNjbGVhbnVwSXRlbXMiLCJoYXMiLCIjcmVzb2x2ZVByb21pc2VMb2FkIiwiX3JlZ2lzdHJ5IiwiYmF0Y2hlcyIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIl9pbmRleCIsIlVzZXJQcm92aWRlciIsIkJvb2siLCJJdGVtIiwiX3NhdmUiLCJpbmZvIiwibG9jYWxGaWVsZHMiLCJpZ25vcmVkRmllbGRzIiwic2tlbGV0b24iLCJ1bmlxdWUiLCJfX2dldCIsIl9faW5zdGFuY2VJZCIsImlzUmVhZHkiLCJjaGVja1JlYWR5Iiwib2JqZWN0UmVhZHkiLCJwcm9taXNlUmVhZHkiLCJpbml0UHJvbWlzZSIsImNvbmZpZyIsIkxvY2FsUHJvdmlkZXIiLCJJdGVtU2F2ZU1hbmFnZXIiLCJJdGVtTG9hZE1hbmFnZXIiLCJiaW5kIiwib25SZWFkeSIsIngiLCJ0b0l0ZXJhdGUiLCJmaWVsZCIsImdldFByb3BlcnR5TmFtZXMiLCJmb3JjZVN5bmMiLCJzYW1lIiwib3JpZ2luYWwiLCJpc05hTiIsInBhcnNlSW50IiwibG9hZE1ldGhvZCIsImlzTmV3IiwiZmFjdG9yeVJlZ2lzdHJ5IiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwiZ2V0UmVnaXN0cnkiLCJkZWVwQ29tcGFyZSIsIm9iajEiLCJvYmoyIiwia2V5czEiLCJrZXlzMiIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsImlzT2JqZWN0Iiwib2JqZWN0IiwiaXNVbnB1Ymxpc2hlZCIsIiNpc1VucHVibGlzaGVkIiwidG9Db21wYXJlIiwiYXJlRXF1YWwiLCJsaXN0ZW5SZWdpc3RyeSIsImNyZWF0ZSIsIiNsaXN0ZW5SZWdpc3RyeSIsImR1cGxpY2F0ZWQiLCJ2YWxpZGF0ZVVuaXF1ZUZpZWxkcyIsImZpZWxkcyIsImNoZWNrUHJvbWlzZXMiLCJ0aGVuIiwiZHVwbGljYXRlRmllbGRzIiwiZGVsZXRlUmVnaXN0cnkiLCJpZGVudGlmaWVyIiwiI3VwZGF0ZSIsInVwZGF0ZWQiLCJwdXQiLCJsb2NhbFVwZGF0ZSIsImxvZyIsInByb3BzIiwiQ29sbGVjdGlvblByb3ZpZGVyIiwiSXRlbVByb3ZpZGVyIiwic3RvcmVzIiwiZGJOYW1lIiwicmVnaXN0ZXJMaXN0IiwicmVnaXN0cmllcyIsImhhc0l0ZW0iLCJnZXRTdG9yZSIsIiNnZXRTdG9yZSIsImRicyIsIl91dWlkIiwia2V5SWQiLCJ2NCIsIm5ld1ZhbHVlcyIsImlzRGVsZWxldGVkIiwiU3RvcmVSZWNvcmRzIiwic3RvcmVGYWN0b3J5Il0sInNvdXJjZXMiOlsiL2FkYXB0ZXIvZGVmYXVsdC50cyIsIi9hZGFwdGVyL2luZGV4LnRzIiwiL2ludGVyZmFjZS50cyIsIi9hZGFwdGVyL2xlZ2FjeS50cyIsIi9jYWNoZS9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL0lDb2xsZWN0aW9uLnRzIiwiL2NvbGxlY3Rpb24vbG9hZC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvbG9hZGVyLnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvc2F2ZXIudHMiLCIvY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiL2NvbGxlY3Rpb24udHMiLCIvZXhhbXBsZS9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi9pdGVtL2luZGV4LnRzIiwiL2NvbmZpZy50cyIsIi9pdGVtLnRzIiwiL2l0ZW0vbG9hZC50cyIsIi9pdGVtL2xvY2FsLXByb3ZpZGVyLnRzIiwiL2l0ZW0vc2F2ZS50cyIsIi9wcm92aWRlcnMvY29sbGVjdGlvbi50cyIsIi9wcm92aWRlcnMvaXRlbS50cyIsIi9yZWdpc3RyeS9mYWN0b3J5LnRzIiwiL3JlZ2lzdHJ5L2luZGV4LnRzIiwiL3JlZ2lzdHJ5L3N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUVNLE1BQU9BLGNBQWM7WUFDMUJDLFFBQVFBLENBQUNDLElBQVM7Y0FDakIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBRyxVQUFVQSxDQUFDSCxJQUFTO2NBQ25CLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7WUFFQUksY0FBY0EsQ0FBQ0osSUFBUztjQUN2QixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCOztVQUNBSyxPQUFBLENBQUFQLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkRCxJQUFBUSxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFhTSxNQUFPRyxlQUFlO1lBQzNCLE9BQU9DLEdBQUdBLENBQUNDLE1BQU0sRUFBRUMsUUFBNkI7Y0FDL0NBLFFBQVEsR0FBR0EsUUFBUSxHQUFHQSxRQUFRLEdBQUdQLFNBQUEsQ0FBQVEsY0FBYyxDQUFDQyxPQUFPO2NBQ3ZELE1BQU1DLE9BQU8sR0FBR0gsUUFBUSxLQUFLLFNBQVMsR0FBR0wsUUFBQSxDQUFBVixjQUFjLEdBQUdXLE9BQUEsQ0FBQVEsYUFBYTtjQUN2RSxPQUFPLElBQUlELE9BQU8sQ0FBQ0osTUFBTSxDQUFDO1lBQzNCOztVQUNB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