System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.2/entities", "@aimpact/chat-api@1.0.1/provider", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_beyondJsReactive112Entities) {
      dependency_1 = _beyondJsReactive112Entities;
    }, function (_aimpactChatApi101Provider) {
      dependency_2 = _aimpactChatApi101Provider;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsIm1lc3NhZ2VzIiwiTWFwIiwidmFsdWVzIiwibG9hZEFsbCIsInNwZWNzIiwicmVzcG9uc2UiLCJsb2FkIiwiZGF0YSIsImxlbmd0aCIsImZvckVhY2giLCJtZXNzYWdlIiwic2V0Iiwic2V0QXVkaW9NZXNzYWdlIiwidXNlciIsIm1lc3NhZ2VJdGVtIiwiTWVzc2FnZSIsInJlc3BvbnNlSXRlbSIsIlByb21pc2UiLCJhbGwiLCJpc1JlYWR5IiwicHVibGlzaCIsImZpbmFsRGF0YSIsImdldCIsImF1ZGlvIiwiZGVsZXRlIiwidHJpZ2dlckV2ZW50Iiwic2VuZEF1ZGlvIiwidHJhbnNjcmlwdGlvbiIsInNldE9mZmxpbmUiLCJjaGF0SWQiLCJ0eXBlIiwicm9sZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJjb250ZW50Iiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJFcnJvciIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJnZXRNZXNzYWdlIiwiTWVzc2FnZXMiLCJNZXNzYWdlUHJvdmlkZXIiLCJhZGQiLCJ0ZXh0IiwicmVhY3RpdmVQcm9wcyIsIktub3dsZWRnZUJveGVzIiwiS25vd2xlZGdlQm94IiwiS25vd2xlZGdlQm94UHJvdmlkZXIiLCJfY29yZSIsIlVzZXIiLCJsb2dnZWQiLCJwcm9taXNlSW5pdCIsIlVzZXJQcm92aWRlciIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsImxvZ2luIiwibG9jYWxVcGRhdGUiXSwic291cmNlcyI6WyIvYXVkaW8vY29sbGVjdGlvbi50cyIsIi9hdWRpby9pdGVtLnRzIiwiL2NoYXQvY29sbGVjdGlvbi50cyIsIi9jaGF0L2l0ZW0udHMiLCIvY2hhdC9tZXNzYWdlcy9jb2xsZWN0aW9uLnRzIiwiL2NoYXQvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdC9tZXNzYWdlcy9pdGVtLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9jb2xsZWN0aW9uLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9pdGVtLnRzIiwiL3VzZXJzL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFNTSxNQUFPRyxNQUFPLFNBQVFKLFNBQUEsQ0FBQUssVUFBVTtZQUNyQ0MsSUFBSSxHQUFHSCxLQUFBLENBQUFJLEtBQUs7WUFDRkMsU0FBUyxHQUFHLGNBQWM7WUFDMUJDLEVBQUUsR0FBRyxVQUFVO1lBRXpCQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSVQsU0FBQSxDQUFBVSxhQUFhLEVBQUU7Y0FDbkMsSUFBSSxDQUFDQyxJQUFJLEVBQUU7WUFDWjs7VUFDQUMsT0FBQSxDQUFBVixNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJELElBQUFKLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQU1PLFdBUlA7O1VBUWlCLE1BQU9NLEtBQU0sU0FBUVAsU0FBQSxDQUFBZSxJQUFZO1lBQ3ZDQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FB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