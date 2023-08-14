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
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.2"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.2/model"
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
        hash: 365467157,
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
                  if (property.type === 'collection') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwicmVxdWlyZSIsIlJlYWN0aXZlTW9kZWwiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInJlYWR5IiwicHJvY2Vzc2VkIiwibG9jYWxkYiIsInByb3BlcnRpZXMiLCJsb2FkZWQiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJwcm9wcyIsInByb3BLZXkiLCJkZXNjcmlwdG9yIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3AiLCJwcml2YXRlUHJvcEtleSIsIlN0cmluZyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiaGFzT3duUHJvcGVydHkiLCJzZXQiLCJuZXdWYWwiLCJ0cmlnZ2VyRXZlbnQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZXZlbnQiLCJ0cmlnZ2VyIiwia2V5cyIsInVwZGF0ZWQiLCJmb3JFYWNoIiwicHJvcCIsInNhbWVPYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsIkVycm9yIiwiZ2V0UHJvcGVydGllcyIsInNrZWxldG9uIiwicHJvcGVydHkiLCJ0eXBlIiwibmFtZSIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImV4cG9ydHMiLCJfZGVmaW5lUmVhY3RpdmVQcm9wIiwidGFyZ2V0IiwidGFyZ2V0UHJvdG8iLCJwcm90b3R5cGUiLCJzZXRSZWFjdGl2ZVByb3AiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvcHJvcGVydHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtVQThCTyxXQVRQOzs7Ozs7OztVQVNpQixNQUFnQkMsYUFBaUIsU0FBUUYs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