System.register(["@beyond-js/backend@0.1.9/client", "@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ActionsBridge, ims, AudioProvider, ChatProvider, DocumentProvider, KnowledgeBasesProvider, KnowledgeBoxProvider, SharedKnowledgeBasesProvider, MessageProvider, UserProvider, __beyond_pkg, hmr;
  _export({
    AudioProvider: void 0,
    ChatProvider: void 0,
    DocumentProvider: void 0,
    KnowledgeBasesProvider: void 0,
    KnowledgeBoxProvider: void 0,
    SharedKnowledgeBasesProvider: void 0,
    MessageProvider: void 0,
    UserProvider: void 0
  });
  return {
    setters: [function (_beyondJsBackend019Client) {
      dependency_0 = _beyondJsBackend019Client;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/firestore-collection", "0.0.5"], ["@beyond-js/response", "0.0.2"], ["@google-cloud/storage", "6.12.0"], ["@google-cloud/tasks", "3.2.0"], ["@pinecone-database/pinecone", "0.1.6"], ["langchain", "0.0.145"], ["axios", "1.5.1"], ["busboy", "1.6.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dotenv", "16.3.1"], ["express", "4.18.2"], ["express-openapi-validator", "5.0.6"], ["firebase", "8.10.1"], ["firebase-admin", "11.11.0"], ["fluent-ffmpeg", "2.1.2"], ["form-data", "4.0.0"], ["google-auth-library", "8.9.0"], ["jsonwebtoken", "9.0.2"], ["node-fetch", "2.7.0"], ["openai", "4.5.0"], ["socket.io-client", "4.7.2"], ["uuid", "9.0.1"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/express", "4.17.20"], ["@types/jsonwebtoken", "9.0.4"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.7"], ["@types/busboy", "1.5.3"], ["swagger-ui-express", "5.0.0"], ["yaml", "2.3.3"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/ailearn-app", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-api@0.1.0/provider"
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
      INTERNAL MODULE: ./audio
      ***********************/
      ims.set('./audio', {
        hash: 1621794953,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class AudioProvider extends ActionsBridge {
            async load(id) {
              return await this.execute("audio//AudioProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("audio//AudioProvider//publish", ...arguments);
            }
            async list() {
              return await this.execute("audio//AudioProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("audio//AudioProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.AudioProvider = AudioProvider;
        }
      });

      /**********************
      INTERNAL MODULE: ./chat
      **********************/

      ims.set('./chat', {
        hash: 349411339,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class ChatProvider extends ActionsBridge {
            async load({
              id
            }) {
              return await this.execute("chat//ChatProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("chat//ChatProvider//publish", ...arguments);
            }
            async delete({
              id
            }) {
              return await this.execute("chat//ChatProvider//delete", ...arguments);
            }
            async list(specs) {
              return await this.execute("chat//ChatProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("chat//ChatProvider//bulkSave", ...arguments);
            }
            async sendMessage(data) {
              return await this.execute("chat//ChatProvider//sendMessage", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.ChatProvider = ChatProvider;
        }
      });

      /***************************
      INTERNAL MODULE: ./documents
      ***************************/

      ims.set('./documents', {
        hash: 3686714398,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DocumentProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class DocumentProvider extends ActionsBridge {
            async load(id) {
              return await this.execute("documents//DocumentProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("documents//DocumentProvider//publish", ...arguments);
            }
            async list() {
              return await this.execute("documents//DocumentProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("documents//DocumentProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.DocumentProvider = DocumentProvider;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./knowledge-boxes/knowledge-bases
      *************************************************/

      ims.set('./knowledge-boxes/knowledge-bases', {
        hash: 240109137,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBasesProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class KnowledgeBasesProvider extends ActionsBridge {
            async load(id) {
              return await this.execute("knowledge-boxes\\knowledge-bases//KnowledgeBasesProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("knowledge-boxes\\knowledge-bases//KnowledgeBasesProvider//publish", ...arguments);
            }
            async list() {
              return await this.execute("knowledge-boxes\\knowledge-bases//KnowledgeBasesProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("knowledge-boxes\\knowledge-bases//KnowledgeBasesProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.KnowledgeBasesProvider = KnowledgeBasesProvider;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./knowledge-boxes/knowledge-box
      ***********************************************/

      ims.set('./knowledge-boxes/knowledge-box', {
        hash: 2216113356,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBoxProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class KnowledgeBoxProvider extends ActionsBridge {
            /**
             * @todo validate if it's necessary to filter by user
             * @param param
             * @returns
             */
            async load({
              id
            }) {
              return await this.execute("knowledge-boxes\\knowledge-box//KnowledgeBoxProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("knowledge-boxes\\knowledge-box//KnowledgeBoxProvider//publish", ...arguments);
            }
            async list({
              userId
            }) {
              return await this.execute("knowledge-boxes\\knowledge-box//KnowledgeBoxProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("knowledge-boxes\\knowledge-box//KnowledgeBoxProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.KnowledgeBoxProvider = KnowledgeBoxProvider;
        }
      });

      /****************************************
      INTERNAL MODULE: ./knowledge-boxes/shared
      ****************************************/

      ims.set('./knowledge-boxes/shared', {
        hash: 610127258,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SharedKnowledgeBasesProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class SharedKnowledgeBasesProvider extends ActionsBridge {
            async load(id) {
              return await this.execute("knowledge-boxes\\shared//SharedKnowledgeBasesProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("knowledge-boxes\\shared//SharedKnowledgeBasesProvider//publish", ...arguments);
            }
            async list() {
              return await this.execute("knowledge-boxes\\shared//SharedKnowledgeBasesProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("knowledge-boxes\\shared//SharedKnowledgeBasesProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.SharedKnowledgeBasesProvider = SharedKnowledgeBasesProvider;
        }
      });

      /**************************
      INTERNAL MODULE: ./messages
      **************************/

      ims.set('./messages', {
        hash: 1503274408,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class MessageProvider extends ActionsBridge {
            async load(id) {
              return await this.execute("messages//MessageProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("messages//MessageProvider//publish", ...arguments);
            }
            async list() {
              return await this.execute("messages//MessageProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("messages//MessageProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.MessageProvider = MessageProvider;
        }
      });

      /**********************
      INTERNAL MODULE: ./user
      **********************/

      ims.set('./user', {
        hash: 490892393,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class UserProvider extends ActionsBridge {
            async updateUser(user) {
              return await this.execute("user//UserProvider//updateUser", ...arguments);
            }
            async login(user) {
              return await this.execute("user//UserProvider//login", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.UserProvider = UserProvider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./audio",
        "from": "AudioProvider",
        "name": "AudioProvider"
      }, {
        "im": "./chat",
        "from": "ChatProvider",
        "name": "ChatProvider"
      }, {
        "im": "./documents",
        "from": "DocumentProvider",
        "name": "DocumentProvider"
      }, {
        "im": "./knowledge-boxes/knowledge-bases",
        "from": "KnowledgeBasesProvider",
        "name": "KnowledgeBasesProvider"
      }, {
        "im": "./knowledge-boxes/knowledge-box",
        "from": "KnowledgeBoxProvider",
        "name": "KnowledgeBoxProvider"
      }, {
        "im": "./knowledge-boxes/shared",
        "from": "SharedKnowledgeBasesProvider",
        "name": "SharedKnowledgeBasesProvider"
      }, {
        "im": "./messages",
        "from": "MessageProvider",
        "name": "MessageProvider"
      }, {
        "im": "./user",
        "from": "UserProvider",
        "name": "UserProvider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioProvider') && _export("AudioProvider", AudioProvider = require ? require('./audio').AudioProvider : value);
        (require || prop === 'ChatProvider') && _export("ChatProvider", ChatProvider = require ? require('./chat').ChatProvider : value);
        (require || prop === 'DocumentProvider') && _export("DocumentProvider", DocumentProvider = require ? require('./documents').DocumentProvider : value);
        (require || prop === 'KnowledgeBasesProvider') && _export("KnowledgeBasesProvider", KnowledgeBasesProvider = require ? require('./knowledge-boxes/knowledge-bases').KnowledgeBasesProvider : value);
        (require || prop === 'KnowledgeBoxProvider') && _export("KnowledgeBoxProvider", KnowledgeBoxProvider = require ? require('./knowledge-boxes/knowledge-box').KnowledgeBoxProvider : value);
        (require || prop === 'SharedKnowledgeBasesProvider') && _export("SharedKnowledgeBasesProvider", SharedKnowledgeBasesProvider = require ? require('./knowledge-boxes/shared').SharedKnowledgeBasesProvider : value);
        (require || prop === 'MessageProvider') && _export("MessageProvider", MessageProvider = require ? require('./messages').MessageProvider : value);
        (require || prop === 'UserProvider') && _export("UserProvider", UserProvider = require ? require('./user').UserProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiQXVkaW9Qcm92aWRlciIsIkFjdGlvbnNCcmlkZ2UiLCJsb2FkIiwiaWQiLCJleGVjdXRlIiwiYXJndW1lbnRzIiwicHVibGlzaCIsImRhdGEiLCJsaXN0IiwiYnVsa1NhdmUiLCJjb25zdHJ1Y3RvciIsImJ1bmRsZSIsImV4cG9ydHMiLCJDaGF0UHJvdmlkZXIiLCJkZWxldGUiLCJzcGVjcyIsInNlbmRNZXNzYWdlIiwiRG9jdW1lbnRQcm92aWRlciIsIktub3dsZWRnZUJhc2VzUHJvdmlkZXIiLCJLbm93bGVkZ2VCb3hQcm92aWRlciIsInVzZXJJZCIsIlNoYXJlZEtub3dsZWRnZUJhc2VzUHJvdmlkZXIiLCJNZXNzYWdlUHJvdmlkZXIiLCJVc2VyUHJvdmlkZXIiLCJ1cGRhdGVVc2VyIiwidXNlciIsImxvZ2luIl0sInNvdXJjZXMiOlsiL2F1ZGlvLnRzIiwiL2NoYXQudHMiLCIvZG9jdW1lbnRzLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9rbm93bGVkZ2UtYmFzZXMudHMiLCIva25vd2xlZGdlLWJveGVzL2tub3dsZWRnZS1ib3gudHMiLCIva25vd2xlZGdlLWJveGVzL3NoYXJlZC50cyIsIi9tZXNzYWdlcy50cyIsIi91c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxlQUFBLEdBQUFDLE9BQUE7VUFPTyxZQUFZO1VBQVUsTUFBT0MsYUFBYyxTQUFRQyxhQUFhO1lBQ25FLE1BQU1DLElBQUlBLENBQUNDLEVBQVU7Y0FDakIsT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLDRCQUE0QixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUN6RTtZQUNBLE1BQU1DLE9BQU9BLENBQUNDLElBQUk7Y0FDZCxPQUFPLE1BQU0sSUFBSSxDQUFDSCxPQUFPLENBQUMsK0JBQStCLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQzVFO1lBQ0EsTUFBTUcsSUFBSUEsQ0FBQTtjQUNOLE9BQU8sTUFBTSxJQUFJLENBQUNKLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDekU7WUFDQSxNQUFNSSxRQUFRQSxDQUFDRixJQUFJO2NBQ2YsT0FBTyxNQUFNLElBQUksQ0FBQ0gsT0FBTyxDQUFDLGdDQUFnQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUM3RTtZQUNBSyxZQUFBO2NBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRVosZUFBQSxDQUFBYSxNQUFNLENBQUM7WUFDNUI7O1VBQ0hDLE9BQUEsQ0FBQVosYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCRCxJQUFBRixlQUFBLEdBQUFDLE9BQUE7VUFXTyxZQUFZO1VBQVUsTUFBT2MsWUFBYSxTQUFRWixhQUFhO1lBQ2xFLE1BQU1DLElBQUlBLENBQUM7Y0FBRUM7WUFBRSxDQUVkO2NBQ0csT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLDBCQUEwQixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUN2RTtZQUNBLE1BQU1DLE9BQU9BLENBQUNDLElBQVc7Y0FDckIsT0FBTyxNQUFNLElBQUksQ0FBQ0gsT0FBTyxDQUFDLDZCQUE2QixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUMxRTtZQUNBLE1BQU1TLE1BQU1BLENBQUM7Y0FBRVg7WUFBRSxDQUVoQjtjQUNHLE9BQU8sTUFBTSxJQUFJLENBQUNDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDekU7WUFDQSxNQUFNRyxJQUFJQSxDQUFDTyxLQUFLO2NBQ1osT0FBTyxNQUFNLElBQUksQ0FBQ1gsT0FBTyxDQUFDLDBCQUEwQixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUN2RTtZQUNBLE1BQU1JLFFBQVFBLENBQUNGLElBQUk7Y0FDZixPQUFPLE1BQU0sSUFBSSxDQUFDSCxPQUFPLENBQUMsOEJBQThCLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQzNFO1lBQ0EsTUFBTVcsV0FBV0EsQ0FBQ1QsSUFBSTtjQUNsQixPQUFPLE1BQU0sSUFBSSxDQUFDSCxPQUFPLENBQUMsaUNBQWlDLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQzlFO1lBQ0FLLFlBQUE7Y0FDSSxLQUFLLENBQUMsU0FBUyxFQUFFWixlQUFBLENBQUFhLE1BQU0sQ0FBQztZQUM1Qjs7VUFDSEMsT0FBQSxDQUFBQyxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNELElBQUFmLGVBQUEsR0FBQUMsT0FBQTtVQU1PLFlBQVk7VUFBVSxNQUFPa0IsZ0JBQWlCLFNBQVFoQixhQUFhO1lBQ3RFLE1BQU1DLElBQUlBLENBQUNDLEVBQVU7Y0FDakIsT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLG1DQUFtQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUNoRjtZQUNBLE1BQU1DLE9BQU9BLENBQUNDLElBQUk7Y0FDZCxPQUFPLE1BQU0sSUFBSSxDQUFDSCxPQUFPLENBQUMsc0NBQXNDLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ25GO1lBQ0EsTUFBTUcsSUFBSUEsQ0FBQTtjQUNOLE9BQU8sTUFBTSxJQUFJLENBQUNKLE9BQU8sQ0FBQyxtQ0FBbUMsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDaEY7WUFDQSxNQUFNSSxRQUFRQSxDQUFDRixJQUFJO2NBQ2YsT0FBTyxNQUFNLElBQUksQ0FBQ0gsT0FBTyxDQUFDLHVDQUF1QyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUNwRjtZQUNBSyxZQUFBO2NBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRVosZUFBQSxDQUFBYSxNQUFNLENBQUM7WUFDNUI7O1VBQ0hDLE9BQUEsQ0FBQUssZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJELElBQUFuQixlQUFBLEdBQUFDLE9BQUE7VUFPTyxZQUFZO1VBQVUsTUFBT21CLHNCQUF1QixTQUFRakIsYUFBYTtZQUM1RSxNQUFNQyxJQUFJQSxDQUFDQyxFQUFVO2NBQ2pCLE9BQU8sTUFBTSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxnRUFBZ0UsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDN0c7WUFDQSxNQUFNQyxPQUFPQSxDQUFDQyxJQUFJO2NBQ2QsT0FBTyxNQUFNLElBQUksQ0FBQ0gsT0FBTyxDQUFDLG1FQUFtRSxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUNoSDtZQUNBLE1BQU1HLElBQUlBLENBQUE7Y0FDTixPQUFPLE1BQU0sSUFBSSxDQUFDSixPQUFPLENBQUMsZ0VBQWdFLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQzdHO1lBQ0EsTUFBTUksUUFBUUEsQ0FBQ0YsSUFBSTtjQUNmLE9BQU8sTUFBTSxJQUFJLENBQUNILE9BQU8sQ0FBQyxvRUFBb0UsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDakg7WUFDQUssWUFBQTtjQUNJLEtBQUssQ0FBQyxTQUFTLEVBQUVaLGVBQUEsQ0FBQWEsTUFBTSxDQUFDO1lBQzVCOztVQUNIQyxPQUFBLENBQUFNLHNCQUFBLEdBQUFBLHNCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCRCxJQUFBcEIsZUFBQSxHQUFBQyxPQUFBO1VBVU8sWUFBWTtVQUFVLE1BQU9vQixvQkFBcUIsU0FBUWxCLGFBQWE7WUFDMUU7Ozs7O1lBS0EsTUFBTUMsSUFBSUEsQ0FBQztjQUFFQztZQUFFLENBR2Q7Y0FDRyxPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsNERBQTRELEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ3pHO1lBQ0EsTUFBTUMsT0FBT0EsQ0FBQ0MsSUFBSTtjQUNkLE9BQU8sTUFBTSxJQUFJLENBQUNILE9BQU8sQ0FBQywrREFBK0QsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDNUc7WUFDQSxNQUFNRyxJQUFJQSxDQUFDO2NBQUVZO1lBQU0sQ0FBRTtjQUNqQixPQUFPLE1BQU0sSUFBSSxDQUFDaEIsT0FBTyxDQUFDLDREQUE0RCxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUN6RztZQUNBLE1BQU1JLFFBQVFBLENBQUNGLElBQUk7Y0FDZixPQUFPLE1BQU0sSUFBSSxDQUFDSCxPQUFPLENBQUMsZ0VBQWdFLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQzdHO1lBQ0FLLFlBQUE7Y0FDSSxLQUFLLENBQUMsU0FBUyxFQUFFWixlQUFBLENBQUFhLE1BQU0sQ0FBQztZQUM1Qjs7VUFDSEMsT0FBQSxDQUFBTyxvQkFBQSxHQUFBQSxvQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0QsSUFBQXJCLGVBQUEsR0FBQUMsT0FBQTtVQU9PLFlBQVk7VUFBVSxNQUFPc0IsNEJBQTZCLFNBQVFwQixhQUFhO1lBQ2xGLE1BQU1DLElBQUlBLENBQUNDLEVBQVU7Y0FDakIsT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLDZEQUE2RCxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUMxRztZQUNBLE1BQU1DLE9BQU9BLENBQUNDLElBQUk7Y0FDZCxPQUFPLE1BQU0sSUFBSSxDQUFDSCxPQUFPLENBQUMsZ0VBQWdFLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQzdHO1lBQ0EsTUFBTUcsSUFBSUEsQ0FBQTtjQUNOLE9BQU8sTUFBTSxJQUFJLENBQUNKLE9BQU8sQ0FBQyw2REFBNkQsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDMUc7WUFDQSxNQUFNSSxRQUFRQSxDQUFDRixJQUFJO2NBQ2YsT0FBTyxNQUFNLElBQUksQ0FBQ0gsT0FBTyxDQUFDLGlFQUFpRSxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUM5RztZQUNBSyxZQUFBO2NBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRVosZUFBQSxDQUFBYSxNQUFNLENBQUM7WUFDNUI7O1VBQ0hDLE9BQUEsQ0FBQVMsNEJBQUEsR0FBQUEsNEJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJELElBQUF2QixlQUFBLEdBQUFDLE9BQUE7VUFPTyxZQUFZO1VBQVUsTUFBT3VCLGVBQWdCLFNBQVFyQixhQUFhO1lBQ3JFLE1BQU1DLElBQUlBLENBQUNDLEVBQVU7Y0FDakIsT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUM5RTtZQUNBLE1BQU1DLE9BQU9BLENBQUNDLElBQUk7Y0FDZCxPQUFPLE1BQU0sSUFBSSxDQUFDSCxPQUFPLENBQUMsb0NBQW9DLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ2pGO1lBQ0EsTUFBTUcsSUFBSUEsQ0FBQTtjQUNOLE9BQU8sTUFBTSxJQUFJLENBQUNKLE9BQU8sQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDOUU7WUFDQSxNQUFNSSxRQUFRQSxDQUFDRixJQUFJO2NBQ2YsT0FBTyxNQUFNLElBQUksQ0FBQ0gsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUNsRjtZQUNBSyxZQUFBO2NBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRVosZUFBQSxDQUFBYSxNQUFNLENBQUM7WUFDNUI7O1VBQ0hDLE9BQUEsQ0FBQVUsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCRCxJQUFBeEIsZUFBQSxHQUFBQyxPQUFBO1VBRU8sWUFBWTtVQUFVLE1BQU93QixZQUFhLFNBQVF0QixhQUFhO1lBQ2xFLE1BQU11QixVQUFVQSxDQUFDQyxJQUFJO2NBQ2pCLE9BQU8sTUFBTSxJQUFJLENBQUNyQixPQUFPLENBQUMsZ0NBQWdDLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQzdFO1lBQ0EsTUFBTXFCLEtBQUtBLENBQUNELElBQUk7Y0FDWixPQUFPLE1BQU0sSUFBSSxDQUFDckIsT0FBTyxDQUFDLDJCQUEyQixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUN4RTtZQUNBSyxZQUFBO2NBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRVosZUFBQSxDQUFBYSxNQUFNLENBQUM7WUFDNUI7O1VBQ0hDLE9BQUEsQ0FBQVcsWUFBQSxHQUFBQSxZQUFBIn0=