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
        const dependencies = new Map([["@types/node", "16.18.11"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/events", "0.0.4"], ["@aimpact/ailearn-app", "0.1.3-test.08"]]);
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
        hash: 2283346857,
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
              if (specs.supported && !(specs.supported instanceof Array)) throw new Error("Invalid parameters");
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
                throw new Error("Events object is destroyed");
              }
              if (this.#specs.supported && !this.#specs.supported.includes(event)) {
                throw new Error(`Event "${event}" is not defined`);
              }
              if (typeof listener !== "function") {
                throw new Error("Listener is not a function");
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
                throw new Error("Events object is destroyed");
              }
              if (!event) {
                throw new Error(`Event name not specified`);
              }
              if (this.#specs.supported && !this.#specs.supported.includes(event)) {
                throw new Error(`Event "${event}" is not defined`);
              }
              if (!listener) {
                if (!force) throw new Error("Listener function not set");
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
                throw new Error("Events object is destroyed");
              }
              event = typeof event === "string" ? {
                name: event
              } : event;
              if (typeof event !== "object") throw new Error("Invalid parameters");
              if (typeof event.name !== "string") throw new Error("Invalid event name");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFdmVudHMiLCJzcGVjcyIsImxpc3RlbmVycyIsIk1hcCIsImRlc3Ryb3llZCIsImNvbnN0cnVjdG9yIiwic3VwcG9ydGVkIiwiQXJyYXkiLCJFcnJvciIsImJpbmQiLCJldmVudCIsImxpc3RlbmVyIiwicHJpb3JpdHkiLCJvbiIsInVuYmluZCIsIm9mZiIsImluY2x1ZGVzIiwibCIsImhhcyIsImdldCIsInNldCIsInB1c2giLCJmb3JjZSIsImRlbGV0ZSIsImUiLCJmaWx0ZXJlZCIsImZpbHRlciIsIml0ZW0iLCJ0cmlnZ2VyIiwicmVzdCIsIm5hbWUiLCJhcmdzIiwiYXJndW1lbnRzIiwic2hpZnQiLCJzb3J0IiwiYSIsImIiLCJhc3luYyIsInByb21pc2VzIiwiUHJvbWlzZSIsImFsbCIsImNhbGwiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiZGVzdHJveSIsImNsZWFyIiwiZXhwb3J0cyIsImdsb2JhbFRoaXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIl0sInNvdXJjZXMiOlsiL2V2ZW50cy50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUVPO1VBQVUsTUFDWEEsTUFBTTtZQUNSLENBQUFDLEtBQU07WUFDTixDQUFBQyxTQUFVLEdBQWlDLElBQUlDLEdBQUcsRUFBRTtZQUNwRCxDQUFBQyxTQUFVLEdBQUcsS0FBSztZQUNsQixJQUFJQSxTQUFTQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUMxQjtZQUVBQyxZQUFZSixLQUFtQjtjQUMzQkEsS0FBSyxHQUFHQSxLQUFLLEdBQUdBLEtBQUssR0FBRyxFQUFFO2NBRTFCLElBQUlBLEtBQUssQ0FBQ0ssU0FBUyxJQUFJLEVBQUVMLEtBQUssQ0FBQ0ssU0FBUyxZQUFZQyxLQUFLLENBQUMsRUFBRSxN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