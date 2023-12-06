System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/messages.code", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/components", "@aimpact/ailearn-app@0.0.19/config", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/toast", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context3) {
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
    }, function (_beyondJsReact18Widgets103Base) {
      dependency_3 = _beyondJsReact18Widgets103Base;
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
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_12 = _beyondJsReact18Widgets103Hooks;
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
    }, function (_aimpactAilearnApp0019Config) {
      dependency_19 = _aimpactAilearnApp0019Config;
    }, function (_pragmateUi003Modal) {
      dependency_20 = _pragmateUi003Modal;
    }, function (_pragmateUi003Toast) {
      dependency_21 = _pragmateUi003Toast;
    }, function (_aimpactChat101UiManager) {
      dependency_22 = _aimpactChat101UiManager;
    }, function (_aimpactChat101SharedIcons) {
      dependency_23 = _aimpactChat101SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.19"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJnZXQiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsIiwiX3ZvaWNlIiwiX3dyYXBwZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImN1cnJlbnRQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImxhbmd1YWdlIiwiQXBwV3JhcHBlciIsInJhdGUiLCJhdWRpb1NwZWVkIiwib24iLCJMaXN0ZW5BcHBDaGFuZ2VzIiwic2V0IiwibGFuZ3V1YWdlIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwidHJpZ2dlciIsIl9jb3JlIiwiX2F1ZGlvIiwiX2V4dGVuc2lvbnMiLCJtZXNzYWdlcyIsIkVYVEVOU0lPTlMiLCJjYXRlZ29yeSIsImNoYXQiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJrYnMiLCJrbm93bGVkZ2VCb3hlcyIsInNlbGVjdGVkS2IiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsImlkIiwicGF0aCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZSIsImV4dGVuc2lvbnMiLCJNYXAiLCJhdXRvcGxheSIsImxvYWQiLCJjbGVhbiIsImZldGNoaW5nIiwicmVhZHkiLCJDaGF0IiwiaXNSZWFkeSIsImxvYWRBbGwiLCJjdXJyZW50Q2hhdCIsImZvdW5kIiwia25vd2xlZGVCb3hTZWxlY3RlZCIsImtub3dsZWRnZUJveElkIiwiZGVmYXVsdCIsInRyaWdnZXJFdmVudCIsImV4dHMiLCJtZXRhZGF0YSIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNlbmRNZXNzYWdlIiwiY29udGVudCIsInBlcmZvcm1hbmNlIiwibWFyayIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwid2FpdGluZ1Jlc3BvbnNlIiwicmVzcG9uc2UiLCJvbkxpc3RlbiIsIm9uRW5kIiwib2ZmIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9yZWFjdCIsIl9pY29ucyIsIl9ob29rcyIsIkJhY2tBcnJvdyIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiaXNJbkNvbnRhaW5lciIsImNvbnRhaW5lciIsInBhcmVudE5vZGUiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZW5kUmVjdCIsInRocmVzaG9sZCIsImJvdHRvbSIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInZpc2libGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkljb25CdXR0b24iLCJyZWYiLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIl91c2VFeHRlbnNpb24iLCJfbWVzc2FnZXMiLCJfY29udGV4dCIsIl9leHRlbnNpb25SZW5kZXJlciIsIkNvbnRlbnQiLCJ0ZXh0cyIsInVzZUNoYXRDb250ZXh0IiwidG90YWxNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJsZW5ndGgiLCJ3ZWJDb21wb25lbnROYW1lIiwidXNlRXh0ZW5zaW9uIiwiRXh0ZW5zaW9uUmVuZGVyZXIiLCJjb21wb25lbnQiLCJyZWZlcmVuY2UiLCJNZXNzYWdlcyIsIkNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfaW5wdXQiLCJfQmFja0Fycm93IiwiX2NvbnRlbnQiLCJjaGF0SW50cm8iLCJyZWFkZXIiLCJzZXRSZWFkZXIiLCJjbHMiLCJhdm9pZENoYXQiLCJDaGF0SW5wdXQiLCJpc1dhaXRpbmciLCJfY29tcG9uZW50cyIsIl9wcmVsb2FkIiwiQ2hhdFNrZWxldG9uIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIlByZWxvYWQiLCJ3aWR0aCIsImhlaWdodCIsInNldFJlYWR5IiwiY29udHJvbCIsIm9uUmVhZHkiLCJldmVudCIsIkNoYXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX2NvbmZpZyIsIl9yZWNvcmRpbmciLCJfaW5kZXgiLCJfdGV4dElucHV0IiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0Iiwic2V0VGV4dCIsImRpc2FibGVkIiwic2VuZEF1ZGlvIiwicHJldmVudERlZmF1bHQiLCJzdG9wIiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJzeXN0ZW0iLCJwYXJhbXMiLCJjb25maWciLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJfdGltZXIiLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsImFjdGlvbiIsIl9tb2RhbCIsIl9wbGF5ZXIiLCJfY29udGV4dDIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwbGF5QWN0aW9uIiwicGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb25zIiwic3RhdGUiLCJyZWNvcmQiLCJvbkNsb3NlIiwiQWxlcnRNb2RhbCIsIm9wZW4iLCJzaG93IiwiY2VudGVyZWQiLCJwZXJtaXNzaW9ucyIsImludHJvIiwiSWNvbiIsImRlc2NyaXB0aW9uIiwiX3RvYXN0IiwiVUlGb3JtIiwiY2xvc2VNb2RhbCIsInNldFZhbHVlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJUZXh0YXJlYSIsInJvd3MiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibGFiZWwiLCJ0eXBlIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJtb2RlIiwidGV4dEFyZWFSZWYiLCJzdHlsZSIsInNjcm9sbEhlaWdodCIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJfbWFuYWdlciIsIl9jb21wb25lbnRzMiIsIl9pY29uczIiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIiwic3JjIiwiYWx0IiwiSUNPTlMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy92aWV3cy9jaGF0L0JhY2tBcnJvdy50c3giLCIvdHMvdmlld3MvY2hhdC9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jaGF0L2V4dGVuc2lvbi1yZW5kZXJlci50c3giLCIvdHMvdmlld3MvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvdmlld3MvY2hhdC91c2UtZXh0ZW5zaW9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCIvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90ZXh0LWlucHV0LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Y0FDekRDLFVBQVUsQ0FBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJTSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1YsTUFBQSxDQUFBVyxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQVYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7OztVQ3RCRDs7VUFFQVcsTUFBQSxDQUFBQyxjQUFBLENBQUFGLE9BQUE7WUFDQUcsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFDLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsTUFBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixRQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLFNBQUEsR0FBQXBCLE9BQUE7VUFNTztVQUFZLE1BQU9xQixZQUFhLFNBQVFKLE1BQUEsQ0FBQUssYUFBcUI7WUFHbkUsQ0FBQUMsTUFBTztZQUNQLENBQUFDLFFBQVM7WUFFVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLE9BQVEsR0FBRztjQUNWQyxHQUFHLEVBQUVSLE1BQUEsQ0FBQVMsS0FBSztjQUNWQyxHQUFHLEVBQUVWLE1BQUEsQ0FBQVcsUUFBUSxDQUFFO2FBQ2Y7O1lBRUQsQ0FBQUMsTUFBTyxHQUFHLEtBQUs7WUFDZixJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUMsYUFBYztZQUMzQjtZQUVBLENBQUFBLGFBQWM7WUFDZEMsWUFBWVQsTUFBTTtjQUNqQixLQUFLLENBQUMsRUFBRSxDQUFDO2NBQ1QsSUFBSSxDQUFDLENBQUFDLFFBQVMsR0FBRyxJQUFJSixTQUFBLENBQUFhLFFBQVEsRUFBRTtjQUMvQixJQUFJLENBQUMsQ0FBQVYsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQ1csYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7Y0FDaEMsSUFBSSxDQUFDLENBQUFILGFBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBTixPQUFRLENBQUMsSUFBSSxDQUFDLENBQUFLLE1BQU8sQ0FBQyxDQUFDO2dCQUNyREssUUFBUSxFQUFFaEIsUUFBQSxDQUFBaUIsVUFBVSxDQUFDRCxRQUFRO2dCQUM3QkUsSUFBSSxFQUFFbEIsUUFBQSxDQUFBaUIsVUFBVSxDQUFDRTtlQUNqQixDQUFDO2NBRUZuQixRQUFBLENBQUFpQixVQUFVLENBQUNHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDO1lBQzVEO1lBRUFBLGdCQUFnQixHQUFHQSxDQUFBLEtBQUs7Y0FDdkIsSUFBSSxDQUFDLENBQUFULGFBQWMsQ0FBQ1UsR0FBRyxDQUFDO2dCQUN2QkosSUFBSSxFQUFFbEIsUUFBQSxDQUFBaUIsVUFBVSxDQUFDRSxVQUFVO2dCQUMzQkksU0FBUyxFQUFFdkIsUUFBQSxDQUFBaUIsVUFBVSxDQUFDRDtlQUN0QixDQUFDO1lBQ0gsQ0FBQztZQUVEUSxZQUFZQSxDQUFDQyxJQUFJO2NBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQW5CLE9BQVEsQ0FBQ21CLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLFVBQVVELElBQUksWUFBWSxDQUFDO2NBRXJFLElBQUksQ0FBQyxDQUFBZCxNQUFPLEdBQUdjLElBQUk7Y0FDbkIsSUFBSSxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCOztVQUNBakMsT0FBQSxDQUFBUSxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeERELElBQUFKLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBK0MsS0FBQSxHQUFBL0MsT0FBQTtVQUNBLElBQUFtQixRQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQWdELE1BQUEsR0FBQWhELE9BQUE7VUFDQSxJQUFBaUQsV0FBQSxHQUFBakQsT0FBQTtVQU9NLE1BQU9PLFlBQWEsU0FBUVUsTUFBQSxDQUFBSyxhQUFxQjtZQUN0RCxDQUFBNEIsUUFBUztZQUtULENBQUFDLFVBQVcsR0FBRyxDQUFDLFlBQVksQ0FBQztZQUM1QixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFOLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUVBLENBQUFRLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUNBLENBQUFDLEtBQU0sR0FBR25DLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQ2tCLEtBQUs7WUFDekIsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ0MsS0FBSyxJQUFJLEVBQUU7WUFDL0I7WUFFQSxDQUFBQyxLQUFNLEdBQWlCLElBQUlSLE1BQUEsQ0FBQTNCLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDN0MsSUFBSW9DLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBRCxLQUFNO1lBQ25CO1lBRUEsQ0FBQUUsR0FBSSxHQUFHdkMsUUFBQSxDQUFBaUIsVUFBVSxDQUFDdUIsY0FBYztZQUNoQyxJQUFJRCxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSSxDQUFDSCxLQUFLLElBQUksRUFBRTtZQUM3QjtZQUVBLENBQUFLLFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUNBLElBQUlBLFVBQVVBLENBQUNDLEVBQUU7Y0FDaEIsSUFBSSxDQUFDLENBQUFELFVBQVcsR0FBR0MsRUFBRTtZQUN0QjtZQUVBLENBQUFDLGFBQWMsR0FBRyxPQUFPO1lBQ3hCLElBQUlBLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsYUFBYztZQUMzQjtZQUNBLElBQUlBLGFBQWFBLENBQUNDLEtBQUs7Y0FDdEIsSUFBSSxDQUFDLENBQUFELGFBQWMsR0FBR0MsS0FBSztZQUM1QjtZQUVBLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLElBQUlBLFFBQVFBLENBQUNBLFFBQVE7Y0FDcEIsSUFBSSxDQUFDLENBQUFBLFFBQVMsR0FBR0EsUUFBUTtZQUMxQjtZQUVBLElBQUlDLGNBQWNBLENBQUE7Y0FDakIsTUFBTUwsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUNILEtBQUssQ0FBQ1csSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFBUixVQUFXLENBQUM7Y0FDdkUsT0FBT0EsVUFBVSxFQUFFUyxJQUFJLElBQUksa0JBQWtCO1lBQzlDO1lBRUEsQ0FBQUMsY0FBZTtZQUNmLElBQUlBLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsY0FBZTtZQUM1QjtZQUVBLElBQUlBLGNBQWNBLENBQUNDLE9BQU87Y0FDekIsSUFBSUEsT0FBTyxFQUFFSCxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUFFLGNBQWUsRUFBRUYsRUFBRSxFQUFFO2NBQzlDLElBQUksQ0FBQyxDQUFBRSxjQUFlLEdBQUdDLE9BQU87WUFDL0I7WUFFQSxDQUFBQyxVQUFXLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3ZCLElBQUlELFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBQ0EsQ0FBQUosRUFBRztZQUNIcEMsWUFBWW9DLEVBQUU7Y0FDYixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUEsRUFBRyxHQUFHQSxFQUFFO2NBQ2IsSUFBSSxDQUFDbEMsYUFBYSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7Y0FDbkQsSUFBSSxDQUFDd0MsUUFBUSxHQUFHLElBQUk7Y0FDcEIsSUFBSSxDQUFDQyxJQUFJLENBQUNQLEVBQUUsQ0FBQztZQUNkO1lBRUFRLEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUNDLFFBQVEsR0FBRyxLQUFLO2NBQ3JCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEtBQUs7WUFDbkI7WUFFQUgsSUFBSSxHQUFHLE1BQU9QLEVBQVUsSUFBSTtjQUMzQixJQUFJLENBQUNBLEVBQUUsRUFBRTtnQkFDUixJQUFJLENBQUNVLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNkLFFBQVEsR0FBRyxJQUFJO2dCQUNwQjs7Y0FHRCxJQUFJLENBQUNhLFFBQVEsR0FBRyxJQUFJO2NBRXBCLE1BQU14QixJQUFJLEdBQUcsSUFBSU4sS0FBQSxDQUFBZ0MsSUFBSSxDQUFDO2dCQUFFWDtjQUFFLENBQUUsQ0FBQztjQUM3QixNQUFNZixJQUFJLENBQUMyQixPQUFPO2NBQ2xCLE1BQU0zQixJQUFJLENBQUM0QixPQUFPLENBQUM7Z0JBQUViO2NBQUUsQ0FBRSxDQUFDO2NBQzFCMUQsVUFBVSxDQUFDMkMsSUFBSSxHQUFHQSxJQUFJO2NBQ3RCbEMsUUFBQSxDQUFBaUIsVUFBVSxDQUFDOEMsV0FBVyxHQUFHN0IsSUFBSTtjQUU3QixJQUFJLENBQUNBLElBQUksQ0FBQzhCLEtBQUssRUFBRTtnQkFDaEIsSUFBSSxDQUFDTixRQUFRLEdBQUcsS0FBSztnQkFDckIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtnQkFDakIsSUFBSSxDQUFDZCxRQUFRLEdBQUcsSUFBSTtnQkFDcEI7O2NBR0QsTUFBTVgsSUFBSSxDQUFDMkIsT0FBTztjQUVsQixNQUFNSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQTFCLEdBQUksQ0FBQ0gsS0FBSyxDQUFDVyxJQUFJLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxFQUFFLEtBQUtmLElBQUksQ0FBQ2dDLGNBQWMsQ0FBQztjQUNuRixJQUFJLENBQUMsQ0FBQXpCLFVBQVcsR0FBR3dCLG1CQUFtQixHQUFHQSxtQkFBbUIsQ0FBQ2hCLEVBQUUsR0FBRyxTQUFTO2NBQzNFLElBQUksQ0FBQ1gsWUFBWSxDQUFDM0IsTUFBTSxDQUFDVyxHQUFHLENBQUM7Z0JBQzVCTixRQUFRLEVBQUVrQixJQUFJLENBQUNsQixRQUFRLEVBQUVtRCxPQUFPLElBQUluRSxRQUFBLENBQUFpQixVQUFVLENBQUNEO2VBQy9DLENBQUM7Y0FDRjtjQUNBa0IsSUFBSSxDQUFDZCxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQUs7Z0JBQ3RCLElBQUksQ0FBQyxDQUFBVyxRQUFTLEdBQUdHLElBQUksQ0FBQ0gsUUFBUSxFQUFFSyxLQUFLO2dCQUNyQyxJQUFJLENBQUNnQyxZQUFZLENBQUMsYUFBYSxDQUFDO2NBQ2pDLENBQUMsQ0FBQztjQUVGLElBQUksQ0FBQyxDQUFBbEMsSUFBSyxHQUFHQSxJQUFJO2NBQ2pCLE1BQU1tQyxJQUFJLEdBQUcsTUFBTXZDLFdBQUEsQ0FBQXVCLFVBQVUsQ0FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBeEIsVUFBVyxFQUFFRSxJQUFJLENBQUNvQyxRQUFRLENBQUM7Y0FFbkUsSUFBSSxDQUFDLENBQUF0QyxVQUFXLENBQUN1QyxPQUFPLENBQUMsQ0FBQ0MsU0FBUyxFQUFFQyxLQUFLLEtBQUk7Z0JBQzdDLElBQUksQ0FBQyxDQUFBcEIsVUFBVyxDQUFDL0IsR0FBRyxDQUFDa0QsU0FBUyxFQUFFSCxJQUFJLENBQUNJLEtBQUssQ0FBQyxDQUFDO2NBQzdDLENBQUMsQ0FBQztjQUVGLElBQUksQ0FBQyxDQUFBMUMsUUFBUyxHQUFHRyxJQUFJLENBQUNILFFBQVEsQ0FBQ0ssS0FBSztjQUNwQyxJQUFJLENBQUNzQixRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQ2QsUUFBUSxHQUFHLEtBQUs7WUFDdEIsQ0FBQztZQUVELE1BQU02QixXQUFXQSxDQUFDQyxPQUFzQjtjQUN2QyxJQUFJO2dCQUNIQyxXQUFXLENBQUNDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxDQUFBMUIsY0FBZSxHQUFHMkIsU0FBUztnQkFFaEMsSUFBSSxPQUFPSCxPQUFPLEtBQUssUUFBUSxJQUFJLENBQUNHLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQ0osT0FBTyxDQUFDLEVBQUU7Z0JBRTVFLElBQUksQ0FBQ2pCLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixJQUFJLENBQUNzQixlQUFlLEdBQUcsSUFBSTtnQkFDM0IsTUFBTTtrQkFBRTVCLE9BQU87a0JBQUU2QjtnQkFBUSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQS9DLElBQUssQ0FBQ3dDLFdBQVcsQ0FBQ0MsT0FBTyxDQUFDO2dCQUVuRSxJQUFJLENBQUNNLFFBQVEsR0FBR0EsUUFBUTtnQkFDeEI7Z0JBQ0EsSUFBSSxDQUFDLENBQUE5QixjQUFlLEdBQUdDLE9BQU87Z0JBQzlCLE1BQU04QixRQUFRLEdBQUdBLENBQUEsS0FBSztrQkFDckIsSUFBSSxDQUFDZCxZQUFZLENBQUMsV0FBV2EsUUFBUSxDQUFDaEMsRUFBRSxVQUFVLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUQsTUFBTWtDLEtBQUssR0FBR0EsQ0FBQSxLQUFLO2tCQUNsQi9CLE9BQU8sQ0FBQ2dDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRUYsUUFBUSxDQUFDO2tCQUN4QyxJQUFJLENBQUNkLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztrQkFDbkMsSUFBSSxDQUFDQSxZQUFZLENBQUMsV0FBV2EsUUFBUSxDQUFDaEMsRUFBRSxXQUFXLENBQUM7a0JBQ3BERyxPQUFPLENBQUNnQyxHQUFHLENBQUMsbUJBQW1CLEVBQUVELEtBQUssQ0FBQztnQkFDeEMsQ0FBQztnQkFFRC9CLE9BQU8sQ0FBQ2hDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRThELFFBQVEsQ0FBQztnQkFDdkM5QixPQUFPLENBQUNoQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUrRCxLQUFLLENBQUM7Z0JBRXRDLElBQUksQ0FBQ0gsZUFBZSxHQUFHLEtBQUs7Z0JBQzVCLElBQUksQ0FBQ1osWUFBWSxDQUFDLGFBQWEsQ0FBQztlQUNoQyxDQUFDLE9BQU9pQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNMLGVBQWUsR0FBRyxLQUFLO2dCQUM1QixJQUFJLENBQUN0QixRQUFRLEdBQUcsS0FBSzs7WUFFdkI7O1VBQ0FoRSxPQUFBLENBQUFOLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqTUQsSUFBQW9HLE1BQUEsR0FBQTNHLE9BQUE7VUFDQSxJQUFBNEcsTUFBQSxHQUFBNUcsT0FBQTtVQUNBLElBQUE2RyxNQUFBLEdBQUE3RyxPQUFBO1VBRU0sU0FBVThHLFNBQVNBLENBQUM7WUFBRXpHLEtBQUs7WUFBRTBHO1VBQVMsQ0FBRTtZQUM3QyxNQUFNQyxJQUFJLEdBQUdMLE1BQUEsQ0FBQXJCLE9BQUssQ0FBQzJCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFL0IsSUFBQUosTUFBQSxDQUFBSyxTQUFTLEVBQUMsQ0FBQzdHLEtBQUssQ0FBQyxFQUFFLE1BQU1LLFVBQVUsQ0FBQ3lHLFVBQVUsQ0FBQyxNQUFNQyxjQUFjLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxhQUFhLENBQUM7WUFDM0YsTUFBTUEsY0FBYyxHQUFHQSxDQUFBLEtBQUs7Y0FDM0JMLFNBQVMsQ0FBQ00sT0FBTyxFQUFFQyxjQUFjLENBQUM7Z0JBQUVDLEtBQUssRUFBRSxLQUFLO2dCQUFFQyxRQUFRLEVBQUU7Y0FBUSxDQUFFLENBQUM7WUFDeEUsQ0FBQztZQUVELE1BQU1DLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLE1BQU1DLFNBQVMsR0FBR1gsU0FBUyxDQUFDTSxPQUFPLEVBQUVNLFVBQVU7Y0FDL0MsSUFBSSxDQUFDRCxTQUFTLEVBQUUsT0FBTyxJQUFJO2NBQzNCLE1BQU1FLGFBQWEsR0FBR0YsU0FBUyxDQUFDRyxxQkFBcUIsRUFBRTtjQUN2RCxNQUFNQyxPQUFPLEdBQUdmLFNBQVMsQ0FBQ00sT0FBTyxDQUFDUSxxQkFBcUIsRUFBRTtjQUN6RCxNQUFNRSxTQUFTLEdBQUcsQ0FBQztjQUNuQixPQUFPRCxPQUFPLENBQUNFLE1BQU0sR0FBR0QsU0FBUyxJQUFJSCxhQUFhLENBQUNJLE1BQU07WUFDMUQsQ0FBQztZQUVEckIsTUFBQSxDQUFBckIsT0FBSyxDQUFDMkMsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTVAsU0FBUyxHQUFHWCxTQUFTLENBQUNNLE9BQU8sRUFBRU0sVUFBVTtjQUMvQyxJQUFJLENBQUNELFNBQVMsRUFBRTtjQUVoQixNQUFNUSxZQUFZLEdBQUdBLENBQUEsS0FBSztnQkFDekIsTUFBTUMsT0FBTyxHQUFHLENBQUNWLGFBQWEsRUFBRTtnQkFDaEMsSUFBSVUsT0FBTyxFQUFFbkIsSUFBSSxDQUFDSyxPQUFPLEVBQUVlLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQzVDckIsSUFBSSxDQUFDSyxPQUFPLEVBQUVlLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztjQUM1QyxDQUFDO2NBQ0RaLFNBQVMsQ0FBQ2EsZ0JBQWdCLENBQUMsUUFBUSxFQUFFTCxZQUFZLENBQUM7Y0FDbEQsT0FBTyxNQUFNUixTQUFTLENBQUNjLG1CQUFtQixDQUFDLFFBQVEsRUFBRU4sWUFBWSxDQUFDO1lBQ25FLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixPQUNDdkIsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFBOUIsTUFBQSxDQUFBckIsT0FBQSxDQUFBb0QsUUFBQSxRQUNDL0IsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDN0IsTUFBQSxDQUFBK0IsVUFBVTtjQUNWQyxHQUFHLEVBQUU1QixJQUFJO2NBQ1RBLElBQUksRUFBQyxXQUFXO2NBQ2hCNkIsT0FBTyxFQUFDLFVBQVU7Y0FDbEJDLFNBQVMsRUFBQywyQkFBMkI7Y0FDckNDLE9BQU8sRUFBRTNCO1lBQWMsRUFDdEIsQ0FDQTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDQSxJQUFBVCxNQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQWdKLGFBQUEsR0FBQWhKLE9BQUE7VUFDQSxJQUFBaUosU0FBQSxHQUFBakosT0FBQTtVQUNBLElBQUFrSixRQUFBLEdBQUFsSixPQUFBO1VBQ0EsSUFBQTZHLE1BQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBbUosa0JBQUEsR0FBQW5KLE9BQUE7VUFFTSxTQUFVb0osT0FBT0EsQ0FBQztZQUFFckM7VUFBUyxDQUFFO1lBQ3BDLE1BQU07Y0FBRTFHLEtBQUs7Y0FBRWdKO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUksY0FBYyxHQUFFO1lBQ3pDLE1BQU07Y0FBRXBHO1lBQVEsQ0FBRSxHQUFHN0MsS0FBSztZQUMxQixNQUFNLENBQUNrSixhQUFhLEVBQUVDLFdBQVcsQ0FBQyxHQUFHN0MsTUFBQSxDQUFBckIsT0FBSyxDQUFDbUUsUUFBUSxDQUFTdkcsUUFBUSxDQUFDd0csTUFBTSxJQUFJLEVBQUUsQ0FBQ0EsTUFBTSxDQUFDO1lBQ3pGLE1BQU0sQ0FBQ2QsR0FBRyxFQUFFOUQsS0FBSyxFQUFFNkUsZ0JBQWdCLENBQUMsR0FBRyxJQUFBWCxhQUFBLENBQUFZLFlBQVksRUFBQyxZQUFZLENBQUM7WUFFakUsSUFBQS9DLE1BQUEsQ0FBQUssU0FBUyxFQUNSLENBQUM3RyxLQUFLLENBQUMsRUFDUCxNQUFLO2NBQ0ptSixXQUFXLENBQUNuSixLQUFLLENBQUM2QyxRQUFRLENBQUN3RyxNQUFNLENBQUM7WUFDbkMsQ0FBQyxFQUNELGFBQWEsQ0FDYjtZQUVELE9BQ0MvQyxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFlLEdBQzdCbkMsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDVSxrQkFBQSxDQUFBVSxpQkFBaUI7Y0FBQ0MsU0FBUyxFQUFFSCxnQkFBZ0I7Y0FBRUksU0FBUyxFQUFFbkI7WUFBRyxFQUFJLEVBRWpFOUQsS0FBSyxJQUNMNkIsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFBOUIsTUFBQSxDQUFBckIsT0FBQSxDQUFBb0QsUUFBQSxRQUNDL0IsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDUSxTQUFBLENBQUFlLFFBQVE7Y0FDUjNHLElBQUksRUFBRWhELEtBQUssQ0FBQ2dELElBQUk7Y0FDaEJ2QixNQUFNLEVBQUV6QixLQUFLLENBQUNvRCxZQUFZLENBQUMzQixNQUFNO2NBQ2pDdUYsT0FBTyxFQUFFaEgsS0FBSyxDQUFDaUUsY0FBYztjQUM3QmpFLEtBQUssRUFBRUEsS0FBSztjQUNaNkMsUUFBUSxFQUFFN0MsS0FBSyxDQUFDNkMsUUFBUTtjQUN4Qm1HLEtBQUssRUFBRUE7WUFBSyxFQUNYLEVBQ0YxQyxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBO2NBQUtHLEdBQUcsRUFBRTdCLFNBQVM7Y0FBRStCLFNBQVMsRUFBQztZQUFXLEVBQUcsQ0FFOUMsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDQSxJQUFBbkMsTUFBQSxHQUFBM0csT0FBQTtVQUVBLElBQUFrSixRQUFBLEdBQUFsSixPQUFBO1VBREE7O1VBR00sU0FBVTZKLGlCQUFpQkEsQ0FBQztZQUFFQyxTQUFTO1lBQUVDO1VBQVMsQ0FBRTtZQUN6RCxNQUFNO2NBQ0wxSixLQUFLLEVBQUU7Z0JBQUVnRCxJQUFJO2dCQUFFbUI7Y0FBVTtZQUFFLENBQzNCLEdBQUcsSUFBQTBFLFFBQUEsQ0FBQUksY0FBYyxHQUFFO1lBRXBCLE1BQU1XLFNBQVMsR0FBR0gsU0FBUztZQUMzQixJQUFJLENBQUNBLFNBQVMsRUFBRSxPQUFPLElBQUk7WUFDM0IsT0FDQ25ELE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQTlCLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW9ELFFBQUEsUUFDQy9CLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQ3dCLFNBQVM7Y0FBQ3JCLEdBQUcsRUFBRW1CLFNBQVM7Y0FBRXRFLFFBQVEsRUFBRXlFLElBQUksQ0FBQ0MsU0FBUyxDQUFDOUcsSUFBSSxDQUFDb0MsUUFBUTtZQUFDLEVBQUksQ0FDcEU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQWtCLE1BQUEsR0FBQTNHLE9BQUE7VUFDQSxJQUFBa0osUUFBQSxHQUFBbEosT0FBQTtVQUVBLElBQUFvSyxNQUFBLEdBQUFwSyxPQUFBO1VBQ0EsSUFBQXFLLFVBQUEsR0FBQXJLLE9BQUE7VUFDQSxJQUFBc0ssUUFBQSxHQUFBdEssT0FBQTtVQVVPO1VBQVUsU0FBVStFLElBQUlBLENBQUE7WUFDOUIsTUFBTTtjQUFFMUU7WUFBSyxDQUFFLEdBQUcsSUFBQTZJLFFBQUEsQ0FBQUksY0FBYyxHQUFFO1lBQ2xDLE1BQU1pQixTQUFTLEdBQUdsSyxLQUFLLENBQUNtRSxVQUFVLENBQUMvRCxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ3BELE1BQU0sQ0FBQytKLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUc5RCxNQUFBLENBQUFyQixPQUFLLENBQUNtRSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU0xQyxTQUFTLEdBQUdKLE1BQUEsQ0FBQXJCLE9BQUssQ0FBQzJCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEMsTUFBTXlELEdBQUcsR0FBRyx1QkFBdUJGLE1BQU0sR0FBRyxvQkFBb0IsR0FBRyxFQUFFLEVBQUU7WUFFdkUsT0FDQzdELE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUE7Y0FBS0ssU0FBUyxFQUFFNEI7WUFBRyxHQUVsQi9ELE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQzZCLFFBQUEsQ0FBQWxCLE9BQU87Y0FBQ3JDLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ2pDSixNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBLENBQUM0QixVQUFBLENBQUF2RCxTQUFTO2NBQUN6RyxLQUFLLEVBQUVBLEtBQUs7Y0FBRTBHLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ2hELENBQUN3RCxTQUFTLEVBQUU5RSxRQUFRLEVBQUVrRixTQUFTLElBQy9CaEUsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFBOUIsTUFBQSxDQUFBckIsT0FBQSxDQUFBb0QsUUFBQSxRQUNDL0IsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBTSxHQUNwQm5DLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQzJCLE1BQUEsQ0FBQVEsU0FBUztjQUFDdkssS0FBSyxFQUFFQSxLQUFLO2NBQUV3SyxTQUFTLEVBQUU7WUFBSyxFQUFJLENBQ3hDLENBRVAsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BDQSxJQUFBbEUsTUFBQSxHQUFBM0csT0FBQTtVQUNBLElBQUFrSixRQUFBLEdBQUFsSixPQUFBO1VBRUEsSUFBQThLLFdBQUEsR0FBQTlLLE9BQUE7VUFDQSxJQUFBK0ssUUFBQSxHQUFBL0ssT0FBQTtVQUNNLFNBQVVnTCxZQUFZQSxDQUFBO1lBQzNCLE1BQU07Y0FBRTNLO1lBQUssQ0FBRSxHQUFHLElBQUE2SSxRQUFBLENBQUFJLGNBQWMsR0FBRTtZQUNsQyxPQUNDM0MsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJuQyxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBLENBQUNxQyxXQUFBLENBQUFHLGlCQUFpQjtjQUFDQyxLQUFLLEVBQUV2RSxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBLENBQUNzQyxRQUFBLENBQUFJLE9BQU87Z0JBQUNDLEtBQUssRUFBQyxPQUFPO2dCQUFDQyxNQUFNLEVBQUM7Y0FBTTtZQUFHLEVBQXNCLEVBQ3ZGMUUsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBTSxFQUFHLENBQ25CO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkEsSUFBQW5DLE1BQUEsR0FBQTNHLE9BQUE7VUFDQSxJQUFBa0osUUFBQSxHQUFBbEosT0FBQTtVQUNNLFNBQVU0SixZQUFZQSxDQUFDaEgsSUFBSTtZQUNoQyxNQUFNLENBQUNrQyxLQUFLLEVBQUV3RyxRQUFRLENBQUMsR0FBRzNFLE1BQUEsQ0FBQXJCLE9BQUssQ0FBQ21FLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDL0MsTUFBTWIsR0FBRyxHQUFHakMsTUFBQSxDQUFBckIsT0FBSyxDQUFDMkIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNO2NBQ0w1RyxLQUFLLEVBQUU7Z0JBQUVtRTtjQUFVO1lBQUUsQ0FDckIsR0FBRyxJQUFBMEUsUUFBQSxDQUFBSSxjQUFjLEdBQUU7WUFFcEIsTUFBTUssZ0JBQWdCLEdBQUduRixVQUFVLENBQUMvRCxHQUFHLENBQUNtQyxJQUFJLENBQUMsRUFBRTJJLE9BQU87WUFDdEQ1RSxNQUFBLENBQUFyQixPQUFLLENBQUMyQyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNdUQsT0FBTyxHQUFHQyxLQUFLLElBQUlILFFBQVEsQ0FBQyxJQUFJLENBQUM7Y0FDdkMsSUFBSSxDQUFDMUMsR0FBRyxFQUFFdkIsT0FBTyxFQUFFO2NBQ25CdUIsR0FBRyxDQUFDdkIsT0FBTyxDQUFDa0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFaUQsT0FBTyxDQUFDO2NBQzlDLE9BQU8sTUFBTTVDLEdBQUcsQ0FBQ3ZCLE9BQU8sRUFBRW1CLG1CQUFtQixDQUFDLE9BQU8sRUFBRWdELE9BQU8sQ0FBQztZQUNoRSxDQUFDLEVBQUUsQ0FBQzVDLEdBQUcsRUFBRXZCLE9BQU8sQ0FBQyxDQUFDO1lBRWxCLE9BQU8sQ0FBQ3VCLEdBQUcsRUFBRTlELEtBQUssRUFBRTZFLGdCQUFnQixDQUFDO1VBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCQSxJQUFBaEQsTUFBQSxHQUFBM0csT0FBQTtVQVdPLE1BQU0wTCxXQUFXLEdBQUE3SyxPQUFBLENBQUE2SyxXQUFBLEdBQUcvRSxNQUFBLENBQUFyQixPQUFLLENBQUNxRyxhQUFhLENBQUMsRUFBa0IsQ0FBQztVQUMzRCxNQUFNckMsY0FBYyxHQUFHQSxDQUFBLEtBQU0zQyxNQUFBLENBQUFyQixPQUFLLENBQUNzRyxVQUFVLENBQUNGLFdBQVcsQ0FBQztVQUFDN0ssT0FBQSxDQUFBeUksY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1psRSxJQUFBM0MsTUFBQSxHQUFBM0csT0FBQTtVQUNBLElBQUE2RyxNQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQTZMLEtBQUEsR0FBQTdMLE9BQUE7VUFDQSxJQUFBa0osUUFBQSxHQUFBbEosT0FBQTtVQUNBLElBQUE4TCxTQUFBLEdBQUE5TCxPQUFBO1VBQ0EsSUFBQStMLFNBQUEsR0FBQS9MLE9BQUE7VUFDQSxJQUFBZ00sT0FBQSxHQUFBaE0sT0FBQTtVQUNBLElBQUFpTSxlQUFBLEdBQUFqTSxPQUFBO1VBRU0sU0FBVVksSUFBSUEsQ0FBQztZQUFFUDtVQUFLLENBQUU7WUFDN0IsTUFBTSxDQUFDd0UsUUFBUSxFQUFFcUgsV0FBVyxDQUFDLEdBQUd2RixNQUFBLENBQUFyQixPQUFLLENBQUNtRSxRQUFRLENBQUNwSixLQUFLLENBQUN3RSxRQUFRLENBQUM7WUFDOUQsTUFBTSxDQUFDQyxLQUFLLEVBQUV3RyxRQUFRLENBQUMsR0FBRzNFLE1BQUEsQ0FBQXJCLE9BQUssQ0FBQ21FLFFBQVEsQ0FBQ3BKLEtBQUssQ0FBQ3lFLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNxSCxVQUFVLEVBQUU5QyxLQUFLLENBQUMsR0FBRyxJQUFBMkMsT0FBQSxDQUFBSSxRQUFRLEVBQUNILGVBQUEsQ0FBQUksTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTTtjQUNMNUgsUUFBUTtjQUNSeEIsUUFBUTtjQUNSTyxZQUFZLEVBQUU7Z0JBQUUzQjtjQUFNO1lBQUUsQ0FDeEIsR0FBR3pCLEtBQUs7WUFFVCxJQUFBd0csTUFBQSxDQUFBSyxTQUFTLEVBQUMsQ0FBQzdHLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkI2TCxXQUFXLENBQUM3TCxLQUFLLENBQUN3RSxRQUFRLENBQUM7Y0FDM0J5RyxRQUFRLENBQUNqTCxLQUFLLENBQUN5RSxLQUFLLENBQUM7WUFDdEIsQ0FBQyxDQUFDO1lBRUYsTUFBTXlILFlBQVksR0FBRztjQUFFbE0sS0FBSztjQUFFZ0osS0FBSztjQUFFM0UsUUFBUTtjQUFFeEIsUUFBUTtjQUFFcEI7WUFBTSxDQUFFO1lBQ2pFLE1BQU0wSyxPQUFPLEdBQUcsQ0FBQ25NLEtBQUssQ0FBQzJELFFBQVEsR0FBRzZILEtBQUEsQ0FBQTlHLElBQUksR0FBR2dILFNBQUEsQ0FBQVUsWUFBWTtZQUNyRCxNQUFNN0wsSUFBSSxHQUFHa0UsS0FBSyxJQUFJcUgsVUFBVSxHQUFHSyxPQUFPLEdBQUdWLFNBQUEsQ0FBQWQsWUFBWTtZQUV6RCxPQUNDckUsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDUyxRQUFBLENBQUF3QyxXQUFXLENBQUNnQixRQUFRO2NBQUMxTCxLQUFLLEVBQUV1TDtZQUFZLEdBQ3hDNUYsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDN0gsSUFBSSxPQUFHLENBQ2M7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUErRixNQUFBLEdBQUEzRyxPQUFBO1VBU08sTUFBTTJNLFlBQVksR0FBQTlMLE9BQUEsQ0FBQThMLFlBQUEsR0FBR2hHLE1BQUEsQ0FBQXJCLE9BQUssQ0FBQ3FHLGFBQWEsQ0FBQyxJQUFxQixDQUFDO1VBQy9ELE1BQU1pQixlQUFlLEdBQUdBLENBQUEsS0FBTWpHLE1BQUEsQ0FBQXJCLE9BQUssQ0FBQ3NHLFVBQVUsQ0FBQ2UsWUFBWSxDQUFDO1VBQUM5TCxPQUFBLENBQUErTCxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVnBFLElBQUFqRyxNQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQTZNLEtBQUEsR0FBQTdNLE9BQUE7VUFDQSxJQUFBOEssV0FBQSxHQUFBOUssT0FBQTtVQUNBLElBQUE4TSxPQUFBLEdBQUE5TSxPQUFBO1VBQ0EsSUFBQTZHLE1BQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBa0osUUFBQSxHQUFBbEosT0FBQTtVQUNBLElBQUErTSxVQUFBLEdBQUEvTSxPQUFBO1VBQ0EsSUFBQWdOLE1BQUEsR0FBQWhOLE9BQUE7VUFFQSxJQUFBaU4sVUFBQSxHQUFBak4sT0FBQTtVQUVPO1VBQVcsTUFBTTRLLFNBQVMsR0FBR0EsQ0FBQztZQUFFdkssS0FBSztZQUFFd0ssU0FBUyxHQUFHO1VBQUssQ0FBK0MsS0FBSTtZQUNqSCxNQUFNLENBQUNxQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHeEcsTUFBQSxDQUFBckIsT0FBSyxDQUFDbUUsUUFBUSxDQUFVLEtBQUssQ0FBQztZQUNoRSxNQUFNLENBQUM1RSxRQUFRLEVBQUVxSCxXQUFXLENBQUMsR0FBR3ZGLE1BQUEsQ0FBQXJCLE9BQUssQ0FBQ21FLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDOUQsTUFBTSxDQUFDMkQsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzFHLE1BQUEsQ0FBQXJCLE9BQUssQ0FBQ21FLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFFNUQsTUFBTSxDQUFDNkQsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBRzVHLE1BQUEsQ0FBQXJCLE9BQUssQ0FBQ21FLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDMUMsTUFBTTtjQUNMaEcsWUFBWTtjQUNaQSxZQUFZLEVBQUU7Z0JBQUVqQztjQUFRO1lBQUUsQ0FDMUIsR0FBR25CLEtBQUs7WUFFVCxJQUFBd0csTUFBQSxDQUFBSyxTQUFTLEVBQUMsQ0FBQzdHLEtBQUssQ0FBQyxFQUFFLE1BQU1nTixVQUFVLENBQUNoTixLQUFLLENBQUM4RixlQUFlLENBQUMsQ0FBQztZQUUzRCxNQUFNcUgsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRTtZQUFLLENBQUU7WUFDcEMsTUFBTUMsU0FBUyxHQUFHLE1BQU1oQyxLQUFLLElBQUc7Y0FDL0JTLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakJULEtBQUssQ0FBQ2lDLGNBQWMsRUFBRTtjQUN0QixNQUFNbEssS0FBSyxHQUFHLE1BQU1oQyxRQUFRLENBQUNtTSxJQUFJLEVBQUU7Y0FDbkN0TixLQUFLLENBQUN3RixXQUFXLENBQUNyQyxLQUFLLENBQUM7Y0FDeEIySixZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDO2NBQ3hCaEIsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNuQixDQUFDO1lBRUQsTUFBTTBCLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0JMLE9BQU8sQ0FBQyxFQUFFLENBQUM7Y0FDWHJCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakI3TCxLQUFLLENBQUN3RixXQUFXLENBQUN5SCxJQUFJLENBQUM7WUFDeEIsQ0FBQztZQUNELE1BQU1PLFFBQVEsR0FBRyxDQUFDLENBQUNQLElBQUksQ0FBQzVELE1BQU0sR0FBR2tFLFVBQVUsR0FBR0gsU0FBUztZQUV2RCxJQUFJLENBQUMsRUFBRSxFQUFFeEgsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUNvSCxJQUFJLENBQUNRLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDUixJQUFJLENBQUNTLElBQUksRUFBRSxDQUFDckUsTUFBTSxFQUFFOEQsUUFBUSxDQUFDQSxRQUFRLEdBQUcsSUFBSTtZQUU5RyxNQUFNOUMsR0FBRyxHQUFHLG1CQUFtQjBDLE9BQU8sSUFBSXZDLFNBQVMsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFO1lBQ3RFO1lBQ0EsTUFBTTtjQUFFbUQ7WUFBTSxDQUFFLEdBQUdsQixPQUFBLENBQUF4SCxPQUFNLENBQUMySSxNQUFNLENBQUNDLE1BQU07WUFFdkMsT0FDQ3ZILE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUE7Y0FBS0ssU0FBUyxFQUFFNEI7WUFBRyxHQUNsQi9ELE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQ1MsUUFBQSxDQUFBeUQsWUFBWSxDQUFDRCxRQUFRO2NBQUMxTCxLQUFLLEVBQUU7Z0JBQUVYLEtBQUs7Z0JBQUV3TixRQUFRO2dCQUFFck0sUUFBUTtnQkFBRTJMLFlBQVk7Z0JBQUVEO2NBQVM7WUFBRSxHQUNsRmMsTUFBTSxJQUFJckgsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDdUUsTUFBQSxDQUFBbUIsV0FBVztjQUFDOUssSUFBSSxFQUFFaEQsS0FBSyxDQUFDZ0Q7WUFBSSxFQUFJLEVBQzVDc0QsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDb0UsS0FBQSxDQUFBdUIsSUFBSTtjQUFDUCxRQUFRLEVBQUVBLFFBQVE7Y0FBRS9FLFNBQVMsRUFBQztZQUFpQixHQUNwRG5DLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQ3dFLFVBQUEsQ0FBQW9CLFNBQVM7Y0FDVGhPLEtBQUssRUFBRUEsS0FBSztjQUNaaU4sSUFBSSxFQUFFQSxJQUFJO2NBQ1ZwQixXQUFXLEVBQUVBLFdBQVc7Y0FDeEJySCxRQUFRLEVBQUVBLFFBQVEsSUFBSXFJLFNBQVMsSUFBSUUsT0FBTyxJQUFJdkMsU0FBUztjQUN2RDBDLE9BQU8sRUFBRUEsT0FBTztjQUNoQkssVUFBVSxFQUFFQTtZQUFVLEVBQ3JCLEVBQ0ZqSCxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBO2NBQU1LLFNBQVMsRUFBRTtZQUFpQyxHQUNoRCxDQUFDLENBQUN3RSxJQUFJLENBQUM1RCxNQUFNLEdBQ2IvQyxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBLENBQUNxQyxXQUFBLENBQUF3RCxNQUFNO2NBQ050SCxJQUFJLEVBQUMsWUFBWTtjQUNqQitCLE9BQU8sRUFBRTZFLFVBQVU7Y0FDbkJKLFFBQVEsRUFBRUEsUUFBUSxDQUFDQSxRQUFRLElBQUluTixLQUFLLENBQUM4RjtZQUFlLEVBQ25ELEdBRUZRLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQ3NFLFVBQUEsQ0FBQXdCLGVBQWU7Y0FBQ2xPLEtBQUssRUFBRUEsS0FBSztjQUFFbU4sUUFBUSxFQUFFTixTQUFTLElBQUk3TSxLQUFLLENBQUM4RjtZQUFlLEVBQzNFLENBQ0ssQ0FDRCxDQUNnQixDQUNuQjtVQUVSLENBQUM7VUFBQ3RGLE9BQUEsQ0FBQStKLFNBQUEsR0FBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzRUYsSUFBQWpFLE1BQUEsR0FBQTNHLE9BQUE7VUFDQSxJQUFBNEcsTUFBQSxHQUFBNUcsT0FBQTtVQUNBLElBQUF3TyxNQUFBLEdBQUF4TyxPQUFBO1VBQ0EsSUFBQWtKLFFBQUEsR0FBQWxKLE9BQUE7VUFFTyxNQUFNeU8sTUFBTSxHQUFHQSxDQUFBLEtBQUs7WUFDMUIsTUFBTTtjQUFFWixRQUFRO2NBQUVyTSxRQUFRO2NBQUUyTDtZQUFZLENBQUUsR0FBRyxJQUFBakUsUUFBQSxDQUFBMEQsZUFBZSxHQUFFO1lBRTlELE1BQU04QixNQUFNLEdBQUcsTUFBTWpELEtBQUssSUFBRztjQUM1QkEsS0FBSyxDQUFDaUMsY0FBYyxFQUFFO2NBQ3RCLE1BQU1sTSxRQUFRLENBQUNtTSxJQUFJLEVBQUU7Y0FDckJSLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUNELE9BQ0N4RyxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUE2QixHQUMzQ25DLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQzdCLE1BQUEsQ0FBQStCLFVBQVU7Y0FBQ0csU0FBUyxFQUFDLFFBQVE7Y0FBQzlCLElBQUksRUFBQyxRQUFRO2NBQUMrQixPQUFPLEVBQUUyRjtZQUFNLEVBQUksRUFDaEUvSCxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBLENBQUMrRixNQUFBLENBQUFHLEtBQUs7Y0FBQ0MsTUFBTSxFQUFDO1lBQU8sRUFBRyxFQUN4QmpJLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQzdCLE1BQUEsQ0FBQStCLFVBQVU7Y0FBQzNCLElBQUksRUFBQyxNQUFNO2NBQUM4QixTQUFTLEVBQUMsUUFBUTtjQUFDRCxPQUFPLEVBQUMsU0FBUztjQUFDRSxPQUFPLEVBQUU4RTtZQUFRLEVBQUksQ0FDN0U7VUFFUixDQUFDO1VBQUNoTixPQUFBLENBQUE0TixNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJGLElBQUE5SCxNQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQTRHLE1BQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBOEssV0FBQSxHQUFBOUssT0FBQTtVQUNBLElBQUE2TyxNQUFBLEdBQUE3TyxPQUFBO1VBQ0EsSUFBQThPLE9BQUEsR0FBQTlPLE9BQUE7VUFDQSxJQUFBa0osUUFBQSxHQUFBbEosT0FBQTtVQUNBLElBQUErTyxTQUFBLEdBQUEvTyxPQUFBO1VBQ087VUFBVyxNQUFNdU8sZUFBZSxHQUFHQSxDQUFDO1lBQUVsTyxLQUFLLEVBQUU7Y0FBRW9EO1lBQVksQ0FBRTtZQUFFK0o7VUFBUSxDQUFFLEtBQUk7WUFDbkYsTUFBTTtjQUFFaE0sUUFBUTtjQUFFMEwsU0FBUztjQUFFQztZQUFZLENBQUUsR0FBRyxJQUFBNEIsU0FBQSxDQUFBbkMsZUFBZSxHQUFFO1lBQy9ELE1BQU0sQ0FBQy9ILFFBQVEsRUFBRXFILFdBQVcsQ0FBQyxHQUFHLElBQUF2RixNQUFBLENBQUE4QyxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ3VGLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUcsSUFBQXRJLE1BQUEsQ0FBQThDLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDakQsTUFBTTtjQUFFSjtZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFJLGNBQWMsR0FBRTtZQUNsQyxNQUFNNEYsVUFBVSxHQUFHLE1BQU16RCxLQUFLLElBQUc7Y0FDaEMsSUFBSTtnQkFDSEEsS0FBSyxDQUFDaUMsY0FBYyxFQUFFO2dCQUN0QnhCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1pRCxVQUFVLEdBQUcsTUFBTTNOLFFBQVEsQ0FBQzROLGNBQWMsRUFBRTtnQkFDbEQsSUFBSUQsVUFBVSxDQUFDRSxLQUFLLEtBQUssU0FBUyxFQUFFSixZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUN0RCxNQUFNek4sUUFBUSxDQUFDOE4sTUFBTSxFQUFFO2dCQUN2Qm5DLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7ZUFDeEIsQ0FBQyxPQUFPMUcsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QwRixXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsTUFBTXFELE9BQU8sR0FBRzlELEtBQUssSUFBRztjQUN2QlMsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNsQitDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUVELElBQUkvQixTQUFTLEVBQUUsT0FBT3ZHLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQ3FHLE9BQUEsQ0FBQUwsTUFBTSxPQUFHO1lBRWhDLE9BQ0M5SCxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBLENBQUE5QixNQUFBLENBQUFyQixPQUFBLENBQUFvRCxRQUFBLFFBQ0VzRyxTQUFTLElBQ1RySSxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBLENBQUNvRyxNQUFBLENBQUFXLFVBQVU7Y0FBQ0MsSUFBSSxFQUFFLElBQUk7Y0FBRUMsSUFBSSxFQUFFLElBQUk7Y0FBRUgsT0FBTyxFQUFFQSxPQUFPO2NBQUVJLFFBQVE7WUFBQSxHQUM3RGhKLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQThCLEdBQzVDbkMsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBOEIsR0FDNUNuQyxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBO2NBQU1LLFNBQVMsRUFBQztZQUFzQixHQUFFTyxLQUFLLENBQUN1RyxXQUFXLENBQUNDLEtBQUssQ0FBUSxFQUN2RWxKLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUE7Y0FBR0ssU0FBUyxFQUFDO1lBQXNCLEdBQUVPLEtBQUssQ0FBQ3VHLFdBQVcsQ0FBQzFFLEtBQUssQ0FBSyxDQUM1RCxFQUNOdkUsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDN0IsTUFBQSxDQUFBa0osSUFBSTtjQUFDaEgsU0FBUyxFQUFDLDBCQUEwQjtjQUFDOUIsSUFBSSxFQUFDO1lBQUssRUFBRyxFQUN4REwsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQTtjQUFHSyxTQUFTLEVBQUM7WUFBeUIsR0FBRU8sS0FBSyxDQUFDdUcsV0FBVyxDQUFDRyxXQUFXLENBQUssQ0FDckUsQ0FFUCxFQUNEcEosTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDcUMsV0FBQSxDQUFBd0QsTUFBTTtjQUFDdEgsSUFBSSxFQUFDLEtBQUs7Y0FBQ25DLFFBQVEsRUFBRUEsUUFBUTtjQUFFa0UsT0FBTyxFQUFFbUcsVUFBVTtjQUFFMUIsUUFBUSxFQUFFQSxRQUFRLElBQUkzSTtZQUFRLEVBQUksQ0FDNUY7VUFFTCxDQUFDO1VBQUNoRSxPQUFBLENBQUEwTixlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRGLElBQUE1SCxNQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQTZNLEtBQUEsR0FBQTdNLE9BQUE7VUFDQSxJQUFBOEssV0FBQSxHQUFBOUssT0FBQTtVQUNBLElBQUFnUSxNQUFBLEdBQUFoUSxPQUFBO1VBQ0EsSUFBQWtKLFFBQUEsR0FBQWxKLE9BQUE7VUFFTyxNQUFNaVEsTUFBTSxHQUFHQSxDQUFDO1lBQUU1TSxJQUFJO1lBQUU2TTtVQUFVLENBQUUsS0FBSTtZQUM5QyxNQUFNLENBQUNsUCxLQUFLLEVBQUVtUCxRQUFRLENBQUMsR0FBR3hKLE1BQUEsQ0FBQXJCLE9BQUssQ0FBQ21FLFFBQVEsQ0FBQ3BHLElBQUksRUFBRTJLLE1BQU0sQ0FBQztZQUN0RCxNQUFNLENBQUN0SCxLQUFLLEVBQUUwSixRQUFRLENBQUMsR0FBR3pKLE1BQUEsQ0FBQXJCLE9BQUssQ0FBQ21FLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDNEcsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzNKLE1BQUEsQ0FBQXJCLE9BQUssQ0FBQ21FLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkQsTUFBTTtjQUFFSjtZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFJLGNBQWMsR0FBRTtZQUVsQyxTQUFTaUgsWUFBWUEsQ0FBQzlFLEtBQUs7Y0FDMUIsTUFBTTtnQkFBRXpLLEtBQUssRUFBRXdQO2NBQWEsQ0FBRSxHQUFHL0UsS0FBSyxDQUFDZ0YsTUFBTTtjQUM3Q04sUUFBUSxDQUFDSyxhQUFhLENBQUM7WUFDeEI7WUFFQSxTQUFTRSxXQUFXQSxDQUFBO2NBQ25CTixRQUFRLENBQUMsS0FBSyxDQUFDO2NBQ2ZFLFVBQVUsQ0FBQyxLQUFLLENBQUM7Y0FDakJILFFBQVEsQ0FBQzlNLElBQUksRUFBRTJLLE1BQU0sQ0FBQztjQUN0QmtDLFVBQVUsRUFBRTtZQUNiO1lBRUEsTUFBTVMsWUFBWSxHQUFHLE1BQU1sRixLQUFLLElBQUc7Y0FDbENBLEtBQUssQ0FBQ2lDLGNBQWMsRUFBRTtjQUN0QjRDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDaEIsTUFBTWxLLFFBQVEsR0FBRyxNQUFNL0MsSUFBSSxDQUFDdU4sT0FBTyxDQUFDO2dCQUFFNUMsTUFBTSxFQUFFaE47Y0FBSyxDQUFFLENBQUM7Y0FDdEQsSUFBSSxDQUFDb0YsUUFBUSxDQUFDeUssTUFBTSxFQUFFVCxRQUFRLENBQUNoSyxRQUFRLENBQUNNLEtBQUssQ0FBQztjQUU5Q3NKLE1BQUEsQ0FBQWMsS0FBSyxDQUFDQyxPQUFPLENBQUMxSCxLQUFLLENBQUMyRSxNQUFNLENBQUMrQyxPQUFPLENBQUM7Y0FDbkNMLFdBQVcsRUFBRTtZQUNkLENBQUM7WUFFRCxPQUNDL0osTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDb0UsS0FBQSxDQUFBdUIsSUFBSTtjQUFDUCxRQUFRLEVBQUU4QyxZQUFZO2NBQUU3SCxTQUFTLEVBQUM7WUFBYSxHQUNuRHBDLEtBQUssSUFBSUMsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBdUIsR0FBRXBDLEtBQUssQ0FBTyxFQUM5REMsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDb0UsS0FBQSxDQUFBbUUsUUFBUTtjQUFDQyxJQUFJLEVBQUUsQ0FBQztjQUFFalEsS0FBSyxFQUFFQSxLQUFLO2NBQUVrUSxXQUFXLEVBQUMsd0JBQXdCO2NBQUNDLFFBQVEsRUFBRVo7WUFBWSxFQUFJLEVBQ2hHNUosTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxpQkFDQzlCLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQ3FDLFdBQUEsQ0FBQXdELE1BQU07Y0FBQ3RILElBQUksRUFBQyxjQUFjO2NBQUNvSyxLQUFLLEVBQUMsUUFBUTtjQUFDdkksT0FBTyxFQUFDLGNBQWM7Y0FBQ0UsT0FBTyxFQUFFMkg7WUFBVyxFQUFJLEVBQzFGL0osTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDcUMsV0FBQSxDQUFBd0QsTUFBTTtjQUFDK0MsSUFBSSxFQUFDLFFBQVE7Y0FBQ3JLLElBQUksRUFBQyxNQUFNO2NBQUMrQixPQUFPLEVBQUU0SCxZQUFZO2NBQUVTLEtBQUssRUFBQyxRQUFRO2NBQUNmLE9BQU8sRUFBRUE7WUFBTyxFQUFJLENBQ3BGLENBQ0g7VUFFVCxDQUFDO1VBQUN4UCxPQUFBLENBQUFvUCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNGLElBQUF0SixNQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQTZNLEtBQUEsR0FBQTdNLE9BQUE7VUFDQSxJQUFBOEssV0FBQSxHQUFBOUssT0FBQTtVQUNBLElBQUE0RyxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQWtKLFFBQUEsR0FBQWxKLE9BQUE7VUFFTztVQUFXLE1BQU1tTyxXQUFXLEdBQUdBLENBQUM7WUFBRTlLO1VBQUksQ0FBRSxLQUFJO1lBQ2xELE1BQU1pTyxTQUFTLEdBQUczSyxNQUFBLENBQUFyQixPQUFLLENBQUMyQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3BDLE1BQU07Y0FDTG9DLEtBQUssRUFBRTtnQkFBRWtJLFNBQVMsRUFBRWxJO2NBQUs7WUFBRSxDQUMzQixHQUFHLElBQUFILFFBQUEsQ0FBQUksY0FBYyxHQUFFO1lBQ3BCLE1BQU1rSSxTQUFTLEdBQUdBLENBQUEsS0FBTUYsU0FBUyxDQUFDakssT0FBTyxDQUFDMkgsU0FBUyxFQUFFO1lBQ3JELE1BQU1rQixVQUFVLEdBQUdBLENBQUEsS0FBTW9CLFNBQVMsQ0FBQ2pLLE9BQU8sQ0FBQ29LLEtBQUssRUFBRTtZQUVsRCxPQUNDOUssTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQTtjQUFLSyxTQUFTLEVBQUU7WUFBZ0MsR0FDL0NuQyxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBLENBQUNxQyxXQUFBLENBQUF3RCxNQUFNO2NBQUN0SCxJQUFJLEVBQUMsTUFBTTtjQUFDK0IsT0FBTyxFQUFFeUksU0FBUztjQUFFRSxJQUFJLEVBQUM7WUFBUyxFQUFHLEVBRXhEL0ssTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQTtjQUFRRyxHQUFHLEVBQUUwSSxTQUFTO2NBQUUvQixPQUFPLEVBQUVXO1lBQVUsR0FDMUN2SixNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBLENBQUM3QixNQUFBLENBQUErQixVQUFVO2NBQUMzQixJQUFJLEVBQUMsT0FBTztjQUFDOEIsU0FBUyxFQUFDLE9BQU87Y0FBQ0MsT0FBTyxFQUFFbUg7WUFBVSxFQUFJLEVBQ2xFdkosTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxpQkFDQzlCLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsYUFBS1ksS0FBSyxDQUFDa0ksU0FBUyxDQUFNLENBQ2xCLEVBQ1Q1SyxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBLGNBQ0M5QixNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBLFlBQUlZLEtBQUssQ0FBQzlFLE9BQU8sQ0FBSyxDQUNqQixFQUNOb0MsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDb0UsS0FBQSxDQUFBb0QsTUFBTTtjQUFDNU0sSUFBSSxFQUFFQSxJQUFJO2NBQUU2TSxVQUFVLEVBQUVBO1lBQVUsRUFBSSxDQUN0QyxDQUVMO1VBRVIsQ0FBQztVQUFDclAsT0FBQSxDQUFBc04sV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CRixJQUFBeEgsTUFBQSxHQUFBM0csT0FBQTtVQUNBLElBQUE2RyxNQUFBLEdBQUE3RyxPQUFBO1VBRU0sU0FBVXFPLFNBQVNBLENBQUM7WUFBRW5DLFdBQVc7WUFBRTdMLEtBQUs7WUFBRWtOLE9BQU87WUFBRUssVUFBVTtZQUFFL0ksUUFBUTtZQUFFeUk7VUFBSSxDQUFFO1lBQ3BGLE1BQU1xRSxXQUFXLEdBQUdoTCxNQUFBLENBQUFyQixPQUFLLENBQUMyQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3RDTixNQUFBLENBQUFyQixPQUFLLENBQUMyQyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNd0ksTUFBTSxHQUFHa0IsV0FBVyxDQUFDdEssT0FBTztjQUNsQ29KLE1BQU0sQ0FBQ21CLEtBQUssQ0FBQ3ZHLE1BQU0sR0FBRyxNQUFNO2NBQzVCb0YsTUFBTSxDQUFDbUIsS0FBSyxDQUFDdkcsTUFBTSxHQUFHaUMsSUFBSSxDQUFDNUQsTUFBTSxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcrRyxNQUFNLENBQUNvQixZQUFZLEdBQUcsSUFBSTtjQUM1RSxJQUFJLENBQUMsV0FBVyxFQUFFNUwsU0FBUyxDQUFDLENBQUNDLFFBQVEsQ0FBQ29ILElBQUksQ0FBQ1EsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ25FLENBQUMsRUFBRSxDQUFDUixJQUFJLENBQUMsQ0FBQztZQUVWLElBQUF6RyxNQUFBLENBQUFLLFNBQVMsRUFDUixDQUFDN0csS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKSyxVQUFVLENBQUN5RyxVQUFVLENBQUMsTUFBTXdLLFdBQVcsQ0FBQ3RLLE9BQU8sQ0FBQ3lLLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQztjQUM3RDVGLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQyxFQUNELGdCQUFnQixDQUNoQjtZQUVELE1BQU02RixnQkFBZ0IsR0FBRztjQUFFdkUsUUFBUSxFQUFFM0k7WUFBUSxDQUFFO1lBQy9DLE1BQU1tTixpQkFBaUIsR0FBR3hMLENBQUMsSUFBRztjQUM3QixNQUFNO2dCQUFFeEY7Y0FBSyxDQUFFLEdBQUd3RixDQUFDLENBQUNpSyxNQUFNO2NBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUV4SyxTQUFTLENBQUMsQ0FBQ0MsUUFBUSxDQUFDbEYsS0FBSyxDQUFDOE0sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Y0FDL0RQLE9BQU8sQ0FBQ3ZNLEtBQUssQ0FBQztZQUNmLENBQUM7WUFDRCxNQUFNaVIsYUFBYSxHQUFHekwsQ0FBQyxJQUFHO2NBQ3pCLElBQUlBLENBQUMsQ0FBQzBMLEdBQUcsS0FBSyxPQUFPLEVBQUU7Y0FDdkIsTUFBTUMsRUFBRSxHQUFHQyxTQUFTLElBQUlBLFNBQVMsR0FBRyxJQUFJO2NBQ3hDLE1BQU1wUixLQUFLLEdBQUd3RixDQUFDLENBQUNpSyxNQUFNLENBQUN6UCxLQUFLLENBQUM4TSxVQUFVLENBQUMsSUFBSSxDQUFDO2NBQzdDLElBQUksQ0FBQyxFQUFFLEVBQUU3SCxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQ2xGLEtBQUssQ0FBQyxFQUFFO2NBQzNDd0YsQ0FBQyxDQUFDNkwsUUFBUSxHQUFHOUUsT0FBTyxDQUFDNEUsRUFBRSxDQUFDLEdBQUd2RSxVQUFVLEVBQUU7WUFDeEMsQ0FBQztZQUVELE9BQ0NqSCxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBO2NBQUEsR0FDS3NKLGdCQUFnQjtjQUNwQmQsSUFBSSxFQUFFLENBQUM7Y0FDUGpRLEtBQUssRUFBRXNNLElBQUk7Y0FDWDZELFFBQVEsRUFBRWEsaUJBQWlCO2NBQzNCTSxTQUFTLEVBQUVMLGFBQWE7Y0FDeEJNLFNBQVMsRUFBRSxJQUFJO2NBQ2Z6SixTQUFTLEVBQUMsaUJBQWlCO2NBQzNCRixHQUFHLEVBQUUrSTtZQUFXLEVBQ2Y7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0EsSUFBQWhMLE1BQUEsR0FBQTNHLE9BQUE7VUFDQSxJQUFBd1MsU0FBQSxHQUFBeFMsT0FBQTtVQUZBOztVQVFNLFNBQVUyTyxLQUFLQSxDQUFDO1lBQUVDO1VBQU0sQ0FBYztZQUMzQyxNQUFNNkQsU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDdk0sUUFBUSxDQUFDMEksTUFBTSxDQUFDO1lBQ3ZELE1BQU04RCxPQUFPLEdBQUc5RCxNQUFNLEtBQUssU0FBUztZQUNwQyxNQUFNLENBQUMrRCxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUMsR0FBRyxJQUFBTixTQUFBLENBQUFPLFFBQVEsRUFBQ04sU0FBUyxFQUFFQyxPQUFPLENBQUM7WUFDNUUsTUFBTU0sV0FBVyxHQUFHSCxPQUFPLENBQUNJLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUN2RCxNQUFNQyxlQUFlLEdBQUdQLE9BQU8sQ0FBQ0ssUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQzNELE9BQ0N2TSxNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUEwQixHQUN4Q25DLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsZUFBTyxHQUFHMEssZUFBZSxFQUFFLEUsSUFBUyxFQUNwQ3hNLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsZUFBTyxHQUFHdUssV0FBVyxFQUFFLENBQVEsQ0FDMUI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQXJNLE1BQUEsR0FBQTNHLE9BQUE7VUFEQTs7VUFFQSxNQUFNO1lBQUV5SixRQUFRO1lBQUV4QjtVQUFTLENBQUUsR0FBR3RCLE1BQUEsQ0FBQXJCLE9BQUs7VUFFL0IsU0FBVXlOLFFBQVFBLENBQUNOLFNBQWtCLEVBQUVDLE9BQWdCO1lBQzVELE1BQU0sQ0FBQ1UsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBRzVKLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFbkN4QixTQUFTLENBQUMsTUFBSztjQUNkLElBQUlxTCxVQUEwQjtjQUU5QixJQUFJYixTQUFTLEVBQUU7Z0JBQ2RhLFVBQVUsR0FBR0MsV0FBVyxDQUFDLE1BQUs7a0JBQzdCRixPQUFPLENBQUNHLFFBQVEsSUFBSUEsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztjQUdULE9BQU8sTUFBSztnQkFDWEMsYUFBYSxDQUFDSCxVQUFVLENBQUM7Y0FDMUIsQ0FBQztZQUNGLENBQUMsRUFBRSxDQUFDYixTQUFTLENBQUMsQ0FBQztZQUVmeEssU0FBUyxDQUFDLE1BQUs7Y0FDZCxJQUFJeUssT0FBTyxFQUFFO2dCQUNaVyxPQUFPLENBQUMsQ0FBQyxDQUFDOztZQUVaLENBQUMsRUFBRSxDQUFDWCxPQUFPLENBQUMsQ0FBQztZQUViLE1BQU1JLFlBQVksR0FBR00sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLE1BQU1QLE9BQU8sR0FBR2EsSUFBSSxDQUFDQyxLQUFLLENBQUVQLElBQUksR0FBRyxHQUFHLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNUixPQUFPLEdBQUdjLElBQUksQ0FBQ0MsS0FBSyxDQUFFUCxJQUFJLEdBQUcsSUFBSSxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTVQsS0FBSyxHQUFHZSxJQUFJLENBQUNDLEtBQUssQ0FBQ1AsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFekMsT0FBTyxDQUFDVCxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUM7VUFDL0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFuTSxNQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQTRULFFBQUEsR0FBQTVULE9BQUE7VUFDQSxJQUFBOEssV0FBQSxHQUFBOUssT0FBQTtVQUNBLElBQUE0RyxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQW1CLFFBQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBNlQsWUFBQSxHQUFBN1QsT0FBQTtVQUNBLElBQUE4VCxPQUFBLEdBQUE5VCxPQUFBO1VBRU0sU0FBVXlNLFlBQVlBLENBQUE7WUFDM0IsU0FBU3NILFVBQVVBLENBQUE7Y0FDbEJILFFBQUEsQ0FBQUksU0FBUyxDQUFDQyxXQUFXLEdBQUcsSUFBSTtZQUM3QjtZQUVBLElBQUksQ0FBQzlTLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQzBDLEtBQUssRUFBRSxPQUFPNkIsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDb0wsWUFBQSxDQUFBSyxhQUFhLE9BQUc7WUFDL0MsT0FDQ3ZOLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQWtCLEdBQ2hDbkMsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQTtjQUFLMEwsR0FBRyxFQUFDLHVCQUF1QjtjQUFDQyxHQUFHLEVBQUM7WUFBZ0IsRUFBRyxFQUN4RHpOLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUE7Y0FBTUssU0FBUyxFQUFDO1lBQXFCLEdBQ3BDbkMsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxDQUFDN0IsTUFBQSxDQUFBa0osSUFBSTtjQUFDOUksSUFBSSxFQUFFOE0sT0FBQSxDQUFBTyxLQUFLLENBQUMsZUFBZSxDQUFDO2NBQUV2TCxTQUFTLEVBQUM7WUFBbUIsRUFBRyxFQUNwRW5DLE1BQUEsQ0FBQXJCLE9BQUEsQ0FBQW1ELGFBQUEsOEJBQXVCLEVBQ3ZCOUIsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxZQUNDOUIsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxvRUFBaUUsRSxLQUFDOUIsTUFBQSxDQUFBckIsT0FBQSxDQUFBbUQsYUFBQSxZQUFNLEUsbURBRXJFLEVBQ0o5QixNQUFBLENBQUFyQixPQUFBLENBQUFtRCxhQUFBLENBQUNxQyxXQUFBLENBQUF3RCxNQUFNO2NBQUN0SCxJQUFJLEVBQUMsTUFBTTtjQUFDK0IsT0FBTyxFQUFFZ0wsVUFBVTtjQUFFM0MsS0FBSyxFQUFDO1lBQWdCLEVBQUcsQ0FDNUQsQ0FDRjtVQUVSIn0=