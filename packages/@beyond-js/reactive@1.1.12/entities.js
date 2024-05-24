System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/settings", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/database", "@beyond-js/kernel@0.1.9/core", "dexie@3.2.7", "@beyond-js/events@0.0.4/events", "uuid@9.0.1"], function (_export, _context) {
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
    }, function (_beyondJsEvents004Events) {
      dependency_6 = _beyondJsEvents004Events;
    }, function (_uuid2) {
      dependency_7 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["dexie", "3.2.3"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.12"], ["@aimpact/ailearn-app", "0.0.34.dev-01"]]);
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
        hash: 134723810,
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
            p;
            #elements = new Map();
            get elements() {
              return this.#elements;
            }
            get items() {
              if (this.orderBy) {
                return [...this.#elements.values()].sort((a, b) => {
                  if (a[this.orderBy] > b[this.orderBy]) {
                    return -1;
                  }
                  if (a[this.orderBy] < b[this.orderBy]) {
                    return 1;
                  }
                  return 0;
                });
              }
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
            orderBy = 'timeCreated';
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
              this.localdb = localdb !== undefined ? localdb : true;
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
        hash: 3691964131,
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
              this.#localIds = new Set(fromBackend);
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
        hash: 1200700247,
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
              if (!this.#apply || !this.#localdb) return;
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
        hash: 738968514,
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
                // console.warn('The collection doesnt use LocalDB');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwibG9jYWxkYiIsInAiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwib3JkZXJCeSIsInZhbHVlcyIsInNvcnQiLCJhIiwiYiIsImlzT25saW5lIiwibG9jYWxQcm92aWRlciIsIkFycmF5IiwiaXNBcnJheSIsImNsZWFyIiwiZm9yRWFjaCIsInNldCIsImlkIiwidHJpZ2dlckV2ZW50IiwiY291bnRlcnMiLCJ0b3RhbCIsIm5leHQiLCJzYXZlTWFuYWdlciIsImxvYWRNYW5hZ2VyIiwicHJvdmlkZXIiLCJzb3J0QnkiLCJzb3J0RGlyZWN0aW9uIiwicmVzcG9uc2VBZGFwdGVyIiwiaW5pdGlhbFNwZWNzIiwic3BlY3MiLCJwcm9wZXJ0aWVzIiwic3RvcmVOYW1lIiwidW5kZWZpbmVkIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJiaW5kIiwiQ29sbGVjdGlvbkxvY2FsUHJvdmlkZXIiLCJDb2xsZWN0aW9uU2F2ZU1hbmFnZXIiLCJDb2xsZWN0aW9uTG9hZE1hbmFnZXIiLCJvbiIsImxpc3Rlbkl0ZW1zIiwiI2xpc3Rlbkl0ZW1zIiwicHJvY2Vzc0VudHJpZXMiLCJ0cmlnZ2VyIiwic2V0T2ZmbGluZSIsInNldEl0ZW1zIiwic3RvcmUiLCIjY2xlYXIiLCJkZWxldGUiLCJpZHMiLCJzb2Z0RGVsZXRlIiwiZGVsZXRlSXRlbXMiLCJlIiwiY29uc29sZSIsImxvYWQiLCJhcmdzIiwibG9jYWxMb2FkIiwiZmlsdGVyIiwic2F2ZSIsInN5bmMiLCJwdWJsaXNoIiwidG9TeW5jIiwic2V0RW50cmllcyIsImVudHJpZXMiLCJfZmFjdG9yeSIsImxvYWRlZCIsInBhcmVudEJyaWRnZSIsInJlZ2lzdHJ5IiwibG9jYWxJZHMiLCJTZXQiLCJyZW1vdGVEYXRhIiwiUmVnaXN0cnlGYWN0b3J5IiwicGFyYW1zIiwibG9jYWxEYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJhZGQiLCJsb2NhbExvYWRlZCIsImZldGNoaW5nIiwicGFnZSIsInJlbW90ZUVsZW1lbnRzIiwic3RhcnQiLCJsaW1pdCIsImxvY2FsUmVzcG9uc2UiLCJyZW1vdGVMb2FkIiwiZXhjIiwiZmV0Y2hlZCIsImxhbmRlZCIsImxpc3QiLCJwcm9jZXNzUmVtb3RlRW50cmllcyIsImZyb21CYWNrZW5kIiwibWFwIiwibm90SW5CYWNrIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJkZWxldGVkRW50cmllcyIsInVwZGF0ZUxvY2FsSXRlbXMiLCJwcm9taXNlcyIsInJlY29yZCIsImhhcyIsInB1c2giLCJpc1JlYWR5IiwiaSIsIm5vdEV4aXRzIiwiYWxsIiwiaW5kZXgiLCJfY29yZSIsIl9kYXRhYmFzZSIsIl9zYXZlciIsIl9sb2FkZXIiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwiZXhpc3RzIiwiZm91bmQiLCJyZWdpc3RyeUZhY3RvcnkiLCJhcHBseSIsImFjdGl2ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsIkxvY2FsUHJvdmlkZXJMb2FkZXIiLCJwcm9taXNlSW5pdCIsInJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJEQk1hbmFnZXIiLCJMb2NhbFByb3ZpZGVyU2F2ZXIiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwiaW5zdGFuY2VJZCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsIml0ZW1zVG9VcGRhdGUiLCJpc0RlbGV0ZWQiLCJidWxrRGVsZXRlIiwic2F2ZUFsbCIsIl9kZXhpZSIsInByb21pc2VMb2FkIiwibGlzdEl0ZW1zIiwiY29uZGl0aW9ucyIsImN1c3RvbVdoZXJlIiwiZGVmYXVsdFdoZXJlIiwiY3VycmVudExpbWl0IiwiY3VycmVudE9mZnNldCIsInBhcmVudFByaXZhdGVQcm9wcyIsInF1YW50aXR5IiwiaXNTYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBlcmZvcm1Mb2FkIiwiI3BlcmZvcm1Mb2FkIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJyZXNvbHZlUHJvbWlzZUxvYWQiLCJsaXZlIiwibGl2ZVF1ZXJ5Iiwid2hlcmUiLCJzdWJzY3JpYmVUb1F1ZXJ5Iiwib2Zmc2V0IiwiaGFzT3duUHJvcGVydHkiLCJpbmRleGVzIiwic2NoZW1hIiwibmFtZSIsImtleXMiLCJrZXkiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJ0b0FycmF5IiwiY3VzdG9tRmlsdGVyIiwiY2FsbGJhY2siLCIjc3Vic2NyaWJlVG9RdWVyeSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwiaGFuZGxlUXVlcnlSZXNwb25zZSIsImVyciIsIiNoYW5kbGVRdWVyeVJlc3BvbnNlIiwic2FtZVF1ZXJ5IiwiY3VycmVudE1hcCIsImNsZWFudXBJdGVtcyIsIiNjbGVhbnVwSXRlbXMiLCIjcmVzb2x2ZVByb21pc2VMb2FkIiwiX3JlZ2lzdHJ5IiwiYmF0Y2hlcyIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwiYnVsa1NhdmUiLCJzZW5kQ2h1bmsiLCJjaHVuayIsInN1Y2Nlc3MiLCJzcGxpdERhdGFJbnRvQ2h1bmtzIiwic2xpY2UiLCJlcXVhbHMiLCJmYWlsZWRDaHVua3MiLCJzdWNjZXNzQ2h1bmtzIiwiX2luZGV4IiwiVXNlclByb3ZpZGVyIiwiQm9vayIsIkl0ZW0iLCJfc2F2ZSIsImxvY2FsRmllbGRzIiwic2tlbGV0b24iLCJ1bmlxdWUiLCJfX2dldCIsIl9faW5zdGFuY2VJZCIsImNoZWNrUmVhZHkiLCJ3YXJuIiwib2JqZWN0UmVhZHkiLCJwcm9taXNlUmVhZHkiLCJpbml0UHJvbWlzZSIsImNvbmZpZyIsIiNzdGFydCIsInNwY3MiLCJMb2NhbFByb3ZpZGVyIiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwiaW5pdGlhbGlzZSIsIm9uUmVhZHkiLCJ0cmFjZSIsInRvSXRlcmF0ZSIsImZpZWxkIiwiZ2V0UHJvcGVydHlOYW1lcyIsImZvcmNlU3luYyIsInNhbWUiLCJvcmlnaW5hbCIsImlzTmFOIiwicGFyc2VJbnQiLCJsb2FkTWV0aG9kIiwiaXNOZXciLCJmYWN0b3J5UmVnaXN0cnkiLCJfX2lkIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRSZWdpc3RyeSIsImRlZXBDb21wYXJlIiwib2JqMSIsIm9iajIiLCJrZXlzMSIsImtleXMyIiwidmFsMSIsInZhbDIiLCJhcmVPYmplY3RzIiwiaXNPYmplY3QiLCJvYmplY3QiLCJpc1VucHVibGlzaGVkIiwiI2lzVW5wdWJsaXNoZWQiLCJ0b0NvbXBhcmUiLCJhcmVFcXVhbCIsImxpc3RlblJlZ2lzdHJ5IiwiY3JlYXRlIiwiI2xpc3RlblJlZ2lzdHJ5IiwiZHVwbGljYXRlZCIsInZhbGlkYXRlVW5pcXVlRmllbGRzIiwiZmllbGRzIiwiY2hlY2tQcm9taXNlcyIsInRoZW4iLCJkdXBsaWNhdGVGaWVsZHMiLCJkZWxldGVSZWdpc3RyeSIsImlkZW50aWZpZXIiLCJpc1BsYWluT2JqZWN0Iiwib2JqIiwiI2RlbGV0ZSIsIiN1cGRhdGUiLCJ1cGRhdGVkIiwicGxhaW4iLCJwdXQiLCJsb2NhbFVwZGF0ZSIsInJlbW90ZVJlc3BvbnNlIiwicHJvcHMiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJJdGVtUHJvdmlkZXIiLCJzdG9yZXMiLCJkYk5hbWUiLCJyZWdpc3Rlckxpc3QiLCJyZWdpc3RyaWVzIiwiaGFzSXRlbSIsImdldFN0b3JlIiwiI2dldFN0b3JlIiwiZGJzIiwiX3V1aWQiLCJrZXlJZCIsInY0IiwibmV3VmFsdWVzIiwiaXNEZWxlbGV0ZWQiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiXSwic291cmNlcyI6WyIvYWRhcHRlci9kZWZhdWx0LnRzIiwiL2FkYXB0ZXIvaW5kZXgudHMiLCIvaW50ZXJmYWNlLnRzIiwiL2FkYXB0ZXIvbGVnYWN5LnRzIiwiL2NhY2hlL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY2hpbGRyZW4tY29uc3RydWN0b3ItcHJvcHMudHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb2xsZWN0aW9uL2xvYWQudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2xvYWRlci50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL3NhdmVyLnRzIiwiL2NvbGxlY3Rpb24vcHVibGlzaC50cyIsIi9leGFtcGxlL2luZGV4LnRzIiwiL3Byb3ZpZGVyLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvY29uZmlnLnRzIiwiL2l0ZW0udHMiLCIvaXRlbS9sb2FkLnRzIiwiL2l0ZW0vbG9jYWwtcHJvdmlkZXIudHMiLCIvaXRlbS9zYXZlLnRzIiwiL3Byb3ZpZGVycy9jb2xsZWN0aW9uLnRzIiwiL3Byb3ZpZGVycy9pdGVtLnRzIiwiL3JlZ2lzdHJ5L2ZhY3RvcnkudHMiLCIvcmVnaXN0cnkvaW5kZXgudHMiLCIvcmVnaXN0cnkvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUVNLE1BQU9BLGNBQWM7WUFDMUJDLFFBQVFBLENBQUNDLElBQVM7Y0FDakIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBRyxVQUFVQSxDQUFDSCxJQUFTO2NBQ25CLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7WUFFQUksY0FBY0EsQ0FBQ0osSUFBUztjQUN2QixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCOztVQUNBSyxPQUFBLENBQUFQLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkRCxJQUFBUSxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFhTSxNQUFPRyxlQUFlO1lBQzNCLE9BQU9DLEdBQUdBLENBQUNDLE1BQU0sRUFBRUMsUUFBNkI7Y0FDL0NBLFFBQVEsR0FBR0EsUUFBUSxHQUFHQSxRQUFRLEdBQUdQLFNBQUEs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