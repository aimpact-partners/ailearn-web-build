System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.1.0/voice", "@aimpact/chat-sdk@1.1.0/wrapper", "@aimpact/chat-sdk@1.1.0/core", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.1.0/messages", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/chat-sdk@1.1.0/components/icons", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/modal"], function (_export, _context3) {
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
    }, function (_beyondJsReactive120Model) {
      dependency_2 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk110Voice) {
      dependency_3 = _aimpactChatSdk110Voice;
    }, function (_aimpactChatSdk110Wrapper) {
      dependency_4 = _aimpactChatSdk110Wrapper;
    }, function (_aimpactChatSdk110Core) {
      dependency_5 = _aimpactChatSdk110Core;
    }, function (_aimpactChatSdk110Session) {
      dependency_6 = _aimpactChatSdk110Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_10 = _pragmateUi100Beta6Icons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk110Messages) {
      dependency_12 = _aimpactChatSdk110Messages;
    }, function (_pragmateUi100Beta6Components) {
      dependency_13 = _pragmateUi100Beta6Components;
    }, function (_aimpactChatSdk110ComponentsIcons) {
      dependency_14 = _aimpactChatSdk110ComponentsIcons;
    }, function (_pragmateUi100Beta6Form) {
      dependency_15 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_16 = _pragmateUi100Beta6Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.1"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.1.0/chat-component",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/voice', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['react', dependency_9], ['pragmate-ui/icons', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat-sdk/messages', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/chat-sdk/components/icons', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/modal', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.1.0/chat-component.code');
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
        hash: 2260288212,
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
              globalThis.store = this;
              // attrs.on('change', () => this.checkAttributes(attrs));
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
        hash: 3017491944,
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
        hash: 1819983516,
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
        hash: 611636456,
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
            (0, _hooks.useBinder)([store], () => setWaiting(store.waitingResponse));
            const isFetching = fetching || recording || waiting || isWaiting;
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
        hash: 2340691925,
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
            const cancel = async event => {
              event.preventDefault();
              await recorder.stop();
              setRecording(false);
            };
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
              onClick: onSubmit
            })));
          };
          exports.Player = Player;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/input/text-input
      ****************************************/

      ims.set('./views/input/text-input', {
        hash: 1228120398,
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
            (0, _hooks.useBinder)([store], () => {
              globalThis.setTimeout(() => textAreaRef.current.focus(), 300);
              setFetching(false);
            }, 'chat.available');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlN0b3JlTWFuYWdlciIsIkVYVEVOU0lPTlMiLCJtZXNzYWdlcyIsIml0ZW1zIiwiY2F0ZWdvcnkiLCJjaGF0IiwibW9kZWwiLCJjaGF0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwicHJvY2Vzc1RyYW5zY3JpcHRpb24iLCJwcm9jY2Vzc1RyYW5zY3JpcHRpb24iLCJzZWxlY3RlZE1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInJlYWR5IiwiYXV0b3BsYXkiLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJsb2FkIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJmZXRjaGluZyIsIkNoYXQiLCJsb2FkQWxsIiwiY3VycmVudENoYXQiLCJmb3VuZCIsImRlZmF1bHQiLCJzZW5kTWVzc2FnZSIsImNvbnRlbnQiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImUiLCJlcnJvciIsInNlbmRBdWRpbyIsInRyYW5zY3JpYmUiLCJ1bm1vdW50Iiwic3RvcCIsImNsZWFuIiwiaW5pdGlhbGlzZWQiLCJzb3VyY2UiLCJzdHJlYW0iLCJzdGFydFRpbWUiLCJpbml0UHJvbWlzZSIsInN0b3BQcm9taXNlIiwiYXVkaW9Db250ZXh0IiwicmVjb3JkaW5nUHJvbWlzZSIsIm1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJzdGF0dXMiLCJyZWNvcmRpbmciLCJ2YWxpZCIsImFuYWx5c2VyIiwic3BlZWNoUmVjb2duaXRpb24iLCJ0cmFuc2NyaXB0aW9uIiwicHJvbWlzZVNwZWVjaCIsInBlcm1pc3Npb25zIiwicGVybWlzc2lvbk9ic2VydmVyIiwicGVybWlzc2lvblN0YXRlIiwiaW5pdCIsImhhc1Blcm1pc3Npb25zIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwicXVlcnkiLCJzdGF0ZSIsIm9uY2hhbmdlIiwib25DaGFuZ2VTdGF0dXMiLCJiaW5kIiwiI29uQ2hhbmdlU3RhdHVzIiwiZ2V0U3BlZWNoUmVjb2duaXRpb24iLCJsb2ciLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJQZW5kaW5nUHJvbWlzZSIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsImkiLCJyZXN1bHRJbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJpc0ZpbmFsIiwidHJhbnNjcmlwdCIsInJlc29sdmUiLCJvbmVycm9yIiwic3RhcnQiLCJvbkRhdGFBdmFpbGFibGUiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJzdGFydFJlY29yZGluZyIsIiNzdGFydFJlY29yZGluZyIsInNwZWNzIiwiTWVkaWFSZWNvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXNlIiwidGhlbiIsImNhdGNoIiwicmVqZWN0IiwiZmluYWxseSIsInJlY29yZCIsIm9uU3RyZWFtIiwib25FcnJvciIsInN0b3BTdHJlYW0iLCJraW5kIiwiY2xvc2UiLCJtaWNyb3Bob25lIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJkaXNjb25uZWN0IiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwiYXR0cmlidXRlcyIsInNjcm9sbFBvc2l0aW9uIiwidXNlQ2hhdENvbnRleHQiLCJyZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0IiwiY29udGFpbmVyIiwiY3VycmVudCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiZGlzdGFuY2VGcm9tQm90dG9tIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ29Ub0JvdHRvbSIsImFkZCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJnZXQiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX21lc3NhZ2VzIiwicmVhZGVyIiwidXNlU3RhdGUiLCJzeXN0ZW1JY29uIiwiZW1wdHkiLCJzZXRNZXNzYWdlcyIsIm9uTmV3TWVzc2FnZSIsImNsc0NvbnRlbnQiLCJDb250cm9sIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIl9jb21wb25lbnRzIiwiQ2hhdFNrZWxldG9uIiwiU3Bpbm5lciIsImFjdGl2ZSIsInVzZUV4dGVuc2lvbiIsInNldFJlYWR5Iiwid2ViQ29tcG9uZW50TmFtZSIsImNvbnRyb2wiLCJvblJlYWR5IiwiX3VzZU1hbmFnZXIiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJwcm9wcyIsInNldFNjcm9sbFBvc2l0aW9uIiwidXNlTWFuYWdlciIsIm9iaiIsImNvbnRleHRWYWx1ZSIsInRyYWNlIiwiQ2hhdENvbnRleHQiLCJQcm92aWRlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJBZ2VudHNDaGF0UGFuZWwiLCJDaGF0Tm90Rm91bmQiLCJfcmVjb3JkaW5nIiwiSW5wdXRBY3Rpb25CdXR0b24iLCJidXR0b25Jc0Rpc2FibGVkIiwib25TdWJtaXQiLCJ0ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiQXBwSWNvbkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Rm9ybSIsInNldFJlY29yZGluZyIsInNldEZldGNoaW5nIiwic2V0VGV4dCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlU2VuZCIsIl9mb3JtIiwiX3RleHRJbnB1dCIsIl9hY3Rpb25CdXR0b24iLCJfY29udGV4dDIiLCJfdXNlSW5wdXRGb3JtIiwiQWdlbnRzQ2hhdElucHV0IiwiaXNXYWl0aW5nIiwiYXV0b1RyYW5zY3JpYmUiLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsIndhaXRpbmdSZXNwb25zZSIsImlzRmV0Y2hpbmciLCJpc0Rpc2FibGVkIiwiYXR0cnMiLCJjb250YWluZXJBdHRycyIsImNvbnRyb2xBdHRycyIsInJlcGxhY2VBbGwiLCJ0cmltIiwiRm9ybSIsIlRleHRJbnB1dCIsIl9tb2RhbCIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkFsZXJ0TW9kYWwiLCJjZW50ZXJlZCIsIkljb24iLCJfcGxheWVyIiwiX2Vycm9yTW9kYWwiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJzZXRFcnJvciIsInNldEhhc1Blcm1pc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJzZXRJdGVtIiwicGxheUFjdGlvbiIsIm9uQ2xvc2VFcnJvciIsIlBsYXllciIsIkJ1dHRvbiIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJzdWJ0aXRsZSIsImludHJvIiwiX3RpbWVyIiwiX2ljb25zMiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJ0ZXh0QXJlYVJlZiIsInRhcmdldCIsInN0eWxlIiwiaGVpZ2h0IiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsInJvd3MiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciIsIl9zdG9yZSIsInNldFN0b3JlIiwic2V0U3RhdGUiLCJjYWxsYmFjayIsIm1hbmFnZXIiLCJnZXRQcm9wZXJ0aWVzIiwiY2xlYW5VcCIsIm9mZiIsIlZpZXciXSwic291cmNlcyI6WyIvbWVzc2FnZXMudHMiLCIvdHMvc3RvcmUvYXVkaW8udHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHMvc3RvcmUvcmVjb3JkZXIudHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvY2hhdC9iYWNrLWFycm93LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvdXNlLWV4dGVuc2lvbi50c3giLCIvdHMvdmlld3MvY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvYWN0aW9uLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaG9va3MvdXNlLWlucHV0LWZvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvZXJyb3ItbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL21vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC90ZXh0LWlucHV0LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi9hZ2VudHMtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giLCIvdHMvdmlld3MvdXNlLW1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL3dpZGdldC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7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