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
        hash: 3458767989,
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
                if (typeof error === 'object') {
                  throw new Error(error?.text || error?.message || 'ERROR_DATA_QUERY');
                }
                typeof error === 'string' ? error : 'ERROR_DATA_QUERY';
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
        hash: 3337800607,
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
              return [...this.#elements.values()];
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
        hash: 1746061155,
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
            #localIds = new Set();
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
              items.forEach(item => this.#localIds.add(item.id));
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
              const fromBackend = this.#remoteElements.map(item => item.id);
              const notInBack = [...this.#localIds].filter(id => !fromBackend.includes(id));
              if (notInBack.length) this.#localProvider.deleteItems(notInBack);
              notInBack.forEach(id => this.#parent.elements.delete(id));
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
              if (!data.entries?.length) {
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
              if (!response.status) throw response.error;
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
        hash: 2102334450,
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
            // Method to delete multiple items by their IDs using an existing Dexie store
            async deleteItems(ids) {
              try {
                await this.store.bulkDelete(ids);
              } catch (error) {
                console.error('Failed to delete items:', error);
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
        hash: 1093353399,
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
        hash: 3620101475,
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
        hash: 837809265,
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
              try {
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
              } catch (e) {
                this.#parent.found = false;
                this.#parent.fetching = false;
              }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwiaXRlbXMiLCJsb2NhbGRiIiwiZWxlbWVudHMiLCJNYXAiLCJ2YWx1ZXMiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInByb3BlcnRpZXMiLCJzdG9yZU5hbWUiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdCIsImdldFByb3BlcnR5IiwicHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImJyaWRnZSIsInNldCIsImNsZWFyIiwiYmluZCIsIkNvbGxlY3Rpb25Mb2NhbFByb3ZpZGVyIiwiQ29sbGVjdGlvblNhdmVNYW5hZ2VyIiwiQ29sbGVjdGlvbkxvYWRNYW5hZ2VyIiwib24iLCJsaXN0ZW5JdGVtcyIsIiNsaXN0ZW5JdGVtcyIsInByb2Nlc3NFbnRyaWVzIiwidHJpZ2dlciIsInNldE9mZmxpbmUiLCJzZXRJdGVtcyIsInN0b3JlIiwiZm9yRWFjaCIsImlkIiwiI2NsZWFyIiwiZGVsZXRlIiwiaWRzIiwic29mdERlbGV0ZSIsImRlbGV0ZUl0ZW1zIiwiZSIsImNvbnNvbGUiLCJsb2FkIiwiYXJncyIsImxvY2FsTG9hZCIsImZpbHRlciIsInNhdmUiLCJzeW5jIiwicHVibGlzaCIsInRvU3luYyIsInNldEVudHJpZXMiLCJlbnRyaWVzIiwiX2ZhY3RvcnkiLCJsb2FkZWQiLCJwYXJlbnRCcmlkZ2UiLCJyZWdpc3RyeSIsImxvY2FsSWRzIiwiU2V0IiwicmVtb3RlRGF0YSIsIlJlZ2lzdHJ5RmFjdG9yeSIsInBhcmFtcyIsImxvY2FsRGF0YSIsIm5ld0l0ZW1zIiwidXBkYXRlIiwiY29uY2F0IiwiYWRkIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwicmVtb3RlTG9hZCIsImV4YyIsImZldGNoZWQiLCJsYW5kZWQiLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJmcm9tQmFja2VuZCIsIm1hcCIsIm5vdEluQmFjayIsImluY2x1ZGVzIiwibGVuZ3RoIiwiZGVsZXRlZEVudHJpZXMiLCJ1cGRhdGVMb2NhbEl0ZW1zIiwicHJvbWlzZXMiLCJyZWNvcmQiLCJoYXMiLCJwdXNoIiwiaXNSZWFkeSIsImFsbCIsImluZGV4IiwiX2NvcmUiLCJfZGF0YWJhc2UiLCJfc2F2ZXIiLCJfbG9hZGVyIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsIm9uTGluZSIsIm9mZmxpbmUiLCJkYXRhYmFzZSIsImRhdGFiYXNlTmFtZSIsImV4aXN0cyIsImZvdW5kIiwicmVnaXN0cnlGYWN0b3J5IiwiYXBwbHkiLCJhY3RpdmUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJMb2NhbFByb3ZpZGVyTG9hZGVyIiwicHJvbWlzZUluaXQiLCJyZWFkeSIsIlBlbmRpbmdQcm9taXNlIiwiREJNYW5hZ2VyIiwiTG9jYWxQcm92aWRlclNhdmVyIiwidXBzZXJ0Iiwib3JpZ2luYWxEYXRhIiwidHJhbnNhY3Rpb24iLCJpbnN0YW5jZUlkVG9JZE1hcCIsImluc3RhbmNlSWQiLCJidWxrUHV0IiwicmVjb3JkcyIsImJ1bGtHZXQiLCJleGlzdGluZ1JlY29yZHMiLCJ1bmRlZmluZWQiLCJpdGVtc1RvVXBkYXRlIiwiaXNEZWxldGVkIiwiYnVsa0RlbGV0ZSIsInNhdmVBbGwiLCJfZGV4aWUiLCJwcm9taXNlTG9hZCIsImxpc3RJdGVtcyIsImNvbmRpdGlvbnMiLCJjdXN0b21XaGVyZSIsImRlZmF1bHRXaGVyZSIsIm9yZGVyQnkiLCJjdXJyZW50TGltaXQiLCJjdXJyZW50T2Zmc2V0IiwicGFyZW50UHJpdmF0ZVByb3BzIiwicXVhbnRpdHkiLCJpc1NhbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGVyZm9ybUxvYWQiLCIjcGVyZm9ybUxvYWQiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsInJlc29sdmVQcm9taXNlTG9hZCIsImxpdmUiLCJsaXZlUXVlcnkiLCJ3aGVyZSIsInN1YnNjcmliZVRvUXVlcnkiLCJvZmZzZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4ZXMiLCJzY2hlbWEiLCJuYW1lIiwia2V5cyIsImtleSIsImNvbGxlY3Rpb24iLCJxdWVyeSIsImkiLCJ0b0FycmF5IiwiY3VzdG9tRmlsdGVyIiwiY2FsbGJhY2siLCIjc3Vic2NyaWJlVG9RdWVyeSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwiaGFuZGxlUXVlcnlSZXNwb25zZSIsImVyciIsIiNoYW5kbGVRdWVyeVJlc3BvbnNlIiwic2FtZVF1ZXJ5Iiwic29ydCIsImEiLCJiIiwiY3VycmVudE1hcCIsImNsZWFudXBJdGVtcyIsIiNjbGVhbnVwSXRlbXMiLCIjcmVzb2x2ZVByb21pc2VMb2FkIiwiX3JlZ2lzdHJ5IiwiYmF0Y2hlcyIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIl9pbmRleCIsIlVzZXJQcm92aWRlciIsIkJvb2siLCJJdGVtIiwiX3NhdmUiLCJsb2NhbEZpZWxkcyIsInNrZWxldG9uIiwidW5pcXVlIiwiX19nZXQiLCJfX2luc3RhbmNlSWQiLCJjaGVja1JlYWR5Iiwib2JqZWN0UmVhZHkiLCJwcm9taXNlUmVhZHkiLCJpbml0UHJvbWlzZSIsImNvbmZpZyIsIiNzdGFydCIsInNwY3MiLCJMb2NhbFByb3ZpZGVyIiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwiaW5pdGlhbGlzZSIsIm9uUmVhZHkiLCJ0cmFjZSIsInRvSXRlcmF0ZSIsImZpZWxkIiwiZ2V0UHJvcGVydHlOYW1lcyIsImZvcmNlU3luYyIsInNhbWUiLCJvcmlnaW5hbCIsImlzTmFOIiwicGFyc2VJbnQiLCJsb2FkTWV0aG9kIiwiaXNOZXciLCJmYWN0b3J5UmVnaXN0cnkiLCJfX2lkIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRSZWdpc3RyeSIsImRlZXBDb21wYXJlIiwib2JqMSIsIm9iajIiLCJrZXlzMSIsImtleXMyIiwidmFsMSIsInZhbDIiLCJhcmVPYmplY3RzIiwiaXNPYmplY3QiLCJvYmplY3QiLCJpc1VucHVibGlzaGVkIiwiI2lzVW5wdWJsaXNoZWQiLCJ0b0NvbXBhcmUiLCJhcmVFcXVhbCIsImxpc3RlblJlZ2lzdHJ5IiwiY3JlYXRlIiwiI2xpc3RlblJlZ2lzdHJ5IiwiZHVwbGljYXRlZCIsInZhbGlkYXRlVW5pcXVlRmllbGRzIiwiZmllbGRzIiwiY2hlY2tQcm9taXNlcyIsInRoZW4iLCJkdXBsaWNhdGVGaWVsZHMiLCJkZWxldGVSZWdpc3RyeSIsImlkZW50aWZpZXIiLCJpc1BsYWluT2JqZWN0Iiwib2JqIiwiI2RlbGV0ZSIsIiN1cGRhdGUiLCJ1cGRhdGVkIiwicGxhaW4iLCJwdXQiLCJsb2NhbFVwZGF0ZSIsInJlbW90ZVJlc3BvbnNlIiwicHJvcHMiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJJdGVtUHJvdmlkZXIiLCJzdG9yZXMiLCJkYk5hbWUiLCJyZWdpc3Rlckxpc3QiLCJyZWdpc3RyaWVzIiwiaGFzSXRlbSIsImdldFN0b3JlIiwiI2dldFN0b3JlIiwiZGJzIiwiX3V1aWQiLCJrZXlJZCIsInY0IiwibmV3VmFsdWVzIiwiaXNEZWxlbGV0ZWQiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiXSwic291cmNlcyI6WyIvYWRhcHRlci9kZWZhdWx0LnRzIiwiL2FkYXB0ZXIvaW5kZXgudHMiLCIvaW50ZXJmYWNlLnRzIiwiL2FkYXB0ZXIvbGVnYWN5LnRzIiwiL2NhY2hlL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY2hpbGRyZW4tY29uc3RydWN0b3ItcHJvcHMudHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb2xsZWN0aW9uL2xvYWQudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2xvYWRlci50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL3NhdmVyLnRzIiwiL2NvbGxlY3Rpb24vcHVibGlzaC50cyIsIi9leGFtcGxlL2luZGV4LnRzIiwiL3Byb3ZpZGVyLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvY29uZmlnLnRzIiwiL2l0ZW0udHMiLCIvaXRlbS9sb2FkLnRzIiwiL2l0ZW0vbG9jYWwtcHJvdmlkZXIudHMiLCIvaXRlbS9zYXZlLnRzIiwiL3Byb3ZpZGVycy9jb2xsZWN0aW9uLnRzIiwiL3Byb3ZpZGVycy9pdGVtLnRzIiwiL3JlZ2lzdHJ5L2ZhY3RvcnkudHMiLCIvcmVnaXN0cnkvaW5kZXgudHMiLCIvcmVnaXN0cnkvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU0sTUFBT0EsY0FBYztZQUMxQkMsUUFBUUEsQ0FBQ0MsSUFBUztjQUNqQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFHLFVBQVVBLENBQUNILElBQVM7Y0FDbkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBSSxjQUFjQSxDQUFDSixJQUFTO2NBQ3ZCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7O1VBQ0FLLE9BQUEsQ0FBQVAsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFRLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQWFNLE1BQU9HLGVBQWU7WUFDM0IsT0FBT0MsR0FBR0EsQ0FBQ0MsTUFBTSxFQUFFQyxRQUE2QjtjQUMvQ0EsUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQVEsR0FBR1AsU0FBQSxDQUFBUSxjQUFjLENBQUND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