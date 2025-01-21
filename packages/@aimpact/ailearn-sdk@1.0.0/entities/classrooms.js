System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/groups", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/http-suite@0.0.1/api"], function (_export, _context) {
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
    }, function (_aimpactAilearnSdk100Config) {
      dependency_2 = _aimpactAilearnSdk100Config;
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
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/groups', dependency_1], ['@aimpact/ailearn-sdk/config', dependency_2], ['@aimpact/http-suite/api', dependency_3]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 389000816,
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
        hash: 4045421608,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Classroom = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _groups = require("@aimpact/ailearn-sdk/groups");
          var _api = require("@aimpact/http-suite/api");
          /*bundle */ //your code here
          class Classroom extends _groups.GroupItem {
            #api;
            // declare load: () => Promise<void>;
            #assignments = [];
            constructor(args) {
              super('classrooms', {
                ...args,
                properties: ['section', 'external', 'owner', 'assignments', 'organizationId', 'code']
              });
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZ3JvdXBzIiwicmVxdWlyZSIsIl9pdGVtIiwiQ2xhc3Nyb29tcyIsIkdyb3VwcyIsImNvbnN0cnVjdG9yIiwiYXJncyIsIkNsYXNzcm9vbSIsImxvYWQiLCJ1c2VyIiwiZW5kcG9pbnQiLCJleHBvcnRzIiwiX2NvbmZpZyIsIl9hcGkiLCJHcm91cEl0ZW0iLCJhcGkiLCJhc3NpZ25tZW50cyIsInByb3BlcnRpZXMiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iXSwic291cmNlcyI6WyIvY29sbGVjdGlvbi50cyIsIi9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBR08sV0FEUDtVQUNpQixNQUFPRSxVQUFXLFNBQVFILE9BQUEsQ0FBQUksTUFBTTtZQUNoREMsWUFBWUMsSUFBSTtjQUNmLEtBQUssQ0FBQyxZQUFZLEVBQUVKLEtBQUEsQ0FBQUssU0FBUyxDQUFDO1lBQy9CO1lBRUFDLElBQUlBLENBQUNGLElBQUksR0FBRztjQUFFRyxJQUFJLEVBQUU7WUFBSyxDQUFFO2NBQzFCLElBQUlILElBQUksQ0FBQ0csSUFBSSxFQUFFO2dCQUNkLE9BQU9ILElBQUksQ0FBQ0csSUFBSTtnQkFDaEI7Z0JBQ0EsT0FBTyxLQUFLLENBQUNELElBQUksQ0FBQztrQkFBRUUsUUFBUSxFQUFFLG1CQUFtQjtrQkFBRSxHQUFHSjtnQkFBSSxDQUFFLENBQUM7O2NBRTlELE9BQU8sS0FBSyxDQUFDRSxJQUFJLENBQUNGLElBQUksQ0FBQztZQUN4Qjs7VUFDQUssT0FBQSxDQUFBUixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJELElBQUFTLE9BQUEsR0FBQVgsT0FBQTtVQUNBLElBQUFELE9BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFZLElBQUEsR0FBQVosT0FBQTtVQUVPLFlBRFA7VUFDa0IsTUFBT00sU0FBVSxTQUFRUCxPQUFBLENBQUFjLFNBQVM7WUFDbkQsQ0FBQUMsR0FBSTtZQUNKO1lBRUEsQ0FBQUMsV0FBWSxHQUFVLEVBQUU7WUFFeEJYLFlBQVlDLElBQUs7Y0FDaEIsS0FBSyxDQUFDLFlBQVksRUFBRTtnQkFDbkIsR0FBR0EsSUFBSTtnQkFDUFcsVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU07ZUFDcEYsQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBRixHQUFJLEdBQUcsSUFBSUYsSUFBQSxDQUFBSyxHQUFHLENBQUNOLE9BQUEsQ0FBQU8sT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1lBQ2hEOztVQUNBWCxPQUFBLENBQUFKLFNBQUEsR0FBQUEsU0FBQSIsImlnbm9yZUxpc3QiOltdfQ==