System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@1.2.0-beta.01/model", "uuid@10.0.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Item, RegistryFactory, IItem, ItemId, IItemProps, IEntityProvider, IRecordProps, __beyond_pkg, hmr;
  _export({
    Item: void 0,
    RegistryFactory: void 0,
    IItem: void 0,
    ItemId: void 0,
    IItemProps: void 0,
    IEntityProvider: void 0,
    IRecordProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive120Beta01Model) {
      dependency_1 = _beyondJsReactive120Beta01Model;
    }, function (_uuid2) {
      dependency_2 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["uuid", "11.1.0"], ["zod", "3.24.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/local", "0.1.3"], ["react", "18.3.1"], ["@beyond-js/reactive", "1.2.0-beta.01"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.2.0-beta.01/entities/item"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['uuid', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3233256163,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _factory = require("./registry/factory");
          /*bundle*/
          class Item extends _model.ReactiveModel {
            #factory;
            #entity;
            get entity() {
              return this.#entity;
            }
            #registry;
            get __registryState() {
              return this.#registry.state;
            }
            #fetched;
            get fetched() {
              return this.#fetched;
            }
            #found = false;
            get found() {
              return this.#found;
            }
            _provider;
            get provider() {
              return this._provider;
            }
            get registry() {
              return this.#registry;
            }
            get __instanceId() {
              return this.#registry.instanceId;
            }
            #draft;
            get draft() {
              return this.#draft;
            }
            constructor({
              entity,
              provider,
              properties,
              ...args
            } = {}) {
              super({
                ...args,
                properties
              });
              // if (this.constructor.name === 'Assignment')
              if (!entity) throw new Error('Entity is required');
              if (provider && typeof provider !== 'function') {
                throw new Error(`Provider must be a class/constructor in object ${entity}`);
              }
              this.reactiveProps(['deleted']);
              this.#entity = entity;
              this.onSet = this.onSet.bind(this);
              /**
               * This event is triggered when the set method is executed.
               */
              this.on('set.executed', this.onSet);
              if (provider) {
                this._provider = new provider(this);
              }
              this.#factory = _factory.RegistryFactory.getInstance(entity);
              this.initialize(args);
            }
            /**
             *
             * @param param0
             */
            initialize({
              ...args
            }) {
              const registry = this.#factory.getItem(this.getProperty('id'), args);
              this.#registry = registry;
              const propertyValues = this.#registry.getValues();
              this.setInitialValues(propertyValues);
              // this.#registry.on('change', this.registryListener.bind(this));
              this.properties.forEach(property => {
                // TODO: capability to support object type properties.
                if (typeof property === 'string') {
                  this.on(`${property}.changed`, () => {
                    this.#registry.setValues({
                      [property]: this.getProperty(property)
                    });
                  });
                }
              });
            }
            set(values) {
              const response = super.set(values);
              return response;
            }
            onSet() {
              this.#registry?.setValues(this.getProperties());
            }
            _load(args) {}
            // Define optional methods with a default implementation that gives a warning message
            async load(args) {
              if (!this.provider || typeof this.provider.load !== 'function') {
                throw new Error(`DataProvider is not defined or does not implement the load() method in object ${this.constructor.name}`);
              }
              try {
                const response = await this.provider.load(args);
                const data = response;
                if (!data) {
                  this.#found = false;
                  throw new Error('Provider.load() did not return an item.');
                }
                this.#found = true;
                this.#fetched = true;
                this.set(data);
                this.triggerEvent('load', {
                  ...this.getProperties()
                });
                this.trigger('change');
                return response;
              } catch (e) {
                this.#found = false;
                throw e;
              }
            }
            async publish(data) {
              data = data ? data : this.getProperties();
              this.set({
                ...this.getProperties(),
                ...data
              });
              this.#registry.setValues(this.getProperties, true);
              super.saveChanges();
              if (this.provider && typeof this.provider.publish === 'function') {
                const updated = await this.provider.publish(data);
                if (!updated.status) {
                  throw new Error('Error saving item');
                }
                this.set(updated.data);
                return updated.data;
              }
              return this.getProperties();
            }
            async delete(id) {
              try {
                id = id ?? this.getProperty('id');
                if (!this.provider || typeof this.provider.delete !== 'function') {
                  throw new Error('DataProvider is not defined or does not implement the delete() method.');
                }
                this.processing = true;
                this.#registry.deleted = true;
                return this.provider.delete(id);
                return true;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.Item = Item;
        }
      });

      /**********************************
      INTERNAL MODULE: ./registry/factory
      **********************************/

      ims.set('./registry/factory', {
        hash: 1573760370,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RegistryFactory = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _ = require("./");
          /*bundle */ /**
                       * Factory for managing multiple registry instances.
                       */
          class RegistryFactory extends _model.ReactiveModel {
            static #instances = new Map();
            items = new Map();
            #name;
            constructor(name, properties) {
              super({
                properties
              });
              this.#name = name;
              this.ready = true;
            }
            getItem(id, data) {
              if (!id || !this.items.has(id)) {
                const specs = data ? {
                  id,
                  ...data
                } : {
                  id,
                  properties: this.properties,
                  ...data
                };
                const registry = new _.Registry(this.#name, specs);
                registry.on('record.published', registry => {
                  this.trigger('record.published', registry);
                });
                registry.on('record.updated', registry => this.trigger('update.registry', registry));
                registry.on('record.deleted', registry => this.trigger('record.deleted', registry));
                id = registry.id;
                this.items.set(id, registry);
              }
              const item = this.items.get(id);
              if (data) {
                let specs = data;
                if (!data.id) {
                  delete specs.id;
                }
                item.setValues(data);
              }
              return item;
            }
            static getInstance(entity, data) {
              if (!this.#instances.has(entity)) {
                this.#instances.set(entity, new RegistryFactory(entity, data));
              }
              return this.#instances.get(entity);
            }
          }
          exports.RegistryFactory = RegistryFactory;
        }
      });

      /********************************
      INTERNAL MODULE: ./registry/index
      ********************************/

      ims.set('./registry/index', {
        hash: 239683578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Registry = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _uuid = require("uuid");
          class Registry extends _model.ReactiveModel {
            #id;
            #instanceId;
            #isDeleted = false;
            #draft = false;
            #state = 'draft';
            get state() {
              return this.#state;
            }
            get draft() {
              return this.#draft;
            }
            set draft(value) {
              if (value === this.#draft) return;
              this.#draft = value;
              this.triggerEvent();
            }
            get id() {
              return this.#id || this.#values.id;
            }
            get instanceId() {
              return this.#instanceId;
            }
            #values;
            get values() {
              return this.#values;
            }
            get deleted() {
              return this.#isDeleted;
            }
            set deleted(value) {
              if (value === this.#isDeleted) return;
              this.#isDeleted = value;
              this.trigger('record.deleted', this.#values);
              this.triggerEvent();
            }
            #entity;
            constructor(entity, {
              properties,
              ...data
            } = {
              id: undefined,
              properties: [],
              instanceId: undefined
            }) {
              super({
                properties: properties || []
              });
              this.#entity = entity;
              const {
                id
              } = data;
              this.#instanceId = data?.instanceId ? data.instanceId : (0, _uuid.v4)();
              this.#id = id;
              this.#draft = !id;
              this.#values = {
                ...data,
                id: this.#id
              };
              this.#state = this.#id ? 'published' : 'draft';
              this.setValues(this.#values);
            }
            updateValue(key, value) {
              this.#values[key] = value;
            }
            setValues(data, published = false) {
              if (!data) return false;
              const baseState = this.#state;
              if (published) this.#state = 'published';
              let updated = false;
              for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                  const property = key;
                  const value = data[property];
                  if (value === this.#values[property]) continue;
                  this.updateValue(property, value);
                  updated = true;
                }
              }
              if (baseState !== this.#state && this.#state === 'published') {
                this.trigger('record.published', {
                  ...this.#values
                });
                return updated;
              }
              if (!updated) return updated;
              this.trigger('change', {
                values: this.#values
              });
              this.trigger('record.updated', {
                ...this.#values
              });
              return updated;
            }
            getValues() {
              return {
                ...this.#values
              };
            }
          }
          exports.Registry = Registry;
        }
      });

      /**************************************
      INTERNAL MODULE: ./registry/types/index
      **************************************/

      ims.set('./registry/types/index', {
        hash: 1952711566,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3082226331,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Item",
        "name": "Item"
      }, {
        "im": "./registry/factory",
        "from": "RegistryFactory",
        "name": "RegistryFactory"
      }, {
        "im": "./types",
        "from": "IItem",
        "name": "IItem"
      }, {
        "im": "./types",
        "from": "ItemId",
        "name": "ItemId"
      }, {
        "im": "./types",
        "from": "IItemProps",
        "name": "IItemProps"
      }, {
        "im": "./types",
        "from": "IEntityProvider",
        "name": "IEntityProvider"
      }, {
        "im": "./types",
        "from": "IRecordProps",
        "name": "IRecordProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Item') && _export("Item", Item = require ? require('./index').Item : value);
        (require || prop === 'RegistryFactory') && _export("RegistryFactory", RegistryFactory = require ? require('./registry/factory').RegistryFactory : value);
        (require || prop === 'IItem') && _export("IItem", IItem = require ? require('./types').IItem : value);
        (require || prop === 'ItemId') && _export("ItemId", ItemId = require ? require('./types').ItemId : value);
        (require || prop === 'IItemProps') && _export("IItemProps", IItemProps = require ? require('./types').IItemProps : value);
        (require || prop === 'IEntityProvider') && _export("IEntityProvider", IEntityProvider = require ? require('./types').IEntityProvider : value);
        (require || prop === 'IRecordProps') && _export("IRecordProps", IRecordProps = require ? require('./types').IRecordProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZhY3RvcnkiLCJJdGVtIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsIl9fcmVnaXN0cnlTdGF0ZSIsInN0YXRlIiwiZmV0Y2hlZCIsImZvdW5kIiwiX3Byb3ZpZGVyIiwicHJvdmlkZXIiLCJfX2luc3RhbmNlSWQiLCJpbnN0YW5jZUlkIiwiZHJhZnQiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhcmdzIiwiRXJyb3IiLCJyZWFjdGl2ZVByb3BzIiwib25TZXQiLCJiaW5kIiwib24iLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsImluaXRpYWxpemUiLCJnZXRJdGVtIiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eVZhbHVlcyIsImdldFZhbHVlcyIsInNldEluaXRpYWxWYWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJzZXRWYWx1ZXMiLCJzZXQiLCJ2YWx1ZXMiLCJyZXNwb25zZSIsImdldFByb3BlcnRpZXMiLCJfbG9hZCIsImxvYWQiLCJuYW1lIiwiZGF0YSIsInRyaWdnZXJFdmVudCIsInRyaWdnZXIiLCJlIiwicHVibGlzaCIsInNhdmVDaGFuZ2VzIiwidXBkYXRlZCIsInN0YXR1cyIsImRlbGV0ZSIsImlkIiwicHJvY2Vzc2luZyIsImRlbGV0ZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJleHBvcnRzIiwiXyIsImluc3RhbmNlcyIsIk1hcCIsIml0ZW1zIiwicmVhZHkiLCJoYXMiLCJzcGVjcyIsIlJlZ2lzdHJ5IiwiaXRlbSIsImdldCIsIl91dWlkIiwiaXNEZWxldGVkIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJ2NCIsInVwZGF0ZVZhbHVlIiwia2V5IiwicHVibGlzaGVkIiwiYmFzZVN0YXRlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFHTztVQUFVLE1BQU9FLElBQW1FLFNBQVFILE1BQUEsQ0FBQUksYUFBZ0I7WUFDbEgsQ0FBQUMsT0FBUTtZQUVSLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFDLFFBQVM7WUFFVCxJQUFJQyxlQUFlQSxDQUFBO2NBQ2xCLE9BQU8sSUFBSSxDQUFDLENBQUFELFFBQVMsQ0FBQ0UsS0FBSztZQUM1QjtZQUNBLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLENBQUFDLEtBQU0sR0FBWSxLQUFLO1lBQ3ZCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ1VDLFNBQVM7WUFFbkIsSUFBSUMsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3RCO1lBQ0EsSUFBSUwsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxJQUFJTyxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQVAsUUFBUyxDQUFDUSxVQUFVO1lBQ2pDO1lBQ0EsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBR0FDLFlBQVk7Y0FBRVgsTUFBTTtjQUFFTyxRQUFRO2NBQUVL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