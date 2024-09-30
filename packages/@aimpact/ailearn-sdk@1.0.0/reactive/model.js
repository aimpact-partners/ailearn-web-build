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
        hash: 3526720566,
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
            defineReactiveProp(propKey, initialValue) {
              this._reactiveProps[propKey] = initialValue;
              Object.defineProperty(this, propKey, {
                get: () => {
                  return this._reactiveProps[propKey];
                },
                set: newVal => {
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
              for (const propKey of props) {
                const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
                const initialValue = values?.[propKey] ?? descriptor?.value;
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
                const name = property;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfem9kIiwicmVxdWlyZSIsIl9wcm94eSIsIlJlYWN0aXZlTW9kZWwiLCJQcm94eUJhc2UiLCJfcmVhY3RpdmVQcm9wcyIsInByb3BlcnRpZXMiLCJkZWJvdW5jZVRpbWVvdXQiLCJwcm9jZXNzaW5nIiwicHJvY2Vzc2VkIiwibG9hZGVkIiwicmVhZHkiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsInNjaGVtYSIsImluaXRpYWxWYWx1ZXMiLCJ1bnB1Ymxpc2hlZCIsImdldFByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsInByb3AiLCJpc1VucHVibGlzaGVkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJzZXRJbml0aWFsVmFsdWVzIiwic3BlY3MiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInNldCIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByb3BLZXkiLCJpbml0aWFsVmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIm5ld1ZhbCIsInByZXZpb3VzIiwidHJpZ2dlciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicmVhY3RpdmVQcm9wcyIsImdldFByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJ2YWxpZGF0ZVByb3BlcnR5IiwidmFsaWQiLCJlcnJvciIsInNoYXBlIiwiWm9kRXJyb3IiLCJwYXRoIiwibWVzc2FnZSIsImNvZGUiLCJwcm9wU2NoZW1hIiwicmVzdWx0Iiwic2FmZVBhcnNlIiwic3VjY2VzcyIsImlzU2FtZU9iamVjdCIsImEiLCJiIiwiSlNPTiIsInN0cmluZ2lmeSIsInZhbGlkYXRlIiwiZXJyb3JzIiwib25WYWxpZGF0ZSIsImluY2x1ZGVzIiwiY29uc29sZSIsInRyYWNlIiwidmFsaWRhdGVkIiwibGVuZ3RoIiwid2FybiIsIm5hbWUiLCJ1cGRhdGVkIiwib25TZXQiLCJpc09iamVjdCIsImxvb3AiLCJTdHJpbmciLCJldmVudCIsInBhcmFtcyIsImV4cG9ydHMiLCJfZXZlbnRzIiwiRXZlbnRzIiwicHJveHkiLCJQcm94eSIsInRhcmdldCIsInJlY2VpdmVyIiwiYmluZCIsIlJlZmxlY3QiLCJFcnJvciIsImFzc2lnbiJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9wcm94eS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLElBQUEsR0FBQUMsT0FBQTtVQVNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVcsTUFBT0UsYUFBaUIsU0FBUUQsTUFBQSxDQUFBRSxTQUFZO1lBQzdEQyxjQUFjLEdBQXdCLEVBQUUsQ0FBQyxDQUFDO1lBRTFDO1lBQ1VDLFVBQVUsR0FBVSxFQUFFO1lBQ2hDO1lBQ0FDLGVBQWU7WUFDZkMsVUFBVSxHQUFZLEtBQUs7WUFDM0JDLFNBQVMsR0FBWSxLQUFLO1lBRTFCQyxNQUFNLEdBQVksS0FBSztZQUN2QixDQUFBQyxLQUFNLEdBQVksS0FBSztZQUN2QixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlBLEtBQUtBLENBQUNDLEtBQWM7Y0FDdkIsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR0MsS0FBSztjQUNuQixJQUFJLENBQUNDLFlBQVksQ0FBQyxPQUFPLENBQUM7Y0FDMUIsSUFBSSxDQUFDQSxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzVCO1lBRVVDLE1BQU07WUFDaEIsQ0FBQUMsYUFBYyxHQUF1QixFQUF3QjtZQUU3RCxJQUFJQSxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGFBQWM7WUFDM0I7WUFFQTs7O1lBR0EsSUFBSUMsV0FBV0EsQ0FBQTtjQUNkLE1BQU1WLFVB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