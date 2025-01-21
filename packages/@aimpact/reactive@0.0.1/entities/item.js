System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "uuid@10.0.0"], function (_export, _context) {
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
        hash: 2028588506,
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
              // if (this.constructor.name === 'Assignment')
              if (!entity) throw new Error('Entity is required');
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
              const response = await this.provider.load(args);
              const data = response;
              if (!data) {
                this.#found = false;
                throw new Error('Provider.load() did not return an item.');
              }
              this.#found = true;
              this.#fetched = true;
              this.set(data);
              this.triggerEvent('load', {
                ...this.getProperties()
              });
              this.trigger('change');
              return response;
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
                id = id ?? this.getProperty('id');
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
        hash: 3679256627,
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
        hash: 3082226331,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZhY3RvcnkiLCJJdGVtIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsIl9fcmVnaXN0cnlTdGF0ZSIsInN0YXRlIiwiZmV0Y2hlZCIsImZvdW5kIiwiX3Byb3ZpZGVyIiwicHJvdmlkZXIiLCJfX2luc3RhbmNlSWQiLCJpbnN0YW5jZUlkIiwiZHJhZnQiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhcmdzIiwiRXJyb3IiLCJvblNldCIsImJpbmQiLCJvbiIsIlJlZ2lzdHJ5RmFjdG9yeSIsImdldEluc3RhbmNlIiwiaW5pdGlhbGl6ZSIsImdldEl0ZW0iLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5VmFsdWVzIiwiZ2V0VmFsdWVzIiwic2V0SW5pdGlhbFZhbHVlcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsInNldFZhbHVlcyIsInNldCIsInZhbHVlcyIsInJlc3BvbnNlIiwiZ2V0UHJvcGVydGllcyIsIl9sb2FkIiwibG9hZCIsIm5hbWUiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwidHJpZ2dlciIsInB1Ymxpc2giLCJzYXZlQ2hhbmdlcyIsInVwZGF0ZWQiLCJzdGF0dXMiLCJkZWxldGUiLCJpZCIsInByb2Nlc3NpbmciLCJlIiwiY29uc29sZSIsImVycm9yIiwiZXhwb3J0cyIsIl8iLCJpbnN0YW5jZXMiLCJNYXAiLCJpdGVtcyIsInJlYWR5IiwiaGFzIiwic3BlY3MiLCJSZWdpc3RyeSIsIml0ZW0iLCJnZXQiLCJfdXVpZCIsImlzRGVsZXRlZCIsInZhbHVlIiwiZGVsZXRlZCIsInVuZGVmaW5lZCIsInY0IiwidXBkYXRlVmFsdWUiLCJrZXkiLCJwdWJsaXNoZWQiLCJiYXNlU3RhdGUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9yZWdpc3RyeS9mYWN0b3J5LnRzIiwiL3JlZ2lzdHJ5L2luZGV4LnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUdPO1VBQVUsTUFBT0UsSUFBbUUsU0FBUUgsTUFBQSxDQUFBSSxhQUFnQjtZQUNsSCxDQUFBQyxPQUFRO1lBRVIsQ0FBQUMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUEsQ0FBQUMsUUFBUztZQUVULElBQUlDLGVBQWVBLENBQUE7Y0FDbEIsT0FBTyxJQUFJLENBQUMsQ0FBQUQsUUFBUyxDQUFDRSxLQUFLO1lBQzVCO1lBQ0EsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsQ0FBQUMsS0FBTSxHQUFZLEtBQUs7WUFDdkIsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDVUMsU0FBUztZQUVuQixJQUFJQyxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUNELFNBQVM7WUFDdEI7WUFDQSxJQUFJTCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlPLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBUCxRQUFTLENBQUNRLFVBQVU7WUFDakM7WUFDQSxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQUMsWUFBWTtjQUFFWCxNQUFNO2NBQUVPLFFBQVE7Y0FBRUssVUFBVTtjQUFFLEdBQUdD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