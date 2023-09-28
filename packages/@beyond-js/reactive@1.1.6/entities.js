System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/settings", "@beyond-js/reactive@1.1.6/model", "@beyond-js/reactive@1.1.6/database", "dexie@3.2.4", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, TCustomAdapter, IConfig, IResponseAdapter, Collection, CollectionLocalProvider, Books, Book, Item, IItem, LocalProvider, CollectionProvider, ItemProvider, RegistryFactory, StoreRecords, __beyond_pkg, hmr;
  _export({
    TCustomAdapter: void 0,
    IConfig: void 0,
    IResponseAdapter: void 0,
    Collection: void 0,
    CollectionLocalProvider: void 0,
    Books: void 0,
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
    }, function (_beyondJsReactive116Settings) {
      dependency_1 = _beyondJsReactive116Settings;
    }, function (_beyondJsReactive116Model) {
      dependency_2 = _beyondJsReactive116Model;
    }, function (_beyondJsReactive116Database) {
      dependency_3 = _beyondJsReactive116Database;
    }, function (_dexie2) {
      dependency_4 = _dexie2;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_uuid2) {
      dependency_6 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.6"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.6/entities"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/settings', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/reactive/database', dependency_3], ['dexie', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['uuid', dependency_6]]);
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
        hash: 1425093866,
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
            /**
             * Represents the number of elements in the collection
             */
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
              const items = await this.#loadManager.processEntries(entries);
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
        hash: 58594386,
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
        hash: 483025087,
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
            /**
             * Original data obtained in provider.load
             *
             * This property lets the developer access to the original data obtained from the provider in the children object.
             * Only contains the data from the last load.
             *
             */
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
            /**
             * metodo general para las consultas de tipo lista para las colecciones
             * @param params Object filters and configuration
             * parameters:
             *  - next
             *  - limit
             *  - update // siguiente pagina de misma consulta
             *
             *
             * - status // 1, 0, -1
             *  {user: [10,30]}
             *
             * {and: [{user:10}, {user:30}]]}
             *
             *  {user: 10}
             *  {user: [10,30,40,50]}
             * {or: [{user:10}, {user:30}]]}
             * {and: [{user:10}, {user:30}]]}
             *  el provider debe devolver:
             *    - next
             *    - entries
             *  - total
             * load({status:1})
             */
            #localLoad = async params => {
              if (!this.#localProvider) return;
              //if (this.parent.sOnline || this.#provider) return;
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
                this.parent.fetching = true;
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
                await this.#localLoad(params);
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
            processEntries = async entries => {
              this.#registry.registerList(this.#parentBridge.get('storeName'), entries);
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

      /*******************************************
      INTERNAL MODULE: ./collection/local-provider
      *******************************************/

      ims.set('./collection/local-provider', {
        hash: 1485483903,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionLocalProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _dexie = require("dexie");
          var _core = require("@beyond-js/kernel/core");
          var _database = require("@beyond-js/reactive/database");
          var _factory = require("../registry/factory");
          var _registry = require("../registry");
          /*bundle*/
          class CollectionLocalProvider extends _model.ReactiveModel {
            #isOnline = globalThis.navigator.onLine;
            #store;
            #batches = 200;
            get store() {
              return this.#store;
            }
            /**
             * Defines if the collection is using a local database or not.
             */
            #active;
            get active() {
              return this.#active;
            }
            #offline;
            #database;
            #storeName;
            #databaseName;
            #listItems = new Map();
            #items = [];
            #registryFactory;
            get items() {
              return this.#items;
            }
            #exists = false;
            #found = false;
            #ids = new Set();
            #db;
            get isOnline() {
              return this.#isOnline && !this.#offline && !localStorage.getItem('reactive.offline');
            }
            #parent;
            #bridge;
            #localdb;
            /**
             *
             */
            #apply = true;
            constructor(parent, bridge) {
              super();
              const {
                db,
                storeName
              } = parent;
              this.#parent = parent;
              this.#bridge = bridge;
              this.localdb = this.#parent.localdb;
              if (!this.localdb) {
                this.#apply = false;
                return;
              }
              if (db) {
                this.#registryFactory = _factory.RegistryFactory.get(db);
              }
              this.#databaseName = db;
              this.#storeName = storeName;
              globalThis.addEventListener('online', this.handleConnection);
              globalThis.addEventListener('offline', this.handleConnection);
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
                this.ready = true;
                this.#promiseInit.resolve();
              } catch (e) {
                console.error(e);
              }
            };
            handleConnection = () => {
              this.triggerEvent();
            };
            /**
             * @todo: Must validated if some item in the collection is not sync.
             * @param data
             * @returns
             */
            #isUnpublished(data) {}
            #promiseLoad;
            #params;
            #total;
            #page = 0;
            #customWhere;
            #defaultWhere = store => store.orderBy('id');
            #currentLimit;
            #currentOffset;
            where = limit => {
              return () => {
                let store = this.#store;
                const offset = (this.#page - 1) * limit;
                const filter = this.#customWhere ?? this.#defaultWhere;
                this.#currentLimit = limit;
                this.#currentOffset = offset;
                /**
                 * @todo: the isDeleted field must be set as 0 by default.
                 */
                return filter(store).filter(i => i.isDeleted !== 1).offset(offset).limit(limit).toArray();
              };
            };
            customFilter = callback => {
              this.#customWhere = callback;
              return this.#parent;
            };
            #cantidad = 0;
            async load(params) {
              if (!this.#apply) return;
              if (this.#promiseLoad) return this.#promiseLoad;
              if (JSON.stringify(this.#params) === JSON.stringify(params)) {
                return this.#promiseLoad;
              }
              this.#promiseLoad = new _core.PendingPromise();
              await this.init();
              const conditions = Object.keys(params);
              const controls = ['and', 'or'];
              conditions.forEach(condition => {
                if (controls.includes(condition)) {
                  this.#processControl(condition, params[condition]);
                }
              });
              try {
                if (!this.#total) this.#total = await this.#store.count();
                let limit = params.limit ?? 30;
                const totalPages = Math.ceil(this.#total / limit);
                if (totalPages < this.#page) return;
                let first = true;
                const live = (0, _dexie.liveQuery)(this.where(limit));
                this.#page++;
                let currentPage;
                live.subscribe({
                  next: async items => {
                    let sameQuery;
                    this.#cantidad++;
                    if (currentPage == this.#page) {
                      sameQuery = true;
                    } else {
                      currentPage = this.#page;
                    }
                    if (this.#cantidad === 8) {
                      return;
                    }
                    if (sameQuery && items.length === this.#parent.items.length) {
                      return;
                    }
                    if (this.#promiseLoad) {
                      first = false;
                      const response = {
                        status: true,
                        data: items,
                        total: this.#total,
                        next: true
                      };
                      if (this.#page + 1 >= totalPages) delete response.next;
                      this.#promiseLoad.resolve(response);
                      this.#promiseLoad = null;
                    }
                    const currentMap = new Set();
                    items.forEach(item => {
                      this.#listItems.set(item.id, item);
                      currentMap.add(item.id);
                    });
                    if (sameQuery) {
                      const removed = [...this.#listItems.keys()].forEach(id => {
                        if (!currentMap.has(id)) {
                          this.#listItems.delete(id);
                        }
                      });
                    }
                    this.#items = [...this.#listItems.values()];
                    items.forEach(item => this.#ids.add(item.id));
                    this.trigger('items.changed');
                  },
                  error: err => {
                    console.error(err);
                  }
                });
                return this.#promiseLoad;
                //return await this.live.toArray();
              } catch (error) {
                console.error('Error al cargar los elementos del store:', error);
                return {
                  status: false,
                  data: []
                };
              }
            }
            /**
             *
             * @param data
             * @returns
             */
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
              data = process(data, this.isOnline ? 0 : 1);
              if (!this.#apply) return;
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
              //if (!items.length) console.trace(80, items);
              if (!this.#apply) return;
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
            #processControl(control, conditions) {
              this.#store[control];
            }
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
          }
          exports.CollectionLocalProvider = CollectionLocalProvider;
        }
      });

      /************************************
      INTERNAL MODULE: ./collection/publish
      ************************************/

      ims.set('./collection/publish', {
        hash: 2301074132,
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
                console.warn('la colleccion no usa indexeddb');
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
              for (const [index, chunk] of chunks.entries()) {
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
        hash: 1024327027,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Books = void 0;
          var _collection = require("../collection");
          var _index = require("./index");
          // import { UserProvider } from '@beyond-js/reactive/tests/backend/provider';
          class UserProvider {}
          /*bundle*/
          class Books extends _collection.Collection {
            constructor() {
              super({
                provider: UserProvider,
                storeName: 'books',
                db: 'test',
                item: _index.Book
              });
            }
          }
          exports.Books = Books;
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
        hash: 2422807829,
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
        hash: 1493603495,
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
            #info = new Map();
            /**
             * Represent the data that is stored in the local database
             */
            #localData = new Map();
            localdb = true;
            #provider;
            get provider() {
              return this.#provider;
            }
            storeName;
            db;
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
            get instanceId() {
              return this.localProvider.instanceId;
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
                this.set(this.localProvider.registry.values, true);
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
        hash: 1600377390,
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
                  if (localData?.status) this.#parent.set(localData.data, true);
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
                  if (!same) await this.#localProvider.save(remoteData);
                }
                return this.#adapter.toClient({
                  data: remoteData
                });
              } catch (exc) {
                return this.#adapter.toClient({
                  error: exc
                });
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
        hash: 1740031252,
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
                // try {
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
              let found = await this.#factoryRegistry.get(this.#storeName, id);
              let data = {
                id
              };
              if (!found && this.localdb && id) {
                const store = this.#store;
                const localData = await store.get(id);
                data = localData;
                found = true;
              }
              if (found) {
                this.#parent.found = found;
                this.#parent.loaded = true;
              }
              const registry = this.#factoryRegistry.create(this.#storeName, data);
              this.#registry = registry;
              this.#isNew = this.#registry?.values?.isNew ? true : false;
              return this.#registry.values;
            };
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
              const response = await this.#update({
                isDeleted: 1
              });
              return response;
            };
            async #update(data) {
              const updated = this.#registry.setValues(data);
              if (!updated) return;
              const store = this.#database.db[this.#storeName];
              await store.put(data);
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
        hash: 2462835378,
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
                if (this.#parent.isOnline) {
                  const response = await this.#publish(properties);
                  this.#adapter.fromRemote(response);
                  this.#localProvider.registry.isNew = false;
                }
                if (this.#localProvider) {
                  await this.#localProvider.save(properties);
                }
                this.#parent.triggerEvent();
                return this.#adapter.toClient();
              } catch (e) {
                console.error('error saving', e);
                return e;
              }
            };
            publish = this.save;
            #publish = async properties => {
              try {
                if (!this.#provider || !this.#bridge.get('isOnline')) return;
                const response = await this.#provider.publish(properties);
                const data = this.#adapter.fromRemote(response);
                if (this.#localProvider) {
                  this.#localProvider.save(data, true);
                  this.#localProvider.triggerEvent();
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
                  await this.#localProvider.save(properties, false);
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
        hash: 963780215,
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
            #instanceId;
            #isDeleted;
            #isNew;
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
              // console.trace(0.1, 'id', store, data);
              const {
                id
              } = data;
              this.#store = store;
              this.#isNew = id === undefined;
              this.#id = id;
              this.#instanceId = id ?? (0, _uuid.v4)();
              if (!id) this.#id = this.#instanceId;
              if (this.#id) this.#values.id = this.#id;
            }
            setValues = data => {
              if (!data) {
                // console.trace(data);
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
              newValues.isDeleleted = this.isDeleted === 1 ?? 0;
              this.#values = newValues;
              this.triggerEvent();
              return updated;
            };
            getValues() {
              const values = {
                ...this.#values
              };
              if (this.#instanceId) values.instanceId = this.#instanceId;
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
        "im": "./collection/local-provider",
        "from": "CollectionLocalProvider",
        "name": "CollectionLocalProvider"
      }, {
        "im": "./example/collection",
        "from": "Books",
        "name": "Books"
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
        (require || prop === 'CollectionLocalProvider') && _export("CollectionLocalProvider", CollectionLocalProvider = require ? require('./collection/local-provider').CollectionLocalProvider : value);
        (require || prop === 'Books') && _export("Books", Books = require ? require('./example/collection').Books : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkIsSUFBSSxDQUFDblAsSUFBSSxDQUFDK0QsRUFBRSxFQUFFL0QsSUFBSSxDQUFDK0QsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHO2NBRWhDLE1BQU04TCxTQUFTLEdBQUc7Z0JBQUUsR0FBRyxJQUFJLENBQUM7Y0FBTyxDQUFFO2NBQ3JDTCxLQUFLLENBQUMxTCxPQUFPLENBQUNkLFFBQVEsSUFBRztnQkFDeEIsSUFBSWhELElBQUksQ0FBQ2dELFFBQVEsQ0FBQyxLQUFLNk0sU0FBUyxDQUFDN00sUUFBUSxDQUFDLEVBQUU7Z0JBQzVDNk0sU0FBUyxDQUFDN00sUUFBUSxDQUFDLEdBQUdoRCxJQUFJLENBQUNnRCxRQUFRLENBQUM7Z0JBQ3BDbU0sT0FBTyxHQUFHLElBQUk7Y0FDZixDQUFDLENBQUM7Y0FDRlUsU0FBUyxDQUFDQyxXQUFXLEdBQUcsSUFBSSxDQUFDaEksU0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDO2NBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcrSCxTQUFTO2NBRXhCLElBQUksQ0FBQzdOLFlBQVksRUFBRTtjQUVuQixPQUFPbU4sT0FBTztZQUNmLENBQUM7WUFFRC9FLFNBQVM7Y0FDUixNQUFNeEcsTUFBTSxHQUFHO2dCQUFFLEdBQUcsSUFBSSxDQUFDO2NBQU8sQ0FBRTtjQUNsQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUVBLE1BQU0sQ0FBQytGLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVztjQUMxRDtjQUNBLE9BQU8vRixNQUFNO1lBQ2Q7O1VBQ0F2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuRkQ7VUFHTSxNQUFtQjBQLFlBQWEsU0FBUXpPLG9CQUE0QjtVQUFHakI7VUFFN0UsTUFBTTJQLFlBQVksR0FBRyxJQUFJRCxZQUFZLEVBQUUiLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIlJlc3BvbnNlQWRhcHRlciIsImdldCIsInBhcmVudCIsImFkYXB0ZXJzIiwiUmVhY3RpdmVDb25maWciLCJhZGFwdGVyIiwiQWRhcHRlciIsIkxlZ2FjeUFkYXB0ZXIiLCJPYmplY3QiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiQ29sbGVjdGlvbiIsImxvY2FsZGIiLCJNYXAiLCJlbGVtZW50cyIsIml0ZW1zIiwiaXNPbmxpbmUiLCJsb2NhbFByb3ZpZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwidHJpZ2dlckV2ZW50IiwiY291bnRlcnMiLCJ0b3RhbCIsIm5leHQiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJzcGVjcyIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJzZXQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwicHJvY2Vzc0VudHJpZXMiLCJ0cmlnZ2VyIiwic2V0T2ZmbGluZSIsInNldEl0ZW1zIiwidmFsdWVzIiwic3RvcmUiLCJmb3JFYWNoIiwiaWQiLCJkZWxldGUiLCJpZHMiLCJzb2Z0RGVsZXRlIiwiZGVsZXRlSXRlbXMiLCJlIiwiY29uc29sZSIsImxvYWQiLCJhcmdzIiwibG9jYWxMb2FkIiwiZmlsdGVyIiwic2F2ZSIsInN5bmMiLCJwdWJsaXNoIiwidG9TeW5jIiwic2V0RW50cmllcyIsImVudHJpZXMiLCJyZW1vdGVEYXRhIiwicGFyZW50QnJpZGdlIiwiUmVnaXN0cnlGYWN0b3J5IiwiY3VzdG9tRmlsdGVyIiwicGFyYW1zIiwibG9jYWxEYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsImxvYWRlZCIsInN0YXJ0IiwibGltaXQiLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJleGMiLCJmZXRjaGVkIiwibGFuZGVkIiwiZGVsZXRlZEVudHJpZXMiLCJwcm9taXNlcyIsIm1hcCIsInJlY29yZCIsInB1c2giLCJhbGwiLCJpbmRleCIsInJlZ2lzdGVyTGlzdCIsInJlbW90ZUxvYWQiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwiYWN0aXZlIiwiU2V0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDb25uZWN0aW9uIiwicmVhZHkiLCJQZW5kaW5nUHJvbWlzZSIsImRhdGFiYXNlIiwiREJNYW5hZ2VyIiwib3JkZXJCeSIsIndoZXJlIiwib2Zmc2V0IiwiaSIsImlzRGVsZXRlZCIsInRvQXJyYXkiLCJjYWxsYmFjayIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25kaXRpb25zIiwia2V5cyIsImNvbnRyb2xzIiwiY29uZGl0aW9uIiwiaW5jbHVkZXMiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImZpcnN0IiwibGl2ZSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwic2FtZVF1ZXJ5IiwibGVuZ3RoIiwiY3VycmVudE1hcCIsImFkZCIsInJlbW92ZWQiLCJoYXMiLCJlcnIiLCJwcm9jZXNzIiwib2ZmbGluZSIsImdldFByb3BlcnRpZXMiLCJ0b1NhdmUiLCJpbnN0YW5jZUlkIiwic2F2ZUFsbCIsInJlZ2lzdHJ5IiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJidWxrUHV0IiwicmVzdWx0cyIsImFsbFNldHRsZWQiLCJtYXBwZWRGbiIsInJlc3VsdCIsImZhaWxlZCIsImNvbnRyb2wiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwicmVjb3JkcyIsImJ1bGtHZXQiLCJleGlzdGluZ1JlY29yZHMiLCJ1bmRlZmluZWQiLCJpdGVtc1RvVXBkYXRlIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIlVzZXJQcm92aWRlciIsIkJvb2tzIiwiQm9vayIsIkl0ZW0iLCJ1bmlxdWUiLCJza2VsZXRvbiIsIl9fZ2V0IiwiaXNSZWFkeSIsImNoZWNrUmVhZHkiLCJjb25maWciLCJMb2NhbFByb3ZpZGVyIiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwiYmluZCIsImluaXRpYWxpc2UiLCJvYmplY3RSZWFkeSIsIm9uUmVhZHkiLCJoYXNPd25Qcm9wZXJ0eSIsIm5hbWUiLCJ0b0l0ZXJhdGUiLCJmaWVsZCIsImdldFByb3BlcnR5TmFtZXMiLCJmb3VuZCIsInNhbWUiLCJrZXkiLCJvcmlnaW5hbCIsImxvYWRNZXRob2QiLCJfX2lkIiwiZmxvb3IiLCJyYW5kb20iLCJkZWVwQ29tcGFyZSIsIm9iajEiLCJvYmoyIiwia2V5czEiLCJrZXlzMiIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsImlzT2JqZWN0Iiwib2JqZWN0IiwidG9Db21wYXJlIiwiYXJlRXF1YWwiLCJjcmVhdGUiLCJpc05ldyIsImR1cGxpY2F0ZWQiLCJ2YWxpZGF0ZVVuaXF1ZUZpZWxkcyIsImZpZWxkcyIsImNoZWNrUHJvbWlzZXMiLCJ0aGVuIiwiZHVwbGljYXRlRmllbGRzIiwidXBkYXRlZCIsInB1dCIsImxvY2FsVXBkYXRlIiwiaXNVbnB1Ymxpc2hlZCIsIkNvbGxlY3Rpb25Qcm92aWRlciIsInByb3BzIiwiSXRlbVByb3ZpZGVyIiwiZGJOYW1lIiwicmVnaXN0cmllcyIsImhhc0l0ZW0iLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYWRhcHRlci9kZWZhdWx0LnRzIiwiYWRhcHRlci9pbmRleC50cyIsImFkYXB0ZXIvaW50ZXJmYWNlLnRzIiwiYWRhcHRlci9sZWdhY3kudHMiLCJjYWNoZS9pbmRleC50cyIsImNvbGxlY3Rpb24vaW5kZXgudHMiLCJjb2xsZWN0aW9uL2ludGVyZmFjZXMvSUNvbGxlY3Rpb24udHMiLCJjb2xsZWN0aW9uL2xvYWQudHMiLCJjb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyLnRzIiwiY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiZXhhbXBsZS9jb2xsZWN0aW9uLnRzIiwiZXhhbXBsZS9pbmRleC50cyIsImludGVyZmFjZXMvcHJvdmlkZXIudHMiLCJpdGVtL2luZGV4LnRzIiwiaXRlbS9pbnRlcmZhY2VzL2NvbmZpZy50cyIsIml0ZW0vaW50ZXJmYWNlcy9pdGVtLnRzIiwiaXRlbS9sb2FkLnRzIiwiaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIml0ZW0vc2F2ZS50cyIsInByb3ZpZGVycy9jb2xsZWN0aW9uLnRzIiwicHJvdmlkZXJzL2l0ZW0udHMiLCJyZWdpc3RyeS9mYWN0b3J5LnRzIiwicmVnaXN0cnkvaW5kZXgudHMiLCJyZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=