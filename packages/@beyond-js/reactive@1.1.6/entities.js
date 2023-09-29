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
        hash: 1950209294,
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
                  ['and', 'or'].includes(key) && delete specs[key];
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
                    console.log(12, items);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO2NBRW5CLE9BQU9zTixPQUFPO1lBQ2YsQ0FBQztZQUVEOUUsU0FBUztjQUNSLE1BQU01RyxNQUFNLEdBQUc7Z0JBQUUsR0FBRyxJQUFJLENBQUM7Y0FBTyxDQUFFO2NBQ2xDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRUEsTUFBTSxDQUFDa0csVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXO2NBQzFEO2NBQ0EsT0FBT2xHLE1BQU07WUFDZDs7VUFDQXZEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25GRDtVQUdNLE1BQW1CNlAsWUFBYSxTQUFRNU8sb0JBQTRCO1VBQUdqQjtVQUU3RSxNQUFNOFAsWUFBWSxHQUFHLElBQUlELFlBQVksRUFBRSIsIm5hbWVzIjpbIkRlZmF1bHRBZGFwdGVyIiwidG9DbGllbnQiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmcm9tUmVtb3RlIiwiZnJvbVJlbW90ZUxpc3QiLCJleHBvcnRzIiwiUmVzcG9uc2VBZGFwdGVyIiwiZ2V0IiwicGFyZW50IiwiYWRhcHRlcnMiLCJSZWFjdGl2ZUNvbmZpZyIsImFkYXB0ZXIiLCJBZGFwdGVyIiwiTGVnYWN5QWRhcHRlciIsIk9iamVjdCIsInZhbHVlIiwiY29uc3RydWN0b3IiLCJlcnJvciIsInN0YXR1cyIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsIkNhY2hlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJDb2xsZWN0aW9uIiwibG9jYWxkYiIsIk1hcCIsImVsZW1lbnRzIiwiaXRlbXMiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInByb3ZpZGVyIiwic29ydEJ5Iiwic29ydERpcmVjdGlvbiIsInJlc3BvbnNlQWRhcHRlciIsInNwZWNzIiwic3RvcmVOYW1lIiwiZGIiLCJpdGVtIiwiRXJyb3IiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdCIsImdldFByb3BlcnR5IiwicHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImJyaWRnZSIsInNldCIsIkNvbGxlY3Rpb25Mb2NhbFByb3ZpZGVyIiwiQ29sbGVjdGlvblNhdmVNYW5hZ2VyIiwiQ29sbGVjdGlvbkxvYWRNYW5hZ2VyIiwib24iLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJ2YWx1ZXMiLCJzdG9yZSIsImZvckVhY2giLCJpZCIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsInJlbW90ZURhdGEiLCJwYXJlbnRCcmlkZ2UiLCJSZWdpc3RyeUZhY3RvcnkiLCJjdXN0b21GaWx0ZXIiLCJwYXJhbXMiLCJsb2NhbERhdGEiLCJuZXdJdGVtcyIsInVwZGF0ZSIsImNvbmNhdCIsInByb3BlcnRpZXMiLCJsb2NhbExvYWRlZCIsImZldGNoaW5nIiwibG9hZGVkIiwic3RhcnQiLCJsaW1pdCIsImxpc3QiLCJwcm9jZXNzUmVtb3RlRW50cmllcyIsImV4YyIsImZldGNoZWQiLCJsYW5kZWQiLCJkZWxldGVkRW50cmllcyIsInByb21pc2VzIiwibWFwIiwicmVjb3JkIiwicHVzaCIsImFsbCIsImluZGV4IiwicmVnaXN0ZXJMaXN0IiwicmVtb3RlTG9hZCIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJhY3RpdmUiLCJTZXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJyZWFkeSIsIlBlbmRpbmdQcm9taXNlIiwiZGF0YWJhc2UiLCJEQk1hbmFnZXIiLCJvcmRlckJ5Iiwid2hlcmUiLCJvZmZzZXQiLCJrZXlzIiwia2V5IiwiaW5jbHVkZXMiLCJjb2xsZWN0aW9uIiwiaSIsImlzRGVsZXRlZCIsInRvQXJyYXkiLCJjYWxsYmFjayIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25kaXRpb25zIiwiY29udHJvbHMiLCJjb25kaXRpb24iLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImZpcnN0IiwibGl2ZSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwibG9nIiwic2FtZVF1ZXJ5IiwibGVuZ3RoIiwiY3VycmVudE1hcCIsImFkZCIsInJlbW92ZWQiLCJoYXMiLCJlcnIiLCJwcm9jZXNzIiwib2ZmbGluZSIsImdldFByb3BlcnRpZXMiLCJ0b1NhdmUiLCJpbnN0YW5jZUlkIiwic2F2ZUFsbCIsInRyYWNlIiwicmVnaXN0cnkiLCJSZWdpc3RyeSIsImRlbGV0ZWQiLCJzZXRWYWx1ZXMiLCJjaHVua3MiLCJiYXRjaCIsInNwbGljZSIsImdldFZhbHVlcyIsImJ1bGtQdXQiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiY29udHJvbCIsInVwc2VydCIsIm9yaWdpbmFsRGF0YSIsInRyYW5zYWN0aW9uIiwiaW5zdGFuY2VJZFRvSWRNYXAiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsIml0ZW1zVG9VcGRhdGUiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJ3YXJuIiwiYnVsa1NhdmUiLCJzZW5kQ2h1bmsiLCJjaHVuayIsInN1Y2Nlc3MiLCJzcGxpdERhdGFJbnRvQ2h1bmtzIiwic2xpY2UiLCJlcXVhbHMiLCJmYWlsZWRDaHVua3MiLCJzdWNjZXNzQ2h1bmtzIiwiVXNlclByb3ZpZGVyIiwiQm9va3MiLCJCb29rIiwiSXRlbSIsInVuaXF1ZSIsInNrZWxldG9uIiwiX19nZXQiLCJpc1JlYWR5IiwiY2hlY2tSZWFkeSIsImNvbmZpZyIsIkxvY2FsUHJvdmlkZXIiLCJJdGVtU2F2ZU1hbmFnZXIiLCJJdGVtTG9hZE1hbmFnZXIiLCJiaW5kIiwiaW5pdGlhbGlzZSIsIm9iamVjdFJlYWR5Iiwib25SZWFkeSIsImhhc093blByb3BlcnR5IiwibmFtZSIsInRvSXRlcmF0ZSIsImZpZWxkIiwiZ2V0UHJvcGVydHlOYW1lcyIsImZvdW5kIiwic2FtZSIsIm9yaWdpbmFsIiwibG9hZE1ldGhvZCIsIl9faWQiLCJmbG9vciIsInJhbmRvbSIsImRlZXBDb21wYXJlIiwib2JqMSIsIm9iajIiLCJrZXlzMSIsImtleXMyIiwidmFsMSIsInZhbDIiLCJhcmVPYmplY3RzIiwiaXNPYmplY3QiLCJvYmplY3QiLCJ0b0NvbXBhcmUiLCJhcmVFcXVhbCIsImNyZWF0ZSIsImlzTmV3IiwiZHVwbGljYXRlZCIsInZhbGlkYXRlVW5pcXVlRmllbGRzIiwiZmllbGRzIiwiY2hlY2tQcm9taXNlcyIsInRoZW4iLCJkdXBsaWNhdGVGaWVsZHMiLCJ1cGRhdGVkIiwicHV0IiwibG9jYWxVcGRhdGUiLCJpc1VucHVibGlzaGVkIiwiQ29sbGVjdGlvblByb3ZpZGVyIiwicHJvcHMiLCJJdGVtUHJvdmlkZXIiLCJkYk5hbWUiLCJyZWdpc3RyaWVzIiwiaGFzSXRlbSIsIm5ld1ZhbHVlcyIsImlzRGVsZWxldGVkIiwiU3RvcmVSZWNvcmRzIiwic3RvcmVGYWN0b3J5Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhZGFwdGVyL2RlZmF1bHQudHMiLCJhZGFwdGVyL2luZGV4LnRzIiwiYWRhcHRlci9pbnRlcmZhY2UudHMiLCJhZGFwdGVyL2xlZ2FjeS50cyIsImNhY2hlL2luZGV4LnRzIiwiY29sbGVjdGlvbi9pbmRleC50cyIsImNvbGxlY3Rpb24vaW50ZXJmYWNlcy9JQ29sbGVjdGlvbi50cyIsImNvbGxlY3Rpb24vbG9hZC50cyIsImNvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIudHMiLCJjb2xsZWN0aW9uL3B1Ymxpc2gudHMiLCJleGFtcGxlL2NvbGxlY3Rpb24udHMiLCJleGFtcGxlL2luZGV4LnRzIiwiaW50ZXJmYWNlcy9wcm92aWRlci50cyIsIml0ZW0vaW5kZXgudHMiLCJpdGVtL2ludGVyZmFjZXMvY29uZmlnLnRzIiwiaXRlbS9pbnRlcmZhY2VzL2l0ZW0udHMiLCJpdGVtL2xvYWQudHMiLCJpdGVtL2xvY2FsLXByb3ZpZGVyLnRzIiwiaXRlbS9zYXZlLnRzIiwicHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCJwcm92aWRlcnMvaXRlbS50cyIsInJlZ2lzdHJ5L2ZhY3RvcnkudHMiLCJyZWdpc3RyeS9pbmRleC50cyIsInJlZ2lzdHJ5L3N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==