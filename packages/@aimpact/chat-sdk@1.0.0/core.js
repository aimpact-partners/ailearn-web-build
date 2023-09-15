System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.5/entities", "@aimpact/chat-api@1.0.1/provider", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/session"], function (_export, _context) {
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
    }, function (_beyondJsReactive115Entities) {
      dependency_1 = _beyondJsReactive115Entities;
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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsImxvY2FsZGIiLCJtZXNzYWdlcyIsIk1hcCIsInZhbHVlcyIsImxvYWRBbGwiLCJzcGVjcyIsInJlc3BvbnNlIiwibG9hZCIsImRhdGEiLCJsZW5ndGgiLCJmb3JFYWNoIiwibWVzc2FnZSIsInNldCIsInNldEF1ZGlvTWVzc2FnZSIsInVzZXIiLCJtZXNzYWdlSXRlbSIsIk1lc3NhZ2UiLCJyZXNwb25zZUl0ZW0iLCJQcm9taXNlIiwiYWxsIiwiaXNSZWFkeSIsInB1Ymxpc2giLCJmaW5hbERhdGEiLCJnZXQiLCJhdWRpbyIsImRlbGV0ZSIsInRyaWdnZXJFdmVudCIsInNlbmRBdWRpbyIsInRyYW5zY3JpcHRpb24iLCJzZXRPZmZsaW5lIiwiY2hhdElkIiwidHlwZSIsInJvbGUiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiY29udGVudCIsInNlbmRNZXNzYWdlIiwiZmV0Y2hpbmciLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJvbkxpc3RlbiIsIm9uRW5kIiwidHJpZ2dlciIsIm9mZiIsIm9uIiwibWVhc3VyZSIsInB1Ymxpc2hTeXN0ZW0iLCJlIiwiY29uc29sZSIsImVycm9yIiwiZ2V0TWVzc2FnZSIsIk1lc3NhZ2VzIiwiTWVzc2FnZVByb3ZpZGVyIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsImFwaSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiY2hhdCIsInJlYWN0aXZlUHJvcHMiLCJsaXN0ZW4iLCIjb25MaXN0ZW4iLCJzdHJlYW1SZXNwb25zZSIsIiNsaXN0ZW4iLCJvZmZFdmVudHMiLCIjb2ZmRXZlbnRzIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsImZpcmViYXNlVG9rZW4iLCJiZWFyZXIiLCJzdHJlYW0iLCJ0aGVuIiwidHJhY2UiLCJLbm93bGVkZ2VCb3hlcyIsIktub3dsZWRnZUJveCIsIktub3dsZWRnZUJveFByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL2F1ZGlvL2NvbGxlY3Rpb24udHMiLCIvYXVkaW8vaXRlbS50cyIsIi9jaGF0L2NvbGxlY3Rpb24udHMiLCIvY2hhdC9pdGVtLnRzIiwiL2NoYXQvbWVzc2FnZXMvY29sbGVjdGlvbi50cyIsIi9jaGF0L21lc3NhZ2VzL2luZGV4LnRzIiwiL2NoYXQvbWVzc2FnZXMvaXRlbS50cyIsIi9rbm93bGVkZ2UtYm94ZXMvY29sbGVjdGlvbi50cyIsIi9rbm93bGVkZ2UtYm94ZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFNTSxNQUFPRyxNQUFPLFNBQVFKLFNBQUEsQ0FBQUssVUFBVTtZQUNyQ0MsSUFBSSxHQUFHSCxLQUFBLENBQUFJLEtBQUs7WUFDRkMsU0FBUyxHQUFHLGNBQWM7WUFDMUJDLEVBQUUsR0FBRyxVQUFVO1lBRXpCQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSVQsU0FBQSxDQUFBVSxhQUFhLEVBQUU7Y0FDbkMsSUFBSSxDQUFDQyxJQUFJLEVBQUU7WUFDWjs7VUFDQUMsT0FBQSxDQUFBVixNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJE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