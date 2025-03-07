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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.16"]]);
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
        hash: 3426635636,
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
              this.#api.on('action.received', () => {
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
              // console.log('llega info', this.#response);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsIml0ZW1zIiwibG9hZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsImFkZEl0ZW0iLCJpdGVtIiwidW5zaGlmdCIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJDaGF0Q29sbGVjdGlvblByb3ZpZGVyIiwicGFyZW50IiwibGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9jb3JlIiwiX2l0ZW0yIiwiX21lc3NhZ2VzIiwiX3Byb3ZpZGVyIiwiX3V1aWQiLCJDaGF0IiwiSXRlbSIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImlkIiwidW5kZWZpbmVkIiwic3BlY3MiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJNZXNzYWdlcyIsIm9uIiwidHJpZ2dlciIsImdsb2JhbFRoaXMiLCJjaGF0IiwidjQiLCJsaXN0ZW4iLCIjbGlzdGVuIiwib25MaXN0ZW4iLCJhY3Rpb25zIiwiZm9yRWFjaCIsImFjdGlvbiIsIkpTT04iLCJwYXJzZSIsInR5cGUiLCJzZXQiLCJjb250ZW50IiwidHJhbnNjcmlwdGlvbiIsInN0cmVhbWluZyIsImhhcyIsImFkZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJvZmZFdmVudHMiLCIjb2ZmRXZlbnRzIiwib2ZmIiwibG9hZEFsbCIsImNvbGxlY3Rpb24iLCJsZW5ndGgiLCJzZXRFbnRyaWVzIiwicmVhZHkiLCIjb25MaXN0ZW4iLCJzdHJlYW1SZXNwb25zZSIsInN0cmluZ0NvbnRlbnQiLCJnZXREYXRhIiwiZ2V0UHJvcGVydGllcyIsInNlbmRNZXNzYWdlIiwiZmV0Y2hpbmciLCJ1cmkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJNZXNzYWdlIiwiY2hhdElkIiwicm9sZSIsIm9uRmluaXNoIiwicmVzb2x2ZSIsIm9uRXJyb3IiLCJzdHJlYW0iLCJ0aGVuIiwiY2F0Y2giLCJzZW5kQXVkaW8iLCJtZXNzYWdlIiwiYXVkaW8iLCJtdWx0aXBhcnQiLCJzZXRUaW1lb3V0IiwidHJhbnNjcmliZSIsInBvc3QiLCJnZXRNZXNzYWdlIiwiY3JlYXRlIiwibmFtZSIsInByb2plY3RJZCIsInVpZCIsIm1ldGFkYXRhIiwicHJvbXB0IiwibGFuZ3VhZ2UiLCJkZWZhdWx0IiwibWFwIiwiTWFwIiwicHVzaCIsImxvY2FsRmllbGRzIiwicGFyc2VkQ29udGVudCIsInJlYWN0aXZlUHJvcHMiXSwic291cmNlcyI6WyIvY2hhdHMvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGF0cy9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0cy9pdGVtL2luZGV4LnRzIiwiL2NoYXRzL2l0ZW0vcHJvdmlkZXIudHMiLCIvY2hhdHMvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdHMvbWVzc2FnZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQU9JLEtBQU0sU0FBUUwsTUFBQSxDQUFBTSxhQUFvQjtZQUN6RCxDQUFBQyxHQUFJO1lBRUpDLFlBQUE7Y0FDQyxLQUFL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