System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.4/entities", "@aimpact/chat-api@1.0.1/provider", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Audio, Chats, Chat, Message, KnowledgeBoxes, KnowledgeBox, __beyond_pkg, hmr;
  _export({
    Audio: void 0,
    Chats: void 0,
    Chat: void 0,
    Message: void 0,
    KnowledgeBoxes: void 0,
    KnowledgeBox: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive114Entities) {
      dependency_1 = _beyondJsReactive114Entities;
    }, function (_aimpactChatApi101Provider) {
      dependency_2 = _aimpactChatApi101Provider;
    }, function (_aimpactChatSdk100Api) {
      dependency_3 = _aimpactChatSdk100Api;
    }, function (_aimpactAilearnApp100Config) {
      dependency_4 = _aimpactAilearnApp100Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_5 = _aimpactChatSdk100Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.0/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-api/provider', dependency_2], ['@aimpact/chat-sdk/api', dependency_3], ['@aimpact/chat-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./audio/collection
      **********************************/
      ims.set('./audio/collection', {
        hash: 742938737,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Audios = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _item = require("./item");
          class Audios extends _entities.Collection {
            item = _item.Audio;
            storeName = 'AudioRecords';
            db = 'chat-api';
            constructor() {
              super();
              this.provider = new _provider.AudioProvider();
              this.init();
            }
          }
          exports.Audios = Audios;
        }
      });

      /****************************
      INTERNAL MODULE: ./audio/item
      ****************************/

      ims.set('./audio/item', {
        hash: 1404616158,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Audio = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          /*bundle*/ // AudioItem

          class Audio extends _entities.Item {
            properties = ['id', 'userId', 'category'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'AudioRecords',
                provider: _provider.AudioProvider
              });
            }
          }
          exports.Audio = Audio;
        }
      });

      /*********************************
      INTERNAL MODULE: ./chat/collection
      *********************************/

      ims.set('./chat/collection', {
        hash: 3111243484,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chats = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _item = require("./item");
          /*bundle*/
          class Chats extends _entities.Collection {
            item = _item.Chat;
            constructor() {
              super({
                provider: _provider.ChatProvider,
                storeName: 'Chat',
                db: 'chat-api'
              });
            }
          }
          exports.Chats = Chats;
        }
      });

      /***************************
      INTERNAL MODULE: ./chat/item
      ***************************/

      ims.set('./chat/item', {
        hash: 2893782211,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _item = require("./messages/item");
          /*bundle*/ // ChatItem

          class Chat extends _entities.Item {
            properties = ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'usage', 'children', 'knowledgeBoxId', 'metadata'];
            localdb = false;
            #messages = new Map();
            get messages() {
              return [...this.#messages.values()];
            }
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Chat',
                provider: _provider.ChatProvider
              });
            }
            loadAll = async specs => {
              const response = await this.load(specs);
              const messages = new Map();
              if (response.data.messages?.length) {
                response.data.messages.forEach(message => messages.set(message.id, message));
              }
              this.#messages = messages;
            };
            async setAudioMessage({
              user,
              response
            }) {
              const messageItem = new _item.Message();
              const responseItem = new _item.Message();
              await Promise.all([messageItem.isReady, responseItem.isReady]);
              await messageItem.publish(user);
              await responseItem.publish(response);
              const finalData = {
                ...user
              };
              const data = this.#messages.get('temporal');
              this.#messages.set(messageItem.id, {
                ...finalData,
                id: messageItem.id,
                audio: data.audio
              });
              this.#messages.delete('temporal');
              this.#messages.set(responseItem.id, {
                ...response,
                id: responseItem.id
              });
              this.triggerEvent();
              return responseItem;
            }
            async sendAudio(audio, transcription = undefined) {
              const item = new _item.Message();
              await item.isReady;
              item.setOffline(true);
              const specs = {
                id: 'temporal',
                chatId: this.id,
                type: 'audio',
                audio,
                role: 'user',
                timestamp: Date.now()
              };
              if (transcription) {
                specs.content = transcription;
              }
              this.#messages.set('temporal', specs);
              this.triggerEvent();
            }
            async sendMessage(content) {
              try {
                this.fetching = true;
                const item = new _item.Message();
                let response = new _item.Message();
                performance.mark('previous.create.messages');
                await Promise.all([item.isReady, response.isReady]);
                performance.mark('after.create.messages');
                this.#messages.set(item.id, {
                  id: item.id,
                  chatId: this.id,
                  content,
                  role: 'user',
                  timestamp: Date.now()
                });
                this.#messages.set(response.id, {
                  id: response.id,
                  chatId: this.id,
                  content: '',
                  role: 'system'
                });
                const onListen = () => {
                  response.content = item.response;
                  this.#messages.get(response.id).content = response.content;
                };
                const onEnd = () => {
                  this.trigger('response.finished');
                  item.off('content.updated', onListen);
                };
                item.on('content.updated', onListen);
                item.on('response.finished', onEnd);
                performance.mark('previous.publish.messages');
                item.publish({
                  chatId: this.id,
                  content,
                  role: 'user',
                  timestamp: Date.now()
                });
                performance.mark('after.publish.messages');
                performance.measure('create.messages', 'previous.create.messages', 'after.create.messages');
                performance.measure('publish.messages', 'previous.publish.messages', 'after.publish.messages');
                response.setOffline(true);
                response.role = 'system';
                response.publishSystem();
                this.triggerEvent();
                return {
                  message: item,
                  response
                };
                this.triggerEvent();
                // return { response: response.data.response, message: response.data.message };
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            getMessage(id) {
              return this.#messages.get(id);
            }
          }
          exports.Chat = Chat;
        }
      });

      /******************************************
      INTERNAL MODULE: ./chat/messages/collection
      ******************************************/

      ims.set('./chat/messages/collection', {
        hash: 2216528992,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          class Messages extends _entities.Collection {
            item = _item.Message;
            storeName = 'Messages';
            db = 'chat-api';
            constructor() {
              super();
              this.init();
            }
          }
          exports.Messages = Messages;
        }
      });

      /*************************************
      INTERNAL MODULE: ./chat/messages/index
      *************************************/

      ims.set('./chat/messages/index', {
        hash: 688767946,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _item = require("./item");
          class Messages extends _entities.Collection {
            item = _item.Message;
            constructor() {
              super({
                provider: _provider.MessageProvider,
                storeName: 'Messages',
                db: 'chat-api'
              });
            }
          }
          exports.Messages = Messages;
        }
      });

      /************************************
      INTERNAL MODULE: ./chat/messages/item
      ************************************/

      ims.set('./chat/messages/item', {
        hash: 179838765,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _api = require("@aimpact/chat-sdk/api");
          var _config = require("@aimpact/chat-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/ // ChatItem

          class Message extends _entities.Item {
            properties = ['id', 'chatId', 'userId', 'role', 'content', 'usage', 'timestamp'];
            #api;
            #response = '';
            get response() {
              return this.#response;
            }
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Messages',
                provider: _provider.MessageProvider
              });
              const api = new _api.Api(_config.default.params.apis.chat);
              this.#api = api;
              this.reactiveProps(['autoplay']);
              this.#listen();
            }
            #onListen = () => {
              this.#response = this.#api.streamResponse;
              this.trigger('content.updated');
            };
            #listen = () => {
              this.#api.on('stream.response', this.#onListen);
            };
            #offEvents = () => {
              this.#api.off('stream.response', this.#onListen);
            };
            //@ts-ignore
            async publish(specs) {
              try {
                this.setOffline(true);
                const token = await _session.sessionWrapper.user.firebaseToken;
                this.#api.bearer(token).stream(`/conversations/${specs.chatId}/messages`, {
                  message: specs.content
                }).then(response => {
                  this.trigger('response.finished');
                  this.#offEvents();
                });
                super.publish();
              } catch (e) {
                console.trace(e);
              }
            }
            async publishSystem() {
              this.setOffline(true);
              super.publish();
            }
          }
          exports.Message = Message;
        }
      });

      /********************************************
      INTERNAL MODULE: ./knowledge-boxes/collection
      ********************************************/

      ims.set('./knowledge-boxes/collection', {
        hash: 642003305,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBoxes = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _item = require("./item");
          /*bundle*/
          class KnowledgeBoxes extends _entities.Collection {
            item = _item.KnowledgeBox;
            constructor() {
              super({
                provider: _provider.KnowledgeBoxProvider,
                storeName: 'KnowledgeBoxes',
                db: 'chat-api'
              });
            }
          }
          exports.KnowledgeBoxes = KnowledgeBoxes;
        }
      });

      /**************************************
      INTERNAL MODULE: ./knowledge-boxes/item
      **************************************/

      ims.set('./knowledge-boxes/item', {
        hash: 887262650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBox = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          /*bundle*/ // KnowledgeBox

          class KnowledgeBox extends _entities.Item {
            properties = ['id', 'path', 'identifier', 'documents', 'type'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'KnowledgeBoxes',
                provider: _provider.KnowledgeBoxProvider
              });
            }
          }
          exports.KnowledgeBox = KnowledgeBox;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./audio/item",
        "from": "Audio",
        "name": "Audio"
      }, {
        "im": "./chat/collection",
        "from": "Chats",
        "name": "Chats"
      }, {
        "im": "./chat/item",
        "from": "Chat",
        "name": "Chat"
      }, {
        "im": "./chat/messages/item",
        "from": "Message",
        "name": "Message"
      }, {
        "im": "./knowledge-boxes/collection",
        "from": "KnowledgeBoxes",
        "name": "KnowledgeBoxes"
      }, {
        "im": "./knowledge-boxes/item",
        "from": "KnowledgeBox",
        "name": "KnowledgeBox"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Audio') && _export("Audio", Audio = require ? require('./audio/item').Audio : value);
        (require || prop === 'Chats') && _export("Chats", Chats = require ? require('./chat/collection').Chats : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./chat/item').Chat : value);
        (require || prop === 'Message') && _export("Message", Message = require ? require('./chat/messages/item').Message : value);
        (require || prop === 'KnowledgeBoxes') && _export("KnowledgeBoxes", KnowledgeBoxes = require ? require('./knowledge-boxes/collection').KnowledgeBoxes : value);
        (require || prop === 'KnowledgeBox') && _export("KnowledgeBox", KnowledgeBox = require ? require('./knowledge-boxes/item').KnowledgeBox : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBQUUsVUFBVTtnQkFBRUQsU0FBUyxFQUFFLGdCQUFnQjtnQkFBRUcsUUFBUSxFQUFFa0Y7Y0FBb0IsQ0FBRSxDQUFDO1lBQzNGOztVQUNBL0UiLCJuYW1lcyI6WyJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsImxvY2FsZGIiLCJNYXAiLCJtZXNzYWdlcyIsInZhbHVlcyIsImxvYWRBbGwiLCJzcGVjcyIsInJlc3BvbnNlIiwibG9hZCIsImRhdGEiLCJsZW5ndGgiLCJmb3JFYWNoIiwibWVzc2FnZSIsInNldCIsInNldEF1ZGlvTWVzc2FnZSIsInVzZXIiLCJtZXNzYWdlSXRlbSIsIk1lc3NhZ2UiLCJyZXNwb25zZUl0ZW0iLCJQcm9taXNlIiwiYWxsIiwiaXNSZWFkeSIsInB1Ymxpc2giLCJmaW5hbERhdGEiLCJnZXQiLCJhdWRpbyIsImRlbGV0ZSIsInRyaWdnZXJFdmVudCIsInNlbmRBdWRpbyIsInRyYW5zY3JpcHRpb24iLCJzZXRPZmZsaW5lIiwiY2hhdElkIiwidHlwZSIsInJvbGUiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiY29udGVudCIsInNlbmRNZXNzYWdlIiwiZmV0Y2hpbmciLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJvbkxpc3RlbiIsIm9uRW5kIiwidHJpZ2dlciIsIm9mZiIsIm9uIiwibWVhc3VyZSIsInB1Ymxpc2hTeXN0ZW0iLCJlIiwiY29uc29sZSIsImVycm9yIiwiZ2V0TWVzc2FnZSIsIk1lc3NhZ2VzIiwiTWVzc2FnZVByb3ZpZGVyIiwiYXBpIiwiQXBpIiwiY29uZmlnIiwicGFyYW1zIiwiYXBpcyIsImNoYXQiLCJyZWFjdGl2ZVByb3BzIiwic3RyZWFtUmVzcG9uc2UiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0cmVhbSIsInRoZW4iLCJ0cmFjZSIsIktub3dsZWRnZUJveGVzIiwiS25vd2xlZGdlQm94IiwiS25vd2xlZGdlQm94UHJvdmlkZXIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImF1ZGlvL2NvbGxlY3Rpb24udHMiLCJhdWRpby9pdGVtLnRzIiwiY2hhdC9jb2xsZWN0aW9uLnRzIiwiY2hhdC9pdGVtLnRzIiwiY2hhdC9tZXNzYWdlcy9jb2xsZWN0aW9uLnRzIiwiY2hhdC9tZXNzYWdlcy9pbmRleC50cyIsImNoYXQvbWVzc2FnZXMvaXRlbS50cyIsImtub3dsZWRnZS1ib3hlcy9jb2xsZWN0aW9uLnRzIiwia25vd2xlZGdlLWJveGVzL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19