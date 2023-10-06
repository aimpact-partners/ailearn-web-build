System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/entities", "@aimpact/chat-api@1.0.1/provider", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@0.0.2/config", "@aimpact/chat-sdk@1.0.0/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Audio, Chats, IChatProperties, Chat, Message, KnowledgeBoxes, KnowledgeBox, __beyond_pkg, hmr;
  _export({
    Audio: void 0,
    Chats: void 0,
    IChatProperties: void 0,
    Chat: void 0,
    Message: void 0,
    KnowledgeBoxes: void 0,
    KnowledgeBox: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive116Entities) {
      dependency_1 = _beyondJsReactive116Entities;
    }, function (_aimpactChatApi101Provider) {
      dependency_2 = _aimpactChatApi101Provider;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk100Api) {
      dependency_4 = _aimpactChatSdk100Api;
    }, function (_aimpactAilearnApp002Config) {
      dependency_5 = _aimpactAilearnApp002Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-api/provider', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@aimpact/chat-sdk/api', dependency_4], ['@aimpact/chat-sdk/config', dependency_5], ['@aimpact/chat-sdk/session', dependency_6]]);
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

      /**************************************
      INTERNAL MODULE: ./chat/interfaces/chat
      **************************************/

      ims.set('./chat/interfaces/chat', {
        hash: 2333923011,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************************
      INTERNAL MODULE: ./chat/interfaces/message
      *****************************************/

      ims.set('./chat/interfaces/message', {
        hash: 3856402657,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************
      INTERNAL MODULE: ./chat/item
      ***************************/

      ims.set('./chat/item', {
        hash: 4206661661,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          var _item = require("./messages/item");
          var _messages = require("./messages");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/ // ChatItem

          class Chat extends _entities.Item {
            properties = ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'language', 'usage', 'children', 'knowledgeBoxId', 'metadata'];
            localdb = false;
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
                provider: _provider.ChatProvider
              });
            }
            loadAll = async specs => {
              const response = await this.load(specs);
              const collection = new _messages.Messages();
              const data = await collection.localLoad({
                conversationId: this.id,
                sortBy: 'timestamp'
              });
              collection.on('change', this.triggerEvent);
              if (response.data.messages?.length) {
                await collection.setEntries(response.data.messages);
              }
              this.#messages = collection;
              window.m = collection;
              window.c = this;
            };
            async setAudioMessage({
              user,
              response
            }) {
              const responseItem = new _item.Message();
              await responseItem.isReady;
              await responseItem.saveMessage(response);
              this.triggerEvent();
              return responseItem;
            }
            #currentAudio;
            /**
             * This method saves the audio locally to be able to reproduce it.
             * @param audio
             * @param transcription
             * @returns
             */
            async saveAudioLocally(audio, transcription = undefined) {
              try {
                const item = new _item.Message();
                await item.isReady;
                item.setOffline(true);
                const specs = {
                  chat: {
                    id: this.id
                  },
                  chatId: this.id,
                  type: 'audio',
                  audio,
                  role: 'user',
                  language: this.language?.default ?? _core.languages.current,
                  timestamp: Date.now()
                };
                if (transcription) {
                  specs.content = transcription;
                }
                this.#currentAudio = item;
                item.publishAudio(specs);
                this.triggerEvent();
                return item;
              } catch (e) {
                console.error(e);
              }
            }
            async sendMessage(content) {
              try {
                this.fetching = true;
                const item = new _item.Message();
                let response = new _item.Message();
                await Promise.all([item.isReady, response.isReady]);
                let published = false;
                const onListen = async () => {
                  if (!published) {
                    published = true;
                    response.publishSystem({
                      offline: true,
                      specs: {
                        chatId: this.id,
                        chat: {
                          id: this.id
                        },
                        content: '',
                        role: 'system',
                        timestamp: Date.now()
                      }
                    });
                  }
                  response.updateContent({
                    content: item.response
                  });
                  response.triggerEvent();
                  this.triggerEvent();
                  //	this.#messages.elements(response.id).content = response.content;
                };

                const onEnd = () => {
                  this.trigger('response.finished');
                  response.publishSystem({
                    specs: {
                      chatId: this.id,
                      chat: {
                        id: this.id
                      },
                      role: 'system',
                      timestamp: Date.now()
                    }
                  });
                  item.off('content.updated', onListen);
                };
                item.on('content.updated', onListen);
                item.on('response.finished', onEnd);
                item.publish({
                  chatId: this.id,
                  content,
                  role: 'user',
                  timestamp: Date.now()
                });
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
        hash: 3177752702,
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
            properties = ['id', 'chatId', 'audio', 'chat', 'userId', 'role', 'content', 'usage', 'timestamp', 'conversationId'];
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
              this.initialise();
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
                super.publish(specs);
              } catch (e) {
                console.trace(e);
              }
            }
            /**
             * This method publishes the audio message as item
             *
             * It does not saves the audio itself, it only saves the item or document,
             * @param specs
             * @returns
             */
            async publishAudio(specs) {
              this.setOffline(true);
              return super.publish(specs);
            }
            /**
             * This method publishes the audio message as item
             *
             * It does not saves the audio itself, it only saves the item or document,
             * @param specs
             * @returns
             */
            async saveMessage(specs) {
              return super.publish(specs);
            }
            async publishSystem({
              offline,
              specs
            }) {
              if (offline) this.setOffline(offline);
              super.publish(specs);
            }
            async updateContent(specs) {
              this.setOffline(true);
              //@ts-ignore
              await super.publish(specs);
              this.trigger(`content.updated`);
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
        "im": "./chat/interfaces/chat",
        "from": "IChatProperties",
        "name": "IChatProperties"
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
        (require || prop === 'IChatProperties') && _export("IChatProperties", IChatProperties = require ? require('./chat/interfaces/chat').IChatProperties : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQztZQUN4RU4sWUFBWTtjQUFFTyxFQUFFLEdBQUdDO1lBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFRCxFQUFFO2dCQUFFUixFQUFFLEVBQUUsVUFBVTtnQkFBRUQsU0FBUyxFQUFFLGdCQUFnQjtnQkFBRUcsUUFBUSxFQUFFNEY7Y0FBb0IsQ0FBRSxDQUFDO1lBQzNGOztVQUNBekYiLCJuYW1lcyI6WyJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsIk9iamVjdCIsInZhbHVlIiwibG9jYWxkYiIsIm1lc3NhZ2VzIiwibG9hZEFsbCIsInNwZWNzIiwicmVzcG9uc2UiLCJsb2FkIiwiY29sbGVjdGlvbiIsIk1lc3NhZ2VzIiwiZGF0YSIsImxvY2FsTG9hZCIsImNvbnZlcnNhdGlvbklkIiwic29ydEJ5Iiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsZW5ndGgiLCJzZXRFbnRyaWVzIiwid2luZG93IiwibSIsImMiLCJzZXRBdWRpb01lc3NhZ2UiLCJ1c2VyIiwicmVzcG9uc2VJdGVtIiwiTWVzc2FnZSIsImlzUmVhZHkiLCJzYXZlTWVzc2FnZSIsInNhdmVBdWRpb0xvY2FsbHkiLCJhdWRpbyIsInRyYW5zY3JpcHRpb24iLCJzZXRPZmZsaW5lIiwiY2hhdCIsImNoYXRJZCIsInR5cGUiLCJyb2xlIiwibGFuZ3VhZ2UiLCJkZWZhdWx0IiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJjb250ZW50IiwicHVibGlzaEF1ZGlvIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInNlbmRNZXNzYWdlIiwiZmV0Y2hpbmciLCJQcm9taXNlIiwiYWxsIiwicHVibGlzaGVkIiwib25MaXN0ZW4iLCJwdWJsaXNoU3lzdGVtIiwib2ZmbGluZSIsInVwZGF0ZUNvbnRlbnQiLCJvbkVuZCIsInRyaWdnZXIiLCJvZmYiLCJwdWJsaXNoIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJnZXQiLCJNZXNzYWdlUHJvdmlkZXIiLCJhcGkiLCJBcGkiLCJjb25maWciLCJwYXJhbXMiLCJhcGlzIiwicmVhY3RpdmVQcm9wcyIsImluaXRpYWxpc2UiLCJzdHJlYW1SZXNwb25zZSIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJmaXJlYmFzZVRva2VuIiwiYmVhcmVyIiwic3RyZWFtIiwidGhlbiIsInRyYWNlIiwiS25vd2xlZGdlQm94ZXMiLCJLbm93bGVkZ2VCb3giLCJLbm93bGVkZ2VCb3hQcm92aWRlciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYXVkaW8vY29sbGVjdGlvbi50cyIsImF1ZGlvL2l0ZW0udHMiLCJjaGF0L2NvbGxlY3Rpb24udHMiLCJjaGF0L2ludGVyZmFjZXMvY2hhdC50cyIsImNoYXQvaW50ZXJmYWNlcy9tZXNzYWdlLnRzIiwiY2hhdC9pdGVtLnRzIiwiY2hhdC9tZXNzYWdlcy9jb2xsZWN0aW9uLnRzIiwiY2hhdC9tZXNzYWdlcy9pbmRleC50cyIsImNoYXQvbWVzc2FnZXMvaXRlbS50cyIsImtub3dsZWRnZS1ib3hlcy9jb2xsZWN0aW9uLnRzIiwia25vd2xlZGdlLWJveGVzL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==