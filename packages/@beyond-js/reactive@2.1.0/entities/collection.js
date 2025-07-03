System.register(["@beyond-js/kernel@0.1.12/bundle","zod@3.25.67","@beyond-js/events@0.0.7/events","@beyond-js/reactive@2.1.0/model","uuid@11.1.0","@beyond-js/reactive@2.1.0/entities/item"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["zod","3.25.67"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","2.1.0"],["uuid","11.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('zod@3.25.67', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/reactive@2.1.0/model', dep), dep => dependencies.set('uuid@11.1.0', dep), dep => dependencies.set('@beyond-js/reactive@2.1.0/entities/item', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/reactive/entities/collection.2.1.0.js
var collection_2_1_0_exports = {};
__export(collection_2_1_0_exports, {
  Collection: () => Collection,
  ICollectionProvider: () => ICollectionProvider,
  ILoadSpecs: () => ILoadSpecs,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(collection_2_1_0_exports);

// node_modules/@beyond-js/reactive/entities/collection/entities/collection.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/reactive@2.1.0/entities/item"), 0);
var dependency_2 = __toESM(require("@beyond-js/reactive@2.1.0/model"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@2.1.0/entities/collection"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/reactive/entities/item", dependency_1], ["@beyond-js/reactive/model", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 2604015793,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Collection = void 0;
    var _item = require2("@beyond-js/reactive/entities/item");
    var _model = require2("@beyond-js/reactive/model");
    class Collection2 extends _model.ReactiveModel {
      total = 0;
      next = null;
      #nextParamName = "next";
      #defaultLimit;
      getTotal() {
        return this.total;
      }
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
      #map = /* @__PURE__ */new Map();
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
        nextParamName = "next"
      }) {
        super();
        this.#entity = entity;
        if (provider && typeof provider !== "function") {
          throw new Error("Provider must be a class/constructor");
        }
        if (provider) {
          this.#provider = new provider(this);
        }
        this.#registry = _item.RegistryFactory.getInstance(entity);
        this.#registry.on("record.published", this.onNewRegistry.bind(this));
        this.#registry.on("record.deleted", this.onRegistryDeleted.bind(this));
        this.#item = item;
        this.#defaultLimit = defaultLimit;
        if (nextParamName) this.#nextParamName = nextParamName;
      }
      async load(args = {}) {
        if (typeof args.limit !== "number") args.limit = this.#defaultLimit;
        if (this.next) args[this.#nextParamName] = this.next;
        this.#filters = args.where ?? {};
        if (!this.#provider || typeof this.#provider.list !== "function") {
          throw new Error("DataProvider is not defined or does not implement the list() method.");
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
            if (typeof data.total === "number") this.total = data.total;
            if ("next" in data) this.next = data.next;
            this.setItems(entries, !shouldUpdate);
          } else {
            throw new Error('DataProvider.list() must return an array or an object with an "entries" array.');
          }
          this.trigger("load", {
            items: entries,
            total: this.total,
            next: this.next
          });
          return entries;
        } catch (error) {
          console.error("Error loading data:", error);
          throw error;
        }
      }
      setItems(data, clear = false) {
        if (clear) this.#map.clear();
        if (!data) return;
        if (!Array.isArray(data)) {
          console.warn("Data must be an array");
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
        this.trigger("items.changed", {
          items: this.#map
        });
        this.trigger("change");
      }
      set(data) {
        super.set(data);
        this.trigger("change");
        return data;
      }
      getProperties() {
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
      onNewRegistry(registry) {
        if (this.matchesFilters(registry)) {
          const newItem = new this.#item(registry);
          this.#map.set(registry.id, newItem);
          this.trigger("items.changed", {
            item: newItem
          });
          this.trigger("change");
        }
      }
      async delete(ids) {
        const toDelete = Array.isArray(ids) ? ids : [ids];
        const existingItems = toDelete.map(id => this.#map.get(id)).filter(Boolean);
        if (this.#provider && typeof this.#provider.deleteMany === "function") {
          await this.#provider.deleteMany(toDelete);
        }
        return await Promise.all(existingItems.map(item => item.delete({
          skipProvider: true
        })));
      }
      onRegistryDeleted(registry) {
        if (!this.#map.has(registry.id)) return;
        this.#map.delete(registry.id);
        this.trigger("change");
        this.trigger("items.changed");
      }
      matchesFilters(registry) {
        const filters = this.#filters?.where;
        if (!filters) return true;
        const evaluateCondition = (property, criteria) => {
          const registryValue = registry[property];
          return Object.entries(criteria).every(([operator, value]) => {
            switch (operator) {
              case "equals":
                return registryValue === value;
              case "not":
                return registryValue !== value;
              case "in":
                return Array.isArray(value) && value.includes(registryValue);
              case "notIn":
                return !Array.isArray(value) || !value.includes(registryValue);
              case "contains":
                return typeof registryValue === "string" && registryValue.includes(value);
              case "startsWith":
                return typeof registryValue === "string" && registryValue.startsWith(value);
              case "endsWith":
                return typeof registryValue === "string" && registryValue.endsWith(value);
              case "gt":
                return registryValue > value;
              case "gte":
                return registryValue >= value;
              case "lt":
                return registryValue < value;
              case "lte":
                return registryValue <= value;
              default:
                console.warn(`Unknown filter operator: ${operator}`);
                return false;
            }
          });
        };
        const evaluateConditions = (conditions, logic) => conditions[logic](condition => Object.entries(condition).every(([property, criteria]) => evaluateCondition(property, criteria)));
        if (filters.AND && !evaluateConditions(filters.AND, "every")) return false;
        if (filters.OR && !evaluateConditions(filters.OR, "some")) return false;
        return Object.entries(filters).filter(([key]) => key !== "AND" && key !== "OR").every(([property, criteria]) => evaluateCondition(property, criteria));
      }
    }
    exports.Collection = Collection2;
  }
});
ims.set("./types", {
  hash: 514798120,
  creator: function (require2, exports) {
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
var Collection, ICollectionProvider, ILoadSpecs;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Collection") && (Collection = require2 ? require2("./index").Collection : value);
  (require2 || prop === "ICollectionProvider") && (ICollectionProvider = require2 ? require2("./types").ICollectionProvider : value);
  (require2 || prop === "ILoadSpecs") && (ILoadSpecs = require2 ? require2("./types").ILoadSpecs : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL2NvbGxlY3Rpb24uMi4xLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9jb2xsZWN0aW9uL2VudGl0aWVzL2NvbGxlY3Rpb24uYnJvd3Nlci5tanMiXSwibmFtZXMiOlsiY29sbGVjdGlvbl8yXzFfMF9leHBvcnRzIiwiX19leHBvcnQiLCJDb2xsZWN0aW9uIiwiSUNvbGxlY3Rpb25Qcm92aWRlciIsIklMb2FkU3BlY3MiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiZGVwZW5kZW5jeV8wIiwiX190b0VTTSIsInJlcXVpcmUiLCJkZXBlbmRlbmN5XzEiLCJkZXBlbmRlbmN5XzIiLCJpbXBvcnRfbWV0YSIsIkJ1bmRsZSIsIl9fQnVuZGxlIiwiX19wa2ciLCJ1cmwiLCJwYWNrYWdlIiwiZGVwZW5kZW5jaWVzIiwidXBkYXRlIiwiaW1zIiwiTWFwIiwic2V0IiwiaGFzaCIsImNyZWF0b3IiLCJyZXF1aXJlMiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9tb2RlbCIsIkNvbGxlY3Rpb24yIiwiUmVhY3RpdmVNb2RlbCIsInRvdGFsIiwibmV4dCIsIm5leHRQYXJhbU5hbWUiLCJkZWZhdWx0TGltaXQiLCJnZXRUb3RhbCIsImdldE5leHQiLCJlbnRpdHkiLCJwcm92aWRlciIsImlzQ29sbGVjdGlvbiIsIml0ZW0iLCJJdGVtIiwibWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJmaWx0ZXJzIiwicmVnaXN0cnkiLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwiUmVnaXN0cnlGYWN0b3J5IiwiZ2V0SW5zdGFuY2UiLCJvbiIsIm9uTmV3UmVnaXN0cnkiLCJiaW5kIiwib25SZWdpc3RyeURlbGV0ZWQiLCJsb2FkIiwiYXJncyIsImxpbWl0Iiwid2hlcmUiLCJsaXN0IiwiZGF0YSIsImVudHJpZXMiLCJzaG91bGRVcGRhdGUiLCJBcnJheSIsImlzQXJyYXkiLCJzZXRJdGVtcyIsInRyaWdnZXIiLCJlcnJvciIsImNvbnNvbGUiLCJjbGVhciIsIndhcm4iLCJmb3JFYWNoIiwiaGFzIiwiaWQiLCJnZXQiLCJpbnN0YW5jZSIsInBhcmVudCIsImFkZEl0ZW1zIiwiZ2V0UHJvcGVydGllcyIsImdldEl0ZW1Qcm9wZXJ0aWVzIiwicHVzaCIsIm1hdGNoZXNGaWx0ZXJzIiwibmV3SXRlbSIsImRlbGV0ZSIsImlkcyIsInRvRGVsZXRlIiwiZXhpc3RpbmdJdGVtcyIsImZpbHRlciIsIkJvb2xlYW4iLCJkZWxldGVNYW55IiwiUHJvbWlzZSIsImFsbCIsInNraXBQcm92aWRlciIsImV2YWx1YXRlQ29uZGl0aW9uIiwicHJvcGVydHkiLCJjcml0ZXJpYSIsInJlZ2lzdHJ5VmFsdWUiLCJldmVyeSIsIm9wZXJhdG9yIiwiaW5jbHVkZXMiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJldmFsdWF0ZUNvbmRpdGlvbnMiLCJjb25kaXRpb25zIiwibG9naWMiLCJjb25kaXRpb24iLCJBTkQiLCJPUiIsImtleSIsImRlc2NyaXB0b3IiLCJwcm9jZXNzIiwicHJvcCIsImV2ZW50IiwibGlzdGVuZXIiLCJvZmYiLCJpbml0aWFsaXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx3QkFBQTtBQUFBQyxRQUFBLENBQUFELHdCQUFBO0VBQUFFLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQsd0JBQUE7OztBQ0FBLElBQUFVLFlBQUEsR0FBOEJDLE9BQUEsQ0FBQUMsT0FBQTtBQUM5QixJQUFBQyxZQUFBLEdBQThCRixPQUFBLENBQUFDLE9BQUE7QUFDOUIsSUFBQUUsWUFBQSxHQUE4QkgsT0FBQSxDQUFBQyxPQUFBO0FBRjlCLElBQUFHLFdBQUE7QUFJQSxJQUFNO0VBQUNDLE1BQUEsRUFBUUM7QUFBUSxJQUFJUCxZQUFBO0FBQzNCLElBQU1RLEtBQUEsR0FBUSxJQUFJRCxRQUFBLENBQVM7RUFBQyxVQUFTO0lBQUMsY0FBYTtFQUErQztFQUFFLFFBQU87QUFBSSxHQUFHRixXQUFBLENBQVlJLEdBQUcsRUFBRUMsT0FBQSxDQUFRO0FBQUU7QUFFN0lGLEtBQUEsQ0FBTUcsWUFBQSxDQUFhQyxNQUFBLENBQU8sQ0FBQyxDQUFDLHFDQUFxQ1QsWUFBWSxHQUFFLENBQUMsNkJBQTZCQyxZQUFZLENBQUMsQ0FBQztBQUUzSCxJQUFNUyxHQUFBLEdBQU0sbUJBQUlDLEdBQUEsQ0FBSTtBQU1wQkQsR0FBQSxDQUFJRSxHQUFBLENBQUksV0FBVztFQUFDQyxJQUFBLEVBQU07RUFBWUMsT0FBQSxFQUFTLFNBQUFBLENBQVVDLFFBQUEsRUFBU3BCLE9BQUEsRUFBUztJQUMzRTs7SUFFQXFCLE1BQUEsQ0FBT0MsY0FBQSxDQUFldEIsT0FBQSxFQUFTLGNBQWM7TUFDM0N1QixLQUFBLEVBQU87SUFDVCxDQUFDO0lBQ0R2QixPQUFBLENBQVFOLFVBQUEsR0FBYTtJQUNyQixJQUFJOEIsS0FBQSxHQUFRSixRQUFBLENBQVEsbUNBQW1DO0lBQ3ZELElBQUlLLE1BQUEsR0FBU0wsUUFBQSxDQUFRLDJCQUEyQjtJQUN0QyxNQUFNTSxXQUFBLFNBQW1CRCxNQUFBLENBQU9FLGFBQUEsQ0FBYztNQUN0REMsS0FBQSxHQUFRO01BQ1JDLElBQUEsR0FBTztNQUtQLENBQUFDLGFBQUEsR0FBaUI7TUFDakIsQ0FBQUMsWUFBQTtNQUlBQyxTQUFBLEVBQVc7UUFDVCxPQUFPLEtBQUtKLEtBQUE7TUFDZDtNQUlBSyxRQUFBLEVBQVU7UUFDUixPQUFPLEtBQUtKLElBQUE7TUFDZDtNQUNBLENBQUFLLE1BQUE7TUFDQSxJQUFJQSxPQUFBLEVBQVM7UUFDWCxPQUFPLEtBQUssQ0FBQUEsTUFBQTtNQUNkO01BQ0EsQ0FBQUMsUUFBQTtNQUNBLElBQUlBLFNBQUEsRUFBVztRQUNiLE9BQU8sS0FBSyxDQUFBQSxRQUFBO01BQ2Q7TUFDQSxPQUFPQyxZQUFBLEdBQWU7TUFDdEIsQ0FBQUMsSUFBQTtNQUNBLElBQUlDLEtBQUEsRUFBTztRQUNULE9BQU8sS0FBSyxDQUFBRCxJQUFBO01BQ2Q7TUFDQSxDQUFBRSxHQUFBLEdBQU8sbUJBQUl2QixHQUFBLENBQUk7TUFDZixJQUFJdUIsSUFBQSxFQUFNO1FBQ1IsT0FBTyxLQUFLLENBQUFBLEdBQUE7TUFDZDtNQUNBLElBQUlDLE1BQUEsRUFBUTtRQUNWLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQUQsR0FBQSxDQUFLRSxNQUFBLENBQU8sQ0FBQztNQUMvQjtNQUNBLENBQUFDLE9BQUE7TUFDQSxDQUFBQyxRQUFBO01BQ0FDLFlBQVk7UUFDVlYsTUFBQTtRQUNBQyxRQUFBO1FBQ0FFLElBQUE7UUFDQU4sWUFBQSxHQUFlO1FBQ2ZELGFBQUEsR0FBZ0I7TUFDbEIsR0FBRztRQUNELE1BQU07UUFDTixLQUFLLENBQUFJLE1BQUEsR0FBVUEsTUFBQTtRQUNmLElBQUlDLFFBQUEsSUFBWSxPQUFPQSxRQUFBLEtBQWEsWUFBWTtVQUM5QyxNQUFNLElBQUlVLEtBQUEsQ0FBTSxzQ0FBc0M7UUFDeEQ7UUFDQSxJQUFJVixRQUFBLEVBQVU7VUFDWixLQUFLLENBQUFBLFFBQUEsR0FBWSxJQUFJQSxRQUFBLENBQVMsSUFBSTtRQUNwQztRQUNBLEtBQUssQ0FBQVEsUUFBQSxHQUFZbkIsS0FBQSxDQUFNc0IsZUFBQSxDQUFnQkMsV0FBQSxDQUFZYixNQUFNO1FBQ3pELEtBQUssQ0FBQVMsUUFBQSxDQUFVSyxFQUFBLENBQUcsb0JBQW9CLEtBQUtDLGFBQUEsQ0FBY0MsSUFBQSxDQUFLLElBQUksQ0FBQztRQUNuRSxLQUFLLENBQUFQLFFBQUEsQ0FBVUssRUFBQSxDQUFHLGtCQUFrQixLQUFLRyxpQkFBQSxDQUFrQkQsSUFBQSxDQUFLLElBQUksQ0FBQztRQUNyRSxLQUFLLENBQUFiLElBQUEsR0FBUUEsSUFBQTtRQUNiLEtBQUssQ0FBQU4sWUFBQSxHQUFnQkEsWUFBQTtRQUNyQixJQUFJRCxhQUFBLEVBQWUsS0FBSyxDQUFBQSxhQUFBLEdBQWlCQSxhQUFBO01BQzNDO01BK0NBLE1BQU1zQixLQUFLQyxJQUFBLEdBQU8sQ0FBQyxHQUFHO1FBRXBCLElBQUksT0FBT0EsSUFBQSxDQUFLQyxLQUFBLEtBQVUsVUFBVUQsSUFBQSxDQUFLQyxLQUFBLEdBQVEsS0FBSyxDQUFBdkIsWUFBQTtRQUN0RCxJQUFJLEtBQUtGLElBQUEsRUFBTXdCLElBQUEsQ0FBSyxLQUFLLENBQUF2QixhQUFBLElBQWtCLEtBQUtELElBQUE7UUFDaEQsS0FBSyxDQUFBYSxPQUFBLEdBQVdXLElBQUEsQ0FBS0UsS0FBQSxJQUFTLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQXBCLFFBQUEsSUFBYSxPQUFPLEtBQUssQ0FBQUEsUUFBQSxDQUFVcUIsSUFBQSxLQUFTLFlBQVk7VUFDaEUsTUFBTSxJQUFJWCxLQUFBLENBQU0sc0VBQXNFO1FBQ3hGO1FBQ0EsSUFBSTtVQUNGLE1BQU1ZLElBQUEsR0FBTyxNQUFNLEtBQUssQ0FBQXRCLFFBQUEsQ0FBVXFCLElBQUEsQ0FBS0gsSUFBSTtVQUMzQyxJQUFJSyxPQUFBO1VBQ0osTUFBTUMsWUFBQSxHQUFlLENBQUMsQ0FBQ04sSUFBQSxDQUFLdkMsTUFBQTtVQUM1QixJQUFJOEMsS0FBQSxDQUFNQyxPQUFBLENBQVFKLElBQUksR0FBRztZQUN2QkMsT0FBQSxHQUFVRCxJQUFBO1lBQ1YsS0FBSzdCLEtBQUEsR0FBUTtZQUNiLEtBQUtDLElBQUEsR0FBTztZQUNaLEtBQUtpQyxRQUFBLENBQVNKLE9BQUEsRUFBUyxJQUFJO1VBQzdCLFdBQVdELElBQUEsSUFBUUcsS0FBQSxDQUFNQyxPQUFBLENBQVFKLElBQUEsQ0FBS2pCLEtBQUssR0FBRztZQUM1Q2tCLE9BQUEsR0FBVUQsSUFBQSxDQUFLakIsS0FBQTtZQUNmLElBQUksT0FBT2lCLElBQUEsQ0FBSzdCLEtBQUEsS0FBVSxVQUFVLEtBQUtBLEtBQUEsR0FBUTZCLElBQUEsQ0FBSzdCLEtBQUE7WUFDdEQsSUFBSSxVQUFVNkIsSUFBQSxFQUFNLEtBQUs1QixJQUFBLEdBQU80QixJQUFBLENBQUs1QixJQUFBO1lBQ3JDLEtBQUtpQyxRQUFBLENBQVNKLE9BQUEsRUFBUyxDQUFDQyxZQUFZO1VBQ3RDLE9BQU87WUFDTCxNQUFNLElBQUlkLEtBQUEsQ0FBTSxnRkFBZ0Y7VUFDbEc7VUFDQSxLQUFLa0IsT0FBQSxDQUFRLFFBQVE7WUFDbkJ2QixLQUFBLEVBQU9rQixPQUFBO1lBQ1A5QixLQUFBLEVBQU8sS0FBS0EsS0FBQTtZQUNaQyxJQUFBLEVBQU0sS0FBS0E7VUFDYixDQUFDO1VBQ0QsT0FBTzZCLE9BQUE7UUFDVCxTQUFTTSxLQUFBLEVBQVA7VUFDQUMsT0FBQSxDQUFRRCxLQUFBLENBQU0sdUJBQXVCQSxLQUFLO1VBQzFDLE1BQU1BLEtBQUE7UUFDUjtNQUNGO01BQ0FGLFNBQVNMLElBQUEsRUFBTVMsS0FBQSxHQUFRLE9BQU87UUFDNUIsSUFBSUEsS0FBQSxFQUFPLEtBQUssQ0FBQTNCLEdBQUEsQ0FBSzJCLEtBQUEsQ0FBTTtRQUMzQixJQUFJLENBQUNULElBQUEsRUFBTTtRQUNYLElBQUksQ0FBQ0csS0FBQSxDQUFNQyxPQUFBLENBQVFKLElBQUksR0FBRztVQUV4QlEsT0FBQSxDQUFRRSxJQUFBLENBQUssdUJBQXVCO1VBQ3BDO1FBQ0Y7UUFDQVYsSUFBQSxDQUFLVyxPQUFBLENBQVEvQixJQUFBLElBQVE7VUFDbkIsSUFBSSxLQUFLRSxHQUFBLENBQUk4QixHQUFBLENBQUloQyxJQUFBLENBQUtpQyxFQUFFLEdBQUc7WUFDekIsS0FBSy9CLEdBQUEsQ0FBSWdDLEdBQUEsQ0FBSWxDLElBQUEsQ0FBS2lDLEVBQUUsRUFBRXJELEdBQUEsQ0FBSW9CLElBQUk7WUFDOUI7VUFDRjtVQUNBLE1BQU1tQyxRQUFBLEdBQVcsSUFBSSxLQUFLLENBQUFuQyxJQUFBLENBQU07WUFDOUJvQyxNQUFBLEVBQVE7WUFDUixHQUFHcEM7VUFDTCxDQUFDO1VBQ0QsS0FBSyxDQUFBRSxHQUFBLENBQUt0QixHQUFBLENBQUlvQixJQUFBLENBQUtpQyxFQUFBLEVBQUlFLFFBQVE7UUFDakMsQ0FBQztNQUNIO01BQ0FFLFNBQVNqQixJQUFBLEVBQU07UUFDYixLQUFLSyxRQUFBLENBQVNMLElBQUk7UUFDbEIsS0FBS00sT0FBQSxDQUFRLGlCQUFpQjtVQUM1QnZCLEtBQUEsRUFBTyxLQUFLLENBQUFEO1FBQ2QsQ0FBQztRQUNELEtBQUt3QixPQUFBLENBQVEsUUFBUTtNQUN2QjtNQUNBOUMsSUFBSXdDLElBQUEsRUFBTTtRQUNSLE1BQU14QyxHQUFBLENBQUl3QyxJQUFJO1FBQ2QsS0FBS00sT0FBQSxDQUFRLFFBQVE7UUFDckIsT0FBT04sSUFBQTtNQUNUO01BQ0FrQixjQUFBLEVBQWdCO1FBRWQsT0FBTztVQUNMbkMsS0FBQSxFQUFPLEtBQUtBO1FBQ2Q7TUFDRjtNQUNBb0Msa0JBQUEsRUFBb0I7UUFDbEIsTUFBTXBDLEtBQUEsR0FBUSxFQUFDO1FBQ2YsU0FBU0gsSUFBQSxJQUFRLEtBQUtHLEtBQUEsRUFBTztVQUMzQkEsS0FBQSxDQUFNcUMsSUFBQSxDQUFLeEMsSUFBQSxDQUFLc0MsYUFBQSxDQUFjLENBQUM7UUFDakM7UUFDQSxPQUFPbkMsS0FBQTtNQUNUO01BT0FTLGNBQWNOLFFBQUEsRUFBVTtRQUV0QixJQUFJLEtBQUttQyxjQUFBLENBQWVuQyxRQUFRLEdBQUc7VUFFakMsTUFBTW9DLE9BQUEsR0FBVSxJQUFJLEtBQUssQ0FBQTFDLElBQUEsQ0FBTU0sUUFBUTtVQUV2QyxLQUFLLENBQUFKLEdBQUEsQ0FBS3RCLEdBQUEsQ0FBSTBCLFFBQUEsQ0FBUzJCLEVBQUEsRUFBSVMsT0FBTztVQUVsQyxLQUFLaEIsT0FBQSxDQUFRLGlCQUFpQjtZQUM1QjFCLElBQUEsRUFBTTBDO1VBQ1IsQ0FBQztVQUNELEtBQUtoQixPQUFBLENBQVEsUUFBUTtRQUN2QjtNQUNGO01BQ0EsTUFBTWlCLE9BQU9DLEdBQUEsRUFBSztRQUNoQixNQUFNQyxRQUFBLEdBQVd0QixLQUFBLENBQU1DLE9BQUEsQ0FBUW9CLEdBQUcsSUFBSUEsR0FBQSxHQUFNLENBQUNBLEdBQUc7UUFDaEQsTUFBTUUsYUFBQSxHQUFnQkQsUUFBQSxDQUFTM0MsR0FBQSxDQUFJK0IsRUFBQSxJQUFNLEtBQUssQ0FBQS9CLEdBQUEsQ0FBS2dDLEdBQUEsQ0FBSUQsRUFBRSxDQUFDLEVBQUVjLE1BQUEsQ0FBT0MsT0FBTztRQUMxRSxJQUFJLEtBQUssQ0FBQWxELFFBQUEsSUFBYSxPQUFPLEtBQUssQ0FBQUEsUUFBQSxDQUFVbUQsVUFBQSxLQUFlLFlBQVk7VUFDckUsTUFBTSxLQUFLLENBQUFuRCxRQUFBLENBQVVtRCxVQUFBLENBQVdKLFFBQVE7UUFDMUM7UUFDQSxPQUFPLE1BQU1LLE9BQUEsQ0FBUUMsR0FBQSxDQUFJTCxhQUFBLENBQWM1QyxHQUFBLENBQUlGLElBQUEsSUFBUUEsSUFBQSxDQUFLMkMsTUFBQSxDQUFPO1VBQzdEUyxZQUFBLEVBQWM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7TUFDTDtNQUNBdEMsa0JBQWtCUixRQUFBLEVBQVU7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQUosR0FBQSxDQUFLOEIsR0FBQSxDQUFJMUIsUUFBQSxDQUFTMkIsRUFBRSxHQUFHO1FBQ2pDLEtBQUssQ0FBQS9CLEdBQUEsQ0FBS3lDLE1BQUEsQ0FBT3JDLFFBQUEsQ0FBUzJCLEVBQUU7UUFDNUIsS0FBS1AsT0FBQSxDQUFRLFFBQVE7UUFDckIsS0FBS0EsT0FBQSxDQUFRLGVBQWU7TUFDOUI7TUFRQWUsZUFBZW5DLFFBQUEsRUFBVTtRQUN2QixNQUFNRCxPQUFBLEdBQVUsS0FBSyxDQUFBQSxPQUFBLEVBQVVhLEtBQUE7UUFDL0IsSUFBSSxDQUFDYixPQUFBLEVBQVMsT0FBTztRQUVyQixNQUFNZ0QsaUJBQUEsR0FBb0JBLENBQUNDLFFBQUEsRUFBVUMsUUFBQSxLQUFhO1VBQ2hELE1BQU1DLGFBQUEsR0FBZ0JsRCxRQUFBLENBQVNnRCxRQUFBO1VBQy9CLE9BQU90RSxNQUFBLENBQU9xQyxPQUFBLENBQVFrQyxRQUFRLEVBQUVFLEtBQUEsQ0FBTSxDQUFDLENBQUNDLFFBQUEsRUFBVXhFLEtBQUssTUFBTTtZQUMzRCxRQUFRd0UsUUFBQTtjQUFBLEtBQ0Q7Z0JBQ0gsT0FBT0YsYUFBQSxLQUFrQnRFLEtBQUE7Y0FBQSxLQUN0QjtnQkFDSCxPQUFPc0UsYUFBQSxLQUFrQnRFLEtBQUE7Y0FBQSxLQUN0QjtnQkFDSCxPQUFPcUMsS0FBQSxDQUFNQyxPQUFBLENBQVF0QyxLQUFLLEtBQUtBLEtBQUEsQ0FBTXlFLFFBQUEsQ0FBU0gsYUFBYTtjQUFBLEtBQ3hEO2dCQUNILE9BQU8sQ0FBQ2pDLEtBQUEsQ0FBTUMsT0FBQSxDQUFRdEMsS0FBSyxLQUFLLENBQUNBLEtBQUEsQ0FBTXlFLFFBQUEsQ0FBU0gsYUFBYTtjQUFBLEtBQzFEO2dCQUNILE9BQU8sT0FBT0EsYUFBQSxLQUFrQixZQUFZQSxhQUFBLENBQWNHLFFBQUEsQ0FBU3pFLEtBQUs7Y0FBQSxLQUNyRTtnQkFDSCxPQUFPLE9BQU9zRSxhQUFBLEtBQWtCLFlBQVlBLGFBQUEsQ0FBY0ksVUFBQSxDQUFXMUUsS0FBSztjQUFBLEtBQ3ZFO2dCQUNILE9BQU8sT0FBT3NFLGFBQUEsS0FBa0IsWUFBWUEsYUFBQSxDQUFjSyxRQUFBLENBQVMzRSxLQUFLO2NBQUEsS0FDckU7Z0JBQ0gsT0FBT3NFLGFBQUEsR0FBZ0J0RSxLQUFBO2NBQUEsS0FDcEI7Z0JBQ0gsT0FBT3NFLGFBQUEsSUFBaUJ0RSxLQUFBO2NBQUEsS0FDckI7Z0JBQ0gsT0FBT3NFLGFBQUEsR0FBZ0J0RSxLQUFBO2NBQUEsS0FDcEI7Z0JBQ0gsT0FBT3NFLGFBQUEsSUFBaUJ0RSxLQUFBO2NBQUE7Z0JBRXhCMEMsT0FBQSxDQUFRRSxJQUFBLENBQUssNEJBQTRCNEIsUUFBQSxFQUFVO2dCQUNuRCxPQUFPO1lBQUE7VUFFYixDQUFDO1FBQ0g7UUFFQSxNQUFNSSxrQkFBQSxHQUFxQkEsQ0FBQ0MsVUFBQSxFQUFZQyxLQUFBLEtBQVVELFVBQUEsQ0FBV0MsS0FBQSxFQUFPQyxTQUFBLElBQWFqRixNQUFBLENBQU9xQyxPQUFBLENBQVE0QyxTQUFTLEVBQUVSLEtBQUEsQ0FBTSxDQUFDLENBQUNILFFBQUEsRUFBVUMsUUFBUSxNQUFNRixpQkFBQSxDQUFrQkMsUUFBQSxFQUFVQyxRQUFRLENBQUMsQ0FBQztRQUVqTCxJQUFJbEQsT0FBQSxDQUFRNkQsR0FBQSxJQUFPLENBQUNKLGtCQUFBLENBQW1CekQsT0FBQSxDQUFRNkQsR0FBQSxFQUFLLE9BQU8sR0FBRyxPQUFPO1FBRXJFLElBQUk3RCxPQUFBLENBQVE4RCxFQUFBLElBQU0sQ0FBQ0wsa0JBQUEsQ0FBbUJ6RCxPQUFBLENBQVE4RCxFQUFBLEVBQUksTUFBTSxHQUFHLE9BQU87UUFFbEUsT0FBT25GLE1BQUEsQ0FBT3FDLE9BQUEsQ0FBUWhCLE9BQU8sRUFBRTBDLE1BQUEsQ0FBTyxDQUFDLENBQUNxQixHQUFHLE1BQU1BLEdBQUEsS0FBUSxTQUFTQSxHQUFBLEtBQVEsSUFBSSxFQUFFWCxLQUFBLENBQU0sQ0FBQyxDQUFDSCxRQUFBLEVBQVVDLFFBQVEsTUFBTUYsaUJBQUEsQ0FBa0JDLFFBQUEsRUFBVUMsUUFBUSxDQUFDO01BQ3ZKO0lBQ0Y7SUFDQTVGLE9BQUEsQ0FBUU4sVUFBQSxHQUFhZ0MsV0FBQTtFQUNyQjtBQUFDLENBQUM7QUFNRlgsR0FBQSxDQUFJRSxHQUFBLENBQUksV0FBVztFQUFDQyxJQUFBLEVBQU07RUFBV0MsT0FBQSxFQUFTLFNBQUFBLENBQVVDLFFBQUEsRUFBU3BCLE9BQUEsRUFBUztJQUMxRTs7SUFFQXFCLE1BQUEsQ0FBT0MsY0FBQSxDQUFldEIsT0FBQSxFQUFTLGNBQWM7TUFDM0N1QixLQUFBLEVBQU87SUFDVCxDQUFDO0VBQ0Q7QUFBQyxDQUFDO0FBRUZiLEtBQUEsQ0FBTVYsT0FBQSxDQUFRMEcsVUFBQSxHQUFhLENBQUM7RUFBQyxNQUFLO0VBQVUsUUFBTztFQUFhLFFBQU87QUFBWSxHQUFFO0VBQUMsTUFBSztFQUFVLFFBQU87RUFBc0IsUUFBTztBQUFxQixHQUFFO0VBQUMsTUFBSztFQUFVLFFBQU87RUFBYSxRQUFPO0FBQVksQ0FBQztBQUVqTixJQUFJaEgsVUFBQSxFQUFZQyxtQkFBQSxFQUFxQkMsVUFBQTtBQUc1Q2MsS0FBQSxDQUFNVixPQUFBLENBQVEyRyxPQUFBLEdBQVUsVUFBUztFQUFDdkcsT0FBQSxFQUFBZ0IsUUFBQTtFQUFTd0YsSUFBQTtFQUFNckY7QUFBSyxHQUFHO0VBQ3JELENBQUNILFFBQUEsSUFBV3dGLElBQUEsS0FBUyxrQkFBa0JsSCxVQUFBLEdBQWEwQixRQUFBLEdBQVVBLFFBQUEsQ0FBUSxTQUFTLEVBQUUxQixVQUFBLEdBQWE2QixLQUFBO0VBQzlGLENBQUNILFFBQUEsSUFBV3dGLElBQUEsS0FBUywyQkFBMkJqSCxtQkFBQSxHQUFzQnlCLFFBQUEsR0FBVUEsUUFBQSxDQUFRLFNBQVMsRUFBRXpCLG1CQUFBLEdBQXNCNEIsS0FBQTtFQUN6SCxDQUFDSCxRQUFBLElBQVd3RixJQUFBLEtBQVMsa0JBQWtCaEgsVUFBQSxHQUFhd0IsUUFBQSxHQUFVQSxRQUFBLENBQVEsU0FBUyxFQUFFeEIsVUFBQSxHQUFhMkIsS0FBQTtBQUVsRztBQUNPLElBQU0xQixZQUFBLEdBQWVhLEtBQUE7QUFFckIsSUFBTVosR0FBQSxHQUFNLElBQUssWUFBWTtFQUNoQyxLQUFLa0QsRUFBQSxHQUFLLENBQUM2RCxLQUFBLEVBQU9DLFFBQUEsS0FBYTtFQUMvQixLQUFLQyxHQUFBLEdBQU0sQ0FBQ0YsS0FBQSxFQUFPQyxRQUFBLEtBQWE7QUFDcEM7QUFHQXBHLEtBQUEsQ0FBTXNHLFVBQUEsQ0FBV2pHLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL3J2ZC9vdXQifQ==