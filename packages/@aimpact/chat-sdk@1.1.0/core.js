System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.1.0/session", "@aimpact/chat-sdk@1.1.0/startup", "@beyond-js/reactive@1.2.0/entities", "@beyond-js/reactive@1.2.0/database", "@beyond-js/kernel@0.1.9/core", "uuid@9.0.1", "@aimpact/chat-sdk@1.1.0/config"], function (_export, _context) {
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
    }, function (_aimpactChatSdk110Session) {
      dependency_3 = _aimpactChatSdk110Session;
    }, function (_aimpactChatSdk110Startup) {
      dependency_4 = _aimpactChatSdk110Startup;
    }, function (_beyondJsReactive120Entities) {
      dependency_5 = _beyondJsReactive120Entities;
    }, function (_beyondJsReactive120Database) {
      dependency_6 = _beyondJsReactive120Database;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
    }, function (_aimpactChatSdk110Config) {
      dependency_9 = _aimpactChatSdk110Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.0"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-katex", "3.0.1"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.4"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.1.0/core"
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
        hash: 1479018626,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./chats/item/index copy
      ***************************************/

      ims.set('./chats/item/index copy', {
        hash: 663536839,
        creator: function (require, exports) {
          // // ChatItem
          // import { Item } from '@beyond-js/reactive/entities';
          // import { Api } from '@aimpact/http-suite/api';
          // import { Message } from '../messages/item';
          // import { IMessage, IMessageSpecs } from '../interfaces/message';
          // import { Messages } from '../messages';
          // import { languages } from '@beyond-js/kernel/core';
          // import { IChat } from '../interfaces/chat';
          // import { sdkConfig } from '@aimpact/chat-sdk/startup';
          // import { ChatProvider } from './provider';
          // // chats/ea0572a8-ff07-4bf5-9962-16fc765603eb
          // export /*bundle*/ class _Chat extends Item<IChat> {
          // 	declare id: string;
          // 	#api: Api;
          // 	protected properties = [
          // 		'id',
          // 		'autoplay',
          // 		'name',
          // 		'userId',
          // 		'system',
          // 		'parent',
          // 		'category',
          // 		'language',
          // 		'usage',
          // 		'children',
          // 		'knowledgeBoxId',
          // 		'user',
          // 		'metadata'
          // 	];
          // 	localdb = false;
          // 	declare fetching: boolean;
          // 	declare triggerEvent: () => void;
          // 	#messages: Messages;
          // 	get messages() {
          // 		return this.#messages;
          // 	}
          // 	constructor({ id = undefined } = {}) {
          // 		super({ id, localdb: false, provider: ChatProvider });
          // 		this.#api = new Api(sdkConfig.api);
          // 		this.#messages = new Messages();
          // 		globalThis.chat = this;
          // 		// console.log(`chat is being exposed in console as chat`, id);
          // 	}
          // 	loadAll = async specs => {
          // 		await this.isReady;
          // 		const response = await this.load(specs);
          // 		const collection = this.#messages;
          // 		collection.on('change', this.triggerEvent);
          // 		if (response.data.messages?.length) {
          // 			await collection.setEntries(response.data.messages);
          // 		}
          // 		this.#messages = collection;
          // 		globalThis.m = collection;
          // 		globalThis.c = this;
          // 	};
          // 	async setAudioMessage(response) {
          // 		try {
          // 			const responseItem = new Message({ chat: this });
          // 			// await responseItem.saveMessage(response);
          // 			this.triggerEvent();
          // 			return responseItem;
          // 		} catch (e) {
          // 			console.error(e);
          // 		}
          // 	}
          // 	#currentAudio: Message;
          // 	/**
          // 	 * This method saves the audio locally to be able to reproduce it.
          // 	 * @param audio
          // 	 * @param transcription
          // 	 * @returns
          // 	 */
          // 	async saveAudioLocally(audio, transcription = undefined): Promise<Message> {
          // 		try {
          // 			const item = new Message({ chat: this });
          // 			const specs: IMessage = {
          // 				chat: { id: this.id },
          // 				chatId: this.id,
          // 				type: 'audio',
          // 				audio,
          // 				role: 'user',
          // 				language: this.language?.default ?? languages.current
          // 				// timestamp: Date.now()
          // 			};
          // 			if (transcription) {
          // 				specs.content = transcription;
          // 			}
          // 			this.#currentAudio = item;
          // 			// await item.saveMessage(specs);
          // 			// this.setOffline(false);
          // 			this.triggerEvent();
          // 			return item;
          // 		} catch (e) {
          // 			console.error(e);
          // 		}
          // 	}
          // 	async sendMessage(content: string | Blob) {
          // 		try {
          // 			this.fetching = true;
          // 			console.log(20, content);
          // 			const item = new Message({ chat: this });
          // 			let response = new Message({ chat: this });
          // 			// this.messages.add(item);
          // 			// await Promise.all([item.isReady, response.isReady]);
          // 			const onListen = async () => {
          // 				this.trigger(`message.${response.id}.updated`);
          // 				response.updateContent({ content: item.response });
          // 				response.triggerEvent();
          // 				this.triggerEvent();
          // 			};
          // 			const onEnd = () => {
          // 				response.updateContent({ content: item.response });
          // 				this.trigger(`message.${response.id}.ended`);
          // 				this.trigger(`message.${response.id}.updated`);
          // 				item.off('content.updated', onListen);
          // 			};
          // 			item.on('content.updated', onListen);
          // 			item.on('response.finished', onEnd);
          // 			const specs: IMessageSpecs = {
          // 				chatId: this.id,
          // 				systemId: response.id,
          // 				id: item.id,
          // 				// timestamp: Date.now(),
          // 				role: 'user'
          // 			};
          // 			if (typeof content === 'string') {
          // 				specs.content = content;
          // 			} else {
          // 				specs.multipart = true;
          // 				specs.audio = content;
          // 			}
          // 			item.publish(specs);
          // 			return { message: item, response };
          // 		} catch (e) {
          // 			console.error(e);
          // 		} finally {
          // 			this.fetching = false;
          // 		}
          // 	}
          // 	getMessage(id: string) {
          // 		return this.#messages.get(id);
          // 	}
          // }
          "use strict";
        }
      });

      /**********************************
      INTERNAL MODULE: ./chats/item/index
      **********************************/

      ims.set('./chats/item/index', {
        hash: 2464013776,
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
                localdb: false,
                provider: _provider.ChatProvider
              });
              this.#api = new _api.Api(_startup.sdkConfig.api);
              this.#messages = new _messages.Messages();
              this.#messages.on('new.message', () => this.triggerEvent('new.message'));
              globalThis.chat = this;
              if (!id) this.id = (0, _uuid.v4)();
              this.#listen();
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
                          content: action.data.transcription
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
              globalThis.m = collection;
              globalThis.c = this;
            };
            #onListen = () => {
              this.#response.content = this.#api.streamResponse;
              this.#response.set({
                content: this.#api.streamResponse
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
                  content
                });
                this.#currentMessage = item;
                const onFinish = response => {
                  this.trigger('response.finished');
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
                  role: 'system'
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
                  audio: message
                });
                this.#currentMessage = item;
                const onFinish = response => {
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
                  role: 'system'
                });
                this.messages.add(this.#response);
                this.#api.bearer(token).stream(uri, {
                  ...item.getProperties(),
                  multipart: true
                }).then(onFinish).catch(onError);
                globalThis.setTimeout(() => onFinish({}), 3000);
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
        hash: 3366219436,
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
                properties: ['id', 'chatId', 'audio', 'userId', 'role', 'content', 'usage', 'timestamp']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsInAiLCJBcGkiLCJzZGtDb25maWciLCJpdGVtcyIsImxvYWQiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImZpcmViYXNlVG9rZW4iLCJiZWFyZXIiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0IiwiRXJyb3IiLCJhZGRJdGVtIiwiaXRlbSIsInVuc2hpZnQiLCJ0cmlnZ2VyRXZlbnQiLCJleHBvcnRzIiwiQ2hhdENvbGxlY3Rpb25Qcm92aWRlciIsInBhcmVudCIsImxpc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2RhdGFiYXNlIiwiX2NvcmUiLCJfZW50aXRpZXMiLCJfaXRlbSIsIl9tZXNzYWdlcyIsIl9wcm92aWRlciIsIl91dWlkIiwiQ2hhdCIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwibG9jYWxkYiIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImlkIiwidW5kZWZpbmVkIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJNZXNzYWdlcyIsIm9uIiwiZ2xvYmFsVGhpcyIsImNoYXQiLCJ2NCIsImxpc3RlbiIsIiNsaXN0ZW4iLCJvbkxpc3RlbiIsImFjdGlvbnMiLCJmb3JFYWNoIiwiYWN0aW9uIiwiSlNPTiIsInBhcnNlIiwidHlwZSIsInNldCIsImNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvZmZFdmVudHMiLCIjb2ZmRXZlbnRzIiwib2ZmIiwibG9hZEFsbCIsInNwZWNzIiwiaXNSZWFkeSIsImNvbGxlY3Rpb24iLCJsZW5ndGgiLCJzZXRFbnRyaWVzIiwibSIsImMiLCIjb25MaXN0ZW4iLCJzdHJlYW1SZXNwb25zZSIsInRyaWdnZXIiLCJnZXREYXRhIiwiZ2V0UHJvcGVydGllcyIsInNlbmRNZXNzYWdlIiwiZmV0Y2hpbmciLCJ1cmkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJNZXNzYWdlIiwiY2hhdElkIiwib25GaW5pc2giLCJyZXNvbHZlIiwic2F2ZUxvY2FsbHkiLCJvbkVycm9yIiwiZXJyb3IiLCJyb2xlIiwiYWRkIiwic3RyZWFtIiwidGhlbiIsImNhdGNoIiwic2VuZEF1ZGlvIiwibWVzc2FnZSIsImF1ZGlvIiwibXVsdGlwYXJ0Iiwic2V0VGltZW91dCIsInRyYW5zY3JpYmUiLCJwb3N0IiwiZ2V0TWVzc2FnZSIsImV4aXN0aW5nRGF0YSIsIkRCTWFuYWdlciIsImRiIiwidGFibGUiLCJ1cGRhdGUiLCJwdXQiLCJsb2FkTG9jYWxseSIsImNyZWF0ZSIsIm5hbWUiLCJwcm9qZWN0SWQiLCJ1aWQiLCJtZXRhZGF0YSIsInByb21wdCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsIm1hcCIsIk1hcCIsInB1c2giLCJsb2NhbEZpZWxkcyIsInBhcnNlZENvbnRlbnQiLCJyZWFjdGl2ZVByb3BzIiwicmVhZHkiXSwic291cmNlcyI6WyIvY2hhdHMvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGF0cy9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0cy9pdGVtL2luZGV4IGNvcHkudHMiLCIvY2hhdHMvaXRlbS9pbmRleC50cyIsIi9jaGF0cy9pdGVtL3Byb3ZpZGVyLnRzIiwiL2NoYXRzL21lc3NhZ2VzL2luZGV4LnRzIiwiL2NoYXRzL21lc3NhZ2VzL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLElBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFF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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFDQTtVQUNBO1VBRUE7VUFFQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFQTtVQUNBO1VBQ0E7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFQTtVQUNBO1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwS0EsSUFBQUMsU0FBQSxHQUFBakMsT0FBQTtVQUNBLElBQUFrQyxLQUFBLEdBQUFsQyxPQUFBO1VBRUEsSUFBQW1DLFNBQUEsR0FBQW5DLE9BQUE7VUFDQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBb0MsS0FBQSxHQUFBcEMsT0FBQTtVQUNBLElBQUFxQyxTQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQXNDLFNBQUEsR0FB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