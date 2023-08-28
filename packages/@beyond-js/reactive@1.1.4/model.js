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
        hash: 2666183135,
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
            constructor() {
              super();
              this.reactiveProps(['fetching', 'fetched', 'processing', 'processed', 'loaded', 'ready']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztjQUNERSxVQUFVLEVBQUUsSUFBSTtjQUNoQkMsWUFBWSxFQUFFO2FBQ2QsQ0FBQztVQUNIIiwibmFtZXMiOlsiUmVhY3RpdmVNb2RlbCIsIkV2ZW50cyIsInNjaGVtYSIsImlzUmVhY3RpdmUiLCJmZXRjaGluZyIsImZldGNoZWQiLCJwcm9jZXNzaW5nIiwicmVhZHkiLCJwcm9jZXNzZWQiLCJsb2NhbGRiIiwicHJvcGVydGllcyIsImxvYWRlZCIsImlzVW5wdWJsaXNoZWQiLCJnZXRQcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJwcm9wIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdGlhbFZhbHVlcyIsInZhbHVlcyIsInNldCIsInByb3BzIiwicHJvcEtleSIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByaXZhdGVQcm9wS2V5IiwiU3RyaW5nIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIm5ld1ZhbCIsInRyaWdnZXJFdmVudCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJldmVudCIsInRyaWdnZXIiLCJ1cGRhdGVkIiwiZm9yRWFjaCIsInNhbWVPYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsIkVycm9yIiwic2tlbGV0b24iLCJwcm9wZXJ0eSIsImNvbGxlY3Rpb24iLCJ0eXBlIiwibmFtZSIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImV4cG9ydHMiLCJfZGVmaW5lUmVhY3RpdmVQcm9wIiwidGFyZ2V0IiwidGFyZ2V0UHJvdG8iLCJwcm90b3R5cGUiLCJzZXRSZWFjdGl2ZVByb3AiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImluZGV4LnRzIiwicHJvcGVydHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==