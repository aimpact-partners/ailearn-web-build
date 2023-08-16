System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/events@0.0.6/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, ReactiveModel, reactiveProps, __beyond_pkg, hmr;
  _export({
    ReactiveModel: void 0,
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
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.4"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.4/model"
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
        hash: 3956740744,
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
            localdb = false;
            properties;
            loaded = false;
            constructor() {
              super();
              this.reactiveProps(['fetching', 'fetched', 'processing', 'processed', 'loaded', 'ready']);
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
            triggerEvent = (event = 'change') => this.trigger(event);
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
                  if (descriptor?.set) {
                    // console.warn(`Property ${prop} is not settable`);
                    return;
                  }
                  // console.log(`Setting ${prop} to ${properties[prop]}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwicmVxdWlyZSIsIlJlYWN0aXZlTW9kZWwiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInJlYWR5IiwicHJvY2Vzc2VkIiwibG9jYWxkYiIsInByb3BlcnRpZXMiLCJsb2FkZWQiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJwcm9wcyIsInByb3BLZXkiLCJkZXNjcmlwdG9yIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3AiLCJwcml2YXRlUHJvcEtleSIsIlN0cmluZyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiaGFzT3duUHJvcGVydHkiLCJzZXQiLCJuZXdWYWwiLCJ0cmlnZ2VyRXZlbnQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZXZlbnQiLCJ0cmlnZ2VyIiwia2V5cyIsInVwZGF0ZWQiLCJmb3JFYWNoIiwicHJvcCIsInNhbWVPYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsIkVycm9yIiwiZ2V0UHJvcGVydGllcyIsInNrZWxldG9uIiwicHJvcGVydHkiLCJjb2xsZWN0aW9uIiwidHlwZSIsIm5hbWUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJleHBvcnRzIiwiX2RlZmluZVJlYWN0aXZlUHJvcCIsInRhcmdldCIsInRhcmdldFByb3RvIiwicHJvdG90eXBlIiwic2V0UmVhY3RpdmVQcm9wIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL3Byb3BlcnR5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUE4Qk8sV0FUUDs7Ozs7Ozs7VUFTaUIsTUFBZ0JD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