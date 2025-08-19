System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-sdk@1.2.0/groups", "@beyond-js/reactive@2.1.1/entities/collection", "@beyond-js/http-suite@0.1.1/api"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Classrooms, Classroom, __beyond_pkg, hmr;
  _export({
    Classrooms: void 0,
    Classroom: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnSdk120Groups) {
      dependency_1 = _aimpactAilearnSdk120Groups;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_2 = _beyondJsReactive211EntitiesCollection;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_3 = _beyondJsHttpSuite011Api;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/entities/classrooms"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/groups', dependency_1], ['@beyond-js/reactive/entities/collection', dependency_2], ['@beyond-js/http-suite/api', dependency_3]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 280242697,
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
        hash: 341192155,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZ3JvdXBzIiwicmVxdWlyZSIsIl9pdGVtIiwiQ2xhc3Nyb29tcyIsIkdyb3VwcyIsImNvbnN0cnVjdG9yIiwiYXJncyIsIkNsYXNzcm9vbSIsImxvYWQiLCJ1c2VyIiwiZW5kcG9pbnQiLCJleHBvcnRzIiwiR3JvdXBJdGVtIiwiYXBpIiwicHJvcGVydGllcyJdLCJzb3VyY2VzIjpbIi8vY29sbGVjdGlvbi50cy8iLCIvL2l0ZW0udHMvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBT08sV0FEUDtVQUNpQixNQUFPRSxVQUFXLFNBQVFILE9BQUEsQ0FBQUksTUFBTTtZQUNoREMsWUFBWUMsSUFBSTtjQUNmLEtBQUssQ0FBQyxZQUFZLEVBQUVKLEtBQUEsQ0FBQUssU0FBUyxDQUFDO1lBQy9CO1lBRUFDLElBQUlBLENBQUNGLElBQUEsR0FBb0M7Y0FBRUcsSUFBSSxFQUFFO1lBQUssQ0FBRTtjQUN2RCxJQUFJSCxJQUFJLENBQUNHLElBQUksRUFBRTtnQkFDZCxPQUFPSCxJQUFJLENBQUNHLElBQUk7Z0JBQ2hCO2dCQUNBLE9BQU8sS0FBSyxDQUFDRCxJQUFJLENBQUM7a0JBQUVFLFFBQVEsRUFBRSxtQkFBbUI7a0JBQUUsR0FBR0o7Z0JBQUksQ0FBRSxDQUFDOztjQUU5RCxPQUFPLEtBQUssQ0FBQ0UsSUFBSSxDQUFDRixJQUFJLENBQUM7WUFDeEI7O1VBQ0FLLE9BQUEsQ0FBQVIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRCxJQUFBSCxPQUFBLEdBQUFDLE9BQUE7VUFHTyxZQURQO1VBQ2tCLE1BQU9NLFNBQVUsU0FBUVAsT0FBQSxDQUFBWSxTQUFTO1lBQ25ELENBQUFDLEdBQUk7WUFTSlIsWUFBWUMsSUFBSztjQUNoQixLQUFLLENBQUMsWUFBWSxFQUFFO2dCQUNuQixHQUFHQSxJQUFJO2dCQUNQUSxVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTTtlQUNwRixDQUFDO1lBQ0g7O1VBQ0FILE9BQUEsQ0FBQUosU0FBQSxHQUFBQSxTQUFBIiwiaWdub3JlTGlzdCI6W119