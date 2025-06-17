System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/reactive@2.0.5/model", "@aimpact/chat-sdk@1.5.4/voice", "@aimpact/chat-sdk@1.5.4/wrapper", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/kernel@0.1.12/texts", "@aimpact/agents-api@0.4.1/realtime/client", "@aimpact/agents-api@0.4.1/realtime/client/conversation", "@aimpact/agents-api@0.4.1/realtime/audio/recorder", "@beyond-js/kernel@0.1.12/core", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/chat-sdk@1.5.4/messages", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/chat-sdk@1.5.4/components/icons", "@aimpact/media-manager@1.0.0/uploader", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/image", "framer-motion@10.18.0", "@aimpact/agents-api@0.4.1/realtime/widgets/state"], function (_export, _context3) {
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
    }, function (_aimpactMediaManager100Uploader) {
      dependency_19 = _aimpactMediaManager100Uploader;
    }, function (_pragmateUi100Beta7Form) {
      dependency_20 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_21 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Image) {
      dependency_22 = _pragmateUi100Beta7Image;
    }, function (_framerMotion2) {
      dependency_23 = _framerMotion2;
    }, function (_aimpactAgentsApi041RealtimeWidgetsState) {
      dependency_24 = _aimpactAgentsApi041RealtimeWidgetsState;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/rvd", "0.4.14"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/voice', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/agents-api/realtime/client', dependency_8], ['@aimpact/agents-api/realtime/client/conversation', dependency_9], ['@aimpact/agents-api/realtime/audio/recorder', dependency_10], ['@beyond-js/kernel/core', dependency_11], ['react', dependency_12], ['pragmate-ui/icons', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat-sdk/messages', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/alert', dependency_17], ['@aimpact/chat-sdk/components/icons', dependency_18], ['@aimpact/media-manager/uploader', dependency_19], ['pragmate-ui/form', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/image', dependency_22], ['framer-motion', dependency_23], ['@aimpact/agents-api/realtime/widgets/state', dependency_24]]);
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
        hash: 947495626,
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
            async sendMessage(content, files) {
              try {
                performance.mark('start');
                this.#currentMessage = undefined;
                if (typeof content === 'string' && [undefined, '', null].includes(content)) return;
                this.fetching = true;
                // return http.response(data);
                return this.#chat.sendMessage(content, files);
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
        hash: 1826314994,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInputForm = useInputForm;
          var _react = require("react");
          var _context = require("../../context");
          var _uploader = require("@aimpact/media-manager/uploader");
          function useInputForm() {
            const {
              store,
              recorder
            } = (0, _context.useChatContext)();
            const [recording, setRecording] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const [text, setText] = _react.default.useState('');
            const {
              triggerRef,
              dropZoneRef,
              publish,
              uploading,
              progress,
              errors,
              files
            } = (0, _uploader.useUploader)({
              url: '/api/upload',
              name: 'userFiles',
              multiple: true
            });
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
                await store.sendMessage(text, files.map(item => item.file));
                setFetching(false);
              } catch (e) {
                console.error('error', e);
              } finally {
                setFetching(false);
              }
            };
            const onSubmit = !!text.length ? handleSend : sendAudio;
            return {
              triggerRef,
              dropZoneRef,
              files,
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
        hash: 2626963306,
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
          var _uploadedFile = require("./uploaded-file");
          var _context2 = require("../context");
          var _icons = require("@aimpact/chat-sdk/components/icons");
          var _useInputForm = require("./hooks/use-input-form");
          var _icons2 = require("pragmate-ui/icons");
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
              triggerRef,
              dropZoneRef,
              files,
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
            /* ─────────────── File Uploader ─────────────── */
            /* UI feedback while dragging */
            const [dragging, setDragging] = (0, _react.useState)(false);
            const activateDrag = (0, _react.useCallback)(() => setDragging(true), []);
            const deactivateDrag = (0, _react.useCallback)(() => setDragging(false), []);
            /* ─────────────── Context value ─────────────── */
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
            /* ─────────────── UI / attrs ─────────────── */
            const attrs = {
              disabled: disabled || store.disabled
            };
            const buttonIsDisabled = attrs.disabled || store.waitingResponse || recording;
            let cls = `chat-input-container ${isFetching ? 'is-fetching' : ''} ${isDisabled ? 'is-disabled' : ''}`;
            if (files.length > 0) cls += ' files-container';
            const containerAttrs = {
              className: cls,
              ref: dropZoneRef,
              onDragEnter: activateDrag,
              onDragLeave: deactivateDrag,
              onDragOver: e => {
                e.preventDefault();
                activateDrag();
              },
              onDrop: e => {
                deactivateDrag();
              }
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
            }, dragging && _react.default.createElement("div", {
              className: "uploader-overlay"
            }, _react.default.createElement(_icons.AppIconButton, {
              icon: "upload-file"
            }), _react.default.createElement("span", {
              className: "uploader-overlay__text"
            }, "Add your files here")), Array.isArray(files) && files.length > 0 && _react.default.createElement("section", {
              className: "uploaded-files-list"
            }, files.map((item, idx) => _react.default.createElement(_uploadedFile.UploadedFile, {
              key: item.file?.name + idx,
              file: item.file,
              src: item.src
            }))), _react.default.createElement("section", {
              className: "chat-input__inner-content"
            }, _react.default.createElement("button", {
              title: "upload__button",
              ref: triggerRef,
              className: "chat-input__icon",
              type: "button"
            }, _react.default.createElement(_icons2.Icon, {
              icon: "upload-file"
            })), _react.default.createElement(_textInput.TextInput, {
              text: text,
              setFetching: setFetching,
              fetching: isFetching,
              setText: setText,
              handleSend: onSubmit,
              disabled: isDisabled
            }), _react.default.createElement("div", {
              className: "input-chat__actions"
            }, realtime && _react.default.createElement(_icons2.IconButton, {
              icon: "speech",
              onClick: onClickSpeech
            }), _react.default.createElement(_actionButton.InputActionButton, {
              buttonIsDisabled: buttonIsDisabled
            }))))));
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

      /*******************************************
      INTERNAL MODULE: ./views/input/uploaded-file
      *******************************************/

      ims.set('./views/input/uploaded-file', {
        hash: 3301811053,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UploadedFile = void 0;
          var _react = require("react");
          var _icons = require("@aimpact/chat-sdk/components/icons");
          var _image = require("pragmate-ui/image");
          function getIconKeyFromType(type) {
            if (type.startsWith('image/')) return 'img';
            if (type.startsWith('audio/')) return 'audio';
            if (type.startsWith('video/')) return 'video';
            if (type === 'application/pdf') return 'pdf';
            if (type === 'text/csv') return 'csv';
            if (type === 'text/javascript' || type === 'application/json' || type === 'text/x-python') return 'code';
            if (type === 'application/msword' || type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return 'doc';
            return 'doc';
          }
          const UploadedFile = ({
            file,
            src
          }) => {
            const iconKey = getIconKeyFromType(file.type);
            const fileTypeClass = `file-type-${iconKey}`;
            console.log(1, iconKey);
            if (iconKey === 'img') {
              return _react.default.createElement("div", {
                className: `uploaded-file ${fileTypeClass}`
              }, _react.default.createElement("div", {
                className: "file-icon"
              }, _react.default.createElement(_image.Image, {
                src: src,
                alt: file.name
              })), _react.default.createElement("div", {
                className: "uploaded-file__details"
              }, _react.default.createElement("span", {
                className: "uploaded-file__name"
              }, file.name), _react.default.createElement("span", {
                className: "uploaded-file__type"
              }, file.type || 'Unknown type')));
            }
            return _react.default.createElement("div", {
              className: `uploaded-file ${fileTypeClass}`
            }, _react.default.createElement("div", {
              className: "file-icon"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: iconKey
            })), _react.default.createElement("div", {
              className: "uploaded-file__details"
            }, _react.default.createElement("span", {
              className: "uploaded-file__name"
            }, file.name), _react.default.createElement("span", {
              className: "uploaded-file__type"
            }, file.type || 'Unknown type')));
          };
          exports.UploadedFile = UploadedFile;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIm1lc3NhZ2VzIiwiaXRlbXMiLCJsZW5ndGgiLCJjYXRlZ29yeSIsImNoYXQiLCJtb2RlbCIsImNoYXRzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0ZXh0c01vZGVsIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJwcm9jZXNzVHJhbnNjcmlwdGlvbiIsInByb2NjZXNzVHJhbnNjcmlwdGlvbiIsIm5vdEZvdW5kIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlIiwiaWQiLCJkaXNhYmxlZCIsInRyaWdnZXJFdmVudCIsImV4dGVuc2lvbnMiLCJNYXAiLCJyZWFkeSIsInJlYWx0aW1lIiwib25MaXN0ZW5DaGF0IiwiYXV0b3BsYXkiLCJSZWFsdGltZVN0b3JlIiwiZ2xvYmFsVGhpcyIsImNoYXRTdG9yZSIsImxvYWQiLCJwcm9jZXNzTW9kZWwiLCJjaGF0SWQiLCJjdXJyZW50Q2hhdCIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJkZSIsImZldGNoaW5nIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJDaGF0IiwibG9hZEFsbCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwiZmlsZXMiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImUiLCJlcnJvciIsInNlbmRBdWRpbyIsInRyYW5zY3JpYmUiLCJ1bm1vdW50Iiwic3RvcCIsImNsZWFuIiwiX2NsaWVudCIsIl9jb252ZXJzYXRpb24iLCJpc1N0b3JlIiwiY29udmVyc2F0aW9uIiwiY2xpZW50IiwidmFsaWRhdGUiLCJpbnRlcnZhbCIsImF1ZGlvRGV2aWNlcyIsImF2YWlsYWJsZSIsInByb3BlcnRpZXMiLCJkdXJhdGlvbiIsIkNvbnZlcnNhdGlvbiIsIkNsaWVudFNlc3Npb24iLCJ2YWQiLCJtdXRlZCIsImluaXQiLCJpbnZhbGlkYXRlIiwiaW5pdGlhdGUiLCJpc1JlYWR5IiwiZW5kIiwiZGV2aWNlcyIsInByZXBhcmUiLCJ2YWx1ZXMiLCJzZWxlY3REZXZpY2UiLCJkZWZhdWx0IiwiZGV2aWNlU2VsZWN0ZWQiLCJkZXZpY2UiLCJmaW5kIiwidG9rZW4iLCJmaXJlYmFzZVRva2VuIiwidXBkYXRlIiwib25taWMiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJvZmYiLCJjYWxsIiwic3RhdHVzIiwiY29ubmVjdCIsImNsb3NlIiwicmVjb3JkIiwiaW5pdGlhbGlzZWQiLCJzdHJlYW0iLCJtZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwicmVjb3JkaW5nIiwiaW5pdFByb21pc2UiLCJzdG9wUHJvbWlzZSIsInJlY29yZGluZ1Byb21pc2UiLCJpc1NhZmFyaSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJoYXNQZXJtaXNzaW9ucyIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsImFjdGl2ZSIsImhhc1Blcm1pc3Npb24iLCJtaW1lVHlwZSIsIk1lZGlhUmVjb3JkZXIiLCJpc1R5cGVTdXBwb3J0ZWQiLCJvbmRhdGFhdmFpbGFibGUiLCJldmVudCIsImRhdGEiLCJzaXplIiwicHVzaCIsIlBlbmRpbmdQcm9taXNlIiwib25zdG9wIiwiQmxvYiIsInR5cGUiLCJyZXNvbHZlIiwic3RhcnQiLCJfcmVhY3QiLCJfaWNvbnMiLCJfaG9va3MiLCJfY29udGV4dCIsIkJhY2tBcnJvdyIsInN0b3JlIiwic2VwYXJhdG9yIiwiaWNvbiIsInVzZVJlZiIsImF0dHJpYnV0ZXMiLCJzY3JvbGxQb3NpdGlvbiIsInVzZUNoYXRDb250ZXh0IiwicmVmIiwidXNlQmluZGVyIiwic2V0VGltZW91dCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvciIsImRpc3RhbmNlRnJvbUJvdHRvbSIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbFRvcCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImdvVG9Cb3R0b20iLCJhZGQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTY3JvbGwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNscyIsImhhcyIsImdldCIsImNsc0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJfbWVzc2FnZXMiLCJfZ2V0Q2hhdENvbnRhaW5lckNsYXNzIiwiX2VtcHR5U3RhdGUiLCJpc1JlYWRlciIsInVzZVN0YXRlIiwic2VwYXJhdG9yUmVmIiwic3lzdGVtSWNvbiIsImVtcHR5Iiwic2hvd0F2YXRhciIsInNldE1lc3NhZ2VzQ291bnQiLCJ1cGRhdGVTY3JvbGwiLCJzZXRVcGRhdGVTY3JvbGwiLCJub3ciLCJjb250YWluZXJDbGFzcyIsImdldENoYXRDb250YWluZXJDbGFzcyIsInNjcm9sbFRvU2VwYXJhdG9yIiwidXNlQ2FsbGJhY2siLCJoYW5kbGVOZXdNZXNzYWdlIiwiRW1wdHlTdGF0ZSIsIk1lc3NhZ2VzIiwiX2NvbXBvbmVudHMiLCJDaGF0U2tlbGV0b24iLCJTcGlubmVyIiwidXNlRXh0ZW5zaW9uIiwic2V0UmVhZHkiLCJ3ZWJDb21wb25lbnROYW1lIiwiY29udHJvbCIsIm9uUmVhZHkiLCJGcmFnbWVudCIsImlzVmFsaWRFbGVtZW50IiwiQ29tcCIsIl9hbGVydCIsIl91c2VTdG9yZSIsIkVycm9yc1JlbmRlcmVyIiwiZXJyb3JzIiwidXNlU3RvcmUiLCJtYXAiLCJpZHgiLCJBbGVydCIsImtleSIsIkpTT04iLCJzdHJpbmdpZnkiLCJfdXNlTWFuYWdlciIsIl9jb250YWluZXIiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJza2VsZXRvbiIsIlNrZWxldG9uQ29udHJvbCIsInJlc3QiLCJzZXRTY3JvbGxQb3NpdGlvbiIsInNob3dSZWFsdGltZSIsInNldFNob3dSZWFsdGltZSIsInVzZU1hbmFnZXIiLCJzdG9yZVJlYWR5IiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDaGF0Q29udGV4dCIsIlByb3ZpZGVyIiwiUmVhbHRpbWVQYW5lbCIsImlzVmlzaWJsZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiZXZlbnRzIiwiQXJyYXkiLCJpc0FycmF5Iiwic2V0VmVyc2lvbiIsImhhbmRsZXIiLCJ2IiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJBZ2VudHNDaGF0UGFuZWwiLCJDaGF0Tm90Rm91bmQiLCJfcmVjb3JkaW5nIiwiSW5wdXRBY3Rpb25CdXR0b24iLCJidXR0b25Jc0Rpc2FibGVkIiwib25TdWJtaXQiLCJ0ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiQXBwSWNvbkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIklucHV0Q29udGV4dCIsIl91cGxvYWRlciIsInVzZUlucHV0Rm9ybSIsInNldFJlY29yZGluZyIsInNldEZldGNoaW5nIiwic2V0VGV4dCIsInRyaWdnZXJSZWYiLCJkcm9wWm9uZVJlZiIsInB1Ymxpc2giLCJ1cGxvYWRpbmciLCJwcm9ncmVzcyIsInVzZVVwbG9hZGVyIiwidXJsIiwibXVsdGlwbGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZVNlbmQiLCJpdGVtIiwiZmlsZSIsIl9mb3JtIiwiX3RleHRJbnB1dCIsIl9hY3Rpb25CdXR0b24iLCJfdXBsb2FkZWRGaWxlIiwiX2NvbnRleHQyIiwiX3VzZUlucHV0Rm9ybSIsIl9pY29uczIiLCJBZ2VudHNDaGF0SW5wdXQiLCJpc1dhaXRpbmciLCJhdXRvVHJhbnNjcmliZSIsImlzRmV0Y2hpbmciLCJ3YWl0aW5nUmVzcG9uc2UiLCJpc0Rpc2FibGVkIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsImFjdGl2YXRlRHJhZyIsImRlYWN0aXZhdGVEcmFnIiwiYXR0cnMiLCJjb250YWluZXJBdHRycyIsIm9uRHJhZ0VudGVyIiwib25EcmFnTGVhdmUiLCJvbkRyYWdPdmVyIiwib25Ecm9wIiwiY29udHJvbEF0dHJzIiwicmVwbGFjZUFsbCIsInRyaW0iLCJvbkNsaWNrU3BlZWNoIiwiRm9ybSIsIlVwbG9hZGVkRmlsZSIsInNyYyIsInRpdGxlIiwiSWNvbiIsIlRleHRJbnB1dCIsIl9tb2RhbCIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwiZGVzY3JpcHRpb24iLCJwZXJtaXNzaW9ucyIsIkFsZXJ0TW9kYWwiLCJjZW50ZXJlZCIsIl9wbGF5ZXIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJsb2ciLCJwbGF5QWN0aW9uIiwib25DbG9zZUVycm9yIiwiUGxheWVyIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdGltZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNldERpc2FibGVkIiwiY2FuY2VsIiwidHJhbnNjcmlwdGlvbiIsIlRpbWVyIiwiYWN0aW9uIiwiQnV0dG9uIiwidGV4dEFyZWFSZWYiLCJ0YXJnZXQiLCJzdHlsZSIsImhlaWdodCIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJyb3dzIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJNYXRoIiwiZmxvb3IiLCJfaW1hZ2UiLCJnZXRJY29uS2V5RnJvbVR5cGUiLCJzdGFydHNXaXRoIiwiaWNvbktleSIsImZpbGVUeXBlQ2xhc3MiLCJJbWFnZSIsImFsdCIsIkFwcEljb24iLCJfZnJhbWVyTW90aW9uIiwiX3N0YXR1cyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwidmFsaWQiLCJjYWxsU3RhdHVzIiwic3BlYWtlckljb24iLCJvbk1pY0NsaWNrIiwiaGFuZ3VwIiwibWljSWNvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJSZWFsdGltZVN0YXR1cyIsIl9zdGF0ZSIsIlNlbGVjdERldmljZSIsInN0YXRlIiwiU3RhdGUiLCJkZWZpbmUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJzZWxlY3QiLCJleGMiLCJvbmNoYW5nZSIsImh0bWxGb3IiLCJsYWJlbCIsIlBob25lSWNvbiIsImlzT2ZmIiwidmlld0JveCIsIndpZHRoIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZCIsIngxIiwieTEiLCJ4MiIsInkyIiwiTWljSWNvbiIsImlzTXV0ZWQiLCJzdHJva2VMaW5lY2FwIiwiU3BlYWtlckljb24iLCJwb2ludHMiLCJnZXRTdGF0dXNNZXNzYWdlIiwiY2xvc2VkIiwiY29ubmVjdGluZyIsIm9wZW4iLCJjbG9zaW5nIiwiY3JlYXRlZCIsIl9zdG9yZSIsInNldFN0b3JlIiwiY2hhbmdlQ291bnQiLCJzZXRDaGFuZ2VDb3VudCIsImNhbGxiYWNrIiwibWFuYWdlciIsInByZXZDb3VudCIsImNsZWFuVXAiLCJWaWV3IiwicHJvcHMiLCJDb250cm9sIl0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHktc3RhdGUudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3JzLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2hvb2tzL3VzZS1zdG9yZS50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvYWN0aW9uLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaG9va3MvdXNlLWlucHV0LWZvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvZXJyb3ItbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL21vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC90ZXh0LWlucHV0LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi9hZ2VudHMtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3VwbG9hZGVkLWZpbGUudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9kZXZpY2VzLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9pY29ucy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvc3RhdHVzLnRzeCIsIi90cy92aWV3cy91c2UtbWFuYWdlci50c3giLCIvdHMvdmlld3MvdXRpbHMvZ2V0LWNoYXQtY29udGFpbmVyLWNsYXNzLnRzIiwiL3RzL3ZpZXdzL3V0aWxzL2dldENoYXRDb250YWluZXJDbGFzcy50cyIsIi90cy92aWV3cy93aWRnZXQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxd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