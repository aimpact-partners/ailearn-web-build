System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.11/settings", "@beyond-js/reactive@1.1.11/model", "@beyond-js/reactive@1.1.11/database", "@beyond-js/kernel@0.1.9/core", "dexie@3.2.4", "@beyond-js/events@0.0.6/events", "uuid@9.0.1"], function (_export, _context) {
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
    }, function (_beyondJsReactive1111Settings) {
      dependency_1 = _beyondJsReactive1111Settings;
    }, function (_beyondJsReactive1111Model) {
      dependency_2 = _beyondJsReactive1111Model;
    }, function (_beyondJsReactive1111Database) {
      dependency_3 = _beyondJsReactive1111Database;
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
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["dexie", "3.2.4"], ["socket.io-client", "4.7.2"], ["uuid", "9.0.1"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["sqlite", "4.2.1"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.11"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.11/entities"
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
        hash: 3067198928,
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
                console.log('limit', limit);
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
        hash: 3509325129,
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
              if (typeof this.checkReady !== 'function') {
                console.warn('is not a function', this.checkReady, this.constructor.name);
                return;
              }
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
              this.save = this.save.bind(this);
              this.checkReady = this.checkReady.bind(this);
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
            checkReady() {
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
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwiaXRlbXMiLCJsb2NhbGRiIiwiZWxlbWVudHMiLCJNYXAiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInN0b3JlTmFtZSIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJzZXQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwibGlzdGVuSXRlbXMiLCIjbGlzdGVuSXRlbXMiLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJ2YWx1ZXMiLCJzdG9yZSIsImZvckVhY2giLCJpZCIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsIl9mYWN0b3J5IiwibG9hZGVkIiwicGFyZW50QnJpZGdlIiwicmVnaXN0cnkiLCJyZW1vdGVEYXRhIiwiUmVnaXN0cnlGYWN0b3J5IiwicGFyYW1zIiwibG9jYWxEYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwicmVtb3RlTG9hZCIsImV4YyIsImZldGNoZWQiLCJsYW5kZWQiLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJkZWxldGVkRW50cmllcyIsInVwZGF0ZUxvY2FsSXRlbXMiLCJwcm9taXNlcyIsIm1hcCIsInJlY29yZCIsImhhcyIsInB1c2giLCJpc1JlYWR5IiwiYWxsIiwiaW5kZXgiLCJfY29yZSIsIl9kYXRhYmFzZSIsIl9zYXZlciIsIl9sb2FkZXIiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwiZXhpc3RzIiwiZm91bmQiLCJyZWdpc3RyeUZhY3RvcnkiLCJhcHBseSIsImFjdGl2ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsIkxvY2FsUHJvdmlkZXJMb2FkZXIiLCJwcm9taXNlSW5pdCIsInJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJEQk1hbmFnZXIiLCJMb2NhbFByb3ZpZGVyU2F2ZXIiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwiaW5zdGFuY2VJZCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsIml0ZW1zVG9VcGRhdGUiLCJpc0RlbGV0ZWQiLCJzYXZlQWxsIiwiX2RleGllIiwicHJvbWlzZUxvYWQiLCJsaXN0SXRlbXMiLCJTZXQiLCJjb25kaXRpb25zIiwiY3VzdG9tV2hlcmUiLCJkZWZhdWx0V2hlcmUiLCJvcmRlckJ5IiwiY3VycmVudExpbWl0IiwiY3VycmVudE9mZnNldCIsInBhcmVudFByaXZhdGVQcm9wcyIsInF1YW50aXR5IiwiaXNTYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBlcmZvcm1Mb2FkIiwiI3BlcmZvcm1Mb2FkIiwiY291bnQiLCJsb2ciLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJyZXNvbHZlUHJvbWlzZUxvYWQiLCJsaXZlIiwibGl2ZVF1ZXJ5Iiwid2hlcmUiLCJzdWJzY3JpYmVUb1F1ZXJ5Iiwib2Zmc2V0IiwiaGFzT3duUHJvcGVydHkiLCJpbmRleGVzIiwic2NoZW1hIiwibmFtZSIsImtleXMiLCJrZXkiLCJpbmNsdWRlcyIsImNvbGxlY3Rpb24iLCJxdWVyeSIsImkiLCJ0b0FycmF5IiwiY3VzdG9tRmlsdGVyIiwiY2FsbGJhY2siLCIjc3Vic2NyaWJlVG9RdWVyeSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwiaGFuZGxlUXVlcnlSZXNwb25zZSIsImVyciIsIiNoYW5kbGVRdWVyeVJlc3BvbnNlIiwic2FtZVF1ZXJ5Iiwic29ydCIsImEiLCJiIiwiY3VycmVudE1hcCIsImFkZCIsImNsZWFudXBJdGVtcyIsIiNjbGVhbnVwSXRlbXMiLCIjcmVzb2x2ZVByb21pc2VMb2FkIiwiX3JlZ2lzdHJ5IiwiYmF0Y2hlcyIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIl9pbmRleCIsIlVzZXJQcm92aWRlciIsIkJvb2siLCJJdGVtIiwiX3NhdmUiLCJsb2NhbEZpZWxkcyIsInNrZWxldG9uIiwidW5pcXVlIiwiX19nZXQiLCJfX2luc3RhbmNlSWQiLCJjaGVja1JlYWR5Iiwib2JqZWN0UmVhZHkiLCJwcm9taXNlUmVhZHkiLCJpbml0UHJvbWlzZSIsImNvbmZpZyIsIiNzdGFydCIsImJpbmQiLCJzcGNzIiwiTG9jYWxQcm92aWRlciIsIkl0ZW1TYXZlTWFuYWdlciIsIkl0ZW1Mb2FkTWFuYWdlciIsImluaXRpYWxpc2UiLCJvblJlYWR5IiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwiZm9yY2VTeW5jIiwic2FtZSIsIm9yaWdpbmFsIiwiaXNOYU4iLCJwYXJzZUludCIsImxvYWRNZXRob2QiLCJpc05ldyIsImZhY3RvcnlSZWdpc3RyeSIsIl9faWQiLCJmbG9vciIsInJhbmRvbSIsImdldFJlZ2lzdHJ5IiwiZGVlcENvbXBhcmUiLCJvYmoxIiwib2JqMiIsImtleXMxIiwia2V5czIiLCJ2YWwxIiwidmFsMiIsImFyZU9iamVjdHMiLCJpc09iamVjdCIsIm9iamVjdCIsImlzVW5wdWJsaXNoZWQiLCIjaXNVbnB1Ymxpc2hlZCIsInRvQ29tcGFyZSIsImFyZUVxdWFsIiwibGlzdGVuUmVnaXN0cnkiLCJjcmVhdGUiLCIjbGlzdGVuUmVnaXN0cnkiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsImRlbGV0ZVJlZ2lzdHJ5IiwiaWRlbnRpZmllciIsIiN1cGRhdGUiLCJ1cGRhdGVkIiwicHV0IiwibG9jYWxVcGRhdGUiLCJwcm9wcyIsIkNvbGxlY3Rpb25Qcm92aWRlciIsIkl0ZW1Qcm92aWRlciIsInN0b3JlcyIsImRiTmFtZSIsInJlZ2lzdGVyTGlzdCIsInJlZ2lzdHJpZXMiLCJoYXNJdGVtIiwiZ2V0U3RvcmUiLCIjZ2V0U3RvcmUiLCJkYnMiLCJfdXVpZCIsImtleUlkIiwidjQiLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VzIjpbIi9hZGFwdGVyL2RlZmF1bHQudHMiLCIvYWRhcHRlci9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvYWRhcHRlci9sZWdhY3kudHMiLCIvY2FjaGUvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGlsZHJlbi1jb25zdHJ1Y3Rvci1wcm9wcy50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbGxlY3Rpb24vbG9hZC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvbG9hZGVyLnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvc2F2ZXIudHMiLCIvY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFTSxNQUFPQSxjQUFjO1lBQzFCQyxRQUFRQSxDQUFDQyxJQUFTO2NBQ2pCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7WUFFQUcsVUFBVUEsQ0FBQ0gsSUFBUztjQUNuQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFJLGNBQWNBLENBQUNKLElBQVM7Y0FDdkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3Qjs7VUFDQUssT0FBQSxDQUFBUCxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsU0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBYU0sTUFBT0csZUFBZTtZQUMzQixPQUFPQyxHQUFHQSxDQUFDQyxNQUFNLEVBQUVDLFFBQTZCO2NBQy9DQSxRQUFRLEdBQUdBLFFBQVEsR0FBR0EsUUFBUSxHQUFHUCxTQUFBLENBQUFRLGNBQWMsQ0FBQ0MsT0FBTztjQUN2RCxNQUFNQyxPQUFPLEdBQUdILFFBQVEsS0FBSyxTQUFTLEdBQUdMLFFBQUEsQ0FBQVYsY0FBYyxHQUFHVyxPQUFBLENBQUFRLGFBQWE7Y0FDdkUsT0FBTyxJQUFJRCxPQUFPLENBQUNKLE1BQU0sQ0FBQztZQUMzQjs7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