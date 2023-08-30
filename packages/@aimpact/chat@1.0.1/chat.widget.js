System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "dayjs@1.11.9", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat@1.0.1/extensions", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.36/toast", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/form", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context2) {
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
    }, function (_pragmateUi0036Icons) {
      dependency_15 = _pragmateUi0036Icons;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_16 = _beyondJsReact18Widgets101Hooks;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['dayjs', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/config', dependency_6], ['@aimpact/chat-sdk/voice', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/media-manager/uploader', dependency_9], ['@aimpact/chat-sdk/core', dependency_10], ['@aimpact/chat/wrapper', dependency_11], ['@aimpact/chat/extensions', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['pragmate-ui/icons', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/icons', dependency_17], ['pragmate-ui/toast', dependency_18], ['@aimpact/chat-sdk/widgets/playable', dependency_19], ['@aimpact/chat/shared/components', dependency_20], ['@aimpact/chat/shared/hooks', dependency_21], ['pragmate-ui/form', dependency_22], ['@aimpact/chat/ui/manager', dependency_23]]);
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
        hash: 905146304,
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
              console.log('response audio', response);
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
        hash: 3724302881,
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
                const onEnd = () => {
                  message.off('content.updated', onListen);
                  message.off('response.finished', onEnd);
                };
                message.on('content.updated', onListen);
                message.on('response.finished', onEnd);
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

      /**************************************
      INTERNAL MODULE: ./views/chat/BackArrow
      **************************************/

      ims.set('./views/chat/BackArrow', {
        hash: 4134944914,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BackArrow = BackArrow;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function BackArrow({
            store
          }) {
            const separator = _react.default.useRef(null);
            const icon = _react.default.useRef(null);
            (0, _hooks.useBinder)([store], () => globalThis.setTimeout(() => scrollToBottom(), 100), 'new.message');
            const scrollToBottom = () => separator.current?.scrollIntoView({
              block: 'end',
              behavior: 'smooth'
            });
            const isInContainer = () => {
              const container = separator.current?.parentNode;
              if (!container) return true;
              const containerRect = container.getBoundingClientRect();
              const endRect = separator.current.getBoundingClientRect();
              const threshold = 2;
              return endRect.bottom - threshold <= containerRect.bottom;
            };
            _react.default.useEffect(() => {
              const container = separator.current?.parentNode;
              if (!container) return;
              const handleScroll = () => {
                const visible = !isInContainer();
                if (visible) icon.current?.classList.add('show');else icon.current?.classList.remove('show');
              };
              container.addEventListener('scroll', handleScroll);
              return () => container.removeEventListener('scroll', handleScroll);
            }, []);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              ref: separator
            }), _react.default.createElement(_icons.IconButton, {
              ref: icon,
              icon: 'backArrow',
              className: 'scroll-bottom show circle',
              onClick: scrollToBottom
            }));
          }
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
        hash: 1717632544,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var React = require("react");
          var _context = require("../context");
          var _messages = require("./messages");
          var _header = require("../header");
          var _input = require("../input");
          var _extensionRenderer = require("./extension-renderer");
          var _BackArrow = require("./BackArrow");
          const {
            useRef
          } = React;
          /*bundle*/
          function Chat() {
            const {
              store
            } = (0, _context.useChatContext)();
            const chatIntro = store.extensions.get('chat-intro');
            return React.createElement("div", {
              className: 'chat-page__container'
            }, React.createElement(_header.Header, null), React.createElement("div", {
              className: 'chat__content'
            }, React.createElement(_extensionRenderer.ExtensionRenderer, {
              name: 'chat-intro'
            }), React.createElement(_messages.Messages, null), React.createElement(_BackArrow.BackArrow, {
              store: store
            })), !chatIntro?.metadata?.avoidChat && React.createElement(React.Fragment, null, React.createElement("div", {
              className: 'send'
            }, React.createElement(_input.ChatInput, {
              store: store
            }))));
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
        hash: 3188298063,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var React = require("react");
          var _text = require("./components/text");
          var _actions = require("./actions");
          var _profileIcon = require("./components/profile-icon");
          var _audioMessage = require("./audio-message");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../../context");
          function MessageComponent({
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
          const Message = React.memo(MessageComponent);
          exports.Message = Message;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNUCxLQUFLLEdBQUdhLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV6QyxPQUFPLENBQUNQLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQztVQUMvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVNUQsWUFBWTtZQUMzQixTQUFTd0UsVUFBVTtjQUNsQkMsa0JBQVMsQ0FBQ0MsV0FBVyxHQUFHLElBQUk7WUFDN0I7WUFFQSxJQUFJLENBQUN4UyxtQkFBVSxDQUFDbEcsS0FBSyxFQUFFLE9BQU9zTCxvQkFBQ3FOLHlCQUFhLE9BQUc7WUFDL0MsT0FDQ3JOO2NBQUt5QixTQUFTLEVBQUM7WUFBa0IsR0FDaEN6QjtjQUFLMkUsR0FBRyxFQUFDLHVCQUF1QjtjQUFDTyxHQUFHLEVBQUM7WUFBZ0IsRUFBRyxFQUN4RGxGO2NBQU15QixTQUFTLEVBQUM7WUFBcUIsR0FDcEN6QixvQkFBQ3NDLFdBQUk7Y0FBQ3BDLElBQUksRUFBRXFDLGFBQUssQ0FBQyxlQUFlLENBQUM7Y0FBRWQsU0FBUyxFQUFDO1lBQW1CLEVBQUcsRUFDcEV6QixpREFBdUIsRUFDdkJBLCtCQUNDQSx1RkFBaUUsT0FBQ0EsK0JBQU0scURBRXJFLEVBQ0pBLG9CQUFDc0ssWUFBTTtjQUFDcEssSUFBSSxFQUFDLE1BQU07Y0FBQ3dCLE9BQU8sRUFBRXdMLFVBQVU7Y0FBRWxGLEtBQUssRUFBQztZQUFnQixFQUFHLENBQzVELENBQ0Y7VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFuIiwiZXhwb3J0cyIsIk9iamVjdCIsInZhbHVlIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInJlY29yZGVyIiwidXBsb2FkZXIiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiaXNGZXRjaGluZyIsInRyaWdnZXJFdmVudCIsImZldGNoaW5nIiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwicmVhZHkiLCJVcGxvYWRlciIsInR5cGUiLCJwYXJhbXMiLCJjb250YWluZXIiLCJwcm9qZWN0IiwidXJsIiwiY29uZmlnIiwiQ0hBVF9BUElfU0VSVkVSIiwib24iLCJsb2FkZW5kIiwicHJvY2VzcyIsImNvbnNvbGUiLCJ3YXJuIiwiY3JlYXRlIiwic2VsZWN0b3IiLCJnbG9iYWxUaGlzIiwiY29yZG92YSIsImJsb2JUb0FycmF5QnVmZmVyIiwiYmxvYiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJhcnJheUJ1ZmZlciIsInRhcmdldCIsInJlc3VsdCIsIkFycmF5QnVmZmVyIiwib25lcnJvciIsInJlYWRBc0FycmF5QnVmZmVyIiwic2F2ZVJlY29yZGluZyIsInJlY29yZGluZyIsInRyYW5zY3JpcHRpb24iLCJjaGF0Iiwic2VuZEF1ZGlvIiwid2FpdGluZ1Jlc3BvbnNlIiwiZ2VuZXJhdGVJZCIsImJ1ZmZlciIsImhhc2hCdWZmZXIiLCJjcnlwdG8iLCJzdWJ0bGUiLCJkaWdlc3QiLCJoYXNoQXJyYXkiLCJBcnJheSIsImZyb20iLCJVaW50OEFycmF5IiwiaGFzaEhleCIsIm1hcCIsImIiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsInNhdmVBdWRpbyIsImF1ZGlvIiwiaWQiLCJudW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJlc3BvbnNlIiwicHVibGlzaFJlY29yZGluZyIsImxvZyIsInN0YXR1cyIsImRhdGEiLCJwcm9wZXJ0aWVzIiwicGF0aCIsImZpbGUiLCJvdXRwdXQiLCJ1c2FnZSIsInNvdXJjZSIsImNyZWF0ZWRBdCIsInVuaXgiLCJzYXZlSXRlbSIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInNlc3Npb25XcmFwcGVyIiwidXNlcklkIiwiRGF0ZSIsInNlbGVjdGVkS2IiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwic2V0QXVkaW9NZXNzYWdlIiwidXNlciIsImNoYXRJZCIsImNvbnRlbnQiLCJyb2xlIiwidGltZXN0YW1wIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlcyIsImNhdGVnb3J5IiwiQXBwV3JhcHBlciIsImNoYXRzIiwiaXRlbXMiLCJhdWRpb01hbmFnZXIiLCJrbm93bGVkZ2VCb3hlcyIsImticyIsImtiIiwic2VsZWN0ZWRNb2RlbCIsIm1vZGVsIiwibm90Rm91bmQiLCJzZWxlY3RlZEtiUGF0aCIsImZpbmQiLCJpIiwibWVzc2FnZSIsIk1hcCIsImV4dGVuc2lvbnMiLCJhdXRvcGxheSIsIkNoYXQiLCJjdXJyZW50Q2hhdCIsImZvdW5kIiwiaXNSZWFkeSIsImtub3dsZWRlQm94U2VsZWN0ZWQiLCJrbm93bGVkZ2VCb3hJZCIsImxvYWRBbGwiLCJleHRzIiwibWV0YWRhdGEiLCJwcm9taXNlcyIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNldCIsInNlbmRNZXNzYWdlIiwiaW5jbHVkZXMiLCJvbkxpc3RlbiIsIm9uRW5kIiwib2ZmIiwiRXZlbnRzIiwiY2h1bmtzIiwidmFsaWQiLCJhbmFseXNlciIsImluaXRpYWxpc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJzdHJlYW0iLCJNZWRpYVJlY29yZGVyIiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY3JlYXRlQW5hbHlzZXIiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsIndpbmRvdyIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uIiwibGFuZyIsImNvbnRpbnVvdXMiLCJpbnRlcmltUmVzdWx0cyIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsInJlc3VsdEluZGV4IiwicmVzdWx0cyIsImxlbmd0aCIsImlzRmluYWwiLCJ0cmFuc2NyaXB0Iiwic3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2l6ZSIsInB1c2giLCJjYXRjaCIsImZpbmFsbHkiLCJyZWNvcmQiLCJzdG9wU3RyZWFtIiwiZ2V0VHJhY2tzIiwidHJhY2siLCJzdG9wIiwiZW5kdGltZSIsIkJsb2IiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwiQmFja0Fycm93Iiwic3RvcmUiLCJzZXBhcmF0b3IiLCJSZWFjdCIsInVzZVJlZiIsImljb24iLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiaXNJbkNvbnRhaW5lciIsInBhcmVudE5vZGUiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZW5kUmVjdCIsInRocmVzaG9sZCIsImJvdHRvbSIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInZpc2libGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVmIiwiSWNvbkJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJFeHRlbnNpb25SZW5kZXJlciIsIkNvbXBvbmVudCIsImNvbnRyb2wiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hhdEludHJvIiwiSGVhZGVyIiwiTWVzc2FnZXMiLCJhdm9pZENoYXQiLCJDaGF0SW5wdXQiLCJTeXN0ZW1BbnN3ZXJpbmciLCJJY29uIiwiSUNPTlMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGFzdCIsIk1lc3NhZ2UiLCJrZXkiLCJNZXNzYWdlQWN0aW9ucyIsInRleHQiLCJtZXNzYWdlVG9rZW5zIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwicG9zaXRpb25Ub0N1dCIsInBsYXkiLCJvblBhdXNlIiwicGxheUF1ZGlvIiwiY2FsbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29weU1lc3NhZ2UiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkaXNhYmxlZCIsImFwcGx5IiwiQXVkaW9NZXNzYWdlIiwiY2xzIiwiUHJvZmlsZUljb24iLCJNZXNzYWdlVGV4dCIsIkF1ZGlvUGxheWVyIiwic3JjIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiYWx0Iiwib25FcnJvciIsInJlbW92ZUhpZ2hsaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwib25DbGlja1dvcmQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTWVzc2FnZUNvbXBvbmVudCIsInNldENvbnRlbnQiLCJ0b3RhbFRva2VucyIsImJsb2NrcyIsInNwbGl0IiwiZmlsdGVyIiwidHJpbSIsImlzQ29kZSIsInN0YXJ0c1dpdGgiLCJwbGF5YWJsZUNvbnRlbnQiLCJpdGVtIiwibWVtbyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIkNoYXRTa2VsZXRvbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJfIiwiQ2hhdENvbnRleHQiLCJ1c2VDaGF0Q29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNldEF1dG9wbGF5IiwiaGFuZGxlQXV0b3BsYXlUb2dnbGUiLCJoYW5kbGVDaGF0U2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJJbnB1dCIsImxhYmVsIiwicmVxdWlyZWQiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlByb3ZpZGVyIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiaXNXYWl0aW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0QXJlYVJlZiIsInNldFRleHQiLCJoYW5kbGVJbnB1dENoYW5nZSIsInJlcGxhY2VBbGwiLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5IiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwiZGlzYWJsZWRUZXh0YXJlYSIsInN5c3RlbSIsIlN5c3RlbU1vZGFsIiwiRm9ybSIsInJvd3MiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsInZhcmlhbnQiLCJwbGF5QWN0aW9uIiwiVUlGb3JtIiwiY2xvc2VNb2RhbCIsInNldFZhbHVlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwic2hvd01vZGFsIiwiY2xvc2UiLCJtb2RlIiwib25DbG9zZSIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwic2VjUmVuZGVyZWQiLCJtaW51dGVzUmVuZGVyZWQiLCJ1c2VUaW1lciIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiUHJlbG9hZFNjcmVlbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL2ludGVyZmFjZXMvbWVzc2FnZXMudHMiLCJ0cy9zdG9yZS9hdWRpby50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvc3RvcmUvcmVjb3JkZXIudHMiLCJ0cy92aWV3cy9jaGF0L0JhY2tBcnJvdy50c3giLCJ0cy92aWV3cy9jaGF0L2V4dGVuc2lvbi1yZW5kZXJlci50c3giLCJ0cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvYW5zd2VyaW5nLnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2F1ZGlvLW1lc3NhZ2UudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbnRleHQudHMiLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL3BsYXllci50c3giLCJ0cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsInRzL3ZpZXdzL2NvbnRleHQudHN4IiwidHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwidHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsInRzL3ZpZXdzL2lucHV0L3JlY29yZGluZy50c3giLCJ0cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCJ0cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsInRzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19