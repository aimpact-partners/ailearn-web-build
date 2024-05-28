System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@aimpact/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/messages.code", "pragmate-ui@0.1.1/perfect-scrollbar", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.45/config", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0045Config) {
      dependency_20 = _aimpactAilearnApp0045Config;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.3.2"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.45"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsImNvbnN0cnVjdG9yIiwiYXJncyIsInVubW91bnQiLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiX3JlY29yZGVyIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInBhcmVudCIsInJlY29yZGVyIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJwbGF5ZXIiLCJjdXJyZW50UGxheWVyIiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndXVhZ2UiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfZXh0ZW5zaW9ucyIsIm1lc3NhZ2VzIiwiRVhURU5TSU9OUyIsImNhdGVnb3J5IiwiY2hhdCIsImNoYXRzIiwiaXRlbXMiLCJhdWRpbyIsImF1ZGlvTWFuYWdlciIsImticyIsImtub3dsZWRnZUJveGVzIiwic2VsZWN0ZWRLYiIsImtiIiwic2VsZWN0ZWRNb2RlbCIsIm1vZGVsIiwibm90Rm91bmQiLCJzZWxlY3RlZEtiUGF0aCIsImZpbmQiLCJpIiwiaWQiLCJwYXRoIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlIiwiZGlzYWJsZWQiLCJ0cmlnZ2VyRXZlbnQiLCJleHRlbnNpb25zIiwiTWFwIiwiYXR0cnMiLCJnZXQiLCJhdXRvcGxheSIsImNoZWNrQXR0cmlidXRlcyIsImxvYWQiLCJjbGVhbiIsImZldGNoaW5nIiwicmVhZHkiLCJDaGF0IiwibG9hZEFsbCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJkZWZhdWx0IiwiZXh0cyIsIm1ldGFkYXRhIiwiZm9yRWFjaCIsImV4dGVuc2lvbiIsImluZGV4Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ3YWl0aW5nUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJlIiwiY29uc29sZSIsImVycm9yIiwicGxheWFibGUiLCJzdG9wIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX3VzZUV4dGVuc2lvbiIsIl9tZXNzYWdlcyIsIl9leHRlbnNpb25SZW5kZXJlciIsIkNvbnRlbnQiLCJ0ZXh0cyIsInRvdGFsTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGVuZ3RoIiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIkNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfaW5wdXQiLCJfYmFja0Fycm93IiwiX2NvbnRlbnQiLCJwcm9wcyIsImNoYXRJbnRybyIsInJlYWRlciIsImF2b2lkQ2hhdCIsIkNoYXRJbnB1dCIsImlzV2FpdGluZyIsIl9jb21wb25lbnRzIiwiX3ByZWxvYWQiLCJDaGF0U2tlbGV0b24iLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiUHJlbG9hZCIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0UmVhZHkiLCJjb250cm9sIiwib25SZWFkeSIsImV2ZW50IiwiQ2hhdENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJjb250ZXh0VmFsdWUiLCJ0cmFjZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX2NvbmZpZyIsIl9yZWNvcmRpbmciLCJfaW5kZXgiLCJfdGV4dElucHV0IiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0Iiwic2V0VGV4dCIsInNlbmRBdWRpbyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJzeXN0ZW0iLCJwYXJhbXMiLCJjb25maWciLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJfdGltZXIiLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsImFjdGlvbiIsIl9tb2RhbCIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwiZGVzY3JpcHRpb24iLCJwZXJtaXNzaW9ucyIsIkFsZXJ0TW9kYWwiLCJvcGVuIiwiY2VudGVyZWQiLCJJY29uIiwiX3BsYXllciIsIl9jb250ZXh0MiIsIl9lcnJvck1vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2V0RXJyb3IiLCJoYXNQZXJtaXNzaW9uIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInJlY29yZCIsImdldFVzZXJNZWRpYSIsImhhc1Blcm1pc3Npb25zIiwidGhlbiIsInNldEl0ZW0iLCJjYXRjaCIsImxvZyIsInBsYXlBY3Rpb24iLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwic3VidGl0bGUiLCJpbnRybyIsIl90b2FzdCIsIlVJRm9ybSIsImNsb3NlTW9kYWwiLCJzZXRWYWx1ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFyZWFWYWx1ZSIsInRhcmdldCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwicHVibGlzaCIsInN0YXR1cyIsInRvYXN0Iiwic3VjY2VzcyIsIlRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJsYWJlbCIsInR5cGUiLCJkaWFsb2dSZWYiLCJhc3Npc3RhbnQiLCJvcGVuTW9kYWwiLCJjbG9zZSIsIm1vZGUiLCJ0ZXh0QXJlYVJlZiIsInN0eWxlIiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciIsIl9tYW5hZ2VyIiwiX2NvbXBvbmVudHMyIiwiX2ljb25zMiIsIm9wZW5EaWFsb2ciLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsIlByZWxvYWRTY3JlZW4iLCJzcmMiLCJhbHQiLCJJQ09OUyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvdHMvdmlld3MvY2hhdC9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jaGF0L2V4dGVuc2lvbi1yZW5kZXJlci50c3giLCIvdHMvdmlld3MvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvdmlld3MvY2hhdC91c2UtZXh0ZW5zaW9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DQyxVQUFVLENBQUNKLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUM5QixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUssTUFBTUEsQ0FBQTtjQUNULE9BQU9ULE1BQUEsQ0FBQVUsSUFBSTtZQUNaO1lBRUFDLFlBQVksR0FBR0MsSUFBSTtjQUNsQixLQUFLLENBQUMsR0FBR0EsSUFBSSxDQUFDO2NBQ2Q7WUFDRDs7WUFFQUMsT0FBT0EsQ0FBQTtjQUNOLEtBQUssQ0FBQ0EsT0FBTyxFQUFFO2NBRWYsSUFBSSxDQUFDLENBQUFULEtBQU0sRUFBRVMsT0FBTyxFQUFFO1lBQ3ZCOztVQUNBQyxPQUFBLENBQUFaLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7VUNqQ0Q7O1VBRUFhLE1BQUEsQ0FBQUMsY0FBQSxDQUFBRixPQUFBO1lBQ0FHLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixTQUFBLEdBQUF0QixPQUFBO1VBTU87VUFBWSxNQUFPdUIsWUFBYSxTQUFRSixNQUFBLENBQUFLLGFBQXFCO1lBR25FLENBQUFDLE1BQU87WUFDUCxDQUFBQyxRQUFTO1lBRVQsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBQyxPQUFRLEdBQUc7Y0FDVkMsR0FBRyxFQUFFUixNQUFBLENBQUFTLEtBQUs7Y0FDVkMsR0FBRyxFQUFFVixNQUFBLENBQUFXLFFBQVEsQ0FBRTthQUNmOztZQUVELENBQUFDLE1BQU8sR0FBRyxLQUFLO1lBQ2YsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFDLGFBQWM7WUFDM0I7WUFFQSxDQUFBQSxhQUFjO1lBQ2RyQixZQUFZYSxNQUFNO2NBQ2pCLEtBQUssQ0FBQyxFQUFFLENBQUM7Y0FDVCxJQUFJLENBQUMsQ0FBQUMsUUFBUyxHQUFHLElBQUlKLFNBQUEsQ0FBQVksUUFBUSxFQUFFO2NBQy9CLElBQUksQ0FBQyxDQUFBVCxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDVSxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUNoQyxJQUFJLENBQUMsQ0FBQUYsYUFBYyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUFOLE9BQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQUssTUFBTyxDQUFDLENBQUM7Z0JBQ3JESSxRQUFRLEVBQUVmLFFBQUEsQ0FBQWdCLFVBQVUsQ0FBQ0QsUUFBUTtnQkFDN0JFLElBQUksRUFBRWpCLFFBQUEsQ0FBQWdCLFVBQVUsQ0FBQ0U7ZUFDakIsQ0FBQztjQUVGbEIsUUFBQSxDQUFBZ0IsVUFBVSxDQUFDRyxFQUFFLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQztZQUM1RDtZQUVBQSxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCLElBQUksQ0FBQyxDQUFBUixhQUFjLENBQUNTLEdBQUcsQ0FBQztnQkFDdkJKLElBQUksRUFBRWpCLFFBQUEsQ0FBQWdCLFVBQVUsQ0FBQ0UsVUFBVTtnQkFDM0JJLFNBQVMsRUFBRXRCLFFBQUEsQ0FBQWdCLFVBQVUsQ0FBQ0Q7ZUFDdEIsQ0FBQztZQUNILENBQUM7WUFFRFEsWUFBWUEsQ0FBQ0MsSUFBSTtjQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFsQixPQUFRLENBQUNrQixJQUFJLENBQUMsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyxVQUFVRCxJQUFJLFlBQVksQ0FBQztjQUVyRSxJQUFJLENBQUMsQ0FBQWIsTUFBTyxHQUFHYSxJQUFJO2NBQ25CLElBQUksQ0FBQ0UsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2Qjs7VUFDQWhDLE9BQUEsQ0FBQVEsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hERCxJQUFBSixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQWdELEtBQUEsR0FBQWhELE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFpRCxNQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQWtELFdBQUEsR0FBQWxELE9BQUE7VUFPTSxNQUFPTyxZQUFhLFNBQVFZLE1BQUEsQ0FBQUssYUFBcUI7WUFDdEQsQ0FBQTJCLFFBQVM7WUFLVCxDQUFBQyxVQUFXLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDNUIsSUFBSUQsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBTixJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxDQUFBUSxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFDQSxDQUFBQyxLQUFNLEdBQUdsQyxRQUFBLENBQUFnQixVQUFVLENBQUNrQixLQUFLO1lBQ3pCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLENBQUNDLEtBQUssSUFBSSxFQUFFO1lBQy9CO1lBRUEsQ0FBQUMsS0FBTSxHQUFpQixJQUFJUixNQUFBLENBQUExQixZQUFZLENBQUMsSUFBSSxDQUFDO1lBQzdDLElBQUltQyxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTTtZQUNuQjtZQUVBLENBQUFFLEdBQUksR0FBR3RDLFFBQUEsQ0FBQWdCLFVBQVUsQ0FBQ3VCLGNBQWM7WUFDaEMsSUFBSUQsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUksQ0FBQ0gsS0FBSyxJQUFJLEVBQUU7WUFDN0I7WUFFQSxDQUFBSyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFDQSxJQUFJQSxVQUFVQSxDQUFDQyxFQUFFO2NBQ2hCLElBQUksQ0FBQyxDQUFBRCxVQUFXLEdBQUdDLEVBQUU7WUFDdEI7WUFFQSxDQUFBQyxhQUFjLEdBQUcsT0FBTztZQUN4QixJQUFJQSxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGFBQWM7WUFDM0I7WUFDQSxJQUFJQSxhQUFhQSxDQUFDQyxLQUFLO2NBQ3RCLElBQUksQ0FBQyxDQUFBRCxhQUFjLEdBQUdDLEtBQUs7WUFDNUI7WUFFQSxDQUFBQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxJQUFJQSxRQUFRQSxDQUFDQSxRQUFRO2NBQ3BCLElBQUksQ0FBQyxDQUFBQSxRQUFTLEdBQUdBLFFBQVE7WUFDMUI7WUFFQSxJQUFJQyxjQUFjQSxDQUFBO2NBQ2pCLE1BQU1MLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQUYsR0FBSSxDQUFDSCxLQUFLLENBQUNXLElBQUksQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQVIsVUFBVyxDQUFDO2NBQ3ZFLE9BQU9BLFVBQVUsRUFBRVMsSUFBSSxJQUFJLGtCQUFrQjtZQUM5QztZQUVBLENBQUFDLGNBQWU7WUFDZixJQUFJQSxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGNBQWU7WUFDNUI7WUFFQSxJQUFJQSxjQUFjQSxDQUFDQyxPQUFPO2NBQ3pCLElBQUlBLE9BQU8sRUFBRUgsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFBRSxjQUFlLEVBQUVGLEVBQUUsRUFBRTtjQUM5QyxJQUFJLENBQUMsQ0FBQUUsY0FBZSxHQUFHQyxPQUFPO1lBQy9CO1lBRUEsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsSUFBSUEsUUFBUUEsQ0FBQ0EsUUFBUTtjQUNwQixJQUFJLElBQUksQ0FBQyxDQUFBQSxRQUFTLEtBQUtBLFFBQVEsRUFBRTtjQUNqQyxJQUFJLENBQUMsQ0FBQUEsUUFBUyxHQUFHQSxRQUFRO2NBQ3pCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM1QjtZQUVBLENBQUFDLFVBQVcsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDdkIsSUFBSUQsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFDQSxDQUFBTixFQUFHO1lBQ0h6RCxZQUFZaUUsS0FBSztjQUNoQixLQUFLLENBQUNBLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2NBQ3RCLElBQUksQ0FBQyxDQUFBVCxFQUFHLEdBQUdRLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztjQUMxQixJQUFJLENBQUMzQyxhQUFhLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztjQUNuRCxJQUFJLENBQUM0QyxRQUFRLEdBQUcsSUFBSTtjQUVwQkYsS0FBSyxDQUFDckMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQ3dDLGVBQWUsQ0FBQ0gsS0FBSyxDQUFDLENBQUM7Y0FDckQsSUFBSSxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFaLEVBQUcsQ0FBQztZQUNwQjtZQUVBYSxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDQyxRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUNDLEtBQUssR0FBRyxLQUFLO1lBQ25CO1lBRUFILElBQUksR0FBRyxNQUFPWixFQUFVLElBQUk7Y0FDM0IsSUFBSSxDQUFDQSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDZSxLQUFLLEdBQUcsSUFBSTtnQkFDakIsSUFBSSxDQUFDbkIsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCOztjQUdELElBQUksQ0FBQ2tCLFFBQVEsR0FBRyxJQUFJO2NBRXBCLE1BQU03QixJQUFJLEdBQUcsSUFBSU4sS0FBQSxDQUFBcUMsSUFBSSxDQUFDO2dCQUFFaEI7Y0FBRSxDQUFFLENBQUM7Y0FFN0IsTUFBTWYsSUFBSSxDQUFDZ0MsT0FBTyxDQUFDO2dCQUFFakI7Y0FBRSxDQUFFLENBQUM7Y0FDMUI1RCxVQUFVLENBQUM2QyxJQUFJLEdBQUdBLElBQUk7Y0FDdEJqQyxRQUFBLENBQUFnQixVQUFVLENBQUNrRCxXQUFXLEdBQUdqQyxJQUFJO2NBRTdCLElBQUksQ0FBQ0EsSUFBSSxDQUFDa0MsS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUNMLFFBQVEsR0FBRyxLQUFLO2dCQUNyQixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNuQixRQUFRLEdBQUcsSUFBSTtnQkFDcEI7O2NBR0QsTUFBTXdCLG1CQUFtQixHQUFHLElBQUksQ0FBQyxDQUFBOUIsR0FBSSxDQUFDSCxLQUFLLENBQUNXLElBQUksQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEVBQUUsS0FBS2YsSUFBSSxDQUFDb0MsY0FBYyxDQUFDO2NBQ25GLElBQUksQ0FBQyxDQUFBN0IsVUFBVyxHQUFHNEIsbUJBQW1CLEdBQUdBLG1CQUFtQixDQUFDcEIsRUFBRSxHQUFHLFNBQVM7Y0FDM0UsSUFBSSxDQUFDWCxZQUFZLENBQUMxQixNQUFNLENBQUNVLEdBQUcsQ0FBQztnQkFDNUJOLFFBQVEsRUFBRWtCLElBQUksQ0FBQ2xCLFFBQVEsRUFBRXVELE9BQU8sSUFBSXRFLFFBQUEsQ0FBQWdCLFVBQVUsQ0FBQ0Q7ZUFDL0MsQ0FBQztjQUNGO2NBQ0FrQixJQUFJLENBQUNkLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBSztnQkFDdEIsSUFBSSxDQUFDLENBQUFXLFFBQVMsR0FBR0csSUFBSSxDQUFDSCxRQUFRLEVBQUVLLEtBQUs7Z0JBQ3JDLElBQUksQ0FBQ2tCLFlBQVksQ0FBQyxhQUFhLENBQUM7Y0FDakMsQ0FBQyxDQUFDO2NBRUYsSUFBSSxDQUFDLENBQUFwQixJQUFLLEdBQUdBLElBQUk7Y0FDakIsTUFBTXNDLElBQUksR0FBRyxNQUFNMUMsV0FBQSxDQUFBeUIsVUFBVSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE3QixVQUFXLEVBQUVFLElBQUksQ0FBQ3VDLFFBQVEsQ0FBQztjQUVuRSxJQUFJLENBQUMsQ0FBQXpDLFVBQVcsQ0FBQzBDLE9BQU8sQ0FBQyxDQUFDQyxTQUFTLEVBQUVDLEtBQUssS0FBSTtnQkFDN0MsSUFBSSxDQUFDLENBQUFyQixVQUFXLENBQUNqQyxHQUFHLENBQUNxRCxTQUFTLEVBQUVILElBQUksQ0FBQ0ksS0FBSyxDQUFDLENBQUM7Y0FDN0MsQ0FBQyxDQUFDO2NBRUYsSUFBSSxDQUFDLENBQUE3QyxRQUFTLEdBQUdHLElBQUksQ0FBQ0gsUUFBUSxDQUFDSyxLQUFLO2NBQ3BDLElBQUksQ0FBQzJCLFFBQVEsR0FBRyxLQUFLO2NBQ3JCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDbkIsUUFBUSxHQUFHLEtBQUs7WUFDdEIsQ0FBQztZQUVELE1BQU1nQyxXQUFXQSxDQUFDQyxPQUFzQjtjQUN2QyxJQUFJO2dCQUNIQyxXQUFXLENBQUNDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxDQUFBN0IsY0FBZSxHQUFHOEIsU0FBUztnQkFFaEMsSUFBSSxPQUFPSCxPQUFPLEtBQUssUUFBUSxJQUFJLENBQUNHLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQ0osT0FBTyxDQUFDLEVBQUU7Z0JBRTVFLElBQUksQ0FBQ2YsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLElBQUksQ0FBQ29CLGVBQWUsR0FBRyxJQUFJO2dCQUUzQixNQUFNO2tCQUFFL0IsT0FBTztrQkFBRWdDO2dCQUFRLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBbEQsSUFBSyxDQUFDMkMsV0FBVyxDQUFDQyxPQUFPLENBQUM7Z0JBRW5FLElBQUksQ0FBQ00sUUFBUSxHQUFHQSxRQUFRO2dCQUN4QjtnQkFDQSxJQUFJLENBQUMsQ0FBQWpDLGNBQWUsR0FBR0MsT0FBTztnQkFDOUIsTUFBTWlDLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2tCQUNyQixJQUFJLENBQUMvQixZQUFZLENBQUMsV0FBVzhCLFFBQVEsQ0FBQ25DLEVBQUUsVUFBVSxDQUFDO2dCQUNwRCxDQUFDO2dCQUVELE1BQU1xQyxLQUFLLEdBQUdBLENBQUEsS0FBSztrQkFDbEJsQyxPQUFPLENBQUNtQyxHQUFHLENBQUMsaUJBQWlCLEVBQUVGLFFBQVEsQ0FBQztrQkFDeEMsSUFBSSxDQUFDL0IsWUFBWSxDQUFDLGdCQUFnQixDQUFDO2tCQUNuQyxJQUFJLENBQUNBLFlBQVksQ0FBQyxXQUFXOEIsUUFBUSxDQUFDbkMsRUFBRSxXQUFXLENBQUM7a0JBQ3BERyxPQUFPLENBQUNtQyxHQUFHLENBQUMsbUJBQW1CLEVBQUVELEtBQUssQ0FBQztnQkFDeEMsQ0FBQztnQkFFRGxDLE9BQU8sQ0FBQ2hDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRWlFLFFBQVEsQ0FBQztnQkFDdkNqQyxPQUFPLENBQUNoQyxFQUFFLENBQUMsbUJBQW1CLEVBQUVrRSxLQUFLLENBQUM7Z0JBRXRDLElBQUksQ0FBQ0gsZUFBZSxHQUFHLEtBQUs7Z0JBQzVCLElBQUksQ0FBQzdCLFlBQVksQ0FBQyxhQUFhLENBQUM7ZUFDaEMsQ0FBQyxPQUFPa0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDTCxlQUFlLEdBQUcsS0FBSztnQkFDNUIsSUFBSSxDQUFDcEIsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUFILGVBQWVBLENBQUN4RSxVQUFVO2NBQ3pCLElBQUksQ0FBQ2lFLFFBQVEsR0FBR2pFLFVBQVUsQ0FBQ3NFLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxNQUFNO2NBQ3JELElBQUksQ0FBQ2lDLFFBQVEsR0FBR3ZHLFVBQVUsQ0FBQ3NFLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxNQUFNLElBQUl0RSxVQUFVLENBQUNzRSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUt1QixTQUFTO2NBQ2pHLElBQUksQ0FBQyxJQUFJLENBQUNVLFFBQVEsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLENBQUF0RCxLQUFNLENBQUN6QixNQUFNLEVBQUVnRixJQUFJLEVBQUU7O1lBRTVCO1lBRUFsRyxPQUFPQSxDQUFBO2NBQ04sSUFBSSxDQUFDLENBQUEyQyxLQUFNLENBQUN6QixNQUFNLEVBQUVnRixJQUFJLEVBQUU7WUFDM0I7O1VBQ0FqRyxPQUFBLENBQUFSLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4TkQsSUFBQTBHLE1BQUEsR0FBQWpILE9BQUE7VUFDQSxJQUFBa0gsTUFBQSxHQUFBbEgsT0FBQTtVQUNBLElBQUFtSCxNQUFBLEdBQUFuSCxPQUFBO1VBQ0EsSUFBQW9ILFFBQUEsR0FBQXBILE9BQUE7VUFFTSxTQUFVcUgsU0FBU0EsQ0FBQztZQUFFaEgsS0FBSztZQUFFaUg7VUFBUyxDQUFFO1lBQzdDLE1BQU1DLElBQUksR0FBR04sTUFBQSxDQUFBdEIsT0FBSyxDQUFDNkIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUMvQixNQUFNO2NBQUVoSCxVQUFVO2NBQUVpSDtZQUFjLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGNBQWMsR0FBRTtZQUN2RCxNQUFNQyxHQUFHLEdBQUdWLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQzZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBQUwsTUFBQSxDQUFBUyxTQUFTLEVBQ1IsQ0FBQ3ZILEtBQUssQ0FBQyxFQUNQLE1BQ0NJLFVBQVUsQ0FBQ29ILFVBQVUsQ0FBQyxNQUFLO2NBQzFCLE1BQU1DLFNBQVMsR0FBR0gsR0FBRyxDQUFDSSxPQUFPLEVBQUVDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxFQUFFQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7Y0FFbkcsSUFBSSxDQUFDSCxTQUFTLEVBQUU7Y0FDaEIsTUFBTUksa0JBQWtCLEdBQUdKLFNBQVMsQ0FBQ0ssWUFBWSxHQUFHTCxTQUFTLENBQUNNLFlBQVksR0FBR04sU0FBUyxDQUFDTyxTQUFTO2NBQ2hHLElBQUlILGtCQUFrQixJQUFJLEdBQUcsRUFBRTtnQkFDOUJQLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDTyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ3BDQyxVQUFVLEVBQUU7ZUFDWixNQUFNO2dCQUNOYixHQUFHLENBQUNJLE9BQU8sQ0FBQ08sU0FBUyxDQUFDRyxHQUFHLENBQUMsTUFBTSxDQUFDOztZQUVuQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQ1IsYUFBYSxDQUNiO1lBQ0QsTUFBTUQsVUFBVSxHQUFHQSxDQUFBLEtBQUs7Y0FDdkJsQixTQUFTLENBQUNTLE9BQU8sRUFBRVcsY0FBYyxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsS0FBSztnQkFBRUMsUUFBUSxFQUFFO2NBQVEsQ0FBRSxDQUFDO1lBQ3hFLENBQUM7WUFFRDNCLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQ2tELFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1mLFNBQVMsR0FBR0gsR0FBRyxDQUFDSSxPQUFPLENBQUNDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7Y0FFakcsTUFBTWEsWUFBWSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3pCO2dCQUNBLElBQUksQ0FBQ2hCLFNBQVMsRUFBRTtnQkFDaEIsTUFBTUksa0JBQWtCLEdBQUdKLFNBQVMsQ0FBQ0ssWUFBWSxHQUFHTCxTQUFTLENBQUNNLFlBQVksR0FBR04sU0FBUyxDQUFDTyxTQUFTO2dCQUVoRztnQkFDQSxJQUFJSCxrQkFBa0IsSUFBSSxHQUFHLEVBQUU7a0JBQzlCUCxHQUFHLENBQUNJLE9BQU8sQ0FBQ08sU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUNwQyxNQUFNO2tCQUNOWixHQUFHLENBQUNJLE9BQU8sQ0FBQ08sU0FBUyxDQUFDRyxHQUFHLENBQUMsTUFBTSxDQUFDOztjQUVuQyxDQUFDO2NBRURYLFNBQVMsQ0FBQ2lCLGdCQUFnQixDQUFDLFFBQVEsRUFBRUQsWUFBWSxDQUFDO2NBRWxELE9BQU8sTUFBSztnQkFDWGhCLFNBQVMsRUFBRWtCLG1CQUFtQixDQUFDLFFBQVEsRUFBRUYsWUFBWSxDQUFDO2NBQ3ZELENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sSUFBSUcsR0FBRyxHQUFHLDJCQUEyQjtZQUNyQyxJQUFJekksVUFBVSxDQUFDMEksR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFRCxHQUFHLElBQUksa0JBQWtCekksVUFBVSxDQUFDc0UsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZGLE1BQU1xRSxZQUFZLEdBQUcsbUJBQ3BCM0ksVUFBVSxDQUFDMEksR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLGVBQWUxSSxVQUFVLENBQUNzRSxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsR0FBRyxFQUM5RSxFQUFFO1lBQ0YsT0FDQ21DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUE7Y0FBS0MsU0FBUyxFQUFFRixZQUFZO2NBQUV4QixHQUFHLEVBQUVBO1lBQUcsR0FDckNWLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsQ0FBQ2xDLE1BQUEsQ0FBQW9DLFVBQVU7Y0FBQzNCLEdBQUcsRUFBRUosSUFBSTtjQUFFQSxJQUFJLEVBQUMsV0FBVztjQUFDZ0MsT0FBTyxFQUFDLFVBQVU7Y0FBQ0YsU0FBUyxFQUFFSixHQUFHO2NBQUVPLE9BQU8sRUFBRWhCO1lBQVUsRUFBSSxDQUM3RjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9EQSxJQUFBdkIsTUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUF5SixhQUFBLEdBQUF6SixPQUFBO1VBQ0EsSUFBQTBKLFNBQUEsR0FBQTFKLE9BQUE7VUFDQSxJQUFBb0gsUUFBQSxHQUFBcEgsT0FBQTtVQUNBLElBQUFtSCxNQUFBLEdBQUFuSCxPQUFBO1VBQ0EsSUFBQTJKLGtCQUFBLEdBQUEzSixPQUFBO1VBR00sU0FBVTRKLE9BQU9BLENBQUM7WUFBRXRDO1VBQVMsQ0FBRTtZQUNwQyxNQUFNO2NBQUVqSCxLQUFLO2NBQUV3SixLQUFLO2NBQUVySjtZQUFVLENBQUUsR0FBRyxJQUFBNEcsUUFBQSxDQUFBTSxjQUFjLEdBQUU7WUFDckQsTUFBTTtjQUFFdkU7WUFBUSxDQUFFLEdBQUc5QyxLQUFLO1lBQzFCLE1BQU0sQ0FBQ3lKLGFBQWEsRUFBRUMsV0FBVyxDQUFDLEdBQUc5QyxNQUFBLENBQUF0QixPQUFLLENBQUNxRSxRQUFRLENBQVM3RyxRQUFRLENBQUM4RyxNQUFNLElBQUksRUFBRSxDQUFDQSxNQUFNLENBQUM7WUFDekYsTUFBTSxDQUFDdEMsR0FBRyxFQUFFdkMsS0FBSyxFQUFFOEUsZ0JBQWdCLENBQUMsR0FBRyxJQUFBVCxhQUFBLENBQUFVLFlBQVksRUFBQyxZQUFZLENBQUM7WUFFakUsSUFBQWhELE1BQUEsQ0FBQVMsU0FBUyxFQUNSLENBQUN2SCxLQUFLLENBQUMsRUFDUCxNQUFLO2NBQ0owSixXQUFXLENBQUMxSixLQUFLLENBQUM4QyxRQUFRLENBQUM4RyxNQUFNLENBQUM7WUFDbkMsQ0FBQyxFQUNELGFBQWEsQ0FDYjtZQUVELElBQUloQixHQUFHLEdBQUcsZUFBZTtZQUN6QixJQUFJekksVUFBVSxDQUFDMEksR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFRCxHQUFHLElBQUksZUFBZXpJLFVBQVUsQ0FBQ3NFLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNwRixPQUNDbUMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQTtjQUFLQyxTQUFTLEVBQUVKO1lBQUcsR0FDbEJoQyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUNPLGtCQUFBLENBQUFTLGlCQUFpQjtjQUFDQyxTQUFTLEVBQUVILGdCQUFnQjtjQUFFSSxTQUFTLEVBQUUzQztZQUFHLEVBQUksRUFDakV2QyxLQUFLLElBQ0w2QixNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUFuQyxNQUFBLENBQUF0QixPQUFBLENBQUE0RSxRQUFBLFFBQ0N0RCxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUNNLFNBQUEsQ0FBQWMsUUFBUTtjQUNSbEgsSUFBSSxFQUFFakQsS0FBSyxDQUFDaUQsSUFBSTtjQUNoQnRCLE1BQU0sRUFBRTNCLEtBQUssQ0FBQ3FELFlBQVksQ0FBQzFCLE1BQU07Y0FDakMrRixPQUFPLEVBQUUxSCxLQUFLLENBQUNrRSxjQUFjO2NBQzdCbEUsS0FBSyxFQUFFQSxLQUFLO2NBQ1o4QyxRQUFRLEVBQUU5QyxLQUFLLENBQUM4QyxRQUFRO2NBQ3hCMEcsS0FBSyxFQUFFQTtZQUFLLEVBQ1gsRUFDRjVDLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUE7Y0FBS3pCLEdBQUcsRUFBRUwsU0FBUztjQUFFK0IsU0FBUyxFQUFDO1lBQVcsRUFBRyxDQUU5QyxDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBLElBQUFwQyxNQUFBLEdBQUFqSCxPQUFBO1VBRUEsSUFBQW9ILFFBQUEsR0FBQXBILE9BQUE7VUFEQTs7VUFHTSxTQUFVb0ssaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUM7VUFBUyxDQUFFO1lBQ3pELE1BQU07Y0FDTGpLLEtBQUssRUFBRTtnQkFBRWlELElBQUk7Z0JBQUVxQjtjQUFVO1lBQUUsQ0FDM0IsR0FBRyxJQUFBeUMsUUFBQSxDQUFBTSxjQUFjLEdBQUU7WUFFcEIsTUFBTStDLFNBQVMsR0FBR0osU0FBUztZQUMzQixJQUFJLENBQUNBLFNBQVMsRUFBRSxPQUFPLElBQUk7WUFDM0IsT0FDQ3BELE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsQ0FBQW5DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQTRFLFFBQUEsUUFDQ3RELE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsQ0FBQ3FCLFNBQVM7Y0FBQzlDLEdBQUcsRUFBRTJDLFNBQVM7Y0FBRXpFLFFBQVEsRUFBRTZFLElBQUksQ0FBQ0MsU0FBUyxDQUFDckgsSUFBSSxDQUFDdUMsUUFBUTtZQUFDLEVBQUksQ0FDcEU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQW9CLE1BQUEsR0FBQWpILE9BQUE7VUFDQSxJQUFBb0gsUUFBQSxHQUFBcEgsT0FBQTtVQUNBLElBQUE0SyxNQUFBLEdBQUE1SyxPQUFBO1VBQ0EsSUFBQTZLLFVBQUEsR0FBQTdLLE9BQUE7VUFDQSxJQUFBOEssUUFBQSxHQUFBOUssT0FBQTtVQVVPO1VBQVUsU0FBVXFGLElBQUlBLENBQUMwRixLQUFLO1lBQ3BDLE1BQU07Y0FBRTFLO1lBQUssQ0FBRSxHQUFHLElBQUErRyxRQUFBLENBQUFNLGNBQWMsR0FBRTtZQUVsQyxNQUFNc0QsU0FBUyxHQUFHM0ssS0FBSyxDQUFDc0UsVUFBVSxDQUFDRyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ3BELE1BQU0sQ0FBQ21HLE1BQU0sQ0FBQyxHQUFHaEUsTUFBQSxDQUFBdEIsT0FBSyxDQUFDcUUsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN0QyxNQUFNMUMsU0FBUyxHQUFHTCxNQUFBLENBQUF0QixPQUFLLENBQUM2QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBRXBDLElBQUl5QixHQUFHLEdBQUcsMEJBQTBCZ0MsTUFBTSxHQUFHLG9CQUFvQixHQUFHLEVBQUUsRUFBRTtZQUV4RSxPQUNDaEUsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQTtjQUFLQyxTQUFTLEVBQUVKO1lBQUcsR0FDbEJoQyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUMwQixRQUFBLENBQUFsQixPQUFPO2NBQUN0QyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUNqQ0wsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaENwQyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUN5QixVQUFBLENBQUF4RCxTQUFTO2NBQUNoSCxLQUFLLEVBQUVBLEtBQUs7Y0FBRWlILFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ2hELENBQUMwRCxTQUFTLEVBQUVuRixRQUFRLEVBQUVxRixTQUFTLElBQUlqRSxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUN3QixNQUFBLENBQUFPLFNBQVM7Y0FBQzlLLEtBQUssRUFBRUEsS0FBSztjQUFFK0ssU0FBUyxFQUFFO1lBQUssRUFBSSxDQUM1RSxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENBLElBQUFuRSxNQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQW9ILFFBQUEsR0FBQXBILE9BQUE7VUFFQSxJQUFBcUwsV0FBQSxHQUFBckwsT0FBQTtVQUNBLElBQUFzTCxRQUFBLEdBQUF0TCxPQUFBO1VBQ00sU0FBVXVMLFlBQVlBLENBQUE7WUFDM0IsTUFBTTtjQUFFbEw7WUFBSyxDQUFFLEdBQUcsSUFBQStHLFFBQUEsQ0FBQU0sY0FBYyxHQUFFO1lBQ2xDLE9BQ0NULE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWdCLEdBQzlCcEMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDaUMsV0FBQSxDQUFBRyxpQkFBaUI7Y0FBQ0MsS0FBSyxFQUFFeEUsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDa0MsUUFBQSxDQUFBSSxPQUFPO2dCQUFDQyxLQUFLLEVBQUMsT0FBTztnQkFBQ0MsTUFBTSxFQUFDO2NBQU07WUFBRyxFQUFzQixFQUN2RjNFLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQU0sRUFBRyxDQUNuQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBLElBQUFwQyxNQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQW9ILFFBQUEsR0FBQXBILE9BQUE7VUFDTSxTQUFVbUssWUFBWUEsQ0FBQ3RILElBQUk7WUFDaEMsTUFBTSxDQUFDdUMsS0FBSyxFQUFFeUcsUUFBUSxDQUFDLEdBQUc1RSxNQUFBLENBQUF0QixPQUFLLENBQUNxRSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU1yQyxHQUFHLEdBQUdWLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQzZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsTUFBTTtjQUNMbkgsS0FBSyxFQUFFO2dCQUFFc0U7Y0FBVTtZQUFFLENBQ3JCLEdBQUcsSUFBQXlDLFFBQUEsQ0FBQU0sY0FBYyxHQUFFO1lBRXBCLE1BQU13QyxnQkFBZ0IsR0FBR3ZGLFVBQVUsQ0FBQ0csR0FBRyxDQUFDakMsSUFBSSxDQUFDLEVBQUVpSixPQUFPO1lBQ3REN0UsTUFBQSxDQUFBdEIsT0FBSyxDQUFDa0QsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTWtELE9BQU8sR0FBR0MsS0FBSyxJQUFJSCxRQUFRLENBQUMsSUFBSSxDQUFDO2NBQ3ZDLElBQUksQ0FBQ2xFLEdBQUcsRUFBRUksT0FBTyxFQUFFO2NBQ25CSixHQUFHLENBQUNJLE9BQU8sQ0FBQ2dCLGdCQUFnQixDQUFDLE9BQU8sRUFBRWdELE9BQU8sQ0FBQztjQUM5QyxPQUFPLE1BQU1wRSxHQUFHLENBQUNJLE9BQU8sRUFBRWlCLG1CQUFtQixDQUFDLE9BQU8sRUFBRStDLE9BQU8sQ0FBQztZQUNoRSxDQUFDLEVBQUUsQ0FBQ3BFLEdBQUcsRUFBRUksT0FBTyxDQUFDLENBQUM7WUFFbEIsT0FBTyxDQUFDSixHQUFHLEVBQUV2QyxLQUFLLElBQUksQ0FBQzhFLGdCQUFnQixFQUFFQSxnQkFBZ0IsQ0FBQztVQUMzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkEsSUFBQWpELE1BQUEsR0FBQWpILE9BQUE7VUFjTyxNQUFNaU0sV0FBVyxHQUFBbEwsT0FBQSxDQUFBa0wsV0FBQSxHQUFHaEYsTUFBQSxDQUFBdEIsT0FBSyxDQUFDdUcsYUFBYSxDQUFDLEVBQWtCLENBQUM7VUFDM0QsTUFBTXhFLGNBQWMsR0FBR0EsQ0FBQSxLQUFNVCxNQUFBLENBQUF0QixPQUFLLENBQUN3RyxVQUFVLENBQUNGLFdBQVcsQ0FBQztVQUFDbEwsT0FBQSxDQUFBMkcsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZsRSxJQUFBVCxNQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQW1ILE1BQUEsR0FBQW5ILE9BQUE7VUFDQSxJQUFBb00sS0FBQSxHQUFBcE0sT0FBQTtVQUNBLElBQUFvSCxRQUFBLEdBQUFwSCxPQUFBO1VBQ0EsSUFBQXFNLFNBQUEsR0FBQXJNLE9BQUE7VUFDQSxJQUFBc00sU0FBQSxHQUFBdE0sT0FBQTtVQUNBLElBQUF1TSxPQUFBLEdBQUF2TSxPQUFBO1VBQ0EsSUFBQXdNLGVBQUEsR0FBQXhNLE9BQUE7VUFFTSxTQUFVVyxJQUFJQSxDQUFDO1lBQUVOLEtBQUs7WUFBRSxHQUFHMEs7VUFBSyxDQUFFO1lBQ3ZDLE1BQU0sQ0FBQzVGLFFBQVEsRUFBRXNILFdBQVcsQ0FBQyxHQUFHeEYsTUFBQSxDQUFBdEIsT0FBSyxDQUFDcUUsUUFBUSxDQUFDM0osS0FBSyxDQUFDOEUsUUFBUSxDQUFDO1lBQzlELE1BQU0sQ0FBQ0MsS0FBSyxFQUFFeUcsUUFBUSxDQUFDLEdBQUc1RSxNQUFBLENBQUF0QixPQUFLLENBQUNxRSxRQUFRLENBQUMzSixLQUFLLENBQUMrRSxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDc0gsVUFBVSxFQUFFN0MsS0FBSyxDQUFDLEdBQUcsSUFBQTBDLE9BQUEsQ0FBQUksUUFBUSxFQUFDSCxlQUFBLENBQUFJLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQ3BGLGNBQWMsRUFBRXFGLGlCQUFpQixDQUFDLEdBQUc3RixNQUFBLENBQUF0QixPQUFLLENBQUNxRSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pFLE1BQU07Y0FDTGpGLFFBQVE7Y0FDUjVCLFFBQVE7Y0FDUk8sWUFBWSxFQUFFO2dCQUFFMUI7Y0FBTTtZQUFFLENBQ3hCLEdBQUczQixLQUFLO1lBRVQsSUFBQThHLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUN2SCxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCb00sV0FBVyxDQUFDcE0sS0FBSyxDQUFDOEUsUUFBUSxDQUFDO2NBQzNCMEcsUUFBUSxDQUFDeEwsS0FBSyxDQUFDK0UsS0FBSyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztZQUVGLE1BQU0ySCxZQUFZLEdBQUc7Y0FDcEJELGlCQUFpQixFQUFFNUwsS0FBSyxJQUFHO2dCQUMxQixJQUFJLENBQUNBLEtBQUssRUFBRTJGLE9BQU8sQ0FBQ21HLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQztnQkFDbkVGLGlCQUFpQixDQUFDNUwsS0FBSyxDQUFDO2NBQ3pCLENBQUM7Y0FDRHVHLGNBQWM7Y0FDZHBILEtBQUs7Y0FDTHdKLEtBQUs7Y0FDTDlFLFFBQVE7Y0FDUjVCLFFBQVE7Y0FDUm5CLE1BQU07Y0FDTnhCLFVBQVUsRUFBRXVLLEtBQUssQ0FBQ3ZLO2FBQ2xCO1lBQ0QsTUFBTXlNLE9BQU8sR0FBRyxDQUFDNU0sS0FBSyxDQUFDNEQsUUFBUSxHQUFHbUksS0FBQSxDQUFBL0csSUFBSSxHQUFHaUgsU0FBQSxDQUFBWSxZQUFZO1lBQ3JELE1BQU12TSxJQUFJLEdBQUd5RSxLQUFLLElBQUlzSCxVQUFVLEdBQUdPLE9BQU8sR0FBR1osU0FBQSxDQUFBZCxZQUFZO1lBRXpELE9BQ0N0RSxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUNoQyxRQUFBLENBQUE2RSxXQUFXLENBQUNrQixRQUFRO2NBQUNqTSxLQUFLLEVBQUU2TDtZQUFZLEdBQ3hDOUYsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDekksSUFBSSxPQUFHLENBQ2M7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUFzRyxNQUFBLEdBQUFqSCxPQUFBO1VBVU8sTUFBTW9OLFlBQVksR0FBQXJNLE9BQUEsQ0FBQXFNLFlBQUEsR0FBR25HLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQ3VHLGFBQWEsQ0FBQyxJQUFxQixDQUFDO1VBQy9ELE1BQU1tQixlQUFlLEdBQUdBLENBQUEsS0FBTXBHLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQ3dHLFVBQVUsQ0FBQ2lCLFlBQVksQ0FBQztVQUFDck0sT0FBQSxDQUFBc00sZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hwRSxJQUFBcEcsTUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUFzTixLQUFBLEdBQUF0TixPQUFBO1VBQ0EsSUFBQXFMLFdBQUEsR0FBQXJMLE9BQUE7VUFDQSxJQUFBdU4sT0FBQSxHQUFBdk4sT0FBQTtVQUNBLElBQUFtSCxNQUFBLEdBQUFuSCxPQUFBO1VBQ0EsSUFBQW9ILFFBQUEsR0FBQXBILE9BQUE7VUFDQSxJQUFBd04sVUFBQSxHQUFBeE4sT0FBQTtVQUNBLElBQUF5TixNQUFBLEdBQUF6TixPQUFBO1VBRUEsSUFBQTBOLFVBQUEsR0FBQTFOLE9BQUE7VUFHTztVQUFXLE1BQU1tTCxTQUFTLEdBQUdBLENBQUM7WUFBRTlLLEtBQUs7WUFBRStLLFNBQVMsR0FBRztVQUFLLENBQStDLEtBQUk7WUFDakgsTUFBTSxDQUFDdUMsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRzNHLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQ3FFLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDaEUsTUFBTSxDQUFDN0UsUUFBUSxFQUFFc0gsV0FBVyxDQUFDLEdBQUd4RixNQUFBLENBQUF0QixPQUFLLENBQUNxRSxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQzlELE1BQU0sQ0FBQzZELE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUc3RyxNQUFBLENBQUF0QixPQUFLLENBQUNxRSxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQzVELE1BQU0sQ0FBQytELElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUcvRyxNQUFBLENBQUF0QixPQUFLLENBQUNxRSxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFDLE1BQU07Y0FDTHRHLFlBQVksRUFBRTtnQkFBRWhDO2NBQVE7WUFBRSxDQUMxQixHQUFHckIsS0FBSztZQUVULElBQUE4RyxNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDdkgsS0FBSyxDQUFDLEVBQUUsTUFBTXlOLFVBQVUsQ0FBQ3pOLEtBQUssQ0FBQ2tHLGVBQWUsQ0FBQyxDQUFDO1lBRTNELE1BQU05QixRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFO1lBQUssQ0FBRTtZQUNwQyxNQUFNd0osU0FBUyxHQUFHLE1BQU1qQyxLQUFLLElBQUc7Y0FDL0JTLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakJULEtBQUssQ0FBQ2tDLGNBQWMsRUFBRTtjQUN0QmxDLEtBQUssQ0FBQ21DLGVBQWUsRUFBRTtjQUN2QixNQUFNMUssS0FBSyxHQUFHLE1BQU0vQixRQUFRLENBQUNzRixJQUFJLEVBQUU7Y0FFbkMzRyxLQUFLLENBQUM0RixXQUFXLENBQUN4QyxLQUFLLENBQUM7Y0FDeEJtSyxZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDO2NBQ3hCbEIsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNuQixDQUFDO1lBRUQsTUFBTTJCLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0JKLE9BQU8sQ0FBQyxFQUFFLENBQUM7Y0FDWHZCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakJwTSxLQUFLLENBQUM0RixXQUFXLENBQUM4SCxJQUFJLENBQUM7WUFDeEIsQ0FBQztZQUNELE1BQU1NLFFBQVEsR0FBRyxDQUFDLENBQUNOLElBQUksQ0FBQzlELE1BQU0sR0FBR21FLFVBQVUsR0FBR0gsU0FBUztZQUV2RCxJQUFJLENBQUMsRUFBRSxFQUFFNUgsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUN5SCxJQUFJLENBQUNPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDUCxJQUFJLENBQUNRLElBQUksRUFBRSxDQUFDdEUsTUFBTSxFQUFFeEYsUUFBUSxDQUFDQSxRQUFRLEdBQUcsSUFBSTtZQUU5RyxJQUFJd0UsR0FBRyxHQUFHLG1CQUFtQjRFLE9BQU8sSUFBSXpDLFNBQVMsSUFBSWpHLFFBQVEsR0FBRyxhQUFhLEdBQUcsRUFBRSxFQUFFO1lBQ3BGLElBQUk5RSxLQUFLLENBQUNvRSxRQUFRLEVBQUV3RSxHQUFHLElBQUksYUFBYTtZQUN4QztZQUNBLE1BQU07Y0FBRXVGO1lBQU0sQ0FBRSxHQUFHakIsT0FBQSxDQUFBNUgsT0FBTSxDQUFDOEksTUFBTSxDQUFDQyxNQUFNO1lBQ3ZDO1lBQ0EsT0FDQ3pILE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUE7Y0FBS0MsU0FBUyxFQUFFSjtZQUFHLEdBQ2xCaEMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDaEMsUUFBQSxDQUFBZ0csWUFBWSxDQUFDRCxRQUFRO2NBQ3JCak0sS0FBSyxFQUFFO2dCQUFFYixLQUFLO2dCQUFFZ08sUUFBUTtnQkFBRTNNLFFBQVE7Z0JBQUVrTSxZQUFZO2dCQUFFRCxTQUFTO2dCQUFFbEosUUFBUSxFQUFFcEUsS0FBSyxDQUFDb0U7Y0FBUTtZQUFFLEdBRXRGK0osTUFBTSxJQUFJdkgsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDcUUsTUFBQSxDQUFBa0IsV0FBVztjQUFDckwsSUFBSSxFQUFFakQsS0FBSyxDQUFDaUQ7WUFBSSxFQUFJLEVBQzVDMkQsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDa0UsS0FBQSxDQUFBc0IsSUFBSTtjQUFDUCxRQUFRLEVBQUVBLFFBQVE7Y0FBRWhGLFNBQVMsRUFBQztZQUFpQixHQUNwRHBDLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsQ0FBQ3NFLFVBQUEsQ0FBQW1CLFNBQVM7Y0FDVHhPLEtBQUssRUFBRUEsS0FBSztjQUNaME4sSUFBSSxFQUFFQSxJQUFJO2NBQ1Z0SixRQUFRLEVBQUVwRSxLQUFLLENBQUNvRSxRQUFRO2NBQ3hCZ0ksV0FBVyxFQUFFQSxXQUFXO2NBQ3hCdEgsUUFBUSxFQUFFQSxRQUFRLElBQUl3SSxTQUFTLElBQUlFLE9BQU8sSUFBSXpDLFNBQVM7Y0FDdkQ0QyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJJLFVBQVUsRUFBRUE7WUFBVSxFQUNyQixFQUNGbkgsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQTtjQUFNQyxTQUFTLEVBQUU7WUFBaUMsR0FDaEQsQ0FBQyxDQUFDMEUsSUFBSSxDQUFDOUQsTUFBTSxHQUNiaEQsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDaUMsV0FBQSxDQUFBeUQsTUFBTTtjQUNOdkgsSUFBSSxFQUFDLFlBQVk7Y0FDakJpQyxPQUFPLEVBQUU0RSxVQUFVO2NBQ25CM0osUUFBUSxFQUFFQSxRQUFRLENBQUNBLFFBQVEsSUFBSXBFLEtBQUssQ0FBQ2tHO1lBQWUsRUFDbkQsR0FFRlUsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDb0UsVUFBQSxDQUFBdUIsZUFBZTtjQUFDMU8sS0FBSyxFQUFFQSxLQUFLO2NBQUVvRSxRQUFRLEVBQUVrSixTQUFTLElBQUl0TixLQUFLLENBQUNrRztZQUFlLEVBQzNFLENBQ0ssQ0FDRCxDQUNnQixDQUNuQjtVQUVSLENBQUM7VUFBQ3hGLE9BQUEsQ0FBQW9LLFNBQUEsR0FBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRkYsSUFBQWxFLE1BQUEsR0FBQWpILE9BQUE7VUFDQSxJQUFBa0gsTUFBQSxHQUFBbEgsT0FBQTtVQUNBLElBQUFnUCxNQUFBLEdBQUFoUCxPQUFBO1VBQ0EsSUFBQW9ILFFBQUEsR0FBQXBILE9BQUE7VUFFTyxNQUFNaVAsTUFBTSxHQUFHQSxDQUFBLEtBQUs7WUFDMUIsTUFBTTtjQUFFWixRQUFRO2NBQUUzTSxRQUFRO2NBQUVrTTtZQUFZLENBQUUsR0FBRyxJQUFBeEcsUUFBQSxDQUFBaUcsZUFBZSxHQUFFO1lBRTlELE1BQU02QixNQUFNLEdBQUcsTUFBTWxELEtBQUssSUFBRztjQUM1QkEsS0FBSyxDQUFDa0MsY0FBYyxFQUFFO2NBQ3RCLE1BQU14TSxRQUFRLENBQUNzRixJQUFJLEVBQUU7Y0FDckI0RyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFDRCxPQUNDM0csTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNkIsR0FDM0NwQyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUNsQyxNQUFBLENBQUFvQyxVQUFVO2NBQUNELFNBQVMsRUFBQyxRQUFRO2NBQUM5QixJQUFJLEVBQUMsUUFBUTtjQUFDaUMsT0FBTyxFQUFFMEY7WUFBTSxFQUFJLEVBQ2hFakksTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDNEYsTUFBQSxDQUFBRyxLQUFLO2NBQUNDLE1BQU0sRUFBQztZQUFPLEVBQUcsRUFDeEJuSSxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUNsQyxNQUFBLENBQUFvQyxVQUFVO2NBQUMvQixJQUFJLEVBQUMsTUFBTTtjQUFDOEIsU0FBUyxFQUFDLFFBQVE7Y0FBQ0UsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFNkU7WUFBUSxFQUFJLENBQzdFO1VBRVIsQ0FBQztVQUFDdE4sT0FBQSxDQUFBa08sTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCRixJQUFBaEksTUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUFrSCxNQUFBLEdBQUFsSCxPQUFBO1VBQ0EsSUFBQXFQLE1BQUEsR0FBQXJQLE9BQUE7VUFFQSxJQUFBb0gsUUFBQSxHQUFBcEgsT0FBQTtVQUVPO1VBQVcsTUFBTXNQLHFCQUFxQixHQUFHQSxDQUFDO1lBQUVDLElBQUk7WUFBRUM7VUFBTyxDQUFFLEtBQUk7WUFDckUsSUFBSSxDQUFDRCxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU07Y0FBRTFGO1lBQUssQ0FBRSxHQUFHLElBQUF6QyxRQUFBLENBQUFNLGNBQWMsR0FBRTtZQUNsQyxNQUFNO2NBQUUrRCxLQUFLO2NBQUVnRTtZQUFXLENBQUUsR0FBRzVGLEtBQUssQ0FBQzZGLFdBQVcsQ0FBQzVJLEtBQUs7WUFFdEQsT0FDQ0csTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFBbkMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBNEUsUUFBQSxRQUNDdEQsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDaUcsTUFBQSxDQUFBTSxVQUFVO2NBQUN0RyxTQUFTLEVBQUMsaUJBQWlCO2NBQUN1RyxJQUFJLEVBQUUsSUFBSTtjQUFFTCxJQUFJLEVBQUUsSUFBSTtjQUFFQyxPQUFPLEVBQUVBLE9BQU87Y0FBRUssUUFBUTtZQUFBLEdBQ3pGNUksTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBOEIsR0FDNUNwQyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE4QixHQUM1Q3BDLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsYUFBS3FDLEtBQUssQ0FBTSxDQUNYLEVBQ054RSxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUNsQyxNQUFBLENBQUE0SSxJQUFJO2NBQUN6RyxTQUFTLEVBQUMsMEJBQTBCO2NBQUM5QixJQUFJLEVBQUM7WUFBSyxFQUFHLEVBQ3hETixNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUF5QixHQUFFb0csV0FBVyxDQUFLLENBQ25ELENBQ00sQ0FDWDtVQUVMLENBQUM7VUFBQzFPLE9BQUEsQ0FBQXVPLHFCQUFBLEdBQUFBLHFCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCRixJQUFBckksTUFBQSxHQUFBakgsT0FBQTtVQUVBLElBQUFxTCxXQUFBLEdBQUFyTCxPQUFBO1VBRUEsSUFBQStQLE9BQUEsR0FBQS9QLE9BQUE7VUFDQSxJQUFBb0gsUUFBQSxHQUFBcEgsT0FBQTtVQUNBLElBQUFnUSxTQUFBLEdBQUFoUSxPQUFBO1VBQ0EsSUFBQXFQLE1BQUEsR0FBQXJQLE9BQUE7VUFDQSxJQUFBaVEsV0FBQSxHQUFBalEsT0FBQTtVQUNPO1VBQVcsTUFBTStPLGVBQWUsR0FBR0EsQ0FBQztZQUFFMU8sS0FBSztZQUFFQSxLQUFLLEVBQUU7Y0FBRXFEO1lBQVksQ0FBRTtZQUFFZTtVQUFRLENBQUUsS0FBSTtZQUMxRixNQUFNO2NBQUUvQyxRQUFRO2NBQUVpTSxTQUFTO2NBQUVDO1lBQVksQ0FBRSxHQUFHLElBQUFvQyxTQUFBLENBQUEzQyxlQUFlLEdBQUU7WUFDL0QsTUFBTSxDQUFDbEksUUFBUSxFQUFFc0gsV0FBVyxDQUFDLEdBQUcsSUFBQXhGLE1BQUEsQ0FBQStDLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDa0csU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRyxJQUFBbEosTUFBQSxDQUFBK0MsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNLENBQUNsRCxLQUFLLEVBQUVzSixRQUFRLENBQUMsR0FBRyxJQUFBbkosTUFBQSxDQUFBK0MsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUN6QyxNQUFNLENBQUNxRyxhQUFhLEVBQUVDLGdCQUFnQixDQUFDLEdBQUcsSUFBQXJKLE1BQUEsQ0FBQStDLFFBQVEsRUFDakR2SixVQUFVLEVBQUU4UCxZQUFZLENBQUNDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUNoRTtZQUNELE1BQU07Y0FBRTNHO1lBQUssQ0FBRSxHQUFHLElBQUF6QyxRQUFBLENBQUFNLGNBQWMsR0FBRTtZQUNsQyxNQUFNK0ksUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQixJQUFJO2dCQUNILE1BQU0vTyxRQUFRLENBQUNnUCxNQUFNLEVBQUU7Z0JBQ3ZCOUMsWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztlQUN4QixDQUFDLE9BQU8vRyxDQUFDLEVBQUU7Z0JBQ1h3SixRQUFRLENBQUMsSUFBSSxDQUFDOztZQUVoQixDQUFDO1lBRUQsTUFBTU8sWUFBWSxHQUFHQSxDQUFBLEtBQUs7Y0FDekJqUCxRQUFRLENBQ05rUCxjQUFjLEVBQUUsQ0FDaEJDLElBQUksQ0FBQyxNQUFLO2dCQUNWcFEsVUFBVSxFQUFFOFAsWUFBWSxDQUFDTyxPQUFPLENBQUMsOEJBQThCLEVBQUUsTUFBTSxDQUFDO2dCQUN4RVIsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2NBQ3pCLENBQUMsQ0FBQyxDQUNEUyxLQUFLLENBQUNqSyxLQUFLLElBQUc7Z0JBQ2RELE9BQU8sQ0FBQ21LLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckNaLFFBQVEsQ0FBQyxJQUFJLENBQUM7Y0FDZixDQUFDLENBQUM7WUFDSixDQUFDO1lBQ0QsTUFBTWEsVUFBVSxHQUFHLE1BQU1qRixLQUFLLElBQUc7Y0FDaEMsSUFBSTtnQkFDSEEsS0FBSyxDQUFDa0MsY0FBYyxFQUFFO2dCQUN0QnpCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBRWpCLElBQUksQ0FBQzRELGFBQWEsSUFBSUEsYUFBYSxLQUFLLE1BQU0sRUFBRTtrQkFDL0NGLFlBQVksQ0FBQyxJQUFJLENBQUM7a0JBQ2xCOztnQkFHRE0sUUFBUSxFQUFFO2VBQ1YsQ0FBQyxPQUFPN0osQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNtSyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNmWixRQUFRLENBQUMsSUFBSSxDQUFDO2VBQ2QsU0FBUztnQkFDVDNELFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxNQUFNK0MsT0FBTyxHQUFHeEQsS0FBSyxJQUFHO2NBQ3ZCUyxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ2xCMEQsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNwQixDQUFDO1lBRUQsSUFBSXhDLFNBQVMsRUFBRSxPQUFPMUcsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDMkcsT0FBQSxDQUFBZCxNQUFNLE9BQUc7WUFFaEMsT0FDQ2hJLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsQ0FBQW5DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQTRFLFFBQUEsUUFDQ3RELE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsQ0FBQ2lDLFdBQUEsQ0FBQXlELE1BQU07Y0FBQ3ZILElBQUksRUFBQyxLQUFLO2NBQUNwQyxRQUFRLEVBQUVBLFFBQVE7Y0FBRXFFLE9BQU8sRUFBRXlILFVBQVU7Y0FBRXhNLFFBQVEsRUFBRUEsUUFBUSxJQUFJVTtZQUFRLEVBQUksRUFDOUY4QixNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUNpRyxNQUFBLENBQUE2QixnQkFBZ0I7Y0FBQzNCLElBQUksRUFBRVcsU0FBUztjQUFFVixPQUFPLEVBQUVBLE9BQU87Y0FBRTJCLFNBQVMsRUFBRVI7WUFBWSxFQUFJLEVBQ2hGMUosTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDNkcsV0FBQSxDQUFBWCxxQkFBcUI7Y0FBQ0MsSUFBSSxFQUFFekksS0FBSztjQUFFMEksT0FBTyxFQUFFQSxDQUFBLEtBQU1ZLFFBQVEsQ0FBQyxLQUFLO1lBQUMsRUFBSSxDQUNwRTtVQUVMLENBQUM7VUFBQ3JQLE9BQUEsQ0FBQWdPLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RUYsSUFBQTlILE1BQUEsR0FBQWpILE9BQUE7VUFDQSxJQUFBa0gsTUFBQSxHQUFBbEgsT0FBQTtVQUNBLElBQUFxUCxNQUFBLEdBQUFyUCxPQUFBO1VBQ0EsSUFBQW9ILFFBQUEsR0FBQXBILE9BQUE7VUFFTztVQUFXLE1BQU1rUixnQkFBZ0IsR0FBR0EsQ0FBQztZQUFFM0IsSUFBSTtZQUFFQyxPQUFPO1lBQUUyQjtVQUFTLENBQUUsS0FBSTtZQUMzRSxJQUFJLENBQUM1QixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU07Y0FBRTFGO1lBQUssQ0FBRSxHQUFHLElBQUF6QyxRQUFBLENBQUFNLGNBQWMsR0FBRTtZQUNsQyxNQUFNMEosUUFBUSxHQUFHdkgsS0FBSyxDQUFDNkYsV0FBVyxDQUFDakUsS0FBSztZQUN4QyxNQUFNZ0UsV0FBVyxHQUFHNUYsS0FBSyxDQUFDNkYsV0FBVyxDQUFDRCxXQUFXO1lBRWpELE9BQ0N4SSxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUFuQyxNQUFBLENBQUF0QixPQUFBLENBQUE0RSxRQUFBLFFBQ0N0RCxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUNpRyxNQUFBLENBQUFNLFVBQVU7Y0FBQ0osSUFBSSxFQUFFLElBQUk7Y0FBRUMsT0FBTyxFQUFFQSxPQUFPO2NBQUVLLFFBQVE7Y0FBQ3NCLFNBQVMsRUFBRUE7WUFBUyxHQUN0RWxLLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQThCLEdBQzVDcEMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBOEIsR0FDNUNwQyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFzQixHQUFFUSxLQUFLLENBQUM2RixXQUFXLENBQUMyQixLQUFLLENBQVEsRUFDdkVwSyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLGFBQUtnSSxRQUFRLENBQU0sQ0FDZCxFQUNObkssTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDbEMsTUFBQSxDQUFBNEksSUFBSTtjQUFDekcsU0FBUyxFQUFDLDBCQUEwQjtjQUFDOUIsSUFBSSxFQUFDO1lBQUssRUFBRyxFQUN4RE4sTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBeUIsR0FBRW9HLFdBQVcsQ0FBSyxDQUNuRCxDQUNNLENBQ1g7VUFFTCxDQUFDO1VBQUMxTyxPQUFBLENBQUFtUSxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkYsSUFBQWpLLE1BQUEsR0FBQWpILE9BQUE7VUFDQSxJQUFBc04sS0FBQSxHQUFBdE4sT0FBQTtVQUNBLElBQUFxTCxXQUFBLEdBQUFyTCxPQUFBO1VBQ0EsSUFBQXNSLE1BQUEsR0FBQXRSLE9BQUE7VUFDQSxJQUFBb0gsUUFBQSxHQUFBcEgsT0FBQTtVQUVPLE1BQU11UixNQUFNLEdBQUdBLENBQUM7WUFBRWpPLElBQUk7WUFBRWtPO1VBQVUsQ0FBRSxLQUFJO1lBQzlDLE1BQU0sQ0FBQ3RRLEtBQUssRUFBRXVRLFFBQVEsQ0FBQyxHQUFHeEssTUFBQSxDQUFBdEIsT0FBSyxDQUFDcUUsUUFBUSxDQUFDMUcsSUFBSSxFQUFFa0wsTUFBTSxDQUFDO1lBQ3RELE1BQU0sQ0FBQzFILEtBQUssRUFBRXNKLFFBQVEsQ0FBQyxHQUFHbkosTUFBQSxDQUFBdEIsT0FBSyxDQUFDcUUsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUMwSCxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHMUssTUFBQSxDQUFBdEIsT0FBSyxDQUFDcUUsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNO2NBQUVIO1lBQUssQ0FBRSxHQUFHLElBQUF6QyxRQUFBLENBQUFNLGNBQWMsR0FBRTtZQUVsQyxTQUFTa0ssWUFBWUEsQ0FBQzVGLEtBQUs7Y0FDMUIsTUFBTTtnQkFBRTlLLEtBQUssRUFBRTJRO2NBQWEsQ0FBRSxHQUFHN0YsS0FBSyxDQUFDOEYsTUFBTTtjQUM3Q0wsUUFBUSxDQUFDSSxhQUFhLENBQUM7WUFDeEI7WUFFQSxTQUFTRSxXQUFXQSxDQUFBO2NBQ25CM0IsUUFBUSxDQUFDLEtBQUssQ0FBQztjQUNmdUIsVUFBVSxDQUFDLEtBQUssQ0FBQztjQUNqQkYsUUFBUSxDQUFDbk8sSUFBSSxFQUFFa0wsTUFBTSxDQUFDO2NBQ3RCZ0QsVUFBVSxFQUFFO1lBQ2I7WUFFQSxNQUFNUSxZQUFZLEdBQUcsTUFBTWhHLEtBQUssSUFBRztjQUNsQ0EsS0FBSyxDQUFDa0MsY0FBYyxFQUFFO2NBQ3RCeUQsVUFBVSxDQUFDLElBQUksQ0FBQztjQUNoQixNQUFNbkwsUUFBUSxHQUFHLE1BQU1sRCxJQUFJLENBQUMyTyxPQUFPLENBQUM7Z0JBQUV6RCxNQUFNLEVBQUV0TjtjQUFLLENBQUUsQ0FBQztjQUN0RCxJQUFJLENBQUNzRixRQUFRLENBQUMwTCxNQUFNLEVBQUU5QixRQUFRLENBQUM1SixRQUFRLENBQUNNLEtBQUssQ0FBQztjQUU5Q3dLLE1BQUEsQ0FBQWEsS0FBSyxDQUFDQyxPQUFPLENBQUN2SSxLQUFLLENBQUMyRSxNQUFNLENBQUM0RCxPQUFPLENBQUM7Y0FDbkNMLFdBQVcsRUFBRTtZQUNkLENBQUM7WUFFRCxPQUNDOUssTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDa0UsS0FBQSxDQUFBc0IsSUFBSTtjQUFDUCxRQUFRLEVBQUUyRCxZQUFZO2NBQUUzSSxTQUFTLEVBQUM7WUFBYSxHQUNuRHZDLEtBQUssSUFBSUcsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBdUIsR0FBRXZDLEtBQUssQ0FBTyxFQUM5REcsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDa0UsS0FBQSxDQUFBK0UsUUFBUTtjQUFDQyxJQUFJLEVBQUUsQ0FBQztjQUFFcFIsS0FBSyxFQUFFQSxLQUFLO2NBQUVxUixXQUFXLEVBQUMsd0JBQXdCO2NBQUNDLFFBQVEsRUFBRVo7WUFBWSxFQUFJLEVBQ2hHM0ssTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxpQkFDQ25DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsQ0FBQ2lDLFdBQUEsQ0FBQXlELE1BQU07Y0FBQ3ZILElBQUksRUFBQyxjQUFjO2NBQUNrTCxLQUFLLEVBQUMsUUFBUTtjQUFDbEosT0FBTyxFQUFDLGNBQWM7Y0FBQ0MsT0FBTyxFQUFFdUk7WUFBVyxFQUFJLEVBQzFGOUssTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDaUMsV0FBQSxDQUFBeUQsTUFBTTtjQUFDNEQsSUFBSSxFQUFDLFFBQVE7Y0FBQ25MLElBQUksRUFBQyxNQUFNO2NBQUNpQyxPQUFPLEVBQUV3SSxZQUFZO2NBQUVTLEtBQUssRUFBQyxRQUFRO2NBQUNmLE9BQU8sRUFBRUE7WUFBTyxFQUFJLENBQ3BGLENBQ0g7VUFFVCxDQUFDO1VBQUMzUSxPQUFBLENBQUF3USxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNGLElBQUF0SyxNQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQXNOLEtBQUEsR0FBQXROLE9BQUE7VUFDQSxJQUFBcUwsV0FBQSxHQUFBckwsT0FBQTtVQUNBLElBQUFrSCxNQUFBLEdBQUFsSCxPQUFBO1VBQ0EsSUFBQW9ILFFBQUEsR0FBQXBILE9BQUE7VUFFTztVQUFXLE1BQU0yTyxXQUFXLEdBQUdBLENBQUM7WUFBRXJMO1VBQUksQ0FBRSxLQUFJO1lBQ2xELE1BQU1xUCxTQUFTLEdBQUcxTCxNQUFBLENBQUF0QixPQUFLLENBQUM2QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3BDLE1BQU07Y0FDTHFDLEtBQUssRUFBRTtnQkFBRStJLFNBQVMsRUFBRS9JO2NBQUs7WUFBRSxDQUMzQixHQUFHLElBQUF6QyxRQUFBLENBQUFNLGNBQWMsR0FBRTtZQUNwQixNQUFNbUwsU0FBUyxHQUFHQSxDQUFBLEtBQU1GLFNBQVMsQ0FBQzVLLE9BQU8sQ0FBQ21JLFNBQVMsRUFBRTtZQUNyRCxNQUFNc0IsVUFBVSxHQUFHQSxDQUFBLEtBQU1tQixTQUFTLENBQUM1SyxPQUFPLENBQUMrSyxLQUFLLEVBQUU7WUFFbEQsT0FDQzdMLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUE7Y0FBS0MsU0FBUyxFQUFFO1lBQWdDLEdBQy9DcEMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDaUMsV0FBQSxDQUFBeUQsTUFBTTtjQUFDdkgsSUFBSSxFQUFDLE1BQU07Y0FBQ2lDLE9BQU8sRUFBRXFKLFNBQVM7Y0FBRUUsSUFBSSxFQUFDO1lBQVMsRUFBRyxFQUV4RDlMLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUE7Y0FBUXpCLEdBQUcsRUFBRWdMLFNBQVM7Y0FBRW5ELE9BQU8sRUFBRWdDO1lBQVUsR0FDMUN2SyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUNsQyxNQUFBLENBQUFvQyxVQUFVO2NBQUMvQixJQUFJLEVBQUMsT0FBTztjQUFDOEIsU0FBUyxFQUFDLE9BQU87Y0FBQ0csT0FBTyxFQUFFZ0k7WUFBVSxFQUFJLEVBQ2xFdkssTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxpQkFDQ25DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsYUFBS1MsS0FBSyxDQUFDK0ksU0FBUyxDQUFNLENBQ2xCLEVBQ1QzTCxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLGNBQ0NuQyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLFlBQUlTLEtBQUssQ0FBQ3JGLE9BQU8sQ0FBSyxDQUNqQixFQUNOeUMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDa0UsS0FBQSxDQUFBaUUsTUFBTTtjQUFDak8sSUFBSSxFQUFFQSxJQUFJO2NBQUVrTyxVQUFVLEVBQUVBO1lBQVUsRUFBSSxDQUN0QyxDQUVMO1VBRVIsQ0FBQztVQUFDelEsT0FBQSxDQUFBNE4sV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CRixJQUFBMUgsTUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUFtSCxNQUFBLEdBQUFuSCxPQUFBO1VBRU0sU0FBVTZPLFNBQVNBLENBQUM7WUFBRXBDLFdBQVc7WUFBRXBNLEtBQUs7WUFBRTJOLE9BQU87WUFBRUksVUFBVTtZQUFFakosUUFBUTtZQUFFNEksSUFBSTtZQUFFdEo7VUFBUSxDQUFFO1lBQzlGLE1BQU11TyxXQUFXLEdBQUcvTCxNQUFBLENBQUF0QixPQUFLLENBQUM2QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3RDUCxNQUFBLENBQUF0QixPQUFLLENBQUNrRCxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNaUosTUFBTSxHQUFHa0IsV0FBVyxDQUFDakwsT0FBTztjQUNsQytKLE1BQU0sQ0FBQ21CLEtBQUssQ0FBQ3JILE1BQU0sR0FBRyxNQUFNO2NBQzVCa0csTUFBTSxDQUFDbUIsS0FBSyxDQUFDckgsTUFBTSxHQUFHbUMsSUFBSSxDQUFDOUQsTUFBTSxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUc2SCxNQUFNLENBQUMzSixZQUFZLEdBQUcsSUFBSTtjQUM1RSxJQUFJLENBQUMsV0FBVyxFQUFFOUIsU0FBUyxDQUFDLENBQUNDLFFBQVEsQ0FBQ3lILElBQUksQ0FBQ08sVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ25FLENBQUMsRUFBRSxDQUFDUCxJQUFJLENBQUMsQ0FBQztZQUVWLElBQUE1RyxNQUFBLENBQUFTLFNBQVMsRUFDUixDQUFDdkgsS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKSSxVQUFVLENBQUNvSCxVQUFVLENBQUMsTUFBTW1MLFdBQVcsQ0FBQ2pMLE9BQU8sQ0FBQ21MLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQztjQUM3RHpHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQyxFQUNELGdCQUFnQixDQUNoQjtZQUVELE1BQU0wRyxnQkFBZ0IsR0FBRztjQUFFMU8sUUFBUSxFQUFFVSxRQUFRLElBQUlWO1lBQVEsQ0FBRTtZQUMzRCxNQUFNMk8saUJBQWlCLEdBQUd4TSxDQUFDLElBQUc7Y0FDN0IsTUFBTTtnQkFBRTFGO2NBQUssQ0FBRSxHQUFHMEYsQ0FBQyxDQUFDa0wsTUFBTTtjQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFekwsU0FBUyxDQUFDLENBQUNDLFFBQVEsQ0FBQ3BGLEtBQUssQ0FBQ29OLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2NBQy9ETixPQUFPLENBQUM5TSxLQUFLLENBQUM7WUFDZixDQUFDO1lBQ0QsTUFBTW1TLGFBQWEsR0FBR3pNLENBQUMsSUFBRztjQUN6QixJQUFJQSxDQUFDLENBQUMwTSxHQUFHLEtBQUssT0FBTyxFQUFFO2NBQ3ZCLE1BQU1DLEVBQUUsR0FBR0MsU0FBUyxJQUFJQSxTQUFTLEdBQUcsSUFBSTtjQUN4QyxNQUFNdFMsS0FBSyxHQUFHMEYsQ0FBQyxDQUFDa0wsTUFBTSxDQUFDNVEsS0FBSyxDQUFDb04sVUFBVSxDQUFDLElBQUksQ0FBQztjQUM3QyxJQUFJLENBQUMsRUFBRSxFQUFFakksU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUNwRixLQUFLLENBQUMsRUFBRTtjQUMzQzBGLENBQUMsQ0FBQzZNLFFBQVEsR0FBR3pGLE9BQU8sQ0FBQ3VGLEVBQUUsQ0FBQyxHQUFHbkYsVUFBVSxFQUFFO1lBQ3hDLENBQUM7WUFFRCxPQUNDbkgsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQTtjQUFBLEdBQ0srSixnQkFBZ0I7Y0FDcEJiLElBQUksRUFBRSxDQUFDO2NBQ1BwUixLQUFLLEVBQUU2TSxJQUFJO2NBQ1h5RSxRQUFRLEVBQUVZLGlCQUFpQjtjQUMzQk0sU0FBUyxFQUFFTCxhQUFhO2NBQ3hCTSxTQUFTLEVBQUUsSUFBSTtjQUNmdEssU0FBUyxFQUFDLGlCQUFpQjtjQUMzQjFCLEdBQUcsRUFBRXFMO1lBQVcsRUFDZjtVQUVKOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlDQSxJQUFBL0wsTUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUE0VCxTQUFBLEdBQUE1VCxPQUFBO1VBRkE7O1VBUU0sU0FBVW1QLEtBQUtBLENBQUM7WUFBRUM7VUFBTSxDQUFjO1lBQzNDLE1BQU15RSxTQUFTLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUN2TixRQUFRLENBQUM4SSxNQUFNLENBQUM7WUFDdkQsTUFBTTBFLE9BQU8sR0FBRzFFLE1BQU0sS0FBSyxTQUFTO1lBQ3BDLE1BQU0sQ0FBQzJFLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUFOLFNBQUEsQ0FBQU8sUUFBUSxFQUFDTixTQUFTLEVBQUVDLE9BQU8sQ0FBQztZQUM1RSxNQUFNTSxXQUFXLEdBQUdILE9BQU8sQ0FBQ0ksUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ3ZELE1BQU1DLGVBQWUsR0FBR1AsT0FBTyxDQUFDSyxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDM0QsT0FDQ3JOLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTBCLEdBQ3hDcEMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxlQUFPLEdBQUdtTCxlQUFlLEVBQUUsRSxJQUFTLEVBQ3BDdE4sTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxlQUFPLEdBQUdnTCxXQUFXLEVBQUUsQ0FBUSxDQUMxQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBbk4sTUFBQSxHQUFBakgsT0FBQTtVQURBOztVQUVBLE1BQU07WUFBRWdLLFFBQVE7WUFBRW5CO1VBQVMsQ0FBRSxHQUFHNUIsTUFBQSxDQUFBdEIsT0FBSztVQUUvQixTQUFVd08sUUFBUUEsQ0FBQ04sU0FBa0IsRUFBRUMsT0FBZ0I7WUFDNUQsTUFBTSxDQUFDVSxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHekssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVuQ25CLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSTZMLFVBQTBCO2NBRTlCLElBQUliLFNBQVMsRUFBRTtnQkFDZGEsVUFBVSxHQUFHQyxXQUFXLENBQUMsTUFBSztrQkFDN0JGLE9BQU8sQ0FBQ0csUUFBUSxJQUFJQSxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O2NBR1QsT0FBTyxNQUFLO2dCQUNYQyxhQUFhLENBQUNILFVBQVUsQ0FBQztjQUMxQixDQUFDO1lBQ0YsQ0FBQyxFQUFFLENBQUNiLFNBQVMsQ0FBQyxDQUFDO1lBRWZoTCxTQUFTLENBQUMsTUFBSztjQUNkLElBQUlpTCxPQUFPLEVBQUU7Z0JBQ1pXLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1lBRVosQ0FBQyxFQUFFLENBQUNYLE9BQU8sQ0FBQyxDQUFDO1lBRWIsTUFBTUksWUFBWSxHQUFHTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDakMsTUFBTVAsT0FBTyxHQUFHYSxJQUFJLENBQUNDLEtBQUssQ0FBRVAsSUFBSSxHQUFHLEdBQUcsR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU1SLE9BQU8sR0FBR2MsSUFBSSxDQUFDQyxLQUFLLENBQUVQLElBQUksR0FBRyxJQUFJLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNVCxLQUFLLEdBQUdlLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV6QyxPQUFPLENBQUNULEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQztVQUMvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0EsSUFBQWpOLE1BQUEsR0FBQWpILE9BQUE7VUFDQSxJQUFBZ1YsUUFBQSxHQUFBaFYsT0FBQTtVQUNBLElBQUFxTCxXQUFBLEdBQUFyTCxPQUFBO1VBQ0EsSUFBQWtILE1BQUEsR0FBQWxILE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFpVixZQUFBLEdBQUFqVixPQUFBO1VBQ0EsSUFBQWtWLE9BQUEsR0FBQWxWLE9BQUE7VUFFTSxTQUFVa04sWUFBWUEsQ0FBQTtZQUMzQixTQUFTaUksVUFBVUEsQ0FBQTtjQUNsQkgsUUFBQSxDQUFBSSxTQUFTLENBQUNDLFdBQVcsR0FBRyxJQUFJO1lBQzdCO1lBRUEsSUFBSSxDQUFDaFUsUUFBQSxDQUFBZ0IsVUFBVSxDQUFDK0MsS0FBSyxFQUFFLE9BQU82QixNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUM2TCxZQUFBLENBQUFLLGFBQWEsT0FBRztZQUMvQyxPQUNDck8sTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaENwQyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBO2NBQUttTSxHQUFHLEVBQUMsdUJBQXVCO2NBQUNDLEdBQUcsRUFBQztZQUFnQixFQUFHLEVBQ3hEdk8sTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBcUIsR0FDcENwQyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLENBQUNsQyxNQUFBLENBQUE0SSxJQUFJO2NBQUN2SSxJQUFJLEVBQUUyTixPQUFBLENBQUFPLEtBQUssQ0FBQyxlQUFlLENBQUM7Y0FBRXBNLFNBQVMsRUFBQztZQUFtQixFQUFHLEVBQ3BFcEMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSw4QkFBdUIsRUFDdkJuQyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLFlBQ0NuQyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLG9FQUFpRSxFLEtBQUNuQyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLFlBQU0sRSxtREFFckUsRUFDSm5DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsQ0FBQ2lDLFdBQUEsQ0FBQXlELE1BQU07Y0FBQ3ZILElBQUksRUFBQyxNQUFNO2NBQUNpQyxPQUFPLEVBQUUyTCxVQUFVO2NBQUUxQyxLQUFLLEVBQUM7WUFBZ0IsRUFBRyxDQUM1RCxDQUNGO1VBRVIifQ==