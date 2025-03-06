System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "@aimpact/chat-sdk@1.4.1/voice", "@aimpact/chat-sdk@1.4.1/wrapper", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/agents-api@0.4.1/realtime/client", "@aimpact/agents-api@0.4.1/realtime/client/conversation", "@aimpact/agents-api@0.4.1/realtime/audio/recorder", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/chat-sdk@1.4.1/messages", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/chat-sdk@1.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/agents-api@0.4.1/realtime/widgets/state"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, AudioManager, Recorder, Chat, AgentsChatContainer, ChatContext, useChatContext, AgentsChatPanel, AgentsChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, IAgentsContainerProps, __beyond_pkg, hmr;
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
    }, function (_aimpactReactive001Model) {
      dependency_1 = _aimpactReactive001Model;
    }, function (_aimpactChatSdk141Voice) {
      dependency_2 = _aimpactChatSdk141Voice;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_3 = _aimpactChatSdk141Wrapper;
    }, function (_aimpactChatSdk141Core) {
      dependency_4 = _aimpactChatSdk141Core;
    }, function (_aimpactChatSdk141Session) {
      dependency_5 = _aimpactChatSdk141Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_aimpactAgentsApi041RealtimeClient) {
      dependency_7 = _aimpactAgentsApi041RealtimeClient;
    }, function (_aimpactAgentsApi041RealtimeClientConversation) {
      dependency_8 = _aimpactAgentsApi041RealtimeClientConversation;
    }, function (_aimpactAgentsApi041RealtimeAudioRecorder) {
      dependency_9 = _aimpactAgentsApi041RealtimeAudioRecorder;
    }, function (_beyondJsKernel019Core) {
      dependency_10 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_12 = _pragmateUi100Beta7Icons;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_13 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactChatSdk141Messages) {
      dependency_14 = _aimpactChatSdk141Messages;
    }, function (_pragmateUi100Beta7Components) {
      dependency_15 = _pragmateUi100Beta7Components;
    }, function (_aimpactChatSdk141ComponentsIcons) {
      dependency_16 = _aimpactChatSdk141ComponentsIcons;
    }, function (_pragmateUi100Beta7Form) {
      dependency_17 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_18 = _pragmateUi100Beta7Modal;
    }, function (_framerMotion2) {
      dependency_19 = _framerMotion2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_20 = _pragmateUi100Beta7Image;
    }, function (_aimpactAgentsApi041RealtimeWidgetsState) {
      dependency_21 = _aimpactAgentsApi041RealtimeWidgetsState;
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
      __pkg.dependencies.update([['@aimpact/reactive/model', dependency_1], ['@aimpact/chat-sdk/voice', dependency_2], ['@aimpact/chat-sdk/wrapper', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/agents-api/realtime/client', dependency_7], ['@aimpact/agents-api/realtime/client/conversation', dependency_8], ['@aimpact/agents-api/realtime/audio/recorder', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['react', dependency_11], ['pragmate-ui/icons', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/chat-sdk/messages', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/chat-sdk/components/icons', dependency_16], ['pragmate-ui/form', dependency_17], ['pragmate-ui/modal', dependency_18], ['framer-motion', dependency_19], ['pragmate-ui/image', dependency_20], ['@aimpact/agents-api/realtime/widgets/state', dependency_21]]);
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
        hash: 2210274979,
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
        hash: 3848216407,
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
            console.log(15, text);
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
            console.log(15.2, text);
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
        hash: 2019803614,
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
            const {
              valid
            } = store.realtime.client;
            const [updated, setUpdated] = _react.default.useState({});
            (0, _hooks.useBinder)([store.realtime], () => {
              setUpdated({});
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIkVYVEVOU0lPTlMiLCJtZXNzYWdlcyIsIml0ZW1zIiwiY2F0ZWdvcnkiLCJjaGF0IiwibW9kZWwiLCJjaGF0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwicHJvY2Vzc1RyYW5zY3JpcHRpb24iLCJwcm9jY2Vzc1RyYW5zY3JpcHRpb24iLCJzZWxlY3RlZE1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInJlYWR5IiwicmVhbHRpbWUiLCJhdXRvcGxheSIsIlJlYWx0aW1lU3RvcmUiLCJsb2FkIiwicHJvY2Vzc01vZGVsIiwiY2hhdElkIiwiY3VycmVudENoYXQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwiZmV0Y2hpbmciLCJjb25zb2xlIiwid2FybiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImxvZ2dlZCIsIkNoYXQiLCJnbG9iYWxUaGlzIiwibG9hZEFsbCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic291cmNlIiwic3RyZWFtIiwic3RhcnRUaW1lIiwiaW5pdFByb21pc2UiLCJzdG9wUHJvbWlzZSIsImF1ZGlvQ29udGV4dCIsInJlY29yZGluZ1Byb21pc2UiLCJtZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwicmVjb3JkaW5nIiwidmFsaWQiLCJhbmFseXNlciIsInNwZWVjaFJlY29nbml0aW9uIiwidHJhbnNjcmlwdGlvbiIsInByb21pc2VTcGVlY2giLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25PYnNlcnZlciIsInBlcm1pc3Npb25TdGF0ZSIsImhhc1Blcm1pc3Npb25zIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwicXVlcnkiLCJzdGF0ZSIsIm9uY2hhbmdlIiwib25DaGFuZ2VTdGF0dXMiLCJiaW5kIiwiI29uQ2hhbmdlU3RhdHVzIiwiZ2V0U3BlZWNoUmVjb2duaXRpb24iLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJQZW5kaW5nUHJvbWlzZSIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsImkiLCJyZXN1bHRJbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJpc0ZpbmFsIiwidHJhbnNjcmlwdCIsInJlc29sdmUiLCJvbmVycm9yIiwic3RhcnQiLCJvbkRhdGFBdmFpbGFibGUiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJzdGFydFJlY29yZGluZyIsIiNzdGFydFJlY29yZGluZyIsInNwZWNzIiwiTWVkaWFSZWNvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXNlIiwidGhlbiIsImNhdGNoIiwicmVqZWN0IiwiZmluYWxseSIsIm9uU3RyZWFtIiwib25FcnJvciIsInN0b3BTdHJlYW0iLCJtaWNyb3Bob25lIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJkaXNjb25uZWN0IiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJhdHRyaWJ1dGVzIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNscyIsImhhcyIsImdldCIsImNsc0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJfbWVzc2FnZXMiLCJyZWFkZXIiLCJ1c2VTdGF0ZSIsInN5c3RlbUljb24iLCJlbXB0eSIsInNldE1lc3NhZ2VzIiwidXBkYXRlU2Nyb2xsIiwic2V0VXBkYXRlU2Nyb2xsIiwibm93Iiwib25OZXdNZXNzYWdlIiwiY2xzQ29udGVudCIsIkNvbnRyb2wiLCJGcmFnbWVudCIsIk1lc3NhZ2VzIiwiX2NvbXBvbmVudHMiLCJDaGF0U2tlbGV0b24iLCJTcGlubmVyIiwiYWN0aXZlIiwidXNlRXh0ZW5zaW9uIiwic2V0UmVhZHkiLCJ3ZWJDb21wb25lbnROYW1lIiwiY29udHJvbCIsIm9uUmVhZHkiLCJfdXNlTWFuYWdlciIsIl9jb250YWluZXIiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJza2VsZXRvbiIsInByb3BzIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJzaG93UmVhbHRpbWUiLCJzZXRTaG93UmVhbHRpbWUiLCJ1c2VNYW5hZ2VyIiwib2JqIiwiU2tlbGV0b25Db250cm9sIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDaGF0Q29udGV4dCIsIlByb3ZpZGVyIiwiUmVhbHRpbWVQYW5lbCIsImlzVmlzaWJsZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJBZ2VudHNDaGF0UGFuZWwiLCJDaGF0Tm90Rm91bmQiLCJfcmVjb3JkaW5nIiwiSW5wdXRBY3Rpb25CdXR0b24iLCJidXR0b25Jc0Rpc2FibGVkIiwib25TdWJtaXQiLCJ0ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwibG9nIiwiQXBwSWNvbkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Rm9ybSIsInNldFJlY29yZGluZyIsInNldEZldGNoaW5nIiwic2V0VGV4dCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlU2VuZCIsIl9mb3JtIiwiX3RleHRJbnB1dCIsIl9hY3Rpb25CdXR0b24iLCJfY29udGV4dDIiLCJfdXNlSW5wdXRGb3JtIiwiQWdlbnRzQ2hhdElucHV0IiwiaXNXYWl0aW5nIiwiYXV0b1RyYW5zY3JpYmUiLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsIndhaXRpbmdSZXNwb25zZSIsImlzRmV0Y2hpbmciLCJpc0Rpc2FibGVkIiwiYXR0cnMiLCJjb250YWluZXJBdHRycyIsImNvbnRyb2xBdHRycyIsInJlcGxhY2VBbGwiLCJ0cmltIiwib25DbGlja1NwZWVjaCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJfbW9kYWwiLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJBbGVydE1vZGFsIiwiY2VudGVyZWQiLCJJY29uIiwiX3BsYXllciIsIl9lcnJvck1vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2V0RXJyb3IiLCJzZXRIYXNQZXJtaXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwic2V0SXRlbSIsInBsYXlBY3Rpb24iLCJvbkNsb3NlRXJyb3IiLCJQbGF5ZXIiLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwic3VidGl0bGUiLCJpbnRybyIsIl90aW1lciIsIl9pY29uczIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNldERpc2FibGVkIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJCdXR0b24iLCJ0ZXh0QXJlYVJlZiIsInRhcmdldCIsInN0eWxlIiwiaGVpZ2h0IiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsInJvd3MiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsIk1hdGgiLCJmbG9vciIsIl9mcmFtZXJNb3Rpb24iLCJfaW1hZ2UiLCJfc3RhdHVzIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJjYWxsU3RhdHVzIiwic3BlYWtlckljb24iLCJlcnJvcnMiLCJvbk1pY0NsaWNrIiwiaGFuZ3VwIiwibWljSWNvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJJbWFnZSIsInNyYyIsIlJlYWx0aW1lU3RhdHVzIiwiX3N0YXRlIiwiU2VsZWN0RGV2aWNlIiwiU3RhdGUiLCJkZWZpbmUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJzZWxlY3QiLCJleGMiLCJodG1sRm9yIiwibWFwIiwibGFiZWwiLCJQaG9uZUljb24iLCJpc09mZiIsInZpZXdCb3giLCJ3aWR0aCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIk1pY0ljb24iLCJpc011dGVkIiwic3Ryb2tlTGluZWNhcCIsIlNwZWFrZXJJY29uIiwicG9pbnRzIiwiZ2V0U3RhdHVzTWVzc2FnZSIsImNsb3NlZCIsImNvbm5lY3RpbmciLCJvcGVuIiwiY2xvc2luZyIsImNyZWF0ZWQiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwiY2FsbGJhY2siLCJtYW5hZ2VyIiwiZ2V0UHJvcGVydGllcyIsImNsZWFuVXAiLCJWaWV3Il0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2FjdGlvbi1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2hvb2tzL3VzZS1pbnB1dC1mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvYWdlbnRzLWlucHV0LnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvZGV2aWNlcy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvaWNvbnMudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL3N0YXR1cy50c3giLCIvdHMvdmlld3MvdXNlLW1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL3dpZGdldC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBR0EsSUFBQUcsU0FBQSxHQUFBSCxPQUFBO1VBS087VUFBWSxNQUFPSSxZQUFhLFNBQVFMLE1BQUEsQ0FBQU0sYUFBcUI7WUFHbkUsQ0FBQUMsTUFBTztZQUNQLENBQUFDLFFBQVM7WUFFVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLE9BQVEsR0FBRztjQUNWQyxHQUFHLEVBQUVSLE1BQUEsQ0FB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