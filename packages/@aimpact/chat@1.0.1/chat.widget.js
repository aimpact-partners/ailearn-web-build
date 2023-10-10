System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.0.37/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.37/toast", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.37/preload", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/form", "pragmate-ui@0.0.37/components", "@aimpact/ailearn-app@0.0.2/config", "pragmate-ui@0.0.37/modal", "pragmate-ui@0.0.37/image", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, Controller, AudioManager, Chat, ChatInput, RecordingButton, SystemModal, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
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
    }, function (_pragmateUi0037Icons) {
      dependency_11 = _pragmateUi0037Icons;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_12 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedIcons) {
      dependency_13 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi0037Toast) {
      dependency_14 = _pragmateUi0037Toast;
    }, function (_aimpactChatSdk100Session) {
      dependency_15 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_16 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_17 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactChat101SharedComponents) {
      dependency_18 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi0037Preload) {
      dependency_19 = _pragmateUi0037Preload;
    }, function (_aimpactChat101SharedHooks) {
      dependency_20 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0037Form) {
      dependency_21 = _pragmateUi0037Form;
    }, function (_pragmateUi0037Components) {
      dependency_22 = _pragmateUi0037Components;
    }, function (_aimpactAilearnApp002Config) {
      dependency_23 = _aimpactAilearnApp002Config;
    }, function (_pragmateUi0037Modal) {
      dependency_24 = _pragmateUi0037Modal;
    }, function (_pragmateUi0037Image) {
      dependency_25 = _pragmateUi0037Image;
    }, function (_aimpactChat101UiManager) {
      dependency_26 = _aimpactChat101UiManager;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/voice', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@bgroup/media-manager/recorder', dependency_7], ['@aimpact/chat-sdk/core', dependency_8], ['@aimpact/chat/extensions', dependency_9], ['react', dependency_10], ['pragmate-ui/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/icons', dependency_13], ['pragmate-ui/toast', dependency_14], ['@aimpact/chat-sdk/session', dependency_15], ['@aimpact/chat-sdk/widgets/playable', dependency_16], ['@bgroup/media-manager/audio-player', dependency_17], ['@aimpact/chat/shared/components', dependency_18], ['pragmate-ui/preload', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['pragmate-ui/form', dependency_21], ['pragmate-ui/components', dependency_22], ['@aimpact/chat/config', dependency_23], ['pragmate-ui/modal', dependency_24], ['pragmate-ui/image', dependency_25], ['@aimpact/chat/ui/manager', dependency_26]]);
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
        hash: 1495139345,
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
              web: new _voice.Voice(),
              lab: new _voice.VoiceLab()
            };
            #player = 'web';
            get player() {
              return this.#players[this.#player];
            }
            constructor(parent) {
              super({});
              this.#recorder = new _recorder.Recorder();
              this.#parent = parent;
              this.reactiveProps(['autoplay']);
              // AppWrapper.on('app.settings.change', this.ListenAppChanges);
            }

            ListenAppChanges = () => {
              this.#players.web.set({
                rate: _wrapper.AppWrapper.audioSpeed
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
        hash: 507758095,
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
            //<div onClick={onClick} dangerouslySetInnerHTML={{ __html: content }} />
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
          const ChatMessageContext = _react.default.createContext({});
          exports.ChatMessageContext = ChatMessageContext;
          const useChatMessageContext = () => _react.default.useContext(ChatMessageContext);
          exports.useChatMessageContext = useChatMessageContext;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/chat/messages/message/index
      ***************************************************/

      ims.set('./views/chat/messages/message/index', {
        hash: 1111678786,
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
          function MessageComponent({
            separator,
            message,
            last
          }) {
            const [content, setContent] = _react.default.useState(message?.content ?? '');
            /**
             * this state is only used for responses
             */
            const [finished, setFinished] = _react.default.useState(true);
            const cls = `message ${message.role}`;
            const messageTokens = message.role === 'system' ? message.usage?.totalTokens : null;
            const {
              store
            } = (0, _context.useChatContext)();
            const [blocks, playableContent] = (0, _playable.parseText)(message.id, message.content);
            const scrollToBottom = () => {
              separator.current?.scrollIntoView({
                block: 'end',
                behavior: 'smooth'
              });
            };
            (0, _hooks.useBinder)([store], () => {
              setFinished(false);
              setContent(store.response.content);
              // console.log('aca ', `${message.id}`, message.content, message);
              scrollToBottom();
            }, `message.${message.id}.updated`);
            (0, _hooks.useBinder)([message], () => {
              setContent(store?.response?.content ?? '');
            });
            (0, _hooks.useBinder)([store], () => {
              setContent(store.response.content);
              setFinished(true);
            }, `message.${message.id}.received`);
            console.log(0.2, content, playableContent);
            return _react.default.createElement("div", {
              className: cls,
              "data-id": message.id
            }, _react.default.createElement("section", {
              className: 'picture__container'
            }, _react.default.createElement(_profileIcon.ProfileIcon, {
              role: message.role
            })), _react.default.createElement("section", {
              className: 'message__container'
            }, _react.default.createElement(_text.MessageText, {
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
          const Message = _react.default.memo(MessageComponent);
          exports.Message = Message;
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
          const ChatContext = _react.default.createContext({});
          exports.ChatContext = ChatContext;
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
          const InputContext = _react.default.createContext(null);
          exports.InputContext = InputContext;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsIiwiX3ZvaWNlIiwiX3dyYXBwZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImNvbnN0cnVjdG9yIiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwiTGlzdGVuQXBwQ2hhbmdlcyIsInNldCIsInJhdGUiLCJBcHBXcmFwcGVyIiwiYXVkaW9TcGVlZCIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInRyaWdnZXIiLCJfY29yZSIsIl9hdWRpbyIsIl9leHRlbnNpb25zIiwibWVzc2FnZXMiLCJFWFRFTlNJT05TIiwiY2F0ZWdvcnkiLCJjaGF0IiwiY2hhdHMiLCJpdGVtcyIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwia2JzIiwia25vd2xlZGdlQm94ZXMiLCJzZWxlY3RlZEtiIiwia2IiLCJzZWxlY3RlZE1vZGVsIiwibW9kZWwiLCJub3RGb3VuZCIsInNlbGVjdGVkS2JQYXRoIiwiZmluZCIsImkiLCJpZCIsInBhdGgiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJleHRlbnNpb25zIiwiTWFwIiwiYXV0b3BsYXkiLCJmZXRjaGluZyIsInJlYWR5IiwiQ2hhdCIsImlzUmVhZHkiLCJsb2FkQWxsIiwiY3VycmVudENoYXQiLCJmb3VuZCIsImtub3dsZWRlQm94U2VsZWN0ZWQiLCJrbm93bGVkZ2VCb3hJZCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZXh0cyIsIm1ldGFkYXRhIiwiZm9yRWFjaCIsImV4dGVuc2lvbiIsImluZGV4Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ3YWl0aW5nUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiQmFja0Fycm93Iiwic2VwYXJhdG9yIiwiaWNvbiIsInVzZVJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJpc0luQ29udGFpbmVyIiwiY29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbmRSZWN0IiwidGhyZXNob2xkIiwiYm90dG9tIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiSWNvbkJ1dHRvbiIsInJlZiIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiX3VzZUV4dGVuc2lvbiIsIl9tZXNzYWdlcyIsIl9jb250ZXh0IiwiX2V4dGVuc2lvblJlbmRlcmVyIiwiQ29udGVudCIsInVzZUNoYXRDb250ZXh0Iiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiTWVzc2FnZXMiLCJDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiX2hlYWRlciIsIl9pbnB1dCIsIl9CYWNrQXJyb3ciLCJfY29udGVudCIsImNoYXRJbnRybyIsInJlYWRlciIsInNldFJlYWRlciIsInVzZVN0YXRlIiwiY2xzIiwiSGVhZGVyIiwiYXZvaWRDaGF0IiwiQ2hhdElucHV0IiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsIkljb24iLCJJQ09OUyIsIl9hbnN3ZXJpbmciLCJfbWVzc2FnZSIsInRvdGFsTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImxlbmd0aCIsIm91dHB1dCIsIm1hcCIsImxhc3QiLCJNZXNzYWdlIiwia2V5IiwiX3RvYXN0IiwiTWVzc2FnZUFjdGlvbnMiLCJ0ZXh0IiwibWVzc2FnZVRva2VucyIsInBsYXkiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJsaXN0ZW4iLCJwb3NpdGlvblRvQ3V0Iiwib25QYXVzZSIsInN0b3AiLCJjb3B5TWVzc2FnZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiYXBwbHkiLCJfc2Vzc2lvbiIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsImFsdCIsInNyYyIsIm9uRXJyb3IiLCJfcGxheWFibGUiLCJfYXVkaW9QbGF5ZXIiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwidGV4dHMiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsIm9uQ2xpY2tXb3JkIiwiZXZlbnQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsInRvb2xUZXh0cyIsInRvb2xzIiwiQXVkaW9QbGF5ZXIiLCJjb252ZXJ0IiwiQ2hhdE1lc3NhZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdGV4dCIsIl9hY3Rpb25zIiwiX3Byb2ZpbGVJY29uIiwiTWVzc2FnZUNvbXBvbmVudCIsInNldENvbnRlbnQiLCJmaW5pc2hlZCIsInNldEZpbmlzaGVkIiwidXNhZ2UiLCJ0b3RhbFRva2VucyIsImJsb2NrcyIsInBsYXlhYmxlQ29udGVudCIsInBhcnNlVGV4dCIsImxvZyIsIm1lbW8iLCJfY29tcG9uZW50cyIsIl9wcmVsb2FkIiwiQ2hhdFNrZWxldG9uIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIlByZWxvYWQiLCJ3aWR0aCIsImhlaWdodCIsInNldFJlYWR5IiwiY29udHJvbCIsIm9uUmVhZHkiLCJDaGF0Q29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNldEF1dG9wbGF5IiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiaGFuZGxlQXV0b3BsYXlUb2dnbGUiLCJoYW5kbGVDaGF0U2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJvblJlYWRlciIsIklucHV0IiwibGFiZWwiLCJyZXF1aXJlZCIsInR5cGUiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX2NvbmZpZyIsIl9yZWNvcmRpbmciLCJfaW5kZXgiLCJfdGV4dElucHV0IiwiaXNXYWl0aW5nIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJzZXRUZXh0Iiwic2VuZEF1ZGlvIiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJzeXN0ZW0iLCJwYXJhbXMiLCJjb25maWciLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJfdGltZXIiLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsIl9wbGF5ZXIiLCJfbW9kYWwiLCJfaW1hZ2UiLCJfY29udGV4dDIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwbGF5QWN0aW9uIiwicGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb25zIiwic3RhdGUiLCJyZWNvcmQiLCJvbkNsb3NlIiwiTW9kYWwiLCJvcGVuIiwicGVybWlzc2lvbnMiLCJJbWFnZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwiVUlGb3JtIiwiY2xvc2VNb2RhbCIsInNldFZhbHVlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJzdGF0dXMiLCJUZXh0YXJlYSIsInJvd3MiLCJwbGFjZWhvbGRlciIsImRpYWxvZ1JlZiIsImFzc2lzdGFudCIsIm9wZW5Nb2RhbCIsImNsb3NlIiwibW9kZSIsInRleHRBcmVhUmVmIiwic3R5bGUiLCJzY3JvbGxIZWlnaHQiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwiX21hbmFnZXIiLCJfY29tcG9uZW50czIiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvbWVzc2FnZXMudHMiLCIvdHMvc3RvcmUvYXVkaW8udHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHMvdmlld3MvY2hhdC9CYWNrQXJyb3cudHN4IiwiL3RzL3ZpZXdzL2NoYXQvY29udGVudC50c3giLCIvdHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4IiwiL3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvYW5zd2VyaW5nLnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29udGV4dC50cyIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvdXNlLWV4dGVuc2lvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3BsYXllci50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCIvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90ZXh0LWlucHV0LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi90cy92aWV3cy9ub3QtZm91bmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDQyxVQUFVLENBQUNILEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUM5QixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9SLE1BQUEsQ0FBQVMsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDWSxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7OztVQzdCRDs7VUFFQWdCLE1BQUEsQ0FBQUMsY0FBQSxDQUFBRixPQUFBO1lBQ0FHLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLE1BQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsUUFBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUF5QixTQUFBLEdBQUF6QixPQUFBO1VBTU87VUFBWSxNQUFPMEIsWUFBYSxTQUFRSixNQUFBLENBQUFLLGFBQXFCO1lBR25FLENBQUFDLE1BQU87WUFDUCxDQUFBQyxRQUFTO1lBRVQsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBQyxPQUFRLEdBQUc7Y0FDVkMsR0FBRyxFQUFFLElBQUlSLE1BQUEsQ0FBQVMsS0FBSyxFQUFFO2NBQ2hCQyxHQUFHLEVBQUUsSUFBSVYsTUFBQSxDQUFBVyxRQUFRO2FBQ2pCO1lBRUQsQ0FBQUMsTUFBTyxHQUFHLEtBQUs7WUFDZixJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUwsT0FBUSxDQUFDLElBQUksQ0FBQyxDQUFBSyxNQUFPLENBQUM7WUFDbkM7WUFFQUMsWUFBWVIsTUFBTTtjQUNqQixLQUFLLENBQUMsRUFBRSxDQUFDO2NBQ1QsSUFBSSxDQUFDLENBQUFDLFFBQVMsR0FBRyxJQUFJSixTQUFBLENBQUFZLFFBQVEsRUFBRTtjQUMvQixJQUFJLENBQUMsQ0FBQVQsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQ1UsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7Y0FFaEM7WUFDRDs7WUFFQUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBSztjQUN2QixJQUFJLENBQUMsQ0FBQVQsT0FBUSxDQUFDQyxHQUFHLENBQUNTLEdBQUcsQ0FBQztnQkFDckJDLElBQUksRUFBRWpCLFFBQUEsQ0FBQWtCLFVBQVUsQ0FBQ0M7ZUFDakIsQ0FBQztZQUNILENBQUM7WUFFREMsWUFBWUEsQ0FBQ0MsSUFBSTtjQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFmLE9BQVEsQ0FBQ2UsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJQyxLQUFLLENBQUMsVUFBVUQsSUFBSSxZQUFZLENBQUM7Y0FFckUsSUFBSSxDQUFDLENBQUFWLE1BQU8sR0FBR1UsSUFBSTtjQUNuQixJQUFJLENBQUNFLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7O1VBQ0E3QixPQUFBLENBQUFRLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREQsSUFBQUosTUFBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUFnRCxLQUFBLEdBQUFoRCxPQUFBO1VBQ0EsSUFBQXdCLFFBQUEsR0FBQXhCLE9BQUE7VUFDQSxJQUFBaUQsTUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFrRCxXQUFBLEdBQUFsRCxPQUFBO1VBT00sTUFBT08sWUFBYSxTQUFRZSxNQUFBLENBQUFLLGFBQXFCO1lBQ3RELENBQUF3QixRQUFTO1lBS1QsQ0FBQUMsVUFBVyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQzVCLElBQUlELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQU4sSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBRUEsQ0FBQVEsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQUMsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBQ0EsQ0FBQUMsS0FBTSxHQUFHL0IsUUFBQSxDQUFBa0IsVUFBVSxDQUFDYSxLQUFLO1lBQ3pCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLENBQUNDLEtBQUssSUFBSSxFQUFFO1lBQy9CO1lBRUEsQ0FBQUMsS0FBTSxHQUFpQixJQUFJUixNQUFBLENBQUF2QixZQUFZLENBQUMsSUFBSSxDQUFDO1lBQzdDLElBQUlnQyxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTTtZQUNuQjtZQUVBLENBQUFFLEdBQUksR0FBR25DLFFBQUEsQ0FBQWtCLFVBQVUsQ0FBQ2tCLGNBQWM7WUFDaEMsSUFBSUQsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUksQ0FBQ0gsS0FBSyxJQUFJLEVBQUU7WUFDN0I7WUFFQSxDQUFBSyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFDQSxJQUFJQSxVQUFVQSxDQUFDQyxFQUFFO2NBQ2hCLElBQUksQ0FBQyxDQUFBRCxVQUFXLEdBQUdDLEVBQUU7WUFDdEI7WUFFQSxDQUFBQyxhQUFjLEdBQUcsT0FBTztZQUN4QixJQUFJQSxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGFBQWM7WUFDM0I7WUFDQSxJQUFJQSxhQUFhQSxDQUFDQyxLQUFLO2NBQ3RCLElBQUksQ0FBQyxDQUFBRCxhQUFjLEdBQUdDLEtBQUs7WUFDNUI7WUFFQSxDQUFBQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxJQUFJQSxRQUFRQSxDQUFDQSxRQUFRO2NBQ3BCLElBQUksQ0FBQyxDQUFBQSxRQUFTLEdBQUdBLFFBQVE7WUFDMUI7WUFFQSxJQUFJQyxjQUFjQSxDQUFBO2NBQ2pCLE1BQU1MLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQUYsR0FBSSxDQUFDSCxLQUFLLENBQUNXLElBQUksQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQVIsVUFBVyxDQUFDO2NBQ3ZFLE9BQU9BLFVBQVUsRUFBRVMsSUFBSSxJQUFJLGtCQUFrQjtZQUM5QztZQUVBLENBQUFDLGNBQWU7WUFDZixJQUFJQSxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGNBQWU7WUFDNUI7WUFFQSxJQUFJQSxjQUFjQSxDQUFDQyxPQUFPO2NBQ3pCLElBQUlBLE9BQU8sRUFBRUgsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFBRSxjQUFlLEVBQUVGLEVBQUUsRUFBRTtjQUM5QyxJQUFJLENBQUMsQ0FBQUUsY0FBZSxHQUFHQyxPQUFPO1lBQy9CO1lBRUEsQ0FBQUMsVUFBVyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUN2QixJQUFJRCxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUNBckMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0UsYUFBYSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7Y0FDbkQsSUFBSSxDQUFDcUMsUUFBUSxHQUFHLElBQUk7WUFDckI7WUFFQTFELEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUMyRCxRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUNDLEtBQUssR0FBRyxLQUFLO1lBQ25CO1lBRUFqRSxJQUFJLEdBQUcsTUFBT3lELEVBQVUsSUFBSTtjQUMzQixJQUFJLENBQUNBLEVBQUUsRUFBRTtnQkFDUixJQUFJLENBQUNRLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNaLFFBQVEsR0FBRyxJQUFJO2dCQUNwQjs7Y0FHRCxJQUFJLENBQUNXLFFBQVEsR0FBRyxJQUFJO2NBRXBCLE1BQU10QixJQUFJLEdBQUcsSUFBSU4sS0FBQSxDQUFBOEIsSUFBSSxDQUFDO2dCQUFFVDtjQUFFLENBQUUsQ0FBQztjQUM3QixNQUFNZixJQUFJLENBQUN5QixPQUFPO2NBQ2xCLE1BQU16QixJQUFJLENBQUMwQixPQUFPLENBQUM7Z0JBQUVYO2NBQUUsQ0FBRSxDQUFDO2NBQzFCN0QsVUFBVSxDQUFDOEMsSUFBSSxHQUFHQSxJQUFJO2NBQ3RCOUIsUUFBQSxDQUFBa0IsVUFBVSxDQUFDdUMsV0FBVyxHQUFHM0IsSUFBSTtjQUU3QixJQUFJLENBQUNBLElBQUksQ0FBQzRCLEtBQUssRUFBRTtnQkFDaEIsSUFBSSxDQUFDTixRQUFRLEdBQUcsS0FBSztnQkFDckIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtnQkFDakIsSUFBSSxDQUFDWixRQUFRLEdBQUcsSUFBSTtnQkFDcEI7O2NBR0QsTUFBTVgsSUFBSSxDQUFDeUIsT0FBTztjQUVsQixNQUFNSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQXhCLEdBQUksQ0FBQ0gsS0FBSyxDQUFDVyxJQUFJLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxFQUFFLEtBQUtmLElBQUksQ0FBQzhCLGNBQWMsQ0FBQztjQUNuRixJQUFJLENBQUMsQ0FBQXZCLFVBQVcsR0FBR3NCLG1CQUFtQixHQUFHQSxtQkFBbUIsQ0FBQ2QsRUFBRSxHQUFHLFNBQVM7Y0FDM0UsSUFBSSxDQUFDWCxZQUFZLENBQUN2QixNQUFNLENBQUNLLEdBQUcsQ0FBQztnQkFDNUI2QyxRQUFRLEVBQUUvQixJQUFJLENBQUMrQixRQUFRLEVBQUVDLE9BQU8sSUFBSTlELFFBQUEsQ0FBQWtCLFVBQVUsQ0FBQzJDO2VBQy9DLENBQUM7Y0FDRjtjQUNBL0IsSUFBSSxDQUFDaUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFLO2dCQUN0QixJQUFJLENBQUMsQ0FBQXBDLFFBQVMsR0FBR0csSUFBSSxDQUFDSCxRQUFRLEVBQUVLLEtBQUs7Z0JBQ3JDLElBQUksQ0FBQ2dDLFlBQVksQ0FBQyxhQUFhLENBQUM7Y0FDakMsQ0FBQyxDQUFDO2NBRUYsSUFBSSxDQUFDLENBQUFsQyxJQUFLLEdBQUdBLElBQUk7Y0FDakIsTUFBTW1DLElBQUksR0FBRyxNQUFNdkMsV0FBQSxDQUFBdUIsVUFBVSxDQUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBd0MsVUFBVyxFQUFFRSxJQUFJLENBQUNvQyxRQUFRLENBQUM7Y0FDbkVELElBQUksQ0FBQ0UsT0FBTyxDQUFDLENBQUNDLFNBQVMsRUFBRUMsS0FBSyxLQUFJLENBQUUsQ0FBQyxDQUFDO2NBRXRDLElBQUksQ0FBQyxDQUFBekMsVUFBVyxDQUFDdUMsT0FBTyxDQUFDLENBQUNDLFNBQVMsRUFBRUMsS0FBSyxLQUFJO2dCQUM3QyxJQUFJLENBQUMsQ0FBQXBCLFVBQVcsQ0FBQ2pDLEdBQUcsQ0FBQ29ELFNBQVMsRUFBRUgsSUFBSSxDQUFDSSxLQUFLLENBQUMsQ0FBQztjQUM3QyxDQUFDLENBQUM7Y0FFRixJQUFJLENBQUMsQ0FBQTFDLFFBQVMsR0FBR0csSUFBSSxDQUFDSCxRQUFRLENBQUNLLEtBQUs7Y0FDcEMsSUFBSSxDQUFDb0IsUUFBUSxHQUFHLEtBQUs7Y0FDckIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtjQUNqQixJQUFJLENBQUNaLFFBQVEsR0FBRyxLQUFLO1lBQ3RCLENBQUM7WUFFRCxNQUFNNkIsV0FBV0EsQ0FBQ0MsT0FBc0I7Y0FDdkMsSUFBSTtnQkFDSEMsV0FBVyxDQUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN6QixJQUFJLENBQUMsQ0FBQTFCLGNBQWUsR0FBRzJCLFNBQVM7Z0JBRWhDLElBQUksT0FBT0gsT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDRyxTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUNKLE9BQU8sQ0FBQyxFQUFFO2dCQUU1RSxJQUFJLENBQUNuQixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsSUFBSSxDQUFDd0IsZUFBZSxHQUFHLElBQUk7Z0JBQzNCLE1BQU07a0JBQUU1QixPQUFPO2tCQUFFNkI7Z0JBQVEsQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUEvQyxJQUFLLENBQUN3QyxXQUFXLENBQUNDLE9BQU8sQ0FBQztnQkFFbkUsSUFBSSxDQUFDTSxRQUFRLEdBQUdBLFFBQVE7Z0JBQ3hCO2dCQUNBLElBQUksQ0FBQyxDQUFBOUIsY0FBZSxHQUFHQyxPQUFPO2dCQUM5QixNQUFNOEIsUUFBUSxHQUFHQSxDQUFBLEtBQUs7a0JBQ3JCLElBQUksQ0FBQ2QsWUFBWSxDQUFDLFdBQVdhLFFBQVEsQ0FBQ2hDLEVBQUUsVUFBVSxDQUFDO2dCQUNwRCxDQUFDO2dCQUVELE1BQU1rQyxLQUFLLEdBQUdBLENBQUEsS0FBSztrQkFDbEIvQixPQUFPLENBQUNnQyxHQUFHLENBQUMsaUJBQWlCLEVBQUVGLFFBQVEsQ0FBQztrQkFDeEMsSUFBSSxDQUFDZCxZQUFZLENBQUMsZ0JBQWdCLENBQUM7a0JBQ25DLElBQUksQ0FBQ0EsWUFBWSxDQUFDLFdBQVdhLFFBQVEsQ0FBQ2hDLEVBQUUsV0FBVyxDQUFDO2tCQUNwREcsT0FBTyxDQUFDZ0MsR0FBRyxDQUFDLG1CQUFtQixFQUFFRCxLQUFLLENBQUM7Z0JBQ3hDLENBQUM7Z0JBRUQvQixPQUFPLENBQUNlLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRWUsUUFBUSxDQUFDO2dCQUN2QzlCLE9BQU8sQ0FBQ2UsRUFBRSxDQUFDLG1CQUFtQixFQUFFZ0IsS0FBSyxDQUFDO2dCQUV0QyxJQUFJLENBQUNILGVBQWUsR0FBRyxLQUFLO2dCQUM1QixJQUFJLENBQUNaLFlBQVksQ0FBQyxhQUFhLENBQUM7ZUFDaEMsQ0FBQyxPQUFPaUIsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDTCxlQUFlLEdBQUcsS0FBSztnQkFDNUIsSUFBSSxDQUFDeEIsUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBMUQsT0FBQSxDQUFBWCxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0xELElBQUFxRyxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQTZHLE1BQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBOEcsTUFBQSxHQUFBOUcsT0FBQTtVQUVNLFNBQVUrRyxTQUFTQSxDQUFDO1lBQUUxRyxLQUFLO1lBQUUyRztVQUFTLENBQUU7WUFDN0MsTUFBTUMsSUFBSSxHQUFHTCxNQUFBLENBQUF0QixPQUFLLENBQUM0QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBRS9CLElBQUFKLE1BQUEsQ0FBQUssU0FBUyxFQUFDLENBQUM5RyxLQUFLLENBQUMsRUFBRSxNQUFNRyxVQUFVLENBQUM0RyxVQUFVLENBQUMsTUFBTUMsY0FBYyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsYUFBYSxDQUFDO1lBQzNGLE1BQU1BLGNBQWMsR0FBR0EsQ0FBQSxLQUFLO2NBQzNCTCxTQUFTLENBQUNNLE9BQU8sRUFBRUMsY0FBYyxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsS0FBSztnQkFBRUMsUUFBUSxFQUFFO2NBQVEsQ0FBRSxDQUFDO1lBQ3hFLENBQUM7WUFFRCxNQUFNQyxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixNQUFNQyxTQUFTLEdBQUdYLFNBQVMsQ0FBQ00sT0FBTyxFQUFFTSxVQUFVO2NBQy9DLElBQUksQ0FBQ0QsU0FBUyxFQUFFLE9BQU8sSUFBSTtjQUMzQixNQUFNRSxhQUFhLEdBQUdGLFNBQVMsQ0FBQ0cscUJBQXFCLEVBQUU7Y0FDdkQsTUFBTUMsT0FBTyxHQUFHZixTQUFTLENBQUNNLE9BQU8sQ0FBQ1EscUJBQXFCLEVBQUU7Y0FDekQsTUFBTUUsU0FBUyxHQUFHLENBQUM7Y0FDbkIsT0FBT0QsT0FBTyxDQUFDRSxNQUFNLEdBQUdELFNBQVMsSUFBSUgsYUFBYSxDQUFDSSxNQUFNO1lBQzFELENBQUM7WUFFRHJCLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQzRDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1QLFNBQVMsR0FBR1gsU0FBUyxDQUFDTSxPQUFPLEVBQUVNLFVBQVU7Y0FDL0MsSUFBSSxDQUFDRCxTQUFTLEVBQUU7Y0FFaEIsTUFBTVEsWUFBWSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3pCLE1BQU1DLE9BQU8sR0FBRyxDQUFDVixhQUFhLEVBQUU7Z0JBQ2hDLElBQUlVLE9BQU8sRUFBRW5CLElBQUksQ0FBQ0ssT0FBTyxFQUFFZSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUM1Q3JCLElBQUksQ0FBQ0ssT0FBTyxFQUFFZSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7Y0FDNUMsQ0FBQztjQUNEWixTQUFTLENBQUNhLGdCQUFnQixDQUFDLFFBQVEsRUFBRUwsWUFBWSxDQUFDO2NBQ2xELE9BQU8sTUFBTVIsU0FBUyxDQUFDYyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVOLFlBQVksQ0FBQztZQUNuRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQ3ZCLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQTlCLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXFELFFBQUEsUUFDQy9CLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQzdCLE1BQUEsQ0FBQStCLFVBQVU7Y0FDVkMsR0FBRyxFQUFFNUIsSUFBSTtjQUNUQSxJQUFJLEVBQUMsV0FBVztjQUNoQjZCLE9BQU8sRUFBQyxVQUFVO2NBQ2xCQyxTQUFTLEVBQUMsMkJBQTJCO2NBQ3JDQyxPQUFPLEVBQUUzQjtZQUFjLEVBQ3RCLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0EsSUFBQVQsTUFBQSxHQUFBNUcsT0FBQTtVQUNBLElBQUFpSixhQUFBLEdBQUFqSixPQUFBO1VBRUEsSUFBQWtKLFNBQUEsR0FBQWxKLE9BQUE7VUFDQSxJQUFBbUosUUFBQSxHQUFBbkosT0FBQTtVQUNBLElBQUFvSixrQkFBQSxHQUFBcEosT0FBQTtVQUVNLFNBQVVxSixPQUFPQSxDQUFDO1lBQUVyQztVQUFTLENBQUU7WUFDcEMsTUFBTTtjQUFFM0c7WUFBSyxDQUFFLEdBQUcsSUFBQThJLFFBQUEsQ0FBQUcsY0FBYyxHQUFFO1lBRWxDLE1BQU0sQ0FBQ1QsR0FBRyxFQUFFaEUsS0FBSyxFQUFFMEUsZ0JBQWdCLENBQUMsR0FBRyxJQUFBTixhQUFBLENBQUFPLFlBQVksRUFBQyxZQUFZLENBQUM7WUFFakUsT0FDQzVDLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQWUsR0FDN0JuQyxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUNVLGtCQUFBLENBQUFLLGlCQUFpQjtjQUFDQyxTQUFTLEVBQUVILGdCQUFnQjtjQUFFSSxTQUFTLEVBQUVkO1lBQUcsRUFBSSxFQUVqRWhFLEtBQUssSUFDTCtCLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQTlCLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXFELFFBQUEsUUFDQy9CLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ1EsU0FBQSxDQUFBVSxRQUFRO2NBQUM1QyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUNsQ0osTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQTtjQUFLRyxHQUFHLEVBQUU3QixTQUFTO2NBQUUrQixTQUFTLEVBQUM7WUFBVyxFQUFHLENBRTlDLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQW5DLE1BQUEsR0FBQTVHLE9BQUE7VUFFQSxJQUFBbUosUUFBQSxHQUFBbkosT0FBQTtVQURBOztVQUdNLFNBQVV5SixpQkFBaUJBLENBQUM7WUFBRUMsU0FBUztZQUFFQztVQUFTLENBQUU7WUFDekQsTUFBTTtjQUNMdEosS0FBSyxFQUFFO2dCQUFFaUQsSUFBSTtnQkFBRW1CO2NBQVU7WUFBRSxDQUMzQixHQUFHLElBQUEwRSxRQUFBLENBQUFHLGNBQWMsR0FBRTtZQUVwQixNQUFNTyxTQUFTLEdBQUdILFNBQVM7WUFDM0IsSUFBSSxDQUFDQSxTQUFTLEVBQUUsT0FBTyxJQUFJO1lBQzNCLE9BQ0M5QyxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUE5QixNQUFBLENBQUF0QixPQUFBLENBQUFxRCxRQUFBLFFBQ0MvQixNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUNtQixTQUFTO2NBQUNoQixHQUFHLEVBQUVjLFNBQVM7Y0FBRWpFLFFBQVEsRUFBRW9FLElBQUksQ0FBQ0MsU0FBUyxDQUFDekcsSUFBSSxDQUFDb0MsUUFBUTtZQUFDLEVBQUksQ0FDcEU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQWtCLE1BQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBbUosUUFBQSxHQUFBbkosT0FBQTtVQUVBLElBQUFnSyxPQUFBLEdBQUFoSyxPQUFBO1VBQ0EsSUFBQWlLLE1BQUEsR0FBQWpLLE9BQUE7VUFFQSxJQUFBa0ssVUFBQSxHQUFBbEssT0FBQTtVQUVBLElBQUFtSyxRQUFBLEdBQUFuSyxPQUFBO1VBVUEsTUFBTTtZQUFFa0g7VUFBTSxDQUFFLEdBQUdOLE1BQUEsQ0FBQXRCLE9BQUs7VUFFakI7VUFBVSxTQUFVUixJQUFJQSxDQUFBO1lBQzlCLE1BQU07Y0FBRXpFO1lBQUssQ0FBRSxHQUFHLElBQUE4SSxRQUFBLENBQUFHLGNBQWMsR0FBRTtZQUNsQyxNQUFNYyxTQUFTLEdBQUcvSixLQUFLLENBQUNvRSxVQUFVLENBQUMxRCxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ3BELE1BQU0sQ0FBQ3NKLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUcxRCxNQUFBLENBQUF0QixPQUFLLENBQUNpRixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU12RCxTQUFTLEdBQUdKLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQzRCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEMsTUFBTXNELEdBQUcsR0FBRyx1QkFBdUJILE1BQU0sR0FBRyxvQkFBb0IsR0FBRyxFQUFFLEVBQUU7WUFFdkUsT0FDQ3pELE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBS0ssU0FBUyxFQUFFeUI7WUFBRyxHQUNsQjVELE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3NCLE9BQUEsQ0FBQVMsTUFBTTtjQUFDSixNQUFNLEVBQUVBLE1BQU07Y0FBRUMsU0FBUyxFQUFFQTtZQUFTLEVBQUksRUFDaEQxRCxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUN5QixRQUFBLENBQUFkLE9BQU87Y0FBQ3JDLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ2pDSixNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUN3QixVQUFBLENBQUFuRCxTQUFTO2NBQUMxRyxLQUFLLEVBQUVBLEtBQUs7Y0FBRTJHLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ2hELENBQUNvRCxTQUFTLEVBQUUxRSxRQUFRLEVBQUVnRixTQUFTLElBQy9COUQsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFBOUIsTUFBQSxDQUFBdEIsT0FBQSxDQUFBcUQsUUFBQSxRQUNDL0IsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBTSxHQUNwQm5DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3VCLE1BQUEsQ0FBQVUsU0FBUztjQUFDdEssS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDdEIsQ0FFUCxDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUF1RyxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQTZHLE1BQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBNEssT0FBQSxHQUFBNUssT0FBQTtVQUVPLE1BQU02SyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDakUsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBbUIsR0FDakNuQyxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUM3QixNQUFBLENBQUFpRSxJQUFJO2NBQUMvQixTQUFTLEVBQUMsSUFBSTtjQUFDOUIsSUFBSSxFQUFFMkQsT0FBQSxDQUFBRyxLQUFLLENBQUMsWUFBWTtZQUFDLEVBQUksRUFDbERuRSxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFlLEdBQzdCbkMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQTtjQUFNSyxTQUFTLEVBQUM7WUFBSyxFQUFRLEVBQzdCbkMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQTtjQUFNSyxTQUFTLEVBQUM7WUFBSyxFQUFRLEVBQzdCbkMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQTtjQUFNSyxTQUFTLEVBQUM7WUFBSyxFQUFRLENBQ3hCLENBQ0Q7VUFFUixDQUFDO1VBQUM3SCxPQUFBLENBQUEySixlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkYsSUFBQWpFLE1BQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBbUosUUFBQSxHQUFBbkosT0FBQTtVQUVBLElBQUE4RyxNQUFBLEdBQUE5RyxPQUFBO1VBQ0EsSUFBQWdMLFVBQUEsR0FBQWhMLE9BQUE7VUFDQSxJQUFBaUwsUUFBQSxHQUFBakwsT0FBQTtVQUVNLFNBQVU0SixRQUFRQSxDQUFDO1lBQUU1QztVQUFTLENBQUU7WUFDckMsTUFBTTtjQUFFM0c7WUFBSyxDQUFFLEdBQUcsSUFBQThJLFFBQUEsQ0FBQUcsY0FBYyxHQUFFO1lBQ2xDLE1BQU0sQ0FBQzRCLGFBQWEsRUFBRUMsV0FBVyxDQUFDLEdBQUd2RSxNQUFBLENBQUF0QixPQUFLLENBQUNpRixRQUFRLENBQVNsSyxLQUFLLENBQUM4QyxRQUFRLENBQUNpSSxNQUFNLElBQUksRUFBRSxDQUFDQSxNQUFNLENBQUM7WUFFL0YsSUFBQXRFLE1BQUEsQ0FBQUssU0FBUyxFQUNSLENBQUM5RyxLQUFLLENBQUMsRUFDUCxNQUFLO2NBQ0o4SyxXQUFXLENBQUM5SyxLQUFLLENBQUM4QyxRQUFRLENBQUNpSSxNQUFNLENBQUM7WUFDbkMsQ0FBQyxFQUNELGFBQWEsQ0FDYjtZQUVELE1BQU1DLE1BQU0sR0FBR2hMLEtBQUssQ0FBQzhDLFFBQVEsQ0FBQ21JLEdBQUcsQ0FBQyxDQUFDOUcsT0FBTyxFQUFFSixDQUFDLEtBQUk7Y0FDaEQsTUFBTW1ILElBQUksR0FBR25ILENBQUMsS0FBSzhHLGFBQWEsR0FBRyxDQUFDO2NBQ3BDLE9BQU90RSxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUN1QyxRQUFBLENBQUFPLE9BQU87Z0JBQUNDLEdBQUcsRUFBRSxXQUFXckgsQ0FBQyxFQUFFO2dCQUFFNEMsU0FBUyxFQUFFQSxTQUFTO2dCQUFFeEMsT0FBTyxFQUFFQSxPQUFPO2dCQUFFK0csSUFBSSxFQUFFQTtjQUFJLEVBQUk7WUFDNUYsQ0FBQyxDQUFDO1lBRUYsT0FDQzNFLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQTlCLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQXFELFFBQUEsUUFDRTBDLE1BQU0sRUFDTmhMLEtBQUssQ0FBQytGLGVBQWUsSUFBSVEsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDc0MsVUFBQSxDQUFBSCxlQUFlLE9BQUcsQ0FDM0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQWpFLE1BQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBNkcsTUFBQSxHQUFBN0csT0FBQTtVQUNBLElBQUE4RyxNQUFBLEdBQUE5RyxPQUFBO1VBQ0EsSUFBQW1KLFFBQUEsR0FBQW5KLE9BQUE7VUFDQSxJQUFBMEwsTUFBQSxHQUFBMUwsT0FBQTtVQUVNLFNBQVUyTCxjQUFjQSxDQUFDO1lBQUVuSCxPQUFPO1lBQUVvSCxJQUFJO1lBQUVDLGFBQWE7WUFBRUMsSUFBSSxHQUFHO1VBQUksQ0FBRTtZQUMzRSxNQUFNO2NBQUV6TCxLQUFLO2NBQUU4QjtZQUFNLENBQUUsR0FBRyxJQUFBZ0gsUUFBQSxDQUFBRyxjQUFjLEdBQUU7WUFFMUMsTUFBTSxDQUFDeUMsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR3BGLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQ2lGLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEQsTUFBTSxDQUFDMEIsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR3RGLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQ2lGLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFekQsSUFBQXpELE1BQUEsQ0FBQUssU0FBUyxFQUFDLENBQUNoRixNQUFNLENBQUMsRUFBRSxNQUFNK0osYUFBYSxDQUFDL0osTUFBTSxDQUFDZ0ssUUFBUSxDQUFDLENBQUM7WUFFekQsTUFBTUMsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckJGLGFBQWEsQ0FBQyxLQUFLLENBQUM7Y0FDcEJGLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDZCxDQUFDO1lBQ0QsSUFBQWxGLE1BQUEsQ0FBQUssU0FBUyxFQUFDLENBQUNoRixNQUFNLENBQUMsRUFBRWlLLFFBQVEsRUFBRSxXQUFXLENBQUM7WUFFMUMsTUFBTUMsTUFBTSxHQUFHLE1BQUFBLENBQU87Y0FBRUM7WUFBTSxDQUFFLEtBQUk7Y0FDbkNOLFNBQVMsQ0FBQyxNQUFNLENBQUM7Y0FDakIzTCxLQUFLLENBQUNrRSxjQUFjLEdBQUdDLE9BQU87Y0FDOUJyQyxNQUFNLENBQUNvSyxhQUFhLEdBQUcsQ0FBQztjQUN4QixNQUFNcEssTUFBTSxDQUFDMkosSUFBSSxDQUFDRixJQUFJLEVBQUVwSCxPQUFPLENBQUNILEVBQUUsQ0FBQztZQUNwQyxDQUFDO1lBQ0QsTUFBTW1JLE9BQU8sR0FBRyxNQUFBQSxDQUFPO2NBQUVGO1lBQU0sQ0FBRSxLQUFJO2NBQ3BDLE1BQU1uSyxNQUFNLENBQUNzSyxJQUFJLEVBQUU7Y0FDbkJULFNBQVMsQ0FBQyxNQUFNLENBQUM7Y0FDakJFLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDckIsQ0FBQztZQUVELE1BQU1RLFdBQVcsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDOUIsTUFBTWxNLFVBQVUsRUFBRW1NLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUNqQixJQUFJLENBQUM7Y0FDckRGLE1BQUEsQ0FBQW9CLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLDZCQUE2QixDQUFDO1lBQzdDLENBQUM7WUFFRCxNQUFNQyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFO1lBQUksQ0FBRTtZQUNuQyxNQUFNQyxLQUFLLEdBQUc1TSxLQUFLLENBQUNrRSxjQUFjLEVBQUVGLEVBQUUsS0FBS0csT0FBTyxFQUFFSCxFQUFFLElBQUk0SCxVQUFVO1lBRXBFLE1BQU1oRixJQUFJLEdBQUdnRyxLQUFLLElBQUlsQixNQUFNLEtBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNO1lBQ3pELE1BQU0vQyxPQUFPLEdBQUdpRSxLQUFLLElBQUlsQixNQUFNLEtBQUssTUFBTSxHQUFHUyxPQUFPLEdBQUdILE1BQU07WUFFN0QsT0FDQ3pGLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsY0FDQzlCLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQWdCLEdBQzlCbkMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDN0IsTUFBQSxDQUFBK0IsVUFBVTtjQUFDSSxPQUFPLEVBQUUwRCxXQUFXO2NBQUV6RixJQUFJLEVBQUM7WUFBTSxFQUFHLEVBQy9DNkUsSUFBSSxJQUFJbEYsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDN0IsTUFBQSxDQUFBK0IsVUFBVTtjQUFDSSxPQUFPLEVBQUVBLE9BQU87Y0FBQSxlQUFjLEtBQUs7Y0FBQy9CLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ2xFLEVBQ0w0RSxhQUFhLElBQUlqRixNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFpQixHQUFFOEMsYUFBYSxFLFVBQWMsQ0FDMUU7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREEsSUFBQWpGLE1BQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBNkcsTUFBQSxHQUFBN0csT0FBQTtVQUNBLElBQUFrTixRQUFBLEdBQUFsTixPQUFBO1VBQ0EsSUFBQTRLLE9BQUEsR0FBQTVLLE9BQUE7VUFFTSxTQUFVbU4sV0FBV0EsQ0FBQztZQUFFQztVQUFJLENBQUU7WUFDbkMsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUExRyxNQUFBLENBQUEyRCxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU10RCxJQUFJLEdBQUdtRyxJQUFJLEtBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxZQUFZO1lBQ3BELE1BQU1HLFNBQVMsR0FBR0wsUUFBQSxDQUFBTSxjQUFjLENBQUNDLElBQUksQ0FBQ0MsYUFBYSxFQUFFO1lBQ3JELE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNTCxZQUFZLENBQUMsSUFBSSxDQUFDO1lBRWhELE9BQ0MxRyxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUE5QixNQUFBLENBQUF0QixPQUFBLENBQUFxRCxRQUFBLFFBQ0U0RSxTQUFTLENBQUNLLFFBQVEsSUFBSVIsSUFBSSxLQUFLLE1BQU0sSUFBSSxDQUFDQyxTQUFTLEdBQ25EekcsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQTtjQUFLbUYsR0FBRyxFQUFDLG9CQUFvQjtjQUFDQyxHQUFHLEVBQUVQLFNBQVMsQ0FBQ0ssUUFBUTtjQUFFRyxPQUFPLEVBQUVKO1lBQWUsRUFBSSxHQUVuRi9HLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQzdCLE1BQUEsQ0FBQWlFLElBQUk7Y0FBQy9CLFNBQVMsRUFBQyxJQUFJO2NBQUM5QixJQUFJLEVBQUUyRCxPQUFBLENBQUFHLEtBQUssQ0FBQzlELElBQUksQ0FBQyxJQUFJQTtZQUFJLEVBQzlDLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkEsSUFBQUwsTUFBQSxHQUFBNUcsT0FBQTtVQUNBLElBQUE4RyxNQUFBLEdBQUE5RyxPQUFBO1VBQ0EsSUFBQWdPLFNBQUEsR0FBQWhPLE9BQUE7VUFDQSxJQUFBbUosUUFBQSxHQUFBbkosT0FBQTtVQUNBLElBQUFpTyxZQUFBLEdBQUFqTyxPQUFBO1VBQ00sU0FBVWtPLFdBQVdBLENBQUM7WUFBRTFKLE9BQU87WUFBRTJKO1VBQVEsQ0FBRTtZQUNoRCxNQUFNO2NBQUU5TixLQUFLO2NBQUVzRSxRQUFRO2NBQUV4QyxNQUFNO2NBQUVpTTtZQUFLLENBQUUsR0FBRyxJQUFBakYsUUFBQSxDQUFBRyxjQUFjLEdBQUU7WUFDM0QsTUFBTXNDLElBQUksR0FBR3BILE9BQU8sRUFBRXVCLE9BQU8sSUFBSSxFQUFFO1lBQ25DLE1BQU04QyxHQUFHLEdBQUdqQyxNQUFBLENBQUF0QixPQUFLLENBQUM0QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCLE1BQU1tSCxlQUFlLEdBQUdBLENBQUEsS0FDdkJ4RixHQUFHLENBQUN2QixPQUFPLENBQUNnSCxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzNJLE9BQU8sQ0FBQzRJLE9BQU8sSUFBSUEsT0FBTyxDQUFDbEcsU0FBUyxDQUFDRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFckcsSUFBQXpCLE1BQUEsQ0FBQUssU0FBUyxFQUFDLENBQUNoRixNQUFNLENBQUMsRUFBRWtNLGVBQWUsRUFBRSxXQUFXLENBQUM7WUFDakQsSUFBSSxPQUFPekMsSUFBSSxLQUFLLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFekMsTUFBTTRDLFdBQVcsR0FBR0MsS0FBSyxJQUFLcE8sS0FBSyxDQUFDa0UsY0FBYyxHQUFHQyxPQUFRO1lBRTdELE1BQU1rSyxXQUFXLEdBQUdsSyxPQUFPLElBQUlBLE9BQU8sQ0FBQzRJLElBQUksS0FBSyxNQUFNLElBQUl6SSxRQUFRO1lBQ2xFLE1BQU1nSyxhQUFhLEdBQUduSyxPQUFPLENBQUNILEVBQUUsS0FBS2hFLEtBQUssQ0FBQ2tFLGNBQWMsRUFBRUYsRUFBRSxJQUFJcUssV0FBVztZQUU1RTtZQUVBLE9BQ0M5SCxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBO2NBQUtLLFNBQVMsRUFBQyx5QkFBeUI7Y0FBQ0YsR0FBRyxFQUFFQTtZQUFHLEdBQy9DK0MsSUFBSSxJQUNKaEYsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDc0YsU0FBQSxDQUFBWSxRQUFRO2NBQ1I3SSxPQUFPLEVBQUU2RixJQUFJO2NBQ2JpRCxTQUFTLEVBQUVULEtBQUssQ0FBQ1UsS0FBSztjQUN0QlgsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCOUosRUFBRSxFQUFFRyxPQUFPLENBQUNILEVBQUU7Y0FDZG1LLFdBQVcsRUFBRUEsV0FBVztjQUN4QnJNLE1BQU0sRUFBRUEsTUFBTTtjQUNkd0MsUUFBUSxFQUFFZ0ssYUFBYSxJQUFJRDtZQUFXLEVBRXZDLEVBQ0FsSyxPQUFPLENBQUNmLEtBQUssSUFBSW1ELE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3VGLFlBQUEsQ0FBQWMsV0FBVztjQUFDakIsR0FBRyxFQUFFdEosT0FBTyxDQUFDZixLQUFLO2NBQUV1TCxPQUFPO1lBQUEsRUFBRyxDQUN4RDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZDQSxJQUFBcEksTUFBQSxHQUFBNUcsT0FBQTtVQUdPLE1BQU1pUCxrQkFBa0IsR0FBR3JJLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQzRKLGFBQWEsQ0FBQyxFQUF5QixDQUFDO1VBQUNoTyxPQUFBLENBQUErTixrQkFBQSxHQUFBQSxrQkFBQTtVQUMxRSxNQUFNRSxxQkFBcUIsR0FBR0EsQ0FBQSxLQUFNdkksTUFBQSxDQUFBdEIsT0FBSyxDQUFDOEosVUFBVSxDQUFDSCxrQkFBa0IsQ0FBQztVQUFDL04sT0FBQSxDQUFBaU8scUJBQUEsR0FBQUEscUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSmhGLElBQUF2SSxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQThHLE1BQUEsR0FBQTlHLE9BQUE7VUFDQSxJQUFBZ08sU0FBQSxHQUFBaE8sT0FBQTtVQUNBLElBQUFxUCxLQUFBLEdBQUFyUCxPQUFBO1VBQ0EsSUFBQXNQLFFBQUEsR0FBQXRQLE9BQUE7VUFDQSxJQUFBdVAsWUFBQSxHQUFBdlAsT0FBQTtVQUNBLElBQUFtSixRQUFBLEdBQUFuSixPQUFBO1VBRUEsU0FBU3dQLGdCQUFnQkEsQ0FBQztZQUFFeEksU0FBUztZQUFFeEMsT0FBTztZQUFFK0c7VUFBSSxDQUFFO1lBQ3JELE1BQU0sQ0FBQ3hGLE9BQU8sRUFBRTBKLFVBQVUsQ0FBQyxHQUFHN0ksTUFBQSxDQUFBdEIsT0FBSyxDQUFDaUYsUUFBUSxDQUFTL0YsT0FBTyxFQUFFdUIsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUM1RTs7O1lBR0EsTUFBTSxDQUFDMkosUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRy9JLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQ2lGLFFBQVEsQ0FBVSxJQUFJLENBQUM7WUFDN0QsTUFBTUMsR0FBRyxHQUFHLFdBQVdoRyxPQUFPLENBQUM0SSxJQUFJLEVBQUU7WUFDckMsTUFBTXZCLGFBQWEsR0FBR3JILE9BQU8sQ0FBQzRJLElBQUksS0FBSyxRQUFRLEdBQUc1SSxPQUFPLENBQUNvTCxLQUFLLEVBQUVDLFdBQVcsR0FBRyxJQUFJO1lBRW5GLE1BQU07Y0FBRXhQO1lBQUssQ0FBRSxHQUFHLElBQUE4SSxRQUFBLENBQUFHLGNBQWMsR0FBRTtZQUVsQyxNQUFNLENBQUN3RyxNQUFNLEVBQUVDLGVBQWUsQ0FBQyxHQUFHLElBQUEvQixTQUFBLENBQUFnQyxTQUFTLEVBQUN4TCxPQUFPLENBQUNILEVBQUUsRUFBRUcsT0FBTyxDQUFDdUIsT0FBTyxDQUFDO1lBRXhFLE1BQU1zQixjQUFjLEdBQUdBLENBQUEsS0FBSztjQUMzQkwsU0FBUyxDQUFDTSxPQUFPLEVBQUVDLGNBQWMsQ0FBQztnQkFBRUMsS0FBSyxFQUFFLEtBQUs7Z0JBQUVDLFFBQVEsRUFBRTtjQUFRLENBQUUsQ0FBQztZQUN4RSxDQUFDO1lBRUQsSUFBQVgsTUFBQSxDQUFBSyxTQUFTLEVBQ1IsQ0FBQzlHLEtBQUssQ0FBQyxFQUNQLE1BQUs7Y0FDSnNQLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJGLFVBQVUsQ0FBQ3BQLEtBQUssQ0FBQ2dHLFFBQVEsQ0FBQ04sT0FBTyxDQUFDO2NBQ2xDO2NBQ0FzQixjQUFjLEVBQUU7WUFDakIsQ0FBQyxFQUNELFdBQVc3QyxPQUFPLENBQUNILEVBQUUsVUFBVSxDQUMvQjtZQUNELElBQUF5QyxNQUFBLENBQUFLLFNBQVMsRUFBQyxDQUFDM0MsT0FBTyxDQUFDLEVBQUUsTUFBSztjQUN6QmlMLFVBQVUsQ0FBQ3BQLEtBQUssRUFBRWdHLFFBQVEsRUFBRU4sT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxDQUFDLENBQUM7WUFDRixJQUFBZSxNQUFBLENBQUFLLFNBQVMsRUFDUixDQUFDOUcsS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKb1AsVUFBVSxDQUFDcFAsS0FBSyxDQUFDZ0csUUFBUSxDQUFDTixPQUFPLENBQUM7Y0FDbEM0SixXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2xCLENBQUMsRUFDRCxXQUFXbkwsT0FBTyxDQUFDSCxFQUFFLFdBQVcsQ0FDaEM7WUFFRHFDLE9BQU8sQ0FBQ3VKLEdBQUcsQ0FBQyxHQUFHLEVBQUVsSyxPQUFPLEVBQUVnSyxlQUFlLENBQUM7WUFDMUMsT0FDQ25KLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBS0ssU0FBUyxFQUFFeUIsR0FBRztjQUFBLFdBQVdoRyxPQUFPLENBQUNIO1lBQUUsR0FDdkN1QyxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBO2NBQVNLLFNBQVMsRUFBQztZQUFvQixHQUN0Q25DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQzZHLFlBQUEsQ0FBQXBDLFdBQVc7Y0FBQ0MsSUFBSSxFQUFFNUksT0FBTyxDQUFDNEk7WUFBSSxFQUFJLENBQzFCLEVBQ1Z4RyxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBO2NBQVNLLFNBQVMsRUFBQztZQUFvQixHQUN0Q25DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQzJHLEtBQUEsQ0FBQW5CLFdBQVc7Y0FBQ0MsUUFBUSxFQUFFdUIsUUFBUTtjQUFFbEwsT0FBTyxFQUFFQTtZQUFPLEVBQUksQ0FDNUMsRUFDVm9DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQWtCLEdBQ3BDbkMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDNEcsUUFBQSxDQUFBM0QsY0FBYztjQUNkRyxJQUFJLEVBQUUsQ0FBQ3RILE9BQU8sQ0FBQ2YsS0FBSztjQUNwQmUsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCb0gsSUFBSSxFQUFFbUUsZUFBZTtjQUNyQmxFLGFBQWEsRUFBRUE7WUFBYSxFQUMzQixDQUNPLENBQ0w7VUFFUjtVQUVPLE1BQU1MLE9BQU8sR0FBRzVFLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQzRLLElBQUksQ0FBQ1YsZ0JBQWdCLENBQUM7VUFBQ3RPLE9BQUEsQ0FBQXNLLE9BQUEsR0FBQUEsT0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRXBELElBQUE1RSxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQW1KLFFBQUEsR0FBQW5KLE9BQUE7VUFFQSxJQUFBbVEsV0FBQSxHQUFBblEsT0FBQTtVQUNBLElBQUFvUSxRQUFBLEdBQUFwUSxPQUFBO1VBQ00sU0FBVXFRLFlBQVlBLENBQUE7WUFDM0IsTUFBTTtjQUFFaFE7WUFBSyxDQUFFLEdBQUcsSUFBQThJLFFBQUEsQ0FBQUcsY0FBYyxHQUFFO1lBQ2xDLE9BQ0MxQyxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFnQixHQUM5Qm5DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3lILFdBQUEsQ0FBQUcsaUJBQWlCO2NBQUNDLEtBQUssRUFBRTNKLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQzBILFFBQUEsQ0FBQUksT0FBTztnQkFBQ0MsS0FBSyxFQUFDLE9BQU87Z0JBQUNDLE1BQU0sRUFBQztjQUFNO1lBQUcsRUFBc0IsRUFDdkY5SixNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFNLEVBQUcsQ0FDbkI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQSxJQUFBbkMsTUFBQSxHQUFBNUcsT0FBQTtVQUNBLElBQUFtSixRQUFBLEdBQUFuSixPQUFBO1VBQ00sU0FBVXdKLFlBQVlBLENBQUMzRyxJQUFJO1lBQ2hDLE1BQU0sQ0FBQ2dDLEtBQUssRUFBRThMLFFBQVEsQ0FBQyxHQUFHL0osTUFBQSxDQUFBdEIsT0FBSyxDQUFDaUYsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNMUIsR0FBRyxHQUFHakMsTUFBQSxDQUFBdEIsT0FBSyxDQUFDNEIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNO2NBQ0w3RyxLQUFLLEVBQUU7Z0JBQUVvRTtjQUFVO1lBQUUsQ0FDckIsR0FBRyxJQUFBMEUsUUFBQSxDQUFBRyxjQUFjLEdBQUU7WUFFcEIsTUFBTUMsZ0JBQWdCLEdBQUc5RSxVQUFVLENBQUMxRCxHQUFHLENBQUM4QixJQUFJLENBQUMsRUFBRStOLE9BQU87WUFDdERoSyxNQUFBLENBQUF0QixPQUFLLENBQUM0QyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNMkksT0FBTyxHQUFHcEMsS0FBSyxJQUFJa0MsUUFBUSxDQUFDLElBQUksQ0FBQztjQUN2QyxJQUFJLENBQUM5SCxHQUFHLEVBQUV2QixPQUFPLEVBQUU7Y0FDbkJ1QixHQUFHLENBQUN2QixPQUFPLENBQUNrQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVxSSxPQUFPLENBQUM7Y0FDOUMsT0FBTyxNQUFNaEksR0FBRyxDQUFDdkIsT0FBTyxFQUFFbUIsbUJBQW1CLENBQUMsT0FBTyxFQUFFb0ksT0FBTyxDQUFDO1lBQ2hFLENBQUMsRUFBRSxDQUFDaEksR0FBRyxFQUFFdkIsT0FBTyxDQUFDLENBQUM7WUFFbEIsT0FBTyxDQUFDdUIsR0FBRyxFQUFFaEUsS0FBSyxFQUFFMEUsZ0JBQWdCLENBQUM7VUFDdEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJBLElBQUEzQyxNQUFBLEdBQUE1RyxPQUFBO1VBV08sTUFBTThRLFdBQVcsR0FBR2xLLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQzRKLGFBQWEsQ0FBQyxFQUFrQixDQUFDO1VBQUNoTyxPQUFBLENBQUE0UCxXQUFBLEdBQUFBLFdBQUE7VUFDNUQsTUFBTXhILGNBQWMsR0FBR0EsQ0FBQSxLQUFNMUMsTUFBQSxDQUFBdEIsT0FBSyxDQUFDOEosVUFBVSxDQUFDMEIsV0FBVyxDQUFDO1VBQUM1UCxPQUFBLENBQUFvSSxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWmxFLElBQUExQyxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQW1KLFFBQUEsR0FBQW5KLE9BQUE7VUFDQSxJQUFBNkcsTUFBQSxHQUFBN0csT0FBQTtVQUNBLElBQUFtUSxXQUFBLEdBQUFuUSxPQUFBO1VBQ0EsSUFBQThHLE1BQUEsR0FBQTlHLE9BQUE7VUFFTSxTQUFVeUssTUFBTUEsQ0FBQztZQUFFSixNQUFNO1lBQUVDO1VBQVMsQ0FBRTtZQUMzQyxNQUFNO2NBQUVqSztZQUFLLENBQUUsR0FBRyxJQUFBOEksUUFBQSxDQUFBRyxjQUFjLEdBQUU7WUFDbEMsTUFBTSxDQUFDeUgsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBRyxJQUFBcEssTUFBQSxDQUFBMkQsUUFBUSxFQUFDLEVBQUUsQ0FBQztZQUN4QyxNQUFNLENBQUM1RixRQUFRLEVBQUVzTSxXQUFXLENBQUMsR0FBRyxJQUFBckssTUFBQSxDQUFBMkQsUUFBUSxFQUFDbEssS0FBSyxDQUFDc0UsUUFBUSxDQUFDO1lBQ3hELE1BQU0sQ0FBQ3VNLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUcsSUFBQXZLLE1BQUEsQ0FBQTJELFFBQVEsR0FBVztZQUNyRCxNQUFNNkcsb0JBQW9CLEdBQUdBLENBQUEsS0FBSztjQUNqQy9RLEtBQUssQ0FBQ3NFLFFBQVEsR0FBRyxDQUFDdEUsS0FBSyxDQUFDc0UsUUFBUTtZQUNqQyxDQUFDO1lBQ0QsSUFBQW1DLE1BQUEsQ0FBQUssU0FBUyxFQUFDLENBQUM5RyxLQUFLLENBQUMsRUFBRSxNQUFNNFEsV0FBVyxDQUFDNVEsS0FBSyxDQUFDc0UsUUFBUSxDQUFDLENBQUM7WUFFckQsTUFBTTBNLGdCQUFnQixHQUFHNUssQ0FBQyxJQUFHO2NBQzVCQSxDQUFDLENBQUM2SyxjQUFjLEVBQUU7Y0FDbEJOLFNBQVMsQ0FBQ3ZLLENBQUMsQ0FBQzhLLE1BQU0sQ0FBQ2xRLEtBQUssQ0FBQztZQUMxQixDQUFDO1lBRUQsTUFBTW1RLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCbEgsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztjQUNsQjhHLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbkIsQ0FBQztZQUVELE9BQ0N2SyxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUN5SCxXQUFBLENBQUFHLGlCQUFpQjtjQUFDQyxLQUFLLEVBQUVsUSxLQUFLLENBQUNpRCxJQUFJLENBQUNULElBQUksSUFBSSxVQUFVO2NBQUVxTyxTQUFTLEVBQUVBO1lBQVMsR0FDNUV0SyxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFjLEdBQzVCbkMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNuQyxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUM3QixNQUFBLENBQUFpRSxJQUFJO2NBQUM3RCxJQUFJLEVBQUM7WUFBUSxFQUFHLEVBQ3RCTCxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLGVBQU9ySSxLQUFLLENBQUM2RCxjQUFjLENBQVEsQ0FDOUIsRUFDTjBDLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDbkMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDN0IsTUFBQSxDQUFBaUUsSUFBSTtjQUFDN0QsSUFBSSxFQUFDO1lBQVEsRUFBRyxFQUN0QkwsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxlQUFPckksS0FBSyxDQUFDMEQsYUFBYSxDQUFRLENBQzdCLEVBQ042QyxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUN5SCxXQUFBLENBQUFzQixLQUFLO2NBQ0w1TyxJQUFJLEVBQUMsTUFBTTtjQUNYNk8sS0FBSyxFQUFDLGdCQUFnQjtjQUN0QnJRLEtBQUssRUFBRTBQLE1BQU07Y0FDYjNFLFFBQVEsRUFBRWlGLGdCQUFnQjtjQUMxQk0sUUFBUTtjQUNSQyxJQUFJLEVBQUM7WUFBUSxFQUNaLEVBQ0ZoTCxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLGNBQ0M5QixNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUM3QixNQUFBLENBQUFpRSxJQUFJO2NBQ0o3RCxJQUFJLEVBQUV0QyxRQUFRLEdBQUcsU0FBUyxHQUFHLGFBQWE7Y0FDMUNvRSxTQUFTLEVBQUMsZ0JBQWdCO2NBQzFCQyxPQUFPLEVBQUVvSTtZQUFvQixFQUM1QixFQUNGeEssTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDN0IsTUFBQSxDQUFBK0IsVUFBVTtjQUFDRyxTQUFTLEVBQUMsUUFBUTtjQUFDRCxPQUFPLEVBQUMsU0FBUztjQUFDN0IsSUFBSSxFQUFDLEtBQUs7Y0FBQytCLE9BQU8sRUFBRXdJO1lBQVEsRUFBSSxDQUM1RSxDQUNELENBQ2E7VUFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeERBLElBQUE1SyxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQThHLE1BQUEsR0FBQTlHLE9BQUE7VUFDQSxJQUFBNlIsS0FBQSxHQUFBN1IsT0FBQTtVQUNBLElBQUFtSixRQUFBLEdBQUFuSixPQUFBO1VBQ0EsSUFBQThSLFNBQUEsR0FBQTlSLE9BQUE7VUFDQSxJQUFBK1IsU0FBQSxHQUFBL1IsT0FBQTtVQUNBLElBQUFnUyxPQUFBLEdBQUFoUyxPQUFBO1VBQ0EsSUFBQWlTLGVBQUEsR0FBQWpTLE9BQUE7VUFFTSxTQUFVVSxJQUFJQSxDQUFDO1lBQUVMO1VBQUssQ0FBRTtZQUM3QixNQUFNLENBQUN1RSxRQUFRLEVBQUVzTixXQUFXLENBQUMsR0FBR3RMLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQ2lGLFFBQVEsQ0FBQ2xLLEtBQUssQ0FBQ3VFLFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUNDLEtBQUssRUFBRThMLFFBQVEsQ0FBQyxHQUFHL0osTUFBQSxDQUFBdEIsT0FBSyxDQUFDaUYsUUFBUSxDQUFDbEssS0FBSyxDQUFDd0UsS0FBSyxDQUFDO1lBRXJELE1BQU0sQ0FBQ3NOLFVBQVUsRUFBRS9ELEtBQUssQ0FBQyxHQUFHLElBQUE0RCxPQUFBLENBQUFJLFFBQVEsRUFBQ0gsZUFBQSxDQUFBSSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUV0RCxJQUFBeEwsTUFBQSxDQUFBSyxTQUFTLEVBQUMsQ0FBQzlHLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkI2UixXQUFXLENBQUM3UixLQUFLLENBQUN1RSxRQUFRLENBQUM7Y0FDM0IrTCxRQUFRLENBQUN0USxLQUFLLENBQUN3RSxLQUFLLENBQUM7WUFDdEIsQ0FBQyxDQUFDO1lBRUYsTUFBTTBOLFlBQVksR0FBRztjQUNwQmxTLEtBQUs7Y0FDTCtOLEtBQUs7Y0FDTHpKLFFBQVEsRUFBRXRFLEtBQUssQ0FBQ3NFLFFBQVE7Y0FDeEJ4QixRQUFRLEVBQUU5QyxLQUFLLENBQUM4QyxRQUFRO2NBQ3hCaEIsTUFBTSxFQUFFOUIsS0FBSyxDQUFDcUQsWUFBWSxDQUFDdkI7YUFDM0I7WUFDRCxNQUFNcVEsT0FBTyxHQUFHLENBQUNuUyxLQUFLLENBQUM0RCxRQUFRLEdBQUc0TixLQUFBLENBQUEvTSxJQUFJLEdBQUdpTixTQUFBLENBQUFVLFlBQVk7WUFDckQsTUFBTS9SLElBQUksR0FBR21FLEtBQUssSUFBSXNOLFVBQVUsR0FBR0ssT0FBTyxHQUFHVixTQUFBLENBQUF6QixZQUFZO1lBRXpELE9BQ0N6SixNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUNTLFFBQUEsQ0FBQTJILFdBQVcsQ0FBQzRCLFFBQVE7Y0FBQ3JSLEtBQUssRUFBRWtSO1lBQVksR0FDeEMzTCxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUNoSSxJQUFJLE9BQUcsQ0FDYztVQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQWtHLE1BQUEsR0FBQTVHLE9BQUE7VUFTTyxNQUFNMlMsWUFBWSxHQUFHL0wsTUFBQSxDQUFBdEIsT0FBSyxDQUFDNEosYUFBYSxDQUFDLElBQXFCLENBQUM7VUFBQ2hPLE9BQUEsQ0FBQXlSLFlBQUEsR0FBQUEsWUFBQTtVQUNoRSxNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBTWhNLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQzhKLFVBQVUsQ0FBQ3VELFlBQVksQ0FBQztVQUFDelIsT0FBQSxDQUFBMFIsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZwRSxJQUFBaE0sTUFBQSxHQUFBNUcsT0FBQTtVQUNBLElBQUE2UyxLQUFBLEdBQUE3UyxPQUFBO1VBQ0EsSUFBQW1RLFdBQUEsR0FBQW5RLE9BQUE7VUFDQSxJQUFBOFMsT0FBQSxHQUFBOVMsT0FBQTtVQUNBLElBQUE4RyxNQUFBLEdBQUE5RyxPQUFBO1VBQ0EsSUFBQW1KLFFBQUEsR0FBQW5KLE9BQUE7VUFDQSxJQUFBK1MsVUFBQSxHQUFBL1MsT0FBQTtVQUNBLElBQUFnVCxNQUFBLEdBQUFoVCxPQUFBO1VBRUEsSUFBQWlULFVBQUEsR0FBQWpULE9BQUE7VUFFTztVQUFXLE1BQU0ySyxTQUFTLEdBQUdBLENBQUM7WUFBRXRLLEtBQUs7WUFBRTZTLFNBQVMsR0FBRztVQUFLLENBQStDLEtBQUk7WUFDakgsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHeE0sTUFBQSxDQUFBdEIsT0FBSyxDQUFDaUYsUUFBUSxDQUFVLEtBQUssQ0FBQztZQUNoRSxNQUFNLENBQUMzRixRQUFRLEVBQUVzTixXQUFXLENBQUMsR0FBR3RMLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQ2lGLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDOUQsTUFBTSxDQUFDOEksT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzFNLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQ2lGLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFFNUQsTUFBTSxDQUFDcUIsSUFBSSxFQUFFMkgsT0FBTyxDQUFDLEdBQUczTSxNQUFBLENBQUF0QixPQUFLLENBQUNpRixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFDLE1BQU07Y0FDTDdHLFlBQVk7Y0FDWkEsWUFBWSxFQUFFO2dCQUFFN0I7Y0FBUTtZQUFFLENBQzFCLEdBQUd4QixLQUFLO1lBRVQsSUFBQXlHLE1BQUEsQ0FBQUssU0FBUyxFQUFDLENBQUM5RyxLQUFLLENBQUMsRUFBRSxNQUFNaVQsVUFBVSxDQUFDalQsS0FBSyxDQUFDK0YsZUFBZSxDQUFDLENBQUM7WUFFM0QsTUFBTTRHLFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUU7WUFBSyxDQUFFO1lBQ3BDLE1BQU13RyxTQUFTLEdBQUcsTUFBTS9FLEtBQUssSUFBRztjQUMvQnlELFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakJ6RCxLQUFLLENBQUM2QyxjQUFjLEVBQUU7Y0FDdEIsTUFBTTdOLEtBQUssR0FBRyxNQUFNNUIsUUFBUSxDQUFDNEssSUFBSSxFQUFFO2NBQ25DcE0sS0FBSyxDQUFDeUYsV0FBVyxDQUFDckMsS0FBSyxDQUFDO2NBQ3hCMlAsWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztjQUN4QmpCLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQztZQUVELE1BQU11QixVQUFVLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzdCRixPQUFPLENBQUMsRUFBRSxDQUFDO2NBQ1hyQixXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCN1IsS0FBSyxDQUFDeUYsV0FBVyxDQUFDOEYsSUFBSSxDQUFDO1lBQ3hCLENBQUM7WUFDRCxNQUFNOEgsUUFBUSxHQUFHLENBQUMsQ0FBQzlILElBQUksQ0FBQ1IsTUFBTSxHQUFHcUksVUFBVSxHQUFHRCxTQUFTO1lBRXZELElBQUksQ0FBQyxFQUFFLEVBQUV0TixTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQ3lGLElBQUksQ0FBQytILFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDL0gsSUFBSSxDQUFDZ0ksSUFBSSxFQUFFLENBQUN4SSxNQUFNLEVBQUU0QixRQUFRLENBQUNBLFFBQVEsR0FBRyxJQUFJO1lBRTlHLE1BQU14QyxHQUFHLEdBQUcsbUJBQW1CNkksT0FBTyxJQUFJSCxTQUFTLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRTtZQUN0RTtZQUNBLE1BQU07Y0FBRVc7WUFBTSxDQUFFLEdBQUdmLE9BQUEsQ0FBQXhOLE9BQU0sQ0FBQ3dPLE1BQU0sQ0FBQ0MsTUFBTTtZQUV2QyxPQUNDbk4sTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQTtjQUFLSyxTQUFTLEVBQUV5QjtZQUFHLEdBQ2xCNUQsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDUyxRQUFBLENBQUF3SixZQUFZLENBQUNELFFBQVE7Y0FBQ3JSLEtBQUssRUFBRTtnQkFBRWhCLEtBQUs7Z0JBQUVxVCxRQUFRO2dCQUFFN1IsUUFBUTtnQkFBRXVSLFlBQVk7Z0JBQUVEO2NBQVM7WUFBRSxHQUNsRlUsTUFBTSxJQUFJak4sTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDc0ssTUFBQSxDQUFBZ0IsV0FBVztjQUFDMVEsSUFBSSxFQUFFakQsS0FBSyxDQUFDaUQ7WUFBSSxFQUFJLEVBQzVDc0QsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDbUssS0FBQSxDQUFBb0IsSUFBSTtjQUFDUCxRQUFRLEVBQUVBLFFBQVE7Y0FBRTNLLFNBQVMsRUFBQztZQUFpQixHQUNwRG5DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3VLLFVBQUEsQ0FBQWlCLFNBQVM7Y0FDVDdULEtBQUssRUFBRUEsS0FBSztjQUNadUwsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZzRyxXQUFXLEVBQUVBLFdBQVc7Y0FDeEJ0TixRQUFRLEVBQUVBLFFBQVEsSUFBSXVPLFNBQVMsSUFBSUUsT0FBTyxJQUFJSCxTQUFTO2NBQ3ZESyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJFLFVBQVUsRUFBRUE7WUFBVSxFQUNyQixFQUNGN00sTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQTtjQUFNSyxTQUFTLEVBQUU7WUFBaUMsR0FDaEQsQ0FBQyxDQUFDNkMsSUFBSSxDQUFDUixNQUFNLEdBQ2J4RSxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUN5SCxXQUFBLENBQUFnRSxNQUFNO2NBQ05sTixJQUFJLEVBQUMsWUFBWTtjQUNqQitCLE9BQU8sRUFBRXlLLFVBQVU7Y0FDbkJ6RyxRQUFRLEVBQUVBLFFBQVEsQ0FBQ0EsUUFBUSxJQUFJM00sS0FBSyxDQUFDK0Y7WUFBZSxFQUNuRCxHQUVGUSxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUNxSyxVQUFBLENBQUFxQixlQUFlO2NBQUMvVCxLQUFLLEVBQUVBLEtBQUs7Y0FBRTJNLFFBQVEsRUFBRW1HLFNBQVMsSUFBSTlTLEtBQUssQ0FBQytGO1lBQWUsRUFDM0UsQ0FDSyxDQUNELENBQ2dCLENBQ25CO1VBRVIsQ0FBQztVQUFDbEYsT0FBQSxDQUFBeUosU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNFRixJQUFBL0QsTUFBQSxHQUFBNUcsT0FBQTtVQUNBLElBQUE2RyxNQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQXFVLE1BQUEsR0FBQXJVLE9BQUE7VUFDQSxJQUFBbUosUUFBQSxHQUFBbkosT0FBQTtVQUVPLE1BQU1zVSxNQUFNLEdBQUdBLENBQUEsS0FBSztZQUMxQixNQUFNO2NBQUVaLFFBQVE7Y0FBRTdSLFFBQVE7Y0FBRXVSO1lBQVksQ0FBRSxHQUFHLElBQUFqSyxRQUFBLENBQUF5SixlQUFlLEdBQUU7WUFFOUQsTUFBTTJCLE1BQU0sR0FBRyxNQUFNOUYsS0FBSyxJQUFHO2NBQzVCQSxLQUFLLENBQUM2QyxjQUFjLEVBQUU7Y0FDdEIsTUFBTXpQLFFBQVEsQ0FBQzRLLElBQUksRUFBRTtjQUNyQjJHLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUNELE9BQ0N4TSxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUE2QixHQUMzQ25DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQzdCLE1BQUEsQ0FBQStCLFVBQVU7Y0FBQ0csU0FBUyxFQUFDLFFBQVE7Y0FBQzlCLElBQUksRUFBQyxRQUFRO2NBQUMrQixPQUFPLEVBQUV1TDtZQUFNLEVBQUksRUFDaEUzTixNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUMyTCxNQUFBLENBQUFHLEtBQUs7Y0FBQ3pJLE1BQU0sRUFBQztZQUFPLEVBQUcsRUFDeEJuRixNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUM3QixNQUFBLENBQUErQixVQUFVO2NBQUMzQixJQUFJLEVBQUMsTUFBTTtjQUFDOEIsU0FBUyxFQUFDLFFBQVE7Y0FBQ0QsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsT0FBTyxFQUFFMEs7WUFBUSxFQUFJLENBQzdFO1VBRVIsQ0FBQztVQUFDeFMsT0FBQSxDQUFBb1QsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCRixJQUFBMU4sTUFBQSxHQUFBNUcsT0FBQTtVQUNBLElBQUFtUSxXQUFBLEdBQUFuUSxPQUFBO1VBQ0EsSUFBQXlVLE9BQUEsR0FBQXpVLE9BQUE7VUFDQSxJQUFBbUosUUFBQSxHQUFBbkosT0FBQTtVQUNBLElBQUEwVSxNQUFBLEdBQUExVSxPQUFBO1VBQ0EsSUFBQTJVLE1BQUEsR0FBQTNVLE9BQUE7VUFDQSxJQUFBNFUsU0FBQSxHQUFBNVUsT0FBQTtVQUNPO1VBQVcsTUFBTW9VLGVBQWUsR0FBR0EsQ0FBQztZQUFFL1QsS0FBSyxFQUFFO2NBQUVxRDtZQUFZLENBQUU7WUFBRXNKO1VBQVEsQ0FBRSxLQUFJO1lBQ25GLE1BQU07Y0FBRW5MLFFBQVE7Y0FBRXNSLFNBQVM7Y0FBRUM7WUFBWSxDQUFFLEdBQUcsSUFBQWpLLFFBQUEsQ0FBQXlKLGVBQWUsR0FBRTtZQUMvRCxNQUFNLENBQUNoTyxRQUFRLEVBQUVzTixXQUFXLENBQUMsR0FBRyxJQUFBdEwsTUFBQSxDQUFBMkQsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUNzSyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUFsTyxNQUFBLENBQUEyRCxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU07Y0FBRTZEO1lBQUssQ0FBRSxHQUFHLElBQUF3RyxTQUFBLENBQUF0TCxjQUFjLEdBQUU7WUFDbEMsTUFBTXlMLFVBQVUsR0FBRyxNQUFNdEcsS0FBSyxJQUFHO2NBQ2hDLElBQUk7Z0JBQ0hBLEtBQUssQ0FBQzZDLGNBQWMsRUFBRTtnQkFDdEJZLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU04QyxVQUFVLEdBQUcsTUFBTW5ULFFBQVEsQ0FBQ29ULGNBQWMsRUFBRTtnQkFDbEQsSUFBSUQsVUFBVSxDQUFDRSxLQUFLLEtBQUssU0FBUyxFQUFFSixZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUN0RCxNQUFNalQsUUFBUSxDQUFDc1QsTUFBTSxFQUFFO2dCQUN2Qi9CLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7ZUFDeEIsQ0FBQyxPQUFPMU0sQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1R5TCxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsTUFBTWtELE9BQU8sR0FBRzNHLEtBQUssSUFBRztjQUN2QnlELFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEI0QyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFFRCxJQUFJM0IsU0FBUyxFQUFFLE9BQU92TSxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUMrTCxPQUFBLENBQUFILE1BQU0sT0FBRztZQUVoQyxPQUNDMU4sTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFBOUIsTUFBQSxDQUFBdEIsT0FBQSxDQUFBcUQsUUFBQSxRQUNFa00sU0FBUyxJQUNUak8sTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDZ00sTUFBQSxDQUFBVyxLQUFLO2NBQUNDLElBQUksRUFBRSxJQUFJO2NBQUUzVSxJQUFJLEVBQUUsSUFBSTtjQUFFeVUsT0FBTyxFQUFFQTtZQUFPLEdBQzlDeE8sTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxhQUFLMEYsS0FBSyxDQUFDbUgsV0FBVyxDQUFDaEYsS0FBSyxDQUFNLEVBQ2xDM0osTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDaU0sTUFBQSxDQUFBYSxLQUFLO2NBQUMxSCxHQUFHLEVBQUM7WUFBMEIsRUFBRyxFQUN4Q2xILE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsWUFBSTBGLEtBQUssQ0FBQ21ILFdBQVcsQ0FBQ0UsV0FBVyxDQUFLLEVBQ3RDN08sTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQTtjQUFRSyxTQUFTLEVBQUM7WUFBTyxHQUN4Qm5DLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3lILFdBQUEsQ0FBQWdFLE1BQU07Y0FBQ3JMLE9BQU8sRUFBQyxTQUFTO2NBQUNFLE9BQU8sRUFBRW9NO1lBQU8sR0FDeENoSCxLQUFLLENBQUNtSCxXQUFXLENBQUNHLE1BQU0sQ0FDakIsQ0FDRCxDQUVWLEVBQ0Q5TyxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUN5SCxXQUFBLENBQUFnRSxNQUFNO2NBQUNsTixJQUFJLEVBQUMsS0FBSztjQUFDckMsUUFBUSxFQUFFQSxRQUFRO2NBQUVvRSxPQUFPLEVBQUUrTCxVQUFVO2NBQUUvSCxRQUFRLEVBQUVBLFFBQVEsSUFBSXBJO1lBQVEsRUFBSSxDQUM1RjtVQUVMLENBQUM7VUFBQzFELE9BQUEsQ0FBQWtULGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREYsSUFBQXhOLE1BQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBNlMsS0FBQSxHQUFBN1MsT0FBQTtVQUNBLElBQUFtUSxXQUFBLEdBQUFuUSxPQUFBO1VBQ0EsSUFBQTBMLE1BQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBbUosUUFBQSxHQUFBbkosT0FBQTtVQUVPLE1BQU0yVixNQUFNLEdBQUdBLENBQUM7WUFBRXJTLElBQUk7WUFBRXNTO1VBQVUsQ0FBRSxLQUFJO1lBQzlDLE1BQU0sQ0FBQ3ZVLEtBQUssRUFBRXdVLFFBQVEsQ0FBQyxHQUFHalAsTUFBQSxDQUFBdEIsT0FBSyxDQUFDaUYsUUFBUSxDQUFDakgsSUFBSSxFQUFFdVEsTUFBTSxDQUFDO1lBQ3RELE1BQU0sQ0FBQ2xOLEtBQUssRUFBRW1QLFFBQVEsQ0FBQyxHQUFHbFAsTUFBQSxDQUFBdEIsT0FBSyxDQUFDaUYsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUN3TCxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHcFAsTUFBQSxDQUFBdEIsT0FBSyxDQUFDaUYsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNO2NBQUU2RDtZQUFLLENBQUUsR0FBRyxJQUFBakYsUUFBQSxDQUFBRyxjQUFjLEdBQUU7WUFFbEMsU0FBUzJNLFlBQVlBLENBQUN4SCxLQUFLO2NBQzFCLE1BQU07Z0JBQUVwTixLQUFLLEVBQUU2VTtjQUFhLENBQUUsR0FBR3pILEtBQUssQ0FBQzhDLE1BQU07Y0FDN0NzRSxRQUFRLENBQUNLLGFBQWEsQ0FBQztZQUN4QjtZQUVBLFNBQVNDLFdBQVdBLENBQUE7Y0FDbkJMLFFBQVEsQ0FBQyxLQUFLLENBQUM7Y0FDZkUsVUFBVSxDQUFDLEtBQUssQ0FBQztjQUNqQkgsUUFBUSxDQUFDdlMsSUFBSSxFQUFFdVEsTUFBTSxDQUFDO2NBQ3RCK0IsVUFBVSxFQUFFO1lBQ2I7WUFFQSxNQUFNUSxZQUFZLEdBQUcsTUFBTTNILEtBQUssSUFBRztjQUNsQ0EsS0FBSyxDQUFDNkMsY0FBYyxFQUFFO2NBQ3RCMEUsVUFBVSxDQUFDLElBQUksQ0FBQztjQUNoQixNQUFNM1AsUUFBUSxHQUFHLE1BQU0vQyxJQUFJLENBQUMrUyxPQUFPLENBQUM7Z0JBQUV4QyxNQUFNLEVBQUV4UztjQUFLLENBQUUsQ0FBQztjQUN0RCxJQUFJLENBQUNnRixRQUFRLENBQUNpUSxNQUFNLEVBQUVSLFFBQVEsQ0FBQ3pQLFFBQVEsQ0FBQ00sS0FBSyxDQUFDO2NBRTlDK0UsTUFBQSxDQUFBb0IsS0FBSyxDQUFDQyxPQUFPLENBQUNxQixLQUFLLENBQUN5RixNQUFNLENBQUM5RyxPQUFPLENBQUM7Y0FDbkNvSixXQUFXLEVBQUU7WUFDZCxDQUFDO1lBRUQsT0FDQ3ZQLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ21LLEtBQUEsQ0FBQW9CLElBQUk7Y0FBQ1AsUUFBUSxFQUFFMEMsWUFBWTtjQUFFck4sU0FBUyxFQUFDO1lBQWEsR0FDbkRwQyxLQUFLLElBQUlDLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQXVCLEdBQUVwQyxLQUFLLENBQU8sRUFDOURDLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ21LLEtBQUEsQ0FBQTBELFFBQVE7Y0FBQ0MsSUFBSSxFQUFFLENBQUM7Y0FBRW5WLEtBQUssRUFBRUEsS0FBSztjQUFFb1YsV0FBVyxFQUFDLHdCQUF3QjtjQUFDckssUUFBUSxFQUFFNko7WUFBWSxFQUFJLEVBQ2hHclAsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxpQkFDQzlCLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3lILFdBQUEsQ0FBQWdFLE1BQU07Y0FBQ2xOLElBQUksRUFBQyxjQUFjO2NBQUN5SyxLQUFLLEVBQUMsUUFBUTtjQUFDNUksT0FBTyxFQUFDLGNBQWM7Y0FBQ0UsT0FBTyxFQUFFbU47WUFBVyxFQUFJLEVBQzFGdlAsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDeUgsV0FBQSxDQUFBZ0UsTUFBTTtjQUFDdkMsSUFBSSxFQUFDLFFBQVE7Y0FBQzNLLElBQUksRUFBQyxNQUFNO2NBQUMrQixPQUFPLEVBQUVvTixZQUFZO2NBQUUxRSxLQUFLLEVBQUMsUUFBUTtjQUFDcUUsT0FBTyxFQUFFQTtZQUFPLEVBQUksQ0FDcEYsQ0FDSDtVQUVULENBQUM7VUFBQzdVLE9BQUEsQ0FBQXlVLE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0YsSUFBQS9PLE1BQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBNlMsS0FBQSxHQUFBN1MsT0FBQTtVQUNBLElBQUFtUSxXQUFBLEdBQUFuUSxPQUFBO1VBQ0EsSUFBQTZHLE1BQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBbUosUUFBQSxHQUFBbkosT0FBQTtVQUVPO1VBQVcsTUFBTWdVLFdBQVcsR0FBR0EsQ0FBQztZQUFFMVE7VUFBSSxDQUFFLEtBQUk7WUFDbEQsTUFBTW9ULFNBQVMsR0FBRzlQLE1BQUEsQ0FBQXRCLE9BQUssQ0FBQzRCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEMsTUFBTTtjQUNMa0gsS0FBSyxFQUFFO2dCQUFFdUksU0FBUyxFQUFFdkk7Y0FBSztZQUFFLENBQzNCLEdBQUcsSUFBQWpGLFFBQUEsQ0FBQUcsY0FBYyxHQUFFO1lBQ3BCLE1BQU1zTixTQUFTLEdBQUdBLENBQUEsS0FBTUYsU0FBUyxDQUFDcFAsT0FBTyxDQUFDdU4sU0FBUyxFQUFFO1lBQ3JELE1BQU1lLFVBQVUsR0FBR0EsQ0FBQSxLQUFNYyxTQUFTLENBQUNwUCxPQUFPLENBQUN1UCxLQUFLLEVBQUU7WUFFbEQsT0FDQ2pRLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBS0ssU0FBUyxFQUFFO1lBQWdDLEdBQy9DbkMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDeUgsV0FBQSxDQUFBZ0UsTUFBTTtjQUFDbE4sSUFBSSxFQUFDLE1BQU07Y0FBQytCLE9BQU8sRUFBRTROLFNBQVM7Y0FBRUUsSUFBSSxFQUFDO1lBQVMsRUFBRyxFQUV4RGxRLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBUUcsR0FBRyxFQUFFNk4sU0FBUztjQUFFdEIsT0FBTyxFQUFFUTtZQUFVLEdBQzFDaFAsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDN0IsTUFBQSxDQUFBK0IsVUFBVTtjQUFDM0IsSUFBSSxFQUFDLE9BQU87Y0FBQzhCLFNBQVMsRUFBQyxPQUFPO2NBQUNDLE9BQU8sRUFBRTRNO1lBQVUsRUFBSSxFQUNsRWhQLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsaUJBQ0M5QixNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLGFBQUswRixLQUFLLENBQUN1SSxTQUFTLENBQU0sQ0FDbEIsRUFDVC9QLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsY0FDQzlCLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsWUFBSTBGLEtBQUssQ0FBQzVKLE9BQU8sQ0FBSyxDQUNqQixFQUNOb0MsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxDQUFDbUssS0FBQSxDQUFBOEMsTUFBTTtjQUFDclMsSUFBSSxFQUFFQSxJQUFJO2NBQUVzUyxVQUFVLEVBQUVBO1lBQVUsRUFBSSxDQUN0QyxDQUVMO1VBRVIsQ0FBQztVQUFDMVUsT0FBQSxDQUFBOFMsV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CRixJQUFBcE4sTUFBQSxHQUFBNUcsT0FBQTtVQUNBLElBQUE4RyxNQUFBLEdBQUE5RyxPQUFBO1VBRU0sU0FBVWtVLFNBQVNBLENBQUM7WUFBRWhDLFdBQVc7WUFBRTdSLEtBQUs7WUFBRWtULE9BQU87WUFBRUUsVUFBVTtZQUFFN08sUUFBUTtZQUFFZ0g7VUFBSSxDQUFFO1lBQ3BGLE1BQU1tTCxXQUFXLEdBQUduUSxNQUFBLENBQUF0QixPQUFLLENBQUM0QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3RDTixNQUFBLENBQUF0QixPQUFLLENBQUM0QyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNcUosTUFBTSxHQUFHd0YsV0FBVyxDQUFDelAsT0FBTztjQUNsQ2lLLE1BQU0sQ0FBQ3lGLEtBQUssQ0FBQ3RHLE1BQU0sR0FBRyxNQUFNO2NBQzVCYSxNQUFNLENBQUN5RixLQUFLLENBQUN0RyxNQUFNLEdBQUc5RSxJQUFJLENBQUNSLE1BQU0sSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHbUcsTUFBTSxDQUFDMEYsWUFBWSxHQUFHLElBQUk7Y0FDNUUsSUFBSSxDQUFDLFdBQVcsRUFBRS9RLFNBQVMsQ0FBQyxDQUFDQyxRQUFRLENBQUN5RixJQUFJLENBQUMrSCxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDbkUsQ0FBQyxFQUFFLENBQUMvSCxJQUFJLENBQUMsQ0FBQztZQUVWLElBQUE5RSxNQUFBLENBQUFLLFNBQVMsRUFDUixDQUFDOUcsS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKRyxVQUFVLENBQUM0RyxVQUFVLENBQUMsTUFBTTJQLFdBQVcsQ0FBQ3pQLE9BQU8sQ0FBQzRQLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQztjQUM3RGhGLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQyxFQUNELGdCQUFnQixDQUNoQjtZQUVELE1BQU1pRixnQkFBZ0IsR0FBRztjQUFFbkssUUFBUSxFQUFFcEk7WUFBUSxDQUFFO1lBQy9DLE1BQU13UyxpQkFBaUIsR0FBRzNRLENBQUMsSUFBRztjQUM3QixNQUFNO2dCQUFFcEY7Y0FBSyxDQUFFLEdBQUdvRixDQUFDLENBQUM4SyxNQUFNO2NBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUVyTCxTQUFTLENBQUMsQ0FBQ0MsUUFBUSxDQUFDOUUsS0FBSyxDQUFDc1MsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Y0FDL0RKLE9BQU8sQ0FBQ2xTLEtBQUssQ0FBQztZQUNmLENBQUM7WUFDRCxNQUFNZ1csYUFBYSxHQUFHNVEsQ0FBQyxJQUFHO2NBQ3pCLElBQUlBLENBQUMsQ0FBQ2dGLEdBQUcsS0FBSyxPQUFPLEVBQUU7Y0FDdkIsTUFBTTZMLEVBQUUsR0FBR0MsU0FBUyxJQUFJQSxTQUFTLEdBQUcsSUFBSTtjQUN4QyxNQUFNbFcsS0FBSyxHQUFHb0YsQ0FBQyxDQUFDOEssTUFBTSxDQUFDbFEsS0FBSyxDQUFDc1MsVUFBVSxDQUFDLElBQUksQ0FBQztjQUM3QyxJQUFJLENBQUMsRUFBRSxFQUFFek4sU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUM5RSxLQUFLLENBQUMsRUFBRTtjQUMzQ29GLENBQUMsQ0FBQytRLFFBQVEsR0FBR2pFLE9BQU8sQ0FBQytELEVBQUUsQ0FBQyxHQUFHN0QsVUFBVSxFQUFFO1lBQ3hDLENBQUM7WUFFRCxPQUNDN00sTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQTtjQUFBLEdBQ0t5TyxnQkFBZ0I7Y0FDcEJYLElBQUksRUFBRSxDQUFDO2NBQ1BuVixLQUFLLEVBQUV1SyxJQUFJO2NBQ1hRLFFBQVEsRUFBRWdMLGlCQUFpQjtjQUMzQkssU0FBUyxFQUFFSixhQUFhO2NBQ3hCSyxTQUFTLEVBQUUsSUFBSTtjQUNmM08sU0FBUyxFQUFDLGlCQUFpQjtjQUMzQkYsR0FBRyxFQUFFa087WUFBVyxFQUNmO1VBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUFuUSxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQTJYLFNBQUEsR0FBQTNYLE9BQUE7VUFGQTs7VUFRTSxTQUFVd1UsS0FBS0EsQ0FBQztZQUFFekk7VUFBTSxDQUFjO1lBQzNDLE1BQU02TCxTQUFTLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUN6UixRQUFRLENBQUM0RixNQUFNLENBQUM7WUFDdkQsTUFBTThMLE9BQU8sR0FBRzlMLE1BQU0sS0FBSyxTQUFTO1lBQ3BDLE1BQU0sQ0FBQytMLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUFOLFNBQUEsQ0FBQU8sUUFBUSxFQUFDTixTQUFTLEVBQUVDLE9BQU8sQ0FBQztZQUM1RSxNQUFNTSxXQUFXLEdBQUdILE9BQU8sQ0FBQ0ksUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ3ZELE1BQU1DLGVBQWUsR0FBR1AsT0FBTyxDQUFDSyxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDM0QsT0FDQ3pSLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQTBCLEdBQ3hDbkMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxlQUFPLEdBQUc0UCxlQUFlLEVBQUUsRSxJQUFTLEVBQ3BDMVIsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSxlQUFPLEdBQUd5UCxXQUFXLEVBQUUsQ0FBUSxDQUMxQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBdlIsTUFBQSxHQUFBNUcsT0FBQTtVQURBOztVQUVBLE1BQU07WUFBRXVLLFFBQVE7WUFBRXJDO1VBQVMsQ0FBRSxHQUFHdEIsTUFBQSxDQUFBdEIsT0FBSztVQUUvQixTQUFVNFMsUUFBUUEsQ0FBQ04sU0FBa0IsRUFBRUMsT0FBZ0I7WUFDNUQsTUFBTSxDQUFDVSxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHak8sUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVuQ3JDLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSXVRLFVBQTBCO2NBRTlCLElBQUliLFNBQVMsRUFBRTtnQkFDZGEsVUFBVSxHQUFHQyxXQUFXLENBQUMsTUFBSztrQkFDN0JGLE9BQU8sQ0FBQ0csUUFBUSxJQUFJQSxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O2NBR1QsT0FBTyxNQUFLO2dCQUNYQyxhQUFhLENBQUNILFVBQVUsQ0FBQztjQUMxQixDQUFDO1lBQ0YsQ0FBQyxFQUFFLENBQUNiLFNBQVMsQ0FBQyxDQUFDO1lBRWYxUCxTQUFTLENBQUMsTUFBSztjQUNkLElBQUkyUCxPQUFPLEVBQUU7Z0JBQ1pXLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1lBRVosQ0FBQyxFQUFFLENBQUNYLE9BQU8sQ0FBQyxDQUFDO1lBRWIsTUFBTUksWUFBWSxHQUFHTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDakMsTUFBTVAsT0FBTyxHQUFHYSxJQUFJLENBQUNDLEtBQUssQ0FBRVAsSUFBSSxHQUFHLEdBQUcsR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU1SLE9BQU8sR0FBR2MsSUFBSSxDQUFDQyxLQUFLLENBQUVQLElBQUksR0FBRyxJQUFJLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNVCxLQUFLLEdBQUdlLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV6QyxPQUFPLENBQUNULEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQztVQUMvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0EsSUFBQXJSLE1BQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBK1ksUUFBQSxHQUFBL1ksT0FBQTtVQUNBLElBQUFtUSxXQUFBLEdBQUFuUSxPQUFBO1VBQ0EsSUFBQTZHLE1BQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBd0IsUUFBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUFnWixZQUFBLEdBQUFoWixPQUFBO1VBQ0EsSUFBQTRLLE9BQUEsR0FBQTVLLE9BQUE7VUFFTSxTQUFVeVMsWUFBWUEsQ0FBQTtZQUMzQixTQUFTd0csVUFBVUEsQ0FBQTtjQUNsQkYsUUFBQSxDQUFBRyxTQUFTLENBQUNDLFdBQVcsR0FBRyxJQUFJO1lBQzdCO1lBRUEsSUFBSSxDQUFDM1gsUUFBQSxDQUFBa0IsVUFBVSxDQUFDbUMsS0FBSyxFQUFFLE9BQU8rQixNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUNzUSxZQUFBLENBQUFJLGFBQWEsT0FBRztZQUMvQyxPQUNDeFMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBa0IsR0FDaENuQyxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBO2NBQUtvRixHQUFHLEVBQUMsdUJBQXVCO2NBQUNELEdBQUcsRUFBQztZQUFnQixFQUFHLEVBQ3hEakgsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQTtjQUFNSyxTQUFTLEVBQUM7WUFBcUIsR0FDcENuQyxNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLENBQUM3QixNQUFBLENBQUFpRSxJQUFJO2NBQUM3RCxJQUFJLEVBQUUyRCxPQUFBLENBQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7Y0FBRWhDLFNBQVMsRUFBQztZQUFtQixFQUFHLEVBQ3BFbkMsTUFBQSxDQUFBdEIsT0FBQSxDQUFBb0QsYUFBQSw4QkFBdUIsRUFDdkI5QixNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLFlBQ0M5QixNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLG9FQUFpRSxFLEtBQUM5QixNQUFBLENBQUF0QixPQUFBLENBQUFvRCxhQUFBLFlBQU0sRSxtREFFckUsRUFDSjlCLE1BQUEsQ0FBQXRCLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3lILFdBQUEsQ0FBQWdFLE1BQU07Y0FBQ2xOLElBQUksRUFBQyxNQUFNO2NBQUMrQixPQUFPLEVBQUVpUSxVQUFVO2NBQUV2SCxLQUFLLEVBQUM7WUFBZ0IsRUFBRyxDQUM1RCxDQUNGO1VBRVIifQ==