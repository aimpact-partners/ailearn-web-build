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
        hash: 3704676711,
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
                    globalThis.data.push([...items]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiaXRlbXMiLCJsb2NhbGRiIiwiZWxlbWVudHMiLCJNYXAiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJzZXQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwibGlzdGVuSXRlbXMiLCIjbGlzdGVuSXRlbXMiLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJ2YWx1ZXMiLCJzdG9yZSIsImZvckVhY2giLCJpZCIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsIl9mYWN0b3J5IiwicGFyZW50QnJpZGdlIiwicmVnaXN0cnkiLCJyZW1vdGVEYXRhIiwiUmVnaXN0cnlGYWN0b3J5IiwiY3VzdG9tRmlsdGVyIiwicGFyYW1zIiwibG9jYWxEYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsImxvYWRlZCIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwibGlzdCIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwiZXhjIiwiZmV0Y2hlZCIsImxhbmRlZCIsImRlbGV0ZWRFbnRyaWVzIiwicHJvbWlzZXMiLCJtYXAiLCJyZWNvcmQiLCJwdXNoIiwiYWxsIiwiaW5kZXgiLCJ1cGRhdGVMb2NhbEl0ZW1zIiwicmVtb3RlTG9hZCIsIl9kZXhpZSIsIl9jb3JlIiwiX2RhdGFiYXNlIiwiX3JlZ2lzdHJ5IiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsIm9uTGluZSIsImJhdGNoZXMiLCJvZmZsaW5lIiwiZGF0YWJhc2UiLCJkYXRhYmFzZU5hbWUiLCJsaXN0SXRlbXMiLCJleGlzdHMiLCJmb3VuZCIsIlNldCIsInJlZ2lzdHJ5RmFjdG9yeSIsImFwcGx5IiwiYWN0aXZlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDb25uZWN0aW9uIiwicHJvbWlzZUluaXQiLCJyZWFkeSIsIlBlbmRpbmdQcm9taXNlIiwiREJNYW5hZ2VyIiwiaXNVbnB1Ymxpc2hlZCIsIiNpc1VucHVibGlzaGVkIiwicHJvbWlzZUxvYWQiLCJjdXN0b21XaGVyZSIsImRlZmF1bHRXaGVyZSIsIm9yZGVyQnkiLCJjdXJyZW50TGltaXQiLCJjdXJyZW50T2Zmc2V0Iiwid2hlcmUiLCJvZmZzZXQiLCJrZXlzIiwia2V5IiwiaW5jbHVkZXMiLCJjb2xsZWN0aW9uIiwibGVuZ3RoIiwiaSIsImlzRGVsZXRlZCIsInRvQXJyYXkiLCJjYWxsYmFjayIsImNhbnRpZGFkIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmRpdGlvbnMiLCJjb250cm9scyIsImNvbmRpdGlvbiIsInByb2Nlc3NDb250cm9sIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJmaXJzdCIsImxpdmUiLCJsaXZlUXVlcnkiLCJjdXJyZW50UGFnZSIsInN1YnNjcmliZSIsInNhbWVRdWVyeSIsInNvcnQiLCJhIiwiYiIsImN1cnJlbnRNYXAiLCJhZGQiLCJoYXMiLCJlcnIiLCJwcm9jZXNzIiwiZ2V0UHJvcGVydGllcyIsInRvU2F2ZSIsImluc3RhbmNlSWQiLCJzYXZlQWxsIiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJidWxrUHV0IiwicmVzdWx0cyIsImFsbFNldHRsZWQiLCJtYXBwZWRGbiIsInJlc3VsdCIsImZhaWxlZCIsIiNwcm9jZXNzQ29udHJvbCIsImNvbnRyb2wiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwicmVjb3JkcyIsImJ1bGtHZXQiLCJleGlzdGluZ1JlY29yZHMiLCJ1bmRlZmluZWQiLCJpdGVtc1RvVXBkYXRlIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIl9jb2xsZWN0aW9uIiwiX2luZGV4IiwiVXNlclByb3ZpZGVyIiwiQm9va3MiLCJCb29rIiwiSXRlbSIsIl9zYXZlIiwiaW5mbyIsImxvY2FsRmllbGRzIiwiaWdub3JlZEZpZWxkcyIsInNrZWxldG9uIiwidW5pcXVlIiwiX19nZXQiLCJpc1JlYWR5IiwiY2hlY2tSZWFkeSIsIm9iamVjdFJlYWR5IiwicHJvbWlzZVJlYWR5IiwiaW5pdFByb21pc2UiLCJjb25maWciLCJMb2NhbFByb3ZpZGVyIiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwiYmluZCIsImluaXRpYWxpc2UiLCJvblJlYWR5IiwieCIsImhhc093blByb3BlcnR5IiwibmFtZSIsInRvSXRlcmF0ZSIsImZpZWxkIiwiZ2V0UHJvcGVydHlOYW1lcyIsImZvcmNlU3luYyIsInNhbWUiLCJvcmlnaW5hbCIsImxvYWRNZXRob2QiLCJpc05ldyIsImZhY3RvcnlSZWdpc3RyeSIsIl9faWQiLCJmbG9vciIsInJhbmRvbSIsImdldFJlZ2lzdHJ5IiwiZGVlcENvbXBhcmUiLCJvYmoxIiwib2JqMiIsImtleXMxIiwia2V5czIiLCJ2YWwxIiwidmFsMiIsImFyZU9iamVjdHMiLCJpc09iamVjdCIsIm9iamVjdCIsInRvQ29tcGFyZSIsImFyZUVxdWFsIiwibGlzdGVuUmVnaXN0cnkiLCJjcmVhdGUiLCIjbGlzdGVuUmVnaXN0cnkiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsIiN1cGRhdGUiLCJ1cGRhdGVkIiwicHV0IiwibG9jYWxVcGRhdGUiLCJwcm9wcyIsIkNvbGxlY3Rpb25Qcm92aWRlciIsIkl0ZW1Qcm92aWRlciIsInN0b3JlcyIsImRiTmFtZSIsInJlZ2lzdGVyTGlzdCIsInJlZ2lzdHJpZXMiLCJoYXNJdGVtIiwiZ2V0U3RvcmUiLCIjZ2V0U3RvcmUiLCJkYnMiLCJfdXVpZCIsImtleUlkIiwidjQiLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VzIjpbIi9hZGFwdGVyL2RlZmF1bHQudHMiLCIvYWRhcHRlci9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvYWRhcHRlci9sZWdhY3kudHMiLCIvY2FjaGUvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9JQ29sbGVjdGlvbi50cyIsIi9jb2xsZWN0aW9uL2xvYWQudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci50cyIsIi9jb2xsZWN0aW9uL3B1Ymxpc2gudHMiLCIvZXhhbXBsZS9jb2xsZWN0aW9uLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU0sTUFBT0EsY0FBYztZQUMxQkMsUUFBUUEsQ0FBQ0MsSUFBUztjQUNqQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lB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