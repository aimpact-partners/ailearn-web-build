System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/entities", "@aimpact/chat-api@0.1.0/provider", "@aimpact/ailearn-app@0.0.23/config", "@aimpact/chat@1.0.1/api", "@beyond-js/kernel@0.1.9/core", "dayjs@1.11.10", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/api", "pragmate-ui@0.0.3/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Audio, Chats, IChatProperties, IChat, Chat, Message, KnowledgeBoxes, KnowledgeBox, __beyond_pkg, hmr;
  _export({
    Audio: void 0,
    Chats: void 0,
    IChatProperties: void 0,
    IChat: void 0,
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
    }, function (_aimpactChatApi010Provider) {
      dependency_2 = _aimpactChatApi010Provider;
    }, function (_aimpactAilearnApp0023Config) {
      dependency_3 = _aimpactAilearnApp0023Config;
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
    }, function (_pragmateUi003Components) {
      dependency_9 = _pragmateUi003Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.23"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-api/provider', dependency_2], ['@aimpact/chat-sdk/config', dependency_3], ['@aimpact/chat/api', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['dayjs', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat-sdk/api', dependency_8], ['pragmate-ui/components', dependency_9]]);
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
        hash: 1060672188,
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
        hash: 2821401388,
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
                  this.trigger(`message.${response.id}.updated`);
                  response.updateContent({
                    content: item.response
                  });
                  response.triggerEvent();
                  this.triggerEvent();
                };
                const onEnd = () => {
                  response.updateContent({
                    content: item.response
                  });
                  this.trigger(`message.${response.id}.ended`);
                  this.trigger(`message.${response.id}.updated`);
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
        hash: 1296214225,
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
                this.#api.bearer(token).stream(`/conversations/${this.#chat.id}/messages`, {
                  ...specs
                }).then(response => {
                  this.trigger('response.finished');
                  this.#offEvents();
                }).catch(e => {
                  console.error(e);
                });
                /**
                 * @todo: Julio, the next code probably can be removed;
                 * I don't know what transcription is or where is used
                 */
                this.#api.on('action.received', () => {
                  try {
                    let transcription = this.#api?.actions?.find(action => {
                      const data = JSON.parse(action);
                      if (data.type === 'transcription') {
                        return true;
                      }
                    });
                    if (transcription) {
                      transcription = JSON.parse(transcription);
                      super.publish({
                        content: transcription.data.transcription
                      });
                    }
                  } catch (e) {
                    console.error(e);
                  }
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
        "im": "./conversations/interfaces/chat",
        "from": "IChat",
        "name": "IChat"
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
        (require || prop === 'IChat') && _export("IChat", IChat = require ? require('./conversations/interfaces/chat').IChat : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29uZmlnIiwiX2FwaSIsIl9tZXNzYWdlcyIsIl9jb3JlIiwiYXBpIiwibG9jYWxkYiIsIm1lc3NhZ2VzIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJjaGF0IiwibG9hZEFsbCIsInNwZWNzIiwicmVzcG9uc2UiLCJsb2FkIiwiY29sbGVjdGlvbiIsIk1lc3NhZ2VzIiwiZGF0YSIsImxvY2FsTG9hZCIsImNvbnZlcnNhdGlvbklkIiwic29ydEJ5Iiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsZW5ndGgiLCJzZXRFbnRyaWVzIiwiZ2xvYmFsVGhpcyIsIm0iLCJjIiwic2V0QXVkaW9NZXNzYWdlIiwicmVzcG9uc2VJdGVtIiwiTWVzc2FnZSIsImlzUmVhZHkiLCJzYXZlTWVzc2FnZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjdXJyZW50QXVkaW8iLCJzYXZlQXVkaW9Mb2NhbGx5IiwiYXVkaW8iLCJ0cmFuc2NyaXB0aW9uIiwic2V0T2ZmbGluZSIsInR5cGUiLCJyb2xlIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImNvbnRlbnQiLCJzZW5kTWVzc2FnZSIsImZldGNoaW5nIiwiUHJvbWlzZSIsImFsbCIsInB1Ymxpc2hlZCIsIm9uTGlzdGVuIiwicHVibGlzaFN5c3RlbSIsIm9mZmxpbmUiLCJjb252ZXJzYXRpb24iLCJ0cmlnZ2VyIiwidXBkYXRlQ29udGVudCIsIm9uRW5kIiwib2ZmIiwic3lzdGVtSWQiLCJtdWx0aXBhcnQiLCJwdWJsaXNoIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJnZXQiLCJNZXNzYWdlUHJvdmlkZXIiLCJfc2Vzc2lvbiIsImxvY2FsRmllbGRzIiwicGFyc2VkQ29udGVudCIsInJlYWN0aXZlUHJvcHMiLCJsaXN0ZW4iLCJpbml0aWFsaXNlIiwiI29uTGlzdGVuIiwic3RyZWFtUmVzcG9uc2UiLCIjbGlzdGVuIiwib2ZmRXZlbnRzIiwiI29mZkV2ZW50cyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0cmVhbSIsInRoZW4iLCJjYXRjaCIsImFjdGlvbnMiLCJmaW5kIiwiYWN0aW9uIiwiSlNPTiIsInBhcnNlIiwidHJhY2UiLCJwYXJlbnQiLCJzdGF0dXMiLCJFcnJvciIsIktub3dsZWRnZUJveGVzIiwiS25vd2xlZGdlQm94IiwiS25vd2xlZGdlQm94UHJvdmlkZXIiXSwic291cmNlcyI6WyIvYXVkaW8vY29sbGVjdGlvbi50cyIsIi9hdWRpby9pdGVtLnRzIiwiL2NvbnZlcnNhdGlvbnMvY29sbGVjdGlvbi50cyIsIi9jaGF0LnRzIiwiL21lc3NhZ2UudHMiLCIvY29udmVyc2F0aW9ucy9pdGVtLnRzIiwiL2NvbnZlcnNhdGlvbnMvbWVzc2FnZXMvY29sbGVjdGlvbi50cyIsIi9jb252ZXJzYXRpb25zL21lc3NhZ2VzL2luZGV4LnRzIiwiL2NvbnZlcnNhdGlvbnMvbWVzc2FnZXMvaXRlbS50cyIsIi9jb252ZXJzYXRpb25zL3Byb3ZpZGVyLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9jb2xsZWN0aW9uLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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