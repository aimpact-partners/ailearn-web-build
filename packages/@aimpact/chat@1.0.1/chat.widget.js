System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/messages.code", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/components", "@aimpact/ailearn-app@0.0.14/config", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/toast", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Chat, ChatInput, RecordingButton, SystemModal, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_aimpactChatSdk100Voice) {
      dependency_5 = _aimpactChatSdk100Voice;
    }, function (_aimpactChat101Wrapper) {
      dependency_6 = _aimpactChat101Wrapper;
    }, function (_bgroupMediaManager100Recorder) {
      dependency_7 = _bgroupMediaManager100Recorder;
    }, function (_aimpactChatSdk100Core) {
      dependency_8 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Extensions) {
      dependency_9 = _aimpactChat101Extensions;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi003Icons) {
      dependency_11 = _pragmateUi003Icons;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_12 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101MessagesCode) {
      dependency_13 = _aimpactChat101MessagesCode;
    }, function (_aimpactChat101SharedComponents) {
      dependency_14 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi003Preload) {
      dependency_15 = _pragmateUi003Preload;
    }, function (_aimpactChat101SharedHooks) {
      dependency_16 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Form) {
      dependency_17 = _pragmateUi003Form;
    }, function (_pragmateUi003Components) {
      dependency_18 = _pragmateUi003Components;
    }, function (_aimpactAilearnApp0014Config) {
      dependency_19 = _aimpactAilearnApp0014Config;
    }, function (_pragmateUi003Image) {
      dependency_20 = _pragmateUi003Image;
    }, function (_pragmateUi003Modal) {
      dependency_21 = _pragmateUi003Modal;
    }, function (_pragmateUi003Toast) {
      dependency_22 = _pragmateUi003Toast;
    }, function (_aimpactChat101UiManager) {
      dependency_23 = _aimpactChat101UiManager;
    }, function (_aimpactChat101SharedIcons) {
      dependency_24 = _aimpactChat101SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.14"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/voice', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/core', dependency_8], ['@aimpact/chat/extensions', dependency_9], ['react', dependency_10], ['pragmate-ui/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/messages.code', dependency_13], ['@aimpact/chat/shared/components', dependency_14], ['pragmate-ui/preload', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['pragmate-ui/form', dependency_17], ['pragmate-ui/components', dependency_18], ['@aimpact/chat/config', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/toast', dependency_22], ['@aimpact/chat/ui/manager', dependency_23], ['@aimpact/chat/shared/icons', dependency_24]]);
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
        hash: 3073386497,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _recorder = require("@bgroup/media-manager/recorder");
          /* bundle */
          class AudioManager extends _model.ReactiveModel {
            #parent;
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #players = {
              web: _voice.Voice,
              lab: _voice.VoiceLab // brings support to manage voice lab audios
            };

            #player = 'web';
            get player() {
              return this.#currentPlayer;
            }
            #currentPlayer;
            constructor(parent) {
              super({});
              this.#recorder = new _recorder.Recorder();
              this.#parent = parent;
              this.reactiveProps(['autoplay']);
              this.#currentPlayer = new this.#players[this.#player]({
                language: _wrapper.AppWrapper.language,
                rate: _wrapper.AppWrapper.audioSpeed
              });
              _wrapper.AppWrapper.on('app.settings.change', this.ListenAppChanges);
            }
            ListenAppChanges = () => {
              this.#currentPlayer.set({
                rate: _wrapper.AppWrapper.audioSpeed,
                languuage: _wrapper.AppWrapper.language
              });
            };
            selectPlayer(name) {
              if (!this.#players[name]) throw new Error(`Player ${name} not found`);
              this.#player = name;
              this.trigger('change');
            }
          }
          exports.AudioManager = AudioManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 1326550910,
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
                if (typeof content === 'string' && [undefined, '', null].includes(content)) return;
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
        hash: 1901294743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Content = Content;
          var _react = require("react");
          var _useExtension = require("./use-extension");
          var _messages = require("@aimpact/chat/messages.code");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _extensionRenderer = require("./extension-renderer");
          function Content({
            separator
          }) {
            const {
              store,
              texts
            } = (0, _context.useChatContext)();
            const {
              messages
            } = store;
            const [totalMessages, setMessages] = _react.default.useState(messages.length ?? [].length);
            const [ref, ready, webComponentName] = (0, _useExtension.useExtension)('chat-intro');
            (0, _hooks.useBinder)([store], () => {
              setMessages(store.messages.length);
            }, 'new.message');
            return _react.default.createElement("div", {
              className: 'chat__content'
            }, _react.default.createElement(_extensionRenderer.ExtensionRenderer, {
              component: webComponentName,
              reference: ref
            }), ready && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_messages.Messages, {
              chat: store.chat,
              player: store.audioManager.player,
              current: store.currentMessage,
              store: store,
              messages: store.messages,
              texts: texts
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
        hash: 796657517,
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
              className: "send"
            }, _react.default.createElement(_input.ChatInput, {
              store: store,
              isWaiting: false
            }))));
          }
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
          const ChatContext = exports.ChatContext = _react.default.createContext({});
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
          const InputContext = exports.InputContext = _react.default.createContext(null);
          const useInputContext = () => _react.default.useContext(InputContext);
          exports.useInputContext = useInputContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/input/index
      ***********************************/

      ims.set('./views/input/index', {
        hash: 3323654969,
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
              store.sendMessage(audio);
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
        hash: 2364735830,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _player = require("./player");
          var _context = require("../context");
          var _context2 = require("./context");
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
            } = (0, _context2.useInputContext)();
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [showModal, setShowModal] = (0, _react.useState)(false);
            const {
              texts
            } = (0, _context.useChatContext)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsIiwiX3ZvaWNlIiwiX3dyYXBwZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImN1cnJlbnRQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImxhbmd1YWdlIiwiQXBwV3JhcHBlciIsInJhdGUiLCJhdWRpb1NwZWVkIiwib24iLCJMaXN0ZW5BcHBDaGFuZ2VzIiwic2V0IiwibGFuZ3V1YWdlIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwidHJpZ2dlciIsIl9jb3JlIiwiX2F1ZGlvIiwiX2V4dGVuc2lvbnMiLCJtZXNzYWdlcyIsIkVYVEVOU0lPTlMiLCJjYXRlZ29yeSIsImNoYXQiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJrYnMiLCJrbm93bGVkZ2VCb3hlcyIsInNlbGVjdGVkS2IiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsImlkIiwicGF0aCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZSIsImV4dGVuc2lvbnMiLCJNYXAiLCJhdXRvcGxheSIsImZldGNoaW5nIiwicmVhZHkiLCJDaGF0IiwiaXNSZWFkeSIsImxvYWRBbGwiLCJjdXJyZW50Q2hhdCIsImZvdW5kIiwia25vd2xlZGVCb3hTZWxlY3RlZCIsImtub3dsZWRnZUJveElkIiwiZGVmYXVsdCIsInRyaWdnZXJFdmVudCIsImV4dHMiLCJtZXRhZGF0YSIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNlbmRNZXNzYWdlIiwiY29udGVudCIsInBlcmZvcm1hbmNlIiwibWFyayIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwid2FpdGluZ1Jlc3BvbnNlIiwicmVzcG9uc2UiLCJvbkxpc3RlbiIsIm9uRW5kIiwib2ZmIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9yZWFjdCIsIl9pY29ucyIsIl9ob29rcyIsIkJhY2tBcnJvdyIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiaXNJbkNvbnRhaW5lciIsImNvbnRhaW5lciIsInBhcmVudE5vZGUiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZW5kUmVjdCIsInRocmVzaG9sZCIsImJvdHRvbSIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInZpc2libGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkljb25CdXR0b24iLCJyZWYiLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIl91c2VFeHRlbnNpb24iLCJfbWVzc2FnZXMiLCJfY29udGV4dCIsIl9leHRlbnNpb25SZW5kZXJlciIsIkNvbnRlbnQiLCJ0ZXh0cyIsInVzZUNoYXRDb250ZXh0IiwidG90YWxNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJsZW5ndGgiLCJ3ZWJDb21wb25lbnROYW1lIiwidXNlRXh0ZW5zaW9uIiwiRXh0ZW5zaW9uUmVuZGVyZXIiLCJjb21wb25lbnQiLCJyZWZlcmVuY2UiLCJNZXNzYWdlcyIsIkNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfaGVhZGVyIiwiX2lucHV0IiwiX0JhY2tBcnJvdyIsIl9jb250ZW50IiwiY2hhdEludHJvIiwicmVhZGVyIiwic2V0UmVhZGVyIiwiY2xzIiwiSGVhZGVyIiwiYXZvaWRDaGF0IiwiQ2hhdElucHV0IiwiaXNXYWl0aW5nIiwiX2NvbXBvbmVudHMiLCJfcHJlbG9hZCIsIkNoYXRTa2VsZXRvbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJQcmVsb2FkIiwid2lkdGgiLCJoZWlnaHQiLCJzZXRSZWFkeSIsImNvbnRyb2wiLCJvblJlYWR5IiwiZXZlbnQiLCJDaGF0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2V0QXV0b3BsYXkiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJoYW5kbGVBdXRvcGxheVRvZ2dsZSIsImhhbmRsZUNoYXRTZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm9uUmVhZGVyIiwiSWNvbiIsIklucHV0IiwibGFiZWwiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwidHlwZSIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlByb3ZpZGVyIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiX2Zvcm0iLCJfY29uZmlnIiwiX3JlY29yZGluZyIsIl9pbmRleCIsIl90ZXh0SW5wdXQiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsInRleHQiLCJzZXRUZXh0IiwiZGlzYWJsZWQiLCJzZW5kQXVkaW8iLCJzdG9wIiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJzeXN0ZW0iLCJwYXJhbXMiLCJjb25maWciLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJfdGltZXIiLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsImFjdGlvbiIsIl9pbWFnZSIsIl9tb2RhbCIsIl9wbGF5ZXIiLCJfY29udGV4dDIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwbGF5QWN0aW9uIiwicGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb25zIiwic3RhdGUiLCJyZWNvcmQiLCJvbkNsb3NlIiwiTW9kYWwiLCJvcGVuIiwicGVybWlzc2lvbnMiLCJJbWFnZSIsInNyYyIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwiX3RvYXN0IiwiVUlGb3JtIiwiY2xvc2VNb2RhbCIsInNldFZhbHVlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJUZXh0YXJlYSIsInJvd3MiLCJwbGFjZWhvbGRlciIsImRpYWxvZ1JlZiIsImFzc2lzdGFudCIsIm9wZW5Nb2RhbCIsImNsb3NlIiwibW9kZSIsInRleHRBcmVhUmVmIiwic3R5bGUiLCJzY3JvbGxIZWlnaHQiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwiX21hbmFnZXIiLCJfY29tcG9uZW50czIiLCJfaWNvbnMyIiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiUHJlbG9hZFNjcmVlbiIsImFsdCIsIklDT05TIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvbWVzc2FnZXMudHMiLCIvdHMvc3RvcmUvYXVkaW8udHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHMvdmlld3MvY2hhdC9CYWNrQXJyb3cudHN4IiwiL3RzL3ZpZXdzL2NoYXQvY29udGVudC50c3giLCIvdHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4IiwiL3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvdXNlLWV4dGVuc2lvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCIvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90ZXh0LWlucHV0LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDQyxVQUFVLENBQUNILEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUM5QixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9SLE1BQUEsQ0FBQVMsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDWSxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7OztVQzdC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