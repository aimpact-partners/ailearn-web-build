System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/chat-sdk@1.0.1/startup", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.1/voice", "@aimpact/chat@1.0.2/wrapper", "@aimpact/media-manager@0.0.1-beta.1/recorder", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/chat@1.0.2/extensions", "@aimpact/chat-sdk@1.0.1/session", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/messages.code", "pragmate-ui@1.0.0-beta.1/perfect-scrollbar", "@aimpact/chat@1.0.2/shared/components", "pragmate-ui@1.0.0-beta.1/preload", "@aimpact/chat@1.0.2/shared/hooks", "pragmate-ui@1.0.0-beta.1/form", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/chat@1.0.2/config", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/toast", "@aimpact/chat@1.0.2/ui/manager", "@aimpact/chat@1.0.2/shared/icons"], function (_export, _context3) {
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
    }, function (_pragmateUi100Beta1Icons) {
      dependency_13 = _pragmateUi100Beta1Icons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat102MessagesCode) {
      dependency_15 = _aimpactChat102MessagesCode;
    }, function (_pragmateUi100Beta1PerfectScrollbar) {
      dependency_16 = _pragmateUi100Beta1PerfectScrollbar;
    }, function (_aimpactChat102SharedComponents) {
      dependency_17 = _aimpactChat102SharedComponents;
    }, function (_pragmateUi100Beta1Preload) {
      dependency_18 = _pragmateUi100Beta1Preload;
    }, function (_aimpactChat102SharedHooks) {
      dependency_19 = _aimpactChat102SharedHooks;
    }, function (_pragmateUi100Beta1Form) {
      dependency_20 = _pragmateUi100Beta1Form;
    }, function (_pragmateUi100Beta1Components) {
      dependency_21 = _pragmateUi100Beta1Components;
    }, function (_aimpactChat102Config) {
      dependency_22 = _aimpactChat102Config;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_23 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_24 = _pragmateUi100Beta1Toast;
    }, function (_aimpactChat102UiManager) {
      dependency_25 = _aimpactChat102UiManager;
    }, function (_aimpactChat102SharedIcons) {
      dependency_26 = _aimpactChat102SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/chat-api", null], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@firebase/auth", "1.7.5"], ["@firebase/component", "0.6.8"], ["@firebase/logger", "0.4.2"], ["@firebase/util", "1.9.7"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.19"], ["dayjs", "1.11.11"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.1"], ["highlight.js", "11.10.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.3"], ["marked-mangle", "1.1.8"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/ailearn-app", "0.1.6"]]);
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
        hash: 4277554695,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInVubW91bnQiLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiX3JlY29yZGVyIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInBhcmVudCIsInJlY29yZGVyIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJwbGF5ZXIiLCJjdXJyZW50UGxheWVyIiwiY29uc3RydWN0b3IiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJsYW5ndWFnZSIsIkFwcFdyYXBwZXIiLCJyYXRlIiwiYXVkaW9TcGVlZCIsIm9uIiwibGlzdGVuQXBwQ2hhbmdlcyIsInNldCIsImxhbmd1dWFnZSIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInRyaWdnZXIiLCJfY29yZSIsIl9hdWRpbyIsIl9leHRlbnNpb25zIiwiX3Nlc3Npb24iLCJtZXNzYWdlcyIsIkVYVEVOU0lPTlMiLCJjYXRlZ29yeSIsImNoYXQiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJrYnMiLCJrbm93bGVkZ2VCb3hlcyIsInNlbGVjdGVkS2IiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsImlkIiwicGF0aCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZSIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsImF0dHJzIiwiZ2V0IiwiYXV0b3BsYXkiLCJjaGVja0F0dHJpYnV0ZXMiLCJsb2FkIiwiY2xlYW4iLCJmZXRjaGluZyIsInJlYWR5Iiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwibG9nZ2VkIiwiQ2hhdCIsImxvYWRBbGwiLCJjdXJyZW50Q2hhdCIsImZvdW5kIiwia25vd2xlZGVCb3hTZWxlY3RlZCIsImtub3dsZWRnZUJveElkIiwiZGVmYXVsdCIsImV4dHMiLCJtZXRhZGF0YSIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNlbmRNZXNzYWdlIiwiY29udGVudCIsInBlcmZvcm1hbmNlIiwibWFyayIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwid2FpdGluZ1Jlc3BvbnNlIiwicmVzcG9uc2UiLCJvbkxpc3RlbiIsIm9uRW5kIiwib2ZmIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInBsYXlhYmxlIiwic3RvcCIsIl9yZWFjdCIsIl9pY29ucyIsIl9ob29rcyIsIl9jb250ZXh0IiwiQmFja0Fycm93Iiwic2VwYXJhdG9yIiwiaWNvbiIsInVzZVJlZiIsInNjcm9sbFBvc2l0aW9uIiwidXNlQ2hhdENvbnRleHQiLCJyZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0IiwiY29udGFpbmVyIiwiY3VycmVudCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiZGlzdGFuY2VGcm9tQm90dG9tIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ29Ub0JvdHRvbSIsImFkZCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xzIiwiaGFzIiwiY2xzQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb25CdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIl91c2VFeHRlbnNpb24iLCJfbWVzc2FnZXMiLCJfZXh0ZW5zaW9uUmVuZGVyZXIiLCJDb250ZW50IiwidGV4dHMiLCJ0b3RhbE1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ1c2VTdGF0ZSIsImxlbmd0aCIsIndlYkNvbXBvbmVudE5hbWUiLCJ1c2VFeHRlbnNpb24iLCJFeHRlbnNpb25SZW5kZXJlciIsImNvbXBvbmVudCIsInJlZmVyZW5jZSIsIkZyYWdtZW50IiwiTWVzc2FnZXMiLCJDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiX2lucHV0IiwiX2JhY2tBcnJvdyIsIl9jb250ZW50IiwicHJvcHMiLCJjaGF0SW50cm8iLCJyZWFkZXIiLCJhdm9pZENoYXQiLCJDaGF0SW5wdXQiLCJpc1dhaXRpbmciLCJfY29tcG9uZW50cyIsIl9wcmVsb2FkIiwiQ2hhdFNrZWxldG9uIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIlByZWxvYWQiLCJ3aWR0aCIsImhlaWdodCIsInNldFJlYWR5IiwiY29udHJvbCIsIm9uUmVhZHkiLCJldmVudCIsIkNoYXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFNjcm9sbFBvc2l0aW9uIiwiY29udGV4dFZhbHVlIiwidHJhY2UiLCJDb250cm9sIiwiQ2hhdE5vdEZvdW5kIiwiUHJvdmlkZXIiLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dENvbnRleHQiLCJfZm9ybSIsIl9jb25maWciLCJfcmVjb3JkaW5nIiwiX2luZGV4IiwiX3RleHRJbnB1dCIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwidGV4dCIsInNldFRleHQiLCJzZW5kQXVkaW8iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZVNlbmQiLCJvblN1Ym1pdCIsInJlcGxhY2VBbGwiLCJ0cmltIiwic3lzdGVtIiwicGFyYW1zIiwiY29uZmlnIiwiU3lzdGVtTW9kYWwiLCJGb3JtIiwiVGV4dElucHV0IiwiQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiX3RpbWVyIiwiUGxheWVyIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJfbW9kYWwiLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsImRlc2NyaXB0aW9uIiwicGVybWlzc2lvbnMiLCJBbGVydE1vZGFsIiwib3BlbiIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfY29udGV4dDIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwiaGFzUGVybWlzc2lvbiIsInNldEhhc1Blcm1pc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJyZWNvcmQiLCJnZXRVc2VyTWVkaWEiLCJoYXNQZXJtaXNzaW9ucyIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJsb2ciLCJwbGF5QWN0aW9uIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdG9hc3QiLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJUZXh0YXJlYSIsInJvd3MiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibGFiZWwiLCJ0eXBlIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJtb2RlIiwidGV4dEFyZWFSZWYiLCJzdHlsZSIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJfbWFuYWdlciIsIl9jb21wb25lbnRzMiIsIl9pY29uczIiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIiwic3JjIiwiYWx0IiwiSUNPTlMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy92aWV3cy9jaGF0L2JhY2stYXJyb3cudHN4IiwiL3RzL3ZpZXdzL2NoYXQvY29udGVudC50c3giLCIvdHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4IiwiL3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvdXNlLWV4dGVuc2lvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBR0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUM7Y0FDL0NDLFVBQVUsQ0FBQ0osS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJSyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1QsTUFBQSxDQUFBVSxJQUFJO1lBQ1o7WUFFQUMsT0FBT0EsQ0FB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QUFBak4sTUFBQSxHQUFBcEgsT0FBQTtVQUNBLElBQUFtVixRQUFBLEdBQUFuVixPQUFBO1VBQ0EsSUFBQXdMLFdBQUEsR0FBQXhMLE9BQUE7VUFDQSxJQUFBcUgsTUFBQSxHQUFBckgsT0FBQTtVQUNBLElBQUFtQixRQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9WLFlBQUEsR0FBQXBWLE9BQUE7VUFDQSxJQUFBcVYsT0FBQSxHQUFBclYsT0FBQTtVQUVNLFNBQVVxTixZQUFZQSxDQUFBO1lBQzNCLFNBQVNpSSxVQUFVQSxDQUFBO2NBQ2xCSCxRQUFBLENBQUFJLFNBQVMsQ0FBQ0MsV0FBVyxHQUFHLElBQUk7WUFDN0I7WUFFQSxJQUFJLENBQUNyVSxRQUFBLENBQUFpQixVQUFVLENBQUNnRCxLQUFLLEVBQUUsT0FBT2dDLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsQ0FBQzZMLFlBQUEsQ0FBQUssYUFBYSxPQUFHO1lBQy9DLE9BQ0NyTyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrQixHQUNoQ3BDLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUE7Y0FBS21NLEdBQUcsRUFBQyx1QkFBdUI7Y0FBQ0MsR0FBRyxFQUFDO1lBQWdCLEVBQUcsRUFDeER2TyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFxQixHQUNwQ3BDLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsQ0FBQ2xDLE1BQUEsQ0FBQTRJLElBQUk7Y0FBQ3ZJLElBQUksRUFBRTJOLE9BQUEsQ0FBQU8sS0FBSyxDQUFDLGVBQWUsQ0FBQztjQUFFcE0sU0FBUyxFQUFDO1lBQW1CLEVBQUcsRUFDcEVwQyxNQUFBLENBQUF0QixPQUFBLENBQUF5RCxhQUFBLDhCQUF1QixFQUN2Qm5DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsWUFDQ25DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsb0VBQWlFLEUsS0FBQ25DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXlELGFBQUEsWUFBTSxFLG1EQUVyRSxFQUNKbkMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBeUQsYUFBQSxDQUFDaUMsV0FBQSxDQUFBeUQsTUFBTTtjQUFDdkgsSUFBSSxFQUFDLE1BQU07Y0FBQ2lDLE9BQU8sRUFBRTJMLFVBQVU7Y0FBRTFDLEtBQUssRUFBQztZQUFnQixFQUFHLENBQzVELENBQ0Y7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==