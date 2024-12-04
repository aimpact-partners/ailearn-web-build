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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.17"]]);
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
        hash: 763800705,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZhY3RvcnkiLCJJdGVtIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsImZldGNoZWQiLCJmb3VuZCIsIl9wcm92aWRlciIsInByb3ZpZGVyIiwiX19pbnN0YW5jZUlkIiwiaW5zdGFuY2VJZCIsImRyYWZ0IiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiYXJncyIsIkVycm9yIiwiaWQiLCJvblNldCIsImJpbmQiLCJvbiIsIlJlZ2lzdHJ5RmFjdG9yeSIsImdldEluc3RhbmNlIiwiaW5pdGlhbGl6ZSIsImdldCIsInByb3BlcnR5VmFsdWVzIiwiZ2V0VmFsdWVzIiwic2V0SW5pdGlhbFZhbHVlcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsInNldFZhbHVlcyIsImdldFByb3BlcnR5IiwicmVnaXN0cnlMaXN0ZW5lciIsInZhbHVlcyIsInNldCIsInJlc3BvbnNlIiwiZ2V0UHJvcGVydGllcyIsIl9sb2FkIiwibG9hZCIsIm5hbWUiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwidHJpZ2dlciIsInB1Ymxpc2giLCJzYXZlIiwidXBkYXRlZCIsInN0YXR1cyIsImRlbGV0ZSIsInByb2Nlc3NpbmciLCJlIiwiY29uc29sZSIsImVycm9yIiwiZXhwb3J0cyIsIl8iLCJpbnN0YW5jZXMiLCJNYXAiLCJpdGVtcyIsInJlYWR5IiwiaGFzIiwic3BlY3MiLCJSZWdpc3RyeSIsIml0ZW0iLCJfdXVpZCIsImlzRGVsZXRlZCIsInZhbHVlIiwiZGVsZXRlZCIsInVuZGVmaW5lZCIsInY0IiwidXBkYXRlVmFsdWUiLCJrZXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9yZWdpc3RyeS9mYWN0b3J5LnRzIiwiL3JlZ2lzdHJ5L2luZGV4LnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250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