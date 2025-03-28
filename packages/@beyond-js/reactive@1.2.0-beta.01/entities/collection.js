System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@1.2.0-beta.01/entities/item", "@beyond-js/reactive@1.2.0-beta.01/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Collection, ICollectionProvider, ILoadSpecs, __beyond_pkg, hmr;
  _export({
    Collection: void 0,
    ICollectionProvider: void 0,
    ILoadSpecs: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive120Beta01EntitiesItem) {
      dependency_1 = _beyondJsReactive120Beta01EntitiesItem;
    }, function (_beyondJsReactive120Beta01Model) {
      dependency_2 = _beyondJsReactive120Beta01Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["uuid", "11.1.0"], ["zod", "3.24.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/local", "0.1.3"], ["react", "18.3.1"], ["@beyond-js/reactive", "1.2.0-beta.01"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.2.0-beta.01/entities/collection"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/item', dependency_1], ['@beyond-js/reactive/model', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3935684374,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Collection = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _model = require("@beyond-js/reactive/model");
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
                if (this.map.has(item.id)) {
                  this.map.get(item.id).set(item);
                  return;
                }
                const instance = new this.#item({
                  parent: this,
                  ...item
                });
                this.#map.set(item.id, instance);
              });
            }
            set(data) {
              super.set(data);
              this.trigger('change');
              return data;
            }
            getProperties() {
              //@ts-ignore;
              return {
                items: this.items
              };
            }
            getItemProperties() {
              const items = [];
              for (let item of this.items) {
                items.push(item.getProperties());
              }
              return items;
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
                this.triggerEvent('items.changed', {
                  item: newItem
                });
                this.triggerEvent('change');
              }
            }
            onRegistryDeleted(registry) {
              if (!this.#map.has(registry.id)) return;
              this.#map.delete(registry.id);
              this.trigger('change');
              this.trigger('items.changed');
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
        hash: 2758614012,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbSIsInJlcXVpcmUiLCJfbW9kZWwiLCJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsImVudGl0eSIsInByb3ZpZGVyIiwiaXNDb2xsZWN0aW9uIiwiaXRlbSIsIkl0ZW0iLCJtYXAiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsImZpbHRlcnMiLCJyZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiRXJyb3IiLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsIm9uIiwib25OZXdSZWdpc3RyeSIsImJpbmQiLCJvblJlZ2lzdHJ5RGVsZXRlZCIsImxvYWQiLCJhcmdzIiwid2hlcmUiLCJsaXN0IiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInNldEl0ZW1zIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJjb25zb2xlIiwiY2xlYXIiLCJ3YXJuIiwiZm9yRWFjaCIsImhhcyIsImlkIiwiZ2V0Iiwic2V0IiwiaW5zdGFuY2UiLCJwYXJlbnQiLCJ0cmlnZ2VyIiwiZ2V0UHJvcGVydGllcyIsImdldEl0ZW1Qcm9wZXJ0aWVzIiwicHVzaCIsIm1hdGNoZXNGaWx0ZXJzIiwibmV3SXRlbSIsImRlbGV0ZSIsImV2YWx1YXRlQ29uZGl0aW9uIiwicHJvcGVydHkiLCJjcml0ZXJpYSIsInJlZ2lzdHJ5VmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwiZXZlcnkiLCJvcGVyYXRvciIsInZhbHVlIiwiaW5jbHVkZXMiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJldmFsdWF0ZUNvbmRpdGlvbnMiLCJjb25kaXRpb25zIiwibG9naWMiLCJjb25kaXRpb24iLCJBTkQiLCJPUiIsImZpbHRlciIsImtleSIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFLLENBQUM7b0JBQzFFLEtBQUssSUFBSTtzQkFDUixPQUFPTCxhQUFhLEdBQUdLLEtBQUs7b0JBQzdCLEtBQUssS0FBSztzQkFDVCxPQUFPTCxhQUFhLElBQUlLLEtBQUs7b0JBQzlCLEtBQUssSUFBSTtzQkFDUixPQUFPTCxhQUFhLEdBQUdLLEtBQUs7b0JBQzdCLEtBQUssS0FBSztzQkFDVCxPQUFPTCxhQUFhLElBQUlLLEtBQUs7b0JBQzlCO3NCQUNDekIsT0FBTyxDQUFDRSxJQUFJLENBQUMsNEJBQTRCc0IsUUFBUSxFQUFFLENBQUM7c0JBQ3BELE9BQU8sS0FBSzs7Z0JBRWYsQ0FBQyxDQUFDO2NBQ0gsQ0FBQztjQUVEO2NBQ0EsTUFBTUssa0JBQWtCLEdBQUdBLENBQUNDLFVBQWlDLEVBQUVDLEtBQXVCLEtBQ3JGRCxVQUFVLENBQUNDLEtBQUssQ0FBQyxDQUFDQyxTQUFTLElBQzFCWCxNQUFNLENBQUNDLE9BQU8sQ0FBQ1UsU0FBUyxDQUFDLENBQUNULEtBQUssQ0FBQyxDQUFDLENBQUNMLFFBQVEsRUFBRUMsUUFBUSxDQUFDLEtBQUtGLGlCQUFpQixDQUFDQyxRQUFRLEVBQUVDLFFBQVEsQ0FBQyxDQUFDLENBQ2hHO2NBRUY7Y0FDQSxJQUFJdkMsT0FBTyxDQUFDcUQsR0FBRyxJQUFJLENBQUNKLGtCQUFrQixDQUFDakQsT0FBTyxDQUFDcUQsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFLE9BQU8sS0FBSztjQUUxRTtjQUNBLElBQUlyRCxPQUFPLENBQUNzRCxFQUFFLElBQUksQ0FBQ0wsa0JBQWtCLENBQUNqRCxPQUFPLENBQUNzRCxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsT0FBTyxLQUFLO2NBRXZFO2NBQ0EsT0FBT2IsTUFBTSxDQUFDQyxPQUFPLENBQUMxQyxPQUFPLENBQUMsQ0FDNUJ1RCxNQUFNLENBQUMsQ0FBQyxDQUFDQyxHQUFHLENBQUMsS0FBS0EsR0FBRyxLQUFLLEtBQUssSUFBSUEsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUNoRGIsS0FBSyxDQUFDLENBQUMsQ0FBQ0wsUUFBUSxFQUFFQyxRQUFRLENBQUMsS0FBS0YsaUJBQWlCLENBQUNDLFFBQVEsRUFBRUMsUUFBUSxDQUFDLENBQUM7WUFDekU7Ozs7Ozs7Ozs7Ozs7VUMvT0Q7O1VBRUFFLE1BQUEsQ0FBQWdCLGNBQUEsQ0FBQUMsT0FBQTtZQUNBYixLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=