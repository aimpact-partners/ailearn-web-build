System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/entities", "@aimpact/chat-api@1.0.1/provider", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Audio, Chats, IChatProperties, Chat, Message, KnowledgeBoxes, KnowledgeBox, __beyond_pkg, hmr;
  _export({
    Audio: void 0,
    Chats: void 0,
    IChatProperties: void 0,
    Chat: void 0,
    Message: void 0,
    KnowledgeBoxes: void 0,
    KnowledgeBox: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive116Entities) {
      dependency_1 = _beyondJsReactive116Entities;
    }, function (_aimpactChatApi101Provider) {
      dependency_2 = _aimpactChatApi101Provider;
    }, function (_aimpactChatSdk100Api) {
      dependency_3 = _aimpactChatSdk100Api;
    }, function (_aimpactAilearnApp100Config) {
      dependency_4 = _aimpactAilearnApp100Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_5 = _aimpactChatSdk100Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-api/provider', dependency_2], ['@aimpact/chat-sdk/api', dependency_3], ['@aimpact/chat-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5]]);
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

      /**************************************
      INTERNAL MODULE: ./chat/interfaces/chat
      **************************************/

      ims.set('./chat/interfaces/chat', {
        hash: 2333923011,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************************
      INTERNAL MODULE: ./chat/interfaces/message
      *****************************************/

      ims.set('./chat/interfaces/message', {
        hash: 1377842170,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************
      INTERNAL MODULE: ./chat/item
      ***************************/

      ims.set('./chat/item', {
        hash: 510645927,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _item = require("./messages/item");
          var _messages = require("./messages");
          /*bundle*/ // ChatItem

          class Chat extends _entities.Item {
            properties = ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'usage', 'children', 'knowledgeBoxId', 'metadata'];
            localdb = false;
            #messages;
            get messages() {
              return this.#messages;
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
              const collection = new _messages.Messages();
              const data = await collection.localLoad({
                chatId: this.id
              });
              collection.on('change', this.triggerEvent);
              if (response.data.messages?.length) {
                await collection.setEntries(response.data.messages);
              }
              this.#messages = collection;
            };
            async setAudioMessage({
              user,
              response
            }) {
              // const messageItem = new Message();
              if (this.#currentAudio.id !== user.id) {
                console.warn('son diferentes', this.#currentAudio.id, user.id);
                return;
              }
              // this.#currentAudio.set(user);
              this.#currentAudio.publish(user);
              const responseItem = new _item.Message();
              await responseItem.isReady;
              /**
               * Check with Felix if this is the correct way to do it
               */
              await responseItem.publish(response);
              const finalData = {
                ...user
              };
              this.triggerEvent();
              return responseItem;
            }
            #currentAudio;
            async sendAudio(audio, transcription = undefined) {
              try {
                const item = new _item.Message();
                await item.isReady;
                item.setOffline(true);
                const specs = {
                  chat: {
                    id: this.id
                  },
                  chatId: this.id,
                  type: 'audio',
                  audio,
                  role: 'user',
                  timestamp: Date.now()
                };
                if (transcription) {
                  specs.content = transcription;
                }
                this.#currentAudio = item;
                item.publishAudio(specs);
                this.triggerEvent();
                console.log(98, item.id, item);
                return item;
              } catch (e) {
                console.error(e);
              }
            }
            async sendMessage(content) {
              try {
                this.fetching = true;
                const item = new _item.Message();
                let response = new _item.Message();
                performance.mark('previous.create.messages');
                await Promise.all([item.isReady, response.isReady]);
                performance.mark('after.create.messages');
                const onListen = async () => {
                  if (!response) {
                    await response.isReady;
                    response.setOffline(true);
                    response.role = 'system';
                    response.publishSystem();
                  }
                  response.content = item.response;
                  this.triggerEvent();
                  //	this.#messages.elements(response.id).content = response.content;
                };

                const onEnd = () => {
                  this.trigger('response.finished');
                  console.log(100);
                  response.publish({
                    chatId: this.id,
                    chat: {
                      id: this.id
                    }
                  });
                  item.off('content.updated', onListen);
                };
                item.on('content.updated', onListen);
                item.on('response.finished', onEnd);
                performance.mark('previous.publish.messages');
                item.publish({
                  chatId: this.id,
                  content,
                  role: 'user',
                  timestamp: Date.now()
                });
                performance.mark('after.publish.messages');
                performance.measure('create.messages', 'previous.create.messages', 'after.create.messages');
                performance.measure('publish.messages', 'previous.publish.messages', 'after.publish.messages');
                return {
                  message: item,
                  response
                };
                this.triggerEvent();
                // return { response: response.data.response, message: response.data.message };
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
        hash: 688767946,
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
          }
          exports.Messages = Messages;
        }
      });

      /************************************
      INTERNAL MODULE: ./chat/messages/item
      ************************************/

      ims.set('./chat/messages/item', {
        hash: 3980910336,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _api = require("@aimpact/chat-sdk/api");
          var _config = require("@aimpact/chat-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/ // ChatItem

          class Message extends _entities.Item {
            properties = ['id', 'chatId', 'audio', 'chat', 'userId', 'role', 'content', 'usage', 'timestamp'];
            #api;
            #response = '';
            get response() {
              return this.#response;
            }
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Messages',
                provider: _provider.MessageProvider
              });
              const api = new _api.Api(_config.default.params.apis.chat);
              this.#api = api;
              this.reactiveProps(['autoplay']);
              this.#listen();
              this.initialise();
            }
            #onListen = () => {
              this.#response = this.#api.streamResponse;
              this.trigger('content.updated');
            };
            #listen = () => {
              this.#api.on('stream.response', this.#onListen);
            };
            #offEvents = () => {
              this.#api.off('stream.response', this.#onListen);
            };
            //@ts-ignore
            async publish(specs) {
              try {
                this.setOffline(true);
                const token = await _session.sessionWrapper.user.firebaseToken;
                this.#api.bearer(token).stream(`/conversations/${specs.chatId}/messages`, {
                  message: specs.content
                }).then(response => {
                  this.trigger('response.finished');
                  this.#offEvents();
                });
                super.publish(specs);
              } catch (e) {
                console.trace(e);
              }
            }
            async publishAudio(specs) {
              this.setOffline(true);
              return super.publish(specs);
            }
            async publishSystem() {
              this.setOffline(true);
              super.publish();
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
      __pkg.exports.descriptor = [{
        "im": "./audio/item",
        "from": "Audio",
        "name": "Audio"
      }, {
        "im": "./chat/collection",
        "from": "Chats",
        "name": "Chats"
      }, {
        "im": "./chat/interfaces/chat",
        "from": "IChatProperties",
        "name": "IChatProperties"
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
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Audio') && _export("Audio", Audio = require ? require('./audio/item').Audio : value);
        (require || prop === 'Chats') && _export("Chats", Chats = require ? require('./chat/collection').Chats : value);
        (require || prop === 'IChatProperties') && _export("IChatProperties", IChatProperties = require ? require('./chat/interfaces/chat').IChatProperties : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./chat/item').Chat : value);
        (require || prop === 'Message') && _export("Message", Message = require ? require('./chat/messages/item').Message : value);
        (require || prop === 'KnowledgeBoxes') && _export("KnowledgeBoxes", KnowledgeBoxes = require ? require('./knowledge-boxes/collection').KnowledgeBoxes : value);
        (require || prop === 'KnowledgeBox') && _export("KnowledgeBox", KnowledgeBox = require ? require('./knowledge-boxes/item').KnowledgeBox : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbWVzc2FnZXMiLCJsb2NhbGRiIiwibWVzc2FnZXMiLCJsb2FkQWxsIiwic3BlY3MiLCJyZXNwb25zZSIsImxvYWQiLCJNYXAiLCJjb2xsZWN0aW9uIiwiTWVzc2FnZXMiLCJkYXRhIiwibG9jYWxMb2FkIiwiY2hhdElkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsZW5ndGgiLCJzZXRFbnRyaWVzIiwic2V0QXVkaW9NZXNzYWdlIiwidXNlciIsImN1cnJlbnRBdWRpbyIsImNvbnNvbGUiLCJ3YXJuIiwicHVibGlzaCIsInJlc3BvbnNlSXRlbSIsIk1lc3NhZ2UiLCJpc1JlYWR5IiwiZmluYWxEYXRhIiwic2VuZEF1ZGlvIiwiYXVkaW8iLCJ0cmFuc2NyaXB0aW9uIiwic2V0T2ZmbGluZSIsImNoYXQiLCJ0eXBlIiwicm9sZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJjb250ZW50IiwicHVibGlzaEF1ZGlvIiwibG9nIiwiZSIsImVycm9yIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsInBlcmZvcm1hbmNlIiwibWFyayIsIlByb21pc2UiLCJhbGwiLCJvbkxpc3RlbiIsInB1Ymxpc2hTeXN0ZW0iLCJvbkVuZCIsInRyaWdnZXIiLCJvZmYiLCJtZWFzdXJlIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJnZXQiLCJNZXNzYWdlUHJvdmlkZXIiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiYXBpIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJyZWFjdGl2ZVByb3BzIiwibGlzdGVuIiwiaW5pdGlhbGlzZSIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwiI2xpc3RlbiIsIm9mZkV2ZW50cyIsIiNvZmZFdmVudHMiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0cmVhbSIsInRoZW4iLCJ0cmFjZSIsIktub3dsZWRnZUJveGVzIiwiS25vd2xlZGdlQm94IiwiS25vd2xlZGdlQm94UHJvdmlkZXIiXSwic291cmNlcyI6WyIvYXVkaW8vY29sbGVjdGlvbi50cyIsIi9hdWRpby9pdGVtLnRzIiwiL2NoYXQvY29sbGVjdGlvbi50cyIsIi9jaGF0LnRzIiwiL21lc3NhZ2UudHMiLCIvY2hhdC9pdGVtLnRzIiwiL2NoYXQvbWVzc2FnZXMvY29sbGVjdGlvbi50cyIsIi9jaGF0L21lc3NhZ2VzL2luZGV4LnRzIiwiL2NoYXQvbWVzc2FnZXMvaXRlbS50cyIsIi9rbm93bGVkZ2UtYm94ZXMvY29sbGVjdGlvbi50cyIsIi9rbm93bGVkZ2UtYm94ZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQU1NLE1BQU9HLE1BQU8sU0FBUUosU0FBQSxDQUFBSyxVQUFVO1lBQ3JDQyxJQUFJLEdBQUdILEtBQUEsQ0FBQUksS0FBSztZQUNGQyxTQUFTLEdBQUcsY0FBYztZQUMxQkMsRUFBRSxHQUFHLFVBQVU7WUFFekJDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENB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