System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/entities", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@0.0.32-dev.48/config", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0032Dev48Config) {
      dependency_3 = _aimpactAilearnApp0032Dev48Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_4 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.32-dev.48"]]);
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
        hash: 218835744,
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
        hash: 899899603,
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
                  language: this.language?.default ?? _core.languages.current
                  // timestamp: Date.now()
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
                        role: 'system'
                        // timestamp: Date.now()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsImEiLCJpbml0IiwiZXhwb3J0cyIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiaWQiLCJ1bmRlZmluZWQiLCJfcHJvdmlkZXIiLCJDaGF0cyIsIkNoYXQiLCJwcm92aWRlciIsIkNoYXRDb2xsZWN0aW9uUHJvdmlkZXIiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiYXBpIiwicGFyZW50IiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJjaGF0IiwibGlzdCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbWVzc2FnZXMiLCJfY29yZSIsImxvY2FsZGIiLCJtZXNzYWdlcyIsIkNoYXRQcm92aWRlciIsImdsb2JhbFRoaXMiLCJsb2FkQWxsIiwic3BlY3MiLCJyZXNwb25zZSIsImxvYWQiLCJjb2xsZWN0aW9uIiwiTWVzc2FnZXMiLCJsb2NhbExvYWQiLCJjaGF0SWQiLCJzb3J0QnkiLCJsaW1pdCIsIm9uIiwidHJpZ2dlckV2ZW50IiwibGVuZ3RoIiwic2V0RW50cmllcyIsIm0iLCJjIiwic2V0QXVkaW9NZXNzYWdlIiwicmVzcG9uc2VJdGVtIiwiTWVzc2FnZSIsImlzUmVhZHkiLCJzYXZlTWVzc2FnZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjdXJyZW50QXVkaW8iLCJzYXZlQXVkaW9Mb2NhbGx5IiwiYXVkaW8iLCJ0cmFuc2NyaXB0aW9uIiwic2V0T2ZmbGluZSIsInR5cGUiLCJyb2xlIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiY29udGVudCIsInNlbmRNZXNzYWdlIiwiZmV0Y2hpbmciLCJQcm9taXNlIiwiYWxsIiwicHVibGlzaGVkIiwib25MaXN0ZW4iLCJwdWJsaXNoU3lzdGVtIiwib2ZmbGluZSIsImNvbnZlcnNhdGlvbiIsInRyaWdnZXIiLCJ1cGRhdGVDb250ZW50Iiwib25FbmQiLCJvZmYiLCJzeXN0ZW1JZCIsIm11bHRpcGFydCIsInB1Ymxpc2giLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsImxvY2FsRmllbGRzIiwicGFyc2VkQ29udGVudCIsInJlYWN0aXZlUHJvcHMiLCJsaXN0ZW4iLCJpbml0aWFsaXNlIiwiI29uTGlzdGVuIiwic3RyZWFtUmVzcG9uc2UiLCIjbGlzdGVuIiwib2ZmRXZlbnRzIiwiI29mZkV2ZW50cyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInN0cmVhbSIsInRoZW4iLCJjYXRjaCIsImFjdGlvbnMiLCJmaW5kIiwiYWN0aW9uIiwiSlNPTiIsInBhcnNlIiwidHJhY2UiLCJLbm93bGVkZ2VCb3hlcyIsIktub3dsZWRnZUJveCIsInByb2plY3QiLCJ1cmwiLCJET0NVTUVOVFNfU0VSVkVSIiwiZmlsdGVyIiwidXNlcklkIiwicmVtb3ZlIiwicGF0aCIsImRlbGV0ZSJdLCJzb3VyY2VzIjpbIi9hdWRpby9jb2xsZWN0aW9uLnRzIiwiL2F1ZGlvL2l0ZW0udHMiLCIvY2hhdHMvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGF0cy9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0cy9pdGVtL2luZGV4LnRzIiwiL2NoYXRzL2l0ZW0vcHJvdmlkZXIudHMiLCIvY2hhdHMvbWVzc2FnZXMvY29sbGVjdGlvbi50cyIsIi9jaGF0cy9tZXNzYWdlcy9pbmRleC50cyIsIi9jaGF0cy9tZXNzYWdlcy9pdGVtLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9jb2xsZWN0aW9uLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxu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