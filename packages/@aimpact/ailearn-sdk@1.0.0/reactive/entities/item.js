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
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.9"]]);
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
        hash: 2990452684,
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
            #dataProvider;
            #fetched;
            get fetched() {
              return this.#fetched;
            }
            #found = false;
            get found() {
              return this.#found;
            }
            get dataProvider() {
              return this.#dataProvider;
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
              this.#dataProvider = dataProvider;
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
            _load(args) {}
            // Define optional methods with a default implementation that gives a warning message
            async load(args) {
              if (!this.#dataProvider || typeof this.#dataProvider.load !== 'function') {
                throw new Error('DataProvider is not defined or does not implement the load() method.');
              }
              try {
                const data = await this.#dataProvider.load(args);
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
            save(data) {
              this.set(data);
            }
            async publish(data) {
              this.set(data);
              if (this.#dataProvider && typeof this.#dataProvider.publish === 'function') {
                const updated = await this.#dataProvider.publish(data);
                this.set(updated);
                return updated;
              }
              return this.getProperties();
            }
            async delete(id) {
              try {
                id = id ?? this.id;
                if (!this.#dataProvider || typeof this.#dataProvider.delete !== 'function') {
                  throw new Error('DataProvider is not defined or does not implement the delete() method.');
                }
                this.processing = true;
                return this.#dataProvider.delete(id);
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
        hash: 870827429,
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
        hash: 957425421,
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
        hash: 3439753190,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZhY3RvcnkiLCJJdGVtIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsImRhdGFQcm92aWRlciIsImZldGNoZWQiLCJmb3VuZCIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImFyZ3MiLCJFcnJvciIsIlJlZ2lzdHJ5RmFjdG9yeSIsImdldEluc3RhbmNlIiwiZ2V0IiwiaWQiLCJwcm9wZXJ0eVZhbHVlcyIsImdldFZhbHVlcyIsInNldEluaXRpYWxWYWx1ZXMiLCJvbiIsInJlZ2lzdHJ5TGlzdGVuZXIiLCJiaW5kIiwiZm9yRWFjaCIsInByb3BlcnR5Iiwic2V0VmFsdWVzIiwiZ2V0UHJvcGVydHkiLCJ2YWx1ZXMiLCJzZXQiLCJyZXNwb25zZSIsInVwZGF0ZWQiLCJfbG9hZCIsImxvYWQiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwiZ2V0UHJvcGVydGllcyIsInRyaWdnZXIiLCJlcnJvciIsIm1lc3NhZ2UiLCJzYXZlIiwicHVibGlzaCIsImRlbGV0ZSIsInByb2Nlc3NpbmciLCJlIiwiY29uc29sZSIsImV4cG9ydHMiLCJfIiwiaW5zdGFuY2VzIiwiTWFwIiwiaXRlbXMiLCJuYW1lIiwicmVhZHkiLCJoYXMiLCJzcGVjcyIsIlJlZ2lzdHJ5IiwiaXRlbSIsIl91dWlkIiwiaW5zdGFuY2VJZCIsImlzRGVsZXRlZCIsImRlbGV0ZWQiLCJwcm9wZXJ0eU5hbWVzIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJ2NCIsInVwZGF0ZVZhbHVlIiwia2V5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5n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LENBQUF5QyxVQUFXO2NBQ2pDLElBQUksQ0FBQyxDQUFBOUIsTUFBTyxHQUFHO2dCQUFFLEdBQUdNLElBQUk7Z0JBQUVqQixFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUFBO2NBQUcsQ0FBa0I7Y0FDeEQsSUFBSSxDQUFDUyxTQUFTLENBQUNRLElBQUksQ0FBQztZQUNyQjtZQUVRK0IsV0FBV0EsQ0FBK0JDLEdBQU0sRUFBRUosS0FBc0I7Y0FDL0UsSUFBSSxDQUFDLENBQUFsQyxNQUFPLENBQUNzQyxHQUFHLENBQUMsR0FBR0osS0FBSztZQUMxQjtZQUVBcEMsU0FBU0EsQ0FBQ1EsSUFBMkI7Y0FDcEMsSUFBSSxDQUFDQSxJQUFJLEVBQUUsT0FBTyxLQUFLO2NBRXZCLElBQUlILE9BQU8sR0FBRyxLQUFLO2NBRW5CLEtBQUssTUFBTW1DLEdBQUcsSUFBSWhDLElBQUksRUFBRTtnQkFDdkIsSUFBSWlDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ3BDLElBQUksRUFBRWdDLEdBQUcsQ0FBQyxFQUFFO2tCQUNwRCxNQUFNekMsUUFBUSxHQUFHeUMsR0FBeUI7a0JBQzFDLE1BQU1KLEtBQUssR0FBRzVCLElBQUksQ0FBQ1QsUUFBUSxDQUFrQztrQkFDN0QsSUFBSXFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQWxDLE1BQU8sQ0FBQ0gsUUFBUSxDQUFDLEVBQUU7a0JBRXRDLElBQUksQ0FBQ3dDLFdBQVcsQ0FBQ3hDLFFBQVEsRUFBRXFDLEtBQUssQ0FBQztrQkFDakMvQixPQUFPLEdBQUcsSUFBSTs7O2NBSWhCLElBQUlBLE9BQU8sRUFBRTtnQkFDWixJQUFJLENBQUNNLE9BQU8sQ0FBQyxRQUFRLEVBQUU7a0JBQUVULE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQUE7Z0JBQU8sQ0FBRSxDQUFDOztjQUVqRCxPQUFPRyxPQUFPO1lBQ2Y7WUFFQVosU0FBU0EsQ0FBQTtjQUNSLE9BQU87Z0JBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQVM7Y0FBTyxDQUFFO1lBQzNCOztVQUNBa0IsT0FBQSxDQUFBUyxRQUFBLEdBQUFBLFFBQUE7Ozs7Ozs7Ozs7O1VGekVEOztVQUVBWSxNQUFBLENBQUFJLGNBQUEsQ0FBQXpCLE9BQUE7WUFDQWdCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUdKQTs7VUFFQUssTUFBQSxDQUFBSSxjQUFBLENBQUF6QixPQUFBO1lBQ0FnQixLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=