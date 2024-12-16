System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.4.1/voice", "@aimpact/chat-sdk@1.4.1/wrapper", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.4.1/messages", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/chat-sdk@1.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, AudioManager, Recorder, Chat, AgentsChatContainer, ChatContext, useChatContext, AgentsChatPanel, AgentsChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, __beyond_pkg, hmr;
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
    PermissionsModal: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_beyondJsReactive1112Model) {
      dependency_2 = _beyondJsReactive1112Model;
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
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_10 = _pragmateUi100Beta7Icons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk141Messages) {
      dependency_12 = _aimpactChatSdk141Messages;
    }, function (_pragmateUi100Beta7Components) {
      dependency_13 = _pragmateUi100Beta7Components;
    }, function (_aimpactChatSdk141ComponentsIcons) {
      dependency_14 = _aimpactChatSdk141ComponentsIcons;
    }, function (_pragmateUi100Beta7Form) {
      dependency_15 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_16 = _pragmateUi100Beta7Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.2.17"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/voice', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['react', dependency_9], ['pragmate-ui/icons', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat-sdk/messages', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/chat-sdk/components/icons', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/modal', dependency_16]]);
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
        hash: 1303539854,
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
        hash: 2804113042,
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
        hash: 4195704006,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
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
        hash: 1416087461,
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
        hash: 947922350,
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
            let cls = `chat-control__container${reader ? ' reader__container' : ''}`;
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
              return _react.default.createElement(Control, null);
            }
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("section", {
              className: clsContent
            }, _react.default.createElement(_messages.Messages, {
              chat: store.chat,
              player: store.audioManager.player,
              current: store.currentMessage,
              store: store,
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
        hash: 1633886114,
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
            users,
            autoplay,
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
        hash: 1970597908,
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
        hash: 3814287935,
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
          var _icons = require("@aimpact/chat-sdk/components/icons");
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
            }, _react.default.createElement("div", null, _react.default.createElement(_icons.AppIconButton, {
              disabled: true,
              className: "chat-input__icon",
              icon: "attachFile"
            })), _react.default.createElement(_textInput.TextInput, {
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
        hash: 2424022499,
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
              target.style.height = text.length == 1 ? 'auto' : target.scrollHeight + 'px';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlN0b3JlTWFuYWdlciIsIkVYVEVOU0lPTlMiLCJtZXNzYWdlcyIsIml0ZW1zIiwiY2F0ZWdvcnkiLCJjaGF0IiwibW9kZWwiLCJjaGF0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwicHJvY2Vzc1RyYW5zY3JpcHRpb24iLCJwcm9jY2Vzc1RyYW5zY3JpcHRpb24iLCJzZWxlY3RlZE1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInJlYWR5IiwiYXV0b3BsYXkiLCJsb2FkIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJmZXRjaGluZyIsIkNoYXQiLCJnbG9iYWxUaGlzIiwibG9hZEFsbCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJkZWZhdWx0Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsImluaXRpYWxpc2VkIiwic291cmNlIiwic3RyZWFtIiwic3RhcnRUaW1lIiwiaW5pdFByb21pc2UiLCJzdG9wUHJvbWlzZSIsImF1ZGlvQ29udGV4dCIsInJlY29yZGluZ1Byb21pc2UiLCJtZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwic3RhdHVzIiwicmVjb3JkaW5nIiwidmFsaWQiLCJhbmFseXNlciIsInNwZWVjaFJlY29nbml0aW9uIiwidHJhbnNjcmlwdGlvbiIsInByb21pc2VTcGVlY2giLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25PYnNlcnZlciIsInBlcm1pc3Npb25TdGF0ZSIsImluaXQiLCJoYXNQZXJtaXNzaW9ucyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInF1ZXJ5Iiwic3RhdGUiLCJvbmNoYW5nZSIsIm9uQ2hhbmdlU3RhdHVzIiwiYmluZCIsIiNvbkNoYW5nZVN0YXR1cyIsImdldFNwZWVjaFJlY29nbml0aW9uIiwibG9nIiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJsYW5nIiwiY29udGludW91cyIsImludGVyaW1SZXN1bHRzIiwiUGVuZGluZ1Byb21pc2UiLCJvbnJlc3VsdCIsImV2ZW50IiwiaW50ZXJpbVRyYW5zY3JpcHQiLCJmaW5hbFRyYW5zY3JpcHQiLCJpIiwicmVzdWx0SW5kZXgiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaXNGaW5hbCIsInRyYW5zY3JpcHQiLCJyZXNvbHZlIiwib25lcnJvciIsInN0YXJ0Iiwib25EYXRhQXZhaWxhYmxlIiwiZGF0YSIsInNpemUiLCJwdXNoIiwic3RhcnRSZWNvcmRpbmciLCIjc3RhcnRSZWNvcmRpbmciLCJzcGVjcyIsIk1lZGlhUmVjb3JkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGlzZSIsInRoZW4iLCJjYXRjaCIsInJlamVjdCIsImZpbmFsbHkiLCJyZWNvcmQiLCJvblN0cmVhbSIsIm9uRXJyb3IiLCJzdG9wU3RyZWFtIiwia2luZCIsImNsb3NlIiwibWljcm9waG9uZSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiZGlzY29ubmVjdCIsIkJsb2IiLCJ0eXBlIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsIl9yZWFjdCIsIl9pY29ucyIsIl9ob29rcyIsIl9jb250ZXh0IiwiQmFja0Fycm93Iiwic3RvcmUiLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwiYXR0cmlidXRlcyIsInNjcm9sbFBvc2l0aW9uIiwidXNlQ2hhdENvbnRleHQiLCJyZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0IiwiY29udGFpbmVyIiwiY3VycmVudCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiZGlzdGFuY2VGcm9tQm90dG9tIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ29Ub0JvdHRvbSIsImFkZCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJnZXQiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX21lc3NhZ2VzIiwicmVhZGVyIiwidXNlU3RhdGUiLCJzeXN0ZW1JY29uIiwiZW1wdHkiLCJzZXRNZXNzYWdlcyIsIm9uTmV3TWVzc2FnZSIsImNsc0NvbnRlbnQiLCJDb250cm9sIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIl9jb21wb25lbnRzIiwiQ2hhdFNrZWxldG9uIiwiU3Bpbm5lciIsImFjdGl2ZSIsInVzZUV4dGVuc2lvbiIsInNldFJlYWR5Iiwid2ViQ29tcG9uZW50TmFtZSIsImNvbnRyb2wiLCJvblJlYWR5IiwiX3VzZU1hbmFnZXIiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJ1c2VycyIsInByb3BzIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJ1c2VNYW5hZ2VyIiwib2JqIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDaGF0Q29udGV4dCIsIlByb3ZpZGVyIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIkFnZW50c0NoYXRQYW5lbCIsIkNoYXROb3RGb3VuZCIsIl9yZWNvcmRpbmciLCJJbnB1dEFjdGlvbkJ1dHRvbiIsImJ1dHRvbklzRGlzYWJsZWQiLCJvblN1Ym1pdCIsInRleHQiLCJ1c2VJbnB1dENvbnRleHQiLCJBcHBJY29uQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRGb3JtIiwic2V0UmVjb3JkaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRUZXh0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVTZW5kIiwiX2Zvcm0iLCJfdGV4dElucHV0IiwiX2FjdGlvbkJ1dHRvbiIsIl9jb250ZXh0MiIsIl91c2VJbnB1dEZvcm0iLCJBZ2VudHNDaGF0SW5wdXQiLCJpc1dhaXRpbmciLCJhdXRvVHJhbnNjcmliZSIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwid2FpdGluZ1Jlc3BvbnNlIiwiaXNGZXRjaGluZyIsImlzRGlzYWJsZWQiLCJhdHRycyIsImNvbnRhaW5lckF0dHJzIiwiY29udHJvbEF0dHJzIiwicmVwbGFjZUFsbCIsInRyaW0iLCJGb3JtIiwiVGV4dElucHV0IiwiX21vZGFsIiwiUGVybWlzc2lvbnNFcnJvck1vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInNldEl0ZW0iLCJwbGF5QWN0aW9uIiwib25DbG9zZUVycm9yIiwiUGxheWVyIiwiQnV0dG9uIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdGltZXIiLCJfaWNvbnMyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzZXREaXNhYmxlZCIsImNhbmNlbCIsIlRpbWVyIiwiYWN0aW9uIiwidGV4dEFyZWFSZWYiLCJ0YXJnZXQiLCJzdHlsZSIsImhlaWdodCIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJyb3dzIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwiY2FsbGJhY2siLCJtYW5hZ2VyIiwiZ2V0UHJvcGVydGllcyIsImNsZWFuVXAiLCJvZmYiLCJWaWV3Il0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2FjdGlvbi1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2hvb2tzL3VzZS1pbnB1dC1mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvYWdlbnRzLWlucHV0LnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4IiwiL3RzL3ZpZXdzL3VzZS1tYW5hZ2VyLnRzeCIsIi90cy92aWV3cy93aWRnZXQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGws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