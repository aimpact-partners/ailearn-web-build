System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "uuid@10.0.0", "@aimpact/ailearn-sdk@1.0.0/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Item, RegistryFactory, StoreRecords, IItemProps, __beyond_pkg, hmr;
  _export({
    Item: void 0,
    RegistryFactory: void 0,
    StoreRecords: void 0,
    IItemProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }, function (_uuid2) {
      dependency_2 = _uuid2;
    }, function (_aimpactAilearnSdk100Model) {
      dependency_3 = _aimpactAilearnSdk100Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.9"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/entities/item"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['uuid', dependency_2], ['@aimpact/ailearn-sdk/model', dependency_3]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2870997763,
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
            static entity;
            #registry;
            get registry() {
              return this.#registry;
            }
            constructor({
              entity,
              properties,
              ...args
            }) {
              super({
                ...args,
                properties
              });
              if (!entity) throw new Error('Entity is required');
              this.#factory = _factory.RegistryFactory.getInstance(entity);
              const registry = this.#factory.get(this.id, args);
              this.#registry = registry;
              const propertyValues = registry.getValues();
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
            // Define optional methods with a default implementation that gives a warning message
            load() {
              console.warn(`${this.constructor.name}: 'load' method is not implemented.`);
            }
            save() {
              console.warn(`${this.constructor.name}: 'save' method is not implemented.`);
            }
            publish() {
              console.warn(`${this.constructor.name}: 'publish' method is not implemented.`);
            }
            delete() {
              console.warn(`${this.constructor.name}: 'delete' method is not implemented.`);
            }
          }
          exports.Item = Item;
        }
      });

      /**********************************
      INTERNAL MODULE: ./registry/factory
      **********************************/

      ims.set('./registry/factory', {
        hash: 2068299379,
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
            get(id, data) {
              console.log(99, this, id, data, this.items);
              if (!id || !this.items.has(id)) {
                console.log('new registry for', this.#name, id, this.constructor.name, this.properties);
                const specs = data ? {
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
              if (data) item.setValues(data);
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
        hash: 1816085515,
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
              this.#id = id ?? this.#instanceId;
              this.#values = {
                ...data,
                id: this.#id
              };
              this.setValues(data);
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
              console.log(111, this.#values);
              return {
                ...this.#values
              };
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

      /**************************************
      INTERNAL MODULE: ./registry/types/index
      **************************************/

      ims.set('./registry/types/index', {
        hash: 3079489239,
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
        hash: 4273266293,
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
        "im": "./registry/store",
        "from": "StoreRecords",
        "name": "StoreRecords"
      }, {
        "im": "./types",
        "from": "IItemProps",
        "name": "IItemProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Item') && _export("Item", Item = require ? require('./index').Item : value);
        (require || prop === 'RegistryFactory') && _export("RegistryFactory", RegistryFactory = require ? require('./registry/factory').RegistryFactory : value);
        (require || prop === 'StoreRecords') && _export("StoreRecords", StoreRecords = require ? require('./registry/store').StoreRecords : value);
        (require || prop === 'IItemProps') && _export("IItemProps", IItemProps = require ? require('./types').IItemProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZhY3RvcnkiLCJJdGVtIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImFyZ3MiLCJFcnJvciIsIlJlZ2lzdHJ5RmFjdG9yeSIsImdldEluc3RhbmNlIiwiZ2V0IiwiaWQiLCJwcm9wZXJ0eVZhbHVlcyIsImdldFZhbHVlcyIsInNldEluaXRpYWxWYWx1ZXMiLCJvbiIsInJlZ2lzdHJ5TGlzdGVuZXIiLCJiaW5kIiwiZm9yRWFjaCIsInByb3BlcnR5Iiwic2V0VmFsdWVzIiwiZ2V0UHJvcGVydHkiLCJ2YWx1ZXMiLCJzZXQiLCJyZXNwb25zZSIsInVwZGF0ZWQiLCJsb2FkIiwiY29uc29sZSIsIndhcm4iLCJuYW1lIiwic2F2ZSIsInB1Ymxpc2giLCJkZWxldGUiLCJleHBvcnRzIiwiXyIsImluc3RhbmNlcyIsIk1hcCIsIml0ZW1zIiwicmVhZHkiLCJkYXRhIiwibG9nIiwiaGFzIiwic3BlY3MiLCJSZWdpc3RyeSIsIml0ZW0iLCJfdXVpZCIsImluc3RhbmNlSWQiLCJpc0RlbGV0ZWQiLCJkZWxldGVkIiwicHJvcGVydHlOYW1lcyIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwidW5kZWZpbmVkIiwidjQiLCJ1cGRhdGVWYWx1ZSIsImtleSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInRyaWdnZXIiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9yZWdpc3RyeS9mYWN0b3J5LnRzIiwiL3JlZ2lzdHJ5L2luZGV4LnRzIiwiL3JlZ2lzdHJ5L3N0b3JlLnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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