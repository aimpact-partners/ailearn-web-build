System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/reactive@2.0.5/model", "@aimpact/chat-sdk@1.5.4/voice", "@aimpact/chat-sdk@1.5.4/wrapper", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/kernel@0.1.12/texts", "@aimpact/agents-api@0.4.1/realtime/client", "@aimpact/agents-api@0.4.1/realtime/client/conversation", "@aimpact/agents-api@0.4.1/realtime/audio/recorder", "@beyond-js/kernel@0.1.12/core", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/chat-sdk@1.5.4/messages", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/chat-sdk@1.5.4/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/agents-api@0.4.1/realtime/widgets/state"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, AudioManager, Chat, AgentsChatContainer, ChatContext, useChatContext, useStore, AgentsChatPanel, AgentsChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, IAgentsContainerProps, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk154ComponentsIcons) {
      dependency_17 = _aimpactChatSdk154ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/rvd", "0.4.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/voice', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/agents-api/realtime/client', dependency_8], ['@aimpact/agents-api/realtime/client/conversation', dependency_9], ['@aimpact/agents-api/realtime/audio/recorder', dependency_10], ['@beyond-js/kernel/core', dependency_11], ['react', dependency_12], ['pragmate-ui/icons', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat-sdk/messages', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/chat-sdk/components/icons', dependency_17], ['pragmate-ui/form', dependency_18], ['pragmate-ui/modal', dependency_19], ['framer-motion', dependency_20], ['pragmate-ui/image', dependency_21], ['@aimpact/agents-api/realtime/widgets/state', dependency_22]]);
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
        hash: 2238988935,
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
        hash: 3403006025,
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
          function getChatContainerClass(reader) {
            return `chat-control__container${reader ? ' chat-control__container--reader' : ''}`;
          }
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
            const cls = getChatContainerClass(reader);
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
              const Control = empty ? empty : () => _react.default.createElement(_react.default.Fragment, null, "No hay contenido");
              return _react.default.createElement("div", {
                className: cls
              }, _react.default.isValidElement(Control) ? Control : _react.default.createElement(Control, null));
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
        hash: 2194338695,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIm1lc3NhZ2VzIiwiaXRlbXMiLCJsZW5ndGgiLCJjYXRlZ29yeSIsImNoYXQiLCJtb2RlbCIsImNoYXRzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0ZXh0c01vZGVsIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJwcm9jZXNzVHJhbnNjcmlwdGlvbiIsInByb2NjZXNzVHJhbnNjcmlwdGlvbiIsIm5vdEZvdW5kIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlIiwiaWQiLCJkaXNhYmxlZCIsInRyaWdnZXJFdmVudCIsImV4dGVuc2lvbnMiLCJNYXAiLCJyZWFkeSIsInJlYWx0aW1lIiwib25MaXN0ZW5DaGF0IiwiYXV0b3BsYXkiLCJSZWFsdGltZVN0b3JlIiwiZ2xvYmFsVGhpcyIsImNoYXRTdG9yZSIsImxvYWQiLCJwcm9jZXNzTW9kZWwiLCJjaGF0SWQiLCJjdXJyZW50Q2hhdCIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJkZSIsImZldGNoaW5nIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJDaGF0IiwibG9hZEFsbCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic3RyZWFtIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInJlY29yZGluZyIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJyZWNvcmRpbmdQcm9taXNlIiwiaXNTYWZhcmkiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGFzUGVybWlzc2lvbnMiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJhY3RpdmUiLCJoYXNQZXJtaXNzaW9uIiwibWltZVR5cGUiLCJNZWRpYVJlY29yZGVyIiwiaXNUeXBlU3VwcG9ydGVkIiwib25kYXRhYXZhaWxhYmxlIiwiZXZlbnQiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJQZW5kaW5nUHJvbWlzZSIsIm9uc3RvcCIsIkJsb2IiLCJ0eXBlIiwicmVzb2x2ZSIsInN0YXJ0IiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJhdHRyaWJ1dGVzIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJnZXQiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX21lc3NhZ2VzIiwiZ2V0Q2hhdENvbnRhaW5lckNsYXNzIiwicmVhZGVyIiwidXNlU3RhdGUiLCJzeXN0ZW1JY29uIiwiZW1wdHkiLCJzaG93QXZhdGFyIiwic2V0TWVzc2FnZXMiLCJ1cGRhdGVTY3JvbGwiLCJzZXRVcGRhdGVTY3JvbGwiLCJub3ciLCJvbk5ld01lc3NhZ2UiLCJjbHNDb250ZW50IiwiQ29udHJvbCIsIkZyYWdtZW50IiwiaXNWYWxpZEVsZW1lbnQiLCJNZXNzYWdlcyIsIl9jb21wb25lbnRzIiwiQ2hhdFNrZWxldG9uIiwiU3Bpbm5lciIsInVzZUV4dGVuc2lvbiIsInNldFJlYWR5Iiwid2ViQ29tcG9uZW50TmFtZSIsImNvbnRyb2wiLCJvblJlYWR5IiwiX3VzZU1hbmFnZXIiLCJfY29udGFpbmVyIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsImNoaWxkcmVuIiwic2tlbGV0b24iLCJTa2VsZXRvbkNvbnRyb2wiLCJyZXN0Iiwic2V0U2Nyb2xsUG9zaXRpb24iLCJzaG93UmVhbHRpbWUiLCJzZXRTaG93UmVhbHRpbWUiLCJ1c2VNYW5hZ2VyIiwic3RvcmVSZWFkeSIsImNvbnRleHRWYWx1ZSIsInRyYWNlIiwiQ2hhdENvbnRleHQiLCJQcm92aWRlciIsIlJlYWx0aW1lUGFuZWwiLCJpc1Zpc2libGUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0b3JlIiwiZXZlbnRzIiwiQXJyYXkiLCJpc0FycmF5Iiwic2V0VmVyc2lvbiIsImhhbmRsZXIiLCJ2IiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJBZ2VudHNDaGF0UGFuZWwiLCJDaGF0Tm90Rm91bmQiLCJfcmVjb3JkaW5nIiwiSW5wdXRBY3Rpb25CdXR0b24iLCJidXR0b25Jc0Rpc2FibGVkIiwib25TdWJtaXQiLCJ0ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiQXBwSWNvbkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Rm9ybSIsInNldFJlY29yZGluZyIsInNldEZldGNoaW5nIiwic2V0VGV4dCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlU2VuZCIsIl9mb3JtIiwiX3RleHRJbnB1dCIsIl9hY3Rpb25CdXR0b24iLCJfY29udGV4dDIiLCJfdXNlSW5wdXRGb3JtIiwiX3VzZVN0b3JlIiwiQWdlbnRzQ2hhdElucHV0IiwiaXNXYWl0aW5nIiwiYXV0b1RyYW5zY3JpYmUiLCJpc0ZldGNoaW5nIiwid2FpdGluZ1Jlc3BvbnNlIiwiaXNEaXNhYmxlZCIsImF0dHJzIiwiY29udGFpbmVyQXR0cnMiLCJjb250cm9sQXR0cnMiLCJyZXBsYWNlQWxsIiwidHJpbSIsIm9uQ2xpY2tTcGVlY2giLCJGb3JtIiwiVGV4dElucHV0IiwiX21vZGFsIiwiUGVybWlzc2lvbnNFcnJvck1vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGVybWlzc2lvbnMiLCJBbGVydE1vZGFsIiwiY2VudGVyZWQiLCJJY29uIiwiX3BsYXllciIsIl9lcnJvck1vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2V0RXJyb3IiLCJzZXRIYXNQZXJtaXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwidGhlbiIsInNldEl0ZW0iLCJjYXRjaCIsImxvZyIsInBsYXlBY3Rpb24iLCJvbkNsb3NlRXJyb3IiLCJQbGF5ZXIiLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwic3VidGl0bGUiLCJpbnRybyIsIl90aW1lciIsIl9pY29uczIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNldERpc2FibGVkIiwiY2FuY2VsIiwidHJhbnNjcmlwdGlvbiIsIlRpbWVyIiwiYWN0aW9uIiwiQnV0dG9uIiwidGV4dEFyZWFSZWYiLCJ0YXJnZXQiLCJzdHlsZSIsImhlaWdodCIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJyb3dzIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJNYXRoIiwiZmxvb3IiLCJfZnJhbWVyTW90aW9uIiwiX2ltYWdlIiwiX3N0YXR1cyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwidmFsaWQiLCJjYWxsU3RhdHVzIiwic3BlYWtlckljb24iLCJlcnJvcnMiLCJvbk1pY0NsaWNrIiwiaGFuZ3VwIiwibWljSWNvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJJbWFnZSIsInNyYyIsIlJlYWx0aW1lU3RhdHVzIiwiX3N0YXRlIiwiU2VsZWN0RGV2aWNlIiwic3RhdGUiLCJTdGF0ZSIsImRlZmluZSIsInNlbGVjdGVkIiwiZmV0Y2hlZCIsInNlbGVjdCIsImV4YyIsIm9uY2hhbmdlIiwiaHRtbEZvciIsIm1hcCIsImxhYmVsIiwiUGhvbmVJY29uIiwiaXNPZmYiLCJ2aWV3Qm94Iiwid2lkdGgiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJNaWNJY29uIiwiaXNNdXRlZCIsInN0cm9rZUxpbmVjYXAiLCJTcGVha2VySWNvbiIsInBvaW50cyIsImdldFN0YXR1c01lc3NhZ2UiLCJjbG9zZWQiLCJjb25uZWN0aW5nIiwib3BlbiIsImNsb3NpbmciLCJjcmVhdGVkIiwiX3N0b3JlIiwic2V0U3RvcmUiLCJjaGFuZ2VDb3VudCIsInNldENoYW5nZUNvdW50IiwiY2FsbGJhY2siLCJtYW5hZ2VyIiwicHJldkNvdW50IiwiY2xlYW5VcCIsIlZpZXciLCJwcm9wcyJdLCJzb3VyY2VzIjpbIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS9yZWFsdGltZS50cyIsIi90cy9zdG9yZS9yZWNvcmRlci50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9jaGF0L2JhY2stYXJyb3cudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvdmlld3MvY2hhdC91c2UtZXh0ZW5zaW9uLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2hvb2tzL3VzZS1zdG9yZS50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvYWN0aW9uLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaG9va3MvdXNlLWlucHV0LWZvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvZXJyb3ItbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL21vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC90ZXh0LWlucHV0LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi9hZ2VudHMtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9kZXZpY2VzLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9pY29ucy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvc3RhdHVzLnRzeCIsIi90cy92aWV3cy91c2UtbWFuYWdlci50c3giLCIvdHMvdmlld3Mvd2lkZ2V0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBR0EsSUFBQUcsU0FBQSxHQUFBSCxPQUFBO1VBS087VUFBWSxNQUFPSSxZQUFhLFNBQVFMLE1BQUEsQ0FBQU0sYUFBcUI7WUFHbkUsQ0FBQUMsTUFBTztZQUNQLENBQUFDLFFBQVM7WUFFVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLE9BQVEsR0FBRztjQUNWQyxHQUFHLEVBQUVSLE1BQUEsQ0FBQVMsS0FBSztjQUNWQyxHQUFHLEVBQUVWLE1BQUEsQ0FBQVcsUUFBUSxDQUFDO2FBQ2Q7WUFFRCxDQUFBQyxNQUFPLEdBQUcsS0FBSztZQUNmLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQyxhQUFjO1lBQzNCO1lBRUEsQ0FBQUEsYUFBYztZQUNkQyxZQUFZVCxNQUFNLEVBQUVVLFFBQVE7Y0FDM0IsS0FBSyxDQUFDLEVBQUUsQ0FBQztjQUNULElBQUksQ0FBQyxDQUFBVCxRQUFTLEdBQUcsSUFBSUosU0FBQSxDQUFBYyxRQUFRLEVBQUU7Y0FDL0IsSUFBSSxDQUFDLENBQUFYLE1B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