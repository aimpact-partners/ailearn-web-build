System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/entities", "@aimpact/chat-sdk@1.0.1/api", "@aimpact/ailearn-app@0.0.50/config", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/chat-sdk@1.0.1/startup", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Audio, Chats, IChatProperties, IChat, Chat, Message, KnowledgeBoxes, KnowledgeBox, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk101Api) {
      dependency_2 = _aimpactChatSdk101Api;
    }, function (_aimpactAilearnApp0050Config) {
      dependency_3 = _aimpactAilearnApp0050Config;
    }, function (_aimpactChatSdk101Session) {
      dependency_4 = _aimpactChatSdk101Session;
    }, function (_aimpactChatSdk101Startup) {
      dependency_5 = _aimpactChatSdk101Startup;
    }, function (_beyondJsKernel019Core) {
      dependency_6 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-app", "0.0.50"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.1/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-sdk/api', dependency_2], ['@aimpact/chat-sdk/config', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/chat-sdk/startup', dependency_5], ['@beyond-js/kernel/core', dependency_6]]);
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
        hash: 2358378643,
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
                localdb: false
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
        hash: 2898834084,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatCollectionProvider = void 0;
          var _api = require("@aimpact/chat-sdk/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          class ChatCollectionProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.api);
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
        hash: 369993468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _api = require("@aimpact/chat-sdk/api");
          var _item = require("../messages/item");
          var _messages = require("../messages");
          var _core = require("@beyond-js/kernel/core");
          var _startup = require("@aimpact/chat-sdk/startup");
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
                localdb: false,
                provider: _provider.ChatProvider
              });
              this.#api = new _api.Api(_startup.sdkConfig.api);
              globalThis.chat = this;
              // console.log(`chat is being exposed in console as chat`, id);
            }

            loadAll = async specs => {
              await this.isReady;
              const response = await this.load(specs);
              const collection = new _messages.Messages();
              // const data = await collection.localLoad({ chatId: this.id, sortBy: 'timestamp', limit: 1000 });
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
        hash: 1822458863,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatProvider = void 0;
          var _api = require("@aimpact/chat-sdk/api");
          var _startup = require("@aimpact/chat-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          class ChatProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.api);
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
        hash: 4033730646,
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
            constructor() {
              super({
                localdb: false
              });
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
        hash: 1640398000,
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
                db: 'chat-api',
                localdb: false
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
        hash: 2184560167,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _api = require("@aimpact/chat-sdk/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _core = require("@beyond-js/kernel/core");
          var _startup = require("@aimpact/chat-sdk/startup");
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
                localdb: false
              });
              this.#chat = chat;
              const api = new _api.Api(_startup.sdkConfig.api);
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
        hash: 1483381009,
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
          var _startup = require("@aimpact/chat-sdk/startup");
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
                localdb: false,
                db: 'chat-api'
              });
              this.#api = new _api.Api(_startup.sdkConfig.api);
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
        hash: 3384143000,
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
                localdb: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsImEiLCJpbml0IiwiZXhwb3J0cyIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiaWQiLCJ1bmRlZmluZWQiLCJfcHJvdmlkZXIiLCJDaGF0cyIsIkNoYXQiLCJwcm92aWRlciIsIkNoYXRDb2xsZWN0aW9uUHJvdmlkZXIiLCJsb2NhbGRiIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJzZGtDb25maWciLCJsaXN0IiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJmaXJlYmFzZVRva2VuIiwiYmVhcmVyIiwic3RhdHVzIiwiZGF0YSIsImdldCIsIkVycm9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tZXNzYWdlcyIsIl9jb3JlIiwibWVzc2FnZXMiLCJDaGF0UHJvdmlkZXIiLCJnbG9iYWxUaGlzIiwiY2hhdCIsImxvYWRBbGwiLCJzcGVjcyIsImlzUmVhZHkiLCJyZXNwb25zZSIsImxvYWQiLCJjb2xsZWN0aW9uIiwiTWVzc2FnZXMiLCJvbiIsInRyaWdnZXJFdmVudCIsImxlbmd0aCIsInNldEVudHJpZXMiLCJtIiwiYyIsInNldEF1ZGlvTWVzc2FnZSIsInJlc3BvbnNlSXRlbSIsIk1lc3NhZ2UiLCJzYXZlTWVzc2FnZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjdXJyZW50QXVkaW8iLCJzYXZlQXVkaW9Mb2NhbGx5IiwiYXVkaW8iLCJ0cmFuc2NyaXB0aW9uIiwic2V0T2ZmbGluZSIsImNoYXRJZCIsInR5cGUiLCJyb2xlIiwibGFuZ3VhZ2UiLCJkZWZhdWx0IiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImNvbnRlbnQiLCJzZW5kTWVzc2FnZSIsImZldGNoaW5nIiwiUHJvbWlzZSIsImFsbCIsInB1Ymxpc2hlZCIsIm9uTGlzdGVuIiwicHVibGlzaFN5c3RlbSIsIm9mZmxpbmUiLCJjb252ZXJzYXRpb24iLCJ0cmlnZ2VyIiwidXBkYXRlQ29udGVudCIsIm9uRW5kIiwib2ZmIiwic3lzdGVtSWQiLCJtdWx0aXBhcnQiLCJwdWJsaXNoIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJsb2NhbEZpZWxkcyIsInBhcnNlZENvbnRlbnQiLCJyZWFjdGl2ZVByb3BzIiwibGlzdGVuIiwiaW5pdGlhbGlzZSIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwiI2xpc3RlbiIsIm9mZkV2ZW50cyIsIiNvZmZFdmVudHMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJzdHJlYW0iLCJ0aGVuIiwiY2F0Y2giLCJhY3Rpb25zIiwiZmluZCIsImFjdGlvbiIsIkpTT04iLCJwYXJzZSIsInRyYWNlIiwiX2NvbmZpZyIsIktub3dsZWRnZUJveGVzIiwiS25vd2xlZGdlQm94IiwicHJvamVjdCIsInVybCIsInBhcmFtcyIsIkRPQ1VNRU5UU19TRVJWRVIiLCJmaWx0ZXIiLCJ1c2VySWQiLCJyZW1vdmUiLCJwYXRoIiwiZGVsZXRlIl0sInNvdXJjZXMiOlsiL2F1ZGlvL2NvbGxlY3Rpb24udHMiLCIvYXVkaW8vaXRlbS50cyIsIi9jaGF0cy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NoYXRzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvY2hhdC50cyIsIi9tZXNzYWdlLnRzIiwiL2NoYXRzL2l0ZW0vaW5kZXgudHMiLCIvY2hhdHMvaXRlbS9wcm92aWRlci50cyIsIi9jaGF0cy9tZXNzYWdlcy9jb2xsZWN0aW9uLnRzIiwiL2NoYXRzL21lc3NhZ2VzL2luZGV4LnRzIiwiL2NoYXRzL21lc3NhZ2VzL2l0ZW0udHMiLCIva25vd2xlZGdlLWJveGVzL2NvbGxlY3Rpb24udHMiLCIva25vd2xlZGdlLWJveGVzL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsU0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBTU0sTUFBT0UsTUFBTyxTQUFRSCxTQUFBLENBQUFJLFVBQVU7WUFDckNDLElBQUksR0FBR0gsS0FBQSxDQUFBSSxLQUFLO1lBQ0ZDLFNBQVMsR0FBRyxjQUFjO1lBQzFCQyxFQUFFLEdBQUcsVUFBVTtZQUV6QkMsWUFBWUMsQ0FBQztjQUNaLEtBQUssQ0FBQ0EsQ0FBQyxDQUFDO2NBQ1I7Y0FDQSxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNaOztVQUNBQyxPQUFBLENBQUFULE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkQsSUFBQUgsU0FBQSxHQUFBQyxPQUFBO1VBTU8sV0FQUDs7VUFPaUIsTUFBT0ssS0FBTSxTQUFRTixTQUFBLENBQUFhLElBQVk7WUFDdkNDLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO1lBRW5ETCxZQUFZO2NBQUVNLEVBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUcsRUFBRTtjQUNsQyxLQUFLLENBQUM7Z0JBQUVELEVBQUU7Z0JBQUVQLEVBQUUsRUFBRSxVQUFVO2dCQUFFRCxTQUFTLEVBQUU7Y0FBYyxDQUFFLENBQUM7WUFDekQ7O1VBQ0FLLE9BQUEsQ0FBQU4sS0FBQSxHQUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JELElBQUFOLFNBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFnQixTQUFBLEdBQUFoQixPQUFBO1VBRU87VUFBVSxNQUFPaUIsS0FBTSxTQUFRbEIsU0FBQSxDQUFBSSxVQUFVO1lBQy9DQyxJQUFJLEdBQUdILEtBQUEsQ0FBQWlCLElBQUk7WUFDWFYsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRVcsUUFBUSxFQUFFSCxTQUFBLENBQUFJLHNCQUFzQjtnQkFBRUMsT0FBTyxFQUFFO2NBQUssQ0FBRSxDQUFDO1lBQzVEOztVQUNBVixPQUFBLENBQUFNLEtBQUEsR0FBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYRCxJQUFBSyxJQUFBLEdBQUF0QixPQUFBO1VBSUEsSUFBQXVCLFFBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsUUFBQSxHQUFBeEIsT0FBQTtVQUNNLE1BQU9vQixzQkFBc0I7WUFDbEMsQ0FBQUssR0FBSTtZQUNKLENBQUFDLE1BQU87WUFFUGxCLFlBQVlrQixNQUFhO2NBQ3hCLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUgsSUFBQSxDQUFBSyxHQUFHLENBQUNILFFBQUEsQ0FBQUksU0FBUyxDQUFDSCxHQUFHLENBQUM7Y0FDbEMsSUFBSSxDQUFDLENBQUFDLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBLE1BQU1HLElBQUlBLENBQUE7Y0FDVCxNQUFNQyxLQUFLLEdBQUcsTUFBTVAsUUFBQSxDQUFBUSxjQUFjLENBQUNDLElBQUksQ0FBQ0MsYUFBYTtjQUNyRCxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDUyxNQUFNLENBQUNKLEtBQUssQ0FBQztjQUN2QixNQUFNO2dCQUFFSyxNQUFNO2dCQUFFQztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBWCxHQUFJLENBQUNZLEdBQUcsQ0FBQyxRQUFRLENBQUM7Y0FDdEQsSUFBSSxDQUFDRixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7O2NBRXRDLE9BQU87Z0JBQUVILE1BQU07Z0JBQUVDO2NBQUksQ0FBRTtZQUN4Qjs7VUFDQXpCLE9BQUEsQ0FBQVMsc0JBQUEsR0FBQUEsc0JBQUE7Ozs7Ozs7Ozs7O1VDeEJEOztVQUVBbUIsTUFBQSxDQUFBQyxjQUFBLENBQUE3QixPQUFBO1lBQ0E4QixLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFGLE1BQUEsQ0FBQUMsY0FBQSxDQUFBN0IsT0FBQTtZQUNBOEIsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0hBLElBQUExQyxTQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBc0IsSUFBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUEwQyxTQUFBLEdBQUExQyxPQUFBO1VBQ0EsSUFBQTJDLEtBQUEsR0FBQTNDLE9BQUE7VUFHQSxJQUFBd0IsUUFBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUFnQixTQUFBLEdBQUFoQixPQUFBO1VBRU8sV0FiUDs7VUFZQTtVQUNpQixNQUFPa0IsSUFBSyxTQUFRbkIsU0FBQSxDQUFBYSxJQUFXO1lBRS9DLENBQUFhLEdBQUk7WUFDTVosVUFBVSxHQUFHLENBQ3RCLElBQUksRUFDSixVQUFVLEVBQ1YsTUFBTSxFQUNOLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNSLFVBQVUsRUFDVixVQUFVLEVBQ1YsT0FBTyxFQUNQLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsTUFBTSxFQUNOLFVBQVUsQ0FDVjtZQUNEUSxPQUFPLEdBQUcsS0FBSztZQUlmLENBQUF1QixRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQXBDLFlBQVk7Y0FBRU0sRUFBRSxHQUFHQztZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRUQsRUFBRTtnQkFBRU8sT0FBTyxFQUFFLEtBQUs7Z0JBQUVGLFFBQVEsRUFBRUgsU0FBQSxDQUFBNkI7Y0FBWSxDQUFFLENBQUM7Y0FDckQsSUFBSSxDQUFDLENBQUFwQixHQUFJLEdBQUcsSUFBSUgsSUFBQSxDQUFBSyxHQUFHLENBQUNILFFBQUEsQ0FBQUksU0FBUyxDQUFDSCxHQUFHLENBQUM7Y0FDbENxQixVQUFVLENBQUNDLElBQUksR0FBRyxJQUFJO2NBQ3RCO1lBQ0Q7O1lBRUFDLE9BQU8sR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDdkIsTUFBTSxJQUFJLENBQUNDLE9BQU87Y0FFbEIsTUFBTUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDQyxJQUFJLENBQUNILEtBQUssQ0FBQztjQUV2QyxNQUFNSSxVQUFVLEdBQUcsSUFBSVgsU0FBQSxDQUFBWSxRQUFRLEVBQUU7Y0FFakM7Y0FDQUQsVUFBVSxDQUFDRSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBRTFDLElBQUlMLFFBQVEsQ0FBQ2YsSUFBSSxDQUFDUSxRQUFRLEVBQUVhLE1BQU0sRUFBRTtnQkFDbkMsTUFBTUosVUFBVSxDQUFDSyxVQUFVLENBQUNQLFFBQVEsQ0FBQ2YsSUFBSSxDQUFDUSxRQUFRLENBQUM7O2NBRXBELElBQUksQ0FBQyxDQUFBQSxRQUFTLEdBQUdTLFVBQVU7Y0FDM0JQLFVBQVUsQ0FBQ2EsQ0FBQyxHQUFHTixVQUFVO2NBQ3pCUCxVQUFVLENBQUNjLENBQUMsR0FBRyxJQUFJO1lBQ3BCLENBQUM7WUFFRCxNQUFNQyxlQUFlQSxDQUFDVixRQUFRO2NBQzdCLElBQUk7Z0JBQ0gsTUFBTVcsWUFBWSxHQUFHLElBQUk3RCxLQUFBLENBQUE4RCxPQUFPLEVBQUU7Z0JBQ2xDLE1BQU1ELFlBQVksQ0FBQ1osT0FBTztnQkFDMUIsTUFBTVksWUFBWSxDQUFDRSxXQUFXLENBQUNiLFFBQVEsQ0FBQztnQkFFeEMsSUFBSSxDQUFDSyxZQUFZLEVBQUU7Z0JBRW5CLE9BQU9NLFlBQVk7ZUFDbkIsQ0FBQyxPQUFPRyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCO1lBRUEsQ0FBQUcsWUFBYTtZQUNiOzs7Ozs7WUFNQSxNQUFNQyxnQkFBZ0JBLENBQUNDLEtBQUssRUFBRUMsYUFBYSxHQUFHeEQsU0FBUztjQUN0RCxJQUFJO2dCQUNILE1BQU1YLElBQUksR0FBRyxJQUFJSCxLQUFBLENBQUE4RCxPQUFPLEVBQUU7Z0JBQzFCLE1BQU0zRCxJQUFJLENBQUM4QyxPQUFPO2dCQUNsQjlDLElBQUksQ0FBQ29FLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBRXJCLE1BQU12QixLQUFLLEdBQWE7a0JBQ3ZCRixJQUFJLEVBQUU7b0JBQUVqQyxFQUFFLEVBQUUsSUFBSSxDQUFDQTtrQkFBRSxDQUFFO2tCQUNyQjJELE1BQU0sRUFBRSxJQUFJLENBQUMzRCxFQUFFO2tCQUNmNEQsSUFBSSxFQUFFLE9BQU87a0JBQ2JKLEtBQUs7a0JBQ0xLLElBQUksRUFBRSxNQUFNO2tCQUNaQyxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFRLEVBQUVDLE9BQU8sSUFBSWxDLEtBQUEsQ0FBQW1DLFNBQVMsQ0FBQ0M7a0JBQzlDO2lCQUNBOztnQkFDRCxJQUFJUixhQUFhLEVBQUU7a0JBQ2xCdEIsS0FBSyxDQUFDK0IsT0FBTyxHQUFHVCxhQUFhOztnQkFHOUIsSUFBSSxDQUFDLENBQUFILFlBQWEsR0FBR2hFLElBQUk7Z0JBQ3pCLE1BQU1BLElBQUksQ0FBQzRELFdBQVcsQ0FBQ2YsS0FBSyxDQUFDO2dCQUM3QixJQUFJLENBQUN1QixVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUN0QixJQUFJLENBQUNoQixZQUFZLEVBQUU7Z0JBRW5CLE9BQU9wRCxJQUFJO2VBQ1gsQ0FBQyxPQUFPNkQsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1nQixXQUFXQSxDQUFDRCxPQUFzQjtjQUN2QyxJQUFJO2dCQUNILElBQUksQ0FBQ0UsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU05RSxJQUFJLEdBQUcsSUFBSUgsS0FBQSxDQUFBOEQsT0FBTyxDQUFDO2tCQUFFaEIsSUFBSSxFQUFFO2dCQUFJLENBQUUsQ0FBQztnQkFDeEMsSUFBSUksUUFBUSxHQUFHLElBQUlsRCxLQUFBLENBQUE4RCxPQUFPLENBQUM7a0JBQUVoQixJQUFJLEVBQUU7Z0JBQUksQ0FBRSxDQUFDO2dCQUUxQyxNQUFNb0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ2hGLElBQUksQ0FBQzhDLE9BQU8sRUFBRUMsUUFBUSxDQUFDRCxPQUFPLENBQUMsQ0FBQztnQkFDbkQsSUFBSW1DLFNBQVMsR0FBRyxLQUFLO2dCQUNyQixNQUFNQyxRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2tCQUMzQixJQUFJLENBQUNELFNBQVMsRUFBRTtvQkFDZkEsU0FBUyxHQUFHLElBQUk7b0JBRWhCbEMsUUFBUSxDQUFDb0MsYUFBYSxDQUFDO3NCQUN0QkMsT0FBTyxFQUFFLElBQUk7c0JBQ2J2QyxLQUFLLEVBQUU7d0JBQ053QixNQUFNLEVBQUUsSUFBSSxDQUFDM0QsRUFBRTt3QkFDZmlDLElBQUksRUFBRTswQkFBRWpDLEVBQUUsRUFBRSxJQUFJLENBQUNBO3dCQUFFLENBQUU7d0JBQ3JCMkUsWUFBWSxFQUFFOzBCQUFFM0UsRUFBRSxFQUFFLElBQUksQ0FBQ0E7d0JBQUUsQ0FBRTt3QkFDN0JrRSxPQUFPLEVBQUUsRUFBRTt3QkFDWEwsSUFBSSxFQUFFO3dCQUNOOztxQkFFRCxDQUFDOzs7a0JBR0gsSUFBSSxDQUFDZSxPQUFPLENBQUMsV0FBV3ZDLFFBQVEsQ0FBQ3JDLEVBQUUsVUFBVSxDQUFDO2tCQUM5Q3FDLFFBQVEsQ0FBQ3dDLGFBQWEsQ0FBQztvQkFBRVgsT0FBTyxFQUFFNUUsSUFBSSxDQUFDK0M7a0JBQVEsQ0FBRSxDQUFDO2tCQUVsREEsUUFBUSxDQUFDSyxZQUFZLEVBQUU7a0JBQ3ZCLElBQUksQ0FBQ0EsWUFBWSxFQUFFO2dCQUNwQixDQUFDO2dCQUNELE1BQU1vQyxLQUFLLEdBQUdBLENBQUEsS0FBSztrQkFDbEJ6QyxRQUFRLENBQUN3QyxhQUFhLENBQUM7b0JBQUVYLE9BQU8sRUFBRTVFLElBQUksQ0FBQytDO2tCQUFRLENBQUUsQ0FBQztrQkFDbEQsSUFBSSxDQUFDdUMsT0FBTyxDQUFDLFdBQVd2QyxRQUFRLENBQUNyQyxFQUFFLFFBQVEsQ0FBQztrQkFDNUMsSUFBSSxDQUFDNEUsT0FBTyxDQUFDLFdBQVd2QyxRQUFRLENBQUNyQyxFQUFFLFVBQVUsQ0FBQztrQkFDOUNWLElBQUksQ0FBQ3lGLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRVAsUUFBUSxDQUFDO2dCQUN0QyxDQUFDO2dCQUNEbEYsSUFBSSxDQUFDbUQsRUFBRSxDQUFDLGlCQUFpQixFQUFFK0IsUUFBUSxDQUFDO2dCQUNwQ2xGLElBQUksQ0FBQ21ELEVBQUUsQ0FBQyxtQkFBbUIsRUFBRXFDLEtBQUssQ0FBQztnQkFFbkMsTUFBTTNDLEtBQUssR0FBa0I7a0JBQzVCd0IsTUFBTSxFQUFFLElBQUksQ0FBQzNELEVBQUU7a0JBQ2ZnRixRQUFRLEVBQUUzQyxRQUFRLENBQUNyQyxFQUFFO2tCQUNyQkEsRUFBRSxFQUFFVixJQUFJLENBQUNVLEVBQUU7a0JBQ1g7a0JBQ0E2RCxJQUFJLEVBQUU7aUJBQ047Z0JBQ0QsSUFBSSxPQUFPSyxPQUFPLEtBQUssUUFBUSxFQUFFO2tCQUNoQy9CLEtBQUssQ0FBQytCLE9BQU8sR0FBR0EsT0FBTztpQkFDdkIsTUFBTTtrQkFDTi9CLEtBQUssQ0FBQzhDLFNBQVMsR0FBRyxJQUFJO2tCQUN0QjlDLEtBQUssQ0FBQ3FCLEtBQUssR0FBR1UsT0FBTzs7Z0JBR3RCNUUsSUFBSSxDQUFDNEYsT0FBTyxDQUFDL0MsS0FBSyxDQUFDO2dCQUVuQixPQUFPO2tCQUFFZ0QsT0FBTyxFQUFFN0YsSUFBSTtrQkFBRStDO2dCQUFRLENBQUU7ZUFDbEMsQ0FBQyxPQUFPYyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNpQixRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQWdCLFVBQVVBLENBQUNwRixFQUFVO2NBQ3BCLE9BQU8sSUFBSSxDQUFDLENBQUE4QixRQUFTLENBQUNQLEdBQUcsQ0FBQ3ZCLEVBQUUsQ0FBQztZQUM5Qjs7VUFDQUgsT0FBQSxDQUFBTyxJQUFBLEdBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkxELElBQUFJLElBQUEsR0FBQXRCLE9BQUE7VUFJQSxJQUFBd0IsUUFBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUF1QixRQUFBLEdBQUF2QixPQUFBO1VBQ00sTUFBTzZDLFlBQVk7WUFDeEIsQ0FBQXBCLEdBQUk7WUFDSixDQUFBQyxNQUFPO1lBRVBsQixZQUFZa0IsTUFBWTtjQUN2QixJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlILElBQUEsQ0FBQUssR0FBRyxDQUFDSCxRQUFBLENBQUFJLFNBQVMsQ0FBQ0gsR0FBRyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBQyxNQUFPLEdBQUdBLE1BQU07WUFDdEI7WUFFQSxNQUFNMEIsSUFBSUEsQ0FBQ0gsS0FBSztjQUNmLE1BQU1uQixLQUFLLEdBQUcsTUFBTVAsUUFBQSxDQUFBUSxjQUFjLENBQUNDLElBQUksQ0FBQ0MsYUFBYTtjQUVyRCxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDUyxNQUFNLENBQUNKLEtBQUssQ0FBQztjQUV2QixNQUFNO2dCQUFFSyxNQUFNO2dCQUFFQztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBWCxHQUFJLENBQUNZLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFBWCxNQUFPLENBQUNaLEVBQUUsRUFBRSxDQUFDO2NBRXpFLElBQUksQ0FBQ3FCLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7Y0FHdEMsT0FBTztnQkFBRUgsTUFBTTtnQkFBRUM7Y0FBSSxDQUFFO1lBQ3hCOztVQUNBekIsT0FBQSxDQUFBa0MsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCRCxJQUFBOUMsU0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBTU0sTUFBT3NELFFBQVMsU0FBUXZELFNBQUEsQ0FBQUksVUFBVTtZQUN2Q0MsSUFBSSxHQUFHSCxLQUFBLENBQUE4RCxPQUFPO1lBRWR2RCxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFYSxPQUFPLEVBQUU7Y0FBSyxDQUFFLENBQUM7Y0FDekIsSUFBSSxDQUFDWCxJQUFJLEVBQUU7WUFDWjs7VUFDQUMsT0FBQSxDQUFBMkMsUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUF2RCxTQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFEQTs7VUFPTSxNQUFPc0QsUUFBUyxTQUFRdkQsU0FBQSxDQUFBSSxVQUFVO1lBQ3ZDQyxJQUFJLEdBQUdILEtBQUEsQ0FBQThELE9BQU87WUFFZHZELFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQUVGLFNBQVMsRUFBRSxVQUFVO2dCQUFFQyxFQUFFLEVBQUUsVUFBVTtnQkFBRWMsT0FBTyxFQUFFO2NBQUssQ0FBRSxDQUFDO1lBQ2pFOztVQUNBVixPQUFBLENBQUEyQyxRQUFBLEdBQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkQsSUFBQXZELFNBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFzQixJQUFBLEdBQUF0QixPQUFBO1VBRUEsSUFBQXVCLFFBQUEsR0FBQXZCLE9BQUE7VUFFQSxJQUFBMkMsS0FBQSxHQUFBM0MsT0FBQTtVQUVBLElBQUF3QixRQUFBLEdBQUF4QixPQUFBO1VBQ08sV0FWUDs7VUFVaUIsTUFBTytELE9BQVEsU0FBUWhFLFNBQUEsQ0FBQWEsSUFBYztZQUMzQ0MsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUM7WUFLM0csQ0FBQVksR0FBSTtZQUNKLENBQUEwQixRQUFTLEdBQVcsRUFBRTtZQUN0QjtZQUNBLENBQUFKLElBQUs7WUFDTG9ELFdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUN2QixDQUFBQyxhQUFjO1lBQ2QsSUFBSWpELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEzQyxZQUFZO2NBQUVNLEVBQUUsR0FBR0MsU0FBUztjQUFFZ0M7WUFBSSxDQUFFLEdBQUcsRUFBRTtjQUN4QyxLQUFLLENBQUM7Z0JBQUVqQyxFQUFFO2dCQUFFUCxFQUFFLEVBQUUsVUFBVTtnQkFBRUQsU0FBUyxFQUFFLFVBQVU7Z0JBQUVlLE9BQU8sRUFBRTtjQUFLLENBQUUsQ0FBQztjQUNwRSxJQUFJLENBQUMsQ0FBQTBCLElBQUssR0FBR0EsSUFBSTtjQUNqQixNQUFNdEIsR0FBRyxHQUFHLElBQUlILElBQUEsQ0FBQUssR0FBRyxDQUFDSCxRQUFBLENBQUFJLFNBQVMsQ0FBQ0gsR0FBRyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBQSxHQUFJLEdBQUdBLEdBQUc7Y0FFZixJQUFJLENBQUM0RSxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUNoQyxJQUFJLENBQUMsQ0FBQUMsTUFBTyxFQUFFO2NBQ2QsSUFBSSxDQUFDQyxVQUFVLEVBQUU7WUFDbEI7WUFFQSxNQUFNQSxVQUFVQSxDQUFBO2NBQ2YsS0FBSyxDQUFDQSxVQUFVLEVBQUU7Y0FDbEI7Y0FDQTtZQUNEOztZQUVBLENBQUFqQixRQUFTLEdBQUdrQixDQUFBLEtBQUs7Y0FDaEIsSUFBSSxDQUFDLENBQUFyRCxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUExQixHQUFJLENBQUNnRixjQUFjO2NBRXpDLElBQUksQ0FBQ2YsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQ2hDLENBQUM7WUFDRCxDQUFBWSxNQUFPLEdBQUdJLENBQUEsS0FBSztjQUNkLElBQUksQ0FBQyxDQUFBakYsR0FBSSxDQUFDOEIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFBK0IsUUFBUyxDQUFDO1lBQ2hELENBQUM7WUFFRCxDQUFBcUIsU0FBVSxHQUFHQyxDQUFBLEtBQUs7Y0FDakIsSUFBSSxDQUFDLENBQUFuRixHQUFJLENBQUNvRSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUFQLFFBQVMsQ0FBQztZQUNqRCxDQUFDO1lBRUQ7WUFDQSxNQUFNVSxPQUFPQSxDQUFDL0MsS0FBSztjQUNsQixJQUFJO2dCQUNILElBQUksQ0FBQ3VCLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLE1BQU1xQyxPQUFPLEdBQUcsSUFBSWxFLEtBQUEsQ0FBQW1FLGNBQWMsRUFBRTtnQkFDcEMsTUFBTWhGLEtBQUssR0FBRyxNQUFNUCxRQUFBLENBQUFRLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxhQUFhO2dCQUVyRCxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUNQUyxNQUFNLENBQUNKLEtBQUssQ0FBQyxDQUNiaUYsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUFoRSxJQUFLLENBQUNqQyxFQUFFLFdBQVcsRUFBRTtrQkFDM0MsR0FBR21DO2lCQUNILENBQUMsQ0FDRCtELElBQUksQ0FBQzdELFFBQVEsSUFBRztrQkFDaEIsSUFBSSxDQUFDdUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDO2tCQUNqQyxJQUFJLENBQUMsQ0FBQWlCLFNBQVUsRUFBRTtnQkFDbEIsQ0FBQyxDQUFDLENBQ0RNLEtBQUssQ0FBQ2hELENBQUMsSUFBRztrQkFDVkMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxDQUFDO2dCQUVIOzs7O2dCQUlBLElBQUksQ0FBQyxDQUFBeEMsR0FBSSxDQUFDOEIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLE1BQUs7a0JBQ3BDLElBQUk7b0JBQ0gsSUFBSWdCLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQTlDLEdBQUksRUFBRXlGLE9BQU8sRUFBRUMsSUFBSSxDQUFDQyxNQUFNLElBQUc7c0JBQ3JELE1BQU1oRixJQUFJLEdBQUdpRixJQUFJLENBQUNDLEtBQUssQ0FBQ0YsTUFBTSxDQUFDO3NCQUUvQixJQUFJaEYsSUFBSSxDQUFDc0MsSUFBSSxLQUFLLGVBQWUsRUFBRTt3QkFDbEMsT0FBTyxJQUFJOztvQkFFYixDQUFDLENBQUM7b0JBRUYsSUFBSUgsYUFBYSxFQUFFO3NCQUNsQkEsYUFBYSxHQUFHOEMsSUFBSSxDQUFDQyxLQUFLLENBQUMvQyxhQUFhLENBQUM7c0JBQ3pDLEtBQUssQ0FBQ3lCLE9BQU8sQ0FBQzt3QkFBRWhCLE9BQU8sRUFBRVQsYUFBYSxDQUFDbkMsSUFBSSxDQUFDbUM7c0JBQWEsQ0FBRSxDQUFDOzttQkFFN0QsQ0FBQyxPQUFPTixDQUFDLEVBQUU7b0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O2dCQUVsQixDQUFDLENBQUM7Z0JBQ0YsS0FBSyxDQUFDK0IsT0FBTyxDQUFDL0MsS0FBSyxDQUFDO2dCQUNwQixPQUFPNEQsT0FBTztlQUNkLENBQUMsT0FBTzVDLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDcUQsS0FBSyxDQUFDdEQsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1zQixhQUFhQSxDQUFDO2NBQUVDLE9BQU87Y0FBRXZDO1lBQUssQ0FBcUM7Y0FDeEUsSUFBSSxDQUFDdUIsVUFBVSxDQUFDZ0IsT0FBTyxDQUFDO2NBQ3hCLEtBQUssQ0FBQ1EsT0FBTyxDQUFDL0MsS0FBSyxDQUFDO1lBQ3JCO1lBRUEsTUFBTTBDLGFBQWFBLENBQUMxQyxLQUFLO2NBQ3hCLElBQUksQ0FBQ3VCLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDckI7Y0FDQSxNQUFNLEtBQUssQ0FBQ3dCLE9BQU8sQ0FBQy9DLEtBQUssQ0FBQztjQUUxQixJQUFJLENBQUN5QyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFDaEM7O1VBRUQ7VUFBQS9FLE9BQUEsQ0FBQW9ELE9BQUEsR0FBQUEsT0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0SEEsSUFBQWhFLFNBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFzQixJQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLFFBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0gsT0FBQSxHQUFBeEgsT0FBQTtVQUNBLElBQUF3QixRQUFBLEdBQUF4QixPQUFBO1VBQ087VUFBVSxNQUFPeUgsY0FBZSxTQUFRMUgsU0FBQSxDQUFBSSxVQUFVO1lBQ3hEQyxJQUFJLEdBQUdILEtBQUEsQ0FBQXlILFlBQVk7WUFDbkIsQ0FBQWpHLEdBQUk7WUFDSixDQUFBa0csT0FBUTtZQUNSLENBQUFDLEdBQUksR0FBR0osT0FBQSxDQUFBM0MsT0FBTSxDQUFDZ0QsTUFBTSxDQUFDQyxnQkFBZ0I7WUFDckMsSUFBSXJHLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBQ0FqQixZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFRixTQUFTLEVBQUUsZ0JBQWdCO2dCQUFFZSxPQUFPLEVBQUUsS0FBSztnQkFBRWQsRUFBRSxFQUFFO2NBQVUsQ0FBRSxDQUFDO2NBQ3RFLElBQUksQ0FBQyxDQUFBa0IsR0FBSSxHQUFHLElBQUlILElBQUEsQ0FBQUssR0FBRyxDQUFDSCxRQUFBLENBQUFJLFNBQVMsQ0FBQ0gsR0FBRyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBa0csT0FBUSxHQUFHSCxPQUFBLENBQUEzQyxPQUFNLENBQUNnRCxNQUFNLENBQUNGLE9BQU87WUFDdEM7WUFFQSxNQUFNOUYsSUFBSUEsQ0FBQ2tHLE1BQTBCO2NBQ3BDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDN0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1qQyxLQUFLLEdBQUc7a0JBQUV5QixJQUFJLEVBQUUsT0FBTztrQkFBRXNELE1BQU0sRUFBRXpHLFFBQUEsQ0FBQVEsY0FBYyxDQUFDaUcsTUFBTTtrQkFBRUwsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBQTtnQkFBUSxDQUFFO2dCQUN0RixJQUFJSSxNQUFNLEVBQUU5RSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUc4RSxNQUFNO2dCQUNwQyxNQUFNNUUsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUExQixHQUFJLENBQUNZLEdBQUcsQ0FBQyxPQUFPLEVBQUVZLEtBQUssQ0FBQztnQkFDcEQsSUFBSSxDQUFDRSxRQUFRLENBQUNoQixNQUFNLEVBQUUsTUFBTSxJQUFJRyxLQUFLLENBQUNhLFFBQVEsQ0FBQ2dCLEtBQUssQ0FBQztnQkFDckQsT0FBT2hCLFFBQVEsQ0FBQ2YsSUFBSTtlQUNwQixDQUFDLE9BQU82QixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNpQixRQUFRLEdBQUcsSUFBSTs7WUFFdEI7WUFFQSxNQUFNK0MsTUFBTUEsQ0FBQ0MsSUFBWTtjQUN4QixJQUFJO2dCQUNILElBQUksQ0FBQ0EsSUFBSSxFQUFFO2tCQUNWLE9BQU87b0JBQUUvRixNQUFNLEVBQUUsS0FBSztvQkFBRWdDLEtBQUssRUFBRTtrQkFBa0IsQ0FBRTs7Z0JBRXBELElBQUksQ0FBQ2UsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1qQyxLQUFLLEdBQUc7a0JBQUUrRSxNQUFNLEVBQUV6RyxRQUFBLENBQUFRLGNBQWMsQ0FBQ2lHLE1BQU07a0JBQUVMLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQUE7Z0JBQVEsQ0FBRTtnQkFDdkUsTUFBTXhFLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBMUIsR0FBSSxDQUFDMEcsTUFBTSxDQUFDLFNBQVMsRUFBRWxGLEtBQUssQ0FBQztnQkFDekQsSUFBSSxDQUFDRSxRQUFRLENBQUNoQixNQUFNLEVBQUUsTUFBTSxJQUFJRyxLQUFLLENBQUNhLFFBQVEsQ0FBQ2dCLEtBQUssQ0FBQztnQkFDckQsT0FBT2hCLFFBQVEsQ0FBQ2YsSUFBSTtlQUNwQixDQUFDLE9BQU82QixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNpQixRQUFRLEdBQUcsSUFBSTs7WUFFdEI7O1VBQ0F2RSxPQUFBLENBQUE4RyxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRELElBQUExSCxTQUFBLEdBQUFDLE9BQUE7VUFVTyxXQVhQOztVQVdpQixNQUFPMEgsWUFBYSxTQUFRM0gsU0FBQSxDQUFBYSxJQUFtQjtZQUNyREMsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQztZQUN4RUwsWUFBWTtjQUFFTSxFQUFFLEdBQUdDO1lBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFRCxFQUFFO2dCQUFFUCxFQUFFLEVBQUUsVUFBVTtnQkFBRWMsT0FBTyxFQUFFLEtBQUs7Z0JBQUVmLFNBQVMsRUFBRTtjQUFnQixDQUFFLENBQUM7WUFDM0U7O1VBQ0FLLE9BQUEsQ0FBQStHLFlBQUEsR0FBQUEsWUFBQSJ9