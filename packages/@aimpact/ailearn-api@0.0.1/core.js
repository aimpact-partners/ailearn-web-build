System.register(["@beyond-js/backend@0.1.8/client", "@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ActionsBridge, ims, ClassesProvider, __beyond_pkg, hmr;
  _export("ClassesProvider", void 0);
  return {
    setters: [function (_beyondJsBackend018Client) {
      dependency_0 = _beyondJsBackend018Client;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@types/express", "4.17.17"], ["dotenv", "16.3.1"], ["express", "4.18.2"], ["firebase-admin", "11.10.1"], ["node-fetch", "3.3.1"], ["openai", "3.3.0"], ["react", "18.2.0"], ["socket.io-client", "4.7.1"], ["@aimpact/ailearn-api", "0.0.1"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-api@0.0.1/core"
        },
        "type": "bridge"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/backend/client', dependency_0]]);
      ({
        ActionsBridge
      } = brequire('@beyond-js/backend/client'));
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2300417124,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassesProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class ClassesProvider extends ActionsBridge {
            async generate(id, curriculumObjective, params) {
              return await this.execute("index//ClassesProvider//generate", ...arguments);
            }
            async generateAll(id, curriculumObjective, topics) {
              return await this.execute("index//ClassesProvider//generateAll", ...arguments);
            }
            async load(specs) {
              return await this.execute("index//ClassesProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("index//ClassesProvider//publish", ...arguments);
            }
            async list() {
              return await this.execute("index//ClassesProvider//list", ...arguments);
            }
            async access({
              userId,
              classId
            }) {
              return await this.execute("index//ClassesProvider//access", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.ClassesProvider = ClassesProvider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ClassesProvider",
        "name": "ClassesProvider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ClassesProvider') && _export("ClassesProvider", ClassesProvider = require ? require('./index').ClassesProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBV08sWUFBWTtVQUFVLE1BQU9BLGVBQWdCLFNBQVFDLGFBQWE7WUFDckUsTUFBTUMsUUFBUSxDQUFDQyxFQUFFLEVBQUVDLG1CQUEyQixFQUFFQyxNQUF3QjtjQUNwRSxPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsa0NBQWtDLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQy9FO1lBQ0EsTUFBTUMsV0FBVyxDQUFDTCxFQUFFLEVBQUVDLG1CQUEyQixFQUFFSyxNQUFnQjtjQUMvRCxPQUFPLE1BQU0sSUFBSSxDQUFDSCxPQUFPLENBQUMscUNBQXFDLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ2xGO1lBQ0EsTUFBTUcsSUFBSSxDQUFDQyxLQUFLO2NBQ1osT0FBTyxNQUFNLElBQUksQ0FBQ0wsT0FBTyxDQUFDLDhCQUE4QixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUMzRTtZQUNBLE1BQU1LLE9BQU8sQ0FBQ0MsSUFBSTtjQUNkLE9BQU8sTUFBTSxJQUFJLENBQUNQLE9BQU8sQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDOUU7WUFDQSxNQUFNTyxJQUFJO2NBQ04sT0FBTyxNQUFNLElBQUksQ0FBQ1IsT0FBTyxDQUFDLDhCQUE4QixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUMzRTtZQUNBLE1BQU1RLE1BQU0sQ0FBQztjQUFFQyxNQUFNO2NBQUVDO1lBQU8sQ0FBRTtjQUM1QixPQUFPLE1BQU0sSUFBSSxDQUFDWCxPQUFPLENBQUMsZ0NBQWdDLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQzdFO1lBQ0FXO2NBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRUMsc0JBQU0sQ0FBQztZQUM1Qjs7VUFDSEMiLCJuYW1lcyI6WyJDbGFzc2VzUHJvdmlkZXIiLCJBY3Rpb25zQnJpZGdlIiwiZ2VuZXJhdGUiLCJpZCIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJwYXJhbXMiLCJleGVjdXRlIiwiYXJndW1lbnRzIiwiZ2VuZXJhdGVBbGwiLCJ0b3BpY3MiLCJsb2FkIiwic3BlY3MiLCJwdWJsaXNoIiwiZGF0YSIsImxpc3QiLCJhY2Nlc3MiLCJ1c2VySWQiLCJjbGFzc0lkIiwiY29uc3RydWN0b3IiLCJidW5kbGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==