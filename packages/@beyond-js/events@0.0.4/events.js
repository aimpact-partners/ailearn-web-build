System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, Events, ListenerFunction, __beyond_pkg, hmr;
  _export({
    Events: void 0,
    ListenerFunction: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@types/node", "16.18.11"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/events", "0.0.4"], ["@aimpact/ailearn-app", "0.0.55"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/events@0.0.4/events"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /************************
      INTERNAL MODULE: ./events
      ************************/
      ims.set('./events', {
        hash: 3993267980,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Events = void 0;
          /*bundle*/
          class Events {
            #specs;
            #listeners = new Map();
            #destroyed = false;
            get destroyed() {
              return this.#destroyed;
            }
            constructor(specs) {
              specs = specs ? specs : {};
              if (specs.supported && !(specs.supported instanceof Array)) throw new Error('Invalid parameters');
              this.#specs = specs;
              if (specs.bind) {
                specs.bind.bind = (event, listener, priority) => this.on(event, listener, priority);
                specs.bind.unbind = (event, listener) => this.off(event, listener);
              }
            }
            /**
             * Binds an event handler to an event name
             *
             * @param {string} event
             * @param {ListenerFunction} listener
             * @param {number} priority
             * @returns {this}
             */
            on(event, listener, priority) {
              if (this.#destroyed) {
                throw new Error('Events object is destroyed');
              }
              if (this.#specs.supported && !this.#specs.supported.includes(event)) {
                throw new Error(`Event "${event}" is not defined`);
              }
              if (typeof listener !== 'function') {
                throw new Error('Listener is not a function');
              }
              this.off(event, listener); // Just in case the listener is already registered
              const l = this.#listeners.has(event) ? this.#listeners.get(event) : [];
              this.#listeners.set(event, l);
              l.push({
                listener: listener,
                priority: priority ? priority : 0
              });
              return this;
            }
            bind = (event, listener, priority) => this.on(event, listener, priority);
            /**
             * Unbind an event listener
             *
             * @param {string} event
             * @param {ListenerFunction} listener
             * @param {number} force
             * @returns {this}
             */
            off(event, listener, force) {
              if (this.#destroyed) {
                throw new Error('Events object is destroyed');
              }
              if (!event) {
                throw new Error(`Event name not specified`);
              }
              if (this.#specs.supported && !this.#specs.supported.includes(event)) {
                throw new Error(`Event "${event}" is not defined`);
              }
              if (!listener) {
                if (!force) throw new Error('Listener function not set');
                this.#listeners.delete(event);
                return this;
              }
              if (!this.#listeners.has(event)) {
                return this;
              }
              const e = this.#listeners.get(event);
              const filtered = e.filter(item => item.listener !== listener);
              this.#listeners.set(event, filtered);
              return this;
            }
            unbind = (event, listener, force) => this.off(event, listener, force);
            /**
             * Triggers an event
             *
             * @param {Trigger} event
             * @param {*} rest
             * @returns {Promise<*>}
             */
            trigger(event, ...rest) {
              if (this.#destroyed) {
                throw new Error('Events object is destroyed');
              }
              event = typeof event === 'string' ? {
                'name': event
              } : event;
              if (typeof event !== 'object') throw new Error('Invalid parameters');
              if (typeof event.name !== 'string') throw new Error('Invalid event name');
              if (this.#specs.supported && !this.#specs.supported.includes(event.name)) {
                throw new Error(`Event "${event.name}" is not defined`);
              }
              let args = [...arguments];
              args.shift(); // Remove the event name from the list of arguments
              if (!this.#listeners.has(event.name)) return;
              let l = this.#listeners.get(event.name);
              // Sort by priority
              l.sort((a, b) => b.priority - a.priority);
              if (event.async) {
                const trigger = async function () {
                  const promises = [];
                  for (let listener of l) {
                    promises.push(listener.listener(...args));
                  }
                  await Promise.all(promises);
                };
                return trigger.call(this, ...args).catch(exc => console.error(exc.stack));
              } else {
                for (let listener of l) {
                  listener.listener(...args);
                }
              }
            }
            destroy() {
              this.#destroyed = true;
              this.#listeners.clear();
            }
          }
          exports.Events = Events;
          globalThis.Events = Events;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1632705009,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./events",
        "from": "Events",
        "name": "Events"
      }, {
        "im": "./types",
        "from": "ListenerFunction",
        "name": "ListenerFunction"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Events') && _export("Events", Events = require ? require('./events').Events : value);
        (require || prop === 'ListenerFunction') && _export("ListenerFunction", ListenerFunction = require ? require('./types').ListenerFunction : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFdmVudHMiLCJzcGVjcyIsImxpc3RlbmVycyIsIk1hcCIsImRlc3Ryb3llZCIsImNvbnN0cnVjdG9yIiwic3VwcG9ydGVkIiwiQXJyYXkiLCJFcnJvciIsImJpbmQiLCJldmVudCIsImxpc3RlbmVyIiwicHJpb3JpdHkiLCJvbiIsInVuYmluZCIsIm9mZiIsImluY2x1ZGVzIiwibCIsImhhcyIsImdldCIsInNldCIsInB1c2giLCJmb3JjZSIsImRlbGV0ZSIsImUiLCJmaWx0ZXJlZCIsImZpbHRlciIsIml0ZW0iLCJ0cmlnZ2VyIiwicmVzdCIsIm5hbWUiLCJhcmdzIiwiYXJndW1lbnRzIiwic2hpZnQiLCJzb3J0IiwiYSIsImIiLCJhc3luYyIsInByb21pc2VzIiwiUHJvbWlzZSIsImFsbCIsImNhbGwiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiZGVzdHJveSIsImNsZWFyIiwiZXhwb3J0cyIsImdsb2JhbFRoaXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIl0sInNvdXJjZXMiOlsiL2V2ZW50cy50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUVPO1VBQVUsTUFDWEEsTUFBTTtZQUNSLENBQUFDLEtBQU07WUFDTixDQUFBQyxTQUFVLEdBQWlDLElBQUlDLEdBQUcsQ0FBSCxDQUFHO1lBQ2xELENBQUFDLFNBQVUsR0FBRyxLQUFLO1lBQ2xCLElBQUlBLFNBQVNBLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQzFCO1lBRUFDLFlBQVlKLEtBQW1CO2NBQzNCQSxLQUFLLEdBQUdBLEtBQUssR0FBR0EsS0FBSyxHQUFHLEVBQUU7Y0FFMUIsSUFBSUEsS0FBSyxDQUFDSyxTQUFTLElBQUksRUFBRUwsS0FBSyxDQUFDSyxTQUFTLFlBQVlDLEtBQUssQ0FBQyxF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