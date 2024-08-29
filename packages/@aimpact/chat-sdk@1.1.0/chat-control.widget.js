System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.1.0/voice", "@aimpact/chat-sdk@1.1.0/wrapper", "media-suite@0.0.4/recorder", "@aimpact/chat-sdk@1.1.0/core", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.1.0/messages", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/modal", "@aimpact/chat-sdk@1.1.0/components/icons"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Chat, AgentsChatContainer, ChatContext, useChatContext, ChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, AgentsChatPanel, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioManager: void 0,
    Chat: void 0,
    AgentsChatContainer: void 0,
    ChatContext: void 0,
    useChatContext: void 0,
    ChatInput: void 0,
    PermissionsErrorModal: void 0,
    RecordingButton: void 0,
    PermissionsModal: void 0,
    AgentsChatPanel: void 0
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
    }, function (_aimpactChatSdk110Voice) {
      dependency_5 = _aimpactChatSdk110Voice;
    }, function (_aimpactChatSdk110Wrapper) {
      dependency_6 = _aimpactChatSdk110Wrapper;
    }, function (_mediaSuite004Recorder) {
      dependency_7 = _mediaSuite004Recorder;
    }, function (_aimpactChatSdk110Core) {
      dependency_8 = _aimpactChatSdk110Core;
    }, function (_aimpactChatSdk110Session) {
      dependency_9 = _aimpactChatSdk110Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_10 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_12 = _pragmateUi100Beta2Icons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk110Messages) {
      dependency_14 = _aimpactChatSdk110Messages;
    }, function (_pragmateUi100Beta2Components) {
      dependency_15 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Form) {
      dependency_16 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_17 = _pragmateUi100Beta2Modal;
    }, function (_aimpactChatSdk110ComponentsIcons) {
      dependency_18 = _aimpactChatSdk110ComponentsIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.0"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-katex", "3.0.1"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.4"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.1.0/chat-control",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/voice', dependency_5], ['@aimpact/chat-sdk/wrapper', dependency_6], ['media-suite/recorder', dependency_7], ['@aimpact/chat-sdk/core', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['react', dependency_11], ['pragmate-ui/icons', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/chat-sdk/messages', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/modal', dependency_17], ['@aimpact/chat-sdk/components/icons', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-chat-control",
        "attrs": ["id", "container", "disabled", "playable", "icon"],
        "vspecifier": "@aimpact/chat-sdk@1.1.0/chat-control.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.1.0/chat-control.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2095395250,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _widget = require("./views/widget");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager(this.attributes?.get('id'));
              return this.#store;
            }
            get Widget() {
              return _widget.View;
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
        hash: 2668975825,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _recorder = require("media-suite/recorder");
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
              this.#currentPlayer = new this.#players.web({
                language: _wrapper.AppWrapper.language,
                rate: _wrapper.AppWrapper.audioSpeed
              });
              _wrapper.AppWrapper.on('app.settings.change', this.listenAppChanges);
            }
            listenAppChanges = () => {
              const {
                rate,
                language
              } = _wrapper.AppWrapper;
              this.#currentPlayer.set({
                rate,
                language
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
        hash: 4082680388,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/chat-sdk/core");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _audio = require("./audio");
          var _session = require("@aimpact/chat-sdk/session");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            #EXTENSIONS = ['chat-intro'];
            #messages;
            get messages() {
              return this.#messages?.items;
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
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get textsModel() {
              return this.#texts;
            }
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor(id) {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#id = id;
              this.reactiveProps(['waitingResponse', 'autoplay']);
              this.autoplay = true;
              // attrs.on('change', () => this.checkAttributes(attrs));
              this.load(this.#id);
            }
            load = async id => {
              console.log(1, 'cargamos');
              if (!id) {
                super.ready = true;
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
              this.#chat = chat;
              this.#messages = chat.messages;
              await chat.loadAll({
                id
              });
              globalThis.chat = chat;
              _wrapper.AppWrapper.currentChat = chat;
              if (!chat.found) {
                this.fetching = false;
                super.ready = true;
                this.notFound = true;
                return;
              }
              const language = chat.language?.default ?? _wrapper.AppWrapper.language;
              this.audioManager.player.set({
                language
              });
              /* usar propiedad role para identificar owner del mensaje*/
              // chat.on('change', () => this.triggerEvent('new.message'));
              this.fetching = false;
              super.ready = true;
              this.notFound = false;
              this.trigger('change');
            };
            async sendMessage(content) {
              try {
                performance.mark('start');
                this.#currentMessage = undefined;
                if (typeof content === 'string' && [undefined, '', null].includes(content)) return;
                this.fetching = true;
                return this.#chat.sendMessage(content);
              } catch (e) {
                console.error(e);
              }
            }
            // checkAttributes(attributes) {
            // 	this.disabled = attributes.get('disabled') === 'true';
            // 	this.playable = attributes.get('disabled') === 'true' || attributes.get('playable') === undefined;
            // 	if (!this.playable) {
            // 		this.#audio.player?.stop();
            // 	}
            // }
            unmount() {
              this.#audio.player?.stop();
            }
            clean() {
              this.fetching = false;
              super.ready = false;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/types
      *****************************/

      ims.set('./store/types', {
        hash: 1416087461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
        hash: 2798463590,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Content = Content;
          var _react = require("react");
          var _useExtension = require("./use-extension");
          var _messages = require("@aimpact/chat-sdk/messages");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _extensionRenderer = require("./extension-renderer");
          function Content({
            separator
          }) {
            const {
              store,
              texts,
              systemIcon
            } = (0, _context.useChatContext)();
            const {
              messages
            } = store;
            const [totalMessages, setMessages] = _react.default.useState(messages?.length ?? [].length);
            const [ref, ready, webComponentName] = (0, _useExtension.useExtension)('chat-intro');
            (0, _hooks.useBinder)([store.chat], () => {
              console.log('me entero del nuevo mensaje', store.messages[store.messages.length - 1].getProperties());
              setMessages(store.messages.length);
            }, 'new.message');
            let cls = `chat__content`;
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
              systemIcon: systemIcon,
              messages: store?.messages ?? [],
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

      /************************************
      INTERNAL MODULE: ./views/chat/globals
      ************************************/

      ims.set('./views/chat/globals', {
        hash: 634193436,
        creator: function (require, exports) {
          "use strict";
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/chat/index
      **********************************/

      ims.set('./views/chat/index', {
        hash: 3522809035,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _context = require("../context");
          var _content = require("./content");
          /*bundle*/
          function Chat() {
            const {
              store
            } = (0, _context.useChatContext)();
            const [reader] = _react.default.useState(false);
            const separator = _react.default.useRef(null);
            let cls = `chat-control__container${reader ? ' reader__container' : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_content.Content, {
              separator: separator
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/chat/skeleton
      *************************************/

      ims.set('./views/chat/skeleton', {
        hash: 286511885,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatSkeleton = ChatSkeleton;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          function ChatSkeleton() {
            const {
              store
            } = (0, _context.useChatContext)();
            return _react.default.createElement("div", {
              className: "chat-container"
            }, _react.default.createElement(_components.Spinner, {
              active: true
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

      /*********************************
      INTERNAL MODULE: ./views/container
      *********************************/

      ims.set('./views/container', {
        hash: 3594033902,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentsChatContainer = AgentsChatContainer;
          var _react = require("react");
          var _useManager = require("./use-manager");
          var _context = require("./context");
          /*bundle */
          function AgentsChatContainer({
            children,
            icon,
            autoplay,
            player,
            ...props
          }) {
            const [scrollPosition, setScrollPosition] = _react.default.useState('top');
            const {
              ready,
              store
            } = (0, _useManager.useManager)(props.id);
            const obj = store ? store : {};
            const {
              messages,
              texts
            } = obj;
            const contextValue = {
              setScrollPosition: value => {
                if (!value) console.trace('setScrollPosition called with no value');
                setScrollPosition(value);
              },
              scrollPosition,
              store,
              ready: store.ready,
              texts: store.texts,
              autoplay,
              systemIcon: icon,
              messages,
              player,
              attributes: props.attributes
            };
            return _react.default.createElement(_context.ChatContext.Provider, {
              value: contextValue
            }, children);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2290463307,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatContext = exports.ChatContext = void 0;
          var _react = require("react");
          /*bundle */
          const ChatContext = exports.ChatContext = _react.default.createContext({});
          /*bundle */
          const useChatContext = () => _react.default.useContext(ChatContext);
          exports.useChatContext = useChatContext;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/input/action-button
      *******************************************/

      ims.set('./views/input/action-button', {
        hash: 1153710111,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputActionButton = InputActionButton;
          var _react = require("react");
          var _recording = require("./recording");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function InputActionButton({
            text,
            onSend,
            buttonIsDisabled
          }) {
            const {
              store
            } = (0, _context.useInputContext)();
            return _react.default.createElement("span", {
              className: "input__icon  input__icon--right"
            }, !!text.length ? _react.default.createElement(_components.Button, {
              icon: "send-arrow",
              onClick: onSend,
              disabled: buttonIsDisabled
            }) : _react.default.createElement(_recording.RecordingButton, {
              store: store,
              disabled: buttonIsDisabled
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/input/context
      *************************************/

      ims.set('./views/input/context', {
        hash: 765883465,
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
        hash: 3599694351,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatInput = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _textInput = require("./text-input");
          var _actionButton = require("./action-button");
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
              try {
                setText('');
                setFetching(true);
                await store.sendMessage(text);
                setFetching(false);
              } catch (e) {
                console.error('error', e);
              }
            };
            const onSubmit = !!text.length ? handleSend : sendAudio;
            if (['', undefined, null].includes(text.replaceAll('\n', '')) || !text.trim().length) disabled.disabled = true;
            const isFetching = fetching || recording || waiting || isWaiting;
            let cls = `chat-input-container ${isFetching ? 'is-fetching' : ''}`;
            if (store.disabled) cls += 'is-disabled';
            // Defines the "system" that the chat will use
            const contextValue = {
              store,
              onSubmit,
              recorder,
              fetching,
              setRecording,
              recording,
              disabled: store.disabled
            };
            const buttonIsDisabled = disabled.disabled || store.waitingResponse || recording;
            return _react.default.createElement(_context.InputContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: "chat-input-form"
            }, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_textInput.TextInput, {
              text: text,
              disabled: store.disabled,
              setFetching: setFetching,
              fetching: isFetching,
              setText: setText,
              handleSend: handleSend
            }), _react.default.createElement(_actionButton.InputActionButton, {
              text: text,
              onSend: handleSend,
              buttonIsDisabled: buttonIsDisabled
            }))));
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
        hash: 4268953105,
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
            const isDisabled = disabled || fetching;
            return _react.default.createElement(_react.default.Fragment, null, "11", _react.default.createElement(_components.Button, {
              icon: "mic",
              fetching: fetching,
              onClick: playAction,
              disabled: isDisabled
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

      /****************************************
      INTERNAL MODULE: ./views/input/text-input
      ****************************************/

      ims.set('./views/input/text-input', {
        hash: 72459104,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextInput = TextInput;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _icons = require("@aimpact/chat-sdk/components/icons");
          function TextInput({
            setFetching,
            setText,
            handleSend,
            fetching,
            text,
            disabled
          }) {
            const {
              store
            } = (0, _context.useInputContext)();
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
            return _react.default.createElement("div", {
              className: "input__wrapper"
            }, _react.default.createElement("div", null, _react.default.createElement(_icons.AppIconButton, {
              className: "chat-input__icon",
              icon: "attachFile"
            })), _react.default.createElement("textarea", {
              ...disabledTextarea,
              rows: 1,
              value: text,
              onChange: handleInputChange,
              onKeyDown: handleKeyDown,
              autoFocus: true,
              className: "input__textarea",
              ref: textAreaRef
            }));
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
        hash: 4269748456,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatNotFound = ChatNotFound;
          var _react = require("react");
          function ChatNotFound() {
            return _react.default.createElement("div", null, "404");
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/panel
      *****************************/

      ims.set('./views/panel', {
        hash: 2366537853,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentsChatPanel = AgentsChatPanel;
          var _react = require("react");
          var _chat = require("./chat");
          var _context = require("./context");
          var _skeleton = require("./chat/skeleton");
          var _notFound = require("./not-found");
          /*bundle*/ /**
                      * Main component of the chat web component
                      * @param param0 =
                      * @returns
                      */
          function AgentsChatPanel() {
            const {
              ready,
              store
            } = (0, _context.useChatContext)();
            if (store.notFound && ready) return _react.default.createElement(_notFound.ChatNotFound, null);
            if (!ready) return _react.default.createElement(_skeleton.ChatSkeleton, null);
            return _react.default.createElement(_chat.Chat, null);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/use-manager
      ***********************************/

      ims.set('./views/use-manager', {
        hash: 3726613334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useManager = useManager;
          var _react = require("react");
          var _store = require("../store");
          function useManager(id) {
            const [ready, setReady] = _react.default.useState(false);
            const [store, setStore] = _react.default.useState({});
            const [state, setState] = _react.default.useState({});
            const callback = () => {
              const manager = new _store.StoreManager(id);
              const onChange = () => {
                setState({
                  ...manager.getProperties()
                });
                setReady(manager.ready);
              };
              const cleanUp = () => {
                manager.off('change', onChange);
              };
              manager.on('change', onChange);
              setStore(manager);
              setReady(manager.ready);
              return cleanUp;
            };
            _react.default.useEffect(callback, [id]);
            return {
              ready,
              store
            };
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/widget/index
      ************************************/

      ims.set('./views/widget/index', {
        hash: 2799002234,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _chat = require("../chat");
          var _context = require("../context");
          var _skeleton = require("../chat/skeleton");
          var _notFound = require("../not-found");
          /**
           * Main component of the chat web component
           * @param param0 =
           * @returns
           */
          function View({
            store,
            ...props
          }) {
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
            const icon = props.attributes.get('icon');
            const [scrollPosition, setScrollPosition] = _react.default.useState('top');
            const {
              autoplay,
              messages,
              texts,
              audioManager: {
                player
              }
            } = store;
            globalThis.store = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
            const contextValue = {
              setScrollPosition: value => {
                if (!value) console.trace('setScrollPosition called with no value');
                setScrollPosition(value);
              },
              scrollPosition,
              store,
              texts: store.texts,
              autoplay,
              systemIcon: icon,
              messages,
              player,
              ready: store.ready,
              attributes: props.attributes
            };
            const Control = !store.notFound ? _chat.Chat : _notFound.ChatNotFound;
            const View = ready ? Control : _skeleton.ChatSkeleton;
            return _react.default.createElement(_context.ChatContext.Provider, {
              value: contextValue
            }, _react.default.createElement(View, null));
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
        "im": "./views/container",
        "from": "AgentsChatContainer",
        "name": "AgentsChatContainer"
      }, {
        "im": "./views/context",
        "from": "ChatContext",
        "name": "ChatContext"
      }, {
        "im": "./views/context",
        "from": "useChatContext",
        "name": "useChatContext"
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
        "im": "./views/panel",
        "from": "AgentsChatPanel",
        "name": "AgentsChatPanel"
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
        (require || prop === 'AgentsChatContainer') && _export("AgentsChatContainer", AgentsChatContainer = require ? require('./views/container').AgentsChatContainer : value);
        (require || prop === 'ChatContext') && _export("ChatContext", ChatContext = require ? require('./views/context').ChatContext : value);
        (require || prop === 'useChatContext') && _export("useChatContext", useChatContext = require ? require('./views/context').useChatContext : value);
        (require || prop === 'ChatInput') && _export("ChatInput", ChatInput = require ? require('./views/input/index').ChatInput : value);
        (require || prop === 'PermissionsErrorModal') && _export("PermissionsErrorModal", PermissionsErrorModal = require ? require('./views/input/recording/error-modal').PermissionsErrorModal : value);
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/input/recording/index').RecordingButton : value);
        (require || prop === 'PermissionsModal') && _export("PermissionsModal", PermissionsModal = require ? require('./views/input/recording/modal').PermissionsModal : value);
        (require || prop === 'AgentsChatPanel') && _export("AgentsChatPanel", AgentsChatPanel = require ? require('./views/panel').AgentsChatPanel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfd2lkZ2V0IiwiX3N0b3JlIiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJhdHRyaWJ1dGVzIiwiZ2V0IiwiV2lkZ2V0IiwiVmlldyIsInVubW91bnQiLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiX3JlY29yZGVyIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInBhcmVudCIsInJlY29yZGVyIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJwbGF5ZXIiLCJjdXJyZW50UGxheWVyIiwiY29uc3RydWN0b3IiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJsYW5ndWFnZSIsIkFwcFdyYXBwZXIiLCJyYXRlIiwiYXVkaW9TcGVlZCIsIm9uIiwibGlzdGVuQXBwQ2hhbmdlcyIsInNldCIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInRyaWdnZXIiLCJfY29yZSIsIl9hdWRpbyIsIl9zZXNzaW9uIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiRVhURU5TSU9OUyIsIm1lc3NhZ2VzIiwiaXRlbXMiLCJjYXRlZ29yeSIsImNoYXQiLCJjaGF0cyIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwic2VsZWN0ZWRNb2RlbCIsIm1vZGVsIiwibm90Rm91bmQiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJpZCIsImRpc2FibGVkIiwidHJpZ2dlckV2ZW50IiwiZXh0ZW5zaW9ucyIsIk1hcCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidGV4dHNNb2RlbCIsInJlYWR5IiwiYXV0b3BsYXkiLCJsb2FkIiwiY29uc29sZSIsImxvZyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImxvZ2dlZCIsImZldGNoaW5nIiwiQ2hhdCIsImxvYWRBbGwiLCJnbG9iYWxUaGlzIiwiY3VycmVudENoYXQiLCJmb3VuZCIsImRlZmF1bHQiLCJzZW5kTWVzc2FnZSIsImNvbnRlbnQiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImUiLCJlcnJvciIsInN0b3AiLCJjbGVhbiIsIl9yZWFjdCIsIl9pY29ucyIsIl9ob29rcyIsIl9jb250ZXh0IiwiQmFja0Fycm93Iiwic2VwYXJhdG9yIiwiaWNvbiIsInVzZVJlZiIsInNjcm9sbFBvc2l0aW9uIiwidXNlQ2hhdENvbnRleHQiLCJyZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0IiwiY29udGFpbmVyIiwiY3VycmVudCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiZGlzdGFuY2VGcm9tQm90dG9tIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ29Ub0JvdHRvbSIsImFkZCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xzIiwiaGFzIiwiY2xzQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb25CdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIl91c2VFeHRlbnNpb24iLCJfbWVzc2FnZXMiLCJfZXh0ZW5zaW9uUmVuZGVyZXIiLCJDb250ZW50Iiwic3lzdGVtSWNvbiIsInRvdGFsTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGVuZ3RoIiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsImdldFByb3BlcnRpZXMiLCJFeHRlbnNpb25SZW5kZXJlciIsImNvbXBvbmVudCIsInJlZmVyZW5jZSIsIkZyYWdtZW50IiwiTWVzc2FnZXMiLCJDb21wb25lbnQiLCJtZXRhZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJfY29udGVudCIsInJlYWRlciIsIl9jb21wb25lbnRzIiwiQ2hhdFNrZWxldG9uIiwiU3Bpbm5lciIsImFjdGl2ZSIsInNldFJlYWR5IiwiY29udHJvbCIsIm9uUmVhZHkiLCJldmVudCIsIl91c2VNYW5hZ2VyIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsImNoaWxkcmVuIiwicHJvcHMiLCJzZXRTY3JvbGxQb3NpdGlvbiIsInVzZU1hbmFnZXIiLCJvYmoiLCJjb250ZXh0VmFsdWUiLCJ0cmFjZSIsIkNoYXRDb250ZXh0IiwiUHJvdmlkZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9yZWNvcmRpbmciLCJJbnB1dEFjdGlvbkJ1dHRvbiIsInRleHQiLCJvblNlbmQiLCJidXR0b25Jc0Rpc2FibGVkIiwidXNlSW5wdXRDb250ZXh0IiwiQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiSW5wdXRDb250ZXh0IiwiX2Zvcm0iLCJfdGV4dElucHV0IiwiX2FjdGlvbkJ1dHRvbiIsIkNoYXRJbnB1dCIsImlzV2FpdGluZyIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsInNldEZldGNoaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJzZXRUZXh0Iiwid2FpdGluZ1Jlc3BvbnNlIiwic2VuZEF1ZGlvIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVTZW5kIiwib25TdWJtaXQiLCJyZXBsYWNlQWxsIiwidHJpbSIsImlzRmV0Y2hpbmciLCJGb3JtIiwiVGV4dElucHV0IiwiX3RpbWVyIiwiUGxheWVyIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJfbW9kYWwiLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwZXJtaXNzaW9ucyIsIkFsZXJ0TW9kYWwiLCJvcGVuIiwiY2VudGVyZWQiLCJJY29uIiwiX3BsYXllciIsIl9jb250ZXh0MiIsIl9lcnJvck1vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2V0RXJyb3IiLCJoYXNQZXJtaXNzaW9uIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInJlY29yZCIsImdldFVzZXJNZWRpYSIsImhhc1Blcm1pc3Npb25zIiwidGhlbiIsInNldEl0ZW0iLCJjYXRjaCIsInBsYXlBY3Rpb24iLCJpc0Rpc2FibGVkIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJ0ZXh0QXJlYVJlZiIsInRhcmdldCIsInN0eWxlIiwiaGVpZ2h0IiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsIkFwcEljb25CdXR0b24iLCJyb3dzIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJDaGF0Tm90Rm91bmQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIkFnZW50c0NoYXRQYW5lbCIsInNldFN0b3JlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNhbGxiYWNrIiwibWFuYWdlciIsImNsZWFuVXAiLCJvZmYiLCJDb250cm9sIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvbWVzc2FnZXMudHMiLCIvdHMvc3RvcmUvYXVkaW8udHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvY2hhdC9iYWNrLWFycm93LnRzeCIsIi90cy92aWV3cy9jaGF0L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NoYXQvZXh0ZW5zaW9uLXJlbmRlcmVyLnRzeCIsIi9nbG9iYWxzLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvYWN0aW9uLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCIsIi90cy92aWV3cy9wYW5lbC50c3giLCIvdHMvdmlld3MvdXNlLW1hbmFnZXIudHN4IiwiL3RzL3ZpZXdzL3dpZGdldC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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