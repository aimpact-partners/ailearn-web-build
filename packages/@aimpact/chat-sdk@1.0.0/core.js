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