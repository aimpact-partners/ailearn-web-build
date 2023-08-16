System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.4/database"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, initDB, __beyond_pkg, hmr;
  _export("initDB", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive114Database) {
      dependency_1 = _beyondJsReactive114Database;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 3583415185,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.initDB = void 0;
          var _database = require("@beyond-js/reactive/database");
          async function initialize() {
            try {
              const db = await _database.DBManager.config('chat-api@14', {
                Chat: 'id, name, userId, category, usage, system, knowledgeBoxId',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGF0YWJhc2UiLCJyZXF1aXJlIiwiaW5pdGlhbGl6ZSIsImRiIiwiREJNYW5hZ2VyIiwiY29uZmlnIiwiQ2hhdCIsIlVzZXIiLCJNZXNzYWdlcyIsIkF1ZGlvUmVjb3JkcyIsIktub3dsZWRnZUJveGVzIiwiU2hhcmVkS25vd2xlZGdlQmFzZXMiLCJEb2N1bWVudHMiLCJMZXNzb25zIiwiVG9waWNzIiwiU2Vzc2lvbnMiLCJHQ2xhc3NlcyIsImUiLCJjb25zb2xlIiwidHJhY2UiLCJpbml0REIiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsU0FBQSxHQUFBQyxPQUFBO1VBRUEsZUFBZUMsVUFBVUEsQ0FBQTtZQUN4QixJQUFJO2NBQ0gsTUFBTUMsRUFBRSxHQUFHLE1BQU1ILFNBQUEsQ0FBQUksU0FBUyxDQUFDQyxNQUFNLENBQUMsYUFBYSxFQUFFO2dCQUNoREMsSUFBSSxFQUFFLDJEQUEyRDtnQkFDakVDLElBQUksRUFBRSxJQUFJO2dCQUNWQyxRQUFRLEVBQUUsa0RBQWtEO2dCQUM1REMsWUFBWSxFQUFFLGVBQWU7Z0JBQzdCQyxjQUFjLEVBQUUsWUFBWTtnQkFDNUJDLG9CQUFvQixFQUFFLHVDQUF1QztnQkFDN0RDLFNBQVMsRUFBRSxxQkFBcUI7Z0JBQ2hDQyxPQUFPLEVBQUUseUJBQXlCO2dCQUNsQ0MsTUFBTSxFQUFFLHFCQUFxQjtnQkFDN0JDLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDQyxRQUFRLEVBQUU7ZUFDVixDQUFDO2NBRUY7Y0FDQTthQUNBLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2NBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLE9BQU8sRUFBRUYsQ0FBQyxDQUFDOztVQUUzQjtVQUVPO1VBQVksTUFBTUcsTUFBTSxHQUFHbEIsVUFBVTtVQUFDbUIsT0FBQSxDQUFBRCxNQUFBLEdBQUFBLE1BQUEifQ==