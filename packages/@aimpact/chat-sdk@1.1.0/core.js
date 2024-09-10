System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.1.0/session", "@aimpact/chat-sdk@1.1.0/startup", "@beyond-js/reactive@1.2.0/entities", "@beyond-js/reactive@1.2.0/database", "@beyond-js/kernel@0.1.9/core", "uuid@10.0.0", "@aimpact/chat-sdk@1.1.0/config"], function (_export, _context) {
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
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }, function (_aimpactHttpSuite001Api) {
      dependency_2 = _aimpactHttpSuite001Api;
    }, function (_aimpactChatSdk110Session) {
      dependency_3 = _aimpactChatSdk110Session;
    }, function (_aimpactChatSdk110Startup) {
      dependency_4 = _aimpactChatSdk110Startup;
    }, function (_beyondJsReactive120Entities) {
      dependency_5 = _beyondJsReactive120Entities;
    }, function (_beyondJsReactive120Database) {
      dependency_6 = _beyondJsReactive120Database;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
    }, function (_aimpactChatSdk110Config) {
      dependency_9 = _aimpactChatSdk110Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.1"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.28"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.1.0/core"
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
        hash: 1383264609,
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
                localdb: false,
                provider: _provider.ChatProvider
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
                  this.saveLocally(this.getData());
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
                  streaming: true
                });
                this.#currentMessage = item;
                const onFinish = async response => {
                  await this.#response.set({
                    streaming: false
                  });
                  this.trigger('response.finished');
                  this.#response = undefined;
                  promise.resolve(item);
                  this.saveLocally(this.getData());
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
                this.messages.add(this.#response);
                this.#api.bearer(token).stream(uri, {
                  ...item.getProperties(),
                  multipart: true
                }).then(onFinish).catch(onError);
                globalThis.setTimeout(() => onFinish({}), 3000); // TODO: remove this
                return promise;
              } catch (e) {
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
            async saveLocally(data) {
              try {
                return null;
                const existingData = await _database.DBManager.db.table('Chat').get(data.id);
                if (existingData) {
                  await _database.DBManager.db.table('Chat').update(data.id, data);
                } else {
                  await _database.DBManager.db.table('Chat').put(data);
                }
              } catch (error) {
                console.error('Error saving locally:', error);
              }
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
        hash: 817968774,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsInAiLCJBcGkiLCJzZGtDb25maWciLCJpdGVtcyIsImxvYWQiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImZpcmViYXNlVG9rZW4iLCJiZWFyZXIiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0IiwiRXJyb3IiLCJhZGRJdGVtIiwiaXRlbSIsInVuc2hpZnQiLCJ0cmlnZ2VyRXZlbnQiLCJleHBvcnRzIiwiQ2hhdENvbGxlY3Rpb25Qcm92aWRlciIsInBhcmVudCIsImxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2RhdGFiYXNlIiwiX2NvcmUiLCJfZW50aXRpZXMiLCJfaXRlbSIsIl9tZXNzYWdlcyIsIl9wcm92aWRlciIsIl91dWlkIiwiQ2hhdCIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwibG9jYWxkYiIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImlkIiwidW5kZWZpbmVkIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJNZXNzYWdlcyIsIm9uIiwiZ2xvYmFsVGhpcyIsImNoYXQiLCJ2NCIsImxpc3RlbiIsIiNsaXN0ZW4iLCJvbkxpc3RlbiIsImFjdGlvbnMiLCJmb3JFYWNoIiwiYWN0aW9uIiwiSlNPTiIsInBhcnNlIiwidHlwZSIsInNldCIsImNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwic3RyZWFtaW5nIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvZmZFdmVudHMiLCIjb2ZmRXZlbnRzIiwib2ZmIiwibG9hZEFsbCIsInNwZWNzIiwiaXNSZWFkeSIsImNvbGxlY3Rpb24iLCJsZW5ndGgiLCJzZXRFbnRyaWVzIiwiI29uTGlzdGVuIiwic3RyZWFtUmVzcG9uc2UiLCJzdHJpbmdDb250ZW50IiwidHJpZ2dlciIsImdldERhdGEiLCJnZXRQcm9wZXJ0aWVzIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsInVyaSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIk1lc3NhZ2UiLCJjaGF0SWQiLCJvbkZpbmlzaCIsInJlc29sdmUiLCJzYXZlTG9jYWxseSIsIm9uRXJyb3IiLCJlcnJvciIsInJvbGUiLCJhZGQiLCJzdHJlYW0iLCJ0aGVuIiwiY2F0Y2giLCJzZW5kQXVkaW8iLCJtZXNzYWdlIiwiYXVkaW8iLCJtdWx0aXBhcnQiLCJzZXRUaW1lb3V0IiwidHJhbnNjcmliZSIsInBvc3QiLCJnZXRNZXNzYWdlIiwiZXhpc3RpbmdEYXRhIiwiREJNYW5hZ2VyIiwiZGIiLCJ0YWJsZSIsInVwZGF0ZSIsInB1dCIsImxvYWRMb2NhbGx5IiwiY3JlYXRlIiwibmFtZSIsInByb2plY3RJZCIsInVpZCIsIm1ldGFkYXRhIiwicHJvbXB0IiwibGFuZ3VhZ2UiLCJkZWZhdWx0IiwibWFwIiwiTWFwIiwicHVzaCIsImxvY2FsRmllbGRzIiwicGFyc2VkQ29udGVudCIsInJlYWN0aXZlUHJvcHMiLCJyZWFkeSJdLCJzb3VyY2VzIjpbIi9jaGF0cy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NoYXRzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvY2hhdC50cyIsIi9tZXNzYWdlLnRzIiwiL2NoYXRzL2l0ZW0vaW5kZXgudHMiLCIvY2hhdHMvaXRlbS9wcm92aWRlci50cyIsIi9jaGF0cy9tZXNzYWdlcy9pbmRleC50cyIsIi9jaGF0cy9tZXNzYWdlcy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixP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