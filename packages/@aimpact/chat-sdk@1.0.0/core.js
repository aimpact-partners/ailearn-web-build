System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.3/entities", "@aimpact/chat-api@1.0.1/provider", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/session"], function (_export, _context) {
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
    }, function (_beyondJsReactive113Entities) {
      dependency_1 = _beyondJsReactive113Entities;
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
        hash: 1118204647,
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
                await Promise.all([item.isReady, response.isReady]);
                // item.setOffline(true);
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
                this.triggerEvent();
                const onListen = () => {
                  response.content = item.response;
                  //updating plaincontent message
                  this.#messages.get(response.id).content = response.content;
                };
                item.on('content.updated', onListen);
                item.publish({
                  chatId: this.id,
                  content,
                  role: 'user',
                  timestamp: Date.now()
                }).then(response => {
                  //console.log(600, 'terminamos');
                });
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
        hash: 768281253,
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
              this.#api.on('stream.response', () => {
                this.#response = this.#api.streamResponse;
                this.trigger('content.updated');
              });
              this.reactiveProps(['autoplay']);
            }
            //@ts-ignore
            async publish(specs) {
              try {
                this.setOffline(true);
                const token = await _session.sessionWrapper.user.firebaseToken;
                this.#api.bearer(token).stream(`/conversations/${specs.chatId}/messages`, {
                  message: specs.content
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU93RSxZQUFhLFNBQVF2RSxjQUFtQjtZQUNyREMsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQztZQUN4RU4sWUFBWTtjQUFFTyxFQUFFLEdBQUdDO1lBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFRCxFQUFFO2dCQUFFUixFQUFFLEVBQUUsVUFBVTtnQkFBRUQsU0FBUyxFQUFFLGdCQUFnQjtnQkFBRUcsUUFBUSxFQUFFNEU7Y0FBb0IsQ0FBRSxDQUFDO1lBQzNGOztVQUNBekUiLCJuYW1lcyI6WyJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsIk1hcCIsIm1lc3NhZ2VzIiwidmFsdWVzIiwibG9hZEFsbCIsInNwZWNzIiwicmVzcG9uc2UiLCJsb2FkIiwiZGF0YSIsImxlbmd0aCIsImZvckVhY2giLCJtZXNzYWdlIiwic2V0Iiwic2V0QXVkaW9NZXNzYWdlIiwidXNlciIsIm1lc3NhZ2VJdGVtIiwiTWVzc2FnZSIsInJlc3BvbnNlSXRlbSIsIlByb21pc2UiLCJhbGwiLCJpc1JlYWR5IiwicHVibGlzaCIsImZpbmFsRGF0YSIsImdldCIsImF1ZGlvIiwiZGVsZXRlIiwidHJpZ2dlckV2ZW50Iiwic2VuZEF1ZGlvIiwidHJhbnNjcmlwdGlvbiIsInNldE9mZmxpbmUiLCJjaGF0SWQiLCJ0eXBlIiwicm9sZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJjb250ZW50Iiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsIm9uTGlzdGVuIiwib24iLCJ0aGVuIiwicHVibGlzaFN5c3RlbSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRNZXNzYWdlIiwiTWVzc2FnZXMiLCJNZXNzYWdlUHJvdmlkZXIiLCJhcGkiLCJBcGkiLCJjb25maWciLCJwYXJhbXMiLCJhcGlzIiwiY2hhdCIsInN0cmVhbVJlc3BvbnNlIiwidHJpZ2dlciIsInJlYWN0aXZlUHJvcHMiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0cmVhbSIsInRyYWNlIiwiS25vd2xlZGdlQm94ZXMiLCJLbm93bGVkZ2VCb3giLCJLbm93bGVkZ2VCb3hQcm92aWRlciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYXVkaW8vY29sbGVjdGlvbi50cyIsImF1ZGlvL2l0ZW0udHMiLCJjaGF0L2NvbGxlY3Rpb24udHMiLCJjaGF0L2l0ZW0udHMiLCJjaGF0L21lc3NhZ2VzL2NvbGxlY3Rpb24udHMiLCJjaGF0L21lc3NhZ2VzL2luZGV4LnRzIiwiY2hhdC9tZXNzYWdlcy9pdGVtLnRzIiwia25vd2xlZGdlLWJveGVzL2NvbGxlY3Rpb24udHMiLCJrbm93bGVkZ2UtYm94ZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=