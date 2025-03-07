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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.16"]]);
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
        hash: 972701876,
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
            #model;
            constructor({
              id,
              language,
              realtime = false,
              model
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
        hash: 1659554812,
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
                  this.#mediaRecorder?.start();
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
        hash: 427450299,
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
        hash: 2456319693,
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
        hash: 1077196187,
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
            model
          }) {
            const [ready, setReady] = _react.default.useState(false);
            const [store, setStore] = _react.default.useState({});
            const [state, setState] = _react.default.useState({});
            const callback = () => {
              const manager = new _store.StoreManager({
                id,
                language,
                realtime,
                model
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIkVYVEVOU0lPTlMiLCJtZXNzYWdlcyIsIml0ZW1zIiwiY2F0ZWdvcnkiLCJjaGF0IiwibW9kZWwiLCJjaGF0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwicHJvY2Vzc1RyYW5zY3JpcHRpb24iLCJwcm9jY2Vzc1RyYW5zY3JpcHRpb24iLCJzZWxlY3RlZE1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInJlYWR5IiwicmVhbHRpbWUiLCJhdXRvcGxheSIsIlJlYWx0aW1lU3RvcmUiLCJsb2FkIiwicHJvY2Vzc01vZGVsIiwiY2hhdElkIiwiY3VycmVudENoYXQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwiZmV0Y2hpbmciLCJjb25zb2xlIiwid2FybiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImxvZ2dlZCIsIkNoYXQiLCJnbG9iYWxUaGlzIiwibG9hZEFsbCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic291cmNlIiwic3RyZWFtIiwic3RhcnRUaW1lIiwiaW5pdFByb21pc2UiLCJzdG9wUHJvbWlzZSIsImF1ZGlvQ29udGV4dCIsInJlY29yZGluZ1Byb21pc2UiLCJtZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwicmVjb3JkaW5nIiwidmFsaWQiLCJhbmFseXNlciIsInNwZWVjaFJlY29nbml0aW9uIiwidHJhbnNjcmlwdGlvbiIsInByb21pc2VTcGVlY2giLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25PYnNlcnZlciIsInBlcm1pc3Npb25TdGF0ZSIsImhhc1Blcm1pc3Npb25zIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwicXVlcnkiLCJzdGF0ZSIsIm9uY2hhbmdlIiwib25DaGFuZ2VTdGF0dXMiLCJiaW5kIiwiI29uQ2hhbmdlU3RhdHVzIiwiZ2V0U3BlZWNoUmVjb2duaXRpb24iLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJQZW5kaW5nUHJvbWlzZSIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsImkiLCJyZXN1bHRJbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJpc0ZpbmFsIiwidHJhbnNjcmlwdCIsInJlc29sdmUiLCJvbmVycm9yIiwic3RhcnQiLCJvbkRhdGFBdmFpbGFibGUiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJzdGFydFJlY29yZGluZyIsIiNzdGFydFJlY29yZGluZyIsInNwZWNzIiwiTWVkaWFSZWNvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXNlIiwidGhlbiIsImNhdGNoIiwicmVqZWN0IiwiZmluYWxseSIsIm9uU3RyZWFtIiwib25FcnJvciIsInN0b3BTdHJlYW0iLCJtaWNyb3Bob25lIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJkaXNjb25uZWN0IiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJhdHRyaWJ1dGVzIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNscyIsImhhcyIsImdldCIsImNsc0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJfbWVzc2FnZXMiLCJyZWFkZXIiLCJ1c2VTdGF0ZSIsInN5c3RlbUljb24iLCJlbXB0eSIsInNldE1lc3NhZ2VzIiwidXBkYXRlU2Nyb2xsIiwic2V0VXBkYXRlU2Nyb2xsIiwibm93Iiwib25OZXdNZXNzYWdlIiwiY2xzQ29udGVudCIsIkNvbnRyb2wiLCJGcmFnbWVudCIsIk1lc3NhZ2VzIiwiX2NvbXBvbmVudHMiLCJDaGF0U2tlbGV0b24iLCJTcGlubmVyIiwiYWN0aXZlIiwidXNlRXh0ZW5zaW9uIiwic2V0UmVhZHkiLCJ3ZWJDb21wb25lbnROYW1lIiwiY29udHJvbCIsIm9uUmVhZHkiLCJfdXNlTWFuYWdlciIsIl9jb250YWluZXIiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJza2VsZXRvbiIsInByb3BzIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJzaG93UmVhbHRpbWUiLCJzZXRTaG93UmVhbHRpbWUiLCJ1c2VNYW5hZ2VyIiwib2JqIiwiU2tlbGV0b25Db250cm9sIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDaGF0Q29udGV4dCIsIlByb3ZpZGVyIiwiUmVhbHRpbWVQYW5lbCIsImlzVmlzaWJsZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJBZ2VudHNDaGF0UGFuZWwiLCJDaGF0Tm90Rm91bmQiLCJfcmVjb3JkaW5nIiwiSW5wdXRBY3Rpb25CdXR0b24iLCJidXR0b25Jc0Rpc2FibGVkIiwib25TdWJtaXQiLCJ0ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiQXBwSWNvbkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Rm9ybSIsInNldFJlY29yZGluZyIsInNldEZldGNoaW5nIiwic2V0VGV4dCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlU2VuZCIsIl9mb3JtIiwiX3RleHRJbnB1dCIsIl9hY3Rpb25CdXR0b24iLCJfY29udGV4dDIiLCJfdXNlSW5wdXRGb3JtIiwiQWdlbnRzQ2hhdElucHV0IiwiaXNXYWl0aW5nIiwiYXV0b1RyYW5zY3JpYmUiLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsIndhaXRpbmdSZXNwb25zZSIsImlzRmV0Y2hpbmciLCJpc0Rpc2FibGVkIiwiYXR0cnMiLCJjb250YWluZXJBdHRycyIsImNvbnRyb2xBdHRycyIsInJlcGxhY2VBbGwiLCJ0cmltIiwib25DbGlja1NwZWVjaCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJfbW9kYWwiLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJBbGVydE1vZGFsIiwiY2VudGVyZWQiLCJJY29uIiwiX3BsYXllciIsIl9lcnJvck1vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2V0RXJyb3IiLCJzZXRIYXNQZXJtaXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwic2V0SXRlbSIsImxvZyIsInBsYXlBY3Rpb24iLCJvbkNsb3NlRXJyb3IiLCJQbGF5ZXIiLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwic3VidGl0bGUiLCJpbnRybyIsIl90aW1lciIsIl9pY29uczIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNldERpc2FibGVkIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJCdXR0b24iLCJ0ZXh0QXJlYVJlZiIsInRhcmdldCIsInN0eWxlIiwiaGVpZ2h0IiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsInJvd3MiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsIk1hdGgiLCJmbG9vciIsIl9mcmFtZXJNb3Rpb24iLCJfaW1hZ2UiLCJfc3RhdHVzIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJjYWxsU3RhdHVzIiwic3BlYWtlckljb24iLCJlcnJvcnMiLCJvbk1pY0NsaWNrIiwiaGFuZ3VwIiwibWljSWNvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJJbWFnZSIsInNyYyIsIlJlYWx0aW1lU3RhdHVzIiwiX3N0YXRlIiwiU2VsZWN0RGV2aWNlIiwiU3RhdGUiLCJkZWZpbmUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJzZWxlY3QiLCJleGMiLCJodG1sRm9yIiwibWFwIiwibGFiZWwiLCJQaG9uZUljb24iLCJpc09mZiIsInZpZXdCb3giLCJ3aWR0aCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIk1pY0ljb24iLCJpc011dGVkIiwic3Ryb2tlTGluZWNhcCIsIlNwZWFrZXJJY29uIiwicG9pbnRzIiwiZ2V0U3RhdHVzTWVzc2FnZSIsImNsb3NlZCIsImNvbm5lY3RpbmciLCJvcGVuIiwiY2xvc2luZyIsImNyZWF0ZWQiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwiY2FsbGJhY2siLCJtYW5hZ2VyIiwiZ2V0UHJvcGVydGllcyIsImNsZWFuVXAiLCJWaWV3Il0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2FjdGlvbi1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2hvb2tzL3VzZS1pbnB1dC1mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvYWdlbnRzLWlucHV0LnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvZGV2aWNlcy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvaWNvbnMudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL3N0YXR1cy50c3giLCIvdHMvdmlld3MvdXNlLW1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL3dpZGdldC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFHQSxJQUFBRyxTQUFBLEdBQUFILE9BQUE7VUFLTztVQUFZLE1BQU9JLFlBQWEsU0FBUUwsTUFBQSxDQUFBTSxhQUFxQjtZQUduRSxDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsUUFBUztZQUVULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQUMsT0FBUSxHQUFHO2NBQ1ZDLEdBQUcsRUFBRVIsTUFBQSxD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