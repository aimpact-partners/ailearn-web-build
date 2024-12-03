System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/chat-sdk@1.3.0/reactive/model", "uuid@10.0.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Item, RegistryFactory, ItemId, IItemProps, IEntityProvider, IRecordProps, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk130ReactiveModel) {
      dependency_2 = _aimpactChatSdk130ReactiveModel;
    }, function (_uuid2) {
      dependency_3 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/ailearn-app", "0.2.15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.3.0/reactive/entities/item"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/reactive/model', dependency_1], ['@aimpact/chat-sdk/reactive/model', dependency_2], ['uuid', dependency_3]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1236361774,
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
        hash: 3616904490,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RegistryFactory = void 0;
          var _model = require("@aimpact/chat-sdk/reactive/model");
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
        hash: 3136811506,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Registry = void 0;
          var _model = require("@aimpact/chat-sdk/reactive/model");
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
        hash: 3448948988,
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