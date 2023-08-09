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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBRTtjQUNyQ2IsS0FBSyxDQUFDM0csT0FBTyxDQUFDekYsUUFBUSxJQUFHO2dCQUN4QixJQUFJcUMsSUFBSSxDQUFDckMsUUFBUSxDQUFDLEtBQUtpTixTQUFTLENBQUNqTixRQUFRLENBQUMsRUFBRTtnQkFDNUNpTixTQUFTLENBQUNqTixRQUFRLENBQUMsR0FBR3FDLElBQUksQ0FBQ3JDLFFBQVEsQ0FBQztnQkFDcEMrTCxPQUFPLEdBQUcsSUFBSTtjQUNmLENBQUMsQ0FBQztjQUVGa0IsU0FBUyxDQUFDQyxXQUFXLEdBQUcsSUFBSSxDQUFDbEksU0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDO2NBRWpELElBQUksQ0FBQyxPQUFPLEdBQUdpSSxTQUFTO2NBRXhCLElBQUksQ0FBQ2pPLFlBQVksRUFBRTtjQUVuQixPQUFPK00sT0FBTztZQUNmLENBQUM7WUFFRDdCLFNBQVM7Y0FDUixNQUFNckosTUFBTSxHQUFHO2dCQUFFLEdBQUcsSUFBSSxDQUFDO2NBQU8sQ0FBRTtjQUNsQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUVBLE1BQU0sQ0FBQ2lHLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVztjQUMxRDtjQUNBLE9BQU9qRyxNQUFNO1lBQ2Q7O1VBQ0FnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RUQ7VUFHTSxNQUFtQnNMLFlBQWEsU0FBUTNPLG9CQUE0QjtVQUFHcUQ7VUFFN0UsTUFBTXVMLFlBQVksR0FBRyxJQUFJRCxZQUFZLEVBQUUiLCJuYW1lcyI6WyJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsImxvY2FsZGIiLCJpdGVtcyIsImlzT25saW5lIiwibG9jYWxQcm92aWRlciIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwidHJpZ2dlckV2ZW50IiwiY291bnRlcnMiLCJ0b3RhbCIsIm5leHQiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJjb25zdHJ1Y3RvciIsInNwZWNzIiwic3RvcmVOYW1lIiwiZGIiLCJpdGVtIiwiRXJyb3IiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdCIsImdldFByb3BlcnR5IiwicHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImJyaWRnZSIsImdldCIsInNldCIsIkNvbGxlY3Rpb25Mb2NhbFByb3ZpZGVyIiwib24iLCJDb2xsZWN0aW9uU2F2ZU1hbmFnZXIiLCJDb2xsZWN0aW9uTG9hZE1hbmFnZXIiLCJwcm9jZXNzRW50cmllcyIsInRyaWdnZXIiLCJzZXRPZmZsaW5lIiwic2V0SXRlbXMiLCJ2YWx1ZXMiLCJzdG9yZSIsImRlbGV0ZSIsImlkcyIsInNvZnREZWxldGUiLCJkZWxldGVJdGVtcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2FkIiwiYXJncyIsImZpbHRlciIsInNhdmUiLCJzeW5jIiwicHVibGlzaCIsInRvU3luYyIsImV4cG9ydHMiLCJwYXJlbnQiLCJyZW1vdGVEYXRhIiwicGFyZW50QnJpZGdlIiwiUmVnaXN0cnlGYWN0b3J5IiwiY3VzdG9tRmlsdGVyIiwicGFyYW1zIiwibG9jYWxEYXRhIiwiZGF0YSIsIm5ld0l0ZW1zIiwidXBkYXRlIiwiY29uY2F0IiwicHJvcGVydGllcyIsImxvY2FsTG9hZGVkIiwiZmV0Y2hpbmciLCJzdGFydCIsImxpbWl0IiwibG9jYWxJdGVtcyIsInN0YXR1cyIsImxpc3QiLCJwcm9jZXNzUmVtb3RlRW50cmllcyIsImxvYWRlZCIsImV4YyIsIm1lc3NhZ2UiLCJlbnRyaWVzIiwiZGVsZXRlZEVudHJpZXMiLCJtYXAiLCJyZWNvcmQiLCJpZCIsInJlZ2lzdGVyTGlzdCIsInJlbW90ZUxvYWQiLCJyZXNwb25zZSIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJhY3RpdmUiLCJNYXAiLCJTZXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJkYXRhYmFzZSIsIkRCTWFuYWdlciIsInJlYWR5Iiwib3JkZXJCeSIsIndoZXJlIiwib2Zmc2V0IiwiaSIsImlzRGVsZXRlZCIsInRvQXJyYXkiLCJjYWxsYmFjayIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25kaXRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImNvbnRyb2xzIiwiZm9yRWFjaCIsImNvbmRpdGlvbiIsImluY2x1ZGVzIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJmaXJzdCIsImxpdmUiLCJjdXJyZW50UGFnZSIsInN1YnNjcmliZSIsInNhbWVRdWVyeSIsImN1cnJlbnRNYXAiLCJhZGQiLCJyZW1vdmVkIiwiaGFzIiwiZXJyIiwicHJvY2VzcyIsIm9mZmxpbmUiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiaW5zdGFuY2VJZCIsInNhdmVBbGwiLCJjb250cm9sIiwidXBzZXJ0Iiwib3JpZ2luYWxEYXRhIiwidHJhbnNhY3Rpb24iLCJpbnN0YW5jZUlkVG9JZE1hcCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsIml0ZW1zVG9VcGRhdGUiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJ3YXJuIiwiYnVsa1NhdmUiLCJzZW5kQ2h1bmsiLCJjaHVuayIsImluZGV4IiwicmV0cmllcyIsInN1Y2Nlc3MiLCJzcGxpdERhdGFJbnRvQ2h1bmtzIiwiY2h1bmtzIiwicHVzaCIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsInJlc3VsdCIsImZhaWxlZCIsIlVzZXJQcm92aWRlciIsIkJvb2tzIiwiQm9vayIsIkl0ZW0iLCJ1bmlxdWUiLCJpc1VucHVibGlzaGVkIiwic2tlbGV0b24iLCJfX2dldCIsImxhbmRlZCIsImlzUmVhZHkiLCJjaGVja1JlYWR5IiwiY29uZmlnIiwiTG9jYWxQcm92aWRlciIsIkl0ZW1TYXZlTWFuYWdlciIsIkl0ZW1Mb2FkTWFuYWdlciIsImJpbmQiLCJvYmplY3RSZWFkeSIsIm9uUmVhZHkiLCJoYXNPd25Qcm9wZXJ0eSIsIm5hbWUiLCJnZXRWYWx1ZXMiLCJ0b0l0ZXJhdGUiLCJmaWVsZCIsImdldFByb3BlcnR5TmFtZXMiLCJmb3VuZCIsInNhbWUiLCJrZXkiLCJvcmlnaW5hbCIsInJlZ2lzdHJ5IiwibG9hZE1ldGhvZCIsIl9faWQiLCJmbG9vciIsInJhbmRvbSIsInRvQ29tcGFyZSIsInNvbWUiLCJwcm9wIiwiaGFzSXRlbSIsImdldFJlZ2lzdHJ5IiwiY3JlYXRlIiwicHJvbWlzZSIsInRoZW4iLCJiYWNrZW5kIiwiZHVwbGljYXRlZCIsInZhbGlkYXRlVW5pcXVlRmllbGRzIiwiZmllbGRzIiwiY2hlY2tQcm9taXNlcyIsImR1cGxpY2F0ZUZpZWxkcyIsIlByb21pc2UiLCJhbGwiLCJ1cGRhdGVkIiwic2V0VmFsdWVzIiwicHV0IiwibG9jYWxVcGRhdGUiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJwcm9wcyIsIkl0ZW1Qcm92aWRlciIsImRiTmFtZSIsIlJlZ2lzdHJ5IiwicmVnaXN0cmllcyIsImVsZW1lbnRzIiwiZGVsZXRlZCIsInByb21pc2VzIiwiYmF0Y2giLCJzcGxpY2UiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwibmV3VmFsdWVzIiwiaXNEZWxlbGV0ZWQiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24vaW5kZXgudHMiLCJjb2xsZWN0aW9uL2xvYWQudHMiLCJjb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyLnRzIiwiY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiZXhhbXBsZS9jb2xsZWN0aW9uLnRzIiwiZXhhbXBsZS9pbmRleC50cyIsImludGVyZmFjZXMvcHJvdmlkZXIudHMiLCJpdGVtL2luZGV4LnRzIiwiaXRlbS9pbnRlcmZhY2VzL2NvbmZpZy50cyIsIml0ZW0vaW50ZXJmYWNlcy9pdGVtLnRzIiwiaXRlbS9sb2FkLnRzIiwiaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIml0ZW0vc2F2ZS50cyIsInByb3ZpZGVycy9jb2xsZWN0aW9uLnRzIiwicHJvdmlkZXJzL2l0ZW0udHMiLCJyZWdpc3RyeS9mYWN0b3J5LnRzIiwicmVnaXN0cnkvaW5kZXgudHMiLCJyZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=