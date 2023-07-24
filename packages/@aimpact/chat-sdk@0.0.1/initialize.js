System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.2/database"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, initDB, __beyond_pkg, hmr;
  _export("initDB", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive112Database) {
      dependency_1 = _beyondJsReactive112Database;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["socket.io-client", "4.7.1"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@0.0.1/initialize"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/database', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3247047778,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.initDB = void 0;
          var _database = require("@beyond-js/reactive/database");
          async function initialize() {
            try {
              const db = await _database.DBManager.config('chat-api@7', {
                Chat: 'id, name, userId, category, usage, system, knowledgeBoxId',
                User: 'id',
                Messages: 'id, chatId, userId, text, role, usage, timestamp',
                AudioRecords: 'id, messageId',
                KnowledgeBases: 'id, userId',
                KnowledgeBoxes: 'id, userId',
                SharedKnowledgeBases: 'id, knowledgeBaseId, sharedWithUserId',
                Documents: 'id, knowledgeBaseId',
                Classes: 'id, title, description'
              });
              // For example, if you have user data to add you can use:
              // db.Chat.bulkAdd(chats);
            } catch (e) {
              console.trace('error', e);
            }
          }
          /*bundle */
          const initDB = initialize;
          exports.initDB = initDB;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "initDB",
        "name": "initDB"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'initDB') && _export("initDB", initDB = require ? require('./index').initDB : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRUEsZUFBZUEsVUFBVTtZQUN4QixJQUFJO2NBQ0gsTUFBTUMsRUFBRSxHQUFHLE1BQU1DLG1CQUFTLENBQUNDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQy9DQyxJQUFJLEVBQUUsMkRBQTJEO2dCQUNqRUMsSUFBSSxFQUFFLElBQUk7Z0JBQ1ZDLFFBQVEsRUFBRSxrREFBa0Q7Z0JBQzVEQyxZQUFZLEVBQUUsZUFBZTtnQkFDN0JDLGNBQWMsRUFBRSxZQUFZO2dCQUM1QkMsY0FBYyxFQUFFLFlBQVk7Z0JBQzVCQyxvQkFBb0IsRUFBRSx1Q0FBdUM7Z0JBQzdEQyxTQUFTLEVBQUUscUJBQXFCO2dCQUNoQ0MsT0FBTyxFQUFFO2VBQ1QsQ0FBQztjQUVGO2NBQ0E7YUFDQSxDQUFDLE9BQU9DLENBQUMsRUFBRTtjQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxPQUFPLEVBQUVGLENBQUMsQ0FBQzs7VUFFM0I7VUFFTztVQUFZLE1BQU1HLE1BQU0sR0FBR2hCLFVBQVU7VUFBQ2lCIiwibmFtZXMiOlsiaW5pdGlhbGl6ZSIsImRiIiwiREJNYW5hZ2VyIiwiY29uZmlnIiwiQ2hhdCIsIlVzZXIiLCJNZXNzYWdlcyIsIkF1ZGlvUmVjb3JkcyIsIktub3dsZWRnZUJhc2VzIiwiS25vd2xlZGdlQm94ZXMiLCJTaGFyZWRLbm93bGVkZ2VCYXNlcyIsIkRvY3VtZW50cyIsIkNsYXNzZXMiLCJlIiwiY29uc29sZSIsInRyYWNlIiwiaW5pdERCIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=