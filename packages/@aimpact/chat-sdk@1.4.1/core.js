System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/chat-sdk@1.4.1/startup", "@aimpact/reactive@0.0.1/entities/collection", "@aimpact/reactive@0.0.1/entities/item", "@beyond-js/kernel@0.1.9/core", "uuid@10.0.0", "@aimpact/chat-sdk@1.4.1/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Chats, IChatProperties, IChat, Chat, Message, __beyond_pkg, hmr;
  _export({
    Chats: void 0,
    IChatProperties: void 0,
    IChat: void 0,
    Chat: void 0,
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
        hash: 3755859170,
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
        hash: 931147890,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = void 0;
          var _model = require("@aimpact/reactive/model");
          var _item = require("./item");
          // import { MessageProvider } from '@aimpact/chat-api/provider';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsIml0ZW1zIiwibG9hZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsImFkZEl0ZW0iLCJpdGVtIiwidW5zaGlmdCIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJDaGF0Q29sbGVjdGlvblByb3ZpZGVyIiwicGFyZW50IiwibGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9jb3JlIiwiX2l0ZW0yIiwiX21lc3NhZ2VzIiwiX3Byb3ZpZGVyIiwiX3V1aWQiLCJDaGF0IiwiSXRlbSIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImlkIiwidW5kZWZpbmVkIiwic3BlY3MiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJNZXNzYWdlcyIsIm9uIiwidHJpZ2dlciIsImdsb2JhbFRoaXMiLCJjaGF0IiwidjQiLCJsaXN0ZW4iLCIjbGlzdGVuIiwib25MaXN0ZW4iLCJhY3Rpb25zIiwiZm9yRWFjaCIsImFjdGlvbiIsIkpTT04iLCJwYXJzZSIsInR5cGUiLCJzZXQiLCJjb250ZW50IiwidHJhbnNjcmlwdGlvbiIsInN0cmVhbWluZyIsImhhcyIsImFkZCIsImUiLCJjb25zb2xlIiwibG9nIiwib2ZmRXZlbnRzIiwiI29mZkV2ZW50cyIsIm9mZiIsImxvYWRBbGwiLCJjb2xsZWN0aW9uIiwibGVuZ3RoIiwic2V0RW50cmllcyIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwic3RyaW5nQ29udGVudCIsImdldERhdGEiLCJnZXRQcm9wZXJ0aWVzIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsInVyaSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIk1lc3NhZ2UiLCJjaGF0SWQiLCJyb2xlIiwib25GaW5pc2giLCJyZXNvbHZlIiwib25FcnJvciIsImVycm9yIiwic3RyZWFtIiwidGhlbiIsImNhdGNoIiwic2VuZEF1ZGlvIiwibWVzc2FnZSIsImF1ZGlvIiwibXVsdGlwYXJ0Iiwic2V0VGltZW91dCIsInRyYW5zY3JpYmUiLCJwb3N0IiwiZ2V0TWVzc2FnZSIsImNyZWF0ZSIsIm5hbWUiLCJwcm9qZWN0SWQiLCJ1aWQiLCJtZXRhZGF0YSIsInByb21wdCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsIm1hcCIsIk1hcCIsInB1c2giLCJsb2NhbEZpZWxkcyIsInBhcnNlZENvbnRlbnQiLCJyZWFjdGl2ZVByb3BzIiwicmVhZHkiXSwic291cmNlcyI6WyIvY2hhdHMvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGF0cy9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0cy9pdGVtL2luZGV4LnRzIiwiL2NoYXRzL2l0ZW0vcHJvdmlkZXIudHMiLCIvY2hhdHMvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdHMvbWVzc2FnZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLElBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFBT0ksS0FBTSxTQUFRTCxNQUFBLENBQUFNLGFBQW9CO1lBQ3pELENBQUFDLEdBQUk7WUFFSkMsWUFBQTtjQUND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