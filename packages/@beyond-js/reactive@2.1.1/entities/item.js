System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/model", "uuid@11.1.0"], function (_export, _context) {
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
    }, function (_beyondJsReactive211Model) {
      dependency_1 = _beyondJsReactive211Model;
    }, function (_uuid2) {
      dependency_2 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["uuid", "11.1.0"], ["zod", "3.24.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/local", "0.1.3"], ["react", "18.3.1"], ["@beyond-js/reactive", "2.1.1"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@2.1.1/entities/item"
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
        hash: 3733327215,
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
                this.setInitialValues(data);
                this.trigger('load', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZhY3RvcnkiLCJJdGVtIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsIl9fcmVnaXN0cnlTdGF0ZSIsInN0YXRlIiwiZmV0Y2hlZCIsImZvdW5kIiwiX3Byb3ZpZGVyIiwicHJvdmlkZXIiLCJfX2luc3RhbmNlSWQiLCJpbnN0YW5jZUlkIiwiZHJhZnQiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhcmdzIiwiRXJyb3IiLCJyZWFjdGl2ZVByb3BzIiwib25TZXQiLCJiaW5kIiwib24iLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsImluaXRpYWxpemUiLCJnZXRJdGVtIiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eVZhbHVlcyIsImdldFZhbHVlcyIsInNldEluaXRpYWxWYWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJzZXRWYWx1ZXMiLCJzZXQiLCJ2YWx1ZXMiLCJyZXNwb25zZSIsImdldFByb3BlcnRpZXMiLCJfbG9hZCIsImxvYWQiLCJuYW1lIiwiZGF0YSIsInRyaWdnZXIiLCJlIiwicHVibGlzaCIsInNhdmVDaGFuZ2VzIiwidXBkYXRlZCIsInN0YXR1cyIsImRlbGV0ZSIsIm9wdGlvbnMiLCJpZCIsImRlbGV0ZWQiLCJza2lwUHJvdmlkZXIiLCJwcm9jZXNzaW5nIiwiY29uc29sZSIsImVycm9yIiwiZXhwb3J0cyIsIl8iLCJpbnN0YW5jZXMiLCJNYXAiLCJpdGVtcyIsInJlYWR5IiwiaGFzIiwic3BlY3MiLCJSZWdpc3RyeSIsInJlZ2lzdGVyIiwiaXRlbSIsImdldCIsIl91dWlkIiwiaXNEZWxldGVkIiwidmFsdWUiLCJwYXJlbnQiLCJ2NCIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2MiLCJrZXkiLCJpc1JlYWN0aXZlIiwia2V5cyIsImxlbmd0aCIsImJhc2VTdGF0ZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL3JlZ2lzdHJ5L2ZhY3RvcnkudHMiLCIvcmVnaXN0cnkvaW5kZXgudHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBR087VUFBVSxNQUFPRSxJQUFtRSxTQUFRSCxNQUFBLENBQUFJLGFBQWdCO1lBQ2xILENBQUFDLE9BQVE7WUFFUixDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBQyxRQUFTO1lBRVQsSUFBSUMsZUFBZUEsQ0FBQTtjQUNsQixPQUFPLElBQUksQ0FBQyxDQUFBRCxRQUFTLENBQUNFLEtBQUs7WUFDNUI7WUFDQSxDQUFBQyxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxDQUFBQyxLQUFNLEdBQVksS0FBSztZQUN2QixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNVQyxTQUFTO1lBRW5CLElBQUlDLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN0QjtZQUNBLElBQUlMLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSU8sWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFQLFFBQVMsQ0FBQ1EsVUFBVTtZQUNqQztZQUNBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FB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