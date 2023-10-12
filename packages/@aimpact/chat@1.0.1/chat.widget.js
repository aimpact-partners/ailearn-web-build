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
        hash: 1186049454,
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
        hash: 1336384220,
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
        hash: 1317120079,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsIiwiX3ZvaWNlIiwiX3dyYXBwZXIiLCJfcmVjb3JkZXIiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwicmVjb3JkZXIiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImNvbnN0cnVjdG9yIiwiUmVjb3JkZXIiLCJyZWFjdGl2ZVByb3BzIiwiTGlzdGVuQXBwQ2hhbmdlcyIsInNldCIsInJhdGUiLCJBcHBXcmFwcGVyIiwiYXVkaW9TcGVlZCIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInRyaWdnZXIiLCJfY29yZSIsIl9hdWRpbyIsIl9leHRlbnNpb25zIiwibWVzc2FnZXMiLCJFWFRFTlNJT05TIiwiY2F0ZWdvcnkiLCJjaGF0IiwiY2hhdHMiLCJpdGVtcyIsImF1ZGlvIiwiYXVkaW9NYW5hZ2VyIiwia2JzIiwia25vd2xlZGdlQm94ZXMiLCJzZWxlY3RlZEtiIiwia2IiLCJzZWxlY3RlZE1vZGVsIiwibW9kZWwiLCJub3RGb3VuZCIsInNlbGVjdGVkS2JQYXRoIiwiZmluZCIsImkiLCJpZCIsInBhdGgiLCJjdXJyZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJleHRlbnNpb25zIiwiTWFwIiwiYXV0b3BsYXkiLCJmZXRjaGluZyIsInJlYWR5IiwiQ2hhdCIsImlzUmVhZHkiLCJsb2FkQWxsIiwiY3VycmVudENoYXQiLCJmb3VuZCIsImtub3dsZWRlQm94U2VsZWN0ZWQiLCJrbm93bGVkZ2VCb3hJZCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZXh0cyIsIm1ldGFkYXRhIiwiZm9yRWFjaCIsImV4dGVuc2lvbiIsImluZGV4Iiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ3YWl0aW5nUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9uTGlzdGVuIiwib25FbmQiLCJvZmYiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiQmFja0Fycm93Iiwic2VwYXJhdG9yIiwiaWNvbiIsInVzZVJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJpc0luQ29udGFpbmVyIiwiY29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbmRSZWN0IiwidGhyZXNob2xkIiwiYm90dG9tIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiSWNvbkJ1dHRvbiIsInJlZiIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiX3VzZUV4dGVuc2lvbiIsIl9tZXNzYWdlcyIsIl9jb250ZXh0IiwiX2V4dGVuc2lvblJlbmRlcmVyIiwiQ29udGVudCIsInVzZUNoYXRDb250ZXh0Iiwid2ViQ29tcG9uZW50TmFtZSIsInVzZUV4dGVuc2lvbiIsIkV4dGVuc2lvblJlbmRlcmVyIiwiY29tcG9uZW50IiwicmVmZXJlbmNlIiwiTWVzc2FnZXMiLCJDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiX2hlYWRlciIsIl9pbnB1dCIsIl9CYWNrQXJyb3ciLCJfY29udGVudCIsImNoYXRJbnRybyIsInJlYWRlciIsInNldFJlYWRlciIsInVzZVN0YXRlIiwiY2xzIiwiSGVhZGVyIiwiYXZvaWRDaGF0IiwiQ2hhdElucHV0IiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsIkljb24iLCJJQ09OUyIsIl9hbnN3ZXJpbmciLCJfbWVzc2FnZSIsInRvdGFsTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImxlbmd0aCIsIm91dHB1dCIsIm1hcCIsImxhc3QiLCJNZXNzYWdlIiwia2V5IiwiX3RvYXN0IiwiTWVzc2FnZUFjdGlvbnMiLCJ0ZXh0IiwibWVzc2FnZVRva2VucyIsInBsYXkiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJsaXN0ZW4iLCJwb3NpdGlvblRvQ3V0Iiwib25QYXVzZSIsInN0b3AiLCJjb3B5TWVzc2FnZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiYXBwbHkiLCJfc2Vzc2lvbiIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsImFsdCIsInNyYyIsIm9uRXJyb3IiLCJfcGxheWFibGUiLCJfYXVkaW9QbGF5ZXIiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwidGV4dHMiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsIm9uQ2xpY2tXb3JkIiwiZXZlbnQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsInRvb2xUZXh0cyIsInRvb2xzIiwiQXVkaW9QbGF5ZXIiLCJjb252ZXJ0IiwiQ2hhdE1lc3NhZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdGV4dCIsIl9hY3Rpb25zIiwiX3Byb2ZpbGVJY29uIiwiX3N5c3RlbUFjdGlvbnMiLCJNZXNzYWdlQ29tcG9uZW50Iiwic2V0Q29udGVudCIsImZpbmlzaGVkIiwic2V0RmluaXNoZWQiLCJ1c2FnZSIsInRvdGFsVG9rZW5zIiwiQUNUSU9OUyIsImJsb2NrcyIsInBsYXlhYmxlQ29udGVudCIsImFjdGlvbnMiLCJwYXJzZVRleHQiLCJTeXN0ZW1BY3Rpb25zIiwibWVtbyIsIl9jb2xsYXBzaWJsZSIsIkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwidXNlTWFya2VkIiwic3lzdGVtQWN0aW9ucyIsIkNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdHRycyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwibWF0Y2hlcyIsIml0ZW0iLCJwYXJhZ3JhcGgiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInRyYW5zY3JpcHRpb24iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsIl9hY3Rpb24iLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIl9jb21wb25lbnRzIiwiX3ByZWxvYWQiLCJDaGF0U2tlbGV0b24iLCJQcmVsb2FkIiwid2lkdGgiLCJoZWlnaHQiLCJzZXRSZWFkeSIsImNvbnRyb2wiLCJvblJlYWR5IiwiQ2hhdENvbnRleHQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzZXRBdXRvcGxheSIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsImhhbmRsZUF1dG9wbGF5VG9nZ2xlIiwiaGFuZGxlQ2hhdFNlYXJjaCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Iiwib25SZWFkZXIiLCJJbnB1dCIsImxhYmVsIiwicmVxdWlyZWQiLCJfY2hhdCIsIl9za2VsZXRvbiIsIl9ub3RGb3VuZCIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNvbnRleHRWYWx1ZSIsIkNvbnRyb2wiLCJDaGF0Tm90Rm91bmQiLCJQcm92aWRlciIsIklucHV0Q29udGV4dCIsInVzZUlucHV0Q29udGV4dCIsIl9mb3JtIiwiX2NvbmZpZyIsIl9yZWNvcmRpbmciLCJfaW5kZXgiLCJfdGV4dElucHV0IiwiaXNXYWl0aW5nIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJzZXRUZXh0Iiwic2VuZEF1ZGlvIiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJzeXN0ZW0iLCJjb25maWciLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJfdGltZXIiLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsIl9wbGF5ZXIiLCJfbW9kYWwiLCJfaW1hZ2UiLCJfY29udGV4dDIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwbGF5QWN0aW9uIiwicGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb25zIiwic3RhdGUiLCJyZWNvcmQiLCJvbkNsb3NlIiwiTW9kYWwiLCJvcGVuIiwicGVybWlzc2lvbnMiLCJJbWFnZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwiVUlGb3JtIiwiY2xvc2VNb2RhbCIsInNldFZhbHVlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsInRleHRBcmVhVmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInB1Ymxpc2giLCJzdGF0dXMiLCJUZXh0YXJlYSIsInJvd3MiLCJwbGFjZWhvbGRlciIsImRpYWxvZ1JlZiIsImFzc2lzdGFudCIsIm9wZW5Nb2RhbCIsImNsb3NlIiwibW9kZSIsInRleHRBcmVhUmVmIiwic3R5bGUiLCJzY3JvbGxIZWlnaHQiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwiX21hbmFnZXIiLCJfY29tcG9uZW50czIiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvbWVzc2FnZXMudHMiLCIvdHMvc3RvcmUvYXVkaW8udHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHMvdmlld3MvY2hhdC9CYWNrQXJyb3cudHN4IiwiL3RzL3ZpZXdzL2NoYXQvY29udGVudC50c3giLCIvdHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4IiwiL3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvYW5zd2VyaW5nLnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29udGV4dC50cyIsIi90cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvdmlld3MvY2hhdC91c2UtZXh0ZW5zaW9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbnB1dC9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3N5c3RlbS9mb3JtLnRzeCIsIi90cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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