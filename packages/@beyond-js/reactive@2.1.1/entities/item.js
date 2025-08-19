System.register(["@beyond-js/kernel@0.1.12/bundle","zod@3.25.67","@beyond-js/events@0.0.7/events","@beyond-js/reactive@2.1.1/model","uuid@11.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["zod","3.25.67"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","2.1.1"],["uuid","11.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('zod@3.25.67', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/reactive@2.1.1/model', dep), dep => dependencies.set('uuid@11.1.0', dep)],
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

// .beyond/uimport/@beyond-js/reactive/entities/item.2.1.1.js
var item_2_1_1_exports = {};
__export(item_2_1_1_exports, {
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
module.exports = __toCommonJS(item_2_1_1_exports);

// node_modules/@beyond-js/reactive/entities/item/entities/item.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/reactive@2.1.1/model"), 0);
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
  hash: 1175604535,
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
  hash: 1412870569,
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
  hash: 1251785185,
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
  hash: 1952711566,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./types", {
  hash: 3056830740,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL2l0ZW0uMi4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9pdGVtL2VudGl0aWVzL2l0ZW0uYnJvd3Nlci5tanMiXSwibmFtZXMiOlsiaXRlbV8yXzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJJRW50aXR5UHJvdmlkZXIiLCJJSXRlbSIsIklJdGVtUHJvcHMiLCJJUmVjb3JkUHJvcHMiLCJJdGVtIiwiSXRlbUlkIiwiUmVnaXN0cnlGYWN0b3J5IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImRlcGVuZGVuY3lfMCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiZGVwZW5kZW5jeV8xIiwiZGVwZW5kZW5jeV8yIiwiaW1wb3J0X21ldGEiLCJCdW5kbGUiLCJfX0J1bmRsZSIsIl9fcGtnIiwidXJsIiwicGFja2FnZSIsImRlcGVuZGVuY2llcyIsInVwZGF0ZSIsImltcyIsIk1hcCIsInNldCIsImhhc2giLCJjcmVhdG9yIiwicmVxdWlyZTIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsIiwiX2ZhY3RvcnkiLCJJdGVtMiIsIlJlYWN0aXZlTW9kZWwiLCJmYWN0b3J5IiwiZW50aXR5IiwicmVnaXN0cnkiLCJfX3JlZ2lzdHJ5U3RhdGUiLCJzdGF0ZSIsImZldGNoZWQiLCJmb3VuZCIsIl9wcm92aWRlciIsInByb3ZpZGVyIiwiX19pbnN0YW5jZUlkIiwiaW5zdGFuY2VJZCIsImRyYWZ0IiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiYXJncyIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsIm9uU2V0IiwiYmluZCIsIm9uIiwiZ2V0SW5zdGFuY2UiLCJpbml0aWFsaXplIiwiZ2V0SXRlbSIsImdldFByb3BlcnR5IiwicHJvcGVydHlWYWx1ZXMiLCJnZXRWYWx1ZXMiLCJzZXRJbml0aWFsVmFsdWVzIiwiZm9yRWFjaCIsInByb3BlcnR5Iiwic2V0VmFsdWVzIiwidmFsdWVzIiwicmVzcG9uc2UiLCJnZXRQcm9wZXJ0aWVzIiwiX2xvYWQiLCJsb2FkIiwibmFtZSIsImRhdGEiLCJ0cmlnZ2VyIiwiZSIsInB1Ymxpc2giLCJzYXZlQ2hhbmdlcyIsInVwZGF0ZWQiLCJzdGF0dXMiLCJkZWxldGUiLCJvcHRpb25zIiwiaWQiLCJkZWxldGVkIiwic2tpcFByb3ZpZGVyIiwicHJvY2Vzc2luZyIsImNvbnNvbGUiLCJlcnJvciIsIl8iLCJSZWdpc3RyeUZhY3RvcnkyIiwiaW5zdGFuY2VzIiwiaXRlbXMiLCJyZWFkeSIsImhhcyIsInNwZWNzIiwiUmVnaXN0cnkiLCJyZWdpc3RyeTIiLCJyZWdpc3RlciIsIml0ZW0iLCJnZXQiLCJfdXVpZCIsImlzRGVsZXRlZCIsInBhcmVudCIsInY0IiwiZW50cmllcyIsInJlZHVjZSIsImFjYyIsImtleSIsImlzUmVhY3RpdmUiLCJrZXlzIiwibGVuZ3RoIiwiYmFzZVN0YXRlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzY3JpcHRvciIsInByb2Nlc3MiLCJwcm9wIiwiZXZlbnQiLCJsaXN0ZW5lciIsIm9mZiIsImluaXRpYWxpc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsZUFBQSxF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