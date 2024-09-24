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
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.9"]]);
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
        hash: 2330684898,
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
            get reactiveProps() {
              return this._reactiveProps;
            }
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
              const keys = Object.keys(properties);
              let updated = false;
              const errors = {};
              const onSet = prop => {
                if (!this.properties || !this.properties.includes(prop)) {
                  console.trace(`is not a property`, prop, this.constructor.name);
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
              let {
                delay,
                ...specs
              } = params;
              delay = delay ?? 100;
              if (this.debounceTimeout !== null) clearTimeout(this.debounceTimeout);
              this.debounceTimeout = globalThis.setTimeout(() => {
                if (!event) {
                  console.warn('triggerEvent: event is required', event);
                  this.debounceTimeout = null;
                  return;
                }
                this.trigger(event, specs);
                this.debounceTimeout = null;
              }, delay);
            };
          }
          exports.ReactiveModel = ReactiveModel;
        }
      });

      /***********************
      INTERNAL MODULE: ./proxy
      ***********************/

      ims.set('./proxy', {
        hash: 3546518589,
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
        hash: 2839167194,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfem9kIiwicmVxdWlyZSIsIl9wcm94eSIsIlJlYWN0aXZlTW9kZWwiLCJQcm94eUJhc2UiLCJfcmVhY3RpdmVQcm9wcyIsInJlYWN0aXZlUHJvcHMiLCJwcm9wZXJ0aWVzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInJlYWR5IiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJzY2hlbWEiLCJpbml0aWFsVmFsdWVzIiwidW5wdWJsaXNoZWQiLCJnZXRQcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJwcm9wIiwiaXNVbnB1Ymxpc2hlZCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwic2V0SW5pdGlhbFZhbHVlcyIsInNwZWNzIiwidmFsdWVzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJzZXQiLCJkZWZpbmVSZWFjdGl2ZVByb3AiLCJwcm9wS2V5IiwiaW5pdGlhbFZhbHVlIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJuZXdWYWwiLCJwcmV2aW91cyIsInRyaWdnZXIiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldFByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJ2YWxpZGF0ZVByb3BlcnR5IiwidmFsaWQiLCJlcnJvciIsInNoYXBlIiwiWm9kRXJyb3IiLCJwYXRoIiwibWVzc2FnZSIsImNvZGUiLCJwcm9wU2NoZW1hIiwicmVzdWx0Iiwic2FmZVBhcnNlIiwic3VjY2VzcyIsImlzU2FtZU9iamVjdCIsImEiLCJiIiwiSlNPTiIsInN0cmluZ2lmeSIsInZhbGlkYXRlIiwiZXJyb3JzIiwib25WYWxpZGF0ZSIsImluY2x1ZGVzIiwiY29uc29sZSIsInRyYWNlIiwidmFsaWRhdGVkIiwibGVuZ3RoIiwidXBkYXRlZCIsIm9uU2V0IiwibmFtZSIsImlzT2JqZWN0IiwibG9vcCIsIlN0cmluZyIsImV2ZW50IiwicGFyYW1zIiwiZGVsYXkiLCJjbGVhclRpbWVvdXQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsIndhcm4iLCJleHBvcnRzIiwiX2V2ZW50cyIsIkV2ZW50cyIsInByb3h5IiwiUHJveHkiLCJ0YXJnZXQiLCJyZWNlaXZlciIsImJpbmQiLCJSZWZsZWN0IiwiRXJyb3IiLCJhc3NpZ24iXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvcHJveHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxJQUFBLEdBQUFDLE9BQUE7VUFTQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFXLE1BQU9FLGFBQWlCLFNBQVFELE1BQUEsQ0FBQUUsU0FBWTtZQUM3REMsY0FBYyxHQUF3QixFQUFFLENBQUMsQ0FBQztZQUMxQyxJQUFJQyxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDRCxjQUFjO1lBQzNCO1lBRVVFLFVBQVUsR0FBZ0IsRUFBRTtZQUN0QztZQUNBQyxlQUFlO1lBQ2ZDLFVBQVUsR0FBWSxLQUFLO1lBQzNCQyxTQUFTLEdBQVksS0FBSztZQUMxQkMsTUFBTSxHQUFZLEtBQUs7WUFDdkIsQ0FBQUMsS0FBTSxHQUFZLEtBQUs7WUFDdkIsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJQSxLQUFLQSxDQUFDQyxLQUFjO2NBQ3ZCLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUdDLEtBQUs7Y0FDbkIsSUFBSSxDQUFDQyxZQUFZLENBQUMsT0FBTyxDQUFDO2NBQzFCLElBQUksQ0FBQ0EsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM1QjtZQUVVQyxNQUFNO1lBQ2hCLENBQUFDLGFBQWMsR0FBdUIsRUFBd0I7WUFF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