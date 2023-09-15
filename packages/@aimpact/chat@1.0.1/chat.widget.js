System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "dayjs@1.11.9", "@beyond-js/reactive@1.1.5/model", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat@1.0.1/extensions", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.36/toast", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/form", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context2) {
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
    }, function (_beyondJsReactive115Model) {
      dependency_5 = _beyondJsReactive115Model;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFuIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfZGF5anMiLCJfbW9kZWwiLCJfY29uZmlnIiwiX3ZvaWNlIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJiZWFyZXIiLCJ1cGxvYWRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiZmV0Y2hpbmciLCJpc0ZldGNoaW5nIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwicmVhZHkiLCJVcGxvYWRlciIsInR5cGUiLCJwYXJhbXMiLCJjb250YWluZXIiLCJwcm9qZWN0IiwidXJsIiwiZGVmYXVsdCIsIkNIQVRfQVBJX1NFUlZFUiIsIm9uIiwibG9hZGVuZCIsInByb2Nlc3MiLCJjb25zb2xlIiwid2FybiIsImNyZWF0ZSIsInNlbGVjdG9yIiwiZ2xvYmFsVGhpcyIsImNvcmRvdmEiLCJibG9iVG9BcnJheUJ1ZmZlciIsImJsb2IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwiYXJyYXlCdWZmZXIiLCJ0YXJnZXQiLCJyZXN1bHQiLCJBcnJheUJ1ZmZlciIsIm9uZXJyb3IiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInNhdmVSZWNvcmRpbmciLCJyZWNvcmRpbmciLCJ0cmFuc2NyaXB0aW9uIiwiY2hhdCIsInNlbmRBdWRpbyIsIndhaXRpbmdSZXNwb25zZSIsImdlbmVyYXRlSWQiLCJidWZmZXIiLCJoYXNoQnVmZmVyIiwiY3J5cHRvIiwic3VidGxlIiwiZGlnZXN0IiwiaGFzaEFycmF5IiwiQXJyYXkiLCJmcm9tIiwiVWludDhBcnJheSIsImhhc2hIZXgiLCJtYXAiLCJiIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImpvaW4iLCJzYXZlQXVkaW8iLCJhdWRpbyIsImlkIiwibnVtYmVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXNwb25zZSIsInB1Ymxpc2hSZWNvcmRpbmciLCJzdGF0dXMiLCJkYXRhIiwicHJvcGVydGllcyIsInBhdGgiLCJmaWxlIiwib3V0cHV0IiwidXNhZ2UiLCJzb3VyY2UiLCJjcmVhdGVkQXQiLCJ1bml4Iiwic2F2ZUl0ZW0iLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXJJZCIsIkRhdGUiLCJzZWxlY3RlZEtiIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsInNldEF1ZGlvTWVzc2FnZSIsInVzZXIiLCJjaGF0SWQiLCJjb250ZW50Iiwicm9sZSIsInRpbWVzdGFtcCIsImN1cnJlbnRNZXNzYWdlIiwiX2NvcmUiLCJfd3JhcHBlciIsIl9hdWRpbyIsIl9leHRlbnNpb25zIiwibWVzc2FnZXMiLCJFWFRFTlNJT05TIiwiY2F0ZWdvcnkiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJpdGVtcyIsImF1ZGlvTWFuYWdlciIsImticyIsImtub3dsZWRnZUJveGVzIiwia2IiLCJzZWxlY3RlZE1vZGVsIiwibW9kZWwiLCJub3RGb3VuZCIsInNlbGVjdGVkS2JQYXRoIiwiZmluZCIsImkiLCJtZXNzYWdlIiwiZXh0ZW5zaW9ucyIsIk1hcCIsImF1dG9wbGF5IiwiQ2hhdCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJpc1JlYWR5Iiwia25vd2xlZGVCb3hTZWxlY3RlZCIsImtub3dsZWRnZUJveElkIiwibG9hZEFsbCIsImV4dHMiLCJtZXRhZGF0YSIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNldCIsInNlbmRNZXNzYWdlIiwibWFyayIsImluY2x1ZGVzIiwib25MaXN0ZW4iLCJvbkVuZCIsIm9mZiIsIkV2ZW50cyIsImluaXRpYWxpc2VkIiwic3RyZWFtIiwic3RhcnRUaW1lIiwiaW5pdFByb21pc2UiLCJzdG9wUHJvbWlzZSIsImF1ZGlvQ29udGV4dCIsInJlY29yZGluZ1Byb21pc2UiLCJtZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwidmFsaWQiLCJhbmFseXNlciIsInNwZWVjaFJlY29nbml0aW9uIiwicHJvbWlzZVNwZWVjaCIsImluaXRpYWxpc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJNZWRpYVJlY29yZGVyIiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY3JlYXRlQW5hbHlzZXIiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uIiwibGFuZyIsImNvbnRpbnVvdXMiLCJpbnRlcmltUmVzdWx0cyIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsInJlc3VsdEluZGV4IiwicmVzdWx0cyIsImxlbmd0aCIsImlzRmluYWwiLCJ0cmFuc2NyaXB0Iiwic3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2l6ZSIsInB1c2giLCJjYXRjaCIsImZpbmFsbHkiLCJyZWNvcmQiLCJzdG9wU3RyZWFtIiwiZ2V0VHJhY2tzIiwidHJhY2siLCJzdG9wIiwiZW5kdGltZSIsIkJsb2IiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiQmFja0Fycm93Iiwic2VwYXJhdG9yIiwiaWNvbiIsInVzZVJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJpc0luQ29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbmRSZWN0IiwidGhyZXNob2xkIiwiYm90dG9tIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJJY29uQnV0dG9uIiwicmVmIiwidmFyaWFudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJfdXNlRXh0ZW5zaW9uIiwiX21lc3NhZ2VzIiwiX2NvbnRleHQiLCJfZXh0ZW5zaW9uUmVuZGVyZXIiLCJDb250ZW50IiwidXNlQ2hhdENvbnRleHQiLCJ3ZWJDb21wb25lbnROYW1lIiwidXNlRXh0ZW5zaW9uIiwiRXh0ZW5zaW9uUmVuZGVyZXIiLCJjb21wb25lbnQiLCJyZWZlcmVuY2UiLCJNZXNzYWdlcyIsIkNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfaGVhZGVyIiwiX2lucHV0IiwiX0JhY2tBcnJvdyIsIl9jb250ZW50IiwiY2hhdEludHJvIiwiSGVhZGVyIiwiYXZvaWRDaGF0IiwiQ2hhdElucHV0IiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsIkljb24iLCJJQ09OUyIsIl9hbnN3ZXJpbmciLCJfbWVzc2FnZSIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJsYXN0IiwiTWVzc2FnZSIsImtleSIsIl90b2FzdCIsIk1lc3NhZ2VBY3Rpb25zIiwidGV4dCIsIm1lc3NhZ2VUb2tlbnMiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJsaXN0ZW4iLCJwb3NpdGlvblRvQ3V0IiwicGxheSIsIm9uUGF1c2UiLCJjb3B5TWVzc2FnZSIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiYXBwbHkiLCJfcGxheWVyIiwiX3RleHQiLCJfcHJvZmlsZUljb24iLCJBdWRpb01lc3NhZ2UiLCJjbHMiLCJQcm9maWxlSWNvbiIsIk1lc3NhZ2VUZXh0IiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJhbHQiLCJvbkVycm9yIiwiX3BsYXlhYmxlIiwicGxheWFibGUiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsIm9uQ2xpY2tXb3JkIiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiUGxheWFibGUiLCJDaGF0TWVzc2FnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2hhdE1lc3NhZ2VDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hY3Rpb25zIiwiX2F1ZGlvTWVzc2FnZSIsIk1lc3NhZ2VDb21wb25lbnQiLCJzZXRDb250ZW50IiwiZmluaXNoZWQiLCJzZXRGaW5pc2hlZCIsInRvdGFsVG9rZW5zIiwiYmxvY2tzIiwidXNlTWVtbyIsInNwbGl0IiwiZmlsdGVyIiwidHJpbSIsImlzQ29kZSIsInN0YXJ0c1dpdGgiLCJwbGF5YWJsZUNvbnRlbnQiLCJpdGVtIiwibWVtbyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9jb21wb25lbnRzIiwiQ2hhdFNrZWxldG9uIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIl8iLCJzZXRSZWFkeSIsImNvbnRyb2wiLCJvblJlYWR5IiwiQ2hhdENvbnRleHQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzZXRBdXRvcGxheSIsImhhbmRsZUF1dG9wbGF5VG9nZ2xlIiwiaGFuZGxlQ2hhdFNlYXJjaCIsInByZXZlbnREZWZhdWx0IiwiSW5wdXQiLCJsYWJlbCIsInJlcXVpcmVkIiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0Iiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX3JlY29yZGluZyIsIl9pbmRleCIsImlzV2FpdGluZyIsInNldFJlY29yZGluZyIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwidGV4dEFyZWFSZWYiLCJzZXRUZXh0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJyZXBsYWNlQWxsIiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJmb2N1cyIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5IiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwiZGlzYWJsZWRUZXh0YXJlYSIsInN5c3RlbSIsImNvbmZpZyIsIlN5c3RlbU1vZGFsIiwiRm9ybSIsInJvd3MiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJfdGltZXIiLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsInBsYXlBY3Rpb24iLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFyZWFWYWx1ZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwicHVibGlzaCIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJfZm9ybTIiLCJkaWFsb2dSZWYiLCJhc3Npc3RhbnQiLCJvcGVuTW9kYWwiLCJzaG93TW9kYWwiLCJjbG9zZSIsIm1vZGUiLCJvbkNsb3NlIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJfbWFuYWdlciIsIm9wZW5EaWFsb2ciLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS9yZWNvcmRlci50cyIsIi90cy92aWV3cy9jaGF0L0JhY2tBcnJvdy50c3giLCIvdHMvdmlld3MvY2hhdC9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jaGF0L2V4dGVuc2lvbi1yZW5kZXJlci50c3giLCIvdHMvdmlld3MvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9hbnN3ZXJpbmcudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvYXVkaW8tbWVzc2FnZS50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29udGV4dC50cyIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvdXNlLWV4dGVuc2lvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCIvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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