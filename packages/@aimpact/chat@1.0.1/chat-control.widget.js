System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@aimpact/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/messages.code", "pragmate-ui@0.1.1/perfect-scrollbar", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32-beta.12/config", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0032Beta12Config) {
      dependency_20 = _aimpactAilearnApp0032Beta12Config;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.3.2"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.32-beta.12"]]);
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
        hash: 1306211524,
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
              console.log(300);
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
        hash: 1218241359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsErrorModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          /*bundle*/
          const PermissionsErrorModal = ({
            show,
            onClose
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useSpokenContext)();
            const {
              title,
              description
            } = texts.permissions.error;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              open: true,
              show: true,
              onClose: onClose,
              centered: true
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("h3", null, title)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsErrorModal = PermissionsErrorModal;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/input/recording/index
      *********************************************/

      ims.set('./views/input/recording/index', {
        hash: 568264277,
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
            const [error, setError] = (0, _react.useState)(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsImNvbnN0cnVjdG9yIiwiYXJncyIsInVubW91bnQiLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiX3JlY29yZGVyIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInBhcmVudCIsInJlY29yZGVyIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJwbGF5ZXIiLCJjdXJyZW50UGxheWVyIiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndXVhZ2UiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfZXh0ZW5zaW9ucyIsIm1lc3NhZ2VzIiwiRVhURU5TSU9OUyIsImNhdGVnb3J5IiwiY2hhdCIsImNoYXRzIiwiaXRlbXMiLCJhdWRpbyIsImF1ZGlvTWFuYWdlciIsImticyIsImtub3dsZWRnZUJveGVzIiwic2VsZWN0ZWRLYiIsImtiIiwic2VsZWN0ZWRNb2RlbCIsIm1vZGVsIiwibm90Rm91bmQiLCJzZWxlY3RlZEtiUGF0aCIsImZpbmQiLCJpIiwiaWQiLCJwYXRoIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlIiwiZGlzYWJsZWQiLCJ0cmlnZ2VyRXZlbnQiLCJleHRlbnNpb25zIiwiTWFwIiwiYXR0cnMiLCJnZXQiLCJhdXRvcGxheSIsImNoZWNrQXR0cmlidXRlcyIsImxvYWQiLCJjbGVhbiIsImZldGNoaW5nIiwicmVhZHkiLCJDaGF0IiwibG9hZEFsbCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJkZWZhdWx0IiwiZXh0cyIsIm1ldGFkYXRhIiwiZm9yRWFjaCIsImV4dGVuc2lvbiIsImluZGV4Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ3YWl0aW5nUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJlIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwicGxheWFibGUiLCJzdG9wIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX3VzZUV4dGVuc2lvbiIsIl9tZXNzYWdlcyIsIl9leHRlbnNpb25SZW5kZXJlciIsIkNvbnRlbnQiLCJ0ZXh0cyIsInRvdGFsTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGVuZ3RoIiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIkNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfaW5wdXQiLCJfYmFja0Fycm93IiwiX2NvbnRlbnQiLCJwcm9wcyIsImNoYXRJbnRybyIsInJlYWRlciIsImF2b2lkQ2hhdCIsIkNoYXRJbnB1dCIsImlzV2FpdGluZyIsIl9jb21wb25lbnRzIiwiX3ByZWxvYWQiLCJDaGF0U2tlbGV0b24iLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiUHJlbG9hZCIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0UmVhZHkiLCJjb250cm9sIiwib25SZWFkeSIsImV2ZW50IiwiQ2hhdENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJjb250ZXh0VmFsdWUiLCJ0cmFjZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX2NvbmZpZyIsIl9yZWNvcmRpbmciLCJfaW5kZXgiLCJfdGV4dElucHV0IiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0Iiwic2V0VGV4dCIsInNlbmRBdWRpbyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJzeXN0ZW0iLCJwYXJhbXMiLCJjb25maWciLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJfdGltZXIiLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsImFjdGlvbiIsIl9tb2RhbCIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidXNlU3Bva2VuQ29udGV4dCIsImRlc2NyaXB0aW9uIiwicGVybWlzc2lvbnMiLCJBbGVydE1vZGFsIiwib3BlbiIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfY29udGV4dDIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJzZXRFcnJvciIsImhhc1Blcm1pc3Npb24iLCJzZXRIYXNQZXJtaXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwicmVjb3JkIiwiZ2V0VXNlck1lZGlhIiwiaGFzUGVybWlzc2lvbnMiLCJ0aGVuIiwic2V0SXRlbSIsImNhdGNoIiwicGxheUFjdGlvbiIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJzdWJ0aXRsZSIsImludHJvIiwiX3RvYXN0IiwiVUlGb3JtIiwiY2xvc2VNb2RhbCIsInNldFZhbHVlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0QXJlYVZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJwdWJsaXNoIiwic3RhdHVzIiwidG9hc3QiLCJzdWNjZXNzIiwiVGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImxhYmVsIiwidHlwZSIsImRpYWxvZ1JlZiIsImFzc2lzdGFudCIsIm9wZW5Nb2RhbCIsImNsb3NlIiwibW9kZSIsInRleHRBcmVhUmVmIiwic3R5bGUiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwiX21hbmFnZXIiLCJfY29tcG9uZW50czIiLCJfaWNvbnMyIiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiUHJlbG9hZFNjcmVlbiIsInNyYyIsImFsdCIsIklDT05TIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvbWVzc2FnZXMudHMiLCIvdHMvc3RvcmUvYXVkaW8udHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHMvdmlld3MvY2hhdC9iYWNrLWFycm93LnRzeCIsIi90cy92aWV3cy9jaGF0L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NoYXQvZXh0ZW5zaW9uLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvZXJyb3ItbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL21vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCIvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90ZXh0LWlucHV0LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBT087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUM7Y0FDL0NDLFVBQVUsQ0FBQ0osS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJSyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1QsTUFBQSxDQUFBVSxJQUFJO1lBQ1o7WUFFQUMsWUFBWSxHQUFHQyxJQUFJO2NBQ2xCLEtBQUssQ0FBQyxHQUFHQSxJQUFJLENB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