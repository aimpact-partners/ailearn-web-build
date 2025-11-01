System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.2/model", "uuid@11.1.0"], function (_export, _context) {
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
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive212Model) {
      dependency_1 = _beyondJsReactive212Model;
    }, function (_uuid2) {
      dependency_2 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["uuid", "11.1.0"], ["zod", "3.24.2"], ["react", "18.3.1"], ["@beyond-js/reactive", "2.1.2"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@2.1.2/entities/item"
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
        hash: 3410933101,
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
              this.fetching = true;
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
                this.setInitialValues(data);
                this.trigger('load', {
                  ...this.getProperties()
                });
                this.trigger('change');
                return response;
              } catch (e) {
                this.#found = false;
                this.#fetched = false;
                throw e;
              } finally {
                this.fetching = false;
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
            async delete(options) {
              try {
                const id = this.getProperty('id');
                this.#registry.deleted = true;
                this.trigger('change');
                if (!this.provider) return true;
                if (!options?.skipProvider && this.provider && typeof this.provider.delete === 'function') {
                  this.processing = true;
                  await this.provider.delete(id);
                }
                return true;
              } catch (e) {
                console.error(e);
                return false;
              } finally {
                this.processing = false;
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
        hash: 1412870569,
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
                /**
                 * If the register property is true, the registry is published and the event is triggered
                 * This is used to register the registry in the collection
                 */
                if (data.register) this.trigger('record.published', registry.getValues());
                registry.on('record.updated', registry => this.trigger('update.registry', registry));
                registry.on('record.deleted', registry => this.trigger('record.deleted', registry));
                id = registry.id;
                this.items.set(id, registry);
              }
              const item = this.items.get(id);
              // if (data) {
              // 	let specs = data;
              // 	if (!data.id) {
              // 		delete specs.id;
              // 	}
              // 	item.setValues(data);
              // }
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
        hash: 1251785185,
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
            #state = "draft";
            get state() {
              return this.#state;
            }
            get draft() {
              return this.#draft;
            }
            set draft(value) {
              if (value === this.#draft) return;
              this.#draft = value;
              this.trigger("change");
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
              this.trigger("record.deleted", this.#values);
              this.trigger("change");
            }
            #entity;
            constructor(entity, {
              properties,
              parent,
              register,
              ...data
            } = {}) {
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
              // Loop through data and ignore reactive objects
              this.#values = Object.entries(data).reduce((acc, [key, value]) => {
                if (typeof value === "object" && value?.isReactive) {
                  return acc;
                }
                acc[key] = value;
                return acc;
              }, {
                id: this.#id
              });
              this.#state = this.#id ? "published" : "draft";
              this.setValues(this.#values);
            }
            setValues(data, publish = false) {
              if (!data || Object.keys(data).length === 0) return false;
              const baseState = this.#state;
              let updated = false;
              for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                  const value = data[key];
                  if (value === this.#values[key]) continue;
                  this.#values[key] = value;
                  updated = true;
                }
              }
              if (!updated) return false;
              this.trigger("change", {
                values: this.#values
              });
              this.trigger("record.updated", {
                ...this.#values
              });
              // Solo dispara record.published si está en draft y publish = true
              if (publish && baseState === "draft") {
                this.#state = "published";
                this.trigger("record.published", {
                  ...this.#values
                });
              }
              return true;
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
        hash: 3056830740,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZhY3RvcnkiLCJJdGVtIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsIl9fcmVnaXN0cnlTdGF0ZSIsInN0YXRlIiwiZmV0Y2hlZCIsImZvdW5kIiwiX3Byb3ZpZGVyIiwicHJvdmlkZXIiLCJfX2luc3RhbmNlSWQiLCJpbnN0YW5jZUlkIiwiZHJhZnQiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhcmdzIiwiRXJyb3IiLCJyZWFjdGl2ZVByb3BzIiwib25TZXQiLCJiaW5kIiwib24iLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsImluaXRpYWxpemUiLCJnZXRJdGVtIiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eVZhbHVlcyIsImdldFZhbHVlcyIsInNldEluaXRpYWxWYWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJzZXRWYWx1ZXMiLCJzZXQiLCJ2YWx1ZXMiLCJyZXNwb25zZSIsImdldFByb3BlcnRpZXMiLCJfbG9hZCIsImxvYWQiLCJuYW1lIiwiZmV0Y2hpbmciLCJkYXRhIiwidHJpZ2dlciIsImUiLCJwdWJsaXNoIiwic2F2ZUNoYW5nZXMiLCJ1cGRhdGVkIiwic3RhdHVzIiwiZGVsZXRlIiwib3B0aW9ucyIsImlkIiwiZGVsZXRlZCIsInNraXBQcm92aWRlciIsInByb2Nlc3NpbmciLCJjb25zb2xlIiwiZXJyb3IiLCJleHBvcnRzIiwiXyIsImluc3RhbmNlcyIsIk1hcCIsIml0ZW1zIiwicmVhZHkiLCJoYXMiLCJzcGVjcyIsIlJlZ2lzdHJ5IiwicmVnaXN0ZXIiLCJpdGVtIiwiZ2V0IiwiX3V1aWQiLCJpc0RlbGV0ZWQiLCJ2YWx1ZSIsInBhcmVudCIsInY0IiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsImFjYyIsImtleSIsImlzUmVhY3RpdmUiLCJrZXlzIiwibGVuZ3RoIiwiYmFzZVN0YXRlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFHTztVQUFVLE1BQU9FLElBQW1FLFNBQVFILE1BQUEsQ0FBQUksYUFBZ0I7WUFDbEgsQ0FBQUMsT0FBUTtZQUVSLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFDLFFBQVM7WUFFVCxJQUFJQyxlQUFlQSxDQUFBO2NBQ2xCLE9BQU8sSUFBSSxDQUFDLENBQUFELFFBQVMsQ0FBQ0UsS0FBSztZQUM1QjtZQUNBLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLENBQUFDLEtBQU0sR0FBWSxLQUFLO1lBQ3ZCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ1VDLFNBQVM7WUFFbkIsSUFBSUMsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3RCO1lBQ0EsSUFBSUwsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxJQUFJTyxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQVAsUUFBUyxDQUFDUSxVQUFVO1lBQ2pDO1lBQ0EsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FB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