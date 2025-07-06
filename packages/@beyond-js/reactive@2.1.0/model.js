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

// .beyond/uimport/temp/@beyond-js/reactive/model.2.1.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwuMi4xLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvaW5kZXgudHMiXSwibmFtZXMiOlsibW9kZWxfMl8xXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSVJlYWN0aXZlTW9kZWxPcHRpb25zIiwiTW9kZWxQcm9wZXJ0aWVzIiwiUmVhY3RpdmVNb2RlbCIsIlNldFByb3BlcnRpZXNSZXN1bHQiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3pvZCIsInJlcXVpcmUyIiwiX2V2ZW50cyIsIlJlYWN0aXZlTW9kZWwyIiwiRXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInJlYWR5IiwiX3JlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwicHJvcGVydGllcyIsImlzRHJhZnQiLCJwcm9wZXJ0eU5hbWVzIiwiU2V0IiwidmFsdWUiLCJ0cmlnZ2VyIiwic2NoZW1hIiwiaW5pdGlhbFZhbHVlcyIsInVucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc1VucHVibGlzaGVkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRlZmF1bHRQcm9wcyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJzZXRJbml0aWFsVmFsdWVzIiwic3BlY3MiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJnZXRQcm9wZXJ0eSIsImtleSIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByb3BLZXkiLCJpbml0aWFsVmFsdWUiLCJtb2RlbCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwibmV3VmFsIiwiaW5zdGFuY2UiLCJwcmV2aW91cyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYWRkIiwiaW5pdGlhbFZhbHVlMiIsImRhdGEiLCJjb25zb2xlIiwid2FybiIsInBhcmFtZXRlcnMiLCJpc0NvbGxlY3Rpb24iLCJwYXJlbnQiLCJzZXRJdGVtcyIsInJlYWN0aXZlUHJvcHMiLCJzZXRQcm9wZXJ0eSIsInZhbGlkYXRlUHJvcGVydHkiLCJ2YWxpZCIsImVycm9yIiwic2hhcGUiLCJab2RFcnJvciIsInBhdGgiLCJtZXNzYWdlIiwiY29kZSIsInByb3BTY2hlbWEiLCJyZXN1bHQiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiaXNTYW1lT2JqZWN0IiwiYSIsImIiLCJ2YWxpZGF0ZSIsImVycm9ycyIsIm9uVmFsaWRhdGUiLCJpbmNsdWRlcyIsInRyYWNlIiwidmFsaWRhdGVkIiwidXBkYXRlZCIsIm9uU2V0IiwiaGFzIiwiaXNPYmplY3QiLCJsb29wIiwiU3RyaW5nIiwiZ2V0SXRlbVByb3BlcnRpZXMiLCJyZXZlcnQiLCJzYXZlQ2hhbmdlcyIsInRyaWdnZXJFdmVudCIsImV2ZW50IiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxRQUFBLENBQUFELG1CQUFBO0VBQUFFLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFB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QUFBLEVBQU13RCxpQkFBQSxDQUFpQixJQUM1QixLQUFLeEQsSUFBQSxHQUFPcEIsYUFBQSxDQUFhO1lBQzdCOztVQUdGWSxLQUFBLENBQU0rRCxNQUFBLENBQU92RCxJQUFJLEtBQUssS0FBS0EsSUFBQTtRQUM3QjtRQUNBLEtBQUs3QixVQUFBLENBQVcyQixPQUFBLENBQVF3RCxJQUFJO1FBQzVCLE9BQU85RCxLQUFBO01BQ1Q7TUFNQWlFLE9BQUEsRUFBTTtRQUNKLEtBQUsvQyxHQUFBLENBQUksS0FBS2hDLGFBQWE7TUFDN0I7TUFPQWdGLFlBQUEsRUFBVztRQUNULEtBQUssQ0FBQWhGLGFBQUEsR0FBaUIsS0FBS0UsYUFBQSxDQUFhO1FBQ3hDLEtBQUssQ0FBQVIsT0FBQSxHQUFXO01BQ2xCO01BUUF1RixZQUFBLEdBQWVBLENBQ2JDLEtBQUEsR0FBZ0IsVUFDaEJDLE1BQUEsR0FBOEIsT0FDdEI7UUFDUixLQUFLckYsT0FBQSxDQUFRb0YsS0FBSztNQUNwQjs7SUFDRHZHLE9BQUEsQ0FBQUwsYUFBQSxHQUFBVSxjQUFBOzs7Ozs7SUF4YUQ7O0lBRUFtQixNQUFBLENBQUEyQixjQUFBLENBQUFuRCxPQUFBO01BQ0FrQixLQUFBO0lBQ0EiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL3J2ZC9vdXQifQ==