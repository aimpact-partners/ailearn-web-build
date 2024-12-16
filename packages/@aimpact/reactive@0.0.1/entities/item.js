System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "uuid@10.0.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Item, RegistryFactory, ItemId, IItemProps, IEntityProvider, IRecordProps, __beyond_pkg, hmr;
  _export({
    Item: void 0,
    RegistryFactory: void 0,
    ItemId: void 0,
    IItemProps: void 0,
    IEntityProvider: void 0,
    IRecordProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactReactive001Model) {
      dependency_1 = _aimpactReactive001Model;
    }, function (_uuid2) {
      dependency_2 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["react", "18.3.1"], ["socket.io-client", "4.8.1"], ["uuid", "11.0.3"], ["zod", "3.23.8"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/reactive@0.0.1/entities/item"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/reactive/model', dependency_1], ['uuid', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1767302363,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _model = require("@aimpact/reactive/model");
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
              if (!entity) throw new Error('Entity is required');
              this.id = args.id;
              if (provider && typeof provider !== 'function') {
                throw new Error(`Provider must be a class/constructor in object ${entity}`);
              }
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
              const registry = this.#factory.get(this.id, args);
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
            registryListener(values) {
              super.set(this.#registry.getValues());
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
                const data = await this.provider.load(args);
                if (!data) {
                  this.#found = false;
                  throw new Error('DataProvider.load() did not return an item.');
                }
                this.#found = true;
                this.#fetched = true;
                this.set(data);
                this.triggerEvent('load', {
                  ...this.getProperties()
                });
                this.trigger('change');
                return data;
              } finally {
                this.#fetched = true;
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
                id = id ?? this.id;
                if (!this.provider || typeof this.provider.delete !== 'function') {
                  throw new Error('DataProvider is not defined or does not implement the delete() method.');
                }
                this.processing = true;
                return this.provider.delete(id);
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
        hash: 333145188,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RegistryFactory = void 0;
          var _model = require("@aimpact/reactive/model");
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
            get(id, data) {
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
        hash: 3848156699,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Registry = void 0;
          var _model = require("@aimpact/reactive/model");
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
        hash: 3319961953,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZhY3RvcnkiLCJJdGVtIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsIl9fcmVnaXN0cnlTdGF0ZSIsInN0YXRlIiwiZmV0Y2hlZCIsImZvdW5kIiwiX3Byb3ZpZGVyIiwicHJvdmlkZXIiLCJfX2luc3RhbmNlSWQiLCJpbnN0YW5jZUlkIiwiZHJhZnQiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhcmdzIiwiRXJyb3IiLCJpZCIsIm9uU2V0IiwiYmluZCIsIm9uIiwiUmVnaXN0cnlGYWN0b3J5IiwiZ2V0SW5zdGFuY2UiLCJpbml0aWFsaXplIiwiZ2V0IiwicHJvcGVydHlWYWx1ZXMiLCJnZXRWYWx1ZXMiLCJzZXRJbml0aWFsVmFsdWVzIiwiZm9yRWFjaCIsInByb3BlcnR5Iiwic2V0VmFsdWVzIiwiZ2V0UHJvcGVydHkiLCJyZWdpc3RyeUxpc3RlbmVyIiwidmFsdWVzIiwic2V0IiwicmVzcG9uc2UiLCJnZXRQcm9wZXJ0aWVzIiwiX2xvYWQiLCJsb2FkIiwibmFtZSIsImRhdGEiLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwicHVibGlzaCIsInNhdmVDaGFuZ2VzIiwidXBkYXRlZCIsInN0YXR1cyIsImRlbGV0ZSIsInByb2Nlc3NpbmciLCJlIiwiY29uc29sZSIsImVycm9yIiwiZXhwb3J0cyIsIl8iLCJpbnN0YW5jZXMiLCJNYXAiLCJpdGVtcyIsInJlYWR5IiwiaGFzIiwic3BlY3MiLCJSZWdpc3RyeSIsIml0ZW0iLCJfdXVpZCIsImlzRGVsZXRlZCIsInZhbHVlIiwiZGVsZXRlZCIsInVuZGVmaW5lZCIsInY0IiwidXBkYXRlVmFsdWUiLCJrZXkiLCJwdWJsaXNoZWQiLCJiYXNlU3RhdGUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9yZWdpc3RyeS9mYWN0b3J5LnRzIiwiL3JlZ2lzdHJ5L2luZGV4LnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBSU87VUFBVSxNQUFPRSxJQUd0QixTQUFRSCxNQUFBLENBQUFJLGFBQWdCO1lBQ3pCLENBQUFDLE9BQVE7WUFFUixDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxDQUFBQyxRQUFTO1lBRVQsSUFBSUMsZUFBZUEsQ0FBQTtjQUNsQixPQUFPLElBQUksQ0FBQyxDQUFBRCxRQUFTLENBQUNFLEtBQUs7WUFDNUI7WUFDQSxDQUFBQyxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxDQUFBQyxLQUFNLEdBQVksS0FBSztZQUN2QixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNVQyxTQUFTO1lBRW5CLElBQUlDLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN0QjtZQUNBLElBQUlMLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSU8sWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFQLFFBQVMsQ0FBQ1EsVUFBVTtZQUNqQztZQUNBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBQyxZQUFZO2NBQUVYLE1BQU07Y0FBRU8sUUFBUTtjQUFFSyxVQUFVO2NB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