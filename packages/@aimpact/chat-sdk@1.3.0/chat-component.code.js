System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.3.0/voice", "@aimpact/chat-sdk@1.3.0/wrapper", "@aimpact/chat-sdk@1.3.0/core", "@aimpact/chat-sdk@1.3.0/session", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.3.0/messages", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/chat-sdk@1.3.0/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, AudioManager, Recorder, Chat, AgentsChatContainer, ChatContext, useChatContext, AgentsChatPanel, AgentsChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive1112Model) {
      dependency_1 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk130Voice) {
      dependency_2 = _aimpactChatSdk130Voice;
    }, function (_aimpactChatSdk130Wrapper) {
      dependency_3 = _aimpactChatSdk130Wrapper;
    }, function (_aimpactChatSdk130Core) {
      dependency_4 = _aimpactChatSdk130Core;
    }, function (_aimpactChatSdk130Session) {
      dependency_5 = _aimpactChatSdk130Session;
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
    }, function (_aimpactChatSdk130Messages) {
      dependency_11 = _aimpactChatSdk130Messages;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_aimpactChatSdk130ComponentsIcons) {
      dependency_13 = _aimpactChatSdk130ComponentsIcons;
    }, function (_pragmateUi100Beta7Form) {
      dependency_14 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_15 = _pragmateUi100Beta7Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/ailearn-app", "0.2.10"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/chat-sdk/voice', dependency_2], ['@aimpact/chat-sdk/wrapper', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['react', dependency_8], ['pragmate-ui/icons', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat-sdk/messages', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/chat-sdk/components/icons', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/modal', dependency_15]]);
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