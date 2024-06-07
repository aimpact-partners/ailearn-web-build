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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["dexie", "3.2.3"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.12"], ["@aimpact/ailearn-app", "0.0.46.dev-10"]]);
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
        hash: 817405111,
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
            toClient(response = {}) {
              // if (error) {
              // 	return { status: false, error: { message: error } };
              // }
              // return { status: true, data };
              return response;
            }
            fromRemote(response) {
              const {
                status,
                data,
                error,
                message
              } = response;
              // if (!status) {
              // 	if (message) throw message;
              // 	if (typeof error === 'object') {
              // 		throw new Error(error?.text || error?.message || 'ERROR_DATA_QUERY');
              // 	}
              // 	typeof error === 'string' ? error : 'ERROR_DATA_QUERY';
              // }
              return response;
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
        hash: 1757290950,
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
              const remoteResponse = this.#adapter.fromRemote(response);
              const {
                data
              } = remoteResponse;
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
        hash: 1571441587,
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
        hash: 3424040814,
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
        hash: 1228119537,
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
        hash: 1916940339,
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
                const response = await this.remoteLoad(params);
                const remoteData = response?.data;
                if (!remoteData) {
                  this.#parent.found = false;
                  return this.#adapter.toClient(response);
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
                return this.#adapter.toClient(response);
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
        hash: 2357257502,
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
              await this.#getProperty('checkReady')();
              if (data) {
                await this.#parent.set(data);
              }
              if (!this.#parent.isUnpublished) return;
              const properties = {
                ...data,
                ...this.#parent.getProperties()
              };
              if (this.#localdb) {
                //todo: @julio review it
                properties.isNew = this.#localProvider.registry?.isNew;
                properties.__instanceId = this.#localProvider?.registry.__instanceId;
              }
              let remoteResponse;
              if (this.#parent.isOnline && this.#provider) {
                const response = await this.#publish(properties);
                remoteResponse = this.#adapter.fromRemote(response);
                if (this.#localdb) {
                  this.#localProvider.registry.setValues(response.data);
                  properties.id = response?.data?.id;
                  this.#localProvider.registry.isNew = false;
                  await this.#localProvider.save(properties);
                }
              } else if (this.#localProvider) {
                await this.#localProvider.save(properties);
              }
              this.#parent.triggerEvent();
              return this.#adapter.toClient({
                data: remoteResponse
              });
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
                if (this.#localProvider && this.#localdb) {
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
                if (this.#localdb) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJlcnJvciIsIm1lc3NhZ2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwibG9jYWxkYiIsInAiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwib3JkZXJCeSIsInZhbHVlcyIsInNvcnQiLCJhIiwiYiIsImlzT25saW5lIiwibG9jYWxQcm92aWRlciIsIkFycmF5IiwiaXNBcnJheSIsImNsZWFyIiwiZm9yRWFjaCIsInNldCIsImlkIiwidHJpZ2dlckV2ZW50IiwiY291bnRlcnMiLCJ0b3RhbCIsIm5leHQiLCJzYXZlTWFuYWdlciIsImxvYWRNYW5hZ2VyIiwicHJvdmlkZXIiLCJzb3J0QnkiLCJzb3J0RGlyZWN0aW9uIiwicmVzcG9uc2VBZGFwdGVyIiwiaW5pdGlhbFNwZWNzIiwic3BlY3MiLCJwcm9wZXJ0aWVzIiwic3RvcmVOYW1lIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdCIsImdldFByb3BlcnR5IiwicHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImJyaWRnZSIsImJpbmQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwibGlzdGVuSXRlbXMiLCIjbGlzdGVuSXRlbXMiLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJzdG9yZSIsIiNjbGVhciIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsIl9mYWN0b3J5IiwibG9hZGVkIiwicGFyZW50QnJpZGdlIiwicmVnaXN0cnkiLCJsb2NhbElkcyIsIlNldCIsInJlbW90ZURhdGEiLCJSZWdpc3RyeUZhY3RvcnkiLCJwYXJhbXMiLCJsb2NhbERhdGEiLCJuZXdJdGVtcyIsInVwZGF0ZSIsImNvbmNhdCIsImFkZCIsImxvY2FsTG9hZGVkIiwiZmV0Y2hpbmciLCJwYWdlIiwicmVtb3RlRWxlbWVudHMiLCJzdGFydCIsImxpbWl0IiwibG9jYWxSZXNwb25zZSIsInJlbW90ZUxvYWQiLCJleGMiLCJmZXRjaGVkIiwibGFuZGVkIiwibGlzdCIsInJlbW90ZVJlc3BvbnNlIiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJmcm9tQmFja2VuZCIsIm1hcCIsIm5vdEluQmFjayIsImluY2x1ZGVzIiwibGVuZ3RoIiwiZGVsZXRlZEVudHJpZXMiLCJ1cGRhdGVMb2NhbEl0ZW1zIiwicHJvbWlzZXMiLCJyZWNvcmQiLCJoYXMiLCJwdXNoIiwiaXNSZWFkeSIsImkiLCJub3RFeGl0cyIsImFsbCIsImluZGV4IiwiX2NvcmUiLCJfZGF0YWJhc2UiLCJfc2F2ZXIiLCJfbG9hZGVyIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsIm9uTGluZSIsIm9mZmxpbmUiLCJkYXRhYmFzZSIsImRhdGFiYXNlTmFtZSIsImV4aXN0cyIsImZvdW5kIiwicmVnaXN0cnlGYWN0b3J5IiwiYXBwbHkiLCJhY3RpdmUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJMb2NhbFByb3ZpZGVyTG9hZGVyIiwicHJvbWlzZUluaXQiLCJyZWFkeSIsIlBlbmRpbmdQcm9taXNlIiwiREJNYW5hZ2VyIiwiTG9jYWxQcm92aWRlclNhdmVyIiwidXBzZXJ0Iiwib3JpZ2luYWxEYXRhIiwidHJhbnNhY3Rpb24iLCJpbnN0YW5jZUlkVG9JZE1hcCIsImluc3RhbmNlSWQiLCJidWxrUHV0IiwicmVjb3JkcyIsImJ1bGtHZXQiLCJleGlzdGluZ1JlY29yZHMiLCJpdGVtc1RvVXBkYXRlIiwiaXNEZWxldGVkIiwiYnVsa0RlbGV0ZSIsInNhdmVBbGwiLCJfZGV4aWUiLCJwcm9taXNlTG9hZCIsImxpc3RJdGVtcyIsImNvbmRpdGlvbnMiLCJjdXN0b21XaGVyZSIsImRlZmF1bHRXaGVyZSIsImN1cnJlbnRMaW1pdCIsImN1cnJlbnRPZmZzZXQiLCJwYXJlbnRQcml2YXRlUHJvcHMiLCJxdWFudGl0eSIsImlzU2FtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwZXJmb3JtTG9hZCIsIiNwZXJmb3JtTG9hZCIsImNvdW50IiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwicmVzb2x2ZVByb21pc2VMb2FkIiwibGl2ZSIsImxpdmVRdWVyeSIsIndoZXJlIiwic3Vic2NyaWJlVG9RdWVyeSIsIm9mZnNldCIsImhhc093blByb3BlcnR5IiwiaW5kZXhlcyIsInNjaGVtYSIsIm5hbWUiLCJrZXlzIiwia2V5IiwiY29sbGVjdGlvbiIsInF1ZXJ5IiwidG9BcnJheSIsImN1c3RvbUZpbHRlciIsImNhbGxiYWNrIiwiI3N1YnNjcmliZVRvUXVlcnkiLCJjdXJyZW50UGFnZSIsInN1YnNjcmliZSIsImhhbmRsZVF1ZXJ5UmVzcG9uc2UiLCJlcnIiLCIjaGFuZGxlUXVlcnlSZXNwb25zZSIsInNhbWVRdWVyeSIsImN1cnJlbnRNYXAiLCJjbGVhbnVwSXRlbXMiLCIjY2xlYW51cEl0ZW1zIiwiI3Jlc29sdmVQcm9taXNlTG9hZCIsIl9yZWdpc3RyeSIsImJhdGNoZXMiLCJwcm9jZXNzIiwiZ2V0UHJvcGVydGllcyIsInRvU2F2ZSIsIlJlZ2lzdHJ5IiwiZGVsZXRlZCIsInNldFZhbHVlcyIsImNodW5rcyIsImJhdGNoIiwic3BsaWNlIiwiZ2V0VmFsdWVzIiwicmVzdWx0cyIsImFsbFNldHRsZWQiLCJtYXBwZWRGbiIsInJlc3VsdCIsImZhaWxlZCIsIk1BWF9SRVRSSUVTIiwiQ0hVTktfU0laRSIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIl9pbmRleCIsIlVzZXJQcm92aWRlciIsIkJvb2siLCJJdGVtIiwiX3NhdmUiLCJsb2NhbEZpZWxkcyIsInNrZWxldG9uIiwidW5pcXVlIiwiX19nZXQiLCJfX2luc3RhbmNlSWQiLCJjaGVja1JlYWR5Iiwid2FybiIsIm9iamVjdFJlYWR5IiwicHJvbWlzZVJlYWR5IiwiaW5pdFByb21pc2UiLCJjb25maWciLCIjc3RhcnQiLCJzcGNzIiwiTG9jYWxQcm92aWRlciIsIkl0ZW1TYXZlTWFuYWdlciIsIkl0ZW1Mb2FkTWFuYWdlciIsImluaXRpYWxpc2UiLCJvblJlYWR5IiwidHJhY2UiLCJ0b0l0ZXJhdGUiLCJmaWVsZCIsImdldFByb3BlcnR5TmFtZXMiLCJmb3JjZVN5bmMiLCJzYW1lIiwib3JpZ2luYWwiLCJpc05hTiIsInBhcnNlSW50IiwibG9hZE1ldGhvZCIsImlzTmV3IiwiZmFjdG9yeVJlZ2lzdHJ5IiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwiZ2V0UmVnaXN0cnkiLCJkZWVwQ29tcGFyZSIsIm9iajEiLCJvYmoyIiwia2V5czEiLCJrZXlzMiIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsImlzT2JqZWN0Iiwib2JqZWN0IiwiaXNVbnB1Ymxpc2hlZCIsIiNpc1VucHVibGlzaGVkIiwidG9Db21wYXJlIiwiYXJlRXF1YWwiLCJsaXN0ZW5SZWdpc3RyeSIsImNyZWF0ZSIsIiNsaXN0ZW5SZWdpc3RyeSIsImR1cGxpY2F0ZWQiLCJ2YWxpZGF0ZVVuaXF1ZUZpZWxkcyIsImZpZWxkcyIsImNoZWNrUHJvbWlzZXMiLCJ0aGVuIiwiZHVwbGljYXRlRmllbGRzIiwiZGVsZXRlUmVnaXN0cnkiLCJpZGVudGlmaWVyIiwiaXNQbGFpbk9iamVjdCIsIm9iaiIsIiNkZWxldGUiLCIjdXBkYXRlIiwidXBkYXRlZCIsInBsYWluIiwicHV0IiwibG9jYWxVcGRhdGUiLCJwcm9wcyIsIkNvbGxlY3Rpb25Qcm92aWRlciIsIkl0ZW1Qcm92aWRlciIsInN0b3JlcyIsImRiTmFtZSIsInJlZ2lzdGVyTGlzdCIsInJlZ2lzdHJpZXMiLCJoYXNJdGVtIiwiZ2V0U3RvcmUiLCIjZ2V0U3RvcmUiLCJkYnMiLCJfdXVpZCIsImtleUlkIiwidjQiLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VzIjpbIi9hZGFwdGVyL2RlZmF1bHQudHMiLCIvYWRhcHRlci9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvYWRhcHRlci9sZWdhY3kudHMiLCIvY2FjaGUvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGlsZHJlbi1jb25zdHJ1Y3Rvci1wcm9wcy50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbGxlY3Rpb24vbG9hZC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvbG9hZGVyLnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvc2F2ZXIudHMiLCIvY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU0sTUFBT0EsY0FBYztZQUMxQkMsUUFBUUEsQ0FBQ0MsSUFBUztjQUNqQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFHLFVBQVVBLENBQUNILElBQVM7Y0FDbkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBSSxjQUFjQSxDQUFDSixJQUFTO2NBQ3ZCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7O1VBQ0FLLE9BQUEsQ0FBQVAsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFRLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQWFNLE1BQU9HLGVBQWU7WUFDM0IsT0FBT0MsR0FBR0EsQ0FBQ0MsTUFBTSxFQUFFQyxRQUE2QjtjQUMvQ0EsUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQVEsR0FBR1AsU0FBQSxDQUFBUSxj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