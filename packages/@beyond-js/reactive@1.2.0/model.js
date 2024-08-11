System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/events@0.0.4/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, ReactiveModel, IReactiveProperties, ReactiveModelPublic, __beyond_pkg, hmr;
  _export({
    ReactiveModel: void 0,
    IReactiveProperties: void 0,
    ReactiveModelPublic: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsEvents004Events) {
      dependency_1 = _beyondJsEvents004Events;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["dexie", "3.2.7"], ["uuid", "9.0.1"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["sqlite", "4.2.1"], ["sqlite3", "5.1.7"], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/ailearn-app", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.2.0/model"
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
        hash: 3748262404,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactiveModel = void 0;
          var _events = require("@beyond-js/events/events");
          /*bundle*/
          class ReactiveModel extends _events.Events {
            schema;
            #isReactive = true;
            debounceTimeout;
            batchUpdates = false;
            #ready = false;
            #initialValues = {};
            properties = [];
            fetching;
            fetched = false;
            processing = false;
            processed = false;
            loaded = false;
            get isReactive() {
              return this.#isReactive;
            }
            get ready() {
              return this.#ready;
            }
            set ready(value) {
              if (value === this.#ready) return;
              this.#ready = value;
              this.triggerEvent();
            }
            get isUnpublished() {
              const properties = this.getProperties();
              return Object.keys(properties).some(prop => {
                if (prop === 'id' || typeof prop === 'object') return false;
                return properties[prop] !== this.#initialValues[prop];
              });
            }
            constructor(specs) {
              super();
              if (!specs) specs = {};
              this.reactiveProps(['fetching', 'fetched', 'processing', 'processed', 'loaded']);
              if (specs.properties && Array.isArray(specs.properties)) {
                this.properties = specs.properties;
                this.reactiveProps(specs.properties, specs);
              }
              if (specs) this.initialValues(specs);
            }
            #setProperties(specs) {}
            initialValues(values) {
              if (!values) return this.#initialValues;
              let data = {
                ...values
              };
              delete data.properties;
              // this.#set(data as Partial<T>, false);
              this.#initialValues = data;
              return this.initialValues;
            }
            reactiveProps(props, values) {
              for (const propKey of props) {
                const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
                const initialValue = values?.[propKey] ? values[propKey] : descriptor ? descriptor.value : undefined;
                this.defineReactiveProp(propKey, initialValue);
              }
            }
            defineReactiveProp(propKey, initialValue) {
              const privatePropKey = `#${String(propKey)}`;
              Object.defineProperty(this, propKey, {
                get: () => {
                  if (!Object.prototype.hasOwnProperty.call(this, privatePropKey)) {
                    this[privatePropKey] = initialValue;
                  }
                  return this[privatePropKey];
                },
                set: newVal => {
                  if (newVal === this[privatePropKey]) return;
                  this[privatePropKey] = newVal;
                  this.triggerEvent();
                },
                enumerable: true,
                configurable: true
              });
            }
            triggerEvent = (event = 'change', delay = 0) => {
              // if (this.debounceTimeout !== null) clearTimeout(this.debounceTimeout);
              // this.debounceTimeout = globalThis.setTimeout(() => {
              this.trigger(event);
              this.debounceTimeout = null;
              // }, delay);
            };
            set(properties, batch = false) {
              if (batch) {
                this.batchUpdates = true;
              }
              this.#set(properties);
              if (batch) {
                this.batchUpdates = false;
                this.triggerEvent();
              }
            }
            isSameObject = (a, b) => JSON.stringify(a) === JSON.stringify(b);
            #set(properties, trigger = true) {
              let updated = false;
              if (!properties) return;
              try {
                const keys = Object.keys(properties);
                keys.forEach(prop => {
                  if (!this.properties || !this.properties.includes(prop)) return;
                  const isObject = typeof properties[prop] === 'object';
                  const isSameObject = isObject && this.isSameObject(properties[prop], this[prop]);
                  if (this[prop] === properties[prop] || isSameObject) return;
                  const descriptor = Object.getOwnPropertyDescriptor(this, prop);
                  if (!descriptor?.set) return;
                  this[prop] = properties[prop];
                  updated = true;
                });
              } catch (e) {
                throw new Error(`Error setting properties: ${e.message}`);
              } finally {
                if (trigger && updated && !this.batchUpdates) this.triggerEvent();
              }
            }
            getProperties() {
              const props = {};
              const properties = this.properties;
              properties.forEach(property => {
                if (typeof property === 'object') {
                  if (!Object.prototype.hasOwnProperty.call(property, 'name')) return;
                  const collection = property;
                  if (collection.type === 'collection') {
                    props[property.name] = this[property.name].items.map(item => item.getProperties());
                    return;
                  }
                  props[property.name] = this[property.name];
                } else {
                  const name = property;
                  props[name] = this[name];
                }
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
        hash: 2489854459,
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
        hash: 620798412,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwicmVxdWlyZSIsIlJlYWN0aXZlTW9kZWwiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZGVib3VuY2VUaW1lb3V0IiwiYmF0Y2hVcGRhdGVzIiwicmVhZHkiLCJpbml0aWFsVmFsdWVzIiwicHJvcGVydGllcyIsImZldGNoaW5nIiwiZmV0Y2hlZCIsInByb2Nlc3NpbmciLCJwcm9jZXNzZWQiLCJsb2FkZWQiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsImlzVW5wdWJsaXNoZWQiLCJnZXRQcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJwcm9wIiwiY29uc3RydWN0b3IiLCJzcGVjcyIsInJlYWN0aXZlUHJvcHMiLCJBcnJheSIsImlzQXJyYXkiLCJzZXRQcm9wZXJ0aWVzIiwiI3NldFByb3BlcnRpZXMiLCJ2YWx1ZXMiLCJkYXRhIiwicHJvcHMiLCJwcm9wS2V5IiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImluaXRpYWxWYWx1ZSIsInVuZGVmaW5lZCIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByaXZhdGVQcm9wS2V5IiwiU3RyaW5nIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzZXQiLCJuZXdWYWwiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZXZlbnQiLCJkZWxheSIsInRyaWdnZXIiLCJiYXRjaCIsImlzU2FtZU9iamVjdCIsImEiLCJiIiwiSlNPTiIsInN0cmluZ2lmeSIsIiNzZXQiLCJ1cGRhdGVkIiwiZm9yRWFjaCIsImluY2x1ZGVzIiwiaXNPYmplY3QiLCJlIiwiRXJyb3IiLCJtZXNzYWdlIiwicHJvcGVydHkiLCJjb2xsZWN0aW9uIiwidHlwZSIsIm5hbWUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL2luaXRpYWwtdmFsdWVzLnRzIiwiL3JlYWN0aXZlLWNvbnN0cnVjdG9yLXNwZWNzLnRzIiwiL3JlYWN0aXZlLXByb3BzLnRzIiwiL3JlYWN0aXZlLXB1YmxpYy1wcm9wcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtVQWNPO1VBQVUsTUFBZ0JDLGFBQWlCLFNBQVFGLE9BQUEsQ0FBQUcsTUFBTTtZQUdyREMsTUFBTTtZQUNoQixDQUFBQyxVQUFXLEdBQVksSUFBSTtZQUNuQkMsZUFBZTtZQUNmQyxZQUFZLEdBQVksS0FBSztZQUNyQyxDQUFBQyxLQUFNLEdBQVksS0FBSztZQUN2QixDQUFBQyxhQUFjLEdBQWUsRUFBRTtZQUNyQkMsVUFBVSxHQUFhLEVBQUU7WUFDbkNDLFFBQVE7WUFDUkMsT0FBTyxHQUFZLEtBQUs7WUFDeEJDLFVBQVUsR0FBWSxLQUFLO1lBQzNCQyxTQUFTLEdBQVksS0FBSztZQUMxQkMsTUFBTSxHQUFZLEtBQUs7WUFFdkIsSUFBSVYsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxJQUFJRyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLElBQUlBLEtBQUtBLENBQUNRLEtBQWM7Y0FDdkIsSUFBSUEsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBUixLQUFNLEVBQUU7Y0FDM0IsSUFBSSxDQUFDLENBQUFBLEtBQU0sR0FBR1EsS0FBSztjQUNuQixJQUFJLENBQUNDLFlBQVksRUFBRTtZQUNwQjtZQUVBLElBQUlDLGFBQWFBLENBQUE7Y0FDaEIsTUFBTVIsVUFBVSxHQUFHLElBQUksQ0FBQ1MsYUFBYSxFQUFFO2NBQ3ZDLE9BQU9DLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDWCxVQUFVLENBQUMsQ0FBQ1ksSUFBSSxDQUFDQyxJQUFJLElB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