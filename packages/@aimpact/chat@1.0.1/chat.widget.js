System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.3/toast", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/collapsible", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/preload", "pragmate-ui@0.0.3/form", "pragmate-ui@0.0.3/components", "@aimpact/ailearn-app@0.0.11/config", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/image", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Chat, ChatInput, RecordingButton, SystemModal, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
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
    }, function (_aimpactChat101SharedIcons) {
      dependency_13 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi003Toast) {
      dependency_14 = _pragmateUi003Toast;
    }, function (_aimpactChatSdk100Session) {
      dependency_15 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_16 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_17 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactChat101SharedHooks) {
      dependency_18 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Collapsible) {
      dependency_19 = _pragmateUi003Collapsible;
    }, function (_aimpactChat101SharedComponents) {
      dependency_20 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi003Preload) {
      dependency_21 = _pragmateUi003Preload;
    }, function (_pragmateUi003Form) {
      dependency_22 = _pragmateUi003Form;
    }, function (_pragmateUi003Components) {
      dependency_23 = _pragmateUi003Components;
    }, function (_aimpactAilearnApp0011Config) {
      dependency_24 = _aimpactAilearnApp0011Config;
    }, function (_pragmateUi003Modal) {
      dependency_25 = _pragmateUi003Modal;
    }, function (_pragmateUi003Image) {
      dependency_26 = _pragmateUi003Image;
    }, function (_aimpactChat101UiManager) {
      dependency_27 = _aimpactChat101UiManager;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/chat",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/voice', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/core', dependency_8], ['@aimpact/chat/extensions', dependency_9], ['react', dependency_10], ['pragmate-ui/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/icons', dependency_13], ['pragmate-ui/toast', dependency_14], ['@aimpact/chat-sdk/session', dependency_15], ['@aimpact/chat-sdk/widgets/playable', dependency_16], ['@bgroup/media-manager/audio-player', dependency_17], ['@aimpact/chat/shared/hooks', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['@aimpact/chat/shared/components', dependency_20], ['pragmate-ui/preload', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/components', dependency_23], ['@aimpact/chat/config', dependency_24], ['pragmate-ui/modal', dependency_25], ['pragmate-ui/image', dependency_26], ['@aimpact/chat/ui/manager', dependency_27]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-wd-page",
        "vspecifier": "@aimpact/chat@1.0.1/chat.widget",
        "is": "page",
        "route": "/chat/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/chat.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1640501917,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              globalThis.store = this.#store;
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load(this.uri.vars.get('id'));
            }
            hide() {
              this.#store.clean();
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
        hash: 1326550910,
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
            constructor() {
              super();
              this.reactiveProps(['waitingResponse', 'autoplay']);
              this.autoplay = true;
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
              exts.forEach((extension, index) => {});
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
        hash: 597260999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Content = Content;
          var _react = require("react");
          var _useExtension = require("./use-extension");
          var _messages = require("./messages");
          var _context = require("../context");
          var _extensionRenderer = require("./extension-renderer");
          function Content({
            separator
          }) {
            const {
              store
            } = (0, _context.useChatContext)();
            const [ref, ready, webComponentName] = (0, _useExtension.useExtension)('chat-intro');
            return _react.default.createElement("div", {
              className: 'chat__content'
            }, _react.default.createElement(_extensionRenderer.ExtensionRenderer, {
              component: webComponentName,
              reference: ref
            }), ready && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_messages.Messages, {
              separator: separator
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
        hash: 2556013959,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _context = require("../context");
          var _header = require("../header");
          var _input = require("../input");
          var _BackArrow = require("./BackArrow");
          var _content = require("./content");
          const {
            useRef
          } = _react.default;
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
            }, _react.default.createElement(_header.Header, {
              reader: reader,
              setReader: setReader
            }), _react.default.createElement(_content.Content, {
              separator: separator
            }), _react.default.createElement(_BackArrow.BackArrow, {
              store: store,
              separator: separator
            }), !chatIntro?.metadata?.avoidChat && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: 'send'
            }, _react.default.createElement(_input.ChatInput, {
              store: store
            }))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/chat/messages/answering
      ***********************************************/

      ims.set('./views/chat/messages/answering', {
        hash: 3485726235,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemAnswering = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/shared/icons");
          const SystemAnswering = () => {
            return _react.default.createElement("div", {
              className: 'message answering'
            }, _react.default.createElement(_icons.Icon, {
              className: 'lg',
              icon: _icons2.ICONS['ai-profile']
            }), _react.default.createElement("div", {
              className: 'dot-animation'
            }, _react.default.createElement("span", {
              className: 'dot'
            }), _react.default.createElement("span", {
              className: 'dot'
            }), _react.default.createElement("span", {
              className: 'dot'
            })));
          };
          exports.SystemAnswering = SystemAnswering;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/chat/messages/index
      *******************************************/

      ims.set('./views/chat/messages/index', {
        hash: 901449763,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = Messages;
          var _react = require("react");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _answering = require("./answering");
          var _message = require("./message");
          function Messages({
            separator
          }) {
            const {
              store
            } = (0, _context.useChatContext)();
            const [totalMessages, setMessages] = _react.default.useState(store.messages.length ?? [].length);
            (0, _hooks.useBinder)([store], () => {
              setMessages(store.messages.length);
            }, 'new.message');
            const output = store.messages.map((message, i) => {
              const last = i === totalMessages - 1;
              return _react.default.createElement(_message.Message, {
                key: `message-${i}`,
                separator: separator,
                message: message,
                last: last
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, output, store.waitingResponse && _react.default.createElement(_answering.SystemAnswering, null));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./views/chat/messages/message/actions/index
      ***********************************************************/

      ims.set('./views/chat/messages/message/actions/index', {
        hash: 2868888739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageActions = MessageActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../../../context");
          var _toast = require("pragmate-ui/toast");
          function MessageActions({
            message,
            text,
            messageTokens,
            play = true
          }) {
            const {
              store,
              player
            } = (0, _context.useChatContext)();
            const [action, setAction] = _react.default.useState('stop');
            const [processing, setProcessing] = _react.default.useState(false);
            (0, _hooks.useBinder)([player], () => setProcessing(player.speaking));
            const onChange = () => {
              setProcessing(false);
              setAction('');
            };
            (0, _hooks.useBinder)([player], onChange, 'on.finish');
            const onPlay = async ({
              listen
            }) => {
              setAction('play');
              store.currentMessage = message;
              player.positionToCut = 0;
              await player.play(text, message.id);
            };
            const onPause = async ({
              listen
            }) => {
              await player.stop();
              setAction('stop');
              setProcessing(false);
            };
            const copyMessage = async () => {
              await globalThis?.navigator.clipboard.writeText(text);
              _toast.toast.success('Message copied to clipboard');
            };
            const disabled = {
              disabled: true
            };
            const apply = store.currentMessage?.id === message?.id && processing;
            const icon = apply || action === 'play' ? 'stop' : 'play';
            const onClick = apply || action === 'play' ? onPause : onPlay;
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: 'audio__actions'
            }, _react.default.createElement(_icons.IconButton, {
              onClick: copyMessage,
              icon: 'copy'
            }), play && _react.default.createElement(_icons.IconButton, {
              onClick: onClick,
              "data-listen": 'api',
              icon: icon
            })), messageTokens && _react.default.createElement("div", {
              className: 'tokens overline'
            }, messageTokens, " TOKENS"));
          }
        }
      });

      /*********************************************************************
      INTERNAL MODULE: ./views/chat/messages/message/components/profile-icon
      *********************************************************************/

      ims.set('./views/chat/messages/message/components/profile-icon', {
        hash: 2612644713,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _icons2 = require("@aimpact/chat/shared/icons");
          function ProfileIcon({
            role
          }) {
            const [loadError, setLoadError] = (0, _react.useState)(false);
            const icon = role === 'user' ? 'user' : 'ai-profile';
            const userProps = _session.sessionWrapper.user.getProperties();
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement(_react.default.Fragment, null, userProps.photoURL && role === 'user' && !loadError ? _react.default.createElement("img", {
              alt: 'user image profile',
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.Icon, {
              className: 'lg',
              icon: _icons2.ICONS[icon] ?? icon
            }));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/chat/messages/message/components/text
      *************************************************************/

      ims.set('./views/chat/messages/message/components/text', {
        hash: 308414729,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _context = require("../../../../context");
          var _audioPlayer = require("@bgroup/media-manager/audio-player");
          function MessageText({
            message,
            playable
          }) {
            const {
              store,
              autoplay,
              player,
              texts
            } = (0, _context.useChatContext)();
            const text = message?.content ?? '';
            const ref = _react.default.useRef(null);
            const removeHighlight = () => ref.current.querySelectorAll('.highlight').forEach(element => element.classList.remove('highlight'));
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const onClickWord = event => store.currentMessage = message;
            const canBePlayed = message && message.role !== 'user' && autoplay;
            const autoplayValue = message.id === store.currentMessage?.id && canBePlayed;
            return _react.default.createElement("div", {
              className: 'message-text__container',
              ref: ref
            }, text && _react.default.createElement(_playable.Playable, {
              content: text,
              toolTexts: texts.tools,
              playable: playable,
              id: message.id,
              onClickWord: onClickWord,
              player: player,
              autoplay: autoplayValue && canBePlayed
            }), message.audio && _react.default.createElement(_audioPlayer.AudioPlayer, {
              src: message.audio,
              convert: true
            }));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/chat/messages/message/context
      *****************************************************/

      ims.set('./views/chat/messages/message/context', {
        hash: 4149788362,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatMessageContext = exports.ChatMessageContext = void 0;
          var _react = require("react");
          const ChatMessageContext = exports.ChatMessageContext = _react.default.createContext({});
          const useChatMessageContext = () => _react.default.useContext(ChatMessageContext);
          exports.useChatMessageContext = useChatMessageContext;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/chat/messages/message/index
      ***************************************************/

      ims.set('./views/chat/messages/message/index', {
        hash: 2599997643,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _text = require("./components/text");
          var _actions = require("./actions");
          var _profileIcon = require("./components/profile-icon");
          var _context = require("../../../context");
          var _systemActions = require("./system-actions");
          function MessageComponent({
            separator,
            message
          }) {
            const [content, setContent] = _react.default.useState(message?.content ?? '');
            /**
             * this state is only used for responses
             */
            const [finished, setFinished] = _react.default.useState(true);
            const cls = `message ${message.role}`;
            const messageTokens = message.role === 'assistant' ? message.usage?.totalTokens : null;
            const {
              store
            } = (0, _context.useChatContext)();
            const ACTIONS = ['transcription', 'fetching-tool-data', 'kb-processed-response', 'function', 'kb-response'];
            const [blocks, playableContent, actions] = (0, _playable.parseText)(message.id, message.content, ACTIONS);
            const scrollToBottom = () => {
              separator.current?.scrollIntoView({
                block: 'end',
                behavior: 'smooth'
              });
            };
            (0, _hooks.useBinder)([store], () => {
              setFinished(false);
              setContent(store.response.content);
              scrollToBottom();
            }, `message.${message.id}.updated`);
            (0, _hooks.useBinder)([message], () => {
              setContent(store?.response?.content ?? '');
            });
            (0, _hooks.useBinder)([store], () => {
              setContent(store.response.content);
              setFinished(true);
            }, `message.${message.id}.received`);
            return _react.default.createElement("div", {
              className: cls,
              "data-id": message.id
            }, _react.default.createElement("section", {
              className: 'picture__container'
            }, _react.default.createElement(_profileIcon.ProfileIcon, {
              role: message.role
            })), _react.default.createElement("section", {
              className: 'message__container'
            }, _react.default.createElement(_systemActions.SystemActions, {
              actions: actions
            }), _react.default.createElement(_text.MessageText, {
              playable: finished,
              message: message
            })), _react.default.createElement("section", {
              className: 'message__actions'
            }, _react.default.createElement(_actions.MessageActions, {
              play: !message.audio,
              message: message,
              text: playableContent,
              messageTokens: messageTokens
            })));
          }
          const Message = exports.Message = _react.default.memo(MessageComponent);
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./views/chat/messages/message/system-actions/action
      *******************************************************************/

      ims.set('./views/chat/messages/message/system-actions/action', {
        hash: 1817745710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Action = Action;
          var _react = require("react");
          var _context = require("../../../../context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _collapsible = require("pragmate-ui/collapsible");
          /**
           * Possible actions:
           *  - 'transcription',
           *  - 'fetching-tool-data',
           *  - 'kb-processed-response',
           *  - 'function', 'kb-response'
           * @param param0
           * @returns
           */
          function Action({
            last = false,
            data: {
              type,
              data
            }
          }) {
            const mark = (0, _hooks.useMarked)();
            const {
              texts: {
                systemActions: texts
              }
            } = (0, _context.useChatContext)();
            const Container = ({
              title,
              children
            }) => {
              const attrs = {
                className: `message-action ${type}${last ? ' last-action' : ''}`
              };
              const Container = last ? _collapsible.CollapsibleHeader : _react.default.Fragment;
              return _react.default.createElement("div", {
                ...attrs
              }, _react.default.createElement(Container, null, _react.default.createElement("header", null, _react.default.createElement("h4", null, title)), _react.default.createElement("section", {
                className: 'detail__content'
              }, children)));
            };
            if (type === 'fetching-tool-data') {
              return _react.default.createElement(Container, {
                title: texts[type]
              });
            }
            if (type === 'kb-response') {
              const output = data.matches.map(item => _react.default.createElement("li", {
                key: item.id
              }, item.paragraph));
              return _react.default.createElement(Container, {
                title: texts[type]
              }, _react.default.createElement("ul", null, output));
            }
            if (type === 'kb-processed-response') {
              return _react.default.createElement(Container, {
                title: texts[type]
              }, _react.default.createElement("div", {
                dangerouslySetInnerHTML: {
                  __html: mark(data.response)
                }
              }));
            }
            if (type === 'transcription') {
              return _react.default.createElement(Container, {
                title: texts.transcription
              }, _react.default.createElement("p", null, data.transcription));
            }
            if (type === 'function' && data.name === 'kb') {
              try {
                const {
                  text
                } = JSON.parse(data.params);
                return _react.default.createElement(Container, {
                  title: texts.functions[data.name]
                }, _react.default.createElement("p", null, text));
              } catch (e) {
                console.error(e);
              }
            }
            return _react.default.createElement("div", {
              className: `message-action ${type}`
            }, type);
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./views/chat/messages/message/system-actions/index
      ******************************************************************/

      ims.set('./views/chat/messages/message/system-actions/index', {
        hash: 1233391025,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemActions = SystemActions;
          var _react = require("react");
          var _action = require("./action");
          var _collapsible = require("pragmate-ui/collapsible");
          function SystemActions({
            actions
          }) {
            if (!actions?.length) return null;
            const last = actions[actions.length - 1];
            return _react.default.createElement("section", {
              className: 'message-actions__container'
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_action.Action, {
              data: last,
              last: true
            }), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("section", {
              className: 'actions__log'
            }, actions.map((action, i) => _react.default.createElement(_action.Action, {
              key: `action-${i}`,
              data: action
            }))))));
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

      /************************************
      INTERNAL MODULE: ./views/header/index
      ************************************/

      ims.set('./views/header/index', {
        hash: 1140598616,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function Header({
            reader,
            setReader
          }) {
            const {
              store
            } = (0, _context.useChatContext)();
            const [search, setSearch] = (0, _react.useState)('');
            const [autoplay, setAutoplay] = (0, _react.useState)(store.autoplay);
            const [collapsed, setCollapsed] = (0, _react.useState)();
            const handleAutoplayToggle = () => {
              store.autoplay = !store.autoplay;
            };
            (0, _hooks.useBinder)([store], () => setAutoplay(store.autoplay));
            const handleChatSearch = e => {
              e.preventDefault();
              setSearch(e.target.value);
            };
            const onReader = () => {
              setReader(!reader);
              setCollapsed(true);
            };
            return _react.default.createElement(_components.CollapsibleHeader, {
              title: store.chat.name ?? 'Untitled',
              collapsed: collapsed
            }, _react.default.createElement("div", {
              className: 'chat__header'
            }, _react.default.createElement("div", {
              className: 'chat__detail__container'
            }, _react.default.createElement(_icons.Icon, {
              icon: 'folder'
            }), _react.default.createElement("span", null, store.selectedKbPath)), _react.default.createElement("div", {
              className: 'chat__detail__container'
            }, _react.default.createElement(_icons.Icon, {
              icon: 'planet'
            }), _react.default.createElement("span", null, store.selectedModel)), _react.default.createElement(_components.Input, {
              name: 'chat',
              label: 'Search in chat',
              value: search,
              onChange: handleChatSearch,
              required: true,
              type: 'search'
            }), _react.default.createElement("div", null, _react.default.createElement(_icons.Icon, {
              icon: autoplay ? 'speaker' : 'speaker-off',
              className: 'circle speaker',
              onClick: handleAutoplayToggle
            }), _react.default.createElement(_icons.IconButton, {
              className: 'circle',
              variant: 'primary',
              icon: 'eye',
              onClick: onReader
            }))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2611045387,
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
            (0, _hooks.useBinder)([store], () => {
              setFetching(store.fetching);
              setReady(store.ready);
            });
            const contextValue = {
              store,
              texts,
              autoplay: store.autoplay,
              messages: store.messages,
              player: store.audioManager.player
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
        hash: 2363558554,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _player = require("./player");
          var _context = require("./context");
          var _modal = require("pragmate-ui/modal");
          var _image = require("pragmate-ui/image");
          var _context2 = require("../context");
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
            } = (0, _context.useInputContext)();
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [showModal, setShowModal] = (0, _react.useState)(false);
            const {
              texts
            } = (0, _context2.useChatContext)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsIiwiX3ZvaWNlIiwiX3dyYXBwZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImN1cnJlbnRQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImxhbmd1YWdlIiwiQXBwV3JhcHBlciIsInJhdGUiLCJhdWRpb1NwZWVkIiwib24iLCJMaXN0ZW5BcHBDaGFuZ2VzIiwic2V0IiwibGFuZ3V1YWdlIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwidHJpZ2dlciIsIl9jb3JlIiwiX2F1ZGlvIiwiX2V4dGVuc2lvbnMiLCJtZXNzYWdlcyIsIkVYVEVOU0lPTlMiLCJjYXRlZ29yeSIsImNoYXQiLCJjaGF0cyIsIml0ZW1zIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJrYnMiLCJrbm93bGVkZ2VCb3hlcyIsInNlbGVjdGVkS2IiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsImlkIiwicGF0aCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZSIsImV4dGVuc2lvbnMiLCJNYXAiLCJhdXRvcGxheSIsImZldGNoaW5nIiwicmVhZHkiLCJDaGF0IiwiaXNSZWFkeSIsImxvYWRBbGwiLCJjdXJyZW50Q2hhdCIsImZvdW5kIiwia25vd2xlZGVCb3hTZWxlY3RlZCIsImtub3dsZWRnZUJveElkIiwiZGVmYXVsdCIsInRyaWdnZXJFdmVudCIsImV4dHMiLCJtZXRhZGF0YSIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNlbmRNZXNzYWdlIiwiY29udGVudCIsInBlcmZvcm1hbmNlIiwibWFyayIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwid2FpdGluZ1Jlc3BvbnNlIiwicmVzcG9uc2UiLCJvbkxpc3RlbiIsIm9uRW5kIiwib2ZmIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9yZWFjdCIsIl9pY29ucyIsIl9ob29rcyIsIkJhY2tBcnJvdyIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiaXNJbkNvbnRhaW5lciIsImNvbnRhaW5lciIsInBhcmVudE5vZGUiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZW5kUmVjdCIsInRocmVzaG9sZCIsImJvdHRvbSIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInZpc2libGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkljb25CdXR0b24iLCJyZWYiLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIl91c2VFeHRlbnNpb24iLCJfbWVzc2FnZXMiLCJfY29udGV4dCIsIl9leHRlbnNpb25SZW5kZXJlciIsIkNvbnRlbnQiLCJ1c2VDaGF0Q29udGV4dCIsIndlYkNvbXBvbmVudE5hbWUiLCJ1c2VFeHRlbnNpb24iLCJFeHRlbnNpb25SZW5kZXJlciIsImNvbXBvbmVudCIsInJlZmVyZW5jZSIsIk1lc3NhZ2VzIiwiQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsIl9oZWFkZXIiLCJfaW5wdXQiLCJfQmFja0Fycm93IiwiX2NvbnRlbnQiLCJjaGF0SW50cm8iLCJyZWFkZXIiLCJzZXRSZWFkZXIiLCJ1c2VTdGF0ZSIsImNscyIsIkhlYWRlciIsImF2b2lkQ2hhdCIsIkNoYXRJbnB1dCIsIl9pY29uczIiLCJTeXN0ZW1BbnN3ZXJpbmciLCJJY29uIiwiSUNPTlMiLCJfYW5zd2VyaW5nIiwiX21lc3NhZ2UiLCJ0b3RhbE1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJsZW5ndGgiLCJvdXRwdXQiLCJtYXAiLCJsYXN0IiwiTWVzc2FnZSIsImtleSIsIl90b2FzdCIsIk1lc3NhZ2VBY3Rpb25zIiwidGV4dCIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwicG9zaXRpb25Ub0N1dCIsIm9uUGF1c2UiLCJzdG9wIiwiY29weU1lc3NhZ2UiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkaXNhYmxlZCIsImFwcGx5IiwiX3Nlc3Npb24iLCJQcm9maWxlSWNvbiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJhbHQiLCJzcmMiLCJvbkVycm9yIiwiX3BsYXlhYmxlIiwiX2F1ZGlvUGxheWVyIiwiTWVzc2FnZVRleHQiLCJwbGF5YWJsZSIsInRleHRzIiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJvbkNsaWNrV29yZCIsImV2ZW50IiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiUGxheWFibGUiLCJ0b29sVGV4dHMiLCJ0b29scyIsIkF1ZGlvUGxheWVyIiwiY29udmVydCIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RleHQiLCJfYWN0aW9ucyIsIl9wcm9maWxlSWNvbiIsIl9zeXN0ZW1BY3Rpb25zIiwiTWVzc2FnZUNvbXBvbmVudCIsInNldENvbnRlbnQiLCJmaW5pc2hlZCIsInNldEZpbmlzaGVkIiwidXNhZ2UiLCJ0b3RhbFRva2VucyIsIkFDVElPTlMiLCJibG9ja3MiLCJwbGF5YWJsZUNvbnRlbnQiLCJhY3Rpb25zIiwicGFyc2VUZXh0IiwiU3lzdGVtQWN0aW9ucyIsIm1lbW8iLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJkYXRhIiwidHlwZSIsInVzZU1hcmtlZCIsInN5c3RlbUFjdGlvbnMiLCJDb250YWluZXIiLCJ0aXRsZSIsImNoaWxkcmVuIiwiYXR0cnMiLCJDb2xsYXBzaWJsZUhlYWRlciIsIm1hdGNoZXMiLCJpdGVtIiwicGFyYWdyYXBoIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJ0cmFuc2NyaXB0aW9uIiwicGFyc2UiLCJwYXJhbXMiLCJmdW5jdGlvbnMiLCJfYWN0aW9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJfY29tcG9uZW50cyIsIl9wcmVsb2FkIiwiQ2hhdFNrZWxldG9uIiwiUHJlbG9hZCIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0UmVhZHkiLCJjb250cm9sIiwib25SZWFkeSIsIkNoYXRDb250ZXh0Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2V0QXV0b3BsYXkiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJoYW5kbGVBdXRvcGxheVRvZ2dsZSIsImhhbmRsZUNoYXRTZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm9uUmVhZGVyIiwiSW5wdXQiLCJsYWJlbCIsInJlcXVpcmVkIiwiX2NoYXQiLCJfc2tlbGV0b24iLCJfbm90Rm91bmQiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0Iiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJjb250ZXh0VmFsdWUiLCJDb250cm9sIiwiQ2hhdE5vdEZvdW5kIiwiUHJvdmlkZXIiLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dENvbnRleHQiLCJfZm9ybSIsIl9jb25maWciLCJfcmVjb3JkaW5nIiwiX2luZGV4IiwiX3RleHRJbnB1dCIsImlzV2FpdGluZyIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwic2V0VGV4dCIsInNlbmRBdWRpbyIsImhhbmRsZVNlbmQiLCJvblN1Ym1pdCIsInJlcGxhY2VBbGwiLCJ0cmltIiwic3lzdGVtIiwiY29uZmlnIiwiU3lzdGVtTW9kYWwiLCJGb3JtIiwiVGV4dElucHV0IiwiQnV0dG9uIiwiUmVjb3JkaW5nQnV0dG9uIiwiX3RpbWVyIiwiUGxheWVyIiwiY2FuY2VsIiwiVGltZXIiLCJfcGxheWVyIiwiX21vZGFsIiwiX2ltYWdlIiwiX2NvbnRleHQyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicGxheUFjdGlvbiIsInBlcm1pc3Npb24iLCJoYXNQZXJtaXNzaW9ucyIsInN0YXRlIiwicmVjb3JkIiwib25DbG9zZSIsIk1vZGFsIiwib3BlbiIsInBlcm1pc3Npb25zIiwiSW1hZ2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsIlVJRm9ybSIsImNsb3NlTW9kYWwiLCJzZXRWYWx1ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0QXJlYVZhbHVlIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJwdWJsaXNoIiwic3RhdHVzIiwiVGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJkaWFsb2dSZWYiLCJhc3Npc3RhbnQiLCJvcGVuTW9kYWwiLCJjbG9zZSIsIm1vZGUiLCJ0ZXh0QXJlYVJlZiIsInN0eWxlIiwic2Nyb2xsSGVpZ2h0IiwiZm9jdXMiLCJkaXNhYmxlZFRleHRhcmVhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciIsIl9tYW5hZ2VyIiwiX2NvbXBvbmVudHMyIiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiUHJlbG9hZFNjcmVlbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXdzL2NoYXQvQmFja0Fycm93LnRzeCIsIi90cy92aWV3cy9jaGF0L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NoYXQvZXh0ZW5zaW9uLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL2Fuc3dlcmluZy50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvdGV4dC50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbnRleHQudHMiLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvdXNlLWV4dGVuc2lvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCIvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90ZXh0LWlucHV0LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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