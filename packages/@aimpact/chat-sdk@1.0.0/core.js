System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/entities", "@aimpact/chat-api@1.0.1/provider", "@aimpact/ailearn-app@0.0.2/config", "@aimpact/chat@1.0.1/api", "@beyond-js/kernel@0.1.9/core", "dayjs@1.11.10", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/api"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Audio, Chats, IChatProperties, Chat, Message, KnowledgeBoxes, KnowledgeBox, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp002Config) {
      dependency_3 = _aimpactAilearnApp002Config;
    }, function (_aimpactChat101Api) {
      dependency_4 = _aimpactChat101Api;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_dayjs) {
      dependency_6 = _dayjs;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100Api) {
      dependency_8 = _aimpactChatSdk100Api;
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-api/provider', dependency_2], ['@aimpact/chat-sdk/config', dependency_3], ['@aimpact/chat/api', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['dayjs', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat-sdk/api', dependency_8]]);
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

      /******************************************
      INTERNAL MODULE: ./conversations/collection
      ******************************************/

      ims.set('./conversations/collection', {
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

      /***********************************************
      INTERNAL MODULE: ./conversations/interfaces/chat
      ***********************************************/

      ims.set('./conversations/interfaces/chat', {
        hash: 2333923011,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************************
      INTERNAL MODULE: ./conversations/interfaces/message
      **************************************************/

      ims.set('./conversations/interfaces/message', {
        hash: 1243837466,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************
      INTERNAL MODULE: ./conversations/item
      ************************************/

      ims.set('./conversations/item', {
        hash: 2191243681,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("@aimpact/chat-sdk/config");
          var _api = require("@aimpact/chat/api");
          var _item = require("./messages/item");
          var _messages = require("./messages");
          var _core = require("@beyond-js/kernel/core");
          var _provider = require("./provider");
          /*bundle*/ // ChatItem

          // import { ChatProvider } from '@aimpact/chat-api/provider';

          class Chat extends _entities.Item {
            #api;
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
              this.#api = new _api.Api(_config.default.params.apis.chat);
            }
            loadAll = async specs => {
              const response = await this.load(specs);
              const collection = new _messages.Messages();
              const data = await collection.localLoad({
                conversationId: this.id,
                sortBy: 'timestamp'
              });
              collection.on('change', this.triggerEvent);
              if (response.data.messages?.length) {
                await collection.setEntries(response.data.messages);
              }
              this.#messages = collection;
              globalThis.m = collection;
              globalThis.c = this;
            };
            async setAudioMessage(response) {
              try {
                const responseItem = new _item.Message();
                await responseItem.isReady;
                await responseItem.saveMessage(response);
                this.triggerEvent();
                return responseItem;
              } catch (e) {
                console.error(e);
              }
            }
            #currentAudio;
            /**
             * This method saves the audio locally to be able to reproduce it.
             * @param audio
             * @param transcription
             * @returns
             */
            async saveAudioLocally(audio, transcription = undefined) {
              try {
                const item = new _item.Message();
                await item.isReady;
                item.setOffline(true);
                const specs = {
                  chat: {
                    id: this.id
                  },
                  conversationId: this.id,
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
                await item.saveMessage(specs);
                this.setOffline(false);
                this.triggerEvent();
                return item;
              } catch (e) {
                console.error(e);
              }
            }
            async sendMessage(content) {
              try {
                this.fetching = true;
                const item = new _item.Message({
                  chat: this
                });
                let response = new _item.Message({
                  chat: this
                });
                await Promise.all([item.isReady, response.isReady]);
                let published = false;
                const onListen = async () => {
                  if (!published) {
                    published = true;
                    response.publishSystem({
                      offline: true,
                      specs: {
                        conversationId: this.id,
                        chat: {
                          id: this.id
                        },
                        conversation: {
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
                };
                const onEnd = () => {
                  this.trigger('response.finished');
                  response.updateContent({
                    content: item.response
                  });
                  item.off('content.updated', onListen);
                };
                item.on('content.updated', onListen);
                item.on('response.finished', onEnd);
                const specs = {
                  conversationId: this.id,
                  systemId: response.id,
                  id: item.id,
                  timestamp: Date.now(),
                  role: 'user'
                };
                if (typeof content === 'string') {
                  specs.content = content;
                } else {
                  specs.multipart = true;
                  specs.audio = content;
                }
                item.publish(specs);
                return {
                  message: item,
                  response
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

      /***************************************************
      INTERNAL MODULE: ./conversations/messages/collection
      ***************************************************/

      ims.set('./conversations/messages/collection', {
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

      /**********************************************
      INTERNAL MODULE: ./conversations/messages/index
      **********************************************/

      ims.set('./conversations/messages/index', {
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

      /*********************************************
      INTERNAL MODULE: ./conversations/messages/item
      *********************************************/

      ims.set('./conversations/messages/item', {
        hash: 3060398311,
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
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/ // ChatItem

          class Message extends _entities.Item {
            properties = ['id', 'chatId', 'audio', 'chat', 'userId', 'role', 'content', 'usage', 'timestamp', 'conversationId'];
            #api;
            #response = '';
            //#endregion
            #chat;
            localFields = ['audio'];
            #parsedContent;
            get response() {
              return this.#response;
            }
            constructor({
              id = undefined,
              chat
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Messages',
                provider: _provider.MessageProvider
              });
              this.#chat = chat;
              const api = new _api.Api(_config.default.params.apis.chat);
              this.#api = api;
              this.reactiveProps(['autoplay']);
              this.#listen();
              this.initialise();
            }
            async initialise() {
              super.initialise();
              //await this.isReady;
              //this.#processContent();
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
                const promise = new _core.PendingPromise();
                const token = await _session.sessionWrapper.user.firebaseToken;
                this.#api.bearer(token).stream(`/conversations/${this.#chat.id}/messages/tools`, {
                  ...specs
                }).then(response => {
                  console.log(20, response);
                  this.trigger('response.finished');
                  this.#offEvents();
                }).catch(e => {
                  console.error(e);
                });
                super.publish(specs);
                return promise;
              } catch (e) {
                console.trace(e);
              }
            }
            async publishSystem({
              offline,
              specs
            }) {
              this.setOffline(offline);
              super.publish(specs);
            }
            async updateContent(specs) {
              this.setOffline(true);
              //@ts-ignore
              await super.publish(specs);
              this.trigger(`content.updated`);
            }
          }
          //
          exports.Message = Message;
        }
      });

      /****************************************
      INTERNAL MODULE: ./conversations/provider
      ****************************************/

      ims.set('./conversations/provider', {
        hash: 1831905359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatProvider = void 0;
          var _api = require("@aimpact/chat/api");
          var _config = require("@aimpact/chat-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ChatProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis.chat);
              this.#parent = parent;
            }
            async load(specs) {
              const token = await _session.sessionWrapper.user.firebaseToken;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/conversations/${this.#parent.id}`);
              if (!status) {
                throw new Error('error loading chat');
              }
              return {
                status,
                data
              };
            }
          }
          exports.ChatProvider = ChatProvider;
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
        "im": "./conversations/collection",
        "from": "Chats",
        "name": "Chats"
      }, {
        "im": "./conversations/interfaces/chat",
        "from": "IChatProperties",
        "name": "IChatProperties"
      }, {
        "im": "./conversations/item",
        "from": "Chat",
        "name": "Chat"
      }, {
        "im": "./conversations/messages/item",
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
        (require || prop === 'Chats') && _export("Chats", Chats = require ? require('./conversations/collection').Chats : value);
        (require || prop === 'IChatProperties') && _export("IChatProperties", IChatProperties = require ? require('./conversations/interfaces/chat').IChatProperties : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./conversations/item').Chat : value);
        (require || prop === 'Message') && _export("Message", Message = require ? require('./conversations/messages/item').Message : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29uZmlnIiwiX2FwaSIsIl9tZXNzYWdlcyIsIl9jb3JlIiwiYXBpIiwibG9jYWxkYiIsIm1lc3NhZ2VzIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJjaGF0IiwibG9hZEFsbCIsInNwZWNzIiwicmVzcG9uc2UiLCJsb2FkIiwiY29sbGVjdGlvbiIsIk1lc3NhZ2VzIiwiZGF0YSIsImxvY2FsTG9hZCIsImNvbnZlcnNhdGlvbklkIiwic29ydEJ5Iiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsZW5ndGgiLCJzZXRFbnRyaWVzIiwiZ2xvYmFsVGhpcyIsIm0iLCJjIiwic2V0QXVkaW9NZXNzYWdlIiwicmVzcG9uc2VJdGVtIiwiTWVzc2FnZSIsImlzUmVhZHkiLCJzYXZlTWVzc2FnZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjdXJyZW50QXVkaW8iLCJzYXZlQXVkaW9Mb2NhbGx5IiwiYXVkaW8iLCJ0cmFuc2NyaXB0aW9uIiwic2V0T2ZmbGluZSIsInR5cGUiLCJyb2xlIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImNvbnRlbnQiLCJzZW5kTWVzc2FnZSIsImZldGNoaW5nIiwiUHJvbWlzZSIsImFsbCIsInB1Ymxpc2hlZCIsIm9uTGlzdGVuIiwicHVibGlzaFN5c3RlbSIsIm9mZmxpbmUiLCJjb252ZXJzYXRpb24iLCJ1cGRhdGVDb250ZW50Iiwib25FbmQiLCJ0cmlnZ2VyIiwib2ZmIiwic3lzdGVtSWQiLCJtdWx0aXBhcnQiLCJwdWJsaXNoIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJnZXQiLCJNZXNzYWdlUHJvdmlkZXIiLCJfc2Vzc2lvbiIsImxvY2FsRmllbGRzIiwicGFyc2VkQ29udGVudCIsInJlYWN0aXZlUHJvcHMiLCJsaXN0ZW4iLCJpbml0aWFsaXNlIiwiI29uTGlzdGVuIiwic3RyZWFtUmVzcG9uc2UiLCIjbGlzdGVuIiwib2ZmRXZlbnRzIiwiI29mZkV2ZW50cyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0cmVhbSIsInRoZW4iLCJsb2ciLCJjYXRjaCIsInRyYWNlIiwicGFyZW50Iiwic3RhdHVzIiwiRXJyb3IiLCJLbm93bGVkZ2VCb3hlcyIsIktub3dsZWRnZUJveCIsIktub3dsZWRnZUJveFByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL2F1ZGlvL2NvbGxlY3Rpb24udHMiLCIvYXVkaW8vaXRlbS50cyIsIi9jb252ZXJzYXRpb25zL2NvbGxlY3Rpb24udHMiLCIvY2hhdC50cyIsIi9tZXNzYWdlLnRzIiwiL2NvbnZlcnNhdGlvbnMvaXRlbS50cyIsIi9jb252ZXJzYXRpb25zL21lc3NhZ2VzL2NvbGxlY3Rpb24udHMiLCIvY29udmVyc2F0aW9ucy9tZXNzYWdlcy9pbmRleC50cyIsIi9jb252ZXJzYXRpb25zL21lc3NhZ2VzL2l0ZW0udHMiLCIvY29udmVyc2F0aW9ucy9wcm92aWRlci50cyIsIi9rbm93bGVkZ2UtYm94ZXMvY29sbGVjdGlvbi50cyIsIi9rbm93bGVkZ2UtYm94ZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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