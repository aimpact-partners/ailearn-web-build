System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/collection", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Assignments, Assignment, __beyond_pkg, hmr;
  _export({
    Assignments: void 0,
    Assignment: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesCollection) {
      dependency_1 = _aimpactAilearnSdk100ReactiveEntitiesCollection;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesItem) {
      dependency_2 = _aimpactAilearnSdk100ReactiveEntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/entities/assignments"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/reactive/entities/collection', dependency_1], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_2]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 4089308580,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = void 0;
          var _collection = require("@aimpact/ailearn-sdk/reactive/entities/collection");
          var _item = require("./item");
          /*bundle*/
          class Assignments extends _collection.Collection {
            constructor() {
              super({
                entity: 'assignments',
                item: _item.Assignment
              });
            }
          }
          exports.Assignments = Assignments;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1074810995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
          /*bundle */
          class Assignment extends _item.Item {
            constructor(args) {
              super({
                entity: 'assignments',
                properties: ['id', 'title', 'description', 'name'],
                ...args
              });
            }
          }
          exports.Assignment = Assignment;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Assignments",
        "name": "Assignments"
      }, {
        "im": "./item",
        "from": "Assignment",
        "name": "Assignment"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Assignments') && _export("Assignments", Assignments = require ? require('./collection').Assignments : value);
        (require || prop === 'Assignment') && _export("Assignment", Assignment = require ? require('./item').Assignment : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsIkFzc2lnbm1lbnQiLCJleHBvcnRzIiwiSXRlbSIsImFyZ3MiLCJwcm9wZXJ0aWVzIl0sInNvdXJjZXMiOlsiL2NvbGxlY3Rpb24udHMiLCIvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQU9FLFdBQVksU0FBUUgsV0FBQSxDQUFBSSxVQUFzQjtZQUNqRUMsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFDTEMsTUFBTSxFQUFFLGFBQWE7Z0JBQ3JCQyxJQUFJLEVBQUVMLEtBQUEsQ0FBQU07ZUFDTixDQUFDO1lBQ0g7O1VBR0FDLE9BQUEsQ0FBQU4sV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pELElBQUFELEtBQUEsR0FBQUQsT0FBQTtVQUNPO1VBQVcsTUFBT08sVUFBVyxTQUFRTixLQUFBLENBQUFRLElBQUk7WUFDL0NMLFlBQVlNLElBQUk7Y0FDZixLQUFLLENBQUM7Z0JBQ0xMLE1BQU0sRUFBRSxhQUFhO2dCQUNyQk0sVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDO2dCQUNsRCxHQUFHRDtlQUNILENBQUM7WUFDSDs7VUFDQUYsT0FBQSxDQUFBRCxVQUFBLEdBQUFBLFVBQUEiLCJpZ25vcmVMaXN0IjpbXX0=