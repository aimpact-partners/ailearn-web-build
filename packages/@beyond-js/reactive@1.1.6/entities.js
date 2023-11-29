System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/settings", "@beyond-js/reactive@1.1.6/model", "@beyond-js/reactive@1.1.6/database", "dexie@3.2.4", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.1"], function (_export, _context) {
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
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.6"], ["@aimpact/ailearn-app", "0.0.15"]]);
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
        hash: 2043281639,
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
                if (localData) data = localData;
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