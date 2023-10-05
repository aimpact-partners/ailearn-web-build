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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
        hash: 2234570581,
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
              const messages = new Map();
              const collection = new _messages.Messages();
              const data = await collection.localLoad({
                chatId: this.id,
                sortBy: 'timestamp'
              });
              collection.on('change', this.triggerEvent);
              if (response.data.messages?.length) {
                await collection.setEntries(response.data.messages);
              }
              this.#messages = collection;
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
        hash: 1121202613,
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
            properties = ['id', 'chatId', 'audio', 'chat', 'userId', 'role', 'content', 'usage', 'timestamp'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX3Byb3ZpZGVyIiwiX2l0ZW0iLCJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbWVzc2FnZXMiLCJfY29yZSIsImxvY2FsZGIiLCJtZXNzYWdlcyIsImxvYWRBbGwiLCJzcGVjcyIsInJlc3BvbnNlIiwibG9hZCIsIk1hcCIsImNvbGxlY3Rpb24iLCJNZXNzYWdlcyIsImRhdGEiLCJsb2NhbExvYWQiLCJjaGF0SWQiLCJzb3J0QnkiLCJvbiIsInRyaWdnZXJFdmVudCIsImxlbmd0aCIsInNldEVudHJpZXMiLCJzZXRBdWRpb01lc3NhZ2UiLCJ1c2VyIiwicmVzcG9uc2VJdGVtIiwiTWVzc2FnZSIsImlzUmVhZHkiLCJzYXZlTWVzc2FnZSIsImN1cnJlbnRBdWRpbyIsInNhdmVBdWRpb0xvY2FsbHkiLCJhdWRpbyIsInRyYW5zY3JpcHRpb24iLCJzZXRPZmZsaW5lIiwiY2hhdCIsInR5cGUiLCJyb2xlIiwibGFuZ3VhZ2UiLCJkZWZhdWx0IiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJjb250ZW50IiwicHVibGlzaEF1ZGlvIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInNlbmRNZXNzYWdlIiwiZmV0Y2hpbmciLCJQcm9taXNlIiwiYWxsIiwicHVibGlzaGVkIiwib25MaXN0ZW4iLCJwdWJsaXNoU3lzdGVtIiwib2ZmbGluZSIsInVwZGF0ZUNvbnRlbnQiLCJvbkVuZCIsInRyaWdnZXIiLCJvZmYiLCJwdWJsaXNoIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJnZXQiLCJNZXNzYWdlUHJvdmlkZXIiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiYXBpIiwiQXBpIiwicGFyYW1zIiwiYXBpcyIsInJlYWN0aXZlUHJvcHMiLCJsaXN0ZW4iLCJpbml0aWFsaXNlIiwiI29uTGlzdGVuIiwic3RyZWFtUmVzcG9uc2UiLCIjbGlzdGVuIiwib2ZmRXZlbnRzIiwiI29mZkV2ZW50cyIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJmaXJlYmFzZVRva2VuIiwiYmVhcmVyIiwic3RyZWFtIiwidGhlbiIsInRyYWNlIiwiS25vd2xlZGdlQm94ZXMiLCJLbm93bGVkZ2VCb3giLCJLbm93bGVkZ2VCb3hQcm92aWRlciJdLCJzb3VyY2VzIjpbIi9hdWRpby9jb2xsZWN0aW9uLnRzIiwiL2F1ZGlvL2l0ZW0udHMiLCIvY2hhdC9jb2xsZWN0aW9uLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0L2l0ZW0udHMiLCIvY2hhdC9tZXNzYWdlcy9jb2xsZWN0aW9uLnRzIiwiL2NoYXQvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdC9tZXNzYWdlcy9pdGVtLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9jb2xsZWN0aW9uLnRzIiwiL2tub3dsZWRnZS1ib3hlcy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFNTSxNQUFPRyxNQUFPLFNBQVFKLFNBQUEsQ0FBQUssVUFBVTtZQUNyQ0MsSUFBSSxHQUFHSCxLQUFBLENBQUFJLEtBQUs7WUFDRkMsU0FBUyxHQUFHLGNBQWM7WUFDMUJD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