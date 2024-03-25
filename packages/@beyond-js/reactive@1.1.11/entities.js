System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.11/settings", "@beyond-js/reactive@1.1.11/model", "@beyond-js/reactive@1.1.11/database", "@beyond-js/kernel@0.1.9/core", "dexie@3.2.7", "@beyond-js/events@0.0.7/events", "uuid@9.0.1"], function (_export, _context) {
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
    }, function (_beyondJsEvents007Events) {
      dependency_6 = _beyondJsEvents007Events;
    }, function (_uuid2) {
      dependency_7 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["dexie", "3.2.3"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.11"], ["@aimpact/ailearn-app", "0.0.29"]]);
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
        hash: 3926772970,
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
              super({
                properties: ['total', 'next']
              });
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
        hash: 3079767897,
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
                total: data.total || 0
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
        hash: 588579742,
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
              if (currentPage === this.#page) sameQuery = true;else currentPage = this.#page;
              if (sameQuery && items.length === this.#parent.items.length) return;
              const currentMap = new Set();
              items.forEach(item => {
                this.#listItems.set(item.id, item);
                currentMap.add(item.id);
              });
              this.#cleanupItems(currentMap);
              this.#setItems([...this.#listItems.values()]);
              items.forEach(item => this.#ids.add(item.id));
              this.#parent.trigger('items.changed');
              this.#parent.trigger('change');
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
        hash: 3295468663,
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
              super((() => config?.properties ? {
                properties: config.properties
              } : {})());
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
              if (typeof data !== 'object') console.trace(data);
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
              this.properties?.forEach(property => {
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
        hash: 4141046561,
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
        hash: 2040082601,
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
            #offline;
            #isNew = false;
            #database;
            #storeName;
            #databaseName;
            #originalData;
            #exists = false;
            get store() {
              return this.#store;
            }
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
              const response = await this.deleteRegistry(this.#registry.values.id);
              return response;
            };
            deleteRegistry = async identifier => {
              const store = this.#database.db[this.#storeName];
              await store.delete(identifier);
              this.triggerEvent();
              return true;
            };
            isPlainObject(obj) {
              if (typeof obj !== 'object' || obj === null) return false;
              for (const key in obj) {
                if (typeof obj[key] === 'function') {
                  return false; // Tiene al menos un método, por lo tanto no es un objeto plano
                }
              }
              return true;
            }
            async #delete(data) {
              const store = this.#database.db[this.#storeName];
              await store.delete(data.id);
              return true;
            }
            async #update(data) {
              const updated = this.#registry.setValues(data);
              if (!updated) return;
              const store = this.#database.db[this.#storeName];
              const plain = this.isPlainObject(data);
              if (!plain) {
                console.warn('Data needs to be a plain object to be saved', data);
                throw new Error('Data needs to be a plain object to be saved');
              }
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
        hash: 1351189020,
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
                let remoteResponse;
                if (this.#parent.isOnline && this.#provider) {
                  const response = await this.#publish(properties);
                  this.#localProvider.registry.setValues(response.data);
                  properties.id = response?.data?.id;
                  remoteResponse = this.#adapter.fromRemote(response);
                  this.#localProvider.registry.isNew = false;
                }
                if (this.#localProvider) {
                  await this.#localProvider.save(properties);
                }
                this.#parent.triggerEvent();
                return this.#adapter.toClient({
                  data: remoteResponse
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwiaXRlbXMiLCJsb2NhbGRiIiwiZWxlbWVudHMiLCJNYXAiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInByb3BlcnRpZXMiLCJzdG9yZU5hbWUiLCJFcnJvciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwic2V0IiwiQ29sbGVjdGlvbkxvY2FsUHJvdmlkZXIiLCJDb2xsZWN0aW9uU2F2ZU1hbmFnZXIiLCJDb2xsZWN0aW9uTG9hZE1hbmFnZXIiLCJvbiIsImxpc3Rlbkl0ZW1zIiwiI2xpc3Rlbkl0ZW1zIiwicHJvY2Vzc0VudHJpZXMiLCJ0cmlnZ2VyIiwic2V0T2ZmbGluZSIsInNldEl0ZW1zIiwidmFsdWVzIiwic3RvcmUiLCJmb3JFYWNoIiwiaWQiLCJkZWxldGUiLCJpZHMiLCJzb2Z0RGVsZXRlIiwiZGVsZXRlSXRlbXMiLCJlIiwiY29uc29sZSIsImxvYWQiLCJhcmdzIiwibG9jYWxMb2FkIiwiZmlsdGVyIiwic2F2ZSIsInN5bmMiLCJwdWJsaXNoIiwidG9TeW5jIiwic2V0RW50cmllcyIsImVudHJpZXMiLCJfZmFjdG9yeSIsImxvYWRlZCIsInBhcmVudEJyaWRnZSIsInJlZ2lzdHJ5IiwicmVtb3RlRGF0YSIsIlJlZ2lzdHJ5RmFjdG9yeSIsInBhcmFtcyIsImxvY2FsRGF0YSIsIm5ld0l0ZW1zIiwidXBkYXRlIiwiY29uY2F0IiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwicmVtb3RlTG9hZCIsImV4YyIsImZldGNoZWQiLCJsYW5kZWQiLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJkZWxldGVkRW50cmllcyIsInVwZGF0ZUxvY2FsSXRlbXMiLCJwcm9taXNlcyIsIm1hcCIsInJlY29yZCIsImhhcyIsInB1c2giLCJpc1JlYWR5IiwiYWxsIiwiaW5kZXgiLCJfY29yZSIsIl9kYXRhYmFzZSIsIl9zYXZlciIsIl9sb2FkZXIiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwiZXhpc3RzIiwiZm91bmQiLCJyZWdpc3RyeUZhY3RvcnkiLCJhcHBseSIsImFjdGl2ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsIkxvY2FsUHJvdmlkZXJMb2FkZXIiLCJwcm9taXNlSW5pdCIsInJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJEQk1hbmFnZXIiLCJMb2NhbFByb3ZpZGVyU2F2ZXIiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwiaW5zdGFuY2VJZCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsIml0ZW1zVG9VcGRhdGUiLCJpc0RlbGV0ZWQiLCJzYXZlQWxsIiwiX2RleGllIiwicHJvbWlzZUxvYWQiLCJsaXN0SXRlbXMiLCJTZXQiLCJjb25kaXRpb25zIiwiY3VzdG9tV2hlcmUiLCJkZWZhdWx0V2hlcmUiLCJvcmRlckJ5IiwiY3VycmVudExpbWl0IiwiY3VycmVudE9mZnNldCIsInBhcmVudFByaXZhdGVQcm9wcyIsInF1YW50aXR5IiwiaXNTYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBlcmZvcm1Mb2FkIiwiI3BlcmZvcm1Mb2FkIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJyZXNvbHZlUHJvbWlzZUxvYWQiLCJsaXZlIiwibGl2ZVF1ZXJ5Iiwid2hlcmUiLCJzdWJzY3JpYmVUb1F1ZXJ5Iiwib2Zmc2V0IiwiaGFzT3duUHJvcGVydHkiLCJpbmRleGVzIiwic2NoZW1hIiwibmFtZSIsImtleXMiLCJrZXkiLCJpbmNsdWRlcyIsImNvbGxlY3Rpb24iLCJxdWVyeSIsImkiLCJ0b0FycmF5IiwiY3VzdG9tRmlsdGVyIiwiY2FsbGJhY2siLCIjc3Vic2NyaWJlVG9RdWVyeSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwiaGFuZGxlUXVlcnlSZXNwb25zZSIsImVyciIsIiNoYW5kbGVRdWVyeVJlc3BvbnNlIiwic2FtZVF1ZXJ5Iiwic29ydCIsImEiLCJiIiwiY3VycmVudE1hcCIsImFkZCIsImNsZWFudXBJdGVtcyIsIiNjbGVhbnVwSXRlbXMiLCIjcmVzb2x2ZVByb21pc2VMb2FkIiwiX3JlZ2lzdHJ5IiwiYmF0Y2hlcyIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIl9pbmRleCIsIlVzZXJQcm92aWRlciIsIkJvb2siLCJJdGVtIiwiX3NhdmUiLCJsb2NhbEZpZWxkcyIsInNrZWxldG9uIiwidW5pcXVlIiwiX19nZXQiLCJfX2luc3RhbmNlSWQiLCJjaGVja1JlYWR5Iiwib2JqZWN0UmVhZHkiLCJwcm9taXNlUmVhZHkiLCJpbml0UHJvbWlzZSIsImNvbmZpZyIsIiNzdGFydCIsImJpbmQiLCJzcGNzIiwiTG9jYWxQcm92aWRlciIsIkl0ZW1TYXZlTWFuYWdlciIsIkl0ZW1Mb2FkTWFuYWdlciIsImluaXRpYWxpc2UiLCJvblJlYWR5IiwidHJhY2UiLCJ0b0l0ZXJhdGUiLCJmaWVsZCIsImdldFByb3BlcnR5TmFtZXMiLCJmb3JjZVN5bmMiLCJzYW1lIiwib3JpZ2luYWwiLCJpc05hTiIsInBhcnNlSW50IiwibG9hZE1ldGhvZCIsImlzTmV3IiwiZmFjdG9yeVJlZ2lzdHJ5IiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwiZ2V0UmVnaXN0cnkiLCJkZWVwQ29tcGFyZSIsIm9iajEiLCJvYmoyIiwia2V5czEiLCJrZXlzMiIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsImlzT2JqZWN0Iiwib2JqZWN0IiwiaXNVbnB1Ymxpc2hlZCIsIiNpc1VucHVibGlzaGVkIiwidG9Db21wYXJlIiwiYXJlRXF1YWwiLCJsaXN0ZW5SZWdpc3RyeSIsImNyZWF0ZSIsIiNsaXN0ZW5SZWdpc3RyeSIsImR1cGxpY2F0ZWQiLCJ2YWxpZGF0ZVVuaXF1ZUZpZWxkcyIsImZpZWxkcyIsImNoZWNrUHJvbWlzZXMiLCJ0aGVuIiwiZHVwbGljYXRlRmllbGRzIiwiZGVsZXRlUmVnaXN0cnkiLCJpZGVudGlmaWVyIiwiaXNQbGFpbk9iamVjdCIsIm9iaiIsIiNkZWxldGUiLCIjdXBkYXRlIiwidXBkYXRlZCIsInBsYWluIiwicHV0IiwibG9jYWxVcGRhdGUiLCJyZW1vdGVSZXNwb25zZSIsInByb3BzIiwiQ29sbGVjdGlvblByb3ZpZGVyIiwiSXRlbVByb3ZpZGVyIiwic3RvcmVzIiwiZGJOYW1lIiwicmVnaXN0ZXJMaXN0IiwicmVnaXN0cmllcyIsImhhc0l0ZW0iLCJnZXRTdG9yZSIsIiNnZXRTdG9yZSIsImRicyIsIl91dWlkIiwia2V5SWQiLCJ2NCIsIm5ld1ZhbHVlcyIsImlzRGVsZWxldGVkIiwiU3RvcmVSZWNvcmRzIiwic3RvcmVGYWN0b3J5Il0sInNvdXJjZXMiOlsiL2FkYXB0ZXIvZGVmYXVsdC50cyIsIi9hZGFwdGVyL2luZGV4LnRzIiwiL2ludGVyZmFjZS50cyIsIi9hZGFwdGVyL2xlZ2FjeS50cyIsIi9jYWNoZS9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NoaWxkcmVuLWNvbnN0cnVjdG9yLXByb3BzLnRzIiwiL2NvbGxlY3Rpb24udHMiLCIvY29sbGVjdGlvbi9sb2FkLnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci9sb2FkZXIudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci9zYXZlci50cyIsIi9jb2xsZWN0aW9uL3B1Ymxpc2gudHMiLCIvZXhhbXBsZS9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi9pdGVtL2luZGV4LnRzIiwiL2NvbmZpZy50cyIsIi9pdGVtLnRzIiwiL2l0ZW0vbG9hZC50cyIsIi9pdGVtL2xvY2FsLXByb3ZpZGVyLnRzIiwiL2l0ZW0vc2F2ZS50cyIsIi9wcm92aWRlcnMvY29sbGVjdGlvbi50cyIsIi9wcm92aWRlcnMvaXRlbS50cyIsIi9yZWdpc3RyeS9mYWN0b3J5LnRzIiwiL3JlZ2lzdHJ5L2luZGV4LnRzIiwiL3JlZ2lzdHJ5L3N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUVNLE1BQU9BLGNBQWM7WUFDMUJDLFFBQVFBLENBQUNDLElBQVM7Y0FDakIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBRyxVQUFVQSxDQUFDSCxJQUFTO2NBQ25CLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7WUFFQUksY0FBY0EsQ0FBQ0osSUFBUztjQUN2QixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCOztVQUNBSyxPQUFBLENBQUFQLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkRCxJQUFBUSxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFhTSxNQUFPRyxlQUFlO1lBQzNCLE9BQU9DLEdBQUdBLENBQUNDLE1BQU0sRUFBRUMsUUFBNkI7Y0FDL0NBLFFBQVEsR0FBR0EsUUFBUSxHQUFHQSxRQUFRLEdBQUdQLFNBQUEsQ0FBQVEsY0FBYyxDQUFDQyxPQUFPO2NBQ3ZELE1BQU1DLE9BQU8sR0FBR0gsUUFBUSxLQUFLLFNBQVMsR0FBR0wsUUFBQSxDQUFBVixjQUFjLEdBQUdXLE9BQUEsQ0FBQVEsYUFBYTtjQUN2RSxPQUFPLElBQUlELE9BQU8sQ0FBQ0osTUFBTSxDQUFDO1lBQzNCOztVQUNBUCxPQUFBLENBQUFLLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7VUNyQkQ7O1VBRUFRLE1BQUEsQ0FBQUMsY0FBQSxDQUFBZCxPQUFBO1lBQ0FlLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNjTSxNQUFPSCxhQUFhO1lBQ3pCLENBQUFMLE1BQU87WUFDUFMsWUFBWVQsTUFBTTtjQUNqQixJQUFJLENBQUMsQ0FBQUEsTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBQ0FiLFFBQVFBLENBQUM7Y0FBRXVCLEtBQUs7Y0FBRXRCO1lBQUksSUFBYyxFQUFFO2NBQ3JDLElBQUlzQixLQUFLLEVBQUU7Z0JBQ1YsT0FBTztrQkFBRUMsTUFBTSxFQUFFLEtBQUs7a0JBQUVELEtBQUssRUFBRTtvQkFBRUUsT0FBTyxFQUFFRjtrQkFBSztnQkFBRSxDQUFFOztjQUdwRCxPQUFPO2dCQUFFQyxNQUFNLEVBQUUsSUFBSTtnQkFBRXZCO2NBQUksQ0FBRTtZQUM5QjtZQUVBRyxVQUFVQSxDQUFDc0IsUUFBaUI7Y0FDM0IsTUFBTTtnQkFBRUYsTUFBTTtnQkFBRXZCLElBQUk7Z0JBQUVzQixLQUFLO2dCQUFFRTtjQUFPLENBQUUsR0FBR0MsUUFBUTtjQUVqRCxJQUFJLENBQUNGLE1BQU0sRUFBRTtnQkFDWixJQUFJQyxPQUFPLEVBQUUsTUFBTUEsT0FBTztnQkFDMUIsTUFBTSxPQUFPRixLQUFLLEtBQUssUUFBUSxHQUFHQSxLQUFLLEdBQUcsa0JBQWtCOztjQUc3RCxPQUFPdEIsSUFBSTtZQUNaO1lBRUFJLGNBQWNBLENBQUNKLElBQVM7Y0FDdkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3Qjs7VUFDQUssT0FBQSxDQUFBWSxhQUFBLEdBQUFBLGFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NELElBQUFTLE1BQUEsR0FBQW5CLE9BQUE7VUFFTSxNQUFPb0IsWUFBYSxTQUFRRCxNQUFBLENBQUFFLGFBQTJCO1VBQUd2QixPQUFBLENBQUFzQixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDRmhFLElBQUFELE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBc0IsY0FBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF1QixRQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLEtBQUEsR0FBQXhCLE9BQUE7VUFHQSxJQUFBeUIsUUFBQSxHQUFBekIsT0FBQTtVQUlPO1VBQVcsTUFBTzBCLFVBQVcsU0FBUVAsTUFBQSxDQUFBRSxhQUF5QjtZQUtwRU0sRUFBRTtZQUNGQyxJQUFJO1lBRUosQ0FBQUMsS0FBTSxHQUEyQixFQUFFO1lBQ3pCQyxPQUFPLEdBQVksSUFBSTtZQUVqQyxDQUFBQyxRQUFTLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3JCLElBQUlELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSUYsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxJQUFJSSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUNBLGFBQWEsQ0FBQ0QsUUFBUTtZQUNoRTtZQUNBLElBQUlKLEtBQUtBLENBQUNoQixLQUE2QjtjQUN0QyxJQUFJLENBQUNzQixLQUFLLENBQUNDLE9BQU8sQ0FBQ3ZCLEtBQUssQ0FBQyxFQUFFO2dCQUMxQjs7Y0FFRCxJQUFJLENBQUMsQ0FBQWdCLEtBQU0sR0FBR2hCLEtBQUs7Y0FDbkIsSUFBSSxDQUFDd0IsWUFBWSxFQUFFO1lBQ3BCO1lBRUFDLFFBQVEsR0FBUSxFQUFFO1lBQ2xCQyxLQUFLLEdBQVcsQ0FBQztZQUNqQkMsSUFBSTtZQUNKLENBQUFOLGFBQWM7WUFDZCxJQUFJQSxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGFBQWM7WUFDM0I7WUFFQSxDQUFBTyxXQUFZO1lBQ1osQ0FBQUMsV0FBWTtZQUNaLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVVQyxNQUFNLEdBQVcsSUFBSTtZQUNyQkMsYUFBYSxHQUFtQixLQUFLO1lBRS9DLENBQUFDLGVBQWdCO1lBQ2hCLElBQUlBLGVBQWVBLENBQUE7Y0FDbEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsZUFBZ0I7WUFDN0I7WUFDQSxDQUFBQyxZQUFhO1lBQ2JqQyxZQUFZa0MsS0FBdUI7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTTtjQUFDLENBQUUsQ0FBQztjQUV4QyxNQUFNO2dCQUFFTixRQUFRO2dCQUFFTyxTQUFTO2dCQUFFdkIsRUFBRTtnQkFBRUcsT0FBTztnQkFBRUY7Y0FBSSxDQUFFLEdBQUdvQixLQUFLO2NBQ3hELElBQUksQ0FBQyxDQUFBRCxZQUFhLEdBQUdDLEtBQUs7Y0FDMUIsSUFBSUUsU0FBUyxFQUFFLElBQUksQ0FBQ0EsU0FBUyxHQUFHQSxTQUFTO2NBQ3pDLElBQUl2QixFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFLEdBQUdBLEVBQUU7Y0FDcEIsSUFBSUcsT0FBTyxFQUFFLElBQUksQ0FBQ0EsT0FBTyxHQUFHQSxPQUFPO2NBQ25DLElBQUlGLElBQUksRUFBRSxJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtjQUMxQixJQUFJZSxRQUFRLEVBQUU7Z0JBQ2IsSUFBSSxPQUFPQSxRQUFRLEtBQUssVUFBVSxFQUFFO2tCQUNuQyxNQUFNLElBQUlRLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQzs7Z0JBRW5ELElBQUksQ0FBQyxDQUFBUixRQUFTLEdBQUcsSUFBSUEsUUFBUSxFQUFFOztjQUVoQyxJQUFJLENBQUNTLGFBQWEsQ0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2NBQ3pDLElBQUksQ0FBQ0MsSUFBSSxFQUFFO1lBQ1o7WUFFVUEsSUFBSUEsQ0FBQTtjQUNiLE1BQU1DLFdBQVcsR0FBR0MsUUFBUSxJQUFHO2dCQUM5QixPQUFPLElBQUksQ0FBQ0EsUUFBUSxDQUFDO2NBQ3RCLENBQUM7Y0FDRCxNQUFNQyxXQUFXLEdBQUdBLENBQUNELFFBQVEsRUFBRTFDLEtBQUssS0FBTSxJQUFJLENBQUMwQyxRQUFRLENBQUMsR0FBRzFDLEtBQU07Y0FDakUsTUFBTTRDLE1BQU0sR0FBRztnQkFBRXJELEdBQUcsRUFBRWtELFdBQVc7Z0JBQUVJLEdBQUcsRUFBRUY7Y0FBVyxDQUFFO2NBQ3JELElBQUksQ0FBQyxDQUFBVixlQUFnQixHQUFHckIsUUFBQSxDQUFBdEIsZUFBZSxDQUFDQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBMkMsWUFBYSxFQUFFdkMsT0FBTyxDQUFDO2NBQzlFLElBQUksQ0FBQyxDQUFBMEIsYUFBYyxHQUFHLElBQUlaLGNBQUEsQ0FBQXFDLHVCQUF1QixDQUFDLElBQUksRUFBRUYsTUFBTSxDQUFDO2NBQy9ELElBQUksQ0FBQyxDQUFBaEIsV0FBWSxHQUFHLElBQUlsQixRQUFBLENBQUFxQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUVILE1BQU0sQ0FBQztjQUMzRCxJQUFJLENBQUMsQ0FBQWYsV0FBWSxHQUFHLElBQUlsQixLQUFBLENBQUFxQyxxQkFBcUIsQ0FBQztnQkFBRXhELE1BQU0sRUFBRSxJQUFJO2dCQUFFb0QsTUFBTTtnQkFBRTNCLE9BQU8sRUFBRSxJQUFJLENBQUNBO2NBQU8sQ0FBRSxDQUFDO2NBQzlGLElBQUksQ0FBQyxDQUFBSSxhQUFjLENBQUM0QixFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBQyxXQUFZLENBQUM7Y0FDMUQsSUFBSSxDQUFDN0IsYUFBYSxDQUFDbUIsSUFBSSxFQUFFO1lBQzFCO1lBRUEsQ0FBQVUsV0FBWSxHQUFHLE1BQUFDLENBQUEsS0FBVztjQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDbEMsT0FBTyxFQUFFO2NBRW5CLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWEsV0FBWSxDQUFDdUIsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBL0IsYUFBYyxDQUFDTCxLQUFLLENBQUM7Y0FDL0UsSUFBSSxDQUFDcUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QixDQUFDO1lBRURDLFVBQVUsR0FBR3RELEtBQUssSUFBSSxJQUFJLENBQUNxQixhQUFhLENBQUNpQyxVQUFVLENBQUN0RCxLQUFLLENBQUM7WUFFaER1RCxRQUFRQSxDQUFDQyxNQUFNO2NBQ3hCLElBQUksQ0FBQyxDQUFBeEMsS0FBTSxHQUFHd0MsTUFBTTtZQUNyQjtZQUVBLE1BQU1DLEtBQUtBLENBQUE7Y0FDVixNQUFNLElBQUksQ0FBQyxDQUFBcEMsYUFBYyxDQUFDbUIsSUFBSSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFuQixhQUFjLENBQUNvQyxLQUFLO1lBQ2pDO1lBRUEsTUFBTVosR0FBR0EsQ0FBQ2pFLElBQUk7Y0FDYixNQUFNO2dCQUFFb0M7Y0FBSyxDQUFFLEdBQUdwQyxJQUFJO2NBQ3RCLE9BQU9BLElBQUksQ0FBQ21DLElBQUk7Y0FDaEIsTUFBTSxLQUFLLENBQUM4QixHQUFHLENBQUNqRSxJQUFJLENBQUM7Y0FFckIsSUFBSSxDQUFDb0MsS0FBSyxFQUFFO2NBRVpBLEtBQUssQ0FBQzBDLE9BQU8sQ0FBQzNDLElBQUksSUFBRztnQkFDcEIsSUFBSUEsSUFBSSxDQUFDNEMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBekMsUUFBUyxDQUFDMkIsR0FBRyxDQUFDOUIsSUFBSSxDQUFDNEMsRUFBRSxFQUFFNUMsSUFBSSxDQUFDO2NBQy9DLENBQUMsQ0FBQztZQUNIO1lBQ0EsTUFBTTZDLE1BQU1BLENBQUNDLEdBQUc7Y0FDZixJQUFJO2dCQUNILElBQUksSUFBSSxDQUFDLENBQUF4QyxhQUFjLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQUEsYUFBYyxDQUFDeUMsVUFBVSxDQUFDRCxHQUFHLENBQUM7Z0JBQ2xFLElBQUksSUFBSSxDQUFDL0IsUUFBUSxFQUFFO2tCQUNsQixNQUFNLElBQUksQ0FBQ0EsUUFBUSxDQUFDaUMsV0FBVyxDQUFDRixHQUFHLENBQUM7O2VBRXJDLENBQUMsT0FBT0csQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUMvRCxLQUFLLENBQUM4RCxDQUFDLENBQUM7O1lBRWxCO1lBRUFFLElBQUlBLENBQUNDLElBQUs7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBdEMsV0FBWSxDQUFDcUMsSUFBSSxDQUFDQyxJQUFJLENBQUM7WUFDcEM7WUFDQUMsU0FBU0EsQ0FBQ0QsSUFBSTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUF0QyxXQUFZLENBQUN1QyxTQUFTLENBQUNELElBQUksQ0FBQztZQUN6QztZQUNBRSxNQUFNLEdBQUlGLElBQUssSUFBSyxJQUFJLENBQUMsQ0FBQXRDLFdBQVksQ0FBQ3dDLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDO1lBQ2xERyxJQUFJLEdBQUdBLENBQUNILElBQUssRUFBRTNCLElBQUssS0FBSyxJQUFJLENBQUMsQ0FBQVosV0FBWSxDQUFDMEMsSUFBSSxDQUFDSCxJQUFJLEVBQUUzQixJQUFJLENBQUM7WUFDM0QrQixJQUFJLEdBQUlKLElBQUssSUFBSyxJQUFJLENBQUMsQ0FBQXZDLFdBQVksQ0FBQzJDLElBQUksQ0FBQ0osSUFBSSxDQUFDO1lBQzlDSyxPQUFPLEdBQUlMLElBQUssSUFBSyxJQUFJLENBQUMsQ0FBQXZDLFdBQVksQ0FBQzRDLE9BQU8sQ0FBQ0wsSUFBSSxDQUFDO1lBQ3BETSxNQUFNLEdBQUdBLENBQUEsS0FBTSxJQUFJLENBQUMsQ0FBQTdDLFdBQVksQ0FBQzZDLE1BQU0sRUFBRTtZQUV6QyxNQUFNQyxVQUFVQSxDQUFDQyxPQUFPO2NBQ3ZCLE1BQU0sSUFBSSxDQUFDTCxJQUFJLENBQUNLLE9BQU8sRUFBRSxJQUFJLENBQUM7Y0FDOUIsTUFBTTNELEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBYSxXQUFZLENBQUN1QixjQUFjLENBQUN1QixPQUFPLEVBQUUsSUFBSSxDQUFDO2NBRW5FM0QsS0FBSyxDQUFDMEMsT0FBTyxDQUFDM0MsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFBRyxRQUFTLENBQUMyQixHQUFHLENBQUM5QixJQUFJLENBQUM0QyxFQUFFLEVBQUU1QyxJQUFJLENBQUMsQ0FBQztjQUN4RCxJQUFJLENBQUMsQ0FBQUMsS0FBTSxHQUFHQSxLQUFLO2NBQ25CLElBQUksQ0FBQ3FDLE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDdEIsT0FBT3JDLEtBQUs7WUFDYjs7VUFDQS9CLE9BQUEsQ0FBQTRCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7VUM5SkQ7O1VBRUFmLE1BQUEsQ0FBQUMsY0FBQSxDQUFBZCxPQUFBO1lBQ0FlLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUYsTUFBQSxDQUFBQyxjQUFBLENBQUFkLE9BQUE7WUFDQWUsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0ZBLElBQUE0RSxRQUFBLEdBQUF6RixPQUFBO1VBWU0sTUFBTzZELHFCQUFxQjtZQUNqQ3FCLE1BQU07WUFDTixDQUFBaEQsYUFBYztZQUNkLENBQUFTLFFBQVM7WUFDVCxDQUFBK0MsTUFBTyxHQUE4QixJQUFJMUQsR0FBRyxFQUFFO1lBQzlDLENBQUEyRCxZQUFhO1lBSWIsQ0FBQXRGLE1BQU87WUFDUCxDQUFBdUYsUUFBUztZQUNULENBQUFwRixPQUFRO1lBQ1IsQ0FBQXNCLE9BQVE7WUFFUixJQUFJekIsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFVXdGLFVBQVUsR0FBRyxFQUFFO1lBQ3pCL0UsWUFBWTtjQUFFVCxNQUFNO2NBQUVvRCxNQUFNO2NBQUUzQjtZQUFPLENBQTZCO2NBQ2pFLElBQUksQ0FBQyxDQUFBekIsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBc0YsWUFBYSxHQUFHbEMsTUFBTTtjQUMzQixJQUFJLENBQUMsQ0FBQTNCLE9BQVEsR0FBR0EsT0FBTztjQUN2QixJQUFJLENBQUMsQ0FBQXRCLE9BQVEsR0FBRyxJQUFJLENBQUMsQ0FBQUgsTUFBTyxDQUFDeUMsZUFBZTtjQUU1QyxJQUFJLENBQUNPLElBQUksRUFBRTtZQUNaO1lBRUFBLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQW5CLGFBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQXlELFlBQWEsQ0FBQ3ZGLEdBQUcsQ0FBQyxlQUFlLENBQUM7Y0FDN0QsSUFBSSxDQUFDLENBQUF1QyxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFnRCxZQUFhLENBQUN2RixHQUFHLENBQUMsVUFBVSxDQUFDO2NBRW5ELElBQUksQ0FBQyxDQUFBd0YsUUFBUyxHQUFHSCxRQUFBLENBQUFLLGVBQWUsQ0FBQzFGLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQXVGLFlBQWEsQ0FBQ3ZGLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxRTtZQUVBLENBQUE2RSxTQUFVLEdBQUcsTUFBTWMsTUFBTSxJQUFHO2NBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTdELGFBQWMsRUFBRTtjQUUxQixNQUFNOEQsU0FBUyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQTlELGFBQWMsQ0FBQzZDLElBQUksQ0FBQ2dCLE1BQU0sQ0FBQyxLQUFLO2dCQUFFdEcsSUFBSSxFQUFFO2NBQUUsQ0FBRTtjQUMxRSxNQUFNd0csUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDaEMsY0FBYyxDQUFDK0IsU0FBUyxDQUFDdkcsSUFBSSxDQUFDO2NBQzFELElBQUlvQyxLQUFLLEdBQUdrRSxNQUFNLENBQUNHLE1BQU0sS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDN0YsTUFBTSxDQUFDd0IsS0FBSyxDQUFDc0UsTUFBTSxDQUFDRixRQUFRLENBQUMsR0FBR0EsUUFBUTtjQUVsRixNQUFNaEQsVUFBVSxHQUFrQjtnQkFDakNtRCxXQUFXLEVBQUUsSUFBSTtnQkFDakJDLFFBQVEsRUFBRSxLQUFLO2dCQUNmOUQsS0FBSyxFQUFFeUQsU0FBUyxDQUFDekQsS0FBSyxJQUFJLENBQUM7Z0JBQzNCQyxJQUFJLEVBQUUsQ0FBQyxDQUFDd0QsU0FBUyxDQUFDeEQsSUFBSTtnQkFDdEJYO2VBQ0E7Y0FFRCxJQUFJbUUsU0FBUyxDQUFDeEQsSUFBSSxFQUFFUyxVQUFVLENBQUNULElBQUksR0FBR3dELFNBQVMsQ0FBQ3hELElBQUk7Y0FFcEQsSUFBSSxDQUFDLENBQUFuQyxNQUFPLENBQUNxRixNQUFNLEdBQUcsSUFBSTtjQUMxQixJQUFJLENBQUNyRixNQUFNLENBQUNxRCxHQUFHLENBQUNULFVBQVUsQ0FBQztjQUUzQixPQUFPLElBQUksQ0FBQyxDQUFBekMsT0FBUSxDQUFDaEIsUUFBUSxDQUFDO2dCQUFFQyxJQUFJLEVBQUVvQztjQUFLLENBQUUsQ0FBQztZQUMvQyxDQUFDO1lBRUQsQ0FBQXlFLElBQUssR0FBRyxDQUFDO1lBQ1QsQ0FBQUMsY0FBZSxHQUFHLEVBQUU7WUFDcEJ0QixTQUFTLEdBQUcsTUFBQUEsQ0FBT2MsTUFBQSxHQUFjLEVBQUUsS0FBSTtjQUN0QyxJQUFJO2dCQUNILE9BQU8sSUFBSSxDQUFDLENBQUFkLFNBQVUsQ0FBQ2MsTUFBTSxDQUFDO2VBQzlCLENBQUMsT0FBT2xCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDL0QsS0FBSyxDQUFDOEQsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBRURFLElBQUksR0FBRyxNQUFBQSxDQUFPZ0IsTUFBQSxHQUFjLEVBQUUsS0FBSTtjQUNqQyxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBMUYsTUFBTyxDQUFDZ0csUUFBUSxHQUFHLElBQUk7Z0JBQzVCLE1BQU07a0JBQUU3RDtnQkFBSSxDQUFFLEdBQUcsSUFBSSxDQUFDbkMsTUFBTTtnQkFDNUIsSUFBSTtrQkFBRW1HLEtBQUssR0FBRyxDQUFDO2tCQUFFTjtnQkFBTSxDQUFFLEdBQUdILE1BQU07Z0JBQ2xDQSxNQUFNLENBQUNVLEtBQUssR0FBR1YsTUFBTSxDQUFDVSxLQUFLLElBQUksRUFBRTtnQkFDakNELEtBQUssR0FBR04sTUFBTSxLQUFLLElBQUksSUFBSTFELElBQUksR0FBR0EsSUFBSSxHQUFHZ0UsS0FBSztnQkFDOUMsSUFBSU4sTUFBTSxFQUFFO2tCQUNYLElBQUksQ0FBQyxDQUFBSSxJQUFLLEVBQUU7a0JBQ1pQLE1BQU0sQ0FBQ1MsS0FBSyxHQUFHQSxLQUFLOztnQkFHckIsSUFBSSxJQUFJLENBQUMsQ0FBQWIsWUFBYSxDQUFDdkYsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2tCQUN0QyxNQUFNc0csYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF6QixTQUFVLENBQUNjLE1BQU0sQ0FBQztrQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBMUYsTUFBTyxDQUFDNEIsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFVLFFBQVMsRUFBRSxPQUFPK0QsYUFBYTs7Z0JBR3BFLE1BQU07a0JBQUV6RCxVQUFVO2tCQUFFcEI7Z0JBQUssQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUE4RSxVQUFXLENBQUNaLE1BQU0sQ0FBQztnQkFFNUQsSUFBSSxDQUFDMUYsTUFBTSxDQUFDcUQsR0FBRyxDQUFDVCxVQUFVLENBQUM7Z0JBQzNCLElBQUksQ0FBQzVDLE1BQU0sQ0FBQ2dDLFlBQVksRUFBRTtnQkFFMUIsT0FBTyxJQUFJLENBQUMsQ0FBQTdCLE9BQVEsQ0FBQ2hCLFFBQVEsQ0FBQztrQkFBRUMsSUFBSSxFQUFFb0M7Z0JBQUssQ0FBRSxDQUFDO2VBQzlDLENBQUMsT0FBTytFLEdBQUcsRUFBRTtnQkFDYixJQUFJLENBQUN2RyxNQUFNLENBQUNnQyxZQUFZLEVBQUU7Z0JBQzFCeUMsT0FBTyxDQUFDL0QsS0FBSyxDQUFDNkYsR0FBRyxDQUFDO2dCQUNsQixPQUFPLElBQUksQ0FBQyxDQUFBcEcsT0FBUSxDQUFDaEIsUUFBUSxDQUFDO2tCQUFFdUIsS0FBSyxFQUFFNkY7Z0JBQUcsQ0FBRSxDQUFDO2VBQzdDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLENBQUF2RyxNQUFPLENBQUNnRyxRQUFRLEdBQUcsS0FBSztnQkFDN0IsSUFBSSxDQUFDLENBQUFoRyxNQUFPLENBQUN3RyxPQUFPLEdBQUcsSUFBSTtnQkFDM0IsSUFBSSxDQUFDLENBQUF4RyxNQUFPLENBQUN5RyxNQUFNLEdBQUcsSUFBSTs7WUFFNUIsQ0FBQztZQUVELENBQUFILFVBQVcsR0FBRyxNQUFPWixNQUEyQixJQUFJO2NBQ25ELE1BQU03RSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXlCLFFBQVMsQ0FBQ29FLElBQUksQ0FBQ2hCLE1BQU0sQ0FBQztjQUNsRCxNQUFNdEcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFBZSxPQUFRLENBQUNaLFVBQVUsQ0FBQ3NCLFFBQVEsQ0FBQztjQUUvQyxNQUFNVyxLQUFLLEdBQW9CLE1BQU0sSUFBSSxDQUFDbUYsb0JBQW9CLENBQUN2SCxJQUFJLENBQUM7Y0FFcEUsSUFBSSxDQUFDb0csVUFBVSxHQUFHM0UsUUFBUTtjQUUxQixJQUFJLENBQUMsQ0FBQXFGLGNBQWUsR0FBR1IsTUFBTSxDQUFDRyxNQUFNLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFBSyxjQUFlLENBQUNKLE1BQU0sQ0FBQ3RFLEtBQUssQ0FBQyxHQUFHQSxLQUFLO2NBRTFGLE1BQU1vQixVQUFVLEdBQUc7Z0JBQ2xCcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBMEUsY0FBZTtnQkFDM0IvRCxJQUFJLEVBQUUvQyxJQUFJLENBQUMrQyxJQUFJO2dCQUNma0QsTUFBTSxFQUFFLElBQUk7Z0JBQ1pXLFFBQVEsRUFBRSxLQUFLO2dCQUNmOUQsS0FBSyxFQUFFOUMsSUFBSSxDQUFDOEMsS0FBSyxJQUFJO2VBQ3JCO2NBQ0QsT0FBTztnQkFBRVUsVUFBVTtnQkFBRXBCO2NBQUssQ0FBRTtZQUM3QixDQUFDO1lBRUQsTUFBTW1GLG9CQUFvQkEsQ0FBQ3ZILElBQTRCO2NBQ3RELElBQUksQ0FBQ0EsSUFBSSxDQUFDK0YsT0FBTyxJQUFJLENBQUMvRixJQUFJLENBQUNvQyxLQUFLLEVBQUU7Z0JBQ2pDLE1BQU0sSUFBSXNCLEtBQUssQ0FBQyxnRUFBZ0UsQ0FBQzs7Y0FHbEYsTUFBTXBCLFFBQVEsR0FBR3RDLElBQUksQ0FBQ29DLEtBQUssR0FBR3BDLElBQUksQ0FBQ29DLEtBQUssR0FBR3BDLElBQUksQ0FBQytGLE9BQU87Y0FDdkQsSUFBSS9GLElBQUksQ0FBQ3dILGNBQWMsRUFBRTtnQkFDeEI7Z0JBQ0EsSUFBSSxDQUFDLENBQUEvRSxhQUFjLENBQUN5QyxVQUFVLENBQUNsRixJQUFJLENBQUN3SCxjQUFjLENBQUM7O2NBR3BELElBQUksSUFBSSxDQUFDLENBQUFuRixPQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQUksYUFBYyxDQUFDaUQsSUFBSSxDQUFDcEQsUUFBUSxDQUFDO2NBQzNELE9BQU8sSUFBSSxDQUFDa0MsY0FBYyxDQUFDbEMsUUFBUSxDQUFDO1lBQ3JDO1lBRUE7Ozs7Ozs7O1lBUUFrQyxjQUFjLEdBQUcsTUFBQUEsQ0FBT3VCLE9BQW9CLEVBQUUwQixnQkFBZ0IsR0FBRyxLQUFLLEtBQTBCO2NBQy9GO2NBQ0EsTUFBTUMsUUFBUSxHQUFHLEVBQUU7Y0FDbkIsTUFBTXRGLEtBQUssR0FBRzJELE9BQU8sQ0FBQzRCLEdBQUcsQ0FBQ0MsTUFBTSxJQUFHO2dCQUNsQzs7O2dCQUlBLElBQUksSUFBSSxDQUFDLENBQUEzQixNQUFPLENBQUM0QixHQUFHLENBQUNELE1BQU0sQ0FBQzdDLEVBQUUsQ0FBQyxFQUFFO2tCQUNoQyxNQUFNNUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFBOEQsTUFBTyxDQUFDdEYsR0FBRyxDQUFDaUgsTUFBTSxDQUFDN0MsRUFBRSxDQUFDO2tCQUN4QzJDLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDM0YsSUFBSSxDQUFDNEYsT0FBTyxDQUFDO2tCQUMzQixPQUFPNUYsSUFBSTs7Z0JBR1osTUFBTW9CLEtBQUssR0FBOEM7a0JBQUV3QixFQUFFLEVBQUU2QyxNQUFNLENBQUM3QyxFQUFFO2tCQUFFLEdBQUc2QztnQkFBTSxDQUFFO2dCQUNyRixJQUFJSCxnQkFBZ0IsRUFBRWxFLEtBQUssQ0FBQ0MsVUFBVSxHQUFHb0UsTUFBTTtnQkFFL0MsTUFBTXpGLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQ3ZCLE1BQU0sQ0FBQ3VCLElBQUksQ0FBQ29CLEtBQUssQ0FBQztnQkFDeENtRSxRQUFRLENBQUNJLElBQUksQ0FBQzNGLElBQUksQ0FBQzRGLE9BQU8sQ0FBQztnQkFDM0IsSUFBSSxDQUFDLENBQUE5QixNQUFPLENBQUNoQyxHQUFHLENBQUMyRCxNQUFNLENBQUM3QyxFQUFFLEVBQUU1QyxJQUFJLENBQUM7Z0JBQ2pDLE9BQU9BLElBQUk7Y0FDWixDQUFDLENBQUM7Y0FFRixNQUFNbEMsT0FBTyxDQUFDK0gsR0FBRyxDQUFDTixRQUFRLENBQUM7Y0FDM0J0RixLQUFLLENBQUMwQyxPQUFPLENBQUMsQ0FBQzNDLElBQUksRUFBRThGLEtBQUssS0FBSTtnQkFDN0I5RixJQUFJLENBQUM4QixHQUFHLENBQUM4QixPQUFPLENBQUNrQyxLQUFLLENBQUMsRUFBRVIsZ0JBQWdCLENBQUM7Y0FDM0MsQ0FBQyxDQUFDO2NBRUYsT0FBT3JGLEtBQUs7WUFDYixDQUFDO1lBRUQ4RSxVQUFVLEdBQUcsTUFBTVosTUFBTSxJQUFHO2NBQzNCLE1BQU03RSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXlCLFFBQVMsQ0FBQ29DLElBQUksQ0FBQ2dCLE1BQU0sQ0FBQztjQUNsRCxJQUFJLENBQUM3RSxRQUFRLENBQUNGLE1BQU0sRUFBRSxNQUFNLGtCQUFrQjtjQUM5QyxPQUFPRSxRQUFRLENBQUN6QixJQUFJO1lBQ3JCLENBQUM7O1VBQ0RLLE9BQUEsQ0FBQStELHFCQUFBLEdBQUFBLHFCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25NRCxJQUFBMUMsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUEySCxLQUFBLEdBQUEzSCxPQUFBO1VBQ0EsSUFBQTRILFNBQUEsR0FBQTVILE9BQUE7VUFFQSxJQUFBeUYsUUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUE2SCxNQUFBLEdBQUE3SCxPQUFBO1VBQ0EsSUFBQThILE9BQUEsR0FBQTlILE9BQUE7VUFTTztVQUFVLE1BQU8yRCx1QkFBd0IsU0FBUXhDLE1BQUEsQ0FBQUUsYUFBc0M7WUFNN0YsQ0FBQVksUUFBUyxHQUFHOEYsVUFBVSxDQUFDQyxTQUFTLENBQUNDLE1BQU07WUFFdkMsQ0FBQUMsT0FBUTtZQUNSLENBQUFDLFFBQVM7WUFDVCxDQUFBakYsU0FBVTtZQUNWLENBQUFrRixZQUFhO1lBQ2IsQ0FBQTFGLFdBQVk7WUFDWixDQUFBMkYsTUFBTyxHQUFHLEtBQUs7WUFDZixDQUFBQyxLQUFNLEdBQUcsS0FBSztZQUNkLENBQUEzRyxFQUFHO1lBQ0gsQ0FBQTRHLGVBQWdCO1lBQ2hCLENBQUFsSSxNQUFPO1lBQ1AsQ0FBQW9DLFdBQVk7WUFDWixDQUFBWCxPQUFRO1lBQ1IsQ0FBQXdDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLENBQUFrRSxLQUFNLEdBQVksSUFBSTtZQUN0QixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBOzs7WUFHQSxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxDQUFBNUcsS0FBTSxHQUFHLEVBQUU7WUFDWCxJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUF1QyxRQUFTLEdBQUd2QyxLQUFLLElBQUc7Y0FDbkIsSUFBSSxDQUFDLENBQUFBLEtBQU0sR0FBR0EsS0FBSztZQUNwQixDQUFDO1lBRUQsSUFBSUksUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBaUcsT0FBUSxJQUFJLENBQUNRLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQ3JGO1lBRUE3SCxZQUNDVCxNQUFrQixFQUNsQm9ELE1BR0M7Y0FFRCxLQUFLLEVBQUU7Y0FDUCxNQUFNO2dCQUFFOUIsRUFBRTtnQkFBRXVCO2NBQVMsQ0FBRSxHQUFHN0MsTUFBTTtjQUNoQyxJQUFJLENBQUMsQ0FBQUEsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQ3lCLE9BQU8sR0FBRzJCLE1BQU0sQ0FBQ3JELEdBQUcsQ0FBQyxTQUFTLENBQUM7Y0FFcEMsSUFBSSxDQUFDLElBQUksQ0FBQzBCLE9BQU8sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLENBQUEwRyxLQUFNLEdBQUcsS0FBSztnQkFDbkI7O2NBRUQsSUFBSTdHLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTRHLGVBQWdCLEdBQUc5QyxRQUFBLENBQUFLLGVBQWUsQ0FBQzFGLEdBQUcsQ0FBQ3VCLEVBQUUsQ0FBQztjQUV2RCxJQUFJLENBQUMsQ0FBQXlHLFlBQWEsR0FBR3pHLEVBQUU7Y0FDdkIsSUFBSSxDQUFDLENBQUF1QixTQUFVLEdBQUdBLFNBQVM7Y0FFM0I2RSxVQUFVLENBQUNhLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDO2NBQzVEZCxVQUFVLENBQUNhLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDO2NBRTdELElBQUksQ0FBQyxDQUFBbkcsV0FBWSxHQUFHLElBQUlvRixPQUFBLENBQUFnQixtQkFBbUIsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pEeEUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBQSxLQUFNO2dCQUNsQkYsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBQTtlQUNmLENBQUM7WUFDSDtZQUVBRCxVQUFVQSxDQUFDdEQsS0FBYztjQUN4QixJQUFJLENBQUMsQ0FBQXFILE9BQVEsR0FBR3JILEtBQUs7Y0FDckIsSUFBSSxDQUFDd0IsWUFBWSxFQUFFO1lBQ3BCO1lBRUEsQ0FBQTBHLFdBQVk7WUFDWjFGLElBQUksR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDakIsSUFBSTtnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFtRixLQUFNLEVBQUU7a0JBQ2pCLElBQUksQ0FBQ1EsS0FBSyxHQUFHLElBQUk7a0JBQ2pCOztnQkFFRCxJQUFJLElBQUksQ0FBQyxDQUFBRCxXQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtnQkFDL0MsSUFBSSxDQUFDLENBQUFBLFdBQVksR0FBRyxJQUFJcEIsS0FBQSxDQUFBc0IsY0FBYyxFQUFFO2dCQUV4QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFiLFlBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBbEYsU0FBVSxFQUFFO2tCQUM1QyxJQUFJLENBQUMsQ0FBQXVGLE1BQU8sR0FBRyxLQUFLO2tCQUNwQixJQUFJLENBQUMsQ0FBQU0sV0FBWSxDQUFDcEosT0FBTyxFQUFFO2tCQUMzQjs7Z0JBR0QsTUFBTXdJLFFBQVEsR0FBb0IsTUFBTVAsU0FBQSxDQUFBc0IsU0FBUyxDQUFDOUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBZ0ksWUFBYSxDQUFDO2dCQUN6RSxJQUFJLENBQUMsQ0FBQUQsUUFBUyxHQUFHQSxRQUFRO2dCQUN6QixJQUFJLENBQUMsQ0FBQTdELEtBQU0sR0FBRzZELFFBQVEsQ0FBQ3hHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQXVCLFNBQVUsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBb0IsS0FBTSxFQUFFO2tCQUNqQixNQUFNLElBQUluQixLQUFLLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQUQsU0FBVSxvQ0FBb0MsSUFBSSxDQUFDLENBQUFrRixZQUFhLEVBQUUsQ0FBQzs7Z0JBR3RHLElBQUksQ0FBQyxDQUFBM0YsV0FBWSxHQUFHLElBQUlvRixNQUFBLENBQUFzQixrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7a0JBQ2hEWixlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUFBLGVBQWdCO2tCQUN0Q3JGLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQUEsU0FBVTtrQkFDMUJpRixRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFBO2lCQUNmLENBQUM7Z0JBRUYsSUFBSSxDQUFDYSxLQUFLLEdBQUcsSUFBSTtnQkFDakIsSUFBSSxDQUFDLENBQUFELFdBQVksQ0FBQ3BKLE9BQU8sRUFBRTtlQUMzQixDQUFDLE9BQU9rRixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQy9ELEtBQUssQ0FBQzhELENBQUMsQ0FBQzs7WUFFbEIsQ0FBQztZQUVPZ0UsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTSxJQUFJLENBQUN4RyxZQUFZLEVBQUU7WUFFcEQsTUFBTStHLE1BQU1BLENBQUMzSixJQUFtQixFQUFFNEosWUFBbUI7Y0FDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBYixLQUFNLEVBQUU7Y0FDbEIsT0FBTyxJQUFJLENBQUMsQ0FBQUwsUUFBUyxDQUFDeEcsRUFBRSxDQUFDMkgsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUNoRixLQUFLLEVBQUUsWUFBVztnQkFDakUsTUFBTWlGLGlCQUFpQixHQUFHLElBQUl2SCxHQUFHLEVBQWtCO2dCQUNuRHZDLElBQUksQ0FBQzhFLE9BQU8sQ0FBQzNDLElBQUksSUFBRztrQkFDbkIySCxpQkFBaUIsQ0FBQzdGLEdBQUcsQ0FBQzlCLElBQUksQ0FBQzRILFVBQVUsRUFBRTVILElBQUksQ0FBQzRDLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQyxDQUFDO2dCQUVGLE1BQU0sSUFBSSxDQUFDRixLQUFLLENBQUNtRixPQUFPLENBQUNoSyxJQUFJLENBQUM7Y0FDL0IsQ0FBQyxDQUFDO1lBQ0g7WUFFQSxNQUFNa0YsVUFBVUEsQ0FBQ0QsR0FBRztjQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE4RCxLQUFNLEVBQUU7Y0FDbEIsSUFBSSxDQUFDckcsS0FBSyxDQUFDQyxPQUFPLENBQUNzQyxHQUFHLENBQUMsRUFBRTtnQkFDeEJJLE9BQU8sQ0FBQy9ELEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQztnQkFDN0QsT0FBTztrQkFBRUMsTUFBTSxFQUFFLEtBQUs7a0JBQUV2QixJQUFJLEVBQUU7Z0JBQUUsQ0FBRTs7Y0FFbkMsSUFBSTtnQkFDSCxNQUFNaUssT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDcEYsS0FBSyxDQUFDcUYsT0FBTyxDQUFDakYsR0FBRyxDQUFDO2dCQUM3QyxNQUFNa0YsZUFBZSxHQUFHRixPQUFPLENBQUN4RSxNQUFNLENBQUNtQyxNQUFNLElBQUlBLE1BQU0sS0FBS3dDLFNBQVMsQ0FBQztnQkFDdEUsSUFBSSxDQUFDRCxlQUFlLENBQUNFLE1BQU0sRUFBRTtnQkFDN0I7Z0JBQ0EsTUFBTUMsYUFBYSxHQUFHSCxlQUFlLENBQUN4QyxHQUFHLENBQUNDLE1BQU0sS0FBSztrQkFBRSxHQUFHQSxNQUFNO2tCQUFFMkMsU0FBUyxFQUFFO2dCQUFDLENBQUUsQ0FBQyxDQUFDO2dCQUNsRjtnQkFDQSxNQUFNLElBQUksQ0FBQyxDQUFBMUYsS0FBTSxDQUFDbUYsT0FBTyxDQUFDTSxhQUFhLENBQUM7Z0JBRXhDLE9BQU8sSUFBSTtlQUNYLENBQUMsT0FBT2hKLEtBQUssRUFBRTtnQkFDZitELE9BQU8sQ0FBQy9ELEtBQUssQ0FBQyxnREFBZ0QsRUFBRUEsS0FBSyxDQUFDO2dCQUN0RSxPQUFPO2tCQUFFQyxNQUFNLEVBQUUsS0FBSztrQkFBRUQsS0FBSyxFQUFFQSxLQUFLLENBQUNFO2dCQUFPLENBQUU7O1lBRWhEO1lBRUFrRSxJQUFJLEdBQUcxRixJQUFJLElBQUksSUFBSSxDQUFDLENBQUFnRCxXQUFZLENBQUMwQyxJQUFJLENBQUMxRixJQUFJLENBQUM7WUFDM0N3SyxPQUFPLEdBQUdBLENBQUNwSSxLQUFLLEVBQUVxQixTQUFTLEtBQUssSUFBSSxDQUFDLENBQUFULFdBQVksQ0FBQ3dILE9BQU8sQ0FBQ3BJLEtBQUssRUFBRXFCLFNBQVMsQ0FBQztZQUMzRTZCLElBQUksR0FBR2dCLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQXJELFdBQVksQ0FBQ3FDLElBQUksQ0FBQ2dCLE1BQU0sQ0FBQzs7VUFDL0NqRyxPQUFBLENBQUE2RCx1QkFBQSxHQUFBQSx1QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5S0QsSUFBQWdFLEtBQUEsR0FBQTNILE9BQUE7VUFFQSxJQUFBa0ssTUFBQSxHQUFBbEssT0FBQTtVQUVNLE1BQU84SSxtQkFBbUI7WUFDL0IsQ0FBQXpJLE1BQU87WUFDUCxDQUFBOEosV0FBWTtZQUNaLENBQUFwRSxNQUFPO1lBQ1AsQ0FBQXFFLFNBQVUsR0FBRyxJQUFJcEksR0FBRyxFQUFFO1lBQ3RCLENBQUFPLEtBQU07WUFDTixDQUFBK0QsSUFBSyxHQUFHLENBQUM7WUFDVCxDQUFBNUIsR0FBSSxHQUFHLElBQUkyRixHQUFHLEVBQUU7WUFDaEIsQ0FBQUMsVUFBVyxHQUFhLENBQUMsSUFBSSxDQUFDO1lBQzlCLENBQUFsRyxRQUFTO1lBRVQsQ0FBQW1HLFdBQVk7WUFDWixDQUFBQyxZQUFhLEdBQUdsRyxLQUFLLElBQUlBLEtBQUssQ0FBQ21HLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDNUMsQ0FBQUMsWUFBYTtZQUNiLENBQUFDLGFBQWM7WUFFZDdKLFlBQVlULE1BQStCLEVBQUV1SyxrQkFBa0I7Y0FDOUQsSUFBSSxDQUFDLENBQUF2SyxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUErRCxRQUFTLEdBQUd3RyxrQkFBa0IsQ0FBQ3hHLFFBQVE7WUFDN0M7WUFFQSxDQUFBeUcsUUFBUyxHQUFHLENBQUM7WUFDYixNQUFNOUYsSUFBSUEsQ0FBQ2dCLE1BQTJCO2NBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTFGLE1BQU8sQ0FBQ21JLEtBQUssRUFBRTtjQUN6QixNQUFNc0MsTUFBTSxHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQWpGLE1BQU8sQ0FBQyxLQUFLZ0YsSUFBSSxDQUFDQyxTQUFTLENBQUNqRixNQUFNLENBQUM7Y0FDdEUsSUFBSStFLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQVgsV0FBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7Y0FFekQsSUFBSSxDQUFDLENBQUFBLFdBQVksR0FBRyxJQUFJeEMsS0FBQSxDQUFBc0IsY0FBYyxFQUFFO2NBQ3hDLE1BQU0sSUFBSSxDQUFDLENBQUE1SSxNQUFPLENBQUNnRCxJQUFJLEVBQUU7Y0FFekIsT0FBTyxJQUFJLENBQUMsQ0FBQTRILFdBQVksQ0FBQ2xGLE1BQU0sQ0FBQztZQUNqQztZQUVBLE1BQU0sQ0FBQWtGLFdBQVlDLENBQUNuRixNQUE4QjtjQUNoRCxJQUFJO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQXhELEtBQU0sRUFBRSxJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFsQyxNQUFPLENBQUNpRSxLQUFLLENBQUM2RyxLQUFLLEVBQUU7Z0JBQ2hFLElBQUkxRSxLQUFLLEdBQUdWLE1BQU0sQ0FBQ1UsS0FBSyxJQUFJLEVBQUU7Z0JBQzlCLE1BQU0yRSxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBL0ksS0FBTSxHQUFHa0UsS0FBSyxDQUFDO2dCQUNqRCxJQUFJMkUsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFBOUUsSUFBSyxFQUFFO2tCQUM1QixJQUFJLENBQUMsQ0FBQWlGLGtCQUFtQixFQUFFO2tCQUMxQjs7Z0JBRUQsTUFBTUMsSUFBSSxHQUFHLElBQUF0QixNQUFBLENBQUF1QixTQUFTLEVBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUMzRixNQUFNLEVBQUVVLEtBQUssQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsQ0FBQUgsSUFBSyxFQUFFO2dCQUVaLE9BQU8sSUFBSSxDQUFDLENBQUFxRixnQkFBaUIsQ0FBQ0gsSUFBSSxFQUFFekYsTUFBTSxFQUFFcUYsVUFBVSxDQUFDO2VBQ3ZELENBQUMsT0FBT3JLLEtBQUssRUFBRTtnQkFDZitELE9BQU8sQ0FBQy9ELEtBQUssQ0FBQywwQ0FBMEMsRUFBRUEsS0FBSyxDQUFDO2dCQUNoRSxPQUFPO2tCQUFFQyxNQUFNLEVBQUUsS0FBSztrQkFBRXZCLElBQUksRUFBRTtnQkFBRSxDQUFFOztZQUVwQztZQUVBaU0sS0FBSyxHQUFHQSxDQUFDM0YsTUFBTSxFQUFFVSxLQUFLLEtBQUk7Y0FDekIsT0FBTyxZQUFXO2dCQUNqQixJQUFJbkMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBakUsTUFBTyxDQUFDaUUsS0FBSztnQkFDOUIsTUFBTTtrQkFBRTFCO2dCQUFNLENBQUUsR0FBR21ELE1BQU07Z0JBQ3pCLE1BQU02RixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQXRGLElBQUssR0FBRyxDQUFDLElBQUlHLEtBQUs7Z0JBQ3ZDLElBQUl6RCxLQUFLLEdBQUc7a0JBQUUsR0FBRytDO2dCQUFNLENBQUU7Z0JBRXpCLElBQUkvQyxLQUFLLENBQUM2SSxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7a0JBQ2xDN0ksS0FBSyxHQUFHO29CQUFFLEdBQUdBLEtBQUs7b0JBQUUsR0FBR0EsS0FBSyxDQUFDMEk7a0JBQUssQ0FBRTtrQkFDcEMsT0FBTzFJLEtBQUssQ0FBQzBJLEtBQUs7O2dCQUduQixNQUFNSSxPQUFPLEdBQUd4SCxLQUFLLENBQUN5SCxNQUFNLENBQUNELE9BQU8sQ0FBQzFFLEdBQUcsQ0FBQ00sS0FBSyxJQUFJQSxLQUFLLENBQUNzRSxJQUFJLENBQUM7Z0JBQzdEckwsTUFBTSxDQUFDc0wsSUFBSSxDQUFDakosS0FBSyxDQUFDLENBQUN1QixPQUFPLENBQUMySCxHQUFHLElBQUc7a0JBQ2hDLENBQUNKLE9BQU8sQ0FBQ0ssUUFBUSxDQUFDRCxHQUFHLENBQUMsSUFBSSxPQUFPbEosS0FBSyxDQUFDa0osR0FBRyxDQUFDO2dCQUM1QyxDQUFDLENBQUM7Z0JBRUYsTUFBTUUsVUFBVSxHQUFHekwsTUFBTSxDQUFDc0wsSUFBSSxDQUFDakosS0FBSyxDQUFDLENBQUM4RyxNQUFNLEtBQUssQ0FBQyxHQUFHeEYsS0FBSyxHQUFJQSxLQUFLLENBQUNvSCxLQUFLLENBQUMxSSxLQUFLLENBQWE7Z0JBQzVGLElBQUlxSixLQUFLLEdBQUdELFVBQXdCO2dCQUVwQyxJQUFJLENBQUMsQ0FBQTFCLFlBQWEsR0FBR2pFLEtBQUs7Z0JBQzFCLElBQUksQ0FBQyxDQUFBa0UsYUFBYyxHQUFHaUIsTUFBTTtnQkFDNUI7OztnQkFJQSxJQUFJaEosTUFBTSxFQUFFLE1BQU15SixLQUFLLENBQUN6SixNQUFNLENBQUNBLE1BQU0sQ0FBQztnQkFDdEN5SixLQUFLLEdBQUdBLEtBQUssQ0FBQ25ILE1BQU0sQ0FBQ29ILENBQUMsSUFBSUEsQ0FBQyxDQUFDdEMsU0FBUyxLQUFLLENBQUMsQ0FBQztnQkFDNUMsTUFBTTNGLE1BQU0sR0FBRyxNQUFNZ0ksS0FBSyxDQUFDVCxNQUFNLENBQUNBLE1BQU0sQ0FBQyxDQUFDbkYsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQzhGLE9BQU8sRUFBRTtnQkFDaEUsT0FBT2xJLE1BQU07Y0FDZCxDQUFDO1lBQ0YsQ0FBQztZQUVEbUksWUFBWSxHQUFJQyxRQUFrQixJQUFJO2NBQ3JDLElBQUksQ0FBQyxDQUFBbEMsV0FBWSxHQUFHa0MsUUFBUTtjQUM1QixPQUFPLElBQUksQ0FBQyxDQUFBcE0sTUFBTztZQUNwQixDQUFDO1lBRUQsTUFBTSxDQUFBc0wsZ0JBQWlCZSxDQUFDakIsU0FBMEIsRUFBRTFGLE1BQThCLEVBQUVxRixVQUFrQjtjQUNyRyxJQUFJdUIsV0FBbUI7Y0FDdkJsQixTQUFTLENBQUNtQixTQUFTLENBQUM7Z0JBQ25CcEssSUFBSSxFQUFFLE1BQU1YLEtBQUssSUFBRztrQkFDbkIsTUFBTVgsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUEyTCxtQkFBb0IsQ0FBQ2hMLEtBQUssRUFBRWtFLE1BQU0sRUFBRXFGLFVBQVUsRUFBRXVCLFdBQVcsQ0FBQztrQkFDeEYsSUFBSSxDQUFDLENBQUFwQixrQkFBbUIsQ0FBQ3JLLFFBQVEsQ0FBQztnQkFDbkMsQ0FBQztnQkFDREgsS0FBSyxFQUFFK0wsR0FBRyxJQUFHO2tCQUNaaEksT0FBTyxDQUFDL0QsS0FBSyxDQUFDK0wsR0FBRyxDQUFDO2tCQUNsQixJQUFJLENBQUMsQ0FBQXZCLGtCQUFtQixDQUFDO29CQUFFdkssTUFBTSxFQUFFLEtBQUs7b0JBQUV2QixJQUFJLEVBQUU7a0JBQUUsQ0FBRSxDQUFDO2dCQUN0RDtlQUNBLENBQUM7Y0FDRixPQUFPLElBQUksQ0FBQyxDQUFBMEssV0FBWTtZQUN6QjtZQUVBOzs7Ozs7OztZQVFBLE1BQU0sQ0FBQTBDLG1CQUFvQkUsQ0FDekJsTCxLQUErQixFQUMvQmtFLE1BQThCLEVBQzlCcUYsVUFBa0IsRUFDbEJ1QixXQUFtQjtjQUVuQixJQUFJSyxTQUFrQjtjQUN0QixJQUFJLENBQUMsQ0FBQW5DLFFBQVMsRUFBRTtjQUVoQixJQUFJOUUsTUFBTSxDQUFDbkQsTUFBTSxFQUFFZixLQUFLLENBQUNvTCxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtELENBQUMsQ0FBQ25ILE1BQU0sQ0FBQ25ELE1BQU0sQ0FBQyxHQUFHdUssQ0FBQyxDQUFDcEgsTUFBTSxDQUFDbkQsTUFBTSxDQUFDLENBQUM7Y0FDNUUsSUFBSSxDQUFDbUYsVUFBVSxDQUFDdEksSUFBSSxFQUFFc0ksVUFBVSxDQUFDdEksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2NBRTVDLElBQUlrTixXQUFXLEtBQUssSUFBSSxDQUFDLENBQUFyRyxJQUFLLEVBQUUwRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQzVDTCxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUFyRyxJQUFLO2NBRTdCLElBQUkwRyxTQUFTLElBQUluTCxLQUFLLENBQUNpSSxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUF6SixNQUFPLENBQUN3QixLQUFLLENBQUNpSSxNQUFNLEVBQUU7Y0FFN0QsTUFBTXNELFVBQVUsR0FBRyxJQUFJL0MsR0FBRyxFQUFtQjtjQUU3Q3hJLEtBQUssQ0FBQzBDLE9BQU8sQ0FBQzNDLElBQUksSUFBRztnQkFDcEIsSUFBSSxDQUFDLENBQUF3SSxTQUFVLENBQUMxRyxHQUFHLENBQUM5QixJQUFJLENBQUM0QyxFQUFFLEVBQUU1QyxJQUFJLENBQUM7Z0JBQ2xDd0wsVUFBVSxDQUFDQyxHQUFHLENBQUN6TCxJQUFJLENBQUM0QyxFQUFFLENBQUM7Y0FDeEIsQ0FBQyxDQUFDO2NBRUYsSUFBSSxDQUFDLENBQUE4SSxZQUFhLENBQUNGLFVBQVUsQ0FBQztjQUU5QixJQUFJLENBQUMsQ0FBQWhKLFFBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFnRyxTQUFVLENBQUMvRixNQUFNLEVBQUUsQ0FBQyxDQUFDO2NBQzdDeEMsS0FBSyxDQUFDMEMsT0FBTyxDQUFDM0MsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFBOEMsR0FBSSxDQUFDMkksR0FBRyxDQUFDekwsSUFBSSxDQUFDNEMsRUFBRSxDQUFDLENBQUM7Y0FDN0MsSUFBSSxDQUFDLENBQUFuRSxNQUFPLENBQUM2RCxPQUFPLENBQUMsZUFBZSxDQUFDO2NBQ3JDLElBQUksQ0FBQyxDQUFBN0QsTUFBTyxDQUFDNkQsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUU5QixPQUFPO2dCQUNObEQsTUFBTSxFQUFFLElBQUk7Z0JBQ1p2QixJQUFJLEVBQUVvQyxLQUFLO2dCQUNYVSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUFBLEtBQU07Z0JBQ2xCQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE4RCxJQUFLLEdBQUcsQ0FBQyxJQUFJOEUsVUFBVSxHQUFHdkIsU0FBUyxHQUFHO2VBQ2pEO1lBQ0Y7WUFFQSxDQUFBeUQsWUFBYUMsQ0FBQ0gsVUFBZ0M7Y0FDN0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBaEQsU0FBVSxDQUFDNkIsSUFBSSxFQUFFLENBQUMsQ0FBQzFILE9BQU8sQ0FBQ0MsRUFBRSxJQUFHO2dCQUN4QyxJQUFJLENBQUM0SSxVQUFVLENBQUM5RixHQUFHLENBQUM5QyxFQUFFLENBQUMsRUFBRTtrQkFDeEIsSUFBSSxDQUFDLENBQUE0RixTQUFVLENBQUMzRixNQUFNLENBQUNELEVBQUUsQ0FBQzs7Y0FFNUIsQ0FBQyxDQUFDO1lBQ0g7WUFFQSxDQUFBK0csa0JBQW1CaUMsQ0FBQ3RNLFFBQVEsR0FBRyxFQUFFO2NBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWlKLFdBQVksRUFBRTtjQUV4QixJQUFJLENBQUMsQ0FBQUEsV0FBWSxDQUFDeEssT0FBTyxDQUFDdUIsUUFBUSxDQUFDO2NBQ25DLElBQUksQ0FBQyxDQUFBaUosV0FBWSxHQUFHLElBQUk7WUFDekI7O1VBQ0FySyxPQUFBLENBQUFnSixtQkFBQSxHQUFBQSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6S0QsSUFBQTJFLFNBQUEsR0FBQXpOLE9BQUE7VUFJTSxNQUFPbUosa0JBQWtCO1lBQzlCLENBQUF1RSxPQUFRLEdBQUcsR0FBRztZQUNkLENBQUFyTixNQUFPO1lBRVAsQ0FBQWtJLGVBQWdCO1lBQ2hCLENBQUFyRixTQUFVO1lBQ1YsQ0FBQWlGLFFBQVM7WUFDVHJILFlBQVlULE1BQStCLEVBQUVzRixZQUFZO2NBQ3hELElBQUksQ0FBQyxDQUFBdEYsTUFBTyxHQUFHQSxNQUFNO2NBRXJCLElBQUksQ0FBQyxDQUFBa0ksZUFBZ0IsR0FBRzVDLFlBQVksQ0FBQzRDLGVBQWU7Y0FDcEQsSUFBSSxDQUFDLENBQUFyRixTQUFVLEdBQUd5QyxZQUFZLENBQUN6QyxTQUFTO2NBQ3hDLElBQUksQ0FBQyxDQUFBaUYsUUFBUyxHQUFHeEMsWUFBWSxDQUFDd0MsUUFBUTtZQUN2QztZQUVBLE1BQU1oRCxJQUFJQSxDQUFDMUYsSUFBNEI7Y0FDdEMsTUFBTWtPLE9BQU8sR0FBR0EsQ0FBQ25JLE9BQStCLEVBQUUwQyxPQUFPLEdBQUcsQ0FBQyxLQUFJO2dCQUNoRSxPQUFPMUMsT0FBTyxDQUFDNEIsR0FBRyxDQUFDeEYsSUFBSSxJQUFHO2tCQUN6QixNQUFNeUYsTUFBTSxHQUNYekYsSUFBSSxDQUFDZ00sYUFBYSxJQUFJLE9BQU9oTSxJQUFJLENBQUNnTSxhQUFhLEtBQUssVUFBVSxHQUFHaE0sSUFBSSxDQUFDZ00sYUFBYSxFQUFFLEdBQUdoTSxJQUFJO2tCQUM3RixNQUFNaU0sTUFBTSxHQUFHO29CQUFFLEdBQUd4RyxNQUFNO29CQUFFYSxPQUFPO29CQUFFc0IsVUFBVSxFQUFFNUgsSUFBSSxDQUFDNEg7a0JBQVUsQ0FBRTtrQkFDbEUsT0FBT3FFLE1BQU07Z0JBQ2QsQ0FBQyxDQUFDO2NBQ0gsQ0FBQztjQUVEcE8sSUFBSSxHQUFHa08sT0FBTyxDQUFDbE8sSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBWSxNQUFPLENBQUM0QixRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztjQUVuRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE1QixNQUFPLENBQUNtSSxLQUFLLEVBQUU7Y0FDekIsTUFBTSxJQUFJLENBQUMsQ0FBQUQsZUFBZ0IsQ0FBQ2xGLElBQUksRUFBRTtjQUNsQyxNQUFNLElBQUksQ0FBQzRHLE9BQU8sQ0FBQ3hLLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQXlELFNBQVUsQ0FBQztZQUMxQztZQUVBOzs7Ozs7Ozs7O1lBV0EsTUFBTStHLE9BQU9BLENBQUNwSSxLQUFLLEVBQUVxQixTQUFpQjtjQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE3QyxNQUFPLENBQUNtSSxLQUFLLEVBQUU7Y0FDekIsTUFBTXpHLFFBQVEsR0FBR0YsS0FBSyxDQUFDdUYsR0FBRyxDQUFDeEYsSUFBSSxJQUFHO2dCQUNqQyxNQUFNZ0UsUUFBUSxHQUFHLElBQUk2SCxTQUFBLENBQUFLLFFBQVEsQ0FBQzVLLFNBQVMsQ0FBQztnQkFDeEMsSUFBSXRCLElBQUksQ0FBQ21NLE9BQU8sRUFBRTtrQkFDakJuSSxRQUFRLENBQUNvRSxTQUFTLEdBQUcsSUFBSTs7Z0JBRTFCcEUsUUFBUSxDQUFDb0ksU0FBUyxDQUFDcE0sSUFBSSxDQUFDO2dCQUN4QixPQUFPZ0UsUUFBUTtjQUNoQixDQUFDLENBQUM7Y0FFRixNQUFNdEIsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBNkQsUUFBUyxDQUFDeEcsRUFBRSxDQUFDdUIsU0FBUyxDQUFDO2NBQzFDLE1BQU1pRSxRQUFRLEdBQUcsRUFBRTtjQUNuQixNQUFNOEcsTUFBTSxHQUFHLEVBQUU7Y0FFakIsT0FBT2xNLFFBQVEsQ0FBQytILE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLE1BQU1vRSxLQUFLLEdBQUduTSxRQUFRLENBQUNvTSxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBVCxPQUFRLENBQUM7Z0JBQy9DLE1BQU1qTyxJQUFJLEdBQUd5TyxLQUFLLENBQUM5RyxHQUFHLENBQUN4RixJQUFJLElBQUlBLElBQUksQ0FBQ3dNLFNBQVMsRUFBRSxDQUFDO2dCQUNoREgsTUFBTSxDQUFDMUcsSUFBSSxDQUFDOUgsSUFBSSxDQUFDO2dCQUVqQjBILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDakQsS0FBSyxDQUFDbUYsT0FBTyxDQUFDaEssSUFBSSxDQUFDLENBQUM7O2NBRW5DLElBQUk7Z0JBQ0gsTUFBTTRPLE9BQU8sR0FBRyxNQUFNM08sT0FBTyxDQUFDNE8sVUFBVSxDQUFDbkgsUUFBUSxDQUFDO2dCQUNsRCxNQUFNb0gsUUFBUSxHQUFHQSxDQUFDQyxNQUFNLEVBQUU5RyxLQUFLLE1BQU07a0JBQUUsR0FBRzhHLE1BQU07a0JBQUU5RyxLQUFLO2tCQUFFakksSUFBSSxFQUFFd08sTUFBTSxDQUFDdkcsS0FBSztnQkFBQyxDQUFFLENBQUM7Z0JBQy9FLE1BQU0rRyxNQUFNLEdBQUdKLE9BQU8sQ0FBQ2pILEdBQUcsQ0FBQ21ILFFBQVEsQ0FBQyxDQUFDckosTUFBTSxDQUFDc0osTUFBTSxJQUFJQSxNQUFNLENBQUN4TixNQUFNLEtBQUssVUFBVSxDQUFDO2dCQUNuRixJQUFJLENBQUN5TixNQUFNLENBQUMzRSxNQUFNLEVBQUUsT0FBTztrQkFBRTlJLE1BQU0sRUFBRTtnQkFBSSxDQUFFLENBQUMsS0FDdkM7a0JBQ0osT0FBTztvQkFBRUEsTUFBTSxFQUFFLEtBQUs7b0JBQUV5TjtrQkFBTSxDQUFFOztlQUVqQyxDQUFDLE9BQU81SixDQUFDLEVBQUU7Z0JBQ1gsT0FBTztrQkFBRTdELE1BQU0sRUFBRSxLQUFLO2tCQUFFeU4sTUFBTSxFQUFFNUo7Z0JBQUMsQ0FBRTs7WUFFckM7O1VBQ0EvRSxPQUFBLENBQUFxSixrQkFBQSxHQUFBQSxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1RUssTUFBT3ZGLHFCQUFxQjtZQUNqQyxDQUFBdkQsTUFBTztZQUNQLENBQUFvRCxNQUFPO1lBSVAsQ0FBQXZCLGFBQWM7WUFDZCxDQUFBUyxRQUFTO1lBQ1QsQ0FBQWIsT0FBUTtZQUNFNE0sV0FBVyxHQUFHLENBQUM7WUFDZkMsVUFBVSxHQUFHLEdBQUc7WUFDMUIsQ0FBQW5PLE9BQVE7WUFDUk0sWUFDQ1QsTUFBa0IsRUFDbEJvRCxNQUdDO2NBRUQsSUFBSSxDQUFDLENBQUFwRCxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFvRCxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFqRCxPQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFILE1BQU8sQ0FBQ3lDLGVBQWU7Y0FDNUMsSUFBSSxDQUFDTyxJQUFJLEVBQUU7WUFDWjtZQUVBQSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUF2QixPQUFRLEdBQUcsSUFBSSxDQUFDLENBQUEyQixNQUFPLENBQUNyRCxHQUFHLENBQUMsU0FBUyxDQUFDO2NBQzNDLElBQUksSUFBSSxDQUFDLENBQUEwQixPQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxDQUFBSSxhQUFjLEdBQUcsSUFBSSxDQUFDLENBQUF1QixNQUFPLENBQUNyRCxHQUFHLENBQUMsZUFBZSxDQUFDO2VBQ3ZELE1BQU07Z0JBQ04wRSxPQUFPLENBQUM4SixJQUFJLENBQUMsbUNBQW1DLENBQUM7O2NBR2xELElBQUksQ0FBQyxDQUFBak0sUUFBUyxHQUFHLElBQUksQ0FBQyxDQUFBYyxNQUFPLENBQUNyRCxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQzlDO1lBRUE7Ozs7OztZQU1BK0UsSUFBSSxHQUFHLE1BQUFBLENBQU8xRixJQUFJLEdBQUcsRUFBRSxFQUFFNEQsSUFBSSxHQUFHLEtBQUssS0FBNkI7Y0FDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBdkIsT0FBUSxFQUFFLE9BQU8sSUFBSTtjQUMvQixNQUFNLElBQUksQ0FBQyxDQUFBSSxhQUFjLENBQUNtQixJQUFJLEVBQUU7Y0FFaEMsTUFBTSxJQUFJLENBQUMsQ0FBQW5CLGFBQWMsQ0FBQ2lELElBQUksQ0FBQzFGLElBQUksQ0FBQztZQUNyQyxDQUFDO1lBRUQ0RixPQUFPLEdBQUcsTUFBQUEsQ0FBTzVGLElBQUksR0FBRyxFQUFFLEtBQXNCO2NBQy9DLElBQUk7Z0JBQ0gsTUFBTSxJQUFJLENBQUMwRixJQUFJLENBQUMxRixJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWtELFFBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQWMsTUFBTyxDQUFDckQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUV0RCxNQUFNYyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXlCLFFBQVMsQ0FBQ2tNLFFBQVEsQ0FBQ3BQLElBQUksQ0FBQztnQkFDcEQsSUFBSSxDQUFDeUIsUUFBUSxDQUFDRixNQUFNLEVBQUUsTUFBTUUsUUFBUSxDQUFDSCxLQUFLO2dCQUUxQyxPQUFPLElBQUksQ0FBQyxDQUFBUCxPQUFRLENBQUNoQixRQUFRLENBQUM7a0JBQUV3QixNQUFNLEVBQUU7Z0JBQUksQ0FBRSxDQUFDO2VBQy9DLENBQUMsT0FBT0QsS0FBSyxFQUFFO2dCQUNmK0QsT0FBTyxDQUFDL0QsS0FBSyxDQUFDQSxLQUFLLENBQUM7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLENBQUFQLE9BQVEsQ0FBQ2hCLFFBQVEsQ0FBQztrQkFBRXVCO2dCQUFLLENBQUUsQ0FBQzs7WUFFMUMsQ0FBQztZQUVEO1lBQ0ErTixTQUFTLEdBQUcsTUFBT0MsS0FBc0IsSUFBSTtjQUM1QyxNQUFNN04sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF5QixRQUFTLENBQUNrTSxRQUFRLENBQUNFLEtBQUssQ0FBQztjQUVyRDtjQUVBLElBQUk3TixRQUFRLENBQUNGLE1BQU0sRUFBRTtnQkFDcEIsTUFBTXZCLElBQUksR0FBR3lCLFFBQVEsQ0FBQ3pCLElBQUksQ0FBQytGLE9BQU8sQ0FBQzRCLEdBQUcsQ0FBQ3hGLElBQUksS0FBSztrQkFBRSxHQUFHQSxJQUFJO2tCQUFFc0csT0FBTyxFQUFFLENBQUM7a0JBQUVzQixVQUFVLEVBQUVLO2dCQUFTLENBQUUsQ0FBQyxDQUFDO2dCQUVoRyxNQUFNLElBQUksQ0FBQyxDQUFBM0gsYUFBYyxDQUFDa0gsTUFBTSxDQUFDM0osSUFBSSxFQUFFc1AsS0FBSyxDQUFDO2dCQUM3QyxPQUFPO2tCQUFFQyxPQUFPLEVBQUUsSUFBSTtrQkFBRUQsS0FBSztrQkFBRTdOO2dCQUFRLENBQUU7O2NBRzFDLE9BQU87Z0JBQUU4TixPQUFPLEVBQUUsS0FBSztnQkFBRUQsS0FBSztnQkFBRTdOO2NBQVEsQ0FBRTtZQUMzQyxDQUFDO1lBRUQ7WUFDQStOLG1CQUFtQixHQUFHeFAsSUFBSSxJQUFHO2NBQzVCLE1BQU13TyxNQUFNLEdBQUcsRUFBRTtjQUNqQixLQUFLLElBQUkzQixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc3TSxJQUFJLENBQUNxSyxNQUFNLEVBQUV3QyxDQUFDLElBQUksSUFBSSxDQUFDcUMsVUFBVSxFQUFFO2dCQUN0RFYsTUFBTSxDQUFDMUcsSUFBSSxDQUFDOUgsSUFBSSxDQUFDeVAsS0FBSyxDQUFDNUMsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDcUMsVUFBVSxDQUFDLENBQUM7O2NBRWhELE9BQU9WLE1BQU07WUFDZCxDQUFDO1lBRUQ3SSxJQUFJLEdBQUcsTUFBTTNGLElBQUksSUFBRztjQUNuQixNQUFNLElBQUksQ0FBQyxDQUFBeUMsYUFBYyxDQUFDbUIsSUFBSSxFQUFFO2NBQ2hDLElBQUksQ0FBQzVELElBQUksRUFBRUEsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFZLE1BQU8sQ0FBQzZCLGFBQWEsQ0FBQ29DLEtBQUssQ0FBQ29ILEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQ3lELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzVDLE9BQU8sRUFBRTtjQUU3RixNQUFNMEIsTUFBTSxHQUFHLElBQUksQ0FBQ2dCLG1CQUFtQixDQUFDeFAsSUFBSSxDQUFDO2NBQzdDLE1BQU0yUCxZQUFZLEdBQUcsRUFBRTtjQUN2QixNQUFNQyxhQUFhLEdBQUcsRUFBRTtjQUV4QixLQUFLLE1BQU0sR0FBR04sS0FBSyxDQUFDLElBQUlkLE1BQU0sQ0FBQ3pJLE9BQU8sRUFBRSxFQUFFO2dCQUN6QyxNQUFNZ0osTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDTSxTQUFTLENBQUNDLEtBQUssQ0FBQztnQkFDMUMsSUFBSSxDQUFDUCxNQUFNLENBQUNRLE9BQU8sRUFBRTtrQkFDcEJJLFlBQVksQ0FBQzdILElBQUksQ0FBQ2lILE1BQU0sQ0FBQztpQkFDekIsTUFBTWEsYUFBYSxDQUFDOUgsSUFBSSxDQUFDaUgsTUFBTSxDQUFDOztjQUdsQyxJQUFJLENBQUMsQ0FBQS9LLE1BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7Y0FDN0IsTUFBTSxJQUFJLENBQUMsQ0FBQXJELE1BQU8sQ0FBQzBFLElBQUksRUFBRTtjQUN6QixJQUFJcUssWUFBWSxDQUFDdEYsTUFBTSxFQUFFO2dCQUN4QixNQUFNN0ksT0FBTyxHQUFHbU8sWUFBWSxDQUFDdEYsTUFBTSxLQUFLbUUsTUFBTSxDQUFDbkUsTUFBTSxHQUFHLGFBQWEsR0FBRyxpQkFBaUI7Z0JBRXpGLE9BQU8sSUFBSSxDQUFDLENBQUF0SixPQUFRLENBQUNoQixRQUFRLENBQUM7a0JBQUVDLElBQUksRUFBRTtvQkFBRWdQLE1BQU0sRUFBRVcsWUFBWTtvQkFBRUosT0FBTyxFQUFFSyxhQUFhO29CQUFFdE8sS0FBSyxFQUFFRTtrQkFBTztnQkFBRSxDQUFFLENBQUM7O2NBRzFHLE9BQU8sSUFBSSxDQUFDLENBQUFULE9BQVEsQ0FBQ2hCLFFBQVEsQ0FBQztnQkFBRUMsSUFBSSxFQUFFNFA7Y0FBYSxDQUFFLENBQUM7WUFDdkQsQ0FBQztZQUVEL0osTUFBTSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNuQixJQUFJO2dCQUNILE1BQU0sSUFBSSxDQUFDLENBQUFwRCxhQUFjLENBQUNtQixJQUFJLEVBQUU7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFuQixhQUFjLENBQUNvQyxLQUFLLENBQUNvSCxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUN5RCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM1QyxPQUFPLEVBQUU7ZUFDckUsQ0FBQyxPQUFPMUgsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUMvRCxLQUFLLENBQUM4RCxDQUFDLENBQUM7O1lBRWxCLENBQUM7O1VBQ0QvRSxPQUFBLENBQUE4RCxxQkFBQSxHQUFBQSxxQkFBQTs7Ozs7Ozs7Ozs7VUxqSUQ7O1VBRUFqRCxNQUFBLENBQUFDLGNBQUEsQ0FBQWQsT0FBQTtZQUNBZSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VNSkEsSUFBQXlPLE1BQUEsR0FBQXRQLE9BQUE7VUFHQSxNQUFNdVAsWUFBWTtVQU9YO1VBQVcsTUFDWkMsSUFBSyxTQUFRRixNQUFBLENBQUFHLElBQVc7WUFDbkJ4TSxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7WUFFeERuQyxZQUFZO2NBQUUwRCxFQUFFLEdBQUdxRjtZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRXJGLEVBQUU7Z0JBQUV0QixTQUFTLEVBQUUsTUFBTTtnQkFBRXZCLEVBQUUsRUFBRTtjQUFNLENBQUUsQ0FBQztZQUM3Qzs7VUFDQTdCLE9BQUEsQ0FBQTBQLElBQUEsR0FBQUEsSUFBQTs7Ozs7Ozs7Ozs7VUNqQkQ7O1VBRUE3TyxNQUFBLENBQUFDLGNBQUEsQ0FBQWQsT0FBQTtZQUNBZSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQU0sTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFzQixjQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQTBQLEtBQUEsR0FBQTFQLE9BQUE7VUFDQSxJQUFBd0IsS0FBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUEySCxLQUFBLEdBQUEzSCxPQUFBO1VBR0EsSUFBQXlCLFFBQUEsR0FBQXpCLE9BQUE7VUFJTztVQUFVLE1BQU95UCxJQUFRLFNBQVF0TyxNQUFBLENBQUFFLGFBQW9CO1lBTTNEbUQsRUFBRTtZQUdRMUMsT0FBTztZQUNqQixDQUFBYSxRQUFTO1lBQ0NPLFNBQVM7WUFDVHZCLEVBQUU7WUFDWmdPLFdBQVcsR0FBRyxFQUFFO1lBQ2hCLENBQUEzSixTQUFVO1lBQ1Y7OztZQUdBLENBQUE0SixRQUFTLEdBQWtCLEVBQUU7WUFDN0IxTixhQUFhO1lBRUgyTixNQUFNLEdBQWtCLEVBQUU7WUFFcEMsQ0FBQXBOLFdBQVk7WUFFWixJQUFJbU4sUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFUUUsS0FBS0EsQ0FBQ3ZNLFFBQVE7Y0FDckIsT0FBTyxJQUFJLENBQUNBLFFBQVEsQ0FBQztZQUN0QjtZQUVBLElBQUlaLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQXFILFNBQVUsR0FBRyxDQUFDO1lBQ2QsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3pCO1lBRUEsSUFBSTFGLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQ3BDLGFBQWEsQ0FBQ29DLEtBQUs7WUFDaEM7WUFFQSxJQUFJckMsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDQyxhQUFhLENBQUNELFFBQVEsSUFBSSxDQUFDeUcsWUFBWSxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDaEY7WUFFQSxJQUFJb0gsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDN04sYUFBYSxDQUFDNk4sWUFBWTtZQUN2QztZQUVBLElBQUl2SSxPQUFPQSxDQUFBO2NBQ1YsSUFBSSxPQUFPLElBQUksQ0FBQ3dJLFVBQVUsS0FBSyxVQUFVLEVBQUU7Z0JBQzFDbEwsT0FBTyxDQUFDOEosSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQ29CLFVBQVUsRUFBRSxJQUFJLENBQUNsUCxXQUFXLENBQUNrTCxJQUFJLENBQUM7Z0JBQ3pFOztjQUdELE9BQU8sSUFBSSxDQUFDZ0UsVUFBVSxFQUFFO1lBQ3pCO1lBRUEsQ0FBQXROLFdBQVk7WUFDWixDQUFBdU4sV0FBWSxHQUFHLEtBQUs7WUFDcEIsQ0FBQUMsWUFBYTtZQUNiLENBQUFDLFdBQVk7WUFNWixDQUFBQyxNQUFPO1lBQ1AsQ0FBQXROLGVBQWdCO1lBQ2hCLElBQUlBLGVBQWVBLENBQUE7Y0FDbEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsZUFBZ0I7WUFDN0I7WUFDQWhDLFlBQVlzUCxNQUFBLEdBQXNCLEVBQUU7Y0FDbkMsS0FBSyxDQUFDLENBQUMsTUFBT0EsTUFBTSxFQUFFbk4sVUFBVSxHQUFHO2dCQUFFQSxVQUFVLEVBQUVtTixNQUFNLENBQUNuTjtjQUFVLENBQUUsR0FBRyxFQUFHLEVBQUMsQ0FBRSxDQUFDO2NBRTlFLE1BQU07Z0JBQUV0QixFQUFFO2dCQUFFdUIsU0FBUztnQkFBRXBCO2NBQU8sQ0FBRSxHQUFHc08sTUFBTTtjQUN6QyxJQUFJLENBQUMsQ0FBQUEsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBdE4sZUFBZ0IsR0FBR3JCLFFBQUEsQ0FBQXRCLGVBQWUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQWdRLE1BQU8sRUFBRTVQLE9BQU8sQ0FBQztjQUV4RSxJQUFJbUIsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRSxHQUFHQSxFQUFFO2NBQ3BCLElBQUl1QixTQUFTLEVBQUUsSUFBSSxDQUFDQSxTQUFTLEdBQUdBLFNBQVM7Y0FDekMsSUFBSSxDQUFDcEIsT0FBTyxHQUFHQSxPQUFPLElBQUksQ0FBQyxFQUFFSCxFQUFFLElBQUl1QixTQUFTLENBQUM7Y0FDN0MsSUFBSWtOLE1BQU0sQ0FBQ3pOLFFBQVEsRUFBRTtnQkFDcEIsSUFBSSxPQUFPeU4sTUFBTSxDQUFDek4sUUFBUSxLQUFLLFVBQVUsRUFBRTtrQkFDMUMsTUFBTSxJQUFJUSxLQUFLLENBQUMsOEJBQThCLENBQUM7O2dCQUVoRCxJQUFJLENBQUMsQ0FBQVIsUUFBUyxHQUFHLElBQUl5TixNQUFNLENBQUN6TixRQUFRLENBQUMsSUFBSSxDQUFDOztjQUUzQyxJQUFJLENBQUMsQ0FBQTZELEtBQU0sQ0FBQzRKLE1BQU0sQ0FBQztjQUNuQixJQUFJLENBQUN0TSxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQ2tNLFVBQVUsQ0FBQztZQUMxQztZQUVBLENBQUF4SixLQUFNNkosQ0FBQ0QsTUFBTTtjQUNaLElBQUksQ0FBQ2hOLGFBQWEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztjQUN2QyxJQUFJLENBQUMrQixJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJLENBQUNtTCxJQUFJLENBQUMsSUFBSSxDQUFDO2NBQ2hDLElBQUksQ0FBQ04sVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDO2NBQzVDLE1BQU1oTixXQUFXLEdBQUdDLFFBQVEsSUFBSSxJQUFJLENBQUN1TSxLQUFLLENBQUN2TSxRQUFRLENBQUM7Y0FDcEQsTUFBTUMsV0FBVyxHQUFHQSxDQUFDRCxRQUFRLEVBQUUxQyxLQUFLLEtBQU0sSUFBSSxDQUFDMEMsUUFBUSxDQUFDLEdBQUcxQyxLQUFNO2NBQ2pFLE1BQU00QyxNQUFNLEdBQUc7Z0JBQUVyRCxHQUFHLEVBQUVrRCxXQUFXO2dCQUFFSSxHQUFHLEVBQUVGO2NBQVcsQ0FBRTtjQUNyRCxNQUFNK00sSUFBSSxHQUFHO2dCQUFFbFEsTUFBTSxFQUFFLElBQUk7Z0JBQUVvRCxNQUFNO2dCQUFFM0IsT0FBTyxFQUFFLElBQUksQ0FBQ0E7Y0FBTyxDQUFFO2NBQzVELElBQUksQ0FBQ0ksYUFBYSxHQUFHLElBQUlaLGNBQUEsQ0FBQWtQLGFBQWEsQ0FBQ0QsSUFBSSxDQUFDO2NBQzVDLElBQUksQ0FBQyxDQUFBOU4sV0FBWSxHQUFHLElBQUlpTixLQUFBLENBQUFlLGVBQWUsQ0FBQ0YsSUFBSSxDQUFDO2NBQzdDLElBQUksQ0FBQyxDQUFBN04sV0FBWSxHQUFHLElBQUlsQixLQUFBLENBQUFrUCxlQUFlLENBQUNILElBQUksQ0FBQztjQUM3QyxJQUFJLENBQUNsTixJQUFJLENBQUMrTSxNQUFNLENBQUM7WUFDbEI7WUFFVSxNQUFNTyxVQUFVQSxDQUFBO2NBQ3pCLElBQUksQ0FBQ3ROLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQStNLE1BQU8sQ0FBQztZQUN4QjtZQUVBOzs7Ozs7OztZQVFVSixVQUFVQSxDQUFBO2NBQ25CLElBQUksSUFBSSxDQUFDaEgsS0FBSyxFQUFFO2dCQUNmLE9BQU8sSUFBSSxDQUFDQSxLQUFLOztjQUdsQixJQUFJLElBQUksQ0FBQyxDQUFBa0gsWUFBYSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7Y0FFakQsSUFBSSxDQUFDLENBQUFBLFlBQWEsR0FBRyxJQUFJdkksS0FBQSxDQUFBc0IsY0FBYyxFQUFFO2NBRXpDLElBQUksSUFBSSxDQUFDZ0gsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBQyxZQUFhLENBQUN2USxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUFzUSxXQUFZLENBQUM7Y0FFbkUsTUFBTVcsT0FBTyxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3BCLElBQUksQ0FBQyxDQUFBWCxXQUFZLEdBQUcsSUFBSTtnQkFDeEIsSUFBSSxDQUFDLENBQUFDLFlBQWEsQ0FBQ3ZRLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQXNRLFdBQVksQ0FBQztjQUM5QyxDQUFDO2NBQ0QsSUFBSSxDQUFDbk0sRUFBRSxDQUFDLGVBQWUsRUFBRThNLE9BQU8sQ0FBQztjQUNqQyxPQUFPLElBQUksQ0FBQyxDQUFBVixZQUFhO1lBQzFCO1lBRVUsTUFBTTdNLElBQUlBLENBQUMrTSxNQUFtQjtjQUN2QyxJQUFJO2dCQUNILElBQUk1TCxFQUFFO2dCQUVOLElBQUksSUFBSSxDQUFDLENBQUEyTCxXQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtnQkFFL0MsSUFBSSxDQUFDLENBQUFBLFdBQVksR0FBRyxJQUFJeEksS0FBQSxDQUFBc0IsY0FBYyxFQUFFO2dCQUV4QyxJQUFJbUgsTUFBTSxDQUFDNUwsRUFBRSxFQUFFQSxFQUFFLEdBQUc0TCxNQUFNLENBQUM1TCxFQUFFO2dCQUM3QixJQUFJLENBQUNBLEVBQUUsR0FBRzRMLE1BQU0sQ0FBQzVMLEVBQUU7Z0JBQ25CLElBQUksSUFBSSxDQUFDMUMsT0FBTyxFQUFFO2tCQUNqQixNQUFNLElBQUksQ0FBQ0ksYUFBYSxDQUFDbUIsSUFBSSxDQUFDbUIsRUFBRSxDQUFDO2tCQUNqQyxJQUFJLENBQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUN4QixhQUFhLENBQUMwRCxRQUFRLENBQUN2QixNQUFNLENBQUM7O2dCQUc3QyxJQUFJLElBQUksQ0FBQyxDQUFBdUwsUUFBUyxJQUFJLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUM5RixNQUFNLEdBQUcsQ0FBQyxFQUFFO2tCQUNoRCxJQUFJLENBQUM3RyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUEyTSxRQUFTOztnQkFHakMsSUFBSVEsTUFBTSxDQUFDbk4sVUFBVSxFQUFFLElBQUksQ0FBQ1MsR0FBRyxDQUFDME0sTUFBTSxDQUFDbk4sVUFBVSxFQUFFLElBQUksQ0FBQztnQkFFeEQsSUFBSSxDQUFDK0YsS0FBSyxHQUFHLElBQUk7Z0JBQ2pCLElBQUksQ0FBQyxDQUFBbUgsV0FBWSxDQUFDeFEsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDL0IsSUFBSSxDQUFDdUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztlQUM3QixDQUFDLE9BQU9XLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDL0QsS0FBSyxDQUFDLG9CQUFvQixFQUFFOEQsQ0FBQyxDQUFDOztZQUV4QztZQUVBVixVQUFVLEdBQUd0RCxLQUFLLElBQUksSUFBSSxDQUFDcUIsYUFBYSxDQUFDaUMsVUFBVSxDQUFDdEQsS0FBSyxDQUFDO1lBRTFEOzs7Ozs7WUFNQSxNQUFNNkMsR0FBR0EsQ0FBQ2pFLElBQUksRUFBRTRELElBQUksR0FBRyxLQUFLO2NBQzNCLElBQUksT0FBTzVELElBQUksS0FBSyxRQUFRLEVBQUVxRixPQUFPLENBQUMrTCxLQUFLLENBQUNwUixJQUFJLENBQUM7Y0FDakQsSUFBSSxDQUFDNEQsSUFBSSxFQUFFO2dCQUNWOzs7O2dCQUlBLE1BQU0sSUFBSSxDQUFDbUUsT0FBTzs7Y0FHbkIsSUFBSW5FLElBQUksSUFBSSxJQUFJLENBQUN2QixPQUFPLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxDQUFBa0UsU0FBVSxHQUFHLElBQUloRSxHQUFHLENBQUNyQixNQUFNLENBQUM2RSxPQUFPLENBQUMvRixJQUFJLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDeUMsYUFBYSxDQUFDaUQsSUFBSSxDQUFDMUYsSUFBSSxDQUFDOztjQVE5QixJQUFJLENBQUN3RCxVQUFVLEVBQUVzQixPQUFPLENBQUVoQixRQUE0QixJQUFJO2dCQUN6RCxJQUFJLE9BQU9BLFFBQVEsS0FBSyxRQUFRLEVBQUU7a0JBQ2pDLElBQUk5RCxJQUFJLENBQUNvTSxjQUFjLENBQUN0SSxRQUFRLENBQUN5SSxJQUFJLENBQUMsRUFBRSxDO2tCQUV4Qzs7Z0JBRUQsSUFBSXZNLElBQUksQ0FBQ29NLGNBQWMsQ0FBQ3RJLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsUUFBUSxDQUFDLEdBQUc5RCxJQUFJLENBQUM4RCxRQUFRLENBQUM7Y0FDbkUsQ0FBQyxDQUFDO2NBRUYsSUFBSSxDQUFDbEIsWUFBWSxFQUFFO1lBQ3BCO1lBRUE7Ozs7WUFJQStMLFNBQVNBLENBQUE7Y0FDUixNQUFNL0osTUFBTSxHQUFHLEVBQUU7Y0FDakIsTUFBTXlNLFNBQVMsR0FBRyxJQUFJLENBQUNsQixRQUFRLENBQUM5RixNQUFNLEdBQUcsSUFBSSxDQUFDOEYsUUFBUSxHQUFHLElBQUksQ0FBQzNNLFVBQVU7Y0FFeEU2TixTQUFTLENBQUN2TSxPQUFPLENBQUN3TSxLQUFLLElBQUc7Z0JBQ3pCLElBQUksSUFBSSxDQUFDbEYsY0FBYyxDQUFDa0YsS0FBSyxDQUFDLEVBQUUxTSxNQUFNLENBQUMwTSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUNBLEtBQUssQ0FBQztjQUM1RCxDQUFDLENBQUM7Y0FDRixPQUFPMU0sTUFBTTtZQUNkO1lBRUEyTSxnQkFBZ0JBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQy9OLFVBQVU7WUFDdkI7WUFFQWtDLElBQUlBLENBQUMxRixJQUFLO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQWdELFdBQVksQ0FBQzBDLElBQUksQ0FBQzFGLElBQUksQ0FBQztZQUNwQztZQUVBMkYsSUFBSUEsQ0FBQTtjQUNILE9BQU8sSUFBSSxDQUFDLENBQUEzQyxXQUFZLENBQUMyQyxJQUFJLEVBQUU7WUFDaEM7WUFFQTZMLFNBQVNBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBeE8sV0FBWSxDQUFDd08sU0FBUyxFQUFFO1lBQ3JDO1lBRUE1TCxPQUFPQSxDQUFDNUYsSUFBSztjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFnRCxXQUFZLENBQUM0QyxPQUFPLENBQUM1RixJQUFJLENBQUM7WUFDdkM7WUFDQXNGLElBQUlBLENBQUNnQixNQUFPO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQXJELFdBQVksQ0FBQ3FDLElBQUksQ0FBQ2dCLE1BQU0sQ0FBQztZQUN0QztZQUNBLE1BQU10QixNQUFNQSxDQUFBO2NBQ1gsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQXVGLFNBQVUsR0FBRyxDQUFDO2dCQUNuQixJQUFJLElBQUksQ0FBQzlILGFBQWEsRUFBRSxNQUFNLElBQUksQ0FBQ0EsYUFBYSxDQUFDdUMsTUFBTSxFQUFFO2dCQUN6RCxJQUFJLElBQUksQ0FBQzlCLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQ0EsUUFBUSxDQUFDOEIsTUFBTSxDQUFDLElBQUksQ0FBQ0QsRUFBRSxDQUFDO2dCQUN0RCxJQUFJLENBQUNuQyxZQUFZLEVBQUU7Z0JBRW5CLE9BQU8sSUFBSTtlQUNYLENBQUMsT0FBT3dDLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDL0QsS0FBSyxDQUFDLE9BQU8sRUFBRThELENBQUMsQ0FBQzs7WUFFM0I7O1VBQ0EvRSxPQUFBLENBQUEyUCxJQUFBLEdBQUFBLElBQUE7Ozs7Ozs7Ozs7O1VDOVFEOztVQUVBOU8sTUFBQSxDQUFBQyxjQUFBLENBQUFkLE9BQUE7WUFDQWUsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBRixNQUFBLENBQUFDLGNBQUEsQ0FBQWQsT0FBQTtZQUNBZSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQU0sTUFBTzZQLGVBQWU7WUFDM0IsQ0FBQXJRLE1BQU87WUFFUCxDQUFBNkIsYUFBYztZQUNkLENBQUFTLFFBQVM7WUFDVCxDQUFBVyxXQUFZO1lBQ1osQ0FBQUcsTUFBTztZQUNQLENBQUFqRCxPQUFRO1lBQ1IsQ0FBQXNCLE9BQVE7WUFDUmtILEtBQUs7WUFFTGxJLFlBQVk7Y0FBRVQsTUFBTTtjQUFFb0QsTUFBTTtjQUFFM0I7WUFBTyxDQUFFO2NBQ3RDLElBQUksQ0FBQyxDQUFBekIsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBaUQsV0FBWSxHQUFHRyxNQUFNLENBQUNyRCxHQUFHO2NBQzlCLElBQUksQ0FBQyxDQUFBcUQsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBM0IsT0FBUSxHQUFHQSxPQUFPO2NBQ3ZCLElBQUksQ0FBQyxDQUFBdEIsT0FBUSxHQUFHLElBQUksQ0FBQyxDQUFBSCxNQUFPLENBQUN5QyxlQUFlO2NBQzVDLElBQUksQ0FBQ08sSUFBSSxFQUFFO1lBQ1o7WUFFQUEsSUFBSSxHQUFHQSxDQUFBLEtBQUs7Y0FDWCxJQUFJLENBQUMsQ0FBQW5CLGFBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQW9CLFdBQVksQ0FBQyxlQUFlLENBQUM7Y0FDeEQsSUFBSSxDQUFDLENBQUFYLFFBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQVcsV0FBWSxDQUFDLFVBQVUsQ0FBQztjQUM5QyxJQUFJLENBQUMwRixLQUFLLEdBQUcsSUFBSTtZQUNsQixDQUFDO1lBRUQ7Ozs7Ozs7Ozs7WUFVQWpFLElBQUksR0FBRyxNQUFPZ0IsTUFBVyxJQUFJO2NBQzVCLElBQUk7Z0JBQ0gsTUFBTSxJQUFJLENBQUMsQ0FBQXpDLFdBQVksQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFFdkMsSUFBSSxDQUFDeUMsTUFBTSxFQUFFO2tCQUNaQSxNQUFNLEdBQUc7b0JBQUV2QixFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUFuRSxNQUFPLENBQUNtRTtrQkFBRSxDQUFFOztnQkFFakMsTUFBTTFDLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBd0IsV0FBWSxDQUFDLFNBQVMsQ0FBQztnQkFDbEQsTUFBTXBCLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQW9CLFdBQVksQ0FBQyxlQUFlLENBQUM7Z0JBRXhELElBQUksQ0FBQ3lDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQTFGLE1BQU8sQ0FBQ21FLEVBQUUsRUFBRXVCLE1BQU0sR0FBRztrQkFBRXZCLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQW5FLE1BQU8sQ0FBQ21FO2dCQUFFLENBQUU7Z0JBRWhFLElBQUkxQyxPQUFPLElBQUlJLGFBQWEsRUFBRTtrQkFDN0IsTUFBTThELFNBQVMsR0FBRyxNQUFNOUQsYUFBYSxDQUFDNkMsSUFBSSxDQUFDZ0IsTUFBTSxDQUFDO2tCQUNsRCxJQUFJQyxTQUFTLEVBQUVoRixNQUFNLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxDQUFBWCxNQUFPLENBQUNxRCxHQUFHLENBQUNzQyxTQUFTLENBQUN2RyxJQUFJLEVBQUUsSUFBSSxDQUFDO29CQUN0QyxJQUFJdUcsU0FBUyxDQUFDdkcsSUFBSSxDQUFDc1EsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBN04sYUFBYyxDQUFDNk4sWUFBWSxHQUFHL0osU0FBUyxDQUFDdkcsSUFBSSxDQUFDc1EsWUFBWTtvQkFDL0YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBN04sYUFBYyxDQUFDNk4sWUFBWSxFQUNwQyxJQUFJLENBQUMsQ0FBQTdOLGFBQWMsQ0FBQzZOLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQTdOLGFBQWMsQ0FBQzBELFFBQVEsQ0FBQ21LLFlBQVk7OztnQkFJL0UsSUFBSTdOLGFBQWEsSUFBSSxDQUFDQSxhQUFhLENBQUNELFFBQVEsRUFBRSxPQUFPO2tCQUFFakIsTUFBTSxFQUFFO2dCQUFJLENBQUU7Z0JBRXJFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTJCLFFBQVMsRUFBRTtnQkFDckIsTUFBTWtELFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQ2MsVUFBVSxDQUFDWixNQUFNLENBQUM7Z0JBQ2hELElBQUksQ0FBQ0YsVUFBVSxFQUFFO2tCQUNoQixJQUFJLENBQUMsQ0FBQXhGLE1BQU8sQ0FBQ2lJLEtBQUssR0FBRyxLQUFLO2tCQUUxQixPQUFPLElBQUksQ0FBQyxDQUFBOUgsT0FBUSxDQUFDaEIsUUFBUSxFQUFFOztnQkFHaEMsSUFBSSxDQUFDLENBQUFhLE1BQU8sQ0FBQ2lJLEtBQUssR0FBRyxJQUFJO2dCQUN6QixJQUFJLENBQUMsQ0FBQWpJLE1BQU8sQ0FBQ3dHLE9BQU8sR0FBRyxJQUFJO2dCQUMzQixJQUFJLENBQUMsQ0FBQXhHLE1BQU8sQ0FBQ3FELEdBQUcsQ0FBQ21DLFVBQVUsQ0FBQztnQkFDNUIsSUFBSS9ELE9BQU8sRUFBRTtrQkFDWixJQUFJb1AsSUFBSSxHQUFHLElBQUk7a0JBQ2YsSUFBSSxDQUFDLENBQUE3USxNQUFPLENBQUN5RyxNQUFNLEdBQUcsSUFBSTtrQkFFMUJuRyxNQUFNLENBQUNzTCxJQUFJLENBQUNwRyxVQUFVLENBQUMsQ0FBQ3RCLE9BQU8sQ0FBQzJILEdBQUcsSUFBRztvQkFDckMsSUFBSWlGLFFBQVEsR0FBR2pQLGFBQWEsQ0FBQzBELFFBQVEsQ0FBQ3ZCLE1BQU07b0JBQzVDLElBQUk4TSxRQUFRLENBQUNqRixHQUFHLENBQUMsS0FBS3JHLFVBQVUsQ0FBQ3FHLEdBQUcsQ0FBQyxFQUFFZ0YsSUFBSSxHQUFHLEtBQUs7a0JBQ3BELENBQUMsQ0FBQztrQkFFRixJQUFJLENBQUNBLElBQUksRUFBRTtvQkFDVixNQUFNMU0sRUFBRSxHQUFHLENBQUM0TSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUEvUSxNQUFPLENBQUNtRSxFQUFZLENBQUMsR0FDekM2TSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUFoUixNQUFPLENBQUNtRSxFQUFZLENBQUMsR0FDbkMsSUFBSSxDQUFDLENBQUFuRSxNQUFPLENBQUNtRSxFQUFFO29CQUNsQixNQUFNLElBQUksQ0FBQyxDQUFBdEMsYUFBYyxDQUFDaUQsSUFBSSxDQUFDO3NCQUM5QixHQUFHLElBQUksQ0FBQyxDQUFBOUUsTUFBTyxDQUFDdU4sYUFBYSxFQUFFO3NCQUMvQixHQUFHL0gsVUFBVTtzQkFDYnJCLEVBQUU7c0JBQ0Z1TCxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE3TixhQUFjLENBQUM2TjtxQkFDbEMsQ0FBQzs7O2dCQUlKLE9BQU8sSUFBSSxDQUFDLENBQUF2UCxPQUFRLENBQUNoQixRQUFRLENBQUM7a0JBQUVDLElBQUksRUFBRW9HO2dCQUFVLENBQUUsQ0FBQztlQUNuRCxDQUFDLE9BQU9lLEdBQUcsRUFBRTtnQkFDYixNQUFNQSxHQUFHO2VBQ1QsU0FBUztnQkFDVCxJQUFJLENBQUMsQ0FBQXZHLE1BQU8sQ0FBQ2dHLFFBQVEsR0FBRyxLQUFLOztZQUUvQixDQUFDO1lBRURNLFVBQVUsR0FBRyxNQUFNWixNQUFNLElBQUc7Y0FDM0I7Y0FDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUExRixNQUFPLENBQUM0QixRQUFRLEVBQUU7Y0FDNUI7OztjQUdBLElBQUlxUCxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUEzTyxRQUFTLENBQUNsRCxJQUFJLEdBQ2pDLElBQUksQ0FBQyxDQUFBa0QsUUFBUyxDQUFDbEQsSUFBSSxDQUFDNlEsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBM04sUUFBUyxDQUFDLEdBQ3hDLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUNvQyxJQUFJLENBQUN1TCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEzTixRQUFTLENBQUM7Y0FFM0MsSUFBSSxPQUFPMk8sVUFBVSxLQUFLLFVBQVUsRUFBRTtnQkFDckN4TSxPQUFPLENBQUMvRCxLQUFLLENBQUMsMEVBQTBFLENBQUM7Z0JBQ3pGOztjQUdELE1BQU1HLFFBQVEsR0FBRyxNQUFNb1EsVUFBVSxDQUFDdkwsTUFBTSxDQUFDO2NBRXpDLE9BQU8sSUFBSSxDQUFDLENBQUF2RixPQUFRLENBQUNaLFVBQVUsQ0FBQ3NCLFFBQVEsQ0FBQztZQUMxQyxDQUFDOztVQUNEcEIsT0FBQSxDQUFBNFEsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVIRCxJQUFBdlAsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUE0SCxTQUFBLEdBQUE1SCxPQUFBO1VBRUEsSUFBQXlGLFFBQUEsR0FBQXpGLE9BQUE7VUFJTztVQUFVLE1BQ1h3USxhQUFjLFNBQVFyUCxNQUFBLENBQUFFLGFBQWtCO1lBQzdDLENBQUFZLFFBQVMsR0FBRzhGLFVBQVUsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNO1lBQ3ZDLENBQUEzRCxLQUFNO1lBQ04sQ0FBQTRELE9BQVE7WUFDUixDQUFBcUosS0FBTSxHQUFZLEtBQUs7WUFDdkIsQ0FBQXBKLFFBQVM7WUFDVCxDQUFBakYsU0FBVTtZQUNWLENBQUFrRixZQUFhO1lBQ2IsQ0FBQWlCLFlBQWE7WUFDYixDQUFBaEIsTUFBTyxHQUFHLEtBQUs7WUFDZixJQUFJL0QsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQXlMLFlBQVk7WUFDWixJQUFJMUcsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFFQSxDQUFBMUgsRUFBRztZQUVILElBQUlNLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWlHLE9BQVEsSUFBSSxDQUFDUSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNyRjtZQUVBLENBQUF0SSxNQUFPO1lBQ1AsQ0FBQWlELFdBQVk7WUFDWjs7O1lBR0EsQ0FBQWtPLGVBQWdCO1lBQ2hCOzs7O1lBSUEsQ0FBQTVMLFFBQVM7WUFDVCxDQUFBOUQsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBekIsTUFBTyxDQUFDeUIsT0FBTztZQUM1QjtZQUNBLENBQUEyQixNQUFPO1lBRVAsSUFBSW1DLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQTRDLEtBQU07WUFDTjFILFlBQVk7Y0FBRVQsTUFBTTtjQUFFb0QsTUFBTTtjQUFFM0I7WUFBTyxDQUFFO2NBQ3RDLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxDQUFBd0IsV0FBWSxHQUFHRyxNQUFNLENBQUNyRCxHQUFHO2NBQzlCLE1BQU07Z0JBQUV1QixFQUFFO2dCQUFFdUI7Y0FBUyxDQUFFLEdBQUc3QyxNQUFNO2NBQ2hDLElBQUksQ0FBQ29SLElBQUksR0FBR3BHLElBQUksQ0FBQ3FHLEtBQUssQ0FBQ3JHLElBQUksQ0FBQ3NHLE1BQU0sRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJO2NBQ2xFLElBQUksQ0FBQyxDQUFBdFIsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBbUksS0FBTSxHQUFHN0csRUFBRSxJQUFJdUIsU0FBUztjQUM3QixJQUFJLENBQUMsQ0FBQWtGLFlBQWEsR0FBR3pHLEVBQUU7Y0FDdkIsSUFBSSxDQUFDLENBQUF1QixTQUFVLEdBQUdBLFNBQVM7Y0FDM0IsSUFBSSxDQUFDLENBQUFPLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQTNCLE9BQVEsR0FBR0EsT0FBTztjQUN2QixJQUFJLENBQUMsQ0FBQTBQLGVBQWdCLEdBQUcvTCxRQUFBLENBQUFLLGVBQWUsQ0FBQzFGLEdBQUcsQ0FBQ3VCLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQUcsT0FBUSxDQUFDO2NBQzlELElBQUksQ0FBQ2lELElBQUksR0FBRyxJQUFJLENBQUNBLElBQUksQ0FBQ3VMLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDakM7WUFFQW5NLFVBQVVBLENBQUN0RCxLQUFLO2NBQ2YsSUFBSSxDQUFDLENBQUFxSCxPQUFRLEdBQUdySCxLQUFLO2NBRXJCLElBQUksQ0FBQ3dCLFlBQVksRUFBRTtZQUNwQjtZQUVBZ0IsSUFBSSxHQUFHLE1BQUFBLENBQU9tQixFQUFBLEdBQWtDcUYsU0FBUyxLQUFJO2NBQzVELElBQUk7Z0JBQ0gsSUFBSSxJQUFJLENBQUMsQ0FBQS9ILE9BQVEsRUFBRTtrQkFDbEIsTUFBTXFHLFFBQVEsR0FBb0IsTUFBTVAsU0FBQSxDQUFBc0IsU0FBUyxDQUFDOUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBZ0ksWUFBYSxDQUFDO2tCQUN6RSxJQUFJLENBQUMsQ0FBQUQsUUFBUyxHQUFHQSxRQUFRO2tCQUN6QixJQUFJLENBQUMsQ0FBQTdELEtBQU0sR0FBRzZELFFBQVEsQ0FBQ3hHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQXVCLFNBQVUsQ0FBQzs7Z0JBRzNDLElBQUksQ0FBQyxDQUFBcU8sS0FBTSxHQUFHLENBQUMsQ0FBQy9NLEVBQUU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLENBQUFvTixXQUFZLENBQUNwTixFQUFFLENBQUM7ZUFDNUIsQ0FBQyxPQUFPSyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQy9ELEtBQUssQ0FBQzhELENBQUMsQ0FBQzs7WUFFbEIsQ0FBQztZQUNEZ04sV0FBV0EsQ0FBQ0MsSUFBSSxFQUFFQyxJQUFJO2NBQ3JCLE1BQU1DLEtBQUssR0FBR3JSLE1BQU0sQ0FBQ3NMLElBQUksQ0FBQzZGLElBQUksQ0FBQztjQUMvQixNQUFNRyxLQUFLLEdBQUd0UixNQUFNLENBQUNzTCxJQUFJLENBQUM4RixJQUFJLENBQUM7Y0FFL0IsSUFBSUMsS0FBSyxDQUFDbEksTUFBTSxLQUFLbUksS0FBSyxDQUFDbkksTUFBTSxFQUFFO2dCQUNsQyxPQUFPLEtBQUs7O2NBR2IsS0FBSyxJQUFJb0MsR0FBRyxJQUFJOEYsS0FBSyxFQUFFO2dCQUN0QixNQUFNRSxJQUFJLEdBQUdKLElBQUksQ0FBQzVGLEdBQUcsQ0FBQztnQkFDdEIsTUFBTWlHLElBQUksR0FBR0osSUFBSSxDQUFDN0YsR0FBRyxDQUFDO2dCQUV0QixNQUFNa0csVUFBVSxHQUFHLElBQUksQ0FBQ0MsUUFBUSxDQUFDSCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUNHLFFBQVEsQ0FBQ0YsSUFBSSxDQUFDO2dCQUM3RCxJQUFLQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUNQLFdBQVcsQ0FBQ0ssSUFBSSxFQUFFQyxJQUFJLENBQUMsSUFBTSxDQUFDQyxVQUFVLElBQUlGLElBQUksS0FBS0MsSUFBSyxFQUFFO2tCQUNwRixPQUFPLEtBQUs7OztjQUlkLE9BQU8sSUFBSTtZQUNaO1lBQ0FFLFFBQVFBLENBQUNDLE1BQU07Y0FDZCxPQUFPQSxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU9BLE1BQU0sS0FBSyxRQUFRO1lBQ3BEO1lBQ0E7Ozs7O1lBS0EsQ0FBQUMsYUFBY0MsQ0FBQy9TLElBQUk7Y0FDbEIsTUFBTXdELFVBQVUsR0FBR3RDLE1BQU0sQ0FBQ3NMLElBQUksQ0FBQ3hNLElBQUksQ0FBQztjQUNwQyxNQUFNZ1QsU0FBUyxHQUFHO2dCQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE3TSxRQUFTLENBQUN2QjtjQUFNLENBQUU7Y0FDOUMsTUFBTXFPLFFBQVEsR0FBRyxJQUFJLENBQUNiLFdBQVcsQ0FBQ1ksU0FBUyxFQUFFaFQsSUFBSSxDQUFDO2NBRWxELE9BQU8sQ0FBQ2lULFFBQVE7WUFDakI7WUFFQSxNQUFNM04sSUFBSUEsQ0FBQ2dCLE1BQUEsR0FBYyxFQUFFO2NBQzFCLElBQUk7Z0JBQ0gsSUFBSXZCLEVBQUUsR0FBR3VCLE1BQU0sQ0FBQ3ZCLEVBQUU7Z0JBQ2xCO2dCQUNBQSxFQUFFLEdBQUdBLEVBQUUsSUFBSSxJQUFJLENBQUNvQixRQUFRLENBQUN2QixNQUFNLEVBQUVHLEVBQUU7Z0JBRW5DLElBQUksQ0FBQ0EsRUFBRSxFQUFFLE1BQU0sZ0JBQWdCO2dCQUUvQixNQUFNLElBQUksQ0FBQyxDQUFBb04sV0FBWSxDQUFDcE4sRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsQ0FBQW5FLE1BQU8sQ0FBQytGLFdBQVcsR0FBRyxJQUFJO2dCQUMvQixJQUFJLENBQUMsQ0FBQS9GLE1BQU8sQ0FBQ3FELEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQWtDLFFBQVMsQ0FBQ3ZCLE1BQU0sQ0FBQztnQkFDdkMsT0FBTztrQkFBRXJELE1BQU0sRUFBRSxJQUFJO2tCQUFFdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBbUcsUUFBUyxDQUFDdkI7Z0JBQU0sQ0FBRTtlQUNwRCxDQUFDLE9BQU9RLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDL0QsS0FBSyxDQUFDOEQsQ0FBQyxDQUFDO2dCQUNoQixPQUFPQSxDQUFDOztZQUVWO1lBRUE7Ozs7Ozs7WUFPQSxDQUFBK00sV0FBWSxHQUFHLE1BQU1wTixFQUFFLElBQUc7Y0FDekIsSUFBSW9CLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBNEwsZUFBZ0IsQ0FBQ3BSLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQThDLFNBQVUsRUFBRXNCLEVBQUUsQ0FBQztjQUNuRSxJQUFJL0UsSUFBSSxHQUFHO2dCQUFFK0U7Y0FBRSxDQUFFO2NBQ2pCLElBQUk4RCxLQUFLLEdBQUcsQ0FBQyxDQUFDMUMsUUFBUTtjQUV0QixJQUFJMEMsS0FBSyxFQUFFO2dCQUNWLElBQUksQ0FBQyxDQUFBakksTUFBTyxDQUFDcUQsR0FBRyxDQUFDa0MsUUFBUSxDQUFDdkIsTUFBTSxDQUFDO2dCQUNqQ2lFLEtBQUssR0FBRyxJQUFJO2dCQUNaLElBQUksQ0FBQyxDQUFBMUMsUUFBUyxHQUFHQSxRQUFRO2dCQUN6QixJQUFJLENBQUMsQ0FBQUEsUUFBUyxDQUFDOUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTZPLGNBQWUsQ0FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLENBQUFpQixLQUFNLEdBQUcsSUFBSSxDQUFDLENBQUEzTCxRQUFTLEVBQUV2QixNQUFNLEVBQUVrTixLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUs7Z0JBQzFEOztjQUdELElBQUksQ0FBQzNMLFFBQVEsSUFBSSxJQUFJLENBQUM5RCxPQUFPLElBQUkwQyxFQUFFLEVBQUU7Z0JBQ3BDLE1BQU1GLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtnQkFDekIsTUFBTTBCLFNBQVMsR0FBRyxNQUFNMUIsS0FBSyxDQUFDbEUsR0FBRyxDQUFDb0UsRUFBRSxDQUFDO2dCQUNyQyxJQUFJd0IsU0FBUyxFQUFFdkcsSUFBSSxHQUFHdUcsU0FBUztnQkFDL0JzQyxLQUFLLEdBQUcsSUFBSTs7Y0FHYixJQUFJQSxLQUFLLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLENBQUFqSSxNQUFPLENBQUNpSSxLQUFLLEdBQUdBLEtBQUs7Z0JBQzFCLElBQUksQ0FBQyxDQUFBakksTUFBTyxDQUFDcUYsTUFBTSxHQUFHLElBQUk7O2NBRzNCRSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUE0TCxlQUFnQixDQUFDb0IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBMVAsU0FBVSxFQUFFekQsSUFBSSxDQUFDO2NBQzlELElBQUksQ0FBQyxDQUFBbUcsUUFBUyxHQUFHQSxRQUFRO2NBQ3pCLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUM5QixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBNk8sY0FBZSxDQUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2NBQzVELElBQUksQ0FBQyxDQUFBaUIsS0FBTSxHQUFHLElBQUksQ0FBQyxDQUFBM0wsUUFBUyxFQUFFdkIsTUFBTSxFQUFFa04sS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLO2NBQzFELE9BQU8sSUFBSSxDQUFDLENBQUEzTCxRQUFTLENBQUN2QixNQUFNO1lBQzdCLENBQUM7WUFFRCxDQUFBc08sY0FBZUUsQ0FBQTtjQUNkLElBQUksQ0FBQyxDQUFBeFMsTUFBTyxDQUFDcUQsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBa0MsUUFBUyxDQUFDdkIsTUFBTSxDQUFDO1lBQ3hDO1lBQ0EsTUFBTWMsSUFBSUEsQ0FBQzFGLElBQUk7Y0FDZCxJQUFJO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQThTLGFBQWMsQ0FBQzlTLElBQUksQ0FBQyxFQUFFO2dCQUNoQ0EsSUFBSSxDQUFDeUksT0FBTyxHQUFHLElBQUksQ0FBQ2pHLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDcEN4QyxJQUFJLENBQUM4UixLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUVqQztnQkFDQSxNQUFNdUIsVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ3RULElBQUksQ0FBQztnQkFFeEQsSUFBSXFULFVBQVUsQ0FBQ2hKLE1BQU0sRUFBRSxPQUFPO2tCQUFFL0ksS0FBSyxFQUFFLFlBQVk7a0JBQUVpUyxNQUFNLEVBQUVGO2dCQUFVLENBQUU7Z0JBRXpFLE1BQU0sSUFBSSxDQUFDLENBQUE1TSxNQUFPLENBQUN6RyxJQUFJLENBQUM7Z0JBRXhCLE9BQU8sSUFBSTtlQUNYLENBQUMsT0FBT29GLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDL0QsS0FBSyxDQUFDLGNBQWMsRUFBRThELENBQUMsQ0FBQzVELE9BQU8sQ0FBQzs7WUFFMUM7WUFFQSxNQUFNOFIsb0JBQW9CQSxDQUFDdFQsSUFBSTtjQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDcUMsT0FBTyxFQUFFLE9BQU8sRUFBRTtjQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUF3QixXQUFZLENBQUMsUUFBUSxDQUFDLENBQUN3RyxNQUFNLEVBQUUsT0FBTyxFQUFFO2NBRWxELE1BQU1tSixhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUEzUCxXQUFZLENBQUMsUUFBUSxDQUFDLENBQUM4RCxHQUFHLENBQUMySixLQUFLLElBQzFELElBQUksQ0FBQyxDQUFBek0sS0FBTSxDQUNUb0gsS0FBSyxDQUFDcUYsS0FBSyxDQUFDLENBQ1o1QixNQUFNLENBQUMxUCxJQUFJLENBQUNzUixLQUFLLENBQUMsQ0FBQyxDQUNuQjVGLEtBQUssRUFBRSxDQUNQK0gsSUFBSSxDQUFDL0gsS0FBSyxJQUFHO2dCQUNiLElBQUlBLEtBQUssRUFBRTtrQkFDVixPQUFPNEYsS0FBSzs7Z0JBRWIsT0FBTyxJQUFJO2NBQ1osQ0FBQyxDQUFDLENBQ0g7Y0FFRCxNQUFNb0MsZUFBZSxHQUFHLENBQUMsTUFBTXpULE9BQU8sQ0FBQytILEdBQUcsQ0FBQ3dMLGFBQWEsQ0FBQyxFQUFFL04sTUFBTSxDQUFDNkwsS0FBSyxJQUFJQSxLQUFLLEtBQUssSUFBSSxDQUFDO2NBQzFGLE9BQU9vQyxlQUFlO1lBQ3ZCO1lBRUExTyxNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTBELFFBQVMsRUFBRTtjQUNyQixNQUFNakgsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDa1MsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBeE4sUUFBUyxDQUFDdkIsTUFBTSxDQUFDRyxFQUFFLENBQUM7Y0FFcEUsT0FBT3RELFFBQVE7WUFDaEIsQ0FBQztZQUVEa1MsY0FBYyxHQUFHLE1BQU1DLFVBQVUsSUFBRztjQUNuQyxNQUFNL08sS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBNkQsUUFBUyxDQUFDeEcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBdUIsU0FBVSxDQUFDO2NBQ2hELE1BQU1vQixLQUFLLENBQUNHLE1BQU0sQ0FBQzRPLFVBQVUsQ0FBQztjQUM5QixJQUFJLENBQUNoUixZQUFZLEVBQUU7Y0FDbkIsT0FBTyxJQUFJO1lBQ1osQ0FBQztZQUVEaVIsYUFBYUEsQ0FBQ0MsR0FBRztjQUNoQixJQUFJLE9BQU9BLEdBQUcsS0FBSyxRQUFRLElBQUlBLEdBQUcsS0FBSyxJQUFJLEVBQUUsT0FBTyxLQUFLO2NBRXpELEtBQUssTUFBTXJILEdBQUcsSUFBSXFILEdBQUcsRUFBRTtnQkFDdEIsSUFBSSxPQUFPQSxHQUFHLENBQUNySCxHQUFHLENBQUMsS0FBSyxVQUFVLEVBQUU7a0JBQ25DLE9BQU8sS0FBSyxDQUFDLENBQUM7OztjQUloQixPQUFPLElBQUk7WUFDWjtZQUVBLE1BQU0sQ0FBQXpILE1BQU8rTyxDQUFDL1QsSUFBSTtjQUNqQixNQUFNNkUsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBNkQsUUFBUyxDQUFDeEcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBdUIsU0FBVSxDQUFDO2NBQ2hELE1BQU1vQixLQUFLLENBQUNHLE1BQU0sQ0FBQ2hGLElBQUksQ0FBQytFLEVBQUUsQ0FBQztjQUMzQixPQUFPLElBQUk7WUFDWjtZQUVBLE1BQU0sQ0FBQTBCLE1BQU91TixDQUFDaFUsSUFBSTtjQUNqQixNQUFNaVUsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBOU4sUUFBUyxDQUFDb0ksU0FBUyxDQUFDdk8sSUFBSSxDQUFDO2NBRTlDLElBQUksQ0FBQ2lVLE9BQU8sRUFBRTtjQUNkLE1BQU1wUCxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUE2RCxRQUFTLENBQUN4RyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUF1QixTQUFVLENBQUM7Y0FDaEQsTUFBTXlRLEtBQUssR0FBRyxJQUFJLENBQUNMLGFBQWEsQ0FBQzdULElBQUksQ0FBQztjQUN0QyxJQUFJLENBQUNrVSxLQUFLLEVBQUU7Z0JBQ1g3TyxPQUFPLENBQUM4SixJQUFJLENBQUMsNkNBQTZDLEVBQUVuUCxJQUFJLENBQUM7Z0JBQ2pFLE1BQU0sSUFBSTBELEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQzs7Y0FHL0QsTUFBTW1CLEtBQUssQ0FBQ3NQLEdBQUcsQ0FBQztnQkFBRSxHQUFHLElBQUksQ0FBQyxDQUFBaE8sUUFBUyxDQUFDdkIsTUFBTTtnQkFBRSxHQUFHNUU7Y0FBSSxDQUFFLENBQUM7Y0FDdEQsSUFBSSxDQUFDNEMsWUFBWSxFQUFFO2NBQ25CLE9BQU8sSUFBSTtZQUNaOztVQUNBdkMsT0FBQSxDQUFBMFEsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlRSyxNQUFPQyxlQUFlO1lBQzNCLENBQUFwUSxNQUFPO1lBQ1AsQ0FBQWlELFdBQVk7WUFDWixDQUFBRyxNQUFPO1lBQ1AsQ0FBQWQsUUFBUztZQUNULENBQUFULGFBQWM7WUFDZCxDQUFBSixPQUFRO1lBQ1IsQ0FBQXRCLE9BQVE7WUFDUk0sWUFBWTtjQUFFVCxNQUFNO2NBQUVvRCxNQUFNO2NBQUUzQjtZQUFPLENBQUU7Y0FDdEMsSUFBSSxDQUFDLENBQUF6QixNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFpRCxXQUFZLEdBQUdHLE1BQU0sQ0FBQ3JELEdBQUc7Y0FDOUIsSUFBSSxDQUFDLENBQUFxRCxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUEzQixPQUFRLEdBQUdBLE9BQU87Y0FDdkIsSUFBSSxDQUFDLENBQUF0QixPQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFILE1BQU8sQ0FBQ3lDLGVBQWU7Y0FDNUMsSUFBSSxDQUFDTyxJQUFJLEVBQUU7WUFDWjtZQUVBQSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFoRCxNQUFPLENBQUN3VCxXQUFXLEdBQUcsSUFBSSxDQUFDQSxXQUFXO2NBQzNDLElBQUksQ0FBQyxDQUFBM1IsYUFBYyxHQUFHLElBQUksQ0FBQyxDQUFBb0IsV0FBWSxDQUFDLGVBQWUsQ0FBQztjQUN4RCxJQUFJLENBQUMsQ0FBQVgsUUFBUyxHQUFHLElBQUksQ0FBQyxDQUFBVyxXQUFZLENBQUMsVUFBVSxDQUFDO1lBQy9DO1lBRUE2QixJQUFJLEdBQUcsTUFBTzFGLElBQUssSUFBSTtjQUN0QixJQUFJO2dCQUNILE1BQU0sSUFBSSxDQUFDLENBQUE2RCxXQUFZLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBRXZDLElBQUk3RCxJQUFJLEVBQUU7a0JBQ1QsTUFBTSxJQUFJLENBQUMsQ0FBQVksTUFBTyxDQUFDcUQsR0FBRyxDQUFDakUsSUFBSSxDQUFDOztnQkFHN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBWSxNQUFPLENBQUNrUyxhQUFhLEVBQUU7Z0JBRWpDLE1BQU10UCxVQUFVLEdBQUc7a0JBQUUsR0FBR3hELElBQUk7a0JBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQVksTUFBTyxDQUFDdU4sYUFBYTtnQkFBRSxDQUFFO2dCQUMvRDNLLFVBQVUsQ0FBQ3NPLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQXJQLGFBQWMsQ0FBQzBELFFBQVEsQ0FBQzJMLEtBQUs7Z0JBQ3JEdE8sVUFBVSxDQUFDOE0sWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFBN04sYUFBYyxDQUFDMEQsUUFBUSxDQUFDbUssWUFBWTtnQkFFbkUsSUFBSStELGNBQWM7Z0JBQ2xCLElBQUksSUFBSSxDQUFDLENBQUF6VCxNQUFPLENBQUM0QixRQUFRLElBQUksSUFBSSxDQUFDLENBQUFVLFFBQVMsRUFBRTtrQkFDNUMsTUFBTXpCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBbUUsT0FBUSxDQUFDcEMsVUFBVSxDQUFDO2tCQUNoRCxJQUFJLENBQUMsQ0FBQWYsYUFBYyxDQUFDMEQsUUFBUSxDQUFDb0ksU0FBUyxDQUFDOU0sUUFBUSxDQUFDekIsSUFBSSxDQUFDO2tCQUNyRHdELFVBQVUsQ0FBQ3VCLEVBQUUsR0FBR3RELFFBQVEsRUFBRXpCLElBQUksRUFBRStFLEVBQUU7a0JBQ2xDc1AsY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFBdFQsT0FBUSxDQUFDWixVQUFVLENBQUNzQixRQUFRLENBQUM7a0JBQ25ELElBQUksQ0FBQyxDQUFBZ0IsYUFBYyxDQUFDMEQsUUFBUSxDQUFDMkwsS0FBSyxHQUFHLEtBQUs7O2dCQUczQyxJQUFJLElBQUksQ0FBQyxDQUFBclAsYUFBYyxFQUFFO2tCQUN4QixNQUFNLElBQUksQ0FBQyxDQUFBQSxhQUFjLENBQUNpRCxJQUFJLENBQUNsQyxVQUFVLENBQUM7O2dCQUUzQyxJQUFJLENBQUMsQ0FBQTVDLE1BQU8sQ0FBQ2dDLFlBQVksRUFBRTtnQkFFM0IsT0FBTyxJQUFJLENBQUMsQ0FBQTdCLE9BQVEsQ0FBQ2hCLFFBQVEsQ0FBQztrQkFBRUMsSUFBSSxFQUFFcVU7Z0JBQWMsQ0FBRSxDQUFDO2VBQ3ZELENBQUMsT0FBT2pQLENBQUMsRUFBRTtnQkFDWCxPQUFPQSxDQUFDOztZQUVWLENBQUM7WUFDRFEsT0FBTyxHQUFHLElBQUksQ0FBQ0YsSUFBSTtZQUNuQixDQUFBRSxPQUFRLEdBQUcsTUFBT3BDLFVBQVcsSUFBSTtjQUNoQyxJQUFJO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQU4sUUFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFjLE1BQU8sQ0FBQ3JELEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFFdEQsSUFBSTJULEtBQUssR0FBRztrQkFBRSxHQUFHOVE7Z0JBQVUsQ0FBRTtnQkFDN0IsSUFBSSxDQUFDLENBQUE1QyxNQUFPLENBQUNzUCxXQUFXLENBQUNwTCxPQUFPLENBQUN3TSxLQUFLLElBQUc7a0JBQ3hDLE9BQU9nRCxLQUFLLENBQUNoRCxLQUFLLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQztnQkFDRixNQUFNN1AsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF5QixRQUFTLENBQUMwQyxPQUFPLENBQUMwTyxLQUFLLENBQUM7Z0JBRXBELE1BQU10VSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUFlLE9BQVEsQ0FBQ1osVUFBVSxDQUFDc0IsUUFBUSxDQUFDO2dCQUMvQyxNQUFNLElBQUksQ0FBQyxDQUFBYixNQUFPLENBQUNxRCxHQUFHLENBQUNqRSxJQUFJLENBQUM7Z0JBQzVCLElBQUksSUFBSSxDQUFDLENBQUF5QyxhQUFjLEVBQUU7a0JBQ3hCLElBQUksQ0FBQyxDQUFBQSxhQUFjLENBQUNpRCxJQUFJLENBQUMxRixJQUFJLENBQUM7a0JBQzlCLElBQUlzVSxLQUFLLENBQUN2UCxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUF0QyxhQUFjLENBQUMwRCxRQUFRLENBQUNtSyxZQUFZLEVBQUU7b0JBQzNELElBQUksQ0FBQyxDQUFBN04sYUFBYyxDQUFDa1IsY0FBYyxDQUFDVyxLQUFLLENBQUN2UCxFQUFFLENBQUM7O2tCQUc3QyxJQUFJLENBQUMsQ0FBQXRDLGFBQWMsQ0FBQ2dDLE9BQU8sQ0FBQyxRQUFRLENBQUM7O2dCQUV0QyxPQUFPLElBQUksQ0FBQyxDQUFBMUQsT0FBUSxDQUFDaEIsUUFBUSxDQUFDO2tCQUFFQztnQkFBSSxDQUFFLENBQUM7ZUFDdkMsQ0FBQyxPQUFPc0IsS0FBSyxFQUFFO2dCQUNmK0QsT0FBTyxDQUFDL0QsS0FBSyxDQUFDLGtCQUFrQixFQUFFQSxLQUFLLENBQUM7Z0JBQ3hDLE9BQU8sSUFBSSxDQUFDLENBQUFQLE9BQVEsQ0FBQ2hCLFFBQVEsQ0FBQztrQkFBRXVCO2dCQUFLLENBQUUsQ0FBQzs7WUFFMUMsQ0FBQztZQUVEcUUsSUFBSSxHQUFHQSxDQUFBLEtBQUs7Y0FDWCxNQUFNekMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBVyxXQUFZLENBQUMsZUFBZSxDQUFDO2NBRW5ELElBQUksQ0FBQ1gsUUFBUSxDQUFDaUQsUUFBUSxDQUFDdkIsTUFBTSxDQUFDNkQsT0FBTyxFQUFFO2dCQUN0Q3BELE9BQU8sQ0FBQzhKLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdkM7O2NBR0QsSUFBSSxDQUFDLENBQUF2SixPQUFRLENBQUMxQyxRQUFRLENBQUNpRCxRQUFRLENBQUN2QixNQUFNLENBQUM7Y0FDdkM7WUFDRCxDQUFDO1lBRUQ0TSxTQUFTQSxDQUFBO2NBQ1IsTUFBTXRPLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQVcsV0FBWSxDQUFDLGVBQWUsQ0FBQztjQUNuRCxNQUFNeVEsS0FBSyxHQUFHO2dCQUFFLEdBQUdwUixRQUFRLENBQUNpRCxRQUFRLENBQUN2QjtjQUFNLENBQUU7Y0FFN0MsSUFBSSxDQUFDLENBQUFoRSxNQUFPLENBQUNzUCxXQUFXLENBQUNwTCxPQUFPLENBQUN3TSxLQUFLLElBQUc7Z0JBQ3hDLE9BQU9nRCxLQUFLLENBQUNoRCxLQUFLLENBQUM7Y0FDcEIsQ0FBQyxDQUFDO2NBRUYsSUFBSSxDQUFDLENBQUFwTyxRQUFTLENBQUMwQyxPQUFPLENBQUMwTyxLQUFLLENBQUM7WUFDOUI7WUFDQUYsV0FBVyxHQUFHLE1BQUFBLENBQU9wVSxJQUFJLEdBQUdvSyxTQUFTLEtBQUk7Y0FDeEMsSUFBSTtnQkFDSCxNQUFNLElBQUksQ0FBQyxDQUFBdkcsV0FBWSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUV2QyxJQUFJN0QsSUFBSSxFQUFFO2tCQUNULElBQUksQ0FBQyxDQUFBWSxNQUFPLENBQUNxRCxHQUFHLENBQUNqRSxJQUFJLENBQUM7O2dCQUd2QixNQUFNd0QsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFBNUMsTUFBTyxDQUFDdU4sYUFBYSxFQUFFO2dCQUUvQyxJQUFJLElBQUksQ0FBQyxDQUFBMUwsYUFBYyxFQUFFO2tCQUN4QjtrQkFDQTtrQkFDQSxNQUFNLElBQUksQ0FBQyxDQUFBQSxhQUFjLENBQUNpRCxJQUFJLENBQUNsQyxVQUFVLENBQUM7O2dCQUczQyxJQUFJLENBQUMsQ0FBQTVDLE1BQU8sQ0FBQ2dDLFlBQVksRUFBRTtnQkFFM0IsT0FBTyxJQUFJLENBQUMsQ0FBQTdCLE9BQVEsQ0FBQ2hCLFFBQVEsRUFBRTtlQUMvQixDQUFDLE9BQU9xRixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQy9ELEtBQUssQ0FBQyx3QkFBd0IsRUFBRThELENBQUMsQ0FBQzs7WUFFNUMsQ0FBQzs7VUFDRC9FLE9BQUEsQ0FBQTJRLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0SU07VUFBVSxNQUFnQnVELGtCQUFrQjtZQUNsRGpOLElBQUlBLENBQUMvRCxLQUFhLEdBQUc7WUFDckJxQyxPQUFPQSxDQUFDME8sS0FBYSxHQUFHO1lBQ3hCaFAsSUFBSUEsQ0FBQy9CLEtBQWEsR0FBRzs7VUFDckJsRCxPQUFBLENBQUFrVSxrQkFBQSxHQUFBQSxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKTTtVQUFVLE1BQWdCQyxZQUFZO1lBQzVDeFAsTUFBTUEsQ0FBQ0QsRUFBVSxHQUFHO1lBQ3BCYSxPQUFPQSxDQUFDME8sS0FBYSxHQUFHO1lBQ3hCaFAsSUFBSUEsQ0FBQy9CLEtBQWEsR0FBRzs7VUFDckJsRCxPQUFBLENBQUFtVSxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkQsSUFBQTlTLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBc1AsTUFBQSxHQUFBdFAsT0FBQTtVQUNBLElBQUEySCxLQUFBLEdBQUEzSCxPQUFBO1VBTUE7OztVQUdNLE1BQWtCOEYsZUFBZ0IsU0FBUTNFLE1BQUEsQ0FBQUUsYUFBdUI7WUFDdEUsQ0FBQTZTLE1BQU8sR0FBRyxJQUFJbFMsR0FBRyxFQUFFO1lBRW5CLENBQUFtUyxNQUFPO1lBQ1AsQ0FBQXJTLE9BQVE7WUFDUmhCLFlBQVlxVCxNQUFNLEVBQUVyUyxPQUFPLEdBQUcsSUFBSTtjQUNqQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQXFTLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQXJTLE9BQVEsR0FBR0EsT0FBTztjQUN2QixJQUFJLENBQUN1QixJQUFJLEVBQUU7WUFDWjtZQUVBLENBQUE2TSxZQUFhO1lBQ2IsTUFBTTdNLElBQUlBLENBQUE7Y0FDVCxJQUFJLElBQUksQ0FBQzJGLEtBQUssRUFBRSxPQUFPLElBQUk7Y0FDM0IsSUFBSSxJQUFJLENBQUMsQ0FBQWtILFlBQWEsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO2NBQ2pELElBQUksQ0FBQyxDQUFBQSxZQUFhLEdBQUcsSUFBSXZJLEtBQUEsQ0FBQXNCLGNBQWMsRUFBRTtjQUV6QyxJQUFJLENBQUMsQ0FBQWlILFlBQWEsQ0FBQ3ZRLE9BQU8sRUFBRTtjQUM1QixJQUFJLENBQUMsQ0FBQXVRLFlBQWEsR0FBR3JHLFNBQVM7Y0FDOUIsSUFBSSxDQUFDYixLQUFLLEdBQUcsSUFBSTtZQUNsQjtZQUVBOzs7OztZQUtBb0wsWUFBWUEsQ0FBQ2xSLFNBQVMsRUFBRXJCLEtBQUs7Y0FDNUIsTUFBTXdTLFVBQVUsR0FBR3hTLEtBQUssQ0FBQ3VGLEdBQUcsQ0FBQ3hGLElBQUksSUFBRztnQkFDbkMsSUFBSSxJQUFJLENBQUMwUyxPQUFPLENBQUNwUixTQUFTLEVBQUV0QixJQUFJLENBQUM0QyxFQUFFLENBQUMsRUFBRTtrQkFDckMsT0FBTyxJQUFJLENBQUNtRSxPQUFPLENBQUN6RixTQUFTLEVBQUV0QixJQUFJLENBQUM0QyxFQUFFLENBQUM7O2dCQUd4QyxPQUFPLElBQUksQ0FBQ29PLE1BQU0sQ0FBQzFQLFNBQVMsRUFBRXRCLElBQUksQ0FBQztjQUNwQyxDQUFDLENBQUM7WUFDSDtZQUVBOzs7Ozs7Ozs7O1lBVUEwUyxPQUFPQSxDQUFDcFIsU0FBUyxFQUFFc0IsRUFBRTtjQUNwQixPQUFPLElBQUksQ0FBQyxDQUFBMFAsTUFBTyxDQUFDNU0sR0FBRyxDQUFDcEUsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUFnUixNQUFPLENBQUM5VCxHQUFHLENBQUM4QyxTQUFTLENBQUMsQ0FBQ29FLEdBQUcsQ0FBQzlDLEVBQUUsQ0FBQztZQUMxRTtZQUVBbUUsT0FBT0EsQ0FBQ3pGLFNBQVMsRUFBRXNCLEVBQUU7Y0FDcEIsSUFBSSxDQUFDLElBQUksQ0FBQzhQLE9BQU8sQ0FBQ3BSLFNBQVMsRUFBRXNCLEVBQUUsQ0FBQyxFQUFFLE1BQU0sSUFBSXJCLEtBQUssQ0FBQyxRQUFRcUIsRUFBRSw2QkFBNkJ0QixTQUFTLEVBQUUsQ0FBQztjQUNyRyxPQUFPLElBQUksQ0FBQyxDQUFBZ1IsTUFBTyxDQUFDOVQsR0FBRyxDQUFDOEMsU0FBUyxDQUFDLENBQUM5QyxHQUFHLENBQUNvRSxFQUFFLENBQUM7WUFDM0M7WUFFQSxDQUFBK1AsUUFBU0MsQ0FBQ2xRLEtBQUs7Y0FDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE0UCxNQUFPLENBQUM1TSxHQUFHLENBQUNoRCxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTRQLE1BQU8sQ0FBQ3hRLEdBQUcsQ0FBQ1ksS0FBSyxFQUFFLElBQUl0QyxHQUFHLEVBQUUsQ0FBQztjQUNoRSxPQUFPLElBQUksQ0FBQyxDQUFBa1MsTUFBTyxDQUFDOVQsR0FBRyxDQUFDa0UsS0FBSyxDQUFDO1lBQy9CO1lBRUFzTyxNQUFNQSxDQUFDMVAsU0FBUyxFQUFFekQsSUFBSTtjQUNyQixNQUFNbUcsUUFBUSxHQUFHLElBQUkwSixNQUFBLENBQUF4QixRQUFRLENBQUM1SyxTQUFTLEVBQUV6RCxJQUFJLENBQUM7Y0FDOUNtRyxRQUFRLENBQUNvSSxTQUFTLENBQUN2TyxJQUFJLENBQUM7Y0FDeEIsSUFBSSxDQUFDLENBQUE4VSxRQUFTLENBQUNyUixTQUFTLENBQUMsQ0FBQ1EsR0FBRyxDQUFDa0MsUUFBUSxDQUFDdkIsTUFBTSxDQUFDRyxFQUFFLEVBQUVvQixRQUFRLENBQUM7Y0FDM0QsT0FBT0EsUUFBUTtZQUNoQjtZQUVBLE1BQU14RixHQUFHQSxDQUFDOEMsU0FBaUIsRUFBRXNCLEVBQUUsR0FBR3FGLFNBQVM7Y0FDMUM7Y0FDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFxSyxNQUFPLENBQUM1TSxHQUFHLENBQUNwRSxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQWdSLE1BQU8sQ0FBQ3hRLEdBQUcsQ0FBQ1IsU0FBUyxFQUFFLElBQUlsQixHQUFHLEVBQUUsQ0FBQztjQUN4RTtjQUNBLElBQUksSUFBSSxDQUFDLENBQUFrUyxNQUFPLENBQUM1TSxHQUFHLENBQUNwRSxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQWdSLE1BQU8sQ0FBQzlULEdBQUcsQ0FBQzhDLFNBQVMsQ0FBQyxDQUFDb0UsR0FBRyxDQUFDOUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZFLE1BQU1vQixRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFzTyxNQUFPLENBQUM5VCxHQUFHLENBQUM4QyxTQUFTLENBQUMsQ0FBQzlDLEdBQUcsQ0FBQ29FLEVBQUUsQ0FBQztnQkFDcEQsT0FBT29CLFFBQVE7O1lBRWpCO1lBRUEsTUFBTTBCLEdBQUdBLENBQUNwRSxTQUFTLEVBQUVzQixFQUFFO2NBQ3RCLElBQUksSUFBSSxDQUFDLENBQUEwUCxNQUFPLENBQUM1TSxHQUFHLENBQUNwRSxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQWdSLE1BQU8sQ0FBQzlULEdBQUcsQ0FBQzhDLFNBQVMsQ0FBQyxDQUFDb0UsR0FBRyxDQUFDOUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxJQUFJO1lBQ3BGO1lBRUEsT0FBTyxDQUFBaVEsR0FBSSxHQUFHLElBQUl6UyxHQUFHLEVBQUU7WUFFdkI7Ozs7OztZQU1BLE9BQU81QixHQUFHQSxDQUFDK1QsTUFBTSxFQUFFclMsT0FBUTtjQUMxQixJQUFJLElBQUksQ0FBQyxDQUFBMlMsR0FBSSxDQUFDbk4sR0FBRyxDQUFDNk0sTUFBTSxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQU0sR0FBSSxDQUFDclUsR0FBRyxDQUFDK1QsTUFBTSxDQUFDO2NBQ3ZELE1BQU14UyxFQUFFLEdBQUcsSUFBSW1FLGVBQWUsQ0FBQ3FPLE1BQU0sRUFBRXJTLE9BQU8sQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQTJTLEdBQUksQ0FBQy9RLEdBQUcsQ0FBQ3lRLE1BQU0sRUFBRXhTLEVBQUUsQ0FBQztjQUN6QixPQUFPQSxFQUFFO1lBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxR0QsSUFBQVIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUEwVSxLQUFBLEdBQUExVSxPQUFBO1VBTU0sTUFBTzhOLFFBQVMsU0FBUTNNLE1BQUEsQ0FBQUUsYUFBd0I7WUFDckQsQ0FBQWdELE1BQU8sR0FBUSxFQUFFO1lBQ2pCLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBQ0EsQ0FBQUcsRUFBRztZQUNILENBQUFGLEtBQU07WUFDTixDQUFBMEYsU0FBVTtZQUNWLENBQUF1SCxLQUFNO1lBQ054QixZQUFZO1lBRVosSUFBSXdCLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUEsS0FBS0EsQ0FBQzFRLEtBQWM7Y0FDdkIsSUFBSSxDQUFDLENBQUEwUSxLQUFNLEdBQUcxUSxLQUFLO2NBQ25CLElBQUksQ0FBQ3dCLFlBQVksRUFBRTtZQUNwQjtZQUVBLENBQUFzUyxLQUFNO1lBQ04sSUFBSTNLLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0EsSUFBSUEsU0FBU0EsQ0FBQ25KLEtBQUs7Y0FDbEIsSUFBSUEsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBbUosU0FBVSxFQUFFO2NBRS9CLElBQUksQ0FBQyxDQUFBQSxTQUFVLEdBQUduSixLQUFLO2NBQ3ZCLElBQUksQ0FBQ3dCLFlBQVksRUFBRTtZQUNwQjtZQUVBdkIsWUFBWXdELEtBQUssRUFBRTdFLElBQUEsR0FBa0I7Y0FBRStFLEVBQUUsRUFBRXFGO1lBQVMsQ0FBRTtjQUNyRCxLQUFLLEVBQUU7Y0FFUCxNQUFNO2dCQUFFckY7Y0FBRSxDQUFFLEdBQUcvRSxJQUFJO2NBQ25CLElBQUksQ0FBQyxDQUFBNkUsS0FBTSxHQUFHQSxLQUFLO2NBQ25CLElBQUksQ0FBQyxDQUFBaU4sS0FBTSxHQUFHL00sRUFBRSxLQUFLcUYsU0FBUztjQUM5QixJQUFJLENBQUMsQ0FBQXJGLEVBQUcsR0FBR0EsRUFBRTtjQUNiLElBQUksQ0FBQ3VMLFlBQVksR0FBR3RRLElBQUksQ0FBQ3NRLFlBQVksSUFBSSxJQUFBMkUsS0FBQSxDQUFBRSxFQUFNLEdBQUU7Y0FDakQsSUFBSSxDQUFDcFEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBQSxFQUFHLEdBQUcsSUFBSSxDQUFDdUwsWUFBWTtjQUNyQyxJQUFJLElBQUksQ0FBQyxDQUFBdkwsRUFBRyxFQUFFLElBQUksQ0FBQyxDQUFBSCxNQUFPLENBQUNHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQUEsRUFBRztZQUN6QztZQUVBd0osU0FBUyxHQUFHdk8sSUFBSSxJQUFHO2NBQ2xCLElBQUksQ0FBQ0EsSUFBSSxFQUFFO2dCQUNWOztjQUVELE1BQU1zVSxLQUFLLEdBQUdwVCxNQUFNLENBQUNzTCxJQUFJLENBQUN4TSxJQUFJLENBQUM7Y0FDL0IsSUFBSWlVLE9BQU8sR0FBRyxLQUFLO2NBRW5CLElBQUksQ0FBQ2pVLElBQUksQ0FBQytFLEVBQUUsRUFBRS9FLElBQUksQ0FBQytFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQUEsRUFBRztjQUVoQyxNQUFNcVEsU0FBUyxHQUFHO2dCQUFFLEdBQUcsSUFBSSxDQUFDLENBQUF4UTtjQUFPLENBQUU7Y0FFckMwUCxLQUFLLENBQUN4UCxPQUFPLENBQUNoQixRQUFRLElBQUc7Z0JBQ3hCLElBQUk5RCxJQUFJLENBQUM4RCxRQUFRLENBQUMsS0FBS3NSLFNBQVMsQ0FBQ3RSLFFBQVEsQ0FBQyxFQUFFO2dCQUM1Q3NSLFNBQVMsQ0FBQ3RSLFFBQVEsQ0FBQyxHQUFHOUQsSUFBSSxDQUFDOEQsUUFBUSxDQUFDO2dCQUNwQ21RLE9BQU8sR0FBRyxJQUFJO2NBQ2YsQ0FBQyxDQUFDO2NBQ0YsSUFBSWpVLElBQUksQ0FBQ3NRLFlBQVksRUFBRSxJQUFJLENBQUNBLFlBQVksR0FBR3RRLElBQUksQ0FBQytKLFVBQVU7Y0FDMURxTCxTQUFTLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUM5SyxTQUFTLEtBQUssQ0FBQyxJQUFJLENBQUM7Y0FDakQsSUFBSSxDQUFDLENBQUEzRixNQUFPLEdBQUd3USxTQUFTO2NBQ3hCLElBQUksQ0FBQ3hTLFlBQVksRUFBRTtjQUVuQixPQUFPcVIsT0FBTztZQUNmLENBQUM7WUFFRHRGLFNBQVNBLENBQUE7Y0FDUixNQUFNL0osTUFBTSxHQUFHO2dCQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFBO2NBQU8sQ0FBRTtjQUVsQyxJQUFJLElBQUksQ0FBQzBMLFlBQVksRUFBRTFMLE1BQU0sQ0FBQzBMLFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVk7Y0FDOUQ7Y0FDQSxPQUFPMUwsTUFBTTtZQUNkOztVQUNBdkUsT0FBQSxDQUFBZ08sUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pGRCxJQUFBM00sTUFBQSxHQUFBbkIsT0FBQTtVQUdNLE1BQW1CK1UsWUFBYSxTQUFRNVQsTUFBQSxDQUFBRSxhQUE0QjtVQUFHdkIsT0FBQSxDQUFBaVYsWUFBQSxHQUFBQSxZQUFBO1VBRTdFLE1BQU1DLFlBQVksR0FBRyxJQUFJRCxZQUFZLEVBQUUifQ==