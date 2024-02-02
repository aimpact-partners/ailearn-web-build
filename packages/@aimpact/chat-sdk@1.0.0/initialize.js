System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.9/database"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, initDB, __beyond_pkg, hmr;
  _export("initDB", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive119Database) {
      dependency_1 = _beyondJsReactive119Database;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 2789937630,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.initDB = void 0;
          var _database = require("@beyond-js/reactive/database");
          async function initialize() {
            try {
              const db = await _database.DBManager.config('chat-api@24', {
                Chat: 'id, name, userId, category, usage, system, knowledgeBoxId',
                Conversations: 'id, name, userId, system',
                User: 'id',
                Messages: 'id,  chatId, userId, text, role, usage, timestamp',
                KnowledgeBoxes: 'id, userId',
                SharedKnowledgeBases: 'id, knowledgeBaseId, sharedWithUserId',
                Documents: 'id, knowledgeBaseId',
                Topics: 'id,  title',
                Sessions: 'id,  classRoomId',
                Classrooms: 'id, name',
                Projects: 'id, project',
                PromptCategories: 'id',
                Assignments: 'id, name',
                Prompts: 'id',
                Activities: 'id',
                StudentsHome: 'id',
                Modules: 'id, type'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGF0YWJhc2UiLCJyZXF1aXJlIiwiaW5pdGlhbGl6ZSIsImRiIiwiREJNYW5hZ2VyIiwiY29uZmlnIiwiQ2hhdCIsIkNvbnZlcnNhdGlvbnMiLCJVc2VyIiwiTWVzc2FnZXMiLCJLbm93bGVkZ2VCb3hlcyIsIlNoYXJlZEtub3dsZWRnZUJhc2VzIiwiRG9jdW1lbnRzIiwiVG9waWNzIiwiU2Vzc2lvbnMiLCJDbGFzc3Jvb21zIiwiUHJvamVjdHMiLCJQcm9tcHRDYXRlZ29yaWVzIiwiQXNzaWdubWVudHMiLCJQcm9tcHRzIiwiQWN0aXZpdGllcyIsIlN0dWRlbnRzSG9tZSIsIk1vZHVsZXMiLCJlIiwiY29uc29sZSIsInRyYWNlIiwiaW5pdERCIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFNBQUEsR0FBQUMsT0FBQTtVQUVBLGVBQWVDLFVBQVVBLENBQUE7WUFDeEIsSUFBSTtjQUNILE1BQU1DLEVBQUUsR0FBRyxNQUFNSCxTQUFBLENBQUFJLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGFBQWEsRUFBRTtnQkFDaERDLElBQUksRUFBRSwyREFBMkQ7Z0JBQ2pFQyxhQUFhLEVBQUUsMEJBQTBCO2dCQUN6Q0MsSUFBSSxFQUFFLElBQUk7Z0JBQ1ZDLFFBQVEsRUFBRSxtREFBbUQ7Z0JBQzdEQyxjQUFjLEVBQUUsWUFBWTtnQkFDNUJDLG9CQUFvQixFQUFFLHVDQUF1QztnQkFDN0RDLFNBQVMsRUFBRSxxQkFBcUI7Z0JBQ2hDQyxNQUFNLEVBQUUsWUFBWTtnQkFDcEJDLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCQyxVQUFVLEVBQUUsVUFBVTtnQkFDdEJDLFFBQVEsRUFBRSxhQUFhO2dCQUN2QkMsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEJDLFdBQVcsRUFBRSxVQUFVO2dCQUN2QkMsT0FBTyxFQUFFLElBQUk7Z0JBQ2JDLFVBQVUsRUFBRSxJQUFJO2dCQUNoQkMsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCQyxPQUFPLEVBQUU7ZUFDVCxDQUFDO2NBRUY7Y0FDQTthQUNBLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2NBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLE9BQU8sRUFBRUYsQ0FBQyxDQUFDOztVQUUzQjtVQUVPO1VBQVksTUFBTUcsTUFBTSxHQUFBQyxPQUFBLENBQUFELE1BQUEsR0FBR3hCLFVBQVUifQ==