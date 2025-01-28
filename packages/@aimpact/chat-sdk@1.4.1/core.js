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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 2929228583,
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
                  console.log('no ta listo', e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsIml0ZW1zIiwibG9hZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsImFkZEl0ZW0iLCJpdGVtIiwidW5zaGlmdCIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJDaGF0Q29sbGVjdGlvblByb3ZpZGVyIiwicGFyZW50IiwibGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9jb3JlIiwiX2l0ZW0yIiwiX21lc3NhZ2VzIiwiX3Byb3ZpZGVyIiwiX3V1aWQiLCJDaGF0IiwiSXRlbSIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImlkIiwidW5kZWZpbmVkIiwic3BlY3MiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJNZXNzYWdlcyIsIm9uIiwidHJpZ2dlciIsImdsb2JhbFRoaXMiLCJjaGF0IiwidjQiLCJsaXN0ZW4iLCIjbGlzdGVuIiwib25MaXN0ZW4iLCJhY3Rpb25zIiwiZm9yRWFjaCIsImFjdGlvbiIsIkpTT04iLCJwYXJzZSIsInR5cGUiLCJzZXQiLCJjb250ZW50IiwidHJhbnNjcmlwdGlvbiIsInN0cmVhbWluZyIsImhhcyIsImFkZCIsImUiLCJjb25zb2xlIiwibG9nIiwib2ZmRXZlbnRzIiwiI29mZkV2ZW50cyIsIm9mZiIsImxvYWRBbGwiLCJjb2xsZWN0aW9uIiwibGVuZ3RoIiwic2V0RW50cmllcyIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwic3RyaW5nQ29udGVudCIsImdldERhdGEiLCJnZXRQcm9wZXJ0aWVzIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsInVyaSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIk1lc3NhZ2UiLCJjaGF0SWQiLCJyb2xlIiwib25GaW5pc2giLCJyZXNvbHZlIiwib25FcnJvciIsImVycm9yIiwic3RyZWFtIiwidGhlbiIsImNhdGNoIiwic2VuZEF1ZGlvIiwibWVzc2FnZSIsImF1ZGlvIiwibXVsdGlwYXJ0Iiwic2V0VGltZW91dCIsInRyYW5zY3JpYmUiLCJwb3N0IiwiZ2V0TWVzc2FnZSIsImNyZWF0ZSIsIm5hbWUiLCJwcm9qZWN0SWQiLCJ1aWQiLCJtZXRhZGF0YSIsInByb21wdCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsIm1hcCIsIk1hcCIsInB1c2giLCJsb2NhbEZpZWxkcyIsInBhcnNlZENvbnRlbnQiLCJyZWFjdGl2ZVByb3BzIiwicmVhZHkiXSwic291cmNlcyI6WyIvY2hhdHMvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGF0cy9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0cy9pdGVtL2luZGV4LnRzIiwiL2NoYXRzL2l0ZW0vcHJvdmlkZXIudHMiLCIvY2hhdHMvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdHMvbWVzc2FnZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQU9JLEtBQU0sU0FBUUwsTUFBQSxDQUFBTSxhQUFvQjtZQUN6RCxDQUFBQyxHQUFJO1lBRUpDLFlBQUE7Y0FD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