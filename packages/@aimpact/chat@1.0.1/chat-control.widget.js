System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/messages.code", "pragmate-ui@0.1.1/perfect-scrollbar", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Chat, ChatInput, RecordingButton, PermissionsModal, SystemModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioManager: void 0,
    Chat: void 0,
    ChatInput: void 0,
    RecordingButton: void 0,
    PermissionsModal: void 0,
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
    }, function (_pragmateUi011PerfectScrollbar) {
      dependency_14 = _pragmateUi011PerfectScrollbar;
    }, function (_aimpactChat101SharedComponents) {
      dependency_15 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011Preload) {
      dependency_16 = _pragmateUi011Preload;
    }, function (_aimpactChat101SharedHooks) {
      dependency_17 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Form) {
      dependency_18 = _pragmateUi011Form;
    }, function (_pragmateUi011Components) {
      dependency_19 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_20 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Modal) {
      dependency_21 = _pragmateUi011Modal;
    }, function (_pragmateUi011Toast) {
      dependency_22 = _pragmateUi011Toast;
    }, function (_aimpactChat101UiManager) {
      dependency_23 = _aimpactChat101UiManager;
    }, function (_aimpactChat101SharedIcons) {
      dependency_24 = _aimpactChat101SharedIcons;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/voice', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/core', dependency_8], ['@aimpact/chat/extensions', dependency_9], ['react', dependency_10], ['pragmate-ui/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/messages.code', dependency_13], ['pragmate-ui/perfect-scrollbar', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['pragmate-ui/preload', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['pragmate-ui/form', dependency_18], ['pragmate-ui/components', dependency_19], ['@aimpact/chat/config', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/toast', dependency_22], ['@aimpact/chat/ui/manager', dependency_23], ['@aimpact/chat/shared/icons', dependency_24]]);
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

      /*********************************************
      INTERNAL MODULE: ./views/input/recording/index
      *********************************************/

      ims.set('./views/input/recording/index', {
        hash: 1095037757,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _player = require("../player");
          var _context = require("../../context");
          var _context2 = require("../context");
          var _modal = require("./modal");
          /*bundle*/
          const RecordingButton = ({
            store,
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
            const [hasPermission, setHasPermission] = (0, _react.useState)(globalThis?.localStorage.getItem('aimpact.recording.permission'));
            const {
              texts
            } = (0, _context.useChatContext)();
            const onRecord = async () => {
              await recorder.record();
              setRecording(!recording);
            };
            const getUserMedia = () => {
              recorder.hasPermissions().then(() => {
                globalThis?.localStorage.setItem('aimpact.recording.permission', 'true');
                onRecord();
              }).catch(error => {
                console.log('permisos no concedidos');
              });
            };
            const playAction = async event => {
              try {
                event.preventDefault();
                setFetching(true);
                if (!hasPermission || hasPermission !== 'true') {
                  setShowModal(true);
                  return;
                }
                getUserMedia();
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              icon: 'mic',
              fetching: fetching,
              onClick: playAction,
              disabled: disabled || fetching
            }), _react.default.createElement(_modal.PermissionsModal, {
              show: showModal,
              onClose: onClose,
              onConfirm: getUserMedia
            }));
          };
          exports.RecordingButton = RecordingButton;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/input/recording/modal
      *********************************************/

      ims.set('./views/input/recording/modal', {
        hash: 1234381782,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          /*bundle*/
          const PermissionsModal = ({
            show,
            onClose,
            onConfirm
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useChatContext)();
            const subtitle = texts.permissions.title;
            const description = texts.permissions.description;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              open: true,
              show: true,
              onClose: onClose,
              centered: true,
              onConfirm: onConfirm
            }, _react.default.createElement("div", {
              className: 'permissions__modal-container'
            }, _react.default.createElement("div", {
              className: 'title-intro__modal-container'
            }, _react.default.createElement("span", {
              className: 'intro__modal-text p2'
            }, texts.permissions.intro), _react.default.createElement("h3", null, subtitle)), _react.default.createElement(_icons.Icon, {
              className: 'mic__modal-icon lg my-10',
              icon: 'mic'
            }), _react.default.createElement("p", {
              className: 'description__modal-text'
            }, description))));
          };
          exports.PermissionsModal = PermissionsModal;
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
        "im": "./views/input/recording/index",
        "from": "RecordingButton",
        "name": "RecordingButton"
      }, {
        "im": "./views/input/recording/modal",
        "from": "PermissionsModal",
        "name": "PermissionsModal"
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
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/input/recording/index').RecordingButton : value);
        (require || prop === 'PermissionsModal') && _export("PermissionsModal", PermissionsModal = require ? require('./views/input/recording/modal').PermissionsModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJnZXQiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsImNvbnN0cnVjdG9yIiwiYXJncyIsIm9uIiwiY2hlY2tBdHRyaWJ1dGVzIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImxhbmd1YWdlIiwiQXBwV3JhcHBlciIsInJhdGUiLCJhdWRpb1NwZWVkIiwibGlzdGVuQXBwQ2hhbmdlcyIsInNldCIsImxhbmd1dWFnZSIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInRyaWdnZXIiLCJfY29yZSIsIl9hdWRpbyIsIl9leHRlbnNpb25zIiwibWVzc2FnZXMiLCJFWFRFTlNJT05TIiwiY2F0ZWdvcnkiLCJjaGF0IiwiY2hhdHMiLCJpdGVtcyIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwia2JzIiwia25vd2xlZGdlQm94ZXMiLCJzZWxlY3RlZEtiIiwia2IiLCJzZWxlY3RlZE1vZGVsIiwibW9kZWwiLCJub3RGb3VuZCIsInNlbGVjdGVkS2JQYXRoIiwiZmluZCIsImkiLCJpZCIsInBhdGgiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJkaXNhYmxlZCIsInRyaWdnZXJFdmVudCIsImV4dGVuc2lvbnMiLCJNYXAiLCJhdXRvcGxheSIsImxvYWQiLCJjbGVhbiIsImZldGNoaW5nIiwicmVhZHkiLCJDaGF0IiwibG9hZEFsbCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJkZWZhdWx0IiwiZXh0cyIsIm1ldGFkYXRhIiwiZm9yRWFjaCIsImV4dGVuc2lvbiIsImluZGV4Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ3YWl0aW5nUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX3VzZUV4dGVuc2lvbiIsIl9tZXNzYWdlcyIsIl9leHRlbnNpb25SZW5kZXJlciIsIkNvbnRlbnQiLCJ0ZXh0cyIsInRvdGFsTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGVuZ3RoIiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIkNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfaW5wdXQiLCJfYmFja0Fycm93IiwiX2NvbnRlbnQiLCJwcm9wcyIsImNoYXRJbnRybyIsInJlYWRlciIsImF2b2lkQ2hhdCIsIkNoYXRJbnB1dCIsImlzV2FpdGluZyIsIl9jb21wb25lbnRzIiwiX3ByZWxvYWQiLCJDaGF0U2tlbGV0b24iLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiUHJlbG9hZCIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0UmVhZHkiLCJjb250cm9sIiwib25SZWFkeSIsImV2ZW50IiwiQ2hhdENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJjb250ZXh0VmFsdWUiLCJ0cmFjZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX2NvbmZpZyIsIl9yZWNvcmRpbmciLCJfaW5kZXgiLCJfdGV4dElucHV0IiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0Iiwic2V0VGV4dCIsInNlbmRBdWRpbyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic3RvcCIsImhhbmRsZVNlbmQiLCJvblN1Ym1pdCIsInJlcGxhY2VBbGwiLCJ0cmltIiwic3lzdGVtIiwicGFyYW1zIiwiY29uZmlnIiwiU3lzdGVtTW9kYWwiLCJGb3JtIiwiVGV4dElucHV0IiwiQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiX3RpbWVyIiwiUGxheWVyIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJfcGxheWVyIiwiX2NvbnRleHQyIiwiX21vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiaGFzUGVybWlzc2lvbiIsInNldEhhc1Blcm1pc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJyZWNvcmQiLCJnZXRVc2VyTWVkaWEiLCJoYXNQZXJtaXNzaW9ucyIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJsb2ciLCJwbGF5QWN0aW9uIiwib25DbG9zZSIsIlBlcm1pc3Npb25zTW9kYWwiLCJzaG93Iiwib25Db25maXJtIiwic3VidGl0bGUiLCJwZXJtaXNzaW9ucyIsImRlc2NyaXB0aW9uIiwiQWxlcnRNb2RhbCIsIm9wZW4iLCJjZW50ZXJlZCIsImludHJvIiwiSWNvbiIsIl90b2FzdCIsIlVJRm9ybSIsImNsb3NlTW9kYWwiLCJzZXRWYWx1ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0QXJlYVZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJwdWJsaXNoIiwic3RhdHVzIiwidG9hc3QiLCJzdWNjZXNzIiwiVGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImxhYmVsIiwidHlwZSIsImRpYWxvZ1JlZiIsImFzc2lzdGFudCIsIm9wZW5Nb2RhbCIsImNsb3NlIiwibW9kZSIsInRleHRBcmVhUmVmIiwic3R5bGUiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwiX21hbmFnZXIiLCJfY29tcG9uZW50czIiLCJfaWNvbnMyIiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiUHJlbG9hZFNjcmVlbiIsInNyYyIsImFsdCIsIklDT05TIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvbWVzc2FnZXMudHMiLCIvdHMvc3RvcmUvYXVkaW8udHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHMvdmlld3MvY2hhdC9iYWNrLWFycm93LnRzeCIsIi90cy92aWV3cy9jaGF0L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NoYXQvZXh0ZW5zaW9uLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Y0FDekRDLFVBQVUsQ0FBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJTSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1YsTUFBQSxDQUFBVyxJQUFJO1lBQ1o7WUFFQUMsWUFBWSxHQUFHQyxJQUFJO2NBQ2xCLEtBQUssQ0FBQyxHQUFHQSxJQUFJLENBQUM7Y0FFZCxJQUFJLENBQUNOLFVBQVUsQ0FBQ08sRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFBVixLQUFNLEVBQUVXLGVBQWUsQ0FBQyxJQUFJ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