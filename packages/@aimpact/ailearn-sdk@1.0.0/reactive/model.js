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
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
        hash: 2710117274,
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
                  const instance = new data.object(initialValue);
                  this.defineReactiveProp(propKey, instance, true);
                  return;
                }
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
                console.warn('you are trying to set an empty object', this.constructor.name);
                return {
                  updated: false
                };
              }
              const keys = Object.keys(properties);
              let updated = false;
              const errors = {};
              const onSet = prop => {
                if (!this.properties || !this.properties.includes(prop)) {
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
              if (updated) this.triggerEvent('change');
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
              // let { delay, ...specs } = params;
              // delay = delay ?? 100;
              // if (!event || typeof event !== 'string') {
              // 	console.warn('triggerEvent: event is required', event);
              // 	return;
              // }
              // if (this.debounceTimeout !== null) clearTimeout(this.debounceTimeout);
              // this.debounceTimeout = globalThis.setTimeout(() => {
              // 	if (!event) {
              // 		console.warn('triggerEvent: event is required', event);
              // 		this.debounceTimeout = null;
              // 		return;
              // 	}
              // 	this.trigger(event, specs);
              // 	this.debounceTimeout = null;
              // }, delay);
              this.trigger(event);
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfem9kIiwicmVxdWlyZSIsIl9wcm94eSIsIlJlYWN0aXZlTW9kZWwiLCJQcm94eUJhc2UiLCJfcmVhY3RpdmVQcm9wcyIsInByb3BlcnRpZXMiLCJkZWJvdW5jZVRpbWVvdXQiLCJwcm9jZXNzaW5nIiwicHJvY2Vzc2VkIiwibG9hZGVkIiwicmVhZHkiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsInNjaGVtYSIsImluaXRpYWxWYWx1ZXMiLCJ1bnB1Ymxpc2hlZCIsImdldFByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsInByb3AiLCJpc1VucHVibGlzaGVkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJzZXRJbml0aWFsVmFsdWVzIiwic3BlY3MiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInNldCIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByb3BLZXkiLCJpbml0aWFsVmFsdWUiLCJtb2RlbCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwibmV3VmFsIiwiaW5zdGFuY2UiLCJ0cmlnZ2VyIiwicHJldmlvdXMiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZGF0YSIsIm5hbWUiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwib2JqZWN0IiwicmVhY3RpdmVQcm9wcyIsImdldFByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJ2YWxpZGF0ZVByb3BlcnR5IiwidmFsaWQiLCJlcnJvciIsInNoYXBlIiwiWm9kRXJyb3IiLCJwYXRoIiwibWVzc2FnZSIsImNvZGUiLCJwcm9wU2NoZW1hIiwicmVzdWx0Iiwic2FmZVBhcnNlIiwic3VjY2VzcyIsImlzU2FtZU9iamVjdCIsImEiLCJiIiwiSlNPTiIsInN0cmluZ2lmeSIsInZhbGlkYXRlIiwiZXJyb3JzIiwib25WYWxpZGF0ZSIsImluY2x1ZGVzIiwiY29uc29sZSIsInRyYWNlIiwidmFsaWRhdGVkIiwibGVuZ3RoIiwid2FybiIsInVwZGF0ZWQiLCJvblNldCIsImlzT2JqZWN0IiwibG9vcCIsIlN0cmluZyIsImV2ZW50IiwicGFyYW1zIiwiZXhwb3J0cyIsIl9ldmVudHMiLCJFdmVudHMiLCJwcm94eSIsIlByb3h5IiwidGFyZ2V0IiwicmVjZWl2ZXIiLCJiaW5kIiwiUmVmbGVjdCIsIkVycm9yIiwiYXNzaWduIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL3Byb3h5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsSUFBQSxHQUFBQyxPQUFBO1VBU0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVyxNQUFPRSxhQUFpQixTQUFRRCxNQUFBLENBQUFFLFNBQVk7WUFDN0RDLGNBQWMsR0FBd0IsRUFBRSxDQUFDLENBQUM7WUFFMUM7WUFDVUMsVUFBVSxHQUFVLEVBQUU7WUFDaEM7WUFDQUMsZUFBZTtZQUNmQyxVQUFVLEdBQVksS0FBSztZQUMzQkMsU0FBUyxHQUFZLEtBQUs7WUFFMUJDLE1BQU0sR0FBWSxLQUFLO1lBQ3ZCLENBQUFDLEtBQU0sR0FBWSxLQUFLO1lBQ3ZCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUEsS0FBS0EsQ0FBQ0MsS0FBYztjQUN2QixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHQyxLQUFLO2NBQ25CLElBQUksQ0FBQ0MsWUFBWSxDQUFDLE9BQU8sQ0FBQztjQUMxQixJQUFJLENBQUNBLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDNUI7WUFFVUMsTUFBTTtZQUNoQixDQUFBQyxhQUFjLEdBQXVCLEVBQXdCO1lBRTdELElBQUlBLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsYUFBYztZQUMzQjtZQUVBOzs7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