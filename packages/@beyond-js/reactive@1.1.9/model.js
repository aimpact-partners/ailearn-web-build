System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/events@0.0.6/events"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.6"],["@beyond-js/reactive","1.1.9"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/events@0.0.6/events', dep)],
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

// .beyond/uimport/temp/@beyond-js/reactive/model.1.1.9.js
var model_1_1_9_exports = {};
__export(model_1_1_9_exports, {
  IReactiveProperties: () => IReactiveProperties,
  ReactiveModel: () => ReactiveModel,
  ReactiveModelPublic: () => ReactiveModelPublic,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  reactiveProps: () => reactiveProps
});
module.exports = __toCommonJS(model_1_1_9_exports);

// node_modules/@beyond-js/reactive/model/model.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/events@0.0.6/events"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@1.1.9/model"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/events/events", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 3309471061,
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
      get isReactive() {
        return this.#isReactive;
      }
      fetching;
      fetched = false;
      processing = false;
      ready = false;
      processed = false;
      properties;
      loaded = false;
      #initialValues = {};
      get isUnpublished() {
        const properties = this.getProperties();
        return Object.keys(properties).some(prop => {
          if (prop === "id" || typeof prop === "object") return false;
          return properties[prop] !== this.#initialValues[prop];
        });
      }
      constructor(properties) {
        super();
        this.reactiveProps(["fetching", "fetched", "processing", "processed", "loaded", "ready"]);
        if (properties) this.initialValues(properties);
      }
      initialValues(values) {
        if (!values) return this.#initialValues;
        this.set(values);
        this.#initialValues = values;
      }
      reactiveProps(props) {
        for (const propKey of props) {
          const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
          const initialValue = descriptor ? descriptor.value : void 0;
          this.defineReactiveProp(propKey, initialValue);
        }
      }
      defineReactiveProp(propKey, initialValue) {
        const privatePropKey = `__${String(propKey)}`;
        Object.defineProperty(this, propKey, {
          get() {
            if (!this.hasOwnProperty(privatePropKey)) {
              this[privatePropKey] = initialValue;
            }
            return this[privatePropKey];
          },
          set(newVal) {
            if (newVal === this[privatePropKey]) return;
            this[privatePropKey] = newVal;
            this.triggerEvent();
          },
          enumerable: true,
          configurable: true
        });
      }
      triggerEvent = (event = "change") => {
        globalThis.setTimeout(() => {
          this.trigger(event);
        }, 0);
      };
      set(properties) {
        let props = Object.keys(properties);
        let updated = false;
        try {
          Object.keys(properties).forEach(prop => {
            const sameObject = typeof properties[prop] === "object" && JSON.stringify(properties[prop]) === JSON.stringify(this[prop]);
            if (this[prop] === properties[prop] || sameObject) return;
            const descriptor = Object.getOwnPropertyDescriptor(this, prop);
            if (descriptor?.set) return;
            this[prop] = properties[prop];
            updated = true;
          });
        } catch (e) {
          throw new Error(`Error setting properties: ${e}`);
        } finally {
          if (updated) this.triggerEvent();
        }
      }
      getProperties() {
        const props = {};
        const properties = this.properties || this.skeleton;
        properties.forEach(property => {
          if (typeof property === "object") {
            if (!property.hasOwnProperty("name")) return;
            const collection = property;
            if (collection.type === "collection") {
              props[property.name] = this[property.name].items.map(item => item.getProperties());
              return;
            }
            props[property.name] = this[property.name];
          }
          let name = property;
          props[name] = this[name];
        });
        return props;
      }
    }
    exports.ReactiveModel = ReactiveModel2;
  }
});
ims.set("./interfaces/reactive-props", {
  hash: 2165090548,
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
ims.set("./property", {
  hash: 3124326805,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.defineReactiveProp = defineReactiveProp;
    exports.reactiveProps = reactiveProps2;
    function _defineReactiveProp(target, propKey, initialValue) {
      const privatePropKey = `__${String(propKey)}`;
      Object.defineProperty(target, propKey, {
        get() {
          if (!target.hasOwnProperty(privatePropKey)) {
            target[privatePropKey] = initialValue;
          }
          return target[privatePropKey];
        },
        set(newVal) {
          if (newVal === target[privatePropKey]) return;
          target[privatePropKey] = newVal;
          target.triggerEvent();
        },
        enumerable: true,
        configurable: true
      });
    }
    function reactiveProps2(props) {
      return function (target) {
        const targetProto = "prototype" in target ? target.prototype : target;
        for (const propKey of props) {
          const descriptor = Object.getOwnPropertyDescriptor(targetProto, propKey);
          const initialValue = descriptor ? descriptor.value : void 0;
          defineReactiveProp(targetProto, propKey, initialValue);
        }
      };
    }
    function defineReactiveProp(target, propKey, initialValue) {
      const privatePropKey = `__${String(propKey)}`;
      Object.defineProperty(target, propKey, {
        get() {
          if (!target.hasOwnProperty(privatePropKey)) {
            target[privatePropKey] = initialValue;
          }
          return target[privatePropKey];
        },
        set(newVal) {
          target.setReactiveProp(propKey, newVal);
        },
        enumerable: true,
        configurable: true
      });
    }
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
}, {
  "im": "./property",
  "from": "reactiveProps",
  "name": "reactiveProps"
}];
var ReactiveModel, IReactiveProperties, ReactiveModelPublic, reactiveProps;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactiveModel") && (ReactiveModel = require2 ? require2("./index").ReactiveModel : value);
  (require2 || prop === "IReactiveProperties") && (IReactiveProperties = require2 ? require2("./interfaces/reactive-props").IReactiveProperties : value);
  (require2 || prop === "ReactiveModelPublic") && (ReactiveModelPublic = require2 ? require2("./interfaces/reactive-public-props").ReactiveModelPublic : value);
  (require2 || prop === "reactiveProps") && (reactiveProps = require2 ? require2("./property").reactiveProps : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwuMS4xLjkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvcmVhY3RpdmUtcHJvcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvcmVhY3RpdmUtcHVibGljLXByb3BzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwvX19zb3VyY2VzL21vZGVsL3Byb3BlcnR5LnRzIl0sIm5hbWVzIjpbIm1vZGVsXzFfMV85X2V4cG9ydHMiLCJfX2V4cG9ydCIsIklSZWFjdGl2ZVByb3BlcnRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiUmVhY3RpdmVNb2RlbFB1YmxpYyIsIl9fYmV5b25kX3BrZyIsImhtciIsInJlYWN0aXZlUHJvcHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2V2ZW50cyIsInJlcXVpcmUyIiwiUmVhY3RpdmVNb2RlbDIiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInJlYWR5IiwicHJvY2Vzc2VkIiwicHJvcGVydGllcyIsImxvYWRlZCIsImluaXRpYWxWYWx1ZXMiLCJpc1VucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsImNvbnN0cnVjdG9yIiwidmFsdWVzIiwic2V0IiwicHJvcHMiLCJwcm9wS2V5IiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImluaXRpYWxWYWx1ZSIsInZhbHVlIiwiZGVmaW5lUmVhY3RpdmVQcm9wIiwicHJpdmF0ZVByb3BLZXkiLCJTdHJpbmciLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImhhc093blByb3BlcnR5IiwibmV3VmFsIiwidHJpZ2dlckV2ZW50IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImV2ZW50IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyIiwidXBkYXRlZCIsImZvckVhY2giLCJzYW1lT2JqZWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJFcnJvciIsInNrZWxldG9uIiwicHJvcGVydHkiLCJjb2xsZWN0aW9uIiwidHlwZSIsIm5hbWUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJfZGVmaW5lUmVhY3RpdmVQcm9wIiwidGFyZ2V0IiwicmVhY3RpdmVQcm9wczIiLCJ0YXJnZXRQcm90byIsInByb3RvdHlwZSIsInNldFJlYWN0aXZlUHJvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVYsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLElBQUFXLE9BQUEsR0FBQUMsUUFBQTtJQWNpQixNQUFnQkMsY0FBQSxTQUF5QkYsT0FBQSxDQUFBRyxNQUFBLENBQU07TUFDckRDLE1BQUE7TUFDVixDQUFBQyxVQUFBLEdBQXVCO01BQ3ZCLElBQUlBLFdB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