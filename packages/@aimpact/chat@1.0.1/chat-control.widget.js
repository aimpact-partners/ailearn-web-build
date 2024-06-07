System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.0.0/startup", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@aimpact/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/messages.code", "pragmate-ui@0.1.1/perfect-scrollbar", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-13/config", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Chat, ChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, SystemModal, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk100Startup) {
      dependency_4 = _aimpactChatSdk100Startup;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Voice) {
      dependency_6 = _aimpactChatSdk100Voice;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_8 = _aimpactMediaManager100Recorder;
    }, function (_aimpactChatSdk100Core) {
      dependency_9 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Extensions) {
      dependency_10 = _aimpactChat101Extensions;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi011Icons) {
      dependency_13 = _pragmateUi011Icons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101MessagesCode) {
      dependency_15 = _aimpactChat101MessagesCode;
    }, function (_pragmateUi011PerfectScrollbar) {
      dependency_16 = _pragmateUi011PerfectScrollbar;
    }, function (_aimpactChat101SharedComponents) {
      dependency_17 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011Preload) {
      dependency_18 = _pragmateUi011Preload;
    }, function (_aimpactChat101SharedHooks) {
      dependency_19 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Form) {
      dependency_20 = _pragmateUi011Form;
    }, function (_pragmateUi011Components) {
      dependency_21 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev13Config) {
      dependency_22 = _aimpactAilearnApp0046Dev13Config;
    }, function (_pragmateUi011Modal) {
      dependency_23 = _pragmateUi011Modal;
    }, function (_pragmateUi011Toast) {
      dependency_24 = _pragmateUi011Toast;
    }, function (_aimpactChat101UiManager) {
      dependency_25 = _aimpactChat101UiManager;
    }, function (_aimpactChat101SharedIcons) {
      dependency_26 = _aimpactChat101SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/auth", "1.7.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.46.dev-13"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat-sdk/startup', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/voice', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['@aimpact/media-manager/recorder', dependency_8], ['@aimpact/chat-sdk/core', dependency_9], ['@aimpact/chat/extensions', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['react', dependency_12], ['pragmate-ui/icons', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/messages.code', dependency_15], ['pragmate-ui/perfect-scrollbar', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['pragmate-ui/preload', dependency_18], ['@aimpact/chat/shared/hooks', dependency_19], ['pragmate-ui/form', dependency_20], ['pragmate-ui/components', dependency_21], ['@aimpact/chat/config', dependency_22], ['pragmate-ui/modal', dependency_23], ['pragmate-ui/toast', dependency_24], ['@aimpact/chat/ui/manager', dependency_25], ['@aimpact/chat/shared/icons', dependency_26]]);
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
        hash: 607308314,
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
        hash: 1926009055,
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
          var _session = require("@aimpact/chat-sdk/session");
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
              if (!_session.sessionWrapper.user?.logged) {
                _session.sessionWrapper.on('login', this.load);
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
        hash: 2733643470,
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
              className: "separator"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInVubW91bnQiLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiX3JlY29yZGVyIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInBhcmVudCIsInJlY29yZGVyIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJwbGF5ZXIiLCJjdXJyZW50UGxheWVyIiwiY29uc3RydWN0b3IiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJsYW5ndWFnZSIsIkFwcFdyYXBwZXIiLCJyYXRlIiwiYXVkaW9TcGVlZCIsIm9uIiwibGlzdGVuQXBwQ2hhbmdlcyIsInNldCIsImxhbmd1dWFnZSIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInRyaWdnZXIiLCJfY29yZSIsIl9hdWRpbyIsIl9leHRlbnNpb25zIiwiX3Nlc3Npb24iLCJtZXNzYWdlcyIsIkVYVEVOU0lPTlMiLCJjYXRlZ29yeSIsImNoYXQiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJrYnMiLCJrbm93bGVkZ2VCb3hlcyIsInNlbGVjdGVkS2IiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsImlkIiwicGF0aCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZSIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsImF0dHJzIiwiZ2V0IiwiYXV0b3BsYXkiLCJjaGVja0F0dHJpYnV0ZXMiLCJsb2FkIiwiY2xlYW4iLCJmZXRjaGluZyIsInJlYWR5Iiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwibG9nZ2VkIiwiQ2hhdCIsImxvYWRBbGwiLCJjdXJyZW50Q2hhdCIsImZvdW5kIiwia25vd2xlZGVCb3hTZWxlY3RlZCIsImtub3dsZWRnZUJveElkIiwiZGVmYXVsdCIsImV4dHMiLCJtZXRhZGF0YSIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNlbmRNZXNzYWdlIiwiY29udGVudCIsInBlcmZvcm1hbmNlIiwibWFyayIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwid2FpdGluZ1Jlc3BvbnNlIiwicmVzcG9uc2UiLCJvbkxpc3RlbiIsIm9uRW5kIiwib2ZmIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInBsYXlhYmxlIiwic3RvcCIsIl9yZWFjdCIsIl9pY29ucyIsIl9ob29rcyIsIl9jb250ZXh0IiwiQmFja0Fycm93Iiwic2VwYXJhdG9yIiwiaWNvbiIsInVzZVJlZiIsInNjcm9sbFBvc2l0aW9uIiwidXNlQ2hhdENvbnRleHQiLCJyZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0IiwiY29udGFpbmVyIiwiY3VycmVudCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiZGlzdGFuY2VGcm9tQm90dG9tIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ29Ub0JvdHRvbSIsImFkZCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xzIiwiaGFzIiwiY2xzQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb25CdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIl91c2VFeHRlbnNpb24iLCJfbWVzc2FnZXMiLCJfZXh0ZW5zaW9uUmVuZGVyZXIiLCJDb250ZW50IiwidGV4dHMiLCJ0b3RhbE1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ1c2VTdGF0ZSIsImxlbmd0aCIsIndlYkNvbXBvbmVudE5hbWUiLCJ1c2VFeHRlbnNpb24iLCJFeHRlbnNpb25SZW5kZXJlciIsImNvbXBvbmVudCIsInJlZmVyZW5jZSIsIkZyYWdtZW50IiwiTWVzc2FnZXMiLCJDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiX2lucHV0IiwiX2JhY2tBcnJvdyIsIl9jb250ZW50IiwicHJvcHMiLCJjaGF0SW50cm8iLCJyZWFkZXIiLCJhdm9pZENoYXQiLCJDaGF0SW5wdXQiLCJpc1dhaXRpbmciLCJfY29tcG9uZW50cyIsIl9wcmVsb2FkIiwiQ2hhdFNrZWxldG9uIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIlByZWxvYWQiLCJ3aWR0aCIsImhlaWdodCIsInNldFJlYWR5IiwiY29udHJvbCIsIm9uUmVhZHkiLCJldmVudCIsIkNoYXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFNjcm9sbFBvc2l0aW9uIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDb250cm9sIiwiQ2hhdE5vdEZvdW5kIiwiUHJvdmlkZXIiLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dENvbnRleHQiLCJfZm9ybSIsIl9jb25maWciLCJfcmVjb3JkaW5nIiwiX2luZGV4IiwiX3RleHRJbnB1dCIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwidGV4dCIsInNldFRleHQiLCJzZW5kQXVkaW8iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZVNlbmQiLCJvblN1Ym1pdCIsInJlcGxhY2VBbGwiLCJ0cmltIiwic3lzdGVtIiwicGFyYW1zIiwiY29uZmlnIiwiU3lzdGVtTW9kYWwiLCJGb3JtIiwiVGV4dElucHV0IiwiQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiX3RpbWVyIiwiUGxheWVyIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJfbW9kYWwiLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsImRlc2NyaXB0aW9uIiwicGVybWlzc2lvbnMiLCJBbGVydE1vZGFsIiwib3BlbiIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfY29udGV4dDIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwiaGFzUGVybWlzc2lvbiIsInNldEhhc1Blcm1pc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJyZWNvcmQiLCJnZXRVc2VyTWVkaWEiLCJoYXNQZXJtaXNzaW9ucyIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJsb2ciLCJwbGF5QWN0aW9uIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdG9hc3QiLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJUZXh0YXJlYSIsInJvd3MiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibGFiZWwiLCJ0eXBlIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJtb2RlIiwidGV4dEFyZWFSZWYiLCJzdHlsZSIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJfbWFuYWdlciIsIl9jb21wb25lbnRzMiIsIl9pY29uczIiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIiwic3JjIiwiYWx0IiwiSUNPTlMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy92aWV3cy9jaGF0L2JhY2stYXJyb3cudHN4IiwiL3RzL3ZpZXdzL2NoYXQvY29udGVudC50c3giLCIvdHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4IiwiL3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvdXNlLWV4dGVuc2lvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBR0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBT087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUM7Y0FDL0NDLFVBQVUsQ0FBQ0osS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJSyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1QsTUFBQSxDQUFBVSxJQUFJO1lBQ1o7WUFFQUMsT0FBT0EsQ0FB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