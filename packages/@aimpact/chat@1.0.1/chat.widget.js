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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 1554972171,
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
        hash: 129847721,
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
            const Component = extensions.get(name)?.control;
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
        hash: 2840847444,
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
            return React.createElement("div", {
              className: 'chat-page__container'
            }, React.createElement(_header.Header, null), React.createElement("div", {
              className: 'chat__content'
            }, React.createElement(_extensionRenderer.ExtensionRenderer, {
              name: 'chat-intro'
            }), React.createElement(_messages.Messages, null), React.createElement("div", {
              ref: messagesEnd
            })), !chatIntro?.metadata?.avoidChat && React.createElement(React.Fragment, null, React.createElement("div", {
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
        hash: 1699343190,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatSkeleton = ChatSkeleton;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("@aimpact/chat/shared/components");
          function ChatSkeleton() {
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
            }));
          }
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
        hash: 3585402235,
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
        hash: 2525196247,
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
          var _context = require("../../context");
          /*bundle*/
          const SystemModal = ({
            chat
          }) => {
            const dialogRef = _react.default.useRef(null);
            const {
              texts: {
                assistant: texts
              }
            } = (0, _context.useChatContext)();
            const openModal = () => dialogRef.current.showModal();
            const closeModal = () => dialogRef.current.close();
            return _react.default.createElement("div", {
              className: `input__icon  input__icon--left`
            }, _react.default.createElement(_form2.Button, {
              icon: 'code',
              onClick: openModal,
              mode: 'primary'
            }), _react.default.createElement("dialog", {
              ref: dialogRef,
              onClose: closeModal
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              onClick: closeModal
            }), _react.default.createElement("header", null, _react.default.createElement("h1", null, texts.assistant)), _react.default.createElement("div", null, _react.default.createElement("p", null, texts.message)), _react.default.createElement(_form.UIForm, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UCxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUM7VUFDL0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU0sU0FBVTVELFlBQVk7WUFDM0IsU0FBU3dFLFVBQVU7Y0FDbEJDLGtCQUFTLENBQUNDLFdBQVcsR0FBRyxJQUFJO1lBQzdCO1lBRUEsSUFBSSxDQUFDblMsbUJBQVUsQ0FBQ2pHLEtBQUssRUFBRSxPQUFPb0wsb0JBQUNpTix5QkFBYSxPQUFHO1lBQy9DLE9BQ0NqTjtjQUFLYSxTQUFTLEVBQUM7WUFBa0IsR0FDaENiO2NBQUs0RCxHQUFHLEVBQUMsdUJBQXVCO2NBQUNPLEdBQUcsRUFBQztZQUFnQixFQUFHLEVBQ3hEbkU7Y0FBTWEsU0FBUyxFQUFDO1lBQXFCLEdBQ3BDYixvQkFBQ3VCLFdBQUk7Y0FBQ0gsSUFBSSxFQUFFSSxhQUFLLENBQUMsZUFBZSxDQUFDO2NBQUVYLFNBQVMsRUFBQztZQUFtQixFQUFHLEVBQ3BFYixpREFBdUIsRUFDdkJBLCtCQUNDQSx1RkFBaUUsT0FBQ0EsK0JBQU0scURBRXJFLEVBQ0pBLG9CQUFDa0ssWUFBTTtjQUFDOUksSUFBSSxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFeUwsVUFBVTtjQUFFbEYsS0FBSyxFQUFDO1lBQWdCLEVBQUcsQ0FDNUQsQ0FDRjtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiT2JqZWN0IiwidmFsdWUiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicmVjb3JkZXIiLCJ1cGxvYWRlciIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJwbGF5ZXIiLCJpc0ZldGNoaW5nIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2hpbmciLCJlcnJvciIsImNvbnN0cnVjdG9yIiwicGFyZW50IiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdCIsInVuZGVmaW5lZCIsInRyaWdnZXIiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJyZWFkeSIsIlVwbG9hZGVyIiwidHlwZSIsInBhcmFtcyIsImNvbnRhaW5lciIsInByb2plY3QiLCJ1cmwiLCJjb25maWciLCJDSEFUX0FQSV9TRVJWRVIiLCJvbiIsImxvYWRlbmQiLCJwcm9jZXNzIiwiY29uc29sZSIsIndhcm4iLCJjcmVhdGUiLCJzZWxlY3RvciIsImdsb2JhbFRoaXMiLCJjb3Jkb3ZhIiwiYmxvYlRvQXJyYXlCdWZmZXIiLCJibG9iIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsImFycmF5QnVmZmVyIiwidGFyZ2V0IiwicmVzdWx0IiwiQXJyYXlCdWZmZXIiLCJvbmVycm9yIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJzYXZlUmVjb3JkaW5nIiwicmVjb3JkaW5nIiwidHJhbnNjcmlwdGlvbiIsImNoYXQiLCJzZW5kQXVkaW8iLCJ3YWl0aW5nUmVzcG9uc2UiLCJnZW5lcmF0ZUlkIiwiYnVmZmVyIiwiaGFzaEJ1ZmZlciIsImNyeXB0byIsInN1YnRsZSIsImRpZ2VzdCIsImhhc2hBcnJheSIsIkFycmF5IiwiZnJvbSIsIlVpbnQ4QXJyYXkiLCJoYXNoSGV4IiwibWFwIiwiYiIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJqb2luIiwic2F2ZUF1ZGlvIiwiYXVkaW8iLCJpZCIsIm51bWJlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsInBlcmZvcm1hbmNlIiwibm93IiwicmVzcG9uc2UiLCJwdWJsaXNoUmVjb3JkaW5nIiwic3RhdHVzIiwiZGF0YSIsInByb3BlcnRpZXMiLCJwYXRoIiwiZmlsZSIsIm91dHB1dCIsInVzYWdlIiwic291cmNlIiwiY3JlYXRlZEF0IiwidW5peCIsInNhdmVJdGVtIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VySWQiLCJEYXRlIiwic2VsZWN0ZWRLYiIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJzZXRBdWRpb01lc3NhZ2UiLCJ1c2VyIiwiY2hhdElkIiwiY29udGVudCIsInJvbGUiLCJ0aW1lc3RhbXAiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2VzIiwiY2F0ZWdvcnkiLCJBcHBXcmFwcGVyIiwiY2hhdHMiLCJpdGVtcyIsImF1ZGlvTWFuYWdlciIsImtub3dsZWRnZUJveGVzIiwia2JzIiwia2IiLCJzZWxlY3RlZE1vZGVsIiwibW9kZWwiLCJub3RGb3VuZCIsInNlbGVjdGVkS2JQYXRoIiwiZmluZCIsImkiLCJtZXNzYWdlIiwiTWFwIiwiZXh0ZW5zaW9ucyIsImF1dG9wbGF5IiwiQ2hhdCIsImZvdW5kIiwiaXNSZWFkeSIsImtub3dsZWRlQm94U2VsZWN0ZWQiLCJrbm93bGVkZ2VCb3hJZCIsImxvYWRBbGwiLCJleHRzIiwibWV0YWRhdGEiLCJwcm9taXNlcyIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNldCIsInNlbmRNZXNzYWdlIiwiaW5jbHVkZXMiLCJiYWNrZW5kUmVzcG9uc2UiLCJnZXRNZXNzYWdlIiwiRXZlbnRzIiwiY2h1bmtzIiwidmFsaWQiLCJhbmFseXNlciIsImluaXRpYWxpc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJzdHJlYW0iLCJNZWRpYVJlY29yZGVyIiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY3JlYXRlQW5hbHlzZXIiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsIndpbmRvdyIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uIiwibGFuZyIsImNvbnRpbnVvdXMiLCJpbnRlcmltUmVzdWx0cyIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsInJlc3VsdEluZGV4IiwicmVzdWx0cyIsImxlbmd0aCIsImlzRmluYWwiLCJ0cmFuc2NyaXB0Iiwic3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2l6ZSIsInB1c2giLCJjYXRjaCIsImZpbmFsbHkiLCJyZWNvcmQiLCJzdG9wU3RyZWFtIiwiZ2V0VHJhY2tzIiwidHJhY2siLCJzdG9wIiwiZW5kdGltZSIsIkJsb2IiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwiRXh0ZW5zaW9uUmVuZGVyZXIiLCJzdG9yZSIsIkNvbXBvbmVudCIsImNvbnRyb2wiLCJSZWFjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VSZWYiLCJtZXNzYWdlc0VuZCIsInNob3dCYWNrQXJyb3ciLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJzZXRUaW1lb3V0IiwiY2hhdEludHJvIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwiTWVzc2FnZXMiLCJyZWYiLCJhdm9pZENoYXQiLCJDaGF0SW5wdXQiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJTeXN0ZW1BbnN3ZXJpbmciLCJJY29uIiwiSUNPTlMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGFzdCIsIk1lc3NhZ2UiLCJrZXkiLCJNZXNzYWdlQWN0aW9ucyIsInRleHQiLCJtZXNzYWdlVG9rZW5zIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwicG9zaXRpb25Ub0N1dCIsInBsYXkiLCJvblBhdXNlIiwicGxheUF1ZGlvIiwiY2FsbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29weU1lc3NhZ2UiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkaXNhYmxlZCIsImFwcGx5IiwiQXVkaW9NZXNzYWdlIiwiY2xzIiwiUHJvZmlsZUljb24iLCJNZXNzYWdlVGV4dCIsIkF1ZGlvUGxheWVyIiwic3JjIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiYWx0Iiwib25FcnJvciIsInJlbW92ZUhpZ2hsaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib25DbGlja1dvcmQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidG90YWxUb2tlbnMiLCJibG9ja3MiLCJzcGxpdCIsImZpbHRlciIsInRyaW0iLCJpc0NvZGUiLCJzdGFydHNXaXRoIiwicGxheWFibGVDb250ZW50IiwiaXRlbSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInVzZUVmZmVjdCIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIkNoYXRTa2VsZXRvbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJfIiwidXNlQmFja0Fycm93Iiwic2V0U2hvd0JhY2tBcnJvdyIsImlzSW5Db250YWluZXIiLCJwYXJlbnROb2RlIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVuZFJlY3QiLCJ0aHJlc2hvbGQiLCJib3R0b20iLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ2hhdENvbnRleHQiLCJ1c2VDaGF0Q29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNldEF1dG9wbGF5IiwiaGFuZGxlQXV0b3BsYXlUb2dnbGUiLCJoYW5kbGVDaGF0U2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJJbnB1dCIsImxhYmVsIiwicmVxdWlyZWQiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlByb3ZpZGVyIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiaXNXYWl0aW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0QXJlYVJlZiIsInNldFRleHQiLCJoYW5kbGVJbnB1dENoYW5nZSIsInJlcGxhY2VBbGwiLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5IiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwiZGlzYWJsZWRUZXh0YXJlYSIsInN5c3RlbSIsIlN5c3RlbU1vZGFsIiwiRm9ybSIsInJvd3MiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsInZhcmlhbnQiLCJwbGF5QWN0aW9uIiwiVUlGb3JtIiwiY2xvc2VNb2RhbCIsInNldFZhbHVlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwic2hvd01vZGFsIiwiY2xvc2UiLCJtb2RlIiwib25DbG9zZSIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwic2VjUmVuZGVyZWQiLCJtaW51dGVzUmVuZGVyZWQiLCJ1c2VUaW1lciIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiUHJlbG9hZFNjcmVlbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL2ludGVyZmFjZXMvbWVzc2FnZXMudHMiLCJ0cy9zdG9yZS9hdWRpby50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvc3RvcmUvcmVjb3JkZXIudHMiLCJ0cy92aWV3cy9jaGF0L2V4dGVuc2lvbi1yZW5kZXJlci50c3giLCJ0cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvYW5zd2VyaW5nLnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2F1ZGlvLW1lc3NhZ2UudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbnRleHQudHMiLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL3BsYXllci50c3giLCJ0cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsInRzL3ZpZXdzL2NoYXQvdXNlLWJhY2stYXJyb3cudHN4IiwidHMvdmlld3MvY29udGV4dC50c3giLCJ0cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCJ0cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4IiwidHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nLnRzeCIsInRzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsInRzL3ZpZXdzL2lucHV0L3N5c3RlbS9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwidHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=