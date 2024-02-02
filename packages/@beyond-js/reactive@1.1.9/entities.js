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
        hash: 1046153702,
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
            counters = {};
            total = 0;
            next;
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
              this.#localProvider.on('items.changed', this.#listenItems);
              this.localProvider.init();
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
        hash: 1873156359,
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
        hash: 1363570927,
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
                this.parent.triggerEvent();
                return this.#adapter.toClient({
                  data: items
                });
              } catch (exc) {
                this.parent.triggerEvent();
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
        hash: 3933958444,
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
        hash: 3681766903,
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
                if (!this.#provider || !this.#bridge.get('isOnline')) return;
                let props = {
                  ...properties
                };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwiaXRlbXMiLCJsb2NhbGRiIiwiZWxlbWVudHMiLCJNYXAiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInN0b3JlTmFtZSIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJzZXQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwibGlzdGVuSXRlbXMiLCIjbGlzdGVuSXRlbXMiLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJ2YWx1ZXMiLCJzdG9yZSIsImZvckVhY2giLCJpZCIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsIl9mYWN0b3J5IiwicGFyZW50QnJpZGdlIiwicmVnaXN0cnkiLCJyZW1vdGVEYXRhIiwiUmVnaXN0cnlGYWN0b3J5IiwiY3VzdG9tRmlsdGVyIiwicGFyYW1zIiwibG9jYWxEYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsImxvYWRlZCIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwicmVtb3RlTG9hZCIsImV4YyIsImZldGNoZWQiLCJsYW5kZWQiLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJkZWxldGVkRW50cmllcyIsInByb21pc2VzIiwibWFwIiwicmVjb3JkIiwicHVzaCIsImFsbCIsImluZGV4IiwidXBkYXRlTG9jYWxJdGVtcyIsIl9jb3JlIiwiX2RhdGFiYXNlIiwiX3NhdmVyIiwiX2xvYWRlciIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJvZmZsaW5lIiwiZGF0YWJhc2UiLCJkYXRhYmFzZU5hbWUiLCJleGlzdHMiLCJmb3VuZCIsInJlZ2lzdHJ5RmFjdG9yeSIsImFwcGx5IiwiYWN0aXZlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDb25uZWN0aW9uIiwiTG9jYWxQcm92aWRlckxvYWRlciIsInByb21pc2VJbml0IiwicmVhZHkiLCJQZW5kaW5nUHJvbWlzZSIsIkRCTWFuYWdlciIsIkxvY2FsUHJvdmlkZXJTYXZlciIsInVwc2VydCIsIm9yaWdpbmFsRGF0YSIsInRyYW5zYWN0aW9uIiwiaW5zdGFuY2VJZFRvSWRNYXAiLCJpbnN0YW5jZUlkIiwiYnVsa1B1dCIsInJlY29yZHMiLCJidWxrR2V0IiwiZXhpc3RpbmdSZWNvcmRzIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwiaXRlbXNUb1VwZGF0ZSIsImlzRGVsZXRlZCIsInNhdmVBbGwiLCJfZGV4aWUiLCJwcm9taXNlTG9hZCIsImxpc3RJdGVtcyIsIlNldCIsImNvbmRpdGlvbnMiLCJjdXN0b21XaGVyZSIsImRlZmF1bHRXaGVyZSIsIm9yZGVyQnkiLCJjdXJyZW50TGltaXQiLCJjdXJyZW50T2Zmc2V0IiwicGFyZW50UHJpdmF0ZVByb3BzIiwicXVhbnRpdHkiLCJpc1NhbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGVyZm9ybUxvYWQiLCIjcGVyZm9ybUxvYWQiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsInJlc29sdmVQcm9taXNlTG9hZCIsImxpdmUiLCJsaXZlUXVlcnkiLCJ3aGVyZSIsInN1YnNjcmliZVRvUXVlcnkiLCJvZmZzZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4ZXMiLCJzY2hlbWEiLCJuYW1lIiwia2V5cyIsImtleSIsImluY2x1ZGVzIiwiY29sbGVjdGlvbiIsInF1ZXJ5IiwiaSIsInRvQXJyYXkiLCJjYWxsYmFjayIsIiNzdWJzY3JpYmVUb1F1ZXJ5IiwiY3VycmVudFBhZ2UiLCJzdWJzY3JpYmUiLCJoYW5kbGVRdWVyeVJlc3BvbnNlIiwiZXJyIiwiI2hhbmRsZVF1ZXJ5UmVzcG9uc2UiLCJzYW1lUXVlcnkiLCJzb3J0IiwiYSIsImIiLCJjdXJyZW50TWFwIiwiYWRkIiwiY2xlYW51cEl0ZW1zIiwiI2NsZWFudXBJdGVtcyIsImhhcyIsIiNyZXNvbHZlUHJvbWlzZUxvYWQiLCJfcmVnaXN0cnkiLCJiYXRjaGVzIiwicHJvY2VzcyIsImdldFByb3BlcnRpZXMiLCJ0b1NhdmUiLCJSZWdpc3RyeSIsImRlbGV0ZWQiLCJzZXRWYWx1ZXMiLCJjaHVua3MiLCJiYXRjaCIsInNwbGljZSIsImdldFZhbHVlcyIsInJlc3VsdHMiLCJhbGxTZXR0bGVkIiwibWFwcGVkRm4iLCJyZXN1bHQiLCJmYWlsZWQiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJ3YXJuIiwiYnVsa1NhdmUiLCJzZW5kQ2h1bmsiLCJjaHVuayIsInN1Y2Nlc3MiLCJzcGxpdERhdGFJbnRvQ2h1bmtzIiwic2xpY2UiLCJlcXVhbHMiLCJmYWlsZWRDaHVua3MiLCJzdWNjZXNzQ2h1bmtzIiwiX2luZGV4IiwiVXNlclByb3ZpZGVyIiwiQm9vayIsIkl0ZW0iLCJfc2F2ZSIsImluZm8iLCJsb2NhbEZpZWxkcyIsImlnbm9yZWRGaWVsZHMiLCJza2VsZXRvbiIsInVuaXF1ZSIsIl9fZ2V0IiwiX19pbnN0YW5jZUlkIiwiaXNSZWFkeSIsImNoZWNrUmVhZHkiLCJvYmplY3RSZWFkeSIsInByb21pc2VSZWFkeSIsImluaXRQcm9taXNlIiwiY29uZmlnIiwiTG9jYWxQcm92aWRlciIsIkl0ZW1TYXZlTWFuYWdlciIsIkl0ZW1Mb2FkTWFuYWdlciIsImJpbmQiLCJpbml0aWFsaXNlIiwib25SZWFkeSIsIngiLCJ0b0l0ZXJhdGUiLCJmaWVsZCIsImdldFByb3BlcnR5TmFtZXMiLCJmb3JjZVN5bmMiLCJzYW1lIiwib3JpZ2luYWwiLCJpc05hTiIsInBhcnNlSW50IiwibG9hZE1ldGhvZCIsImlzTmV3IiwiZmFjdG9yeVJlZ2lzdHJ5IiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwiZ2V0UmVnaXN0cnkiLCJkZWVwQ29tcGFyZSIsIm9iajEiLCJvYmoyIiwia2V5czEiLCJrZXlzMiIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsImlzT2JqZWN0Iiwib2JqZWN0IiwiaXNVbnB1Ymxpc2hlZCIsIiNpc1VucHVibGlzaGVkIiwidG9Db21wYXJlIiwiYXJlRXF1YWwiLCJsaXN0ZW5SZWdpc3RyeSIsImNyZWF0ZSIsIiNsaXN0ZW5SZWdpc3RyeSIsImR1cGxpY2F0ZWQiLCJ2YWxpZGF0ZVVuaXF1ZUZpZWxkcyIsImZpZWxkcyIsImNoZWNrUHJvbWlzZXMiLCJ0aGVuIiwiZHVwbGljYXRlRmllbGRzIiwiZGVsZXRlUmVnaXN0cnkiLCJpZGVudGlmaWVyIiwiI3VwZGF0ZSIsInVwZGF0ZWQiLCJwdXQiLCJsb2NhbFVwZGF0ZSIsInByb3BzIiwiQ29sbGVjdGlvblByb3ZpZGVyIiwiSXRlbVByb3ZpZGVyIiwic3RvcmVzIiwiZGJOYW1lIiwicmVnaXN0ZXJMaXN0IiwicmVnaXN0cmllcyIsImhhc0l0ZW0iLCJnZXRTdG9yZSIsIiNnZXRTdG9yZSIsImRicyIsIl91dWlkIiwia2V5SWQiLCJ2NCIsIm5ld1ZhbHVlcyIsImlzRGVsZWxldGVkIiwiU3RvcmVSZWNvcmRzIiwic3RvcmVGYWN0b3J5Il0sInNvdXJjZXMiOlsiL2FkYXB0ZXIvZGVmYXVsdC50cyIsIi9hZGFwdGVyL2luZGV4LnRzIiwiL2ludGVyZmFjZS50cyIsIi9hZGFwdGVyL2xlZ2FjeS50cyIsIi9jYWNoZS9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL0lDb2xsZWN0aW9uLnRzIiwiL2NvbGxlY3Rpb24vbG9hZC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvbG9hZGVyLnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvc2F2ZXIudHMiLCIvY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiL2NvbGxlY3Rpb24udHMiLCIvZXhhbXBsZS9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi9pdGVtL2luZGV4LnRzIiwiL2NvbmZpZy50cyIsIi9pdGVtLnRzIiwiL2l0ZW0vbG9hZC50cyIsIi9pdGVtL2xvY2FsLXByb3ZpZGVyLnRzIiwiL2l0ZW0vc2F2ZS50cyIsIi9wcm92aWRlcnMvY29sbGVjdGlvbi50cyIsIi9wcm92aWRlcnMvaXRlbS50cyIsIi9yZWdpc3RyeS9mYWN0b3J5LnRzIiwiL3JlZ2lzdHJ5L2luZGV4LnRzIiwiL3JlZ2lzdHJ5L3N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUVNLE1BQU9BLGNBQWM7WUFDMUJDLFFBQVFBLENBQUNDLElBQVM7Y0FDakIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBRyxVQUFVQSxDQUFDSCxJQUFTO2NBQ25CLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7WUFFQUksY0FBY0EsQ0FBQ0osSUFBUztjQUN2QixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCOztVQUNBSyxPQUFBLENBQUFQLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkRCxJQUFBUSxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFhTSxNQUFPRyxlQUFlO1lBQzNCLE9BQU9DLEdBQUdBLENBQUNDLE1BQU0sRUFBRUMsUUFBNkI7Y0FDL0NBLFFBQVEsR0FBR0EsUUFBUSxHQUFHQSxRQUFRLEdBQUdQLFNBQUEsQ0FBQVEsY0FBYyxDQUFDQyxPQUFPO2NBQ3ZELE1BQU1DLE9BQU8sR0FBR0gsUUFBUSxLQUFLLFNBQVMsR0FBR0wsUUFBQSxDQUFBVixjQUFjLEdBQUdXLE9BQUEsQ0FBQVEsYUFBYTtjQUN2RSxPQUFPLElBQUlELE9BQU8sQ0FBQ0osTUFBTSxDQUFDO1lBQzNCOztVQUNBUCxPQUFB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