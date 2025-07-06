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

// .beyond/uimport/temp/@beyond-js/reactive/entities/collection.2.1.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3RpdmUvZW50aXRpZXMvY29sbGVjdGlvbi4yLjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL2NvbGxlY3Rpb24vZW50aXRpZXMvY29sbGVjdGlvbi5icm93c2VyLm1qcyJdLCJuYW1lcyI6WyJjb2xsZWN0aW9uXzJfMV8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkNvbGxlY3Rpb24iLCJJQ29sbGVjdGlvblByb3ZpZGVyIiwiSUxvYWRTcGVjcyIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJkZXBlbmRlbmN5XzAiLCJfX3RvRVNNIiwicmVxdWlyZSIsImRlcGVuZGVuY3lfMSIsImRlcGVuZGVuY3lfMiIsImltcG9ydF9tZXRhIiwiQnVuZGxlIiwiX19CdW5kbGUiLCJfX3BrZyIsInVybCIsInBhY2thZ2UiLCJkZXBlbmRlbmNpZXMiLCJ1cGRhdGUiLCJpbXMiLCJNYXAiLCJzZXQiLCJoYXNoIiwiY3JlYXRvciIsInJlcXVpcmUyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9pdGVtIiwiX21vZGVsIiwiQ29sbGVjdGlvbjIiLCJSZWFjdGl2ZU1vZGVsIiwidG90YWwiLCJuZXh0IiwibmV4dFBhcmFtTmFtZSIsImRlZmF1bHRMaW1pdCIsImdldFRvdGFsIiwiZ2V0TmV4dCIsImVudGl0eSIsInByb3ZpZGVyIiwiaXNDb2xsZWN0aW9uIiwiaXRlbSIsIkl0ZW0iLCJtYXAiLCJpdGVtcyIsInZhbHVlcyIsImZpbHRlcnMiLCJyZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiRXJyb3IiLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsIm9uIiwib25OZXdSZWdpc3RyeSIsImJpbmQiLCJvblJlZ2lzdHJ5RGVsZXRlZCIsImxvYWQiLCJhcmdzIiwibGltaXQiLCJ3aGVyZSIsImxpc3QiLCJkYXRhIiwiZW50cmllcyIsInNob3VsZFVwZGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsInNldEl0ZW1zIiwidHJpZ2dlciIsImVycm9yIiwiY29uc29sZSIsImNsZWFyIiwid2FybiIsImZvckVhY2giLCJoYXMiLCJpZCIsImdldCIsImluc3RhbmNlIiwicGFyZW50IiwiYWRkSXRlbXMiLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0SXRlbVByb3BlcnRpZXMiLCJwdXNoIiwibWF0Y2hlc0ZpbHRlcnMiLCJuZXdJdGVtIiwiZGVsZXRlIiwiaWRzIiwidG9EZWxldGUiLCJleGlzdGluZ0l0ZW1zIiwiZmlsdGVyIiwiQm9vbGVhbiIsImRlbGV0ZU1hbnkiLCJQcm9taXNlIiwiYWxsIiwic2tpcFByb3ZpZGVyIiwiZXZhbHVhdGVDb25kaXRpb24iLCJwcm9wZXJ0eSIsImNyaXRlcmlhIiwicmVnaXN0cnlWYWx1ZSIsImV2ZXJ5Iiwib3BlcmF0b3IiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsImV2YWx1YXRlQ29uZGl0aW9ucyIsImNvbmRpdGlvbnMiLCJsb2dpYyIsImNvbmRpdGlvbiIsIkFORCIsIk9SIiwia2V5IiwiZGVzY3JpcHRvciIsInByb2Nlc3MiLCJwcm9wIiwiZXZlbnQiLCJsaXN0ZW5lciIsIm9mZiIsImluaXRpYWxpc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsd0JBQUE7RUFBQUUsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFB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