System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.4/model", "dexie@3.2.4", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.4/database", "uuid@9.0.0"], function (_export, _context) {
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
    }, function (_beyondJsReactive114Model) {
      dependency_1 = _beyondJsReactive114Model;
    }, function (_dexie2) {
      dependency_2 = _dexie2;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive114Database) {
      dependency_4 = _beyondJsReactive114Database;
    }, function (_uuid2) {
      dependency_5 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.4"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.4/entities"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiQ29sbGVjdGlvbiIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsImxvY2FsZGIiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInRyaWdnZXJFdmVudCIsImNvdW50ZXJzIiwidG90YWwiLCJuZXh0Iiwic2F2ZU1hbmFnZXIiLCJsb2FkTWFuYWdlciIsInByb3ZpZGVyIiwic29ydEJ5Iiwic29ydERpcmVjdGlvbiIsImNvbnN0cnVjdG9yIiwic3BlY3MiLCJzdG9yZU5hbWUiLCJkYiIsIml0ZW0iLCJFcnJvciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwiZ2V0Iiwic2V0IiwiQ29sbGVjdGlvbkxvY2FsUHJvdmlkZXIiLCJvbiIsImxpc3Rlbkl0ZW1zIiwiQ29sbGVjdGlvblNhdmVNYW5hZ2VyIiwiQ29sbGVjdGlvbkxvYWRNYW5hZ2VyIiwiI2xpc3Rlbkl0ZW1zIiwicHJvY2Vzc0VudHJpZXMiLCJ0cmlnZ2VyIiwic2V0T2ZmbGluZSIsInNldEl0ZW1zIiwidmFsdWVzIiwic3RvcmUiLCJkZWxldGUiLCJpZHMiLCJzb2Z0RGVsZXRlIiwiZGVsZXRlSXRlbXMiLCJlIiwiY29uc29sZSIsImVycm9yIiwibG9hZCIsImFyZ3MiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJleHBvcnRzIiwiX2ZhY3RvcnkiLCJwYXJlbnRCcmlkZ2UiLCJwYXJlbnQiLCJyZWdpc3RyeSIsInJlbW90ZURhdGEiLCJSZWdpc3RyeUZhY3RvcnkiLCJjdXN0b21GaWx0ZXIiLCJsb2NhbExvYWQiLCJwYXJhbXMiLCJsb2NhbERhdGEiLCJkYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbEl0ZW1zIiwic3RhdHVzIiwibGlzdCIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwibG9hZGVkIiwiZXhjIiwibWVzc2FnZSIsImVudHJpZXMiLCJkZWxldGVkRW50cmllcyIsIm1hcCIsInJlY29yZCIsImlkIiwicmVnaXN0ZXJMaXN0IiwicmVtb3RlTG9hZCIsInJlc3BvbnNlIiwiX2RleGllIiwiX2NvcmUiLCJfZGF0YWJhc2UiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwiYWN0aXZlIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwibGlzdEl0ZW1zIiwiTWFwIiwicmVnaXN0cnlGYWN0b3J5IiwiZXhpc3RzIiwiZm91bmQiLCJTZXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJwcm9taXNlSW5pdCIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIkRCTWFuYWdlciIsInJlYWR5IiwiaXNVbnB1Ymxpc2hlZCIsIiNpc1VucHVibGlzaGVkIiwicHJvbWlzZUxvYWQiLCJjdXN0b21XaGVyZSIsImRlZmF1bHRXaGVyZSIsIm9yZGVyQnkiLCJjdXJyZW50TGltaXQiLCJjdXJyZW50T2Zmc2V0Iiwid2hlcmUiLCJvZmZzZXQiLCJpIiwiaXNEZWxldGVkIiwidG9BcnJheSIsImNhbGxiYWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmRpdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwiY29udHJvbHMiLCJmb3JFYWNoIiwiY29uZGl0aW9uIiwiaW5jbHVkZXMiLCJwcm9jZXNzQ29udHJvbCIsImNvdW50IiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwiZmlyc3QiLCJsaXZlIiwibGl2ZVF1ZXJ5IiwiY3VycmVudFBhZ2UiLCJzdWJzY3JpYmUiLCJzYW1lUXVlcnkiLCJjdXJyZW50TWFwIiwiYWRkIiwicmVtb3ZlZCIsImhhcyIsImVyciIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiaW5zdGFuY2VJZCIsInNhdmVBbGwiLCIjcHJvY2Vzc0NvbnRyb2wiLCJjb250cm9sIiwidXBzZXJ0Iiwib3JpZ2luYWxEYXRhIiwidHJhbnNhY3Rpb24iLCJpbnN0YW5jZUlkVG9JZE1hcCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsIml0ZW1zVG9VcGRhdGUiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJ3YXJuIiwiYnVsa1NhdmUiLCJzZW5kQ2h1bmsiLCJjaHVuayIsInN1Y2Nlc3MiLCJzcGxpdERhdGFJbnRvQ2h1bmtzIiwiY2h1bmtzIiwicHVzaCIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsImluZGV4IiwicmVzdWx0IiwiZmFpbGVkIiwiX2NvbGxlY3Rpb24iLCJfaW5kZXgiLCJVc2VyUHJvdmlkZXIiLCJCb29rcyIsIkJvb2siLCJJdGVtIiwiZGVmaW5lUHJvcGVydHkiLCJfc2F2ZSIsImluZm8iLCJpZ25vcmVkRmllbGRzIiwic2tlbGV0b24iLCJ1bmlxdWUiLCJfX2dldCIsImxhbmRlZCIsImlzUmVhZHkiLCJjaGVja1JlYWR5Iiwib2JqZWN0UmVhZHkiLCJwcm9taXNlUmVhZHkiLCJpbml0UHJvbWlzZSIsImNvbmZpZyIsIkxvY2FsUHJvdmlkZXIiLCJJdGVtU2F2ZU1hbmFnZXIiLCJJdGVtTG9hZE1hbmFnZXIiLCJiaW5kIiwib25SZWFkeSIsImhhc093blByb3BlcnR5IiwibmFtZSIsImdldFZhbHVlcyIsInRvSXRlcmF0ZSIsImZpZWxkIiwiZ2V0UHJvcGVydHlOYW1lcyIsInNhbWUiLCJrZXkiLCJvcmlnaW5hbCIsImxvYWRNZXRob2QiLCJpc05ldyIsImZhY3RvcnlSZWdpc3RyeSIsIl9faWQiLCJmbG9vciIsInJhbmRvbSIsImdldFJlZ2lzdHJ5IiwidG9Db21wYXJlIiwic29tZSIsInByb3AiLCJoYXNJdGVtIiwiY3JlYXRlIiwibGlzdGVuUmVnaXN0cnkiLCJwcm9taXNlIiwidGhlbiIsIiNsaXN0ZW5SZWdpc3RyeSIsImJhY2tlbmQiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwiZHVwbGljYXRlRmllbGRzIiwiUHJvbWlzZSIsImFsbCIsIiN1cGRhdGUiLCJ1cGRhdGVkIiwic2V0VmFsdWVzIiwicHV0IiwibG9jYWxVcGRhdGUiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJwcm9wcyIsIkl0ZW1Qcm92aWRlciIsInN0b3JlcyIsImJhdGNoZXMiLCJkYk5hbWUiLCJSZWdpc3RyeSIsInJlZ2lzdHJpZXMiLCJlbGVtZW50cyIsImRlbGV0ZWQiLCJwcm9taXNlcyIsImJhdGNoIiwic3BsaWNlIiwicmVzdWx0cyIsImFsbFNldHRsZWQiLCJtYXBwZWRGbiIsImdldFN0b3JlIiwiI2dldFN0b3JlIiwiZGJzIiwiX3V1aWQiLCJrZXlJZCIsInY0IiwibmV3VmFsdWVzIiwiaXNEZWxlbGV0ZWQiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiXSwic291cmNlcyI6WyIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2xvYWQudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci50cyIsIi9jb2xsZWN0aW9uL3B1Ymxpc2gudHMiLCIvZXhhbXBsZS9jb2xsZWN0aW9uLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxjQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFvQk87VUFBVyxNQUFPSSxVQUFXLFNBQVFMLE1BQUEsQ0FBQU0sYUFBeUI7WUFDcEUsQ0FBQUMsS0FBTSxHQUEyQixFQUFFO1lBQ3pCQyxPQUFPLEdBQUcsSUFBSTtZQUN4QixJQUFJRCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLElBQUlFLFFBQVFBLENBQUE7Y0FDWCxPQUFPLENBQUMsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxDQUFDRCxRQUFRO1lBQ2hFO1lBQ0EsSUFBSUYsS0FBS0EsQ0FBQ0ksS0FBNkI7Y0FDdEMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCOztjQUdELElBQUksQ0FBQyxDQUFBSixLQUFNLEdBQUdJLEtBQUs7Y0FDbkIsSUFBSSxDQUFDRyxZQUFZLEVBQUU7WUFDcEI7WUFFQUMsUUFBUSxHQUFRLEVBQUU7WUFDbEI7OztZQUdBQyxLQUFLLEdBQVcsQ0FBQztZQUVqQkMsSUFBSTtZQUVKLENBQUFQLGFBQWM7WUFDZCxJQUFJQSxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGFBQWM7WUFDM0I7WUFFQSxDQUFB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