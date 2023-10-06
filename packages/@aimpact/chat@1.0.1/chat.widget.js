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
        hash: 4007391946,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUI7Y0FBQ0QsR0FBRyxFQUFDO1lBQWdCLEVBQUcsRUFDeER0RjtjQUFNMEIsU0FBUyxFQUFDO1lBQXFCLEdBQ3BDMUIsNkJBQUM4QyxXQUFJO2NBQUMvQyxJQUFJLEVBQUVnRCxhQUFLLENBQUMsZUFBZSxDQUFDO2NBQUVyQixTQUFTLEVBQUM7WUFBbUIsRUFBRyxFQUNwRTFCLDBEQUF1QixFQUN2QkEsd0NBQ0NBLGdHQUFpRSxPQUFDQSx3Q0FBTSxxREFFckUsRUFDSkEsNkJBQUNvSyxrQkFBTTtjQUFDckssSUFBSSxFQUFDLE1BQU07Y0FBQzRCLE9BQU8sRUFBRThNLFVBQVU7Y0FBRWpHLEtBQUssRUFBQztZQUFnQixFQUFHLENBQzVELENBQ0Y7VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFuIiwiZXhwb3J0cyIsIk9iamVjdCIsInZhbHVlIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInJlY29yZGVyIiwiYmVhcmVyIiwidXBsb2FkZXIiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiaXNGZXRjaGluZyIsInRyaWdnZXJFdmVudCIsImZldGNoaW5nIiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJMaXN0ZW5BcHBDaGFuZ2VzIiwic2V0IiwicmF0ZSIsIkFwcFdyYXBwZXIiLCJhdWRpb1NwZWVkIiwidW5kZWZpbmVkIiwidHJpZ2dlciIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInJlYWR5IiwiVXBsb2FkZXIiLCJ0eXBlIiwicGFyYW1zIiwiY29udGFpbmVyIiwicHJvamVjdCIsInVybCIsImNvbmZpZyIsIkNIQVRfQVBJX1NFUlZFUiIsIm9uIiwibG9hZGVuZCIsImNvbnNvbGUiLCJ3YXJuIiwiY3JlYXRlIiwic2VsZWN0b3IiLCJjb3Jkb3ZhIiwicHVibGlzaFJlY29yZGluZyIsImF1ZGlvIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiY2hhdCIsImlkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VySWQiLCJEYXRlIiwibm93Iiwic2VsZWN0ZWRLYiIsInhociIsIlhIUkxvYWRlciIsInJlc3BvbnNlIiwidXBsb2FkIiwianNvbiIsInNhdmVSZWNvcmRpbmciLCJ0cmFuc2NyaXB0aW9uIiwiaXRlbSIsInNhdmVBdWRpb0xvY2FsbHkiLCJ3YWl0aW5nUmVzcG9uc2UiLCJzdGF0dXMiLCJsb2ciLCJkYXRhIiwic2F2ZU1lc3NhZ2UiLCJjb250ZW50Iiwic2F2ZUl0ZW0iLCJwYXRoIiwiZmlsZSIsIm91dHB1dCIsInVzYWdlIiwic291cmNlIiwiY3JlYXRlZEF0IiwidW5peCIsInByb3BlcnRpZXMiLCJzZXRBdWRpb01lc3NhZ2UiLCJjaGF0SWQiLCJyb2xlIiwidGltZXN0YW1wIiwiY3VycmVudE1lc3NhZ2UiLCJlIiwibWVzc2FnZXMiLCJjYXRlZ29yeSIsImNoYXRzIiwiaXRlbXMiLCJhdWRpb01hbmFnZXIiLCJrbm93bGVkZ2VCb3hlcyIsImticyIsImtiIiwic2VsZWN0ZWRNb2RlbCIsIm1vZGVsIiwibm90Rm91bmQiLCJzZWxlY3RlZEtiUGF0aCIsImZpbmQiLCJpIiwibWVzc2FnZSIsIk1hcCIsImV4dGVuc2lvbnMiLCJhdXRvcGxheSIsIkNoYXQiLCJpc1JlYWR5IiwibG9hZEFsbCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJsYW5ndWFnZSIsImRlZmF1bHQiLCJleHRzIiwibWV0YWRhdGEiLCJmb3JFYWNoIiwiZXh0ZW5zaW9uIiwiaW5kZXgiLCJzZW5kTWVzc2FnZSIsInBlcmZvcm1hbmNlIiwibWFyayIsImluY2x1ZGVzIiwib25MaXN0ZW4iLCJvbkVuZCIsIm9mZiIsIkJhY2tBcnJvdyIsInNlcGFyYXRvciIsImljb24iLCJSZWFjdCIsInVzZVJlZiIsInNldFRpbWVvdXQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJpc0luQ29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbmRSZWN0IiwidGhyZXNob2xkIiwiYm90dG9tIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSWNvbkJ1dHRvbiIsInJlZiIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiQ29udGVudCIsIndlYkNvbXBvbmVudE5hbWUiLCJFeHRlbnNpb25SZW5kZXJlciIsImNvbXBvbmVudCIsInJlZmVyZW5jZSIsIk1lc3NhZ2VzIiwiQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImNoYXRJbnRybyIsInJlYWRlciIsInNldFJlYWRlciIsInVzZVN0YXRlIiwiY2xzIiwiSGVhZGVyIiwiYXZvaWRDaGF0IiwiQ2hhdElucHV0IiwiU3lzdGVtQW5zd2VyaW5nIiwiSWNvbiIsIklDT05TIiwidG90YWxNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibGVuZ3RoIiwibWFwIiwibGFzdCIsIk1lc3NhZ2UiLCJrZXkiLCJNZXNzYWdlQWN0aW9ucyIsInRleHQiLCJtZXNzYWdlVG9rZW5zIiwicGxheSIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJvblBhdXNlIiwic3RvcCIsImNvcHlNZXNzYWdlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiZGlzYWJsZWQiLCJhcHBseSIsIlByb2ZpbGVJY29uIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsImFsdCIsInNyYyIsIm9uRXJyb3IiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJvbkNsaWNrV29yZCIsImV2ZW50IiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiUGxheWFibGUiLCJBdWRpb1BsYXllciIsImNvbnZlcnQiLCJDaGF0TWVzc2FnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2hhdE1lc3NhZ2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk1lc3NhZ2VDb21wb25lbnQiLCJzZXRDb250ZW50IiwiZmluaXNoZWQiLCJzZXRGaW5pc2hlZCIsInRvdGFsVG9rZW5zIiwiYmxvY2tzIiwicGxheWFibGVDb250ZW50IiwibWVtbyIsIkNoYXRTa2VsZXRvbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJQcmVsb2FkIiwid2lkdGgiLCJoZWlnaHQiLCJ1c2VFeHRlbnNpb24iLCJzZXRSZWFkeSIsImNvbnRyb2wiLCJvblJlYWR5IiwiQ2hhdENvbnRleHQiLCJ1c2VDaGF0Q29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNldEF1dG9wbGF5IiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiaGFuZGxlQXV0b3BsYXlUb2dnbGUiLCJoYW5kbGVDaGF0U2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJvblJlYWRlciIsIklucHV0IiwibGFiZWwiLCJyZXF1aXJlZCIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlByb3ZpZGVyIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiaXNXYWl0aW5nIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJzZXRUZXh0Iiwic2VuZEF1ZGlvIiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJzeXN0ZW0iLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInBsYXlBY3Rpb24iLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uQ2xvc2UiLCJNb2RhbCIsIm9wZW4iLCJwZXJtaXNzaW9ucyIsIkltYWdlIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFyZWFWYWx1ZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwicHVibGlzaCIsIlRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJtb2RlIiwidGV4dEFyZWFSZWYiLCJzdHlsZSIsInNjcm9sbEhlaWdodCIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInVzZVRpbWVyIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvaW50ZXJmYWNlcy9tZXNzYWdlcy50cyIsInRzL3N0b3JlL2F1ZGlvLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy92aWV3cy9jaGF0L0JhY2tBcnJvdy50c3giLCJ0cy92aWV3cy9jaGF0L2NvbnRlbnQudHN4IiwidHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4IiwidHMvdmlld3MvY2hhdC9pbmRleC50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL2Fuc3dlcmluZy50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb250ZXh0LnRzIiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwidHMvdmlld3MvY2hhdC91c2UtZXh0ZW5zaW9uLnRzeCIsInRzL3ZpZXdzL2NvbnRleHQudHN4IiwidHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwidHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsInRzL3ZpZXdzL2lucHV0L3JlY29yZGluZy50c3giLCJ0cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCJ0cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCJ0cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwidHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=