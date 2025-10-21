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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["uuid", "11.1.0"], ["zod", "3.24.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/local", "0.1.3"], ["react", "18.3.1"], ["@beyond-js/reactive", "2.1.1"], ["@aimpact/rvd", "0.7.0"]]);
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
        hash: 902488820,
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
              this.debug(1, props);
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
                  this.debug(9, specs[property.name]);
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
                this.debug(0.1, this.constructor.name, prop);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfem9kIiwicmVxdWlyZSIsIl9ldmVudHMiLCJSZWFjdGl2ZU1vZGVsIiwiRXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInJlYWR5IiwiZGVidWciLCJfcmVhY3RpdmVQcm9wcyIsImlzUmVhY3RpdmUiLCJwcm9wZXJ0aWVzIiwiaXNEcmFmdCIsInByb3BlcnR5TmFtZXMiLCJTZXQiLCJ2YWx1ZSIsInRyaWdnZXIiLCJzY2hlbWEiLCJpbml0aWFsVmFsdWVzIiwidW5wdWJsaXNoZWQiLCJnZXRQcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJwcm9wIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsImlzVW5wdWJsaXNoZWQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZGVmYXVsdFByb3BzIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInNldEluaXRpYWxWYWx1ZXMiLCJhcmdzIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJzcGVjcyIsInZhbHVlcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImdldFByb3BlcnR5Iiwia2V5IiwiZGVmaW5lUmVhY3RpdmVQcm9wIiwicHJvcEtleSIsImluaXRpYWxWYWx1ZSIsIm1vZGVsIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJzZXQiLCJuZXdWYWwiLCJpbnN0YW5jZSIsInByZXZpb3VzIiwidW5kZWZpbmVkIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhZGQiLCJkYXRhIiwid2FybiIsInBhcmFtZXRlcnMiLCJpc0NvbGxlY3Rpb24iLCJwYXJlbnQiLCJzZXRJdGVtcyIsInJlYWN0aXZlUHJvcHMiLCJzZXRQcm9wZXJ0eSIsInZhbGlkYXRlUHJvcGVydHkiLCJ2YWxpZCIsImVycm9yIiwic2hhcGUiLCJab2RFcnJvciIsInBhdGgiLCJtZXNzYWdlIiwiY29kZSIsInByb3BTY2hlbWEiLCJyZXN1bHQiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiaXNTYW1lT2JqZWN0IiwiYSIsImIiLCJ2YWxpZGF0ZSIsImVycm9ycyIsIm9uVmFsaWRhdGUiLCJpbmNsdWRlcyIsInRyYWNlIiwidmFsaWRhdGVkIiwidXBkYXRlZCIsIm9uU2V0IiwiaGFzIiwiaXNPYmplY3QiLCJsb29wIiwiU3RyaW5nIiwiZ2V0SXRlbVByb3BlcnRpZXMiLCJyZXZlcnQiLCJzYXZlQ2hhbmdlcyIsInRyaWdnZXJFdmVudCIsImV2ZW50IiwicGFyYW1zIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxJQUFBLEdBQUFDLE9BQUE7VUFjQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFFTztVQUFXLE1BQU9FLGFBQWlCLFNBQVFELE9BQUEsQ0FBQUUsTUFBTTtZQUN2REMsZUFBZTtZQUNmQyxVQUFVLEdBQVksS0FBSztZQUMzQkMsU0FBUyxHQUFZLEtBQUs7WUFFMUJDLE1BQU0sR0FBWSxLQUFLO1lBQ3ZCLENBQUFDLEtBQU0sR0FBWSxLQUFLO1lBQ3ZCLENBQUFDLEtBQU07WUFFRUMsY0FBYyxHQUF5QixFQUEwQjtZQUN6RSxPQUFPQyxVQUFVQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSTtZQUNaO1lBQ0EsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSTtZQUNaO1lBQ0E7WUFDVUMsVUFBVSxHQUF3QixFQUFFO1lBQzlDO1lBQ0EsQ0FBQUMsT0FBUSxHQUFZLEtBQUs7WUFDekIsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFDQSxDQUFBQyxhQUFjLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQzFCLElBQUlELGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsYUFBYztZQUMzQjtZQUNBLElBQUlOLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUEsS0FBS0EsQ0FBQ1EsS0FBYztjQUN2QixJQUFJLENBQUMsQ0FBQVIsS0FBTSxHQUFHUSxLQUFLO2NBQ25CLElBQUksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztjQUNyQixJQUFJLENBQUNBLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFVUMsTUFBTTtZQUNoQixDQUFBQyxhQUFjLEdBQWUsRUFBZ0I7WUFFN0MsSUFBSUEsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzNCO1lBRUE7OztZQUdBLElBQUlDLFdBQVdBLENBQUE7Y0FDZCxNQUFNUixVQUFVLEdBQUcsSUFBSSxDQUFDUyxhQUFhLEVBQUUsSUFBSSxFQUFFO2NBQzdDLE9BQU9DLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDWCxVQUFVLENBQUMsQ0FBQ1ksSUFBSSxDQUFDQyxJQUFJLElBQUc7Z0JBQzFDLElBQUlBLElBQUksS0FBSyxJQUFJLEVBQUUsT0FBTyxLQUFLO2dCQUMvQixJQUFJQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ2YsVUFBVSxDQUFDYSxJQUFJLENBQUMsQ0FBQyxFQUFFO2tCQUNwQyxJQUFJYixVQUFVLENBQUNhLElBQUksQ0FBQyxDQUFDRyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUFULGFBQWMsQ0FBQ00sSUFBSSxDQUFDLEVBQUVHLE1BQU0sRUFBRSxPQUFPLElBQUk7a0JBQzlFLE9BQU9DLElBQUksQ0FBQ0MsU0FBUyxDQUFDbEIsVUFBVSxDQUFDYSxJQUFJLENBQUMsQ0FBQyxLQUFLSSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQVgsYUFBYyxDQUFDTSxJQUFJLENBQUMsQ0FBQzs7Z0JBRXRGLElBQUksT0FBT2IsVUFBVSxDQUFDYSxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7a0JBQ3pDLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUMsWUFBWXZCLGFBQWEsRUFBRTtvQkFDeEMsT0FBTyxJQUFJLENBQUN1QixJQUFJLENBQUMsQ0FBQ0wsV0FBVzs7a0JBRzlCLE9BQU9TLElBQUksQ0FBQ0MsU0FBUyxDQUFDbEIsVUFBVSxDQUFDYSxJQUFJLENBQUMsQ0FBQyxLQUFLSSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQVgsYUFBYyxDQUFDTSxJQUFJLENBQUMsQ0FBQzs7Z0JBR3RGLE9BQU9iLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUFOLGFBQWMsQ0FBQ00sSUFBSSxDQUFDO2NBQ3RELENBQUMsQ0FBQztZQUNIO1lBQ0E7OztZQUdBLElBQUlNLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUNYLFdBQVc7WUFDeEI7WUFFQVksWUFDQztjQUFFcEIsVUFBVTtjQUFFLEdBQUdxQjtZQUFLLElBQStCO2NBQ3BEckIsVUFBVSxFQUFFO2FBQ3lCO2NBRXRDLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQ0gsS0FBSyxDQUFDLENBQUMsRUFBRXdCLEtBQUssQ0FBQztjQUNwQixNQUFNQyxZQUFZLEdBQW1CLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQztjQUVqRyxJQUFJdEIsVUFBVSxFQUFFO2dCQUNmLElBQUksQ0FBQ0EsVUFBVSxHQUFHQSxVQUFpQztnQkFDbkQsSUFBSSxDQUFDdUIsbUJBQW1CLENBQUN2QixVQUFVLEVBQUVxQixLQUFLLENBQUM7Z0JBQzNDLElBQUlYLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDVSxLQUFLLENBQUMsQ0FBQ0wsTUFBTSxHQUFHLENBQUMsRUFBRTtrQkFDbEMsSUFBSSxDQUFDUSxnQkFBZ0IsQ0FBQ0gsS0FBbUIsQ0FBQzs7O2NBSTVDLElBQUksQ0FBQ0UsbUJBQW1CLENBQUNELFlBQXFDLEVBQUUsSUFBSSxDQUFDZixhQUFhLENBQUM7WUFDcEY7WUFFQTs7Ozs7OztZQU9RVixLQUFLQSxDQUFDLEdBQUc0QixJQUFXO2NBQzNCLElBQUksSUFBSSxDQUFDLENBQUE1QixLQUFNLEtBQUssSUFBSSxDQUFDdUIsV0FBVyxDQUFDTSxJQUFJLEVBQUU7Z0JBQzFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxHQUFHSCxJQUFJLENBQUM7O1lBRXRCO1lBRUE7Ozs7Ozs7Ozs7WUFVVUQsZ0JBQWdCQSxDQUFDSyxLQUFrQjtjQUM1QyxJQUFJLENBQUNBLEtBQUssRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBdEIsYUFBYztjQUV0QyxNQUFNdUIsTUFBTSxHQUFHLEVBQXdCO2NBRXZDLElBQUksQ0FBQzlCLFVBQVUsQ0FBQytCLE9BQU8sQ0FBQ0MsUUFBUSxJQUFHO2dCQUNsQyxJQUFJLE9BQU9BLFFBQVEsS0FBSyxRQUFRLEVBQUU7a0JBQ2pDQSxRQUFRLEdBQUdBLFFBQXFDO2tCQUNoRCxJQUFJLENBQUNuQyxLQUFLLENBQUMsQ0FBQyxFQUFFZ0MsS0FBSyxDQUFDRyxRQUFRLENBQUNOLElBQUksQ0FBQyxDQUFDO2tCQUNuQ0ksTUFBTSxDQUFDRSxRQUFRLENBQUNOLElBQUksQ0FBQyxHQUFHRyxLQUFLLENBQUNHLFFBQVEsQ0FBQ04sSUFBSSxDQUFDO2tCQUM1Qzs7Z0JBR0RJLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDLEdBQUdILEtBQUssQ0FBQ0csUUFBUSxDQUFlO2NBQ2pELENBQUMsQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBL0IsT0FBUSxHQUFHUyxNQUFNLENBQUNDLElBQUksQ0FBQ2tCLEtBQUssQ0FBQyxDQUFDYixNQUFNLEtBQUssQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQVQsYUFBYyxHQUFHdUIsTUFBTTtjQUU1QixPQUFPLElBQUksQ0FBQyxDQUFBdkIsYUFBYztZQUMzQjtZQUVBMEIsV0FBV0EsQ0FBb0JDLEdBQU07Y0FDcEMsT0FBTyxJQUFJLENBQUNwQyxjQUFjLENBQUNvQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xDO1lBRUFGLFFBQVEsR0FBRyxJQUFJLENBQUNDLFdBQVc7WUFFakJFLGtCQUFrQkEsQ0FBb0JDLE9BQWUsRUFBRUMsWUFBaUIsRUFBRUMsS0FBQSxHQUFpQixLQUFLO2NBQ3pHLElBQUksQ0FBQ3hDLGNBQWMsQ0FBQ3NDLE9BQU8sQ0FBQyxHQUFHQyxZQUFZO2NBRTNDM0IsTUFBTSxDQUFDNkIsY0FBYyxDQUFDLElBQUksRUFBRUgsT0FBaUIsRUFBRTtnQkFDOUNJLEdBQUcsRUFBRUEsQ0FBQSxLQUFLO2tCQUNULE9BQU8sSUFBSSxDQUFDMUMsY0FBYyxDQUFDc0MsT0FBTyxDQUFDO2dCQUNwQyxDQUFDO2dCQUNESyxHQUFHLEVBQUdDLE1BQU0sSUFBVTtrQkFDckIsSUFBSUosS0FBSyxFQUFFO29CQUNWLE1BQU1LLFFBQVEsR0FBRyxJQUFJLENBQUM3QyxjQUFjLENBQUNzQyxPQUFPLENBQUM7b0JBQzdDLElBQUksQ0FBQy9CLE9BQU8sQ0FBQyxHQUFHK0IsT0FBTyxVQUFVLEVBQUU7c0JBQ2xDaEMsS0FBSyxFQUFFc0MsTUFBTTtzQkFDYkUsUUFBUSxFQUFFRCxRQUFRLENBQUNsQyxhQUFhO3FCQUNoQyxDQUFDO29CQUNGLElBQUksQ0FBQ0osT0FBTyxDQUFDLFFBQVEsQ0FBQztvQkFDdEIsSUFBSSxDQUFDUCxjQUFjLENBQUNzQyxPQUFPLENBQUMsQ0FBQ0ssR0FBRyxDQUFDQyxNQUFNLENBQUM7b0JBQ3hDOztrQkFHRCxJQUFJQSxNQUFNLEtBQUtHLFNBQVMsSUFBSUgsTUFBTSxLQUFLLElBQUksQ0FBQzVDLGNBQWMsQ0FBQ3NDLE9BQU8sQ0FBQyxFQUFFO2tCQUVyRSxNQUFNUSxRQUFRLEdBQUcsSUFBSSxDQUFDOUMsY0FBYyxDQUFDc0MsT0FBTyxDQUFDO2tCQUM3QyxJQUFJLENBQUN0QyxjQUFjLENBQUNzQyxPQUFPLENBQUMsR0FBR00sTUFBTTtrQkFFckMsSUFBSSxDQUFDckMsT0FBTyxDQUFDLEdBQUcrQixPQUFPLFVBQVUsRUFBRTtvQkFBRWhDLEtBQUssRUFBRXNDLE1BQU07b0JBQUVFO2tCQUFRLENBQUUsQ0FBQztrQkFDL0QsSUFBSSxDQUFDdkMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDdkIsQ0FBQztnQkFDRHlDLFVBQVUsRUFBRSxJQUFJO2dCQUNoQkMsWUFBWSxFQUFFO2VBQ2QsQ0FBQztZQUNIO1lBRUE7Ozs7Ozs7Ozs7WUFVVXhCLG1CQUFtQkEsQ0FBQ0YsS0FBNEIsRUFBRVMsTUFBTztjQUNsRSxLQUFLLElBQUlNLE9BQU8sSUFBSWYsS0FBSyxFQUFFO2dCQUMxQixNQUFNMkIsVUFBVSxHQUFHdEMsTUFBTSxDQUFDdUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFYixPQUFpQixDQUFDO2dCQUUzRSxJQUFJQSxPQUFPLEtBQUtTLFNBQVMsRUFBRTtnQkFFM0IsSUFBSSxPQUFPVCxPQUFPLEtBQUssUUFBUSxFQUFFO2tCQUNoQyxJQUFJLENBQUMsQ0FBQWxDLGFBQWMsQ0FBQ2dELEdBQUcsQ0FBQ2QsT0FBTyxDQUFDO2tCQUNoQyxJQUFJQyxZQUFZLEdBQUdQLE1BQU0sR0FBR00sT0FBTyxDQUFDLElBQUlZLFVBQVUsRUFBRTVDLEtBQUs7a0JBQ3pELElBQUksQ0FBQytCLGtCQUFrQixDQUFDQyxPQUFpQixFQUFFQyxZQUFZLENBQUM7a0JBQ3hEOztnQkFHRCxNQUFNYyxJQUFJLEdBQUdmLE9BQW9DO2dCQUNqRCxNQUFNVixJQUFJLEdBQUd5QixJQUFJLENBQUN6QixJQUFjO2dCQUNoQyxJQUFJVyxZQUFZLEdBQUdQLE1BQU0sR0FBR0osSUFBSSxDQUFDLElBQUlzQixVQUFVLEVBQUU1QyxLQUFLO2dCQUN0RCxNQUFNeUIsS0FBSyxHQUFHc0IsSUFBSSxDQUFDbkQsVUFBVSxJQUFJLEVBQUU7Z0JBRW5DLElBQUksT0FBT21ELElBQUksQ0FBQy9DLEtBQUssS0FBSyxVQUFVLElBQUksT0FBTytDLElBQUksQ0FBQy9DLEtBQUssS0FBSyxRQUFRLEVBQUU7a0JBQ3ZFdUIsT0FBTyxDQUFDeUIsSUFBSSxDQUFDLDJCQUEyQjFCLElBQWMsRUFBRSxDQUFDO2tCQUN6RDs7Z0JBR0QsTUFBTTJCLFVBQVUsR0FBR0YsSUFBSSxDQUFDL0MsS0FBSyxDQUFDa0QsWUFBWSxHQUFHO2tCQUFFQyxNQUFNLEVBQUU7Z0JBQUksQ0FBRSxHQUFHO2tCQUFFQSxNQUFNLEVBQUUsSUFBSTtrQkFBRSxHQUFHbEIsWUFBWTtrQkFBRSxHQUFHUjtnQkFBSyxDQUFFO2dCQUMzRyxNQUFNYyxRQUFRLEdBQUcsSUFBSVEsSUFBSSxDQUFDL0MsS0FBSyxDQUFDaUQsVUFBVSxDQUFDO2dCQUUzQyxJQUFJRixJQUFJLENBQUMvQyxLQUFLLENBQUNrRCxZQUFZLEVBQUU7a0JBQzVCWCxRQUFRLENBQUNhLFFBQVEsQ0FBQ25CLFlBQVksQ0FBQzs7Z0JBR2hDLElBQUksQ0FBQyxDQUFBbkMsYUFBYyxDQUFDZ0QsR0FBRyxDQUFDeEIsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUNTLGtCQUFrQixDQUFDVCxJQUFJLEVBQUVpQixRQUFRLEVBQUUsSUFBSSxDQUFDO2dCQUU3Qzs7WUFFRjtZQUVVYyxhQUFhQSxDQUFDcEMsS0FBNEI7Y0FDbkQsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQ0YsS0FBSyxDQUFDO1lBQ2hDO1lBRUFxQyxXQUFXQSxDQUFDdEIsT0FBZSxFQUFFaEMsS0FBVTtjQUN0QyxJQUFJLENBQUNOLGNBQWMsQ0FBQ3NDLE9BQU8sQ0FBQyxHQUFHaEMsS0FBSztZQUNyQztZQUVRdUQsZ0JBQWdCQSxDQUFDdkIsT0FBZSxFQUFFaEMsS0FBVTtjQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDRSxNQUFNLEVBQUU7Z0JBQ2pCLE9BQU87a0JBQUVzRCxLQUFLLEVBQUUsSUFBSTtrQkFBRUMsS0FBSyxFQUFFO2dCQUFJLENBQUU7O2NBR3BDLElBQUksQ0FBQyxJQUFJLENBQUN2RCxNQUFNLENBQUN3RCxLQUFLLENBQUMxQixPQUFPLENBQUMsRUFBRTtnQkFDaEMsT0FBTztrQkFDTndCLEtBQUssRUFBRSxLQUFLO2tCQUNaQyxLQUFLLEVBQUUsSUFBSTFFLElBQUEsQ0FBQTRFLFFBQVEsQ0FBQyxDQUNuQjtvQkFDQ0MsSUFBSSxFQUFFLENBQUM1QixPQUFPLENBQUM7b0JBQ2Y2QixPQUFPLEVBQUUsWUFBWTdCLE9BQU8sK0JBQStCO29CQUMzRDhCLElBQUksRUFBRTttQkFDTixDQUNEO2lCQUNEOztjQUdGLE1BQU1DLFVBQVUsR0FBRyxJQUFJLENBQUM3RCxNQUFNLENBQUN3RCxLQUFLLENBQUMxQixPQUFPLENBQWU7Y0FDM0QsTUFBTWdDLE1BQU0sR0FBR0QsVUFBVSxDQUFDRSxTQUFTLENBQUNqRSxLQUFLLENBQUM7Y0FFMUMsSUFBSSxDQUFDZ0UsTUFBTSxDQUFDRSxPQUFPLEVBQUU7Z0JBQ3BCLE9BQU87a0JBQUVWLEtBQUssRUFBRSxLQUFLO2tCQUFFQyxLQUFLLEVBQUVPLE1BQU0sQ0FBQ1A7Z0JBQUssQ0FBRTs7Y0FHN0MsT0FBTztnQkFBRUQsS0FBSyxFQUFFLElBQUk7Z0JBQUVDLEtBQUssRUFBRTtjQUFJLENBQUU7WUFDcEM7WUFDUVUsWUFBWSxHQUFHQSxDQUFDQyxDQUFNLEVBQUVDLENBQU0sS0FBS3hELElBQUksQ0FBQ0MsU0FBUyxDQUFDc0QsQ0FBQyxDQUFDLEtBQUt2RCxJQUFJLENBQUNDLFNBQVMsQ0FBQ3VELENBQUMsQ0FBQztZQUVsRjs7Ozs7Ozs7O1lBU0FDLFFBQVFBLENBQUMxRSxVQUFVO2NBSWxCLE1BQU1XLElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFJLENBQUNYLFVBQVUsQ0FBQztjQUNwQyxNQUFNMkUsTUFBTSxHQUFnQyxFQUFFO2NBQzlDLE1BQU1DLFVBQVUsR0FBRy9ELElBQUksSUFBRztnQkFDekIsSUFBSSxDQUFDLElBQUksQ0FBQ2IsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDQSxVQUFVLENBQUM2RSxRQUFRLENBQUNoRSxJQUFJLENBQUMsRUFBRTtrQkFDeERjLE9BQU8sQ0FBQ21ELEtBQUssQ0FBQyxtQkFBbUIsRUFBRWpFLElBQUksQ0FBQztrQkFDeEM7O2dCQUVELE1BQU1rRSxTQUFTLEdBQUcsSUFBSSxDQUFDcEIsZ0JBQWdCLENBQUM5QyxJQUFJLEVBQUViLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDLENBQUM7Z0JBRS9ELElBQUksQ0FBQ2tFLFNBQVMsQ0FBQ25CLEtBQUssRUFBRTtrQkFDckJlLE1BQU0sQ0FBQzlELElBQUksQ0FBQyxHQUFHa0UsU0FBUyxDQUFDbEIsS0FBSzs7Y0FFaEMsQ0FBQztjQUNEbEQsSUFBSSxDQUFDb0IsT0FBTyxDQUFDNkMsVUFBVSxDQUFDO2NBRXhCLE9BQU87Z0JBQUVoQixLQUFLLEVBQUVsRCxNQUFNLENBQUNDLElBQUksQ0FBQ2dFLE1BQU0sQ0FBQyxDQUFDM0QsTUFBTSxLQUFLLENBQUM7Z0JBQUUyRDtjQUFNLENBQUU7WUFDM0Q7WUFFQWxDLEdBQUdBLENBQUN6QyxVQUFzQjtjQUN6QixJQUFJLENBQUNBLFVBQVUsRUFBRTtnQkFDaEIyQixPQUFPLENBQUN5QixJQUFJLENBQUMsdUNBQXVDLEVBQUUsSUFBSSxDQUFDaEMsV0FBVyxDQUFDTSxJQUFJLEVBQUUxQixVQUFVLENBQUM7Z0JBQ3hGLE9BQU87a0JBQ05nRixPQUFPLEVBQUU7aUJBQ1Q7O2NBR0YsTUFBTXJFLElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFJLENBQUNYLFVBQVUsQ0FBQztjQUNwQyxJQUFJZ0YsT0FBTyxHQUFHLEtBQUs7Y0FDbkIsTUFBTUwsTUFBTSxHQUFnQyxFQUFFO2NBQzlDLElBQUksQ0FBQzlFLEtBQUssQ0FBQyxDQUFDLEVBQUVHLFVBQVUsQ0FBQztjQUN6QixNQUFNaUYsS0FBSyxHQUFHcEUsSUFBSSxJQUFHO2dCQUNwQixJQUFJLENBQUNoQixLQUFLLENBQUNnQixJQUFJLEVBQUViLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQVgsYUFBYyxDQUFDZ0YsR0FBRyxDQUFDckUsSUFBSSxDQUFDLEVBQUU7a0JBQ25DO2tCQUNBOztnQkFHRCxNQUFNa0UsU0FBUyxHQUFHLElBQUksQ0FBQ3BCLGdCQUFnQixDQUFDOUMsSUFBSSxFQUFFYixVQUFVLENBQUNhLElBQUksQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLENBQUNoQixLQUFLLENBQUNnQixJQUFJLEVBQUViLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDLEVBQUVrRSxTQUFTLENBQUM7Z0JBQzdDO2dCQUNBLElBQUksQ0FBQ0EsU0FBUyxDQUFDbkIsS0FBSyxFQUFFO2tCQUNyQmUsTUFBTSxDQUFDOUQsSUFBSSxDQUFDLEdBQUdrRSxTQUFTO2tCQUN4Qjs7Z0JBRUQsSUFBSSxDQUFDbEYsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUN1QixXQUFXLENBQUNNLElBQUksRUFBRWIsSUFBSSxDQUFDO2dCQUM1QztnQkFDQSxJQUFJLElBQUksQ0FBQ29CLFdBQVcsQ0FBQ3BCLElBQUksQ0FBQyxFQUFFZCxVQUFVLEVBQUU7a0JBQ3ZDLE1BQU00QyxRQUFRLEdBQUcsSUFBSSxDQUFDVixXQUFXLENBQUNwQixJQUFJLENBQWdDO2tCQUV0RThCLFFBQVEsQ0FBQ0YsR0FBRyxDQUFDekMsVUFBVSxDQUFDYSxJQUFJLENBQUMsQ0FBQztrQkFDOUIsSUFBSThCLFFBQVEsQ0FBQ25DLFdBQVcsRUFBRXdFLE9BQU8sR0FBRyxJQUFJO2tCQUV4Qzs7Z0JBR0QsTUFBTUcsUUFBUSxHQUFHLE9BQU9uRixVQUFVLENBQUNhLElBQUksQ0FBQyxLQUFLLFFBQVE7Z0JBQ3JELE1BQU0wRCxZQUFZLEdBQUdZLFFBQVEsSUFBSSxJQUFJLENBQUNaLFlBQVksQ0FBQyxDQUFDMUQsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDQSxJQUFJLENBQUMsQ0FBQztnQkFFdEUsSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQyxLQUFLYixVQUFVLENBQUNhLElBQUksQ0FBQyxJQUFJMEQsWUFBWSxFQUFFO2dCQUVyRCxJQUFJLENBQUMxRCxJQUFJLENBQUMsR0FBR2IsVUFBVSxDQUFDYSxJQUFJLENBQUU7Z0JBQzlCbUUsT0FBTyxHQUFHLElBQUk7Y0FDZixDQUFDO2NBRURyRSxJQUFJLENBQUNvQixPQUFPLENBQUNrRCxLQUFLLENBQUM7Y0FDbkIsSUFBSUQsT0FBTyxFQUFFO2dCQUNaLElBQUksQ0FBQzNFLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQ3RCLElBQUksQ0FBQ0EsT0FBTyxDQUFDLGNBQWMsQ0FBQzs7Y0FHN0IsT0FBTztnQkFBRTJFLE9BQU87Z0JBQUVMO2NBQU0sQ0FBRTtZQUMzQjtZQUVBOzs7Ozs7WUFNQWxFLGFBQWFBLENBQUE7Y0FDWixNQUFNWSxLQUFLLEdBQUcsRUFBZ0I7Y0FFOUIsTUFBTStELElBQUksR0FBR3BELFFBQVEsSUFBRztnQkFDdkIsSUFBSU4sSUFBSSxHQUFHTSxRQUFRO2dCQUVuQixJQUFJLE9BQU9BLFFBQVEsS0FBSyxRQUFRLElBQUlBLFFBQVEsQ0FBQzVCLEtBQUssQ0FBQ0wsVUFBVSxFQUFFO2tCQUM5RDJCLElBQUksR0FBR00sUUFBUSxDQUFDTixJQUFJO2tCQUNwQjs7O2tCQUdBTCxLQUFLLENBQUNnRSxNQUFNLENBQUMzRCxJQUFJLENBQUMsQ0FBQyxHQUFHTSxRQUFRLENBQUM1QixLQUFLLENBQUNrRCxZQUFZLEdBQzlDLElBQUksQ0FBQzVCLElBQUksQ0FBQyxDQUFDNEQsaUJBQWlCLEVBQUUsR0FDOUIsSUFBSSxDQUFDNUQsSUFBSSxDQUFDLEVBQUVqQixhQUFhLEVBQUU7a0JBQzlCOztnQkFHRFksS0FBSyxDQUFDZ0UsTUFBTSxDQUFDM0QsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNBLElBQUksQ0FBQztjQUNqQyxDQUFDO2NBQ0QsSUFBSSxDQUFDMUIsVUFBVSxDQUFDK0IsT0FBTyxDQUFDcUQsSUFBSSxDQUFDO2NBQzdCLE9BQU8vRCxLQUFLO1lBQ2I7WUFFQTs7OztZQUlBa0UsTUFBTUEsQ0FBQTtjQUNMLElBQUksQ0FBQzlDLEdBQUcsQ0FBQyxJQUFJLENBQUNsQyxhQUFhLENBQUM7WUFDN0I7WUFFQTs7Ozs7WUFLQWlGLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQWpGLGFBQWMsR0FBRyxJQUFJLENBQUNFLGFBQWEsRUFBRTtjQUMxQyxJQUFJLENBQUMsQ0FBQVIsT0FBUSxHQUFHLEtBQUs7WUFDdEI7WUFFQTs7Ozs7O1lBTUF3RixZQUFZLEdBQUdBLENBQUNDLEtBQUEsR0FBZ0IsUUFBUSxFQUFFQyxNQUFBLEdBQThCLEVBQUUsS0FBVTtjQUNuRixJQUFJLENBQUN0RixPQUFPLENBQUNxRixLQUFLLENBQUM7WUFDcEIsQ0FBQzs7VUFDREUsT0FBQSxDQUFBdEcsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7OztVQWphRDs7VUFFQW9CLE1BQUEsQ0FBQTZCLGNBQUEsQ0FBQXFELE9BQUE7WUFDQXhGLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==