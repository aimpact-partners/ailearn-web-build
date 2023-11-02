System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/settings", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/database", "dexie@3.2.4", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.0"], function (_export, _context) {
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
    }, function (_beyondJsReactive120Settings) {
      dependency_1 = _beyondJsReactive120Settings;
    }, function (_beyondJsReactive120Model) {
      dependency_2 = _beyondJsReactive120Model;
    }, function (_beyondJsReactive120Database) {
      dependency_3 = _beyondJsReactive120Database;
    }, function (_dexie2) {
      dependency_4 = _dexie2;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_uuid2) {
      dependency_6 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.2.0/entities"
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
        hash: 3416457367,
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
                provider = 'internal',
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
              if (provider === 'internal') {
                //support to manage provider as the same class.
                this.#provider = this;
              } else if (provider) {
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
        hash: 2488013953,
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
        hash: 412581881,
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
                const localResponse = await this.#localLoad(params);
                if (!this.#provider) return localResponse;
                console.log(100, this.#provider);
                const response = await this.#provider.list(params);
                console.log(101, response);
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

      /*******************************************
      INTERNAL MODULE: ./collection/local-provider
      *******************************************/

      ims.set('./collection/local-provider', {
        hash: 2900935152,
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
            #batches = 200;
            #offline;
            #database;
            #storeName;
            #databaseName;
            #listItems = new Map();
            #exists = false;
            #found = false;
            #ids = new Set();
            #db;
            #registryFactory;
            #parent;
            #bridge;
            #localdb;
            /**
             *
             */
            #apply = true;
            #store;
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
            #items = [];
            get items() {
              return this.#items;
            }
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
              return async () => {
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
                let collection = Object.keys(specs).length === 0 ? store : store.where(specs);
                //const filter = this.#customWhere ?? this.#defaultWhere;
                this.#currentLimit = limit;
                this.#currentOffset = offset;
                /**
                 * @todo: the isDeleted field must be set as 0 by default.
                 */
                if (sortBy) {
                  await collection.sortBy(sortBy);
                }
                collection = collection.filter(i => i.isDeleted !== 1);
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
                    items.forEach(item => {
                      // console.log(item.id, item.role, item.content?.substring(0, 40));
                    });
                    if (params.sortBy) {
                      items.sort((a, b) => {
                        return a[params.sortBy] - b[params.sortBy];
                      });
                    }
                    if (!globalThis.data) globalThis.data = [];
                    //globalThis.data.push([...items]);
                    if (currentPage == this.#page) {
                      sameQuery = true;
                    } else {
                      currentPage = this.#page;
                    }
                    if (sameQuery && items.length === this.#parent.items.length) {
                      return;
                    }
                    const currentMap = new Set();
                    items.forEach(item => {
                      this.#listItems.set(item.id, item);
                      currentMap.add(item.id);
                    });
                    if (sameQuery) {
                      [...this.#listItems.keys()].forEach(id => {
                        if (!currentMap.has(id)) {
                          this.#listItems.delete(id);
                        }
                      });
                    }
                    this.#items = [...this.#listItems.values()];
                    items.forEach(item => this.#ids.add(item.id));
                    this.trigger('items.changed');
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
        hash: 545684236,
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
                if (config.provider !== 'internal' && typeof config.provider !== 'function') {
                  throw new Error('Provider must be an function');
                }
                this.#provider = config.provider === 'internal' ? this : new config.provider(this);
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
              this.properties?.forEach(property => {
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
        hash: 3070550496,
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
        hash: 3540439905,
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
            async loadLocally(params) {
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
            }
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
                const localdb = await this.#getProperty('localdb');
                const localProvider = this.#getProperty('localProvider');
                await this.loadLocally(params);
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
                  await this.updateLocally(remoteData);
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
            async updateLocally(data) {
              let same = true;
              this.#parent.landed = true;
              const localProvider = this.#getProperty('localProvider');
              Object.keys(data).forEach(key => {
                let original = localProvider.registry.values;
                if (original[key] !== data[key]) same = false;
              });
              if (!same) await this.#localProvider.save(data);
            }
            remoteLoad = async params => {
              // TODO: CHANGE TO LOAD
              if (!this.#parent.isOnline) return;
              /**
               * The data method is validated to support old providers.
               */
              console.log(101, this.#provider, this.#provider.data);
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
        hash: 3439837031,
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
              console.log(99, storeName);
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
                data = localData;
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
              const response = await this.#update({
                isDeleted: 1
              });
              return response;
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
        hash: 840681506,
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
                if (this.#parent.isOnline && this.#provider) {
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
                let props = {
                  ...properties
                };
                this.#parent.localFields.forEach(field => {
                  delete props[field];
                });
                const response = await this.#provider.publish(props);
                const data = this.#adapter.fromRemote(response);
                if (this.#localProvider) {
                  this.#localProvider.save(data);
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
        hash: 920615378,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDL0gsSUFBSSxDQUFDO2NBQy9CLElBQUk2UCxPQUFPLEdBQUcsS0FBSztjQUVuQixJQUFJLENBQUM3UCxJQUFJLENBQUMrRCxFQUFFLEVBQUUvRCxJQUFJLENBQUMrRCxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUc7Y0FFaEMsTUFBTXlNLFNBQVMsR0FBRztnQkFBRSxHQUFHLElBQUksQ0FBQztjQUFPLENBQUU7Y0FDckNQLEtBQUssQ0FBQ25NLE9BQU8sQ0FBQ2QsUUFBUSxJQUFHO2dCQUN4QixJQUFJaEQsSUFBSSxDQUFDZ0QsUUFBUSxDQUFDLEtBQUt3TixTQUFTLENBQUN4TixRQUFRLENBQUMsRUFBRTtnQkFDNUN3TixTQUFTLENBQUN4TixRQUFRLENBQUMsR0FBR2hELElBQUksQ0FBQ2dELFFBQVEsQ0FBQztnQkFDcEM2TSxPQUFPLEdBQUcsSUFBSTtjQUNmLENBQUMsQ0FBQztjQUNGVyxTQUFTLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUNwSSxTQUFTLEtBQUssQ0FBQyxJQUFJLENBQUM7Y0FDakQsSUFBSSxDQUFDLE9BQU8sR0FBR21JLFNBQVM7Y0FDeEIsSUFBSSxDQUFDeE8sWUFBWSxFQUFFO2NBRW5CLE9BQU82TixPQUFPO1lBQ2YsQ0FBQztZQUVEbkYsU0FBUztjQUNSLE1BQU05RyxNQUFNLEdBQUc7Z0JBQUUsR0FBRyxJQUFJLENBQUM7Y0FBTyxDQUFFO2NBQ2xDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRUEsTUFBTSxDQUFDcUcsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXO2NBQzFEO2NBQ0EsT0FBT3JHLE1BQU07WUFDZDs7VUFDQXZEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hGRDtVQUdNLE1BQW1CcVEsWUFBYSxTQUFRcFAsb0JBQTRCO1VBQUdqQjtVQUU3RSxNQUFNc1EsWUFBWSxHQUFHLElBQUlELFlBQVksRUFBRSIsIm5hbWVzIjpbIkRlZmF1bHRBZGFwdGVyIiwidG9DbGllbnQiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmcm9tUmVtb3RlIiwiZnJvbVJlbW90ZUxpc3QiLCJleHBvcnRzIiwiUmVzcG9uc2VBZGFwdGVyIiwiZ2V0IiwicGFyZW50IiwiYWRhcHRlcnMiLCJSZWFjdGl2ZUNvbmZpZyIsImFkYXB0ZXIiLCJBZGFwdGVyIiwiTGVnYWN5QWRhcHRlciIsIk9iamVjdCIsInZhbHVlIiwiY29uc3RydWN0b3IiLCJlcnJvciIsInN0YXR1cyIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsIkNhY2hlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJDb2xsZWN0aW9uIiwibG9jYWxkYiIsIk1hcCIsImVsZW1lbnRzIiwiaXRlbXMiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInByb3ZpZGVyIiwic29ydEJ5Iiwic29ydERpcmVjdGlvbiIsInJlc3BvbnNlQWRhcHRlciIsInNwZWNzIiwic3RvcmVOYW1lIiwiZGIiLCJpdGVtIiwiRXJyb3IiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdCIsImdldFByb3BlcnR5IiwicHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImJyaWRnZSIsInNldCIsIkNvbGxlY3Rpb25Mb2NhbFByb3ZpZGVyIiwiQ29sbGVjdGlvblNhdmVNYW5hZ2VyIiwiQ29sbGVjdGlvbkxvYWRNYW5hZ2VyIiwib24iLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJ2YWx1ZXMiLCJzdG9yZSIsImZvckVhY2giLCJpZCIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsInJlbW90ZURhdGEiLCJwYXJlbnRCcmlkZ2UiLCJSZWdpc3RyeUZhY3RvcnkiLCJjdXN0b21GaWx0ZXIiLCJwYXJhbXMiLCJsb2NhbERhdGEiLCJuZXdJdGVtcyIsInVwZGF0ZSIsImNvbmNhdCIsInByb3BlcnRpZXMiLCJsb2NhbExvYWRlZCIsImZldGNoaW5nIiwibG9hZGVkIiwic3RhcnQiLCJsaW1pdCIsImxvY2FsUmVzcG9uc2UiLCJsb2ciLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJleGMiLCJmZXRjaGVkIiwibGFuZGVkIiwiZGVsZXRlZEVudHJpZXMiLCJwcm9taXNlcyIsIm1hcCIsInJlY29yZCIsInB1c2giLCJhbGwiLCJpbmRleCIsInVwZGF0ZUxvY2FsSXRlbXMiLCJyZW1vdGVMb2FkIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsIm9uTGluZSIsIlNldCIsImFjdGl2ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsInJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJkYXRhYmFzZSIsIkRCTWFuYWdlciIsIm9yZGVyQnkiLCJ3aGVyZSIsIm9mZnNldCIsImtleXMiLCJrZXkiLCJpbmNsdWRlcyIsImNvbGxlY3Rpb24iLCJsZW5ndGgiLCJpIiwiaXNEZWxldGVkIiwidG9BcnJheSIsImNhbGxiYWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmRpdGlvbnMiLCJjb250cm9scyIsImNvbmRpdGlvbiIsImNvdW50IiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwiZmlyc3QiLCJsaXZlIiwiY3VycmVudFBhZ2UiLCJzdWJzY3JpYmUiLCJzYW1lUXVlcnkiLCJzb3J0IiwiYSIsImIiLCJjdXJyZW50TWFwIiwiYWRkIiwiaGFzIiwiZXJyIiwicHJvY2VzcyIsIm9mZmxpbmUiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiaW5zdGFuY2VJZCIsInNhdmVBbGwiLCJyZWdpc3RyeSIsIlJlZ2lzdHJ5IiwiZGVsZXRlZCIsInNldFZhbHVlcyIsImNodW5rcyIsImJhdGNoIiwic3BsaWNlIiwiZ2V0VmFsdWVzIiwiYnVsa1B1dCIsInJlc3VsdHMiLCJhbGxTZXR0bGVkIiwibWFwcGVkRm4iLCJyZXN1bHQiLCJmYWlsZWQiLCJjb250cm9sIiwidXBzZXJ0Iiwib3JpZ2luYWxEYXRhIiwidHJhbnNhY3Rpb24iLCJpbnN0YW5jZUlkVG9JZE1hcCIsInJlY29yZHMiLCJidWxrR2V0IiwiZXhpc3RpbmdSZWNvcmRzIiwidW5kZWZpbmVkIiwiaXRlbXNUb1VwZGF0ZSIsIk1BWF9SRVRSSUVTIiwiQ0hVTktfU0laRSIsIndhcm4iLCJidWxrU2F2ZSIsInNlbmRDaHVuayIsImNodW5rIiwic3VjY2VzcyIsInNwbGl0RGF0YUludG9DaHVua3MiLCJzbGljZSIsImVxdWFscyIsImZhaWxlZENodW5rcyIsInN1Y2Nlc3NDaHVua3MiLCJVc2VyUHJvdmlkZXIiLCJCb29rcyIsIkJvb2siLCJJdGVtIiwibG9jYWxGaWVsZHMiLCJ1bmlxdWUiLCJza2VsZXRvbiIsIl9fZ2V0IiwiaXNSZWFkeSIsImNoZWNrUmVhZHkiLCJjb25maWciLCJMb2NhbFByb3ZpZGVyIiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwiYmluZCIsImluaXRpYWxpc2UiLCJvYmplY3RSZWFkeSIsIm9uUmVhZHkiLCJ4IiwiaGFzT3duUHJvcGVydHkiLCJuYW1lIiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwiZm9yY2VTeW5jIiwibG9hZExvY2FsbHkiLCJmb3VuZCIsInVwZGF0ZUxvY2FsbHkiLCJzYW1lIiwib3JpZ2luYWwiLCJsb2FkTWV0aG9kIiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwiZGVlcENvbXBhcmUiLCJvYmoxIiwib2JqMiIsImtleXMxIiwia2V5czIiLCJ2YWwxIiwidmFsMiIsImFyZU9iamVjdHMiLCJpc09iamVjdCIsIm9iamVjdCIsInRvQ29tcGFyZSIsImFyZUVxdWFsIiwiaXNOZXciLCJjcmVhdGUiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsInVwZGF0ZWQiLCJwdXQiLCJsb2NhbFVwZGF0ZSIsImlzVW5wdWJsaXNoZWQiLCJwcm9wcyIsIkNvbGxlY3Rpb25Qcm92aWRlciIsIkl0ZW1Qcm92aWRlciIsImRiTmFtZSIsInJlZ2lzdGVyTGlzdCIsInJlZ2lzdHJpZXMiLCJoYXNJdGVtIiwibmV3VmFsdWVzIiwiaXNEZWxlbGV0ZWQiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImFkYXB0ZXIvZGVmYXVsdC50cyIsImFkYXB0ZXIvaW5kZXgudHMiLCJhZGFwdGVyL2ludGVyZmFjZS50cyIsImFkYXB0ZXIvbGVnYWN5LnRzIiwiY2FjaGUvaW5kZXgudHMiLCJjb2xsZWN0aW9uL2luZGV4LnRzIiwiY29sbGVjdGlvbi9pbnRlcmZhY2VzL0lDb2xsZWN0aW9uLnRzIiwiY29sbGVjdGlvbi9sb2FkLnRzIiwiY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci50cyIsImNvbGxlY3Rpb24vcHVibGlzaC50cyIsImV4YW1wbGUvY29sbGVjdGlvbi50cyIsImV4YW1wbGUvaW5kZXgudHMiLCJpbnRlcmZhY2VzL3Byb3ZpZGVyLnRzIiwiaXRlbS9pbmRleC50cyIsIml0ZW0vaW50ZXJmYWNlcy9jb25maWcudHMiLCJpdGVtL2ludGVyZmFjZXMvaXRlbS50cyIsIml0ZW0vbG9hZC50cyIsIml0ZW0vbG9jYWwtcHJvdmlkZXIudHMiLCJpdGVtL3NhdmUudHMiLCJwcm92aWRlcnMvY29sbGVjdGlvbi50cyIsInByb3ZpZGVycy9pdGVtLnRzIiwicmVnaXN0cnkvZmFjdG9yeS50cyIsInJlZ2lzdHJ5L2luZGV4LnRzIiwicmVnaXN0cnkvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19