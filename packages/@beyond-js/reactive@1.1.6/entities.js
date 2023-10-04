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
        hash: 4035497457,
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
                let collection = store.where(specs);
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
        hash: 931518359,
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
              // registry.on('change', () => {
              // 	this.#parent.set(data);
              // });
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
        hash: 344917038,
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
              // console.log('updating', this.#values);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiaXRlbXMiLCJsb2NhbGRiIiwiZWxlbWVudHMiLCJNYXAiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJzZXQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwibGlzdGVuSXRlbXMiLCIjbGlzdGVuSXRlbXMiLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJ2YWx1ZXMiLCJzdG9yZSIsImZvckVhY2giLCJpZCIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsIl9mYWN0b3J5IiwicGFyZW50QnJpZGdlIiwicmVnaXN0cnkiLCJyZW1vdGVEYXRhIiwiUmVnaXN0cnlGYWN0b3J5IiwiY3VzdG9tRmlsdGVyIiwicGFyYW1zIiwibG9jYWxEYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsImxvYWRlZCIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJleGMiLCJmZXRjaGVkIiwibGFuZGVkIiwiZGVsZXRlZEVudHJpZXMiLCJwcm9taXNlcyIsIm1hcCIsInJlY29yZCIsInB1c2giLCJhbGwiLCJpbmRleCIsInJlZ2lzdGVyTGlzdCIsInJlbW90ZUxvYWQiLCJfZGV4aWUiLCJfY29yZSIsIl9kYXRhYmFzZSIsIl9yZWdpc3RyeSIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJiYXRjaGVzIiwiYWN0aXZlIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwibGlzdEl0ZW1zIiwicmVnaXN0cnlGYWN0b3J5IiwiZXhpc3RzIiwiZm91bmQiLCJTZXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXBwbHkiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsInByb21pc2VJbml0IiwicmVhZHkiLCJQZW5kaW5nUHJvbWlzZSIsIkRCTWFuYWdlciIsImlzVW5wdWJsaXNoZWQiLCIjaXNVbnB1Ymxpc2hlZCIsInByb21pc2VMb2FkIiwiY3VzdG9tV2hlcmUiLCJkZWZhdWx0V2hlcmUiLCJvcmRlckJ5IiwiY3VycmVudExpbWl0IiwiY3VycmVudE9mZnNldCIsIndoZXJlIiwib2Zmc2V0Iiwia2V5cyIsImtleSIsImluY2x1ZGVzIiwiY29sbGVjdGlvbiIsImkiLCJpc0RlbGV0ZWQiLCJ0b0FycmF5IiwiY2FsbGJhY2siLCJjYW50aWRhZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25kaXRpb25zIiwiY29udHJvbHMiLCJjb25kaXRpb24iLCJwcm9jZXNzQ29udHJvbCIsImNvdW50IiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwiZmlyc3QiLCJsaXZlIiwibGl2ZVF1ZXJ5IiwiY3VycmVudFBhZ2UiLCJzdWJzY3JpYmUiLCJzYW1lUXVlcnkiLCJzb3J0IiwiYSIsImIiLCJsZW5ndGgiLCJjdXJyZW50TWFwIiwiYWRkIiwicmVtb3ZlZCIsImhhcyIsImVyciIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiaW5zdGFuY2VJZCIsInNhdmVBbGwiLCJSZWdpc3RyeSIsImRlbGV0ZWQiLCJzZXRWYWx1ZXMiLCJjaHVua3MiLCJiYXRjaCIsInNwbGljZSIsImdldFZhbHVlcyIsImJ1bGtQdXQiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiI3Byb2Nlc3NDb250cm9sIiwiY29udHJvbCIsInVwc2VydCIsIm9yaWdpbmFsRGF0YSIsInRyYW5zYWN0aW9uIiwiaW5zdGFuY2VJZFRvSWRNYXAiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsIml0ZW1zVG9VcGRhdGUiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJ3YXJuIiwiYnVsa1NhdmUiLCJzZW5kQ2h1bmsiLCJjaHVuayIsInN1Y2Nlc3MiLCJzcGxpdERhdGFJbnRvQ2h1bmtzIiwic2xpY2UiLCJlcXVhbHMiLCJmYWlsZWRDaHVua3MiLCJzdWNjZXNzQ2h1bmtzIiwiX2NvbGxlY3Rpb24iLCJfaW5kZXgiLCJVc2VyUHJvdmlkZXIiLCJCb29rcyIsIkJvb2siLCJJdGVtIiwiX3NhdmUiLCJpbmZvIiwiaWdub3JlZEZpZWxkcyIsInNrZWxldG9uIiwidW5pcXVlIiwiX19nZXQiLCJpc1JlYWR5IiwiY2hlY2tSZWFkeSIsIm9iamVjdFJlYWR5IiwicHJvbWlzZVJlYWR5IiwiaW5pdFByb21pc2UiLCJjb25maWciLCJMb2NhbFByb3ZpZGVyIiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwiYmluZCIsImluaXRpYWxpc2UiLCJvblJlYWR5IiwiaGFzT3duUHJvcGVydHkiLCJuYW1lIiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwic2FtZSIsIm9yaWdpbmFsIiwibG9hZE1ldGhvZCIsImlzTmV3IiwiZmFjdG9yeVJlZ2lzdHJ5IiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwiZ2V0UmVnaXN0cnkiLCJkZWVwQ29tcGFyZSIsIm9iajEiLCJvYmoyIiwia2V5czEiLCJrZXlzMiIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsImlzT2JqZWN0Iiwib2JqZWN0IiwidG9Db21wYXJlIiwiYXJlRXF1YWwiLCJjcmVhdGUiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsIiN1cGRhdGUiLCJ1cGRhdGVkIiwicHV0IiwibG9jYWxVcGRhdGUiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJwcm9wcyIsIkl0ZW1Qcm92aWRlciIsInN0b3JlcyIsImRiTmFtZSIsInJlZ2lzdHJpZXMiLCJoYXNJdGVtIiwiZ2V0U3RvcmUiLCIjZ2V0U3RvcmUiLCJkYnMiLCJfdXVpZCIsImtleUlkIiwidjQiLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VzIjpbIi9hZGFwdGVyL2RlZmF1bHQudHMiLCIvYWRhcHRlci9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvYWRhcHRlci9sZWdhY3kudHMiLCIvY2FjaGUvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9JQ29sbGVjdGlvbi50cyIsIi9jb2xsZWN0aW9uL2xvYWQudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci50cyIsIi9jb2xsZWN0aW9uL3B1Ymxpc2gudHMiLCIvZXhhbXBsZS9jb2xsZWN0aW9uLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU0sTUFBT0EsY0FBYztZQUMxQkMsUUFBUUEsQ0FBQ0MsSUFBUztjQUNqQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFHLFVBQVVBLENBQUNILElBQVM7Y0FDbkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBSSxjQUFjQSxD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