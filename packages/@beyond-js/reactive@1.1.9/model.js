System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/events@0.0.6/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, ReactiveModel, IPropertyObject, IReactiveProperties, ReactiveModelPublic, ReactiveProperties, __beyond_pkg, hmr;
  _export({
    ReactiveModel: void 0,
    IPropertyObject: void 0,
    IReactiveProperties: void 0,
    ReactiveModelPublic: void 0,
    ReactiveProperties: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsEvents006Events) {
      dependency_1 = _beyondJsEvents006Events;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.9"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.9/model"
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
        hash: 2948121196,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactiveModel = void 0;
          var _events = require("@beyond-js/events/events");
          var _properties = require("./properties");
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
            /**
             * An array of property names or objects defining properties to be treated as reactive.
             * String values represent the names of the properties. Object values follow the IPropertyObject
             * interface, allowing for more detailed property definitions.
             *
             * @type {(string | IPropertyObject)[]}
             */
            properties = [];
            /**
             * Initializes the model with given values. This method sets the initial state of the model's properties.
             * If no values are provided, it returns the current initial values.
             *
             * @param {Partial<ReactiveModelPublic<T>> | null} values - An object containing initial values for the model's properties.
             * @returns {Record<string, any>} The initial values of the model's properties.
             */
            #initialValues = {};
            /**
             * Checks if there are any changes to the reactive properties of the model that haven't been published yet.
             * It compares the current property values with their initial values. If any property value has changed
             * (except for properties named 'id' or properties of type 'object'), this getter returns true, indicating
             * that there are unpublished changes.
             *
             * @returns {boolean} True if there are unpublished changes, otherwise false.
             */
            get isUnpublished() {
              const properties = this.getProperties();
              return Object.keys(properties).some(prop => {
                if (prop === 'id' || typeof prop === 'object') return false;
                return properties[prop] !== this.#initialValues[prop];
              });
            }
            #properties;
            constructor(specs) {
              super();
              this.#properties = new _properties.ModelProperties(this);
              if (specs?.properties) {
                this.properties = specs.properties;
                this.initialise();
              }
              this.initialValues(specs);
            }
            /**
             * Initializes reactive properties for the model. This method should be called in child classes
             * of the ReactiveModel after defining their specific `properties`. The `initialise` method
             * sets up the reactive behavior for each property listed in the `properties` array. It ensures
             * that any changes to these properties will correctly trigger events as defined in the reactive
             * model structure.
             *
             * This method is essential for the proper functioning of the reactive model in child classes, as
             * it dynamically assigns reactive characteristics to the properties defined by them. It should be
             * called once during the initialization phase of the child class instance.
             *
             * Usage in a child class:
             * ```
             * class MyModel extends ReactiveModel<MyType> {
             *     constructor() {
             *         super();
             *         this.properties = ['prop1', 'prop2', ...];
             *         this.initialise(); // Initializes reactive properties
             *     }
             * }
             * ```
             */
            initialise() {
              this.reactiveProps(this.properties);
              this.reactiveProps(['fetching', 'fetched', 'processing', 'processed', 'loaded', 'ready']);
            }
            initialValues(values) {
              if (!values) return this.#initialValues;
              this.set(values);
              this.#initialValues = values;
            }
            reactiveProps(props) {
              this.#properties.reactiveProps(props);
            }
            /**
             * The `set` method sets one or more properties on the model.
             *
             * @param {keyof ReactiveModelPublic<T>} property - The name of the property to set.
             * @param {*} value - The value to set the property to.
             * @returns {void}
             */
            set(properties) {
              try {
                Object.keys(properties).forEach(prop => {
                  this.#properties.multipleSet = true;
                  if (!this.#properties.items.includes(prop)) {
                    return;
                  }
                  this[prop] = properties[prop];
                });
              } catch (e) {
                throw new Error(`Error setting properties: ${e}`);
              } finally {
                if (this.#properties.hasChanges) {
                  this.triggerEvent();
                }
                this.#properties.multipleSet = false;
                this.#properties.hasChanges = false;
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
          }
          exports.ReactiveModel = ReactiveModel;
        }
      });

      /****************************************
      INTERNAL MODULE: ./interfaces/model-specs
      ****************************************/

      ims.set('./interfaces/model-specs', {
        hash: 1731835366,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************************
      INTERNAL MODULE: ./interfaces/property-object
      ********************************************/

      ims.set('./interfaces/property-object', {
        hash: 618683348,
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

      /**********************************
      INTERNAL MODULE: ./interfaces/types
      **********************************/

      ims.set('./interfaces/types', {
        hash: 152592241,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./properties
      ****************************/

      ims.set('./properties', {
        hash: 295200337,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModelProperties = void 0;
          class ModelProperties {
            #parent;
            #items = new Set();
            multipleSet;
            #reactiveProperties = ['fetching', 'fetched', 'processing', 'processed', 'loaded', 'ready'];
            get items() {
              return [...this.#items];
            }
            hasChanges;
            constructor(parent) {
              this.#parent = parent;
              this.reactiveProps(this.#reactiveProperties);
            }
            reactiveProps(props) {
              if (!props) return;
              for (const propKey of props) {
                if (typeof propKey === 'object') {
                  console.log(`the props is an object`, propKey);
                  continue;
                }
                if (!this.#reactiveProperties.includes(propKey)) {
                  this.#items.add(propKey);
                }
                const descriptor = Object.getOwnPropertyDescriptor(this.#parent, propKey);
                const initialValue = descriptor ? descriptor.value : undefined;
                this.defineReactiveProp(propKey, initialValue);
              }
            }
            defineReactiveProp(propKey, initialValue) {
              const privatePropKey = `__${String(propKey)}`;
              Object.defineProperty(this.#parent, propKey, {
                enumerable: true,
                configurable: true,
                get: () => {
                  if (!this.hasOwnProperty(privatePropKey)) {
                    this[privatePropKey] = initialValue;
                  }
                  return this[privatePropKey];
                },
                set: newVal => {
                  const sameObject = typeof newVal === 'object' && JSON.stringify(newVal) === JSON.stringify(this[privatePropKey]);
                  if (this[privatePropKey] === newVal || sameObject) return;
                  this.hasChanges = true;
                  this[privatePropKey] = newVal;
                  if (!this.multipleSet) {
                    this.#parent.triggerEvent();
                  }
                }
              });
            }
          }
          exports.ModelProperties = ModelProperties;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ReactiveModel",
        "name": "ReactiveModel"
      }, {
        "im": "./interfaces/property-object",
        "from": "IPropertyObject",
        "name": "IPropertyObject"
      }, {
        "im": "./interfaces/reactive-props",
        "from": "IReactiveProperties",
        "name": "IReactiveProperties"
      }, {
        "im": "./interfaces/reactive-public-props",
        "from": "ReactiveModelPublic",
        "name": "ReactiveModelPublic"
      }, {
        "im": "./interfaces/types",
        "from": "ReactiveProperties",
        "name": "ReactiveProperties"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ReactiveModel') && _export("ReactiveModel", ReactiveModel = require ? require('./index').ReactiveModel : value);
        (require || prop === 'IPropertyObject') && _export("IPropertyObject", IPropertyObject = require ? require('./interfaces/property-object').IPropertyObject : value);
        (require || prop === 'IReactiveProperties') && _export("IReactiveProperties", IReactiveProperties = require ? require('./interfaces/reactive-props').IReactiveProperties : value);
        (require || prop === 'ReactiveModelPublic') && _export("ReactiveModelPublic", ReactiveModelPublic = require ? require('./interfaces/reactive-public-props').ReactiveModelPublic : value);
        (require || prop === 'ReactiveProperties') && _export("ReactiveProperties", ReactiveProperties = require ? require('./interfaces/types').ReactiveProperties : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwicmVxdWlyZSIsIl9wcm9wZXJ0aWVzIiwiUmVhY3RpdmVNb2RlbCIsIkV2ZW50cyIsInNjaGVtYSIsImlzUmVhY3RpdmUiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbFZhbHVlcyIsImlzVW5wdWJsaXNoZWQiLCJnZXRQcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJwcm9wIiwiY29uc3RydWN0b3IiLCJzcGVjcyIsIk1vZGVsUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJyZWFjdGl2ZVByb3BzIiwidmFsdWVzIiwic2V0IiwicHJvcHMiLCJmb3JFYWNoIiwibXVsdGlwbGVTZXQiLCJpdGVtcyIsImluY2x1ZGVzIiwiZSIsIkVycm9yIiwiaGFzQ2hhbmdlcyIsInRyaWdnZXJFdmVudCIsInNrZWxldG9uIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbGxlY3Rpb24iLCJ0eXBlIiwibmFtZSIsIm1hcCIsIml0ZW0iLCJldmVudCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwidHJpZ2dlciIsImV4cG9ydHMiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwicGFyZW50IiwiU2V0IiwicmVhY3RpdmVQcm9wZXJ0aWVzIiwicHJvcEtleSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaW5pdGlhbFZhbHVlIiwidW5kZWZpbmVkIiwiZGVmaW5lUmVhY3RpdmVQcm9wIiwicHJpdmF0ZVByb3BLZXkiLCJTdHJpbmciLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0IiwibmV3VmFsIiwic2FtZU9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvbW9kZWwtc3BlY3MudHMiLCIvcHJvcGVydHktb2JqZWN0LnRzIiwiL3JlYWN0aXZlLXByb3BzLnRzIiwiL3JlYWN0aXZlLXB1YmxpYy1wcm9wcy50cyIsIi90eXBlcy50cyIsIi9wcm9wZXJ0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBSUEsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBWU8sV0FUUDs7Ozs7Ozs7VUFTaUIsTUFBZ0JFLGFBQWlCLFNBQVFILE9BQUEsQ0FBQUksTUFBTTtZQUNyREMsTUFBTTtZQUNoQixDQUFBQyxVQUFXLEdBQVksSUFBSTtZQUMzQixJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQVFBOzs7Ozs7O1lBT1VDLFVBQVUsR0FBdUIsRUFBRTtZQUM3Qzs7Ozs7OztZQU9BLENBQUFDLGFBQWMsR0FBd0IsRUFBRTtZQUV4Qzs7Ozs7Ozs7WUFRQSxJQUFJQyxhQUFhQSxDQUFBO2NBQ2hCLE1BQU1GLFVBQVUsR0FBRyxJQUFJLENBQUNHLGFBQWEsRUFBRTtjQUV2QyxPQUFPQyxNQUFNLENBQUNDLElBQUksQ0FBQ0wsVUFBVSxDQUFDLENBQUNNLElBQUksQ0FBQ0MsSUFBSSxJQUFHO2dCQUMxQyxJQUFJQSxJQUFJLEtBQUssSUFBSSxJQUFJLE9BQU9BLElBQUksS0FBSyxRQUFRLEVBQUUsT0FBTyxLQUFLO2dCQUMzRCxPQUFPUCxVQUFVLENBQUNPLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFBTixhQUFjLENBQUNNLElBQUksQ0FBQztjQUN0RCxDQUFDLENBQUM7WUFDSDtZQUNBLENBQUFQLFVBQVc7WUFDWFEsWUFBWUMsS0FBMkI7Y0FDdEMsS0FBSyxFQUFFO2NBRVAsSUFBSSxDQUFDLENBQUFULFVBQVcsR0FBRyxJQUFJTCxXQUFBLENBQUFlLGVBQWUsQ0FBQyxJQUFJLENBQUM7Y0FDNUMsSUFBSUQsS0FBSyxFQUFFVCxVQUFVLEVBQUU7Z0JBQ3RCLElBQUks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