System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/reactive@0.0.1/model", "@aimpact/chat-sdk@1.4.1/voice", "@aimpact/chat-sdk@1.4.1/wrapper", "@aimpact/chat-sdk@1.4.1/core", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.4.1/messages", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/chat-sdk@1.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, AudioManager, Recorder, Chat, AgentsChatContainer, ChatContext, useChatContext, AgentsChatPanel, AgentsChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, IAgentsContainerProps, __beyond_pkg, hmr;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/reactive/model', dependency_2], ['@aimpact/chat-sdk/voice', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['react', dependency_9], ['pragmate-ui/icons', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat-sdk/messages', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/chat-sdk/components/icons', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/modal', dependency_16]]);
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
        hash: 222045620,
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
        hash: 2938172690,
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
        hash: 2656213920,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlN0b3JlTWFuYWdlciIsIkVYVEVOU0lPTlMiLCJtZXNzYWdlcyIsIml0ZW1zIiwiY2F0ZWdvcnkiLCJjaGF0IiwibW9kZWwiLCJjaGF0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwicHJvY2Vzc1RyYW5zY3JpcHRpb24iLCJwcm9jY2Vzc1RyYW5zY3JpcHRpb24iLCJzZWxlY3RlZE1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInJlYWR5IiwiYXV0b3BsYXkiLCJsb2FkIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJmZXRjaGluZyIsIkNoYXQiLCJnbG9iYWxUaGlzIiwibG9hZEFsbCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJkZWZhdWx0Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsImluaXRpYWxpc2VkIiwic291cmNlIiwic3RyZWFtIiwic3RhcnRUaW1lIiwiaW5pdFByb21pc2UiLCJzdG9wUHJvbWlzZSIsImF1ZGlvQ29udGV4dCIsInJlY29yZGluZ1Byb21pc2UiLCJtZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwic3RhdHVzIiwicmVjb3JkaW5nIiwidmFsaWQiLCJhbmFseXNlciIsInNwZWVjaFJlY29nbml0aW9uIiwidHJhbnNjcmlwdGlvbiIsInByb21pc2VTcGVlY2giLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25PYnNlcnZlciIsInBlcm1pc3Npb25TdGF0ZSIsImluaXQiLCJoYXNQZXJtaXNzaW9ucyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInF1ZXJ5Iiwic3RhdGUiLCJvbmNoYW5nZSIsIm9uQ2hhbmdlU3RhdHVzIiwiYmluZCIsIiNvbkNoYW5nZVN0YXR1cyIsImdldFNwZWVjaFJlY29nbml0aW9uIiwibG9nIiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJsYW5nIiwiY29udGludW91cyIsImludGVyaW1SZXN1bHRzIiwiUGVuZGluZ1Byb21pc2UiLCJvbnJlc3VsdCIsImV2ZW50IiwiaW50ZXJpbVRyYW5zY3JpcHQiLCJmaW5hbFRyYW5zY3JpcHQiLCJpIiwicmVzdWx0SW5kZXgiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaXNGaW5hbCIsInRyYW5zY3JpcHQiLCJyZXNvbHZlIiwib25lcnJvciIsInN0YXJ0Iiwib25EYXRhQXZhaWxhYmxlIiwiZGF0YSIsInNpemUiLCJwdXNoIiwic3RhcnRSZWNvcmRpbmciLCIjc3RhcnRSZWNvcmRpbmciLCJzcGVjcyIsIk1lZGlhUmVjb3JkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGlzZSIsInRoZW4iLCJjYXRjaCIsInJlamVjdCIsImZpbmFsbHkiLCJyZWNvcmQiLCJvblN0cmVhbSIsIm9uRXJyb3IiLCJzdG9wU3RyZWFtIiwia2luZCIsImNsb3NlIiwibWljcm9waG9uZSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiZGlzY29ubmVjdCIsIkJsb2IiLCJ0eXBlIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsIl9yZWFjdCIsIl9pY29ucyIsIl9ob29rcyIsIl9jb250ZXh0IiwiQmFja0Fycm93Iiwic3RvcmUiLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwiYXR0cmlidXRlcyIsInNjcm9sbFBvc2l0aW9uIiwidXNlQ2hhdENvbnRleHQiLCJyZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0IiwiY29udGFpbmVyIiwiY3VycmVudCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiZGlzdGFuY2VGcm9tQm90dG9tIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ29Ub0JvdHRvbSIsImFkZCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJnZXQiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX21lc3NhZ2VzIiwicmVhZGVyIiwidXNlU3RhdGUiLCJzeXN0ZW1JY29uIiwiZW1wdHkiLCJzZXRNZXNzYWdlcyIsIm9uTmV3TWVzc2FnZSIsImNsc0NvbnRlbnQiLCJDb250cm9sIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIl9jb21wb25lbnRzIiwiQ2hhdFNrZWxldG9uIiwiU3Bpbm5lciIsImFjdGl2ZSIsInVzZUV4dGVuc2lvbiIsInNldFJlYWR5Iiwid2ViQ29tcG9uZW50TmFtZSIsImNvbnRyb2wiLCJvblJlYWR5IiwiX3VzZU1hbmFnZXIiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJwcm9wcyIsInNldFNjcm9sbFBvc2l0aW9uIiwidXNlTWFuYWdlciIsIm9iaiIsImNvbnRleHRWYWx1ZSIsInRyYWNlIiwiQ2hhdENvbnRleHQiLCJQcm92aWRlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJBZ2VudHNDaGF0UGFuZWwiLCJDaGF0Tm90Rm91bmQiLCJfcmVjb3JkaW5nIiwiSW5wdXRBY3Rpb25CdXR0b24iLCJidXR0b25Jc0Rpc2FibGVkIiwib25TdWJtaXQiLCJ0ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiQXBwSWNvbkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Rm9ybSIsInNldFJlY29yZGluZyIsInNldEZldGNoaW5nIiwic2V0VGV4dCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlU2VuZCIsIl9mb3JtIiwiX3RleHRJbnB1dCIsIl9hY3Rpb25CdXR0b24iLCJfY29udGV4dDIiLCJfdXNlSW5wdXRGb3JtIiwiQWdlbnRzQ2hhdElucHV0IiwiaXNXYWl0aW5nIiwiYXV0b1RyYW5zY3JpYmUiLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsIndhaXRpbmdSZXNwb25zZSIsImlzRmV0Y2hpbmciLCJpc0Rpc2FibGVkIiwiYXR0cnMiLCJjb250YWluZXJBdHRycyIsImNvbnRyb2xBdHRycyIsInJlcGxhY2VBbGwiLCJ0cmltIiwiRm9ybSIsIlRleHRJbnB1dCIsIl9tb2RhbCIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkFsZXJ0TW9kYWwiLCJjZW50ZXJlZCIsIkljb24iLCJfcGxheWVyIiwiX2Vycm9yTW9kYWwiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJzZXRFcnJvciIsInNldEhhc1Blcm1pc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJzZXRJdGVtIiwicGxheUFjdGlvbiIsIm9uQ2xvc2VFcnJvciIsIlBsYXllciIsIkJ1dHRvbiIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJzdWJ0aXRsZSIsImludHJvIiwiX3RpbWVyIiwiX2ljb25zMiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic2V0RGlzYWJsZWQiLCJjYW5jZWwiLCJUaW1lciIsImFjdGlvbiIsInRleHRBcmVhUmVmIiwidGFyZ2V0Iiwic3R5bGUiLCJoZWlnaHQiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwicm93cyIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwiX3N0b3JlIiwic2V0U3RvcmUiLCJzZXRTdGF0ZSIsImNhbGxiYWNrIiwibWFuYWdlciIsImdldFByb3BlcnRpZXMiLCJjbGVhblVwIiwib2ZmIiwiVmlldyJdLCJzb3VyY2VzIjpbIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS9yZWNvcmRlci50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9jaGF0L2JhY2stYXJyb3cudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvdmlld3MvY2hhdC91c2UtZXh0ZW5zaW9uLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9hY3Rpb24tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbnB1dC9ob29rcy91c2UtaW5wdXQtZm9ybS50c3giLCIvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL2FnZW50cy1pbnB1dC50c3giLCIvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCIsIi90cy92aWV3cy91c2UtbWFuYWdlci50c3giLCIvdHMvdmlld3Mvd2lkZ2V0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJt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