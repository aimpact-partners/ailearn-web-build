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
        hash: 1797742748,
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
              _wrapper.AppWrapper.currentChat = chat;
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
            async sendMessage(content) {
              try {
                this.#currentMessage = undefined;
                if ([undefined, '', null].includes(content)) return;
                this.fetching = true;
                this.waitingResponse = true;
                const {
                  message,
                  response
                } = await this.#chat.sendMessage(content);
                // the system answer.
                this.#currentMessage = message;
                const onListen = () => {
                  this.triggerEvent(`message.${response.id}.updated`);
                };
                message.on('content.updated', onListen);
                // this.chat.getMessage(backendResponse.response.id).autoplay = this.autoplay;
                this.waitingResponse = false;
                this.triggerEvent('new.message');
              } catch (e) {
                console.error(e);
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
        hash: 3355462573,
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
        hash: 448542529,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../../context");
          function Message({
            message,
            last
          }) {
            const [content, setContent] = React.useState(message?.content ?? '');
            const cls = `message ${message.role}`;
            const messageTokens = message.role === 'system' ? message.usage?.totalTokens : null;
            const {
              store
            } = (0, _context.useChatContext)();
            (0, _hooks.useBinder)([store], () => {
              setContent(message.content);
            }, `message.${message.id}.updated`);
            if (message.type === 'audio') return React.createElement(_audioMessage.AudioMessage, {
              message: message,
              last: last
            });
            const blocks = content.split(/(```[\s\S]*?```)/).filter(block => block.trim() !== '').map(block => ({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSwrQkFBTSxxREFFckUsRUFDSkEsb0JBQUNtSyxZQUFNO2NBQUMvSSxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUUwTCxVQUFVO2NBQUVsRixLQUFLLEVBQUM7WUFBZ0IsRUFBRyxDQUM1RCxDQUNGO1VBRVIiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJPYmplY3QiLCJ2YWx1ZSIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJyZWNvcmRlciIsInVwbG9hZGVyIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImlzRmV0Y2hpbmciLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaGluZyIsImVycm9yIiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwidW5kZWZpbmVkIiwidHJpZ2dlciIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInJlYWR5IiwiVXBsb2FkZXIiLCJ0eXBlIiwicGFyYW1zIiwiY29udGFpbmVyIiwicHJvamVjdCIsInVybCIsImNvbmZpZyIsIkNIQVRfQVBJX1NFUlZFUiIsIm9uIiwibG9hZGVuZCIsInByb2Nlc3MiLCJjb25zb2xlIiwid2FybiIsImNyZWF0ZSIsInNlbGVjdG9yIiwiZ2xvYmFsVGhpcyIsImNvcmRvdmEiLCJibG9iVG9BcnJheUJ1ZmZlciIsImJsb2IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwiYXJyYXlCdWZmZXIiLCJ0YXJnZXQiLCJyZXN1bHQiLCJBcnJheUJ1ZmZlciIsIm9uZXJyb3IiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInNhdmVSZWNvcmRpbmciLCJyZWNvcmRpbmciLCJ0cmFuc2NyaXB0aW9uIiwiY2hhdCIsInNlbmRBdWRpbyIsIndhaXRpbmdSZXNwb25zZSIsImdlbmVyYXRlSWQiLCJidWZmZXIiLCJoYXNoQnVmZmVyIiwiY3J5cHRvIiwic3VidGxlIiwiZGlnZXN0IiwiaGFzaEFycmF5IiwiQXJyYXkiLCJmcm9tIiwiVWludDhBcnJheSIsImhhc2hIZXgiLCJtYXAiLCJiIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImpvaW4iLCJzYXZlQXVkaW8iLCJhdWRpbyIsImlkIiwibnVtYmVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXNwb25zZSIsInB1Ymxpc2hSZWNvcmRpbmciLCJzdGF0dXMiLCJkYXRhIiwicHJvcGVydGllcyIsInBhdGgiLCJmaWxlIiwib3V0cHV0IiwidXNhZ2UiLCJzb3VyY2UiLCJjcmVhdGVkQXQiLCJ1bml4Iiwic2F2ZUl0ZW0iLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXJJZCIsIkRhdGUiLCJzZWxlY3RlZEtiIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsInNldEF1ZGlvTWVzc2FnZSIsInVzZXIiLCJjaGF0SWQiLCJjb250ZW50Iiwicm9sZSIsInRpbWVzdGFtcCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZXMiLCJjYXRlZ29yeSIsIkFwcFdyYXBwZXIiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW9NYW5hZ2VyIiwia25vd2xlZGdlQm94ZXMiLCJrYnMiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsIm1lc3NhZ2UiLCJNYXAiLCJleHRlbnNpb25zIiwiYXV0b3BsYXkiLCJDaGF0IiwiY3VycmVudENoYXQiLCJmb3VuZCIsImlzUmVhZHkiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJsb2FkQWxsIiwiZXh0cyIsIm1ldGFkYXRhIiwicHJvbWlzZXMiLCJmb3JFYWNoIiwiZXh0ZW5zaW9uIiwiaW5kZXgiLCJzZXQiLCJzZW5kTWVzc2FnZSIsImluY2x1ZGVzIiwib25MaXN0ZW4iLCJFdmVudHMiLCJjaHVua3MiLCJ2YWxpZCIsImFuYWx5c2VyIiwiaW5pdGlhbGlzZSIsIlBlbmRpbmdQcm9taXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidGhlbiIsInN0cmVhbSIsIk1lZGlhUmVjb3JkZXIiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjcmVhdGVBbmFseXNlciIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwid2luZG93Iiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJsYW5nIiwiY29udGludW91cyIsImludGVyaW1SZXN1bHRzIiwib25yZXN1bHQiLCJldmVudCIsImludGVyaW1UcmFuc2NyaXB0IiwiZmluYWxUcmFuc2NyaXB0IiwicmVzdWx0SW5kZXgiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaXNGaW5hbCIsInRyYW5zY3JpcHQiLCJzdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaXplIiwicHVzaCIsImNhdGNoIiwiZmluYWxseSIsInJlY29yZCIsInN0b3BTdHJlYW0iLCJnZXRUcmFja3MiLCJ0cmFjayIsInN0b3AiLCJlbmR0aW1lIiwiQmxvYiIsIm1pbWVUeXBlIiwib25GaW5pc2giLCJFeHRlbnNpb25SZW5kZXJlciIsInN0b3JlIiwiQ29tcG9uZW50IiwiY29udHJvbCIsIlJlYWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZVJlZiIsIm1lc3NhZ2VzRW5kIiwic2hvd0JhY2tBcnJvdyIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsInNldFRpbWVvdXQiLCJjaGF0SW50cm8iLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJNZXNzYWdlcyIsInJlZiIsImF2b2lkQ2hhdCIsIkNoYXRJbnB1dCIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIlN5c3RlbUFuc3dlcmluZyIsIkljb24iLCJJQ09OUyIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJsYXN0IiwiTWVzc2FnZSIsImtleSIsIk1lc3NhZ2VBY3Rpb25zIiwidGV4dCIsIm1lc3NhZ2VUb2tlbnMiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJsaXN0ZW4iLCJwb3NpdGlvblRvQ3V0IiwicGxheSIsIm9uUGF1c2UiLCJwbGF5QXVkaW8iLCJjYWxsIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb3B5TWVzc2FnZSIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiYXBwbHkiLCJBdWRpb01lc3NhZ2UiLCJjbHMiLCJQcm9maWxlSWNvbiIsIk1lc3NhZ2VUZXh0IiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJhbHQiLCJvbkVycm9yIiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJvbkNsaWNrV29yZCIsImNhbkJlUGxheWVkIiwiYXV0b3BsYXlWYWx1ZSIsIlBsYXlhYmxlIiwiQ2hhdE1lc3NhZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJzZXRDb250ZW50IiwidG90YWxUb2tlbnMiLCJibG9ja3MiLCJzcGxpdCIsImZpbHRlciIsInRyaW0iLCJpc0NvZGUiLCJzdGFydHNXaXRoIiwicGxheWFibGVDb250ZW50IiwiaXRlbSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInVzZUVmZmVjdCIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIkNoYXRTa2VsZXRvbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJfIiwidXNlQmFja0Fycm93Iiwic2V0U2hvd0JhY2tBcnJvdyIsImlzSW5Db250YWluZXIiLCJwYXJlbnROb2RlIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVuZFJlY3QiLCJ0aHJlc2hvbGQiLCJib3R0b20iLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ2hhdENvbnRleHQiLCJ1c2VDaGF0Q29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNldEF1dG9wbGF5IiwiaGFuZGxlQXV0b3BsYXlUb2dnbGUiLCJoYW5kbGVDaGF0U2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJJbnB1dCIsImxhYmVsIiwicmVxdWlyZWQiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlByb3ZpZGVyIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiaXNXYWl0aW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0QXJlYVJlZiIsInNldFRleHQiLCJoYW5kbGVJbnB1dENoYW5nZSIsInJlcGxhY2VBbGwiLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5IiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwiZGlzYWJsZWRUZXh0YXJlYSIsInN5c3RlbSIsIlN5c3RlbU1vZGFsIiwiRm9ybSIsInJvd3MiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsInZhcmlhbnQiLCJwbGF5QWN0aW9uIiwiVUlGb3JtIiwiY2xvc2VNb2RhbCIsInNldFZhbHVlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwic2hvd01vZGFsIiwiY2xvc2UiLCJtb2RlIiwib25DbG9zZSIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwic2VjUmVuZGVyZWQiLCJtaW51dGVzUmVuZGVyZWQiLCJ1c2VUaW1lciIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiUHJlbG9hZFNjcmVlbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL2ludGVyZmFjZXMvbWVzc2FnZXMudHMiLCJ0cy9zdG9yZS9hdWRpby50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvc3RvcmUvcmVjb3JkZXIudHMiLCJ0cy92aWV3cy9jaGF0L2V4dGVuc2lvbi1yZW5kZXJlci50c3giLCJ0cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvYW5zd2VyaW5nLnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2F1ZGlvLW1lc3NhZ2UudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbnRleHQudHMiLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL3BsYXllci50c3giLCJ0cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsInRzL3ZpZXdzL2NoYXQvdXNlLWJhY2stYXJyb3cudHN4IiwidHMvdmlld3MvY29udGV4dC50c3giLCJ0cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCJ0cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4IiwidHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nLnRzeCIsInRzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsInRzL3ZpZXdzL2lucHV0L3N5c3RlbS9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwidHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=