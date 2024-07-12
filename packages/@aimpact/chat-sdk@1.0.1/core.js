System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/entities", "@aimpact/chat-sdk@1.0.1/api", "@aimpact/chat-sdk@1.0.1/config", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/chat-sdk@1.0.1/startup", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_aimpactChatSdk101Config) {
      dependency_3 = _aimpactChatSdk101Config;
    }, function (_aimpactChatSdk101Session) {
      dependency_4 = _aimpactChatSdk101Session;
    }, function (_aimpactChatSdk101Startup) {
      dependency_5 = _aimpactChatSdk101Startup;
    }, function (_beyondJsKernel019Core) {
      dependency_6 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["highlight.js", "11.9.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-app", "0.0.57"]]);
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
        hash: 2203614448,
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
                db: 'chat-api',
                storeName: 'Chat',
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
        hash: 3017684098,
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
                storeName: 'Messages'
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
        hash: 1543045298,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsImEiLCJpbml0IiwiZXhwb3J0cyIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiaWQiLCJ1bmRlZmluZWQiLCJfcHJvdmlkZXIiLCJDaGF0cyIsIkNoYXQiLCJwcm92aWRlciIsIkNoYXRDb2xsZWN0aW9uUHJvdmlkZXIiLCJfYXBpIiwiX3Nlc3Npb24iLCJfc3RhcnR1cCIsImFwaSIsInBhcmVudCIsIkFwaSIsInNka0NvbmZpZyIsImxpc3QiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImZpcmViYXNlVG9rZW4iLCJiZWFyZXIiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0IiwiRXJyb3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21lc3NhZ2VzIiwiX2NvcmUiLCJsb2NhbGRiIiwibWVzc2FnZXMiLCJDaGF0UHJvdmlkZXIiLCJnbG9iYWxUaGlzIiwiY2hhdCIsImxvYWRBbGwiLCJzcGVjcyIsImlzUmVhZHkiLCJyZXNwb25zZSIsImxvYWQiLCJjb2xsZWN0aW9uIiwiTWVzc2FnZXMiLCJsb2NhbExvYWQiLCJjaGF0SWQiLCJzb3J0QnkiLCJsaW1pdCIsIm9uIiwidHJpZ2dlckV2ZW50IiwibGVuZ3RoIiwic2V0RW50cmllcyIsIm0iLCJjIiwic2V0QXVkaW9NZXNzYWdlIiwicmVzcG9uc2VJdGVtIiwiTWVzc2FnZSIsInNhdmVNZXNzYWdlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImN1cnJlbnRBdWRpbyIsInNhdmVBdWRpb0xvY2FsbHkiLCJhdWRpbyIsInRyYW5zY3JpcHRpb24iLCJzZXRPZmZsaW5lIiwidHlwZSIsInJvbGUiLCJsYW5ndWFnZSIsImRlZmF1bHQiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiY29udGVudCIsInNlbmRNZXNzYWdlIiwiZmV0Y2hpbmciLCJQcm9taXNlIiwiYWxsIiwicHVibGlzaGVkIiwib25MaXN0ZW4iLCJwdWJsaXNoU3lzdGVtIiwib2ZmbGluZSIsImNvbnZlcnNhdGlvbiIsInRyaWdnZXIiLCJ1cGRhdGVDb250ZW50Iiwib25FbmQiLCJvZmYiLCJzeXN0ZW1JZCIsIm11bHRpcGFydCIsInB1Ymxpc2giLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsImxvY2FsRmllbGRzIiwicGFyc2VkQ29udGVudCIsInJlYWN0aXZlUHJvcHMiLCJsaXN0ZW4iLCJpbml0aWFsaXNlIiwiI29uTGlzdGVuIiwic3RyZWFtUmVzcG9uc2UiLCIjbGlzdGVuIiwib2ZmRXZlbnRzIiwiI29mZkV2ZW50cyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInN0cmVhbSIsInRoZW4iLCJjYXRjaCIsImFjdGlvbnMiLCJmaW5kIiwiYWN0aW9uIiwiSlNPTiIsInBhcnNlIiwidHJhY2UiLCJfY29uZmlnIiwiS25vd2xlZGdlQm94ZXMiLCJLbm93bGVkZ2VCb3giLCJwcm9qZWN0IiwidXJsIiwicGFyYW1zIiwiRE9DVU1FTlRTX1NFUlZFUiIsImZpbHRlciIsInVzZXJJZCIsInJlbW92ZSIsInBhdGgiLCJkZWxldGUiXSwic291cmNlcyI6WyIvYXVkaW8vY29sbGVjdGlvbi50cyIsIi9hdWRpby9pdGVtLnRzIiwiL2NoYXRzL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY2hhdHMvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9jaGF0LnRzIiwiL21lc3NhZ2UudHMiLCIvY2hhdHMvaXRlbS9pbmRleC50cyIsIi9jaGF0cy9pdGVtL3Byb3ZpZGVyLnRzIiwiL2NoYXRzL21lc3NhZ2VzL2NvbGxlY3Rpb24udHMiLCIvY2hhdHMvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdHMvbWVzc2FnZXMvaXRlbS50cyIsIi9rbm93bGVkZ2UtYm94ZXMvY29sbGVjdGlvbi50cyIsIi9rbm93bGVkZ2UtYm94ZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGws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