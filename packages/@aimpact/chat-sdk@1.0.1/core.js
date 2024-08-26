System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/entities", "@aimpact/chat-sdk@1.0.1/api", "@aimpact/chat-sdk@1.0.1/config", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/chat-sdk@1.0.1/startup", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.2.0/model"], function (_export, _context) {
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
    }, function (_beyondJsReactive120Entities) {
      dependency_1 = _beyondJsReactive120Entities;
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
    }, function (_beyondJsReactive120Model) {
      dependency_7 = _beyondJsReactive120Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-sdk/api', dependency_2], ['@aimpact/chat-sdk/config', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/chat-sdk/startup', dependency_5], ['@beyond-js/kernel/core', dependency_6], ['@beyond-js/reactive/model', dependency_7]]);
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
        hash: 561667875,
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
        hash: 1410261185,
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
                provider: _provider.ChatProvider,
                localdb: false
              });
              this.#api = new _api.Api(_startup.sdkConfig.api);
              globalThis.chat = this;
              // console.log(`chat is being exposed in console as chat`, id);
            }
            loadAll = async specs => {
              await this.isReady;
              const collection = new _messages.Messages();
              // const data = await collection.localLoad({ chatId: this.id, sortBy: 'timestamp', limit: 1000 });
              collection.on('change', () => {
                this.triggerEvent();
              });
              const response = await this.load(specs);
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
            #response;
            async sendMessage(content) {
              try {
                this.fetching = true;
                const item = new _item.Message({
                  chat: this
                });
                this.#messages.add(item);
                await Promise.all([item.isReady]);
                let published = false;
                let response;
                const onListen = async () => {
                  if (!published) {
                    let response = new _item.Message({
                      chat: this
                    });
                    await response.isReady;
                    this.#messages.add(response);
                    this.#response = response;
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
                  response = this.#response;
                  this.trigger(`message.${response.id}.updated`);
                  response.updateContent({
                    content: item.response
                  });
                  response.triggerEvent();
                  this.triggerEvent();
                };
                const onEnd = () => {
                  response = this.#response;
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
                  // systemId: response.id,
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
                await item.publish(specs);
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

      /**************************************
      INTERNAL MODULE: ./chats/messages/index
      **************************************/

      ims.set('./chats/messages/index', {
        hash: 3794418847,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = void 0;
          var _item = require("./item");
          var _model = require("@beyond-js/reactive/model");
          // import { MessageProvider } from '@aimpact/chat-api/provider';

          class Messages extends _model.ReactiveModel {
            item = _item.Message;
            #items;
            get items() {
              return this.#items;
            }
            constructor() {
              super({
                localdb: false
              });
            }
            add(item) {
              this.#items.push(item);
              this.trigger('change');
            }
            setEntries(items) {
              this.#items = items;
              this.trigger('change');
            }
          }
          exports.Messages = Messages;
        }
      });

      /*************************************
      INTERNAL MODULE: ./chats/messages/item
      *************************************/

      ims.set('./chats/messages/item', {
        hash: 803085257,
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
                const promise = new _core.PendingPromise();
                const token = await _session.sessionWrapper.user.firebaseToken;
                this.#api.bearer(token).stream(`/chats/${this.#chat.id}/messages`, {
                  ...specs
                }).then(response => {
                  this.trigger('response.finished');
                  this.#offEvents();
                  promise.resolve();
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
                await super.publish(specs);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsImEiLCJpbml0IiwiZXhwb3J0cyIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiaWQiLCJ1bmRlZmluZWQiLCJfcHJvdmlkZXIiLCJDaGF0cyIsIkNoYXQiLCJwcm92aWRlciIsIkNoYXRDb2xsZWN0aW9uUHJvdmlkZXIiLCJfYXBpIiwiX3Nlc3Npb24iLCJfc3RhcnR1cCIsImFwaSIsInBhcmVudCIsIkFwaSIsInNka0NvbmZpZyIsImxpc3QiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImZpcmViYXNlVG9rZW4iLCJiZWFyZXIiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0IiwiRXJyb3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21lc3NhZ2VzIiwiX2NvcmUiLCJsb2NhbGRiIiwibWVzc2FnZXMiLCJDaGF0UHJvdmlkZXIiLCJnbG9iYWxUaGlzIiwiY2hhdCIsImxvYWRBbGwiLCJzcGVjcyIsImlzUmVhZHkiLCJjb2xsZWN0aW9uIiwiTWVzc2FnZXMiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlc3BvbnNlIiwibG9hZCIsImxlbmd0aCIsInNldEVudHJpZXMiLCJtIiwiYyIsInNldEF1ZGlvTWVzc2FnZSIsInJlc3BvbnNlSXRlbSIsIk1lc3NhZ2UiLCJzYXZlTWVzc2FnZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjdXJyZW50QXVkaW8iLCJzYXZlQXVkaW9Mb2NhbGx5IiwiYXVkaW8iLCJ0cmFuc2NyaXB0aW9uIiwic2V0T2ZmbGluZSIsImNoYXRJZCIsInR5cGUiLCJyb2xlIiwibGFuZ3VhZ2UiLCJkZWZhdWx0IiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImNvbnRlbnQiLCJzZW5kTWVzc2FnZSIsImZldGNoaW5nIiwiYWRkIiwiUHJvbWlzZSIsImFsbCIsInB1Ymxpc2hlZCIsIm9uTGlzdGVuIiwicHVibGlzaFN5c3RlbSIsIm9mZmxpbmUiLCJjb252ZXJzYXRpb24iLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwidHJpZ2dlciIsInVwZGF0ZUNvbnRlbnQiLCJvbkVuZCIsIm9mZiIsIm11bHRpcGFydCIsInB1Ymxpc2giLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsInB1c2giLCJsb2NhbEZpZWxkcyIsInBhcnNlZENvbnRlbnQiLCJyZWFjdGl2ZVByb3BzIiwibGlzdGVuIiwiaW5pdGlhbGlzZSIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwiI2xpc3RlbiIsIm9mZkV2ZW50cyIsIiNvZmZFdmVudHMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJzdHJlYW0iLCJ0aGVuIiwicmVzb2x2ZSIsImNhdGNoIiwiYWN0aW9ucyIsImZpbmQiLCJhY3Rpb24iLCJKU09OIiwicGFyc2UiLCJ0cmFjZSIsIl9jb25maWciLCJLbm93bGVkZ2VCb3hlcyIsIktub3dsZWRnZUJveCIsInByb2plY3QiLCJ1cmwiLCJwYXJhbXMiLCJET0NVTUVOVFNfU0VSVkVSIiwiZmlsdGVyIiwidXNlcklkIiwicmVtb3ZlIiwicGF0aCIsImRlbGV0ZSJdLCJzb3VyY2VzIjpbIi9hdWRpby9jb2xsZWN0aW9uLnRzIiwiL2F1ZGlvL2l0ZW0udHMiLCIvY2hhdHMvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGF0cy9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0cy9pdGVtL2luZGV4LnRzIiwiL2NoYXRzL2l0ZW0vcHJvdmlkZXIudHMiLCIvY2hhdHMvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdHMvbWVzc2FnZXMvaXRlbS50cyIsIi9rbm93bGVkZ2UtYm94ZXMvY29sbGVjdGlvbi50cyIsIi9rbm93bGVkZ2UtYm94ZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVu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