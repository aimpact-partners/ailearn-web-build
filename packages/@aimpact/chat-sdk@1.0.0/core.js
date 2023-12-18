System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/entities", "@aimpact/chat-api@0.2.0/provider", "@aimpact/ailearn-app@0.0.23/config", "@aimpact/chat-sdk@1.0.0/api", "@beyond-js/kernel@0.1.9/core", "dayjs@1.11.10", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.3/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Audio, Chats, IChatProperties, IChat, Chat, Message, KnowledgeBoxes, KnowledgeBox, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0023Config) {
      dependency_3 = _aimpactAilearnApp0023Config;
    }, function (_aimpactChatSdk100Api) {
      dependency_4 = _aimpactChatSdk100Api;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_dayjs) {
      dependency_6 = _dayjs;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_pragmateUi003Components) {
      dependency_8 = _pragmateUi003Components;
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-api/provider', dependency_2], ['@aimpact/chat-sdk/config', dependency_3], ['@aimpact/chat-sdk/api', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['dayjs', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/components', dependency_8]]);
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

      /**********************************
      INTERNAL MODULE: ./chats/collection
      **********************************/

      ims.set('./chats/collection', {
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

      /***************************************
      INTERNAL MODULE: ./chats/interfaces/chat
      ***************************************/

      ims.set('./chats/interfaces/chat', {
        hash: 1060672188,
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
        hash: 1243837466,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./chats/item
      ****************************/

      ims.set('./chats/item', {
        hash: 2203269320,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("@aimpact/chat-sdk/config");
          var _api = require("@aimpact/chat-sdk/api");
          var _item = require("./messages/item");
          var _messages = require("./messages");
          var _core = require("@beyond-js/kernel/core");
          var _provider = require("./provider");
          /*bundle*/ // ChatItem

          // import { ChatProvider } from '@aimpact/chat-api/provider';

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

      /********************************
      INTERNAL MODULE: ./chats/provider
      ********************************/

      ims.set('./chats/provider', {
        hash: 1938926629,
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
        "im": "./chats/collection",
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
        "im": "./chats/item",
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
        (require || prop === 'Chats') && _export("Chats", Chats = require ? require('./chats/collection').Chats : value);
        (require || prop === 'IChatProperties') && _export("IChatProperties", IChatProperties = require ? require('./chats/interfaces/chat').IChatProperties : value);
        (require || prop === 'IChat') && _export("IChat", IChat = require ? require('./chats/interfaces/chat').IChat : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./chats/item').Chat : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29uZmlnIiwiX2FwaSIsIl9tZXNzYWdlcyIsIl9jb3JlIiwiYXBpIiwibG9jYWxkYiIsIm1lc3NhZ2VzIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJjaGF0IiwiZ2xvYmFsVGhpcyIsImNvbnNvbGUiLCJsb2ciLCJsb2FkQWxsIiwic3BlY3MiLCJyZXNwb25zZSIsImxvYWQiLCJjb2xsZWN0aW9uIiwiTWVzc2FnZXMiLCJkYXRhIiwibG9jYWxMb2FkIiwiY29udmVyc2F0aW9uSWQiLCJzb3J0QnkiLCJvbiIsInRyaWdnZXJFdmVudCIsImxlbmd0aCIsInNldEVudHJpZXMiLCJtIiwiYyIsInNldEF1ZGlvTWVzc2FnZSIsInJlc3BvbnNlSXRlbSIsIk1lc3NhZ2UiLCJpc1JlYWR5Iiwic2F2ZU1lc3NhZ2UiLCJlIiwiZXJyb3IiLCJjdXJyZW50QXVkaW8iLCJzYXZlQXVkaW9Mb2NhbGx5IiwiYXVkaW8iLCJ0cmFuc2NyaXB0aW9uIiwic2V0T2ZmbGluZSIsInR5cGUiLCJyb2xlIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImNvbnRlbnQiLCJzZW5kTWVzc2FnZSIsImZldGNoaW5nIiwiUHJvbWlzZSIsImFsbCIsInB1Ymxpc2hlZCIsIm9uTGlzdGVuIiwicHVibGlzaFN5c3RlbSIsIm9mZmxpbmUiLCJjb252ZXJzYXRpb24iLCJ0cmlnZ2VyIiwidXBkYXRlQ29udGVudCIsIm9uRW5kIiwib2ZmIiwic3lzdGVtSWQiLCJtdWx0aXBhcnQiLCJwdWJsaXNoIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJnZXQiLCJNZXNzYWdlUHJvdmlkZXIiLCJfc2Vzc2lvbiIsImxvY2FsRmllbGRzIiwicGFyc2VkQ29udGVudCIsInJlYWN0aXZlUHJvcHMiLCJsaXN0ZW4iLCJpbml0aWFsaXNlIiwiI29uTGlzdGVuIiwic3RyZWFtUmVzcG9uc2UiLCIjbGlzdGVuIiwib2ZmRXZlbnRzIiwiI29mZkV2ZW50cyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0cmVhbSIsInRoZW4iLCJjYXRjaCIsImFjdGlvbnMiLCJmaW5kIiwiYWN0aW9uIiwiSlNPTiIsInBhcnNlIiwidHJhY2UiLCJwYXJlbnQiLCJzdGF0dXMiLCJFcnJvciIsIktub3dsZWRnZUJveGVzIiwiS25vd2xlZGdlQm94IiwicHJvamVjdCIsInVybCIsIkRPQ1VNRU5UU19TRVJWRVIiLCJLbm93bGVkZ2VCb3hQcm92aWRlciIsImxpc3QiLCJmaWx0ZXIiLCJ1c2VySWQiLCJyZW1vdmUiLCJwYXRoIiwiZGVsZXRlIl0sInNvdXJjZXMiOlsiL2F1ZGlvL2NvbGxlY3Rpb24udHMiLCIvYXVkaW8vaXRlbS50cyIsIi9jaGF0cy9jb2xsZWN0aW9uLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0cy9pdGVtLnRzIiwiL2NoYXRzL21lc3NhZ2VzL2NvbGxlY3Rpb24udHMiLCIvY2hhdHMvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdHMvbWVzc2FnZXMvaXRlbS50cyIsIi9jaGF0cy9wcm92aWRlci50cyIsIi9rbm93bGVkZ2UtYm94ZXMvY29sbGVjdGlvbi50cyIsIi9rbm93bGVkZ2UtYm94ZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxu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