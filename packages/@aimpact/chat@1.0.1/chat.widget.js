System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/messages.code", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/components", "@aimpact/ailearn-app@0.0.18/config", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/toast", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0018Config) {
      dependency_19 = _aimpactAilearnApp0018Config;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.18"]]);
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
        hash: 194953849,
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
        hash: 2002156592,
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
              className: 'send'
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