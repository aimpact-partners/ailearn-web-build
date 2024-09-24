System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/groups", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Organizations, Organization, __beyond_pkg, hmr;
  _export({
    Organizations: void 0,
    Organization: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnSdk100Groups) {
      dependency_1 = _aimpactAilearnSdk100Groups;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesItem) {
      dependency_2 = _aimpactAilearnSdk100ReactiveEntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.9"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/entities/organizations"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/groups', dependency_1], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_2]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 1470987630,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organizations = void 0;
          var _groups = require("@aimpact/ailearn-sdk/groups");
          var _item = require("./item");
          /*bundle */ //your code here
          class Organizations extends _groups.Groups {
            constructor(args) {
              super('organizations', _item.Organization);
            }
          }
          exports.Organizations = Organizations;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1381896525,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organization = void 0;
          var _groups = require("@aimpact/ailearn-sdk/groups");
          /*bundle */ //your code here
          class Organization extends _groups.GroupItem {
            constructor(args) {
              super('organizations', {
                ...args,
                properties: ['address', 'type', 'educationalLevel', 'coins']
              });
            }
          }
          exports.Organization = Organization;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Organizations",
        "name": "Organizations"
      }, {
        "im": "./item",
        "from": "Organization",
        "name": "Organization"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Organizations') && _export("Organizations", Organizations = require ? require('./collection').Organizations : value);
        (require || prop === 'Organization') && _export("Organization", Organization = require ? require('./item').Organization : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZ3JvdXBzIiwicmVxdWlyZSIsIl9pdGVtIiwiT3JnYW5pemF0aW9ucyIsIkdyb3VwcyIsImNvbnN0cnVjdG9yIiwiYXJncyIsIk9yZ2FuaXphdGlvbiIsImV4cG9ydHMiLCJHcm91cEl0ZW0iLCJwcm9wZXJ0aWVzIl0sInNvdXJjZXMiOlsiL2NvbGxlY3Rpb24udHMiLCIvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFHTyxZQURQO1VBQ2tCLE1BQU9FLGFBQWMsU0FBUUgsT0FBQSxDQUFBSSxNQUFNO1lBQ3BEQyxZQUFZQyxJQUFJO2NBQ2YsS0FBSyxDQUFDLGVBQWUsRUFBRUosS0FBQSxDQUFBSyxZQUFZLENBQUM7WUFDckM7O1VBQ0FDLE9BQUEsQ0FBQUwsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BELElBQUFILE9BQUEsR0FBQUMsT0FBQTtVQUdPLFlBRFA7VUFDa0IsTUFBT00sWUFBYSxTQUFRUCxPQUFBLENBQUFTLFNBQVM7WUFDdERKLFlBQVlDLElBQUs7Y0FDaEIsS0FBSyxDQUFDLGVBQWUsRUFBRTtnQkFDdEIsR0FBR0EsSUFBSTtnQkFDUEksVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxPQUFPO2VBQzNELENBQUM7WUFDSDs7VUFHQUYsT0FBQSxDQUFBRCxZQUFBLEdBQUFBLFlBQUEiLCJpZ25vcmVMaXN0IjpbXX0=