System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/reactive@0.0.1/model", "@aimpact/chat-sdk@1.4.1/voice", "@aimpact/chat-sdk@1.4.1/wrapper", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/agents-api@0.4.1/realtime/client", "@aimpact/agents-api@0.4.1/realtime/client/conversation", "@aimpact/agents-api@0.4.1/realtime/audio/recorder", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/chat-sdk@1.4.1/messages", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/chat-sdk@1.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/agents-api@0.4.1/realtime/widgets/state"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, AudioManager, Chat, AgentsChatContainer, ChatContext, useChatContext, AgentsChatPanel, AgentsChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, IAgentsContainerProps, __beyond_pkg, hmr;
  _export({
    AudioManager: void 0,
    Chat: void 0,
    AgentsChatContainer: void 0,
    ChatContext: void 0,
    useChatContext: void 0,
    AgentsChatPanel: void 0,
    AgentsChatInput: void 0,
    PermissionsErrorModal: void 0,
    RecordingButton: void 0,
    PermissionsModal: void 0,
    IAgentsContainerProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_aimpactReactive001Model) {
      dependency_2 = _aimpactReactive001Model;
    }, function (_aimpactChatSdk141Voice) {
      dependency_3 = _aimpactChatSdk141Voice;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_4 = _aimpactChatSdk141Wrapper;
    }, function (_aimpactChatSdk141Core) {
      dependency_5 = _aimpactChatSdk141Core;
    }, function (_aimpactChatSdk141Session) {
      dependency_6 = _aimpactChatSdk141Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAgentsApi041RealtimeClient) {
      dependency_8 = _aimpactAgentsApi041RealtimeClient;
    }, function (_aimpactAgentsApi041RealtimeClientConversation) {
      dependency_9 = _aimpactAgentsApi041RealtimeClientConversation;
    }, function (_aimpactAgentsApi041RealtimeAudioRecorder) {
      dependency_10 = _aimpactAgentsApi041RealtimeAudioRecorder;
    }, function (_beyondJsKernel019Core) {
      dependency_11 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_14 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactChatSdk141Messages) {
      dependency_15 = _aimpactChatSdk141Messages;
    }, function (_pragmateUi100Beta7Components) {
      dependency_16 = _pragmateUi100Beta7Components;
    }, function (_aimpactChatSdk141ComponentsIcons) {
      dependency_17 = _aimpactChatSdk141ComponentsIcons;
    }, function (_pragmateUi100Beta7Form) {
      dependency_18 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_19 = _pragmateUi100Beta7Modal;
    }, function (_framerMotion2) {
      dependency_20 = _framerMotion2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_21 = _pragmateUi100Beta7Image;
    }, function (_aimpactAgentsApi041RealtimeWidgetsState) {
      dependency_22 = _aimpactAgentsApi041RealtimeWidgetsState;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.1/chat-component",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/reactive/model', dependency_2], ['@aimpact/chat-sdk/voice', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/agents-api/realtime/client', dependency_8], ['@aimpact/agents-api/realtime/client/conversation', dependency_9], ['@aimpact/agents-api/realtime/audio/recorder', dependency_10], ['@beyond-js/kernel/core', dependency_11], ['react', dependency_12], ['pragmate-ui/icons', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat-sdk/messages', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/chat-sdk/components/icons', dependency_17], ['pragmate-ui/form', dependency_18], ['pragmate-ui/modal', dependency_19], ['framer-motion', dependency_20], ['pragmate-ui/image', dependency_21], ['@aimpact/agents-api/realtime/widgets/state', dependency_22]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.4.1/chat-component.code');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./interfaces/messages
      *************************************/
      ims.set('./interfaces/messages', {
        hash: 775952468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/audio
      *****************************/

      ims.set('./store/audio', {
        hash: 538943189,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioManager = void 0;
          var _model = require("@aimpact/reactive/model");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _recorder = require("./recorder");
          /* bundle */
          class AudioManager extends _model.ReactiveModel {
            #parent;
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #players = {
              web: _voice.Voice,
              lab: _voice.VoiceLab // brings support to manage voice lab audios
            };
            #player = 'web';
            get player() {
              return this.#currentPlayer;
            }
            #currentPlayer;
            constructor(parent, language) {
              super({});
              this.#recorder = new _recorder.Recorder();
              this.#parent = parent;
              this.reactiveProps(['autoplay']);
              language = language ?? _wrapper.AppWrapper.language;
              this.#currentPlayer = new this.#players.web({
                language,
                rate: _wrapper.AppWrapper.audioSpeed
              });
              _wrapper.AppWrapper.on('app.settings.change', this.listenAppChanges);
            }
            listenAppChanges = () => {
              const {
                rate,
                language
              } = _wrapper.AppWrapper;
              this.#currentPlayer.set({
                rate,
                language
              });
            };
            selectPlayer(name) {
              if (!this.#players[name]) throw new Error(`Player ${name} not found`);
              this.#player = name;
              this.trigger('change');
            }
          }
          exports.AudioManager = AudioManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 4040605934,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@aimpact/reactive/model");
          var _core = require("@aimpact/chat-sdk/core");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _audio = require("./audio");
          var _session = require("@aimpact/chat-sdk/session");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _realtime = require("./realtime");
          class StoreManager extends _model.ReactiveModel {
            #EXTENSIONS = ['chat-intro'];
            #messages;
            get messages() {
              return this.#messages?.items;
            }
            #name;
            get name() {
              return this.#name;
            }
            #category;
            get category() {
              return this.#category;
            }
            #chat;
            get chat() {
              return this.#chat;
            }
            get model() {
              return this.#chat;
            }
            #chats = _wrapper.AppWrapper.chats;
            get chats() {
              return this.#chats.items ?? [];
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get textsModel() {
              return this.#texts;
            }
            get texts() {
              return this.#texts?.value;
            }
            #audio;
            get audioManager() {
              return this.#audio;
            }
            #processTranscription = false;
            get proccessTranscription() {
              return this.#processTranscription;
            }
            #selectedModel = 'GPT 4';
            get selectedModel() {
              return this.#selectedModel;
            }
            set selectedModel(model) {
              this.#selectedModel = model;
            }
            #notFound;
            get notFound() {
              return this.#notFound;
            }
            set notFound(notFound) {
              this.#notFound = notFound;
            }
            #currentMessage;
            get currentMessage() {
              return this.#currentMessage;
            }
            set currentMessage(message) {
              if (message?.id === this.#currentMessage?.id) return;
              this.#currentMessage = message;
            }
            #disabled;
            get disabled() {
              return this.#disabled;
            }
            set disabled(disabled) {
              if (this.#disabled === disabled) return;
              this.#disabled = disabled;
              this.triggerEvent('change');
            }
            #extensions = new Map();
            get extensions() {
              return this.#extensions;
            }
            #id;
            get ready() {
              return super.ready && this.#texts.ready && this.#realtime?.ready;
            }
            #realtime;
            get realtime() {
              return this.#realtime;
            }
            #onListenChat;
            #model;
            constructor({
              id,
              language,
              realtime = false,
              model,
              onListenChat
            }) {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#id = id;
              this.reactiveProps(['waitingResponse', 'autoplay', 'language']);
              this.autoplay = true;
              this.language = language;
              this.#audio = new _audio.AudioManager(this, language);
              this.#realtime = new _realtime.RealtimeStore(realtime);
              this.#realtime.on('change', this.triggerEvent);
              this.#onListenChat = onListenChat;
              this.#model = model;
              globalThis.chatStore = this;
              if (!model) {
                this.load(this.#id);
              } else {
                this.processModel();
              }
            }
            processModel() {
              this.#chat = this.#model;
              chat.on('change', this.triggerEvent);
              this.#messages = this.#chat.messages;
              this.#realtime.chatId = this.#model.id;
              _wrapper.AppWrapper.currentChat = this.#model;
              const language = this.language ?? _wrapper.AppWrapper.language;
              const languages = {
                en: 'en-US',
                es: 'es-MX'
              };
              this.audioManager.player.set({
                language: languages[language]
              });
              /* usar propiedad role para identificar owner del mensaje*/
              // chat.on('change', () => this.triggerEvent('new.message'));
              this.fetching = false;
              super.ready = true;
              this.notFound = false;
              this.trigger('change');
            }
            load = async id => {
              if (!id) {
                console.warn(`you're tring to load a chat without an id`);
                super.ready = true;
                this.notFound = true;
                return;
              }
              if (!_session.sessionWrapper.user?.logged) {
                _session.sessionWrapper.on('login', this.load);
                return;
              }
              this.fetching = true;
              const chat = new _core.Chat({
                id
              });
              if (this.#onListenChat) {
                chat.on('action.received', this.#onListenChat);
              }
              chat.on('change', this.triggerEvent);
              this.#realtime;
              this.#chat = chat;
              globalThis.chat = chat;
              this.#messages = chat.messages;
              await chat.loadAll({
                id
              });
              this.#realtime.chatId = id;
              globalThis.chat = chat;
              _wrapper.AppWrapper.currentChat = chat;
              if (!chat.found) {
                this.fetching = false;
                super.ready = true;
                this.notFound = true;
                return;
              }
              const language = this.language ?? _wrapper.AppWrapper.language;
              const languages = {
                en: 'en-US',
                es: 'es-MX'
              };
              this.audioManager.player.set({
                language: languages[language]
              });
              /* usar propiedad role para identificar owner del mensaje*/
              // chat.on('change', () => this.triggerEvent('new.message'));
              this.fetching = false;
              super.ready = true;
              this.notFound = false;
              this.trigger('change');
            };
            async sendMessage(content) {
              try {
                performance.mark('start');
                this.#currentMessage = undefined;
                if (typeof content === 'string' && [undefined, '', null].includes(content)) return;
                this.fetching = true;
                // return http.response(data);
                return this.#chat.sendMessage(content);
              } catch (e) {
                // return http.error(400, message);
                console.error(e);
              }
            }
            async sendAudio(content) {
              try {
                performance.mark('start');
                this.#currentMessage = undefined;
                this.fetching = true;
                return this.#chat.sendAudio(content);
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            transcribe(audio) {
              return this.#chat.transcribe(audio);
            }
            unmount() {
              this.#audio.player?.stop();
            }
            clean() {
              this.fetching = false;
              super.ready = false;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /********************************
      INTERNAL MODULE: ./store/realtime
      ********************************/

      ims.set('./store/realtime', {
        hash: 3690484795,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RealtimeStore = void 0;
          var _model = require("@aimpact/reactive/model");
          var _client = require("@aimpact/agents-api/realtime/client");
          var _conversation = require("@aimpact/agents-api/realtime/client/conversation");
          var _recorder = require("@aimpact/agents-api/realtime/audio/recorder");
          var _session = require("@aimpact/chat-sdk/session");
          class RealtimeStore extends _model.ReactiveModel {
            isStore = false;
            #conversation;
            get conversation() {
              return this.#conversation;
            }
            #client;
            get client() {
              return this.#client;
            }
            #validate = 0;
            #interval;
            #audioDevices = [];
            get audioDevices() {
              return this.#audioDevices;
            }
            constructor(available) {
              super({
                properties: ['muted', 'deviceSelected', 'available', 'duration']
              });
              this.duration = 0;
              if (!available) {
                this.ready = true;
                this.available = false;
                return;
              }
              this.#conversation = new _conversation.Conversation('123');
              this.#client = new _client.ClientSession({
                vad: null
              });
              this.#client.conversation.set(this.#conversation);
              this.muted = true;
              this.available = true;
              this.init();
            }
            async init() {
              this.#client.on('session.open', this.invalidate);
              this.#client.on('session.created', this.invalidate);
              this.#client.on('session.ready', this.invalidate);
              this.#client.on('session.close', this.invalidate);
              this.#client.on('session.created', this.initiate);
              this.#client.on('session.ready', this.isReady);
              this.#client.on('session.close', this.end);
              await _recorder.devices.prepare();
              this.#audioDevices = [..._recorder.devices.values()];
              this.ready = true;
              this.selectDevice(_recorder.devices.default?.id || '');
              // const token = `eyJhbGciOiJSUzI1NiIsImtpZCI6IjgxYjUyMjFlN2E1ZGUwZTVhZjQ5N2UzNzVhNzRiMDZkODJiYTc4OGIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRsOpbGl4IFRvdmFyIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBY0hUdGV3WkFlSC0yOXAzUUotcndFdVV1TVRBampTNEZna09zZkMwdjFtPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2FpbXBhY3QtcGFydG5lcnMtZGV2IiwiYXVkIjoiYWltcGFjdC1wYXJ0bmVycy1kZXYiLCJhdXRoX3RpbWUiOjE3MzY1NDgzNDUsInVzZXJfaWQiOiI4Y0dmMmpPbERMWlJDWTZyUVdXc0xuaGpNQjYyIiwic3ViIjoiOGNHZjJqT2xETFpSQ1k2clFXV3NMbmhqTUI2MiIsImlhdCI6MTczODA5OTE1OSwiZXhwIjoxNzM4MTAyNzU5LCJlbWFpbCI6ImZlbGl4QGJleW9uZGpzLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTEwNDcxNTE1MzE1OTYzOTg4NjA5Il0sImVtYWlsIjpbImZlbGl4QGJleW9uZGpzLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.CHkrLTBQSvaPtgcqKdrksI2hi4nah3gJe_Kz7MIoVSICEXO1BLJXMDzENTbCY9N_d2Cmiw5Pz1SnejQXSsxIbBGnsEDclGS2Jpm55-IkMVfjqxOucYjfDfs1xiSHbtOkLf2D9lGTPfPHaEc07c4nQwRabcRsiNkLjFqoitGCPvR0Ej6FtzV2EbAgQITdsyXYplK8RC6ZCGPQWofzXCMoBc-i_xDBWLG9qTrpnnAvc9_SDCwPEQMqTJgmvDZT6NxItAZOq3fIb83-MZ2m4o-9HKwmk-oYDhVUlyA1l4p-lOaBGGXF2ePqunldXhoVWwg24o5PH_a_fZ0E63S09G7whA`;
            }
            selectDevice(id) {
              this.deviceSelected = id;
              const device = this.#audioDevices.find(device => device.id === id);
              this.#client.recorder.device = device;
            }
            initiate = async () => {
              const token = await _session.sessionWrapper.user.firebaseToken;
              if (!this.chatId) {
                console.error('Chat id is not set');
                return;
              }
              this.#client.update({
                conversation: {
                  id: this.chatId
                },
                token
              });
              this.onmic();
              this.#interval = setInterval(() => this.duration++, 1000);
            };
            isReady = () => {
              console.warn('ready');
              this.#interval = setInterval(() => this.duration++, 1000);
            };
            end = () => {
              clearInterval(this.#interval);
              this.duration = 0;
            };
            clean() {
              this.#client.off('session.open', this.invalidate);
              this.#client.off('session.created', this.invalidate);
              this.#client.off('session.ready', this.invalidate);
              this.#client.off('session.close', this.invalidate);
            }
            invalidate = () => {
              this.#validate++;
              this.trigger('invalidated');
              this.trigger('change');
            };
            call = () => {
              if (this.#client.status === 'closed') {
                this.#client.connect();
                this.invalidate(); // To update calling state to 'connecting'
              }
              if (['open', 'created'].includes(this.#client.status)) {
                this.#client.close();
                this.invalidate(); // To update calling state to 'closing'
              }
            };
            onmic = () => {
              this.muted = !this.muted;
              // values.muted = muted;
              // console.log(2, this.muted, this.#client.recorder);
              this.muted ? this.#client.recorder.stop() : this.#client.recorder.record();
            };
          }
          exports.RealtimeStore = RealtimeStore;
        }
      });

      /********************************
      INTERNAL MODULE: ./store/recorder
      ********************************/

      ims.set('./store/recorder', {
        hash: 898425056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@aimpact/reactive/model");
          class Recorder extends _model.ReactiveModel {
            #initialised = false;
            #stream;
            #mediaRecorder;
            #chunks = [];
            get chunks() {
              return this.#chunks;
            }
            #error;
            #audio;
            get audio() {
              return this.#audio;
            }
            #recording = false;
            #initPromise;
            #stopPromise;
            #recordingPromise;
            get isSafari() {
              return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            }
            constructor() {
              super();
              this.init();
              globalThis.recorder = this;
            }
            async hasPermissions() {
              try {
                const stream = await navigator.mediaDevices.getUserMedia({
                  audio: true
                });
                stream.getTracks().forEach(track => track.stop());
                return true;
              } catch (e) {
                this.#error = e.message;
                return false;
              }
            }
            async init() {
              if (this.#initialised && this.#stream?.active) return;
              try {
                this.#stream = await navigator.mediaDevices.getUserMedia({
                  audio: true
                });
                this.#initialised = true;
              } catch (error) {
                this.#error = error.message;
                throw error;
              }
            }
            async record() {
              if (this.#recording) {
                throw new Error('Wait for recorder to stop before starting again.');
              }
              // Siempre inicializa un nuevo stream
              await this.init();
              const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4';
              this.#mediaRecorder = new MediaRecorder(this.#stream, {
                mimeType
              });
              this.#chunks = [];
              this.#mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) this.#chunks.push(event.data);
              };
              this.#stopPromise = new _core.PendingPromise();
              this.#mediaRecorder.onstop = () => {
                this.#audio = new Blob(this.#chunks, {
                  type: mimeType
                });
                this.#stopPromise.resolve(this.#audio);
                this.#recording = false;
                this.trigger('change');
              };
              this.#mediaRecorder.start(this.isSafari ? 1000 : undefined);
              this.#recording = true;
              this.trigger('change');
            }
            async stop() {
              if (!this.#recording) {
                throw new Error('Recorder is not currently recording.');
              }
              this.#mediaRecorder.stop();
              // Limpieza segura del stream después de detener la grabación
              this.#stream.getTracks().forEach(track => track.stop());
              this.#initialised = false; // Forzar re-obtención del stream en la próxima grabación
              return this.#stopPromise;
            }
          }
          exports.Recorder = Recorder;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/types
      *****************************/

      ims.set('./store/types', {
        hash: 610265513,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/chat/back-arrow
      ***************************************/

      ims.set('./views/chat/back-arrow', {
        hash: 3094757389,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BackArrow = BackArrow;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          function BackArrow({
            store,
            separator
          }) {
            const icon = _react.default.useRef(null);
            const {
              attributes,
              scrollPosition
            } = (0, _context.useChatContext)();
            const ref = _react.default.useRef(null);
            (0, _hooks.useBinder)([store], () => globalThis.setTimeout(() => {
              const container = ref.current?.closest('.chat-control__container')?.querySelector('.chat__content');
              if (!container) return;
              const distanceFromBottom = container.scrollHeight - container.clientHeight - container.scrollTop;
              if (distanceFromBottom <= 100) {
                ref.current.classList.remove('show');
                goToBottom();
              } else {
                ref.current.classList.add('show');
              }
            }, 100), 'new.message');
            const goToBottom = () => {
              separator.current?.scrollIntoView({
                block: 'end',
                behavior: 'smooth'
              });
            };
            _react.default.useEffect(() => {
              const container = ref.current.closest('.chat-control__container').querySelector('.chat__content');
              const handleScroll = () => {
                // Calculate the distance from the bottom
                if (!container) return;
                const distanceFromBottom = container.scrollHeight - container.clientHeight - container.scrollTop;
                // C
                if (distanceFromBottom <= 100) {
                  ref.current.classList.remove('show');
                } else {
                  ref.current.classList.add('show');
                }
              };
              container.addEventListener('scroll', handleScroll);
              return () => {
                container?.removeEventListener('scroll', handleScroll);
              };
            }, []);
            let cls = `scroll-bottom show circle`;
            if (attributes.has('container')) cls += `scroll-bottom--${attributes.get('container')}`;
            const clsContainer = `container__icon ${attributes.has('container') ? ` container--${attributes.get('container')}` : ''}`;
            return _react.default.createElement("div", {
              className: clsContainer,
              ref: ref
            }, _react.default.createElement(_icons.IconButton, {
              ref: icon,
              icon: 'backArrow',
              variant: 'tertiary',
              className: cls,
              onClick: goToBottom
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/chat/global
      ***********************************/

      ims.set('./views/chat/global', {
        hash: 553480393,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/chat/index
      **********************************/

      ims.set('./views/chat/index', {
        hash: 3590190523,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _context = require("../context");
          var _messages = require("@aimpact/chat-sdk/messages");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function Chat() {
            const [reader] = _react.default.useState(false);
            const separator = _react.default.useRef(null);
            const {
              store,
              texts,
              systemIcon,
              empty
            } = (0, _context.useChatContext)();
            const {
              messages
            } = store;
            const [, setMessages] = _react.default.useState(messages?.length ?? [].length);
            const [updateScroll, setUpdateScroll] = _react.default.useState(performance.now());
            let cls = `chat-control__container${reader ? 'chat-control__container  chat-control__container--reader' : ''}`;
            const onNewMessage = () => {
              setMessages(store.messages.length);
              globalThis.setTimeout(() => {
                separator.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'end'
                });
              }, 100);
              // globalThis.scrollTo(0, document.body.scrollHeight);
            };
            _react.default.useEffect(() => {
              globalThis.setTimeout(() => {
                separator.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'end'
                });
              }, 100);
            }, [updateScroll]);
            (0, _hooks.useBinder)([store.chat], onNewMessage, ['new.message', 'response.finished']);
            let clsContent = `chat__content`;
            if (!store.messages.length) {
              const Control = empty ? empty : _react.default.createElement(_react.default.Fragment, null, "No hay contenido");
              //@ts-ignore
              return _react.default.createElement("div", {
                className: cls
              }, _react.default.createElement(Control, null));
            }
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("section", {
              className: clsContent
            }, _react.default.createElement(_messages.Messages, {
              chat: store.chat,
              setUpdateScroll: setUpdateScroll,
              player: store.audioManager.player,
              current: store.currentMessage,
              systemIcon: systemIcon,
              messages: store?.messages ?? [],
              texts: texts
            }), _react.default.createElement("div", {
              ref: separator,
              className: "separator"
            })));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/chat/skeleton
      *************************************/

      ims.set('./views/chat/skeleton', {
        hash: 286511885,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatSkeleton = ChatSkeleton;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          function ChatSkeleton() {
            const {
              store
            } = (0, _context.useChatContext)();
            return _react.default.createElement("div", {
              className: "chat-container"
            }, _react.default.createElement(_components.Spinner, {
              active: true
            }));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/chat/use-extension
      ******************************************/

      ims.set('./views/chat/use-extension', {
        hash: 2889823330,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useExtension = useExtension;
          var _react = require("react");
          var _context = require("../context");
          function useExtension(name) {
            const [ready, setReady] = _react.default.useState(false);
            const ref = _react.default.useRef(null);
            const {
              store: {
                extensions
              }
            } = (0, _context.useChatContext)();
            const webComponentName = extensions.get(name)?.control;
            _react.default.useEffect(() => {
              const onReady = event => setReady(true);
              if (!ref?.current) return;
              ref.current.addEventListener('ready', onReady);
              return () => ref.current?.removeEventListener('ready', onReady);
            }, [ref?.current]);
            return [ref, ready || !webComponentName, webComponentName];
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/container
      *********************************/

      ims.set('./views/container', {
        hash: 714895254,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentsChatContainer = AgentsChatContainer;
          var _react = require("react");
          var _useManager = require("./use-manager");
          var _context = require("./context");
          var _container = require("./realtime/container");
          /*bundle */
          function AgentsChatContainer({
            children,
            icon,
            autoplay,
            skeleton,
            language,
            empty,
            model,
            player,
            onListenChat,
            ...props
          }) {
            const [scrollPosition, setScrollPosition] = _react.default.useState('top');
            const [showRealtime, setShowRealtime] = _react.default.useState(false);
            const {
              ready,
              store
            } = (0, _useManager.useManager)({
              id: props.id,
              language,
              onListenChat,
              realtime: props.realtime,
              model
            });
            const obj = store ? store : {};
            const SkeletonControl = skeleton;
            if (!ready && skeleton) return _react.default.createElement(SkeletonControl, null);
            if (!ready) return null;
            const {
              messages,
              texts
            } = obj;
            const contextValue = {
              setScrollPosition: value => {
                if (!value) console.trace('setScrollPosition called with no value');
                setScrollPosition(value);
              },
              scrollPosition,
              store,
              ready: store.ready,
              texts: store.texts,
              recorder: store?.audioManager?.recorder,
              autoplay,
              systemIcon: icon,
              empty,
              realtime: props.realtime,
              setShowRealtime,
              skeleton,
              messages,
              player,
              attributes: props.attributes
            };
            return _react.default.createElement(_context.ChatContext.Provider, {
              value: contextValue
            }, children, _react.default.createElement(_container.RealtimePanel, {
              isVisible: showRealtime
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1031521864,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatContext = exports.ChatContext = void 0;
          var _react = require("react");
          /*bundle */
          const ChatContext = exports.ChatContext = _react.default.createContext({});
          /*bundle */
          const useChatContext = () => _react.default.useContext(ChatContext);
          exports.useChatContext = useChatContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2366537853,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentsChatPanel = AgentsChatPanel;
          var _react = require("react");
          var _chat = require("./chat");
          var _context = require("./context");
          var _skeleton = require("./chat/skeleton");
          var _notFound = require("./not-found");
          /*bundle*/ /**
                      * Main component of the chat web component
                      * @param param0 =
                      * @returns
                      */
          function AgentsChatPanel() {
            const {
              ready,
              store
            } = (0, _context.useChatContext)();
            if (store.notFound && ready) return _react.default.createElement(_notFound.ChatNotFound, null);
            if (!ready) return _react.default.createElement(_skeleton.ChatSkeleton, null);
            return _react.default.createElement(_chat.Chat, null);
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/input/action-button
      *******************************************/

      ims.set('./views/input/action-button', {
        hash: 3507527438,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputActionButton = InputActionButton;
          var _react = require("react");
          var _recording = require("./recording");
          var _icons = require("@aimpact/chat-sdk/components/icons");
          var _context = require("./context");
          function InputActionButton({
            buttonIsDisabled
          }) {
            const {
              onSubmit,
              text
            } = (0, _context.useInputContext)();
            if (!!text.length) {
              return _react.default.createElement("span", {
                className: "input__icon  input__icon--right"
              }, _react.default.createElement(_icons.AppIconButton, {
                icon: "arrowUpward",
                className: "circle",
                variant: "primary",
                onClick: onSubmit,
                disabled: buttonIsDisabled
              }));
            }
            return _react.default.createElement("span", {
              className: "input__icon  input__icon--right"
            }, _react.default.createElement(_recording.RecordingButton, null));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/input/context
      *************************************/

      ims.set('./views/input/context', {
        hash: 4109674778,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInputContext = exports.InputContext = void 0;
          var _react = require("react");
          const InputContext = exports.InputContext = _react.default.createContext(null);
          const useInputContext = () => _react.default.useContext(InputContext);
          exports.useInputContext = useInputContext;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/input/hooks/use-input-form
      **************************************************/

      ims.set('./views/input/hooks/use-input-form', {
        hash: 610095468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInputForm = useInputForm;
          var _react = require("react");
          var _context = require("../../context");
          function useInputForm() {
            const {
              store,
              recorder
            } = (0, _context.useChatContext)();
            const [recording, setRecording] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const [text, setText] = _react.default.useState('');
            const sendAudio = async event => {
              setFetching(true);
              event.preventDefault();
              event.stopPropagation();
              const audio = await recorder.stop();
              store.sendAudio(audio);
              setRecording(!recording);
              setFetching(false);
            };
            const handleSend = async event => {
              try {
                event?.stopPropagation();
                setText('');
                setFetching(true);
                await store.sendMessage(text);
                setFetching(false);
              } catch (e) {
                console.error('error', e);
              }
            };
            const onSubmit = !!text.length ? handleSend : sendAudio;
            return {
              recording,
              text,
              setText,
              setFetching,
              setRecording,
              fetching,
              onSubmit
            };
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/input/index
      ***********************************/

      ims.set('./views/input/index', {
        hash: 358337278,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentsChatInput = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _textInput = require("./text-input");
          var _actionButton = require("./action-button");
          var _context2 = require("../context");
          var _useInputForm = require("./hooks/use-input-form");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          const AgentsChatInput = ({
            isWaiting = false,
            autoTranscribe = false,
            disabled = false,
            onClick
          }) => {
            const [waiting, setWaiting] = _react.default.useState(false);
            const {
              store,
              recorder,
              setShowRealtime,
              realtime
            } = (0, _context2.useChatContext)();
            const {
              text,
              setText,
              onSubmit,
              fetching,
              recording,
              setRecording,
              setFetching
            } = (0, _useInputForm.useInputForm)();
            (0, _hooks.useBinder)([store], () => {
              setWaiting(store.waitingResponse);
            });
            const isFetching = fetching || waiting || isWaiting;
            const isDisabled = store.disabled || disabled;
            const contextValue = {
              store,
              onSubmit,
              recorder,
              autoTranscribe,
              fetching,
              setText,
              setRecording,
              recording,
              text,
              setFetching,
              disabled: isDisabled
            };
            _react.default.useEffect(() => {}, [fetching]);
            const attrs = {
              disabled: disabled || store.disabled
            };
            const buttonIsDisabled = attrs.disabled || store.waitingResponse || recording;
            let cls = `chat-input-container ${isFetching ? 'is-fetching' : ''} ${isDisabled ? 'is-disabled' : ''}`;
            const containerAttrs = {
              className: cls
            };
            const controlAttrs = {
              onClick,
              className: `chat-input-form ${isDisabled ? 'is-disabled' : ''}`
            };
            if (['', undefined, null].includes(text.replaceAll('\n', '')) || !text.trim().length) attrs.disabled = true;
            const onClickSpeech = () => {
              setShowRealtime(true);
              store.realtime.call();
            };
            return _react.default.createElement(_context.InputContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit,
              ...controlAttrs
            }, _react.default.createElement("div", {
              ...containerAttrs
            }, _react.default.createElement(_textInput.TextInput, {
              text: text,
              setFetching: setFetching,
              fetching: isFetching,
              setText: setText,
              handleSend: onSubmit,
              disabled: isDisabled
            }), _react.default.createElement("div", {
              className: "input-chat__actions"
            }, realtime && _react.default.createElement(_icons.IconButton, {
              icon: "speech",
              onClick: onClickSpeech
            }), _react.default.createElement(_actionButton.InputActionButton, {
              buttonIsDisabled: buttonIsDisabled
            })))));
          };
          exports.AgentsChatInput = AgentsChatInput;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/input/recording/error-modal
      ***************************************************/

      ims.set('./views/input/recording/error-modal', {
        hash: 1828955527,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsErrorModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          /*bundle*/
          const PermissionsErrorModal = ({
            show,
            onClose
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useChatContext)();
            const {
              title,
              description
            } = texts.permissions.error;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              onClose: onClose,
              centered: true
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("h3", null, title)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsErrorModal = PermissionsErrorModal;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/input/recording/index
      *********************************************/

      ims.set('./views/input/recording/index', {
        hash: 1575559207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _player = require("./player");
          var _context = require("../context");
          var _modal = require("./modal");
          var _errorModal = require("./error-modal");
          /*bundle*/
          const RecordingButton = ({
            disabled = false
          }) => {
            const {
              recorder,
              recording,
              setRecording
            } = (0, _context.useInputContext)();
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [showModal, setShowModal] = (0, _react.useState)(false);
            const [error, setError] = (0, _react.useState)(false);
            const [, setHasPermission] = (0, _react.useState)(globalThis?.localStorage.getItem('aimpact.recording.permission'));
            const onRecord = async () => {
              try {
                await recorder.record();
                setRecording(!recording);
              } catch (e) {
                setError(true);
              }
            };
            const getUserMedia = () => {
              recorder.hasPermissions().then(() => {
                globalThis?.localStorage.setItem('aimpact.recording.permission', 'true');
                setHasPermission('true');
              }).catch(error => {
                console.log('permisos no concedidos');
                setError(true);
              });
            };
            const playAction = async event => {
              try {
                event.preventDefault();
                setFetching(true);
                const permissions = await recorder.hasPermissions();
                if (!permissions) {
                  setShowModal(true);
                  return;
                }
                onRecord();
              } catch (e) {
                setError(true);
              } finally {
                setFetching(false);
              }
            };
            const onClose = event => {
              setFetching(false);
              setShowModal(false);
            };
            const onCloseError = () => setError(false);
            const isDisabled = disabled || fetching;
            if (recording) return _react.default.createElement(_player.Player, null);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.IconButton, {
              icon: "mic",
              onClick: playAction,
              disabled: isDisabled
            }), _react.default.createElement(_modal.PermissionsModal, {
              show: showModal,
              onClose: onClose,
              onConfirm: getUserMedia
            }), _react.default.createElement(_errorModal.PermissionsErrorModal, {
              show: error,
              onClose: onCloseError
            }));
          };
          exports.RecordingButton = RecordingButton;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/input/recording/modal
      *********************************************/

      ims.set('./views/input/recording/modal', {
        hash: 1743184360,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          /*bundle*/
          const PermissionsModal = ({
            show,
            onClose,
            onConfirm
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useChatContext)();
            const subtitle = texts.permissions.title;
            const description = texts.permissions.description;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              onClose: onClose,
              centered: true,
              onConfirm: onConfirm
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("header", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("h3", null, subtitle), _react.default.createElement("span", {
              className: "intro__modal-text p2"
            }, texts.permissions.intro)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsModal = PermissionsModal;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/input/recording/player
      **********************************************/

      ims.set('./views/input/recording/player', {
        hash: 3257244478,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Player = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _timer = require("../timer");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("@aimpact/chat-sdk/components/icons");
          const Player = () => {
            const {
              recorder,
              setRecording,
              autoTranscribe,
              store,
              setText,
              setFetching
            } = (0, _context.useInputContext)();
            const [processing, setProcessing] = _react.default.useState(false);
            const [disabled, setDisabled] = _react.default.useState(true);
            const cancel = async event => {
              event.preventDefault();
              await recorder.stop();
              setRecording(false);
            };
            _react.default.useEffect(() => {
              setTimeout(() => {
                setDisabled(false);
              }, 1000);
            }, []);
            const transcribe = async () => {
              setProcessing(true);
              const audio = await recorder.stop();
              const transcription = await store.transcribe(audio);
              if (transcription.error) {
                console.error(transcription.error);
                return;
              }
              setText(transcription.data.text);
              setRecording(false);
            };
            const onSubmit = async event => {
              event.preventDefault();
              event.stopPropagation();
              try {
                setFetching(true);
                if (autoTranscribe) return transcribe();
                const audio = await recorder.stop();
                store.sendAudio(audio);
                setRecording(false);
                setFetching(false);
              } catch (e) {
                console.error(e);
              }
            };
            return _react.default.createElement("div", {
              className: "recording-player__container"
            }, _react.default.createElement(_icons.IconButton, {
              className: "circle",
              icon: "delete",
              onClick: cancel
            }), _react.default.createElement(_timer.Timer, {
              action: "start"
            }), _react.default.createElement("div", {
              className: "recording-button__container"
            }, processing ? _react.default.createElement(_components.Button, null, _react.default.createElement(_components.Spinner, {
              active: true
            })) : _react.default.createElement(_icons2.AppIconButton, {
              icon: "arrowUpward",
              className: "circle",
              variant: "primary",
              onClick: onSubmit,
              disabled: disabled
            })));
          };
          exports.Player = Player;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/input/text-input
      ****************************************/

      ims.set('./views/input/text-input', {
        hash: 3741333897,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextInput = TextInput;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          function TextInput({
            setFetching,
            setText,
            handleSend,
            fetching,
            text,
            disabled
          }) {
            const {
              store
            } = (0, _context.useInputContext)();
            const textAreaRef = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = textAreaRef.current;
              target.style.height = 'auto';
              target.style.height = text.length == 1 ? 'auto' : (target.scrollHeight === 0 ? '16' : target.scrollHeight) + 'px';
              if (['undefined', undefined].includes(text.replaceAll('\n', ''))) return;
            }, [text]);
            (0, _hooks.useBinder)([store.chat], () => {
              globalThis.setTimeout(() => textAreaRef.current.focus(), 200);
            }, 'response.finished');
            const disabledTextarea = {
              disabled: fetching || disabled
            };
            const handleInputChange = e => {
              const {
                value
              } = e.target;
              if (['undefined', undefined].includes(value.replaceAll('\n'))) return;
              setText(value);
            };
            const handleKeyDown = e => {
              if (e.key !== 'Enter') return;
              const cb = prevValue => prevValue + '\n';
              const value = e.target.value.replaceAll('\n');
              if (['', undefined, null].includes(value)) return;
              e.shiftKey ? setText(cb) : handleSend();
            };
            return _react.default.createElement("div", {
              className: "input__wrapper"
            }, _react.default.createElement("textarea", {
              ...disabledTextarea,
              rows: 1,
              value: text,
              onChange: handleInputChange,
              onKeyDown: handleKeyDown,
              autoFocus: true,
              className: "input__textarea",
              ref: textAreaRef
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/input/timer/index
      *****************************************/

      ims.set('./views/input/timer/index', {
        hash: 1478628646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Timer = Timer;
          var _react = require("react");
          var _useTimer = require("./use-timer");
          // Timer.tsx

          function Timer({
            action
          }) {
            const isRunning = ['restart', 'start'].includes(action);
            const restart = action === 'restart';
            const [hours, minutes, seconds, milliseconds] = (0, _useTimer.useTimer)(isRunning, restart);
            const secRendered = seconds.toString().padStart(2, '0');
            const minutesRendered = minutes.toString().padStart(2, '0');
            return _react.default.createElement("div", {
              className: 'timer-message__container'
            }, _react.default.createElement("span", null, `${minutesRendered}`, ":"), _react.default.createElement("span", null, `${secRendered}`));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/input/timer/use-timer
      *********************************************/

      ims.set('./views/input/timer/use-timer', {
        hash: 1623060353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTimer = useTimer;
          var _react = require("react");
          // useTimer.ts

          const {
            useState,
            useEffect
          } = _react.default;
          function useTimer(isRunning, restart) {
            const [time, setTime] = useState(0);
            useEffect(() => {
              let intervalId;
              if (isRunning) {
                intervalId = setInterval(() => {
                  setTime(prevTime => prevTime + 1);
                }, 10); // 10 ms interval for tracking milliseconds
              }
              return () => {
                clearInterval(intervalId);
              };
            }, [isRunning]);
            useEffect(() => {
              if (restart) {
                setTime(0);
              }
            }, [restart]);
            const milliseconds = time % 100; // 1000 ms in a second, but we're updating every 10 ms
            const seconds = Math.floor(time / 100 % 60); // Converted to seconds
            const minutes = Math.floor(time / 6000 % 60); // Converted to minutes
            const hours = Math.floor(time / 360000); // Converted to hours
            return [hours, minutes, seconds, milliseconds];
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/input/types/agents-input
      ************************************************/

      ims.set('./views/input/types/agents-input', {
        hash: 2366847878,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/not-found
      *********************************/

      ims.set('./views/not-found', {
        hash: 4269748456,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatNotFound = ChatNotFound;
          var _react = require("react");
          function ChatNotFound() {
            return _react.default.createElement("div", null, "404");
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/realtime/container
      ******************************************/

      ims.set('./views/realtime/container', {
        hash: 3553173397,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RealtimePanel = RealtimePanel;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _status = require("./status");
          function RealtimePanel({
            isVisible
          }) {
            const {
              store,
              setShowRealtime
            } = (0, _context.useChatContext)();
            const [updated, setUpdated] = _react.default.useState({});
            (0, _hooks.useBinder)([store.realtime], () => {
              setUpdated({});
            });
            if (!store.realtime.available) return null;
            const {
              valid
            } = store.realtime?.client;
            const callStatus = store.realtime.client.status;
            const speakerIcon = true ? 'call' : 'callEnd';
            if (!valid) {
              const {
                recorder,
                player
              } = store.realtime.client;
              const errors = [];
              if (recorder?.error) {
                errors.push(_react.default.createElement("div", {
                  key: "recorder-error"
                }, "\u2022 Recorder is invalid: ", recorder.error.message));
              }
              if (player?.error) {
                errors.push(_react.default.createElement("div", {
                  key: "player-error"
                }, "\u2022 Audio player is invalid: ", player.error.message));
              }
              return _react.default.createElement("div", {
                className: "phone flex items-center justify-center min-h-screen bg-gray-100"
              }, _react.default.createElement("div", null, "Errors found:"), errors);
            }
            const onMicClick = () => {
              store.realtime.onmic();
            };
            const hangup = () => {
              store.realtime.call();
              setShowRealtime(false);
            };
            const micIcon = store.realtime.muted ? 'micOff' : 'mic';
            return _react.default.createElement(_framerMotion.AnimatePresence, null, isVisible && _react.default.createElement(_framerMotion.motion.div, {
              className: "realtime-panel",
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              exit: {
                opacity: 0,
                y: 20
              },
              transition: {
                duration: 0.5,
                ease: 'easeOut'
              }
            }, _react.default.createElement(_image.Image, {
              className: "app-logo",
              src: "/assets/rvd/logo.png"
            }), _react.default.createElement(_status.RealtimeStatus, null), _react.default.createElement("div", {
              className: "realtime-actions__container"
            }, _react.default.createElement(_icons.IconButton, {
              disabled: callStatus !== 'created',
              icon: micIcon,
              onClick: onMicClick
            }), _react.default.createElement(_icons.IconButton, {
              className: "call-icon",
              icon: speakerIcon,
              onClick: hangup
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/realtime/devices
      ****************************************/

      ims.set('./views/realtime/devices', {
        hash: 112979781,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectDevice = void 0;
          var _recorder = require("@aimpact/agents-api/realtime/audio/recorder");
          var _react = require("react");
          var _state = require("@aimpact/agents-api/realtime/widgets/state");
          const SelectDevice = ({
            client
          }) => {
            const state = new _state.State();
            state.define({
              available: [],
              selected: '',
              fetched: false,
              error: void 0
            });
            const {
              values
            } = state;
            (0, _react.useEffect)(() => {
              _recorder.devices.prepare().then(() => {
                values.available = [..._recorder.devices.values()];
                values.fetched = true;
                select(_recorder.devices.default?.id || '');
              }).catch(exc => {
                console.error(exc);
                values.error = `Error caught looking for devices`;
              });
            }, []);
            const select = id => {
              values.selected = id;
              const device = values.available.find(device => device.id === id);
              client.recorder.device = device;
            };
            const onchange = event => {
              select(event.target.value);
            };
            if (!values.fetched) return null;
            return _react.default.createElement("div", {
              className: "device-selection"
            }, _react.default.createElement("label", {
              htmlFor: "device-select"
            }, "Select Device:"), _react.default.createElement("select", {
              id: "device-select",
              value: values.selected,
              onChange: onchange
            }, values.available.map(device => _react.default.createElement("option", {
              key: device.id,
              value: device.id
            }, device.label))));
          };
          exports.SelectDevice = SelectDevice;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/realtime/icons
      **************************************/

      ims.set('./views/realtime/icons', {
        hash: 3363004562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpeakerIcon = exports.PhoneIcon = exports.MicIcon = void 0;
          var _react = require("react");
          const PhoneIcon = ({
            isOff
          }) => _react.default.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "mx-auto"
          }, _react.default.createElement("path", {
            d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
          }), isOff && _react.default.createElement("line", {
            x1: "1",
            y1: "1",
            x2: "23",
            y2: "23",
            stroke: "currentColor",
            strokeWidth: "2"
          }));
          exports.PhoneIcon = PhoneIcon;
          const MicIcon = ({
            isMuted
          }) => _react.default.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "mx-auto"
          }, _react.default.createElement("path", {
            d: "M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"
          }), _react.default.createElement("path", {
            d: "M19 10v2a7 7 0 01-14 0v-2"
          }), _react.default.createElement("line", {
            x1: "12",
            y1: "19",
            x2: "12",
            y2: "23"
          }), _react.default.createElement("line", {
            x1: "8",
            y1: "23",
            x2: "16",
            y2: "23"
          }), isMuted && _react.default.createElement("line", {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            strokeLinecap: "round"
          }));
          exports.MicIcon = MicIcon;
          const SpeakerIcon = ({
            isOff
          }) => _react.default.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "mx-auto"
          }, _react.default.createElement("polygon", {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
          }), _react.default.createElement("path", {
            d: isOff ? '' : 'M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07'
          }), isOff && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("line", {
            x1: "23",
            y1: "9",
            x2: "17",
            y2: "15",
            strokeLinecap: "round"
          }), _react.default.createElement("line", {
            x1: "17",
            y1: "9",
            x2: "23",
            y2: "15",
            strokeLinecap: "round"
          })));
          exports.SpeakerIcon = SpeakerIcon;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/realtime/status
      ***************************************/

      ims.set('./views/realtime/status', {
        hash: 3690609522,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RealtimeStatus = RealtimeStatus;
          var _react = require("react");
          var _context = require("../context");
          function RealtimeStatus() {
            const {
              store
            } = (0, _context.useChatContext)();
            const {
              status
            } = store.realtime.client;
            const getStatusMessage = () => {
              const messages = {
                closed: 'Ready to call',
                connecting: 'Calling.',
                open: 'Calling...',
                closing: 'Hanging up',
                created: `${Math.floor(store.realtime.duration / 60)}:${(store.realtime.duration % 60).toString().padStart(2, '0')}`
              };
              return messages[status] || '';
            };
            return _react.default.createElement("div", {
              className: "realtime__status"
            }, _react.default.createElement("span", null, getStatusMessage()));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/types
      *****************************/

      ims.set('./views/types', {
        hash: 3602355659,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/use-manager
      ***********************************/

      ims.set('./views/use-manager', {
        hash: 2780648611,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useManager = useManager;
          var _react = require("react");
          var _store = require("../store");
          function useManager({
            id,
            language = 'en',
            realtime = true,
            model,
            onListenChat
          }) {
            const [ready, setReady] = _react.default.useState(false);
            const [store, setStore] = _react.default.useState({});
            const [state, setState] = _react.default.useState({});
            const callback = () => {
              const manager = new _store.StoreManager({
                id,
                language,
                realtime,
                model,
                onListenChat
              });
              const onChange = () => {
                setState({
                  ...manager.getProperties()
                });
                setReady(manager.ready);
              };
              const cleanUp = () => {
                manager.off('change', onChange);
              };
              manager.on('change', onChange);
              setStore(manager);
              setReady(manager.ready);
              return cleanUp;
            };
            _react.default.useEffect(callback, [id]);
            return {
              ready,
              store
            };
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/widget/index
      ************************************/

      ims.set('./views/widget/index', {
        hash: 3204793680,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _chat = require("../chat");
          var _context = require("../context");
          var _skeleton = require("../chat/skeleton");
          var _notFound = require("../not-found");
          /**
           * Main component of the chat web component
           * @param param0 =
           * @returns
           */
          function View({
            store,
            ...props
          }) {
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
            const icon = props.attributes.get('icon');
            const [scrollPosition, setScrollPosition] = _react.default.useState('top');
            const {
              autoplay,
              messages,
              texts,
              audioManager: {
                player
              }
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
            const contextValue = {
              setScrollPosition: value => {
                if (!value) console.trace('setScrollPosition called with no value');
                setScrollPosition(value);
              },
              scrollPosition,
              store,
              texts: store.texts,
              autoplay,
              systemIcon: icon,
              messages,
              player,
              ready: store.ready,
              attributes: props.attributes
            };
            const Control = !store.notFound ? _chat.Chat : _notFound.ChatNotFound;
            const View = ready ? Control : _skeleton.ChatSkeleton;
            return _react.default.createElement(_context.ChatContext.Provider, {
              value: contextValue
            }, _react.default.createElement(View, null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./store/audio",
        "from": "AudioManager",
        "name": "AudioManager"
      }, {
        "im": "./views/chat/index",
        "from": "Chat",
        "name": "Chat"
      }, {
        "im": "./views/container",
        "from": "AgentsChatContainer",
        "name": "AgentsChatContainer"
      }, {
        "im": "./views/context",
        "from": "ChatContext",
        "name": "ChatContext"
      }, {
        "im": "./views/context",
        "from": "useChatContext",
        "name": "useChatContext"
      }, {
        "im": "./views/index",
        "from": "AgentsChatPanel",
        "name": "AgentsChatPanel"
      }, {
        "im": "./views/input/index",
        "from": "AgentsChatInput",
        "name": "AgentsChatInput"
      }, {
        "im": "./views/input/recording/error-modal",
        "from": "PermissionsErrorModal",
        "name": "PermissionsErrorModal"
      }, {
        "im": "./views/input/recording/index",
        "from": "RecordingButton",
        "name": "RecordingButton"
      }, {
        "im": "./views/input/recording/modal",
        "from": "PermissionsModal",
        "name": "PermissionsModal"
      }, {
        "im": "./views/types",
        "from": "IAgentsContainerProps",
        "name": "IAgentsContainerProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioManager') && _export("AudioManager", AudioManager = require ? require('./store/audio').AudioManager : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./views/chat/index').Chat : value);
        (require || prop === 'AgentsChatContainer') && _export("AgentsChatContainer", AgentsChatContainer = require ? require('./views/container').AgentsChatContainer : value);
        (require || prop === 'ChatContext') && _export("ChatContext", ChatContext = require ? require('./views/context').ChatContext : value);
        (require || prop === 'useChatContext') && _export("useChatContext", useChatContext = require ? require('./views/context').useChatContext : value);
        (require || prop === 'AgentsChatPanel') && _export("AgentsChatPanel", AgentsChatPanel = require ? require('./views/index').AgentsChatPanel : value);
        (require || prop === 'AgentsChatInput') && _export("AgentsChatInput", AgentsChatInput = require ? require('./views/input/index').AgentsChatInput : value);
        (require || prop === 'PermissionsErrorModal') && _export("PermissionsErrorModal", PermissionsErrorModal = require ? require('./views/input/recording/error-modal').PermissionsErrorModal : value);
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/input/recording/index').RecordingButton : value);
        (require || prop === 'PermissionsModal') && _export("PermissionsModal", PermissionsModal = require ? require('./views/input/recording/modal').PermissionsModal : value);
        (require || prop === 'IAgentsContainerProps') && _export("IAgentsContainerProps", IAgentsContainerProps = require ? require('./views/types').IAgentsContainerProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIkVYVEVOU0lPTlMiLCJtZXNzYWdlcyIsIml0ZW1zIiwiY2F0ZWdvcnkiLCJjaGF0IiwibW9kZWwiLCJjaGF0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwicHJvY2Vzc1RyYW5zY3JpcHRpb24iLCJwcm9jY2Vzc1RyYW5zY3JpcHRpb24iLCJzZWxlY3RlZE1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInJlYWR5IiwicmVhbHRpbWUiLCJvbkxpc3RlbkNoYXQiLCJhdXRvcGxheSIsIlJlYWx0aW1lU3RvcmUiLCJnbG9iYWxUaGlzIiwiY2hhdFN0b3JlIiwibG9hZCIsInByb2Nlc3NNb2RlbCIsImNoYXRJZCIsImN1cnJlbnRDaGF0IiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsImZldGNoaW5nIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJDaGF0IiwibG9hZEFsbCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic3RyZWFtIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInJlY29yZGluZyIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJyZWNvcmRpbmdQcm9taXNlIiwiaXNTYWZhcmkiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGFzUGVybWlzc2lvbnMiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJhY3RpdmUiLCJtaW1lVHlwZSIsIk1lZGlhUmVjb3JkZXIiLCJpc1R5cGVTdXBwb3J0ZWQiLCJvbmRhdGFhdmFpbGFibGUiLCJldmVudCIsImRhdGEiLCJzaXplIiwicHVzaCIsIlBlbmRpbmdQcm9taXNlIiwib25zdG9wIiwiQmxvYiIsInR5cGUiLCJyZXNvbHZlIiwic3RhcnQiLCJfcmVhY3QiLCJfaWNvbnMiLCJfaG9va3MiLCJfY29udGV4dCIsIkJhY2tBcnJvdyIsInN0b3JlIiwic2VwYXJhdG9yIiwiaWNvbiIsInVzZVJlZiIsImF0dHJpYnV0ZXMiLCJzY3JvbGxQb3NpdGlvbiIsInVzZUNoYXRDb250ZXh0IiwicmVmIiwidXNlQmluZGVyIiwic2V0VGltZW91dCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvciIsImRpc3RhbmNlRnJvbUJvdHRvbSIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbFRvcCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImdvVG9Cb3R0b20iLCJhZGQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTY3JvbGwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNscyIsImhhcyIsImdldCIsImNsc0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJfbWVzc2FnZXMiLCJyZWFkZXIiLCJ1c2VTdGF0ZSIsInN5c3RlbUljb24iLCJlbXB0eSIsInNldE1lc3NhZ2VzIiwibGVuZ3RoIiwidXBkYXRlU2Nyb2xsIiwic2V0VXBkYXRlU2Nyb2xsIiwibm93Iiwib25OZXdNZXNzYWdlIiwiY2xzQ29udGVudCIsIkNvbnRyb2wiLCJGcmFnbWVudCIsIk1lc3NhZ2VzIiwiX2NvbXBvbmVudHMiLCJDaGF0U2tlbGV0b24iLCJTcGlubmVyIiwidXNlRXh0ZW5zaW9uIiwic2V0UmVhZHkiLCJ3ZWJDb21wb25lbnROYW1lIiwiY29udHJvbCIsIm9uUmVhZHkiLCJfdXNlTWFuYWdlciIsIl9jb250YWluZXIiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJza2VsZXRvbiIsInByb3BzIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJzaG93UmVhbHRpbWUiLCJzZXRTaG93UmVhbHRpbWUiLCJ1c2VNYW5hZ2VyIiwib2JqIiwiU2tlbGV0b25Db250cm9sIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDaGF0Q29udGV4dCIsIlByb3ZpZGVyIiwiUmVhbHRpbWVQYW5lbCIsImlzVmlzaWJsZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJBZ2VudHNDaGF0UGFuZWwiLCJDaGF0Tm90Rm91bmQiLCJfcmVjb3JkaW5nIiwiSW5wdXRBY3Rpb25CdXR0b24iLCJidXR0b25Jc0Rpc2FibGVkIiwib25TdWJtaXQiLCJ0ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiQXBwSWNvbkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Rm9ybSIsInNldFJlY29yZGluZyIsInNldEZldGNoaW5nIiwic2V0VGV4dCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlU2VuZCIsIl9mb3JtIiwiX3RleHRJbnB1dCIsIl9hY3Rpb25CdXR0b24iLCJfY29udGV4dDIiLCJfdXNlSW5wdXRGb3JtIiwiQWdlbnRzQ2hhdElucHV0IiwiaXNXYWl0aW5nIiwiYXV0b1RyYW5zY3JpYmUiLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsIndhaXRpbmdSZXNwb25zZSIsImlzRmV0Y2hpbmciLCJpc0Rpc2FibGVkIiwiYXR0cnMiLCJjb250YWluZXJBdHRycyIsImNvbnRyb2xBdHRycyIsInJlcGxhY2VBbGwiLCJ0cmltIiwib25DbGlja1NwZWVjaCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJfbW9kYWwiLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwZXJtaXNzaW9ucyIsIkFsZXJ0TW9kYWwiLCJjZW50ZXJlZCIsIkljb24iLCJfcGxheWVyIiwiX2Vycm9yTW9kYWwiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJzZXRFcnJvciIsInNldEhhc1Blcm1pc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJ0aGVuIiwic2V0SXRlbSIsImNhdGNoIiwibG9nIiwicGxheUFjdGlvbiIsIm9uQ2xvc2VFcnJvciIsIlBsYXllciIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJzdWJ0aXRsZSIsImludHJvIiwiX3RpbWVyIiwiX2ljb25zMiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic2V0RGlzYWJsZWQiLCJjYW5jZWwiLCJ0cmFuc2NyaXB0aW9uIiwiVGltZXIiLCJhY3Rpb24iLCJCdXR0b24iLCJ0ZXh0QXJlYVJlZiIsInRhcmdldCIsInN0eWxlIiwiaGVpZ2h0IiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsInJvd3MiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsIk1hdGgiLCJmbG9vciIsIl9mcmFtZXJNb3Rpb24iLCJfaW1hZ2UiLCJfc3RhdHVzIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJ2YWxpZCIsImNhbGxTdGF0dXMiLCJzcGVha2VySWNvbiIsImVycm9ycyIsIm9uTWljQ2xpY2siLCJoYW5ndXAiLCJtaWNJY29uIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsIkltYWdlIiwic3JjIiwiUmVhbHRpbWVTdGF0dXMiLCJfc3RhdGUiLCJTZWxlY3REZXZpY2UiLCJzdGF0ZSIsIlN0YXRlIiwiZGVmaW5lIiwic2VsZWN0ZWQiLCJmZXRjaGVkIiwic2VsZWN0IiwiZXhjIiwib25jaGFuZ2UiLCJodG1sRm9yIiwibWFwIiwibGFiZWwiLCJQaG9uZUljb24iLCJpc09mZiIsInZpZXdCb3giLCJ3aWR0aCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIk1pY0ljb24iLCJpc011dGVkIiwic3Ryb2tlTGluZWNhcCIsIlNwZWFrZXJJY29uIiwicG9pbnRzIiwiZ2V0U3RhdHVzTWVzc2FnZSIsImNsb3NlZCIsImNvbm5lY3RpbmciLCJvcGVuIiwiY2xvc2luZyIsImNyZWF0ZWQiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwiY2FsbGJhY2siLCJtYW5hZ2VyIiwiZ2V0UHJvcGVydGllcyIsImNsZWFuVXAiLCJWaWV3Il0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2FjdGlvbi1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2hvb2tzL3VzZS1pbnB1dC1mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvYWdlbnRzLWlucHV0LnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvZGV2aWNlcy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvaWNvbnMudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL3N0YXR1cy50c3giLCIvdHMvdmlld3MvdXNlLW1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL3dpZGdldC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7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