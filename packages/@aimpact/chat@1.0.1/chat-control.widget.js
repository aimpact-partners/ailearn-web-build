System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@aimpact/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/messages.code", "pragmate-ui@0.1.1/perfect-scrollbar", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/config", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Chat, ChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, SystemModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioManager: void 0,
    Chat: void 0,
    ChatInput: void 0,
    PermissionsErrorModal: void 0,
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
    }, function (_aimpactMediaManager100Recorder) {
      dependency_7 = _aimpactMediaManager100Recorder;
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
    }, function (_aimpactChat101Config) {
      dependency_20 = _aimpactChat101Config;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.3.2"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.42"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/voice', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@aimpact/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/core', dependency_8], ['@aimpact/chat/extensions', dependency_9], ['react', dependency_10], ['pragmate-ui/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/messages.code', dependency_13], ['pragmate-ui/perfect-scrollbar', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['pragmate-ui/preload', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['pragmate-ui/form', dependency_18], ['pragmate-ui/components', dependency_19], ['@aimpact/chat/config', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/toast', dependency_22], ['@aimpact/chat/ui/manager', dependency_23], ['@aimpact/chat/shared/icons', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-chat-control",
        "attrs": ["id", "container", "disabled", "playable"],
        "vspecifier": "@aimpact/chat@1.0.1/chat-control.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/chat-control.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2459821562,
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
              this.#store = new _store.StoreManager(this.attributes);
              globalThis.store = this.#store;
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            constructor(...args) {
              super(...args);
              // this.attributes.on('change', () => this.#store?.checkAttributes(this.attributes));
            }
            unmount() {
              super.unmount();
              this.#store?.unmount();
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
        hash: 1723743756,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _recorder = require("@aimpact/media-manager/recorder");
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
        hash: 4289090843,
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
            constructor(attrs) {
              super(attrs.get('id'));
              this.#id = attrs.get('id');
              this.reactiveProps(['waitingResponse', 'autoplay']);
              this.autoplay = true;
              attrs.on('change', () => this.checkAttributes(attrs));
              this.load(this.#id);
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
              this.playable = attributes.get('disabled') === 'true' || attributes.get('playable') === undefined;
              if (!this.playable) {
                this.#audio.player?.stop();
              }
            }
            unmount() {
              this.#audio.player?.stop();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/chat/back-arrow
      ***************************************/

      ims.set('./views/chat/back-arrow', {
        hash: 3094757389,
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
              const container = ref.current?.closest('.chat-control__container')?.querySelector('.chat__content');
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
        hash: 4119802086,
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

      /***************************************************
      INTERNAL MODULE: ./views/input/recording/error-modal
      ***************************************************/

      ims.set('./views/input/recording/error-modal', {
        hash: 724562986,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsErrorModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          /*bundle*/
          const PermissionsErrorModal = ({
            show,
            onClose
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useChatContext)();
            const {
              title,
              description
            } = texts.permissions.error;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: 'modal--centered',
              open: true,
              show: true,
              onClose: onClose,
              centered: true
            }, _react.default.createElement("div", {
              className: 'permissions__modal-container'
            }, _react.default.createElement("div", {
              className: 'title-intro__modal-container'
            }, _react.default.createElement("h3", null, title)), _react.default.createElement(_icons.Icon, {
              className: 'mic__modal-icon lg my-10',
              icon: 'mic'
            }), _react.default.createElement("p", {
              className: 'description__modal-text'
            }, description))));
          };
          exports.PermissionsErrorModal = PermissionsErrorModal;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/input/recording/index
      *********************************************/

      ims.set('./views/input/recording/index', {
        hash: 2933233769,
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
          var _errorModal = require("./error-modal");
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
            const [error, setError] = (0, _react.useState)(false);
            const [hasPermission, setHasPermission] = (0, _react.useState)(globalThis?.localStorage.getItem('aimpact.recording.permission'));
            const {
              texts
            } = (0, _context.useChatContext)();
            const onRecord = async () => {
              try {
                await recorder.record();
                setRecording(!recording);
              } catch (e) {
                setError(true);
              }
            };
            const getUserMedia = () => {
              recorder.hasPermissions().then(() => {
                globalThis?.localStorage.setItem('aimpact.recording.permission', 'true');
                setHasPermission('true');
              }).catch(error => {
                console.log('permisos no concedidos');
                setError(true);
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
                onRecord();
              } catch (e) {
                console.log(30);
                setError(true);
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
            }), _react.default.createElement(_errorModal.PermissionsErrorModal, {
              show: error,
              onClose: () => setError(false)
            }));
          };
          exports.RecordingButton = RecordingButton;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/input/recording/modal
      *********************************************/

      ims.set('./views/input/recording/modal', {
        hash: 452957598,
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
        "im": "./views/input/recording/error-modal",
        "from": "PermissionsErrorModal",
        "name": "PermissionsErrorModal"
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
        (require || prop === 'PermissionsErrorModal') && _export("PermissionsErrorModal", PermissionsErrorModal = require ? require('./views/input/recording/error-modal').PermissionsErrorModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsImNvbnN0cnVjdG9yIiwiYXJncyIsInVubW91bnQiLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiX3JlY29yZGVyIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInBhcmVudCIsInJlY29yZGVyIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJwbGF5ZXIiLCJjdXJyZW50UGxheWVyIiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndXVhZ2UiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfZXh0ZW5zaW9ucyIsIm1lc3NhZ2VzIiwiRVhURU5TSU9OUyIsImNhdGVnb3J5IiwiY2hhdCIsImNoYXRzIiwiaXRlbXMiLCJhdWRpbyIsImF1ZGlvTWFuYWdlciIsImticyIsImtub3dsZWRnZUJveGVzIiwic2VsZWN0ZWRLYiIsImtiIiwic2VsZWN0ZWRNb2RlbCIsIm1vZGVsIiwibm90Rm91bmQiLCJzZWxlY3RlZEtiUGF0aCIsImZpbmQiLCJpIiwiaWQiLCJwYXRoIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlIiwiZGlzYWJsZWQiLCJ0cmlnZ2VyRXZlbnQiLCJleHRlbnNpb25zIiwiTWFwIiwiYXR0cnMiLCJnZXQiLCJhdXRvcGxheSIsImNoZWNrQXR0cmlidXRlcyIsImxvYWQiLCJjbGVhbiIsImZldGNoaW5nIiwicmVhZHkiLCJDaGF0IiwibG9hZEFsbCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJkZWZhdWx0IiwiZXh0cyIsIm1ldGFkYXRhIiwiZm9yRWFjaCIsImV4dGVuc2lvbiIsImluZGV4Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ3YWl0aW5nUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJlIiwiY29uc29sZSIsImVycm9yIiwicGxheWFibGUiLCJzdG9wIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX3VzZUV4dGVuc2lvbiIsIl9tZXNzYWdlcyIsIl9leHRlbnNpb25SZW5kZXJlciIsIkNvbnRlbnQiLCJ0ZXh0cyIsInRvdGFsTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGVuZ3RoIiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIkNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfaW5wdXQiLCJfYmFja0Fycm93IiwiX2NvbnRlbnQiLCJwcm9wcyIsImNoYXRJbnRybyIsInJlYWRlciIsImF2b2lkQ2hhdCIsIkNoYXRJbnB1dCIsImlzV2FpdGluZyIsIl9jb21wb25lbnRzIiwiX3ByZWxvYWQiLCJDaGF0U2tlbGV0b24iLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiUHJlbG9hZCIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0UmVhZHkiLCJjb250cm9sIiwib25SZWFkeSIsImV2ZW50IiwiQ2hhdENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJjb250ZXh0VmFsdWUiLCJ0cmFjZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX2NvbmZpZyIsIl9yZWNvcmRpbmciLCJfaW5kZXgiLCJfdGV4dElucHV0IiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0Iiwic2V0VGV4dCIsInNlbmRBdWRpbyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJzeXN0ZW0iLCJwYXJhbXMiLCJjb25maWciLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJfdGltZXIiLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsImFjdGlvbiIsIl9tb2RhbCIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwiZGVzY3JpcHRpb24iLCJwZXJtaXNzaW9ucyIsIkFsZXJ0TW9kYWwiLCJvcGVuIiwiY2VudGVyZWQiLCJJY29uIiwiX3BsYXllciIsIl9jb250ZXh0MiIsIl9lcnJvck1vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2V0RXJyb3IiLCJoYXNQZXJtaXNzaW9uIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInJlY29yZCIsImdldFVzZXJNZWRpYSIsImhhc1Blcm1pc3Npb25zIiwidGhlbiIsInNldEl0ZW0iLCJjYXRjaCIsImxvZyIsInBsYXlBY3Rpb24iLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwic3VidGl0bGUiLCJpbnRybyIsIl90b2FzdCIsIlVJRm9ybSIsImNsb3NlTW9kYWwiLCJzZXRWYWx1ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFyZWFWYWx1ZSIsInRhcmdldCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwicHVibGlzaCIsInN0YXR1cyIsInRvYXN0Iiwic3VjY2VzcyIsIlRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJsYWJlbCIsInR5cGUiLCJkaWFsb2dSZWYiLCJhc3Npc3RhbnQiLCJvcGVuTW9kYWwiLCJjbG9zZSIsIm1vZGUiLCJ0ZXh0QXJlYVJlZiIsInN0eWxlIiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciIsIl9tYW5hZ2VyIiwiX2NvbXBvbmVudHMyIiwiX2ljb25zMiIsIm9wZW5EaWFsb2ciLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsIlByZWxvYWRTY3JlZW4iLCJzcmMiLCJhbHQiLCJJQ09OUyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvdHMvdmlld3MvY2hhdC9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jaGF0L2V4dGVuc2lvbi1yZW5kZXJlci50c3giLCIvdHMvdmlld3MvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvdmlld3MvY2hhdC91c2UtZXh0ZW5zaW9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DQyxVQUFVLENBQUNKLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUM5QixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUssTUFBTUEsQ0FBQTtjQUNULE9BQU9ULE1BQUEsQ0FBQVUsSUFBSTtZQUNaO1lBRUFDLFlBQVksR0FBR0MsSUFBSTtjQUNsQixLQUFLLENBQUMsR0FBR0EsSUFBSSxDQUFDO2NB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