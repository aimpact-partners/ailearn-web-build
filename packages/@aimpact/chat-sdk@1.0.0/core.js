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
        hash: 4178353749,
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
                let published = false;
                const onListen = async () => {
                  if (!published) {
                    published = true;
                    response.publishSystem({
                      offline: true,
                      specs: {
                        chatId: this.id,
                        chat: {
                          id: this.id
                        },
                        content: '',
                        role: 'system',
                        timestamp: Date.now()
                      }
                    });
                  }
                  response.updateContent({
                    content: item.response
                  });
                  response.triggerEvent();
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
        hash: 141693541,
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
            async updateContent(specs) {
              this.setOffline(true);
              //@ts-ignore
              await super.publish(specs);
              this.trigger(`content.updated`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbWVzc2FnZXMiLCJfY29yZSIsImxvY2FsZGIiLCJtZXNzYWdlcyIsImxvYWRBbGwiLCJzcGVjcyIsInJlc3BvbnNlIiwibG9hZCIsIk1hcCIsImNvbGxlY3Rpb24iLCJNZXNzYWdlcyIsImRhdGEiLCJsb2NhbExvYWQiLCJjaGF0SWQiLCJzb3J0QnkiLCJvbiIsInRyaWdnZXJFdmVudCIsImxlbmd0aCIsInNldEVudHJpZXMiLCJzZXRBdWRpb01lc3NhZ2UiLCJ1c2VyIiwiY3VycmVudEF1ZGlvIiwiY29uc29sZSIsIndhcm4iLCJwdWJsaXNoIiwicmVzcG9uc2VJdGVtIiwiTWVzc2FnZSIsImlzUmVhZHkiLCJmaW5hbERhdGEiLCJzZW5kQXVkaW8iLCJhdWRpbyIsInRyYW5zY3JpcHRpb24iLCJzZXRPZmZsaW5lIiwiY2hhdCIsInR5cGUiLCJyb2xlIiwibGFuZ3VhZ2UiLCJkZWZhdWx0IiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJjb250ZW50IiwicHVibGlzaEF1ZGlvIiwiZSIsImVycm9yIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsIlByb21pc2UiLCJhbGwiLCJwdWJsaXNoZWQiLCJvbkxpc3RlbiIsInB1Ymxpc2hTeXN0ZW0iLCJvZmZsaW5lIiwidXBkYXRlQ29udGVudCIsIm9uRW5kIiwidHJpZ2dlciIsIm9mZiIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwiZ2V0IiwiTWVzc2FnZVByb3ZpZGVyIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsImFwaSIsIkFwaSIsInBhcmFtcyIsImFwaXMiLCJyZWFjdGl2ZVByb3BzIiwibGlzdGVuIiwiaW5pdGlhbGlzZSIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwiI2xpc3RlbiIsIm9mZkV2ZW50cyIsIiNvZmZFdmVudHMiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0cmVhbSIsInRoZW4iLCJ0cmFjZSIsIktub3dsZWRnZUJveGVzIiwiS25vd2xlZGdlQm94IiwiS25vd2xlZGdlQm94UHJvdmlkZXIiXSwic291cmNlcyI6WyIvYXVkaW8vY29sbGVjdGlvbi50cyIsIi9hdWRpby9pdGVtLnRzIiwiL2NoYXQvY29sbGVjdGlvbi50cyIsIi9jaGF0LnRzIiwiL21lc3NhZ2UudHMiLCIvY2hhdC9pdGVtLnRzIiwiL2NoYXQvbWVzc2FnZXMvY29sbGVjdGlvbi50cyIsIi9jaGF0L21lc3NhZ2VzL2luZGV4LnRzIiwiL2NoYXQvbWVzc2FnZXMvaXRlbS50cyIsIi9rbm93bGVkZ2UtYm94ZXMvY29sbGVjdGlvbi50cyIsIi9rbm93bGVkZ2UtYm94ZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsU0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBTU0sTUFBT0csTUFBTyxTQUFRSixTQUFBLENBQUFLLFVBQVU7WUFDckNDLElBQUksR0FBR0gsS0FBQSxDQUFBSSxLQUFLO1lBQ0ZDLFNBQVMsR0FBRyxjQUFjO1lBQzFCQyxF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