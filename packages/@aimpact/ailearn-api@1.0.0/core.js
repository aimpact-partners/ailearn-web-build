System.register(["@beyond-js/backend@0.1.8/client", "@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ActionsBridge, ims, GClassesProvider, LessonsProvider, SessionsProvider, __beyond_pkg, hmr;
  _export({
    GClassesProvider: void 0,
    LessonsProvider: void 0,
    SessionsProvider: void 0
  });
  return {
    setters: [function (_beyondJsBackend018Client) {
      dependency_0 = _beyondJsBackend018Client;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.1"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@google-cloud/tasks", "3.2.0"], ["@google-cloud/storage", "7.0.1"], ["form-data", "4.0.0"], ["dotenv", "16.3.1"], ["express", "4.18.2"], ["express-openapi-validator", "5.0.6"], ["firebase-admin", "11.10.1"], ["googleapis", "122.0.0"], ["node-fetch", "2.6.13"], ["openai", "4.2.0"], ["react", "18.2.0"], ["uuid", "9.0.0"], ["busboy", "1.6.0"], ["firebase", "9.23.0"], ["socket.io-client", "4.7.2"], ["@google-cloud/text-to-speech", "5.0.1"], ["@beyond-js/bee", "0.0.6"], ["@types/express", "4.17.17"], ["@types/node", "20.6.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-api@1.0.0/core"
        },
        "type": "bridge"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/backend/client', dependency_0]]);
      ({
        ActionsBridge
      } = brequire('@beyond-js/backend/client'));
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./gclasess
      **************************/
      ims.set('./gclasess', {
        hash: 3517322823,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClassesProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class GClassesProvider extends ActionsBridge {
            async load(specs) {
              return await this.execute("gclasess//GClassesProvider//load", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.GClassesProvider = GClassesProvider;
        }
      });

      /************************
      INTERNAL MODULE: ./lesson
      ************************/

      ims.set('./lesson', {
        hash: 2091820595,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonsProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class LessonsProvider extends ActionsBridge {
            async load(specs) {
              return await this.execute("lesson//LessonsProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("lesson//LessonsProvider//publish", ...arguments);
            }
            async list(specs) {
              return await this.execute("lesson//LessonsProvider//list", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.LessonsProvider = LessonsProvider;
        }
      });

      /*************************
      INTERNAL MODULE: ./session
      *************************/

      ims.set('./session', {
        hash: 2091239707,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SessionsProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class SessionsProvider extends ActionsBridge {
            async load(specs) {
              return await this.execute("session//SessionsProvider//load", ...arguments);
            }
            async publish(lessonId, classRoomId) {
              return await this.execute("session//SessionsProvider//publish", ...arguments);
            }
            async access(id, userId) {
              return await this.execute("session//SessionsProvider//access", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.SessionsProvider = SessionsProvider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./gclasess",
        "from": "GClassesProvider",
        "name": "GClassesProvider"
      }, {
        "im": "./lesson",
        "from": "LessonsProvider",
        "name": "LessonsProvider"
      }, {
        "im": "./session",
        "from": "SessionsProvider",
        "name": "SessionsProvider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'GClassesProvider') && _export("GClassesProvider", GClassesProvider = require ? require('./gclasess').GClassesProvider : value);
        (require || prop === 'LessonsProvider') && _export("LessonsProvider", LessonsProvider = require ? require('./lesson').LessonsProvider : value);
        (require || prop === 'SessionsProvider') && _export("SessionsProvider", SessionsProvider = require ? require('./session').SessionsProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiR0NsYXNzZXNQcm92aWRlciIsIkFjdGlvbnNCcmlkZ2UiLCJsb2FkIiwic3BlY3MiLCJleGVjdXRlIiwiYXJndW1lbnRzIiwiY29uc3RydWN0b3IiLCJidW5kbGUiLCJleHBvcnRzIiwiTGVzc29uc1Byb3ZpZGVyIiwicHVibGlzaCIsImRhdGEiLCJsaXN0IiwiU2Vzc2lvbnNQcm92aWRlciIsImxlc3NvbklkIiwiY2xhc3NSb29tSWQiLCJhY2Nlc3MiLCJpZCIsInVzZXJJZCJdLCJzb3VyY2VzIjpbIi9nY2xhc2Vzcy50cyIsIi9sZXNzb24udHMiLCIvc2Vzc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsZUFBQSxHQUFBQyxPQUFBO1VBU08sWUFBWTtVQUFVLE1BQU9DLGdCQUFpQixTQUFRQyxhQUFhO1lBQ3RFLE1BQU1DLElBQUlBLENBQUNDLEtBQUs7Y0FDWixPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsa0NBQWtDLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQy9FO1lBQ0FDLFlBQUE7Y0FDSSxLQUFLLENBQUMsU0FBUyxFQUFFUixlQUFBLENBQUFTLE1BQU0sQ0FBQztZQUM1Qjs7VUFDSEMsT0FBQSxDQUFBUixnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkQsSUFBQUYsZUFBQSxHQUFBQyxPQUFBO1VBV08sWUFBWTtVQUFVLE1BQU9VLGVBQWdCLFNBQVFSLGFBQWE7WUFDckUsTUFBTUMsSUFBSUEsQ0FBQ0MsS0FBSztjQUNaLE9BQU8sTUFBTSxJQUFJLENBQUNDLE9BQU8sQ0FBQywrQkFBK0IsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDNUU7WUFDQSxNQUFNSyxPQUFPQSxDQUFDQyxJQUFJO2NBQ2QsT0FBTyxNQUFNLElBQUksQ0FBQ1AsT0FBTyxDQUFDLGtDQUFrQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUMvRTtZQUNBLE1BQU1PLElBQUlBLENBQUNULEtBQUs7Y0FDWixPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsK0JBQStCLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQzVFO1lBQ0FDLFlBQUE7Y0FDSSxLQUFLLENBQUMsU0FBUyxFQUFFUixlQUFBLENBQUFTLE1BQU0sQ0FBQztZQUM1Qjs7VUFDSEMsT0FBQSxDQUFBQyxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJELElBQUFYLGVBQUEsR0FBQUMsT0FBQTtVQVVPLFlBQVk7VUFBVSxNQUFPYyxnQkFBaUIsU0FBUVosYUFBYTtZQUN0RSxNQUFNQyxJQUFJQSxDQUFDQyxLQUFLO2NBQ1osT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUM5RTtZQUNBLE1BQU1LLE9BQU9BLENBQUNJLFFBQWdCLEVBQUVDLFdBQW1CO2NBQy9DLE9BQU8sTUFBTSxJQUFJLENBQUNYLE9BQU8sQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDakY7WUFDQSxNQUFNVyxNQUFNQSxDQUFDQyxFQUFVLEVBQUVDLE1BQWM7Y0FDbkMsT0FBTyxNQUFNLElBQUksQ0FBQ2QsT0FBTyxDQUFDLG1DQUFtQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUNoRjtZQUNBQyxZQUFBO2NBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRVIsZUFBQSxDQUFBUyxNQUFNLENBQUM7WUFDNUI7O1VBQ0hDLE9BQUEsQ0FBQUssZ0JBQUEsR0FBQUEsZ0JBQUEifQ==