System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, beyond, Languages, languages, Events, ListenerFunction, CancellationToken, SingleCall, PendingPromise, __beyond_pkg, hmr;
  _export({
    beyond: void 0,
    Languages: void 0,
    languages: void 0,
    Events: void 0,
    ListenerFunction: void 0,
    CancellationToken: void 0,
    SingleCall: void 0,
    PendingPromise: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", null], ["@types/node", "18.11.18"], ["@beyond-js/kernel", "0.1.9"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/kernel@0.1.9/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /************************
      INTERNAL MODULE: ./beyond
      ************************/
      ims.set('./beyond', {
        hash: 959081709,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.beyond = exports.Beyond = void 0;
          var _languages = require("./languages");
          class Beyond {
            /**
             * @deprecated
             * Use import {languages} from '@beyond-js/kernel/core';
             */
            get languages() {
              return _languages.languages;
            }
            /**
             * @deprecated
             * Use bimport instead of beyond.import
             *
             * @param {string} resource
             * @param {number} version
             * @return {Promise<*>}
             */
            async import(resource, version) {
              return await bimport(resource, version);
            }
          }
          exports.Beyond = Beyond;
          /*bundle*/
          const beyond = exports.beyond = new Beyond();
          globalThis.beyond = beyond;
        }
      });

      /*********************************
      INTERNAL MODULE: ./languages/index
      *********************************/

      ims.set('./languages/index', {
        hash: 2966511149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.languages = exports.Languages = void 0;
          var _events = require("../utils/events/events");
          /*bundle*/
          class Languages extends _events.Events {
            #project;
            #specs;
            #storage = typeof localStorage === 'object' ? localStorage : void 0;
            #supported;
            get supported() {
              return this.#supported;
            }
            get default() {
              return this.#specs?.default;
            }
            #current;
            get current() {
              return this.#current;
            }
            #resolve;
            #ready = new Promise(resolve => this.#resolve = resolve);
            get ready() {
              return this.#ready;
            }
            #fetched = false;
            get fetched() {
              return this.#fetched;
            }
            constructor(project) {
              super();
              this.#project = project;
              bimport(`${project}/config`).then(({
                default: config
              }) => {
                this.#setup(config.languages);
                this.#fetched = true;
                this.#resolve();
              });
            }
            #configure(value) {
              if (this.#current === value) return true;
              if (typeof value !== 'string' || value.length !== 2) {
                console.warn(`Configured language "${value}" is invalid`);
                return false;
              }
              if (value && !this.#supported.has(value)) {
                console.log(`Language "${value}" is not supported`);
                return false;
              }
              const previous = this.#current;
              this.#current = value;
              previous && this.trigger('change');
              return true;
            }
            set current(value) {
              if (!this.#configure(value)) return;
              this.#storage?.setItem('__beyond_language', value);
            }
            #setup(specs) {
              // Check if the default language is valid
              if (specs.default && typeof specs.default !== 'string' || specs.default.length !== 2) {
                console.log(`Default language "${specs.default}" is invalid`);
                specs.default = undefined;
              }
              // Check the supported languages, if not set, default will be english
              const def = specs.default ? specs.default : 'en';
              specs.supported = specs.supported instanceof Array ? specs.supported : [def];
              !specs.supported.length && specs.supported.push(def);
              this.#supported = new Set(specs.supported);
              // If default language not set or was invalid, take the first supported language
              specs.default = specs.default ? specs.default : [...this.#supported][0];
              // If default language was configured, but not set in the supported list, warn it
              if (!this.#supported.has(specs.default)) {
                console.warn(`Default language "${specs.default}" is not supported by current application`);
                specs.default = [...this.#supported][0];
              }
              this.#specs = specs;
              const configured = this.#storage?.getItem('__beyond_language');
              // Try to configure the locally previously configured language
              if (configured && this.#configure(configured)) return;
              // Try to configure the language configured in the device
              const device = typeof location === 'object' ? navigator.language.split('-')[0] : void 0;
              if (device && this.#configure(device)) return;
              this.#configure(specs.default);
            }
          }
          exports.Languages = Languages;
          /*bundle*/
          const languages = exports.languages = new Languages(globalThis.__app_package.specifier);
        }
      });

      /*************************************
      INTERNAL MODULE: ./utils/events/events
      *************************************/

      ims.set('./utils/events/events', {
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

      /************************************
      INTERNAL MODULE: ./utils/events/types
      ************************************/

      ims.set('./utils/events/types', {
        hash: 1632705009,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************************************************************
      INTERNAL MODULE: ./utils/execution-control/cancellation-token/cancellation-token
      *******************************************************************************/

      ims.set('./utils/execution-control/cancellation-token/cancellation-token', {
        hash: 4200323006,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CancellationToken = void 0;
          /*bundle*/
          class CancellationToken {
            #id = 0;
            get current() {
              return this.#id;
            }
            reset = () => ++this.#id;
            check = id => id === this.#id;
          }
          exports.CancellationToken = CancellationToken;
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./utils/execution-control/single-call/single-call
      *****************************************************************/

      ims.set('./utils/execution-control/single-call/single-call', {
        hash: 783668127,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SingleCall = SingleCall;
          /*bundle*/
          function SingleCall(target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            let promises = new WeakMap();
            descriptor.value = function (...args) {
              if (promises.has(this)) return promises.get(this);
              const promise = originalMethod.apply(this, args);
              promises.set(this, promise);
              const clean = () => promises.delete(this);
              promise.then(clean).catch(clean);
              return promise;
            };
            return descriptor;
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./utils/pending-promise/pending-promise
      *******************************************************/

      ims.set('./utils/pending-promise/pending-promise', {
        hash: 3255928960,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PendingPromise = void 0;
          /*bundle*/
          class PendingPromise extends Promise {
            resolve;
            reject;
            constructor(executor) {
              // needed for PendingPromise.race/all ecc
              if (executor instanceof Function) {
                super(executor);
                return;
              }
              let resolve = undefined;
              let reject = undefined;
              super((a, b) => {
                resolve = a;
                reject = b;
              });
              this.resolve = resolve;
              this.reject = reject;
            }
          }
          // For backward compatibility
          exports.PendingPromise = PendingPromise;
          typeof globalThis.process !== 'object' && (window.PendingPromise = PendingPromise);
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./beyond",
        "from": "beyond",
        "name": "beyond"
      }, {
        "im": "./languages/index",
        "from": "Languages",
        "name": "Languages"
      }, {
        "im": "./languages/index",
        "from": "languages",
        "name": "languages"
      }, {
        "im": "./utils/events/events",
        "from": "Events",
        "name": "Events"
      }, {
        "im": "./utils/events/types",
        "from": "ListenerFunction",
        "name": "ListenerFunction"
      }, {
        "im": "./utils/execution-control/cancellation-token/cancellation-token",
        "from": "CancellationToken",
        "name": "CancellationToken"
      }, {
        "im": "./utils/execution-control/single-call/single-call",
        "from": "SingleCall",
        "name": "SingleCall"
      }, {
        "im": "./utils/pending-promise/pending-promise",
        "from": "PendingPromise",
        "name": "PendingPromise"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'beyond') && _export("beyond", beyond = require ? require('./beyond').beyond : value);
        (require || prop === 'Languages') && _export("Languages", Languages = require ? require('./languages/index').Languages : value);
        (require || prop === 'languages') && _export("languages", languages = require ? require('./languages/index').languages : value);
        (require || prop === 'Events') && _export("Events", Events = require ? require('./utils/events/events').Events : value);
        (require || prop === 'ListenerFunction') && _export("ListenerFunction", ListenerFunction = require ? require('./utils/events/types').ListenerFunction : value);
        (require || prop === 'CancellationToken') && _export("CancellationToken", CancellationToken = require ? require('./utils/execution-control/cancellation-token/cancellation-token').CancellationToken : value);
        (require || prop === 'SingleCall') && _export("SingleCall", SingleCall = require ? require('./utils/execution-control/single-call/single-call').SingleCall : value);
        (require || prop === 'PendingPromise') && _export("PendingPromise", PendingPromise = require ? require('./utils/pending-promise/pending-promise').PendingPromise : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbGFuZ3VhZ2VzIiwicmVxdWlyZSIsIkJleW9uZCIsImxhbmd1YWdlcyIsImltcG9ydCIsInJlc291cmNlIiwidmVyc2lvbiIsImJpbXBvcnQiLCJleHBvcnRzIiwiYmV5b25kIiwiZ2xvYmFsVGhpcyIsIl9ldmVudHMiLCJMYW5ndWFnZXMiLCJFdmVudHMiLCJwcm9qZWN0Iiwic3BlY3MiLCJzdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwic3VwcG9ydGVkIiwiZGVmYXVsdCIsImN1cnJlbnQiLCJyZXNvbHZlIiwicmVhZHkiLCJQcm9taXNlIiwiZmV0Y2hlZCIsImNvbnN0cnVjdG9yIiwidGhlbiIsImNvbmZpZyIsInNldHVwIiwiY29uZmlndXJlIiwiI2NvbmZpZ3VyZSIsInZhbHVlIiwibGVuZ3RoIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJsb2ciLCJwcmV2aW91cyIsInRyaWdnZXIiLCJzZXRJdGVtIiwiI3NldHVwIiwidW5kZWZpbmVkIiwiZGVmIiwiQXJyYXkiLCJwdXNoIiwiU2V0IiwiY29uZmlndXJlZCIsImdldEl0ZW0iLCJkZXZpY2UiLCJsb2NhdGlvbiIsIm5hdmlnYXRvciIsImxhbmd1YWdlIiwic3BsaXQiLCJfX2FwcF9wYWNrYWdlIiwic3BlY2lmaWVyIiwibGlzdGVuZXJzIiwiTWFwIiwiZGVzdHJveWVkIiwiRXJyb3IiLCJiaW5kIiwiZXZlbnQiLCJsaXN0ZW5lciIsInByaW9yaXR5Iiwib24iLCJ1bmJpbmQiLCJvZmYiLCJpbmNsdWRlcyIsImwiLCJnZXQiLCJzZXQiLCJmb3JjZSIsImRlbGV0ZSIsImUiLCJmaWx0ZXJlZCIsImZpbHRlciIsIml0ZW0iLCJyZXN0IiwibmFtZSIsImFyZ3MiLCJhcmd1bWVudHMiLCJzaGlmdCIsInNvcnQiLCJhIiwiYiIsImFzeW5jIiwicHJvbWlzZXMiLCJhbGwiLCJjYWxsIiwiY2F0Y2giLCJleGMiLCJlcnJvciIsInN0YWNrIiwiZGVzdHJveSIsImNsZWFyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJDYW5jZWxsYXRpb25Ub2tlbiIsImlkIiwicmVzZXQiLCJjaGVjayIsIlNpbmdsZUNhbGwiLCJ0YXJnZXQiLCJwcm9wZXJ0eUtleSIsImRlc2NyaXB0b3IiLCJvcmlnaW5hbE1ldGhvZCIsIldlYWtNYXAiLCJwcm9taXNlIiwiYXBwbHkiLCJjbGVhbiIsIlBlbmRpbmdQcm9taXNlIiwicmVqZWN0IiwiZXhlY3V0b3IiLCJGdW5jdGlvbiIsInByb2Nlc3MiLCJ3aW5kb3ciXSwic291cmNlcyI6WyIvYmV5b25kLnRzIiwiL2xhbmd1YWdlcy9pbmRleC50cyIsIi91dGlscy9ldmVudHMvZXZlbnRzLnRzIiwiL3R5cGVzLnRzIiwiL3V0aWxzL2V4ZWN1dGlvbi1jb250cm9sL2NhbmNlbGxhdGlvbi10b2tlbi9jYW5jZWxsYXRpb24tdG9rZW4udHMiLCIvdXRpbHMvZXhlY3V0aW9uLWNvbnRyb2wvc2luZ2xlLWNhbGwvc2luZ2xlLWNhbGwudHMiLCIvdXRpbHMvcGVuZGluZy1wcm9taXNlL3BlbmRpbmctcHJvbWlzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxVQUFBLEdBQUFDLE9BQUE7VUFJTSxNQUFPQyxNQUFNO1lBQ2Y7Ozs7WUFJQSxJQUFJQyxTQUFTQSxDQUFBO2NBQ1QsT0FBT0gsVUFBQSxDQUFBRyxTQUFTO1lBQ3BCO1lBRUE7Ozs7Ozs7O1lBUUEsTUFBTUMsTUFBTUEsQ0FBQ0MsUUFBZ0IsRUFBRUMsT0FBZTtjQUMxQyxPQUFPLE1BQU1DLE9BQU8sQ0FBQ0YsUUFBUSxFQUFFQyxPQUFPLENBQUM7WUFDM0M7O1VBQ0hFLE9BQUEsQ0FBQU4sTUFBQSxHQUFBQSxNQUFBO1VBRU07VUFBVyxNQUFNTyxNQUFNLEdBQUFELE9BQUEsQ0FBQUMsTUFBQSxHQUFHLElBQUlQLE1BQU0sQ0FBTixDQUFNO1VBQ3JD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