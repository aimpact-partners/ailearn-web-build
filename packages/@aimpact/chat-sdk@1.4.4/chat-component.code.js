System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/reactive@2.0.4/model", "@aimpact/chat-sdk@1.4.4/voice", "@aimpact/chat-sdk@1.4.4/wrapper", "@aimpact/chat-sdk@1.4.4/core", "@aimpact/chat-sdk@1.4.4/session", "@beyond-js/kernel@0.1.12/texts", "@aimpact/agents-api@0.4.1/realtime/client", "@aimpact/agents-api@0.4.1/realtime/client/conversation", "@aimpact/agents-api@0.4.1/realtime/audio/recorder", "@beyond-js/kernel@0.1.12/core", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/chat-sdk@1.4.4/messages", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/chat-sdk@1.4.4/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/agents-api@0.4.1/realtime/widgets/state"], function (_export, _context3) {
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
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReactive204Model) {
      dependency_2 = _beyondJsReactive204Model;
    }, function (_aimpactChatSdk144Voice) {
      dependency_3 = _aimpactChatSdk144Voice;
    }, function (_aimpactChatSdk144Wrapper) {
      dependency_4 = _aimpactChatSdk144Wrapper;
    }, function (_aimpactChatSdk144Core) {
      dependency_5 = _aimpactChatSdk144Core;
    }, function (_aimpactChatSdk144Session) {
      dependency_6 = _aimpactChatSdk144Session;
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
    }, function (_aimpactChatSdk144Messages) {
      dependency_15 = _aimpactChatSdk144Messages;
    }, function (_pragmateUi100Beta7Components) {
      dependency_16 = _pragmateUi100Beta7Components;
    }, function (_aimpactChatSdk144ComponentsIcons) {
      dependency_17 = _aimpactChatSdk144ComponentsIcons;
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
        const dependencies = new Map([["@beyond-js/reactive", "2.0.4"], ["@beyond-js/http-suite", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.4/chat-component",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/voice', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/agents-api/realtime/client', dependency_8], ['@aimpact/agents-api/realtime/client/conversation', dependency_9], ['@aimpact/agents-api/realtime/audio/recorder', dependency_10], ['@beyond-js/kernel/core', dependency_11], ['react', dependency_12], ['pragmate-ui/icons', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat-sdk/messages', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/chat-sdk/components/icons', dependency_17], ['pragmate-ui/form', dependency_18], ['pragmate-ui/modal', dependency_19], ['framer-motion', dependency_20], ['pragmate-ui/image', dependency_21], ['@aimpact/agents-api/realtime/widgets/state', dependency_22]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.4.4/chat-component.code');
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
        hash: 1647926629,
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
        hash: 1675255196,
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
        hash: 756874665,
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
              empty,
              showAvatar
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
              showAvatar: showAvatar,
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
        hash: 2373602469,
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
            showAvatar = false,
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
              showAvatar,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIkVYVEVOU0lPTlMiLCJtZXNzYWdlcyIsIml0ZW1zIiwiY2F0ZWdvcnkiLCJjaGF0IiwibW9kZWwiLCJjaGF0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwicHJvY2Vzc1RyYW5zY3JpcHRpb24iLCJwcm9jY2Vzc1RyYW5zY3JpcHRpb24iLCJzZWxlY3RlZE1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInJlYWR5IiwicmVhbHRpbWUiLCJvbkxpc3RlbkNoYXQiLCJhdXRvcGxheSIsIlJlYWx0aW1lU3RvcmUiLCJnbG9iYWxUaGlzIiwiY2hhdFN0b3JlIiwibG9hZCIsInByb2Nlc3NNb2RlbCIsImNoYXRJZCIsImN1cnJlbnRDaGF0IiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsImZldGNoaW5nIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJDaGF0IiwibG9hZEFsbCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic3RyZWFtIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInJlY29yZGluZyIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJyZWNvcmRpbmdQcm9taXNlIiwiaXNTYWZhcmkiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGFzUGVybWlzc2lvbnMiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJhY3RpdmUiLCJoYXNQZXJtaXNzaW9uIiwibWltZVR5cGUiLCJNZWRpYVJlY29yZGVyIiwiaXNUeXBlU3VwcG9ydGVkIiwib25kYXRhYXZhaWxhYmxlIiwiZXZlbnQiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJQZW5kaW5nUHJvbWlzZSIsIm9uc3RvcCIsIkJsb2IiLCJ0eXBlIiwicmVzb2x2ZSIsInN0YXJ0IiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJhdHRyaWJ1dGVzIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJnZXQiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX21lc3NhZ2VzIiwicmVhZGVyIiwidXNlU3RhdGUiLCJzeXN0ZW1JY29uIiwiZW1wdHkiLCJzaG93QXZhdGFyIiwic2V0TWVzc2FnZXMiLCJsZW5ndGgiLCJ1cGRhdGVTY3JvbGwiLCJzZXRVcGRhdGVTY3JvbGwiLCJub3ciLCJvbk5ld01lc3NhZ2UiLCJjbHNDb250ZW50IiwiQ29udHJvbCIsIkZyYWdtZW50IiwiTWVzc2FnZXMiLCJfY29tcG9uZW50cyIsIkNoYXRTa2VsZXRvbiIsIlNwaW5uZXIiLCJ1c2VFeHRlbnNpb24iLCJzZXRSZWFkeSIsIndlYkNvbXBvbmVudE5hbWUiLCJjb250cm9sIiwib25SZWFkeSIsIl91c2VNYW5hZ2VyIiwiX2NvbnRhaW5lciIsIkFnZW50c0NoYXRDb250YWluZXIiLCJjaGlsZHJlbiIsInNrZWxldG9uIiwicHJvcHMiLCJzZXRTY3JvbGxQb3NpdGlvbiIsInNob3dSZWFsdGltZSIsInNldFNob3dSZWFsdGltZSIsInVzZU1hbmFnZXIiLCJvYmoiLCJTa2VsZXRvbkNvbnRyb2wiLCJjb250ZXh0VmFsdWUiLCJ0cmFjZSIsIkNoYXRDb250ZXh0IiwiUHJvdmlkZXIiLCJSZWFsdGltZVBhbmVsIiwiaXNWaXNpYmxlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIkFnZW50c0NoYXRQYW5lbCIsIkNoYXROb3RGb3VuZCIsIl9yZWNvcmRpbmciLCJJbnB1dEFjdGlvbkJ1dHRvbiIsImJ1dHRvbklzRGlzYWJsZWQiLCJvblN1Ym1pdCIsInRleHQiLCJ1c2VJbnB1dENvbnRleHQiLCJBcHBJY29uQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRGb3JtIiwic2V0UmVjb3JkaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRUZXh0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVTZW5kIiwiX2Zvcm0iLCJfdGV4dElucHV0IiwiX2FjdGlvbkJ1dHRvbiIsIl9jb250ZXh0MiIsIl91c2VJbnB1dEZvcm0iLCJBZ2VudHNDaGF0SW5wdXQiLCJpc1dhaXRpbmciLCJhdXRvVHJhbnNjcmliZSIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwid2FpdGluZ1Jlc3BvbnNlIiwiaXNGZXRjaGluZyIsImlzRGlzYWJsZWQiLCJhdHRycyIsImNvbnRhaW5lckF0dHJzIiwiY29udHJvbEF0dHJzIiwicmVwbGFjZUFsbCIsInRyaW0iLCJvbkNsaWNrU3BlZWNoIiwiRm9ybSIsIlRleHRJbnB1dCIsIl9tb2RhbCIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBlcm1pc3Npb25zIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJsb2ciLCJwbGF5QWN0aW9uIiwib25DbG9zZUVycm9yIiwiUGxheWVyIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdGltZXIiLCJfaWNvbnMyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzZXREaXNhYmxlZCIsImNhbmNlbCIsInRyYW5zY3JpcHRpb24iLCJUaW1lciIsImFjdGlvbiIsIkJ1dHRvbiIsInRleHRBcmVhUmVmIiwidGFyZ2V0Iiwic3R5bGUiLCJoZWlnaHQiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwicm93cyIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiTWF0aCIsImZsb29yIiwiX2ZyYW1lck1vdGlvbiIsIl9pbWFnZSIsIl9zdGF0dXMiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInZhbGlkIiwiY2FsbFN0YXR1cyIsInNwZWFrZXJJY29uIiwiZXJyb3JzIiwib25NaWNDbGljayIsImhhbmd1cCIsIm1pY0ljb24iLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiSW1hZ2UiLCJzcmMiLCJSZWFsdGltZVN0YXR1cyIsIl9zdGF0ZSIsIlNlbGVjdERldmljZSIsInN0YXRlIiwiU3RhdGUiLCJkZWZpbmUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJzZWxlY3QiLCJleGMiLCJvbmNoYW5nZSIsImh0bWxGb3IiLCJtYXAiLCJsYWJlbCIsIlBob25lSWNvbiIsImlzT2ZmIiwidmlld0JveCIsIndpZHRoIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZCIsIngxIiwieTEiLCJ4MiIsInkyIiwiTWljSWNvbiIsImlzTXV0ZWQiLCJzdHJva2VMaW5lY2FwIiwiU3BlYWtlckljb24iLCJwb2ludHMiLCJnZXRTdGF0dXNNZXNzYWdlIiwiY2xvc2VkIiwiY29ubmVjdGluZyIsIm9wZW4iLCJjbG9zaW5nIiwiY3JlYXRlZCIsIl9zdG9yZSIsInNldFN0b3JlIiwic2V0U3RhdGUiLCJjYWxsYmFjayIsIm1hbmFnZXIiLCJnZXRQcm9wZXJ0aWVzIiwiY2xlYW5VcCIsIlZpZXciXSwic291cmNlcyI6WyIvbWVzc2FnZXMudHMiLCIvdHMvc3RvcmUvYXVkaW8udHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHMvc3RvcmUvcmVhbHRpbWUudHMiLCIvdHMvc3RvcmUvcmVjb3JkZXIudHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvY2hhdC9iYWNrLWFycm93LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvdXNlLWV4dGVuc2lvbi50c3giLCIvdHMvdmlld3MvY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvYWN0aW9uLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaG9va3MvdXNlLWlucHV0LWZvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvZXJyb3ItbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL21vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC90ZXh0LWlucHV0LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi9hZ2VudHMtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9kZXZpY2VzLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9pY29ucy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvc3RhdHVzLnRzeCIsIi90cy92aWV3cy91c2UtbWFuYWdlci50c3giLCIvdHMvdmlld3Mvd2lkZ2V0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGws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