System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/messages.code", "pragmate-ui@0.1.1/perfect-scrollbar", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context3) {
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
        hash: 3678442987,
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
        hash: 2946877669,
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
        hash: 70978002,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJnZXQiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsIiwiX3ZvaWNlIiwiX3dyYXBwZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImN1cnJlbnRQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImxhbmd1YWdlIiwiQXBwV3JhcHBlciIsInJhdGUiLCJhdWRpb1NwZWVkIiwib24iLCJsaXN0ZW5BcHBDaGFuZ2VzIiwic2V0IiwibGFuZ3V1YWdlIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwidHJpZ2dlciIsIl9jb3JlIiwiX2F1ZGlvIiwiX2V4dGVuc2lvbnMiLCJtZXNzYWdlcyIsIkVYVEVOU0lPTlMiLCJjYXRlZ29yeSIsImNoYXQiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJrYnMiLCJrbm93bGVkZ2VCb3hlcyIsInNlbGVjdGVkS2IiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsImlkIiwicGF0aCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZSIsImV4dGVuc2lvbnMiLCJNYXAiLCJhdXRvcGxheSIsImxvYWQiLCJjbGVhbiIsImZldGNoaW5nIiwicmVhZHkiLCJDaGF0IiwibG9hZEFsbCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJkZWZhdWx0IiwidHJpZ2dlckV2ZW50IiwiZXh0cyIsIm1ldGFkYXRhIiwiZm9yRWFjaCIsImV4dGVuc2lvbiIsImluZGV4Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ3YWl0aW5nUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX3VzZUV4dGVuc2lvbiIsIl9tZXNzYWdlcyIsIl9leHRlbnNpb25SZW5kZXJlciIsIkNvbnRlbnQiLCJ0ZXh0cyIsInRvdGFsTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGVuZ3RoIiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIkNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfaW5wdXQiLCJfYmFja0Fycm93IiwiX2NvbnRlbnQiLCJjaGF0SW50cm8iLCJyZWFkZXIiLCJhdm9pZENoYXQiLCJDaGF0SW5wdXQiLCJpc1dhaXRpbmciLCJfY29tcG9uZW50cyIsIl9wcmVsb2FkIiwiQ2hhdFNrZWxldG9uIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIlByZWxvYWQiLCJ3aWR0aCIsImhlaWdodCIsInNldFJlYWR5IiwiY29udHJvbCIsIm9uUmVhZHkiLCJldmVudCIsIkNoYXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJwcm9wcyIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJjb250ZXh0VmFsdWUiLCJ0cmFjZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX2NvbmZpZyIsIl9yZWNvcmRpbmciLCJfaW5kZXgiLCJfdGV4dElucHV0IiwiX2NvbnRleHQyIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0Iiwic2V0VGV4dCIsImRpc2FibGVkIiwic2VuZEF1ZGlvIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wIiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJzeXN0ZW0iLCJwYXJhbXMiLCJjb25maWciLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJfdGltZXIiLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsImFjdGlvbiIsIl9tb2RhbCIsIl9wbGF5ZXIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwbGF5QWN0aW9uIiwicGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb25zIiwic3RhdGUiLCJyZWNvcmQiLCJvbkNsb3NlIiwiQWxlcnRNb2RhbCIsIm9wZW4iLCJzaG93IiwiY2VudGVyZWQiLCJwZXJtaXNzaW9ucyIsImludHJvIiwiSWNvbiIsImRlc2NyaXB0aW9uIiwiX3RvYXN0IiwiVUlGb3JtIiwiY2xvc2VNb2RhbCIsInNldFZhbHVlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJUZXh0YXJlYSIsInJvd3MiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibGFiZWwiLCJ0eXBlIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJtb2RlIiwidGV4dEFyZWFSZWYiLCJzdHlsZSIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJfbWFuYWdlciIsIl9jb21wb25lbnRzMiIsIl9pY29uczIiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIiwic3JjIiwiYWx0IiwiSUNPTlMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy92aWV3cy9jaGF0L2JhY2stYXJyb3cudHN4IiwiL3RzL3ZpZXdzL2NoYXQvY29udGVudC50c3giLCIvdHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4IiwiL3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvdXNlLWV4dGVuc2lvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy50c3giLCIvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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