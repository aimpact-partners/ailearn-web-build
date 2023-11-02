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
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.6"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
        hash: 2593884129,
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
        hash: 2704890289,
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
        hash: 752181178,
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
        hash: 1435913936,
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
        hash: 3878292777,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtQmtRLFlBQWEsU0FBUWpQLG9CQUE0QjtVQUFHakI7VUFFN0UsTUFBTW1RLFlBQVksR0FBRyxJQUFJRCxZQUFZLEVBQUUiLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIlJlc3BvbnNlQWRhcHRlciIsImdldCIsInBhcmVudCIsImFkYXB0ZXJzIiwiUmVhY3RpdmVDb25maWciLCJhZGFwdGVyIiwiQWRhcHRlciIsIkxlZ2FjeUFkYXB0ZXIiLCJPYmplY3QiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiQ29sbGVjdGlvbiIsImxvY2FsZGIiLCJNYXAiLCJlbGVtZW50cyIsIml0ZW1zIiwiaXNPbmxpbmUiLCJsb2NhbFByb3ZpZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwidHJpZ2dlckV2ZW50IiwiY291bnRlcnMiLCJ0b3RhbCIsIm5leHQiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJzcGVjcyIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJzZXQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwicHJvY2Vzc0VudHJpZXMiLCJ0cmlnZ2VyIiwic2V0T2ZmbGluZSIsInNldEl0ZW1zIiwidmFsdWVzIiwic3RvcmUiLCJmb3JFYWNoIiwiaWQiLCJkZWxldGUiLCJpZHMiLCJzb2Z0RGVsZXRlIiwiZGVsZXRlSXRlbXMiLCJlIiwiY29uc29sZSIsImxvYWQiLCJhcmdzIiwibG9jYWxMb2FkIiwiZmlsdGVyIiwic2F2ZSIsInN5bmMiLCJwdWJsaXNoIiwidG9TeW5jIiwic2V0RW50cmllcyIsImVudHJpZXMiLCJyZW1vdGVEYXRhIiwicGFyZW50QnJpZGdlIiwiUmVnaXN0cnlGYWN0b3J5IiwiY3VzdG9tRmlsdGVyIiwicGFyYW1zIiwibG9jYWxEYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsImxvYWRlZCIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwibGlzdCIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwiZXhjIiwiZmV0Y2hlZCIsImxhbmRlZCIsImRlbGV0ZWRFbnRyaWVzIiwicHJvbWlzZXMiLCJtYXAiLCJyZWNvcmQiLCJwdXNoIiwiYWxsIiwiaW5kZXgiLCJ1cGRhdGVMb2NhbEl0ZW1zIiwicmVtb3RlTG9hZCIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJTZXQiLCJhY3RpdmUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJyZWFkeSIsIlBlbmRpbmdQcm9taXNlIiwiZGF0YWJhc2UiLCJEQk1hbmFnZXIiLCJvcmRlckJ5Iiwid2hlcmUiLCJvZmZzZXQiLCJrZXlzIiwia2V5IiwiaW5jbHVkZXMiLCJjb2xsZWN0aW9uIiwibGVuZ3RoIiwiaSIsImlzRGVsZXRlZCIsInRvQXJyYXkiLCJjYWxsYmFjayIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25kaXRpb25zIiwiY29udHJvbHMiLCJjb25kaXRpb24iLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImZpcnN0IiwibGl2ZSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwic2FtZVF1ZXJ5Iiwic29ydCIsImEiLCJiIiwiY3VycmVudE1hcCIsImFkZCIsImhhcyIsImVyciIsInByb2Nlc3MiLCJvZmZsaW5lIiwiZ2V0UHJvcGVydGllcyIsInRvU2F2ZSIsImluc3RhbmNlSWQiLCJzYXZlQWxsIiwicmVnaXN0cnkiLCJSZWdpc3RyeSIsImRlbGV0ZWQiLCJzZXRWYWx1ZXMiLCJjaHVua3MiLCJiYXRjaCIsInNwbGljZSIsImdldFZhbHVlcyIsImJ1bGtQdXQiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiY29udHJvbCIsInVwc2VydCIsIm9yaWdpbmFsRGF0YSIsInRyYW5zYWN0aW9uIiwiaW5zdGFuY2VJZFRvSWRNYXAiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsIml0ZW1zVG9VcGRhdGUiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJ3YXJuIiwiYnVsa1NhdmUiLCJzZW5kQ2h1bmsiLCJjaHVuayIsInN1Y2Nlc3MiLCJzcGxpdERhdGFJbnRvQ2h1bmtzIiwic2xpY2UiLCJlcXVhbHMiLCJmYWlsZWRDaHVua3MiLCJzdWNjZXNzQ2h1bmtzIiwiVXNlclByb3ZpZGVyIiwiQm9va3MiLCJCb29rIiwiSXRlbSIsImxvY2FsRmllbGRzIiwidW5pcXVlIiwic2tlbGV0b24iLCJfX2dldCIsImlzUmVhZHkiLCJjaGVja1JlYWR5IiwiY29uZmlnIiwiTG9jYWxQcm92aWRlciIsIkl0ZW1TYXZlTWFuYWdlciIsIkl0ZW1Mb2FkTWFuYWdlciIsImJpbmQiLCJpbml0aWFsaXNlIiwib2JqZWN0UmVhZHkiLCJvblJlYWR5IiwieCIsImhhc093blByb3BlcnR5IiwibmFtZSIsInRvSXRlcmF0ZSIsImZpZWxkIiwiZ2V0UHJvcGVydHlOYW1lcyIsImZvcmNlU3luYyIsImZvdW5kIiwic2FtZSIsIm9yaWdpbmFsIiwibG9hZE1ldGhvZCIsIl9faWQiLCJmbG9vciIsInJhbmRvbSIsImRlZXBDb21wYXJlIiwib2JqMSIsIm9iajIiLCJrZXlzMSIsImtleXMyIiwidmFsMSIsInZhbDIiLCJhcmVPYmplY3RzIiwiaXNPYmplY3QiLCJvYmplY3QiLCJ0b0NvbXBhcmUiLCJhcmVFcXVhbCIsImlzTmV3IiwiY3JlYXRlIiwiZHVwbGljYXRlZCIsInZhbGlkYXRlVW5pcXVlRmllbGRzIiwiZmllbGRzIiwiY2hlY2tQcm9taXNlcyIsInRoZW4iLCJkdXBsaWNhdGVGaWVsZHMiLCJ1cGRhdGVkIiwicHV0IiwibG9jYWxVcGRhdGUiLCJpc1VucHVibGlzaGVkIiwicHJvcHMiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJJdGVtUHJvdmlkZXIiLCJkYk5hbWUiLCJyZWdpc3Rlckxpc3QiLCJyZWdpc3RyaWVzIiwiaGFzSXRlbSIsIm5ld1ZhbHVlcyIsImlzRGVsZWxldGVkIiwiU3RvcmVSZWNvcmRzIiwic3RvcmVGYWN0b3J5Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhZGFwdGVyL2RlZmF1bHQudHMiLCJhZGFwdGVyL2luZGV4LnRzIiwiYWRhcHRlci9pbnRlcmZhY2UudHMiLCJhZGFwdGVyL2xlZ2FjeS50cyIsImNhY2hlL2luZGV4LnRzIiwiY29sbGVjdGlvbi9pbmRleC50cyIsImNvbGxlY3Rpb24vaW50ZXJmYWNlcy9JQ29sbGVjdGlvbi50cyIsImNvbGxlY3Rpb24vbG9hZC50cyIsImNvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIudHMiLCJjb2xsZWN0aW9uL3B1Ymxpc2gudHMiLCJleGFtcGxlL2NvbGxlY3Rpb24udHMiLCJleGFtcGxlL2luZGV4LnRzIiwiaW50ZXJmYWNlcy9wcm92aWRlci50cyIsIml0ZW0vaW5kZXgudHMiLCJpdGVtL2ludGVyZmFjZXMvY29uZmlnLnRzIiwiaXRlbS9pbnRlcmZhY2VzL2l0ZW0udHMiLCJpdGVtL2xvYWQudHMiLCJpdGVtL2xvY2FsLXByb3ZpZGVyLnRzIiwiaXRlbS9zYXZlLnRzIiwicHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCJwcm92aWRlcnMvaXRlbS50cyIsInJlZ2lzdHJ5L2ZhY3RvcnkudHMiLCJyZWdpc3RyeS9pbmRleC50cyIsInJlZ2lzdHJ5L3N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==