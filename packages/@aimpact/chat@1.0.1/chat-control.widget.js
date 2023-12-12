System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/messages.code", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/components", "@aimpact/ailearn-app@0.0.21/config", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/toast", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context3) {
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
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_3 = _beyondJsReact18Widgets101Base;
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
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
    }, function (_pragmateUi003Icons) {
      dependency_11 = _pragmateUi003Icons;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_12 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101MessagesCode) {
      dependency_13 = _aimpactChat101MessagesCode;
    }, function (_aimpactChat101SharedComponents) {
      dependency_14 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi003Preload) {
      dependency_15 = _pragmateUi003Preload;
    }, function (_aimpactChat101SharedHooks) {
      dependency_16 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Form) {
      dependency_17 = _pragmateUi003Form;
    }, function (_pragmateUi003Components) {
      dependency_18 = _pragmateUi003Components;
    }, function (_aimpactAilearnApp0021Config) {
      dependency_19 = _aimpactAilearnApp0021Config;
    }, function (_pragmateUi003Image) {
      dependency_20 = _pragmateUi003Image;
    }, function (_pragmateUi003Modal) {
      dependency_21 = _pragmateUi003Modal;
    }, function (_pragmateUi003Toast) {
      dependency_22 = _pragmateUi003Toast;
    }, function (_aimpactChat101UiManager) {
      dependency_23 = _aimpactChat101UiManager;
    }, function (_aimpactChat101SharedIcons) {
      dependency_24 = _aimpactChat101SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.6"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.18"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.7"], ["socket.io-client", "4.7.2"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.21"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/voice', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/core', dependency_8], ['@aimpact/chat/extensions', dependency_9], ['react', dependency_10], ['pragmate-ui/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/messages.code', dependency_13], ['@aimpact/chat/shared/components', dependency_14], ['pragmate-ui/preload', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['pragmate-ui/form', dependency_17], ['pragmate-ui/components', dependency_18], ['@aimpact/chat/config', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/toast', dependency_22], ['@aimpact/chat/ui/manager', dependency_23], ['@aimpact/chat/shared/icons', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-chat-control",
        "attrs": ["id", "pepito", "data-valor"],
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
        hash: 3073386497,
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
              _wrapper.AppWrapper.on('app.settings.change', this.ListenAppChanges);
            }
            ListenAppChanges = () => {
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
        hash: 3239551913,
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
              super();
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
              await chat.isReady;
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
              await chat.isReady;
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
        hash: 1901294743,
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
        hash: 774622439,
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
        hash: 375502923,
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
        hash: 2364735830,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
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
            return _react.default.createElement(_react.default.Fragment, null, showModal && _react.default.createElement(_modal.Modal, {
              open: true,
              show: true,
              onClose: onClose
            }, _react.default.createElement("h3", null, texts.permissions.title), _react.default.createElement(_image.Image, {
              src: '/assets/permissions2.svg'
            }), _react.default.createElement("p", null, texts.permissions.description), _react.default.createElement("footer", {
              className: 'mt-15'
            }, _react.default.createElement(_components.Button, {
              variant: 'primary',
              onClick: onClose
            }, texts.permissions.button))), _react.default.createElement(_components.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJnZXQiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsIiwiX3ZvaWNlIiwiX3dyYXBwZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImN1cnJlbnRQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImxhbmd1YWdlIiwiQXBwV3JhcHBlciIsInJhdGUiLCJhdWRpb1NwZWVkIiwib24iLCJMaXN0ZW5BcHBDaGFuZ2VzIiwic2V0IiwibGFuZ3V1YWdlIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwidHJpZ2dlciIsIl9jb3JlIiwiX2F1ZGlvIiwiX2V4dGVuc2lvbnMiLCJtZXNzYWdlcyIsIkVYVEVOU0lPTlMiLCJjYXRlZ29yeSIsImNoYXQiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJrYnMiLCJrbm93bGVkZ2VCb3hlcyIsInNlbGVjdGVkS2IiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsImlkIiwicGF0aCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZSIsImV4dGVuc2lvbnMiLCJNYXAiLCJhdXRvcGxheSIsImxvYWQiLCJjbGVhbiIsImZldGNoaW5nIiwicmVhZHkiLCJDaGF0IiwiaXNSZWFkeSIsImxvYWRBbGwiLCJjdXJyZW50Q2hhdCIsImZvdW5kIiwia25vd2xlZGVCb3hTZWxlY3RlZCIsImtub3dsZWRnZUJveElkIiwiZGVmYXVsdCIsInRyaWdnZXJFdmVudCIsImV4dHMiLCJtZXRhZGF0YSIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNlbmRNZXNzYWdlIiwiY29udGVudCIsInBlcmZvcm1hbmNlIiwibWFyayIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwid2FpdGluZ1Jlc3BvbnNlIiwicmVzcG9uc2UiLCJvbkxpc3RlbiIsIm9uRW5kIiwib2ZmIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9yZWFjdCIsIl9pY29ucyIsIl9ob29rcyIsIkJhY2tBcnJvdyIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiaXNJbkNvbnRhaW5lciIsImNvbnRhaW5lciIsInBhcmVudE5vZGUiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZW5kUmVjdCIsInRocmVzaG9sZCIsImJvdHRvbSIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInZpc2libGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkljb25CdXR0b24iLCJyZWYiLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIl91c2VFeHRlbnNpb24iLCJfbWVzc2FnZXMiLCJfY29udGV4dCIsIl9leHRlbnNpb25SZW5kZXJlciIsIkNvbnRlbnQiLCJ0ZXh0cyIsInVzZUNoYXRDb250ZXh0IiwidG90YWxNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJsZW5ndGgiLCJ3ZWJDb21wb25lbnROYW1lIiwidXNlRXh0ZW5zaW9uIiwiRXh0ZW5zaW9uUmVuZGVyZXIiLCJjb21wb25lbnQiLCJyZWZlcmVuY2UiLCJNZXNzYWdlcyIsIkNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfaW5wdXQiLCJfQmFja0Fycm93IiwiX2NvbnRlbnQiLCJjaGF0SW50cm8iLCJyZWFkZXIiLCJzZXRSZWFkZXIiLCJjbHMiLCJhdm9pZENoYXQiLCJDaGF0SW5wdXQiLCJpc1dhaXRpbmciLCJfY29tcG9uZW50cyIsIl9wcmVsb2FkIiwiQ2hhdFNrZWxldG9uIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIlByZWxvYWQiLCJ3aWR0aCIsImhlaWdodCIsInNldFJlYWR5IiwiY29udHJvbCIsIm9uUmVhZHkiLCJldmVudCIsIkNoYXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX2NvbmZpZyIsIl9yZWNvcmRpbmciLCJfaW5kZXgiLCJfdGV4dElucHV0IiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0Iiwic2V0VGV4dCIsImRpc2FibGVkIiwic2VuZEF1ZGlvIiwicHJldmVudERlZmF1bHQiLCJzdG9wIiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJzeXN0ZW0iLCJwYXJhbXMiLCJjb25maWciLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJfdGltZXIiLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsImFjdGlvbiIsIl9pbWFnZSIsIl9tb2RhbCIsIl9wbGF5ZXIiLCJfY29udGV4dDIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwbGF5QWN0aW9uIiwicGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb25zIiwic3RhdGUiLCJyZWNvcmQiLCJvbkNsb3NlIiwiTW9kYWwiLCJvcGVuIiwic2hvdyIsInBlcm1pc3Npb25zIiwiSW1hZ2UiLCJzcmMiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsIl90b2FzdCIsIlVJRm9ybSIsImNsb3NlTW9kYWwiLCJzZXRWYWx1ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0QXJlYVZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJwdWJsaXNoIiwic3RhdHVzIiwidG9hc3QiLCJzdWNjZXNzIiwiVGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImxhYmVsIiwidHlwZSIsImRpYWxvZ1JlZiIsImFzc2lzdGFudCIsIm9wZW5Nb2RhbCIsImNsb3NlIiwibW9kZSIsInRleHRBcmVhUmVmIiwic3R5bGUiLCJzY3JvbGxIZWlnaHQiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwiX21hbmFnZXIiLCJfY29tcG9uZW50czIiLCJfaWNvbnMyIiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiUHJlbG9hZFNjcmVlbiIsImFsdCIsIkljb24iLCJJQ09OUyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXdzL2NoYXQvQmFja0Fycm93LnRzeCIsIi90cy92aWV3cy9jaGF0L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NoYXQvZXh0ZW5zaW9uLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGlu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