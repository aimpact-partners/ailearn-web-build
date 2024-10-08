System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "uuid@10.0.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Item, RegistryFactory, ItemId, IItemProps, IEntityProvider, __beyond_pkg, hmr;
  _export({
    Item: void 0,
    RegistryFactory: void 0,
    ItemId: void 0,
    IItemProps: void 0,
    IEntityProvider: void 0
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
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
        hash: 2482507548,
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
            _dataProvider;
            get dataProvider() {
              return this._dataProvider;
            }
            get registry() {
              return this.#registry;
            }
            constructor({
              entity,
              dataProvider,
              properties,
              ...args
            }) {
              super({
                ...args,
                properties
              });
              if (!entity) throw new Error('Entity is required');
              this.id = args.id;
              if (dataProvider && typeof dataProvider !== 'function') {
                throw new Error(`DataProvider must be a class/constructor in object ${entity}`);
              }
              this.#entity = entity;
              this.onSet = this.onSet.bind(this);
              this.on('set.executed', this.onSet);
              if (dataProvider) {
                this._dataProvider = new dataProvider(this);
              }
              this.#factory = _factory.RegistryFactory.getInstance(entity);
            }
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
              if (!this._dataProvider || typeof this._dataProvider.load !== 'function') {
                throw new Error(`DataProvider is not defined or does not implement the load() method in object ${this.constructor.name}`);
              }
              try {
                const data = await this._dataProvider.load(args);
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
              } catch (error) {
                throw new Error(error.message);
              } finally {
                this.#fetched = true;
              }
            }
            async publish(data) {
              this.set(data);
              super.save();
              if (this._dataProvider && typeof this._dataProvider.publish === 'function') {
                const updated = await this._dataProvider.publish(data);
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
                if (!this._dataProvider || typeof this._dataProvider.delete !== 'function') {
                  throw new Error('DataProvider is not defined or does not implement the delete() method.');
                }
                this.processing = true;
                return this._dataProvider.delete(id);
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
        hash: 264840268,
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
                const registry = new _.Registry(specs);
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
        hash: 2439480711,
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
            get id() {
              return this.#id;
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
            #propertyNames = [];
            set deleted(value) {
              if (value === this.#isDeleted) return;
              this.#isDeleted = value;
              this.triggerEvent();
            }
            constructor({
              properties,
              ...data
            } = {
              id: undefined
            }) {
              super({
                properties: properties || []
              });
              const {
                id
              } = data;
              this.#instanceId = (0, _uuid.v4)();
              this.#id = id ? id : this.#instanceId;
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
        hash: 2103332309,
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
        hash: 3074177607,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZhY3RvcnkiLCJJdGVtIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsImZldGNoZWQiLCJmb3VuZCIsIl9kYXRhUHJvdmlkZXIiLCJkYXRhUHJvdmlkZXIiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhcmdzIiwiRXJyb3IiLCJpZCIsIm9uU2V0IiwiYmluZCIsIm9uIiwiUmVnaXN0cnlGYWN0b3J5IiwiZ2V0SW5zdGFuY2UiLCJpbml0aWFsaXplIiwiZ2V0IiwicHJvcGVydHlWYWx1ZXMiLCJnZXRWYWx1ZXMiLCJzZXRJbml0aWFsVmFsdWVzIiwiZm9yRWFjaCIsInByb3BlcnR5Iiwic2V0VmFsdWVzIiwiZ2V0UHJvcGVydHkiLCJyZWdpc3RyeUxpc3RlbmVyIiwidmFsdWVzIiwic2V0IiwicmVzcG9uc2UiLCJnZXRQcm9wZXJ0aWVzIiwiX2xvYWQiLCJsb2FkIiwibmFtZSIsImRhdGEiLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwiZXJyb3IiLCJtZXNzYWdlIiwicHVibGlzaCIsInNhdmUiLCJ1cGRhdGVkIiwic3RhdHVzIiwiZGVsZXRlIiwicHJvY2Vzc2luZyIsImUiLCJjb25zb2xlIiwiZXhwb3J0cyIsIl8iLCJpbnN0YW5jZXMiLCJNYXAiLCJpdGVtcyIsInJlYWR5IiwiaGFzIiwic3BlY3MiLCJSZWdpc3RyeSIsIml0ZW0iLCJfdXVpZCIsImluc3RhbmNlSWQiLCJpc0RlbGV0ZWQiLCJkZWxldGVkIiwicHJvcGVydHlOYW1lcyIsInZhbHVlIiwidW5kZWZpbmVkIiwidjQiLCJ1cGRhdGVWYWx1ZSIsImtleSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL3JlZ2lzdHJ5L2ZhY3RvcnkudHMiLCIvcmVnaXN0cnkvaW5kZXgudHMiLCIvdHlwZXMudHMiXSwi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