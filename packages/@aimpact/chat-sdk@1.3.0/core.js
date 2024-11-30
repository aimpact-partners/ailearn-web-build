System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/chat-sdk@1.3.0/startup", "@beyond-js/reactive@1.1.12/entities", "@beyond-js/reactive@1.1.12/database", "@beyond-js/kernel@0.1.9/core", "uuid@10.0.0", "@aimpact/chat-sdk@1.3.0/config"], function (_export, _context) {
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
    }, function (_beyondJsReactive1112Model) {
      dependency_1 = _beyondJsReactive1112Model;
    }, function (_aimpactHttpSuite001Api) {
      dependency_2 = _aimpactHttpSuite001Api;
    }, function (_aimpactChatSdk130Session) {
      dependency_3 = _aimpactChatSdk130Session;
    }, function (_aimpactChatSdk130Startup) {
      dependency_4 = _aimpactChatSdk130Startup;
    }, function (_beyondJsReactive1112Entities) {
      dependency_5 = _beyondJsReactive1112Entities;
    }, function (_beyondJsReactive1112Database) {
      dependency_6 = _beyondJsReactive1112Database;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
    }, function (_aimpactChatSdk130Config) {
      dependency_9 = _aimpactChatSdk130Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/ailearn-app", "0.2.12"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.3.0/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/http-suite/api', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@aimpact/chat-sdk/startup', dependency_4], ['@beyond-js/reactive/entities', dependency_5], ['@beyond-js/reactive/database', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['uuid', dependency_8], ['@aimpact/chat-sdk/config', dependency_9]]);
      ims = new Map();
      /****************************************
      INTERNAL MODULE: ./chats/collection/index
      ****************************************/
      ims.set('./chats/collection/index', {
        hash: 1392919199,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chats = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          /*bundle*/
          class Chats extends _model.ReactiveModel {
            #api;
            constructor(p) {
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
        hash: 525430157,
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
        hash: 867918171,
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
        hash: 843583507,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _database = require("@beyond-js/reactive/database");
          var _core = require("@beyond-js/kernel/core");
          var _entities = require("@beyond-js/reactive/entities");
          var _api = require("@aimpact/http-suite/api");
          var _item = require("../messages/item");
          var _messages = require("../messages");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          var _provider = require("./provider");
          var _uuid = require("uuid");
          /*bundle*/ // ChatItem

          class Chat extends _entities.Item {
            #api;
            get api() {
              return this.#api;
            }
            properties = ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'language', 'usage', 'children', 'knowledgeBoxId', 'user', 'metadata'];
            localdb = false;
            #currentMessage;
            #response;
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
              this.#messages = new _messages.Messages();
              this.#messages.on('new.message', () => this.triggerEvent('new.message'));
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
              await this.isReady;
              const response = await this.load(specs);
              const collection = this.#messages;
              collection.on('change', this.triggerEvent);
              if (response.data.messages?.length) {
                await collection.setEntries(response.data.messages);
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
                const item = new _item.Message({
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
                this.#response = new _item.Message({
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
                const item = new _item.Message({
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
                this.#response = new _item.Message({
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
            async loadLocally(chatId) {
              try {
                const data = await _database.DBManager.db.table('Chat').get(chatId);
                return data;
              } catch (error) {
                console.error('Error loading locally:', error);
              }
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
        hash: 3635996534,
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
        hash: 1199097021,
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
        hash: 4035288771,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _model = require("@beyond-js/reactive/model");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsInAiLCJBcGkiLCJzZGtDb25maWciLCJpdGVtcyIsImxvYWQiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImZpcmViYXNlVG9rZW4iLCJiZWFyZXIiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0IiwiRXJyb3IiLCJhZGRJdGVtIiwiaXRlbSIsInVuc2hpZnQiLCJ0cmlnZ2VyRXZlbnQiLCJleHBvcnRzIiwiQ2hhdENvbGxlY3Rpb25Qcm92aWRlciIsInBhcmVudCIsImxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2RhdGFiYXNlIiwiX2NvcmUiLCJfZW50aXRpZXMiLCJfaXRlbSIsIl9tZXNzYWdlcyIsIl9wcm92aWRlciIsIl91dWlkIiwiQ2hhdCIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwibG9jYWxkYiIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImlkIiwidW5kZWZpbmVkIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIkNoYXRQcm92aWRlciIsIk1lc3NhZ2VzIiwib24iLCJnbG9iYWxUaGlzIiwiY2hhdCIsInY0IiwibGlzdGVuIiwiI2xpc3RlbiIsIm9uTGlzdGVuIiwiYWN0aW9ucyIsImZvckVhY2giLCJhY3Rpb24iLCJKU09OIiwicGFyc2UiLCJ0eXBlIiwic2V0IiwiY29udGVudCIsInRyYW5zY3JpcHRpb24iLCJzdHJlYW1pbmciLCJoYXMiLCJhZGQiLCJlIiwiY29uc29sZSIsImxvZyIsIm9mZkV2ZW50cyIsIiNvZmZFdmVudHMiLCJvZmYiLCJsb2FkQWxsIiwic3BlY3MiLCJpc1JlYWR5IiwiY29sbGVjdGlvbiIsImxlbmd0aCIsInNldEVudHJpZXMiLCIjb25MaXN0ZW4iLCJzdHJlYW1SZXNwb25zZSIsInN0cmluZ0NvbnRlbnQiLCJ0cmlnZ2VyIiwiZ2V0RGF0YSIsImdldFByb3BlcnRpZXMiLCJzZW5kTWVzc2FnZSIsImZldGNoaW5nIiwidXJpIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiTWVzc2FnZSIsImNoYXRJZCIsInJvbGUiLCJvbkZpbmlzaCIsInJlc29sdmUiLCJvbkVycm9yIiwiZXJyb3IiLCJzdHJlYW0iLCJ0aGVuIiwiY2F0Y2giLCJzZW5kQXVkaW8iLCJtZXNzYWdlIiwiYXVkaW8iLCJtdWx0aXBhcnQiLCJzZXRUaW1lb3V0IiwidHJhbnNjcmliZSIsInBvc3QiLCJnZXRNZXNzYWdlIiwibG9hZExvY2FsbHkiLCJEQk1hbmFnZXIiLCJ0YWJsZSIsImNyZWF0ZSIsIm5hbWUiLCJwcm9qZWN0SWQiLCJ1aWQiLCJtZXRhZGF0YSIsInByb21wdCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsIm1hcCIsIk1hcCIsInB1c2giLCJsb2NhbEZpZWxkcyIsInBhcnNlZENvbnRlbnQiLCJyZWFjdGl2ZVByb3BzIiwicmVhZHkiXSwic291cmNlcyI6WyIvY2hhdHMvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGF0cy9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0cy9pdGVtL2luZGV4LnRzIiwiL2NoYXRzL2l0ZW0vcHJvdmlkZXIudHMiLCIvY2hhdHMvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdHMvbWVzc2FnZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLElBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgs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