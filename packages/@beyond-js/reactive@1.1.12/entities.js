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
        hash: 149742016,
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
                const notExits = [...this.#parent.elements.values()].map(item => !ids.includes(item.id));
                notExits.forEach(id => {
                  console.log(6, 'eliminamos a', id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0QWRhcHRlciIsInRvQ2xpZW50IiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbVJlbW90ZSIsImZyb21SZW1vdGVMaXN0IiwiZXhwb3J0cyIsIl9zZXR0aW5ncyIsInJlcXVpcmUiLCJfZGVmYXVsdCIsIl9sZWdhY3kiLCJSZXNwb25zZUFkYXB0ZXIiLCJnZXQiLCJwYXJlbnQiLCJhZGFwdGVycyIsIlJlYWN0aXZlQ29uZmlnIiwiYWRhcHRlciIsIkFkYXB0ZXIiLCJMZWdhY3lBZGFwdGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJfbW9kZWwiLCJDYWNoZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiX2FkYXB0ZXIiLCJDb2xsZWN0aW9uIiwiZGIiLCJpdGVtIiwibG9jYWxkYiIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJjbGVhciIsImZvckVhY2giLCJzZXQiLCJpZCIsInRyaWdnZXJFdmVudCIsImNvdW50ZXJzIiwidG90YWwiLCJuZXh0Iiwic2F2ZU1hbmFnZXIiLCJsb2FkTWFuYWdlciIsInByb3ZpZGVyIiwic29ydEJ5Iiwic29ydERpcmVjdGlvbiIsInJlc3BvbnNlQWRhcHRlciIsImluaXRpYWxTcGVjcyIsInNwZWNzIiwicHJvcGVydGllcyIsInN0b3JlTmFtZSIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwiYmluZCIsIkNvbGxlY3Rpb25Mb2NhbFByb3ZpZGVyIiwiQ29sbGVjdGlvblNhdmVNYW5hZ2VyIiwiQ29sbGVjdGlvbkxvYWRNYW5hZ2VyIiwib24iLCJsaXN0ZW5JdGVtcyIsIiNsaXN0ZW5JdGVtcyIsInByb2Nlc3NFbnRyaWVzIiwidHJpZ2dlciIsInNldE9mZmxpbmUiLCJzZXRJdGVtcyIsInN0b3JlIiwiI2NsZWFyIiwiZGVsZXRlIiwiaWRzIiwic29mdERlbGV0ZSIsImRlbGV0ZUl0ZW1zIiwiZSIsImNvbnNvbGUiLCJsb2FkIiwiYXJncyIsImxvY2FsTG9hZCIsImZpbHRlciIsInNhdmUiLCJzeW5jIiwicHVibGlzaCIsInRvU3luYyIsInNldEVudHJpZXMiLCJlbnRyaWVzIiwiX2ZhY3RvcnkiLCJsb2FkZWQiLCJwYXJlbnRCcmlkZ2UiLCJyZWdpc3RyeSIsImxvY2FsSWRzIiwiU2V0IiwicmVtb3RlRGF0YSIsIlJlZ2lzdHJ5RmFjdG9yeSIsInBhcmFtcyIsImxvY2FsRGF0YSIsIm5ld0l0ZW1zIiwidXBkYXRlIiwiY29uY2F0IiwiYWRkIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbFJlc3BvbnNlIiwicmVtb3RlTG9hZCIsImV4YyIsImZldGNoZWQiLCJsYW5kZWQiLCJsaXN0IiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJmcm9tQmFja2VuZCIsIm1hcCIsIm5vdEluQmFjayIsImluY2x1ZGVzIiwibGVuZ3RoIiwiZGVsZXRlZEVudHJpZXMiLCJ1cGRhdGVMb2NhbEl0ZW1zIiwicHJvbWlzZXMiLCJyZWNvcmQiLCJoYXMiLCJwdXNoIiwiaXNSZWFkeSIsImkiLCJub3RFeGl0cyIsImxvZyIsImFsbCIsImluZGV4IiwiX2NvcmUiLCJfZGF0YWJhc2UiLCJfc2F2ZXIiLCJfbG9hZGVyIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsIm9uTGluZSIsIm9mZmxpbmUiLCJkYXRhYmFzZSIsImRhdGFiYXNlTmFtZSIsImV4aXN0cyIsImZvdW5kIiwicmVnaXN0cnlGYWN0b3J5IiwiYXBwbHkiLCJhY3RpdmUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJMb2NhbFByb3ZpZGVyTG9hZGVyIiwicHJvbWlzZUluaXQiLCJyZWFkeSIsIlBlbmRpbmdQcm9taXNlIiwiREJNYW5hZ2VyIiwiTG9jYWxQcm92aWRlclNhdmVyIiwidXBzZXJ0Iiwib3JpZ2luYWxEYXRhIiwidHJhbnNhY3Rpb24iLCJpbnN0YW5jZUlkVG9JZE1hcCIsImluc3RhbmNlSWQiLCJidWxrUHV0IiwicmVjb3JkcyIsImJ1bGtHZXQiLCJleGlzdGluZ1JlY29yZHMiLCJ1bmRlZmluZWQiLCJpdGVtc1RvVXBkYXRlIiwiaXNEZWxldGVkIiwiYnVsa0RlbGV0ZSIsInNhdmVBbGwiLCJfZGV4aWUiLCJwcm9taXNlTG9hZCIsImxpc3RJdGVtcyIsImNvbmRpdGlvbnMiLCJjdXN0b21XaGVyZSIsImRlZmF1bHRXaGVyZSIsIm9yZGVyQnkiLCJjdXJyZW50TGltaXQiLCJjdXJyZW50T2Zmc2V0IiwicGFyZW50UHJpdmF0ZVByb3BzIiwicXVhbnRpdHkiLCJpc1NhbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGVyZm9ybUxvYWQiLCIjcGVyZm9ybUxvYWQiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsInJlc29sdmVQcm9taXNlTG9hZCIsImxpdmUiLCJsaXZlUXVlcnkiLCJ3aGVyZSIsInN1YnNjcmliZVRvUXVlcnkiLCJvZmZzZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4ZXMiLCJzY2hlbWEiLCJuYW1lIiwia2V5cyIsImtleSIsImNvbGxlY3Rpb24iLCJxdWVyeSIsInRvQXJyYXkiLCJjdXN0b21GaWx0ZXIiLCJjYWxsYmFjayIsIiNzdWJzY3JpYmVUb1F1ZXJ5IiwiY3VycmVudFBhZ2UiLCJzdWJzY3JpYmUiLCJoYW5kbGVRdWVyeVJlc3BvbnNlIiwiZXJyIiwiI2hhbmRsZVF1ZXJ5UmVzcG9uc2UiLCJzYW1lUXVlcnkiLCJzb3J0IiwiYSIsImIiLCJjdXJyZW50TWFwIiwiY2xlYW51cEl0ZW1zIiwiI2NsZWFudXBJdGVtcyIsIiNyZXNvbHZlUHJvbWlzZUxvYWQiLCJfcmVnaXN0cnkiLCJiYXRjaGVzIiwicHJvY2VzcyIsImdldFByb3BlcnRpZXMiLCJ0b1NhdmUiLCJSZWdpc3RyeSIsImRlbGV0ZWQiLCJzZXRWYWx1ZXMiLCJjaHVua3MiLCJiYXRjaCIsInNwbGljZSIsImdldFZhbHVlcyIsInJlc3VsdHMiLCJhbGxTZXR0bGVkIiwibWFwcGVkRm4iLCJyZXN1bHQiLCJmYWlsZWQiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJ3YXJuIiwiYnVsa1NhdmUiLCJzZW5kQ2h1bmsiLCJjaHVuayIsInN1Y2Nlc3MiLCJzcGxpdERhdGFJbnRvQ2h1bmtzIiwic2xpY2UiLCJlcXVhbHMiLCJmYWlsZWRDaHVua3MiLCJzdWNjZXNzQ2h1bmtzIiwiX2luZGV4IiwiVXNlclByb3ZpZGVyIiwiQm9vayIsIkl0ZW0iLCJfc2F2ZSIsImxvY2FsRmllbGRzIiwic2tlbGV0b24iLCJ1bmlxdWUiLCJfX2dldCIsIl9faW5zdGFuY2VJZCIsImNoZWNrUmVhZHkiLCJvYmplY3RSZWFkeSIsInByb21pc2VSZWFkeSIsImluaXRQcm9taXNlIiwiY29uZmlnIiwiI3N0YXJ0Iiwic3BjcyIsIkxvY2FsUHJvdmlkZXIiLCJJdGVtU2F2ZU1hbmFnZXIiLCJJdGVtTG9hZE1hbmFnZXIiLCJpbml0aWFsaXNlIiwib25SZWFkeSIsInRyYWNlIiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwiZm9yY2VTeW5jIiwic2FtZSIsIm9yaWdpbmFsIiwiaXNOYU4iLCJwYXJzZUludCIsImxvYWRNZXRob2QiLCJpc05ldyIsImZhY3RvcnlSZWdpc3RyeSIsIl9faWQiLCJmbG9vciIsInJhbmRvbSIsImdldFJlZ2lzdHJ5IiwiZGVlcENvbXBhcmUiLCJvYmoxIiwib2JqMiIsImtleXMxIiwia2V5czIiLCJ2YWwxIiwidmFsMiIsImFyZU9iamVjdHMiLCJpc09iamVjdCIsIm9iamVjdCIsImlzVW5wdWJsaXNoZWQiLCIjaXNVbnB1Ymxpc2hlZCIsInRvQ29tcGFyZSIsImFyZUVxdWFsIiwibGlzdGVuUmVnaXN0cnkiLCJjcmVhdGUiLCIjbGlzdGVuUmVnaXN0cnkiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsImRlbGV0ZVJlZ2lzdHJ5IiwiaWRlbnRpZmllciIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCIjZGVsZXRlIiwiI3VwZGF0ZSIsInVwZGF0ZWQiLCJwbGFpbiIsInB1dCIsImxvY2FsVXBkYXRlIiwicmVtb3RlUmVzcG9uc2UiLCJwcm9wcyIsIkNvbGxlY3Rpb25Qcm92aWRlciIsIkl0ZW1Qcm92aWRlciIsInN0b3JlcyIsImRiTmFtZSIsInJlZ2lzdGVyTGlzdCIsInJlZ2lzdHJpZXMiLCJoYXNJdGVtIiwiZ2V0U3RvcmUiLCIjZ2V0U3RvcmUiLCJkYnMiLCJfdXVpZCIsImtleUlkIiwidjQiLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VzIjpbIi9hZGFwdGVyL2RlZmF1bHQudHMiLCIvYWRhcHRlci9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvYWRhcHRlci9sZWdhY3kudHMiLCIvY2FjaGUvaW5kZXgudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGlsZHJlbi1jb25zdHJ1Y3Rvci1wcm9wcy50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbGxlY3Rpb24vbG9hZC50cyIsIi9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvbG9hZGVyLnRzIiwiL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvc2F2ZXIudHMiLCIvY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFTSxNQUFPQSxjQUFjO1lBQzFCQyxRQUFRQSxDQUFDQyxJQUFTO2NBQ2pCLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUM7WUFDN0I7WUFFQUcsVUFBVUEsQ0FBQ0gsSUFBUztjQUNuQixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO1lBQzdCO1lBRUFJLGNBQWNBLENBQUNKLElBQVM7Y0FDdkIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQztZQUM3Qjs7VUFDQUssT0FBQSxDQUFBUCxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsU0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBYU0sTUFBT0csZUFBZTtZQUMzQixPQUFPQyxHQUFHQSxDQUFDQyxNQUFNLEVBQUVDLFFBQTZCO2NBQy9DQSxRQUFRLEdBQUdBLFFBQVEsR0FBR0EsUUFBUSxHQUFHUCxTQUFB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R2pQLElBQUksSUFBRztjQUNsQixJQUFJLENBQUNBLElBQUksRUFBRTtnQkFDVjs7Y0FFRCxNQUFNK1UsS0FBSyxHQUFHN1QsTUFBTSxDQUFDbU0sSUFBSSxDQUFDck4sSUFBSSxDQUFDO2NBQy9CLElBQUkwVSxPQUFPLEdBQUcsS0FBSztjQUVuQixJQUFJLENBQUMxVSxJQUFJLENBQUNrRCxFQUFFLEVBQUVsRCxJQUFJLENBQUNrRCxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFBLEVBQUc7Y0FFaEMsTUFBTTJTLFNBQVMsR0FBRztnQkFBRSxHQUFHLElBQUksQ0FBQyxDQUFBblQ7Y0FBTyxDQUFFO2NBRXJDcVMsS0FBSyxDQUFDL1IsT0FBTyxDQUFDb0IsUUFBUSxJQUFHO2dCQUN4QixJQUFJcEUsSUFBSSxDQUFDb0UsUUFBUSxDQUFDLEtBQUt5UixTQUFTLENBQUN6UixRQUFRLENBQUMsRUFBRTtnQkFDNUN5UixTQUFTLENBQUN6UixRQUFRLENBQUMsR0FBR3BFLElBQUksQ0FBQ29FLFFBQVEsQ0FBQztnQkFDcENzUSxPQUFPLEdBQUcsSUFBSTtjQUNmLENBQUMsQ0FBQztjQUNGLElBQUkxVSxJQUFJLENBQUNnUixZQUFZLEVBQUUsSUFBSSxDQUFDQSxZQUFZLEdBQUdoUixJQUFJLENBQUM2SyxVQUFVO2NBQzFEZ0wsU0FBUyxDQUFDQyxXQUFXLEdBQUcsSUFBSSxDQUFDMUssU0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDO2NBQ2pELElBQUksQ0FBQyxDQUFBMUksTUFBTyxHQUFHbVQsU0FBUztjQUN4QixJQUFJLENBQUMxUyxZQUFZLEVBQUU7Y0FFbkIsT0FBT3VSLE9BQU87WUFDZixDQUFDO1lBRURyRixTQUFTQSxDQUFBO2NBQ1IsTUFBTTNNLE1BQU0sR0FBRztnQkFBRSxHQUFHLElBQUksQ0FBQyxDQUFBQTtjQUFPLENBQUU7Y0FFbEMsSUFBSSxJQUFJLENBQUNzTyxZQUFZLEVBQUV0TyxNQUFNLENBQUNzTyxZQUFZLEdBQUcsSUFBSSxDQUFDQSxZQUFZO2NBQzlEO2NBQ0EsT0FBT3RPLE1BQU07WUFDZDs7VUFDQXJDLE9BQUEsQ0FBQTBPLFFBQUEsR0FBQUEsUUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRkQsSUFBQW5OLE1BQUEsR0FBQXJCLE9BQUE7VUFHTSxNQUFtQndWLFlBQWEsU0FBUW5VLE1BQUEsQ0FBQUUsYUFBNEI7VUFBR3pCLE9BQUEsQ0FBQTBWLFlBQUEsR0FBQUEsWUFBQTtVQUU3RSxNQUFNQyxZQUFZLEdBQUcsSUFBSUQsWUFBWSxFQUFFIiwiaWdub3JlTGlzdCI6W119