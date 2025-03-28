System.register(["@beyond-js/kernel@0.1.12/bundle", "zod@3.24.2", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["uuid", "11.1.0"], ["zod", "3.24.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/local", "0.1.3"], ["react", "18.3.1"], ["@beyond-js/reactive", "1.2.0-beta.01"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.2.0-beta.01/model"
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
        hash: 3425354039,
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
              // if (['LearningModule', 'LearningModuleAudience'].includes(this.constructor.name))
              // 	console.log('instanciamos', this.constructor.name, props, this.initialValues);
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
                if (!validated.valid) {
                  errors[prop] = validated;
                  return;
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
            getProperties() {
              const props = {};
              const loop = property => {
                let name = property;
                // console.log(1, name, property);
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
            revert() {
              this.set(this.initialValues);
            }
            saveChanges() {
              this.#initialValues = this.getProperties();
              this.#isDraft = false;
            }
            triggerEvent(event = 'change', specs) {
              this.trigger('event', specs);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfem9kIiwicmVxdWlyZSIsIl9ldmVudHMiLCJSZWFjdGl2ZU1vZGVsIiwiRXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInJlYWR5IiwiX3JlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwicHJvcGVydGllcyIsImlzRHJhZnQiLCJwcm9wZXJ0eU5hbWVzIiwiU2V0IiwidmFsdWUiLCJ0cmlnZ2VyIiwic2NoZW1hIiwiaW5pdGlhbFZhbHVlcyIsInVucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc1VucHVibGlzaGVkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRlZmF1bHRQcm9wcyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJzZXRJbml0aWFsVmFsdWVzIiwic3BlY3MiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJnZXRQcm9wZXJ0eSIsImtleSIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByb3BLZXkiLCJpbml0aWFsVmFsdWUiLCJtb2RlbCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwibmV3VmFsIiwiaW5zdGFuY2UiLCJwcmV2aW91cyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYWRkIiwiZGF0YSIsImNvbnNvbGUiLCJ3YXJuIiwicGFyYW1ldGVycyIsImlzQ29sbGVjdGlvbiIsInBhcmVudCIsInNldEl0ZW1zIiwicmVhY3RpdmVQcm9wcyIsInNldFByb3BlcnR5IiwidmFsaWRhdGVQcm9wZXJ0eSIsInZhbGlkIiwiZXJyb3IiLCJzaGFwZSIsIlpvZEVycm9yIiwicGF0aCIsIm1lc3NhZ2UiLCJjb2RlIiwicHJvcFNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJpc1NhbWVPYmplY3QiLCJhIiwiYiIsInZhbGlkYXRlIiwiZXJyb3JzIiwib25WYWxpZGF0ZSIsImluY2x1ZGVzIiwidHJhY2UiLCJ2YWxpZGF0ZWQiLCJ1cGRhdGVkIiwib25TZXQiLCJoYXMiLCJpc09iamVjdCIsImxvb3AiLCJTdHJpbmciLCJnZXRJdGVtUHJvcGVydGllcyIsInJldmVydCIsInNhdmVDaGFuZ2VzIiwidHJpZ2dlckV2ZW50IiwiZXZlbnQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLElBQUEsR0FBQUMsT0FBQTtVQWNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVcsTUFBT0UsYUFBaUIsU0FBUUQsT0FBQSxDQUFBRSxNQUFNO1lBQ3ZEQyxlQUFlO1lBQ2ZDLFVBQVUsR0FBWSxLQUFLO1lBQzNCQyxTQUFTLEdBQVksS0FBSztZQUUxQkMsTUFBTSxHQUFZLEtBQUs7WUFDdkIsQ0FBQUMsS0FBTSxHQUFZLEtBQUs7WUFFZkMsY0FBYyxHQUF5QixFQUEwQjtZQUN6RSxPQUFPQyxVQUFVQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSTtZQUNaO1lBQ0E7WUFDVUMsVUFBVSxHQUF3QixFQUFFO1lBQzlDO1lBQ0EsQ0FBQUMsT0FBUSxHQUFZLEtBQUs7WUFDekIsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFDQSxDQUFBQyxhQUFjLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQzFCLElBQUlOLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUEsS0FBS0EsQ0FBQ08sS0FBYztjQUN2QixJ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