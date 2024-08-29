System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/events@0.0.7/events"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","1.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep)],
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

// .beyond/uimport/temp/@beyond-js/reactive/model.1.2.0.js
var model_1_2_0_exports = {};
__export(model_1_2_0_exports, {
  IReactiveProperties: () => IReactiveProperties,
  ReactiveModel: () => ReactiveModel,
  ReactiveModelPublic: () => ReactiveModelPublic,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(model_1_2_0_exports);

// node_modules/@beyond-js/reactive/model/model.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/events@0.0.7/events"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@1.1.12/model"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/events/events", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 3748262404,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactiveModel = void 0;
    var _events = require2("@beyond-js/events/events");
    class ReactiveModel2 extends _events.Events {
      schema;
      #isReactive = true;
      debounceTimeout;
      batchUpdates = false;
      #ready = false;
      #initialValues = {};
      properties = [];
      fetching;
      fetched = false;
      processing = false;
      processed = false;
      loaded = false;
      get isReactive() {
        return this.#isReactive;
      }
      get ready() {
        return this.#ready;
      }
      set ready(value) {
        if (value === this.#ready) return;
        this.#ready = value;
        this.triggerEvent();
      }
      get isUnpublished() {
        const properties = this.getProperties();
        return Object.keys(properties).some(prop => {
          if (prop === "id" || typeof prop === "object") return false;
          return properties[prop] !== this.#initialValues[prop];
        });
      }
      constructor(specs) {
        super();
        if (!specs) specs = {};
        this.reactiveProps(["fetching", "fetched", "processing", "processed", "loaded"]);
        if (specs.properties && Array.isArray(specs.properties)) {
          this.properties = specs.properties;
          this.reactiveProps(specs.properties, specs);
        }
        if (specs) this.initialValues(specs);
      }
      #setProperties(specs) {}
      initialValues(values) {
        if (!values) return this.#initialValues;
        let data = {
          ...values
        };
        delete data.properties;
        this.#initialValues = data;
        return this.initialValues;
      }
      reactiveProps(props, values) {
        for (const propKey of props) {
          const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
          const initialValue = values?.[propKey] ? values[propKey] : descriptor ? descriptor.value : void 0;
          this.defineReactiveProp(propKey, initialValue);
        }
      }
      defineReactiveProp(propKey, initialValue) {
        const privatePropKey = `#${String(propKey)}`;
        Object.defineProperty(this, propKey, {
          get: () => {
            if (!Object.prototype.hasOwnProperty.call(this, privatePropKey)) {
              this[privatePropKey] = initialValue;
            }
            return this[privatePropKey];
          },
          set: newVal => {
            if (newVal === this[privatePropKey]) return;
            this[privatePropKey] = newVal;
            this.triggerEvent();
          },
          enumerable: true,
          configurable: true
        });
      }
      triggerEvent = (event = "change", delay = 0) => {
        this.trigger(event);
        this.debounceTimeout = null;
      };
      set(properties, batch = false) {
        if (batch) {
          this.batchUpdates = true;
        }
        this.#set(properties);
        if (batch) {
          this.batchUpdates = false;
          this.triggerEvent();
        }
      }
      isSameObject = (a, b) => JSON.stringify(a) === JSON.stringify(b);
      #set(properties, trigger = true) {
        let updated = false;
        if (!properties) return;
        try {
          const keys = Object.keys(properties);
          keys.forEach(prop => {
            if (!this.properties || !this.properties.includes(prop)) return;
            const isObject = typeof properties[prop] === "object";
            const isSameObject = isObject && this.isSameObject(properties[prop], this[prop]);
            if (this[prop] === properties[prop] || isSameObject) return;
            const descriptor = Object.getOwnPropertyDescriptor(this, prop);
            if (!descriptor?.set) return;
            this[prop] = properties[prop];
            updated = true;
          });
        } catch (e) {
          throw new Error(`Error setting properties: ${e.message}`);
        } finally {
          if (trigger && updated && !this.batchUpdates) this.triggerEvent();
        }
      }
      getProperties() {
        const props = {};
        const properties = this.properties;
        properties.forEach(property => {
          if (typeof property === "object") {
            if (!Object.prototype.hasOwnProperty.call(property, "name")) return;
            const collection = property;
            if (collection.type === "collection") {
              props[property.name] = this[property.name].items.map(item => item.getProperties());
              return;
            }
            props[property.name] = this[property.name];
          } else {
            const name = property;
            props[name] = this[name];
          }
        });
        return props;
      }
    }
    exports.ReactiveModel = ReactiveModel2;
  }
});
ims.set("./interfaces/initial-values", {
  hash: 3875886425,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./interfaces/reactive-constructor-specs", {
  hash: 77790665,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./interfaces/reactive-props", {
  hash: 620798412,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./interfaces/reactive-public-props", {
  hash: 1896226094,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "ReactiveModel",
  "name": "ReactiveModel"
}, {
  "im": "./interfaces/reactive-props",
  "from": "IReactiveProperties",
  "name": "IReactiveProperties"
}, {
  "im": "./interfaces/reactive-public-props",
  "from": "ReactiveModelPublic",
  "name": "ReactiveModelPublic"
}];
var ReactiveModel, IReactiveProperties, ReactiveModelPublic;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactiveModel") && (ReactiveModel = require2 ? require2("./index").ReactiveModel : value);
  (require2 || prop === "IReactiveProperties") && (IReactiveProperties = require2 ? require2("./interfaces/reactive-props").IReactiveProperties : value);
  (require2 || prop === "ReactiveModelPublic") && (ReactiveModelPublic = require2 ? require2("./interfaces/reactive-public-props").ReactiveModelPublic : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwuMS4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvaW5pdGlhbC12YWx1ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvcmVhY3RpdmUtY29uc3RydWN0b3Itc3BlY3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvcmVhY3RpdmUtcHJvcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvcmVhY3RpdmUtcHVibGljLXByb3BzLnRzIl0sIm5hbWVzIjpbIm1vZGVsXzFfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIklSZWFjdGl2ZVByb3BlcnRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiUmVhY3RpdmVNb2RlbFB1YmxpYyIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfZXZlbnRzIiwicmVxdWlyZTIiLCJSZWFjdGl2ZU1vZGVsMiIsIkV2ZW50cyIsInNjaGVtYSIsImlzUmVhY3RpdmUiLCJkZWJvdW5jZVRpbWVvdXQiLCJiYXRjaFVwZGF0ZXMiLCJyZWFkeSIsImluaXRpYWxWYWx1ZXMiLCJwcm9wZXJ0aWVzIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwiaXNVbnB1Ymxpc2hlZCIsImdldFByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsInByb3AiLCJjb25zdHJ1Y3RvciIsInNwZWNzIiwicmVhY3RpdmVQcm9wcyIsIkFycmF5IiwiaXNBcnJheSIsInNldFByb3BlcnRpZXMiLCIjc2V0UHJvcGVydGllcyIsInZhbHVlcyIsImRhdGEiLCJwcm9wcyIsInByb3BLZXkiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaW5pdGlhbFZhbHVlIiwiZGVmaW5lUmVhY3RpdmVQcm9wIiwicHJpdmF0ZVByb3BLZXkiLCJTdHJpbmciLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNldCIsIm5ld1ZhbCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJldmVudCIsImRlbGF5IiwidHJpZ2dlciIsImJhdGNoIiwiaXNTYW1lT2JqZWN0IiwiYSIsImIiLCJKU09OIiwic3RyaW5naWZ5IiwiI3NldCIsInVwZGF0ZWQiLCJmb3JFYWNoIiwiaW5jbHVkZXMiLCJpc09iamVjdCIsImUiLCJFcnJvciIsIm1lc3NhZ2UiLCJwcm9wZXJ0eSIsImNvbGxlY3Rpb24iLCJ0eXBlIiwibmFtZSIsIml0ZW1zIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FB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QSxLQUFTLGNBQWM7Y0FDckNwQyxLQUFBLENBQU1rQyxRQUFBLENBQVNHLElBQUEsSUFBUSxLQUFLSCxRQUFBLENBQVNHLElBQUEsRUFBTUMsS0FBQSxDQUFNQyxHQUFBLENBQUtDLElBQUEsSUFBY0EsSUFBQSxDQUFLdEQsYUFBQSxDQUFhLENBQUU7Y0FDeEY7O1lBRURjLEtBQUEsQ0FBTWtDLFFBQUEsQ0FBU0csSUFBQSxJQUFRLEtBQUtILFFBQUEsQ0FBU0csSUFBQTtpQkFDL0I7WUFDTixNQUFNQSxJQUFBLEdBQU9ILFFBQUE7WUFDYmxDLEtBQUEsQ0FBTXFDLElBQUEsSUFBUSxLQUFLQSxJQUFBOztRQUVyQixDQUFDO1FBQ0QsT0FBT3JDLEtBQUE7TUFDUjs7SUFDQW5DLE9BQUEsQ0FBQUwsYUFBQSxHQUFBUyxjQUFBOzs7Ozs7SUN2TEQ7O0lBRUFrQixNQUFBLENBQUFxQixjQUFBLENBQUEzQyxPQUFBO01BQ0FrQixLQUFBO0lBQ0E7Ozs7OztJQ0pBOztJQUVBSSxNQUFBLENBQUFxQixjQUFBLENBQUEzQyxPQUFBO01BQ0FrQixLQUFBO0lBQ0E7Ozs7OztJQ0pBOztJQUVBSSxNQUFBLENBQUFxQixjQUFBLENBQUEzQyxPQUFBO01BQ0FrQixLQUFBO0lBQ0E7Ozs7OztJQ0pBOztJQUVBSSxNQUFBLENBQUFxQixjQUFBLENBQUEzQyxPQUFBO01BQ0FrQixLQUFBO0lBQ0EiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=