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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwiaXRlbXMiLCJsb2NhbGRiIiwiZWxlbWVudHMiLCJNYXAiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInN0b3JlTmFtZSIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJzZXQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwibGlzdGVuSXRlbXMiLCIjbGlzdGVuSXRlbXMiLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJ2YWx1ZXMiLCJzdG9yZSIsImZvckVhY2giLCJpZCIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsIl9mYWN0b3J5IiwibG9hZGVkIiwicGFyZW50QnJpZGdlIiwicmVnaXN0cnkiLCJyZW1vdGVEYXRhIiwiUmVnaXN0cnlGYWN0b3J5IiwicGFyYW1zIiwibG9jYWxEYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwicmVtb3RlTG9hZCIsImV4YyIsImZldGNoZWQiLCJsYW5kZWQiLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJkZWxldGVkRW50cmllcyIsInVwZGF0ZUxvY2FsSXRlbXMiLCJwcm9taXNlcyIsIm1hcCIsInJlY29yZCIsImhhcyIsInB1c2giLCJpc1JlYWR5IiwiYWxsIiwiaW5kZXgiLCJfY29yZSIsIl9kYXRhYmFzZSIsIl9zYXZlciIsIl9sb2FkZXIiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwiZXhpc3RzIiwiZm91bmQiLCJyZWdpc3RyeUZhY3RvcnkiLCJhcHBseSIsImFjdGl2ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsIkxvY2FsUHJvdmlkZXJMb2FkZXIiLCJwcm9taXNlSW5pdCIsInJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJEQk1hbmFnZXIiLCJMb2NhbFByb3ZpZGVyU2F2ZXIiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwiaW5zdGFuY2VJZCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsIml0ZW1zVG9VcGRhdGUiLCJpc0RlbGV0ZWQiLCJzYXZlQWxsIiwiX2RleGllIiwicHJvbWlzZUxvYWQiLCJsaXN0SXRlbXMiLCJTZXQiLCJjb25kaXRpb25zIiwiY3VzdG9tV2hlcmUiLCJkZWZhdWx0V2hlcmUiLCJvcmRlckJ5IiwiY3VycmVudExpbWl0IiwiY3VycmVudE9mZnNldCIsInBhcmVudFByaXZhdGVQcm9wcyIsInF1YW50aXR5IiwiaXNTYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBlcmZvcm1Mb2FkIiwiI3BlcmZvcm1Mb2FkIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJyZXNvbHZlUHJvbWlzZUxvYWQiLCJsaXZlIiwibGl2ZVF1ZXJ5Iiwid2hlcmUiLCJzdWJzY3JpYmVUb1F1ZXJ5Iiwib2Zmc2V0IiwiaGFzT3duUHJvcGVydHkiLCJpbmRleGVzIiwic2NoZW1hIiwibmFtZSIsImtleXMiLCJrZXkiLCJpbmNsdWRlcyIsImNvbGxlY3Rpb24iLCJxdWVyeSIsImkiLCJ0b0FycmF5IiwiY3VzdG9tRmlsdGVyIiwiY2FsbGJhY2siLCIjc3Vic2NyaWJlVG9RdWVyeSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwiaGFuZGxlUXVlcnlSZXNwb25zZSIsImVyciIsIiNoYW5kbGVRdWVyeVJlc3BvbnNlIiwic2FtZVF1ZXJ5Iiwic29ydCIsImEiLCJiIiwiY3VycmVudE1hcCIsImFkZCIsImNsZWFudXBJdGVtcyIsIiNjbGVhbnVwSXRlbXMiLCIjcmVzb2x2ZVByb21pc2VMb2FkIiwiX3JlZ2lzdHJ5IiwiYmF0Y2hlcyIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIl9pbmRleCIsIlVzZXJQcm92aWRlciIsIkJvb2siLCJJdGVtIiwiX3NhdmUiLCJsb2NhbEZpZWxkcyIsInNrZWxldG9uIiwidW5pcXVlIiwiX19nZXQiLCJfX2luc3RhbmNlSWQiLCJjaGVja1JlYWR5Iiwib2JqZWN0UmVhZHkiLCJwcm9taXNlUmVhZHkiLCJpbml0UHJvbWlzZSIsImNvbmZpZyIsIiNzdGFydCIsImJpbmQiLCJzcGNzIiwiTG9jYWxQcm92aWRlciIsIkl0ZW1TYXZlTWFuYWdlciIsIkl0ZW1Mb2FkTWFuYWdlciIsImluaXRpYWxpc2UiLCJvblJlYWR5IiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwiZm9yY2VTeW5jIiwic2FtZSIsIm9yaWdpbmFsIiwiaXNOYU4iLCJwYXJzZUludCIsImxvZyIsImxvYWRNZXRob2QiLCJpc05ldyIsImZhY3RvcnlSZWdpc3RyeSIsIl9faWQiLCJmbG9vciIsInJhbmRvbSIsImdldFJlZ2lzdHJ5IiwiZGVlcENvbXBhcmUiLCJvYmoxIiwib2JqMiIsImtleXMxIiwia2V5czIiLCJ2YWwxIiwidmFsMiIsImFyZU9iamVjdHMiLCJpc09iamVjdCIsIm9iamVjdCIsImlzVW5wdWJsaXNoZWQiLCIjaXNVbnB1Ymxpc2hlZCIsInRvQ29tcGFyZSIsImFyZUVxdWFsIiwibGlzdGVuUmVnaXN0cnkiLCJjcmVhdGUiLCIjbGlzdGVuUmVnaXN0cnkiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsImRlbGV0ZVJlZ2lzdHJ5IiwiaWRlbnRpZmllciIsIiN1cGRhdGUiLCJ1cGRhdGVkIiwicHV0IiwibG9jYWxVcGRhdGUiLCJwcm9wcyIsIkNvbGxlY3Rpb25Qcm92aWRlciIsIkl0ZW1Qcm92aWRlciIsInN0b3JlcyIsImRiTmFtZSIsInJlZ2lzdGVyTGlzdCIsInJlZ2lzdHJpZXMiLCJoYXNJdGVtIiwiZ2V0U3RvcmUiLCIjZ2V0U3RvcmUiLCJkYnMiLCJfdXVpZCIsImtleUlkIiwidjQiLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VzIjpbIi9hZGFwdGVyL2RlZmF1bHQudHMiLCIvYWRhcHRlci9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvYWRhcHRlci9sZWdhY3kudHMiLCIvY2FjaGUvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGlsZHJlbi1jb25zdHJ1Y3Rvci1wcm9wcy50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbGxlY3Rpb24vbG9hZC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvbG9hZGVyLnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvc2F2ZXIudHMiLCIvY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFTSxNQUFPQSxjQUFjO1lBQzFCQyxRQUFRQSxDQUFDQyxJQUFTO2NBQ2pCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7WUFFQUcsVUFBVUEsQ0FBQ0gsSUFBUztjQUNuQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFJLGNBQWNBLENBQUNKLElBQVM7Y0FDdkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3Qjs7VUFDQUssT0FBQSxDQUFBUCxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsU0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBYU0sTUFBT0csZUFBZTtZQUMzQixPQUFPQyxHQUFHQSxDQUFDQyxNQUFNLEVBQUVDLFFBQTZCO2NBQy9DQSxRQUFRLEdBQUdBLFFBQVEsR0FBR0EsUUFBUSxHQUFHUCxTQUFBLENBQUFRLGNBQWMsQ0FBQ0MsT0FBTztjQUN2RCxNQUFNQyxPQUFPLEdBQUdILFFBQVEsS0FBSyxTQUFTLEdBQUdMLFFBQUEsQ0FBQVYsY0FBYyxHQUFHVyxPQUFBLENBQUFRLGFBQWE7Y0FDdkUsT0FBTyxJQUFJRCxPQUFPLENBQUNKLE1BQU0sQ0FBQztZQUMzQjs7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