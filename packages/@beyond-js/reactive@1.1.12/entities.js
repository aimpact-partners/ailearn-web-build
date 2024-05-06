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
        hash: 1793545563,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwibG9jYWxkYiIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJvcmRlckJ5IiwidmFsdWVzIiwic29ydCIsImEiLCJiIiwiaXNPbmxpbmUiLCJsb2NhbFByb3ZpZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiY2xlYXIiLCJmb3JFYWNoIiwic2V0IiwiaWQiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInByb3BlcnRpZXMiLCJzdG9yZU5hbWUiLCJ1bmRlZmluZWQiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdCIsImdldFByb3BlcnR5IiwicHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImJyaWRnZSIsImJpbmQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsIm9uIiwibGlzdGVuSXRlbXMiLCIjbGlzdGVuSXRlbXMiLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJzdG9yZSIsIiNjbGVhciIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsIl9mYWN0b3J5IiwibG9hZGVkIiwicGFyZW50QnJpZGdlIiwicmVnaXN0cnkiLCJsb2NhbElkcyIsIlNldCIsInJlbW90ZURhdGEiLCJSZWdpc3RyeUZhY3RvcnkiLCJwYXJhbXMiLCJsb2NhbERhdGEiLCJuZXdJdGVtcyIsInVwZGF0ZSIsImNvbmNhdCIsImFkZCIsImxvY2FsTG9hZGVkIiwiZmV0Y2hpbmciLCJwYWdlIiwicmVtb3RlRWxlbWVudHMiLCJzdGFydCIsImxpbWl0IiwibG9jYWxSZXNwb25zZSIsInJlbW90ZUxvYWQiLCJleGMiLCJmZXRjaGVkIiwibGFuZGVkIiwibGlzdCIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwiZnJvbUJhY2tlbmQiLCJtYXAiLCJub3RJbkJhY2siLCJpbmNsdWRlcyIsImxlbmd0aCIsImRlbGV0ZWRFbnRyaWVzIiwidXBkYXRlTG9jYWxJdGVtcyIsInByb21pc2VzIiwicmVjb3JkIiwiaGFzIiwicHVzaCIsImlzUmVhZHkiLCJpIiwibm90RXhpdHMiLCJhbGwiLCJpbmRleCIsIl9jb3JlIiwiX2RhdGFiYXNlIiwiX3NhdmVyIiwiX2xvYWRlciIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJvZmZsaW5lIiwiZGF0YWJhc2UiLCJkYXRhYmFzZU5hbWUiLCJleGlzdHMiLCJmb3VuZCIsInJlZ2lzdHJ5RmFjdG9yeSIsImFwcGx5IiwiYWN0aXZlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDb25uZWN0aW9uIiwiTG9jYWxQcm92aWRlckxvYWRlciIsInByb21pc2VJbml0IiwicmVhZHkiLCJQZW5kaW5nUHJvbWlzZSIsIkRCTWFuYWdlciIsIkxvY2FsUHJvdmlkZXJTYXZlciIsInVwc2VydCIsIm9yaWdpbmFsRGF0YSIsInRyYW5zYWN0aW9uIiwiaW5zdGFuY2VJZFRvSWRNYXAiLCJpbnN0YW5jZUlkIiwiYnVsa1B1dCIsInJlY29yZHMiLCJidWxrR2V0IiwiZXhpc3RpbmdSZWNvcmRzIiwiaXRlbXNUb1VwZGF0ZSIsImlzRGVsZXRlZCIsImJ1bGtEZWxldGUiLCJzYXZlQWxsIiwiX2RleGllIiwicHJvbWlzZUxvYWQiLCJsaXN0SXRlbXMiLCJjb25kaXRpb25zIiwiY3VzdG9tV2hlcmUiLCJkZWZhdWx0V2hlcmUiLCJjdXJyZW50TGltaXQiLCJjdXJyZW50T2Zmc2V0IiwicGFyZW50UHJpdmF0ZVByb3BzIiwicXVhbnRpdHkiLCJpc1NhbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGVyZm9ybUxvYWQiLCIjcGVyZm9ybUxvYWQiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsInJlc29sdmVQcm9taXNlTG9hZCIsImxpdmUiLCJsaXZlUXVlcnkiLCJ3aGVyZSIsInN1YnNjcmliZVRvUXVlcnkiLCJvZmZzZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4ZXMiLCJzY2hlbWEiLCJuYW1lIiwia2V5cyIsImtleSIsImNvbGxlY3Rpb24iLCJxdWVyeSIsInRvQXJyYXkiLCJjdXN0b21GaWx0ZXIiLCJjYWxsYmFjayIsIiNzdWJzY3JpYmVUb1F1ZXJ5IiwiY3VycmVudFBhZ2UiLCJzdWJzY3JpYmUiLCJoYW5kbGVRdWVyeVJlc3BvbnNlIiwiZXJyIiwiI2hhbmRsZVF1ZXJ5UmVzcG9uc2UiLCJzYW1lUXVlcnkiLCJjdXJyZW50TWFwIiwiY2xlYW51cEl0ZW1zIiwiI2NsZWFudXBJdGVtcyIsIiNyZXNvbHZlUHJvbWlzZUxvYWQiLCJfcmVnaXN0cnkiLCJiYXRjaGVzIiwicHJvY2VzcyIsImdldFByb3BlcnRpZXMiLCJ0b1NhdmUiLCJSZWdpc3RyeSIsImRlbGV0ZWQiLCJzZXRWYWx1ZXMiLCJjaHVua3MiLCJiYXRjaCIsInNwbGljZSIsImdldFZhbHVlcyIsInJlc3VsdHMiLCJhbGxTZXR0bGVkIiwibWFwcGVkRm4iLCJyZXN1bHQiLCJmYWlsZWQiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJidWxrU2F2ZSIsInNlbmRDaHVuayIsImNodW5rIiwic3VjY2VzcyIsInNwbGl0RGF0YUludG9DaHVua3MiLCJzbGljZSIsImVxdWFscyIsImZhaWxlZENodW5rcyIsInN1Y2Nlc3NDaHVua3MiLCJfaW5kZXgiLCJVc2VyUHJvdmlkZXIiLCJCb29rIiwiSXRlbSIsIl9zYXZlIiwibG9jYWxGaWVsZHMiLCJza2VsZXRvbiIsInVuaXF1ZSIsIl9fZ2V0IiwiX19pbnN0YW5jZUlkIiwiY2hlY2tSZWFkeSIsIndhcm4iLCJvYmplY3RSZWFkeSIsInByb21pc2VSZWFkeSIsImluaXRQcm9taXNlIiwiY29uZmlnIiwiI3N0YXJ0Iiwic3BjcyIsIkxvY2FsUHJvdmlkZXIiLCJJdGVtU2F2ZU1hbmFnZXIiLCJJdGVtTG9hZE1hbmFnZXIiLCJpbml0aWFsaXNlIiwib25SZWFkeSIsInRyYWNlIiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwiZm9yY2VTeW5jIiwic2FtZSIsIm9yaWdpbmFsIiwiaXNOYU4iLCJwYXJzZUludCIsImxvYWRNZXRob2QiLCJpc05ldyIsImZhY3RvcnlSZWdpc3RyeSIsIl9faWQiLCJmbG9vciIsInJhbmRvbSIsImdldFJlZ2lzdHJ5IiwiZGVlcENvbXBhcmUiLCJvYmoxIiwib2JqMiIsImtleXMxIiwia2V5czIiLCJ2YWwxIiwidmFsMiIsImFyZU9iamVjdHMiLCJpc09iamVjdCIsIm9iamVjdCIsImlzVW5wdWJsaXNoZWQiLCIjaXNVbnB1Ymxpc2hlZCIsInRvQ29tcGFyZSIsImFyZUVxdWFsIiwibGlzdGVuUmVnaXN0cnkiLCJjcmVhdGUiLCIjbGlzdGVuUmVnaXN0cnkiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsImRlbGV0ZVJlZ2lzdHJ5IiwiaWRlbnRpZmllciIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCIjZGVsZXRlIiwiI3VwZGF0ZSIsInVwZGF0ZWQiLCJwbGFpbiIsInB1dCIsImxvY2FsVXBkYXRlIiwicmVtb3RlUmVzcG9uc2UiLCJwcm9wcyIsIkNvbGxlY3Rpb25Qcm92aWRlciIsIkl0ZW1Qcm92aWRlciIsInN0b3JlcyIsImRiTmFtZSIsInJlZ2lzdGVyTGlzdCIsInJlZ2lzdHJpZXMiLCJoYXNJdGVtIiwiZ2V0U3RvcmUiLCIjZ2V0U3RvcmUiLCJkYnMiLCJfdXVpZCIsImtleUlkIiwidjQiLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VzIjpbIi9hZGFwdGVyL2RlZmF1bHQudHMiLCIvYWRhcHRlci9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvYWRhcHRlci9sZWdhY3kudHMiLCIvY2FjaGUvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGlsZHJlbi1jb25zdHJ1Y3Rvci1wcm9wcy50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbGxlY3Rpb24vbG9hZC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvbG9hZGVyLnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvc2F2ZXIudHMiLCIvY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU0sTUFBT0EsY0FBYztZQUMxQkMsUUFBUUEsQ0FBQ0MsSUFBUztjQUNqQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFHLFVBQVVBLENBQUNILElBQVM7Y0FDbkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBSSxjQUFjQSxDQUFDSixJQUFTO2NBQ3ZCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7O1VBQ0FLLE9BQUEsQ0FBQVAsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFRLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQWFNLE1BQU9HLGVBQWU7WUFDM0IsT0FBT0MsR0FBR0EsQ0FBQ0MsTUFBTSxFQUFFQyxRQUE2QjtjQUMvQ0EsUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQVEsR0FBR1AsU0FBQSxDQUFB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