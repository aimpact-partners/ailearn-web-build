System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, ReactiveConfig, TCustomAdapter, IConfig, __beyond_pkg, hmr;
  _export({
    ReactiveConfig: void 0,
    TCustomAdapter: void 0,
    IConfig: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["dexie", "3.2.3"], ["uuid", "9.0.0"], ["@beyond-js/ssr", "0.1.2"], ["@types/dexie", "1.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.0"], ["@types/react-dom", "18.2.0"], ["sqlite", "4.1.2"], ["sqlite3", "5.1.6"], ["@beyond-js/reactive", "1.1.12"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.1.12/settings"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3044010697,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactiveConfig = void 0;
          /*bundle */
          class ReactiveConfig {
            static #config;
            static adapter = 'legacy';
            static set(config) {
              this.#config = config;
              const properties = Object.keys(config);
              properties.forEach(property => {
                ReactiveConfig[property] = config[property];
              });
            }
          }
          // ReactiveConfig.set({adapter: 'default'});
          exports.ReactiveConfig = ReactiveConfig;
        }
      });

      /***************************
      INTERNAL MODULE: ./interface
      ***************************/

      ims.set('./interface', {
        hash: 2607228355,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ReactiveConfig",
        "name": "ReactiveConfig"
      }, {
        "im": "./interface",
        "from": "TCustomAdapter",
        "name": "TCustomAdapter"
      }, {
        "im": "./interface",
        "from": "IConfig",
        "name": "IConfig"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ReactiveConfig') && _export("ReactiveConfig", ReactiveConfig = require ? require('./index').ReactiveConfig : value);
        (require || prop === 'TCustomAdapter') && _export("TCustomAdapter", TCustomAdapter = require ? require('./interface').TCustomAdapter : value);
        (require || prop === 'IConfig') && _export("IConfig", IConfig = require ? require('./interface').IConfig : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdGl2ZUNvbmZpZyIsImNvbmZpZyIsImFkYXB0ZXIiLCJzZXQiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImV4cG9ydHMiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL2ludGVyZmFjZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFTztVQUFXLE1BQU9BLGNBQWM7WUFDdEMsT0FBTyxDQUFBQyxNQUFPO1lBQ2QsT0FBT0MsT0FBTyxHQUF1QixRQUFRO1lBQzdDLE9BQU9DLEdBQUdBLENBQUNGLE1BQWU7Y0FDekIsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixNQUFNRyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDTCxNQUFNLENBQUM7Y0FDdENHLFVBQVUsQ0FBQ0csT0FBTyxDQUFDQyxRQUFRLElBQUc7Z0JBQzdCUixjQUFjLENBQUNRLFFBQVEsQ0FBQyxHQUFHUCxNQUFNLENBQUNPLFFBQVEsQ0FBQztjQUM1QyxDQUFDLENBQUM7WUFDSDs7VUFJRDtVQUFBQyxPQUFBLENBQUFULGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7VUNmQTs7VUFFQUssTUFBQSxDQUFBSyxjQUFBLENBQUFELE9BQUE7WUFDQUUsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119