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
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.6"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.6/model"
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
        hash: 3215938792,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwicmVxdWlyZSIsIlJlYWN0aXZlTW9kZWwiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInJlYWR5IiwicHJvY2Vzc2VkIiwicHJvcGVydGllcyIsImxvYWRlZCIsImluaXRpYWxWYWx1ZXMiLCJpc1VucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsInZhbHVlcyIsInNldCIsInByb3BzIiwicHJvcEtleSIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByaXZhdGVQcm9wS2V5IiwiU3RyaW5nIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIm5ld1ZhbCIsInRyaWdnZXJFdmVudCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJldmVudCIsInRyaWdnZXIiLCJ1cGRhdGVkIiwiZm9yRWFjaCIsInNhbWVPYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsIkVycm9yIiwic2tlbGV0b24iLCJwcm9wZXJ0eSIsImNvbGxlY3Rpb24iLCJ0eXBlIiwibmFtZSIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImV4cG9ydHMiLCJfZGVmaW5lUmVhY3RpdmVQcm9wIiwidGFyZ2V0IiwidGFyZ2V0UHJvdG8iLCJwcm90b3R5cGUiLCJzZXRSZWFjdGl2ZVByb3AiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvcmVhY3RpdmUtcHJvcHMudHMiLCIvcmVhY3RpdmUtcHVibGljLXByb3BzLnRzIiwiL3Byb3BlcnR5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7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