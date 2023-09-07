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
        hash: 72366990,
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
            #bearer;
            bearer(bearer) {
              if (bearer) this.#bearer = bearer;
              return this;
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
        hash: 3807944960,
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
                performance.mark('start');
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
                  this.triggerEvent('chat.available');
                  this.triggerEvent(`message.${response.id}.received`);
                  message.off('response.finished', onEnd);
                };
                message.on('content.updated', onListen);
                message.on('response.finished', onEnd);
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
        hash: 645243016,
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
            store,
            separator
          }) {
            const icon = _react.default.useRef(null);
            (0, _hooks.useBinder)([store], () => globalThis.setTimeout(() => scrollToBottom(), 100), 'new.message');
            const scrollToBottom = () => {
              separator.current?.scrollIntoView({
                block: 'end',
                behavior: 'smooth'
              });
            };
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.IconButton, {
              ref: icon,
              icon: 'backArrow',
              variant: 'tertiary',
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
        hash: 3651995299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ExtensionRenderer = ExtensionRenderer;
          var _react = require("react");
          var _context = require("../context");
          // import { extensions } from '@aimpact/chat/extensions';

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
            return _react.default.createElement(Component, {
              metadata: JSON.stringify(chat.metadata)
            });
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/chat/index
      **********************************/

      ims.set('./views/chat/index', {
        hash: 3244869036,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _context = require("../context");
          var _messages = require("./messages");
          var _header = require("../header");
          var _input = require("../input");
          var _extensionRenderer = require("./extension-renderer");
          var _BackArrow = require("./BackArrow");
          const {
            useRef
          } = _react.default;
          /*bundle*/
          function Chat() {
            const {
              store
            } = (0, _context.useChatContext)();
            const chatIntro = store.extensions.get('chat-intro');
            const separator = _react.default.useRef(null);
            return _react.default.createElement("div", {
              className: 'chat-page__container'
            }, _react.default.createElement(_header.Header, null), _react.default.createElement("div", {
              className: 'chat__content'
            }, _react.default.createElement(_extensionRenderer.ExtensionRenderer, {
              name: 'chat-intro'
            }), _react.default.createElement(_messages.Messages, {
              separator: separator
            }), _react.default.createElement("div", {
              ref: separator,
              className: 'separator'
            })), _react.default.createElement(_BackArrow.BackArrow, {
              store: store,
              separator: separator
            }), !chatIntro?.metadata?.avoidChat && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: 'send'
            }, _react.default.createElement(_input.ChatInput, {
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
        hash: 3564673182,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = Messages;
          var _react = require("react");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _answering = require("./answering");
          var _message = require("./message");
          function Messages({
            separator
          }) {
            const {
              store
            } = (0, _context.useChatContext)();
            const [messages, setMessages] = _react.default.useState(store.messages ?? []);
            (0, _hooks.useBinder)([store], () => {
              setMessages([...store.messages]);
            }, 'new.message');
            const output = messages.map((message, i) => {
              const last = i === messages.length - 1;
              return _react.default.createElement(_message.Message, {
                key: `message-${i}`,
                separator: separator,
                message: message,
                last: last
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, output, store.waitingResponse && _react.default.createElement(_answering.SystemAnswering, null));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./views/chat/messages/message/actions/index
      ***********************************************************/

      ims.set('./views/chat/messages/message/actions/index', {
        hash: 350116046,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageActions = MessageActions;
          var _react = require("react");
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
            const [action, setAction] = _react.default.useState('stop');
            const [processing, setProcessing] = _react.default.useState(false);
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
            const copyMessage = async () => {
              await globalThis?.navigator.clipboard.writeText(text);
              _toast.toast.success('Message copied to clipboard');
            };
            const disabled = {
              disabled: true
            };
            const apply = store.currentMessage?.id === message?.id && processing;
            const icon = apply || action === 'play' ? 'stop' : 'play';
            const onClick = apply || action === 'play' ? onPause : onPlay;
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: 'audio__actions'
            }, _react.default.createElement(_icons.Icon, {
              onClick: copyMessage,
              icon: 'copy'
            }), _react.default.createElement(_icons.Icon, {
              onClick: onClick,
              "data-listen": 'api',
              icon: icon
            })), messageTokens && _react.default.createElement("div", {
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
        hash: 3101891047,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _context = require("../../../../context");
          function MessageText({
            message,
            playable
          }) {
            const {
              store,
              autoplay,
              player
            } = (0, _context.useChatContext)();
            const text = message?.content ?? '';
            const ref = _react.default.useRef(null);
            const removeHighlight = () => ref.current.querySelectorAll('.highlight').forEach(element => element.classList.remove('highlight'));
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const onClickWord = event => store.currentMessage = message;
            const canBePlayed = message && message.role !== 'user' && autoplay;
            const autoplayValue = message.id === store.currentMessage?.id && canBePlayed;
            //<div onClick={onClick} dangerouslySetInnerHTML={{ __html: content }} />
            return _react.default.createElement("div", {
              className: 'message-text__container',
              ref: ref
            }, _react.default.createElement(_playable.Playable, {
              content: text,
              playable: playable,
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
        hash: 4149788362,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatMessageContext = exports.ChatMessageContext = void 0;
          var _react = require("react");
          const ChatMessageContext = _react.default.createContext({});
          exports.ChatMessageContext = ChatMessageContext;
          const useChatMessageContext = () => _react.default.useContext(ChatMessageContext);
          exports.useChatMessageContext = useChatMessageContext;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/chat/messages/message/index
      ***************************************************/

      ims.set('./views/chat/messages/message/index', {
        hash: 719737530,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _react = require("react");
          var _text = require("./components/text");
          var _actions = require("./actions");
          var _profileIcon = require("./components/profile-icon");
          var _audioMessage = require("./audio-message");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../../context");
          function MessageComponent({
            separator,
            message,
            last
          }) {
            const [content, setContent] = _react.default.useState(message?.content ?? '');
            /**
             * this state is only used for responses
             */
            const [finished, setFinished] = _react.default.useState(true);
            const cls = `message ${message.role}`;
            const messageTokens = message.role === 'system' ? message.usage?.totalTokens : null;
            const {
              store
            } = (0, _context.useChatContext)();
            const scrollToBottom = () => {
              separator.current?.scrollIntoView({
                block: 'end',
                behavior: 'smooth'
              });
            };
            (0, _hooks.useBinder)([store], () => {
              setFinished(false);
              setContent(message.content);
              scrollToBottom();
            }, `message.${message.id}.updated`);
            (0, _hooks.useBinder)([store], () => setFinished(true), `message.${message.id}.received`);
            const blocks = _react.default.useMemo(() => {
              return content.split(/(```[\s\S]*?```)/).filter(block => block.trim() !== '').map(block => ({
                content: block,
                isCode: block.startsWith('```')
              }));
            }, [finished]);
            const playableContent = _react.default.useMemo(() => {
              return blocks.filter(item => !item.isCode).map(item => item.content).join(' ');
            }, [finished]);
            if (message.type === 'audio') return _react.default.createElement(_audioMessage.AudioMessage, {
              message: message,
              last: last
            });
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
              playable: finished,
              message: message
            })), _react.default.createElement("section", {
              className: 'message__actions'
            }, _react.default.createElement(_actions.MessageActions, {
              message: message,
              text: playableContent,
              messageTokens: messageTokens
            })));
          }
          const Message = _react.default.memo(MessageComponent);
          exports.Message = Message;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/chat/messages/message/player
      ****************************************************/

      ims.set('./views/chat/messages/message/player', {
        hash: 2781382207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          /* bundle */ // audio_player.tsx

          function AudioPlayer({
            src
          }) {
            if (!src) {
              console.warn('not audio to process');
              return null;
            }
            src = URL.createObjectURL(src);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
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
            return _react.default.createElement("div", {
              className: 'audio-player'
            }, _react.default.createElement("audio", {
              controls: true,
              preload: 'metadata'
            }, _react.default.createElement("source", {
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
        hash: 375502923,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatContext = exports.ChatContext = void 0;
          var _react = require("react");
          const ChatContext = _react.default.createContext({});
          exports.ChatContext = ChatContext;
          const useChatContext = () => _react.default.useContext(ChatContext);
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
        hash: 2611045387,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
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
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
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
            return _react.default.createElement(_context.ChatContext.Provider, {
              value: contextValue
            }, _react.default.createElement(View, null));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/input/context
      *************************************/

      ims.set('./views/input/context', {
        hash: 3718414881,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInputContext = exports.InputContext = void 0;
          var _react = require("react");
          const InputContext = _react.default.createContext(null);
          exports.InputContext = InputContext;
          const useInputContext = () => _react.default.useContext(InputContext);
          exports.useInputContext = useInputContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/input/index
      ***********************************/

      ims.set('./views/input/index', {
        hash: 3210738836,
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
              if (['undefined', undefined].includes(text.replaceAll('\n', ''))) return;
            }, [text]);
            (0, _hooks.useBinder)([store], () => {
              globalThis.setTimeout(() => textAreaRef.current.focus(), 300);
              setFetching(false);
            }, 'chat.available');
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
              store.sendMessage(text);
            };
            const onSubmit = !!text.length ? handleSend : sendAudio;
            if (['', undefined, null].includes(text.replaceAll('\n', '')) || !text.trim().length) disabled.disabled = true;
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
        hash: 964401253,
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
        hash: 3046002732,
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
              className: 'timer__container'
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

      /*********************************
      INTERNAL MODULE: ./views/not-found
      *********************************/

      ims.set('./views/not-found', {
        hash: 911263463,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatNotFound = ChatNotFound;
          var _react = require("react");
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
            if (!_wrapper.AppWrapper.ready) return _react.default.createElement(_components.PreloadScreen, null);
            return _react.default.createElement("div", {
              className: 'not__found_chat '
            }, _react.default.createElement("img", {
              src: '/assets/not-found.png',
              alt: 'Chat not found'
            }), _react.default.createElement("span", {
              className: 'not__found__details'
            }, _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'not-found__ailogo'
            }), _react.default.createElement("h2", null, "Chat not found"), _react.default.createElement("p", null, _react.default.createElement("strong", null, "We couldn't find a chat associated with that ID."), " ", _react.default.createElement("br", null), "Please enter URL correctly or create a new chat."), _react.default.createElement(_form.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssR0FBR2EsSUFBSSxDQUFDQyxLQUFLLENBQUNQLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sQ0FBQ1AsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDO1VBQy9DOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVNLFNBQVU1RCxZQUFZO1lBQzNCLFNBQVN3RSxVQUFVO2NBQ2xCQyxrQkFBUyxDQUFDQyxXQUFXLEdBQUcsSUFBSTtZQUM3QjtZQUVBLElBQUksQ0FBQ3pTLG1CQUFVLENBQUNqRyxLQUFLLEVBQUUsT0FBT3NMLDZCQUFDcU4seUJBQWEsT0FBRztZQUMvQyxPQUNDck47Y0FBS3lCLFNBQVMsRUFBQztZQUFrQixHQUNoQ3pCO2NBQUt1RSxHQUFHLEVBQUMsdUJBQXVCO2NBQUNPLEdBQUcsRUFBQztZQUFnQixFQUFHLEVBQ3hEOUU7Y0FBTXlCLFNBQVMsRUFBQztZQUFxQixHQUNwQ3pCLDZCQUFDc0MsV0FBSTtjQUFDdkMsSUFBSSxFQUFFd0MsYUFBSyxDQUFDLGVBQWUsQ0FBQztjQUFFZCxTQUFTLEVBQUM7WUFBbUIsRUFBRyxFQUNwRXpCLDBEQUF1QixFQUN2QkEsd0NBQ0NBLGdHQUFpRSxPQUFDQSx3Q0FBTSxxREFFckUsRUFDSkEsNkJBQUN1SyxZQUFNO2NBQUN4SyxJQUFJLEVBQUMsTUFBTTtjQUFDMkIsT0FBTyxFQUFFd0wsVUFBVTtjQUFFbEYsS0FBSyxFQUFDO1lBQWdCLEVBQUcsQ0FDNUQsQ0FDRjtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiT2JqZWN0IiwidmFsdWUiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicmVjb3JkZXIiLCJiZWFyZXIiLCJ1cGxvYWRlciIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJwbGF5ZXIiLCJpc0ZldGNoaW5nIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2hpbmciLCJlcnJvciIsImNvbnN0cnVjdG9yIiwicGFyZW50IiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdCIsInVuZGVmaW5lZCIsInRyaWdnZXIiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJyZWFkeSIsIlVwbG9hZGVyIiwidHlwZSIsInBhcmFtcyIsImNvbnRhaW5lciIsInByb2plY3QiLCJ1cmwiLCJjb25maWciLCJDSEFUX0FQSV9TRVJWRVIiLCJvbiIsImxvYWRlbmQiLCJwcm9jZXNzIiwiY29uc29sZSIsIndhcm4iLCJjcmVhdGUiLCJzZWxlY3RvciIsImdsb2JhbFRoaXMiLCJjb3Jkb3ZhIiwiYmxvYlRvQXJyYXlCdWZmZXIiLCJibG9iIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsImFycmF5QnVmZmVyIiwidGFyZ2V0IiwicmVzdWx0IiwiQXJyYXlCdWZmZXIiLCJvbmVycm9yIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJzYXZlUmVjb3JkaW5nIiwicmVjb3JkaW5nIiwidHJhbnNjcmlwdGlvbiIsImNoYXQiLCJzZW5kQXVkaW8iLCJ3YWl0aW5nUmVzcG9uc2UiLCJnZW5lcmF0ZUlkIiwiYnVmZmVyIiwiaGFzaEJ1ZmZlciIsImNyeXB0byIsInN1YnRsZSIsImRpZ2VzdCIsImhhc2hBcnJheSIsIkFycmF5IiwiZnJvbSIsIlVpbnQ4QXJyYXkiLCJoYXNoSGV4IiwibWFwIiwiYiIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJqb2luIiwic2F2ZUF1ZGlvIiwiYXVkaW8iLCJpZCIsIm51bWJlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsInBlcmZvcm1hbmNlIiwibm93IiwicmVzcG9uc2UiLCJwdWJsaXNoUmVjb3JkaW5nIiwic3RhdHVzIiwiZGF0YSIsInByb3BlcnRpZXMiLCJwYXRoIiwiZmlsZSIsIm91dHB1dCIsInVzYWdlIiwic291cmNlIiwiY3JlYXRlZEF0IiwidW5peCIsInNhdmVJdGVtIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VySWQiLCJEYXRlIiwic2VsZWN0ZWRLYiIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJzZXRBdWRpb01lc3NhZ2UiLCJ1c2VyIiwiY2hhdElkIiwiY29udGVudCIsInJvbGUiLCJ0aW1lc3RhbXAiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2VzIiwiY2F0ZWdvcnkiLCJBcHBXcmFwcGVyIiwiY2hhdHMiLCJpdGVtcyIsImF1ZGlvTWFuYWdlciIsImtub3dsZWRnZUJveGVzIiwia2JzIiwia2IiLCJzZWxlY3RlZE1vZGVsIiwibW9kZWwiLCJub3RGb3VuZCIsInNlbGVjdGVkS2JQYXRoIiwiZmluZCIsImkiLCJtZXNzYWdlIiwiTWFwIiwiZXh0ZW5zaW9ucyIsImF1dG9wbGF5IiwiQ2hhdCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJpc1JlYWR5Iiwia25vd2xlZGVCb3hTZWxlY3RlZCIsImtub3dsZWRnZUJveElkIiwibG9hZEFsbCIsImV4dHMiLCJtZXRhZGF0YSIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNldCIsInNlbmRNZXNzYWdlIiwibWFyayIsImluY2x1ZGVzIiwib25MaXN0ZW4iLCJvbkVuZCIsIm9mZiIsIkV2ZW50cyIsImNodW5rcyIsInZhbGlkIiwiYW5hbHlzZXIiLCJpbml0aWFsaXNlIiwiUGVuZGluZ1Byb21pc2UiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ0aGVuIiwic3RyZWFtIiwiTWVkaWFSZWNvcmRlciIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJ3aW5kb3ciLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJvbnJlc3VsdCIsImV2ZW50IiwiaW50ZXJpbVRyYW5zY3JpcHQiLCJmaW5hbFRyYW5zY3JpcHQiLCJyZXN1bHRJbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJpc0ZpbmFsIiwidHJhbnNjcmlwdCIsInN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpemUiLCJwdXNoIiwiY2F0Y2giLCJmaW5hbGx5IiwicmVjb3JkIiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsInRyYWNrIiwic3RvcCIsImVuZHRpbWUiLCJCbG9iIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsIkJhY2tBcnJvdyIsInN0b3JlIiwic2VwYXJhdG9yIiwiaWNvbiIsIlJlYWN0IiwidXNlUmVmIiwic2V0VGltZW91dCIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsImlzSW5Db250YWluZXIiLCJwYXJlbnROb2RlIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVuZFJlY3QiLCJ0aHJlc2hvbGQiLCJib3R0b20iLCJ1c2VFZmZlY3QiLCJoYW5kbGVTY3JvbGwiLCJ2aXNpYmxlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkljb25CdXR0b24iLCJyZWYiLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIkV4dGVuc2lvblJlbmRlcmVyIiwiQ29tcG9uZW50IiwiY29udHJvbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjaGF0SW50cm8iLCJIZWFkZXIiLCJNZXNzYWdlcyIsImF2b2lkQ2hhdCIsIkNoYXRJbnB1dCIsIlN5c3RlbUFuc3dlcmluZyIsIkljb24iLCJJQ09OUyIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJsYXN0IiwiTWVzc2FnZSIsImtleSIsIk1lc3NhZ2VBY3Rpb25zIiwidGV4dCIsIm1lc3NhZ2VUb2tlbnMiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJsaXN0ZW4iLCJwb3NpdGlvblRvQ3V0IiwicGxheSIsIm9uUGF1c2UiLCJjb3B5TWVzc2FnZSIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiYXBwbHkiLCJBdWRpb01lc3NhZ2UiLCJjbHMiLCJQcm9maWxlSWNvbiIsIk1lc3NhZ2VUZXh0IiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJhbHQiLCJvbkVycm9yIiwicGxheWFibGUiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsIm9uQ2xpY2tXb3JkIiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiUGxheWFibGUiLCJDaGF0TWVzc2FnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2hhdE1lc3NhZ2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk1lc3NhZ2VDb21wb25lbnQiLCJzZXRDb250ZW50IiwiZmluaXNoZWQiLCJzZXRGaW5pc2hlZCIsInRvdGFsVG9rZW5zIiwiYmxvY2tzIiwidXNlTWVtbyIsInNwbGl0IiwiZmlsdGVyIiwidHJpbSIsImlzQ29kZSIsInN0YXJ0c1dpdGgiLCJwbGF5YWJsZUNvbnRlbnQiLCJpdGVtIiwibWVtbyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIkNoYXRTa2VsZXRvbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJfIiwiQ2hhdENvbnRleHQiLCJ1c2VDaGF0Q29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNldEF1dG9wbGF5IiwiaGFuZGxlQXV0b3BsYXlUb2dnbGUiLCJoYW5kbGVDaGF0U2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJJbnB1dCIsImxhYmVsIiwicmVxdWlyZWQiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlByb3ZpZGVyIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiaXNXYWl0aW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0QXJlYVJlZiIsInNldFRleHQiLCJoYW5kbGVJbnB1dENoYW5nZSIsInJlcGxhY2VBbGwiLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImZvY3VzIiwiaGFuZGxlS2V5RG93biIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJoYW5kbGVTZW5kIiwib25TdWJtaXQiLCJkaXNhYmxlZFRleHRhcmVhIiwic3lzdGVtIiwiU3lzdGVtTW9kYWwiLCJGb3JtIiwicm93cyIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIlBsYXllciIsImNhbmNlbCIsIlRpbWVyIiwicGxheUFjdGlvbiIsIlVJRm9ybSIsImNsb3NlTW9kYWwiLCJzZXRWYWx1ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0QXJlYVZhbHVlIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJwdWJsaXNoIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsImRpYWxvZ1JlZiIsImFzc2lzdGFudCIsIm9wZW5Nb2RhbCIsInNob3dNb2RhbCIsImNsb3NlIiwibW9kZSIsIm9uQ2xvc2UiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInNlY1JlbmRlcmVkIiwibWludXRlc1JlbmRlcmVkIiwidXNlVGltZXIiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciIsIm9wZW5EaWFsb2ciLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9pbnRlcmZhY2VzL21lc3NhZ2VzLnRzIiwidHMvc3RvcmUvYXVkaW8udHMiLCJ0cy9zdG9yZS9pbmRleC50cyIsInRzL3N0b3JlL3JlY29yZGVyLnRzIiwidHMvdmlld3MvY2hhdC9CYWNrQXJyb3cudHN4IiwidHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4IiwidHMvdmlld3MvY2hhdC9pbmRleC50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL2Fuc3dlcmluZy50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9hdWRpby1tZXNzYWdlLnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb250ZXh0LnRzIiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9wbGF5ZXIudHN4IiwidHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCJ0cy92aWV3cy9jb250ZXh0LnRzeCIsInRzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsInRzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsInRzL3ZpZXdzL2lucHV0L3BsYXllci50c3giLCJ0cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcudHN4IiwidHMvdmlld3MvaW5wdXQvc3lzdGVtL2Zvcm0udHN4IiwidHMvdmlld3MvaW5wdXQvc3lzdGVtL2luZGV4LnRzeCIsInRzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCJ0cy92aWV3cy9ub3QtZm91bmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==