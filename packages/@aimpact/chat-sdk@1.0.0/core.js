System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/entities", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Audio, Chats, IChatProperties, IChat, Chat, Message, KnowledgeBoxes, KnowledgeBox, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive1112Entities) {
      dependency_1 = _beyondJsReactive1112Entities;
    }, function (_aimpactChatSdk100Api) {
      dependency_2 = _aimpactChatSdk100Api;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_3 = _aimpactAilearnApp0032Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_4 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-sdk/api', dependency_2], ['@aimpact/chat-sdk/config', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@beyond-js/kernel/core', dependency_5]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./audio/collection
      **********************************/
      ims.set('./audio/collection', {
        hash: 253578571,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Audios = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          class Audios extends _entities.Collection {
            item = _item.Audio;
            storeName = 'AudioRecords';
            db = 'chat-api';
            constructor(a) {
              super(a);
              // this.provider = new AudioProvider();
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
        hash: 2422576646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Audio = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          /*bundle*/ // AudioItem

          class Audio extends _entities.Item {
            properties = ['id', 'userId', 'category'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'AudioRecords'
              });
            }
          }
          exports.Audio = Audio;
        }
      });

      /****************************************
      INTERNAL MODULE: ./chats/collection/index
      ****************************************/

      ims.set('./chats/collection/index', {
        hash: 2314788938,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chats = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("../item");
          var _provider = require("./provider");
          /*bundle*/
          class Chats extends _entities.Collection {
            item = _item.Chat;
            constructor() {
              super({
                provider: _provider.ChatCollectionProvider,
                storeName: 'Chat',
                db: 'chat-api'
              });
            }
          }
          exports.Chats = Chats;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./chats/collection/provider
      *******************************************/

      ims.set('./chats/collection/provider', {
        hash: 317469146,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatCollectionProvider = void 0;
          var _api = require("@aimpact/chat-sdk/api");
          var _config = require("@aimpact/chat-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ChatCollectionProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis.chat);
              this.#parent = parent;
            }
            async list() {
              const token = await _session.sessionWrapper.user.firebaseToken;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/chats`);
              if (!status) {
                throw new Error('error loading chat');
              }
              return {
                status,
                data
              };
            }
          }
          exports.ChatCollectionProvider = ChatCollectionProvider;
        }
      });

      /***************************************
      INTERNAL MODULE: ./chats/interfaces/chat
      ***************************************/

      ims.set('./chats/interfaces/chat', {
        hash: 824696355,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************************
      INTERNAL MODULE: ./chats/interfaces/message
      ******************************************/

      ims.set('./chats/interfaces/message', {
        hash: 4202433863,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./chats/item/index
      **********************************/

      ims.set('./chats/item/index', {
        hash: 1296371576,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("@aimpact/chat-sdk/config");
          var _api = require("@aimpact/chat-sdk/api");
          var _item = require("../messages/item");
          var _messages = require("../messages");
          var _core = require("@beyond-js/kernel/core");
          var _provider = require("./provider");
          /*bundle*/ // ChatItem

          class Chat extends _entities.Item {
            #api;
            properties = ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'language', 'usage', 'ch ildren', 'knowledgeBoxId', 'user', 'metadata'];
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
              globalThis.chat = this;
              // console.log(`chat is being exposed in console as chat`, id);
            }
            loadAll = async specs => {
              const response = await this.load(specs);
              const collection = new _messages.Messages();
              const data = await collection.localLoad({
                chatId: this.id,
                sortBy: 'timestamp',
                limit: 1000
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
                        chatId: this.id,
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
                  chatId: this.id,
                  systemId: response.id,
                  id: item.id,
                  // timestamp: Date.now(),
                  role: 'user'
                };
                if (typeof content === 'string') {
                  specs.content = content;
                } else {
                  specs.multipart = true;
                  specs.audio = content;
                }
                console.log(2);
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

      /*************************************
      INTERNAL MODULE: ./chats/item/provider
      *************************************/

      ims.set('./chats/item/provider', {
        hash: 2565157831,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatProvider = void 0;
          var _api = require("@aimpact/chat-sdk/api");
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
              } = await this.#api.get(`/chats/${this.#parent.id}`);
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

      /*******************************************
      INTERNAL MODULE: ./chats/messages/collection
      *******************************************/

      ims.set('./chats/messages/collection', {
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

      /**************************************
      INTERNAL MODULE: ./chats/messages/index
      **************************************/

      ims.set('./chats/messages/index', {
        hash: 1504257781,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          // import { MessageProvider } from '@aimpact/chat-api/provider';

          class Messages extends _entities.Collection {
            item = _item.Message;
            constructor() {
              super({
                storeName: 'Messages',
                db: 'chat-api'
              });
            }
          }
          exports.Messages = Messages;
        }
      });

      /*************************************
      INTERNAL MODULE: ./chats/messages/item
      *************************************/

      ims.set('./chats/messages/item', {
        hash: 702312539,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _api = require("@aimpact/chat-sdk/api");
          var _config = require("@aimpact/chat-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/ // ChatItem

          class Message extends _entities.Item {
            properties = ['id', 'chatId', 'audio', 'chat', 'userId', 'role', 'content', 'usage', 'timestamp'];
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
                storeName: 'Messages'
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
                this.#api.bearer(token).stream(`/chats/${this.#chat.id}/messages`, {
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

      /********************************************
      INTERNAL MODULE: ./knowledge-boxes/collection
      ********************************************/

      ims.set('./knowledge-boxes/collection', {
        hash: 218534898,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBoxes = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          var _api = require("@aimpact/chat-sdk/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/chat-sdk/config");
          /*bundle*/
          class KnowledgeBoxes extends _entities.Collection {
            item = _item.KnowledgeBox;
            #api;
            #project;
            #url = _config.default.params.DOCUMENTS_SERVER;
            get api() {
              return this.#api;
            }
            constructor() {
              super({
                storeName: 'KnowledgeBoxes',
                db: 'chat-api'
              });
              this.#api = new _api.Api(this.#url);
              this.#project = _config.default.params.project;
            }
            async list(filter) {
              try {
                this.fetching = true;
                const specs = {
                  type: 'files',
                  userId: _session.sessionWrapper.userId,
                  project: this.#project
                };
                if (filter) specs['filter'] = filter;
                const response = await this.#api.get('/list', specs);
                if (!response.status) throw new Error(response.error);
                return response.data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = true;
              }
            }
            async remove(path) {
              try {
                if (!path) {
                  return {
                    status: false,
                    error: 'No path provided'
                  };
                }
                this.fetching = true;
                const specs = {
                  userId: _session.sessionWrapper.userId,
                  project: this.#project
                };
                const response = await this.#api.delete('/delete', specs);
                if (!response.status) throw new Error(response.error);
                return response.data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = true;
              }
            }
          }
          exports.KnowledgeBoxes = KnowledgeBoxes;
        }
      });

      /**************************************
      INTERNAL MODULE: ./knowledge-boxes/item
      **************************************/

      ims.set('./knowledge-boxes/item', {
        hash: 1885230964,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBox = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          /*bundle*/ // KnowledgeBox

          class KnowledgeBox extends _entities.Item {
            properties = ['id', 'path', 'identifier', 'documents', 'type'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'KnowledgeBoxes'
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
        "im": "./chats/collection/index",
        "from": "Chats",
        "name": "Chats"
      }, {
        "im": "./chats/interfaces/chat",
        "from": "IChatProperties",
        "name": "IChatProperties"
      }, {
        "im": "./chats/interfaces/chat",
        "from": "IChat",
        "name": "IChat"
      }, {
        "im": "./chats/item/index",
        "from": "Chat",
        "name": "Chat"
      }, {
        "im": "./chats/messages/item",
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
        (require || prop === 'Chats') && _export("Chats", Chats = require ? require('./chats/collection/index').Chats : value);
        (require || prop === 'IChatProperties') && _export("IChatProperties", IChatProperties = require ? require('./chats/interfaces/chat').IChatProperties : value);
        (require || prop === 'IChat') && _export("IChat", IChat = require ? require('./chats/interfaces/chat').IChat : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./chats/item/index').Chat : value);
        (require || prop === 'Message') && _export("Message", Message = require ? require('./chats/messages/item').Message : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsImEiLCJpbml0IiwiZXhwb3J0cyIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiaWQiLCJ1bmRlZmluZWQiLCJfcHJvdmlkZXIiLCJDaGF0cyIsIkNoYXQiLCJwcm92aWRlciIsIkNoYXRDb2xsZWN0aW9uUHJvdmlkZXIiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiYXBpIiwicGFyZW50IiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJjaGF0IiwibGlzdCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbWVzc2FnZXMiLCJfY29yZSIsImxvY2FsZGIiLCJtZXNzYWdlcyIsIkNoYXRQcm92aWRlciIsImdsb2JhbFRoaXMiLCJsb2FkQWxsIiwic3BlY3MiLCJyZXNwb25zZSIsImxvYWQiLCJjb2xsZWN0aW9uIiwiTWVzc2FnZXMiLCJsb2NhbExvYWQiLCJjaGF0SWQiLCJzb3J0QnkiLCJsaW1pdCIsIm9uIiwidHJpZ2dlckV2ZW50IiwibGVuZ3RoIiwic2V0RW50cmllcyIsIm0iLCJjIiwic2V0QXVkaW9NZXNzYWdlIiwicmVzcG9uc2VJdGVtIiwiTWVzc2FnZSIsImlzUmVhZHkiLCJzYXZlTWVzc2FnZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjdXJyZW50QXVkaW8iLCJzYXZlQXVkaW9Mb2NhbGx5IiwiYXVkaW8iLCJ0cmFuc2NyaXB0aW9uIiwic2V0T2ZmbGluZSIsInR5cGUiLCJyb2xlIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImNvbnRlbnQiLCJzZW5kTWVzc2FnZSIsImZldGNoaW5nIiwiUHJvbWlzZSIsImFsbCIsInB1Ymxpc2hlZCIsIm9uTGlzdGVuIiwicHVibGlzaFN5c3RlbSIsIm9mZmxpbmUiLCJjb252ZXJzYXRpb24iLCJ0cmlnZ2VyIiwidXBkYXRlQ29udGVudCIsIm9uRW5kIiwib2ZmIiwic3lzdGVtSWQiLCJtdWx0aXBhcnQiLCJsb2ciLCJwdWJsaXNoIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJsb2NhbEZpZWxkcyIsInBhcnNlZENvbnRlbnQiLCJyZWFjdGl2ZVByb3BzIiwibGlzdGVuIiwiaW5pdGlhbGlzZSIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwiI2xpc3RlbiIsIm9mZkV2ZW50cyIsIiNvZmZFdmVudHMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJzdHJlYW0iLCJ0aGVuIiwiY2F0Y2giLCJhY3Rpb25zIiwiZmluZCIsImFjdGlvbiIsIkpTT04iLCJwYXJzZSIsInRyYWNlIiwiS25vd2xlZGdlQm94ZXMiLCJLbm93bGVkZ2VCb3giLCJwcm9qZWN0IiwidXJsIiwiRE9DVU1FTlRTX1NFUlZFUiIsImZpbHRlciIsInVzZXJJZCIsInJlbW92ZSIsInBhdGgiLCJkZWxldGUiXSwic291cmNlcyI6WyIvYXVkaW8vY29sbGVjdGlvbi50cyIsIi9hdWRpby9pdGVtLnRzIiwiL2NoYXRzL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY2hhdHMvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9jaGF0LnRzIiwiL21lc3NhZ2UudHMiLCIvY2hhdHMvaXRlbS9pbmRleC50cyIsIi9jaGF0cy9pdGVtL3Byb3ZpZGVyLnRzIiwiL2NoYXRzL21lc3NhZ2VzL2NvbGxlY3Rpb24udHMiLCIvY2hhdHMvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdHMvbWVzc2FnZXMvaXRlbS50cyIsIi9rbm93bGVkZ2UtYm94ZXMvY29sbGVjdGlvbi50cyIsIi9rbm93bGVkZ2UtYm94ZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsU0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBTU0sTUFBT0UsTUFBTyxTQUFRSCxTQUFBLENBQUFJLFVBQVU7WUFDckNDLElBQUksR0FBR0gsS0FBQSxDQUFBSSxLQUFLO1lBQ0ZDLFNBQVMsR0FBRyxjQUFjO1lBQzFCQyxFQUFFLEdBQUcsVUFBVTtZQUV6QkMsWUFBWUMsQ0FBQztjQUNaLEtBQUssQ0FBQ0EsQ0FBQyxDQUFDO2NBQ1I7Y0FDQSxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNaOztVQUNBQyxPQUFBLENBQUFULE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkQsSUFBQUgsU0FBQSxHQUFBQyxPQUFBO1VBTU8sV0FQUDs7VUFPaUIsTUFBT0ssS0FBTSxTQUFRTixTQUFBLENBQUFhLElBQVk7WUFDdkNDLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO1lBRW5ETCxZQUFZO2NBQUVNLEVBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUcsRUFBRTtjQUNsQyxLQUFLLENBQUM7Z0JBQUVELEVBQUU7Z0JBQUVQLEVBQUUsRUFBRSxVQUFVO2dCQUFFRCxTQUFTLEVBQUU7Y0FBYyxDQUFFLENBQUM7WUFDekQ7O1VBQ0FLLE9BQUEsQ0FBQU4sS0FBQSxHQUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JELElBQUFOLFNBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFnQixTQUFBLEdBQUFoQixPQUFBO1VBRU87VUFBVSxNQUFPaUIsS0FBTSxTQUFRbEIsU0FBQSxDQUFBSSxVQUFVO1lBQy9DQyxJQUFJ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