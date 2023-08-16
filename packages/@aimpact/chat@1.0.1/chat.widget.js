System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "dayjs@1.11.9", "@beyond-js/reactive@1.1.3/model", "@aimpact/ailearn-app@0.0.11/config", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat@1.0.1/extensions", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.36/toast", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/form", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0011Config) {
      dependency_6 = _aimpactAilearnApp0011Config;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
        hash: 3358292761,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx1QkFBdUI7Y0FBQ08sR0FBRyxFQUFDO1lBQWdCLEVBQUcsRUFDeERqRTtjQUFNYyxTQUFTLEVBQUM7WUFBcUIsR0FDcENkLG9CQUFDdUIsV0FBSTtjQUFDSCxJQUFJLEVBQUVJLGFBQUssQ0FBQyxlQUFlLENBQUM7Y0FBRVYsU0FBUyxFQUFDO1lBQW1CLEVBQUcsRUFDcEVkLGlEQUF1QixFQUN2QkEsK0JBQ0NBLHVGQUFpRSxPQUFDQSwrQkFBTSxxREFFckUsRUFDSkEsb0JBQUM4SixZQUFNO2NBQUMxSSxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUVtTCxVQUFVO2NBQUUvRSxLQUFLLEVBQUM7WUFBZ0IsRUFBRyxDQUM1RCxDQUNGO1VBRVIiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJPYmplY3QiLCJ2YWx1ZSIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJyZWNvcmRlciIsInVwbG9hZGVyIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImlzRmV0Y2hpbmciLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaGluZyIsImVycm9yIiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwidW5kZWZpbmVkIiwidHJpZ2dlciIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInJlYWR5IiwiVXBsb2FkZXIiLCJ0eXBlIiwicGFyYW1zIiwiY29udGFpbmVyIiwicHJvamVjdCIsInVybCIsImNvbmZpZyIsIkNIQVRfQVBJX1NFUlZFUiIsIm9uIiwibG9hZGVuZCIsInByb2Nlc3MiLCJjb25zb2xlIiwid2FybiIsImNyZWF0ZSIsInNlbGVjdG9yIiwiZ2xvYmFsVGhpcyIsImNvcmRvdmEiLCJibG9iVG9BcnJheUJ1ZmZlciIsImJsb2IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwiYXJyYXlCdWZmZXIiLCJ0YXJnZXQiLCJyZXN1bHQiLCJBcnJheUJ1ZmZlciIsIm9uZXJyb3IiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInNhdmVSZWNvcmRpbmciLCJyZWNvcmRpbmciLCJ0cmFuc2NyaXB0aW9uIiwiY2hhdCIsInNlbmRBdWRpbyIsIndhaXRpbmdSZXNwb25zZSIsImdlbmVyYXRlSWQiLCJidWZmZXIiLCJoYXNoQnVmZmVyIiwiY3J5cHRvIiwic3VidGxlIiwiZGlnZXN0IiwiaGFzaEFycmF5IiwiQXJyYXkiLCJmcm9tIiwiVWludDhBcnJheSIsImhhc2hIZXgiLCJtYXAiLCJiIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImpvaW4iLCJzYXZlQXVkaW8iLCJhdWRpbyIsImlkIiwibnVtYmVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXNwb25zZSIsInB1Ymxpc2hSZWNvcmRpbmciLCJzdGF0dXMiLCJkYXRhIiwicHJvcGVydGllcyIsInBhdGgiLCJmaWxlIiwib3V0cHV0IiwidXNhZ2UiLCJzb3VyY2UiLCJjcmVhdGVkQXQiLCJ1bml4Iiwic2F2ZUl0ZW0iLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXJJZCIsIkRhdGUiLCJzZWxlY3RlZEtiIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsInNldEF1ZGlvTWVzc2FnZSIsInVzZXIiLCJjaGF0SWQiLCJjb250ZW50Iiwicm9sZSIsInRpbWVzdGFtcCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZXMiLCJjYXRlZ29yeSIsIkFwcFdyYXBwZXIiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW9NYW5hZ2VyIiwia25vd2xlZGdlQm94ZXMiLCJrYnMiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsIm1lc3NhZ2UiLCJNYXAiLCJleHRlbnNpb25zIiwiYXV0b3BsYXkiLCJDaGF0IiwiZm91bmQiLCJpc1JlYWR5Iiwia25vd2xlZGVCb3hTZWxlY3RlZCIsImtub3dsZWRnZUJveElkIiwibG9hZEFsbCIsImV4dHMiLCJtZXRhZGF0YSIsImZvckVhY2giLCJpdGVtIiwia2V5Iiwic2V0Iiwic2VuZE1lc3NhZ2UiLCJpbmNsdWRlcyIsImJhY2tlbmRSZXNwb25zZSIsImdldE1lc3NhZ2UiLCJFdmVudHMiLCJjaHVua3MiLCJ2YWxpZCIsImFuYWx5c2VyIiwiaW5pdGlhbGlzZSIsIlBlbmRpbmdQcm9taXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidGhlbiIsInN0cmVhbSIsIk1lZGlhUmVjb3JkZXIiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjcmVhdGVBbmFseXNlciIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwid2luZG93Iiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJsYW5nIiwiY29udGludW91cyIsImludGVyaW1SZXN1bHRzIiwib25yZXN1bHQiLCJldmVudCIsImludGVyaW1UcmFuc2NyaXB0IiwiZmluYWxUcmFuc2NyaXB0IiwicmVzdWx0SW5kZXgiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaXNGaW5hbCIsInRyYW5zY3JpcHQiLCJzdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaXplIiwicHVzaCIsImNhdGNoIiwiZmluYWxseSIsInJlY29yZCIsInN0b3BTdHJlYW0iLCJnZXRUcmFja3MiLCJ0cmFjayIsInN0b3AiLCJlbmR0aW1lIiwiQmxvYiIsIm1pbWVUeXBlIiwib25GaW5pc2giLCJFeHRlbnNpb25SZW5kZXJlciIsInN0b3JlIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJtZXNzYWdlc0VuZCIsInNob3dCYWNrQXJyb3ciLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJzZXRUaW1lb3V0IiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwiTWVzc2FnZXMiLCJyZWYiLCJDaGF0SW5wdXQiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJTeXN0ZW1BbnN3ZXJpbmciLCJJY29uIiwiSUNPTlMiLCJzZXRNZXNzYWdlcyIsImxhc3QiLCJNZXNzYWdlIiwiTWVzc2FnZUFjdGlvbnMiLCJ0ZXh0IiwibWVzc2FnZVRva2VucyIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInBsYXlBdWRpbyIsImNhbGwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvcHlNZXNzYWdlIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiZGlzYWJsZWQiLCJhcHBseSIsIkF1ZGlvTWVzc2FnZSIsImNscyIsIlByb2ZpbGVJY29uIiwiTWVzc2FnZVRleHQiLCJBdWRpb1BsYXllciIsInNyYyIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsImFsdCIsIm9uRXJyb3IiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm9uQ2xpY2tXb3JkIiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiUGxheWFibGUiLCJDaGF0TWVzc2FnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2hhdE1lc3NhZ2VDb250ZXh0IiwidXNlQ29udGV4dCIsInRvdGFsVG9rZW5zIiwiYmxvY2tzIiwic3BsaXQiLCJmaWx0ZXIiLCJ0cmltIiwiaXNDb2RlIiwic3RhcnRzV2l0aCIsInBsYXlhYmxlQ29udGVudCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIkNoYXRTa2VsZXRvbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJfIiwiaXNXYWl0aW5nIiwidXNlQmFja0Fycm93Iiwic2V0U2hvd0JhY2tBcnJvdyIsImlzSW5Db250YWluZXIiLCJwYXJlbnROb2RlIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVuZFJlY3QiLCJ0aHJlc2hvbGQiLCJib3R0b20iLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ2hhdENvbnRleHQiLCJ1c2VDaGF0Q29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNldEF1dG9wbGF5IiwiaGFuZGxlQXV0b3BsYXlUb2dnbGUiLCJoYW5kbGVDaGF0U2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJJbnB1dCIsImxhYmVsIiwicmVxdWlyZWQiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlByb3ZpZGVyIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0Iiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0QXJlYVJlZiIsInNldFRleHQiLCJoYW5kbGVJbnB1dENoYW5nZSIsInJlcGxhY2VBbGwiLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5IiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwiZGlzYWJsZWRUZXh0YXJlYSIsInN5c3RlbSIsIlN5c3RlbU1vZGFsIiwiRm9ybSIsInJvd3MiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsInZhcmlhbnQiLCJwbGF5QWN0aW9uIiwiVUlGb3JtIiwiY2xvc2VNb2RhbCIsInNldFZhbHVlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiZGlhbG9nUmVmIiwib3Blbk1vZGFsIiwic2hvd01vZGFsIiwiY2xvc2UiLCJvbkNsb3NlIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJzZWNSZW5kZXJlZCIsIm1pbnV0ZXNSZW5kZXJlZCIsInVzZVRpbWVyIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy9pbnRlcmZhY2VzL21lc3NhZ2VzLnRzIiwid2lkZ2V0L3RzL3N0b3JlL2F1ZGlvLnRzIiwid2lkZ2V0L3RzL3N0b3JlL2luZGV4LnRzIiwid2lkZ2V0L3RzL3N0b3JlL3JlY29yZGVyLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2NoYXQvZXh0ZW5zaW9uLXJlbmRlcmVyLnRzeCIsIndpZGdldC90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9jaGF0L21lc3NhZ2VzL2Fuc3dlcmluZy50c3giLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9hdWRpby1tZXNzYWdlLnRzeCIsIndpZGdldC90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb250ZXh0LnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL3BsYXllci50c3giLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCJ3aWRnZXQvdHMvdmlld3MvY2hhdC91c2UtYmFjay1hcnJvdy50c3giLCJ3aWRnZXQvdHMvdmlld3MvY29udGV4dC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2lucHV0L3BsYXllci50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nLnRzeCIsIndpZGdldC90cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIndpZGdldC90cy92aWV3cy9ub3QtZm91bmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==