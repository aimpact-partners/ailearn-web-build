System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/messages.code", "pragmate-ui@0.1.1/perfect-scrollbar", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context3) {
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
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_2 = _beyondJsReact18Widgets112Base;
    }, function (_beyondJsReactive1112Model) {
      dependency_3 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Voice) {
      dependency_4 = _aimpactChatSdk100Voice;
    }, function (_aimpactChat101Wrapper) {
      dependency_5 = _aimpactChat101Wrapper;
    }, function (_bgroupMediaManager100Recorder) {
      dependency_6 = _bgroupMediaManager100Recorder;
    }, function (_aimpactChatSdk100Core) {
      dependency_7 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Extensions) {
      dependency_8 = _aimpactChat101Extensions;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi011Icons) {
      dependency_10 = _pragmateUi011Icons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101MessagesCode) {
      dependency_12 = _aimpactChat101MessagesCode;
    }, function (_pragmateUi011PerfectScrollbar) {
      dependency_13 = _pragmateUi011PerfectScrollbar;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-sdk/voice', dependency_4], ['@aimpact/chat/wrapper', dependency_5], ['@bgroup/media-manager/recorder', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@aimpact/chat/extensions', dependency_8], ['react', dependency_9], ['pragmate-ui/icons', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/messages.code', dependency_12], ['pragmate-ui/perfect-scrollbar', dependency_13], ['@aimpact/chat/shared/components', dependency_14], ['pragmate-ui/preload', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['pragmate-ui/form', dependency_17], ['pragmate-ui/components', dependency_18], ['@aimpact/chat/config', dependency_19], ['pragmate-ui/modal', dependency_20], ['pragmate-ui/toast', dependency_21], ['@aimpact/chat/ui/manager', dependency_22], ['@aimpact/chat/shared/icons', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-chat-control",
        "attrs": ["id", "container", "disabled"],
        "vspecifier": "@aimpact/chat@1.0.1/chat-control.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/chat-control.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1654100939,
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
            constructor(...args) {
              super(...args);
              this.attributes.on('change', () => this.#store?.checkAttributes(this.attributes));
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
        hash: 2692844052,
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
            #disabled;
            get disabled() {
              return this.#disabled;
            }
            set disabled(disabled) {
              if (this.#disabled === disabled) return;
              this.#disabled = disabled;
              this.triggerEvent('change');
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
            checkAttributes(attributes) {
              this.disabled = attributes.get('disabled') === 'true';
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/chat/back-arrow
      ***************************************/

      ims.set('./views/chat/back-arrow', {
        hash: 1969928412,
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
              const container = ref.current.closest('.chat-control__container').querySelector('.chat__content');
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
            _react.default.useEffect(() => {
              const container = ref.current.closest('.chat-control__container').querySelector('.chat__content');
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
        hash: 640135663,
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
            (0, _hooks.useBinder)([store], () => {
              setMessages(store.messages.length);
            }, 'new.message');
            let cls = `chat__content`;
            if (attributes.has('container')) cls += ` container--${attributes.get('container')}`;
            return _react.default.createElement("div", {
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
        hash: 1679945563,
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
          function Chat(props) {
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
            }), _react.default.createElement("div", {
              className: 'footer-container'
            }, _react.default.createElement(_backArrow.BackArrow, {
              store: store,
              separator: separator
            }), !chatIntro?.metadata?.avoidChat && _react.default.createElement(_input.ChatInput, {
              store: store,
              isWaiting: false
            })));
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
        hash: 3186216388,
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
        hash: 1111216055,
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
              event.stopPropagation();
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
            let cls = `input-container ${waiting || isWaiting || fetching ? 'is-fetching' : ''}`;
            if (store.disabled) cls += 'is-disabled';
            // Defines the "system" that the chat will use
            const {
              system
            } = _config.default.params.config;
            // if (attributes.has('container')) cls += ` container--${attributes.get('container')}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_context.InputContext.Provider, {
              value: {
                store,
                onSubmit,
                recorder,
                setRecording,
                recording,
                disabled: store.disabled
              }
            }, system && _react.default.createElement(_index.SystemModal, {
              chat: store.chat
            }), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: 'chat-input-form'
            }, _react.default.createElement(_textInput.TextInput, {
              store: store,
              text: text,
              disabled: store.disabled,
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
        hash: 1981085893,
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
            text,
            disabled
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
              disabled: fetching || disabled
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJnZXQiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsImNvbnN0cnVjdG9yIiwiYXJncyIsIm9uIiwiY2hlY2tBdHRyaWJ1dGVzIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImxhbmd1YWdlIiwiQXBwV3JhcHBlciIsInJhdGUiLCJhdWRpb1NwZWVkIiwibGlzdGVuQXBwQ2hhbmdlcyIsInNldCIsImxhbmd1dWFnZSIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInRyaWdnZXIiLCJfY29yZSIsIl9hdWRpbyIsIl9leHRlbnNpb25zIiwibWVzc2FnZXMiLCJFWFRFTlNJT05TIiwiY2F0ZWdvcnkiLCJjaGF0IiwiY2hhdHMiLCJpdGVtcyIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwia2JzIiwia25vd2xlZGdlQm94ZXMiLCJzZWxlY3RlZEtiIiwia2IiLCJzZWxlY3RlZE1vZGVsIiwibW9kZWwiLCJub3RGb3VuZCIsInNlbGVjdGVkS2JQYXRoIiwiZmluZCIsImkiLCJpZCIsInBhdGgiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJkaXNhYmxlZCIsInRyaWdnZXJFdmVudCIsImV4dGVuc2lvbnMiLCJNYXAiLCJhdXRvcGxheSIsImxvYWQiLCJjbGVhbiIsImZldGNoaW5nIiwicmVhZHkiLCJDaGF0IiwibG9hZEFsbCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJkZWZhdWx0IiwiZXh0cyIsIm1ldGFkYXRhIiwiZm9yRWFjaCIsImV4dGVuc2lvbiIsImluZGV4Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ3YWl0aW5nUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX3VzZUV4dGVuc2lvbiIsIl9tZXNzYWdlcyIsIl9leHRlbnNpb25SZW5kZXJlciIsIkNvbnRlbnQiLCJ0ZXh0cyIsInRvdGFsTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGVuZ3RoIiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIkNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfaW5wdXQiLCJfYmFja0Fycm93IiwiX2NvbnRlbnQiLCJwcm9wcyIsImNoYXRJbnRybyIsInJlYWRlciIsImF2b2lkQ2hhdCIsIkNoYXRJbnB1dCIsImlzV2FpdGluZyIsIl9jb21wb25lbnRzIiwiX3ByZWxvYWQiLCJDaGF0U2tlbGV0b24iLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiUHJlbG9hZCIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0UmVhZHkiLCJjb250cm9sIiwib25SZWFkeSIsImV2ZW50IiwiQ2hhdENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJjb250ZXh0VmFsdWUiLCJ0cmFjZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX2NvbmZpZyIsIl9yZWNvcmRpbmciLCJfaW5kZXgiLCJfdGV4dElucHV0IiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0Iiwic2V0VGV4dCIsInNlbmRBdWRpbyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic3RvcCIsImhhbmRsZVNlbmQiLCJvblN1Ym1pdCIsInJlcGxhY2VBbGwiLCJ0cmltIiwic3lzdGVtIiwicGFyYW1zIiwiY29uZmlnIiwiU3lzdGVtTW9kYWwiLCJGb3JtIiwiVGV4dElucHV0IiwiQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiX3RpbWVyIiwiUGxheWVyIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJfbW9kYWwiLCJfcGxheWVyIiwiX2NvbnRleHQyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicGxheUFjdGlvbiIsInBlcm1pc3Npb24iLCJoYXNQZXJtaXNzaW9ucyIsInN0YXRlIiwicmVjb3JkIiwib25DbG9zZSIsIkFsZXJ0TW9kYWwiLCJvcGVuIiwic2hvdyIsImNlbnRlcmVkIiwicGVybWlzc2lvbnMiLCJpbnRybyIsIkljb24iLCJkZXNjcmlwdGlvbiIsIl90b2FzdCIsIlVJRm9ybSIsImNsb3NlTW9kYWwiLCJzZXRWYWx1ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0QXJlYVZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJwdWJsaXNoIiwic3RhdHVzIiwidG9hc3QiLCJzdWNjZXNzIiwiVGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImxhYmVsIiwidHlwZSIsImRpYWxvZ1JlZiIsImFzc2lzdGFudCIsIm9wZW5Nb2RhbCIsImNsb3NlIiwibW9kZSIsInRleHRBcmVhUmVmIiwic3R5bGUiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwiX21hbmFnZXIiLCJfY29tcG9uZW50czIiLCJfaWNvbnMyIiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiUHJlbG9hZFNjcmVlbiIsInNyYyIsImFsdCIsIklDT05TIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvbWVzc2FnZXMudHMiLCIvdHMvc3RvcmUvYXVkaW8udHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHMvdmlld3MvY2hhdC9iYWNrLWFycm93LnRzeCIsIi90cy92aWV3cy9jaGF0L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NoYXQvZXh0ZW5zaW9uLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBT087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztjQUN6REMsVUFBVSxDQUFDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFBLEtBQU07Y0FDOUIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlNLE1BQU1BLENBQUE7Y0FDVCxPQUFPVixNQUFBLENBQUFXLElBQUk7WUFDWjtZQUVBQyxZQUFZLEdBQUdDLElBQUk7Y0FDbEIsS0FBSyxDQUFDLEdBQUdBLElBQUksQ0FBQztjQUVkLElBQUksQ0FBQ04sVUFBVSxDQUFDTyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUFWLEtBQU0sRUFBRVcsZUFBZSxDQUFDLElBQUksQ0FBQ1IsVUFBVSxDQUFDLENBQUM7WUFDbEY7O1VBQ0FTLE9BQUEsQ0FBQWQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7OztVQzVCRDs7VUFFQWUsTUFBQSxDQUFBQyxjQUFBLENBQUFGLE9BQUE7WUFDQUcsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFDLE1BQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBc0IsTUFBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF1QixRQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLFNBQUEsR0FBQXhCLE9BQUE7VUFNTztVQUFZLE1BQU95QixZQUFhLFNBQVFKLE1BQUEsQ0FBQUssYUFBcUI7WUFHbkUsQ0FBQUMsTUFBTztZQUNQLENBQUFDLFFBQVM7WUFFVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLE9BQVEsR0FBRztjQUNWQyxHQUFHLEVBQUVSLE1BQUEsQ0FBQVMsS0FBSztjQUNWQyxHQUFHLEVBQUVWLE1BQUEsQ0FBQVcsUUFBUSxDQUFFO2FBQ2Y7WUFFRCxDQUFBQyxNQUFPLEdBQUcsS0FBSztZQUNmLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQyxhQUFjO1lBQzNCO1lBRUEsQ0FBQUEsYUFBYztZQUNkdEIsWUFBWWMsTUFBTTtjQUNqQixLQUFLLENBQUMsRUFBRSxDQUFDO2NBQ1QsSUFBSSxDQUFDLENBQUFDLFFBQVMsR0FBRyxJQUFJSixTQUFBLENBQUFZLFFBQVEsRUFBRTtjQUMvQixJQUFJLENBQUMsQ0FBQVQsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQ1UsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7Y0FDaEMsSUFBSSxDQUFDLENBQUFGLGFBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBTixPQUFRLENBQUMsSUFBSSxDQUFDLENBQUFLLE1BQU8sQ0FBQyxDQUFDO2dCQUNyREksUUFBUSxFQUFFZixRQUFBLENBQUFnQixVQUFVLENBQUNELFFBQVE7Z0JBQzdCRSxJQUFJLEVBQUVqQixRQUFBLENBQUFnQixVQUFVLENBQUNFO2VBQ2pCLENBQUM7Y0FFRmxCLFFBQUEsQ0FBQWdCLFVBQVUsQ0FBQ3hCLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMyQixnQkFBZ0IsQ0FBQztZQUM1RDtZQUVBQSxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCLElBQUksQ0FBQyxDQUFBUCxhQUFjLENBQUNRLEdBQUcsQ0FBQztnQkFDdkJILElBQUksRUFBRWpCLFFBQUEsQ0FBQWdCLFVBQVUsQ0FBQ0UsVUFBVTtnQkFDM0JHLFNBQVMsRUFBRXJCLFFBQUEsQ0FBQWdCLFVBQVUsQ0FBQ0Q7ZUFDdEIsQ0FBQztZQUNILENBQUM7WUFFRE8sWUFBWUEsQ0FBQ0MsSUFBSTtjQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFqQixPQUFRLENBQUNpQixJQUFJLENBQUMsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyxVQUFVRCxJQUFJLFlBQVksQ0FBQztjQUVyRSxJQUFJLENBQUMsQ0FBQVosTUFBTyxHQUFHWSxJQUFJO2NBQ25CLElBQUksQ0FBQ0UsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2Qjs7VUFDQS9CLE9BQUEsQ0FBQVEsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hERCxJQUFBSixNQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQWlELEtBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBdUIsUUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUFrRCxNQUFBLEdBQUFsRCxPQUFBO1VBQ0EsSUFBQW1ELFdBQUEsR0FBQW5ELE9BQUE7VUFPTSxNQUFPTyxZQUFhLFNBQVFjLE1BQUEsQ0FBQUssYUFBcUI7WUFDdEQsQ0FBQTBCLFFBQVM7WUFLVCxDQUFBQyxVQUFXLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDNUIsSUFBSUQsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBTixJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxDQUFBUSxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFDQSxDQUFBQyxLQUFNLEdBQUdqQyxRQUFBLENBQUFnQixVQUFVLENBQUNpQixLQUFLO1lBQ3pCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLENBQUNDLEtBQUssSUFBSSxFQUFFO1lBQy9CO1lBRUEsQ0FBQUMsS0FBTSxHQUFpQixJQUFJUixNQUFBLENBQUF6QixZQUFZLENBQUMsSUFBSSxDQUFDO1lBQzdDLElBQUlrQyxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTTtZQUNuQjtZQUVBLENBQUFFLEdBQUksR0FBR3JDLFFBQUEsQ0FBQWdCLFVBQVUsQ0FBQ3NCLGNBQWM7WUFDaEMsSUFBSUQsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUksQ0FBQ0gsS0FBSyxJQUFJLEVBQUU7WUFDN0I7WUFFQSxDQUFBSyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFDQSxJQUFJQSxVQUFVQSxDQUFDQyxFQUFFO2NBQ2hCLElBQUksQ0FBQyxDQUFBRCxVQUFXLEdBQUdDLEVBQUU7WUFDdEI7WUFFQSxDQUFBQyxhQUFjLEdBQUcsT0FBTztZQUN4QixJQUFJQSxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGFBQWM7WUFDM0I7WUFDQSxJQUFJQSxhQUFhQSxDQUFDQyxLQUFLO2NBQ3RCLElBQUksQ0FBQyxDQUFBRCxhQUFjLEdBQUdDLEtBQUs7WUFDNUI7WUFFQSxDQUFBQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxJQUFJQSxRQUFRQSxDQUFDQSxRQUFRO2NBQ3BCLElBQUksQ0FBQyxDQUFBQSxRQUFTLEdBQUdBLFFBQVE7WUFDMUI7WUFFQSxJQUFJQyxjQUFjQSxDQUFBO2NBQ2pCLE1BQU1MLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQUYsR0FBSSxDQUFDSCxLQUFLLENBQUNXLElBQUksQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQVIsVUFBVyxDQUFDO2NBQ3ZFLE9BQU9BLFVBQVUsRUFBRVMsSUFBSSxJQUFJLGtCQUFrQjtZQUM5QztZQUVBLENBQUFDLGNBQWU7WUFDZixJQUFJQSxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGNBQWU7WUFDNUI7WUFFQSxJQUFJQSxjQUFjQSxDQUFDQyxPQUFPO2NBQ3pCLElBQUlBLE9BQU8sRUFBRUgsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFBRSxjQUFlLEVBQUVGLEVBQUUsRUFBRTtjQUM5QyxJQUFJLENBQUMsQ0FBQUUsY0FBZSxHQUFHQyxPQUFPO1lBQy9CO1lBRUEsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsSUFBSUEsUUFBUUEsQ0FBQ0EsUUFBUTtjQUNwQixJQUFJLElBQUksQ0FBQyxDQUFBQSxRQUFTLEtBQUtBLFFBQVEsRUFBRTtjQUNqQyxJQUFJLENBQUMsQ0FBQUEsUUFBUyxHQUFHQSxRQUFRO2NBQ3pCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM1QjtZQUVBLENBQUFDLFVBQVcsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDdkIsSUFBSUQsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFDQSxDQUFBTixFQUFHO1lBQ0h6RCxZQUFZeUQsRUFBRTtjQUNiLEtBQUssQ0FBQ0EsRUFBRSxDQUFDO2NBQ1QsSUFBSSxDQUFDLENBQUFBLEVBQUcsR0FBR0EsRUFBRTtjQUNiLElBQUksQ0FBQ2pDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO2NBQ25ELElBQUksQ0FBQ3lDLFFBQVEsR0FBRyxJQUFJO2NBQ3BCLElBQUksQ0FBQ0MsSUFBSSxDQUFDVCxFQUFFLENBQUM7WUFDZDtZQUVBVSxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDQyxRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUNDLEtBQUssR0FBRyxLQUFLO1lBQ25CO1lBRUFILElBQUksR0FBRyxNQUFPVCxFQUFVLElBQUk7Y0FDM0IsSUFBSSxDQUFDQSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDWSxLQUFLLEdBQUcsSUFBSTtnQkFDakIsSUFBSSxDQUFDaEIsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCOztjQUdELElBQUksQ0FBQ2UsUUFBUSxHQUFHLElBQUk7Y0FFcEIsTUFBTTFCLElBQUksR0FBRyxJQUFJTixLQUFBLENBQUFrQyxJQUFJLENBQUM7Z0JBQUViO2NBQUUsQ0FBRSxDQUFDO2NBRTdCLE1BQU1mLElBQUksQ0FBQzZCLE9BQU8sQ0FBQztnQkFBRWQ7Y0FBRSxDQUFFLENBQUM7Y0FDMUI1RCxVQUFVLENBQUM2QyxJQUFJLEdBQUdBLElBQUk7Y0FDdEJoQyxRQUFBLENBQUFnQixVQUFVLENBQUM4QyxXQUFXLEdBQUc5QixJQUFJO2NBRTdCLElBQUksQ0FBQ0EsSUFBSSxDQUFDK0IsS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUNMLFFBQVEsR0FBRyxLQUFLO2dCQUNyQixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNoQixRQUFRLEdBQUcsSUFBSTtnQkFDcEI7O2NBR0QsTUFBTXFCLG1CQUFtQixHQUFHLElBQUksQ0FBQyxDQUFBM0IsR0FBSSxDQUFDSCxLQUFLLENBQUNXLElBQUksQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEVBQUUsS0FBS2YsSUFBSSxDQUFDaUMsY0FBYyxDQUFDO2NBQ25GLElBQUksQ0FBQyxDQUFBMUIsVUFBVyxHQUFHeUIsbUJBQW1CLEdBQUdBLG1CQUFtQixDQUFDakIsRUFBRSxHQUFHLFNBQVM7Y0FDM0UsSUFBSSxDQUFDWCxZQUFZLENBQUN6QixNQUFNLENBQUNTLEdBQUcsQ0FBQztnQkFDNUJMLFFBQVEsRUFBRWlCLElBQUksQ0FBQ2pCLFFBQVEsRUFBRW1ELE9BQU8sSUFBSWxFLFFBQUEsQ0FBQWdCLFVBQVUsQ0FBQ0Q7ZUFDL0MsQ0FBQztjQUNGO2NBQ0FpQixJQUFJLENBQUN4QyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQUs7Z0JBQ3RCLElBQUksQ0FBQyxDQUFBcUMsUUFBUyxHQUFHRyxJQUFJLENBQUNILFFBQVEsRUFBRUssS0FBSztnQkFDckMsSUFBSSxDQUFDa0IsWUFBWSxDQUFDLGFBQWEsQ0FBQztjQUNqQyxDQUFDLENBQUM7Y0FFRixJQUFJLENBQUMsQ0FBQXBCLElBQUssR0FBR0EsSUFBSTtjQUNqQixNQUFNbUMsSUFBSSxHQUFHLE1BQU12QyxXQUFBLENBQUF5QixVQUFVLENBQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTFCLFVBQVcsRUFBRUUsSUFBSSxDQUFDb0MsUUFBUSxDQUFDO2NBRW5FLElBQUksQ0FBQyxDQUFBdEMsVUFBVyxDQUFDdUMsT0FBTyxDQUFDLENBQUNDLFNBQVMsRUFBRUMsS0FBSyxLQUFJO2dCQUM3QyxJQUFJLENBQUMsQ0FBQWxCLFVBQVcsQ0FBQ2pDLEdBQUcsQ0FBQ2tELFNBQVMsRUFBRUgsSUFBSSxDQUFDSSxLQUFLLENBQUMsQ0FBQztjQUM3QyxDQUFDLENBQUM7Y0FFRixJQUFJLENBQUMsQ0FBQTFDLFFBQVMsR0FBR0csSUFBSSxDQUFDSCxRQUFRLENBQUNLLEtBQUs7Y0FDcEMsSUFBSSxDQUFDd0IsUUFBUSxHQUFHLEtBQUs7Y0FDckIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtjQUNqQixJQUFJLENBQUNoQixRQUFRLEdBQUcsS0FBSztZQUN0QixDQUFDO1lBRUQsTUFBTTZCLFdBQVdBLENBQUNDLE9BQXNCO2NBQ3ZDLElBQUk7Z0JBQ0hDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDekIsSUFBSSxDQUFDLENBQUExQixjQUFlLEdBQUcyQixTQUFTO2dCQUVoQyxJQUFJLE9BQU9ILE9BQU8sS0FBSyxRQUFRLElBQUksQ0FBQ0csU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxDQUFDSixPQUFPLENBQUMsRUFBRTtnQkFFNUUsSUFBSSxDQUFDZixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsSUFBSSxDQUFDb0IsZUFBZSxHQUFHLElBQUk7Z0JBRTNCLE1BQU07a0JBQUU1QixPQUFPO2tCQUFFNkI7Z0JBQVEsQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUEvQyxJQUFLLENBQUN3QyxXQUFXLENBQUNDLE9BQU8sQ0FBQztnQkFFbkUsSUFBSSxDQUFDTSxRQUFRLEdBQUdBLFFBQVE7Z0JBQ3hCO2dCQUNBLElBQUksQ0FBQyxDQUFBOUIsY0FBZSxHQUFHQyxPQUFPO2dCQUM5QixNQUFNOEIsUUFBUSxHQUFHQSxDQUFBLEtBQUs7a0JBQ3JCLElBQUksQ0FBQzVCLFlBQVksQ0FBQyxXQUFXMkIsUUFBUSxDQUFDaEMsRUFBRSxVQUFVLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUQsTUFBTWtDLEtBQUssR0FBR0EsQ0FBQSxLQUFLO2tCQUNsQi9CLE9BQU8sQ0FBQ2dDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRUYsUUFBUSxDQUFDO2tCQUN4QyxJQUFJLENBQUM1QixZQUFZLENBQUMsZ0JBQWdCLENBQUM7a0JBQ25DLElBQUksQ0FBQ0EsWUFBWSxDQUFDLFdBQVcyQixRQUFRLENBQUNoQyxFQUFFLFdBQVcsQ0FBQztrQkFDcERHLE9BQU8sQ0FBQ2dDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRUQsS0FBSyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVEL0IsT0FBTyxDQUFDMUQsRUFBRSxDQUFDLGlCQUFpQixFQUFFd0YsUUFBUSxDQUFDO2dCQUN2QzlCLE9BQU8sQ0FBQzFELEVBQUUsQ0FBQyxtQkFBbUIsRUFBRXlGLEtBQUssQ0FBQztnQkFFdEMsSUFBSSxDQUFDSCxlQUFlLEdBQUcsS0FBSztnQkFDNUIsSUFBSSxDQUFDMUIsWUFBWSxDQUFDLGFBQWEsQ0FBQztlQUNoQyxDQUFDLE9BQU8rQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNMLGVBQWUsR0FBRyxLQUFLO2dCQUM1QixJQUFJLENBQUNwQixRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQWpFLGVBQWVBLENBQUNSLFVBQVU7Y0FDekIsSUFBSSxDQUFDa0UsUUFBUSxHQUFHbEUsVUFBVSxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssTUFBTTtZQUN0RDs7VUFDQVEsT0FBQSxDQUFBVixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOU1ELElBQUFzRyxNQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQThHLE1BQUEsR0FBQTlHLE9BQUE7VUFDQSxJQUFBK0csTUFBQSxHQUFBL0csT0FBQTtVQUNBLElBQUFnSCxRQUFBLEdBQUFoSCxPQUFBO1VBRU0sU0FBVWlILFNBQVNBLENBQUM7WUFBRTVHLEtBQUs7WUFBRTZHO1VBQVMsQ0FBRTtZQUM3QyxNQUFNQyxJQUFJLEdBQUdOLE1BQUEsQ0FBQXBCLE9BQUssQ0FBQzJCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDL0IsTUFBTTtjQUFFNUcsVUFBVTtjQUFFNkc7WUFBYyxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxjQUFjLEdBQUU7WUFDdkQsTUFBTUMsR0FBRyxHQUFHVixNQUFBLENBQUFwQixPQUFLLENBQUMyQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUFMLE1BQUEsQ0FBQVMsU0FBUyxFQUNSLENBQUNuSCxLQUFLLENBQUMsRUFDUCxNQUNDSyxVQUFVLENBQUMrRyxVQUFVLENBQUMsTUFBSztjQUMxQixNQUFNQyxTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTyxDQUFDQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO2NBRWpHLElBQUksQ0FBQ0gsU0FBUyxFQUFFO2NBQ2hCLE1BQU1JLGtCQUFrQixHQUFHSixTQUFTLENBQUNLLFlBQVksR0FBR0wsU0FBUyxDQUFDTSxZQUFZLEdBQUdOLFNBQVMsQ0FBQ08sU0FBUztjQUNoRyxJQUFJSCxrQkFBa0IsSUFBSSxHQUFHLEVBQUU7Z0JBQzlCUCxHQUFHLENBQUNJLE9BQU8sQ0FBQ08sU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNwQ0MsVUFBVSxFQUFFO2VBQ1osTUFBTTtnQkFDTmIsR0FBRyxDQUFDSSxPQUFPLENBQUNPLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLE1BQU0sQ0FBQzs7WUFFbkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUNSLGFBQWEsQ0FDYjtZQUNELE1BQU1ELFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCbEIsU0FBUyxDQUFDUyxPQUFPLEVBQUVXLGNBQWMsQ0FBQztnQkFBRUMsS0FBSyxFQUFFLEtBQUs7Z0JBQUVDLFFBQVEsRUFBRTtjQUFRLENBQUUsQ0FBQztZQUN4RSxDQUFDO1lBRUQzQixNQUFBLENBQUFwQixPQUFLLENBQUNnRCxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNZixTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTyxDQUFDQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO2NBRWpHLE1BQU1hLFlBQVksR0FBR0EsQ0FBQSxLQUFLO2dCQUN6QjtnQkFDQSxJQUFJLENBQUNoQixTQUFTLEVBQUU7Z0JBQ2hCLE1BQU1JLGtCQUFrQixHQUFHSixTQUFTLENBQUNLLFlBQVksR0FBR0wsU0FBUyxDQUFDTSxZQUFZLEdBQUdOLFNBQVMsQ0FBQ08sU0FBUztnQkFFaEc7Z0JBQ0EsSUFBSUgsa0JBQWtCLElBQUksR0FBRyxFQUFFO2tCQUM5QlAsR0FBRyxDQUFDSSxPQUFPLENBQUNPLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztpQkFDcEMsTUFBTTtrQkFDTlosR0FBRyxDQUFDSSxPQUFPLENBQUNPLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLE1BQU0sQ0FBQzs7Y0FFbkMsQ0FBQztjQUVEWCxTQUFTLENBQUNpQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVELFlBQVksQ0FBQztjQUVsRCxPQUFPLE1BQUs7Z0JBQ1hoQixTQUFTLEVBQUVrQixtQkFBbUIsQ0FBQyxRQUFRLEVBQUVGLFlBQVksQ0FBQztjQUN2RCxDQUFDO1lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLElBQUlHLEdBQUcsR0FBRywyQkFBMkI7WUFDckMsSUFBSXJJLFVBQVUsQ0FBQ3NJLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRUQsR0FBRyxJQUFJLGtCQUFrQnJJLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZGLE1BQU1zSSxZQUFZLEdBQUcsbUJBQ3BCdkksVUFBVSxDQUFDc0ksR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLGVBQWV0SSxVQUFVLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLEVBQzlFLEVBQUU7WUFDRixPQUNDb0csTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQTtjQUFLQyxTQUFTLEVBQUVGLFlBQVk7Y0FBRXhCLEdBQUcsRUFBRUE7WUFBRyxHQUNyQ1YsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDbEMsTUFBQSxDQUFBb0MsVUFBVTtjQUFDM0IsR0FBRyxFQUFFSixJQUFJO2NBQUVBLElBQUksRUFBQyxXQUFXO2NBQUNnQyxPQUFPLEVBQUMsVUFBVTtjQUFDRixTQUFTLEVBQUVKLEdBQUc7Y0FBRU8sT0FBTyxFQUFFaEI7WUFBVSxFQUFJLENBQzdGO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0RBLElBQUF2QixNQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQXFKLGFBQUEsR0FBQXJKLE9BQUE7VUFDQSxJQUFBc0osU0FBQSxHQUFBdEosT0FBQTtVQUNBLElBQUFnSCxRQUFBLEdBQUFoSCxPQUFBO1VBQ0EsSUFBQStHLE1BQUEsR0FBQS9HLE9BQUE7VUFDQSxJQUFBdUosa0JBQUEsR0FBQXZKLE9BQUE7VUFHTSxTQUFVd0osT0FBT0EsQ0FBQztZQUFFdEM7VUFBUyxDQUFFO1lBQ3BDLE1BQU07Y0FBRTdHLEtBQUs7Y0FBRW9KLEtBQUs7Y0FBRWpKO1lBQVUsQ0FBRSxHQUFHLElBQUF3RyxRQUFBLENBQUFNLGNBQWMsR0FBRTtZQUNyRCxNQUFNO2NBQUVsRTtZQUFRLENBQUUsR0FBRy9DLEtBQUs7WUFDMUIsTUFBTSxDQUFDcUosYUFBYSxFQUFFQyxXQUFXLENBQUMsR0FBRzlDLE1BQUEsQ0FBQXBCLE9BQUssQ0FBQ21FLFFBQVEsQ0FBU3hHLFFBQVEsQ0FBQ3lHLE1BQU0sSUFBSSxFQUFFLENBQUNBLE1BQU0sQ0FBQztZQUN6RixNQUFNLENBQUN0QyxHQUFHLEVBQUVyQyxLQUFLLEVBQUU0RSxnQkFBZ0IsQ0FBQyxHQUFHLElBQUFULGFBQUEsQ0FBQVUsWUFBWSxFQUFDLFlBQVksQ0FBQztZQUVqRSxJQUFBaEQsTUFBQSxDQUFBUyxTQUFTLEVBQ1IsQ0FBQ25ILEtBQUssQ0FBQyxFQUNQLE1BQUs7Y0FDSnNKLFdBQVcsQ0FBQ3RKLEtBQUssQ0FBQytDLFFBQVEsQ0FBQ3lHLE1BQU0sQ0FBQztZQUNuQyxDQUFDLEVBQ0QsYUFBYSxDQUNiO1lBRUQsSUFBSWhCLEdBQUcsR0FBRyxlQUFlO1lBQ3pCLElBQUlySSxVQUFVLENBQUNzSSxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUVELEdBQUcsSUFBSSxlQUFlckksVUFBVSxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDcEYsT0FDQ29HLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUE7Y0FBS0MsU0FBUyxFQUFFSjtZQUFHLEdBQ2xCaEMsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDTyxrQkFBQSxDQUFBUyxpQkFBaUI7Y0FBQ0MsU0FBUyxFQUFFSCxnQkFBZ0I7Y0FBRUksU0FBUyxFQUFFM0M7WUFBRyxFQUFJLEVBQ2pFckMsS0FBSyxJQUNMMkIsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFBbkMsTUFBQSxDQUFBcEIsT0FBQSxDQUFBMEUsUUFBQSxRQUNDdEQsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDTSxTQUFBLENBQUFjLFFBQVE7Y0FDUjdHLElBQUksRUFBRWxELEtBQUssQ0FBQ2tELElBQUk7Y0FDaEJyQixNQUFNLEVBQUU3QixLQUFLLENBQUNzRCxZQUFZLENBQUN6QixNQUFNO2NBQ2pDeUYsT0FBTyxFQUFFdEgsS0FBSyxDQUFDbUUsY0FBYztjQUM3Qm5FLEtBQUssRUFBRUEsS0FBSztjQUNaK0MsUUFBUSxFQUFFL0MsS0FBSyxDQUFDK0MsUUFBUTtjQUN4QnFHLEtBQUssRUFBRUE7WUFBSyxFQUNYLEVBQ0Y1QyxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBO2NBQUt6QixHQUFHLEVBQUVMLFNBQVM7Y0FBRStCLFNBQVMsRUFBQztZQUFXLEVBQUcsQ0FFOUMsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQSxJQUFBcEMsTUFBQSxHQUFBN0csT0FBQTtVQUVBLElBQUFnSCxRQUFBLEdBQUFoSCxPQUFBO1VBREE7O1VBR00sU0FBVWdLLGlCQUFpQkEsQ0FBQztZQUFFQyxTQUFTO1lBQUVDO1VBQVMsQ0FBRTtZQUN6RCxNQUFNO2NBQ0w3SixLQUFLLEVBQUU7Z0JBQUVrRCxJQUFJO2dCQUFFcUI7Y0FBVTtZQUFFLENBQzNCLEdBQUcsSUFBQW9DLFFBQUEsQ0FBQU0sY0FBYyxHQUFFO1lBRXBCLE1BQU0rQyxTQUFTLEdBQUdKLFNBQVM7WUFDM0IsSUFBSSxDQUFDQSxTQUFTLEVBQUUsT0FBTyxJQUFJO1lBQzNCLE9BQ0NwRCxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBLENBQUFuQyxNQUFBLENBQUFwQixPQUFBLENBQUEwRSxRQUFBLFFBQ0N0RCxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBLENBQUNxQixTQUFTO2NBQUM5QyxHQUFHLEVBQUUyQyxTQUFTO2NBQUV2RSxRQUFRLEVBQUUyRSxJQUFJLENBQUNDLFNBQVMsQ0FBQ2hILElBQUksQ0FBQ29DLFFBQVE7WUFBQyxFQUFJLENBQ3BFO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFrQixNQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQWdILFFBQUEsR0FBQWhILE9BQUE7VUFDQSxJQUFBd0ssTUFBQSxHQUFBeEssT0FBQTtVQUNBLElBQUF5SyxVQUFBLEdBQUF6SyxPQUFBO1VBQ0EsSUFBQTBLLFFBQUEsR0FBQTFLLE9BQUE7VUFVTztVQUFVLFNBQVVtRixJQUFJQSxDQUFDd0YsS0FBSztZQUNwQyxNQUFNO2NBQUV0SztZQUFLLENBQUUsR0FBRyxJQUFBMkcsUUFBQSxDQUFBTSxjQUFjLEdBQUU7WUFFbEMsTUFBTXNELFNBQVMsR0FBR3ZLLEtBQUssQ0FBQ3VFLFVBQVUsQ0FBQ25FLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDcEQsTUFBTSxDQUFDb0ssTUFBTSxDQUFDLEdBQUdoRSxNQUFBLENBQUFwQixPQUFLLENBQUNtRSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3RDLE1BQU0xQyxTQUFTLEdBQUdMLE1BQUEsQ0FBQXBCLE9BQUssQ0FBQzJCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFcEMsSUFBSXlCLEdBQUcsR0FBRywwQkFBMEJnQyxNQUFNLEdBQUcsb0JBQW9CLEdBQUcsRUFBRSxFQUFFO1lBRXhFLE9BQ0NoRSxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBO2NBQUtDLFNBQVMsRUFBRUo7WUFBRyxHQUNsQmhDLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUEsQ0FBQzBCLFFBQUEsQ0FBQWxCLE9BQU87Y0FBQ3RDLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ2pDTCxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrQixHQUNoQ3BDLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUEsQ0FBQ3lCLFVBQUEsQ0FBQXhELFNBQVM7Y0FBQzVHLEtBQUssRUFBRUEsS0FBSztjQUFFNkcsU0FBUyxFQUFFQTtZQUFTLEVBQUksRUFDaEQsQ0FBQzBELFNBQVMsRUFBRWpGLFFBQVEsRUFBRW1GLFNBQVMsSUFBSWpFLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUEsQ0FBQ3dCLE1BQUEsQ0FBQU8sU0FBUztjQUFDMUssS0FBSyxFQUFFQSxLQUFLO2NBQUUySyxTQUFTLEVBQUU7WUFBSyxFQUFJLENBQzVFLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQW5FLE1BQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBZ0gsUUFBQSxHQUFBaEgsT0FBQTtVQUVBLElBQUFpTCxXQUFBLEdBQUFqTCxPQUFBO1VBQ0EsSUFBQWtMLFFBQUEsR0FBQWxMLE9BQUE7VUFDTSxTQUFVbUwsWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUU5SztZQUFLLENBQUUsR0FBRyxJQUFBMkcsUUFBQSxDQUFBTSxjQUFjLEdBQUU7WUFDbEMsT0FDQ1QsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJwQyxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBLENBQUNpQyxXQUFBLENBQUFHLGlCQUFpQjtjQUFDQyxLQUFLLEVBQUV4RSxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBLENBQUNrQyxRQUFBLENBQUFJLE9BQU87Z0JBQUNDLEtBQUssRUFBQyxPQUFPO2dCQUFDQyxNQUFNLEVBQUM7Y0FBTTtZQUFHLEVBQXNCLEVBQ3ZGM0UsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBTSxFQUFHLENBQ25CO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkEsSUFBQXBDLE1BQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBZ0gsUUFBQSxHQUFBaEgsT0FBQTtVQUNNLFNBQVUrSixZQUFZQSxDQUFDakgsSUFBSTtZQUNoQyxNQUFNLENBQUNvQyxLQUFLLEVBQUV1RyxRQUFRLENBQUMsR0FBRzVFLE1BQUEsQ0FBQXBCLE9BQUssQ0FBQ21FLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDL0MsTUFBTXJDLEdBQUcsR0FBR1YsTUFBQSxDQUFBcEIsT0FBSyxDQUFDMkIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNO2NBQ0wvRyxLQUFLLEVBQUU7Z0JBQUV1RTtjQUFVO1lBQUUsQ0FDckIsR0FBRyxJQUFBb0MsUUFBQSxDQUFBTSxjQUFjLEdBQUU7WUFFcEIsTUFBTXdDLGdCQUFnQixHQUFHbEYsVUFBVSxDQUFDbkUsR0FBRyxDQUFDcUMsSUFBSSxDQUFDLEVBQUU0SSxPQUFPO1lBQ3REN0UsTUFBQSxDQUFBcEIsT0FBSyxDQUFDZ0QsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTWtELE9BQU8sR0FBR0MsS0FBSyxJQUFJSCxRQUFRLENBQUMsSUFBSSxDQUFDO2NBQ3ZDLElBQUksQ0FBQ2xFLEdBQUcsRUFBRUksT0FBTyxFQUFFO2NBQ25CSixHQUFHLENBQUNJLE9BQU8sQ0FBQ2dCLGdCQUFnQixDQUFDLE9BQU8sRUFBRWdELE9BQU8sQ0FBQztjQUM5QyxPQUFPLE1BQU1wRSxHQUFHLENBQUNJLE9BQU8sRUFBRWlCLG1CQUFtQixDQUFDLE9BQU8sRUFBRStDLE9BQU8sQ0FBQztZQUNoRSxDQUFDLEVBQUUsQ0FBQ3BFLEdBQUcsRUFBRUksT0FBTyxDQUFDLENBQUM7WUFFbEIsT0FBTyxDQUFDSixHQUFHLEVBQUVyQyxLQUFLLElBQUksQ0FBQzRFLGdCQUFnQixFQUFFQSxnQkFBZ0IsQ0FBQztVQUMzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkEsSUFBQWpELE1BQUEsR0FBQTdHLE9BQUE7VUFjTyxNQUFNNkwsV0FBVyxHQUFBNUssT0FBQSxDQUFBNEssV0FBQSxHQUFHaEYsTUFBQSxDQUFBcEIsT0FBSyxDQUFDcUcsYUFBYSxDQUFDLEVBQWtCLENBQUM7VUFDM0QsTUFBTXhFLGNBQWMsR0FBR0EsQ0FBQSxLQUFNVCxNQUFBLENBQUFwQixPQUFLLENBQUNzRyxVQUFVLENBQUNGLFdBQVcsQ0FBQztVQUFDNUssT0FBQSxDQUFBcUcsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZsRSxJQUFBVCxNQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQStHLE1BQUEsR0FBQS9HLE9BQUE7VUFDQSxJQUFBZ00sS0FBQSxHQUFBaE0sT0FBQTtVQUNBLElBQUFnSCxRQUFBLEdBQUFoSCxPQUFBO1VBQ0EsSUFBQWlNLFNBQUEsR0FBQWpNLE9BQUE7VUFDQSxJQUFBa00sU0FBQSxHQUFBbE0sT0FBQTtVQUNBLElBQUFtTSxPQUFBLEdBQUFuTSxPQUFBO1VBQ0EsSUFBQW9NLGVBQUEsR0FBQXBNLE9BQUE7VUFFTSxTQUFVWSxJQUFJQSxDQUFDO1lBQUVQLEtBQUs7WUFBRSxHQUFHc0s7VUFBSyxDQUFFO1lBQ3ZDLE1BQU0sQ0FBQzFGLFFBQVEsRUFBRW9ILFdBQVcsQ0FBQyxHQUFHeEYsTUFBQSxDQUFBcEIsT0FBSyxDQUFDbUUsUUFBUSxDQUFDdkosS0FBSyxDQUFDNEUsUUFBUSxDQUFDO1lBQzlELE1BQU0sQ0FBQ0MsS0FBSyxFQUFFdUcsUUFBUSxDQUFDLEdBQUc1RSxNQUFBLENBQUFwQixPQUFLLENBQUNtRSxRQUFRLENBQUN2SixLQUFLLENBQUM2RSxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDb0gsVUFBVSxFQUFFN0MsS0FBSyxDQUFDLEdBQUcsSUFBQTBDLE9BQUEsQ0FBQUksUUFBUSxFQUFDSCxlQUFBLENBQUFJLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQ3BGLGNBQWMsRUFBRXFGLGlCQUFpQixDQUFDLEdBQUc3RixNQUFBLENBQUFwQixPQUFLLENBQUNtRSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pFLE1BQU07Y0FDTDlFLFFBQVE7Y0FDUjFCLFFBQVE7Y0FDUk8sWUFBWSxFQUFFO2dCQUFFekI7Y0FBTTtZQUFFLENBQ3hCLEdBQUc3QixLQUFLO1lBRVQsSUFBQTBHLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUNuSCxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCZ00sV0FBVyxDQUFDaE0sS0FBSyxDQUFDNEUsUUFBUSxDQUFDO2NBQzNCd0csUUFBUSxDQUFDcEwsS0FBSyxDQUFDNkUsS0FBSyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztZQUVGLE1BQU15SCxZQUFZLEdBQUc7Y0FDcEJELGlCQUFpQixFQUFFdEwsS0FBSyxJQUFHO2dCQUMxQixJQUFJLENBQUNBLEtBQUssRUFBRXVGLE9BQU8sQ0FBQ2lHLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQztnQkFDbkVGLGlCQUFpQixDQUFDdEwsS0FBSyxDQUFDO2NBQ3pCLENBQUM7Y0FDRGlHLGNBQWM7Y0FDZGhILEtBQUs7Y0FDTG9KLEtBQUs7Y0FDTDNFLFFBQVE7Y0FDUjFCLFFBQVE7Y0FDUmxCLE1BQU07Y0FDTjFCLFVBQVUsRUFBRW1LLEtBQUssQ0FBQ25LO2FBQ2xCO1lBQ0QsTUFBTXFNLE9BQU8sR0FBRyxDQUFDeE0sS0FBSyxDQUFDNkQsUUFBUSxHQUFHOEgsS0FBQSxDQUFBN0csSUFBSSxHQUFHK0csU0FBQSxDQUFBWSxZQUFZO1lBQ3JELE1BQU1sTSxJQUFJLEdBQUdzRSxLQUFLLElBQUlvSCxVQUFVLEdBQUdPLE9BQU8sR0FBR1osU0FBQSxDQUFBZCxZQUFZO1lBRXpELE9BQ0N0RSxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBLENBQUNoQyxRQUFBLENBQUE2RSxXQUFXLENBQUNrQixRQUFRO2NBQUMzTCxLQUFLLEVBQUV1TDtZQUFZLEdBQ3hDOUYsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDcEksSUFBSSxPQUFHLENBQ2M7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUFpRyxNQUFBLEdBQUE3RyxPQUFBO1VBVU8sTUFBTWdOLFlBQVksR0FBQS9MLE9BQUEsQ0FBQStMLFlBQUEsR0FBR25HLE1BQUEsQ0FBQXBCLE9BQUssQ0FBQ3FHLGFBQWEsQ0FBQyxJQUFxQixDQUFDO1VBQy9ELE1BQU1tQixlQUFlLEdBQUdBLENBQUEsS0FBTXBHLE1BQUEsQ0FBQXBCLE9BQUssQ0FBQ3NHLFVBQVUsQ0FBQ2lCLFlBQVksQ0FBQztVQUFDL0wsT0FBQSxDQUFBZ00sZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hwRSxJQUFBcEcsTUFBQSxHQUFBN0csT0FBQTtVQUNBLElBQUFrTixLQUFBLEdBQUFsTixPQUFBO1VBQ0EsSUFBQWlMLFdBQUEsR0FBQWpMLE9BQUE7VUFDQSxJQUFBbU4sT0FBQSxHQUFBbk4sT0FBQTtVQUNBLElBQUErRyxNQUFBLEdBQUEvRyxPQUFBO1VBQ0EsSUFBQWdILFFBQUEsR0FBQWhILE9BQUE7VUFDQSxJQUFBb04sVUFBQSxHQUFBcE4sT0FBQTtVQUNBLElBQUFxTixNQUFBLEdBQUFyTixPQUFBO1VBRUEsSUFBQXNOLFVBQUEsR0FBQXROLE9BQUE7VUFHTztVQUFXLE1BQU0rSyxTQUFTLEdBQUdBLENBQUM7WUFBRTFLLEtBQUs7WUFBRTJLLFNBQVMsR0FBRztVQUFLLENBQStDLEtBQUk7WUFDakgsTUFBTSxDQUFDdUMsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRzNHLE1BQUEsQ0FBQXBCLE9BQUssQ0FBQ21FLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDaEUsTUFBTSxDQUFDM0UsUUFBUSxFQUFFb0gsV0FBVyxDQUFDLEdBQUd4RixNQUFBLENBQUFwQixPQUFLLENBQUNtRSxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQzlELE1BQU0sQ0FBQzZELE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUc3RyxNQUFBLENBQUFwQixPQUFLLENBQUNtRSxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQzVELE1BQU0sQ0FBQytELElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUcvRyxNQUFBLENBQUFwQixPQUFLLENBQUNtRSxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFDLE1BQU07Y0FDTGpHLFlBQVksRUFBRTtnQkFBRS9CO2NBQVE7WUFBRSxDQUMxQixHQUFHdkIsS0FBSztZQUVULElBQUEwRyxNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDbkgsS0FBSyxDQUFDLEVBQUUsTUFBTXFOLFVBQVUsQ0FBQ3JOLEtBQUssQ0FBQ2dHLGVBQWUsQ0FBQyxDQUFDO1lBRTNELE1BQU0zQixRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFO1lBQUssQ0FBRTtZQUNwQyxNQUFNbUosU0FBUyxHQUFHLE1BQU1qQyxLQUFLLElBQUc7Y0FDL0JTLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakJULEtBQUssQ0FBQ2tDLGNBQWMsRUFBRTtjQUN0QmxDLEtBQUssQ0FBQ21DLGVBQWUsRUFBRTtjQUV2QixNQUFNckssS0FBSyxHQUFHLE1BQU05QixRQUFRLENBQUNvTSxJQUFJLEVBQUU7Y0FFbkMzTixLQUFLLENBQUMwRixXQUFXLENBQUNyQyxLQUFLLENBQUM7Y0FDeEI4SixZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDO2NBRXhCbEIsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNuQixDQUFDO1lBRUQsTUFBTTRCLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0JMLE9BQU8sQ0FBQyxFQUFFLENBQUM7Y0FDWHZCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakJoTSxLQUFLLENBQUMwRixXQUFXLENBQUM0SCxJQUFJLENBQUM7WUFDeEIsQ0FBQztZQUNELE1BQU1PLFFBQVEsR0FBRyxDQUFDLENBQUNQLElBQUksQ0FBQzlELE1BQU0sR0FBR29FLFVBQVUsR0FBR0osU0FBUztZQUV2RCxJQUFJLENBQUMsRUFBRSxFQUFFMUgsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUN1SCxJQUFJLENBQUNRLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDUixJQUFJLENBQUNTLElBQUksRUFBRSxDQUFDdkUsTUFBTSxFQUFFbkYsUUFBUSxDQUFDQSxRQUFRLEdBQUcsSUFBSTtZQUU5RyxJQUFJbUUsR0FBRyxHQUFHLG1CQUFtQjRFLE9BQU8sSUFBSXpDLFNBQVMsSUFBSS9GLFFBQVEsR0FBRyxhQUFhLEdBQUcsRUFBRSxFQUFFO1lBQ3BGLElBQUk1RSxLQUFLLENBQUNxRSxRQUFRLEVBQUVtRSxHQUFHLElBQUksYUFBYTtZQUN4QztZQUNBLE1BQU07Y0FBRXdGO1lBQU0sQ0FBRSxHQUFHbEIsT0FBQSxDQUFBMUgsT0FBTSxDQUFDNkksTUFBTSxDQUFDQyxNQUFNO1lBQ3ZDO1lBQ0EsT0FDQzFILE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUE7Y0FBS0MsU0FBUyxFQUFFSjtZQUFHLEdBQ2xCaEMsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDaEMsUUFBQSxDQUFBZ0csWUFBWSxDQUFDRCxRQUFRO2NBQ3JCM0wsS0FBSyxFQUFFO2dCQUFFZixLQUFLO2dCQUFFNk4sUUFBUTtnQkFBRXRNLFFBQVE7Z0JBQUU0TCxZQUFZO2dCQUFFRCxTQUFTO2dCQUFFN0ksUUFBUSxFQUFFckUsS0FBSyxDQUFDcUU7Y0FBUTtZQUFFLEdBRXRGMkosTUFBTSxJQUFJeEgsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDcUUsTUFBQSxDQUFBbUIsV0FBVztjQUFDakwsSUFBSSxFQUFFbEQsS0FBSyxDQUFDa0Q7WUFBSSxFQUFJLEVBQzVDc0QsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDa0UsS0FBQSxDQUFBdUIsSUFBSTtjQUFDUCxRQUFRLEVBQUVBLFFBQVE7Y0FBRWpGLFNBQVMsRUFBQztZQUFpQixHQUNwRHBDLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUEsQ0FBQ3NFLFVBQUEsQ0FBQW9CLFNBQVM7Y0FDVHJPLEtBQUssRUFBRUEsS0FBSztjQUNac04sSUFBSSxFQUFFQSxJQUFJO2NBQ1ZqSixRQUFRLEVBQUVyRSxLQUFLLENBQUNxRSxRQUFRO2NBQ3hCMkgsV0FBVyxFQUFFQSxXQUFXO2NBQ3hCcEgsUUFBUSxFQUFFQSxRQUFRLElBQUlzSSxTQUFTLElBQUlFLE9BQU8sSUFBSXpDLFNBQVM7Y0FDdkQ0QyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJLLFVBQVUsRUFBRUE7WUFBVSxFQUNyQixFQUNGcEgsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQTtjQUFNQyxTQUFTLEVBQUU7WUFBaUMsR0FDaEQsQ0FBQyxDQUFDMEUsSUFBSSxDQUFDOUQsTUFBTSxHQUNiaEQsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDaUMsV0FBQSxDQUFBMEQsTUFBTTtjQUNOeEgsSUFBSSxFQUFDLFlBQVk7Y0FDakJpQyxPQUFPLEVBQUU2RSxVQUFVO2NBQ25CdkosUUFBUSxFQUFFQSxRQUFRLENBQUNBLFFBQVEsSUFBSXJFLEtBQUssQ0FBQ2dHO1lBQWUsRUFDbkQsR0FFRlEsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDb0UsVUFBQSxDQUFBd0IsZUFBZTtjQUFDdk8sS0FBSyxFQUFFQSxLQUFLO2NBQUVxRSxRQUFRLEVBQUU2SSxTQUFTLElBQUlsTixLQUFLLENBQUNnRztZQUFlLEVBQzNFLENBQ0ssQ0FDRCxDQUNnQixDQUNuQjtVQUVSLENBQUM7VUFBQ3BGLE9BQUEsQ0FBQThKLFNBQUEsR0FBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsRkYsSUFBQWxFLE1BQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBOEcsTUFBQSxHQUFBOUcsT0FBQTtVQUNBLElBQUE2TyxNQUFBLEdBQUE3TyxPQUFBO1VBQ0EsSUFBQWdILFFBQUEsR0FBQWhILE9BQUE7VUFFTyxNQUFNOE8sTUFBTSxHQUFHQSxDQUFBLEtBQUs7WUFDMUIsTUFBTTtjQUFFWixRQUFRO2NBQUV0TSxRQUFRO2NBQUU0TDtZQUFZLENBQUUsR0FBRyxJQUFBeEcsUUFBQSxDQUFBaUcsZUFBZSxHQUFFO1lBRTlELE1BQU04QixNQUFNLEdBQUcsTUFBTW5ELEtBQUssSUFBRztjQUM1QkEsS0FBSyxDQUFDa0MsY0FBYyxFQUFFO2NBQ3RCLE1BQU1sTSxRQUFRLENBQUNvTSxJQUFJLEVBQUU7Y0FDckJSLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUNELE9BQ0MzRyxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE2QixHQUMzQ3BDLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUEsQ0FBQ2xDLE1BQUEsQ0FBQW9DLFVBQVU7Y0FBQ0QsU0FBUyxFQUFDLFFBQVE7Y0FBQzlCLElBQUksRUFBQyxRQUFRO2NBQUNpQyxPQUFPLEVBQUUyRjtZQUFNLEVBQUksRUFDaEVsSSxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBLENBQUM2RixNQUFBLENBQUFHLEtBQUs7Y0FBQ0MsTUFBTSxFQUFDO1lBQU8sRUFBRyxFQUN4QnBJLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUEsQ0FBQ2xDLE1BQUEsQ0FBQW9DLFVBQVU7Y0FBQy9CLElBQUksRUFBQyxNQUFNO2NBQUM4QixTQUFTLEVBQUMsUUFBUTtjQUFDRSxPQUFPLEVBQUMsU0FBUztjQUFDQyxPQUFPLEVBQUU4RTtZQUFRLEVBQUksQ0FDN0U7VUFFUixDQUFDO1VBQUNqTixPQUFBLENBQUE2TixNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJGLElBQUFqSSxNQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQThHLE1BQUEsR0FBQTlHLE9BQUE7VUFDQSxJQUFBaUwsV0FBQSxHQUFBakwsT0FBQTtVQUNBLElBQUFrUCxNQUFBLEdBQUFsUCxPQUFBO1VBQ0EsSUFBQW1QLE9BQUEsR0FBQW5QLE9BQUE7VUFDQSxJQUFBZ0gsUUFBQSxHQUFBaEgsT0FBQTtVQUNBLElBQUFvUCxTQUFBLEdBQUFwUCxPQUFBO1VBQ087VUFBVyxNQUFNNE8sZUFBZSxHQUFHQSxDQUFDO1lBQUV2TyxLQUFLLEVBQUU7Y0FBRXNEO1lBQVksQ0FBRTtZQUFFZTtVQUFRLENBQUUsS0FBSTtZQUNuRixNQUFNO2NBQUU5QyxRQUFRO2NBQUUyTCxTQUFTO2NBQUVDO1lBQVksQ0FBRSxHQUFHLElBQUE0QixTQUFBLENBQUFuQyxlQUFlLEdBQUU7WUFDL0QsTUFBTSxDQUFDaEksUUFBUSxFQUFFb0gsV0FBVyxDQUFDLEdBQUcsSUFBQXhGLE1BQUEsQ0FBQStDLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDeUYsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRyxJQUFBekksTUFBQSxDQUFBK0MsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNO2NBQUVIO1lBQUssQ0FBRSxHQUFHLElBQUF6QyxRQUFBLENBQUFNLGNBQWMsR0FBRTtZQUNsQyxNQUFNaUksVUFBVSxHQUFHLE1BQU0zRCxLQUFLLElBQUc7Y0FDaEMsSUFBSTtnQkFDSEEsS0FBSyxDQUFDa0MsY0FBYyxFQUFFO2dCQUN0QnpCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1tRCxVQUFVLEdBQUcsTUFBTTVOLFFBQVEsQ0FBQzZOLGNBQWMsRUFBRTtnQkFDbEQsSUFBSUQsVUFBVSxDQUFDRSxLQUFLLEtBQUssU0FBUyxFQUFFSixZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUN0RCxNQUFNMU4sUUFBUSxDQUFDK04sTUFBTSxFQUFFO2dCQUN2Qm5DLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7ZUFDeEIsQ0FBQyxPQUFPN0csQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QyRixXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsTUFBTXVELE9BQU8sR0FBR2hFLEtBQUssSUFBRztjQUN2QlMsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNsQmlELFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUVELElBQUkvQixTQUFTLEVBQUUsT0FBTzFHLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUEsQ0FBQ21HLE9BQUEsQ0FBQUwsTUFBTSxPQUFHO1lBRWhDLE9BQ0NqSSxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBLENBQUFuQyxNQUFBLENBQUFwQixPQUFBLENBQUEwRSxRQUFBLFFBQ0VrRixTQUFTLElBQ1R4SSxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBLENBQUNrRyxNQUFBLENBQUFXLFVBQVU7Y0FBQ0MsSUFBSSxFQUFFLElBQUk7Y0FBRUMsSUFBSSxFQUFFLElBQUk7Y0FBRUgsT0FBTyxFQUFFQSxPQUFPO2NBQUVJLFFBQVE7WUFBQSxHQUM3RG5KLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQThCLEdBQzVDcEMsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBOEIsR0FDNUNwQyxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFzQixHQUFFUSxLQUFLLENBQUN3RyxXQUFXLENBQUNDLEtBQUssQ0FBUSxFQUN2RXJKLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUE7Y0FBR0MsU0FBUyxFQUFDO1lBQXNCLEdBQUVRLEtBQUssQ0FBQ3dHLFdBQVcsQ0FBQzVFLEtBQUssQ0FBSyxDQUM1RCxFQUNOeEUsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDbEMsTUFBQSxDQUFBcUosSUFBSTtjQUFDbEgsU0FBUyxFQUFDLDBCQUEwQjtjQUFDOUIsSUFBSSxFQUFDO1lBQUssRUFBRyxFQUN4RE4sTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBeUIsR0FBRVEsS0FBSyxDQUFDd0csV0FBVyxDQUFDRyxXQUFXLENBQUssQ0FDckUsQ0FFUCxFQUNEdkosTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDaUMsV0FBQSxDQUFBMEQsTUFBTTtjQUFDeEgsSUFBSSxFQUFDLEtBQUs7Y0FBQ2xDLFFBQVEsRUFBRUEsUUFBUTtjQUFFbUUsT0FBTyxFQUFFbUcsVUFBVTtjQUFFN0ssUUFBUSxFQUFFQSxRQUFRLElBQUlPO1lBQVEsRUFBSSxDQUM1RjtVQUVMLENBQUM7VUFBQ2hFLE9BQUEsQ0FBQTJOLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREYsSUFBQS9ILE1BQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBa04sS0FBQSxHQUFBbE4sT0FBQTtVQUNBLElBQUFpTCxXQUFBLEdBQUFqTCxPQUFBO1VBQ0EsSUFBQXFRLE1BQUEsR0FBQXJRLE9BQUE7VUFDQSxJQUFBZ0gsUUFBQSxHQUFBaEgsT0FBQTtVQUVPLE1BQU1zUSxNQUFNLEdBQUdBLENBQUM7WUFBRS9NLElBQUk7WUFBRWdOO1VBQVUsQ0FBRSxLQUFJO1lBQzlDLE1BQU0sQ0FBQ25QLEtBQUssRUFBRW9QLFFBQVEsQ0FBQyxHQUFHM0osTUFBQSxDQUFBcEIsT0FBSyxDQUFDbUUsUUFBUSxDQUFDckcsSUFBSSxFQUFFOEssTUFBTSxDQUFDO1lBQ3RELE1BQU0sQ0FBQ3pILEtBQUssRUFBRTZKLFFBQVEsQ0FBQyxHQUFHNUosTUFBQSxDQUFBcEIsT0FBSyxDQUFDbUUsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUM4RyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHOUosTUFBQSxDQUFBcEIsT0FBSyxDQUFDbUUsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNO2NBQUVIO1lBQUssQ0FBRSxHQUFHLElBQUF6QyxRQUFBLENBQUFNLGNBQWMsR0FBRTtZQUVsQyxTQUFTc0osWUFBWUEsQ0FBQ2hGLEtBQUs7Y0FDMUIsTUFBTTtnQkFBRXhLLEtBQUssRUFBRXlQO2NBQWEsQ0FBRSxHQUFHakYsS0FBSyxDQUFDa0YsTUFBTTtjQUM3Q04sUUFBUSxDQUFDSyxhQUFhLENBQUM7WUFDeEI7WUFFQSxTQUFTRSxXQUFXQSxDQUFBO2NBQ25CTixRQUFRLENBQUMsS0FBSyxDQUFDO2NBQ2ZFLFVBQVUsQ0FBQyxLQUFLLENBQUM7Y0FDakJILFFBQVEsQ0FBQ2pOLElBQUksRUFBRThLLE1BQU0sQ0FBQztjQUN0QmtDLFVBQVUsRUFBRTtZQUNiO1lBRUEsTUFBTVMsWUFBWSxHQUFHLE1BQU1wRixLQUFLLElBQUc7Y0FDbENBLEtBQUssQ0FBQ2tDLGNBQWMsRUFBRTtjQUN0QjZDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDaEIsTUFBTXJLLFFBQVEsR0FBRyxNQUFNL0MsSUFBSSxDQUFDME4sT0FBTyxDQUFDO2dCQUFFNUMsTUFBTSxFQUFFak47Y0FBSyxDQUFFLENBQUM7Y0FDdEQsSUFBSSxDQUFDa0YsUUFBUSxDQUFDNEssTUFBTSxFQUFFVCxRQUFRLENBQUNuSyxRQUFRLENBQUNNLEtBQUssQ0FBQztjQUU5Q3lKLE1BQUEsQ0FBQWMsS0FBSyxDQUFDQyxPQUFPLENBQUMzSCxLQUFLLENBQUM0RSxNQUFNLENBQUMrQyxPQUFPLENBQUM7Y0FDbkNMLFdBQVcsRUFBRTtZQUNkLENBQUM7WUFFRCxPQUNDbEssTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDa0UsS0FBQSxDQUFBdUIsSUFBSTtjQUFDUCxRQUFRLEVBQUU4QyxZQUFZO2NBQUUvSCxTQUFTLEVBQUM7WUFBYSxHQUNuRHJDLEtBQUssSUFBSUMsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBdUIsR0FBRXJDLEtBQUssQ0FBTyxFQUM5REMsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDa0UsS0FBQSxDQUFBbUUsUUFBUTtjQUFDQyxJQUFJLEVBQUUsQ0FBQztjQUFFbFEsS0FBSyxFQUFFQSxLQUFLO2NBQUVtUSxXQUFXLEVBQUMsd0JBQXdCO2NBQUNDLFFBQVEsRUFBRVo7WUFBWSxFQUFJLEVBQ2hHL0osTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxpQkFDQ25DLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUEsQ0FBQ2lDLFdBQUEsQ0FBQTBELE1BQU07Y0FBQ3hILElBQUksRUFBQyxjQUFjO2NBQUNzSyxLQUFLLEVBQUMsUUFBUTtjQUFDdEksT0FBTyxFQUFDLGNBQWM7Y0FBQ0MsT0FBTyxFQUFFMkg7WUFBVyxFQUFJLEVBQzFGbEssTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDaUMsV0FBQSxDQUFBMEQsTUFBTTtjQUFDK0MsSUFBSSxFQUFDLFFBQVE7Y0FBQ3ZLLElBQUksRUFBQyxNQUFNO2NBQUNpQyxPQUFPLEVBQUU0SCxZQUFZO2NBQUVTLEtBQUssRUFBQyxRQUFRO2NBQUNmLE9BQU8sRUFBRUE7WUFBTyxFQUFJLENBQ3BGLENBQ0g7VUFFVCxDQUFDO1VBQUN6UCxPQUFBLENBQUFxUCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNGLElBQUF6SixNQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQWtOLEtBQUEsR0FBQWxOLE9BQUE7VUFDQSxJQUFBaUwsV0FBQSxHQUFBakwsT0FBQTtVQUNBLElBQUE4RyxNQUFBLEdBQUE5RyxPQUFBO1VBQ0EsSUFBQWdILFFBQUEsR0FBQWhILE9BQUE7VUFFTztVQUFXLE1BQU13TyxXQUFXLEdBQUdBLENBQUM7WUFBRWpMO1VBQUksQ0FBRSxLQUFJO1lBQ2xELE1BQU1vTyxTQUFTLEdBQUc5SyxNQUFBLENBQUFwQixPQUFLLENBQUMyQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3BDLE1BQU07Y0FDTHFDLEtBQUssRUFBRTtnQkFBRW1JLFNBQVMsRUFBRW5JO2NBQUs7WUFBRSxDQUMzQixHQUFHLElBQUF6QyxRQUFBLENBQUFNLGNBQWMsR0FBRTtZQUNwQixNQUFNdUssU0FBUyxHQUFHQSxDQUFBLEtBQU1GLFNBQVMsQ0FBQ2hLLE9BQU8sQ0FBQzBILFNBQVMsRUFBRTtZQUNyRCxNQUFNa0IsVUFBVSxHQUFHQSxDQUFBLEtBQU1vQixTQUFTLENBQUNoSyxPQUFPLENBQUNtSyxLQUFLLEVBQUU7WUFFbEQsT0FDQ2pMLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUE7Y0FBS0MsU0FBUyxFQUFFO1lBQWdDLEdBQy9DcEMsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDaUMsV0FBQSxDQUFBMEQsTUFBTTtjQUFDeEgsSUFBSSxFQUFDLE1BQU07Y0FBQ2lDLE9BQU8sRUFBRXlJLFNBQVM7Y0FBRUUsSUFBSSxFQUFDO1lBQVMsRUFBRyxFQUV4RGxMLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUE7Y0FBUXpCLEdBQUcsRUFBRW9LLFNBQVM7Y0FBRS9CLE9BQU8sRUFBRVc7WUFBVSxHQUMxQzFKLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUEsQ0FBQ2xDLE1BQUEsQ0FBQW9DLFVBQVU7Y0FBQy9CLElBQUksRUFBQyxPQUFPO2NBQUM4QixTQUFTLEVBQUMsT0FBTztjQUFDRyxPQUFPLEVBQUVtSDtZQUFVLEVBQUksRUFDbEUxSixNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBLGlCQUNDbkMsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxhQUFLUyxLQUFLLENBQUNtSSxTQUFTLENBQU0sQ0FDbEIsRUFDVC9LLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUEsY0FDQ25DLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUEsWUFBSVMsS0FBSyxDQUFDaEYsT0FBTyxDQUFLLENBQ2pCLEVBQ05vQyxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBLENBQUNrRSxLQUFBLENBQUFvRCxNQUFNO2NBQUMvTSxJQUFJLEVBQUVBLElBQUk7Y0FBRWdOLFVBQVUsRUFBRUE7WUFBVSxFQUFJLENBQ3RDLENBRUw7VUFFUixDQUFDO1VBQUN0UCxPQUFBLENBQUF1TixXQUFBLEdBQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JGLElBQUEzSCxNQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQStHLE1BQUEsR0FBQS9HLE9BQUE7VUFFTSxTQUFVME8sU0FBU0EsQ0FBQztZQUFFckMsV0FBVztZQUFFaE0sS0FBSztZQUFFdU4sT0FBTztZQUFFSyxVQUFVO1lBQUVoSixRQUFRO1lBQUUwSSxJQUFJO1lBQUVqSjtVQUFRLENBQUU7WUFDOUYsTUFBTXNOLFdBQVcsR0FBR25MLE1BQUEsQ0FBQXBCLE9BQUssQ0FBQzJCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDdENQLE1BQUEsQ0FBQXBCLE9BQUssQ0FBQ2dELFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1xSSxNQUFNLEdBQUdrQixXQUFXLENBQUNySyxPQUFPO2NBQ2xDbUosTUFBTSxDQUFDbUIsS0FBSyxDQUFDekcsTUFBTSxHQUFHLE1BQU07Y0FDNUJzRixNQUFNLENBQUNtQixLQUFLLENBQUN6RyxNQUFNLEdBQUdtQyxJQUFJLENBQUM5RCxNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBR2lILE1BQU0sQ0FBQy9JLFlBQVksR0FBRyxJQUFJO2NBQzVFLElBQUksQ0FBQyxXQUFXLEVBQUU1QixTQUFTLENBQUMsQ0FBQ0MsUUFBUSxDQUFDdUgsSUFBSSxDQUFDUSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDbkUsQ0FBQyxFQUFFLENBQUNSLElBQUksQ0FBQyxDQUFDO1lBRVYsSUFBQTVHLE1BQUEsQ0FBQVMsU0FBUyxFQUNSLENBQUNuSCxLQUFLLENBQUMsRUFDUCxNQUFLO2NBQ0pLLFVBQVUsQ0FBQytHLFVBQVUsQ0FBQyxNQUFNdUssV0FBVyxDQUFDckssT0FBTyxDQUFDdUssS0FBSyxFQUFFLEVBQUUsR0FBRyxDQUFDO2NBQzdEN0YsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNuQixDQUFDLEVBQ0QsZ0JBQWdCLENBQ2hCO1lBRUQsTUFBTThGLGdCQUFnQixHQUFHO2NBQUV6TixRQUFRLEVBQUVPLFFBQVEsSUFBSVA7WUFBUSxDQUFFO1lBQzNELE1BQU0wTixpQkFBaUIsR0FBRzFMLENBQUMsSUFBRztjQUM3QixNQUFNO2dCQUFFdEY7Y0FBSyxDQUFFLEdBQUdzRixDQUFDLENBQUNvSyxNQUFNO2NBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUUzSyxTQUFTLENBQUMsQ0FBQ0MsUUFBUSxDQUFDaEYsS0FBSyxDQUFDK00sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Y0FDL0RQLE9BQU8sQ0FBQ3hNLEtBQUssQ0FBQztZQUNmLENBQUM7WUFDRCxNQUFNaVIsYUFBYSxHQUFHM0wsQ0FBQyxJQUFHO2NBQ3pCLElBQUlBLENBQUMsQ0FBQzRMLEdBQUcsS0FBSyxPQUFPLEVBQUU7Y0FDdkIsTUFBTUMsRUFBRSxHQUFHQyxTQUFTLElBQUlBLFNBQVMsR0FBRyxJQUFJO2NBQ3hDLE1BQU1wUixLQUFLLEdBQUdzRixDQUFDLENBQUNvSyxNQUFNLENBQUMxUCxLQUFLLENBQUMrTSxVQUFVLENBQUMsSUFBSSxDQUFDO2NBQzdDLElBQUksQ0FBQyxFQUFFLEVBQUVoSSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQ2hGLEtBQUssQ0FBQyxFQUFFO2NBQzNDc0YsQ0FBQyxDQUFDK0wsUUFBUSxHQUFHN0UsT0FBTyxDQUFDMkUsRUFBRSxDQUFDLEdBQUd0RSxVQUFVLEVBQUU7WUFDeEMsQ0FBQztZQUVELE9BQ0NwSCxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBO2NBQUEsR0FDS21KLGdCQUFnQjtjQUNwQmIsSUFBSSxFQUFFLENBQUM7Y0FDUGxRLEtBQUssRUFBRXVNLElBQUk7Y0FDWDZELFFBQVEsRUFBRVksaUJBQWlCO2NBQzNCTSxTQUFTLEVBQUVMLGFBQWE7Y0FDeEJNLFNBQVMsRUFBRSxJQUFJO2NBQ2YxSixTQUFTLEVBQUMsaUJBQWlCO2NBQzNCMUIsR0FBRyxFQUFFeUs7WUFBVyxFQUNmO1VBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUFuTCxNQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQTRTLFNBQUEsR0FBQTVTLE9BQUE7VUFGQTs7VUFRTSxTQUFVZ1AsS0FBS0EsQ0FBQztZQUFFQztVQUFNLENBQWM7WUFDM0MsTUFBTTRELFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQ3pNLFFBQVEsQ0FBQzZJLE1BQU0sQ0FBQztZQUN2RCxNQUFNNkQsT0FBTyxHQUFHN0QsTUFBTSxLQUFLLFNBQVM7WUFDcEMsTUFBTSxDQUFDOEQsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDLEdBQUcsSUFBQU4sU0FBQSxDQUFBTyxRQUFRLEVBQUNOLFNBQVMsRUFBRUMsT0FBTyxDQUFDO1lBQzVFLE1BQU1NLFdBQVcsR0FBR0gsT0FBTyxDQUFDSSxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDdkQsTUFBTUMsZUFBZSxHQUFHUCxPQUFPLENBQUNLLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUMzRCxPQUNDek0sTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBMEIsR0FDeENwQyxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBLGVBQU8sR0FBR3VLLGVBQWUsRUFBRSxFLElBQVMsRUFDcEMxTSxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBLGVBQU8sR0FBR29LLFdBQVcsRUFBRSxDQUFRLENBQzFCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUF2TSxNQUFBLEdBQUE3RyxPQUFBO1VBREE7O1VBRUEsTUFBTTtZQUFFNEosUUFBUTtZQUFFbkI7VUFBUyxDQUFFLEdBQUc1QixNQUFBLENBQUFwQixPQUFLO1VBRS9CLFNBQVUwTixRQUFRQSxDQUFDTixTQUFrQixFQUFFQyxPQUFnQjtZQUM1RCxNQUFNLENBQUNVLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUc3SixRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRW5DbkIsU0FBUyxDQUFDLE1BQUs7Y0FDZCxJQUFJaUwsVUFBMEI7Y0FFOUIsSUFBSWIsU0FBUyxFQUFFO2dCQUNkYSxVQUFVLEdBQUdDLFdBQVcsQ0FBQyxNQUFLO2tCQUM3QkYsT0FBTyxDQUFDRyxRQUFRLElBQUlBLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDOztjQUdULE9BQU8sTUFBSztnQkFDWEMsYUFBYSxDQUFDSCxVQUFVLENBQUM7Y0FDMUIsQ0FBQztZQUNGLENBQUMsRUFBRSxDQUFDYixTQUFTLENBQUMsQ0FBQztZQUVmcEssU0FBUyxDQUFDLE1BQUs7Y0FDZCxJQUFJcUssT0FBTyxFQUFFO2dCQUNaVyxPQUFPLENBQUMsQ0FBQyxDQUFDOztZQUVaLENBQUMsRUFBRSxDQUFDWCxPQUFPLENBQUMsQ0FBQztZQUViLE1BQU1JLFlBQVksR0FBR00sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLE1BQU1QLE9BQU8sR0FBR2EsSUFBSSxDQUFDQyxLQUFLLENBQUVQLElBQUksR0FBRyxHQUFHLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNUixPQUFPLEdBQUdjLElBQUksQ0FBQ0MsS0FBSyxDQUFFUCxJQUFJLEdBQUcsSUFBSSxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTVQsS0FBSyxHQUFHZSxJQUFJLENBQUNDLEtBQUssQ0FBQ1AsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFekMsT0FBTyxDQUFDVCxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUM7VUFDL0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFyTSxNQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQWdVLFFBQUEsR0FBQWhVLE9BQUE7VUFDQSxJQUFBaUwsV0FBQSxHQUFBakwsT0FBQTtVQUNBLElBQUE4RyxNQUFBLEdBQUE5RyxPQUFBO1VBQ0EsSUFBQXVCLFFBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBaVUsWUFBQSxHQUFBalUsT0FBQTtVQUNBLElBQUFrVSxPQUFBLEdBQUFsVSxPQUFBO1VBRU0sU0FBVThNLFlBQVlBLENBQUE7WUFDM0IsU0FBU3FILFVBQVVBLENBQUE7Y0FDbEJILFFBQUEsQ0FBQUksU0FBUyxDQUFDQyxXQUFXLEdBQUcsSUFBSTtZQUM3QjtZQUVBLElBQUksQ0FBQzlTLFFBQUEsQ0FBQWdCLFVBQVUsQ0FBQzJDLEtBQUssRUFBRSxPQUFPMkIsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDaUwsWUFBQSxDQUFBSyxhQUFhLE9BQUc7WUFDL0MsT0FDQ3pOLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDcEMsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQTtjQUFLdUwsR0FBRyxFQUFDLHVCQUF1QjtjQUFDQyxHQUFHLEVBQUM7WUFBZ0IsRUFBRyxFQUN4RDNOLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQXFCLEdBQ3BDcEMsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxDQUFDbEMsTUFBQSxDQUFBcUosSUFBSTtjQUFDaEosSUFBSSxFQUFFK00sT0FBQSxDQUFBTyxLQUFLLENBQUMsZUFBZSxDQUFDO2NBQUV4TCxTQUFTLEVBQUM7WUFBbUIsRUFBRyxFQUNwRXBDLE1BQUEsQ0FBQXBCLE9BQUEsQ0FBQXVELGFBQUEsOEJBQXVCLEVBQ3ZCbkMsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxZQUNDbkMsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxvRUFBaUUsRSxLQUFDbkMsTUFBQSxDQUFBcEIsT0FBQSxDQUFBdUQsYUFBQSxZQUFNLEUsbURBRXJFLEVBQ0puQyxNQUFBLENBQUFwQixPQUFBLENBQUF1RCxhQUFBLENBQUNpQyxXQUFBLENBQUEwRCxNQUFNO2NBQUN4SCxJQUFJLEVBQUMsTUFBTTtjQUFDaUMsT0FBTyxFQUFFK0ssVUFBVTtjQUFFMUMsS0FBSyxFQUFDO1lBQWdCLEVBQUcsQ0FDNUQsQ0FDRjtVQUVSIiwiaWdub3JlTGlzdCI6W119