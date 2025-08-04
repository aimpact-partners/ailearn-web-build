System.register(["@beyond-js/kernel@0.1.12/bundle","zod@3.25.67","@beyond-js/events@0.0.7/events"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["zod","3.25.67"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","2.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('zod@3.25.67', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep)],
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

// .beyond/uimport/@beyond-js/reactive/model.2.1.0.js
var model_2_1_0_exports = {};
__export(model_2_1_0_exports, {
  IReactiveModelOptions: () => IReactiveModelOptions,
  ModelProperties: () => ModelProperties,
  ReactiveModel: () => ReactiveModel,
  SetPropertiesResult: () => SetPropertiesResult,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(model_2_1_0_exports);

// node_modules/@beyond-js/reactive/model/model.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("zod@3.25.67"), 0);
var dependency_2 = __toESM(require("@beyond-js/events@0.0.7/events"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@2.1.0/model"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["zod", dependency_1], ["@beyond-js/events/events", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 1449358070,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactiveModel = void 0;
    var _zod = require2("zod");
    var _events = require2("@beyond-js/events/events");
    class ReactiveModel2 extends _events.Events {
      debounceTimeout;
      processing = false;
      processed = false;
      loaded = false;
      #ready = false;
      _reactiveProps = {};
      static isReactive() {
        return true;
      }
      get isReactive() {
        return true;
      }
      properties = [];
      #isDraft = false;
      get isDraft() {
        return this.#isDraft;
      }
      #propertyNames = /* @__PURE__ */new Set();
      get ready() {
        return this.#ready;
      }
      set ready(value) {
        this.#ready = value;
        this.trigger("ready");
        this.trigger("change");
      }
      schema;
      #initialValues = {};
      get initialValues() {
        return this.#initialValues;
      }
      get unpublished() {
        const properties = this.getProperties() ?? {};
        return Object.keys(properties).some(prop => {
          if (prop === "id") return false;
          if (Array.isArray(properties[prop])) {
            if (properties[prop].length !== this.#initialValues[prop]?.length) return true;
            return JSON.stringify(properties[prop]) !== JSON.stringify(this.#initialValues[prop]);
          }
          if (typeof properties[prop] === "object") {
            if (this[prop] instanceof ReactiveModel2) {
              return this[prop].unpublished;
            }
            return JSON.stringify(properties[prop]) !== JSON.stringify(this.#initialValues[prop]);
          }
          return properties[prop] !== this.#initialValues[prop];
        });
      }
      get isUnpublished() {
        return this.unpublished;
      }
      constructor({
        properties,
        ...props
      } = {
        properties: []
      }) {
        super();
        const defaultProps = ["fetching", "fetched", "processing", "processed", "loaded"];
        if (properties) {
          this.properties = properties;
          this.defineReactiveProps(properties, props);
          if (Object.keys(props).length > 0) {
            this.setInitialValues(props);
          }
        }
        this.defineReactiveProps(defaultProps, this.initialValues);
      }
      setInitialValues(specs) {
        if (!specs) return this.#initialValues;
        const values = {};
        this.properties.forEach(property => {
          if (typeof property !== "string") {
            property = property;
            values[property.name] = specs[property.name];
            return;
          }
          if (specs.hasOwnProperty(property)) {
            values[property] = specs[property];
          } else {
            values[property] = void 0;
          }
        });
        this.#isDraft = Object.keys(specs).length === 0;
        this.#initialValues = values;
        return this.#initialValues;
      }
      getProperty(key) {
        return this._reactiveProps[key];
      }
      property = this.getProperty;
      defineReactiveProp(propKey, initialValue, model = false) {
        this._reactiveProps[propKey] = initialValue;
        Object.defineProperty(this, propKey, {
          get: () => {
            return this._reactiveProps[propKey];
          },
          set: newVal => {
            if (model) {
              const instance = this._reactiveProps[propKey];
              this.trigger(`${propKey}.changed`, {
                value: newVal,
                previous: instance.getProperties()
              });
              this.trigger("change");
              this._reactiveProps[propKey].set(newVal);
              return;
            }
            if (newVal !== void 0 && newVal === this._reactiveProps[propKey]) return;
            const previous = this._reactiveProps[propKey];
            this._reactiveProps[propKey] = newVal;
            this.trigger(`${propKey}.changed`, {
              value: newVal,
              previous
            });
            this.trigger("change");
          },
          enumerable: true,
          configurable: true
        });
      }
      defineReactiveProps(props, values) {
        for (let propKey of props) {
          const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
          if (propKey === void 0) continue;
          if (typeof propKey !== "object") {
            this.#propertyNames.add(propKey);
            let initialValue2 = values?.[propKey] ?? descriptor?.value;
            this.defineReactiveProp(propKey, initialValue2);
            continue;
          }
          const data = propKey;
          const name = data.name;
          let initialValue = values?.[name] ?? descriptor?.value;
          const specs = data.properties ?? {};
          if (typeof data.value !== "function" && typeof data.value !== "object") {
            console.warn(`Invalid value type for  ${name}`);
            continue;
          }
          const parameters = data.value.isCollection ? {
            parent: this
          } : {
            parent: this,
            ...initialValue,
            ...specs
          };
          const instance = new data.value(parameters);
          if (data.value.isCollection) {
            instance.setItems(initialValue);
          }
          this.#propertyNames.add(name);
          this.defineReactiveProp(name, instance, true);
          continue;
        }
      }
      reactiveProps(props) {
        this.defineReactiveProps(props);
      }
      setProperty(propKey, value) {
        this._reactiveProps[propKey] = value;
      }
      validateProperty(propKey, value) {
        if (!this.schema) {
          return {
            valid: true,
            error: null
          };
        }
        if (!this.schema.shape[propKey]) {
          return {
            valid: false,
            error: new _zod.ZodError([{
              path: [propKey],
              message: `Property ${propKey} is not defined in the schema`,
              code: "custom"
            }])
          };
        }
        const propSchema = this.schema.shape[propKey];
        const result = propSchema.safeParse(value);
        if (!result.success) {
          return {
            valid: false,
            error: result.error
          };
        }
        return {
          valid: true,
          error: null
        };
      }
      isSameObject = (a, b) => JSON.stringify(a) === JSON.stringify(b);
      validate(properties) {
        const keys = Object.keys(properties);
        const errors = {};
        const onValidate = prop => {
          if (!this.properties || !this.properties.includes(prop)) {
            console.trace(`is not a property`, prop);
            return;
          }
          const validated = this.validateProperty(prop, properties[prop]);
          if (!validated.valid) {
            errors[prop] = validated.error;
          }
        };
        keys.forEach(onValidate);
        return {
          valid: !!Object.keys(errors).length,
          errors
        };
      }
      set(properties) {
        if (!properties) {
          console.warn("you are trying to set an empty object", this.constructor.name, properties);
          return {
            updated: false
          };
        }
        const keys = Object.keys(properties);
        let updated = false;
        const errors = {};
        const onSet = prop => {
          if (!this.#propertyNames.has(prop)) {
            return;
          }
          const validated = this.validateProperty(prop, properties[prop]);
          if (!validated.valid) {
            errors[prop] = validated;
            return;
          }
          if (this.getProperty(prop)?.isReactive) {
            const instance = this.getProperty(prop);
            instance.set(properties[prop]);
            if (instance.unpublished) updated = true;
            return;
          }
          const isObject = typeof properties[prop] === "object";
          const isSameObject = isObject && this.isSameObject([prop], this[prop]);
          if (this[prop] === properties[prop] || isSameObject) return;
          this[prop] = properties[prop];
          updated = true;
        };
        keys.forEach(onSet);
        if (updated) {
          this.trigger("change");
          this.trigger("set.executed");
        }
        return {
          updated,
          errors
        };
      }
      getProperties() {
        const props = {};
        const loop = property => {
          let name = property;
          if (typeof property === "object" && property.value.isReactive) {
            name = property.name;
            props[String(name)] = property.value.isCollection ? this[name].getItemProperties() : this[name]?.getProperties();
            return;
          }
          props[String(name)] = this[name];
        };
        this.properties.forEach(loop);
        return props;
      }
      revert() {
        this.set(this.initialValues);
      }
      saveChanges() {
        this.#initialValues = this.getProperties();
        this.#isDraft = false;
      }
      triggerEvent = (event = "change", params = {}) => {
        this.trigger(event);
      };
    }
    exports.ReactiveModel = ReactiveModel2;
  }
});
ims.set("./types/index", {
  hash: 2949560397,
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
  "im": "./types/index",
  "from": "ModelProperties",
  "name": "ModelProperties"
}, {
  "im": "./types/index",
  "from": "IReactiveModelOptions",
  "name": "IReactiveModelOptions"
}, {
  "im": "./types/index",
  "from": "SetPropertiesResult",
  "name": "SetPropertiesResult"
}];
var ReactiveModel, ModelProperties, IReactiveModelOptions, SetPropertiesResult;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactiveModel") && (ReactiveModel = require2 ? require2("./index").ReactiveModel : value);
  (require2 || prop === "ModelProperties") && (ModelProperties = require2 ? require2("./types/index").ModelProperties : value);
  (require2 || prop === "IReactiveModelOptions") && (IReactiveModelOptions = require2 ? require2("./types/index").IReactiveModelOptions : value);
  (require2 || prop === "SetPropertiesResult") && (SetPropertiesResult = require2 ? require2("./types/index").SetPropertiesResult : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL21vZGVsLjIuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwvX19zb3VyY2VzL21vZGVsL2luZGV4LnRzIl0sIm5hbWVzIjpbIm1vZGVsXzJfMV8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIklSZWFjdGl2ZU1vZGVsT3B0aW9ucyIsIk1vZGVsUHJvcGVydGllcyIsIlJlYWN0aXZlTW9kZWwiLCJTZXRQcm9wZXJ0aWVzUmVzdWx0IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl96b2QiLCJyZXF1aXJlMiIsIl9ldmVudHMiLCJSZWFjdGl2ZU1vZGVsMiIsIkV2ZW50cyIsImRlYm91bmNlVGltZW91dCIsInByb2Nlc3NpbmciLCJwcm9jZXNzZWQiLCJsb2FkZWQiLCJyZWFkeSIsIl9yZWFjdGl2ZVByb3BzIiwiaXNSZWFjdGl2ZSIsInByb3BlcnRpZXMiLCJpc0RyYWZ0IiwicHJvcGVydHlOYW1lcyIsIlNldCIsInZhbHVlIiwidHJpZ2dlciIsInNjaGVtYSIsImluaXRpYWxWYWx1ZXMiLCJ1bnB1Ymxpc2hlZCIsImdldFByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsInByb3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiaXNVbnB1Ymxpc2hlZCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJkZWZhdWx0UHJvcHMiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwic2V0SW5pdGlhbFZhbHVlcyIsInNwZWNzIiwidmFsdWVzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwibmFtZSIsImhhc093blByb3BlcnR5IiwiZ2V0UHJvcGVydHkiLCJrZXkiLCJkZWZpbmVSZWFjdGl2ZVByb3AiLCJwcm9wS2V5IiwiaW5pdGlhbFZhbHVlIiwibW9kZWwiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInNldCIsIm5ld1ZhbCIsImluc3RhbmNlIiwicHJldmlvdXMiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImFkZCIsImluaXRpYWxWYWx1ZTIiLCJkYXRhIiwiY29uc29sZSIsIndhcm4iLCJwYXJhbWV0ZXJzIiwiaXNDb2xsZWN0aW9uIiwicGFyZW50Iiwic2V0SXRlbXMiLCJyZWFjdGl2ZVByb3BzIiwic2V0UHJvcGVydHkiLCJ2YWxpZGF0ZVByb3BlcnR5IiwidmFsaWQiLCJlcnJvciIsInNoYXBlIiwiWm9kRXJyb3IiLCJwYXRoIiwibWVzc2FnZSIsImNvZGUiLCJwcm9wU2NoZW1hIiwicmVzdWx0Iiwic2FmZVBhcnNlIiwic3VjY2VzcyIsImlzU2FtZU9iamVjdCIsImEiLCJiIiwidmFsaWRhdGUiLCJlcnJvcnMiLCJvblZhbGlkYXRlIiwiaW5jbHVkZXMiLCJ0cmFjZSIsInZhbGlkYXRlZCIsInVwZGF0ZWQiLCJvblNldCIsImhhcyIsImlzT2JqZWN0IiwibG9vcCIsIlN0cmluZyIsImdldEl0ZW1Qcm9wZXJ0aWVzIiwicmV2ZXJ0Iiwic2F2ZUNoYW5nZXMiLCJ0cmlnZ2VyRXZlbnQiLCJldmVudCIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVYsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBVyxJQUFBLEdBQUFDLFFBQUE7SUFjQSxJQUFBQyxPQUFBLEdBQUFELFFBQUE7SUFFa0IsTUFBT0UsY0FBQSxTQUF5QkQsT0FBQSxDQUFBRSxNQUFBLENBQU07TUFDdERDLGVBQUE7TUFDQUMsVUFBQSxHQUFzQjtNQUN0QkMsU0FBQSxHQUFxQjtNQUVyQkMsTUFBQSxHQUFrQjtNQUNsQixDQUFBQyxLQUFBLEdBQWtCO01BRVZDLGNBQUEsR0FBdUM7TUFDL0MsT0FBT0MsV0FBQSxFQUFVO1FBQ2YsT0FBTztNQUNUO01BQ0EsSUFBSUEsV0FBQSxFQUFVO1FBQ1osT0FBTztNQUNUO01BRVVDLFVBQUEsR0FBa0M7TUFFNUMsQ0FBQUMsT0FBQSxHQUFvQjtNQUNwQixJQUFJQSxRQUFBLEVBQU87UUFDVCxPQUFPLEtBQUssQ0FBQUEsT0FBQTtNQUNkO01BQ0EsQ0FBQUMsYUFBQSxHQUFpQixtQkFBSUMsR0FBQSxDQUFHO01BQ3hCLElBQUlOLE1BQUEsRUFBSztRQUNQLE9BQU8sS0FBSyxDQUFBQSxLQUFBO01BQ2Q7TUFDQSxJQUFJQSxNQUFNTyxLQUFBLEVBQWM7UUFDdEIsS0FBSyxDQUFBUCxLQUFBLEdBQVNPLEtBQUE7UUFDZCxLQUFLQyxPQUFBLENBQVEsT0FBTztRQUNwQixLQUFLQSxPQUFBLENBQVEsUUFBUTtNQUN2QjtNQUVVQyxNQUFBO01BQ1YsQ0FBQUMsYUFBQSxHQUE2QjtNQUU3QixJQUFJQSxjQUFBLEVBQWE7UUFDZixPQUFPLEtBQUssQ0FBQUEsYUFBQTtNQUNkO01BS0EsSUFBSUMsWUFBQSxFQUFXO1FBQ2IsTUFBTVIsVUFBQSxHQUFhLEtBQUtTLGFBQUEsQ0FBYSxLQUFNO1FBQzNDLE9BQU9DLE1BQUEsQ0FBT0MsSUFBQSxDQUFLWCxVQUFVLEVBQUVZLElBQUEsQ0FBTUMsSUFBQSxJQUFRO1VBQzNDLElBQUlBLElBQUEsS0FBUyxNQUFNLE9BQU87VUFDMUIsSUFBSUMsS0FBQSxDQUFNQyxPQUFBLENBQVFmLFVBQUEsQ0FBV2EsSUFBQSxDQUFLLEdBQUc7WUFDbkMsSUFBSWIsVUFBQSxDQUFXYSxJQUFBLEVBQU1HLE1BQUEsS0FBVyxLQUFLLENBQUFULGFBQUEsQ0FBZU0sSUFBQSxHQUFPRyxNQUFBLEVBQ3pELE9BQU87WUFDVCxPQUNFQyxJQUFBLENBQUtDLFNBQUEsQ0FBVWxCLFVBQUEsQ0FBV2EsSUFBQSxDQUFLLE1BQy9CSSxJQUFBLENBQUtDLFNBQUEsQ0FBVSxLQUFLLENBQUFYLGFBQUEsQ0FBZU0sSUFBQSxDQUFLOztVQUc1QyxJQUFJLE9BQU9iLFVBQUEsQ0FBV2EsSUFBQSxNQUFVLFVBQVU7WUFDeEMsSUFBSSxLQUFLQSxJQUFBLGFBQWlCdEIsY0FBQSxFQUFlO2NBQ3ZDLE9BQU8sS0FBS3NCLElBQUEsRUFBTUwsV0FBQTs7WUFHcEIsT0FDRVMsSUFBQSxDQUFLQyxTQUFBLENBQVVsQixVQUFBLENBQVdhLElBQUEsQ0FBSyxNQUMvQkksSUFBQSxDQUFLQyxTQUFBLENBQVUsS0FBSyxDQUFBWCxhQUFBLENBQWVNLElBQUEsQ0FBSzs7VUFJNUMsT0FBT2IsVUFBQSxDQUFXYSxJQUFBLE1BQVUsS0FBSyxDQUFBTixhQUFBLENBQWVNLElBQUE7UUFDbEQsQ0FBQztNQUNIO01BSUEsSUFBSU0sY0FBQSxFQUFhO1FBQ2YsT0FBTyxLQUFLWCxXQUFBO01BQ2Q7TUFFQVksWUFDRTtRQUFFcEIsVUFBQTtXQUFlcUI7TUFBSyxJQUErQjtRQUNuRHJCLFVBQUEsRUFBWTtTQUN3QjtRQUV0QyxNQUFLO1FBQ0wsTUFBTXNCLFlBQUEsR0FBK0IsQ0FDbkMsWUFDQSxXQUNBLGNBQ0EsYUFDQSxRQUFRO1FBR1YsSUFBSXRCLFVBQUEsRUFBWTtVQUNkLEtBQUtBLFVBQUEsR0FBYUEsVUFBQTtVQUNsQixLQUFLdUIsbUJBQUEsQ0FBb0J2QixVQUFBLEVBQVlxQixLQUFLO1VBQzFDLElBQUlYLE1BQUEsQ0FBT0MsSUFBQSxDQUFLVSxLQUFLLEVBQUVMLE1BQUEsR0FBUyxHQUFHO1lBQ2pDLEtBQUtRLGdCQUFBLENBQWlCSCxLQUFtQjs7O1FBSTdDLEtBQUtFLG1CQUFBLENBQ0hELFlBQUEsRUFDQSxLQUFLZixhQUFhO01BRXRCO01BRVVpQixpQkFBaUJDLEtBQUEsRUFBa0I7UUFDM0MsSUFBSSxDQUFDQSxLQUFBLEVBQU8sT0FBTyxLQUFLLENBQUFsQixhQUFBO1FBRXhCLE1BQU1tQixNQUFBLEdBQVM7UUFFZixLQUFLMUIsVUFBQSxDQUFXMkIsT0FBQSxDQUFTQyxRQUFBLElBQVk7VUFDbkMsSUFBSSxPQUFPQSxRQUFBLEtBQWEsVUFBVTtZQUNoQ0EsUUFBQSxHQUFXQSxRQUFBO1lBRVhGLE1BQUEsQ0FBT0UsUUFBQSxDQUFTQyxJQUFBLElBQVFKLEtBQUEsQ0FBTUcsUUFBQSxDQUFTQyxJQUFBO1lBQ3ZDOztVQUdGLElBQUlKLEtBQUEsQ0FBTUssY0FBQSxDQUFlRixRQUFRLEdBQUc7WUFDbENGLE1BQUEsQ0FBT0UsUUFBQSxJQUFZSCxLQUFBLENBQU1HLFFBQUE7aUJBQ3BCO1lBQ0xGLE1BQUEsQ0FBT0UsUUFBQSxJQUFZOztRQUV2QixDQUFDO1FBQ0QsS0FBSyxDQUFBM0IsT0FBQSxHQUFXUyxNQUFBLENBQU9DLElBQUEsQ0FBS2MsS0FBSyxFQUFFVCxNQUFBLEtBQVc7UUFFOUMsS0FBSyxDQUFBVCxhQUFBLEdBQWlCbUIsTUFBQTtRQUV0QixPQUFPLEtBQUssQ0FBQW5CLGFBQUE7TUFDZDtNQUVBd0IsWUFBK0JDLEdBQUEsRUFBTTtRQUNuQyxPQUFPLEtBQUtsQyxjQUFBLENBQWVrQyxHQUFBO01BQzdCO01BRUFKLFFBQUEsR0FBVyxLQUFLRyxXQUFBO01BRU5FLG1CQUNSQyxPQUFBLEVBQ0FDLFlBQUEsRUFDQUMsS0FBQSxHQUFpQixPQUFLO1FBRXRCLEtBQUt0QyxjQUFBLENBQWVvQyxPQUFBLElBQVdDLFlBQUE7UUFFL0J6QixNQUFBLENBQU8yQixjQUFBLENBQWUsTUFBTUgsT0FBQSxFQUFtQjtVQUM3Q0ksR0FBQSxFQUFLQSxDQUFBLEtBQUs7WUFDUixPQUFPLEtBQUt4QyxjQUFBLENBQWVvQyxPQUFBO1VBQzdCO1VBQ0FLLEdBQUEsRUFBTUMsTUFBQSxJQUFnQjtZQUNwQixJQUFJSixLQUFBLEVBQU87Y0FDVCxNQUFNSyxRQUFBLEdBQVcsS0FBSzNDLGNBQUEsQ0FBZW9DLE9BQUE7Y0FDckMsS0FBSzdCLE9BQUEsQ0FBUSxHQUFHNkIsT0FBQSxZQUFtQjtnQkFDakM5QixLQUFBLEVBQU9vQyxNQUFBO2dCQUNQRSxRQUFBLEVBQVVELFFBQUEsQ0FBU2hDLGFBQUEsQ0FBYTtlQUNqQztjQUNELEtBQUtKLE9BQUEsQ0FBUSxRQUFRO2NBQ3JCLEtBQUtQLGNBQUEsQ0FBZW9DLE9BQUEsRUFBU0ssR0FBQSxDQUFJQyxNQUFNO2NBQ3ZDOztZQUdGLElBQUlBLE1BQUEsS0FBVyxVQUFhQSxNQUFBLEtBQVcsS0FBSzFDLGNBQUEsQ0FBZW9DLE9BQUEsR0FDekQ7WUFFRixNQUFNUSxRQUFBLEdBQVcsS0FBSzVDLGNBQUEsQ0FBZW9DLE9BQUE7WUFDckMsS0FBS3BDLGNBQUEsQ0FBZW9DLE9BQUEsSUFBV00sTUFBQTtZQUUvQixLQUFLbkMsT0FBQSxDQUFRLEdBQUc2QixPQUFBLFlBQW1CO2NBQUU5QixLQUFBLEVBQU9vQyxNQUFBO2NBQVFFO1lBQVEsQ0FBRTtZQUM5RCxLQUFLckMsT0FBQSxDQUFRLFFBQVE7VUFDdkI7VUFDQXNDLFVBQUEsRUFBWTtVQUNaQyxZQUFBLEVBQWM7U0FDZjtNQUNIO01BWVVyQixvQkFBb0JGLEtBQUEsRUFBOEJLLE1BQUEsRUFBTztRQUNqRSxTQUFTUSxPQUFBLElBQVdiLEtBQUEsRUFBTztVQUN6QixNQUFNd0IsVUFBQSxHQUFhbkMsTUFBQSxDQUFPb0Msd0JBQUEsQ0FDeEIsTUFDQVosT0FBaUI7VUFHbkIsSUFBSUEsT0FBQSxLQUFZLFFBQVc7VUFFM0IsSUFBSSxPQUFPQSxPQUFBLEtBQVksVUFBVTtZQUMvQixLQUFLLENBQUFoQyxhQUFBLENBQWU2QyxHQUFBLENBQUliLE9BQU87WUFDL0IsSUFBSWMsYUFBQSxHQUFldEIsTUFBQSxHQUFTUSxPQUFBLEtBQVlXLFVBQUEsRUFBWXpDLEtBQUE7WUFDcEQsS0FBSzZCLGtCQUFBLENBQW1CQyxPQUFBLEVBQW1CYyxhQUFZO1lBQ3ZEOztVQUdGLE1BQU1DLElBQUEsR0FBT2YsT0FBQTtVQUNiLE1BQU1MLElBQUEsR0FBT29CLElBQUEsQ0FBS3BCLElBQUE7VUFDbEIsSUFBSU0sWUFBQSxHQUFlVCxNQUFBLEdBQVNHLElBQUEsS0FBU2dCLFVBQUEsRUFBWXpDLEtBQUE7VUFDakQsTUFBTXFCLEtBQUEsR0FBUXdCLElBQUEsQ0FBS2pELFVBQUEsSUFBYztVQUVqQyxJQUFJLE9BQU9pRCxJQUFBLENBQUs3QyxLQUFBLEtBQVUsY0FBYyxPQUFPNkMsSUFBQSxDQUFLN0MsS0FBQSxLQUFVLFVBQVU7WUFDdEU4QyxPQUFBLENBQVFDLElBQUEsQ0FBSywyQkFBMkJ0QixJQUFBLEVBQWdCO1lBQ3hEOztVQUdGLE1BQU11QixVQUFBLEdBQWFILElBQUEsQ0FBSzdDLEtBQUEsQ0FBTWlELFlBQUEsR0FDMUI7WUFBRUMsTUFBQSxFQUFRO1VBQUksSUFDZDtZQUFFQSxNQUFBLEVBQVE7WUFBTSxHQUFHbkIsWUFBQTtZQUFjLEdBQUdWO1VBQUs7VUFDN0MsTUFBTWdCLFFBQUEsR0FBVyxJQUFJUSxJQUFBLENBQUs3QyxLQUFBLENBQU1nRCxVQUFVO1VBRTFDLElBQUlILElBQUEsQ0FBSzdDLEtBQUEsQ0FBTWlELFlBQUEsRUFBYztZQUMzQlosUUFBQSxDQUFTYyxRQUFBLENBQVNwQixZQUFZOztVQUdoQyxLQUFLLENBQUFqQyxhQUFBLENBQWU2QyxHQUFBLENBQUlsQixJQUFJO1VBQzVCLEtBQUtJLGtCQUFBLENBQW1CSixJQUFBLEVBQU1ZLFFBQUEsRUFBVSxJQUFJO1VBRTVDOztNQUVKO01BRVVlLGNBQWNuQyxLQUFBLEVBQTRCO1FBQ2xELEtBQUtFLG1CQUFBLENBQW9CRixLQUFLO01BQ2hDO01BRUFvQyxZQUFZdkIsT0FBQSxFQUFpQjlCLEtBQUEsRUFBVTtRQUNyQyxLQUFLTixjQUFBLENBQWVvQyxPQUFBLElBQVc5QixLQUFBO01BQ2pDO01BRVFzRCxpQkFBaUJ4QixPQUFBLEVBQWlCOUIsS0FBQSxFQUFVO1FBQ2xELElBQUksQ0FBQyxLQUFLRSxNQUFBLEVBQVE7VUFDaEIsT0FBTztZQUFFcUQsS0FBQSxFQUFPO1lBQU1DLEtBQUEsRUFBTztVQUFJOztRQUduQyxJQUFJLENBQUMsS0FBS3RELE1BQUEsQ0FBT3VELEtBQUEsQ0FBTTNCLE9BQUEsR0FBVTtVQUMvQixPQUFPO1lBQ0x5QixLQUFBLEVBQU87WUFDUEMsS0FBQSxFQUFPLElBQUl4RSxJQUFBLENBQUEwRSxRQUFBLENBQVMsQ0FDbEI7Y0FDRUMsSUFBQSxFQUFNLENBQUM3QixPQUFPO2NBQ2Q4QixPQUFBLEVBQVMsWUFBWTlCLE9BQUE7Y0FDckIrQixJQUFBLEVBQU07YUFDUCxDQUNGOzs7UUFJTCxNQUFNQyxVQUFBLEdBQWEsS0FBSzVELE1BQUEsQ0FBT3VELEtBQUEsQ0FBTTNCLE9BQUE7UUFDckMsTUFBTWlDLE1BQUEsR0FBU0QsVUFBQSxDQUFXRSxTQUFBLENBQVVoRSxLQUFLO1FBRXpDLElBQUksQ0FBQytELE1BQUEsQ0FBT0UsT0FBQSxFQUFTO1VBQ25CLE9BQU87WUFBRVYsS0FBQSxFQUFPO1lBQU9DLEtBQUEsRUFBT08sTUFBQSxDQUFPUDtVQUFLOztRQUc1QyxPQUFPO1VBQUVELEtBQUEsRUFBTztVQUFNQyxLQUFBLEVBQU87UUFBSTtNQUNuQztNQUNRVSxZQUFBLEdBQWVBLENBQUNDLENBQUEsRUFBUUMsQ0FBQSxLQUM5QnZELElBQUEsQ0FBS0MsU0FBQSxDQUFVcUQsQ0FBQyxNQUFNdEQsSUFBQSxDQUFLQyxTQUFBLENBQVVzRCxDQUFDO01BV3hDQyxTQUFTekUsVUFBQSxFQUFVO1FBSWpCLE1BQU1XLElBQUEsR0FBT0QsTUFBQSxDQUFPQyxJQUFBLENBQUtYLFVBQVU7UUFDbkMsTUFBTTBFLE1BQUEsR0FBc0M7UUFDNUMsTUFBTUMsVUFBQSxHQUFjOUQsSUFBQSxJQUFRO1VBQzFCLElBQUksQ0FBQyxLQUFLYixVQUFBLElBQWMsQ0FBQyxLQUFLQSxVQUFBLENBQVc0RSxRQUFBLENBQVMvRCxJQUFJLEdBQUc7WUFDdkRxQyxPQUFBLENBQVEyQixLQUFBLENBQU0scUJBQXFCaEUsSUFBSTtZQUN2Qzs7VUFFRixNQUFNaUUsU0FBQSxHQUFZLEtBQUtwQixnQkFBQSxDQUFpQjdDLElBQUEsRUFBTWIsVUFBQSxDQUFXYSxJQUFBLENBQUs7VUFFOUQsSUFBSSxDQUFDaUUsU0FBQSxDQUFVbkIsS0FBQSxFQUFPO1lBQ3BCZSxNQUFBLENBQU83RCxJQUFBLElBQVFpRSxTQUFBLENBQVVsQixLQUFBOztRQUU3QjtRQUNBakQsSUFBQSxDQUFLZ0IsT0FBQSxDQUFRZ0QsVUFBVTtRQUV2QixPQUFPO1VBQUVoQixLQUFBLEVBQU8sQ0FBQyxDQUFDakQsTUFBQSxDQUFPQyxJQUFBLENBQUsrRCxNQUFNLEVBQUUxRCxNQUFBO1VBQVEwRDtRQUFNO01BQ3REO01BRUFuQyxJQUFJdkMsVUFBQSxFQUFzQjtRQUN4QixJQUFJLENBQUNBLFVBQUEsRUFBWTtVQUNma0QsT0FBQSxDQUFRQyxJQUFBLENBQ04seUNBQ0EsS0FBSy9CLFdBQUEsQ0FBWVMsSUFBQSxFQUNqQjdCLFVBQVU7VUFFWixPQUFPO1lBQ0wrRSxPQUFBLEVBQVM7OztRQUliLE1BQU1wRSxJQUFBLEdBQU9ELE1BQUEsQ0FBT0MsSUFBQSxDQUFLWCxVQUFVO1FBQ25DLElBQUkrRSxPQUFBLEdBQVU7UUFDZCxNQUFNTCxNQUFBLEdBQXNDO1FBRTVDLE1BQU1NLEtBQUEsR0FBU25FLElBQUEsSUFBUTtVQUNyQixJQUFJLENBQUMsS0FBSyxDQUFBWCxhQUFBLENBQWUrRSxHQUFBLENBQUlwRSxJQUFJLEdBQUc7WUFFbEM7O1VBR0YsTUFBTWlFLFNBQUEsR0FBWSxLQUFLcEIsZ0JBQUEsQ0FBaUI3QyxJQUFBLEVBQU1iLFVBQUEsQ0FBV2EsSUFBQSxDQUFLO1VBQzlELElBQUksQ0FBQ2lFLFNBQUEsQ0FBVW5CLEtBQUEsRUFBTztZQUNwQmUsTUFBQSxDQUFPN0QsSUFBQSxJQUFRaUUsU0FBQTtZQUNmOztVQUlGLElBQUksS0FBSy9DLFdBQUEsQ0FBWWxCLElBQUksR0FBR2QsVUFBQSxFQUFZO1lBQ3RDLE1BQU0wQyxRQUFBLEdBQVcsS0FBS1YsV0FBQSxDQUFZbEIsSUFBSTtZQUV0QzRCLFFBQUEsQ0FBU0YsR0FBQSxDQUFJdkMsVUFBQSxDQUFXYSxJQUFBLENBQUs7WUFDN0IsSUFBSTRCLFFBQUEsQ0FBU2pDLFdBQUEsRUFBYXVFLE9BQUEsR0FBVTtZQUVwQzs7VUFHRixNQUFNRyxRQUFBLEdBQVcsT0FBT2xGLFVBQUEsQ0FBV2EsSUFBQSxNQUFVO1VBQzdDLE1BQU15RCxZQUFBLEdBQWVZLFFBQUEsSUFBWSxLQUFLWixZQUFBLENBQWEsQ0FBQ3pELElBQUksR0FBRyxLQUFLQSxJQUFBLENBQUs7VUFFckUsSUFBSSxLQUFLQSxJQUFBLE1BQVViLFVBQUEsQ0FBV2EsSUFBQSxLQUFTeUQsWUFBQSxFQUFjO1VBRXJELEtBQUt6RCxJQUFBLElBQVFiLFVBQUEsQ0FBV2EsSUFBQTtVQUN4QmtFLE9BQUEsR0FBVTtRQUNaO1FBRUFwRSxJQUFBLENBQUtnQixPQUFBLENBQVFxRCxLQUFLO1FBQ2xCLElBQUlELE9BQUEsRUFBUztVQUNYLEtBQUsxRSxPQUFBLENBQVEsUUFBUTtVQUNyQixLQUFLQSxPQUFBLENBQVEsY0FBYzs7UUFHN0IsT0FBTztVQUFFMEUsT0FBQTtVQUFTTDtRQUFNO01BQzFCO01BUUFqRSxjQUFBLEVBQWE7UUFDWCxNQUFNWSxLQUFBLEdBQVE7UUFFZCxNQUFNOEQsSUFBQSxHQUFRdkQsUUFBQSxJQUFZO1VBQ3hCLElBQUlDLElBQUEsR0FBT0QsUUFBQTtVQUVYLElBQUksT0FBT0EsUUFBQSxLQUFhLFlBQVlBLFFBQUEsQ0FBU3hCLEtBQUEsQ0FBTUwsVUFBQSxFQUFZO1lBQzdEOEIsSUFBQSxHQUFPRCxRQUFBLENBQVNDLElBQUE7WUFJaEJSLEtBQUEsQ0FBTStELE1BQUEsQ0FBT3ZELElBQUksS0FBS0QsUUFBQSxDQUFTeEIsS0FBQSxDQUFNaUQsWUFBQSxHQUNqQyxLQUFLeEIsSUFBQSxFQUFNd0QsaUJBQUEsQ0FBaUIsSUFDNUIsS0FBS3hELElBQUEsR0FBT3BCLGFBQUEsQ0FBYTtZQUM3Qjs7VUFHRlksS0FBQSxDQUFNK0QsTUFBQSxDQUFPdkQsSUFBSSxLQUFLLEtBQUtBLElBQUE7UUFDN0I7UUFDQSxLQUFLN0IsVUFBQSxDQUFXMkIsT0FBQSxDQUFRd0QsSUFBSTtRQUM1QixPQUFPOUQsS0FBQTtNQUNUO01BTUFpRSxPQUFBLEVBQU07UUFDSixLQUFLL0MsR0FBQSxDQUFJLEtBQUtoQyxhQUFhO01BQzdCO01BT0FnRixZQUFBLEVBQVc7UUFDVCxLQUFLLENBQUFoRixhQUFBLEdBQWlCLEtBQUtFLGFBQUEsQ0FBYTtRQUN4QyxLQUFLLENBQUFSLE9BQUEsR0FBVztNQUNsQjtNQVFBdUYsWUFBQSxHQUFlQSxDQUNiQyxLQUFBLEdBQWdCLFVBQ2hCQyxNQUFBLEdBQThCLE9BQ3RCO1FBQ1IsS0FBS3JGLE9BQUEsQ0FBUW9GLEtBQUs7TUFDcEI7O0lBQ0R2RyxPQUFBLENBQUFMLGFBQUEsR0FBQVUsY0FBQTs7Ozs7O0lBeGFEOztJQUVBbUIsTUFBQSxDQUFBMkIsY0FBQSxDQUFBbkQsT0FBQTtNQUNBa0IsS0FBQTtJQUNBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9ydmQvb3V0In0=