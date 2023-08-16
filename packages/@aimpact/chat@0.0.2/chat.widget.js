System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "dayjs@1.11.9", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@0.0.1/voice", "@aimpact/chat-sdk@0.0.1/session", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/chat-sdk@0.0.1/core", "@aimpact/chat@0.0.2/wrapper", "@aimpact/chat@0.0.2/extensions", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/icons", "@aimpact/chat@0.0.2/shared/icons", "pragmate-ui@0.0.36/toast", "@aimpact/chat-sdk@0.0.1/widgets/playable", "@aimpact/chat@0.0.2/shared/components", "@aimpact/chat@0.0.2/shared/hooks", "pragmate-ui@0.0.36/form", "@aimpact/chat@0.0.2/ui/manager"], function (_export, _context2) {
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
    }, function (_beyondJsReactive114Model) {
      dependency_5 = _beyondJsReactive114Model;
    }, function (_aimpactAilearnApp100Config) {
      dependency_6 = _aimpactAilearnApp100Config;
    }, function (_aimpactChatSdk001Voice) {
      dependency_7 = _aimpactChatSdk001Voice;
    }, function (_aimpactChatSdk001Session) {
      dependency_8 = _aimpactChatSdk001Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_9 = _aimpactMediaManager100Uploader;
    }, function (_aimpactChatSdk001Core) {
      dependency_10 = _aimpactChatSdk001Core;
    }, function (_aimpactChat002Wrapper) {
      dependency_11 = _aimpactChat002Wrapper;
    }, function (_aimpactChat002Extensions) {
      dependency_12 = _aimpactChat002Extensions;
    }, function (_beyondJsKernel019Core) {
      dependency_13 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_14 = _react2;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_15 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Icons) {
      dependency_16 = _pragmateUi0036Icons;
    }, function (_aimpactChat002SharedIcons) {
      dependency_17 = _aimpactChat002SharedIcons;
    }, function (_pragmateUi0036Toast) {
      dependency_18 = _pragmateUi0036Toast;
    }, function (_aimpactChatSdk001WidgetsPlayable) {
      dependency_19 = _aimpactChatSdk001WidgetsPlayable;
    }, function (_aimpactChat002SharedComponents) {
      dependency_20 = _aimpactChat002SharedComponents;
    }, function (_aimpactChat002SharedHooks) {
      dependency_21 = _aimpactChat002SharedHooks;
    }, function (_pragmateUi0036Form) {
      dependency_22 = _pragmateUi0036Form;
    }, function (_aimpactChat002UiManager) {
      dependency_23 = _aimpactChat002UiManager;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "0.0.2"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['dayjs', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/config', dependency_6], ['@aimpact/chat-sdk/voice', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/media-manager/uploader', dependency_9], ['@aimpact/chat-sdk/core', dependency_10], ['@aimpact/chat/wrapper', dependency_11], ['@aimpact/chat/extensions', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['pragmate-ui/icons', dependency_16], ['@aimpact/chat/shared/icons', dependency_17], ['pragmate-ui/toast', dependency_18], ['@aimpact/chat-sdk/widgets/playable', dependency_19], ['@aimpact/chat/shared/components', dependency_20], ['@aimpact/chat/shared/hooks', dependency_21], ['pragmate-ui/form', dependency_22], ['@aimpact/chat/ui/manager', dependency_23]]);
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
        hash: 3709462409,
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
              console.log(30, message.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFuIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfZGF5anMiLCJfbW9kZWwiLCJfY29uZmlnIiwiX3ZvaWNlIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJ1cGxvYWRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiZmV0Y2hpbmciLCJpc0ZldGNoaW5nIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwicmVhZHkiLCJVcGxvYWRlciIsInR5cGUiLCJwYXJhbXMiLCJjb250YWluZXIiLCJwcm9qZWN0IiwidXJsIiwiZGVmYXVsdCIsIkNIQVRfQVBJX1NFUlZFUiIsIm9uIiwibG9hZGVuZCIsInByb2Nlc3MiLCJjb25zb2xlIiwid2FybiIsImNyZWF0ZSIsInNlbGVjdG9yIiwiZ2xvYmFsVGhpcyIsImNvcmRvdmEiLCJibG9iVG9BcnJheUJ1ZmZlciIsImJsb2IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwiYXJyYXlCdWZmZXIiLCJ0YXJnZXQiLCJyZXN1bHQiLCJBcnJheUJ1ZmZlciIsIm9uZXJyb3IiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInNhdmVSZWNvcmRpbmciLCJyZWNvcmRpbmciLCJ0cmFuc2NyaXB0aW9uIiwiY2hhdCIsInNlbmRBdWRpbyIsIndhaXRpbmdSZXNwb25zZSIsImdlbmVyYXRlSWQiLCJidWZmZXIiLCJoYXNoQnVmZmVyIiwiY3J5cHRvIiwic3VidGxlIiwiZGlnZXN0IiwiaGFzaEFycmF5IiwiQXJyYXkiLCJmcm9tIiwiVWludDhBcnJheSIsImhhc2hIZXgiLCJtYXAiLCJiIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImpvaW4iLCJzYXZlQXVkaW8iLCJhdWRpbyIsImlkIiwibnVtYmVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXNwb25zZSIsInB1Ymxpc2hSZWNvcmRpbmciLCJzdGF0dXMiLCJkYXRhIiwicHJvcGVydGllcyIsInBhdGgiLCJmaWxlIiwib3V0cHV0IiwidXNhZ2UiLCJzb3VyY2UiLCJjcmVhdGVkQXQiLCJ1bml4Iiwic2F2ZUl0ZW0iLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXJJZCIsIkRhdGUiLCJzZWxlY3RlZEtiIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsInNldEF1ZGlvTWVzc2FnZSIsInVzZXIiLCJjaGF0SWQiLCJjb250ZW50Iiwicm9sZSIsInRpbWVzdGFtcCIsImN1cnJlbnRNZXNzYWdlIiwiX2NvcmUiLCJfd3JhcHBlciIsIl9hdWRpbyIsIl9leHRlbnNpb25zIiwibWVzc2FnZXMiLCJFWFRFTlNJT05TIiwiY2F0ZWdvcnkiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJpdGVtcyIsImF1ZGlvTWFuYWdlciIsImticyIsImtub3dsZWRnZUJveGVzIiwia2IiLCJzZWxlY3RlZE1vZGVsIiwibW9kZWwiLCJub3RGb3VuZCIsInNlbGVjdGVkS2JQYXRoIiwiZmluZCIsImkiLCJtZXNzYWdlIiwiZXh0ZW5zaW9ucyIsIk1hcCIsImF1dG9wbGF5IiwiQ2hhdCIsImZvdW5kIiwiaXNSZWFkeSIsImtub3dsZWRlQm94U2VsZWN0ZWQiLCJrbm93bGVkZ2VCb3hJZCIsImxvYWRBbGwiLCJsb2ciLCJtZXRhZGF0YSIsImV4dHMiLCJmb3JFYWNoIiwiaXRlbSIsImtleSIsInNldCIsInNlbmRNZXNzYWdlIiwiaW5jbHVkZXMiLCJiYWNrZW5kUmVzcG9uc2UiLCJnZXRNZXNzYWdlIiwiRXZlbnRzIiwiaW5pdGlhbGlzZWQiLCJzdHJlYW0iLCJzdGFydFRpbWUiLCJpbml0UHJvbWlzZSIsInN0b3BQcm9taXNlIiwiYXVkaW9Db250ZXh0IiwicmVjb3JkaW5nUHJvbWlzZSIsIm1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJ2YWxpZCIsImFuYWx5c2VyIiwic3BlZWNoUmVjb2duaXRpb24iLCJwcm9taXNlU3BlZWNoIiwiaW5pdGlhbGlzZSIsIlBlbmRpbmdQcm9taXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidGhlbiIsIk1lZGlhUmVjb3JkZXIiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjcmVhdGVBbmFseXNlciIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwid2luZG93Iiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJsYW5nIiwiY29udGludW91cyIsImludGVyaW1SZXN1bHRzIiwib25yZXN1bHQiLCJldmVudCIsImludGVyaW1UcmFuc2NyaXB0IiwiZmluYWxUcmFuc2NyaXB0IiwicmVzdWx0SW5kZXgiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaXNGaW5hbCIsInRyYW5zY3JpcHQiLCJzdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaXplIiwicHVzaCIsImNhdGNoIiwiZmluYWxseSIsInJlY29yZCIsInN0b3BTdHJlYW0iLCJnZXRUcmFja3MiLCJ0cmFjayIsInN0b3AiLCJlbmR0aW1lIiwiQmxvYiIsIm1pbWVUeXBlIiwib25GaW5pc2giLCJSZWFjdCIsIl9jb250ZXh0IiwiRXh0ZW5zaW9uUmVuZGVyZXIiLCJ1c2VDaGF0Q29udGV4dCIsIkNvbXBvbmVudCIsImNyZWF0ZUVsZW1lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiX2hvb2tzIiwiX2ljb25zIiwiX21lc3NhZ2VzIiwiX2hlYWRlciIsIl9pbnB1dCIsIl91c2VCYWNrQXJyb3ciLCJfZXh0ZW5zaW9uUmVuZGVyZXIiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIm1lc3NhZ2VzRW5kIiwic2hvd0JhY2tBcnJvdyIsInVzZUJhY2tBcnJvdyIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJNZXNzYWdlcyIsInJlZiIsIkNoYXRJbnB1dCIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIl9yZWFjdCIsIl9pY29uczIiLCJTeXN0ZW1BbnN3ZXJpbmciLCJJY29uIiwiSUNPTlMiLCJfYW5zd2VyaW5nIiwiX21lc3NhZ2UiLCJzZXRNZXNzYWdlcyIsImxhc3QiLCJNZXNzYWdlIiwiRnJhZ21lbnQiLCJfdG9hc3QiLCJNZXNzYWdlQWN0aW9ucyIsInRleHQiLCJtZXNzYWdlVG9rZW5zIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwicG9zaXRpb25Ub0N1dCIsInBsYXkiLCJvblBhdXNlIiwicGxheUF1ZGlvIiwiY2FsbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29weU1lc3NhZ2UiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkaXNhYmxlZCIsImFwcGx5IiwiX3BsYXllciIsIl90ZXh0IiwiX3Byb2ZpbGVJY29uIiwiQXVkaW9NZXNzYWdlIiwiY2xzIiwiUHJvZmlsZUljb24iLCJNZXNzYWdlVGV4dCIsIkF1ZGlvUGxheWVyIiwic3JjIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiYWx0Iiwib25FcnJvciIsIl9wbGF5YWJsZSIsInJlbW92ZUhpZ2hsaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib25DbGlja1dvcmQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FjdGlvbnMiLCJfYXVkaW9NZXNzYWdlIiwidG90YWxUb2tlbnMiLCJibG9ja3MiLCJzcGxpdCIsImZpbHRlciIsInRyaW0iLCJpc0NvZGUiLCJzdGFydHNXaXRoIiwicGxheWFibGVDb250ZW50IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX2NvbXBvbmVudHMiLCJDaGF0U2tlbGV0b24iLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiXyIsImlzV2FpdGluZyIsInNldFNob3dCYWNrQXJyb3ciLCJpc0luQ29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbmRSZWN0IiwidGhyZXNob2xkIiwiYm90dG9tIiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNoYXRDb250ZXh0Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2V0QXV0b3BsYXkiLCJoYW5kbGVBdXRvcGxheVRvZ2dsZSIsImhhbmRsZUNoYXRTZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsIklucHV0IiwibGFiZWwiLCJyZXF1aXJlZCIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX3JlY29yZGluZyIsIl9pbmRleCIsInNldFJlY29yZGluZyIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwidGV4dEFyZWFSZWYiLCJzZXRUZXh0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJyZXBsYWNlQWxsIiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJoYW5kbGVLZXlEb3duIiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsImhhbmRsZVNlbmQiLCJvblN1Ym1pdCIsImRpc2FibGVkVGV4dGFyZWEiLCJzeXN0ZW0iLCJjb25maWciLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJyb3dzIiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiX3RpbWVyIiwiUGxheWVyIiwiY2FuY2VsIiwiVGltZXIiLCJ2YXJpYW50IiwicGxheUFjdGlvbiIsIlVJRm9ybSIsImNsb3NlTW9kYWwiLCJzZXRWYWx1ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0QXJlYVZhbHVlIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJwdWJsaXNoIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIl9mb3JtMiIsImRpYWxvZ1JlZiIsIm9wZW5Nb2RhbCIsInNob3dNb2RhbCIsImNsb3NlIiwib25DbG9zZSIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwiX21hbmFnZXIiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL21lc3NhZ2VzLnRzIiwiL3dpZGdldC90cy9zdG9yZS9hdWRpby50cyIsIi93aWRnZXQvdHMvc3RvcmUvaW5kZXgudHMiLCIvd2lkZ2V0L3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3dpZGdldC90cy92aWV3cy9jaGF0L2V4dGVuc2lvbi1yZW5kZXJlci50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9jaGF0L21lc3NhZ2VzL2Fuc3dlcmluZy50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9hdWRpby1tZXNzYWdlLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvdGV4dC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb250ZXh0LnRzIiwiL3dpZGdldC90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvcGxheWVyLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2NoYXQvdXNlLWJhY2stYXJyb3cudHN4IiwiL3dpZGdldC90cy92aWV3cy9jb250ZXh0LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4IiwiL3dpZGdldC90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcudHN4IiwiL3dpZGdldC90cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi93aWRnZXQvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FB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