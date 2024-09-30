System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/groups", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Classrooms, Classroom, __beyond_pkg, hmr;
  _export({
    Classrooms: void 0,
    Classroom: void 0
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
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/entities/classrooms"
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
        hash: 3035970361,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Classrooms = void 0;
          var _groups = require("@aimpact/ailearn-sdk/groups");
          var _item = require("./item");
          /*bundle*/ //your code here
          class Classrooms extends _groups.Groups {
            constructor(args) {
              super('classrooms', _item.Classroom);
            }
          }
          exports.Classrooms = Classrooms;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 3650053651,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Classroom = void 0;
          var _groups = require("@aimpact/ailearn-sdk/groups");
          /*bundle */ //your code here
          class Classroom extends _groups.GroupItem {
            constructor(args) {
              super('classrooms', {
                ...args,
                properties: ['section', 'external', 'owner', 'assignments', 'organizationId']
              });
            }
          }
          exports.Classroom = Classroom;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Classrooms",
        "name": "Classrooms"
      }, {
        "im": "./item",
        "from": "Classroom",
        "name": "Classroom"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Classrooms') && _export("Classrooms", Classrooms = require ? require('./collection').Classrooms : value);
        (require || prop === 'Classroom') && _export("Classroom", Classroom = require ? require('./item').Classroom : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZ3JvdXBzIiwicmVxdWlyZSIsIl9pdGVtIiwiQ2xhc3Nyb29tcyIsIkdyb3VwcyIsImNvbnN0cnVjdG9yIiwiYXJncyIsIkNsYXNzcm9vbSIsImV4cG9ydHMiLCJHcm91cEl0ZW0iLCJwcm9wZXJ0aWVzIl0sInNvdXJjZXMiOlsiL2NvbGxlY3Rpb24udHMiLCIvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFHTyxXQURQO1VBQ2lCLE1BQU9FLFVBQVcsU0FBUUgsT0FBQSxDQUFBSSxNQUFNO1lBQ2hEQyxZQUFZQyxJQUFJO2NBQ2YsS0FBSyxDQUFDLFlBQVksRUFBRUosS0FBQSxDQUFBSyxTQUFTLENBQUM7WUFDL0I7O1VBQ0FDLE9BQUEsQ0FBQUwsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BELElBQUFILE9BQUEsR0FBQUMsT0FBQTtVQUdPLFlBRFA7VUFDa0IsTUFBT00sU0FBVSxTQUFRUCxPQUFBLENBQUFTLFNBQVM7WUFDbkRKLFlBQVlDLElBQUs7Y0FDaEIsS0FBSyxDQUFDLFlBQVksRUFBRTtnQkFDbkIsR0FBR0EsSUFBSTtnQkFDUEksVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGdCQUFnQjtlQUM1RSxDQUFDO1lBQ0g7O1VBQ0FGLE9BQUEsQ0FBQUQsU0FBQSxHQUFBQSxTQUFBIiwiaWdub3JlTGlzdCI6W119