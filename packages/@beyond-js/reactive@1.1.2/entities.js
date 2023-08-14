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
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.2"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 3609256912,
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
        hash: 2138049468,
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
        hash: 1936860557,
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
        hash: 3251238855,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiQ29sbGVjdGlvbiIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsImxvY2FsZGIiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInRyaWdnZXJFdmVudCIsImNvdW50ZXJzIiwidG90YWwiLCJuZXh0Iiwic2F2ZU1hbmFnZXIiLCJsb2FkTWFuYWdlciIsInByb3ZpZGVyIiwic29ydEJ5Iiwic29ydERpcmVjdGlvbiIsImNvbnN0cnVjdG9yIiwic3BlY3MiLCJzdG9yZU5hbWUiLCJkYiIsIml0ZW0iLCJFcnJvciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwiZ2V0Iiwic2V0IiwiQ29sbGVjdGlvbkxvY2FsUHJvdmlkZXIiLCJvbiIsImxpc3Rlbkl0ZW1zIiwiQ29sbGVjdGlvblNhdmVNYW5hZ2VyIiwiQ29sbGVjdGlvbkxvYWRNYW5hZ2VyIiwiI2xpc3Rlbkl0ZW1zIiwicHJvY2Vzc0VudHJpZXMiLCJ0cmlnZ2VyIiwic2V0T2ZmbGluZSIsInNldEl0ZW1zIiwidmFsdWVzIiwic3RvcmUiLCJkZWxldGUiLCJpZHMiLCJzb2Z0RGVsZXRlIiwiZGVsZXRlSXRlbXMiLCJlIiwiY29uc29sZSIsImVycm9yIiwibG9hZCIsImFyZ3MiLCJmaWx0ZXIiLCJzYXZlIiwic3luYyIsInB1Ymxpc2giLCJ0b1N5bmMiLCJleHBvcnRzIiwiX2ZhY3RvcnkiLCJwYXJlbnRCcmlkZ2UiLCJwYXJlbnQiLCJyZWdpc3RyeSIsInJlbW90ZURhdGEiLCJSZWdpc3RyeUZhY3RvcnkiLCJjdXN0b21GaWx0ZXIiLCJsb2NhbExvYWQiLCJwYXJhbXMiLCJsb2NhbERhdGEiLCJkYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbEl0ZW1zIiwic3RhdHVzIiwibGlzdCIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwibG9hZGVkIiwiZXhjIiwibWVzc2FnZSIsImVudHJpZXMiLCJkZWxldGVkRW50cmllcyIsIm1hcCIsInJlY29yZCIsImlkIiwicmVnaXN0ZXJMaXN0IiwicmVtb3RlTG9hZCIsInJlc3BvbnNlIiwiX2RleGllIiwiX2NvcmUiLCJfZGF0YWJhc2UiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwiYWN0aXZlIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwibGlzdEl0ZW1zIiwiTWFwIiwicmVnaXN0cnlGYWN0b3J5IiwiZXhpc3RzIiwiZm91bmQiLCJTZXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJwcm9taXNlSW5pdCIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIkRCTWFuYWdlciIsInJlYWR5IiwiaXNVbnB1Ymxpc2hlZCIsIiNpc1VucHVibGlzaGVkIiwicHJvbWlzZUxvYWQiLCJjdXN0b21XaGVyZSIsImRlZmF1bHRXaGVyZSIsIm9yZGVyQnkiLCJjdXJyZW50TGltaXQiLCJjdXJyZW50T2Zmc2V0Iiwid2hlcmUiLCJvZmZzZXQiLCJpIiwiaXNEZWxldGVkIiwidG9BcnJheSIsImNhbGxiYWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmRpdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwiY29udHJvbHMiLCJmb3JFYWNoIiwiY29uZGl0aW9uIiwiaW5jbHVkZXMiLCJwcm9jZXNzQ29udHJvbCIsImNvdW50IiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwiZmlyc3QiLCJsaXZlIiwibGl2ZVF1ZXJ5IiwiY3VycmVudFBhZ2UiLCJzdWJzY3JpYmUiLCJzYW1lUXVlcnkiLCJjdXJyZW50TWFwIiwiYWRkIiwicmVtb3ZlZCIsImhhcyIsImVyciIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiaW5zdGFuY2VJZCIsInNhdmVBbGwiLCIjcHJvY2Vzc0NvbnRyb2wiLCJjb250cm9sIiwidXBzZXJ0Iiwib3JpZ2luYWxEYXRhIiwidHJhbnNhY3Rpb24iLCJpbnN0YW5jZUlkVG9JZE1hcCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsIml0ZW1zVG9VcGRhdGUiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJ3YXJuIiwiYnVsa1NhdmUiLCJzZW5kQ2h1bmsiLCJjaHVuayIsImluZGV4IiwicmV0cmllcyIsInN1Y2Nlc3MiLCJzcGxpdERhdGFJbnRvQ2h1bmtzIiwiY2h1bmtzIiwicHVzaCIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsInJlc3VsdCIsImZhaWxlZCIsIl9jb2xsZWN0aW9uIiwiX2luZGV4IiwiVXNlclByb3ZpZGVyIiwiQm9va3MiLCJCb29rIiwiSXRlbSIsImRlZmluZVByb3BlcnR5IiwiX3NhdmUiLCJpbmZvIiwiaWdub3JlZEZpZWxkcyIsInNrZWxldG9uIiwidW5pcXVlIiwiX19nZXQiLCJsYW5kZWQiLCJpc1JlYWR5IiwiY2hlY2tSZWFkeSIsIm9iamVjdFJlYWR5IiwicHJvbWlzZVJlYWR5IiwiaW5pdFByb21pc2UiLCJjb25maWciLCJMb2NhbFByb3ZpZGVyIiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwiYmluZCIsIm9uUmVhZHkiLCJoYXNPd25Qcm9wZXJ0eSIsIm5hbWUiLCJnZXRWYWx1ZXMiLCJ0b0l0ZXJhdGUiLCJmaWVsZCIsImdldFByb3BlcnR5TmFtZXMiLCJzYW1lIiwia2V5Iiwib3JpZ2luYWwiLCJsb2FkTWV0aG9kIiwiZmFjdG9yeVJlZ2lzdHJ5IiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwiZ2V0UmVnaXN0cnkiLCJ0b0NvbXBhcmUiLCJzb21lIiwicHJvcCIsImhhc0l0ZW0iLCJjcmVhdGUiLCJsaXN0ZW5SZWdpc3RyeSIsInByb21pc2UiLCJ0aGVuIiwiI2xpc3RlblJlZ2lzdHJ5IiwiYmFja2VuZCIsImR1cGxpY2F0ZWQiLCJ2YWxpZGF0ZVVuaXF1ZUZpZWxkcyIsImZpZWxkcyIsImNoZWNrUHJvbWlzZXMiLCJkdXBsaWNhdGVGaWVsZHMiLCJQcm9taXNlIiwiYWxsIiwiI3VwZGF0ZSIsInVwZGF0ZWQiLCJzZXRWYWx1ZXMiLCJwdXQiLCJsb2NhbFVwZGF0ZSIsIkNvbGxlY3Rpb25Qcm92aWRlciIsInByb3BzIiwiSXRlbVByb3ZpZGVyIiwic3RvcmVzIiwiYmF0Y2hlcyIsImRiTmFtZSIsIlJlZ2lzdHJ5IiwicmVnaXN0cmllcyIsImVsZW1lbnRzIiwiZGVsZXRlZCIsInByb21pc2VzIiwiYmF0Y2giLCJzcGxpY2UiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwiZ2V0U3RvcmUiLCIjZ2V0U3RvcmUiLCJkYnMiLCJfdXVpZCIsInY0IiwibmV3VmFsdWVzIiwiaXNEZWxlbGV0ZWQiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiXSwic291cmNlcyI6WyIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2xvYWQudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci50cyIsIi9jb2xsZWN0aW9uL3B1Ymxpc2gudHMiLCIvZXhhbXBsZS9jb2xsZWN0aW9uLnRzIiwiL2V4YW1wbGUvaW5kZXgudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9jb25maWcudHMiLCIvaXRlbS50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIvcHJvdmlkZXJzL2l0ZW0udHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxjQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFvQk87VUFBVyxNQUFPSSxVQUFXLFNBQVFMLE1BQUEsQ0FBQU0sYUFBeUI7WUFDcEUsQ0FBQUMsS0FBTSxHQUEyQixFQUFFO1lBQ3pCQyxPQUFPLEdBQUcsSUFBSTtZQUN4QixJQUFJRCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLElBQUlFLFFBQVFBLENBQUE7Y0FDWCxPQUFPLENBQUMsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxDQUFDRCxRQUFRO1lBQ2hFO1lBQ0EsSUFBSUYsS0FBS0EsQ0FBQ0ksS0FBZ0M7Y0FDekMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCOztjQUdELElBQUksQ0FBQyxDQUFBSixLQUFNLEdBQUdJLEtBQUs7Y0FDbkIsSUFBSSxDQUFDRyxZQUFZLEVBQUU7WUFDcEI7WUFFQUMsUUFBUSxHQUFRLEVBQUU7WUFDbEI7OztZQUdBQyxLQUFLLEdBQVcsQ0FBQztZQUVqQkMsSUFBSTtZQUVKLENBQUFQLGFBQWM7WUFDZCxJQUFJQSxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGFBQWM7WUFDM0I7WUFFQSxDQUFBUSxXQUFZ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