System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/chat-sdk@1.4.1/startup", "@aimpact/reactive@0.0.1/entities/collection", "@aimpact/reactive@0.0.1/entities/item", "@beyond-js/kernel@0.1.9/core", "uuid@10.0.0", "@aimpact/chat-sdk@1.4.1/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Chats, IChatProperties, IChat, Chat, Messages, Message, __beyond_pkg, hmr;
  _export({
    Chats: void 0,
    IChatProperties: void 0,
    IChat: void 0,
    Chat: void 0,
    Messages: void 0,
    Message: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactReactive001Model) {
      dependency_1 = _aimpactReactive001Model;
    }, function (_aimpactHttpSuite001Api) {
      dependency_2 = _aimpactHttpSuite001Api;
    }, function (_aimpactChatSdk141Session) {
      dependency_3 = _aimpactChatSdk141Session;
    }, function (_aimpactChatSdk141Startup) {
      dependency_4 = _aimpactChatSdk141Startup;
    }, function (_aimpactReactive001EntitiesCollection) {
      dependency_5 = _aimpactReactive001EntitiesCollection;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_6 = _aimpactReactive001EntitiesItem;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
    }, function (_aimpactChatSdk141Config) {
      dependency_9 = _aimpactChatSdk141Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.20"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.1/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/reactive/model', dependency_1], ['@aimpact/http-suite/api', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@aimpact/chat-sdk/startup', dependency_4], ['@aimpact/reactive/entities/collection', dependency_5], ['@aimpact/reactive/entities/item', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['uuid', dependency_8], ['@aimpact/chat-sdk/config', dependency_9]]);
      ims = new Map();
      /****************************************
      INTERNAL MODULE: ./chats/collection/index
      ****************************************/
      ims.set('./chats/collection/index', {
        hash: 1259274093,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chats = void 0;
          var _model = require("@aimpact/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          /*bundle*/
          class Chats extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.api);
            }
            #items = [];
            get items() {
              return this.#items;
            }
            async load() {
              const token = await _session.sessionWrapper.user.firebaseToken;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/chats`);
              if (!status) {
                throw new Error('error loading chat');
              }
              this.#items = data.items;
              return {
                status,
                data
              };
            }
            async addItem(item) {
              this.#items.unshift(item);
              this.triggerEvent('change');
            }
          }
          exports.Chats = Chats;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./chats/collection/provider
      *******************************************/

      ims.set('./chats/collection/provider', {
        hash: 1637255834,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatCollectionProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
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
        hash: 1054238040,
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
        hash: 1419565926,
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
        hash: 2690556239,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _core = require("@beyond-js/kernel/core");
          var _api = require("@aimpact/http-suite/api");
          var _item2 = require("../messages/item");
          var _messages = require("../messages");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          var _provider = require("./provider");
          var _uuid = require("uuid");
          /*bundle*/ // ChatItem

          class Chat extends _item.Item {
            #api;
            get api() {
              return this.#api;
            }
            #currentMessage;
            #response;
            #messages;
            get messages() {
              return this.#messages;
            }
            constructor({
              id = undefined,
              ...specs
            } = {}) {
              super({
                id,
                entity: 'Chat',
                ...specs,
                properties: ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'language', 'usage', 'user', 'children', 'knowledgeBoxId', 'metadata'],
                provider: _provider.ChatProvider
              });
              this.#api = new _api.Api(_startup.sdkConfig.api);
              this.#messages = new _messages.Messages();
              this.#messages.on('new.message', () => this.trigger('new.message'));
              globalThis.chat = this;
              if (!id) this.id = (0, _uuid.v4)();
              this.#listen();
              globalThis.chat = this;
              // console.log(`chat is being exposed in console as chat`, id);
            }
            #listen = () => {
              this.#api.on('stream.response', this.#onListen);
              this.#api.on('action.received', data => {
                if (data) {
                  try {
                    const parsed = JSON.parse(data);
                    this.trigger('action.received', parsed.metadata);
                  } catch (e) {
                    console.warn('the data coudnt be parsed', data);
                  }
                }
                try {
                  if (this.#api.actions) {
                    this.#api.actions.forEach(data => {
                      const action = JSON.parse(data);
                      if (action.type === 'transcription') {
                        this.#currentMessage.set({
                          content: action.data.transcription,
                          streaming: false
                        });
                        //once the transcription is received, we add the system message to the chat
                        if (this.#response && !this.#messages.has(this.#response.id)) this.messages.add(this.#response);
                      }
                    });
                  }
                  // const action = JSON.parse(this.#api.actions);
                } catch (e) {
                  console.error(e);
                }
              });
            };
            #offEvents = () => {
              this.#api.off('stream.response', this.#onListen);
            };
            loadAll = async specs => {
              const response = await this.load(specs);
              const collection = this.#messages;
              collection.on('change', this.triggerEvent);
              if (response.messages?.length) {
                await collection.setEntries(response.messages);
              }
              this.ready = true;
              this.trigger('change');
              this.#messages = collection;
            };
            #onListen = () => {
              if (!this.#response) return;
              this.#response.content = this.#api.streamResponse;
              this.#response.set({
                content: this.#api.stringContent,
                actions: this.#api.actions
              });
              // this.#response.publish();
              this.trigger('content.updated');
            };
            getData() {
              const properties = this.getProperties();
              properties.messages = this.#messages.getData();
              return properties;
            }
            async sendMessage(content) {
              try {
                this.fetching = true;
                const token = await _session.sessionWrapper.user.firebaseToken;
                const uri = `/chats/${this.id}/messages`;
                const promise = new _core.PendingPromise();
                const item = new _item2.Message({
                  chatId: this.id,
                  role: 'user',
                  content
                });
                this.#currentMessage = item;
                const onFinish = async response => {
                  this.trigger('response.finished');
                  await this.#response.set({
                    streaming: false
                  });
                  this.#response = undefined;
                  promise.resolve(item);
                  // this.#offEvents();
                };
                const onError = e => {
                  console.error(e);
                };
                this.#response = new _item2.Message({
                  chatId: this.id,
                  role: 'system',
                  streaming: true
                });
                this.messages.add(item);
                this.messages.add(this.#response);
                this.#api.bearer(token).stream(uri, {
                  ...item.getProperties()
                }).then(onFinish).catch(onError);
                return promise;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async sendAudio(message) {
              try {
                this.fetching = true;
                const token = await _session.sessionWrapper.user.firebaseToken;
                const uri = `/chats/${this.id}/messages/audio`;
                const promise = new _core.PendingPromise();
                const item = new _item2.Message({
                  chatId: this.id,
                  audio: message,
                  role: 'user',
                  streaming: true
                });
                this.#currentMessage = item;
                const onFinish = async response => {
                  await this.#response.set({
                    streaming: false
                  });
                  this.trigger('response.finished');
                  // this.#response = undefined;
                  promise.resolve(item);
                  // this.#offEvents();
                };
                const onError = e => {
                  console.error(e);
                };
                this.messages.add(item);
                this.#response = new _item2.Message({
                  chatId: this.id,
                  role: 'system',
                  streaming: true
                });
                // this.messages.add(this.#response);
                this.#api.bearer(token).stream(uri, {
                  ...item.getProperties(),
                  multipart: true
                }).then(onFinish).catch(onError);
                globalThis.setTimeout(() => onFinish({}), 3000); // TODO: remove this
                return promise;
              } catch (e) {
                throw new Error(e);
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async transcribe(audio) {
              try {
                const uri = `/audios/transcribe`;
                const token = await _session.sessionWrapper.user.firebaseToken;
                const response = await this.#api.bearer(token).post(uri, {
                  multipart: true,
                  audio: audio
                });
                return response;
              } catch (e) {
                //todo: how to handle other kind of errors
                throw e;
              }
            }
            getMessage(id) {
              return this.#messages.get(id);
            }
            response(data) {
              return {
                status: true,
                data
              };
            }
            async create() {
              const response = await this.#api.post('/chats', {
                id: this.id,
                name: 'My chat',
                projectId: '02d991dd-8d57-42f3-b155-8e7133482c19',
                uid: _session.sessionWrapper.user.id,
                metadata: {
                  prompt: 'topic-q&a'
                },
                language: {
                  default: 'es'
                }
              });
              this.set(response.data);
            }
          }
          exports.Chat = Chat;
        }
      });

      /*************************************
      INTERNAL MODULE: ./chats/item/provider
      *************************************/

      ims.set('./chats/item/provider', {
        hash: 2402995304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
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
              return data;
            }
          }
          exports.ChatProvider = ChatProvider;
        }
      });

      /**************************************
      INTERNAL MODULE: ./chats/messages/index
      **************************************/

      ims.set('./chats/messages/index', {
        hash: 2473851766,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = void 0;
          var _model = require("@aimpact/reactive/model");
          var _item = require("./item");
          /*bundle*/ // import { MessageProvider } from '@aimpact/chat-api/provider';

          class Messages extends _model.ReactiveModel {
            item = _item.Message;
            #items = [];
            #map = new Map();
            get items() {
              return this.#items;
            }
            constructor() {
              super();
            }
            setEntries(data) {
              this.#items = data.map(item => {
                const message = new _item.Message(item);
                this.#map.set(message.id, message);
                return message;
              });
            }
            get(id) {
              return this.#map.get(id);
            }
            add(item) {
              this.#items.push(item);
              this.#map.set(item.id, item);
              this.trigger('new.message');
            }
            getData() {
              return this.#items.map(item => item.getProperties());
            }
            has(id) {
              return this.#map.has(id);
            }
          }
          exports.Messages = Messages;
        }
      });

      /*************************************
      INTERNAL MODULE: ./chats/messages/item
      *************************************/

      ims.set('./chats/messages/item', {
        hash: 1963570827,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _model = require("@aimpact/reactive/model");
          var _uuid = require("uuid");
          var _api = require("@aimpact/http-suite/api");
          var _startup = require("@aimpact/chat-sdk/startup");
          /*bundle*/ // ChatItem

          class Message extends _model.ReactiveModel {
            #api;
            #response = '';
            //#endregion
            #chat;
            localFields = ['audio'];
            #parsedContent;
            get response() {
              return this.#response;
            }
            #type;
            get type() {
              return this.#type;
            }
            constructor({
              id = undefined,
              chat,
              ...specs
            }) {
              super({
                id,
                ...specs,
                properties: ['id', 'chatId', 'audio', 'userId', 'role', 'content', 'usage', 'timestamp', 'streaming', 'actions']
              });
              this.#chat = chat;
              if (!id) this.id = (0, _uuid.v4)();
              const api = new _api.Api(_startup.sdkConfig.api);
              this.#api = api;
              this.#type = specs.type ?? 'message';
              this.reactiveProps(['autoplay']);
              super.ready = true;
            }
          }
          //
          exports.Message = Message;
        }
      });
      __pkg.exports.descriptor = [{
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
        "im": "./chats/messages/index",
        "from": "Messages",
        "name": "Messages"
      }, {
        "im": "./chats/messages/item",
        "from": "Message",
        "name": "Message"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Chats') && _export("Chats", Chats = require ? require('./chats/collection/index').Chats : value);
        (require || prop === 'IChatProperties') && _export("IChatProperties", IChatProperties = require ? require('./chats/interfaces/chat').IChatProperties : value);
        (require || prop === 'IChat') && _export("IChat", IChat = require ? require('./chats/interfaces/chat').IChat : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./chats/item/index').Chat : value);
        (require || prop === 'Messages') && _export("Messages", Messages = require ? require('./chats/messages/index').Messages : value);
        (require || prop === 'Message') && _export("Message", Message = require ? require('./chats/messages/item').Message : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsIml0ZW1zIiwibG9hZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsImFkZEl0ZW0iLCJpdGVtIiwidW5zaGlmdCIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJDaGF0Q29sbGVjdGlvblByb3ZpZGVyIiwicGFyZW50IiwibGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9jb3JlIiwiX2l0ZW0yIiwiX21lc3NhZ2VzIiwiX3Byb3ZpZGVyIiwiX3V1aWQiLCJDaGF0IiwiSXRlbSIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImlkIiwidW5kZWZpbmVkIiwic3BlY3MiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJNZXNzYWdlcyIsIm9uIiwidHJpZ2dlciIsImdsb2JhbFRoaXMiLCJjaGF0IiwidjQiLCJsaXN0ZW4iLCIjbGlzdGVuIiwib25MaXN0ZW4iLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJtZXRhZGF0YSIsImUiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJmb3JFYWNoIiwiYWN0aW9uIiwidHlwZSIsInNldCIsImNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwic3RyZWFtaW5nIiwiaGFzIiwiYWRkIiwiZXJyb3IiLCJvZmZFdmVudHMiLCIjb2ZmRXZlbnRzIiwib2ZmIiwibG9hZEFsbCIsImNvbGxlY3Rpb24iLCJsZW5ndGgiLCJzZXRFbnRyaWVzIiwicmVhZHkiLCIjb25MaXN0ZW4iLCJzdHJlYW1SZXNwb25zZSIsInN0cmluZ0NvbnRlbnQiLCJnZXREYXRhIiwiZ2V0UHJvcGVydGllcyIsInNlbmRNZXNzYWdlIiwiZmV0Y2hpbmciLCJ1cmkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJNZXNzYWdlIiwiY2hhdElkIiwicm9sZSIsIm9uRmluaXNoIiwicmVzb2x2ZSIsIm9uRXJyb3IiLCJzdHJlYW0iLCJ0aGVuIiwiY2F0Y2giLCJzZW5kQXVkaW8iLCJtZXNzYWdlIiwiYXVkaW8iLCJtdWx0aXBhcnQiLCJzZXRUaW1lb3V0IiwidHJhbnNjcmliZSIsInBvc3QiLCJnZXRNZXNzYWdlIiwiY3JlYXRlIiwibmFtZSIsInByb2plY3RJZCIsInVpZCIsInByb21wdCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsIm1hcCIsIk1hcCIsInB1c2giLCJsb2NhbEZpZWxkcyIsInBhcnNlZENvbnRlbnQiLCJyZWFjdGl2ZVByb3BzIl0sInNvdXJjZXMiOlsiL2NoYXRzL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY2hhdHMvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9jaGF0LnRzIiwiL21lc3NhZ2UudHMiLCIvY2hhdHMvaXRlbS9pbmRleC50cyIsIi9jaGF0cy9pdGVtL3Byb3ZpZGVyLnRzIiwiL2NoYXRzL21lc3NhZ2VzL2luZGV4LnRzIiwiL2NoYXRzL21lc3NhZ2VzL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUFPSSxLQUFNLFNBQVFMLE1BQUEsQ0FBQU0sYUFBb0I7WUFDekQsQ0FBQUMsR0FBSTtZQUVK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