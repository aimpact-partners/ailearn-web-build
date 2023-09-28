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
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.6"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 3012330650,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDYyxNQUFrQjtnQkFDckJ1QixNQUFNLENBQUNHLGVBQWUsQ0FBQ3RDLE9BQU8sRUFBRVksTUFBTSxDQUFDO2NBQ3hDLENBQUM7Y0FDREUsVUFBVSxFQUFFLElBQUk7Y0FDaEJDLFlBQVksRUFBRTthQUNkLENBQUM7VUFDSCIsIm5hbWVzIjpbIlJlYWN0aXZlTW9kZWwiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInJlYWR5IiwicHJvY2Vzc2VkIiwicHJvcGVydGllcyIsImxvYWRlZCIsImlzVW5wdWJsaXNoZWQiLCJnZXRQcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJwcm9wIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdGlhbFZhbHVlcyIsInZhbHVlcyIsInNldCIsInByb3BzIiwicHJvcEtleSIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByaXZhdGVQcm9wS2V5IiwiU3RyaW5nIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIm5ld1ZhbCIsInRyaWdnZXJFdmVudCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJldmVudCIsInRyaWdnZXIiLCJ1cGRhdGVkIiwiZm9yRWFjaCIsInNhbWVPYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsIkVycm9yIiwic2tlbGV0b24iLCJwcm9wZXJ0eSIsImNvbGxlY3Rpb24iLCJ0eXBlIiwibmFtZSIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImV4cG9ydHMiLCJfZGVmaW5lUmVhY3RpdmVQcm9wIiwidGFyZ2V0IiwidGFyZ2V0UHJvdG8iLCJwcm90b3R5cGUiLCJzZXRSZWFjdGl2ZVByb3AiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImluZGV4LnRzIiwicHJvcGVydHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==