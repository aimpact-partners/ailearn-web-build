System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/events@0.0.6/events"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.6"],["@beyond-js/reactive","1.1.11"]]);
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

// .beyond/uimport/temp/@beyond-js/reactive/model.1.1.11.js
var model_1_1_11_exports = {};
__export(model_1_1_11_exports, {
  IReactiveConstructorSpecs: () => IReactiveConstructorSpecs,
  IReactiveProperties: () => IReactiveProperties,
  ReactiveModel: () => ReactiveModel,
  ReactiveModelPublic: () => ReactiveModelPublic,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  reactiveProps: () => reactiveProps
});
module.exports = __toCommonJS(model_1_1_11_exports);

// node_modules/@beyond-js/reactive/model/model.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/events@0.0.6/events"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@1.1.10/model"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/events/events", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 2556959846,
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
      constructor(specs = {}) {
        super();
        this.reactiveProps(["fetching", "fetched", "processing", "processed", "loaded", "ready"]);
        if (specs.properties && Array.isArray(specs.properties)) {
          this.properties = specs.properties;
        }
        if (specs) this.initialValues(specs);
      }
      initialValues(values) {
        if (!values) return this.#initialValues;
        let data = {
          ...values
        };
        delete data.properties;
        this.#set(data);
        this.#initialValues = data;
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
      #set(properties) {
        let updated = false;
        try {
          Object.keys(properties).forEach(prop => {
            if (!this.properties || !this.properties.includes(prop)) return;
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
      set(properties) {
        this.#set(properties);
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
ims.set("./interfaces/reactive-constructor-specs", {
  hash: 383762538,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
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
  "im": "./interfaces/reactive-constructor-specs",
  "from": "IReactiveConstructorSpecs",
  "name": "IReactiveConstructorSpecs"
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
var ReactiveModel, IReactiveConstructorSpecs, IReactiveProperties, ReactiveModelPublic, reactiveProps;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactiveModel") && (ReactiveModel = require2 ? require2("./index").ReactiveModel : value);
  (require2 || prop === "IReactiveConstructorSpecs") && (IReactiveConstructorSpecs = require2 ? require2("./interfaces/reactive-constructor-specs").IReactiveConstructorSpecs : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwuMS4xLjExLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwvX19zb3VyY2VzL21vZGVsL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwvX19zb3VyY2VzL21vZGVsL3JlYWN0aXZlLWNvbnN0cnVjdG9yLXNwZWNzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwvX19zb3VyY2VzL21vZGVsL3JlYWN0aXZlLXByb3BzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwvX19zb3VyY2VzL21vZGVsL3JlYWN0aXZlLXB1YmxpYy1wcm9wcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL21vZGVsL19fc291cmNlcy9tb2RlbC9wcm9wZXJ0eS50cyJdLCJuYW1lcyI6WyJtb2RlbF8xXzFfMTFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSVJlYWN0aXZlQ29uc3RydWN0b3JTcGVjcyIsIklSZWFjdGl2ZVByb3BlcnRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiUmVhY3RpdmVNb2RlbFB1YmxpYyIsIl9fYmV5b25kX3BrZyIsImhtciIsInJlYWN0aXZlUHJvcHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2V2ZW50cyIsInJlcXVpcmUyIiwiUmVhY3RpdmVNb2RlbDIiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInJlYWR5IiwicHJvY2Vzc2VkIiwicHJvcGVydGllcyIsImxvYWRlZCIsImluaXRpYWxWYWx1ZXMiLCJpc1VucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsImNvbnN0cnVjdG9yIiwic3BlY3MiLCJBcnJheSIsImlzQXJyYXkiLCJ2YWx1ZXMiLCJkYXRhIiwic2V0IiwicHJvcHMiLCJwcm9wS2V5IiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImluaXRpYWxWYWx1ZSIsInZhbHVlIiwiZGVmaW5lUmVhY3RpdmVQcm9wIiwicHJpdmF0ZVByb3BLZXkiLCJTdHJpbmciLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImhhc093blByb3BlcnR5IiwibmV3VmFsIiwidHJpZ2dlckV2ZW50IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImV2ZW50IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyIiwiI3NldCIsInVwZGF0ZWQiLCJmb3JFYWNoIiwiaW5jbHVkZXMiLCJzYW1lT2JqZWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJFcnJvciIsInNrZWxldG9uIiwicHJvcGVydHkiLCJjb2xsZWN0aW9uIiwidHlwZSIsIm5hbWUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJfZGVmaW5lUmVhY3RpdmVQcm9wIiwidGFyZ2V0IiwicmVhY3RpdmVQcm9wczIiLCJ0YXJnZXRQcm90byIsInByb3RvdHlwZSIsInNldFJlYWN0aXZlUHJvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSx5QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHlCQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBWCxvQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEsSUFBQVksT0FBQSxHQUFBQyxRQUFBO0lBZWlCLE1BQWdCQyxjQUFBLFNBQXlCRixPQUFBLENBQUFHLE1BQUEsQ0FBTTtNQUNyREMsTUFBQTtNQUNWLENBQUFDLFVBQUEsR0FBdUI7TUFDdkIsSUFBSUEsV0FBQSxFQUFVO1FBQ2IsT0FBTyxLQUFLLENBQUFBLFVBQUE7TUFDYjtNQUVBQyxRQUFBO01BQ0FDLE9BQUEsR0FBbUI7TUFDbkJDLFVBQUEsR0FBc0I7TUFDdEJDLEtBQUEsR0FBaUI7TUFDakJDLFNBQUEsR0FBcUI7TUFDWEMsVUFBQTtNQUNWQyxNQUFBLEdBQWtCO01BRWxCLENBQUFDLGFBQUEsR0FBc0M7TUFDdEMsSUFBSUMsY0FBQSxFQUFhO1FBQ2hCLE1BQU1ILFVBQUEsR0FBYSxLQUFLSSxhQUFBLENBQWE7UUFDckMsT0FBT0MsTUFBQSxDQUFPQyxJQUFBLENBQUtOLFVBQVUsRUFBRU8sSUFBQSxDQUFLQyxJQUFBLElBQU87VUFDMUMsSUFBSUEsSUFBQSxLQUFTLFFBQVEsT0FBT0EsSUFBQSxLQUFTLFVBQVUsT0FBTztVQUN0RCxPQUFPUixVQUFBLENBQVdRLElBQUEsTUFBVSxLQUFLLENBQUFOLGFBQUEsQ0FBZU0sSUFBQTtRQUNqRCxDQUFDO01BQ0Y7TUFDQUMsWUFBWUMsS0FBQSxHQUFtQyxJQUFFO1FBQ2hELE1BQUs7UUFDTCxLQUFLekIsYUFBQSxDQUFtQyxDQUFDLFlBQVksV0FBVyxjQUFjLGFBQWEsVUFBVSxPQUFPLENBQUM7UUFFN0csSUFBSXlCLEtBQUEsQ0FBTVYsVUFBQSxJQUFjVyxLQUFBLENBQU1DLE9BQUEsQ0FBUUYsS0FBQSxDQUFNVixVQUFVLEdBQUc7VUFDeEQsS0FBS0EsVUFBQSxHQUFhVSxLQUFBLENBQU1WLFVBQUE7O1FBRXpCLElBQUlVLEtBQUEsRUFBTyxLQUFLUixhQUFBLENBQWNRLEtBQUs7TUFDcEM7TUFFQVIsY0FBY1csTUFBQSxFQUFPO1FBQ3BCLElBQUksQ0FBQ0EsTUFBQSxFQUFRLE9BQU8sS0FBSyxDQUFBWCxhQUFBO1FBQ3pCLElBQUlZLElBQUEsR0FBTztVQUFFLEdBQUdEO1FBQU07UUFDdEIsT0FBT0MsSUFBQSxDQUFLZCxVQUFBO1FBRVosS0FBSyxDQUFBZSxHQUFBLENBQUtELElBQUk7UUFDZCxLQUFLLENBQUFaLGFBQUEsR0FBaUJZLElBQUE7TUFDdkI7TUFFVTdCLGNBQWlCK0IsS0FBQSxFQUFxQjtRQUMvQyxXQUFXQyxPQUFBLElBQVdELEtBQUEsRUFBTztVQUM1QixNQUFNRSxVQUFBLEdBQWFiLE1BQUEsQ0FBT2Msd0JBQUEsQ0FBeUIsTUFBTUYsT0FBTztVQUNoRSxNQUFNRyxZQUFBLEdBQWVGLFVBQUEsR0FBYUEsVUFBQSxDQUFXRyxLQUFBLEdBQVE7VUFFckQsS0FBS0Msa0JBQUEsQ0FBbUJMLE9BQUEsRUFBU0csWUFBWTs7TUFFL0M7TUFFVUUsbUJBQXNCTCxPQUFBLEVBQWtCRyxZQUFBLEVBQXdCO1FBQ3pFLE1BQU1HLGNBQUEsR0FBaUIsS0FBS0MsTUFBQSxDQUFPUCxPQUFPO1FBRTFDWixNQUFBLENBQU9vQixjQUFBLENBQWUsTUFBTVIsT0FBQSxFQUFTO1VBQ3BDUyxJQUFBLEVBQUc7WUFDRixJQUFJLENBQUMsS0FBS0MsY0FBQSxDQUFlSixjQUFjLEdBQUc7Y0FDekMsS0FBS0EsY0FBQSxJQUFrQkgsWUFBQTs7WUFFeEIsT0FBTyxLQUFLRyxjQUFBO1VBQ2I7VUFDQVIsSUFBSWEsTUFBQSxFQUFrQjtZQUNyQixJQUFJQSxNQUFBLEtBQVcsS0FBS0wsY0FBQSxHQUFpQjtZQUNyQyxLQUFLQSxjQUFBLElBQWtCSyxNQUFBO1lBQ3ZCLEtBQUtDLFlBQUEsQ0FBWTtVQUNsQjtVQUNBQyxVQUFBLEVBQVk7VUFDWkMsWUFBQSxFQUFjO1NBQ2Q7TUFDRjtNQVNBRixZQUFBLEdBQWVBLENBQUNHLEtBQUEsR0FBZ0IsYUFBa0I7UUFDakRDLFVBQUEsQ0FBV0MsVUFBQSxDQUFXLE1BQUs7VUFDMUIsS0FBS0MsT0FBQSxDQUFRSCxLQUFLO1FBQ25CLEdBQUcsQ0FBQztNQUNMO01BUUEsQ0FBQWpCLEdBQUFxQixDQUFLcEMsVUFBQSxFQUEyQztRQUMvQyxJQUFJcUMsT0FBQSxHQUFVO1FBQ2QsSUFBSTtVQUNIaEMsTUFBQSxDQUFPQyxJQUFBLENBQUtOLFVBQVUsRUFBRXNDLE9BQUEsQ0FBUTlCLElBQUEsSUFBTztZQUN0QyxJQUFJLENBQUMsS0FBS1IsVUFBQSxJQUFjLENBQUMsS0FBS0EsVUFBQSxDQUFXdUMsUUFBQSxDQUFTL0IsSUFBSSxHQUFHO1lBQ3pELE1BQU1nQyxVQUFBLEdBQ0wsT0FBT3hDLFVBQUEsQ0FBV1EsSUFBQSxNQUFVLFlBQzVCaUMsSUFBQSxDQUFLQyxTQUFBLENBQVUxQyxVQUFBLENBQVdRLElBQUEsQ0FBSyxNQUFNaUMsSUFBQSxDQUFLQyxTQUFBLENBQVUsS0FBS2xDLElBQUEsQ0FBSztZQUUvRCxJQUFJLEtBQUtBLElBQUEsTUFBVVIsVUFBQSxDQUFXUSxJQUFBLEtBQVNnQyxVQUFBLEVBQVk7WUFDbkQsTUFBTXRCLFVBQUEsR0FBYWIsTUFBQSxDQUFPYyx3QkFBQSxDQUF5QixNQUFNWCxJQUFJO1lBQzdELElBQUlVLFVBQUEsRUFBWUgsR0FBQSxFQUFLO1lBRXJCLEtBQUtQLElBQUEsSUFBUVIsVUFBQSxDQUFXUSxJQUFBO1lBQ3hCNkIsT0FBQSxHQUFVO1VBQ1gsQ0FBQztpQkFDT00sQ0FBQSxFQUFQO1VBQ0QsTUFBTSxJQUFJQyxLQUFBLENBQU0sNkJBQTZCRCxDQUFBLEVBQUc7a0JBQ2hEO1VBQ0EsSUFBSU4sT0FBQSxFQUFTLEtBQUtSLFlBQUEsQ0FBWTs7TUFFaEM7TUFFQWQsSUFBSWYsVUFBQSxFQUEyQztRQUM5QyxLQUFLLENBQUFlLEdBQUEsQ0FBS2YsVUFBVTtNQUNyQjtNQUVBSSxjQUFBLEVBQWE7UUFDWixNQUFNWSxLQUFBLEdBQTZCO1FBQ25DLE1BQU1oQixVQUFBLEdBQWEsS0FBS0EsVUFBQSxJQUFjLEtBQUs2QyxRQUFBO1FBTTNDN0MsVUFBQSxDQUFXc0MsT0FBQSxDQUFTUSxRQUFBLElBQWdDO1VBQ25ELElBQUksT0FBT0EsUUFBQSxLQUFhLFVBQVU7WUFDakMsSUFBSSxDQUFDQSxRQUFBLENBQVNuQixjQUFBLENBQWUsTUFBTSxHQUFHO1lBTXRDLE1BQU1vQixVQUFBLEdBQWFELFFBQUE7WUFDbkIsSUFBSUMsVUFBQSxDQUFXQyxJQUFBLEtBQVMsY0FBYztjQUNyQ2hDLEtBQUEsQ0FBTThCLFFBQUEsQ0FBU0csSUFBQSxJQUFRLEtBQUtILFFBQUEsQ0FBU0csSUFBQSxFQUFNQyxLQUFBLENBQU1DLEdBQUEsQ0FBS0MsSUFBQSxJQUFjQSxJQUFBLENBQUtoRCxhQUFBLENBQWEsQ0FBRTtjQUN4Rjs7WUFFRFksS0FBQSxDQUFNOEIsUUFBQSxDQUFTRyxJQUFBLElBQVEsS0FBS0gsUUFBQSxDQUFTRyxJQUFBOztVQUV0QyxJQUFJQSxJQUFBLEdBQU9ILFFBQUE7VUFFWDlCLEtBQUEsQ0FBTWlDLElBQUEsSUFBUSxLQUFLQSxJQUFBO1FBQ3BCLENBQUM7UUFDRCxPQUFPakMsS0FBQTtNQUNSOztJQUNBN0IsT0FBQSxDQUFBTixhQUFBLEdBQUFVLGNBQUE7Ozs7OztJQ2pLRDs7SUFFQWMsTUFBQSxDQUFBb0IsY0FBQSxDQUFBdEMsT0FBQTtNQUNBa0MsS0FBQTtJQUNBOzs7Ozs7SUNKQTs7SUFFQWhCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQXRDLE9BQUE7TUFDQWtDLEtBQUE7SUFDQTs7Ozs7O0lDSkE7O0lBRUFoQixNQUFBLENBQUFvQixjQUFBLENBQUF0QyxPQUFBO01BQ0FrQyxLQUFBO0lBQ0E7Ozs7Ozs7Ozs7Ozs7SUNIQSxTQUFTZ0Msb0JBQXVCQyxNQUFBLEVBQTBCckMsT0FBQSxFQUFrQkcsWUFBQSxFQUF3QjtNQUNuRyxNQUFNRyxjQUFBLEdBQWlCLEtBQUtDLE1BQUEsQ0FBT1AsT0FBTztNQUUxQ1osTUFBQSxDQUFPb0IsY0FBQSxDQUFlNkIsTUFBQSxFQUFRckMsT0FBQSxFQUFTO1FBQ3RDUyxJQUFBLEVBQUc7VUFDRixJQUFJLENBQUM0QixNQUFBLENBQU8zQixjQUFBLENBQWVKLGNBQWMsR0FBRztZQUMzQytCLE1BQUEsQ0FBTy9CLGNBQUEsSUFBa0JILFlBQUE7O1VBRTFCLE9BQU9rQyxNQUFBLENBQU8vQixjQUFBO1FBQ2Y7UUFDQVIsSUFBSWEsTUFBQSxFQUFrQjtVQUNyQixJQUFJQSxNQUFBLEtBQVcwQixNQUFBLENBQU8vQixjQUFBLEdBQWlCO1VBQ3ZDK0IsTUFBQSxDQUFPL0IsY0FBQSxJQUFrQkssTUFBQTtVQUN6QjBCLE1BQUEsQ0FBT3pCLFlBQUEsQ0FBWTtRQUNwQjtRQUNBQyxVQUFBLEVBQVk7UUFDWkMsWUFBQSxFQUFjO09BQ2Q7SUFDRjtJQUNrQixTQUFVd0IsZUFDM0J2QyxLQUFBLEVBQXFCO01BRXJCLE9BQU8sVUFBVXNDLE1BQUEsRUFBb0Y7UUFDcEcsTUFBTUUsV0FBQSxHQUFjLGVBQWVGLE1BQUEsR0FBU0EsTUFBQSxDQUFPRyxTQUFBLEdBQVlILE1BQUE7UUFFL0QsV0FBV3JDLE9BQUEsSUFBV0QsS0FBQSxFQUFPO1VBQzVCLE1BQU1FLFVBQUEsR0FBYWIsTUFBQSxDQUFPYyx3QkFBQSxDQUF5QnFDLFdBQUEsRUFBYXZDLE9BQU87VUFDdkUsTUFBTUcsWUFBQSxHQUFlRixVQUFBLEdBQWFBLFVBQUEsQ0FBV0csS0FBQSxHQUFRO1VBRXJEQyxrQkFBQSxDQUFtQmtDLFdBQUEsRUFBYXZDLE9BQUEsRUFBU0csWUFBWTs7TUFFdkQ7SUFDRDtJQUVNLFNBQVVFLG1CQUFzQmdDLE1BQUEsRUFBMEJyQyxPQUFBLEVBQWtCRyxZQUFBLEVBQXdCO01BQ3pHLE1BQU1HLGNBQUEsR0FBaUIsS0FBS0MsTUFBQSxDQUFPUCxPQUFPO01BRTFDWixNQUFBLENBQU9vQixjQUFBLENBQWU2QixNQUFBLEVBQVFyQyxPQUFBLEVBQVM7UUFDdENTLElBQUEsRUFBRztVQUNGLElBQUksQ0FBQzRCLE1BQUEsQ0FBTzNCLGNBQUEsQ0FBZUosY0FBYyxHQUFHO1lBQzNDK0IsTUFBQSxDQUFPL0IsY0FBQSxJQUFrQkgsWUFBQTs7VUFFMUIsT0FBT2tDLE1BQUEsQ0FBTy9CLGNBQUE7UUFDZjtRQUNBUixJQUFJYSxNQUFBLEVBQWtCO1VBQ3JCMEIsTUFBQSxDQUFPSSxlQUFBLENBQWdCekMsT0FBQSxFQUFTVyxNQUFNO1FBQ3ZDO1FBQ0FFLFVBQUEsRUFBWTtRQUNaQyxZQUFBLEVBQWM7T0FDZDtJQUNGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYXBwL291dCJ9