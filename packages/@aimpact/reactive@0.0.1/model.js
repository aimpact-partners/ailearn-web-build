System.register(["@beyond-js/kernel@0.1.9/bundle", "zod@3.23.8", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ReactiveModel, ModelProperties, ReactiveProps, SetPropertiesResult, __beyond_pkg, hmr;
  _export({
    ReactiveModel: void 0,
    ModelProperties: void 0,
    ReactiveProps: void 0,
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
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2476945494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactiveModel = void 0;
          var _zod = require("zod");
          var _proxy = require("./proxy");
          /*bundle */
          class ReactiveModel extends _proxy.ProxyBase {
            _reactiveProps = {}; // any reactive prop.
            //TODO: Validate how to handle the properties
            properties = [];
            // properties of the object
            debounceTimeout;
            processing = false;
            processed = false;
            loaded = false;
            #ready = false;
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
            #isDraft = false;
            get isDraft() {
              return this.#isDraft;
            }
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
                  return JSON.stringify(properties[prop]) === JSON.stringify(this.#initialValues[prop]);
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
              this.defineReactiveProps(['fetching', 'fetched', 'processing', 'processed', 'loaded'], false);
              if (properties) {
                this.properties = properties;
                this.setInitialValues(props);
                this.defineReactiveProps(properties, {
                  ...props
                });
              }
            }
            setInitialValues(specs) {
              if (!specs) return this.#initialValues;
              const values = {};
              this.properties.forEach(property => {
                if (typeof property !== 'string') {
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
            defineReactiveProps(props, values) {
              for (let propKey of props) {
                /**
                 * Possibility to define a property as an object
                 */
                if (typeof propKey === 'object') {
                  const data = propKey;
                  propKey = data.name;
                  const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
                  let initialValue = values?.[propKey] ?? descriptor?.value;
                  if (typeof data.value !== 'function' && typeof data.value !== 'object') {
                    console.warn(`Invalid value type for  ${propKey}`);
                    continue;
                  }
                  const instance = new data.value(initialValue);
                  this.#propertyNames.add(propKey);
                  this.defineReactiveProp(propKey, instance, true);
                  continue;
                }
                this.#propertyNames.add(propKey);
                const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
                let initialValue = values?.[propKey] ?? descriptor?.value;
                this.defineReactiveProp(propKey, initialValue);
              }
            }
            reactiveProps(props) {
              this.defineReactiveProps(props);
            }
            getProperty(propKey) {
              return this._reactiveProps[propKey];
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
                const isObject = typeof properties[prop] === 'object';
                const isSameObject = isObject && this.isSameObject(properties[prop], this[prop]);
                if (this[prop] === properties[prop] || isSameObject) return;
                const descriptor = Object.getOwnPropertyDescriptor(this, prop);
                if (!descriptor?.set) return;
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
              const properties = this.properties;
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
        hash: 415922654,
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
        "from": "ReactiveProps",
        "name": "ReactiveProps"
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
        (require || prop === 'ReactiveProps') && _export("ReactiveProps", ReactiveProps = require ? require('./types/index').ReactiveProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfem9kIiwicmVxdWlyZSIsIl9wcm94eSIsIlJlYWN0aXZlTW9kZWwiLCJQcm94eUJhc2UiLCJfcmVhY3RpdmVQcm9wcyIsInByb3BlcnRpZXMiLCJkZWJvdW5jZVRpbWVvdXQiLCJwcm9jZXNzaW5nIiwicHJvY2Vzc2VkIiwibG9hZGVkIiwicmVhZHkiLCJwcm9wZXJ0eU5hbWVzIiwiU2V0IiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJzY2hlbWEiLCJpbml0aWFsVmFsdWVzIiwiaXNEcmFmdCIsInVucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc1VucHVibGlzaGVkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJzZXRJbml0aWFsVmFsdWVzIiwic3BlY3MiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInNldCIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByb3BLZXkiLCJpbml0aWFsVmFsdWUiLCJtb2RlbCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwibmV3VmFsIiwiaW5zdGFuY2UiLCJ0cmlnZ2VyIiwicHJldmlvdXMiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZGF0YSIsIm5hbWUiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY29uc29sZSIsIndhcm4iLCJhZGQiLCJyZWFjdGl2ZVByb3BzIiwiZ2V0UHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsInZhbGlkYXRlUHJvcGVydHkiLCJ2YWxpZCIsImVycm9yIiwic2hhcGUiLCJab2RFcnJvciIsInBhdGgiLCJtZXNzYWdlIiwiY29kZSIsInByb3BTY2hlbWEiLCJyZXN1bHQiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiaXNTYW1lT2JqZWN0IiwiYSIsImIiLCJ2YWxpZGF0ZSIsImVycm9ycyIsIm9uVmFsaWRhdGUiLCJpbmNsdWRlcyIsInRyYWNlIiwidmFsaWRhdGVkIiwidXBkYXRlZCIsIm9uU2V0IiwiaGFzIiwiaXNPYmplY3QiLCJsb29wIiwiU3RyaW5nIiwiZXZlbnQiLCJwYXJhbXMiLCJyZXZlcnQiLCJzYXZlQ2hhbmdlcyIsImV4cG9ydHMiLCJfZXZlbnRzIiwiRXZlbnRzIiwicHJveHkiLCJQcm94eSIsInRhcmdldCIsInJlY2VpdmVyIiwiYmluZCIsIlJlZmxlY3QiLCJFcnJvciIsImFzc2lnbiJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9wcm94eS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLElBQUEsR0FBQUMsT0FBQTtVQVNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUlPO1VBQVcsTUFBT0UsYUFBaUIsU0FBUUQsTUFBQSxDQUFBRSxTQUFZO1lBQzdEQyxjQUFjLEdBQXdCLEVBQUUsQ0FBQyxDQUFDO1lBRTFDO1lBQ1VDLFVBQVUsR0FBK0IsRUFBRTtZQUNyRDtZQUNBQyxlQUFlO1lBQ2ZDLFVBQVUsR0FBWSxLQUFLO1lBQzNCQyxTQUFTLEdBQVksS0FBSztZQUUxQkMsTUFBTSxHQUFZLEtBQUs7WUFDdkIsQ0FBQUMsS0FBTSxHQUFZLEtBQUs7WUFFdkIsQ0FBQUMsYUFBYyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUMxQixJQUFJRixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlBLEtBQUtBLENBQUNHLEtBQWM7Y0FDdkIsSUFBSSxDQUFDLENBQUFILEtBQU0sR0FBR0csS0FBSztjQUNuQixJQUFJLENBQUNDLFlBQVksQ0FBQyxPQUFPLENBQUM7Y0FDMUIsSUFBSSxDQUFDQSxZQUFZLENBQUMsUUFBUSxDQUFD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