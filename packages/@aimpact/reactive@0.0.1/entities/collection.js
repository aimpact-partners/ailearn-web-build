System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/reactive@0.0.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Collection, ICollectionProvider, __beyond_pkg, hmr;
  _export({
    Collection: void 0,
    ICollectionProvider: void 0
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
        hash: 2757126187,
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
        hash: 4046425325,
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
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Collection') && _export("Collection", Collection = require ? require('./index').Collection : value);
        (require || prop === 'ICollectionProvider') && _export("ICollectionProvider", ICollectionProvider = require ? require('./types').ICollectionProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbSIsInJlcXVpcmUiLCJfbW9kZWwiLCJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsImVudGl0eSIsInByb3ZpZGVyIiwiaXNDb2xsZWN0aW9uIiwiaXRlbSIsIkl0ZW0iLCJtYXAiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsImZpbHRlcnMiLCJyZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiRXJyb3IiLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsIm9uIiwib25OZXdSZWdpc3RyeSIsImJpbmQiLCJsb2FkIiwiYXJncyIsIndoZXJlIiwibGlzdCIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJzZXRJdGVtcyIsInRyaWdnZXJFdmVudCIsImVycm9yIiwiY29uc29sZSIsImNsZWFyIiwid2FybiIsImZvckVhY2giLCJpbnN0YW5jZSIsInNldCIsImlkIiwibWF0Y2hlc0ZpbHRlcnMiLCJuZXdJdGVtIiwiZXZhbHVhdGVDb25kaXRpb24iLCJwcm9wZXJ0eSIsImNyaXRlcmlhIiwicmVnaXN0cnlWYWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJldmVyeSIsIm9wZXJhdG9yIiwidmFsdWUiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsImV2YWx1YXRlQ29uZGl0aW9ucyIsImNvbmRpdGlvbnMiLCJsb2dpYyIsImNvbmRpdGlvbiIsIkFORCIsIk9SIiwiZmlsdGVyIiwia2V5IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUdPO1VBQVUsTUFBT0UsVUFBMkQsU0FBUUQsTUFBQSxDQUFBRSxhQUUxRjtZ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