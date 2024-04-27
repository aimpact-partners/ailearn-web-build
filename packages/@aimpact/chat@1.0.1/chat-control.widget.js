System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/messages.code", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Chat, ChatInput, RecordingButton, SystemModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioManager: void 0,
    Chat: void 0,
    ChatInput: void 0,
    RecordingButton: void 0,
    SystemModal: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_3 = _beyondJsReact18Widgets112Base;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
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
    }, function (_pragmateUi011Icons) {
      dependency_11 = _pragmateUi011Icons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101MessagesCode) {
      dependency_13 = _aimpactChat101MessagesCode;
    }, function (_aimpactChat101SharedComponents) {
      dependency_14 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011Preload) {
      dependency_15 = _pragmateUi011Preload;
    }, function (_aimpactChat101SharedHooks) {
      dependency_16 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Form) {
      dependency_17 = _pragmateUi011Form;
    }, function (_pragmateUi011Components) {
      dependency_18 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_19 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Modal) {
      dependency_20 = _pragmateUi011Modal;
    }, function (_pragmateUi011Toast) {
      dependency_21 = _pragmateUi011Toast;
    }, function (_aimpactChat101UiManager) {
      dependency_22 = _aimpactChat101UiManager;
    }, function (_aimpactChat101SharedIcons) {
      dependency_23 = _aimpactChat101SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.3.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/voice', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/core', dependency_8], ['@aimpact/chat/extensions', dependency_9], ['react', dependency_10], ['pragmate-ui/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/messages.code', dependency_13], ['@aimpact/chat/shared/components', dependency_14], ['pragmate-ui/preload', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['pragmate-ui/form', dependency_17], ['pragmate-ui/components', dependency_18], ['@aimpact/chat/config', dependency_19], ['pragmate-ui/modal', dependency_20], ['pragmate-ui/toast', dependency_21], ['@aimpact/chat/ui/manager', dependency_22], ['@aimpact/chat/shared/icons', dependency_23]]);
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
        hash: 3693774678,
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
            const [, setMessages] = _react.default.useState(messages.length ?? [].length);
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
        hash: 2889823330,
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
            return [ref, ready || !webComponentName, webComponentName];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJnZXQiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsIiwiX3ZvaWNlIiwiX3dyYXBwZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImN1cnJlbnRQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImxhbmd1YWdlIiwiQXBwV3JhcHBlciIsInJhdGUiLCJhdWRpb1NwZWVkIiwib24iLCJsaXN0ZW5BcHBDaGFuZ2VzIiwic2V0IiwibGFuZ3V1YWdlIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwidHJpZ2dlciIsIl9jb3JlIiwiX2F1ZGlvIiwiX2V4dGVuc2lvbnMiLCJtZXNzYWdlcyIsIkVYVEVOU0lPTlMiLCJjYXRlZ29yeSIsImNoYXQiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJrYnMiLCJrbm93bGVkZ2VCb3hlcyIsInNlbGVjdGVkS2IiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsImlkIiwicGF0aCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZSIsImV4dGVuc2lvbnMiLCJNYXAiLCJhdXRvcGxheSIsImxvYWQiLCJjbGVhbiIsImZldGNoaW5nIiwicmVhZHkiLCJDaGF0IiwibG9hZEFsbCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJkZWZhdWx0IiwidHJpZ2dlckV2ZW50IiwiZXh0cyIsIm1ldGFkYXRhIiwiZm9yRWFjaCIsImV4dGVuc2lvbiIsImluZGV4Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ3YWl0aW5nUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiaXNJbkNvbnRhaW5lciIsInBhcmVudE5vZGUiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZW5kUmVjdCIsInRocmVzaG9sZCIsImJvdHRvbSIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xzIiwiaGFzIiwiY2xzQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb25CdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIl91c2VFeHRlbnNpb24iLCJfbWVzc2FnZXMiLCJfZXh0ZW5zaW9uUmVuZGVyZXIiLCJDb250ZW50IiwidGV4dHMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGVuZ3RoIiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsImNvbnRhaW5lclJlZiIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIkNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfaW5wdXQiLCJfYmFja0Fycm93IiwiX2NvbnRlbnQiLCJjaGF0SW50cm8iLCJyZWFkZXIiLCJhdm9pZENoYXQiLCJDaGF0SW5wdXQiLCJpc1dhaXRpbmciLCJfY29tcG9uZW50cyIsIl9wcmVsb2FkIiwiQ2hhdFNrZWxldG9uIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIlByZWxvYWQiLCJ3aWR0aCIsImhlaWdodCIsInNldFJlYWR5IiwiY29udHJvbCIsIm9uUmVhZHkiLCJldmVudCIsIkNoYXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJwcm9wcyIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJjb250ZXh0VmFsdWUiLCJ0cmFjZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX2NvbmZpZyIsIl9yZWNvcmRpbmciLCJfaW5kZXgiLCJfdGV4dElucHV0IiwiX2NvbnRleHQyIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0Iiwic2V0VGV4dCIsImRpc2FibGVkIiwic2VuZEF1ZGlvIiwicHJldmVudERlZmF1bHQiLCJzdG9wIiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJzeXN0ZW0iLCJwYXJhbXMiLCJjb25maWciLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJfdGltZXIiLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsImFjdGlvbiIsIl9tb2RhbCIsIl9wbGF5ZXIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwbGF5QWN0aW9uIiwicGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb25zIiwic3RhdGUiLCJyZWNvcmQiLCJvbkNsb3NlIiwiQWxlcnRNb2RhbCIsIm9wZW4iLCJzaG93IiwiY2VudGVyZWQiLCJwZXJtaXNzaW9ucyIsImludHJvIiwiSWNvbiIsImRlc2NyaXB0aW9uIiwiX3RvYXN0IiwiVUlGb3JtIiwiY2xvc2VNb2RhbCIsInNldFZhbHVlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJUZXh0YXJlYSIsInJvd3MiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibGFiZWwiLCJ0eXBlIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJtb2RlIiwidGV4dEFyZWFSZWYiLCJzdHlsZSIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJfbWFuYWdlciIsIl9jb21wb25lbnRzMiIsIl9pY29uczIiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIiwic3JjIiwiYWx0IiwiSUNPTlMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy92aWV3cy9jaGF0L2JhY2stYXJyb3cudHN4IiwiL3RzL3ZpZXdzL2NoYXQvY29udGVudC50c3giLCIvdHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4IiwiL3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvdXNlLWV4dGVuc2lvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy50c3giLCIvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFPTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2NBQ3pEQyxVQUFVLENBQUNMLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUM5QixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSU0sTUFBTUEsQ0FBQTtjQUNULE9BQU9WLE1BQUEsQ0FBQVcsSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFWLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7VUN0QkQ7O1VBRUFXLE1BQUEsQ0FBQUMsY0FBQSxDQUFBRixPQUFBO1lBQ0FHLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLE1BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsUUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixTQUFBLEdBQUFwQixPQUFBO1VBTU87VUFBWSxNQUFPcUIsWUFBYSxTQUFRSixNQUFBLENBQUFLLGFBQXFCO1lBR25F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