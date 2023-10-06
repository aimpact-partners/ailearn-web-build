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
        hash: 1243837466,
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
        hash: 2587999454,
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
                  conversationId: this.id,
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
                        conversationId: this.id,
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
                    offline: false,
                    specs: {
                      conversationId: this.id,
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
                  conversationId: this.id,
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
        hash: 103610806,
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
                this.#api.bearer(token).stream(`/conversations/${specs.conversationId}/messages`, {
                  message: specs.content,
                  id: this.id
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
              this.setOffline(offline);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQWEsU0FBUXRGLGNBQW1CO1lBQ3JEQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDO1lBQ3hFTixZQUFZO2NBQUVPLEVBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUcsRUFBRTtjQUNsQyxLQUFLLENBQUM7Z0JBQUVELEVBQUU7Z0JBQUVSLEVBQUUsRUFBRSxVQUFVO2dCQUFFRCxTQUFTLEVBQUUsZ0JBQWdCO2dCQUFFRyxRQUFRLEVBQUUyRjtjQUFvQixDQUFFLENBQUM7WUFDM0Y7O1VBQ0F4RiIsIm5hbWVzIjpbIkF1ZGlvcyIsIkNvbGxlY3Rpb24iLCJpdGVtIiwiQXVkaW8iLCJzdG9yZU5hbWUiLCJkYiIsImNvbnN0cnVjdG9yIiwicHJvdmlkZXIiLCJBdWRpb1Byb3ZpZGVyIiwiaW5pdCIsImV4cG9ydHMiLCJJdGVtIiwicHJvcGVydGllcyIsImlkIiwidW5kZWZpbmVkIiwiQ2hhdHMiLCJDaGF0IiwiQ2hhdFByb3ZpZGVyIiwiT2JqZWN0IiwidmFsdWUiLCJsb2NhbGRiIiwibWVzc2FnZXMiLCJsb2FkQWxsIiwic3BlY3MiLCJyZXNwb25zZSIsImxvYWQiLCJjb2xsZWN0aW9uIiwiTWVzc2FnZXMiLCJkYXRhIiwibG9jYWxMb2FkIiwiY29udmVyc2F0aW9uSWQiLCJzb3J0QnkiLCJvbiIsInRyaWdnZXJFdmVudCIsImxlbmd0aCIsInNldEVudHJpZXMiLCJ3aW5kb3ciLCJtIiwiYyIsInNldEF1ZGlvTWVzc2FnZSIsInVzZXIiLCJyZXNwb25zZUl0ZW0iLCJNZXNzYWdlIiwiaXNSZWFkeSIsInNhdmVNZXNzYWdlIiwic2F2ZUF1ZGlvTG9jYWxseSIsImF1ZGlvIiwidHJhbnNjcmlwdGlvbiIsInNldE9mZmxpbmUiLCJjaGF0IiwidHlwZSIsInJvbGUiLCJsYW5ndWFnZSIsImRlZmF1bHQiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImNvbnRlbnQiLCJwdWJsaXNoQXVkaW8iLCJlIiwiY29uc29sZSIsImVycm9yIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsIlByb21pc2UiLCJhbGwiLCJwdWJsaXNoZWQiLCJvbkxpc3RlbiIsInB1Ymxpc2hTeXN0ZW0iLCJvZmZsaW5lIiwidXBkYXRlQ29udGVudCIsIm9uRW5kIiwidHJpZ2dlciIsIm9mZiIsInB1Ymxpc2giLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsImdldCIsIk1lc3NhZ2VQcm92aWRlciIsImFwaSIsIkFwaSIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdGlhbGlzZSIsInN0cmVhbVJlc3BvbnNlIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsImZpcmViYXNlVG9rZW4iLCJiZWFyZXIiLCJzdHJlYW0iLCJ0aGVuIiwidHJhY2UiLCJLbm93bGVkZ2VCb3hlcyIsIktub3dsZWRnZUJveCIsIktub3dsZWRnZUJveFByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhdWRpby9jb2xsZWN0aW9uLnRzIiwiYXVkaW8vaXRlbS50cyIsImNoYXQvY29sbGVjdGlvbi50cyIsImNoYXQvaW50ZXJmYWNlcy9jaGF0LnRzIiwiY2hhdC9pbnRlcmZhY2VzL21lc3NhZ2UudHMiLCJjaGF0L2l0ZW0udHMiLCJjaGF0L21lc3NhZ2VzL2NvbGxlY3Rpb24udHMiLCJjaGF0L21lc3NhZ2VzL2luZGV4LnRzIiwiY2hhdC9tZXNzYWdlcy9pdGVtLnRzIiwia25vd2xlZGdlLWJveGVzL2NvbGxlY3Rpb24udHMiLCJrbm93bGVkZ2UtYm94ZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19