System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/reactive@0.0.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Collection, ICollectionProvider, ILoadSpecs, __beyond_pkg, hmr;
  _export({
    Collection: void 0,
    ICollectionProvider: void 0,
    ILoadSpecs: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_1 = _aimpactReactive001EntitiesItem;
    }, function (_aimpactReactive001Model) {
      dependency_2 = _aimpactReactive001Model;
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
          "vspecifier": "@aimpact/reactive@0.0.1/entities/collection"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/reactive/entities/item', dependency_1], ['@aimpact/reactive/model', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2827034978,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Collection = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _model = require("@aimpact/reactive/model");
          /*bundle*/
          class Collection extends _model.ReactiveModel {
            #entity;
            get entity() {
              return this.#entity;
            }
            #provider;
            get provider() {
              return this.#provider;
            }
            static isCollection = true;
            #item;
            get Item() {
              return this.#item;
            }
            #map = new Map();
            get map() {
              return this.#map;
            }
            get items() {
              return [...this.#map.values()];
            }
            #filters;
            #registry;
            constructor({
              entity,
              provider,
              item
            }) {
              super();
              this.#entity = entity;
              if (provider && typeof provider !== 'function') {
                throw new Error('Provider must be a class/constructor');
              }
              if (provider) {
                this.#provider = new provider(this);
              }
              this.#registry = _item.RegistryFactory.getInstance(entity);
              this.#registry.on('record.published', this.onNewRegistry.bind(this));
              this.#registry.on('record.deleted', this.onRegistryDeleted.bind(this));
              this.#item = item;
            }
            /**
             * Loads and processes data from an external source via the `DataProvider`.
             * This method uses the configured `provider` to fetch data and apply the specified filters.
             * Filtering parameters are defined in the `args` argument, and the specific filtering logic
             * is implemented by the `DataProvider`.
             *
             * ### Parameters:
             * - `args.where` (optional): Object defining search filters with the following structure:
             *   - `{ property: { operator: value } }`
             *   - Supported operators include:
             *     - `equals`: Exact match with the property value.
             *     - `not`: Value different from the specified value.
             *     - `in`: The property value matches one of the values in the array.
             *     - `notIn`: The property value does not match any of the values in the array.
             *     - `contains`: The property value contains the specified substring.
             *     - `startsWith`: The property value starts with the specified substring.
             *     - `endsWith`: The property value ends with the specified substring.
             *     - `gt` (greater than): The property value is greater than the specified value.
             *     - `gte` (greater than or equal): The property value is greater than or equal to the specified value.
             *     - `lt` (less than): The property value is less than the specified value.
             *     - `lte` (less than or equal): The property value is less than or equal to the specified value.
             *
             * - `args.orderBy` (optional): Object to define the sorting of results. Example:
             *   - `{ property: "asc" | "desc" }` where `"asc"` is ascending order and `"desc"` is descending order.
             *
             * - `args.skip` and `args.take` (optional): Parameters for in-memory pagination.
             *   - `skip`: Number of items to skip from the beginning.
             *   - `take`: Number of items to load after skipping the defined number in `skip`.
             *
             * ### Exceptions:
             * - Throws an error if the `DataProvider` is not defined or does not implement the `load` method.
             * - Throws an error if `DataProvider.load()` does not return an array.
             *
             * @param {Object} args - Object containing filtering and configuration parameters.
             * @returns {Promise<void>} - A promise that resolves when data loading and processing are complete.
             * @throws {Error} - If data cannot be loaded or processed.
             */
            async load(args) {
              this.#filters = args?.where ? args.where : {};
              if (!this.#provider || typeof this.#provider.list !== 'function') {
                throw new Error('DataProvider is not defined or does not implement the list() method.');
              }
              try {
                const data = await this.#provider.list(args);
                if (Array.isArray(data)) {
                  this.setItems(data, true);
                } else {
                  throw new Error('DataProvider.load() did not return an array of items.');
                }
                this.triggerEvent('load', {
                  items: this.#map
                });
                return data;
              } catch (error) {
                console.error('Error loading data:', error);
                throw error;
              }
            }
            setItems(data, clear = false) {
              if (clear) this.#map.clear();
              if (!data) return;
              if (!Array.isArray(data)) {
                // console.trace(data);
                console.warn('Data must be an array');
                return;
              }
              data.forEach(item => {
                const instance = new this.#item(item);
                this.#map.set(item.id, instance);
              });
            }
            /**
             * Validates a new registry against the collection's filters and, if it matches,
             * creates a new item with the registry data and adds it to the data map.
             *
             * @param {object} registry - The new registry data to be checked and potentially added.
             */
            onNewRegistry(registry) {
              // Check if the registry matches the filters
              if (this.matchesFilters(registry)) {
                // Create a new item instance with the registry data
                const newItem = new this.#item(registry);
                // Add the new item to the map, using its id as the key
                this.#map.set(registry.id, newItem);
                // Optionally trigger an event to notify that a new item was added
                this.triggerEvent('change.items', {
                  item: newItem
                });
                this.triggerEvent('change');
              }
            }
            onRegistryDeleted(registry) {
              if (!this.#map.has(registry.id)) return;
              this.#map.delete(registry.id);
              this.trigger('change');
              this.trigger('items.updated');
            }
            /**
             * Validates if a registry matches the stored filters, including support for AND and OR logical operators.
             * The #filters object contains filtering criteria that are evaluated here.
             *
             * @param {object} registry - The data of the registry to be checked.
             * @returns {boolean} - Returns true if the registry matches all filter criteria; otherwise, false.
             */
            matchesFilters(registry) {
              const filters = this.#filters?.where;
              if (!filters) return true; // If no filters are set, assume it matches
              // Helper function to evaluate a single condition
              const evaluateCondition = (property, criteria) => {
                const registryValue = registry[property];
                return Object.entries(criteria).every(([operator, value]) => {
                  switch (operator) {
                    case 'equals':
                      return registryValue === value;
                    case 'not':
                      return registryValue !== value;
                    case 'in':
                      return Array.isArray(value) && value.includes(registryValue);
                    case 'notIn':
                      return !Array.isArray(value) || !value.includes(registryValue);
                    case 'contains':
                      return typeof registryValue === 'string' && registryValue.includes(value);
                    case 'startsWith':
                      return typeof registryValue === 'string' && registryValue.startsWith(value);
                    case 'endsWith':
                      return typeof registryValue === 'string' && registryValue.endsWith(value);
                    case 'gt':
                      return registryValue > value;
                    case 'gte':
                      return registryValue >= value;
                    case 'lt':
                      return registryValue < value;
                    case 'lte':
                      return registryValue <= value;
                    default:
                      console.warn(`Unknown filter operator: ${operator}`);
                      return false;
                  }
                });
              };
              // General function to evaluate conditions with logical operators
              const evaluateConditions = (conditions, logic) => conditions[logic](condition => Object.entries(condition).every(([property, criteria]) => evaluateCondition(property, criteria)));
              // Evaluate AND conditions
              if (filters.AND && !evaluateConditions(filters.AND, 'every')) return false;
              // Evaluate OR conditions
              if (filters.OR && !evaluateConditions(filters.OR, 'some')) return false;
              // Evaluate direct conditions (outside of AND/OR)
              return Object.entries(filters).filter(([key]) => key !== 'AND' && key !== 'OR').every(([property, criteria]) => evaluateCondition(property, criteria));
            }
          }
          exports.Collection = Collection;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2356927788,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Collection",
        "name": "Collection"
      }, {
        "im": "./types",
        "from": "ICollectionProvider",
        "name": "ICollectionProvider"
      }, {
        "im": "./types",
        "from": "ILoadSpecs",
        "name": "ILoadSpecs"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Collection') && _export("Collection", Collection = require ? require('./index').Collection : value);
        (require || prop === 'ICollectionProvider') && _export("ICollectionProvider", ICollectionProvider = require ? require('./types').ICollectionProvider : value);
        (require || prop === 'ILoadSpecs') && _export("ILoadSpecs", ILoadSpecs = require ? require('./types').ILoadSpecs : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbSIsInJlcXVpcmUiLCJfbW9kZWwiLCJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsImVudGl0eSIsInByb3ZpZGVyIiwiaXNDb2xsZWN0aW9uIiwiaXRlbSIsIkl0ZW0iLCJtYXAiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsImZpbHRlcnMiLCJyZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiRXJyb3IiLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsIm9uIiwib25OZXdSZWdpc3RyeSIsImJpbmQiLCJvblJlZ2lzdHJ5RGVsZXRlZCIsImxvYWQiLCJhcmdzIiwid2hlcmUiLCJsaXN0IiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInNldEl0ZW1zIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJjb25zb2xlIiwiY2xlYXIiLCJ3YXJuIiwiZm9yRWFjaCIsImluc3RhbmNlIiwic2V0IiwiaWQiLCJtYXRjaGVzRmlsdGVycyIsIm5ld0l0ZW0iLCJoYXMiLCJkZWxldGUiLCJ0cmlnZ2VyIiwiZXZhbHVhdGVDb25kaXRpb24iLCJwcm9wZXJ0eSIsImNyaXRlcmlhIiwicmVnaXN0cnlWYWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJldmVyeSIsIm9wZXJhdG9yIiwidmFsdWUiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsImV2YWx1YXRlQ29uZGl0aW9ucyIsImNvbmRpdGlvbnMiLCJsb2dpYyIsImNvbmRpdGlvbiIsIkFORCIsIk9SIiwiZmlsdGVyIiwia2V5IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7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