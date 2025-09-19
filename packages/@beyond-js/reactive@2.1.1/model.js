System.register(["@beyond-js/kernel@0.1.12/bundle", "zod@3.25.67", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ReactiveModel, ModelProperties, IReactiveModelOptions, SetPropertiesResult, __beyond_pkg, hmr;
  _export({
    ReactiveModel: void 0,
    ModelProperties: void 0,
    IReactiveModelOptions: void 0,
    SetPropertiesResult: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_zod2) {
      dependency_1 = _zod2;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["uuid", "11.1.0"], ["zod", "3.24.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/local", "0.1.3"], ["react", "18.3.1"], ["@beyond-js/reactive", "2.1.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@2.1.1/model"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['zod', dependency_1], ['@beyond-js/events/events', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 827819397,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactiveModel = void 0;
          var _zod = require("zod");
          var _events = require("@beyond-js/events/events");
          /*bundle */
          class ReactiveModel extends _events.Events {
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
            //TODO: Validate how to handle the properties
            properties = [];
            // properties of the object
            #isDraft = false;
            get isDraft() {
              return this.#isDraft;
            }
            #propertyNames = new Set();
            get ready() {
              return this.#ready;
            }
            set ready(value) {
              this.#ready = value;
              this.trigger('ready');
              this.trigger('change');
            }
            schema;
            #initialValues = {};
            get initialValues() {
              return this.#initialValues;
            }
            /**
             * Defines if the model has been modified since it was loaded.
             */
            get unpublished() {
              const properties = this.getProperties() ?? {};
              return Object.keys(properties).some(prop => {
                if (prop === 'id') return false;
                if (Array.isArray(properties[prop])) {
                  if (properties[prop].length !== this.#initialValues[prop]?.length) return true;
                  return JSON.stringify(properties[prop]) !== JSON.stringify(this.#initialValues[prop]);
                }
                if (typeof properties[prop] === 'object') {
                  if (this[prop] instanceof ReactiveModel) {
                    return this[prop].unpublished;
                  }
                  return JSON.stringify(properties[prop]) !== JSON.stringify(this.#initialValues[prop]);
                }
                return properties[prop] !== this.#initialValues[prop];
              });
            }
            /**
             * @deprecated Use `unpublished` instead.
             */
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
              const defaultProps = ['fetching', 'fetched', 'processing', 'processed', 'loaded'];
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
                if (typeof property !== 'string') {
                  property = property;
                  values[property.name] = specs[property.name];
                  return;
                }
                // Explicitly check if the value exists in the specs object
                if (specs.hasOwnProperty(property)) {
                  values[property] = specs[property];
                } else {
                  values[property] = undefined; // Ensure compatibility with the expected type
                }
              });
              this.#isDraft = Object.keys(specs).length === 0;
              this.#initialValues = values;
              return this.#initialValues;
            }
            getProperty(key) {
              return this._reactiveProps[key]; // Type-safe access.
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
                    this.trigger('change');
                    this._reactiveProps[propKey].set(newVal);
                    return;
                  }
                  if (newVal !== undefined && newVal === this._reactiveProps[propKey]) return;
                  const previous = this._reactiveProps[propKey];
                  this._reactiveProps[propKey] = newVal;
                  this.trigger(`${propKey}.changed`, {
                    value: newVal,
                    previous
                  });
                  this.trigger('change');
                },
                enumerable: true,
                configurable: true
              });
            }
            /**
             *  Defines the reactive properties of the object.
             * The properties are defined as an array of strings or objects.
             * The objects must have a `name` property with the name of the property and a `value` property with the class of the object.
             * The `value` property can be a class or an object.
             * If the `value` property is a class, the class must extend the `ReactiveModel` class.
             *
             * @param props
             * @param values
             */
            defineReactiveProps(props, values) {
              for (let propKey of props) {
                const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
                if (propKey === undefined) continue;
                if (typeof propKey !== 'object') {
                  this.#propertyNames.add(propKey);
                  let initialValue = values?.[propKey] ?? descriptor?.value;
                  this.defineReactiveProp(propKey, initialValue);
                  continue;
                }
                const data = propKey;
                const name = data.name;
                let initialValue = values?.[name] ?? descriptor?.value;
                const specs = data.properties ?? {};
                if (typeof data.value !== 'function' && typeof data.value !== 'object') {
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
                    code: 'custom'
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
            /**
             * Validates the provided properties against the model's Zod schema.
             * Only validates properties that are defined in the model's properties array.
             *
             * @param {Partial<T>} properties - The properties to validate
             * @returns {{ valid: boolean; errors: PropertyValidationErrors<T> }} An object containing:
             *   - `valid`: boolean indicating if all properties are valid
             *   - `errors`: object containing validation errors for each invalid property
             */
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
                console.warn('you are trying to set an empty object', this.constructor.name, properties);
                return {
                  updated: false
                };
              }
              const keys = Object.keys(properties);
              let updated = false;
              const errors = {};
              const onSet = prop => {
                if (!this.#propertyNames.has(prop)) {
                  // console.trace(`is not a property`, prop, this.constructor.name);
                  return;
                }
                const validated = this.validateProperty(prop, properties[prop]);
                // console.log('validated', validated, prop, properties[prop]);
                if (!validated.valid) {
                  errors[prop] = validated;
                  // return;
                }
                //@ts-ignore
                if (this.getProperty(prop)?.isReactive) {
                  const instance = this.getProperty(prop);
                  instance.set(properties[prop]);
                  if (instance.unpublished) updated = true;
                  return;
                }
                const isObject = typeof properties[prop] === 'object';
                const isSameObject = isObject && this.isSameObject([prop], this[prop]);
                if (this[prop] === properties[prop] || isSameObject) return;
                this[prop] = properties[prop];
                updated = true;
              };
              keys.forEach(onSet);
              if (updated) {
                this.trigger('change');
                this.trigger('set.executed');
              }
              return {
                updated,
                errors
              };
            }
            /**
             * Gets all properties of the model, including nested reactive objects and collections.
             * For collections, it returns the item properties instead of the collection instance.
             *
             * @returns {Partial<T>} An object containing all properties of the model
             */
            getProperties() {
              const props = {};
              const loop = property => {
                let name = property;
                if (typeof property === 'object' && property.value.isReactive) {
                  name = property.name;
                  /**
                   * If the property is a collection, we return the items.
                   */
                  props[String(name)] = property.value.isCollection ? this[name].getItemProperties() : this[name]?.getProperties();
                  return;
                }
                props[String(name)] = this[name];
              };
              this.properties.forEach(loop);
              return props;
            }
            /**
             * Reverts all properties of the model back to their initial values.
             * This is useful for discarding changes and restoring the model to its original state.
             */
            revert() {
              this.set(this.initialValues);
            }
            /**
             * Saves the current state of the model as the new initial state.
             * This marks the model as no longer being a draft and updates the initial values
             * to match the current state. Useful after successfully persisting changes.
             */
            saveChanges() {
              this.#initialValues = this.getProperties();
              this.#isDraft = false;
            }
            /**
             * Triggers an event after a specified delay.
             * @deprecated use trigger method instead.
             * @param {string} event - The name of the event to trigger.
             * @param {Record<string, any>} params - Additional parameters for the event, including an optional `delay` property.
             */
            triggerEvent = (event = 'change', params = {}) => {
              this.trigger(event);
            };
          }
          exports.ReactiveModel = ReactiveModel;
        }
      });

      /*****************************
      INTERNAL MODULE: ./types/index
      *****************************/

      ims.set('./types/index', {
        hash: 2677658917,
        creator: function (require, exports) {
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ReactiveModel') && _export("ReactiveModel", ReactiveModel = require ? require('./index').ReactiveModel : value);
        (require || prop === 'ModelProperties') && _export("ModelProperties", ModelProperties = require ? require('./types/index').ModelProperties : value);
        (require || prop === 'IReactiveModelOptions') && _export("IReactiveModelOptions", IReactiveModelOptions = require ? require('./types/index').IReactiveModelOptions : value);
        (require || prop === 'SetPropertiesResult') && _export("SetPropertiesResult", SetPropertiesResult = require ? require('./types/index').SetPropertiesResult : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfem9kIiwicmVxdWlyZSIsIl9ldmVudHMiLCJSZWFjdGl2ZU1vZGVsIiwiRXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInJlYWR5IiwiX3JlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwicHJvcGVydGllcyIsImlzRHJhZnQiLCJwcm9wZXJ0eU5hbWVzIiwiU2V0IiwidmFsdWUiLCJ0cmlnZ2VyIiwic2NoZW1hIiwiaW5pdGlhbFZhbHVlcyIsInVucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc1VucHVibGlzaGVkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRlZmF1bHRQcm9wcyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJzZXRJbml0aWFsVmFsdWVzIiwic3BlY3MiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJnZXRQcm9wZXJ0eSIsImtleSIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByb3BLZXkiLCJpbml0aWFsVmFsdWUiLCJtb2RlbCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwibmV3VmFsIiwiaW5zdGFuY2UiLCJwcmV2aW91cyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYWRkIiwiZGF0YSIsImNvbnNvbGUiLCJ3YXJuIiwicGFyYW1ldGVycyIsImlzQ29sbGVjdGlvbiIsInBhcmVudCIsInNldEl0ZW1zIiwicmVhY3RpdmVQcm9wcyIsInNldFByb3BlcnR5IiwidmFsaWRhdGVQcm9wZXJ0eSIsInZhbGlkIiwiZXJyb3IiLCJzaGFwZSIsIlpvZEVycm9yIiwicGF0aCIsIm1lc3NhZ2UiLCJjb2RlIiwicHJvcFNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJpc1NhbWVPYmplY3QiLCJhIiwiYiIsInZhbGlkYXRlIiwiZXJyb3JzIiwib25WYWxpZGF0ZSIsImluY2x1ZGVzIiwidHJhY2UiLCJ2YWxpZGF0ZWQiLCJ1cGRhdGVkIiwib25TZXQiLCJoYXMiLCJpc09iamVjdCIsImxvb3AiLCJTdHJpbmciLCJnZXRJdGVtUHJvcGVydGllcyIsInJldmVydCIsInNhdmVDaGFuZ2VzIiwidHJpZ2dlckV2ZW50IiwiZXZlbnQiLCJwYXJhbXMiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLy9pbmRleC50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsSUFBQSxHQUFBQyxPQUFBO1VBY0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVyxNQUFPRSxhQUFpQixTQUFRRCxPQUFBLENBQUFFLE1BQU07WUFDdkRDLGVBQWU7WUFDZkMsVUFBVSxHQUFZLEtBQUs7WUFDM0JDLFNBQVMsR0FBWSxLQUFLO1lBRTFCQyxNQUFNLEdBQVksS0FBSztZQUN2QixDQUFBQyxLQUFNLEdBQVksS0FBSztZQUVmQyxjQUFjLEdBQXlCLEVBQTBCO1lBQ3pFLE9BQU9DLFVBQVVBLENBQUE7Y0FDaEIsT0FBTyxJQUFJO1lBQ1o7WUFDQSxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJO1lBQ1o7WUFDQTtZQUNVQyxVQUFVLEdBQXdCLEVBQUU7WUFDOUM7WUFDQSxDQUFBQyxPQUFRLEdBQVksS0FBSztZQUN6QixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUNBLENBQUFDLGFBQWMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDMUIsSUFBSU4sS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFD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