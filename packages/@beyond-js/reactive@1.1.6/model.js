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
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.6"], ["@aimpact/ailearn-app", "0.0.18"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwicmVxdWlyZSIsIlJlYWN0aXZlTW9kZWwiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInJlYWR5IiwicHJvY2Vzc2VkIiwicHJvcGVydGllcyIsImxvYWRlZCIsImluaXRpYWxWYWx1ZXMiLCJpc1VucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsInZhbHVlcyIsInNldCIsInByb3BzIiwicHJvcEtleSIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByaXZhdGVQcm9wS2V5IiwiU3RyaW5nIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIm5ld1ZhbCIsInRyaWdnZXJFdmVudCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJldmVudCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwidHJpZ2dlciIsInVwZGF0ZWQiLCJmb3JFYWNoIiwic2FtZU9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiRXJyb3IiLCJza2VsZXRvbiIsInByb3BlcnR5IiwiY29sbGVjdGlvbiIsInR5cGUiLCJuYW1lIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiZXhwb3J0cyIsIl9kZWZpbmVSZWFjdGl2ZVByb3AiLCJ0YXJnZXQiLCJ0YXJnZXRQcm90byIsInByb3RvdHlwZSIsInNldFJlYWN0aXZlUHJvcCJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9yZWFjdGl2ZS1wcm9wcy50cyIsIi9yZWFjdGl2ZS1wdWJsaWMtcHJvcHMudHMiLCIvcHJvcGVydHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGws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