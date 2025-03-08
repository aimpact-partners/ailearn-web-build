System.register(["@beyond-js/kernel@0.1.9/bundle", "zod@3.24.1", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ReactiveModel, ModelProperties, IReactiveModelOptions, SetPropertiesResult, __beyond_pkg, hmr;
  _export({
    ReactiveModel: void 0,
    ModelProperties: void 0,
    IReactiveModelOptions: void 0,
    SetPropertiesResult: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_zod2) {
      dependency_1 = _zod2;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["react", "18.3.1"], ["socket.io-client", "4.8.1"], ["uuid", "11.0.3"], ["zod", "3.23.8"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/ailearn-app", "0.3.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/reactive@0.0.1/model"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['zod', dependency_1], ['@beyond-js/events/events', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./example
      *************************/
      ims.set('./example', {
        hash: 3793998983,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Example = void 0;
          var _ = require("./");
          class Example extends _.ReactiveModel {
            constructor({
              ...args
            } = {}) {
              super({
                ...args,
                properties: ['name', 'id']
              });
              this.reactiveProps(['pepito']);
            }
            print() {
              return this.getProperty('name');
            }
          }
          // const instance = new Example();
          // instance.on('name.changed', () => console.log('cambio el nombre a ', instance.name));
          // instance.on('pepito.changed', () => console.log('cambio el pepito a ', instance.pepito));
          // instance.name = 'nuevo nombre';
          // instance.pepito = 'nuevo pepito';
          // setTimeout(() => {
          // 	instance.name = 'otro nombre';
          // 	instance.pepito = 'otro pepito';
          // 	console.log(12, instance.name);
          // }, 1000);
          // console.log(instance.id, instance.name);
          exports.Example = Example;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3070676061,
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
              this.triggerEvent('ready');
              this.triggerEvent('change');
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
                this.triggerEvent('change');
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
            /**
             * Triggers an event after a specified delay.
             *
             * @param {string} event - The name of the event to trigger.
             * @param {Record<string, any>} params - Additional parameters for the event, including an optional `delay` property.
             */
            triggerEvent = (event = 'change', params = {}) => {
              this.trigger(event);
            };
            revert() {
              this.set(this.initialValues);
            }
            saveChanges() {
              this.#initialValues = this.getProperties();
              this.#isDraft = false;
            }
          }
          exports.ReactiveModel = ReactiveModel;
        }
      });

      /**********************
      INTERNAL MODULE: ./list
      **********************/

      ims.set('./list', {
        hash: 4050913307,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactiveList = void 0;
          var _events = require("@beyond-js/events/events");
          class ReactiveList extends _events.Events {}
          exports.ReactiveList = ReactiveList;
        }
      });

      /***********************
      INTERNAL MODULE: ./proxy
      ***********************/

      ims.set('./proxy', {
        hash: 1157261727,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProxyBase = void 0;
          var _events = require("@beyond-js/events/events");
          class ProxyBase extends _events.Events {
            constructor() {
              super();
              const proxy = new Proxy(this, {
                get: (target, prop, receiver) => {
                  if (prop in target) {
                    const value = target[prop];
                    return typeof value === 'function' ? value.bind(target) : value;
                  }
                  if (prop in target) {
                    return Reflect.get(target, prop, receiver);
                  } else {
                    throw new Error(`Property ${String(prop)} does not exist`);
                  }
                },
                set: (target, prop, value) => {
                  target[prop] = value;
                  return true;
                }
              });
              return Object.assign(this, proxy); // Ensures proxy functionality
            }
          }
          exports.ProxyBase = ProxyBase;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIkV4YW1wbGUiLCJSZWFjdGl2ZU1vZGVsIiwiY29uc3RydWN0b3IiLCJhcmdzIiwicHJvcGVydGllcyIsInJlYWN0aXZlUHJvcHMiLCJwcmludCIsImdldFByb3BlcnR5IiwiZXhwb3J0cyIsIl96b2QiLCJfZXZlbnRzIiwiRXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInJlYWR5IiwiX3JlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwiaXNEcmFmdCIsInByb3BlcnR5TmFtZXMiLCJTZXQiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsInNjaGVtYSIsImluaXRpYWxWYWx1ZXMiLCJ1bnB1Ymxpc2hlZCIsImdldFByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsInByb3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiaXNVbnB1Ymxpc2hlZCIsInByb3BzIiwiZGVmYXVsdFByb3BzIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInNldEluaXRpYWxWYWx1ZXMiLCJzcGVjcyIsInZhbHVlcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsIm5hbWUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsImtleSIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByb3BLZXkiLCJpbml0aWFsVmFsdWUiLCJtb2RlbCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwibmV3VmFsIiwiaW5zdGFuY2UiLCJ0cmlnZ2VyIiwicHJldmlvdXMiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImFkZCIsImRhdGEiLCJjb25zb2xlIiwid2FybiIsInBhcmFtZXRlcnMiLCJpc0NvbGxlY3Rpb24iLCJwYXJlbnQiLCJzZXRJdGVtcyIsInNldFByb3BlcnR5IiwidmFsaWRhdGVQcm9wZXJ0eSIsInZhbGlkIiwiZXJyb3IiLCJzaGFwZSIsIlpvZEVycm9yIiwicGF0aCIsIm1lc3NhZ2UiLCJjb2RlIiwicHJvcFNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJpc1NhbWVPYmplY3QiLCJhIiwiYiIsInZhbGlkYXRlIiwiZXJyb3JzIiwib25WYWxpZGF0ZSIsImluY2x1ZGVzIiwidHJhY2UiLCJ2YWxpZGF0ZWQiLCJ1cGRhdGVkIiwib25TZXQiLCJoYXMiLCJpc09iamVjdCIsImxvb3AiLCJTdHJpbmciLCJnZXRJdGVtUHJvcGVydGllcyIsImV2ZW50IiwicGFyYW1zIiwicmV2ZXJ0Iiwic2F2ZUNoYW5nZXMiLCJSZWFjdGl2ZUxpc3QiLCJQcm94eUJhc2UiLCJwcm94eSIsIlByb3h5IiwidGFyZ2V0IiwicmVjZWl2ZXIiLCJiaW5kIiwiUmVmbGVjdCIsIkVycm9yIiwiYXNzaWduIl0sInNvdXJjZXMiOlsiL2V4YW1wbGUudHMiLCIvaW5kZXgudHMiLCIvbGlzdC50cyIsIi9wcm94eS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxDQUFBLEdBQUFDLE9BQUE7VUFPTSxNQUFPQyxPQUFRLFNBQVFGLENBQUEsQ0FBQUcsYUFBdUI7WUFLbkRDLFlBQVk7Y0FBRSxHQUFHQztZQUFJLElBQXdCLEVBQUU7Y0FDOUMsS0FBSyxDQUFDO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUVDLFVBQVUsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJO2NBQUMsQ0FBRSxDQUFDO2NBQzlDLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0I7WUFFQUMsS0FBS0EsQ0FBQTtjQUNKLE9BQU8sSUFBSSxDQUFDQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ2hDOztVQUdEO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7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