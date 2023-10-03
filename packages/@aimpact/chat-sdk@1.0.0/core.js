System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/entities", "@aimpact/chat-api@1.0.1/provider", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/session"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp100Config) {
      dependency_5 = _aimpactAilearnApp100Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
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
        hash: 1789810421,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbWVzc2FnZXMiLCJfY29yZSIsImxvY2FsZGIiLCJtZXNzYWdlcyIsImxvYWRBbGwiLCJzcGVjcyIsInJlc3BvbnNlIiwibG9hZCIsIk1hcCIsImNvbGxlY3Rpb24iLCJNZXNzYWdlcyIsImRhdGEiLCJsb2NhbExvYWQiLCJjaGF0SWQiLCJvbiIsInRyaWdnZXJFdmVudCIsImxlbmd0aCIsInNldEVudHJpZXMiLCJzZXRBdWRpb01lc3NhZ2UiLCJ1c2VyIiwiY3VycmVudEF1ZGlvIiwiY29uc29sZSIsIndhcm4iLCJwdWJsaXNoIiwicmVzcG9uc2VJdGVtIiwiTWVzc2FnZSIsImlzUmVhZHkiLCJmaW5hbERhdGEiLCJzZW5kQXVkaW8iLCJhdWRpbyIsInRyYW5zY3JpcHRpb24iLCJzZXRPZmZsaW5lIiwiY2hhdCIsInR5cGUiLCJyb2xlIiwibGFuZ3VhZ2UiLCJkZWZhdWx0IiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJjb250ZW50IiwicHVibGlzaEF1ZGlvIiwibG9nIiwiZSIsImVycm9yIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsInBlcmZvcm1hbmNlIiwibWFyayIsIlByb21pc2UiLCJhbGwiLCJvbkxpc3RlbiIsInB1Ymxpc2hTeXN0ZW0iLCJvbkVuZCIsInRyaWdnZXIiLCJvZmYiLCJtZWFzdXJlIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJnZXQiLCJNZXNzYWdlUHJvdmlkZXIiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiYXBpIiwiQXBpIiwicGFyYW1zIiwiYXBpcyIsInJlYWN0aXZlUHJvcHMiLCJsaXN0ZW4iLCJpbml0aWFsaXNlIiwiI29uTGlzdGVuIiwic3RyZWFtUmVzcG9uc2UiLCIjbGlzdGVuIiwib2ZmRXZlbnRzIiwiI29mZkV2ZW50cyIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJmaXJlYmFzZVRva2VuIiwiYmVhcmVyIiwic3RyZWFtIiwidGhlbiIsInRyYWNlIiwiS25vd2xlZGdlQm94ZXMiLCJLbm93bGVkZ2VCb3giLCJLbm93bGVkZ2VCb3hQcm92aWRlciJdLCJzb3VyY2VzIjpbIi9hdWRpby9jb2xsZWN0aW9uLnRzIiwiL2F1ZGlvL2l0ZW0udHMiLCIvY2hhdC9jb2xsZWN0aW9uLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0L2l0ZW0udHMiLCIvY2hhdC9tZXNzYWdlcy9jb2xsZWN0aW9uLnRzIiwiL2NoYXQvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdC9tZXNzYWdlcy9pdGVtLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9jb2xsZWN0aW9uLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFNTSxNQUFPRyxNQUFPLFNBQVFKLFNBQUEsQ0FBQUssVUFBVTtZQUNyQ0MsSUFBSSxHQUFHSCxLQUFBLENBQUFJLEtBQUs7WUFDRkMsU0FBUyxHQUFHLGNBQWM7WUFDMUJDLEVBQUUsR0FBRyxV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