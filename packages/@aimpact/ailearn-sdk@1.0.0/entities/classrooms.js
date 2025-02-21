System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/groups", "@aimpact/reactive@0.0.1/entities/collection", "@aimpact/http-suite@0.0.1/api"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Classrooms, Classroom, __beyond_pkg, hmr;
  _export({
    Classrooms: void 0,
    Classroom: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnSdk100Groups) {
      dependency_1 = _aimpactAilearnSdk100Groups;
    }, function (_aimpactReactive001EntitiesCollection) {
      dependency_2 = _aimpactReactive001EntitiesCollection;
    }, function (_aimpactHttpSuite001Api) {
      dependency_3 = _aimpactHttpSuite001Api;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/groups', dependency_1], ['@aimpact/reactive/entities/collection', dependency_2], ['@aimpact/http-suite/api', dependency_3]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 2578050612,
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
            load(args = {
              user: false
            }) {
              if (args.user) {
                delete args.user;
                //@ts-ignore;
                return super.load({
                  endpoint: '/users/classrooms',
                  ...args
                });
              }
              return super.load(args);
            }
          }
          exports.Classrooms = Classrooms;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 3808990721,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Classroom = void 0;
          var _groups = require("@aimpact/ailearn-sdk/groups");
          /*bundle */ //your code here
          class Classroom extends _groups.GroupItem {
            #api;
            constructor(args) {
              super('classrooms', {
                ...args,
                properties: ['section', 'external', 'owner', 'assignments', 'organizationId', 'code']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZ3JvdXBzIiwicmVxdWlyZSIsIl9pdGVtIiwiQ2xhc3Nyb29tcyIsIkdyb3VwcyIsImNvbnN0cnVjdG9yIiwiYXJncyIsIkNsYXNzcm9vbSIsImxvYWQiLCJ1c2VyIiwiZW5kcG9pbnQiLCJleHBvcnRzIiwiR3JvdXBJdGVtIiwiYXBpIiwicHJvcGVydGllcyJdLCJzb3VyY2VzIjpbIi9jb2xsZWN0aW9uLnRzIiwiL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFPTyxXQURQO1VBQ2lCLE1BQU9FLFVBQVcsU0FBUUgsT0FBQSxDQUFBSSxNQUFNO1lBQ2hEQyxZQUFZQyxJQUFJO2NBQ2YsS0FBSyxDQUFDLFlBQVksRUFBRUosS0FBQSxDQUFBSyxTQUFTLENBQUM7WUFDL0I7WUFFQUMsSUFBSUEsQ0FBQ0YsSUFBQSxHQUFvQztjQUFFRyxJQUFJLEVBQUU7WUFBSyxDQUFFO2NBQ3ZELElBQUlILElBQUksQ0FBQ0csSUFBSSxFQUFFO2dCQUNkLE9BQU9ILElBQUksQ0FBQ0csSUFBSTtnQkFDaEI7Z0JBQ0EsT0FBTyxLQUFLLENBQUNELElBQUksQ0FBQztrQkFBRUUsUUFBUSxFQUFFLG1CQUFtQjtrQkFBRSxHQUFHSjtnQkFBSSxDQUFFLENBQUM7O2NBRTlELE9BQU8sS0FBSyxDQUFDRSxJQUFJLENBQUNGLElBQUksQ0FBQztZQUN4Qjs7VUFDQUssT0FBQSxDQUFBUixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJELElBQUFILE9BQUEsR0FBQUMsT0FBQTtVQUdPLFlBRFA7VUFDa0IsTUFBT00sU0FBVSxTQUFRUCxPQUFBLENBQUFZLFNBQVM7WUFDbkQsQ0FBQUMsR0FBSTtZQVNKUixZQUFZQyxJQUFLO2NBQ2hCLEtBQUssQ0FBQyxZQUFZLEVBQUU7Z0JBQ25CLEdBQUdBLElBQUk7Z0JBQ1BRLFVBQVUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNO2VBQ3BGLENBQUM7WUFDSDs7VUFDQUgsT0FBQSxDQUFBSixTQUFBLEdBQUFBLFNBQUEiLCJpZ25vcmVMaXN0IjpbXX0=