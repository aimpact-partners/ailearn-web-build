System.register(["@beyond-js/kernel@0.1.14/bundle", "zod@3.25.67", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ReactiveModel, ModelProperties, IReactiveModelOptions, SetPropertiesResult, __beyond_pkg, hmr;
  _export({
    ReactiveModel: void 0,
    ModelProperties: void 0,
    IReactiveModelOptions: void 0,
    SetPropertiesResult: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_zod2) {
      dependency_1 = _zod2;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["uuid", "11.1.0"], ["zod", "3.24.2"], ["react", "18.3.1"], ["@beyond-js/reactive", "2.1.2"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@2.1.2/model"
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
        hash: 2855235355,
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
            #debug;
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
            get propertyNames() {
              return this.#propertyNames;
            }
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
              // this.#debug = 'Courier';
              const defaultProps = ['fetching', 'fetched', 'processing', 'processed', 'loaded'];
              if (properties) {
                this.properties = properties;
                this.defineReactiveProps(properties, props);
                if (Object.keys(props).length > 0) {
                  this.setInitialValues(props);
                }
              }
              this.debug('props', props, properties);
              this.defineReactiveProps(defaultProps, this.initialValues);
            }
            /**
             * Logs debug information to the console only when the #debug property matches the constructor name.
             * This allows for targeted debugging of specific model instances by setting the #debug property
             * to the class name you want to debug.
             *
             * @param args - Any arguments to be logged to the console
             */
            debug(...args) {
              if (this.#debug === this.constructor.name) {
                console.log(...args);
              }
            }
            /**
             * Sets the initial values for the model based on the provided specifications.
             * This method processes the model's properties and extracts their values from the specs object.
             * If no specs are provided, it returns the existing initial values.
             *
             * The method also determines if the model is a draft by checking if the specs object is empty.
             *
             * @param specs - Optional partial object containing property values to set as initial values
             * @returns The initial values object that was set
             */
            setInitialValues(specs) {
              if (!specs) return this.#initialValues;
              const values = {};
              this.properties.forEach(property => {
                if (typeof property !== 'string') {
                  property = property;
                  values[property.name] = specs[property.name];
                  return;
                }
                values[property] = specs[property];
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
                valid: Object.keys(errors).length === 0,
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
              this.debug(0, properties);
              const onSet = prop => {
                this.debug(prop, properties[prop]);
                if (!this.#propertyNames.has(prop)) {
                  // console.trace(`is not a property`, prop, this.constructor.name);
                  return;
                }
                const validated = this.validateProperty(prop, properties[prop]);
                this.debug(prop, properties[prop], validated);
                // console.log('validated', validated, prop, properties[prop]);
                if (!validated.valid) {
                  errors[prop] = validated;
                  // return;
                }
                if (prop === 'provinces') {}
                //@ts-ignore
                if (this.getProperty(prop)?.isReactive) {
                  const instance = this.getProperty(prop);
                  // check if it is a collection
                  //@ts-ignore
                  if (instance.isCollection) {
                    //@ts-ignore
                    instance.setItems(properties[prop]);
                  } else {
                    instance.set(properties[prop]);
                  }
                  if (instance.unpublished) updated = true;
                  return;
                }
                const isObject = typeof properties[prop] === 'object';
                const isSameObject = isObject && this.isSameObject([prop], this[prop]);
                if (this[prop] === properties[prop] || isSameObject) {
                  return;
                }
                this.trigger(`${prop}.changed`, {
                  value: properties[prop],
                  previous: this[prop]
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfem9kIiwicmVxdWlyZSIsIl9ldmVudHMiLCJSZWFjdGl2ZU1vZGVsIiwiRXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInJlYWR5IiwiZGVidWciLCJfcmVhY3RpdmVQcm9wcyIsImlzUmVhY3RpdmUiLCJwcm9wZXJ0aWVzIiwiaXNEcmFmdCIsInByb3BlcnR5TmFtZXMiLCJTZXQiLCJ2YWx1ZSIsInRyaWdnZXIiLCJzY2hlbWEiLCJpbml0aWFsVmFsdWVzIiwidW5wdWJsaXNoZWQiLCJnZXRQcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJwcm9wIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsImlzVW5wdWJsaXNoZWQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZGVmYXVsdFByb3BzIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInNldEluaXRpYWxWYWx1ZXMiLCJhcmdzIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJzcGVjcyIsInZhbHVlcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImdldFByb3BlcnR5Iiwia2V5IiwiZGVmaW5lUmVhY3RpdmVQcm9wIiwicHJvcEtleSIsImluaXRpYWxWYWx1ZSIsIm1vZGVsIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJzZXQiLCJuZXdWYWwiLCJpbnN0YW5jZSIsInByZXZpb3VzIiwidW5kZWZpbmVkIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhZGQiLCJkYXRhIiwid2FybiIsInBhcmFtZXRlcnMiLCJpc0NvbGxlY3Rpb24iLCJwYXJlbnQiLCJzZXRJdGVtcyIsInJlYWN0aXZlUHJvcHMiLCJzZXRQcm9wZXJ0eSIsInZhbGlkYXRlUHJvcGVydHkiLCJ2YWxpZCIsImVycm9yIiwic2hhcGUiLCJab2RFcnJvciIsInBhdGgiLCJtZXNzYWdlIiwiY29kZSIsInByb3BTY2hlbWEiLCJyZXN1bHQiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiaXNTYW1lT2JqZWN0IiwiYSIsImIiLCJ2YWxpZGF0ZSIsImVycm9ycyIsIm9uVmFsaWRhdGUiLCJpbmNsdWRlcyIsInRyYWNlIiwidmFsaWRhdGVkIiwidXBkYXRlZCIsIm9uU2V0IiwiaGFzIiwiaXNPYmplY3QiLCJsb29wIiwiU3RyaW5nIiwiZ2V0SXRlbVByb3BlcnRpZXMiLCJyZXZlcnQiLCJzYXZlQ2hhbmdlcyIsInRyaWdnZXJFdmVudCIsImV2ZW50IiwicGFyYW1zIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxJQUFBLEdBQUFDLE9BQUE7VUFjQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFFTztVQUFXLE1BQU9FLGFBQWlCLFNBQVFELE9BQUEsQ0FBQUUsTUFBTTtZQUN2REMsZUFBZTtZQUNmQyxVQUFVLEdBQVksS0FBSztZQUMzQkMsU0FBUyxHQUFZLEtBQUs7WUFFMUJDLE1BQU0sR0FBWSxLQUFLO1lBQ3ZCLENBQUFDLEtBQU0sR0FBWSxLQUFLO1lBQ3ZCLENBQUFDLEtBQU07WUFFRUMsY0FBYyxHQUF5QixFQUEwQjtZQUN6RSxPQUFPQyxVQUFVQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSTtZQUNaO1lBQ0EsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSTtZQUNaO1lBQ0E7WUFDVUMsVUFBVSxHQUF3QixFQUFFO1lBQzlDO1lBQ0EsQ0FBQUMsT0FBUSxHQUFZLEtBQUs7WUFDekIsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFDQSxDQUFBQyxhQUFjLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQzFCLElBQUlELGFBQWFBLENBQUE7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