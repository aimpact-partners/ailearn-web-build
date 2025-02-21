System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/reactive@0.0.1/model", "@aimpact/chat-sdk@1.4.1/voice", "@aimpact/chat-sdk@1.4.1/wrapper", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/agents-api@0.4.0/realtime/client", "@aimpact/agents-api@0.4.0/realtime/client/conversation", "@aimpact/agents-api@0.4.0/realtime/audio/recorder", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/chat-sdk@1.4.1/messages", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/chat-sdk@1.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/agents-api@0.4.0/realtime/widgets/state"], function (_export, _context3) {
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
        hash: 2940858831,
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
              const languages = {
                en: 'en-US',
                es: 'es-MX'
              };
              language = language ?? _wrapper.AppWrapper.language;
              this.#currentPlayer = new this.#players.web({
                language: languages[language],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwiQXBwV3JhcHBlciIsInJhdGUiLCJhdWRpb1NwZWVkIiwib24iLCJsaXN0ZW5BcHBDaGFuZ2VzIiwic2V0Iiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwidHJpZ2dlciIsIl9jb3JlIiwiX2F1ZGlvIiwiX3Nlc3Npb24iLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfcmVhbHRpbWUiLCJTdG9yZU1hbmFnZXIiLCJFWFRFTlNJT05TIiwibWVzc2FnZXMiLCJpdGVtcyIsImNhdGVnb3J5IiwiY2hhdCIsIm1vZGVsIiwiY2hhdHMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRleHRzTW9kZWwiLCJhdWRpbyIsImF1ZGlvTWFuYWdlciIsInByb2Nlc3NUcmFuc2NyaXB0aW9uIiwicHJvY2Nlc3NUcmFuc2NyaXB0aW9uIiwic2VsZWN0ZWRNb2RlbCIsIm5vdEZvdW5kIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlIiwiaWQiLCJkaXNhYmxlZCIsInRyaWdnZXJFdmVudCIsImV4dGVuc2lvbnMiLCJNYXAiLCJyZWFkeSIsInJlYWx0aW1lIiwiYXV0b3BsYXkiLCJSZWFsdGltZVN0b3JlIiwibG9hZCIsImNvbnNvbGUiLCJ3YXJuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwibG9nZ2VkIiwiZmV0Y2hpbmciLCJDaGF0IiwiZ2xvYmFsVGhpcyIsImxvYWRBbGwiLCJjaGF0SWQiLCJjdXJyZW50Q2hhdCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsImxvZyIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic291cmNlIiwic3RyZWFtIiwic3RhcnRUaW1lIiwiaW5pdFByb21pc2UiLCJzdG9wUHJvbWlzZSIsImF1ZGlvQ29udGV4dCIsInJlY29yZGluZ1Byb21pc2UiLCJtZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwicmVjb3JkaW5nIiwidmFsaWQiLCJhbmFseXNlciIsInNwZWVjaFJlY29nbml0aW9uIiwidHJhbnNjcmlwdGlvbiIsInByb21pc2VTcGVlY2giLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25PYnNlcnZlciIsInBlcm1pc3Npb25TdGF0ZSIsImhhc1Blcm1pc3Npb25zIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwicXVlcnkiLCJzdGF0ZSIsIm9uY2hhbmdlIiwib25DaGFuZ2VTdGF0dXMiLCJiaW5kIiwiI29uQ2hhbmdlU3RhdHVzIiwiZ2V0U3BlZWNoUmVjb2duaXRpb24iLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJQZW5kaW5nUHJvbWlzZSIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsImkiLCJyZXN1bHRJbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJpc0ZpbmFsIiwidHJhbnNjcmlwdCIsInJlc29sdmUiLCJvbmVycm9yIiwic3RhcnQiLCJvbkRhdGFBdmFpbGFibGUiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJzdGFydFJlY29yZGluZyIsIiNzdGFydFJlY29yZGluZyIsInNwZWNzIiwiTWVkaWFSZWNvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXNlIiwidGhlbiIsImNhdGNoIiwicmVqZWN0IiwiZmluYWxseSIsIm9uU3RyZWFtIiwib25FcnJvciIsInN0b3BTdHJlYW0iLCJraW5kIiwibWljcm9waG9uZSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiZGlzY29ubmVjdCIsIkJsb2IiLCJ0eXBlIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsIl9yZWFjdCIsIl9pY29ucyIsIl9ob29rcyIsIl9jb250ZXh0IiwiQmFja0Fycm93Iiwic3RvcmUiLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwiYXR0cmlidXRlcyIsInNjcm9sbFBvc2l0aW9uIiwidXNlQ2hhdENvbnRleHQiLCJyZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0IiwiY29udGFpbmVyIiwiY3VycmVudCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiZGlzdGFuY2VGcm9tQm90dG9tIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ29Ub0JvdHRvbSIsImFkZCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJnZXQiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX21lc3NhZ2VzIiwicmVhZGVyIiwidXNlU3RhdGUiLCJzeXN0ZW1JY29uIiwiZW1wdHkiLCJzZXRNZXNzYWdlcyIsInVwZGF0ZVNjcm9sbCIsInNldFVwZGF0ZVNjcm9sbCIsIm5vdyIsIm9uTmV3TWVzc2FnZSIsImNsc0NvbnRlbnQiLCJDb250cm9sIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIl9jb21wb25lbnRzIiwiQ2hhdFNrZWxldG9uIiwiU3Bpbm5lciIsImFjdGl2ZSIsInVzZUV4dGVuc2lvbiIsInNldFJlYWR5Iiwid2ViQ29tcG9uZW50TmFtZSIsImNvbnRyb2wiLCJvblJlYWR5IiwiX3VzZU1hbmFnZXIiLCJfY29udGFpbmVyIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsImNoaWxkcmVuIiwic2tlbGV0b24iLCJwcm9wcyIsInNldFNjcm9sbFBvc2l0aW9uIiwic2hvd1JlYWx0aW1lIiwic2V0U2hvd1JlYWx0aW1lIiwidXNlTWFuYWdlciIsIm9iaiIsIlNrZWxldG9uQ29udHJvbCIsImNvbnRleHRWYWx1ZSIsInRyYWNlIiwiQ2hhdENvbnRleHQiLCJQcm92aWRlciIsIlJlYWx0aW1lUGFuZWwiLCJpc1Zpc2libGUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQ2hhdE5vdEZvdW5kIiwiX3JlY29yZGluZyIsIklucHV0QWN0aW9uQnV0dG9uIiwiYnV0dG9uSXNEaXNhYmxlZCIsIm9uU3VibWl0IiwidGV4dCIsInVzZUlucHV0Q29udGV4dCIsIkFwcEljb25CdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dEZvcm0iLCJzZXRSZWNvcmRpbmciLCJzZXRGZXRjaGluZyIsInNldFRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZVNlbmQiLCJfZm9ybSIsIl90ZXh0SW5wdXQiLCJfYWN0aW9uQnV0dG9uIiwiX2NvbnRleHQyIiwiX3VzZUlucHV0Rm9ybSIsIkFnZW50c0NoYXRJbnB1dCIsImlzV2FpdGluZyIsImF1dG9UcmFuc2NyaWJlIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ3YWl0aW5nUmVzcG9uc2UiLCJpc0ZldGNoaW5nIiwiaXNEaXNhYmxlZCIsImF0dHJzIiwiY29udGFpbmVyQXR0cnMiLCJjb250cm9sQXR0cnMiLCJyZXBsYWNlQWxsIiwidHJpbSIsIm9uQ2xpY2tTcGVlY2giLCJGb3JtIiwiVGV4dElucHV0IiwiX21vZGFsIiwiUGVybWlzc2lvbnNFcnJvck1vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInNldEl0ZW0iLCJwbGF5QWN0aW9uIiwib25DbG9zZUVycm9yIiwiUGxheWVyIiwiQnV0dG9uIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdGltZXIiLCJfaWNvbnMyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzZXREaXNhYmxlZCIsImNhbmNlbCIsIlRpbWVyIiwiYWN0aW9uIiwidGV4dEFyZWFSZWYiLCJ0YXJnZXQiLCJzdHlsZSIsImhlaWdodCIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJyb3dzIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwicHJldlRpbWUiLCJNYXRoIiwiZmxvb3IiLCJfZnJhbWVyTW90aW9uIiwiX2ltYWdlIiwiX3N0YXR1cyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwiY2FsbFN0YXR1cyIsInNwZWFrZXJJY29uIiwiZXJyb3JzIiwib25NaWNDbGljayIsImhhbmd1cCIsIm1pY0ljb24iLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiSW1hZ2UiLCJzcmMiLCJSZWFsdGltZVN0YXR1cyIsIl9zdGF0ZSIsIlNlbGVjdERldmljZSIsIlN0YXRlIiwiZGVmaW5lIiwic2VsZWN0ZWQiLCJmZXRjaGVkIiwic2VsZWN0IiwiZXhjIiwiaHRtbEZvciIsIm1hcCIsImxhYmVsIiwiUGhvbmVJY29uIiwiaXNPZmYiLCJ2aWV3Qm94Iiwid2lkdGgiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJNaWNJY29uIiwiaXNNdXRlZCIsInN0cm9rZUxpbmVjYXAiLCJTcGVha2VySWNvbiIsInBvaW50cyIsImdldFN0YXR1c01lc3NhZ2UiLCJjbG9zZWQiLCJjb25uZWN0aW5nIiwib3BlbiIsImNsb3NpbmciLCJjcmVhdGVkIiwiX3N0b3JlIiwic2V0U3RvcmUiLCJzZXRTdGF0ZSIsImNhbGxiYWNrIiwibWFuYWdlciIsImdldFByb3BlcnRpZXMiLCJjbGVhblVwIiwiVmlldyJdLCJzb3VyY2VzIjpbIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS9yZWFsdGltZS50cyIsIi90cy9zdG9yZS9yZWNvcmRlci50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9jaGF0L2JhY2stYXJyb3cudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvdmlld3MvY2hhdC91c2UtZXh0ZW5zaW9uLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9hY3Rpb24tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbnB1dC9ob29rcy91c2UtaW5wdXQtZm9ybS50c3giLCIvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL2FnZW50cy1pbnB1dC50c3giLCIvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL2RldmljZXMudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL2ljb25zLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL3VzZS1tYW5hZ2VyLnRzeCIsIi90cy92aWV3cy93aWRnZXQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBR0EsSUFBQUcsU0FBQSxHQUFBSCxPQUFBO1VBS087VUFBWSxNQUFPSSxZQUFhLFNBQVFMLE1BQUEsQ0FBQU0sYUFBcUI7WUFHbkUsQ0FBQUMsTUFBTztZQUNQLENBQUFDLFFBQVM7WUFFVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLE9BQVEsR0FBRztjQUNWQyxHQUFHLEVBQUVSLE1BQUEsQ0FBQVMsS0FB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