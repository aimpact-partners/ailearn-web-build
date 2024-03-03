System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/messages.code", "pragmate-ui@0.0.6/perfect-scrollbar", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/toast", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context3) {
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
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_3 = _beyondJsReact18Widgets104Base;
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
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
    }, function (_pragmateUi006Icons) {
      dependency_11 = _pragmateUi006Icons;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_12 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101MessagesCode) {
      dependency_13 = _aimpactChat101MessagesCode;
    }, function (_pragmateUi006PerfectScrollbar) {
      dependency_14 = _pragmateUi006PerfectScrollbar;
    }, function (_aimpactChat101SharedComponents) {
      dependency_15 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi006Preload) {
      dependency_16 = _pragmateUi006Preload;
    }, function (_aimpactChat101SharedHooks) {
      dependency_17 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Form) {
      dependency_18 = _pragmateUi006Form;
    }, function (_pragmateUi006Components) {
      dependency_19 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_20 = _aimpactAilearnApp0024Config;
    }, function (_pragmateUi006Modal) {
      dependency_21 = _pragmateUi006Modal;
    }, function (_pragmateUi006Toast) {
      dependency_22 = _pragmateUi006Toast;
    }, function (_aimpactChat101UiManager) {
      dependency_23 = _aimpactChat101UiManager;
    }, function (_aimpactChat101SharedIcons) {
      dependency_24 = _aimpactChat101SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.1"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/chat-control",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/voice', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/core', dependency_8], ['@aimpact/chat/extensions', dependency_9], ['react', dependency_10], ['pragmate-ui/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/messages.code', dependency_13], ['pragmate-ui/perfect-scrollbar', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['pragmate-ui/preload', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['pragmate-ui/form', dependency_18], ['pragmate-ui/components', dependency_19], ['@aimpact/chat/config', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/toast', dependency_22], ['@aimpact/chat/ui/manager', dependency_23], ['@aimpact/chat/shared/icons', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-chat-control",
        "attrs": ["id", "container"],
        "vspecifier": "@aimpact/chat@1.0.1/chat-control.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/chat-control.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2314770366,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager(this.attributes.get('id'));
              globalThis.store = this.#store;
              return this.#store;
            }
            get Widget() {
              return _views.View;
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
        hash: 870182366,
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
              _wrapper.AppWrapper.on('app.settings.change', this.listenAppChanges);
            }
            listenAppChanges = () => {
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
        hash: 2738149658,
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
            #id;
            constructor(id) {
              super(id);
              this.#id = id;
              this.reactiveProps(['waitingResponse', 'autoplay']);
              this.autoplay = true;
              this.load(id);
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

      /***************************************
      INTERNAL MODULE: ./views/chat/back-arrow
      ***************************************/

      ims.set('./views/chat/back-arrow', {
        hash: 2197473450,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BackArrow = BackArrow;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          function BackArrow({
            store,
            separator
          }) {
            const icon = _react.default.useRef(null);
            const {
              attributes,
              scrollPosition
            } = (0, _context.useChatContext)();
            const ref = _react.default.useRef(null);
            (0, _hooks.useBinder)([store], () => globalThis.setTimeout(() => {
              const container = ref.current.closest('.chat-control__container').querySelector('.chat__content-scroll-layer');
              if (!container) return;
              const distanceFromBottom = container.scrollHeight - container.clientHeight - container.scrollTop;
              if (distanceFromBottom <= 100) {
                ref.current.classList.remove('show');
                goToBottom();
              } else {
                ref.current.classList.add('show');
              }
            }, 100), 'new.message');
            const goToBottom = () => {
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
              const container = ref.current.closest('.chat-control__container').querySelector('.chat__content-scroll-layer');
              const handleScroll = () => {
                // Calculate the distance from the bottom
                if (!container) return;
                const distanceFromBottom = container.scrollHeight - container.clientHeight - container.scrollTop;
                // C
                if (distanceFromBottom <= 100) {
                  ref.current.classList.remove('show');
                } else {
                  ref.current.classList.add('show');
                }
              };
              container.addEventListener('scroll', handleScroll);
              return () => {
                container?.removeEventListener('scroll', handleScroll);
              };
            }, []);
            let cls = `scroll-bottom show circle`;
            if (attributes.has('container')) cls += `scroll-bottom--${attributes.get('container')}`;
            const clsContainer = `container__icon ${attributes.has('container') ? ` container--${attributes.get('container')}` : ''}`;
            return _react.default.createElement("div", {
              className: clsContainer,
              ref: ref
            }, _react.default.createElement(_icons.IconButton, {
              ref: icon,
              icon: 'backArrow',
              variant: 'tertiary',
              className: cls,
              onClick: goToBottom
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/chat/content
      ************************************/

      ims.set('./views/chat/content', {
        hash: 1180810040,
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
              texts,
              attributes
            } = (0, _context.useChatContext)();
            const {
              messages
            } = store;
            const [totalMessages, setMessages] = _react.default.useState(messages.length ?? [].length);
            const [ref, ready, webComponentName] = (0, _useExtension.useExtension)('chat-intro');
            const containerRef = _react.default.useRef(null);
            (0, _hooks.useBinder)([store], () => {
              setMessages(store.messages.length);
            }, 'new.message');
            let cls = `chat__content`;
            if (attributes.has('container')) cls += ` container--${attributes.get('container')}`;
            return _react.default.createElement("div", {
              className: 'chat__content-scroll-layer',
              ref: containerRef
            }, _react.default.createElement("div", {
              className: cls
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
            }))));
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
        hash: 3942333153,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _context = require("../context");
          var _input = require("../input");
          var _backArrow = require("./back-arrow");
          var _content = require("./content");
          /*bundle*/
          function Chat() {
            const {
              store
            } = (0, _context.useChatContext)();
            const chatIntro = store.extensions.get('chat-intro');
            const [reader] = _react.default.useState(false);
            const separator = _react.default.useRef(null);
            let cls = `chat-control__container${reader ? ' reader__container' : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_content.Content, {
              separator: separator
            }), _react.default.createElement(_backArrow.BackArrow, {
              store: store,
              separator: separator
            }), !chatIntro?.metadata?.avoidChat && _react.default.createElement(_input.ChatInput, {
              store: store,
              isWaiting: false
            }));
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
        hash: 2340798180,
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4081883635,
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
            store,
            ...props
          }) {
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [scrollPosition, setScrollPosition] = _react.default.useState('top');
            const {
              autoplay,
              messages,
              audioManager: {
                player
              }
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setFetching(store.fetching);
              setReady(store.ready);
            });
            const contextValue = {
              setScrollPosition: value => {
                if (!value) console.trace('setScrollPosition called with no value');
                setScrollPosition(value);
              },
              scrollPosition,
              store,
              texts,
              autoplay,
              messages,
              player,
              attributes: props.attributes
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
        hash: 3603847384,
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
          var _context2 = require("../context");
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
              audioManager: {
                recorder
              }
            } = store;
            const {
              attributes
            } = (0, _context2.useChatContext)();
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
            let cls = `input-container ${waiting || isWaiting ? 'waiting' : ''}`;
            // Defines the "system" that the chat will use
            const {
              system
            } = _config.default.params.config;
            if (attributes.has('container')) cls += ` container--${attributes.get('container')}`;
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
        hash: 2473115770,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
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
            return _react.default.createElement(_react.default.Fragment, null, showModal && _react.default.createElement(_modal.AlertModal, {
              open: true,
              show: true,
              onClose: onClose,
              centered: true
            }, _react.default.createElement("div", {
              className: 'permissions__modal-container'
            }, _react.default.createElement("div", {
              className: 'title-intro__modal-container'
            }, _react.default.createElement("span", {
              className: 'intro__modal-text p2'
            }, texts.permissions.intro), _react.default.createElement("p", {
              className: 'title__modal-text h3'
            }, texts.permissions.title)), _react.default.createElement(_icons.Icon, {
              className: 'mic__modal-icon lg my-10',
              icon: 'mic'
            }), _react.default.createElement("p", {
              className: 'description__modal-text'
            }, texts.permissions.description))), _react.default.createElement(_components.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJnZXQiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsIiwiX3ZvaWNlIiwiX3dyYXBwZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImN1cnJlbnRQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImxhbmd1YWdlIiwiQXBwV3JhcHBlciIsInJhdGUiLCJhdWRpb1NwZWVkIiwib24iLCJsaXN0ZW5BcHBDaGFuZ2VzIiwic2V0IiwibGFuZ3V1YWdlIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwidHJpZ2dlciIsIl9jb3JlIiwiX2F1ZGlvIiwiX2V4dGVuc2lvbnMiLCJtZXNzYWdlcyIsIkVYVEVOU0lPTlMiLCJjYXRlZ29yeSIsImNoYXQiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJrYnMiLCJrbm93bGVkZ2VCb3hlcyIsInNlbGVjdGVkS2IiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsImlkIiwicGF0aCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZSIsImV4dGVuc2lvbnMiLCJNYXAiLCJhdXRvcGxheSIsImxvYWQiLCJjbGVhbiIsImZldGNoaW5nIiwicmVhZHkiLCJDaGF0IiwibG9hZEFsbCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJkZWZhdWx0IiwidHJpZ2dlckV2ZW50IiwiZXh0cyIsIm1ldGFkYXRhIiwiZm9yRWFjaCIsImV4dGVuc2lvbiIsImluZGV4Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ3YWl0aW5nUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiaXNJbkNvbnRhaW5lciIsInBhcmVudE5vZGUiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZW5kUmVjdCIsInRocmVzaG9sZCIsImJvdHRvbSIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xzIiwiaGFzIiwiY2xzQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb25CdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIl91c2VFeHRlbnNpb24iLCJfbWVzc2FnZXMiLCJfZXh0ZW5zaW9uUmVuZGVyZXIiLCJDb250ZW50IiwidGV4dHMiLCJ0b3RhbE1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ1c2VTdGF0ZSIsImxlbmd0aCIsIndlYkNvbXBvbmVudE5hbWUiLCJ1c2VFeHRlbnNpb24iLCJjb250YWluZXJSZWYiLCJFeHRlbnNpb25SZW5kZXJlciIsImNvbXBvbmVudCIsInJlZmVyZW5jZSIsIkZyYWdtZW50IiwiTWVzc2FnZXMiLCJDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiX2lucHV0IiwiX2JhY2tBcnJvdyIsIl9jb250ZW50IiwiY2hhdEludHJvIiwicmVhZGVyIiwiYXZvaWRDaGF0IiwiQ2hhdElucHV0IiwiaXNXYWl0aW5nIiwiX2NvbXBvbmVudHMiLCJfcHJlbG9hZCIsIkNoYXRTa2VsZXRvbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJQcmVsb2FkIiwid2lkdGgiLCJoZWlnaHQiLCJzZXRSZWFkeSIsImNvbnRyb2wiLCJvblJlYWR5IiwiZXZlbnQiLCJDaGF0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0IiwicHJvcHMiLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFNjcm9sbFBvc2l0aW9uIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDb250cm9sIiwiQ2hhdE5vdEZvdW5kIiwiUHJvdmlkZXIiLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dENvbnRleHQiLCJfZm9ybSIsIl9jb25maWciLCJfcmVjb3JkaW5nIiwiX2luZGV4IiwiX3RleHRJbnB1dCIsIl9jb250ZXh0MiIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwidGV4dCIsInNldFRleHQiLCJkaXNhYmxlZCIsInNlbmRBdWRpbyIsInByZXZlbnREZWZhdWx0Iiwic3RvcCIsImhhbmRsZVNlbmQiLCJvblN1Ym1pdCIsInJlcGxhY2VBbGwiLCJ0cmltIiwic3lzdGVtIiwicGFyYW1zIiwiY29uZmlnIiwiU3lzdGVtTW9kYWwiLCJGb3JtIiwiVGV4dElucHV0IiwiQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiX3RpbWVyIiwiUGxheWVyIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJfbW9kYWwiLCJfcGxheWVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicGxheUFjdGlvbiIsInBlcm1pc3Npb24iLCJoYXNQZXJtaXNzaW9ucyIsInN0YXRlIiwicmVjb3JkIiwib25DbG9zZSIsIkFsZXJ0TW9kYWwiLCJvcGVuIiwic2hvdyIsImNlbnRlcmVkIiwicGVybWlzc2lvbnMiLCJpbnRybyIsIkljb24iLCJkZXNjcmlwdGlvbiIsIl90b2FzdCIsIlVJRm9ybSIsImNsb3NlTW9kYWwiLCJzZXRWYWx1ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0QXJlYVZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJwdWJsaXNoIiwic3RhdHVzIiwidG9hc3QiLCJzdWNjZXNzIiwiVGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImxhYmVsIiwidHlwZSIsImRpYWxvZ1JlZiIsImFzc2lzdGFudCIsIm9wZW5Nb2RhbCIsImNsb3NlIiwibW9kZSIsInRleHRBcmVhUmVmIiwic3R5bGUiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwiX21hbmFnZXIiLCJfY29tcG9uZW50czIiLCJfaWNvbnMyIiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiUHJlbG9hZFNjcmVlbiIsInNyYyIsImFsdCIsIklDT05TIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvbWVzc2FnZXMudHMiLCIvdHMvc3RvcmUvYXVkaW8udHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHMvdmlld3MvY2hhdC9iYWNrLWFycm93LnRzeCIsIi90cy92aWV3cy9jaGF0L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NoYXQvZXh0ZW5zaW9uLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFPTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2NBQ3pEQyxVQUFVLENBQUNMLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUM5QixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSU0sTUFBTUEsQ0FBQTtjQUNULE9BQU9WLE1BQUEsQ0FBQVcsSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFWLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7VUN0QkQ7O1VBRUFXLE1BQUEsQ0FBQUMsY0FBQSxDQUFBRixPQUFBO1lBQ0FHLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLE1BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsUUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixTQUFBLEdBQUFwQixPQUFBO1VBTU87VUFBWSxNQUFPcUIsWUFBYSxTQUFRSixNQUFB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