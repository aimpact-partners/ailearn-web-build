System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.9/settings", "@beyond-js/reactive@1.1.9/model", "@beyond-js/reactive@1.1.9/database", "@beyond-js/kernel@0.1.9/core", "dexie@3.2.4", "@beyond-js/events@0.0.6/events", "uuid@9.0.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, TCustomAdapter, IConfig, IResponseAdapter, Collection, CollectionLocalProvider, Book, Item, IItem, LocalProvider, CollectionProvider, ItemProvider, RegistryFactory, StoreRecords, __beyond_pkg, hmr;
  _export({
    TCustomAdapter: void 0,
    IConfig: void 0,
    IResponseAdapter: void 0,
    Collection: void 0,
    CollectionLocalProvider: void 0,
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
    }, function (_beyondJsReactive119Settings) {
      dependency_1 = _beyondJsReactive119Settings;
    }, function (_beyondJsReactive119Model) {
      dependency_2 = _beyondJsReactive119Model;
    }, function (_beyondJsReactive119Database) {
      dependency_3 = _beyondJsReactive119Database;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_dexie2) {
      dependency_5 = _dexie2;
    }, function (_beyondJsEvents006Events) {
      dependency_6 = _beyondJsEvents006Events;
    }, function (_uuid2) {
      dependency_7 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.9"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.9/entities"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/settings', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/reactive/database', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['dexie', dependency_5], ['@beyond-js/events/events', dependency_6], ['uuid', dependency_7]]);
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
        hash: 961578630,
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
                error,
                message
              } = response;
              if (!status) {
                if (message) throw message;
                throw typeof error === 'string' ? error : 'ERROR_DATA_QUERY';
              }
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
        hash: 663163710,
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
            db;
            item;
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
              this.#loadManager = new _load.CollectionLoadManager({
                parent: this,
                bridge,
                localdb: this.localdb
              });
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

      /******************************************************************
      INTERNAL MODULE: ./collection/interfaces/children-constructor-props
      ******************************************************************/

      ims.set('./collection/interfaces/children-constructor-props', {
        hash: 251458602,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************************
      INTERNAL MODULE: ./collection/interfaces/collection
      **************************************************/

      ims.set('./collection/interfaces/collection', {
        hash: 1873156359,
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
        hash: 2895945549,
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
            #loaded = new Map();
            #parentBridge;
            #parent;
            #registry;
            #adapter;
            #localdb;
            get parent() {
              return this.#parent;
            }
            remoteData = [];
            constructor({
              parent,
              bridge,
              localdb
            }) {
              this.#parent = parent;
              this.#parentBridge = bridge;
              this.#localdb = localdb;
              this.#adapter = this.#parent.responseAdapter;
              this.init();
            }
            init() {
              this.#localProvider = this.#parentBridge.get('localProvider');
              this.#provider = this.#parentBridge.get('provider');
              this.#registry = _factory.RegistryFactory.get(this.#parentBridge.get('storeName'));
            }
            #localLoad = async params => {
              if (!this.#localProvider) return;
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
                this.#parent.fetching = true;
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
                if (this.#parentBridge.get('localdb')) {
                  const localResponse = await this.#localLoad(params);
                  if (!this.#parent.isOnline || !this.#provider) return localResponse;
                }
                const {
                  properties,
                  items
                } = await this.#remoteLoad(params);
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
            #remoteLoad = async params => {
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
              return {
                properties,
                items
              };
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
              if (this.#localdb) await this.#localProvider.save(elements);
              return this.processEntries(elements);
            }
            /**
             *
             * This method is used to process the "local entries"
             *
             * @param entries
             * @param updateLocalItems
             * @returns
             */
            processEntries = async (entries, updateLocalItems = false) => {
              //	this.#registry.registerList(this.#parentBridge.get('storeName'), entries);
              const promises = [];
              const items = entries.map(record => {
                /**
                 * Already loaded
                 */
                if (this.#loaded.has(record.id)) {
                  const item = this.#loaded.get(record.id);
                  promises.push(item.isReady);
                  return item;
                }
                const specs = {
                  id: record.id,
                  ...record
                };
                if (updateLocalItems) specs.properties = record;
                const item = new this.parent.item(specs);
                promises.push(item.isReady);
                this.#loaded.set(record.id, item);
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

      /*************************************************
      INTERNAL MODULE: ./collection/local-provider/index
      *************************************************/

      ims.set('./collection/local-provider/index', {
        hash: 1513158061,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionLocalProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _database = require("@beyond-js/reactive/database");
          var _factory = require("../../registry/factory");
          var _saver = require("./saver");
          var _loader = require("./loader");
          /*bundle*/
          class CollectionLocalProvider extends _model.ReactiveModel {
            #isOnline = globalThis.navigator.onLine;
            #offline;
            #database;
            #storeName;
            #databaseName;
            #loadManager;
            #exists = false;
            #found = false;
            #db;
            #registryFactory;
            #parent;
            #saveManager;
            #localdb;
            #store;
            get store() {
              return this.#store;
            }
            #apply = true;
            get apply() {
              return this.#apply;
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
            #setItems = items => {
              this.#items = items;
            };
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
              this.localdb = bridge.get('localdb');
              if (!this.localdb) {
                this.#apply = false;
                return;
              }
              if (db) this.#registryFactory = _factory.RegistryFactory.get(db);
              this.#databaseName = db;
              this.#storeName = storeName;
              globalThis.addEventListener('online', this.handleConnection);
              globalThis.addEventListener('offline', this.handleConnection);
              this.#loadManager = new _loader.LocalProviderLoader(this, {
                store: this.#store,
                setItems: this.#setItems
              });
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
                this.#saveManager = new _saver.LocalProviderSaver(this, {
                  registryFactory: this.#registryFactory,
                  storeName: this.#storeName,
                  database: this.#database
                });
                this.ready = true;
                this.#promiseInit.resolve();
              } catch (e) {
                console.error(e);
              }
            };
            handleConnection = () => this.triggerEvent();
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
            save = data => this.#saveManager.save(data);
            saveAll = (items, storeName) => this.#saveManager.saveAll(items, storeName);
            load = params => this.#loadManager.load(params);
          }
          exports.CollectionLocalProvider = CollectionLocalProvider;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./collection/local-provider/loader
      **************************************************/

      ims.set('./collection/local-provider/loader', {
        hash: 1858268298,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LocalProviderLoader = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _dexie = require("dexie");
          class LocalProviderLoader {
            #parent;
            #promiseLoad;
            #params;
            #listItems = new Map();
            #total;
            #page = 0;
            #ids = new Set();
            #conditions = ['or'];
            #setItems;
            #customWhere;
            #defaultWhere = store => store.orderBy('id');
            #currentLimit;
            #currentOffset;
            constructor(parent, parentPrivateProps) {
              this.#parent = parent;
              this.#setItems = parentPrivateProps.setItems;
            }
            #quantity = 0;
            async load(params) {
              if (!this.#parent.apply) return;
              const isSame = JSON.stringify(this.#params) === JSON.stringify(params);
              if (isSame || this.#promiseLoad) return this.#promiseLoad;
              this.#promiseLoad = new _core.PendingPromise();
              await this.#parent.init();
              return this.#performLoad(params);
            }
            async #performLoad(params) {
              try {
                if (!this.#total) this.#total = await this.#parent.store.count();
                let limit = params.limit ?? 30;
                const totalPages = Math.ceil(this.#total / limit);
                if (totalPages < this.#page) {
                  this.#resolvePromiseLoad();
                  return;
                }
                const live = (0, _dexie.liveQuery)(this.where(params, limit));
                this.#page++;
                return this.#subscribeToQuery(live, params, totalPages);
              } catch (error) {
                console.error('Error al cargar los elementos del store:', error);
                return {
                  status: false,
                  data: []
                };
              }
            }
            where = (params, limit) => {
              return async () => {
                let store = this.#parent.store;
                const {
                  sortBy
                } = params;
                const offset = (this.#page - 1) * limit;
                let specs = {
                  ...params
                };
                if (specs.hasOwnProperty('where')) {
                  specs = {
                    ...specs,
                    ...specs.where
                  };
                  delete specs.where;
                }
                const indexes = store.schema.indexes.map(index => index.name);
                Object.keys(specs).forEach(key => {
                  !indexes.includes(key) && delete specs[key];
                });
                const collection = Object.keys(specs).length === 0 ? store : store.where(specs);
                let query = collection;
                this.#currentLimit = limit;
                this.#currentOffset = offset;
                /**
                 * @todo: the isDeleted field must be set as 0 by default.
                 */
                if (sortBy) await query.sortBy(sortBy);
                query = query.filter(i => i.isDeleted !== 1);
                const values = await query.offset(offset).limit(limit).toArray();
                return values;
              };
            };
            customFilter = callback => {
              this.#customWhere = callback;
              return this.#parent;
            };
            async #subscribeToQuery(liveQuery, params, totalPages) {
              let currentPage;
              liveQuery.subscribe({
                next: async items => {
                  const response = await this.#handleQueryResponse(items, params, totalPages, currentPage);
                  this.#resolvePromiseLoad(response);
                },
                error: err => {
                  console.error(err);
                  this.#resolvePromiseLoad({
                    status: false,
                    data: []
                  });
                }
              });
              return this.#promiseLoad;
            }
            /**
             *
             * @param items
             * @param params
             * @param totalPages
             * @param currentPage
             * @returns
             */
            async #handleQueryResponse(items, params, totalPages, currentPage) {
              let sameQuery;
              this.#quantity++;
              if (params.sortBy) items.sort((a, b) => a[params.sortBy] - b[params.sortBy]);
              if (!globalThis.data) globalThis.data = []; // ?
              if (currentPage == this.#page) sameQuery = true;else currentPage = this.#page;
              if (sameQuery && items.length === this.#parent.items.length) return;
              const currentMap = new Set();
              items.forEach(item => {
                this.#listItems.set(item.id, item);
                currentMap.add(item.id);
              });
              if (sameQuery) this.#cleanupItems(currentMap);
              this.#setItems([...this.#listItems.values()]);
              items.forEach(item => this.#ids.add(item.id));
              this.#parent.trigger('items.changed');
              return {
                status: true,
                data: items,
                total: this.#total,
                next: this.#page + 1 >= totalPages ? undefined : true
              };
            }
            #cleanupItems(currentMap) {
              [...this.#listItems.keys()].forEach(id => {
                if (!currentMap.has(id)) {
                  this.#listItems.delete(id);
                }
              });
            }
            #resolvePromiseLoad(response = {}) {
              if (!this.#promiseLoad) return;
              this.#promiseLoad.resolve(response);
              this.#promiseLoad = null;
            }
          }
          exports.LocalProviderLoader = LocalProviderLoader;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./collection/local-provider/saver
      *************************************************/

      ims.set('./collection/local-provider/saver', {
        hash: 3271791775,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LocalProviderSaver = void 0;
          var _registry = require("../../registry");
          class LocalProviderSaver {
            #batches = 200;
            #parent;
            #registryFactory;
            #storeName;
            #database;
            constructor(parent, parentBridge) {
              this.#parent = parent;
              this.#registryFactory = parentBridge.registryFactory;
              this.#storeName = parentBridge.storeName;
              this.#database = parentBridge.database;
            }
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
              data = process(data, this.#parent.isOnline ? 0 : 1);
              if (!this.#parent.apply) return;
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
              if (!this.#parent.apply) return;
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
          }
          exports.LocalProviderSaver = LocalProviderSaver;
        }
      });

      /************************************
      INTERNAL MODULE: ./collection/publish
      ************************************/

      ims.set('./collection/publish', {
        hash: 3613830967,
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
                console.warn('The collection doesnt use LocalDB');
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
              for (const [, chunk] of chunks.entries()) {
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
        hash: 3039560133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
        hash: 3176939875,
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
        hash: 2912117422,
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
            id;
            localdb;
            #provider;
            storeName;
            db;
            localFields = [];
            #localData;
            /**
             * @todo: Check if this is used and the purpose of it
             */
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
            get __instanceId() {
              return this.localProvider.__instanceId;
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
                localdb
              } = config;
              this.#config = config;
              this.#responseAdapter = _adapter.ResponseAdapter.get(this, this.#config?.adapter);
              if (db) this.db = db;
              if (storeName) this.storeName = storeName;
              this.localdb = localdb || !!(db && storeName);
              if (config.provider) {
                if (typeof config.provider !== 'function') {
                  throw new Error('Provider must be an function');
                }
                this.#provider = new config.provider(this);
              }
              this.#start(config);
              this.on('object.loaded', this.checkReady);
            }
            #start(config) {
              this.reactiveProps(['found', 'landed']);
              const getProperty = property => this.__get(property);
              const setProperty = (property, value) => this[property] = value;
              const bridge = {
                get: getProperty,
                set: setProperty
              };
              const spcs = {
                parent: this,
                bridge,
                localdb: this.localdb
              };
              this.localProvider = new _localProvider.LocalProvider(spcs);
              this.#saveManager = new _save.ItemSaveManager(spcs);
              this.#loadManager = new _load.ItemLoadManager(spcs);
              this.save = this.save.bind(this);
              this.init(config);
            }
            async initialise() {
              this.init(this.#config);
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
            async init(config) {
              try {
                let id;
                if (this.#initPromise) return this.#initPromise;
                this.#initPromise = new _core.PendingPromise();
                if (config.id) id = config.id;
                this.id = config.id;
                if (this.localdb) {
                  await this.localProvider.init(id);
                  this.set(this.localProvider.registry.values);
                }
                if (this.#skeleton && this.#skeleton.length > 0) {
                  this.properties = this.#skeleton;
                }
                if (config.properties) this.set(config.properties, true);
                this.ready = true;
                this.#initPromise.resolve(true);
                this.trigger('object.loaded');
              } catch (e) {
                console.error('error initializing', e);
              }
            }
            setOffline = value => this.localProvider.setOffline(value);
            /**
             * Set the data of the object
             *
             * @param data The data to set
             * @param init If true, the data will be stored in the local database
             */
            x;
            async set(data, init = false) {
              if (!init) {
                /**
                 * init is passed as true when it is called by the init method or collections objects,
                 * the isReady promise needs to be validated when the method is called by the user
                 */
                await this.isReady;
              }
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
        hash: 2567090960,
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
            #localdb;
            ready;
            constructor({
              parent,
              bridge,
              localdb
            }) {
              this.#parent = parent;
              this.#getProperty = bridge.get;
              this.#bridge = bridge;
              this.#localdb = localdb;
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
                  if (localData?.status) {
                    this.#parent.set(localData.data, true);
                    if (localData.data.__instanceId) this.#localProvider.__instanceId = localData.data.__instanceId;
                    if (!this.#localProvider.__instanceId) this.#localProvider.__instanceId = this.#localProvider.registry.__instanceId;
                  }
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
                this.#parent.fetched = true;
                this.#parent.set(remoteData);
                if (localdb) {
                  let same = true;
                  this.#parent.landed = true;
                  Object.keys(remoteData).forEach(key => {
                    let original = localProvider.registry.values;
                    if (original[key] !== remoteData[key]) same = false;
                  });
                  if (!same) {
                    const id = !isNaN(this.#parent.id) ? parseInt(this.#parent.id) : this.#parent.id;
                    await this.#localProvider.save({
                      ...this.#parent.getProperties(),
                      ...remoteData,
                      id,
                      __instanceId: this.#localProvider.__instanceId
                    });
                  }
                }
                return this.#adapter.toClient({
                  data: remoteData
                });
              } catch (exc) {
                console.log(20, exc);
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
        hash: 3676397771,
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
            __instanceId;
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
            constructor({
              parent,
              bridge,
              localdb
            }) {
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
              this.#localdb = localdb;
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
              if (!this.#database) return;
              const response = await this.#update({
                isDeleted: 1
              });
              return response;
            };
            deleteRegistry = async identifier => {
              const store = this.#database.db[this.#storeName];
              await store.delete(identifier);
              this.triggerEvent();
              return true;
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
        hash: 3837317463,
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
            #localdb;
            #adapter;
            constructor({
              parent,
              bridge,
              localdb
            }) {
              this.#parent = parent;
              this.#getProperty = bridge.get;
              this.#bridge = bridge;
              this.#localdb = localdb;
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
                properties.__instanceId = this.#localProvider.registry.__instanceId;
                if (this.#parent.isOnline && this.#provider) {
                  const response = await this.#publish(properties);
                  this.#localProvider.registry.setValues(response.data);
                  properties.id = response?.data?.id;
                  this.#adapter.fromRemote(response);
                  this.#localProvider.registry.isNew = false;
                }
                if (this.#localProvider) {
                  await this.#localProvider.save(properties);
                }
                this.#parent.triggerEvent();
                return this.#adapter.toClient();
              } catch (e) {
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
                await this.#parent.set(data);
                if (this.#localProvider) {
                  this.#localProvider.save(data);
                  if (props.id === this.#localProvider.registry.__instanceId) {
                    this.#localProvider.deleteRegistry(props.id);
                  }
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
                  await this.#localProvider.save(properties);
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
        hash: 2312446295,
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
        hash: 738374833,
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
            #isDeleted;
            #isNew;
            __instanceId;
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
              this.__instanceId = data.__instanceId ?? (0, _uuid.v4)();
              if (!id) this.#id = this.__instanceId;
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
              if (data.__instanceId) this.__instanceId = data.instanceId;
              newValues.isDeleleted = this.isDeleted === 1 ?? 0;
              this.#values = newValues;
              this.triggerEvent();
              return updated;
            };
            getValues() {
              const values = {
                ...this.#values
              };
              if (this.__instanceId) values.__instanceId = this.__instanceId;
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
        "im": "./collection/local-provider/index",
        "from": "CollectionLocalProvider",
        "name": "CollectionLocalProvider"
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
        (require || prop === 'CollectionLocalProvider') && _export("CollectionLocalProvider", CollectionLocalProvider = require ? require('./collection/local-provider/index').CollectionLocalProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwiaXRlbXMiLCJsb2NhbGRiIiwiZWxlbWVudHMiLCJNYXAiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInN0b3JlTmFtZSIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJzZXQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwibGlzdGVuSXRlbXMiLCIjbGlzdGVuSXRlbXMiLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJ2YWx1ZXMiLCJzdG9yZSIsImZvckVhY2giLCJpZCIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsIl9mYWN0b3J5IiwibG9hZGVkIiwicGFyZW50QnJpZGdlIiwicmVnaXN0cnkiLCJyZW1vdGVEYXRhIiwiUmVnaXN0cnlGYWN0b3J5IiwicGFyYW1zIiwibG9jYWxEYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwicmVtb3RlTG9hZCIsImV4YyIsImZldGNoZWQiLCJsYW5kZWQiLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJkZWxldGVkRW50cmllcyIsInVwZGF0ZUxvY2FsSXRlbXMiLCJwcm9taXNlcyIsIm1hcCIsInJlY29yZCIsImhhcyIsInB1c2giLCJpc1JlYWR5IiwiYWxsIiwiaW5kZXgiLCJfY29yZSIsIl9kYXRhYmFzZSIsIl9zYXZlciIsIl9sb2FkZXIiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwiZXhpc3RzIiwiZm91bmQiLCJyZWdpc3RyeUZhY3RvcnkiLCJhcHBseSIsImFjdGl2ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsIkxvY2FsUHJvdmlkZXJMb2FkZXIiLCJwcm9taXNlSW5pdCIsInJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJEQk1hbmFnZXIiLCJMb2NhbFByb3ZpZGVyU2F2ZXIiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwiaW5zdGFuY2VJZCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsIml0ZW1zVG9VcGRhdGUiLCJpc0RlbGV0ZWQiLCJzYXZlQWxsIiwiX2RleGllIiwicHJvbWlzZUxvYWQiLCJsaXN0SXRlbXMiLCJTZXQiLCJjb25kaXRpb25zIiwiY3VzdG9tV2hlcmUiLCJkZWZhdWx0V2hlcmUiLCJvcmRlckJ5IiwiY3VycmVudExpbWl0IiwiY3VycmVudE9mZnNldCIsInBhcmVudFByaXZhdGVQcm9wcyIsInF1YW50aXR5IiwiaXNTYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBlcmZvcm1Mb2FkIiwiI3BlcmZvcm1Mb2FkIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJyZXNvbHZlUHJvbWlzZUxvYWQiLCJsaXZlIiwibGl2ZVF1ZXJ5Iiwid2hlcmUiLCJzdWJzY3JpYmVUb1F1ZXJ5Iiwib2Zmc2V0IiwiaGFzT3duUHJvcGVydHkiLCJpbmRleGVzIiwic2NoZW1hIiwibmFtZSIsImtleXMiLCJrZXkiLCJpbmNsdWRlcyIsImNvbGxlY3Rpb24iLCJxdWVyeSIsImkiLCJ0b0FycmF5IiwiY3VzdG9tRmlsdGVyIiwiY2FsbGJhY2siLCIjc3Vic2NyaWJlVG9RdWVyeSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwiaGFuZGxlUXVlcnlSZXNwb25zZSIsImVyciIsIiNoYW5kbGVRdWVyeVJlc3BvbnNlIiwic2FtZVF1ZXJ5Iiwic29ydCIsImEiLCJiIiwiY3VycmVudE1hcCIsImFkZCIsImNsZWFudXBJdGVtcyIsIiNjbGVhbnVwSXRlbXMiLCIjcmVzb2x2ZVByb21pc2VMb2FkIiwiX3JlZ2lzdHJ5IiwiYmF0Y2hlcyIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIl9pbmRleCIsIlVzZXJQcm92aWRlciIsIkJvb2siLCJJdGVtIiwiX3NhdmUiLCJsb2NhbEZpZWxkcyIsInNrZWxldG9uIiwidW5pcXVlIiwiX19nZXQiLCJfX2luc3RhbmNlSWQiLCJjaGVja1JlYWR5Iiwib2JqZWN0UmVhZHkiLCJwcm9taXNlUmVhZHkiLCJpbml0UHJvbWlzZSIsImNvbmZpZyIsIiNzdGFydCIsInNwY3MiLCJMb2NhbFByb3ZpZGVyIiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwiYmluZCIsImluaXRpYWxpc2UiLCJvblJlYWR5IiwieCIsInRvSXRlcmF0ZSIsImZpZWxkIiwiZ2V0UHJvcGVydHlOYW1lcyIsImZvcmNlU3luYyIsInNhbWUiLCJvcmlnaW5hbCIsImlzTmFOIiwicGFyc2VJbnQiLCJsb2ciLCJsb2FkTWV0aG9kIiwiaXNOZXciLCJmYWN0b3J5UmVnaXN0cnkiLCJfX2lkIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRSZWdpc3RyeSIsImRlZXBDb21wYXJlIiwib2JqMSIsIm9iajIiLCJrZXlzMSIsImtleXMyIiwidmFsMSIsInZhbDIiLCJhcmVPYmplY3RzIiwiaXNPYmplY3QiLCJvYmplY3QiLCJpc1VucHVibGlzaGVkIiwiI2lzVW5wdWJsaXNoZWQiLCJ0b0NvbXBhcmUiLCJhcmVFcXVhbCIsImxpc3RlblJlZ2lzdHJ5IiwiY3JlYXRlIiwiI2xpc3RlblJlZ2lzdHJ5IiwiZHVwbGljYXRlZCIsInZhbGlkYXRlVW5pcXVlRmllbGRzIiwiZmllbGRzIiwiY2hlY2tQcm9taXNlcyIsInRoZW4iLCJkdXBsaWNhdGVGaWVsZHMiLCJkZWxldGVSZWdpc3RyeSIsImlkZW50aWZpZXIiLCIjdXBkYXRlIiwidXBkYXRlZCIsInB1dCIsImxvY2FsVXBkYXRlIiwicHJvcHMiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJJdGVtUHJvdmlkZXIiLCJzdG9yZXMiLCJkYk5hbWUiLCJyZWdpc3Rlckxpc3QiLCJyZWdpc3RyaWVzIiwiaGFzSXRlbSIsImdldFN0b3JlIiwiI2dldFN0b3JlIiwiZGJzIiwiX3V1aWQiLCJrZXlJZCIsInY0IiwibmV3VmFsdWVzIiwiaXNEZWxlbGV0ZWQiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiXSwic291cmNlcyI6WyIvYWRhcHRlci9kZWZhdWx0LnRzIiwiL2FkYXB0ZXIvaW5kZXgudHMiLCIvaW50ZXJmYWNlLnRzIiwiL2FkYXB0ZXIvbGVnYWN5LnRzIiwiL2NhY2hlL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY2hpbGRyZW4tY29uc3RydWN0b3ItcHJvcHMudHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb2xsZWN0aW9uL2xvYWQudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2xvYWRlci50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL3NhdmVyLnRzIiwiL2NvbGxlY3Rpb24vcHVibGlzaC50cyIsIi9leGFtcGxlL2luZGV4LnRzIiwiL3Byb3ZpZGVyLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvY29uZmlnLnRzIiwiL2l0ZW0udHMiLCIvaXRlbS9sb2FkLnRzIiwiL2l0ZW0vbG9jYWwtcHJvdmlkZXIudHMiLCIvaXRlbS9zYXZlLnRzIiwiL3Byb3ZpZGVycy9jb2xsZWN0aW9uLnRzIiwiL3Byb3ZpZGVycy9pdGVtLnRzIiwiL3JlZ2lzdHJ5L2ZhY3RvcnkudHMiLCIvcmVnaXN0cnkvaW5kZXgudHMiLCIvcmVnaXN0cnkvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU0sTUFBT0EsY0FBYztZQUMxQkMsUUFBUUEsQ0FBQ0MsSUFBUztjQUNqQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFHLFVBQVVBLENBQUNILElBQVM7Y0FDbkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBSSxjQUFjQSxDQUFDSixJQUFTO2NBQ3ZCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7O1VBQ0FLLE9BQUEsQ0FBQVAsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFRLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQWFNLE1BQU9HLGVBQWU7WUFDM0IsT0FBT0MsR0FBR0EsQ0FBQ0MsTUFBTSxFQUFFQyxRQUE2QjtjQUMvQ0EsUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQVEsR0FBR1AsU0FBQSxDQUFBUSxjQUFjLENBQUNDLE9BQU87Y0FDdkQsTUFBTUMsT0FBTyxHQUFHSCxRQUFRLEtBQUssU0FBUyxHQUFHTCxRQUFBLENBQUFWLGNBQWMsR0FBR1csT0FBQSxDQUFBUSxhQUFhO2NBQ3ZFLE9BQU8sSUFBSUQsT0FBTyxDQUFDSixNQUFNLENBQUM7WUFD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