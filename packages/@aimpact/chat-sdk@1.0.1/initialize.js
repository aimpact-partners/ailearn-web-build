System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, __beyond_pkg, hmr;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.1/initialize"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4154831341,
        creator: function (require, exports) {
          // import { DBManager } from '@beyond-js/reactive/database';
          // async function initialize() {
          // 	try {
          // 		const db = await DBManager.config('chat-api@26', {
          // 			Activities: 'id',
          // 			Assignments: 'id, name',
          // 			Chat: 'id, name, userId, category, usage, system, knowledgeBoxId',
          // 			Classrooms: 'id, name',
          // 			Conversations: 'id, name, userId, system',
          // 			Documents: 'id, knowledgeBaseId',
          // 			KnowledgeBoxes: 'id, userId',
          // 			Messages: 'id,  chatId, userId, text, role, usage, timestamp',
          // 			Modules: 'id, type, timeCreated, timeUpdated',
          // 			Organizations: 'id',
          // 			Projects: 'id, project',
          // 			PromptCategories: 'id',
          // 			Prompts: 'id',
          // 			SharedKnowledgeBases: 'id, knowledgeBaseId, sharedWithUserId',
          // 			Sessions: 'id,  classRoomId',
          // 			StudentsHome: 'id',
          // 			Topics: 'id,  title',
          // 			User: 'id'
          // 		});
          // 		// For example, if you have user data to add you can use:
          // 		// db.Chat.bulkAdd(chats);
          // 	} catch (e) {
          // 		console.trace('error', e);
          // 	}
          // }
          // export /*bundle */ const initDB = initialize;
          "use strict";
        }
      });

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {};
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBQUEiLCJpZ25vcmVMaXN0IjpbXX0=