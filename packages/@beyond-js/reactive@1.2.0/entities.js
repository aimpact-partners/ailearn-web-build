System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/settings", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/database", "@beyond-js/kernel@0.1.9/core", "dexie@3.2.7", "@beyond-js/events@0.0.7/events", "uuid@9.0.1"], function (_export, _context) {
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
    }, function (_beyondJsReactive120Settings) {
      dependency_1 = _beyondJsReactive120Settings;
    }, function (_beyondJsReactive120Model) {
      dependency_2 = _beyondJsReactive120Model;
    }, function (_beyondJsReactive120Database) {
      dependency_3 = _beyondJsReactive120Database;
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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["dexie", "3.2.7"], ["uuid", "9.0.1"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["sqlite", "4.2.1"], ["sqlite3", "5.1.7"], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/ailearn-app", "0.1.6-dev.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.2.0/entities"
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
        hash: 2456235523,
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
        hash: 640132911,
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
            landed = false;
            db;
            item;
            localdb = true;
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
            publish = args => this.#saveManager.publish(args);
            async setEntries(entries) {
              await this.save(entries, true);
              const items = await this.#loadManager.processEntries(entries, true);
              this.#elements.clear();
              items.forEach(item => {
                console.log(40, item.content);
                this.#elements.set(item.id, item);
              });
              this.items = items;
              console.log(99, items.map(item => item.content));
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
        hash: 3719123022,
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
        hash: 2352616277,
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
              // this.parent.set(properties);
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
        hash: 938288509,
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
              this.#localdb = bridge.get('localdb');
              if (!this.#localdb) {
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
            load = params => this.#loadManager?.load(params);
          }
          exports.CollectionLocalProvider = CollectionLocalProvider;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./collection/local-provider/loader
      **************************************************/

      ims.set('./collection/local-provider/loader', {
        hash: 3960812740,
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
              // if (params.sortBy) items.sort((a, b) => a[params.sortBy] - b[params.sortBy]);
              if (!globalThis.data) globalThis.data = []; // ?
              if (currentPage === this.#page) sameQuery = true;else currentPage = this.#page;
              if (sameQuery && items.length === this.#parent.items.length) return;
              const currentMap = new Set();
              items.forEach(item => {
                this.#listItems.set(item.id, item);
                currentMap.add(item.id);
              });
              this.#cleanupItems(currentMap);
              this.#setItems(items);
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
        hash: 3321762047,
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
        hash: 1047228138,
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
        hash: 2374823862,
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
        hash: 3451830705,
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
            landed = false;
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
              if (this.#objectReady) this.#promiseReady.resolve(this.#objectReady);
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
        hash: 928257965,
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
        hash: 1754705125,
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
        hash: 3494089364,
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
            __moment; // moment
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
              this.__moment = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
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
        hash: 1654970440,
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
              } else if (this.#localProvider && this.#localdb) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJlcnJvciIsIm1lc3NhZ2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwibGFuZGVkIiwiZGIiLCJpdGVtIiwibG9jYWxkYiIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJvcmRlckJ5IiwidmFsdWVzIiwic29ydCIsImEiLCJiIiwiaXNPbmxpbmUiLCJsb2NhbFByb3ZpZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiY2xlYXIiLCJmb3JFYWNoIiwic2V0IiwiaWQiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInByb3BlcnRpZXMiLCJzdG9yZU5hbWUiLCJ1bmRlZmluZWQiLCJFcnJvciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwiYmluZCIsIkNvbGxlY3Rpb25Mb2NhbFByb3ZpZGVyIiwiQ29sbGVjdGlvblNhdmVNYW5hZ2VyIiwiQ29sbGVjdGlvbkxvYWRNYW5hZ2VyIiwib24iLCJsaXN0ZW5JdGVtcyIsIiNsaXN0ZW5JdGVtcyIsInByb2Nlc3NFbnRyaWVzIiwidHJpZ2dlciIsInNldE9mZmxpbmUiLCJzZXRJdGVtcyIsInN0b3JlIiwiI2NsZWFyIiwiZGVsZXRlIiwiaWRzIiwic29mdERlbGV0ZSIsImRlbGV0ZUl0ZW1zIiwiZSIsImNvbnNvbGUiLCJsb2FkIiwiYXJncyIsImxvY2FsTG9hZCIsImZpbHRlciIsInNhdmUiLCJwdWJsaXNoIiwic2V0RW50cmllcyIsImVudHJpZXMiLCJsb2ciLCJjb250ZW50IiwibWFwIiwiX2ZhY3RvcnkiLCJsb2FkZWQiLCJwYXJlbnRCcmlkZ2UiLCJyZWdpc3RyeSIsImxvY2FsSWRzIiwiU2V0IiwicmVtb3RlRGF0YSIsIlJlZ2lzdHJ5RmFjdG9yeSIsInBhcmFtcyIsImxvY2FsRGF0YSIsIm5ld0l0ZW1zIiwidXBkYXRlIiwiY29uY2F0IiwiYWRkIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwicmVtb3RlTG9hZCIsImV4YyIsImZldGNoZWQiLCJsaXN0IiwicmVtb3RlUmVzcG9uc2UiLCJwcm9jZXNzUmVtb3RlRW50cmllcyIsImZyb21CYWNrZW5kIiwibm90SW5CYWNrIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJkZWxldGVkRW50cmllcyIsInVwZGF0ZUxvY2FsSXRlbXMiLCJwcm9taXNlcyIsInJlY29yZCIsImhhcyIsInB1c2giLCJpc1JlYWR5IiwiaSIsIm5vdEV4aXRzIiwiYWxsIiwiaW5kZXgiLCJfY29yZSIsIl9kYXRhYmFzZSIsIl9zYXZlciIsIl9sb2FkZXIiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwiZXhpc3RzIiwiZm91bmQiLCJyZWdpc3RyeUZhY3RvcnkiLCJhcHBseSIsImFjdGl2ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsIkxvY2FsUHJvdmlkZXJMb2FkZXIiLCJwcm9taXNlSW5pdCIsInJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJEQk1hbmFnZXIiLCJMb2NhbFByb3ZpZGVyU2F2ZXIiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwiaW5zdGFuY2VJZCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsIml0ZW1zVG9VcGRhdGUiLCJpc0RlbGV0ZWQiLCJidWxrRGVsZXRlIiwic2F2ZUFsbCIsIl9kZXhpZSIsInByb21pc2VMb2FkIiwibGlzdEl0ZW1zIiwiY29uZGl0aW9ucyIsImN1c3RvbVdoZXJlIiwiZGVmYXVsdFdoZXJlIiwiY3VycmVudExpbWl0IiwiY3VycmVudE9mZnNldCIsInBhcmVudFByaXZhdGVQcm9wcyIsInF1YW50aXR5IiwiaXNTYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBlcmZvcm1Mb2FkIiwiI3BlcmZvcm1Mb2FkIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJyZXNvbHZlUHJvbWlzZUxvYWQiLCJsaXZlIiwibGl2ZVF1ZXJ5Iiwid2hlcmUiLCJzdWJzY3JpYmVUb1F1ZXJ5Iiwib2Zmc2V0IiwiaGFzT3duUHJvcGVydHkiLCJpbmRleGVzIiwic2NoZW1hIiwibmFtZSIsImtleXMiLCJrZXkiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJ0b0FycmF5IiwiY3VzdG9tRmlsdGVyIiwiY2FsbGJhY2siLCIjc3Vic2NyaWJlVG9RdWVyeSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwiaGFuZGxlUXVlcnlSZXNwb25zZSIsImVyciIsIiNoYW5kbGVRdWVyeVJlc3BvbnNlIiwic2FtZVF1ZXJ5IiwiY3VycmVudE1hcCIsImNsZWFudXBJdGVtcyIsIiNjbGVhbnVwSXRlbXMiLCIjcmVzb2x2ZVByb21pc2VMb2FkIiwiX3JlZ2lzdHJ5IiwiYmF0Y2hlcyIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiYnVsa1NhdmUiLCJfaW5kZXgiLCJVc2VyUHJvdmlkZXIiLCJCb29rIiwiSXRlbSIsIl9zYXZlIiwibG9jYWxGaWVsZHMiLCJza2VsZXRvbiIsInVuaXF1ZSIsIl9fZ2V0IiwiX19pbnN0YW5jZUlkIiwiY2hlY2tSZWFkeSIsIndhcm4iLCJvYmplY3RSZWFkeSIsInByb21pc2VSZWFkeSIsImluaXRQcm9taXNlIiwiY29uZmlnIiwiI3N0YXJ0Iiwic3BjcyIsIkxvY2FsUHJvdmlkZXIiLCJJdGVtU2F2ZU1hbmFnZXIiLCJJdGVtTG9hZE1hbmFnZXIiLCJpbml0aWFsaXNlIiwib25SZWFkeSIsInRyYWNlIiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwic3luYyIsImZvcmNlU3luYyIsInNhbWUiLCJvcmlnaW5hbCIsImlzTmFOIiwicGFyc2VJbnQiLCJsb2FkTWV0aG9kIiwiaXNOZXciLCJmYWN0b3J5UmVnaXN0cnkiLCJfX21vbWVudCIsImZsb29yIiwicmFuZG9tIiwiZ2V0UmVnaXN0cnkiLCJkZWVwQ29tcGFyZSIsIm9iajEiLCJvYmoyIiwia2V5czEiLCJrZXlzMiIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsImlzT2JqZWN0Iiwib2JqZWN0IiwiaXNVbnB1Ymxpc2hlZCIsIiNpc1VucHVibGlzaGVkIiwidG9Db21wYXJlIiwiYXJlRXF1YWwiLCJsaXN0ZW5SZWdpc3RyeSIsImNyZWF0ZSIsIiNsaXN0ZW5SZWdpc3RyeSIsImR1cGxpY2F0ZWQiLCJ2YWxpZGF0ZVVuaXF1ZUZpZWxkcyIsImZpZWxkcyIsImNoZWNrUHJvbWlzZXMiLCJlcXVhbHMiLCJ0aGVuIiwiZHVwbGljYXRlRmllbGRzIiwiZGVsZXRlUmVnaXN0cnkiLCJpZGVudGlmaWVyIiwiaXNQbGFpbk9iamVjdCIsIm9iaiIsIiNkZWxldGUiLCIjdXBkYXRlIiwidXBkYXRlZCIsInBsYWluIiwicHV0IiwibG9jYWxVcGRhdGUiLCJwcm9wcyIsInJlbW90ZVJFc3BvbnNlIiwiQ29sbGVjdGlvblByb3ZpZGVyIiwiSXRlbVByb3ZpZGVyIiwic3RvcmVzIiwiZGJOYW1lIiwicmVnaXN0ZXJMaXN0IiwicmVnaXN0cmllcyIsImhhc0l0ZW0iLCJnZXRTdG9yZSIsIiNnZXRTdG9yZSIsImRicyIsIl91dWlkIiwia2V5SWQiLCJ2NCIsIm5ld1ZhbHVlcyIsImlzRGVsZWxldGVkIiwiU3RvcmVSZWNvcmRzIiwic3RvcmVGYWN0b3J5Il0sInNvdXJjZXMiOlsiL2FkYXB0ZXIvZGVmYXVsdC50cyIsIi9hZGFwdGVyL2luZGV4LnRzIiwiL2ludGVyZmFjZS50cyIsIi9hZGFwdGVyL2xlZ2FjeS50cyIsIi9jYWNoZS9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NoaWxkcmVuLWNvbnN0cnVjdG9yLXByb3BzLnRzIiwiL2NvbGxlY3Rpb24udHMiLCIvY29sbGVjdGlvbi9sb2FkLnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci9sb2FkZXIudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci9zYXZlci50cyIsIi9jb2xsZWN0aW9uL3B1Ymxpc2gudHMiLCIvZXhhbXBsZS9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi9pdGVtL2luZGV4LnRzIiwiL2NvbmZpZy50cyIsIi9pdGVtLnRzIiwiL2l0ZW0vbG9hZC50cyIsIi9pdGVtL2xvY2FsLXByb3ZpZGVyLnRzIiwiL2l0ZW0vc2F2ZS50cyIsIi9wcm92aWRlcnMvY29sbGVjdGlvbi50cyIsIi9wcm92aWRlcnMvaXRlbS50cyIsIi9yZWdpc3RyeS9mYWN0b3J5LnRzIiwiL3JlZ2lzdHJ5L2luZGV4LnRzIiwiL3JlZ2lzdHJ5L3N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFTSxNQUFPQSxjQUFjO1lBQzFCQyxRQUFRQSxDQUFDQyxJQUFTO2NBQ2pCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7WUFFQUcsVUFBVUEsQ0FBQ0gsSUFBUztjQUNuQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFJLGNBQWNBLENBQUNKLElBQVM7Y0FDdkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3Qjs7VUFDQUssT0FBQSxDQUFBUCxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsU0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBYU0sTUFBT0csZUFBZTtZQUMzQixPQUFPQyxHQUFHQSxDQUFDQyxNQUFNLEVBQUVDLFFBQTZCO2NBQy9DQSxRQUFRLEdBQUdBLFFBQVEsR0FBR0EsUUFBUSxHQUFHUCxTQUFBLENBQUFRLGNBQWMsQ0FBQ0MsT0FBTztjQUN2RCxNQUFNQyxPQUFPLEdBQUdILFFBQVEsS0FBSyxTQUFTLEdBQUdMLFFBQUEsQ0FBQVYsY0FBYyxHQUFHVyxPQUFBLENBQUFRLGFB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