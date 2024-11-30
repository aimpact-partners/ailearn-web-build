System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "uuid@10.0.0"], function (_export, _context) {
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
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_1 = _aimpactAilearnSdk100ReactiveModel;
    }, function (_uuid2) {
      dependency_2 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/reactive/model', dependency_1], ['uuid', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1938765495,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _factory = require("./registry/factory");
          /*bundle*/
          class Item extends _model.ReactiveModel {
            #factory;
            #entity;
            get entity() {
              return this.#entity;
            }
            #registry;
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
              super.save();
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
        hash: 3326140096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RegistryFactory = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
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
                registry.on('record.published', registry => this.trigger('new.registry', registry));
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
        hash: 1707233055,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Registry = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _uuid = require("uuid");
          class Registry extends _model.ReactiveModel {
            #id;
            #instanceId;
            #isDeleted = false;
            #draft = false;
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
              id: undefined
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
              this.setValues(this.#values);
            }
            updateValue(key, value) {
              this.#values[key] = value;
            }
            setValues(data) {
              if (!data) return false;
              let updated = false;
              let draft = this.#draft;
              for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                  const property = key;
                  const value = data[property];
                  if (value === this.#values[property]) continue;
                  this.updateValue(property, value);
                  updated = true;
                }
              }
              if (updated) {
                this.trigger('change', {
                  values: this.#values
                });
                if (this.id && draft) {
                  this.trigger('record.published', {
                    ...this.#values
                  });
                } else {
                  this.trigger('record.updated', {
                    ...this.#values
                  });
                }
              }
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
        hash: 1866795184,
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
        hash: 3481434969,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZhY3RvcnkiLCJJdGVtIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsImZldGNoZWQiLCJmb3VuZCIsIl9wcm92aWRlciIsInByb3ZpZGVyIiwiZHJhZnQiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhcmdzIiwiRXJyb3IiLCJpZCIsIm9uU2V0IiwiYmluZCIsIm9uIiwiUmVnaXN0cnlGYWN0b3J5IiwiZ2V0SW5zdGFuY2UiLCJpbml0aWFsaXplIiwiZ2V0IiwicHJvcGVydHlWYWx1ZXMiLCJnZXRWYWx1ZXMiLCJzZXRJbml0aWFsVmFsdWVzIiwiZm9yRWFjaCIsInByb3BlcnR5Iiwic2V0VmFsdWVzIiwiZ2V0UHJvcGVydHkiLCJyZWdpc3RyeUxpc3RlbmVyIiwidmFsdWVzIiwic2V0IiwicmVzcG9uc2UiLCJnZXRQcm9wZXJ0aWVzIiwiX2xvYWQiLCJsb2FkIiwibmFtZSIsImRhdGEiLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwicHVibGlzaCIsInNhdmUiLCJ1cGRhdGVkIiwic3RhdHVzIiwiZGVsZXRlIiwicHJvY2Vzc2luZyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJleHBvcnRzIiwiXyIsImluc3RhbmNlcyIsIk1hcCIsIml0ZW1zIiwicmVhZHkiLCJoYXMiLCJzcGVjcyIsIlJlZ2lzdHJ5IiwiaXRlbSIsIl91dWlkIiwiaW5zdGFuY2VJZCIsImlzRGVsZXRlZCIsInZhbHVlIiwiZGVsZXRlZCIsInVuZGVmaW5lZCIsInY0IiwidXBkYXRlVmFsdWUiLCJrZXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9yZWdpc3RyeS9mYWN0b3J5LnRzIiwiL3JlZ2lzdHJ5L2luZGV4LnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxs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