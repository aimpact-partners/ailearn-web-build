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
        hash: 1179174096,
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
                    chatId: chat.id,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBQy9DLElBQUksRUFBRWdELGFBQUssQ0FBQyxlQUFlLENBQUM7Y0FBRXJCLFNBQVMsRUFBQztZQUFtQixFQUFHLEVBQ3BFMUIsMERBQXVCLEVBQ3ZCQSx3Q0FDQ0EsZ0dBQWlFLE9BQUNBLHdDQUFNLHFEQUVyRSxFQUNKQSw2QkFBQ29LLGtCQUFNO2NBQUNySyxJQUFJLEVBQUMsTUFBTTtjQUFDNEIsT0FBTyxFQUFFOE0sVUFBVTtjQUFFakcsS0FBSyxFQUFDO1lBQWdCLEVBQUcsQ0FDNUQsQ0FDRjtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImdsb2JhbFRoaXMiLCJzdG9yZSIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiT2JqZWN0IiwidmFsdWUiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicmVjb3JkZXIiLCJiZWFyZXIiLCJ1cGxvYWRlciIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJwbGF5ZXIiLCJpc0ZldGNoaW5nIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2hpbmciLCJlcnJvciIsImNvbnN0cnVjdG9yIiwicGFyZW50IiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwiaW5pdCIsIkxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJyYXRlIiwiQXBwV3JhcHBlciIsImF1ZGlvU3BlZWQiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwicmVhZHkiLCJVcGxvYWRlciIsInR5cGUiLCJwYXJhbXMiLCJjb250YWluZXIiLCJwcm9qZWN0IiwidXJsIiwiY29uZmlnIiwiQ0hBVF9BUElfU0VSVkVSIiwib24iLCJsb2FkZW5kIiwiY29uc29sZSIsIndhcm4iLCJjcmVhdGUiLCJzZWxlY3RvciIsImNvcmRvdmEiLCJwdWJsaXNoUmVjb3JkaW5nIiwiYXVkaW8iLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJjaGF0IiwiaWQiLCJzZXNzaW9uV3JhcHBlciIsInVzZXJJZCIsIkRhdGUiLCJub3ciLCJzZWxlY3RlZEtiIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJqc29uIiwic2F2ZVJlY29yZGluZyIsInRyYW5zY3JpcHRpb24iLCJpdGVtIiwic2F2ZUF1ZGlvTG9jYWxseSIsIndhaXRpbmdSZXNwb25zZSIsInN0YXR1cyIsImxvZyIsImRhdGEiLCJzYXZlTWVzc2FnZSIsImNvbnRlbnQiLCJzYXZlSXRlbSIsInBhdGgiLCJmaWxlIiwib3V0cHV0IiwidXNhZ2UiLCJzb3VyY2UiLCJjcmVhdGVkQXQiLCJ1bml4IiwicHJvcGVydGllcyIsInNldEF1ZGlvTWVzc2FnZSIsImNoYXRJZCIsInJvbGUiLCJ0aW1lc3RhbXAiLCJjdXJyZW50TWVzc2FnZSIsImUiLCJtZXNzYWdlcyIsImNhdGVnb3J5IiwiY2hhdHMiLCJpdGVtcyIsImF1ZGlvTWFuYWdlciIsImtub3dsZWRnZUJveGVzIiwia2JzIiwia2IiLCJzZWxlY3RlZE1vZGVsIiwibW9kZWwiLCJub3RGb3VuZCIsInNlbGVjdGVkS2JQYXRoIiwiZmluZCIsImkiLCJtZXNzYWdlIiwiTWFwIiwiZXh0ZW5zaW9ucyIsImF1dG9wbGF5IiwiQ2hhdCIsImlzUmVhZHkiLCJsb2FkQWxsIiwiY3VycmVudENoYXQiLCJmb3VuZCIsImtub3dsZWRlQm94U2VsZWN0ZWQiLCJrbm93bGVkZ2VCb3hJZCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsImV4dHMiLCJtZXRhZGF0YSIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNlbmRNZXNzYWdlIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiaW5jbHVkZXMiLCJvbkxpc3RlbiIsIm9uRW5kIiwib2ZmIiwiQmFja0Fycm93Iiwic2VwYXJhdG9yIiwiaWNvbiIsIlJlYWN0IiwidXNlUmVmIiwic2V0VGltZW91dCIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsImlzSW5Db250YWluZXIiLCJwYXJlbnROb2RlIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVuZFJlY3QiLCJ0aHJlc2hvbGQiLCJib3R0b20iLCJ1c2VFZmZlY3QiLCJoYW5kbGVTY3JvbGwiLCJ2aXNpYmxlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJJY29uQnV0dG9uIiwicmVmIiwidmFyaWFudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJDb250ZW50Iiwid2ViQ29tcG9uZW50TmFtZSIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiTWVzc2FnZXMiLCJDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hhdEludHJvIiwicmVhZGVyIiwic2V0UmVhZGVyIiwidXNlU3RhdGUiLCJjbHMiLCJIZWFkZXIiLCJhdm9pZENoYXQiLCJDaGF0SW5wdXQiLCJTeXN0ZW1BbnN3ZXJpbmciLCJJY29uIiwiSUNPTlMiLCJ0b3RhbE1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJsZW5ndGgiLCJtYXAiLCJsYXN0IiwiTWVzc2FnZSIsImtleSIsIk1lc3NhZ2VBY3Rpb25zIiwidGV4dCIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwicG9zaXRpb25Ub0N1dCIsIm9uUGF1c2UiLCJzdG9wIiwiY29weU1lc3NhZ2UiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkaXNhYmxlZCIsImFwcGx5IiwiUHJvZmlsZUljb24iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJ1c2VyIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiYWx0Iiwic3JjIiwib25FcnJvciIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsIm9uQ2xpY2tXb3JkIiwiZXZlbnQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsIkF1ZGlvUGxheWVyIiwiY29udmVydCIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTWVzc2FnZUNvbXBvbmVudCIsInNldENvbnRlbnQiLCJmaW5pc2hlZCIsInNldEZpbmlzaGVkIiwidG90YWxUb2tlbnMiLCJibG9ja3MiLCJwbGF5YWJsZUNvbnRlbnQiLCJtZW1vIiwiQ2hhdFNrZWxldG9uIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIlByZWxvYWQiLCJ3aWR0aCIsImhlaWdodCIsInVzZUV4dGVuc2lvbiIsInNldFJlYWR5IiwiY29udHJvbCIsIm9uUmVhZHkiLCJDaGF0Q29udGV4dCIsInVzZUNoYXRDb250ZXh0Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2V0QXV0b3BsYXkiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJoYW5kbGVBdXRvcGxheVRvZ2dsZSIsImhhbmRsZUNoYXRTZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm9uUmVhZGVyIiwiSW5wdXQiLCJsYWJlbCIsInJlcXVpcmVkIiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJjb250ZXh0VmFsdWUiLCJDb250cm9sIiwiQ2hhdE5vdEZvdW5kIiwiUHJvdmlkZXIiLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dENvbnRleHQiLCJpc1dhaXRpbmciLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsInNldFRleHQiLCJzZW5kQXVkaW8iLCJoYW5kbGVTZW5kIiwib25TdWJtaXQiLCJyZXBsYWNlQWxsIiwidHJpbSIsInN5c3RlbSIsIlN5c3RlbU1vZGFsIiwiRm9ybSIsIlRleHRJbnB1dCIsIkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIlBsYXllciIsImNhbmNlbCIsIlRpbWVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicGxheUFjdGlvbiIsInBlcm1pc3Npb24iLCJoYXNQZXJtaXNzaW9ucyIsInN0YXRlIiwicmVjb3JkIiwib25DbG9zZSIsIk1vZGFsIiwib3BlbiIsInBlcm1pc3Npb25zIiwiSW1hZ2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsIlVJRm9ybSIsImNsb3NlTW9kYWwiLCJzZXRWYWx1ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0QXJlYVZhbHVlIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJwdWJsaXNoIiwiVGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJkaWFsb2dSZWYiLCJhc3Npc3RhbnQiLCJvcGVuTW9kYWwiLCJjbG9zZSIsIm1vZGUiLCJ0ZXh0QXJlYVJlZiIsInN0eWxlIiwic2Nyb2xsSGVpZ2h0IiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidXNlVGltZXIiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciIsIm9wZW5EaWFsb2ciLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9pbnRlcmZhY2VzL21lc3NhZ2VzLnRzIiwidHMvc3RvcmUvYXVkaW8udHMiLCJ0cy9zdG9yZS9pbmRleC50cyIsInRzL3ZpZXdzL2NoYXQvQmFja0Fycm93LnRzeCIsInRzL3ZpZXdzL2NoYXQvY29udGVudC50c3giLCJ0cy92aWV3cy9jaGF0L2V4dGVuc2lvbi1yZW5kZXJlci50c3giLCJ0cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvYW5zd2VyaW5nLnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbnRleHQudHMiLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCJ0cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwidHMvdmlld3MvY29udGV4dC50c3giLCJ0cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCJ0cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4IiwidHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nLnRzeCIsInRzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsInRzL3ZpZXdzL2lucHV0L3N5c3RlbS9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC90ZXh0LWlucHV0LnRzeCIsInRzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCJ0cy92aWV3cy9ub3QtZm91bmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==