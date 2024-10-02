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
        hash: 2723799987,
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
            static entity;
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
              this.#registry.on('change', this.registryListener.bind(this));
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
              if (response.updated) {
                this.#registry.setValues(values);
              }
              return response;
            }
            _load(args) {}
            // Define optional methods with a default implementation that gives a warning message
            async load(args) {
              console.log(44);
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
        hash: 1078620685,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZhY3RvcnkiLCJJdGVtIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsImZldGNoZWQiLCJmb3VuZCIsIl9kYXRhUHJvdmlkZXIiLCJkYXRhUHJvdmlkZXIiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhcmdzIiwiRXJyb3IiLCJpZCIsIlJlZ2lzdHJ5RmFjdG9yeSIsImdldEluc3RhbmNlIiwiaW5pdGlhbGl6ZSIsImdldCIsInByb3BlcnR5VmFsdWVzIiwiZ2V0VmFsdWVzIiwic2V0SW5pdGlhbFZhbHVlcyIsIm9uIiwicmVnaXN0cnlMaXN0ZW5lciIsImJpbmQiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJzZXRWYWx1ZXMiLCJnZXRQcm9wZXJ0eSIsInZhbHVlcyIsInNldCIsInJlc3BvbnNlIiwidXBkYXRlZCIsIl9sb2FkIiwibG9hZCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiZGF0YSIsInRyaWdnZXJFdmVudCIsImdldFByb3BlcnRpZXMiLCJ0cmlnZ2VyIiwiZXJyb3IiLCJtZXNzYWdlIiwicHVibGlzaCIsInNhdmUiLCJzdGF0dXMiLCJkZWxldGUiLCJwcm9jZXNzaW5nIiwiZSIsImV4cG9ydHMiLCJfIiwiaW5zdGFuY2VzIiwiTWFwIiwiaXRlbXMiLCJyZWFkeSIsImhhcyIsInNwZWNzIiwiUmVnaXN0cnkiLCJpdGVtIiwiX3V1aWQiLCJpbnN0YW5jZUlkIiwiaXNEZWxldGVkIiwiZGVsZXRlZCIsInByb3BlcnR5TmFtZXMiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInY0IiwidXBkYXRlVmFsdWUiLCJrZXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9yZWdpc3RyeS9mYWN0b3J5LnRzIiwiL3JlZ2lzdHJ5L2luZGV4LnRzIiwiL3R5cGVzLnRzIl0sInNv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