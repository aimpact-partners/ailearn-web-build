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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["react", "18.3.1"], ["socket.io-client", "4.8.1"], ["uuid", "11.0.3"], ["zod", "3.23.8"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/ailearn-app", "0.3.16"]]);
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
        hash: 2585734451,
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
              this.reactiveProps(['deleted']);
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
                this.#registry.deleted = true;
                return this.provider.delete(id);
                return true;
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
        hash: 3740213330,
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
                registry.on('record.deleted', registry => this.trigger('record.deleted', registry));
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
        hash: 50438838,
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
              this.trigger('record.deleted', this.#values);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZhY3RvcnkiLCJJdGVtIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsIl9fcmVnaXN0cnlTdGF0ZSIsInN0YXRlIiwiZmV0Y2hlZCIsImZvdW5kIiwiX3Byb3ZpZGVyIiwicHJvdmlkZXIiLCJfX2luc3RhbmNlSWQiLCJpbnN0YW5jZUlkIiwiZHJhZnQiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhcmdzIiwiRXJyb3IiLCJyZWFjdGl2ZVByb3BzIiwib25TZXQiLCJiaW5kIiwib24iLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsImluaXRpYWxpemUiLCJnZXRJdGVtIiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eVZhbHVlcyIsImdldFZhbHVlcyIsInNldEluaXRpYWxWYWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJzZXRWYWx1ZXMiLCJzZXQiLCJ2YWx1ZXMiLCJyZXNwb25zZSIsImdldFByb3BlcnRpZXMiLCJfbG9hZCIsImxvYWQiLCJuYW1lIiwiZGF0YSIsInRyaWdnZXJFdmVudCIsInRyaWdnZXIiLCJwdWJsaXNoIiwic2F2ZUNoYW5nZXMiLCJ1cGRhdGVkIiwic3RhdHVzIiwiZGVsZXRlIiwiaWQiLCJwcm9jZXNzaW5nIiwiZGVsZXRlZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJleHBvcnRzIiwiXyIsImluc3RhbmNlcyIsIk1hcCIsIml0ZW1zIiwicmVhZHkiLCJoYXMiLCJzcGVjcyIsIlJlZ2lzdHJ5IiwiaXRlbSIsImdldCIsIl91dWlkIiwiaXNEZWxldGVkIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJ2NCIsInVwZGF0ZVZhbHVlIiwia2V5IiwicHVibGlzaGVkIiwiYmFzZVN0YXRlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFHTztVQUFVLE1BQU9FLElBQW1FLFNBQVFILE1BQUEsQ0FBQUksYUFBZ0I7WUFDbEgsQ0FBQUMsT0FBUTtZQUVSLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFDLFFBQVM7WUFFVCxJQUFJQyxlQUFlQSxDQUFBO2NBQ2xCLE9BQU8sSUFBSSxDQUFDLENBQUFELFFBQVMsQ0FBQ0UsS0FBSztZQUM1QjtZQUNBLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLENBQUFDLEtBQU0sR0FBWSxLQUFLO1lBQ3ZCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ1VDLFNBQVM7WUFFbkIsSUFBSUMsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3RCO1lBQ0EsSUFBSUwsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxJQUFJTyxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQVAsUUFBUyxDQUFDUSxVQUFVO1lBQ2pDO1lBQ0EsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBR0FDLFlBQVk7Y0FBRVgsTUFBTTtjQUFFTyxRQUFRO2NBQUVLLFVBQVU7Y0FBRSxHQUFHQztZQUFJLElBQWdDLEVBQUU7Y0FDcEYsS0FBSyxDQUFDO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUVEO2NBQVUsQ0FBRSxDQUFDO2NBQzlCO2NBRUEsSUFBSSxDQUFDWixNQUFNLEVBQUUsTUFBTSxJQUFJYyxLQUFLLENBQUMsb0JBQW9CLENBQUM7Y0FFbEQsSUFBSVAsUUFBUSxJQUFJLE9BQU9BLFFBQVEsS0FBSyxVQUFVLEVBQUU7Z0JBQy9DLE1BQU0sSUFBSU8sS0FBSyxDQUFDLGtEQUFrRGQsTUFBTSxFQUFFLENBQUM7O2NBRzVFLElBQUksQ0FBQ2UsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7Y0FDL0IsSUFBSSxDQUFDLENBQUFmLE1BQU8sR0FBR0EsTUFBTTtjQUVyQixJQUFJLENBQUNnQixLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7Y0FDbEM7OztjQUdBLElBQUksQ0FBQ0MsRUFBRSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUNGLEtBQUssQ0FBQztjQUVuQyxJQUFJVCxRQUFRLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDRCxTQUFTLEdBQUcsSUFBSUMsUUFBUSxDQUFDLElBQUksQ0FBQzs7Y0FHcEMsSUFBSSxDQUFDLENBQUFSLE9BQVEsR0FBR0gsUUFBQSxDQUFBdUIsZUFBZSxDQUFDQyxXQUFXLENBQUNwQixNQUFNLENBQUM7Y0FFbkQsSUFBSSxDQUFDcUIsVUFBVSxDQUFDUixJQUFJLENBQUM7WUFDdEI7WUFDQTs7OztZQUlVUSxVQUFVQSxDQUFDO2NBQUUsR0FBR1I7WUFBSSxDQUFFO2NBQy9CLE1BQU1aLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQUYsT0FBUSxDQUFDdUIsT0FBTyxDQUFDLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFVixJQUFJLENBQUM7Y0FDcEUsSUFBSSxDQUFDLENBQUFaLFFBQVMsR0FBR0EsUUFBUTtjQUV6QixNQUFNdUIsY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFBdkIsUUFBUyxDQUFDd0IsU0FBUyxFQUFFO2NBRWpELElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNGLGNBQWMsQ0FBQztjQUNyQztjQUVBLElBQUksQ0FBQ1osVUFBVSxDQUFDZSxPQUFPLENBQUNDLFFBQVEsSUFBRztnQkFDbEM7Z0JBQ0EsSUFBSSxPQUFPQSxRQUFRLEtBQUssUUFBUSxFQUFFO2tCQUNqQyxJQUFJLENBQUNWLEVBQUUsQ0FBQyxHQUFHVSxRQUFRLFVBQVUsRUFBRSxNQUFLO29CQUNuQyxJQUFJLENBQUMsQ0FBQTNCLFFBQVMsQ0FBQzRCLFNBQVMsQ0FBQztzQkFBRSxDQUFDRCxRQUFRLEdBQUcsSUFBSSxDQUFDTCxXQUFXLENBQUNLLFFBQVE7b0JBQUMsQ0FBRSxDQUFDO2tCQUNyRSxDQUFDLENBQUM7O2NBRUosQ0FBQyxDQUFDO1lBQ0g7WUFFQUUsR0FBR0EsQ0FBQ0MsTUFBVztjQUNkLE1BQU1DLFFBQVEsR0FBRyxLQUFLLENBQUNGLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDO2NBQ2xDLE9BQU9DLFFBQVE7WUFDaEI7WUFFQWhCLEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUMsQ0FBQWYsUUFBUyxFQUFFNEIsU0FBUyxDQUFDLElBQUksQ0FBQ0ksYUFBYSxFQUFFLENBQUM7WUFDaEQ7WUFFVUMsS0FBS0EsQ0FBQ3JCLElBQVMsR0FBRztZQUM1QjtZQUNBLE1BQU1zQixJQUFJQSxDQUFDdEIsSUFBVTtjQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDTixRQUFRLElBQUksT0FBTyxJQUFJLENBQUNBLFFBQVEsQ0FBQzRCLElBQUksS0FBSyxVQUFVLEVBQUU7Z0JBQy9ELE1BQU0sSUFBSXJCLEtBQUssQ0FDZCxpRkFBaUYsSUFBSSxDQUFDSCxXQUFXLENBQUN5QixJQUFJLEVBQUUsQ0FDeEc7O2NBR0YsTUFBTUosUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDekIsUUFBUSxDQUFDNEIsSUFBSSxDQUFDdEIsSUFBSSxDQUFDO2NBRS9DLE1BQU13QixJQUFJLEdBQUdMLFFBQVE7Y0FDckIsSUFBSSxDQUFDSyxJQUFJLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLENBQUFoQyxLQUFNLEdBQUcsS0FBSztnQkFDbkIsTUFBTSxJQUFJUyxLQUFLLENBQUMseUNBQXlDLENBQUM7O2NBRTNELElBQUksQ0FBQyxDQUFBVCxLQUFNLEdBQUcsSUFBSTtjQUNsQixJQUFJLENBQUMsQ0FBQUQsT0FBUSxHQUFHLElBQUk7Y0FFcEIsSUFBSSxDQUFDMEIsR0FBRyxDQUFDTyxJQUFJLENBQUM7Y0FFZCxJQUFJLENBQUNDLFlBQVksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsR0FBRyxJQUFJLENBQUNMLGFBQWE7Y0FBRSxDQUFFLENBQUM7Y0FDdEQsSUFBSSxDQUFDTSxPQUFPLENBQUMsUUFBUSxDQUFDO2NBRXRCLE9BQU9QLFFBQVE7WUFDaEI7WUFFQSxNQUFNUSxPQUFPQSxDQUFDSCxJQUFVO2NBQ3ZCQSxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSSxHQUFHLElBQUksQ0FBQ0osYUFBYSxFQUFFO2NBRXpDLElBQUksQ0FBQ0gsR0FBRyxDQUFDO2dCQUFFLEdBQUcsSUFBSSxDQUFDRyxhQUFhLEVBQUU7Z0JBQUUsR0FBR0k7Y0FBSSxDQUFFLENBQUM7Y0FDOUMsSUFBSSxDQUFDLENBQUFwQyxRQUFTLENBQUM0QixTQUFTLENBQUMsSUFBSSxDQUFDSSxhQUFhLEVBQUUsSUFBSSxDQUFDO2NBQ2xELEtBQUssQ0FBQ1EsV0FBVyxFQUFFO2NBRW5CLElBQUksSUFBSSxDQUFDbEMsUUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDQSxRQUFRLENBQUNpQyxPQUFPLEtBQUssVUFBVSxFQUFFO2dCQUNqRSxNQUFNRSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUNuQyxRQUFRLENBQUNpQyxPQUFPLENBQUNILElBQUksQ0FBQztnQkFFakQsSUFBSSxDQUFDSyxPQUFPLENBQUNDLE1BQU0sRUFBRTtrQkFDcEIsTUFBTSxJQUFJN0IsS0FBSyxDQUFDLG1CQUFtQixDQUFDOztnQkFFckMsSUFBSSxDQUFDZ0IsR0FBRyxDQUFDWSxPQUFPLENBQUNMLElBQUksQ0FBQztnQkFDdEIsT0FBT0ssT0FBTyxDQUFDTCxJQUFJOztjQUVwQixPQUFPLElBQUksQ0FBQ0osYUFBYSxFQUFFO1lBQzVCO1lBRUEsTUFBTVcsTUFBTUEsQ0FBQ0MsRUFBRTtjQUNkLElBQUk7Z0JBQ0hBLEVBQUUsR0FBR0EsRUFBRSxJQUFJLElBQUksQ0FBQ3RCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUNoQixRQUFRLElBQUksT0FBTyxJQUFJLENBQUNBLFFBQVEsQ0FBQ3FDLE1BQU0sS0FBSyxVQUFVLEVBQUU7a0JBQ2pFLE1BQU0sSUFBSTlCLEtBQUssQ0FBQyx3RUFBd0UsQ0FBQzs7Z0JBRTFGLElBQUksQ0FBQ2dDLFVBQVUsR0FBRyxJQUFJO2dCQUN0QixJQUFJLENBQUMsQ0FBQTdDLFFBQVMsQ0FBQzhDLE9BQU8sR0FBRyxJQUFJO2dCQUM3QixPQUFPLElBQUksQ0FBQ3hDLFFBQVEsQ0FBQ3FDLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDO2dCQUMvQixPQUFPLElBQUk7ZUFDWCxDQUFDLE9BQU9HLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7O1VBQ0FHLE9BQUEsQ0FBQXRELElBQUEsR0FBQUEsSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwS0QsSUFBQUgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXlELENBQUEsR0FBQXpELE9BQUE7VUFNTyxZQUhQOzs7VUFHa0IsTUFBT3dCLGVBQW1CLFNBQVF6QixNQUFBLENBQUFJLGFBQWlDO1lBQ3BGLE9BQU8sQ0FBQXVELFNBQVUsR0FBc0MsSUFBSUMsR0FBRyxFQUFFO1lBQ2hFQyxLQUFLLEdBQThCLElBQUlELEdBQUcsRUFBRTtZQUU1QyxDQUFBbEIsSUFBSztZQUVMekIsWUFBWXlCLElBQVksRUFBRXhCLFVBQWU7Y0FDeEMsS0FBSyxDQUFDO2dCQUFFQTtjQUFVLENBQUUsQ0FBQztjQUNyQixJQUFJLENBQUMsQ0FBQXdCLElBQUssR0FBR0EsSUFBSTtjQUNqQixJQUFJLENBQUNvQixLQUFLLEdBQUcsSUFBSTtZQUNsQjtZQUVBbEMsT0FBT0EsQ0FBQ3VCLEVBQWMsRUFBRVIsSUFBUztjQUNoQyxJQUFJLENBQUNRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQ1UsS0FBSyxDQUFDRSxHQUFHLENBQUNaLEVBQUUsQ0FBQyxFQUFFO2dCQUMvQixNQUFNYSxLQUFLLEdBQUdyQixJQUFJLEdBQUc7a0JBQUVRLEVBQUU7a0JBQUUsR0FBR1I7Z0JBQUksQ0FBRSxHQUFHO2tCQUFFUSxFQUFFO2tCQUFFakMsVUFBVSxFQUFFLElBQUksQ0FBQ0EsVUFBVTtrQkFBRSxHQUFHeUI7Z0JBQUksQ0FBRTtnQkFDbkYsTUFBTXBDLFFBQVEsR0FBRyxJQUFJbUQsQ0FBQSxDQUFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUF2QixJQUFLLEVBQUVzQixLQUFLLENBQUM7Z0JBQ2hEekQsUUFBUSxDQUFDaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFakIsUUFBUSxJQUFHO2tCQUMxQyxJQUFJLENBQUNzQyxPQUFPLENBQUMsa0JBQWtCLEVBQUV0QyxRQUFRLENBQUM7Z0JBQzNDLENBQUMsQ0FBQztnQkFDRkEsUUFBUSxDQUFDaUIsRUFBRSxDQUFDLGdCQUFnQixFQUFFakIsUUFBUSxJQUFJLElBQUksQ0FBQ3NDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRXRDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwRkEsUUFBUSxDQUFDaUIsRUFBRSxDQUFDLGdCQUFnQixFQUFFakIsUUFBUSxJQUFJLElBQUksQ0FBQ3NDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRXRDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRjRDLEVBQUUsR0FBRzVDLFFBQVEsQ0FBQzRDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQ1UsS0FBSyxDQUFDekIsR0FBRyxDQUFDZSxFQUFFLEVBQUU1QyxRQUFRLENBQUM7O2NBRzdCLE1BQU0yRCxJQUFJLEdBQUcsSUFBSSxDQUFDTCxLQUFLLENBQUNNLEdBQUcsQ0FBQ2hCLEVBQUUsQ0FBYTtjQUMzQyxJQUFJUixJQUFJLEVBQUU7Z0JBQ1QsSUFBSXFCLEtBQUssR0FBR3JCLElBQUk7Z0JBQ2hCLElBQUksQ0FBQ0EsSUFBSSxDQUFDUSxFQUFFLEVBQUU7a0JBQ2IsT0FBT2EsS0FBSyxDQUFDYixFQUFFOztnQkFHaEJlLElBQUksQ0FBQy9CLFNBQVMsQ0FBQ1EsSUFBSSxDQUFDOztjQUdyQixPQUFPdUIsSUFBSTtZQUNaO1lBRUEsT0FBT3hDLFdBQVdBLENBQUlwQixNQUFjLEVBQUVxQyxJQUFVO2NBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWdCLFNBQVUsQ0FBQ0ksR0FBRyxDQUFDekQsTUFBTSxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxDQUFBcUQsU0FBVSxDQUFDdkIsR0FBRyxDQUFDOUIsTUFBTSxFQUFFLElBQUltQixlQUFlLENBQUluQixNQUFNLEVBQUVxQyxJQUFJLENBQUMsQ0FBQzs7Y0FFbEUsT0FBTyxJQUFJLENBQUMsQ0FBQWdCLFNBQVUsQ0FBQ1EsR0FBRyxDQUFDN0QsTUFBTSxDQUF1QjtZQUN6RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xERCxJQUFBTixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBbUUsS0FBQSxHQUFBbkUsT0FBQTtVQUVNLE1BQU9nRSxRQUFTLFNBQVFqRSxNQUFBLENBQUFJLGFBQXVCO1lBQ3BELENBQUErQyxFQUFHO1lBQ0gsQ0FBQXBDLFVBQVc7WUFDWCxDQUFBc0QsU0FBVSxHQUFZLEtBQUs7WUFFM0IsQ0FBQXJELEtBQU0sR0FBWSxLQUFLO1lBRXZCLENBQUFQLEtBQU0sR0FBc0MsT0FBTztZQUNuRCxJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlPLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUEsS0FBS0EsQ0FBQ3NELEtBQWM7Y0FDdkIsSUFBSUEsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBdEQsS0FBTSxFQUFFO2NBQzNCLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdzRCxLQUFLO2NBQ25CLElBQUksQ0FBQzFCLFlBQVksRUFBRTtZQUNwQjtZQUVBLElBQUlPLEVBQUVBLENBQUE7Y0FDTCxPQUFPLElBQUksQ0FBQyxDQUFBQSxFQUFHLElBQUksSUFBSSxDQUFDLENBQUFkLE1BQU8sQ0FBQ2MsRUFBRTtZQUNuQztZQUVBLElBQUlwQyxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLENBQUFzQixNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxJQUFJZ0IsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFnQixTQUFVO1lBQ3ZCO1lBRUEsSUFBSWhCLE9BQU9BLENBQUNpQixLQUFjO2NBQ3pCLElBQUlBLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQUQsU0FBVSxFQUFFO2NBQy9CLElBQUksQ0FBQyxDQUFBQSxTQUFVLEdBQUdDLEtBQUs7Y0FFdkIsSUFBSSxDQUFDekIsT0FBTyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFBUixNQUFPLENBQUM7Y0FDNUMsSUFBSSxDQUFDTyxZQUFZLEVBQUU7WUFDcEI7WUFDQSxDQUFBdEMsTUFBTztZQUVQVyxZQUFZWCxNQUFNLEVBQUU7Y0FBRVksVUFBVTtjQUFFLEdBQUd5QjtZQUFJLENBQUUsR0FBRztjQUFFUSxFQUFFLEVBQUVvQixTQUFTO2NBQUVyRCxVQUFVLEVBQUUsRUFBRTtjQUFFSCxVQUFVLEVBQUV3RDtZQUFTLENBQUU7Y0FDckcsS0FBSyxDQUFDO2dCQUFFckQsVUFBVSxFQUFFQSxVQUFVLElBQUk7Y0FBRSxDQUFFLENBQUM7Y0FFdkMsSUFBSSxDQUFDLENBQUFaLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixNQUFNO2dCQUFFNkM7Y0FBRSxDQUFFLEdBQUdSLElBQUk7Y0FDbkIsSUFBSSxDQUFDLENBQUE1QixVQUFXLEdBQUc0QixJQUFJLEVBQUU1QixVQUFVLEdBQUc0QixJQUFJLENBQUM1QixVQUFVLEdBQUcsSUFBQXFELEtBQUEsQ0FBQUksRUFBTSxHQUFFO2NBRWhFLElBQUksQ0FBQyxDQUFBckIsRUFBRyxHQUFHQSxFQUFFO2NBQ2IsSUFBSSxDQUFDLENBQUFuQyxLQUFNLEdBQUcsQ0FBQ21DLEVBQUU7Y0FDakIsSUFBSSxDQUFDLENBQUFkLE1BQU8sR0FBRztnQkFBRSxHQUFHTSxJQUFJO2dCQUFFUSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUFBO2NBQUcsQ0FBRTtjQUN4QyxJQUFJLENBQUMsQ0FBQTFDLEtBQU0sR0FBRyxJQUFJLENBQUMsQ0FBQTBDLEVBQUcsR0FBRyxXQUFXLEdBQUcsT0FBTztjQUM5QyxJQUFJLENBQUNoQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUFFLE1BQU8sQ0FBQztZQUM3QjtZQUVRb0MsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFSixLQUFLO2NBQzdCLElBQUksQ0FBQyxDQUFBakMsTUFBTyxDQUFDcUMsR0FBRyxDQUFDLEdBQUdKLEtBQUs7WUFDMUI7WUFFQW5DLFNBQVNBLENBQUNRLElBQUksRUFBRWdDLFNBQVMsR0FBRyxLQUFLO2NBQ2hDLElBQUksQ0FBQ2hDLElBQUksRUFBRSxPQUFPLEtBQUs7Y0FDdkIsTUFBTWlDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQW5FLEtBQU07Y0FDN0IsSUFBSWtFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQWxFLEtBQU0sR0FBRyxXQUFXO2NBQ3hDLElBQUl1QyxPQUFPLEdBQUcsS0FBSztjQUVuQixLQUFLLE1BQU0wQixHQUFHLElBQUkvQixJQUFJLEVBQUU7Z0JBQ3ZCLElBQUlrQyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNyQyxJQUFJLEVBQUUrQixHQUFHLENBQUMsRUFBRTtrQkFDcEQsTUFBTXhDLFFBQVEsR0FBR3dDLEdBQUc7a0JBQ3BCLE1BQU1KLEtBQUssR0FBRzNCLElBQUksQ0FBQ1QsUUFBUSxDQUFDO2tCQUM1QixJQUFJb0MsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBakMsTUFBTyxDQUFDSCxRQUFRLENBQUMsRUFBRTtrQkFFdEMsSUFBSSxDQUFDdUMsV0FBVyxDQUFDdkMsUUFBUSxFQUFFb0MsS0FBSyxDQUFDO2tCQUNqQ3RCLE9BQU8sR0FBRyxJQUFJOzs7Y0FJaEIsSUFBSTRCLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQW5FLEtBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQUEsS0FBTSxLQUFLLFdBQVcsRUFBRTtnQkFDN0QsSUFBSSxDQUFDb0MsT0FBTyxDQUFDLGtCQUFrQixFQUFFO2tCQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFSO2dCQUFPLENBQUUsQ0FBQztnQkFDckQsT0FBT1csT0FBTzs7Y0FFZixJQUFJLENBQUNBLE9BQU8sRUFBRSxPQUFPQSxPQUFPO2NBRTVCLElBQUksQ0FBQ0gsT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFBRVIsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBQTtjQUFPLENBQUUsQ0FBQztjQUNoRCxJQUFJLENBQUNRLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtnQkFBRSxHQUFHLElBQUksQ0FBQyxDQUFBUjtjQUFPLENBQUUsQ0FBQztjQUVuRCxPQUFPVyxPQUFPO1lBQ2Y7WUFFQWpCLFNBQVNBLENBQUE7Y0FDUixPQUFPO2dCQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFNO2NBQU8sQ0FBRTtZQUMzQjs7VUFDQW9CLE9BQUEsQ0FBQVEsUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7OztVRm5HRDs7VUFFQVksTUFBQSxDQUFBSSxjQUFBLENBQUF4QixPQUFBO1lBQ0FhLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUdKQTs7VUFFQU8sTUFBQSxDQUFBSSxjQUFBLENBQUF4QixPQUFBO1lBQ0FhLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==