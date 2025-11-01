System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.2/model", "@beyond-js/http-suite@0.1.1/api", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/chat-sdk@1.5.5/startup", "@beyond-js/reactive@2.1.2/entities/collection", "@beyond-js/reactive@2.1.2/entities/item", "@beyond-js/kernel@0.1.14/core", "uuid@11.1.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Chats, IChatProperties, IChat, Chat, Messages, Message, __beyond_pkg, hmr;
  _export({
    Chats: void 0,
    IChatProperties: void 0,
    IChat: void 0,
    Chat: void 0,
    Messages: void 0,
    Message: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive212Model) {
      dependency_1 = _beyondJsReactive212Model;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_2 = _beyondJsHttpSuite011Api;
    }, function (_aimpactChatSdk155Session) {
      dependency_3 = _aimpactChatSdk155Session;
    }, function (_aimpactChatSdk155Startup) {
      dependency_4 = _aimpactChatSdk155Startup;
    }, function (_beyondJsReactive212EntitiesCollection) {
      dependency_5 = _beyondJsReactive212EntitiesCollection;
    }, function (_beyondJsReactive212EntitiesItem) {
      dependency_6 = _beyondJsReactive212EntitiesItem;
    }, function (_beyondJsKernel0114Core) {
      dependency_7 = _beyondJsKernel0114Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.4"], ["@google-cloud/storage", "7.17.1"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.6.2"], ["@tiptap/extension-code-block", "3.6.2"], ["@tiptap/extension-horizontal-rule", "3.6.2"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.6.2"], ["@tiptap/extension-task-list", "3.6.2"], ["@tiptap/extension-underline", "3.6.2"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.6.2"], ["@tiptap/starter-kit", "3.6.2"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dompurify", "3.2.7"], ["firebase", "11.10.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.22"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.10"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.1"], ["wavesurfer.js", "7.10.3"], ["zod", "3.25.76"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.25"], ["@types/react-dom", "18.3.7"], ["typescript", "5.9.3"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/http-suite/api', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@aimpact/chat-sdk/startup', dependency_4], ['@beyond-js/reactive/entities/collection', dependency_5], ['@beyond-js/reactive/entities/item', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['uuid', dependency_8]]);
      ims = new Map();
      /****************************************
      INTERNAL MODULE: ./chats/collection/index
      ****************************************/
      ims.set('./chats/collection/index', {
        hash: 1436428000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chats = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          /*bundle*/
          class Chats extends _model.ReactiveModel {
            #api;
            constructor() {
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
        hash: 1443553202,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatCollectionProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
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
        hash: 3087653661,
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
        hash: 2579787146,
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
        hash: 662073551,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _core = require("@beyond-js/kernel/core");
          var _api = require("@beyond-js/http-suite/api");
          var _item2 = require("../messages/item");
          var _messages = require("../messages");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          var _provider = require("./provider");
          var _uuid = require("uuid");
          /*bundle*/ // ChatItem

          class Chat extends _item.Item {
            #api;
            get api() {
              return this.#api;
            }
            #errors = [];
            get errors() {
              return this.#errors;
            }
            #currentMessage;
            #response;
            #messages;
            #metaDataStarted = false;
            get metaDataStarted() {
              return this.#metaDataStarted;
            }
            get messages() {
              return this.#messages;
            }
            constructor({
              id = undefined,
              server = undefined,
              ...specs
            } = {}) {
              super({
                id,
                entity: 'Chat',
                ...specs,
                properties: ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'language', 'usage', 'user', 'children', 'knowledgeBoxId', 'metadata', 'transcribing'],
                provider: _provider.ChatProvider
              });
              this.#api = new _api.Api(server || _startup.sdkConfig.api);
              globalThis.chat = this;
              if (!id) this.id = (0, _uuid.v4)();
              this.#listen();
              this.#messages = new _messages.Messages({
                chatId: this.id
              });
              this.#messages.on('new.message', () => {
                this.trigger('new.message');
              });
              // console.log(`chat is being exposed in console as chat`, id);
            }
            #listen = () => {
              this.#api.on('stream.response', this.#onListen);
              this.#api.on('metadata.started', () => {
                this.#metaDataStarted = true;
                if (this.#response) {
                  this.#response.set({
                    streaming: false
                  });
                }
                this.trigger('metadata.started');
              });
              this.#api.on('action.received', data => {
                if (data) {
                  try {
                    const parsed = JSON.parse(data);
                    this.trigger('action.received', parsed.metadata);
                  } catch (e) {
                    console.warn('the data coudnt be parsed', data);
                  }
                }
                try {
                  if (this.#api.actions) {
                    this.#api.actions.forEach(data => {
                      const action = JSON.parse(data);
                      if (action.type === 'transcription') {
                        this.#currentMessage.set({
                          content: action.data.transcription,
                          streaming: false
                        });
                        //once the transcription is received, we add the system message to the chat
                        if (this.#response && !this.#messages.has(this.#response.id)) this.messages.add(this.#response);
                      }
                    });
                  }
                  // const action = JSON.parse(this.#api.actions);
                } catch (e) {
                  console.error(e);
                }
              });
            };
            loadAll = async specs => {
              const response = await super.load(specs);
              const collection = this.#messages;
              collection.on('change', this.triggerEvent);
              if (response.messages?.length) {
                await collection.setEntries(response.messages);
              }
              this.ready = true;
              this.trigger('change');
              this.#messages = collection;
            };
            load = specs => this.loadAll(specs);
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
                this.#errors = [];
                this.trigger('error');
                const item = new _item2.Message({
                  chatId: this.id,
                  role: 'user',
                  content
                });
                this.#currentMessage = item;
                this.messages.add(item);
                // Create response message
                this.#response = new _item2.Message({
                  chatId: this.id,
                  role: 'system',
                  streaming: true
                });
                this.messages.add(this.#response);
                // Execute the API call
                await this.#executeMessageCall(item);
                return item;
              } catch (e) {
                throw e;
              } finally {
                this.fetching = false;
              }
            }
            async retry(id) {
              try {
                // Get the message by index
                const message = this.#messages.get(id);
                // console.log(1, 'we are retrying', message);
                if (!message) {
                  throw new Error(`Message with id ${id} not found`);
                }
                // Clear any previous error
                // message.set({ error: undefined });
                // Set as current message
                this.#currentMessage = message;
                // Create response message if it doesn't exist
                // console.log(0.2, this.#response);
                if (!this.#response) {
                  this.#response = new _item2.Message({
                    chatId: this.id,
                    role: 'system',
                    streaming: true
                  });
                  this.messages.add(this.#response);
                } else {
                  // Reset response message
                  this.#response.set({
                    streaming: true,
                    error: undefined
                  });
                }
                // Execute the API call
                await this.#executeMessageCall(message);
              } catch (e) {
                console.error(`Error in retry method:`, e);
                throw e;
              }
            }
            async #executeMessageCall(item) {
              const token = await _session.sessionWrapper.user.firebaseToken;
              const uri = `/chats/${this.id}/messages`;
              const promise = new _core.PendingPromise();
              const onFinish = async response => {
                this.trigger('response.finished');
                if (this.#response) {
                  await this.#response.set({
                    streaming: false
                  });
                  this.#response = undefined;
                }
                promise.resolve();
              };
              const onError = e => {
                this.#errors.push(e.message);
                if (this.#response) {
                  console.log('setting error', e, this.#response);
                  this.#response.set({
                    error: e
                  });
                }
                this.trigger('error');
                promise.resolve(item);
              };
              try {
                await this.#api.bearer(token).stream(uri, {
                  ...item.getProperties()
                }).then(onFinish).catch(onError);
                return promise;
              } catch (e) {
                onError(e);
                throw e;
              }
            }
            async sendAudio(message) {
              try {
                this.fetching = true;
                const token = await _session.sessionWrapper.user.firebaseToken;
                const uri = `/chats/${this.id}/messages/audio`;
                const promise = new _core.PendingPromise();
                const item = new _item2.Message({
                  chatId: this.id,
                  audio: message,
                  role: 'user',
                  streaming: true,
                  transcribing: true
                });
                this.#currentMessage = item;
                const onFinish = async response => {
                  if (response) {
                    await this.#response.set({
                      streaming: false,
                      transcribing: false
                    });
                    this.trigger('response.finished');
                  }
                  promise.resolve(item);
                  // this.#offEvents();
                };
                const onError = e => {
                  this.#errors.push(e);
                  if (this.#response) {
                    this.#response.set({
                      error: e
                    });
                  }
                  this.trigger('error');
                  promise.resolve(item);
                };
                this.messages.add(item);
                this.#response = new _item2.Message({
                  chatId: this.id,
                  role: 'system',
                  streaming: true
                });
                const specs = {
                  audio: new File([item.audio], 'audio.mp4', {
                    type: 'audio/mp4'
                  }),
                  multipart: true
                };
                this.#api.bearer(token).stream(uri, specs).then(onFinish).catch(onError);
                return promise;
              } catch (e) {
                throw new Error(e);
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
            async create(options) {
              const response = await this.#api.post('/chats', {
                id: this.id,
                name: options?.name || this.name || 'My chat',
                projectId: options?.projectId || '02d991dd-8d57-42f3-b155-8e7133482c19',
                uid: options?.userId || this.userId || _session.sessionWrapper.user.id,
                system: options?.system || this.system || '',
                parent: options?.parent || this.parent || '',
                category: options?.category || this.category || 'general',
                metadata: {
                  prompt: 'topic-q&a',
                  ...options?.metadata,
                  ...this.metadata
                },
                language: options?.language || this.language || {
                  default: 'es'
                }
              });
              this.set(response.data);
            }
            /**
             * Static factory method to create a new chat instance
             * Follows the Factory pattern for better object creation
             *
             * @param options - Configuration options for the chat
             * @returns Promise<Chat> - A new chat instance
             *
             * @example
             * ```typescript
             * // Create a basic chat
             * const chat = await Chat.create({
             *   name: 'My New Chat',
             *   language: { default: 'es' }
             * });
             *
             * // Create a chat with custom metadata
             * const chat = await Chat.create({
             *   name: 'Technical Discussion',
             *   system: 'You are a helpful technical assistant',
             *   metadata: { topic: 'programming', difficulty: 'advanced' }
             * });
             * ```
             */
            static async create(options = {}) {
              try {
                // Validate required session
                if (!_session.sessionWrapper.user?.id) {
                  throw new Error('User session is required to create a chat');
                }
                if (!options.projectId) {
                  throw new Error('Project ID is required to create a chat');
                }
                /**
                 * uid: user.uid,
                projectId: 'a1l34rn1-453a-4612-b6fd-59cb742111d0',
                name: '',
                language: { default: 'es' },
                metadata: {}
                 */
                // Set default values
                const defaultOptions = {
                  name: 'New Chat',
                  userId: _session.sessionWrapper.user.id,
                  language: {
                    default: _core.languages.default
                  },
                  projectId: options.projectId,
                  metadata: {},
                  ...options
                };
                // Create chat instance
                const chat = new Chat({
                  id: (0, _uuid.v4)(),
                  ...defaultOptions
                });
                // Create the chat on the server
                await chat.create(defaultOptions);
                return chat;
              } catch (error) {
                throw new Error(`Failed to create chat: ${error.message}`);
              }
            }
          }
          exports.Chat = Chat;
        }
      });

      /*************************************
      INTERNAL MODULE: ./chats/item/provider
      *************************************/

      ims.set('./chats/item/provider', {
        hash: 1034353935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          var _api = require("@beyond-js/http-suite/api");
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
              return data;
            }
          }
          exports.ChatProvider = ChatProvider;
        }
      });

      /**************************************
      INTERNAL MODULE: ./chats/messages/index
      **************************************/

      ims.set('./chats/messages/index', {
        hash: 905896483,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
          /*bundle*/ // import { MessageProvider } from '@aimpact/chat-api/provider';

          class Messages extends _model.ReactiveModel {
            item = _item.Message;
            #items = [];
            #map = new Map();
            get items() {
              return this.#items;
            }
            #id;
            constructor({
              chatId
            }) {
              super();
              this.#id = chatId;
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
            addTestMessage() {
              const message = new _item.Message({
                chatId: this.#id,
                role: 'system',
                streaming: true
              });
              this.add(message);
              const baseText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
              const repeatedText = baseText.repeat(5);
              const words = repeatedText.split(' ');
              let currentContent = '';
              let index = 0;
              const interval = setInterval(() => {
                if (index >= words.length) {
                  clearInterval(interval);
                  return;
                }
                currentContent += words[index] + ' ';
                message.set({
                  content: currentContent
                });
                index++;
              }, 100); // Add a new word every 100ms
            }
            getData() {
              return this.#items.map(item => item.getProperties());
            }
            has(id) {
              return this.#map.has(id);
            }
          }
          exports.Messages = Messages;
        }
      });

      /*************************************
      INTERNAL MODULE: ./chats/messages/item
      *************************************/

      ims.set('./chats/messages/item', {
        hash: 3444627462,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _uuid = require("uuid");
          var _api = require("@beyond-js/http-suite/api");
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
            #previous;
            get previous() {
              return this.#previous;
            }
            set previous(value) {
              if (value === this.#previous) return;
              this.#previous = value;
              this.trigger('previous.changed');
            }
            constructor({
              id = undefined,
              chat,
              ...specs
            }) {
              super({
                id,
                ...specs,
                properties: ['id', 'chatId', 'audio', 'userId', 'role', 'content', 'error', 'usage', 'timestamp', 'streaming', 'transcribing', 'actions']
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
        "im": "./chats/messages/index",
        "from": "Messages",
        "name": "Messages"
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
        (require || prop === 'Messages') && _export("Messages", Messages = require ? require('./chats/messages/index').Messages : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsIml0ZW1zIiwibG9hZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsImFkZEl0ZW0iLCJpdGVtIiwidW5zaGlmdCIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJDaGF0Q29sbGVjdGlvblByb3ZpZGVyIiwicGFyZW50IiwibGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9jb3JlIiwiX2l0ZW0yIiwiX21lc3NhZ2VzIiwiX3Byb3ZpZGVyIiwiX3V1aWQiLCJDaGF0IiwiSXRlbSIsImVycm9ycyIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsIm1ldGFEYXRhU3RhcnRlZCIsImlkIiwidW5kZWZpbmVkIiwic2VydmVyIiwic3BlY3MiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJnbG9iYWxUaGlzIiwiY2hhdCIsInY0IiwibGlzdGVuIiwiTWVzc2FnZXMiLCJjaGF0SWQiLCJvbiIsInRyaWdnZXIiLCIjbGlzdGVuIiwib25MaXN0ZW4iLCJzZXQiLCJzdHJlYW1pbmciLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJtZXRhZGF0YSIsImUiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJmb3JFYWNoIiwiYWN0aW9uIiwidHlwZSIsImNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwiaGFzIiwiYWRkIiwiZXJyb3IiLCJsb2FkQWxsIiwiY29sbGVjdGlvbiIsImxlbmd0aCIsInNldEVudHJpZXMiLCJyZWFkeSIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwic3RyaW5nQ29udGVudCIsImdldERhdGEiLCJnZXRQcm9wZXJ0aWVzIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsIk1lc3NhZ2UiLCJyb2xlIiwiZXhlY3V0ZU1lc3NhZ2VDYWxsIiwicmV0cnkiLCJtZXNzYWdlIiwiI2V4ZWN1dGVNZXNzYWdlQ2FsbCIsInVyaSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm9uRmluaXNoIiwicmVzb2x2ZSIsIm9uRXJyb3IiLCJwdXNoIiwibG9nIiwic3RyZWFtIiwidGhlbiIsImNhdGNoIiwic2VuZEF1ZGlvIiwiYXVkaW8iLCJ0cmFuc2NyaWJpbmciLCJGaWxlIiwibXVsdGlwYXJ0IiwidHJhbnNjcmliZSIsInBvc3QiLCJnZXRNZXNzYWdlIiwiY3JlYXRlIiwib3B0aW9ucyIsIm5hbWUiLCJwcm9qZWN0SWQiLCJ1aWQiLCJ1c2VySWQiLCJzeXN0ZW0iLCJjYXRlZ29yeSIsInByb21wdCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsImRlZmF1bHRPcHRpb25zIiwibGFuZ3VhZ2VzIiwibWFwIiwiTWFwIiwiYWRkVGVzdE1lc3NhZ2UiLCJiYXNlVGV4dCIsInJlcGVhdGVkVGV4dCIsInJlcGVhdCIsIndvcmRzIiwic3BsaXQiLCJjdXJyZW50Q29udGVudCIsImluZGV4IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2NhbEZpZWxkcyIsInBhcnNlZENvbnRlbnQiLCJwcmV2aW91cyIsInJlYWN0aXZlUHJvcHMiXSwic291cmNlcyI6WyIvY2hhdHMvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGF0cy9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0cy9pdGVtL2luZGV4LnRzIiwiL2NoYXRzL2l0ZW0vcHJvdmlkZXIudHMiLCIvY2hhdHMvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdHMvbWVzc2FnZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGws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LEdBQUk7WUFDSixDQUFBb0MsUUFBUyxHQUFXLEVBQUU7WUFDdEI7WUFDQSxDQUFBWSxJQUFLO1lBS0wwRixXQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFFdkIsQ0FBQUMsYUFBYztZQUVkLElBQUl2RyxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFpQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxDQUFBdUUsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSUEsUUFBUUEsQ0FBQ25ILEtBQUs7Y0FDakIsSUFBSUEsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBbUgsUUFBUyxFQUFFO2NBQzlCLElBQUksQ0FBQyxDQUFBQSxRQUFTLEdBQUduSCxLQUFLO2NBQ3RCLElBQUksQ0FBQzZCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNqQztZQUVBckQsWUFBWTtjQUFFc0MsRUFBRSxHQUFHQyxTQUFTO2NBQUVRLElBQUk7Y0FBRSxHQUFHTjtZQUFLLENBQTBCO2NBQ3JFLEtBQUssQ0FBQztnQkFDTEgsRUFBRTtnQkFDRixHQUFHRyxLQUFLO2dCQUNSRSxVQUFVLEVBQUUsQ0FDWCxJQUFJLEVBQ0osUUFBUSxFQUNSLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxPQUFPLEVBQ1AsT0FBTyxFQUNQLFdBQVcsRUFDWCxXQUFXLEVBQ1gsY0FBYyxFQUNkLFNBQVM7ZUFFVixDQUFDO2NBRUYsSUFBSSxDQUFDLENBQUFJLElBQUssR0FBR0EsSUFBSTtjQUNqQixJQUFJLENBQUNULEVBQUUsRUFBRSxJQUFJLENBQUNBLEVBQUUsR0FBRyxJQUFBUixLQUFBLENBQUFrQixFQUFJLEdBQUU7Y0FDekIsTUFBTWpELEdBQUcsR0FBRyxJQUFJTCxJQUFBLENBQUFPLEdBQUcsQ0FBQ0wsUUFBQSxDQUFBTSxTQUFTLENBQUNILEdBQUcsQ0FBQztjQUNsQyxJQUFJLENBQUMsQ0FBQUEsR0FBSSxHQUFHQSxHQUFHO2NBRWYsSUFBSSxDQUFDLENBQUFxRSxJQUFLLEdBQUczQixLQUFLLENBQUMyQixJQUFJLElBQUksU0FBUztjQUVwQyxJQUFJLENBQUN3RSxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUNoQyxLQUFLLENBQUM5RCxLQUFLLEdBQUcsSUFBSTtZQUNuQjs7VUFFRDtVQUFBNUQsT0FBQSxDQUFBb0UsT0FBQSxHQUFBQSxPQUFBIiwiaWdub3JlTGlzdCI6W119