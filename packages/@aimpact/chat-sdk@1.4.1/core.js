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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.26"]]);
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
        hash: 1413864768,
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
                    console.log(10.2, 'aca', parsed.metadata);
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
                const specs = {
                  ...item.getProperties(),
                  audio: new File([item.audio], 'audio.mp4', {
                    type: 'audio/mp4'
                  }),
                  multipart: true
                };
                this.#api.bearer(token).stream(uri, specs).then(onFinish).catch(onError);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsIml0ZW1zIiwibG9hZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsImFkZEl0ZW0iLCJpdGVtIiwidW5zaGlmdCIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJDaGF0Q29sbGVjdGlvblByb3ZpZGVyIiwicGFyZW50IiwibGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9jb3JlIiwiX2l0ZW0yIiwiX21lc3NhZ2VzIiwiX3Byb3ZpZGVyIiwiX3V1aWQiLCJDaGF0IiwiSXRlbSIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImlkIiwidW5kZWZpbmVkIiwic3BlY3MiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJNZXNzYWdlcyIsIm9uIiwidHJpZ2dlciIsImdsb2JhbFRoaXMiLCJjaGF0IiwidjQiLCJsaXN0ZW4iLCIjbGlzdGVuIiwib25MaXN0ZW4iLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwibWV0YWRhdGEiLCJlIiwid2FybiIsImFjdGlvbnMiLCJmb3JFYWNoIiwiYWN0aW9uIiwidHlwZSIsInNldCIsImNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwic3RyZWFtaW5nIiwiaGFzIiwiYWRkIiwiZXJyb3IiLCJvZmZFdmVudHMiLCIjb2ZmRXZlbnRzIiwib2ZmIiwibG9hZEFsbCIsImNvbGxlY3Rpb24iLCJsZW5ndGgiLCJzZXRFbnRyaWVzIiwicmVhZHkiLCIjb25MaXN0ZW4iLCJzdHJlYW1SZXNwb25zZSIsInN0cmluZ0NvbnRlbnQiLCJnZXREYXRhIiwiZ2V0UHJvcGVydGllcyIsInNlbmRNZXNzYWdlIiwiZmV0Y2hpbmciLCJ1cmkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJNZXNzYWdlIiwiY2hhdElkIiwicm9sZSIsIm9uRmluaXNoIiwicmVzb2x2ZSIsIm9uRXJyb3IiLCJzdHJlYW0iLCJ0aGVuIiwiY2F0Y2giLCJzZW5kQXVkaW8iLCJtZXNzYWdlIiwiYXVkaW8iLCJGaWxlIiwibXVsdGlwYXJ0Iiwic2V0VGltZW91dCIsInRyYW5zY3JpYmUiLCJwb3N0IiwiZ2V0TWVzc2FnZSIsImNyZWF0ZSIsIm5hbWUiLCJwcm9qZWN0SWQiLCJ1aWQiLCJwcm9tcHQiLCJsYW5ndWFnZSIsImRlZmF1bHQiLCJtYXAiLCJNYXAiLCJwdXNoIiwibG9jYWxGaWVsZHMiLCJwYXJzZWRDb250ZW50IiwicmVhY3RpdmVQcm9wcyJdLCJzb3VyY2VzIjpbIi9jaGF0cy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NoYXRzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvY2hhdC50cyIsIi9tZXNzYWdlLnRzIiwiL2NoYXRzL2l0ZW0vaW5kZXgudHMiLCIvY2hhdHMvaXRlbS9wcm92aWRlci50cyIsIi9jaGF0cy9tZXNzYWdlcy9pbmRleC50cyIsIi9jaGF0cy9tZXNzYWdlcy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLElBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFBT0ksS0FBTSxTQUFRTCxNQUFBLENBQUFNLGFBQW9CO1lBQ3pELENB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