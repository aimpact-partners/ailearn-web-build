System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@1.2.0-beta.01/model", "@beyond-js/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.4.3/session", "@aimpact/chat-sdk@1.4.3/startup", "@beyond-js/reactive@1.2.0-beta.01/entities/collection", "@beyond-js/reactive@1.2.0-beta.01/entities/item", "@beyond-js/kernel@0.1.12/core", "uuid@10.0.0", "@aimpact/chat-sdk@1.4.3/config"], function (_export, _context) {
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
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive120Beta01Model) {
      dependency_1 = _beyondJsReactive120Beta01Model;
    }, function (_beyondJsHttpSuite001Api) {
      dependency_2 = _beyondJsHttpSuite001Api;
    }, function (_aimpactChatSdk143Session) {
      dependency_3 = _aimpactChatSdk143Session;
    }, function (_aimpactChatSdk143Startup) {
      dependency_4 = _aimpactChatSdk143Startup;
    }, function (_beyondJsReactive120Beta01EntitiesCollection) {
      dependency_5 = _beyondJsReactive120Beta01EntitiesCollection;
    }, function (_beyondJsReactive120Beta01EntitiesItem) {
      dependency_6 = _beyondJsReactive120Beta01EntitiesItem;
    }, function (_beyondJsKernel0112Core) {
      dependency_7 = _beyondJsKernel0112Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
    }, function (_aimpactChatSdk143Config) {
      dependency_9 = _aimpactChatSdk143Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0-beta.01"], ["@beyond-js/http-suite", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.3"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.3/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/http-suite/api', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@aimpact/chat-sdk/startup', dependency_4], ['@beyond-js/reactive/entities/collection', dependency_5], ['@beyond-js/reactive/entities/item', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['uuid', dependency_8], ['@aimpact/chat-sdk/config', dependency_9]]);
      ims = new Map();
      /****************************************
      INTERNAL MODULE: ./chats/collection/index
      ****************************************/
      ims.set('./chats/collection/index', {
        hash: 1436428000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chats = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
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
        hash: 1443553202,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatCollectionProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
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
        hash: 286085866,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _core = require("@beyond-js/kernel/core");
          var _api = require("@beyond-js/http-suite/api");
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
        hash: 3441915686,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
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
        hash: 161768884,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = void 0;
          var _model = require("@beyond-js/reactive/model");
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
        hash: 2123327364,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _uuid = require("uuid");
          var _api = require("@beyond-js/http-suite/api");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsIml0ZW1zIiwibG9hZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsImFkZEl0ZW0iLCJpdGVtIiwidW5zaGlmdCIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJDaGF0Q29sbGVjdGlvblByb3ZpZGVyIiwicGFyZW50IiwibGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9jb3JlIiwiX2l0ZW0yIiwiX21lc3NhZ2VzIiwiX3Byb3ZpZGVyIiwiX3V1aWQiLCJDaGF0IiwiSXRlbSIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImlkIiwidW5kZWZpbmVkIiwic3BlY3MiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJNZXNzYWdlcyIsIm9uIiwidHJpZ2dlciIsImdsb2JhbFRoaXMiLCJjaGF0IiwidjQiLCJsaXN0ZW4iLCIjbGlzdGVuIiwib25MaXN0ZW4iLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJtZXRhZGF0YSIsImUiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJmb3JFYWNoIiwiYWN0aW9uIiwidHlwZSIsInNldCIsImNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwic3RyZWFtaW5nIiwiaGFzIiwiYWRkIiwiZXJyb3IiLCJvZmZFdmVudHMiLCIjb2ZmRXZlbnRzIiwib2ZmIiwibG9hZEFsbCIsImNvbGxlY3Rpb24iLCJsZW5ndGgiLCJzZXRFbnRyaWVzIiwicmVhZHkiLCIjb25MaXN0ZW4iLCJzdHJlYW1SZXNwb25zZSIsInN0cmluZ0NvbnRlbnQiLCJnZXREYXRhIiwiZ2V0UHJvcGVydGllcyIsInNlbmRNZXNzYWdlIiwiZmV0Y2hpbmciLCJ1cmkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJNZXNzYWdlIiwiY2hhdElkIiwicm9sZSIsIm9uRmluaXNoIiwicmVzb2x2ZSIsIm9uRXJyb3IiLCJzdHJlYW0iLCJ0aGVuIiwiY2F0Y2giLCJzZW5kQXVkaW8iLCJtZXNzYWdlIiwiYXVkaW8iLCJGaWxlIiwibXVsdGlwYXJ0Iiwic2V0VGltZW91dCIsInRyYW5zY3JpYmUiLCJwb3N0IiwiZ2V0TWVzc2FnZSIsImNyZWF0ZSIsIm5hbWUiLCJwcm9qZWN0SWQiLCJ1aWQiLCJwcm9tcHQiLCJsYW5ndWFnZSIsImRlZmF1bHQiLCJtYXAiLCJNYXAiLCJwdXNoIiwibG9jYWxGaWVsZHMiLCJwYXJzZWRDb250ZW50IiwicmVhY3RpdmVQcm9wcyJdLCJzb3VyY2VzIjpbIi9jaGF0cy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NoYXRzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvY2hhdC50cyIsIi9tZXNzYWdlLnRzIiwiL2NoYXRzL2l0ZW0vaW5kZXgudHMiLCIvY2hhdHMvaXRlbS9wcm92aWRlci50cyIsIi9jaGF0cy9tZXNzYWdlcy9pbmRleC50cyIsIi9jaGF0cy9tZXNzYWdlcy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLElBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFBT0ksS0FBTSxTQUFRTCxNQUFBLENBQUFNLGFBQW9CO1lBQ3pELENBQUFDLEdB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VUMxQ0QsSUFBQW5ELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxQyxLQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO1VBR0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBR08sV0FUUDs7VUFTaUIsTUFBTytGLE9BQVEsU0FBUWhHLE1BQUEsQ0FBQU0sYUFBdUI7WUFLOUQsQ0FBQUMsR0FBSTtZQUNKLENBQUFtQyxRQUFTLEdBQVcsRUFBRTtZQUN0QjtZQUNBLENBQUFhLElBQUs7WUFHTHFFLFdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUV2QixDQUFBQyxhQUFjO1lBRWQsSUFBSW5GLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQTRCLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUVBOUQsWUFBWTtjQUFFb0MsRUFBRSxHQUFHQyxTQUFTO2NBQUVVLElBQUk7Y0FBRSxHQUFHVDtZQUFLLENBQTBCO2NBQ3JFLEtBQUssQ0FBQztnQkFDTEYsRUFBRTtnQkFDRixHQUFHRSxLQUFLO2dCQUNSRSxVQUFVLEVBQUUsQ0FDWCxJQUFJLEVBQ0osUUFBUSxFQUNSLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFNBQVMsRUFDVCxPQUFPLEVBQ1AsV0FBVyxFQUNYLFdBQVcsRUFDWCxTQUFTO2VBRVYsQ0FBQztjQUVGLElBQUksQ0FBQyxDQUFBTyxJQUFLLEdBQUdBLElBQUk7Y0FDakIsSUFBSSxDQUFDWCxFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFLEdBQUcsSUFBQU4sS0FBQSxDQUFBa0IsRUFBSSxHQUFFO2NBQ3pCLE1BQU1qRCxHQUFHLEdBQUcsSUFBSUwsSUFBQSxDQUFBTyxHQUFHLENBQUNMLFFBQUEsQ0FBQU0sU0FBUyxDQUFDSCxHQUFHLENBQUM7Y0FDbEMsSUFBSSxDQUFDLENBQUFBLEdBQUksR0FBR0EsR0FBRztjQUVmLElBQUksQ0FBQyxDQUFBK0QsSUFBSyxHQUFHeEIsS0FBSyxDQUFDd0IsSUFBSSxJQUFJLFNBQVM7Y0FFcEMsSUFBSSxDQUFDd0QsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7Y0FDaEMsS0FBSyxDQUFDekMsS0FBSyxHQUFHLElBQUk7WUFDbkI7O1VBRUQ7VUFBQTNELE9BQUEsQ0FBQXNFLE9BQUEsR0FBQUEsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==