System.register(["@beyond-js/kernel@0.1.12/bundle","zod@3.25.67","@beyond-js/events@0.0.7/events","@beyond-js/reactive@2.1.0/model","uuid@11.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["zod","3.25.67"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","2.1.0"],["uuid","11.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('zod@3.25.67', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/reactive@2.1.0/model', dep), dep => dependencies.set('uuid@11.1.0', dep)],
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

// .beyond/uimport/temp/@beyond-js/reactive/entities/item.2.1.0.js
var item_2_1_0_exports = {};
__export(item_2_1_0_exports, {
  IEntityProvider: () => IEntityProvider,
  IItem: () => IItem,
  IItemProps: () => IItemProps,
  IRecordProps: () => IRecordProps,
  Item: () => Item,
  ItemId: () => ItemId,
  RegistryFactory: () => RegistryFactory,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(item_2_1_0_exports);

// node_modules/@beyond-js/reactive/entities/item/entities/item.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/reactive@2.1.0/model"), 0);
var dependency_2 = __toESM(require("uuid@11.1.0"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@2.1.0/entities/item"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/reactive/model", dependency_1], ["uuid", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 2491171941,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Item = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _factory = require2("./registry/factory");
    class Item2 extends _model.ReactiveModel {
      #factory;
      #entity;
      get entity() {
        return this.#entity;
      }
      #registry;
      get __registryState() {
        return this.#registry.state;
      }
      #fetched;
      get fetched() {
        return this.#fetched;
      }
      #found = false;
      get found() {
        return this.#found;
      }
      _provider;
      get provider() {
        return this._provider;
      }
      get registry() {
        return this.#registry;
      }
      get __instanceId() {
        return this.#registry.instanceId;
      }
      #draft;
      get draft() {
        return this.#draft;
      }
      constructor({
        entity,
        provider,
        properties,
        ...args
      } = {}) {
        super({
          ...args,
          properties
        });
        if (!entity) throw new Error("Entity is required");
        if (provider && typeof provider !== "function") {
          throw new Error(`Provider must be a class/constructor in object ${entity}`);
        }
        this.reactiveProps(["deleted"]);
        this.#entity = entity;
        this.onSet = this.onSet.bind(this);
        this.on("set.executed", this.onSet);
        if (provider) {
          this._provider = new provider(this);
        }
        this.#factory = _factory.RegistryFactory.getInstance(entity);
        this.initialize(args);
      }
      initialize({
        ...args
      }) {
        const registry = this.#factory.getItem(this.getProperty("id"), args);
        this.#registry = registry;
        const propertyValues = this.#registry.getValues();
        this.setInitialValues(propertyValues);
        this.properties.forEach(property => {
          if (typeof property === "string") {
            this.on(`${property}.changed`, () => {
              this.#registry.setValues({
                [property]: this.getProperty(property)
              });
            });
          }
        });
      }
      set(values) {
        const response = super.set(values);
        return response;
      }
      onSet() {
        this.#registry?.setValues(this.getProperties());
      }
      _load(args) {}
      async load(args) {
        if (!this.provider || typeof this.provider.load !== "function") {
          throw new Error(`DataProvider is not defined or does not implement the load() method in object ${this.constructor.name}`);
        }
        try {
          const response = await this.provider.load(args);
          const data = response;
          if (!data) {
            this.#found = false;
            throw new Error("Provider.load() did not return an item.");
          }
          this.#found = true;
          this.#fetched = true;
          this.set(data);
          this.trigger("load", {
            ...this.getProperties()
          });
          this.trigger("change");
          return response;
        } catch (e) {
          this.#found = false;
          throw e;
        }
      }
      async publish(data) {
        data = data ? data : this.getProperties();
        this.set({
          ...this.getProperties(),
          ...data
        });
        this.#registry.setValues(this.getProperties, true);
        super.saveChanges();
        if (this.provider && typeof this.provider.publish === "function") {
          const updated = await this.provider.publish(data);
          if (!updated.status) {
            throw new Error("Error saving item");
          }
          this.set(updated.data);
          return updated.data;
        }
        return this.getProperties();
      }
      async delete(options) {
        try {
          const id = this.getProperty("id");
          this.#registry.deleted = true;
          this.trigger("change");
          if (!options?.skipProvider && this.provider && typeof this.provider.delete === "function") {
            this.processing = true;
            await this.provider.delete(id);
          }
          return true;
        } catch (e) {
          console.error(e);
          return false;
        } finally {
          this.processing = false;
        }
      }
    }
    exports.Item = Item2;
  }
});
ims.set("./registry/factory", {
  hash: 3046058107,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RegistryFactory = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _ = require2("./");
    class RegistryFactory2 extends _model.ReactiveModel {
      static #instances = /* @__PURE__ */new Map();
      items = /* @__PURE__ */new Map();
      #name;
      constructor(name, properties) {
        super({
          properties
        });
        this.#name = name;
        this.ready = true;
      }
      getItem(id, data) {
        if (!id || !this.items.has(id)) {
          const specs = data ? {
            id,
            ...data
          } : {
            id,
            properties: this.properties,
            ...data
          };
          const registry = new _.Registry(this.#name, specs);
          registry.on("record.published", registry2 => {
            this.trigger("record.published", registry2);
          });
          if (data.register) this.trigger("record.published", registry.getValues());
          registry.on("record.updated", registry2 => this.trigger("update.registry", registry2));
          registry.on("record.deleted", registry2 => this.trigger("record.deleted", registry2));
          id = registry.id;
          this.items.set(id, registry);
        }
        const item = this.items.get(id);
        return item;
      }
      static getInstance(entity, data) {
        if (!this.#instances.has(entity)) {
          this.#instances.set(entity, new RegistryFactory2(entity, data));
        }
        return this.#instances.get(entity);
      }
    }
    exports.RegistryFactory = RegistryFactory2;
  }
});
ims.set("./registry/index", {
  hash: 3743389285,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Registry = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _uuid = require2("uuid");
    class Registry extends _model.ReactiveModel {
      #id;
      #instanceId;
      #isDeleted = false;
      #draft = false;
      #state = "draft";
      get state() {
        return this.#state;
      }
      get draft() {
        return this.#draft;
      }
      set draft(value) {
        if (value === this.#draft) return;
        this.#draft = value;
        this.trigger("change");
      }
      get id() {
        return this.#id || this.#values.id;
      }
      get instanceId() {
        return this.#instanceId;
      }
      #values;
      get values() {
        return this.#values;
      }
      get deleted() {
        return this.#isDeleted;
      }
      set deleted(value) {
        if (value === this.#isDeleted) return;
        this.#isDeleted = value;
        this.trigger("record.deleted", this.#values);
        this.trigger("change");
      }
      #entity;
      constructor(entity, {
        properties,
        parent,
        register,
        ...data
      } = {}) {
        super({
          properties: properties || []
        });
        this.#entity = entity;
        const {
          id
        } = data;
        this.#instanceId = data?.instanceId ? data.instanceId : (0, _uuid.v4)();
        this.#id = id;
        this.#draft = !id;
        this.#values = Object.entries(data).reduce((acc, [key, value]) => {
          if (typeof value === "object" && value?.isReactive) {
            return acc;
          }
          acc[key] = value;
          return acc;
        }, {
          id: this.#id
        });
        this.#state = this.#id ? "published" : "draft";
        this.setValues(this.#values);
      }
      setValues(data, publish = false) {
        if (!data || Object.keys(data).length === 0) return false;
        const baseState = this.#state;
        let updated = false;
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const value = data[key];
            if (value === this.#values[key]) continue;
            this.#values[key] = value;
            updated = true;
          }
        }
        if (!updated) return false;
        this.trigger("change", {
          values: this.#values
        });
        this.trigger("record.updated", {
          ...this.#values
        });
        if (publish && baseState === "draft") {
          this.#state = "published";
          this.trigger("record.published", {
            ...this.#values
          });
        }
        return true;
      }
      getValues() {
        return {
          ...this.#values
        };
      }
    }
    exports.Registry = Registry;
  }
});
ims.set("./registry/types/index", {
  hash: 1290040696,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./types", {
  hash: 1478616746,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "Item",
  "name": "Item"
}, {
  "im": "./registry/factory",
  "from": "RegistryFactory",
  "name": "RegistryFactory"
}, {
  "im": "./types",
  "from": "IItem",
  "name": "IItem"
}, {
  "im": "./types",
  "from": "ItemId",
  "name": "ItemId"
}, {
  "im": "./types",
  "from": "IItemProps",
  "name": "IItemProps"
}, {
  "im": "./types",
  "from": "IEntityProvider",
  "name": "IEntityProvider"
}, {
  "im": "./types",
  "from": "IRecordProps",
  "name": "IRecordProps"
}];
var Item, RegistryFactory, IItem, ItemId, IItemProps, IEntityProvider, IRecordProps;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Item") && (Item = require2 ? require2("./index").Item : value);
  (require2 || prop === "RegistryFactory") && (RegistryFactory = require2 ? require2("./registry/factory").RegistryFactory : value);
  (require2 || prop === "IItem") && (IItem = require2 ? require2("./types").IItem : value);
  (require2 || prop === "ItemId") && (ItemId = require2 ? require2("./types").ItemId : value);
  (require2 || prop === "IItemProps") && (IItemProps = require2 ? require2("./types").IItemProps : value);
  (require2 || prop === "IEntityProvider") && (IEntityProvider = require2 ? require2("./types").IEntityProvider : value);
  (require2 || prop === "IRecordProps") && (IRecordProps = require2 ? require2("./types").IRecordProps : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3RpdmUvZW50aXRpZXMvaXRlbS4yLjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL2l0ZW0vZW50aXRpZXMvaXRlbS5icm93c2VyLm1qcyJdLCJuYW1lcyI6WyJpdGVtXzJfMV8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIklFbnRpdHlQcm92aWRlciIsIklJdGVtIiwiSUl0ZW1Qcm9wcyIsIklSZWNvcmRQcm9wcyIsIkl0ZW0iLCJJdGVtSWQiLCJSZWdpc3RyeUZhY3RvcnkiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiZGVwZW5kZW5jeV8wIiwiX190b0VTTSIsInJlcXVpcmUiLCJkZXBlbmRlbmN5XzEiLCJkZXBlbmRlbmN5XzIiLCJpbXBvcnRfbWV0YSIsIkJ1bmRsZSIsIl9fQnVuZGxlIiwiX19wa2ciLCJ1cmwiLCJwYWNrYWdlIiwiZGVwZW5kZW5jaWVzIiwidXBkYXRlIiwiaW1zIiwiTWFwIiwic2V0IiwiaGFzaCIsImNyZWF0b3IiLCJyZXF1aXJlMiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwiLCJfZmFjdG9yeSIsIkl0ZW0yIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsIl9fcmVnaXN0cnlTdGF0ZSIsInN0YXRlIiwiZmV0Y2hlZCIsImZvdW5kIiwiX3Byb3ZpZGVyIiwicHJvdmlkZXIiLCJfX2luc3RhbmNlSWQiLCJpbnN0YW5jZUlkIiwiZHJhZnQiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhcmdzIiwiRXJyb3IiLCJyZWFjdGl2ZVByb3BzIiwib25TZXQiLCJiaW5kIiwib24iLCJnZXRJbnN0YW5jZSIsImluaXRpYWxpemUiLCJnZXRJdGVtIiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eVZhbHVlcyIsImdldFZhbHVlcyIsInNldEluaXRpYWxWYWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJzZXRWYWx1ZXMiLCJ2YWx1ZXMiLCJyZXNwb25zZSIsImdldFByb3BlcnRpZXMiLCJfbG9hZCIsImxvYWQiLCJuYW1lIiwiZGF0YSIsInRyaWdnZXIiLCJlIiwicHVibGlzaCIsInNhdmVDaGFuZ2VzIiwidXBkYXRlZCIsInN0YXR1cyIsImRlbGV0ZSIsIm9wdGlvbnMiLCJpZCIsImRlbGV0ZWQiLCJza2lwUHJvdmlkZXIiLCJwcm9jZXNzaW5nIiwiY29uc29sZSIsImVycm9yIiwiXyIsIlJlZ2lzdHJ5RmFjdG9yeTIiLCJpbnN0YW5jZXMiLCJpdGVtcyIsInJlYWR5IiwiaGFzIiwic3BlY3MiLCJSZWdpc3RyeSIsInJlZ2lzdHJ5MiIsInJlZ2lzdGVyIiwiaXRlbSIsImdldCIsIl91dWlkIiwiaXNEZWxldGVkIiwicGFyZW50IiwidjQiLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwiaXNSZWFjdGl2ZSIsImtleXMiLCJsZW5ndGgiLCJiYXNlU3RhdGUiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjcmlwdG9yIiwicHJvY2VzcyIsInByb3AiLCJldmVudCIsImxpc3RlbmVyIiwib2ZmIiwiaW5pdGlhbGlzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxl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