System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.3.0/voice", "@aimpact/chat-sdk@1.3.0/wrapper", "@aimpact/chat-sdk@1.3.0/core", "@aimpact/chat-sdk@1.3.0/session", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.3.0/messages", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/chat-sdk@1.3.0/components/icons", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/modal"], function (_export, _context3) {
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
    }, function (_aimpactChatSdk130Voice) {
      dependency_3 = _aimpactChatSdk130Voice;
    }, function (_aimpactChatSdk130Wrapper) {
      dependency_4 = _aimpactChatSdk130Wrapper;
    }, function (_aimpactChatSdk130Core) {
      dependency_5 = _aimpactChatSdk130Core;
    }, function (_aimpactChatSdk130Session) {
      dependency_6 = _aimpactChatSdk130Session;
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
    }, function (_aimpactChatSdk130Messages) {
      dependency_12 = _aimpactChatSdk130Messages;
    }, function (_pragmateUi100Beta6Components) {
      dependency_13 = _pragmateUi100Beta6Components;
    }, function (_aimpactChatSdk130ComponentsIcons) {
      dependency_14 = _aimpactChatSdk130ComponentsIcons;
    }, function (_pragmateUi100Beta6Form) {
      dependency_15 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_16 = _pragmateUi100Beta6Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.2"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.0"], ["wavesurfer.js", "7.8.6"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.11"], ["@types/react-dom", "18.3.0"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.3.0/chat-component",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/voice', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['react', dependency_9], ['pragmate-ui/icons', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat-sdk/messages', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/chat-sdk/components/icons', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/modal', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.3.0/chat-component.code');
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
        hash: 1226929430,
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
        hash: 1452549995,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlN0b3JlTWFuYWdlciIsIkVYVEVOU0lPTlMiLCJtZXNzYWdlcyIsIml0ZW1zIiwiY2F0ZWdvcnkiLCJjaGF0IiwibW9kZWwiLCJjaGF0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwicHJvY2Vzc1RyYW5zY3JpcHRpb24iLCJwcm9jY2Vzc1RyYW5zY3JpcHRpb24iLCJzZWxlY3RlZE1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInJlYWR5IiwiYXV0b3BsYXkiLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJsb2FkIiwiY29uc29sZSIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJmZXRjaGluZyIsIkNoYXQiLCJsb2FkQWxsIiwiY3VycmVudENoYXQiLCJmb3VuZCIsImRlZmF1bHQiLCJzZW5kTWVzc2FnZSIsImNvbnRlbnQiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImUiLCJlcnJvciIsInNlbmRBdWRpbyIsInRyYW5zY3JpYmUiLCJ1bm1vdW50Iiwic3RvcCIsImNsZWFuIiwiaW5pdGlhbGlzZWQiLCJzb3VyY2UiLCJzdHJlYW0iLCJzdGFydFRpbWUiLCJpbml0UHJvbWlzZSIsInN0b3BQcm9taXNlIiwiYXVkaW9Db250ZXh0IiwicmVjb3JkaW5nUHJvbWlzZSIsIm1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJzdGF0dXMiLCJyZWNvcmRpbmciLCJ2YWxpZCIsImFuYWx5c2VyIiwic3BlZWNoUmVjb2duaXRpb24iLCJ0cmFuc2NyaXB0aW9uIiwicHJvbWlzZVNwZWVjaCIsInBlcm1pc3Npb25zIiwicGVybWlzc2lvbk9ic2VydmVyIiwicGVybWlzc2lvblN0YXRlIiwiaW5pdCIsImhhc1Blcm1pc3Npb25zIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwicXVlcnkiLCJzdGF0ZSIsIm9uY2hhbmdlIiwib25DaGFuZ2VTdGF0dXMiLCJiaW5kIiwiI29uQ2hhbmdlU3RhdHVzIiwiZ2V0U3BlZWNoUmVjb2duaXRpb24iLCJsb2ciLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJQZW5kaW5nUHJvbWlzZSIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsImkiLCJyZXN1bHRJbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJpc0ZpbmFsIiwidHJhbnNjcmlwdCIsInJlc29sdmUiLCJvbmVycm9yIiwic3RhcnQiLCJvbkRhdGFBdmFpbGFibGUiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJzdGFydFJlY29yZGluZyIsIiNzdGFydFJlY29yZGluZyIsInNwZWNzIiwiTWVkaWFSZWNvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXNlIiwidGhlbiIsImNhdGNoIiwicmVqZWN0IiwiZmluYWxseSIsInJlY29yZCIsIm9uU3RyZWFtIiwib25FcnJvciIsInN0b3BTdHJlYW0iLCJraW5kIiwiY2xvc2UiLCJtaWNyb3Bob25lIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJkaXNjb25uZWN0IiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwiYXR0cmlidXRlcyIsInNjcm9sbFBvc2l0aW9uIiwidXNlQ2hhdENvbnRleHQiLCJyZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0IiwiY29udGFpbmVyIiwiY3VycmVudCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiZGlzdGFuY2VGcm9tQm90dG9tIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ29Ub0JvdHRvbSIsImFkZCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJnZXQiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX21lc3NhZ2VzIiwicmVhZGVyIiwidXNlU3RhdGUiLCJzeXN0ZW1JY29uIiwiZW1wdHkiLCJzZXRNZXNzYWdlcyIsIm9uTmV3TWVzc2FnZSIsImNsc0NvbnRlbnQiLCJDb250cm9sIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIl9jb21wb25lbnRzIiwiQ2hhdFNrZWxldG9uIiwiU3Bpbm5lciIsImFjdGl2ZSIsInVzZUV4dGVuc2lvbiIsInNldFJlYWR5Iiwid2ViQ29tcG9uZW50TmFtZSIsImNvbnRyb2wiLCJvblJlYWR5IiwiX3VzZU1hbmFnZXIiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJ1c2VycyIsInByb3BzIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJ1c2VNYW5hZ2VyIiwib2JqIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDaGF0Q29udGV4dCIsIlByb3ZpZGVyIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIkFnZW50c0NoYXRQYW5lbCIsIkNoYXROb3RGb3VuZCIsIl9yZWNvcmRpbmciLCJJbnB1dEFjdGlvbkJ1dHRvbiIsImJ1dHRvbklzRGlzYWJsZWQiLCJvblN1Ym1pdCIsInRleHQiLCJ1c2VJbnB1dENvbnRleHQiLCJBcHBJY29uQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRGb3JtIiwic2V0UmVjb3JkaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRUZXh0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVTZW5kIiwiX2Zvcm0iLCJfdGV4dElucHV0IiwiX2FjdGlvbkJ1dHRvbiIsIl9jb250ZXh0MiIsIl91c2VJbnB1dEZvcm0iLCJBZ2VudHNDaGF0SW5wdXQiLCJpc1dhaXRpbmciLCJhdXRvVHJhbnNjcmliZSIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwid2FpdGluZ1Jlc3BvbnNlIiwiaXNGZXRjaGluZyIsImlzRGlzYWJsZWQiLCJhdHRycyIsImNvbnRhaW5lckF0dHJzIiwiY29udHJvbEF0dHJzIiwicmVwbGFjZUFsbCIsInRyaW0iLCJGb3JtIiwiVGV4dElucHV0IiwiX21vZGFsIiwiUGVybWlzc2lvbnNFcnJvck1vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInNldEl0ZW0iLCJwbGF5QWN0aW9uIiwib25DbG9zZUVycm9yIiwiUGxheWVyIiwiQnV0dG9uIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdGltZXIiLCJfaWNvbnMyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJjYW5jZWwiLCJUaW1lciIsImFjdGlvbiIsInRleHRBcmVhUmVmIiwidGFyZ2V0Iiwic3R5bGUiLCJoZWlnaHQiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwicm93cyIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwiX3N0b3JlIiwic2V0U3RvcmUiLCJzZXRTdGF0ZSIsImNhbGxiYWNrIiwibWFuYWdlciIsImdldFByb3BlcnRpZXMiLCJjbGVhblVwIiwib2ZmIiwiVmlldyJdLCJzb3VyY2VzIjpbIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS9yZWNvcmRlci50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9jaGF0L2JhY2stYXJyb3cudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvdmlld3MvY2hhdC91c2UtZXh0ZW5zaW9uLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9hY3Rpb24tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbnB1dC9ob29rcy91c2UtaW5wdXQtZm9ybS50c3giLCIvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL2FnZW50cy1pbnB1dC50c3giLCIvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCIsIi90cy92aWV3cy91c2UtbWFuYWdlci50c3giLCIvdHMvdmlld3Mvd2lkZ2V0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5n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