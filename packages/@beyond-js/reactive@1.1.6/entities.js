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
        hash: 686992775,
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
              //	this.#registry.registerList(this.#parentBridge.get('storeName'), entries);
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
        hash: 3753296965,
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
                      // console.log(item.id, '\n', item.content);
                    });
                    if (params.sortBy) {
                      items.sort((a, b) => {
                        return a[params.sortBy] - b[params.sortBy];
                      });
                    }
                    if (!globalThis.data) globalThis.data = [];
                    globalThis.data.push([...items]);
                    if (currentPage == this.#page) {
                      sameQuery = true;
                    } else {
                      currentPage = this.#page;
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
        hash: 4252256635,
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
        hash: 682187477,
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
        hash: 3799673172,
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
              // console.trace('updating', this.#values);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDLE9BQU8sR0FBRytILFNBQVM7Y0FDeEI7Y0FDQSxJQUFJLENBQUNsTyxZQUFZLEVBQUU7Y0FFbkIsT0FBT3VOLE9BQU87WUFDZixDQUFDO1lBRUQ5RSxTQUFTO2NBQ1IsTUFBTTdHLE1BQU0sR0FBRztnQkFBRSxHQUFHLElBQUksQ0FBQztjQUFPLENBQUU7Y0FDbEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFQSxNQUFNLENBQUNvRyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVc7Y0FDMUQ7Y0FDQSxPQUFPcEcsTUFBTTtZQUNkOztVQUNBdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkZEO1VBR00sTUFBbUIrUCxZQUFhLFNBQVE5TyxvQkFBNEI7VUFBR2pCO1VBRTdFLE1BQU1nUSxZQUFZLEdBQUcsSUFBSUQsWUFBWSxFQUFFIiwibmFtZXMiOlsiRGVmYXVsdEFkYXB0ZXIiLCJ0b0NsaWVudCIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsImZyb21SZW1vdGUiLCJmcm9tUmVtb3RlTGlzdCIsImV4cG9ydHMiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwidmFsdWUiLCJjb25zdHJ1Y3RvciIsImVycm9yIiwic3RhdHVzIiwibWVzc2FnZSIsInJlc3BvbnNlIiwiQ2FjaGVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsIkNvbGxlY3Rpb24iLCJsb2NhbGRiIiwiTWFwIiwiZWxlbWVudHMiLCJpdGVtcyIsImlzT25saW5lIiwibG9jYWxQcm92aWRlciIsIkFycmF5IiwiaXNBcnJheSIsInRyaWdnZXJFdmVudCIsImNvdW50ZXJzIiwidG90YWwiLCJuZXh0IiwicHJvdmlkZXIiLCJzb3J0QnkiLCJzb3J0RGlyZWN0aW9uIiwicmVzcG9uc2VBZGFwdGVyIiwic3BlY3MiLCJzdG9yZU5hbWUiLCJkYiIsIml0ZW0iLCJFcnJvciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwic2V0IiwiQ29sbGVjdGlvbkxvY2FsUHJvdmlkZXIiLCJDb2xsZWN0aW9uU2F2ZU1hbmFnZXIiLCJDb2xsZWN0aW9uTG9hZE1hbmFnZXIiLCJvbiIsInByb2Nlc3NFbnRyaWVzIiwidHJpZ2dlciIsInNldE9mZmxpbmUiLCJzZXRJdGVtcyIsInZhbHVlcyIsInN0b3JlIiwiZm9yRWFjaCIsImlkIiwiZGVsZXRlIiwiaWRzIiwic29mdERlbGV0ZSIsImRlbGV0ZUl0ZW1zIiwiZSIsImNvbnNvbGUiLCJsb2FkIiwiYXJncyIsImxvY2FsTG9hZCIsImZpbHRlciIsInNhdmUiLCJzeW5jIiwicHVibGlzaCIsInRvU3luYyIsInNldEVudHJpZXMiLCJlbnRyaWVzIiwicmVtb3RlRGF0YSIsInBhcmVudEJyaWRnZSIsIlJlZ2lzdHJ5RmFjdG9yeSIsImN1c3RvbUZpbHRlciIsInBhcmFtcyIsImxvY2FsRGF0YSIsIm5ld0l0ZW1zIiwidXBkYXRlIiwiY29uY2F0IiwicHJvcGVydGllcyIsImxvY2FsTG9hZGVkIiwiZmV0Y2hpbmciLCJsb2FkZWQiLCJzdGFydCIsImxpbWl0IiwibG9jYWxSZXNwb25zZSIsImxpc3QiLCJwcm9jZXNzUmVtb3RlRW50cmllcyIsImV4YyIsImZldGNoZWQiLCJsYW5kZWQiLCJkZWxldGVkRW50cmllcyIsInByb21pc2VzIiwibWFwIiwicmVjb3JkIiwicHVzaCIsImFsbCIsImluZGV4IiwicmVtb3RlTG9hZCIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJhY3RpdmUiLCJTZXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJyZWFkeSIsIlBlbmRpbmdQcm9taXNlIiwiZGF0YWJhc2UiLCJEQk1hbmFnZXIiLCJvcmRlckJ5Iiwid2hlcmUiLCJvZmZzZXQiLCJrZXlzIiwia2V5IiwiaW5jbHVkZXMiLCJjb2xsZWN0aW9uIiwibGVuZ3RoIiwiaSIsImlzRGVsZXRlZCIsInRvQXJyYXkiLCJjYWxsYmFjayIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25kaXRpb25zIiwiY29udHJvbHMiLCJjb25kaXRpb24iLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImZpcnN0IiwibGl2ZSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwic2FtZVF1ZXJ5Iiwic29ydCIsImEiLCJiIiwiY3VycmVudE1hcCIsImFkZCIsInJlbW92ZWQiLCJoYXMiLCJlcnIiLCJwcm9jZXNzIiwib2ZmbGluZSIsImdldFByb3BlcnRpZXMiLCJ0b1NhdmUiLCJpbnN0YW5jZUlkIiwic2F2ZUFsbCIsInJlZ2lzdHJ5IiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJidWxrUHV0IiwicmVzdWx0cyIsImFsbFNldHRsZWQiLCJtYXBwZWRGbiIsInJlc3VsdCIsImZhaWxlZCIsImNvbnRyb2wiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwicmVjb3JkcyIsImJ1bGtHZXQiLCJleGlzdGluZ1JlY29yZHMiLCJ1bmRlZmluZWQiLCJpdGVtc1RvVXBkYXRlIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIlVzZXJQcm92aWRlciIsIkJvb2tzIiwiQm9vayIsIkl0ZW0iLCJ1bmlxdWUiLCJza2VsZXRvbiIsIl9fZ2V0IiwiaXNSZWFkeSIsImNoZWNrUmVhZHkiLCJjb25maWciLCJMb2NhbFByb3ZpZGVyIiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwiYmluZCIsImluaXRpYWxpc2UiLCJvYmplY3RSZWFkeSIsIm9uUmVhZHkiLCJoYXNPd25Qcm9wZXJ0eSIsIm5hbWUiLCJ0b0l0ZXJhdGUiLCJmaWVsZCIsImdldFByb3BlcnR5TmFtZXMiLCJmb3VuZCIsInNhbWUiLCJvcmlnaW5hbCIsImxvYWRNZXRob2QiLCJfX2lkIiwiZmxvb3IiLCJyYW5kb20iLCJkZWVwQ29tcGFyZSIsIm9iajEiLCJvYmoyIiwia2V5czEiLCJrZXlzMiIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsImlzT2JqZWN0Iiwib2JqZWN0IiwidG9Db21wYXJlIiwiYXJlRXF1YWwiLCJpc05ldyIsImNyZWF0ZSIsImR1cGxpY2F0ZWQiLCJ2YWxpZGF0ZVVuaXF1ZUZpZWxkcyIsImZpZWxkcyIsImNoZWNrUHJvbWlzZXMiLCJ0aGVuIiwiZHVwbGljYXRlRmllbGRzIiwidXBkYXRlZCIsInB1dCIsImxvY2FsVXBkYXRlIiwiaXNVbnB1Ymxpc2hlZCIsIkNvbGxlY3Rpb25Qcm92aWRlciIsInByb3BzIiwiSXRlbVByb3ZpZGVyIiwiZGJOYW1lIiwicmVnaXN0ZXJMaXN0IiwicmVnaXN0cmllcyIsImhhc0l0ZW0iLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYWRhcHRlci9kZWZhdWx0LnRzIiwiYWRhcHRlci9pbmRleC50cyIsImFkYXB0ZXIvaW50ZXJmYWNlLnRzIiwiYWRhcHRlci9sZWdhY3kudHMiLCJjYWNoZS9pbmRleC50cyIsImNvbGxlY3Rpb24vaW5kZXgudHMiLCJjb2xsZWN0aW9uL2ludGVyZmFjZXMvSUNvbGxlY3Rpb24udHMiLCJjb2xsZWN0aW9uL2xvYWQudHMiLCJjb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyLnRzIiwiY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiZXhhbXBsZS9jb2xsZWN0aW9uLnRzIiwiZXhhbXBsZS9pbmRleC50cyIsImludGVyZmFjZXMvcHJvdmlkZXIudHMiLCJpdGVtL2luZGV4LnRzIiwiaXRlbS9pbnRlcmZhY2VzL2NvbmZpZy50cyIsIml0ZW0vaW50ZXJmYWNlcy9pdGVtLnRzIiwiaXRlbS9sb2FkLnRzIiwiaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIml0ZW0vc2F2ZS50cyIsInByb3ZpZGVycy9jb2xsZWN0aW9uLnRzIiwicHJvdmlkZXJzL2l0ZW0udHMiLCJyZWdpc3RyeS9mYWN0b3J5LnRzIiwicmVnaXN0cnkvaW5kZXgudHMiLCJyZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=