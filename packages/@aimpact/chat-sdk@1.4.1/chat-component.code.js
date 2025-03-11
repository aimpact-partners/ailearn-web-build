System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/reactive@0.0.1/model", "@aimpact/chat-sdk@1.4.1/voice", "@aimpact/chat-sdk@1.4.1/wrapper", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/agents-api@0.4.1/realtime/client", "@aimpact/agents-api@0.4.1/realtime/client/conversation", "@aimpact/agents-api@0.4.1/realtime/audio/recorder", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/chat-sdk@1.4.1/messages", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/chat-sdk@1.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/agents-api@0.4.1/realtime/widgets/state"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, AudioManager, Recorder, Chat, AgentsChatContainer, ChatContext, useChatContext, AgentsChatPanel, AgentsChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, IAgentsContainerProps, __beyond_pkg, hmr;
  _export({
    AudioManager: void 0,
    Recorder: void 0,
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.20"]]);
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
        hash: 4111688587,
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
        hash: 1275314033,
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
        hash: 493829275,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@aimpact/reactive/model");
          /*bundle */
          class Recorder extends _model.ReactiveModel {
            #initialised = false;
            #source;
            #stream;
            #startTime;
            #initPromise;
            #stopPromise;
            #audioContext;
            #recordingPromise;
            #mediaRecorder;
            #chunks = [];
            get chunks() {
              return this.#chunks;
            }
            #status;
            get status() {
              return this.#status;
            }
            #recording = false;
            get recording() {
              return this.#recording;
            }
            #error;
            get error() {
              return this.#error;
            }
            get valid() {
              return !this.#error;
            }
            #audio;
            get audio() {
              return this.#audio;
            }
            #analyser;
            get analyser() {
              return this.#analyser;
            }
            #speechRecognition;
            #transcription = '';
            get transcription() {
              return this.#transcription;
            }
            #promiseSpeech;
            #permissions;
            #permissionObserver;
            #permissionState;
            constructor() {
              super();
              this.init();
            }
            async hasPermissions() {
              try {
                const stream = await navigator.mediaDevices.getUserMedia({
                  audio: true
                });
                stream.getTracks().forEach(track => track.stop());
                return true;
              } catch (e) {
                this.#error = e;
                return false;
              }
            }
            async init() {
              try {
                const permissions = await navigator.permissions.query({
                  name: 'microphone'
                });
                this.#permissions = permissions.state === 'granted';
                this.#permissionObserver = permissions;
                this.#permissionState = permissions.state;
                permissions.onchange = this.#onChangeStatus.bind(this);
              } catch (e) {
                // the permissions.query microphone validation is not supported in safari and firefox
                // this.#permissions = await this.getPermissions();
              } finally {
                this.ready = true;
              }
            }
            #onChangeStatus() {
              this.#permissionState = this.#permissionObserver.state;
              this.trigger('change');
            }
            getSpeechRecognition() {
              // console.log('getSpeechRecognition');
              //@ts-ignore
              this.#speechRecognition = new webkitSpeechRecognition();
              this.#speechRecognition.lang = 'es-ES';
              this.#speechRecognition.continuous = true;
              this.#speechRecognition.interimResults = true;
              // this.#speechRecognition.lang = 'en-US'; // Change this to the desired language
              this.#promiseSpeech = new _core.PendingPromise();
              this.#speechRecognition.onresult = event => {
                let interimTranscript = '';
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                  if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                    this.#transcription = finalTranscript;
                    this.#promiseSpeech.resolve(this.#transcription);
                  } else {
                    interimTranscript += event.results[i][0].transcript;
                  }
                }
              };
              this.#speechRecognition.onerror = event => console.error('error in transcription');
              this.#speechRecognition.start();
            }
            #onDataAvailable = event => {
              if (event.data.size === 0) return;
              this.#chunks.push(event.data);
              this.trigger('dataavailable');
            };
            #startRecording = (stream, specs) => {
              this.#mediaRecorder = new MediaRecorder(stream);
              this.#stream = stream;
              // Create an AudioContext
              // this.#audioContext = new (globalThis.AudioContext || globalThis.webkitAudioContext)();
              // Create an AnalyserNode
              // this.#analyser = this.#audioContext.createAnalyser();
              // Create a source from the stream and connect it to the analyser
              // this.#source = this.#audioContext.createMediaStreamSource(stream);
              // if (specs.analyser) this.#source.connect(this.#analyser);
              //@ts-ignore
              // if (specs.speechRecognition && 'webkitSpeechRecognition' in globalThis) {
              // 	this.getSpeechRecognition();
              // }
              this.#mediaRecorder.addEventListener('dataavailable', this.#onDataAvailable);
            };
            async initialise(specs = {}) {
              if (this.#initPromise) return await this.#initPromise;
              this.#initPromise = new _core.PendingPromise();
              globalThis?.navigator.mediaDevices.getUserMedia({
                audio: true
              }).then(stream => {
                this.#startRecording(stream, specs);
              }).catch(error => {
                this.#error = error.message;
                this.#initPromise.reject();
              }).finally(() => {
                this.#initialised = true;
                this.#initPromise.resolve();
              });
              return this.#initPromise;
            }
            record(specs = {
              analyser: true
            }) {
              try {
                if (this.#recordingPromise) return this.#recordingPromise;
                this.#recordingPromise = new _core.PendingPromise();
                if (this.#recording) {
                  throw new Error('Wait for recorder to be stopped and transcription ready');
                }
                this.#status = 'started';
                this.#recording = true;
                this.trigger('change');
                const onStream = async stream => {
                  this.#startRecording(stream, specs);
                  this.#recordingPromise.resolve();
                  this.#initialised = true;
                  // Detect Safari
                  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                  isSafari ? this.#mediaRecorder?.start() : this.#mediaRecorder?.start(1000); // hack for safari.
                };
                const onError = error => {
                  console.error(error);
                  this.#error = error.message;
                  this.#recordingPromise.reject();
                };
                globalThis?.navigator.mediaDevices.getUserMedia({
                  audio: true
                }).then(onStream).catch(onError);
                return this.#recordingPromise;
              } catch (e) {} finally {}
            }
            stopStream = () => {
              //stopping the capturing request by stopping all the tracks on the active stream
              this.#mediaRecorder.stop();
              this.#stream.getTracks() //get all tracks from the stream
              .forEach(track => {
                track.stop();
                // console.log('track stopped', track.kind, 'aja');
              }); //stop each one
              // Close the AudioContext if it exists
              if (this.#audioContext) {
                this.#audioContext.close();
                const microphone = this.#audioContext.createMediaStreamSource(this.#stream);
                microphone.disconnect;
                this.#audioContext.close().then(() => {
                  this.#audioContext = undefined;
                }).catch(error => {
                  console.error('Error closing AudioContext', error);
                });
              }
              this.#stream = undefined;
            };
            stop() {
              if (!this.#mediaRecorder) {
                console.warn('this.#mediaRecorder no initialize');
                return;
              }
              if (this.#stopPromise) return this.#stopPromise;
              this.#stopPromise = new _core.PendingPromise();
              if (!this.#recording) throw new Error('Recorder is not currently recording');
              this.#status = 'stopped';
              const stop = () => {
                this.#chunks = [];
                this.#recording = false;
                this.#mediaRecorder.addEventListener('stop', async () => {
                  const audio = new Blob(this.#chunks, {
                    type: this.#mediaRecorder.mimeType
                  });
                  //@ts-ignore
                  this.#audio = audio;
                  const onFinish = () => {
                    this.#stopPromise.resolve(audio);
                    this.#stopPromise = undefined;
                  };
                  if (this.#promiseSpeech) {
                    this.#promiseSpeech.then(onFinish);
                  } else {
                    if (this.#stopPromise) {
                      onFinish();
                    }
                  }
                  if (this.#recordingPromise) {
                    this.#recordingPromise.resolve(audio);
                    this.#recordingPromise = undefined;
                  }
                  this.stopStream();
                  this.#mediaRecorder = undefined;
                  this.#stream = undefined;
                  this.#initPromise = undefined;
                });
                this.#mediaRecorder?.stop();
                this.#speechRecognition?.stop();
                this.trigger('change');
              };
              this.#initialised ? stop() : this.record().then(stop);
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
        "im": "./store/recorder",
        "from": "Recorder",
        "name": "Recorder"
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
        (require || prop === 'Recorder') && _export("Recorder", Recorder = require ? require('./store/recorder').Recorder : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIkVYVEVOU0lPTlMiLCJtZXNzYWdlcyIsIml0ZW1zIiwiY2F0ZWdvcnkiLCJjaGF0IiwibW9kZWwiLCJjaGF0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwicHJvY2Vzc1RyYW5zY3JpcHRpb24iLCJwcm9jY2Vzc1RyYW5zY3JpcHRpb24iLCJzZWxlY3RlZE1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInJlYWR5IiwicmVhbHRpbWUiLCJvbkxpc3RlbkNoYXQiLCJhdXRvcGxheSIsIlJlYWx0aW1lU3RvcmUiLCJsb2FkIiwicHJvY2Vzc01vZGVsIiwiY2hhdElkIiwiY3VycmVudENoYXQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwiZmV0Y2hpbmciLCJjb25zb2xlIiwid2FybiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImxvZ2dlZCIsIkNoYXQiLCJnbG9iYWxUaGlzIiwibG9hZEFsbCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic291cmNlIiwic3RyZWFtIiwic3RhcnRUaW1lIiwiaW5pdFByb21pc2UiLCJzdG9wUHJvbWlzZSIsImF1ZGlvQ29udGV4dCIsInJlY29yZGluZ1Byb21pc2UiLCJtZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwicmVjb3JkaW5nIiwidmFsaWQiLCJhbmFseXNlciIsInNwZWVjaFJlY29nbml0aW9uIiwidHJhbnNjcmlwdGlvbiIsInByb21pc2VTcGVlY2giLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25PYnNlcnZlciIsInBlcm1pc3Npb25TdGF0ZSIsImhhc1Blcm1pc3Npb25zIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwicXVlcnkiLCJzdGF0ZSIsIm9uY2hhbmdlIiwib25DaGFuZ2VTdGF0dXMiLCJiaW5kIiwiI29uQ2hhbmdlU3RhdHVzIiwiZ2V0U3BlZWNoUmVjb2duaXRpb24iLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJQZW5kaW5nUHJvbWlzZSIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsImkiLCJyZXN1bHRJbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJpc0ZpbmFsIiwidHJhbnNjcmlwdCIsInJlc29sdmUiLCJvbmVycm9yIiwic3RhcnQiLCJvbkRhdGFBdmFpbGFibGUiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJzdGFydFJlY29yZGluZyIsIiNzdGFydFJlY29yZGluZyIsInNwZWNzIiwiTWVkaWFSZWNvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXNlIiwidGhlbiIsImNhdGNoIiwicmVqZWN0IiwiZmluYWxseSIsIm9uU3RyZWFtIiwiaXNTYWZhcmkiLCJ0ZXN0IiwidXNlckFnZW50Iiwib25FcnJvciIsInN0b3BTdHJlYW0iLCJtaWNyb3Bob25lIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJkaXNjb25uZWN0IiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJhdHRyaWJ1dGVzIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNscyIsImhhcyIsImdldCIsImNsc0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJfbWVzc2FnZXMiLCJyZWFkZXIiLCJ1c2VTdGF0ZSIsInN5c3RlbUljb24iLCJlbXB0eSIsInNldE1lc3NhZ2VzIiwidXBkYXRlU2Nyb2xsIiwic2V0VXBkYXRlU2Nyb2xsIiwibm93Iiwib25OZXdNZXNzYWdlIiwiY2xzQ29udGVudCIsIkNvbnRyb2wiLCJGcmFnbWVudCIsIk1lc3NhZ2VzIiwiX2NvbXBvbmVudHMiLCJDaGF0U2tlbGV0b24iLCJTcGlubmVyIiwiYWN0aXZlIiwidXNlRXh0ZW5zaW9uIiwic2V0UmVhZHkiLCJ3ZWJDb21wb25lbnROYW1lIiwiY29udHJvbCIsIm9uUmVhZHkiLCJfdXNlTWFuYWdlciIsIl9jb250YWluZXIiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJza2VsZXRvbiIsInByb3BzIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJzaG93UmVhbHRpbWUiLCJzZXRTaG93UmVhbHRpbWUiLCJ1c2VNYW5hZ2VyIiwib2JqIiwiU2tlbGV0b25Db250cm9sIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDaGF0Q29udGV4dCIsIlByb3ZpZGVyIiwiUmVhbHRpbWVQYW5lbCIsImlzVmlzaWJsZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJBZ2VudHNDaGF0UGFuZWwiLCJDaGF0Tm90Rm91bmQiLCJfcmVjb3JkaW5nIiwiSW5wdXRBY3Rpb25CdXR0b24iLCJidXR0b25Jc0Rpc2FibGVkIiwib25TdWJtaXQiLCJ0ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiQXBwSWNvbkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Rm9ybSIsInNldFJlY29yZGluZyIsInNldEZldGNoaW5nIiwic2V0VGV4dCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlU2VuZCIsIl9mb3JtIiwiX3RleHRJbnB1dCIsIl9hY3Rpb25CdXR0b24iLCJfY29udGV4dDIiLCJfdXNlSW5wdXRGb3JtIiwiQWdlbnRzQ2hhdElucHV0IiwiaXNXYWl0aW5nIiwiYXV0b1RyYW5zY3JpYmUiLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsIndhaXRpbmdSZXNwb25zZSIsImlzRmV0Y2hpbmciLCJpc0Rpc2FibGVkIiwiYXR0cnMiLCJjb250YWluZXJBdHRycyIsImNvbnRyb2xBdHRycyIsInJlcGxhY2VBbGwiLCJ0cmltIiwib25DbGlja1NwZWVjaCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJfbW9kYWwiLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJBbGVydE1vZGFsIiwiY2VudGVyZWQiLCJJY29uIiwiX3BsYXllciIsIl9lcnJvck1vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2V0RXJyb3IiLCJzZXRIYXNQZXJtaXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwic2V0SXRlbSIsImxvZyIsInBsYXlBY3Rpb24iLCJvbkNsb3NlRXJyb3IiLCJQbGF5ZXIiLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwic3VidGl0bGUiLCJpbnRybyIsIl90aW1lciIsIl9pY29uczIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNldERpc2FibGVkIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJCdXR0b24iLCJ0ZXh0QXJlYVJlZiIsInRhcmdldCIsInN0eWxlIiwiaGVpZ2h0IiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsInJvd3MiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsIk1hdGgiLCJmbG9vciIsIl9mcmFtZXJNb3Rpb24iLCJfaW1hZ2UiLCJfc3RhdHVzIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJjYWxsU3RhdHVzIiwic3BlYWtlckljb24iLCJlcnJvcnMiLCJvbk1pY0NsaWNrIiwiaGFuZ3VwIiwibWljSWNvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJJbWFnZSIsInNyYyIsIlJlYWx0aW1lU3RhdHVzIiwiX3N0YXRlIiwiU2VsZWN0RGV2aWNlIiwiU3RhdGUiLCJkZWZpbmUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJzZWxlY3QiLCJleGMiLCJodG1sRm9yIiwibWFwIiwibGFiZWwiLCJQaG9uZUljb24iLCJpc09mZiIsInZpZXdCb3giLCJ3aWR0aCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIk1pY0ljb24iLCJpc011dGVkIiwic3Ryb2tlTGluZWNhcCIsIlNwZWFrZXJJY29uIiwicG9pbnRzIiwiZ2V0U3RhdHVzTWVzc2FnZSIsImNsb3NlZCIsImNvbm5lY3RpbmciLCJvcGVuIiwiY2xvc2luZyIsImNyZWF0ZWQiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwiY2FsbGJhY2siLCJtYW5hZ2VyIiwiZ2V0UHJvcGVydGllcyIsImNsZWFuVXAiLCJWaWV3Il0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2FjdGlvbi1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2hvb2tzL3VzZS1pbnB1dC1mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvYWdlbnRzLWlucHV0LnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvZGV2aWNlcy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvaWNvbnMudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL3N0YXR1cy50c3giLCIvdHMvdmlld3MvdXNlLW1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL3dpZGdldC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFHQSxJQUFBRyxTQUFBLEdBQUFILE9BQUE7VUFLTztVQUFZLE1BQU9JLFlBQWEsU0FBUUwsTUFBQSxDQUFBTSxhQUFxQjtZQUduRSxDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsUUFBUztZQUVULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RC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