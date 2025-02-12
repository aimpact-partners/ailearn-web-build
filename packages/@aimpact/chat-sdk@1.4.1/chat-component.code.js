System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/reactive@0.0.1/model", "@aimpact/chat-sdk@1.4.1/voice", "@aimpact/chat-sdk@1.4.1/wrapper", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/agents-api@0.4.0/realtime/client", "@aimpact/agents-api@0.4.0/realtime/client/conversation", "@aimpact/agents-api@0.4.0/realtime/audio/recorder", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.4.1/messages", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/chat-sdk@1.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/agents-api@0.4.0/realtime/widgets/state"], function (_export, _context3) {
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
    }, function (_aimpactAgentsApi040RealtimeClient) {
      dependency_8 = _aimpactAgentsApi040RealtimeClient;
    }, function (_aimpactAgentsApi040RealtimeClientConversation) {
      dependency_9 = _aimpactAgentsApi040RealtimeClientConversation;
    }, function (_aimpactAgentsApi040RealtimeAudioRecorder) {
      dependency_10 = _aimpactAgentsApi040RealtimeAudioRecorder;
    }, function (_beyondJsKernel019Core) {
      dependency_11 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
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
    }, function (_aimpactAgentsApi040RealtimeWidgetsState) {
      dependency_22 = _aimpactAgentsApi040RealtimeWidgetsState;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 1412773483,
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
            constructor(parent) {
              super({});
              this.#recorder = new _recorder.Recorder();
              this.#parent = parent;
              this.reactiveProps(['autoplay']);
              this.#currentPlayer = new this.#players.web({
                language: _wrapper.AppWrapper.language,
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
        hash: 238590375,
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
            #audio = new _audio.AudioManager(this);
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
            constructor(id, realtime = false) {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#id = id;
              this.reactiveProps(['waitingResponse', 'autoplay']);
              this.autoplay = true;
              this.#realtime = new _realtime.RealtimeStore(realtime);
              this.#realtime.on('change', this.triggerEvent);
              this.load(this.#id);
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
              const language = chat.language?.default ?? _wrapper.AppWrapper.language;
              this.audioManager.player.set({
                language
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
        hash: 3557049989,
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
              console.log('client.update... send: conversation and firebaseToken');
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
        hash: 3889614998,
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
              console.log('getSpeechRecognition');
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
                console.log('stream', stream);
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
                console.log('track stopped', track.kind, 'aja');
              }); //stop each one
              // Close the AudioContext if it exists
              if (this.#audioContext) {
                this.#audioContext.close();
                const microphone = this.#audioContext.createMediaStreamSource(this.#stream);
                microphone.disconnect;
                this.#audioContext.close().then(() => {
                  console.log('AudioContext closed');
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
        hash: 2616197478,
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
            }, []);
            (0, _hooks.useBinder)([store.chat], onNewMessage, 'new.message');
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
        hash: 3195555222,
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
            empty,
            player,
            ...props
          }) {
            const [scrollPosition, setScrollPosition] = _react.default.useState('top');
            const [showRealtime, setShowRealtime] = _react.default.useState(false);
            const {
              ready,
              store
            } = (0, _useManager.useManager)(props.id, props.realtime);
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
        hash: 88681912,
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
        hash: 684652056,
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
        hash: 2698340053,
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
              setShowRealtime
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
            }, _react.default.createElement(_icons.IconButton, {
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
        hash: 1528174594,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              icon: "mic",
              fetching: fetching,
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
        hash: 2752701704,
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
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("span", {
              className: "intro__modal-text p2"
            }, texts.permissions.intro), _react.default.createElement("h3", null, subtitle)), _react.default.createElement(_icons.Icon, {
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
        hash: 3778749194,
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
                console.log('audio', audio);
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
        hash: 2178661763,
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
              globalThis.setTimeout(() => textAreaRef.current.focus(), 0);
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
        hash: 2626658548,
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
        hash: 2989156384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useManager = useManager;
          var _react = require("react");
          var _store = require("../store");
          function useManager(id, realtime = true) {
            const [ready, setReady] = _react.default.useState(false);
            const [store, setStore] = _react.default.useState({});
            const [state, setState] = _react.default.useState({});
            const callback = () => {
              const manager = new _store.StoreManager(id, realtime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIkVYVEVOU0lPTlMiLCJtZXNzYWdlcyIsIml0ZW1zIiwiY2F0ZWdvcnkiLCJjaGF0IiwibW9kZWwiLCJjaGF0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwicHJvY2Vzc1RyYW5zY3JpcHRpb24iLCJwcm9jY2Vzc1RyYW5zY3JpcHRpb24iLCJzZWxlY3RlZE1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInJlYWR5IiwicmVhbHRpbWUiLCJhdXRvcGxheSIsIlJlYWx0aW1lU3RvcmUiLCJsb2FkIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJmZXRjaGluZyIsIkNoYXQiLCJnbG9iYWxUaGlzIiwibG9hZEFsbCIsImNoYXRJZCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJkZWZhdWx0Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGV2aWNlU2VsZWN0ZWQiLCJkZXZpY2UiLCJmaW5kIiwibG9nIiwidG9rZW4iLCJmaXJlYmFzZVRva2VuIiwidXBkYXRlIiwib25taWMiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJvZmYiLCJjYWxsIiwic3RhdHVzIiwiY29ubmVjdCIsImNsb3NlIiwicmVjb3JkIiwiaW5pdGlhbGlzZWQiLCJzb3VyY2UiLCJzdHJlYW0iLCJzdGFydFRpbWUiLCJpbml0UHJvbWlzZSIsInN0b3BQcm9taXNlIiwiYXVkaW9Db250ZXh0IiwicmVjb3JkaW5nUHJvbWlzZSIsIm1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJyZWNvcmRpbmciLCJ2YWxpZCIsImFuYWx5c2VyIiwic3BlZWNoUmVjb2duaXRpb24iLCJ0cmFuc2NyaXB0aW9uIiwicHJvbWlzZVNwZWVjaCIsInBlcm1pc3Npb25zIiwicGVybWlzc2lvbk9ic2VydmVyIiwicGVybWlzc2lvblN0YXRlIiwiaGFzUGVybWlzc2lvbnMiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJxdWVyeSIsInN0YXRlIiwib25jaGFuZ2UiLCJvbkNoYW5nZVN0YXR1cyIsImJpbmQiLCIjb25DaGFuZ2VTdGF0dXMiLCJnZXRTcGVlY2hSZWNvZ25pdGlvbiIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uIiwibGFuZyIsImNvbnRpbnVvdXMiLCJpbnRlcmltUmVzdWx0cyIsIlBlbmRpbmdQcm9taXNlIiwib25yZXN1bHQiLCJldmVudCIsImludGVyaW1UcmFuc2NyaXB0IiwiZmluYWxUcmFuc2NyaXB0IiwiaSIsInJlc3VsdEluZGV4IiwicmVzdWx0cyIsImxlbmd0aCIsImlzRmluYWwiLCJ0cmFuc2NyaXB0IiwicmVzb2x2ZSIsIm9uZXJyb3IiLCJzdGFydCIsIm9uRGF0YUF2YWlsYWJsZSIsImRhdGEiLCJzaXplIiwicHVzaCIsInN0YXJ0UmVjb3JkaW5nIiwiI3N0YXJ0UmVjb3JkaW5nIiwic3BlY3MiLCJNZWRpYVJlY29yZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRpYWxpc2UiLCJ0aGVuIiwiY2F0Y2giLCJyZWplY3QiLCJmaW5hbGx5Iiwib25TdHJlYW0iLCJvbkVycm9yIiwic3RvcFN0cmVhbSIsImtpbmQiLCJtaWNyb3Bob25lIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJkaXNjb25uZWN0IiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJhdHRyaWJ1dGVzIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNscyIsImhhcyIsImdldCIsImNsc0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJfbWVzc2FnZXMiLCJyZWFkZXIiLCJ1c2VTdGF0ZSIsInN5c3RlbUljb24iLCJlbXB0eSIsInNldE1lc3NhZ2VzIiwib25OZXdNZXNzYWdlIiwiY2xzQ29udGVudCIsIkNvbnRyb2wiLCJGcmFnbWVudCIsIk1lc3NhZ2VzIiwiX2NvbXBvbmVudHMiLCJDaGF0U2tlbGV0b24iLCJTcGlubmVyIiwiYWN0aXZlIiwidXNlRXh0ZW5zaW9uIiwic2V0UmVhZHkiLCJ3ZWJDb21wb25lbnROYW1lIiwiY29udHJvbCIsIm9uUmVhZHkiLCJfdXNlTWFuYWdlciIsIl9jb250YWluZXIiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJza2VsZXRvbiIsInByb3BzIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJzaG93UmVhbHRpbWUiLCJzZXRTaG93UmVhbHRpbWUiLCJ1c2VNYW5hZ2VyIiwib2JqIiwiU2tlbGV0b25Db250cm9sIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDaGF0Q29udGV4dCIsIlByb3ZpZGVyIiwiUmVhbHRpbWVQYW5lbCIsImlzVmlzaWJsZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJBZ2VudHNDaGF0UGFuZWwiLCJDaGF0Tm90Rm91bmQiLCJfcmVjb3JkaW5nIiwiSW5wdXRBY3Rpb25CdXR0b24iLCJidXR0b25Jc0Rpc2FibGVkIiwib25TdWJtaXQiLCJ0ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiQXBwSWNvbkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Rm9ybSIsInNldFJlY29yZGluZyIsInNldEZldGNoaW5nIiwic2V0VGV4dCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlU2VuZCIsIl9mb3JtIiwiX3RleHRJbnB1dCIsIl9hY3Rpb25CdXR0b24iLCJfY29udGV4dDIiLCJfdXNlSW5wdXRGb3JtIiwiQWdlbnRzQ2hhdElucHV0IiwiaXNXYWl0aW5nIiwiYXV0b1RyYW5zY3JpYmUiLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsIndhaXRpbmdSZXNwb25zZSIsImlzRmV0Y2hpbmciLCJpc0Rpc2FibGVkIiwiYXR0cnMiLCJjb250YWluZXJBdHRycyIsImNvbnRyb2xBdHRycyIsInJlcGxhY2VBbGwiLCJ0cmltIiwib25DbGlja1NwZWVjaCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJfbW9kYWwiLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJBbGVydE1vZGFsIiwiY2VudGVyZWQiLCJJY29uIiwiX3BsYXllciIsIl9lcnJvck1vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2V0RXJyb3IiLCJzZXRIYXNQZXJtaXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwic2V0SXRlbSIsInBsYXlBY3Rpb24iLCJvbkNsb3NlRXJyb3IiLCJQbGF5ZXIiLCJCdXR0b24iLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwic3VidGl0bGUiLCJpbnRybyIsIl90aW1lciIsIl9pY29uczIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNldERpc2FibGVkIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJ0ZXh0QXJlYVJlZiIsInRhcmdldCIsInN0eWxlIiwiaGVpZ2h0IiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsInJvd3MiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsIk1hdGgiLCJmbG9vciIsIl9mcmFtZXJNb3Rpb24iLCJfaW1hZ2UiLCJfc3RhdHVzIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJjYWxsU3RhdHVzIiwic3BlYWtlckljb24iLCJlcnJvcnMiLCJvbk1pY0NsaWNrIiwiaGFuZ3VwIiwibWljSWNvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJJbWFnZSIsInNyYyIsIlJlYWx0aW1lU3RhdHVzIiwiX3N0YXRlIiwiU2VsZWN0RGV2aWNlIiwiU3RhdGUiLCJkZWZpbmUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJzZWxlY3QiLCJleGMiLCJodG1sRm9yIiwibWFwIiwibGFiZWwiLCJQaG9uZUljb24iLCJpc09mZiIsInZpZXdCb3giLCJ3aWR0aCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIk1pY0ljb24iLCJpc011dGVkIiwic3Ryb2tlTGluZWNhcCIsIlNwZWFrZXJJY29uIiwicG9pbnRzIiwiZ2V0U3RhdHVzTWVzc2FnZSIsImNsb3NlZCIsImNvbm5lY3RpbmciLCJvcGVuIiwiY2xvc2luZyIsImNyZWF0ZWQiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwiY2FsbGJhY2siLCJtYW5hZ2VyIiwiZ2V0UHJvcGVydGllcyIsImNsZWFuVXAiLCJWaWV3Il0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2FjdGlvbi1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2hvb2tzL3VzZS1pbnB1dC1mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvYWdlbnRzLWlucHV0LnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvZGV2aWNlcy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvaWNvbnMudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL3N0YXR1cy50c3giLCIvdHMvdmlld3MvdXNlLW1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL3dpZGdldC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFHQSxJQUFBRyxTQUFBLEdBQUFILE9BQUE7VUFLTztVQUFZLE1BQU9JLFlBQWEsU0FBUUwsTUFBQSxDQUFBTSxhQUFxQjtZQUduRSxDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsUUFBUztZQUVULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQUMsT0FBUSxHQUFHO2NBQ1ZDLEdBQUcsRUFBRVIsTUFBQSxDQUFBUyxLQUFLO2NBQ1ZDLEdBQUcsRUFBRVYsTUFBQSxDQUFBVyxRQUFRLENBQUM7YUFDZDtZQUVELENBQUFDLE1BQU8s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