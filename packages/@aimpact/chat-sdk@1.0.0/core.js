System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/entities", "@aimpact/chat-api@0.1.0/provider", "@aimpact/ailearn-app@0.0.11/config", "@aimpact/chat@1.0.1/api", "@beyond-js/kernel@0.1.9/core", "dayjs@1.11.10", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/api"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Audio, Chats, IChatProperties, Chat, Message, KnowledgeBoxes, KnowledgeBox, __beyond_pkg, hmr;
  _export({
    Audio: void 0,
    Chats: void 0,
    IChatProperties: void 0,
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
    }, function (_aimpactChatApi010Provider) {
      dependency_2 = _aimpactChatApi010Provider;
    }, function (_aimpactAilearnApp0011Config) {
      dependency_3 = _aimpactAilearnApp0011Config;
    }, function (_aimpactChat101Api) {
      dependency_4 = _aimpactChat101Api;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_dayjs) {
      dependency_6 = _dayjs;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100Api) {
      dependency_8 = _aimpactChatSdk100Api;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-api/provider', dependency_2], ['@aimpact/chat-sdk/config', dependency_3], ['@aimpact/chat/api', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['dayjs', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat-sdk/api', dependency_8]]);
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

      /******************************************
      INTERNAL MODULE: ./conversations/collection
      ******************************************/

      ims.set('./conversations/collection', {
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

      /***********************************************
      INTERNAL MODULE: ./conversations/interfaces/chat
      ***********************************************/

      ims.set('./conversations/interfaces/chat', {
        hash: 2333923011,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************************
      INTERNAL MODULE: ./conversations/interfaces/message
      **************************************************/

      ims.set('./conversations/interfaces/message', {
        hash: 1243837466,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************
      INTERNAL MODULE: ./conversations/item
      ************************************/

      ims.set('./conversations/item', {
        hash: 2191243681,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("@aimpact/chat-sdk/config");
          var _api = require("@aimpact/chat/api");
          var _item = require("./messages/item");
          var _messages = require("./messages");
          var _core = require("@beyond-js/kernel/core");
          var _provider = require("./provider");
          /*bundle*/ // ChatItem

          // import { ChatProvider } from '@aimpact/chat-api/provider';

          class Chat extends _entities.Item {
            #api;
            properties = ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'language', 'usage', 'children', 'knowledgeBoxId', 'metadata'];
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
                  response.updateContent({
                    content: item.response
                  });
                  response.triggerEvent();
                  this.triggerEvent();
                };
                const onEnd = () => {
                  this.trigger('response.finished');
                  response.updateContent({
                    content: item.response
                  });
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

      /***************************************************
      INTERNAL MODULE: ./conversations/messages/collection
      ***************************************************/

      ims.set('./conversations/messages/collection', {
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

      /**********************************************
      INTERNAL MODULE: ./conversations/messages/index
      **********************************************/

      ims.set('./conversations/messages/index', {
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

      /*********************************************
      INTERNAL MODULE: ./conversations/messages/item
      *********************************************/

      ims.set('./conversations/messages/item', {
        hash: 15884550,
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

      /****************************************
      INTERNAL MODULE: ./conversations/provider
      ****************************************/

      ims.set('./conversations/provider', {
        hash: 1831905359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatProvider = void 0;
          var _api = require("@aimpact/chat/api");
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
        hash: 642003305,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBoxes = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _item = require("./item");
          /*bundle*/
          class KnowledgeBoxes extends _entities.Collection {
            item = _item.KnowledgeBox;
            constructor() {
              super({
                provider: _provider.KnowledgeBoxProvider,
                storeName: 'KnowledgeBoxes',
                db: 'chat-api'
              });
            }
          }
          exports.KnowledgeBoxes = KnowledgeBoxes;
        }
      });

      /**************************************
      INTERNAL MODULE: ./knowledge-boxes/item
      **************************************/

      ims.set('./knowledge-boxes/item', {
        hash: 887262650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBox = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          /*bundle*/ // KnowledgeBox

          class KnowledgeBox extends _entities.Item {
            properties = ['id', 'path', 'identifier', 'documents', 'type'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'KnowledgeBoxes',
                provider: _provider.KnowledgeBoxProvider
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
        "im": "./conversations/collection",
        "from": "Chats",
        "name": "Chats"
      }, {
        "im": "./conversations/interfaces/chat",
        "from": "IChatProperties",
        "name": "IChatProperties"
      }, {
        "im": "./conversations/item",
        "from": "Chat",
        "name": "Chat"
      }, {
        "im": "./conversations/messages/item",
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
        (require || prop === 'Chats') && _export("Chats", Chats = require ? require('./conversations/collection').Chats : value);
        (require || prop === 'IChatProperties') && _export("IChatProperties", IChatProperties = require ? require('./conversations/interfaces/chat').IChatProperties : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./conversations/item').Chat : value);
        (require || prop === 'Message') && _export("Message", Message = require ? require('./conversations/messages/item').Message : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvQixDQUFFLENBQUM7WUFDM0Y7O1VBQ0F0RyIsIm5hbWVzIjpbIkF1ZGlvcyIsIkNvbGxlY3Rpb24iLCJpdGVtIiwiQXVkaW8iLCJzdG9yZU5hbWUiLCJkYiIsImNvbnN0cnVjdG9yIiwicHJvdmlkZXIiLCJBdWRpb1Byb3ZpZGVyIiwiaW5pdCIsImV4cG9ydHMiLCJJdGVtIiwicHJvcGVydGllcyIsImlkIiwidW5kZWZpbmVkIiwiQ2hhdHMiLCJDaGF0IiwiQ2hhdFByb3ZpZGVyIiwiT2JqZWN0IiwidmFsdWUiLCJsb2NhbGRiIiwibWVzc2FnZXMiLCJBcGkiLCJjb25maWciLCJwYXJhbXMiLCJhcGlzIiwiY2hhdCIsImxvYWRBbGwiLCJzcGVjcyIsInJlc3BvbnNlIiwibG9hZCIsImNvbGxlY3Rpb24iLCJNZXNzYWdlcyIsImRhdGEiLCJsb2NhbExvYWQiLCJjb252ZXJzYXRpb25JZCIsInNvcnRCeSIsIm9uIiwidHJpZ2dlckV2ZW50IiwibGVuZ3RoIiwic2V0RW50cmllcyIsImdsb2JhbFRoaXMiLCJtIiwiYyIsInNldEF1ZGlvTWVzc2FnZSIsInJlc3BvbnNlSXRlbSIsIk1lc3NhZ2UiLCJpc1JlYWR5Iiwic2F2ZU1lc3NhZ2UiLCJlIiwiY29uc29sZSIsImVycm9yIiwic2F2ZUF1ZGlvTG9jYWxseSIsImF1ZGlvIiwidHJhbnNjcmlwdGlvbiIsInNldE9mZmxpbmUiLCJ0eXBlIiwicm9sZSIsImxhbmd1YWdlIiwiZGVmYXVsdCIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiY29udGVudCIsInNlbmRNZXNzYWdlIiwiZmV0Y2hpbmciLCJQcm9taXNlIiwiYWxsIiwicHVibGlzaGVkIiwib25MaXN0ZW4iLCJwdWJsaXNoU3lzdGVtIiwib2ZmbGluZSIsImNvbnZlcnNhdGlvbiIsInVwZGF0ZUNvbnRlbnQiLCJvbkVuZCIsInRyaWdnZXIiLCJvZmYiLCJzeXN0ZW1JZCIsIm11bHRpcGFydCIsInB1Ymxpc2giLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsImdldCIsIk1lc3NhZ2VQcm92aWRlciIsImxvY2FsRmllbGRzIiwiYXBpIiwicmVhY3RpdmVQcm9wcyIsImluaXRpYWxpc2UiLCJzdHJlYW1SZXNwb25zZSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0cmVhbSIsInRoZW4iLCJjYXRjaCIsImFjdGlvbnMiLCJmaW5kIiwiYWN0aW9uIiwiSlNPTiIsInBhcnNlIiwidHJhY2UiLCJwYXJlbnQiLCJzdGF0dXMiLCJFcnJvciIsIktub3dsZWRnZUJveGVzIiwiS25vd2xlZGdlQm94IiwiS25vd2xlZGdlQm94UHJvdmlkZXIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImF1ZGlvL2NvbGxlY3Rpb24udHMiLCJhdWRpby9pdGVtLnRzIiwiY29udmVyc2F0aW9ucy9jb2xsZWN0aW9uLnRzIiwiY29udmVyc2F0aW9ucy9pbnRlcmZhY2VzL2NoYXQudHMiLCJjb252ZXJzYXRpb25zL2ludGVyZmFjZXMvbWVzc2FnZS50cyIsImNvbnZlcnNhdGlvbnMvaXRlbS50cyIsImNvbnZlcnNhdGlvbnMvbWVzc2FnZXMvY29sbGVjdGlvbi50cyIsImNvbnZlcnNhdGlvbnMvbWVzc2FnZXMvaW5kZXgudHMiLCJjb252ZXJzYXRpb25zL21lc3NhZ2VzL2l0ZW0udHMiLCJjb252ZXJzYXRpb25zL3Byb3ZpZGVyLnRzIiwia25vd2xlZGdlLWJveGVzL2NvbGxlY3Rpb24udHMiLCJrbm93bGVkZ2UtYm94ZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=