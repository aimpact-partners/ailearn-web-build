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
        hash: 870095509,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIkV4YW1wbGUiLCJSZWFjdGl2ZU1vZGVsIiwiY29uc3RydWN0b3IiLCJhcmdzIiwicHJvcGVydGllcyIsInJlYWN0aXZlUHJvcHMiLCJwcmludCIsImdldFByb3BlcnR5IiwiZXhwb3J0cyIsIl96b2QiLCJfZXZlbnRzIiwiRXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInJlYWR5IiwiX3JlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwiaXNEcmFmdCIsInByb3BlcnR5TmFtZXMiLCJTZXQiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsInNjaGVtYSIsImluaXRpYWxWYWx1ZXMiLCJ1bnB1Ymxpc2hlZCIsImdldFByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsInByb3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiaXNVbnB1Ymxpc2hlZCIsInByb3BzIiwiZGVmYXVsdFByb3BzIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInNldEluaXRpYWxWYWx1ZXMiLCJzcGVjcyIsInZhbHVlcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsIm5hbWUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsImtleSIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByb3BLZXkiLCJpbml0aWFsVmFsdWUiLCJtb2RlbCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwibmV3VmFsIiwiaW5zdGFuY2UiLCJ0cmlnZ2VyIiwicHJldmlvdXMiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImFkZCIsImRhdGEiLCJjb25zb2xlIiwid2FybiIsInBhcmFtZXRlcnMiLCJpc0NvbGxlY3Rpb24iLCJwYXJlbnQiLCJzZXRJdGVtcyIsInNldFByb3BlcnR5IiwidmFsaWRhdGVQcm9wZXJ0eSIsInZhbGlkIiwiZXJyb3IiLCJzaGFwZSIsIlpvZEVycm9yIiwicGF0aCIsIm1lc3NhZ2UiLCJjb2RlIiwicHJvcFNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJpc1NhbWVPYmplY3QiLCJhIiwiYiIsInZhbGlkYXRlIiwiZXJyb3JzIiwib25WYWxpZGF0ZSIsImluY2x1ZGVzIiwidHJhY2UiLCJ2YWxpZGF0ZWQiLCJ1cGRhdGVkIiwib25TZXQiLCJoYXMiLCJpc09iamVjdCIsImxvb3AiLCJTdHJpbmciLCJldmVudCIsInBhcmFtcyIsInJldmVydCIsInNhdmVDaGFuZ2VzIiwiUmVhY3RpdmVMaXN0IiwiUHJveHlCYXNlIiwicHJveHkiLCJQcm94eSIsInRhcmdldCIsInJlY2VpdmVyIiwiYmluZCIsIlJlZmxlY3QiLCJFcnJvciIsImFzc2lnbiJdLCJzb3VyY2VzIjpbIi9leGFtcGxlLnRzIiwiL2luZGV4LnRzIiwiL2xpc3QudHMiLCIvcHJveHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsQ0FBQSxHQUFBQyxPQUFBO1VBT00sTUFBT0MsT0FBUSxTQUFRRixDQUFBLENBQUFHLGFBQXVCO1lBS25EQyxZQUFZO2NBQUUsR0FBR0M7WUFBSSxJQUF3QixFQUFFO2NBQzlDLEtBQUssQ0FBQztnQkFBRSxHQUFHQSxJQUFJO2dCQUFFQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSTtjQUFDLENBQUUsQ0FBQztjQUM5QyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CO1lBRUFDLEtBQUtBLENBQUE7Y0FDSixPQUFPLElBQUksQ0FBQ0MsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNoQzs7VUFHRDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7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