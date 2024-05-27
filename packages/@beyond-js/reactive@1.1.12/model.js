System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/events@0.0.4/events"], function (_export, _context) {
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
    }, function (_beyondJsEvents004Events) {
      dependency_1 = _beyondJsEvents004Events;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["dexie", "3.2.3"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.12"], ["@aimpact/ailearn-app", "0.0.43"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.12/model"
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
        hash: 2003095831,
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
            processed = false;
            /**
             * The ready property is defined as getter and not as ReactiveProperty to be able to override it
             */
            #ready = false;
            get ready() {
              return this.#ready;
            }
            set ready(value) {
              if (value === this.#ready) return;
              this.#ready = value;
              this.triggerEvent();
            }
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
              this.reactiveProps(['fetching', 'fetched', 'processing', 'processed', 'loaded']);
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

      /*******************************************
      INTERNAL MODULE: ./interfaces/initial-values
      *******************************************/

      ims.set('./interfaces/initial-values', {
        hash: 3875886425,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwicmVxdWlyZSIsIlJlYWN0aXZlTW9kZWwiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsInJlYWR5IiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJwcm9wZXJ0aWVzIiwibG9hZGVkIiwiaW5pdGlhbFZhbHVlcyIsImlzVW5wdWJsaXNoZWQiLCJnZXRQcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJwcm9wIiwiY29uc3RydWN0b3IiLCJzcGVjcyIsInJlYWN0aXZlUHJvcHMiLCJBcnJheSIsImlzQXJyYXkiLCJ2YWx1ZXMiLCJkYXRhIiwic2V0IiwicHJvcHMiLCJwcm9wS2V5IiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImluaXRpYWxWYWx1ZSIsInVuZGVmaW5lZCIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByaXZhdGVQcm9wS2V5IiwiU3RyaW5nIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIm5ld1ZhbCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJldmVudCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwidHJpZ2dlciIsIiNzZXQiLCJ1cGRhdGVkIiwiZm9yRWFjaCIsImluY2x1ZGVzIiwic2FtZU9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiRXJyb3IiLCJza2VsZXRvbiIsInByb3BlcnR5IiwiY29sbGVjdGlvbiIsInR5cGUiLCJuYW1lIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiZXhwb3J0cyIsIl9kZWZpbmVSZWFjdGl2ZVByb3AiLCJ0YXJnZXQiLCJ0YXJnZXRQcm90byIsInByb3RvdHlwZSIsInNldFJlYWN0aXZlUHJvcCJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9pbml0aWFsLXZhbHVlcy50cyIsIi9yZWFjdGl2ZS1jb25zdHJ1Y3Rvci1zcGVjcy50cyIsIi9yZWFjdGl2ZS1wcm9wcy50cyIsIi9yZWFjdGl2ZS1wdWJsaWMtcHJvcHMudHMiLCIvcHJvcGVydHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBYU8sV0FUUDs7Ozs7Ozs7VUFTaUIsTUFBZ0JDLGFBQWlCLFNBQVFGLE9BQUEsQ0FBQUcsTUFBTTtZQUNyREMsTUFBTTtZQUNoQixDQUFBQyxVQUFXLEdBQVksSUFBSTtZQUMzQixJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBQyxRQUFRO1lBQ1JDLE9BQU8sR0FBWSxLQUFLO1lBQ3hCQyxVQUFVLEdBQVksS0FBSztZQUUzQkMsU0FBUyxHQUFZLEtBQUs7WUFDMUI7OztZQUdBLENBQUFDLEtBQU0sR0FBWSxLQUFLO1lBQ3ZCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUEsS0FBS0EsQ0FBQ0MsS0FBYztjQUN2QixJQUFJQSxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUFELEtBQU0sRUFBRTtjQUMzQixJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHQyxLQUFLO2NBQ25CLElBQUksQ0FBQ0MsWUFBWSxFQUFFO1lBQ3BCO1lBQ1VDLFVBQVU7WUFDcEJDLE1BQU0sR0FBWSxLQUFLO1lBRXZCLENBQUFDLGFBQWMsR0FBd0IsRUFBRTtZQUN4QyxJQUFJQyxhQUFhQSxDQUFBO2NBQ2hCLE1BQU1ILFVBQVUsR0FBRyxJQUFJLENBQUNJLGFBQWEsRUFBRTtjQUN2QyxPQUFPQyxNQUFNLENBQUNDLElBQUksQ0FBQ04sVUFBVSxDQUFDLENBQUNPLElBQUksQ0FBQ0MsSUFBSSxJQUFHO2dCQUMxQyxJQUFJQSxJQUFJ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