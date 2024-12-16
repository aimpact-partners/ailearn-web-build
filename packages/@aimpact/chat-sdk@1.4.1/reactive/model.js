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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.2.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.1/reactive/model"
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
        hash: 1834191594,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfem9kIiwicmVxdWlyZSIsIl9wcm94eSIsIlJlYWN0aXZlTW9kZWwiLCJQcm94eUJhc2UiLCJfcmVhY3RpdmVQcm9wcyIsInByb3BlcnRpZXMiLCJkZWJvdW5jZVRpbWVvdXQiLCJwcm9jZXNzaW5nIiwicHJvY2Vzc2VkIiwibG9hZGVkIiwicmVhZHkiLCJwcm9wZXJ0eU5hbWVzIiwiU2V0IiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJzY2hlbWEiLCJpbml0aWFsVmFsdWVzIiwiaXNEcmFmdCIsInVucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsImlzVW5wdWJsaXNoZWQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInNldEluaXRpYWxWYWx1ZXMiLCJzcGVjcyIsInZhbHVlcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwic2V0IiwiZGVmaW5lUmVhY3RpdmVQcm9wIiwicHJvcEtleSIsImluaXRpYWxWYWx1ZSIsIm1vZGVsIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJuZXdWYWwiLCJpbnN0YW5jZSIsInRyaWdnZXIiLCJwcmV2aW91cyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJkYXRhIiwibmFtZSIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjb25zb2xlIiwid2FybiIsImFkZCIsInJlYWN0aXZlUHJvcHMiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5IiwidmFsaWRhdGVQcm9wZXJ0eSIsInZhbGlkIiwiZXJyb3IiLCJzaGFwZSIsIlpvZEVycm9yIiwicGF0aCIsIm1lc3NhZ2UiLCJjb2RlIiwicHJvcFNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJpc1NhbWVPYmplY3QiLCJhIiwiYiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2YWxpZGF0ZSIsImVycm9ycyIsIm9uVmFsaWRhdGUiLCJpbmNsdWRlcyIsInRyYWNlIiwidmFsaWRhdGVkIiwidXBkYXRlZCIsIm9uU2V0IiwiaGFzIiwiaXNPYmplY3QiLCJsb29wIiwiU3RyaW5nIiwiZXZlbnQiLCJwYXJhbXMiLCJyZXZlcnQiLCJzYXZlQ2hhbmdlcyIsImV4cG9ydHMiLCJfZXZlbnRzIiwiRXZlbnRzIiwicHJveHkiLCJQcm94eSIsInRhcmdldCIsInJlY2VpdmVyIiwiYmluZCIsIlJlZmxlY3QiLCJFcnJvciIsImFzc2lnbiJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9wcm94eS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLElBQUEsR0FBQUMsT0FBQTtVQVNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVcsTUFBT0UsYUFBaUIsU0FBUUQsTUFBQSxDQUFBRSxTQUFZO1lBQzdEQyxjQUFjLEdBQXdCLEVBQUUsQ0FBQyxDQUFDO1lBRTFDO1lBQ1VDLFVBQVUsR0FBVSxFQUFFO1lBQ2hDO1lBQ0FDLGVBQWU7WUFDZkMsVUFBVSxHQUFZLEtBQUs7WUFDM0JDLFNBQVMsR0FBWSxLQUFLO1lBRTFCQyxNQUFNLEdBQVksS0FBSztZQUN2QixDQUFBQyxLQUFNLEdBQVksS0FBSztZQUV2QixDQUFBQyxhQUFjLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQzFCLElBQUlGLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUEsS0FBS0EsQ0FBQ0csS0FBYztjQUN2QixJQUFJLENBQUMsQ0FBQUgsS0FBTSxHQUFHRyxLQUFLO2NBQ25CLElBQUksQ0FBQ0MsWUFBWSxDQUFDLE9BQU8sQ0FBQztjQUMxQixJQUFJLENBQUNBLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDNUI7WUFFVUMsTUFBTTtZ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