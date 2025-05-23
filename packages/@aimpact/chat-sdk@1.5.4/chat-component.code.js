System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/reactive@2.0.5/model", "@aimpact/chat-sdk@1.5.4/voice", "@aimpact/chat-sdk@1.5.4/wrapper", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/kernel@0.1.12/texts", "@aimpact/agents-api@0.4.1/realtime/client", "@aimpact/agents-api@0.4.1/realtime/client/conversation", "@aimpact/agents-api@0.4.1/realtime/audio/recorder", "@beyond-js/kernel@0.1.12/core", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/chat-sdk@1.5.4/messages", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/chat-sdk@1.5.4/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/agents-api@0.4.1/realtime/widgets/state"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, AudioManager, Chat, AgentsChatContainer, ChatContext, useChatContext, useStore, AgentsChatPanel, AgentsChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, IAgentsContainerProps, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive205Model) {
      dependency_2 = _beyondJsReactive205Model;
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
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_14 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactChatSdk154Messages) {
      dependency_15 = _aimpactChatSdk154Messages;
    }, function (_pragmateUi100Beta7Components) {
      dependency_16 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_17 = _pragmateUi100Beta7Alert;
    }, function (_aimpactChatSdk154ComponentsIcons) {
      dependency_18 = _aimpactChatSdk154ComponentsIcons;
    }, function (_pragmateUi100Beta7Form) {
      dependency_19 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_20 = _pragmateUi100Beta7Modal;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_22 = _pragmateUi100Beta7Image;
    }, function (_aimpactAgentsApi041RealtimeWidgetsState) {
      dependency_23 = _aimpactAgentsApi041RealtimeWidgetsState;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/rvd", "0.4.7"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/voice', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/agents-api/realtime/client', dependency_8], ['@aimpact/agents-api/realtime/client/conversation', dependency_9], ['@aimpact/agents-api/realtime/audio/recorder', dependency_10], ['@beyond-js/kernel/core', dependency_11], ['react', dependency_12], ['pragmate-ui/icons', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat-sdk/messages', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/alert', dependency_17], ['@aimpact/chat-sdk/components/icons', dependency_18], ['pragmate-ui/form', dependency_19], ['pragmate-ui/modal', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/image', dependency_22], ['@aimpact/agents-api/realtime/widgets/state', dependency_23]]);
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
        hash: 2001675747,
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
                this.fetching = true;
                // return http.response(data);
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
        hash: 686645212,
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
                console.log(1, "pidiendo el permiso");
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
        hash: 2593579724,
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
          var _getChatContainerClass = require("../utils/get-chat-container-class");
          var _emptyState = require("../components/empty-state");
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
            (0, _hooks.useBinder)([store.chat], handleNewMessage, ['new.message', 'response.finished']);
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
        hash: 786936627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentsChatInput = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("./context");
          var _textInput = require("./text-input");
          var _actionButton = require("./action-button");
          var _context2 = require("../context");
          var _useInputForm = require("./hooks/use-input-form");
          var _icons = require("pragmate-ui/icons");
          var _useStore = require("../hooks/use-store");
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
            const isFetching = fetching || store.waitingResponse || isWaiting;
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
            console.log(10, 'renderizando el input');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIm1lc3NhZ2VzIiwiaXRlbXMiLCJsZW5ndGgiLCJjYXRlZ29yeSIsImNoYXQiLCJtb2RlbCIsImNoYXRzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0ZXh0c01vZGVsIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJwcm9jZXNzVHJhbnNjcmlwdGlvbiIsInByb2NjZXNzVHJhbnNjcmlwdGlvbiIsIm5vdEZvdW5kIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlIiwiaWQiLCJkaXNhYmxlZCIsInRyaWdnZXJFdmVudCIsImV4dGVuc2lvbnMiLCJNYXAiLCJyZWFkeSIsInJlYWx0aW1lIiwib25MaXN0ZW5DaGF0IiwiYXV0b3BsYXkiLCJSZWFsdGltZVN0b3JlIiwiZ2xvYmFsVGhpcyIsImNoYXRTdG9yZSIsImxvYWQiLCJwcm9jZXNzTW9kZWwiLCJjaGF0SWQiLCJjdXJyZW50Q2hhdCIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJkZSIsImZldGNoaW5nIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJDaGF0IiwibG9hZEFsbCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic3RyZWFtIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInJlY29yZGluZyIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJyZWNvcmRpbmdQcm9taXNlIiwiaXNTYWZhcmkiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGFzUGVybWlzc2lvbnMiLCJsb2ciLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJhY3RpdmUiLCJoYXNQZXJtaXNzaW9uIiwibWltZVR5cGUiLCJNZWRpYVJlY29yZGVyIiwiaXNUeXBlU3VwcG9ydGVkIiwib25kYXRhYXZhaWxhYmxlIiwiZXZlbnQiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJQZW5kaW5nUHJvbWlzZSIsIm9uc3RvcCIsIkJsb2IiLCJ0eXBlIiwicmVzb2x2ZSIsInN0YXJ0IiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJhdHRyaWJ1dGVzIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJnZXQiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX21lc3NhZ2VzIiwiX2dldENoYXRDb250YWluZXJDbGFzcyIsIl9lbXB0eVN0YXRlIiwiaXNSZWFkZXIiLCJ1c2VTdGF0ZSIsInNlcGFyYXRvclJlZiIsInN5c3RlbUljb24iLCJlbXB0eSIsInNob3dBdmF0YXIiLCJzZXRNZXNzYWdlc0NvdW50IiwidXBkYXRlU2Nyb2xsIiwic2V0VXBkYXRlU2Nyb2xsIiwibm93IiwiY29udGFpbmVyQ2xhc3MiLCJnZXRDaGF0Q29udGFpbmVyQ2xhc3MiLCJzY3JvbGxUb1NlcGFyYXRvciIsInVzZUNhbGxiYWNrIiwiaGFuZGxlTmV3TWVzc2FnZSIsIkVtcHR5U3RhdGUiLCJNZXNzYWdlcyIsIl9jb21wb25lbnRzIiwiQ2hhdFNrZWxldG9uIiwiU3Bpbm5lciIsInVzZUV4dGVuc2lvbiIsInNldFJlYWR5Iiwid2ViQ29tcG9uZW50TmFtZSIsImNvbnRyb2wiLCJvblJlYWR5IiwiRnJhZ21lbnQiLCJpc1ZhbGlkRWxlbWVudCIsIkNvbXAiLCJfYWxlcnQiLCJfdXNlU3RvcmUiLCJFcnJvcnNSZW5kZXJlciIsImVycm9ycyIsInVzZVN0b3JlIiwibWFwIiwiaWR4IiwiQWxlcnQiLCJrZXkiLCJKU09OIiwic3RyaW5naWZ5IiwiX3VzZU1hbmFnZXIiLCJfY29udGFpbmVyIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsImNoaWxkcmVuIiwic2tlbGV0b24iLCJTa2VsZXRvbkNvbnRyb2wiLCJyZXN0Iiwic2V0U2Nyb2xsUG9zaXRpb24iLCJzaG93UmVhbHRpbWUiLCJzZXRTaG93UmVhbHRpbWUiLCJ1c2VNYW5hZ2VyIiwic3RvcmVSZWFkeSIsImNvbnRleHRWYWx1ZSIsInRyYWNlIiwiQ2hhdENvbnRleHQiLCJQcm92aWRlciIsIlJlYWx0aW1lUGFuZWwiLCJpc1Zpc2libGUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImV2ZW50cyIsIkFycmF5IiwiaXNBcnJheSIsInNldFZlcnNpb24iLCJoYW5kbGVyIiwidiIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQ2hhdE5vdEZvdW5kIiwiX3JlY29yZGluZyIsIklucHV0QWN0aW9uQnV0dG9uIiwiYnV0dG9uSXNEaXNhYmxlZCIsIm9uU3VibWl0IiwidGV4dCIsInVzZUlucHV0Q29udGV4dCIsIkFwcEljb25CdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dEZvcm0iLCJzZXRSZWNvcmRpbmciLCJzZXRGZXRjaGluZyIsInNldFRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZVNlbmQiLCJfZm9ybSIsIl90ZXh0SW5wdXQiLCJfYWN0aW9uQnV0dG9uIiwiX2NvbnRleHQyIiwiX3VzZUlucHV0Rm9ybSIsIkFnZW50c0NoYXRJbnB1dCIsImlzV2FpdGluZyIsImF1dG9UcmFuc2NyaWJlIiwiaXNGZXRjaGluZyIsIndhaXRpbmdSZXNwb25zZSIsImlzRGlzYWJsZWQiLCJhdHRycyIsImNvbnRhaW5lckF0dHJzIiwiY29udHJvbEF0dHJzIiwicmVwbGFjZUFsbCIsInRyaW0iLCJvbkNsaWNrU3BlZWNoIiwiRm9ybSIsIlRleHRJbnB1dCIsIl9tb2RhbCIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBlcm1pc3Npb25zIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJwbGF5QWN0aW9uIiwib25DbG9zZUVycm9yIiwiUGxheWVyIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdGltZXIiLCJfaWNvbnMyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzZXREaXNhYmxlZCIsImNhbmNlbCIsInRyYW5zY3JpcHRpb24iLCJUaW1lciIsImFjdGlvbiIsIkJ1dHRvbiIsInRleHRBcmVhUmVmIiwidGFyZ2V0Iiwic3R5bGUiLCJoZWlnaHQiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwicm93cyIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiTWF0aCIsImZsb29yIiwiX2ZyYW1lck1vdGlvbiIsIl9pbWFnZSIsIl9zdGF0dXMiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInZhbGlkIiwiY2FsbFN0YXR1cyIsInNwZWFrZXJJY29uIiwib25NaWNDbGljayIsImhhbmd1cCIsIm1pY0ljb24iLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiSW1hZ2UiLCJzcmMiLCJSZWFsdGltZVN0YXR1cyIsIl9zdGF0ZSIsIlNlbGVjdERldmljZSIsInN0YXRlIiwiU3RhdGUiLCJkZWZpbmUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJzZWxlY3QiLCJleGMiLCJvbmNoYW5nZSIsImh0bWxGb3IiLCJsYWJlbCIsIlBob25lSWNvbiIsImlzT2ZmIiwidmlld0JveCIsIndpZHRoIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZCIsIngxIiwieTEiLCJ4MiIsInkyIiwiTWljSWNvbiIsImlzTXV0ZWQiLCJzdHJva2VMaW5lY2FwIiwiU3BlYWtlckljb24iLCJwb2ludHMiLCJnZXRTdGF0dXNNZXNzYWdlIiwiY2xvc2VkIiwiY29ubmVjdGluZyIsIm9wZW4iLCJjbG9zaW5nIiwiY3JlYXRlZCIsIl9zdG9yZSIsInNldFN0b3JlIiwiY2hhbmdlQ291bnQiLCJzZXRDaGFuZ2VDb3VudCIsImNhbGxiYWNrIiwibWFuYWdlciIsInByZXZDb3VudCIsImNsZWFuVXAiLCJWaWV3IiwicHJvcHMiLCJDb250cm9sIl0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHktc3RhdGUudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3JzLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2hvb2tzL3VzZS1zdG9yZS50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvYWN0aW9uLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaG9va3MvdXNlLWlucHV0LWZvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvZXJyb3ItbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL21vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC90ZXh0LWlucHV0LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi9hZ2VudHMtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9kZXZpY2VzLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9pY29ucy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvc3RhdHVzLnRzeCIsIi90cy92aWV3cy91c2UtbWFuYWdlci50c3giLCIvdHMvdmlld3MvdXRpbHMvZ2V0LWNoYXQtY29udGFpbmVyLWNsYXNzLnRzIiwiL3RzL3ZpZXdzL3V0aWxzL2dldENoYXRDb250YWluZXJDbGFzcy50cyIsIi90cy92aWV3cy93aWRnZXQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBR0EsSUFBQUcsU0FBQSxHQUFBSCxPQUFBO1VBS087VUFBWSxNQUFPSSxZQUFhLFNBQVFMLE1BQUEsQ0FBQU0sYUFBcUI7WUFHbkUsQ0FBQUMsTUFBTztZQUNQLENBQUFDLFFBQVM7WUFFVCxJQUFJQSxRQUFRQSxD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