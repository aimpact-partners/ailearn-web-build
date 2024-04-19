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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwibG9jYWxkYiIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJjbGVhciIsImZvckVhY2giLCJzZXQiLCJpZCIsInRyaWdnZXJFdmVudCIsImNvdW50ZXJzIiwidG90YWwiLCJuZXh0Iiwic2F2ZU1hbmFnZXIiLCJsb2FkTWFuYWdlciIsInByb3ZpZGVyIiwic29ydEJ5Iiwic29ydERpcmVjdGlvbiIsInJlc3BvbnNlQWRhcHRlciIsImluaXRpYWxTcGVjcyIsInNwZWNzIiwicHJvcGVydGllcyIsInN0b3JlTmFtZSIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwiYmluZCIsIkNvbGxlY3Rpb25Mb2NhbFByb3ZpZGVyIiwiQ29sbGVjdGlvblNhdmVNYW5hZ2VyIiwiQ29sbGVjdGlvbkxvYWRNYW5hZ2VyIiwib24iLCJsaXN0ZW5JdGVtcyIsIiNsaXN0ZW5JdGVtcyIsInByb2Nlc3NFbnRyaWVzIiwidHJpZ2dlciIsInNldE9mZmxpbmUiLCJzZXRJdGVtcyIsInN0b3JlIiwiI2NsZWFyIiwiZGVsZXRlIiwiaWRzIiwic29mdERlbGV0ZSIsImRlbGV0ZUl0ZW1zIiwiZSIsImNvbnNvbGUiLCJsb2FkIiwiYXJncyIsImxvY2FsTG9hZCIsImZpbHRlciIsInNhdmUiLCJzeW5jIiwicHVibGlzaCIsInRvU3luYyIsInNldEVudHJpZXMiLCJlbnRyaWVzIiwiX2ZhY3RvcnkiLCJsb2FkZWQiLCJwYXJlbnRCcmlkZ2UiLCJyZWdpc3RyeSIsImxvY2FsSWRzIiwiU2V0IiwicmVtb3RlRGF0YSIsIlJlZ2lzdHJ5RmFjdG9yeSIsInBhcmFtcyIsImxvY2FsRGF0YSIsIm5ld0l0ZW1zIiwidXBkYXRlIiwiY29uY2F0IiwiYWRkIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwicmVtb3RlTG9hZCIsImV4YyIsImZldGNoZWQiLCJsYW5kZWQiLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJmcm9tQmFja2VuZCIsIm1hcCIsIm5vdEluQmFjayIsImluY2x1ZGVzIiwibGVuZ3RoIiwiZGVsZXRlZEVudHJpZXMiLCJ1cGRhdGVMb2NhbEl0ZW1zIiwicHJvbWlzZXMiLCJyZWNvcmQiLCJoYXMiLCJwdXNoIiwiaXNSZWFkeSIsImkiLCJub3RFeGl0cyIsImFsbCIsImluZGV4IiwiX2NvcmUiLCJfZGF0YWJhc2UiLCJfc2F2ZXIiLCJfbG9hZGVyIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsIm9uTGluZSIsIm9mZmxpbmUiLCJkYXRhYmFzZSIsImRhdGFiYXNlTmFtZSIsImV4aXN0cyIsImZvdW5kIiwicmVnaXN0cnlGYWN0b3J5IiwiYXBwbHkiLCJhY3RpdmUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJMb2NhbFByb3ZpZGVyTG9hZGVyIiwicHJvbWlzZUluaXQiLCJyZWFkeSIsIlBlbmRpbmdQcm9taXNlIiwiREJNYW5hZ2VyIiwiTG9jYWxQcm92aWRlclNhdmVyIiwidXBzZXJ0Iiwib3JpZ2luYWxEYXRhIiwidHJhbnNhY3Rpb24iLCJpbnN0YW5jZUlkVG9JZE1hcCIsImluc3RhbmNlSWQiLCJidWxrUHV0IiwicmVjb3JkcyIsImJ1bGtHZXQiLCJleGlzdGluZ1JlY29yZHMiLCJ1bmRlZmluZWQiLCJpdGVtc1RvVXBkYXRlIiwiaXNEZWxldGVkIiwiYnVsa0RlbGV0ZSIsInNhdmVBbGwiLCJfZGV4aWUiLCJwcm9taXNlTG9hZCIsImxpc3RJdGVtcyIsImNvbmRpdGlvbnMiLCJjdXN0b21XaGVyZSIsImRlZmF1bHRXaGVyZSIsIm9yZGVyQnkiLCJjdXJyZW50TGltaXQiLCJjdXJyZW50T2Zmc2V0IiwicGFyZW50UHJpdmF0ZVByb3BzIiwicXVhbnRpdHkiLCJpc1NhbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGVyZm9ybUxvYWQiLCIjcGVyZm9ybUxvYWQiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsInJlc29sdmVQcm9taXNlTG9hZCIsImxpdmUiLCJsaXZlUXVlcnkiLCJ3aGVyZSIsInN1YnNjcmliZVRvUXVlcnkiLCJvZmZzZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4ZXMiLCJzY2hlbWEiLCJuYW1lIiwia2V5cyIsImtleSIsImNvbGxlY3Rpb24iLCJxdWVyeSIsInRvQXJyYXkiLCJjdXN0b21GaWx0ZXIiLCJjYWxsYmFjayIsIiNzdWJzY3JpYmVUb1F1ZXJ5IiwiY3VycmVudFBhZ2UiLCJzdWJzY3JpYmUiLCJoYW5kbGVRdWVyeVJlc3BvbnNlIiwiZXJyIiwiI2hhbmRsZVF1ZXJ5UmVzcG9uc2UiLCJzYW1lUXVlcnkiLCJzb3J0IiwiYSIsImIiLCJjdXJyZW50TWFwIiwiY2xlYW51cEl0ZW1zIiwiI2NsZWFudXBJdGVtcyIsIiNyZXNvbHZlUHJvbWlzZUxvYWQiLCJfcmVnaXN0cnkiLCJiYXRjaGVzIiwicHJvY2VzcyIsImdldFByb3BlcnRpZXMiLCJ0b1NhdmUiLCJSZWdpc3RyeSIsImRlbGV0ZWQiLCJzZXRWYWx1ZXMiLCJjaHVua3MiLCJiYXRjaCIsInNwbGljZSIsImdldFZhbHVlcyIsInJlc3VsdHMiLCJhbGxTZXR0bGVkIiwibWFwcGVkRm4iLCJyZXN1bHQiLCJmYWlsZWQiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJ3YXJuIiwiYnVsa1NhdmUiLCJzZW5kQ2h1bmsiLCJjaHVuayIsInN1Y2Nlc3MiLCJzcGxpdERhdGFJbnRvQ2h1bmtzIiwic2xpY2UiLCJlcXVhbHMiLCJmYWlsZWRDaHVua3MiLCJzdWNjZXNzQ2h1bmtzIiwiX2luZGV4IiwiVXNlclByb3ZpZGVyIiwiQm9vayIsIkl0ZW0iLCJfc2F2ZSIsImxvY2FsRmllbGRzIiwic2tlbGV0b24iLCJ1bmlxdWUiLCJfX2dldCIsIl9faW5zdGFuY2VJZCIsImNoZWNrUmVhZHkiLCJvYmplY3RSZWFkeSIsInByb21pc2VSZWFkeSIsImluaXRQcm9taXNlIiwiY29uZmlnIiwiI3N0YXJ0Iiwic3BjcyIsIkxvY2FsUHJvdmlkZXIiLCJJdGVtU2F2ZU1hbmFnZXIiLCJJdGVtTG9hZE1hbmFnZXIiLCJpbml0aWFsaXNlIiwib25SZWFkeSIsInRyYWNlIiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwiZm9yY2VTeW5jIiwic2FtZSIsIm9yaWdpbmFsIiwiaXNOYU4iLCJwYXJzZUludCIsImxvYWRNZXRob2QiLCJpc05ldyIsImZhY3RvcnlSZWdpc3RyeSIsIl9faWQiLCJmbG9vciIsInJhbmRvbSIsImdldFJlZ2lzdHJ5IiwiZGVlcENvbXBhcmUiLCJvYmoxIiwib2JqMiIsImtleXMxIiwia2V5czIiLCJ2YWwxIiwidmFsMiIsImFyZU9iamVjdHMiLCJpc09iamVjdCIsIm9iamVjdCIsImlzVW5wdWJsaXNoZWQiLCIjaXNVbnB1Ymxpc2hlZCIsInRvQ29tcGFyZSIsImFyZUVxdWFsIiwibGlzdGVuUmVnaXN0cnkiLCJjcmVhdGUiLCIjbGlzdGVuUmVnaXN0cnkiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsImRlbGV0ZVJlZ2lzdHJ5IiwiaWRlbnRpZmllciIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCIjZGVsZXRlIiwiI3VwZGF0ZSIsInVwZGF0ZWQiLCJwbGFpbiIsInB1dCIsImxvY2FsVXBkYXRlIiwicmVtb3RlUmVzcG9uc2UiLCJwcm9wcyIsIkNvbGxlY3Rpb25Qcm92aWRlciIsIkl0ZW1Qcm92aWRlciIsInN0b3JlcyIsImRiTmFtZSIsInJlZ2lzdGVyTGlzdCIsInJlZ2lzdHJpZXMiLCJoYXNJdGVtIiwiZ2V0U3RvcmUiLCIjZ2V0U3RvcmUiLCJkYnMiLCJfdXVpZCIsImtleUlkIiwidjQiLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VzIjpbIi9hZGFwdGVyL2RlZmF1bHQudHMiLCIvYWRhcHRlci9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvYWRhcHRlci9sZWdhY3kudHMiLCIvY2FjaGUvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGlsZHJlbi1jb25zdHJ1Y3Rvci1wcm9wcy50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbGxlY3Rpb24vbG9hZC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvbG9hZGVyLnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvc2F2ZXIudHMiLCIvY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFTSxNQUFPQSxjQUFjO1lBQzFCQyxRQUFRQSxDQUFDQyxJQUFTO2NBQ2pCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7WUFFQUcsVUFBVUEsQ0FBQ0gsSUFBUztjQUNuQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFJLGNBQWNBLENBQUNKLElBQVM7Y0FDdkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3Qjs7VUFDQUssT0FBQSxDQUFBUCxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsU0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBYU0sTUFBT0csZUFBZTtZQUMzQixPQUFPQyxHQUFHQSxDQUFDQyxNQUFNLEVBQUVDLFFBQTZCO2NBQy9DQSxRQUFRLEdBQUdBLFFBQVEsR0FBR0EsUUFBUSxHQUFHUCxTQUFBLENBQUFR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