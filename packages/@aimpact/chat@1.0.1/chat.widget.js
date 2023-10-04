System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "dayjs@1.11.9", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-app@0.0.2/config", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat-sdk@1.0.0/session", "@bgroup/media-manager@1.0.0/uploader", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/core", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.0.37/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.37/toast", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.37/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/form", "pragmate-ui@0.0.37/components", "pragmate-ui@0.0.37/modal", "pragmate-ui@0.0.37/image", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Chat, ChatInput, RecordingButton, SystemModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioManager: void 0,
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
    }, function (_aimpactAilearnApp002Config) {
      dependency_6 = _aimpactAilearnApp002Config;
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
    }, function (_react2) {
      dependency_14 = _react2;
    }, function (_pragmateUi0037Icons) {
      dependency_15 = _pragmateUi0037Icons;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_16 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedIcons) {
      dependency_17 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi0037Toast) {
      dependency_18 = _pragmateUi0037Toast;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_19 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_20 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactChat101SharedComponents) {
      dependency_21 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi0037Preload) {
      dependency_22 = _pragmateUi0037Preload;
    }, function (_aimpactChat101SharedHooks) {
      dependency_23 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0037Form) {
      dependency_24 = _pragmateUi0037Form;
    }, function (_pragmateUi0037Components) {
      dependency_25 = _pragmateUi0037Components;
    }, function (_pragmateUi0037Modal) {
      dependency_26 = _pragmateUi0037Modal;
    }, function (_pragmateUi0037Image) {
      dependency_27 = _pragmateUi0037Image;
    }, function (_aimpactChat101UiManager) {
      dependency_28 = _aimpactChat101UiManager;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['dayjs', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/config', dependency_6], ['@aimpact/chat-sdk/voice', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@bgroup/media-manager/uploader', dependency_9], ['@aimpact/chat/wrapper', dependency_10], ['@aimpact/chat-sdk/core', dependency_11], ['@bgroup/media-manager/recorder', dependency_12], ['@aimpact/chat/extensions', dependency_13], ['react', dependency_14], ['pragmate-ui/icons', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/icons', dependency_17], ['pragmate-ui/toast', dependency_18], ['@aimpact/chat-sdk/widgets/playable', dependency_19], ['@bgroup/media-manager/audio-player', dependency_20], ['@aimpact/chat/shared/components', dependency_21], ['pragmate-ui/preload', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['pragmate-ui/form', dependency_24], ['pragmate-ui/components', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/image', dependency_27], ['@aimpact/chat/ui/manager', dependency_28]]);
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
        hash: 3728450264,
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
              // AppWrapper.on('app.settings.change', this.ListenAppChanges);
            }

            ListenAppChanges = () => {
              this.#players.web.set({
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
        hash: 3285396725,
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
              this.audioManager.player.set({
                language: chat.language?.default ?? _wrapper.AppWrapper.language
              });
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
                this.response = response;
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
        hash: 901449763,
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
            const [totalMessages, setMessages] = _react.default.useState(store.messages.length ?? [].length);
            (0, _hooks.useBinder)([store], () => {
              setMessages(store.messages.length);
            }, 'new.message');
            const output = store.messages.map((message, i) => {
              const last = i === totalMessages - 1;
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
        hash: 3362927269,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _text = require("./components/text");
          var _actions = require("./actions");
          var _profileIcon = require("./components/profile-icon");
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
            const [blocks, playableContent] = (0, _playable.parseText)(content);
            const scrollToBottom = () => {
              separator.current?.scrollIntoView({
                block: 'end',
                behavior: 'smooth'
              });
            };
            (0, _hooks.useBinder)([store], () => {
              setFinished(false);
              setContent(store.response.content);
              // console.log('aca ', `${message.id}`, message.content, message);
              scrollToBottom();
            }, `message.${message.id}.updated`);
            (0, _hooks.useBinder)([message], () => {
              setContent(store.response.content);
            });
            (0, _hooks.useBinder)([store], () => {
              setContent(store.response.content);
              setFinished(true);
            }, `message.${message.id}.received`);
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
        hash: 3274508272,
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
          var _textInput = require("./text-input");
          /*bundle*/
          const ChatInput = ({
            store,
            isWaiting = false
          }) => {
            const [recording, setRecording] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const [waiting, setWaiting] = _react.default.useState(false);
            const [text, setText] = _react.default.useState('');
            const {
              audioManager,
              audioManager: {
                recorder
              }
            } = store;
            (0, _hooks.useBinder)([store], () => setWaiting(store.waitingResponse));
            const disabled = {
              disabled: false
            };
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
            }, _react.default.createElement(_textInput.TextInput, {
              store: store,
              text: text,
              setFetching: setFetching,
              fetching: fetching || recording || waiting || isWaiting,
              setText: setText,
              handleSend: handleSend
            }), _react.default.createElement("span", {
              className: `input__icon  input__icon--right`
            }, !!text.length ? _react.default.createElement(_components.Button, {
              icon: 'send-arrow',
              onClick: handleSend,
              disabled: disabled.disabled || store.waitingResponse
            }) : _react.default.createElement(_recording.RecordingButton, {
              store: store,
              disabled: recording || store.waitingResponse
            })))));
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
        hash: 1773353111,
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
                if (permission.state !== 'granted') setShowModal(true);
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

      /****************************************
      INTERNAL MODULE: ./views/input/text-input
      ****************************************/

      ims.set('./views/input/text-input', {
        hash: 1909949982,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextInput = TextInput;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function TextInput({
            setFetching,
            store,
            setText,
            handleSend,
            fetching,
            text
          }) {
            const textAreaRef = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = textAreaRef.current;
              target.style.height = 'auto';
              target.style.height = text.length == 1 ? 'auto' : target.scrollHeight + 'px';
              if (['undefined', undefined].includes(text.replaceAll('\n', ''))) return;
            }, [text]);
            (0, _hooks.useBinder)([store], () => {
              globalThis.setTimeout(() => textAreaRef.current.focus(), 300);
              setFetching(false);
            }, 'chat.available');
            const disabledTextarea = {
              disabled: fetching
            };
            const handleInputChange = e => {
              const {
                value
              } = e.target;
              if (['undefined', undefined].includes(value.replaceAll('\n'))) return;
              setText(value);
            };
            const handleKeyDown = e => {
              if (e.key !== 'Enter') return;
              const cb = prevValue => prevValue + '\n';
              const value = e.target.value.replaceAll('\n');
              if (['', undefined, null].includes(value)) return;
              e.shiftKey ? setText(cb) : handleSend();
            };
            return _react.default.createElement("textarea", {
              ...disabledTextarea,
              rows: 1,
              value: text,
              onChange: handleInputChange,
              onKeyDown: handleKeyDown,
              autoFocus: true,
              className: 'input__textarea',
              ref: textAreaRef
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/input/timer/index
      *****************************************/

      ims.set('./views/input/timer/index', {
        hash: 1478628646,
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
              className: 'timer-message__container'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2RheWpzIiwiX21vZGVsIiwiX2NvbmZpZyIsIl92b2ljZSIsIl9zZXNzaW9uIiwiX3VwbG9hZGVyIiwiX3dyYXBwZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJiZWFyZXIiLCJ1cGxvYWRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiZmV0Y2hpbmciLCJpc0ZldGNoaW5nIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJMaXN0ZW5BcHBDaGFuZ2VzIiwic2V0IiwicmF0ZSIsIkFwcFdyYXBwZXIiLCJhdWRpb1NwZWVkIiwidW5kZWZpbmVkIiwidHJpZ2dlciIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInJlYWR5IiwiVXBsb2FkZXIiLCJ0eXBlIiwicGFyYW1zIiwiY29udGFpbmVyIiwicHJvamVjdCIsInVybCIsImRlZmF1bHQiLCJDSEFUX0FQSV9TRVJWRVIiLCJvbiIsImxvYWRlbmQiLCJjb25zb2xlIiwid2FybiIsImNyZWF0ZSIsInNlbGVjdG9yIiwiY29yZG92YSIsImJsb2JUb0FycmF5QnVmZmVyIiwiYmxvYiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJhcnJheUJ1ZmZlciIsInRhcmdldCIsInJlc3VsdCIsIkFycmF5QnVmZmVyIiwib25lcnJvciIsInJlYWRBc0FycmF5QnVmZmVyIiwic2F2ZVJlY29yZGluZyIsInJlY29yZGluZyIsInRyYW5zY3JpcHRpb24iLCJjaGF0IiwiaXRlbSIsInNlbmRBdWRpbyIsIndhaXRpbmdSZXNwb25zZSIsInNhdmVBdWRpbyIsImlkIiwiYXVkaW8iLCJudW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJyZXNwb25zZSIsInB1Ymxpc2hSZWNvcmRpbmciLCJzdGF0dXMiLCJkYXRhIiwicHJvcGVydGllcyIsInBhdGgiLCJmaWxlIiwib3V0cHV0IiwidXNhZ2UiLCJzb3VyY2UiLCJjcmVhdGVkQXQiLCJ1bml4Iiwic2F2ZUl0ZW0iLCJzZXRBdWRpb01lc3NhZ2UiLCJ1c2VyIiwiY2hhdElkIiwiY29udGVudCIsInJvbGUiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiY3VycmVudE1lc3NhZ2UiLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXJJZCIsInNlbGVjdGVkS2IiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwiX2NvcmUiLCJfYXVkaW8iLCJfZXh0ZW5zaW9ucyIsIm1lc3NhZ2VzIiwiRVhURU5TSU9OUyIsImNhdGVnb3J5IiwiY2hhdHMiLCJpdGVtcyIsImF1ZGlvTWFuYWdlciIsImticyIsImtub3dsZWRnZUJveGVzIiwia2IiLCJzZWxlY3RlZE1vZGVsIiwibW9kZWwiLCJub3RGb3VuZCIsInNlbGVjdGVkS2JQYXRoIiwiZmluZCIsImkiLCJtZXNzYWdlIiwiZXh0ZW5zaW9ucyIsIk1hcCIsImF1dG9wbGF5IiwiQ2hhdCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJpc1JlYWR5Iiwia25vd2xlZGVCb3hTZWxlY3RlZCIsImtub3dsZWRnZUJveElkIiwibGFuZ3VhZ2UiLCJsb2FkQWxsIiwiZXh0cyIsIm1ldGFkYXRhIiwiZm9yRWFjaCIsImV4dGVuc2lvbiIsImluZGV4Iiwic2VuZE1lc3NhZ2UiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJpbmNsdWRlcyIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJfcmVhY3QiLCJfaWNvbnMiLCJfaG9va3MiLCJCYWNrQXJyb3ciLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwidXNlQmluZGVyIiwic2V0VGltZW91dCIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsImlzSW5Db250YWluZXIiLCJwYXJlbnROb2RlIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVuZFJlY3QiLCJ0aHJlc2hvbGQiLCJib3R0b20iLCJ1c2VFZmZlY3QiLCJoYW5kbGVTY3JvbGwiLCJ2aXNpYmxlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJJY29uQnV0dG9uIiwicmVmIiwidmFyaWFudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJfdXNlRXh0ZW5zaW9uIiwiX21lc3NhZ2VzIiwiX2NvbnRleHQiLCJfZXh0ZW5zaW9uUmVuZGVyZXIiLCJDb250ZW50IiwidXNlQ2hhdENvbnRleHQiLCJ3ZWJDb21wb25lbnROYW1lIiwidXNlRXh0ZW5zaW9uIiwiRXh0ZW5zaW9uUmVuZGVyZXIiLCJjb21wb25lbnQiLCJyZWZlcmVuY2UiLCJNZXNzYWdlcyIsIkNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfaGVhZGVyIiwiX2lucHV0IiwiX0JhY2tBcnJvdyIsIl9jb250ZW50IiwiY2hhdEludHJvIiwic2V0UmVhZGVyIiwidXNlU3RhdGUiLCJjbHMiLCJIZWFkZXIiLCJhdm9pZENoYXQiLCJDaGF0SW5wdXQiLCJfaWNvbnMyIiwiU3lzdGVtQW5zd2VyaW5nIiwiSWNvbiIsIklDT05TIiwiX2Fuc3dlcmluZyIsIl9tZXNzYWdlIiwidG90YWxNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibGVuZ3RoIiwibWFwIiwibGFzdCIsIk1lc3NhZ2UiLCJrZXkiLCJfdG9hc3QiLCJNZXNzYWdlQWN0aW9ucyIsInRleHQiLCJtZXNzYWdlVG9rZW5zIiwicGxheSIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJvblBhdXNlIiwic3RvcCIsImNvcHlNZXNzYWdlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiZGlzYWJsZWQiLCJhcHBseSIsIlByb2ZpbGVJY29uIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiYWx0Iiwic3JjIiwib25FcnJvciIsIl9wbGF5YWJsZSIsIl9hdWRpb1BsYXllciIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsIm9uQ2xpY2tXb3JkIiwiZXZlbnQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsIkF1ZGlvUGxheWVyIiwiY29udmVydCIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RleHQiLCJfYWN0aW9ucyIsIl9wcm9maWxlSWNvbiIsIk1lc3NhZ2VDb21wb25lbnQiLCJzZXRDb250ZW50IiwiZmluaXNoZWQiLCJzZXRGaW5pc2hlZCIsInRvdGFsVG9rZW5zIiwiYmxvY2tzIiwicGxheWFibGVDb250ZW50IiwicGFyc2VUZXh0IiwibWVtbyIsIl9jb21wb25lbnRzIiwiX3ByZWxvYWQiLCJDaGF0U2tlbGV0b24iLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiUHJlbG9hZCIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0UmVhZHkiLCJjb250cm9sIiwib25SZWFkeSIsIkNoYXRDb250ZXh0Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2V0QXV0b3BsYXkiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJoYW5kbGVBdXRvcGxheVRvZ2dsZSIsImhhbmRsZUNoYXRTZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsIm9uUmVhZGVyIiwiSW5wdXQiLCJsYWJlbCIsInJlcXVpcmVkIiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0Iiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX3JlY29yZGluZyIsIl9pbmRleCIsIl90ZXh0SW5wdXQiLCJpc1dhaXRpbmciLCJzZXRSZWNvcmRpbmciLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsInNldFRleHQiLCJoYW5kbGVTZW5kIiwib25TdWJtaXQiLCJyZXBsYWNlQWxsIiwidHJpbSIsInN5c3RlbSIsImNvbmZpZyIsIlN5c3RlbU1vZGFsIiwiRm9ybSIsIlRleHRJbnB1dCIsIkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIl90aW1lciIsIlBsYXllciIsImNhbmNlbCIsIlRpbWVyIiwiX3BsYXllciIsIl9tb2RhbCIsIl9pbWFnZSIsIl9jb250ZXh0MiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInBsYXlBY3Rpb24iLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uQ2xvc2UiLCJNb2RhbCIsIm9wZW4iLCJwZXJtaXNzaW9ucyIsIkltYWdlIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFyZWFWYWx1ZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwicHVibGlzaCIsIlRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJtb2RlIiwidGV4dEFyZWFSZWYiLCJzdHlsZSIsInNjcm9sbEhlaWdodCIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJfbWFuYWdlciIsIl9jb21wb25lbnRzMiIsIm9wZW5EaWFsb2ciLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy92aWV3cy9jaGF0L0JhY2tBcnJvdy50c3giLCIvdHMvdmlld3MvY2hhdC9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jaGF0L2V4dGVuc2lvbi1yZW5kZXJlci50c3giLCIvdHMvdmlld3MvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9hbnN3ZXJpbmcudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvdmlld3MvY2hhdC91c2UtZXh0ZW5zaW9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDQyxVQUFVLENBQUNILEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUM5QixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9SLE1BQUEsQ0FBQVMsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDWSxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7OztVQzdCRDs7VUFFQWdCLE1BQUEsQ0FBQUMsY0FBQSxDQUFBRixPQUFBO1lBQ0FHLEtBQUE7VUFD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