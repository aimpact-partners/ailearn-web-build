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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["react", "18.3.1"], ["socket.io-client", "4.8.1"], ["uuid", "11.0.3"], ["zod", "3.23.8"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 3326937235,
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
              this.defineReactiveProps(defaultProps, false);
              if (properties) {
                this.properties = properties;
                this.defineReactiveProps(properties, props);
                if (Object.keys(props).length > 0) {
                  this.setInitialValues(props);
                }
              }
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
              this.set(specs);
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
                if (typeof property === 'object') {
                  name = property.name;
                  props[String(name)] = this[name]?.getProperties();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIkV4YW1wbGUiLCJSZWFjdGl2ZU1vZGVsIiwiY29uc3RydWN0b3IiLCJhcmdzIiwicHJvcGVydGllcyIsInJlYWN0aXZlUHJvcHMiLCJwcmludCIsImdldFByb3BlcnR5IiwiZXhwb3J0cyIsIl96b2QiLCJfZXZlbnRzIiwiRXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInJlYWR5IiwiX3JlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwiaXNEcmFmdCIsInByb3BlcnR5TmFtZXMiLCJTZXQiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsInNjaGVtYSIsImluaXRpYWxWYWx1ZXMiLCJ1bnB1Ymxpc2hlZCIsImdldFByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsInByb3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiaXNVbnB1Ymxpc2hlZCIsInByb3BzIiwiZGVmYXVsdFByb3BzIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInNldEluaXRpYWxWYWx1ZXMiLCJzcGVjcyIsInZhbHVlcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsIm5hbWUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInNldCIsImtleSIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByb3BLZXkiLCJpbml0aWFsVmFsdWUiLCJtb2RlbCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwibmV3VmFsIiwiaW5zdGFuY2UiLCJ0cmlnZ2VyIiwicHJldmlvdXMiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImFkZCIsImRhdGEiLCJjb25zb2xlIiwid2FybiIsInBhcmFtZXRlcnMiLCJpc0NvbGxlY3Rpb24iLCJwYXJlbnQiLCJzZXRJdGVtcyIsInNldFByb3BlcnR5IiwidmFsaWRhdGVQcm9wZXJ0eSIsInZhbGlkIiwiZXJyb3IiLCJzaGFwZSIsIlpvZEVycm9yIiwicGF0aCIsIm1lc3NhZ2UiLCJjb2RlIiwicHJvcFNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJpc1NhbWVPYmplY3QiLCJhIiwiYiIsInZhbGlkYXRlIiwiZXJyb3JzIiwib25WYWxpZGF0ZSIsImluY2x1ZGVzIiwidHJhY2UiLCJ2YWxpZGF0ZWQiLCJ1cGRhdGVkIiwib25TZXQiLCJoYXMiLCJpc09iamVjdCIsImxvb3AiLCJTdHJpbmciLCJldmVudCIsInBhcmFtcyIsInJldmVydCIsInNhdmVDaGFuZ2VzIiwiUmVhY3RpdmVMaXN0IiwiUHJveHlCYXNlIiwicHJveHkiLCJQcm94eSIsInRhcmdldCIsInJlY2VpdmVyIiwiYmluZCIsIlJlZmxlY3QiLCJFcnJvciIsImFzc2lnbiJdLCJzb3VyY2VzIjpbIi9leGFtcGxlLnRzIiwiL2luZGV4LnRzIiwiL2xpc3QudHMiLCIvcHJveHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsQ0FBQSxHQUFBQyxPQUFBO1VBT00sTUFBT0MsT0FBUSxTQUFRRixDQUFBLENBQUFHLGFBQXVCO1lBS25EQyxZQUFZO2NBQUUsR0FBR0M7WUFBSSxJQUF3QixFQUFFO2NBQzlDLEtBQUssQ0FBQztnQkFBRSxHQUFHQSxJQUFJO2dCQUFFQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSTtjQUFDLENBQUUsQ0FBQztjQUM5QyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CO1lBRUFDLEtBQUtBLENBQUE7Y0FDSixPQUFPLElBQUksQ0FBQ0MsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNoQzs7VUFHRDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7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