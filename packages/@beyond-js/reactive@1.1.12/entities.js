System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/settings", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/database", "@beyond-js/kernel@0.1.9/core", "dexie@3.2.7", "@beyond-js/events@0.0.7/events", "uuid@9.0.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, TCustomAdapter, IConfig, IResponseAdapter, Collection, CollectionLocalProvider, Book, IProvider, Item, IItem, LocalProvider, CollectionProvider, ItemProvider, RegistryFactory, StoreRecords, __beyond_pkg, hmr;
  _export({
    TCustomAdapter: void 0,
    IConfig: void 0,
    IResponseAdapter: void 0,
    Collection: void 0,
    CollectionLocalProvider: void 0,
    Book: void 0,
    IProvider: void 0,
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
        hash: 2618188820,
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
              this.#elements.clear();
              value.forEach(item => this.#elements.set(item.id, item));
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
              this.items = await this.#loadManager.processEntries(this.#localProvider.items);
              this.trigger('change');
            };
            setOffline = value => this.localProvider.setOffline(value);
            setItems(values) {
              this.items = values;
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
              this.items = [];
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
              this.items = items;
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
        hash: 2610215615,
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
                const ids = entries.map(i => i.id);
                const notExits = [...this.#parent.elements.values()].filter(item => !ids.includes(item.id));
                notExits.forEach(id => {
                  this.#parent.elements.delete(id);
                });
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
        hash: 1851281487,
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
        hash: 1906342570,
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
        "im": "./interfaces/provider",
        "from": "IProvider",
        "name": "IProvider"
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
        (require || prop === 'IProvider') && _export("IProvider", IProvider = require ? require('./interfaces/provider').IProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwibG9jYWxkYiIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJjbGVhciIsImZvckVhY2giLCJzZXQiLCJpZCIsInRyaWdnZXJFdmVudCIsImNvdW50ZXJzIiwidG90YWwiLCJuZXh0Iiwic2F2ZU1hbmFnZXIiLCJsb2FkTWFuYWdlciIsInByb3ZpZGVyIiwic29ydEJ5Iiwic29ydERpcmVjdGlvbiIsInJlc3BvbnNlQWRhcHRlciIsImluaXRpYWxTcGVjcyIsInNwZWNzIiwicHJvcGVydGllcyIsInN0b3JlTmFtZSIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwiYmluZCIsIkNvbGxlY3Rpb25Mb2NhbFByb3ZpZGVyIiwiQ29sbGVjdGlvblNhdmVNYW5hZ2VyIiwiQ29sbGVjdGlvbkxvYWRNYW5hZ2VyIiwib24iLCJsaXN0ZW5JdGVtcyIsIiNsaXN0ZW5JdGVtcyIsInByb2Nlc3NFbnRyaWVzIiwidHJpZ2dlciIsInNldE9mZmxpbmUiLCJzZXRJdGVtcyIsInN0b3JlIiwiI2NsZWFyIiwiZGVsZXRlIiwiaWRzIiwic29mdERlbGV0ZSIsImRlbGV0ZUl0ZW1zIiwiZSIsImNvbnNvbGUiLCJsb2FkIiwiYXJncyIsImxvY2FsTG9hZCIsImZpbHRlciIsInNhdmUiLCJzeW5jIiwicHVibGlzaCIsInRvU3luYyIsInNldEVudHJpZXMiLCJlbnRyaWVzIiwiX2ZhY3RvcnkiLCJsb2FkZWQiLCJwYXJlbnRCcmlkZ2UiLCJyZWdpc3RyeSIsImxvY2FsSWRzIiwiU2V0IiwicmVtb3RlRGF0YSIsIlJlZ2lzdHJ5RmFjdG9yeSIsInBhcmFtcyIsImxvY2FsRGF0YSIsIm5ld0l0ZW1zIiwidXBkYXRlIiwiY29uY2F0IiwiYWRkIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwicmVtb3RlTG9hZCIsImV4YyIsImZldGNoZWQiLCJsYW5kZWQiLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJmcm9tQmFja2VuZCIsIm1hcCIsIm5vdEluQmFjayIsImluY2x1ZGVzIiwibGVuZ3RoIiwiZGVsZXRlZEVudHJpZXMiLCJ1cGRhdGVMb2NhbEl0ZW1zIiwicHJvbWlzZXMiLCJyZWNvcmQiLCJoYXMiLCJwdXNoIiwiaXNSZWFkeSIsImkiLCJub3RFeGl0cyIsImFsbCIsImluZGV4IiwiX2NvcmUiLCJfZGF0YWJhc2UiLCJfc2F2ZXIiLCJfbG9hZGVyIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsIm9uTGluZSIsIm9mZmxpbmUiLCJkYXRhYmFzZSIsImRhdGFiYXNlTmFtZSIsImV4aXN0cyIsImZvdW5kIiwicmVnaXN0cnlGYWN0b3J5IiwiYXBwbHkiLCJhY3RpdmUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJMb2NhbFByb3ZpZGVyTG9hZGVyIiwicHJvbWlzZUluaXQiLCJyZWFkeSIsIlBlbmRpbmdQcm9taXNlIiwiREJNYW5hZ2VyIiwiTG9jYWxQcm92aWRlclNhdmVyIiwidXBzZXJ0Iiwib3JpZ2luYWxEYXRhIiwidHJhbnNhY3Rpb24iLCJpbnN0YW5jZUlkVG9JZE1hcCIsImluc3RhbmNlSWQiLCJidWxrUHV0IiwicmVjb3JkcyIsImJ1bGtHZXQiLCJleGlzdGluZ1JlY29yZHMiLCJ1bmRlZmluZWQiLCJpdGVtc1RvVXBkYXRlIiwiaXNEZWxldGVkIiwiYnVsa0RlbGV0ZSIsInNhdmVBbGwiLCJfZGV4aWUiLCJwcm9taXNlTG9hZCIsImxpc3RJdGVtcyIsImNvbmRpdGlvbnMiLCJjdXN0b21XaGVyZSIsImRlZmF1bHRXaGVyZSIsIm9yZGVyQnkiLCJjdXJyZW50TGltaXQiLCJjdXJyZW50T2Zmc2V0IiwicGFyZW50UHJpdmF0ZVByb3BzIiwicXVhbnRpdHkiLCJpc1NhbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGVyZm9ybUxvYWQiLCIjcGVyZm9ybUxvYWQiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsInJlc29sdmVQcm9taXNlTG9hZCIsImxpdmUiLCJsaXZlUXVlcnkiLCJ3aGVyZSIsInN1YnNjcmliZVRvUXVlcnkiLCJvZmZzZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4ZXMiLCJzY2hlbWEiLCJuYW1lIiwia2V5cyIsImtleSIsImNvbGxlY3Rpb24iLCJxdWVyeSIsInRvQXJyYXkiLCJjdXN0b21GaWx0ZXIiLCJjYWxsYmFjayIsIiNzdWJzY3JpYmVUb1F1ZXJ5IiwiY3VycmVudFBhZ2UiLCJzdWJzY3JpYmUiLCJoYW5kbGVRdWVyeVJlc3BvbnNlIiwiZXJyIiwiI2hhbmRsZVF1ZXJ5UmVzcG9uc2UiLCJzYW1lUXVlcnkiLCJzb3J0IiwiYSIsImIiLCJjdXJyZW50TWFwIiwiY2xlYW51cEl0ZW1zIiwiI2NsZWFudXBJdGVtcyIsIiNyZXNvbHZlUHJvbWlzZUxvYWQiLCJfcmVnaXN0cnkiLCJiYXRjaGVzIiwicHJvY2VzcyIsImdldFByb3BlcnRpZXMiLCJ0b1NhdmUiLCJSZWdpc3RyeSIsImRlbGV0ZWQiLCJzZXRWYWx1ZXMiLCJjaHVua3MiLCJiYXRjaCIsInNwbGljZSIsImdldFZhbHVlcyIsInJlc3VsdHMiLCJhbGxTZXR0bGVkIiwibWFwcGVkRm4iLCJyZXN1bHQiLCJmYWlsZWQiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJ3YXJuIiwiYnVsa1NhdmUiLCJzZW5kQ2h1bmsiLCJjaHVuayIsInN1Y2Nlc3MiLCJzcGxpdERhdGFJbnRvQ2h1bmtzIiwic2xpY2UiLCJlcXVhbHMiLCJmYWlsZWRDaHVua3MiLCJzdWNjZXNzQ2h1bmtzIiwiX2luZGV4IiwiVXNlclByb3ZpZGVyIiwiQm9vayIsIkl0ZW0iLCJfc2F2ZSIsImxvY2FsRmllbGRzIiwic2tlbGV0b24iLCJ1bmlxdWUiLCJfX2dldCIsIl9faW5zdGFuY2VJZCIsImNoZWNrUmVhZHkiLCJvYmplY3RSZWFkeSIsInByb21pc2VSZWFkeSIsImluaXRQcm9taXNlIiwiY29uZmlnIiwiI3N0YXJ0Iiwic3BjcyIsIkxvY2FsUHJvdmlkZXIiLCJJdGVtU2F2ZU1hbmFnZXIiLCJJdGVtTG9hZE1hbmFnZXIiLCJpbml0aWFsaXNlIiwib25SZWFkeSIsInRyYWNlIiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwiZm9yY2VTeW5jIiwic2FtZSIsIm9yaWdpbmFsIiwiaXNOYU4iLCJwYXJzZUludCIsImxvYWRNZXRob2QiLCJpc05ldyIsImZhY3RvcnlSZWdpc3RyeSIsIl9faWQiLCJmbG9vciIsInJhbmRvbSIsImdldFJlZ2lzdHJ5IiwiZGVlcENvbXBhcmUiLCJvYmoxIiwib2JqMiIsImtleXMxIiwia2V5czIiLCJ2YWwxIiwidmFsMiIsImFyZU9iamVjdHMiLCJpc09iamVjdCIsIm9iamVjdCIsImlzVW5wdWJsaXNoZWQiLCIjaXNVbnB1Ymxpc2hlZCIsInRvQ29tcGFyZSIsImFyZUVxdWFsIiwibGlzdGVuUmVnaXN0cnkiLCJjcmVhdGUiLCIjbGlzdGVuUmVnaXN0cnkiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsImRlbGV0ZVJlZ2lzdHJ5IiwiaWRlbnRpZmllciIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCIjZGVsZXRlIiwiI3VwZGF0ZSIsInVwZGF0ZWQiLCJwbGFpbiIsInB1dCIsImxvY2FsVXBkYXRlIiwicmVtb3RlUmVzcG9uc2UiLCJwcm9wcyIsIkNvbGxlY3Rpb25Qcm92aWRlciIsIkl0ZW1Qcm92aWRlciIsInN0b3JlcyIsImRiTmFtZSIsInJlZ2lzdGVyTGlzdCIsInJlZ2lzdHJpZXMiLCJoYXNJdGVtIiwiZ2V0U3RvcmUiLCIjZ2V0U3RvcmUiLCJkYnMiLCJfdXVpZCIsImtleUlkIiwidjQiLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VzIjpbIi9hZGFwdGVyL2RlZmF1bHQudHMiLCIvYWRhcHRlci9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvYWRhcHRlci9sZWdhY3kudHMiLCIvY2FjaGUvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGlsZHJlbi1jb25zdHJ1Y3Rvci1wcm9wcy50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbGxlY3Rpb24vbG9hZC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvbG9hZGVyLnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvc2F2ZXIudHMiLCIvY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU0sTUFBT0EsY0FBYztZQUMxQkMsUUFBUUEsQ0FBQ0MsSUFBUztjQUNqQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFHLFVBQVVBLENBQUNILElBQVM7Y0FDbkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBSSxjQUFjQSxDQUFDSixJQUFTO2NBQ3ZCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7O1VBQ0FLLE9BQUEsQ0FBQVAsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFRLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQWFNLE1BQU9HLGVBQWU7WUFDM0IsT0FBT0MsR0FBR0EsQ0FBQ0MsTUFBTSxFQUFFQyxRQUE2QjtjQUMvQ0EsUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQVEsR0FBR1AsU0FBQSxDQUFB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