System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/reactive@2.1.0/model", "@aimpact/chat-sdk@1.5.4/voice", "@aimpact/chat-sdk@1.5.4/wrapper", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/kernel@0.1.12/texts", "@aimpact/agents-api@0.4.1/realtime/client", "@aimpact/agents-api@0.4.1/realtime/client/conversation", "@aimpact/agents-api@0.4.1/realtime/audio/recorder", "@beyond-js/kernel@0.1.12/core", "react@18.3.1", "pragmate-ui@1.0.2/icons", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/chat-sdk@1.5.4/messages", "@aimpact/chat-sdk@1.5.4/shared/hooks", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/alert", "@aimpact/chat-sdk@1.5.4/components/icons", "pragmate-ui@1.0.2/form", "pragmate-ui@1.0.2/modal", "framer-motion@10.18.0", "pragmate-ui@1.0.2/image", "@aimpact/agents-api@0.4.1/realtime/widgets/state"], function (_export, _context3) {
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
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReactive210Model) {
      dependency_2 = _beyondJsReactive210Model;
    }, function (_aimpactChatSdk154Voice) {
      dependency_3 = _aimpactChatSdk154Voice;
    }, function (_aimpactChatSdk154Wrapper) {
      dependency_4 = _aimpactChatSdk154Wrapper;
    }, function (_aimpactChatSdk154Core) {
      dependency_5 = _aimpactChatSdk154Core;
    }, function (_aimpactChatSdk154Session) {
      dependency_6 = _aimpactChatSdk154Session;
    }, function (_beyondJsKernel0112Texts) {
      dependency_7 = _beyondJsKernel0112Texts;
    }, function (_aimpactAgentsApi041RealtimeClient) {
      dependency_8 = _aimpactAgentsApi041RealtimeClient;
    }, function (_aimpactAgentsApi041RealtimeClientConversation) {
      dependency_9 = _aimpactAgentsApi041RealtimeClientConversation;
    }, function (_aimpactAgentsApi041RealtimeAudioRecorder) {
      dependency_10 = _aimpactAgentsApi041RealtimeAudioRecorder;
    }, function (_beyondJsKernel0112Core) {
      dependency_11 = _beyondJsKernel0112Core;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi102Icons) {
      dependency_13 = _pragmateUi102Icons;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_14 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactChatSdk154Messages) {
      dependency_15 = _aimpactChatSdk154Messages;
    }, function (_aimpactChatSdk154SharedHooks) {
      dependency_16 = _aimpactChatSdk154SharedHooks;
    }, function (_pragmateUi102Components) {
      dependency_17 = _pragmateUi102Components;
    }, function (_pragmateUi102Alert) {
      dependency_18 = _pragmateUi102Alert;
    }, function (_aimpactChatSdk154ComponentsIcons) {
      dependency_19 = _aimpactChatSdk154ComponentsIcons;
    }, function (_pragmateUi102Form) {
      dependency_20 = _pragmateUi102Form;
    }, function (_pragmateUi102Modal) {
      dependency_21 = _pragmateUi102Modal;
    }, function (_framerMotion2) {
      dependency_22 = _framerMotion2;
    }, function (_pragmateUi102Image) {
      dependency_23 = _pragmateUi102Image;
    }, function (_aimpactAgentsApi041RealtimeWidgetsState) {
      dependency_24 = _aimpactAgentsApi041RealtimeWidgetsState;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/rvd", "0.5.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.4/chat-component",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/voice', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/agents-api/realtime/client', dependency_8], ['@aimpact/agents-api/realtime/client/conversation', dependency_9], ['@aimpact/agents-api/realtime/audio/recorder', dependency_10], ['@beyond-js/kernel/core', dependency_11], ['react', dependency_12], ['pragmate-ui/icons', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat-sdk/messages', dependency_15], ['@aimpact/chat-sdk/shared/hooks', dependency_16], ['pragmate-ui/components', dependency_17], ['pragmate-ui/alert', dependency_18], ['@aimpact/chat-sdk/components/icons', dependency_19], ['pragmate-ui/form', dependency_20], ['pragmate-ui/modal', dependency_21], ['framer-motion', dependency_22], ['pragmate-ui/image', dependency_23], ['@aimpact/agents-api/realtime/widgets/state', dependency_24]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.5.4/chat-component.code');
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
        hash: 3167328136,
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
              try {
                performance.mark('start');
                this.#currentMessage = undefined;
                if (typeof content === 'string' && [undefined, '', null].includes(content)) return;
                return this.#chat.sendMessage(content);
              } catch (e) {
                // return http.error(400, message);
                console.error('capturamos error aca', e);
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
        hash: 1315079738,
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
        hash: 1189966018,
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
              showAvatar: showAvatar,
              setUpdateScroll: setUpdateScroll,
              player: store.audioManager.player,
              current: store.currentMessage,
              systemIcon: systemIcon,
              messages: store?.messages ?? [],
              texts: texts
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
        hash: 3320303670,
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
        hash: 2952734302,
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
        hash: 1169395078,
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
            buttonIsDisabled
          }) {
            const {
              store,
              onSubmit,
              text
            } = (0, _context.useInputContext)();
            (0, _hooks.useStore)(store.chat, ['response.finished', 'metadata.started']);
            if (buttonIsDisabled) {
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
        hash: 4062426374,
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
              } finally {
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
        hash: 3017232360,
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
            (0, _useStore.useStore)(store);
            const attrs = {
              disabled: disabled || store.disabled
            };
            const buttonIsDisabled = isDisabled || attrs.disabled || isFetching;
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
              disabled: isDisabled
            }), _react.default.createElement("div", {
              className: "input-chat__actions"
            }, realtime && _react.default.createElement(_icons.IconButton, {
              icon: "speech",
              onClick: onClickSpeech
            }), _react.default.createElement(_actionButton.InputActionButton, {
              buttonIsDisabled: buttonIsDisabled || isDisabled
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
        hash: 1866695987,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIm1lc3NhZ2VzIiwiaXRlbXMiLCJsZW5ndGgiLCJjYXRlZ29yeSIsImNoYXQiLCJtb2RlbCIsImNoYXRzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0ZXh0c01vZGVsIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJwcm9jZXNzVHJhbnNjcmlwdGlvbiIsInByb2NjZXNzVHJhbnNjcmlwdGlvbiIsIm5vdEZvdW5kIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlIiwiaWQiLCJkaXNhYmxlZCIsInRyaWdnZXJFdmVudCIsImV4dGVuc2lvbnMiLCJNYXAiLCJyZWFkeSIsInJlYWx0aW1lIiwib25MaXN0ZW5DaGF0IiwiYXV0b3BsYXkiLCJSZWFsdGltZVN0b3JlIiwiZ2xvYmFsVGhpcyIsImNoYXRTdG9yZSIsImxvYWQiLCJwcm9jZXNzTW9kZWwiLCJjaGF0SWQiLCJjdXJyZW50Q2hhdCIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJkZSIsImZldGNoaW5nIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJDaGF0IiwibG9hZEFsbCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic3RyZWFtIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInJlY29yZGluZyIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJyZWNvcmRpbmdQcm9taXNlIiwiaXNTYWZhcmkiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGFzUGVybWlzc2lvbnMiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJhY3RpdmUiLCJoYXNQZXJtaXNzaW9uIiwibWltZVR5cGUiLCJNZWRpYVJlY29yZGVyIiwiaXNUeXBlU3VwcG9ydGVkIiwib25kYXRhYXZhaWxhYmxlIiwiZXZlbnQiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJQZW5kaW5nUHJvbWlzZSIsIm9uc3RvcCIsIkJsb2IiLCJ0eXBlIiwicmVzb2x2ZSIsInN0YXJ0IiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJhdHRyaWJ1dGVzIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJnZXQiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX21lc3NhZ2VzIiwiX2VtcHR5U3RhdGUiLCJfZ2V0Q2hhdENvbnRhaW5lckNsYXNzIiwiaXNSZWFkZXIiLCJ1c2VTdGF0ZSIsInNlcGFyYXRvclJlZiIsInN5c3RlbUljb24iLCJlbXB0eSIsInNob3dBdmF0YXIiLCJzZXRNZXNzYWdlc0NvdW50IiwidXBkYXRlU2Nyb2xsIiwic2V0VXBkYXRlU2Nyb2xsIiwibm93IiwiY29udGFpbmVyQ2xhc3MiLCJnZXRDaGF0Q29udGFpbmVyQ2xhc3MiLCJzY3JvbGxUb1NlcGFyYXRvciIsInVzZUNhbGxiYWNrIiwiaGFuZGxlTmV3TWVzc2FnZSIsInVzZVN0b3JlIiwiRW1wdHlTdGF0ZSIsIk1lc3NhZ2VzIiwiX2NvbXBvbmVudHMiLCJDaGF0U2tlbGV0b24iLCJTcGlubmVyIiwidXNlRXh0ZW5zaW9uIiwic2V0UmVhZHkiLCJ3ZWJDb21wb25lbnROYW1lIiwiY29udHJvbCIsIm9uUmVhZHkiLCJGcmFnbWVudCIsImlzVmFsaWRFbGVtZW50IiwiQ29tcCIsIl9hbGVydCIsIl91c2VTdG9yZSIsIkVycm9yc1JlbmRlcmVyIiwiZXJyb3JzIiwibWFwIiwiaWR4IiwiQWxlcnQiLCJrZXkiLCJKU09OIiwic3RyaW5naWZ5IiwiX3VzZU1hbmFnZXIiLCJfY29udGFpbmVyIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsImNoaWxkcmVuIiwic2tlbGV0b24iLCJTa2VsZXRvbkNvbnRyb2wiLCJyZXN0Iiwic2V0U2Nyb2xsUG9zaXRpb24iLCJzaG93UmVhbHRpbWUiLCJzZXRTaG93UmVhbHRpbWUiLCJ1c2VNYW5hZ2VyIiwic3RvcmVSZWFkeSIsImNvbnRleHRWYWx1ZSIsInRyYWNlIiwiQ2hhdENvbnRleHQiLCJQcm92aWRlciIsIlJlYWx0aW1lUGFuZWwiLCJpc1Zpc2libGUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImV2ZW50cyIsIkFycmF5IiwiaXNBcnJheSIsInNldFZlcnNpb24iLCJoYW5kbGVyIiwidiIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQ2hhdE5vdEZvdW5kIiwiX3JlY29yZGluZyIsIklucHV0QWN0aW9uQnV0dG9uIiwiYnV0dG9uSXNEaXNhYmxlZCIsIm9uU3VibWl0IiwidGV4dCIsInVzZUlucHV0Q29udGV4dCIsIkFwcEljb25CdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dEZvcm0iLCJzZXRSZWNvcmRpbmciLCJzZXRGZXRjaGluZyIsInNldFRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZVNlbmQiLCJfZm9ybSIsIl9hY3Rpb25CdXR0b24iLCJfY29udGV4dDIiLCJfdXNlSW5wdXRGb3JtIiwiX3RleHRJbnB1dCIsIkFnZW50c0NoYXRJbnB1dCIsImlzV2FpdGluZyIsImF1dG9UcmFuc2NyaWJlIiwiaXNGZXRjaGluZyIsImlzRGlzYWJsZWQiLCJhdHRycyIsImNvbnRhaW5lckF0dHJzIiwiY29udHJvbEF0dHJzIiwicmVwbGFjZUFsbCIsInRyaW0iLCJvbkNsaWNrU3BlZWNoIiwiRm9ybSIsIlRleHRJbnB1dCIsIl9tb2RhbCIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBlcm1pc3Npb25zIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJsb2ciLCJwbGF5QWN0aW9uIiwib25DbG9zZUVycm9yIiwiUGxheWVyIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdGltZXIiLCJfaWNvbnMyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzZXREaXNhYmxlZCIsImNhbmNlbCIsInRyYW5zY3JpcHRpb24iLCJUaW1lciIsImFjdGlvbiIsIkJ1dHRvbiIsInRleHRBcmVhUmVmIiwidGFyZ2V0Iiwic3R5bGUiLCJoZWlnaHQiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwicm93cyIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiTWF0aCIsImZsb29yIiwiX2ZyYW1lck1vdGlvbiIsIl9pbWFnZSIsIl9zdGF0dXMiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInZhbGlkIiwiY2FsbFN0YXR1cyIsInNwZWFrZXJJY29uIiwib25NaWNDbGljayIsImhhbmd1cCIsIm1pY0ljb24iLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiSW1hZ2UiLCJzcmMiLCJSZWFsdGltZVN0YXR1cyIsIl9zdGF0ZSIsIlNlbGVjdERldmljZSIsInN0YXRlIiwiU3RhdGUiLCJkZWZpbmUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJzZWxlY3QiLCJleGMiLCJvbmNoYW5nZSIsImh0bWxGb3IiLCJsYWJlbCIsIlBob25lSWNvbiIsImlzT2ZmIiwidmlld0JveCIsIndpZHRoIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZCIsIngxIiwieTEiLCJ4MiIsInkyIiwiTWljSWNvbiIsImlzTXV0ZWQiLCJzdHJva2VMaW5lY2FwIiwiU3BlYWtlckljb24iLCJwb2ludHMiLCJnZXRTdGF0dXNNZXNzYWdlIiwiY2xvc2VkIiwiY29ubmVjdGluZyIsIm9wZW4iLCJjbG9zaW5nIiwiY3JlYXRlZCIsIl9zdG9yZSIsInNldFN0b3JlIiwiY2hhbmdlQ291bnQiLCJzZXRDaGFuZ2VDb3VudCIsImNhbGxiYWNrIiwibWFuYWdlciIsInByZXZDb3VudCIsImNsZWFuVXAiLCJWaWV3IiwicHJvcHMiLCJDb250cm9sIl0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHktc3RhdGUudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3JzLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2hvb2tzL3VzZS1zdG9yZS50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvYWN0aW9uLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaG9va3MvdXNlLWlucHV0LWZvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvZXJyb3ItbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL21vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC90ZXh0LWlucHV0LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi9hZ2VudHMtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9kZXZpY2VzLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9pY29ucy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvc3RhdHVzLnRzeCIsIi90cy92aWV3cy91c2UtbWFuYWdlci50c3giLCIvdHMvdmlld3MvdXRpbHMvZ2V0LWNoYXQtY29udGFpbmVyLWNsYXNzLnRzIiwiL3RzL3ZpZXdzL3V0aWxzL2dldENoYXRDb250YWluZXJDbGFzcy50cyIsIi90cy92aWV3cy93aWRnZXQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFHQSxJQUFBRyxTQUFBLEdBQUFILE9BQUE7VUFLTztVQUFZLE1BQU9JLFlBQWEsU0FBUUwsTUFBQSxDQUFBTSxhQUFxQjtZQUduRSxDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsUUFBUztZQUVULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElB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QUFDMUMsS0FBSyxDQUFDcEgsS0FBSyxDQUFDO1lBQ3JELE1BQU1zSCxJQUFJLEdBQUc0UixLQUFLLENBQUMxUixVQUFVLENBQUMyQixHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3pDLE1BQU0sQ0FBQzFCLGNBQWMsRUFBRWtGLGlCQUFpQixDQUFDLEdBQUc1RixNQUFBLENBQUFsRCxPQUFLLENBQUNpRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pFLE1BQU07Y0FDTDNKLFFBQVE7Y0FDUjNCLFFBQVE7Y0FDUk8sS0FBSztjQUNMTSxZQUFZLEVBQUU7Z0JBQUVwQztjQUFNO1lBQUUsQ0FDeEIsR0FBR21LLEtBQUs7WUFFVCxJQUFBSCxNQUFBLENBQUFXLFNBQVMsRUFBQyxDQUFDUixLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCK0QsUUFBUSxDQUFDL0QsS0FBSyxDQUFDcEgsS0FBSyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztZQUVGLE1BQU1nTixZQUFZLEdBQUc7Y0FDcEJMLGlCQUFpQixFQUFFelEsS0FBSyxJQUFHO2dCQUMxQixJQUFJLENBQUNBLEtBQUssRUFBRThFLE9BQU8sQ0FBQ2lNLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQztnQkFDbkVOLGlCQUFpQixDQUFDelEsS0FBSyxDQUFDO2NBQ3pCLENBQUM7Y0FDRHVMLGNBQWM7Y0FDZEwsS0FBSztjQUNMckksS0FBSyxFQUFFcUksS0FBSyxDQUFDckksS0FBSztjQUNsQm9CLFFBQVE7Y0FDUjZKLFVBQVUsRUFBRTFDLElBQUk7Y0FDaEI5SSxRQUFRO2NBQ1J2QixNQUFNO2NBQ04rQyxLQUFLLEVBQUVvSCxLQUFLLENBQUNwSCxLQUFLO2NBQ2xCd0gsVUFBVSxFQUFFMFIsS0FBSyxDQUFDMVI7YUFDbEI7WUFFRCxNQUFNMlIsT0FBTyxHQUFHLENBQUMvUixLQUFLLENBQUM1SCxRQUFRLEdBQUdzTyxLQUFBLENBQUF6TSxJQUFJLEdBQUcyTSxTQUFBLENBQUFFLFlBQVk7WUFDckQsTUFBTStLLElBQUksR0FBR2paLEtBQUssR0FBR21aLE9BQU8sR0FBR3BMLFNBQUEsQ0FBQS9DLFlBQVk7WUFFM0MsT0FDQ2pFLE1BQUEsQ0FBQWxELE9BQUEsQ0FBQXdGLGFBQUEsQ0FBQ25DLFFBQUEsQ0FBQWdHLFdBQVcsQ0FBQ0MsUUFBUTtjQUFDalIsS0FBSyxFQUFFOFE7WUFBWSxHQUN4Q2pHLE1BQUEsQ0FBQWxELE9BQUEsQ0FBQXdGLGFBQUEsQ0FBQzRQLElBQUksT0FBRyxDQUNjO1VBRXpCIiwiaWdub3JlTGlzdCI6W119