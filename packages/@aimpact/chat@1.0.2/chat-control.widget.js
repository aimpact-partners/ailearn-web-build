System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.0.1/startup", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.1/voice", "@aimpact/chat@1.0.2/wrapper", "@aimpact/media-manager@0.0.1-beta.1/recorder", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/chat@1.0.2/extensions", "@aimpact/chat-sdk@1.0.1/session", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/messages.code", "pragmate-ui@1.0.0-beta.2/perfect-scrollbar", "@aimpact/chat@1.0.2/shared/components", "pragmate-ui@1.0.0-beta.2/preload", "@aimpact/chat@1.0.2/shared/hooks", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/chat@1.0.2/config", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/toast", "@aimpact/chat@1.0.2/ui/manager", "@aimpact/chat@1.0.2/shared/icons"], function (_export, _context3) {
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
    }, function (_aimpactChatSdk101Startup) {
      dependency_4 = _aimpactChatSdk101Startup;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk101Voice) {
      dependency_6 = _aimpactChatSdk101Voice;
    }, function (_aimpactChat102Wrapper) {
      dependency_7 = _aimpactChat102Wrapper;
    }, function (_aimpactMediaManager001Beta1Recorder) {
      dependency_8 = _aimpactMediaManager001Beta1Recorder;
    }, function (_aimpactChatSdk101Core) {
      dependency_9 = _aimpactChatSdk101Core;
    }, function (_aimpactChat102Extensions) {
      dependency_10 = _aimpactChat102Extensions;
    }, function (_aimpactChatSdk101Session) {
      dependency_11 = _aimpactChatSdk101Session;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_13 = _pragmateUi100Beta2Icons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat102MessagesCode) {
      dependency_15 = _aimpactChat102MessagesCode;
    }, function (_pragmateUi100Beta2PerfectScrollbar) {
      dependency_16 = _pragmateUi100Beta2PerfectScrollbar;
    }, function (_aimpactChat102SharedComponents) {
      dependency_17 = _aimpactChat102SharedComponents;
    }, function (_pragmateUi100Beta2Preload) {
      dependency_18 = _pragmateUi100Beta2Preload;
    }, function (_aimpactChat102SharedHooks) {
      dependency_19 = _aimpactChat102SharedHooks;
    }, function (_pragmateUi100Beta2Form) {
      dependency_20 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Components) {
      dependency_21 = _pragmateUi100Beta2Components;
    }, function (_aimpactChat102Config) {
      dependency_22 = _aimpactChat102Config;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_23 = _pragmateUi100Beta2Modal;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_24 = _pragmateUi100Beta2Toast;
    }, function (_aimpactChat102UiManager) {
      dependency_25 = _aimpactChat102UiManager;
    }, function (_aimpactChat102SharedIcons) {
      dependency_26 = _aimpactChat102SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/chat-api", null], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["pragmate-ui", "1.0.0-beta.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@firebase/auth", "1.7.5"], ["@firebase/component", "0.6.8"], ["@firebase/logger", "0.4.2"], ["@firebase/util", "1.9.7"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.19"], ["dayjs", "1.11.11"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.1"], ["highlight.js", "11.10.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.3"], ["marked-mangle", "1.1.8"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/ailearn-app", "0.1.6-dev.01"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/chat-sdk/startup', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/voice', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['@aimpact/media-manager/recorder', dependency_8], ['@aimpact/chat-sdk/core', dependency_9], ['@aimpact/chat/extensions', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['react', dependency_12], ['pragmate-ui/icons', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/messages.code', dependency_15], ['pragmate-ui/perfect-scrollbar', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['pragmate-ui/preload', dependency_18], ['@aimpact/chat/shared/hooks', dependency_19], ['pragmate-ui/form', dependency_20], ['pragmate-ui/components', dependency_21], ['@aimpact/chat/config', dependency_22], ['pragmate-ui/modal', dependency_23], ['pragmate-ui/toast', dependency_24], ['@aimpact/chat/ui/manager', dependency_25], ['@aimpact/chat/shared/icons', dependency_26]]);
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
        hash: 708441487,
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
        hash: 3587457223,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJ3aWRnZXQiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInVubW91bnQiLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiX3JlY29yZGVyIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInBhcmVudCIsInJlY29yZGVyIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJwbGF5ZXIiLCJjdXJyZW50UGxheWVyIiwiY29uc3RydWN0b3IiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJsYW5ndWFnZSIsIkFwcFdyYXBwZXIiLCJyYXRlIiwiYXVkaW9TcGVlZCIsIm9uIiwibGlzdGVuQXBwQ2hhbmdlcyIsInNldCIsImxhbmd1dWFnZSIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInRyaWdnZXIiLCJfY29yZSIsIl9hdWRpbyIsIl9leHRlbnNpb25zIiwiX3Nlc3Npb24iLCJtZXNzYWdlcyIsIkVYVEVOU0lPTlMiLCJjYXRlZ29yeSIsImNoYXQiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJrYnMiLCJrbm93bGVkZ2VCb3hlcyIsInNlbGVjdGVkS2IiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsImlkIiwicGF0aCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZSIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsImF0dHJzIiwiZ2V0IiwiYXV0b3BsYXkiLCJjaGVja0F0dHJpYnV0ZXMiLCJsb2FkIiwiY2xlYW4iLCJmZXRjaGluZyIsInJlYWR5Iiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwibG9nZ2VkIiwiQ2hhdCIsImxvYWRBbGwiLCJjdXJyZW50Q2hhdCIsImZvdW5kIiwia25vd2xlZGVCb3hTZWxlY3RlZCIsImtub3dsZWRnZUJveElkIiwiZGVmYXVsdCIsImV4dHMiLCJtZXRhZGF0YSIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNlbmRNZXNzYWdlIiwiY29udGVudCIsInBlcmZvcm1hbmNlIiwibWFyayIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwid2FpdGluZ1Jlc3BvbnNlIiwicmVzcG9uc2UiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJlIiwiY29uc29sZSIsImVycm9yIiwicGxheWFibGUiLCJzdG9wIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX3VzZUV4dGVuc2lvbiIsIl9tZXNzYWdlcyIsIl9leHRlbnNpb25SZW5kZXJlciIsIkNvbnRlbnQiLCJ0ZXh0cyIsInRvdGFsTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGVuZ3RoIiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiRnJhZ21lbnQiLCJNZXNzYWdlcyIsIkNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfaW5wdXQiLCJfYmFja0Fycm93IiwiX2NvbnRlbnQiLCJwcm9wcyIsImNoYXRJbnRybyIsInJlYWRlciIsImF2b2lkQ2hhdCIsIkNoYXRJbnB1dCIsImlzV2FpdGluZyIsIl9jb21wb25lbnRzIiwiX3ByZWxvYWQiLCJDaGF0U2tlbGV0b24iLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiUHJlbG9hZCIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0UmVhZHkiLCJjb250cm9sIiwib25SZWFkeSIsIkNoYXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFNjcm9sbFBvc2l0aW9uIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDb250cm9sIiwiQ2hhdE5vdEZvdW5kIiwiUHJvdmlkZXIiLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dENvbnRleHQiLCJfZm9ybSIsIl9jb25maWciLCJfcmVjb3JkaW5nIiwiX2luZGV4IiwiX3RleHRJbnB1dCIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwidGV4dCIsInNldFRleHQiLCJzZW5kQXVkaW8iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZVNlbmQiLCJvblN1Ym1pdCIsInJlcGxhY2VBbGwiLCJ0cmltIiwic3lzdGVtIiwicGFyYW1zIiwiY29uZmlnIiwiU3lzdGVtTW9kYWwiLCJGb3JtIiwiVGV4dElucHV0IiwiQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiX3RpbWVyIiwiUGxheWVyIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJfbW9kYWwiLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsImRlc2NyaXB0aW9uIiwicGVybWlzc2lvbnMiLCJBbGVydE1vZGFsIiwib3BlbiIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfY29udGV4dDIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwiaGFzUGVybWlzc2lvbiIsInNldEhhc1Blcm1pc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJyZWNvcmQiLCJnZXRVc2VyTWVkaWEiLCJoYXNQZXJtaXNzaW9ucyIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJsb2ciLCJwbGF5QWN0aW9uIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdG9hc3QiLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJUZXh0YXJlYSIsInJvd3MiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibGFiZWwiLCJ0eXBlIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJtb2RlIiwidGV4dEFyZWFSZWYiLCJzdHlsZSIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJfbWFuYWdlciIsIl9jb21wb25lbnRzMiIsIl9pY29uczIiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIiwic3JjIiwiYWx0IiwiSUNPTlMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy92aWV3cy9jaGF0L2JhY2stYXJyb3cudHN4IiwiL3RzL3ZpZXdzL2NoYXQvY29udGVudC50c3giLCIvdHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4IiwiL3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvdXNlLWV4dGVuc2lvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBR0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7Y0FDNURDLFVBQVUsQ0FBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJ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