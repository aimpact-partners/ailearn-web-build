System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@beyond-js/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.4.4/session", "@aimpact/chat-sdk@1.4.4/startup", "@beyond-js/reactive@2.0.4/entities/collection", "@beyond-js/reactive@2.0.4/entities/item", "@beyond-js/kernel@0.1.12/core", "uuid@11.1.0", "@aimpact/chat-sdk@1.4.4/config"], function (_export, _context) {
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
    }, function (_beyondJsReactive204Model) {
      dependency_1 = _beyondJsReactive204Model;
    }, function (_beyondJsHttpSuite001Api) {
      dependency_2 = _beyondJsHttpSuite001Api;
    }, function (_aimpactChatSdk144Session) {
      dependency_3 = _aimpactChatSdk144Session;
    }, function (_aimpactChatSdk144Startup) {
      dependency_4 = _aimpactChatSdk144Startup;
    }, function (_beyondJsReactive204EntitiesCollection) {
      dependency_5 = _beyondJsReactive204EntitiesCollection;
    }, function (_beyondJsReactive204EntitiesItem) {
      dependency_6 = _beyondJsReactive204EntitiesItem;
    }, function (_beyondJsKernel0112Core) {
      dependency_7 = _beyondJsKernel0112Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
    }, function (_aimpactChatSdk144Config) {
      dependency_9 = _aimpactChatSdk144Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "2.0.4"], ["@beyond-js/http-suite", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.4/core"
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
        hash: 2875866554,
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
              globalThis.chat = this;
              if (!id) this.id = (0, _uuid.v4)();
              this.#listen();
              globalThis.chat = this;
              this.#messages = new _messages.Messages({
                chatId: this.id
              });
              this.#messages.on('new.message', () => {
                this.trigger('new.message');
              });
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
        hash: 1230943583,
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
            #id;
            constructor({
              chatId
            }) {
              super();
              this.#id = chatId;
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
            addTestMessage() {
              const message = new _item.Message({
                chatId: this.#id,
                role: 'system',
                streaming: true
              });
              this.add(message);
              const baseText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
              const repeatedText = baseText.repeat(5);
              const words = repeatedText.split(' ');
              let currentContent = '';
              let index = 0;
              const interval = setInterval(() => {
                if (index >= words.length) {
                  clearInterval(interval);
                  return;
                }
                currentContent += words[index] + ' ';
                message.set({
                  content: currentContent
                });
                index++;
              }, 100); // Add a new word every 100ms
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
        hash: 3672330668,
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
            #previous;
            get previous() {
              return this.#previous;
            }
            set previous(value) {
              if (value === this.#previous) return;
              this.#previous = value;
              this.trigger('previous.changed');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsIml0ZW1zIiwibG9hZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsImFkZEl0ZW0iLCJpdGVtIiwidW5zaGlmdCIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJDaGF0Q29sbGVjdGlvblByb3ZpZGVyIiwicGFyZW50IiwibGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9jb3JlIiwiX2l0ZW0yIiwiX21lc3NhZ2VzIiwiX3Byb3ZpZGVyIiwiX3V1aWQiLCJDaGF0IiwiSXRlbSIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImlkIiwidW5kZWZpbmVkIiwic3BlY3MiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJnbG9iYWxUaGlzIiwiY2hhdCIsInY0IiwibGlzdGVuIiwiTWVzc2FnZXMiLCJjaGF0SWQiLCJvbiIsInRyaWdnZXIiLCIjbGlzdGVuIiwib25MaXN0ZW4iLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJtZXRhZGF0YSIsImUiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJmb3JFYWNoIiwiYWN0aW9uIiwidHlwZSIsInNldCIsImNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwic3RyZWFtaW5nIiwiaGFzIiwiYWRkIiwiZXJyb3IiLCJvZmZFdmVudHMiLCIjb2ZmRXZlbnRzIiwib2ZmIiwibG9hZEFsbCIsImNvbGxlY3Rpb24iLCJsZW5ndGgiLCJzZXRFbnRyaWVzIiwicmVhZHkiLCIjb25MaXN0ZW4iLCJzdHJlYW1SZXNwb25zZSIsInN0cmluZ0NvbnRlbnQiLCJnZXREYXRhIiwiZ2V0UHJvcGVydGllcyIsInNlbmRNZXNzYWdlIiwiZmV0Y2hpbmciLCJ1cmkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJNZXNzYWdlIiwicm9sZSIsIm9uRmluaXNoIiwicmVzb2x2ZSIsIm9uRXJyb3IiLCJzdHJlYW0iLCJ0aGVuIiwiY2F0Y2giLCJzZW5kQXVkaW8iLCJtZXNzYWdlIiwiYXVkaW8iLCJGaWxlIiwibXVsdGlwYXJ0Iiwic2V0VGltZW91dCIsInRyYW5zY3JpYmUiLCJwb3N0IiwiZ2V0TWVzc2FnZSIsImNyZWF0ZSIsIm5hbWUiLCJwcm9qZWN0SWQiLCJ1aWQiLCJwcm9tcHQiLCJsYW5ndWFnZSIsImRlZmF1bHQiLCJtYXAiLCJNYXAiLCJwdXNoIiwiYWRkVGVzdE1lc3NhZ2UiLCJiYXNlVGV4dCIsInJlcGVhdGVkVGV4dCIsInJlcGVhdCIsIndvcmRzIiwic3BsaXQiLCJjdXJyZW50Q29udGVudCIsImluZGV4IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2NhbEZpZWxkcyIsInBhcnNlZENvbnRlbnQiLCJwcmV2aW91cyIsInJlYWN0aXZlUHJvcHMiXSwic291cmNlcyI6WyIvY2hhdHMvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGF0cy9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0cy9pdGVtL2luZGV4LnRzIiwiL2NoYXRzL2l0ZW0vcHJvdmlkZXIudHMiLCIvY2hhdHMvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdHMvbWVzc2FnZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFD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