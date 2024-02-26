System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/messages.code", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/toast", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Chat, ChatInput, RecordingButton, SystemModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioManager: void 0,
    Chat: void 0,
    ChatInput: void 0,
    RecordingButton: void 0,
    SystemModal: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_3 = _beyondJsReact18Widgets104Base;
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
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
    }, function (_pragmateUi006Icons) {
      dependency_11 = _pragmateUi006Icons;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_12 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101MessagesCode) {
      dependency_13 = _aimpactChat101MessagesCode;
    }, function (_aimpactChat101SharedComponents) {
      dependency_14 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi006Preload) {
      dependency_15 = _pragmateUi006Preload;
    }, function (_aimpactChat101SharedHooks) {
      dependency_16 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Form) {
      dependency_17 = _pragmateUi006Form;
    }, function (_pragmateUi006Components) {
      dependency_18 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_19 = _aimpactAilearnApp0024Config;
    }, function (_pragmateUi006Modal) {
      dependency_20 = _pragmateUi006Modal;
    }, function (_pragmateUi006Toast) {
      dependency_21 = _pragmateUi006Toast;
    }, function (_aimpactChat101UiManager) {
      dependency_22 = _aimpactChat101UiManager;
    }, function (_aimpactChat101SharedIcons) {
      dependency_23 = _aimpactChat101SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/voice', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/core', dependency_8], ['@aimpact/chat/extensions', dependency_9], ['react', dependency_10], ['pragmate-ui/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/messages.code', dependency_13], ['@aimpact/chat/shared/components', dependency_14], ['pragmate-ui/preload', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['pragmate-ui/form', dependency_17], ['pragmate-ui/components', dependency_18], ['@aimpact/chat/config', dependency_19], ['pragmate-ui/modal', dependency_20], ['pragmate-ui/toast', dependency_21], ['@aimpact/chat/ui/manager', dependency_22], ['@aimpact/chat/shared/icons', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-chat-control",
        "attrs": ["id"],
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
        hash: 2738149658,
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

      /**************************************
      INTERNAL MODULE: ./views/chat/BackArrow
      **************************************/

      ims.set('./views/chat/BackArrow', {
        hash: 645243016,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BackArrow = BackArrow;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function BackArrow({
            store,
            separator
          }) {
            const icon = _react.default.useRef(null);
            (0, _hooks.useBinder)([store], () => globalThis.setTimeout(() => scrollToBottom(), 100), 'new.message');
            const scrollToBottom = () => {
              separator.current?.scrollIntoView({
                block: 'end',
                behavior: 'smooth'
              });
            };
            const isInContainer = () => {
              const container = separator.current?.parentNode;
              if (!container) return true;
              const containerRect = container.getBoundingClientRect();
              const endRect = separator.current.getBoundingClientRect();
              const threshold = 2;
              return endRect.bottom - threshold <= containerRect.bottom;
            };
            _react.default.useEffect(() => {
              const container = separator.current?.parentNode;
              if (!container) return;
              const handleScroll = () => {
                const visible = !isInContainer();
                if (visible) icon.current?.classList.add('show');else icon.current?.classList.remove('show');
              };
              container.addEventListener('scroll', handleScroll);
              return () => container.removeEventListener('scroll', handleScroll);
            }, []);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.IconButton, {
              ref: icon,
              icon: 'backArrow',
              variant: 'tertiary',
              className: 'scroll-bottom show circle',
              onClick: scrollToBottom
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/chat/content
      ************************************/

      ims.set('./views/chat/content', {
        hash: 629669679,
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
              texts
            } = (0, _context.useChatContext)();
            const {
              messages
            } = store;
            const [totalMessages, setMessages] = _react.default.useState(messages.length ?? [].length);
            const [ref, ready, webComponentName] = (0, _useExtension.useExtension)('chat-intro');
            (0, _hooks.useBinder)([store], () => {
              setMessages(store.messages.length);
            }, 'new.message');
            return _react.default.createElement("div", {
              className: 'chat__content'
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
        hash: 4219697679,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _context = require("../context");
          var _input = require("../input");
          var _BackArrow = require("./BackArrow");
          var _content = require("./content");
          /*bundle*/
          function Chat() {
            const {
              store
            } = (0, _context.useChatContext)();
            const chatIntro = store.extensions.get('chat-intro');
            const [reader, setReader] = _react.default.useState(false);
            const separator = _react.default.useRef(null);
            const cls = `chat-page__container${reader ? ' reader__container' : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_content.Content, {
              separator: separator
            }), _react.default.createElement(_BackArrow.BackArrow, {
              store: store,
              separator: separator
            }), !chatIntro?.metadata?.avoidChat && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: 'send'
            }, _react.default.createElement(_input.ChatInput, {
              store: store,
              isWaiting: false
            }))));
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
        hash: 2955735725,
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
            return [ref, ready, webComponentName];
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3727116379,
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
        hash: 1932702076,
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
            store
          }) {
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
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
              store,
              texts,
              autoplay,
              messages,
              player
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
        hash: 3323654969,
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
              audioManager,
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
            const cls = `input-container ${waiting || isWaiting ? 'waiting' : ''}`;
            // Defines the "system" that the chat will use
            const {
              system
            } = _config.default.params.config;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJnZXQiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsIiwiX3ZvaWNlIiwiX3dyYXBwZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImN1cnJlbnRQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImxhbmd1YWdlIiwiQXBwV3JhcHBlciIsInJhdGUiLCJhdWRpb1NwZWVkIiwib24iLCJsaXN0ZW5BcHBDaGFuZ2VzIiwic2V0IiwibGFuZ3V1YWdlIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwidHJpZ2dlciIsIl9jb3JlIiwiX2F1ZGlvIiwiX2V4dGVuc2lvbnMiLCJtZXNzYWdlcyIsIkVYVEVOU0lPTlMiLCJjYXRlZ29yeSIsImNoYXQiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJrYnMiLCJrbm93bGVkZ2VCb3hlcyIsInNlbGVjdGVkS2IiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsImlkIiwicGF0aCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZSIsImV4dGVuc2lvbnMiLCJNYXAiLCJhdXRvcGxheSIsImxvYWQiLCJjbGVhbiIsImZldGNoaW5nIiwicmVhZHkiLCJDaGF0IiwibG9hZEFsbCIsImN1cnJlbnRDaGF0IiwiZm91bmQiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwia25vd2xlZGdlQm94SWQiLCJkZWZhdWx0IiwidHJpZ2dlckV2ZW50IiwiZXh0cyIsIm1ldGFkYXRhIiwiZm9yRWFjaCIsImV4dGVuc2lvbiIsImluZGV4Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ3YWl0aW5nUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiQmFja0Fycm93Iiwic2VwYXJhdG9yIiwiaWNvbiIsInVzZVJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJpc0luQ29udGFpbmVyIiwiY29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbmRSZWN0IiwidGhyZXNob2xkIiwiYm90dG9tIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiSWNvbkJ1dHRvbiIsInJlZiIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiX3VzZUV4dGVuc2lvbiIsIl9tZXNzYWdlcyIsIl9jb250ZXh0IiwiX2V4dGVuc2lvblJlbmRlcmVyIiwiQ29udGVudCIsInRleHRzIiwidXNlQ2hhdENvbnRleHQiLCJ0b3RhbE1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ1c2VTdGF0ZSIsImxlbmd0aCIsIndlYkNvbXBvbmVudE5hbWUiLCJ1c2VFeHRlbnNpb24iLCJFeHRlbnNpb25SZW5kZXJlciIsImNvbXBvbmVudCIsInJlZmVyZW5jZSIsIk1lc3NhZ2VzIiwiQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsIl9pbnB1dCIsIl9CYWNrQXJyb3ciLCJfY29udGVudCIsImNoYXRJbnRybyIsInJlYWRlciIsInNldFJlYWRlciIsImNscyIsImF2b2lkQ2hhdCIsIkNoYXRJbnB1dCIsImlzV2FpdGluZyIsIl9jb21wb25lbnRzIiwiX3ByZWxvYWQiLCJDaGF0U2tlbGV0b24iLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiUHJlbG9hZCIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0UmVhZHkiLCJjb250cm9sIiwib25SZWFkeSIsImV2ZW50IiwiQ2hhdENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlByb3ZpZGVyIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiX2Zvcm0iLCJfY29uZmlnIiwiX3JlY29yZGluZyIsIl9pbmRleCIsIl90ZXh0SW5wdXQiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsInRleHQiLCJzZXRUZXh0IiwiZGlzYWJsZWQiLCJzZW5kQXVkaW8iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3AiLCJoYW5kbGVTZW5kIiwib25TdWJtaXQiLCJyZXBsYWNlQWxsIiwidHJpbSIsInN5c3RlbSIsInBhcmFtcyIsImNvbmZpZyIsIlN5c3RlbU1vZGFsIiwiRm9ybSIsIlRleHRJbnB1dCIsIkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIl90aW1lciIsIlBsYXllciIsImNhbmNlbCIsIlRpbWVyIiwiYWN0aW9uIiwiX21vZGFsIiwiX3BsYXllciIsIl9jb250ZXh0MiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInBsYXlBY3Rpb24iLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uQ2xvc2UiLCJBbGVydE1vZGFsIiwib3BlbiIsInNob3ciLCJjZW50ZXJlZCIsInBlcm1pc3Npb25zIiwiaW50cm8iLCJJY29uIiwiZGVzY3JpcHRpb24iLCJfdG9hc3QiLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFyZWFWYWx1ZSIsInRhcmdldCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwicHVibGlzaCIsInN0YXR1cyIsInRvYXN0Iiwic3VjY2VzcyIsIlRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJsYWJlbCIsInR5cGUiLCJkaWFsb2dSZWYiLCJhc3Npc3RhbnQiLCJvcGVuTW9kYWwiLCJjbG9zZSIsIm1vZGUiLCJ0ZXh0QXJlYVJlZiIsInN0eWxlIiwic2Nyb2xsSGVpZ2h0IiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciIsIl9tYW5hZ2VyIiwiX2NvbXBvbmVudHMyIiwiX2ljb25zMiIsIm9wZW5EaWFsb2ciLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsIlByZWxvYWRTY3JlZW4iLCJzcmMiLCJhbHQiLCJJQ09OUyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXdzL2NoYXQvQmFja0Fycm93LnRzeCIsIi90cy92aWV3cy9jaGF0L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NoYXQvZXh0ZW5zaW9uLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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