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
        hash: 540180986,
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
            where = (params, limit) => {
              return () => {
                let store = this.#store;
                const offset = (this.#page - 1) * limit;
                const specs = {
                  ...params
                };
                Object.keys(specs).forEach(key => {
                  ['and', 'or', 'limit'].includes(key) && delete specs[key];
                });
                const collection = store.where(specs);
                const filter = this.#customWhere ?? this.#defaultWhere;
                this.#currentLimit = limit;
                this.#currentOffset = offset;
                /**
                 * @todo: the isDeleted field must be set as 0 by default.
                 */
                return collection.filter(i => i.isDeleted !== 1).offset(offset).limit(limit).toArray();
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
                const live = (0, _dexie.liveQuery)(this.where(params, limit));
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
              if (!items.length) console.trace(80, items);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2NBQ1IsTUFBTTNHLE1BQU0sR0FBRztnQkFBRSxHQUFHLElBQUksQ0FBQztjQUFPLENBQUU7Y0FDbEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFQSxNQUFNLENBQUNpRyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVc7Y0FDMUQ7Y0FDQSxPQUFPakcsTUFBTTtZQUNkOztVQUNBdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkZEO1VBR00sTUFBbUI0UCxZQUFhLFNBQVEzTyxvQkFBNEI7VUFBR2pCO1VBRTdFLE1BQU02UCxZQUFZLEdBQUcsSUFBSUQsWUFBWSxFQUFFIiwibmFtZXMiOlsiRGVmYXVsdEFkYXB0ZXIiLCJ0b0NsaWVudCIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsImZyb21SZW1vdGUiLCJmcm9tUmVtb3RlTGlzdCIsImV4cG9ydHMiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwidmFsdWUiLCJjb25zdHJ1Y3RvciIsImVycm9yIiwic3RhdHVzIiwibWVzc2FnZSIsInJlc3BvbnNlIiwiQ2FjaGVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsIkNvbGxlY3Rpb24iLCJsb2NhbGRiIiwiTWFwIiwiZWxlbWVudHMiLCJpdGVtcyIsImlzT25saW5lIiwibG9jYWxQcm92aWRlciIsIkFycmF5IiwiaXNBcnJheSIsInRyaWdnZXJFdmVudCIsImNvdW50ZXJzIiwidG90YWwiLCJuZXh0IiwicHJvdmlkZXIiLCJzb3J0QnkiLCJzb3J0RGlyZWN0aW9uIiwicmVzcG9uc2VBZGFwdGVyIiwic3BlY3MiLCJzdG9yZU5hbWUiLCJkYiIsIml0ZW0iLCJFcnJvciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwic2V0IiwiQ29sbGVjdGlvbkxvY2FsUHJvdmlkZXIiLCJDb2xsZWN0aW9uU2F2ZU1hbmFnZXIiLCJDb2xsZWN0aW9uTG9hZE1hbmFnZXIiLCJvbiIsInByb2Nlc3NFbnRyaWVzIiwidHJpZ2dlciIsInNldE9mZmxpbmUiLCJzZXRJdGVtcyIsInZhbHVlcyIsInN0b3JlIiwiZm9yRWFjaCIsImlkIiwiZGVsZXRlIiwiaWRzIiwic29mdERlbGV0ZSIsImRlbGV0ZUl0ZW1zIiwiZSIsImNvbnNvbGUiLCJsb2FkIiwiYXJncyIsImxvY2FsTG9hZCIsImZpbHRlciIsInNhdmUiLCJzeW5jIiwicHVibGlzaCIsInRvU3luYyIsInNldEVudHJpZXMiLCJlbnRyaWVzIiwicmVtb3RlRGF0YSIsInBhcmVudEJyaWRnZSIsIlJlZ2lzdHJ5RmFjdG9yeSIsImN1c3RvbUZpbHRlciIsInBhcmFtcyIsImxvY2FsRGF0YSIsIm5ld0l0ZW1zIiwidXBkYXRlIiwiY29uY2F0IiwicHJvcGVydGllcyIsImxvY2FsTG9hZGVkIiwiZmV0Y2hpbmciLCJsb2FkZWQiLCJzdGFydCIsImxpbWl0IiwibGlzdCIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwiZXhjIiwiZmV0Y2hlZCIsImxhbmRlZCIsImRlbGV0ZWRFbnRyaWVzIiwicHJvbWlzZXMiLCJtYXAiLCJyZWNvcmQiLCJwdXNoIiwiYWxsIiwiaW5kZXgiLCJyZWdpc3Rlckxpc3QiLCJyZW1vdGVMb2FkIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsIm9uTGluZSIsImFjdGl2ZSIsIlNldCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsInJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJkYXRhYmFzZSIsIkRCTWFuYWdlciIsIm9yZGVyQnkiLCJ3aGVyZSIsIm9mZnNldCIsImtleXMiLCJrZXkiLCJpbmNsdWRlcyIsImNvbGxlY3Rpb24iLCJpIiwiaXNEZWxldGVkIiwidG9BcnJheSIsImNhbGxiYWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmRpdGlvbnMiLCJjb250cm9scyIsImNvbmRpdGlvbiIsImNvdW50IiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwiZmlyc3QiLCJsaXZlIiwiY3VycmVudFBhZ2UiLCJzdWJzY3JpYmUiLCJzYW1lUXVlcnkiLCJsZW5ndGgiLCJjdXJyZW50TWFwIiwiYWRkIiwicmVtb3ZlZCIsImhhcyIsImVyciIsInByb2Nlc3MiLCJvZmZsaW5lIiwiZ2V0UHJvcGVydGllcyIsInRvU2F2ZSIsImluc3RhbmNlSWQiLCJzYXZlQWxsIiwidHJhY2UiLCJyZWdpc3RyeSIsIlJlZ2lzdHJ5IiwiZGVsZXRlZCIsInNldFZhbHVlcyIsImNodW5rcyIsImJhdGNoIiwic3BsaWNlIiwiZ2V0VmFsdWVzIiwiYnVsa1B1dCIsInJlc3VsdHMiLCJhbGxTZXR0bGVkIiwibWFwcGVkRm4iLCJyZXN1bHQiLCJmYWlsZWQiLCJjb250cm9sIiwidXBzZXJ0Iiwib3JpZ2luYWxEYXRhIiwidHJhbnNhY3Rpb24iLCJpbnN0YW5jZUlkVG9JZE1hcCIsInJlY29yZHMiLCJidWxrR2V0IiwiZXhpc3RpbmdSZWNvcmRzIiwidW5kZWZpbmVkIiwiaXRlbXNUb1VwZGF0ZSIsIk1BWF9SRVRSSUVTIiwiQ0hVTktfU0laRSIsIndhcm4iLCJidWxrU2F2ZSIsInNlbmRDaHVuayIsImNodW5rIiwic3VjY2VzcyIsInNwbGl0RGF0YUludG9DaHVua3MiLCJzbGljZSIsImVxdWFscyIsImZhaWxlZENodW5rcyIsInN1Y2Nlc3NDaHVua3MiLCJVc2VyUHJvdmlkZXIiLCJCb29rcyIsIkJvb2siLCJJdGVtIiwidW5pcXVlIiwic2tlbGV0b24iLCJfX2dldCIsImlzUmVhZHkiLCJjaGVja1JlYWR5IiwiY29uZmlnIiwiTG9jYWxQcm92aWRlciIsIkl0ZW1TYXZlTWFuYWdlciIsIkl0ZW1Mb2FkTWFuYWdlciIsImJpbmQiLCJpbml0aWFsaXNlIiwib2JqZWN0UmVhZHkiLCJvblJlYWR5IiwiaGFzT3duUHJvcGVydHkiLCJuYW1lIiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwiZm91bmQiLCJzYW1lIiwib3JpZ2luYWwiLCJsb2FkTWV0aG9kIiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwiZGVlcENvbXBhcmUiLCJvYmoxIiwib2JqMiIsImtleXMxIiwia2V5czIiLCJ2YWwxIiwidmFsMiIsImFyZU9iamVjdHMiLCJpc09iamVjdCIsIm9iamVjdCIsInRvQ29tcGFyZSIsImFyZUVxdWFsIiwiY3JlYXRlIiwiaXNOZXciLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsInVwZGF0ZWQiLCJwdXQiLCJsb2NhbFVwZGF0ZSIsImlzVW5wdWJsaXNoZWQiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJwcm9wcyIsIkl0ZW1Qcm92aWRlciIsImRiTmFtZSIsInJlZ2lzdHJpZXMiLCJoYXNJdGVtIiwibmV3VmFsdWVzIiwiaXNEZWxlbGV0ZWQiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImFkYXB0ZXIvZGVmYXVsdC50cyIsImFkYXB0ZXIvaW5kZXgudHMiLCJhZGFwdGVyL2ludGVyZmFjZS50cyIsImFkYXB0ZXIvbGVnYWN5LnRzIiwiY2FjaGUvaW5kZXgudHMiLCJjb2xsZWN0aW9uL2luZGV4LnRzIiwiY29sbGVjdGlvbi9pbnRlcmZhY2VzL0lDb2xsZWN0aW9uLnRzIiwiY29sbGVjdGlvbi9sb2FkLnRzIiwiY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci50cyIsImNvbGxlY3Rpb24vcHVibGlzaC50cyIsImV4YW1wbGUvY29sbGVjdGlvbi50cyIsImV4YW1wbGUvaW5kZXgudHMiLCJpbnRlcmZhY2VzL3Byb3ZpZGVyLnRzIiwiaXRlbS9pbmRleC50cyIsIml0ZW0vaW50ZXJmYWNlcy9jb25maWcudHMiLCJpdGVtL2ludGVyZmFjZXMvaXRlbS50cyIsIml0ZW0vbG9hZC50cyIsIml0ZW0vbG9jYWwtcHJvdmlkZXIudHMiLCJpdGVtL3NhdmUudHMiLCJwcm92aWRlcnMvY29sbGVjdGlvbi50cyIsInByb3ZpZGVycy9pdGVtLnRzIiwicmVnaXN0cnkvZmFjdG9yeS50cyIsInJlZ2lzdHJ5L2luZGV4LnRzIiwicmVnaXN0cnkvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19