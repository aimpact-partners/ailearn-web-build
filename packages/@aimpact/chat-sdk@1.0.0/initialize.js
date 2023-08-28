System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.3/database"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, initDB, __beyond_pkg, hmr;
  _export("initDB", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive113Database) {
      dependency_1 = _beyondJsReactive113Database;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 524875641,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.initDB = void 0;
          var _database = require("@beyond-js/reactive/database");
          async function initialize() {
            try {
              const db = await _database.DBManager.config('chat-api@15', {
                Chat: 'id, name, userId, category, usage, system, knowledgeBoxId',
                Conversations: 'id, name, userId, system',
                User: 'id',
                Messages: 'id, chatId, userId, text, role, usage, timestamp',
                AudioRecords: 'id, messageId',
                KnowledgeBoxes: 'id, userId',
                SharedKnowledgeBases: 'id, knowledgeBaseId, sharedWithUserId',
                Documents: 'id, knowledgeBaseId',
                Lessons: 'id, curriculumObjective',
                Topics: 'id, lessonId, title',
                Sessions: 'id, lessonId, classRoomId',
                GClasses: 'id, sessions'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRUEsZUFBZUEsVUFBVTtZQUN4QixJQUFJO2NBQ0gsTUFBTUMsRUFBRSxHQUFHLE1BQU1DLG1CQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hEQyxJQUFJLEVBQUUsMkRBQTJEO2dCQUNqRUMsYUFBYSxFQUFFLDBCQUEwQjtnQkFDekNDLElBQUksRUFBRSxJQUFJO2dCQUNWQyxRQUFRLEVBQUUsa0RBQWtEO2dCQUM1REMsWUFBWSxFQUFFLGVBQWU7Z0JBQzdCQyxjQUFjLEVBQUUsWUFBWTtnQkFDNUJDLG9CQUFvQixFQUFFLHVDQUF1QztnQkFDN0RDLFNBQVMsRUFBRSxxQkFBcUI7Z0JBQ2hDQyxPQUFPLEVBQUUseUJBQXlCO2dCQUNsQ0MsTUFBTSxFQUFFLHFCQUFxQjtnQkFDN0JDLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDQyxRQUFRLEVBQUU7ZUFDVixDQUFDO2NBRUY7Y0FDQTthQUNBLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2NBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLE9BQU8sRUFBRUYsQ0FBQyxDQUFDOztVQUUzQjtVQUVPO1VBQVksTUFBTUcsTUFBTSxHQUFHbkIsVUFBVTtVQUFDb0IiLCJuYW1lcyI6WyJpbml0aWFsaXplIiwiZGIiLCJEQk1hbmFnZXIiLCJjb25maWciLCJDaGF0IiwiQ29udmVyc2F0aW9ucyIsIlVzZXIiLCJNZXNzYWdlcyIsIkF1ZGlvUmVjb3JkcyIsIktub3dsZWRnZUJveGVzIiwiU2hhcmVkS25vd2xlZGdlQmFzZXMiLCJEb2N1bWVudHMiLCJMZXNzb25zIiwiVG9waWNzIiwiU2Vzc2lvbnMiLCJHQ2xhc3NlcyIsImUiLCJjb25zb2xlIiwidHJhY2UiLCJpbml0REIiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==