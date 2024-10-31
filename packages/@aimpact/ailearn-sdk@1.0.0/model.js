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
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.9"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/model"
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
        hash: 792066241,
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
            fetching = false;
            fetched = false;
            processing = false;
            processed = false;
            loaded = false;
            ready = false;
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
              console.log('initial values', specs);
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
              if (updated) this.triggerEvent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfem9kIiwicmVxdWlyZSIsIl9wcm94eSIsIlJlYWN0aXZlTW9kZWwiLCJQcm94eUJhc2UiLCJfcmVhY3RpdmVQcm9wcyIsInJlYWN0aXZlUHJvcHMiLCJwcm9wZXJ0aWVzIiwiZGVib3VuY2VUaW1lb3V0IiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInJlYWR5Iiwic2NoZW1hIiwiaW5pdGlhbFZhbHVlcyIsInVucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsImlzVW5wdWJsaXNoZWQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInNldEluaXRpYWxWYWx1ZXMiLCJzcGVjcyIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInNldCIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByb3BLZXkiLCJpbml0aWFsVmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIm5ld1ZhbCIsInByZXZpb3VzIiwidHJpZ2dlciIsInZhbHVlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5IiwidmFsaWRhdGVQcm9wZXJ0eSIsInZhbGlkIiwiZXJyb3IiLCJzaGFwZSIsIlpvZEVycm9yIiwicGF0aCIsIm1lc3NhZ2UiLCJjb2RlIiwicHJvcFNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJpc1NhbWVPYmplY3QiLCJhIiwiYiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2YWxpZGF0ZSIsImVycm9ycyIsIm9uVmFsaWRhdGUiLCJpbmNsdWRlcyIsInRyYWNlIiwidmFsaWRhdGVkIiwibGVuZ3RoIiwidXBkYXRlZCIsIm9uU2V0IiwibmFtZSIsImlzT2JqZWN0IiwidHJpZ2dlckV2ZW50IiwibG9vcCIsIlN0cmluZyIsImV2ZW50IiwicGFyYW1zIiwiZGVsYXkiLCJjbGVhclRpbWVvdXQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImV4cG9ydHMiLCJfZXZlbnRzIiwiRXZlbnRzIiwicHJveHkiLCJQcm94eSIsInRhcmdldCIsInJlY2VpdmVyIiwiYmluZCIsIlJlZmxlY3QiLCJFcnJvciIsImFzc2lnbiJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9wcm94eS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLElBQUEsR0FBQUMsT0FBQTtVQVNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVcsTUFBT0UsYUFBaUIsU0FBUUQsTUFBQSxDQUFBRSxTQUFZO1lBQzdEQyxjQUFjLEdBQXdCLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLElBQUlDLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUNELGNBQWM7WUFDM0I7WUFFVUUsVUFBVSxHQUFnQixFQUFFO1lBQ3RDO1lBQ0FDLGVBQWU7WUFDZkMsUUFBUSxHQUFZLEtBQUs7WUFDekJDLE9BQU8sR0FBWSxLQUFLO1lBQ3hCQyxVQUFVLEdBQVksS0FBSztZQUMzQkMsU0FBUyxHQUFZLEtBQUs7WUFDMUJDLE1BQU0sR0FBWSxLQUFLO1lBQ3ZCQyxLQUFLLEdBQVksS0FBSztZQUNaQyxNQUFNO1lBQ2hCLENBQUFDLGFBQWMsR0FBdUIsRUFBd0I7WUFDN0QsSUFBSUEsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzNCO1lBRUE7OztZQUdBLElBQUlDLFdBQVdBLENBQUE7Y0FDZCxNQUFNVixVQUFVLEdBQUcsSUFBSSxDQUFDVyxhQUFhLEVBQUUsSUFBSSxFQUFFO2NBQzdDLE9B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