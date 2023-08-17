System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.3/model", "dexie@3.2.4", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.3/database", "uuid@9.0.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Collection, CollectionLocalProvider, Books, Book, IProvider, Item, IItem, LocalProvider, CollectionProvider, ItemProvider, RegistryFactory, StoreRecords, __beyond_pkg, hmr;
  _export({
    Collection: void 0,
    CollectionLocalProvider: void 0,
    Books: void 0,
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
    }, function (_beyondJsReactive113Model) {
      dependency_1 = _beyondJsReactive113Model;
    }, function (_dexie2) {
      dependency_2 = _dexie2;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive113Database) {
      dependency_4 = _beyondJsReactive113Database;
    }, function (_uuid2) {
      dependency_5 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.3"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.3/entities"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['dexie', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@beyond-js/reactive/database', dependency_4], ['uuid', dependency_5]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./collection/index
      **********************************/
      ims.set('./collection/index', {
        hash: 3045972132,
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
          /*bundle */
          class Collection extends _model.ReactiveModel {
            #items = [];
            localdb = true;
            get items() {
              return this.#items;
            }
            get isOnline() {
              return !this.localProvider ? true : this.localProvider.isOnline;
            }
            set items(value) {
              if (!Array.isArray(value)) {
                return;
              }
              this.#items = value;
              this.triggerEvent();
            }
            counters = {};
            /**
             * Represents the number of elements in the collection
             */
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
            constructor(specs) {
              super();
              const {
                provider,
                storeName,
                db,
                localdb,
                item
              } = specs;
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
                set: setProperty
              };
              if (this.localdb) {
                this.#localProvider = new _localProvider.CollectionLocalProvider(this, bridge);
                this.#localProvider.on('items.changed', this.#listenItems);
                this.localProvider.init();
              }
              this.#saveManager = new _publish.CollectionSaveManager(this, bridge);
              this.#loadManager = new _load.CollectionLoadManager(this, bridge);
            }
            #listenItems = () => {
              if (!this.localdb) return;
              this.#items = this.#loadManager.processEntries(this.#localProvider.items);
              this.trigger('change');
            };
            setOffline = value => this.localProvider.setOffline(value);
            setItems(values) {
              this.#items = values;
            }
            async store() {
              await this.#localProvider.init();
              return this.#localProvider.store;
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
            filter = args => this.#loadManager.filter(args);
            save = args => this.#saveManager.save(args);
            sync = args => this.#saveManager.sync(args);
            publish = args => this.#saveManager.publish(args);
            toSync = () => this.#saveManager.toSync();
          }
          exports.Collection = Collection;
        }
      });

      /*********************************
      INTERNAL MODULE: ./collection/load
      *********************************/

      ims.set('./collection/load', {
        hash: 446799923,
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
            #parentBridge;
            #parent;
            #registry;
            get parent() {
              return this.#parent;
            }
            /**
             * Original data obtained in provider.load
             *
             * This property lets the developer access to the original data obtained from the provider in the children object.
             * Only contains the data from the last load.
             *
             */
            remoteData = [];
            constructor(parent, parentBridge) {
              this.#parent = parent;
              this.#parentBridge = parentBridge;
              this.init();
            }
            init() {
              this.#localProvider = this.#parentBridge.get('localProvider');
              this.#provider = this.#parentBridge.get('provider');
              this.#registry = _factory.RegistryFactory.get(this.#parentBridge.get('storeName'));
              if (this.#localProvider) this.#parent.customFilter = this.#localProvider?.customFilter;
            }
            /**
             * metodo general para las consultas de tipo lista para las colecciones
             * @param params Object filters and configuration
             * parameters:
             *  - next
             *  - limit
             *  - update // siguiente pagina de misma consulta
             *
             *
             * - status // 1, 0, -1
             *  {user: [10,30]}
             *
             * {and: [{user:10}, {user:30}]]}
             *
             *  {user: 10}
             *  {user: [10,30,40,50]}
             * {or: [{user:10}, {user:30}]]}
             * {and: [{user:10}, {user:30}]]}
             *  el provider debe devolver:
             *    - next
             *    - entries
             *  - total
             * load({status:1})
             */
            #localLoad = async params => {
              const localData = (await this.#localProvider.load(params)) ?? {
                data: []
              };
              const newItems = this.processEntries(localData.data);
              let items = params.update === true ? this.parent.items.concat(newItems) : newItems;
              const properties = {
                localLoaded: true,
                fetching: false,
                total: localData.total ?? 0,
                next: !!localData.next,
                items
              };
              if (localData.next) properties.next = localData.next;
              this.parent.set(properties);
              return items;
            };
            #localData = [];
            #page = 1;
            #remoteElements = [];
            load = async (params = {}) => {
              try {
                this.parent.fetching = true;
                let {
                  start = 0,
                  update
                } = params;
                params.limit = params.limit ?? 30;
                const {
                  next
                } = this.parent;
                if (update) this.#page++;
                start = update === true && next ? next : start;
                if (update) {
                  params.start = start;
                }
                const {
                  isOnline
                } = this.parent;
                if (this.#localProvider) {
                  if (!isOnline || !this.#provider) {
                    const localItems = await this.#localLoad(params);
                    return {
                      status: true,
                      data: localItems
                    };
                  }
                }
                const remoteData = await this.#provider.list(params);
                this.remoteData = remoteData;
                const {
                  status,
                  data,
                  error
                } = remoteData;
                if (!status) throw error ?? 'ERROR_LIST_QUERY';
                const items = await this.processRemoteEntries(data);
                // if (this.#localProvider) await this.#localProvider.save(items);
                this.#remoteElements = params.update === true ? this.#remoteElements.concat(items) : items;
                const properties = {
                  items: this.#remoteElements,
                  next: data.next,
                  loaded: true,
                  fetching: false,
                  total: data.total ?? 0
                };
                this.parent.set(properties);
                this.parent.triggerEvent();
                return {
                  status: true,
                  data: items
                };
              } catch (exc) {
                console.error('ERROR LOAD', exc);
                this.#parent.set({
                  loaded: false,
                  fetching: true
                });
                this.parent.triggerEvent();
                return {
                  status: false,
                  error: {
                    message: exc
                  }
                };
              }
            };
            async processRemoteEntries(data) {
              if (!data.entries) {
                throw new Error('The list method must return an object with an entries property');
              }
              if (data.deletedEntries) {
                // todo: unify it in recordsFactory
                this.#localProvider.softDelete(data.deletedEntries);
              }
              await this.#localProvider.save(data.entries);
              return data.entries.map(record => {
                const item = new this.parent.item({
                  id: record.id
                });
                item.set(record);
                return item;
              });
            }
            processEntries = entries => {
              this.#registry.registerList(this.#parentBridge.get('storeName'), entries);
              return entries.map(record => {
                const item = new this.parent.item({
                  id: record.id
                });
                item.set(record);
                return item;
              });
            };
            remoteLoad = async params => {
              const response = await this.#provider.load(params);
              if (!response.status) throw 'ERROR_DATA_QUERY';
              return response.data;
            };
          }
          exports.CollectionLoadManager = CollectionLoadManager;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./collection/local-provider
      *******************************************/

      ims.set('./collection/local-provider', {
        hash: 3058165278,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionLocalProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _dexie = require("dexie");
          var _core = require("@beyond-js/kernel/core");
          var _database = require("@beyond-js/reactive/database");
          var _factory = require("../registry/factory");
          /*bundle*/
          class CollectionLocalProvider extends _model.ReactiveModel {
            #isOnline = globalThis.navigator.onLine;
            #store;
            get store() {
              return this.#store;
            }
            /**
             * Defines if the collection is using a local database or not.
             */
            #active;
            get active() {
              return this.#active;
            }
            #offline;
            #database;
            #storeName;
            #databaseName;
            #listItems = new Map();
            #items = [];
            #registryFactory;
            get items() {
              return this.#items;
            }
            #exists = false;
            #found = false;
            #ids = new Set();
            #db;
            get isOnline() {
              return this.#isOnline && !this.#offline && !localStorage.getItem('reactive.offline');
            }
            #parent;
            #bridge;
            constructor(parent, bridge) {
              super();
              const {
                db,
                storeName
              } = parent;
              this.#parent = parent;
              this.#bridge = bridge;
              if (db) {
                this.#registryFactory = _factory.RegistryFactory.get(db);
              }
              this.#databaseName = db;
              this.#storeName = storeName;
              globalThis.addEventListener('online', this.handleConnection);
              globalThis.addEventListener('offline', this.handleConnection);
            }
            setOffline(value) {
              this.#offline = value;
              this.triggerEvent();
            }
            #promiseInit;
            init = async () => {
              try {
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
                this.ready = true;
                this.#promiseInit.resolve();
              } catch (e) {
                console.error(e);
              }
            };
            handleConnection = () => {
              this.triggerEvent();
            };
            /**
             * @todo: Must validated if some item in the collection is not sync.
             * @param data
             * @returns
             */
            #isUnpublished(data) {}
            #promiseLoad;
            #params;
            #total;
            #page = 0;
            #customWhere;
            #defaultWhere = store => store.orderBy('id');
            #currentLimit;
            #currentOffset;
            where = limit => {
              return () => {
                let store = this.#store;
                const offset = (this.#page - 1) * limit;
                const filter = this.#customWhere ?? this.#defaultWhere;
                this.#currentLimit = limit;
                this.#currentOffset = offset;
                /**
                 * @todo: the isDeleted field must be set as 0 by default.
                 */
                return filter(store).filter(i => i.isDeleted !== 1).offset(offset).limit(limit).toArray();
              };
            };
            customFilter = callback => {
              this.#customWhere = callback;
              return this.#parent;
            };
            async load(params) {
              if (this.#promiseLoad) return this.#promiseLoad;
              if (JSON.stringify(this.#params) === JSON.stringify(params)) {
                return this.#promiseLoad;
              }
              this.#promiseLoad = new _core.PendingPromise();
              await this.init();
              const conditions = Object.keys(params);
              const controls = ['and', 'or'];
              conditions.forEach(condition => {
                if (controls.includes(condition)) {
                  this.#processControl(condition, params[condition]);
                }
              });
              try {
                if (!this.#total) this.#total = await this.#store.count();
                let limit = params.limit ?? 30;
                const totalPages = Math.ceil(this.#total / limit);
                if (totalPages <= this.#page) return;
                let first = true;
                const live = (0, _dexie.liveQuery)(this.where(limit));
                this.#page++;
                let currentPage;
                live.subscribe({
                  next: async items => {
                    let sameQuery;
                    if (currentPage == this.#page) {
                      sameQuery = true;
                    } else {
                      currentPage = this.#page;
                    }
                    if (this.#promiseLoad) {
                      first = false;
                      const response = {
                        status: true,
                        data: items,
                        total: this.#total,
                        next: true
                      };
                      if (this.#page + 1 >= totalPages) delete response.next;
                      this.#promiseLoad.resolve(response);
                      this.#promiseLoad = null;
                    }
                    const currentMap = new Set();
                    items.forEach(item => {
                      this.#listItems.set(item.id, item);
                      currentMap.add(item.id);
                    });
                    if (sameQuery) {
                      const removed = [...this.#listItems.keys()].forEach(id => {
                        if (!currentMap.has(id)) {
                          this.#listItems.delete(id);
                        }
                      });
                    }
                    this.#items = [...this.#listItems.values()];
                    items.forEach(item => this.#ids.add(item.id));
                    this.trigger('items.changed');
                  },
                  error: err => {
                    console.error(err);
                  }
                });
                return this.#promiseLoad;
                //return await this.live.toArray();
              } catch (error) {
                console.error('Error al cargar los elementos del store:', error);
                return {
                  status: false,
                  data: []
                };
              }
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
              data = process(data, this.isOnline ? 0 : 1);
              await this.#registryFactory.init();
              await this.#registryFactory.saveAll(data, this.#storeName);
            }
            #processControl(control, conditions) {
              this.#store[control];
            }
            async upsert(data, originalData) {
              return this.#database.db.transaction('rw', this.store, async () => {
                const instanceIdToIdMap = new Map();
                data.forEach(item => {
                  instanceIdToIdMap.set(item.instanceId, item.id);
                });
                await this.store.bulkPut(data);
              });
            }
            async softDelete(ids) {
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
          }
          exports.CollectionLocalProvider = CollectionLocalProvider;
        }
      });

      /************************************
      INTERNAL MODULE: ./collection/publish
      ************************************/

      ims.set('./collection/publish', {
        hash: 2901920447,
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
            constructor(parent, bridge) {
              this.#parent = parent;
              this.#bridge = bridge;
              this.init();
            }
            init() {
              this.#localdb = this.#bridge.get('localdb');
              if (this.#localdb) {
                this.#localProvider = this.#bridge.get('localProvider');
              } else {
                console.warn('la colleccion no usa indexeddb');
              }
              this.#provider = this.#bridge.get('provider');
            }
            save = async (data = []) => {
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
                return {
                  status: true
                };
              } catch (error) {
                console.error(error);
                return {
                  status: false,
                  error
                };
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
              for (const [index, chunk] of chunks.entries()) {
                const result = await this.sendChunk(chunk);
                if (!result.success) {
                  failedChunks.push(result);
                } else successChunks.push(result);
              }
              this.#bridge.set('items', []);
              await this.#parent.load();
              if (failedChunks.length) {
                const message = failedChunks.length === chunks.length ? 'FAILED_SYNC' : 'INCOMPLETE_SYNC';
                return {
                  status: false,
                  message,
                  data: {
                    failed: failedChunks,
                    success: successChunks
                  }
                };
              }
              return {
                status: true,
                data: successChunks
              };
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
        hash: 3894907271,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Books = void 0;
          var _collection = require("../collection");
          var _index = require("./index");
          // import { UserProvider } from '@beyond-js/reactive/tests/backend/provider';
          class UserProvider {}
          /*bundle*/
          class Books extends _collection.Collection {
            constructor() {
              super({
                provider: UserProvider,
                storeName: 'books',
                db: 'test',
                item: _index.Book
              });
            }
          }
          exports.Books = Books;
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
        hash: 2771398495,
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
        hash: 1486659131,
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
          /*bundle*/
          class Item extends _model.ReactiveModel {
            #info = new Map();
            /**
             * Represent the data that is stored in the local database
             */
            #localData = new Map();
            localdb = true;
            #provider;
            get provider() {
              return this.#provider;
            }
            storeName;
            db;
            #ignoredFields = [];
            #skeleton = [];
            localProvider;
            unique = [];
            get isUnpublished() {
              return this.localProvider.isUnpublished(this.getProperties());
            }
            #saveManager;
            get skeleton() {
              return this.#skeleton;
            }
            __get(property) {
              return this[property];
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
            get instanceId() {
              return this.localProvider.instanceId;
            }
            get landed() {
              return this.localProvider?.landed;
            }
            get isReady() {
              return this.checkReady();
            }
            #loadManager;
            #objectReady = false;
            #promiseReady;
            #initPromise;
            constructor(config = {}) {
              super();
              const {
                db,
                storeName
              } = config;
              if (db) this.db = db;
              if (storeName) this.storeName = storeName;
              if (config.provider) {
                if (typeof config.provider !== 'function') {
                  throw new Error('Provider must be an function');
                }
                this.#provider = new config.provider();
              }
              this.on('object.loaded', this.checkReady);
              this.reactiveProps(['found']);
              const getProperty = property => this.__get(property);
              const setProperty = (property, value) => this[property] = value;
              const bridge = {
                get: getProperty,
                set: setProperty
              };
              this.localProvider = new _localProvider.LocalProvider(this, bridge);
              this.#saveManager = new _save.ItemSaveManager(this, bridge);
              this.#loadManager = new _load.ItemLoadManager(this, bridge);
              this.save = this.save.bind(this);
              if (this.db && this.storeName) this.init(config);
            }
            async init(config = {}) {
              try {
                let id;
                if (this.#initPromise) return this.#initPromise;
                this.#initPromise = new _core.PendingPromise();
                if (config.id) id = config.id;
                await this.localProvider.init(id);
                if (this.#skeleton && this.#skeleton.length > 0) {
                  this.properties = this.#skeleton;
                }
                this.ready = true;
                this.#initPromise.resolve(true);
                this.trigger('object.loaded');
              } catch (e) {
                console.error('error initializing', e);
              }
            }
            /**
             * Validates if the object is ready to be used
             *
             * Is implemented internally by methods such as publish or load to avoid errors in cases
             * where could it be called before the object is ready.
             *
             * @returns {Promise<boolean>} A promise that resolves when the object is ready
             */
            checkReady = () => {
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
            };
            setOffline = value => this.localProvider.setOffline(value);
            /**
             * Set the data of the object
             *
             * @param data The data to set
             * @param init If true, the data will be stored in the local database
             */
            set(data, init = false) {
              //	If init is true, store the data in localData Map
              if (init && this.localdb) {
                this.#localData = new Map(Object.entries(data));
                this.localProvider.save(data, true);
              }
              this.properties.forEach(property => {
                if (typeof property === 'object') {
                  if (data.hasOwnProperty(property.name)) {
                    //	console.log(10, property);
                  }
                  return;
                }
                if (data.hasOwnProperty(property)) {
                  this[property] = data[property];
                }
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
        hash: 2972906493,
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
        hash: 983423751,
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
        hash: 2361156957,
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
            ready;
            constructor(parent, bridge) {
              this.#parent = parent;
              this.#getProperty = bridge.get;
              this.#bridge = bridge;
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
                if (!params && this.#parent.id) {
                  params = {
                    id: this.#parent.id
                  };
                }
                if (localdb && this.#localProvider) {
                  const localData = await this.#localProvider.load(params);
                  if (localdb && localProvider) {
                    const localData = await localProvider.load(params);
                    if (localData?.status) this.#parent.set(localData.data, true);
                  }
                  if (localProvider && !localProvider.isOnline) return {
                    status: true
                  };
                  if (!this.#provider) return;
                  const remoteData = await this.remoteLoad(params);
                  if (!remoteData) {
                    this.#parent.found = false;
                  } else if (remoteData) {
                    let same = true;
                    Object.keys(remoteData).forEach(key => {
                      let original = localProvider.registry.values;
                      if (original[key] !== remoteData[key]) same = false;
                    });
                    if (!same) await this.#localProvider.save(remoteData);
                    this.#parent.found = true;
                  }
                  return {
                    status: true,
                    data: remoteData
                  };
                }
              } catch (exc) {
                console.error('ERROR LOAD', exc);
                return {
                  status: false,
                  error: exc
                };
              } finally {
                this.#parent.fetching = false;
              }
            };
            remoteLoad = async params => {
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
              if (!response.status) {
                console.error(response);
                throw 'ERROR_DATA_QUERY';
              }
              return response.data;
            };
          }
          exports.ItemLoadManager = ItemLoadManager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./item/local-provider
      *************************************/

      ims.set('./item/local-provider', {
        hash: 378585591,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LocalProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _database = require("@beyond-js/reactive/database");
          var _factory = require("../registry/factory");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class LocalProvider extends _model.ReactiveModel {
            #isOnline = globalThis.navigator.onLine;
            #store;
            get store() {
              return this.#store;
            }
            #offline;
            #isNew = false;
            #database;
            #storeName;
            #databaseName;
            #originalData;
            #exists = false;
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
            #bridge;
            get registry() {
              return this.#registry;
            }
            constructor(parent, bridge) {
              super();
              this.#getProperty = bridge.get;
              const {
                db,
                storeName
              } = parent;
              this.__id = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
              this.#parent = parent;
              if (!db || !storeName) {
                throw new Error('database and store are required');
              }
              this.#databaseName = db;
              this.#storeName = storeName;
              this.#bridge = bridge;
              this.#localdb = bridge.get('localdb');
              this.#factoryRegistry = _factory.RegistryFactory.get(db);
              globalThis.addEventListener('online', this.handleConnection);
              globalThis.addEventListener('offline', this.handleConnection);
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
                this.#isNew = !id;
                await this.#getRegistry(id);
                return;
              } catch (e) {
                console.error(e);
              }
            };
            handleConnection = () => {
              this.triggerEvent();
            };
            isUnpublished(data) {
              const properties = Object.keys(data);
              const toCompare = {
                ...this.#registry.values
              };
              return properties.some(prop => {
                if (prop === 'id') return false;
                return toCompare[prop] !== data[prop];
              });
            }
            async load(params = {}) {
              let id = params.id;
              //TODO: review @julio
              id = id ?? this.registry.values?.id;
              try {
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
              if (this.#factoryRegistry.hasItem(this.#storeName, id)) {
                const item = this.#factoryRegistry.getItem(this.#storeName, id);
                this.#registry = item;
                this.#parent.localLoaded = this.#parent.found = item.values.found;
                this.#parent.set(this.#registry.values);
                this.#isNew = this.#registry?.values?.isNew ? true : false;
                return item.values;
              }
              const getRegistry = data => {
                this.#registry = this.#factoryRegistry.create(this.#storeName, data);
                this.#registry.on('change', this.#listenRegistry);
                this.#parent.set(this.#registry.values);
                this.trigger('change');
              };
              let specs = {
                id
              };
              if (!id || !this.#localdb) {
                specs.ready = id && !this.#localdb;
                getRegistry(specs);
                return this.#registry.values;
              }
              // this code is only executed if the localdb is true
              const promise = new _core.PendingPromise();
              this.#store.get(id).then(data => {
                specs = {
                  ...specs,
                  ...data
                };
                specs.found = !!data;
                getRegistry(specs);
                promise.resolve(this.#registry.values);
              });
              return promise;
            };
            /**
             * Trigger the event to update the component when the registry changes.
             */
            #listenRegistry = async () => {
              if (!this.#registry) return;
              this.#parent.set(this.#registry.values);
              this.trigger('change');
            };
            async save(data, backend = false) {
              try {
                if (!this.isUnpublished(data)) return;
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
              const response = await this.#update({
                isDeleted: 1
              });
              return response;
            };
            async #update(data) {
              const updated = this.#registry.setValues(data);
              if (!updated) return;
              await this.#store.put(this.#registry.values);
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
        hash: 714424713,
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
            constructor(parent, bridge) {
              this.#parent = parent;
              this.#getProperty = bridge.get;
              this.#bridge = bridge;
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
                  this.#parent.set(data);
                }
                if (!this.#parent.isUnpublished) {
                  return;
                }
                const properties = this.#parent.getProperties();
                if (this.#localProvider) {
                  await this.#localProvider.save(properties);
                }
                await this.#publish(properties);
                this.#parent.triggerEvent();
                return {
                  status: true
                };
              } catch (e) {
                console.error('error saving', e);
              }
            };
            #publish = async properties => {
              try {
                if (!this.#provider || !this.#bridge.get('isOnline')) return;
                const response = await this.#provider.publish(properties);
                if (!response?.status) throw response.error;
                if (this.#localProvider) {
                  this.#localProvider.save(response.data, true);
                  this.#localProvider.triggerEvent();
                }
                return {
                  status: true,
                  data: response
                };
              } catch (error) {
                console.error('ERROR PUBLISHING', error);
                return {
                  status: false,
                  error
                };
              }
            };
            publish = this.save;
            sync = () => {
              const provider = this.#getProperty('localProvider');
              if (!provider.registry.values.offline) {
                console.warn('registry already synced');
                return;
              }
              this.#publish(provider.registry.values);
              //const data = this.#getProperty("localProvider").store.where("offline").equals(true).toArray();
            };

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
                  await this.#localProvider.save(properties, false);
                }
                this.#parent.triggerEvent();
                return {
                  status: true
                };
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
        hash: 73028418,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RegistryFactory = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _index = require("./index");
          var _core = require("@beyond-js/kernel/core");
          var _database = require("@beyond-js/reactive/database");
          /**
           *
           */
          class RegistryFactory extends _model.ReactiveModel {
            #stores = new Map();
            #database;
            #batches = 200;
            #dbName;
            constructor(dbName) {
              super();
              this.#dbName = dbName;
              this.init();
            }
            #promiseReady;
            async init() {
              if (this.ready) return true;
              if (this.#promiseReady) return this.#promiseReady;
              this.#promiseReady = new _core.PendingPromise();
              this.#database = await _database.DBManager.get(this.#dbName);
              this.#promiseReady.resolve();
              this.#promiseReady = undefined;
              this.ready = true;
            }
            async load(storeName, id = undefined) {
              const store = this.#database.db[storeName];
              if (!store) throw new Error(`Store ${storeName} does not exists`);
              // if the store map does not exists, create it
              if (!this.#stores.has(storeName)) this.#stores.set(storeName, new Map());
              // if the registry exists, return it
              if (this.#stores.has(storeName) && this.#stores.get(storeName).has(id)) {
                const registry = this.#stores.get(storeName).get(id);
                return registry.get();
              }
              const registry = new _index.Registry(store, {
                id
              });
              await registry.get();
              this.#stores.get(storeName).set(registry.instanceId, registry);
              return registry;
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
              const elements = items.map(item => {
                const registry = new _index.Registry(storeName);
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
            static #dbs = new Map();
            /**
             * Returns a RegistryFactory instance for the specified database name.
             *
             * @param dbName IndexedDB database name
             * @returns
             */
            static get(dbName) {
              if (this.#dbs.has(dbName)) return this.#dbs.get(dbName);
              const db = new RegistryFactory(dbName);
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
        hash: 2786462872,
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
            #instanceId;
            #isDeleted;
            #isNew;
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
              this.#instanceId = id ?? (0, _uuid.v4)();
              if (!id) this.#id = this.#instanceId;
              if (this.#id) this.#values.id = this.#id;
            }
            setValues = data => {
              const props = Object.keys(data);
              let updated = false;
              if (!data.id) {
                data.id = this.#id;
              }
              const newValues = {
                ...this.#values
              };
              props.forEach(property => {
                if (data[property] === newValues[property]) return;
                newValues[property] = data[property];
                updated = true;
              });
              newValues.isDeleleted = this.isDeleted === 1 ?? 0;
              this.#values = newValues;
              this.triggerEvent();
              return updated;
            };
            getValues() {
              const values = {
                ...this.#values
              };
              if (this.#instanceId) values.instanceId = this.#instanceId;
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
        "im": "./collection/index",
        "from": "Collection",
        "name": "Collection"
      }, {
        "im": "./collection/local-provider",
        "from": "CollectionLocalProvider",
        "name": "CollectionLocalProvider"
      }, {
        "im": "./example/collection",
        "from": "Books",
        "name": "Books"
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
        (require || prop === 'Collection') && _export("Collection", Collection = require ? require('./collection/index').Collection : value);
        (require || prop === 'CollectionLocalProvider') && _export("CollectionLocalProvider", CollectionLocalProvider = require ? require('./collection/local-provider').CollectionLocalProvider : value);
        (require || prop === 'Books') && _export("Books", Books = require ? require('./example/collection').Books : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bmUiLCJsb2NhbFByb3ZpZGVyIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInByb3ZpZGVyIiwic29ydEJ5Iiwic29ydERpcmVjdGlvbiIsImNvbnN0cnVjdG9yIiwic3BlY3MiLCJzdG9yZU5hbWUiLCJkYiIsIml0ZW0iLCJFcnJvciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwiZ2V0Iiwic2V0IiwiQ29sbGVjdGlvbkxvY2FsUHJvdmlkZXIiLCJvbiIsIkNvbGxlY3Rpb25TYXZlTWFuYWdlciIsIkNvbGxlY3Rpb25Mb2FkTWFuYWdlciIsInByb2Nlc3NFbnRyaWVzIiwidHJpZ2dlciIsInNldE9mZmxpbmUiLCJzZXRJdGVtcyIsInZhbHVlcyIsInN0b3JlIiwiZGVsZXRlIiwiaWRzIiwic29mdERlbGV0ZSIsImRlbGV0ZUl0ZW1zIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxvYWQiLCJhcmdzIiwiZmlsdGVyIiwic2F2ZSIsInN5bmMiLCJwdWJsaXNoIiwidG9TeW5jIiwiZXhwb3J0cyIsInBhcmVudCIsInJlbW90ZURhdGEiLCJwYXJlbnRCcmlkZ2UiLCJSZWdpc3RyeUZhY3RvcnkiLCJjdXN0b21GaWx0ZXIiLCJwYXJhbXMiLCJsb2NhbERhdGEiLCJkYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbEl0ZW1zIiwic3RhdHVzIiwibGlzdCIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwibG9hZGVkIiwiZXhjIiwibWVzc2FnZSIsImVudHJpZXMiLCJkZWxldGVkRW50cmllcyIsIm1hcCIsInJlY29yZCIsImlkIiwicmVnaXN0ZXJMaXN0IiwicmVtb3RlTG9hZCIsInJlc3BvbnNlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsIm9uTGluZSIsImFjdGl2ZSIsIk1hcCIsIlNldCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsImRhdGFiYXNlIiwiREJNYW5hZ2VyIiwicmVhZHkiLCJvcmRlckJ5Iiwid2hlcmUiLCJvZmZzZXQiLCJpIiwiaXNEZWxldGVkIiwidG9BcnJheSIsImNhbGxiYWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmRpdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwiY29udHJvbHMiLCJmb3JFYWNoIiwiY29uZGl0aW9uIiwiaW5jbHVkZXMiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImZpcnN0IiwibGl2ZSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwic2FtZVF1ZXJ5IiwiY3VycmVudE1hcCIsImFkZCIsInJlbW92ZWQiLCJoYXMiLCJlcnIiLCJwcm9jZXNzIiwib2ZmbGluZSIsImdldFByb3BlcnRpZXMiLCJ0b1NhdmUiLCJpbnN0YW5jZUlkIiwic2F2ZUFsbCIsImNvbnRyb2wiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwiYnVsa1B1dCIsInJlY29yZHMiLCJidWxrR2V0IiwiZXhpc3RpbmdSZWNvcmRzIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwiaXRlbXNUb1VwZGF0ZSIsIk1BWF9SRVRSSUVTIiwiQ0hVTktfU0laRSIsIndhcm4iLCJidWxrU2F2ZSIsInNlbmRDaHVuayIsImNodW5rIiwic3VjY2VzcyIsInNwbGl0RGF0YUludG9DaHVua3MiLCJjaHVua3MiLCJwdXNoIiwic2xpY2UiLCJlcXVhbHMiLCJmYWlsZWRDaHVua3MiLCJzdWNjZXNzQ2h1bmtzIiwiaW5kZXgiLCJyZXN1bHQiLCJmYWlsZWQiLCJVc2VyUHJvdmlkZXIiLCJCb29rcyIsIkJvb2siLCJJdGVtIiwidW5pcXVlIiwiaXNVbnB1Ymxpc2hlZCIsInNrZWxldG9uIiwiX19nZXQiLCJsYW5kZWQiLCJpc1JlYWR5IiwiY2hlY2tSZWFkeSIsImNvbmZpZyIsIkxvY2FsUHJvdmlkZXIiLCJJdGVtU2F2ZU1hbmFnZXIiLCJJdGVtTG9hZE1hbmFnZXIiLCJiaW5kIiwib2JqZWN0UmVhZHkiLCJvblJlYWR5IiwiaGFzT3duUHJvcGVydHkiLCJuYW1lIiwiZ2V0VmFsdWVzIiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwiZm91bmQiLCJzYW1lIiwia2V5Iiwib3JpZ2luYWwiLCJyZWdpc3RyeSIsImxvYWRNZXRob2QiLCJfX2lkIiwiZmxvb3IiLCJyYW5kb20iLCJ0b0NvbXBhcmUiLCJzb21lIiwicHJvcCIsImhhc0l0ZW0iLCJpc05ldyIsImdldFJlZ2lzdHJ5IiwiY3JlYXRlIiwicHJvbWlzZSIsInRoZW4iLCJiYWNrZW5kIiwiZHVwbGljYXRlZCIsInZhbGlkYXRlVW5pcXVlRmllbGRzIiwiZmllbGRzIiwiY2hlY2tQcm9taXNlcyIsImR1cGxpY2F0ZUZpZWxkcyIsIlByb21pc2UiLCJhbGwiLCJ1cGRhdGVkIiwic2V0VmFsdWVzIiwicHV0IiwibG9jYWxVcGRhdGUiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJwcm9wcyIsIkl0ZW1Qcm92aWRlciIsImRiTmFtZSIsIlJlZ2lzdHJ5IiwicmVnaXN0cmllcyIsImVsZW1lbnRzIiwiZGVsZXRlZCIsInByb21pc2VzIiwiYmF0Y2giLCJzcGxpY2UiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwibmV3VmFsdWVzIiwiaXNEZWxlbGV0ZWQiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24vaW5kZXgudHMiLCJjb2xsZWN0aW9uL2xvYWQudHMiLCJjb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyLnRzIiwiY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiZXhhbXBsZS9jb2xsZWN0aW9uLnRzIiwiZXhhbXBsZS9pbmRleC50cyIsImludGVyZmFjZXMvcHJvdmlkZXIudHMiLCJpdGVtL2luZGV4LnRzIiwiaXRlbS9pbnRlcmZhY2VzL2NvbmZpZy50cyIsIml0ZW0vaW50ZXJmYWNlcy9pdGVtLnRzIiwiaXRlbS9sb2FkLnRzIiwiaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIml0ZW0vc2F2ZS50cyIsInByb3ZpZGVycy9jb2xsZWN0aW9uLnRzIiwicHJvdmlkZXJzL2l0ZW0udHMiLCJyZWdpc3RyeS9mYWN0b3J5LnRzIiwicmVnaXN0cnkvaW5kZXgudHMiLCJyZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=