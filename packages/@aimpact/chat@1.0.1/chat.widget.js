System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "dayjs@1.11.9", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@1.0.1/voice", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat@1.0.1/extensions", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.36/toast", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/form", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Recorder, Chat, ChatInput, RecordingButton, SystemModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioManager: void 0,
    Recorder: void 0,
    Chat: void 0,
    ChatInput: void 0,
    RecordingButton: void 0,
    SystemModal: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_dayjs2) {
      dependency_4 = _dayjs2;
    }, function (_beyondJsReactive112Model) {
      dependency_5 = _beyondJsReactive112Model;
    }, function (_aimpactAilearnApp100Config) {
      dependency_6 = _aimpactAilearnApp100Config;
    }, function (_aimpactChat101Voice) {
      dependency_7 = _aimpactChat101Voice;
    }, function (_aimpactChatSdk101Session) {
      dependency_8 = _aimpactChatSdk101Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_9 = _aimpactMediaManager100Uploader;
    }, function (_aimpactChatSdk101Core) {
      dependency_10 = _aimpactChatSdk101Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_11 = _aimpactChat101Wrapper;
    }, function (_aimpactChat101Extensions) {
      dependency_12 = _aimpactChat101Extensions;
    }, function (_beyondJsKernel019Core) {
      dependency_13 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_14 = _react2;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_15 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Icons) {
      dependency_16 = _pragmateUi0036Icons;
    }, function (_aimpactChat101SharedIcons) {
      dependency_17 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi0036Toast) {
      dependency_18 = _pragmateUi0036Toast;
    }, function (_aimpactChat101SharedComponents) {
      dependency_19 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_20 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Form) {
      dependency_21 = _pragmateUi0036Form;
    }, function (_aimpactChat101UiManager) {
      dependency_22 = _aimpactChat101UiManager;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/chat",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['dayjs', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/config', dependency_6], ['@aimpact/chat/voice', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/media-manager/uploader', dependency_9], ['@aimpact/chat-sdk/core', dependency_10], ['@aimpact/chat/wrapper', dependency_11], ['@aimpact/chat/extensions', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/icons', dependency_16], ['@aimpact/chat/shared/icons', dependency_17], ['pragmate-ui/toast', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['pragmate-ui/form', dependency_21], ['@aimpact/chat/ui/manager', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-wd-page",
        "vspecifier": "@aimpact/chat@1.0.1/chat.widget",
        "is": "page",
        "route": "/chat/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/chat.widget');
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
        hash: 2627155791,
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
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _recorder = require("./recorder");
          /* bundle */
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
        hash: 73526464,
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
          var _extensions = require("@aimpact/chat/extensions");
          class StoreManager extends _model.ReactiveModel {
            #messages = [];
            #EXTENSIONS = ['chat-intro'];
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
            #extensions = new Map();
            get extensions() {
              return this.#extensions;
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
              const chat = new _core.Chat({
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
              console.log(12, chat.metadata);
              const exts = await _extensions.extensions.load(this.#EXTENSIONS, chat.metadata);
              exts.forEach((item, key) => {
                this.#extensions.set(this.#EXTENSIONS[key], item);
              });
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

      /***********************************************
      INTERNAL MODULE: ./views/chat/extension-renderer
      ***********************************************/

      ims.set('./views/chat/extension-renderer', {
        hash: 1491523570,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ExtensionRenderer = ExtensionRenderer;
          var React = require("react");
          var _context = require("../context");
          function ExtensionRenderer({
            name
          }) {
            const {
              store: {
                chat,
                extensions
              }
            } = (0, _context.useChatContext)();
            const Component = extensions.get(name);
            if (!Component) return null;
            return React.createElement(Component, {
              metadata: JSON.stringify(chat.metadata)
            });
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/chat/index
      **********************************/

      ims.set('./views/chat/index', {
        hash: 1200206828,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _messages = require("./messages");
          var _header = require("../header");
          var _input = require("../input");
          var _useBackArrow = require("./use-back-arrow");
          var _extensionRenderer = require("./extension-renderer");
          const {
            useState,
            useRef,
            useEffect
          } = React;
          /*bundle*/
          function Chat() {
            const {
              store
            } = (0, _context.useChatContext)();
            const messagesEnd = useRef(null);
            const [showBackArrow] = (0, _useBackArrow.useBackArrow)(messagesEnd);
            const scrollToBottom = () => messagesEnd.current?.scrollIntoView({
              block: 'end',
              behavior: 'smooth'
            });
            (0, _hooks.useBinder)([store], () => globalThis.setTimeout(() => scrollToBottom(), 100), 'new.message');
            return React.createElement("div", {
              className: 'chat-container'
            }, React.createElement(_header.Header, null), React.createElement("div", {
              className: 'chat'
            }, React.createElement(_extensionRenderer.ExtensionRenderer, {
              name: 'chat-intro'
            }), React.createElement(_messages.Messages, null), React.createElement("div", {
              ref: messagesEnd
            })), React.createElement("div", {
              className: 'send'
            }, React.createElement(_input.ChatInput, {
              store: store
            })), showBackArrow && React.createElement(_icons.IconButton, {
              icon: 'backArrow',
              className: 'scroll-bottom circle',
              onClick: scrollToBottom
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/chat/messages/answering
      ***********************************************/

      ims.set('./views/chat/messages/answering', {
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
      INTERNAL MODULE: ./views/chat/messages/index
      *******************************************/

      ims.set('./views/chat/messages/index', {
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
      INTERNAL MODULE: ./views/chat/messages/message/actions/index
      ***********************************************************/

      ims.set('./views/chat/messages/message/actions/index', {
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
      INTERNAL MODULE: ./views/chat/messages/message/audio-message
      ***********************************************************/

      ims.set('./views/chat/messages/message/audio-message', {
        hash: 4198465637,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioMessage = void 0;
          var _react = require("react");
          var _components = require("@aimpact/chat/shared/components");
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
            }), _react.default.createElement(_components.AudioPlayer, {
              src: message.audio
            })));
          };
          exports.AudioMessage = AudioMessage;
        }
      });

      /*********************************************************************
      INTERNAL MODULE: ./views/chat/messages/message/components/profile-icon
      *********************************************************************/

      ims.set('./views/chat/messages/message/components/profile-icon', {
        hash: 2612644713,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat-sdk/session");
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
      INTERNAL MODULE: ./views/chat/messages/message/components/text
      *************************************************************/

      ims.set('./views/chat/messages/message/components/text', {
        hash: 3136270340,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("@aimpact/chat/shared/components");
          var _context = require("../../../../context");
          function MessageText({
            message
          }) {
            const {
              store,
              autoplay,
              player
            } = (0, _context.useChatContext)();
            const text = message?.content ?? '';
            const ref = React.useRef(null);
            const removeHighlight = () => ref.current.querySelectorAll('.highlight').forEach(element => element.classList.remove('highlight'));
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const onClickWord = event => store.currentMessage = message;
            const canBePlayed = message && message.role !== 'user' && autoplay;
            const autoplayValue = message.id === store.currentMessage?.id && canBePlayed;
            //<div onClick={onClick} dangerouslySetInnerHTML={{ __html: content }} />
            return React.createElement("div", {
              className: 'message-text__container',
              ref: ref
            }, React.createElement(_components.Playable, {
              content: text,
              onClickWord: onClickWord,
              player: player,
              autoplay: autoplayValue && canBePlayed
            }));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/chat/messages/message/context
      *****************************************************/

      ims.set('./views/chat/messages/message/context', {
        hash: 3986849874,
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
      INTERNAL MODULE: ./views/chat/messages/message/index
      ***************************************************/

      ims.set('./views/chat/messages/message/index', {
        hash: 4111947023,
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
            const blocks = message.content.split(/(```[\s\S]*?```)/).filter(block => block.trim() !== '').map(block => ({
              content: block,
              isCode: block.startsWith('```')
            }));
            const playableContent = blocks.filter(item => !item.isCode).map(item => item.content).join(' ');
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
              text: playableContent,
              messageTokens: messageTokens
            })));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/chat/skeleton
      *************************************/

      ims.set('./views/chat/skeleton', {
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

      /*******************************************
      INTERNAL MODULE: ./views/chat/use-back-arrow
      *******************************************/

      ims.set('./views/chat/use-back-arrow', {
        hash: 4227532897,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBackArrow = useBackArrow;
          var _react = require("react");
          function useBackArrow(messagesEnd) {
            const [showBackArrow, setShowBackArrow] = (0, _react.useState)(true);
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
            return [showBackArrow];
          }
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
        hash: 2832711262,
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
              icon: 'folder'
            }), _react.default.createElement("span", null, store.selectedKbPath)), _react.default.createElement("div", {
              className: 'chat__detail__container'
            }, _react.default.createElement(_icons.Icon, {
              icon: 'planet'
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
        hash: 2243797198,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _chat = require("./chat");
          var _context = require("./context");
          var _skeleton = require("./chat/skeleton");
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
            const View = ready && textsReady ? Control : _skeleton.ChatSkeleton;
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
        hash: 382786172,
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
              variant: 'link outline',
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
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
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
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'AudioManager') && _export("AudioManager", AudioManager = require ? require('./store/audio').AudioManager : value);
        (require || prop === 'Recorder') && _export("Recorder", Recorder = require ? require('./store/recorder').Recorder : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./views/chat/index').Chat : value);
        (require || prop === 'ChatInput') && _export("ChatInput", ChatInput = require ? require('./views/input/index').ChatInput : value);
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/input/recording').RecordingButton : value);
        (require || prop === 'SystemModal') && _export("SystemModal", SystemModal = require ? require('./views/input/system/index').SystemModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDbk07Y0FBS2MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDZDtjQUFLMEQsR0FBRyxFQUFDLHVCQUF1QjtjQUFDTyxHQUFHLEVBQUM7WUFBZ0IsRUFBRyxFQUN4RGpFO2NBQU1jLFNBQVMsRUFBQztZQUFxQixHQUNwQ2Qsb0JBQUN1QixXQUFJO2NBQUNILElBQUksRUFBRUksYUFBSyxDQUFDLGVBQWUsQ0FBQztjQUFFVixTQUFTLEVBQUM7WUFBbUIsRUFBRyxFQUNwRWQsaURBQXVCLEVBQ3ZCQSwrQkFDQ0EsdUZBQWlFLE9BQUNBLCtCQUFNLHFEQUVyRSxFQUNKQSxvQkFBQ3NKLFlBQU07Y0FBQ2xJLElBQUksRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRTJLLFVBQVU7Y0FBRS9FLEtBQUssRUFBQztZQUFnQixFQUFHLENBQzVELENBQ0Y7VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFuIiwiZXhwb3J0cyIsIk9iamVjdCIsInZhbHVlIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInJlY29yZGVyIiwidXBsb2FkZXIiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiaXNGZXRjaGluZyIsInRyaWdnZXJFdmVudCIsImZldGNoaW5nIiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwicmVhZHkiLCJVcGxvYWRlciIsInR5cGUiLCJwYXJhbXMiLCJjb250YWluZXIiLCJwcm9qZWN0IiwidXJsIiwiY29uZmlnIiwiQ0hBVF9BUElfU0VSVkVSIiwib24iLCJsb2FkZW5kIiwicHJvY2VzcyIsImNvbnNvbGUiLCJ3YXJuIiwiY3JlYXRlIiwic2VsZWN0b3IiLCJnbG9iYWxUaGlzIiwiY29yZG92YSIsImJsb2JUb0FycmF5QnVmZmVyIiwiYmxvYiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJhcnJheUJ1ZmZlciIsInRhcmdldCIsInJlc3VsdCIsIkFycmF5QnVmZmVyIiwib25lcnJvciIsInJlYWRBc0FycmF5QnVmZmVyIiwic2F2ZVJlY29yZGluZyIsInJlY29yZGluZyIsInRyYW5zY3JpcHRpb24iLCJjaGF0Iiwic2VuZEF1ZGlvIiwid2FpdGluZ1Jlc3BvbnNlIiwiZ2VuZXJhdGVJZCIsImJ1ZmZlciIsImhhc2hCdWZmZXIiLCJjcnlwdG8iLCJzdWJ0bGUiLCJkaWdlc3QiLCJoYXNoQXJyYXkiLCJBcnJheSIsImZyb20iLCJVaW50OEFycmF5IiwiaGFzaEhleCIsIm1hcCIsImIiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsInNhdmVBdWRpbyIsImF1ZGlvIiwiaWQiLCJudW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJlc3BvbnNlIiwicHVibGlzaFJlY29yZGluZyIsInN0YXR1cyIsImRhdGEiLCJwcm9wZXJ0aWVzIiwicGF0aCIsImZpbGUiLCJvdXRwdXQiLCJ1c2FnZSIsInNvdXJjZSIsImNyZWF0ZWRBdCIsInVuaXgiLCJzYXZlSXRlbSIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInNlc3Npb25XcmFwcGVyIiwidXNlcklkIiwiRGF0ZSIsInNlbGVjdGVkS2IiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwic2V0QXVkaW9NZXNzYWdlIiwidXNlciIsImNoYXRJZCIsImNvbnRlbnQiLCJyb2xlIiwidGltZXN0YW1wIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlcyIsImNhdGVnb3J5IiwiQXBwV3JhcHBlciIsImNoYXRzIiwiaXRlbXMiLCJhdWRpb01hbmFnZXIiLCJrbm93bGVkZ2VCb3hlcyIsImticyIsImtiIiwic2VsZWN0ZWRNb2RlbCIsIm1vZGVsIiwibm90Rm91bmQiLCJzZWxlY3RlZEtiUGF0aCIsImZpbmQiLCJpIiwibWVzc2FnZSIsIk1hcCIsImV4dGVuc2lvbnMiLCJhdXRvcGxheSIsIkNoYXQiLCJmb3VuZCIsImlzUmVhZHkiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJsb2FkQWxsIiwibG9nIiwibWV0YWRhdGEiLCJleHRzIiwiZm9yRWFjaCIsIml0ZW0iLCJrZXkiLCJzZXQiLCJzZW5kTWVzc2FnZSIsImluY2x1ZGVzIiwiYmFja2VuZFJlc3BvbnNlIiwiZ2V0TWVzc2FnZSIsIkV2ZW50cyIsImNodW5rcyIsInZhbGlkIiwiYW5hbHlzZXIiLCJpbml0aWFsaXNlIiwiUGVuZGluZ1Byb21pc2UiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ0aGVuIiwic3RyZWFtIiwiTWVkaWFSZWNvcmRlciIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJ3aW5kb3ciLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJvbnJlc3VsdCIsImV2ZW50IiwiaW50ZXJpbVRyYW5zY3JpcHQiLCJmaW5hbFRyYW5zY3JpcHQiLCJyZXN1bHRJbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJpc0ZpbmFsIiwidHJhbnNjcmlwdCIsInN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpemUiLCJwdXNoIiwiY2F0Y2giLCJmaW5hbGx5IiwicmVjb3JkIiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsInRyYWNrIiwic3RvcCIsImVuZHRpbWUiLCJCbG9iIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsIkV4dGVuc2lvblJlbmRlcmVyIiwic3RvcmUiLCJDb21wb25lbnQiLCJSZWFjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIm1lc3NhZ2VzRW5kIiwic2hvd0JhY2tBcnJvdyIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsInNldFRpbWVvdXQiLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJNZXNzYWdlcyIsInJlZiIsIkNoYXRJbnB1dCIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIlN5c3RlbUFuc3dlcmluZyIsIkljb24iLCJJQ09OUyIsInNldE1lc3NhZ2VzIiwibGFzdCIsIk1lc3NhZ2UiLCJNZXNzYWdlQWN0aW9ucyIsInRleHQiLCJtZXNzYWdlVG9rZW5zIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwicG9zaXRpb25Ub0N1dCIsInBsYXkiLCJvblBhdXNlIiwicGxheUF1ZGlvIiwiY2FsbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29weU1lc3NhZ2UiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkaXNhYmxlZCIsImFwcGx5IiwiQXVkaW9NZXNzYWdlIiwiY2xzIiwiUHJvZmlsZUljb24iLCJNZXNzYWdlVGV4dCIsIkF1ZGlvUGxheWVyIiwic3JjIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiYWx0Iiwib25FcnJvciIsInJlbW92ZUhpZ2hsaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib25DbGlja1dvcmQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidG90YWxUb2tlbnMiLCJibG9ja3MiLCJzcGxpdCIsImZpbHRlciIsInRyaW0iLCJpc0NvZGUiLCJzdGFydHNXaXRoIiwicGxheWFibGVDb250ZW50IiwiQ2hhdFNrZWxldG9uIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIl8iLCJpc1dhaXRpbmciLCJ1c2VCYWNrQXJyb3ciLCJzZXRTaG93QmFja0Fycm93IiwiaXNJbkNvbnRhaW5lciIsInBhcmVudE5vZGUiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZW5kUmVjdCIsInRocmVzaG9sZCIsImJvdHRvbSIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDaGF0Q29udGV4dCIsInVzZUNoYXRDb250ZXh0Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2V0QXV0b3BsYXkiLCJoYW5kbGVBdXRvcGxheVRvZ2dsZSIsImhhbmRsZUNoYXRTZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsIklucHV0IiwibGFiZWwiLCJyZXF1aXJlZCIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJjb250ZXh0VmFsdWUiLCJDb250cm9sIiwiQ2hhdE5vdEZvdW5kIiwiUHJvdmlkZXIiLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dENvbnRleHQiLCJzZXRSZWNvcmRpbmciLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsInRleHRBcmVhUmVmIiwic2V0VGV4dCIsImhhbmRsZUlucHV0Q2hhbmdlIiwicmVwbGFjZUFsbCIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiaGFuZGxlS2V5RG93biIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJoYW5kbGVTZW5kIiwib25TdWJtaXQiLCJkaXNhYmxlZFRleHRhcmVhIiwic3lzdGVtIiwiU3lzdGVtTW9kYWwiLCJGb3JtIiwicm93cyIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIlBsYXllciIsImNhbmNlbCIsIlRpbWVyIiwidmFyaWFudCIsInBsYXlBY3Rpb24iLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFyZWFWYWx1ZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwicHVibGlzaCIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJkaWFsb2dSZWYiLCJvcGVuTW9kYWwiLCJzaG93TW9kYWwiLCJjbG9zZSIsIm9uQ2xvc2UiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInNlY1JlbmRlcmVkIiwibWludXRlc1JlbmRlcmVkIiwidXNlVGltZXIiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciIsIm9wZW5EaWFsb2ciLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL2ludGVyZmFjZXMvbWVzc2FnZXMudHMiLCJ3aWRnZXQvdHMvc3RvcmUvYXVkaW8udHMiLCJ3aWRnZXQvdHMvc3RvcmUvaW5kZXgudHMiLCJ3aWRnZXQvdHMvc3RvcmUvcmVjb3JkZXIudHMiLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvYW5zd2VyaW5nLnRzeCIsIndpZGdldC90cy92aWV3cy9jaGF0L21lc3NhZ2VzL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2F1ZGlvLW1lc3NhZ2UudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvdGV4dC50c3giLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbnRleHQudHMiLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIndpZGdldC90cy92aWV3cy9jaGF0L3VzZS1iYWNrLWFycm93LnRzeCIsIndpZGdldC90cy92aWV3cy9jb250ZXh0LnRzeCIsIndpZGdldC90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIndpZGdldC90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsIndpZGdldC90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsIndpZGdldC90cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==