System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/settings", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/database", "@beyond-js/kernel@0.1.9/core", "dexie@3.2.7", "@beyond-js/events@0.0.4/events", "uuid@9.0.1"], function (_export, _context) {
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
    }, function (_beyondJsEvents004Events) {
      dependency_6 = _beyondJsEvents004Events;
    }, function (_uuid2) {
      dependency_7 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["dexie", "3.2.7"], ["uuid", "9.0.1"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["sqlite", "4.2.1"], ["sqlite3", "5.1.7"], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/ailearn-app", "0.1.0-dev.02"]]);
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
        hash: 2429080438,
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
        hash: 1852692958,
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
        hash: 1074452443,
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
        hash: 3261527893,
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
              console.log(20, this.#parent.isOnline, this.#localdb);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJlcnJvciIsIm1lc3NhZ2UiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwibGFuZGVkIiwiZGIiLCJpdGVtIiwibG9jYWxkYiIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJvcmRlckJ5IiwidmFsdWVzIiwic29ydCIsImEiLCJiIiwiaXNPbmxpbmUiLCJsb2NhbFByb3ZpZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiY2xlYXIiLCJmb3JFYWNoIiwic2V0IiwiaWQiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInByb3BlcnRpZXMiLCJzdG9yZU5hbWUiLCJ1bmRlZmluZWQiLCJFcnJvciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwiYmluZCIsIkNvbGxlY3Rpb25Mb2NhbFByb3ZpZGVyIiwiQ29sbGVjdGlvblNhdmVNYW5hZ2VyIiwiQ29sbGVjdGlvbkxvYWRNYW5hZ2VyIiwib24iLCJsaXN0ZW5JdGVtcyIsIiNsaXN0ZW5JdGVtcyIsInByb2Nlc3NFbnRyaWVzIiwidHJpZ2dlciIsInNldE9mZmxpbmUiLCJzZXRJdGVtcyIsInN0b3JlIiwiI2NsZWFyIiwiZGVsZXRlIiwiaWRzIiwic29mdERlbGV0ZSIsImRlbGV0ZUl0ZW1zIiwiZSIsImNvbnNvbGUiLCJsb2FkIiwiYXJncyIsImxvY2FsTG9hZCIsImZpbHRlciIsInNhdmUiLCJwdWJsaXNoIiwic2V0RW50cmllcyIsImVudHJpZXMiLCJfZmFjdG9yeSIsImxvYWRlZCIsInBhcmVudEJyaWRnZSIsInJlZ2lzdHJ5IiwibG9jYWxJZHMiLCJTZXQiLCJyZW1vdGVEYXRhIiwiUmVnaXN0cnlGYWN0b3J5IiwicGFyYW1zIiwibG9jYWxEYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJhZGQiLCJsb2NhbExvYWRlZCIsImZldGNoaW5nIiwicGFnZSIsInJlbW90ZUVsZW1lbnRzIiwic3RhcnQiLCJsaW1pdCIsImxvY2FsUmVzcG9uc2UiLCJyZW1vdGVMb2FkIiwiZXhjIiwiZmV0Y2hlZCIsImxpc3QiLCJyZW1vdGVSZXNwb25zZSIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwiZnJvbUJhY2tlbmQiLCJtYXAiLCJub3RJbkJhY2siLCJpbmNsdWRlcyIsImxlbmd0aCIsImRlbGV0ZWRFbnRyaWVzIiwidXBkYXRlTG9jYWxJdGVtcyIsInByb21pc2VzIiwicmVjb3JkIiwiaGFzIiwicHVzaCIsImlzUmVhZHkiLCJpIiwibm90RXhpdHMiLCJhbGwiLCJpbmRleCIsIl9jb3JlIiwiX2RhdGFiYXNlIiwiX3NhdmVyIiwiX2xvYWRlciIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJvZmZsaW5lIiwiZGF0YWJhc2UiLCJkYXRhYmFzZU5hbWUiLCJleGlzdHMiLCJmb3VuZCIsInJlZ2lzdHJ5RmFjdG9yeSIsImFwcGx5IiwiYWN0aXZlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDb25uZWN0aW9uIiwiTG9jYWxQcm92aWRlckxvYWRlciIsInByb21pc2VJbml0IiwicmVhZHkiLCJQZW5kaW5nUHJvbWlzZSIsIkRCTWFuYWdlciIsIkxvY2FsUHJvdmlkZXJTYXZlciIsInVwc2VydCIsIm9yaWdpbmFsRGF0YSIsInRyYW5zYWN0aW9uIiwiaW5zdGFuY2VJZFRvSWRNYXAiLCJpbnN0YW5jZUlkIiwiYnVsa1B1dCIsInJlY29yZHMiLCJidWxrR2V0IiwiZXhpc3RpbmdSZWNvcmRzIiwiaXRlbXNUb1VwZGF0ZSIsImlzRGVsZXRlZCIsImJ1bGtEZWxldGUiLCJzYXZlQWxsIiwiX2RleGllIiwicHJvbWlzZUxvYWQiLCJsaXN0SXRlbXMiLCJjb25kaXRpb25zIiwiY3VzdG9tV2hlcmUiLCJkZWZhdWx0V2hlcmUiLCJjdXJyZW50TGltaXQiLCJjdXJyZW50T2Zmc2V0IiwicGFyZW50UHJpdmF0ZVByb3BzIiwicXVhbnRpdHkiLCJpc1NhbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGVyZm9ybUxvYWQiLCIjcGVyZm9ybUxvYWQiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsInJlc29sdmVQcm9taXNlTG9hZCIsImxpdmUiLCJsaXZlUXVlcnkiLCJ3aGVyZSIsInN1YnNjcmliZVRvUXVlcnkiLCJvZmZzZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4ZXMiLCJzY2hlbWEiLCJuYW1lIiwia2V5cyIsImtleSIsImNvbGxlY3Rpb24iLCJxdWVyeSIsInRvQXJyYXkiLCJjdXN0b21GaWx0ZXIiLCJjYWxsYmFjayIsIiNzdWJzY3JpYmVUb1F1ZXJ5IiwiY3VycmVudFBhZ2UiLCJzdWJzY3JpYmUiLCJoYW5kbGVRdWVyeVJlc3BvbnNlIiwiZXJyIiwiI2hhbmRsZVF1ZXJ5UmVzcG9uc2UiLCJzYW1lUXVlcnkiLCJjdXJyZW50TWFwIiwiY2xlYW51cEl0ZW1zIiwiI2NsZWFudXBJdGVtcyIsIiNyZXNvbHZlUHJvbWlzZUxvYWQiLCJfcmVnaXN0cnkiLCJiYXRjaGVzIiwicHJvY2VzcyIsImdldFByb3BlcnRpZXMiLCJ0b1NhdmUiLCJSZWdpc3RyeSIsImRlbGV0ZWQiLCJzZXRWYWx1ZXMiLCJjaHVua3MiLCJiYXRjaCIsInNwbGljZSIsImdldFZhbHVlcyIsInJlc3VsdHMiLCJhbGxTZXR0bGVkIiwibWFwcGVkRm4iLCJyZXN1bHQiLCJmYWlsZWQiLCJidWxrU2F2ZSIsIl9pbmRleCIsIlVzZXJQcm92aWRlciIsIkJvb2siLCJJdGVtIiwiX3NhdmUiLCJsb2NhbEZpZWxkcyIsInNrZWxldG9uIiwidW5pcXVlIiwiX19nZXQiLCJfX2luc3RhbmNlSWQiLCJjaGVja1JlYWR5Iiwid2FybiIsIm9iamVjdFJlYWR5IiwicHJvbWlzZVJlYWR5IiwiaW5pdFByb21pc2UiLCJjb25maWciLCIjc3RhcnQiLCJzcGNzIiwiTG9jYWxQcm92aWRlciIsIkl0ZW1TYXZlTWFuYWdlciIsIkl0ZW1Mb2FkTWFuYWdlciIsImluaXRpYWxpc2UiLCJvblJlYWR5IiwidHJhY2UiLCJ0b0l0ZXJhdGUiLCJmaWVsZCIsImdldFByb3BlcnR5TmFtZXMiLCJzeW5jIiwiZm9yY2VTeW5jIiwic2FtZSIsIm9yaWdpbmFsIiwiaXNOYU4iLCJwYXJzZUludCIsImxvYWRNZXRob2QiLCJpc05ldyIsImZhY3RvcnlSZWdpc3RyeSIsIl9fbW9tZW50IiwiZmxvb3IiLCJyYW5kb20iLCJnZXRSZWdpc3RyeSIsImRlZXBDb21wYXJlIiwib2JqMSIsIm9iajIiLCJrZXlzMSIsImtleXMyIiwidmFsMSIsInZhbDIiLCJhcmVPYmplY3RzIiwiaXNPYmplY3QiLCJvYmplY3QiLCJpc1VucHVibGlzaGVkIiwiI2lzVW5wdWJsaXNoZWQiLCJ0b0NvbXBhcmUiLCJhcmVFcXVhbCIsImxpc3RlblJlZ2lzdHJ5IiwiY3JlYXRlIiwiI2xpc3RlblJlZ2lzdHJ5IiwiZHVwbGljYXRlZCIsInZhbGlkYXRlVW5pcXVlRmllbGRzIiwiZmllbGRzIiwiY2hlY2tQcm9taXNlcyIsImVxdWFscyIsInRoZW4iLCJkdXBsaWNhdGVGaWVsZHMiLCJkZWxldGVSZWdpc3RyeSIsImlkZW50aWZpZXIiLCJpc1BsYWluT2JqZWN0Iiwib2JqIiwiI2RlbGV0ZSIsIiN1cGRhdGUiLCJ1cGRhdGVkIiwicGxhaW4iLCJwdXQiLCJsb2NhbFVwZGF0ZSIsImxvZyIsInByb3BzIiwicmVtb3RlUkVzcG9uc2UiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJJdGVtUHJvdmlkZXIiLCJzdG9yZXMiLCJkYk5hbWUiLCJyZWdpc3Rlckxpc3QiLCJyZWdpc3RyaWVzIiwiaGFzSXRlbSIsImdldFN0b3JlIiwiI2dldFN0b3JlIiwiZGJzIiwiX3V1aWQiLCJrZXlJZCIsInY0IiwibmV3VmFsdWVzIiwiaXNEZWxlbGV0ZWQiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiXSwic291cmNlcyI6WyIvYWRhcHRlci9kZWZhdWx0LnRzIiwiL2FkYXB0ZXIvaW5kZXgudHMiLCIvaW50ZXJmYWNlLnRzIiwiL2FkYXB0ZXIvbGVnYWN5LnRzIiwiL2NhY2hlL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY2hpbGRyZW4tY29uc3RydWN0b3ItcHJvcHMudHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb2xsZWN0aW9uL2xvYWQudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2xvYWRlci50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL3NhdmVyLnRzIiwiL2NvbGxlY3Rpb24vcHVibGlzaC50cyIsIi9leGFtcGxlL2luZGV4LnRzIiwiL3Byb3ZpZGVyLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvY29uZmlnLnRzIiwiL2l0ZW0udHMiLCIvaXRlbS9sb2FkLnRzIiwiL2l0ZW0vbG9jYWwtcHJvdmlkZXIudHMiLCIvaXRlbS9zYXZlLnRzIiwiL3Byb3ZpZGVycy9jb2xsZWN0aW9uLnRzIiwiL3Byb3ZpZGVycy9pdGVtLnRzIiwiL3JlZ2lzdHJ5L2ZhY3RvcnkudHMiLCIvcmVnaXN0cnkvaW5kZXgudHMiLCIvcmVnaXN0cnkvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUVNLE1BQU9BLGNBQWM7WUFDMUJDLFFBQVFBLENBQUNDLElBQVM7Y0FDakIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBRyxVQUFVQSxDQUFDSCxJQUFTO2NBQ25CLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7WUFFQUksY0FBY0EsQ0FBQ0osSUFBUztjQUN2QixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCOztVQUNBSyxPQUFBLENBQUFQLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkRCxJQUFBUSxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFhTSxNQUFPRyxlQUFlO1lBQzNCLE9BQU9DLEdBQUdBLENBQUNDLE1BQU0sRUFBRUMsUUFBNkI7Y0FDL0NBLFFBQVEsR0FBR0EsUUFBUSxHQUFHQSxRQUFRLEdBQUdQLFNBQUEsQ0FBQVEsY0FBYyxDQUFDQyxPQUFPO2NBQ3ZELE1BQU1DLE9BQU8sR0FBR0gsUUFBUSxLQUFLLFNBQVMsR0FBR0wsUUFBQSxDQUFBVixjQUFjLEdBQUdXLE9BQUEsQ0FBQVEsYUFBYTtjQUN2RSxP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