System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "dayjs@1.11.9", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat@1.0.1/extensions", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.36/toast", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/form", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context2) {
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
    }, function (_beyondJsReactive112Model) {
      dependency_5 = _beyondJsReactive112Model;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.2"], ["uuid", "9.0.0"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFuIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfZGF5anMiLCJfbW9kZWwiLCJfY29uZmlnIiwiX3ZvaWNlIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJ1cGxvYWRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiZmV0Y2hpbmciLCJpc0ZldGNoaW5nIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwicmVhZHkiLCJVcGxvYWRlciIsInR5cGUiLCJwYXJhbXMiLCJjb250YWluZXIiLCJwcm9qZWN0IiwidXJsIiwiZGVmYXVsdCIsIkNIQVRfQVBJX1NFUlZFUiIsIm9uIiwibG9hZGVuZCIsInByb2Nlc3MiLCJjb25zb2xlIiwid2FybiIsImNyZWF0ZSIsInNlbGVjdG9yIiwiZ2xvYmFsVGhpcyIsImNvcmRvdmEiLCJibG9iVG9BcnJheUJ1ZmZlciIsImJsb2IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwiYXJyYXlCdWZmZXIiLCJ0YXJnZXQiLCJyZXN1bHQiLCJBcnJheUJ1ZmZlciIsIm9uZXJyb3IiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInNhdmVSZWNvcmRpbmciLCJyZWNvcmRpbmciLCJ0cmFuc2NyaXB0aW9uIiwiY2hhdCIsInNlbmRBdWRpbyIsIndhaXRpbmdSZXNwb25zZSIsImdlbmVyYXRlSWQiLCJidWZmZXIiLCJoYXNoQnVmZmVyIiwiY3J5cHRvIiwic3VidGxlIiwiZGlnZXN0IiwiaGFzaEFycmF5IiwiQXJyYXkiLCJmcm9tIiwiVWludDhBcnJheSIsImhhc2hIZXgiLCJtYXAiLCJiIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImpvaW4iLCJzYXZlQXVkaW8iLCJhdWRpbyIsImlkIiwibnVtYmVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXNwb25zZSIsInB1Ymxpc2hSZWNvcmRpbmciLCJzdGF0dXMiLCJkYXRhIiwicHJvcGVydGllcyIsInBhdGgiLCJmaWxlIiwib3V0cHV0IiwidXNhZ2UiLCJzb3VyY2UiLCJjcmVhdGVkQXQiLCJ1bml4Iiwic2F2ZUl0ZW0iLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXJJZCIsIkRhdGUiLCJzZWxlY3RlZEtiIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsInNldEF1ZGlvTWVzc2FnZSIsInVzZXIiLCJjaGF0SWQiLCJjb250ZW50Iiwicm9sZSIsInRpbWVzdGFtcCIsImN1cnJlbnRNZXNzYWdlIiwiX2NvcmUiLCJfd3JhcHBlciIsIl9hdWRpbyIsIl9leHRlbnNpb25zIiwibWVzc2FnZXMiLCJFWFRFTlNJT05TIiwiY2F0ZWdvcnkiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJpdGVtcyIsImF1ZGlvTWFuYWdlciIsImticyIsImtub3dsZWRnZUJveGVzIiwia2IiLCJzZWxlY3RlZE1vZGVsIiwibW9kZWwiLCJub3RGb3VuZCIsInNlbGVjdGVkS2JQYXRoIiwiZmluZCIsImkiLCJtZXNzYWdlIiwiZXh0ZW5zaW9ucyIsIk1hcCIsImF1dG9wbGF5IiwiQ2hhdCIsImZvdW5kIiwiaXNSZWFkeSIsImtub3dsZWRlQm94U2VsZWN0ZWQiLCJrbm93bGVkZ2VCb3hJZCIsImxvYWRBbGwiLCJleHRzIiwibWV0YWRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsImtleSIsInNldCIsInNlbmRNZXNzYWdlIiwiaW5jbHVkZXMiLCJiYWNrZW5kUmVzcG9uc2UiLCJnZXRNZXNzYWdlIiwiRXZlbnRzIiwiaW5pdGlhbGlzZWQiLCJzdHJlYW0iLCJzdGFydFRpbWUiLCJpbml0UHJvbWlzZSIsInN0b3BQcm9taXNlIiwiYXVkaW9Db250ZXh0IiwicmVjb3JkaW5nUHJvbWlzZSIsIm1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJ2YWxpZCIsImFuYWx5c2VyIiwic3BlZWNoUmVjb2duaXRpb24iLCJwcm9taXNlU3BlZWNoIiwiaW5pdGlhbGlzZSIsIlBlbmRpbmdQcm9taXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidGhlbiIsIk1lZGlhUmVjb3JkZXIiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjcmVhdGVBbmFseXNlciIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwid2luZG93Iiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJsYW5nIiwiY29udGludW91cyIsImludGVyaW1SZXN1bHRzIiwib25yZXN1bHQiLCJldmVudCIsImludGVyaW1UcmFuc2NyaXB0IiwiZmluYWxUcmFuc2NyaXB0IiwicmVzdWx0SW5kZXgiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaXNGaW5hbCIsInRyYW5zY3JpcHQiLCJzdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaXplIiwicHVzaCIsImNhdGNoIiwiZmluYWxseSIsInJlY29yZCIsInN0b3BTdHJlYW0iLCJnZXRUcmFja3MiLCJ0cmFjayIsInN0b3AiLCJlbmR0aW1lIiwiQmxvYiIsIm1pbWVUeXBlIiwib25GaW5pc2giLCJSZWFjdCIsIl9jb250ZXh0IiwiRXh0ZW5zaW9uUmVuZGVyZXIiLCJ1c2VDaGF0Q29udGV4dCIsIkNvbXBvbmVudCIsImNyZWF0ZUVsZW1lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiX2hvb2tzIiwiX2ljb25zIiwiX21lc3NhZ2VzIiwiX2hlYWRlciIsIl9pbnB1dCIsIl91c2VCYWNrQXJyb3ciLCJfZXh0ZW5zaW9uUmVuZGVyZXIiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIm1lc3NhZ2VzRW5kIiwic2hvd0JhY2tBcnJvdyIsInVzZUJhY2tBcnJvdyIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJNZXNzYWdlcyIsInJlZiIsIkNoYXRJbnB1dCIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIl9yZWFjdCIsIl9pY29uczIiLCJTeXN0ZW1BbnN3ZXJpbmciLCJJY29uIiwiSUNPTlMiLCJfYW5zd2VyaW5nIiwiX21lc3NhZ2UiLCJzZXRNZXNzYWdlcyIsImxhc3QiLCJNZXNzYWdlIiwiRnJhZ21lbnQiLCJfdG9hc3QiLCJNZXNzYWdlQWN0aW9ucyIsInRleHQiLCJtZXNzYWdlVG9rZW5zIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwicG9zaXRpb25Ub0N1dCIsInBsYXkiLCJvblBhdXNlIiwicGxheUF1ZGlvIiwiY2FsbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29weU1lc3NhZ2UiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkaXNhYmxlZCIsImFwcGx5IiwiX3BsYXllciIsIl90ZXh0IiwiX3Byb2ZpbGVJY29uIiwiQXVkaW9NZXNzYWdlIiwiY2xzIiwiUHJvZmlsZUljb24iLCJNZXNzYWdlVGV4dCIsIkF1ZGlvUGxheWVyIiwic3JjIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiYWx0Iiwib25FcnJvciIsIl9wbGF5YWJsZSIsInJlbW92ZUhpZ2hsaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib25DbGlja1dvcmQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FjdGlvbnMiLCJfYXVkaW9NZXNzYWdlIiwidG90YWxUb2tlbnMiLCJibG9ja3MiLCJzcGxpdCIsImZpbHRlciIsInRyaW0iLCJpc0NvZGUiLCJzdGFydHNXaXRoIiwicGxheWFibGVDb250ZW50IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX2NvbXBvbmVudHMiLCJDaGF0U2tlbGV0b24iLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiXyIsImlzV2FpdGluZyIsInNldFNob3dCYWNrQXJyb3ciLCJpc0luQ29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbmRSZWN0IiwidGhyZXNob2xkIiwiYm90dG9tIiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNoYXRDb250ZXh0Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2V0QXV0b3BsYXkiLCJoYW5kbGVBdXRvcGxheVRvZ2dsZSIsImhhbmRsZUNoYXRTZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsIklucHV0IiwibGFiZWwiLCJyZXF1aXJlZCIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX3JlY29yZGluZyIsIl9pbmRleCIsInNldFJlY29yZGluZyIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwidGV4dEFyZWFSZWYiLCJzZXRUZXh0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJyZXBsYWNlQWxsIiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJoYW5kbGVLZXlEb3duIiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsImhhbmRsZVNlbmQiLCJvblN1Ym1pdCIsImRpc2FibGVkVGV4dGFyZWEiLCJzeXN0ZW0iLCJjb25maWciLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJyb3dzIiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiX3RpbWVyIiwiUGxheWVyIiwiY2FuY2VsIiwiVGltZXIiLCJ2YXJpYW50IiwicGxheUFjdGlvbiIsIlVJRm9ybSIsImNsb3NlTW9kYWwiLCJzZXRWYWx1ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0QXJlYVZhbHVlIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJwdWJsaXNoIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIl9mb3JtMiIsImRpYWxvZ1JlZiIsIm9wZW5Nb2RhbCIsInNob3dNb2RhbCIsImNsb3NlIiwib25DbG9zZSIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwiX21hbmFnZXIiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL21lc3NhZ2VzLnRzIiwiL3dpZGdldC90cy9zdG9yZS9hdWRpby50cyIsIi93aWRnZXQvdHMvc3RvcmUvaW5kZXgudHMiLCIvd2lkZ2V0L3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3dpZGdldC90cy92aWV3cy9jaGF0L2V4dGVuc2lvbi1yZW5kZXJlci50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9jaGF0L21lc3NhZ2VzL2Fuc3dlcmluZy50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9hdWRpby1tZXNzYWdlLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvdGV4dC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb250ZXh0LnRzIiwiL3dpZGdldC90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvcGxheWVyLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2NoYXQvdXNlLWJhY2stYXJyb3cudHN4IiwiL3dpZGdldC90cy92aWV3cy9jb250ZXh0LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4IiwiL3dpZGdldC90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcudHN4IiwiL3dpZGdldC90cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi93aWRnZXQvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FB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