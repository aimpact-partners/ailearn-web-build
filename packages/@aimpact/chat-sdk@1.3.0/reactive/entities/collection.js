System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.3.0/reactive/entities/item", "@aimpact/chat-sdk@1.3.0/reactive/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Collection, ICollectionProvider, __beyond_pkg, hmr;
  _export({
    Collection: void 0,
    ICollectionProvider: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk130ReactiveEntitiesItem) {
      dependency_1 = _aimpactChatSdk130ReactiveEntitiesItem;
    }, function (_aimpactChatSdk130ReactiveModel) {
      dependency_2 = _aimpactChatSdk130ReactiveModel;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/ailearn-app", "0.2.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.3.0/reactive/entities/collection"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat-sdk/reactive/entities/item', dependency_1], ['@aimpact/chat-sdk/reactive/model', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4202078905,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Collection = void 0;
          var _item = require("@aimpact/chat-sdk/reactive/entities/item");
          var _model = require("@aimpact/chat-sdk/reactive/model");
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
                throw new Error('DataProvider must be a class/constructor');
              }
              if (provider) {
                this.#provider = new provider(this);
              }
              this.#registry = _item.RegistryFactory.getInstance(entity);
              this.#registry.on('new.registry', this.onNewRegistry.bind(this));
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
              if (!this.#provider || typeof this.#provider.load !== 'function') {
                throw new Error('DataProvider is not defined or does not implement the load() method.');
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
        hash: 3978913746,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbSIsInJlcXVpcmUiLCJfbW9kZWwiLCJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsImVudGl0eSIsInByb3ZpZGVyIiwiaXRlbSIsIkl0ZW0iLCJtYXAiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsImZpbHRlcnMiLCJyZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiRXJyb3IiLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsIm9uIiwib25OZXdSZWdpc3RyeSIsImJpbmQiLCJsb2FkIiwiYXJncyIsIndoZXJlIiwiZGF0YSIsImxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJjbGVhciIsImZvckVhY2giLCJpbnN0YW5jZSIsInNldCIsImlkIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJjb25zb2xlIiwibWF0Y2hlc0ZpbHRlcnMiLCJuZXdJdGVtIiwiZXZhbHVhdGVDb25kaXRpb24iLCJwcm9wZXJ0eSIsImNyaXRlcmlhIiwicmVnaXN0cnlWYWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJldmVyeSIsIm9wZXJhdG9yIiwidmFsdWUiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsIndhcm4iLCJldmFsdWF0ZUNvbmRpdGlvbnMiLCJjb25kaXRpb25zIiwibG9naWMiLCJjb25kaXRpb24iLCJBTkQiLCJPUiIsImZpbHRlciIsImtleSIsImV4cG9ydHMiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFHTztVQUFVLE1BQU9FLFVBQXdFLFNBQVFELE1BQUEsQ0FBQUUsYUFFdkc7WUFDQSxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEs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