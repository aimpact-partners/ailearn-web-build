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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/rvd", "0.4.14"]]);
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
        hash: 1122987580,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIm1lc3NhZ2VzIiwiaXRlbXMiLCJsZW5ndGgiLCJjYXRlZ29yeSIsImNoYXQiLCJtb2RlbCIsImNoYXRzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0ZXh0c01vZGVsIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJwcm9jZXNzVHJhbnNjcmlwdGlvbiIsInByb2NjZXNzVHJhbnNjcmlwdGlvbiIsIm5vdEZvdW5kIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlIiwiaWQiLCJkaXNhYmxlZCIsInRyaWdnZXJFdmVudCIsImV4dGVuc2lvbnMiLCJNYXAiLCJyZWFkeSIsInJlYWx0aW1lIiwib25MaXN0ZW5DaGF0IiwiYXV0b3BsYXkiLCJSZWFsdGltZVN0b3JlIiwiZ2xvYmFsVGhpcyIsImNoYXRTdG9yZSIsImxvYWQiLCJwcm9jZXNzTW9kZWwiLCJjaGF0SWQiLCJjdXJyZW50Q2hhdCIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJkZSIsImZldGNoaW5nIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJDaGF0IiwibG9hZEFsbCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic3RyZWFtIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInJlY29yZGluZyIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJyZWNvcmRpbmdQcm9taXNlIiwiaXNTYWZhcmkiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGFzUGVybWlzc2lvbnMiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJhY3RpdmUiLCJoYXNQZXJtaXNzaW9uIiwibWltZVR5cGUiLCJNZWRpYVJlY29yZGVyIiwiaXNUeXBlU3VwcG9ydGVkIiwib25kYXRhYXZhaWxhYmxlIiwiZXZlbnQiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJQZW5kaW5nUHJvbWlzZSIsIm9uc3RvcCIsIkJsb2IiLCJ0eXBlIiwicmVzb2x2ZSIsInN0YXJ0IiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJhdHRyaWJ1dGVzIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJnZXQiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX21lc3NhZ2VzIiwiX2dldENoYXRDb250YWluZXJDbGFzcyIsIl9lbXB0eVN0YXRlIiwiaXNSZWFkZXIiLCJ1c2VTdGF0ZSIsInNlcGFyYXRvclJlZiIsInN5c3RlbUljb24iLCJlbXB0eSIsInNob3dBdmF0YXIiLCJzZXRNZXNzYWdlc0NvdW50IiwidXBkYXRlU2Nyb2xsIiwic2V0VXBkYXRlU2Nyb2xsIiwibm93IiwiY29udGFpbmVyQ2xhc3MiLCJnZXRDaGF0Q29udGFpbmVyQ2xhc3MiLCJzY3JvbGxUb1NlcGFyYXRvciIsInVzZUNhbGxiYWNrIiwiaGFuZGxlTmV3TWVzc2FnZSIsIkVtcHR5U3RhdGUiLCJNZXNzYWdlcyIsIl9jb21wb25lbnRzIiwiQ2hhdFNrZWxldG9uIiwiU3Bpbm5lciIsInVzZUV4dGVuc2lvbiIsInNldFJlYWR5Iiwid2ViQ29tcG9uZW50TmFtZSIsImNvbnRyb2wiLCJvblJlYWR5IiwiRnJhZ21lbnQiLCJpc1ZhbGlkRWxlbWVudCIsIkNvbXAiLCJfYWxlcnQiLCJfdXNlU3RvcmUiLCJFcnJvcnNSZW5kZXJlciIsImVycm9ycyIsInVzZVN0b3JlIiwibWFwIiwiaWR4IiwiQWxlcnQiLCJrZXkiLCJKU09OIiwic3RyaW5naWZ5IiwiX3VzZU1hbmFnZXIiLCJfY29udGFpbmVyIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsImNoaWxkcmVuIiwic2tlbGV0b24iLCJTa2VsZXRvbkNvbnRyb2wiLCJyZXN0Iiwic2V0U2Nyb2xsUG9zaXRpb24iLCJzaG93UmVhbHRpbWUiLCJzZXRTaG93UmVhbHRpbWUiLCJ1c2VNYW5hZ2VyIiwic3RvcmVSZWFkeSIsImNvbnRleHRWYWx1ZSIsInRyYWNlIiwiQ2hhdENvbnRleHQiLCJQcm92aWRlciIsIlJlYWx0aW1lUGFuZWwiLCJpc1Zpc2libGUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImV2ZW50cyIsIkFycmF5IiwiaXNBcnJheSIsInNldFZlcnNpb24iLCJoYW5kbGVyIiwidiIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQ2hhdE5vdEZvdW5kIiwiX3JlY29yZGluZyIsIklucHV0QWN0aW9uQnV0dG9uIiwiYnV0dG9uSXNEaXNhYmxlZCIsIm9uU3VibWl0IiwidGV4dCIsInVzZUlucHV0Q29udGV4dCIsIkFwcEljb25CdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dEZvcm0iLCJzZXRSZWNvcmRpbmciLCJzZXRGZXRjaGluZyIsInNldFRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZVNlbmQiLCJfZm9ybSIsIl90ZXh0SW5wdXQiLCJfYWN0aW9uQnV0dG9uIiwiX2NvbnRleHQyIiwiX3VzZUlucHV0Rm9ybSIsIkFnZW50c0NoYXRJbnB1dCIsImlzV2FpdGluZyIsImF1dG9UcmFuc2NyaWJlIiwiaXNGZXRjaGluZyIsIndhaXRpbmdSZXNwb25zZSIsImlzRGlzYWJsZWQiLCJhdHRycyIsImNvbnRhaW5lckF0dHJzIiwiY29udHJvbEF0dHJzIiwicmVwbGFjZUFsbCIsInRyaW0iLCJvbkNsaWNrU3BlZWNoIiwiRm9ybSIsIlRleHRJbnB1dCIsIl9tb2RhbCIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBlcm1pc3Npb25zIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJsb2ciLCJwbGF5QWN0aW9uIiwib25DbG9zZUVycm9yIiwiUGxheWVyIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdGltZXIiLCJfaWNvbnMyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzZXREaXNhYmxlZCIsImNhbmNlbCIsInRyYW5zY3JpcHRpb24iLCJUaW1lciIsImFjdGlvbiIsIkJ1dHRvbiIsInRleHRBcmVhUmVmIiwidGFyZ2V0Iiwic3R5bGUiLCJoZWlnaHQiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwicm93cyIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiTWF0aCIsImZsb29yIiwiX2ZyYW1lck1vdGlvbiIsIl9pbWFnZSIsIl9zdGF0dXMiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInZhbGlkIiwiY2FsbFN0YXR1cyIsInNwZWFrZXJJY29uIiwib25NaWNDbGljayIsImhhbmd1cCIsIm1pY0ljb24iLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiSW1hZ2UiLCJzcmMiLCJSZWFsdGltZVN0YXR1cyIsIl9zdGF0ZSIsIlNlbGVjdERldmljZSIsInN0YXRlIiwiU3RhdGUiLCJkZWZpbmUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJzZWxlY3QiLCJleGMiLCJvbmNoYW5nZSIsImh0bWxGb3IiLCJsYWJlbCIsIlBob25lSWNvbiIsImlzT2ZmIiwidmlld0JveCIsIndpZHRoIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZCIsIngxIiwieTEiLCJ4MiIsInkyIiwiTWljSWNvbiIsImlzTXV0ZWQiLCJzdHJva2VMaW5lY2FwIiwiU3BlYWtlckljb24iLCJwb2ludHMiLCJnZXRTdGF0dXNNZXNzYWdlIiwiY2xvc2VkIiwiY29ubmVjdGluZyIsIm9wZW4iLCJjbG9zaW5nIiwiY3JlYXRlZCIsIl9zdG9yZSIsInNldFN0b3JlIiwiY2hhbmdlQ291bnQiLCJzZXRDaGFuZ2VDb3VudCIsImNhbGxiYWNrIiwibWFuYWdlciIsInByZXZDb3VudCIsImNsZWFuVXAiLCJWaWV3IiwicHJvcHMiLCJDb250cm9sIl0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHktc3RhdGUudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3JzLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2hvb2tzL3VzZS1zdG9yZS50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvYWN0aW9uLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaG9va3MvdXNlLWlucHV0LWZvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvZXJyb3ItbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL21vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC90ZXh0LWlucHV0LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi9hZ2VudHMtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9kZXZpY2VzLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9pY29ucy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvc3RhdHVzLnRzeCIsIi90cy92aWV3cy91c2UtbWFuYWdlci50c3giLCIvdHMvdmlld3MvdXRpbHMvZ2V0LWNoYXQtY29udGFpbmVyLWNsYXNzLnRzIiwiL3RzL3ZpZXdzL3V0aWxzL2dldENoYXRDb250YWluZXJDbGFzcy50cyIsIi90cy92aWV3cy93aWRnZXQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBR0EsSUFBQUcsU0FBQSxHQUFBSCxPQUFBO1VBS087VUFBWSxNQUFPSSxZQUFhLFNBQVFMLE1BQUEsQ0FBQU0sYUFBcUI7WUFHbkUsQ0FBQUMsTUFBTztZQUNQLENBQUFDLFFBQVM7WUFFVCxJQUFJQSxRQUFRQSxD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