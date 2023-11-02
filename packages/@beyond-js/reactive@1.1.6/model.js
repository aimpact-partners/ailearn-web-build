System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/events@0.0.6/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, ReactiveModel, IReactiveProperties, ReactiveModelPublic, reactiveProps, __beyond_pkg, hmr;
  _export({
    ReactiveModel: void 0,
    IReactiveProperties: void 0,
    ReactiveModelPublic: void 0,
    reactiveProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsEvents006Events) {
      dependency_1 = _beyondJsEvents006Events;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.2.0/model"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/events/events', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3309471061,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactiveModel = void 0;
          var _events = require("@beyond-js/events/events");
          /*bundle*/ /**
                      * The `ReactiveModel` class is a subclass of the `Events` class that provides a simple way to create
                      * reactive properties that can trigger events when they change. It also provides methods for setting
                      * and getting property values.
                      *
                      * @template T - The type of the properties that can be defined in the model.
                      * @extends Events
                      */
          class ReactiveModel extends _events.Events {
            schema;
            #isReactive = true;
            get isReactive() {
              return this.#isReactive;
            }
            fetching;
            fetched = false;
            processing = false;
            ready = false;
            processed = false;
            properties;
            loaded = false;
            #initialValues = {};
            get isUnpublished() {
              const properties = this.getProperties();
              return Object.keys(properties).some(prop => {
                if (prop === 'id' || typeof prop === 'object') return false;
                return properties[prop] !== this.#initialValues[prop];
              });
            }
            constructor(properties) {
              super();
              this.reactiveProps(['fetching', 'fetched', 'processing', 'processed', 'loaded', 'ready']);
              if (properties) this.initialValues(properties);
            }
            initialValues(values) {
              if (!values) return this.#initialValues;
              this.set(values);
              this.#initialValues = values;
            }
            reactiveProps(props) {
              for (const propKey of props) {
                const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
                const initialValue = descriptor ? descriptor.value : undefined;
                this.defineReactiveProp(propKey, initialValue);
              }
            }
            defineReactiveProp(propKey, initialValue) {
              const privatePropKey = `__${String(propKey)}`;
              Object.defineProperty(this, propKey, {
                get() {
                  if (!this.hasOwnProperty(privatePropKey)) {
                    this[privatePropKey] = initialValue;
                  }
                  return this[privatePropKey];
                },
                set(newVal) {
                  if (newVal === this[privatePropKey]) return;
                  this[privatePropKey] = newVal;
                  this.triggerEvent();
                },
                enumerable: true,
                configurable: true
              });
            }
            /**
             * The `triggerEvent` method triggers a change event on the model, which can be used to notify
             * subscribers of changes to the model's properties.
             *
             * @param {string} event - The name of the event to trigger.
             * @returns {void}
             */
            triggerEvent = (event = 'change') => {
              globalThis.setTimeout(() => {
                this.trigger(event);
              }, 0);
            };
            /**
             * The `set` method sets one or more properties on the model.
             *
             * @param {keyof ReactiveModelPublic<T>} property - The name of the property to set.
             * @param {*} value - The value to set the property to.
             * @returns {void}
             */
            set(properties) {
              let props = Object.keys(properties);
              let updated = false;
              try {
                Object.keys(properties).forEach(prop => {
                  const sameObject = typeof properties[prop] === 'object' && JSON.stringify(properties[prop]) === JSON.stringify(this[prop]);
                  if (this[prop] === properties[prop] || sameObject) return;
                  const descriptor = Object.getOwnPropertyDescriptor(this, prop);
                  if (descriptor?.set) return;
                  this[prop] = properties[prop];
                  updated = true;
                });
              } catch (e) {
                throw new Error(`Error setting properties: ${e}`);
              } finally {
                if (updated) this.triggerEvent();
              }
            }
            getProperties() {
              const props = {};
              const properties = this.properties || this.skeleton;
              properties.forEach(property => {
                if (typeof property === 'object') {
                  if (!property.hasOwnProperty('name')) return;
                  const collection = property;
                  if (collection.type === 'collection') {
                    props[property.name] = this[property.name].items.map(item => item.getProperties());
                    return;
                  }
                  props[property.name] = this[property.name];
                }
                let name = property;
                props[name] = this[name];
              });
              return props;
            }
          }
          exports.ReactiveModel = ReactiveModel;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./interfaces/reactive-props
      *******************************************/

      ims.set('./interfaces/reactive-props', {
        hash: 2165090548,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************************
      INTERNAL MODULE: ./interfaces/reactive-public-props
      **************************************************/

      ims.set('./interfaces/reactive-public-props', {
        hash: 1896226094,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************
      INTERNAL MODULE: ./property
      **************************/

      ims.set('./property', {
        hash: 3124326805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defineReactiveProp = defineReactiveProp;
          exports.reactiveProps = reactiveProps;
          function _defineReactiveProp(target, propKey, initialValue) {
            const privatePropKey = `__${String(propKey)}`;
            Object.defineProperty(target, propKey, {
              get() {
                if (!target.hasOwnProperty(privatePropKey)) {
                  target[privatePropKey] = initialValue;
                }
                return target[privatePropKey];
              },
              set(newVal) {
                if (newVal === target[privatePropKey]) return;
                target[privatePropKey] = newVal;
                target.triggerEvent();
              },
              enumerable: true,
              configurable: true
            });
          }
          /*bundle */
          function reactiveProps(props) {
            return function (target) {
              const targetProto = "prototype" in target ? target.prototype : target;
              for (const propKey of props) {
                const descriptor = Object.getOwnPropertyDescriptor(targetProto, propKey);
                const initialValue = descriptor ? descriptor.value : undefined;
                defineReactiveProp(targetProto, propKey, initialValue);
              }
            };
          }
          function defineReactiveProp(target, propKey, initialValue) {
            const privatePropKey = `__${String(propKey)}`;
            Object.defineProperty(target, propKey, {
              get() {
                if (!target.hasOwnProperty(privatePropKey)) {
                  target[privatePropKey] = initialValue;
                }
                return target[privatePropKey];
              },
              set(newVal) {
                target.setReactiveProp(propKey, newVal);
              },
              enumerable: true,
              configurable: true
            });
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ReactiveModel",
        "name": "ReactiveModel"
      }, {
        "im": "./interfaces/reactive-props",
        "from": "IReactiveProperties",
        "name": "IReactiveProperties"
      }, {
        "im": "./interfaces/reactive-public-props",
        "from": "ReactiveModelPublic",
        "name": "ReactiveModelPublic"
      }, {
        "im": "./property",
        "from": "reactiveProps",
        "name": "reactiveProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ReactiveModel') && _export("ReactiveModel", ReactiveModel = require ? require('./index').ReactiveModel : value);
        (require || prop === 'IReactiveProperties') && _export("IReactiveProperties", IReactiveProperties = require ? require('./interfaces/reactive-props').IReactiveProperties : value);
        (require || prop === 'ReactiveModelPublic') && _export("ReactiveModelPublic", ReactiveModelPublic = require ? require('./interfaces/reactive-public-props').ReactiveModelPublic : value);
        (require || prop === 'reactiveProps') && _export("reactiveProps", reactiveProps = require ? require('./property').reactiveProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtjQUN0Q1UsR0FBRztnQkFDRixJQUFJLENBQUMyQixNQUFNLENBQUMxQixjQUFjLENBQUNKLGNBQWMsQ0FBQyxFQUFFO2tCQUMzQzhCLE1BQU0sQ0FBQzlCLGNBQWMsQ0FBQyxHQUFHSixZQUFZOztnQkFFdEMsT0FBT2tDLE1BQU0sQ0FBQzlCLGNBQWMsQ0FBQztjQUM5QixDQUFDO2NBQ0RULEdBQUcsQ0FBQ2MsTUFBa0I7Z0JBQ3JCeUIsTUFBTSxDQUFDRyxlQUFlLENBQUN4QyxPQUFPLEVBQUVZLE1BQU0sQ0FBQztjQUN4QyxDQUFDO2NBQ0RFLFVBQVUsRUFBRSxJQUFJO2NBQ2hCQyxZQUFZLEVBQUU7YUFDZCxDQUFDO1VBQ0giLCJuYW1lcyI6WyJSZWFjdGl2ZU1vZGVsIiwiRXZlbnRzIiwic2NoZW1hIiwiaXNSZWFjdGl2ZSIsImZldGNoaW5nIiwiZmV0Y2hlZCIsInByb2Nlc3NpbmciLCJyZWFkeSIsInByb2Nlc3NlZCIsInByb3BlcnRpZXMiLCJsb2FkZWQiLCJpc1VucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsImluaXRpYWxWYWx1ZXMiLCJ2YWx1ZXMiLCJzZXQiLCJwcm9wcyIsInByb3BLZXkiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3AiLCJwcml2YXRlUHJvcEtleSIsIlN0cmluZyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiaGFzT3duUHJvcGVydHkiLCJuZXdWYWwiLCJ0cmlnZ2VyRXZlbnQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZXZlbnQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInRyaWdnZXIiLCJ1cGRhdGVkIiwiZm9yRWFjaCIsInNhbWVPYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsIkVycm9yIiwic2tlbGV0b24iLCJwcm9wZXJ0eSIsImNvbGxlY3Rpb24iLCJ0eXBlIiwibmFtZSIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImV4cG9ydHMiLCJfZGVmaW5lUmVhY3RpdmVQcm9wIiwidGFyZ2V0IiwidGFyZ2V0UHJvdG8iLCJwcm90b3R5cGUiLCJzZXRSZWFjdGl2ZVByb3AiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImluZGV4LnRzIiwiaW50ZXJmYWNlcy9yZWFjdGl2ZS1wcm9wcy50cyIsImludGVyZmFjZXMvcmVhY3RpdmUtcHVibGljLXByb3BzLnRzIiwicHJvcGVydHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=