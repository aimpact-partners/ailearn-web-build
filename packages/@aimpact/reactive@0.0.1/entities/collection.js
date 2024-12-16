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
        hash: 4015236147,
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
                  this.#map.clear();
                  data.forEach(item => {
                    const instance = new this.#item(item);
                    this.#map.set(item.id, instance);
                  });
                } else {
                  throw new Error('DataProvider.load() did not return an array of items.');
                }
                this.triggerEvent('load', {
                  items: this.#map
                });
              } catch (error) {
                console.error('Error loading data:', error);
                throw error;
              }
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
        hash: 23095532,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbSIsInJlcXVpcmUiLCJfbW9kZWwiLCJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsImVudGl0eSIsInByb3ZpZGVyIiwiaXRlbSIsIkl0ZW0iLCJtYXAiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsImZpbHRlcnMiLCJyZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiRXJyb3IiLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsIm9uIiwib25OZXdSZWdpc3RyeSIsImJpbmQiLCJsb2FkIiwiYXJncyIsIndoZXJlIiwibGlzdCIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJjbGVhciIsImZvckVhY2giLCJpbnN0YW5jZSIsInNldCIsImlkIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJjb25zb2xlIiwibWF0Y2hlc0ZpbHRlcnMiLCJuZXdJdGVtIiwiZXZhbHVhdGVDb25kaXRpb24iLCJwcm9wZXJ0eSIsImNyaXRlcmlhIiwicmVnaXN0cnlWYWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJldmVyeSIsIm9wZXJhdG9yIiwidmFsdWUiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsIndhcm4iLCJldmFsdWF0ZUNvbmRpdGlvbnMiLCJjb25kaXRpb25zIiwibG9naWMiLCJjb25kaXRpb24iLCJBTkQiLCJPUiIsImZpbHRlciIsImtleSIsImV4cG9ydHMiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFHTztVQUFVLE1BQU9FLFVBQXdFLFNBQVFELE1BQUEsQ0FBQUUsYUFFdkc7WUFDQSxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEs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