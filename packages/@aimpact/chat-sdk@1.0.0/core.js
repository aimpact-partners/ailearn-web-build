System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/entities", "@aimpact/chat-api@1.0.1/provider", "@aimpact/chat-sdk@1.0.0/api", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/session"], function (_export, _context) {
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
    }, function (_beyondJsReactive116Entities) {
      dependency_1 = _beyondJsReactive116Entities;
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

      /*****************************************
      INTERNAL MODULE: ./chat/interfaces/message
      *****************************************/

      ims.set('./chat/interfaces/message', {
        hash: 1377842170,
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
        hash: 510645927,
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
          /*bundle*/ // ChatItem

          class Chat extends _entities.Item {
            properties = ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'usage', 'children', 'knowledgeBoxId', 'metadata'];
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
                chatId: this.id
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
              // const messageItem = new Message();
              if (this.#currentAudio.id !== user.id) {
                console.warn('son diferentes', this.#currentAudio.id, user.id);
                return;
              }
              // this.#currentAudio.set(user);
              this.#currentAudio.publish(user);
              const responseItem = new _item.Message();
              await responseItem.isReady;
              /**
               * Check with Felix if this is the correct way to do it
               */
              await responseItem.publish(response);
              const finalData = {
                ...user
              };
              this.triggerEvent();
              return responseItem;
            }
            #currentAudio;
            async sendAudio(audio, transcription = undefined) {
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
                  timestamp: Date.now()
                };
                if (transcription) {
                  specs.content = transcription;
                }
                this.#currentAudio = item;
                item.publishAudio(specs);
                this.triggerEvent();
                console.log(98, item.id, item);
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
                performance.mark('previous.create.messages');
                await Promise.all([item.isReady, response.isReady]);
                performance.mark('after.create.messages');
                const onListen = async () => {
                  if (!response) {
                    await response.isReady;
                    response.setOffline(true);
                    response.role = 'system';
                    response.publishSystem();
                  }
                  response.content = item.response;
                  this.triggerEvent();
                  //	this.#messages.elements(response.id).content = response.content;
                };

                const onEnd = () => {
                  this.trigger('response.finished');
                  console.log(100);
                  response.publish({
                    chatId: this.id,
                    chat: {
                      id: this.id
                    }
                  });
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
        hash: 3980910336,
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
            async publishAudio(specs) {
              this.setOffline(true);
              return super.publish(specs);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQU1NLE1BQU9BLE1BQU8sU0FBUUMsb0JBQVU7WUFDckNDLElBQUksR0FBR0MsV0FBSztZQUNGQyxTQUFTLEdBQUcsY0FBYztZQUMxQkMsRUFBRSxHQUFHLFVBQVU7WUFFekJDO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSUMsdUJBQWEsRUFBRTtjQUNuQyxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNaOztVQUNBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkQ7VUFDQTtVQU1PLFdBUlA7O1VBUWlCLE1BQU9QLEtBQU0sU0FBUVEsY0FBWTtZQUN2Q0MsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7WUFFbkROLFlBQVk7Y0FBRU8sRUFBRSxHQUFHQztZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRUQsRUFBRTtnQkFBRVIsRUFBRSxFQUFFLFVBQVU7Z0JBQUVELFNBQVMsRUFBRSxjQUFjO2dCQUFFRyxRQUFRLEVBQUVDO2NBQWEsQ0FBRSxDQUFDO1lBQ2xGOztVQUNBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkRDtVQUNBO1VBQ0E7VUFNTztVQUFVLE1BQU9LLEtBQU0sU0FBUWQsb0JBQVU7WUFDL0NDLElBQUksR0FBR2MsVUFBSTtZQUNYVjtjQUNDLEtBQUssQ0FBQztnQkFBRUMsUUFBUSxFQUFFVSxzQkFBWTtnQkFBRWIsU0FBUyxFQUFFLE1BQU07Z0JBQUVDLEVBQUUsRUFBRTtjQUFVLENBQUUsQ0FBQztZQUNyRTs7VUFDQUs7Ozs7Ozs7Ozs7O1VDYkQ7O1VBRUFRO1lBQ0FDO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSEE7VUFDQTtVQUNBO1VBRUE7VUFrQk8sV0F2QlA7O1VBdUJpQixNQUFPSCxJQUFLLFNBQVFMLGNBQVc7WUFFckNDLFVBQVUsR0FBRyxDQUN0QixJQUFJLEVBQ0osVUFBVSxFQUNWLE1BQU0sRUFDTixRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsRUFDUixVQUFVLEVBQ1YsT0FBTyxFQUNQLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsVUFBVSxDQUNWO1lBQ0RRLE9BQU8sR0FBRyxLQUFLO1lBSWYsU0FBUztZQUNULElBQUlDLFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBRUFmLFlBQVk7Y0FBRU8sRUFBRSxHQUFHQztZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRUQsRUFBRTtnQkFBRVIsRUFBRSxFQUFFLFVBQVU7Z0JBQUVELFNBQVMsRUFBRSxNQUFNO2dCQUFFRyxRQUFRLEVBQUVVO2NBQVksQ0FBRSxDQUFDO1lBQ3pFO1lBRUFLLE9BQU8sR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDdkIsTUFBTUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDQyxJQUFJLENBQUNGLEtBQUssQ0FBQztjQUN2QyxNQUFNRixRQUFRLEdBQUcsSUFBSUssR0FBRyxFQUFFO2NBQzFCLE1BQU1DLFVBQVUsR0FBRyxJQUFJQyxrQkFBUSxFQUFFO2NBQ2pDLE1BQU1DLElBQUksR0FBRyxNQUFNRixVQUFVLENBQUNHLFNBQVMsQ0FBQztnQkFBRUMsTUFBTSxFQUFFLElBQUksQ0FBQ2xCO2NBQUUsQ0FBRSxDQUFDO2NBQzVEYyxVQUFVLENBQUNLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDMUMsSUFBSVQsUUFBUSxDQUFDSyxJQUFJLENBQUNSLFFBQVEsRUFBRWEsTUFBTSxFQUFFO2dCQUNuQyxNQUFNUCxVQUFVLENBQUNRLFVBQVUsQ0FBQ1gsUUFBUSxDQUFDSyxJQUFJLENBQUNSLFFBQVEsQ0FBQzs7Y0FFcEQsSUFBSSxDQUFDLFNBQVMsR0FBR00sVUFBVTtZQUM1QixDQUFDO1lBRUQsTUFBTVMsZUFBZSxDQUFDO2NBQUVDLElBQUk7Y0FBRWI7WUFBUSxDQUFFO2NBQ3ZDO2NBQ0EsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDWCxFQUFFLEtBQUt3QixJQUFJLENBQUN4QixFQUFFLEVBQUU7Z0JBQ3RDeUIsT0FBTyxDQUFDQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQzFCLEVBQUUsRUFBRXdCLElBQUksQ0FBQ3hCLEVBQUUsQ0FBQztnQkFDOUQ7O2NBRUQ7Y0FDQSxJQUFJLENBQUMsYUFBYSxDQUFDMkIsT0FBTyxDQUFDSCxJQUFJLENBQUM7Y0FFaEMsTUFBTUksWUFBWSxHQUFHLElBQUlDLGFBQU8sRUFBRTtjQUNsQyxNQUFNRCxZQUFZLENBQUNFLE9BQU87Y0FFMUI7OztjQUlBLE1BQU1GLFlBQVksQ0FBQ0QsT0FBTyxDQUFDaEIsUUFBUSxDQUFDO2NBRXBDLE1BQU1vQixTQUFTLEdBQUc7Z0JBQUUsR0FBR1A7Y0FBSSxDQUFFO2NBRTdCLElBQUksQ0FBQ0osWUFBWSxFQUFFO2NBRW5CLE9BQU9RLFlBQVk7WUFDcEI7WUFFQSxhQUFhO1lBQ2IsTUFBTUksU0FBUyxDQUFDQyxLQUFLLEVBQUVDLGFBQWEsR0FBR2pDLFNBQVM7Y0FDL0MsSUFBSTtnQkFDSCxNQUFNWixJQUFJLEdBQUcsSUFBSXdDLGFBQU8sRUFBRTtnQkFDMUIsTUFBTXhDLElBQUksQ0FBQ3lDLE9BQU87Z0JBQ2xCekMsSUFBSSxDQUFDOEMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFFckIsTUFBTXpCLEtBQUssR0FBYTtrQkFDdkIwQixJQUFJLEVBQUU7b0JBQUVwQyxFQUFFLEVBQUUsSUFBSSxDQUFDQTtrQkFBRSxDQUFFO2tCQUNyQmtCLE1BQU0sRUFBRSxJQUFJLENBQUNsQixFQUFFO2tCQUNmcUMsSUFBSSxFQUFFLE9BQU87a0JBQ2JKLEtBQUs7a0JBQ0xLLElBQUksRUFBRSxNQUFNO2tCQUNaQyxTQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBRztpQkFDbkI7Z0JBQ0QsSUFBSVAsYUFBYSxFQUFFO2tCQUNsQnhCLEtBQUssQ0FBQ2dDLE9BQU8sR0FBR1IsYUFBYTs7Z0JBRzlCLElBQUksQ0FBQyxhQUFhLEdBQUc3QyxJQUFJO2dCQUN6QkEsSUFBSSxDQUFDc0QsWUFBWSxDQUFDakMsS0FBSyxDQUFDO2dCQUV4QixJQUFJLENBQUNVLFlBQVksRUFBRTtnQkFDbkJLLE9BQU8sQ0FBQ21CLEdBQUcsQ0FBQyxFQUFFLEVBQUV2RCxJQUFJLENBQUNXLEVBQUUsRUFBRVgsSUFBSSxDQUFDO2dCQUM5QixPQUFPQSxJQUFJO2VBQ1gsQ0FBQyxPQUFPd0QsQ0FBQyxFQUFFO2dCQUNYcEIsT0FBTyxDQUFDcUIsS0FBSyxDQUFDRCxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTUUsV0FBVyxDQUFDTCxPQUFlO2NBQ2hDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDTSxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTTNELElBQUksR0FBRyxJQUFJd0MsYUFBTyxFQUFFO2dCQUMxQixJQUFJbEIsUUFBUSxHQUFHLElBQUlrQixhQUFPLEVBQUU7Z0JBQzVCb0IsV0FBVyxDQUFDQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7Z0JBQzVDLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMvRCxJQUFJLENBQUN5QyxPQUFPLEVBQUVuQixRQUFRLENBQUNtQixPQUFPLENBQUMsQ0FBQztnQkFDbkRtQixXQUFXLENBQUNDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztnQkFFekMsTUFBTUcsUUFBUSxHQUFHLFlBQVc7a0JBQzNCLElBQUksQ0FBQzFDLFFBQVEsRUFBRTtvQkFDZCxNQUFNQSxRQUFRLENBQUNtQixPQUFPO29CQUN0Qm5CLFFBQVEsQ0FBQ3dCLFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ3pCeEIsUUFBUSxDQUFDMkIsSUFBSSxHQUFHLFFBQVE7b0JBQ3hCM0IsUUFBUSxDQUFDMkMsYUFBYSxFQUFFOztrQkFFekIzQyxRQUFRLENBQUMrQixPQUFPLEdBQUdyRCxJQUFJLENBQUNzQixRQUFRO2tCQUVoQyxJQUFJLENBQUNTLFlBQVksRUFBRTtrQkFDbkI7Z0JBQ0QsQ0FBQzs7Z0JBQ0QsTUFBTW1DLEtBQUssR0FBRyxNQUFLO2tCQUNsQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztrQkFDakMvQixPQUFPLENBQUNtQixHQUFHLENBQUMsR0FBRyxDQUFDO2tCQUNoQmpDLFFBQVEsQ0FBQ2dCLE9BQU8sQ0FBQztvQkFBRVQsTUFBTSxFQUFFLElBQUksQ0FBQ2xCLEVBQUU7b0JBQUVvQyxJQUFJLEVBQUU7c0JBQUVwQyxFQUFFLEVBQUUsSUFBSSxDQUFDQTtvQkFBRTtrQkFBRSxDQUFFLENBQUM7a0JBQzVEWCxJQUFJLENBQUNvRSxHQUFHLENBQUMsaUJBQWlCLEVBQUVKLFFBQVEsQ0FBQztnQkFDdEMsQ0FBQztnQkFDRGhFLElBQUksQ0FBQzhCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRWtDLFFBQVEsQ0FBQztnQkFDcENoRSxJQUFJLENBQUM4QixFQUFFLENBQUMsbUJBQW1CLEVBQUVvQyxLQUFLLENBQUM7Z0JBQ25DTixXQUFXLENBQUNDLElBQUksQ0FBQywyQkFBMkIsQ0FBQztnQkFDN0M3RCxJQUFJLENBQUNzQyxPQUFPLENBQUM7a0JBQUVULE1BQU0sRUFBRSxJQUFJLENBQUNsQixFQUFFO2tCQUFFMEMsT0FBTztrQkFBRUosSUFBSSxFQUFFLE1BQU07a0JBQUVDLFNBQVMsRUFBRUMsSUFBSSxDQUFDQyxHQUFHO2dCQUFFLENBQUUsQ0FBQztnQkFDL0VRLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDO2dCQUMxQ0QsV0FBVyxDQUFDUyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsMEJBQTBCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQzNGVCxXQUFXLENBQUNTLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSwyQkFBMkIsRUFBRSx3QkFBd0IsQ0FBQztnQkFFOUYsT0FBTztrQkFBRUMsT0FBTyxFQUFFdEUsSUFBSTtrQkFBRXNCO2dCQUFRLENBQUU7Z0JBRWxDLElBQUksQ0FBQ1MsWUFBWSxFQUFFO2dCQUNuQjtlQUNBLENBQUMsT0FBT3lCLENBQUMsRUFBRTtnQkFDWHBCLE9BQU8sQ0FBQ3FCLEtBQUssQ0FBQ0QsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDRyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQVksVUFBVSxDQUFDNUQsRUFBVTtjQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM2RCxHQUFHLENBQUM3RCxFQUFFLENBQUM7WUFDOUI7O1VBQ0FIOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZLRDtVQUNBO1VBTU0sTUFBT2tCLFFBQVMsU0FBUTNCLG9CQUFVO1lBQ3BDQyxJQUFJLEdBQUd3QyxhQUFPO1lBQ0p0QyxTQUFTLEdBQUcsVUFBVTtZQUN0QkMsRUFBRSxHQUFHLFVBQVU7WUFFekJDO2NBQ0ksS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDRyxJQUFJLEVBQUU7WUFDZjs7VUFDSEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJEO1VBQ0E7VUFDQTtVQU1NLE1BQU9rQixRQUFTLFNBQVEzQixvQkFBVTtZQUN2Q0MsSUFBSSxHQUFHd0MsYUFBTztZQUVkcEM7Y0FDQyxLQUFLLENBQUM7Z0JBQUVDLFFBQVEsRUFBRW9FLHlCQUFlO2dCQUFFdkUsU0FBUyxFQUFFLFVBQVU7Z0JBQUVDLEVBQUUsRUFBRTtjQUFVLENBQUUsQ0FBQztZQUM1RTs7VUFDQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkQ7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUdPLFdBUlA7O1VBUWlCLE1BQU9nQyxPQUFRLFNBQVEvQixjQUFjO1lBQzNDQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQztZQUszRyxJQUFJO1lBQ0osU0FBUyxHQUFXLEVBQUU7WUFDdEIsSUFBSVksUUFBUTtjQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVM7WUFDdEI7WUFDQWxCLFlBQVk7Y0FBRU8sRUFBRSxHQUFHQztZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRUQsRUFBRTtnQkFBRVIsRUFBRSxFQUFFLFVBQVU7Z0JBQUVELFNBQVMsRUFBRSxVQUFVO2dCQUFFRyxRQUFRLEVBQUVvRTtjQUFlLENBQUUsQ0FBQztjQUMvRSxNQUFNQyxHQUFHLEdBQUcsSUFBSUMsUUFBRyxDQUFDQyxlQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDL0IsSUFBSSxDQUFDO2NBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcyQixHQUFHO2NBRWYsSUFBSSxDQUFDSyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUNoQyxJQUFJLENBQUMsT0FBTyxFQUFFO2NBQ2QsSUFBSSxDQUFDQyxVQUFVLEVBQUU7WUFDbEI7WUFFQSxTQUFTLEdBQUcsTUFBSztjQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUNDLGNBQWM7Y0FDekMsSUFBSSxDQUFDZCxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFDaEMsQ0FBQztZQUNELE9BQU8sR0FBRyxNQUFLO2NBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQ3JDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hELENBQUM7WUFFRCxVQUFVLEdBQUcsTUFBSztjQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDc0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakQsQ0FBQztZQUNEO1lBQ0EsTUFBTTlCLE9BQU8sQ0FBQ2pCLEtBQUs7Y0FDbEIsSUFBSTtnQkFDSCxJQUFJLENBQUN5QixVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNyQixNQUFNb0MsS0FBSyxHQUFHLE1BQU1DLHVCQUFjLENBQUNoRCxJQUFJLENBQUNpRCxhQUFhO2dCQUNyRCxJQUFJLENBQUMsSUFBSSxDQUNQQyxNQUFNLENBQUNILEtBQUssQ0FBQyxDQUNiSSxNQUFNLENBQUMsa0JBQWtCakUsS0FBSyxDQUFDUSxNQUFNLFdBQVcsRUFBRTtrQkFBRXlDLE9BQU8sRUFBRWpELEtBQUssQ0FBQ2dDO2dCQUFPLENBQUUsQ0FBQyxDQUM3RWtDLElBQUksQ0FBQ2pFLFFBQVEsSUFBRztrQkFDaEIsSUFBSSxDQUFDNkMsT0FBTyxDQUFDLG1CQUFtQixDQUFDO2tCQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNsQixDQUFDLENBQUM7Z0JBRUgsS0FBSyxDQUFDN0IsT0FBTyxDQUFDakIsS0FBSyxDQUFDO2VBQ3BCLENBQUMsT0FBT21DLENBQUMsRUFBRTtnQkFDWHBCLE9BQU8sQ0FBQ29ELEtBQUssQ0FBQ2hDLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNRixZQUFZLENBQUNqQyxLQUFLO2NBQ3ZCLElBQUksQ0FBQ3lCLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDckIsT0FBTyxLQUFLLENBQUNSLE9BQU8sQ0FBQ2pCLEtBQUssQ0FBQztZQUM1QjtZQUVBLE1BQU00QyxhQUFhO2NBQ2xCLElBQUksQ0FBQ25CLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDckIsS0FBSyxDQUFDUixPQUFPLEVBQUU7WUFDaEI7O1VBQ0E5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRUQ7VUFDQTtVQUNBO1VBRU87VUFBVSxNQUFPaUYsY0FBZSxTQUFRMUYsb0JBQVU7WUFDeERDLElBQUksR0FBRzBGLGtCQUFZO1lBQ25CdEY7Y0FDQyxLQUFLLENBQUM7Z0JBQUVDLFFBQVEsRUFBRXNGLDhCQUFvQjtnQkFBRXpGLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQUVDLEVBQUUsRUFBRTtjQUFVLENBQUUsQ0FBQztZQUN2Rjs7VUFDQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQ7VUFDQTtVQVVPLFdBWlA7O1VBWWlCLE1BQU9rRixZQUFhLFNBQVFqRixjQUFtQjtZQUNyREMsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQztZQUN4RU4sWUFBWTtjQUFFTyxFQUFFLEdBQUdDO1lBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDbEMsS0FBSyxDQUFDO2dCQUFFRCxFQUFFO2dCQUFFUixFQUFFLEVBQUUsVUFBVTtnQkFBRUQsU0FBUyxFQUFFLGdCQUFnQjtnQkFBRUcsUUFBUSxFQUFFc0Y7Y0FBb0IsQ0FBRSxDQUFDO1lBQzNGOztVQUNBbkYiLCJuYW1lcyI6WyJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsIk9iamVjdCIsInZhbHVlIiwibG9jYWxkYiIsIm1lc3NhZ2VzIiwibG9hZEFsbCIsInNwZWNzIiwicmVzcG9uc2UiLCJsb2FkIiwiTWFwIiwiY29sbGVjdGlvbiIsIk1lc3NhZ2VzIiwiZGF0YSIsImxvY2FsTG9hZCIsImNoYXRJZCIsIm9uIiwidHJpZ2dlckV2ZW50IiwibGVuZ3RoIiwic2V0RW50cmllcyIsInNldEF1ZGlvTWVzc2FnZSIsInVzZXIiLCJjb25zb2xlIiwid2FybiIsInB1Ymxpc2giLCJyZXNwb25zZUl0ZW0iLCJNZXNzYWdlIiwiaXNSZWFkeSIsImZpbmFsRGF0YSIsInNlbmRBdWRpbyIsImF1ZGlvIiwidHJhbnNjcmlwdGlvbiIsInNldE9mZmxpbmUiLCJjaGF0IiwidHlwZSIsInJvbGUiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiY29udGVudCIsInB1Ymxpc2hBdWRpbyIsImxvZyIsImUiLCJlcnJvciIsInNlbmRNZXNzYWdlIiwiZmV0Y2hpbmciLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJQcm9taXNlIiwiYWxsIiwib25MaXN0ZW4iLCJwdWJsaXNoU3lzdGVtIiwib25FbmQiLCJ0cmlnZ2VyIiwib2ZmIiwibWVhc3VyZSIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwiZ2V0IiwiTWVzc2FnZVByb3ZpZGVyIiwiYXBpIiwiQXBpIiwiY29uZmlnIiwicGFyYW1zIiwiYXBpcyIsInJlYWN0aXZlUHJvcHMiLCJpbml0aWFsaXNlIiwic3RyZWFtUmVzcG9uc2UiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0cmVhbSIsInRoZW4iLCJ0cmFjZSIsIktub3dsZWRnZUJveGVzIiwiS25vd2xlZGdlQm94IiwiS25vd2xlZGdlQm94UHJvdmlkZXIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImF1ZGlvL2NvbGxlY3Rpb24udHMiLCJhdWRpby9pdGVtLnRzIiwiY2hhdC9jb2xsZWN0aW9uLnRzIiwiY2hhdC9pbnRlcmZhY2VzL21lc3NhZ2UudHMiLCJjaGF0L2l0ZW0udHMiLCJjaGF0L21lc3NhZ2VzL2NvbGxlY3Rpb24udHMiLCJjaGF0L21lc3NhZ2VzL2luZGV4LnRzIiwiY2hhdC9tZXNzYWdlcy9pdGVtLnRzIiwia25vd2xlZGdlLWJveGVzL2NvbGxlY3Rpb24udHMiLCJrbm93bGVkZ2UtYm94ZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==