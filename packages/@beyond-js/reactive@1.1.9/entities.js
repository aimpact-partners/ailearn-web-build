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
        hash: 3517304616,
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
              console.log(22, response, status, error);
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
        hash: 261137402,
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
                  const item = this.#loaded = this.#loaded.get(record.id);
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
        hash: 2381137303,
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
              console.log(3, this.#adapter);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiX21vZGVsIiwiQ2FjaGVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsIl9sb2NhbFByb3ZpZGVyIiwiX3B1Ymxpc2giLCJfbG9hZCIsIl9hZGFwdGVyIiwiQ29sbGVjdGlvbiIsImRiIiwiaXRlbSIsIml0ZW1zIiwibG9jYWxkYiIsImVsZW1lbnRzIiwiTWFwIiwiaXNPbmxpbmUiLCJsb2NhbFByb3ZpZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwidHJpZ2dlckV2ZW50IiwiY291bnRlcnMiLCJ0b3RhbCIsIm5leHQiLCJzYXZlTWFuYWdlciIsImxvYWRNYW5hZ2VyIiwicHJvdmlkZXIiLCJzb3J0QnkiLCJzb3J0RGlyZWN0aW9uIiwicmVzcG9uc2VBZGFwdGVyIiwiaW5pdGlhbFNwZWNzIiwic3BlY3MiLCJzdG9yZU5hbWUiLCJFcnJvciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwic2V0IiwiQ29sbGVjdGlvbkxvY2FsUHJvdmlkZXIiLCJDb2xsZWN0aW9uU2F2ZU1hbmFnZXIiLCJDb2xsZWN0aW9uTG9hZE1hbmFnZXIiLCJvbiIsImxpc3Rlbkl0ZW1zIiwiI2xpc3Rlbkl0ZW1zIiwicHJvY2Vzc0VudHJpZXMiLCJ0cmlnZ2VyIiwic2V0T2ZmbGluZSIsInNldEl0ZW1zIiwidmFsdWVzIiwic3RvcmUiLCJmb3JFYWNoIiwiaWQiLCJkZWxldGUiLCJpZHMiLCJzb2Z0RGVsZXRlIiwiZGVsZXRlSXRlbXMiLCJlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsIl9mYWN0b3J5IiwibG9hZGVkIiwicGFyZW50QnJpZGdlIiwicmVnaXN0cnkiLCJyZW1vdGVEYXRhIiwiUmVnaXN0cnlGYWN0b3J5IiwicGFyYW1zIiwibG9jYWxEYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwicmVtb3RlTG9hZCIsImV4YyIsImZldGNoZWQiLCJsYW5kZWQiLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJkZWxldGVkRW50cmllcyIsInVwZGF0ZUxvY2FsSXRlbXMiLCJwcm9taXNlcyIsIm1hcCIsInJlY29yZCIsImhhcyIsInB1c2giLCJpc1JlYWR5IiwiYWxsIiwiaW5kZXgiLCJfY29yZSIsIl9kYXRhYmFzZSIsIl9zYXZlciIsIl9sb2FkZXIiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwiZXhpc3RzIiwiZm91bmQiLCJyZWdpc3RyeUZhY3RvcnkiLCJhcHBseSIsImFjdGl2ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsIkxvY2FsUHJvdmlkZXJMb2FkZXIiLCJwcm9taXNlSW5pdCIsInJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJEQk1hbmFnZXIiLCJMb2NhbFByb3ZpZGVyU2F2ZXIiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwiaW5zdGFuY2VJZCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsIml0ZW1zVG9VcGRhdGUiLCJpc0RlbGV0ZWQiLCJzYXZlQWxsIiwiX2RleGllIiwicHJvbWlzZUxvYWQiLCJsaXN0SXRlbXMiLCJTZXQiLCJjb25kaXRpb25zIiwiY3VzdG9tV2hlcmUiLCJkZWZhdWx0V2hlcmUiLCJvcmRlckJ5IiwiY3VycmVudExpbWl0IiwiY3VycmVudE9mZnNldCIsInBhcmVudFByaXZhdGVQcm9wcyIsInF1YW50aXR5IiwiaXNTYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBlcmZvcm1Mb2FkIiwiI3BlcmZvcm1Mb2FkIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJyZXNvbHZlUHJvbWlzZUxvYWQiLCJsaXZlIiwibGl2ZVF1ZXJ5Iiwid2hlcmUiLCJzdWJzY3JpYmVUb1F1ZXJ5Iiwib2Zmc2V0IiwiaGFzT3duUHJvcGVydHkiLCJpbmRleGVzIiwic2NoZW1hIiwibmFtZSIsImtleXMiLCJrZXkiLCJpbmNsdWRlcyIsImNvbGxlY3Rpb24iLCJxdWVyeSIsImkiLCJ0b0FycmF5IiwiY3VzdG9tRmlsdGVyIiwiY2FsbGJhY2siLCIjc3Vic2NyaWJlVG9RdWVyeSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwiaGFuZGxlUXVlcnlSZXNwb25zZSIsImVyciIsIiNoYW5kbGVRdWVyeVJlc3BvbnNlIiwic2FtZVF1ZXJ5Iiwic29ydCIsImEiLCJiIiwiY3VycmVudE1hcCIsImFkZCIsImNsZWFudXBJdGVtcyIsIiNjbGVhbnVwSXRlbXMiLCIjcmVzb2x2ZVByb21pc2VMb2FkIiwiX3JlZ2lzdHJ5IiwiYmF0Y2hlcyIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIl9pbmRleCIsIlVzZXJQcm92aWRlciIsIkJvb2siLCJJdGVtIiwiX3NhdmUiLCJsb2NhbEZpZWxkcyIsInNrZWxldG9uIiwidW5pcXVlIiwiX19nZXQiLCJfX2luc3RhbmNlSWQiLCJjaGVja1JlYWR5Iiwib2JqZWN0UmVhZHkiLCJwcm9taXNlUmVhZHkiLCJpbml0UHJvbWlzZSIsImNvbmZpZyIsIiNzdGFydCIsInNwY3MiLCJMb2NhbFByb3ZpZGVyIiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwiYmluZCIsImluaXRpYWxpc2UiLCJvblJlYWR5IiwieCIsInRvSXRlcmF0ZSIsImZpZWxkIiwiZ2V0UHJvcGVydHlOYW1lcyIsImZvcmNlU3luYyIsInNhbWUiLCJvcmlnaW5hbCIsImlzTmFOIiwicGFyc2VJbnQiLCJsb2FkTWV0aG9kIiwiaXNOZXciLCJmYWN0b3J5UmVnaXN0cnkiLCJfX2lkIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRSZWdpc3RyeSIsImRlZXBDb21wYXJlIiwib2JqMSIsIm9iajIiLCJrZXlzMSIsImtleXMyIiwidmFsMSIsInZhbDIiLCJhcmVPYmplY3RzIiwiaXNPYmplY3QiLCJvYmplY3QiLCJpc1VucHVibGlzaGVkIiwiI2lzVW5wdWJsaXNoZWQiLCJ0b0NvbXBhcmUiLCJhcmVFcXVhbCIsImxpc3RlblJlZ2lzdHJ5IiwiY3JlYXRlIiwiI2xpc3RlblJlZ2lzdHJ5IiwiZHVwbGljYXRlZCIsInZhbGlkYXRlVW5pcXVlRmllbGRzIiwiZmllbGRzIiwiY2hlY2tQcm9taXNlcyIsInRoZW4iLCJkdXBsaWNhdGVGaWVsZHMiLCJkZWxldGVSZWdpc3RyeSIsImlkZW50aWZpZXIiLCIjdXBkYXRlIiwidXBkYXRlZCIsInB1dCIsImxvY2FsVXBkYXRlIiwicHJvcHMiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJJdGVtUHJvdmlkZXIiLCJzdG9yZXMiLCJkYk5hbWUiLCJyZWdpc3Rlckxpc3QiLCJyZWdpc3RyaWVzIiwiaGFzSXRlbSIsImdldFN0b3JlIiwiI2dldFN0b3JlIiwiZGJzIiwiX3V1aWQiLCJrZXlJZCIsInY0IiwibmV3VmFsdWVzIiwiaXNEZWxlbGV0ZWQiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiXSwic291cmNlcyI6WyIvYWRhcHRlci9kZWZhdWx0LnRzIiwiL2FkYXB0ZXIvaW5kZXgudHMiLCIvaW50ZXJmYWNlLnRzIiwiL2FkYXB0ZXIvbGVnYWN5LnRzIiwiL2NhY2hlL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY2hpbGRyZW4tY29uc3RydWN0b3ItcHJvcHMudHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb2xsZWN0aW9uL2xvYWQudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2xvYWRlci50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL3NhdmVyLnRzIiwiL2NvbGxlY3Rpb24vcHVibGlzaC50cyIsIi9leGFtcGxlL2luZGV4LnRzIiwiL3Byb3ZpZGVyLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvY29uZmlnLnRzIiwiL2l0ZW0udHMiLCIvaXRlbS9sb2FkLnRzIiwiL2l0ZW0vbG9jYWwtcHJvdmlkZXIudHMiLCIvaXRlbS9zYXZlLnRzIiwiL3Byb3ZpZGVycy9jb2xsZWN0aW9uLnRzIiwiL3Byb3ZpZGVycy9pdGVtLnRzIiwiL3JlZ2lzdHJ5L2ZhY3RvcnkudHMiLCIvcmVnaXN0cnkvaW5kZXgudHMiLCIvcmVnaXN0cnkvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU0sTUFBT0EsY0FBYztZQUMxQkMsUUFBUUEsQ0FBQ0MsSUFBUztjQUNqQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFHLFVBQVVBLENBQUNILElBQVM7Y0FDbkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBSSxjQUFjQSxDQUFDSixJQUFTO2NBQ3ZCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7O1VBQ0FLLE9BQUEsQ0FBQVAsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFRLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQWFNLE1BQU9HLGVBQWU7WUFDM0IsT0FBT0MsR0FBR0EsQ0FBQ0MsTUFBTSxFQUFFQyxRQUE2QjtjQUMvQ0EsUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQVEsR0FBR1AsU0FBQSxDQUFBUSxjQUFjLENBQUNDLE9BQU87Y0FDdkQsTUFBTUMsT0FBTyxHQUFHSCxRQUFRLEtBQUssU0FBUyxHQUFHTCxRQUFBLENBQUFWLGNBQWMsR0FBR1csT0FBQSxDQUFBUSxhQUFhO2NBQ3ZFLE9BQU8sSUFBSUQsT0FBTyxDQUFDSixNQUFNLENBQUM7WUFD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