System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/chat-sdk@1.3.0/startup", "@beyond-js/reactive@1.2.0/entities", "@beyond-js/reactive@1.2.0/database", "@beyond-js/kernel@0.1.9/core", "uuid@10.0.0", "@aimpact/chat-sdk@1.3.0/config"], function (_export, _context) {
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
    }, function (_aimpactChatSdk130Session) {
      dependency_3 = _aimpactChatSdk130Session;
    }, function (_aimpactChatSdk130Startup) {
      dependency_4 = _aimpactChatSdk130Startup;
    }, function (_beyondJsReactive120Entities) {
      dependency_5 = _beyondJsReactive120Entities;
    }, function (_beyondJsReactive120Database) {
      dependency_6 = _beyondJsReactive120Database;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
    }, function (_aimpactChatSdk130Config) {
      dependency_9 = _aimpactChatSdk130Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.2"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.0"], ["wavesurfer.js", "7.8.6"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.11"], ["@types/react-dom", "18.3.0"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
        hash: 2493730348,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsInAiLCJBcGkiLCJzZGtDb25maWciLCJpdGVtcyIsImxvYWQiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImZpcmViYXNlVG9rZW4iLCJiZWFyZXIiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0IiwiRXJyb3IiLCJhZGRJdGVtIiwiaXRlbSIsInVuc2hpZnQiLCJ0cmlnZ2VyRXZlbnQiLCJleHBvcnRzIiwiQ2hhdENvbGxlY3Rpb25Qcm92aWRlciIsInBhcmVudCIsImxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2RhdGFiYXNlIiwiX2NvcmUiLCJfZW50aXRpZXMiLCJfaXRlbSIsIl9tZXNzYWdlcyIsIl9wcm92aWRlciIsIl91dWlkIiwiQ2hhdCIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwibG9jYWxkYiIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImlkIiwidW5kZWZpbmVkIiwiZGIiLCJzdG9yZU5hbWUiLCJwcm92aWRlciIsIkNoYXRQcm92aWRlciIsIk1lc3NhZ2VzIiwib24iLCJnbG9iYWxUaGlzIiwiY2hhdCIsInY0IiwibGlzdGVuIiwiI2xpc3RlbiIsIm9uTGlzdGVuIiwiYWN0aW9ucyIsImZvckVhY2giLCJhY3Rpb24iLCJKU09OIiwicGFyc2UiLCJ0eXBlIiwic2V0IiwiY29udGVudCIsInRyYW5zY3JpcHRpb24iLCJzdHJlYW1pbmciLCJlIiwiY29uc29sZSIsImxvZyIsIm9mZkV2ZW50cyIsIiNvZmZFdmVudHMiLCJvZmYiLCJsb2FkQWxsIiwic3BlY3MiLCJpc1JlYWR5IiwiY29sbGVjdGlvbiIsImxlbmd0aCIsInNldEVudHJpZXMiLCIjb25MaXN0ZW4iLCJzdHJlYW1SZXNwb25zZSIsInN0cmluZ0NvbnRlbnQiLCJ0cmlnZ2VyIiwiZ2V0RGF0YSIsImdldFByb3BlcnRpZXMiLCJzZW5kTWVzc2FnZSIsImZldGNoaW5nIiwidXJpIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiTWVzc2FnZSIsImNoYXRJZCIsInJvbGUiLCJvbkZpbmlzaCIsInJlc29sdmUiLCJzYXZlTG9jYWxseSIsIm9uRXJyb3IiLCJlcnJvciIsImFkZCIsInN0cmVhbSIsInRoZW4iLCJjYXRjaCIsInNlbmRBdWRpbyIsIm1lc3NhZ2UiLCJhdWRpbyIsIm11bHRpcGFydCIsInNldFRpbWVvdXQiLCJ0cmFuc2NyaWJlIiwicG9zdCIsImdldE1lc3NhZ2UiLCJleGlzdGluZ0RhdGEiLCJEQk1hbmFnZXIiLCJ0YWJsZSIsInVwZGF0ZSIsInB1dCIsImxvYWRMb2NhbGx5IiwiY3JlYXRlIiwibmFtZSIsInByb2plY3RJZCIsInVpZCIsIm1ldGFkYXRhIiwicHJvbXB0IiwibGFuZ3VhZ2UiLCJkZWZhdWx0IiwibWFwIiwiTWFwIiwicHVzaCIsImxvY2FsRmllbGRzIiwicGFyc2VkQ29udGVudCIsInJlYWN0aXZlUHJvcHMiLCJyZWFkeSJdLCJzb3VyY2VzIjpbIi9jaGF0cy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NoYXRzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvY2hhdC50cyIsIi9tZXNzYWdlLnRzIiwiL2NoYXRzL2l0ZW0vaW5kZXgudHMiLCIvY2hhdHMvaXRlbS9wcm92aWRlci50cyIsIi9jaGF0cy9tZXNzYWdlcy9pbmRleC50cyIsIi9jaGF0cy9tZXNzYWdlcy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUs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