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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.1"]]);
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
        hash: 2839838522,
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
            get provider() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZhY3RvcnkiLCJJdGVtIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsImZldGNoZWQiLCJmb3VuZCIsIl9kYXRhUHJvdmlkZXIiLCJkYXRhUHJvdmlkZXIiLCJwcm92aWRlciIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImFyZ3MiLCJFcnJvciIsImlkIiwib25TZXQiLCJiaW5kIiwib24iLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsImluaXRpYWxpemUiLCJnZXQiLCJwcm9wZXJ0eVZhbHVlcyIsImdldFZhbHVlcyIsInNldEluaXRpYWxWYWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJzZXRWYWx1ZXMiLCJnZXRQcm9wZXJ0eSIsInJlZ2lzdHJ5TGlzdGVuZXIiLCJ2YWx1ZXMiLCJzZXQiLCJyZXNwb25zZSIsImdldFByb3BlcnRpZXMiLCJfbG9hZCIsImxvYWQiLCJuYW1lIiwiZGF0YSIsInRyaWdnZXJFdmVudCIsInRyaWdnZXIiLCJwdWJsaXNoIiwic2F2ZSIsInVwZGF0ZWQiLCJzdGF0dXMiLCJkZWxldGUiLCJwcm9jZXNzaW5nIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImV4cG9ydHMiLCJfIiwiaW5zdGFuY2VzIiwiTWFwIiwiaXRlbXMiLCJyZWFkeSIsImhhcyIsInNwZWNzIiwiUmVnaXN0cnkiLCJpdGVtIiwiX3V1aWQiLCJpbnN0YW5jZUlkIiwiaXNEZWxldGVkIiwiZGVsZXRlZCIsInByb3BlcnR5TmFtZXMiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInY0IiwidXBkYXRlVmFsdWUiLCJrZXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9yZWdpc3RyeS9mYWN0b3J5LnRzIiwiL3JlZ2lzdHJ5L2luZGV4LnRzIiwiL3R5cGVzLnRzIl0s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