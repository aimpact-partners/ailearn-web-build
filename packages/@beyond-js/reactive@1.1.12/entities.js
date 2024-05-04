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
        hash: 3395670207,
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
              console.log(3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwibG9jYWxkYiIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJvcmRlckJ5IiwidmFsdWVzIiwic29ydCIsImEiLCJiIiwiY29uc29sZSIsImxvZyIsImlzT25saW5lIiwibG9jYWxQcm92aWRlciIsIkFycmF5IiwiaXNBcnJheSIsImNsZWFyIiwiZm9yRWFjaCIsInNldCIsImlkIiwidHJpZ2dlckV2ZW50IiwiY291bnRlcnMiLCJ0b3RhbCIsIm5leHQiLCJzYXZlTWFuYWdlciIsImxvYWRNYW5hZ2VyIiwicHJvdmlkZXIiLCJzb3J0QnkiLCJzb3J0RGlyZWN0aW9uIiwicmVzcG9uc2VBZGFwdGVyIiwiaW5pdGlhbFNwZWNzIiwic3BlY3MiLCJwcm9wZXJ0aWVzIiwic3RvcmVOYW1lIiwidW5kZWZpbmVkIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJiaW5kIiwiQ29sbGVjdGlvbkxvY2FsUHJvdmlkZXIiLCJDb2xsZWN0aW9uU2F2ZU1hbmFnZXIiLCJDb2xsZWN0aW9uTG9hZE1hbmFnZXIiLCJvbiIsImxpc3Rlbkl0ZW1zIiwiI2xpc3Rlbkl0ZW1zIiwicHJvY2Vzc0VudHJpZXMiLCJ0cmlnZ2VyIiwic2V0T2ZmbGluZSIsInNldEl0ZW1zIiwic3RvcmUiLCIjY2xlYXIiLCJkZWxldGUiLCJpZHMiLCJzb2Z0RGVsZXRlIiwiZGVsZXRlSXRlbXMiLCJlIiwibG9hZCIsImFyZ3MiLCJsb2NhbExvYWQiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJzZXRFbnRyaWVzIiwiZW50cmllcyIsIl9mYWN0b3J5IiwibG9hZGVkIiwicGFyZW50QnJpZGdlIiwicmVnaXN0cnkiLCJsb2NhbElkcyIsIlNldCIsInJlbW90ZURhdGEiLCJSZWdpc3RyeUZhY3RvcnkiLCJwYXJhbXMiLCJsb2NhbERhdGEiLCJuZXdJdGVtcyIsInVwZGF0ZSIsImNvbmNhdCIsImFkZCIsImxvY2FsTG9hZGVkIiwiZmV0Y2hpbmciLCJwYWdlIiwicmVtb3RlRWxlbWVudHMiLCJzdGFydCIsImxpbWl0IiwibG9jYWxSZXNwb25zZSIsInJlbW90ZUxvYWQiLCJleGMiLCJmZXRjaGVkIiwibGFuZGVkIiwibGlzdCIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwiZnJvbUJhY2tlbmQiLCJtYXAiLCJub3RJbkJhY2siLCJpbmNsdWRlcyIsImxlbmd0aCIsImRlbGV0ZWRFbnRyaWVzIiwidXBkYXRlTG9jYWxJdGVtcyIsInByb21pc2VzIiwicmVjb3JkIiwiaGFzIiwicHVzaCIsImlzUmVhZHkiLCJpIiwibm90RXhpdHMiLCJhbGwiLCJpbmRleCIsIl9jb3JlIiwiX2RhdGFiYXNlIiwiX3NhdmVyIiwiX2xvYWRlciIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJvZmZsaW5lIiwiZGF0YWJhc2UiLCJkYXRhYmFzZU5hbWUiLCJleGlzdHMiLCJmb3VuZCIsInJlZ2lzdHJ5RmFjdG9yeSIsImFwcGx5IiwiYWN0aXZlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDb25uZWN0aW9uIiwiTG9jYWxQcm92aWRlckxvYWRlciIsInByb21pc2VJbml0IiwicmVhZHkiLCJQZW5kaW5nUHJvbWlzZSIsIkRCTWFuYWdlciIsIkxvY2FsUHJvdmlkZXJTYXZlciIsInVwc2VydCIsIm9yaWdpbmFsRGF0YSIsInRyYW5zYWN0aW9uIiwiaW5zdGFuY2VJZFRvSWRNYXAiLCJpbnN0YW5jZUlkIiwiYnVsa1B1dCIsInJlY29yZHMiLCJidWxrR2V0IiwiZXhpc3RpbmdSZWNvcmRzIiwiaXRlbXNUb1VwZGF0ZSIsImlzRGVsZXRlZCIsImJ1bGtEZWxldGUiLCJzYXZlQWxsIiwiX2RleGllIiwicHJvbWlzZUxvYWQiLCJsaXN0SXRlbXMiLCJjb25kaXRpb25zIiwiY3VzdG9tV2hlcmUiLCJkZWZhdWx0V2hlcmUiLCJjdXJyZW50TGltaXQiLCJjdXJyZW50T2Zmc2V0IiwicGFyZW50UHJpdmF0ZVByb3BzIiwicXVhbnRpdHkiLCJpc1NhbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGVyZm9ybUxvYWQiLCIjcGVyZm9ybUxvYWQiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsInJlc29sdmVQcm9taXNlTG9hZCIsImxpdmUiLCJsaXZlUXVlcnkiLCJ3aGVyZSIsInN1YnNjcmliZVRvUXVlcnkiLCJvZmZzZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4ZXMiLCJzY2hlbWEiLCJuYW1lIiwia2V5cyIsImtleSIsImNvbGxlY3Rpb24iLCJxdWVyeSIsInRvQXJyYXkiLCJjdXN0b21GaWx0ZXIiLCJjYWxsYmFjayIsIiNzdWJzY3JpYmVUb1F1ZXJ5IiwiY3VycmVudFBhZ2UiLCJzdWJzY3JpYmUiLCJoYW5kbGVRdWVyeVJlc3BvbnNlIiwiZXJyIiwiI2hhbmRsZVF1ZXJ5UmVzcG9uc2UiLCJzYW1lUXVlcnkiLCJjdXJyZW50TWFwIiwiY2xlYW51cEl0ZW1zIiwiI2NsZWFudXBJdGVtcyIsIiNyZXNvbHZlUHJvbWlzZUxvYWQiLCJfcmVnaXN0cnkiLCJiYXRjaGVzIiwicHJvY2VzcyIsImdldFByb3BlcnRpZXMiLCJ0b1NhdmUiLCJSZWdpc3RyeSIsImRlbGV0ZWQiLCJzZXRWYWx1ZXMiLCJjaHVua3MiLCJiYXRjaCIsInNwbGljZSIsImdldFZhbHVlcyIsInJlc3VsdHMiLCJhbGxTZXR0bGVkIiwibWFwcGVkRm4iLCJyZXN1bHQiLCJmYWlsZWQiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJidWxrU2F2ZSIsInNlbmRDaHVuayIsImNodW5rIiwic3VjY2VzcyIsInNwbGl0RGF0YUludG9DaHVua3MiLCJzbGljZSIsImVxdWFscyIsImZhaWxlZENodW5rcyIsInN1Y2Nlc3NDaHVua3MiLCJfaW5kZXgiLCJVc2VyUHJvdmlkZXIiLCJCb29rIiwiSXRlbSIsIl9zYXZlIiwibG9jYWxGaWVsZHMiLCJza2VsZXRvbiIsInVuaXF1ZSIsIl9fZ2V0IiwiX19pbnN0YW5jZUlkIiwiY2hlY2tSZWFkeSIsIndhcm4iLCJvYmplY3RSZWFkeSIsInByb21pc2VSZWFkeSIsImluaXRQcm9taXNlIiwiY29uZmlnIiwiI3N0YXJ0Iiwic3BjcyIsIkxvY2FsUHJvdmlkZXIiLCJJdGVtU2F2ZU1hbmFnZXIiLCJJdGVtTG9hZE1hbmFnZXIiLCJpbml0aWFsaXNlIiwib25SZWFkeSIsInRyYWNlIiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwiZm9yY2VTeW5jIiwic2FtZSIsIm9yaWdpbmFsIiwiaXNOYU4iLCJwYXJzZUludCIsImxvYWRNZXRob2QiLCJpc05ldyIsImZhY3RvcnlSZWdpc3RyeSIsIl9faWQiLCJmbG9vciIsInJhbmRvbSIsImdldFJlZ2lzdHJ5IiwiZGVlcENvbXBhcmUiLCJvYmoxIiwib2JqMiIsImtleXMxIiwia2V5czIiLCJ2YWwxIiwidmFsMiIsImFyZU9iamVjdHMiLCJpc09iamVjdCIsIm9iamVjdCIsImlzVW5wdWJsaXNoZWQiLCIjaXNVbnB1Ymxpc2hlZCIsInRvQ29tcGFyZSIsImFyZUVxdWFsIiwibGlzdGVuUmVnaXN0cnkiLCJjcmVhdGUiLCIjbGlzdGVuUmVnaXN0cnkiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsImRlbGV0ZVJlZ2lzdHJ5IiwiaWRlbnRpZmllciIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCIjZGVsZXRlIiwiI3VwZGF0ZSIsInVwZGF0ZWQiLCJwbGFpbiIsInB1dCIsImxvY2FsVXBkYXRlIiwicmVtb3RlUmVzcG9uc2UiLCJwcm9wcyIsIkNvbGxlY3Rpb25Qcm92aWRlciIsIkl0ZW1Qcm92aWRlciIsInN0b3JlcyIsImRiTmFtZSIsInJlZ2lzdGVyTGlzdCIsInJlZ2lzdHJpZXMiLCJoYXNJdGVtIiwiZ2V0U3RvcmUiLCIjZ2V0U3RvcmUiLCJkYnMiLCJfdXVpZCIsImtleUlkIiwidjQiLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VzIjpbIi9hZGFwdGVyL2RlZmF1bHQudHMiLCIvYWRhcHRlci9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvYWRhcHRlci9sZWdhY3kudHMiLCIvY2FjaGUvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGlsZHJlbi1jb25zdHJ1Y3Rvci1wcm9wcy50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbGxlY3Rpb24vbG9hZC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvbG9hZGVyLnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvc2F2ZXIudHMiLCIvY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU0sTUFBT0EsY0FBYztZQUMxQkMsUUFBUUEsQ0FBQ0MsSUFBUztjQUNqQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFHLFVBQVVBLENBQUNILElBQVM7Y0FDbkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3QjtZQUVBSSxjQUFjQSxDQUFDSixJQUFTO2NBQ3ZCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7O1VBQ0FLLE9BQUEsQ0FBQVAsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFRLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQWFNLE1BQU9HLGVBQWU7WUFDM0IsT0FBT0MsR0FBR0EsQ0FBQ0MsTUFBTSxFQUFFQyxRQUE2QjtjQUMvQ0EsUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQVEsR0FBR1AsU0FB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