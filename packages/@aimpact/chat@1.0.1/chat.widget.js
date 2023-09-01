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
        hash: 3404699283,
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
              const loadResponse = await chat.load({
                id
              });
              _wrapper.AppWrapper.currentChat = chat;
              console.log('chat', chat);
              console.log('loadResponse ', loadResponse);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBT087VUFBVSxNQUNYQSxVQUFXLFNBQVFDLCtCQUF5QjtZQUNqRCxNQUFNO1lBRU5DLFdBQVc7Y0FDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUlDLG1CQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUNBLElBQUlDLE1BQU07Y0FDVCxPQUFPQyxXQUFJO1lBQ1o7WUFFQUMsSUFBSTtjQUNILElBQUksQ0FBQyxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7WUFFQUMsSUFBSTtjQUNILElBQUksQ0FBQyxNQUFNLENBQUNDLEtBQUssRUFBRTtZQUNwQjs7VUFDQUM7Ozs7Ozs7Ozs7O1VDNUJEOztVQUVBQztZQUNBQztVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBZ0JPO1VBQVksTUFBT0MsWUFBYSxTQUFRQyxvQkFBcUI7WUFHbkUsT0FBTztZQUNQLFNBQVM7WUFFVCxJQUFJQyxRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN0QjtZQUNBLE9BQU87WUFDUEMsTUFBTSxDQUFDQSxNQUEwQjtjQUNoQyxJQUFJQSxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBR0EsTUFBTTtjQUNqQyxPQUFPLElBQUk7WUFDWjtZQUVBLFNBQVM7WUFDVCxJQUFJQyxRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN0QjtZQUVBLFFBQVEsR0FBRztjQUNWQyxHQUFHLEVBQUUsSUFBSUMsWUFBSyxFQUFFO2NBQ2hCQyxHQUFHLEVBQUUsSUFBSUMsZUFBUTthQUNqQjtZQUVELE9BQU8sR0FBRyxLQUFLO1lBQ2YsSUFBSUMsTUFBTTtjQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ25DO1lBQ0EsU0FBUztZQUNULElBQUlDLFVBQVUsQ0FBQ1gsS0FBSztjQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHQSxLQUFLO2NBQ3RCLElBQUksQ0FBQ1ksWUFBWSxFQUFFO1lBQ3BCO1lBQ0EsSUFBSUQsVUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQ0UsUUFBUSxJQUFJLEtBQUssQ0FBQ0EsUUFBUTtZQUNqRDtZQUVBLE1BQU07WUFDTixJQUFJQyxLQUFLO2NBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUVBQyxZQUFZQyxNQUFNO2NBQ2pCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSUMsa0JBQVEsRUFBRTtjQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHRCxNQUFNO2NBQ3JCLElBQUksQ0FBQ0UsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7Y0FDaEMsSUFBSSxDQUFDQyxJQUFJLEVBQUU7WUFDWjtZQUVBdEIsS0FBSztjQUNKLElBQUksQ0FBQyxNQUFNLEdBQUd1QixTQUFTO2NBQ3ZCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBQyxZQUFZLENBQUNDLElBQUk7Y0FDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUNBLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLFVBQVVELElBQUksWUFBWSxDQUFDO2NBRXJFLElBQUksQ0FBQyxPQUFPLEdBQUdBLElBQUk7Y0FDbkIsSUFBSSxDQUFDRixPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUEsTUFBTUYsSUFBSTtjQUNULElBQUksQ0FBQ00sS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJQyxrQkFBUSxDQUFDO2dCQUM3QkMsSUFBSSxFQUFFLE9BQU87Z0JBQ2JKLElBQUksRUFBRSxPQUFPO2dCQUNiSyxNQUFNLEVBQUU7a0JBQ1BDLFNBQVMsRUFBRSxRQUFRO2tCQUNuQkMsT0FBTyxFQUFFO2lCQUNUO2dCQUNEQyxHQUFHLEVBQUVDLGVBQU0sQ0FBQ0osTUFBTSxDQUFDSztlQUNuQixDQUFDO2NBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFLLENBQUUsQ0FBQyxDQUFDO2NBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUNBLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBSyxDQUFFLENBQUMsQ0FBQztjQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDQSxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQzFDLElBQUksQ0FBQyxTQUFTLENBQUNELEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDRSxPQUFPLENBQUM7WUFDL0M7WUFFUUEsT0FBTyxJQUFJO1lBRVhELE9BQU8sR0FBRyxZQUFXO2NBQzVCRSxPQUFPLENBQUNDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDNUIsQ0FBQztZQUVEQyxNQUFNLENBQUNDLFFBQVE7Y0FDZCxJQUFJQyxVQUFVLENBQUNDLE9BQU8sRUFBRTtnQkFDdkI7Z0JBQ0E7O2NBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQ0gsTUFBTSxDQUFDQyxRQUFRLENBQUM7WUFDaEM7WUFFQUcsaUJBQWlCLENBQUNDLElBQVU7Y0FDM0IsT0FBTyxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEtBQUk7Z0JBQ3RDLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFVLEVBQUU7Z0JBQy9CRCxNQUFNLENBQUNFLE1BQU0sR0FBR0MsQ0FBQyxJQUFHO2tCQUNuQixNQUFNQyxXQUFXLEdBQUdELENBQUMsQ0FBQ0UsTUFBTSxFQUFFQyxNQUFNO2tCQUNwQyxJQUFJRixXQUFXLFlBQVlHLFdBQVcsRUFBRTtvQkFDdkNULE9BQU8sQ0FBQ00sV0FBVyxDQUFDO21CQUNwQixNQUFNO29CQUNOTCxNQUFNLENBQUMsSUFBSXZCLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDOztnQkFFNUQsQ0FBQztnQkFDRHdCLE1BQU0sQ0FBQ1EsT0FBTyxHQUFHTCxDQUFDLElBQUc7a0JBQ3BCSixNQUFNLENBQUNJLENBQUMsQ0FBQztnQkFDVixDQUFDO2dCQUNESCxNQUFNLENBQUNTLGlCQUFpQixDQUFDYixJQUFJLENBQUM7Y0FDL0IsQ0FBQyxDQUFDO1lBQ0g7WUFFQSxNQUFNYyxhQUFhLENBQUNDLFNBQVMsRUFBRUMsYUFBYSxHQUFHeEMsU0FBUztjQUN2RCxNQUFNO2dCQUFFeUM7Y0FBSSxDQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87Y0FFN0JBLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxTQUFTLEVBQUVDLGFBQWEsQ0FBQztjQUN4QyxJQUFJLENBQUMvQyxRQUFRLEdBQUcsSUFBSTtjQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDa0QsZUFBZSxHQUFHLElBQUk7Y0FDbkMsTUFBTUMsVUFBVSxHQUFHLE1BQU9DLE1BQW1CLElBQXFCO2dCQUNqRSxNQUFNQyxVQUFVLEdBQUcsTUFBTUMsTUFBTSxDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxTQUFTLEVBQUVKLE1BQU0sQ0FBQztnQkFDaEUsTUFBTUssU0FBUyxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQyxJQUFJQyxVQUFVLENBQUNQLFVBQVUsQ0FBQyxDQUFDO2dCQUN4RCxNQUFNUSxPQUFPLEdBQUdKLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzVFLE9BQU9MLE9BQU87Y0FDZixDQUFDO2NBQ0QsTUFBTXRCLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQ1QsaUJBQWlCLENBQUNnQixTQUFTLENBQUM7Y0FFM0QsT0FBTyxJQUFJLENBQUNxQixTQUFTLENBQUNyQixTQUFTLENBQUM7WUFDakM7WUFFQSxNQUFNcUIsU0FBUyxDQUFDQyxLQUFLLEVBQUVDLEVBQUUsR0FBRzlELFNBQVM7Y0FDcEMsSUFBSSxDQUFDUCxRQUFRLEdBQUcsSUFBSTtjQUNwQixNQUFNc0UsTUFBTSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxHQUNwREMsUUFBUSxDQUFDRixZQUFZLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQ2xELENBQUM7Y0FFSkgsRUFBRSxHQUFHQSxFQUFFLElBQUksYUFBYUssV0FBVyxDQUFDQyxHQUFHLEVBQUUsRUFBRTtjQUUzQyxNQUFNQyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUNDLGdCQUFnQixDQUFDVCxLQUFLLENBQUM7Y0FDbkQsSUFBSSxDQUFDUSxRQUFRLEVBQUVFLE1BQU0sRUFBRTtnQkFDdEI7O2NBR0QsTUFBTTtnQkFBRUM7Y0FBSSxDQUFFLEdBQUdILFFBQVE7Y0FDekIsTUFBTUksVUFBVSxHQUFHO2dCQUNsQnRFLElBQUksRUFBRTBELEtBQUssQ0FBQzFELElBQUksSUFBSSxhQUFhNEQsTUFBTSxFQUFFO2dCQUN6Q1csSUFBSSxFQUFFRixJQUFJLENBQUNHLElBQUk7Z0JBQ2ZDLE1BQU0sRUFBRUosSUFBSSxDQUFDSSxNQUFNO2dCQUNuQkMsS0FBSyxFQUFFTCxJQUFJLENBQUNLLEtBQUs7Z0JBQ2pCQyxNQUFNLEVBQUVqQixLQUFLO2dCQUNia0IsU0FBUyxFQUFFLGtCQUFLLEdBQUUsQ0FBQ0MsSUFBSSxFQUFFO2dCQUN6QnhDLGFBQWEsRUFBRWdDLElBQUksQ0FBQ2hDO2VBQ3BCO2NBRUQsT0FBTyxJQUFJLENBQUN5QyxRQUFRLENBQUNSLFVBQVUsQ0FBQztZQUNqQztZQUVBSCxnQkFBZ0IsR0FBRyxNQUFPVCxLQUFLLElBQXdCO2NBQ3RELE1BQU1xQixJQUFJLEdBQUcsSUFBSUMsUUFBUSxFQUFFO2NBQzNCRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxPQUFPLEVBQUV2QixLQUFLLENBQUM7Y0FDM0JxQixJQUFJLENBQUNFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDO2NBQ2xDRixJQUFJLENBQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7Y0FDekNGLElBQUksQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDM0MsSUFBSSxDQUFDcUIsRUFBRSxDQUFDO2NBQzNDb0IsSUFBSSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFQyx1QkFBYyxDQUFDQyxNQUFNLENBQUM7Y0FDNUNKLElBQUksQ0FBQ0UsTUFBTSxDQUFDLFVBQVUsRUFBRSxZQUFZRyxJQUFJLENBQUNuQixHQUFHLEVBQUUsTUFBTSxDQUFDO2NBQ3JEYyxJQUFJLENBQUNFLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDSSxVQUFVLENBQUM7Y0FFdEQsTUFBTUMsR0FBRyxHQUFHLElBQUlDLG1CQUFTLEVBQUU7Y0FDM0IsTUFBTXJCLFFBQVEsR0FBRyxNQUFNb0IsR0FBRyxDQUFDRSxNQUFNLENBQUNULElBQUksRUFBRXRFLGVBQU0sQ0FBQ0osTUFBTSxDQUFDSyxlQUFlLENBQUM7Y0FDdEUsT0FBT3dELFFBQVEsQ0FBQ3VCLElBQUksRUFBRTtZQUN2QixDQUFDO1lBRUQsTUFBTVgsUUFBUSxDQUFDUixVQUFVO2NBQ3hCLElBQUk7Z0JBQ0gsTUFBTTtrQkFBRWhDO2dCQUFJLENBQUUsR0FBRyxJQUFJLENBQUMsT0FBTztnQkFDN0IsTUFBTTRCLFFBQVEsR0FBRyxNQUFNNUIsSUFBSSxDQUFDb0QsZUFBZSxDQUFDO2tCQUMzQ0MsSUFBSSxFQUFFO29CQUFFQyxNQUFNLEVBQUV0RCxJQUFJLENBQUNxQixFQUFFO29CQUFFa0MsT0FBTyxFQUFFdkIsVUFBVSxDQUFDakMsYUFBYTtvQkFBRXlELElBQUksRUFBRSxNQUFNO29CQUFFQyxTQUFTLEVBQUVYLElBQUksQ0FBQ25CLEdBQUc7a0JBQUUsQ0FBRTtrQkFDakdDLFFBQVEsRUFBRTtvQkFDVDBCLE1BQU0sRUFBRXRELElBQUksQ0FBQ3FCLEVBQUU7b0JBQ2ZrQyxPQUFPLEVBQUV2QixVQUFVLENBQUNHLE1BQU07b0JBQzFCcUIsSUFBSSxFQUFFLFFBQVE7b0JBQ2RwQixLQUFLLEVBQUVKLFVBQVUsQ0FBQ0ksS0FBSztvQkFDdkJxQixTQUFTLEVBQUVYLElBQUksQ0FBQ25CLEdBQUc7O2lCQUVwQixDQUFDO2dCQUVGLElBQUksQ0FBQyxPQUFPLENBQUMrQixjQUFjLEdBQUc5QixRQUFRO2dCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDMUIsZUFBZSxHQUFHLEtBQUs7ZUFDcEMsQ0FBQyxPQUFPWixDQUFDLEVBQUU7Z0JBQ1hkLE9BQU8sQ0FBQ3ZCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRXFDLENBQUMsQ0FBQztlQUNyQyxTQUFTO2dCQUNULElBQUksQ0FBQ3RDLFFBQVEsR0FBRyxLQUFLOztZQUV2Qjs7VUFDQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeE5EO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFPTSxNQUFPVixZQUFhLFNBQVFjLG9CQUFxQjtZQUN0RCxTQUFTLEdBQVUsRUFBRTtZQUtyQixXQUFXLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDNUIsSUFBSXNILFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBRUEsS0FBSztZQUNMLElBQUlqRyxJQUFJO2NBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSztZQUNsQjtZQUVBLFNBQVM7WUFDVCxJQUFJa0csUUFBUTtjQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVM7WUFDdEI7WUFFQSxLQUFLO1lBQ0wsSUFBSTVELElBQUk7Y0FDUCxPQUFPLElBQUksQ0FBQyxLQUFLO1lBQ2xCO1lBQ0EsTUFBTSxHQUFHNkQsbUJBQVUsQ0FBQ0MsS0FBSztZQUN6QixJQUFJQSxLQUFLO2NBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDQyxLQUFLLElBQUksRUFBRTtZQUMvQjtZQUVBLE1BQU0sR0FBRyxJQUFJM0gsbUJBQVksQ0FBQyxJQUFJLENBQUM7WUFDL0IsSUFBSTRILFlBQVk7Y0FDZixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUEsSUFBSSxHQUFHSCxtQkFBVSxDQUFDSSxjQUFjO1lBQ2hDLElBQUlDLEdBQUc7Y0FDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUNILEtBQUssSUFBSSxFQUFFO1lBQzdCO1lBRUEsV0FBVztZQUNYLElBQUloQixVQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVztZQUN4QjtZQUNBLElBQUlBLFVBQVUsQ0FBQ29CLEVBQUU7Y0FDaEIsSUFBSSxDQUFDLFdBQVcsR0FBR0EsRUFBRTtZQUN0QjtZQUVBLGNBQWMsR0FBRyxPQUFPO1lBQ3hCLElBQUlDLGFBQWE7Y0FDaEIsT0FBTyxJQUFJLENBQUMsY0FBYztZQUMzQjtZQUNBLElBQUlBLGFBQWEsQ0FBQ0MsS0FBSztjQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHQSxLQUFLO1lBQzVCO1lBRUEsU0FBUztZQUNULElBQUlDLFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBQ0EsSUFBSUEsUUFBUSxDQUFDQSxRQUFRO2NBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUdBLFFBQVE7WUFDMUI7WUFFQSxJQUFJQyxjQUFjO2NBQ2pCLE1BQU14QixVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQ2dCLEtBQUssQ0FBQ1MsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ3BELEVBQUUsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDO2NBQ3ZFLE9BQU8wQixVQUFVLEVBQUVkLElBQUksSUFBSSxrQkFBa0I7WUFDOUM7WUFFQSxlQUFlO1lBQ2YsSUFBSXlCLGNBQWM7Y0FDakIsT0FBTyxJQUFJLENBQUMsZUFBZTtZQUM1QjtZQUVBLElBQUlBLGNBQWMsQ0FBQ2dCLE9BQU87Y0FDekIsSUFBSUEsT0FBTyxFQUFFckQsRUFBRSxLQUFLLElBQUksQ0FBQyxlQUFlLEVBQUVBLEVBQUUsRUFBRTtjQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHcUQsT0FBTztZQUMvQjtZQUVBLFdBQVcsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDdkIsSUFBSUMsVUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVc7WUFDeEI7WUFDQTFIO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDRyxhQUFhLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztjQUNuRCxJQUFJLENBQUN3SCxRQUFRLEdBQUcsSUFBSTtZQUNyQjtZQUVBN0ksS0FBSztjQUNKLElBQUksQ0FBQyxTQUFTLEdBQUd1QixTQUFTO2NBQzFCLElBQUksQ0FBQ1AsUUFBUSxHQUFHLEtBQUs7Y0FDckIsSUFBSSxDQUFDWSxLQUFLLEdBQUcsS0FBSztZQUNuQjtZQUVBakMsSUFBSSxHQUFHLE1BQU8wRixFQUFVLElBQUk7Y0FDM0IsSUFBSSxDQUFDQSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDekQsS0FBSyxHQUFHLElBQUk7Z0JBQ2pCLElBQUksQ0FBQzBHLFFBQVEsR0FBRyxJQUFJO2dCQUNwQjs7Y0FHRCxJQUFJLENBQUN0SCxRQUFRLEdBQUcsSUFBSTtjQUVwQixNQUFNZ0QsSUFBSSxHQUFHLElBQUk4RSxVQUFJLENBQUM7Z0JBQUV6RDtjQUFFLENBQUUsQ0FBQztjQUM3QixNQUFNMEQsWUFBWSxHQUFHLE1BQU0vRSxJQUFJLENBQUNyRSxJQUFJLENBQUM7Z0JBQUUwRjtjQUFFLENBQUUsQ0FBQztjQUM1Q3dDLG1CQUFVLENBQUNtQixXQUFXLEdBQUdoRixJQUFJO2NBRTdCeEIsT0FBTyxDQUFDeUcsR0FBRyxDQUFDLE1BQU0sRUFBRWpGLElBQUksQ0FBQztjQUN6QnhCLE9BQU8sQ0FBQ3lHLEdBQUcsQ0FBQyxlQUFlLEVBQUVGLFlBQVksQ0FBQztjQUMxQyxJQUFJLENBQUMvRSxJQUFJLENBQUNrRixLQUFLLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQ2xJLFFBQVEsR0FBRyxLQUFLO2dCQUNyQixJQUFJLENBQUNZLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUMwRyxRQUFRLEdBQUcsSUFBSTtnQkFDcEI7O2NBR0QsTUFBTXRFLElBQUksQ0FBQ21GLE9BQU87Y0FDbEIsTUFBTUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQ3JCLEtBQUssQ0FBQ1MsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ3BELEVBQUUsS0FBS3JCLElBQUksQ0FBQ3FGLGNBQWMsQ0FBQztjQUNuRixJQUFJLENBQUMsV0FBVyxHQUFHRCxtQkFBbUIsR0FBR0EsbUJBQW1CLENBQUMvRCxFQUFFLEdBQUcsU0FBUztjQUUzRTtjQUNBckIsSUFBSSxDQUFDM0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFLO2dCQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHMkIsSUFBSSxDQUFDMkQsUUFBUTtnQkFDOUIsSUFBSSxDQUFDNUcsWUFBWSxDQUFDLGFBQWEsQ0FBQztjQUNqQyxDQUFDLENBQUM7Y0FDRixNQUFNaUQsSUFBSSxDQUFDc0YsT0FBTyxDQUFDO2dCQUFFakU7Y0FBRSxDQUFFLENBQUM7Y0FDMUJ6QyxVQUFVLENBQUNvQixJQUFJLEdBQUdBLElBQUk7Y0FDdEIsSUFBSSxDQUFDLEtBQUssR0FBR0EsSUFBSTtjQUNqQixNQUFNdUYsSUFBSSxHQUFHLE1BQU1YLHNCQUFVLENBQUNqSixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRXFFLElBQUksQ0FBQ3dGLFFBQVEsQ0FBQztjQUNuRUQsSUFBSSxDQUFDRSxPQUFPLENBQUMsQ0FBQ0MsU0FBUyxFQUFFQyxLQUFLLEtBQUksQ0FBRSxDQUFDLENBQUM7Y0FFdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQ0YsT0FBTyxDQUFDLENBQUNDLFNBQVMsRUFBRUMsS0FBSyxLQUFJO2dCQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDQyxHQUFHLENBQUNGLFNBQVMsRUFBRUgsSUFBSSxDQUFDSSxLQUFLLENBQUMsQ0FBQztjQUM3QyxDQUFDLENBQUM7Y0FFRixJQUFJLENBQUMsU0FBUyxHQUFHM0YsSUFBSSxDQUFDMkQsUUFBUTtjQUM5QixJQUFJLENBQUMzRyxRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUNZLEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQzBHLFFBQVEsR0FBRyxLQUFLO1lBQ3RCLENBQUM7WUFFRCxNQUFNdUIsV0FBVyxDQUFDdEMsT0FBZTtjQUNoQyxJQUFJO2dCQUNIN0IsV0FBVyxDQUFDb0UsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDekIsSUFBSSxDQUFDLGVBQWUsR0FBR3ZJLFNBQVM7Z0JBQ2hDLElBQUksQ0FBQ0EsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQ3dJLFFBQVEsQ0FBQ3hDLE9BQU8sQ0FBQyxFQUFFO2dCQUM3QyxJQUFJLENBQUN2RyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsSUFBSSxDQUFDa0QsZUFBZSxHQUFHLElBQUk7Z0JBQzNCLE1BQU07a0JBQUV3RSxPQUFPO2tCQUFFOUM7Z0JBQVEsQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQ2lFLFdBQVcsQ0FBQ3RDLE9BQU8sQ0FBQztnQkFFbkU7Z0JBQ0EsSUFBSSxDQUFDLGVBQWUsR0FBR21CLE9BQU87Z0JBQzlCLE1BQU1zQixRQUFRLEdBQUcsTUFBSztrQkFDckIsSUFBSSxDQUFDakosWUFBWSxDQUFDLFdBQVc2RSxRQUFRLENBQUNQLEVBQUUsVUFBVSxDQUFDO2dCQUNwRCxDQUFDO2dCQUNELE1BQU00RSxLQUFLLEdBQUcsTUFBSztrQkFDbEJ2QixPQUFPLENBQUN3QixHQUFHLENBQUMsaUJBQWlCLEVBQUVGLFFBQVEsQ0FBQztrQkFDeEMsSUFBSSxDQUFDakosWUFBWSxDQUFDLGdCQUFnQixDQUFDO2tCQUNuQyxJQUFJLENBQUNBLFlBQVksQ0FBQyxXQUFXNkUsUUFBUSxDQUFDUCxFQUFFLFdBQVcsQ0FBQztrQkFDcERxRCxPQUFPLENBQUN3QixHQUFHLENBQUMsbUJBQW1CLEVBQUVELEtBQUssQ0FBQztnQkFDeEMsQ0FBQztnQkFFRHZCLE9BQU8sQ0FBQ3JHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTJILFFBQVEsQ0FBQztnQkFDdkN0QixPQUFPLENBQUNyRyxFQUFFLENBQUMsbUJBQW1CLEVBQUU0SCxLQUFLLENBQUM7Z0JBRXRDLElBQUksQ0FBQy9GLGVBQWUsR0FBRyxLQUFLO2dCQUM1QixJQUFJLENBQUNuRCxZQUFZLENBQUMsYUFBYSxDQUFDO2VBQ2hDLENBQUMsT0FBT3VDLENBQUMsRUFBRTtnQkFDWGQsT0FBTyxDQUFDdkIsS0FBSyxDQUFDcUMsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDWSxlQUFlLEdBQUcsS0FBSztnQkFDNUIsSUFBSSxDQUFDbEQsUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxTEQ7VUFDQTtVQUVPO1VBQVcsTUFDWm1CLFFBQVMsU0FBUStJLFlBQU07WUFDNUIsWUFBWSxHQUFHLEtBQUs7WUFDcEIsT0FBTztZQUNQLE9BQU87WUFDUCxVQUFVO1lBQ1YsWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGNBQWM7WUFFZCxPQUFPLEdBQWUsRUFBRTtZQUN4QixJQUFJQyxNQUFNO2NBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTztZQUNwQjtZQUNBLE9BQU87WUFDUCxJQUFJdEUsTUFBTTtjQUNULE9BQU8sSUFBSSxDQUFDLE9BQU87WUFDcEI7WUFFQSxVQUFVLEdBQUcsS0FBSztZQUNsQixJQUFJaEMsU0FBUztjQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDdkI7WUFFQSxNQUFNO1lBQ04sSUFBSTdDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUEsSUFBSW9KLEtBQUs7Y0FDUixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDcEI7WUFFQSxNQUFNO1lBQ04sSUFBSWpGLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUEsU0FBUztZQUNULElBQUlrRixRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN0QjtZQUNBLGtCQUFrQjtZQUNsQixjQUFjLEdBQUcsRUFBRTtZQUNuQixJQUFJdkcsYUFBYTtjQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjO1lBQzNCO1lBRUEsY0FBYztZQUNkLE1BQU13RyxVQUFVO2NBQ2YsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sTUFBTSxJQUFJLENBQUMsWUFBWTtjQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUlDLG9CQUFjLEVBQVE7Y0FDOUNDLFNBQVMsQ0FBQ0MsWUFBWSxDQUNwQkMsWUFBWSxDQUFDO2dCQUFFdkYsS0FBSyxFQUFFO2NBQUksQ0FBRSxDQUFDLENBQzdCd0YsSUFBSSxDQUFDQyxNQUFNLElBQUc7Z0JBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJQyxhQUFhLENBQUNELE1BQU0sQ0FBQztnQkFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBR0EsTUFBTTtnQkFDckI7Z0JBQ0EsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLakksVUFBVSxDQUFDbUksWUFBWSxJQUFJbkksVUFBVSxDQUFDb0ksa0JBQWtCLEdBQUc7Z0JBRXJGO2dCQUNBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQ0MsY0FBYyxFQUFFO2dCQUVwRDtnQkFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUNDLHVCQUF1QixDQUFDTCxNQUFNLENBQUM7Z0JBQ2pFO2dCQUVBLElBQUkseUJBQXlCLElBQUlNLE1BQU0sRUFBRTtrQkFDeEM7a0JBQ0EsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUlDLHVCQUF1QixFQUFFO2tCQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQUNDLElBQUksR0FBRyxPQUFPO2tCQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUNDLFVBQVUsR0FBRyxJQUFJO2tCQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUNDLGNBQWMsR0FBRyxJQUFJO2tCQUM3QztrQkFDQSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUlmLG9CQUFjLEVBQVU7a0JBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQ2dCLFFBQVEsR0FBR0MsS0FBSyxJQUFHO29CQUMxQyxJQUFJQyxpQkFBaUIsR0FBRyxFQUFFO29CQUMxQixJQUFJQyxlQUFlLEdBQUcsRUFBRTtvQkFDeEIsS0FBSyxJQUFJbEQsQ0FBQyxHQUFHZ0QsS0FBSyxDQUFDRyxXQUFXLEVBQUVuRCxDQUFDLEdBQUdnRCxLQUFLLENBQUNJLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFLEVBQUVyRCxDQUFDLEVBQUU7c0JBQzlELElBQUlnRCxLQUFLLENBQUNJLE9BQU8sQ0FBQ3BELENBQUMsQ0FBQyxDQUFDc0QsT0FBTyxFQUFFO3dCQUM3QkosZUFBZSxJQUFJRixLQUFLLENBQUNJLE9BQU8sQ0FBQ3BELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDdUQsVUFBVTt3QkFDakQsSUFBSSxDQUFDLGNBQWMsR0FBR0wsZUFBZTt3QkFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQzFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO3VCQUNoRCxNQUFNO3dCQUNOeUksaUJBQWlCLElBQUlELEtBQUssQ0FBQ0ksT0FBTyxDQUFDcEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUN1RCxVQUFVOzs7a0JBR3RELENBQUM7a0JBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDckksT0FBTyxHQUFHOEgsS0FBSyxJQUFJakosT0FBTyxDQUFDdkIsS0FBSyxDQUFDLHdCQUF3QixDQUFDO2tCQUVsRixJQUFJLENBQUMsa0JBQWtCLENBQUNnTCxLQUFLLEVBQUU7aUJBQy9CLE1BQU07a0JBQ056SixPQUFPLENBQUN2QixLQUFLLENBQUMsa0NBQWtDLENBQUM7O2dCQUVsRCxJQUFJLENBQUMsY0FBYyxDQUFDaUwsZ0JBQWdCLENBQUMsZUFBZSxFQUFFVCxLQUFLLElBQUc7a0JBQzdELElBQUlBLEtBQUssQ0FBQzFGLElBQUksQ0FBQ29HLElBQUksS0FBSyxDQUFDLEVBQUU7a0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUNDLElBQUksQ0FBQ1gsS0FBSyxDQUFDMUYsSUFBSSxDQUFDO2tCQUU3QixJQUFJLENBQUN2RSxPQUFPLENBQUMsZUFBZSxDQUFDO2dCQUM5QixDQUFDLENBQUM7Y0FDSCxDQUFDLENBQUMsQ0FDRDZLLEtBQUssQ0FBQ3BMLEtBQUssSUFBRztnQkFDZHVCLE9BQU8sQ0FBQ3ZCLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHQSxLQUFLLENBQUN5SCxPQUFPO2dCQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDeEYsTUFBTSxFQUFFO2NBQzNCLENBQUMsQ0FBQyxDQUNEb0osT0FBTyxDQUFDLE1BQUs7Z0JBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJO2dCQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDckosT0FBTyxFQUFFO2NBQzVCLENBQUMsQ0FBQztjQUVILE9BQU8sSUFBSSxDQUFDLFlBQVk7WUFDekI7WUFFQXNKLE1BQU07Y0FDTDtjQUVBLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQjtjQUV6RDtjQUNBO2NBRUEsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUkvQixvQkFBYyxFQUFRO2NBQ25ELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsTUFBTSxJQUFJN0ksS0FBSyxDQUFDLHlEQUF5RCxDQUFDOztjQUUzRSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVM7Y0FDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJO2NBQ3RCLElBQUksQ0FBQ0gsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUV0QixJQUFJLENBQUMrSSxVQUFVLEVBQUUsQ0FDZkssSUFBSSxDQUFDLFlBQVc7Z0JBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsa0JBQUssR0FBRTtnQkFDekI7Z0JBQ0E7Z0JBRUEsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFcUIsS0FBSyxFQUFFO2NBQ25DLENBQUMsQ0FBQyxDQUVESSxLQUFLLENBQUNwTCxLQUFLLElBQUc7Z0JBQ2R1QixPQUFPLENBQUN2QixLQUFLLENBQUNBLEtBQUssQ0FBQztjQUNyQixDQUFDLENBQUM7Y0FDSCxPQUFPLElBQUksQ0FBQyxpQkFBaUI7WUFDOUI7WUFDQXVMLFVBQVUsR0FBRyxNQUFLO2NBQ2pCO2NBQ0EsSUFBSSxDQUFDLE9BQU8sQ0FDVkMsU0FBUyxFQUFFLENBQUM7Y0FBQSxDQUNaaEQsT0FBTyxDQUFFaUQsS0FBSyxJQUFrQ0EsS0FBSyxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEUsQ0FBQzs7WUFFREEsSUFBSTtjQUNILElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN6Qm5LLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNqRDs7Y0FFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsWUFBWTtjQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkrSCxvQkFBYyxFQUFPO2NBRTdDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sSUFBSTdJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQztjQUM1RSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVM7Y0FDeEIsTUFBTWdMLElBQUksR0FBRyxNQUFLO2dCQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSztnQkFDdkIsTUFBTUMsT0FBTyxHQUFHLGtCQUFLLEdBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUNWLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFXO2tCQUN2RCxNQUFNOUcsS0FBSyxHQUFHLElBQUl5SCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFBRS9LLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDZ0w7a0JBQVEsQ0FBRSxDQUFDO2tCQUU1RTtrQkFDQSxJQUFJLENBQUMsTUFBTSxHQUFHMUgsS0FBSztrQkFFbkIsTUFBTTJILFFBQVEsR0FBRyxNQUFLO29CQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDOUosT0FBTyxDQUFDbUMsS0FBSyxDQUFDO29CQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHN0QsU0FBUztrQkFDOUIsQ0FBQztrQkFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUNxSixJQUFJLENBQUNtQyxRQUFRLENBQUM7bUJBQ2xDLE1BQU07b0JBQ04sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO3NCQUN0QkEsUUFBUSxFQUFFOzs7a0JBSVosSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzlKLE9BQU8sQ0FBQ21DLEtBQUssQ0FBQztvQkFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHN0QsU0FBUzs7a0JBRW5DLElBQUksQ0FBQ2lMLFVBQVUsRUFBRTtrQkFDakIsSUFBSSxDQUFDLGNBQWMsR0FBR2pMLFNBQVM7a0JBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUdBLFNBQVM7a0JBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUdBLFNBQVM7Z0JBQzlCLENBQUMsQ0FBQztnQkFFRixJQUFJLENBQUMsY0FBYyxFQUFFb0wsSUFBSSxFQUFFO2dCQUMzQixJQUFJLENBQUMsa0JBQWtCLEVBQUVBLElBQUksRUFBRTtnQkFFL0IsSUFBSSxDQUFDbkwsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN2QixDQUFDO2NBRUQsSUFBSSxDQUFDLFlBQVksR0FBR21MLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQ3BDLFVBQVUsRUFBRSxDQUFDSyxJQUFJLENBQUMrQixJQUFJLENBQUM7Y0FDekQsT0FBTyxJQUFJLENBQUMsWUFBWTtZQUN6Qjs7VUFDQTFNOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9NRDtVQUNBO1VBQ0E7VUFFTSxTQUFVK00sU0FBUyxDQUFDO1lBQUVDLEtBQUs7WUFBRUM7VUFBUyxDQUFFO1lBQzdDLE1BQU1DLElBQUksR0FBR0MsY0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRS9CLG9CQUFTLEVBQUMsQ0FBQ0osS0FBSyxDQUFDLEVBQUUsTUFBTXJLLFVBQVUsQ0FBQzBLLFVBQVUsQ0FBQyxNQUFNQyxjQUFjLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxhQUFhLENBQUM7WUFDM0YsTUFBTUEsY0FBYyxHQUFHLE1BQUs7Y0FDM0JMLFNBQVMsQ0FBQ00sT0FBTyxFQUFFQyxjQUFjLENBQUM7Z0JBQUVDLEtBQUssRUFBRSxLQUFLO2dCQUFFQyxRQUFRLEVBQUU7Y0FBUSxDQUFFLENBQUM7WUFDeEUsQ0FBQztZQUVELE1BQU1DLGFBQWEsR0FBRyxNQUFLO2NBQzFCLE1BQU01TCxTQUFTLEdBQUdrTCxTQUFTLENBQUNNLE9BQU8sRUFBRUssVUFBVTtjQUMvQyxJQUFJLENBQUM3TCxTQUFTLEVBQUUsT0FBTyxJQUFJO2NBQzNCLE1BQU04TCxhQUFhLEdBQUc5TCxTQUFTLENBQUMrTCxxQkFBcUIsRUFBRTtjQUN2RCxNQUFNQyxPQUFPLEdBQUdkLFNBQVMsQ0FBQ00sT0FBTyxDQUFDTyxxQkFBcUIsRUFBRTtjQUN6RCxNQUFNRSxTQUFTLEdBQUcsQ0FBQztjQUNuQixPQUFPRCxPQUFPLENBQUNFLE1BQU0sR0FBR0QsU0FBUyxJQUFJSCxhQUFhLENBQUNJLE1BQU07WUFDMUQsQ0FBQztZQUVEZCxjQUFLLENBQUNlLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1uTSxTQUFTLEdBQUdrTCxTQUFTLENBQUNNLE9BQU8sRUFBRUssVUFBVTtjQUMvQyxJQUFJLENBQUM3TCxTQUFTLEVBQUU7Y0FFaEIsTUFBTW9NLFlBQVksR0FBRyxNQUFLO2dCQUN6QixNQUFNQyxPQUFPLEdBQUcsQ0FBQ1QsYUFBYSxFQUFFO2dCQUNoQyxJQUFJUyxPQUFPLEVBQUVsQixJQUFJLENBQUNLLE9BQU8sRUFBRWMsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FDNUNwQixJQUFJLENBQUNLLE9BQU8sRUFBRWMsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO2NBQzVDLENBQUM7Y0FDRHhNLFNBQVMsQ0FBQ2tLLGdCQUFnQixDQUFDLFFBQVEsRUFBRWtDLFlBQVksQ0FBQztjQUNsRCxPQUFPLE1BQU1wTSxTQUFTLENBQUN5TSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVMLFlBQVksQ0FBQztZQUNuRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQ2hCLDREQUNDQSw2QkFBQ3NCLGlCQUFVO2NBQ1ZDLEdBQUcsRUFBRXhCLElBQUk7Y0FDVEEsSUFBSSxFQUFDLFdBQVc7Y0FDaEJ5QixPQUFPLEVBQUMsVUFBVTtjQUNsQkMsU0FBUyxFQUFDLDJCQUEyQjtjQUNyQ0MsT0FBTyxFQUFFdkI7WUFBYyxFQUN0QixDQUNBO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NBO1VBRUE7VUFEQTs7VUFHTSxTQUFVd0IsaUJBQWlCLENBQUM7WUFBRXJOO1VBQUksQ0FBRTtZQUN6QyxNQUFNO2NBQ0x1TCxLQUFLLEVBQUU7Z0JBQUVqSixJQUFJO2dCQUFFNEU7Y0FBVTtZQUFFLENBQzNCLEdBQUcsMkJBQWMsR0FBRTtZQUVwQixNQUFNb0csU0FBUyxHQUFHcEcsVUFBVSxDQUFDOUksR0FBRyxDQUFDNEIsSUFBSSxDQUFDLEVBQUV1TixPQUFPO1lBRS9DLElBQUksQ0FBQ0QsU0FBUyxFQUFFLE9BQU8sSUFBSTtZQUUzQixPQUFPNUIsNkJBQUM0QixTQUFTO2NBQUN4RixRQUFRLEVBQUUwRixJQUFJLENBQUNDLFNBQVMsQ0FBQ25MLElBQUksQ0FBQ3dGLFFBQVE7WUFBQyxFQUFJO1VBQzlEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RBO1VBR0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBVUEsTUFBTTtZQUFFNkQ7VUFBTSxDQUFFLEdBQUdELGNBQUs7VUFFakI7VUFBVSxTQUFVdEUsSUFBSTtZQUM5QixNQUFNO2NBQUVtRTtZQUFLLENBQUUsR0FBRywyQkFBYyxHQUFFO1lBQ2xDLE1BQU1tQyxTQUFTLEdBQUduQyxLQUFLLENBQUNyRSxVQUFVLENBQUM5SSxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ3BELE1BQU1vTixTQUFTLEdBQUdFLGNBQUssQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNwQyxPQUNDRDtjQUFLeUIsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDekIsNkJBQUNpQyxjQUFNLE9BQUcsRUFDVmpDO2NBQUt5QixTQUFTLEVBQUM7WUFBZSxHQUM3QnpCLDZCQUFDMkIsb0NBQWlCO2NBQUNyTixJQUFJLEVBQUM7WUFBWSxFQUFHLEVBQ3ZDMEwsNkJBQUNrQyxrQkFBUTtjQUFDcEMsU0FBUyxFQUFFQTtZQUFTLEVBQUksRUFDbENFO2NBQUt1QixHQUFHLEVBQUV6QixTQUFTO2NBQUUyQixTQUFTLEVBQUM7WUFBVyxFQUFHLENBQ3hDLEVBQ056Qiw2QkFBQ0osb0JBQVM7Y0FBQ0MsS0FBSyxFQUFFQSxLQUFLO2NBQUVDLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ2hELENBQUNrQyxTQUFTLEVBQUU1RixRQUFRLEVBQUUrRixTQUFTLElBQy9CbkMsNERBQ0NBO2NBQUt5QixTQUFTLEVBQUM7WUFBTSxHQUNwQnpCLDZCQUFDb0MsZ0JBQVM7Y0FBQ3ZDLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQ3RCLENBRVAsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQTtVQUNBO1VBQ0E7VUFFTyxNQUFNd0MsZUFBZSxHQUFHLE1BQUs7WUFDbkMsT0FDQ3JDO2NBQUt5QixTQUFTLEVBQUM7WUFBbUIsR0FDakN6Qiw2QkFBQ3NDLFdBQUk7Y0FBQ2IsU0FBUyxFQUFDLElBQUk7Y0FBQzFCLElBQUksRUFBRXdDLGFBQUssQ0FBQyxZQUFZO1lBQUMsRUFBSSxFQUNsRHZDO2NBQUt5QixTQUFTLEVBQUM7WUFBZSxHQUM3QnpCO2NBQU15QixTQUFTLEVBQUM7WUFBSyxFQUFRLEVBQzdCekI7Y0FBTXlCLFNBQVMsRUFBQztZQUFLLEVBQVEsRUFDN0J6QjtjQUFNeUIsU0FBUyxFQUFDO1lBQUssRUFBUSxDQUN4QixDQUNEO1VBRVIsQ0FBQztVQUFDNU87Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkY7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUVNLFNBQVVxUCxRQUFRLENBQUM7WUFBRXBDO1VBQVMsQ0FBRTtZQUNyQyxNQUFNO2NBQUVEO1lBQUssQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDbEMsTUFBTSxDQUFDdEYsUUFBUSxFQUFFaUksV0FBVyxDQUFDLEdBQUd4QyxjQUFLLENBQUN5QyxRQUFRLENBQWM1QyxLQUFLLENBQUN0RixRQUFRLElBQUksRUFBRSxDQUFDO1lBRWpGLG9CQUFTLEVBQ1IsQ0FBQ3NGLEtBQUssQ0FBQyxFQUNQLE1BQUs7Y0FDSjJDLFdBQVcsQ0FBQyxDQUFDLEdBQUczQyxLQUFLLENBQUN0RixRQUFRLENBQUMsQ0FBQztZQUNqQyxDQUFDLEVBQ0QsYUFBYSxDQUNiO1lBRUQsTUFBTXhCLE1BQU0sR0FBR3dCLFFBQVEsQ0FBQzdDLEdBQUcsQ0FBQyxDQUFDNEQsT0FBTyxFQUFFRCxDQUFDLEtBQUk7Y0FDMUMsTUFBTXFILElBQUksR0FBR3JILENBQUMsS0FBS2QsUUFBUSxDQUFDbUUsTUFBTSxHQUFHLENBQUM7Y0FFdEMsT0FBT3NCLDZCQUFDMkMsZ0JBQU87Z0JBQUNDLEdBQUcsRUFBRSxXQUFXdkgsQ0FBQyxFQUFFO2dCQUFFeUUsU0FBUyxFQUFFQSxTQUFTO2dCQUFFeEUsT0FBTyxFQUFFQSxPQUFPO2dCQUFFb0gsSUFBSSxFQUFFQTtjQUFJLEVBQUk7WUFDNUYsQ0FBQyxDQUFDO1lBRUYsT0FDQzFDLDREQUNFakgsTUFBTSxFQUNOOEcsS0FBSyxDQUFDL0ksZUFBZSxJQUFJa0osNkJBQUNxQywwQkFBZSxPQUFHLENBQzNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVUSxjQUFjLENBQUM7WUFBRXZILE9BQU87WUFBRXdILElBQUk7WUFBRUM7VUFBYSxDQUFFO1lBQzlELE1BQU07Y0FBRWxELEtBQUs7Y0FBRXBNO1lBQU0sQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFFMUMsTUFBTSxDQUFDdVAsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR2pELGNBQUssQ0FBQ3lDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEQsTUFBTSxDQUFDUyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHbkQsY0FBSyxDQUFDeUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV6RCxvQkFBUyxFQUFDLENBQUNoUCxNQUFNLENBQUMsRUFBRSxNQUFNMFAsYUFBYSxDQUFDMVAsTUFBTSxDQUFDMlAsUUFBUSxDQUFDLENBQUM7WUFFekQsTUFBTUMsUUFBUSxHQUFHLE1BQUs7Y0FDckJGLGFBQWEsQ0FBQyxLQUFLLENBQUM7Y0FDcEJGLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDZCxDQUFDO1lBQ0Qsb0JBQVMsRUFBQyxDQUFDeFAsTUFBTSxDQUFDLEVBQUU0UCxRQUFRLEVBQUUsV0FBVyxDQUFDO1lBRTFDLE1BQU1DLE1BQU0sR0FBRyxPQUFPO2NBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQ25DTixTQUFTLENBQUMsTUFBTSxDQUFDO2NBQ2pCcEQsS0FBSyxDQUFDdkYsY0FBYyxHQUFHZ0IsT0FBTztjQUM5QjdILE1BQU0sQ0FBQytQLGFBQWEsR0FBRyxDQUFDO2NBQ3hCLE1BQU0vUCxNQUFNLENBQUNnUSxJQUFJLENBQUNYLElBQUksRUFBRXhILE9BQU8sQ0FBQ3JELEVBQUUsQ0FBQztZQUNwQyxDQUFDO1lBQ0QsTUFBTXlMLE9BQU8sR0FBRyxPQUFPO2NBQUVIO1lBQU0sQ0FBRSxLQUFJO2NBQ3BDLE1BQU05UCxNQUFNLENBQUM4TCxJQUFJLEVBQUU7Y0FDbkIwRCxTQUFTLENBQUMsTUFBTSxDQUFDO2NBQ2pCRSxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxNQUFNUSxXQUFXLEdBQUcsWUFBVztjQUM5QixNQUFNbk8sVUFBVSxFQUFFNkgsU0FBUyxDQUFDdUcsU0FBUyxDQUFDQyxTQUFTLENBQUNmLElBQUksQ0FBQztjQUNyRGdCLFlBQUssQ0FBQ0MsT0FBTyxDQUFDLDZCQUE2QixDQUFDO1lBQzdDLENBQUM7WUFFRCxNQUFNQyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFO1lBQUksQ0FBRTtZQUNuQyxNQUFNQyxLQUFLLEdBQUdwRSxLQUFLLENBQUN2RixjQUFjLEVBQUVyQyxFQUFFLEtBQUtxRCxPQUFPLEVBQUVyRCxFQUFFLElBQUlpTCxVQUFVO1lBRXBFLE1BQU1uRCxJQUFJLEdBQUdrRSxLQUFLLElBQUlqQixNQUFNLEtBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNO1lBQ3pELE1BQU10QixPQUFPLEdBQUd1QyxLQUFLLElBQUlqQixNQUFNLEtBQUssTUFBTSxHQUFHVSxPQUFPLEdBQUdKLE1BQU07WUFFN0QsT0FDQ3RELDBDQUNDQTtjQUFLeUIsU0FBUyxFQUFDO1lBQWdCLEdBQzlCekIsNkJBQUNzQyxXQUFJO2NBQUNaLE9BQU8sRUFBRWlDLFdBQVc7Y0FBRTVELElBQUksRUFBQztZQUFNLEVBQUcsRUFDMUNDLDZCQUFDc0MsV0FBSTtjQUFDWixPQUFPLEVBQUVBLE9BQU87Y0FBQSxlQUFjLEtBQUs7Y0FBQzNCLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ25ELEVBQ0xnRCxhQUFhLElBQUkvQztjQUFLeUIsU0FBUyxFQUFDO1lBQWlCLEdBQUVzQixhQUFhLFlBQWMsQ0FDMUU7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREE7VUFDQTtVQUNBO1VBQ0E7VUFFTyxNQUFNbUIsWUFBWSxHQUFHLENBQUM7WUFBRTVJLE9BQU87WUFBRW9IO1VBQUksQ0FBRSxLQUFJO1lBQ2pELE1BQU15QixHQUFHLEdBQUcsV0FBVzdJLE9BQU8sQ0FBQ2xCLElBQUksRUFBRTtZQUVyQyxPQUNDNEY7Y0FBS3lCLFNBQVMsRUFBRTBDLEdBQUc7Y0FBQSxXQUFXN0ksT0FBTyxDQUFDckQ7WUFBRSxHQUN2QytIO2NBQVN5QixTQUFTLEVBQUM7WUFBb0IsR0FDdEN6Qiw2QkFBQ29FLHdCQUFXO2NBQUNoSyxJQUFJLEVBQUVrQixPQUFPLENBQUNsQjtZQUFJLEVBQUksQ0FDMUIsRUFDVjRGO2NBQVN5QixTQUFTLEVBQUM7WUFBb0IsR0FDdEN6Qiw2QkFBQ3FFLGlCQUFXO2NBQUMvSSxPQUFPLEVBQUVBO1lBQU8sRUFBSSxFQUNqQzBFLDZCQUFDc0UsbUJBQVc7Y0FBQ0MsR0FBRyxFQUFFakosT0FBTyxDQUFDdEQ7WUFBSyxFQUFJLENBQzFCLENBQ0w7VUFFUixDQUFDO1VBQUNuRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkY7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVdVIsV0FBVyxDQUFDO1lBQUVoSztVQUFJLENBQUU7WUFDbkMsTUFBTSxDQUFDb0ssU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRyxtQkFBUSxFQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNMUUsSUFBSSxHQUFHM0YsSUFBSSxLQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsWUFBWTtZQUNwRCxNQUFNc0ssU0FBUyxHQUFHbEwsdUJBQWMsQ0FBQ1MsSUFBSSxDQUFDMEssYUFBYSxFQUFFO1lBQ3JELE1BQU1DLGVBQWUsR0FBRyxNQUFNSCxZQUFZLENBQUMsSUFBSSxDQUFDO1lBRWhELE9BQ0N6RSw0REFDRTBFLFNBQVMsQ0FBQ0csUUFBUSxJQUFJekssSUFBSSxLQUFLLE1BQU0sSUFBSSxDQUFDb0ssU0FBUyxHQUNuRHhFO2NBQUs4RSxHQUFHLEVBQUMsb0JBQW9CO2NBQUNQLEdBQUcsRUFBRUcsU0FBUyxDQUFDRyxRQUFRO2NBQUVFLE9BQU8sRUFBRUg7WUFBZSxFQUFJLEdBRW5GNUUsNkJBQUNzQyxXQUFJO2NBQUNiLFNBQVMsRUFBQyxJQUFJO2NBQUMxQixJQUFJLEVBQUV3QyxhQUFLLENBQUN4QyxJQUFJLENBQUMsSUFBSUE7WUFBSSxFQUM5QyxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJBO1VBQ0E7VUFDQTtVQUNBO1VBRU0sU0FBVXNFLFdBQVcsQ0FBQztZQUFFL0ksT0FBTztZQUFFMEo7VUFBUSxDQUFFO1lBQ2hELE1BQU07Y0FBRW5GLEtBQUs7Y0FBRXBFLFFBQVE7Y0FBRWhJO1lBQU0sQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDcEQsTUFBTXFQLElBQUksR0FBR3hILE9BQU8sRUFBRW5CLE9BQU8sSUFBSSxFQUFFO1lBQ25DLE1BQU1vSCxHQUFHLEdBQUd2QixjQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUIsTUFBTWdGLGVBQWUsR0FBRyxNQUN2QjFELEdBQUcsQ0FBQ25CLE9BQU8sQ0FBQzhFLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDN0ksT0FBTyxDQUFDOEksT0FBTyxJQUFJQSxPQUFPLENBQUNqRSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVyRyxvQkFBUyxFQUFDLENBQUMzTixNQUFNLENBQUMsRUFBRXdSLGVBQWUsRUFBRSxXQUFXLENBQUM7WUFDakQsSUFBSSxPQUFPbkMsSUFBSSxLQUFLLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFekMsTUFBTXNDLFdBQVcsR0FBRy9HLEtBQUssSUFBS3dCLEtBQUssQ0FBQ3ZGLGNBQWMsR0FBR2dCLE9BQVE7WUFFN0QsTUFBTStKLFdBQVcsR0FBRy9KLE9BQU8sSUFBSUEsT0FBTyxDQUFDbEIsSUFBSSxLQUFLLE1BQU0sSUFBSXFCLFFBQVE7WUFDbEUsTUFBTTZKLGFBQWEsR0FBR2hLLE9BQU8sQ0FBQ3JELEVBQUUsS0FBSzRILEtBQUssQ0FBQ3ZGLGNBQWMsRUFBRXJDLEVBQUUsSUFBSW9OLFdBQVc7WUFFNUU7WUFDQSxPQUNDckY7Y0FBS3lCLFNBQVMsRUFBQyx5QkFBeUI7Y0FBQ0YsR0FBRyxFQUFFQTtZQUFHLEdBQ2hEdkIsNkJBQUN1RixrQkFBUTtjQUNScEwsT0FBTyxFQUFFMkksSUFBSTtjQUNia0MsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCL00sRUFBRSxFQUFFcUQsT0FBTyxDQUFDckQsRUFBRTtjQUNkbU4sV0FBVyxFQUFFQSxXQUFXO2NBQ3hCM1IsTUFBTSxFQUFFQSxNQUFNO2NBQ2RnSSxRQUFRLEVBQUU2SixhQUFhLElBQUlEO1lBQVcsRUFDckMsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQTtVQUdPLE1BQU1HLGtCQUFrQixHQUFHeEYsY0FBSyxDQUFDeUYsYUFBYSxDQUFDLEVBQXlCLENBQUM7VUFBQzVTO1VBQzFFLE1BQU02UyxxQkFBcUIsR0FBRyxNQUFNMUYsY0FBSyxDQUFDMkYsVUFBVSxDQUFDSCxrQkFBa0IsQ0FBQztVQUFDM1M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSmhGO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRUEsU0FBUytTLGdCQUFnQixDQUFDO1lBQUU5RixTQUFTO1lBQUV4RSxPQUFPO1lBQUVvSDtVQUFJLENBQUU7WUFDckQsTUFBTSxDQUFDdkksT0FBTyxFQUFFMEwsVUFBVSxDQUFDLEdBQUc3RixjQUFLLENBQUN5QyxRQUFRLENBQVNuSCxPQUFPLEVBQUVuQixPQUFPLElBQUksRUFBRSxDQUFDO1lBQzVFOzs7WUFHQSxNQUFNLENBQUMyTCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHL0YsY0FBSyxDQUFDeUMsUUFBUSxDQUFVLElBQUksQ0FBQztZQUM3RCxNQUFNMEIsR0FBRyxHQUFHLFdBQVc3SSxPQUFPLENBQUNsQixJQUFJLEVBQUU7WUFDckMsTUFBTTJJLGFBQWEsR0FBR3pILE9BQU8sQ0FBQ2xCLElBQUksS0FBSyxRQUFRLEdBQUdrQixPQUFPLENBQUN0QyxLQUFLLEVBQUVnTixXQUFXLEdBQUcsSUFBSTtZQUNuRixNQUFNO2NBQUVuRztZQUFLLENBQUUsR0FBRywyQkFBYyxHQUFFO1lBRWxDLE1BQU1NLGNBQWMsR0FBRyxNQUFLO2NBQzNCTCxTQUFTLENBQUNNLE9BQU8sRUFBRUMsY0FBYyxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsS0FBSztnQkFBRUMsUUFBUSxFQUFFO2NBQVEsQ0FBRSxDQUFDO1lBQ3hFLENBQUM7WUFFRCxvQkFBUyxFQUNSLENBQUNWLEtBQUssQ0FBQyxFQUNQLE1BQUs7Y0FDSmtHLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJGLFVBQVUsQ0FBQ3ZLLE9BQU8sQ0FBQ25CLE9BQU8sQ0FBQztjQUMzQmdHLGNBQWMsRUFBRTtZQUNqQixDQUFDLEVBQ0QsV0FBVzdFLE9BQU8sQ0FBQ3JELEVBQUUsVUFBVSxDQUMvQjtZQUNELG9CQUFTLEVBQUMsQ0FBQzRILEtBQUssQ0FBQyxFQUFFLE1BQU1rRyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBV3pLLE9BQU8sQ0FBQ3JELEVBQUUsV0FBVyxDQUFDO1lBQzdFLE1BQU1nTyxNQUFNLEdBQUdqRyxjQUFLLENBQUNrRyxPQUFPLENBQUMsTUFBSztjQUNqQyxPQUFPL0wsT0FBTyxDQUNaZ00sS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQ3pCQyxNQUFNLENBQUM5RixLQUFLLElBQUlBLEtBQUssQ0FBQytGLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUNwQzNPLEdBQUcsQ0FBQzRJLEtBQUssS0FBSztnQkFDZG5HLE9BQU8sRUFBRW1HLEtBQUs7Z0JBQ2RnRyxNQUFNLEVBQUVoRyxLQUFLLENBQUNpRyxVQUFVLENBQUMsS0FBSztlQUM5QixDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUUsQ0FBQ1QsUUFBUSxDQUFDLENBQUM7WUFDZCxNQUFNVSxlQUFlLEdBQUd4RyxjQUFLLENBQUNrRyxPQUFPLENBQUMsTUFBSztjQUMxQyxPQUFPRCxNQUFNLENBQ1hHLE1BQU0sQ0FBQ0ssSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ0gsTUFBTSxDQUFDLENBQzVCNU8sR0FBRyxDQUFDK08sSUFBSSxJQUFJQSxJQUFJLENBQUN0TSxPQUFPLENBQUMsQ0FDekJyQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1osQ0FBQyxFQUFFLENBQUNnTyxRQUFRLENBQUMsQ0FBQztZQUVkLElBQUl4SyxPQUFPLENBQUM1RyxJQUFJLEtBQUssT0FBTyxFQUFFLE9BQU9zTCw2QkFBQ2tFLDBCQUFZO2NBQUM1SSxPQUFPLEVBQUVBLE9BQU87Y0FBRW9ILElBQUksRUFBRUE7WUFBSSxFQUFJO1lBRW5GLE9BQ0MxQztjQUFLeUIsU0FBUyxFQUFFMEMsR0FBRztjQUFBLFdBQVc3SSxPQUFPLENBQUNyRDtZQUFFLEdBQ3ZDK0g7Y0FBU3lCLFNBQVMsRUFBQztZQUFvQixHQUN0Q3pCLDZCQUFDb0Usd0JBQVc7Y0FBQ2hLLElBQUksRUFBRWtCLE9BQU8sQ0FBQ2xCO1lBQUksRUFBSSxDQUMxQixFQUNWNEY7Y0FBU3lCLFNBQVMsRUFBQztZQUFvQixHQUN0Q3pCLDZCQUFDcUUsaUJBQVc7Y0FBQ1csUUFBUSxFQUFFYyxRQUFRO2NBQUV4SyxPQUFPLEVBQUVBO1lBQU8sRUFBSSxDQUM1QyxFQUNWMEU7Y0FBU3lCLFNBQVMsRUFBQztZQUFrQixHQUNwQ3pCLDZCQUFDNkMsdUJBQWM7Y0FBQ3ZILE9BQU8sRUFBRUEsT0FBTztjQUFFd0gsSUFBSSxFQUFFMEQsZUFBZTtjQUFFekQsYUFBYSxFQUFFQTtZQUFhLEVBQUksQ0FDaEYsQ0FDTDtVQUVSO1VBRU8sTUFBTUosT0FBTyxHQUFHM0MsY0FBSyxDQUFDMEcsSUFBSSxDQUFDZCxnQkFBZ0IsQ0FBQztVQUFDL1M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEVwRDtVQUVPLGFBSFA7O1VBR21CLFNBQVV5UixXQUFXLENBQUM7WUFBRUM7VUFBRyxDQUFFO1lBQy9DLElBQUksQ0FBQ0EsR0FBRyxFQUFFO2NBQ1RuUCxPQUFPLENBQUNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztjQUNwQyxPQUFPLElBQUk7O1lBR1prUCxHQUFHLEdBQUdvQyxHQUFHLENBQUNDLGVBQWUsQ0FBQ3JDLEdBQUcsQ0FBQztZQUM5QixNQUFNaEQsR0FBRyxHQUFHdkIsY0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCRCxjQUFLLENBQUNlLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU0zSyxNQUFNLEdBQUdtTCxHQUFHLENBQUNuQixPQUFPO2NBQzFCaEssTUFBTSxDQUFDMEksZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsTUFBSztnQkFDOUMsSUFBSTFJLE1BQU0sQ0FBQ3lRLFFBQVEsS0FBS0MsUUFBUSxFQUFFO2tCQUNqQzFRLE1BQU0sQ0FBQzJRLFdBQVcsR0FBRyxLQUFLO2tCQUMxQjNRLE1BQU0sQ0FBQzRRLFlBQVksR0FBRyxNQUFLO29CQUMxQjVRLE1BQU0sQ0FBQzRRLFlBQVksR0FBRyxJQUFJO29CQUMxQjVRLE1BQU0sQ0FBQzJRLFdBQVcsR0FBRyxDQUFDO2tCQUN2QixDQUFDOztjQUVILENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDeEMsR0FBRyxDQUFDLENBQUM7WUFFVCxJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPLElBQUk7WUFFckIsT0FDQ3ZFO2NBQUt5QixTQUFTLEVBQUM7WUFBYyxHQUM1QnpCO2NBQU9pSCxRQUFRO2NBQUNDLE9BQU8sRUFBQztZQUFVLEdBQ2pDbEg7Y0FBUXVFLEdBQUcsRUFBRUEsR0FBRztjQUFFN1AsSUFBSSxFQUFDLFdBQVc7Y0FBQzZNLEdBQUcsRUFBRUE7WUFBRyxFQUFJLHFEQUV4QyxDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBO1VBQ0E7VUFFQTtVQUVNLFNBQVU0RixZQUFZO1lBQzNCLE1BQU07Y0FBRXRIO1lBQUssQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDbEMsT0FDQ0c7Y0FBS3lCLFNBQVMsRUFBQztZQUFnQixHQUM5QnpCLDZCQUFDb0gsNkJBQWlCO2NBQUNDLEtBQUssRUFBRXJIO2dCQUFLeUIsU0FBUyxFQUFDO2NBQWdCO1lBQUcsR0FDM0R6QjtjQUFLeUIsU0FBUyxFQUFDO1lBQWMsR0FDNUJ6QjtjQUFLeUIsU0FBUyxFQUFDO1lBQWlCLEVBQUcsRUFDbkN6QjtjQUFLeUIsU0FBUyxFQUFDO1lBQWlCLEVBQUcsRUFDbkN6QjtjQUFLeUIsU0FBUyxFQUFDO1lBQWlCLEVBQUcsRUFDbkN6QjtjQUFLeUIsU0FBUyxFQUFDO1lBQWlCLEVBQUcsQ0FDOUIsQ0FDYSxFQUNwQnpCO2NBQUt5QixTQUFTLEVBQUM7WUFBTSxHQUNuQm5LLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO2NBQUVtSCxNQUFNLEVBQUU7WUFBQyxDQUFFLENBQUMsQ0FBQ2hILEdBQUcsQ0FBQyxDQUFDNFAsQ0FBQyxFQUFFak0sQ0FBQyxLQUNuQzJFO2NBQUs0QyxHQUFHLEVBQUUsWUFBWXZILENBQUMsRUFBRTtjQUFFb0csU0FBUyxFQUFDO1lBQWtCLEVBQ3ZELENBQUMsQ0FDRyxFQUNOekI7Y0FBS3lCLFNBQVMsRUFBQztZQUFNLEVBQU8sQ0FDdkI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkE7VUFXTyxNQUFNOEYsV0FBVyxHQUFHdkgsY0FBSyxDQUFDeUYsYUFBYSxDQUFDLEVBQWtCLENBQUM7VUFBQzVTO1VBQzVELE1BQU0yVSxjQUFjLEdBQUcsTUFBTXhILGNBQUssQ0FBQzJGLFVBQVUsQ0FBQzRCLFdBQVcsQ0FBQztVQUFDMVU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWmxFO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVb1AsTUFBTTtZQUNyQixNQUFNO2NBQUVwQztZQUFLLENBQUUsR0FBRywyQkFBYyxHQUFFO1lBQ2xDLE1BQU0sQ0FBQzRILE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUcsbUJBQVEsRUFBQyxFQUFFLENBQUM7WUFDeEMsTUFBTSxDQUFDak0sUUFBUSxFQUFFa00sV0FBVyxDQUFDLEdBQUcsbUJBQVEsRUFBQzlILEtBQUssQ0FBQ3BFLFFBQVEsQ0FBQztZQUN4RCxNQUFNbU0sb0JBQW9CLEdBQUcsTUFBSztjQUNqQy9ILEtBQUssQ0FBQ3BFLFFBQVEsR0FBRyxDQUFDb0UsS0FBSyxDQUFDcEUsUUFBUTtZQUNqQyxDQUFDO1lBQ0Qsb0JBQVMsRUFBQyxDQUFDb0UsS0FBSyxDQUFDLEVBQUUsTUFBTThILFdBQVcsQ0FBQzlILEtBQUssQ0FBQ3BFLFFBQVEsQ0FBQyxDQUFDO1lBRXJELE1BQU1vTSxnQkFBZ0IsR0FBRzNSLENBQUMsSUFBRztjQUM1QkEsQ0FBQyxDQUFDNFIsY0FBYyxFQUFFO2NBQ2xCSixTQUFTLENBQUN4UixDQUFDLENBQUNFLE1BQU0sQ0FBQ3JELEtBQUssQ0FBQztZQUMxQixDQUFDO1lBRUQsT0FDQ2lOLDZCQUFDb0gsNkJBQWlCO2NBQUNDLEtBQUssRUFBRXhILEtBQUssQ0FBQ2pKLElBQUksQ0FBQ3RDLElBQUksSUFBSTtZQUFVLEdBQ3REMEw7Y0FBS3lCLFNBQVMsRUFBQztZQUFjLEdBQzVCekI7Y0FBS3lCLFNBQVMsRUFBQztZQUF5QixHQUN2Q3pCLDZCQUFDc0MsV0FBSTtjQUFDdkMsSUFBSSxFQUFDO1lBQVEsRUFBRyxFQUN0QkMsMkNBQU9ILEtBQUssQ0FBQzFFLGNBQWMsQ0FBUSxDQUM5QixFQUNONkU7Y0FBS3lCLFNBQVMsRUFBQztZQUF5QixHQUN2Q3pCLDZCQUFDc0MsV0FBSTtjQUFDdkMsSUFBSSxFQUFDO1lBQVEsRUFBRyxFQUN0QkMsMkNBQU9ILEtBQUssQ0FBQzdFLGFBQWEsQ0FBUSxDQUM3QixFQUNOZ0YsNkJBQUMrSCxpQkFBSztjQUNMelQsSUFBSSxFQUFDLE1BQU07Y0FDWDBULEtBQUssRUFBQyxnQkFBZ0I7Y0FDdEJqVixLQUFLLEVBQUUwVSxNQUFNO2NBQ2JwRSxRQUFRLEVBQUV3RSxnQkFBZ0I7Y0FDMUJJLFFBQVE7Y0FDUnZULElBQUksRUFBQztZQUFRLEVBQ1osRUFDRnNMLDZCQUFDc0MsV0FBSTtjQUNKdkMsSUFBSSxFQUFFdEUsUUFBUSxHQUFHLFNBQVMsR0FBRyxhQUFhO2NBQzFDZ0csU0FBUyxFQUFDLFlBQVk7Y0FDdEJDLE9BQU8sRUFBRWtHO1lBQW9CLEVBQzVCLENBQ0csQ0FDYTtVQUV0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVNLFNBQVV2VixJQUFJLENBQUM7WUFBRXdOO1VBQUssQ0FBRTtZQUM3QixNQUFNLENBQUNqTSxRQUFRLEVBQUVzVSxXQUFXLENBQUMsR0FBR2xJLGNBQUssQ0FBQ3lDLFFBQVEsQ0FBQzVDLEtBQUssQ0FBQ2pNLFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUNZLEtBQUssRUFBRTJULFFBQVEsQ0FBQyxHQUFHbkksY0FBSyxDQUFDeUMsUUFBUSxDQUFDNUMsS0FBSyxDQUFDckwsS0FBSyxDQUFDO1lBRXJELE1BQU0sQ0FBQzRULFVBQVUsRUFBRUMsS0FBSyxDQUFDLEdBQUcsb0JBQVEsRUFBQ0Msc0JBQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBRXRELG9CQUFTLEVBQUMsQ0FBQzFJLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJxSSxXQUFXLENBQUNySSxLQUFLLENBQUNqTSxRQUFRLENBQUM7Y0FDM0J1VSxRQUFRLENBQUN0SSxLQUFLLENBQUNyTCxLQUFLLENBQUM7WUFDdEIsQ0FBQyxDQUFDO1lBRUYsTUFBTWdVLFlBQVksR0FBRztjQUNwQjNJLEtBQUs7Y0FDTHdJLEtBQUs7Y0FDTDVNLFFBQVEsRUFBRW9FLEtBQUssQ0FBQ3BFLFFBQVE7Y0FDeEJsQixRQUFRLEVBQUVzRixLQUFLLENBQUN0RixRQUFRO2NBQ3hCOUcsTUFBTSxFQUFFb00sS0FBSyxDQUFDakYsWUFBWSxDQUFDbkg7YUFDM0I7WUFDRCxNQUFNZ1YsT0FBTyxHQUFHLENBQUM1SSxLQUFLLENBQUMzRSxRQUFRLEdBQUdRLFVBQUksR0FBR2dOLHNCQUFZO1lBQ3JELE1BQU1yVyxJQUFJLEdBQUdtQyxLQUFLLElBQUk0VCxVQUFVLEdBQUdLLE9BQU8sR0FBR3RCLHNCQUFZO1lBRXpELE9BQ0NuSCw2QkFBQ3VILG9CQUFXLENBQUNvQixRQUFRO2NBQUM1VixLQUFLLEVBQUV5VjtZQUFZLEdBQ3hDeEksNkJBQUMzTixJQUFJLE9BQUcsQ0FDYztVQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0E7VUFTTyxNQUFNdVcsWUFBWSxHQUFHNUksY0FBSyxDQUFDeUYsYUFBYSxDQUFDLElBQXFCLENBQUM7VUFBQzVTO1VBQ2hFLE1BQU1nVyxlQUFlLEdBQUcsTUFBTTdJLGNBQUssQ0FBQzJGLFVBQVUsQ0FBQ2lELFlBQVksQ0FBQztVQUFDL1Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVnBFO1VBQ0E7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU87VUFBVyxNQUFNdVAsU0FBUyxHQUFHLENBQUM7WUFBRXZDLEtBQUs7WUFBRWlKLFNBQVMsR0FBRztVQUFLLENBQUUsS0FBSTtZQUNwRSxNQUFNLENBQUNwUyxTQUFTLEVBQUVxUyxZQUFZLENBQUMsR0FBRy9JLGNBQUssQ0FBQ3lDLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDaEUsTUFBTSxDQUFDN08sUUFBUSxFQUFFc1UsV0FBVyxDQUFDLEdBQUdsSSxjQUFLLENBQUN5QyxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQzlELE1BQU0sQ0FBQ3VHLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdqSixjQUFLLENBQUN5QyxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQzVELE1BQU15RyxXQUFXLEdBQUdsSixjQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDdEMsTUFBTSxDQUFDNkMsSUFBSSxFQUFFcUcsT0FBTyxDQUFDLEdBQUduSixjQUFLLENBQUN5QyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRTFDLG9CQUFTLEVBQUMsQ0FBQzVDLEtBQUssQ0FBQyxFQUFFLE1BQU1vSixVQUFVLENBQUNwSixLQUFLLENBQUMvSSxlQUFlLENBQUMsQ0FBQztZQUMzRCxNQUFNc1MsaUJBQWlCLEdBQUdsVCxDQUFDLElBQUc7Y0FDN0IsTUFBTTtnQkFBRW5EO2NBQUssQ0FBRSxHQUFHbUQsQ0FBQyxDQUFDRSxNQUFNO2NBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUVqQyxTQUFTLENBQUMsQ0FBQ3dJLFFBQVEsQ0FBQzVKLEtBQUssQ0FBQ3NXLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2NBQy9ERixPQUFPLENBQUNwVyxLQUFLLENBQUM7WUFDZixDQUFDO1lBRUQsb0JBQVMsRUFBQyxNQUFLO2NBQ2QsTUFBTXFELE1BQU0sR0FBRzhTLFdBQVcsQ0FBQzlJLE9BQU87Y0FDbENoSyxNQUFNLENBQUNrVCxLQUFLLENBQUNDLE1BQU0sR0FBRyxNQUFNO2NBQzVCblQsTUFBTSxDQUFDa1QsS0FBSyxDQUFDQyxNQUFNLEdBQUd6RyxJQUFJLENBQUNwRSxNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBR3RJLE1BQU0sQ0FBQ29ULFlBQVksR0FBRyxJQUFJO2NBRTVFLElBQUksQ0FBQyxXQUFXLEVBQUVyVixTQUFTLENBQUMsQ0FBQ3dJLFFBQVEsQ0FBQ21HLElBQUksQ0FBQ3VHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNuRSxDQUFDLEVBQUUsQ0FBQ3ZHLElBQUksQ0FBQyxDQUFDO1lBQ1Ysb0JBQVMsRUFDUixDQUFDakQsS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKckssVUFBVSxDQUFDMEssVUFBVSxDQUFDLE1BQU1nSixXQUFXLENBQUM5SSxPQUFPLENBQUNxSixLQUFLLEVBQUUsRUFBRSxHQUFHLENBQUM7Y0FDN0R2QixXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUMsRUFDRCxnQkFBZ0IsQ0FDaEI7WUFDRCxNQUFNd0IsYUFBYSxHQUFHeFQsQ0FBQyxJQUFHO2NBQ3pCLElBQUlBLENBQUMsQ0FBQzBNLEdBQUcsS0FBSyxPQUFPLEVBQUU7Y0FDdkIsTUFBTStHLEVBQUUsR0FBR0MsU0FBUyxJQUFJQSxTQUFTLEdBQUcsSUFBSTtjQUN4QyxNQUFNN1csS0FBSyxHQUFHbUQsQ0FBQyxDQUFDRSxNQUFNLENBQUNyRCxLQUFLLENBQUNzVyxVQUFVLENBQUMsSUFBSSxDQUFDO2NBQzdDLElBQUksQ0FBQyxFQUFFLEVBQUVsVixTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUN3SSxRQUFRLENBQUM1SixLQUFLLENBQUMsRUFBRTtjQUMzQ21ELENBQUMsQ0FBQzJULFFBQVEsR0FBR1YsT0FBTyxDQUFDUSxFQUFFLENBQUMsR0FBR0csVUFBVSxFQUFFO1lBQ3hDLENBQUM7WUFFRCxNQUFNOUYsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRTtZQUFLLENBQUU7WUFDcEMsTUFBTTtjQUNMcEosWUFBWTtjQUNaQSxZQUFZLEVBQUU7Z0JBQUUxSDtjQUFRO1lBQUUsQ0FDMUIsR0FBRzJNLEtBQUs7WUFFVCxNQUFNaEosU0FBUyxHQUFHLE1BQU13SCxLQUFLLElBQUc7Y0FDL0I2SixXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCN0osS0FBSyxDQUFDeUosY0FBYyxFQUFFO2NBQ3RCLE1BQU05UCxLQUFLLEdBQUcsTUFBTTlFLFFBQVEsQ0FBQ3FNLElBQUksRUFBRTtjQUVuQyxNQUFNa0gsSUFBSSxHQUFHN0wsWUFBWSxDQUFDbkUsYUFBYSxDQUFDdUIsS0FBSyxFQUFFOUUsUUFBUSxDQUFDeUQsYUFBYSxDQUFDO2NBQ3RFb1MsWUFBWSxDQUFDLENBQUNyUyxTQUFTLENBQUM7Y0FDeEJ3UixXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUM7WUFFRCxNQUFNNEIsVUFBVSxHQUFHLFlBQVc7Y0FDN0JYLE9BQU8sQ0FBQyxFQUFFLENBQUM7Y0FDWGpCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakJySSxLQUFLLENBQUNwRCxXQUFXLENBQUNxRyxJQUFJLENBQUM7WUFDeEIsQ0FBQztZQUNELE1BQU1pSCxRQUFRLEdBQUcsQ0FBQyxDQUFDakgsSUFBSSxDQUFDcEUsTUFBTSxHQUFHb0wsVUFBVSxHQUFHalQsU0FBUztZQUV2RCxJQUFJLENBQUMsRUFBRSxFQUFFMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDd0ksUUFBUSxDQUFDbUcsSUFBSSxDQUFDdUcsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUN2RyxJQUFJLENBQUN1RCxJQUFJLEVBQUUsQ0FBQzNILE1BQU0sRUFBRXNGLFFBQVEsQ0FBQ0EsUUFBUSxHQUFHLElBQUk7WUFDOUcsTUFBTWdHLGdCQUFnQixHQUFHO2NBQUVoRyxRQUFRLEVBQUVwUSxRQUFRLElBQUk4QyxTQUFTLElBQUlzUyxPQUFPLElBQUlGO1lBQVMsQ0FBRTtZQUNwRixNQUFNM0UsR0FBRyxHQUFHLG1CQUFtQjZFLE9BQU8sSUFBSUYsU0FBUyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUU7WUFDdEU7WUFDQSxNQUFNO2NBQUVtQjtZQUFNLENBQUUsR0FBR2xWLGVBQU0sQ0FBQ0osTUFBTSxDQUFDSSxNQUFNO1lBRXZDLE9BQ0NpTDtjQUFLeUIsU0FBUyxFQUFFMEM7WUFBRyxHQUNsQm5FLDZCQUFDNEkscUJBQVksQ0FBQ0QsUUFBUTtjQUFDNVYsS0FBSyxFQUFFO2dCQUFFOE0sS0FBSztnQkFBRWtLLFFBQVE7Z0JBQUU3VyxRQUFRO2dCQUFFNlYsWUFBWTtnQkFBRXJTO2NBQVM7WUFBRSxHQUNsRnVULE1BQU0sSUFBSWpLLDZCQUFDa0ssa0JBQVc7Y0FBQ3RULElBQUksRUFBRWlKLEtBQUssQ0FBQ2pKO1lBQUksRUFBSSxFQUM1Q29KLDZCQUFDbUssVUFBSTtjQUFDSixRQUFRLEVBQUVBLFFBQVE7Y0FBRXRJLFNBQVMsRUFBQztZQUFpQixHQUNwRHpCO2NBQUEsR0FDS2dLLGdCQUFnQjtjQUNwQkksSUFBSSxFQUFFLENBQUM7Y0FDUHJYLEtBQUssRUFBRStQLElBQUk7Y0FDWE8sUUFBUSxFQUFFK0YsaUJBQWlCO2NBQzNCaUIsU0FBUyxFQUFFWCxhQUFhO2NBQ3hCWSxTQUFTLEVBQUUsSUFBSTtjQUNmN0ksU0FBUyxFQUFDLGlCQUFpQjtjQUMzQkYsR0FBRyxFQUFFMkg7WUFBVyxFQUNmLENBQ0ksRUFDUGxKO2NBQU15QixTQUFTLEVBQUU7WUFBaUMsR0FDaEQsQ0FBQyxDQUFDcUIsSUFBSSxDQUFDcEUsTUFBTSxHQUNic0IsNkJBQUN1SyxZQUFNO2NBQ054SyxJQUFJLEVBQUMsWUFBWTtjQUNqQjJCLE9BQU8sRUFBRW9JLFVBQVU7Y0FDbkI5RixRQUFRLEVBQUVBLFFBQVEsQ0FBQ0EsUUFBUSxJQUFJbkUsS0FBSyxDQUFDL0k7WUFBZSxFQUNuRCxHQUVGa0osNkJBQUN3SywwQkFBZTtjQUFDM0ssS0FBSyxFQUFFQSxLQUFLO2NBQUVtRSxRQUFRLEVBQUV0TixTQUFTLElBQUltSixLQUFLLENBQUMvSTtZQUFlLEVBQzNFLENBQ0ssQ0FDZ0IsQ0FDbkI7VUFFUixDQUFDO1VBQUNqRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6R0Y7VUFDQTtVQUNBO1VBQ0E7VUFFTyxNQUFNNFgsTUFBTSxHQUFHLE1BQUs7WUFDMUIsTUFBTTtjQUFFVixRQUFRO2NBQUU3VyxRQUFRO2NBQUU2VjtZQUFZLENBQUUsR0FBRyw0QkFBZSxHQUFFO1lBRTlELE1BQU0yQixNQUFNLEdBQUcsTUFBTXJNLEtBQUssSUFBRztjQUM1QkEsS0FBSyxDQUFDeUosY0FBYyxFQUFFO2NBQ3RCLE1BQU01VSxRQUFRLENBQUNxTSxJQUFJLEVBQUU7Y0FDckJ3SixZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFDRCxPQUNDL0k7Y0FBS3lCLFNBQVMsRUFBQztZQUE2QixHQUMzQ3pCLDZCQUFDc0IsaUJBQVU7Y0FBQ0csU0FBUyxFQUFDLFFBQVE7Y0FBQzFCLElBQUksRUFBQyxRQUFRO2NBQUMyQixPQUFPLEVBQUVnSjtZQUFNLEVBQUksRUFDaEUxSyw2QkFBQzJLLFlBQUs7Y0FBQzNILE1BQU0sRUFBQztZQUFPLEVBQUcsRUFDeEJoRCw2QkFBQ3NCLGlCQUFVO2NBQUN2QixJQUFJLEVBQUMsTUFBTTtjQUFDMEIsU0FBUyxFQUFDLFFBQVE7Y0FBQ0QsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsT0FBTyxFQUFFcUk7WUFBUSxFQUFJLENBQzdFO1VBRVIsQ0FBQztVQUFDbFg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJGO1VBQ0E7VUFDQTtVQUNBO1VBRU87VUFBVyxNQUFNMlgsZUFBZSxHQUFHLENBQUM7WUFBRTNLLEtBQUssRUFBRTtjQUFFakY7WUFBWSxDQUFFO1lBQUVvSjtVQUFRLENBQUUsS0FBSTtZQUNuRixNQUFNO2NBQUU5USxRQUFRO2NBQUV3RCxTQUFTO2NBQUVxUztZQUFZLENBQUUsR0FBRyw0QkFBZSxHQUFFO1lBRS9ELE1BQU02QixVQUFVLEdBQUd2TSxLQUFLLElBQUc7Y0FDMUJBLEtBQUssQ0FBQ3lKLGNBQWMsRUFBRTtjQUN0QjVVLFFBQVEsQ0FBQ2lNLE1BQU0sRUFBRTtjQUNqQjRKLFlBQVksQ0FBQyxDQUFDclMsU0FBUyxDQUFDO1lBQ3pCLENBQUM7WUFFRCxJQUFJQSxTQUFTLEVBQUUsT0FBT3NKLDZCQUFDeUssY0FBTSxPQUFHO1lBRWhDLE9BQU96Syw2QkFBQ3VLLFlBQU07Y0FBQ3hLLElBQUksRUFBQyxLQUFLO2NBQUMyQixPQUFPLEVBQUVrSixVQUFVO2NBQUU1RyxRQUFRLEVBQUVBO1lBQVEsRUFBSTtVQUN0RSxDQUFDO1VBQUNuUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkY7VUFDQTtVQUNBO1VBQ0E7VUFFTyxNQUFNZ1ksTUFBTSxHQUFHLENBQUM7WUFBRWpVLElBQUk7WUFBRWtVO1VBQVUsQ0FBRSxLQUFJO1lBQzlDLE1BQU0sQ0FBQy9YLEtBQUssRUFBRWdZLFFBQVEsQ0FBQyxHQUFHL0ssY0FBSyxDQUFDeUMsUUFBUSxDQUFDN0wsSUFBSSxFQUFFcVQsTUFBTSxDQUFDO1lBQ3RELE1BQU0sQ0FBQ3BXLEtBQUssRUFBRW1YLFFBQVEsQ0FBQyxHQUFHaEwsY0FBSyxDQUFDeUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUN3SSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHbEwsY0FBSyxDQUFDeUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNO2NBQUU0RjtZQUFLLENBQUUsR0FBRywyQkFBYyxHQUFFO1lBRWxDLFNBQVM4QyxZQUFZLENBQUM5TSxLQUFLO2NBQzFCLE1BQU07Z0JBQUV0TCxLQUFLLEVBQUVxWTtjQUFhLENBQUUsR0FBRy9NLEtBQUssQ0FBQ2pJLE1BQU07Y0FDN0MyVSxRQUFRLENBQUNLLGFBQWEsQ0FBQztZQUN4QjtZQUVBLFNBQVNDLFdBQVc7Y0FDbkJMLFFBQVEsQ0FBQyxLQUFLLENBQUM7Y0FDZkUsVUFBVSxDQUFDLEtBQUssQ0FBQztjQUNqQkgsUUFBUSxDQUFDblUsSUFBSSxFQUFFcVQsTUFBTSxDQUFDO2NBQ3RCYSxVQUFVLEVBQUU7WUFDYjtZQUVBLE1BQU1RLFlBQVksR0FBRyxNQUFNak4sS0FBSyxJQUFHO2NBQ2xDQSxLQUFLLENBQUN5SixjQUFjLEVBQUU7Y0FDdEJvRCxVQUFVLENBQUMsSUFBSSxDQUFDO2NBQ2hCLE1BQU0xUyxRQUFRLEdBQUcsTUFBTTVCLElBQUksQ0FBQzJVLE9BQU8sQ0FBQztnQkFBRXRCLE1BQU0sRUFBRWxYO2NBQUssQ0FBRSxDQUFDO2NBQ3RELElBQUksQ0FBQ3lGLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFc1MsUUFBUSxDQUFDeFMsUUFBUSxDQUFDM0UsS0FBSyxDQUFDO2NBRTlDaVEsWUFBSyxDQUFDQyxPQUFPLENBQUNzRSxLQUFLLENBQUM0QixNQUFNLENBQUNsRyxPQUFPLENBQUM7Y0FDbkNzSCxXQUFXLEVBQUU7WUFDZCxDQUFDO1lBRUQsT0FDQ3JMLDZCQUFDbUssVUFBSTtjQUFDSixRQUFRLEVBQUV1QixZQUFZO2NBQUU3SixTQUFTLEVBQUM7WUFBYSxHQUNuRDVOLEtBQUssSUFBSW1NO2NBQUt5QixTQUFTLEVBQUM7WUFBdUIsR0FBRTVOLEtBQUssQ0FBTyxFQUM5RG1NLDZCQUFDd0wsY0FBUTtjQUFDcEIsSUFBSSxFQUFFLENBQUM7Y0FBRXJYLEtBQUssRUFBRUEsS0FBSztjQUFFMFksV0FBVyxFQUFDLHdCQUF3QjtjQUFDcEksUUFBUSxFQUFFOEg7WUFBWSxFQUFJLEVBQ2hHbkwsNkNBQ0NBLDZCQUFDdUssWUFBTTtjQUFDeEssSUFBSSxFQUFDLGNBQWM7Y0FBQ2lJLEtBQUssRUFBQyxRQUFRO2NBQUN4RyxPQUFPLEVBQUMsY0FBYztjQUFDRSxPQUFPLEVBQUUySjtZQUFXLEVBQUksRUFDMUZyTCw2QkFBQ3VLLFlBQU07Y0FBQzdWLElBQUksRUFBQyxRQUFRO2NBQUNxTCxJQUFJLEVBQUMsTUFBTTtjQUFDMkIsT0FBTyxFQUFFNEosWUFBWTtjQUFFdEQsS0FBSyxFQUFDLFFBQVE7Y0FBQ2lELE9BQU8sRUFBRUE7WUFBTyxFQUFJLENBQ3BGLENBQ0g7VUFFVCxDQUFDO1VBQUNwWTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0Y7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVPO1VBQVcsTUFBTXFYLFdBQVcsR0FBRyxDQUFDO1lBQUV0VDtVQUFJLENBQUUsS0FBSTtZQUNsRCxNQUFNOFUsU0FBUyxHQUFHMUwsY0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3BDLE1BQU07Y0FDTG9JLEtBQUssRUFBRTtnQkFBRXNELFNBQVMsRUFBRXREO2NBQUs7WUFBRSxDQUMzQixHQUFHLDJCQUFjLEdBQUU7WUFDcEIsTUFBTXVELFNBQVMsR0FBRyxNQUFNRixTQUFTLENBQUN0TCxPQUFPLENBQUN5TCxTQUFTLEVBQUU7WUFDckQsTUFBTWYsVUFBVSxHQUFHLE1BQU1ZLFNBQVMsQ0FBQ3RMLE9BQU8sQ0FBQzBMLEtBQUssRUFBRTtZQUVsRCxPQUNDOUw7Y0FBS3lCLFNBQVMsRUFBRTtZQUFnQyxHQUMvQ3pCLDZCQUFDdUssYUFBTTtjQUFDeEssSUFBSSxFQUFDLE1BQU07Y0FBQzJCLE9BQU8sRUFBRWtLLFNBQVM7Y0FBRUcsSUFBSSxFQUFDO1lBQVMsRUFBRyxFQUV4RC9MO2NBQVF1QixHQUFHLEVBQUVtSyxTQUFTO2NBQUVNLE9BQU8sRUFBRWxCO1lBQVUsR0FDMUM5Syw2QkFBQ3NCLGlCQUFVO2NBQUN2QixJQUFJLEVBQUMsT0FBTztjQUFDMEIsU0FBUyxFQUFDLE9BQU87Y0FBQ0MsT0FBTyxFQUFFb0o7WUFBVSxFQUFJLEVBQ2xFOUssNkNBQ0NBLHlDQUFLcUksS0FBSyxDQUFDc0QsU0FBUyxDQUFNLENBQ2xCLEVBQ1QzTCwwQ0FDQ0Esd0NBQUlxSSxLQUFLLENBQUMvTSxPQUFPLENBQUssQ0FDakIsRUFDTjBFLDZCQUFDNkssWUFBTTtjQUFDalUsSUFBSSxFQUFFQSxJQUFJO2NBQUVrVSxVQUFVLEVBQUVBO1lBQVUsRUFBSSxDQUN0QyxDQUVMO1VBRVIsQ0FBQztVQUFDalk7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJGO1VBQ0E7VUFGQTs7VUFRTSxTQUFVOFgsS0FBSyxDQUFDO1lBQUUzSDtVQUFNLENBQWM7WUFDM0MsTUFBTWlKLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQ3RQLFFBQVEsQ0FBQ3FHLE1BQU0sQ0FBQztZQUN2RCxNQUFNa0osT0FBTyxHQUFHbEosTUFBTSxLQUFLLFNBQVM7WUFDcEMsTUFBTSxDQUFDbUosS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDLEdBQUcsc0JBQVEsRUFBQ0wsU0FBUyxFQUFFQyxPQUFPLENBQUM7WUFDNUUsTUFBTUssV0FBVyxHQUFHRixPQUFPLENBQUN6VSxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDdkQsTUFBTTJVLGVBQWUsR0FBR0osT0FBTyxDQUFDeFUsUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQzNELE9BQ0NtSTtjQUFLeUIsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDekIsMkNBQU8sR0FBR3dNLGVBQWUsRUFBRSxNQUFTLEVBQ3BDeE0sMkNBQU8sR0FBR3VNLFdBQVcsRUFBRSxDQUFRLENBQzFCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBO1VBREE7O1VBRUEsTUFBTTtZQUFFOUosUUFBUTtZQUFFMUI7VUFBUyxDQUFFLEdBQUdmLGNBQUs7VUFFL0IsU0FBVXlNLFFBQVEsQ0FBQ1IsU0FBa0IsRUFBRUMsT0FBZ0I7WUFDNUQsTUFBTSxDQUFDUSxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHbEssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVuQzFCLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSTZMLFVBQTBCO2NBRTlCLElBQUlYLFNBQVMsRUFBRTtnQkFDZFcsVUFBVSxHQUFHQyxXQUFXLENBQUMsTUFBSztrQkFDN0JGLE9BQU8sQ0FBQ0csUUFBUSxJQUFJQSxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O2NBR1QsT0FBTyxNQUFLO2dCQUNYQyxhQUFhLENBQUNILFVBQVUsQ0FBQztjQUMxQixDQUFDO1lBQ0YsQ0FBQyxFQUFFLENBQUNYLFNBQVMsQ0FBQyxDQUFDO1lBRWZsTCxTQUFTLENBQUMsTUFBSztjQUNkLElBQUltTCxPQUFPLEVBQUU7Z0JBQ1pTLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1lBRVosQ0FBQyxFQUFFLENBQUNULE9BQU8sQ0FBQyxDQUFDO1lBRWIsTUFBTUksWUFBWSxHQUFHSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDakMsTUFBTUwsT0FBTyxHQUFHVyxJQUFJLENBQUNDLEtBQUssQ0FBRVAsSUFBSSxHQUFHLEdBQUcsR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU1OLE9BQU8sR0FBR1ksSUFBSSxDQUFDQyxLQUFLLENBQUVQLElBQUksR0FBRyxJQUFJLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNUCxLQUFLLEdBQUdhLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV6QyxPQUFPLENBQUNQLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQztVQUMvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVNUQsWUFBWTtZQUMzQixTQUFTd0UsVUFBVTtjQUNsQkMsa0JBQVMsQ0FBQ0MsV0FBVyxHQUFHLElBQUk7WUFDN0I7WUFFQSxJQUFJLENBQUMzUyxtQkFBVSxDQUFDakcsS0FBSyxFQUFFLE9BQU93TCw2QkFBQ3FOLHlCQUFhLE9BQUc7WUFDL0MsT0FDQ3JOO2NBQUt5QixTQUFTLEVBQUM7WUFBa0IsR0FDaEN6QjtjQUFLdUUsR0FBRyxFQUFDLHVCQUF1QjtjQUFDTyxHQUFHLEVBQUM7WUFBZ0IsRUFBRyxFQUN4RDlFO2NBQU15QixTQUFTLEVBQUM7WUFBcUIsR0FDcEN6Qiw2QkFBQ3NDLFdBQUk7Y0FBQ3ZDLElBQUksRUFBRXdDLGFBQUssQ0FBQyxlQUFlLENBQUM7Y0FBRWQsU0FBUyxFQUFDO1lBQW1CLEVBQUcsRUFDcEV6QiwwREFBdUIsRUFDdkJBLHdDQUNDQSxnR0FBaUUsT0FBQ0Esd0NBQU0scURBRXJFLEVBQ0pBLDZCQUFDdUssWUFBTTtjQUFDeEssSUFBSSxFQUFDLE1BQU07Y0FBQzJCLE9BQU8sRUFBRXdMLFVBQVU7Y0FBRWxGLEtBQUssRUFBQztZQUFnQixFQUFHLENBQzVELENBQ0Y7VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFuIiwiZXhwb3J0cyIsIk9iamVjdCIsInZhbHVlIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInJlY29yZGVyIiwiYmVhcmVyIiwidXBsb2FkZXIiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiaXNGZXRjaGluZyIsInRyaWdnZXJFdmVudCIsImZldGNoaW5nIiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwicmVhZHkiLCJVcGxvYWRlciIsInR5cGUiLCJwYXJhbXMiLCJjb250YWluZXIiLCJwcm9qZWN0IiwidXJsIiwiY29uZmlnIiwiQ0hBVF9BUElfU0VSVkVSIiwib24iLCJsb2FkZW5kIiwicHJvY2VzcyIsImNvbnNvbGUiLCJ3YXJuIiwiY3JlYXRlIiwic2VsZWN0b3IiLCJnbG9iYWxUaGlzIiwiY29yZG92YSIsImJsb2JUb0FycmF5QnVmZmVyIiwiYmxvYiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJhcnJheUJ1ZmZlciIsInRhcmdldCIsInJlc3VsdCIsIkFycmF5QnVmZmVyIiwib25lcnJvciIsInJlYWRBc0FycmF5QnVmZmVyIiwic2F2ZVJlY29yZGluZyIsInJlY29yZGluZyIsInRyYW5zY3JpcHRpb24iLCJjaGF0Iiwic2VuZEF1ZGlvIiwid2FpdGluZ1Jlc3BvbnNlIiwiZ2VuZXJhdGVJZCIsImJ1ZmZlciIsImhhc2hCdWZmZXIiLCJjcnlwdG8iLCJzdWJ0bGUiLCJkaWdlc3QiLCJoYXNoQXJyYXkiLCJBcnJheSIsImZyb20iLCJVaW50OEFycmF5IiwiaGFzaEhleCIsIm1hcCIsImIiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsInNhdmVBdWRpbyIsImF1ZGlvIiwiaWQiLCJudW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJlc3BvbnNlIiwicHVibGlzaFJlY29yZGluZyIsInN0YXR1cyIsImRhdGEiLCJwcm9wZXJ0aWVzIiwicGF0aCIsImZpbGUiLCJvdXRwdXQiLCJ1c2FnZSIsInNvdXJjZSIsImNyZWF0ZWRBdCIsInVuaXgiLCJzYXZlSXRlbSIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInNlc3Npb25XcmFwcGVyIiwidXNlcklkIiwiRGF0ZSIsInNlbGVjdGVkS2IiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwic2V0QXVkaW9NZXNzYWdlIiwidXNlciIsImNoYXRJZCIsImNvbnRlbnQiLCJyb2xlIiwidGltZXN0YW1wIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlcyIsImNhdGVnb3J5IiwiQXBwV3JhcHBlciIsImNoYXRzIiwiaXRlbXMiLCJhdWRpb01hbmFnZXIiLCJrbm93bGVkZ2VCb3hlcyIsImticyIsImtiIiwic2VsZWN0ZWRNb2RlbCIsIm1vZGVsIiwibm90Rm91bmQiLCJzZWxlY3RlZEtiUGF0aCIsImZpbmQiLCJpIiwibWVzc2FnZSIsIk1hcCIsImV4dGVuc2lvbnMiLCJhdXRvcGxheSIsIkNoYXQiLCJsb2FkUmVzcG9uc2UiLCJjdXJyZW50Q2hhdCIsImxvZyIsImZvdW5kIiwiaXNSZWFkeSIsImtub3dsZWRlQm94U2VsZWN0ZWQiLCJrbm93bGVkZ2VCb3hJZCIsImxvYWRBbGwiLCJleHRzIiwibWV0YWRhdGEiLCJmb3JFYWNoIiwiZXh0ZW5zaW9uIiwiaW5kZXgiLCJzZXQiLCJzZW5kTWVzc2FnZSIsIm1hcmsiLCJpbmNsdWRlcyIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJFdmVudHMiLCJjaHVua3MiLCJ2YWxpZCIsImFuYWx5c2VyIiwiaW5pdGlhbGlzZSIsIlBlbmRpbmdQcm9taXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidGhlbiIsInN0cmVhbSIsIk1lZGlhUmVjb3JkZXIiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjcmVhdGVBbmFseXNlciIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwid2luZG93Iiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJsYW5nIiwiY29udGludW91cyIsImludGVyaW1SZXN1bHRzIiwib25yZXN1bHQiLCJldmVudCIsImludGVyaW1UcmFuc2NyaXB0IiwiZmluYWxUcmFuc2NyaXB0IiwicmVzdWx0SW5kZXgiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaXNGaW5hbCIsInRyYW5zY3JpcHQiLCJzdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaXplIiwicHVzaCIsImNhdGNoIiwiZmluYWxseSIsInJlY29yZCIsInN0b3BTdHJlYW0iLCJnZXRUcmFja3MiLCJ0cmFjayIsInN0b3AiLCJlbmR0aW1lIiwiQmxvYiIsIm1pbWVUeXBlIiwib25GaW5pc2giLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJSZWFjdCIsInVzZVJlZiIsInNldFRpbWVvdXQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJpc0luQ29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbmRSZWN0IiwidGhyZXNob2xkIiwiYm90dG9tIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJJY29uQnV0dG9uIiwicmVmIiwidmFyaWFudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJFeHRlbnNpb25SZW5kZXJlciIsIkNvbXBvbmVudCIsImNvbnRyb2wiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hhdEludHJvIiwiSGVhZGVyIiwiTWVzc2FnZXMiLCJhdm9pZENoYXQiLCJDaGF0SW5wdXQiLCJTeXN0ZW1BbnN3ZXJpbmciLCJJY29uIiwiSUNPTlMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGFzdCIsIk1lc3NhZ2UiLCJrZXkiLCJNZXNzYWdlQWN0aW9ucyIsInRleHQiLCJtZXNzYWdlVG9rZW5zIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwicG9zaXRpb25Ub0N1dCIsInBsYXkiLCJvblBhdXNlIiwiY29weU1lc3NhZ2UiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkaXNhYmxlZCIsImFwcGx5IiwiQXVkaW9NZXNzYWdlIiwiY2xzIiwiUHJvZmlsZUljb24iLCJNZXNzYWdlVGV4dCIsIkF1ZGlvUGxheWVyIiwic3JjIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiYWx0Iiwib25FcnJvciIsInBsYXlhYmxlIiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJvbkNsaWNrV29yZCIsImNhbkJlUGxheWVkIiwiYXV0b3BsYXlWYWx1ZSIsIlBsYXlhYmxlIiwiQ2hhdE1lc3NhZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJNZXNzYWdlQ29tcG9uZW50Iiwic2V0Q29udGVudCIsImZpbmlzaGVkIiwic2V0RmluaXNoZWQiLCJ0b3RhbFRva2VucyIsImJsb2NrcyIsInVzZU1lbW8iLCJzcGxpdCIsImZpbHRlciIsInRyaW0iLCJpc0NvZGUiLCJzdGFydHNXaXRoIiwicGxheWFibGVDb250ZW50IiwiaXRlbSIsIm1lbW8iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJDaGF0U2tlbGV0b24iLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiXyIsIkNoYXRDb250ZXh0IiwidXNlQ2hhdENvbnRleHQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzZXRBdXRvcGxheSIsImhhbmRsZUF1dG9wbGF5VG9nZ2xlIiwiaGFuZGxlQ2hhdFNlYXJjaCIsInByZXZlbnREZWZhdWx0IiwiSW5wdXQiLCJsYWJlbCIsInJlcXVpcmVkIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsImlzV2FpdGluZyIsInNldFJlY29yZGluZyIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwidGV4dEFyZWFSZWYiLCJzZXRUZXh0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJyZXBsYWNlQWxsIiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJmb2N1cyIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5IiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwiZGlzYWJsZWRUZXh0YXJlYSIsInN5c3RlbSIsIlN5c3RlbU1vZGFsIiwiRm9ybSIsInJvd3MiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsInBsYXlBY3Rpb24iLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFyZWFWYWx1ZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwicHVibGlzaCIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJkaWFsb2dSZWYiLCJhc3Npc3RhbnQiLCJvcGVuTW9kYWwiLCJzaG93TW9kYWwiLCJjbG9zZSIsIm1vZGUiLCJvbkNsb3NlIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJzZWNSZW5kZXJlZCIsIm1pbnV0ZXNSZW5kZXJlZCIsInVzZVRpbWVyIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvaW50ZXJmYWNlcy9tZXNzYWdlcy50cyIsInRzL3N0b3JlL2F1ZGlvLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy9zdG9yZS9yZWNvcmRlci50cyIsInRzL3ZpZXdzL2NoYXQvQmFja0Fycm93LnRzeCIsInRzL3ZpZXdzL2NoYXQvZXh0ZW5zaW9uLXJlbmRlcmVyLnRzeCIsInRzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9hbnN3ZXJpbmcudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9pbmRleC50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvYXVkaW8tbWVzc2FnZS50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvdGV4dC50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29udGV4dC50cyIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9pbmRleC50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvcGxheWVyLnRzeCIsInRzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwidHMvdmlld3MvY29udGV4dC50c3giLCJ0cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCJ0cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4IiwidHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nLnRzeCIsInRzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsInRzL3ZpZXdzL2lucHV0L3N5c3RlbS9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwidHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=