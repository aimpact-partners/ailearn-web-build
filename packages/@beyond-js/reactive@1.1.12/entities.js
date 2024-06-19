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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["dexie", "3.2.3"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.12"], ["@aimpact/ailearn-app", "0.0.50"]]);
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
        hash: 190812589,
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
              console.log(0.2, this, this.#localdb, this.#parent);
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
        hash: 1763458845,
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
              return this.#adapter.toClient(remoteResponse);
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
                const remoteREsponse = this.#adapter.fromRemote(response);
                const {
                  data
                } = remoteREsponse;
                await this.#parent.set(data);
                if (this.#localProvider && this.#localdb) {
                  this.#localProvider.save(data);
                  if (props.id === this.#localProvider.registry.__instanceId) {
                    this.#localProvider.deleteRegistry(props.id);
                  }
                  this.#localProvider.trigger('change');
                }
                return this.#adapter.toClient(response);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJlcnJvciIsIm1lc3NhZ2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwibG9jYWxkYiIsInAiLCJlbGVtZW50cyIsIk1hcCIsIml0ZW1zIiwib3JkZXJCeSIsInZhbHVlcyIsInNvcnQiLCJhIiwiYiIsImlzT25saW5lIiwibG9jYWxQcm92aWRlciIsIkFycmF5IiwiaXNBcnJheSIsImNsZWFyIiwiZm9yRWFjaCIsInNldCIsImlkIiwidHJpZ2dlckV2ZW50IiwiY291bnRlcnMiLCJ0b3RhbCIsIm5leHQiLCJzYXZlTWFuYWdlciIsImxvYWRNYW5hZ2VyIiwicHJvdmlkZXIiLCJzb3J0QnkiLCJzb3J0RGlyZWN0aW9uIiwicmVzcG9uc2VBZGFwdGVyIiwiaW5pdGlhbFNwZWNzIiwic3BlY3MiLCJwcm9wZXJ0aWVzIiwic3RvcmVOYW1lIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdCIsImdldFByb3BlcnR5IiwicHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImJyaWRnZSIsImJpbmQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwibGlzdGVuSXRlbXMiLCIjbGlzdGVuSXRlbXMiLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJzdG9yZSIsIiNjbGVhciIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsIl9mYWN0b3J5IiwibG9hZGVkIiwicGFyZW50QnJpZGdlIiwicmVnaXN0cnkiLCJsb2NhbElkcyIsIlNldCIsInJlbW90ZURhdGEiLCJSZWdpc3RyeUZhY3RvcnkiLCJwYXJhbXMiLCJsb2NhbERhdGEiLCJuZXdJdGVtcyIsInVwZGF0ZSIsImNvbmNhdCIsImFkZCIsImxvY2FsTG9hZGVkIiwiZmV0Y2hpbmciLCJwYWdlIiwicmVtb3RlRWxlbWVudHMiLCJzdGFydCIsImxpbWl0IiwibG9jYWxSZXNwb25zZSIsInJlbW90ZUxvYWQiLCJleGMiLCJmZXRjaGVkIiwibGFuZGVkIiwibGlzdCIsInJlbW90ZVJlc3BvbnNlIiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJmcm9tQmFja2VuZCIsIm1hcCIsIm5vdEluQmFjayIsImluY2x1ZGVzIiwibGVuZ3RoIiwiZGVsZXRlZEVudHJpZXMiLCJ1cGRhdGVMb2NhbEl0ZW1zIiwicHJvbWlzZXMiLCJyZWNvcmQiLCJoYXMiLCJwdXNoIiwiaXNSZWFkeSIsImkiLCJub3RFeGl0cyIsImFsbCIsImluZGV4IiwiX2NvcmUiLCJfZGF0YWJhc2UiLCJfc2F2ZXIiLCJfbG9hZGVyIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsIm9uTGluZSIsIm9mZmxpbmUiLCJkYXRhYmFzZSIsImRhdGFiYXNlTmFtZSIsImV4aXN0cyIsImZvdW5kIiwicmVnaXN0cnlGYWN0b3J5IiwiYXBwbHkiLCJhY3RpdmUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJMb2NhbFByb3ZpZGVyTG9hZGVyIiwicHJvbWlzZUluaXQiLCJyZWFkeSIsIlBlbmRpbmdQcm9taXNlIiwiREJNYW5hZ2VyIiwiTG9jYWxQcm92aWRlclNhdmVyIiwidXBzZXJ0Iiwib3JpZ2luYWxEYXRhIiwidHJhbnNhY3Rpb24iLCJpbnN0YW5jZUlkVG9JZE1hcCIsImluc3RhbmNlSWQiLCJidWxrUHV0IiwicmVjb3JkcyIsImJ1bGtHZXQiLCJleGlzdGluZ1JlY29yZHMiLCJpdGVtc1RvVXBkYXRlIiwiaXNEZWxldGVkIiwiYnVsa0RlbGV0ZSIsInNhdmVBbGwiLCJfZGV4aWUiLCJwcm9taXNlTG9hZCIsImxpc3RJdGVtcyIsImNvbmRpdGlvbnMiLCJjdXN0b21XaGVyZSIsImRlZmF1bHRXaGVyZSIsImN1cnJlbnRMaW1pdCIsImN1cnJlbnRPZmZzZXQiLCJwYXJlbnRQcml2YXRlUHJvcHMiLCJxdWFudGl0eSIsImlzU2FtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwZXJmb3JtTG9hZCIsIiNwZXJmb3JtTG9hZCIsImNvdW50IiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwicmVzb2x2ZVByb21pc2VMb2FkIiwibGl2ZSIsImxpdmVRdWVyeSIsIndoZXJlIiwic3Vic2NyaWJlVG9RdWVyeSIsIm9mZnNldCIsImhhc093blByb3BlcnR5IiwiaW5kZXhlcyIsInNjaGVtYSIsIm5hbWUiLCJrZXlzIiwia2V5IiwiY29sbGVjdGlvbiIsInF1ZXJ5IiwidG9BcnJheSIsImN1c3RvbUZpbHRlciIsImNhbGxiYWNrIiwiI3N1YnNjcmliZVRvUXVlcnkiLCJjdXJyZW50UGFnZSIsInN1YnNjcmliZSIsImhhbmRsZVF1ZXJ5UmVzcG9uc2UiLCJlcnIiLCIjaGFuZGxlUXVlcnlSZXNwb25zZSIsInNhbWVRdWVyeSIsImN1cnJlbnRNYXAiLCJjbGVhbnVwSXRlbXMiLCIjY2xlYW51cEl0ZW1zIiwiI3Jlc29sdmVQcm9taXNlTG9hZCIsIl9yZWdpc3RyeSIsImJhdGNoZXMiLCJwcm9jZXNzIiwiZ2V0UHJvcGVydGllcyIsInRvU2F2ZSIsIlJlZ2lzdHJ5IiwiZGVsZXRlZCIsInNldFZhbHVlcyIsImNodW5rcyIsImJhdGNoIiwic3BsaWNlIiwiZ2V0VmFsdWVzIiwicmVzdWx0cyIsImFsbFNldHRsZWQiLCJtYXBwZWRGbiIsInJlc3VsdCIsImZhaWxlZCIsIk1BWF9SRVRSSUVTIiwiQ0hVTktfU0laRSIsImxvZyIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIl9pbmRleCIsIlVzZXJQcm92aWRlciIsIkJvb2siLCJJdGVtIiwiX3NhdmUiLCJsb2NhbEZpZWxkcyIsInNrZWxldG9uIiwidW5pcXVlIiwiX19nZXQiLCJfX2luc3RhbmNlSWQiLCJjaGVja1JlYWR5Iiwid2FybiIsIm9iamVjdFJlYWR5IiwicHJvbWlzZVJlYWR5IiwiaW5pdFByb21pc2UiLCJjb25maWciLCIjc3RhcnQiLCJzcGNzIiwiTG9jYWxQcm92aWRlciIsIkl0ZW1TYXZlTWFuYWdlciIsIkl0ZW1Mb2FkTWFuYWdlciIsImluaXRpYWxpc2UiLCJvblJlYWR5IiwidHJhY2UiLCJ0b0l0ZXJhdGUiLCJmaWVsZCIsImdldFByb3BlcnR5TmFtZXMiLCJmb3JjZVN5bmMiLCJzYW1lIiwib3JpZ2luYWwiLCJpc05hTiIsInBhcnNlSW50IiwibG9hZE1ldGhvZCIsImlzTmV3IiwiZmFjdG9yeVJlZ2lzdHJ5IiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwiZ2V0UmVnaXN0cnkiLCJkZWVwQ29tcGFyZSIsIm9iajEiLCJvYmoyIiwia2V5czEiLCJrZXlzMiIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsImlzT2JqZWN0Iiwib2JqZWN0IiwiaXNVbnB1Ymxpc2hlZCIsIiNpc1VucHVibGlzaGVkIiwidG9Db21wYXJlIiwiYXJlRXF1YWwiLCJsaXN0ZW5SZWdpc3RyeSIsImNyZWF0ZSIsIiNsaXN0ZW5SZWdpc3RyeSIsImR1cGxpY2F0ZWQiLCJ2YWxpZGF0ZVVuaXF1ZUZpZWxkcyIsImZpZWxkcyIsImNoZWNrUHJvbWlzZXMiLCJ0aGVuIiwiZHVwbGljYXRlRmllbGRzIiwiZGVsZXRlUmVnaXN0cnkiLCJpZGVudGlmaWVyIiwiaXNQbGFpbk9iamVjdCIsIm9iaiIsIiNkZWxldGUiLCIjdXBkYXRlIiwidXBkYXRlZCIsInBsYWluIiwicHV0IiwibG9jYWxVcGRhdGUiLCJwcm9wcyIsInJlbW90ZVJFc3BvbnNlIiwiQ29sbGVjdGlvblByb3ZpZGVyIiwiSXRlbVByb3ZpZGVyIiwic3RvcmVzIiwiZGJOYW1lIiwicmVnaXN0ZXJMaXN0IiwicmVnaXN0cmllcyIsImhhc0l0ZW0iLCJnZXRTdG9yZSIsIiNnZXRTdG9yZSIsImRicyIsIl91dWlkIiwia2V5SWQiLCJ2NCIsIm5ld1ZhbHVlcyIsImlzRGVsZWxldGVkIiwiU3RvcmVSZWNvcmRzIiwic3RvcmVGYWN0b3J5Il0sInNvdXJjZXMiOlsiL2FkYXB0ZXIvZGVmYXVsdC50cyIsIi9hZGFwdGVyL2luZGV4LnRzIiwiL2ludGVyZmFjZS50cyIsIi9hZGFwdGVyL2xlZ2FjeS50cyIsIi9jYWNoZS9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NoaWxkcmVuLWNvbnN0cnVjdG9yLXByb3BzLnRzIiwiL2NvbGxlY3Rpb24udHMiLCIvY29sbGVjdGlvbi9sb2FkLnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci9sb2FkZXIudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci9zYXZlci50cyIsIi9jb2xsZWN0aW9uL3B1Ymxpc2gudHMiLCIvZXhhbXBsZS9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi9pdGVtL2luZGV4LnRzIiwiL2NvbmZpZy50cyIsIi9pdGVtLnRzIiwiL2l0ZW0vbG9hZC50cyIsIi9pdGVtL2xvY2FsLXByb3ZpZGVyLnRzIiwiL2l0ZW0vc2F2ZS50cyIsIi9wcm92aWRlcnMvY29sbGVjdGlvbi50cyIsIi9wcm92aWRlcnMvaXRlbS50cyIsIi9yZWdpc3RyeS9mYWN0b3J5LnRzIiwiL3JlZ2lzdHJ5L2luZGV4LnRzIiwiL3JlZ2lzdHJ5L3N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFTSxNQUFPQSxjQUFjO1lBQzFCQyxRQUFRQSxDQUFDQyxJQUFTO2NBQ2pCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7WUFFQUcsVUFBVUEsQ0FBQ0gsSUFBUztjQUNuQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFJLGNBQWNBLENBQUNKLElBQVM7Y0FDdkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3Qjs7VUFDQUssT0FBQSxDQUFBUCxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsU0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBYU0sTUFBT0csZUFBZTtZQUMzQixPQUFPQyxHQUFHQSxDQUFDQyxNQUFNLEVBQUVDLFFBQTZCO2NBQy9DQSxRQUFRLEdBQUdBLFFBQVEsR0FBR0Es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