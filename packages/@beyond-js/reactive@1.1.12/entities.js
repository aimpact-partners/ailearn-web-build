System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/settings", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/database", "@beyond-js/kernel@0.1.9/core", "dexie@3.2.7", "@beyond-js/events@0.0.7/events", "uuid@9.0.1"], function (_export, _context) {
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
    }, function (_beyondJsReactive1112Settings) {
      dependency_1 = _beyondJsReactive1112Settings;
    }, function (_beyondJsReactive1112Model) {
      dependency_2 = _beyondJsReactive1112Model;
    }, function (_beyondJsReactive1112Database) {
      dependency_3 = _beyondJsReactive1112Database;
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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["dexie", "3.2.3"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.12"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.12/entities"
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
        hash: 1258220075,
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
                set: setProperty,
                clear: this.#clear.bind(this)
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
              items.forEach(item => {
                if (item.id) this.#elements.set(item.id, item);
              });
            }
            #clear() {
              this.#items = [];
              this.#elements.clear();
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
        hash: 2251829216,
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
            /**
             *
             * @param data
             * @returns
             */
            async processRemoteEntries(data) {
              if (!data.entries.length) {
                this.#parentBridge.clear();
                this.parent.triggerEvent();
              }
              if (!data.entries && !data.items) {
                /**
                 * the items property is not used in the current version, but it is still supported
                 * it will be removed in the future
                 */
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
        hash: 306116134,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwiaXRlbXMiLCJsb2NhbGRiIiwiZWxlbWVudHMiLCJNYXAiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInByb3BlcnRpZXMiLCJzdG9yZU5hbWUiLCJFcnJvciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwic2V0IiwiY2xlYXIiLCJiaW5kIiwiQ29sbGVjdGlvbkxvY2FsUHJvdmlkZXIiLCJDb2xsZWN0aW9uU2F2ZU1hbmFnZXIiLCJDb2xsZWN0aW9uTG9hZE1hbmFnZXIiLCJvbiIsImxpc3Rlbkl0ZW1zIiwiI2xpc3Rlbkl0ZW1zIiwicHJvY2Vzc0VudHJpZXMiLCJ0cmlnZ2VyIiwic2V0T2ZmbGluZSIsInNldEl0ZW1zIiwidmFsdWVzIiwic3RvcmUiLCJmb3JFYWNoIiwiaWQiLCIjY2xlYXIiLCJkZWxldGUiLCJpZHMiLCJzb2Z0RGVsZXRlIiwiZGVsZXRlSXRlbXMiLCJlIiwiY29uc29sZSIsImxvYWQiLCJhcmdzIiwibG9jYWxMb2FkIiwiZmlsdGVyIiwic2F2ZSIsInN5bmMiLCJwdWJsaXNoIiwidG9TeW5jIiwic2V0RW50cmllcyIsImVudHJpZXMiLCJfZmFjdG9yeSIsImxvYWRlZCIsInBhcmVudEJyaWRnZSIsInJlZ2lzdHJ5IiwicmVtb3RlRGF0YSIsIlJlZ2lzdHJ5RmFjdG9yeSIsInBhcmFtcyIsImxvY2FsRGF0YSIsIm5ld0l0ZW1zIiwidXBkYXRlIiwiY29uY2F0IiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwicmVtb3RlTG9hZCIsImV4YyIsImZldGNoZWQiLCJsYW5kZWQiLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJsZW5ndGgiLCJkZWxldGVkRW50cmllcyIsInVwZGF0ZUxvY2FsSXRlbXMiLCJwcm9taXNlcyIsIm1hcCIsInJlY29yZCIsImhhcyIsInB1c2giLCJpc1JlYWR5IiwiYWxsIiwiaW5kZXgiLCJfY29yZSIsIl9kYXRhYmFzZSIsIl9zYXZlciIsIl9sb2FkZXIiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwiZXhpc3RzIiwiZm91bmQiLCJyZWdpc3RyeUZhY3RvcnkiLCJhcHBseSIsImFjdGl2ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsIkxvY2FsUHJvdmlkZXJMb2FkZXIiLCJwcm9taXNlSW5pdCIsInJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJEQk1hbmFnZXIiLCJMb2NhbFByb3ZpZGVyU2F2ZXIiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwiaW5zdGFuY2VJZCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsIml0ZW1zVG9VcGRhdGUiLCJpc0RlbGV0ZWQiLCJzYXZlQWxsIiwiX2RleGllIiwicHJvbWlzZUxvYWQiLCJsaXN0SXRlbXMiLCJTZXQiLCJjb25kaXRpb25zIiwiY3VzdG9tV2hlcmUiLCJkZWZhdWx0V2hlcmUiLCJvcmRlckJ5IiwiY3VycmVudExpbWl0IiwiY3VycmVudE9mZnNldCIsInBhcmVudFByaXZhdGVQcm9wcyIsInF1YW50aXR5IiwiaXNTYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBlcmZvcm1Mb2FkIiwiI3BlcmZvcm1Mb2FkIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJyZXNvbHZlUHJvbWlzZUxvYWQiLCJsaXZlIiwibGl2ZVF1ZXJ5Iiwid2hlcmUiLCJzdWJzY3JpYmVUb1F1ZXJ5Iiwib2Zmc2V0IiwiaGFzT3duUHJvcGVydHkiLCJpbmRleGVzIiwic2NoZW1hIiwibmFtZSIsImtleXMiLCJrZXkiLCJpbmNsdWRlcyIsImNvbGxlY3Rpb24iLCJxdWVyeSIsImkiLCJ0b0FycmF5IiwiY3VzdG9tRmlsdGVyIiwiY2FsbGJhY2siLCIjc3Vic2NyaWJlVG9RdWVyeSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwiaGFuZGxlUXVlcnlSZXNwb25zZSIsImVyciIsIiNoYW5kbGVRdWVyeVJlc3BvbnNlIiwic2FtZVF1ZXJ5Iiwic29ydCIsImEiLCJiIiwiY3VycmVudE1hcCIsImFkZCIsImNsZWFudXBJdGVtcyIsIiNjbGVhbnVwSXRlbXMiLCIjcmVzb2x2ZVByb21pc2VMb2FkIiwiX3JlZ2lzdHJ5IiwiYmF0Y2hlcyIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIl9pbmRleCIsIlVzZXJQcm92aWRlciIsIkJvb2siLCJJdGVtIiwiX3NhdmUiLCJsb2NhbEZpZWxkcyIsInNrZWxldG9uIiwidW5pcXVlIiwiX19nZXQiLCJfX2luc3RhbmNlSWQiLCJjaGVja1JlYWR5Iiwib2JqZWN0UmVhZHkiLCJwcm9taXNlUmVhZHkiLCJpbml0UHJvbWlzZSIsImNvbmZpZyIsIiNzdGFydCIsInNwY3MiLCJMb2NhbFByb3ZpZGVyIiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwiaW5pdGlhbGlzZSIsIm9uUmVhZHkiLCJ0cmFjZSIsInRvSXRlcmF0ZSIsImZpZWxkIiwiZ2V0UHJvcGVydHlOYW1lcyIsImZvcmNlU3luYyIsInNhbWUiLCJvcmlnaW5hbCIsImlzTmFOIiwicGFyc2VJbnQiLCJsb2FkTWV0aG9kIiwiaXNOZXciLCJmYWN0b3J5UmVnaXN0cnkiLCJfX2lkIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRSZWdpc3RyeSIsImRlZXBDb21wYXJlIiwib2JqMSIsIm9iajIiLCJrZXlzMSIsImtleXMyIiwidmFsMSIsInZhbDIiLCJhcmVPYmplY3RzIiwiaXNPYmplY3QiLCJvYmplY3QiLCJpc1VucHVibGlzaGVkIiwiI2lzVW5wdWJsaXNoZWQiLCJ0b0NvbXBhcmUiLCJhcmVFcXVhbCIsImxpc3RlblJlZ2lzdHJ5IiwiY3JlYXRlIiwiI2xpc3RlblJlZ2lzdHJ5IiwiZHVwbGljYXRlZCIsInZhbGlkYXRlVW5pcXVlRmllbGRzIiwiZmllbGRzIiwiY2hlY2tQcm9taXNlcyIsInRoZW4iLCJkdXBsaWNhdGVGaWVsZHMiLCJkZWxldGVSZWdpc3RyeSIsImlkZW50aWZpZXIiLCJpc1BsYWluT2JqZWN0Iiwib2JqIiwiI2RlbGV0ZSIsIiN1cGRhdGUiLCJ1cGRhdGVkIiwicGxhaW4iLCJwdXQiLCJsb2NhbFVwZGF0ZSIsInJlbW90ZVJlc3BvbnNlIiwicHJvcHMiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJJdGVtUHJvdmlkZXIiLCJzdG9yZXMiLCJkYk5hbWUiLCJyZWdpc3Rlckxpc3QiLCJyZWdpc3RyaWVzIiwiaGFzSXRlbSIsImdldFN0b3JlIiwiI2dldFN0b3JlIiwiZGJzIiwiX3V1aWQiLCJrZXlJZCIsInY0IiwibmV3VmFsdWVzIiwiaXNEZWxlbGV0ZWQiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiXSwic291cmNlcyI6WyIvYWRhcHRlci9kZWZhdWx0LnRzIiwiL2FkYXB0ZXIvaW5kZXgudHMiLCIvaW50ZXJmYWNlLnRzIiwiL2FkYXB0ZXIvbGVnYWN5LnRzIiwiL2NhY2hlL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY2hpbGRyZW4tY29uc3RydWN0b3ItcHJvcHMudHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb2xsZWN0aW9uL2xvYWQudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2xvYWRlci50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL3NhdmVyLnRzIiwiL2NvbGxlY3Rpb24vcHVibGlzaC50cyIsIi9leGFtcGxlL2luZGV4LnRzIiwiL3Byb3ZpZGVyLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvY29uZmlnLnRzIiwiL2l0ZW0udHMiLCIvaXRlbS9sb2FkLnRzIiwiL2l0ZW0vbG9jYWwtcHJvdmlkZXIudHMiLCIvaXRlbS9zYXZlLnRzIiwiL3Byb3ZpZGVycy9jb2xsZWN0aW9uLnRzIiwiL3Byb3ZpZGVycy9pdGVtLnRzIiwiL3JlZ2lzdHJ5L2ZhY3RvcnkudHMiLCIvcmVnaXN0cnkvaW5kZXgudHMiLCIvcmVnaXN0cnkvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU0sTUFBT0EsY0FBYztZQUMxQkMsUUFBUUEsQ0FBQ0MsSUFBUztjQUNqQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFHLFVBQVVBLENBQUNILElBQVM7Y0FDbkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBSSxjQUFjQSxDQUFDSixJQUFTO2NBQ3ZCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7O1VBQ0FLLE9BQUEsQ0FBQVAsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFRLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQWFNLE1BQU9HLGVBQWU7WUFDM0IsT0FBT0MsR0FBR0EsQ0FBQ0MsTUFBTSxFQUFFQyxRQUE2QjtjQUMvQ0EsUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQVEsR0FBR1AsU0FBQSxDQUFBUSxjQUFjLENBQUNDLE9BQU87Y0FDdkQsTUFBTUMsT0FBTyxHQUFHSCxRQUFRLEtBQUssU0FBUyxHQUFHTCxRQUFBLENB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