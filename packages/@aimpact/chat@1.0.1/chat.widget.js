System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "dayjs@1.11.9", "@beyond-js/reactive@1.1.3/model", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat@1.0.1/extensions", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.36/toast", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/form", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Recorder, Chat, AudioPlayer, ChatInput, RecordingButton, SystemModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioManager: void 0,
    Recorder: void 0,
    Chat: void 0,
    AudioPlayer: void 0,
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
    }, function (_beyondJsReactive113Model) {
      dependency_5 = _beyondJsReactive113Model;
    }, function (_aimpactAilearnApp100Config) {
      dependency_6 = _aimpactAilearnApp100Config;
    }, function (_aimpactChatSdk100Voice) {
      dependency_7 = _aimpactChatSdk100Voice;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_9 = _aimpactMediaManager100Uploader;
    }, function (_aimpactChatSdk100Core) {
      dependency_10 = _aimpactChatSdk100Core;
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
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_19 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_aimpactChat101SharedComponents) {
      dependency_20 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_21 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Form) {
      dependency_22 = _pragmateUi0036Form;
    }, function (_aimpactChat101UiManager) {
      dependency_23 = _aimpactChat101UiManager;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['dayjs', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/config', dependency_6], ['@aimpact/chat-sdk/voice', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/media-manager/uploader', dependency_9], ['@aimpact/chat-sdk/core', dependency_10], ['@aimpact/chat/wrapper', dependency_11], ['@aimpact/chat/extensions', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/icons', dependency_16], ['@aimpact/chat/shared/icons', dependency_17], ['pragmate-ui/toast', dependency_18], ['@aimpact/chat-sdk/widgets/playable', dependency_19], ['@aimpact/chat/shared/components', dependency_20], ['@aimpact/chat/shared/hooks', dependency_21], ['pragmate-ui/form', dependency_22], ['@aimpact/chat/ui/manager', dependency_23]]);
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
        hash: 346101868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioManager = void 0;
          var _dayjs = require("dayjs");
          var _model = require("@beyond-js/reactive/model");
          var _config = require("@aimpact/chat/config");
          var _voice = require("@aimpact/chat-sdk/voice");
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
        hash: 1195355687,
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
              const exts = await _extensions.extensions.load(this.#EXTENSIONS, chat.metadata);
              console.log(200, exts);
              const promises = [];
              exts.forEach((extension, index) => {});
              this.#EXTENSIONS.forEach((extension, index) => {
                this.#extensions.set(extension, exts[index]);
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
        hash: 1308713254,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ExtensionRenderer = ExtensionRenderer;
          var React = require("react");
          var _context = require("../context");
          // import { extensions } from '@aimpact/chat/extensions';

          // console.log(2, extensions);
          function ExtensionRenderer({
            name
          }) {
            const {
              store: {
                chat,
                extensions
              }
            } = (0, _context.useChatContext)();
            console.log(0.9, extensions.get(name).control);
            const Component = extensions.get(name).control;
            if (!Component) return null;
            console.log(10, chat.metadata);
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
        hash: 169180850,
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
            useRef
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
            const chatIntro = store.extensions.get('chat-intro');
            console.log(99, chatIntro);
            if (chatIntro) return React.createElement("div", {
              className: 'chat-container'
            }, React.createElement(_header.Header, null), React.createElement("div", {
              className: 'chat'
            }, React.createElement(_extensionRenderer.ExtensionRenderer, {
              name: 'chat-intro'
            }), React.createElement(_messages.Messages, null), React.createElement("div", {
              ref: messagesEnd
            })), !chatIntro.metadata?.avoidChat && React.createElement(React.Fragment, null, React.createElement("div", {
              className: 'send'
            }, React.createElement(_input.ChatInput, {
              store: store
            })), showBackArrow && React.createElement(_icons.IconButton, {
              icon: 'backArrow',
              className: 'scroll-bottom circle',
              onClick: scrollToBottom
            })));
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
        hash: 3380336596,
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
              await player.play(text, message.id);
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
        hash: 37865100,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioMessage = void 0;
          var _react = require("react");
          var _player = require("./player");
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
        hash: 3443276968,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
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
            }, React.createElement(_playable.Playable, {
              content: text,
              id: message.id,
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

      /****************************************************
      INTERNAL MODULE: ./views/chat/messages/message/player
      ****************************************************/

      ims.set('./views/chat/messages/message/player', {
        hash: 1737248758,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var React = require("react");
          /* bundle */ // audio_player.tsx

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
        "im": "./views/chat/messages/message/player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
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
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./views/chat/messages/message/player').AudioPlayer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxHQUFHLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNTixPQUFPLEdBQUdZLElBQUksQ0FBQ0MsS0FBSyxDQUFFUCxJQUFJLEdBQUcsSUFBSSxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTVAsS0FBSyxHQUFHYSxJQUFJLENBQUNDLEtBQUssQ0FBQ1AsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFekMsT0FBTyxDQUFDUCxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUM7VUFDL0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU0sU0FBVXpELFlBQVk7WUFDM0IsU0FBU3FFLFVBQVU7Y0FDbEJDLGtCQUFTLENBQUNDLFdBQVcsR0FBRyxJQUFJO1lBQzdCO1lBRUEsSUFBSSxDQUFDbFMsbUJBQVUsQ0FBQ2pHLEtBQUssRUFBRSxPQUFPcUwsb0JBQUMrTSx5QkFBYSxPQUFHO1lBQy9DLE9BQ0MvTTtjQUFLYSxTQUFTLEVBQUM7WUFBa0IsR0FDaENiO2NBQUs0RCxHQUFHLEVBQUMsdUJBQXVCO2NBQUNPLEdBQUcsRUFBQztZQUFnQixFQUFHLEVBQ3hEbkU7Y0FBTWEsU0FBUyxFQUFDO1lBQXFCLEdBQ3BDYixvQkFBQ3VCLFdBQUk7Y0FBQ0gsSUFBSSxFQUFFSSxhQUFLLENBQUMsZUFBZSxDQUFDO2NBQUVYLFNBQVMsRUFBQztZQUFtQixFQUFHLEVBQ3BFYixpREFBdUIsRUFDdkJBLCtCQUNDQSx1RkFBaUUsT0FBQ0EsK0JBQU0scURBRXJFLEVBQ0pBLG9CQUFDa0ssWUFBTTtjQUFDOUksSUFBSSxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFdUwsVUFBVTtjQUFFL0UsS0FBSyxFQUFDO1lBQWdCLEVBQUcsQ0FDNUQsQ0FDRjtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiT2JqZWN0IiwidmFsdWUiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicmVjb3JkZXIiLCJ1cGxvYWRlciIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJwbGF5ZXIiLCJpc0ZldGNoaW5nIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2hpbmciLCJlcnJvciIsImNvbnN0cnVjdG9yIiwicGFyZW50IiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdCIsInVuZGVmaW5lZCIsInRyaWdnZXIiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJyZWFkeSIsIlVwbG9hZGVyIiwidHlwZSIsInBhcmFtcyIsImNvbnRhaW5lciIsInByb2plY3QiLCJ1cmwiLCJjb25maWciLCJDSEFUX0FQSV9TRVJWRVIiLCJvbiIsImxvYWRlbmQiLCJwcm9jZXNzIiwiY29uc29sZSIsIndhcm4iLCJjcmVhdGUiLCJzZWxlY3RvciIsImdsb2JhbFRoaXMiLCJjb3Jkb3ZhIiwiYmxvYlRvQXJyYXlCdWZmZXIiLCJibG9iIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsImFycmF5QnVmZmVyIiwidGFyZ2V0IiwicmVzdWx0IiwiQXJyYXlCdWZmZXIiLCJvbmVycm9yIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJzYXZlUmVjb3JkaW5nIiwicmVjb3JkaW5nIiwidHJhbnNjcmlwdGlvbiIsImNoYXQiLCJzZW5kQXVkaW8iLCJ3YWl0aW5nUmVzcG9uc2UiLCJnZW5lcmF0ZUlkIiwiYnVmZmVyIiwiaGFzaEJ1ZmZlciIsImNyeXB0byIsInN1YnRsZSIsImRpZ2VzdCIsImhhc2hBcnJheSIsIkFycmF5IiwiZnJvbSIsIlVpbnQ4QXJyYXkiLCJoYXNoSGV4IiwibWFwIiwiYiIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJqb2luIiwic2F2ZUF1ZGlvIiwiYXVkaW8iLCJpZCIsIm51bWJlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsInBlcmZvcm1hbmNlIiwibm93IiwicmVzcG9uc2UiLCJwdWJsaXNoUmVjb3JkaW5nIiwic3RhdHVzIiwiZGF0YSIsInByb3BlcnRpZXMiLCJwYXRoIiwiZmlsZSIsIm91dHB1dCIsInVzYWdlIiwic291cmNlIiwiY3JlYXRlZEF0IiwidW5peCIsInNhdmVJdGVtIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VySWQiLCJEYXRlIiwic2VsZWN0ZWRLYiIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJzZXRBdWRpb01lc3NhZ2UiLCJ1c2VyIiwiY2hhdElkIiwiY29udGVudCIsInJvbGUiLCJ0aW1lc3RhbXAiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2VzIiwiY2F0ZWdvcnkiLCJBcHBXcmFwcGVyIiwiY2hhdHMiLCJpdGVtcyIsImF1ZGlvTWFuYWdlciIsImtub3dsZWRnZUJveGVzIiwia2JzIiwia2IiLCJzZWxlY3RlZE1vZGVsIiwibW9kZWwiLCJub3RGb3VuZCIsInNlbGVjdGVkS2JQYXRoIiwiZmluZCIsImkiLCJtZXNzYWdlIiwiTWFwIiwiZXh0ZW5zaW9ucyIsImF1dG9wbGF5IiwiQ2hhdCIsImZvdW5kIiwiaXNSZWFkeSIsImtub3dsZWRlQm94U2VsZWN0ZWQiLCJrbm93bGVkZ2VCb3hJZCIsImxvYWRBbGwiLCJleHRzIiwibWV0YWRhdGEiLCJsb2ciLCJwcm9taXNlcyIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNldCIsInNlbmRNZXNzYWdlIiwiaW5jbHVkZXMiLCJiYWNrZW5kUmVzcG9uc2UiLCJnZXRNZXNzYWdlIiwiRXZlbnRzIiwiY2h1bmtzIiwidmFsaWQiLCJhbmFseXNlciIsImluaXRpYWxpc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJzdHJlYW0iLCJNZWRpYVJlY29yZGVyIiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY3JlYXRlQW5hbHlzZXIiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsIndpbmRvdyIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uIiwibGFuZyIsImNvbnRpbnVvdXMiLCJpbnRlcmltUmVzdWx0cyIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsInJlc3VsdEluZGV4IiwicmVzdWx0cyIsImxlbmd0aCIsImlzRmluYWwiLCJ0cmFuc2NyaXB0Iiwic3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2l6ZSIsInB1c2giLCJjYXRjaCIsImZpbmFsbHkiLCJyZWNvcmQiLCJzdG9wU3RyZWFtIiwiZ2V0VHJhY2tzIiwidHJhY2siLCJzdG9wIiwiZW5kdGltZSIsIkJsb2IiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwiRXh0ZW5zaW9uUmVuZGVyZXIiLCJzdG9yZSIsImNvbnRyb2wiLCJDb21wb25lbnQiLCJSZWFjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VSZWYiLCJtZXNzYWdlc0VuZCIsInNob3dCYWNrQXJyb3ciLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJzZXRUaW1lb3V0IiwiY2hhdEludHJvIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwiTWVzc2FnZXMiLCJyZWYiLCJhdm9pZENoYXQiLCJDaGF0SW5wdXQiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJTeXN0ZW1BbnN3ZXJpbmciLCJJY29uIiwiSUNPTlMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGFzdCIsIk1lc3NhZ2UiLCJrZXkiLCJNZXNzYWdlQWN0aW9ucyIsInRleHQiLCJtZXNzYWdlVG9rZW5zIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwicG9zaXRpb25Ub0N1dCIsInBsYXkiLCJvblBhdXNlIiwicGxheUF1ZGlvIiwiY2FsbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29weU1lc3NhZ2UiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkaXNhYmxlZCIsImFwcGx5IiwiQXVkaW9NZXNzYWdlIiwiY2xzIiwiUHJvZmlsZUljb24iLCJNZXNzYWdlVGV4dCIsIkF1ZGlvUGxheWVyIiwic3JjIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiYWx0Iiwib25FcnJvciIsInJlbW92ZUhpZ2hsaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib25DbGlja1dvcmQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidG90YWxUb2tlbnMiLCJibG9ja3MiLCJzcGxpdCIsImZpbHRlciIsInRyaW0iLCJpc0NvZGUiLCJzdGFydHNXaXRoIiwicGxheWFibGVDb250ZW50IiwiaXRlbSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInVzZUVmZmVjdCIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIkNoYXRTa2VsZXRvbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJfIiwiaXNXYWl0aW5nIiwidXNlQmFja0Fycm93Iiwic2V0U2hvd0JhY2tBcnJvdyIsImlzSW5Db250YWluZXIiLCJwYXJlbnROb2RlIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVuZFJlY3QiLCJ0aHJlc2hvbGQiLCJib3R0b20iLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ2hhdENvbnRleHQiLCJ1c2VDaGF0Q29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNldEF1dG9wbGF5IiwiaGFuZGxlQXV0b3BsYXlUb2dnbGUiLCJoYW5kbGVDaGF0U2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJJbnB1dCIsImxhYmVsIiwicmVxdWlyZWQiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlByb3ZpZGVyIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0Iiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0QXJlYVJlZiIsInNldFRleHQiLCJoYW5kbGVJbnB1dENoYW5nZSIsInJlcGxhY2VBbGwiLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5IiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwiZGlzYWJsZWRUZXh0YXJlYSIsInN5c3RlbSIsIlN5c3RlbU1vZGFsIiwiRm9ybSIsInJvd3MiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsInZhcmlhbnQiLCJwbGF5QWN0aW9uIiwiVUlGb3JtIiwiY2xvc2VNb2RhbCIsInNldFZhbHVlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiZGlhbG9nUmVmIiwib3Blbk1vZGFsIiwic2hvd01vZGFsIiwiY2xvc2UiLCJvbkNsb3NlIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJzZWNSZW5kZXJlZCIsIm1pbnV0ZXNSZW5kZXJlZCIsInVzZVRpbWVyIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy9pbnRlcmZhY2VzL21lc3NhZ2VzLnRzIiwid2lkZ2V0L3RzL3N0b3JlL2F1ZGlvLnRzIiwid2lkZ2V0L3RzL3N0b3JlL2luZGV4LnRzIiwid2lkZ2V0L3RzL3N0b3JlL3JlY29yZGVyLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2NoYXQvZXh0ZW5zaW9uLXJlbmRlcmVyLnRzeCIsIndpZGdldC90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9jaGF0L21lc3NhZ2VzL2Fuc3dlcmluZy50c3giLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9hdWRpby1tZXNzYWdlLnRzeCIsIndpZGdldC90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb250ZXh0LnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL3BsYXllci50c3giLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC91c2UtYmFjay1hcnJvdy50c3giLCJ3aWRnZXQvdHMvdmlld3MvY29udGV4dC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2lucHV0L3BsYXllci50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nLnRzeCIsIndpZGdldC90cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIndpZGdldC90cy92aWV3cy9ub3QtZm91bmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==