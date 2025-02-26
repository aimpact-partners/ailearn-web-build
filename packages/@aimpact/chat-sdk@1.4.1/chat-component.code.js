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
        hash: 1272408992,
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
            constructor(id, language, realtime = false) {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#id = id;
              this.reactiveProps(['waitingResponse', 'autoplay', 'language']);
              this.autoplay = true;
              this.language = language;
              this.#audio = new _audio.AudioManager(this, language);
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
        hash: 634076361,
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
            player,
            ...props
          }) {
            const [scrollPosition, setScrollPosition] = _react.default.useState('top');
            const [showRealtime, setShowRealtime] = _react.default.useState(false);
            const {
              ready,
              store
            } = (0, _useManager.useManager)(props.id, language, props.realtime);
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
        hash: 2662386352,
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
        hash: 3472902039,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useManager = useManager;
          var _react = require("react");
          var _store = require("../store");
          function useManager(id, language = 'en', realtime = true) {
            const [ready, setReady] = _react.default.useState(false);
            const [store, setStore] = _react.default.useState({});
            const [state, setState] = _react.default.useState({});
            const callback = () => {
              const manager = new _store.StoreManager(id, language, realtime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIkVYVEVOU0lPTlMiLCJtZXNzYWdlcyIsIml0ZW1zIiwiY2F0ZWdvcnkiLCJjaGF0IiwibW9kZWwiLCJjaGF0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwicHJvY2Vzc1RyYW5zY3JpcHRpb24iLCJwcm9jY2Vzc1RyYW5zY3JpcHRpb24iLCJzZWxlY3RlZE1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInJlYWR5IiwicmVhbHRpbWUiLCJhdXRvcGxheSIsIlJlYWx0aW1lU3RvcmUiLCJsb2FkIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJmZXRjaGluZyIsIkNoYXQiLCJnbG9iYWxUaGlzIiwibG9hZEFsbCIsImNoYXRJZCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic291cmNlIiwic3RyZWFtIiwic3RhcnRUaW1lIiwiaW5pdFByb21pc2UiLCJzdG9wUHJvbWlzZSIsImF1ZGlvQ29udGV4dCIsInJlY29yZGluZ1Byb21pc2UiLCJtZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwicmVjb3JkaW5nIiwidmFsaWQiLCJhbmFseXNlciIsInNwZWVjaFJlY29nbml0aW9uIiwidHJhbnNjcmlwdGlvbiIsInByb21pc2VTcGVlY2giLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25PYnNlcnZlciIsInBlcm1pc3Npb25TdGF0ZSIsImhhc1Blcm1pc3Npb25zIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwicXVlcnkiLCJzdGF0ZSIsIm9uY2hhbmdlIiwib25DaGFuZ2VTdGF0dXMiLCJiaW5kIiwiI29uQ2hhbmdlU3RhdHVzIiwiZ2V0U3BlZWNoUmVjb2duaXRpb24iLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJQZW5kaW5nUHJvbWlzZSIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsImkiLCJyZXN1bHRJbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJpc0ZpbmFsIiwidHJhbnNjcmlwdCIsInJlc29sdmUiLCJvbmVycm9yIiwic3RhcnQiLCJvbkRhdGFBdmFpbGFibGUiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJzdGFydFJlY29yZGluZyIsIiNzdGFydFJlY29yZGluZyIsInNwZWNzIiwiTWVkaWFSZWNvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXNlIiwidGhlbiIsImNhdGNoIiwicmVqZWN0IiwiZmluYWxseSIsIm9uU3RyZWFtIiwib25FcnJvciIsInN0b3BTdHJlYW0iLCJtaWNyb3Bob25lIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJkaXNjb25uZWN0IiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJhdHRyaWJ1dGVzIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNscyIsImhhcyIsImdldCIsImNsc0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJfbWVzc2FnZXMiLCJyZWFkZXIiLCJ1c2VTdGF0ZSIsInN5c3RlbUljb24iLCJlbXB0eSIsInNldE1lc3NhZ2VzIiwidXBkYXRlU2Nyb2xsIiwic2V0VXBkYXRlU2Nyb2xsIiwibm93Iiwib25OZXdNZXNzYWdlIiwiY2xzQ29udGVudCIsIkNvbnRyb2wiLCJGcmFnbWVudCIsIk1lc3NhZ2VzIiwiX2NvbXBvbmVudHMiLCJDaGF0U2tlbGV0b24iLCJTcGlubmVyIiwiYWN0aXZlIiwidXNlRXh0ZW5zaW9uIiwic2V0UmVhZHkiLCJ3ZWJDb21wb25lbnROYW1lIiwiY29udHJvbCIsIm9uUmVhZHkiLCJfdXNlTWFuYWdlciIsIl9jb250YWluZXIiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJza2VsZXRvbiIsInByb3BzIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJzaG93UmVhbHRpbWUiLCJzZXRTaG93UmVhbHRpbWUiLCJ1c2VNYW5hZ2VyIiwib2JqIiwiU2tlbGV0b25Db250cm9sIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDaGF0Q29udGV4dCIsIlByb3ZpZGVyIiwiUmVhbHRpbWVQYW5lbCIsImlzVmlzaWJsZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJBZ2VudHNDaGF0UGFuZWwiLCJDaGF0Tm90Rm91bmQiLCJfcmVjb3JkaW5nIiwiSW5wdXRBY3Rpb25CdXR0b24iLCJidXR0b25Jc0Rpc2FibGVkIiwib25TdWJtaXQiLCJ0ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiQXBwSWNvbkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Rm9ybSIsInNldFJlY29yZGluZyIsInNldEZldGNoaW5nIiwic2V0VGV4dCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlU2VuZCIsIl9mb3JtIiwiX3RleHRJbnB1dCIsIl9hY3Rpb25CdXR0b24iLCJfY29udGV4dDIiLCJfdXNlSW5wdXRGb3JtIiwiQWdlbnRzQ2hhdElucHV0IiwiaXNXYWl0aW5nIiwiYXV0b1RyYW5zY3JpYmUiLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsIndhaXRpbmdSZXNwb25zZSIsImlzRmV0Y2hpbmciLCJpc0Rpc2FibGVkIiwiYXR0cnMiLCJjb250YWluZXJBdHRycyIsImNvbnRyb2xBdHRycyIsInJlcGxhY2VBbGwiLCJ0cmltIiwib25DbGlja1NwZWVjaCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJfbW9kYWwiLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJBbGVydE1vZGFsIiwiY2VudGVyZWQiLCJJY29uIiwiX3BsYXllciIsIl9lcnJvck1vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2V0RXJyb3IiLCJzZXRIYXNQZXJtaXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwic2V0SXRlbSIsImxvZyIsInBsYXlBY3Rpb24iLCJvbkNsb3NlRXJyb3IiLCJQbGF5ZXIiLCJCdXR0b24iLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwic3VidGl0bGUiLCJpbnRybyIsIl90aW1lciIsIl9pY29uczIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNldERpc2FibGVkIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJ0ZXh0QXJlYVJlZiIsInRhcmdldCIsInN0eWxlIiwiaGVpZ2h0IiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsInJvd3MiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJwcmV2VGltZSIsIk1hdGgiLCJmbG9vciIsIl9mcmFtZXJNb3Rpb24iLCJfaW1hZ2UiLCJfc3RhdHVzIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJjYWxsU3RhdHVzIiwic3BlYWtlckljb24iLCJlcnJvcnMiLCJvbk1pY0NsaWNrIiwiaGFuZ3VwIiwibWljSWNvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJJbWFnZSIsInNyYyIsIlJlYWx0aW1lU3RhdHVzIiwiX3N0YXRlIiwiU2VsZWN0RGV2aWNlIiwiU3RhdGUiLCJkZWZpbmUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJzZWxlY3QiLCJleGMiLCJodG1sRm9yIiwibWFwIiwibGFiZWwiLCJQaG9uZUljb24iLCJpc09mZiIsInZpZXdCb3giLCJ3aWR0aCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIk1pY0ljb24iLCJpc011dGVkIiwic3Ryb2tlTGluZWNhcCIsIlNwZWFrZXJJY29uIiwicG9pbnRzIiwiZ2V0U3RhdHVzTWVzc2FnZSIsImNsb3NlZCIsImNvbm5lY3RpbmciLCJvcGVuIiwiY2xvc2luZyIsImNyZWF0ZWQiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwiY2FsbGJhY2siLCJtYW5hZ2VyIiwiZ2V0UHJvcGVydGllcyIsImNsZWFuVXAiLCJWaWV3Il0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2FjdGlvbi1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2hvb2tzL3VzZS1pbnB1dC1mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvYWdlbnRzLWlucHV0LnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvZGV2aWNlcy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvaWNvbnMudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL3N0YXR1cy50c3giLCIvdHMvdmlld3MvdXNlLW1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL3dpZGdldC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFHQSxJQUFBRyxTQUFBLEdBQUFILE9BQUE7VUFLTztVQUFZLE1BQU9JLFlBQWEsU0FBUUwsTUFBQSxDQUFBTSxhQUFxQjtZQUduRSxDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsUUFBUztZQUVULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQUMsT0FBUSxHQUFHO2NBQ1ZDLEdBQUcsRUFBRVIsTUFBQSxDQUFBUyxLQUFLO2NBQ1ZDLEdBQUcsRUFBRVYsTUFBQSxDQUFBVyxRQUFRLENBQUM7YUFDZDtZQUVELENBQUFDLE1BQU8sR0FBRyxLQUFLO1lBQ2YsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFDLGFBQWM7WUFDM0I7WUFFQSxDQUFBQSxhQUFjO1lBQ2RDLFlBQVlULE1BQU0sRUFBRVUsUUFBUTtjQUMzQixLQUFLLENBQUMsRUFBRSxDQUFDO2NBQ1QsSUFBSSxDQUFDLENBQUFULFFBQVMsR0FBRyxJQUFJSixTQUFBLENBQUFjLFFBQVEsRUFBRTtjQUMvQixJQUFJLENBQUMsQ0FBQVgsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQ1ksYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7Y0FDaENGLFFBQVEsR0FBR0EsUUFBUSxJQUFJZCxRQUFBLENBQUFpQixVQUFVLENBQUNILFFBQVE7Y0FFMUMsSUFBSSxDQUFDLENBQUFGLGFBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBTixPQUFRLENBQUNDLEdBQUcsQ0FBQztnQkFDM0NPLFFBQVE7Z0JBQ1JJLElBQUksRUFBRWxCLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQ0U7ZUFDakIsQ0FBQztjQUVGbkIsUUFBQSxDQUFBaUIsVUFBVSxDQUFDRyxFQUFFLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQztZQUM1RDtZQUVBQSxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCLE1BQU07Z0JBQUVILElBQUk7Z0JBQUVKO2NBQVEsQ0FBRSxHQUFHZCxRQUFBLENBQUFpQixVQUFVO2NBQ3JDLElBQUksQ0FBQyxDQUFBTCxhQUFjLENBQUNVLEdBQUcsQ0FBQztnQkFBRUosSUFBSTtnQkFBRUo7Y0FBUSxDQUFFLENBQUM7WUFDNUMsQ0FBQztZQUVEUyxZQUFZQSxDQUFDQyxJQUFJO2NBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWxCLE9BQVEsQ0FBQ2tCLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLFVBQVVELElBQUksWUFBWSxDQUFDO2NBRXJFLElBQUksQ0FBQyxDQUFBYixNQUFPLEdBQUdhLElBQUk7Y0FDbkIsSUFBSSxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCOztVQUNBL0IsT0FBQSxDQUFBTyxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekRELElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE2QixLQUFBLEdBQUE3QixPQUFBO1VBRUEsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQThCLE1BQUEsR0FBQTlCLE9BQUE7VUFDQSxJQUFBK0IsUUFBQSxHQUFBL0IsT0FBQTtVQUNBLElBQUFnQyxNQUFBLEdBQUFoQyxPQUFBO1VBQ0EsSUFBQWlDLGVBQUEsR0FBQWpDLE9BQUE7VUFFQSxJQUFBa0MsU0FBQSxHQUFBbEMsT0FBQTtVQUVNLE1BQU9tQyxZQUFhLFNBQVFwQyxNQUFBLENBQUFNLGFBQXFCO1lBTXRELENBQUErQixVQUFXLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDNUIsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTLEVBQUVDLEtBQUs7WUFDN0I7WUFFQSxDQUFBWixJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxDQUFBYSxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUQsSUFBSztZQUNsQjtZQUNBLENBQUFFLEtBQU0sR0FBR3hDLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQ3VCLEtBQUs7WUFDekIsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ0osS0FBSyxJQUFJLEVBQUU7WUFDL0I7WUFFQSxDQUFBSyxLQUFNLEdBQStCLElBQUlYLE1BQUEsQ0FBQVksWUFBWSxDQUFDWCxlQUFBLENBQUFZLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBSixLQUFNO1lBQ25CO1lBQ0EsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRTdDLEtBQUs7WUFDMUI7WUFDQSxDQUFBa0QsS0FBTTtZQUNOLElBQUlDLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBRCxLQUFNO1lBQ25CO1lBRUEsQ0FBQUUsb0JBQXFCLEdBQUcsS0FBSztZQUM3QixJQUFJQyxxQkFBcUJBLENBQUE7Y0FDeEIsT0FBTyxJQUFJLENBQUMsQ0FBQUQsb0JBQXFCO1lBQ2xDO1lBRUEsQ0FBQUUsYUFBYyxHQUFHLE9BQU87WUFDeEIsSUFBSUEsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzNCO1lBQ0EsSUFBSUEsYUFBYUEsQ0FBQ1gsS0FBSztjQUN0QixJQUFJLENBQUMsQ0FBQVcsYUFBYyxHQUFHWCxLQUFLO1lBQzVCO1lBRUEsQ0FBQVksUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsSUFBSUEsUUFBUUEsQ0FBQ0EsUUFBUTtjQUNwQixJQUFJLENBQUMsQ0FBQUEsUUFBUyxHQUFHQSxRQUFRO1lBQzFCO1lBRUEsQ0FBQUMsY0FBZTtZQUNmLElBQUlBLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsY0FBZTtZQUM1QjtZQUVBLElBQUlBLGNBQWNBLENBQUNDLE9BQU87Y0FDekIsSUFBSUEsT0FBTyxFQUFFQyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUFGLGNBQWUsRUFBRUUsRUFBRSxFQUFFO2NBQzlDLElBQUksQ0FBQyxDQUFBRixjQUFlLEdBQUdDLE9BQU87WUFDL0I7WUFFQSxDQUFBRSxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxJQUFJQSxRQUFRQSxDQUFDQSxRQUFRO2NBQ3BCLElBQUksSUFBSSxDQUFDLENBQUFBLFFBQVMsS0FBS0EsUUFBUSxFQUFFO2NBQ2pDLElBQUksQ0FBQyxDQUFBQSxRQUFTLEdBQUdBLFFBQVE7Y0FDekIsSUFBSSxDQUFDQyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzVCO1lBRUEsQ0FBQUMsVUFBVyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUN2QixJQUFJRCxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUNBLENBQUFILEVBQUc7WUFFSCxJQUFJSyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQWxCLEtBQU0sQ0FBQ2tCLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQUMsUUFBUyxFQUFFRCxLQUFLO1lBQ2pFO1lBRUEsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EvQyxZQUFZeUMsRUFBRSxFQUFFeEMsUUFBUSxFQUFFOEMsUUFBUSxHQUFHLEtBQUs7Y0FDekMsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFuQixLQUFNLENBQUNyQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ29DLFlBQVksQ0FBQztjQUMzQyxJQUFJLENBQUMsQ0FBQUYsRUFBRyxHQUFHQSxFQUFFO2NBQ2IsSUFBSSxDQUFDdEMsYUFBYSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2NBQy9ELElBQUksQ0FBQzZDLFFBQVEsR0FBRyxJQUFJO2NBQ3BCLElBQUksQ0FBQy9DLFFBQVEsR0FBR0EsUUFBUTtjQUN4QixJQUFJLENBQUMsQ0FBQWdDLEtBQU0sR0FBRyxJQUFJbEIsTUFBQSxDQUFBMUIsWUFBWSxDQUFDLElBQUksRUFBRVksUUFBUSxDQUFDO2NBQzlDLElBQUksQ0FBQyxDQUFBOEMsUUFBUyxHQUFHLElBQUk1QixTQUFBLENBQUE4QixhQUFhLENBQUNGLFFBQVEsQ0FBQztjQUM1QyxJQUFJLENBQUMsQ0FBQUEsUUFBUyxDQUFDeEMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNvQyxZQUFZLENBQUM7Y0FDOUMsSUFBSSxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFULEVBQUcsQ0FBQztZQUNwQjtZQUVBUyxJQUFJLEdBQUcsTUFBT1QsRUFBVSxJQUFJO2NBQzNCLElBQUksQ0FBQ0EsRUFBRSxFQUFFO2dCQUNSVSxPQUFPLENBQUNDLElBQUksQ0FBQywyQ0FBMkMsQ0FBQztnQkFDekQsS0FBSyxDQUFDTixLQUFLLEdBQUcsSUFBSTtnQkFDbEIsSUFBSSxDQUFDUixRQUFRLEdBQUcsSUFBSTtnQkFDcEI7O2NBR0QsSUFBSSxDQUFDdEIsUUFBQSxDQUFBcUMsY0FBYyxDQUFDQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtnQkFDakN2QyxRQUFBLENBQUFxQyxjQUFjLENBQUM5QyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzJDLElBQUksQ0FBQztnQkFDckM7O2NBR0QsSUFBSSxDQUFDTSxRQUFRLEdBQUcsSUFBSTtjQUVwQixNQUFNL0IsSUFBSSxHQUFHLElBQUlYLEtBQUEsQ0FBQTJDLElBQUksQ0FBQztnQkFBRWhCO2NBQUUsQ0FBRSxDQUFDO2NBQzdCLElBQUksQ0FBQyxDQUFBTSxRQUFTO2NBQ2QsSUFBSSxDQUFDLENBQUF0QixJQUFLLEdBQUdBLElBQUk7Y0FDakJpQyxVQUFVLENBQUNqQyxJQUFJLEdBQUdBLElBQUk7Y0FDdEIsSUFBSSxDQUFDLENBQUFILFFBQVMsR0FBR0csSUFBSSxDQUFDSCxRQUFRO2NBQzlCLE1BQU1HLElBQUksQ0FBQ2tDLE9BQU8sQ0FBQztnQkFBRWxCO2NBQUUsQ0FBRSxDQUFDO2NBQzFCLElBQUksQ0FBQyxDQUFBTSxRQUFTLENBQUNhLE1BQU0sR0FBR25CLEVBQUU7Y0FDMUJpQixVQUFVLENBQUNqQyxJQUFJLEdBQUdBLElBQUk7Y0FDdEJ0QyxRQUFBLENBQUFpQixVQUFVLENBQUN5RCxXQUFXLEdBQUdwQyxJQUFJO2NBRTdCLElBQUksQ0FBQ0EsSUFBSSxDQUFDcUMsS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUNOLFFBQVEsR0FBRyxLQUFLO2dCQUNyQixLQUFLLENBQUNWLEtBQUssR0FBRyxJQUFJO2dCQUNsQixJQUFJLENBQUNSLFFBQVEsR0FBRyxJQUFJO2dCQUNwQjs7Y0FHRCxNQUFNckMsUUFBUSxHQUFHLElBQUksQ0FBQ0EsUUFBUSxJQUFJZCxRQUFBLENBQUFpQixVQUFVLENBQUNILFFBQVE7Y0FFckQsTUFBTThELFNBQVMsR0FBRztnQkFDakJDLEVBQUUsRUFBRSxPQUFPO2dCQUNYQyxFQUFFLEVBQUU7ZUFDSjtjQUNELElBQUksQ0FBQy9CLFlBQVksQ0FBQ3BDLE1BQU0sQ0FBQ1csR0FBRyxDQUFDO2dCQUFFUixRQUFRLEVBQUU4RCxTQUFTLENBQUM5RCxRQUFRO2NBQUMsQ0FBRSxDQUFDO2NBRS9EO2NBQ0E7Y0FFQSxJQUFJLENBQUN1RCxRQUFRLEdBQUcsS0FBSztjQUNyQixLQUFLLENBQUNWLEtBQUssR0FBRyxJQUFJO2NBQ2xCLElBQUksQ0FBQ1IsUUFBUSxHQUFHLEtBQUs7Y0FFckIsSUFBSSxDQUFDekIsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QixDQUFDO1lBRUQsTUFBTXFELFdBQVdBLENBQUNDLE9BQWU7Y0FDaEMsSUFBSTtnQkFDSEMsV0FBVyxDQUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN6QixJQUFJLENBQUMsQ0FBQTlCLGNBQWUsR0FBRytCLFNBQVM7Z0JBRWhDLElBQUksT0FBT0gsT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDRyxTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUNKLE9BQU8sQ0FBQyxFQUFFO2dCQUU1RSxJQUFJLENBQUNYLFFBQVEsR0FBRyxJQUFJO2dCQUNwQjtnQkFDQSxPQUFPLElBQUksQ0FBQyxDQUFBL0IsSUFBSyxDQUFDeUMsV0FBVyxDQUFDQyxPQUFPLENBQUM7ZUFDdEMsQ0FBQyxPQUFPSyxDQUFDLEVBQUU7Z0JBQ1g7Z0JBQ0FyQixPQUFPLENBQUNzQixLQUFLLENBQUNELENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNRSxTQUFTQSxDQUFDUCxPQUFhO2NBQzVCLElBQUk7Z0JBQ0hDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDekIsSUFBSSxDQUFDLENBQUE5QixjQUFlLEdBQUcrQixTQUFTO2dCQUNoQyxJQUFJLENBQUNkLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixPQUFPLElBQUksQ0FBQyxDQUFBL0IsSUFBSyxDQUFDaUQsU0FBUyxDQUFDUCxPQUFPLENBQUM7ZUFDcEMsQ0FBQyxPQUFPSyxDQUFDLEVBQUU7Z0JBQ1hyQixPQUFPLENBQUNzQixLQUFLLENBQUNELENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ2hCLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUNBbUIsVUFBVUEsQ0FBQzFDLEtBQVc7Y0FDckIsT0FBTyxJQUFJLENBQUMsQ0FBQVIsSUFBSyxDQUFDa0QsVUFBVSxDQUFDMUMsS0FBSyxDQUFDO1lBQ3BDO1lBRUEyQyxPQUFPQSxDQUFBO2NBQ04sSUFBSSxDQUFDLENBQUEzQyxLQUFNLENBQUNuQyxNQUFNLEVBQUUrRSxJQUFJLEVBQUU7WUFDM0I7WUFFQUMsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQ3RCLFFBQVEsR0FBRyxLQUFLO2NBQ3JCLEtBQUssQ0FBQ1YsS0FBSyxHQUFHLEtBQUs7WUFDcEI7O1VBQ0FoRSxPQUFBLENBQUFzQyxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeE5ELElBQUFwQyxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBOEYsT0FBQSxHQUFBOUYsT0FBQTtVQUNBLElBQUErRixhQUFBLEdBQUEvRixPQUFBO1VBQ0EsSUFBQUcsU0FBQSxHQUFBSCxPQUFBO1VBRUEsSUFBQStCLFFBQUEsR0FBQS9CLE9BQUE7VUFTTSxNQUFPZ0UsYUFBYyxTQUFRakUsTUFBQSxDQUFBTSxhQUE2QjtZQUMvRDJGLE9BQU8sR0FBRyxLQUFLO1lBTWYsQ0FBQUMsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBQ0EsQ0FBQUMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUEsQ0FBQUMsUUFBUyxHQUFHLENBQUM7WUFDYixDQUFBQyxRQUFTO1lBRVQsQ0FBQUMsWUFBYSxHQUFjLEVBQUU7WUFDN0IsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQXRGLFlBQVl1RixTQUFrQjtjQUM3QixLQUFLLENBQUM7Z0JBQUVDLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsVUFBVTtjQUFDLENBQUUsQ0FBQztjQUUzRSxJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDO2NBQ2pCLElBQUksQ0FBQ0YsU0FBUyxFQUFFO2dCQUNmLElBQUksQ0FBQ3pDLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUN5QyxTQUFTLEdBQUcsS0FBSzs7Y0FFdkIsSUFBSSxDQUFDLENBQUFMLFlBQWEsR0FBRyxJQUFJRixhQUFBLENBQUFVLFlBQVksQ0FBQyxLQUFLLENBQUM7Y0FDNUMsSUFBSSxDQUFDLENBQUFQLE1BQU8sR0FBRyxJQUFJSixPQUFBLENBQUFZLGFBQWEsQ0FBQztnQkFBRUMsR0FBRyxFQUFFO2NBQUksQ0FBRSxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBVCxNQUFPLENBQUNELFlBQVksQ0FBQ3pFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQXlFLFlBQWEsQ0FBQztjQUNqRCxJQUFJLENBQUNXLEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQ0MsSUFBSSxFQUFFO1lBQ1o7WUFFQSxNQUFNQSxJQUFJQSxDQUFBO2NBQ1QsSUFBSSxDQUFDLENBQUFYLE1BQU8sQ0FBQzVFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDd0YsVUFBVSxDQUFDO2NBQ2hELElBQUksQ0FBQyxDQUFBWixNQUFPLENBQUM1RSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDd0YsVUFBVSxDQUFDO2NBQ25ELElBQUksQ0FBQyxDQUFBWixNQUFPLENBQUM1RSxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQ3dGLFVBQVUsQ0FBQztjQUNqRCxJQUFJLENBQUMsQ0FBQVosTUFBTyxDQUFDNUUsRUFBRSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUN3RixVQUFVLENBQUM7Y0FFakQsSUFBSSxDQUFDLENBQUFaLE1BQU8sQ0FBQzVFLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUN5RixRQUFRLENBQUM7Y0FDakQsSUFBSSxDQUFDLENBQUFiLE1BQU8sQ0FBQzVFLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDMEYsT0FBTyxDQUFDO2NBQzlDLElBQUksQ0FBQyxDQUFBZCxNQUFPLENBQUM1RSxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQzJGLEdBQUcsQ0FBQztjQUUxQyxNQUFNOUcsU0FBQSxDQUFBK0csT0FBTyxDQUFDQyxPQUFPLEVBQUU7Y0FDdkIsSUFBSSxDQUFDLENBQUFkLFlBQWEsR0FBRyxDQUFDLEdBQUdsRyxTQUFBLENBQUErRyxPQUFPLENBQUNFLE1BQU0sRUFBRSxDQUFDO2NBQzFDLElBQUksQ0FBQ3ZELEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQ3dELFlBQVksQ0FBQ2xILFNBQUEsQ0FBQStHLE9BQU8sQ0FBQ0ksT0FBTyxFQUFFOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQztjQUM1QztZQUNEO1lBQ0E2RCxZQUFZQSxDQUFDN0QsRUFBVTtjQUN0QixJQUFJLENBQUMrRCxjQUFjLEdBQUcvRCxFQUFFO2NBQ3hCLE1BQU1nRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUFuQixZQUFhLENBQUNvQixJQUFJLENBQUNELE1BQU0sSUFBSUEsTUFBTSxDQUFDaEUsRUFBRSxLQUFLQSxFQUFFLENBQUM7Y0FDbEUsSUFBSSxDQUFDLENBQUEwQyxNQUFPLENBQUMzRixRQUFRLENBQUNpSCxNQUFNLEdBQUdBLE1BQU07WUFDdEM7WUFDQVQsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNyQixNQUFNVyxLQUFLLEdBQUcsTUFBTTNGLFFBQUEsQ0FBQXFDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDc0QsYUFBYTtjQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDaEQsTUFBTSxFQUFFO2dCQUNqQlQsT0FBTyxDQUFDc0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDO2dCQUNuQzs7Y0FFRCxJQUFJLENBQUMsQ0FBQVUsTUFBTyxDQUFDMEIsTUFBTSxDQUFDO2dCQUFFM0IsWUFBWSxFQUFFO2tCQUFFekMsRUFBRSxFQUFFLElBQUksQ0FBQ21CO2dCQUFNLENBQUU7Z0JBQUUrQztjQUFLLENBQUUsQ0FBQztjQUNqRSxJQUFJLENBQUNHLEtBQUssRUFBRTtjQUNaLElBQUksQ0FBQyxDQUFBekIsUUFBUyxHQUFHMEIsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDdEIsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDO1lBQzFELENBQUM7WUFFRFEsT0FBTyxHQUFHQSxDQUFBLEtBQUs7Y0FDZDlDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztjQUNyQixJQUFJLENBQUMsQ0FBQWlDLFFBQVMsR0FBRzBCLFdBQVcsQ0FBQyxNQUFNLElBQUksQ0FBQ3RCLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQztZQUMxRCxDQUFDO1lBQ0RTLEdBQUcsR0FBR0EsQ0FBQSxLQUFLO2NBQ1ZjLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTNCLFFBQVMsQ0FBQztjQUM3QixJQUFJLENBQUNJLFFBQVEsR0FBRyxDQUFDO1lBQ2xCLENBQUM7WUFDRFgsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQyxDQUFBSyxNQUFPLENBQUM4QixHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQ2xCLFVBQVUsQ0FBQztjQUNqRCxJQUFJLENBQUMsQ0FBQVosTUFBTyxDQUFDOEIsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQ2xCLFVBQVUsQ0FBQztjQUNwRCxJQUFJLENBQUMsQ0FBQVosTUFBTyxDQUFDOEIsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUNsQixVQUFVLENBQUM7Y0FDbEQsSUFBSSxDQUFDLENBQUFaLE1BQU8sQ0FBQzhCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDbEIsVUFBVSxDQUFDO1lBQ25EO1lBRUFBLFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ2pCLElBQUksQ0FBQyxDQUFBWCxRQUFTLEVBQUU7Y0FDaEIsSUFBSSxDQUFDdkUsT0FBTyxDQUFDLGFBQWEsQ0FBQztjQUMzQixJQUFJLENBQUNBLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkIsQ0FBQztZQUVEcUcsSUFBSSxHQUFHQSxDQUFBLEtBQUs7Y0FDWCxJQUFJLElBQUksQ0FBQyxDQUFBL0IsTUFBTyxDQUFDZ0MsTUFBTSxLQUFLLFFBQVEsRUFBRTtnQkFDckMsSUFBSSxDQUFDLENBQUFoQyxNQUFPLENBQUNpQyxPQUFPLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQ3JCLFVBQVUsRUFBRSxDQUFDLENBQUM7O2NBRXBCLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUFZLE1BQU8sQ0FBQ2dDLE1BQU0sQ0FBQyxFQUFFO2dCQUN0RCxJQUFJLENBQUMsQ0FBQWhDLE1BQU8sQ0FBQ2tDLEtBQUssRUFBRTtnQkFDcEIsSUFBSSxDQUFDdEIsVUFBVSxFQUFFLENBQUMsQ0FBQzs7WUFFckIsQ0FBQztZQUVEZSxLQUFLLEdBQUdBLENBQUEsS0FBSztjQUNaLElBQUksQ0FBQ2pCLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQ0EsS0FBSztjQUN4QjtjQUNBO2NBQ0EsSUFBSSxDQUFDQSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFWLE1BQU8sQ0FBQzNGLFFBQVEsQ0FBQ3FGLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBTSxNQUFPLENBQUMzRixRQUFRLENBQUM4SCxNQUFNLEVBQUU7WUFDM0UsQ0FBQzs7VUFDRHhJLE9BQUEsQ0FBQW1FLGFBQUEsR0FBQUEsYUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzSEQsSUFBQW5DLEtBQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFXLE1BRVppQixRQUFTLFNBQVFsQixNQUFBLENBQUFNLGFBQXVCO1lBQzdDLENBQUFpSSxXQUFZLEdBQUcsS0FBSztZQUNwQixDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsTUFBTztZQUNQLENBQUFDLFNBQVU7WUFDVixDQUFBQyxXQUFZO1lBQ1osQ0FBQUMsV0FBWTtZQUNaLENBQUFDLFlBQWE7WUFDYixDQUFBQyxnQkFBaUI7WUFDakIsQ0FBQUMsYUFBYztZQUVkLENBQUFDLE1BQU8sR0FBVyxFQUFFO1lBQ3BCLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBQ0EsQ0FBQWIsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUEsQ0FBQWMsU0FBVSxHQUFHLEtBQUs7WUFDbEIsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFFQSxDQUFBeEQsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSXlELEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUF6RCxLQUFNO1lBQ3BCO1lBRUEsQ0FBQXhDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFrRyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxDQUFBQyxpQkFBa0I7WUFDbEIsQ0FBQUMsYUFBYyxHQUFHLEVBQUU7WUFDbkIsSUFBSUEsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzNCO1lBRUEsQ0FBQUMsYUFBYztZQUVkLENBQUFDLFdBQVk7WUFDWixDQUFBQyxrQkFBbUI7WUFDbkIsQ0FBQUMsZUFBZ0I7WUFDaEJ6SSxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDOEYsSUFBSSxFQUFFO1lBQ1o7WUFDQSxNQUFNNEMsY0FBY0EsQ0FBQTtjQUNuQixJQUFJO2dCQUNILE1BQU1qQixNQUFNLEdBQUcsTUFBTWtCLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDQyxZQUFZLENBQUM7a0JBQUU1RyxLQUFLLEVBQUU7Z0JBQUksQ0FBRSxDQUFDO2dCQUN6RXdGLE1BQU0sQ0FBQ3FCLFNBQVMsRUFBRSxDQUFDQyxPQUFPLENBQUNDLEtBQUssSUFBSUEsS0FBSyxDQUFDbkUsSUFBSSxFQUFFLENBQUM7Z0JBQ2pELE9BQU8sSUFBSTtlQUNYLENBQUMsT0FBT0wsQ0FBQyxFQUFFO2dCQUNYLElBQUksQ0FBQyxDQUFBQyxLQUFNLEdBQUdELENBQUM7Z0JBQ2YsT0FBTyxLQUFLOztZQUVkO1lBQ0EsTUFBTXNCLElBQUlBLENBQUE7Y0FDVCxJQUFJO2dCQUNILE1BQU15QyxXQUFXLEdBQUcsTUFBTUksU0FBUyxDQUFDSixXQUFXLENBQUNVLEtBQUssQ0FBQztrQkFBRXRJLElBQUksRUFBRTtnQkFBWSxDQUFTLENBQUM7Z0JBQ3BGLElBQUksQ0FBQyxDQUFBNEgsV0FBWSxHQUFHQSxXQUFXLENBQUNXLEtBQUssS0FBSyxTQUFTO2dCQUNuRCxJQUFJLENBQUMsQ0FBQVYsa0JBQW1CLEdBQUdELFdBQVc7Z0JBQ3RDLElBQUksQ0FBQyxDQUFBRSxlQUFnQixHQUFHRixXQUFXLENBQUNXLEtBQUs7Z0JBQ3pDWCxXQUFXLENBQUNZLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQUMsY0FBZSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO2VBQ3RELENBQUMsT0FBTzdFLENBQUMsRUFBRTtnQkFDWDtnQkFDQTtjQUFBLENBQ0EsU0FBUztnQkFDVCxJQUFJLENBQUMxQixLQUFLLEdBQUcsSUFBSTs7WUFFbkI7WUFFQSxDQUFBc0csY0FBZUUsQ0FBQTtjQUNkLElBQUksQ0FBQyxDQUFBYixlQUFnQixHQUFHLElBQUksQ0FBQyxDQUFBRCxrQkFBbUIsQ0FBQ1UsS0FBSztjQUN0RCxJQUFJLENBQUNySSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUEwSSxvQkFBb0JBLENBQUE7Y0FDbkI7Y0FDQTtjQUNBLElBQUksQ0FBQyxDQUFBbkIsaUJBQWtCLEdBQUcsSUFBSW9CLHVCQUF1QixFQUFFO2NBQ3ZELElBQUksQ0FBQyxDQUFBcEIsaUJBQWtCLENBQUNxQixJQUFJLEdBQUcsT0FBTztjQUN0QyxJQUFJLENBQUMsQ0FBQXJCLGlCQUFrQixDQUFDc0IsVUFBVSxHQUFHLElBQUk7Y0FDekMsSUFBSSxDQUFDLENBQUF0QixpQkFBa0IsQ0FBQ3VCLGNBQWMsR0FBRyxJQUFJO2NBQzdDO2NBQ0EsSUFBSSxDQUFDLENBQUFyQixhQUFjLEdBQUcsSUFBSXhILEtBQUEsQ0FBQThJLGNBQWMsRUFBVTtjQUNsRCxJQUFJLENBQUMsQ0FBQXhCLGlCQUFrQixDQUFDeUIsUUFBUSxHQUFHQyxLQUFLLElBQUc7Z0JBQzFDLElBQUlDLGlCQUFpQixHQUFHLEVBQUU7Z0JBQzFCLElBQUlDLGVBQWUsR0FBRyxFQUFFO2dCQUN4QixLQUFLLElBQUlDLENBQUMsR0FBR0gsS0FBSyxDQUFDSSxXQUFXLEVBQUVELENBQUMsR0FBR0gsS0FBSyxDQUFDSyxPQUFPLENBQUNDLE1BQU0sRUFBRSxFQUFFSCxDQUFDLEVBQUU7a0JBQzlELElBQUlILEtBQUssQ0FBQ0ssT0FBTyxDQUFDRixDQUFDLENBQUMsQ0FBQ0ksT0FBTyxFQUFFO29CQUM3QkwsZUFBZSxJQUFJRixLQUFLLENBQUNLLE9BQU8sQ0FBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNLLFVBQVU7b0JBQ2pELElBQUksQ0FBQyxDQUFBakMsYUFBYyxHQUFHMkIsZUFBZTtvQkFDckMsSUFBSSxDQUFDLENBQUExQixhQUFjLENBQUNpQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUFsQyxhQUFjLENBQUM7bUJBQ2hELE1BQU07b0JBQ04wQixpQkFBaUIsSUFBSUQsS0FBSyxDQUFDSyxPQUFPLENBQUNGLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDSyxVQUFVOzs7Y0FHdEQsQ0FBQztjQUNELElBQUksQ0FBQyxDQUFBbEMsaUJBQWtCLENBQUNvQyxPQUFPLEdBQUdWLEtBQUssSUFBSTNHLE9BQU8sQ0FBQ3NCLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztjQUVsRixJQUFJLENBQUMsQ0FBQTJELGlCQUFrQixDQUFDcUMsS0FBSyxFQUFFO1lBQ2hDO1lBRUEsQ0FBQUMsZUFBZ0IsR0FBR1osS0FBSyxJQUFHO2NBQzFCLElBQUlBLEtBQUssQ0FBQ2EsSUFBSSxDQUFDQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2NBQzNCLElBQUksQ0FBQyxDQUFBNUMsTUFBTyxDQUFDNkMsSUFBSSxDQUFDZixLQUFLLENBQUNhLElBQUksQ0FBQztjQUU3QixJQUFJLENBQUM5SixPQUFPLENBQUMsZUFBZSxDQUFDO1lBQzlCLENBQUM7WUFFRCxDQUFBaUssY0FBZSxHQUFHQyxDQUFDdEQsTUFBTSxFQUFFdUQsS0FBSyxLQUFJO2NBQ25DLElBQUksQ0FBQyxDQUFBakQsYUFBYyxHQUFHLElBQUlrRCxhQUFhLENBQUN4RCxNQUFNLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUVyQjtjQUNBO2NBQ0E7Y0FDQTtjQUNBO2NBQ0E7Y0FFQTtjQUNBO2NBRUE7Y0FDQTtjQUNBO2NBRUEsSUFBSSxDQUFDLENBQUFNLGFBQWMsQ0FBQ21ELGdCQUFnQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQVIsZUFBZ0IsQ0FBQztZQUM3RSxDQUFDO1lBQ0QsTUFBTVMsVUFBVUEsQ0FBQ0gsS0FBSyxHQUFHLEVBQUU7Y0FDMUIsSUFBSSxJQUFJLENBQUMsQ0FBQXJELFdBQVksRUFBRSxPQUFPLE1BQU0sSUFBSSxDQUFDLENBQUFBLFdBQVk7Y0FDckQsSUFBSSxDQUFDLENBQUFBLFdBQVksR0FBRyxJQUFJN0csS0FBQSxDQUFBOEksY0FBYyxFQUFRO2NBRTlDbEcsVUFBVSxFQUFFaUYsU0FBUyxDQUFDQyxZQUFZLENBQ2hDQyxZQUFZLENBQUM7Z0JBQUU1RyxLQUFLLEVBQUU7Y0FBSSxDQUFFLENBQUMsQ0FDN0JtSixJQUFJLENBQUMzRCxNQUFNLElBQUc7Z0JBQ2QsSUFBSSxDQUFDLENBQUFxRCxjQUFlLENBQUNyRCxNQUFNLEVBQUV1RCxLQUFLLENBQUM7Y0FDcEMsQ0FBQyxDQUFDLENBQ0RLLEtBQUssQ0FBQzVHLEtBQUssSUFBRztnQkFDZCxJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHQSxLQUFLLENBQUNqQyxPQUFPO2dCQUMzQixJQUFJLENBQUMsQ0FBQW1GLFdBQVksQ0FBQzJELE1BQU0sRUFBRTtjQUMzQixDQUFDLENBQUMsQ0FDREMsT0FBTyxDQUFDLE1BQUs7Z0JBQ2IsSUFBSSxDQUFDLENBQUFoRSxXQUFZLEdBQUcsSUFBSTtnQkFDeEIsSUFBSSxDQUFDLENBQUFJLFdBQVksQ0FBQzRDLE9BQU8sRUFBRTtjQUM1QixDQUFDLENBQUM7Y0FFSCxPQUFPLElBQUksQ0FBQyxDQUFBNUMsV0FBWTtZQUN6QjtZQUNBTCxNQUFNQSxDQUFDMEQsS0FBSyxHQUFHO2NBQUU3QyxRQUFRLEVBQUU7WUFBSSxDQUFFO2NBQ2hDLElBQUk7Z0JBQ0gsSUFBSSxJQUFJLENBQUMsQ0FBQUwsZ0JBQWlCLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsZ0JBQWlCO2dCQUN6RCxJQUFJLENBQUMsQ0FBQUEsZ0JBQWlCLEdBQUcsSUFBSWhILEtBQUEsQ0FBQThJLGNBQWMsRUFBUTtnQkFDbkQsSUFBSSxJQUFJLENBQUMsQ0FBQTNCLFNBQVUsRUFBRTtrQkFDcEIsTUFBTSxJQUFJckgsS0FBSyxDQUFDLHlEQUF5RCxDQUFDOztnQkFFM0UsSUFBSSxDQUFDLENBQUF1RyxNQUFPLEdBQUcsU0FBUztnQkFDeEIsSUFBSSxDQUFDLENBQUFjLFNBQVUsR0FBRyxJQUFJO2dCQUN0QixJQUFJLENBQUNwSCxPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUV0QixNQUFNMkssUUFBUSxHQUFHLE1BQU0vRCxNQUFNLElBQUc7a0JBQy9CLElBQUksQ0FBQyxDQUFBcUQsY0FBZSxDQUFDckQsTUFBTSxFQUFFdUQsS0FBSyxDQUFDO2tCQUNuQyxJQUFJLENBQUMsQ0FBQWxELGdCQUFpQixDQUFDeUMsT0FBTyxFQUFFO2tCQUNoQyxJQUFJLENBQUMsQ0FBQWhELFdBQVksR0FBRyxJQUFJO2tCQUN4QixJQUFJLENBQUMsQ0FBQVEsYUFBYyxFQUFFMEMsS0FBSyxFQUFFO2dCQUM3QixDQUFDO2dCQUNELE1BQU1nQixPQUFPLEdBQUdoSCxLQUFLLElBQUc7a0JBQ3ZCdEIsT0FBTyxDQUFDc0IsS0FBSyxDQUFDQSxLQUFLLENBQUM7a0JBQ3BCLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdBLEtBQUssQ0FBQ2pDLE9BQU87a0JBQzNCLElBQUksQ0FBQyxDQUFBc0YsZ0JBQWlCLENBQUN3RCxNQUFNLEVBQUU7Z0JBQ2hDLENBQUM7Z0JBQ0Q1SCxVQUFVLEVBQUVpRixTQUFTLENBQUNDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2tCQUFFNUcsS0FBSyxFQUFFO2dCQUFJLENBQUUsQ0FBQyxDQUFDbUosSUFBSSxDQUFDSSxRQUFRLENBQUMsQ0FBQ0gsS0FBSyxDQUFDSSxPQUFPLENBQUM7Z0JBRTlGLE9BQU8sSUFBSSxDQUFDLENBQUEzRCxnQkFBaUI7ZUFDN0IsQ0FBQyxPQUFPdEQsQ0FBQyxFQUFFLEMsQ0FDWCxTQUFTLEM7WUFFWDtZQUNBa0gsVUFBVSxHQUFHQSxDQUFBLEtBQUs7Y0FDakI7Y0FFQSxJQUFJLENBQUMsQ0FBQTNELGFBQWMsQ0FBQ2xELElBQUksRUFBRTtjQUUxQixJQUFJLENBQUMsQ0FBQTRDLE1BQU8sQ0FDVnFCLFNBQVMsRUFBRSxDQUFDO2NBQUEsQ0FDWkMsT0FBTyxDQUFFQyxLQUFLLElBQWlDO2dCQUMvQ0EsS0FBSyxDQUFDbkUsSUFBSSxFQUFFO2dCQUNaO2NBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUVMO2NBQ0EsSUFBSSxJQUFJLENBQUMsQ0FBQWdELFlBQWEsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLENBQUFBLFlBQWEsQ0FBQ1IsS0FBSyxFQUFFO2dCQUMxQixNQUFNc0UsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFBOUQsWUFBYSxDQUFDK0QsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUFuRSxNQUFPLENBQUM7Z0JBQzNFa0UsVUFBVSxDQUFDRSxVQUFVO2dCQUNyQixJQUFJLENBQUMsQ0FBQWhFLFlBQWEsQ0FDaEJSLEtBQUssRUFBRSxDQUNQK0QsSUFBSSxDQUFDLE1BQUs7a0JBQ1YsSUFBSSxDQUFDLENBQUF2RCxZQUFhLEdBQUd2RCxTQUFTO2dCQUMvQixDQUFDLENBQUMsQ0FDRCtHLEtBQUssQ0FBQzVHLEtBQUssSUFBRztrQkFDZHRCLE9BQU8sQ0FBQ3NCLEtBQUssQ0FBQyw0QkFBNEIsRUFBRUEsS0FBSyxDQUFDO2dCQUNuRCxDQUFDLENBQUM7O2NBRUosSUFBSSxDQUFDLENBQUFnRCxNQUFPLEdBQUduRCxTQUFTO1lBQ3pCLENBQUM7WUFFRE8sSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWtELGFBQWMsRUFBRTtnQkFDekI1RSxPQUFPLENBQUNDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDakQ7O2NBRUQsSUFBSSxJQUFJLENBQUMsQ0FBQXdFLFdBQVksRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO2NBQy9DLElBQUksQ0FBQyxDQUFBQSxXQUFZLEdBQUcsSUFBSTlHLEtBQUEsQ0FBQThJLGNBQWMsRUFBTztjQUU3QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEzQixTQUFVLEVBQUUsTUFBTSxJQUFJckgsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO2NBQzVFLElBQUksQ0FBQyxDQUFBdUcsTUFBTyxHQUFHLFNBQVM7Y0FDeEIsTUFBTXRDLElBQUksR0FBR0EsQ0FBQSxLQUFLO2dCQUNqQixJQUFJLENBQUMsQ0FBQW1ELE1BQU8sR0FBRyxFQUFFO2dCQUNqQixJQUFJLENBQUMsQ0FBQUMsU0FBVSxHQUFHLEtBQUs7Z0JBRXZCLElBQUksQ0FBQyxDQUFBRixhQUFjLENBQUNtRCxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBVztrQkFDdkQsTUFBTWpKLEtBQUssR0FBRyxJQUFJNkosSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBOUQsTUFBTyxFQUFFO29CQUFFK0QsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBaEUsYUFBYyxDQUFDaUU7a0JBQVEsQ0FBRSxDQUFDO2tCQUU1RTtrQkFDQSxJQUFJLENBQUMsQ0FBQS9KLEtBQU0sR0FBR0EsS0FBSztrQkFFbkIsTUFBTWdLLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO29CQUNyQixJQUFJLENBQUMsQ0FBQXJFLFdBQVksQ0FBQzJDLE9BQU8sQ0FBQ3RJLEtBQUssQ0FBQztvQkFDaEMsSUFBSSxDQUFDLENBQUEyRixXQUFZLEdBQUd0RCxTQUFTO2tCQUM5QixDQUFDO2tCQUNELElBQUksSUFBSSxDQUFDLENBQUFnRSxhQUFjLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxDQUFBQSxhQUFjLENBQUM4QyxJQUFJLENBQUNhLFFBQVEsQ0FBQzttQkFDbEMsTUFBTTtvQkFDTixJQUFJLElBQUksQ0FBQyxDQUFBckUsV0FBWSxFQUFFO3NCQUN0QnFFLFFBQVEsRUFBRTs7O2tCQUlaLElBQUksSUFBSSxDQUFDLENBQUFuRSxnQkFBaUIsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLENBQUFBLGdCQUFpQixDQUFDeUMsT0FBTyxDQUFDdEksS0FBSyxDQUFDO29CQUNyQyxJQUFJLENBQUMsQ0FBQTZGLGdCQUFpQixHQUFHeEQsU0FBUzs7a0JBRW5DLElBQUksQ0FBQ29ILFVBQVUsRUFBRTtrQkFDakIsSUFBSSxDQUFDLENBQUEzRCxhQUFjLEdBQUd6RCxTQUFTO2tCQUMvQixJQUFJLENBQUMsQ0FBQW1ELE1BQU8sR0FBR25ELFNBQVM7a0JBQ3hCLElBQUksQ0FBQyxDQUFBcUQsV0FBWSxHQUFHckQsU0FBUztnQkFDOUIsQ0FBQyxDQUFDO2dCQUVGLElBQUksQ0FBQyxDQUFBeUQsYUFBYyxFQUFFbEQsSUFBSSxFQUFFO2dCQUMzQixJQUFJLENBQUMsQ0FBQXVELGlCQUFrQixFQUFFdkQsSUFBSSxFQUFFO2dCQUUvQixJQUFJLENBQUNoRSxPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ3ZCLENBQUM7Y0FFRCxJQUFJLENBQUMsQ0FBQTBHLFdBQVksR0FBRzFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQ3lDLE1BQU0sRUFBRSxDQUFDOEQsSUFBSSxDQUFDdkcsSUFBSSxDQUFDO2NBQ3JELE9BQU8sSUFBSSxDQUFDLENBQUErQyxXQUFZO1lBQ3pCOztVQUNBOUksT0FBQSxDQUFBb0IsUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7OztVQ3BSRDs7VUFFQXRCLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBbU4sTUFBQSxHQUFBak4sT0FBQTtVQUNBLElBQUFrTixNQUFBLEdBQUFsTixPQUFBO1VBQ0EsSUFBQW1OLE1BQUEsR0FBQW5OLE9BQUE7VUFDQSxJQUFBb04sUUFBQSxHQUFBcE4sT0FBQTtVQUVNLFNBQVVxTixTQUFTQSxDQUFDO1lBQUVDLEtBQUs7WUFBRUM7VUFBUyxDQUFFO1lBQzdDLE1BQU1DLElBQUksR0FBR1AsTUFBQSxDQUFBM0YsT0FBSyxDQUFDbUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUMvQixNQUFNO2NBQUVDLFVBQVU7Y0FBRUM7WUFBYyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUSxjQUFjLEdBQUU7WUFDdkQsTUFBTUMsR0FBRyxHQUFHWixNQUFBLENBQUEzRixPQUFLLENBQUNtRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUFOLE1BQUEsQ0FBQVcsU0FBUyxFQUNSLENBQUNSLEtBQUssQ0FBQyxFQUNQLE1BQ0M3SSxVQUFVLENBQUNzSixVQUFVLENBQUMsTUFBSztjQUMxQixNQUFNQyxTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTyxFQUFFQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsRUFBRUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO2NBRW5HLElBQUksQ0FBQ0gsU0FBUyxFQUFFO2NBQ2hCLE1BQU1JLGtCQUFrQixHQUFHSixTQUFTLENBQUNLLFlBQVksR0FBR0wsU0FBUyxDQUFDTSxZQUFZLEdBQUdOLFNBQVMsQ0FBQ08sU0FBUztjQUNoRyxJQUFJSCxrQkFBa0IsSUFBSSxHQUFHLEVBQUU7Z0JBQzlCUCxHQUFHLENBQUNJLE9BQU8sQ0FBQ08sU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNwQ0MsVUFBVSxFQUFFO2VBQ1osTUFBTTtnQkFDTmIsR0FBRyxDQUFDSSxPQUFPLENBQUNPLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLE1BQU0sQ0FBQzs7WUFFbkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUNSLGFBQWEsQ0FDYjtZQUNELE1BQU1ELFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCbkIsU0FBUyxDQUFDVSxPQUFPLEVBQUVXLGNBQWMsQ0FBQztnQkFBRUMsS0FBSyxFQUFFLEtBQUs7Z0JBQUVDLFFBQVEsRUFBRTtjQUFRLENBQUUsQ0FBQztZQUN4RSxDQUFDO1lBRUQ3QixNQUFBLENBQUEzRixPQUFLLENBQUN5SCxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNZixTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTyxDQUFDQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO2NBRWpHLE1BQU1hLFlBQVksR0FBR0EsQ0FBQSxLQUFLO2dCQUN6QjtnQkFDQSxJQUFJLENBQUNoQixTQUFTLEVBQUU7Z0JBQ2hCLE1BQU1JLGtCQUFrQixHQUFHSixTQUFTLENBQUNLLFlBQVksR0FBR0wsU0FBUyxDQUFDTSxZQUFZLEdBQUdOLFNBQVMsQ0FBQ08sU0FBUztnQkFFaEc7Z0JBQ0EsSUFBSUgsa0JBQWtCLElBQUksR0FBRyxFQUFFO2tCQUM5QlAsR0FBRyxDQUFDSSxPQUFPLENBQUNPLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztpQkFDcEMsTUFBTTtrQkFDTlosR0FBRyxDQUFDSSxPQUFPLENBQUNPLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLE1BQU0sQ0FBQzs7Y0FFbkMsQ0FBQztjQUVEWCxTQUFTLENBQUMvQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUrQyxZQUFZLENBQUM7Y0FFbEQsT0FBTyxNQUFLO2dCQUNYaEIsU0FBUyxFQUFFaUIsbUJBQW1CLENBQUMsUUFBUSxFQUFFRCxZQUFZLENBQUM7Y0FDdkQsQ0FBQztZQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixJQUFJRSxHQUFHLEdBQUcsMkJBQTJCO1lBQ3JDLElBQUl4QixVQUFVLENBQUN5QixHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUVELEdBQUcsSUFBSSxrQkFBa0J4QixVQUFVLENBQUMwQixHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdkYsTUFBTUMsWUFBWSxHQUFHLG1CQUNwQjNCLFVBQVUsQ0FBQ3lCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxlQUFlekIsVUFBVSxDQUFDMEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsRUFDOUUsRUFBRTtZQUNGLE9BQ0NuQyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUtDLFNBQVMsRUFBRUYsWUFBWTtjQUFFeEIsR0FBRyxFQUFFQTtZQUFHLEdBQ3JDWixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNwQyxNQUFBLENBQUFzQyxVQUFVO2NBQUMzQixHQUFHLEVBQUVMLElBQUk7Y0FBRUEsSUFBSSxFQUFDLFdBQVc7Y0FBQ2lDLE9BQU8sRUFBQyxVQUFVO2NBQUNGLFNBQVMsRUFBRUwsR0FBRztjQUFFUSxPQUFPLEVBQUVoQjtZQUFVLEVBQUksQ0FDN0Y7VUFFUjs7Ozs7Ozs7Ozs7VUMvREE7O1VBRUEvTyxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQW1OLE1BQUEsR0FBQWpOLE9BQUE7VUFFQSxJQUFBb04sUUFBQSxHQUFBcE4sT0FBQTtVQUNBLElBQUEyUCxTQUFBLEdBQUEzUCxPQUFBO1VBQ0EsSUFBQW1OLE1BQUEsR0FBQW5OLE9BQUE7VUFFTztVQUFVLFNBQVV3RSxJQUFJQSxDQUFBO1lBQzlCLE1BQU0sQ0FBQ29MLE1BQU0sQ0FBQyxHQUFHM0MsTUFBQSxDQUFBM0YsT0FBSyxDQUFDdUksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN0QyxNQUFNdEMsU0FBUyxHQUFHTixNQUFBLENBQUEzRixPQUFLLENBQUNtRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3BDLE1BQU07Y0FBRUgsS0FBSztjQUFFM0ssS0FBSztjQUFFbU4sVUFBVTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBM0MsUUFBQSxDQUFBUSxjQUFjLEdBQUU7WUFDNUQsTUFBTTtjQUFFdkw7WUFBUSxDQUFFLEdBQUdpTCxLQUFLO1lBQzFCLE1BQU0sR0FBRzBDLFdBQVcsQ0FBQyxHQUFHL0MsTUFBQSxDQUFBM0YsT0FBSyxDQUFDdUksUUFBUSxDQUFTeE4sUUFBUSxFQUFFOEksTUFBTSxJQUFJLEVBQUUsQ0FBQ0EsTUFBTSxDQUFDO1lBQzdFLE1BQU0sQ0FBQzhFLFlBQVksRUFBRUMsZUFBZSxDQUFDLEdBQUdqRCxNQUFBLENBQUEzRixPQUFLLENBQUN1SSxRQUFRLENBQUMxSyxXQUFXLENBQUNnTCxHQUFHLEVBQUUsQ0FBQztZQUN6RSxJQUFJakIsR0FBRyxHQUFHLDBCQUEwQlUsTUFBTSxHQUFHLDBEQUEwRCxHQUFHLEVBQUUsRUFBRTtZQUM5RyxNQUFNUSxZQUFZLEdBQUdBLENBQUEsS0FBSztjQUN6QkosV0FBVyxDQUFDMUMsS0FBSyxDQUFDakwsUUFBUSxDQUFDOEksTUFBTSxDQUFDO2NBRWxDMUcsVUFBVSxDQUFDc0osVUFBVSxDQUFDLE1BQUs7Z0JBQzFCUixTQUFTLENBQUNVLE9BQU8sQ0FBQ1csY0FBYyxDQUFDO2tCQUFFRSxRQUFRLEVBQUUsUUFBUTtrQkFBRUQsS0FBSyxFQUFFO2dCQUFLLENBQUUsQ0FBQztjQUN2RSxDQUFDLEVBQUUsR0FBRyxDQUFDO2NBQ1A7WUFDRCxDQUFDO1lBRUQ1QixNQUFBLENBQUEzRixPQUFLLENBQUN5SCxTQUFTLENBQUMsTUFBSztjQUNwQnRLLFVBQVUsQ0FBQ3NKLFVBQVUsQ0FBQyxNQUFLO2dCQUMxQlIsU0FBUyxDQUFDVSxPQUFPLEVBQUVXLGNBQWMsQ0FBQztrQkFBRUUsUUFBUSxFQUFFLFFBQVE7a0JBQUVELEtBQUssRUFBRTtnQkFBSyxDQUFFLENBQUM7Y0FDeEUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNSLENBQUMsRUFBRSxDQUFDb0IsWUFBWSxDQUFDLENBQUM7WUFFbEIsSUFBQTlDLE1BQUEsQ0FBQVcsU0FBUyxFQUFDLENBQUNSLEtBQUssQ0FBQzlLLElBQUksQ0FBQyxFQUFFNE4sWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFFM0UsSUFBSUMsVUFBVSxHQUFHLGVBQWU7WUFFaEMsSUFBSSxDQUFDL0MsS0FBSyxDQUFDakwsUUFBUSxDQUFDOEksTUFBTSxFQUFFO2NBQzNCLE1BQU1tRixPQUFPLEdBQUdQLEtBQUssR0FBR0EsS0FBSyxHQUFHOUMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFBckMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBaUosUUFBQSwyQkFBcUI7Y0FDckQ7Y0FDQSxPQUNDdEQsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtnQkFBS0MsU0FBUyxFQUFFTDtjQUFHLEdBRWxCakMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDZ0IsT0FBTyxPQUFHLENBQ047O1lBSVIsT0FDQ3JELE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBS0MsU0FBUyxFQUFFTDtZQUFHLEdBQ2xCakMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFTQyxTQUFTLEVBQUVjO1lBQVUsR0FDN0JwRCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNLLFNBQUEsQ0FBQWEsUUFBUTtjQUNSaE8sSUFBSSxFQUFFOEssS0FBSyxDQUFDOUssSUFBSTtjQUNoQjBOLGVBQWUsRUFBRUEsZUFBZTtjQUNoQ3JQLE1BQU0sRUFBRXlNLEtBQUssQ0FBQ3JLLFlBQVksQ0FBQ3BDLE1BQU07Y0FDakNvTixPQUFPLEVBQUVYLEtBQUssQ0FBQ2hLLGNBQWM7Y0FDN0J3TSxVQUFVLEVBQUVBLFVBQVU7Y0FDdEJ6TixRQUFRLEVBQUVpTCxLQUFLLEVBQUVqTCxRQUFRLElBQUksRUFBRTtjQUMvQk0sS0FBSyxFQUFFQTtZQUFLLEVBQ1gsRUFDRnNLLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBS3pCLEdBQUcsRUFBRU4sU0FBUztjQUFFZ0MsU0FBUyxFQUFDO1lBQVcsRUFBRyxDQUNwQyxDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNURBLElBQUF0QyxNQUFBLEdBQUFqTixPQUFBO1VBQ0EsSUFBQW9OLFFBQUEsR0FBQXBOLE9BQUE7VUFDQSxJQUFBeVEsV0FBQSxHQUFBelEsT0FBQTtVQUNNLFNBQVUwUSxZQUFZQSxDQUFBO1lBQzNCLE1BQU07Y0FBRXBEO1lBQUssQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQVEsY0FBYyxHQUFFO1lBQ2xDLE9BQ0NYLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWdCLEdBQzlCdEMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDbUIsV0FBQSxDQUFBRSxPQUFPO2NBQUNDLE1BQU07WUFBQSxFQUFHLENBQ2I7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWQSxJQUFBM0QsTUFBQSxHQUFBak4sT0FBQTtVQUNBLElBQUFvTixRQUFBLEdBQUFwTixPQUFBO1VBQ00sU0FBVTZRLFlBQVlBLENBQUNuUCxJQUFJO1lBQ2hDLE1BQU0sQ0FBQ21DLEtBQUssRUFBRWlOLFFBQVEsQ0FBQyxHQUFHN0QsTUFBQSxDQUFBM0YsT0FBSyxDQUFDdUksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNaEMsR0FBRyxHQUFHWixNQUFBLENBQUEzRixPQUFLLENBQUNtRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU07Y0FDTEgsS0FBSyxFQUFFO2dCQUFFM0o7Y0FBVTtZQUFFLENBQ3JCLEdBQUcsSUFBQXlKLFFBQUEsQ0FBQVEsY0FBYyxHQUFFO1lBRXBCLE1BQU1tRCxnQkFBZ0IsR0FBR3BOLFVBQVUsQ0FBQ3lMLEdBQUcsQ0FBQzFOLElBQUksQ0FBQyxFQUFFc1AsT0FBTztZQUN0RC9ELE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3lILFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1rQyxPQUFPLEdBQUdwRyxLQUFLLElBQUlpRyxRQUFRLENBQUMsSUFBSSxDQUFDO2NBQ3ZDLElBQUksQ0FBQ2pELEdBQUcsRUFBRUksT0FBTyxFQUFFO2NBQ25CSixHQUFHLENBQUNJLE9BQU8sQ0FBQ2hDLGdCQUFnQixDQUFDLE9BQU8sRUFBRWdGLE9BQU8sQ0FBQztjQUM5QyxPQUFPLE1BQU1wRCxHQUFHLENBQUNJLE9BQU8sRUFBRWdCLG1CQUFtQixDQUFDLE9BQU8sRUFBRWdDLE9BQU8sQ0FBQztZQUNoRSxDQUFDLEVBQUUsQ0FBQ3BELEdBQUcsRUFBRUksT0FBTyxDQUFDLENBQUM7WUFFbEIsT0FBTyxDQUFDSixHQUFHLEVBQUVoSyxLQUFLLElBQUksQ0FBQ2tOLGdCQUFnQixFQUFFQSxnQkFBZ0IsQ0FBQztVQUMzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkEsSUFBQTlELE1BQUEsR0FBQWpOLE9BQUE7VUFDQSxJQUFBa1IsV0FBQSxHQUFBbFIsT0FBQTtVQUNBLElBQUFvTixRQUFBLEdBQUFwTixPQUFBO1VBR0EsSUFBQW1SLFVBQUEsR0FBQW5SLE9BQUE7VUFDTztVQUFXLFNBQVVvUixtQkFBbUJBLENBQUM7WUFDL0NDLFFBQVE7WUFDUjdELElBQUk7WUFDSnpKLFFBQVE7WUFDUnVOLFFBQVE7WUFDUnRRLFFBQVE7WUFDUitPLEtBQUs7WUFDTGxQLE1BQU07WUFFTixHQUFHMFE7VUFBSyxDQUN3QjtZQUNoQyxNQUFNLENBQUM1RCxjQUFjLEVBQUU2RCxpQkFBaUIsQ0FBQyxHQUFHdkUsTUFBQSxDQUFBM0YsT0FBSyxDQUFDdUksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRSxNQUFNLENBQUM0QixZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHekUsTUFBQSxDQUFBM0YsT0FBSyxDQUFDdUksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUU3RCxNQUFNO2NBQUVoTSxLQUFLO2NBQUV5SjtZQUFLLENBQUUsR0FBRyxJQUFBNEQsV0FBQSxDQUFBUyxVQUFVLEVBQUNKLEtBQUssQ0FBQy9OLEVBQUUsRUFBRXhDLFFBQVEsRUFBRXVRLEtBQUssQ0FBQ3pOLFFBQVEsQ0FBQztZQUN2RSxNQUFNOE4sR0FBRyxHQUFHdEUsS0FBSyxHQUFHQSxLQUFLLEdBQUksRUFBbUI7WUFFaEQsTUFBTXVFLGVBQWUsR0FBR1AsUUFBUTtZQUNoQyxJQUFJLENBQUN6TixLQUFLLElBQUl5TixRQUFRLEVBQUUsT0FBT3JFLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ3VDLGVBQWUsT0FBRztZQUNsRCxJQUFJLENBQUNoTyxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBQ3ZCLE1BQU07Y0FBRXhCLFFBQVE7Y0FBRU07WUFBSyxDQUFFLEdBQUdpUCxHQUFHO1lBQy9CLE1BQU1FLFlBQVksR0FBRztjQUNwQk4saUJBQWlCLEVBQUUxUixLQUFLLElBQUc7Z0JBQzFCLElBQUksQ0FBQ0EsS0FBSyxFQUFFb0UsT0FBTyxDQUFDNk4sS0FBSyxDQUFDLHdDQUF3QyxDQUFDO2dCQUNuRVAsaUJBQWlCLENBQUMxUixLQUFLLENBQUM7Y0FDekIsQ0FBQztjQUNENk4sY0FBYztjQUNkTCxLQUFLO2NBQ0x6SixLQUFLLEVBQUV5SixLQUFLLENBQUN6SixLQUFLO2NBQ2xCbEIsS0FBSyxFQUFFMkssS0FBSyxDQUFDM0ssS0FBSztjQUNsQnBDLFFBQVEsRUFBRStNLEtBQUssRUFBRXJLLFlBQVksRUFBRTFDLFFBQVE7Y0FDdkN3RCxRQUFRO2NBQ1IrTCxVQUFVLEVBQUV0QyxJQUFJO2NBQ2hCdUMsS0FBSztjQUNMak0sUUFBUSxFQUFFeU4sS0FBSyxDQUFDek4sUUFBUTtjQUN4QjROLGVBQWU7Y0FDZkosUUFBUTtjQUNSalAsUUFBUTtjQUNSeEIsTUFBTTtjQUNONk0sVUFBVSxFQUFFNkQsS0FBSyxDQUFDN0Q7YUFDbEI7WUFFRCxPQUNDVCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNsQyxRQUFBLENBQUE0RSxXQUFXLENBQUNDLFFBQVE7Y0FBQ25TLEtBQUssRUFBRWdTO1lBQVksR0FDdkNULFFBQVEsRUFDVHBFLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQzZCLFVBQUEsQ0FBQWUsYUFBYTtjQUFDQyxTQUFTLEVBQUVWO1lBQVksRUFBSSxDQUNwQjtVQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0REEsSUFBQXhFLE1BQUEsR0FBQWpOLE9BQUE7VUF3Qk87VUFBWSxNQUFNZ1MsV0FBVyxHQUFBblMsT0FBQSxDQUFBbVMsV0FBQSxHQUFHL0UsTUFBQSxDQUFBM0YsT0FBSyxDQUFDOEssYUFBYSxDQUFDLEVBQTJCLENBQUM7VUFDaEY7VUFBWSxNQUFNeEUsY0FBYyxHQUFHQSxDQUFBLEtBQU1YLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQytLLFVBQVUsQ0FBQ0wsV0FBVyxDQUFDO1VBQUNuUyxPQUFBLENBQUErTixjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekI5RSxJQUFBWCxNQUFBLEdBQUFqTixPQUFBO1VBQ0EsSUFBQXNTLEtBQUEsR0FBQXRTLE9BQUE7VUFDQSxJQUFBb04sUUFBQSxHQUFBcE4sT0FBQTtVQUNBLElBQUF1UyxTQUFBLEdBQUF2UyxPQUFBO1VBQ0EsSUFBQXdTLFNBQUEsR0FBQXhTLE9BQUE7VUFPTyxXQUxQOzs7OztVQUtpQixTQUFVeVMsZUFBZUEsQ0FBQTtZQUN6QyxNQUFNO2NBQUU1TyxLQUFLO2NBQUV5SjtZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFRLGNBQWMsR0FBRTtZQUV6QyxJQUFJTixLQUFLLENBQUNqSyxRQUFRLElBQUlRLEtBQUssRUFBRSxPQUFPb0osTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDa0QsU0FBQSxDQUFBRSxZQUFZLE9BQUc7WUFFcEQsSUFBSSxDQUFDN08sS0FBSyxFQUFFLE9BQU9vSixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNpRCxTQUFBLENBQUE3QixZQUFZLE9BQUc7WUFFbkMsT0FBT3pELE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ2dELEtBQUEsQ0FBQTlOLElBQUksT0FBRztVQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQXlJLE1BQUEsR0FBQWpOLE9BQUE7VUFDQSxJQUFBMlMsVUFBQSxHQUFBM1MsT0FBQTtVQUVBLElBQUFrTixNQUFBLEdBQUFsTixPQUFBO1VBQ0EsSUFBQW9OLFFBQUEsR0FBQXBOLE9BQUE7VUFFTSxTQUFVNFMsaUJBQWlCQSxDQUFDO1lBQUVDO1VBQWdCLENBQUU7WUFDckQsTUFBTTtjQUFFQyxRQUFRO2NBQUVDO1lBQUksQ0FBRSxHQUFHLElBQUEzRixRQUFBLENBQUE0RixlQUFlLEdBQUU7WUFFNUMsSUFBSSxDQUFDLENBQUNELElBQUksQ0FBQzVILE1BQU0sRUFBRTtjQUNsQixPQUNDOEIsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtnQkFBTUMsU0FBUyxFQUFDO2NBQWlDLEdBQ2hEdEMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDcEMsTUFBQSxDQUFBK0YsYUFBYTtnQkFDYnpGLElBQUksRUFBQyxhQUFhO2dCQUNsQitCLFNBQVMsRUFBQyxRQUFRO2dCQUNsQkUsT0FBTyxFQUFDLFNBQVM7Z0JBQ2pCQyxPQUFPLEVBQUVvRCxRQUFRO2dCQUNqQnJQLFFBQVEsRUFBRW9QO2NBQWdCLEVBQ3pCLENBQ0k7O1lBSVQsT0FDQzVGLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQWlDLEdBQ2hEdEMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDcUQsVUFBQSxDQUFBTyxlQUFlLE9BQUcsQ0FDYjtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBakcsTUFBQSxHQUFBak4sT0FBQTtVQWlCTyxNQUFNbVQsWUFBWSxHQUFBdFQsT0FBQSxDQUFBc1QsWUFBQSxHQUFHbEcsTUFBQSxDQUFBM0YsT0FBSyxDQUFDOEssYUFBYSxDQUFDLElBQXFCLENBQUM7VUFDL0QsTUFBTVksZUFBZSxHQUFHQSxDQUFBLEtBQU0vRixNQUFBLENBQUEzRixPQUFLLENBQUMrSyxVQUFVLENBQUNjLFlBQVksQ0FBQztVQUFDdFQsT0FBQSxDQUFBbVQsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCcEUsSUFBQS9GLE1BQUEsR0FBQWpOLE9BQUE7VUFDQSxJQUFBb04sUUFBQSxHQUFBcE4sT0FBQTtVQUNNLFNBQVVvVCxZQUFZQSxDQUFBO1lBQzNCLE1BQU07Y0FBRTlGLEtBQUs7Y0FBRS9NO1lBQVEsQ0FBRSxHQUFHLElBQUE2TSxRQUFBLENBQUFRLGNBQWMsR0FBRTtZQUM1QyxNQUFNLENBQUM1RSxTQUFTLEVBQUVxSyxZQUFZLENBQUMsR0FBR3BHLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDaEUsTUFBTSxDQUFDdEwsUUFBUSxFQUFFK08sV0FBVyxDQUFDLEdBQUdyRyxNQUFBLENBQUEzRixPQUFLLENBQUN1SSxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQzlELE1BQU0sQ0FBQ2tELElBQUksRUFBRVEsT0FBTyxDQUFDLEdBQUd0RyxNQUFBLENBQUEzRixPQUFLLENBQUN1SSxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFDLE1BQU1wSyxTQUFTLEdBQUcsTUFBTW9GLEtBQUssSUFBRztjQUMvQnlJLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakJ6SSxLQUFLLENBQUMySSxjQUFjLEVBQUU7Y0FDdEIzSSxLQUFLLENBQUM0SSxlQUFlLEVBQUU7Y0FDdkIsTUFBTXpRLEtBQUssR0FBRyxNQUFNekMsUUFBUSxDQUFDcUYsSUFBSSxFQUFFO2NBRW5DMEgsS0FBSyxDQUFDN0gsU0FBUyxDQUFDekMsS0FBSyxDQUFDO2NBQ3RCcVEsWUFBWSxDQUFDLENBQUNySyxTQUFTLENBQUM7Y0FDeEJzSyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUM7WUFFRCxNQUFNSSxVQUFVLEdBQUcsTUFBTTdJLEtBQUssSUFBRztjQUNoQyxJQUFJO2dCQUNIQSxLQUFLLEVBQUU0SSxlQUFlLEVBQUU7Z0JBQ3hCRixPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUNYRCxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNaEcsS0FBSyxDQUFDckksV0FBVyxDQUFDOE4sSUFBSSxDQUFDO2dCQUU3Qk8sV0FBVyxDQUFDLEtBQUssQ0FBQztlQUNsQixDQUFDLE9BQU8vTixDQUFDLEVBQUU7Z0JBQ1hyQixPQUFPLENBQUNzQixLQUFLLENBQUMsT0FBTyxFQUFFRCxDQUFDLENBQUM7O1lBRTNCLENBQUM7WUFFRCxNQUFNdU4sUUFBUSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDNUgsTUFBTSxHQUFHdUksVUFBVSxHQUFHak8sU0FBUztZQUV2RCxPQUFPO2NBQUV1RCxTQUFTO2NBQUUrSixJQUFJO2NBQUVRLE9BQU87Y0FBRUQsV0FBVztjQUFFRCxZQUFZO2NBQUU5TyxRQUFRO2NBQUV1TztZQUFRLENBQUU7VUFDbkY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBLElBQUE3RixNQUFBLEdBQUFqTixPQUFBO1VBQ0EsSUFBQTJULEtBQUEsR0FBQTNULE9BQUE7VUFDQSxJQUFBbU4sTUFBQSxHQUFBbk4sT0FBQTtVQUNBLElBQUFvTixRQUFBLEdBQUFwTixPQUFBO1VBQ0EsSUFBQTRULFVBQUEsR0FBQTVULE9BQUE7VUFDQSxJQUFBNlQsYUFBQSxHQUFBN1QsT0FBQTtVQUNBLElBQUE4VCxTQUFBLEdBQUE5VCxPQUFBO1VBR0EsSUFBQStULGFBQUEsR0FBQS9ULE9BQUE7VUFDQSxJQUFBa04sTUFBQSxHQUFBbE4sT0FBQTtVQUVPO1VBQVcsTUFBTWdVLGVBQWUsR0FBR0EsQ0FBQztZQUMxQ0MsU0FBUyxHQUFHLEtBQUs7WUFDakJDLGNBQWMsR0FBRyxLQUFLO1lBQ3RCelEsUUFBUSxHQUFHLEtBQUs7WUFDaEJpTTtVQUFPLENBQ3FCLEtBQUk7WUFDaEMsTUFBTSxDQUFDeUUsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR25ILE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFFNUQsTUFBTTtjQUFFdkMsS0FBSztjQUFFL00sUUFBUTtjQUFFbVIsZUFBZTtjQUFFNU47WUFBUSxDQUFFLEdBQUcsSUFBQWdRLFNBQUEsQ0FBQWxHLGNBQWMsR0FBRTtZQUN2RSxNQUFNO2NBQUVtRixJQUFJO2NBQUVRLE9BQU87Y0FBRVQsUUFBUTtjQUFFdk8sUUFBUTtjQUFFeUUsU0FBUztjQUFFcUssWUFBWTtjQUFFQztZQUFXLENBQUUsR0FBRyxJQUFBUyxhQUFBLENBQUFYLFlBQVksR0FBRTtZQUVsRyxJQUFBakcsTUFBQSxDQUFBVyxTQUFTLEVBQUMsQ0FBQ1IsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QjhHLFVBQVUsQ0FBQzlHLEtBQUssQ0FBQytHLGVBQWUsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFFRixNQUFNQyxVQUFVLEdBQUcvUCxRQUFRLElBQUk0UCxPQUFPLElBQUlGLFNBQVM7WUFFbkQsTUFBTU0sVUFBVSxHQUFHakgsS0FBSyxDQUFDN0osUUFBUSxJQUFJQSxRQUFRO1lBQzdDLE1BQU1xTyxZQUFZLEdBQUc7Y0FDcEJ4RSxLQUFLO2NBQ0x3RixRQUFRO2NBQ1J2UyxRQUFRO2NBQ1IyVCxjQUFjO2NBQ2QzUCxRQUFRO2NBQ1JnUCxPQUFPO2NBQ1BGLFlBQVk7Y0FDWnJLLFNBQVM7Y0FDVCtKLElBQUk7Y0FDSk8sV0FBVztjQUNYN1AsUUFBUSxFQUFFOFE7YUFDVjtZQUVEdEgsTUFBQSxDQUFBM0YsT0FBSyxDQUFDeUgsU0FBUyxDQUFDLE1BQUksQ0FFcEIsQ0FBQyxFQUFDLENBQUN4SyxRQUFRLENBQUMsQ0FBQztZQUViLE1BQU1pUSxLQUFLLEdBQUc7Y0FBRS9RLFFBQVEsRUFBRUEsUUFBUSxJQUFJNkosS0FBSyxDQUFDN0o7WUFBUSxDQUFFO1lBQ3RELE1BQU1vUCxnQkFBZ0IsR0FBRzJCLEtBQUssQ0FBQy9RLFFBQVEsSUFBSTZKLEtBQUssQ0FBQytHLGVBQWUsSUFBSXJMLFNBQVM7WUFDN0UsSUFBSWtHLEdBQUcsR0FBRyx3QkFBd0JvRixVQUFVLEdBQUcsYUFBYSxHQUFHLEVBQUUsSUFBSUMsVUFBVSxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUU7WUFDdEcsTUFBTUUsY0FBYyxHQUFHO2NBQ3RCbEYsU0FBUyxFQUFFTDthQUNYO1lBQ0QsTUFBTXdGLFlBQVksR0FBRztjQUNwQmhGLE9BQU87Y0FDUEgsU0FBUyxFQUFFLG1CQUFtQmdGLFVBQVUsR0FBRyxhQUFhLEdBQUcsRUFBRTthQUM3RDtZQUVELElBQUksQ0FBQyxFQUFFLEVBQUVsUCxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQ3lOLElBQUksQ0FBQzRCLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDNUIsSUFBSSxDQUFDNkIsSUFBSSxFQUFFLENBQUN6SixNQUFNLEVBQUVxSixLQUFLLENBQUMvUSxRQUFRLEdBQUcsSUFBSTtZQUUzRyxNQUFNb1IsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUJuRCxlQUFlLENBQUMsSUFBSSxDQUFDO2NBQ3JCcEUsS0FBSyxDQUFDeEosUUFBUSxDQUFDbUUsSUFBSSxFQUFFO1lBQ3RCLENBQUM7WUFDRCxPQUNDZ0YsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDbEMsUUFBQSxDQUFBK0YsWUFBWSxDQUFDbEIsUUFBUTtjQUFDblMsS0FBSyxFQUFFZ1M7WUFBWSxHQUN6QzdFLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ3FFLEtBQUEsQ0FBQW1CLElBQUk7Y0FBQ2hDLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQU00QjtZQUFZLEdBQ3pDekgsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFBLEdBQVNtRjtZQUFjLEdBSXRCeEgsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDc0UsVUFBQSxDQUFBbUIsU0FBUztjQUNUaEMsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZPLFdBQVcsRUFBRUEsV0FBVztjQUN4Qi9PLFFBQVEsRUFBRStQLFVBQVU7Y0FDcEJmLE9BQU8sRUFBRUEsT0FBTztjQUNoQkcsVUFBVSxFQUFFWixRQUFRO2NBQ3BCclAsUUFBUSxFQUFFOFE7WUFBVSxFQUNuQixFQUNGdEgsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBcUIsR0FDbEN6TCxRQUFRLElBQUltSixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNwQyxNQUFBLENBQUFzQyxVQUFVO2NBQUNoQyxJQUFJLEVBQUMsUUFBUTtjQUFDa0MsT0FBTyxFQUFFbUY7WUFBYSxFQUFJLEVBQ2pFNUgsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDdUUsYUFBQSxDQUFBakIsaUJBQWlCO2NBQUNDLGdCQUFnQixFQUFFQTtZQUFnQixFQUFJLENBQ3BELENBQ0QsQ0FDQSxDQUNnQjtVQUUxQixDQUFDO1VBQUNoVCxPQUFBLENBQUFtVSxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEZGLElBQUEvRyxNQUFBLEdBQUFqTixPQUFBO1VBQ0EsSUFBQWtOLE1BQUEsR0FBQWxOLE9BQUE7VUFDQSxJQUFBZ1YsTUFBQSxHQUFBaFYsT0FBQTtVQUVBLElBQUFvTixRQUFBLEdBQUFwTixPQUFBO1VBRU87VUFBVyxNQUFNaVYscUJBQXFCLEdBQUdBLENBQUM7WUFBRUMsSUFBSTtZQUFFQztVQUFPLENBQUUsS0FBSTtZQUNyRSxJQUFJLENBQUNELElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIsTUFBTTtjQUFFdlM7WUFBSyxDQUFFLEdBQUcsSUFBQXlLLFFBQUEsQ0FBQVEsY0FBYyxHQUFFO1lBQ2xDLE1BQU07Y0FBRXdILEtBQUs7Y0FBRUM7WUFBVyxDQUFFLEdBQUcxUyxLQUFLLENBQUMyRyxXQUFXLENBQUM5RCxLQUFLO1lBRXRELE9BQ0N5SCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUFyQyxNQUFBLENBQUEzRixPQUFBLENBQUFpSixRQUFBLFFBQ0N0RCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUMwRixNQUFBLENBQUFNLFVBQVU7Y0FBQy9GLFNBQVMsRUFBQyxpQkFBaUI7Y0FBQzRGLE9BQU8sRUFBRUEsT0FBTztjQUFFSSxRQUFRO1lBQUEsR0FDakV0SSxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE4QixHQUM1Q3RDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQThCLEdBQzVDdEMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxhQUFLOEYsS0FBSyxDQUFNLENBQ1gsRUFDTm5JLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ3BDLE1BQUEsQ0FBQXNJLElBQUk7Y0FBQ2pHLFNBQVMsRUFBQywwQkFBMEI7Y0FBQy9CLElBQUksRUFBQztZQUFLLEVBQUcsRUFDeERQLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBR0MsU0FBUyxFQUFDO1lBQXlCLEdBQUU4RixXQUFXLENBQUssQ0FDbkQsQ0FDTSxDQUNYO1VBRUwsQ0FBQztVQUFDeFYsT0FBQSxDQUFBb1YscUJBQUEsR0FBQUEscUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJGLElBQUFoSSxNQUFBLEdBQUFqTixPQUFBO1VBRUEsSUFBQXlRLFdBQUEsR0FBQXpRLE9BQUE7VUFFQSxJQUFBeVYsT0FBQSxHQUFBelYsT0FBQTtVQUNBLElBQUFvTixRQUFBLEdBQUFwTixPQUFBO1VBQ0EsSUFBQWdWLE1BQUEsR0FBQWhWLE9BQUE7VUFDQSxJQUFBMFYsV0FBQSxHQUFBMVYsT0FBQTtVQUNPO1VBQVcsTUFBTWtULGVBQWUsR0FBR0EsQ0FBQztZQUFFelAsUUFBUSxHQUFHO1VBQUssQ0FBRSxLQUFJO1lBQ2xFLE1BQU07Y0FBRWxELFFBQVE7Y0FBRXlJLFNBQVM7Y0FBRXFLO1lBQVksQ0FBRSxHQUFHLElBQUFqRyxRQUFBLENBQUE0RixlQUFlLEdBQUU7WUFDL0QsTUFBTSxDQUFDek8sUUFBUSxFQUFFK08sV0FBVyxDQUFDLEdBQUcsSUFBQXJHLE1BQUEsQ0FBQTRDLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDOEYsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRyxJQUFBM0ksTUFBQSxDQUFBNEMsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNLENBQUNySyxLQUFLLEVBQUVxUSxRQUFRLENBQUMsR0FBRyxJQUFBNUksTUFBQSxDQUFBNEMsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUN6QyxNQUFNLEdBQUdpRyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUE3SSxNQUFBLENBQUE0QyxRQUFRLEVBQUNwTCxVQUFVLEVBQUVzUixZQUFZLENBQUNDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBRXZHLE1BQU1DLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0IsSUFBSTtnQkFDSCxNQUFNMVYsUUFBUSxDQUFDOEgsTUFBTSxFQUFFO2dCQUN2QmdMLFlBQVksQ0FBQyxDQUFDckssU0FBUyxDQUFDO2VBQ3hCLENBQUMsT0FBT3pELENBQUMsRUFBRTtnQkFDWHNRLFFBQVEsQ0FBQyxJQUFJLENBQUM7O1lBRWhCLENBQUM7WUFFRCxNQUFNak0sWUFBWSxHQUFHQSxDQUFBLEtBQUs7Y0FDekJySixRQUFRLENBQ05rSixjQUFjLEVBQUUsQ0FDaEIwQyxJQUFJLENBQUMsTUFBSztnQkFDVjFILFVBQVUsRUFBRXNSLFlBQVksQ0FBQ0csT0FBTyxDQUFDLDhCQUE4QixFQUFFLE1BQU0sQ0FBQztnQkFDeEVKLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztjQUN6QixDQUFDLENBQUMsQ0FDRDFKLEtBQUssQ0FBQzVHLEtBQUssSUFBRztnQkFDZHRCLE9BQU8sQ0FBQ2lTLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckNOLFFBQVEsQ0FBQyxJQUFJLENBQUM7Y0FDZixDQUFDLENBQUM7WUFDSixDQUFDO1lBQ0QsTUFBTU8sVUFBVSxHQUFHLE1BQU12TCxLQUFLLElBQUc7Y0FDaEMsSUFBSTtnQkFDSEEsS0FBSyxDQUFDMkksY0FBYyxFQUFFO2dCQUN0QkYsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTWhLLFdBQVcsR0FBRyxNQUFNL0ksUUFBUSxDQUFDa0osY0FBYyxFQUFFO2dCQUVuRCxJQUFJLENBQUNILFdBQVcsRUFBRTtrQkFDakJzTSxZQUFZLENBQUMsSUFBSSxDQUFDO2tCQUNsQjs7Z0JBR0RLLFFBQVEsRUFBRTtlQUNWLENBQUMsT0FBTzFRLENBQUMsRUFBRTtnQkFDWHNRLFFBQVEsQ0FBQyxJQUFJLENBQUM7ZUFDZCxTQUFTO2dCQUNUdkMsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE1BQU02QixPQUFPLEdBQUd0SyxLQUFLLElBQUc7Y0FDdkJ5SSxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ2xCc0MsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNwQixDQUFDO1lBQ0QsTUFBTVMsWUFBWSxHQUFHQSxDQUFBLEtBQU1SLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDMUMsTUFBTXRCLFVBQVUsR0FBRzlRLFFBQVEsSUFBSWMsUUFBUTtZQUN2QyxJQUFJeUUsU0FBUyxFQUFFLE9BQU9pRSxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNtRyxPQUFBLENBQUFhLE1BQU0sT0FBRztZQUVoQyxPQUNDckosTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFBckMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBaUosUUFBQSxRQUNDdEQsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDbUIsV0FBQSxDQUFBOEYsTUFBTTtjQUFDL0ksSUFBSSxFQUFDLEtBQUs7Y0FBQ2pKLFFBQVEsRUFBRUEsUUFBUTtjQUFFbUwsT0FBTyxFQUFFMEcsVUFBVTtjQUFFM1MsUUFBUSxFQUFFOFE7WUFBVSxFQUFJLEVBQ3BGdEgsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDMEYsTUFBQSxDQUFBd0IsZ0JBQWdCO2NBQUN0QixJQUFJLEVBQUVTLFNBQVM7Y0FBRVIsT0FBTyxFQUFFQSxPQUFPO2NBQUVzQixTQUFTLEVBQUU3TTtZQUFZLEVBQUksRUFDaEZxRCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNvRyxXQUFBLENBQUFULHFCQUFxQjtjQUFDQyxJQUFJLEVBQUUxUCxLQUFLO2NBQUUyUCxPQUFPLEVBQUVrQjtZQUFZLEVBQUksQ0FDM0Q7VUFFTCxDQUFDO1VBQUN4VyxPQUFBLENBQUFxVCxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEVGLElBQUFqRyxNQUFBLEdBQUFqTixPQUFBO1VBQ0EsSUFBQWtOLE1BQUEsR0FBQWxOLE9BQUE7VUFDQSxJQUFBZ1YsTUFBQSxHQUFBaFYsT0FBQTtVQUNBLElBQUFvTixRQUFBLEdBQUFwTixPQUFBO1VBRU87VUFBVyxNQUFNd1csZ0JBQWdCLEdBQUdBLENBQUM7WUFBRXRCLElBQUk7WUFBRUMsT0FBTztZQUFFc0I7VUFBUyxDQUFFLEtBQUk7WUFDM0UsSUFBSSxDQUFDdkIsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixNQUFNO2NBQUV2UztZQUFLLENBQUUsR0FBRyxJQUFBeUssUUFBQSxDQUFBUSxjQUFjLEdBQUU7WUFDbEMsTUFBTThJLFFBQVEsR0FBRy9ULEtBQUssQ0FBQzJHLFdBQVcsQ0FBQzhMLEtBQUs7WUFDeEMsTUFBTUMsV0FBVyxHQUFHMVMsS0FBSyxDQUFDMkcsV0FBVyxDQUFDK0wsV0FBVztZQUVqRCxPQUNDcEksTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFBckMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBaUosUUFBQSxRQUNDdEQsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDMEYsTUFBQSxDQUFBTSxVQUFVO2NBQUNILE9BQU8sRUFBRUEsT0FBTztjQUFFSSxRQUFRO2NBQUNrQixTQUFTLEVBQUVBO1lBQVMsR0FDMUR4SixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE4QixHQUM1Q3RDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQThCLEdBQzVDdEMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBc0IsR0FBRTVNLEtBQUssQ0FBQzJHLFdBQVcsQ0FBQ3FOLEtBQUssQ0FBUSxFQUN2RTFKLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsYUFBS29ILFFBQVEsQ0FBTSxDQUNkLEVBQ056SixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNwQyxNQUFBLENBQUFzSSxJQUFJO2NBQUNqRyxTQUFTLEVBQUMsMEJBQTBCO2NBQUMvQixJQUFJLEVBQUM7WUFBSyxFQUFHLEVBQ3hEUCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUF5QixHQUFFOEYsV0FBVyxDQUFLLENBQ25ELENBQ00sQ0FDWDtVQUVMLENBQUM7VUFBQ3hWLE9BQUEsQ0FBQTJXLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCRixJQUFBdkosTUFBQSxHQUFBak4sT0FBQTtVQUNBLElBQUFrTixNQUFBLEdBQUFsTixPQUFBO1VBQ0EsSUFBQTRXLE1BQUEsR0FBQTVXLE9BQUE7VUFDQSxJQUFBb04sUUFBQSxHQUFBcE4sT0FBQTtVQUNBLElBQUF5USxXQUFBLEdBQUF6USxPQUFBO1VBQ0EsSUFBQTZXLE9BQUEsR0FBQTdXLE9BQUE7VUFFTyxNQUFNc1csTUFBTSxHQUFHQSxDQUFBLEtBQUs7WUFDMUIsTUFBTTtjQUFFL1YsUUFBUTtjQUFFOFMsWUFBWTtjQUFFYSxjQUFjO2NBQUU1RyxLQUFLO2NBQUVpRyxPQUFPO2NBQUVEO1lBQVcsQ0FBRSxHQUFHLElBQUFsRyxRQUFBLENBQUE0RixlQUFlLEdBQUU7WUFDakcsTUFBTSxDQUFDOEQsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzlKLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTSxDQUFDcE0sUUFBUSxFQUFFdVQsV0FBVyxDQUFDLEdBQUcvSixNQUFBLENBQUEzRixPQUFLLENBQUN1SSxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXBELE1BQU1vSCxNQUFNLEdBQUcsTUFBTXBNLEtBQUssSUFBRztjQUM1QkEsS0FBSyxDQUFDMkksY0FBYyxFQUFFO2NBQ3RCLE1BQU1qVCxRQUFRLENBQUNxRixJQUFJLEVBQUU7Y0FDckJ5TixZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFFRHBHLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3lILFNBQVMsQ0FBQyxNQUFLO2NBQ3BCaEIsVUFBVSxDQUFDLE1BQUs7Z0JBQ2ZpSixXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ04sTUFBTXRSLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0JxUixhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CLE1BQU0vVCxLQUFLLEdBQUcsTUFBTXpDLFFBQVEsQ0FBQ3FGLElBQUksRUFBRTtjQUNuQyxNQUFNd0QsYUFBYSxHQUFHLE1BQU1rRSxLQUFLLENBQUM1SCxVQUFVLENBQUMxQyxLQUFLLENBQUM7Y0FDbkQsSUFBSW9HLGFBQWEsQ0FBQzVELEtBQUssRUFBRTtnQkFDeEJ0QixPQUFPLENBQUNzQixLQUFLLENBQUM0RCxhQUFhLENBQUM1RCxLQUFLLENBQUM7Z0JBQ2xDOztjQUVEK04sT0FBTyxDQUFDbkssYUFBYSxDQUFDc0MsSUFBSSxDQUFDcUgsSUFBSSxDQUFDO2NBQ2hDTSxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFFRCxNQUFNUCxRQUFRLEdBQUcsTUFBTWpJLEtBQUssSUFBRztjQUM5QkEsS0FBSyxDQUFDMkksY0FBYyxFQUFFO2NBQ3RCM0ksS0FBSyxDQUFDNEksZUFBZSxFQUFFO2NBQ3ZCLElBQUk7Z0JBQ0hILFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLElBQUlZLGNBQWMsRUFBRSxPQUFPeE8sVUFBVSxFQUFFO2dCQUN2QyxNQUFNMUMsS0FBSyxHQUFHLE1BQU16QyxRQUFRLENBQUNxRixJQUFJLEVBQUU7Z0JBRW5DMEgsS0FBSyxDQUFDN0gsU0FBUyxDQUFDekMsS0FBSyxDQUFDO2dCQUN0QnFRLFlBQVksQ0FBQyxLQUFLLENBQUM7Z0JBQ25CQyxXQUFXLENBQUMsS0FBSyxDQUFDO2VBQ2xCLENBQUMsT0FBTy9OLENBQUMsRUFBRTtnQkFDWHJCLE9BQU8sQ0FBQ3NCLEtBQUssQ0FBQ0QsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBQ0QsT0FDQzBILE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTZCLEdBQzNDdEMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDcEMsTUFBQSxDQUFBc0MsVUFBVTtjQUFDRCxTQUFTLEVBQUMsUUFBUTtjQUFDL0IsSUFBSSxFQUFDLFFBQVE7Y0FBQ2tDLE9BQU8sRUFBRXVIO1lBQU0sRUFBSSxFQUNoRWhLLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ3NILE1BQUEsQ0FBQU0sS0FBSztjQUFDQyxNQUFNLEVBQUM7WUFBTyxFQUFHLEVBQ3hCbEssTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNkIsR0FDMUN1SCxVQUFVLEdBQ1Y3SixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNtQixXQUFBLENBQUE4RixNQUFNLFFBQ050SixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNtQixXQUFBLENBQUFFLE9BQU87Y0FBQ0MsTUFBTTtZQUFBLEVBQUcsQ0FDVixHQUVUM0QsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDdUgsT0FBQSxDQUFBNUQsYUFBYTtjQUNiekYsSUFBSSxFQUFDLGFBQWE7Y0FDbEIrQixTQUFTLEVBQUMsUUFBUTtjQUNsQkUsT0FBTyxFQUFDLFNBQVM7Y0FDakJDLE9BQU8sRUFBRW9ELFFBQVE7Y0FDakJyUCxRQUFRLEVBQUVBO1lBQVEsRUFFbkIsQ0FDSSxDQUNEO1VBRVIsQ0FBQztVQUFDNUQsT0FBQSxDQUFBeVcsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZFRixJQUFBckosTUFBQSxHQUFBak4sT0FBQTtVQUNBLElBQUFtTixNQUFBLEdBQUFuTixPQUFBO1VBQ0EsSUFBQW9OLFFBQUEsR0FBQXBOLE9BQUE7VUFFTSxTQUFVK1UsU0FBU0EsQ0FBQztZQUFFekIsV0FBVztZQUFFQyxPQUFPO1lBQUVHLFVBQVU7WUFBRW5QLFFBQVE7WUFBRXdPLElBQUk7WUFBRXRQO1VBQVEsQ0FBRTtZQUN2RixNQUFNO2NBQUU2SjtZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUE0RixlQUFlLEdBQUU7WUFDbkMsTUFBTW9FLFdBQVcsR0FBR25LLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ21HLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDdENSLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3lILFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1zSSxNQUFNLEdBQUdELFdBQVcsQ0FBQ25KLE9BQU87Y0FDbENvSixNQUFNLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLE1BQU07Y0FDNUJGLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEdBQ2xCeEUsSUFBSSxDQUFDNUgsTUFBTSxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQ2tNLE1BQU0sQ0FBQ2hKLFlBQVksS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHZ0osTUFBTSxDQUFDaEosWUFBWSxJQUFJLElBQUk7Y0FFNUYsSUFBSSxDQUFDLFdBQVcsRUFBRWhKLFNBQVMsQ0FBQyxDQUFDQyxRQUFRLENBQUN5TixJQUFJLENBQUM0QixVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDbkUsQ0FBQyxFQUFFLENBQUM1QixJQUFJLENBQUMsQ0FBQztZQUVWLElBQUE1RixNQUFBLENBQUFXLFNBQVMsRUFDUixDQUFDUixLQUFLLENBQUM5SyxJQUFJLENBQUMsRUFDWixNQUFLO2NBQ0ppQyxVQUFVLENBQUNzSixVQUFVLENBQUMsTUFBTXFKLFdBQVcsQ0FBQ25KLE9BQU8sQ0FBQ3VKLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQztZQUM5RCxDQUFDLEVBQ0QsbUJBQW1CLENBQ25CO1lBRUQsTUFBTUMsZ0JBQWdCLEdBQUc7Y0FBRWhVLFFBQVEsRUFBRWMsUUFBUSxJQUFJZDtZQUFRLENBQUU7WUFDM0QsTUFBTWlVLGlCQUFpQixHQUFHblMsQ0FBQyxJQUFHO2NBQzdCLE1BQU07Z0JBQUV6RjtjQUFLLENBQUUsR0FBR3lGLENBQUMsQ0FBQzhSLE1BQU07Y0FDMUIsSUFBSSxDQUFDLFdBQVcsRUFBRWhTLFNBQVMsQ0FBQyxDQUFDQyxRQUFRLENBQUN4RixLQUFLLENBQUM2VSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtjQUMvRHBCLE9BQU8sQ0FBQ3pULEtBQUssQ0FBQztZQUNmLENBQUM7WUFDRCxNQUFNNlgsYUFBYSxHQUFHcFMsQ0FBQyxJQUFHO2NBQ3pCLElBQUlBLENBQUMsQ0FBQ3FTLEdBQUcsS0FBSyxPQUFPLEVBQUU7Y0FDdkIsTUFBTUMsRUFBRSxHQUFHQyxTQUFTLElBQUlBLFNBQVMsR0FBRyxJQUFJO2NBQ3hDLE1BQU1oWSxLQUFLLEdBQUd5RixDQUFDLENBQUM4UixNQUFNLENBQUN2WCxLQUFLLENBQUM2VSxVQUFVLENBQUMsSUFBSSxDQUFDO2NBQzdDLElBQUksQ0FBQyxFQUFFLEVBQUV0UCxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQ3hGLEtBQUssQ0FBQyxFQUFFO2NBQzNDeUYsQ0FBQyxDQUFDd1MsUUFBUSxHQUFHeEUsT0FBTyxDQUFDc0UsRUFBRSxDQUFDLEdBQUduRSxVQUFVLEVBQUU7WUFDeEMsQ0FBQztZQUVELE9BQ0N6RyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFnQixHQUM5QnRDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBQSxHQUNLbUksZ0JBQWdCO2NBQ3BCTyxJQUFJLEVBQUUsQ0FBQztjQUNQbFksS0FBSyxFQUFFaVQsSUFBSTtjQUNYa0YsUUFBUSxFQUFFUCxpQkFBaUI7Y0FDM0JRLFNBQVMsRUFBRVAsYUFBYTtjQUN4QlEsU0FBUyxFQUFFLElBQUk7Y0FDZjVJLFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0IxQixHQUFHLEVBQUV1SjtZQUFXLEVBQ2YsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQSxJQUFBbkssTUFBQSxHQUFBak4sT0FBQTtVQUNBLElBQUFvWSxTQUFBLEdBQUFwWSxPQUFBO1VBRkE7O1VBUU0sU0FBVWtYLEtBQUtBLENBQUM7WUFBRUM7VUFBTSxDQUFjO1lBQzNDLE1BQU1rQixTQUFTLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMvUyxRQUFRLENBQUM2UixNQUFNLENBQUM7WUFDdkQsTUFBTW1CLE9BQU8sR0FBR25CLE1BQU0sS0FBSyxTQUFTO1lBQ3BDLE1BQU0sQ0FBQ29CLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUFOLFNBQUEsQ0FBQU8sUUFBUSxFQUFDTixTQUFTLEVBQUVDLE9BQU8sQ0FBQztZQUM1RSxNQUFNTSxXQUFXLEdBQUdILE9BQU8sQ0FBQ0ksUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ3ZELE1BQU1DLGVBQWUsR0FBR1AsT0FBTyxDQUFDSyxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDM0QsT0FDQzdMLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTBCLEdBQ3hDdEMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxlQUFPLEdBQUd5SixlQUFlLEVBQUUsRSxJQUFTLEVBQ3BDOUwsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxlQUFPLEdBQUdzSixXQUFXLEVBQUUsQ0FBUSxDQUMxQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBM0wsTUFBQSxHQUFBak4sT0FBQTtVQURBOztVQUVBLE1BQU07WUFBRTZQLFFBQVE7WUFBRWQ7VUFBUyxDQUFFLEdBQUc5QixNQUFBLENBQUEzRixPQUFLO1VBRS9CLFNBQVVxUixRQUFRQSxDQUFDTixTQUFrQixFQUFFQyxPQUFnQjtZQUM1RCxNQUFNLENBQUNVLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdwSixRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRW5DZCxTQUFTLENBQUMsTUFBSztjQUNkLElBQUltSyxVQUEwQjtjQUU5QixJQUFJYixTQUFTLEVBQUU7Z0JBQ2RhLFVBQVUsR0FBR3BSLFdBQVcsQ0FBQyxNQUFLO2tCQUM3Qm1SLE9BQU8sQ0FBQ0UsUUFBUSxJQUFJQSxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Y0FHVCxPQUFPLE1BQUs7Z0JBQ1hwUixhQUFhLENBQUNtUixVQUFVLENBQUM7Y0FDMUIsQ0FBQztZQUNGLENBQUMsRUFBRSxDQUFDYixTQUFTLENBQUMsQ0FBQztZQUVmdEosU0FBUyxDQUFDLE1BQUs7Y0FDZCxJQUFJdUosT0FBTyxFQUFFO2dCQUNaVyxPQUFPLENBQUMsQ0FBQyxDQUFDOztZQUVaLENBQUMsRUFBRSxDQUFDWCxPQUFPLENBQUMsQ0FBQztZQUViLE1BQU1JLFlBQVksR0FBR00sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLE1BQU1QLE9BQU8sR0FBR1csSUFBSSxDQUFDQyxLQUFLLENBQUVMLElBQUksR0FBRyxHQUFHLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNUixPQUFPLEdBQUdZLElBQUksQ0FBQ0MsS0FBSyxDQUFFTCxJQUFJLEdBQUcsSUFBSSxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTVQsS0FBSyxHQUFHYSxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFekMsT0FBTyxDQUFDVCxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUM7VUFDL0M7Ozs7Ozs7Ozs7O1VDakNBOztVQUVBL1ksTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFtTixNQUFBLEdBQUFqTixPQUFBO1VBRU0sU0FBVTBTLFlBQVlBLENBQUE7WUFDM0IsT0FBT3pGLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsb0JBQWM7VUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQXJDLE1BQUEsR0FBQWpOLE9BQUE7VUFDQSxJQUFBc1osYUFBQSxHQUFBdFosT0FBQTtVQUVBLElBQUFvTixRQUFBLEdBQUFwTixPQUFBO1VBQ0EsSUFBQW1OLE1BQUEsR0FBQW5OLE9BQUE7VUFDQSxJQUFBa04sTUFBQSxHQUFBbE4sT0FBQTtVQUNBLElBQUF1WixNQUFBLEdBQUF2WixPQUFBO1VBQ0EsSUFBQXdaLE9BQUEsR0FBQXhaLE9BQUE7VUFFTSxTQUFVa1MsYUFBYUEsQ0FBQztZQUFFQztVQUFTLENBQTBCO1lBQ2xFLE1BQU07Y0FBRTdFLEtBQUs7Y0FBRW9FO1lBQWUsQ0FBRSxHQUFHLElBQUF0RSxRQUFBLENBQUFRLGNBQWMsR0FBRTtZQUNuRCxNQUFNO2NBQUUzRTtZQUFLLENBQUUsR0FBR3FFLEtBQUssQ0FBQ3hKLFFBQVEsQ0FBQ29DLE1BQU07WUFFdkMsTUFBTSxDQUFDdVQsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3pNLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDaEQsSUFBQTFDLE1BQUEsQ0FBQVcsU0FBUyxFQUFDLENBQUNSLEtBQUssQ0FBQ3hKLFFBQVEsQ0FBQyxFQUFFLE1BQUs7Y0FDaEM0VixVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ2YsQ0FBQyxDQUFDO1lBRUYsTUFBTUMsVUFBVSxHQUFHck0sS0FBSyxDQUFDeEosUUFBUSxDQUFDb0MsTUFBTSxDQUFDZ0MsTUFBTTtZQUMvQyxNQUFNMFIsV0FBVyxHQUFHLElBQUksR0FBRyxNQUFNLEdBQUcsU0FBUztZQUU3QyxJQUFJLENBQUMzUSxLQUFLLEVBQUU7Y0FDWCxNQUFNO2dCQUFFMUksUUFBUTtnQkFBRU07Y0FBTSxDQUFFLEdBQUd5TSxLQUFLLENBQUN4SixRQUFRLENBQUNvQyxNQUFNO2NBQ2xELE1BQU0yVCxNQUFNLEdBQUcsRUFBRTtjQUNqQixJQUFJdFosUUFBUSxFQUFFaUYsS0FBSyxFQUFFO2dCQUNwQnFVLE1BQU0sQ0FBQ2pPLElBQUksQ0FBQ3FCLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7a0JBQUtzSSxHQUFHLEVBQUM7Z0JBQWdCLEcsZ0NBQXlCclgsUUFBUSxDQUFDaUYsS0FBSyxDQUFDakMsT0FBTyxDQUFPLENBQUM7O2NBRTdGLElBQUkxQyxNQUFNLEVBQUUyRSxLQUFLLEVBQUU7Z0JBQ2xCcVUsTUFBTSxDQUFDak8sSUFBSSxDQUFDcUIsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtrQkFBS3NJLEdBQUcsRUFBQztnQkFBYyxHLG9DQUE2Qi9XLE1BQU0sQ0FBQzJFLEtBQUssQ0FBQ2pDLE9BQU8sQ0FBTyxDQUFDOztjQUc3RixPQUNDMEosTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtnQkFBS0MsU0FBUyxFQUFDO2NBQWlFLEdBQy9FdEMsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSw4QkFBd0IsRUFDdkJ1SyxNQUFNLENBQ0Y7O1lBSVIsTUFBTUMsVUFBVSxHQUFHQSxDQUFBLEtBQUs7Y0FDdkJ4TSxLQUFLLENBQUN4SixRQUFRLENBQUMrRCxLQUFLLEVBQUU7WUFDdkIsQ0FBQztZQUVELE1BQU1rUyxNQUFNLEdBQUdBLENBQUEsS0FBSztjQUNuQnpNLEtBQUssQ0FBQ3hKLFFBQVEsQ0FBQ21FLElBQUksRUFBRTtjQUNyQnlKLGVBQWUsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQztZQUNELE1BQU1zSSxPQUFPLEdBQUcxTSxLQUFLLENBQUN4SixRQUFRLENBQUM4QyxLQUFLLEdBQUcsUUFBUSxHQUFHLEtBQUs7WUFDdkQsT0FDQ3FHLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ2dLLGFBQUEsQ0FBQVcsZUFBZSxRQUNkOUgsU0FBUyxJQUNUbEYsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQSxDQUFDZ0ssYUFBQSxDQUFBWSxNQUFNLENBQUNDLEdBQUc7Y0FDVjVLLFNBQVMsRUFBQyxnQkFBZ0I7Y0FDMUI2SyxPQUFPLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO2dCQUFFQyxDQUFDLEVBQUU7Y0FBRSxDQUFFO2NBQzlCQyxPQUFPLEVBQUU7Z0JBQUVGLE9BQU8sRUFBRSxDQUFDO2dCQUFFQyxDQUFDLEVBQUU7Y0FBQyxDQUFFO2NBQzdCRSxJQUFJLEVBQUU7Z0JBQUVILE9BQU8sRUFBRSxDQUFDO2dCQUFFQyxDQUFDLEVBQUU7Y0FBRSxDQUFFO2NBQzNCRyxVQUFVLEVBQUU7Z0JBQUVqVSxRQUFRLEVBQUUsR0FBRztnQkFBRWtVLElBQUksRUFBRTtjQUFTO1lBQUUsR0FHOUN6TixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNpSyxNQUFBLENBQUFvQixLQUFLO2NBQUNwTCxTQUFTLEVBQUMsVUFBVTtjQUFDcUwsR0FBRyxFQUFDO1lBQXNCLEVBQUcsRUFDekQzTixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNrSyxPQUFBLENBQUFxQixjQUFjLE9BQUcsRUFFbEI1TixNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE2QixHQUMzQ3RDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ3BDLE1BQUEsQ0FBQXNDLFVBQVU7Y0FBQy9MLFFBQVEsRUFBRWtXLFVBQVUsS0FBSyxTQUFTO2NBQUVuTSxJQUFJLEVBQUV3TSxPQUFPO2NBQUV0SyxPQUFPLEVBQUVvSztZQUFVLEVBQUksRUFDdEY3TSxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBLENBQUNwQyxNQUFBLENBQUFzQyxVQUFVO2NBQUNELFNBQVMsRUFBQyxXQUFXO2NBQUMvQixJQUFJLEVBQUVvTSxXQUFXO2NBQUVsSyxPQUFPLEVBQUVxSztZQUFNLEVBQUksQ0FHbkUsQ0FFUCxDQUNnQjtVQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RUEsSUFBQTVaLFNBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFpTixNQUFBLEdBQUFqTixPQUFBO1VBQ0EsSUFBQThhLE1BQUEsR0FBQTlhLE9BQUE7VUFTTyxNQUFNK2EsWUFBWSxHQUFHQSxDQUFDO1lBQUU3VTtVQUFNLENBQWlDLEtBQUk7WUFDekUsTUFBTStELEtBQUssR0FBa0IsSUFBSTZRLE1BQUEsQ0FBQUUsS0FBSyxFQUFFO1lBQ3hDL1EsS0FBSyxDQUFDZ1IsTUFBTSxDQUFDO2NBQUUzVSxTQUFTLEVBQUUsRUFBRTtjQUFFNFUsUUFBUSxFQUFFLEVBQUU7Y0FBRUMsT0FBTyxFQUFFLEtBQUs7Y0FBRTNWLEtBQUssRUFBRSxLQUFLO1lBQUMsQ0FBRSxDQUFDO1lBQzVFLE1BQU07Y0FBRTRCO1lBQU0sQ0FBRSxHQUFHNkMsS0FBSztZQUV4QixJQUFBZ0QsTUFBQSxDQUFBOEIsU0FBUyxFQUFDLE1BQUs7Y0FDZDVPLFNBQUEsQ0FBQStHLE9BQU8sQ0FDTEMsT0FBTyxFQUFFLENBQ1RnRixJQUFJLENBQUMsTUFBSztnQkFDVi9FLE1BQU0sQ0FBQ2QsU0FBUyxHQUFHLENBQUMsR0FBR25HLFNBQUEsQ0FBQStHLE9BQU8sQ0FBQ0UsTUFBTSxFQUFFLENBQUM7Z0JBQ3hDQSxNQUFNLENBQUMrVCxPQUFPLEdBQUcsSUFBSTtnQkFDckJDLE1BQU0sQ0FBQ2piLFNBQUEsQ0FBQStHLE9BQU8sQ0FBQ0ksT0FBTyxFQUFFOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQztjQUNsQyxDQUFDLENBQUMsQ0FDRDRJLEtBQUssQ0FBQ2lQLEdBQUcsSUFBRztnQkFDWm5YLE9BQU8sQ0FBQ3NCLEtBQUssQ0FBQzZWLEdBQUcsQ0FBQztnQkFDbEJqVSxNQUFNLENBQUM1QixLQUFLLEdBQUcsa0NBQWtDO2NBQ2xELENBQUMsQ0FBQztZQUNKLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNNFYsTUFBTSxHQUFJNVgsRUFBVSxJQUFJO2NBQzdCNEQsTUFBTSxDQUFDOFQsUUFBUSxHQUFHMVgsRUFBRTtjQUNwQixNQUFNZ0UsTUFBTSxHQUFHSixNQUFNLENBQUNkLFNBQVMsQ0FBQ21CLElBQUksQ0FBQ0QsTUFBTSxJQUFJQSxNQUFNLENBQUNoRSxFQUFFLEtBQUtBLEVBQUUsQ0FBQztjQUNoRTBDLE1BQU0sQ0FBQzNGLFFBQVEsQ0FBQ2lILE1BQU0sR0FBR0EsTUFBTTtZQUNoQyxDQUFDO1lBRUQsTUFBTTBDLFFBQVEsR0FBSVcsS0FBMkMsSUFBSTtjQUNoRXVRLE1BQU0sQ0FBQ3ZRLEtBQUssQ0FBQ3dNLE1BQU0sQ0FBQ3ZYLEtBQUssQ0FBQztZQUMzQixDQUFDO1lBRUQsSUFBSSxDQUFDc0gsTUFBTSxDQUFDK1QsT0FBTyxFQUFFLE9BQU8sSUFBSTtZQUVoQyxPQUNDbE8sTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaEN0QyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQU9nTSxPQUFPLEVBQUM7WUFBZSxvQkFBdUIsRUFDckRyTyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQVE5TCxFQUFFLEVBQUMsZUFBZTtjQUFDMUQsS0FBSyxFQUFFc0gsTUFBTSxDQUFDOFQsUUFBUTtjQUFFakQsUUFBUSxFQUFFL047WUFBUSxHQUNuRTlDLE1BQU0sQ0FBQ2QsU0FBUyxDQUFDaVYsR0FBRyxDQUFDL1QsTUFBTSxJQUMzQnlGLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7Y0FBUXNJLEdBQUcsRUFBRXBRLE1BQU0sQ0FBQ2hFLEVBQUU7Y0FBRTFELEtBQUssRUFBRTBILE1BQU0sQ0FBQ2hFO1lBQUUsR0FDdENnRSxNQUFNLENBQUNnVSxLQUFLLENBRWQsQ0FBQyxDQUNNLENBQ0o7VUFFUixDQUFDO1VBQUMzYixPQUFBLENBQUFrYixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkRGLElBQUE5TixNQUFBLEdBQUFqTixPQUFBO1VBRU8sTUFBTXliLFNBQVMsR0FBR0EsQ0FBQztZQUFFQztVQUFLLENBQXNCLEtBQ3REek8sTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtZQUNDcU0sT0FBTyxFQUFDLFdBQVc7WUFDbkJDLEtBQUssRUFBQyxJQUFJO1lBQ1ZyRSxNQUFNLEVBQUMsSUFBSTtZQUNYc0UsSUFBSSxFQUFDLE1BQU07WUFDWEMsTUFBTSxFQUFDLGNBQWM7WUFDckJDLFdBQVcsRUFBQyxHQUFHO1lBQ2Z4TSxTQUFTLEVBQUM7VUFBUyxHQUVuQnRDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7WUFBTTBNLENBQUMsRUFBQztVQUE0USxFQUFHLEVBQ3RSTixLQUFLLElBQUl6TyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO1lBQU0yTSxFQUFFLEVBQUMsR0FBRztZQUFDQyxFQUFFLEVBQUMsR0FBRztZQUFDQyxFQUFFLEVBQUMsSUFBSTtZQUFDQyxFQUFFLEVBQUMsSUFBSTtZQUFDTixNQUFNLEVBQUMsY0FBYztZQUFDQyxXQUFXLEVBQUM7VUFBRyxFQUFHLENBRXZGO1VBQUNsYyxPQUFBLENBQUE0YixTQUFBLEdBQUFBLFNBQUE7VUFFSyxNQUFNWSxPQUFPLEdBQUdBLENBQUM7WUFBRUM7VUFBTyxDQUF3QixLQUN4RHJQLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7WUFDQ3FNLE9BQU8sRUFBQyxXQUFXO1lBQ25CQyxLQUFLLEVBQUMsSUFBSTtZQUNWckUsTUFBTSxFQUFDLElBQUk7WUFDWHNFLElBQUksRUFBQyxNQUFNO1lBQ1hDLE1BQU0sRUFBQyxjQUFjO1lBQ3JCQyxXQUFXLEVBQUMsR0FBRztZQUNmeE0sU0FBUyxFQUFDO1VBQVMsR0FFbkJ0QyxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO1lBQU0wTSxDQUFDLEVBQUM7VUFBa0QsRUFBRyxFQUM3RC9PLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7WUFBTTBNLENBQUMsRUFBQztVQUEyQixFQUFHLEVBQ3RDL08sTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtZQUFNMk0sRUFBRSxFQUFDLElBQUk7WUFBQ0MsRUFBRSxFQUFDLElBQUk7WUFBQ0MsRUFBRSxFQUFDLElBQUk7WUFBQ0MsRUFBRSxFQUFDO1VBQUksRUFBRyxFQUN4Q25QLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7WUFBTTJNLEVBQUUsRUFBQyxHQUFHO1lBQUNDLEVBQUUsRUFBQyxJQUFJO1lBQUNDLEVBQUUsRUFBQyxJQUFJO1lBQUNDLEVBQUUsRUFBQztVQUFJLEVBQUcsRUFDdENFLE9BQU8sSUFBSXJQLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7WUFBTTJNLEVBQUUsRUFBQyxHQUFHO1lBQUNDLEVBQUUsRUFBQyxHQUFHO1lBQUNDLEVBQUUsRUFBQyxJQUFJO1lBQUNDLEVBQUUsRUFBQyxJQUFJO1lBQUNHLGFBQWEsRUFBQztVQUFPLEVBQUcsQ0FFekU7VUFBQzFjLE9BQUEsQ0FBQXdjLE9BQUEsR0FBQUEsT0FBQTtVQUVLLE1BQU1HLFdBQVcsR0FBR0EsQ0FBQztZQUFFZDtVQUFLLENBQXNCLEtBQ3hEek8sTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtZQUNDcU0sT0FBTyxFQUFDLFdBQVc7WUFDbkJDLEtBQUssRUFBQyxJQUFJO1lBQ1ZyRSxNQUFNLEVBQUMsSUFBSTtZQUNYc0UsSUFBSSxFQUFDLE1BQU07WUFDWEMsTUFBTSxFQUFDLGNBQWM7WUFDckJDLFdBQVcsRUFBQyxHQUFHO1lBQ2Z4TSxTQUFTLEVBQUM7VUFBUyxHQUVuQnRDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7WUFBU21OLE1BQU0sRUFBQztVQUFtQyxFQUFHLEVBQ3REeFAsTUFBQSxDQUFBM0YsT0FBQSxDQUFBZ0ksYUFBQTtZQUFNME0sQ0FBQyxFQUFFTixLQUFLLEdBQUcsRUFBRSxHQUFHO1VBQXlELEVBQUksRUFDbEZBLEtBQUssSUFDTHpPLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQXJDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWlKLFFBQUEsUUFDQ3RELE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUE7WUFBTTJNLEVBQUUsRUFBQyxJQUFJO1lBQUNDLEVBQUUsRUFBQyxHQUFHO1lBQUNDLEVBQUUsRUFBQyxJQUFJO1lBQUNDLEVBQUUsRUFBQyxJQUFJO1lBQUNHLGFBQWEsRUFBQztVQUFPLEVBQUcsRUFDN0R0UCxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO1lBQU0yTSxFQUFFLEVBQUMsSUFBSTtZQUFDQyxFQUFFLEVBQUMsR0FBRztZQUFDQyxFQUFFLEVBQUMsSUFBSTtZQUFDQyxFQUFFLEVBQUMsSUFBSTtZQUFDRyxhQUFhLEVBQUM7VUFBTyxFQUFHLENBRTlELENBRUY7VUFBQzFjLE9BQUEsQ0FBQTJjLFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0REYsSUFBQXZQLE1BQUEsR0FBQWpOLE9BQUE7VUFDQSxJQUFBb04sUUFBQSxHQUFBcE4sT0FBQTtVQUVNLFNBQVU2YSxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRXZOO1lBQUssQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQVEsY0FBYyxHQUFFO1lBQ2xDLE1BQU07Y0FBRTFGO1lBQU0sQ0FBRSxHQUFHb0YsS0FBSyxDQUFDeEosUUFBUSxDQUFDb0MsTUFBTTtZQUV4QyxNQUFNd1csZ0JBQWdCLEdBQUdBLENBQUEsS0FBSztjQUM3QixNQUFNcmEsUUFBUSxHQUEyQjtnQkFDeENzYSxNQUFNLEVBQUUsZUFBZTtnQkFDdkJDLFVBQVUsRUFBRSxVQUFVO2dCQUN0QkMsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCQyxPQUFPLEVBQUUsWUFBWTtnQkFDckJDLE9BQU8sRUFBRSxHQUFHM0QsSUFBSSxDQUFDQyxLQUFLLENBQUMvTCxLQUFLLENBQUN4SixRQUFRLENBQUMwQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQzhHLEtBQUssQ0FBQ3hKLFFBQVEsQ0FBQzBDLFFBQVEsR0FBRyxFQUFFLEVBQ25GcVMsUUFBUSxFQUFFLENBQ1ZDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO2VBQ2xCO2NBQ0QsT0FBT3pXLFFBQVEsQ0FBQzZGLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDOUIsQ0FBQztZQUVELE9BQ0MrRSxNQUFBLENBQUEzRixPQUFBLENBQUFnSSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrQixHQUNoQ3RDLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsZUFBT29OLGdCQUFnQixFQUFFLENBQVEsQ0FDNUI7VUFFUjs7Ozs7Ozs7Ozs7VXpCekJBOztVQUVBL2MsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVMEJKQSxJQUFBbU4sTUFBQSxHQUFBak4sT0FBQTtVQUNBLElBQUFnZCxNQUFBLEdBQUFoZCxPQUFBO1VBRU0sU0FBVTJSLFVBQVVBLENBQUNuTyxFQUFFLEVBQUV4QyxRQUFRLEdBQUcsSUFBSSxFQUFFOEMsUUFBUSxHQUFHLElBQUk7WUFDOUQsTUFBTSxDQUFDRCxLQUFLLEVBQUVpTixRQUFRLENBQUMsR0FBRzdELE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDdkMsS0FBSyxFQUFFMlAsUUFBUSxDQUFDLEdBQUdoUSxNQUFBLENBQUEzRixPQUFLLENBQUN1SSxRQUFRLENBQWUsRUFBa0IsQ0FBQztZQUMxRSxNQUFNLENBQUM1RixLQUFLLEVBQUVpVCxRQUFRLENBQUMsR0FBR2pRLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTXNOLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCLE1BQU1DLE9BQU8sR0FBRyxJQUFJSixNQUFBLENBQUE3YSxZQUFZLENBQUNxQixFQUFFLEVBQUV4QyxRQUFRLEVBQUU4QyxRQUFRLENBQUM7Y0FDeEQsTUFBTW1VLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2dCQUNyQmlGLFFBQVEsQ0FBQztrQkFBRSxHQUFHRSxPQUFPLENBQUNDLGFBQWE7Z0JBQUUsQ0FBRSxDQUFDO2dCQUN4Q3ZNLFFBQVEsQ0FBQ3NNLE9BQU8sQ0FBQ3ZaLEtBQUssQ0FBQztjQUN4QixDQUFDO2NBQ0QsTUFBTXlaLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2dCQUNwQkYsT0FBTyxDQUFDcFYsR0FBRyxDQUFDLFFBQVEsRUFBRWlRLFFBQVEsQ0FBQztjQUNoQyxDQUFDO2NBQ0RtRixPQUFPLENBQUM5YixFQUFFLENBQUMsUUFBUSxFQUFFMlcsUUFBUSxDQUFDO2NBQzlCZ0YsUUFBUSxDQUFDRyxPQUFPLENBQUM7Y0FDakJ0TSxRQUFRLENBQUNzTSxPQUFPLENBQUN2WixLQUFLLENBQUM7Y0FDdkIsT0FBT3laLE9BQU87WUFDZixDQUFDO1lBQ0RyUSxNQUFBLENBQUEzRixPQUFLLENBQUN5SCxTQUFTLENBQUNvTyxRQUFRLEVBQUUsQ0FBQzNaLEVBQUUsQ0FBQyxDQUFDO1lBRS9CLE9BQU87Y0FBRUssS0FBSztjQUFFeUo7WUFBSyxDQUFFO1VBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBTCxNQUFBLEdBQUFqTixPQUFBO1VBQ0EsSUFBQW1OLE1BQUEsR0FBQW5OLE9BQUE7VUFDQSxJQUFBc1MsS0FBQSxHQUFBdFMsT0FBQTtVQUNBLElBQUFvTixRQUFBLEdBQUFwTixPQUFBO1VBQ0EsSUFBQXVTLFNBQUEsR0FBQXZTLE9BQUE7VUFDQSxJQUFBd1MsU0FBQSxHQUFBeFMsT0FBQTtVQUVBOzs7OztVQUtNLFNBQVV1ZCxJQUFJQSxDQUFDO1lBQUVqUSxLQUFLO1lBQUUsR0FBR2lFO1VBQUssQ0FBRTtZQUN2QyxNQUFNLENBQUNoTixRQUFRLEVBQUUrTyxXQUFXLENBQUMsR0FBR3JHLE1BQUEsQ0FBQTNGLE9BQUssQ0FBQ3VJLFFBQVEsQ0FBQ3ZDLEtBQUssQ0FBQy9JLFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUNWLEtBQUssRUFBRWlOLFFBQVEsQ0FBQyxHQUFHN0QsTUFBQSxDQUFBM0YsT0FBSyxDQUFDdUksUUFBUSxDQUFDdkMsS0FBSyxDQUFDekosS0FBSyxDQUFDO1lBQ3JELE1BQU0ySixJQUFJLEdBQUcrRCxLQUFLLENBQUM3RCxVQUFVLENBQUMwQixHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3pDLE1BQU0sQ0FBQ3pCLGNBQWMsRUFBRTZELGlCQUFpQixDQUFDLEdBQUd2RSxNQUFBLENBQUEzRixPQUFLLENBQUN1SSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pFLE1BQU07Y0FDTDlMLFFBQVE7Y0FDUjFCLFFBQVE7Y0FDUk0sS0FBSztjQUNMTSxZQUFZLEVBQUU7Z0JBQUVwQztjQUFNO1lBQUUsQ0FDeEIsR0FBR3lNLEtBQUs7WUFFVCxJQUFBSCxNQUFBLENBQUFXLFNBQVMsRUFBQyxDQUFDUixLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCd0QsUUFBUSxDQUFDeEQsS0FBSyxDQUFDekosS0FBSyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztZQUVGLE1BQU1pTyxZQUFZLEdBQUc7Y0FDcEJOLGlCQUFpQixFQUFFMVIsS0FBSyxJQUFHO2dCQUMxQixJQUFJLENBQUNBLEtBQUssRUFBRW9FLE9BQU8sQ0FBQzZOLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQztnQkFDbkVQLGlCQUFpQixDQUFDMVIsS0FBSyxDQUFDO2NBQ3pCLENBQUM7Y0FDRDZOLGNBQWM7Y0FDZEwsS0FBSztjQUNMM0ssS0FBSyxFQUFFMkssS0FBSyxDQUFDM0ssS0FBSztjQUNsQm9CLFFBQVE7Y0FDUitMLFVBQVUsRUFBRXRDLElBQUk7Y0FDaEJuTCxRQUFRO2NBQ1J4QixNQUFNO2NBQ05nRCxLQUFLLEVBQUV5SixLQUFLLENBQUN6SixLQUFLO2NBQ2xCNkosVUFBVSxFQUFFNkQsS0FBSyxDQUFDN0Q7YUFDbEI7WUFFRCxNQUFNNEMsT0FBTyxHQUFHLENBQUNoRCxLQUFLLENBQUNqSyxRQUFRLEdBQUdpUCxLQUFBLENBQUE5TixJQUFJLEdBQUdnTyxTQUFBLENBQUFFLFlBQVk7WUFDckQsTUFBTTZLLElBQUksR0FBRzFaLEtBQUssR0FBR3lNLE9BQU8sR0FBR2lDLFNBQUEsQ0FBQTdCLFlBQVk7WUFFM0MsT0FDQ3pELE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ2xDLFFBQUEsQ0FBQTRFLFdBQVcsQ0FBQ0MsUUFBUTtjQUFDblMsS0FBSyxFQUFFZ1M7WUFBWSxHQUN4QzdFLE1BQUEsQ0FBQTNGLE9BQUEsQ0FBQWdJLGFBQUEsQ0FBQ2lPLElBQUksT0FBRyxDQUNjO1VBRXpCIiwiaWdub3JlTGlzdCI6W119