System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.2/entities", "@aimpact/chat-api@1.0.0/provider"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Audio, Chats, Chat, Message, Classes, Class, KnowledgeBoxes, KnowledgeBox, User, __beyond_pkg, hmr;
  _export({
    Audio: void 0,
    Chats: void 0,
    Chat: void 0,
    Message: void 0,
    Classes: void 0,
    Class: void 0,
    KnowledgeBoxes: void 0,
    KnowledgeBox: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive112Entities) {
      dependency_1 = _beyondJsReactive112Entities;
    }, function (_aimpactChatApi100Provider) {
      dependency_2 = _aimpactChatApi100Provider;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["socket.io-client", "4.7.1"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@0.0.1/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-api/provider', dependency_2]]);
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
        hash: 3000916097,
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
            properties = ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'usage', 'knowledgeBoxId'];
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
              //@ts-ignore
              const response = await this.load(specs);
              let messages = new Map();
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
                await item.isReady;
                item.setOffline(true);
                this.#messages.set(item.id, {
                  id: item.id,
                  chatId: this.id,
                  content,
                  role: 'user',
                  timestamp: Date.now()
                });
                this.triggerEvent();
                await item.publish({
                  chatId: this.id,
                  content,
                  role: 'user',
                  timestamp: Date.now()
                });
                this.triggerEvent();
                const data = {
                  ...item.getProperties()
                };
                const response = await this.provider.sendMessage({
                  chatId: this.id,
                  ...data
                });
                if (!response.status) {
                  throw new Error(response.error);
                }
                this.#messages.set(response.data.response.id, response.data.response);
                this.#messages.set(response.data.message.id, response.data.message);
                this.triggerEvent();
                return {
                  response: response.data.response,
                  message: response.data.message
                };
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
        hash: 2515190699,
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
            add(text) {
              //@ts-ignore
              const message = new _item.Message();
              // message.setOffline(true);
              // this.items.push(message);
            }
          }

          exports.Messages = Messages;
        }
      });

      /************************************
      INTERNAL MODULE: ./chat/messages/item
      ************************************/

      ims.set('./chat/messages/item', {
        hash: 1184162622,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          /*bundle*/ // ChatItem

          class Message extends _entities.Item {
            properties = ['id', 'chatId', 'userId', 'role', 'content', 'usage', 'timestamp'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Messages',
                provider: _provider.MessageProvider
              });
              //@ts-ignore
              this.reactiveProps(['autoplay']);
            }
          }
          exports.Message = Message;
        }
      });

      /************************************
      INTERNAL MODULE: ./classes/collection
      ************************************/

      ims.set('./classes/collection', {
        hash: 2998028383,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Classes = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          /*bundle*/
          class Classes extends _entities.Collection {
            item = _item.Class;
            constructor() {
              super({
                storeName: 'Classes',
                db: 'chat-api'
              });
            }
          }
          exports.Classes = Classes;
        }
      });

      /******************************
      INTERNAL MODULE: ./classes/item
      ******************************/

      ims.set('./classes/item', {
        hash: 3891103236,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Class = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          /*bundle*/
          class Class extends _entities.Item {
            properties = ['id', 'curriculumObjective', 'topics', 'status', 'content', 'assessment', 'synthesis', 'relevance'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Classes',
                provider: _provider.ClassesProvider
              });
            }
            async #generate(specs) {
              try {
                this.fetching = true;
                await this.isReady;
                const response = this.provider.generate(this.id, this.curriculumObjective, specs);
                this.fetching = false;
                return response;
              } catch {
                console.error('error generating', specs);
              }
            }
            async generateTopicActivity(topic, element) {
              return this.#generate({
                is: 'topic',
                element,
                topic
              });
            }
            async generateClassAction(element) {
              const response = await this.#generate({
                is: 'class',
                element,
                topics: this.topics
              });
              if (!response) throw new Error('error generating');
              this.triggerEvent('class.generate.content');
              return response;
            }
          }
          exports.Class = Class;
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

      /****************************
      INTERNAL MODULE: ./users/item
      ****************************/

      ims.set('./users/item', {
        hash: 3054927440,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@aimpact/chat-api/provider");
          /*bundle*/ // AudioItem

          class User extends _entities.Item {
            properties = ['displayName', 'id', 'email', 'photoURL', 'phoneNumber'];
            #logged;
            get logged() {
              return this.#logged;
            }
            constructor(specs) {
              super({
                id: specs.id,
                db: 'chat-api',
                storeName: 'User',
                provider: _provider.UserProvider
              });
            }
            async login(data) {
              await this.isReady;
              if (this.#logged) return;
              await this.set(data.user);
              await this.provider.updateUser({
                ...this.getProperties(),
                id: this.id
              });
              this.#logged = true;
              return true;
            }
          }
          exports.User = User;
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
        "im": "./classes/collection",
        "from": "Classes",
        "name": "Classes"
      }, {
        "im": "./classes/item",
        "from": "Class",
        "name": "Class"
      }, {
        "im": "./knowledge-boxes/collection",
        "from": "KnowledgeBoxes",
        "name": "KnowledgeBoxes"
      }, {
        "im": "./knowledge-boxes/item",
        "from": "KnowledgeBox",
        "name": "KnowledgeBox"
      }, {
        "im": "./users/item",
        "from": "User",
        "name": "User"
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
        (require || prop === 'Classes') && _export("Classes", Classes = require ? require('./classes/collection').Classes : value);
        (require || prop === 'Class') && _export("Class", Class = require ? require('./classes/item').Class : value);
        (require || prop === 'KnowledgeBoxes') && _export("KnowledgeBoxes", KnowledgeBoxes = require ? require('./knowledge-boxes/collection').KnowledgeBoxes : value);
        (require || prop === 'KnowledgeBox') && _export("KnowledgeBox", KnowledgeBox = require ? require('./knowledge-boxes/item').KnowledgeBox : value);
        (require || prop === 'User') && _export("User", User = require ? require('./users/item').User : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsRUFBRVMsS0FBSyxDQUFDVCxFQUFFO2dCQUFFUixFQUFFLEVBQUUsVUFBVTtnQkFBRUQsU0FBUyxFQUFFLE1BQU07Z0JBQUVHLFFBQVEsRUFBRTZFO2NBQVksQ0FBRSxDQUFDO1lBQ25GO1lBRUEsTUFBTUMsS0FBSyxDQUFDNUQsSUFBSTtjQUNmLE1BQU0sSUFBSSxDQUFDWSxPQUFPO2NBQ2xCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtjQUNsQixNQUFNLElBQUksQ0FBQ1IsR0FBRyxDQUFDSixJQUFJLENBQUNNLElBQUksQ0FBQztjQUN6QixNQUFNLElBQUksQ0FBQ3hCLFFBQVEsQ0FBQytFLFVBQVUsQ0FBQztnQkFBRSxHQUFHLElBQUksQ0FBQzlCLGFBQWEsRUFBRTtnQkFBRTNDLEVBQUUsRUFBRSxJQUFJLENBQUNBO2NBQUUsQ0FBRSxDQUFDO2NBQ3hFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtjQUNuQixPQUFPLElBQUk7WUFDWjs7VUFDQUgiLCJuYW1lcyI6WyJBdWRpb3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkF1ZGlvIiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiQXVkaW9Qcm92aWRlciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJpZCIsInVuZGVmaW5lZCIsIkNoYXRzIiwiQ2hhdCIsIkNoYXRQcm92aWRlciIsIk1hcCIsIm1lc3NhZ2VzIiwidmFsdWVzIiwibG9hZEFsbCIsInNwZWNzIiwicmVzcG9uc2UiLCJsb2FkIiwiZGF0YSIsImxlbmd0aCIsImZvckVhY2giLCJtZXNzYWdlIiwic2V0Iiwic2V0QXVkaW9NZXNzYWdlIiwidXNlciIsIm1lc3NhZ2VJdGVtIiwiTWVzc2FnZSIsInJlc3BvbnNlSXRlbSIsIlByb21pc2UiLCJhbGwiLCJpc1JlYWR5IiwicHVibGlzaCIsImZpbmFsRGF0YSIsImdldCIsImF1ZGlvIiwiZGVsZXRlIiwidHJpZ2dlckV2ZW50Iiwic2VuZEF1ZGlvIiwidHJhbnNjcmlwdGlvbiIsInNldE9mZmxpbmUiLCJjaGF0SWQiLCJ0eXBlIiwicm9sZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJjb250ZW50Iiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsImdldFByb3BlcnRpZXMiLCJzdGF0dXMiLCJFcnJvciIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJnZXRNZXNzYWdlIiwiTWVzc2FnZXMiLCJNZXNzYWdlUHJvdmlkZXIiLCJhZGQiLCJ0ZXh0IiwicmVhY3RpdmVQcm9wcyIsIkNsYXNzZXMiLCJDbGFzcyIsIkNsYXNzZXNQcm92aWRlciIsImdlbmVyYXRlIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsImdlbmVyYXRlVG9waWNBY3Rpdml0eSIsInRvcGljIiwiZWxlbWVudCIsImlzIiwiZ2VuZXJhdGVDbGFzc0FjdGlvbiIsInRvcGljcyIsIktub3dsZWRnZUJveGVzIiwiS25vd2xlZGdlQm94IiwiS25vd2xlZGdlQm94UHJvdmlkZXIiLCJVc2VyIiwibG9nZ2VkIiwiVXNlclByb3ZpZGVyIiwibG9naW4iLCJ1cGRhdGVVc2VyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhdWRpby9jb2xsZWN0aW9uLnRzIiwiYXVkaW8vaXRlbS50cyIsImNoYXQvY29sbGVjdGlvbi50cyIsImNoYXQvaXRlbS50cyIsImNoYXQvbWVzc2FnZXMvY29sbGVjdGlvbi50cyIsImNoYXQvbWVzc2FnZXMvaW5kZXgudHMiLCJjaGF0L21lc3NhZ2VzL2l0ZW0udHMiLCJjbGFzc2VzL2NvbGxlY3Rpb24udHMiLCJjbGFzc2VzL2l0ZW0udHMiLCJrbm93bGVkZ2UtYm94ZXMvY29sbGVjdGlvbi50cyIsImtub3dsZWRnZS1ib3hlcy9pdGVtLnRzIiwidXNlcnMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=