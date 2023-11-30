System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/database"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, initDB, __beyond_pkg, hmr;
  _export("initDB", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive116Database) {
      dependency_1 = _beyondJsReactive116Database;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.18"]]);
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
        hash: 1391712205,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.initDB = void 0;
          var _database = require("@beyond-js/reactive/database");
          async function initialize() {
            try {
              const db = await _database.DBManager.config('chat-api@22', {
                Chat: 'id, name, userId, category, usage, system, knowledgeBoxId',
                Conversations: 'id, name, userId, system',
                User: 'id',
                Messages: 'id, conversationId, chatId, userId, text, role, usage, timestamp',
                AudioRecords: 'id, messageId',
                KnowledgeBoxes: 'id, userId',
                SharedKnowledgeBases: 'id, knowledgeBaseId, sharedWithUserId',
                Documents: 'id, knowledgeBaseId',
                Lessons: 'id, curriculumObjective, userId',
                Topics: 'id, lessonId, title',
                Sessions: 'id, lessonId, classRoomId',
                Classrooms: 'id, name',
                Projects: 'id, project',
                PromptCategories: 'id',
                Assignments: 'id, name',
                Prompts: 'id',
                Activities: 'id',
                StudentsHome: 'id'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGF0YWJhc2UiLCJyZXF1aXJlIiwiaW5pdGlhbGl6ZSIsImRiIiwiREJNYW5hZ2VyIiwiY29uZmlnIiwiQ2hhdCIsIkNvbnZlcnNhdGlvbnMiLCJVc2VyIiwiTWVzc2FnZXMiLCJBdWRpb1JlY29yZHMiLCJLbm93bGVkZ2VCb3hlcyIsIlNoYXJlZEtub3dsZWRnZUJhc2VzIiwiRG9jdW1lbnRzIiwiTGVzc29ucyIsIlRvcGljcyIsIlNlc3Npb25zIiwiQ2xhc3Nyb29tcyIsIlByb2plY3RzIiwiUHJvbXB0Q2F0ZWdvcmllcyIsIkFzc2lnbm1lbnRzIiwiUHJvbXB0cyIsIkFjdGl2aXRpZXMiLCJTdHVkZW50c0hvbWUiLCJlIiwiY29uc29sZSIsInRyYWNlIiwiaW5pdERCIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFNBQUEsR0FBQUMsT0FBQTtVQUVBLGVBQWVDLFVBQVVBLENBQUE7WUFDeEIsSUFBSTtjQUNILE1BQU1DLEVBQUUsR0FBRyxNQUFNSCxTQUFBLENBQUFJLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGFBQWEsRUFBRTtnQkFDaERDLElBQUksRUFBRSwyREFBMkQ7Z0JBQ2pFQyxhQUFhLEVBQUUsMEJBQTBCO2dCQUN6Q0MsSUFBSSxFQUFFLElBQUk7Z0JBQ1ZDLFFBQVEsRUFBRSxrRUFBa0U7Z0JBQzVFQyxZQUFZLEVBQUUsZUFBZTtnQkFDN0JDLGNBQWMsRUFBRSxZQUFZO2dCQUM1QkMsb0JBQW9CLEVBQUUsdUNBQXVDO2dCQUM3REMsU0FBUyxFQUFFLHFCQUFxQjtnQkFDaENDLE9BQU8sRUFBRSxpQ0FBaUM7Z0JBQzFDQyxNQUFNLEVBQUUscUJBQXFCO2dCQUM3QkMsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckNDLFVBQVUsRUFBRSxVQUFVO2dCQUN0QkMsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCQyxnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QkMsV0FBVyxFQUFFLFVBQVU7Z0JBQ3ZCQyxPQUFPLEVBQUUsSUFBSTtnQkFDYkMsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCQyxZQUFZLEVBQUU7ZUFDZCxDQUFDO2NBRUY7Y0FDQTthQUNBLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2NBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLE9BQU8sRUFBRUYsQ0FBQyxDQUFDOztVQUUzQjtVQUVPO1VBQVksTUFBTUcsTUFBTSxHQUFBQyxPQUFBLENBQUFELE1BQUEsR0FBR3pCLFVBQVUifQ==