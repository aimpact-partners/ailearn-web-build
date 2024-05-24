System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/entities", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@0.0.34.dev-01/config", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0034Dev01Config) {
      dependency_3 = _aimpactAilearnApp0034Dev01Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_4 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.34.dev-01"]]);
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
        hash: 3728339269,
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

          // chats/ea0572a8-ff07-4bf5-9962-16fc765603eb
          class Chat extends _entities.Item {
            #api;
            properties = ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'language', 'usage', 'children', 'knowledgeBoxId', 'user', 'metadata'];
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