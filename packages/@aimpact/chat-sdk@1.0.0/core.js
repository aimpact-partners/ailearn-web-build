System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.3/entities", "@aimpact/chat-api@1.0.1/provider", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Audio, Chats, Chat, Message, KnowledgeBoxes, KnowledgeBox, User, __beyond_pkg, hmr;
  _export({
    Audio: void 0,
    Chats: void 0,
    Chat: void 0,
    Message: void 0,
    KnowledgeBoxes: void 0,
    KnowledgeBox: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive113Entities) {
      dependency_1 = _beyondJsReactive113Entities;
    }, function (_aimpactChatApi101Provider) {
      dependency_2 = _aimpactChatApi101Provider;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.0/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-api/provider', dependency_2], ['@beyond-js/kernel/core', dependency_3]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./audio/collection
      **********************************/
      ims.set('./audio/collection', {
        hash: 742938737,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Audios = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _item = require("./item");
          class Audios extends _entities.Collection {
            item = _item.Audio;
            storeName = 'AudioRecords';
            db = 'chat-api';
            constructor() {
              super();
              this.provider = new _provider.AudioProvider();
              this.init();
            }
          }
          exports.Audios = Audios;
        }
      });

      /****************************
      INTERNAL MODULE: ./audio/item
      ****************************/

      ims.set('./audio/item', {
        hash: 1404616158,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Audio = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          /*bundle*/ // AudioItem

          class Audio extends _entities.Item {
            properties = ['id', 'userId', 'category'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'AudioRecords',
                provider: _provider.AudioProvider
              });
            }
          }
          exports.Audio = Audio;
        }
      });

      /*********************************
      INTERNAL MODULE: ./chat/collection
      *********************************/

      ims.set('./chat/collection', {
        hash: 3111243484,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chats = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _item = require("./item");
          /*bundle*/
          class Chats extends _entities.Collection {
            item = _item.Chat;
            constructor() {
              super({
                provider: _provider.ChatProvider,
                storeName: 'Chat',
                db: 'chat-api'
              });
            }
          }
          exports.Chats = Chats;
        }
      });

      /***************************
      INTERNAL MODULE: ./chat/item
      ***************************/

      ims.set('./chat/item', {
        hash: 3909059141,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _item = require("./messages/item");
          /*bundle*/ // ChatItem

          class Chat extends _entities.Item {
            properties = ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'usage', 'knowledgeBoxId', 'metadata'];
            #messages = new Map();
            get messages() {
              return [...this.#messages.values()];
            }
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Chat',
                provider: _provider.ChatProvider
              });
            }
            loadAll = async specs => {
              const response = await this.load(specs);
              const messages = new Map();
              if (response.data.messages?.length) {
                response.data.messages.forEach(message => messages.set(message.id, message));
              }
              this.#messages = messages;
            };
            async setAudioMessage({
              user,
              response
            }) {
              const messageItem = new _item.Message();
              const responseItem = new _item.Message();
              await Promise.all([messageItem.isReady, responseItem.isReady]);
              await messageItem.publish(user);
              await responseItem.publish(response);
              const finalData = {
                ...user
              };
              const data = this.#messages.get('temporal');
              this.#messages.set(messageItem.id, {
                ...finalData,
                id: messageItem.id,
                audio: data.audio
              });
              this.#messages.delete('temporal');
              this.#messages.set(responseItem.id, {
                ...response,
                id: responseItem.id
              });
              this.triggerEvent();
              return responseItem;
            }
            async sendAudio(audio, transcription = undefined) {
              const item = new _item.Message();
              await item.isReady;
              item.setOffline(true);
              const specs = {
                id: 'temporal',
                chatId: this.id,
                type: 'audio',
                audio,
                role: 'user',
                timestamp: Date.now()
              };
              if (transcription) {
                specs.content = transcription;
              }
              this.#messages.set('temporal', specs);
              this.triggerEvent();
            }
            async sendMessage(content) {
              try {
                this.fetching = true;
                const item = new _item.Message();
                await item.isReady;
                item.setOffline(true);
                this.#messages.set(item.id, {
                  id: item.id,
                  chatId: this.id,
                  content,
                  role: 'user',
                  timestamp: Date.now()
                });
                this.triggerEvent();
                await item.publish({
                  chatId: this.id,
                  content,
                  role: 'user',
                  timestamp: Date.now()
                });
                this.triggerEvent();
                const data = {
                  ...item.getProperties()
                };
                const response = await this.provider.sendMessage({
                  chatId: this.id,
                  ...data
                });
                if (!response.status) {
                  throw new Error(response.error);
                }
                this.#messages.set(response.data.response.id, response.data.response);
                this.#messages.set(response.data.message.id, response.data.message);
                this.triggerEvent();
                return {
                  response: response.data.response,
                  message: response.data.message
                };
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            getMessage(id) {
              return this.#messages.get(id);
            }
          }
          exports.Chat = Chat;
        }
      });

      /******************************************
      INTERNAL MODULE: ./chat/messages/collection
      ******************************************/

      ims.set('./chat/messages/collection', {
        hash: 2216528992,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          class Messages extends _entities.Collection {
            item = _item.Message;
            storeName = 'Messages';
            db = 'chat-api';
            constructor() {
              super();
              this.init();
            }
          }
          exports.Messages = Messages;
        }
      });

      /*************************************
      INTERNAL MODULE: ./chat/messages/index
      *************************************/

      ims.set('./chat/messages/index', {
        hash: 2515190699,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _item = require("./item");
          class Messages extends _entities.Collection {
            item = _item.Message;
            constructor() {
              super({
                provider: _provider.MessageProvider,
                storeName: 'Messages',
                db: 'chat-api'
              });
            }
            add(text) {
              //@ts-ignore
              const message = new _item.Message();
              // message.setOffline(true);
              // this.items.push(message);
            }
          }

          exports.Messages = Messages;
        }
      });

      /************************************
      INTERNAL MODULE: ./chat/messages/item
      ************************************/

      ims.set('./chat/messages/item', {
        hash: 2354749471,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          /*bundle*/ // ChatItem

          class Message extends _entities.Item {
            properties = ['id', 'chatId', 'userId', 'role', 'content', 'usage', 'timestamp'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Messages',
                provider: _provider.MessageProvider
              });
              //@ts-ignore
              this.reactiveProps(['autoplay']);
            }
          }
          exports.Message = Message;
        }
      });

      /********************************************
      INTERNAL MODULE: ./knowledge-boxes/collection
      ********************************************/

      ims.set('./knowledge-boxes/collection', {
        hash: 642003305,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBoxes = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _item = require("./item");
          /*bundle*/
          class KnowledgeBoxes extends _entities.Collection {
            item = _item.KnowledgeBox;
            constructor() {
              super({
                provider: _provider.KnowledgeBoxProvider,
                storeName: 'KnowledgeBoxes',
                db: 'chat-api'
              });
            }
          }
          exports.KnowledgeBoxes = KnowledgeBoxes;
        }
      });

      /**************************************
      INTERNAL MODULE: ./knowledge-boxes/item
      **************************************/

      ims.set('./knowledge-boxes/item', {
        hash: 887262650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBox = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          /*bundle*/ // KnowledgeBox

          class KnowledgeBox extends _entities.Item {
            properties = ['id', 'path', 'identifier', 'documents', 'type'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'KnowledgeBoxes',
                provider: _provider.KnowledgeBoxProvider
              });
            }
          }
          exports.KnowledgeBox = KnowledgeBox;
        }
      });

      /****************************
      INTERNAL MODULE: ./users/item
      ****************************/

      ims.set('./users/item', {
        hash: 3377721287,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/ // AudioItem

          class User extends _entities.Item {
            properties = ['displayName', 'id', 'email', 'photoURL', 'phoneNumber', 'token', 'firebaseToken'];
            #logged;
            #promiseInit;
            get logged() {
              return this.#logged;
            }
            constructor(specs) {
              super({
                id: specs.id,
                db: 'chat-api',
                storeName: 'User',
                provider: _provider.UserProvider
              });
              this.init(specs);
            }
            init = async specs => {
              if (this.#promiseInit) return this.#promiseInit;
              this.#promiseInit = new _core.PendingPromise();
              await this.isReady;
              await this.set(specs);
              this.#promiseInit.resolve();
            };
            async login(data) {
              await this.isReady;
              if (this.#logged) return;
              const specs = {
                ...this.getProperties(),
                id: this.id
              };
              const response = await this.provider.login(specs);
              if (!response.status) {
                throw new Error(response.error);
              }
              await this.set(response.data.user);
              this.localUpdate(response.data.user);
              this.#logged = true;
              return true;
            }
          }
          exports.User = User;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./audio/item",
        "from": "Audio",
        "name": "Audio"
      }, {
        "im": "./chat/collection",
        "from": "Chats",
        "name": "Chats"
      }, {
        "im": "./chat/item",
        "from": "Chat",
        "name": "Chat"
      }, {
        "im": "./chat/messages/item",
        "from": "Message",
        "name": "Message"
      }, {
        "im": "./knowledge-boxes/collection",
        "from": "KnowledgeBoxes",
        "name": "KnowledgeBoxes"
      }, {
        "im": "./knowledge-boxes/item",
        "from": "KnowledgeBox",
        "name": "KnowledgeBox"
      }, {
        "im": "./users/item",
        "from": "User",
        "name": "User"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Audio') && _export("Audio", Audio = require ? require('./audio/item').Audio : value);
        (require || prop === 'Chats') && _export("Chats", Chats = require ? require('./chat/collection').Chats : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./chat/item').Chat : value);
        (require || prop === 'Message') && _export("Message", Message = require ? require('./chat/messages/item').Message : value);
        (require || prop === 'KnowledgeBoxes') && _export("KnowledgeBoxes", KnowledgeBoxes = require ? require('./knowledge-boxes/collection').KnowledgeBoxes : value);
        (require || prop === 'KnowledgeBox') && _export("KnowledgeBox", KnowledgeBox = require ? require('./knowledge-boxes/item').KnowledgeBox : value);
        (require || prop === 'User') && _export("User", User = require ? require('./users/item').User : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxJQUFJLENBQUNSLEdBQUcsQ0FBQ1AsS0FBSyxDQUFDO2NBRXJCLElBQUksQ0FBQyxZQUFZLENBQUNxRCxPQUFPLEVBQUU7WUFDNUIsQ0FBQztZQUVELE1BQU1DLEtBQUssQ0FBQ25ELElBQUk7Y0FDZixNQUFNLElBQUksQ0FBQ1ksT0FBTztjQUNsQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Y0FFbEIsTUFBTWYsS0FBSyxHQUFHO2dCQUFFLEdBQUcsSUFBSSxDQUFDa0MsYUFBYSxFQUFFO2dCQUFFM0MsRUFBRSxFQUFFLElBQUksQ0FBQ0E7Y0FBRSxDQUFFO2NBRXRELE1BQU1VLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ2hCLFFBQVEsQ0FBQ3FFLEtBQUssQ0FBQ3RELEtBQUssQ0FBQztjQUNqRCxJQUFJLENBQUNDLFFBQVEsQ0FBQ2tDLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJQyxLQUFLLENBQUNuQyxRQUFRLENBQUNvQyxLQUFLLENBQUM7O2NBRWhDLE1BQU0sSUFBSSxDQUFDOUIsR0FBRyxDQUFDTixRQUFRLENBQUNFLElBQUksQ0FBQ00sSUFBSSxDQUFDO2NBQ2xDLElBQUksQ0FBQzhDLFdBQVcsQ0FBQ3RELFFBQVEsQ0FBQ0UsSUFBSSxDQUFDTSxJQUFJLENBQUM7Y0FDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO2NBQ25CLE9BQU8sSUFBSTtZQUNaOztVQUNBckIiLCJuYW1lcyI6WyJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsIk1hcCIsIm1lc3NhZ2VzIiwidmFsdWVzIiwibG9hZEFsbCIsInNwZWNzIiwicmVzcG9uc2UiLCJsb2FkIiwiZGF0YSIsImxlbmd0aCIsImZvckVhY2giLCJtZXNzYWdlIiwic2V0Iiwic2V0QXVkaW9NZXNzYWdlIiwidXNlciIsIm1lc3NhZ2VJdGVtIiwiTWVzc2FnZSIsInJlc3BvbnNlSXRlbSIsIlByb21pc2UiLCJhbGwiLCJpc1JlYWR5IiwicHVibGlzaCIsImZpbmFsRGF0YSIsImdldCIsImF1ZGlvIiwiZGVsZXRlIiwidHJpZ2dlckV2ZW50Iiwic2VuZEF1ZGlvIiwidHJhbnNjcmlwdGlvbiIsInNldE9mZmxpbmUiLCJjaGF0SWQiLCJ0eXBlIiwicm9sZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJjb250ZW50Iiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJFcnJvciIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJnZXRNZXNzYWdlIiwiTWVzc2FnZXMiLCJNZXNzYWdlUHJvdmlkZXIiLCJhZGQiLCJ0ZXh0IiwicmVhY3RpdmVQcm9wcyIsIktub3dsZWRnZUJveGVzIiwiS25vd2xlZGdlQm94IiwiS25vd2xlZGdlQm94UHJvdmlkZXIiLCJVc2VyIiwibG9nZ2VkIiwiVXNlclByb3ZpZGVyIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwibG9naW4iLCJsb2NhbFVwZGF0ZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYXVkaW8vY29sbGVjdGlvbi50cyIsImF1ZGlvL2l0ZW0udHMiLCJjaGF0L2NvbGxlY3Rpb24udHMiLCJjaGF0L2l0ZW0udHMiLCJjaGF0L21lc3NhZ2VzL2NvbGxlY3Rpb24udHMiLCJjaGF0L21lc3NhZ2VzL2luZGV4LnRzIiwiY2hhdC9tZXNzYWdlcy9pdGVtLnRzIiwia25vd2xlZGdlLWJveGVzL2NvbGxlY3Rpb24udHMiLCJrbm93bGVkZ2UtYm94ZXMvaXRlbS50cyIsInVzZXJzL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=