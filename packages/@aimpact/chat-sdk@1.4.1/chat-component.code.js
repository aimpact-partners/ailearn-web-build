System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "@aimpact/chat-sdk@1.4.1/voice", "@aimpact/chat-sdk@1.4.1/wrapper", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.4.1/messages", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/chat-sdk@1.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, AudioManager, Recorder, Chat, AgentsChatContainer, ChatContext, useChatContext, AgentsChatPanel, AgentsChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, IAgentsContainerProps, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_9 = _pragmateUi100Beta7Icons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk141Messages) {
      dependency_11 = _aimpactChatSdk141Messages;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_aimpactChatSdk141ComponentsIcons) {
      dependency_13 = _aimpactChatSdk141ComponentsIcons;
    }, function (_pragmateUi100Beta7Form) {
      dependency_14 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_15 = _pragmateUi100Beta7Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@aimpact/reactive/model', dependency_1], ['@aimpact/chat-sdk/voice', dependency_2], ['@aimpact/chat-sdk/wrapper', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['react', dependency_8], ['pragmate-ui/icons', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat-sdk/messages', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/chat-sdk/components/icons', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/modal', dependency_15]]);
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
        hash: 4163969258,
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
              return super.ready && this.#texts.ready;
            }
            constructor(id) {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#id = id;
              this.reactiveProps(['waitingResponse', 'autoplay']);
              this.autoplay = true;
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
              this.#chat = chat;
              globalThis.chat = chat;
              this.#messages = chat.messages;
              await chat.loadAll({
                id
              });
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
        hash: 773339473,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentsChatContainer = AgentsChatContainer;
          var _react = require("react");
          var _useManager = require("./use-manager");
          var _context = require("./context");
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
            const {
              ready,
              store
            } = (0, _useManager.useManager)(props.id);
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
              skeleton,
              messages,
              player,
              attributes: props.attributes
            };
            return _react.default.createElement(_context.ChatContext.Provider, {
              value: contextValue
            }, children);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3905491579,
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
        hash: 1223162692,
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
              recorder
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
              console.log(2);
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
            }), _react.default.createElement(_actionButton.InputActionButton, {
              buttonIsDisabled: buttonIsDisabled
            }))));
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
        hash: 3726613334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useManager = useManager;
          var _react = require("react");
          var _store = require("../store");
          function useManager(id) {
            const [ready, setReady] = _react.default.useState(false);
            const [store, setStore] = _react.default.useState({});
            const [state, setState] = _react.default.useState({});
            const callback = () => {
              const manager = new _store.StoreManager(id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlN0b3JlTWFuYWdlciIsIkVYVEVOU0lPTlMiLCJtZXNzYWdlcyIsIml0ZW1zIiwiY2F0ZWdvcnkiLCJjaGF0IiwibW9kZWwiLCJjaGF0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwicHJvY2Vzc1RyYW5zY3JpcHRpb24iLCJwcm9jY2Vzc1RyYW5zY3JpcHRpb24iLCJzZWxlY3RlZE1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInJlYWR5IiwiYXV0b3BsYXkiLCJsb2FkIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJmZXRjaGluZyIsIkNoYXQiLCJnbG9iYWxUaGlzIiwibG9hZEFsbCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJkZWZhdWx0Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsImluaXRpYWxpc2VkIiwic291cmNlIiwic3RyZWFtIiwic3RhcnRUaW1lIiwiaW5pdFByb21pc2UiLCJzdG9wUHJvbWlzZSIsImF1ZGlvQ29udGV4dCIsInJlY29yZGluZ1Byb21pc2UiLCJtZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwic3RhdHVzIiwicmVjb3JkaW5nIiwidmFsaWQiLCJhbmFseXNlciIsInNwZWVjaFJlY29nbml0aW9uIiwidHJhbnNjcmlwdGlvbiIsInByb21pc2VTcGVlY2giLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25PYnNlcnZlciIsInBlcm1pc3Npb25TdGF0ZSIsImluaXQiLCJoYXNQZXJtaXNzaW9ucyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInF1ZXJ5Iiwic3RhdGUiLCJvbmNoYW5nZSIsIm9uQ2hhbmdlU3RhdHVzIiwiYmluZCIsIiNvbkNoYW5nZVN0YXR1cyIsImdldFNwZWVjaFJlY29nbml0aW9uIiwibG9nIiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJsYW5nIiwiY29udGludW91cyIsImludGVyaW1SZXN1bHRzIiwiUGVuZGluZ1Byb21pc2UiLCJvbnJlc3VsdCIsImV2ZW50IiwiaW50ZXJpbVRyYW5zY3JpcHQiLCJmaW5hbFRyYW5zY3JpcHQiLCJpIiwicmVzdWx0SW5kZXgiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaXNGaW5hbCIsInRyYW5zY3JpcHQiLCJyZXNvbHZlIiwib25lcnJvciIsInN0YXJ0Iiwib25EYXRhQXZhaWxhYmxlIiwiZGF0YSIsInNpemUiLCJwdXNoIiwic3RhcnRSZWNvcmRpbmciLCIjc3RhcnRSZWNvcmRpbmciLCJzcGVjcyIsIk1lZGlhUmVjb3JkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGlzZSIsInRoZW4iLCJjYXRjaCIsInJlamVjdCIsImZpbmFsbHkiLCJyZWNvcmQiLCJvblN0cmVhbSIsIm9uRXJyb3IiLCJzdG9wU3RyZWFtIiwia2luZCIsImNsb3NlIiwibWljcm9waG9uZSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiZGlzY29ubmVjdCIsIkJsb2IiLCJ0eXBlIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsIl9yZWFjdCIsIl9pY29ucyIsIl9ob29rcyIsIl9jb250ZXh0IiwiQmFja0Fycm93Iiwic3RvcmUiLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwiYXR0cmlidXRlcyIsInNjcm9sbFBvc2l0aW9uIiwidXNlQ2hhdENvbnRleHQiLCJyZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0IiwiY29udGFpbmVyIiwiY3VycmVudCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiZGlzdGFuY2VGcm9tQm90dG9tIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ29Ub0JvdHRvbSIsImFkZCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJnZXQiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX21lc3NhZ2VzIiwicmVhZGVyIiwidXNlU3RhdGUiLCJzeXN0ZW1JY29uIiwiZW1wdHkiLCJzZXRNZXNzYWdlcyIsIm9uTmV3TWVzc2FnZSIsImNsc0NvbnRlbnQiLCJDb250cm9sIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIl9jb21wb25lbnRzIiwiQ2hhdFNrZWxldG9uIiwiU3Bpbm5lciIsImFjdGl2ZSIsInVzZUV4dGVuc2lvbiIsInNldFJlYWR5Iiwid2ViQ29tcG9uZW50TmFtZSIsImNvbnRyb2wiLCJvblJlYWR5IiwiX3VzZU1hbmFnZXIiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJza2VsZXRvbiIsInByb3BzIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJ1c2VNYW5hZ2VyIiwib2JqIiwiU2tlbGV0b25Db250cm9sIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDaGF0Q29udGV4dCIsIlByb3ZpZGVyIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIkFnZW50c0NoYXRQYW5lbCIsIkNoYXROb3RGb3VuZCIsIl9yZWNvcmRpbmciLCJJbnB1dEFjdGlvbkJ1dHRvbiIsImJ1dHRvbklzRGlzYWJsZWQiLCJvblN1Ym1pdCIsInRleHQiLCJ1c2VJbnB1dENvbnRleHQiLCJBcHBJY29uQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRGb3JtIiwic2V0UmVjb3JkaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRUZXh0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVTZW5kIiwiX2Zvcm0iLCJfdGV4dElucHV0IiwiX2FjdGlvbkJ1dHRvbiIsIl9jb250ZXh0MiIsIl91c2VJbnB1dEZvcm0iLCJBZ2VudHNDaGF0SW5wdXQiLCJpc1dhaXRpbmciLCJhdXRvVHJhbnNjcmliZSIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwid2FpdGluZ1Jlc3BvbnNlIiwiaXNGZXRjaGluZyIsImlzRGlzYWJsZWQiLCJhdHRycyIsImNvbnRhaW5lckF0dHJzIiwiY29udHJvbEF0dHJzIiwicmVwbGFjZUFsbCIsInRyaW0iLCJGb3JtIiwiVGV4dElucHV0IiwiX21vZGFsIiwiUGVybWlzc2lvbnNFcnJvck1vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInNldEl0ZW0iLCJwbGF5QWN0aW9uIiwib25DbG9zZUVycm9yIiwiUGxheWVyIiwiQnV0dG9uIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdGltZXIiLCJfaWNvbnMyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzZXREaXNhYmxlZCIsImNhbmNlbCIsIlRpbWVyIiwiYWN0aW9uIiwidGV4dEFyZWFSZWYiLCJ0YXJnZXQiLCJzdHlsZSIsImhlaWdodCIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJyb3dzIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwiY2FsbGJhY2siLCJtYW5hZ2VyIiwiZ2V0UHJvcGVydGllcyIsImNsZWFuVXAiLCJvZmYiLCJWaWV3Il0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2FjdGlvbi1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2hvb2tzL3VzZS1pbnB1dC1mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvYWdlbnRzLWlucHV0LnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4IiwiL3RzL3ZpZXdzL3VzZS1tYW5hZ2VyLnRzeCIsIi90cy92aWV3cy93aWRnZXQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBR0EsSUFBQUcsU0FBQSxHQUFBSCxPQUFBO1VBS087VUFBWSxNQUFPSSxZQUFhLFNBQVFMLE1BQUEsQ0FBQU0sYUFBcUI7WUFHbkUsQ0FBQUMsTUFBTztZQUNQLENBQUFDLFFBQVM7WUFFVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLE9BQVEsR0FBRztjQUNWQyxHQUFHLEVBQUVSLE1BQUEsQ0FBQVMsS0FBSztjQUNWQyxHQUFHLEVBQUVWLE1BQUEsQ0FBQVcsUUFBUSxDQUFDO2FBQ2Q7WUFFRCxDQUFBQyxNQUFPLEdBQUcsS0FBSztZQUNmLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQyxhQUFjO1lBQzNCO1lBRUEsQ0FBQUEsYUFBYztZQUNkQyxZQUFZVCxNQUFNO2NBQ2pCLEtBQUssQ0FBQyxFQUFFLENBQUM7Y0FDVCxJQUFJLENBQUMsQ0FBQUMsUUFBUyxHQUFHLElBQUlKLFNBQUEsQ0FBQWEsUUFBUSxFQUFFO2NBQy9CLElBQUksQ0FBQyxDQUFBVixNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDVyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUVoQyxJQUFJLENBQUMsQ0FBQUgsYUFBYyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUFOLE9BQVEsQ0FBQ0MsR0FBRyxDQUFDO2dCQUMzQ1MsUUFBUSxFQUFFaEIsUUFBQSxDQUFBaUIsVUFBVSxDQUFDRCxRQUFRO2dCQUM3QkUsSUFBSSxFQUFFbEIsUUFBQSxDQUFBaUIsVUFBVSxDQUFDRTtlQUNqQixDQUFDO2NBRUZuQixRQUFBLENBQUFpQixVQUFVLENBQUNHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDO1lBQzVEO1lBRUFBLGdCQUFnQixHQUFHQSxDQUFBLEtBQUs7Y0FDdkIsTUFBTTtnQkFBRUgsSUFBSTtnQkFBRUY7Y0FBUSxDQUFFLEdBQUdoQixRQUFBLENBQUFpQixVQUFVO2NBQ3JDLElBQUksQ0FBQyxDQUFBTCxhQUFjLENBQUNVLEdBQUcsQ0FBQztnQkFBRUosSUFBSTtnQkFBRUY7Y0FBUSxDQUFFLENBQUM7WUFDNUMsQ0FBQztZQUVETyxZQUFZQSxDQUFDQyxJQUFJO2NBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWxCLE9BQVEsQ0FBQ2tCLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLFVBQVVELElBQUksWUFBWSxDQUFDO2NBRXJFLElBQUksQ0FBQyxDQUFBYixNQUFPLEdBQUdhLElBQUk7Y0FDbkIsSUFBSSxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCOztVQUNBL0IsT0FBQSxDQUFBTyxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeERELElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE2QixLQUFBLEdBQUE3QixPQUFBO1VBRUEsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQThCLE1BQUEsR0FBQTlCLE9BQUE7VUFFQSxJQUFBK0IsUUFBQSxHQUFBL0IsT0FBQTtVQUNBLElBQUFnQyxNQUFBLEdBQUFoQyxPQUFBO1VBQ0EsSUFBQWlDLGVBQUEsR0FBQWpDLE9BQUE7VUFHTSxNQUFPa0MsWUFBYSxTQUFRbkMsTUFBQSxDQUFBTSxhQUFxQjtZQUt0RCxDQUFBOEIsVUFBVyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQzVCLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUyxFQUFFQyxLQUFLO1lBQzdCO1lBRUEsQ0FBQVgsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBRUEsQ0FBQVksUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQUMsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBRUEsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFELElBQUs7WUFDbEI7WUFDQSxDQUFBRSxLQUFNLEdBQUd2QyxRQUFBLENBQUFpQixVQUFVLENBQUNzQixLQUFLO1lBQ3pCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLENBQUNKLEtBQUssSUFBSSxFQUFFO1lBQy9CO1lBRUEsQ0FBQUssS0FBTSxHQUErQixJQUFJVixNQUFBLENBQUFXLFlBQVksQ0FBQ1YsZUFBQSxDQUFBVyxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN2RSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUosS0FBTTtZQUNuQjtZQUNBLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUU1QyxLQUFLO1lBQzFCO1lBQ0EsQ0FBQWlELEtBQU0sR0FBaUIsSUFBSWpCLE1BQUEsQ0FBQTFCLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDN0MsSUFBSTRDLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBRCxLQUFNO1lBQ25CO1lBRUEsQ0FBQUUsb0JBQXFCLEdBQUcsS0FBSztZQUM3QixJQUFJQyxxQkFBcUJBLENBQUE7Y0FDeEIsT0FBTyxJQUFJLENBQUMsQ0FBQUQsb0JBQXFCO1lBQ2xDO1lBRUEsQ0FBQUUsYUFBYyxHQUFHLE9BQU87WUFDeEIsSUFBSUEsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzNCO1lBQ0EsSUFBSUEsYUFBYUEsQ0FBQ1gsS0FBSztjQUN0QixJQUFJLENBQUMsQ0FBQVcsYUFBYyxHQUFHWCxLQUFLO1lBQzVCO1lBRUEsQ0FBQVksUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsSUFBSUEsUUFBUUEsQ0FBQ0EsUUFBUTtjQUNwQixJQUFJLENBQUMsQ0FBQUEsUUFBUyxHQUFHQSxRQUFRO1lBQzFCO1lBRUEsQ0FBQUMsY0FBZTtZQUNmLElBQUlBLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsY0FBZTtZQUM1QjtZQUVBLElBQUlBLGNBQWNBLENBQUNDLE9BQU87Y0FDekIsSUFBSUEsT0FBTyxFQUFFQyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUFGLGNBQWUsRUFBRUUsRUFBRSxFQUFFO2NBQzlDLElBQUksQ0FBQyxDQUFBRixjQUFlLEdBQUdDLE9BQU87WUFDL0I7WUFFQSxDQUFBRSxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxJQUFJQSxRQUFRQSxDQUFDQSxRQUFRO2NBQ3BCLElBQUksSUFBSSxDQUFDLENBQUFBLFFBQVMsS0FBS0EsUUFBUSxFQUFFO2NBQ2pDLElBQUksQ0FBQyxDQUFBQSxRQUFTLEdBQUdBLFFBQVE7Y0FDekIsSUFBSSxDQUFDQyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzVCO1lBRUEsQ0FBQUMsVUFBVyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUN2QixJQUFJRCxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUNBLENBQUFILEVBQUc7WUFFSCxJQUFJSyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQWxCLEtBQU0sQ0FBQ2tCLEtBQUs7WUFDeEM7WUFFQTdDLFlBQVl3QyxFQUFFO2NBQ2IsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFiLEtBQU0sQ0FBQ3BCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDbUMsWUFBWSxDQUFDO2NBQzNDLElBQUksQ0FBQyxDQUFBRixFQUFHLEdBQUdBLEVBQUU7Y0FDYixJQUFJLENBQUN0QyxhQUFhLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztjQUNuRCxJQUFJLENBQUM0QyxRQUFRLEdBQUcsSUFBSTtjQUVwQixJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQVAsRUFBRyxDQUFDO1lBQ3BCO1lBRUFPLElBQUksR0FBRyxNQUFPUCxFQUFVLElBQUk7Y0FDM0IsSUFBSSxDQUFDQSxFQUFFLEVBQUU7Z0JBQ1JRLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLDJDQUEyQyxDQUFDO2dCQUN6RCxLQUFLLENBQUNKLEtBQUssR0FBRyxJQUFJO2dCQUNsQixJQUFJLENBQUNSLFFBQVEsR0FBRyxJQUFJO2dCQUNwQjs7Y0FHRCxJQUFJLENBQUNyQixRQUFBLENBQUFrQyxjQUFjLENBQUNDLElBQUksRUFBRUMsTUFBTSxFQUFFO2dCQUNqQ3BDLFFBQUEsQ0FBQWtDLGNBQWMsQ0FBQzNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDd0MsSUFBSSxDQUFDO2dCQUNyQzs7Y0FHRCxJQUFJLENBQUNNLFFBQVEsR0FBRyxJQUFJO2NBRXBCLE1BQU03QixJQUFJLEdBQUcsSUFBSVYsS0FBQSxDQUFBd0MsSUFBSSxDQUFDO2dCQUFFZDtjQUFFLENBQUUsQ0FBQztjQUM3QixJQUFJLENBQUMsQ0FBQWhCLElBQUssR0FBR0EsSUFBSTtjQUNqQitCLFVBQVUsQ0FBQy9CLElBQUksR0FBR0EsSUFBSTtjQUN0QixJQUFJLENBQUMsQ0FBQUgsUUFBUyxHQUFHRyxJQUFJLENBQUNILFFBQVE7Y0FDOUIsTUFBTUcsSUFBSSxDQUFDZ0MsT0FBTyxDQUFDO2dCQUFFaEI7Y0FBRSxDQUFFLENBQUM7Y0FDMUJlLFVBQVUsQ0FBQy9CLElBQUksR0FBR0EsSUFBSTtjQUN0QnJDLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQ3FELFdBQVcsR0FBR2pDLElBQUk7Y0FFN0IsSUFBSSxDQUFDQSxJQUFJLENBQUNrQyxLQUFLLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQ0wsUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLEtBQUssQ0FBQ1IsS0FBSyxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQ1IsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCOztjQUdELE1BQU1sQyxRQUFRLEdBQUdxQixJQUFJLENBQUNyQixRQUFRLEVBQUV3RCxPQUFPLElBQUl4RSxRQUFBLENBQUFpQixVQUFVLENBQUNELFFBQVE7Y0FFOUQsSUFBSSxDQUFDOEIsWUFBWSxDQUFDbkMsTUFBTSxDQUFDVyxHQUFHLENBQUM7Z0JBQUVOO2NBQVEsQ0FBRSxDQUFDO2NBRTFDO2NBQ0E7Y0FFQSxJQUFJLENBQUNrRCxRQUFRLEdBQUcsS0FBSztjQUNyQixLQUFLLENBQUNSLEtBQUssR0FBRyxJQUFJO2NBQ2xCLElBQUksQ0FBQ1IsUUFBUSxHQUFHLEtBQUs7Y0FFckIsSUFBSSxDQUFDeEIsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QixDQUFDO1lBRUQsTUFBTStDLFdBQVdBLENBQUNDLE9BQWU7Y0FDaEMsSUFBSTtnQkFDSEMsV0FBVyxDQUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN6QixJQUFJLENBQUMsQ0FBQXpCLGNBQWUsR0FBRzBCLFNBQVM7Z0JBRWhDLElBQUksT0FBT0gsT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDRyxTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUNKLE9BQU8sQ0FBQyxFQUFFO2dCQUU1RSxJQUFJLENBQUNSLFFBQVEsR0FBRyxJQUFJO2dCQUNwQjtnQkFDQSxPQUFPLElBQUksQ0FBQyxDQUFBN0IsSUFBSyxDQUFDb0MsV0FBVyxDQUFDQyxPQUFPLENBQUM7ZUFDdEMsQ0FBQyxPQUFPSyxDQUFDLEVBQUU7Z0JBQ1g7Z0JBQ0FsQixPQUFPLENBQUNtQixLQUFLLENBQUNELENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNRSxTQUFTQSxDQUFDUCxPQUFhO2NBQzVCLElBQUk7Z0JBQ0hDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDekIsSUFBSSxDQUFDLENBQUF6QixjQUFlLEdBQUcwQixTQUFTO2dCQUNoQyxJQUFJLENBQUNYLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixPQUFPLElBQUksQ0FBQyxDQUFBN0IsSUFBSyxDQUFDNEMsU0FBUyxDQUFDUCxPQUFPLENBQUM7ZUFDcEMsQ0FBQyxPQUFPSyxDQUFDLEVBQUU7Z0JBQ1hsQixPQUFPLENBQUNtQixLQUFLLENBQUNELENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ2IsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBQ0FnQixVQUFVQSxDQUFDckMsS0FBVztjQUNyQixPQUFPLElBQUksQ0FBQyxDQUFBUixJQUFLLENBQUM2QyxVQUFVLENBQUNyQyxLQUFLLENBQUM7WUFDcEM7WUFFQXNDLE9BQU9BLENBQUE7Y0FDTixJQUFJLENBQUMsQ0FBQXRDLEtBQU0sQ0FBQ2xDLE1BQU0sRUFBRXlFLElBQUksRUFBRTtZQUMzQjtZQUVBQyxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDbkIsUUFBUSxHQUFHLEtBQUs7Y0FDckIsS0FBSyxDQUFDUixLQUFLLEdBQUcsS0FBSztZQUNwQjs7VUFDQS9ELE9BQUEsQ0FBQXFDLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxTUQsSUFBQUwsS0FBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVcsTUFFWmdCLFFBQVMsU0FBUWpCLE1BQUEsQ0FBQU0sYUFBdUI7WUFDN0MsQ0FBQW1GLFdBQVksR0FBRyxLQUFLO1lBQ3BCLENBQUFDLE1BQU87WUFDUCxDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsU0FBVTtZQUNWLENBQUFDLFdBQVk7WUFDWixDQUFBQyxXQUFZO1lBQ1osQ0FBQUMsWUFBYTtZQUNiLENBQUFDLGdCQUFpQjtZQUNqQixDQUFBQyxhQUFjO1lBRWQsQ0FBQUMsTUFBTyxHQUFXLEVBQUU7WUFDcEIsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBQyxTQUFVLEdBQUcsS0FBSztZQUNsQixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLENBQUFqQixLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxJQUFJa0IsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQWxCLEtBQU07WUFDcEI7WUFFQSxDQUFBbkMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQXNELFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLENBQUFDLGlCQUFrQjtZQUNsQixDQUFBQyxhQUFjLEdBQUcsRUFBRTtZQUNuQixJQUFJQSxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGFBQWM7WUFDM0I7WUFFQSxDQUFBQyxhQUFjO1lBRWQsQ0FBQUMsV0FBWTtZQUNaLENBQUFDLGtCQUFtQjtZQUNuQixDQUFBQyxlQUFnQjtZQUNoQjVGLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUM2RixJQUFJLEVBQUU7WUFDWjtZQUNBLE1BQU1DLGNBQWNBLENBQUE7Y0FDbkIsSUFBSTtnQkFDSCxNQUFNbkIsTUFBTSxHQUFHLE1BQU1vQixTQUFTLENBQUNDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2tCQUFFakUsS0FBSyxFQUFFO2dCQUFJLENBQUUsQ0FBQztnQkFDekUyQyxNQUFNLENBQUN1QixTQUFTLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLLElBQUlBLEtBQUssQ0FBQzdCLElBQUksRUFBRSxDQUFDO2dCQUNqRCxPQUFPLElBQUk7ZUFDWCxDQUFDLE9BQU9MLENBQUMsRUFBRTtnQkFDWCxJQUFJLENBQUMsQ0FBQUMsS0FBTSxHQUFHRCxDQUFDO2dCQUNmLE9BQU8sS0FBSzs7WUFFZDtZQUNBLE1BQU0yQixJQUFJQSxDQUFBO2NBQ1QsSUFBSTtnQkFDSCxNQUFNSCxXQUFXLEdBQUcsTUFBTUssU0FBUyxDQUFDTCxXQUFXLENBQUNXLEtBQUssQ0FBQztrQkFBRTFGLElBQUksRUFBRTtnQkFBWSxDQUFTLENBQUM7Z0JBQ3BGLElBQUksQ0FBQyxDQUFBK0UsV0FBWSxHQUFHQSxXQUFXLENBQUNZLEtBQUssS0FBSyxTQUFTO2dCQUNuRCxJQUFJLENBQUMsQ0FBQVgsa0JBQW1CLEdBQUdELFdBQVc7Z0JBQ3RDLElBQUksQ0FBQyxDQUFBRSxlQUFnQixHQUFHRixXQUFXLENBQUNZLEtBQUs7Z0JBQ3pDWixXQUFXLENBQUNhLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQUMsY0FBZSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO2VBQ3RELENBQUMsT0FBT3ZDLENBQUMsRUFBRTtnQkFDWDtnQkFDQTtjQUFBLENBQ0EsU0FBUztnQkFDVCxJQUFJLENBQUNyQixLQUFLLEdBQUcsSUFBSTs7WUFFbkI7WUFFQSxDQUFBMkQsY0FBZUUsQ0FBQTtjQUNkLElBQUksQ0FBQyxDQUFBZCxlQUFnQixHQUFHLElBQUksQ0FBQyxDQUFBRCxrQkFBbUIsQ0FBQ1csS0FBSztjQUN0RCxJQUFJLENBQUN6RixPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUE4RixvQkFBb0JBLENBQUE7Y0FDbkIzRCxPQUFPLENBQUM0RCxHQUFHLENBQUMsc0JBQXNCLENBQUM7Y0FDbkM7Y0FDQSxJQUFJLENBQUMsQ0FBQXJCLGlCQUFrQixHQUFHLElBQUlzQix1QkFBdUIsRUFBRTtjQUN2RCxJQUFJLENBQUMsQ0FBQXRCLGlCQUFrQixDQUFDdUIsSUFBSSxHQUFHLE9BQU87Y0FDdEMsSUFBSSxDQUFDLENBQUF2QixpQkFBa0IsQ0FBQ3dCLFVBQVUsR0FBRyxJQUFJO2NBQ3pDLElBQUksQ0FBQyxDQUFBeEIsaUJBQWtCLENBQUN5QixjQUFjLEdBQUcsSUFBSTtjQUM3QztjQUNBLElBQUksQ0FBQyxDQUFBdkIsYUFBYyxHQUFHLElBQUkzRSxLQUFBLENBQUFtRyxjQUFjLEVBQVU7Y0FDbEQsSUFBSSxDQUFDLENBQUExQixpQkFBa0IsQ0FBQzJCLFFBQVEsR0FBR0MsS0FBSyxJQUFHO2dCQUMxQyxJQUFJQyxpQkFBaUIsR0FBRyxFQUFFO2dCQUMxQixJQUFJQyxlQUFlLEdBQUcsRUFBRTtnQkFDeEIsS0FBSyxJQUFJQyxDQUFDLEdBQUdILEtBQUssQ0FBQ0ksV0FBVyxFQUFFRCxDQUFDLEdBQUdILEtBQUssQ0FBQ0ssT0FBTyxDQUFDQyxNQUFNLEVBQUUsRUFBRUgsQ0FBQyxFQUFFO2tCQUM5RCxJQUFJSCxLQUFLLENBQUNLLE9BQU8sQ0FBQ0YsQ0FBQyxDQUFDLENBQUNJLE9BQU8sRUFBRTtvQkFDN0JMLGVBQWUsSUFBSUYsS0FBSyxDQUFDSyxPQUFPLENBQUNGLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDSyxVQUFVO29CQUNqRCxJQUFJLENBQUMsQ0FBQW5DLGFBQWMsR0FBRzZCLGVBQWU7b0JBQ3JDLElBQUksQ0FBQyxDQUFBNUIsYUFBYyxDQUFDbUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBcEMsYUFBYyxDQUFDO21CQUNoRCxNQUFNO29CQUNONEIsaUJBQWlCLElBQUlELEtBQUssQ0FBQ0ssT0FBTyxDQUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssVUFBVTs7O2NBR3RELENBQUM7Y0FDRCxJQUFJLENBQUMsQ0FBQXBDLGlCQUFrQixDQUFDc0MsT0FBTyxHQUFHVixLQUFLLElBQUluRSxPQUFPLENBQUNtQixLQUFLLENBQUMsd0JBQXdCLENBQUM7Y0FFbEYsSUFBSSxDQUFDLENBQUFvQixpQkFBa0IsQ0FBQ3VDLEtBQUssRUFBRTtZQUNoQztZQUVBLENBQUFDLGVBQWdCLEdBQUdaLEtBQUssSUFBRztjQUMxQixJQUFJQSxLQUFLLENBQUNhLElBQUksQ0FBQ0MsSUFBSSxLQUFLLENBQUMsRUFBRTtjQUMzQixJQUFJLENBQUMsQ0FBQS9DLE1BQU8sQ0FBQ2dELElBQUksQ0FBQ2YsS0FBSyxDQUFDYSxJQUFJLENBQUM7Y0FFN0IsSUFBSSxDQUFDbkgsT0FBTyxDQUFDLGVBQWUsQ0FBQztZQUM5QixDQUFDO1lBRUQsQ0FBQXNILGNBQWUsR0FBR0MsQ0FBQ3pELE1BQU0sRUFBRTBELEtBQUssS0FBSTtjQUNuQyxJQUFJLENBQUMsQ0FBQXBELGFBQWMsR0FBRyxJQUFJcUQsYUFBYSxDQUFDM0QsTUFBTSxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUdBLE1BQU07Y0FFckI7Y0FDQTtjQUNBO2NBQ0E7Y0FDQTtjQUNBO2NBRUE7Y0FDQTtjQUVBO2NBQ0E7Y0FDQTtjQUVBLElBQUksQ0FBQyxDQUFBTSxhQUFjLENBQUNzRCxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUFSLGVBQWdCLENBQUM7WUFDN0UsQ0FBQztZQUNELE1BQU1TLFVBQVVBLENBQUNILEtBQUssR0FBRyxFQUFFO2NBQzFCLElBQUksSUFBSSxDQUFDLENBQUF4RCxXQUFZLEVBQUUsT0FBTyxNQUFNLElBQUksQ0FBQyxDQUFBQSxXQUFZO2NBQ3JELElBQUksQ0FBQyxDQUFBQSxXQUFZLEdBQUcsSUFBSS9ELEtBQUEsQ0FBQW1HLGNBQWMsRUFBUTtjQUU5QzFELFVBQVUsRUFBRXdDLFNBQVMsQ0FBQ0MsWUFBWSxDQUNoQ0MsWUFBWSxDQUFDO2dCQUFFakUsS0FBSyxFQUFFO2NBQUksQ0FBRSxDQUFDLENBQzdCeUcsSUFBSSxDQUFDOUQsTUFBTSxJQUFHO2dCQUNkM0IsT0FBTyxDQUFDNEQsR0FBRyxDQUFDLFFBQVEsRUFBRWpDLE1BQU0sQ0FBQztnQkFDN0IsSUFBSSxDQUFDLENBQUF3RCxjQUFlLENBQUN4RCxNQUFNLEVBQUUwRCxLQUFLLENBQUM7Y0FDcEMsQ0FBQyxDQUFDLENBQ0RLLEtBQUssQ0FBQ3ZFLEtBQUssSUFBRztnQkFDZCxJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHQSxLQUFLLENBQUM1QixPQUFPO2dCQUMzQixJQUFJLENBQUMsQ0FBQXNDLFdBQVksQ0FBQzhELE1BQU0sRUFBRTtjQUMzQixDQUFDLENBQUMsQ0FDREMsT0FBTyxDQUFDLE1BQUs7Z0JBQ2IsSUFBSSxDQUFDLENBQUFuRSxXQUFZLEdBQUcsSUFBSTtnQkFDeEIsSUFBSSxDQUFDLENBQUFJLFdBQVksQ0FBQytDLE9BQU8sRUFBRTtjQUM1QixDQUFDLENBQUM7Y0FFSCxPQUFPLElBQUksQ0FBQyxDQUFBL0MsV0FBWTtZQUN6QjtZQUNBZ0UsTUFBTUEsQ0FBQ1IsS0FBSyxHQUFHO2NBQUUvQyxRQUFRLEVBQUU7WUFBSSxDQUFFO2NBQ2hDLElBQUk7Z0JBQ0gsSUFBSSxJQUFJLENBQUMsQ0FBQU4sZ0JBQWlCLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsZ0JBQWlCO2dCQUN6RCxJQUFJLENBQUMsQ0FBQUEsZ0JBQWlCLEdBQUcsSUFBSWxFLEtBQUEsQ0FBQW1HLGNBQWMsRUFBUTtnQkFDbkQsSUFBSSxJQUFJLENBQUMsQ0FBQTdCLFNBQVUsRUFBRTtrQkFDcEIsTUFBTSxJQUFJeEUsS0FBSyxDQUFDLHlEQUF5RCxDQUFDOztnQkFFM0UsSUFBSSxDQUFDLENBQUF1RSxNQUFPLEdBQUcsU0FBUztnQkFDeEIsSUFBSSxDQUFDLENBQUFDLFNBQVUsR0FBRyxJQUFJO2dCQUN0QixJQUFJLENBQUN2RSxPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUV0QixNQUFNaUksUUFBUSxHQUFHLE1BQU1uRSxNQUFNLElBQUc7a0JBQy9CLElBQUksQ0FBQyxDQUFBd0QsY0FBZSxDQUFDeEQsTUFBTSxFQUFFMEQsS0FBSyxDQUFDO2tCQUNuQyxJQUFJLENBQUMsQ0FBQXJELGdCQUFpQixDQUFDNEMsT0FBTyxFQUFFO2tCQUNoQyxJQUFJLENBQUMsQ0FBQW5ELFdBQVksR0FBRyxJQUFJO2tCQUN4QixJQUFJLENBQUMsQ0FBQVEsYUFBYyxFQUFFNkMsS0FBSyxFQUFFO2dCQUM3QixDQUFDO2dCQUNELE1BQU1pQixPQUFPLEdBQUc1RSxLQUFLLElBQUc7a0JBQ3ZCbkIsT0FBTyxDQUFDbUIsS0FBSyxDQUFDQSxLQUFLLENBQUM7a0JBQ3BCLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdBLEtBQUssQ0FBQzVCLE9BQU87a0JBQzNCLElBQUksQ0FBQyxDQUFBeUMsZ0JBQWlCLENBQUMyRCxNQUFNLEVBQUU7Z0JBQ2hDLENBQUM7Z0JBQ0RwRixVQUFVLEVBQUV3QyxTQUFTLENBQUNDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2tCQUFFakUsS0FBSyxFQUFFO2dCQUFJLENBQUUsQ0FBQyxDQUFDeUcsSUFBSSxDQUFDSyxRQUFRLENBQUMsQ0FBQ0osS0FBSyxDQUFDSyxPQUFPLENBQUM7Z0JBRTlGLE9BQU8sSUFBSSxDQUFDLENBQUEvRCxnQkFBaUI7ZUFDN0IsQ0FBQyxPQUFPZCxDQUFDLEVBQUUsQyxDQUNYLFNBQVMsQztZQUVYO1lBQ0E4RSxVQUFVLEdBQUdBLENBQUEsS0FBSztjQUNqQjtjQUVBLElBQUksQ0FBQyxDQUFBL0QsYUFBYyxDQUFDVixJQUFJLEVBQUU7Y0FFMUIsSUFBSSxDQUFDLENBQUFJLE1BQU8sQ0FDVnVCLFNBQVMsRUFBRSxDQUFDO2NBQUEsQ0FDWkMsT0FBTyxDQUFFQyxLQUFLLElBQWlDO2dCQUMvQ0EsS0FBSyxDQUFDN0IsSUFBSSxFQUFFO2dCQUNadkIsT0FBTyxDQUFDNEQsR0FBRyxDQUFDLGVBQWUsRUFBRVIsS0FBSyxDQUFDNkMsSUFBSSxFQUFFLEtBQUssQ0FBQztjQUNoRCxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBRUw7Y0FDQSxJQUFJLElBQUksQ0FBQyxDQUFBbEUsWUFBYSxFQUFFO2dCQUN2QixJQUFJLENBQUMsQ0FBQUEsWUFBYSxDQUFDbUUsS0FBSyxFQUFFO2dCQUMxQixNQUFNQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUFwRSxZQUFhLENBQUNxRSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQXpFLE1BQU8sQ0FBQztnQkFDM0V3RSxVQUFVLENBQUNFLFVBQVU7Z0JBQ3JCLElBQUksQ0FBQyxDQUFBdEUsWUFBYSxDQUNoQm1FLEtBQUssRUFBRSxDQUNQVCxJQUFJLENBQUMsTUFBSztrQkFDVnpGLE9BQU8sQ0FBQzRELEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztrQkFDbEMsSUFBSSxDQUFDLENBQUE3QixZQUFhLEdBQUdmLFNBQVM7Z0JBQy9CLENBQUMsQ0FBQyxDQUNEMEUsS0FBSyxDQUFDdkUsS0FBSyxJQUFHO2tCQUNkbkIsT0FBTyxDQUFDbUIsS0FBSyxDQUFDLDRCQUE0QixFQUFFQSxLQUFLLENBQUM7Z0JBQ25ELENBQUMsQ0FBQzs7Y0FFSixJQUFJLENBQUMsQ0FBQVEsTUFBTyxHQUFHWCxTQUFTO1lBQ3pCLENBQUM7WUFFRE8sSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQVUsYUFBYyxFQUFFO2dCQUN6QmpDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNqRDs7Y0FFRCxJQUFJLElBQUksQ0FBQyxDQUFBNkIsV0FBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7Y0FDL0MsSUFBSSxDQUFDLENBQUFBLFdBQVksR0FBRyxJQUFJaEUsS0FBQSxDQUFBbUcsY0FBYyxFQUFPO2NBRTdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTdCLFNBQVUsRUFBRSxNQUFNLElBQUl4RSxLQUFLLENBQUMscUNBQXFDLENBQUM7Y0FDNUUsSUFBSSxDQUFDLENBQUF1RSxNQUFPLEdBQUcsU0FBUztjQUN4QixNQUFNWixJQUFJLEdBQUdBLENBQUEsS0FBSztnQkFDakIsSUFBSSxDQUFDLENBQUFXLE1BQU8sR0FBRyxFQUFFO2dCQUNqQixJQUFJLENBQUMsQ0FBQUUsU0FBVSxHQUFHLEtBQUs7Z0JBRXZCLElBQUksQ0FBQyxDQUFBSCxhQUFjLENBQUNzRCxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBVztrQkFDdkQsTUFBTXZHLEtBQUssR0FBRyxJQUFJc0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBcEUsTUFBTyxFQUFFO29CQUFFcUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBdEUsYUFBYyxDQUFDdUU7a0JBQVEsQ0FBRSxDQUFDO2tCQUU1RTtrQkFDQSxJQUFJLENBQUMsQ0FBQXhILEtBQU0sR0FBR0EsS0FBSztrQkFFbkIsTUFBTXlILFFBQVEsR0FBR0EsQ0FBQSxLQUFLO29CQUNyQixJQUFJLENBQUMsQ0FBQTNFLFdBQVksQ0FBQzhDLE9BQU8sQ0FBQzVGLEtBQUssQ0FBQztvQkFDaEMsSUFBSSxDQUFDLENBQUE4QyxXQUFZLEdBQUdkLFNBQVM7a0JBQzlCLENBQUM7a0JBQ0QsSUFBSSxJQUFJLENBQUMsQ0FBQXlCLGFBQWMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLENBQUFBLGFBQWMsQ0FBQ2dELElBQUksQ0FBQ2dCLFFBQVEsQ0FBQzttQkFDbEMsTUFBTTtvQkFDTixJQUFJLElBQUksQ0FBQyxDQUFBM0UsV0FBWSxFQUFFO3NCQUN0QjJFLFFBQVEsRUFBRTs7O2tCQUlaLElBQUksSUFBSSxDQUFDLENBQUF6RSxnQkFBaUIsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLENBQUFBLGdCQUFpQixDQUFDNEMsT0FBTyxDQUFDNUYsS0FBSyxDQUFDO29CQUNyQyxJQUFJLENBQUMsQ0FBQWdELGdCQUFpQixHQUFHaEIsU0FBUzs7a0JBRW5DLElBQUksQ0FBQ2dGLFVBQVUsRUFBRTtrQkFDakIsSUFBSSxDQUFDLENBQUEvRCxhQUFjLEdBQUdqQixTQUFTO2tCQUMvQixJQUFJLENBQUMsQ0FBQVcsTUFBTyxHQUFHWCxTQUFTO2tCQUN4QixJQUFJLENBQUMsQ0FBQWEsV0FBWSxHQUFHYixTQUFTO2dCQUM5QixDQUFDLENBQUM7Z0JBRUYsSUFBSSxDQUFDLENBQUFpQixhQUFjLEVBQUVWLElBQUksRUFBRTtnQkFDM0IsSUFBSSxDQUFDLENBQUFnQixpQkFBa0IsRUFBRWhCLElBQUksRUFBRTtnQkFFL0IsSUFBSSxDQUFDMUQsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN2QixDQUFDO2NBRUQsSUFBSSxDQUFDLENBQUE0RCxXQUFZLEdBQUdGLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQ3NFLE1BQU0sRUFBRSxDQUFDSixJQUFJLENBQUNsRSxJQUFJLENBQUM7Y0FDckQsT0FBTyxJQUFJLENBQUMsQ0FBQU8sV0FBWTtZQUN6Qjs7VUFDQWhHLE9BQUEsQ0FBQW1CLFFBQUEsR0FBQUEsUUFBQTs7Ozs7Ozs7Ozs7VUN0UkQ7O1VBRUFyQixNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQTJLLE1BQUEsR0FBQXpLLE9BQUE7VUFDQSxJQUFBMEssTUFBQSxHQUFBMUssT0FBQTtVQUNBLElBQUEySyxNQUFBLEdBQUEzSyxPQUFBO1VBQ0EsSUFBQTRLLFFBQUEsR0FBQTVLLE9BQUE7VUFFTSxTQUFVNkssU0FBU0EsQ0FBQztZQUFFQyxLQUFLO1lBQUVDO1VBQVMsQ0FBRTtZQUM3QyxNQUFNQyxJQUFJLEdBQUdQLE1BQUEsQ0FBQS9GLE9BQUssQ0FBQ3VHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDL0IsTUFBTTtjQUFFQyxVQUFVO2NBQUVDO1lBQWMsQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVEsY0FBYyxHQUFFO1lBQ3ZELE1BQU1DLEdBQUcsR0FBR1osTUFBQSxDQUFBL0YsT0FBSyxDQUFDdUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixJQUFBTixNQUFBLENBQUFXLFNBQVMsRUFDUixDQUFDUixLQUFLLENBQUMsRUFDUCxNQUNDeEcsVUFBVSxDQUFDaUgsVUFBVSxDQUFDLE1BQUs7Y0FDMUIsTUFBTUMsU0FBUyxHQUFHSCxHQUFHLENBQUNJLE9BQU8sRUFBRUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLEVBQUVDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztjQUVuRyxJQUFJLENBQUNILFNBQVMsRUFBRTtjQUNoQixNQUFNSSxrQkFBa0IsR0FBR0osU0FBUyxDQUFDSyxZQUFZLEdBQUdMLFNBQVMsQ0FBQ00sWUFBWSxHQUFHTixTQUFTLENBQUNPLFNBQVM7Y0FDaEcsSUFBSUgsa0JBQWtCLElBQUksR0FBRyxFQUFFO2dCQUM5QlAsR0FBRyxDQUFDSSxPQUFPLENBQUNPLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDcENDLFVBQVUsRUFBRTtlQUNaLE1BQU07Z0JBQ05iLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDTyxTQUFTLENBQUNHLEdBQUcsQ0FBQyxNQUFNLENBQUM7O1lBRW5DLENBQUMsRUFBRSxHQUFHLENBQUMsRUFDUixhQUFhLENBQ2I7WUFDRCxNQUFNRCxVQUFVLEdBQUdBLENBQUEsS0FBSztjQUN2Qm5CLFNBQVMsQ0FBQ1UsT0FBTyxFQUFFVyxjQUFjLENBQUM7Z0JBQUVDLEtBQUssRUFBRSxLQUFLO2dCQUFFQyxRQUFRLEVBQUU7Y0FBUSxDQUFFLENBQUM7WUFDeEUsQ0FBQztZQUVEN0IsTUFBQSxDQUFBL0YsT0FBSyxDQUFDNkgsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTWYsU0FBUyxHQUFHSCxHQUFHLENBQUNJLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztjQUVqRyxNQUFNYSxZQUFZLEdBQUdBLENBQUEsS0FBSztnQkFDekI7Z0JBQ0EsSUFBSSxDQUFDaEIsU0FBUyxFQUFFO2dCQUNoQixNQUFNSSxrQkFBa0IsR0FBR0osU0FBUyxDQUFDSyxZQUFZLEdBQUdMLFNBQVMsQ0FBQ00sWUFBWSxHQUFHTixTQUFTLENBQUNPLFNBQVM7Z0JBRWhHO2dCQUNBLElBQUlILGtCQUFrQixJQUFJLEdBQUcsRUFBRTtrQkFDOUJQLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDTyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQ3BDLE1BQU07a0JBQ05aLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDTyxTQUFTLENBQUNHLEdBQUcsQ0FBQyxNQUFNLENBQUM7O2NBRW5DLENBQUM7Y0FFRFgsU0FBUyxDQUFDbEMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFa0QsWUFBWSxDQUFDO2NBRWxELE9BQU8sTUFBSztnQkFDWGhCLFNBQVMsRUFBRWlCLG1CQUFtQixDQUFDLFFBQVEsRUFBRUQsWUFBWSxDQUFDO2NBQ3ZELENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sSUFBSUUsR0FBRyxHQUFHLDJCQUEyQjtZQUNyQyxJQUFJeEIsVUFBVSxDQUFDeUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFRCxHQUFHLElBQUksa0JBQWtCeEIsVUFBVSxDQUFDMEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZGLE1BQU1DLFlBQVksR0FBRyxtQkFDcEIzQixVQUFVLENBQUN5QixHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsZUFBZXpCLFVBQVUsQ0FBQzBCLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLEVBQzlFLEVBQUU7WUFDRixPQUNDbkMsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQTtjQUFLQyxTQUFTLEVBQUVGLFlBQVk7Y0FBRXhCLEdBQUcsRUFBRUE7WUFBRyxHQUNyQ1osTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQSxDQUFDcEMsTUFBQSxDQUFBc0MsVUFBVTtjQUFDM0IsR0FBRyxFQUFFTCxJQUFJO2NBQUVBLElBQUksRUFBQyxXQUFXO2NBQUNpQyxPQUFPLEVBQUMsVUFBVTtjQUFDRixTQUFTLEVBQUVMLEdBQUc7Y0FBRVEsT0FBTyxFQUFFaEI7WUFBVSxFQUFJLENBQzdGO1VBRVI7Ozs7Ozs7Ozs7O1VDL0RBOztVQUVBdk0sTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUEySyxNQUFBLEdBQUF6SyxPQUFBO1VBRUEsSUFBQTRLLFFBQUEsR0FBQTVLLE9BQUE7VUFDQSxJQUFBbU4sU0FBQSxHQUFBbk4sT0FBQTtVQUNBLElBQUEySyxNQUFBLEdBQUEzSyxPQUFBO1VBRU87VUFBVSxTQUFVcUUsSUFBSUEsQ0FBQTtZQUM5QixNQUFNLENBQUMrSSxNQUFNLENBQUMsR0FBRzNDLE1BQUEsQ0FBQS9GLE9BQUssQ0FBQzJJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdEMsTUFBTXRDLFNBQVMsR0FBR04sTUFBQSxDQUFBL0YsT0FBSyxDQUFDdUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNwQyxNQUFNO2NBQUVILEtBQUs7Y0FBRXBJLEtBQUs7Y0FBRTRLLFVBQVU7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQTNDLFFBQUEsQ0FBQVEsY0FBYyxHQUFFO1lBQzVELE1BQU07Y0FBRWhKO1lBQVEsQ0FBRSxHQUFHMEksS0FBSztZQUMxQixNQUFNLEdBQUcwQyxXQUFXLENBQUMsR0FBRy9DLE1BQUEsQ0FBQS9GLE9BQUssQ0FBQzJJLFFBQVEsQ0FBU2pMLFFBQVEsRUFBRW9HLE1BQU0sSUFBSSxFQUFFLENBQUNBLE1BQU0sQ0FBQztZQUM3RSxJQUFJa0UsR0FBRyxHQUFHLDBCQUEwQlUsTUFBTSxHQUFHLDBEQUEwRCxHQUFHLEVBQUUsRUFBRTtZQUM5RyxNQUFNSyxZQUFZLEdBQUdBLENBQUEsS0FBSztjQUN6QkQsV0FBVyxDQUFDMUMsS0FBSyxDQUFDMUksUUFBUSxDQUFDb0csTUFBTSxDQUFDO2NBRWxDbEUsVUFBVSxDQUFDaUgsVUFBVSxDQUFDLE1BQUs7Z0JBQzFCUixTQUFTLENBQUNVLE9BQU8sQ0FBQ1csY0FBYyxDQUFDO2tCQUFFRSxRQUFRLEVBQUUsUUFBUTtrQkFBRUQsS0FBSyxFQUFFO2dCQUFLLENBQUUsQ0FBQztjQUN2RSxDQUFDLEVBQUUsR0FBRyxDQUFDO2NBQ1A7WUFDRCxDQUFDO1lBRUQ1QixNQUFBLENBQUEvRixPQUFLLENBQUM2SCxTQUFTLENBQUMsTUFBSztjQUNwQmpJLFVBQVUsQ0FBQ2lILFVBQVUsQ0FBQyxNQUFLO2dCQUMxQlIsU0FBUyxDQUFDVSxPQUFPLEVBQUVXLGNBQWMsQ0FBQztrQkFBRUUsUUFBUSxFQUFFLFFBQVE7a0JBQUVELEtBQUssRUFBRTtnQkFBSyxDQUFFLENBQUM7Y0FDeEUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNSLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixJQUFBMUIsTUFBQSxDQUFBVyxTQUFTLEVBQUMsQ0FBQ1IsS0FBSyxDQUFDdkksSUFBSSxDQUFDLEVBQUVrTCxZQUFZLEVBQUUsYUFBYSxDQUFDO1lBRXBELElBQUlDLFVBQVUsR0FBRyxlQUFlO1lBRWhDLElBQUksQ0FBQzVDLEtBQUssQ0FBQzFJLFFBQVEsQ0FBQ29HLE1BQU0sRUFBRTtjQUMzQixNQUFNbUYsT0FBTyxHQUFHSixLQUFLLEdBQUdBLEtBQUssR0FBRzlDLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUEsQ0FBQXJDLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQWtKLFFBQUEsMkJBQXFCO2NBQ3JEO2NBQ0EsT0FDQ25ELE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUE7Z0JBQUtDLFNBQVMsRUFBRUw7Y0FBRyxHQUVsQmpDLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUEsQ0FBQ2EsT0FBTyxPQUFHLENBQ047O1lBSVIsT0FDQ2xELE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUE7Y0FBS0MsU0FBUyxFQUFFTDtZQUFHLEdBQ2xCakMsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQTtjQUFTQyxTQUFTLEVBQUVXO1lBQVUsR0FDN0JqRCxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLENBQUNLLFNBQUEsQ0FBQVUsUUFBUTtjQUNSdEwsSUFBSSxFQUFFdUksS0FBSyxDQUFDdkksSUFBSTtjQUNoQjFCLE1BQU0sRUFBRWlLLEtBQUssQ0FBQzlILFlBQVksQ0FBQ25DLE1BQU07Y0FDakM0SyxPQUFPLEVBQUVYLEtBQUssQ0FBQ3pILGNBQWM7Y0FDN0JpSyxVQUFVLEVBQUVBLFVBQVU7Y0FDdEJsTCxRQUFRLEVBQUUwSSxLQUFLLEVBQUUxSSxRQUFRLElBQUksRUFBRTtjQUMvQk0sS0FBSyxFQUFFQTtZQUFLLEVBQ1gsRUFDRitILE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUE7Y0FBS3pCLEdBQUcsRUFBRU4sU0FBUztjQUFFZ0MsU0FBUyxFQUFDO1lBQVcsRUFBRyxDQUNwQyxDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURBLElBQUF0QyxNQUFBLEdBQUF6SyxPQUFBO1VBQ0EsSUFBQTRLLFFBQUEsR0FBQTVLLE9BQUE7VUFDQSxJQUFBOE4sV0FBQSxHQUFBOU4sT0FBQTtVQUNNLFNBQVUrTixZQUFZQSxDQUFBO1lBQzNCLE1BQU07Y0FBRWpEO1lBQUssQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQVEsY0FBYyxHQUFFO1lBQ2xDLE9BQ0NYLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWdCLEdBQzlCdEMsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQSxDQUFDZ0IsV0FBQSxDQUFBRSxPQUFPO2NBQUNDLE1BQU07WUFBQSxFQUFHLENBQ2I7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWQSxJQUFBeEQsTUFBQSxHQUFBekssT0FBQTtVQUNBLElBQUE0SyxRQUFBLEdBQUE1SyxPQUFBO1VBQ00sU0FBVWtPLFlBQVlBLENBQUN4TSxJQUFJO1lBQ2hDLE1BQU0sQ0FBQ2tDLEtBQUssRUFBRXVLLFFBQVEsQ0FBQyxHQUFHMUQsTUFBQSxDQUFBL0YsT0FBSyxDQUFDMkksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNaEMsR0FBRyxHQUFHWixNQUFBLENBQUEvRixPQUFLLENBQUN1RyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU07Y0FDTEgsS0FBSyxFQUFFO2dCQUFFcEg7Y0FBVTtZQUFFLENBQ3JCLEdBQUcsSUFBQWtILFFBQUEsQ0FBQVEsY0FBYyxHQUFFO1lBRXBCLE1BQU1nRCxnQkFBZ0IsR0FBRzFLLFVBQVUsQ0FBQ2tKLEdBQUcsQ0FBQ2xMLElBQUksQ0FBQyxFQUFFMk0sT0FBTztZQUN0RDVELE1BQUEsQ0FBQS9GLE9BQUssQ0FBQzZILFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU0rQixPQUFPLEdBQUdwRyxLQUFLLElBQUlpRyxRQUFRLENBQUMsSUFBSSxDQUFDO2NBQ3ZDLElBQUksQ0FBQzlDLEdBQUcsRUFBRUksT0FBTyxFQUFFO2NBQ25CSixHQUFHLENBQUNJLE9BQU8sQ0FBQ25DLGdCQUFnQixDQUFDLE9BQU8sRUFBRWdGLE9BQU8sQ0FBQztjQUM5QyxPQUFPLE1BQU1qRCxHQUFHLENBQUNJLE9BQU8sRUFBRWdCLG1CQUFtQixDQUFDLE9BQU8sRUFBRTZCLE9BQU8sQ0FBQztZQUNoRSxDQUFDLEVBQUUsQ0FBQ2pELEdBQUcsRUFBRUksT0FBTyxDQUFDLENBQUM7WUFFbEIsT0FBTyxDQUFDSixHQUFHLEVBQUV6SCxLQUFLLElBQUksQ0FBQ3dLLGdCQUFnQixFQUFFQSxnQkFBZ0IsQ0FBQztVQUMzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkEsSUFBQTNELE1BQUEsR0FBQXpLLE9BQUE7VUFDQSxJQUFBdU8sV0FBQSxHQUFBdk8sT0FBQTtVQUNBLElBQUE0SyxRQUFBLEdBQUE1SyxPQUFBO1VBR087VUFBVyxTQUFVd08sbUJBQW1CQSxDQUFDO1lBQy9DQyxRQUFRO1lBQ1J6RCxJQUFJO1lBQ0puSCxRQUFRO1lBQ1I2SyxRQUFRO1lBQ1JuQixLQUFLO1lBQ0wxTSxNQUFNO1lBRU4sR0FBRzhOO1VBQUssQ0FDd0I7WUFDaEMsTUFBTSxDQUFDeEQsY0FBYyxFQUFFeUQsaUJBQWlCLENBQUMsR0FBR25FLE1BQUEsQ0FBQS9GLE9BQUssQ0FBQzJJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakUsTUFBTTtjQUFFekosS0FBSztjQUFFa0g7WUFBSyxDQUFFLEdBQUcsSUFBQXlELFdBQUEsQ0FBQU0sVUFBVSxFQUFDRixLQUFLLENBQUNwTCxFQUFFLENBQUM7WUFDN0MsTUFBTXVMLEdBQUcsR0FBR2hFLEtBQUssR0FBR0EsS0FBSyxHQUFJLEVBQW1CO1lBRWhELE1BQU1pRSxlQUFlLEdBQUdMLFFBQVE7WUFDaEMsSUFBSSxDQUFDOUssS0FBSyxJQUFJOEssUUFBUSxFQUFFLE9BQU9qRSxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLENBQUNpQyxlQUFlLE9BQUc7WUFDbEQsSUFBSSxDQUFDbkwsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUN2QixNQUFNO2NBQUV4QixRQUFRO2NBQUVNO1lBQUssQ0FBRSxHQUFHb00sR0FBRztZQUMvQixNQUFNRSxZQUFZLEdBQUc7Y0FDcEJKLGlCQUFpQixFQUFFOU8sS0FBSyxJQUFHO2dCQUMxQixJQUFJLENBQUNBLEtBQUssRUFBRWlFLE9BQU8sQ0FBQ2tMLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQztnQkFDbkVMLGlCQUFpQixDQUFDOU8sS0FBSyxDQUFDO2NBQ3pCLENBQUM7Y0FDRHFMLGNBQWM7Y0FDZEwsS0FBSztjQUNMbEgsS0FBSyxFQUFFa0gsS0FBSyxDQUFDbEgsS0FBSztjQUNsQmxCLEtBQUssRUFBRW9JLEtBQUssQ0FBQ3BJLEtBQUs7Y0FDbEJuQyxRQUFRLEVBQUV1SyxLQUFLLEVBQUU5SCxZQUFZLEVBQUV6QyxRQUFRO2NBQ3ZDc0QsUUFBUTtjQUNSeUosVUFBVSxFQUFFdEMsSUFBSTtjQUNoQnVDLEtBQUs7Y0FDTG1CLFFBQVE7Y0FDUnRNLFFBQVE7Y0FDUnZCLE1BQU07Y0FDTnFLLFVBQVUsRUFBRXlELEtBQUssQ0FBQ3pEO2FBQ2xCO1lBRUQsT0FBT1QsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQSxDQUFDbEMsUUFBQSxDQUFBc0UsV0FBVyxDQUFDQyxRQUFRO2NBQUNyUCxLQUFLLEVBQUVrUDtZQUFZLEdBQUdQLFFBQVEsQ0FBd0I7VUFDcEY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NBLElBQUFoRSxNQUFBLEdBQUF6SyxPQUFBO1VBcUJPO1VBQVksTUFBTWtQLFdBQVcsR0FBQXJQLE9BQUEsQ0FBQXFQLFdBQUEsR0FBR3pFLE1BQUEsQ0FBQS9GLE9BQUssQ0FBQzBLLGFBQWEsQ0FBQyxFQUEyQixDQUFDO1VBQ2hGO1VBQVksTUFBTWhFLGNBQWMsR0FBR0EsQ0FBQSxLQUFNWCxNQUFBLENBQUEvRixPQUFLLENBQUMySyxVQUFVLENBQUNILFdBQVcsQ0FBQztVQUFDclAsT0FBQSxDQUFBdUwsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCOUUsSUFBQVgsTUFBQSxHQUFBekssT0FBQTtVQUNBLElBQUFzUCxLQUFBLEdBQUF0UCxPQUFBO1VBQ0EsSUFBQTRLLFFBQUEsR0FBQTVLLE9BQUE7VUFDQSxJQUFBdVAsU0FBQSxHQUFBdlAsT0FBQTtVQUNBLElBQUF3UCxTQUFBLEdBQUF4UCxPQUFBO1VBT08sV0FMUDs7Ozs7VUFLaUIsU0FBVXlQLGVBQWVBLENBQUE7WUFDekMsTUFBTTtjQUFFN0wsS0FBSztjQUFFa0g7WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBUSxjQUFjLEdBQUU7WUFFekMsSUFBSU4sS0FBSyxDQUFDMUgsUUFBUSxJQUFJUSxLQUFLLEVBQUUsT0FBTzZHLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUEsQ0FBQzBDLFNBQUEsQ0FBQUUsWUFBWSxPQUFHO1lBRXBELElBQUksQ0FBQzlMLEtBQUssRUFBRSxPQUFPNkcsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQSxDQUFDeUMsU0FBQSxDQUFBeEIsWUFBWSxPQUFHO1lBRW5DLE9BQU90RCxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLENBQUN3QyxLQUFBLENBQUFqTCxJQUFJLE9BQUc7VUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUFvRyxNQUFBLEdBQUF6SyxPQUFBO1VBQ0EsSUFBQTJQLFVBQUEsR0FBQTNQLE9BQUE7VUFFQSxJQUFBMEssTUFBQSxHQUFBMUssT0FBQTtVQUNBLElBQUE0SyxRQUFBLEdBQUE1SyxPQUFBO1VBRU0sU0FBVTRQLGlCQUFpQkEsQ0FBQztZQUFFQztVQUFnQixDQUFFO1lBQ3JELE1BQU07Y0FBRUMsUUFBUTtjQUFFQztZQUFJLENBQUUsR0FBRyxJQUFBbkYsUUFBQSxDQUFBb0YsZUFBZSxHQUFFO1lBRTVDLElBQUksQ0FBQyxDQUFDRCxJQUFJLENBQUN2SCxNQUFNLEVBQUU7Y0FDbEIsT0FDQ2lDLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUE7Z0JBQU1DLFNBQVMsRUFBQztjQUFpQyxHQUNoRHRDLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUEsQ0FBQ3BDLE1BQUEsQ0FBQXVGLGFBQWE7Z0JBQ2JqRixJQUFJLEVBQUMsYUFBYTtnQkFDbEIrQixTQUFTLEVBQUMsUUFBUTtnQkFDbEJFLE9BQU8sRUFBQyxTQUFTO2dCQUNqQkMsT0FBTyxFQUFFNEMsUUFBUTtnQkFDakJ0TSxRQUFRLEVBQUVxTTtjQUFnQixFQUN6QixDQUNJOztZQUlULE9BQ0NwRixNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFpQyxHQUNoRHRDLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUEsQ0FBQzZDLFVBQUEsQ0FBQU8sZUFBZSxPQUFHLENBQ2I7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkEsSUFBQXpGLE1BQUEsR0FBQXpLLE9BQUE7VUFpQk8sTUFBTW1RLFlBQVksR0FBQXRRLE9BQUEsQ0FBQXNRLFlBQUEsR0FBRzFGLE1BQUEsQ0FBQS9GLE9BQUssQ0FBQzBLLGFBQWEsQ0FBQyxJQUFxQixDQUFDO1VBQy9ELE1BQU1ZLGVBQWUsR0FBR0EsQ0FBQSxLQUFNdkYsTUFBQSxDQUFBL0YsT0FBSyxDQUFDMkssVUFBVSxDQUFDYyxZQUFZLENBQUM7VUFBQ3RRLE9BQUEsQ0FBQW1RLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQnBFLElBQUF2RixNQUFBLEdBQUF6SyxPQUFBO1VBQ0EsSUFBQTRLLFFBQUEsR0FBQTVLLE9BQUE7VUFDTSxTQUFVb1EsWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUV0RixLQUFLO2NBQUV2SztZQUFRLENBQUUsR0FBRyxJQUFBcUssUUFBQSxDQUFBUSxjQUFjLEdBQUU7WUFDNUMsTUFBTSxDQUFDakYsU0FBUyxFQUFFa0ssWUFBWSxDQUFDLEdBQUc1RixNQUFBLENBQUEvRixPQUFLLENBQUMySSxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQ2pKLFFBQVEsRUFBRWtNLFdBQVcsQ0FBQyxHQUFHN0YsTUFBQSxDQUFBL0YsT0FBSyxDQUFDMkksUUFBUSxDQUFVLEtBQUssQ0FBQztZQUM5RCxNQUFNLENBQUMwQyxJQUFJLEVBQUVRLE9BQU8sQ0FBQyxHQUFHOUYsTUFBQSxDQUFBL0YsT0FBSyxDQUFDMkksUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUMxQyxNQUFNbEksU0FBUyxHQUFHLE1BQU0rQyxLQUFLLElBQUc7Y0FDL0JvSSxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCcEksS0FBSyxDQUFDc0ksY0FBYyxFQUFFO2NBQ3RCdEksS0FBSyxDQUFDdUksZUFBZSxFQUFFO2NBQ3ZCLE1BQU0xTixLQUFLLEdBQUcsTUFBTXhDLFFBQVEsQ0FBQytFLElBQUksRUFBRTtjQUVuQ3dGLEtBQUssQ0FBQzNGLFNBQVMsQ0FBQ3BDLEtBQUssQ0FBQztjQUN0QnNOLFlBQVksQ0FBQyxDQUFDbEssU0FBUyxDQUFDO2NBQ3hCbUssV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNuQixDQUFDO1lBRUQsTUFBTUksVUFBVSxHQUFHLE1BQU14SSxLQUFLLElBQUc7Y0FDaEMsSUFBSTtnQkFDSEEsS0FBSyxFQUFFdUksZUFBZSxFQUFFO2dCQUN4QkYsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDWEQsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTXhGLEtBQUssQ0FBQ25HLFdBQVcsQ0FBQ29MLElBQUksQ0FBQztnQkFFN0JPLFdBQVcsQ0FBQyxLQUFLLENBQUM7ZUFDbEIsQ0FBQyxPQUFPckwsQ0FBQyxFQUFFO2dCQUNYbEIsT0FBTyxDQUFDbUIsS0FBSyxDQUFDLE9BQU8sRUFBRUQsQ0FBQyxDQUFDOztZQUUzQixDQUFDO1lBRUQsTUFBTTZLLFFBQVEsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ3ZILE1BQU0sR0FBR2tJLFVBQVUsR0FBR3ZMLFNBQVM7WUFFdkQsT0FBTztjQUFFZ0IsU0FBUztjQUFFNEosSUFBSTtjQUFFUSxPQUFPO2NBQUVELFdBQVc7Y0FBRUQsWUFBWTtjQUFFak0sUUFBUTtjQUFFMEw7WUFBUSxDQUFFO1VBQ25GOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBckYsTUFBQSxHQUFBekssT0FBQTtVQUNBLElBQUEyUSxLQUFBLEdBQUEzUSxPQUFBO1VBQ0EsSUFBQTJLLE1BQUEsR0FBQTNLLE9BQUE7VUFDQSxJQUFBNEssUUFBQSxHQUFBNUssT0FBQTtVQUNBLElBQUE0USxVQUFBLEdBQUE1USxPQUFBO1VBQ0EsSUFBQTZRLGFBQUEsR0FBQTdRLE9BQUE7VUFDQSxJQUFBOFEsU0FBQSxHQUFBOVEsT0FBQTtVQUdBLElBQUErUSxhQUFBLEdBQUEvUSxPQUFBO1VBRU87VUFBVyxNQUFNZ1IsZUFBZSxHQUFHQSxDQUFDO1lBQzFDQyxTQUFTLEdBQUcsS0FBSztZQUNqQkMsY0FBYyxHQUFHLEtBQUs7WUFDdEIxTixRQUFRLEdBQUcsS0FBSztZQUNoQjBKO1VBQU8sQ0FDcUIsS0FBSTtZQUNoQyxNQUFNLENBQUNpRSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHM0csTUFBQSxDQUFBL0YsT0FBSyxDQUFDMkksUUFBUSxDQUFVLEtBQUssQ0FBQztZQUU1RCxNQUFNO2NBQUV2QyxLQUFLO2NBQUV2SztZQUFRLENBQUUsR0FBRyxJQUFBdVEsU0FBQSxDQUFBMUYsY0FBYyxHQUFFO1lBQzVDLE1BQU07Y0FBRTJFLElBQUk7Y0FBRVEsT0FBTztjQUFFVCxRQUFRO2NBQUUxTCxRQUFRO2NBQUUrQixTQUFTO2NBQUVrSyxZQUFZO2NBQUVDO1lBQVcsQ0FBRSxHQUFHLElBQUFTLGFBQUEsQ0FBQVgsWUFBWSxHQUFFO1lBRWxHLElBQUF6RixNQUFBLENBQUFXLFNBQVMsRUFBQyxDQUFDUixLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCL0csT0FBTyxDQUFDNEQsR0FBRyxDQUFDLENBQUMsQ0FBQztjQUNkeUosVUFBVSxDQUFDdEcsS0FBSyxDQUFDdUcsZUFBZSxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUVGLE1BQU1DLFVBQVUsR0FBR2xOLFFBQVEsSUFBSStNLE9BQU8sSUFBSUYsU0FBUztZQUVuRCxNQUFNTSxVQUFVLEdBQUd6RyxLQUFLLENBQUN0SCxRQUFRLElBQUlBLFFBQVE7WUFDN0MsTUFBTXdMLFlBQVksR0FBRztjQUNwQmxFLEtBQUs7Y0FDTGdGLFFBQVE7Y0FDUnZQLFFBQVE7Y0FDUjJRLGNBQWM7Y0FDZDlNLFFBQVE7Y0FDUm1NLE9BQU87Y0FDUEYsWUFBWTtjQUNabEssU0FBUztjQUNUNEosSUFBSTtjQUNKTyxXQUFXO2NBQ1g5TSxRQUFRLEVBQUUrTjthQUNWO1lBRUQsTUFBTUMsS0FBSyxHQUFHO2NBQUVoTyxRQUFRLEVBQUVBLFFBQVEsSUFBSXNILEtBQUssQ0FBQ3RIO1lBQVEsQ0FBRTtZQUN0RCxNQUFNcU0sZ0JBQWdCLEdBQUcyQixLQUFLLENBQUNoTyxRQUFRLElBQUlzSCxLQUFLLENBQUN1RyxlQUFlLElBQUlsTCxTQUFTO1lBQzdFLElBQUl1RyxHQUFHLEdBQUcsd0JBQXdCNEUsVUFBVSxHQUFHLGFBQWEsR0FBRyxFQUFFLElBQUlDLFVBQVUsR0FBRyxhQUFhLEdBQUcsRUFBRSxFQUFFO1lBQ3RHLE1BQU1FLGNBQWMsR0FBRztjQUN0QjFFLFNBQVMsRUFBRUw7YUFDWDtZQUNELE1BQU1nRixZQUFZLEdBQUc7Y0FDcEJ4RSxPQUFPO2NBQ1BILFNBQVMsRUFBRSxtQkFBbUJ3RSxVQUFVLEdBQUcsYUFBYSxHQUFHLEVBQUU7YUFDN0Q7WUFFRCxJQUFJLENBQUMsRUFBRSxFQUFFeE0sU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUMrSyxJQUFJLENBQUM0QixVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQzVCLElBQUksQ0FBQzZCLElBQUksRUFBRSxDQUFDcEosTUFBTSxFQUFFZ0osS0FBSyxDQUFDaE8sUUFBUSxHQUFHLElBQUk7WUFFM0csT0FDQ2lILE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUEsQ0FBQ2xDLFFBQUEsQ0FBQXVGLFlBQVksQ0FBQ2hCLFFBQVE7Y0FBQ3JQLEtBQUssRUFBRWtQO1lBQVksR0FDekN2RSxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLENBQUM2RCxLQUFBLENBQUFrQixJQUFJO2NBQUMvQixRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUFNNEI7WUFBWSxHQUN6Q2pILE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUE7Y0FBQSxHQUFTMkU7WUFBYyxHQUl0QmhILE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUEsQ0FBQzhELFVBQUEsQ0FBQWtCLFNBQVM7Y0FDVC9CLElBQUksRUFBRUEsSUFBSTtjQUNWTyxXQUFXLEVBQUVBLFdBQVc7Y0FDeEJsTSxRQUFRLEVBQUVrTixVQUFVO2NBQ3BCZixPQUFPLEVBQUVBLE9BQU87Y0FDaEJHLFVBQVUsRUFBRVosUUFBUTtjQUNwQnRNLFFBQVEsRUFBRStOO1lBQVUsRUFDbkIsRUFFRjlHLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUEsQ0FBQytELGFBQUEsQ0FBQWpCLGlCQUFpQjtjQUFDQyxnQkFBZ0IsRUFBRUE7WUFBZ0IsRUFBSSxDQUNwRCxDQUNBLENBQ2dCO1VBRTFCLENBQUM7VUFBQ2hRLE9BQUEsQ0FBQW1SLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5RUYsSUFBQXZHLE1BQUEsR0FBQXpLLE9BQUE7VUFDQSxJQUFBMEssTUFBQSxHQUFBMUssT0FBQTtVQUNBLElBQUErUixNQUFBLEdBQUEvUixPQUFBO1VBRUEsSUFBQTRLLFFBQUEsR0FBQTVLLE9BQUE7VUFFTztVQUFXLE1BQU1nUyxxQkFBcUIsR0FBR0EsQ0FBQztZQUFFQyxJQUFJO1lBQUVDO1VBQU8sQ0FBRSxLQUFJO1lBQ3JFLElBQUksQ0FBQ0QsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixNQUFNO2NBQUV2UDtZQUFLLENBQUUsR0FBRyxJQUFBa0ksUUFBQSxDQUFBUSxjQUFjLEdBQUU7WUFDbEMsTUFBTTtjQUFFK0csS0FBSztjQUFFQztZQUFXLENBQUUsR0FBRzFQLEtBQUssQ0FBQytELFdBQVcsQ0FBQ3ZCLEtBQUs7WUFFdEQsT0FDQ3VGLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUEsQ0FBQXJDLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQWtKLFFBQUEsUUFDQ25ELE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUEsQ0FBQ2lGLE1BQUEsQ0FBQU0sVUFBVTtjQUFDdEYsU0FBUyxFQUFDLGlCQUFpQjtjQUFDbUYsT0FBTyxFQUFFQSxPQUFPO2NBQUVJLFFBQVE7WUFBQSxHQUNqRTdILE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQThCLEdBQzVDdEMsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBOEIsR0FDNUN0QyxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLGFBQUtxRixLQUFLLENBQU0sQ0FDWCxFQUNOMUgsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQSxDQUFDcEMsTUFBQSxDQUFBNkgsSUFBSTtjQUFDeEYsU0FBUyxFQUFDLDBCQUEwQjtjQUFDL0IsSUFBSSxFQUFDO1lBQUssRUFBRyxFQUN4RFAsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBeUIsR0FBRXFGLFdBQVcsQ0FBSyxDQUNuRCxDQUNNLENBQ1g7VUFFTCxDQUFDO1VBQUN2UyxPQUFBLENBQUFtUyxxQkFBQSxHQUFBQSxxQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkYsSUFBQXZILE1BQUEsR0FBQXpLLE9BQUE7VUFFQSxJQUFBOE4sV0FBQSxHQUFBOU4sT0FBQTtVQUVBLElBQUF3UyxPQUFBLEdBQUF4UyxPQUFBO1VBQ0EsSUFBQTRLLFFBQUEsR0FBQTVLLE9BQUE7VUFDQSxJQUFBK1IsTUFBQSxHQUFBL1IsT0FBQTtVQUNBLElBQUF5UyxXQUFBLEdBQUF6UyxPQUFBO1VBQ087VUFBVyxNQUFNa1EsZUFBZSxHQUFHQSxDQUFDO1lBQUUxTSxRQUFRLEdBQUc7VUFBSyxDQUFFLEtBQUk7WUFDbEUsTUFBTTtjQUFFakQsUUFBUTtjQUFFNEYsU0FBUztjQUFFa0s7WUFBWSxDQUFFLEdBQUcsSUFBQXpGLFFBQUEsQ0FBQW9GLGVBQWUsR0FBRTtZQUMvRCxNQUFNLENBQUM1TCxRQUFRLEVBQUVrTSxXQUFXLENBQUMsR0FBRyxJQUFBN0YsTUFBQSxDQUFBNEMsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUNxRixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUFsSSxNQUFBLENBQUE0QyxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU0sQ0FBQ25JLEtBQUssRUFBRTBOLFFBQVEsQ0FBQyxHQUFHLElBQUFuSSxNQUFBLENBQUE0QyxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ3pDLE1BQU0sR0FBR3dGLGdCQUFnQixDQUFDLEdBQUcsSUFBQXBJLE1BQUEsQ0FBQTRDLFFBQVEsRUFBQy9JLFVBQVUsRUFBRXdPLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFFdkcsTUFBTUMsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQixJQUFJO2dCQUNILE1BQU16UyxRQUFRLENBQUNxSixNQUFNLEVBQUU7Z0JBQ3ZCeUcsWUFBWSxDQUFDLENBQUNsSyxTQUFTLENBQUM7ZUFDeEIsQ0FBQyxPQUFPbEIsQ0FBQyxFQUFFO2dCQUNYMk4sUUFBUSxDQUFDLElBQUksQ0FBQzs7WUFFaEIsQ0FBQztZQUVELE1BQU01TCxZQUFZLEdBQUdBLENBQUEsS0FBSztjQUN6QnpHLFFBQVEsQ0FDTnNHLGNBQWMsRUFBRSxDQUNoQjJDLElBQUksQ0FBQyxNQUFLO2dCQUNWbEYsVUFBVSxFQUFFd08sWUFBWSxDQUFDRyxPQUFPLENBQUMsOEJBQThCLEVBQUUsTUFBTSxDQUFDO2dCQUN4RUosZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2NBQ3pCLENBQUMsQ0FBQyxDQUNEcEosS0FBSyxDQUFDdkUsS0FBSyxJQUFHO2dCQUNkbkIsT0FBTyxDQUFDNEQsR0FBRyxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQ2lMLFFBQVEsQ0FBQyxJQUFJLENBQUM7Y0FDZixDQUFDLENBQUM7WUFDSixDQUFDO1lBQ0QsTUFBTU0sVUFBVSxHQUFHLE1BQU1oTCxLQUFLLElBQUc7Y0FDaEMsSUFBSTtnQkFDSEEsS0FBSyxDQUFDc0ksY0FBYyxFQUFFO2dCQUN0QkYsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTTdKLFdBQVcsR0FBRyxNQUFNbEcsUUFBUSxDQUFDc0csY0FBYyxFQUFFO2dCQUVuRCxJQUFJLENBQUNKLFdBQVcsRUFBRTtrQkFDakJrTSxZQUFZLENBQUMsSUFBSSxDQUFDO2tCQUNsQjs7Z0JBR0RLLFFBQVEsRUFBRTtlQUNWLENBQUMsT0FBTy9OLENBQUMsRUFBRTtnQkFDWDJOLFFBQVEsQ0FBQyxJQUFJLENBQUM7ZUFDZCxTQUFTO2dCQUNUdEMsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE1BQU00QixPQUFPLEdBQUdoSyxLQUFLLElBQUc7Y0FDdkJvSSxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ2xCcUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNwQixDQUFDO1lBQ0QsTUFBTVEsWUFBWSxHQUFHQSxDQUFBLEtBQU1QLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDMUMsTUFBTXJCLFVBQVUsR0FBRy9OLFFBQVEsSUFBSVksUUFBUTtZQUN2QyxJQUFJK0IsU0FBUyxFQUFFLE9BQU9zRSxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLENBQUMwRixPQUFBLENBQUFZLE1BQU0sT0FBRztZQUVoQyxPQUNDM0ksTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQSxDQUFBckMsTUFBQSxDQUFBL0YsT0FBQSxDQUFBa0osUUFBQSxRQUNDbkQsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQSxDQUFDZ0IsV0FBQSxDQUFBdUYsTUFBTTtjQUFDckksSUFBSSxFQUFDLEtBQUs7Y0FBQzVHLFFBQVEsRUFBRUEsUUFBUTtjQUFFOEksT0FBTyxFQUFFZ0csVUFBVTtjQUFFMVAsUUFBUSxFQUFFK047WUFBVSxFQUFJLEVBQ3BGOUcsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQSxDQUFDaUYsTUFBQSxDQUFBdUIsZ0JBQWdCO2NBQUNyQixJQUFJLEVBQUVTLFNBQVM7Y0FBRVIsT0FBTyxFQUFFQSxPQUFPO2NBQUVxQixTQUFTLEVBQUV2TTtZQUFZLEVBQUksRUFDaEZ5RCxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLENBQUMyRixXQUFBLENBQUFULHFCQUFxQjtjQUFDQyxJQUFJLEVBQUUvTSxLQUFLO2NBQUVnTixPQUFPLEVBQUVpQjtZQUFZLEVBQUksQ0FDM0Q7VUFFTCxDQUFDO1VBQUN0VCxPQUFBLENBQUFxUSxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEVGLElBQUF6RixNQUFBLEdBQUF6SyxPQUFBO1VBQ0EsSUFBQTBLLE1BQUEsR0FBQTFLLE9BQUE7VUFDQSxJQUFBK1IsTUFBQSxHQUFBL1IsT0FBQTtVQUNBLElBQUE0SyxRQUFBLEdBQUE1SyxPQUFBO1VBRU87VUFBVyxNQUFNc1QsZ0JBQWdCLEdBQUdBLENBQUM7WUFBRXJCLElBQUk7WUFBRUMsT0FBTztZQUFFcUI7VUFBUyxDQUFFLEtBQUk7WUFDM0UsSUFBSSxDQUFDdEIsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixNQUFNO2NBQUV2UDtZQUFLLENBQUUsR0FBRyxJQUFBa0ksUUFBQSxDQUFBUSxjQUFjLEdBQUU7WUFDbEMsTUFBTW9JLFFBQVEsR0FBRzlRLEtBQUssQ0FBQytELFdBQVcsQ0FBQzBMLEtBQUs7WUFDeEMsTUFBTUMsV0FBVyxHQUFHMVAsS0FBSyxDQUFDK0QsV0FBVyxDQUFDMkwsV0FBVztZQUVqRCxPQUNDM0gsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQSxDQUFBckMsTUFBQSxDQUFBL0YsT0FBQSxDQUFBa0osUUFBQSxRQUNDbkQsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQSxDQUFDaUYsTUFBQSxDQUFBTSxVQUFVO2NBQUNILE9BQU8sRUFBRUEsT0FBTztjQUFFSSxRQUFRO2NBQUNpQixTQUFTLEVBQUVBO1lBQVMsR0FDMUQ5SSxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE4QixHQUM1Q3RDLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQThCLEdBQzVDdEMsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBc0IsR0FBRXJLLEtBQUssQ0FBQytELFdBQVcsQ0FBQ2dOLEtBQUssQ0FBUSxFQUN2RWhKLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUEsYUFBSzBHLFFBQVEsQ0FBTSxDQUNkLEVBQ04vSSxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLENBQUNwQyxNQUFBLENBQUE2SCxJQUFJO2NBQUN4RixTQUFTLEVBQUMsMEJBQTBCO2NBQUMvQixJQUFJLEVBQUM7WUFBSyxFQUFHLEVBQ3hEUCxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUF5QixHQUFFcUYsV0FBVyxDQUFLLENBQ25ELENBQ00sQ0FDWDtVQUVMLENBQUM7VUFBQ3ZTLE9BQUEsQ0FBQXlULGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCRixJQUFBN0ksTUFBQSxHQUFBekssT0FBQTtVQUNBLElBQUEwSyxNQUFBLEdBQUExSyxPQUFBO1VBQ0EsSUFBQTBULE1BQUEsR0FBQTFULE9BQUE7VUFDQSxJQUFBNEssUUFBQSxHQUFBNUssT0FBQTtVQUNBLElBQUE4TixXQUFBLEdBQUE5TixPQUFBO1VBQ0EsSUFBQTJULE9BQUEsR0FBQTNULE9BQUE7VUFFTyxNQUFNb1QsTUFBTSxHQUFHQSxDQUFBLEtBQUs7WUFDMUIsTUFBTTtjQUFFN1MsUUFBUTtjQUFFOFAsWUFBWTtjQUFFYSxjQUFjO2NBQUVwRyxLQUFLO2NBQUV5RixPQUFPO2NBQUVEO1lBQVcsQ0FBRSxHQUFHLElBQUExRixRQUFBLENBQUFvRixlQUFlLEdBQUU7WUFDakcsTUFBTSxDQUFDNEQsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR3BKLE1BQUEsQ0FBQS9GLE9BQUssQ0FBQzJJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTSxDQUFDN0osUUFBUSxFQUFFc1EsV0FBVyxDQUFDLEdBQUdySixNQUFBLENBQUEvRixPQUFLLENBQUMySSxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXBELE1BQU0wRyxNQUFNLEdBQUcsTUFBTTdMLEtBQUssSUFBRztjQUM1QkEsS0FBSyxDQUFDc0ksY0FBYyxFQUFFO2NBQ3RCLE1BQU1qUSxRQUFRLENBQUMrRSxJQUFJLEVBQUU7Y0FDckIrSyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFFRDVGLE1BQUEsQ0FBQS9GLE9BQUssQ0FBQzZILFNBQVMsQ0FBQyxNQUFLO2NBQ3BCaEIsVUFBVSxDQUFDLE1BQUs7Z0JBQ2Z1SSxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ04sTUFBTTFPLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0J5TyxhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CLE1BQU05USxLQUFLLEdBQUcsTUFBTXhDLFFBQVEsQ0FBQytFLElBQUksRUFBRTtjQUNuQyxNQUFNaUIsYUFBYSxHQUFHLE1BQU11RSxLQUFLLENBQUMxRixVQUFVLENBQUNyQyxLQUFLLENBQUM7Y0FDbkQsSUFBSXdELGFBQWEsQ0FBQ3JCLEtBQUssRUFBRTtnQkFDeEJuQixPQUFPLENBQUNtQixLQUFLLENBQUNxQixhQUFhLENBQUNyQixLQUFLLENBQUM7Z0JBQ2xDOztjQUVEcUwsT0FBTyxDQUFDaEssYUFBYSxDQUFDd0MsSUFBSSxDQUFDZ0gsSUFBSSxDQUFDO2NBQ2hDTSxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFFRCxNQUFNUCxRQUFRLEdBQUcsTUFBTTVILEtBQUssSUFBRztjQUM5QkEsS0FBSyxDQUFDc0ksY0FBYyxFQUFFO2NBQ3RCdEksS0FBSyxDQUFDdUksZUFBZSxFQUFFO2NBQ3ZCLElBQUk7Z0JBQ0hILFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLElBQUlZLGNBQWMsRUFBRSxPQUFPOUwsVUFBVSxFQUFFO2dCQUN2QyxNQUFNckMsS0FBSyxHQUFHLE1BQU14QyxRQUFRLENBQUMrRSxJQUFJLEVBQUU7Z0JBQ25DdkIsT0FBTyxDQUFDNEQsR0FBRyxDQUFDLE9BQU8sRUFBRTVFLEtBQUssQ0FBQztnQkFDM0IrSCxLQUFLLENBQUMzRixTQUFTLENBQUNwQyxLQUFLLENBQUM7Z0JBQ3RCc04sWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFDbkJDLFdBQVcsQ0FBQyxLQUFLLENBQUM7ZUFDbEIsQ0FBQyxPQUFPckwsQ0FBQyxFQUFFO2dCQUNYbEIsT0FBTyxDQUFDbUIsS0FBSyxDQUFDRCxDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFDRCxPQUNDd0YsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNkIsR0FDM0N0QyxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLENBQUNwQyxNQUFBLENBQUFzQyxVQUFVO2NBQUNELFNBQVMsRUFBQyxRQUFRO2NBQUMvQixJQUFJLEVBQUMsUUFBUTtjQUFDa0MsT0FBTyxFQUFFNkc7WUFBTSxFQUFJLEVBQ2hFdEosTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQSxDQUFDNEcsTUFBQSxDQUFBTSxLQUFLO2NBQUNDLE1BQU0sRUFBQztZQUFPLEVBQUcsRUFDeEJ4SixNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE2QixHQUMxQzZHLFVBQVUsR0FDVm5KLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUEsQ0FBQ2dCLFdBQUEsQ0FBQXVGLE1BQU0sUUFDTjVJLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUEsQ0FBQ2dCLFdBQUEsQ0FBQUUsT0FBTztjQUFDQyxNQUFNO1lBQUEsRUFBRyxDQUNWLEdBRVR4RCxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLENBQUM2RyxPQUFBLENBQUExRCxhQUFhO2NBQ2JqRixJQUFJLEVBQUMsYUFBYTtjQUNsQitCLFNBQVMsRUFBQyxRQUFRO2NBQ2xCRSxPQUFPLEVBQUMsU0FBUztjQUNqQkMsT0FBTyxFQUFFNEMsUUFBUTtjQUNqQnRNLFFBQVEsRUFBRUE7WUFBUSxFQUVuQixDQUNJLENBQ0Q7VUFFUixDQUFDO1VBQUMzRCxPQUFBLENBQUF1VCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkVGLElBQUEzSSxNQUFBLEdBQUF6SyxPQUFBO1VBQ0EsSUFBQTJLLE1BQUEsR0FBQTNLLE9BQUE7VUFDQSxJQUFBNEssUUFBQSxHQUFBNUssT0FBQTtVQUVNLFNBQVU4UixTQUFTQSxDQUFDO1lBQUV4QixXQUFXO1lBQUVDLE9BQU87WUFBRUcsVUFBVTtZQUFFdE0sUUFBUTtZQUFFMkwsSUFBSTtZQUFFdk07VUFBUSxDQUFFO1lBQ3ZGLE1BQU07Y0FBRXNIO1lBQUssQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQW9GLGVBQWUsR0FBRTtZQUNuQyxNQUFNa0UsV0FBVyxHQUFHekosTUFBQSxDQUFBL0YsT0FBSyxDQUFDdUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUN0Q1IsTUFBQSxDQUFBL0YsT0FBSyxDQUFDNkgsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTTRILE1BQU0sR0FBR0QsV0FBVyxDQUFDekksT0FBTztjQUNsQzBJLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsTUFBTTtjQUM1QkYsTUFBTSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sR0FDbEJ0RSxJQUFJLENBQUN2SCxNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDMkwsTUFBTSxDQUFDdEksWUFBWSxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUdzSSxNQUFNLENBQUN0SSxZQUFZLElBQUksSUFBSTtjQUU1RixJQUFJLENBQUMsV0FBVyxFQUFFOUcsU0FBUyxDQUFDLENBQUNDLFFBQVEsQ0FBQytLLElBQUksQ0FBQzRCLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNuRSxDQUFDLEVBQUUsQ0FBQzVCLElBQUksQ0FBQyxDQUFDO1lBRVYsSUFBQXBGLE1BQUEsQ0FBQVcsU0FBUyxFQUNSLENBQUNSLEtBQUssQ0FBQ3ZJLElBQUksQ0FBQyxFQUNaLE1BQUs7Y0FDSitCLFVBQVUsQ0FBQ2lILFVBQVUsQ0FBQyxNQUFNMkksV0FBVyxDQUFDekksT0FBTyxDQUFDNkksS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzVELENBQUMsRUFDRCxtQkFBbUIsQ0FDbkI7WUFFRCxNQUFNQyxnQkFBZ0IsR0FBRztjQUFFL1EsUUFBUSxFQUFFWSxRQUFRLElBQUlaO1lBQVEsQ0FBRTtZQUMzRCxNQUFNZ1IsaUJBQWlCLEdBQUd2UCxDQUFDLElBQUc7Y0FDN0IsTUFBTTtnQkFBRW5GO2NBQUssQ0FBRSxHQUFHbUYsQ0FBQyxDQUFDa1AsTUFBTTtjQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFcFAsU0FBUyxDQUFDLENBQUNDLFFBQVEsQ0FBQ2xGLEtBQUssQ0FBQzZSLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2NBQy9EcEIsT0FBTyxDQUFDelEsS0FBSyxDQUFDO1lBQ2YsQ0FBQztZQUNELE1BQU0yVSxhQUFhLEdBQUd4UCxDQUFDLElBQUc7Y0FDekIsSUFBSUEsQ0FBQyxDQUFDeVAsR0FBRyxLQUFLLE9BQU8sRUFBRTtjQUN2QixNQUFNQyxFQUFFLEdBQUdDLFNBQVMsSUFBSUEsU0FBUyxHQUFHLElBQUk7Y0FDeEMsTUFBTTlVLEtBQUssR0FBR21GLENBQUMsQ0FBQ2tQLE1BQU0sQ0FBQ3JVLEtBQUssQ0FBQzZSLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDN0MsSUFBSSxDQUFDLEVBQUUsRUFBRTVNLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxDQUFDbEYsS0FBSyxDQUFDLEVBQUU7Y0FDM0NtRixDQUFDLENBQUM0UCxRQUFRLEdBQUd0RSxPQUFPLENBQUNvRSxFQUFFLENBQUMsR0FBR2pFLFVBQVUsRUFBRTtZQUN4QyxDQUFDO1lBRUQsT0FDQ2pHLE1BQUEsQ0FBQS9GLE9BQUEsQ0FBQW9JLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWdCLEdBQzlCdEMsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQTtjQUFBLEdBQ0t5SCxnQkFBZ0I7Y0FDcEJPLElBQUksRUFBRSxDQUFDO2NBQ1BoVixLQUFLLEVBQUVpUSxJQUFJO2NBQ1hnRixRQUFRLEVBQUVQLGlCQUFpQjtjQUMzQlEsU0FBUyxFQUFFUCxhQUFhO2NBQ3hCUSxTQUFTLEVBQUUsSUFBSTtjQUNmbEksU0FBUyxFQUFDLGlCQUFpQjtjQUMzQjFCLEdBQUcsRUFBRTZJO1lBQVcsRUFDZixDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRBLElBQUF6SixNQUFBLEdBQUF6SyxPQUFBO1VBQ0EsSUFBQWtWLFNBQUEsR0FBQWxWLE9BQUE7VUFGQTs7VUFRTSxTQUFVZ1UsS0FBS0EsQ0FBQztZQUFFQztVQUFNLENBQWM7WUFDM0MsTUFBTWtCLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQ25RLFFBQVEsQ0FBQ2lQLE1BQU0sQ0FBQztZQUN2RCxNQUFNbUIsT0FBTyxHQUFHbkIsTUFBTSxLQUFLLFNBQVM7WUFDcEMsTUFBTSxDQUFDb0IsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDLEdBQUcsSUFBQU4sU0FBQSxDQUFBTyxRQUFRLEVBQUNOLFNBQVMsRUFBRUMsT0FBTyxDQUFDO1lBQzVFLE1BQU1NLFdBQVcsR0FBR0gsT0FBTyxDQUFDSSxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDdkQsTUFBTUMsZUFBZSxHQUFHUCxPQUFPLENBQUNLLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUMzRCxPQUNDbkwsTUFBQSxDQUFBL0YsT0FBQSxDQUFBb0ksYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBMEIsR0FDeEN0QyxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLGVBQU8sR0FBRytJLGVBQWUsRUFBRSxFLElBQVMsRUFDcENwTCxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLGVBQU8sR0FBRzRJLFdBQVcsRUFBRSxDQUFRLENBQzFCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUFqTCxNQUFBLEdBQUF6SyxPQUFBO1VBREE7O1VBRUEsTUFBTTtZQUFFcU4sUUFBUTtZQUFFZDtVQUFTLENBQUUsR0FBRzlCLE1BQUEsQ0FBQS9GLE9BQUs7VUFFL0IsU0FBVStRLFFBQVFBLENBQUNOLFNBQWtCLEVBQUVDLE9BQWdCO1lBQzVELE1BQU0sQ0FBQ1UsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBRzFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFbkNkLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSXlKLFVBQTBCO2NBRTlCLElBQUliLFNBQVMsRUFBRTtnQkFDZGEsVUFBVSxHQUFHQyxXQUFXLENBQUMsTUFBSztrQkFDN0JGLE9BQU8sQ0FBQ0csUUFBUSxJQUFJQSxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Y0FHVCxPQUFPLE1BQUs7Z0JBQ1hDLGFBQWEsQ0FBQ0gsVUFBVSxDQUFDO2NBQzFCLENBQUM7WUFDRixDQUFDLEVBQUUsQ0FBQ2IsU0FBUyxDQUFDLENBQUM7WUFFZjVJLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSTZJLE9BQU8sRUFBRTtnQkFDWlcsT0FBTyxDQUFDLENBQUMsQ0FBQzs7WUFFWixDQUFDLEVBQUUsQ0FBQ1gsT0FBTyxDQUFDLENBQUM7WUFFYixNQUFNSSxZQUFZLEdBQUdNLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNqQyxNQUFNUCxPQUFPLEdBQUdhLElBQUksQ0FBQ0MsS0FBSyxDQUFFUCxJQUFJLEdBQUcsR0FBRyxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTVIsT0FBTyxHQUFHYyxJQUFJLENBQUNDLEtBQUssQ0FBRVAsSUFBSSxHQUFHLElBQUksR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU1ULEtBQUssR0FBR2UsSUFBSSxDQUFDQyxLQUFLLENBQUNQLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sQ0FBQ1QsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDO1VBQy9DOzs7Ozs7Ozs7OztVQ2pDQTs7VUFFQTdWLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBMkssTUFBQSxHQUFBekssT0FBQTtVQUVNLFNBQVUwUCxZQUFZQSxDQUFBO1lBQzNCLE9BQU9qRixNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLG9CQUFjO1VBQ3RCOzs7Ozs7Ozs7OztVckJKQTs7VUFFQW5OLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VXNCSkEsSUFBQTJLLE1BQUEsR0FBQXpLLE9BQUE7VUFDQSxJQUFBc1csTUFBQSxHQUFBdFcsT0FBQTtVQUVNLFNBQVU2TyxVQUFVQSxDQUFDdEwsRUFBRTtZQUM1QixNQUFNLENBQUNLLEtBQUssRUFBRXVLLFFBQVEsQ0FBQyxHQUFHMUQsTUFBQSxDQUFBL0YsT0FBSyxDQUFDMkksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUN2QyxLQUFLLEVBQUV5TCxRQUFRLENBQUMsR0FBRzlMLE1BQUEsQ0FBQS9GLE9BQUssQ0FBQzJJLFFBQVEsQ0FBZSxFQUFrQixDQUFDO1lBQzFFLE1BQU0sQ0FBQ2hHLEtBQUssRUFBRW1QLFFBQVEsQ0FBQyxHQUFHL0wsTUFBQSxDQUFBL0YsT0FBSyxDQUFDMkksUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNb0osUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTUMsT0FBTyxHQUFHLElBQUlKLE1BQUEsQ0FBQXBVLFlBQVksQ0FBQ3FCLEVBQUUsQ0FBQztjQUNwQyxNQUFNd1IsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3JCeUIsUUFBUSxDQUFDO2tCQUFFLEdBQUdFLE9BQU8sQ0FBQ0MsYUFBYTtnQkFBRSxDQUFFLENBQUM7Z0JBQ3hDeEksUUFBUSxDQUFDdUksT0FBTyxDQUFDOVMsS0FBSyxDQUFDO2NBQ3hCLENBQUM7Y0FDRCxNQUFNZ1QsT0FBTyxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3BCRixPQUFPLENBQUNHLEdBQUcsQ0FBQyxRQUFRLEVBQUU5QixRQUFRLENBQUM7Y0FDaEMsQ0FBQztjQUNEMkIsT0FBTyxDQUFDcFYsRUFBRSxDQUFDLFFBQVEsRUFBRXlULFFBQVEsQ0FBQztjQUM5QndCLFFBQVEsQ0FBQ0csT0FBTyxDQUFDO2NBQ2pCdkksUUFBUSxDQUFDdUksT0FBTyxDQUFDOVMsS0FBSyxDQUFDO2NBQ3ZCLE9BQU9nVCxPQUFPO1lBQ2YsQ0FBQztZQUNEbk0sTUFBQSxDQUFBL0YsT0FBSyxDQUFDNkgsU0FBUyxDQUFDa0ssUUFBUSxFQUFFLENBQUNsVCxFQUFFLENBQUMsQ0FBQztZQUUvQixPQUFPO2NBQUVLLEtBQUs7Y0FBRWtIO1lBQUssQ0FBRTtVQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQUwsTUFBQSxHQUFBekssT0FBQTtVQUNBLElBQUEySyxNQUFBLEdBQUEzSyxPQUFBO1VBQ0EsSUFBQXNQLEtBQUEsR0FBQXRQLE9BQUE7VUFDQSxJQUFBNEssUUFBQSxHQUFBNUssT0FBQTtVQUNBLElBQUF1UCxTQUFBLEdBQUF2UCxPQUFBO1VBQ0EsSUFBQXdQLFNBQUEsR0FBQXhQLE9BQUE7VUFFQTs7Ozs7VUFLTSxTQUFVOFcsSUFBSUEsQ0FBQztZQUFFaE0sS0FBSztZQUFFLEdBQUc2RDtVQUFLLENBQUU7WUFDdkMsTUFBTSxDQUFDdkssUUFBUSxFQUFFa00sV0FBVyxDQUFDLEdBQUc3RixNQUFBLENBQUEvRixPQUFLLENBQUMySSxRQUFRLENBQUN2QyxLQUFLLENBQUMxRyxRQUFRLENBQUM7WUFDOUQsTUFBTSxDQUFDUixLQUFLLEVBQUV1SyxRQUFRLENBQUMsR0FBRzFELE1BQUEsQ0FBQS9GLE9BQUssQ0FBQzJJLFFBQVEsQ0FBQ3ZDLEtBQUssQ0FBQ2xILEtBQUssQ0FBQztZQUNyRCxNQUFNb0gsSUFBSSxHQUFHMkQsS0FBSyxDQUFDekQsVUFBVSxDQUFDMEIsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN6QyxNQUFNLENBQUN6QixjQUFjLEVBQUV5RCxpQkFBaUIsQ0FBQyxHQUFHbkUsTUFBQSxDQUFBL0YsT0FBSyxDQUFDMkksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRSxNQUFNO2NBQ0x4SixRQUFRO2NBQ1J6QixRQUFRO2NBQ1JNLEtBQUs7Y0FDTE0sWUFBWSxFQUFFO2dCQUFFbkM7Y0FBTTtZQUFFLENBQ3hCLEdBQUdpSyxLQUFLO1lBRVQsSUFBQUgsTUFBQSxDQUFBVyxTQUFTLEVBQUMsQ0FBQ1IsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QnFELFFBQVEsQ0FBQ3JELEtBQUssQ0FBQ2xILEtBQUssQ0FBQztZQUN0QixDQUFDLENBQUM7WUFFRixNQUFNb0wsWUFBWSxHQUFHO2NBQ3BCSixpQkFBaUIsRUFBRTlPLEtBQUssSUFBRztnQkFDMUIsSUFBSSxDQUFDQSxLQUFLLEVBQUVpRSxPQUFPLENBQUNrTCxLQUFLLENBQUMsd0NBQXdDLENBQUM7Z0JBQ25FTCxpQkFBaUIsQ0FBQzlPLEtBQUssQ0FBQztjQUN6QixDQUFDO2NBQ0RxTCxjQUFjO2NBQ2RMLEtBQUs7Y0FDTHBJLEtBQUssRUFBRW9JLEtBQUssQ0FBQ3BJLEtBQUs7Y0FDbEJtQixRQUFRO2NBQ1J5SixVQUFVLEVBQUV0QyxJQUFJO2NBQ2hCNUksUUFBUTtjQUNSdkIsTUFBTTtjQUNOK0MsS0FBSyxFQUFFa0gsS0FBSyxDQUFDbEgsS0FBSztjQUNsQnNILFVBQVUsRUFBRXlELEtBQUssQ0FBQ3pEO2FBQ2xCO1lBRUQsTUFBTXlDLE9BQU8sR0FBRyxDQUFDN0MsS0FBSyxDQUFDMUgsUUFBUSxHQUFHa00sS0FBQSxDQUFBakwsSUFBSSxHQUFHbUwsU0FBQSxDQUFBRSxZQUFZO1lBQ3JELE1BQU1vSCxJQUFJLEdBQUdsVCxLQUFLLEdBQUcrSixPQUFPLEdBQUc0QixTQUFBLENBQUF4QixZQUFZO1lBRTNDLE9BQ0N0RCxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLENBQUNsQyxRQUFBLENBQUFzRSxXQUFXLENBQUNDLFFBQVE7Y0FBQ3JQLEtBQUssRUFBRWtQO1lBQVksR0FDeEN2RSxNQUFBLENBQUEvRixPQUFBLENBQUFvSSxhQUFBLENBQUNnSyxJQUFJLE9BQUcsQ0FDYztVQUV6QiIsImlnbm9yZUxpc3QiOltdfQ==