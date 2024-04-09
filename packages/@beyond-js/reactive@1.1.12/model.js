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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["dexie", "3.2.3"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.12"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
        hash: 2958020981,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwicmVxdWlyZSIsIlJlYWN0aXZlTW9kZWwiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInJlYWR5IiwicHJvY2Vzc2VkIiwicHJvcGVydGllcyIsImxvYWRlZCIsImluaXRpYWxWYWx1ZXMiLCJpc1VucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsImNvbnN0cnVjdG9yIiwic3BlY3MiLCJyZWFjdGl2ZVByb3BzIiwiQXJyYXkiLCJpc0FycmF5IiwidmFsdWVzIiwiZGF0YSIsInNldCIsInByb3BzIiwicHJvcEtleSIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByaXZhdGVQcm9wS2V5IiwiU3RyaW5nIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIm5ld1ZhbCIsInRyaWdnZXJFdmVudCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJldmVudCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwidHJpZ2dlciIsIiNzZXQiLCJ1cGRhdGVkIiwiZm9yRWFjaCIsImluY2x1ZGVzIiwic2FtZU9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiRXJyb3IiLCJza2VsZXRvbiIsInByb3BlcnR5IiwiY29sbGVjdGlvbiIsInR5cGUiLCJuYW1lIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiZXhwb3J0cyIsIl9kZWZpbmVSZWFjdGl2ZVByb3AiLCJ0YXJnZXQiLCJ0YXJnZXRQcm90byIsInByb3RvdHlwZSIsInNldFJlYWN0aXZlUHJvcCJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyIsIi9pbml0aWFsLXZhbHVlcy50cyIsIi9yZWFjdGl2ZS1jb25zdHJ1Y3Rvci1zcGVjcy50cyIsIi9yZWFjdGl2ZS1wcm9wcy50cyIsIi9yZWFjdGl2ZS1wdWJsaWMtcHJvcHMudHMiLCIvcHJvcGVydHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBZU8sV0FUUDs7Ozs7Ozs7VUFTaUIsTUFBZ0JDLGFBQWlCLFNBQVFGLE9BQUEsQ0FBQUcsTUFBTTtZQUNyREMsTUFBTTtZQUNoQixDQUFBQyxVQUFXLEdBQVksSUFBSTtZQUMzQixJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBQyxRQUFRO1lBQ1JDLE9BQU8sR0FBWSxLQUFLO1lBQ3hCQyxVQUFVLEdBQVksS0FBSztZQUMzQkMsS0FBSyxHQUFZLEtBQUs7WUFDdEJDLFNBQVMsR0FBWSxLQUFLO1lBQ2hCQyxVQUFVO1lBQ3BCQyxNQUFNLEdBQVksS0FBSztZQUV2QixDQUFBQyxhQUFjLEdBQXdCLEVBQUU7WUFDeEMsSUFBSUMsYUFBYUEsQ0FBQTtjQUNoQixNQUFNSCxVQUFVLEdBQUcsSUFBSSxDQUFDSSxhQUFhLEVBQUU7Y0FDdkMsT0FBT0MsTUFBTSxDQUFDQyxJQUFJLENBQUNOLFVBQVUsQ0FBQyxDQUFDTyxJQUFJLENBQUNDLElBQUksSUFBRztnQkFDMUMsSUFBSUEsSUFBSSxLQUFLLElBQUksSUFBSSxPQUFPQSxJQUFJLEtBQUssUUFBUSxFQUFFLE9BQU8sS0FBSztnQkFDM0QsT0FBT1IsVUFBVSxDQUFDUSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQU4sYUFBYyxDQUFDTSxJQUFJLENBQUM7Y0FDdEQsQ0FBQyxDQUFDO1lBQ0g7WUFDQUMsWUFBWUMsS0FBQSxHQUFtQyxFQUFFO2NBQ2hELEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0MsYUFBYSxDQUFz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WTs7Z0JBRXRDLE9BQU9vQyxNQUFNLENBQUNoQyxjQUFjLENBQUM7Y0FDOUIsQ0FBQztjQUNEVCxHQUFHQSxDQUFDYyxNQUFrQjtnQkFDckIsSUFBSUEsTUFBTSxLQUFLMkIsTUFBTSxDQUFDaEMsY0FBYyxDQUFDLEVBQUU7Z0JBQ3ZDZ0MsTUFBTSxDQUFDaEMsY0FBYyxDQUFDLEdBQUdLLE1BQU07Z0JBQy9CMkIsTUFBTSxDQUFDMUIsWUFBWSxFQUFFO2NBQ3RCLENBQUM7Y0FDREMsVUFBVSxFQUFFLElBQUk7Y0FDaEJDLFlBQVksRUFBRTthQUNkLENBQUM7VUFDSDtVQUNPO1VBQVcsU0FBVXRCLGFBQWFBLENBQ3hDTSxLQUFxQjtZQUVyQixPQUFPLFVBQVV3QyxNQUFvRjtjQUNwRyxNQUFNQyxXQUFXLEdBQUcsV0FBVyxJQUFJRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0UsU0FBUyxHQUFHRixNQUFNO2NBRXJFLEtBQUssTUFBTXZDLE9BQU8sSUFBSUQsS0FBSyxFQUFFO2dCQUM1QixNQUFNRSxVQUFVLEdBQUdkLE1BQU0sQ0FBQ2Usd0JBQXdCLENBQUNzQyxXQUFXLEVBQUV4QyxPQUFPLENBQUM7Z0JBQ3hFLE1BQU1HLFlBQVksR0FBR0YsVUFBVSxHQUFHQSxVQUFVLENBQUNHLEtBQUssR0FBR0MsU0FBUztnQkFFOURDLGtCQUFrQixDQUFDa0MsV0FBVyxFQUFFeEMsT0FBTyxFQUFFRyxZQUFZLENBQUM7O1lBRXhELENBQUM7VUFDRjtVQUVNLFNBQVVHLGtCQUFrQkEsQ0FBSWlDLE1BQXdCLEVBQUV2QyxPQUFnQixFQUFFRyxZQUF3QjtZQUN6RyxNQUFNSSxjQUFjLEdBQUcsS0FBS0MsTUFBTSxDQUFDUixPQUFPLENBQUMsRUFBRTtZQUU3Q2IsTUFBTSxDQUFDc0IsY0FBYyxDQUFDOEIsTUFBTSxFQUFFdkMsT0FBTyxFQUFFO2NBQ3RDVSxHQUFHQSxDQUFBO2dCQUNGLElBQUksQ0FBQzZCLE1BQU0sQ0FBQzVCLGNBQWMsQ0FBQ0osY0FBYyxDQUFDLEVBQUU7a0JBQzNDZ0MsTUFBTSxDQUFDaEMsY0FBYyxDQUFDLEdBQUdKLFlBQVk7O2dCQUV0QyxPQUFPb0MsTUFBTSxDQUFDaEMsY0FBYyxDQUFDO2NBQzlCLENBQUM7Y0FDRFQsR0FBR0EsQ0FBQ2MsTUFBa0I7Z0JBQ3JCMkIsTUFBTSxDQUFDRyxlQUFlLENBQUMxQyxPQUFPLEVBQUVZLE1BQU0sQ0FBQztjQUN4QyxDQUFDO2NBQ0RFLFVBQVUsRUFBRSxJQUFJO2NBQ2hCQyxZQUFZLEVBQUU7YUFDZCxDQUFDO1VBQ0giLCJpZ25vcmVMaXN0IjpbXX0=