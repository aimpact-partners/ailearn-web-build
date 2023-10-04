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
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.6"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
        hash: 452016921,
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
                const {
                  sortBy,
                  sortDirection
                } = params;
                const offset = (this.#page - 1) * limit;
                const specs = {
                  ...params
                };
                Object.keys(specs).forEach(key => {
                  ['and', 'or', 'limit', 'sortBy', 'sortDirection'].includes(key) && delete specs[key];
                });
                let collection = store.where(specs);
                const filter = this.#customWhere ?? this.#defaultWhere;
                this.#currentLimit = limit;
                this.#currentOffset = offset;
                /**
                 * @todo: the isDeleted field must be set as 0 by default.
                 */
                collection = collection.filter(i => i.isDeleted !== 1);
                if (sortBy) {
                  console.log(22, sortBy);
                  collection.sortBy(sortBy);
                }
                return collection.offset(offset).limit(limit).toArray();
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
                    if (!globalThis.data) globalThis.data = [];
                    globalThis.data.push([...items]);
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
        hash: 537150605,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiaXRlbXMiLCJsb2NhbGRiIiwiZWxlbWVudHMiLCJNYXAiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJzZXQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwibGlzdGVuSXRlbXMiLCIjbGlzdGVuSXRlbXMiLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJ2YWx1ZXMiLCJzdG9yZSIsImZvckVhY2giLCJpZCIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsIl9mYWN0b3J5IiwicGFyZW50QnJpZGdlIiwicmVnaXN0cnkiLCJyZW1vdGVEYXRhIiwiUmVnaXN0cnlGYWN0b3J5IiwiY3VzdG9tRmlsdGVyIiwicGFyYW1zIiwibG9jYWxEYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsImxvYWRlZCIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJleGMiLCJmZXRjaGVkIiwibGFuZGVkIiwiZGVsZXRlZEVudHJpZXMiLCJwcm9taXNlcyIsIm1hcCIsInJlY29yZCIsInB1c2giLCJhbGwiLCJpbmRleCIsInJlZ2lzdGVyTGlzdCIsInJlbW90ZUxvYWQiLCJfZGV4aWUiLCJfY29yZSIsIl9kYXRhYmFzZSIsIl9yZWdpc3RyeSIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJiYXRjaGVzIiwiYWN0aXZlIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwibGlzdEl0ZW1zIiwicmVnaXN0cnlGYWN0b3J5IiwiZXhpc3RzIiwiZm91bmQiLCJTZXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXBwbHkiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsInByb21pc2VJbml0IiwicmVhZHkiLCJQZW5kaW5nUHJvbWlzZSIsIkRCTWFuYWdlciIsImlzVW5wdWJsaXNoZWQiLCIjaXNVbnB1Ymxpc2hlZCIsInByb21pc2VMb2FkIiwiY3VzdG9tV2hlcmUiLCJkZWZhdWx0V2hlcmUiLCJvcmRlckJ5IiwiY3VycmVudExpbWl0IiwiY3VycmVudE9mZnNldCIsIndoZXJlIiwib2Zmc2V0Iiwia2V5cyIsImtleSIsImluY2x1ZGVzIiwiY29sbGVjdGlvbiIsImkiLCJpc0RlbGV0ZWQiLCJsb2ciLCJ0b0FycmF5IiwiY2FsbGJhY2siLCJjYW50aWRhZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25kaXRpb25zIiwiY29udHJvbHMiLCJjb25kaXRpb24iLCJwcm9jZXNzQ29udHJvbCIsImNvdW50IiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwiZmlyc3QiLCJsaXZlIiwibGl2ZVF1ZXJ5IiwiY3VycmVudFBhZ2UiLCJzdWJzY3JpYmUiLCJzYW1lUXVlcnkiLCJsZW5ndGgiLCJjdXJyZW50TWFwIiwiYWRkIiwicmVtb3ZlZCIsImhhcyIsImVyciIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiaW5zdGFuY2VJZCIsInNhdmVBbGwiLCJSZWdpc3RyeSIsImRlbGV0ZWQiLCJzZXRWYWx1ZXMiLCJjaHVua3MiLCJiYXRjaCIsInNwbGljZSIsImdldFZhbHVlcyIsImJ1bGtQdXQiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiI3Byb2Nlc3NDb250cm9sIiwiY29udHJvbCIsInVwc2VydCIsIm9yaWdpbmFsRGF0YSIsInRyYW5zYWN0aW9uIiwiaW5zdGFuY2VJZFRvSWRNYXAiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsIml0ZW1zVG9VcGRhdGUiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJ3YXJuIiwiYnVsa1NhdmUiLCJzZW5kQ2h1bmsiLCJjaHVuayIsInN1Y2Nlc3MiLCJzcGxpdERhdGFJbnRvQ2h1bmtzIiwic2xpY2UiLCJlcXVhbHMiLCJmYWlsZWRDaHVua3MiLCJzdWNjZXNzQ2h1bmtzIiwiX2NvbGxlY3Rpb24iLCJfaW5kZXgiLCJVc2VyUHJvdmlkZXIiLCJCb29rcyIsIkJvb2siLCJJdGVtIiwiX3NhdmUiLCJpbmZvIiwiaWdub3JlZEZpZWxkcyIsInNrZWxldG9uIiwidW5pcXVlIiwiX19nZXQiLCJpc1JlYWR5IiwiY2hlY2tSZWFkeSIsIm9iamVjdFJlYWR5IiwicHJvbWlzZVJlYWR5IiwiaW5pdFByb21pc2UiLCJjb25maWciLCJMb2NhbFByb3ZpZGVyIiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwiYmluZCIsImluaXRpYWxpc2UiLCJvblJlYWR5IiwiaGFzT3duUHJvcGVydHkiLCJuYW1lIiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwic2FtZSIsIm9yaWdpbmFsIiwibG9hZE1ldGhvZCIsImlzTmV3IiwiZmFjdG9yeVJlZ2lzdHJ5IiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwiZ2V0UmVnaXN0cnkiLCJkZWVwQ29tcGFyZSIsIm9iajEiLCJvYmoyIiwia2V5czEiLCJrZXlzMiIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsImlzT2JqZWN0Iiwib2JqZWN0IiwidG9Db21wYXJlIiwiYXJlRXF1YWwiLCJjcmVhdGUiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsIiN1cGRhdGUiLCJ1cGRhdGVkIiwicHV0IiwibG9jYWxVcGRhdGUiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJwcm9wcyIsIkl0ZW1Qcm92aWRlciIsInN0b3JlcyIsImRiTmFtZSIsInJlZ2lzdHJpZXMiLCJoYXNJdGVtIiwiZ2V0U3RvcmUiLCIjZ2V0U3RvcmUiLCJkYnMiLCJfdXVpZCIsImtleUlkIiwidjQiLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VzIjpbIi9hZGFwdGVyL2RlZmF1bHQudHMiLCIvYWRhcHRlci9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvYWRhcHRlci9sZWdhY3kudHMiLCIvY2FjaGUvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9JQ29sbGVjdGlvbi50cyIsIi9jb2xsZWN0aW9uL2xvYWQudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci50cyIsIi9jb2xsZWN0aW9uL3B1Ymxpc2gudHMiLCIvZXhhbXBsZS9jb2xsZWN0aW9uLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU0sTUFBT0EsY0FBYztZQUMxQkMsUUFBUUEsQ0FBQ0MsSUFBUztjQUNqQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFHLFVBQVVBLENBQUNILElBQVM7Y0FDbkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBSSxjQUFjQSxDQUFDSixJQUFT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