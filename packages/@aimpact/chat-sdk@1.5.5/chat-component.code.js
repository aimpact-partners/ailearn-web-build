System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/reactive@2.1.1/model", "@aimpact/chat-sdk@1.5.5/voice", "@aimpact/chat-sdk@1.5.5/wrapper", "@aimpact/chat-sdk@1.5.5/core", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.14/texts", "@aimpact/agents-api@0.4.1/realtime/client", "@aimpact/agents-api@0.4.1/realtime/client/conversation", "@aimpact/agents-api@0.4.1/realtime/audio/recorder", "@beyond-js/kernel@0.1.14/core", "react@18.3.1", "pragmate-ui@1.0.8/icons", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/chat-sdk@1.5.5/messages", "@aimpact/chat-sdk@1.5.5/shared/hooks", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/alert", "@aimpact/chat-sdk@1.5.5/components/icons", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/modal", "framer-motion@10.18.0", "pragmate-ui@1.0.8/image", "@aimpact/agents-api@0.4.1/realtime/widgets/state"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, AudioManager, Chat, AgentsChatContainer, ChatContext, useChatContext, useStore, AgentsChatPanel, AgentsChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, IAgentsContainerProps, __beyond_pkg, hmr;
  _export({
    AudioManager: void 0,
    Chat: void 0,
    AgentsChatContainer: void 0,
    ChatContext: void 0,
    useChatContext: void 0,
    useStore: void 0,
    AgentsChatPanel: void 0,
    AgentsChatInput: void 0,
    PermissionsErrorModal: void 0,
    RecordingButton: void 0,
    PermissionsModal: void 0,
    IAgentsContainerProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReactive211Model) {
      dependency_2 = _beyondJsReactive211Model;
    }, function (_aimpactChatSdk155Voice) {
      dependency_3 = _aimpactChatSdk155Voice;
    }, function (_aimpactChatSdk155Wrapper) {
      dependency_4 = _aimpactChatSdk155Wrapper;
    }, function (_aimpactChatSdk155Core) {
      dependency_5 = _aimpactChatSdk155Core;
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_beyondJsKernel0114Texts) {
      dependency_7 = _beyondJsKernel0114Texts;
    }, function (_aimpactAgentsApi041RealtimeClient) {
      dependency_8 = _aimpactAgentsApi041RealtimeClient;
    }, function (_aimpactAgentsApi041RealtimeClientConversation) {
      dependency_9 = _aimpactAgentsApi041RealtimeClientConversation;
    }, function (_aimpactAgentsApi041RealtimeAudioRecorder) {
      dependency_10 = _aimpactAgentsApi041RealtimeAudioRecorder;
    }, function (_beyondJsKernel0114Core) {
      dependency_11 = _beyondJsKernel0114Core;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi108Icons) {
      dependency_13 = _pragmateUi108Icons;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_14 = _beyondJsReact18Widgets118Hooks;
    }, function (_aimpactChatSdk155Messages) {
      dependency_15 = _aimpactChatSdk155Messages;
    }, function (_aimpactChatSdk155SharedHooks) {
      dependency_16 = _aimpactChatSdk155SharedHooks;
    }, function (_pragmateUi108Components) {
      dependency_17 = _pragmateUi108Components;
    }, function (_pragmateUi108Alert) {
      dependency_18 = _pragmateUi108Alert;
    }, function (_aimpactChatSdk155ComponentsIcons) {
      dependency_19 = _aimpactChatSdk155ComponentsIcons;
    }, function (_pragmateUi108Form) {
      dependency_20 = _pragmateUi108Form;
    }, function (_pragmateUi108Modal) {
      dependency_21 = _pragmateUi108Modal;
    }, function (_framerMotion2) {
      dependency_22 = _framerMotion2;
    }, function (_pragmateUi108Image) {
      dependency_23 = _pragmateUi108Image;
    }, function (_aimpactAgentsApi041RealtimeWidgetsState) {
      dependency_24 = _aimpactAgentsApi041RealtimeWidgetsState;
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
          "vspecifier": "@aimpact/chat-sdk@1.5.5/chat-component",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/voice', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/agents-api/realtime/client', dependency_8], ['@aimpact/agents-api/realtime/client/conversation', dependency_9], ['@aimpact/agents-api/realtime/audio/recorder', dependency_10], ['@beyond-js/kernel/core', dependency_11], ['react', dependency_12], ['pragmate-ui/icons', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat-sdk/messages', dependency_15], ['@aimpact/chat-sdk/shared/hooks', dependency_16], ['pragmate-ui/components', dependency_17], ['pragmate-ui/alert', dependency_18], ['@aimpact/chat-sdk/components/icons', dependency_19], ['pragmate-ui/form', dependency_20], ['pragmate-ui/modal', dependency_21], ['framer-motion', dependency_22], ['pragmate-ui/image', dependency_23], ['@aimpact/agents-api/realtime/widgets/state', dependency_24]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.5.5/chat-component.code');
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
        hash: 1834023687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioManager = void 0;
          var _model = require("@beyond-js/reactive/model");
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
        hash: 1325422042,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/chat-sdk/core");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _audio = require("./audio");
          var _session = require("@aimpact/chat-sdk/session");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _realtime = require("./realtime");
          class StoreManager extends _model.ReactiveModel {
            #messages;
            get messages() {
              return this.#messages?.items?.length ? this.#messages?.items : [];
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
              this.reactiveProps(['autoplay', 'language']);
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
              this.#chat.on('change', this.triggerEvent);
              this.#chat.on('new.message', () => {
                this.triggerEvent('new.message');
              });
              this.#chat.on('new.answer', () => {
                this.triggerEvent('new.answer');
              });
              this.#messages = this.#chat.messages;
              this.#realtime.chatId = this.#model.id;
              _wrapper.AppWrapper.currentChat = this.#model;
              const language = this.language ?? _wrapper.AppWrapper.language;
              const languages = {
                en: 'en-US',
                es: 'es-MX',
                de: 'de-DE'
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
              chat.on('new.message', () => {
                this.triggerEvent('new.message');
              });
              chat.on('new.answer', () => {
                this.triggerEvent('new.answer');
              });
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
                es: 'es-MX',
                de: 'de-DE'
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
              performance.mark('start');
              this.#currentMessage = undefined;
              if (typeof content === 'string' && [undefined, '', null].includes(content)) return;
              return this.#chat.sendMessage(content);
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
        hash: 293800207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RealtimeStore = void 0;
          var _model = require("@beyond-js/reactive/model");
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
        hash: 1330295646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
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
                // Check permissions first
                const hasPermission = await this.hasPermissions();
                if (!hasPermission) {
                  throw new Error('Microphone permission denied');
                }
                // this.#stream = await navigator.mediaDevices.getUserMedia({ audio: true });
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
              // Always get a fresh stream for recording
              try {
                this.#stream = await navigator.mediaDevices.getUserMedia({
                  audio: true
                });
              } catch (error) {
                this.#error = error.message;
                throw error;
              }
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
        hash: 4205114361,
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

      /**********************************
      INTERNAL MODULE: ./views/chat/index
      **********************************/

      ims.set('./views/chat/index', {
        hash: 3568445652,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _messages = require("@aimpact/chat-sdk/messages");
          var _hooks = require("@aimpact/chat-sdk/shared/hooks");
          var _react = require("react");
          var _emptyState = require("../components/empty-state");
          var _context = require("../context");
          var _getChatContainerClass = require("../utils/get-chat-container-class");
          /*bundle*/
          function Chat() {
            const [isReader] = (0, _react.useState)(false);
            const separatorRef = (0, _react.useRef)(null);
            const {
              store,
              texts,
              systemIcon,
              empty,
              showAvatar
            } = (0, _context.useChatContext)();
            const {
              messages
            } = store;
            const [, setMessagesCount] = (0, _react.useState)(messages?.length ?? 0);
            const [updateScroll, setUpdateScroll] = (0, _react.useState)(performance.now());
            const containerClass = (0, _getChatContainerClass.getChatContainerClass)(isReader);
            // Helper to scroll to the separator
            const scrollToSeparator = (0, _react.useCallback)(() => {
              setTimeout(() => separatorRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'end'
              }), 100);
            }, []);
            // Handler for new messages
            const handleNewMessage = (0, _react.useCallback)(() => {
              setMessagesCount(store.messages.length);
              scrollToSeparator();
            }, [store.messages.length, scrollToSeparator]);
            // Scroll to bottom on updateScroll change
            (0, _react.useEffect)(() => scrollToSeparator(), [updateScroll, scrollToSeparator]);
            // Bind to store events
            (0, _hooks.useStore)(store.chat, ['new.message', 'response.finished'], handleNewMessage);
            // Early return for empty state
            if (!store.messages.length) {
              return _react.default.createElement("div", {
                className: containerClass
              }, _react.default.createElement(_emptyState.EmptyState, {
                empty: empty
              }));
            }
            return _react.default.createElement("div", {
              className: containerClass
            }, _react.default.createElement("section", {
              className: "chat__content"
            }, _react.default.createElement(_messages.Messages, {
              chat: store.chat,
              player: store.audioManager.player,
              showAvatar: showAvatar,
              messages: store?.messages ?? [],
              texts: texts,
              current: store.currentMessage,
              systemIcon: systemIcon,
              setUpdateScroll: setUpdateScroll
            }), _react.default.createElement("div", {
              ref: separatorRef,
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

      /**********************************************
      INTERNAL MODULE: ./views/components/empty-state
      **********************************************/

      ims.set('./views/components/empty-state', {
        hash: 77586615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyState = void 0;
          var _react = require("react");
          const EmptyState = ({
            empty
          }) => {
            if (!empty) return _react.default.createElement(_react.default.Fragment, null, "No hay contenido");
            if (_react.default.isValidElement(empty)) return _react.default.createElement(_react.default.Fragment, null, empty);
            if (typeof empty === 'function') {
              const Comp = empty;
              return _react.default.createElement(Comp, null);
            }
            return _react.default.createElement(_react.default.Fragment, null, empty);
          };
          exports.EmptyState = EmptyState;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/components/errors-renderer
      **************************************************/

      ims.set('./views/components/errors-renderer', {
        hash: 2362822785,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorsRenderer = void 0;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _useStore = require("../hooks/use-store");
          var _context = require("../context");
          const ErrorsRenderer = ({
            errors
          }) => {
            const {
              store
            } = (0, _context.useChatContext)();
            (0, _useStore.useStore)(store.chat, ['error']);
            if (!store.chat.errors?.length) return null;
            return _react.default.createElement(_react.default.Fragment, null, store.chat.errors.map((error, idx) => _react.default.createElement(_alert.Alert, {
              key: idx,
              type: "error"
            }, typeof error === 'string' ? error : JSON.stringify(error))));
          };
          exports.ErrorsRenderer = ErrorsRenderer;
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/container
      *********************************/

      ims.set('./views/container', {
        hash: 1832963807,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentsChatContainer = AgentsChatContainer;
          var _react = require("react");
          var _context = require("./context");
          var _container = require("./realtime/container");
          var _useManager = require("./use-manager");
          /*bundle */
          function AgentsChatContainer({
            children,
            icon: systemIcon,
            autoplay,
            skeleton: SkeletonControl,
            language,
            empty,
            model,
            player,
            showAvatar = false,
            onListenChat,
            attributes,
            realtime,
            id,
            ...rest
          }) {
            const [scrollPosition, setScrollPosition] = _react.default.useState('top');
            const [showRealtime, setShowRealtime] = _react.default.useState(false);
            const {
              ready,
              store
            } = (0, _useManager.useManager)({
              id,
              language,
              onListenChat,
              realtime,
              model
            });
            if (!ready) return SkeletonControl ? _react.default.createElement(SkeletonControl, null) : null;
            const {
              messages,
              ready: storeReady,
              texts,
              audioManager
            } = store || {};
            const contextValue = {
              setScrollPosition: value => {
                if (!value) console.trace('setScrollPosition called with no value');
                setScrollPosition(value);
              },
              scrollPosition,
              store,
              ready: storeReady,
              texts,
              recorder: audioManager?.recorder,
              autoplay,
              systemIcon,
              empty,
              realtime,
              setShowRealtime,
              showAvatar,
              skeleton: SkeletonControl,
              messages,
              player,
              attributes,
              ...rest
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
        hash: 1582084480,
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

      /***************************************
      INTERNAL MODULE: ./views/hooks/use-store
      ***************************************/

      ims.set('./views/hooks/use-store', {
        hash: 1365951797,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStore = useStore;
          var _react = require("react");
          /*bundle*/ /**
                      * A generic React hook that subscribes to a reactive store.
                      * The store must implement `.on(event, handler)` and `.off(event, handler)`
                      * to manage subscriptions, and emit events to trigger re-renders.
                      * @param store The reactive store to subscribe to
                      * @param events Array of event names to subscribe to. Defaults to ['change']
                      */
          function useStore(store, events = ['change']) {
            if (!Array.isArray(events)) {
              throw new Error('The events parameter must be an array of strings');
            }
            // We use a local counter to force re-render whenever the store emits any of the subscribed events.
            const [, setVersion] = (0, _react.useState)(0);
            (0, _react.useEffect)(() => {
              const handler = () => setVersion(v => v + 1);
              // Subscribe to all specified events
              events.forEach(event => {
                store.on(event, handler);
              });
              // Cleanup: unsubscribe from all events
              return () => {
                events.forEach(event => {
                  store.off(event, handler);
                });
              };
            }, [store, events]);
            // Return the store directly so components can read from it.
            return store;
          }
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
        hash: 716034199,
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
          var _hooks = require("@aimpact/chat-sdk/shared/hooks");
          var _components = require("pragmate-ui/components");
          function InputActionButton({
            buttonIsDisabled,
            fetching
          }) {
            const {
              store,
              onSubmit,
              text
            } = (0, _context.useInputContext)();
            (0, _hooks.useStore)(store.chat, ['response.finished', 'metadata.started']);
            if (fetching) {
              return _react.default.createElement("span", {
                className: "input__icon  input__icon--right"
              }, _react.default.createElement(_components.Spinner, {
                active: true
              }));
            }
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
            }, _react.default.createElement(_recording.RecordingButton, {
              disabled: buttonIsDisabled
            }));
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
        hash: 964727984,
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
              } catch (e) {} finally {
                setFetching(false);
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
        hash: 1452035524,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentsChatInput = void 0;
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _context = require("../context");
          var _useStore = require("../hooks/use-store");
          var _actionButton = require("./action-button");
          var _context2 = require("./context");
          var _useInputForm = require("./hooks/use-input-form");
          var _textInput = require("./text-input");
          /*bundle*/
          const AgentsChatInput = ({
            isWaiting = false,
            autoTranscribe = false,
            disabled = false,
            onClick
          }) => {
            const {
              store,
              recorder,
              setShowRealtime,
              realtime
            } = (0, _context.useChatContext)();
            const {
              text,
              setText,
              onSubmit,
              fetching,
              recording,
              setRecording,
              setFetching
            } = (0, _useInputForm.useInputForm)();
            const isFetching = fetching || isWaiting;
            const isDisabled = store.disabled || disabled;
            const finalDisabled = isDisabled;
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
              disabled: finalDisabled
            };
            (0, _useStore.useStore)(store);
            let cls = `chat-input-container ${isFetching ? 'is-fetching' : ''} ${finalDisabled ? 'is-disabled' : ''}`;
            const containerAttrs = {
              className: cls
            };
            const controlAttrs = {
              onClick,
              className: `chat-input-form ${finalDisabled ? 'is-disabled' : ''}`
            };
            const onClickSpeech = () => {
              setShowRealtime(true);
              store.realtime.call();
            };
            return _react.default.createElement(_context2.InputContext.Provider, {
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
              disabled: finalDisabled
            }), _react.default.createElement("div", {
              className: "input-chat__actions"
            }, realtime && _react.default.createElement(_icons.IconButton, {
              icon: "speech",
              onClick: onClickSpeech
            }), _react.default.createElement(_actionButton.InputActionButton, {
              buttonIsDisabled: finalDisabled,
              fetching: isFetching
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
        hash: 3137383416,
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
        hash: 564688598,
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
        hash: 2447596581,
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
            const [store, setStore] = _react.default.useState({});
            const [changeCount, setChangeCount] = _react.default.useState(0);
            const callback = () => {
              const manager = new _store.StoreManager({
                id,
                language,
                realtime,
                model,
                onListenChat
              });
              const onChange = () => {
                setChangeCount(prevCount => prevCount + 1);
              };
              const cleanUp = () => {
                manager.off('change', onChange);
              };
              manager.on('change', onChange);
              setStore(manager);
              return cleanUp;
            };
            _react.default.useEffect(callback, [id]);
            return {
              ready: store.ready,
              store,
              changeCount
            };
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/utils/get-chat-container-class
      ******************************************************/

      ims.set('./views/utils/get-chat-container-class', {
        hash: 1812136555,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getChatContainerClass = getChatContainerClass;
          function getChatContainerClass(isReader) {
            return `chat-control__container${isReader ? ' chat-control__container--reader' : ''}`;
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/utils/getChatContainerClass
      ***************************************************/

      ims.set('./views/utils/getChatContainerClass', {
        hash: 1812136555,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getChatContainerClass = getChatContainerClass;
          function getChatContainerClass(isReader) {
            return `chat-control__container${isReader ? ' chat-control__container--reader' : ''}`;
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
        "im": "./views/hooks/use-store",
        "from": "useStore",
        "name": "useStore"
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
        (require || prop === 'useStore') && _export("useStore", useStore = require ? require('./views/hooks/use-store').useStore : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIm1lc3NhZ2VzIiwiaXRlbXMiLCJsZW5ndGgiLCJjYXRlZ29yeSIsImNoYXQiLCJtb2RlbCIsImNoYXRzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0ZXh0c01vZGVsIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJwcm9jZXNzVHJhbnNjcmlwdGlvbiIsInByb2NjZXNzVHJhbnNjcmlwdGlvbiIsIm5vdEZvdW5kIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlIiwiaWQiLCJkaXNhYmxlZCIsInRyaWdnZXJFdmVudCIsImV4dGVuc2lvbnMiLCJNYXAiLCJyZWFkeSIsInJlYWx0aW1lIiwib25MaXN0ZW5DaGF0IiwiYXV0b3BsYXkiLCJSZWFsdGltZVN0b3JlIiwiZ2xvYmFsVGhpcyIsImNoYXRTdG9yZSIsImxvYWQiLCJwcm9jZXNzTW9kZWwiLCJjaGF0SWQiLCJjdXJyZW50Q2hhdCIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJkZSIsImZldGNoaW5nIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJDaGF0IiwibG9hZEFsbCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJzZW5kQXVkaW8iLCJlIiwiZXJyb3IiLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic3RyZWFtIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInJlY29yZGluZyIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJyZWNvcmRpbmdQcm9taXNlIiwiaXNTYWZhcmkiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGFzUGVybWlzc2lvbnMiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJhY3RpdmUiLCJoYXNQZXJtaXNzaW9uIiwibWltZVR5cGUiLCJNZWRpYVJlY29yZGVyIiwiaXNUeXBlU3VwcG9ydGVkIiwib25kYXRhYXZhaWxhYmxlIiwiZXZlbnQiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJQZW5kaW5nUHJvbWlzZSIsIm9uc3RvcCIsIkJsb2IiLCJ0eXBlIiwicmVzb2x2ZSIsInN0YXJ0IiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJhdHRyaWJ1dGVzIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJnZXQiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX21lc3NhZ2VzIiwiX2VtcHR5U3RhdGUiLCJfZ2V0Q2hhdENvbnRhaW5lckNsYXNzIiwiaXNSZWFkZXIiLCJ1c2VTdGF0ZSIsInNlcGFyYXRvclJlZiIsInN5c3RlbUljb24iLCJlbXB0eSIsInNob3dBdmF0YXIiLCJzZXRNZXNzYWdlc0NvdW50IiwidXBkYXRlU2Nyb2xsIiwic2V0VXBkYXRlU2Nyb2xsIiwibm93IiwiY29udGFpbmVyQ2xhc3MiLCJnZXRDaGF0Q29udGFpbmVyQ2xhc3MiLCJzY3JvbGxUb1NlcGFyYXRvciIsInVzZUNhbGxiYWNrIiwiaGFuZGxlTmV3TWVzc2FnZSIsInVzZVN0b3JlIiwiRW1wdHlTdGF0ZSIsIk1lc3NhZ2VzIiwiX2NvbXBvbmVudHMiLCJDaGF0U2tlbGV0b24iLCJTcGlubmVyIiwidXNlRXh0ZW5zaW9uIiwic2V0UmVhZHkiLCJ3ZWJDb21wb25lbnROYW1lIiwiY29udHJvbCIsIm9uUmVhZHkiLCJGcmFnbWVudCIsImlzVmFsaWRFbGVtZW50IiwiQ29tcCIsIl9hbGVydCIsIl91c2VTdG9yZSIsIkVycm9yc1JlbmRlcmVyIiwiZXJyb3JzIiwibWFwIiwiaWR4IiwiQWxlcnQiLCJrZXkiLCJKU09OIiwic3RyaW5naWZ5IiwiX2NvbnRhaW5lciIsIl91c2VNYW5hZ2VyIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsImNoaWxkcmVuIiwic2tlbGV0b24iLCJTa2VsZXRvbkNvbnRyb2wiLCJyZXN0Iiwic2V0U2Nyb2xsUG9zaXRpb24iLCJzaG93UmVhbHRpbWUiLCJzZXRTaG93UmVhbHRpbWUiLCJ1c2VNYW5hZ2VyIiwic3RvcmVSZWFkeSIsImNvbnRleHRWYWx1ZSIsInRyYWNlIiwiQ2hhdENvbnRleHQiLCJQcm92aWRlciIsIlJlYWx0aW1lUGFuZWwiLCJpc1Zpc2libGUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImV2ZW50cyIsIkFycmF5IiwiaXNBcnJheSIsInNldFZlcnNpb24iLCJoYW5kbGVyIiwidiIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQ2hhdE5vdEZvdW5kIiwiX3JlY29yZGluZyIsIklucHV0QWN0aW9uQnV0dG9uIiwiYnV0dG9uSXNEaXNhYmxlZCIsIm9uU3VibWl0IiwidGV4dCIsInVzZUlucHV0Q29udGV4dCIsIkFwcEljb25CdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dEZvcm0iLCJzZXRSZWNvcmRpbmciLCJzZXRGZXRjaGluZyIsInNldFRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZVNlbmQiLCJfZm9ybSIsIl9hY3Rpb25CdXR0b24iLCJfY29udGV4dDIiLCJfdXNlSW5wdXRGb3JtIiwiX3RleHRJbnB1dCIsIkFnZW50c0NoYXRJbnB1dCIsImlzV2FpdGluZyIsImF1dG9UcmFuc2NyaWJlIiwiaXNGZXRjaGluZyIsImlzRGlzYWJsZWQiLCJmaW5hbERpc2FibGVkIiwiY29udGFpbmVyQXR0cnMiLCJjb250cm9sQXR0cnMiLCJvbkNsaWNrU3BlZWNoIiwiRm9ybSIsIlRleHRJbnB1dCIsIl9tb2RhbCIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBlcm1pc3Npb25zIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJsb2ciLCJwbGF5QWN0aW9uIiwib25DbG9zZUVycm9yIiwiUGxheWVyIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdGltZXIiLCJfaWNvbnMyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzZXREaXNhYmxlZCIsImNhbmNlbCIsInRyYW5zY3JpcHRpb24iLCJUaW1lciIsImFjdGlvbiIsIkJ1dHRvbiIsInRleHRBcmVhUmVmIiwidGFyZ2V0Iiwic3R5bGUiLCJoZWlnaHQiLCJyZXBsYWNlQWxsIiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsInJvd3MiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsIk1hdGgiLCJmbG9vciIsIl9mcmFtZXJNb3Rpb24iLCJfaW1hZ2UiLCJfc3RhdHVzIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJ2YWxpZCIsImNhbGxTdGF0dXMiLCJzcGVha2VySWNvbiIsIm9uTWljQ2xpY2siLCJoYW5ndXAiLCJtaWNJY29uIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsIkltYWdlIiwic3JjIiwiUmVhbHRpbWVTdGF0dXMiLCJfc3RhdGUiLCJTZWxlY3REZXZpY2UiLCJzdGF0ZSIsIlN0YXRlIiwiZGVmaW5lIiwic2VsZWN0ZWQiLCJmZXRjaGVkIiwic2VsZWN0IiwiZXhjIiwib25jaGFuZ2UiLCJodG1sRm9yIiwibGFiZWwiLCJQaG9uZUljb24iLCJpc09mZiIsInZpZXdCb3giLCJ3aWR0aCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIk1pY0ljb24iLCJpc011dGVkIiwic3Ryb2tlTGluZWNhcCIsIlNwZWFrZXJJY29uIiwicG9pbnRzIiwiZ2V0U3RhdHVzTWVzc2FnZSIsImNsb3NlZCIsImNvbm5lY3RpbmciLCJvcGVuIiwiY2xvc2luZyIsImNyZWF0ZWQiLCJfc3RvcmUiLCJzZXRTdG9yZSIsImNoYW5nZUNvdW50Iiwic2V0Q2hhbmdlQ291bnQiLCJjYWxsYmFjayIsIm1hbmFnZXIiLCJwcmV2Q291bnQiLCJjbGVhblVwIiwiVmlldyIsInByb3BzIiwiQ29udHJvbCJdLCJzb3VyY2VzIjpbIi8vbWVzc2FnZXMudHMvIiwiLy90cy9zdG9yZS9hdWRpby50cyIsIi8vdHMvc3RvcmUvaW5kZXgudHMiLCIvL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiLy90cy9zdG9yZS9yZWNvcmRlci50cyIsIi8vdHlwZXMudHMvIiwiLy90cy92aWV3cy9jaGF0L2JhY2stYXJyb3cudHN4IiwiLy90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCIvL3RzL3ZpZXdzL2NoYXQvdXNlLWV4dGVuc2lvbi50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHktc3RhdGUudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL2Vycm9ycy1yZW5kZXJlci50c3giLCIvL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiLy90cy92aWV3cy9ob29rcy91c2Utc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvaW5wdXQvYWN0aW9uLWJ1dHRvbi50c3giLCIvL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiLy90cy92aWV3cy9pbnB1dC9ob29rcy91c2UtaW5wdXQtZm9ybS50c3giLCIvL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi8vdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL21vZGFsLnRzeCIsIi8vdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL3BsYXllci50c3giLCIvL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiLy90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvL2FnZW50cy1pbnB1dC50c3gvIiwiLy90cy92aWV3cy9ub3QtZm91bmQudHN4IiwiLy90cy92aWV3cy9yZWFsdGltZS9jb250YWluZXIudHN4IiwiLy90cy92aWV3cy9yZWFsdGltZS9kZXZpY2VzLnRzeCIsIi8vdHMvdmlld3MvcmVhbHRpbWUvaWNvbnMudHN4IiwiLy90cy92aWV3cy9yZWFsdGltZS9zdGF0dXMudHN4IiwiLy90cy92aWV3cy91c2UtbWFuYWdlci50c3giLCIvL3RzL3ZpZXdzL3V0aWxzL2dldC1jaGF0LWNvbnRhaW5lci1jbGFzcy50cyIsIi8vdHMvdmlld3MvdXRpbHMvZ2V0Q2hhdENvbnRhaW5lckNsYXNzLnRzIiwiLy90cy92aWV3cy93aWRnZXQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBR0EsSUFBQUcsU0FBQSxHQUFBSCxPQUFBO1VBS087VUFBWSxNQUFPSSxZQUFhLFNBQVFMLE1BQUEsQ0FBQU0sYUFBcUI7WUFHbkUsQ0FBQUMsTUFBTztZQUNQLENBQUFDLFFBQVM7WUFFVCxJQUFJQSxR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