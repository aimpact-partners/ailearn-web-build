System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/reactive@0.0.1/model", "@aimpact/chat-sdk@1.4.1/voice", "@aimpact/chat-sdk@1.4.1/wrapper", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/agents-api@0.4.1/realtime/client", "@aimpact/agents-api@0.4.1/realtime/client/conversation", "@aimpact/agents-api@0.4.1/realtime/audio/recorder", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/chat-sdk@1.4.1/messages", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/chat-sdk@1.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/agents-api@0.4.1/realtime/widgets/state"], function (_export, _context3) {
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
        hash: 155798557,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@aimpact/reactive/model");
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
              if (this.#initialised) return;
              try {
                this.#initPromise = new _core.PendingPromise();
                // Obtener permisos y stream de audio
                const stream = await navigator.mediaDevices.getUserMedia({
                  audio: true
                });
                this.#stream = stream;
                // Asegurar que el formato es compatible con Safari
                const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4';
                this.#mediaRecorder = new MediaRecorder(this.#stream, {
                  mimeType
                });
                // Enlazar evento de captura de datos antes de iniciar la grabación
                this.#mediaRecorder.addEventListener('dataavailable', event => {
                  if (event.data.size > 0) {
                    this.#chunks.push(event.data);
                  }
                });
                this.#mediaRecorder.addEventListener('stop', () => {
                  this.#audio = new Blob(this.#chunks, {
                    type: mimeType
                  });
                  console.log(2, this.#audio, this.#audio.size);
                  this.#stopPromise?.resolve(this.#audio);
                  this.#recording = false;
                  this.#chunks = [];
                  this.trigger('change');
                });
                this.#initialised = true;
                this.#initPromise.resolve();
              } catch (error) {
                this.#error = error.message;
                this.#initPromise.reject();
              }
            }
            async record() {
              if (!this.#initialised) {
                await this.init();
              }
              if (this.#recording) {
                throw new Error('Wait for recorder to stop before starting again.');
              }
              this.#recordingPromise = new _core.PendingPromise();
              this.#recording = true;
              this.trigger('change');
              // Safari requiere un intervalo de 1000ms
              const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
              setTimeout(() => {
                this.#mediaRecorder.start(isSafari ? 1000 : undefined);
                this.#recordingPromise.resolve();
              }, 10);
              return this.#recordingPromise;
            }
            async stop() {
              if (!this.#recording) {
                throw new Error('Recorder is not currently recording.');
              }
              this.#stopPromise = new _core.PendingPromise();
              // Detener la grabación
              this.#mediaRecorder.stop();
              // Liberar la transmisión de audio
              this.#stream.getTracks().forEach(track => track.stop());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIkVYVEVOU0lPTlMiLCJtZXNzYWdlcyIsIml0ZW1zIiwiY2F0ZWdvcnkiLCJjaGF0IiwibW9kZWwiLCJjaGF0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwicHJvY2Vzc1RyYW5zY3JpcHRpb24iLCJwcm9jY2Vzc1RyYW5zY3JpcHRpb24iLCJzZWxlY3RlZE1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInJlYWR5IiwicmVhbHRpbWUiLCJvbkxpc3RlbkNoYXQiLCJhdXRvcGxheSIsIlJlYWx0aW1lU3RvcmUiLCJsb2FkIiwicHJvY2Vzc01vZGVsIiwiY2hhdElkIiwiY3VycmVudENoYXQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwiZmV0Y2hpbmciLCJjb25zb2xlIiwid2FybiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImxvZ2dlZCIsIkNoYXQiLCJnbG9iYWxUaGlzIiwibG9hZEFsbCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic3RyZWFtIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInJlY29yZGluZyIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJyZWNvcmRpbmdQcm9taXNlIiwiaXNTYWZhcmkiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGFzUGVybWlzc2lvbnMiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJQZW5kaW5nUHJvbWlzZSIsIm1pbWVUeXBlIiwiTWVkaWFSZWNvcmRlciIsImlzVHlwZVN1cHBvcnRlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJzaXplIiwicHVzaCIsIkJsb2IiLCJ0eXBlIiwibG9nIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzdGFydCIsIl9yZWFjdCIsIl9pY29ucyIsIl9ob29rcyIsIl9jb250ZXh0IiwiQmFja0Fycm93Iiwic3RvcmUiLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwiYXR0cmlidXRlcyIsInNjcm9sbFBvc2l0aW9uIiwidXNlQ2hhdENvbnRleHQiLCJyZWYiLCJ1c2VCaW5kZXIiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNscyIsImhhcyIsImdldCIsImNsc0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJfbWVzc2FnZXMiLCJyZWFkZXIiLCJ1c2VTdGF0ZSIsInN5c3RlbUljb24iLCJlbXB0eSIsInNldE1lc3NhZ2VzIiwibGVuZ3RoIiwidXBkYXRlU2Nyb2xsIiwic2V0VXBkYXRlU2Nyb2xsIiwibm93Iiwib25OZXdNZXNzYWdlIiwiY2xzQ29udGVudCIsIkNvbnRyb2wiLCJGcmFnbWVudCIsIk1lc3NhZ2VzIiwiX2NvbXBvbmVudHMiLCJDaGF0U2tlbGV0b24iLCJTcGlubmVyIiwiYWN0aXZlIiwidXNlRXh0ZW5zaW9uIiwic2V0UmVhZHkiLCJ3ZWJDb21wb25lbnROYW1lIiwiY29udHJvbCIsIm9uUmVhZHkiLCJfdXNlTWFuYWdlciIsIl9jb250YWluZXIiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJza2VsZXRvbiIsInByb3BzIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJzaG93UmVhbHRpbWUiLCJzZXRTaG93UmVhbHRpbWUiLCJ1c2VNYW5hZ2VyIiwib2JqIiwiU2tlbGV0b25Db250cm9sIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDaGF0Q29udGV4dCIsIlByb3ZpZGVyIiwiUmVhbHRpbWVQYW5lbCIsImlzVmlzaWJsZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJBZ2VudHNDaGF0UGFuZWwiLCJDaGF0Tm90Rm91bmQiLCJfcmVjb3JkaW5nIiwiSW5wdXRBY3Rpb25CdXR0b24iLCJidXR0b25Jc0Rpc2FibGVkIiwib25TdWJtaXQiLCJ0ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiQXBwSWNvbkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Rm9ybSIsInNldFJlY29yZGluZyIsInNldEZldGNoaW5nIiwic2V0VGV4dCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlU2VuZCIsIl9mb3JtIiwiX3RleHRJbnB1dCIsIl9hY3Rpb25CdXR0b24iLCJfY29udGV4dDIiLCJfdXNlSW5wdXRGb3JtIiwiQWdlbnRzQ2hhdElucHV0IiwiaXNXYWl0aW5nIiwiYXV0b1RyYW5zY3JpYmUiLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsIndhaXRpbmdSZXNwb25zZSIsImlzRmV0Y2hpbmciLCJpc0Rpc2FibGVkIiwiYXR0cnMiLCJjb250YWluZXJBdHRycyIsImNvbnRyb2xBdHRycyIsInJlcGxhY2VBbGwiLCJ0cmltIiwib25DbGlja1NwZWVjaCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJfbW9kYWwiLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwZXJtaXNzaW9ucyIsIkFsZXJ0TW9kYWwiLCJjZW50ZXJlZCIsIkljb24iLCJfcGxheWVyIiwiX2Vycm9yTW9kYWwiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJzZXRFcnJvciIsInNldEhhc1Blcm1pc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJ0aGVuIiwic2V0SXRlbSIsImNhdGNoIiwicGxheUFjdGlvbiIsIm9uQ2xvc2VFcnJvciIsIlBsYXllciIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJzdWJ0aXRsZSIsImludHJvIiwiX3RpbWVyIiwiX2ljb25zMiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic2V0RGlzYWJsZWQiLCJjYW5jZWwiLCJ0cmFuc2NyaXB0aW9uIiwiVGltZXIiLCJhY3Rpb24iLCJCdXR0b24iLCJ0ZXh0QXJlYVJlZiIsInRhcmdldCIsInN0eWxlIiwiaGVpZ2h0IiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsInJvd3MiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsIk1hdGgiLCJmbG9vciIsIl9mcmFtZXJNb3Rpb24iLCJfaW1hZ2UiLCJfc3RhdHVzIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJ2YWxpZCIsImNhbGxTdGF0dXMiLCJzcGVha2VySWNvbiIsImVycm9ycyIsIm9uTWljQ2xpY2siLCJoYW5ndXAiLCJtaWNJY29uIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsIkltYWdlIiwic3JjIiwiUmVhbHRpbWVTdGF0dXMiLCJfc3RhdGUiLCJTZWxlY3REZXZpY2UiLCJzdGF0ZSIsIlN0YXRlIiwiZGVmaW5lIiwic2VsZWN0ZWQiLCJmZXRjaGVkIiwic2VsZWN0IiwiZXhjIiwib25jaGFuZ2UiLCJodG1sRm9yIiwibWFwIiwibGFiZWwiLCJQaG9uZUljb24iLCJpc09mZiIsInZpZXdCb3giLCJ3aWR0aCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIk1pY0ljb24iLCJpc011dGVkIiwic3Ryb2tlTGluZWNhcCIsIlNwZWFrZXJJY29uIiwicG9pbnRzIiwiZ2V0U3RhdHVzTWVzc2FnZSIsImNsb3NlZCIsImNvbm5lY3RpbmciLCJvcGVuIiwiY2xvc2luZyIsImNyZWF0ZWQiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwiY2FsbGJhY2siLCJtYW5hZ2VyIiwiZ2V0UHJvcGVydGllcyIsImNsZWFuVXAiLCJWaWV3Il0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2FjdGlvbi1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2hvb2tzL3VzZS1pbnB1dC1mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvYWdlbnRzLWlucHV0LnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvZGV2aWNlcy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvaWNvbnMudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL3N0YXR1cy50c3giLCIvdHMvdmlld3MvdXNlLW1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL3dpZGdldC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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