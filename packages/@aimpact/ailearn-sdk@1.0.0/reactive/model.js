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
        hash: 4285427674,
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
              // if (['Draft'].includes(this.constructor.name)) {
              // 	console.trace(200, this.constructor.name, properties);
              // }
              const keys = Object.keys(properties);
              // const keys = [...this.#propertyNames.values()];
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
            revert() {
              this.set(this.initialValues);
            }
            save() {
              this.#initialValues = this.getProperties();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfem9kIiwicmVxdWlyZSIsIl9wcm94eSIsIlJlYWN0aXZlTW9kZWwiLCJQcm94eUJhc2UiLCJfcmVhY3RpdmVQcm9wcyIsInByb3BlcnRpZXMiLCJkZWJvdW5jZVRpbWVvdXQiLCJwcm9jZXNzaW5nIiwicHJvY2Vzc2VkIiwibG9hZGVkIiwicmVhZHkiLCJwcm9wZXJ0eU5hbWVzIiwiU2V0IiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJzY2hlbWEiLCJpbml0aWFsVmFsdWVzIiwidW5wdWJsaXNoZWQiLCJnZXRQcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJwcm9wIiwiaXNVbnB1Ymxpc2hlZCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwic2V0SW5pdGlhbFZhbHVlcyIsInNwZWNzIiwidmFsdWVzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJzZXQiLCJkZWZpbmVSZWFjdGl2ZVByb3AiLCJwcm9wS2V5IiwiaW5pdGlhbFZhbHVlIiwibW9kZWwiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIm5ld1ZhbCIsImluc3RhbmNlIiwidHJpZ2dlciIsInByZXZpb3VzIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImRhdGEiLCJuYW1lIiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNvbnNvbGUiLCJ3YXJuIiwiYWRkIiwicmVhY3RpdmVQcm9wcyIsImdldFByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJ2YWxpZGF0ZVByb3BlcnR5IiwidmFsaWQiLCJlcnJvciIsInNoYXBlIiwiWm9kRXJyb3IiLCJwYXRoIiwibWVzc2FnZSIsImNvZGUiLCJwcm9wU2NoZW1hIiwicmVzdWx0Iiwic2FmZVBhcnNlIiwic3VjY2VzcyIsImlzU2FtZU9iamVjdCIsImEiLCJiIiwiSlNPTiIsInN0cmluZ2lmeSIsInZhbGlkYXRlIiwiZXJyb3JzIiwib25WYWxpZGF0ZSIsImluY2x1ZGVzIiwidHJhY2UiLCJ2YWxpZGF0ZWQiLCJsZW5ndGgiLCJ1cGRhdGVkIiwib25TZXQiLCJoYXMiLCJpc09iamVjdCIsImxvb3AiLCJTdHJpbmciLCJldmVudCIsInBhcmFtcyIsInJldmVydCIsInNhdmUiLCJleHBvcnRzIiwiX2V2ZW50cyIsIkV2ZW50cyIsInByb3h5IiwiUHJveHkiLCJ0YXJnZXQiLCJyZWNlaXZlciIsImJpbmQiLCJSZWZsZWN0IiwiRXJyb3IiLCJhc3NpZ24iXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvcHJveHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxJQUFBLEdBQUFDLE9BQUE7VUFTQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFXLE1BQU9FLGFBQWlCLFNBQVFELE1BQUEsQ0FBQUUsU0FBWTtZQUM3REMsY0FBYyxHQUF3QixFQUFFLENBQUMsQ0FBQztZQUUxQztZQUNVQyxVQUFVLEdBQVUsRUFBRTtZQUNoQztZQUNBQyxlQUFlO1lBQ2ZDLFVBQVUsR0FBWSxLQUFLO1lBQzNCQyxTQUFTLEdBQVksS0FBSztZQUUxQkMsTUFBTSxHQUFZLEtBQUs7WUFDdkIsQ0FBQUMsS0FBTSxHQUFZLEtBQUs7WUFFdkIsQ0FBQUMsYUFBYyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUMxQixJQUFJRixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlBLEtBQUtBLENBQUNHLEtBQWM7Y0FDdkIsSUFBSSxDQUFDLENBQUFILEtBQU0sR0FBR0csS0FBSztjQUNuQixJQUFJLENBQUNDLFlBQVksQ0FBQyxPQUFPLENBQUM7Y0FDMUIsSUFBSSxDQUFDQSxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzVCO1lBRVVDLE1BQU07WUFDaEIsQ0FBQUMsYUFBYyxH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