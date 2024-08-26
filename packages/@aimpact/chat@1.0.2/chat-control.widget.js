System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.1/voice", "@aimpact/chat@1.0.2/wrapper", "@aimpact/media-manager@0.0.1-beta.1/recorder", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/chat@1.0.2/extensions", "@aimpact/chat-sdk@1.0.1/session", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/messages.code", "pragmate-ui@1.0.0-beta.2/perfect-scrollbar", "@aimpact/chat@1.0.2/shared/components", "pragmate-ui@1.0.0-beta.2/preload", "@aimpact/chat@1.0.2/shared/hooks", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/chat@1.0.2/config", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/toast", "@aimpact/chat@1.0.2/ui/manager", "@aimpact/chat@1.0.2/shared/icons"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Chat, ChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, SystemModal, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk101Voice) {
      dependency_5 = _aimpactChatSdk101Voice;
    }, function (_aimpactChat102Wrapper) {
      dependency_6 = _aimpactChat102Wrapper;
    }, function (_aimpactMediaManager001Beta1Recorder) {
      dependency_7 = _aimpactMediaManager001Beta1Recorder;
    }, function (_aimpactChatSdk101Core) {
      dependency_8 = _aimpactChatSdk101Core;
    }, function (_aimpactChat102Extensions) {
      dependency_9 = _aimpactChat102Extensions;
    }, function (_aimpactChatSdk101Session) {
      dependency_10 = _aimpactChatSdk101Session;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_12 = _pragmateUi100Beta2Icons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat102MessagesCode) {
      dependency_14 = _aimpactChat102MessagesCode;
    }, function (_pragmateUi100Beta2PerfectScrollbar) {
      dependency_15 = _pragmateUi100Beta2PerfectScrollbar;
    }, function (_aimpactChat102SharedComponents) {
      dependency_16 = _aimpactChat102SharedComponents;
    }, function (_pragmateUi100Beta2Preload) {
      dependency_17 = _pragmateUi100Beta2Preload;
    }, function (_aimpactChat102SharedHooks) {
      dependency_18 = _aimpactChat102SharedHooks;
    }, function (_pragmateUi100Beta2Form) {
      dependency_19 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Components) {
      dependency_20 = _pragmateUi100Beta2Components;
    }, function (_aimpactChat102Config) {
      dependency_21 = _aimpactChat102Config;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_22 = _pragmateUi100Beta2Modal;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_23 = _pragmateUi100Beta2Toast;
    }, function (_aimpactChat102UiManager) {
      dependency_24 = _aimpactChat102UiManager;
    }, function (_aimpactChat102SharedIcons) {
      dependency_25 = _aimpactChat102SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/chat-api", null], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["pragmate-ui", "1.0.0-beta.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@firebase/auth", "1.7.5"], ["@firebase/component", "0.6.8"], ["@firebase/logger", "0.4.2"], ["@firebase/util", "1.9.7"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.19"], ["dayjs", "1.11.11"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.1"], ["highlight.js", "11.10.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.3"], ["marked-mangle", "1.1.8"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.2/chat-control",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/voice', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@aimpact/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/core', dependency_8], ['@aimpact/chat/extensions', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['react', dependency_11], ['pragmate-ui/icons', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/chat/messages.code', dependency_14], ['pragmate-ui/perfect-scrollbar', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['pragmate-ui/preload', dependency_17], ['@aimpact/chat/shared/hooks', dependency_18], ['pragmate-ui/form', dependency_19], ['pragmate-ui/components', dependency_20], ['@aimpact/chat/config', dependency_21], ['pragmate-ui/modal', dependency_22], ['pragmate-ui/toast', dependency_23], ['@aimpact/chat/ui/manager', dependency_24], ['@aimpact/chat/shared/icons', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-chat-control",
        "attrs": ["id", "container", "disabled", "playable"],
        "vspecifier": "@aimpact/chat@1.0.2/chat-control.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.2/chat-control.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1666088819,
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
              this.#store = new _store.StoreManager(this.attributes, this.widget);
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
        hash: 3194406359,
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
            #widget;
            #id;
            constructor(attrs, widget) {
              super(attrs.get('id'));
              this.#widget = widget;
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
                const event = new CustomEvent('onMessageSent');
                this.#widget.dispatchEvent(event);
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
                this.triggerEvent('new.message');
              } catch (e) {
                console.error(e);
              } finally {
                this.waitingResponse = false;
                this.fetching = false;
                this.triggerEvent();
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
        hash: 2059403988,
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
            (0, _hooks.useBinder)([store], () => {
              setWaiting(store.waitingResponse);
              setFetching(store.fetching);
            });
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
            let cls = `input-container ${fetching ? 'is-fetching' : ''}`;
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
              className: "chat-input-form"
            }, _react.default.createElement(_textInput.TextInput, {
              store: store,
              text: text,
              disabled: store.disabled,
              setFetching: setFetching,
              fetching: fetching || recording,
              setText: setText,
              handleSend: handleSend
            }), _react.default.createElement("span", {
              className: `input__icon  input__icon--right`
            }, !!text.length ? _react.default.createElement(_components.Button, {
              icon: "send-arrow",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJ3aWRnZXQiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInVubW91bnQiLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiX3JlY29yZGVyIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInBhcmVudCIsInJlY29yZGVyIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJwbGF5ZXIiLCJjdXJyZW50UGxheWVyIiwiY29uc3RydWN0b3IiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJsYW5ndWFnZSIsIkFwcFdyYXBwZXIiLCJyYXRlIiwiYXVkaW9TcGVlZCIsIm9uIiwibGlzdGVuQXBwQ2hhbmdlcyIsInNldCIsImxhbmd1dWFnZSIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInRyaWdnZXIiLCJfY29yZSIsIl9hdWRpbyIsIl9leHRlbnNpb25zIiwiX3Nlc3Npb24iLCJtZXNzYWdlcyIsIkVYVEVOU0lPTlMiLCJjYXRlZ29yeSIsImNoYXQiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJrYnMiLCJrbm93bGVkZ2VCb3hlcyIsInNlbGVjdGVkS2IiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsImlkIiwicGF0aCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZSIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsImF0dHJzIiwiZ2V0IiwiYXV0b3BsYXkiLCJjaGVja0F0dHJpYnV0ZXMiLCJsb2FkIiwiY2xlYW4iLCJmZXRjaGluZyIsInJlYWR5Iiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwibG9nZ2VkIiwiQ2hhdCIsImxvYWRBbGwiLCJjdXJyZW50Q2hhdCIsImZvdW5kIiwia25vd2xlZGVCb3hTZWxlY3RlZCIsImtub3dsZWRnZUJveElkIiwiZGVmYXVsdCIsImV4dHMiLCJtZXRhZGF0YSIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNlbmRNZXNzYWdlIiwiY29udGVudCIsInBlcmZvcm1hbmNlIiwibWFyayIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwid2FpdGluZ1Jlc3BvbnNlIiwicmVzcG9uc2UiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJlIiwiY29uc29sZSIsImVycm9yIiwicGxheWFibGUiLCJzdG9wIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX3VzZUV4dGVuc2lvbiIsIl9tZXNzYWdlcyIsIl9leHRlbnNpb25SZW5kZXJlciIsIkNvbnRlbnQiLCJ0ZXh0cyIsInRvdGFsTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGVuZ3RoIiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIkNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfaW5wdXQiLCJfYmFja0Fycm93IiwiX2NvbnRlbnQiLCJwcm9wcyIsImNoYXRJbnRybyIsInJlYWRlciIsImF2b2lkQ2hhdCIsIkNoYXRJbnB1dCIsImlzV2FpdGluZyIsIl9jb21wb25lbnRzIiwiX3ByZWxvYWQiLCJDaGF0U2tlbGV0b24iLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiUHJlbG9hZCIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0UmVhZHkiLCJjb250cm9sIiwib25SZWFkeSIsIkNoYXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFNjcm9sbFBvc2l0aW9uIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDb250cm9sIiwiQ2hhdE5vdEZvdW5kIiwiUHJvdmlkZXIiLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dENvbnRleHQiLCJfZm9ybSIsIl9jb25maWciLCJfcmVjb3JkaW5nIiwiX2luZGV4IiwiX3RleHRJbnB1dCIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwidGV4dCIsInNldFRleHQiLCJzZW5kQXVkaW8iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZVNlbmQiLCJvblN1Ym1pdCIsInJlcGxhY2VBbGwiLCJ0cmltIiwic3lzdGVtIiwicGFyYW1zIiwiY29uZmlnIiwiU3lzdGVtTW9kYWwiLCJGb3JtIiwiVGV4dElucHV0IiwiQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiX3RpbWVyIiwiUGxheWVyIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJfbW9kYWwiLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsImRlc2NyaXB0aW9uIiwicGVybWlzc2lvbnMiLCJBbGVydE1vZGFsIiwib3BlbiIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfY29udGV4dDIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwiaGFzUGVybWlzc2lvbiIsInNldEhhc1Blcm1pc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJyZWNvcmQiLCJnZXRVc2VyTWVkaWEiLCJoYXNQZXJtaXNzaW9ucyIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJsb2ciLCJwbGF5QWN0aW9uIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdG9hc3QiLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJUZXh0YXJlYSIsInJvd3MiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibGFiZWwiLCJ0eXBlIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJtb2RlIiwidGV4dEFyZWFSZWYiLCJzdHlsZSIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJfbWFuYWdlciIsIl9jb21wb25lbnRzMiIsIl9pY29uczIiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIiwic3JjIiwiYWx0IiwiSUNPTlMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy92aWV3cy9jaGF0L2JhY2stYXJyb3cudHN4IiwiL3RzL3ZpZXdzL2NoYXQvY29udGVudC50c3giLCIvdHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4IiwiL3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvdXNlLWV4dGVuc2lvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO2NBQzVEQyxVQUFVLENBQUNMLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUM5QixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSU0s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