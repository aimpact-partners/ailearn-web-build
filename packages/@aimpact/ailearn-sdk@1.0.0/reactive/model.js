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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/reactive/model"
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
        hash: 3359876323,
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
                if (prop === 'id' || typeof properties[prop] === 'object') return false;
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
            save() {
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
        hash: 3999328397,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfem9kIiwicmVxdWlyZSIsIl9wcm94eSIsIlJlYWN0aXZlTW9kZWwiLCJQcm94eUJhc2UiLCJfcmVhY3RpdmVQcm9wcyIsInByb3BlcnRpZXMiLCJkZWJvdW5jZVRpbWVvdXQiLCJwcm9jZXNzaW5nIiwicHJvY2Vzc2VkIiwibG9hZGVkIiwicmVhZHkiLCJwcm9wZXJ0eU5hbWVzIiwiU2V0IiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJzY2hlbWEiLCJpbml0aWFsVmFsdWVzIiwiaXNEcmFmdCIsInVucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsImlzVW5wdWJsaXNoZWQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInNldEluaXRpYWxWYWx1ZXMiLCJzcGVjcyIsInZhbHVlcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwic2V0IiwiZGVmaW5lUmVhY3RpdmVQcm9wIiwicHJvcEtleSIsImluaXRpYWxWYWx1ZSIsIm1vZGVsIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJuZXdWYWwiLCJpbnN0YW5jZSIsInRyaWdnZXIiLCJwcmV2aW91cyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJkYXRhIiwibmFtZSIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjb25zb2xlIiwid2FybiIsImFkZCIsInJlYWN0aXZlUHJvcHMiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5IiwidmFsaWRhdGVQcm9wZXJ0eSIsInZhbGlkIiwiZXJyb3IiLCJzaGFwZSIsIlpvZEVycm9yIiwicGF0aCIsIm1lc3NhZ2UiLCJjb2RlIiwicHJvcFNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJpc1NhbWVPYmplY3QiLCJhIiwiYiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2YWxpZGF0ZSIsImVycm9ycyIsIm9uVmFsaWRhdGUiLCJpbmNsdWRlcyIsInRyYWNlIiwidmFsaWRhdGVkIiwidXBkYXRlZCIsIm9uU2V0IiwiaGFzIiwiaXNPYmplY3QiLCJsb29wIiwiU3RyaW5nIiwiZXZlbnQiLCJwYXJhbXMiLCJyZXZlcnQiLCJzYXZlIiwiZXhwb3J0cyIsIl9ldmVudHMiLCJFdmVudHMiLCJwcm94eSIsIlByb3h5IiwidGFyZ2V0IiwicmVjZWl2ZXIiLCJiaW5kIiwiUmVmbGVjdCIsIkVycm9yIiwiYXNzaWduIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL3Byb3h5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsSUFBQSxHQUFBQyxPQUFBO1VBU0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVyxNQUFPRSxhQUFpQixTQUFRRCxNQUFBLENBQUFFLFNBQVk7WUFDN0RDLGNBQWMsR0FBd0IsRUFBRSxDQUFDLENBQUM7WUFFMUM7WUFDVUMsVUFBVSxHQUFVLEVBQUU7WUFDaEM7WUFDQUMsZUFBZTtZQUNmQyxVQUFVLEdBQVksS0FBSztZQUMzQkMsU0FBUyxHQUFZLEtBQUs7WUFFMUJDLE1BQU0sR0FBWSxLQUFLO1lBQ3ZCLENBQUFDLEtBQU0sR0FBWSxLQUFLO1lBRXZCLENBQUFDLGFBQWMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDMUIsSUFBSUYsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJQSxLQUFLQSxDQUFDRyxLQUFjO2NBQ3ZCLElBQUksQ0FBQyxDQUFBSCxLQUFNLEdBQUdHLEtBQUs7Y0FDbkIsSUFBSSxDQUFDQyxZQUFZLENBQUMsT0FBTyxDQUFDO2NBQzFCLElBQUksQ0FBQ0EsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM1QjtZQUVVQyxNQUFNO1lBQ2hCLENB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