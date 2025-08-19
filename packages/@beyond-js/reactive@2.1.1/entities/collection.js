System.register(["@beyond-js/kernel@0.1.12/bundle","zod@3.25.67","@beyond-js/events@0.0.7/events","@beyond-js/reactive@2.1.1/model","uuid@11.1.0","@beyond-js/reactive@2.1.1/entities/item"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["zod","3.25.67"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","2.1.1"],["uuid","11.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('zod@3.25.67', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/reactive@2.1.1/model', dep), dep => dependencies.set('uuid@11.1.0', dep), dep => dependencies.set('@beyond-js/reactive@2.1.1/entities/item', dep)],
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

// .beyond/uimport/@beyond-js/reactive/entities/collection.2.1.1.js
var collection_2_1_1_exports = {};
__export(collection_2_1_1_exports, {
  Collection: () => Collection,
  ICollectionProvider: () => ICollectionProvider,
  ILoadSpecs: () => ILoadSpecs,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(collection_2_1_1_exports);

// node_modules/@beyond-js/reactive/entities/collection/entities/collection.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/reactive@2.1.1/entities/item"), 0);
var dependency_2 = __toESM(require("@beyond-js/reactive@2.1.1/model"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@2.1.1/entities/collection"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/reactive/entities/item", dependency_1], ["@beyond-js/reactive/model", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 50024398,
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
        this.fetching = true;
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
        } finally {
          this.fetching = false;
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
  hash: 3018774832,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL2NvbGxlY3Rpb24uMi4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9jb2xsZWN0aW9uL2VudGl0aWVzL2NvbGxlY3Rpb24uYnJvd3Nlci5tanMiXSwibmFtZXMiOlsiY29sbGVjdGlvbl8yXzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJDb2xsZWN0aW9uIiwiSUNvbGxlY3Rpb25Qcm92aWRlciIsIklMb2FkU3BlY3MiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiZGVwZW5kZW5jeV8wIiwiX190b0VTTSIsInJlcXVpcmUiLCJkZXBlbmRlbmN5XzEiLCJkZXBlbmRlbmN5XzIiLCJpbXBvcnRfbWV0YSIsIkJ1bmRsZSIsIl9fQnVuZGxlIiwiX19wa2ciLCJ1cmwiLCJwYWNrYWdlIiwiZGVwZW5kZW5jaWVzIiwidXBkYXRlIiwiaW1zIiwiTWFwIiwic2V0IiwiaGFzaCIsImNyZWF0b3IiLCJyZXF1aXJlMiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9tb2RlbCIsIkNvbGxlY3Rpb24yIiwiUmVhY3RpdmVNb2RlbCIsInRvdGFsIiwibmV4dCIsIm5leHRQYXJhbU5hbWUiLCJkZWZhdWx0TGltaXQiLCJnZXRUb3RhbCIsImdldE5leHQiLCJlbnRpdHkiLCJwcm92aWRlciIsImlzQ29sbGVjdGlvbiIsIml0ZW0iLCJJdGVtIiwibWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJmaWx0ZXJzIiwicmVnaXN0cnkiLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwiUmVnaXN0cnlGYWN0b3J5IiwiZ2V0SW5zdGFuY2UiLCJvbiIsIm9uTmV3UmVnaXN0cnkiLCJiaW5kIiwib25SZWdpc3RyeURlbGV0ZWQiLCJsb2FkIiwiYXJncyIsImxpbWl0Iiwid2hlcmUiLCJmZXRjaGluZyIsImxpc3QiLCJkYXRhIiwiZW50cmllcyIsInNob3VsZFVwZGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsInNldEl0ZW1zIiwidHJpZ2dlciIsImVycm9yIiwiY29uc29sZSIsImNsZWFyIiwid2FybiIsImZvckVhY2giLCJoYXMiLCJpZCIsImdldCIsImluc3RhbmNlIiwicGFyZW50IiwiYWRkSXRlbXMiLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0SXRlbVByb3BlcnRpZXMiLCJwdXNoIiwibWF0Y2hlc0ZpbHRlcnMiLCJuZXdJdGVtIiwiZGVsZXRlIiwiaWRzIiwidG9EZWxldGUiLCJleGlzdGluZ0l0ZW1zIiwiZmlsdGVyIiwiQm9vbGVhbiIsImRlbGV0ZU1hbnkiLCJQcm9taXNlIiwiYWxsIiwic2tpcFByb3ZpZGVyIiwiZXZhbHVhdGVDb25kaXRpb24iLCJwcm9wZXJ0eSIsImNyaXRlcmlhIiwicmVnaXN0cnlWYWx1ZSIsImV2ZXJ5Iiwib3BlcmF0b3IiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsImV2YWx1YXRlQ29uZGl0aW9ucyIsImNvbmRpdGlvbnMiLCJsb2dpYyIsImNvbmRpdGlvbiIsIkFORCIsIk9SIiwia2V5IiwiZGVzY3JpcHRvciIsInByb2Nlc3MiLCJwcm9wIiwiZXZlbnQiLCJsaXN0ZW5lciIsIm9mZiIsImluaXRpYWxpc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsd0JBQUE7RUFBQUUsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FB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