System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.2/entities/item", "@beyond-js/reactive@2.1.2/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Collection, ICollectionProvider, ILoadSpecs, __beyond_pkg, hmr;
  _export({
    Collection: void 0,
    ICollectionProvider: void 0,
    ILoadSpecs: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive212EntitiesItem) {
      dependency_1 = _beyondJsReactive212EntitiesItem;
    }, function (_beyondJsReactive212Model) {
      dependency_2 = _beyondJsReactive212Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["uuid", "11.1.0"], ["zod", "3.24.2"], ["react", "18.3.1"], ["@beyond-js/reactive", "2.1.2"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@2.1.2/entities/collection"
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
        hash: 2203008956,
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
            total = 0;
            next = null;
            get isCollection() {
              return true;
            }
            /**
             * Name of the parameter used for pagination cursor (default: "next").
             * Can be configured via the constructor using `nextParamName`.
             */
            #nextParamName = 'next';
            #defaultLimit;
            /**
             * Get the total number of items available (if provided by the provider).
             */
            getTotal() {
              return this.total;
            }
            /**
             * Get the value of next page (if provided by the provider).
             */
            getNext() {
              return this.next;
            }
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
              item,
              defaultLimit = 15,
              nextParamName = 'next'
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
              this.#defaultLimit = defaultLimit;
              if (nextParamName) this.#nextParamName = nextParamName;
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
            /**
             * Load items from the configured provider.
             * If {@link ILoadSpecs.limit} is omitted, the collection's `defaultLimit`
             * (configured in the constructor) is used.
             *
             * Pagination is handled internally: if the collection has a pagination cursor ("next"),
             * it will be added to the request using the parameter name defined by `nextParamName`.
             * You do not need to pass the `next` parameter manually.
             */
            async load(args = {}) {
              // Ensure pagination defaults
              if (typeof args.limit !== 'number') args.limit = this.#defaultLimit;
              if (this.next) args[this.#nextParamName] = this.next;
              this.#filters = args.where ?? {};
              this.fetching = true;
              if (!this.#provider || typeof this.#provider.list !== 'function') {
                throw new Error('DataProvider is not defined or does not implement the list() method.');
              }
              try {
                const data = await this.#provider.list(args);
                let entries;
                const shouldUpdate = !!args.update;
                if (Array.isArray(data)) {
                  entries = data;
                  this.total = 0;
                  this.next = null;
                  this.setItems(entries, true);
                } else if (data && Array.isArray(data.items)) {
                  entries = data.items;
                  if (typeof data.total === 'number') this.total = data.total;
                  if ('next' in data) this.next = data.next;
                  this.setItems(entries, !shouldUpdate);
                } else {
                  throw new Error('DataProvider.list() must return an array or an object with an "entries" array.');
                }
                this.trigger('load', {
                  items: entries,
                  total: this.total,
                  next: this.next
                });
                return entries;
              } catch (error) {
                throw error;
              } finally {
                this.fetching = false;
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
            addItems(data) {
              this.setItems(data);
              this.trigger('items.changed', {
                items: this.#map
              });
              this.trigger('change');
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
                this.trigger('items.changed', {
                  item: newItem
                });
                this.trigger('change');
              }
            }
            async delete(ids) {
              const toDelete = Array.isArray(ids) ? ids : [ids];
              const existingItems = toDelete.map(id => this.#map.get(id)).filter(Boolean);
              if (this.#provider && typeof this.#provider.deleteMany === 'function') {
                await this.#provider.deleteMany(toDelete);
              }
              return await Promise.all(existingItems.map(item => item.delete({
                skipProvider: true
              })));
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
        hash: 3018774832,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbSIsInJlcXVpcmUiLCJfbW9kZWwiLCJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsInRvdGFsIiwibmV4dCIsImlzQ29sbGVjdGlvbiIsIm5leHRQYXJhbU5hbWUiLCJkZWZhdWx0TGltaXQiLCJnZXRUb3RhbCIsImdldE5leHQiLCJlbnRpdHkiLCJwcm92aWRlciIsIml0ZW0iLCJJdGVtIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJmaWx0ZXJzIiwicmVnaXN0cnkiLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwiUmVnaXN0cnlGYWN0b3J5IiwiZ2V0SW5zdGFuY2UiLCJvbiIsIm9uTmV3UmVnaXN0cnkiLCJiaW5kIiwib25SZWdpc3RyeURlbGV0ZWQiLCJsb2FkIiwiYXJncyIsImxpbWl0Iiwid2hlcmUiLCJmZXRjaGluZyIsImxpc3QiLCJkYXRhIiwiZW50cmllcyIsInNob3VsZFVwZGF0ZSIsInVwZGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsInNldEl0ZW1zIiwidHJpZ2dlciIsImVycm9yIiwiY2xlYXIiLCJjb25zb2xlIiwid2FybiIsImZvckVhY2giLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwicGFyZW50IiwiYWRkSXRlbXMiLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0SXRlbVByb3BlcnRpZXMiLCJwdXNoIiwibWF0Y2hlc0ZpbHRlcnMiLCJuZXdJdGVtIiwiZGVsZXRlIiwiaWRzIiwidG9EZWxldGUiLCJleGlzdGluZ0l0ZW1zIiwiZmlsdGVyIiwiQm9vbGVhbiIsImRlbGV0ZU1hbnkiLCJQcm9taXNlIiwiYWxsIiwic2tpcFByb3ZpZGVyIiwiZXZhbHVhdGVDb25kaXRpb24iLCJwcm9wZXJ0eSIsImNyaXRlcmlhIiwicmVnaXN0cnlWYWx1ZSIsIk9iamVjdCIsImV2ZXJ5Iiwib3BlcmF0b3IiLCJ2YWx1ZSIsImluY2x1ZGVzIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwiZXZhbHVhdGVDb25kaXRpb25zIiwiY29uZGl0aW9ucyIsImxvZ2ljIiwiY29uZGl0aW9uIiwiQU5EIiwiT1IiLCJrZXkiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUdPO1VBQVUsTUFBT0UsVUFHdEIsU0FBUUQsTUFBQSxDQUFBRSxhQUErQjtZQUNoQ0MsS0FBSyxHQUFXLENBQUM7WUFDakJDLElBQUksR0FBbUIsSUFBSTtZQUNuQyxJQUFJQyxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJO1lBQ1o7WUFDQTs7OztZQUlBLENBQUFDLGFBQWMsR0FBRyxNQUFNO1lBQ3ZCLENBQUFDLFlBQWE7WUFFYjs7O1lBR09DLFFBQVFBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQ0wsS0FBSztZQUNsQjtZQUVBOzs7WUFHT00sT0FBT0EsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2pCO1lBQ0EsQ0FBQU0sTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBQ0EsQ0FBQUMsUUFBUztZQUVULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsT0FBT04sWUFBWSxHQUFHLElBQUk7WUFFMUIsQ0FBQU8sSUFBSztZQUNMLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBRCxJQUFLO1lBQ2xCO1lBRUEsQ0FBQUUsR0FBSSxHQUFtQixJQUFJQyxHQUFHLEVBQUU7WUFDaEMsSUFBSUQsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUk7WUFDakI7WUFD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