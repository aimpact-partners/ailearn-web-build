System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.6/page", "dayjs@1.11.9", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-app@0.0.1/config", "@aimpact/chat@0.0.2/voice", "@aimpact/chat@0.0.2/session", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/chat-sdk@0.0.1/core", "@aimpact/chat@0.0.2/wrapper", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@aimpact/chat@0.0.2/shared/components", "@beyond-js/react-18-widgets@0.0.6/hooks", "@aimpact/chat@0.0.2/shared/hooks", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/toast", "@aimpact/chat@0.0.2/ui/manager", "@aimpact/chat@0.0.2/shared/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, Recorder, ChatInput, RecordingButton, SystemModal, Chat, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Recorder: void 0,
    ChatInput: void 0,
    RecordingButton: void 0,
    SystemModal: void 0,
    Chat: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets006Page) {
      dependency_3 = _beyondJsReact18Widgets006Page;
    }, function (_dayjs2) {
      dependency_4 = _dayjs2;
    }, function (_beyondJsReactive112Model) {
      dependency_5 = _beyondJsReactive112Model;
    }, function (_aimpactAilearnApp001Config) {
      dependency_6 = _aimpactAilearnApp001Config;
    }, function (_aimpactChat002Voice) {
      dependency_7 = _aimpactChat002Voice;
    }, function (_aimpactChat002Session) {
      dependency_8 = _aimpactChat002Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_9 = _aimpactMediaManager100Uploader;
    }, function (_aimpactChatSdk001Core) {
      dependency_10 = _aimpactChatSdk001Core;
    }, function (_aimpactChat002Wrapper) {
      dependency_11 = _aimpactChat002Wrapper;
    }, function (_beyondJsKernel019Core) {
      dependency_12 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_13 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_14 = _pragmateUi0036Icons;
    }, function (_aimpactChat002SharedComponents) {
      dependency_15 = _aimpactChat002SharedComponents;
    }, function (_beyondJsReact18Widgets006Hooks) {
      dependency_16 = _beyondJsReact18Widgets006Hooks;
    }, function (_aimpactChat002SharedHooks) {
      dependency_17 = _aimpactChat002SharedHooks;
    }, function (_pragmateUi0036Form) {
      dependency_18 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Toast) {
      dependency_19 = _pragmateUi0036Toast;
    }, function (_aimpactChat002UiManager) {
      dependency_20 = _aimpactChat002UiManager;
    }, function (_aimpactChat002SharedIcons) {
      dependency_21 = _aimpactChat002SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@0.0.2/chat",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['dayjs', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/config', dependency_6], ['@aimpact/chat/voice', dependency_7], ['@aimpact/chat/session', dependency_8], ['@aimpact/media-manager/uploader', dependency_9], ['@aimpact/chat-sdk/core', dependency_10], ['@aimpact/chat/wrapper', dependency_11], ['@beyond-js/kernel/core', dependency_12], ['react', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['pragmate-ui/form', dependency_18], ['pragmate-ui/toast', dependency_19], ['@aimpact/chat/ui/manager', dependency_20], ['@aimpact/chat/shared/icons', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-wd-page",
        "vspecifier": "@aimpact/chat@0.0.2/chat.widget",
        "is": "page",
        "route": "/chat/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@0.0.2/chat.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 847408857,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load(this.uri.vars.get('id'));
            }
            hide() {
              this.#store.clean();
            }
          }
          exports.Controller = Controller;
        }
      });

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
        hash: 4146116878,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioManager = void 0;
          var _dayjs = require("dayjs");
          var _model = require("@beyond-js/reactive/model");
          var _config = require("@aimpact/chat/config");
          var _voice = require("@aimpact/chat/voice");
          var _session = require("@aimpact/chat/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _recorder = require("./recorder");
          class AudioManager extends _model.ReactiveModel {
            #parent;
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #uploader;
            get uploader() {
              return this.#uploader;
            }
            #players = {
              web: new _voice.Voice(),
              lab: new _voice.VoiceLab()
            };
            #player = 'web';
            get player() {
              return this.#players[this.#player];
            }
            #fetching;
            set isFetching(value) {
              this.#fetching = value;
              this.triggerEvent();
            }
            get isFetching() {
              return this.#uploader.fetching || super.fetching;
            }
            #error;
            get error() {
              return this.#error;
            }
            constructor(parent) {
              super();
              this.#recorder = new _recorder.Recorder();
              this.#parent = parent;
              this.reactiveProps(['autoplay']);
              this.init();
            }
            clean() {
              this.#error = undefined;
              this.trigger('change');
            }
            selectPlayer(name) {
              if (!this.#players[name]) throw new Error(`Player ${name} not found`);
              this.#player = name;
              this.trigger('change');
            }
            async init() {
              this.ready = true;
              this.#uploader = new _uploader.Uploader({
                type: 'audio',
                name: 'audio',
                params: {
                  container: 'audios',
                  project: 'ailearn-estrada'
                },
                url: _config.default.params.CHAT_API_SERVER
              });
              this.#uploader.on('change', () => {});
              this.#uploader.on('error', () => {});
              this.#uploader.on('loadend', this.loadend);
              this.#uploader.on('file.loaded', this.process);
            }
            process() {}
            loadend = async () => {
              console.warn('loadend ???');
            };
            create(selector) {
              if (globalThis.cordova) {
                // in cordova we use the native actions with cordova plugins
                return;
              }
              this.#uploader.create(selector);
            }
            blobToArrayBuffer(blob) {
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = e => {
                  const arrayBuffer = e.target?.result;
                  if (arrayBuffer instanceof ArrayBuffer) {
                    resolve(arrayBuffer);
                  } else {
                    reject(new Error('Failed to convert Blob to ArrayBuffer'));
                  }
                };
                reader.onerror = e => {
                  reject(e);
                };
                reader.readAsArrayBuffer(blob);
              });
            }
            async saveRecording(recording, transcription = undefined) {
              const {
                chat
              } = this.#parent;
              chat.sendAudio(recording, transcription);
              this.fetching = true;
              this.#parent.waitingResponse = true;
              const generateId = async buffer => {
                const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                return hashHex;
              };
              const arrayBuffer = await this.blobToArrayBuffer(recording);
              return this.saveAudio(recording);
            }
            async saveAudio(audio, id = undefined) {
              this.fetching = true;
              const number = localStorage.getItem('recording.number') ? parseInt(localStorage.getItem('recording.number')) : 0;
              id = id ?? `recording.${performance.now()}`;
              const response = await this.publishRecording(audio);
              if (!response?.status) {
                return;
              }
              const {
                data
              } = response;
              const properties = {
                name: audio.name ?? `Recording ${number}`,
                path: data.file,
                output: data.output,
                usage: data.usage,
                source: audio,
                createdAt: (0, _dayjs.default)().unix(),
                transcription: data.transcription
              };
              return this.saveItem(properties);
            }
            publishRecording = async audio => {
              const form = new FormData();
              form.append('audio', audio);
              form.append('container', 'audios');
              form.append('project', 'ailearn-estrada');
              form.append('chatId', this.#parent.chat.id);
              form.append('userId', _session.sessionWrapper.userId);
              form.append('fileName', `recoring-${Date.now()}.mp3`);
              form.append('knowledgeBoxId', this.#parent.selectedKb);
              const xhr = new _uploader.XHRLoader();
              const response = await xhr.upload(form, _config.default.params.CHAT_API_SERVER);
              return response.json();
            };
            async saveItem(properties) {
              try {
                const {
                  chat
                } = this.#parent;
                const response = await chat.setAudioMessage({
                  user: {
                    chatId: chat.id,
                    content: properties.transcription,
                    role: 'user',
                    timestamp: Date.now()
                  },
                  response: {
                    chatId: chat.id,
                    content: properties.output,
                    role: 'system',
                    usage: properties.usage,
                    timestamp: Date.now()
                  }
                });
                this.#parent.currentMessage = response;
                this.#parent.waitingResponse = false;
              } catch (e) {
                console.error('error saving item', e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.AudioManager = AudioManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 2296791249,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/chat-sdk/core");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _audio = require("./audio");
          class StoreManager extends _model.ReactiveModel {
            #messages = [];
            get messages() {
              return this.#messages;
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
            #chats = _wrapper.AppWrapper.chats;
            get chats() {
              return this.#chats.items ?? [];
            }
            #audio = new _audio.AudioManager(this);
            get audioManager() {
              return this.#audio;
            }
            #kbs = _wrapper.AppWrapper.knowledgeBoxes;
            get kbs() {
              return this.#kbs.items ?? [];
            }
            #selectedKb;
            get selectedKb() {
              return this.#selectedKb;
            }
            set selectedKb(kb) {
              this.#selectedKb = kb;
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
            get selectedKbPath() {
              const selectedKb = this.#kbs.items.find(i => i.id === this.#selectedKb);
              return selectedKb?.path ?? 'No Knowledge Box';
            }
            #currentMessage;
            get currentMessage() {
              return this.#currentMessage;
            }
            set currentMessage(message) {
              if (message?.id === this.#currentMessage?.id) return;
              this.#currentMessage = message;
            }
            constructor() {
              super();
              this.reactiveProps(['waitingResponse', 'autoplay']);
              this.autoplay = true;
            }
            clean() {
              this.#messages = undefined;
              this.fetching = false;
              this.ready = false;
            }
            load = async id => {
              if (!id) {
                this.ready = true;
                this.notFound = true;
                return;
              }
              this.fetching = true;
              var chat = new _core.Chat({
                id
              });
              await chat.load({
                id
              });
              if (!chat.found) {
                this.fetching = false;
                this.ready = true;
                this.notFound = true;
                return;
              }
              await chat.isReady;
              const knowledeBoxSelected = this.#kbs.items.find(i => i.id === chat.knowledgeBoxId);
              this.#selectedKb = knowledeBoxSelected ? knowledeBoxSelected.id : 'default';
              /* usar propiedad role para identificar owner del mensaje*/
              chat.on('change', () => {
                this.#messages = chat.messages;
                this.triggerEvent('new.message');
              });
              await chat.loadAll({
                id
              });
              globalThis.chat = chat;
              this.#chat = chat;
              this.#messages = chat.messages;
              this.fetching = false;
              this.ready = true;
              this.notFound = false;
            };
            async sendMessage(message) {
              try {
                this.#currentMessage = undefined;
                if ([undefined, '', null].includes(message)) return;
                this.fetching = true;
                this.waitingResponse = true;
                const backendResponse = await this.#chat.sendMessage(message);
                // the system answer.
                this.#currentMessage = backendResponse.response;
                this.chat.getMessage(backendResponse.response.id).autoplay = this.autoplay;
                this.waitingResponse = false;
                this.triggerEvent('new.message');
              } catch (e) {
                throw e;
              } finally {
                this.waitingResponse = false;
                this.fetching = false;
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /********************************
      INTERNAL MODULE: ./store/recorder
      ********************************/

      ims.set('./store/recorder', {
        hash: 2233069833,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _dayjs = require("dayjs");
          /*bundle */
          class Recorder extends _core.Events {
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
            async initialise() {
              if (this.#initPromise) return await this.#initPromise;
              this.#initPromise = new _core.PendingPromise();
              navigator.mediaDevices.getUserMedia({
                audio: true
              }).then(stream => {
                this.#mediaRecorder = new MediaRecorder(stream);
                this.#stream = stream;
                // Create an AudioContext
                this.#audioContext = new (globalThis.AudioContext || globalThis.webkitAudioContext)();
                // Create an AnalyserNode
                this.#analyser = this.#audioContext.createAnalyser();
                // Create a source from the stream and connect it to the analyser
                this.#source = this.#audioContext.createMediaStreamSource(stream);
                // this.#source.connect(this.#analyser);
                if ('webkitSpeechRecognition' in window) {
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
                } else {
                  console.error('Speech recognition not supported');
                }
                this.#mediaRecorder.addEventListener('dataavailable', event => {
                  if (event.data.size === 0) return;
                  this.#chunks.push(event.data);
                  this.trigger('dataavailable');
                });
              }).catch(error => {
                console.error(error);
                this.#error = error.message;
                this.#initPromise.reject();
              }).finally(() => {
                this.#initialised = true;
                this.#initPromise.resolve();
              });
              return this.#initPromise;
            }
            record() {
              // if (this.#recording || this.transcribing) {
              if (this.#recordingPromise) return this.#recordingPromise;
              // TODO - @ftovar ERROR
              // this.#chunks = [];
              this.#recordingPromise = new _core.PendingPromise();
              if (this.#recording) {
                throw new Error('Wait for recorder to be stopped and transcription ready');
              }
              this.#status = 'started';
              this.#recording = true;
              this.trigger('change');
              this.initialise().then(async () => {
                this.#startTime = (0, _dayjs.default)();
                // TODO - @ftovar ERROR
                // const audio = await this.#mediaRecorder?.start(1000);
                await this.#mediaRecorder?.start();
              }).catch(error => {
                console.error(error);
              });
              return this.#recordingPromise;
            }
            stopStream = () => {
              //stopping the capturing request by stopping all the tracks on the active stream
              this.#stream.getTracks() //get all tracks from the stream
              .forEach(track => track.stop()); //stop each one
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
                const endtime = (0, _dayjs.default)();
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
              this.#initialised ? stop() : this.initialise().then(stop);
              return this.#stopPromise;
            }
          }
          exports.Recorder = Recorder;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2717203218,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatContext = exports.ChatContext = void 0;
          var React = require("react");
          const ChatContext = React.createContext({});
          exports.ChatContext = ChatContext;
          const useChatContext = () => React.useContext(ChatContext);
          exports.useChatContext = useChatContext;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/header/index
      ************************************/

      ims.set('./views/header/index', {
        hash: 2603538276,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function Header() {
            const {
              store
            } = (0, _context.useChatContext)();
            const [search, setSearch] = (0, _react.useState)('');
            const [autoplay, setAutoplay] = (0, _react.useState)(store.autoplay);
            const handleAutoplayToggle = () => {
              store.autoplay = !store.autoplay;
            };
            (0, _hooks.useBinder)([store], () => setAutoplay(store.autoplay));
            const handleChatSearch = e => {
              e.preventDefault();
              setSearch(e.target.value);
            };
            return _react.default.createElement(_components.CollapsibleHeader, {
              title: store.chat.name ?? 'Untitled'
            }, _react.default.createElement("div", {
              className: 'chat__header'
            }, _react.default.createElement("div", {
              className: 'chat__detail__container'
            }, _react.default.createElement(_icons.Icon, {
              icon: 'planet'
            }), _react.default.createElement("span", null, store.selectedKbPath)), _react.default.createElement("div", {
              className: 'chat__detail__container'
            }, _react.default.createElement(_icons.Icon, {
              icon: 'folder'
            }), _react.default.createElement("span", null, store.selectedModel)), _react.default.createElement(_components.Input, {
              name: 'chat',
              label: 'Search in chat',
              value: search,
              onChange: handleChatSearch,
              required: true,
              type: 'search'
            }), _react.default.createElement(_icons.Icon, {
              icon: autoplay ? 'speaker' : 'speaker-off',
              className: 'lg speaker',
              onClick: handleAutoplayToggle
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1609552375,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _chat = require("./room/chat");
          var _context = require("./context");
          var _chatSkeleton = require("./room/chat-skeleton");
          var _notFound = require("./not-found");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          function View({
            store
          }) {
            const [fetching, setFetching] = React.useState(store.fetching);
            const [ready, setReady] = React.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => {
              setFetching(store.fetching);
              setReady(store.ready);
            });
            const contextValue = {
              store,
              texts,
              autoplay: store.autoplay,
              messages: store.messages,
              player: store.audioManager.player
            };
            const Control = !store.notFound ? _chat.Chat : _notFound.ChatNotFound;
            const View = ready && textsReady ? Control : _chatSkeleton.ChatSkeleton;
            return React.createElement(_context.ChatContext.Provider, {
              value: contextValue
            }, React.createElement(View, null));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/input/context
      *************************************/

      ims.set('./views/input/context', {
        hash: 3419520777,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInputContext = exports.InputContext = void 0;
          var React = require("react");
          const InputContext = React.createContext(null);
          exports.InputContext = InputContext;
          const useInputContext = () => React.useContext(InputContext);
          exports.useInputContext = useInputContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/input/index
      ***********************************/

      ims.set('./views/input/index', {
        hash: 293264152,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatInput = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _config = require("@aimpact/chat/config");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _recording = require("./recording");
          var _index = require("./system/index");
          /*bundle*/
          const ChatInput = ({
            store,
            isWaiting = false
          }) => {
            const [recording, setRecording] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const [waiting, setWaiting] = _react.default.useState(false);
            const textAreaRef = _react.default.useRef(null);
            const [text, setText] = _react.default.useState('');
            (0, _hooks.useBinder)([store], () => setWaiting(store.waitingResponse));
            const handleInputChange = e => {
              const {
                value
              } = e.target;
              if (['undefined', undefined].includes(value.replaceAll('\n'))) return;
              setText(value);
            };
            (0, _react.useEffect)(() => {
              const target = textAreaRef.current;
              target.style.height = 'auto';
              target.style.height = text.length == 1 ? 'auto' : target.scrollHeight + 'px';
              if (['undefined', undefined].includes(text.replaceAll('\n'))) return;
            }, [text]);
            const handleKeyDown = e => {
              if (e.key !== 'Enter') return;
              const cb = prevValue => prevValue + '\n';
              const value = e.target.value.replaceAll('\n');
              if (['', undefined, null].includes(value)) return;
              e.shiftKey ? setText(cb) : handleSend();
            };
            const disabled = {
              disabled: false
            };
            const {
              audioManager,
              audioManager: {
                recorder
              }
            } = store;
            const sendAudio = async event => {
              setFetching(true);
              event.preventDefault();
              const audio = await recorder.stop();
              const item = audioManager.saveRecording(audio, recorder.transcription);
              setRecording(!recording);
              setFetching(false);
            };
            const handleSend = async () => {
              setText('');
              setFetching(true);
              await store.sendMessage(text);
              setFetching(false);
            };
            const onSubmit = !!text.length ? handleSend : sendAudio;
            if (['', undefined, null].includes(text.replaceAll('\n')) || !text.trim().length) disabled.disabled = true;
            const disabledTextarea = {
              disabled: fetching || recording || waiting || isWaiting
            };
            const cls = `input-container ${waiting || isWaiting ? 'waiting' : ''}`;
            // Defines the "system" that the chat will use
            const {
              system
            } = _config.default.params.config;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_context.InputContext.Provider, {
              value: {
                store,
                onSubmit,
                recorder,
                setRecording,
                recording
              }
            }, system && _react.default.createElement(_index.SystemModal, {
              chat: store.chat
            }), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: 'chat-input-form'
            }, _react.default.createElement("textarea", {
              ...disabledTextarea,
              rows: 1,
              value: text,
              onChange: handleInputChange,
              onKeyDown: handleKeyDown,
              autoFocus: true,
              className: 'input__textarea',
              ref: textAreaRef
            })), _react.default.createElement("span", {
              className: `input__icon  input__icon--right`
            }, !!text.length ? _react.default.createElement(_form.Button, {
              icon: 'send-arrow',
              onClick: handleSend,
              disabled: disabled.disabled || store.waitingResponse
            }) : _react.default.createElement(_recording.RecordingButton, {
              store: store,
              disabled: recording || store.waitingResponse
            }))));
          };
          exports.ChatInput = ChatInput;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/input/player
      ************************************/

      ims.set('./views/input/player', {
        hash: 2163328351,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Player = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _timer = require("./timer");
          var _context = require("./context");
          const Player = () => {
            const {
              onSubmit,
              recorder,
              setRecording
            } = (0, _context.useInputContext)();
            const cancel = async event => {
              event.preventDefault();
              await recorder.stop();
              setRecording(false);
            };
            return _react.default.createElement("div", {
              className: 'recording-player__container'
            }, _react.default.createElement(_icons.IconButton, {
              className: 'circle',
              icon: 'delete',
              onClick: cancel
            }), _react.default.createElement(_timer.Timer, {
              action: 'start'
            }), _react.default.createElement(_icons.IconButton, {
              icon: 'send',
              className: 'circle',
              variant: 'primary',
              onClick: onSubmit
            }));
          };
          exports.Player = Player;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/input/recording
      ***************************************/

      ims.set('./views/input/recording', {
        hash: 2739885867,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _player = require("./player");
          var _context = require("./context");
          /*bundle*/
          const RecordingButton = ({
            store: {
              audioManager
            },
            disabled
          }) => {
            const {
              recorder,
              recording,
              setRecording
            } = (0, _context.useInputContext)();
            const playAction = event => {
              event.preventDefault();
              recorder.record();
              setRecording(!recording);
            };
            if (recording) return _react.default.createElement(_player.Player, null);
            return _react.default.createElement(_form.Button, {
              icon: 'mic',
              onClick: playAction,
              disabled: disabled
            });
          };
          exports.RecordingButton = RecordingButton;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/input/system/form
      *****************************************/

      ims.set('./views/input/system/form', {
        hash: 3004880950,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UIForm = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _context = require("../../context");
          const UIForm = ({
            chat,
            closeModal
          }) => {
            const [value, setValue] = _react.default.useState(chat?.system);
            const [error, setError] = _react.default.useState(false);
            const [loading, setLoading] = _react.default.useState(false);
            const {
              texts
            } = (0, _context.useChatContext)();
            function handleChange(event) {
              const {
                value: textAreaValue
              } = event.target;
              setValue(textAreaValue);
            }
            function handleClose() {
              setError(false);
              setLoading(false);
              setValue(chat?.system);
              closeModal();
            }
            const handleSubmit = async event => {
              event.preventDefault();
              setLoading(true);
              const response = await chat.publish({
                system: value
              });
              if (!response.status) setError(response.error);
              _toast.toast.success(texts.system.success);
              handleClose();
            };
            return _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit,
              className: 'system-form'
            }, error && _react.default.createElement("div", {
              className: 'error error-container'
            }, error), _react.default.createElement(_form.Textarea, {
              rows: 5,
              value: value,
              placeholder: 'Agrega tu contenido...',
              onChange: handleChange
            }), _react.default.createElement("footer", null, _react.default.createElement(_form.Button, {
              icon: 'close-circle',
              label: 'Cancel',
              variant: 'link',
              onClick: handleClose
            }), _react.default.createElement(_form.Button, {
              type: 'submit',
              icon: 'save',
              onClick: handleSubmit,
              label: 'Submit',
              loading: loading
            })));
          };
          exports.UIForm = UIForm;
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/input/system/index
      ******************************************/

      ims.set('./views/input/system/index', {
        hash: 3302006323,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemModal = void 0;
          var _react = require("react");
          var _form = require("./form");
          var _form2 = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          const SystemModal = ({
            chat
          }) => {
            const dialogRef = _react.default.useRef(null);
            const openModal = () => dialogRef.current.showModal();
            const closeModal = () => dialogRef.current.close();
            return _react.default.createElement("div", {
              className: `input__icon  input__icon--left`
            }, _react.default.createElement(_form2.Button, {
              icon: 'code',
              onClick: openModal
            }), _react.default.createElement("dialog", {
              ref: dialogRef,
              onClose: closeModal
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              onClick: closeModal
            }), _react.default.createElement("header", null, _react.default.createElement("h1", null, "Assistant mission")), _react.default.createElement("div", null, _react.default.createElement("p", null, "La misi\u00F3n que tendr\u00E1 el agente para interactuar en el chat")), _react.default.createElement(_form.UIForm, {
              chat: chat,
              closeModal: closeModal
            })));
          };
          exports.SystemModal = SystemModal;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/input/timer/index
      *****************************************/

      ims.set('./views/input/timer/index', {
        hash: 4054718920,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Timer = Timer;
          var React = require("react");
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
            return React.createElement("div", {
              className: 'timer__container'
            }, React.createElement("span", null, `${minutesRendered}`, ":"), React.createElement("span", null, `${secRendered}`));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/input/timer/use-timer
      *********************************************/

      ims.set('./views/input/timer/use-timer', {
        hash: 738678139,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTimer = useTimer;
          var React = require("react");
          // useTimer.ts

          const {
            useState,
            useEffect
          } = React;
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

      /*********************************
      INTERNAL MODULE: ./views/not-found
      *********************************/

      ims.set('./views/not-found', {
        hash: 2291187244,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatNotFound = ChatNotFound;
          var React = require("react");
          var _manager = require("@aimpact/chat/ui/manager");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _components = require("@aimpact/chat/shared/components");
          var _icons2 = require("@aimpact/chat/shared/icons");
          function ChatNotFound() {
            function openDialog() {
              _manager.UIManager.modalOpened = true;
            }
            if (!_wrapper.AppWrapper.ready) return React.createElement(_components.PreloadScreen, null);
            return React.createElement("div", {
              className: 'not__found_chat '
            }, React.createElement("img", {
              src: '/assets/not-found.png',
              alt: 'Chat not found'
            }), React.createElement("span", {
              className: 'not__found__details'
            }, React.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'not-found__ailogo'
            }), React.createElement("h2", null, "Chat not found"), React.createElement("p", null, React.createElement("strong", null, "We couldn't find a chat associated with that ID."), " ", React.createElement("br", null), "Please enter URL correctly or create a new chat."), React.createElement(_form.Button, {
              icon: 'chat',
              onClick: openDialog,
              label: 'Start New Chat'
            })));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/room/chat-skeleton
      ******************************************/

      ims.set('./views/room/chat-skeleton', {
        hash: 2024847656,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatSkeleton = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _input = require("../input");
          var _components = require("@aimpact/chat/shared/components");
          const ChatSkeleton = () => {
            const {
              store
            } = (0, _context.useChatContext)();
            return _react.default.createElement("div", {
              className: 'chat-container'
            }, _react.default.createElement(_components.CollapsibleHeader, {
              title: _react.default.createElement("div", {
                className: 'title-skeleton'
              })
            }, _react.default.createElement("div", {
              className: 'chat__header'
            }, _react.default.createElement("div", {
              className: 'header-skeleton'
            }), _react.default.createElement("div", {
              className: 'header-skeleton'
            }), _react.default.createElement("div", {
              className: 'header-skeleton'
            }), _react.default.createElement("div", {
              className: 'header-skeleton'
            }))), _react.default.createElement("div", {
              className: 'chat'
            }, Array.from({
              length: 5
            }).map((_, i) => _react.default.createElement("div", {
              key: `skeleton-${i}`,
              className: 'message-skeleton'
            }))), _react.default.createElement("div", {
              className: 'send'
            }, _react.default.createElement(_input.ChatInput, {
              isWaiting: true,
              store: store
            })));
          };
          exports.ChatSkeleton = ChatSkeleton;
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/room/chat
      *********************************/

      ims.set('./views/room/chat', {
        hash: 1929315421,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _messages = require("./messages");
          var _header = require("../header");
          var _input = require("../input");
          /*bundle*/
          function Chat() {
            const {
              store
            } = (0, _context.useChatContext)();
            const messagesEnd = (0, _react.useRef)(null);
            const [showBackArrow, setShowBackArrow] = (0, _react.useState)(true);
            const scrollToBottom = () => {
              messagesEnd.current?.scrollIntoView({
                block: 'end',
                behavior: 'smooth'
              });
            };
            const isInContainer = () => {
              const container = messagesEnd.current?.parentNode;
              if (!container) return true;
              const containerRect = container.getBoundingClientRect();
              const endRect = messagesEnd.current.getBoundingClientRect();
              const threshold = 2;
              return endRect.bottom - threshold <= containerRect.bottom;
            };
            (0, _react.useEffect)(() => {
              const container = messagesEnd.current?.parentNode;
              if (!container) return;
              const handleScroll = () => setShowBackArrow(!isInContainer());
              container.addEventListener('scroll', handleScroll);
              return () => container.removeEventListener('scroll', handleScroll);
            }, []);
            (0, _hooks.useBinder)([store], () => window.setTimeout(() => scrollToBottom(), 100), 'new.message');
            return _react.default.createElement("div", {
              className: 'chat-container'
            }, _react.default.createElement(_header.Header, null), _react.default.createElement("div", {
              className: 'chat'
            }, _react.default.createElement("class-intro", {
              chatMetadata: JSON.stringify({
                classId: 'ab60e2a4-c2c8-4b27-82a5-ec8c913f2b82'
              })
            }), _react.default.createElement(_messages.Messages, null), _react.default.createElement("div", {
              ref: messagesEnd
            })), _react.default.createElement("div", {
              className: 'send'
            }, _react.default.createElement(_input.ChatInput, {
              store: store
            })), showBackArrow && _react.default.createElement(_icons.IconButton, {
              icon: 'backArrow',
              className: 'scroll-bottom circle',
              onClick: scrollToBottom
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/room/messages/answering
      ***********************************************/

      ims.set('./views/room/messages/answering', {
        hash: 3485726235,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemAnswering = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/shared/icons");
          const SystemAnswering = () => {
            return _react.default.createElement("div", {
              className: 'message answering'
            }, _react.default.createElement(_icons.Icon, {
              className: 'lg',
              icon: _icons2.ICONS['ai-profile']
            }), _react.default.createElement("div", {
              className: 'dot-animation'
            }, _react.default.createElement("span", {
              className: 'dot'
            }), _react.default.createElement("span", {
              className: 'dot'
            }), _react.default.createElement("span", {
              className: 'dot'
            })));
          };
          exports.SystemAnswering = SystemAnswering;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/room/messages/index
      *******************************************/

      ims.set('./views/room/messages/index', {
        hash: 2922280869,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = Messages;
          var React = require("react");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _answering = require("./answering");
          var _message = require("./message");
          function Messages() {
            const {
              store
            } = (0, _context.useChatContext)();
            const [messages, setMessages] = React.useState(store.messages ?? []);
            (0, _hooks.useBinder)([store], () => {
              setMessages([...store.messages]);
            }, 'new.message');
            const output = messages.map((message, i) => {
              const last = i === messages.length - 1;
              return React.createElement(_message.Message, {
                key: `message-${i}`,
                message: message,
                last: last
              });
            });
            return React.createElement(React.Fragment, null, output, store.waitingResponse && React.createElement(_answering.SystemAnswering, null));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./views/room/messages/message/actions/index
      ***********************************************************/

      ims.set('./views/room/messages/message/actions/index', {
        hash: 2799735533,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageActions = MessageActions;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../../../context");
          var _toast = require("pragmate-ui/toast");
          function MessageActions({
            message,
            text,
            messageTokens
          }) {
            const {
              store,
              player
            } = (0, _context.useChatContext)();
            const [action, setAction] = React.useState('stop');
            const [processing, setProcessing] = React.useState(false);
            (0, _hooks.useBinder)([player], () => setProcessing(player.speaking));
            const onChange = () => {
              setProcessing(false);
              setAction('');
            };
            (0, _hooks.useBinder)([player], onChange, 'on.finish');
            const onPlay = async ({
              listen
            }) => {
              setAction('play');
              store.currentMessage = message;
              player.positionToCut = 0;
              await player.play(text);
            };
            const onPause = async ({
              listen
            }) => {
              await player.stop();
              setAction('stop');
              setProcessing(false);
            };
            const playAudio = async event => {
              setProcessing(true);
              const call = action === 'play' ? onPause : onPlay;
              await call(event.currentTarget.dataset);
              setProcessing(false);
            };
            const copyMessage = async () => {
              await navigator.clipboard.writeText(text);
              _toast.toast.success('Message copied to clipboard');
            };
            const disabled = {
              disabled: true
            };
            const apply = store.currentMessage?.id === message?.id && processing;
            const icon = apply || action === 'play' ? 'stop' : 'play';
            const onClick = apply || action === 'play' ? onPause : onPlay;
            return React.createElement("div", null, React.createElement("div", {
              className: 'audio__actions'
            }, React.createElement(_icons.Icon, {
              onClick: copyMessage,
              icon: 'copy'
            }), React.createElement(_icons.Icon, {
              onClick: onClick,
              "data-listen": 'api',
              icon: icon
            })), messageTokens && React.createElement("div", {
              className: 'tokens overline'
            }, messageTokens, " TOKENS"));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./views/room/messages/message/audio-message
      ***********************************************************/

      ims.set('./views/room/messages/message/audio-message', {
        hash: 3644074600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioMessage = void 0;
          var _react = require("react");
          var _player = require("./components/player");
          var _text = require("./components/text");
          var _profileIcon = require("./components/profile-icon");
          const AudioMessage = ({
            message,
            last
          }) => {
            const cls = `message ${message.role}`;
            return _react.default.createElement("div", {
              className: cls,
              "data-id": message.id
            }, _react.default.createElement("section", {
              className: 'picture__container'
            }, _react.default.createElement(_profileIcon.ProfileIcon, {
              role: message.role
            })), _react.default.createElement("section", {
              className: 'message__container'
            }, _react.default.createElement(_text.MessageText, {
              message: message
            }), _react.default.createElement(_player.AudioPlayer, {
              src: message.audio
            })));
          };
          exports.AudioMessage = AudioMessage;
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./views/room/messages/message/components/player
      ***************************************************************/

      ims.set('./views/room/messages/message/components/player', {
        hash: 1140809978,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var React = require("react");
          // audio_player.tsx

          function AudioPlayer({
            src
          }) {
            if (!src) {
              console.warn('not audio to process');
              return null;
            }
            src = URL.createObjectURL(src);
            const ref = React.useRef(null);
            React.useEffect(() => {
              const target = ref.current;
              target.addEventListener('loadedmetadata', () => {
                if (target.duration === Infinity) {
                  target.currentTime = 1e101;
                  target.ontimeupdate = () => {
                    target.ontimeupdate = null;
                    target.currentTime = 0;
                  };
                }
              });
            }, [src]);
            if (!src) return null;
            return React.createElement("div", {
              className: 'audio-player'
            }, React.createElement("audio", {
              controls: true,
              preload: 'metadata'
            }, React.createElement("source", {
              src: src,
              type: 'audio/mp3',
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*********************************************************************
      INTERNAL MODULE: ./views/room/messages/message/components/profile-icon
      *********************************************************************/

      ims.set('./views/room/messages/message/components/profile-icon', {
        hash: 3816787130,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat/session");
          var _icons2 = require("@aimpact/chat/shared/icons");
          function ProfileIcon({
            role
          }) {
            const [loadError, setLoadError] = (0, _react.useState)(false);
            const icon = role === 'user' ? 'user' : 'ai-profile';
            const userProps = _session.sessionWrapper.user.getProperties();
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement(_react.default.Fragment, null, userProps.photoURL && role === 'user' && !loadError ? _react.default.createElement("img", {
              alt: 'user image profile',
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.Icon, {
              className: 'lg',
              icon: _icons2.ICONS[icon] ?? icon
            }));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/room/messages/message/components/text
      *************************************************************/

      ims.set('./views/room/messages/message/components/text', {
        hash: 4231797747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _context = require("../../../../context");
          function MessageText({
            message
          }) {
            const {
              store,
              autoplay,
              player
            } = (0, _context.useChatContext)();
            const [text, setText] = React.useState(message?.content ?? '');
            const [cutIndex, setCutIndex] = React.useState(0);
            const ref = React.useRef(null);
            const mark = (0, _hooks2.useMarked)();
            React.useEffect(() => {
              if (!message || message.role === 'user' || !autoplay) return;
              if (message.id !== store.currentMessage?.id) return;
              player.play(message.content);
            }, [message?.autoplay]);
            const removeHighlight = () => {
              ref.current.querySelectorAll('.highlight').forEach(element => element.classList.remove('highlight'));
            };
            (0, _hooks.useBinder)([player], () => {
              if (store.currentMessage?.id !== message?.id) return;
              const currentIndex = player.currentWord;
              if (player.positionToCut > 0) {
                const segmentToCut = player.text.slice(0, currentIndex).split(' ').length - 1;
                const finalPosition = player.positionToCut + segmentToCut;
                const textArray = text.split(' ');
                removeHighlight();
                if (!ref.current.querySelector(`[data-index="${finalPosition}"]`)) return;
                ref.current.querySelector(`[data-index="${finalPosition}"]`).classList.add('highlight');
                return;
              }
              const endOfWordIndex = text.indexOf(' ', currentIndex);
              const segment = text.slice(0, currentIndex);
              const position = segment.split(' ').length - 1;
              removeHighlight();
              ref.current.querySelector(`[data-index="${position}"]`).classList.add('highlight');
            }, 'boundary');
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const textsArray = text.split(' ');
            const createSpan = (word, index) => `<span data-index="${index}" class="word">${word}</span>`;
            const words = textsArray.map(createSpan).join(' ');
            const content = mark(words);
            const onClick = event => {
              event.preventDefault();
              event.stopPropagation();
              if (event.target.classList.contains('word')) {
                const index = event.target.dataset.index;
                const wordsArray = text.split(' ');
                const textToPlay = wordsArray.slice(index).join(' ');
                store.currentMessage = message;
                player.positionToCut = parseInt(index);
                player.play(textToPlay);
                // Implement your logic for playing the text from the clicked word to the end here.
              }
            };

            return React.createElement("div", {
              className: 'message-text__container',
              ref: ref
            }, React.createElement("div", {
              onClick: onClick,
              dangerouslySetInnerHTML: {
                __html: content
              }
            }));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/room/messages/message/context
      *****************************************************/

      ims.set('./views/room/messages/message/context', {
        hash: 558237393,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatMessageContext = exports.ChatMessageContext = void 0;
          var React = require("react");
          const ChatMessageContext = React.createContext({});
          exports.ChatMessageContext = ChatMessageContext;
          const useChatMessageContext = () => React.useContext(ChatMessageContext);
          exports.useChatMessageContext = useChatMessageContext;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/room/messages/message/index
      ***************************************************/

      ims.set('./views/room/messages/message/index', {
        hash: 1222526070,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var React = require("react");
          var _text = require("./components/text");
          var _actions = require("./actions");
          var _profileIcon = require("./components/profile-icon");
          var _audioMessage = require("./audio-message");
          function Message({
            message,
            last
          }) {
            const cls = `message ${message.role}`;
            const messageTokens = message.role === 'system' ? message.usage?.totalTokens : null;
            if (message.type === 'audio') return React.createElement(_audioMessage.AudioMessage, {
              message: message,
              last: last
            });
            return React.createElement("div", {
              className: cls,
              "data-id": message.id
            }, React.createElement("section", {
              className: 'picture__container'
            }, React.createElement(_profileIcon.ProfileIcon, {
              role: message.role
            })), React.createElement("section", {
              className: 'message__container'
            }, React.createElement(_text.MessageText, {
              message: message
            })), React.createElement("section", {
              className: 'message__actions'
            }, React.createElement(_actions.MessageActions, {
              message: message,
              text: message.content,
              messageTokens: messageTokens
            })));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/to__delete/use-speech-to-text
      *****************************************************/

      ims.set('./views/to__delete/use-speech-to-text', {
        hash: 1655048697,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSpeechToText = useSpeechToText;
          var React = require("react");
          var _voice = require("@aimpact/chat/voice");
          function useSpeechToText() {
            const [voices, setVoice] = React.useState({});
            React.useEffect(() => {
              const voice = new _voice.Voice();
              const lab = new _voice.VoiceLab();
              setVoice({
                voice,
                lab
              });
            }, []);
            const {
              voice,
              lab
            } = voices;
            return {
              voice,
              lab,
              ready: !!voice && !!lab
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./store/recorder",
        "from": "Recorder",
        "name": "Recorder"
      }, {
        "im": "./views/input/index",
        "from": "ChatInput",
        "name": "ChatInput"
      }, {
        "im": "./views/input/recording",
        "from": "RecordingButton",
        "name": "RecordingButton"
      }, {
        "im": "./views/input/system/index",
        "from": "SystemModal",
        "name": "SystemModal"
      }, {
        "im": "./views/room/chat",
        "from": "Chat",
        "name": "Chat"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Recorder') && _export("Recorder", Recorder = require ? require('./store/recorder').Recorder : value);
        (require || prop === 'ChatInput') && _export("ChatInput", ChatInput = require ? require('./views/input/index').ChatInput : value);
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/input/recording').RecordingButton : value);
        (require || prop === 'SystemModal') && _export("SystemModal", SystemModal = require ? require('./views/input/system/index').SystemModal : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./views/room/chat').Chat : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNuQixPQUFPO2NBQUVzTyxhQUFhLEVBQUVBO1lBQWEsRUFBSSxDQUNoRixDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBO1VBQ0E7VUFNTSxTQUFVd0UsZUFBZTtZQUM5QixNQUFNLENBQUNDLE1BQU0sRUFBRUMsUUFBUSxDQUFDLEdBQUdsTyxLQUFLLENBQUN1QixRQUFRLENBQUMsRUFBYSxDQUFDO1lBRXhEdkIsS0FBSyxDQUFDMkcsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTXdILEtBQUssR0FBRyxJQUFJOVosWUFBSyxFQUFFO2NBQ3pCLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxlQUFRLEVBQUU7Y0FDMUIyWixRQUFRLENBQUM7Z0JBQUVDLEtBQUs7Z0JBQUU3WjtjQUFHLENBQUUsQ0FBQztZQUN6QixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ04sTUFBTTtjQUFFNlosS0FBSztjQUFFN1o7WUFBRyxDQUFFLEdBQUcyWixNQUFNO1lBQzdCLE9BQU87Y0FBRUUsS0FBSztjQUFFN1osR0FBRztjQUFFaUIsS0FBSyxFQUFFLENBQUMsQ0FBQzRZLEtBQUssSUFBSSxDQUFDLENBQUM3WjtZQUFHLENBQUU7VUFDL0MiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJPYmplY3QiLCJ2YWx1ZSIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJyZWNvcmRlciIsInVwbG9hZGVyIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImlzRmV0Y2hpbmciLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaGluZyIsImVycm9yIiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwidW5kZWZpbmVkIiwidHJpZ2dlciIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInJlYWR5IiwiVXBsb2FkZXIiLCJ0eXBlIiwicGFyYW1zIiwiY29udGFpbmVyIiwicHJvamVjdCIsInVybCIsImNvbmZpZyIsIkNIQVRfQVBJX1NFUlZFUiIsIm9uIiwibG9hZGVuZCIsInByb2Nlc3MiLCJjb25zb2xlIiwid2FybiIsImNyZWF0ZSIsInNlbGVjdG9yIiwiZ2xvYmFsVGhpcyIsImNvcmRvdmEiLCJibG9iVG9BcnJheUJ1ZmZlciIsImJsb2IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwiYXJyYXlCdWZmZXIiLCJ0YXJnZXQiLCJyZXN1bHQiLCJBcnJheUJ1ZmZlciIsIm9uZXJyb3IiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInNhdmVSZWNvcmRpbmciLCJyZWNvcmRpbmciLCJ0cmFuc2NyaXB0aW9uIiwiY2hhdCIsInNlbmRBdWRpbyIsIndhaXRpbmdSZXNwb25zZSIsImdlbmVyYXRlSWQiLCJidWZmZXIiLCJoYXNoQnVmZmVyIiwiY3J5cHRvIiwic3VidGxlIiwiZGlnZXN0IiwiaGFzaEFycmF5IiwiQXJyYXkiLCJmcm9tIiwiVWludDhBcnJheSIsImhhc2hIZXgiLCJtYXAiLCJiIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImpvaW4iLCJzYXZlQXVkaW8iLCJhdWRpbyIsImlkIiwibnVtYmVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXNwb25zZSIsInB1Ymxpc2hSZWNvcmRpbmciLCJzdGF0dXMiLCJkYXRhIiwicHJvcGVydGllcyIsInBhdGgiLCJmaWxlIiwib3V0cHV0IiwidXNhZ2UiLCJzb3VyY2UiLCJjcmVhdGVkQXQiLCJ1bml4Iiwic2F2ZUl0ZW0iLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXJJZCIsIkRhdGUiLCJzZWxlY3RlZEtiIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsInNldEF1ZGlvTWVzc2FnZSIsInVzZXIiLCJjaGF0SWQiLCJjb250ZW50Iiwicm9sZSIsInRpbWVzdGFtcCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZXMiLCJjYXRlZ29yeSIsIkFwcFdyYXBwZXIiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW9NYW5hZ2VyIiwia25vd2xlZGdlQm94ZXMiLCJrYnMiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsIm1lc3NhZ2UiLCJhdXRvcGxheSIsIkNoYXQiLCJmb3VuZCIsImlzUmVhZHkiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJsb2FkQWxsIiwic2VuZE1lc3NhZ2UiLCJpbmNsdWRlcyIsImJhY2tlbmRSZXNwb25zZSIsImdldE1lc3NhZ2UiLCJFdmVudHMiLCJjaHVua3MiLCJ2YWxpZCIsImFuYWx5c2VyIiwiaW5pdGlhbGlzZSIsIlBlbmRpbmdQcm9taXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidGhlbiIsInN0cmVhbSIsIk1lZGlhUmVjb3JkZXIiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjcmVhdGVBbmFseXNlciIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwid2luZG93Iiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJsYW5nIiwiY29udGludW91cyIsImludGVyaW1SZXN1bHRzIiwib25yZXN1bHQiLCJldmVudCIsImludGVyaW1UcmFuc2NyaXB0IiwiZmluYWxUcmFuc2NyaXB0IiwicmVzdWx0SW5kZXgiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaXNGaW5hbCIsInRyYW5zY3JpcHQiLCJzdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaXplIiwicHVzaCIsImNhdGNoIiwiZmluYWxseSIsInJlY29yZCIsInN0b3BTdHJlYW0iLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwiZW5kdGltZSIsIkJsb2IiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwiQ2hhdENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0Q29udGV4dCIsInVzZUNvbnRleHQiLCJIZWFkZXIiLCJzdG9yZSIsInNlYXJjaCIsInNldFNlYXJjaCIsInNldEF1dG9wbGF5IiwiaGFuZGxlQXV0b3BsYXlUb2dnbGUiLCJoYW5kbGVDaGF0U2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJbnB1dCIsImxhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsIm9uQ2xpY2siLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJjb250ZXh0VmFsdWUiLCJDb250cm9sIiwiQ2hhdE5vdEZvdW5kIiwiQ2hhdFNrZWxldG9uIiwiUHJvdmlkZXIiLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dENvbnRleHQiLCJDaGF0SW5wdXQiLCJpc1dhaXRpbmciLCJzZXRSZWNvcmRpbmciLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsInRleHRBcmVhUmVmIiwidXNlUmVmIiwidGV4dCIsInNldFRleHQiLCJoYW5kbGVJbnB1dENoYW5nZSIsInJlcGxhY2VBbGwiLCJjdXJyZW50Iiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsImhhbmRsZVNlbmQiLCJkaXNhYmxlZCIsIml0ZW0iLCJvblN1Ym1pdCIsInRyaW0iLCJkaXNhYmxlZFRleHRhcmVhIiwiY2xzIiwic3lzdGVtIiwiU3lzdGVtTW9kYWwiLCJGb3JtIiwicm93cyIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsInJlZiIsIkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIlBsYXllciIsImNhbmNlbCIsIkljb25CdXR0b24iLCJUaW1lciIsImFjdGlvbiIsInZhcmlhbnQiLCJwbGF5QWN0aW9uIiwiVUlGb3JtIiwiY2xvc2VNb2RhbCIsInNldFZhbHVlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJ0b2FzdCIsInN1Y2Nlc3MiLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiZGlhbG9nUmVmIiwib3Blbk1vZGFsIiwic2hvd01vZGFsIiwiY2xvc2UiLCJvbkNsb3NlIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJzZWNSZW5kZXJlZCIsIm1pbnV0ZXNSZW5kZXJlZCIsInVzZUVmZmVjdCIsInVzZVRpbWVyIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIiwic3JjIiwiYWx0IiwiSUNPTlMiLCJfIiwibWVzc2FnZXNFbmQiLCJzaG93QmFja0Fycm93Iiwic2V0U2hvd0JhY2tBcnJvdyIsInNjcm9sbFRvQm90dG9tIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiaXNJbkNvbnRhaW5lciIsInBhcmVudE5vZGUiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZW5kUmVjdCIsInRocmVzaG9sZCIsImJvdHRvbSIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiY2hhdE1ldGFkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsYXNzSWQiLCJNZXNzYWdlcyIsIlN5c3RlbUFuc3dlcmluZyIsInNldE1lc3NhZ2VzIiwibGFzdCIsIk1lc3NhZ2UiLCJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VUb2tlbnMiLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNwZWFraW5nIiwib25QbGF5IiwibGlzdGVuIiwicG9zaXRpb25Ub0N1dCIsInBsYXkiLCJvblBhdXNlIiwicGxheUF1ZGlvIiwiY2FsbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29weU1lc3NhZ2UiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJhcHBseSIsIkF1ZGlvTWVzc2FnZSIsIlByb2ZpbGVJY29uIiwiTWVzc2FnZVRleHQiLCJBdWRpb1BsYXllciIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsIm9uRXJyb3IiLCJjdXRJbmRleCIsInNldEN1dEluZGV4IiwibWFyayIsInJlbW92ZUhpZ2hsaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY3VycmVudEluZGV4IiwiY3VycmVudFdvcmQiLCJzZWdtZW50VG9DdXQiLCJzbGljZSIsInNwbGl0IiwiZmluYWxQb3NpdGlvbiIsInRleHRBcnJheSIsInF1ZXJ5U2VsZWN0b3IiLCJhZGQiLCJlbmRPZldvcmRJbmRleCIsImluZGV4T2YiLCJzZWdtZW50IiwicG9zaXRpb24iLCJ0ZXh0c0FycmF5IiwiY3JlYXRlU3BhbiIsIndvcmQiLCJpbmRleCIsIndvcmRzIiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGFpbnMiLCJ3b3Jkc0FycmF5IiwidGV4dFRvUGxheSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiQ2hhdE1lc3NhZ2VDb250ZXh0IiwidXNlQ2hhdE1lc3NhZ2VDb250ZXh0IiwidG90YWxUb2tlbnMiLCJ1c2VTcGVlY2hUb1RleHQiLCJ2b2ljZXMiLCJzZXRWb2ljZSIsInZvaWNlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy9pbnRlcmZhY2VzL21lc3NhZ2VzLnRzIiwid2lkZ2V0L3RzL3N0b3JlL2F1ZGlvLnRzIiwid2lkZ2V0L3RzL3N0b3JlL2luZGV4LnRzIiwid2lkZ2V0L3RzL3N0b3JlL3JlY29yZGVyLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2NvbnRleHQudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2Zvcm0udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCJ3aWRnZXQvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCIsIndpZGdldC90cy92aWV3cy9yb29tL2NoYXQtc2tlbGV0b24udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3Jvb20vY2hhdC50c3giLCJ3aWRnZXQvdHMvdmlld3Mvcm9vbS9tZXNzYWdlcy9hbnN3ZXJpbmcudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3Jvb20vbWVzc2FnZXMvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3Jvb20vbWVzc2FnZXMvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9yb29tL21lc3NhZ2VzL21lc3NhZ2UvYXVkaW8tbWVzc2FnZS50c3giLCJ3aWRnZXQvdHMvdmlld3Mvcm9vbS9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvcGxheWVyLnRzeCIsIndpZGdldC90cy92aWV3cy9yb29tL21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3Jvb20vbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3Jvb20vbWVzc2FnZXMvbWVzc2FnZS9jb250ZXh0LnRzIiwid2lkZ2V0L3RzL3ZpZXdzL3Jvb20vbWVzc2FnZXMvbWVzc2FnZS9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvdG9fX2RlbGV0ZS91c2Utc3BlZWNoLXRvLXRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=