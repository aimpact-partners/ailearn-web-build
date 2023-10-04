System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/entities", "@aimpact/chat-api@1.0.1/provider", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@0.0.2/config", "@aimpact/chat-sdk@1.0.0/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Audio, Chats, IChatProperties, Chat, Message, KnowledgeBoxes, KnowledgeBox, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk100Api) {
      dependency_4 = _aimpactChatSdk100Api;
    }, function (_aimpactAilearnApp002Config) {
      dependency_5 = _aimpactAilearnApp002Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-api/provider', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@aimpact/chat-sdk/api', dependency_4], ['@aimpact/chat-sdk/config', dependency_5], ['@aimpact/chat-sdk/session', dependency_6]]);
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
        hash: 3856402657,
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
        hash: 3862367910,
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
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/ // ChatItem

          class Chat extends _entities.Item {
            properties = ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'language', 'usage', 'children', 'knowledgeBoxId', 'metadata'];
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
                chatId: this.id,
                sortBy: 'timestamp'
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
                  language: this.language?.default ?? _core.languages.current,
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
                await Promise.all([item.isReady, response.isReady]);
                const onListen = async () => {
                  if (!response) {
                    await response.isReady;
                    response.setOffline(true);
                    response.role = 'system';
                    response.publishSystem({
                      offline: true
                    });
                  }
                  response.content = item.response;
                  this.triggerEvent();
                  //	this.#messages.elements(response.id).content = response.content;
                };

                const onEnd = () => {
                  this.trigger('response.finished');
                  response.publishSystem({
                    specs: {
                      chatId: this.id,
                      chat: {
                        id: this.id
                      },
                      role: 'system',
                      timestamp: Date.now()
                    }
                  });
                  item.off('content.updated', onListen);
                };
                item.on('content.updated', onListen);
                item.on('response.finished', onEnd);
                item.publish({
                  chatId: this.id,
                  content,
                  role: 'user',
                  timestamp: Date.now()
                });
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
        hash: 3960124367,
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
            async publishSystem({
              offline,
              specs
            }) {
              if (offline) this.setOffline(offline);
              super.publish(specs);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbWVzc2FnZXMiLCJfY29yZSIsImxvY2FsZGIiLCJtZXNzYWdlcyIsImxvYWRBbGwiLCJzcGVjcyIsInJlc3BvbnNlIiwibG9hZCIsIk1hcCIsImNvbGxlY3Rpb24iLCJNZXNzYWdlcyIsImRhdGEiLCJsb2NhbExvYWQiLCJjaGF0SWQiLCJzb3J0QnkiLCJvbiIsInRyaWdnZXJFdmVudCIsImxlbmd0aCIsInNldEVudHJpZXMiLCJzZXRBdWRpb01lc3NhZ2UiLCJ1c2VyIiwiY3VycmVudEF1ZGlvIiwiY29uc29sZSIsIndhcm4iLCJwdWJsaXNoIiwicmVzcG9uc2VJdGVtIiwiTWVzc2FnZSIsImlzUmVhZHkiLCJmaW5hbERhdGEiLCJzZW5kQXVkaW8iLCJhdWRpbyIsInRyYW5zY3JpcHRpb24iLCJzZXRPZmZsaW5lIiwiY2hhdCIsInR5cGUiLCJyb2xlIiwibGFuZ3VhZ2UiLCJkZWZhdWx0IiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJjb250ZW50IiwicHVibGlzaEF1ZGlvIiwibG9nIiwiZSIsImVycm9yIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsIlByb21pc2UiLCJhbGwiLCJvbkxpc3RlbiIsInB1Ymxpc2hTeXN0ZW0iLCJvZmZsaW5lIiwib25FbmQiLCJ0cmlnZ2VyIiwib2ZmIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJnZXQiLCJNZXNzYWdlUHJvdmlkZXIiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiYXBpIiwiQXBpIiwicGFyYW1zIiwiYXBpcyIsInJlYWN0aXZlUHJvcHMiLCJsaXN0ZW4iLCJpbml0aWFsaXNlIiwiI29uTGlzdGVuIiwic3RyZWFtUmVzcG9uc2UiLCIjbGlzdGVuIiwib2ZmRXZlbnRzIiwiI29mZkV2ZW50cyIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJmaXJlYmFzZVRva2VuIiwiYmVhcmVyIiwic3RyZWFtIiwidGhlbiIsInRyYWNlIiwiS25vd2xlZGdlQm94ZXMiLCJLbm93bGVkZ2VCb3giLCJLbm93bGVkZ2VCb3hQcm92aWRlciJdLCJzb3VyY2VzIjpbIi9hdWRpby9jb2xsZWN0aW9uLnRzIiwiL2F1ZGlvL2l0ZW0udHMiLCIvY2hhdC9jb2xsZWN0aW9uLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0L2l0ZW0udHMiLCIvY2hhdC9tZXNzYWdlcy9jb2xsZWN0aW9uLnRzIiwiL2NoYXQvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdC9tZXNzYWdlcy9pdGVtLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9jb2xsZWN0aW9uLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFNTSxNQUFPRyxNQUFPLFNBQVFKLFNBQUEsQ0FBQUssVUFBVTtZQUNyQ0MsSUFBSSxHQUFHSCxLQUFBLENBQUFJLEtBQUs7WUFDRkMsU0FBUyxHQUFHLGNBQWM7WUFDMUJDLEVBQUUsR0FBRyxVQUFVO1lBRXpCQyxZ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