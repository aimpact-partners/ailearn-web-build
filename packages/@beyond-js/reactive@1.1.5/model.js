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
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.5"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.5/model"
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
        hash: 2599758566,
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
            #initialValues = {};
            get isUnpublished() {
              const properties = this.getProperties();
              return Object.keys(properties).some(prop => {
                if (prop === 'id') return false;
                return properties[prop] !== this.#initialValues[prop];
              });
            }
            constructor(properties) {
              super();
              this.reactiveProps(['fetching', 'fetched', 'processing', 'processed', 'loaded', 'ready']);
              if (properties) this.initialValues(properties);
            }
            initialValues(values) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwicmVxdWlyZSIsIlJlYWN0aXZlTW9kZWwiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInJlYWR5IiwicHJvY2Vzc2VkIiwibG9jYWxkYiIsInByb3BlcnRpZXMiLCJsb2FkZWQiLCJpbml0aWFsVmFsdWVzIiwiaXNVbnB1Ymxpc2hlZCIsImdldFByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsInByb3AiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJ2YWx1ZXMiLCJzZXQiLCJwcm9wcyIsInByb3BLZXkiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3AiLCJwcml2YXRlUHJvcEtleSIsIlN0cmluZyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiaGFzT3duUHJvcGVydHkiLCJuZXdWYWwiLCJ0cmlnZ2VyRXZlbnQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZXZlbnQiLCJ0cmlnZ2VyIiwidXBkYXRlZCIsImZvckVhY2giLCJzYW1lT2JqZWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJFcnJvciIsInNrZWxldG9uIiwicHJvcGVydHkiLCJjb2xsZWN0aW9uIiwidHlwZSIsIm5hbWUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJleHBvcnRzIiwiX2RlZmluZVJlYWN0aXZlUHJvcCIsInRhcmdldCIsInRhcmdldFByb3RvIiwicHJvdG90eXBlIiwic2V0UmVhY3RpdmVQcm9wIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL3Byb3BlcnR5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFB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