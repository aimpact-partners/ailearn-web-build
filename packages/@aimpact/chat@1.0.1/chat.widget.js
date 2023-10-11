System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "@bgroup/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/extensions", "react@18.2.0", "pragmate-ui@0.0.37/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.37/toast", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/collapsible", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.37/preload", "pragmate-ui@0.0.37/form", "pragmate-ui@0.0.37/components", "@aimpact/ailearn-app@0.0.2/config", "pragmate-ui@0.0.37/modal", "pragmate-ui@0.0.37/image", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context3) {
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
    }, function (_aimpactChat101SharedHooks) {
      dependency_18 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0037Collapsible) {
      dependency_19 = _pragmateUi0037Collapsible;
    }, function (_aimpactChat101SharedComponents) {
      dependency_20 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi0037Preload) {
      dependency_21 = _pragmateUi0037Preload;
    }, function (_pragmateUi0037Form) {
      dependency_22 = _pragmateUi0037Form;
    }, function (_pragmateUi0037Components) {
      dependency_23 = _pragmateUi0037Components;
    }, function (_aimpactAilearnApp002Config) {
      dependency_24 = _aimpactAilearnApp002Config;
    }, function (_pragmateUi0037Modal) {
      dependency_25 = _pragmateUi0037Modal;
    }, function (_pragmateUi0037Image) {
      dependency_26 = _pragmateUi0037Image;
    }, function (_aimpactChat101UiManager) {
      dependency_27 = _aimpactChat101UiManager;
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
        hash: 1771366716,
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
          const Message = _react.default.memo(MessageComponent);
          exports.Message = Message;
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./views/chat/messages/message/system-actions/action
      *******************************************************************/

      ims.set('./views/chat/messages/message/system-actions/action', {
        hash: 124477484,
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
            },
            className
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
        hash: 3066904415,
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
            if (!actions.length) return null;
            const last = actions[actions.length - 1];
            return _react.default.createElement("section", {
              className: 'message-actions__container'
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_action.Action, {
              data: last,
              last: true
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, "a")), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("section", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsIiwiX3ZvaWNlIiwiX3dyYXBwZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImNvbnN0cnVjdG9yIiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwiTGlzdGVuQXBwQ2hhbmdlcyIsInNldCIsInJhdGUiLCJBcHBXcmFwcGVyIiwiYXVkaW9TcGVlZCIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInRyaWdnZXIiLCJfY29yZSIsIl9hdWRpbyIsIl9leHRlbnNpb25zIiwibWVzc2FnZXMiLCJFWFRFTlNJT05TIiwiY2F0ZWdvcnkiLCJjaGF0IiwiY2hhdHMiLCJpdGVtcyIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwia2JzIiwia25vd2xlZGdlQm94ZXMiLCJzZWxlY3RlZEtiIiwia2IiLCJzZWxlY3RlZE1vZGVsIiwibW9kZWwiLCJub3RGb3VuZCIsInNlbGVjdGVkS2JQYXRoIiwiZmluZCIsImkiLCJpZCIsInBhdGgiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJleHRlbnNpb25zIiwiTWFwIiwiYXV0b3BsYXkiLCJmZXRjaGluZyIsInJlYWR5IiwiQ2hhdCIsImlzUmVhZHkiLCJsb2FkQWxsIiwiY3VycmVudENoYXQiLCJmb3VuZCIsImtub3dsZWRlQm94U2VsZWN0ZWQiLCJrbm93bGVkZ2VCb3hJZCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZXh0cyIsIm1ldGFkYXRhIiwiZm9yRWFjaCIsImV4dGVuc2lvbiIsImluZGV4Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ3YWl0aW5nUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiQmFja0Fycm93Iiwic2VwYXJhdG9yIiwiaWNvbiIsInVzZVJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJpc0luQ29udGFpbmVyIiwiY29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbmRSZWN0IiwidGhyZXNob2xkIiwiYm90dG9tIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiSWNvbkJ1dHRvbiIsInJlZiIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiX3VzZUV4dGVuc2lvbiIsIl9tZXNzYWdlcyIsIl9jb250ZXh0IiwiX2V4dGVuc2lvblJlbmRlcmVyIiwiQ29udGVudCIsInVzZUNoYXRDb250ZXh0Iiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiTWVzc2FnZXMiLCJDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiX2hlYWRlciIsIl9pbnB1dCIsIl9CYWNrQXJyb3ciLCJfY29udGVudCIsImNoYXRJbnRybyIsInJlYWRlciIsInNldFJlYWRlciIsInVzZVN0YXRlIiwiY2xzIiwiSGVhZGVyIiwiYXZvaWRDaGF0IiwiQ2hhdElucHV0IiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsIkljb24iLCJJQ09OUyIsIl9hbnN3ZXJpbmciLCJfbWVzc2FnZSIsInRvdGFsTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImxlbmd0aCIsIm91dHB1dCIsIm1hcCIsImxhc3QiLCJNZXNzYWdlIiwia2V5IiwiX3RvYXN0IiwiTWVzc2FnZUFjdGlvbnMiLCJ0ZXh0IiwibWVzc2FnZVRva2VucyIsInBsYXkiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJsaXN0ZW4iLCJwb3NpdGlvblRvQ3V0Iiwib25QYXVzZSIsInN0b3AiLCJjb3B5TWVzc2FnZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiYXBwbHkiLCJfc2Vzc2lvbiIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsImFsdCIsInNyYyIsIm9uRXJyb3IiLCJfcGxheWFibGUiLCJfYXVkaW9QbGF5ZXIiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwidGV4dHMiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsIm9uQ2xpY2tXb3JkIiwiZXZlbnQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsInRvb2xUZXh0cyIsInRvb2xzIiwiQXVkaW9QbGF5ZXIiLCJjb252ZXJ0IiwiQ2hhdE1lc3NhZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdGV4dCIsIl9hY3Rpb25zIiwiX3Byb2ZpbGVJY29uIiwiX3N5c3RlbUFjdGlvbnMiLCJNZXNzYWdlQ29tcG9uZW50Iiwic2V0Q29udGVudCIsImZpbmlzaGVkIiwic2V0RmluaXNoZWQiLCJ1c2FnZSIsInRvdGFsVG9rZW5zIiwiQUNUSU9OUyIsImJsb2NrcyIsInBsYXlhYmxlQ29udGVudCIsImFjdGlvbnMiLCJwYXJzZVRleHQiLCJTeXN0ZW1BY3Rpb25zIiwibWVtbyIsIl9jb2xsYXBzaWJsZSIsIkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwidXNlTWFya2VkIiwic3lzdGVtQWN0aW9ucyIsIkNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdHRycyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwibWF0Y2hlcyIsIml0ZW0iLCJwYXJhZ3JhcGgiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInBhcnNlIiwicGFyYW1zIiwiZnVuY3Rpb25zIiwiX2FjdGlvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiX2NvbXBvbmVudHMiLCJfcHJlbG9hZCIsIkNoYXRTa2VsZXRvbiIsIlByZWxvYWQiLCJ3aWR0aCIsImhlaWdodCIsInNldFJlYWR5IiwiY29udHJvbCIsIm9uUmVhZHkiLCJDaGF0Q29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNldEF1dG9wbGF5IiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiaGFuZGxlQXV0b3BsYXlUb2dnbGUiLCJoYW5kbGVDaGF0U2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJvblJlYWRlciIsIklucHV0IiwibGFiZWwiLCJyZXF1aXJlZCIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlByb3ZpZGVyIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiX2Zvcm0iLCJfY29uZmlnIiwiX3JlY29yZGluZyIsIl9pbmRleCIsIl90ZXh0SW5wdXQiLCJpc1dhaXRpbmciLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJ3YWl0aW5nIiwic2V0V2FpdGluZyIsInNldFRleHQiLCJzZW5kQXVkaW8iLCJoYW5kbGVTZW5kIiwib25TdWJtaXQiLCJyZXBsYWNlQWxsIiwidHJpbSIsInN5c3RlbSIsImNvbmZpZyIsIlN5c3RlbU1vZGFsIiwiRm9ybSIsIlRleHRJbnB1dCIsIkJ1dHRvbiIsIlJlY29yZGluZ0J1dHRvbiIsIl90aW1lciIsIlBsYXllciIsImNhbmNlbCIsIlRpbWVyIiwiX3BsYXllciIsIl9tb2RhbCIsIl9pbWFnZSIsIl9jb250ZXh0MiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInBsYXlBY3Rpb24iLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uQ2xvc2UiLCJNb2RhbCIsIm9wZW4iLCJwZXJtaXNzaW9ucyIsIkltYWdlIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFyZWFWYWx1ZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwicHVibGlzaCIsInN0YXR1cyIsIlRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJtb2RlIiwidGV4dEFyZWFSZWYiLCJzdHlsZSIsInNjcm9sbEhlaWdodCIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJfbWFuYWdlciIsIl9jb21wb25lbnRzMiIsIm9wZW5EaWFsb2ciLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi9tZXNzYWdlcy50cyIsIi90cy9zdG9yZS9hdWRpby50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy92aWV3cy9jaGF0L0JhY2tBcnJvdy50c3giLCIvdHMvdmlld3MvY2hhdC9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jaGF0L2V4dGVuc2lvbi1yZW5kZXJlci50c3giLCIvdHMvdmlld3MvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9hbnN3ZXJpbmcudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy50c3giLCIvdHMvdmlld3MvaW5wdXQvc3lzdGVtL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL3VzZS10aW1lci50c3giLCIvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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