System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, ReactiveModel, IReactiveConstructorSpecs, IReactiveProperties, ReactiveModelPublic, reactiveProps, __beyond_pkg, hmr;
  _export({
    ReactiveModel: void 0,
    IReactiveConstructorSpecs: void 0,
    IReactiveProperties: void 0,
    ReactiveModelPublic: void 0,
    reactiveProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsEvents007Events) {
      dependency_1 = _beyondJsEvents007Events;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["dexie", "3.2.3"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.11"], ["@aimpact/ailearn-app", "0.0.31"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.11/model"
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
        hash: 2556959846,
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
            constructor(specs = {}) {
              super();
              this.reactiveProps(['fetching', 'fetched', 'processing', 'processed', 'loaded', 'ready']);
              if (specs.properties && Array.isArray(specs.properties)) {
                this.properties = specs.properties;
              }
              if (specs) this.initialValues(specs);
            }
            initialValues(values) {
              if (!values) return this.#initialValues;
              let data = {
                ...values
              };
              delete data.properties;
              this.#set(data);
              this.#initialValues = data;
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
            #set(properties) {
              let updated = false;
              try {
                Object.keys(properties).forEach(prop => {
                  if (!this.properties || !this.properties.includes(prop)) return;
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
            set(properties) {
              this.#set(properties);
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

      /*******************************************************
      INTERNAL MODULE: ./interfaces/reactive-constructor-specs
      *******************************************************/

      ims.set('./interfaces/reactive-constructor-specs', {
        hash: 383762538,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
        "im": "./interfaces/reactive-constructor-specs",
        "from": "IReactiveConstructorSpecs",
        "name": "IReactiveConstructorSpecs"
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
        (require || prop === 'IReactiveConstructorSpecs') && _export("IReactiveConstructorSpecs", IReactiveConstructorSpecs = require ? require('./interfaces/reactive-constructor-specs').IReactiveConstructorSpecs : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwicmVxdWlyZSIsIlJlYWN0aXZlTW9kZWwiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInJlYWR5IiwicHJvY2Vzc2VkIiwicHJvcGVydGllcyIsImxvYWRlZCIsImluaXRpYWxWYWx1ZXMiLCJpc1VucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsImNvbnN0cnVjdG9yIiwic3BlY3MiLCJyZWFjdGl2ZVByb3BzIiwiQXJyYXkiLCJpc0FycmF5IiwidmFsdWVzIiwiZGF0YSIsInNldCIsInByb3BzIiwicHJvcEtleSIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByaXZhdGVQcm9wS2V5IiwiU3RyaW5nIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIm5ld1ZhbCIsInRyaWdnZXJFdmVudCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJldmVudCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwidHJpZ2dlciIsIiNzZXQiLCJ1cGRhdGVkIiwiZm9yRWFjaCIsImluY2x1ZGVzIiwic2FtZU9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiRXJyb3IiLCJza2VsZXRvbiIsInByb3BlcnR5IiwiY29sbGVjdGlvbiIsInR5cGUiLCJuYW1lIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiZXhwb3J0cyIsIl9kZWZpbmVSZWFjdGl2ZVByb3AiLCJ0YXJnZXQiLCJ0YXJnZXRQcm90byIsInByb3RvdHlwZSIsInNldFJlYWN0aXZlUHJvcCJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9yZWFjdGl2ZS1jb25zdHJ1Y3Rvci1zcGVjcy50cyIsIi9yZWFjdGl2ZS1wcm9wcy50cyIsIi9yZWFjdGl2ZS1wdWJsaWMtcHJvcHMudHMiLCIvcHJvcGVydHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtVQWVPLFdBVFA7Ozs7Ozs7O1VBU2lCLE1BQWdCQyxhQUFpQixTQUFRRixPQUFBLENBQUFHLE1BQU07WUFDckRDLE1BQU07WUFDaEIsQ0FBQUMsVUFBVyxHQUFZLElBQUk7WUFDM0IsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQUMsUUFBUTtZQUNSQyxPQUFPLEdBQVksS0FBSztZQUN4QkMsVUFBVSxHQUFZLEtBQUs7WUFDM0JDLEtBQUssR0FBWSxLQUFLO1lBQ3RCQyxTQUFTLEdBQVksS0FBSztZQUNoQkMsVUFBVTtZQUNwQkMsTUFBTSxHQUFZLEtBQUs7WUFFdkIsQ0FBQUMsYUFBYyxHQUF3QixFQUFFO1lBQ3hDLElBQUlDLGFBQWFBLENBQUE7Y0FDaEIsTUFBTUgsVUFBVSxHQUFHLElBQUksQ0FBQ0ksYUFBYSxFQUFFO2NBQ3ZDLE9BQU9DLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDTixVQUFVLENBQUMsQ0FBQ08sSUFBSSxDQUFDQyxJQUFJLElBQUc7Z0JBQzFDLElBQUlBLElBQUksS0FBSyxJQUFJLElBQUksT0FBT0EsSUFBSSxLQUFLLFFBQVEsRUFBRSxPQUFPLEtBQUs7Z0JBQzNELE9BQU9SLFVBQVUsQ0FBQ1EsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUFOLGFBQWMsQ0FBQ00sSUFBSSxDQUFDO2NBQ3RELENBQUMsQ0FBQztZQUNIO1lBQ0FDLFlBQVlDLEtBQUEsR0FBbUMsRUFBRTtjQUNoRCxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUNDLGFBQWEsQ0FBc0IsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFF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