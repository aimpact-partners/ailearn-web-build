System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/entities", "@aimpact/chat-api@0.2.0/provider", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@0.0.23/config", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.0.3/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Audio, Chats, IChatProperties, IChat, Chat, Message, KnowledgeBoxes, KnowledgeBox, __beyond_pkg, hmr;
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
    }, function (_aimpactChatApi020Provider) {
      dependency_2 = _aimpactChatApi020Provider;
    }, function (_aimpactChatSdk100Api) {
      dependency_3 = _aimpactChatSdk100Api;
    }, function (_aimpactAilearnApp0023Config) {
      dependency_4 = _aimpactAilearnApp0023Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_5 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_6 = _beyondJsKernel019Core;
    }, function (_pragmateUi003Components) {
      dependency_7 = _pragmateUi003Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.23"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-api/provider', dependency_2], ['@aimpact/chat-sdk/api', dependency_3], ['@aimpact/chat-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/kernel/core', dependency_6], ['pragmate-ui/components', dependency_7]]);
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

      /*************************************
      INTERNAL MODULE: ./chats/messages/item
      *************************************/

      ims.set('./chats/messages/item', {
        hash: 4142077924,
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
        hash: 1202498185,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBoxes = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
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
                provider: _provider.KnowledgeBoxProvider,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRDb2xsZWN0aW9uUHJvdmlkZXIiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiYXBpIiwicGFyZW50IiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJjaGF0IiwibGlzdCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbWVzc2FnZXMiLCJfY29yZSIsImxvY2FsZGIiLCJtZXNzYWdlcyIsIkNoYXRQcm92aWRlciIsImdsb2JhbFRoaXMiLCJjb25zb2xlIiwibG9nIiwibG9hZEFsbCIsInNwZWNzIiwicmVzcG9uc2UiLCJsb2FkIiwiY29sbGVjdGlvbiIsIk1lc3NhZ2VzIiwibG9jYWxMb2FkIiwiY2hhdElkIiwic29ydEJ5Iiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsZW5ndGgiLCJzZXRFbnRyaWVzIiwibSIsImMiLCJzZXRBdWRpb01lc3NhZ2UiLCJyZXNwb25zZUl0ZW0iLCJNZXNzYWdlIiwiaXNSZWFkeSIsInNhdmVNZXNzYWdlIiwiZSIsImVycm9yIiwiY3VycmVudEF1ZGlvIiwic2F2ZUF1ZGlvTG9jYWxseSIsImF1ZGlvIiwidHJhbnNjcmlwdGlvbiIsInNldE9mZmxpbmUiLCJ0eXBlIiwicm9sZSIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJjb250ZW50Iiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsIlByb21pc2UiLCJhbGwiLCJwdWJsaXNoZWQiLCJvbkxpc3RlbiIsInB1Ymxpc2hTeXN0ZW0iLCJvZmZsaW5lIiwiY29udmVyc2F0aW9uIiwidHJpZ2dlciIsInVwZGF0ZUNvbnRlbnQiLCJvbkVuZCIsIm9mZiIsInN5c3RlbUlkIiwibXVsdGlwYXJ0IiwicHVibGlzaCIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwiTWVzc2FnZVByb3ZpZGVyIiwibG9jYWxGaWVsZHMiLCJwYXJzZWRDb250ZW50IiwicmVhY3RpdmVQcm9wcyIsImxpc3RlbiIsImluaXRpYWxpc2UiLCIjb25MaXN0ZW4iLCJzdHJlYW1SZXNwb25zZSIsIiNsaXN0ZW4iLCJvZmZFdmVudHMiLCIjb2ZmRXZlbnRzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwic3RyZWFtIiwidGhlbiIsImNhdGNoIiwiYWN0aW9ucyIsImZpbmQiLCJhY3Rpb24iLCJKU09OIiwicGFyc2UiLCJ0cmFjZSIsIktub3dsZWRnZUJveGVzIiwiS25vd2xlZGdlQm94IiwicHJvamVjdCIsInVybCIsIkRPQ1VNRU5UU19TRVJWRVIiLCJLbm93bGVkZ2VCb3hQcm92aWRlciIsImZpbHRlciIsInVzZXJJZCIsInJlbW92ZSIsInBhdGgiLCJkZWxldGUiXSwic291cmNlcyI6WyIvYXVkaW8vY29sbGVjdGlvbi50cyIsIi9hdWRpby9pdGVtLnRzIiwiL2NoYXRzL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY2hhdHMvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9jaGF0LnRzIiwiL21lc3NhZ2UudHMiLCIvY2hhdHMvaXRlbS9pbmRleC50cyIsIi9jaGF0cy9pdGVtL3Byb3ZpZGVyLnRzIiwiL2NoYXRzL21lc3NhZ2VzL2NvbGxlY3Rpb24udHMiLCIvY2hhdHMvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdHMvbWVzc2FnZXMvaXRlbS50cyIsIi9rbm93bGVkZ2UtYm94ZXMvY29sbGVjdGlvbi50cyIsIi9rbm93bGVkZ2UtYm94ZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQU1NLE1BQU9HLE1BQU8sU0FBUUosU0FBQSxDQUFBSyxVQUFVO1lBQ3JDQyxJQUFJLEdBQUdILEtBQUEsQ0FBQUksS0FBSztZQUNGQyxTQUFTLEdBQUcsY0FBYztZQUMxQkMsRUFBRSxHQUFHLFVBQVU7WUFFekJDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJVCxTQUFBLENBQUFVLGFBQWEsRUFBRTtjQUNuQyxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNaOztVQUNBQyxPQUFBLENBQUFWLE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkQsSUFBQUosU0FBQSxHQUFBQyxPQUFBO1VBTU8sV0FQUDs7VUFPaUIsTUFBT00sS0FBTSxTQUFRUCxTQUFBLENBQUFlLElBQVk7WUFDdkNDLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO1lBRW5ETixZQUFZO2NBQUVPLEVBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUcsRUFBRTtjQUNsQyxLQUFLLENBQUM7Z0JBQUVELEVBQUU7Z0JBQUVSLEVBQUUsRUFBRSxVQUFVO2dCQUFFRCxTQUFTLEVBQUU7Y0FBYyxDQUFFLENBQUM7WUFDekQ7O1VBQ0FNLE9BQUEsQ0FBQVAsS0FBQSxHQUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JELElBQUFQLFNBQUEsR0FBQUMsT0FBQTtVQUVB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