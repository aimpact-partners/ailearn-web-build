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
        hash: 1205232945,
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
                  this.#mediaRecorder?.start(1000); // hack for safari.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIkVYVEVOU0lPTlMiLCJtZXNzYWdlcyIsIml0ZW1zIiwiY2F0ZWdvcnkiLCJjaGF0IiwibW9kZWwiLCJjaGF0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwicHJvY2Vzc1RyYW5zY3JpcHRpb24iLCJwcm9jY2Vzc1RyYW5zY3JpcHRpb24iLCJzZWxlY3RlZE1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInJlYWR5IiwicmVhbHRpbWUiLCJvbkxpc3RlbkNoYXQiLCJhdXRvcGxheSIsIlJlYWx0aW1lU3RvcmUiLCJsb2FkIiwicHJvY2Vzc01vZGVsIiwiY2hhdElkIiwiY3VycmVudENoYXQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwiZmV0Y2hpbmciLCJjb25zb2xlIiwid2FybiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImxvZ2dlZCIsIkNoYXQiLCJnbG9iYWxUaGlzIiwibG9hZEFsbCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic291cmNlIiwic3RyZWFtIiwic3RhcnRUaW1lIiwiaW5pdFByb21pc2UiLCJzdG9wUHJvbWlzZSIsImF1ZGlvQ29udGV4dCIsInJlY29yZGluZ1Byb21pc2UiLCJtZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwicmVjb3JkaW5nIiwidmFsaWQiLCJhbmFseXNlciIsInNwZWVjaFJlY29nbml0aW9uIiwidHJhbnNjcmlwdGlvbiIsInByb21pc2VTcGVlY2giLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25PYnNlcnZlciIsInBlcm1pc3Npb25TdGF0ZSIsImhhc1Blcm1pc3Npb25zIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwicXVlcnkiLCJzdGF0ZSIsIm9uY2hhbmdlIiwib25DaGFuZ2VTdGF0dXMiLCJiaW5kIiwiI29uQ2hhbmdlU3RhdHVzIiwiZ2V0U3BlZWNoUmVjb2duaXRpb24iLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJQZW5kaW5nUHJvbWlzZSIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsImkiLCJyZXN1bHRJbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJpc0ZpbmFsIiwidHJhbnNjcmlwdCIsInJlc29sdmUiLCJvbmVycm9yIiwic3RhcnQiLCJvbkRhdGFBdmFpbGFibGUiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJzdGFydFJlY29yZGluZyIsIiNzdGFydFJlY29yZGluZyIsInNwZWNzIiwiTWVkaWFSZWNvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXNlIiwidGhlbiIsImNhdGNoIiwicmVqZWN0IiwiZmluYWxseSIsIm9uU3RyZWFtIiwib25FcnJvciIsInN0b3BTdHJlYW0iLCJtaWNyb3Bob25lIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJkaXNjb25uZWN0IiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJhdHRyaWJ1dGVzIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNscyIsImhhcyIsImdldCIsImNsc0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJfbWVzc2FnZXMiLCJyZWFkZXIiLCJ1c2VTdGF0ZSIsInN5c3RlbUljb24iLCJlbXB0eSIsInNldE1lc3NhZ2VzIiwidXBkYXRlU2Nyb2xsIiwic2V0VXBkYXRlU2Nyb2xsIiwibm93Iiwib25OZXdNZXNzYWdlIiwiY2xzQ29udGVudCIsIkNvbnRyb2wiLCJGcmFnbWVudCIsIk1lc3NhZ2VzIiwiX2NvbXBvbmVudHMiLCJDaGF0U2tlbGV0b24iLCJTcGlubmVyIiwiYWN0aXZlIiwidXNlRXh0ZW5zaW9uIiwic2V0UmVhZHkiLCJ3ZWJDb21wb25lbnROYW1lIiwiY29udHJvbCIsIm9uUmVhZHkiLCJfdXNlTWFuYWdlciIsIl9jb250YWluZXIiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJza2VsZXRvbiIsInByb3BzIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJzaG93UmVhbHRpbWUiLCJzZXRTaG93UmVhbHRpbWUiLCJ1c2VNYW5hZ2VyIiwib2JqIiwiU2tlbGV0b25Db250cm9sIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDaGF0Q29udGV4dCIsIlByb3ZpZGVyIiwiUmVhbHRpbWVQYW5lbCIsImlzVmlzaWJsZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJBZ2VudHNDaGF0UGFuZWwiLCJDaGF0Tm90Rm91bmQiLCJfcmVjb3JkaW5nIiwiSW5wdXRBY3Rpb25CdXR0b24iLCJidXR0b25Jc0Rpc2FibGVkIiwib25TdWJtaXQiLCJ0ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiQXBwSWNvbkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Rm9ybSIsInNldFJlY29yZGluZyIsInNldEZldGNoaW5nIiwic2V0VGV4dCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlU2VuZCIsIl9mb3JtIiwiX3RleHRJbnB1dCIsIl9hY3Rpb25CdXR0b24iLCJfY29udGV4dDIiLCJfdXNlSW5wdXRGb3JtIiwiQWdlbnRzQ2hhdElucHV0IiwiaXNXYWl0aW5nIiwiYXV0b1RyYW5zY3JpYmUiLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsIndhaXRpbmdSZXNwb25zZSIsImlzRmV0Y2hpbmciLCJpc0Rpc2FibGVkIiwiYXR0cnMiLCJjb250YWluZXJBdHRycyIsImNvbnRyb2xBdHRycyIsInJlcGxhY2VBbGwiLCJ0cmltIiwib25DbGlja1NwZWVjaCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJfbW9kYWwiLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJBbGVydE1vZGFsIiwiY2VudGVyZWQiLCJJY29uIiwiX3BsYXllciIsIl9lcnJvck1vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2V0RXJyb3IiLCJzZXRIYXNQZXJtaXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwic2V0SXRlbSIsImxvZyIsInBsYXlBY3Rpb24iLCJvbkNsb3NlRXJyb3IiLCJQbGF5ZXIiLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwic3VidGl0bGUiLCJpbnRybyIsIl90aW1lciIsIl9pY29uczIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNldERpc2FibGVkIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJCdXR0b24iLCJ0ZXh0QXJlYVJlZiIsInRhcmdldCIsInN0eWxlIiwiaGVpZ2h0IiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsInJvd3MiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsIk1hdGgiLCJmbG9vciIsIl9mcmFtZXJNb3Rpb24iLCJfaW1hZ2UiLCJfc3RhdHVzIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJjYWxsU3RhdHVzIiwic3BlYWtlckljb24iLCJlcnJvcnMiLCJvbk1pY0NsaWNrIiwiaGFuZ3VwIiwibWljSWNvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJJbWFnZSIsInNyYyIsIlJlYWx0aW1lU3RhdHVzIiwiX3N0YXRlIiwiU2VsZWN0RGV2aWNlIiwiU3RhdGUiLCJkZWZpbmUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJzZWxlY3QiLCJleGMiLCJodG1sRm9yIiwibWFwIiwibGFiZWwiLCJQaG9uZUljb24iLCJpc09mZiIsInZpZXdCb3giLCJ3aWR0aCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIk1pY0ljb24iLCJpc011dGVkIiwic3Ryb2tlTGluZWNhcCIsIlNwZWFrZXJJY29uIiwicG9pbnRzIiwiZ2V0U3RhdHVzTWVzc2FnZSIsImNsb3NlZCIsImNvbm5lY3RpbmciLCJvcGVuIiwiY2xvc2luZyIsImNyZWF0ZWQiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwiY2FsbGJhY2siLCJtYW5hZ2VyIiwiZ2V0UHJvcGVydGllcyIsImNsZWFuVXAiLCJWaWV3Il0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2FjdGlvbi1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2hvb2tzL3VzZS1pbnB1dC1mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvYWdlbnRzLWlucHV0LnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvZGV2aWNlcy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvaWNvbnMudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL3N0YXR1cy50c3giLCIvdHMvdmlld3MvdXNlLW1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL3dpZGdldC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFHQSxJQUFBRyxTQUFBLEdBQUFILE9BQUE7VUFLTztVQUFZLE1BQU9JLFlBQWEsU0FBUUwsTUFBQSxDQUFBTSxhQUFxQjtZQUduRSxDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsUUFBUztZQUVULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQUMsT0FBUSxHQUFHO2NBQ1ZDLEdBQUcsRUFBRVIsTUFBQSxDQUFBUyxLQUFLO2NBQ1ZDLEdBQUcsRUFBRVYsTUFBQSxDQUFBVyxRQUFRLENBQUM7YUFDZDtZQUVELENBQUFDLE1BQU8sR0FBRyxLQUFLO1lBQ2YsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFDLGFBQWM7WUFDM0I7WUFFQSxDQUFBQSxhQUFjO1lBQ2RDLFlBQVlULE1BQU0sRUFBRVUsUUFBUTtjQUMzQixLQUFLLENBQUMsRUFBRSxDQUFDO2NBQ1QsSUFBSSxDQUFDLENBQUFULFFBQVMsR0FBRyxJQUFJSixTQUFBLENBQUFjLFFBQVEsRUFBRTtjQUMvQixJQUFJLENBQUMsQ0FBQVgsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQ1ksYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7Y0FDaENGLFFBQVEsR0FBR0EsUUFBUSxJQUFJZCxRQUFBLENBQUFpQixVQUFVLENBQUNILFFBQVE7Y0FFMUMsSUFBSSxDQUFDLENBQUFGLGFBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBTixPQUFRLENBQUNDLEdBQUcsQ0FBQztnQkFDM0NPLFFBQVE7Z0JBQ1JJLElBQUksRUFBRWxCLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQ0U7ZUFDakIsQ0FBQztjQUVGbkIsUUFBQSxDQUFBaUIsVUFBVSxDQUFDRyxFQUFFLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQztZQUM1RDtZQUVBQSxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCLE1BQU07Z0JBQUVILElBQUk7Z0JBQUVKO2NBQVEsQ0FBRSxHQUFHZCxRQUFBLENBQUFpQixVQUFVO2NBQ3JDLElBQUksQ0FBQyxDQUFBTCxhQUFjLENBQUNVLEdBQUcsQ0FBQztnQkFBRUosSUFBSTtnQkFBRUo7Y0FBUSxDQUFFLENBQUM7WUFDNUMsQ0FBQztZQUVEUyxZQUFZQSxDQUFDQyxJQUFJO2NBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWxCLE9BQVEsQ0FBQ2tCLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLFVBQVVELElBQUksWUFBWSxDQUFDO2NBRXJFLElBQUksQ0FBQyxDQUFBYixNQUFPLEdBQUdhLElBQUk7Y0FDbkIsSUFBSSxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCOztVQUNBL0IsT0FBQSxDQUFBTyxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekRELElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE2QixLQUFBLEdBQUE3QixPQUFBO1VBRUEsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQThCLE1BQUEsR0FBQTlCLE9BQUE7VUFDQSxJQUFBK0IsUUFBQSxHQUFBL0IsT0FBQTtVQUNBLElBQUFnQyxNQUFBLEdBQUFoQyxPQUFBO1VBQ0EsSUFBQWlDLGVBQUEsR0FBQWpDLE9BQUE7VUFFQSxJQUFBa0MsU0FBQSxHQUFBbEMsT0FBQTtVQUVNLE1BQU9tQyxZQUFhLFNBQVFwQyxNQUFBLENBQUFNLGFBQXFCO1lBTXRELENBQUErQixVQUFXLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDNUIsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTLEVBQUVDLEtBQUs7WUFDN0I7WUFFQSxDQUFBWixJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxDQUFBYSxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUQsSUFBSztZQUNsQjtZQUNBLENBQUFFLEtBQU0sR0FBR3hDLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQ3VCLEtBQUs7WUFDekIsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ0osS0FBSyxJQUFJLEVBQUU7WUFDL0I7WUFFQSxDQUFBSyxLQUFNLEdBQStCLElBQUlYLE1BQUEsQ0FBQVksWUFBWSxDQUFDWCxlQUFBLENBQUFZLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBSixLQUFNO1lBQ25CO1lBQ0EsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRTdDLEtBQUs7WUFDMUI7WUFDQSxDQUFBa0QsS0FBTTtZQUNOLElBQUlDLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBRCxLQUFNO1lBQ25CO1lBRUEsQ0FBQUUsb0JBQXFCLEdBQUcsS0FBSztZQUM3QixJQUFJQyxxQkFBcUJBLENBQUE7Y0FDeEIsT0FBTyxJQUFJLENBQUMsQ0FBQUQsb0JBQXFCO1lBQ2xDO1lBRUEsQ0FBQUUsYUFBYyxHQUFHLE9BQU87WUFDeEIsSUFBSUEsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzNCO1lBQ0EsSUFBSUEsYUFBYUEsQ0FBQ1gsS0FBSztjQUN0QixJQUFJLENBQUMsQ0FBQVcsYUFBYyxHQUFHWCxLQUFLO1lBQzVCO1lBRUEsQ0FBQVksUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsSUFBSUEsUUFBUUEsQ0FBQ0EsUUFBUTtjQUNwQixJQUFJLENBQUMsQ0FBQUEsUUFBUyxHQUFHQSxRQUFRO1lBQzFCO1lBRUEsQ0FBQUMsY0FBZTtZQUNmLElBQUlBLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsY0FBZTtZQUM1QjtZQUVBLElBQUlBLGNBQWNBLENBQUNDLE9BQU87Y0FDekIsSUFBSUEsT0FBTyxFQUFFQyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUFGLGNBQWUsRUFBRUUsRUFBRSxFQUFFO2NBQzlDLElBQUksQ0FBQyxDQUFBRixjQUFlLEdBQUdDLE9BQU87WUFDL0I7WUFFQSxDQUFBRSxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxJQUFJQSxRQUFRQSxDQUFDQSxRQUFRO2NBQ3BCLElBQUksSUFBSSxDQUFDLENBQUFBLFFBQVMsS0FBS0EsUUFBUSxFQUFFO2NBQ2pDLElBQUksQ0FBQyxDQUFBQSxRQUFTLEdBQUdBLFFBQVE7Y0FDekIsSUFBSSxDQUFDQyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzVCO1lBRUEsQ0FBQUMsVUFBVyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUN2QixJQUFJRCxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUNBLENBQUFILEVBQUc7WUFFSCxJQUFJSyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQWxCLEtBQU0sQ0FBQ2tCLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQUMsUUFBUyxFQUFFRCxLQUFLO1lBQ2pFO1lBRUEsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsQ0FBQUMsWUFBYTtZQUNiLENBQUF0QixLQUFNO1lBQ04xQixZQUFZO2NBQUV5QyxFQUFFO2NBQUV4QyxRQUFRO2NBQUU4QyxRQUFRLEdBQUcsS0FBSztjQUFFckIsS0FBSztjQUFFc0I7WUFBWSxDQUFFO2NBQ2xFLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBcEIsS0FBTSxDQUFDckIsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNvQyxZQUFZLENBQUM7Y0FDM0MsSUFBSSxDQUFDLENBQUFGLEVBQUcsR0FBR0EsRUFBRTtjQUNiLElBQUksQ0FBQ3RDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztjQUMvRCxJQUFJLENBQUM4QyxRQUFRLEdBQUcsSUFBSTtjQUNwQixJQUFJLENBQUNoRCxRQUFRLEdBQUdBLFFBQVE7Y0FDeEIsSUFBSSxDQUFDLENBQUFnQyxLQUFNLEdBQUcsSUFBSWxCLE1BQUEsQ0FBQTFCLFlBQVksQ0FBQyxJQUFJLEVBQUVZLFFBQVEsQ0FBQztjQUM5QyxJQUFJLENBQUMsQ0FBQThDLFFBQVMsR0FBRyxJQUFJNUIsU0FBQSxDQUFBK0IsYUFBYSxDQUFDSCxRQUFRLENBQUM7Y0FDNUMsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ3hDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDb0MsWUFBWSxDQUFDO2NBQzlDLElBQUksQ0FBQyxDQUFBSyxZQUFhLEdBQUdBLFlBQVk7Y0FDakMsSUFBSSxDQUFDLENBQUF0QixLQUFNLEdBQUdBLEtBQUs7Y0FDbkIsSUFBSSxDQUFDQSxLQUFLLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDeUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBVixFQUFHLENBQUM7ZUFDbkIsTUFBTTtnQkFDTixJQUFJLENBQUNXLFlBQVksRUFBRTs7WUFFckI7WUFFQUEsWUFBWUEsQ0FBQTtjQUNYLElBQUksQ0FBQyxDQUFBM0IsSUFBSyxHQUFHLElBQUksQ0FBQyxDQUFBQyxLQUFNO2NBQ3hCRCxJQUFJLENBQUNsQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ29DLFlBQVksQ0FBQztjQUNwQyxJQUFJLENBQUMsQ0FBQXJCLFFBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQUcsSUFBSyxDQUFDSCxRQUFRO2NBQ3BDLElBQUksQ0FBQyxDQUFBeUIsUUFBUyxDQUFDTSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUEzQixLQUFNLENBQUNlLEVBQUU7Y0FDdEN0RCxRQUFBLENBQUFpQixVQUFVLENBQUNrRCxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUE1QixLQUFNO2NBRXBDLE1BQU16QixRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRLElBQUlkLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQ0gsUUFBUTtjQUVyRCxNQUFNc0QsU0FBUyxHQUFHO2dCQUNqQkMsRUFBRSxFQUFFLE9BQU87Z0JBQ1hDLEVBQUUsRUFBRTtlQUNKO2NBQ0QsSUFBSSxDQUFDdkIsWUFBWSxDQUFDcEMsTUFBTSxDQUFDVyxHQUFHLENBQUM7Z0JBQUVSLFFBQVEsRUFBRXNELFNBQVMsQ0FBQ3RELFFBQVE7Y0FBQyxDQUFFLENBQUM7Y0FFL0Q7Y0FDQTtjQUVBLElBQUksQ0FBQ3lELFFBQVEsR0FBRyxLQUFLO2NBQ3JCLEtBQUssQ0FBQ1osS0FBSyxHQUFHLElBQUk7Y0FDbEIsSUFBSSxDQUFDUixRQUFRLEdBQUcsS0FBSztjQUVyQixJQUFJLENBQUN6QixPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBQ0FzQyxJQUFJLEdBQUcsTUFBT1YsRUFBVSxJQUFJO2NBQzNCLElBQUksQ0FBQ0EsRUFBRSxFQUFFO2dCQUNSa0IsT0FBTyxDQUFDQyxJQUFJLENBQUMsMkNBQTJDLENBQUM7Z0JBQ3pELEtBQUssQ0FBQ2QsS0FBSyxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQ1IsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCOztjQUdELElBQUksQ0FBQ3RCLFFBQUEsQ0FBQTZDLGNBQWMsQ0FBQ0MsSUFBSSxFQUFFQyxNQUFNLEVBQUU7Z0JBQ2pDL0MsUUFBQSxDQUFBNkMsY0FBYyxDQUFDdEQsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM0QyxJQUFJLENBQUM7Z0JBQ3JDOztjQUdELElBQUksQ0FBQ08sUUFBUSxHQUFHLElBQUk7Y0FFcEIsTUFBTWpDLElBQUksR0FBRyxJQUFJWCxLQUFBLENBQUFrRCxJQUFJLENBQUM7Z0JBQUV2QjtjQUFFLENBQUUsQ0FBQztjQUM3QixJQUFJLElBQUksQ0FBQyxDQUFBTyxZQUFhLEVBQUU7Z0JBQ3ZCdkIsSUFBSSxDQUFDbEIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFBeUMsWUFBYSxDQUFDOztjQUUvQ3ZCLElBQUksQ0FBQ2xCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDb0MsWUFBWSxDQUFDO2NBQ3BDLElBQUksQ0FBQyxDQUFBSSxRQUFTO2NBQ2QsSUFBSSxDQUFDLENBQUF0QixJQUFLLEdBQUdBLElBQUk7Y0FDakJ3QyxVQUFVLENBQUN4QyxJQUFJLEdBQUdBLElBQUk7Y0FDdEIsSUFBSSxDQUFDLENBQUFILFFBQVMsR0FBR0csSUFBSSxDQUFDSCxRQUFRO2NBQzlCLE1BQU1HLElBQUksQ0FBQ3lDLE9BQU8sQ0FBQztnQkFBRXpCO2NBQUUsQ0FBRSxDQUFDO2NBQzFCLElBQUksQ0FBQyxDQUFBTSxRQUFTLENBQUNNLE1BQU0sR0FBR1osRUFBRTtjQUMxQndCLFVBQVUsQ0FBQ3hDLElBQUksR0FBR0EsSUFBSTtjQUN0QnRDLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQ2tELFdBQVcsR0FBRzdCLElBQUk7Y0FFN0IsSUFBSSxDQUFDQSxJQUFJLENBQUMwQyxLQUFLLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQ1QsUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLEtBQUssQ0FBQ1osS0FBSyxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQ1IsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCOztjQUdELE1BQU1yQyxRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRLElBQUlkLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQ0gsUUFBUTtjQUVyRCxNQUFNc0QsU0FBUyxHQUFHO2dCQUNqQkMsRUFBRSxFQUFFLE9BQU87Z0JBQ1hDLEVBQUUsRUFBRTtlQUNKO2NBQ0QsSUFBSSxDQUFDdkIsWUFBWSxDQUFDcEMsTUFBTSxDQUFDVyxHQUFHLENBQUM7Z0JBQUVSLFFBQVEsRUFBRXNELFNBQVMsQ0FBQ3RELFFBQVE7Y0FBQyxDQUFFLENBQUM7Y0FFL0Q7Y0FDQTtjQUVBLElBQUksQ0FBQ3lELFFBQVEsR0FBRyxLQUFLO2NBQ3JCLEtBQUssQ0FBQ1osS0FBSyxHQUFHLElBQUk7Y0FDbEIsSUFBSSxDQUFDUixRQUFRLEdBQUcsS0FBSztjQUVyQixJQUFJLENBQUN6QixPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLENBQUM7WUFFRCxNQUFNdUQsV0FBV0EsQ0FBQ0MsT0FBZTtjQUNoQyxJQUFJO2dCQUNIQyxXQUFXLENBQUNDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxDQUFBaEMsY0FBZSxHQUFHaUMsU0FBUztnQkFFaEMsSUFBSSxPQUFPSCxPQUFPLEtBQUssUUFBUSxJQUFJLENBQUNHLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQ0osT0FBTyxDQUFDLEVBQUU7Z0JBRTVFLElBQUksQ0FBQ1gsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCO2dCQUNBLE9BQU8sSUFBSSxDQUFDLENBQUFqQyxJQUFLLENBQUMyQyxXQUFXLENBQUNDLE9BQU8sQ0FBQztlQUN0QyxDQUFDLE9BQU9LLENBQUMsRUFBRTtnQkFDWDtnQkFDQWYsT0FBTyxDQUFDZ0IsS0FBSyxDQUFDRCxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTUUsU0FBU0EsQ0FBQ1AsT0FBYTtjQUM1QixJQUFJO2dCQUNIQyxXQUFXLENBQUNDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxDQUFBaEMsY0FBZSxHQUFHaUMsU0FBUztnQkFDaEMsSUFBSSxDQUFDZCxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsT0FBTyxJQUFJLENBQUMsQ0FBQWpDLElBQUssQ0FBQ21ELFNBQVMsQ0FBQ1AsT0FBTyxDQUFDO2VBQ3BDLENBQUMsT0FBT0ssQ0FBQyxFQUFFO2dCQUNYZixPQUFPLENBQUNnQixLQUFLLENBQUNELENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ2hCLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUNBbUIsVUFBVUEsQ0FBQzVDLEtBQVc7Y0FDckIsT0FBTyxJQUFJLENBQUMsQ0FBQVIsSUFBSyxDQUFDb0QsVUFBVSxDQUFDNUMsS0FBSyxDQUFDO1lBQ3BDO1lBRUE2QyxPQUFPQSxDQUFBO2NBQ04sSUFBSSxDQUFDLENBQUE3QyxLQUFNLENBQUNuQyxNQUFNLEVBQUVpRixJQUFJLEVBQUU7WUFDM0I7WUFFQUMsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQ3RCLFFBQVEsR0FBRyxLQUFLO2NBQ3JCLEtBQUssQ0FBQ1osS0FBSyxHQUFHLEtBQUs7WUFDcEI7O1VBQ0FoRSxPQUFBLENBQUFzQyxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNVBELElBQUFwQyxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBZ0csT0FBQSxHQUFBaEcsT0FBQTtVQUNBLElBQUFpRyxhQUFBLEdBQUFqRyxPQUFBO1VBQ0EsSUFBQUcsU0FBQSxHQUFBSCxPQUFBO1VBRUEsSUFBQStCLFFBQUEsR0FBQS9CLE9BQUE7VUFTTSxNQUFPaUUsYUFBYyxTQUFRbEUsTUFBQSxDQUFBTSxhQUE2QjtZQUMvRDZGLE9BQU8sR0FBRyxLQUFLO1lBTWYsQ0FBQUMsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBQ0EsQ0FBQUMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUEsQ0FBQUMsUUFBUyxHQUFHLENBQUM7WUFDYixDQUFBQyxRQUFTO1lBRVQsQ0FBQUMsWUFBYSxHQUFjLEVBQUU7WUFDN0IsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQXhGLFlBQVl5RixTQUFrQjtjQUM3QixLQUFLLENBQUM7Z0JBQUVDLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsVUFBVTtjQUFDLENBQUUsQ0FBQztjQUUzRSxJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDO2NBQ2pCLElBQUksQ0FBQ0YsU0FBUyxFQUFFO2dCQUNmLElBQUksQ0FBQzNDLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUMyQyxTQUFTLEdBQUcsS0FBSztnQkFDdEI7O2NBRUQsSUFBSSxDQUFDLENBQUFMLFlBQWEsR0FBRyxJQUFJRixhQUFBLENBQUFVLFlBQVksQ0FBQyxLQUFLLENBQUM7Y0FDNUMsSUFBSSxDQUFDLENBQUFQLE1BQU8sR0FBRyxJQUFJSixPQUFBLENBQUFZLGFBQWEsQ0FBQztnQkFBRUMsR0FBRyxFQUFFO2NBQUksQ0FBRSxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBVCxNQUFPLENBQUNELFlBQVksQ0FBQzNFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTJFLFlBQWEsQ0FBQztjQUNqRCxJQUFJLENBQUNXLEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQ0MsSUFBSSxFQUFFO1lBQ1o7WUFFQSxNQUFNQSxJQUFJQSxDQUFBO2NBQ1QsSUFBSSxDQUFDLENBQUFYLE1BQU8sQ0FBQzlFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDMEYsVUFBVSxDQUFDO2NBQ2hELElBQUksQ0FBQyxDQUFBWixNQUFPLENBQUM5RSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDMEYsVUFBVSxDQUFDO2NBQ25ELElBQUksQ0FBQyxDQUFBWixNQUFPLENBQUM5RSxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQzBGLFVBQVUsQ0FBQztjQUNqRCxJQUFJLENBQUMsQ0FBQVosTUFBTyxDQUFDOUUsRUFBRSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMwRixVQUFVLENBQUM7Y0FFakQsSUFBSSxDQUFDLENBQUFaLE1BQU8sQ0FBQzlFLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMyRixRQUFRLENBQUM7Y0FDakQsSUFBSSxDQUFDLENBQUFiLE1BQU8sQ0FBQzlFLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDNEYsT0FBTyxDQUFDO2NBQzlDLElBQUksQ0FBQyxDQUFBZCxNQUFPLENBQUM5RSxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQzZGLEdBQUcsQ0FBQztjQUUxQyxNQUFNaEgsU0FBQSxDQUFBaUgsT0FBTyxDQUFDQyxPQUFPLEVBQUU7Y0FDdkIsSUFBSSxDQUFDLENBQUFkLFlBQWEsR0FBRyxDQUFDLEdBQUdwRyxTQUFBLENBQUFpSCxPQUFPLENBQUNFLE1BQU0sRUFBRSxDQUFDO2NBQzFDLElBQUksQ0FBQ3pELEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQzBELFlBQVksQ0FBQ3BILFNBQUEsQ0FBQWlILE9BQU8sQ0FBQ0ksT0FBTyxFQUFFaEUsRUFBRSxJQUFJLEVBQUUsQ0FBQztjQUM1QztZQUNEO1lBQ0ErRCxZQUFZQSxDQUFDL0QsRUFBVTtjQUN0QixJQUFJLENBQUNpRSxjQUFjLEdBQUdqRSxFQUFFO2NBQ3hCLE1BQU1rRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUFuQixZQUFhLENBQUNvQixJQUFJLENBQUNELE1BQU0sSUFBSUEsTUFBTSxDQUFDbEUsRUFBRSxLQUFLQSxFQUFFLENBQUM7Y0FDbEUsSUFBSSxDQUFDLENBQUE0QyxNQUFPLENBQUM3RixRQUFRLENBQUNtSCxNQUFNLEdBQUdBLE1BQU07WUFDdEM7WUFDQVQsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNyQixNQUFNVyxLQUFLLEdBQUcsTUFBTTdGLFFBQUEsQ0FBQTZDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDZ0QsYUFBYTtjQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDekQsTUFBTSxFQUFFO2dCQUNqQk0sT0FBTyxDQUFDZ0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDO2dCQUNuQzs7Y0FFRCxJQUFJLENBQUMsQ0FBQVUsTUFBTyxDQUFDMEIsTUFBTSxDQUFDO2dCQUFFM0IsWUFBWSxFQUFFO2tCQUFFM0MsRUFBRSxFQUFFLElBQUksQ0FBQ1k7Z0JBQU0sQ0FBRTtnQkFBRXdEO2NBQUssQ0FBRSxDQUFDO2NBQ2pFLElBQUksQ0FBQ0csS0FBSyxFQUFFO2NBQ1osSUFBSSxDQUFDLENBQUF6QixRQUFTLEdBQUcwQixXQUFXLENBQUMsTUFBTSxJQUFJLENBQUN0QixRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUM7WUFDMUQsQ0FBQztZQUVEUSxPQUFPLEdBQUdBLENBQUEsS0FBSztjQUNkeEMsT0FBTyxDQUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDO2NBQ3JCLElBQUksQ0FBQyxDQUFBMkIsUUFBUyxHQUFHMEIsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDdEIsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDO1lBQzFELENBQUM7WUFDRFMsR0FBRyxHQUFHQSxDQUFBLEtBQUs7Y0FDVmMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBM0IsUUFBUyxDQUFDO2NBQzdCLElBQUksQ0FBQ0ksUUFBUSxHQUFHLENBQUM7WUFDbEIsQ0FBQztZQUNEWCxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUFLLE1BQU8sQ0FBQzhCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDbEIsVUFBVSxDQUFDO2NBQ2pELElBQUksQ0FBQyxDQUFBWixNQUFPLENBQUM4QixHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDbEIsVUFBVSxDQUFDO2NBQ3BELElBQUksQ0FBQyxDQUFBWixNQUFPLENBQUM4QixHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQ2xCLFVBQVUsQ0FBQztjQUNsRCxJQUFJLENBQUMsQ0FBQVosTUFBTyxDQUFDOEIsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUNsQixVQUFVLENBQUM7WUFDbkQ7WUFFQUEsVUFBVSxHQUFHQSxDQUFBLEtBQUs7Y0FDakIsSUFBSSxDQUFDLENBQUFYLFFBQVMsRUFBRTtjQUNoQixJQUFJLENBQUN6RSxPQUFPLENBQUMsYUFBYSxDQUFDO2NBQzNCLElBQUksQ0FBQ0EsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QixDQUFDO1lBRUR1RyxJQUFJLEdBQUdBLENBQUEsS0FBSztjQUNYLElBQUksSUFBSSxDQUFDLENBQUEvQixNQUFPLENBQUNnQyxNQUFNLEtBQUssUUFBUSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsQ0FBQWhDLE1BQU8sQ0FBQ2lDLE9BQU8sRUFBRTtnQkFDdEIsSUFBSSxDQUFDckIsVUFBVSxFQUFFLENBQUMsQ0FBQzs7Y0FFcEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQ3hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQVksTUFBTyxDQUFDZ0MsTUFBTSxDQUFDLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxDQUFBaEMsTUFBTyxDQUFDa0MsS0FBSyxFQUFFO2dCQUNwQixJQUFJLENBQUN0QixVQUFVLEVBQUUsQ0FBQyxDQUFDOztZQUVyQixDQUFDO1lBRURlLEtBQUssR0FBR0EsQ0FBQSxLQUFLO2NBQ1osSUFBSSxDQUFDakIsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDQSxLQUFLO2NBQ3hCO2NBQ0E7Y0FDQSxJQUFJLENBQUNBLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQVYsTUFBTyxDQUFDN0YsUUFBUSxDQUFDdUYsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFNLE1BQU8sQ0FBQzdGLFFBQVEsQ0FBQ2dJLE1BQU0sRUFBRTtZQUMzRSxDQUFDOztVQUNEMUksT0FBQSxDQUFBb0UsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVIRCxJQUFBcEMsS0FBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVcsTUFFWmlCLFFBQVMsU0FBUWxCLE1BQUEsQ0FBQU0sYUFBdUI7WUFDN0MsQ0FBQW1JLFdBQVksR0FBRyxLQUFLO1lBQ3BCLENBQUFDLE1BQU87WUFDUCxDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsU0FBVTtZQUNWLENBQUFDLFdBQVk7WUFDWixDQUFBQyxXQUFZO1lBQ1osQ0FBQUMsWUFBYTtZQUNiLENBQUFDLGdCQUFpQjtZQUNqQixDQUFBQyxhQUFjO1lBRWQsQ0FBQUMsTUFBTyxHQUFXLEVBQUU7WUFDcEIsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxDQUFBYixNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBYyxTQUFVLEdBQUcsS0FBSztZQUNsQixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLENBQUF4RCxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxJQUFJeUQsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQXpELEtBQU07WUFDcEI7WUFFQSxDQUFBMUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQW9HLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLENBQUFDLGlCQUFrQjtZQUNsQixDQUFBQyxhQUFjLEdBQUcsRUFBRTtZQUNuQixJQUFJQSxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGFBQWM7WUFDM0I7WUFFQSxDQUFBQyxhQUFjO1lBRWQsQ0FBQUMsV0FBWTtZQUNaLENBQUFDLGtCQUFtQjtZQUNuQixDQUFBQyxlQUFnQjtZQUNoQjNJLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUNnRyxJQUFJLEVBQUU7WUFDWjtZQUNBLE1BQU00QyxjQUFjQSxDQUFBO2NBQ25CLElBQUk7Z0JBQ0gsTUFBTWpCLE1BQU0sR0FBRyxNQUFNa0IsU0FBUyxDQUFDQyxZQUFZLENBQUNDLFlBQVksQ0FBQztrQkFBRTlHLEtBQUssRUFBRTtnQkFBSSxDQUFFLENBQUM7Z0JBQ3pFMEYsTUFBTSxDQUFDcUIsU0FBUyxFQUFFLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxJQUFJQSxLQUFLLENBQUNuRSxJQUFJLEVBQUUsQ0FBQztnQkFDakQsT0FBTyxJQUFJO2VBQ1gsQ0FBQyxPQUFPTCxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLENBQUFDLEtBQU0sR0FBR0QsQ0FBQztnQkFDZixPQUFPLEtBQUs7O1lBRWQ7WUFDQSxNQUFNc0IsSUFBSUEsQ0FBQTtjQUNULElBQUk7Z0JBQ0gsTUFBTXlDLFdBQVcsR0FBRyxNQUFNSSxTQUFTLENBQUNKLFdBQVcsQ0FBQ1UsS0FBSyxDQUFDO2tCQUFFeEksSUFBSSxFQUFFO2dCQUFZLENBQVMsQ0FBQztnQkFDcEYsSUFBSSxDQUFDLENBQUE4SCxXQUFZLEdBQUdBLFdBQVcsQ0FBQ1csS0FBSyxLQUFLLFNBQVM7Z0JBQ25ELElBQUksQ0FBQyxDQUFBVixrQkFBbUIsR0FBR0QsV0FBVztnQkFDdEMsSUFBSSxDQUFDLENBQUFFLGVBQWdCLEdBQUdGLFdBQVcsQ0FBQ1csS0FBSztnQkFDekNYLFdBQVcsQ0FBQ1ksUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBQyxjQUFlLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7ZUFDdEQsQ0FBQyxPQUFPN0UsQ0FBQyxFQUFFO2dCQUNYO2dCQUNBO2NBQUEsQ0FDQSxTQUFTO2dCQUNULElBQUksQ0FBQzVCLEtBQUssR0FBRyxJQUFJOztZQUVuQjtZQUVBLENBQUF3RyxjQUFlRSxDQUFBO2NBQ2QsSUFBSSxDQUFDLENBQUFiLGVBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUFELGtCQUFtQixDQUFDVSxLQUFLO2NBQ3RELElBQUksQ0FBQ3ZJLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFQTRJLG9CQUFvQkEsQ0FBQTtjQUNuQjtjQUNBO2NBQ0EsSUFBSSxDQUFDLENBQUFuQixpQkFBa0IsR0FBRyxJQUFJb0IsdUJBQXVCLEVBQUU7Y0FDdkQsSUFBSSxDQUFDLENBQUFwQixpQkFBa0IsQ0FBQ3FCLElBQUksR0FBRyxPQUFPO2NBQ3RDLElBQUksQ0FBQyxDQUFBckIsaUJBQWtCLENBQUNzQixVQUFVLEdBQUcsSUFBSTtjQUN6QyxJQUFJLENBQUMsQ0FBQXRCLGlCQUFrQixDQUFDdUIsY0FBYyxHQUFHLElBQUk7Y0FDN0M7Y0FDQSxJQUFJLENBQUMsQ0FBQXJCLGFBQWMsR0FBRyxJQUFJMUgsS0FBQSxDQUFBZ0osY0FBYyxFQUFVO2NBQ2xELElBQUksQ0FBQyxDQUFBeEIsaUJBQWtCLENBQUN5QixRQUFRLEdBQUdDLEtBQUssSUFBRztnQkFDMUMsSUFBSUMsaUJBQWlCLEdBQUcsRUFBRTtnQkFDMUIsSUFBSUMsZUFBZSxHQUFHLEVBQUU7Z0JBQ3hCLEtBQUssSUFBSUMsQ0FBQyxHQUFHSCxLQUFLLENBQUNJLFdBQVcsRUFBRUQsQ0FBQyxHQUFHSCxLQUFLLENBQUNLLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFLEVBQUVILENBQUMsRUFBRTtrQkFDOUQsSUFBSUgsS0FBSyxDQUFDSyxPQUFPLENBQUNGLENBQUMsQ0FBQyxDQUFDSSxPQUFPLEVBQUU7b0JBQzdCTCxlQUFlLElBQUlGLEtBQUssQ0FBQ0ssT0FBTyxDQUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssVUFBVTtvQkFDakQsSUFBSSxDQUFDLENBQUFqQyxhQUFjLEdBQUcyQixlQUFlO29CQUNyQyxJQUFJLENBQUMsQ0FBQTFCLGFBQWMsQ0FBQ2lDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQWxDLGFBQWMsQ0FBQzttQkFDaEQsTUFBTTtvQkFDTjBCLGlCQUFpQixJQUFJRCxLQUFLLENBQUNLLE9BQU8sQ0FBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNLLFVBQVU7OztjQUd0RCxDQUFDO2NBQ0QsSUFBSSxDQUFDLENBQUFsQyxpQkFBa0IsQ0FBQ29DLE9BQU8sR0FBR1YsS0FBSyxJQUFJckcsT0FBTyxDQUFDZ0IsS0FBSyxDQUFDLHdCQUF3QixDQUFDO2NBRWxGLElBQUksQ0FBQyxDQUFBMkQsaUJBQWtCLENBQUNxQyxLQUFLLEVBQUU7WUFDaEM7WUFFQSxDQUFBQyxlQUFnQixHQUFHWixLQUFLLElBQUc7Y0FDMUIsSUFBSUEsS0FBSyxDQUFDYSxJQUFJLENBQUNDLElBQUksS0FBSyxDQUFDLEVBQUU7Y0FDM0IsSUFBSSxDQUFDLENBQUE1QyxNQUFPLENBQUM2QyxJQUFJLENBQUNmLEtBQUssQ0FBQ2EsSUFBSSxDQUFDO2NBRTdCLElBQUksQ0FBQ2hLLE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFDOUIsQ0FBQztZQUVELENBQUFtSyxjQUFlLEdBQUdDLENBQUN0RCxNQUFNLEVBQUV1RCxLQUFLLEtBQUk7Y0FDbkMsSUFBSSxDQUFDLENBQUFqRCxhQUFjLEdBQUcsSUFBSWtELGFBQWEsQ0FBQ3hELE1BQU0sQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQUEsTUFBTyxHQUFHQSxNQUFNO2NBRXJCO2NBQ0E7Y0FDQTtjQUNBO2NBQ0E7Y0FDQTtjQUVBO2NBQ0E7Y0FFQTtjQUNBO2NBQ0E7Y0FFQSxJQUFJLENBQUMsQ0FBQU0sYUFBYyxDQUFDbUQsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBUixlQUFnQixDQUFDO1lBQzdFLENBQUM7WUFDRCxNQUFNUyxVQUFVQSxDQUFDSCxLQUFLLEdBQUcsRUFBRTtjQUMxQixJQUFJLElBQUksQ0FBQyxDQUFBckQsV0FBWSxFQUFFLE9BQU8sTUFBTSxJQUFJLENBQUMsQ0FBQUEsV0FBWTtjQUNyRCxJQUFJLENBQUMsQ0FBQUEsV0FBWSxHQUFHLElBQUkvRyxLQUFBLENBQUFnSixjQUFjLEVBQVE7Y0FFOUM3RixVQUFVLEVBQUU0RSxTQUFTLENBQUNDLFlBQVksQ0FDaENDLFlBQVksQ0FBQztnQkFBRTlHLEtBQUssRUFBRTtjQUFJLENBQUUsQ0FBQyxDQUM3QnFKLElBQUksQ0FBQzNELE1BQU0sSUFBRztnQkFDZCxJQUFJLENBQUMsQ0FBQXFELGNBQWUsQ0FBQ3JELE1BQU0sRUFBRXVELEtBQUssQ0FBQztjQUNwQyxDQUFDLENBQUMsQ0FDREssS0FBSyxDQUFDNUcsS0FBSyxJQUFHO2dCQUNkLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdBLEtBQUssQ0FBQ25DLE9BQU87Z0JBQzNCLElBQUksQ0FBQyxDQUFBcUYsV0FBWSxDQUFDMkQsTUFBTSxFQUFFO2NBQzNCLENBQUMsQ0FBQyxDQUNEQyxPQUFPLENBQUMsTUFBSztnQkFDYixJQUFJLENBQUMsQ0FBQWhFLFdBQVksR0FBRyxJQUFJO2dCQUN4QixJQUFJLENBQUMsQ0FBQUksV0FBWSxDQUFDNEMsT0FBTyxFQUFFO2NBQzVCLENBQUMsQ0FBQztjQUVILE9BQU8sSUFBSSxDQUFDLENBQUE1QyxXQUFZO1lBQ3pCO1lBQ0FMLE1BQU1BLENBQUMwRCxLQUFLLEdBQUc7Y0FBRTdDLFFBQVEsRUFBRTtZQUFJLENBQUU7Y0FDaEMsSUFBSTtnQkFDSCxJQUFJLElBQUksQ0FBQyxDQUFBTCxnQkFBaUIsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxnQkFBaUI7Z0JBQ3pELElBQUksQ0FBQyxDQUFBQSxnQkFBaUIsR0FBRyxJQUFJbEgsS0FBQSxDQUFBZ0osY0FBYyxFQUFRO2dCQUNuRCxJQUFJLElBQUksQ0FBQyxDQUFBM0IsU0FBVSxFQUFFO2tCQUNwQixNQUFNLElBQUl2SCxLQUFLLENBQUMseURBQXlELENBQUM7O2dCQUUzRSxJQUFJLENBQUMsQ0FBQXlHLE1BQU8sR0FBRyxTQUFTO2dCQUN4QixJQUFJLENBQUMsQ0FBQWMsU0FBVSxHQUFHLElBQUk7Z0JBQ3RCLElBQUksQ0FBQ3RILE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBRXRCLE1BQU02SyxRQUFRLEdBQUcsTUFBTS9ELE1BQU0sSUFBRztrQkFDL0IsSUFBSSxDQUFDLENBQUFxRCxjQUFlLENBQUNyRCxNQUFNLEVBQUV1RCxLQUFLLENBQUM7a0JBQ25DLElBQUksQ0FBQyxDQUFBbEQsZ0JBQWlCLENBQUN5QyxPQUFPLEVBQUU7a0JBQ2hDLElBQUksQ0FBQyxDQUFBaEQsV0FBWSxHQUFHLElBQUk7a0JBQ3hCLElBQUksQ0FBQyxDQUFBUSxhQUFjLEVBQUUwQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFDRCxNQUFNZ0IsT0FBTyxHQUFHaEgsS0FBSyxJQUFHO2tCQUN2QmhCLE9BQU8sQ0FBQ2dCLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO2tCQUNwQixJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHQSxLQUFLLENBQUNuQyxPQUFPO2tCQUMzQixJQUFJLENBQUMsQ0FBQXdGLGdCQUFpQixDQUFDd0QsTUFBTSxFQUFFO2dCQUNoQyxDQUFDO2dCQUNEdkgsVUFBVSxFQUFFNEUsU0FBUyxDQUFDQyxZQUFZLENBQUNDLFlBQVksQ0FBQztrQkFBRTlHLEtBQUssRUFBRTtnQkFBSSxDQUFFLENBQUMsQ0FBQ3FKLElBQUksQ0FBQ0ksUUFBUSxDQUFDLENBQUNILEtBQUssQ0FBQ0ksT0FBTyxDQUFDO2dCQUU5RixPQUFPLElBQUksQ0FBQyxDQUFBM0QsZ0JBQWlCO2VBQzdCLENBQUMsT0FBT3RELENBQUMsRUFBRSxDLENBQ1gsU0FBUyxDO1lBRVg7WUFDQWtILFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ2pCO2NBRUEsSUFBSSxDQUFDLENBQUEzRCxhQUFjLENBQUNsRCxJQUFJLEVBQUU7Y0FFMUIsSUFBSSxDQUFDLENBQUE0QyxNQUFPLENBQ1ZxQixTQUFTLEVBQUUsQ0FBQztjQUFBLENBQ1pDLE9BQU8sQ0FBRUMsS0FBSyxJQUFpQztnQkFDL0NBLEtBQUssQ0FBQ25FLElBQUksRUFBRTtnQkFDWjtjQUNELENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FFTDtjQUNBLElBQUksSUFBSSxDQUFDLENBQUFnRCxZQUFhLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBQSxZQUFhLENBQUNSLEtBQUssRUFBRTtnQkFDMUIsTUFBTXNFLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQTlELFlBQWEsQ0FBQytELHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFBbkUsTUFBTyxDQUFDO2dCQUMzRWtFLFVBQVUsQ0FBQ0UsVUFBVTtnQkFDckIsSUFBSSxDQUFDLENBQUFoRSxZQUFhLENBQ2hCUixLQUFLLEVBQUUsQ0FDUCtELElBQUksQ0FBQyxNQUFLO2tCQUNWLElBQUksQ0FBQyxDQUFBdkQsWUFBYSxHQUFHdkQsU0FBUztnQkFDL0IsQ0FBQyxDQUFDLENBQ0QrRyxLQUFLLENBQUM1RyxLQUFLLElBQUc7a0JBQ2RoQixPQUFPLENBQUNnQixLQUFLLENBQUMsNEJBQTRCLEVBQUVBLEtBQUssQ0FBQztnQkFDbkQsQ0FBQyxDQUFDOztjQUVKLElBQUksQ0FBQyxDQUFBZ0QsTUFBTyxHQUFHbkQsU0FBUztZQUN6QixDQUFDO1lBRURPLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFrRCxhQUFjLEVBQUU7Z0JBQ3pCdEUsT0FBTyxDQUFDQyxJQUFJLENBQUMsbUNBQW1DLENBQUM7Z0JBQ2pEOztjQUVELElBQUksSUFBSSxDQUFDLENBQUFrRSxXQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtjQUMvQyxJQUFJLENBQUMsQ0FBQUEsV0FBWSxHQUFHLElBQUloSCxLQUFBLENBQUFnSixjQUFjLEVBQU87Y0FFN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBM0IsU0FBVSxFQUFFLE1BQU0sSUFBSXZILEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQztjQUM1RSxJQUFJLENBQUMsQ0FBQXlHLE1BQU8sR0FBRyxTQUFTO2NBQ3hCLE1BQU10QyxJQUFJLEdBQUdBLENBQUEsS0FBSztnQkFDakIsSUFBSSxDQUFDLENBQUFtRCxNQUFPLEdBQUcsRUFBRTtnQkFDakIsSUFBSSxDQUFDLENBQUFDLFNBQVUsR0FBRyxLQUFLO2dCQUV2QixJQUFJLENBQUMsQ0FBQUYsYUFBYyxDQUFDbUQsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVc7a0JBQ3ZELE1BQU1uSixLQUFLLEdBQUcsSUFBSStKLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTlELE1BQU8sRUFBRTtvQkFBRStELElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQWhFLGFBQWMsQ0FBQ2lFO2tCQUFRLENBQUUsQ0FBQztrQkFFNUU7a0JBQ0EsSUFBSSxDQUFDLENBQUFqSyxLQUFNLEdBQUdBLEtBQUs7a0JBRW5CLE1BQU1rSyxRQUFRLEdBQUdBLENBQUEsS0FBSztvQkFDckIsSUFBSSxDQUFDLENBQUFyRSxXQUFZLENBQUMyQyxPQUFPLENBQUN4SSxLQUFLLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxDQUFBNkYsV0FBWSxHQUFHdEQsU0FBUztrQkFDOUIsQ0FBQztrQkFDRCxJQUFJLElBQUksQ0FBQyxDQUFBZ0UsYUFBYyxFQUFFO29CQUN4QixJQUFJLENBQUMsQ0FBQUEsYUFBYyxDQUFDOEMsSUFBSSxDQUFDYSxRQUFRLENBQUM7bUJBQ2xDLE1BQU07b0JBQ04sSUFBSSxJQUFJLENBQUMsQ0FBQXJFLFdBQVksRUFBRTtzQkFDdEJxRSxRQUFRLEVBQUU7OztrQkFJWixJQUFJLElBQUksQ0FBQyxDQUFBbkUsZ0JBQWlCLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxDQUFBQSxnQkFBaUIsQ0FBQ3lDLE9BQU8sQ0FBQ3hJLEtBQUssQ0FBQztvQkFDckMsSUFBSSxDQUFDLENBQUErRixnQkFBaUIsR0FBR3hELFNBQVM7O2tCQUVuQyxJQUFJLENBQUNvSCxVQUFVLEVBQUU7a0JBQ2pCLElBQUksQ0FBQyxDQUFBM0QsYUFBYyxHQUFHekQsU0FBUztrQkFDL0IsSUFBSSxDQUFDLENBQUFtRCxNQUFPLEdBQUduRCxTQUFTO2tCQUN4QixJQUFJLENBQUMsQ0FBQXFELFdBQVksR0FBR3JELFNBQVM7Z0JBQzlCLENBQUMsQ0FBQztnQkFFRixJQUFJLENBQUMsQ0FBQXlELGFBQWMsRUFBRWxELElBQUksRUFBRTtnQkFDM0IsSUFBSSxDQUFDLENBQUF1RCxpQkFBa0IsRUFBRXZELElBQUksRUFBRTtnQkFFL0IsSUFBSSxDQUFDbEUsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN2QixDQUFDO2NBRUQsSUFBSSxDQUFDLENBQUE0RyxXQUFZLEdBQUcxQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUN5QyxNQUFNLEVBQUUsQ0FBQzhELElBQUksQ0FBQ3ZHLElBQUksQ0FBQztjQUNyRCxPQUFPLElBQUksQ0FBQyxDQUFBK0MsV0FBWTtZQUN6Qjs7VUFDQWhKLE9BQUEsQ0FBQW9CLFFBQUEsR0FBQUEsUUFBQTs7Ozs7Ozs7Ozs7VUNwUkQ7O1VBRUF0QixNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQXFOLE1BQUEsR0FBQW5OLE9BQUE7VUFDQSxJQUFBb04sTUFBQSxHQUFBcE4sT0FBQTtVQUNBLElBQUFxTixNQUFBLEdBQUFyTixPQUFBO1VBQ0EsSUFBQXNOLFFBQUEsR0FBQXROLE9BQUE7VUFFTSxTQUFVdU4sU0FBU0EsQ0FBQztZQUFFQyxLQUFLO1lBQUVDO1VBQVMsQ0FBRTtZQUM3QyxNQUFNQyxJQUFJLEdBQUdQLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ21HLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDL0IsTUFBTTtjQUFFQyxVQUFVO2NBQUVDO1lBQWMsQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVEsY0FBYyxHQUFFO1lBQ3ZELE1BQU1DLEdBQUcsR0FBR1osTUFBQSxDQUFBM0YsT0FBSyxDQUFDbUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixJQUFBTixNQUFBLENBQUFXLFNBQVMsRUFDUixDQUFDUixLQUFLLENBQUMsRUFDUCxNQUNDeEksVUFBVSxDQUFDaUosVUFBVSxDQUFDLE1BQUs7Y0FDMUIsTUFBTUMsU0FBUyxHQUFHSCxHQUFHLENBQUNJLE9BQU8sRUFBRUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLEVBQUVDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztjQUVuRyxJQUFJLENBQUNILFNBQVMsRUFBRTtjQUNoQixNQUFNSSxrQkFBa0IsR0FBR0osU0FBUyxDQUFDSyxZQUFZLEdBQUdMLFNBQVMsQ0FBQ00sWUFBWSxHQUFHTixTQUFTLENBQUNPLFNBQVM7Y0FDaEcsSUFBSUgsa0JBQWtCLElBQUksR0FBRyxFQUFFO2dCQUM5QlAsR0FBRyxDQUFDSSxPQUFPLENBQUNPLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDcENDLFVBQVUsRUFBRTtlQUNaLE1BQU07Z0JBQ05iLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDTyxTQUFTLENBQUNHLEdBQUcsQ0FBQyxNQUFNLENBQUM7O1lBRW5DLENBQUMsRUFBRSxHQUFHLENBQUMsRUFDUixhQUFhLENBQ2I7WUFDRCxNQUFNRCxVQUFVLEdBQUdBLENBQUEsS0FBSztjQUN2Qm5CLFNBQVMsQ0FBQ1UsT0FBTyxFQUFFVyxjQUFjLENBQUM7Z0JBQUVDLEtBQUssRUFBRSxLQUFLO2dCQUFFQyxRQUFRLEVBQUU7Y0FBUSxDQUFFLENBQUM7WUFDeEUsQ0FBQztZQUVEN0IsTUFBQSxDQUFBM0YsT0FBSyxDQUFDeUgsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTWYsU0FBUyxHQUFHSCxHQUFHLENBQUNJLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztjQUVqRyxNQUFNYSxZQUFZLEdBQUdBLENBQUEsS0FBSztnQkFDekI7Z0JBQ0EsSUFBSSxDQUFDaEIsU0FBUyxFQUFFO2dCQUNoQixNQUFNSSxrQkFBa0IsR0FBR0osU0FBUyxDQUFDSyxZQUFZLEdBQUdMLFNBQVMsQ0FBQ00sWUFBWSxHQUFHTixTQUFTLENBQUNPLFNBQVM7Z0JBRWhHO2dCQUNBLElBQUlILGtCQUFrQixJQUFJLEdBQUcsRUFBRTtrQkFDOUJQLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDTyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQ3BDLE1BQU07a0JBQ05aLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDTyxTQUFTLENBQUNHLEdBQUcsQ0FBQyxNQUFNLENBQUM7O2NBRW5DLENBQUM7Y0FFRFgsU0FBUyxDQUFDL0IsZ0JBQWdCLENBQUMsUUFBUSxFQUFFK0MsWUFBWSxDQUFDO2NBRWxELE9BQU8sTUFBSztnQkFDWGhCLFNBQVMsRUFBRWlCLG1CQUFtQixDQUFDLFFBQVEsRUFBRUQsWUFBWSxDQUFDO2NBQ3ZELENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sSUFBSUUsR0FBRyxHQUFHLDJCQUEyQjtZQUNyQyxJQUFJeEIsVUFBVSxDQUFDeUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFRCxHQUFHLElBQUksa0JBQWtCeEIsVUFBVSxDQUFDMEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZGLE1BQU1DLFlBQVksR0FBRyxtQkFDcEIzQixVQUFVLENBQUN5QixHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsZUFBZXpCLFVBQVUsQ0FBQzBCLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLEVBQzlFLEVBQUU7WUFDRixPQUNDbkMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFLQyxTQUFTLEVBQUVGLFlBQVk7Y0FBRXhCLEdBQUcsRUFBRUE7WUFBRyxHQUNyQ1osTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDcEMsTUFBQSxDQUFBc0MsVUFBVTtjQUFDM0IsR0FBRyxFQUFFTCxJQUFJO2NBQUVBLElBQUksRUFBQyxXQUFXO2NBQUNpQyxPQUFPLEVBQUMsVUFBVTtjQUFDRixTQUFTLEVBQUVMLEdBQUc7Y0FBRVEsT0FBTyxFQUFFaEI7WUFBVSxFQUFJLENBQzdGO1VBRVI7Ozs7Ozs7Ozs7O1VDL0RBOztVQUVBalAsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFxTixNQUFBLEdBQUFuTixPQUFBO1VBRUEsSUFBQXNOLFFBQUEsR0FBQXROLE9BQUE7VUFDQSxJQUFBNlAsU0FBQSxHQUFBN1AsT0FBQTtVQUNBLElBQUFxTixNQUFBLEdBQUFyTixPQUFBO1VBRU87VUFBVSxTQUFVK0UsSUFBSUEsQ0FBQTtZQUM5QixNQUFNLENBQUMrSyxNQUFNLENBQUMsR0FBRzNDLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdEMsTUFBTXRDLFNBQVMsR0FBR04sTUFBQSxDQUFBM0YsT0FBSyxDQUFDbUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNwQyxNQUFNO2NBQUVILEtBQUs7Y0FBRTdLLEtBQUs7Y0FBRXFOLFVBQVU7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQTNDLFFBQUEsQ0FBQVEsY0FBYyxHQUFFO1lBQzVELE1BQU07Y0FBRXpMO1lBQVEsQ0FBRSxHQUFHbUwsS0FBSztZQUMxQixNQUFNLEdBQUcwQyxXQUFXLENBQUMsR0FBRy9DLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBUzFOLFFBQVEsRUFBRWdKLE1BQU0sSUFBSSxFQUFFLENBQUNBLE1BQU0sQ0FBQztZQUM3RSxNQUFNLENBQUM4RSxZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHakQsTUFBQSxDQUFBM0YsT0FBSyxDQUFDdUksUUFBUSxDQUFDMUssV0FBVyxDQUFDZ0wsR0FBRyxFQUFFLENBQUM7WUFDekUsSUFBSWpCLEdBQUcsR0FBRywwQkFBMEJVLE1BQU0sR0FBRywwREFBMEQsR0FBRyxFQUFFLEVBQUU7WUFDOUcsTUFBTVEsWUFBWSxHQUFHQSxDQUFBLEtBQUs7Y0FDekJKLFdBQVcsQ0FBQzFDLEtBQUssQ0FBQ25MLFFBQVEsQ0FBQ2dKLE1BQU0sQ0FBQztjQUVsQ3JHLFVBQVUsQ0FBQ2lKLFVBQVUsQ0FBQyxNQUFLO2dCQUMxQlIsU0FBUyxDQUFDVSxPQUFPLENBQUNXLGNBQWMsQ0FBQztrQkFBRUUsUUFBUSxFQUFFLFFBQVE7a0JBQUVELEtBQUssRUFBRTtnQkFBSyxDQUFFLENBQUM7Y0FDdkUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztjQUNQO1lBQ0QsQ0FBQztZQUVENUIsTUFBQSxDQUFBM0YsT0FBSyxDQUFDeUgsU0FBUyxDQUFDLE1BQUs7Y0FDcEJqSyxVQUFVLENBQUNpSixVQUFVLENBQUMsTUFBSztnQkFDMUJSLFNBQVMsQ0FBQ1UsT0FBTyxFQUFFVyxjQUFjLENBQUM7a0JBQUVFLFFBQVEsRUFBRSxRQUFRO2tCQUFFRCxLQUFLLEVBQUU7Z0JBQUssQ0FBRSxDQUFDO2NBQ3hFLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDUixDQUFDLEVBQUUsQ0FBQ29CLFlBQVksQ0FBQyxDQUFDO1lBRWxCLElBQUE5QyxNQUFBLENBQUFXLFNBQVMsRUFBQyxDQUFDUixLQUFLLENBQUNoTCxJQUFJLENBQUMsRUFBRThOLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBRTNFLElBQUlDLFVBQVUsR0FBRyxlQUFlO1lBRWhDLElBQUksQ0FBQy9DLEtBQUssQ0FBQ25MLFFBQVEsQ0FBQ2dKLE1BQU0sRUFBRTtjQUMzQixNQUFNbUYsT0FBTyxHQUFHUCxLQUFLLEdBQUdBLEtBQUssR0FBRzlDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQXJDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWlKLFFBQUEsMkJBQXFCO2NBQ3JEO2NBQ0EsT0FDQ3RELE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Z0JBQUtDLFNBQVMsRUFBRUw7Y0FBRyxHQUVsQmpDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ2dCLE9BQU8sT0FBRyxDQUNOOztZQUlSLE9BQ0NyRCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUtDLFNBQVMsRUFBRUw7WUFBRyxHQUNsQmpDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBU0MsU0FBUyxFQUFFYztZQUFVLEdBQzdCcEQsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDSyxTQUFBLENBQUFhLFFBQVE7Y0FDUmxPLElBQUksRUFBRWdMLEtBQUssQ0FBQ2hMLElBQUk7Y0FDaEI0TixlQUFlLEVBQUVBLGVBQWU7Y0FDaEN2UCxNQUFNLEVBQUUyTSxLQUFLLENBQUN2SyxZQUFZLENBQUNwQyxNQUFNO2NBQ2pDc04sT0FBTyxFQUFFWCxLQUFLLENBQUNsSyxjQUFjO2NBQzdCME0sVUFBVSxFQUFFQSxVQUFVO2NBQ3RCM04sUUFBUSxFQUFFbUwsS0FBSyxFQUFFbkwsUUFBUSxJQUFJLEVBQUU7Y0FDL0JNLEtBQUssRUFBRUE7WUFBSyxFQUNYLEVBQ0Z3SyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUt6QixHQUFHLEVBQUVOLFNBQVM7Y0FBRWdDLFNBQVMsRUFBQztZQUFXLEVBQUcsQ0FDcEMsQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVEQSxJQUFBdEMsTUFBQSxHQUFBbk4sT0FBQTtVQUNBLElBQUFzTixRQUFBLEdBQUF0TixPQUFBO1VBQ0EsSUFBQTJRLFdBQUEsR0FBQTNRLE9BQUE7VUFDTSxTQUFVNFEsWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUVwRDtZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFRLGNBQWMsR0FBRTtZQUNsQyxPQUNDWCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFnQixHQUM5QnRDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ21CLFdBQUEsQ0FBQUUsT0FBTztjQUFDQyxNQUFNO1lBQUEsRUFBRyxDQUNiO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkEsSUFBQTNELE1BQUEsR0FBQW5OLE9BQUE7VUFDQSxJQUFBc04sUUFBQSxHQUFBdE4sT0FBQTtVQUNNLFNBQVUrUSxZQUFZQSxDQUFDclAsSUFBSTtZQUNoQyxNQUFNLENBQUNtQyxLQUFLLEVBQUVtTixRQUFRLENBQUMsR0FBRzdELE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDL0MsTUFBTWhDLEdBQUcsR0FBR1osTUFBQSxDQUFBM0YsT0FBSyxDQUFDbUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNO2NBQ0xILEtBQUssRUFBRTtnQkFBRTdKO2NBQVU7WUFBRSxDQUNyQixHQUFHLElBQUEySixRQUFBLENBQUFRLGNBQWMsR0FBRTtZQUVwQixNQUFNbUQsZ0JBQWdCLEdBQUd0TixVQUFVLENBQUMyTCxHQUFHLENBQUM1TixJQUFJLENBQUMsRUFBRXdQLE9BQU87WUFDdEQvRCxNQUFBLENBQUEzRixPQUFLLENBQUN5SCxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNa0MsT0FBTyxHQUFHcEcsS0FBSyxJQUFJaUcsUUFBUSxDQUFDLElBQUksQ0FBQztjQUN2QyxJQUFJLENBQUNqRCxHQUFHLEVBQUVJLE9BQU8sRUFBRTtjQUNuQkosR0FBRyxDQUFDSSxPQUFPLENBQUNoQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVnRixPQUFPLENBQUM7Y0FDOUMsT0FBTyxNQUFNcEQsR0FBRyxDQUFDSSxPQUFPLEVBQUVnQixtQkFBbUIsQ0FBQyxPQUFPLEVBQUVnQyxPQUFPLENBQUM7WUFDaEUsQ0FBQyxFQUFFLENBQUNwRCxHQUFHLEVBQUVJLE9BQU8sQ0FBQyxDQUFDO1lBRWxCLE9BQU8sQ0FBQ0osR0FBRyxFQUFFbEssS0FBSyxJQUFJLENBQUNvTixnQkFBZ0IsRUFBRUEsZ0JBQWdCLENBQUM7VUFDM0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJBLElBQUE5RCxNQUFBLEdBQUFuTixPQUFBO1VBQ0EsSUFBQW9SLFdBQUEsR0FBQXBSLE9BQUE7VUFDQSxJQUFBc04sUUFBQSxHQUFBdE4sT0FBQTtVQUdBLElBQUFxUixVQUFBLEdBQUFyUixPQUFBO1VBQ087VUFBVyxTQUFVc1IsbUJBQW1CQSxDQUFDO1lBQy9DQyxRQUFRO1lBQ1I3RCxJQUFJO1lBQ0oxSixRQUFRO1lBQ1J3TixRQUFRO1lBQ1J4USxRQUFRO1lBQ1JpUCxLQUFLO1lBQ0x4TixLQUFLO1lBQ0w1QixNQUFNO1lBQ05rRCxZQUFZO1lBQ1osR0FBRzBOO1VBQUssQ0FDd0I7WUFDaEMsTUFBTSxDQUFDNUQsY0FBYyxFQUFFNkQsaUJBQWlCLENBQUMsR0FBR3ZFLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakUsTUFBTSxDQUFDNEIsWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBR3pFLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFN0QsTUFBTTtjQUFFbE0sS0FBSztjQUFFMko7WUFBSyxDQUFFLEdBQUcsSUFBQTRELFdBQUEsQ0FBQVMsVUFBVSxFQUFDO2NBQ25Dck8sRUFBRSxFQUFFaU8sS0FBSyxDQUFDak8sRUFBRTtjQUNaeEMsUUFBUTtjQUNSK0MsWUFBWTtjQUNaRCxRQUFRLEVBQUUyTixLQUFLLENBQUMzTixRQUFRO2NBQ3hCckI7YUFDQSxDQUFDO1lBQ0YsTUFBTXFQLEdBQUcsR0FBR3RFLEtBQUssR0FBR0EsS0FBSyxHQUFJLEVBQW1CO1lBRWhELE1BQU11RSxlQUFlLEdBQUdQLFFBQVE7WUFDaEMsSUFBSSxDQUFDM04sS0FBSyxJQUFJMk4sUUFBUSxFQUFFLE9BQU9yRSxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUN1QyxlQUFlLE9BQUc7WUFDbEQsSUFBSSxDQUFDbE8sS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUN2QixNQUFNO2NBQUV4QixRQUFRO2NBQUVNO1lBQUssQ0FBRSxHQUFHbVAsR0FBRztZQUMvQixNQUFNRSxZQUFZLEdBQUc7Y0FDcEJOLGlCQUFpQixFQUFFNVIsS0FBSyxJQUFHO2dCQUMxQixJQUFJLENBQUNBLEtBQUssRUFBRTRFLE9BQU8sQ0FBQ3VOLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQztnQkFDbkVQLGlCQUFpQixDQUFDNVIsS0FBSyxDQUFDO2NBQ3pCLENBQUM7Y0FDRCtOLGNBQWM7Y0FDZEwsS0FBSztjQUNMM0osS0FBSyxFQUFFMkosS0FBSyxDQUFDM0osS0FBSztjQUNsQmxCLEtBQUssRUFBRTZLLEtBQUssQ0FBQzdLLEtBQUs7Y0FDbEJwQyxRQUFRLEVBQUVpTixLQUFLLEVBQUV2SyxZQUFZLEVBQUUxQyxRQUFRO2NBQ3ZDeUQsUUFBUTtjQUNSZ00sVUFBVSxFQUFFdEMsSUFBSTtjQUNoQnVDLEtBQUs7Y0FDTG5NLFFBQVEsRUFBRTJOLEtBQUssQ0FBQzNOLFFBQVE7Y0FDeEI4TixlQUFlO2NBQ2ZKLFFBQVE7Y0FDUm5QLFFBQVE7Y0FDUnhCLE1BQU07Y0FDTitNLFVBQVUsRUFBRTZELEtBQUssQ0FBQzdEO2FBQ2xCO1lBRUQsT0FDQ1QsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDbEMsUUFBQSxDQUFBNEUsV0FBVyxDQUFDQyxRQUFRO2NBQUNyUyxLQUFLLEVBQUVrUztZQUFZLEdBQ3ZDVCxRQUFRLEVBQ1RwRSxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUM2QixVQUFBLENBQUFlLGFBQWE7Y0FBQ0MsU0FBUyxFQUFFVjtZQUFZLEVBQUksQ0FDcEI7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0RBLElBQUF4RSxNQUFBLEdBQUFuTixPQUFBO1VBd0JPO1VBQVksTUFBTWtTLFdBQVcsR0FBQXJTLE9BQUEsQ0FBQXFTLFdBQUEsR0FBRy9FLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQzhLLGFBQWEsQ0FBQyxFQUEyQixDQUFDO1VBQ2hGO1VBQVksTUFBTXhFLGNBQWMsR0FBR0EsQ0FBQSxLQUFNWCxNQUFBLENBQUEzRixPQUFLLENBQUMrSyxVQUFVLENBQUNMLFdBQVcsQ0FBQztVQUFDclMsT0FBQSxDQUFBaU8sY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCOUUsSUFBQVgsTUFBQSxHQUFBbk4sT0FBQTtVQUNBLElBQUF3UyxLQUFBLEdBQUF4UyxPQUFBO1VBQ0EsSUFBQXNOLFFBQUEsR0FBQXROLE9BQUE7VUFDQSxJQUFBeVMsU0FBQSxHQUFBelMsT0FBQTtVQUNBLElBQUEwUyxTQUFBLEdBQUExUyxPQUFBO1VBT08sV0FMUDs7Ozs7VUFLaUIsU0FBVTJTLGVBQWVBLENBQUE7WUFDekMsTUFBTTtjQUFFOU8sS0FBSztjQUFFMko7WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBUSxjQUFjLEdBQUU7WUFFekMsSUFBSU4sS0FBSyxDQUFDbkssUUFBUSxJQUFJUSxLQUFLLEVBQUUsT0FBT3NKLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ2tELFNBQUEsQ0FBQUUsWUFBWSxPQUFHO1lBRXBELElBQUksQ0FBQy9PLEtBQUssRUFBRSxPQUFPc0osTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDaUQsU0FBQSxDQUFBN0IsWUFBWSxPQUFHO1lBRW5DLE9BQU96RCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNnRCxLQUFBLENBQUF6TixJQUFJLE9BQUc7VUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUFvSSxNQUFBLEdBQUFuTixPQUFBO1VBQ0EsSUFBQTZTLFVBQUEsR0FBQTdTLE9BQUE7VUFFQSxJQUFBb04sTUFBQSxHQUFBcE4sT0FBQTtVQUNBLElBQUFzTixRQUFBLEdBQUF0TixPQUFBO1VBRU0sU0FBVThTLGlCQUFpQkEsQ0FBQztZQUFFQztVQUFnQixDQUFFO1lBQ3JELE1BQU07Y0FBRUMsUUFBUTtjQUFFQztZQUFJLENBQUUsR0FBRyxJQUFBM0YsUUFBQSxDQUFBNEYsZUFBZSxHQUFFO1lBRzVDLElBQUksQ0FBQyxDQUFDRCxJQUFJLENBQUM1SCxNQUFNLEVBQUU7Y0FDbEIsT0FDQzhCLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Z0JBQU1DLFNBQVMsRUFBQztjQUFpQyxHQUNoRHRDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ3BDLE1BQUEsQ0FBQStGLGFBQWE7Z0JBQ2J6RixJQUFJLEVBQUMsYUFBYTtnQkFDbEIrQixTQUFTLEVBQUMsUUFBUTtnQkFDbEJFLE9BQU8sRUFBQyxTQUFTO2dCQUNqQkMsT0FBTyxFQUFFb0QsUUFBUTtnQkFDakJ2UCxRQUFRLEVBQUVzUDtjQUFnQixFQUN6QixDQUNJOztZQUlULE9BQ0M1RixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFpQyxHQUNoRHRDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ3FELFVBQUEsQ0FBQU8sZUFBZSxPQUFHLENBQ2I7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQWpHLE1BQUEsR0FBQW5OLE9BQUE7VUFpQk8sTUFBTXFULFlBQVksR0FBQXhULE9BQUEsQ0FBQXdULFlBQUEsR0FBR2xHLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQzhLLGFBQWEsQ0FBQyxJQUFxQixDQUFDO1VBQy9ELE1BQU1ZLGVBQWUsR0FBR0EsQ0FBQSxLQUFNL0YsTUFBQSxDQUFBM0YsT0FBSyxDQUFDK0ssVUFBVSxDQUFDYyxZQUFZLENBQUM7VUFBQ3hULE9BQUEsQ0FBQXFULGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQnBFLElBQUEvRixNQUFBLEdBQUFuTixPQUFBO1VBQ0EsSUFBQXNOLFFBQUEsR0FBQXROLE9BQUE7VUFDTSxTQUFVc1QsWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUU5RixLQUFLO2NBQUVqTjtZQUFRLENBQUUsR0FBRyxJQUFBK00sUUFBQSxDQUFBUSxjQUFjLEdBQUU7WUFDNUMsTUFBTSxDQUFDNUUsU0FBUyxFQUFFcUssWUFBWSxDQUFDLEdBQUdwRyxNQUFBLENBQUEzRixPQUFLLENBQUN1SSxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQ3RMLFFBQVEsRUFBRStPLFdBQVcsQ0FBQyxHQUFHckcsTUFBQSxDQUFBM0YsT0FBSyxDQUFDdUksUUFBUSxDQUFVLEtBQUssQ0FBQztZQUM5RCxNQUFNLENBQUNrRCxJQUFJLEVBQUVRLE9BQU8sQ0FBQyxHQUFHdEcsTUFBQSxDQUFBM0YsT0FBSyxDQUFDdUksUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUMxQyxNQUFNcEssU0FBUyxHQUFHLE1BQU1vRixLQUFLLElBQUc7Y0FDL0J5SSxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCekksS0FBSyxDQUFDMkksY0FBYyxFQUFFO2NBQ3RCM0ksS0FBSyxDQUFDNEksZUFBZSxFQUFFO2NBQ3ZCLE1BQU0zUSxLQUFLLEdBQUcsTUFBTXpDLFFBQVEsQ0FBQ3VGLElBQUksRUFBRTtjQUVuQzBILEtBQUssQ0FBQzdILFNBQVMsQ0FBQzNDLEtBQUssQ0FBQztjQUN0QnVRLFlBQVksQ0FBQyxDQUFDckssU0FBUyxDQUFDO2NBQ3hCc0ssV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNuQixDQUFDO1lBRUQsTUFBTUksVUFBVSxHQUFHLE1BQU03SSxLQUFLLElBQUc7Y0FDaEMsSUFBSTtnQkFDSEEsS0FBSyxFQUFFNEksZUFBZSxFQUFFO2dCQUN4QkYsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDWEQsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTWhHLEtBQUssQ0FBQ3JJLFdBQVcsQ0FBQzhOLElBQUksQ0FBQztnQkFFN0JPLFdBQVcsQ0FBQyxLQUFLLENBQUM7ZUFDbEIsQ0FBQyxPQUFPL04sQ0FBQyxFQUFFO2dCQUNYZixPQUFPLENBQUNnQixLQUFLLENBQUMsT0FBTyxFQUFFRCxDQUFDLENBQUM7O1lBRTNCLENBQUM7WUFFRCxNQUFNdU4sUUFBUSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDNUgsTUFBTSxHQUFHdUksVUFBVSxHQUFHak8sU0FBUztZQUV2RCxPQUFPO2NBQUV1RCxTQUFTO2NBQUUrSixJQUFJO2NBQUVRLE9BQU87Y0FBRUQsV0FBVztjQUFFRCxZQUFZO2NBQUU5TyxRQUFRO2NBQUV1TztZQUFRLENBQUU7VUFDbkY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBLElBQUE3RixNQUFBLEdBQUFuTixPQUFBO1VBQ0EsSUFBQTZULEtBQUEsR0FBQTdULE9BQUE7VUFDQSxJQUFBcU4sTUFBQSxHQUFBck4sT0FBQTtVQUNBLElBQUFzTixRQUFBLEdBQUF0TixPQUFBO1VBQ0EsSUFBQThULFVBQUEsR0FBQTlULE9BQUE7VUFDQSxJQUFBK1QsYUFBQSxHQUFBL1QsT0FBQTtVQUNBLElBQUFnVSxTQUFBLEdBQUFoVSxPQUFBO1VBR0EsSUFBQWlVLGFBQUEsR0FBQWpVLE9BQUE7VUFDQSxJQUFBb04sTUFBQSxHQUFBcE4sT0FBQTtVQUVPO1VBQVcsTUFBTWtVLGVBQWUsR0FBR0EsQ0FBQztZQUMxQ0MsU0FBUyxHQUFHLEtBQUs7WUFDakJDLGNBQWMsR0FBRyxLQUFLO1lBQ3RCM1EsUUFBUSxHQUFHLEtBQUs7WUFDaEJtTTtVQUFPLENBQ3FCLEtBQUk7WUFDaEMsTUFBTSxDQUFDeUUsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR25ILE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFFNUQsTUFBTTtjQUFFdkMsS0FBSztjQUFFak4sUUFBUTtjQUFFcVIsZUFBZTtjQUFFOU47WUFBUSxDQUFFLEdBQUcsSUFBQWtRLFNBQUEsQ0FBQWxHLGNBQWMsR0FBRTtZQUN2RSxNQUFNO2NBQUVtRixJQUFJO2NBQUVRLE9BQU87Y0FBRVQsUUFBUTtjQUFFdk8sUUFBUTtjQUFFeUUsU0FBUztjQUFFcUssWUFBWTtjQUFFQztZQUFXLENBQUUsR0FBRyxJQUFBUyxhQUFBLENBQUFYLFlBQVksR0FBRTtZQUVsRyxJQUFBakcsTUFBQSxDQUFBVyxTQUFTLEVBQUMsQ0FBQ1IsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QjhHLFVBQVUsQ0FBQzlHLEtBQUssQ0FBQytHLGVBQWUsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFFRixNQUFNQyxVQUFVLEdBQUcvUCxRQUFRLElBQUk0UCxPQUFPLElBQUlGLFNBQVM7WUFFbkQsTUFBTU0sVUFBVSxHQUFHakgsS0FBSyxDQUFDL0osUUFBUSxJQUFJQSxRQUFRO1lBQzdDLE1BQU11TyxZQUFZLEdBQUc7Y0FDcEJ4RSxLQUFLO2NBQ0x3RixRQUFRO2NBQ1J6UyxRQUFRO2NBQ1I2VCxjQUFjO2NBQ2QzUCxRQUFRO2NBQ1JnUCxPQUFPO2NBQ1BGLFlBQVk7Y0FDWnJLLFNBQVM7Y0FDVCtKLElBQUk7Y0FDSk8sV0FBVztjQUNYL1AsUUFBUSxFQUFFZ1I7YUFDVjtZQUVEdEgsTUFBQSxDQUFBM0YsT0FBSyxDQUFDeUgsU0FBUyxDQUFDLE1BQUksQ0FFcEIsQ0FBQyxFQUFDLENBQUN4SyxRQUFRLENBQUMsQ0FBQztZQUViLE1BQU1pUSxLQUFLLEdBQUc7Y0FBRWpSLFFBQVEsRUFBRUEsUUFBUSxJQUFJK0osS0FBSyxDQUFDL0o7WUFBUSxDQUFFO1lBQ3RELE1BQU1zUCxnQkFBZ0IsR0FBRzJCLEtBQUssQ0FBQ2pSLFFBQVEsSUFBSStKLEtBQUssQ0FBQytHLGVBQWUsSUFBSXJMLFNBQVM7WUFDN0UsSUFBSWtHLEdBQUcsR0FBRyx3QkFBd0JvRixVQUFVLEdBQUcsYUFBYSxHQUFHLEVBQUUsSUFBSUMsVUFBVSxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUU7WUFDdEcsTUFBTUUsY0FBYyxHQUFHO2NBQ3RCbEYsU0FBUyxFQUFFTDthQUNYO1lBQ0QsTUFBTXdGLFlBQVksR0FBRztjQUNwQmhGLE9BQU87Y0FDUEgsU0FBUyxFQUFFLG1CQUFtQmdGLFVBQVUsR0FBRyxhQUFhLEdBQUcsRUFBRTthQUM3RDtZQUVELElBQUksQ0FBQyxFQUFFLEVBQUVsUCxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQ3lOLElBQUksQ0FBQzRCLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDNUIsSUFBSSxDQUFDNkIsSUFBSSxFQUFFLENBQUN6SixNQUFNLEVBQUVxSixLQUFLLENBQUNqUixRQUFRLEdBQUcsSUFBSTtZQUUzRyxNQUFNc1IsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUJuRCxlQUFlLENBQUMsSUFBSSxDQUFDO2NBQ3JCcEUsS0FBSyxDQUFDMUosUUFBUSxDQUFDcUUsSUFBSSxFQUFFO1lBQ3RCLENBQUM7WUFDRCxPQUNDZ0YsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDbEMsUUFBQSxDQUFBK0YsWUFBWSxDQUFDbEIsUUFBUTtjQUFDclMsS0FBSyxFQUFFa1M7WUFBWSxHQUN6QzdFLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ3FFLEtBQUEsQ0FBQW1CLElBQUk7Y0FBQ2hDLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQU00QjtZQUFZLEdBQ3pDekgsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFBLEdBQVNtRjtZQUFjLEdBSXRCeEgsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDc0UsVUFBQSxDQUFBbUIsU0FBUztjQUNUaEMsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZPLFdBQVcsRUFBRUEsV0FBVztjQUN4Qi9PLFFBQVEsRUFBRStQLFVBQVU7Y0FDcEJmLE9BQU8sRUFBRUEsT0FBTztjQUNoQkcsVUFBVSxFQUFFWixRQUFRO2NBQ3BCdlAsUUFBUSxFQUFFZ1I7WUFBVSxFQUNuQixFQUNGdEgsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBcUIsR0FDbEMzTCxRQUFRLElBQUlxSixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNwQyxNQUFBLENBQUFzQyxVQUFVO2NBQUNoQyxJQUFJLEVBQUMsUUFBUTtjQUFDa0MsT0FBTyxFQUFFbUY7WUFBYSxFQUFJLEVBQ2pFNUgsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDdUUsYUFBQSxDQUFBakIsaUJBQWlCO2NBQUNDLGdCQUFnQixFQUFFQTtZQUFnQixFQUFJLENBQ3BELENBQ0QsQ0FDQSxDQUNnQjtVQUUxQixDQUFDO1VBQUNsVCxPQUFBLENBQUFxVSxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEZGLElBQUEvRyxNQUFBLEdBQUFuTixPQUFBO1VBQ0EsSUFBQW9OLE1BQUEsR0FBQXBOLE9BQUE7VUFDQSxJQUFBa1YsTUFBQSxHQUFBbFYsT0FBQTtVQUVBLElBQUFzTixRQUFBLEdBQUF0TixPQUFBO1VBRU87VUFBVyxNQUFNbVYscUJBQXFCLEdBQUdBLENBQUM7WUFBRUMsSUFBSTtZQUFFQztVQUFPLENBQUUsS0FBSTtZQUNyRSxJQUFJLENBQUNELElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIsTUFBTTtjQUFFelM7WUFBSyxDQUFFLEdBQUcsSUFBQTJLLFFBQUEsQ0FBQVEsY0FBYyxHQUFFO1lBQ2xDLE1BQU07Y0FBRXdILEtBQUs7Y0FBRUM7WUFBVyxDQUFFLEdBQUc1UyxLQUFLLENBQUM2RyxXQUFXLENBQUM5RCxLQUFLO1lBRXRELE9BQ0N5SCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUFyQyxNQUFBLENBQUEzRixPQUFBLENBQUFpSixRQUFBLFFBQ0N0RCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUMwRixNQUFBLENBQUFNLFVBQVU7Y0FBQy9GLFNBQVMsRUFBQyxpQkFBaUI7Y0FBQzRGLE9BQU8sRUFBRUEsT0FBTztjQUFFSSxRQUFRO1lBQUEsR0FDakV0SSxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE4QixHQUM1Q3RDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQThCLEdBQzVDdEMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxhQUFLOEYsS0FBSyxDQUFNLENBQ1gsRUFDTm5JLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ3BDLE1BQUEsQ0FBQXNJLElBQUk7Y0FBQ2pHLFNBQVMsRUFBQywwQkFBMEI7Y0FBQy9CLElBQUksRUFBQztZQUFLLEVBQUcsRUFDeERQLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBR0MsU0FBUyxFQUFDO1lBQXlCLEdBQUU4RixXQUFXLENBQUssQ0FDbkQsQ0FDTSxDQUNYO1VBRUwsQ0FBQztVQUFDMVYsT0FBQSxDQUFBc1YscUJBQUEsR0FBQUEscUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJGLElBQUFoSSxNQUFBLEdBQUFuTixPQUFBO1VBR0EsSUFBQW9OLE1BQUEsR0FBQXBOLE9BQUE7VUFDQSxJQUFBMlYsT0FBQSxHQUFBM1YsT0FBQTtVQUNBLElBQUFzTixRQUFBLEdBQUF0TixPQUFBO1VBQ0EsSUFBQWtWLE1BQUEsR0FBQWxWLE9BQUE7VUFDQSxJQUFBNFYsV0FBQSxHQUFBNVYsT0FBQTtVQUVPO1VBQVcsTUFBTW9ULGVBQWUsR0FBR0EsQ0FBQztZQUFFM1AsUUFBUSxHQUFHO1VBQUssQ0FBRSxLQUFJO1lBQ2xFLE1BQU07Y0FBRWxELFFBQVE7Y0FBRTJJLFNBQVM7Y0FBRXFLO1lBQVksQ0FBRSxHQUFHLElBQUFqRyxRQUFBLENBQUE0RixlQUFlLEdBQUU7WUFDL0QsTUFBTSxDQUFDek8sUUFBUSxFQUFFK08sV0FBVyxDQUFDLEdBQUcsSUFBQXJHLE1BQUEsQ0FBQTRDLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDOEYsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRyxJQUFBM0ksTUFBQSxDQUFBNEMsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNLENBQUNySyxLQUFLLEVBQUVxUSxRQUFRLENBQUMsR0FBRyxJQUFBNUksTUFBQSxDQUFBNEMsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUN6QyxNQUFNLEdBQUdpRyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUE3SSxNQUFBLENBQUE0QyxRQUFRLEVBQUMvSyxVQUFVLEVBQUVpUixZQUFZLENBQUNDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBRXZHLE1BQU1DLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0IsSUFBSTtnQkFDSCxNQUFNNVYsUUFBUSxDQUFDZ0ksTUFBTSxFQUFFO2dCQUN2QmdMLFlBQVksQ0FBQyxDQUFDckssU0FBUyxDQUFDO2VBQ3hCLENBQUMsT0FBT3pELENBQUMsRUFBRTtnQkFDWHNRLFFBQVEsQ0FBQyxJQUFJLENBQUM7O1lBRWhCLENBQUM7WUFFRCxNQUFNak0sWUFBWSxHQUFHQSxDQUFBLEtBQUs7Y0FDekJ2SixRQUFRLENBQ05vSixjQUFjLEVBQUUsQ0FDaEIwQyxJQUFJLENBQUMsTUFBSztnQkFDVnJILFVBQVUsRUFBRWlSLFlBQVksQ0FBQ0csT0FBTyxDQUFDLDhCQUE4QixFQUFFLE1BQU0sQ0FBQztnQkFDeEVKLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztjQUN6QixDQUFDLENBQUMsQ0FDRDFKLEtBQUssQ0FBQzVHLEtBQUssSUFBRztnQkFDZGhCLE9BQU8sQ0FBQzJSLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckNOLFFBQVEsQ0FBQyxJQUFJLENBQUM7Y0FDZixDQUFDLENBQUM7WUFDSixDQUFDO1lBQ0QsTUFBTU8sVUFBVSxHQUFHLE1BQU12TCxLQUFLLElBQUc7Y0FDaEMsSUFBSTtnQkFDSEEsS0FBSyxDQUFDMkksY0FBYyxFQUFFO2dCQUN0QkYsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTWhLLFdBQVcsR0FBRyxNQUFNakosUUFBUSxDQUFDb0osY0FBYyxFQUFFO2dCQUVuRCxJQUFJLENBQUNILFdBQVcsRUFBRTtrQkFDakJzTSxZQUFZLENBQUMsSUFBSSxDQUFDO2tCQUNsQjs7Z0JBR0RLLFFBQVEsRUFBRTtlQUNWLENBQUMsT0FBTzFRLENBQUMsRUFBRTtnQkFDWHNRLFFBQVEsQ0FBQyxJQUFJLENBQUM7ZUFDZCxTQUFTO2dCQUNUdkMsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE1BQU02QixPQUFPLEdBQUd0SyxLQUFLLElBQUc7Y0FDdkJ5SSxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ2xCc0MsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNwQixDQUFDO1lBQ0QsTUFBTVMsWUFBWSxHQUFHQSxDQUFBLEtBQU1SLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDMUMsTUFBTXRCLFVBQVUsR0FBR2hSLFFBQVEsSUFBSWdCLFFBQVE7WUFDdkMsSUFBSXlFLFNBQVMsRUFBRSxPQUFPaUUsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDbUcsT0FBQSxDQUFBYSxNQUFNLE9BQUc7WUFFaEMsT0FDQ3JKLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQXJDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWlKLFFBQUEsUUFDQ3RELE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ3BDLE1BQUEsQ0FBQXNDLFVBQVU7Y0FBQ2hDLElBQUksRUFBQyxLQUFLO2NBQUNrQyxPQUFPLEVBQUUwRyxVQUFVO2NBQUU3UyxRQUFRLEVBQUVnUjtZQUFVLEVBQUksRUFDcEV0SCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUMwRixNQUFBLENBQUF1QixnQkFBZ0I7Y0FBQ3JCLElBQUksRUFBRVMsU0FBUztjQUFFUixPQUFPLEVBQUVBLE9BQU87Y0FBRXFCLFNBQVMsRUFBRTVNO1lBQVksRUFBSSxFQUNoRnFELE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ29HLFdBQUEsQ0FBQVQscUJBQXFCO2NBQUNDLElBQUksRUFBRTFQLEtBQUs7Y0FBRTJQLE9BQU8sRUFBRWtCO1lBQVksRUFBSSxDQUMzRDtVQUVMLENBQUM7VUFBQzFXLE9BQUEsQ0FBQXVULGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RUYsSUFBQWpHLE1BQUEsR0FBQW5OLE9BQUE7VUFDQSxJQUFBb04sTUFBQSxHQUFBcE4sT0FBQTtVQUNBLElBQUFrVixNQUFBLEdBQUFsVixPQUFBO1VBQ0EsSUFBQXNOLFFBQUEsR0FBQXROLE9BQUE7VUFFTztVQUFXLE1BQU15VyxnQkFBZ0IsR0FBR0EsQ0FBQztZQUFFckIsSUFBSTtZQUFFQyxPQUFPO1lBQUVxQjtVQUFTLENBQUUsS0FBSTtZQUMzRSxJQUFJLENBQUN0QixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU07Y0FBRXpTO1lBQUssQ0FBRSxHQUFHLElBQUEySyxRQUFBLENBQUFRLGNBQWMsR0FBRTtZQUNsQyxNQUFNNkksUUFBUSxHQUFHaFUsS0FBSyxDQUFDNkcsV0FBVyxDQUFDOEwsS0FBSztZQUN4QyxNQUFNQyxXQUFXLEdBQUc1UyxLQUFLLENBQUM2RyxXQUFXLENBQUMrTCxXQUFXO1lBRWpELE9BQ0NwSSxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUFyQyxNQUFBLENBQUEzRixPQUFBLENBQUFpSixRQUFBLFFBQ0N0RCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUMwRixNQUFBLENBQUFNLFVBQVU7Y0FBQ0gsT0FBTyxFQUFFQSxPQUFPO2NBQUVJLFFBQVE7Y0FBQ2lCLFNBQVMsRUFBRUE7WUFBUyxHQUMxRHZKLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQThCLEdBQzVDdEMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBOEIsR0FDL0N0QyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLGFBQUttSCxRQUFRLENBQU0sRUFDbkJ4SixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFzQixHQUFFOU0sS0FBSyxDQUFDNkcsV0FBVyxDQUFDb04sS0FBSyxDQUFRLENBQy9ELEVBQ1R6SixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNwQyxNQUFBLENBQUFzSSxJQUFJO2NBQUNqRyxTQUFTLEVBQUMsMEJBQTBCO2NBQUMvQixJQUFJLEVBQUM7WUFBSyxFQUFHLEVBQ3hEUCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUF5QixHQUFFOEYsV0FBVyxDQUFLLENBQ25ELENBQ00sQ0FDWDtVQUVMLENBQUM7VUFBQzFWLE9BQUEsQ0FBQTRXLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCRixJQUFBdEosTUFBQSxHQUFBbk4sT0FBQTtVQUNBLElBQUFvTixNQUFBLEdBQUFwTixPQUFBO1VBQ0EsSUFBQTZXLE1BQUEsR0FBQTdXLE9BQUE7VUFDQSxJQUFBc04sUUFBQSxHQUFBdE4sT0FBQTtVQUNBLElBQUEyUSxXQUFBLEdBQUEzUSxPQUFBO1VBQ0EsSUFBQThXLE9BQUEsR0FBQTlXLE9BQUE7VUFFTyxNQUFNd1csTUFBTSxHQUFHQSxDQUFBLEtBQUs7WUFDMUIsTUFBTTtjQUFFalcsUUFBUTtjQUFFZ1QsWUFBWTtjQUFFYSxjQUFjO2NBQUU1RyxLQUFLO2NBQUVpRyxPQUFPO2NBQUVEO1lBQVcsQ0FBRSxHQUFHLElBQUFsRyxRQUFBLENBQUE0RixlQUFlLEdBQUU7WUFDakcsTUFBTSxDQUFDNkQsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzdKLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTSxDQUFDdE0sUUFBUSxFQUFFd1QsV0FBVyxDQUFDLEdBQUc5SixNQUFBLENBQUEzRixPQUFLLENBQUN1SSxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXBELE1BQU1tSCxNQUFNLEdBQUcsTUFBTW5NLEtBQUssSUFBRztjQUM1QkEsS0FBSyxDQUFDMkksY0FBYyxFQUFFO2NBQ3RCLE1BQU1uVCxRQUFRLENBQUN1RixJQUFJLEVBQUU7Y0FDckJ5TixZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFFRHBHLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3lILFNBQVMsQ0FBQyxNQUFLO2NBQ3BCaEIsVUFBVSxDQUFDLE1BQUs7Z0JBQ2ZnSixXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ04sTUFBTXJSLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0JvUixhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CLE1BQU1oVSxLQUFLLEdBQUcsTUFBTXpDLFFBQVEsQ0FBQ3VGLElBQUksRUFBRTtjQUNuQyxNQUFNd0QsYUFBYSxHQUFHLE1BQU1rRSxLQUFLLENBQUM1SCxVQUFVLENBQUM1QyxLQUFLLENBQUM7Y0FDbkQsSUFBSXNHLGFBQWEsQ0FBQzVELEtBQUssRUFBRTtnQkFDeEJoQixPQUFPLENBQUNnQixLQUFLLENBQUM0RCxhQUFhLENBQUM1RCxLQUFLLENBQUM7Z0JBQ2xDOztjQUVEK04sT0FBTyxDQUFDbkssYUFBYSxDQUFDc0MsSUFBSSxDQUFDcUgsSUFBSSxDQUFDO2NBQ2hDTSxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFFRCxNQUFNUCxRQUFRLEdBQUcsTUFBTWpJLEtBQUssSUFBRztjQUM5QkEsS0FBSyxDQUFDMkksY0FBYyxFQUFFO2NBQ3RCM0ksS0FBSyxDQUFDNEksZUFBZSxFQUFFO2NBQ3ZCLElBQUk7Z0JBQ0hILFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLElBQUlZLGNBQWMsRUFBRSxPQUFPeE8sVUFBVSxFQUFFO2dCQUN2QyxNQUFNNUMsS0FBSyxHQUFHLE1BQU16QyxRQUFRLENBQUN1RixJQUFJLEVBQUU7Z0JBRW5DMEgsS0FBSyxDQUFDN0gsU0FBUyxDQUFDM0MsS0FBSyxDQUFDO2dCQUN0QnVRLFlBQVksQ0FBQyxLQUFLLENBQUM7Z0JBQ25CQyxXQUFXLENBQUMsS0FBSyxDQUFDO2VBQ2xCLENBQUMsT0FBTy9OLENBQUMsRUFBRTtnQkFDWGYsT0FBTyxDQUFDZ0IsS0FBSyxDQUFDRCxDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFDRCxPQUNDMEgsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNkIsR0FDM0N0QyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNwQyxNQUFBLENBQUFzQyxVQUFVO2NBQUNELFNBQVMsRUFBQyxRQUFRO2NBQUMvQixJQUFJLEVBQUMsUUFBUTtjQUFDa0MsT0FBTyxFQUFFc0g7WUFBTSxFQUFJLEVBQ2hFL0osTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDcUgsTUFBQSxDQUFBTSxLQUFLO2NBQUNDLE1BQU0sRUFBQztZQUFPLEVBQUcsRUFDeEJqSyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE2QixHQUMxQ3NILFVBQVUsR0FDVjVKLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ21CLFdBQUEsQ0FBQTBHLE1BQU0sUUFDTmxLLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ21CLFdBQUEsQ0FBQUUsT0FBTztjQUFDQyxNQUFNO1lBQUEsRUFBRyxDQUNWLEdBRVQzRCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNzSCxPQUFBLENBQUEzRCxhQUFhO2NBQ2J6RixJQUFJLEVBQUMsYUFBYTtjQUNsQitCLFNBQVMsRUFBQyxRQUFRO2NBQ2xCRSxPQUFPLEVBQUMsU0FBUztjQUNqQkMsT0FBTyxFQUFFb0QsUUFBUTtjQUNqQnZQLFFBQVEsRUFBRUE7WUFBUSxFQUVuQixDQUNJLENBQ0Q7VUFFUixDQUFDO1VBQUM1RCxPQUFBLENBQUEyVyxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkVGLElBQUFySixNQUFBLEdBQUFuTixPQUFBO1VBQ0EsSUFBQXFOLE1BQUEsR0FBQXJOLE9BQUE7VUFDQSxJQUFBc04sUUFBQSxHQUFBdE4sT0FBQTtVQUVNLFNBQVVpVixTQUFTQSxDQUFDO1lBQUV6QixXQUFXO1lBQUVDLE9BQU87WUFBRUcsVUFBVTtZQUFFblAsUUFBUTtZQUFFd08sSUFBSTtZQUFFeFA7VUFBUSxDQUFFO1lBQ3ZGLE1BQU07Y0FBRStKO1lBQUssQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQTRGLGVBQWUsR0FBRTtZQUNuQyxNQUFNb0UsV0FBVyxHQUFHbkssTUFBQSxDQUFBM0YsT0FBSyxDQUFDbUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUN0Q1IsTUFBQSxDQUFBM0YsT0FBSyxDQUFDeUgsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTXNJLE1BQU0sR0FBR0QsV0FBVyxDQUFDbkosT0FBTztjQUNsQ29KLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsTUFBTTtjQUM1QkYsTUFBTSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sR0FDbEJ4RSxJQUFJLENBQUM1SCxNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDa00sTUFBTSxDQUFDaEosWUFBWSxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUdnSixNQUFNLENBQUNoSixZQUFZLElBQUksSUFBSTtjQUU1RixJQUFJLENBQUMsV0FBVyxFQUFFaEosU0FBUyxDQUFDLENBQUNDLFFBQVEsQ0FBQ3lOLElBQUksQ0FBQzRCLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNuRSxDQUFDLEVBQUUsQ0FBQzVCLElBQUksQ0FBQyxDQUFDO1lBRVYsSUFBQTVGLE1BQUEsQ0FBQVcsU0FBUyxFQUNSLENBQUNSLEtBQUssQ0FBQ2hMLElBQUksQ0FBQyxFQUNaLE1BQUs7Y0FDSndDLFVBQVUsQ0FBQ2lKLFVBQVUsQ0FBQyxNQUFNcUosV0FBVyxDQUFDbkosT0FBTyxDQUFDdUosS0FBSyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQzlELENBQUMsRUFDRCxtQkFBbUIsQ0FDbkI7WUFFRCxNQUFNQyxnQkFBZ0IsR0FBRztjQUFFbFUsUUFBUSxFQUFFZ0IsUUFBUSxJQUFJaEI7WUFBUSxDQUFFO1lBQzNELE1BQU1tVSxpQkFBaUIsR0FBR25TLENBQUMsSUFBRztjQUM3QixNQUFNO2dCQUFFM0Y7Y0FBSyxDQUFFLEdBQUcyRixDQUFDLENBQUM4UixNQUFNO2NBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUVoUyxTQUFTLENBQUMsQ0FBQ0MsUUFBUSxDQUFDMUYsS0FBSyxDQUFDK1UsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Y0FDL0RwQixPQUFPLENBQUMzVCxLQUFLLENBQUM7WUFDZixDQUFDO1lBQ0QsTUFBTStYLGFBQWEsR0FBR3BTLENBQUMsSUFBRztjQUN6QixJQUFJQSxDQUFDLENBQUNxUyxHQUFHLEtBQUssT0FBTyxFQUFFO2NBQ3ZCLE1BQU1DLEVBQUUsR0FBR0MsU0FBUyxJQUFJQSxTQUFTLEdBQUcsSUFBSTtjQUN4QyxNQUFNbFksS0FBSyxHQUFHMkYsQ0FBQyxDQUFDOFIsTUFBTSxDQUFDelgsS0FBSyxDQUFDK1UsVUFBVSxDQUFDLElBQUksQ0FBQztjQUM3QyxJQUFJLENBQUMsRUFBRSxFQUFFdFAsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUMxRixLQUFLLENBQUMsRUFBRTtjQUMzQzJGLENBQUMsQ0FBQ3dTLFFBQVEsR0FBR3hFLE9BQU8sQ0FBQ3NFLEVBQUUsQ0FBQyxHQUFHbkUsVUFBVSxFQUFFO1lBQ3hDLENBQUM7WUFFRCxPQUNDekcsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ0QyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUEsR0FDS21JLGdCQUFnQjtjQUNwQk8sSUFBSSxFQUFFLENBQUM7Y0FDUHBZLEtBQUssRUFBRW1ULElBQUk7Y0FDWGtGLFFBQVEsRUFBRVAsaUJBQWlCO2NBQzNCUSxTQUFTLEVBQUVQLGFBQWE7Y0FDeEJRLFNBQVMsRUFBRSxJQUFJO2NBQ2Y1SSxTQUFTLEVBQUMsaUJBQWlCO2NBQzNCMUIsR0FBRyxFQUFFdUo7WUFBVyxFQUNmLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREEsSUFBQW5LLE1BQUEsR0FBQW5OLE9BQUE7VUFDQSxJQUFBc1ksU0FBQSxHQUFBdFksT0FBQTtVQUZBOztVQVFNLFNBQVVtWCxLQUFLQSxDQUFDO1lBQUVDO1VBQU0sQ0FBYztZQUMzQyxNQUFNbUIsU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDL1MsUUFBUSxDQUFDNFIsTUFBTSxDQUFDO1lBQ3ZELE1BQU1vQixPQUFPLEdBQUdwQixNQUFNLEtBQUssU0FBUztZQUNwQyxNQUFNLENBQUNxQixLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUMsR0FBRyxJQUFBTixTQUFBLENBQUFPLFFBQVEsRUFBQ04sU0FBUyxFQUFFQyxPQUFPLENBQUM7WUFDNUUsTUFBTU0sV0FBVyxHQUFHSCxPQUFPLENBQUNJLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUN2RCxNQUFNQyxlQUFlLEdBQUdQLE9BQU8sQ0FBQ0ssUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQzNELE9BQ0M3TCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUEwQixHQUN4Q3RDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsZUFBTyxHQUFHeUosZUFBZSxFQUFFLEUsSUFBUyxFQUNwQzlMLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsZUFBTyxHQUFHc0osV0FBVyxFQUFFLENBQVEsQ0FDMUI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQTNMLE1BQUEsR0FBQW5OLE9BQUE7VUFEQTs7VUFFQSxNQUFNO1lBQUUrUCxRQUFRO1lBQUVkO1VBQVMsQ0FBRSxHQUFHOUIsTUFBQSxDQUFBM0YsT0FBSztVQUUvQixTQUFVcVIsUUFBUUEsQ0FBQ04sU0FBa0IsRUFBRUMsT0FBZ0I7WUFDNUQsTUFBTSxDQUFDVSxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHcEosUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVuQ2QsU0FBUyxDQUFDLE1BQUs7Y0FDZCxJQUFJbUssVUFBMEI7Y0FFOUIsSUFBSWIsU0FBUyxFQUFFO2dCQUNkYSxVQUFVLEdBQUdwUixXQUFXLENBQUMsTUFBSztrQkFDN0JtUixPQUFPLENBQUNFLFFBQVEsSUFBSUEsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2NBR1QsT0FBTyxNQUFLO2dCQUNYcFIsYUFBYSxDQUFDbVIsVUFBVSxDQUFDO2NBQzFCLENBQUM7WUFDRixDQUFDLEVBQUUsQ0FBQ2IsU0FBUyxDQUFDLENBQUM7WUFFZnRKLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSXVKLE9BQU8sRUFBRTtnQkFDWlcsT0FBTyxDQUFDLENBQUMsQ0FBQzs7WUFFWixDQUFDLEVBQUUsQ0FBQ1gsT0FBTyxDQUFDLENBQUM7WUFFYixNQUFNSSxZQUFZLEdBQUdNLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNqQyxNQUFNUCxPQUFPLEdBQUdXLElBQUksQ0FBQ0MsS0FBSyxDQUFFTCxJQUFJLEdBQUcsR0FBRyxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTVIsT0FBTyxHQUFHWSxJQUFJLENBQUNDLEtBQUssQ0FBRUwsSUFBSSxHQUFHLElBQUksR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU1ULEtBQUssR0FBR2EsSUFBSSxDQUFDQyxLQUFLLENBQUNMLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sQ0FBQ1QsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDO1VBQy9DOzs7Ozs7Ozs7OztVQ2pDQTs7VUFFQWpaLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBcU4sTUFBQSxHQUFBbk4sT0FBQTtVQUVNLFNBQVU0UyxZQUFZQSxDQUFBO1lBQzNCLE9BQU96RixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLG9CQUFjO1VBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFyQyxNQUFBLEdBQUFuTixPQUFBO1VBQ0EsSUFBQXdaLGFBQUEsR0FBQXhaLE9BQUE7VUFFQSxJQUFBc04sUUFBQSxHQUFBdE4sT0FBQTtVQUNBLElBQUFxTixNQUFBLEdBQUFyTixPQUFBO1VBQ0EsSUFBQW9OLE1BQUEsR0FBQXBOLE9BQUE7VUFDQSxJQUFBeVosTUFBQSxHQUFBelosT0FBQTtVQUNBLElBQUEwWixPQUFBLEdBQUExWixPQUFBO1VBRU0sU0FBVW9TLGFBQWFBLENBQUM7WUFBRUM7VUFBUyxDQUEwQjtZQUNsRSxNQUFNO2NBQUU3RSxLQUFLO2NBQUVvRTtZQUFlLENBQUUsR0FBRyxJQUFBdEUsUUFBQSxDQUFBUSxjQUFjLEdBQUU7WUFFbkQsTUFBTSxDQUFDNkwsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3pNLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDaEQsSUFBQTFDLE1BQUEsQ0FBQVcsU0FBUyxFQUFDLENBQUNSLEtBQUssQ0FBQzFKLFFBQVEsQ0FBQyxFQUFFLE1BQUs7Y0FDaEM4VixVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ2YsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDcE0sS0FBSyxDQUFDMUosUUFBUSxDQUFDMEMsU0FBUyxFQUFFLE9BQU8sSUFBSTtZQUMxQyxNQUFNO2NBQUUyQztZQUFLLENBQUUsR0FBR3FFLEtBQUssQ0FBQzFKLFFBQVEsRUFBRXNDLE1BQU07WUFDeEMsTUFBTXlULFVBQVUsR0FBR3JNLEtBQUssQ0FBQzFKLFFBQVEsQ0FBQ3NDLE1BQU0sQ0FBQ2dDLE1BQU07WUFDL0MsTUFBTTBSLFdBQVcsR0FBRyxJQUFJLEdBQUcsTUFBTSxHQUFHLFNBQVM7WUFFN0MsSUFBSSxDQUFDM1EsS0FBSyxFQUFFO2NBQ1gsTUFBTTtnQkFBRTVJLFFBQVE7Z0JBQUVNO2NBQU0sQ0FBRSxHQUFHMk0sS0FBSyxDQUFDMUosUUFBUSxDQUFDc0MsTUFBTTtjQUNsRCxNQUFNMlQsTUFBTSxHQUFHLEVBQUU7Y0FDakIsSUFBSXhaLFFBQVEsRUFBRW1GLEtBQUssRUFBRTtnQkFDcEJxVSxNQUFNLENBQUNqTyxJQUFJLENBQUNxQixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2tCQUFLc0ksR0FBRyxFQUFDO2dCQUFnQixHLGdDQUF5QnZYLFFBQVEsQ0FBQ21GLEtBQUssQ0FBQ25DLE9BQU8sQ0FBTyxDQUFDOztjQUU3RixJQUFJMUMsTUFBTSxFQUFFNkUsS0FBSyxFQUFFO2dCQUNsQnFVLE1BQU0sQ0FBQ2pPLElBQUksQ0FBQ3FCLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7a0JBQUtzSSxHQUFHLEVBQUM7Z0JBQWMsRyxvQ0FBNkJqWCxNQUFNLENBQUM2RSxLQUFLLENBQUNuQyxPQUFPLENBQU8sQ0FBQzs7Y0FHN0YsT0FDQzRKLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Z0JBQUtDLFNBQVMsRUFBQztjQUFpRSxHQUMvRXRDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsOEJBQXdCLEVBQ3ZCdUssTUFBTSxDQUNGOztZQUlSLE1BQU1DLFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCeE0sS0FBSyxDQUFDMUosUUFBUSxDQUFDaUUsS0FBSyxFQUFFO1lBQ3ZCLENBQUM7WUFFRCxNQUFNa1MsTUFBTSxHQUFHQSxDQUFBLEtBQUs7Y0FDbkJ6TSxLQUFLLENBQUMxSixRQUFRLENBQUNxRSxJQUFJLEVBQUU7Y0FDckJ5SixlQUFlLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxNQUFNc0ksT0FBTyxHQUFHMU0sS0FBSyxDQUFDMUosUUFBUSxDQUFDZ0QsS0FBSyxHQUFHLFFBQVEsR0FBRyxLQUFLO1lBQ3ZELE9BQ0NxRyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNnSyxhQUFBLENBQUFXLGVBQWUsUUFDZDlILFNBQVMsSUFDVGxGLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ2dLLGFBQUEsQ0FBQVksTUFBTSxDQUFDQyxHQUFHO2NBQ1Y1SyxTQUFTLEVBQUMsZ0JBQWdCO2NBQzFCNkssT0FBTyxFQUFFO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUMsQ0FBQyxFQUFFO2NBQUUsQ0FBRTtjQUM5QkMsT0FBTyxFQUFFO2dCQUFFRixPQUFPLEVBQUUsQ0FBQztnQkFBRUMsQ0FBQyxFQUFFO2NBQUMsQ0FBRTtjQUM3QkUsSUFBSSxFQUFFO2dCQUFFSCxPQUFPLEVBQUUsQ0FBQztnQkFBRUMsQ0FBQyxFQUFFO2NBQUUsQ0FBRTtjQUMzQkcsVUFBVSxFQUFFO2dCQUFFalUsUUFBUSxFQUFFLEdBQUc7Z0JBQUVrVSxJQUFJLEVBQUU7Y0FBUztZQUFFLEdBRzlDek4sTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDaUssTUFBQSxDQUFBb0IsS0FBSztjQUFDcEwsU0FBUyxFQUFDLFVBQVU7Y0FBQ3FMLEdBQUcsRUFBQztZQUFzQixFQUFHLEVBQ3pEM04sTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDa0ssT0FBQSxDQUFBcUIsY0FBYyxPQUFHLEVBRWxCNU4sTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNkIsR0FDM0N0QyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNwQyxNQUFBLENBQUFzQyxVQUFVO2NBQUNqTSxRQUFRLEVBQUVvVyxVQUFVLEtBQUssU0FBUztjQUFFbk0sSUFBSSxFQUFFd00sT0FBTztjQUFFdEssT0FBTyxFQUFFb0s7WUFBVSxFQUFJLEVBQ3RGN00sTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDcEMsTUFBQSxDQUFBc0MsVUFBVTtjQUFDRCxTQUFTLEVBQUMsV0FBVztjQUFDL0IsSUFBSSxFQUFFb00sV0FBVztjQUFFbEssT0FBTyxFQUFFcUs7WUFBTSxFQUFJLENBR25FLENBRVAsQ0FDZ0I7VUFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkVBLElBQUE5WixTQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBbU4sTUFBQSxHQUFBbk4sT0FBQTtVQUNBLElBQUFnYixNQUFBLEdBQUFoYixPQUFBO1VBU08sTUFBTWliLFlBQVksR0FBR0EsQ0FBQztZQUFFN1U7VUFBTSxDQUFpQyxLQUFJO1lBQ3pFLE1BQU0rRCxLQUFLLEdBQWtCLElBQUk2USxNQUFBLENBQUFFLEtBQUssRUFBRTtZQUN4Qy9RLEtBQUssQ0FBQ2dSLE1BQU0sQ0FBQztjQUFFM1UsU0FBUyxFQUFFLEVBQUU7Y0FBRTRVLFFBQVEsRUFBRSxFQUFFO2NBQUVDLE9BQU8sRUFBRSxLQUFLO2NBQUUzVixLQUFLLEVBQUUsS0FBSztZQUFDLENBQUUsQ0FBQztZQUM1RSxNQUFNO2NBQUU0QjtZQUFNLENBQUUsR0FBRzZDLEtBQUs7WUFFeEIsSUFBQWdELE1BQUEsQ0FBQThCLFNBQVMsRUFBQyxNQUFLO2NBQ2Q5TyxTQUFBLENBQUFpSCxPQUFPLENBQ0xDLE9BQU8sRUFBRSxDQUNUZ0YsSUFBSSxDQUFDLE1BQUs7Z0JBQ1YvRSxNQUFNLENBQUNkLFNBQVMsR0FBRyxDQUFDLEdBQUdyRyxTQUFBLENBQUFpSCxPQUFPLENBQUNFLE1BQU0sRUFBRSxDQUFDO2dCQUN4Q0EsTUFBTSxDQUFDK1QsT0FBTyxHQUFHLElBQUk7Z0JBQ3JCQyxNQUFNLENBQUNuYixTQUFBLENBQUFpSCxPQUFPLENBQUNJLE9BQU8sRUFBRWhFLEVBQUUsSUFBSSxFQUFFLENBQUM7Y0FDbEMsQ0FBQyxDQUFDLENBQ0Q4SSxLQUFLLENBQUNpUCxHQUFHLElBQUc7Z0JBQ1o3VyxPQUFPLENBQUNnQixLQUFLLENBQUM2VixHQUFHLENBQUM7Z0JBQ2xCalUsTUFBTSxDQUFDNUIsS0FBSyxHQUFHLGtDQUFrQztjQUNsRCxDQUFDLENBQUM7WUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sTUFBTTRWLE1BQU0sR0FBSTlYLEVBQVUsSUFBSTtjQUM3QjhELE1BQU0sQ0FBQzhULFFBQVEsR0FBRzVYLEVBQUU7Y0FDcEIsTUFBTWtFLE1BQU0sR0FBR0osTUFBTSxDQUFDZCxTQUFTLENBQUNtQixJQUFJLENBQUNELE1BQU0sSUFBSUEsTUFBTSxDQUFDbEUsRUFBRSxLQUFLQSxFQUFFLENBQUM7Y0FDaEU0QyxNQUFNLENBQUM3RixRQUFRLENBQUNtSCxNQUFNLEdBQUdBLE1BQU07WUFDaEMsQ0FBQztZQUVELE1BQU0wQyxRQUFRLEdBQUlXLEtBQTJDLElBQUk7Y0FDaEV1USxNQUFNLENBQUN2USxLQUFLLENBQUN3TSxNQUFNLENBQUN6WCxLQUFLLENBQUM7WUFDM0IsQ0FBQztZQUVELElBQUksQ0FBQ3dILE1BQU0sQ0FBQytULE9BQU8sRUFBRSxPQUFPLElBQUk7WUFFaEMsT0FDQ2xPLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDdEMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFPZ00sT0FBTyxFQUFDO1lBQWUsb0JBQXVCLEVBQ3JEck8sTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFRaE0sRUFBRSxFQUFDLGVBQWU7Y0FBQzFELEtBQUssRUFBRXdILE1BQU0sQ0FBQzhULFFBQVE7Y0FBRWpELFFBQVEsRUFBRS9OO1lBQVEsR0FDbkU5QyxNQUFNLENBQUNkLFNBQVMsQ0FBQ2lWLEdBQUcsQ0FBQy9ULE1BQU0sSUFDM0J5RixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQVFzSSxHQUFHLEVBQUVwUSxNQUFNLENBQUNsRSxFQUFFO2NBQUUxRCxLQUFLLEVBQUU0SCxNQUFNLENBQUNsRTtZQUFFLEdBQ3RDa0UsTUFBTSxDQUFDZ1UsS0FBSyxDQUVkLENBQUMsQ0FDTSxDQUNKO1VBRVIsQ0FBQztVQUFDN2IsT0FBQSxDQUFBb2IsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZERixJQUFBOU4sTUFBQSxHQUFBbk4sT0FBQTtVQUVPLE1BQU0yYixTQUFTLEdBQUdBLENBQUM7WUFBRUM7VUFBSyxDQUFzQixLQUN0RHpPLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7WUFDQ3FNLE9BQU8sRUFBQyxXQUFXO1lBQ25CQyxLQUFLLEVBQUMsSUFBSTtZQUNWckUsTUFBTSxFQUFDLElBQUk7WUFDWHNFLElBQUksRUFBQyxNQUFNO1lBQ1hDLE1BQU0sRUFBQyxjQUFjO1lBQ3JCQyxXQUFXLEVBQUMsR0FBRztZQUNmeE0sU0FBUyxFQUFDO1VBQVMsR0FFbkJ0QyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO1lBQU0wTSxDQUFDLEVBQUM7VUFBNFEsRUFBRyxFQUN0Uk4sS0FBSyxJQUFJek8sTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtZQUFNMk0sRUFBRSxFQUFDLEdBQUc7WUFBQ0MsRUFBRSxFQUFDLEdBQUc7WUFBQ0MsRUFBRSxFQUFDLElBQUk7WUFBQ0MsRUFBRSxFQUFDLElBQUk7WUFBQ04sTUFBTSxFQUFDLGNBQWM7WUFBQ0MsV0FBVyxFQUFDO1VBQUcsRUFBRyxDQUV2RjtVQUFDcGMsT0FBQSxDQUFBOGIsU0FBQSxHQUFBQSxTQUFBO1VBRUssTUFBTVksT0FBTyxHQUFHQSxDQUFDO1lBQUVDO1VBQU8sQ0FBd0IsS0FDeERyUCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO1lBQ0NxTSxPQUFPLEVBQUMsV0FBVztZQUNuQkMsS0FBSyxFQUFDLElBQUk7WUFDVnJFLE1BQU0sRUFBQyxJQUFJO1lBQ1hzRSxJQUFJLEVBQUMsTUFBTTtZQUNYQyxNQUFNLEVBQUMsY0FBYztZQUNyQkMsV0FBVyxFQUFDLEdBQUc7WUFDZnhNLFNBQVMsRUFBQztVQUFTLEdBRW5CdEMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtZQUFNME0sQ0FBQyxFQUFDO1VBQWtELEVBQUcsRUFDN0QvTyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO1lBQU0wTSxDQUFDLEVBQUM7VUFBMkIsRUFBRyxFQUN0Qy9PLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7WUFBTTJNLEVBQUUsRUFBQyxJQUFJO1lBQUNDLEVBQUUsRUFBQyxJQUFJO1lBQUNDLEVBQUUsRUFBQyxJQUFJO1lBQUNDLEVBQUUsRUFBQztVQUFJLEVBQUcsRUFDeENuUCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO1lBQU0yTSxFQUFFLEVBQUMsR0FBRztZQUFDQyxFQUFFLEVBQUMsSUFBSTtZQUFDQyxFQUFFLEVBQUMsSUFBSTtZQUFDQyxFQUFFLEVBQUM7VUFBSSxFQUFHLEVBQ3RDRSxPQUFPLElBQUlyUCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO1lBQU0yTSxFQUFFLEVBQUMsR0FBRztZQUFDQyxFQUFFLEVBQUMsR0FBRztZQUFDQyxFQUFFLEVBQUMsSUFBSTtZQUFDQyxFQUFFLEVBQUMsSUFBSTtZQUFDRyxhQUFhLEVBQUM7VUFBTyxFQUFHLENBRXpFO1VBQUM1YyxPQUFBLENBQUEwYyxPQUFBLEdBQUFBLE9BQUE7VUFFSyxNQUFNRyxXQUFXLEdBQUdBLENBQUM7WUFBRWQ7VUFBSyxDQUFzQixLQUN4RHpPLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7WUFDQ3FNLE9BQU8sRUFBQyxXQUFXO1lBQ25CQyxLQUFLLEVBQUMsSUFBSTtZQUNWckUsTUFBTSxFQUFDLElBQUk7WUFDWHNFLElBQUksRUFBQyxNQUFNO1lBQ1hDLE1BQU0sRUFBQyxjQUFjO1lBQ3JCQyxXQUFXLEVBQUMsR0FBRztZQUNmeE0sU0FBUyxFQUFDO1VBQVMsR0FFbkJ0QyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO1lBQVNtTixNQUFNLEVBQUM7VUFBbUMsRUFBRyxFQUN0RHhQLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7WUFBTTBNLENBQUMsRUFBRU4sS0FBSyxHQUFHLEVBQUUsR0FBRztVQUF5RCxFQUFJLEVBQ2xGQSxLQUFLLElBQ0x6TyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUFyQyxNQUFBLENBQUEzRixPQUFBLENBQUFpSixRQUFBLFFBQ0N0RCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO1lBQU0yTSxFQUFFLEVBQUMsSUFBSTtZQUFDQyxFQUFFLEVBQUMsR0FBRztZQUFDQyxFQUFFLEVBQUMsSUFBSTtZQUFDQyxFQUFFLEVBQUMsSUFBSTtZQUFDRyxhQUFhLEVBQUM7VUFBTyxFQUFHLEVBQzdEdFAsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtZQUFNMk0sRUFBRSxFQUFDLElBQUk7WUFBQ0MsRUFBRSxFQUFDLEdBQUc7WUFBQ0MsRUFBRSxFQUFDLElBQUk7WUFBQ0MsRUFBRSxFQUFDLElBQUk7WUFBQ0csYUFBYSxFQUFDO1VBQU8sRUFBRyxDQUU5RCxDQUVGO1VBQUM1YyxPQUFBLENBQUE2YyxXQUFBLEdBQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERGLElBQUF2UCxNQUFBLEdBQUFuTixPQUFBO1VBQ0EsSUFBQXNOLFFBQUEsR0FBQXROLE9BQUE7VUFFTSxTQUFVK2EsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUV2TjtZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFRLGNBQWMsR0FBRTtZQUNsQyxNQUFNO2NBQUUxRjtZQUFNLENBQUUsR0FBR29GLEtBQUssQ0FBQzFKLFFBQVEsQ0FBQ3NDLE1BQU07WUFFeEMsTUFBTXdXLGdCQUFnQixHQUFHQSxDQUFBLEtBQUs7Y0FDN0IsTUFBTXZhLFFBQVEsR0FBMkI7Z0JBQ3hDd2EsTUFBTSxFQUFFLGVBQWU7Z0JBQ3ZCQyxVQUFVLEVBQUUsVUFBVTtnQkFDdEJDLElBQUksRUFBRSxZQUFZO2dCQUNsQkMsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCQyxPQUFPLEVBQUUsR0FBRzNELElBQUksQ0FBQ0MsS0FBSyxDQUFDL0wsS0FBSyxDQUFDMUosUUFBUSxDQUFDNEMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM4RyxLQUFLLENBQUMxSixRQUFRLENBQUM0QyxRQUFRLEdBQUcsRUFBRSxFQUNuRnFTLFFBQVEsRUFBRSxDQUNWQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztlQUNsQjtjQUNELE9BQU8zVyxRQUFRLENBQUMrRixNQUFNLENBQUMsSUFBSSxFQUFFO1lBQzlCLENBQUM7WUFFRCxPQUNDK0UsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaEN0QyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLGVBQU9vTixnQkFBZ0IsRUFBRSxDQUFRLENBQzVCO1VBRVI7Ozs7Ozs7Ozs7O1V6QnpCQTs7VUFFQWpkLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VTBCSkEsSUFBQXFOLE1BQUEsR0FBQW5OLE9BQUE7VUFDQSxJQUFBa2QsTUFBQSxHQUFBbGQsT0FBQTtVQUVNLFNBQVU2UixVQUFVQSxDQUFDO1lBQUVyTyxFQUFFO1lBQUV4QyxRQUFRLEdBQUcsSUFBSTtZQUFFOEMsUUFBUSxHQUFHLElBQUk7WUFBRXJCLEtBQUs7WUFBRXNCO1VBQVksQ0FBRTtZQUN2RixNQUFNLENBQUNGLEtBQUssRUFBRW1OLFFBQVEsQ0FBQyxHQUFHN0QsTUFBQSxDQUFBM0YsT0FBSyxDQUFDdUksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUN2QyxLQUFLLEVBQUUyUCxRQUFRLENBQUMsR0FBR2hRLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBZSxFQUFrQixDQUFDO1lBQzFFLE1BQU0sQ0FBQzVGLEtBQUssRUFBRWlULFFBQVEsQ0FBQyxHQUFHalEsTUFBQSxDQUFBM0YsT0FBSyxDQUFDdUksUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNc04sUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTUMsT0FBTyxHQUFHLElBQUlKLE1BQUEsQ0FBQS9hLFlBQVksQ0FBQztnQkFBRXFCLEVBQUU7Z0JBQUV4QyxRQUFRO2dCQUFFOEMsUUFBUTtnQkFBRXJCLEtBQUs7Z0JBQUVzQjtjQUFZLENBQUUsQ0FBQztjQUNqRixNQUFNb1UsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3JCaUYsUUFBUSxDQUFDO2tCQUFFLEdBQUdFLE9BQU8sQ0FBQ0MsYUFBYTtnQkFBRSxDQUFFLENBQUM7Z0JBQ3hDdk0sUUFBUSxDQUFDc00sT0FBTyxDQUFDelosS0FBSyxDQUFDO2NBQ3hCLENBQUM7Y0FDRCxNQUFNMlosT0FBTyxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3BCRixPQUFPLENBQUNwVixHQUFHLENBQUMsUUFBUSxFQUFFaVEsUUFBUSxDQUFDO2NBQ2hDLENBQUM7Y0FDRG1GLE9BQU8sQ0FBQ2hjLEVBQUUsQ0FBQyxRQUFRLEVBQUU2VyxRQUFRLENBQUM7Y0FDOUJnRixRQUFRLENBQUNHLE9BQU8sQ0FBQztjQUNqQnRNLFFBQVEsQ0FBQ3NNLE9BQU8sQ0FBQ3paLEtBQUssQ0FBQztjQUN2QixPQUFPMlosT0FBTztZQUNmLENBQUM7WUFDRHJRLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3lILFNBQVMsQ0FBQ29PLFFBQVEsRUFBRSxDQUFDN1osRUFBRSxDQUFDLENBQUM7WUFFL0IsT0FBTztjQUFFSyxLQUFLO2NBQUUySjtZQUFLLENBQUU7VUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFMLE1BQUEsR0FBQW5OLE9BQUE7VUFDQSxJQUFBcU4sTUFBQSxHQUFBck4sT0FBQTtVQUNBLElBQUF3UyxLQUFBLEdBQUF4UyxPQUFBO1VBQ0EsSUFBQXNOLFFBQUEsR0FBQXROLE9BQUE7VUFDQSxJQUFBeVMsU0FBQSxHQUFBelMsT0FBQTtVQUNBLElBQUEwUyxTQUFBLEdBQUExUyxPQUFBO1VBRUE7Ozs7O1VBS00sU0FBVXlkLElBQUlBLENBQUM7WUFBRWpRLEtBQUs7WUFBRSxHQUFHaUU7VUFBSyxDQUFFO1lBQ3ZDLE1BQU0sQ0FBQ2hOLFFBQVEsRUFBRStPLFdBQVcsQ0FBQyxHQUFHckcsTUFBQSxDQUFBM0YsT0FBSyxDQUFDdUksUUFBUSxDQUFDdkMsS0FBSyxDQUFDL0ksUUFBUSxDQUFDO1lBQzlELE1BQU0sQ0FBQ1osS0FBSyxFQUFFbU4sUUFBUSxDQUFDLEdBQUc3RCxNQUFBLENBQUEzRixPQUFLLENBQUN1SSxRQUFRLENBQUN2QyxLQUFLLENBQUMzSixLQUFLLENBQUM7WUFDckQsTUFBTTZKLElBQUksR0FBRytELEtBQUssQ0FBQzdELFVBQVUsQ0FBQzBCLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDekMsTUFBTSxDQUFDekIsY0FBYyxFQUFFNkQsaUJBQWlCLENBQUMsR0FBR3ZFLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakUsTUFBTTtjQUNML0wsUUFBUTtjQUNSM0IsUUFBUTtjQUNSTSxLQUFLO2NBQ0xNLFlBQVksRUFBRTtnQkFBRXBDO2NBQU07WUFBRSxDQUN4QixHQUFHMk0sS0FBSztZQUVULElBQUFILE1BQUEsQ0FBQVcsU0FBUyxFQUFDLENBQUNSLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJ3RCxRQUFRLENBQUN4RCxLQUFLLENBQUMzSixLQUFLLENBQUM7WUFDdEIsQ0FBQyxDQUFDO1lBRUYsTUFBTW1PLFlBQVksR0FBRztjQUNwQk4saUJBQWlCLEVBQUU1UixLQUFLLElBQUc7Z0JBQzFCLElBQUksQ0FBQ0EsS0FBSyxFQUFFNEUsT0FBTyxDQUFDdU4sS0FBSyxDQUFDLHdDQUF3QyxDQUFDO2dCQUNuRVAsaUJBQWlCLENBQUM1UixLQUFLLENBQUM7Y0FDekIsQ0FBQztjQUNEK04sY0FBYztjQUNkTCxLQUFLO2NBQ0w3SyxLQUFLLEVBQUU2SyxLQUFLLENBQUM3SyxLQUFLO2NBQ2xCcUIsUUFBUTtjQUNSZ00sVUFBVSxFQUFFdEMsSUFBSTtjQUNoQnJMLFFBQVE7Y0FDUnhCLE1BQU07Y0FDTmdELEtBQUssRUFBRTJKLEtBQUssQ0FBQzNKLEtBQUs7Y0FDbEIrSixVQUFVLEVBQUU2RCxLQUFLLENBQUM3RDthQUNsQjtZQUVELE1BQU00QyxPQUFPLEdBQUcsQ0FBQ2hELEtBQUssQ0FBQ25LLFFBQVEsR0FBR21QLEtBQUEsQ0FBQXpOLElBQUksR0FBRzJOLFNBQUEsQ0FBQUUsWUFBWTtZQUNyRCxNQUFNNkssSUFBSSxHQUFHNVosS0FBSyxHQUFHMk0sT0FBTyxHQUFHaUMsU0FBQSxDQUFBN0IsWUFBWTtZQUUzQyxPQUNDekQsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDbEMsUUFBQSxDQUFBNEUsV0FBVyxDQUFDQyxRQUFRO2NBQUNyUyxLQUFLLEVBQUVrUztZQUFZLEdBQ3hDN0UsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDaU8sSUFBSSxPQUFHLENBQ2M7VUFFekIiLCJpZ25vcmVMaXN0IjpbXX0=