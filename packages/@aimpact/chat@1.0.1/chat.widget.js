System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "dayjs@1.11.9", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@0.0.1/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.1/toast", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.1/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.1/form", "pragmate-ui@0.0.1/components", "pragmate-ui@0.0.1/modal", "pragmate-ui@0.0.1/image", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Recorder, Chat, ChatInput, RecordingButton, SystemModal, __beyond_pkg, hmr;
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
    }, function (_aimpactChat101Extensions) {
      dependency_12 = _aimpactChat101Extensions;
    }, function (_beyondJsKernel019Core) {
      dependency_13 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_14 = _react2;
    }, function (_pragmateUi001Icons) {
      dependency_15 = _pragmateUi001Icons;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_16 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedIcons) {
      dependency_17 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi001Toast) {
      dependency_18 = _pragmateUi001Toast;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_19 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_20 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactChat101SharedComponents) {
      dependency_21 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi001Preload) {
      dependency_22 = _pragmateUi001Preload;
    }, function (_aimpactChat101SharedHooks) {
      dependency_23 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi001Form) {
      dependency_24 = _pragmateUi001Form;
    }, function (_pragmateUi001Components) {
      dependency_25 = _pragmateUi001Components;
    }, function (_pragmateUi001Modal) {
      dependency_26 = _pragmateUi001Modal;
    }, function (_pragmateUi001Image) {
      dependency_27 = _pragmateUi001Image;
    }, function (_aimpactChat101UiManager) {
      dependency_28 = _aimpactChat101UiManager;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.1"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['dayjs', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/config', dependency_6], ['@aimpact/chat-sdk/voice', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@bgroup/media-manager/uploader', dependency_9], ['@aimpact/chat/wrapper', dependency_10], ['@aimpact/chat-sdk/core', dependency_11], ['@aimpact/chat/extensions', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['pragmate-ui/icons', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/icons', dependency_17], ['pragmate-ui/toast', dependency_18], ['@aimpact/chat-sdk/widgets/playable', dependency_19], ['@bgroup/media-manager/audio-player', dependency_20], ['@aimpact/chat/shared/components', dependency_21], ['pragmate-ui/preload', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['pragmate-ui/form', dependency_24], ['pragmate-ui/components', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/image', dependency_27], ['@aimpact/chat/ui/manager', dependency_28]]);
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
        hash: 502959963,
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
        hash: 1764122521,
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
                console.log('si');
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
        hash: 1286823831,
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
                console.log(500, permission);
                setFetching(false);
                await recorder.record();
                console.log(501);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBT087VUFBVSxNQUNYQSxVQUFXLFNBQVFDLCtCQUF5QjtZQUNqRCxNQUFNO1lBRU5DLFdBQVc7Y0FDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUlDLG1CQUFZLEVBQUU7Y0FDaENDLFVBQVUsQ0FBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFDQSxJQUFJQyxNQUFNO2NBQ1QsT0FBT0MsV0FBSTtZQUNaO1lBRUFDLElBQUk7Y0FDSCxJQUFJLENBQUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUFDLElBQUk7Y0FDSCxJQUFJLENBQUMsTUFBTSxDQUFDQyxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDOzs7Ozs7Ozs7OztVQzdCRDs7VUFFQUM7WUFDQUM7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBaUJPO1VBQVksTUFBT0MsWUFBYSxTQUFRQyxvQkFBcUI7WUFHbkUsT0FBTztZQUNQLFNBQVM7WUFFVCxJQUFJQyxRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN0QjtZQUNBLE9BQU87WUFDUEMsTUFBTSxDQUFDQSxNQUEwQjtjQUNoQyxJQUFJQSxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBR0EsTUFBTTtjQUNqQyxPQUFPLElBQUk7WUFDWjtZQUVBLFNBQVM7WUFDVCxJQUFJQyxRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN0QjtZQUVBLFFBQVEsR0FBRztjQUNWQyxHQUFHLEVBQUUsSUFBSUMsWUFBSyxFQUFFO2NBQ2hCQyxHQUFHLEVBQUUsSUFBSUMsZUFBUTthQUNqQjtZQUVELE9BQU8sR0FBRyxLQUFLO1lBQ2YsSUFBSUMsTUFBTTtjQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ25DO1lBQ0EsU0FBUztZQUNULElBQUlDLFVBQVUsQ0FBQ1gsS0FBSztjQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHQSxLQUFLO2NBQ3RCLElBQUksQ0FBQ1ksWUFBWSxFQUFFO1lBQ3BCO1lBQ0EsSUFBSUQsVUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQ0UsUUFBUSxJQUFJLEtBQUssQ0FBQ0EsUUFBUTtZQUNqRDtZQUVBLE1BQU07WUFDTixJQUFJQyxLQUFLO2NBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUVBQyxZQUFZQyxNQUFNO2NBQ2pCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSUMsa0JBQVEsRUFBRTtjQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHRCxNQUFNO2NBQ3JCLElBQUksQ0FBQ0UsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7Y0FDaEMsSUFBSSxDQUFDQyxJQUFJLEVBQUU7Y0FDWEMsbUJBQVUsQ0FBQ0MsRUFBRSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUM7WUFDNUQ7WUFFQUEsZ0JBQWdCLEdBQUcsTUFBSztjQUV2QixJQUFJLENBQUMsUUFBUSxDQUFDaEIsR0FBRyxDQUFDaUIsR0FBRyxDQUFDO2dCQUNyQkMsUUFBUSxFQUFFSixtQkFBVSxDQUFDSSxRQUFRO2dCQUM3QkMsSUFBSSxFQUFFTCxtQkFBVSxDQUFDTTtlQUNqQixDQUFDO1lBQ0gsQ0FBQztZQUNEN0IsS0FBSztjQUNKLElBQUksQ0FBQyxNQUFNLEdBQUc4QixTQUFTO2NBQ3ZCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBQyxZQUFZLENBQUNDLElBQUk7Y0FDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUNBLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLFVBQVVELElBQUksWUFBWSxDQUFDO2NBRXJFLElBQUksQ0FBQyxPQUFPLEdBQUdBLElBQUk7Y0FDbkIsSUFBSSxDQUFDRixPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUEsTUFBTVQsSUFBSTtjQUNULElBQUksQ0FBQ2EsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJQyxrQkFBUSxDQUFDO2dCQUM3QkMsSUFBSSxFQUFFLE9BQU87Z0JBQ2JKLElBQUksRUFBRSxPQUFPO2dCQUNiSyxNQUFNLEVBQUU7a0JBQ1BDLFNBQVMsRUFBRSxRQUFRO2tCQUNuQkMsT0FBTyxFQUFFO2lCQUNUO2dCQUNEQyxHQUFHLEVBQUVDLGVBQU0sQ0FBQ0osTUFBTSxDQUFDSztlQUNuQixDQUFDO2NBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQ25CLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBSyxDQUFFLENBQUMsQ0FBQztjQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDQSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQUssQ0FBRSxDQUFDLENBQUM7Y0FDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQ0EsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNvQixPQUFPLENBQUM7Y0FDMUM7WUFDRDs7WUFFUUEsT0FBTyxHQUFHLFlBQVc7Y0FDNUJDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUM1QixDQUFDO1lBRURDLE1BQU0sQ0FBQ0MsUUFBUTtjQUNkLElBQUkxRCxVQUFVLENBQUMyRCxPQUFPLEVBQUU7Z0JBQ3ZCO2dCQUNBOztjQUVELElBQUksQ0FBQyxTQUFTLENBQUNGLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO1lBQ2hDO1lBRUFFLGlCQUFpQixDQUFDQyxJQUFVO2NBQzNCLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxLQUFJO2dCQUN0QyxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBVSxFQUFFO2dCQUMvQkQsTUFBTSxDQUFDRSxNQUFNLEdBQUdDLENBQUMsSUFBRztrQkFDbkIsTUFBTUMsV0FBVyxHQUFHRCxDQUFDLENBQUNFLE1BQU0sRUFBRUMsTUFBTTtrQkFDcEMsSUFBSUYsV0FBVyxZQUFZRyxXQUFXLEVBQUU7b0JBQ3ZDVCxPQUFPLENBQUNNLFdBQVcsQ0FBQzttQkFDcEIsTUFBTTtvQkFDTkwsTUFBTSxDQUFDLElBQUlwQixLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQzs7Z0JBRTVELENBQUM7Z0JBQ0RxQixNQUFNLENBQUNRLE9BQU8sR0FBR0wsQ0FBQyxJQUFHO2tCQUNwQkosTUFBTSxDQUFDSSxDQUFDLENBQUM7Z0JBQ1YsQ0FBQztnQkFDREgsTUFBTSxDQUFDUyxpQkFBaUIsQ0FBQ2IsSUFBSSxDQUFDO2NBQy9CLENBQUMsQ0FBQztZQUNIO1lBRUEsTUFBTWMsYUFBYSxDQUFDQyxTQUFTLEVBQUVDLGFBQWEsR0FBR3JDLFNBQVM7Y0FDdkQsTUFBTTtnQkFBRXNDO2NBQUksQ0FBRSxHQUFHLElBQUksQ0FBQyxPQUFPO2NBRTdCLE1BQU1DLElBQUksR0FBWSxNQUFNRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ0osU0FBUyxFQUFFQyxhQUFhLENBQUM7Y0FDcEUsSUFBSSxDQUFDbkQsUUFBUSxHQUFHLElBQUk7Y0FDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQ3VELGVBQWUsR0FBRyxJQUFJO2NBRW5DLE9BQU8sSUFBSSxDQUFDQyxTQUFTLENBQUNOLFNBQVMsRUFBRUcsSUFBSSxDQUFDSSxFQUFFLENBQUM7WUFDMUM7WUFFQSxNQUFNRCxTQUFTLENBQUNFLEtBQUssRUFBRUQsRUFBRSxHQUFHM0MsU0FBUztjQUNwQyxJQUFJLENBQUNkLFFBQVEsR0FBRyxJQUFJO2NBQ3BCLE1BQU0yRCxNQUFNLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEdBQ3BEQyxRQUFRLENBQUNGLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FDbEQsQ0FBQztjQUVKLE1BQU1FLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNOLEtBQUssQ0FBQztjQUNuRCxJQUFJLENBQUNLLFFBQVEsRUFBRUUsTUFBTSxFQUFFO2dCQUN0Qjs7Y0FHRCxNQUFNO2dCQUFFQztjQUFJLENBQUUsR0FBR0gsUUFBUTtjQUN6QixNQUFNSSxVQUFVLEdBQUc7Z0JBQ2xCbEQsSUFBSSxFQUFFeUMsS0FBSyxDQUFDekMsSUFBSSxJQUFJLGFBQWEwQyxNQUFNLEVBQUU7Z0JBQ3pDUyxJQUFJLEVBQUVGLElBQUksQ0FBQ0csSUFBSTtnQkFDZkMsTUFBTSxFQUFFSixJQUFJLENBQUNJLE1BQU07Z0JBQ25CQyxLQUFLLEVBQUVMLElBQUksQ0FBQ0ssS0FBSztnQkFDakJDLE1BQU0sRUFBRWQsS0FBSztnQkFDYmUsU0FBUyxFQUFFLGtCQUFLLEdBQUUsQ0FBQ0MsSUFBSSxFQUFFO2dCQUN6QnZCLGFBQWEsRUFBRWUsSUFBSSxDQUFDZjtlQUNwQjtjQUNEdEIsT0FBTyxDQUFDOEMsR0FBRyxDQUFDLElBQUksRUFBRWxCLEVBQUUsQ0FBQztjQUNyQixPQUFPLElBQUksQ0FBQ21CLFFBQVEsQ0FBQ1QsVUFBVSxFQUFFVixFQUFFLENBQUM7WUFDckM7WUFFQSxNQUFNbUIsUUFBUSxDQUFDVCxVQUFVLEVBQUVWLEVBQUU7Y0FDNUIsSUFBSTtnQkFDSCxNQUFNO2tCQUFFTDtnQkFBSSxDQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87Z0JBQzdCLE1BQU1XLFFBQVEsR0FBRyxNQUFNWCxJQUFJLENBQUN5QixlQUFlLENBQUM7a0JBQzNDQyxJQUFJLEVBQUU7b0JBQUVDLE1BQU0sRUFBRTNCLElBQUksQ0FBQ0ssRUFBRTtvQkFBRUEsRUFBRTtvQkFBRXVCLE9BQU8sRUFBRWIsVUFBVSxDQUFDaEIsYUFBYTtvQkFBRThCLElBQUksRUFBRSxNQUFNO29CQUFFQyxTQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBRztrQkFBRSxDQUFFO2tCQUNyR3JCLFFBQVEsRUFBRTtvQkFDVGdCLE1BQU0sRUFBRTNCLElBQUksQ0FBQ0ssRUFBRTtvQkFDZnVCLE9BQU8sRUFBRWIsVUFBVSxDQUFDRyxNQUFNO29CQUMxQlcsSUFBSSxFQUFFLFFBQVE7b0JBQ2RWLEtBQUssRUFBRUosVUFBVSxDQUFDSSxLQUFLO29CQUN2QlcsU0FBUyxFQUFFQyxJQUFJLENBQUNDLEdBQUc7O2lCQUVwQixDQUFDO2dCQUVGLElBQUksQ0FBQyxPQUFPLENBQUNDLGNBQWMsR0FBR3RCLFFBQVE7Z0JBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUNSLGVBQWUsR0FBRyxLQUFLO2VBQ3BDLENBQUMsT0FBT2IsQ0FBQyxFQUFFO2dCQUNYYixPQUFPLENBQUM1QixLQUFLLENBQUMsbUJBQW1CLEVBQUV5QyxDQUFDLENBQUM7ZUFDckMsU0FBUztnQkFDVCxJQUFJLENBQUMxQyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFDQWdFLGdCQUFnQixHQUFHLE1BQU9OLEtBQUssSUFBd0I7Y0FDdEQsTUFBTTRCLElBQUksR0FBRyxJQUFJQyxRQUFRLEVBQUU7Y0FDM0JELElBQUksQ0FBQ0UsTUFBTSxDQUFDLE9BQU8sRUFBRTlCLEtBQUssQ0FBQztjQUMzQjRCLElBQUksQ0FBQ0UsTUFBTSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUM7Y0FDbENGLElBQUksQ0FBQ0UsTUFBTSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQztjQUN6Q0YsSUFBSSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUNwQyxJQUFJLENBQUNLLEVBQUUsQ0FBQztjQUMzQzZCLElBQUksQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRUMsdUJBQWMsQ0FBQ0MsTUFBTSxDQUFDO2NBQzVDSixJQUFJLENBQUNFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsWUFBWUwsSUFBSSxDQUFDQyxHQUFHLEVBQUUsTUFBTSxDQUFDO2NBQ3JERSxJQUFJLENBQUNFLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDRyxVQUFVLENBQUM7Y0FFdEQsTUFBTUMsR0FBRyxHQUFHLElBQUlDLG1CQUFTLEVBQUU7Y0FDM0IsTUFBTTlCLFFBQVEsR0FBRyxNQUFNNkIsR0FBRyxDQUFDRSxNQUFNLENBQUNSLElBQUksRUFBRTVELGVBQU0sQ0FBQ0osTUFBTSxDQUFDSyxlQUFlLENBQUM7Y0FDdEUsT0FBT29DLFFBQVEsQ0FBQ2dDLElBQUksRUFBRTtZQUN2QixDQUFDOztVQUNEOUc7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdk5EO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFPTSxNQUFPWixZQUFhLFNBQVFnQixvQkFBcUI7WUFDdEQsU0FBUztZQUtULFdBQVcsR0FBRyxDQUFDLFlBQVksQ0FBQztZQUM1QixJQUFJMkcsUUFBUTtjQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVM7WUFDdEI7WUFFQSxLQUFLO1lBQ0wsSUFBSS9FLElBQUk7Y0FDUCxPQUFPLElBQUksQ0FBQyxLQUFLO1lBQ2xCO1lBRUEsU0FBUztZQUNULElBQUlnRixRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN0QjtZQUVBLEtBQUs7WUFDTCxJQUFJN0MsSUFBSTtjQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUs7WUFDbEI7WUFDQSxNQUFNLEdBQUc3QyxtQkFBVSxDQUFDMkYsS0FBSztZQUN6QixJQUFJQSxLQUFLO2NBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDQyxLQUFLLElBQUksRUFBRTtZQUMvQjtZQUVBLE1BQU0sR0FBaUIsSUFBSS9HLG1CQUFZLENBQUMsSUFBSSxDQUFDO1lBQzdDLElBQUlnSCxZQUFZO2NBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUVBLElBQUksR0FBRzdGLG1CQUFVLENBQUM4RixjQUFjO1lBQ2hDLElBQUlDLEdBQUc7Y0FDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUNILEtBQUssSUFBSSxFQUFFO1lBQzdCO1lBRUEsV0FBVztZQUNYLElBQUlSLFVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ3hCO1lBQ0EsSUFBSUEsVUFBVSxDQUFDWSxFQUFFO2NBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUdBLEVBQUU7WUFDdEI7WUFFQSxjQUFjLEdBQUcsT0FBTztZQUN4QixJQUFJQyxhQUFhO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWM7WUFDM0I7WUFDQSxJQUFJQSxhQUFhLENBQUNDLEtBQUs7Y0FDdEIsSUFBSSxDQUFDLGNBQWMsR0FBR0EsS0FBSztZQUM1QjtZQUVBLFNBQVM7WUFDVCxJQUFJQyxRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN0QjtZQUNBLElBQUlBLFFBQVEsQ0FBQ0EsUUFBUTtjQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHQSxRQUFRO1lBQzFCO1lBRUEsSUFBSUMsY0FBYztjQUNqQixNQUFNaEIsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUNRLEtBQUssQ0FBQ1MsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ3BELEVBQUUsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDO2NBQ3ZFLE9BQU9rQyxVQUFVLEVBQUV2QixJQUFJLElBQUksa0JBQWtCO1lBQzlDO1lBRUEsZUFBZTtZQUNmLElBQUlpQixjQUFjO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLGVBQWU7WUFDNUI7WUFFQSxJQUFJQSxjQUFjLENBQUN5QixPQUFPO2NBQ3pCLElBQUlBLE9BQU8sRUFBRXJELEVBQUUsS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFQSxFQUFFLEVBQUU7Y0FDOUMsSUFBSSxDQUFDLGVBQWUsR0FBR3FELE9BQU87WUFDL0I7WUFFQSxXQUFXLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3ZCLElBQUlDLFVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ3hCO1lBQ0E5RztjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0csYUFBYSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7Y0FDbkQsSUFBSSxDQUFDNEcsUUFBUSxHQUFHLElBQUk7WUFDckI7WUFFQWpJLEtBQUs7Y0FDSixJQUFJLENBQUNnQixRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUNtQixLQUFLLEdBQUcsS0FBSztZQUNuQjtZQUVBeEMsSUFBSSxHQUFHLE1BQU84RSxFQUFVLElBQUk7Y0FDM0IsSUFBSSxDQUFDQSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDdEMsS0FBSyxHQUFHLElBQUk7Z0JBQ2pCLElBQUksQ0FBQ3VGLFFBQVEsR0FBRyxJQUFJO2dCQUNwQjs7Y0FHRCxJQUFJLENBQUMxRyxRQUFRLEdBQUcsSUFBSTtjQUVwQixNQUFNb0QsSUFBSSxHQUFHLElBQUk4RCxVQUFJLENBQUM7Z0JBQUV6RDtjQUFFLENBQUUsQ0FBQztjQUM3QixNQUFNTCxJQUFJLENBQUN6RSxJQUFJLENBQUM7Z0JBQUU4RTtjQUFFLENBQUUsQ0FBQztjQUN2QmxELG1CQUFVLENBQUM0RyxXQUFXLEdBQUcvRCxJQUFJO2NBQzdCLElBQUksQ0FBQ0EsSUFBSSxDQUFDZ0UsS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUNwSCxRQUFRLEdBQUcsS0FBSztnQkFDckIsSUFBSSxDQUFDbUIsS0FBSyxHQUFHLElBQUk7Z0JBQ2pCLElBQUksQ0FBQ3VGLFFBQVEsR0FBRyxJQUFJO2dCQUNwQjs7Y0FHRCxNQUFNdEQsSUFBSSxDQUFDaUUsT0FBTztjQUNsQixNQUFNQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDbkIsS0FBSyxDQUFDUyxJQUFJLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDcEQsRUFBRSxLQUFLTCxJQUFJLENBQUNtRSxjQUFjLENBQUM7Y0FDbkYsSUFBSSxDQUFDLFdBQVcsR0FBR0QsbUJBQW1CLEdBQUdBLG1CQUFtQixDQUFDN0QsRUFBRSxHQUFHLFNBQVM7Y0FFM0U7Y0FDQUwsSUFBSSxDQUFDNUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFLO2dCQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHNEMsSUFBSSxDQUFDNEMsUUFBUSxFQUFFRyxLQUFLO2dCQUNyQyxJQUFJLENBQUNwRyxZQUFZLENBQUMsYUFBYSxDQUFDO2NBQ2pDLENBQUMsQ0FBQztjQUNGLE1BQU1xRCxJQUFJLENBQUNvRSxPQUFPLENBQUM7Z0JBQUUvRDtjQUFFLENBQUUsQ0FBQztjQUMxQm5GLFVBQVUsQ0FBQzhFLElBQUksR0FBR0EsSUFBSTtjQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHQSxJQUFJO2NBQ2pCLE1BQU1xRSxJQUFJLEdBQUcsTUFBTVQsc0JBQVUsQ0FBQ3JJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFeUUsSUFBSSxDQUFDc0UsUUFBUSxDQUFDO2NBQ25FRCxJQUFJLENBQUNFLE9BQU8sQ0FBQyxDQUFDQyxTQUFTLEVBQUVDLEtBQUssS0FBSSxDQUFFLENBQUMsQ0FBQztjQUV0QyxJQUFJLENBQUMsV0FBVyxDQUFDRixPQUFPLENBQUMsQ0FBQ0MsU0FBUyxFQUFFQyxLQUFLLEtBQUk7Z0JBQzdDLElBQUksQ0FBQyxXQUFXLENBQUNuSCxHQUFHLENBQUNrSCxTQUFTLEVBQUVILElBQUksQ0FBQ0ksS0FBSyxDQUFDLENBQUM7Y0FDN0MsQ0FBQyxDQUFDO2NBRUYsSUFBSSxDQUFDLFNBQVMsR0FBR3pFLElBQUksQ0FBQzRDLFFBQVEsQ0FBQ0csS0FBSztjQUNwQyxJQUFJLENBQUNuRyxRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUNtQixLQUFLLEdBQUcsSUFBSTtjQUNqQixJQUFJLENBQUN1RixRQUFRLEdBQUcsS0FBSztZQUN0QixDQUFDO1lBRUQsTUFBTW9CLFdBQVcsQ0FBQzlDLE9BQWU7Y0FDaEMsSUFBSTtnQkFDSCtDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDekIsSUFBSSxDQUFDLGVBQWUsR0FBR2xILFNBQVM7Z0JBQ2hDLElBQUksQ0FBQ0EsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQ21ILFFBQVEsQ0FBQ2pELE9BQU8sQ0FBQyxFQUFFO2dCQUM3QyxJQUFJLENBQUNoRixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsSUFBSSxDQUFDdUQsZUFBZSxHQUFHLElBQUk7Z0JBQzNCLE1BQU07a0JBQUV1RCxPQUFPO2tCQUFFL0M7Z0JBQVEsQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQytELFdBQVcsQ0FBQzlDLE9BQU8sQ0FBQztnQkFFbkU7Z0JBQ0EsSUFBSSxDQUFDLGVBQWUsR0FBRzhCLE9BQU87Z0JBQzlCLE1BQU1vQixRQUFRLEdBQUcsTUFBSztrQkFDckIsSUFBSSxDQUFDbkksWUFBWSxDQUFDLFdBQVdnRSxRQUFRLENBQUNOLEVBQUUsVUFBVSxDQUFDO2dCQUNwRCxDQUFDO2dCQUNELE1BQU0wRSxLQUFLLEdBQUcsTUFBSztrQkFDbEJyQixPQUFPLENBQUNzQixHQUFHLENBQUMsaUJBQWlCLEVBQUVGLFFBQVEsQ0FBQztrQkFDeEMsSUFBSSxDQUFDbkksWUFBWSxDQUFDLGdCQUFnQixDQUFDO2tCQUNuQyxJQUFJLENBQUNBLFlBQVksQ0FBQyxXQUFXZ0UsUUFBUSxDQUFDTixFQUFFLFdBQVcsQ0FBQztrQkFDcERxRCxPQUFPLENBQUNzQixHQUFHLENBQUMsbUJBQW1CLEVBQUVELEtBQUssQ0FBQztnQkFDeEMsQ0FBQztnQkFFRHJCLE9BQU8sQ0FBQ3RHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTBILFFBQVEsQ0FBQztnQkFDdkNwQixPQUFPLENBQUN0RyxFQUFFLENBQUMsbUJBQW1CLEVBQUUySCxLQUFLLENBQUM7Z0JBRXRDLElBQUksQ0FBQzVFLGVBQWUsR0FBRyxLQUFLO2dCQUM1QixJQUFJLENBQUN4RCxZQUFZLENBQUMsYUFBYSxDQUFDO2VBQ2hDLENBQUMsT0FBTzJDLENBQUMsRUFBRTtnQkFDWGIsT0FBTyxDQUFDNUIsS0FBSyxDQUFDeUMsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDYSxlQUFlLEdBQUcsS0FBSztnQkFDNUIsSUFBSSxDQUFDdkQsUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0TEQ7VUFDQTtVQUVPO1VBQVcsTUFDWm1CLFFBQVMsU0FBUWlJLFlBQU07WUFDNUIsWUFBWSxHQUFHLEtBQUs7WUFDcEIsT0FBTztZQUNQLE9BQU87WUFDUCxVQUFVO1lBQ1YsWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGNBQWM7WUFFZCxPQUFPLEdBQVcsRUFBRTtZQUNwQixJQUFJQyxNQUFNO2NBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTztZQUNwQjtZQUNBLE9BQU87WUFDUCxJQUFJckUsTUFBTTtjQUNULE9BQU8sSUFBSSxDQUFDLE9BQU87WUFDcEI7WUFFQSxVQUFVLEdBQUcsS0FBSztZQUNsQixJQUFJZixTQUFTO2NBQ1osT0FBTyxJQUFJLENBQUMsVUFBVTtZQUN2QjtZQUVBLE1BQU07WUFDTixJQUFJakQsS0FBSztjQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFFQSxJQUFJc0ksS0FBSztjQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNwQjtZQUVBLE1BQU07WUFDTixJQUFJN0UsS0FBSztjQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFFQSxTQUFTO1lBQ1QsSUFBSThFLFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBQ0Esa0JBQWtCO1lBQ2xCLGNBQWMsR0FBRyxFQUFFO1lBQ25CLElBQUlyRixhQUFhO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWM7WUFDM0I7WUFFQSxNQUFNc0YsY0FBYztjQUNuQixPQUFPQyxTQUFTLENBQUNDLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDO2dCQUFFM0gsSUFBSSxFQUFFO2NBQW1CLENBQUUsQ0FBQztZQUNsRTtZQUVBLGNBQWM7WUFDZCxNQUFNNEgsVUFBVTtjQUNmLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLE1BQU0sSUFBSSxDQUFDLFlBQVk7Y0FDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJQyxvQkFBYyxFQUFRO2NBQzlDeEssVUFBVSxFQUFFb0ssU0FBUyxDQUFDSyxZQUFZLENBQ2hDQyxZQUFZLENBQUM7Z0JBQUV0RixLQUFLLEVBQUU7Y0FBSSxDQUFFLENBQUMsQ0FDN0J1RixJQUFJLENBQUNDLE1BQU0sSUFBRztnQkFDZCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUlDLGFBQWEsQ0FBQ0QsTUFBTSxDQUFDO2dCQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHQSxNQUFNO2dCQUNyQjtnQkFDQSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUs1SyxVQUFVLENBQUM4SyxZQUFZLElBQUk5SyxVQUFVLENBQUMrSyxrQkFBa0IsR0FBRztnQkFDckY7Z0JBQ0EsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDQyxjQUFjLEVBQUU7Z0JBRXBEO2dCQUNBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQ0MsdUJBQXVCLENBQUNMLE1BQU0sQ0FBQztnQkFDakU7Z0JBQ0E7Z0JBQ0EsSUFBSSx5QkFBeUIsSUFBSTVLLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2tCQUN2RDtrQkFDQSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSWtMLHVCQUF1QixFQUFFO2tCQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQUNDLElBQUksR0FBRyxPQUFPO2tCQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUNDLFVBQVUsR0FBRyxJQUFJO2tCQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUNDLGNBQWMsR0FBRyxJQUFJO2tCQUM3QztrQkFDQSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUliLG9CQUFjLEVBQVU7a0JBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQ2MsUUFBUSxHQUFHQyxLQUFLLElBQUc7b0JBQzFDLElBQUlDLGlCQUFpQixHQUFHLEVBQUU7b0JBQzFCLElBQUlDLGVBQWUsR0FBRyxFQUFFO29CQUN4QixLQUFLLElBQUlsRCxDQUFDLEdBQUdnRCxLQUFLLENBQUNHLFdBQVcsRUFBRW5ELENBQUMsR0FBR2dELEtBQUssQ0FBQ0ksT0FBTyxDQUFDQyxNQUFNLEVBQUUsRUFBRXJELENBQUMsRUFBRTtzQkFDOUQsSUFBSWdELEtBQUssQ0FBQ0ksT0FBTyxDQUFDcEQsQ0FBQyxDQUFDLENBQUNzRCxPQUFPLEVBQUU7d0JBQzdCSixlQUFlLElBQUlGLEtBQUssQ0FBQ0ksT0FBTyxDQUFDcEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUN1RCxVQUFVO3dCQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHTCxlQUFlO3dCQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDMUgsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7dUJBQ2hELE1BQU07d0JBQ055SCxpQkFBaUIsSUFBSUQsS0FBSyxDQUFDSSxPQUFPLENBQUNwRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3VELFVBQVU7OztrQkFHdEQsQ0FBQztrQkFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUNySCxPQUFPLEdBQUc4RyxLQUFLLElBQUloSSxPQUFPLENBQUM1QixLQUFLLENBQUMsd0JBQXdCLENBQUM7a0JBRWxGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQ29LLEtBQUssRUFBRTtpQkFDL0IsTUFBTTtrQkFDTnhJLE9BQU8sQ0FBQzVCLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQzs7Z0JBRWxELElBQUksQ0FBQyxjQUFjLENBQUNxSyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUVULEtBQUssSUFBRztrQkFDN0QsSUFBSUEsS0FBSyxDQUFDM0YsSUFBSSxDQUFDcUcsSUFBSSxLQUFLLENBQUMsRUFBRTtrQkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDWCxLQUFLLENBQUMzRixJQUFJLENBQUM7a0JBRTdCLElBQUksQ0FBQ25ELE9BQU8sQ0FBQyxlQUFlLENBQUM7Z0JBQzlCLENBQUMsQ0FBQztjQUNILENBQUMsQ0FBQyxDQUNEMEosS0FBSyxDQUFDeEssS0FBSyxJQUFHO2dCQUNkNEIsT0FBTyxDQUFDNUIsS0FBSyxDQUFDQSxLQUFLLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUdBLEtBQUssQ0FBQzZHLE9BQU87Z0JBQzNCLElBQUksQ0FBQyxZQUFZLENBQUN4RSxNQUFNLEVBQUU7Y0FDM0IsQ0FBQyxDQUFDLENBQ0RvSSxPQUFPLENBQUMsTUFBSztnQkFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUk7Z0JBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUNySSxPQUFPLEVBQUU7Y0FDNUIsQ0FBQyxDQUFDO2NBRUgsT0FBTyxJQUFJLENBQUMsWUFBWTtZQUN6QjtZQUVBc0ksTUFBTTtjQUNMLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQjtjQUV6RDtjQUNBO2NBRUEsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUk3QixvQkFBYyxFQUFRO2NBQ25ELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsTUFBTSxJQUFJNUgsS0FBSyxDQUFDLHlEQUF5RCxDQUFDOztjQUUzRSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVM7Y0FDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJO2NBQ3RCLElBQUksQ0FBQ0gsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUV0QixJQUFJLENBQUM4SCxVQUFVLEVBQUUsQ0FDZkksSUFBSSxDQUFDLFlBQVc7Z0JBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsa0JBQUssR0FBRTtnQkFDekJwSCxPQUFPLENBQUM4QyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUN0QyxPQUFPLEVBQUU7Z0JBQ2hDO2dCQUNBO2dCQUVBLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRWdJLEtBQUssRUFBRTtjQUNuQyxDQUFDLENBQUMsQ0FFREksS0FBSyxDQUFDeEssS0FBSyxJQUFHO2dCQUNkNEIsT0FBTyxDQUFDNUIsS0FBSyxDQUFDQSxLQUFLLENBQUM7Y0FDckIsQ0FBQyxDQUFDO2NBQ0gsT0FBTyxJQUFJLENBQUMsaUJBQWlCO1lBQzlCO1lBQ0EySyxVQUFVLEdBQUcsTUFBSztjQUNqQjtjQUNBLElBQUksQ0FBQyxPQUFPLENBQ1ZDLFNBQVMsRUFBRSxDQUFDO2NBQUEsQ0FDWmxELE9BQU8sQ0FBRW1ELEtBQUssSUFBa0NBLEtBQUssQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLENBQUM7O1lBRURBLElBQUk7Y0FDSCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDekJsSixPQUFPLENBQUNDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDakQ7O2NBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLFlBQVk7Y0FDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJZ0gsb0JBQWMsRUFBTztjQUU3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLElBQUk1SCxLQUFLLENBQUMscUNBQXFDLENBQUM7Y0FDNUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTO2NBQ3hCLE1BQU02SixJQUFJLEdBQUcsTUFBSztnQkFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUs7Z0JBQ3ZCLE1BQU1DLE9BQU8sR0FBRyxrQkFBSyxHQUFFO2dCQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDVixnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBVztrQkFDdkQsTUFBTTVHLEtBQUssR0FBRyxJQUFJdUgsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQUU1SixJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQzZKO2tCQUFRLENBQUUsQ0FBQztrQkFFNUU7a0JBQ0EsSUFBSSxDQUFDLE1BQU0sR0FBR3hILEtBQUs7a0JBRW5CLE1BQU15SCxRQUFRLEdBQUcsTUFBSztvQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQzlJLE9BQU8sQ0FBQ3FCLEtBQUssQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRzVDLFNBQVM7a0JBQzlCLENBQUM7a0JBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDbUksSUFBSSxDQUFDa0MsUUFBUSxDQUFDO21CQUNsQyxNQUFNO29CQUNOLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtzQkFDdEJBLFFBQVEsRUFBRTs7O2tCQUlaLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO29CQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUM5SSxPQUFPLENBQUNxQixLQUFLLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRzVDLFNBQVM7O2tCQUVuQyxJQUFJLENBQUM4SixVQUFVLEVBQUU7a0JBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUc5SixTQUFTO2tCQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHQSxTQUFTO2tCQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHQSxTQUFTO2dCQUM5QixDQUFDLENBQUM7Z0JBRUYsSUFBSSxDQUFDLGNBQWMsRUFBRWlLLElBQUksRUFBRTtnQkFDM0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFQSxJQUFJLEVBQUU7Z0JBRS9CLElBQUksQ0FBQ2hLLE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDdkIsQ0FBQztjQUVELElBQUksQ0FBQyxZQUFZLEdBQUdnSyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUNsQyxVQUFVLEVBQUUsQ0FBQ0ksSUFBSSxDQUFDOEIsSUFBSSxDQUFDO2NBQ3pELE9BQU8sSUFBSSxDQUFDLFlBQVk7WUFDekI7O1VBQ0E5TDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsTkQ7VUFDQTtVQUNBO1VBRU0sU0FBVW1NLFNBQVMsQ0FBQztZQUFFN00sS0FBSztZQUFFOE07VUFBUyxDQUFFO1lBQzdDLE1BQU1DLElBQUksR0FBR0MsY0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRS9CLG9CQUFTLEVBQUMsQ0FBQ2pOLEtBQUssQ0FBQyxFQUFFLE1BQU1ELFVBQVUsQ0FBQ21OLFVBQVUsQ0FBQyxNQUFNQyxjQUFjLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxhQUFhLENBQUM7WUFDM0YsTUFBTUEsY0FBYyxHQUFHLE1BQUs7Y0FDM0JMLFNBQVMsQ0FBQ00sT0FBTyxFQUFFQyxjQUFjLENBQUM7Z0JBQUVDLEtBQUssRUFBRSxLQUFLO2dCQUFFQyxRQUFRLEVBQUU7Y0FBUSxDQUFFLENBQUM7WUFDeEUsQ0FBQztZQUVELE1BQU1DLGFBQWEsR0FBRyxNQUFLO2NBQzFCLE1BQU14SyxTQUFTLEdBQUc4SixTQUFTLENBQUNNLE9BQU8sRUFBRUssVUFBVTtjQUMvQyxJQUFJLENBQUN6SyxTQUFTLEVBQUUsT0FBTyxJQUFJO2NBQzNCLE1BQU0wSyxhQUFhLEdBQUcxSyxTQUFTLENBQUMySyxxQkFBcUIsRUFBRTtjQUN2RCxNQUFNQyxPQUFPLEdBQUdkLFNBQVMsQ0FBQ00sT0FBTyxDQUFDTyxxQkFBcUIsRUFBRTtjQUN6RCxNQUFNRSxTQUFTLEdBQUcsQ0FBQztjQUNuQixPQUFPRCxPQUFPLENBQUNFLE1BQU0sR0FBR0QsU0FBUyxJQUFJSCxhQUFhLENBQUNJLE1BQU07WUFDMUQsQ0FBQztZQUVEZCxjQUFLLENBQUNlLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU0vSyxTQUFTLEdBQUc4SixTQUFTLENBQUNNLE9BQU8sRUFBRUssVUFBVTtjQUMvQyxJQUFJLENBQUN6SyxTQUFTLEVBQUU7Y0FFaEIsTUFBTWdMLFlBQVksR0FBRyxNQUFLO2dCQUN6QixNQUFNQyxPQUFPLEdBQUcsQ0FBQ1QsYUFBYSxFQUFFO2dCQUNoQyxJQUFJUyxPQUFPLEVBQUVsQixJQUFJLENBQUNLLE9BQU8sRUFBRWMsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FDNUNwQixJQUFJLENBQUNLLE9BQU8sRUFBRWMsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO2NBQzVDLENBQUM7Y0FDRHBMLFNBQVMsQ0FBQytJLGdCQUFnQixDQUFDLFFBQVEsRUFBRWlDLFlBQVksQ0FBQztjQUNsRCxPQUFPLE1BQU1oTCxTQUFTLENBQUNxTCxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVMLFlBQVksQ0FBQztZQUNuRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQ2hCLDREQUNDQSw2QkFBQ3NCLGlCQUFVO2NBQ1ZDLEdBQUcsRUFBRXhCLElBQUk7Y0FDVEEsSUFBSSxFQUFDLFdBQVc7Y0FDaEJ5QixPQUFPLEVBQUMsVUFBVTtjQUNsQkMsU0FBUyxFQUFDLDJCQUEyQjtjQUNyQ0MsT0FBTyxFQUFFdkI7WUFBYyxFQUN0QixDQUNBO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NBO1VBQ0E7VUFFQTtVQUNBO1VBQ0E7VUFFTSxTQUFVd0IsT0FBTyxDQUFDO1lBQUU3QjtVQUFTLENBQUU7WUFDcEMsTUFBTTtjQUFFOU07WUFBSyxDQUFFLEdBQUcsMkJBQWMsR0FBRTtZQUVsQyxNQUFNLENBQUN1TyxHQUFHLEVBQUUzTCxLQUFLLEVBQUVnTSxnQkFBZ0IsQ0FBQyxHQUFHLDhCQUFZLEVBQUMsWUFBWSxDQUFDO1lBRWpFLE9BQ0M1QjtjQUFLeUIsU0FBUyxFQUFDO1lBQWUsR0FDN0J6Qiw2QkFBQzZCLG9DQUFpQjtjQUFDQyxTQUFTLEVBQUVGLGdCQUFnQjtjQUFFRyxTQUFTLEVBQUVSO1lBQUcsRUFBSSxFQUVqRTNMLEtBQUssSUFDTG9LLDREQUNDQSw2QkFBQ2dDLGtCQUFRO2NBQUNsQyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUNsQ0U7Y0FBS3VCLEdBQUcsRUFBRXpCLFNBQVM7Y0FBRTJCLFNBQVMsRUFBQztZQUFXLEVBQUcsQ0FFOUMsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQTtVQUVBO1VBREE7O1VBR00sU0FBVUksaUJBQWlCLENBQUM7WUFBRUMsU0FBUztZQUFFQztVQUFTLENBQUU7WUFDekQsTUFBTTtjQUNML08sS0FBSyxFQUFFO2dCQUFFNkUsSUFBSTtnQkFBRTREO2NBQVU7WUFBRSxDQUMzQixHQUFHLDJCQUFjLEdBQUU7WUFFcEIsTUFBTXdHLFNBQVMsR0FBR0gsU0FBUztZQUMzQixPQUNDOUIsNERBQ0NBLDZCQUFDaUMsU0FBUztjQUFDVixHQUFHLEVBQUVRLFNBQVM7Y0FBRTVGLFFBQVEsRUFBRStGLElBQUksQ0FBQ0MsU0FBUyxDQUFDdEssSUFBSSxDQUFDc0UsUUFBUTtZQUFDLEVBQUksQ0FDcEU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBO1VBRUE7VUFDQTtVQUVBO1VBRUE7VUFVQSxNQUFNO1lBQUU4RDtVQUFNLENBQUUsR0FBR0QsY0FBSztVQUVqQjtVQUFVLFNBQVVyRSxJQUFJO1lBQzlCLE1BQU07Y0FBRTNJO1lBQUssQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDbEMsTUFBTW9QLFNBQVMsR0FBR3BQLEtBQUssQ0FBQ3lJLFVBQVUsQ0FBQ2xJLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDcEQsTUFBTSxDQUFDeUQsTUFBTSxFQUFFcUwsU0FBUyxDQUFDLEdBQUdyQyxjQUFLLENBQUNzQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU14QyxTQUFTLEdBQUdFLGNBQUssQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNwQyxNQUFNc0MsR0FBRyxHQUFHLHVCQUF1QnZMLE1BQU0sR0FBRyxvQkFBb0IsR0FBRyxFQUFFLEVBQUU7WUFFdkUsT0FDQ2dKO2NBQUt5QixTQUFTLEVBQUVjO1lBQUcsR0FDbEJ2Qyw2QkFBQ3dDLGNBQU07Y0FBQ3hMLE1BQU0sRUFBRUEsTUFBTTtjQUFFcUwsU0FBUyxFQUFFQTtZQUFTLEVBQUksRUFDaERyQyw2QkFBQzJCLGdCQUFPO2NBQUM3QixTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUNqQ0UsNkJBQUNILG9CQUFTO2NBQUM3TSxLQUFLLEVBQUVBLEtBQUs7Y0FBRThNLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ2hELENBQUNzQyxTQUFTLEVBQUVqRyxRQUFRLEVBQUVzRyxTQUFTLElBQy9CekMsNERBQ0NBO2NBQUt5QixTQUFTLEVBQUM7WUFBTSxHQUNwQnpCLDZCQUFDMEMsZ0JBQVM7Y0FBQzFQLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQ3RCLENBRVAsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQTtVQUNBO1VBQ0E7VUFFTyxNQUFNMlAsZUFBZSxHQUFHLE1BQUs7WUFDbkMsT0FDQzNDO2NBQUt5QixTQUFTLEVBQUM7WUFBbUIsR0FDakN6Qiw2QkFBQzRDLFdBQUk7Y0FBQ25CLFNBQVMsRUFBQyxJQUFJO2NBQUMxQixJQUFJLEVBQUU4QyxhQUFLLENBQUMsWUFBWTtZQUFDLEVBQUksRUFDbEQ3QztjQUFLeUIsU0FBUyxFQUFDO1lBQWUsR0FDN0J6QjtjQUFNeUIsU0FBUyxFQUFDO1lBQUssRUFBUSxFQUM3QnpCO2NBQU15QixTQUFTLEVBQUM7WUFBSyxFQUFRLEVBQzdCekI7Y0FBTXlCLFNBQVMsRUFBQztZQUFLLEVBQVEsQ0FDeEIsQ0FDRDtVQUVSLENBQUM7VUFBQy9OOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZGO1VBQ0E7VUFFQTtVQUNBO1VBQ0E7VUFFTSxTQUFVc08sUUFBUSxDQUFDO1lBQUVsQztVQUFTLENBQUU7WUFDckMsTUFBTTtjQUFFOU07WUFBSyxDQUFFLEdBQUcsMkJBQWMsR0FBRTtZQUNsQyxNQUFNLENBQUN5SCxRQUFRLEVBQUVxSSxXQUFXLENBQUMsR0FBRzlDLGNBQUssQ0FBQ3NDLFFBQVEsQ0FBY3RQLEtBQUssQ0FBQ3lILFFBQVEsSUFBSSxFQUFFLENBQUM7WUFFakYsb0JBQVMsRUFDUixDQUFDekgsS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKOFAsV0FBVyxDQUFDLENBQUMsR0FBRzlQLEtBQUssQ0FBQ3lILFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsRUFDRCxhQUFhLENBQ2I7WUFFRCxNQUFNMUIsTUFBTSxHQUFHMEIsUUFBUSxDQUFDc0ksR0FBRyxDQUFDLENBQUN4SCxPQUFPLEVBQUVELENBQUMsS0FBSTtjQUMxQyxNQUFNMEgsSUFBSSxHQUFHMUgsQ0FBQyxLQUFLYixRQUFRLENBQUNrRSxNQUFNLEdBQUcsQ0FBQztjQUN0QyxPQUFPcUIsNkJBQUNpRCxnQkFBTztnQkFBQ0MsR0FBRyxFQUFFLFdBQVc1SCxDQUFDLEVBQUU7Z0JBQUV3RSxTQUFTLEVBQUVBLFNBQVM7Z0JBQUV2RSxPQUFPLEVBQUVBLE9BQU87Z0JBQUV5SCxJQUFJLEVBQUVBO2NBQUksRUFBSTtZQUM1RixDQUFDLENBQUM7WUFFRixPQUNDaEQsNERBQ0VqSCxNQUFNLEVBQ04vRixLQUFLLENBQUNnRixlQUFlLElBQUlnSSw2QkFBQzJDLDBCQUFlLE9BQUcsQ0FDM0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVNLFNBQVVRLGNBQWMsQ0FBQztZQUFFNUgsT0FBTztZQUFFNkgsSUFBSTtZQUFFQyxhQUFhO1lBQUVDLElBQUksR0FBRztVQUFJLENBQUU7WUFDM0UsTUFBTTtjQUFFdFEsS0FBSztjQUFFc0I7WUFBTSxDQUFFLEdBQUcsMkJBQWMsR0FBRTtZQUUxQyxNQUFNLENBQUNpUCxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHeEQsY0FBSyxDQUFDc0MsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNsRCxNQUFNLENBQUNtQixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHMUQsY0FBSyxDQUFDc0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV6RCxvQkFBUyxFQUFDLENBQUNoTyxNQUFNLENBQUMsRUFBRSxNQUFNb1AsYUFBYSxDQUFDcFAsTUFBTSxDQUFDcVAsUUFBUSxDQUFDLENBQUM7WUFFekQsTUFBTUMsUUFBUSxHQUFHLE1BQUs7Y0FDckJGLGFBQWEsQ0FBQyxLQUFLLENBQUM7Y0FDcEJGLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDZCxDQUFDO1lBQ0Qsb0JBQVMsRUFBQyxDQUFDbFAsTUFBTSxDQUFDLEVBQUVzUCxRQUFRLEVBQUUsV0FBVyxDQUFDO1lBRTFDLE1BQU1DLE1BQU0sR0FBRyxPQUFPO2NBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQ25DTixTQUFTLENBQUMsTUFBTSxDQUFDO2NBQ2pCeFEsS0FBSyxDQUFDOEcsY0FBYyxHQUFHeUIsT0FBTztjQUM5QmpILE1BQU0sQ0FBQ3lQLGFBQWEsR0FBRyxDQUFDO2NBQ3hCLE1BQU16UCxNQUFNLENBQUNnUCxJQUFJLENBQUNGLElBQUksRUFBRTdILE9BQU8sQ0FBQ3JELEVBQUUsQ0FBQztZQUNwQyxDQUFDO1lBQ0QsTUFBTThMLE9BQU8sR0FBRyxPQUFPO2NBQUVGO1lBQU0sQ0FBRSxLQUFJO2NBQ3BDLE1BQU14UCxNQUFNLENBQUNrTCxJQUFJLEVBQUU7Y0FDbkJnRSxTQUFTLENBQUMsTUFBTSxDQUFDO2NBQ2pCRSxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxNQUFNTyxXQUFXLEdBQUcsWUFBVztjQUM5QixNQUFNbFIsVUFBVSxFQUFFb0ssU0FBUyxDQUFDK0csU0FBUyxDQUFDQyxTQUFTLENBQUNmLElBQUksQ0FBQztjQUNyRGdCLFlBQUssQ0FBQ0MsT0FBTyxDQUFDLDZCQUE2QixDQUFDO1lBQzdDLENBQUM7WUFFRCxNQUFNQyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFO1lBQUksQ0FBRTtZQUNuQyxNQUFNQyxLQUFLLEdBQUd2UixLQUFLLENBQUM4RyxjQUFjLEVBQUU1QixFQUFFLEtBQUtxRCxPQUFPLEVBQUVyRCxFQUFFLElBQUl1TCxVQUFVO1lBRXBFLE1BQU0xRCxJQUFJLEdBQUd3RSxLQUFLLElBQUloQixNQUFNLEtBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNO1lBQ3pELE1BQU03QixPQUFPLEdBQUc2QyxLQUFLLElBQUloQixNQUFNLEtBQUssTUFBTSxHQUFHUyxPQUFPLEdBQUdILE1BQU07WUFFN0QsT0FDQzdELDBDQUNDQTtjQUFLeUIsU0FBUyxFQUFDO1lBQWdCLEdBQzlCekIsNkJBQUNzQixpQkFBVTtjQUFDSSxPQUFPLEVBQUV1QyxXQUFXO2NBQUVsRSxJQUFJLEVBQUM7WUFBTSxFQUFHLEVBQy9DdUQsSUFBSSxJQUFJdEQsNkJBQUNzQixpQkFBVTtjQUFDSSxPQUFPLEVBQUVBLE9BQU87Y0FBQSxlQUFjLEtBQUs7Y0FBQzNCLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ2xFLEVBQ0xzRCxhQUFhLElBQUlyRDtjQUFLeUIsU0FBUyxFQUFDO1lBQWlCLEdBQUU0QixhQUFhLFlBQWMsQ0FDMUU7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREE7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVbUIsV0FBVyxDQUFDO1lBQUU5SztVQUFJLENBQUU7WUFDbkMsTUFBTSxDQUFDK0ssU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRyxtQkFBUSxFQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNM0UsSUFBSSxHQUFHckcsSUFBSSxLQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsWUFBWTtZQUNwRCxNQUFNaUwsU0FBUyxHQUFHekssdUJBQWMsQ0FBQ1gsSUFBSSxDQUFDcUwsYUFBYSxFQUFFO1lBQ3JELE1BQU1DLGVBQWUsR0FBRyxNQUFNSCxZQUFZLENBQUMsSUFBSSxDQUFDO1lBRWhELE9BQ0MxRSw0REFDRTJFLFNBQVMsQ0FBQ0csUUFBUSxJQUFJcEwsSUFBSSxLQUFLLE1BQU0sSUFBSSxDQUFDK0ssU0FBUyxHQUNuRHpFO2NBQUsrRSxHQUFHLEVBQUMsb0JBQW9CO2NBQUNDLEdBQUcsRUFBRUwsU0FBUyxDQUFDRyxRQUFRO2NBQUVHLE9BQU8sRUFBRUo7WUFBZSxFQUFJLEdBRW5GN0UsNkJBQUM0QyxXQUFJO2NBQUNuQixTQUFTLEVBQUMsSUFBSTtjQUFDMUIsSUFBSSxFQUFFOEMsYUFBSyxDQUFDOUMsSUFBSSxDQUFDLElBQUlBO1lBQUksRUFDOUMsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ00sU0FBVW1GLFdBQVcsQ0FBQztZQUFFM0osT0FBTztZQUFFNEo7VUFBUSxDQUFFO1lBQ2hELE1BQU07Y0FBRW5TLEtBQUs7Y0FBRTBJLFFBQVE7Y0FBRXBIO1lBQU0sQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDcEQsTUFBTThPLElBQUksR0FBRzdILE9BQU8sRUFBRTlCLE9BQU8sSUFBSSxFQUFFO1lBQ25DLE1BQU04SCxHQUFHLEdBQUd2QixjQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUIsTUFBTW1GLGVBQWUsR0FBRyxNQUN2QjdELEdBQUcsQ0FBQ25CLE9BQU8sQ0FBQ2lGLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDakosT0FBTyxDQUFDa0osT0FBTyxJQUFJQSxPQUFPLENBQUNwRSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVyRyxvQkFBUyxFQUFDLENBQUM5TSxNQUFNLENBQUMsRUFBRThRLGVBQWUsRUFBRSxXQUFXLENBQUM7WUFDakQsSUFBSSxPQUFPaEMsSUFBSSxLQUFLLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFekMsTUFBTW1DLFdBQVcsR0FBR2pILEtBQUssSUFBS3RMLEtBQUssQ0FBQzhHLGNBQWMsR0FBR3lCLE9BQVE7WUFFN0QsTUFBTWlLLFdBQVcsR0FBR2pLLE9BQU8sSUFBSUEsT0FBTyxDQUFDN0IsSUFBSSxLQUFLLE1BQU0sSUFBSWdDLFFBQVE7WUFDbEUsTUFBTStKLGFBQWEsR0FBR2xLLE9BQU8sQ0FBQ3JELEVBQUUsS0FBS2xGLEtBQUssQ0FBQzhHLGNBQWMsRUFBRTVCLEVBQUUsSUFBSXNOLFdBQVc7WUFFNUU7WUFDQSxPQUNDeEY7Y0FBS3lCLFNBQVMsRUFBQyx5QkFBeUI7Y0FBQ0YsR0FBRyxFQUFFQTtZQUFHLEdBQy9DLENBQUNoRyxPQUFPLENBQUNwRCxLQUFLLElBQ2Q2SCw2QkFBQzBGLGtCQUFRO2NBQ1JqTSxPQUFPLEVBQUUySixJQUFJO2NBQ2IrQixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJqTixFQUFFLEVBQUVxRCxPQUFPLENBQUNyRCxFQUFFO2NBQ2RxTixXQUFXLEVBQUVBLFdBQVc7Y0FDeEJqUixNQUFNLEVBQUVBLE1BQU07Y0FDZG9ILFFBQVEsRUFBRStKLGFBQWEsSUFBSUQ7WUFBVyxFQUV2QyxFQUNBakssT0FBTyxDQUFDcEQsS0FBSyxJQUFJNkgsNkJBQUMyRix3QkFBVztjQUFDWCxHQUFHLEVBQUV6SixPQUFPLENBQUNwRCxLQUFLO2NBQUV5TixPQUFPO1lBQUEsRUFBRyxDQUN4RDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQTtVQUdPLE1BQU1DLGtCQUFrQixHQUFHN0YsY0FBSyxDQUFDOEYsYUFBYSxDQUFDLEVBQXlCLENBQUM7VUFBQ3BTO1VBQzFFLE1BQU1xUyxxQkFBcUIsR0FBRyxNQUFNL0YsY0FBSyxDQUFDZ0csVUFBVSxDQUFDSCxrQkFBa0IsQ0FBQztVQUFDblM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSmhGO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFDQTtVQUVBLFNBQVN1UyxnQkFBZ0IsQ0FBQztZQUFFbkcsU0FBUztZQUFFdkUsT0FBTztZQUFFeUg7VUFBSSxDQUFFO1lBQ3JELE1BQU0sQ0FBQ3ZKLE9BQU8sRUFBRXlNLFVBQVUsQ0FBQyxHQUFHbEcsY0FBSyxDQUFDc0MsUUFBUSxDQUFTL0csT0FBTyxFQUFFOUIsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUM1RTs7O1lBR0EsTUFBTSxDQUFDME0sUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3BHLGNBQUssQ0FBQ3NDLFFBQVEsQ0FBVSxJQUFJLENBQUM7WUFDN0QsTUFBTUMsR0FBRyxHQUFHLFdBQVdoSCxPQUFPLENBQUM3QixJQUFJLEVBQUU7WUFDckMsTUFBTTJKLGFBQWEsR0FBRzlILE9BQU8sQ0FBQzdCLElBQUksS0FBSyxRQUFRLEdBQUc2QixPQUFPLENBQUN2QyxLQUFLLEVBQUVxTixXQUFXLEdBQUcsSUFBSTtZQUNuRixNQUFNO2NBQUVyVDtZQUFLLENBQUUsR0FBRywyQkFBYyxHQUFFO1lBRWxDLE1BQU1tTixjQUFjLEdBQUcsTUFBSztjQUMzQkwsU0FBUyxDQUFDTSxPQUFPLEVBQUVDLGNBQWMsQ0FBQztnQkFBRUMsS0FBSyxFQUFFLEtBQUs7Z0JBQUVDLFFBQVEsRUFBRTtjQUFRLENBQUUsQ0FBQztZQUN4RSxDQUFDO1lBRUQsb0JBQVMsRUFDUixDQUFDdk4sS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKb1QsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNsQkYsVUFBVSxDQUFDM0ssT0FBTyxDQUFDOUIsT0FBTyxDQUFDO2NBQzNCMEcsY0FBYyxFQUFFO1lBQ2pCLENBQUMsRUFDRCxXQUFXNUUsT0FBTyxDQUFDckQsRUFBRSxVQUFVLENBQy9CO1lBQ0Qsb0JBQVMsRUFBQyxDQUFDbEYsS0FBSyxDQUFDLEVBQUUsTUFBTW9ULFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXN0ssT0FBTyxDQUFDckQsRUFBRSxXQUFXLENBQUM7WUFDN0U7WUFDQSxNQUFNb08sTUFBTSxHQUFHdEcsY0FBSyxDQUFDdUcsT0FBTyxDQUFDLE1BQUs7Y0FDakMsSUFBSSxDQUFDOU0sT0FBTyxFQUFFLE9BQU8sRUFBRTtjQUN2QixPQUFPQSxPQUFPLENBQ1orTSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FDcENDLE1BQU0sQ0FBQ25HLEtBQUssSUFBSUEsS0FBSyxDQUFDb0csSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQ3BDM0QsR0FBRyxDQUFDekMsS0FBSyxLQUFLO2dCQUNkN0csT0FBTyxFQUFFNkcsS0FBSztnQkFDZHFHLE1BQU0sRUFBRWxOLE9BQU8sQ0FBQ21OLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSW5OLE9BQU8sQ0FBQ21OLFVBQVUsQ0FBQyxHQUFHO2VBQzNELENBQUMsQ0FBQztZQUNMLENBQUMsRUFBRSxDQUFDVCxRQUFRLENBQUMsQ0FBQztZQUNkLE1BQU1VLGVBQWUsR0FBRzdHLGNBQUssQ0FBQ3VHLE9BQU8sQ0FBQyxNQUFLO2NBQzFDLE9BQU9ELE1BQU0sQ0FDWEcsTUFBTSxDQUFDM08sSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQzZPLE1BQU0sQ0FBQyxDQUM1QjVELEdBQUcsQ0FBQ2pMLElBQUksSUFBSUEsSUFBSSxDQUFDMkIsT0FBTyxDQUFDLENBQ3pCcU4sSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNaLENBQUMsRUFBRSxDQUFDWCxRQUFRLENBQUMsQ0FBQztZQUVkLE9BQ0NuRztjQUFLeUIsU0FBUyxFQUFFYyxHQUFHO2NBQUEsV0FBV2hILE9BQU8sQ0FBQ3JEO1lBQUUsR0FDdkM4SDtjQUFTeUIsU0FBUyxFQUFDO1lBQW9CLEdBQ3RDekIsNkJBQUN3RSx3QkFBVztjQUFDOUssSUFBSSxFQUFFNkIsT0FBTyxDQUFDN0I7WUFBSSxFQUFJLENBQzFCLEVBQ1ZzRztjQUFTeUIsU0FBUyxFQUFDO1lBQW9CLEdBQ3RDekIsNkJBQUNrRixpQkFBVztjQUFDQyxRQUFRLEVBQUVnQixRQUFRO2NBQUU1SyxPQUFPLEVBQUVBO1lBQU8sRUFBSSxDQUM1QyxFQUNWeUU7Y0FBU3lCLFNBQVMsRUFBQztZQUFrQixHQUNwQ3pCLDZCQUFDbUQsdUJBQWM7Y0FDZEcsSUFBSSxFQUFFLENBQUMvSCxPQUFPLENBQUNwRCxLQUFLO2NBQ3BCb0QsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCNkgsSUFBSSxFQUFFeUQsZUFBZTtjQUNyQnhELGFBQWEsRUFBRUE7WUFBYSxFQUMzQixDQUNPLENBQ0w7VUFFUjtVQUVPLE1BQU1KLE9BQU8sR0FBR2pELGNBQUssQ0FBQytHLElBQUksQ0FBQ2QsZ0JBQWdCLENBQUM7VUFBQ3ZTOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFcEQ7VUFDQTtVQUVBO1VBQ0E7VUFDTSxTQUFVc1QsWUFBWTtZQUMzQixNQUFNO2NBQUVoVTtZQUFLLENBQUUsR0FBRywyQkFBYyxHQUFFO1lBQ2xDLE9BQ0NnTjtjQUFLeUIsU0FBUyxFQUFDO1lBQWdCLEdBQzlCekIsNkJBQUNpSCw2QkFBaUI7Y0FBQ0MsS0FBSyxFQUFFbEgsNkJBQUNtSCxnQkFBTztnQkFBQ0MsS0FBSyxFQUFDLE9BQU87Z0JBQUNDLE1BQU0sRUFBQztjQUFNO1lBQUcsRUFBc0IsRUFDdkZySDtjQUFLeUIsU0FBUyxFQUFDO1lBQU0sRUFBRyxDQUNuQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7VUFDTSxTQUFVNkYsWUFBWSxDQUFDNVIsSUFBSTtZQUNoQyxNQUFNLENBQUNFLEtBQUssRUFBRTJSLFFBQVEsQ0FBQyxHQUFHdkgsY0FBSyxDQUFDc0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNZixHQUFHLEdBQUd2QixjQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsTUFBTTtjQUNMak4sS0FBSyxFQUFFO2dCQUFFeUk7Y0FBVTtZQUFFLENBQ3JCLEdBQUcsMkJBQWMsR0FBRTtZQUVwQixNQUFNbUcsZ0JBQWdCLEdBQUduRyxVQUFVLENBQUNsSSxHQUFHLENBQUNtQyxJQUFJLENBQUMsRUFBRThSLE9BQU87WUFDdER4SCxjQUFLLENBQUNlLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU0wRyxPQUFPLEdBQUduSixLQUFLLElBQUlpSixRQUFRLENBQUMsSUFBSSxDQUFDO2NBQ3ZDaEcsR0FBRyxDQUFDbkIsT0FBTyxDQUFDckIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFMEksT0FBTyxDQUFDO2NBQzlDLE9BQU8sTUFBTWxHLEdBQUcsQ0FBQ25CLE9BQU8sRUFBRWlCLG1CQUFtQixDQUFDLE9BQU8sRUFBRW9HLE9BQU8sQ0FBQztZQUNoRSxDQUFDLENBQUM7WUFFRixPQUFPLENBQUNsRyxHQUFHLEVBQUUzTCxLQUFLLEVBQUVnTSxnQkFBZ0IsQ0FBQztVQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkE7VUFXTyxNQUFNOEYsV0FBVyxHQUFHMUgsY0FBSyxDQUFDOEYsYUFBYSxDQUFDLEVBQWtCLENBQUM7VUFBQ3BTO1VBQzVELE1BQU1pVSxjQUFjLEdBQUcsTUFBTTNILGNBQUssQ0FBQ2dHLFVBQVUsQ0FBQzBCLFdBQVcsQ0FBQztVQUFDaFU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWmxFO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVOE8sTUFBTSxDQUFDO1lBQUV4TCxNQUFNO1lBQUVxTDtVQUFTLENBQUU7WUFDM0MsTUFBTTtjQUFFclA7WUFBSyxDQUFFLEdBQUcsMkJBQWMsR0FBRTtZQUNsQyxNQUFNLENBQUM0VSxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHLG1CQUFRLEVBQUMsRUFBRSxDQUFDO1lBQ3hDLE1BQU0sQ0FBQ25NLFFBQVEsRUFBRW9NLFdBQVcsQ0FBQyxHQUFHLG1CQUFRLEVBQUM5VSxLQUFLLENBQUMwSSxRQUFRLENBQUM7WUFDeEQsTUFBTSxDQUFDcU0sU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRyxtQkFBUSxHQUFXO1lBQ3JELE1BQU1DLG9CQUFvQixHQUFHLE1BQUs7Y0FDakNqVixLQUFLLENBQUMwSSxRQUFRLEdBQUcsQ0FBQzFJLEtBQUssQ0FBQzBJLFFBQVE7WUFDakMsQ0FBQztZQUNELG9CQUFTLEVBQUMsQ0FBQzFJLEtBQUssQ0FBQyxFQUFFLE1BQU04VSxXQUFXLENBQUM5VSxLQUFLLENBQUMwSSxRQUFRLENBQUMsQ0FBQztZQUVyRCxNQUFNd00sZ0JBQWdCLEdBQUcvUSxDQUFDLElBQUc7Y0FDNUJBLENBQUMsQ0FBQ2dSLGNBQWMsRUFBRTtjQUNsQk4sU0FBUyxDQUFDMVEsQ0FBQyxDQUFDRSxNQUFNLENBQUN6RCxLQUFLLENBQUM7WUFDMUIsQ0FBQztZQUVELE1BQU13VSxRQUFRLEdBQUcsTUFBSztjQUNyQi9GLFNBQVMsQ0FBQyxDQUFDckwsTUFBTSxDQUFDO2NBQ2xCZ1IsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNuQixDQUFDO1lBRUQsT0FDQ2hJLDZCQUFDaUgsNkJBQWlCO2NBQUNDLEtBQUssRUFBRWxVLEtBQUssQ0FBQzZFLElBQUksQ0FBQ25DLElBQUksSUFBSSxVQUFVO2NBQUVxUyxTQUFTLEVBQUVBO1lBQVMsR0FDNUUvSDtjQUFLeUIsU0FBUyxFQUFDO1lBQWMsR0FDNUJ6QjtjQUFLeUIsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDekIsNkJBQUM0QyxXQUFJO2NBQUM3QyxJQUFJLEVBQUM7WUFBUSxFQUFHLEVBQ3RCQywyQ0FBT2hOLEtBQUssQ0FBQ29JLGNBQWMsQ0FBUSxDQUM5QixFQUNONEU7Y0FBS3lCLFNBQVMsRUFBQztZQUF5QixHQUN2Q3pCLDZCQUFDNEMsV0FBSTtjQUFDN0MsSUFBSSxFQUFDO1lBQVEsRUFBRyxFQUN0QkMsMkNBQU9oTixLQUFLLENBQUNpSSxhQUFhLENBQVEsQ0FDN0IsRUFDTitFLDZCQUFDcUksaUJBQUs7Y0FDTDNTLElBQUksRUFBQyxNQUFNO2NBQ1g0UyxLQUFLLEVBQUMsZ0JBQWdCO2NBQ3RCMVUsS0FBSyxFQUFFZ1UsTUFBTTtjQUNiaEUsUUFBUSxFQUFFc0UsZ0JBQWdCO2NBQzFCSyxRQUFRO2NBQ1J6UyxJQUFJLEVBQUM7WUFBUSxFQUNaLEVBQ0ZrSywwQ0FDQ0EsNkJBQUM0QyxXQUFJO2NBQ0o3QyxJQUFJLEVBQUVyRSxRQUFRLEdBQUcsU0FBUyxHQUFHLGFBQWE7Y0FDMUMrRixTQUFTLEVBQUMsZ0JBQWdCO2NBQzFCQyxPQUFPLEVBQUV1RztZQUFvQixFQUM1QixFQUNGakksNkJBQUNzQixpQkFBVTtjQUFDRyxTQUFTLEVBQUMsUUFBUTtjQUFDRCxPQUFPLEVBQUMsU0FBUztjQUFDekIsSUFBSSxFQUFDLEtBQUs7Y0FBQzJCLE9BQU8sRUFBRTBHO1lBQVEsRUFBSSxDQUM1RSxDQUNELENBQ2E7VUFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVbFYsSUFBSSxDQUFDO1lBQUVGO1VBQUssQ0FBRTtZQUM3QixNQUFNLENBQUN5QixRQUFRLEVBQUUrVCxXQUFXLENBQUMsR0FBR3hJLGNBQUssQ0FBQ3NDLFFBQVEsQ0FBQ3RQLEtBQUssQ0FBQ3lCLFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUNtQixLQUFLLEVBQUUyUixRQUFRLENBQUMsR0FBR3ZILGNBQUssQ0FBQ3NDLFFBQVEsQ0FBQ3RQLEtBQUssQ0FBQzRDLEtBQUssQ0FBQztZQUVyRCxNQUFNLENBQUM2UyxVQUFVLEVBQUVDLEtBQUssQ0FBQyxHQUFHLG9CQUFRLEVBQUNDLHNCQUFNLENBQUNDLFNBQVMsQ0FBQztZQUV0RCxvQkFBUyxFQUFDLENBQUM1VixLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCd1YsV0FBVyxDQUFDeFYsS0FBSyxDQUFDeUIsUUFBUSxDQUFDO2NBQzNCOFMsUUFBUSxDQUFDdlUsS0FBSyxDQUFDNEMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztZQUVGLE1BQU1pVCxZQUFZLEdBQUc7Y0FDcEI3VixLQUFLO2NBQ0wwVixLQUFLO2NBQ0xoTixRQUFRLEVBQUUxSSxLQUFLLENBQUMwSSxRQUFRO2NBQ3hCakIsUUFBUSxFQUFFekgsS0FBSyxDQUFDeUgsUUFBUTtjQUN4Qm5HLE1BQU0sRUFBRXRCLEtBQUssQ0FBQzZILFlBQVksQ0FBQ3ZHO2FBQzNCO1lBQ0QsTUFBTXdVLE9BQU8sR0FBRyxDQUFDOVYsS0FBSyxDQUFDbUksUUFBUSxHQUFHUSxVQUFJLEdBQUdvTixzQkFBWTtZQUNyRCxNQUFNN1YsSUFBSSxHQUFHMEMsS0FBSyxJQUFJNlMsVUFBVSxHQUFHSyxPQUFPLEdBQUc5QixzQkFBWTtZQUV6RCxPQUNDaEgsNkJBQUMwSCxvQkFBVyxDQUFDc0IsUUFBUTtjQUFDcFYsS0FBSyxFQUFFaVY7WUFBWSxHQUN4QzdJLDZCQUFDOU0sSUFBSSxPQUFHLENBQ2M7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBO1VBU08sTUFBTStWLFlBQVksR0FBR2pKLGNBQUssQ0FBQzhGLGFBQWEsQ0FBQyxJQUFxQixDQUFDO1VBQUNwUztVQUNoRSxNQUFNd1YsZUFBZSxHQUFHLE1BQU1sSixjQUFLLENBQUNnRyxVQUFVLENBQUNpRCxZQUFZLENBQUM7VUFBQ3ZWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZwRTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBR087VUFBVyxNQUFNZ1AsU0FBUyxHQUFHLENBQUM7WUFBRTFQLEtBQUs7WUFBRW1XLFNBQVMsR0FBRztVQUFLLENBQStDLEtBQUk7WUFDakgsTUFBTSxDQUFDeFIsU0FBUyxFQUFFeVIsWUFBWSxDQUFDLEdBQUdwSixjQUFLLENBQUNzQyxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQzdOLFFBQVEsRUFBRStULFdBQVcsQ0FBQyxHQUFHeEksY0FBSyxDQUFDc0MsUUFBUSxDQUFVLEtBQUssQ0FBQztZQUM5RCxNQUFNLENBQUMrRyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHdEosY0FBSyxDQUFDc0MsUUFBUSxDQUFVLEtBQUssQ0FBQztZQUM1RCxNQUFNaUgsV0FBVyxHQUFHdkosY0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3RDLE1BQU0sQ0FBQ21ELElBQUksRUFBRW9HLE9BQU8sQ0FBQyxHQUFHeEosY0FBSyxDQUFDc0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUUxQyxvQkFBUyxFQUFDLENBQUN0UCxLQUFLLENBQUMsRUFBRSxNQUFNc1csVUFBVSxDQUFDdFcsS0FBSyxDQUFDZ0YsZUFBZSxDQUFDLENBQUM7WUFDM0QsTUFBTXlSLGlCQUFpQixHQUFHdFMsQ0FBQyxJQUFHO2NBQzdCLE1BQU07Z0JBQUV2RDtjQUFLLENBQUUsR0FBR3VELENBQUMsQ0FBQ0UsTUFBTTtjQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFOUIsU0FBUyxDQUFDLENBQUNtSCxRQUFRLENBQUM5SSxLQUFLLENBQUM4VixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtjQUMvREYsT0FBTyxDQUFDNVYsS0FBSyxDQUFDO1lBQ2YsQ0FBQztZQUVELG9CQUFTLEVBQUMsTUFBSztjQUNkLE1BQU15RCxNQUFNLEdBQUdrUyxXQUFXLENBQUNuSixPQUFPO2NBQ2xDL0ksTUFBTSxDQUFDc1MsS0FBSyxDQUFDdEMsTUFBTSxHQUFHLE1BQU07Y0FDNUJoUSxNQUFNLENBQUNzUyxLQUFLLENBQUN0QyxNQUFNLEdBQUdqRSxJQUFJLENBQUN6RSxNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBR3RILE1BQU0sQ0FBQ3VTLFlBQVksR0FBRyxJQUFJO2NBRTVFLElBQUksQ0FBQyxXQUFXLEVBQUVyVSxTQUFTLENBQUMsQ0FBQ21ILFFBQVEsQ0FBQzBHLElBQUksQ0FBQ3NHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNuRSxDQUFDLEVBQUUsQ0FBQ3RHLElBQUksQ0FBQyxDQUFDO1lBQ1Ysb0JBQVMsRUFDUixDQUFDcFEsS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKRCxVQUFVLENBQUNtTixVQUFVLENBQUMsTUFBTXFKLFdBQVcsQ0FBQ25KLE9BQU8sQ0FBQ3lKLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQztjQUM3RHJCLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQyxFQUNELGdCQUFnQixDQUNoQjtZQUNELE1BQU1zQixhQUFhLEdBQUczUyxDQUFDLElBQUc7Y0FDekIsSUFBSUEsQ0FBQyxDQUFDK0wsR0FBRyxLQUFLLE9BQU8sRUFBRTtjQUN2QixNQUFNNkcsRUFBRSxHQUFHQyxTQUFTLElBQUlBLFNBQVMsR0FBRyxJQUFJO2NBQ3hDLE1BQU1wVyxLQUFLLEdBQUd1RCxDQUFDLENBQUNFLE1BQU0sQ0FBQ3pELEtBQUssQ0FBQzhWLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDN0MsSUFBSSxDQUFDLEVBQUUsRUFBRW5VLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ21ILFFBQVEsQ0FBQzlJLEtBQUssQ0FBQyxFQUFFO2NBQzNDdUQsQ0FBQyxDQUFDOFMsUUFBUSxHQUFHVCxPQUFPLENBQUNPLEVBQUUsQ0FBQyxHQUFHRyxVQUFVLEVBQUU7WUFDeEMsQ0FBQztZQUVELE1BQU01RixRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFO1lBQUssQ0FBRTtZQUNwQyxNQUFNO2NBQ0x6SixZQUFZO2NBQ1pBLFlBQVksRUFBRTtnQkFBRTlHO2NBQVE7WUFBRSxDQUMxQixHQUFHZixLQUFLO1lBRVQsTUFBTStFLFNBQVMsR0FBRyxNQUFNdUcsS0FBSyxJQUFHO2NBQy9Ca0ssV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQmxLLEtBQUssQ0FBQzZKLGNBQWMsRUFBRTtjQUN0QixNQUFNaFEsS0FBSyxHQUFHLE1BQU1wRSxRQUFRLENBQUN5TCxJQUFJLEVBQUU7Y0FFbkMsTUFBTTFILElBQUksR0FBRytDLFlBQVksQ0FBQ25ELGFBQWEsQ0FBQ1MsS0FBSyxFQUFFcEUsUUFBUSxDQUFDNkQsYUFBYSxDQUFDO2NBQ3RFd1IsWUFBWSxDQUFDLENBQUN6UixTQUFTLENBQUM7Y0FDeEI2USxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUM7WUFFRCxNQUFNMEIsVUFBVSxHQUFHLFlBQVc7Y0FDN0JWLE9BQU8sQ0FBQyxFQUFFLENBQUM7Y0FDWGhCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakJ4VixLQUFLLENBQUN1SixXQUFXLENBQUM2RyxJQUFJLENBQUM7WUFDeEIsQ0FBQztZQUNELE1BQU0rRyxRQUFRLEdBQUcsQ0FBQyxDQUFDL0csSUFBSSxDQUFDekUsTUFBTSxHQUFHdUwsVUFBVSxHQUFHblMsU0FBUztZQUV2RCxJQUFJLENBQUMsRUFBRSxFQUFFeEMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDbUgsUUFBUSxDQUFDMEcsSUFBSSxDQUFDc0csVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUN0RyxJQUFJLENBQUNzRCxJQUFJLEVBQUUsQ0FBQy9ILE1BQU0sRUFBRTJGLFFBQVEsQ0FBQ0EsUUFBUSxHQUFHLElBQUk7WUFDOUcsTUFBTThGLGdCQUFnQixHQUFHO2NBQUU5RixRQUFRLEVBQUU3UCxRQUFRLElBQUlrRCxTQUFTLElBQUkwUixPQUFPLElBQUlGO1lBQVMsQ0FBRTtZQUNwRixNQUFNNUcsR0FBRyxHQUFHLG1CQUFtQjhHLE9BQU8sSUFBSUYsU0FBUyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUU7WUFDdEU7WUFDQSxNQUFNO2NBQUVrQjtZQUFNLENBQUUsR0FBR2xVLGVBQU0sQ0FBQ0osTUFBTSxDQUFDSSxNQUFNO1lBRXZDLE9BQ0M2SjtjQUFLeUIsU0FBUyxFQUFFYztZQUFHLEdBQ2xCdkMsNkJBQUNpSixxQkFBWSxDQUFDRCxRQUFRO2NBQUNwVixLQUFLLEVBQUU7Z0JBQUVaLEtBQUs7Z0JBQUVtWCxRQUFRO2dCQUFFcFcsUUFBUTtnQkFBRXFWLFlBQVk7Z0JBQUV6UjtjQUFTO1lBQUUsR0FDbEYwUyxNQUFNLElBQUlySyw2QkFBQ3NLLGtCQUFXO2NBQUN6UyxJQUFJLEVBQUU3RSxLQUFLLENBQUM2RTtZQUFJLEVBQUksRUFDNUNtSSw2QkFBQ3VLLFVBQUk7Y0FBQ0osUUFBUSxFQUFFQSxRQUFRO2NBQUUxSSxTQUFTLEVBQUM7WUFBaUIsR0FDcER6QjtjQUFBLEdBQ0tvSyxnQkFBZ0I7Y0FDcEJJLElBQUksRUFBRSxDQUFDO2NBQ1A1VyxLQUFLLEVBQUV3UCxJQUFJO2NBQ1hRLFFBQVEsRUFBRTZGLGlCQUFpQjtjQUMzQmdCLFNBQVMsRUFBRVgsYUFBYTtjQUN4QlksU0FBUyxFQUFFLElBQUk7Y0FDZmpKLFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0JGLEdBQUcsRUFBRWdJO1lBQVcsRUFDZixDQUNJLEVBQ1B2SjtjQUFNeUIsU0FBUyxFQUFFO1lBQWlDLEdBQ2hELENBQUMsQ0FBQzJCLElBQUksQ0FBQ3pFLE1BQU0sR0FDYnFCLDZCQUFDMkssa0JBQU07Y0FDTjVLLElBQUksRUFBQyxZQUFZO2NBQ2pCMkIsT0FBTyxFQUFFd0ksVUFBVTtjQUNuQjVGLFFBQVEsRUFBRUEsUUFBUSxDQUFDQSxRQUFRLElBQUl0UixLQUFLLENBQUNnRjtZQUFlLEVBQ25ELEdBRUZnSSw2QkFBQzRLLDBCQUFlO2NBQUM1WCxLQUFLLEVBQUVBLEtBQUs7Y0FBRXNSLFFBQVEsRUFBRTNNLFNBQVMsSUFBSTNFLEtBQUssQ0FBQ2dGO1lBQWUsRUFDM0UsQ0FDSyxDQUNnQixDQUNuQjtVQUVSLENBQUM7VUFBQ3RFOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFHRjtVQUNBO1VBQ0E7VUFDQTtVQUVPLE1BQU1tWCxNQUFNLEdBQUcsTUFBSztZQUMxQixNQUFNO2NBQUVWLFFBQVE7Y0FBRXBXLFFBQVE7Y0FBRXFWO1lBQVksQ0FBRSxHQUFHLDRCQUFlLEdBQUU7WUFFOUQsTUFBTTBCLE1BQU0sR0FBRyxNQUFNeE0sS0FBSyxJQUFHO2NBQzVCQSxLQUFLLENBQUM2SixjQUFjLEVBQUU7Y0FDdEIsTUFBTXBVLFFBQVEsQ0FBQ3lMLElBQUksRUFBRTtjQUNyQjRKLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUNELE9BQ0NwSjtjQUFLeUIsU0FBUyxFQUFDO1lBQTZCLEdBQzNDekIsNkJBQUNzQixpQkFBVTtjQUFDRyxTQUFTLEVBQUMsUUFBUTtjQUFDMUIsSUFBSSxFQUFDLFFBQVE7Y0FBQzJCLE9BQU8sRUFBRW9KO1lBQU0sRUFBSSxFQUNoRTlLLDZCQUFDK0ssWUFBSztjQUFDeEgsTUFBTSxFQUFDO1lBQU8sRUFBRyxFQUN4QnZELDZCQUFDc0IsaUJBQVU7Y0FBQ3ZCLElBQUksRUFBQyxNQUFNO2NBQUMwQixTQUFTLEVBQUMsUUFBUTtjQUFDRCxPQUFPLEVBQUMsU0FBUztjQUFDRSxPQUFPLEVBQUV5STtZQUFRLEVBQUksQ0FDN0U7VUFFUixDQUFDO1VBQUN6Vzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkY7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDTztVQUFXLE1BQU1rWCxlQUFlLEdBQUcsQ0FBQztZQUFFNVgsS0FBSyxFQUFFO2NBQUU2SDtZQUFZLENBQUU7WUFBRXlKO1VBQVEsQ0FBRSxLQUFJO1lBQ25GLE1BQU07Y0FBRXZRLFFBQVE7Y0FBRTRELFNBQVM7Y0FBRXlSO1lBQVksQ0FBRSxHQUFHLDRCQUFlLEdBQUU7WUFDL0QsTUFBTSxDQUFDM1UsUUFBUSxFQUFFK1QsV0FBVyxDQUFDLEdBQUcsbUJBQVEsRUFBQyxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDd0MsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRyxtQkFBUSxFQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNO2NBQUV2QztZQUFLLENBQUUsR0FBRyw0QkFBYyxHQUFFO1lBQ2xDLE1BQU13QyxVQUFVLEdBQUcsTUFBTTVNLEtBQUssSUFBRztjQUNoQyxJQUFJO2dCQUNIQSxLQUFLLENBQUM2SixjQUFjLEVBQUU7Z0JBRXRCSyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNMkMsVUFBVSxHQUFHLE1BQU1wWCxRQUFRLENBQUNtSixjQUFjLEVBQUU7Z0JBRWxELElBQUlpTyxVQUFVLENBQUNDLEtBQUssS0FBSyxTQUFTLEVBQUU7a0JBQ25DSCxZQUFZLENBQUMsSUFBSSxDQUFDOztnQkFFbkIzVSxPQUFPLENBQUM4QyxHQUFHLENBQUMsR0FBRyxFQUFFK1IsVUFBVSxDQUFDO2dCQUM1QjNDLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCLE1BQU16VSxRQUFRLENBQUNxTCxNQUFNLEVBQUU7Z0JBQ3ZCOUksT0FBTyxDQUFDOEMsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDaEJnUSxZQUFZLENBQUMsQ0FBQ3pSLFNBQVMsQ0FBQztlQUN4QixDQUFDLE9BQU9SLENBQUMsRUFBRTtnQkFDWGIsT0FBTyxDQUFDNUIsS0FBSyxDQUFDeUMsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1RxUixXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsTUFBTTZDLE9BQU8sR0FBRy9NLEtBQUssSUFBRztjQUN2QmtLLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJ5QyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFDRCxJQUFJdFQsU0FBUyxFQUFFLE9BQU9xSSw2QkFBQzZLLGNBQU0sT0FBRztZQUVoQyxPQUNDN0ssNERBQ0VnTCxTQUFTLElBQ1RoTCw2QkFBQ3NMLFlBQUs7Y0FBQ0MsSUFBSSxFQUFFLElBQUk7Y0FBRXBZLElBQUksRUFBRSxJQUFJO2NBQUVrWSxPQUFPLEVBQUVBO1lBQU8sR0FDOUNyTCx5Q0FBSzBJLEtBQUssQ0FBQ3RMLFdBQVcsQ0FBQzhKLEtBQUssQ0FBTSxFQUNsQ2xILDZCQUFDd0wsWUFBSztjQUFDeEcsR0FBRyxFQUFDO1lBQTBCLEVBQUcsRUFDeENoRix3Q0FBSTBJLEtBQUssQ0FBQ3RMLFdBQVcsQ0FBQ3FPLFdBQVcsQ0FBSyxFQUN0Q3pMO2NBQVF5QixTQUFTLEVBQUM7WUFBTyxHQUN4QnpCLDZCQUFDMkssa0JBQU07Y0FBQ25KLE9BQU8sRUFBQyxTQUFTO2NBQUNFLE9BQU8sRUFBRTJKO1lBQU8sR0FDeEMzQyxLQUFLLENBQUN0TCxXQUFXLENBQUNzTyxNQUFNLENBQ2pCLENBQ0QsQ0FFVixFQUNEMUwsNkJBQUMySyxrQkFBTTtjQUFDNUssSUFBSSxFQUFDLEtBQUs7Y0FBQ3RMLFFBQVEsRUFBRUEsUUFBUTtjQUFFaU4sT0FBTyxFQUFFd0osVUFBVTtjQUFFNUcsUUFBUSxFQUFFQSxRQUFRLElBQUk3UDtZQUFRLEVBQUksQ0FDNUY7VUFFTCxDQUFDO1VBQUNmOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hERjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU8sTUFBTWlZLE1BQU0sR0FBRyxDQUFDO1lBQUU5VCxJQUFJO1lBQUUrVDtVQUFVLENBQUUsS0FBSTtZQUM5QyxNQUFNLENBQUNoWSxLQUFLLEVBQUVpWSxRQUFRLENBQUMsR0FBRzdMLGNBQUssQ0FBQ3NDLFFBQVEsQ0FBQ3pLLElBQUksRUFBRXdTLE1BQU0sQ0FBQztZQUN0RCxNQUFNLENBQUMzVixLQUFLLEVBQUVvWCxRQUFRLENBQUMsR0FBRzlMLGNBQUssQ0FBQ3NDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDeUosT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR2hNLGNBQUssQ0FBQ3NDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkQsTUFBTTtjQUFFb0c7WUFBSyxDQUFFLEdBQUcsMkJBQWMsR0FBRTtZQUVsQyxTQUFTdUQsWUFBWSxDQUFDM04sS0FBSztjQUMxQixNQUFNO2dCQUFFMUssS0FBSyxFQUFFc1k7Y0FBYSxDQUFFLEdBQUc1TixLQUFLLENBQUNqSCxNQUFNO2NBQzdDd1UsUUFBUSxDQUFDSyxhQUFhLENBQUM7WUFDeEI7WUFFQSxTQUFTQyxXQUFXO2NBQ25CTCxRQUFRLENBQUMsS0FBSyxDQUFDO2NBQ2ZFLFVBQVUsQ0FBQyxLQUFLLENBQUM7Y0FDakJILFFBQVEsQ0FBQ2hVLElBQUksRUFBRXdTLE1BQU0sQ0FBQztjQUN0QnVCLFVBQVUsRUFBRTtZQUNiO1lBRUEsTUFBTVEsWUFBWSxHQUFHLE1BQU05TixLQUFLLElBQUc7Y0FDbENBLEtBQUssQ0FBQzZKLGNBQWMsRUFBRTtjQUN0QjZELFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDaEIsTUFBTXhULFFBQVEsR0FBRyxNQUFNWCxJQUFJLENBQUN3VSxPQUFPLENBQUM7Z0JBQUVoQyxNQUFNLEVBQUV6VztjQUFLLENBQUUsQ0FBQztjQUN0RCxJQUFJLENBQUM0RSxRQUFRLENBQUNFLE1BQU0sRUFBRW9ULFFBQVEsQ0FBQ3RULFFBQVEsQ0FBQzlELEtBQUssQ0FBQztjQUU5QzBQLFlBQUssQ0FBQ0MsT0FBTyxDQUFDcUUsS0FBSyxDQUFDMkIsTUFBTSxDQUFDaEcsT0FBTyxDQUFDO2NBQ25DOEgsV0FBVyxFQUFFO1lBQ2QsQ0FBQztZQUVELE9BQ0NuTSw2QkFBQ3VLLFVBQUk7Y0FBQ0osUUFBUSxFQUFFaUMsWUFBWTtjQUFFM0ssU0FBUyxFQUFDO1lBQWEsR0FDbkQvTSxLQUFLLElBQUlzTDtjQUFLeUIsU0FBUyxFQUFDO1lBQXVCLEdBQUUvTSxLQUFLLENBQU8sRUFDOURzTCw2QkFBQ3NNLGNBQVE7Y0FBQzlCLElBQUksRUFBRSxDQUFDO2NBQUU1VyxLQUFLLEVBQUVBLEtBQUs7Y0FBRTJZLFdBQVcsRUFBQyx3QkFBd0I7Y0FBQzNJLFFBQVEsRUFBRXFJO1lBQVksRUFBSSxFQUNoR2pNLDZDQUNDQSw2QkFBQzJLLGtCQUFNO2NBQUM1SyxJQUFJLEVBQUMsY0FBYztjQUFDdUksS0FBSyxFQUFDLFFBQVE7Y0FBQzlHLE9BQU8sRUFBQyxjQUFjO2NBQUNFLE9BQU8sRUFBRXlLO1lBQVcsRUFBSSxFQUMxRm5NLDZCQUFDMkssa0JBQU07Y0FBQzdVLElBQUksRUFBQyxRQUFRO2NBQUNpSyxJQUFJLEVBQUMsTUFBTTtjQUFDMkIsT0FBTyxFQUFFMEssWUFBWTtjQUFFOUQsS0FBSyxFQUFDLFFBQVE7Y0FBQ3lELE9BQU8sRUFBRUE7WUFBTyxFQUFJLENBQ3BGLENBQ0g7VUFFVCxDQUFDO1VBQUNyWTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0Y7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVPO1VBQVcsTUFBTTRXLFdBQVcsR0FBRyxDQUFDO1lBQUV6UztVQUFJLENBQUUsS0FBSTtZQUNsRCxNQUFNMlUsU0FBUyxHQUFHeE0sY0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3BDLE1BQU07Y0FDTHlJLEtBQUssRUFBRTtnQkFBRStELFNBQVMsRUFBRS9EO2NBQUs7WUFBRSxDQUMzQixHQUFHLDJCQUFjLEdBQUU7WUFDcEIsTUFBTWdFLFNBQVMsR0FBRyxNQUFNRixTQUFTLENBQUNwTSxPQUFPLENBQUM0SyxTQUFTLEVBQUU7WUFDckQsTUFBTVksVUFBVSxHQUFHLE1BQU1ZLFNBQVMsQ0FBQ3BNLE9BQU8sQ0FBQ3VNLEtBQUssRUFBRTtZQUVsRCxPQUNDM007Y0FBS3lCLFNBQVMsRUFBRTtZQUFnQyxHQUMvQ3pCLDZCQUFDMkssa0JBQU07Y0FBQzVLLElBQUksRUFBQyxNQUFNO2NBQUMyQixPQUFPLEVBQUVnTCxTQUFTO2NBQUVFLElBQUksRUFBQztZQUFTLEVBQUcsRUFFeEQ1TTtjQUFRdUIsR0FBRyxFQUFFaUwsU0FBUztjQUFFbkIsT0FBTyxFQUFFTztZQUFVLEdBQzFDNUwsNkJBQUNzQixpQkFBVTtjQUFDdkIsSUFBSSxFQUFDLE9BQU87Y0FBQzBCLFNBQVMsRUFBQyxPQUFPO2NBQUNDLE9BQU8sRUFBRWtLO1lBQVUsRUFBSSxFQUNsRTVMLDZDQUNDQSx5Q0FBSzBJLEtBQUssQ0FBQytELFNBQVMsQ0FBTSxDQUNsQixFQUNUek0sMENBQ0NBLHdDQUFJMEksS0FBSyxDQUFDbk4sT0FBTyxDQUFLLENBQ2pCLEVBQ055RSw2QkFBQzJMLFlBQU07Y0FBQzlULElBQUksRUFBRUEsSUFBSTtjQUFFK1QsVUFBVSxFQUFFQTtZQUFVLEVBQUksQ0FDdEMsQ0FFTDtVQUVSLENBQUM7VUFBQ2xZOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCRjtVQUNBO1VBRkE7O1VBUU0sU0FBVXFYLEtBQUssQ0FBQztZQUFFeEg7VUFBTSxDQUFjO1lBQzNDLE1BQU1zSixTQUFTLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUNuUSxRQUFRLENBQUM2RyxNQUFNLENBQUM7WUFDdkQsTUFBTXVKLE9BQU8sR0FBR3ZKLE1BQU0sS0FBSyxTQUFTO1lBQ3BDLE1BQU0sQ0FBQ3dKLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQyxHQUFHLHNCQUFRLEVBQUNMLFNBQVMsRUFBRUMsT0FBTyxDQUFDO1lBQzVFLE1BQU1LLFdBQVcsR0FBR0YsT0FBTyxDQUFDRyxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDdkQsTUFBTUMsZUFBZSxHQUFHTixPQUFPLENBQUNJLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUMzRCxPQUNDck47Y0FBS3lCLFNBQVMsRUFBQztZQUFrQixHQUNoQ3pCLDJDQUFPLEdBQUdzTixlQUFlLEVBQUUsTUFBUyxFQUNwQ3ROLDJDQUFPLEdBQUdtTixXQUFXLEVBQUUsQ0FBUSxDQUMxQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQTtVQURBOztVQUVBLE1BQU07WUFBRTdLLFFBQVE7WUFBRXZCO1VBQVMsQ0FBRSxHQUFHZixjQUFLO1VBRS9CLFNBQVV1TixRQUFRLENBQUNWLFNBQWtCLEVBQUVDLE9BQWdCO1lBQzVELE1BQU0sQ0FBQ1UsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR25MLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFbkN2QixTQUFTLENBQUMsTUFBSztjQUNkLElBQUkyTSxVQUEwQjtjQUU5QixJQUFJYixTQUFTLEVBQUU7Z0JBQ2RhLFVBQVUsR0FBR0MsV0FBVyxDQUFDLE1BQUs7a0JBQzdCRixPQUFPLENBQUNHLFFBQVEsSUFBSUEsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztjQUdULE9BQU8sTUFBSztnQkFDWEMsYUFBYSxDQUFDSCxVQUFVLENBQUM7Y0FDMUIsQ0FBQztZQUNGLENBQUMsRUFBRSxDQUFDYixTQUFTLENBQUMsQ0FBQztZQUVmOUwsU0FBUyxDQUFDLE1BQUs7Y0FDZCxJQUFJK0wsT0FBTyxFQUFFO2dCQUNaVyxPQUFPLENBQUMsQ0FBQyxDQUFDOztZQUVaLENBQUMsRUFBRSxDQUFDWCxPQUFPLENBQUMsQ0FBQztZQUViLE1BQU1JLFlBQVksR0FBR00sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLE1BQU1QLE9BQU8sR0FBR2EsSUFBSSxDQUFDQyxLQUFLLENBQUVQLElBQUksR0FBRyxHQUFHLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNUixPQUFPLEdBQUdjLElBQUksQ0FBQ0MsS0FBSyxDQUFFUCxJQUFJLEdBQUcsSUFBSSxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTVQsS0FBSyxHQUFHZSxJQUFJLENBQUNDLEtBQUssQ0FBQ1AsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFekMsT0FBTyxDQUFDVCxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUM7VUFDL0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU0sU0FBVW5FLFlBQVk7WUFDM0IsU0FBU2lGLFVBQVU7Y0FDbEJDLGtCQUFTLENBQUNDLFdBQVcsR0FBRyxJQUFJO1lBQzdCO1lBRUEsSUFBSSxDQUFDbFosbUJBQVUsQ0FBQ1ksS0FBSyxFQUFFLE9BQU9vSyw2QkFBQ21PLDBCQUFhLE9BQUc7WUFDL0MsT0FDQ25PO2NBQUt5QixTQUFTLEVBQUM7WUFBa0IsR0FDaEN6QjtjQUFLZ0YsR0FBRyxFQUFDLHVCQUF1QjtjQUFDRCxHQUFHLEVBQUM7WUFBZ0IsRUFBRyxFQUN4RC9FO2NBQU15QixTQUFTLEVBQUM7WUFBcUIsR0FDcEN6Qiw2QkFBQzRDLFdBQUk7Y0FBQzdDLElBQUksRUFBRThDLGFBQUssQ0FBQyxlQUFlLENBQUM7Y0FBRXBCLFNBQVMsRUFBQztZQUFtQixFQUFHLEVBQ3BFekIsMERBQXVCLEVBQ3ZCQSx3Q0FDQ0EsZ0dBQWlFLE9BQUNBLHdDQUFNLHFEQUVyRSxFQUNKQSw2QkFBQzJLLGtCQUFNO2NBQUM1SyxJQUFJLEVBQUMsTUFBTTtjQUFDMkIsT0FBTyxFQUFFc00sVUFBVTtjQUFFMUYsS0FBSyxFQUFDO1lBQWdCLEVBQUcsQ0FDNUQsQ0FDRjtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImdsb2JhbFRoaXMiLCJzdG9yZSIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiT2JqZWN0IiwidmFsdWUiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicmVjb3JkZXIiLCJiZWFyZXIiLCJ1cGxvYWRlciIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJwbGF5ZXIiLCJpc0ZldGNoaW5nIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2hpbmciLCJlcnJvciIsImNvbnN0cnVjdG9yIiwicGFyZW50IiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdCIsIkFwcFdyYXBwZXIiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndWFnZSIsInJhdGUiLCJhdWRpb1NwZWVkIiwidW5kZWZpbmVkIiwidHJpZ2dlciIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInJlYWR5IiwiVXBsb2FkZXIiLCJ0eXBlIiwicGFyYW1zIiwiY29udGFpbmVyIiwicHJvamVjdCIsInVybCIsImNvbmZpZyIsIkNIQVRfQVBJX1NFUlZFUiIsImxvYWRlbmQiLCJjb25zb2xlIiwid2FybiIsImNyZWF0ZSIsInNlbGVjdG9yIiwiY29yZG92YSIsImJsb2JUb0FycmF5QnVmZmVyIiwiYmxvYiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJhcnJheUJ1ZmZlciIsInRhcmdldCIsInJlc3VsdCIsIkFycmF5QnVmZmVyIiwib25lcnJvciIsInJlYWRBc0FycmF5QnVmZmVyIiwic2F2ZVJlY29yZGluZyIsInJlY29yZGluZyIsInRyYW5zY3JpcHRpb24iLCJjaGF0IiwiaXRlbSIsInNlbmRBdWRpbyIsIndhaXRpbmdSZXNwb25zZSIsInNhdmVBdWRpbyIsImlkIiwiYXVkaW8iLCJudW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJyZXNwb25zZSIsInB1Ymxpc2hSZWNvcmRpbmciLCJzdGF0dXMiLCJkYXRhIiwicHJvcGVydGllcyIsInBhdGgiLCJmaWxlIiwib3V0cHV0IiwidXNhZ2UiLCJzb3VyY2UiLCJjcmVhdGVkQXQiLCJ1bml4IiwibG9nIiwic2F2ZUl0ZW0iLCJzZXRBdWRpb01lc3NhZ2UiLCJ1c2VyIiwiY2hhdElkIiwiY29udGVudCIsInJvbGUiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiY3VycmVudE1lc3NhZ2UiLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXJJZCIsInNlbGVjdGVkS2IiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwibWVzc2FnZXMiLCJjYXRlZ29yeSIsImNoYXRzIiwiaXRlbXMiLCJhdWRpb01hbmFnZXIiLCJrbm93bGVkZ2VCb3hlcyIsImticyIsImtiIiwic2VsZWN0ZWRNb2RlbCIsIm1vZGVsIiwibm90Rm91bmQiLCJzZWxlY3RlZEtiUGF0aCIsImZpbmQiLCJpIiwibWVzc2FnZSIsIk1hcCIsImV4dGVuc2lvbnMiLCJhdXRvcGxheSIsIkNoYXQiLCJjdXJyZW50Q2hhdCIsImZvdW5kIiwiaXNSZWFkeSIsImtub3dsZWRlQm94U2VsZWN0ZWQiLCJrbm93bGVkZ2VCb3hJZCIsImxvYWRBbGwiLCJleHRzIiwibWV0YWRhdGEiLCJmb3JFYWNoIiwiZXh0ZW5zaW9uIiwiaW5kZXgiLCJzZW5kTWVzc2FnZSIsInBlcmZvcm1hbmNlIiwibWFyayIsImluY2x1ZGVzIiwib25MaXN0ZW4iLCJvbkVuZCIsIm9mZiIsIkV2ZW50cyIsImNodW5rcyIsInZhbGlkIiwiYW5hbHlzZXIiLCJoYXNQZXJtaXNzaW9ucyIsIm5hdmlnYXRvciIsInBlcm1pc3Npb25zIiwicXVlcnkiLCJpbml0aWFsaXNlIiwiUGVuZGluZ1Byb21pc2UiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ0aGVuIiwic3RyZWFtIiwiTWVkaWFSZWNvcmRlciIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJvbnJlc3VsdCIsImV2ZW50IiwiaW50ZXJpbVRyYW5zY3JpcHQiLCJmaW5hbFRyYW5zY3JpcHQiLCJyZXN1bHRJbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJpc0ZpbmFsIiwidHJhbnNjcmlwdCIsInN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpemUiLCJwdXNoIiwiY2F0Y2giLCJmaW5hbGx5IiwicmVjb3JkIiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsInRyYWNrIiwic3RvcCIsImVuZHRpbWUiLCJCbG9iIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsIkJhY2tBcnJvdyIsInNlcGFyYXRvciIsImljb24iLCJSZWFjdCIsInVzZVJlZiIsInNldFRpbWVvdXQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJpc0luQ29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbmRSZWN0IiwidGhyZXNob2xkIiwiYm90dG9tIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJJY29uQnV0dG9uIiwicmVmIiwidmFyaWFudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJDb250ZW50Iiwid2ViQ29tcG9uZW50TmFtZSIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiTWVzc2FnZXMiLCJDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hhdEludHJvIiwic2V0UmVhZGVyIiwidXNlU3RhdGUiLCJjbHMiLCJIZWFkZXIiLCJhdm9pZENoYXQiLCJDaGF0SW5wdXQiLCJTeXN0ZW1BbnN3ZXJpbmciLCJJY29uIiwiSUNPTlMiLCJzZXRNZXNzYWdlcyIsIm1hcCIsImxhc3QiLCJNZXNzYWdlIiwia2V5IiwiTWVzc2FnZUFjdGlvbnMiLCJ0ZXh0IiwibWVzc2FnZVRva2VucyIsInBsYXkiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJsaXN0ZW4iLCJwb3NpdGlvblRvQ3V0Iiwib25QYXVzZSIsImNvcHlNZXNzYWdlIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiZGlzYWJsZWQiLCJhcHBseSIsIlByb2ZpbGVJY29uIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiYWx0Iiwic3JjIiwib25FcnJvciIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsIm9uQ2xpY2tXb3JkIiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiUGxheWFibGUiLCJBdWRpb1BsYXllciIsImNvbnZlcnQiLCJDaGF0TWVzc2FnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2hhdE1lc3NhZ2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk1lc3NhZ2VDb21wb25lbnQiLCJzZXRDb250ZW50IiwiZmluaXNoZWQiLCJzZXRGaW5pc2hlZCIsInRvdGFsVG9rZW5zIiwiYmxvY2tzIiwidXNlTWVtbyIsInNwbGl0IiwiZmlsdGVyIiwidHJpbSIsImlzQ29kZSIsInN0YXJ0c1dpdGgiLCJwbGF5YWJsZUNvbnRlbnQiLCJqb2luIiwibWVtbyIsIkNoYXRTa2VsZXRvbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJQcmVsb2FkIiwid2lkdGgiLCJoZWlnaHQiLCJ1c2VFeHRlbnNpb24iLCJzZXRSZWFkeSIsImNvbnRyb2wiLCJvblJlYWR5IiwiQ2hhdENvbnRleHQiLCJ1c2VDaGF0Q29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNldEF1dG9wbGF5IiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiaGFuZGxlQXV0b3BsYXlUb2dnbGUiLCJoYW5kbGVDaGF0U2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJvblJlYWRlciIsIklucHV0IiwibGFiZWwiLCJyZXF1aXJlZCIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlByb3ZpZGVyIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiaXNXYWl0aW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0QXJlYVJlZiIsInNldFRleHQiLCJoYW5kbGVJbnB1dENoYW5nZSIsInJlcGxhY2VBbGwiLCJzdHlsZSIsInNjcm9sbEhlaWdodCIsImZvY3VzIiwiaGFuZGxlS2V5RG93biIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJoYW5kbGVTZW5kIiwib25TdWJtaXQiLCJkaXNhYmxlZFRleHRhcmVhIiwic3lzdGVtIiwiU3lzdGVtTW9kYWwiLCJGb3JtIiwicm93cyIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIlBsYXllciIsImNhbmNlbCIsIlRpbWVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicGxheUFjdGlvbiIsInBlcm1pc3Npb24iLCJzdGF0ZSIsIm9uQ2xvc2UiLCJNb2RhbCIsIm9wZW4iLCJJbWFnZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwiVUlGb3JtIiwiY2xvc2VNb2RhbCIsInNldFZhbHVlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJtb2RlIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ1c2VUaW1lciIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiUHJlbG9hZFNjcmVlbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL2ludGVyZmFjZXMvbWVzc2FnZXMudHMiLCJ0cy9zdG9yZS9hdWRpby50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvc3RvcmUvcmVjb3JkZXIudHMiLCJ0cy92aWV3cy9jaGF0L0JhY2tBcnJvdy50c3giLCJ0cy92aWV3cy9jaGF0L2NvbnRlbnQudHN4IiwidHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4IiwidHMvdmlld3MvY2hhdC9pbmRleC50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL2Fuc3dlcmluZy50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb250ZXh0LnRzIiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwidHMvdmlld3MvY2hhdC91c2UtZXh0ZW5zaW9uLnRzeCIsInRzL3ZpZXdzL2NvbnRleHQudHN4IiwidHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwidHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsInRzL3ZpZXdzL2lucHV0L3JlY29yZGluZy50c3giLCJ0cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCJ0cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsInRzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19