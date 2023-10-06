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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
        hash: 623550674,
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
            publishRecording = async audio => {
              const form = new FormData();
              form.append('audio', audio);
              form.append('container', 'audios');
              form.append('project', 'ailearn-estrada');
              form.append('chatId', this.#parent.chat.id);
              form.append('conversationId', this.#parent.chat.id);
              form.append('userId', _session.sessionWrapper.userId);
              form.append('fileName', `recoring-${Date.now()}.mp3`);
              form.append('knowledgeBoxId', this.#parent.selectedKb);
              const xhr = new _uploader.XHRLoader();
              const response = await xhr.upload(form, _config.default.params.CHAT_API_SERVER);
              return response.json();
            };
            async saveRecording(audio, transcription = undefined) {
              const {
                chat
              } = this.#parent;
              const item = await chat.saveAudioLocally(audio, transcription);
              this.fetching = true;
              this.#parent.waitingResponse = true;
              const response = await this.publishRecording(audio);
              if (!response?.status) {
                console.log('error sending audio');
                return;
              }
              const {
                data
              } = response;
              await item.saveMessage({
                content: data.transcription
              });
              return this.saveItem({
                name: audio.name,
                path: data.file,
                response: data.output,
                usage: data.usage,
                source: audio,
                createdAt: (0, _dayjs.default)().unix(),
                content: data.transcription
              }, item);
            }
            async saveItem(properties, item) {
              try {
                const {
                  id
                } = item;
                const {
                  chat
                } = this.#parent;
                const response = await chat.setAudioMessage({
                  // user: { chatId: chat.id, id, content: properties.content, role: 'user', timestamp: Date.now() },
                  response: {
                    conversationId: chat.id,
                    content: properties.response,
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
        hash: 3006952743,
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
              await chat.isReady;
              await chat.loadAll({
                id
              });
              globalThis.chat = chat;
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
        hash: 3731919068,
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
            }, text && _react.default.createElement(_playable.Playable, {
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
        hash: 2092173016,
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
              setContent(store?.response?.content ?? '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0E7VUFPTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQ2pELE1BQU07WUFFTkMsV0FBVztjQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSUMsbUJBQVksRUFBRTtjQUNoQ0MsVUFBVSxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU07Y0FDOUIsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUNBLElBQUlDLE1BQU07Y0FDVCxPQUFPQyxXQUFJO1lBQ1o7WUFFQUMsSUFBSTtjQUNILElBQUksQ0FBQyxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7WUFFQUMsSUFBSTtjQUNILElBQUksQ0FBQyxNQUFNLENBQUNDLEtBQUssRUFBRTtZQUNwQjs7VUFDQUM7Ozs7Ozs7Ozs7O1VDN0JEOztVQUVBQztZQUNBQztVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFpQk87VUFBWSxNQUFPQyxZQUFhLFNBQVFDLG9CQUFxQjtZQUduRSxPQUFPO1lBQ1AsU0FBUztZQUVULElBQUlDLFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBQ0EsT0FBTztZQUNQQyxNQUFNLENBQUNBLE1BQTBCO2NBQ2hDLElBQUlBLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHQSxNQUFNO2NBQ2pDLE9BQU8sSUFBSTtZQUNaO1lBRUEsU0FBUztZQUNULElBQUlDLFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBRUEsUUFBUSxHQUFHO2NBQ1ZDLEdBQUcsRUFBRSxJQUFJQyxZQUFLLEVBQUU7Y0FDaEJDLEdBQUcsRUFBRSxJQUFJQyxlQUFRO2FBQ2pCO1lBRUQsT0FBTyxHQUFHLEtBQUs7WUFDZixJQUFJQyxNQUFNO2NBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbkM7WUFDQSxTQUFTO1lBQ1QsSUFBSUMsVUFBVSxDQUFDWCxLQUFLO2NBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUdBLEtBQUs7Y0FDdEIsSUFBSSxDQUFDWSxZQUFZLEVBQUU7WUFDcEI7WUFDQSxJQUFJRCxVQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDRSxRQUFRLElBQUksS0FBSyxDQUFDQSxRQUFRO1lBQ2pEO1lBRUEsTUFBTTtZQUNOLElBQUlDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUFDLFlBQVlDLE1BQU07Y0FDakIsS0FBSyxDQUFDLEVBQUUsQ0FBQztjQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSUMsa0JBQVEsRUFBRTtjQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHRCxNQUFNO2NBQ3JCLElBQUksQ0FBQ0UsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7Y0FDaEMsSUFBSSxDQUFDQyxJQUFJLEVBQUU7Y0FDWDtZQUNEOztZQUVBQyxnQkFBZ0IsR0FBRyxNQUFLO2NBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUNkLEdBQUcsQ0FBQ2UsR0FBRyxDQUFDO2dCQUNyQkMsSUFBSSxFQUFFQyxtQkFBVSxDQUFDQztlQUNqQixDQUFDO1lBQ0gsQ0FBQztZQUNEM0IsS0FBSztjQUNKLElBQUksQ0FBQyxNQUFNLEdBQUc0QixTQUFTO2NBQ3ZCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBQyxZQUFZLENBQUNDLElBQUk7Y0FDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUNBLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLFVBQVVELElBQUksWUFBWSxDQUFDO2NBRXJFLElBQUksQ0FBQyxPQUFPLEdBQUdBLElBQUk7Y0FDbkIsSUFBSSxDQUFDRixPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUEsTUFBTVAsSUFBSTtjQUNULElBQUksQ0FBQ1csS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJQyxrQkFBUSxDQUFDO2dCQUM3QkMsSUFBSSxFQUFFLE9BQU87Z0JBQ2JKLElBQUksRUFBRSxPQUFPO2dCQUNiSyxNQUFNLEVBQUU7a0JBQ1BDLFNBQVMsRUFBRSxRQUFRO2tCQUNuQkMsT0FBTyxFQUFFO2lCQUNUO2dCQUNEQyxHQUFHLEVBQUVDLGVBQU0sQ0FBQ0osTUFBTSxDQUFDSztlQUNuQixDQUFDO2NBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFLLENBQUUsQ0FBQyxDQUFDO2NBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUNBLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBSyxDQUFFLENBQUMsQ0FBQztjQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDQSxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQzFDO1lBQ0Q7O1lBRVFBLE9BQU8sR0FBRyxZQUFXO2NBQzVCQyxPQUFPLENBQUNDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDNUIsQ0FBQztZQUVEQyxNQUFNLENBQUNDLFFBQVE7Y0FDZCxJQUFJekQsVUFBVSxDQUFDMEQsT0FBTyxFQUFFO2dCQUN2QjtnQkFDQTs7Y0FFRCxJQUFJLENBQUMsU0FBUyxDQUFDRixNQUFNLENBQUNDLFFBQVEsQ0FBQztZQUNoQztZQUVBRSxnQkFBZ0IsR0FBRyxNQUFPQyxLQUFLLElBQXdCO2NBQ3RELE1BQU1DLElBQUksR0FBRyxJQUFJQyxRQUFRLEVBQUU7Y0FDM0JELElBQUksQ0FBQ0UsTUFBTSxDQUFDLE9BQU8sRUFBRUgsS0FBSyxDQUFDO2NBQzNCQyxJQUFJLENBQUNFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDO2NBQ2xDRixJQUFJLENBQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7Y0FDekNGLElBQUksQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDQyxJQUFJLENBQUNDLEVBQUUsQ0FBQztjQUMzQ0osSUFBSSxDQUFDRSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxFQUFFLENBQUM7Y0FDbkRKLElBQUksQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRUcsdUJBQWMsQ0FBQ0MsTUFBTSxDQUFDO2NBQzVDTixJQUFJLENBQUNFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsWUFBWUssSUFBSSxDQUFDQyxHQUFHLEVBQUUsTUFBTSxDQUFDO2NBQ3JEUixJQUFJLENBQUNFLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDTyxVQUFVLENBQUM7Y0FFdEQsTUFBTUMsR0FBRyxHQUFHLElBQUlDLG1CQUFTLEVBQUU7Y0FDM0IsTUFBTUMsUUFBUSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csTUFBTSxDQUFDYixJQUFJLEVBQUVYLGVBQU0sQ0FBQ0osTUFBTSxDQUFDSyxlQUFlLENBQUM7Y0FDdEUsT0FBT3NCLFFBQVEsQ0FBQ0UsSUFBSSxFQUFFO1lBQ3ZCLENBQUM7WUFFRCxNQUFNQyxhQUFhLENBQUNoQixLQUFLLEVBQUVpQixhQUFhLEdBQUd2QyxTQUFTO2NBQ25ELE1BQU07Z0JBQUUwQjtjQUFJLENBQUUsR0FBRyxJQUFJLENBQUMsT0FBTztjQUU3QixNQUFNYyxJQUFJLEdBQVksTUFBTWQsSUFBSSxDQUFDZSxnQkFBZ0IsQ0FBQ25CLEtBQUssRUFBRWlCLGFBQWEsQ0FBQztjQUN2RSxJQUFJLENBQUNuRCxRQUFRLEdBQUcsSUFBSTtjQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDc0QsZUFBZSxHQUFHLElBQUk7Y0FDbkMsTUFBTVAsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDZCxnQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDO2NBQ25ELElBQUksQ0FBQ2EsUUFBUSxFQUFFUSxNQUFNLEVBQUU7Z0JBQ3RCM0IsT0FBTyxDQUFDNEIsR0FBRyxDQUFDLHFCQUFxQixDQUFDO2dCQUNsQzs7Y0FFRCxNQUFNO2dCQUFFQztjQUFJLENBQUUsR0FBR1YsUUFBUTtjQUV6QixNQUFNSyxJQUFJLENBQUNNLFdBQVcsQ0FBQztnQkFBRUMsT0FBTyxFQUFFRixJQUFJLENBQUNOO2NBQWEsQ0FBRSxDQUFDO2NBQ3ZELE9BQU8sSUFBSSxDQUFDUyxRQUFRLENBQ25CO2dCQUNDN0MsSUFBSSxFQUFFbUIsS0FBSyxDQUFDbkIsSUFBSTtnQkFDaEI4QyxJQUFJLEVBQUVKLElBQUksQ0FBQ0ssSUFBSTtnQkFDZmYsUUFBUSxFQUFFVSxJQUFJLENBQUNNLE1BQU07Z0JBQ3JCQyxLQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FBSztnQkFDakJDLE1BQU0sRUFBRS9CLEtBQUs7Z0JBQ2JnQyxTQUFTLEVBQUUsa0JBQUssR0FBRSxDQUFDQyxJQUFJLEVBQUU7Z0JBQ3pCUixPQUFPLEVBQUVGLElBQUksQ0FBQ047ZUFDZCxFQUNEQyxJQUFJLENBQ0o7WUFDRjtZQUVBLE1BQU1RLFFBQVEsQ0FBQ1EsVUFBVSxFQUFFaEIsSUFBSTtjQUM5QixJQUFJO2dCQUNILE1BQU07a0JBQUViO2dCQUFFLENBQUUsR0FBR2EsSUFBSTtnQkFDbkIsTUFBTTtrQkFBRWQ7Z0JBQUksQ0FBRSxHQUFHLElBQUksQ0FBQyxPQUFPO2dCQUM3QixNQUFNUyxRQUFRLEdBQUcsTUFBTVQsSUFBSSxDQUFDK0IsZUFBZSxDQUFDO2tCQUMzQztrQkFDQXRCLFFBQVEsRUFBRTtvQkFDVHVCLGNBQWMsRUFBRWhDLElBQUksQ0FBQ0MsRUFBRTtvQkFDdkJvQixPQUFPLEVBQUVTLFVBQVUsQ0FBQ3JCLFFBQVE7b0JBQzVCd0IsSUFBSSxFQUFFLFFBQVE7b0JBQ2RQLEtBQUssRUFBRUksVUFBVSxDQUFDSixLQUFLO29CQUN2QlEsU0FBUyxFQUFFOUIsSUFBSSxDQUFDQyxHQUFHOztpQkFFcEIsQ0FBQztnQkFFRixJQUFJLENBQUMsT0FBTyxDQUFDOEIsY0FBYyxHQUFHMUIsUUFBUTtnQkFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQ08sZUFBZSxHQUFHLEtBQUs7ZUFDcEMsQ0FBQyxPQUFPb0IsQ0FBQyxFQUFFO2dCQUNYOUMsT0FBTyxDQUFDM0IsS0FBSyxDQUFDLG1CQUFtQixFQUFFeUUsQ0FBQyxDQUFDO2VBQ3JDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDMUUsUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvTEQ7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQU9NLE1BQU9aLFlBQWEsU0FBUWdCLG9CQUFxQjtZQUN0RCxTQUFTO1lBS1QsV0FBVyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQzVCLElBQUlzRixRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN0QjtZQUVBLEtBQUs7WUFDTCxJQUFJNUQsSUFBSTtjQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUs7WUFDbEI7WUFFQSxTQUFTO1lBQ1QsSUFBSTZELFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBRUEsS0FBSztZQUNMLElBQUl0QyxJQUFJO2NBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSztZQUNsQjtZQUNBLE1BQU0sR0FBRzVCLG1CQUFVLENBQUNtRSxLQUFLO1lBQ3pCLElBQUlBLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUNDLEtBQUssSUFBSSxFQUFFO1lBQy9CO1lBRUEsTUFBTSxHQUFpQixJQUFJMUYsbUJBQVksQ0FBQyxJQUFJLENBQUM7WUFDN0MsSUFBSTJGLFlBQVk7Y0FDZixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUEsSUFBSSxHQUFHckUsbUJBQVUsQ0FBQ3NFLGNBQWM7WUFDaEMsSUFBSUMsR0FBRztjQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQ0gsS0FBSyxJQUFJLEVBQUU7WUFDN0I7WUFFQSxXQUFXO1lBQ1gsSUFBSWxDLFVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ3hCO1lBQ0EsSUFBSUEsVUFBVSxDQUFDc0MsRUFBRTtjQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHQSxFQUFFO1lBQ3RCO1lBRUEsY0FBYyxHQUFHLE9BQU87WUFDeEIsSUFBSUMsYUFBYTtjQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjO1lBQzNCO1lBQ0EsSUFBSUEsYUFBYSxDQUFDQyxLQUFLO2NBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUdBLEtBQUs7WUFDNUI7WUFFQSxTQUFTO1lBQ1QsSUFBSUMsUUFBUTtjQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVM7WUFDdEI7WUFDQSxJQUFJQSxRQUFRLENBQUNBLFFBQVE7Y0FDcEIsSUFBSSxDQUFDLFNBQVMsR0FBR0EsUUFBUTtZQUMxQjtZQUVBLElBQUlDLGNBQWM7Y0FDakIsTUFBTTFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDa0MsS0FBSyxDQUFDUyxJQUFJLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDakQsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUM7Y0FDdkUsT0FBT0ssVUFBVSxFQUFFaUIsSUFBSSxJQUFJLGtCQUFrQjtZQUM5QztZQUVBLGVBQWU7WUFDZixJQUFJWSxjQUFjO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLGVBQWU7WUFDNUI7WUFFQSxJQUFJQSxjQUFjLENBQUNnQixPQUFPO2NBQ3pCLElBQUlBLE9BQU8sRUFBRWxELEVBQUUsS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFQSxFQUFFLEVBQUU7Y0FDOUMsSUFBSSxDQUFDLGVBQWUsR0FBR2tELE9BQU87WUFDL0I7WUFFQSxXQUFXLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3ZCLElBQUlDLFVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ3hCO1lBQ0F6RjtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0csYUFBYSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7Y0FDbkQsSUFBSSxDQUFDdUYsUUFBUSxHQUFHLElBQUk7WUFDckI7WUFFQTVHLEtBQUs7Y0FDSixJQUFJLENBQUNnQixRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUNpQixLQUFLLEdBQUcsS0FBSztZQUNuQjtZQUVBdEMsSUFBSSxHQUFHLE1BQU80RCxFQUFVLElBQUk7Y0FDM0IsSUFBSSxDQUFDQSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDdEIsS0FBSyxHQUFHLElBQUk7Z0JBQ2pCLElBQUksQ0FBQ29FLFFBQVEsR0FBRyxJQUFJO2dCQUNwQjs7Y0FHRCxJQUFJLENBQUNyRixRQUFRLEdBQUcsSUFBSTtjQUVwQixNQUFNc0MsSUFBSSxHQUFHLElBQUl1RCxVQUFJLENBQUM7Z0JBQUV0RDtjQUFFLENBQUUsQ0FBQztjQUM3QixNQUFNRCxJQUFJLENBQUN3RCxPQUFPO2NBQ2xCLE1BQU14RCxJQUFJLENBQUN5RCxPQUFPLENBQUM7Z0JBQUV4RDtjQUFFLENBQUUsQ0FBQztjQUMxQmpFLFVBQVUsQ0FBQ2dFLElBQUksR0FBR0EsSUFBSTtjQUN0QjVCLG1CQUFVLENBQUNzRixXQUFXLEdBQUcxRCxJQUFJO2NBRTdCLElBQUksQ0FBQ0EsSUFBSSxDQUFDMkQsS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUNqRyxRQUFRLEdBQUcsS0FBSztnQkFDckIsSUFBSSxDQUFDaUIsS0FBSyxHQUFHLElBQUk7Z0JBQ2pCLElBQUksQ0FBQ29FLFFBQVEsR0FBRyxJQUFJO2dCQUNwQjs7Y0FHRCxNQUFNL0MsSUFBSSxDQUFDd0QsT0FBTztjQUVsQixNQUFNSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDcEIsS0FBSyxDQUFDUyxJQUFJLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDakQsRUFBRSxLQUFLRCxJQUFJLENBQUM2RCxjQUFjLENBQUM7Y0FDbkYsSUFBSSxDQUFDLFdBQVcsR0FBR0QsbUJBQW1CLEdBQUdBLG1CQUFtQixDQUFDM0QsRUFBRSxHQUFHLFNBQVM7Y0FDM0UsSUFBSSxDQUFDd0MsWUFBWSxDQUFDbEYsTUFBTSxDQUFDVyxHQUFHLENBQUM7Z0JBQzVCNEYsUUFBUSxFQUFFOUQsSUFBSSxDQUFDOEQsUUFBUSxFQUFFQyxPQUFPLElBQUkzRixtQkFBVSxDQUFDMEY7ZUFDL0MsQ0FBQztjQUNGO2NBQ0E5RCxJQUFJLENBQUNaLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBSztnQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBR1ksSUFBSSxDQUFDcUMsUUFBUSxFQUFFRyxLQUFLO2dCQUNyQyxJQUFJLENBQUMvRSxZQUFZLENBQUMsYUFBYSxDQUFDO2NBQ2pDLENBQUMsQ0FBQztjQUVGLElBQUksQ0FBQyxLQUFLLEdBQUd1QyxJQUFJO2NBQ2pCLE1BQU1nRSxJQUFJLEdBQUcsTUFBTVgsc0JBQVUsQ0FBQ2hILElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFMkQsSUFBSSxDQUFDaUUsUUFBUSxDQUFDO2NBQ25FRCxJQUFJLENBQUNFLE9BQU8sQ0FBQyxDQUFDQyxTQUFTLEVBQUVDLEtBQUssS0FBSSxDQUFFLENBQUMsQ0FBQztjQUV0QyxJQUFJLENBQUMsV0FBVyxDQUFDRixPQUFPLENBQUMsQ0FBQ0MsU0FBUyxFQUFFQyxLQUFLLEtBQUk7Z0JBQzdDLElBQUksQ0FBQyxXQUFXLENBQUNsRyxHQUFHLENBQUNpRyxTQUFTLEVBQUVILElBQUksQ0FBQ0ksS0FBSyxDQUFDLENBQUM7Y0FDN0MsQ0FBQyxDQUFDO2NBRUYsSUFBSSxDQUFDLFNBQVMsR0FBR3BFLElBQUksQ0FBQ3FDLFFBQVEsQ0FBQ0csS0FBSztjQUNwQyxJQUFJLENBQUM5RSxRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUNpQixLQUFLLEdBQUcsSUFBSTtjQUNqQixJQUFJLENBQUNvRSxRQUFRLEdBQUcsS0FBSztZQUN0QixDQUFDO1lBRUQsTUFBTXNCLFdBQVcsQ0FBQ2hELE9BQWU7Y0FDaEMsSUFBSTtnQkFDSGlELFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDekIsSUFBSSxDQUFDLGVBQWUsR0FBR2pHLFNBQVM7Z0JBQ2hDLElBQUksQ0FBQ0EsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQ2tHLFFBQVEsQ0FBQ25ELE9BQU8sQ0FBQyxFQUFFO2dCQUM3QyxJQUFJLENBQUMzRCxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsSUFBSSxDQUFDc0QsZUFBZSxHQUFHLElBQUk7Z0JBQzNCLE1BQU07a0JBQUVtQyxPQUFPO2tCQUFFMUM7Z0JBQVEsQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQzRELFdBQVcsQ0FBQ2hELE9BQU8sQ0FBQztnQkFDbkUsSUFBSSxDQUFDWixRQUFRLEdBQUdBLFFBQVE7Z0JBQ3hCO2dCQUNBLElBQUksQ0FBQyxlQUFlLEdBQUcwQyxPQUFPO2dCQUM5QixNQUFNc0IsUUFBUSxHQUFHLE1BQUs7a0JBQ3JCLElBQUksQ0FBQ2hILFlBQVksQ0FBQyxXQUFXZ0QsUUFBUSxDQUFDUixFQUFFLFVBQVUsQ0FBQztnQkFDcEQsQ0FBQztnQkFDRCxNQUFNeUUsS0FBSyxHQUFHLE1BQUs7a0JBQ2xCdkIsT0FBTyxDQUFDd0IsR0FBRyxDQUFDLGlCQUFpQixFQUFFRixRQUFRLENBQUM7a0JBQ3hDLElBQUksQ0FBQ2hILFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztrQkFDbkMsSUFBSSxDQUFDQSxZQUFZLENBQUMsV0FBV2dELFFBQVEsQ0FBQ1IsRUFBRSxXQUFXLENBQUM7a0JBQ3BEa0QsT0FBTyxDQUFDd0IsR0FBRyxDQUFDLG1CQUFtQixFQUFFRCxLQUFLLENBQUM7Z0JBQ3hDLENBQUM7Z0JBRUR2QixPQUFPLENBQUMvRCxFQUFFLENBQUMsaUJBQWlCLEVBQUVxRixRQUFRLENBQUM7Z0JBQ3ZDdEIsT0FBTyxDQUFDL0QsRUFBRSxDQUFDLG1CQUFtQixFQUFFc0YsS0FBSyxDQUFDO2dCQUV0QyxJQUFJLENBQUMxRCxlQUFlLEdBQUcsS0FBSztnQkFDNUIsSUFBSSxDQUFDdkQsWUFBWSxDQUFDLGFBQWEsQ0FBQztlQUNoQyxDQUFDLE9BQU8yRSxDQUFDLEVBQUU7Z0JBQ1g5QyxPQUFPLENBQUMzQixLQUFLLENBQUN5RSxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNwQixlQUFlLEdBQUcsS0FBSztnQkFDNUIsSUFBSSxDQUFDdEQsUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzTEQ7VUFDQTtVQUNBO1VBRU0sU0FBVWlJLFNBQVMsQ0FBQztZQUFFM0ksS0FBSztZQUFFNEk7VUFBUyxDQUFFO1lBQzdDLE1BQU1DLElBQUksR0FBR0MsY0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRS9CLG9CQUFTLEVBQUMsQ0FBQy9JLEtBQUssQ0FBQyxFQUFFLE1BQU1ELFVBQVUsQ0FBQ2lKLFVBQVUsQ0FBQyxNQUFNQyxjQUFjLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxhQUFhLENBQUM7WUFDM0YsTUFBTUEsY0FBYyxHQUFHLE1BQUs7Y0FDM0JMLFNBQVMsQ0FBQ00sT0FBTyxFQUFFQyxjQUFjLENBQUM7Z0JBQUVDLEtBQUssRUFBRSxLQUFLO2dCQUFFQyxRQUFRLEVBQUU7Y0FBUSxDQUFFLENBQUM7WUFDeEUsQ0FBQztZQUVELE1BQU1DLGFBQWEsR0FBRyxNQUFLO2NBQzFCLE1BQU14RyxTQUFTLEdBQUc4RixTQUFTLENBQUNNLE9BQU8sRUFBRUssVUFBVTtjQUMvQyxJQUFJLENBQUN6RyxTQUFTLEVBQUUsT0FBTyxJQUFJO2NBQzNCLE1BQU0wRyxhQUFhLEdBQUcxRyxTQUFTLENBQUMyRyxxQkFBcUIsRUFBRTtjQUN2RCxNQUFNQyxPQUFPLEdBQUdkLFNBQVMsQ0FBQ00sT0FBTyxDQUFDTyxxQkFBcUIsRUFBRTtjQUN6RCxNQUFNRSxTQUFTLEdBQUcsQ0FBQztjQUNuQixPQUFPRCxPQUFPLENBQUNFLE1BQU0sR0FBR0QsU0FBUyxJQUFJSCxhQUFhLENBQUNJLE1BQU07WUFDMUQsQ0FBQztZQUVEZCxjQUFLLENBQUNlLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU0vRyxTQUFTLEdBQUc4RixTQUFTLENBQUNNLE9BQU8sRUFBRUssVUFBVTtjQUMvQyxJQUFJLENBQUN6RyxTQUFTLEVBQUU7Y0FFaEIsTUFBTWdILFlBQVksR0FBRyxNQUFLO2dCQUN6QixNQUFNQyxPQUFPLEdBQUcsQ0FBQ1QsYUFBYSxFQUFFO2dCQUNoQyxJQUFJUyxPQUFPLEVBQUVsQixJQUFJLENBQUNLLE9BQU8sRUFBRWMsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FDNUNwQixJQUFJLENBQUNLLE9BQU8sRUFBRWMsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO2NBQzVDLENBQUM7Y0FDRHBILFNBQVMsQ0FBQ3FILGdCQUFnQixDQUFDLFFBQVEsRUFBRUwsWUFBWSxDQUFDO2NBQ2xELE9BQU8sTUFBTWhILFNBQVMsQ0FBQ3NILG1CQUFtQixDQUFDLFFBQVEsRUFBRU4sWUFBWSxDQUFDO1lBQ25FLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixPQUNDaEIsNERBQ0NBLDZCQUFDdUIsaUJBQVU7Y0FDVkMsR0FBRyxFQUFFekIsSUFBSTtjQUNUQSxJQUFJLEVBQUMsV0FBVztjQUNoQjBCLE9BQU8sRUFBQyxVQUFVO2NBQ2xCQyxTQUFTLEVBQUMsMkJBQTJCO2NBQ3JDQyxPQUFPLEVBQUV4QjtZQUFjLEVBQ3RCLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0E7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUVNLFNBQVV5QixPQUFPLENBQUM7WUFBRTlCO1VBQVMsQ0FBRTtZQUNwQyxNQUFNO2NBQUU1STtZQUFLLENBQUUsR0FBRywyQkFBYyxHQUFFO1lBRWxDLE1BQU0sQ0FBQ3NLLEdBQUcsRUFBRTVILEtBQUssRUFBRWlJLGdCQUFnQixDQUFDLEdBQUcsOEJBQVksRUFBQyxZQUFZLENBQUM7WUFFakUsT0FDQzdCO2NBQUswQixTQUFTLEVBQUM7WUFBZSxHQUM3QjFCLDZCQUFDOEIsb0NBQWlCO2NBQUNDLFNBQVMsRUFBRUYsZ0JBQWdCO2NBQUVHLFNBQVMsRUFBRVI7WUFBRyxFQUFJLEVBRWpFNUgsS0FBSyxJQUNMb0csNERBQ0NBLDZCQUFDaUMsa0JBQVE7Y0FBQ25DLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ2xDRTtjQUFLd0IsR0FBRyxFQUFFMUIsU0FBUztjQUFFNEIsU0FBUyxFQUFDO1lBQVcsRUFBRyxDQUU5QyxDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBO1VBRUE7VUFEQTs7VUFHTSxTQUFVSSxpQkFBaUIsQ0FBQztZQUFFQyxTQUFTO1lBQUVDO1VBQVMsQ0FBRTtZQUN6RCxNQUFNO2NBQ0w5SyxLQUFLLEVBQUU7Z0JBQUUrRCxJQUFJO2dCQUFFcUQ7Y0FBVTtZQUFFLENBQzNCLEdBQUcsMkJBQWMsR0FBRTtZQUVwQixNQUFNNEQsU0FBUyxHQUFHSCxTQUFTO1lBQzNCLElBQUksQ0FBQ0EsU0FBUyxFQUFFLE9BQU8sSUFBSTtZQUMzQixPQUNDL0IsNERBQ0NBLDZCQUFDa0MsU0FBUztjQUFDVixHQUFHLEVBQUVRLFNBQVM7Y0FBRTlDLFFBQVEsRUFBRWlELElBQUksQ0FBQ0MsU0FBUyxDQUFDbkgsSUFBSSxDQUFDaUUsUUFBUTtZQUFDLEVBQUksQ0FDcEU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkE7VUFDQTtVQUVBO1VBQ0E7VUFFQTtVQUVBO1VBVUEsTUFBTTtZQUFFZTtVQUFNLENBQUUsR0FBR0QsY0FBSztVQUVqQjtVQUFVLFNBQVV4QixJQUFJO1lBQzlCLE1BQU07Y0FBRXRIO1lBQUssQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDbEMsTUFBTW1MLFNBQVMsR0FBR25MLEtBQUssQ0FBQ29ILFVBQVUsQ0FBQzdHLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDcEQsTUFBTSxDQUFDNkssTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR3ZDLGNBQUssQ0FBQ3dDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakQsTUFBTTFDLFNBQVMsR0FBR0UsY0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3BDLE1BQU13QyxHQUFHLEdBQUcsdUJBQXVCSCxNQUFNLEdBQUcsb0JBQW9CLEdBQUcsRUFBRSxFQUFFO1lBRXZFLE9BQ0N0QztjQUFLMEIsU0FBUyxFQUFFZTtZQUFHLEdBQ2xCekMsNkJBQUMwQyxjQUFNO2NBQUNKLE1BQU0sRUFBRUEsTUFBTTtjQUFFQyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUNoRHZDLDZCQUFDNEIsZ0JBQU87Y0FBQzlCLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ2pDRSw2QkFBQ0gsb0JBQVM7Y0FBQzNJLEtBQUssRUFBRUEsS0FBSztjQUFFNEksU0FBUyxFQUFFQTtZQUFTLEVBQUksRUFDaEQsQ0FBQ3VDLFNBQVMsRUFBRW5ELFFBQVEsRUFBRXlELFNBQVMsSUFDL0IzQyw0REFDQ0E7Y0FBSzBCLFNBQVMsRUFBQztZQUFNLEdBQ3BCMUIsNkJBQUM0QyxnQkFBUztjQUFDMUwsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDdEIsQ0FFUCxDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBO1VBQ0E7VUFDQTtVQUVPLE1BQU0yTCxlQUFlLEdBQUcsTUFBSztZQUNuQyxPQUNDN0M7Y0FBSzBCLFNBQVMsRUFBQztZQUFtQixHQUNqQzFCLDZCQUFDOEMsV0FBSTtjQUFDcEIsU0FBUyxFQUFDLElBQUk7Y0FBQzNCLElBQUksRUFBRWdELGFBQUssQ0FBQyxZQUFZO1lBQUMsRUFBSSxFQUNsRC9DO2NBQUswQixTQUFTLEVBQUM7WUFBZSxHQUM3QjFCO2NBQU0wQixTQUFTLEVBQUM7WUFBSyxFQUFRLEVBQzdCMUI7Y0FBTTBCLFNBQVMsRUFBQztZQUFLLEVBQVEsRUFDN0IxQjtjQUFNMEIsU0FBUyxFQUFDO1lBQUssRUFBUSxDQUN4QixDQUNEO1VBRVIsQ0FBQztVQUFDOUo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkY7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUVNLFNBQVVxSyxRQUFRLENBQUM7WUFBRW5DO1VBQVMsQ0FBRTtZQUNyQyxNQUFNO2NBQUU1STtZQUFLLENBQUUsR0FBRywyQkFBYyxHQUFFO1lBQ2xDLE1BQU0sQ0FBQzhMLGFBQWEsRUFBRUMsV0FBVyxDQUFDLEdBQUdqRCxjQUFLLENBQUN3QyxRQUFRLENBQVN0TCxLQUFLLENBQUNvRyxRQUFRLENBQUM0RixNQUFNLElBQUksRUFBRSxDQUFDQSxNQUFNLENBQUM7WUFFL0Ysb0JBQVMsRUFDUixDQUFDaE0sS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKK0wsV0FBVyxDQUFDL0wsS0FBSyxDQUFDb0csUUFBUSxDQUFDNEYsTUFBTSxDQUFDO1lBQ25DLENBQUMsRUFDRCxhQUFhLENBQ2I7WUFFRCxNQUFNeEcsTUFBTSxHQUFHeEYsS0FBSyxDQUFDb0csUUFBUSxDQUFDNkYsR0FBRyxDQUFDLENBQUMvRSxPQUFPLEVBQUVELENBQUMsS0FBSTtjQUNoRCxNQUFNaUYsSUFBSSxHQUFHakYsQ0FBQyxLQUFLNkUsYUFBYSxHQUFHLENBQUM7Y0FDcEMsT0FBT2hELDZCQUFDcUQsZ0JBQU87Z0JBQUNDLEdBQUcsRUFBRSxXQUFXbkYsQ0FBQyxFQUFFO2dCQUFFMkIsU0FBUyxFQUFFQSxTQUFTO2dCQUFFMUIsT0FBTyxFQUFFQSxPQUFPO2dCQUFFZ0YsSUFBSSxFQUFFQTtjQUFJLEVBQUk7WUFDNUYsQ0FBQyxDQUFDO1lBRUYsT0FDQ3BELDREQUNFdEQsTUFBTSxFQUNOeEYsS0FBSyxDQUFDK0UsZUFBZSxJQUFJK0QsNkJBQUM2QywwQkFBZSxPQUFHLENBQzNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVVSxjQUFjLENBQUM7WUFBRW5GLE9BQU87WUFBRW9GLElBQUk7WUFBRUMsYUFBYTtZQUFFQyxJQUFJLEdBQUc7VUFBSSxDQUFFO1lBQzNFLE1BQU07Y0FBRXhNLEtBQUs7Y0FBRXNCO1lBQU0sQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFFMUMsTUFBTSxDQUFDbUwsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBRzVELGNBQUssQ0FBQ3dDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEQsTUFBTSxDQUFDcUIsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzlELGNBQUssQ0FBQ3dDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFekQsb0JBQVMsRUFBQyxDQUFDaEssTUFBTSxDQUFDLEVBQUUsTUFBTXNMLGFBQWEsQ0FBQ3RMLE1BQU0sQ0FBQ3VMLFFBQVEsQ0FBQyxDQUFDO1lBRXpELE1BQU1DLFFBQVEsR0FBRyxNQUFLO2NBQ3JCRixhQUFhLENBQUMsS0FBSyxDQUFDO2NBQ3BCRixTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQztZQUNELG9CQUFTLEVBQUMsQ0FBQ3BMLE1BQU0sQ0FBQyxFQUFFd0wsUUFBUSxFQUFFLFdBQVcsQ0FBQztZQUUxQyxNQUFNQyxNQUFNLEdBQUcsT0FBTztjQUFFQztZQUFNLENBQUUsS0FBSTtjQUNuQ04sU0FBUyxDQUFDLE1BQU0sQ0FBQztjQUNqQjFNLEtBQUssQ0FBQ2tHLGNBQWMsR0FBR2dCLE9BQU87Y0FDOUI1RixNQUFNLENBQUMyTCxhQUFhLEdBQUcsQ0FBQztjQUN4QixNQUFNM0wsTUFBTSxDQUFDa0wsSUFBSSxDQUFDRixJQUFJLEVBQUVwRixPQUFPLENBQUNsRCxFQUFFLENBQUM7WUFDcEMsQ0FBQztZQUNELE1BQU1rSixPQUFPLEdBQUcsT0FBTztjQUFFRjtZQUFNLENBQUUsS0FBSTtjQUNwQyxNQUFNMUwsTUFBTSxDQUFDNkwsSUFBSSxFQUFFO2NBQ25CVCxTQUFTLENBQUMsTUFBTSxDQUFDO2NBQ2pCRSxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxNQUFNUSxXQUFXLEdBQUcsWUFBVztjQUM5QixNQUFNck4sVUFBVSxFQUFFc04sU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ2pCLElBQUksQ0FBQztjQUNyRGtCLFlBQUssQ0FBQ0MsT0FBTyxDQUFDLDZCQUE2QixDQUFDO1lBQzdDLENBQUM7WUFFRCxNQUFNQyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFO1lBQUksQ0FBRTtZQUNuQyxNQUFNQyxLQUFLLEdBQUczTixLQUFLLENBQUNrRyxjQUFjLEVBQUVsQyxFQUFFLEtBQUtrRCxPQUFPLEVBQUVsRCxFQUFFLElBQUkySSxVQUFVO1lBRXBFLE1BQU05RCxJQUFJLEdBQUc4RSxLQUFLLElBQUlsQixNQUFNLEtBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNO1lBQ3pELE1BQU1oQyxPQUFPLEdBQUdrRCxLQUFLLElBQUlsQixNQUFNLEtBQUssTUFBTSxHQUFHUyxPQUFPLEdBQUdILE1BQU07WUFFN0QsT0FDQ2pFLDBDQUNDQTtjQUFLMEIsU0FBUyxFQUFDO1lBQWdCLEdBQzlCMUIsNkJBQUN1QixpQkFBVTtjQUFDSSxPQUFPLEVBQUUyQyxXQUFXO2NBQUV2RSxJQUFJLEVBQUM7WUFBTSxFQUFHLEVBQy9DMkQsSUFBSSxJQUFJMUQsNkJBQUN1QixpQkFBVTtjQUFDSSxPQUFPLEVBQUVBLE9BQU87Y0FBQSxlQUFjLEtBQUs7Y0FBQzVCLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ2xFLEVBQ0wwRCxhQUFhLElBQUl6RDtjQUFLMEIsU0FBUyxFQUFDO1lBQWlCLEdBQUUrQixhQUFhLFlBQWMsQ0FDMUU7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREE7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVcUIsV0FBVyxDQUFDO1lBQUU1SDtVQUFJLENBQUU7WUFDbkMsTUFBTSxDQUFDNkgsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRyxtQkFBUSxFQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNakYsSUFBSSxHQUFHN0MsSUFBSSxLQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsWUFBWTtZQUNwRCxNQUFNK0gsU0FBUyxHQUFHOUosdUJBQWMsQ0FBQytKLElBQUksQ0FBQ0MsYUFBYSxFQUFFO1lBQ3JELE1BQU1DLGVBQWUsR0FBRyxNQUFNSixZQUFZLENBQUMsSUFBSSxDQUFDO1lBRWhELE9BQ0NoRiw0REFDRWlGLFNBQVMsQ0FBQ0ksUUFBUSxJQUFJbkksSUFBSSxLQUFLLE1BQU0sSUFBSSxDQUFDNkgsU0FBUyxHQUNuRC9FO2NBQUtzRixHQUFHLEVBQUMsb0JBQW9CO2NBQUNDLEdBQUcsRUFBRU4sU0FBUyxDQUFDSSxRQUFRO2NBQUVHLE9BQU8sRUFBRUo7WUFBZSxFQUFJLEdBRW5GcEYsNkJBQUM4QyxXQUFJO2NBQUNwQixTQUFTLEVBQUMsSUFBSTtjQUFDM0IsSUFBSSxFQUFFZ0QsYUFBSyxDQUFDaEQsSUFBSSxDQUFDLElBQUlBO1lBQUksRUFDOUMsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ00sU0FBVTBGLFdBQVcsQ0FBQztZQUFFckgsT0FBTztZQUFFc0g7VUFBUSxDQUFFO1lBQ2hELE1BQU07Y0FBRXhPLEtBQUs7Y0FBRXFILFFBQVE7Y0FBRS9GO1lBQU0sQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDcEQsTUFBTWdMLElBQUksR0FBR3BGLE9BQU8sRUFBRTlCLE9BQU8sSUFBSSxFQUFFO1lBQ25DLE1BQU1rRixHQUFHLEdBQUd4QixjQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUIsTUFBTTBGLGVBQWUsR0FBRyxNQUN2Qm5FLEdBQUcsQ0FBQ3BCLE9BQU8sQ0FBQ3dGLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDekcsT0FBTyxDQUFDMEcsT0FBTyxJQUFJQSxPQUFPLENBQUMzRSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVyRyxvQkFBUyxFQUFDLENBQUM1SSxNQUFNLENBQUMsRUFBRW1OLGVBQWUsRUFBRSxXQUFXLENBQUM7WUFDakQsSUFBSSxPQUFPbkMsSUFBSSxLQUFLLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFekMsTUFBTXNDLFdBQVcsR0FBR0MsS0FBSyxJQUFLN08sS0FBSyxDQUFDa0csY0FBYyxHQUFHZ0IsT0FBUTtZQUU3RCxNQUFNNEgsV0FBVyxHQUFHNUgsT0FBTyxJQUFJQSxPQUFPLENBQUNsQixJQUFJLEtBQUssTUFBTSxJQUFJcUIsUUFBUTtZQUNsRSxNQUFNMEgsYUFBYSxHQUFHN0gsT0FBTyxDQUFDbEQsRUFBRSxLQUFLaEUsS0FBSyxDQUFDa0csY0FBYyxFQUFFbEMsRUFBRSxJQUFJOEssV0FBVztZQUU1RTtZQUNBLE9BQ0NoRztjQUFLMEIsU0FBUyxFQUFDLHlCQUF5QjtjQUFDRixHQUFHLEVBQUVBO1lBQUcsR0FDL0NnQyxJQUFJLElBQ0p4RCw2QkFBQ2tHLGtCQUFRO2NBQ1I1SixPQUFPLEVBQUVrSCxJQUFJO2NBQ2JrQyxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJ4SyxFQUFFLEVBQUVrRCxPQUFPLENBQUNsRCxFQUFFO2NBQ2Q0SyxXQUFXLEVBQUVBLFdBQVc7Y0FDeEJ0TixNQUFNLEVBQUVBLE1BQU07Y0FDZCtGLFFBQVEsRUFBRTBILGFBQWEsSUFBSUQ7WUFBVyxFQUV2QyxFQUNBNUgsT0FBTyxDQUFDdkQsS0FBSyxJQUFJbUYsNkJBQUNtRyx3QkFBVztjQUFDWixHQUFHLEVBQUVuSCxPQUFPLENBQUN2RCxLQUFLO2NBQUV1TCxPQUFPO1lBQUEsRUFBRyxDQUN4RDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQTtVQUdPLE1BQU1DLGtCQUFrQixHQUFHckcsY0FBSyxDQUFDc0csYUFBYSxDQUFDLEVBQXlCLENBQUM7VUFBQzFPO1VBQzFFLE1BQU0yTyxxQkFBcUIsR0FBRyxNQUFNdkcsY0FBSyxDQUFDd0csVUFBVSxDQUFDSCxrQkFBa0IsQ0FBQztVQUFDek87Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSmhGO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRUEsU0FBUzZPLGdCQUFnQixDQUFDO1lBQUUzRyxTQUFTO1lBQUUxQixPQUFPO1lBQUVnRjtVQUFJLENBQUU7WUFDckQsTUFBTSxDQUFDOUcsT0FBTyxFQUFFb0ssVUFBVSxDQUFDLEdBQUcxRyxjQUFLLENBQUN3QyxRQUFRLENBQVNwRSxPQUFPLEVBQUU5QixPQUFPLElBQUksRUFBRSxDQUFDO1lBQzVFOzs7WUFHQSxNQUFNLENBQUNxSyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHNUcsY0FBSyxDQUFDd0MsUUFBUSxDQUFVLElBQUksQ0FBQztZQUM3RCxNQUFNQyxHQUFHLEdBQUcsV0FBV3JFLE9BQU8sQ0FBQ2xCLElBQUksRUFBRTtZQUNyQyxNQUFNdUcsYUFBYSxHQUFHckYsT0FBTyxDQUFDbEIsSUFBSSxLQUFLLFFBQVEsR0FBR2tCLE9BQU8sQ0FBQ3pCLEtBQUssRUFBRWtLLFdBQVcsR0FBRyxJQUFJO1lBQ25GLE1BQU07Y0FBRTNQO1lBQUssQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFFbEMsTUFBTSxDQUFDNFAsTUFBTSxFQUFFQyxlQUFlLENBQUMsR0FBRyx1QkFBUyxFQUFDekssT0FBTyxDQUFDO1lBQ3BELE1BQU02RCxjQUFjLEdBQUcsTUFBSztjQUMzQkwsU0FBUyxDQUFDTSxPQUFPLEVBQUVDLGNBQWMsQ0FBQztnQkFBRUMsS0FBSyxFQUFFLEtBQUs7Z0JBQUVDLFFBQVEsRUFBRTtjQUFRLENBQUUsQ0FBQztZQUN4RSxDQUFDO1lBRUQsb0JBQVMsRUFDUixDQUFDckosS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKMFAsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNsQkYsVUFBVSxDQUFDeFAsS0FBSyxDQUFDd0UsUUFBUSxDQUFDWSxPQUFPLENBQUM7Y0FDbEM7Y0FDQTZELGNBQWMsRUFBRTtZQUNqQixDQUFDLEVBQ0QsV0FBVy9CLE9BQU8sQ0FBQ2xELEVBQUUsVUFBVSxDQUMvQjtZQUNELG9CQUFTLEVBQUMsQ0FBQ2tELE9BQU8sQ0FBQyxFQUFFLE1BQUs7Y0FDekJzSSxVQUFVLENBQUN4UCxLQUFLLEVBQUV3RSxRQUFRLEVBQUVZLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDM0MsQ0FBQyxDQUFDO1lBQ0Ysb0JBQVMsRUFDUixDQUFDcEYsS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKd1AsVUFBVSxDQUFDeFAsS0FBSyxDQUFDd0UsUUFBUSxDQUFDWSxPQUFPLENBQUM7Y0FDbENzSyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2xCLENBQUMsRUFDRCxXQUFXeEksT0FBTyxDQUFDbEQsRUFBRSxXQUFXLENBQ2hDO1lBRUQsT0FDQzhFO2NBQUswQixTQUFTLEVBQUVlLEdBQUc7Y0FBQSxXQUFXckUsT0FBTyxDQUFDbEQ7WUFBRSxHQUN2QzhFO2NBQVMwQixTQUFTLEVBQUM7WUFBb0IsR0FDdEMxQiw2QkFBQzhFLHdCQUFXO2NBQUM1SCxJQUFJLEVBQUVrQixPQUFPLENBQUNsQjtZQUFJLEVBQUksQ0FDMUIsRUFDVjhDO2NBQVMwQixTQUFTLEVBQUM7WUFBb0IsR0FDdEMxQiw2QkFBQ3lGLGlCQUFXO2NBQUNDLFFBQVEsRUFBRWlCLFFBQVE7Y0FBRXZJLE9BQU8sRUFBRUE7WUFBTyxFQUFJLENBQzVDLEVBQ1Y0QjtjQUFTMEIsU0FBUyxFQUFDO1lBQWtCLEdBQ3BDMUIsNkJBQUN1RCx1QkFBYztjQUNkRyxJQUFJLEVBQUUsQ0FBQ3RGLE9BQU8sQ0FBQ3ZELEtBQUs7Y0FDcEJ1RCxPQUFPLEVBQUVBLE9BQU87Y0FDaEJvRixJQUFJLEVBQUV1RCxlQUFlO2NBQ3JCdEQsYUFBYSxFQUFFQTtZQUFhLEVBQzNCLENBQ08sQ0FDTDtVQUVSO1VBRU8sTUFBTUosT0FBTyxHQUFHckQsY0FBSyxDQUFDZ0gsSUFBSSxDQUFDUCxnQkFBZ0IsQ0FBQztVQUFDN087Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakVwRDtVQUNBO1VBRUE7VUFDQTtVQUNNLFNBQVVxUCxZQUFZO1lBQzNCLE1BQU07Y0FBRS9QO1lBQUssQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDbEMsT0FDQzhJO2NBQUswQixTQUFTLEVBQUM7WUFBZ0IsR0FDOUIxQiw2QkFBQ2tILDZCQUFpQjtjQUFDQyxLQUFLLEVBQUVuSCw2QkFBQ29ILGdCQUFPO2dCQUFDQyxLQUFLLEVBQUMsT0FBTztnQkFBQ0MsTUFBTSxFQUFDO2NBQU07WUFBRyxFQUFzQixFQUN2RnRIO2NBQUswQixTQUFTLEVBQUM7WUFBTSxFQUFHLENBQ25CO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTtVQUNNLFNBQVU2RixZQUFZLENBQUM3TixJQUFJO1lBQ2hDLE1BQU0sQ0FBQ0UsS0FBSyxFQUFFNE4sUUFBUSxDQUFDLEdBQUd4SCxjQUFLLENBQUN3QyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU1oQixHQUFHLEdBQUd4QixjQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsTUFBTTtjQUNML0ksS0FBSyxFQUFFO2dCQUFFb0g7Y0FBVTtZQUFFLENBQ3JCLEdBQUcsMkJBQWMsR0FBRTtZQUVwQixNQUFNdUQsZ0JBQWdCLEdBQUd2RCxVQUFVLENBQUM3RyxHQUFHLENBQUNpQyxJQUFJLENBQUMsRUFBRStOLE9BQU87WUFDdER6SCxjQUFLLENBQUNlLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU0yRyxPQUFPLEdBQUczQixLQUFLLElBQUl5QixRQUFRLENBQUMsSUFBSSxDQUFDO2NBQ3ZDLElBQUksQ0FBQ2hHLEdBQUcsRUFBRXBCLE9BQU8sRUFBRTtjQUNuQm9CLEdBQUcsQ0FBQ3BCLE9BQU8sQ0FBQ2lCLGdCQUFnQixDQUFDLE9BQU8sRUFBRXFHLE9BQU8sQ0FBQztjQUM5QyxPQUFPLE1BQU1sRyxHQUFHLENBQUNwQixPQUFPLEVBQUVrQixtQkFBbUIsQ0FBQyxPQUFPLEVBQUVvRyxPQUFPLENBQUM7WUFDaEUsQ0FBQyxFQUFFLENBQUNsRyxHQUFHLEVBQUVwQixPQUFPLENBQUMsQ0FBQztZQUVsQixPQUFPLENBQUNvQixHQUFHLEVBQUU1SCxLQUFLLEVBQUVpSSxnQkFBZ0IsQ0FBQztVQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkE7VUFXTyxNQUFNOEYsV0FBVyxHQUFHM0gsY0FBSyxDQUFDc0csYUFBYSxDQUFDLEVBQWtCLENBQUM7VUFBQzFPO1VBQzVELE1BQU1nUSxjQUFjLEdBQUcsTUFBTTVILGNBQUssQ0FBQ3dHLFVBQVUsQ0FBQ21CLFdBQVcsQ0FBQztVQUFDL1A7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWmxFO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVOEssTUFBTSxDQUFDO1lBQUVKLE1BQU07WUFBRUM7VUFBUyxDQUFFO1lBQzNDLE1BQU07Y0FBRXJMO1lBQUssQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDbEMsTUFBTSxDQUFDMlEsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBRyxtQkFBUSxFQUFDLEVBQUUsQ0FBQztZQUN4QyxNQUFNLENBQUN2SixRQUFRLEVBQUV3SixXQUFXLENBQUMsR0FBRyxtQkFBUSxFQUFDN1EsS0FBSyxDQUFDcUgsUUFBUSxDQUFDO1lBQ3hELE1BQU0sQ0FBQ3lKLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUcsbUJBQVEsR0FBVztZQUNyRCxNQUFNQyxvQkFBb0IsR0FBRyxNQUFLO2NBQ2pDaFIsS0FBSyxDQUFDcUgsUUFBUSxHQUFHLENBQUNySCxLQUFLLENBQUNxSCxRQUFRO1lBQ2pDLENBQUM7WUFDRCxvQkFBUyxFQUFDLENBQUNySCxLQUFLLENBQUMsRUFBRSxNQUFNNlEsV0FBVyxDQUFDN1EsS0FBSyxDQUFDcUgsUUFBUSxDQUFDLENBQUM7WUFFckQsTUFBTTRKLGdCQUFnQixHQUFHOUssQ0FBQyxJQUFHO2NBQzVCQSxDQUFDLENBQUMrSyxjQUFjLEVBQUU7Y0FDbEJOLFNBQVMsQ0FBQ3pLLENBQUMsQ0FBQ2dMLE1BQU0sQ0FBQ3ZRLEtBQUssQ0FBQztZQUMxQixDQUFDO1lBRUQsTUFBTXdRLFFBQVEsR0FBRyxNQUFLO2NBQ3JCL0YsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztjQUNsQjJGLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbkIsQ0FBQztZQUVELE9BQ0NqSSw2QkFBQ2tILDZCQUFpQjtjQUFDQyxLQUFLLEVBQUVqUSxLQUFLLENBQUMrRCxJQUFJLENBQUN2QixJQUFJLElBQUksVUFBVTtjQUFFc08sU0FBUyxFQUFFQTtZQUFTLEdBQzVFaEk7Y0FBSzBCLFNBQVMsRUFBQztZQUFjLEdBQzVCMUI7Y0FBSzBCLFNBQVMsRUFBQztZQUF5QixHQUN2QzFCLDZCQUFDOEMsV0FBSTtjQUFDL0MsSUFBSSxFQUFDO1lBQVEsRUFBRyxFQUN0QkMsMkNBQU85SSxLQUFLLENBQUMrRyxjQUFjLENBQVEsQ0FDOUIsRUFDTitCO2NBQUswQixTQUFTLEVBQUM7WUFBeUIsR0FDdkMxQiw2QkFBQzhDLFdBQUk7Y0FBQy9DLElBQUksRUFBQztZQUFRLEVBQUcsRUFDdEJDLDJDQUFPOUksS0FBSyxDQUFDNEcsYUFBYSxDQUFRLENBQzdCLEVBQ05rQyw2QkFBQ3VJLGlCQUFLO2NBQ0w3TyxJQUFJLEVBQUMsTUFBTTtjQUNYOE8sS0FBSyxFQUFDLGdCQUFnQjtjQUN0QjFRLEtBQUssRUFBRStQLE1BQU07Y0FDYjdELFFBQVEsRUFBRW1FLGdCQUFnQjtjQUMxQk0sUUFBUTtjQUNSM08sSUFBSSxFQUFDO1lBQVEsRUFDWixFQUNGa0csMENBQ0NBLDZCQUFDOEMsV0FBSTtjQUNKL0MsSUFBSSxFQUFFeEIsUUFBUSxHQUFHLFNBQVMsR0FBRyxhQUFhO2NBQzFDbUQsU0FBUyxFQUFDLGdCQUFnQjtjQUMxQkMsT0FBTyxFQUFFdUc7WUFBb0IsRUFDNUIsRUFDRmxJLDZCQUFDdUIsaUJBQVU7Y0FBQ0csU0FBUyxFQUFDLFFBQVE7Y0FBQ0QsT0FBTyxFQUFDLFNBQVM7Y0FBQzFCLElBQUksRUFBQyxLQUFLO2NBQUM0QixPQUFPLEVBQUUyRztZQUFRLEVBQUksQ0FDNUUsQ0FDRCxDQUNhO1VBRXRCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU0sU0FBVWxSLElBQUksQ0FBQztZQUFFRjtVQUFLLENBQUU7WUFDN0IsTUFBTSxDQUFDeUIsUUFBUSxFQUFFK1AsV0FBVyxDQUFDLEdBQUcxSSxjQUFLLENBQUN3QyxRQUFRLENBQUN0TCxLQUFLLENBQUN5QixRQUFRLENBQUM7WUFDOUQsTUFBTSxDQUFDaUIsS0FBSyxFQUFFNE4sUUFBUSxDQUFDLEdBQUd4SCxjQUFLLENBQUN3QyxRQUFRLENBQUN0TCxLQUFLLENBQUMwQyxLQUFLLENBQUM7WUFFckQsTUFBTSxDQUFDK08sVUFBVSxFQUFFQyxLQUFLLENBQUMsR0FBRyxvQkFBUSxFQUFDQyxzQkFBTSxDQUFDQyxTQUFTLENBQUM7WUFFdEQsb0JBQVMsRUFBQyxDQUFDNVIsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QndSLFdBQVcsQ0FBQ3hSLEtBQUssQ0FBQ3lCLFFBQVEsQ0FBQztjQUMzQjZPLFFBQVEsQ0FBQ3RRLEtBQUssQ0FBQzBDLEtBQUssQ0FBQztZQUN0QixDQUFDLENBQUM7WUFFRixNQUFNbVAsWUFBWSxHQUFHO2NBQ3BCN1IsS0FBSztjQUNMMFIsS0FBSztjQUNMckssUUFBUSxFQUFFckgsS0FBSyxDQUFDcUgsUUFBUTtjQUN4QmpCLFFBQVEsRUFBRXBHLEtBQUssQ0FBQ29HLFFBQVE7Y0FDeEI5RSxNQUFNLEVBQUV0QixLQUFLLENBQUN3RyxZQUFZLENBQUNsRjthQUMzQjtZQUNELE1BQU13USxPQUFPLEdBQUcsQ0FBQzlSLEtBQUssQ0FBQzhHLFFBQVEsR0FBR1EsVUFBSSxHQUFHeUssc0JBQVk7WUFDckQsTUFBTTdSLElBQUksR0FBR3dDLEtBQUssSUFBSStPLFVBQVUsR0FBR0ssT0FBTyxHQUFHL0Isc0JBQVk7WUFFekQsT0FDQ2pILDZCQUFDMkgsb0JBQVcsQ0FBQ3VCLFFBQVE7Y0FBQ3BSLEtBQUssRUFBRWlSO1lBQVksR0FDeEMvSSw2QkFBQzVJLElBQUksT0FBRyxDQUNjO1VBRXpCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQTtVQVNPLE1BQU0rUixZQUFZLEdBQUduSixjQUFLLENBQUNzRyxhQUFhLENBQUMsSUFBcUIsQ0FBQztVQUFDMU87VUFDaEUsTUFBTXdSLGVBQWUsR0FBRyxNQUFNcEosY0FBSyxDQUFDd0csVUFBVSxDQUFDMkMsWUFBWSxDQUFDO1VBQUN2Ujs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWcEU7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBRU87VUFBVyxNQUFNZ0wsU0FBUyxHQUFHLENBQUM7WUFBRTFMLEtBQUs7WUFBRW1TLFNBQVMsR0FBRztVQUFLLENBQStDLEtBQUk7WUFDakgsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHdkosY0FBSyxDQUFDd0MsUUFBUSxDQUFVLEtBQUssQ0FBQztZQUNoRSxNQUFNLENBQUM3SixRQUFRLEVBQUUrUCxXQUFXLENBQUMsR0FBRzFJLGNBQUssQ0FBQ3dDLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDOUQsTUFBTSxDQUFDZ0gsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3pKLGNBQUssQ0FBQ3dDLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFFNUQsTUFBTSxDQUFDZ0IsSUFBSSxFQUFFa0csT0FBTyxDQUFDLEdBQUcxSixjQUFLLENBQUN3QyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFDLE1BQU07Y0FDTDlFLFlBQVk7Y0FDWkEsWUFBWSxFQUFFO2dCQUFFekY7Y0FBUTtZQUFFLENBQzFCLEdBQUdmLEtBQUs7WUFFVCxvQkFBUyxFQUFDLENBQUNBLEtBQUssQ0FBQyxFQUFFLE1BQU11UyxVQUFVLENBQUN2UyxLQUFLLENBQUMrRSxlQUFlLENBQUMsQ0FBQztZQUUzRCxNQUFNMkksUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRTtZQUFLLENBQUU7WUFDcEMsTUFBTStFLFNBQVMsR0FBRyxNQUFNNUQsS0FBSyxJQUFHO2NBQy9CMkMsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQjNDLEtBQUssQ0FBQ3FDLGNBQWMsRUFBRTtjQUN0QixNQUFNdk4sS0FBSyxHQUFHLE1BQU01QyxRQUFRLENBQUNvTSxJQUFJLEVBQUU7Y0FDbkMsTUFBTXRJLElBQUksR0FBRzJCLFlBQVksQ0FBQzdCLGFBQWEsQ0FBQ2hCLEtBQUssRUFBRTVDLFFBQVEsQ0FBQzZELGFBQWEsQ0FBQztjQUN0RXlOLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7Y0FDeEJaLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQztZQUVELE1BQU1rQixVQUFVLEdBQUcsWUFBVztjQUM3QkYsT0FBTyxDQUFDLEVBQUUsQ0FBQztjQUNYaEIsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQnhSLEtBQUssQ0FBQ29JLFdBQVcsQ0FBQ2tFLElBQUksQ0FBQztZQUN4QixDQUFDO1lBQ0QsTUFBTXFHLFFBQVEsR0FBRyxDQUFDLENBQUNyRyxJQUFJLENBQUNOLE1BQU0sR0FBRzBHLFVBQVUsR0FBR0QsU0FBUztZQUV2RCxJQUFJLENBQUMsRUFBRSxFQUFFcFEsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDa0csUUFBUSxDQUFDK0QsSUFBSSxDQUFDc0csVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUN0RyxJQUFJLENBQUN1RyxJQUFJLEVBQUUsQ0FBQzdHLE1BQU0sRUFBRTBCLFFBQVEsQ0FBQ0EsUUFBUSxHQUFHLElBQUk7WUFFOUcsTUFBTW5DLEdBQUcsR0FBRyxtQkFBbUIrRyxPQUFPLElBQUlILFNBQVMsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFO1lBQ3RFO1lBQ0EsTUFBTTtjQUFFVztZQUFNLENBQUUsR0FBRzdQLGVBQU0sQ0FBQ0osTUFBTSxDQUFDSSxNQUFNO1lBRXZDLE9BQ0M2RjtjQUFLMEIsU0FBUyxFQUFFZTtZQUFHLEdBQ2xCekMsNkJBQUNtSixxQkFBWSxDQUFDRCxRQUFRO2NBQUNwUixLQUFLLEVBQUU7Z0JBQUVaLEtBQUs7Z0JBQUUyUyxRQUFRO2dCQUFFNVIsUUFBUTtnQkFBRXNSLFlBQVk7Z0JBQUVEO2NBQVM7WUFBRSxHQUNsRlUsTUFBTSxJQUFJaEssNkJBQUNpSyxrQkFBVztjQUFDaFAsSUFBSSxFQUFFL0QsS0FBSyxDQUFDK0Q7WUFBSSxFQUFJLEVBQzVDK0UsNkJBQUNrSyxVQUFJO2NBQUNMLFFBQVEsRUFBRUEsUUFBUTtjQUFFbkksU0FBUyxFQUFDO1lBQWlCLEdBQ3BEMUIsNkJBQUNtSyxvQkFBUztjQUNUalQsS0FBSyxFQUFFQSxLQUFLO2NBQ1pzTSxJQUFJLEVBQUVBLElBQUk7Y0FDVmtGLFdBQVcsRUFBRUEsV0FBVztjQUN4Qi9QLFFBQVEsRUFBRUEsUUFBUSxJQUFJMlEsU0FBUyxJQUFJRSxPQUFPLElBQUlILFNBQVM7Y0FDdkRLLE9BQU8sRUFBRUEsT0FBTztjQUNoQkUsVUFBVSxFQUFFQTtZQUFVLEVBQ3JCLEVBQ0Y1SjtjQUFNMEIsU0FBUyxFQUFFO1lBQWlDLEdBQ2hELENBQUMsQ0FBQzhCLElBQUksQ0FBQ04sTUFBTSxHQUNibEQsNkJBQUNvSyxrQkFBTTtjQUNOckssSUFBSSxFQUFDLFlBQVk7Y0FDakI0QixPQUFPLEVBQUVpSSxVQUFVO2NBQ25CaEYsUUFBUSxFQUFFQSxRQUFRLENBQUNBLFFBQVEsSUFBSTFOLEtBQUssQ0FBQytFO1lBQWUsRUFDbkQsR0FFRitELDZCQUFDcUssMEJBQWU7Y0FBQ25ULEtBQUssRUFBRUEsS0FBSztjQUFFME4sUUFBUSxFQUFFMEUsU0FBUyxJQUFJcFMsS0FBSyxDQUFDK0U7WUFBZSxFQUMzRSxDQUNLLENBQ0QsQ0FDZ0IsQ0FDbkI7VUFFUixDQUFDO1VBQUNyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzRUY7VUFDQTtVQUNBO1VBQ0E7VUFFTyxNQUFNMFMsTUFBTSxHQUFHLE1BQUs7WUFDMUIsTUFBTTtjQUFFVCxRQUFRO2NBQUU1UixRQUFRO2NBQUVzUjtZQUFZLENBQUUsR0FBRyw0QkFBZSxHQUFFO1lBRTlELE1BQU1nQixNQUFNLEdBQUcsTUFBTXhFLEtBQUssSUFBRztjQUM1QkEsS0FBSyxDQUFDcUMsY0FBYyxFQUFFO2NBQ3RCLE1BQU1uUSxRQUFRLENBQUNvTSxJQUFJLEVBQUU7Y0FDckJrRixZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFDRCxPQUNDdko7Y0FBSzBCLFNBQVMsRUFBQztZQUE2QixHQUMzQzFCLDZCQUFDdUIsaUJBQVU7Y0FBQ0csU0FBUyxFQUFDLFFBQVE7Y0FBQzNCLElBQUksRUFBQyxRQUFRO2NBQUM0QixPQUFPLEVBQUU0STtZQUFNLEVBQUksRUFDaEV2Syw2QkFBQ3dLLFlBQUs7Y0FBQzdHLE1BQU0sRUFBQztZQUFPLEVBQUcsRUFDeEIzRCw2QkFBQ3VCLGlCQUFVO2NBQUN4QixJQUFJLEVBQUMsTUFBTTtjQUFDMkIsU0FBUyxFQUFDLFFBQVE7Y0FBQ0QsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsT0FBTyxFQUFFa0k7WUFBUSxFQUFJLENBQzdFO1VBRVIsQ0FBQztVQUFDalM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJGO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ087VUFBVyxNQUFNeVMsZUFBZSxHQUFHLENBQUM7WUFBRW5ULEtBQUssRUFBRTtjQUFFd0c7WUFBWSxDQUFFO1lBQUVrSDtVQUFRLENBQUUsS0FBSTtZQUNuRixNQUFNO2NBQUUzTSxRQUFRO2NBQUVxUixTQUFTO2NBQUVDO1lBQVksQ0FBRSxHQUFHLDRCQUFlLEdBQUU7WUFDL0QsTUFBTSxDQUFDNVEsUUFBUSxFQUFFK1AsV0FBVyxDQUFDLEdBQUcsbUJBQVEsRUFBQyxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDK0IsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRyxtQkFBUSxFQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNO2NBQUU5QjtZQUFLLENBQUUsR0FBRyw0QkFBYyxHQUFFO1lBQ2xDLE1BQU0rQixVQUFVLEdBQUcsTUFBTTVFLEtBQUssSUFBRztjQUNoQyxJQUFJO2dCQUNIQSxLQUFLLENBQUNxQyxjQUFjLEVBQUU7Z0JBQ3RCTSxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNa0MsVUFBVSxHQUFHLE1BQU0zUyxRQUFRLENBQUM0UyxjQUFjLEVBQUU7Z0JBQ2xELElBQUlELFVBQVUsQ0FBQ0UsS0FBSyxLQUFLLFNBQVMsRUFBRUosWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDdEQsTUFBTXpTLFFBQVEsQ0FBQzhTLE1BQU0sRUFBRTtnQkFDdkJ4QixZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDO2VBQ3hCLENBQUMsT0FBT2pNLENBQUMsRUFBRTtnQkFDWDlDLE9BQU8sQ0FBQzNCLEtBQUssQ0FBQ3lFLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUcUwsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE1BQU1zQyxPQUFPLEdBQUdqRixLQUFLLElBQUc7Y0FDdkIyQyxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ2xCZ0MsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNwQixDQUFDO1lBRUQsSUFBSXBCLFNBQVMsRUFBRSxPQUFPdEosNkJBQUNzSyxjQUFNLE9BQUc7WUFFaEMsT0FDQ3RLLDREQUNFeUssU0FBUyxJQUNUekssNkJBQUNpTCxZQUFLO2NBQUNDLElBQUksRUFBRSxJQUFJO2NBQUU3VCxJQUFJLEVBQUUsSUFBSTtjQUFFMlQsT0FBTyxFQUFFQTtZQUFPLEdBQzlDaEwseUNBQUs0SSxLQUFLLENBQUN1QyxXQUFXLENBQUNoRSxLQUFLLENBQU0sRUFDbENuSCw2QkFBQ29MLFlBQUs7Y0FBQzdGLEdBQUcsRUFBQztZQUEwQixFQUFHLEVBQ3hDdkYsd0NBQUk0SSxLQUFLLENBQUN1QyxXQUFXLENBQUNFLFdBQVcsQ0FBSyxFQUN0Q3JMO2NBQVEwQixTQUFTLEVBQUM7WUFBTyxHQUN4QjFCLDZCQUFDb0ssa0JBQU07Y0FBQzNJLE9BQU8sRUFBQyxTQUFTO2NBQUNFLE9BQU8sRUFBRXFKO1lBQU8sR0FDeENwQyxLQUFLLENBQUN1QyxXQUFXLENBQUNHLE1BQU0sQ0FDakIsQ0FDRCxDQUVWLEVBQ0R0TCw2QkFBQ29LLGtCQUFNO2NBQUNySyxJQUFJLEVBQUMsS0FBSztjQUFDcEgsUUFBUSxFQUFFQSxRQUFRO2NBQUVnSixPQUFPLEVBQUVnSixVQUFVO2NBQUUvRixRQUFRLEVBQUVBLFFBQVEsSUFBSWpNO1lBQVEsRUFBSSxDQUM1RjtVQUVMLENBQUM7VUFBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERGO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTyxNQUFNMlQsTUFBTSxHQUFHLENBQUM7WUFBRXRRLElBQUk7WUFBRXVRO1VBQVUsQ0FBRSxLQUFJO1lBQzlDLE1BQU0sQ0FBQzFULEtBQUssRUFBRTJULFFBQVEsQ0FBQyxHQUFHekwsY0FBSyxDQUFDd0MsUUFBUSxDQUFDdkgsSUFBSSxFQUFFK08sTUFBTSxDQUFDO1lBQ3RELE1BQU0sQ0FBQ3BSLEtBQUssRUFBRThTLFFBQVEsQ0FBQyxHQUFHMUwsY0FBSyxDQUFDd0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUNtSixPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHNUwsY0FBSyxDQUFDd0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNO2NBQUVvRztZQUFLLENBQUUsR0FBRywyQkFBYyxHQUFFO1lBRWxDLFNBQVNpRCxZQUFZLENBQUM5RixLQUFLO2NBQzFCLE1BQU07Z0JBQUVqTyxLQUFLLEVBQUVnVTtjQUFhLENBQUUsR0FBRy9GLEtBQUssQ0FBQ3NDLE1BQU07Y0FDN0NvRCxRQUFRLENBQUNLLGFBQWEsQ0FBQztZQUN4QjtZQUVBLFNBQVNDLFdBQVc7Y0FDbkJMLFFBQVEsQ0FBQyxLQUFLLENBQUM7Y0FDZkUsVUFBVSxDQUFDLEtBQUssQ0FBQztjQUNqQkgsUUFBUSxDQUFDeFEsSUFBSSxFQUFFK08sTUFBTSxDQUFDO2NBQ3RCd0IsVUFBVSxFQUFFO1lBQ2I7WUFFQSxNQUFNUSxZQUFZLEdBQUcsTUFBTWpHLEtBQUssSUFBRztjQUNsQ0EsS0FBSyxDQUFDcUMsY0FBYyxFQUFFO2NBQ3RCd0QsVUFBVSxDQUFDLElBQUksQ0FBQztjQUNoQixNQUFNbFEsUUFBUSxHQUFHLE1BQU1ULElBQUksQ0FBQ2dSLE9BQU8sQ0FBQztnQkFBRWpDLE1BQU0sRUFBRWxTO2NBQUssQ0FBRSxDQUFDO2NBQ3RELElBQUksQ0FBQzRELFFBQVEsQ0FBQ1EsTUFBTSxFQUFFd1AsUUFBUSxDQUFDaFEsUUFBUSxDQUFDOUMsS0FBSyxDQUFDO2NBRTlDOEwsWUFBSyxDQUFDQyxPQUFPLENBQUNpRSxLQUFLLENBQUNvQixNQUFNLENBQUNyRixPQUFPLENBQUM7Y0FDbkNvSCxXQUFXLEVBQUU7WUFDZCxDQUFDO1lBRUQsT0FDQy9MLDZCQUFDa0ssVUFBSTtjQUFDTCxRQUFRLEVBQUVtQyxZQUFZO2NBQUV0SyxTQUFTLEVBQUM7WUFBYSxHQUNuRDlJLEtBQUssSUFBSW9IO2NBQUswQixTQUFTLEVBQUM7WUFBdUIsR0FBRTlJLEtBQUssQ0FBTyxFQUM5RG9ILDZCQUFDa00sY0FBUTtjQUFDQyxJQUFJLEVBQUUsQ0FBQztjQUFFclUsS0FBSyxFQUFFQSxLQUFLO2NBQUVzVSxXQUFXLEVBQUMsd0JBQXdCO2NBQUNwSSxRQUFRLEVBQUU2SDtZQUFZLEVBQUksRUFDaEc3TCw2Q0FDQ0EsNkJBQUNvSyxrQkFBTTtjQUFDckssSUFBSSxFQUFDLGNBQWM7Y0FBQ3lJLEtBQUssRUFBQyxRQUFRO2NBQUMvRyxPQUFPLEVBQUMsY0FBYztjQUFDRSxPQUFPLEVBQUVvSztZQUFXLEVBQUksRUFDMUYvTCw2QkFBQ29LLGtCQUFNO2NBQUN0USxJQUFJLEVBQUMsUUFBUTtjQUFDaUcsSUFBSSxFQUFDLE1BQU07Y0FBQzRCLE9BQU8sRUFBRXFLLFlBQVk7Y0FBRXhELEtBQUssRUFBQyxRQUFRO2NBQUNtRCxPQUFPLEVBQUVBO1lBQU8sRUFBSSxDQUNwRixDQUNIO1VBRVQsQ0FBQztVQUFDL1Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNGO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTztVQUFXLE1BQU1xUyxXQUFXLEdBQUcsQ0FBQztZQUFFaFA7VUFBSSxDQUFFLEtBQUk7WUFDbEQsTUFBTW9SLFNBQVMsR0FBR3JNLGNBQUssQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNwQyxNQUFNO2NBQ0wySSxLQUFLLEVBQUU7Z0JBQUUwRCxTQUFTLEVBQUUxRDtjQUFLO1lBQUUsQ0FDM0IsR0FBRywyQkFBYyxHQUFFO1lBQ3BCLE1BQU0yRCxTQUFTLEdBQUcsTUFBTUYsU0FBUyxDQUFDak0sT0FBTyxDQUFDcUssU0FBUyxFQUFFO1lBQ3JELE1BQU1lLFVBQVUsR0FBRyxNQUFNYSxTQUFTLENBQUNqTSxPQUFPLENBQUNvTSxLQUFLLEVBQUU7WUFFbEQsT0FDQ3hNO2NBQUswQixTQUFTLEVBQUU7WUFBZ0MsR0FDL0MxQiw2QkFBQ29LLGtCQUFNO2NBQUNySyxJQUFJLEVBQUMsTUFBTTtjQUFDNEIsT0FBTyxFQUFFNEssU0FBUztjQUFFRSxJQUFJLEVBQUM7WUFBUyxFQUFHLEVBRXhEek07Y0FBUXdCLEdBQUcsRUFBRTZLLFNBQVM7Y0FBRXJCLE9BQU8sRUFBRVE7WUFBVSxHQUMxQ3hMLDZCQUFDdUIsaUJBQVU7Y0FBQ3hCLElBQUksRUFBQyxPQUFPO2NBQUMyQixTQUFTLEVBQUMsT0FBTztjQUFDQyxPQUFPLEVBQUU2SjtZQUFVLEVBQUksRUFDbEV4TCw2Q0FDQ0EseUNBQUs0SSxLQUFLLENBQUMwRCxTQUFTLENBQU0sQ0FDbEIsRUFDVHRNLDBDQUNDQSx3Q0FBSTRJLEtBQUssQ0FBQ3hLLE9BQU8sQ0FBSyxDQUNqQixFQUNONEIsNkJBQUN1TCxZQUFNO2NBQUN0USxJQUFJLEVBQUVBLElBQUk7Y0FBRXVRLFVBQVUsRUFBRUE7WUFBVSxFQUFJLENBQ3RDLENBRUw7VUFFUixDQUFDO1VBQUM1VDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkY7VUFDQTtVQUVNLFNBQVV1UyxTQUFTLENBQUM7WUFBRXpCLFdBQVc7WUFBRXhSLEtBQUs7WUFBRXdTLE9BQU87WUFBRUUsVUFBVTtZQUFFalIsUUFBUTtZQUFFNks7VUFBSSxDQUFFO1lBQ3BGLE1BQU1rSixXQUFXLEdBQUcxTSxjQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDdENELGNBQUssQ0FBQ2UsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTXNILE1BQU0sR0FBR3FFLFdBQVcsQ0FBQ3RNLE9BQU87Y0FDbENpSSxNQUFNLENBQUNzRSxLQUFLLENBQUNyRixNQUFNLEdBQUcsTUFBTTtjQUM1QmUsTUFBTSxDQUFDc0UsS0FBSyxDQUFDckYsTUFBTSxHQUFHOUQsSUFBSSxDQUFDTixNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBR21GLE1BQU0sQ0FBQ3VFLFlBQVksR0FBRyxJQUFJO2NBQzVFLElBQUksQ0FBQyxXQUFXLEVBQUVyVCxTQUFTLENBQUMsQ0FBQ2tHLFFBQVEsQ0FBQytELElBQUksQ0FBQ3NHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNuRSxDQUFDLEVBQUUsQ0FBQ3RHLElBQUksQ0FBQyxDQUFDO1lBRVYsb0JBQVMsRUFDUixDQUFDdE0sS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKRCxVQUFVLENBQUNpSixVQUFVLENBQUMsTUFBTXdNLFdBQVcsQ0FBQ3RNLE9BQU8sQ0FBQ3lNLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQztjQUM3RG5FLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQyxFQUNELGdCQUFnQixDQUNoQjtZQUVELE1BQU1vRSxnQkFBZ0IsR0FBRztjQUFFbEksUUFBUSxFQUFFak07WUFBUSxDQUFFO1lBQy9DLE1BQU1vVSxpQkFBaUIsR0FBRzFQLENBQUMsSUFBRztjQUM3QixNQUFNO2dCQUFFdkY7Y0FBSyxDQUFFLEdBQUd1RixDQUFDLENBQUNnTCxNQUFNO2NBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUU5TyxTQUFTLENBQUMsQ0FBQ2tHLFFBQVEsQ0FBQzNILEtBQUssQ0FBQ2dTLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2NBQy9ESixPQUFPLENBQUM1UixLQUFLLENBQUM7WUFDZixDQUFDO1lBQ0QsTUFBTWtWLGFBQWEsR0FBRzNQLENBQUMsSUFBRztjQUN6QixJQUFJQSxDQUFDLENBQUNpRyxHQUFHLEtBQUssT0FBTyxFQUFFO2NBQ3ZCLE1BQU0ySixFQUFFLEdBQUdDLFNBQVMsSUFBSUEsU0FBUyxHQUFHLElBQUk7Y0FDeEMsTUFBTXBWLEtBQUssR0FBR3VGLENBQUMsQ0FBQ2dMLE1BQU0sQ0FBQ3ZRLEtBQUssQ0FBQ2dTLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDN0MsSUFBSSxDQUFDLEVBQUUsRUFBRXZRLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ2tHLFFBQVEsQ0FBQzNILEtBQUssQ0FBQyxFQUFFO2NBQzNDdUYsQ0FBQyxDQUFDOFAsUUFBUSxHQUFHekQsT0FBTyxDQUFDdUQsRUFBRSxDQUFDLEdBQUdyRCxVQUFVLEVBQUU7WUFDeEMsQ0FBQztZQUVELE9BQ0M1SjtjQUFBLEdBQ0s4TSxnQkFBZ0I7Y0FDcEJYLElBQUksRUFBRSxDQUFDO2NBQ1ByVSxLQUFLLEVBQUUwTCxJQUFJO2NBQ1hRLFFBQVEsRUFBRStJLGlCQUFpQjtjQUMzQkssU0FBUyxFQUFFSixhQUFhO2NBQ3hCSyxTQUFTLEVBQUUsSUFBSTtjQUNmM0wsU0FBUyxFQUFDLGlCQUFpQjtjQUMzQkYsR0FBRyxFQUFFa0w7WUFBVyxFQUNmO1VBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBO1VBQ0E7VUFGQTs7VUFRTSxTQUFVbEMsS0FBSyxDQUFDO1lBQUU3RztVQUFNLENBQWM7WUFDM0MsTUFBTTJKLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQzdOLFFBQVEsQ0FBQ2tFLE1BQU0sQ0FBQztZQUN2RCxNQUFNNEosT0FBTyxHQUFHNUosTUFBTSxLQUFLLFNBQVM7WUFDcEMsTUFBTSxDQUFDNkosS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDLEdBQUcsc0JBQVEsRUFBQ0wsU0FBUyxFQUFFQyxPQUFPLENBQUM7WUFDNUUsTUFBTUssV0FBVyxHQUFHRixPQUFPLENBQUNHLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUN2RCxNQUFNQyxlQUFlLEdBQUdOLE9BQU8sQ0FBQ0ksUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQzNELE9BQ0M5TjtjQUFLMEIsU0FBUyxFQUFDO1lBQTBCLEdBQ3hDMUIsMkNBQU8sR0FBRytOLGVBQWUsRUFBRSxNQUFTLEVBQ3BDL04sMkNBQU8sR0FBRzROLFdBQVcsRUFBRSxDQUFRLENBQzFCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBO1VBREE7O1VBRUEsTUFBTTtZQUFFcEwsUUFBUTtZQUFFekI7VUFBUyxDQUFFLEdBQUdmLGNBQUs7VUFFL0IsU0FBVWdPLFFBQVEsQ0FBQ1YsU0FBa0IsRUFBRUMsT0FBZ0I7WUFDNUQsTUFBTSxDQUFDVSxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHMUwsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVuQ3pCLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSW9OLFVBQTBCO2NBRTlCLElBQUliLFNBQVMsRUFBRTtnQkFDZGEsVUFBVSxHQUFHQyxXQUFXLENBQUMsTUFBSztrQkFDN0JGLE9BQU8sQ0FBQ0csUUFBUSxJQUFJQSxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O2NBR1QsT0FBTyxNQUFLO2dCQUNYQyxhQUFhLENBQUNILFVBQVUsQ0FBQztjQUMxQixDQUFDO1lBQ0YsQ0FBQyxFQUFFLENBQUNiLFNBQVMsQ0FBQyxDQUFDO1lBRWZ2TSxTQUFTLENBQUMsTUFBSztjQUNkLElBQUl3TSxPQUFPLEVBQUU7Z0JBQ1pXLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1lBRVosQ0FBQyxFQUFFLENBQUNYLE9BQU8sQ0FBQyxDQUFDO1lBRWIsTUFBTUksWUFBWSxHQUFHTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDakMsTUFBTVAsT0FBTyxHQUFHYSxJQUFJLENBQUNDLEtBQUssQ0FBRVAsSUFBSSxHQUFHLEdBQUcsR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU1SLE9BQU8sR0FBR2MsSUFBSSxDQUFDQyxLQUFLLENBQUVQLElBQUksR0FBRyxJQUFJLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNVCxLQUFLLEdBQUdlLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV6QyxPQUFPLENBQUNULEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQztVQUMvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVMUUsWUFBWTtZQUMzQixTQUFTd0YsVUFBVTtjQUNsQkMsa0JBQVMsQ0FBQ0MsV0FBVyxHQUFHLElBQUk7WUFDN0I7WUFFQSxJQUFJLENBQUN0VixtQkFBVSxDQUFDTyxLQUFLLEVBQUUsT0FBT29HLDZCQUFDNE8sMEJBQWEsT0FBRztZQUMvQyxPQUNDNU87Y0FBSzBCLFNBQVMsRUFBQztZQUFrQixHQUNoQzFCO2NBQUt1RixHQUFHLEVBQUMsdUJBQXVCO2NBQUNELEdBQUcsRUFBQztZQUFnQixFQUFHLEVBQ3hEdEY7Y0FBTTBCLFNBQVMsRUFBQztZQUFxQixHQUNwQzFCLDZCQUFDOEMsV0FBSTtjQUFDL0MsSUFBSSxFQUFFZ0QsYUFBSyxDQUFDLGVBQWUsQ0FBQztjQUFFckIsU0FBUyxFQUFDO1lBQW1CLEVBQUcsRUFDcEUxQiwwREFBdUIsRUFDdkJBLHdDQUNDQSxnR0FBaUUsT0FBQ0Esd0NBQU0scURBRXJFLEVBQ0pBLDZCQUFDb0ssa0JBQU07Y0FBQ3JLLElBQUksRUFBQyxNQUFNO2NBQUM0QixPQUFPLEVBQUU4TSxVQUFVO2NBQUVqRyxLQUFLLEVBQUM7WUFBZ0IsRUFBRyxDQUM1RCxDQUNGO1VBRVIiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiZ2xvYmFsVGhpcyIsInN0b3JlIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJPYmplY3QiLCJ2YWx1ZSIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJyZWNvcmRlciIsImJlYXJlciIsInVwbG9hZGVyIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImlzRmV0Y2hpbmciLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaGluZyIsImVycm9yIiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiTGlzdGVuQXBwQ2hhbmdlcyIsInNldCIsInJhdGUiLCJBcHBXcmFwcGVyIiwiYXVkaW9TcGVlZCIsInVuZGVmaW5lZCIsInRyaWdnZXIiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJyZWFkeSIsIlVwbG9hZGVyIiwidHlwZSIsInBhcmFtcyIsImNvbnRhaW5lciIsInByb2plY3QiLCJ1cmwiLCJjb25maWciLCJDSEFUX0FQSV9TRVJWRVIiLCJvbiIsImxvYWRlbmQiLCJjb25zb2xlIiwid2FybiIsImNyZWF0ZSIsInNlbGVjdG9yIiwiY29yZG92YSIsInB1Ymxpc2hSZWNvcmRpbmciLCJhdWRpbyIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsImNoYXQiLCJpZCIsInNlc3Npb25XcmFwcGVyIiwidXNlcklkIiwiRGF0ZSIsIm5vdyIsInNlbGVjdGVkS2IiLCJ4aHIiLCJYSFJMb2FkZXIiLCJyZXNwb25zZSIsInVwbG9hZCIsImpzb24iLCJzYXZlUmVjb3JkaW5nIiwidHJhbnNjcmlwdGlvbiIsIml0ZW0iLCJzYXZlQXVkaW9Mb2NhbGx5Iiwid2FpdGluZ1Jlc3BvbnNlIiwic3RhdHVzIiwibG9nIiwiZGF0YSIsInNhdmVNZXNzYWdlIiwiY29udGVudCIsInNhdmVJdGVtIiwicGF0aCIsImZpbGUiLCJvdXRwdXQiLCJ1c2FnZSIsInNvdXJjZSIsImNyZWF0ZWRBdCIsInVuaXgiLCJwcm9wZXJ0aWVzIiwic2V0QXVkaW9NZXNzYWdlIiwiY29udmVyc2F0aW9uSWQiLCJyb2xlIiwidGltZXN0YW1wIiwiY3VycmVudE1lc3NhZ2UiLCJlIiwibWVzc2FnZXMiLCJjYXRlZ29yeSIsImNoYXRzIiwiaXRlbXMiLCJhdWRpb01hbmFnZXIiLCJrbm93bGVkZ2VCb3hlcyIsImticyIsImtiIiwic2VsZWN0ZWRNb2RlbCIsIm1vZGVsIiwibm90Rm91bmQiLCJzZWxlY3RlZEtiUGF0aCIsImZpbmQiLCJpIiwibWVzc2FnZSIsIk1hcCIsImV4dGVuc2lvbnMiLCJhdXRvcGxheSIsIkNoYXQiLCJpc1JlYWR5IiwibG9hZEFsbCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJsYW5ndWFnZSIsImRlZmF1bHQiLCJleHRzIiwibWV0YWRhdGEiLCJmb3JFYWNoIiwiZXh0ZW5zaW9uIiwiaW5kZXgiLCJzZW5kTWVzc2FnZSIsInBlcmZvcm1hbmNlIiwibWFyayIsImluY2x1ZGVzIiwib25MaXN0ZW4iLCJvbkVuZCIsIm9mZiIsIkJhY2tBcnJvdyIsInNlcGFyYXRvciIsImljb24iLCJSZWFjdCIsInVzZVJlZiIsInNldFRpbWVvdXQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJpc0luQ29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbmRSZWN0IiwidGhyZXNob2xkIiwiYm90dG9tIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSWNvbkJ1dHRvbiIsInJlZiIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiQ29udGVudCIsIndlYkNvbXBvbmVudE5hbWUiLCJFeHRlbnNpb25SZW5kZXJlciIsImNvbXBvbmVudCIsInJlZmVyZW5jZSIsIk1lc3NhZ2VzIiwiQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImNoYXRJbnRybyIsInJlYWRlciIsInNldFJlYWRlciIsInVzZVN0YXRlIiwiY2xzIiwiSGVhZGVyIiwiYXZvaWRDaGF0IiwiQ2hhdElucHV0IiwiU3lzdGVtQW5zd2VyaW5nIiwiSWNvbiIsIklDT05TIiwidG90YWxNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibGVuZ3RoIiwibWFwIiwibGFzdCIsIk1lc3NhZ2UiLCJrZXkiLCJNZXNzYWdlQWN0aW9ucyIsInRleHQiLCJtZXNzYWdlVG9rZW5zIiwicGxheSIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJvblBhdXNlIiwic3RvcCIsImNvcHlNZXNzYWdlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiZGlzYWJsZWQiLCJhcHBseSIsIlByb2ZpbGVJY29uIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsImFsdCIsInNyYyIsIm9uRXJyb3IiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJvbkNsaWNrV29yZCIsImV2ZW50IiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiUGxheWFibGUiLCJBdWRpb1BsYXllciIsImNvbnZlcnQiLCJDaGF0TWVzc2FnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2hhdE1lc3NhZ2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk1lc3NhZ2VDb21wb25lbnQiLCJzZXRDb250ZW50IiwiZmluaXNoZWQiLCJzZXRGaW5pc2hlZCIsInRvdGFsVG9rZW5zIiwiYmxvY2tzIiwicGxheWFibGVDb250ZW50IiwibWVtbyIsIkNoYXRTa2VsZXRvbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJQcmVsb2FkIiwid2lkdGgiLCJoZWlnaHQiLCJ1c2VFeHRlbnNpb24iLCJzZXRSZWFkeSIsImNvbnRyb2wiLCJvblJlYWR5IiwiQ2hhdENvbnRleHQiLCJ1c2VDaGF0Q29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNldEF1dG9wbGF5IiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiaGFuZGxlQXV0b3BsYXlUb2dnbGUiLCJoYW5kbGVDaGF0U2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJvblJlYWRlciIsIklucHV0IiwibGFiZWwiLCJyZXF1aXJlZCIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlByb3ZpZGVyIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiaXNXYWl0aW5nIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJzZXRUZXh0Iiwic2VuZEF1ZGlvIiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJzeXN0ZW0iLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInBsYXlBY3Rpb24iLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uQ2xvc2UiLCJNb2RhbCIsIm9wZW4iLCJwZXJtaXNzaW9ucyIsIkltYWdlIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFyZWFWYWx1ZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwicHVibGlzaCIsIlRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJtb2RlIiwidGV4dEFyZWFSZWYiLCJzdHlsZSIsInNjcm9sbEhlaWdodCIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInVzZVRpbWVyIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvaW50ZXJmYWNlcy9tZXNzYWdlcy50cyIsInRzL3N0b3JlL2F1ZGlvLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy92aWV3cy9jaGF0L0JhY2tBcnJvdy50c3giLCJ0cy92aWV3cy9jaGF0L2NvbnRlbnQudHN4IiwidHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4IiwidHMvdmlld3MvY2hhdC9pbmRleC50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL2Fuc3dlcmluZy50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb250ZXh0LnRzIiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwidHMvdmlld3MvY2hhdC91c2UtZXh0ZW5zaW9uLnRzeCIsInRzL3ZpZXdzL2NvbnRleHQudHN4IiwidHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwidHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsInRzL3ZpZXdzL2lucHV0L3JlY29yZGluZy50c3giLCJ0cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCJ0cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCJ0cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwidHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=