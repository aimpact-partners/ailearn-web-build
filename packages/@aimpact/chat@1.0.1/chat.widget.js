System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "dayjs@1.11.9", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/core", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat@1.0.1/extensions", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@0.0.37/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.37/toast", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.37/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/form", "pragmate-ui@0.0.37/components", "pragmate-ui@0.0.37/modal", "pragmate-ui@0.0.37/image", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Recorder, Chat, ChatInput, RecordingButton, SystemModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioManager: void 0,
    Recorder: void 0,
    Chat: void 0,
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
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnApp100Config) {
      dependency_6 = _aimpactAilearnApp100Config;
    }, function (_aimpactChatSdk100Voice) {
      dependency_7 = _aimpactChatSdk100Voice;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_bgroupMediaManager100Uploader) {
      dependency_9 = _bgroupMediaManager100Uploader;
    }, function (_aimpactChat101Wrapper) {
      dependency_10 = _aimpactChat101Wrapper;
    }, function (_aimpactChatSdk100Core) {
      dependency_11 = _aimpactChatSdk100Core;
    }, function (_bgroupMediaManager100Recorder) {
      dependency_12 = _bgroupMediaManager100Recorder;
    }, function (_aimpactChat101Extensions) {
      dependency_13 = _aimpactChat101Extensions;
    }, function (_beyondJsKernel019Core) {
      dependency_14 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_15 = _react2;
    }, function (_pragmateUi0037Icons) {
      dependency_16 = _pragmateUi0037Icons;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_17 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedIcons) {
      dependency_18 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi0037Toast) {
      dependency_19 = _pragmateUi0037Toast;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_20 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_21 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactChat101SharedComponents) {
      dependency_22 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi0037Preload) {
      dependency_23 = _pragmateUi0037Preload;
    }, function (_aimpactChat101SharedHooks) {
      dependency_24 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0037Form) {
      dependency_25 = _pragmateUi0037Form;
    }, function (_pragmateUi0037Components) {
      dependency_26 = _pragmateUi0037Components;
    }, function (_pragmateUi0037Modal) {
      dependency_27 = _pragmateUi0037Modal;
    }, function (_pragmateUi0037Image) {
      dependency_28 = _pragmateUi0037Image;
    }, function (_aimpactChat101UiManager) {
      dependency_29 = _aimpactChat101UiManager;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['dayjs', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/config', dependency_6], ['@aimpact/chat-sdk/voice', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@bgroup/media-manager/uploader', dependency_9], ['@aimpact/chat/wrapper', dependency_10], ['@aimpact/chat-sdk/core', dependency_11], ['@bgroup/media-manager/recorder', dependency_12], ['@aimpact/chat/extensions', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['react', dependency_15], ['pragmate-ui/icons', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['@aimpact/chat/shared/icons', dependency_18], ['pragmate-ui/toast', dependency_19], ['@aimpact/chat-sdk/widgets/playable', dependency_20], ['@bgroup/media-manager/audio-player', dependency_21], ['@aimpact/chat/shared/components', dependency_22], ['pragmate-ui/preload', dependency_23], ['@aimpact/chat/shared/hooks', dependency_24], ['pragmate-ui/form', dependency_25], ['pragmate-ui/components', dependency_26], ['pragmate-ui/modal', dependency_27], ['pragmate-ui/image', dependency_28], ['@aimpact/chat/ui/manager', dependency_29]]);
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
        hash: 1640501917,
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
              globalThis.store = this.#store;
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
        hash: 3132832906,
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
          var _wrapper = require("@aimpact/chat/wrapper");
          var _recorder = require("@bgroup/media-manager/recorder");
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
              super({});
              this.#recorder = new _recorder.Recorder();
              this.#parent = parent;
              this.reactiveProps(['autoplay']);
              this.init();
              _wrapper.AppWrapper.on('app.settings.change', this.ListenAppChanges);
            }
            ListenAppChanges = () => {
              this.#players.web.set({
                language: _wrapper.AppWrapper.language,
                rate: _wrapper.AppWrapper.audioSpeed
              });
            };
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
              // this.#uploader.on('file.loaded', this.process);
            }

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
              const item = await chat.sendAudio(recording, transcription);
              this.fetching = true;
              this.#parent.waitingResponse = true;
              return this.saveAudio(recording, item.id);
            }
            async saveAudio(audio, id = undefined) {
              this.fetching = true;
              const number = localStorage.getItem('recording.number') ? parseInt(localStorage.getItem('recording.number')) : 0;
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
              console.log(98.5, id);
              return this.saveItem(properties, id);
            }
            async saveItem(properties, id) {
              try {
                const {
                  chat
                } = this.#parent;
                const response = await chat.setAudioMessage({
                  user: {
                    chatId: chat.id,
                    id,
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
          }
          exports.AudioManager = AudioManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 2834828209,
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
            #messages;
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
                this.#messages = chat.messages?.items;
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
              this.#messages = chat.messages.items;
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
        hash: 502884501,
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
            async hasPermissions() {
              return navigator.permissions.query({
                name: 'microphone'
              });
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
                //@ts-ignore
                if ('webkitSpeechRecognition' in globalThis && 1 === 2) {
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
                this.#recordingPromise.resolve();
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
        hash: 1172650975,
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
            if (!component) return null;
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
        hash: 2556013959,
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
            const [reader, setReader] = _react.default.useState(false);
            const separator = _react.default.useRef(null);
            const cls = `chat-page__container${reader ? ' reader__container' : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_header.Header, {
              reader: reader,
              setReader: setReader
            }), _react.default.createElement(_content.Content, {
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
        hash: 1658970103,
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
        hash: 2868888739,
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
            messageTokens,
            play = true
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
            }, _react.default.createElement(_icons.IconButton, {
              onClick: copyMessage,
              icon: 'copy'
            }), play && _react.default.createElement(_icons.IconButton, {
              onClick: onClick,
              "data-listen": 'api',
              icon: icon
            })), messageTokens && _react.default.createElement("div", {
              className: 'tokens overline'
            }, messageTokens, " TOKENS"));
          }
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
        hash: 1988996774,
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
          var _audioPlayer = require("@bgroup/media-manager/audio-player");
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
            }, !message.audio && _react.default.createElement(_playable.Playable, {
              content: text,
              playable: playable,
              id: message.id,
              onClickWord: onClickWord,
              player: player,
              autoplay: autoplayValue && canBePlayed
            }), message.audio && _react.default.createElement(_audioPlayer.AudioPlayer, {
              src: message.audio,
              convert: true
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
        hash: 3284885114,
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
              if (!content) return [];
              return content.split(/(```[\s\S]*?```|`[\s\S]*?`)/).filter(block => block.trim() !== '').map(block => ({
                content: block,
                isCode: content.startsWith('```') || content.startsWith('`')
              }));
            }, [finished]);
            const playableContent = _react.default.useMemo(() => {
              return blocks.filter(item => !item.isCode).map(item => item.content).join(' ');
            }, [finished]);
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
              play: !message.audio,
              message: message,
              text: playableContent,
              messageTokens: messageTokens
            })));
          }
          const Message = _react.default.memo(MessageComponent);
          exports.Message = Message;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/chat/skeleton
      *************************************/

      ims.set('./views/chat/skeleton', {
        hash: 975554159,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatSkeleton = ChatSkeleton;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("@aimpact/chat/shared/components");
          var _preload = require("pragmate-ui/preload");
          function ChatSkeleton() {
            const {
              store
            } = (0, _context.useChatContext)();
            return _react.default.createElement("div", {
              className: 'chat-container'
            }, _react.default.createElement(_components.CollapsibleHeader, {
              title: _react.default.createElement(_preload.Preload, {
                width: '400px',
                height: '30px'
              })
            }), _react.default.createElement("div", {
              className: 'send'
            }));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/chat/use-extension
      ******************************************/

      ims.set('./views/chat/use-extension', {
        hash: 2955735725,
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
              if (!ref?.current) return;
              ref.current.addEventListener('ready', onReady);
              return () => ref.current?.removeEventListener('ready', onReady);
            }, [ref?.current]);
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
        hash: 1140598616,
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
          function Header({
            reader,
            setReader
          }) {
            const {
              store
            } = (0, _context.useChatContext)();
            const [search, setSearch] = (0, _react.useState)('');
            const [autoplay, setAutoplay] = (0, _react.useState)(store.autoplay);
            const [collapsed, setCollapsed] = (0, _react.useState)();
            const handleAutoplayToggle = () => {
              store.autoplay = !store.autoplay;
            };
            (0, _hooks.useBinder)([store], () => setAutoplay(store.autoplay));
            const handleChatSearch = e => {
              e.preventDefault();
              setSearch(e.target.value);
            };
            const onReader = () => {
              setReader(!reader);
              setCollapsed(true);
            };
            return _react.default.createElement(_components.CollapsibleHeader, {
              title: store.chat.name ?? 'Untitled',
              collapsed: collapsed
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
            }), _react.default.createElement("div", null, _react.default.createElement(_icons.Icon, {
              icon: autoplay ? 'speaker' : 'speaker-off',
              className: 'circle speaker',
              onClick: handleAutoplayToggle
            }), _react.default.createElement(_icons.IconButton, {
              className: 'circle',
              variant: 'primary',
              icon: 'eye',
              onClick: onReader
            }))));
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
        hash: 2949584140,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatInput = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
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
            }, !!text.length ? _react.default.createElement(_components.Button, {
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
        hash: 1504239151,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _player = require("./player");
          var _context = require("./context");
          var _modal = require("pragmate-ui/modal");
          var _image = require("pragmate-ui/image");
          var _context2 = require("../context");
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
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [showModal, setShowModal] = (0, _react.useState)(false);
            const {
              texts
            } = (0, _context2.useChatContext)();
            const playAction = async event => {
              try {
                event.preventDefault();
                setFetching(true);
                const permission = await recorder.hasPermissions();
                if (permission.state !== 'granted') {
                  setShowModal(true);
                }
                setFetching(false);
                await recorder.record();
                setRecording(!recording);
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const onClose = event => {
              setFetching(false);
              setShowModal(false);
            };
            if (recording) return _react.default.createElement(_player.Player, null);
            return _react.default.createElement(_react.default.Fragment, null, showModal && _react.default.createElement(_modal.Modal, {
              open: true,
              show: true,
              onClose: onClose
            }, _react.default.createElement("h3", null, texts.permissions.title), _react.default.createElement(_image.Image, {
              src: '/assets/permissions2.svg'
            }), _react.default.createElement("p", null, texts.permissions.description), _react.default.createElement("footer", {
              className: 'mt-15'
            }, _react.default.createElement(_components.Button, {
              variant: 'primary',
              onClick: onClose
            }, texts.permissions.button))), _react.default.createElement(_components.Button, {
              icon: 'mic',
              fetching: fetching,
              onClick: playAction,
              disabled: disabled || fetching
            }));
          };
          exports.RecordingButton = RecordingButton;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/input/system/form
      *****************************************/

      ims.set('./views/input/system/form', {
        hash: 42578936,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UIForm = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
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
            }), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              icon: 'close-circle',
              label: 'Cancel',
              variant: 'link outline',
              onClick: handleClose
            }), _react.default.createElement(_components.Button, {
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
        hash: 4053747498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemModal = void 0;
          var _react = require("react");
          var _form = require("./form");
          var _components = require("pragmate-ui/components");
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
            }, _react.default.createElement(_components.Button, {
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
        hash: 4064363242,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatNotFound = ChatNotFound;
          var _react = require("react");
          var _manager = require("@aimpact/chat/ui/manager");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _components2 = require("@aimpact/chat/shared/components");
          var _icons2 = require("@aimpact/chat/shared/icons");
          function ChatNotFound() {
            function openDialog() {
              _manager.UIManager.modalOpened = true;
            }
            if (!_wrapper.AppWrapper.ready) return _react.default.createElement(_components2.PreloadScreen, null);
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
            }), _react.default.createElement("h2", null, "Chat not found"), _react.default.createElement("p", null, _react.default.createElement("strong", null, "We couldn't find a chat associated with that ID."), " ", _react.default.createElement("br", null), "Please enter URL correctly or create a new chat."), _react.default.createElement(_components.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2RheWpzIiwiX21vZGVsIiwiX2NvbmZpZyIsIl92b2ljZSIsIl9zZXNzaW9uIiwiX3VwbG9hZGVyIiwiX3dyYXBwZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJiZWFyZXIiLCJ1cGxvYWRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiZmV0Y2hpbmciLCJpc0ZldGNoaW5nIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJBcHBXcmFwcGVyIiwib24iLCJMaXN0ZW5BcHBDaGFuZ2VzIiwic2V0IiwibGFuZ3VhZ2UiLCJyYXRlIiwiYXVkaW9TcGVlZCIsInVuZGVmaW5lZCIsInRyaWdnZXIiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJyZWFkeSIsIlVwbG9hZGVyIiwidHlwZSIsInBhcmFtcyIsImNvbnRhaW5lciIsInByb2plY3QiLCJ1cmwiLCJkZWZhdWx0IiwiQ0hBVF9BUElfU0VSVkVSIiwibG9hZGVuZCIsImNvbnNvbGUiLCJ3YXJuIiwiY3JlYXRlIiwic2VsZWN0b3IiLCJjb3Jkb3ZhIiwiYmxvYlRvQXJyYXlCdWZmZXIiLCJibG9iIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsImFycmF5QnVmZmVyIiwidGFyZ2V0IiwicmVzdWx0IiwiQXJyYXlCdWZmZXIiLCJvbmVycm9yIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJzYXZlUmVjb3JkaW5nIiwicmVjb3JkaW5nIiwidHJhbnNjcmlwdGlvbiIsImNoYXQiLCJpdGVtIiwic2VuZEF1ZGlvIiwid2FpdGluZ1Jlc3BvbnNlIiwic2F2ZUF1ZGlvIiwiaWQiLCJhdWRpbyIsIm51bWJlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsInJlc3BvbnNlIiwicHVibGlzaFJlY29yZGluZyIsInN0YXR1cyIsImRhdGEiLCJwcm9wZXJ0aWVzIiwicGF0aCIsImZpbGUiLCJvdXRwdXQiLCJ1c2FnZSIsInNvdXJjZSIsImNyZWF0ZWRBdCIsInVuaXgiLCJsb2ciLCJzYXZlSXRlbSIsInNldEF1ZGlvTWVzc2FnZSIsInVzZXIiLCJjaGF0SWQiLCJjb250ZW50Iiwicm9sZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJjdXJyZW50TWVzc2FnZSIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInNlc3Npb25XcmFwcGVyIiwidXNlcklkIiwic2VsZWN0ZWRLYiIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJfY29yZSIsIl9hdWRpbyIsIl9leHRlbnNpb25zIiwibWVzc2FnZXMiLCJFWFRFTlNJT05TIiwiY2F0ZWdvcnkiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW9NYW5hZ2VyIiwia2JzIiwia25vd2xlZGdlQm94ZXMiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsIm1lc3NhZ2UiLCJleHRlbnNpb25zIiwiTWFwIiwiYXV0b3BsYXkiLCJDaGF0IiwiY3VycmVudENoYXQiLCJmb3VuZCIsImlzUmVhZHkiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJsb2FkQWxsIiwiZXh0cyIsIm1ldGFkYXRhIiwiZm9yRWFjaCIsImV4dGVuc2lvbiIsImluZGV4Iiwic2VuZE1lc3NhZ2UiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJpbmNsdWRlcyIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJFdmVudHMiLCJpbml0aWFsaXNlZCIsInN0cmVhbSIsInN0YXJ0VGltZSIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJhdWRpb0NvbnRleHQiLCJyZWNvcmRpbmdQcm9taXNlIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInZhbGlkIiwiYW5hbHlzZXIiLCJzcGVlY2hSZWNvZ25pdGlvbiIsImhhc1Blcm1pc3Npb25zIiwibmF2aWdhdG9yIiwicGVybWlzc2lvbnMiLCJxdWVyeSIsInByb21pc2VTcGVlY2giLCJpbml0aWFsaXNlIiwiUGVuZGluZ1Byb21pc2UiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ0aGVuIiwiTWVkaWFSZWNvcmRlciIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJvbnJlc3VsdCIsImV2ZW50IiwiaW50ZXJpbVRyYW5zY3JpcHQiLCJmaW5hbFRyYW5zY3JpcHQiLCJyZXN1bHRJbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJpc0ZpbmFsIiwidHJhbnNjcmlwdCIsInN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpemUiLCJwdXNoIiwiY2F0Y2giLCJmaW5hbGx5IiwicmVjb3JkIiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsInRyYWNrIiwic3RvcCIsImVuZHRpbWUiLCJCbG9iIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsIl9yZWFjdCIsIl9pY29ucyIsIl9ob29rcyIsIkJhY2tBcnJvdyIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiaXNJbkNvbnRhaW5lciIsInBhcmVudE5vZGUiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZW5kUmVjdCIsInRocmVzaG9sZCIsImJvdHRvbSIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInZpc2libGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiSWNvbkJ1dHRvbiIsInJlZiIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiX3VzZUV4dGVuc2lvbiIsIl9tZXNzYWdlcyIsIl9jb250ZXh0IiwiX2V4dGVuc2lvblJlbmRlcmVyIiwiQ29udGVudCIsInVzZUNoYXRDb250ZXh0Iiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiTWVzc2FnZXMiLCJDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiX2hlYWRlciIsIl9pbnB1dCIsIl9CYWNrQXJyb3ciLCJfY29udGVudCIsImNoYXRJbnRybyIsInNldFJlYWRlciIsInVzZVN0YXRlIiwiY2xzIiwiSGVhZGVyIiwiYXZvaWRDaGF0IiwiQ2hhdElucHV0IiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsIkljb24iLCJJQ09OUyIsIl9hbnN3ZXJpbmciLCJfbWVzc2FnZSIsInNldE1lc3NhZ2VzIiwibWFwIiwibGFzdCIsIk1lc3NhZ2UiLCJrZXkiLCJfdG9hc3QiLCJNZXNzYWdlQWN0aW9ucyIsInRleHQiLCJtZXNzYWdlVG9rZW5zIiwicGxheSIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJvblBhdXNlIiwiY29weU1lc3NhZ2UiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkaXNhYmxlZCIsImFwcGx5IiwiUHJvZmlsZUljb24iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJhbHQiLCJzcmMiLCJvbkVycm9yIiwiX3BsYXlhYmxlIiwiX2F1ZGlvUGxheWVyIiwiTWVzc2FnZVRleHQiLCJwbGF5YWJsZSIsInJlbW92ZUhpZ2hsaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwib25DbGlja1dvcmQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsIkF1ZGlvUGxheWVyIiwiY29udmVydCIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RleHQiLCJfYWN0aW9ucyIsIl9wcm9maWxlSWNvbiIsIk1lc3NhZ2VDb21wb25lbnQiLCJzZXRDb250ZW50IiwiZmluaXNoZWQiLCJzZXRGaW5pc2hlZCIsInRvdGFsVG9rZW5zIiwiYmxvY2tzIiwidXNlTWVtbyIsInNwbGl0IiwiZmlsdGVyIiwidHJpbSIsImlzQ29kZSIsInN0YXJ0c1dpdGgiLCJwbGF5YWJsZUNvbnRlbnQiLCJqb2luIiwibWVtbyIsIl9jb21wb25lbnRzIiwiX3ByZWxvYWQiLCJDaGF0U2tlbGV0b24iLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiUHJlbG9hZCIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0UmVhZHkiLCJjb250cm9sIiwib25SZWFkeSIsIkNoYXRDb250ZXh0Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2V0QXV0b3BsYXkiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJoYW5kbGVBdXRvcGxheVRvZ2dsZSIsImhhbmRsZUNoYXRTZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsIm9uUmVhZGVyIiwiSW5wdXQiLCJsYWJlbCIsInJlcXVpcmVkIiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0Iiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX3JlY29yZGluZyIsIl9pbmRleCIsImlzV2FpdGluZyIsInNldFJlY29yZGluZyIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwidGV4dEFyZWFSZWYiLCJzZXRUZXh0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJyZXBsYWNlQWxsIiwic3R5bGUiLCJzY3JvbGxIZWlnaHQiLCJmb2N1cyIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5IiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwiZGlzYWJsZWRUZXh0YXJlYSIsInN5c3RlbSIsImNvbmZpZyIsIlN5c3RlbU1vZGFsIiwiRm9ybSIsInJvd3MiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJfdGltZXIiLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsIl9wbGF5ZXIiLCJfbW9kYWwiLCJfaW1hZ2UiLCJfY29udGV4dDIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwbGF5QWN0aW9uIiwicGVybWlzc2lvbiIsInN0YXRlIiwib25DbG9zZSIsIk1vZGFsIiwib3BlbiIsIkltYWdlIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFyZWFWYWx1ZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwicHVibGlzaCIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJkaWFsb2dSZWYiLCJhc3Npc3RhbnQiLCJvcGVuTW9kYWwiLCJjbG9zZSIsIm1vZGUiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJfbWFuYWdlciIsIl9jb21wb25lbnRzMiIsIm9wZW5EaWFsb2ciLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS9yZWNvcmRlci50cyIsIi90cy92aWV3cy9jaGF0L0JhY2tBcnJvdy50c3giLCIvdHMvdmlld3MvY2hhdC9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jaGF0L2V4dGVuc2lvbi1yZW5kZXJlci50c3giLCIvdHMvdmlld3MvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9hbnN3ZXJpbmcudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvdmlld3MvY2hhdC91c2UtZXh0ZW5zaW9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEs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