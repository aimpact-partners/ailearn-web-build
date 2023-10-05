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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiaXRlbXMiLCJsb2NhbGRiIiwiZWxlbWVudHMiLCJNYXAiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJzZXQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwibGlzdGVuSXRlbXMiLCIjbGlzdGVuSXRlbXMiLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJ2YWx1ZXMiLCJzdG9yZSIsImZvckVhY2giLCJpZCIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsIl9mYWN0b3J5IiwicGFyZW50QnJpZGdlIiwicmVnaXN0cnkiLCJyZW1vdGVEYXRhIiwiUmVnaXN0cnlGYWN0b3J5IiwiY3VzdG9tRmlsdGVyIiwicGFyYW1zIiwibG9jYWxEYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsImxvYWRlZCIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwibGlzdCIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwiZXhjIiwiZmV0Y2hlZCIsImxhbmRlZCIsImRlbGV0ZWRFbnRyaWVzIiwicHJvbWlzZXMiLCJtYXAiLCJyZWNvcmQiLCJwdXNoIiwiYWxsIiwiaW5kZXgiLCJyZW1vdGVMb2FkIiwiX2RleGllIiwiX2NvcmUiLCJfZGF0YWJhc2UiLCJfcmVnaXN0cnkiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwiYmF0Y2hlcyIsImFjdGl2ZSIsIm9mZmxpbmUiLCJkYXRhYmFzZSIsImRhdGFiYXNlTmFtZSIsImxpc3RJdGVtcyIsInJlZ2lzdHJ5RmFjdG9yeSIsImV4aXN0cyIsImZvdW5kIiwiU2V0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFwcGx5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJwcm9taXNlSW5pdCIsInJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJEQk1hbmFnZXIiLCJpc1VucHVibGlzaGVkIiwiI2lzVW5wdWJsaXNoZWQiLCJwcm9taXNlTG9hZCIsImN1c3RvbVdoZXJlIiwiZGVmYXVsdFdoZXJlIiwib3JkZXJCeSIsImN1cnJlbnRMaW1pdCIsImN1cnJlbnRPZmZzZXQiLCJ3aGVyZSIsIm9mZnNldCIsImtleXMiLCJrZXkiLCJpbmNsdWRlcyIsImNvbGxlY3Rpb24iLCJsZW5ndGgiLCJpIiwiaXNEZWxldGVkIiwidG9BcnJheSIsImNhbGxiYWNrIiwiY2FudGlkYWQiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uZGl0aW9ucyIsImNvbnRyb2xzIiwiY29uZGl0aW9uIiwicHJvY2Vzc0NvbnRyb2wiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImZpcnN0IiwibGl2ZSIsImxpdmVRdWVyeSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwic2FtZVF1ZXJ5Iiwic29ydCIsImEiLCJiIiwiY3VycmVudE1hcCIsImFkZCIsInJlbW92ZWQiLCJoYXMiLCJlcnIiLCJwcm9jZXNzIiwiZ2V0UHJvcGVydGllcyIsInRvU2F2ZSIsImluc3RhbmNlSWQiLCJzYXZlQWxsIiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJidWxrUHV0IiwicmVzdWx0cyIsImFsbFNldHRsZWQiLCJtYXBwZWRGbiIsInJlc3VsdCIsImZhaWxlZCIsIiNwcm9jZXNzQ29udHJvbCIsImNvbnRyb2wiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwicmVjb3JkcyIsImJ1bGtHZXQiLCJleGlzdGluZ1JlY29yZHMiLCJ1bmRlZmluZWQiLCJpdGVtc1RvVXBkYXRlIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIl9jb2xsZWN0aW9uIiwiX2luZGV4IiwiVXNlclByb3ZpZGVyIiwiQm9va3MiLCJCb29rIiwiSXRlbSIsIl9zYXZlIiwiaW5mbyIsImlnbm9yZWRGaWVsZHMiLCJza2VsZXRvbiIsInVuaXF1ZSIsIl9fZ2V0IiwiaXNSZWFkeSIsImNoZWNrUmVhZHkiLCJvYmplY3RSZWFkeSIsInByb21pc2VSZWFkeSIsImluaXRQcm9taXNlIiwiY29uZmlnIiwiTG9jYWxQcm92aWRlciIsIkl0ZW1TYXZlTWFuYWdlciIsIkl0ZW1Mb2FkTWFuYWdlciIsImJpbmQiLCJpbml0aWFsaXNlIiwib25SZWFkeSIsImhhc093blByb3BlcnR5IiwibmFtZSIsInRvSXRlcmF0ZSIsImZpZWxkIiwiZ2V0UHJvcGVydHlOYW1lcyIsInNhbWUiLCJvcmlnaW5hbCIsImxvYWRNZXRob2QiLCJpc05ldyIsImZhY3RvcnlSZWdpc3RyeSIsIl9faWQiLCJmbG9vciIsInJhbmRvbSIsImdldFJlZ2lzdHJ5IiwiZGVlcENvbXBhcmUiLCJvYmoxIiwib2JqMiIsImtleXMxIiwia2V5czIiLCJ2YWwxIiwidmFsMiIsImFyZU9iamVjdHMiLCJpc09iamVjdCIsIm9iamVjdCIsInRvQ29tcGFyZSIsImFyZUVxdWFsIiwibGlzdGVuUmVnaXN0cnkiLCJjcmVhdGUiLCIjbGlzdGVuUmVnaXN0cnkiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsIiN1cGRhdGUiLCJ1cGRhdGVkIiwicHV0IiwibG9jYWxVcGRhdGUiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJwcm9wcyIsIkl0ZW1Qcm92aWRlciIsInN0b3JlcyIsImRiTmFtZSIsInJlZ2lzdGVyTGlzdCIsInJlZ2lzdHJpZXMiLCJoYXNJdGVtIiwiZ2V0U3RvcmUiLCIjZ2V0U3RvcmUiLCJkYnMiLCJfdXVpZCIsImtleUlkIiwidjQiLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VzIjpbIi9hZGFwdGVyL2RlZmF1bHQudHMiLCIvYWRhcHRlci9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvYWRhcHRlci9sZWdhY3kudHMiLCIvY2FjaGUvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9JQ29sbGVjdGlvbi50cyIsIi9jb2xsZWN0aW9uL2xvYWQudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci50cyIsIi9jb2xsZWN0aW9uL3B1Ymxpc2gudHMiLCIvZXhhbXBsZS9jb2xsZWN0aW9uLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU0sTUFBT0EsY0FBYztZQUMxQkMsUUFBUUEsQ0FBQ0MsSUFBUztjQUNqQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFHLFVBQVVBLENBQUNILElBQVM7Y0FDbkIsT0FBT0Ms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