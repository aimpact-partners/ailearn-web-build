System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.2/model", "@beyond-js/kernel@0.1.9/core", "dexie@3.2.4", "@beyond-js/reactive@1.1.2/database", "uuid@9.0.0"], function (_export, _context) {
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
    }, function (_beyondJsReactive112Model) {
      dependency_1 = _beyondJsReactive112Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_dexie2) {
      dependency_3 = _dexie2;
    }, function (_beyondJsReactive112Database) {
      dependency_4 = _beyondJsReactive112Database;
    }, function (_uuid2) {
      dependency_5 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/reactive", "1.1.2"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.2/entities"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['dexie', dependency_3], ['@beyond-js/reactive/database', dependency_4], ['uuid', dependency_5]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./collection/index
      **********************************/
      ims.set('./collection/index', {
        hash: 4152035006,
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
          }
          exports.Collection = Collection;
        }
      });

      /*********************************
      INTERNAL MODULE: ./collection/load
      *********************************/

      ims.set('./collection/load', {
        hash: 1160765705,
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
            #getProperty;
            #parentBridge;
            #localdb;
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
              this.#localdb = this.#parentBridge.get('localdb');
              this.#localProvider = this.#parentBridge.get('localProvider');
              this.#provider = this.#parentBridge.get('provider');
              this.#parent.load = this.load;
              this.#parent.filter = this.filter;
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
                } = this.#parent;
                if (this.#localProvider) {
                  const localItems = await this.#localLoad(params);
                  if (!isOnline || !this.#provider) {
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
        hash: 3475984694,
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
        hash: 2723222721,
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
              this.#parent.save = this.save;
              this.#parent.sync = this.sync;
              this.#parent.publish = this.publish;
              this.#parent.toSync = this.toSync;
              this.#localdb = this.#bridge.get('localdb');
              if (this.#localdb) {
                this.#localProvider = this.#bridge.get('localProvider');
              } else {
                console.warn('la colleccion no usa indexeddb');
              }
              this.#provider = this.#bridge.get('#provider');
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
            sendChunk = async (chunk, index, retries = 0) => {
              const response = await this.#provider.bulkSave(chunk);
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
              if (retries < this.MAX_RETRIES) {
                return await this.sendChunk(chunk, retries + 1);
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
              try {
                await this.#localProvider.init();
                if (!data) data = await this.#parent.localProvider.store.where('offline').equals(1).toArray();
                const chunks = this.splitDataIntoChunks(data);
                const failedChunks = [];
                const successChunks = [];
                for (const [index, chunk] of chunks.entries()) {
                  const result = await this.sendChunk(chunk, index);
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
              } catch (e) {
                throw Error(e.message);
              }
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
        hash: 2338368391,
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
                  throw new Error('Provider must be an object');
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
        hash: 445497694,
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
                const localdb = await this.#getProperty('localdb');
                if (!params && this.#parent.id) {
                  params = {
                    id: this.#parent.id
                  };
                }
                if (localdb && this.#localProvider) {
                  const localData = await this.#localProvider.load(params);
                  if (localData?.status) this.#parent.set(localData.data, true);
                }
                if (this.#localProvider && !this.#localProvider.isOnline) return {
                  status: true
                };
                if (!this.#provider) return;
                const remoteData = await this.remoteLoad(params);
                if (!remoteData) {
                  this.#parent.found = false;
                } else if (remoteData) {
                  let same = true;
                  Object.keys(remoteData).forEach(key => {
                    let original = this.#localProvider.registry.values;
                    if (original[key] !== remoteData[key]) same = false;
                  });
                  if (!same) await this.#localProvider.save(remoteData);
                  this.#parent.found = true;
                }
                return {
                  status: true,
                  data: remoteData
                };
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
        hash: 4135605562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LocalProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _database = require("@beyond-js/reactive/database");
          var _factory = require("../registry/factory");
          /*bundle*/
          class LocalProvider extends _model.ReactiveModel {
            #isOnline = globalThis.navigator.onLine;
            #store;
            get store() {
              return this.#store;
            }
            #offline;
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
                return;
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
        hash: 3701131916,
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
              this.#parent.sync = this.sync;
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
        hash: 1361262589,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDLEVBQUU7Z0JBQzVDZ04sU0FBUyxDQUFDaE4sUUFBUSxDQUFDLEdBQUdnQyxJQUFJLENBQUNoQyxRQUFRLENBQUM7Z0JBQ3BDOEwsT0FBTyxHQUFHLElBQUk7Y0FDZixDQUFDLENBQUM7Y0FFRmtCLFNBQVMsQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ3JJLFNBQVMsS0FBSyxDQUFDLElBQUksQ0FBQztjQUVqRCxJQUFJLENBQUMsT0FBTyxHQUFHb0ksU0FBUztjQUV4QixJQUFJLENBQUNoTyxZQUFZLEVBQUU7Y0FFbkIsT0FBTzhNLE9BQU87WUFDZixDQUFDO1lBRUQ3QixTQUFTO2NBQ1IsTUFBTXBKLE1BQU0sR0FBRztnQkFBRSxHQUFHLElBQUksQ0FBQztjQUFPLENBQUU7Y0FDbEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFQSxNQUFNLENBQUM2RixVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVc7Y0FDMUQ7Y0FDQSxPQUFPN0YsTUFBTTtZQUNkOztVQUNBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RUQ7VUFHTSxNQUFtQjRMLFlBQWEsU0FBUTFPLG9CQUE0QjtVQUFHOEM7VUFFN0UsTUFBTTZMLFlBQVksR0FBRyxJQUFJRCxZQUFZLEVBQUUiLCJuYW1lcyI6WyJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsImxvY2FsZGIiLCJpdGVtcyIsImlzT25saW5lIiwibG9jYWxQcm92aWRlciIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwidHJpZ2dlckV2ZW50IiwiY291bnRlcnMiLCJ0b3RhbCIsIm5leHQiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJjb25zdHJ1Y3RvciIsInNwZWNzIiwic3RvcmVOYW1lIiwiZGIiLCJpdGVtIiwiRXJyb3IiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdCIsImdldFByb3BlcnR5IiwicHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImJyaWRnZSIsImdldCIsInNldCIsIkNvbGxlY3Rpb25Mb2NhbFByb3ZpZGVyIiwib24iLCJDb2xsZWN0aW9uU2F2ZU1hbmFnZXIiLCJDb2xsZWN0aW9uTG9hZE1hbmFnZXIiLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJ2YWx1ZXMiLCJzdG9yZSIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJleHBvcnRzIiwiZmlsdGVyIiwicGFyZW50IiwicmVtb3RlRGF0YSIsInBhcmVudEJyaWRnZSIsImxvYWQiLCJSZWdpc3RyeUZhY3RvcnkiLCJjdXN0b21GaWx0ZXIiLCJwYXJhbXMiLCJsb2NhbERhdGEiLCJkYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbEl0ZW1zIiwic3RhdHVzIiwibGlzdCIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwibG9hZGVkIiwiZXhjIiwibWVzc2FnZSIsImVudHJpZXMiLCJkZWxldGVkRW50cmllcyIsInNhdmUiLCJtYXAiLCJyZWNvcmQiLCJpZCIsInJlZ2lzdGVyTGlzdCIsInJlbW90ZUxvYWQiLCJyZXNwb25zZSIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJhY3RpdmUiLCJNYXAiLCJTZXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJkYXRhYmFzZSIsIkRCTWFuYWdlciIsInJlYWR5Iiwib3JkZXJCeSIsIndoZXJlIiwib2Zmc2V0IiwiaSIsImlzRGVsZXRlZCIsInRvQXJyYXkiLCJjYWxsYmFjayIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25kaXRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImNvbnRyb2xzIiwiZm9yRWFjaCIsImNvbmRpdGlvbiIsImluY2x1ZGVzIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJmaXJzdCIsImxpdmUiLCJjdXJyZW50UGFnZSIsInN1YnNjcmliZSIsInNhbWVRdWVyeSIsImN1cnJlbnRNYXAiLCJhZGQiLCJyZW1vdmVkIiwiaGFzIiwiZXJyIiwicHJvY2VzcyIsIm9mZmxpbmUiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiaW5zdGFuY2VJZCIsInNhdmVBbGwiLCJjb250cm9sIiwidXBzZXJ0Iiwib3JpZ2luYWxEYXRhIiwidHJhbnNhY3Rpb24iLCJpbnN0YW5jZUlkVG9JZE1hcCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsIml0ZW1zVG9VcGRhdGUiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJzeW5jIiwicHVibGlzaCIsInRvU3luYyIsIndhcm4iLCJidWxrU2F2ZSIsInNlbmRDaHVuayIsImNodW5rIiwiaW5kZXgiLCJyZXRyaWVzIiwic3VjY2VzcyIsInNwbGl0RGF0YUludG9DaHVua3MiLCJjaHVua3MiLCJwdXNoIiwic2xpY2UiLCJlcXVhbHMiLCJmYWlsZWRDaHVua3MiLCJzdWNjZXNzQ2h1bmtzIiwicmVzdWx0IiwiZmFpbGVkIiwiVXNlclByb3ZpZGVyIiwiQm9va3MiLCJCb29rIiwiSXRlbSIsInVuaXF1ZSIsImlzVW5wdWJsaXNoZWQiLCJza2VsZXRvbiIsIl9fZ2V0IiwibGFuZGVkIiwiaXNSZWFkeSIsImNoZWNrUmVhZHkiLCJjb25maWciLCJMb2NhbFByb3ZpZGVyIiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwiYmluZCIsIm9iamVjdFJlYWR5Iiwib25SZWFkeSIsImhhc093blByb3BlcnR5IiwibmFtZSIsImdldFZhbHVlcyIsInRvSXRlcmF0ZSIsImZpZWxkIiwiZ2V0UHJvcGVydHlOYW1lcyIsImZvdW5kIiwic2FtZSIsImtleSIsIm9yaWdpbmFsIiwicmVnaXN0cnkiLCJsb2FkTWV0aG9kIiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwidG9Db21wYXJlIiwic29tZSIsInByb3AiLCJoYXNJdGVtIiwiZ2V0UmVnaXN0cnkiLCJjcmVhdGUiLCJwcm9taXNlIiwidGhlbiIsImJhY2tlbmQiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwiZHVwbGljYXRlRmllbGRzIiwiUHJvbWlzZSIsImFsbCIsInVwZGF0ZWQiLCJzZXRWYWx1ZXMiLCJwdXQiLCJsb2NhbFVwZGF0ZSIsIkNvbGxlY3Rpb25Qcm92aWRlciIsInByb3BzIiwiSXRlbVByb3ZpZGVyIiwiZGJOYW1lIiwiUmVnaXN0cnkiLCJyZWdpc3RyaWVzIiwiZWxlbWVudHMiLCJkZWxldGVkIiwicHJvbWlzZXMiLCJiYXRjaCIsInNwbGljZSIsInJlc3VsdHMiLCJhbGxTZXR0bGVkIiwibWFwcGVkRm4iLCJuZXdWYWx1ZXMiLCJpc0RlbGVsZXRlZCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29sbGVjdGlvbi9pbmRleC50cyIsImNvbGxlY3Rpb24vbG9hZC50cyIsImNvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIudHMiLCJjb2xsZWN0aW9uL3B1Ymxpc2gudHMiLCJleGFtcGxlL2NvbGxlY3Rpb24udHMiLCJleGFtcGxlL2luZGV4LnRzIiwiaW50ZXJmYWNlcy9wcm92aWRlci50cyIsIml0ZW0vaW5kZXgudHMiLCJpdGVtL2ludGVyZmFjZXMvY29uZmlnLnRzIiwiaXRlbS9pbnRlcmZhY2VzL2l0ZW0udHMiLCJpdGVtL2xvYWQudHMiLCJpdGVtL2xvY2FsLXByb3ZpZGVyLnRzIiwiaXRlbS9zYXZlLnRzIiwicHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCJwcm92aWRlcnMvaXRlbS50cyIsInJlZ2lzdHJ5L2ZhY3RvcnkudHMiLCJyZWdpc3RyeS9pbmRleC50cyIsInJlZ2lzdHJ5L3N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==