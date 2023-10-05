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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2RheWpzIiwiX21vZGVsIiwiX2NvbmZpZyIsIl92b2ljZSIsIl9zZXNzaW9uIiwiX3VwbG9hZGVyIiwiX3dyYXBwZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJiZWFyZXIiLCJ1cGxvYWRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiZmV0Y2hpbmciLCJpc0ZldGNoaW5nIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJMaXN0ZW5BcHBDaGFuZ2VzIiwic2V0IiwicmF0ZSIsIkFwcFdyYXBwZXIiLCJhdWRpb1NwZWVkIiwidW5kZWZpbmVkIiwidHJpZ2dlciIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInJlYWR5IiwiVXBsb2FkZXIiLCJ0eXBlIiwicGFyYW1zIiwiY29udGFpbmVyIiwicHJvamVjdCIsInVybCIsImRlZmF1bHQiLCJDSEFUX0FQSV9TRVJWRVIiLCJvbiIsImxvYWRlbmQiLCJjb25zb2xlIiwid2FybiIsImNyZWF0ZSIsInNlbGVjdG9yIiwiY29yZG92YSIsInB1Ymxpc2hSZWNvcmRpbmciLCJhdWRpbyIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsImNoYXQiLCJpZCIsInNlc3Npb25XcmFwcGVyIiwidXNlcklkIiwiRGF0ZSIsIm5vdyIsInNlbGVjdGVkS2IiLCJ4aHIiLCJYSFJMb2FkZXIiLCJyZXNwb25zZSIsInVwbG9hZCIsImpzb24iLCJzYXZlUmVjb3JkaW5nIiwidHJhbnNjcmlwdGlvbiIsIml0ZW0iLCJzYXZlQXVkaW9Mb2NhbGx5Iiwid2FpdGluZ1Jlc3BvbnNlIiwic3RhdHVzIiwibG9nIiwiZGF0YSIsInNhdmVNZXNzYWdlIiwiY29udGVudCIsInNhdmVJdGVtIiwicGF0aCIsImZpbGUiLCJvdXRwdXQiLCJ1c2FnZSIsInNvdXJjZSIsImNyZWF0ZWRBdCIsInVuaXgiLCJwcm9wZXJ0aWVzIiwic2V0QXVkaW9NZXNzYWdlIiwiY2hhdElkIiwicm9sZSIsInRpbWVzdGFtcCIsImN1cnJlbnRNZXNzYWdlIiwiZSIsIl9jb3JlIiwiX2F1ZGlvIiwiX2V4dGVuc2lvbnMiLCJtZXNzYWdlcyIsIkVYVEVOU0lPTlMiLCJjYXRlZ29yeSIsImNoYXRzIiwiaXRlbXMiLCJhdWRpb01hbmFnZXIiLCJrYnMiLCJrbm93bGVkZ2VCb3hlcyIsImtiIiwic2VsZWN0ZWRNb2RlbCIsIm1vZGVsIiwibm90Rm91bmQiLCJzZWxlY3RlZEtiUGF0aCIsImZpbmQiLCJpIiwibWVzc2FnZSIsImV4dGVuc2lvbnMiLCJNYXAiLCJhdXRvcGxheSIsIkNoYXQiLCJjdXJyZW50Q2hhdCIsImZvdW5kIiwiaXNSZWFkeSIsImtub3dsZWRlQm94U2VsZWN0ZWQiLCJrbm93bGVkZ2VCb3hJZCIsImxhbmd1YWdlIiwibG9hZEFsbCIsImV4dHMiLCJtZXRhZGF0YSIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNlbmRNZXNzYWdlIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiaW5jbHVkZXMiLCJvbkxpc3RlbiIsIm9uRW5kIiwib2ZmIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiQmFja0Fycm93Iiwic2VwYXJhdG9yIiwiaWNvbiIsInVzZVJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJpc0luQ29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbmRSZWN0IiwidGhyZXNob2xkIiwiYm90dG9tIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiSWNvbkJ1dHRvbiIsInJlZiIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiX3VzZUV4dGVuc2lvbiIsIl9tZXNzYWdlcyIsIl9jb250ZXh0IiwiX2V4dGVuc2lvblJlbmRlcmVyIiwiQ29udGVudCIsInVzZUNoYXRDb250ZXh0Iiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiTWVzc2FnZXMiLCJDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiX2hlYWRlciIsIl9pbnB1dCIsIl9CYWNrQXJyb3ciLCJfY29udGVudCIsImNoYXRJbnRybyIsInJlYWRlciIsInNldFJlYWRlciIsInVzZVN0YXRlIiwiY2xzIiwiSGVhZGVyIiwiYXZvaWRDaGF0IiwiQ2hhdElucHV0IiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsIkljb24iLCJJQ09OUyIsIl9hbnN3ZXJpbmciLCJfbWVzc2FnZSIsInRvdGFsTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImxlbmd0aCIsIm1hcCIsImxhc3QiLCJNZXNzYWdlIiwia2V5IiwiX3RvYXN0IiwiTWVzc2FnZUFjdGlvbnMiLCJ0ZXh0IiwibWVzc2FnZVRva2VucyIsInBsYXkiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJsaXN0ZW4iLCJwb3NpdGlvblRvQ3V0Iiwib25QYXVzZSIsInN0b3AiLCJjb3B5TWVzc2FnZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiYXBwbHkiLCJQcm9maWxlSWNvbiIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJhbHQiLCJzcmMiLCJvbkVycm9yIiwiX3BsYXlhYmxlIiwiX2F1ZGlvUGxheWVyIiwiTWVzc2FnZVRleHQiLCJwbGF5YWJsZSIsInJlbW92ZUhpZ2hsaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwib25DbGlja1dvcmQiLCJldmVudCIsImNhbkJlUGxheWVkIiwiYXV0b3BsYXlWYWx1ZSIsIlBsYXlhYmxlIiwiQXVkaW9QbGF5ZXIiLCJjb252ZXJ0IiwiQ2hhdE1lc3NhZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdGV4dCIsIl9hY3Rpb25zIiwiX3Byb2ZpbGVJY29uIiwiTWVzc2FnZUNvbXBvbmVudCIsInNldENvbnRlbnQiLCJmaW5pc2hlZCIsInNldEZpbmlzaGVkIiwidG90YWxUb2tlbnMiLCJibG9ja3MiLCJwbGF5YWJsZUNvbnRlbnQiLCJwYXJzZVRleHQiLCJtZW1vIiwiX2NvbXBvbmVudHMiLCJfcHJlbG9hZCIsIkNoYXRTa2VsZXRvbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJQcmVsb2FkIiwid2lkdGgiLCJoZWlnaHQiLCJzZXRSZWFkeSIsImNvbnRyb2wiLCJvblJlYWR5IiwiQ2hhdENvbnRleHQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzZXRBdXRvcGxheSIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsImhhbmRsZUF1dG9wbGF5VG9nZ2xlIiwiaGFuZGxlQ2hhdFNlYXJjaCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Iiwib25SZWFkZXIiLCJJbnB1dCIsImxhYmVsIiwicmVxdWlyZWQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlByb3ZpZGVyIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiX2Zvcm0iLCJfcmVjb3JkaW5nIiwiX2luZGV4IiwiX3RleHRJbnB1dCIsImlzV2FpdGluZyIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwic2V0VGV4dCIsInNlbmRBdWRpbyIsImhhbmRsZVNlbmQiLCJvblN1Ym1pdCIsInJlcGxhY2VBbGwiLCJ0cmltIiwic3lzdGVtIiwiY29uZmlnIiwiU3lzdGVtTW9kYWwiLCJGb3JtIiwiVGV4dElucHV0IiwiQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiX3RpbWVyIiwiUGxheWVyIiwiY2FuY2VsIiwiVGltZXIiLCJfcGxheWVyIiwiX21vZGFsIiwiX2ltYWdlIiwiX2NvbnRleHQyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicGxheUFjdGlvbiIsInBlcm1pc3Npb24iLCJoYXNQZXJtaXNzaW9ucyIsInN0YXRlIiwicmVjb3JkIiwib25DbG9zZSIsIk1vZGFsIiwib3BlbiIsInBlcm1pc3Npb25zIiwiSW1hZ2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsIlVJRm9ybSIsImNsb3NlTW9kYWwiLCJzZXRWYWx1ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0QXJlYVZhbHVlIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJwdWJsaXNoIiwiVGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJkaWFsb2dSZWYiLCJhc3Npc3RhbnQiLCJvcGVuTW9kYWwiLCJjbG9zZSIsIm1vZGUiLCJ0ZXh0QXJlYVJlZiIsInN0eWxlIiwic2Nyb2xsSGVpZ2h0IiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciIsIl9tYW5hZ2VyIiwiX2NvbXBvbmVudHMyIiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiUHJlbG9hZFNjcmVlbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXdzL2NoYXQvQmFja0Fycm93LnRzeCIsIi90cy92aWV3cy9jaGF0L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NoYXQvZXh0ZW5zaW9uLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL2Fuc3dlcmluZy50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvdGV4dC50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbnRleHQudHMiLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy50c3giLCIvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBT087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaENDLFVBQVUsQ0FBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1IsTUFBQSxDQUFBUyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNPLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBWCxLQUFNLENBQUNZLEtBQUssRUFBRTtZQUNwQjs7VUFDQUMsT0FBQSxDQUFBZixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7O1VDN0JEOztVQUVBZ0IsTUFBQSxDQUFBQyxjQUFBLENBQUFGLE9BQUE7WUFDQUcsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFDLE1BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBdUIsTUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUF3QixPQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQXlCLE1BQUEsR0FBQXpCLE9BQUE7VUFDQSxJQUFBMEIsUUFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEyQixTQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTRCLFFBQUEsR0FBQTVCLE9BQUE7VUFFQSxJQUFBNkIsU0FBQSxHQUFBN0IsT0FBQTtVQWlCTztVQUFZLE1BQU84QixZQUFhLFNBQVFQLE1BQUEsQ0FBQVEsYUFBcUI7WUFHbkUsQ0FBQUMsTUFBTztZQUNQLENBQUFDLFFBQVM7WUFFVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLENBQUFDLE1BQU87WUFDUEEsTUFBTUEsQ0FBQ0EsTUFBMEI7Y0FDaEMsSUFBSUEsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUdBLE1BQU07Y0FDakMsT0FBTyxJQUFJO1lBQ1o7WUFFQSxDQUFBQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBQyxPQUFRLEdBQUc7Y0FDVkMsR0FBRyxFQUFFLElBQUlaLE1BQUEsQ0FBQWEsS0FBSyxFQUFFO2NBQ2hCQyxHQUFHLEVBQUUsSUFBSWQsTUFBQSxDQUFBZSxRQUFRO2FBQ2pCO1lBRUQsQ0FBQUMsTUFBTyxHQUFHLEtBQUs7WUFDZixJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUwsT0FBUSxDQUFDLElBQUksQ0FBQyxDQUFBSyxNQUFPLENBQUM7WUFDbkM7WUFDQSxDQUFBQyxRQUFTO1lBQ1QsSUFBSUMsVUFBVUEsQ0FBQ3RCLEtBQUs7Y0FDbkIsSUFBSSxDQUFDLENBQUFxQixRQUFTLEdBQUdyQixLQUFLO2NBQ3RCLElBQUksQ0FBQ3VCLFlBQVksRUFBRTtZQUNwQjtZQUNBLElBQUlELFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBUixRQUFTLENBQUNPLFFBQVEsSUFBSSxLQUFLLENBQUNBLFFBQVE7WUFDakQ7WUFFQSxDQUFBRyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQUMsWUFBWWQsTUFBTTtjQUNqQixLQUFLLENBQUMsRUFBRSxDQUFDO2NBQ1QsSUFBSSxDQUFDLENBQUFDLFFBQVMsR0FBRyxJQUFJSixTQUFBLENBQUFrQixRQUFRLEVBQUU7Y0FDL0IsSUFBSSxDQUFDLENBQUFmLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUNnQixhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUNoQyxJQUFJLENBQUNDLElBQUksRUFBRTtjQUNYO1lBQ0Q7O1lBRUFDLGdCQUFnQixHQUFHQSxDQUFBLEtBQUs7Y0FDdkIsSUFBSSxDQUFDLENBQUFkLE9BQVEsQ0FBQ0MsR0FBRyxDQUFDYyxHQUFHLENBQUM7Z0JBQ3JCQyxJQUFJLEVBQUV4QixRQUFBLENBQUF5QixVQUFVLENBQUNDO2VBQ2pCLENBQUM7WUFDSCxDQUFDO1lBQ0RyQyxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUE0QixLQUFNLEdBQUdVLFNBQVM7Y0FDdkIsSUFBSSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUFDLFlBQVlBLENBQUNDLElBQUk7Y0FDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBdEIsT0FBUSxDQUFDc0IsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJQyxLQUFLLENBQUMsVUFBVUQsSUFBSSxZQUFZLENBQUM7Y0FFckUsSUFBSSxDQUFDLENBQUFqQixNQUFPLEdBQUdpQixJQUFJO2NBQ25CLElBQUksQ0FBQ0YsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBLE1BQU1QLElBQUlBLENBQUE7Y0FDVCxJQUFJLENBQUNXLEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQyxDQUFBekIsUUFBUyxHQUFHLElBQUlSLFNBQUEsQ0FBQWtDLFFBQVEsQ0FBQztnQkFDN0JDLElBQUksRUFBRSxPQUFPO2dCQUNiSixJQUFJLEVBQUUsT0FBTztnQkFDYkssTUFBTSxFQUFFO2tCQUNQQyxTQUFTLEVBQUUsUUFBUTtrQkFDbkJDLE9BQU8sRUFBRTtpQkFDVDtnQkFDREMsR0FBRyxFQUFFMUMsT0FBQSxDQUFBMkMsT0FBTSxDQUFDSixNQUFNLENBQUNLO2VBQ25CLENBQUM7Y0FFRixJQUFJLENBQUMsQ0FBQWpDLFFBQVMsQ0FBQ2tDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBSyxDQUFFLENBQUMsQ0FBQztjQUNyQyxJQUFJLENBQUMsQ0FBQWxDLFFBQVMsQ0FBQ2tDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBSyxDQUFFLENBQUMsQ0FBQztjQUNwQyxJQUFJLENBQUMsQ0FBQWxDLFFBQVMsQ0FBQ2tDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDMUM7WUFDRDs7WUFFUUEsT0FBTyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QkMsT0FBTyxDQUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzVCLENBQUM7WUFFREMsTUFBTUEsQ0FBQ0MsUUFBUTtjQUNkLElBQUlsRSxVQUFVLENBQUNtRSxPQUFPLEVBQUU7Z0JBQ3ZCO2dCQUNBOztjQUVELElBQUksQ0FBQyxDQUFBeEMsUUFBUyxDQUFDc0MsTUFBTSxDQUFDQyxRQUFRLENBQUM7WUFDaEM7WUFFQUUsZ0JBQWdCLEdBQUcsTUFBT0MsS0FBSyxJQUF3QjtjQUN0RCxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsUUFBUSxFQUFFO2NBQzNCRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxPQUFPLEVBQUVILEtBQUssQ0FBQztjQUMzQkMsSUFBSSxDQUFDRSxNQUFNLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQztjQUNsQ0YsSUFBSSxDQUFDRSxNQUFNLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDO2NBQ3pDRixJQUFJLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFoRCxNQUFPLENBQUNpRCxJQUFJLENBQUNDLEVBQUUsQ0FBQztjQUMzQ0osSUFBSSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFdEQsUUFBQSxDQUFBeUQsY0FBYyxDQUFDQyxNQUFNLENBQUM7Y0FDNUNOLElBQUksQ0FBQ0UsTUFBTSxDQUFDLFVBQVUsRUFBRSxZQUFZSyxJQUFJLENBQUNDLEdBQUcsRUFBRSxNQUFNLENBQUM7Y0FDckRSLElBQUksQ0FBQ0UsTUFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFBaEQsTUFBTyxDQUFDdUQsVUFBVSxDQUFDO2NBRXRELE1BQU1DLEdBQUcsR0FBRyxJQUFJN0QsU0FBQSxDQUFBOEQsU0FBUyxFQUFFO2NBQzNCLE1BQU1DLFFBQVEsR0FBRyxNQUFNRixHQUFHLENBQUNHLE1BQU0sQ0FBQ2IsSUFBSSxFQUFFdEQsT0FBQSxDQUFBMkMsT0FBTSxDQUFDSixNQUFNLENBQUNLLGVBQWUsQ0FBQztjQUN0RSxPQUFPc0IsUUFBUSxDQUFDRSxJQUFJLEVBQUU7WUFDdkIsQ0FBQztZQUVELE1BQU1DLGFBQWFBLENBQUNoQixLQUFLLEVBQUVpQixhQUFhLEdBQUd2QyxTQUFTO2NBQ25ELE1BQU07Z0JBQUUwQjtjQUFJLENBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQWpELE1BQU87Y0FFN0IsTUFBTStELElBQUksR0FBWSxNQUFNZCxJQUFJLENBQUNlLGdCQUFnQixDQUFDbkIsS0FBSyxFQUFFaUIsYUFBYSxDQUFDO2NBQ3ZFLElBQUksQ0FBQ3BELFFBQVEsR0FBRyxJQUFJO2NBQ3BCLElBQUksQ0FBQyxDQUFBVixNQUFPLENBQUNpRSxlQUFlLEdBQUcsSUFBSTtjQUNuQyxNQUFNUCxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUNkLGdCQUFnQixDQUFDQyxLQUFLLENBQUM7Y0FDbkQsSUFBSSxDQUFDYSxRQUFRLEVBQUVRLE1BQU0sRUFBRTtnQkFDdEIzQixPQUFPLENBQUM0QixHQUFHLENBQUMscUJBQXFCLENBQUM7Z0JBQ2xDOztjQUVELE1BQU07Z0JBQUVDO2NBQUksQ0FBRSxHQUFHVixRQUFRO2NBRXpCLE1BQU1LLElBQUksQ0FBQ00sV0FBVyxDQUFDO2dCQUFFQyxPQUFPLEVBQUVGLElBQUksQ0FBQ047Y0FBYSxDQUFFLENBQUM7Y0FDdkQsT0FBTyxJQUFJLENBQUNTLFFBQVEsQ0FDbkI7Z0JBQ0M3QyxJQUFJLEVBQUVtQixLQUFLLENBQUNuQixJQUFJO2dCQUNoQjhDLElBQUksRUFBRUosSUFBSSxDQUFDSyxJQUFJO2dCQUNmZixRQUFRLEVBQUVVLElBQUksQ0FBQ00sTUFBTTtnQkFDckJDLEtBQUssRUFBRVAsSUFBSSxDQUFDTyxLQUFLO2dCQUNqQkMsTUFBTSxFQUFFL0IsS0FBSztnQkFDYmdDLFNBQVMsRUFBRSxJQUFBdkYsTUFBQSxDQUFBNkMsT0FBSyxHQUFFLENBQUMyQyxJQUFJLEVBQUU7Z0JBQ3pCUixPQUFPLEVBQUVGLElBQUksQ0FBQ047ZUFDZCxFQUNEQyxJQUFJLENBQ0o7WUFDRjtZQUVBLE1BQU1RLFFBQVFBLENBQUNRLFVBQVUsRUFBRWhCLElBQUk7Y0FDOUIsSUFBSTtnQkFDSCxNQUFNO2tCQUFFYjtnQkFBRSxDQUFFLEdBQUdhLElBQUk7Z0JBQ25CLE1BQU07a0JBQUVkO2dCQUFJLENBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQWpELE1BQU87Z0JBQzdCLE1BQU0wRCxRQUFRLEdBQUcsTUFBTVQsSUFBSSxDQUFDK0IsZUFBZSxDQUFDO2tCQUMzQztrQkFDQXRCLFFBQVEsRUFBRTtvQkFDVHVCLE1BQU0sRUFBRWhDLElBQUksQ0FBQ0MsRUFBRTtvQkFDZm9CLE9BQU8sRUFBRVMsVUFBVSxDQUFDckIsUUFBUTtvQkFDNUJ3QixJQUFJLEVBQUUsUUFBUTtvQkFDZFAsS0FBSyxFQUFFSSxVQUFVLENBQUNKLEtBQUs7b0JBQ3ZCUSxTQUFTLEVBQUU5QixJQUFJLENBQUNDLEdBQUc7O2lCQUVwQixDQUFDO2dCQUVGLElBQUksQ0FBQyxDQUFBdEQsTUFBTyxDQUFDb0YsY0FBYyxHQUFHMUIsUUFBUTtnQkFDdEMsSUFBSSxDQUFDLENBQUExRCxNQUFPLENBQUNpRSxlQUFlLEdBQUcsS0FBSztlQUNwQyxDQUFDLE9BQU9vQixDQUFDLEVBQUU7Z0JBQ1g5QyxPQUFPLENBQUMxQixLQUFLLENBQUMsbUJBQW1CLEVBQUV3RSxDQUFDLENBQUM7ZUFDckMsU0FBUztnQkFDVCxJQUFJLENBQUMzRSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7O1VBQ0F4QixPQUFBLENBQUFZLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5TEQsSUFBQVAsTUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUFzSCxLQUFBLEdBQUF0SCxPQUFBO1VBQ0EsSUFBQTRCLFFBQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBdUgsTUFBQSxHQUFBdkgsT0FBQTtVQUNBLElBQUF3SCxXQUFBLEdBQUF4SCxPQUFBO1VBT00sTUFBT08sWUFBYSxTQUFRZ0IsTUFBQSxDQUFBUSxhQUFxQjtZQUN0RCxDQUFBMEYsUUFBUztZQUtULENBQUFDLFVBQVcsR0FBRyxDQUFDLFlBQVksQ0FBQztZQUM1QixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUEvRCxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxDQUFBaUUsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQTFDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUNBLENBQUEyQyxLQUFNLEdBQUdoRyxRQUFBLENBQUF5QixVQUFVLENBQUN1RSxLQUFLO1lBQ3pCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLENBQUNDLEtBQUssSUFBSSxFQUFFO1lBQy9CO1lBRUEsQ0FBQWhELEtBQU0sR0FBaUIsSUFBSTBDLE1BQUEsQ0FBQXpGLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDN0MsSUFBSWdHLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBakQsS0FBTTtZQUNuQjtZQUVBLENBQUFrRCxHQUFJLEdBQUduRyxRQUFBLENBQUF5QixVQUFVLENBQUMyRSxjQUFjO1lBQ2hDLElBQUlELEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJLENBQUNGLEtBQUssSUFBSSxFQUFFO1lBQzdCO1lBRUEsQ0FBQXRDLFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUNBLElBQUlBLFVBQVVBLENBQUMwQyxFQUFFO2NBQ2hCLElBQUksQ0FBQyxDQUFBMUMsVUFBVyxHQUFHMEMsRUFBRTtZQUN0QjtZQUVBLENBQUFDLGFBQWMsR0FBRyxPQUFPO1lBQ3hCLElBQUlBLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsYUFBYztZQUMzQjtZQUNBLElBQUlBLGFBQWFBLENBQUNDLEtBQUs7Y0FDdEIsSUFBSSxDQUFDLENBQUFELGFBQWMsR0FBR0MsS0FBSztZQUM1QjtZQUVBLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLElBQUlBLFFBQVFBLENBQUNBLFFBQVE7Y0FDcEIsSUFBSSxDQUFDLENBQUFBLFFBQVMsR0FBR0EsUUFBUTtZQUMxQjtZQUVBLElBQUlDLGNBQWNBLENBQUE7Y0FDakIsTUFBTTlDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQXdDLEdBQUksQ0FBQ0YsS0FBSyxDQUFDUyxJQUFJLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDckQsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFBSyxVQUFXLENBQUM7Y0FDdkUsT0FBT0EsVUFBVSxFQUFFaUIsSUFBSSxJQUFJLGtCQUFrQjtZQUM5QztZQUVBLENBQUFZLGNBQWU7WUFDZixJQUFJQSxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGNBQWU7WUFDNUI7WUFFQSxJQUFJQSxjQUFjQSxDQUFDb0IsT0FBTztjQUN6QixJQUFJQSxPQUFPLEVBQUV0RCxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUFrQyxjQUFlLEVBQUVsQyxFQUFFLEVBQUU7Y0FDOUMsSUFBSSxDQUFDLENBQUFrQyxjQUFlLEdBQUdvQixPQUFPO1lBQy9CO1lBRUEsQ0FBQUMsVUFBVyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUN2QixJQUFJRCxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUNBM0YsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0UsYUFBYSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7Y0FDbkQsSUFBSSxDQUFDMkYsUUFBUSxHQUFHLElBQUk7WUFDckI7WUFFQTFILEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUN5QixRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUNrQixLQUFLLEdBQUcsS0FBSztZQUNuQjtZQUVBaEQsSUFBSSxHQUFHLE1BQU9zRSxFQUFVLElBQUk7Y0FDM0IsSUFBSSxDQUFDQSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDdEIsS0FBSyxHQUFHLElBQUk7Z0JBQ2pCLElBQUksQ0FBQ3dFLFFBQVEsR0FBRyxJQUFJO2dCQUNwQjs7Y0FHRCxJQUFJLENBQUMxRixRQUFRLEdBQUcsSUFBSTtjQUVwQixNQUFNdUMsSUFBSSxHQUFHLElBQUlxQyxLQUFBLENBQUFzQixJQUFJLENBQUM7Z0JBQUUxRDtjQUFFLENBQUUsQ0FBQztjQUM3QixNQUFNRCxJQUFJLENBQUNyRSxJQUFJLENBQUM7Z0JBQUVzRTtjQUFFLENBQUUsQ0FBQztjQUN2QnRELFFBQUEsQ0FBQXlCLFVBQVUsQ0FBQ3dGLFdBQVcsR0FBRzVELElBQUk7Y0FDN0IsSUFBSSxDQUFDQSxJQUFJLENBQUM2RCxLQUFLLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQ3BHLFFBQVEsR0FBRyxLQUFLO2dCQUNyQixJQUFJLENBQUNrQixLQUFLLEdBQUcsSUFBSTtnQkFDakIsSUFBSSxDQUFDd0UsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCOztjQUdELE1BQU1uRCxJQUFJLENBQUM4RCxPQUFPO2NBRWxCLE1BQU1DLG1CQUFtQixHQUFHLElBQUksQ0FBQyxDQUFBakIsR0FBSSxDQUFDRixLQUFLLENBQUNTLElBQUksQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNyRCxFQUFFLEtBQUtELElBQUksQ0FBQ2dFLGNBQWMsQ0FBQztjQUNuRixJQUFJLENBQUMsQ0FBQTFELFVBQVcsR0FBR3lELG1CQUFtQixHQUFHQSxtQkFBbUIsQ0FBQzlELEVBQUUsR0FBRyxTQUFTO2NBQzNFLElBQUksQ0FBQzRDLFlBQVksQ0FBQ3JGLE1BQU0sQ0FBQ1UsR0FBRyxDQUFDO2dCQUM1QitGLFFBQVEsRUFBRWpFLElBQUksQ0FBQ2lFLFFBQVEsRUFBRS9FLE9BQU8sSUFBSXZDLFFBQUEsQ0FBQXlCLFVBQVUsQ0FBQzZGO2VBQy9DLENBQUM7Y0FDRjtjQUNBakUsSUFBSSxDQUFDWixFQUFFLENBQUMsUUFBUSxFQUFFLE1BQUs7Z0JBQ3RCLElBQUksQ0FBQyxDQUFBb0QsUUFBUyxHQUFHeEMsSUFBSSxDQUFDd0MsUUFBUSxFQUFFSSxLQUFLO2dCQUNyQyxJQUFJLENBQUNqRixZQUFZLENBQUMsYUFBYSxDQUFDO2NBQ2pDLENBQUMsQ0FBQztjQUNGLE1BQU1xQyxJQUFJLENBQUNrRSxPQUFPLENBQUM7Z0JBQUVqRTtjQUFFLENBQUUsQ0FBQztjQUUxQjFFLFVBQVUsQ0FBQ3lFLElBQUksR0FBR0EsSUFBSTtjQUN0QixJQUFJLENBQUMsQ0FBQUEsSUFBSyxHQUFHQSxJQUFJO2NBQ2pCLE1BQU1tRSxJQUFJLEdBQUcsTUFBTTVCLFdBQUEsQ0FBQWlCLFVBQVUsQ0FBQzdILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQThHLFVBQVcsRUFBRXpDLElBQUksQ0FBQ29FLFFBQVEsQ0FBQztjQUNuRUQsSUFBSSxDQUFDRSxPQUFPLENBQUMsQ0FBQ0MsU0FBUyxFQUFFQyxLQUFLLEtBQUksQ0FBRSxDQUFDLENBQUM7Y0FFdEMsSUFBSSxDQUFDLENBQUE5QixVQUFXLENBQUM0QixPQUFPLENBQUMsQ0FBQ0MsU0FBUyxFQUFFQyxLQUFLLEtBQUk7Z0JBQzdDLElBQUksQ0FBQyxDQUFBZixVQUFXLENBQUN0RixHQUFHLENBQUNvRyxTQUFTLEVBQUVILElBQUksQ0FBQ0ksS0FBSyxDQUFDLENBQUM7Y0FDN0MsQ0FBQyxDQUFDO2NBRUYsSUFBSSxDQUFDLENBQUEvQixRQUFTLEdBQUd4QyxJQUFJLENBQUN3QyxRQUFRLENBQUNJLEtBQUs7Y0FDcEMsSUFBSSxDQUFDbkYsUUFBUSxHQUFHLEtBQUs7Y0FDckIsSUFBSSxDQUFDa0IsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDd0UsUUFBUSxHQUFHLEtBQUs7WUFDdEIsQ0FBQztZQUVELE1BQU1xQixXQUFXQSxDQUFDbkQsT0FBZTtjQUNoQyxJQUFJO2dCQUNIb0QsV0FBVyxDQUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN6QixJQUFJLENBQUMsQ0FBQXZDLGNBQWUsR0FBRzdELFNBQVM7Z0JBQ2hDLElBQUksQ0FBQ0EsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQ3FHLFFBQVEsQ0FBQ3RELE9BQU8sQ0FBQyxFQUFFO2dCQUM3QyxJQUFJLENBQUM1RCxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsSUFBSSxDQUFDdUQsZUFBZSxHQUFHLElBQUk7Z0JBQzNCLE1BQU07a0JBQUV1QyxPQUFPO2tCQUFFOUM7Z0JBQVEsQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFULElBQUssQ0FBQ3dFLFdBQVcsQ0FBQ25ELE9BQU8sQ0FBQztnQkFDbkUsSUFBSSxDQUFDWixRQUFRLEdBQUdBLFFBQVE7Z0JBQ3hCO2dCQUNBLElBQUksQ0FBQyxDQUFBMEIsY0FBZSxHQUFHb0IsT0FBTztnQkFDOUIsTUFBTXFCLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2tCQUNyQixJQUFJLENBQUNqSCxZQUFZLENBQUMsV0FBVzhDLFFBQVEsQ0FBQ1IsRUFBRSxVQUFVLENBQUM7Z0JBQ3BELENBQUM7Z0JBQ0QsTUFBTTRFLEtBQUssR0FBR0EsQ0FBQSxLQUFLO2tCQUNsQnRCLE9BQU8sQ0FBQ3VCLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRUYsUUFBUSxDQUFDO2tCQUN4QyxJQUFJLENBQUNqSCxZQUFZLENBQUMsZ0JBQWdCLENBQUM7a0JBQ25DLElBQUksQ0FBQ0EsWUFBWSxDQUFDLFdBQVc4QyxRQUFRLENBQUNSLEVBQUUsV0FBVyxDQUFDO2tCQUNwRHNELE9BQU8sQ0FBQ3VCLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRUQsS0FBSyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVEdEIsT0FBTyxDQUFDbkUsRUFBRSxDQUFDLGlCQUFpQixFQUFFd0YsUUFBUSxDQUFDO2dCQUN2Q3JCLE9BQU8sQ0FBQ25FLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRXlGLEtBQUssQ0FBQztnQkFFdEMsSUFBSSxDQUFDN0QsZUFBZSxHQUFHLEtBQUs7Z0JBQzVCLElBQUksQ0FBQ3JELFlBQVksQ0FBQyxhQUFhLENBQUM7ZUFDaEMsQ0FBQyxPQUFPeUUsQ0FBQyxFQUFFO2dCQUNYOUMsT0FBTyxDQUFDMUIsS0FBSyxDQUFDd0UsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDcEIsZUFBZSxHQUFHLEtBQUs7Z0JBQzVCLElBQUksQ0FBQ3ZELFFBQVEsR0FBRyxLQUFLOztZQUV2Qjs7VUFDQXhCLE9BQUEsQ0FBQVgsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFMRCxJQUFBeUosTUFBQSxHQUFBaEssT0FBQTtVQUNBLElBQUFpSyxNQUFBLEdBQUFqSyxPQUFBO1VBQ0EsSUFBQWtLLE1BQUEsR0FBQWxLLE9BQUE7VUFFTSxTQUFVbUssU0FBU0EsQ0FBQztZQUFFOUosS0FBSztZQUFFK0o7VUFBUyxDQUFFO1lBQzdDLE1BQU1DLElBQUksR0FBR0wsTUFBQSxDQUFBN0YsT0FBSyxDQUFDbUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUUvQixJQUFBSixNQUFBLENBQUFLLFNBQVMsRUFBQyxDQUFDbEssS0FBSyxDQUFDLEVBQUUsTUFBTUcsVUFBVSxDQUFDZ0ssVUFBVSxDQUFDLE1BQU1DLGNBQWMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLGFBQWEsQ0FBQztZQUMzRixNQUFNQSxjQUFjLEdBQUdBLENBQUEsS0FBSztjQUMzQkwsU0FBUyxDQUFDTSxPQUFPLEVBQUVDLGNBQWMsQ0FBQztnQkFBRUMsS0FBSyxFQUFFLEtBQUs7Z0JBQUVDLFFBQVEsRUFBRTtjQUFRLENBQUUsQ0FBQztZQUN4RSxDQUFDO1lBRUQsTUFBTUMsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsTUFBTTlHLFNBQVMsR0FBR29HLFNBQVMsQ0FBQ00sT0FBTyxFQUFFSyxVQUFVO2NBQy9DLElBQUksQ0FBQy9HLFNBQVMsRUFBRSxPQUFPLElBQUk7Y0FDM0IsTUFBTWdILGFBQWEsR0FBR2hILFNBQVMsQ0FBQ2lILHFCQUFxQixFQUFFO2NBQ3ZELE1BQU1DLE9BQU8sR0FBR2QsU0FBUyxDQUFDTSxPQUFPLENBQUNPLHFCQUFxQixFQUFFO2NBQ3pELE1BQU1FLFNBQVMsR0FBRyxDQUFDO2NBQ25CLE9BQU9ELE9BQU8sQ0FBQ0UsTUFBTSxHQUFHRCxTQUFTLElBQUlILGFBQWEsQ0FBQ0ksTUFBTTtZQUMxRCxDQUFDO1lBRURwQixNQUFBLENBQUE3RixPQUFLLENBQUNrSCxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNckgsU0FBUyxHQUFHb0csU0FBUyxDQUFDTSxPQUFPLEVBQUVLLFVBQVU7Y0FDL0MsSUFBSSxDQUFDL0csU0FBUyxFQUFFO2NBRWhCLE1BQU1zSCxZQUFZLEdBQUdBLENBQUEsS0FBSztnQkFDekIsTUFBTUMsT0FBTyxHQUFHLENBQUNULGFBQWEsRUFBRTtnQkFDaEMsSUFBSVMsT0FBTyxFQUFFbEIsSUFBSSxDQUFDSyxPQUFPLEVBQUVjLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQzVDcEIsSUFBSSxDQUFDSyxPQUFPLEVBQUVjLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztjQUM1QyxDQUFDO2NBQ0QxSCxTQUFTLENBQUMySCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVMLFlBQVksQ0FBQztjQUNsRCxPQUFPLE1BQU10SCxTQUFTLENBQUM0SCxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVOLFlBQVksQ0FBQztZQUNuRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQ3RCLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQTdCLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTJILFFBQUEsUUFDQzlCLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQzVCLE1BQUEsQ0FBQThCLFVBQVU7Y0FDVkMsR0FBRyxFQUFFM0IsSUFBSTtjQUNUQSxJQUFJLEVBQUMsV0FBVztjQUNoQjRCLE9BQU8sRUFBQyxVQUFVO2NBQ2xCQyxTQUFTLEVBQUMsMkJBQTJCO2NBQ3JDQyxPQUFPLEVBQUUxQjtZQUFjLEVBQ3RCLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0EsSUFBQVQsTUFBQSxHQUFBaEssT0FBQTtVQUNBLElBQUFvTSxhQUFBLEdBQUFwTSxPQUFBO1VBRUEsSUFBQXFNLFNBQUEsR0FBQXJNLE9BQUE7VUFDQSxJQUFBc00sUUFBQSxHQUFBdE0sT0FBQTtVQUNBLElBQUF1TSxrQkFBQSxHQUFBdk0sT0FBQTtVQUVNLFNBQVV3TSxPQUFPQSxDQUFDO1lBQUVwQztVQUFTLENBQUU7WUFDcEMsTUFBTTtjQUFFL0o7WUFBSyxDQUFFLEdBQUcsSUFBQWlNLFFBQUEsQ0FBQUcsY0FBYyxHQUFFO1lBRWxDLE1BQU0sQ0FBQ1QsR0FBRyxFQUFFcEksS0FBSyxFQUFFOEksZ0JBQWdCLENBQUMsR0FBRyxJQUFBTixhQUFBLENBQUFPLFlBQVksRUFBQyxZQUFZLENBQUM7WUFFakUsT0FDQzNDLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQWUsR0FDN0JsQyxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUNVLGtCQUFBLENBQUFLLGlCQUFpQjtjQUFDQyxTQUFTLEVBQUVILGdCQUFnQjtjQUFFSSxTQUFTLEVBQUVkO1lBQUcsRUFBSSxFQUVqRXBJLEtBQUssSUFDTG9HLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQTdCLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTJILFFBQUEsUUFDQzlCLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQ1EsU0FBQSxDQUFBVSxRQUFRO2NBQUMzQyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUNsQ0osTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFLRyxHQUFHLEVBQUU1QixTQUFTO2NBQUU4QixTQUFTLEVBQUM7WUFBVyxFQUFHLENBRTlDLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQWxDLE1BQUEsR0FBQWhLLE9BQUE7VUFFQSxJQUFBc00sUUFBQSxHQUFBdE0sT0FBQTtVQURBOztVQUdNLFNBQVU0TSxpQkFBaUJBLENBQUM7WUFBRUMsU0FBUztZQUFFQztVQUFTLENBQUU7WUFDekQsTUFBTTtjQUNMek0sS0FBSyxFQUFFO2dCQUFFNEUsSUFBSTtnQkFBRXdEO2NBQVU7WUFBRSxDQUMzQixHQUFHLElBQUE2RCxRQUFBLENBQUFHLGNBQWMsR0FBRTtZQUVwQixNQUFNTyxTQUFTLEdBQUdILFNBQVM7WUFDM0IsSUFBSSxDQUFDQSxTQUFTLEVBQUUsT0FBTyxJQUFJO1lBQzNCLE9BQ0M3QyxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUE3QixNQUFBLENBQUE3RixPQUFBLENBQUEySCxRQUFBLFFBQ0M5QixNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUNtQixTQUFTO2NBQUNoQixHQUFHLEVBQUVjLFNBQVM7Y0FBRXpELFFBQVEsRUFBRTRELElBQUksQ0FBQ0MsU0FBUyxDQUFDakksSUFBSSxDQUFDb0UsUUFBUTtZQUFDLEVBQUksQ0FDcEU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQVcsTUFBQSxHQUFBaEssT0FBQTtVQUNBLElBQUFzTSxRQUFBLEdBQUF0TSxPQUFBO1VBRUEsSUFBQW1OLE9BQUEsR0FBQW5OLE9BQUE7VUFDQSxJQUFBb04sTUFBQSxHQUFBcE4sT0FBQTtVQUVBLElBQUFxTixVQUFBLEdBQUFyTixPQUFBO1VBRUEsSUFBQXNOLFFBQUEsR0FBQXROLE9BQUE7VUFVQSxNQUFNO1lBQUVzSztVQUFNLENBQUUsR0FBR04sTUFBQSxDQUFBN0YsT0FBSztVQUVqQjtVQUFVLFNBQVV5RSxJQUFJQSxDQUFBO1lBQzlCLE1BQU07Y0FBRXZJO1lBQUssQ0FBRSxHQUFHLElBQUFpTSxRQUFBLENBQUFHLGNBQWMsR0FBRTtZQUNsQyxNQUFNYyxTQUFTLEdBQUdsTixLQUFLLENBQUNvSSxVQUFVLENBQUMxSCxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ3BELE1BQU0sQ0FBQ3lNLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUd6RCxNQUFBLENBQUE3RixPQUFLLENBQUN1SixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU10RCxTQUFTLEdBQUdKLE1BQUEsQ0FBQTdGLE9BQUssQ0FBQ21HLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEMsTUFBTXFELEdBQUcsR0FBRyx1QkFBdUJILE1BQU0sR0FBRyxvQkFBb0IsR0FBRyxFQUFFLEVBQUU7WUFFdkUsT0FDQ3hELE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUE7Y0FBS0ssU0FBUyxFQUFFeUI7WUFBRyxHQUNsQjNELE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQ3NCLE9BQUEsQ0FBQVMsTUFBTTtjQUFDSixNQUFNLEVBQUVBLE1BQU07Y0FBRUMsU0FBUyxFQUFFQTtZQUFTLEVBQUksRUFDaER6RCxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUN5QixRQUFBLENBQUFkLE9BQU87Y0FBQ3BDLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ2pDSixNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUN3QixVQUFBLENBQUFsRCxTQUFTO2NBQUM5SixLQUFLLEVBQUVBLEtBQUs7Y0FBRStKLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ2hELENBQUNtRCxTQUFTLEVBQUVsRSxRQUFRLEVBQUV3RSxTQUFTLElBQy9CN0QsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFBN0IsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMkgsUUFBQSxRQUNDOUIsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBTSxHQUNwQmxDLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQ3VCLE1BQUEsQ0FBQVUsU0FBUztjQUFDek4sS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDdEIsQ0FFUCxDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUEySixNQUFBLEdBQUFoSyxPQUFBO1VBQ0EsSUFBQWlLLE1BQUEsR0FBQWpLLE9BQUE7VUFDQSxJQUFBK04sT0FBQSxHQUFBL04sT0FBQTtVQUVPLE1BQU1nTyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDaEUsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBbUIsR0FDakNsQyxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUM1QixNQUFBLENBQUFnRSxJQUFJO2NBQUMvQixTQUFTLEVBQUMsSUFBSTtjQUFDN0IsSUFBSSxFQUFFMEQsT0FBQSxDQUFBRyxLQUFLLENBQUMsWUFBWTtZQUFDLEVBQUksRUFDbERsRSxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFlLEdBQzdCbEMsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFNSyxTQUFTLEVBQUM7WUFBSyxFQUFRLEVBQzdCbEMsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFNSyxTQUFTLEVBQUM7WUFBSyxFQUFRLEVBQzdCbEMsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFNSyxTQUFTLEVBQUM7WUFBSyxFQUFRLENBQ3hCLENBQ0Q7VUFFUixDQUFDO1VBQUNoTCxPQUFBLENBQUE4TSxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkYsSUFBQWhFLE1BQUEsR0FBQWhLLE9BQUE7VUFDQSxJQUFBc00sUUFBQSxHQUFBdE0sT0FBQTtVQUVBLElBQUFrSyxNQUFBLEdBQUFsSyxPQUFBO1VBQ0EsSUFBQW1PLFVBQUEsR0FBQW5PLE9BQUE7VUFDQSxJQUFBb08sUUFBQSxHQUFBcE8sT0FBQTtVQUVNLFNBQVUrTSxRQUFRQSxDQUFDO1lBQUUzQztVQUFTLENBQUU7WUFDckMsTUFBTTtjQUFFL0o7WUFBSyxDQUFFLEdBQUcsSUFBQWlNLFFBQUEsQ0FBQUcsY0FBYyxHQUFFO1lBQ2xDLE1BQU0sQ0FBQzRCLGFBQWEsRUFBRUMsV0FBVyxDQUFDLEdBQUd0RSxNQUFBLENBQUE3RixPQUFLLENBQUN1SixRQUFRLENBQVNyTixLQUFLLENBQUNvSCxRQUFRLENBQUM4RyxNQUFNLElBQUksRUFBRSxDQUFDQSxNQUFNLENBQUM7WUFFL0YsSUFBQXJFLE1BQUEsQ0FBQUssU0FBUyxFQUNSLENBQUNsSyxLQUFLLENBQUMsRUFDUCxNQUFLO2NBQ0ppTyxXQUFXLENBQUNqTyxLQUFLLENBQUNvSCxRQUFRLENBQUM4RyxNQUFNLENBQUM7WUFDbkMsQ0FBQyxFQUNELGFBQWEsQ0FDYjtZQUVELE1BQU03SCxNQUFNLEdBQUdyRyxLQUFLLENBQUNvSCxRQUFRLENBQUMrRyxHQUFHLENBQUMsQ0FBQ2hHLE9BQU8sRUFBRUQsQ0FBQyxLQUFJO2NBQ2hELE1BQU1rRyxJQUFJLEdBQUdsRyxDQUFDLEtBQUs4RixhQUFhLEdBQUcsQ0FBQztjQUNwQyxPQUFPckUsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDdUMsUUFBQSxDQUFBTSxPQUFPO2dCQUFDQyxHQUFHLEVBQUUsV0FBV3BHLENBQUMsRUFBRTtnQkFBRTZCLFNBQVMsRUFBRUEsU0FBUztnQkFBRTVCLE9BQU8sRUFBRUEsT0FBTztnQkFBRWlHLElBQUksRUFBRUE7Y0FBSSxFQUFJO1lBQzVGLENBQUMsQ0FBQztZQUVGLE9BQ0N6RSxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUE3QixNQUFBLENBQUE3RixPQUFBLENBQUEySCxRQUFBLFFBQ0VwRixNQUFNLEVBQ05yRyxLQUFLLENBQUM0RixlQUFlLElBQUkrRCxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUNzQyxVQUFBLENBQUFILGVBQWUsT0FBRyxDQUMzQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBaEUsTUFBQSxHQUFBaEssT0FBQTtVQUNBLElBQUFpSyxNQUFBLEdBQUFqSyxPQUFBO1VBQ0EsSUFBQWtLLE1BQUEsR0FBQWxLLE9BQUE7VUFDQSxJQUFBc00sUUFBQSxHQUFBdE0sT0FBQTtVQUNBLElBQUE0TyxNQUFBLEdBQUE1TyxPQUFBO1VBRU0sU0FBVTZPLGNBQWNBLENBQUM7WUFBRXJHLE9BQU87WUFBRXNHLElBQUk7WUFBRUMsYUFBYTtZQUFFQyxJQUFJLEdBQUc7VUFBSSxDQUFFO1lBQzNFLE1BQU07Y0FBRTNPLEtBQUs7Y0FBRW9DO1lBQU0sQ0FBRSxHQUFHLElBQUE2SixRQUFBLENBQUFHLGNBQWMsR0FBRTtZQUUxQyxNQUFNLENBQUN3QyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHbEYsTUFBQSxDQUFBN0YsT0FBSyxDQUFDdUosUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNsRCxNQUFNLENBQUN5QixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHcEYsTUFBQSxDQUFBN0YsT0FBSyxDQUFDdUosUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV6RCxJQUFBeEQsTUFBQSxDQUFBSyxTQUFTLEVBQUMsQ0FBQzlILE1BQU0sQ0FBQyxFQUFFLE1BQU0yTSxhQUFhLENBQUMzTSxNQUFNLENBQUM0TSxRQUFRLENBQUMsQ0FBQztZQUV6RCxNQUFNQyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQkYsYUFBYSxDQUFDLEtBQUssQ0FBQztjQUNwQkYsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNkLENBQUM7WUFDRCxJQUFBaEYsTUFBQSxDQUFBSyxTQUFTLEVBQUMsQ0FBQzlILE1BQU0sQ0FBQyxFQUFFNk0sUUFBUSxFQUFFLFdBQVcsQ0FBQztZQUUxQyxNQUFNQyxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFQztZQUFNLENBQUUsS0FBSTtjQUNuQ04sU0FBUyxDQUFDLE1BQU0sQ0FBQztjQUNqQjdPLEtBQUssQ0FBQytHLGNBQWMsR0FBR29CLE9BQU87Y0FDOUIvRixNQUFNLENBQUNnTixhQUFhLEdBQUcsQ0FBQztjQUN4QixNQUFNaE4sTUFBTSxDQUFDdU0sSUFBSSxDQUFDRixJQUFJLEVBQUV0RyxPQUFPLENBQUN0RCxFQUFFLENBQUM7WUFDcEMsQ0FBQztZQUNELE1BQU13SyxPQUFPLEdBQUcsTUFBQUEsQ0FBTztjQUFFRjtZQUFNLENBQUUsS0FBSTtjQUNwQyxNQUFNL00sTUFBTSxDQUFDa04sSUFBSSxFQUFFO2NBQ25CVCxTQUFTLENBQUMsTUFBTSxDQUFDO2NBQ2pCRSxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxNQUFNUSxXQUFXLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzlCLE1BQU1wUCxVQUFVLEVBQUVxUCxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDakIsSUFBSSxDQUFDO2NBQ3JERixNQUFBLENBQUFvQixLQUFLLENBQUNDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQztZQUM3QyxDQUFDO1lBRUQsTUFBTUMsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRTtZQUFJLENBQUU7WUFDbkMsTUFBTUMsS0FBSyxHQUFHOVAsS0FBSyxDQUFDK0csY0FBYyxFQUFFbEMsRUFBRSxLQUFLc0QsT0FBTyxFQUFFdEQsRUFBRSxJQUFJaUssVUFBVTtZQUVwRSxNQUFNOUUsSUFBSSxHQUFHOEYsS0FBSyxJQUFJbEIsTUFBTSxLQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTTtZQUN6RCxNQUFNOUMsT0FBTyxHQUFHZ0UsS0FBSyxJQUFJbEIsTUFBTSxLQUFLLE1BQU0sR0FBR1MsT0FBTyxHQUFHSCxNQUFNO1lBRTdELE9BQ0N2RixNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLGNBQ0M3QixNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFnQixHQUM5QmxDLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQzVCLE1BQUEsQ0FBQThCLFVBQVU7Y0FBQ0ksT0FBTyxFQUFFeUQsV0FBVztjQUFFdkYsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUMvQzJFLElBQUksSUFBSWhGLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQzVCLE1BQUEsQ0FBQThCLFVBQVU7Y0FBQ0ksT0FBTyxFQUFFQSxPQUFPO2NBQUEsZUFBYyxLQUFLO2NBQUM5QixJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNsRSxFQUNMMEUsYUFBYSxJQUFJL0UsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBaUIsR0FBRTZDLGFBQWEsRSxVQUFjLENBQzFFO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERBLElBQUEvRSxNQUFBLEdBQUFoSyxPQUFBO1VBQ0EsSUFBQWlLLE1BQUEsR0FBQWpLLE9BQUE7VUFDQSxJQUFBMEIsUUFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUErTixPQUFBLEdBQUEvTixPQUFBO1VBRU0sU0FBVW9RLFdBQVdBLENBQUM7WUFBRWxKO1VBQUksQ0FBRTtZQUNuQyxNQUFNLENBQUNtSixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUF0RyxNQUFBLENBQUEwRCxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU1yRCxJQUFJLEdBQUduRCxJQUFJLEtBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxZQUFZO1lBQ3BELE1BQU1xSixTQUFTLEdBQUc3TyxRQUFBLENBQUF5RCxjQUFjLENBQUNxTCxJQUFJLENBQUNDLGFBQWEsRUFBRTtZQUNyRCxNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBTUosWUFBWSxDQUFDLElBQUksQ0FBQztZQUVoRCxPQUNDdEcsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFBN0IsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMkgsUUFBQSxRQUNFeUUsU0FBUyxDQUFDSSxRQUFRLElBQUl6SixJQUFJLEtBQUssTUFBTSxJQUFJLENBQUNtSixTQUFTLEdBQ25EckcsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFLK0UsR0FBRyxFQUFDLG9CQUFvQjtjQUFDQyxHQUFHLEVBQUVOLFNBQVMsQ0FBQ0ksUUFBUTtjQUFFRyxPQUFPLEVBQUVKO1lBQWUsRUFBSSxHQUVuRjFHLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQzVCLE1BQUEsQ0FBQWdFLElBQUk7Y0FBQy9CLFNBQVMsRUFBQyxJQUFJO2NBQUM3QixJQUFJLEVBQUUwRCxPQUFBLENBQUFHLEtBQUssQ0FBQzdELElBQUksQ0FBQyxJQUFJQTtZQUFJLEVBQzlDLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkEsSUFBQUwsTUFBQSxHQUFBaEssT0FBQTtVQUNBLElBQUFrSyxNQUFBLEdBQUFsSyxPQUFBO1VBQ0EsSUFBQStRLFNBQUEsR0FBQS9RLE9BQUE7VUFDQSxJQUFBc00sUUFBQSxHQUFBdE0sT0FBQTtVQUNBLElBQUFnUixZQUFBLEdBQUFoUixPQUFBO1VBQ00sU0FBVWlSLFdBQVdBLENBQUM7WUFBRXpJLE9BQU87WUFBRTBJO1VBQVEsQ0FBRTtZQUNoRCxNQUFNO2NBQUU3USxLQUFLO2NBQUVzSSxRQUFRO2NBQUVsRztZQUFNLENBQUUsR0FBRyxJQUFBNkosUUFBQSxDQUFBRyxjQUFjLEdBQUU7WUFDcEQsTUFBTXFDLElBQUksR0FBR3RHLE9BQU8sRUFBRWxDLE9BQU8sSUFBSSxFQUFFO1lBQ25DLE1BQU0wRixHQUFHLEdBQUdoQyxNQUFBLENBQUE3RixPQUFLLENBQUNtRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCLE1BQU02RyxlQUFlLEdBQUdBLENBQUEsS0FDdkJuRixHQUFHLENBQUN0QixPQUFPLENBQUMwRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzlILE9BQU8sQ0FBQytILE9BQU8sSUFBSUEsT0FBTyxDQUFDN0YsU0FBUyxDQUFDRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFckcsSUFBQXhCLE1BQUEsQ0FBQUssU0FBUyxFQUFDLENBQUM5SCxNQUFNLENBQUMsRUFBRTBPLGVBQWUsRUFBRSxXQUFXLENBQUM7WUFDakQsSUFBSSxPQUFPckMsSUFBSSxLQUFLLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFekMsTUFBTXdDLFdBQVcsR0FBR0MsS0FBSyxJQUFLbFIsS0FBSyxDQUFDK0csY0FBYyxHQUFHb0IsT0FBUTtZQUU3RCxNQUFNZ0osV0FBVyxHQUFHaEosT0FBTyxJQUFJQSxPQUFPLENBQUN0QixJQUFJLEtBQUssTUFBTSxJQUFJeUIsUUFBUTtZQUNsRSxNQUFNOEksYUFBYSxHQUFHakosT0FBTyxDQUFDdEQsRUFBRSxLQUFLN0UsS0FBSyxDQUFDK0csY0FBYyxFQUFFbEMsRUFBRSxJQUFJc00sV0FBVztZQUU1RTtZQUNBLE9BQ0N4SCxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBO2NBQUtLLFNBQVMsRUFBQyx5QkFBeUI7Y0FBQ0YsR0FBRyxFQUFFQTtZQUFHLEdBQy9DOEMsSUFBSSxJQUNKOUUsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDa0YsU0FBQSxDQUFBVyxRQUFRO2NBQ1JwTCxPQUFPLEVBQUV3SSxJQUFJO2NBQ2JvQyxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJoTSxFQUFFLEVBQUVzRCxPQUFPLENBQUN0RCxFQUFFO2NBQ2RvTSxXQUFXLEVBQUVBLFdBQVc7Y0FDeEI3TyxNQUFNLEVBQUVBLE1BQU07Y0FDZGtHLFFBQVEsRUFBRThJLGFBQWEsSUFBSUQ7WUFBVyxFQUV2QyxFQUNBaEosT0FBTyxDQUFDM0QsS0FBSyxJQUFJbUYsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDbUYsWUFBQSxDQUFBVyxXQUFXO2NBQUNkLEdBQUcsRUFBRXJJLE9BQU8sQ0FBQzNELEtBQUs7Y0FBRStNLE9BQU87WUFBQSxFQUFHLENBQ3hEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUE1SCxNQUFBLEdBQUFoSyxPQUFBO1VBR08sTUFBTTZSLGtCQUFrQixHQUFHN0gsTUFBQSxDQUFBN0YsT0FBSyxDQUFDMk4sYUFBYSxDQUFDLEVBQXlCLENBQUM7VUFBQzVRLE9BQUEsQ0FBQTJRLGtCQUFBLEdBQUFBLGtCQUFBO1VBQzFFLE1BQU1FLHFCQUFxQixHQUFHQSxDQUFBLEtBQU0vSCxNQUFBLENBQUE3RixPQUFLLENBQUM2TixVQUFVLENBQUNILGtCQUFrQixDQUFDO1VBQUMzUSxPQUFBLENBQUE2USxxQkFBQSxHQUFBQSxxQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKaEYsSUFBQS9ILE1BQUEsR0FBQWhLLE9BQUE7VUFDQSxJQUFBa0ssTUFBQSxHQUFBbEssT0FBQTtVQUNBLElBQUErUSxTQUFBLEdBQUEvUSxPQUFBO1VBQ0EsSUFBQWlTLEtBQUEsR0FBQWpTLE9BQUE7VUFDQSxJQUFBa1MsUUFBQSxHQUFBbFMsT0FBQTtVQUNBLElBQUFtUyxZQUFBLEdBQUFuUyxPQUFBO1VBQ0EsSUFBQXNNLFFBQUEsR0FBQXRNLE9BQUE7VUFFQSxTQUFTb1MsZ0JBQWdCQSxDQUFDO1lBQUVoSSxTQUFTO1lBQUU1QixPQUFPO1lBQUVpRztVQUFJLENBQUU7WUFDckQsTUFBTSxDQUFDbkksT0FBTyxFQUFFK0wsVUFBVSxDQUFDLEdBQUdySSxNQUFBLENBQUE3RixPQUFLLENBQUN1SixRQUFRLENBQVNsRixPQUFPLEVBQUVsQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQzVFOzs7WUFHQSxNQUFNLENBQUNnTSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdkksTUFBQSxDQUFBN0YsT0FBSyxDQUFDdUosUUFBUSxDQUFVLElBQUksQ0FBQztZQUM3RCxNQUFNQyxHQUFHLEdBQUcsV0FBV25GLE9BQU8sQ0FBQ3RCLElBQUksRUFBRTtZQUNyQyxNQUFNNkgsYUFBYSxHQUFHdkcsT0FBTyxDQUFDdEIsSUFBSSxLQUFLLFFBQVEsR0FBR3NCLE9BQU8sQ0FBQzdCLEtBQUssRUFBRTZMLFdBQVcsR0FBRyxJQUFJO1lBQ25GLE1BQU07Y0FBRW5TO1lBQUssQ0FBRSxHQUFHLElBQUFpTSxRQUFBLENBQUFHLGNBQWMsR0FBRTtZQUVsQyxNQUFNLENBQUNnRyxNQUFNLEVBQUVDLGVBQWUsQ0FBQyxHQUFHLElBQUEzQixTQUFBLENBQUE0QixTQUFTLEVBQUNyTSxPQUFPLENBQUM7WUFDcEQsTUFBTW1FLGNBQWMsR0FBR0EsQ0FBQSxLQUFLO2NBQzNCTCxTQUFTLENBQUNNLE9BQU8sRUFBRUMsY0FBYyxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsS0FBSztnQkFBRUMsUUFBUSxFQUFFO2NBQVEsQ0FBRSxDQUFDO1lBQ3hFLENBQUM7WUFFRCxJQUFBWCxNQUFBLENBQUFLLFNBQVMsRUFDUixDQUFDbEssS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKa1MsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNsQkYsVUFBVSxDQUFDaFMsS0FBSyxDQUFDcUYsUUFBUSxDQUFDWSxPQUFPLENBQUM7Y0FDbEM7Y0FDQW1FLGNBQWMsRUFBRTtZQUNqQixDQUFDLEVBQ0QsV0FBV2pDLE9BQU8sQ0FBQ3RELEVBQUUsVUFBVSxDQUMvQjtZQUNELElBQUFnRixNQUFBLENBQUFLLFNBQVMsRUFBQyxDQUFDL0IsT0FBTyxDQUFDLEVBQUUsTUFBSztjQUN6QjZKLFVBQVUsQ0FBQ2hTLEtBQUssRUFBRXFGLFFBQVEsRUFBRVksT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxDQUFDLENBQUM7WUFDRixJQUFBNEQsTUFBQSxDQUFBSyxTQUFTLEVBQ1IsQ0FBQ2xLLEtBQUssQ0FBQyxFQUNQLE1BQUs7Y0FDSmdTLFVBQVUsQ0FBQ2hTLEtBQUssQ0FBQ3FGLFFBQVEsQ0FBQ1ksT0FBTyxDQUFDO2NBQ2xDaU0sV0FBVyxDQUFDLElBQUksQ0FBQztZQUNsQixDQUFDLEVBQ0QsV0FBVy9KLE9BQU8sQ0FBQ3RELEVBQUUsV0FBVyxDQUNoQztZQUVELE9BQ0M4RSxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBO2NBQUtLLFNBQVMsRUFBRXlCLEdBQUc7Y0FBQSxXQUFXbkYsT0FBTyxDQUFDdEQ7WUFBRSxHQUN2QzhFLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQW9CLEdBQ3RDbEMsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDc0csWUFBQSxDQUFBL0IsV0FBVztjQUFDbEosSUFBSSxFQUFFc0IsT0FBTyxDQUFDdEI7WUFBSSxFQUFJLENBQzFCLEVBQ1Y4QyxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBO2NBQVNLLFNBQVMsRUFBQztZQUFvQixHQUN0Q2xDLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQ29HLEtBQUEsQ0FBQWhCLFdBQVc7Y0FBQ0MsUUFBUSxFQUFFb0IsUUFBUTtjQUFFOUosT0FBTyxFQUFFQTtZQUFPLEVBQUksQ0FDNUMsRUFDVndCLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQWtCLEdBQ3BDbEMsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDcUcsUUFBQSxDQUFBckQsY0FBYztjQUNkRyxJQUFJLEVBQUUsQ0FBQ3hHLE9BQU8sQ0FBQzNELEtBQUs7Y0FDcEIyRCxPQUFPLEVBQUVBLE9BQU87Y0FDaEJzRyxJQUFJLEVBQUU0RCxlQUFlO2NBQ3JCM0QsYUFBYSxFQUFFQTtZQUFhLEVBQzNCLENBQ08sQ0FDTDtVQUVSO1VBRU8sTUFBTUwsT0FBTyxHQUFHMUUsTUFBQSxDQUFBN0YsT0FBSyxDQUFDeU8sSUFBSSxDQUFDUixnQkFBZ0IsQ0FBQztVQUFDbFIsT0FBQSxDQUFBd04sT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pFcEQsSUFBQTFFLE1BQUEsR0FBQWhLLE9BQUE7VUFDQSxJQUFBc00sUUFBQSxHQUFBdE0sT0FBQTtVQUVBLElBQUE2UyxXQUFBLEdBQUE3UyxPQUFBO1VBQ0EsSUFBQThTLFFBQUEsR0FBQTlTLE9BQUE7VUFDTSxTQUFVK1MsWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUUxUztZQUFLLENBQUUsR0FBRyxJQUFBaU0sUUFBQSxDQUFBRyxjQUFjLEdBQUU7WUFDbEMsT0FDQ3pDLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQWdCLEdBQzlCbEMsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDZ0gsV0FBQSxDQUFBRyxpQkFBaUI7Y0FBQ0MsS0FBSyxFQUFFakosTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDaUgsUUFBQSxDQUFBSSxPQUFPO2dCQUFDQyxLQUFLLEVBQUMsT0FBTztnQkFBQ0MsTUFBTSxFQUFDO2NBQU07WUFBRyxFQUFzQixFQUN2RnBKLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQU0sRUFBRyxDQUNuQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBLElBQUFsQyxNQUFBLEdBQUFoSyxPQUFBO1VBQ0EsSUFBQXNNLFFBQUEsR0FBQXRNLE9BQUE7VUFDTSxTQUFVMk0sWUFBWUEsQ0FBQ2pKLElBQUk7WUFDaEMsTUFBTSxDQUFDRSxLQUFLLEVBQUV5UCxRQUFRLENBQUMsR0FBR3JKLE1BQUEsQ0FBQTdGLE9BQUssQ0FBQ3VKLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDL0MsTUFBTTFCLEdBQUcsR0FBR2hDLE1BQUEsQ0FBQTdGLE9BQUssQ0FBQ21HLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsTUFBTTtjQUNMakssS0FBSyxFQUFFO2dCQUFFb0k7Y0FBVTtZQUFFLENBQ3JCLEdBQUcsSUFBQTZELFFBQUEsQ0FBQUcsY0FBYyxHQUFFO1lBRXBCLE1BQU1DLGdCQUFnQixHQUFHakUsVUFBVSxDQUFDMUgsR0FBRyxDQUFDMkMsSUFBSSxDQUFDLEVBQUU0UCxPQUFPO1lBQ3REdEosTUFBQSxDQUFBN0YsT0FBSyxDQUFDa0gsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTWtJLE9BQU8sR0FBR2hDLEtBQUssSUFBSThCLFFBQVEsQ0FBQyxJQUFJLENBQUM7Y0FDdkMsSUFBSSxDQUFDckgsR0FBRyxFQUFFdEIsT0FBTyxFQUFFO2NBQ25Cc0IsR0FBRyxDQUFDdEIsT0FBTyxDQUFDaUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFNEgsT0FBTyxDQUFDO2NBQzlDLE9BQU8sTUFBTXZILEdBQUcsQ0FBQ3RCLE9BQU8sRUFBRWtCLG1CQUFtQixDQUFDLE9BQU8sRUFBRTJILE9BQU8sQ0FBQztZQUNoRSxDQUFDLEVBQUUsQ0FBQ3ZILEdBQUcsRUFBRXRCLE9BQU8sQ0FBQyxDQUFDO1lBRWxCLE9BQU8sQ0FBQ3NCLEdBQUcsRUFBRXBJLEtBQUssRUFBRThJLGdCQUFnQixDQUFDO1VBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCQSxJQUFBMUMsTUFBQSxHQUFBaEssT0FBQTtVQVdPLE1BQU13VCxXQUFXLEdBQUd4SixNQUFBLENBQUE3RixPQUFLLENBQUMyTixhQUFhLENBQUMsRUFBa0IsQ0FBQztVQUFDNVEsT0FBQSxDQUFBc1MsV0FBQSxHQUFBQSxXQUFBO1VBQzVELE1BQU0vRyxjQUFjLEdBQUdBLENBQUEsS0FBTXpDLE1BQUEsQ0FBQTdGLE9BQUssQ0FBQzZOLFVBQVUsQ0FBQ3dCLFdBQVcsQ0FBQztVQUFDdFMsT0FBQSxDQUFBdUwsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1psRSxJQUFBekMsTUFBQSxHQUFBaEssT0FBQTtVQUNBLElBQUFzTSxRQUFBLEdBQUF0TSxPQUFBO1VBQ0EsSUFBQWlLLE1BQUEsR0FBQWpLLE9BQUE7VUFDQSxJQUFBNlMsV0FBQSxHQUFBN1MsT0FBQTtVQUNBLElBQUFrSyxNQUFBLEdBQUFsSyxPQUFBO1VBRU0sU0FBVTROLE1BQU1BLENBQUM7WUFBRUosTUFBTTtZQUFFQztVQUFTLENBQUU7WUFDM0MsTUFBTTtjQUFFcE47WUFBSyxDQUFFLEdBQUcsSUFBQWlNLFFBQUEsQ0FBQUcsY0FBYyxHQUFFO1lBQ2xDLE1BQU0sQ0FBQ2dILE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUcsSUFBQTFKLE1BQUEsQ0FBQTBELFFBQVEsRUFBQyxFQUFFLENBQUM7WUFDeEMsTUFBTSxDQUFDL0UsUUFBUSxFQUFFZ0wsV0FBVyxDQUFDLEdBQUcsSUFBQTNKLE1BQUEsQ0FBQTBELFFBQVEsRUFBQ3JOLEtBQUssQ0FBQ3NJLFFBQVEsQ0FBQztZQUN4RCxNQUFNLENBQUNpTCxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUE3SixNQUFBLENBQUEwRCxRQUFRLEdBQVc7WUFDckQsTUFBTW9HLG9CQUFvQixHQUFHQSxDQUFBLEtBQUs7Y0FDakN6VCxLQUFLLENBQUNzSSxRQUFRLEdBQUcsQ0FBQ3RJLEtBQUssQ0FBQ3NJLFFBQVE7WUFDakMsQ0FBQztZQUNELElBQUF1QixNQUFBLENBQUFLLFNBQVMsRUFBQyxDQUFDbEssS0FBSyxDQUFDLEVBQUUsTUFBTXNULFdBQVcsQ0FBQ3RULEtBQUssQ0FBQ3NJLFFBQVEsQ0FBQyxDQUFDO1lBRXJELE1BQU1vTCxnQkFBZ0IsR0FBRzFNLENBQUMsSUFBRztjQUM1QkEsQ0FBQyxDQUFDMk0sY0FBYyxFQUFFO2NBQ2xCTixTQUFTLENBQUNyTSxDQUFDLENBQUM0TSxNQUFNLENBQUM1UyxLQUFLLENBQUM7WUFDMUIsQ0FBQztZQUVELE1BQU02UyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQnpHLFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7Y0FDbEJxRyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ25CLENBQUM7WUFFRCxPQUNDN0osTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDZ0gsV0FBQSxDQUFBRyxpQkFBaUI7Y0FBQ0MsS0FBSyxFQUFFNVMsS0FBSyxDQUFDNEUsSUFBSSxDQUFDdkIsSUFBSSxJQUFJLFVBQVU7Y0FBRWtRLFNBQVMsRUFBRUE7WUFBUyxHQUM1RTVKLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQWMsR0FDNUJsQyxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUF5QixHQUN2Q2xDLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQzVCLE1BQUEsQ0FBQWdFLElBQUk7Y0FBQzVELElBQUksRUFBQztZQUFRLEVBQUcsRUFDdEJMLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsZUFBT3hMLEtBQUssQ0FBQ2dJLGNBQWMsQ0FBUSxDQUM5QixFQUNOMkIsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNsQyxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUM1QixNQUFBLENBQUFnRSxJQUFJO2NBQUM1RCxJQUFJLEVBQUM7WUFBUSxFQUFHLEVBQ3RCTCxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLGVBQU94TCxLQUFLLENBQUM2SCxhQUFhLENBQVEsQ0FDN0IsRUFDTjhCLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQ2dILFdBQUEsQ0FBQXNCLEtBQUs7Y0FDTHpRLElBQUksRUFBQyxNQUFNO2NBQ1gwUSxLQUFLLEVBQUMsZ0JBQWdCO2NBQ3RCL1MsS0FBSyxFQUFFb1MsTUFBTTtjQUNibkUsUUFBUSxFQUFFeUUsZ0JBQWdCO2NBQzFCTSxRQUFRO2NBQ1J2USxJQUFJLEVBQUM7WUFBUSxFQUNaLEVBQ0ZrRyxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLGNBQ0M3QixNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUM1QixNQUFBLENBQUFnRSxJQUFJO2NBQ0o1RCxJQUFJLEVBQUUxQixRQUFRLEdBQUcsU0FBUyxHQUFHLGFBQWE7Y0FDMUN1RCxTQUFTLEVBQUMsZ0JBQWdCO2NBQzFCQyxPQUFPLEVBQUUySDtZQUFvQixFQUM1QixFQUNGOUosTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDNUIsTUFBQSxDQUFBOEIsVUFBVTtjQUFDRyxTQUFTLEVBQUMsUUFBUTtjQUFDRCxPQUFPLEVBQUMsU0FBUztjQUFDNUIsSUFBSSxFQUFDLEtBQUs7Y0FBQzhCLE9BQU8sRUFBRStIO1lBQVEsRUFBSSxDQUM1RSxDQUNELENBQ2E7VUFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeERBLElBQUFsSyxNQUFBLEdBQUFoSyxPQUFBO1VBQ0EsSUFBQWtLLE1BQUEsR0FBQWxLLE9BQUE7VUFDQSxJQUFBc1UsS0FBQSxHQUFBdFUsT0FBQTtVQUNBLElBQUFzTSxRQUFBLEdBQUF0TSxPQUFBO1VBQ0EsSUFBQXVVLFNBQUEsR0FBQXZVLE9BQUE7VUFDQSxJQUFBd1UsU0FBQSxHQUFBeFUsT0FBQTtVQUNBLElBQUF5VSxPQUFBLEdBQUF6VSxPQUFBO1VBQ0EsSUFBQTBVLGVBQUEsR0FBQTFVLE9BQUE7VUFFTSxTQUFVVSxJQUFJQSxDQUFDO1lBQUVMO1VBQUssQ0FBRTtZQUM3QixNQUFNLENBQUNxQyxRQUFRLEVBQUVpUyxXQUFXLENBQUMsR0FBRzNLLE1BQUEsQ0FBQTdGLE9BQUssQ0FBQ3VKLFFBQVEsQ0FBQ3JOLEtBQUssQ0FBQ3FDLFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUNrQixLQUFLLEVBQUV5UCxRQUFRLENBQUMsR0FBR3JKLE1BQUEsQ0FBQTdGLE9BQUssQ0FBQ3VKLFFBQVEsQ0FBQ3JOLEtBQUssQ0FBQ3VELEtBQUssQ0FBQztZQUVyRCxNQUFNLENBQUNnUixVQUFVLEVBQUVDLEtBQUssQ0FBQyxHQUFHLElBQUFKLE9BQUEsQ0FBQUssUUFBUSxFQUFDSixlQUFBLENBQUFLLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBRXRELElBQUE5SyxNQUFBLENBQUFLLFNBQVMsRUFBQyxDQUFDbEssS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QnNVLFdBQVcsQ0FBQ3RVLEtBQUssQ0FBQ3FDLFFBQVEsQ0FBQztjQUMzQjJRLFFBQVEsQ0FBQ2hULEtBQUssQ0FBQ3VELEtBQUssQ0FBQztZQUN0QixDQUFDLENBQUM7WUFFRixNQUFNcVIsWUFBWSxHQUFHO2NBQ3BCNVUsS0FBSztjQUNMd1UsS0FBSztjQUNMbE0sUUFBUSxFQUFFdEksS0FBSyxDQUFDc0ksUUFBUTtjQUN4QmxCLFFBQVEsRUFBRXBILEtBQUssQ0FBQ29ILFFBQVE7Y0FDeEJoRixNQUFNLEVBQUVwQyxLQUFLLENBQUN5SCxZQUFZLENBQUNyRjthQUMzQjtZQUNELE1BQU15UyxPQUFPLEdBQUcsQ0FBQzdVLEtBQUssQ0FBQytILFFBQVEsR0FBR2tNLEtBQUEsQ0FBQTFMLElBQUksR0FBRzRMLFNBQUEsQ0FBQVcsWUFBWTtZQUNyRCxNQUFNelUsSUFBSSxHQUFHa0QsS0FBSyxJQUFJZ1IsVUFBVSxHQUFHTSxPQUFPLEdBQUdYLFNBQUEsQ0FBQXhCLFlBQVk7WUFFekQsT0FDQy9JLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQ1MsUUFBQSxDQUFBa0gsV0FBVyxDQUFDNEIsUUFBUTtjQUFDL1QsS0FBSyxFQUFFNFQ7WUFBWSxHQUN4Q2pMLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQ25MLElBQUksT0FBRyxDQUNjO1VBRXpCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBc0osTUFBQSxHQUFBaEssT0FBQTtVQVNPLE1BQU1xVixZQUFZLEdBQUdyTCxNQUFBLENBQUE3RixPQUFLLENBQUMyTixhQUFhLENBQUMsSUFBcUIsQ0FBQztVQUFDNVEsT0FBQSxDQUFBbVUsWUFBQSxHQUFBQSxZQUFBO1VBQ2hFLE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNdEwsTUFBQSxDQUFBN0YsT0FBSyxDQUFDNk4sVUFBVSxDQUFDcUQsWUFBWSxDQUFDO1VBQUNuVSxPQUFBLENBQUFvVSxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVnBFLElBQUF0TCxNQUFBLEdBQUFoSyxPQUFBO1VBQ0EsSUFBQXVWLEtBQUEsR0FBQXZWLE9BQUE7VUFDQSxJQUFBNlMsV0FBQSxHQUFBN1MsT0FBQTtVQUNBLElBQUF3QixPQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQWtLLE1BQUEsR0FBQWxLLE9BQUE7VUFDQSxJQUFBc00sUUFBQSxHQUFBdE0sT0FBQTtVQUNBLElBQUF3VixVQUFBLEdBQUF4VixPQUFBO1VBQ0EsSUFBQXlWLE1BQUEsR0FBQXpWLE9BQUE7VUFFQSxJQUFBMFYsVUFBQSxHQUFBMVYsT0FBQTtVQUVPO1VBQVcsTUFBTThOLFNBQVMsR0FBR0EsQ0FBQztZQUFFek4sS0FBSztZQUFFc1YsU0FBUyxHQUFHO1VBQUssQ0FBK0MsS0FBSTtZQUNqSCxNQUFNLENBQUNDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUc3TCxNQUFBLENBQUE3RixPQUFLLENBQUN1SixRQUFRLENBQVUsS0FBSyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQ2hMLFFBQVEsRUFBRWlTLFdBQVcsQ0FBQyxHQUFHM0ssTUFBQSxDQUFBN0YsT0FBSyxDQUFDdUosUUFBUSxDQUFVLEtBQUssQ0FBQztZQUM5RCxNQUFNLENBQUNvSSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHL0wsTUFBQSxDQUFBN0YsT0FBSyxDQUFDdUosUUFBUSxDQUFVLEtBQUssQ0FBQztZQUU1RCxNQUFNLENBQUNvQixJQUFJLEVBQUVrSCxPQUFPLENBQUMsR0FBR2hNLE1BQUEsQ0FBQTdGLE9BQUssQ0FBQ3VKLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDMUMsTUFBTTtjQUNMNUYsWUFBWTtjQUNaQSxZQUFZLEVBQUU7Z0JBQUU3RjtjQUFRO1lBQUUsQ0FDMUIsR0FBRzVCLEtBQUs7WUFFVCxJQUFBNkosTUFBQSxDQUFBSyxTQUFTLEVBQUMsQ0FBQ2xLLEtBQUssQ0FBQyxFQUFFLE1BQU0wVixVQUFVLENBQUMxVixLQUFLLENBQUM0RixlQUFlLENBQUMsQ0FBQztZQUUzRCxNQUFNaUssUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRTtZQUFLLENBQUU7WUFDcEMsTUFBTStGLFNBQVMsR0FBRyxNQUFNMUUsS0FBSyxJQUFHO2NBQy9Cb0QsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQnBELEtBQUssQ0FBQ3lDLGNBQWMsRUFBRTtjQUN0QixNQUFNblAsS0FBSyxHQUFHLE1BQU01QyxRQUFRLENBQUMwTixJQUFJLEVBQUU7Y0FDbkMsTUFBTTVKLElBQUksR0FBRytCLFlBQVksQ0FBQ2pDLGFBQWEsQ0FBQ2hCLEtBQUssRUFBRTVDLFFBQVEsQ0FBQzZELGFBQWEsQ0FBQztjQUN0RStQLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7Y0FDeEJqQixXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUM7WUFFRCxNQUFNdUIsVUFBVSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM3QkYsT0FBTyxDQUFDLEVBQUUsQ0FBQztjQUNYckIsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQnRVLEtBQUssQ0FBQ29KLFdBQVcsQ0FBQ3FGLElBQUksQ0FBQztZQUN4QixDQUFDO1lBQ0QsTUFBTXFILFFBQVEsR0FBRyxDQUFDLENBQUNySCxJQUFJLENBQUNQLE1BQU0sR0FBRzJILFVBQVUsR0FBR0QsU0FBUztZQUV2RCxJQUFJLENBQUMsRUFBRSxFQUFFMVMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDcUcsUUFBUSxDQUFDa0YsSUFBSSxDQUFDc0gsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUN0SCxJQUFJLENBQUN1SCxJQUFJLEVBQUUsQ0FBQzlILE1BQU0sRUFBRTJCLFFBQVEsQ0FBQ0EsUUFBUSxHQUFHLElBQUk7WUFFOUcsTUFBTXZDLEdBQUcsR0FBRyxtQkFBbUJtSSxPQUFPLElBQUlILFNBQVMsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFO1lBQ3RFO1lBQ0EsTUFBTTtjQUFFVztZQUFNLENBQUUsR0FBRzlVLE9BQUEsQ0FBQTJDLE9BQU0sQ0FBQ0osTUFBTSxDQUFDd1MsTUFBTTtZQUV2QyxPQUNDdk0sTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFLSyxTQUFTLEVBQUV5QjtZQUFHLEdBQ2xCM0QsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDUyxRQUFBLENBQUErSSxZQUFZLENBQUNELFFBQVE7Y0FBQy9ULEtBQUssRUFBRTtnQkFBRWhCLEtBQUs7Z0JBQUU4VixRQUFRO2dCQUFFbFUsUUFBUTtnQkFBRTRULFlBQVk7Z0JBQUVEO2NBQVM7WUFBRSxHQUNsRlUsTUFBTSxJQUFJdE0sTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDNEosTUFBQSxDQUFBZSxXQUFXO2NBQUN2UixJQUFJLEVBQUU1RSxLQUFLLENBQUM0RTtZQUFJLEVBQUksRUFDNUMrRSxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUMwSixLQUFBLENBQUFrQixJQUFJO2NBQUNOLFFBQVEsRUFBRUEsUUFBUTtjQUFFakssU0FBUyxFQUFDO1lBQWlCLEdBQ3BEbEMsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDNkosVUFBQSxDQUFBZ0IsU0FBUztjQUNUclcsS0FBSyxFQUFFQSxLQUFLO2NBQ1p5TyxJQUFJLEVBQUVBLElBQUk7Y0FDVjZGLFdBQVcsRUFBRUEsV0FBVztjQUN4QmpTLFFBQVEsRUFBRUEsUUFBUSxJQUFJa1QsU0FBUyxJQUFJRSxPQUFPLElBQUlILFNBQVM7Y0FDdkRLLE9BQU8sRUFBRUEsT0FBTztjQUNoQkUsVUFBVSxFQUFFQTtZQUFVLEVBQ3JCLEVBQ0ZsTSxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBO2NBQU1LLFNBQVMsRUFBRTtZQUFpQyxHQUNoRCxDQUFDLENBQUM0QyxJQUFJLENBQUNQLE1BQU0sR0FDYnZFLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQ2dILFdBQUEsQ0FBQThELE1BQU07Y0FDTnRNLElBQUksRUFBQyxZQUFZO2NBQ2pCOEIsT0FBTyxFQUFFK0osVUFBVTtjQUNuQmhHLFFBQVEsRUFBRUEsUUFBUSxDQUFDQSxRQUFRLElBQUk3UCxLQUFLLENBQUM0RjtZQUFlLEVBQ25ELEdBRUYrRCxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUMySixVQUFBLENBQUFvQixlQUFlO2NBQUN2VyxLQUFLLEVBQUVBLEtBQUs7Y0FBRTZQLFFBQVEsRUFBRTBGLFNBQVMsSUFBSXZWLEtBQUssQ0FBQzRGO1lBQWUsRUFDM0UsQ0FDSyxDQUNELENBQ2dCLENBQ25CO1VBRVIsQ0FBQztVQUFDL0UsT0FBQSxDQUFBNE0sU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNFRixJQUFBOUQsTUFBQSxHQUFBaEssT0FBQTtVQUNBLElBQUFpSyxNQUFBLEdBQUFqSyxPQUFBO1VBQ0EsSUFBQTZXLE1BQUEsR0FBQTdXLE9BQUE7VUFDQSxJQUFBc00sUUFBQSxHQUFBdE0sT0FBQTtVQUVPLE1BQU04VyxNQUFNLEdBQUdBLENBQUEsS0FBSztZQUMxQixNQUFNO2NBQUVYLFFBQVE7Y0FBRWxVLFFBQVE7Y0FBRTRUO1lBQVksQ0FBRSxHQUFHLElBQUF2SixRQUFBLENBQUFnSixlQUFlLEdBQUU7WUFFOUQsTUFBTXlCLE1BQU0sR0FBRyxNQUFNeEYsS0FBSyxJQUFHO2NBQzVCQSxLQUFLLENBQUN5QyxjQUFjLEVBQUU7Y0FDdEIsTUFBTS9SLFFBQVEsQ0FBQzBOLElBQUksRUFBRTtjQUNyQmtHLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUNELE9BQ0M3TCxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUE2QixHQUMzQ2xDLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQzVCLE1BQUEsQ0FBQThCLFVBQVU7Y0FBQ0csU0FBUyxFQUFDLFFBQVE7Y0FBQzdCLElBQUksRUFBQyxRQUFRO2NBQUM4QixPQUFPLEVBQUU0SztZQUFNLEVBQUksRUFDaEUvTSxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUNnTCxNQUFBLENBQUFHLEtBQUs7Y0FBQy9ILE1BQU0sRUFBQztZQUFPLEVBQUcsRUFDeEJqRixNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUM1QixNQUFBLENBQUE4QixVQUFVO2NBQUMxQixJQUFJLEVBQUMsTUFBTTtjQUFDNkIsU0FBUyxFQUFDLFFBQVE7Y0FBQ0QsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsT0FBTyxFQUFFZ0s7WUFBUSxFQUFJLENBQzdFO1VBRVIsQ0FBQztVQUFDalYsT0FBQSxDQUFBNFYsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCRixJQUFBOU0sTUFBQSxHQUFBaEssT0FBQTtVQUNBLElBQUE2UyxXQUFBLEdBQUE3UyxPQUFBO1VBQ0EsSUFBQWlYLE9BQUEsR0FBQWpYLE9BQUE7VUFDQSxJQUFBc00sUUFBQSxHQUFBdE0sT0FBQTtVQUNBLElBQUFrWCxNQUFBLEdBQUFsWCxPQUFBO1VBQ0EsSUFBQW1YLE1BQUEsR0FBQW5YLE9BQUE7VUFDQSxJQUFBb1gsU0FBQSxHQUFBcFgsT0FBQTtVQUNPO1VBQVcsTUFBTTRXLGVBQWUsR0FBR0EsQ0FBQztZQUFFdlcsS0FBSyxFQUFFO2NBQUV5SDtZQUFZLENBQUU7WUFBRW9JO1VBQVEsQ0FBRSxLQUFJO1lBQ25GLE1BQU07Y0FBRWpPLFFBQVE7Y0FBRTJULFNBQVM7Y0FBRUM7WUFBWSxDQUFFLEdBQUcsSUFBQXZKLFFBQUEsQ0FBQWdKLGVBQWUsR0FBRTtZQUMvRCxNQUFNLENBQUM1UyxRQUFRLEVBQUVpUyxXQUFXLENBQUMsR0FBRyxJQUFBM0ssTUFBQSxDQUFBMEQsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUMySixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUF0TixNQUFBLENBQUEwRCxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU07Y0FBRW1IO1lBQUssQ0FBRSxHQUFHLElBQUF1QyxTQUFBLENBQUEzSyxjQUFjLEdBQUU7WUFDbEMsTUFBTThLLFVBQVUsR0FBRyxNQUFNaEcsS0FBSyxJQUFHO2NBQ2hDLElBQUk7Z0JBQ0hBLEtBQUssQ0FBQ3lDLGNBQWMsRUFBRTtnQkFDdEJXLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU02QyxVQUFVLEdBQUcsTUFBTXZWLFFBQVEsQ0FBQ3dWLGNBQWMsRUFBRTtnQkFDbEQsSUFBSUQsVUFBVSxDQUFDRSxLQUFLLEtBQUssU0FBUyxFQUFFSixZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUN0RCxNQUFNclYsUUFBUSxDQUFDMFYsTUFBTSxFQUFFO2dCQUN2QjlCLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7ZUFDeEIsQ0FBQyxPQUFPdk8sQ0FBQyxFQUFFO2dCQUNYOUMsT0FBTyxDQUFDMUIsS0FBSyxDQUFDd0UsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1RzTixXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsTUFBTWlELE9BQU8sR0FBR3JHLEtBQUssSUFBRztjQUN2Qm9ELFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEIyQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFFRCxJQUFJMUIsU0FBUyxFQUFFLE9BQU81TCxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUNvTCxPQUFBLENBQUFILE1BQU0sT0FBRztZQUVoQyxPQUNDOU0sTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFBN0IsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMkgsUUFBQSxRQUNFdUwsU0FBUyxJQUNUck4sTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDcUwsTUFBQSxDQUFBVyxLQUFLO2NBQUNDLElBQUksRUFBRSxJQUFJO2NBQUVuWCxJQUFJLEVBQUUsSUFBSTtjQUFFaVgsT0FBTyxFQUFFQTtZQUFPLEdBQzlDNU4sTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxhQUFLZ0osS0FBSyxDQUFDa0QsV0FBVyxDQUFDOUUsS0FBSyxDQUFNLEVBQ2xDakosTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDc0wsTUFBQSxDQUFBYSxLQUFLO2NBQUNuSCxHQUFHLEVBQUM7WUFBMEIsRUFBRyxFQUN4QzdHLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsWUFBSWdKLEtBQUssQ0FBQ2tELFdBQVcsQ0FBQ0UsV0FBVyxDQUFLLEVBQ3RDak8sTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFRSyxTQUFTLEVBQUM7WUFBTyxHQUN4QmxDLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQ2dILFdBQUEsQ0FBQThELE1BQU07Y0FBQzFLLE9BQU8sRUFBQyxTQUFTO2NBQUNFLE9BQU8sRUFBRXlMO1lBQU8sR0FDeEMvQyxLQUFLLENBQUNrRCxXQUFXLENBQUNHLE1BQU0sQ0FDakIsQ0FDRCxDQUVWLEVBQ0RsTyxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUNnSCxXQUFBLENBQUE4RCxNQUFNO2NBQUN0TSxJQUFJLEVBQUMsS0FBSztjQUFDM0gsUUFBUSxFQUFFQSxRQUFRO2NBQUV5SixPQUFPLEVBQUVvTCxVQUFVO2NBQUVySCxRQUFRLEVBQUVBLFFBQVEsSUFBSXhOO1lBQVEsRUFBSSxDQUM1RjtVQUVMLENBQUM7VUFBQ3hCLE9BQUEsQ0FBQTBWLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREYsSUFBQTVNLE1BQUEsR0FBQWhLLE9BQUE7VUFDQSxJQUFBdVYsS0FBQSxHQUFBdlYsT0FBQTtVQUNBLElBQUE2UyxXQUFBLEdBQUE3UyxPQUFBO1VBQ0EsSUFBQTRPLE1BQUEsR0FBQTVPLE9BQUE7VUFDQSxJQUFBc00sUUFBQSxHQUFBdE0sT0FBQTtVQUVPLE1BQU1tWSxNQUFNLEdBQUdBLENBQUM7WUFBRWxULElBQUk7WUFBRW1UO1VBQVUsQ0FBRSxLQUFJO1lBQzlDLE1BQU0sQ0FBQy9XLEtBQUssRUFBRWdYLFFBQVEsQ0FBQyxHQUFHck8sTUFBQSxDQUFBN0YsT0FBSyxDQUFDdUosUUFBUSxDQUFDekksSUFBSSxFQUFFcVIsTUFBTSxDQUFDO1lBQ3RELE1BQU0sQ0FBQ3pULEtBQUssRUFBRXlWLFFBQVEsQ0FBQyxHQUFHdE8sTUFBQSxDQUFBN0YsT0FBSyxDQUFDdUosUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUM2SyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHeE8sTUFBQSxDQUFBN0YsT0FBSyxDQUFDdUosUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNO2NBQUVtSDtZQUFLLENBQUUsR0FBRyxJQUFBdkksUUFBQSxDQUFBRyxjQUFjLEdBQUU7WUFFbEMsU0FBU2dNLFlBQVlBLENBQUNsSCxLQUFLO2NBQzFCLE1BQU07Z0JBQUVsUSxLQUFLLEVBQUVxWDtjQUFhLENBQUUsR0FBR25ILEtBQUssQ0FBQzBDLE1BQU07Y0FDN0NvRSxRQUFRLENBQUNLLGFBQWEsQ0FBQztZQUN4QjtZQUVBLFNBQVNDLFdBQVdBLENBQUE7Y0FDbkJMLFFBQVEsQ0FBQyxLQUFLLENBQUM7Y0FDZkUsVUFBVSxDQUFDLEtBQUssQ0FBQztjQUNqQkgsUUFBUSxDQUFDcFQsSUFBSSxFQUFFcVIsTUFBTSxDQUFDO2NBQ3RCOEIsVUFBVSxFQUFFO1lBQ2I7WUFFQSxNQUFNUSxZQUFZLEdBQUcsTUFBTXJILEtBQUssSUFBRztjQUNsQ0EsS0FBSyxDQUFDeUMsY0FBYyxFQUFFO2NBQ3RCd0UsVUFBVSxDQUFDLElBQUksQ0FBQztjQUNoQixNQUFNOVMsUUFBUSxHQUFHLE1BQU1ULElBQUksQ0FBQzRULE9BQU8sQ0FBQztnQkFBRXZDLE1BQU0sRUFBRWpWO2NBQUssQ0FBRSxDQUFDO2NBQ3RELElBQUksQ0FBQ3FFLFFBQVEsQ0FBQ1EsTUFBTSxFQUFFb1MsUUFBUSxDQUFDNVMsUUFBUSxDQUFDN0MsS0FBSyxDQUFDO2NBRTlDK0wsTUFBQSxDQUFBb0IsS0FBSyxDQUFDQyxPQUFPLENBQUM0RSxLQUFLLENBQUN5QixNQUFNLENBQUNyRyxPQUFPLENBQUM7Y0FDbkMwSSxXQUFXLEVBQUU7WUFDZCxDQUFDO1lBRUQsT0FDQzNPLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsQ0FBQzBKLEtBQUEsQ0FBQWtCLElBQUk7Y0FBQ04sUUFBUSxFQUFFeUMsWUFBWTtjQUFFMU0sU0FBUyxFQUFDO1lBQWEsR0FDbkRySixLQUFLLElBQUltSCxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUF1QixHQUFFckosS0FBSyxDQUFPLEVBQzlEbUgsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDMEosS0FBQSxDQUFBdUQsUUFBUTtjQUFDQyxJQUFJLEVBQUUsQ0FBQztjQUFFMVgsS0FBSyxFQUFFQSxLQUFLO2NBQUUyWCxXQUFXLEVBQUMsd0JBQXdCO2NBQUMxSixRQUFRLEVBQUVtSjtZQUFZLEVBQUksRUFDaEd6TyxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLGlCQUNDN0IsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDZ0gsV0FBQSxDQUFBOEQsTUFBTTtjQUFDdE0sSUFBSSxFQUFDLGNBQWM7Y0FBQytKLEtBQUssRUFBQyxRQUFRO2NBQUNuSSxPQUFPLEVBQUMsY0FBYztjQUFDRSxPQUFPLEVBQUV3TTtZQUFXLEVBQUksRUFDMUYzTyxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUNnSCxXQUFBLENBQUE4RCxNQUFNO2NBQUM3UyxJQUFJLEVBQUMsUUFBUTtjQUFDdUcsSUFBSSxFQUFDLE1BQU07Y0FBQzhCLE9BQU8sRUFBRXlNLFlBQVk7Y0FBRXhFLEtBQUssRUFBQyxRQUFRO2NBQUNtRSxPQUFPLEVBQUVBO1lBQU8sRUFBSSxDQUNwRixDQUNIO1VBRVQsQ0FBQztVQUFDclgsT0FBQSxDQUFBaVgsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDRixJQUFBbk8sTUFBQSxHQUFBaEssT0FBQTtVQUNBLElBQUF1VixLQUFBLEdBQUF2VixPQUFBO1VBQ0EsSUFBQTZTLFdBQUEsR0FBQTdTLE9BQUE7VUFDQSxJQUFBaUssTUFBQSxHQUFBakssT0FBQTtVQUNBLElBQUFzTSxRQUFBLEdBQUF0TSxPQUFBO1VBRU87VUFBVyxNQUFNd1csV0FBVyxHQUFHQSxDQUFDO1lBQUV2UjtVQUFJLENBQUUsS0FBSTtZQUNsRCxNQUFNZ1UsU0FBUyxHQUFHalAsTUFBQSxDQUFBN0YsT0FBSyxDQUFDbUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNwQyxNQUFNO2NBQ0x1SyxLQUFLLEVBQUU7Z0JBQUVxRSxTQUFTLEVBQUVyRTtjQUFLO1lBQUUsQ0FDM0IsR0FBRyxJQUFBdkksUUFBQSxDQUFBRyxjQUFjLEdBQUU7WUFDcEIsTUFBTTBNLFNBQVMsR0FBR0EsQ0FBQSxLQUFNRixTQUFTLENBQUN2TyxPQUFPLENBQUMyTSxTQUFTLEVBQUU7WUFDckQsTUFBTWUsVUFBVSxHQUFHQSxDQUFBLEtBQU1hLFNBQVMsQ0FBQ3ZPLE9BQU8sQ0FBQzBPLEtBQUssRUFBRTtZQUVsRCxPQUNDcFAsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFLSyxTQUFTLEVBQUU7WUFBZ0MsR0FDL0NsQyxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUNnSCxXQUFBLENBQUE4RCxNQUFNO2NBQUN0TSxJQUFJLEVBQUMsTUFBTTtjQUFDOEIsT0FBTyxFQUFFZ04sU0FBUztjQUFFRSxJQUFJLEVBQUM7WUFBUyxFQUFHLEVBRXhEclAsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFRRyxHQUFHLEVBQUVpTixTQUFTO2NBQUVyQixPQUFPLEVBQUVRO1lBQVUsR0FDMUNwTyxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUM1QixNQUFBLENBQUE4QixVQUFVO2NBQUMxQixJQUFJLEVBQUMsT0FBTztjQUFDNkIsU0FBUyxFQUFDLE9BQU87Y0FBQ0MsT0FBTyxFQUFFaU07WUFBVSxFQUFJLEVBQ2xFcE8sTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxpQkFDQzdCLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsYUFBS2dKLEtBQUssQ0FBQ3FFLFNBQVMsQ0FBTSxDQUNsQixFQUNUbFAsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxjQUNDN0IsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxZQUFJZ0osS0FBSyxDQUFDck0sT0FBTyxDQUFLLENBQ2pCLEVBQ053QixNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUMwSixLQUFBLENBQUE0QyxNQUFNO2NBQUNsVCxJQUFJLEVBQUVBLElBQUk7Y0FBRW1ULFVBQVUsRUFBRUE7WUFBVSxFQUFJLENBQ3RDLENBRUw7VUFFUixDQUFDO1VBQUNsWCxPQUFBLENBQUFzVixXQUFBLEdBQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JGLElBQUF4TSxNQUFBLEdBQUFoSyxPQUFBO1VBQ0EsSUFBQWtLLE1BQUEsR0FBQWxLLE9BQUE7VUFFTSxTQUFVMFcsU0FBU0EsQ0FBQztZQUFFL0IsV0FBVztZQUFFdFUsS0FBSztZQUFFMlYsT0FBTztZQUFFRSxVQUFVO1lBQUV4VCxRQUFRO1lBQUVvTTtVQUFJLENBQUU7WUFDcEYsTUFBTXdLLFdBQVcsR0FBR3RQLE1BQUEsQ0FBQTdGLE9BQUssQ0FBQ21HLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDdENOLE1BQUEsQ0FBQTdGLE9BQUssQ0FBQ2tILFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU00SSxNQUFNLEdBQUdxRixXQUFXLENBQUM1TyxPQUFPO2NBQ2xDdUosTUFBTSxDQUFDc0YsS0FBSyxDQUFDbkcsTUFBTSxHQUFHLE1BQU07Y0FDNUJhLE1BQU0sQ0FBQ3NGLEtBQUssQ0FBQ25HLE1BQU0sR0FBR3RFLElBQUksQ0FBQ1AsTUFBTSxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcwRixNQUFNLENBQUN1RixZQUFZLEdBQUcsSUFBSTtjQUM1RSxJQUFJLENBQUMsV0FBVyxFQUFFalcsU0FBUyxDQUFDLENBQUNxRyxRQUFRLENBQUNrRixJQUFJLENBQUNzSCxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDbkUsQ0FBQyxFQUFFLENBQUN0SCxJQUFJLENBQUMsQ0FBQztZQUVWLElBQUE1RSxNQUFBLENBQUFLLFNBQVMsRUFDUixDQUFDbEssS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKRyxVQUFVLENBQUNnSyxVQUFVLENBQUMsTUFBTThPLFdBQVcsQ0FBQzVPLE9BQU8sQ0FBQytPLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQztjQUM3RDlFLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQyxFQUNELGdCQUFnQixDQUNoQjtZQUVELE1BQU0rRSxnQkFBZ0IsR0FBRztjQUFFeEosUUFBUSxFQUFFeE47WUFBUSxDQUFFO1lBQy9DLE1BQU1pWCxpQkFBaUIsR0FBR3RTLENBQUMsSUFBRztjQUM3QixNQUFNO2dCQUFFaEc7Y0FBSyxDQUFFLEdBQUdnRyxDQUFDLENBQUM0TSxNQUFNO2NBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUUxUSxTQUFTLENBQUMsQ0FBQ3FHLFFBQVEsQ0FBQ3ZJLEtBQUssQ0FBQytVLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2NBQy9ESixPQUFPLENBQUMzVSxLQUFLLENBQUM7WUFDZixDQUFDO1lBQ0QsTUFBTXVZLGFBQWEsR0FBR3ZTLENBQUMsSUFBRztjQUN6QixJQUFJQSxDQUFDLENBQUNzSCxHQUFHLEtBQUssT0FBTyxFQUFFO2NBQ3ZCLE1BQU1rTCxFQUFFLEdBQUdDLFNBQVMsSUFBSUEsU0FBUyxHQUFHLElBQUk7Y0FDeEMsTUFBTXpZLEtBQUssR0FBR2dHLENBQUMsQ0FBQzRNLE1BQU0sQ0FBQzVTLEtBQUssQ0FBQytVLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDN0MsSUFBSSxDQUFDLEVBQUUsRUFBRTdTLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ3FHLFFBQVEsQ0FBQ3ZJLEtBQUssQ0FBQyxFQUFFO2NBQzNDZ0csQ0FBQyxDQUFDMFMsUUFBUSxHQUFHL0QsT0FBTyxDQUFDNkQsRUFBRSxDQUFDLEdBQUczRCxVQUFVLEVBQUU7WUFDeEMsQ0FBQztZQUVELE9BQ0NsTSxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBO2NBQUEsR0FDSzZOLGdCQUFnQjtjQUNwQlgsSUFBSSxFQUFFLENBQUM7Y0FDUDFYLEtBQUssRUFBRXlOLElBQUk7Y0FDWFEsUUFBUSxFQUFFcUssaUJBQWlCO2NBQzNCSyxTQUFTLEVBQUVKLGFBQWE7Y0FDeEJLLFNBQVMsRUFBRSxJQUFJO2NBQ2YvTixTQUFTLEVBQUMsaUJBQWlCO2NBQzNCRixHQUFHLEVBQUVzTjtZQUFXLEVBQ2Y7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0EsSUFBQXRQLE1BQUEsR0FBQWhLLE9BQUE7VUFDQSxJQUFBa2EsU0FBQSxHQUFBbGEsT0FBQTtVQUZBOztVQVFNLFNBQVVnWCxLQUFLQSxDQUFDO1lBQUUvSDtVQUFNLENBQWM7WUFDM0MsTUFBTWtMLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQ3ZRLFFBQVEsQ0FBQ3FGLE1BQU0sQ0FBQztZQUN2RCxNQUFNbUwsT0FBTyxHQUFHbkwsTUFBTSxLQUFLLFNBQVM7WUFDcEMsTUFBTSxDQUFDb0wsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDLEdBQUcsSUFBQU4sU0FBQSxDQUFBTyxRQUFRLEVBQUNOLFNBQVMsRUFBRUMsT0FBTyxDQUFDO1lBQzVFLE1BQU1NLFdBQVcsR0FBR0gsT0FBTyxDQUFDSSxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDdkQsTUFBTUMsZUFBZSxHQUFHUCxPQUFPLENBQUNLLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUMzRCxPQUNDNVEsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBMEIsR0FDeENsQyxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLGVBQU8sR0FBR2dQLGVBQWUsRUFBRSxFLElBQVMsRUFDcEM3USxNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLGVBQU8sR0FBRzZPLFdBQVcsRUFBRSxDQUFRLENBQzFCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUExUSxNQUFBLEdBQUFoSyxPQUFBO1VBREE7O1VBRUEsTUFBTTtZQUFFME4sUUFBUTtZQUFFckM7VUFBUyxDQUFFLEdBQUdyQixNQUFBLENBQUE3RixPQUFLO1VBRS9CLFNBQVVzVyxRQUFRQSxDQUFDTixTQUFrQixFQUFFQyxPQUFnQjtZQUM1RCxNQUFNLENBQUNVLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdyTixRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRW5DckMsU0FBUyxDQUFDLE1BQUs7Y0FDZCxJQUFJMlAsVUFBMEI7Y0FFOUIsSUFBSWIsU0FBUyxFQUFFO2dCQUNkYSxVQUFVLEdBQUdDLFdBQVcsQ0FBQyxNQUFLO2tCQUM3QkYsT0FBTyxDQUFDRyxRQUFRLElBQUlBLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Y0FHVCxPQUFPLE1BQUs7Z0JBQ1hDLGFBQWEsQ0FBQ0gsVUFBVSxDQUFDO2NBQzFCLENBQUM7WUFDRixDQUFDLEVBQUUsQ0FBQ2IsU0FBUyxDQUFDLENBQUM7WUFFZjlPLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSStPLE9BQU8sRUFBRTtnQkFDWlcsT0FBTyxDQUFDLENBQUMsQ0FBQzs7WUFFWixDQUFDLEVBQUUsQ0FBQ1gsT0FBTyxDQUFDLENBQUM7WUFFYixNQUFNSSxZQUFZLEdBQUdNLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNqQyxNQUFNUCxPQUFPLEdBQUdhLElBQUksQ0FBQ0MsS0FBSyxDQUFFUCxJQUFJLEdBQUcsR0FBRyxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTVIsT0FBTyxHQUFHYyxJQUFJLENBQUNDLEtBQUssQ0FBRVAsSUFBSSxHQUFHLElBQUksR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU1ULEtBQUssR0FBR2UsSUFBSSxDQUFDQyxLQUFLLENBQUNQLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sQ0FBQ1QsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDO1VBQy9DOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBeFEsTUFBQSxHQUFBaEssT0FBQTtVQUNBLElBQUFzYixRQUFBLEdBQUF0YixPQUFBO1VBQ0EsSUFBQTZTLFdBQUEsR0FBQTdTLE9BQUE7VUFDQSxJQUFBaUssTUFBQSxHQUFBakssT0FBQTtVQUNBLElBQUE0QixRQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQXViLFlBQUEsR0FBQXZiLE9BQUE7VUFDQSxJQUFBK04sT0FBQSxHQUFBL04sT0FBQTtVQUVNLFNBQVVtVixZQUFZQSxDQUFBO1lBQzNCLFNBQVNxRyxVQUFVQSxDQUFBO2NBQ2xCRixRQUFBLENBQUFHLFNBQVMsQ0FBQ0MsV0FBVyxHQUFHLElBQUk7WUFDN0I7WUFFQSxJQUFJLENBQUM5WixRQUFBLENBQUF5QixVQUFVLENBQUNPLEtBQUssRUFBRSxPQUFPb0csTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDMFAsWUFBQSxDQUFBSSxhQUFhLE9BQUc7WUFDL0MsT0FDQzNSLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQWtCLEdBQ2hDbEMsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQTtjQUFLZ0YsR0FBRyxFQUFDLHVCQUF1QjtjQUFDRCxHQUFHLEVBQUM7WUFBZ0IsRUFBRyxFQUN4RDVHLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUE7Y0FBTUssU0FBUyxFQUFDO1lBQXFCLEdBQ3BDbEMsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxDQUFDNUIsTUFBQSxDQUFBZ0UsSUFBSTtjQUFDNUQsSUFBSSxFQUFFMEQsT0FBQSxDQUFBRyxLQUFLLENBQUMsZUFBZSxDQUFDO2NBQUVoQyxTQUFTLEVBQUM7WUFBbUIsRUFBRyxFQUNwRWxDLE1BQUEsQ0FBQTdGLE9BQUEsQ0FBQTBILGFBQUEsOEJBQXVCLEVBQ3ZCN0IsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxZQUNDN0IsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxvRUFBaUUsRSxLQUFDN0IsTUFBQSxDQUFBN0YsT0FBQSxDQUFBMEgsYUFBQSxZQUFNLEUsbURBRXJFLEVBQ0o3QixNQUFBLENBQUE3RixPQUFBLENBQUEwSCxhQUFBLENBQUNnSCxXQUFBLENBQUE4RCxNQUFNO2NBQUN0TSxJQUFJLEVBQUMsTUFBTTtjQUFDOEIsT0FBTyxFQUFFcVAsVUFBVTtjQUFFcEgsS0FBSyxFQUFDO1lBQWdCLEVBQUcsQ0FDNUQsQ0FDRjtVQUVSIn0=