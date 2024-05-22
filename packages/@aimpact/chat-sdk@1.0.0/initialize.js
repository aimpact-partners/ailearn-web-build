System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/database"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, initDB, __beyond_pkg, hmr;
  _export("initDB", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1112Database) {
      dependency_1 = _beyondJsReactive1112Database;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.33.dev-01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.0/initialize"
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
        hash: 2433822787,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.initDB = void 0;
          var _database = require("@beyond-js/reactive/database");
          async function initialize() {
            try {
              const db = await _database.DBManager.config('chat-api@26', {
                Activities: 'id',
                Assignments: 'id, name',
                Chat: 'id, name, userId, category, usage, system, knowledgeBoxId',
                Classrooms: 'id, name',
                Conversations: 'id, name, userId, system',
                Documents: 'id, knowledgeBaseId',
                KnowledgeBoxes: 'id, userId',
                Messages: 'id,  chatId, userId, text, role, usage, timestamp',
                Modules: 'id, type, timeCreated, timeUpdated',
                Organizations: 'id',
                Projects: 'id, project',
                PromptCategories: 'id',
                Prompts: 'id',
                SharedKnowledgeBases: 'id, knowledgeBaseId, sharedWithUserId',
                Sessions: 'id,  classRoomId',
                StudentsHome: 'id',
                Topics: 'id,  title',
                User: 'id'
              });
              // For example, if you have user data to add you can use:
              // db.Chat.bulkAdd(chats);
            } catch (e) {
              console.trace('error', e);
            }
          }
          /*bundle */
          const initDB = exports.initDB = initialize;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGF0YWJhc2UiLCJyZXF1aXJlIiwiaW5pdGlhbGl6ZSIsImRiIiwiREJNYW5hZ2VyIiwiY29uZmlnIiwiQWN0aXZpdGllcyIsIkFzc2lnbm1lbnRzIiwiQ2hhdCIsIkNsYXNzcm9vbXMiLCJDb252ZXJzYXRpb25zIiwiRG9jdW1lbnRzIiwiS25vd2xlZGdlQm94ZXMiLCJNZXNzYWdlcyIsIk1vZHVsZXMiLCJPcmdhbml6YXRpb25zIiwiUHJvamVjdHMiLCJQcm9tcHRDYXRlZ29yaWVzIiwiUHJvbXB0cyIsIlNoYXJlZEtub3dsZWRnZUJhc2VzIiwiU2Vzc2lvbnMiLCJTdHVkZW50c0hvbWUiLCJUb3BpY3MiLCJVc2VyIiwiZSIsImNvbnNvbGUiLCJ0cmFjZSIsImluaXREQiIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxTQUFBLEdBQUFDLE9BQUE7VUFFQSxlQUFlQyxVQUFVQSxDQUFBO1lBQ3hCLElBQUk7Y0FDSCxNQUFNQyxFQUFFLEdBQUcsTUFBTUgsU0FBQSxDQUFBSSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hEQyxVQUFVLEVBQUUsSUFBSTtnQkFDaEJDLFdBQVcsRUFBRSxVQUFVO2dCQUN2QkMsSUFBSSxFQUFFLDJEQUEyRDtnQkFDakVDLFVBQVUsRUFBRSxVQUFVO2dCQUN0QkMsYUFBYSxFQUFFLDBCQUEwQjtnQkFDekNDLFNBQVMsRUFBRSxxQkFBcUI7Z0JBQ2hDQyxjQUFjLEVBQUUsWUFBWTtnQkFDNUJDLFFBQVEsRUFBRSxtREFBbUQ7Z0JBQzdEQyxPQUFPLEVBQUUsb0NBQW9DO2dCQUM3Q0MsYUFBYSxFQUFFLElBQUk7Z0JBQ25CQyxRQUFRLEVBQUUsYUFBYTtnQkFDdkJDLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCQyxPQUFPLEVBQUUsSUFBSTtnQkFDYkMsb0JBQW9CLEVBQUUsdUNBQXVDO2dCQUM3REMsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUJDLFlBQVksRUFBRSxJQUFJO2dCQUNsQkMsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCQyxJQUFJLEVBQUU7ZUFDTixDQUFDO2NBRUY7Y0FDQTthQUNBLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2NBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLE9BQU8sRUFBRUYsQ0FBQyxDQUFDOztVQUUzQjtVQUVPO1VBQVksTUFBTUcsTUFBTSxHQUFBQyxPQUFBLENBQUFELE1BQUEsR0FBR3pCLFVBQVUifQ==