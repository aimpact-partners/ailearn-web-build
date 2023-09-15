System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "dayjs@1.11.9", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat@1.0.1/extensions", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.36/toast", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/form", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context2) {
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
    }, function (_bgroupMediaManager100Uploader) {
      dependency_9 = _bgroupMediaManager100Uploader;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['dayjs', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/config', dependency_6], ['@aimpact/chat-sdk/voice', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@bgroup/media-manager/uploader', dependency_9], ['@aimpact/chat-sdk/core', dependency_10], ['@aimpact/chat/wrapper', dependency_11], ['@aimpact/chat/extensions', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['pragmate-ui/icons', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/icons', dependency_17], ['pragmate-ui/toast', dependency_18], ['@aimpact/chat-sdk/widgets/playable', dependency_19], ['@aimpact/chat/shared/components', dependency_20], ['@aimpact/chat/shared/hooks', dependency_21], ['pragmate-ui/form', dependency_22], ['@aimpact/chat/ui/manager', dependency_23]]);
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
        hash: 3540945704,
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
          var _uploader = require("@bgroup/media-manager/uploader");
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
        hash: 1951348852,
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
              globalThis?.navigator.mediaDevices.getUserMedia({
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
                if ('webkitSpeechRecognition' in globalThis) {
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

      /************************************
      INTERNAL MODULE: ./views/chat/content
      ************************************/

      ims.set('./views/chat/content', {
        hash: 597260999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Content = Content;
          var _react = require("react");
          var _useExtension = require("./use-extension");
          var _messages = require("./messages");
          var _context = require("../context");
          var _extensionRenderer = require("./extension-renderer");
          function Content({
            separator
          }) {
            const {
              store
            } = (0, _context.useChatContext)();
            const [ref, ready, webComponentName] = (0, _useExtension.useExtension)('chat-intro');
            return _react.default.createElement("div", {
              className: 'chat__content'
            }, _react.default.createElement(_extensionRenderer.ExtensionRenderer, {
              component: webComponentName,
              reference: ref
            }), ready && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_messages.Messages, {
              separator: separator
            }), _react.default.createElement("div", {
              ref: separator,
              className: 'separator'
            })));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/chat/extension-renderer
      ***********************************************/

      ims.set('./views/chat/extension-renderer', {
        hash: 2028014873,
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
            component,
            reference
          }) {
            const {
              store: {
                chat,
                extensions
              }
            } = (0, _context.useChatContext)();
            const Component = component;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Component, {
              ref: reference,
              metadata: JSON.stringify(chat.metadata)
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/chat/index
      **********************************/

      ims.set('./views/chat/index', {
        hash: 3532553397,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _context = require("../context");
          var _header = require("../header");
          var _input = require("../input");
          var _BackArrow = require("./BackArrow");
          var _content = require("./content");
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
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_content.Content, {
              separator: separator
            }), _react.default.createElement(_BackArrow.BackArrow, {
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
        hash: 1556888723,
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
            // console.log(0.1, content);
            const blocks = _react.default.useMemo(() => {
              return content.split(/(```[\s\S]*?```|`[\s\S]*?`)/).filter(block => block.trim() !== '').map(block => ({
                content: block,
                isCode: content.startsWith('```') || content.startsWith('`')
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

      /******************************************
      INTERNAL MODULE: ./views/chat/use-extension
      ******************************************/

      ims.set('./views/chat/use-extension', {
        hash: 2126111506,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useExtension = useExtension;
          var _react = require("react");
          var _context = require("../context");
          function useExtension(name) {
            const [ready, setReady] = _react.default.useState(false);
            const ref = _react.default.useRef(null);
            const {
              store: {
                extensions
              }
            } = (0, _context.useChatContext)();
            const webComponentName = extensions.get(name)?.control;
            _react.default.useEffect(() => {
              const onReady = event => setReady(true);
              ref.current.addEventListener('ready', onReady);
              return () => ref.current?.removeEventListener('ready', onReady);
            });
            return [ref, ready, webComponentName];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLEtBQUssQ0FBRVAsSUFBSSxHQUFHLElBQUksR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU1QLEtBQUssR0FBR2EsSUFBSSxDQUFDQyxLQUFLLENBQUNQLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sQ0FBQ1AsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDO1VBQy9DOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVNLFNBQVU1RCxZQUFZO1lBQzNCLFNBQVN3RSxVQUFVO2NBQ2xCQyxrQkFBUyxDQUFDQyxXQUFXLEdBQUcsSUFBSTtZQUM3QjtZQUVBLElBQUksQ0FBQzlTLG1CQUFVLENBQUNqRyxLQUFLLEVBQUUsT0FBT3FMLDZCQUFDMk4seUJBQWEsT0FBRztZQUMvQyxPQUNDM047Y0FBS3lCLFNBQVMsRUFBQztZQUFrQixHQUNoQ3pCO2NBQUswRSxHQUFHLEVBQUMsdUJBQXVCO2NBQUNPLEdBQUcsRUFBQztZQUFnQixFQUFHLEVBQ3hEakY7Y0FBTXlCLFNBQVMsRUFBQztZQUFxQixHQUNwQ3pCLDZCQUFDeUMsV0FBSTtjQUFDMUMsSUFBSSxFQUFFMkMsYUFBSyxDQUFDLGVBQWUsQ0FBQztjQUFFakIsU0FBUyxFQUFDO1lBQW1CLEVBQUcsRUFDcEV6QiwwREFBdUIsRUFDdkJBLHdDQUNDQSxnR0FBaUUsT0FBQ0Esd0NBQU0scURBRXJFLEVBQ0pBLDZCQUFDNkssWUFBTTtjQUFDOUssSUFBSSxFQUFDLE1BQU07Y0FBQzJCLE9BQU8sRUFBRThMLFVBQVU7Y0FBRWpGLEtBQUssRUFBQztZQUFnQixFQUFHLENBQzVELENBQ0Y7VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFuIiwiZXhwb3J0cyIsIk9iamVjdCIsInZhbHVlIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInJlY29yZGVyIiwiYmVhcmVyIiwidXBsb2FkZXIiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiaXNGZXRjaGluZyIsInRyaWdnZXJFdmVudCIsImZldGNoaW5nIiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwicmVhZHkiLCJVcGxvYWRlciIsInR5cGUiLCJwYXJhbXMiLCJjb250YWluZXIiLCJwcm9qZWN0IiwidXJsIiwiY29uZmlnIiwiQ0hBVF9BUElfU0VSVkVSIiwib24iLCJsb2FkZW5kIiwicHJvY2VzcyIsImNvbnNvbGUiLCJ3YXJuIiwiY3JlYXRlIiwic2VsZWN0b3IiLCJnbG9iYWxUaGlzIiwiY29yZG92YSIsImJsb2JUb0FycmF5QnVmZmVyIiwiYmxvYiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJhcnJheUJ1ZmZlciIsInRhcmdldCIsInJlc3VsdCIsIkFycmF5QnVmZmVyIiwib25lcnJvciIsInJlYWRBc0FycmF5QnVmZmVyIiwic2F2ZVJlY29yZGluZyIsInJlY29yZGluZyIsInRyYW5zY3JpcHRpb24iLCJjaGF0Iiwic2VuZEF1ZGlvIiwid2FpdGluZ1Jlc3BvbnNlIiwiZ2VuZXJhdGVJZCIsImJ1ZmZlciIsImhhc2hCdWZmZXIiLCJjcnlwdG8iLCJzdWJ0bGUiLCJkaWdlc3QiLCJoYXNoQXJyYXkiLCJBcnJheSIsImZyb20iLCJVaW50OEFycmF5IiwiaGFzaEhleCIsIm1hcCIsImIiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsInNhdmVBdWRpbyIsImF1ZGlvIiwiaWQiLCJudW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJlc3BvbnNlIiwicHVibGlzaFJlY29yZGluZyIsInN0YXR1cyIsImRhdGEiLCJwcm9wZXJ0aWVzIiwicGF0aCIsImZpbGUiLCJvdXRwdXQiLCJ1c2FnZSIsInNvdXJjZSIsImNyZWF0ZWRBdCIsInVuaXgiLCJzYXZlSXRlbSIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInNlc3Npb25XcmFwcGVyIiwidXNlcklkIiwiRGF0ZSIsInNlbGVjdGVkS2IiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwic2V0QXVkaW9NZXNzYWdlIiwidXNlciIsImNoYXRJZCIsImNvbnRlbnQiLCJyb2xlIiwidGltZXN0YW1wIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlcyIsImNhdGVnb3J5IiwiQXBwV3JhcHBlciIsImNoYXRzIiwiaXRlbXMiLCJhdWRpb01hbmFnZXIiLCJrbm93bGVkZ2VCb3hlcyIsImticyIsImtiIiwic2VsZWN0ZWRNb2RlbCIsIm1vZGVsIiwibm90Rm91bmQiLCJzZWxlY3RlZEtiUGF0aCIsImZpbmQiLCJpIiwibWVzc2FnZSIsIk1hcCIsImV4dGVuc2lvbnMiLCJhdXRvcGxheSIsIkNoYXQiLCJjdXJyZW50Q2hhdCIsImZvdW5kIiwiaXNSZWFkeSIsImtub3dsZWRlQm94U2VsZWN0ZWQiLCJrbm93bGVkZ2VCb3hJZCIsImxvYWRBbGwiLCJleHRzIiwibWV0YWRhdGEiLCJmb3JFYWNoIiwiZXh0ZW5zaW9uIiwiaW5kZXgiLCJzZXQiLCJzZW5kTWVzc2FnZSIsIm1hcmsiLCJpbmNsdWRlcyIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJFdmVudHMiLCJjaHVua3MiLCJ2YWxpZCIsImFuYWx5c2VyIiwiaW5pdGlhbGlzZSIsIlBlbmRpbmdQcm9taXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidGhlbiIsInN0cmVhbSIsIk1lZGlhUmVjb3JkZXIiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjcmVhdGVBbmFseXNlciIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJsYW5nIiwiY29udGludW91cyIsImludGVyaW1SZXN1bHRzIiwib25yZXN1bHQiLCJldmVudCIsImludGVyaW1UcmFuc2NyaXB0IiwiZmluYWxUcmFuc2NyaXB0IiwicmVzdWx0SW5kZXgiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaXNGaW5hbCIsInRyYW5zY3JpcHQiLCJzdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaXplIiwicHVzaCIsImNhdGNoIiwiZmluYWxseSIsInJlY29yZCIsInN0b3BTdHJlYW0iLCJnZXRUcmFja3MiLCJ0cmFjayIsInN0b3AiLCJlbmR0aW1lIiwiQmxvYiIsIm1pbWVUeXBlIiwib25GaW5pc2giLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJSZWFjdCIsInVzZVJlZiIsInNldFRpbWVvdXQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJpc0luQ29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbmRSZWN0IiwidGhyZXNob2xkIiwiYm90dG9tIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJJY29uQnV0dG9uIiwicmVmIiwidmFyaWFudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJDb250ZW50Iiwid2ViQ29tcG9uZW50TmFtZSIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiTWVzc2FnZXMiLCJDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hhdEludHJvIiwiSGVhZGVyIiwiYXZvaWRDaGF0IiwiQ2hhdElucHV0IiwiU3lzdGVtQW5zd2VyaW5nIiwiSWNvbiIsIklDT05TIiwic2V0TWVzc2FnZXMiLCJ1c2VTdGF0ZSIsImxhc3QiLCJNZXNzYWdlIiwia2V5IiwiTWVzc2FnZUFjdGlvbnMiLCJ0ZXh0IiwibWVzc2FnZVRva2VucyIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsImNvcHlNZXNzYWdlIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiZGlzYWJsZWQiLCJhcHBseSIsIkF1ZGlvTWVzc2FnZSIsImNscyIsIlByb2ZpbGVJY29uIiwiTWVzc2FnZVRleHQiLCJBdWRpb1BsYXllciIsInNyYyIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsImFsdCIsIm9uRXJyb3IiLCJwbGF5YWJsZSIsInJlbW92ZUhpZ2hsaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwib25DbGlja1dvcmQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTWVzc2FnZUNvbXBvbmVudCIsInNldENvbnRlbnQiLCJmaW5pc2hlZCIsInNldEZpbmlzaGVkIiwidG90YWxUb2tlbnMiLCJibG9ja3MiLCJ1c2VNZW1vIiwic3BsaXQiLCJmaWx0ZXIiLCJ0cmltIiwiaXNDb2RlIiwic3RhcnRzV2l0aCIsInBsYXlhYmxlQ29udGVudCIsIml0ZW0iLCJtZW1vIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiQ2hhdFNrZWxldG9uIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIl8iLCJ1c2VFeHRlbnNpb24iLCJzZXRSZWFkeSIsImNvbnRyb2wiLCJvblJlYWR5IiwiQ2hhdENvbnRleHQiLCJ1c2VDaGF0Q29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNldEF1dG9wbGF5IiwiaGFuZGxlQXV0b3BsYXlUb2dnbGUiLCJoYW5kbGVDaGF0U2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJJbnB1dCIsImxhYmVsIiwicmVxdWlyZWQiLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsImlzV2FpdGluZyIsInNldFJlY29yZGluZyIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwidGV4dEFyZWFSZWYiLCJzZXRUZXh0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJyZXBsYWNlQWxsIiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJmb2N1cyIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5IiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwiZGlzYWJsZWRUZXh0YXJlYSIsInN5c3RlbSIsIlN5c3RlbU1vZGFsIiwiRm9ybSIsInJvd3MiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsInBsYXlBY3Rpb24iLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFyZWFWYWx1ZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwicHVibGlzaCIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJkaWFsb2dSZWYiLCJhc3Npc3RhbnQiLCJvcGVuTW9kYWwiLCJzaG93TW9kYWwiLCJjbG9zZSIsIm1vZGUiLCJvbkNsb3NlIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJzZWNSZW5kZXJlZCIsIm1pbnV0ZXNSZW5kZXJlZCIsInVzZVRpbWVyIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvaW50ZXJmYWNlcy9tZXNzYWdlcy50cyIsInRzL3N0b3JlL2F1ZGlvLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy9zdG9yZS9yZWNvcmRlci50cyIsInRzL3ZpZXdzL2NoYXQvQmFja0Fycm93LnRzeCIsInRzL3ZpZXdzL2NoYXQvY29udGVudC50c3giLCJ0cy92aWV3cy9jaGF0L2V4dGVuc2lvbi1yZW5kZXJlci50c3giLCJ0cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvYW5zd2VyaW5nLnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2F1ZGlvLW1lc3NhZ2UudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbnRleHQudHMiLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL3BsYXllci50c3giLCJ0cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsInRzL3ZpZXdzL2NoYXQvdXNlLWV4dGVuc2lvbi50c3giLCJ0cy92aWV3cy9jb250ZXh0LnRzeCIsInRzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsInRzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsInRzL3ZpZXdzL2lucHV0L3BsYXllci50c3giLCJ0cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcudHN4IiwidHMvdmlld3MvaW5wdXQvc3lzdGVtL2Zvcm0udHN4IiwidHMvdmlld3MvaW5wdXQvc3lzdGVtL2luZGV4LnRzeCIsInRzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCJ0cy92aWV3cy9ub3QtZm91bmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=