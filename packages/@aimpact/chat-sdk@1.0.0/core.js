System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.9/entities", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_beyondJsReactive119Entities) {
      dependency_1 = _beyondJsReactive119Entities;
    }, function (_aimpactChatSdk100Api) {
      dependency_2 = _aimpactChatSdk100Api;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_3 = _aimpactAilearnApp0024Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_4 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 683619355,
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
              console.log(`chat is being exposed in console as chat`, id);
            }
            loadAll = async specs => {
              const response = await this.load(specs);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsImEiLCJpbml0IiwiZXhwb3J0cyIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiaWQiLCJ1bmRlZmluZWQiLCJfcHJvdmlkZXIiLCJDaGF0cyIsIkNoYXQiLCJwcm92aWRlciIsIkNoYXRDb2xsZWN0aW9uUHJvdmlkZXIiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiYXBpIiwicGFyZW50IiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJjaGF0IiwibGlzdCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbWVzc2FnZXMiLCJfY29yZSIsImxvY2FsZGIiLCJtZXNzYWdlcyIsIkNoYXRQcm92aWRlciIsImdsb2JhbFRoaXMiLCJjb25zb2xlIiwibG9nIiwibG9hZEFsbCIsInNwZWNzIiwicmVzcG9uc2UiLCJsb2FkIiwiY29sbGVjdGlvbiIsIk1lc3NhZ2VzIiwibG9jYWxMb2FkIiwiY2hhdElkIiwic29ydEJ5Iiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsZW5ndGgiLCJzZXRFbnRyaWVzIiwibSIsImMiLCJzZXRBdWRpb01lc3NhZ2UiLCJyZXNwb25zZUl0ZW0iLCJNZXNzYWdlIiwiaXNSZWFkeSIsInNhdmVNZXNzYWdlIiwiZSIsImVycm9yIiwiY3VycmVudEF1ZGlvIiwic2F2ZUF1ZGlvTG9jYWxseSIsImF1ZGlvIiwidHJhbnNjcmlwdGlvbiIsInNldE9mZmxpbmUiLCJ0eXBlIiwicm9sZSIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJjb250ZW50Iiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsIlByb21pc2UiLCJhbGwiLCJwdWJsaXNoZWQiLCJvbkxpc3RlbiIsInB1Ymxpc2hTeXN0ZW0iLCJvZmZsaW5lIiwiY29udmVyc2F0aW9uIiwidHJpZ2dlciIsInVwZGF0ZUNvbnRlbnQiLCJvbkVuZCIsIm9mZiIsInN5c3RlbUlkIiwibXVsdGlwYXJ0IiwicHVibGlzaCIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwibG9jYWxGaWVsZHMiLCJwYXJzZWRDb250ZW50IiwicmVhY3RpdmVQcm9wcyIsImxpc3RlbiIsImluaXRpYWxpc2UiLCIjb25MaXN0ZW4iLCJzdHJlYW1SZXNwb25zZSIsIiNsaXN0ZW4iLCJvZmZFdmVudHMiLCIjb2ZmRXZlbnRzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwic3RyZWFtIiwidGhlbiIsImNhdGNoIiwiYWN0aW9ucyIsImZpbmQiLCJhY3Rpb24iLCJKU09OIiwicGFyc2UiLCJ0cmFjZSIsIktub3dsZWRnZUJveGVzIiwiS25vd2xlZGdlQm94IiwicHJvamVjdCIsInVybCIsIkRPQ1VNRU5UU19TRVJWRVIiLCJmaWx0ZXIiLCJ1c2VySWQiLCJyZW1vdmUiLCJwYXRoIiwiZGVsZXRlIl0sInNvdXJjZXMiOlsiL2F1ZGlvL2NvbGxlY3Rpb24udHMiLCIvYXVkaW8vaXRlbS50cyIsIi9jaGF0cy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NoYXRzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvY2hhdC50cyIsIi9tZXNzYWdlLnRzIiwiL2NoYXRzL2l0ZW0vaW5kZXgudHMiLCIvY2hhdHMvaXRlbS9wcm92aWRlci50cyIsIi9jaGF0cy9tZXNzYWdlcy9jb2xsZWN0aW9uLnRzIiwiL2NoYXRzL21lc3NhZ2VzL2luZGV4LnRzIiwiL2NoYXRzL21lc3NhZ2VzL2l0ZW0udHMiLCIva25vd2xlZGdlLWJveGVzL2NvbGxlY3Rpb24udHMiLCIva25vd2xlZGdlLWJveGVzL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFNBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQU1NLE1BQU9FLE1BQU8sU0FBUUgsU0FBQSxDQUFBSSxVQUFVO1lBQ3JDQyxJQUFJLEdBQUdILEtBQUEsQ0FBQUksS0FBSztZQUNGQyxTQUFTLEdBQUcsY0FBYztZQUMxQkMsRUFBRSxHQUFHLFVBQVU7WUFFekJDLFlBQVlDLENBQUM7Y0FDWixLQUFLLENBQUNBLENBQUMsQ0FBQztjQUNSO2NBQ0EsSUFBSSxDQUFDQyxJQUFJLEVBQUU7WUFDWjs7VUFDQUMsT0FBQSxDQUFBVCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJELElBQUFILFNBQUEsR0FBQUMsT0FBQTtVQU1PLFdBUFA7O1VBT2lCLE1BQU9LLEtBQU0sU0FBUU4sU0FBQSxDQUFBYSxJQUFZO1lBQ3ZDQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQztZQUVuREwsWUFBWTtjQUFFTSxFQUFFLEdBQUdDO1lBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFRCxFQUFFO2dCQUFFUCxFQUFFLEVBQUUsVUFBVTtnQkFBRUQsU0FBUyxFQUFFO2NBQWMsQ0FBRSxDQUFDO1lBQ3pEOztVQUNBSyxPQUFBLENBQUFOLEtBQUEsR0FBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiRCxJQUFBTixTQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBZ0IsU0FBQSxHQUFBaEIsT0FBQTtVQUVPO1VBQVUsTUFBT2lCLEtBQU0sU0FBUWxCLFNBQUEsQ0FBQUksVUFBVTtZQUMvQ0MsSUFBSSxHQUFHSCxL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