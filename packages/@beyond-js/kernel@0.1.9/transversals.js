System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, Transversal, __beyond_pkg, hmr;
  _export("Transversal", void 0);
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
          "vspecifier": "@beyond-js/kernel@0.1.9/transversals"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /******************************
      INTERNAL MODULE: ./dependencies
      ******************************/
      ims.set('./dependencies', {
        hash: 916907578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          class _default extends Map {
            update(deps) {
              this.clear();
              deps?.forEach(([specifier, dependency]) => this.set(specifier, dependency));
            }
          }
          exports.default = _default;
        }
      });

      /*****************************
      INTERNAL MODULE: ./transversal
      *****************************/

      ims.set('./transversal', {
        hash: 2292377186,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Transversal = void 0;
          var _bundle = require("@beyond-js/kernel/bundle");
          var _dependencies = require("./dependencies");
          /*bundle*/
          class Transversal {
            #name;
            get name() {
              return this.#name;
            }
            #language;
            get language() {
              return this.#language;
            }
            #bundles = new Map();
            get bundles() {
              return this.#bundles;
            }
            #dependencies = new _dependencies.default();
            get dependencies() {
              return this.#dependencies;
            }
            constructor(name, language) {
              this.#name = name;
              this.#language = language;
            }
            #initialised = false;
            initialise(bundles) {
              if (this.#initialised) throw new Error(`Transversal "${this.#name}" already initialised`);
              this.#initialised = true;
              const packages = new Map();
              /**
               * First create the bundles and then initialize them,
               * to allow dependencies among bundles of the same traversal
               */
              bundles.forEach(([specs, creator]) => {
                const pkg = new _bundle.Bundle(specs).package(this.#language);
                const ims = new Map(); // The internal modules map
                const exports = {}; // The exports.managed function
                // Execute the bundle creation function
                const response = creator(ims, exports);
                const {
                  dependencies
                } = response ? response : {
                  dependencies: void 0
                };
                // Set the descriptor of the exports
                pkg.exports.descriptor = exports.descriptor;
                // Store the package and its dependencies to register the dependencies once all the bundles
                // of the transversal are created
                packages.set(pkg.specifier, {
                  pkg,
                  dependencies,
                  ims
                });
              });
              /**
               * Once all the bundles of the transversal are created,
               * then register all the dependencies of the packages
               */
              packages.forEach(({
                pkg,
                dependencies,
                ims
              }) => {
                const register = (() => {
                  const register = [];
                  dependencies?.forEach(specifier => {
                    if (this.#dependencies.has(specifier)) {
                      register.push([specifier, this.#dependencies.get(specifier)]);
                      return;
                    }
                    // Check if dependency is a bundle of the transversal
                    if (!packages.has(specifier)) {
                      const data = `\n\tDependencies: ${JSON.stringify([...this.#dependencies.keys()])}. ` + `\n\tBundles: ${JSON.stringify([...packages.keys()])}`;
                      throw new Error(`Dependency "${specifier}" not found on "${this.#name}" transversal. ${data}`);
                    }
                    const {
                      pkg
                    } = packages.get(specifier);
                    register.push([specifier, pkg.exports.values]);
                  });
                  return register;
                })();
                packages.forEach(({
                  pkg
                }) => this.#bundles.set(pkg.specifier, pkg.exports.values));
                register && pkg.dependencies.update(register);
                // Register the ims, but do not initialise them until all bundles of the transversal are set
                // To allow dependencies among bundles
                pkg.ims.register(ims);
              });
              packages.forEach(({
                pkg
              }) => !pkg.initialised && pkg.initialise());
            }
          }
          exports.Transversal = Transversal;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./transversal",
        "from": "Transversal",
        "name": "Transversal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Transversal') && _export("Transversal", Transversal = require ? require('./transversal').Transversal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsIk1hcCIsInVwZGF0ZSIsImRlcHMiLCJjbGVhciIsImZvckVhY2giLCJzcGVjaWZpZXIiLCJkZXBlbmRlbmN5Iiwic2V0IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJfYnVuZGxlIiwicmVxdWlyZSIsIl9kZXBlbmRlbmNpZXMiLCJUcmFuc3ZlcnNhbCIsIm5hbWUiLCJsYW5ndWFnZSIsImJ1bmRsZXMiLCJkZXBlbmRlbmNpZXMiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxpc2VkIiwiaW5pdGlhbGlzZSIsIkVycm9yIiwicGFja2FnZXMiLCJzcGVjcyIsImNyZWF0b3IiLCJwa2ciLCJCdW5kbGUiLCJwYWNrYWdlIiwiaW1zIiwicmVzcG9uc2UiLCJkZXNjcmlwdG9yIiwicmVnaXN0ZXIiLCJoYXMiLCJwdXNoIiwiZ2V0IiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJrZXlzIiwidmFsdWVzIl0sInNvdXJjZXMiOlsiL2RlcGVuZGVuY2llcy50cyIsIi90cmFuc3ZlcnNhbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFjLE1BQUFBLFFBQUEsU0FBZUMsR0FBZ0I7WUFDekNDLE1BQU1BLENBQUNDLElBQXNCO2NBQ3pCLElBQUksQ0FBQ0MsS0FBSyxFQUFFO2NBQ1pELElBQUksRUFBRUUsT0FBTyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxFQUFFQyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0YsU0FBUyxFQUFFQyxVQUFVLENBQUMsQ0FBQztZQUMvRTs7VUFDSEUsT0FBQSxDQUFBQyxPQUFBLEdBQUFWLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTEQsSUFBQVcsT0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBUU87VUFBVSxNQUNYRSxXQUFXO1lBQ0osQ0FBQUMsSUFBSztZQUNkLElBQUlB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