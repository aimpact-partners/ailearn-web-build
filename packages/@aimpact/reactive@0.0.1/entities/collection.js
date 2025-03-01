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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["react", "18.3.1"], ["socket.io-client", "4.8.1"], ["uuid", "11.0.3"], ["zod", "3.23.8"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/ailearn-app", "0.3.16"]]);
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
        hash: 1734292049,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbSIsInJlcXVpcmUiLCJfbW9kZWwiLCJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsImVudGl0eSIsInByb3ZpZGVyIiwiaXNDb2xsZWN0aW9uIiwiaXRlbSIsIkl0ZW0iLCJtYXAiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsImZpbHRlcnMiLCJyZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiRXJyb3IiLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsIm9uIiwib25OZXdSZWdpc3RyeSIsImJpbmQiLCJvblJlZ2lzdHJ5RGVsZXRlZCIsImxvYWQiLCJhcmdzIiwid2hlcmUiLCJsaXN0IiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInNldEl0ZW1zIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJjb25zb2xlIiwiY2xlYXIiLCJ3YXJuIiwiZm9yRWFjaCIsImhhcyIsImlkIiwiZ2V0Iiwic2V0IiwiaW5zdGFuY2UiLCJwYXJlbnQiLCJ0cmlnZ2VyIiwiZ2V0UHJvcGVydGllcyIsImdldEl0ZW1Qcm9wZXJ0aWVzIiwicHVzaCIsIm1hdGNoZXNGaWx0ZXJzIiwibmV3SXRlbSIsImRlbGV0ZSIsImV2YWx1YXRlQ29uZGl0aW9uIiwicHJvcGVydHkiLCJjcml0ZXJpYSIsInJlZ2lzdHJ5VmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwiZXZlcnkiLCJvcGVyYXRvciIsInZhbHVlIiwiaW5jbHVkZXMiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJldmFsdWF0ZUNvbmRpdGlvbnMiLCJjb25kaXRpb25zIiwibG9naWMiLCJjb25kaXRpb24iLCJBTkQiLCJPUiIsImZpbHRlciIsImtleSIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBR087VUFBVSxNQUFPRSxVQUEyRCxTQUFRRCxNQUFBLENBQUFFLGFBRTFGO1lBQ0EsQ0FBQUMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBQ0EsQ0FBQUMsUUFBUztZQUVULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsT0FBT0MsWUFBWSxHQUFHLElBQUk7WUFFMUIsQ0FBQUMsSUFBSztZQUNMLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBRCxJQUFLO1lBQ2xCO1lBRUEsQ0FBQUUsR0FBSSxHQUFtQixJQUFJQyxHQUFHLEVBQUU7WUFDaEMsSUFBSUQsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUk7WUFDakI7WUFDQSxJQUFJRSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ0csTUFBTSxFQUFFLENBQUM7WUFDL0I7WUFDQSxDQUFBQyxPQUFRO1lBQ1IsQ0FBQUMsUUFBUztZQUNUQyxZQUFZO2NBQUVYLE1BQU07Y0FBRUMsUUFBUTtjQUFFRTtZQUFJLENBQTRCO2NBQy9ELEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxDQUFBSCxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSUMsUUFBUSxJQUFJLE9BQU9BLFFBQVEsS0FBSyxVQUFVLEVBQUU7Z0JBQy9DLE1BQU0sSUFBSVcsS0FBSyxDQUFDLHNDQUFzQyxDQUFDOztjQUV4RCxJQUFJWCxRQUFRLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLENBQUFBLFFBQVMsR0FBRyxJQUFJQSxRQUFRLENBQUMsSUFBSSxDQUFDOztjQUVwQyxJQUFJLENBQUMsQ0FBQVMsUUFBUyxHQUFHZixLQUFBLENBQUFrQixlQUFlLENBQUNDLFdBQVcsQ0FBSWQsTUFBTSxDQUFDO2NBRXZELElBQUksQ0FBQyxDQUFBVSxRQUFTLENBQUNLLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUNDLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2NBQ3BFLElBQUksQ0FBQyxDQUFBUCxRQUFTLENBQUNLLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUNHLGlCQUFpQixDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Y0FDdEUsSUFBSSxDQUFDLENBQUFkLElBQUssR0FBR0EsSUFBSTtZQUNsQjtZQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0NBLE1BQU1nQixJQUFJQSxDQUFDQyxJQUFvQjtjQUM5QixJQUFJLENBQUMsQ0FBQVgsT0FBUSxHQUFHVyxJQUFJLEVBQUVDLEtBQUssR0FBR0QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtjQUU3QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFwQixRQUFTLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUyxDQUFDcUIsSUFBSSxLQUFLLFVBQVUsRUFBRTtnQkFDakUsTUFBTSxJQUFJVixLQUFLLENBQUMsc0VBQXNFLENBQUM7O2NBR3hGLElBQUk7Z0JBQ0gsTUFBTVcsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF0QixRQUFTLENBQUNxQixJQUFJLENBQUNGLElBQUksQ0FBQztnQkFFNUMsSUFBSUksS0FBSyxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQyxFQUFFO2tCQUN4QixJQUFJLENBQUNHLFFBQVEsQ0FBQ0gsSUFBSSxFQUFFLElBQUksQ0FBQztpQkFDekIsTUFBTTtrQkFDTixNQUFNLElBQUlYLEtBQUssQ0FBQyx1REFBdUQsQ0FBQzs7Z0JBR3pFLElBQUksQ0FBQ2UsWUFBWSxDQUFDLE1BQU0sRUFBRTtrQkFBRXBCLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQUY7Z0JBQUksQ0FBRSxDQUFDO2dCQUMvQyxPQUFPa0IsSUFBSTtlQUNYLENBQUMsT0FBT0ssS0FBSyxFQUFFO2dCQUNmQyxPQUFPLENBQUNELEtBQUssQ0FBQyxxQkFBcUIsRUFBRUEsS0FBSyxDQUFDO2dCQUMzQyxNQUFNQSxLQUFLOztZQUViO1lBRVVGLFFBQVFBLENBQUNILElBQUksRUFBRU8sS0FBSyxHQUFHLEtBQUs7Y0FDckMsSUFBSUEsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBekIsR0FBSSxDQUFDeUIsS0FBSyxFQUFFO2NBQzVCLElBQUksQ0FBQ1AsSUFBSSxFQUFFO2NBQ1gsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pCO2dCQUNBTSxPQUFPLENBQUNFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztnQkFDckM7O2NBRURSLElBQUksQ0FBQ1MsT0FBTyxDQUFDN0IsSUFBSSxJQUFHO2dCQUNuQixJQUFJLElBQUksQ0FBQ0UsR0FBRyxDQUFDNEIsR0FBRyxDQUFDOUIsSUFBSSxDQUFDK0IsRUFBRSxDQUFDLEVBQUU7a0JBQ3pCLElBQUksQ0FBQzdCLEdBQUcsQ0FBQzhCLEdBQUcsQ0FBQ2hDLElBQUksQ0FBQytCLEVBQVksQ0FBc0IsQ0FBQ0UsR0FBRyxDQUFDakMsSUFBSSxDQUFDO2tCQUMvRDs7Z0JBRUQsTUFBTWtDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBbEMsSUFBSyxDQUFDO2tCQUFFbUMsTUFBTSxFQUFFLElBQUk7a0JBQUUsR0FBR25DO2dCQUFJLENBQUUsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLENBQUFFLEdBQUksQ0FBQytCLEdBQUcsQ0FBQ2pDLElBQUksQ0FBQytCLEVBQUUsRUFBRUcsUUFBUSxDQUFDO2NBQ2pDLENBQUMsQ0FBQztZQUNIO1lBRUFELEdBQUdBLENBQUNiLElBQUk7Y0FDUCxLQUFLLENBQUNhLEdBQUcsQ0FBQ2IsSUFBSSxDQUFDO2NBRWYsSUFBSSxDQUFDZ0IsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN0QixPQUFPaEIsSUFBSTtZQUNaO1lBRUFpQixhQUFhQSxDQUFBO2NBQ1o7Y0FDQSxPQUFPO2dCQUFFakMsS0FBSyxFQUFFLElBQUksQ0FBQ0E7Y0FBSyxDQUFFO1lBQzdCO1lBRUFrQyxpQkFBaUJBLENBQUE7Y0FDaEIsTUFBTWxDLEtBQUssR0FBRyxFQUFFO2NBQ2hCLEtBQUssSUFBSUosSUFBSSxJQUFJLElBQUksQ0FBQ0ksS0FBSyxFQUFFO2dCQUM1QkEsS0FBSyxDQUFDbUMsSUFBSSxDQUFFdkMsSUFBYSxDQUFDcUMsYUFBYSxFQUFFLENBQUM7O2NBRTNDLE9BQU9qQyxLQUFLO1lBQ2I7WUFDQTs7Ozs7O1lBTUFTLGFBQWFBLENBQUNOLFFBQTZCO2NBQzFDO2NBQ0EsSUFBSSxJQUFJLENBQUNpQyxjQUFjLENBQUNqQyxRQUFRLENBQUMsRUFBRTtnQkFDbEM7Z0JBQ0EsTUFBTWtDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBekMsSUFBSyxDQUFDTyxRQUFRLENBQUM7Z0JBRXhDO2dCQUNBLElBQUksQ0FBQyxDQUFBTCxHQUFJLENBQUMrQixHQUFHLENBQUMxQixRQUFRLENBQUN3QixFQUFFLEVBQUVVLE9BQU8sQ0FBQztnQkFFbkM7Z0JBQ0EsSUFBSSxDQUFDakIsWUFBWSxDQUFDLGVBQWUsRUFBRTtrQkFBRXhCLElBQUksRUFBRXlDO2dCQUFPLENBQUUsQ0FBQztnQkFDckQsSUFBSSxDQUFDakIsWUFBWSxDQUFDLFFBQVEsQ0FBQzs7WUFFN0I7WUFFQVQsaUJBQWlCQSxDQUFDUixRQUFRO2NBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQUwsR0FBSSxDQUFDNEIsR0FBRyxDQUFDdkIsUUFBUSxDQUFDd0IsRUFBRSxDQUFDLEVBQUU7Y0FDakMsSUFBSSxDQUFDLENBQUE3QixHQUFJLENBQUN3QyxNQUFNLENBQUNuQyxRQUFRLENBQUN3QixFQUFFLENBQUM7Y0FFN0IsSUFBSSxDQUFDSyxPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ3RCLElBQUksQ0FBQ0EsT0FBTyxDQUFDLGVBQWUsQ0FBQztZQUM5QjtZQUNBOzs7Ozs7O1lBT1FJLGNBQWNBLENBQUNqQyxRQUE2QjtjQUNuRCxNQUFNRCxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUFBLE9BQVEsRUFBRVksS0FBSztjQUNwQyxJQUFJLENBQUNaLE9BQU8sRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDO2NBRTNCO2NBQ0EsTUFBTXFDLGlCQUFpQixHQUFHQSxDQUFDQyxRQUFnQixFQUFFQyxRQUE2QixLQUFhO2dCQUN0RixNQUFNQyxhQUFhLEdBQUd2QyxRQUFRLENBQUNxQyxRQUFRLENBQUM7Z0JBQ3hDLE9BQU9HLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSCxRQUFRLENBQUMsQ0FBQ0ksS0FBSyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFFQyxLQUFLLENBQUMsS0FBSTtrQkFDM0QsUUFBUUQsUUFBUTtvQkFDZixLQUFLLFFBQVE7c0JBQ1osT0FBT0osYUFBYSxLQUFLSyxLQUFLO29CQUMvQixLQUFLLEtBQUs7c0JBQ1QsT0FBT0wsYUFBYSxLQUFLSyxLQUFLO29CQUMvQixLQUFLLElBQUk7c0JBQ1IsT0FBTzlCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDNkIsS0FBSyxDQUFDLElBQUlBLEtBQUssQ0FBQ0MsUUFBUSxDQUFDTixhQUFhLENBQUM7b0JBQzdELEtBQUssT0FBTztzQkFDWCxPQUFPLENBQUN6QixLQUFLLENBQUNDLE9BQU8sQ0FBQzZCLEtBQUssQ0FBQyxJQUFJLENBQUNBLEtBQUssQ0FBQ0MsUUFBUSxDQUFDTixhQUFhLENBQUM7b0JBQy9ELEtBQUssVUFBVTtzQkFDZCxPQUFPLE9BQU9BLGFBQWEsS0FBSyxRQUFRLElBQUlBLGFBQWEsQ0FBQ00sUUFBUSxDQUFDRCxLQUFLLENBQUM7b0JBQzFFLEtBQUssWUFBWTtzQkFDaEIsT0FBTyxPQUFPTCxhQUFhLEtBQUssUUFBUSxJQUFJQSxhQUFhLENBQUNPLFVBQVUsQ0FBQ0YsS0FBSyxDQUFDO29CQUM1RSxLQUFLLFVBQVU7c0JBQ2QsT0FBTyxPQUFPTCxhQUFhLEtBQUssUUFBUSxJQUFJQSxhQUFhLENBQUNRLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDO29CQUMxRSxLQUFLLElBQUk7c0JBQ1IsT0FBT0wsYUFBYSxHQUFHSyxLQUFLO29CQUM3QixLQUFLLEtBQUs7c0JBQ1QsT0FBT0wsYUFBYSxJQUFJSyxLQUFLO29CQUM5QixLQUFLLElBQUk7c0JBQ1IsT0FBT0wsYUFBYSxHQUFHSyxLQUFLO29CQUM3QixLQUFLLEtBQUs7c0JBQ1QsT0FBT0wsYUFBYSxJQUFJSyxLQUFLO29CQUM5QjtzQkFDQ3pCLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLDRCQUE0QnNCLFFBQVEsRUFBRSxDQUFDO3NCQUNwRCxPQUFPLEtBQUs7O2dCQUVmLENBQUMsQ0FBQztjQUNILENBQUM7Y0FFRDtjQUNBLE1BQU1LLGtCQUFrQixHQUFHQSxDQUFDQyxVQUFpQyxFQUFFQyxLQUF1QixLQUNyRkQsVUFBVSxDQUFDQyxLQUFLLENBQUMsQ0FBQ0MsU0FBUyxJQUMxQlgsTUFBTSxDQUFDQyxPQUFPLENBQUNVLFNBQVMsQ0FBQyxDQUFDVCxLQUFLLENBQUMsQ0FBQyxDQUFDTCxRQUFRLEVBQUVDLFFBQVEsQ0FBQyxLQUFLRixpQkFBaUIsQ0FBQ0MsUUFBUSxFQUFFQyxRQUFRLENBQUMsQ0FBQyxDQUNoRztjQUVGO2NBQ0EsSUFBSXZDLE9BQU8sQ0FBQ3FELEdBQUcsSUFBSSxDQUFDSixrQkFBa0IsQ0FBQ2pELE9BQU8sQ0FBQ3FELEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFPLEtBQUs7Y0FFMUU7Y0FDQSxJQUFJckQsT0FBTyxDQUFDc0QsRUFBRSxJQUFJLENBQUNMLGtCQUFrQixDQUFDakQsT0FBTyxDQUFDc0QsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLE9BQU8sS0FBSztjQUV2RTtjQUNBLE9BQU9iLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDMUMsT0FBTyxDQUFDLENBQzVCdUQsTUFBTSxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUtBLEdBQUcsS0FBSyxLQUFLLElBQUlBLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FDaERiLEtBQUssQ0FBQyxDQUFDLENBQUNMLFFBQVEsRUFBRUMsUUFBUSxDQUFDLEtBQUtGLGlCQUFpQixDQUFDQyxRQUFRLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pFOzs7Ozs7Ozs7Ozs7O1VDOU9EOztVQUVBRSxNQUFBLENBQUFnQixjQUFBLENBQUFDLE9BQUE7WUFDQWIsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119