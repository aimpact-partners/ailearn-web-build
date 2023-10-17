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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.1.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
        hash: 1343659538,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBT087VUFBVSxNQUNYQSxVQUFXLFNBQVFDLCtCQUF5QjtZQUNqRCxNQUFNO1lBRU5DLFdBQVc7Y0FDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUlDLG1CQUFZLEVBQUU7Y0FDaENDLFVBQVUsQ0FBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNO2NBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFDQSxJQUFJQyxNQUFNO2NBQ1QsT0FBT0MsV0FBSTtZQUNaO1lBRUFDLElBQUk7Y0FDSCxJQUFJLENBQUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUFDLElBQUk7Y0FDSCxJQUFJLENBQUMsTUFBTSxDQUFDQyxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDOzs7Ozs7Ozs7OztVQzdCRDs7VUFFQUM7WUFDQUM7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQTtVQUNBO1VBQ0E7VUFDQTtVQU1PO1VBQVksTUFBT0MsWUFBYSxTQUFRQyxvQkFBcUI7WUFHbkUsT0FBTztZQUNQLFNBQVM7WUFFVCxJQUFJQyxRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN0QjtZQUVBLFFBQVEsR0FBRztjQUNWQyxHQUFHLEVBQUVDLFlBQUs7Y0FDVkMsR0FBRyxFQUFFQyxlQUFRLENBQUU7YUFDZjs7WUFFRCxPQUFPLEdBQUcsS0FBSztZQUNmLElBQUlDLE1BQU07Y0FDVCxPQUFPLElBQUksQ0FBQyxjQUFjO1lBQzNCO1lBRUEsY0FBYztZQUNkQyxZQUFZQyxNQUFNO2NBQ2pCLEtBQUssQ0FBQyxFQUFFLENBQUM7Y0FDVCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUlDLGtCQUFRLEVBQUU7Y0FDL0IsSUFBSSxDQUFDLE9BQU8sR0FBR0QsTUFBTTtjQUNyQixJQUFJLENBQUNFLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2NBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDckRDLFFBQVEsRUFBRUMsbUJBQVUsQ0FBQ0QsUUFBUTtnQkFDN0JFLElBQUksRUFBRUQsbUJBQVUsQ0FBQ0U7ZUFDakIsQ0FBQztjQUVGRixtQkFBVSxDQUFDRyxFQUFFLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQztZQUM1RDtZQUVBQSxnQkFBZ0IsR0FBRyxNQUFLO2NBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUNDLEdBQUcsQ0FBQztnQkFDdkJKLElBQUksRUFBRUQsbUJBQVUsQ0FBQ0UsVUFBVTtnQkFDM0JJLFNBQVMsRUFBRU4sbUJBQVUsQ0FBQ0Q7ZUFDdEIsQ0FBQztZQUNILENBQUM7WUFFRFEsWUFBWSxDQUFDQyxJQUFJO2NBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDQSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyxVQUFVRCxJQUFJLFlBQVksQ0FBQztjQUVyRSxJQUFJLENBQUMsT0FBTyxHQUFHQSxJQUFJO2NBQ25CLElBQUksQ0FBQ0UsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2Qjs7VUFDQTFCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hERDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBT00sTUFBT1osWUFBYSxTQUFRZ0Isb0JBQXFCO1lBQ3RELFNBQVM7WUFLVCxXQUFXLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDNUIsSUFBSXVCLFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBRUEsS0FBSztZQUNMLElBQUlILElBQUk7Y0FDUCxPQUFPLElBQUksQ0FBQyxLQUFLO1lBQ2xCO1lBRUEsU0FBUztZQUNULElBQUlJLFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBRUEsS0FBSztZQUNMLElBQUlDLElBQUk7Y0FDUCxPQUFPLElBQUksQ0FBQyxLQUFLO1lBQ2xCO1lBQ0EsTUFBTSxHQUFHYixtQkFBVSxDQUFDYyxLQUFLO1lBQ3pCLElBQUlBLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUNDLEtBQUssSUFBSSxFQUFFO1lBQy9CO1lBRUEsTUFBTSxHQUFpQixJQUFJNUIsbUJBQVksQ0FBQyxJQUFJLENBQUM7WUFDN0MsSUFBSTZCLFlBQVk7Y0FDZixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUEsSUFBSSxHQUFHaEIsbUJBQVUsQ0FBQ2lCLGNBQWM7WUFDaEMsSUFBSUMsR0FBRztjQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQ0gsS0FBSyxJQUFJLEVBQUU7WUFDN0I7WUFFQSxXQUFXO1lBQ1gsSUFBSUksVUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVc7WUFDeEI7WUFDQSxJQUFJQSxVQUFVLENBQUNDLEVBQUU7Y0FDaEIsSUFBSSxDQUFDLFdBQVcsR0FBR0EsRUFBRTtZQUN0QjtZQUVBLGNBQWMsR0FBRyxPQUFPO1lBQ3hCLElBQUlDLGFBQWE7Y0FDaEIsT0FBTyxJQUFJLENBQUMsY0FBYztZQUMzQjtZQUNBLElBQUlBLGFBQWEsQ0FBQ0MsS0FBSztjQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHQSxLQUFLO1lBQzVCO1lBRUEsU0FBUztZQUNULElBQUlDLFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBQ0EsSUFBSUEsUUFBUSxDQUFDQSxRQUFRO2NBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUdBLFFBQVE7WUFDMUI7WUFFQSxJQUFJQyxjQUFjO2NBQ2pCLE1BQU1MLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDSixLQUFLLENBQUNVLElBQUksQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEVBQUUsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDO2NBQ3ZFLE9BQU9SLFVBQVUsRUFBRVMsSUFBSSxJQUFJLGtCQUFrQjtZQUM5QztZQUVBLGVBQWU7WUFDZixJQUFJQyxjQUFjO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLGVBQWU7WUFDNUI7WUFFQSxJQUFJQSxjQUFjLENBQUNDLE9BQU87Y0FDekIsSUFBSUEsT0FBTyxFQUFFSCxFQUFFLEtBQUssSUFBSSxDQUFDLGVBQWUsRUFBRUEsRUFBRSxFQUFFO2NBQzlDLElBQUksQ0FBQyxlQUFlLEdBQUdHLE9BQU87WUFDL0I7WUFFQSxXQUFXLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3ZCLElBQUlDLFVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ3hCO1lBQ0FyQztjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0csYUFBYSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7Y0FDbkQsSUFBSSxDQUFDbUMsUUFBUSxHQUFHLElBQUk7WUFDckI7WUFFQWxELEtBQUs7Y0FDSixJQUFJLENBQUNtRCxRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUNDLEtBQUssR0FBRyxLQUFLO1lBQ25CO1lBRUF6RCxJQUFJLEdBQUcsTUFBT2lELEVBQVUsSUFBSTtjQUMzQixJQUFJLENBQUNBLEVBQUUsRUFBRTtnQkFDUixJQUFJLENBQUNRLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNaLFFBQVEsR0FBRyxJQUFJO2dCQUNwQjs7Y0FHRCxJQUFJLENBQUNXLFFBQVEsR0FBRyxJQUFJO2NBRXBCLE1BQU1yQixJQUFJLEdBQUcsSUFBSXVCLFVBQUksQ0FBQztnQkFBRVQ7Y0FBRSxDQUFFLENBQUM7Y0FDN0IsTUFBTWQsSUFBSSxDQUFDd0IsT0FBTztjQUNsQixNQUFNeEIsSUFBSSxDQUFDeUIsT0FBTyxDQUFDO2dCQUFFWDtjQUFFLENBQUUsQ0FBQztjQUMxQnRELFVBQVUsQ0FBQ3dDLElBQUksR0FBR0EsSUFBSTtjQUN0QmIsbUJBQVUsQ0FBQ3VDLFdBQVcsR0FBRzFCLElBQUk7Y0FFN0IsSUFBSSxDQUFDQSxJQUFJLENBQUMyQixLQUFLLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQ04sUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUk7Z0JBQ2pCLElBQUksQ0FBQ1osUUFBUSxHQUFHLElBQUk7Z0JBQ3BCOztjQUdELE1BQU1WLElBQUksQ0FBQ3dCLE9BQU87Y0FFbEIsTUFBTUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzFCLEtBQUssQ0FBQ1UsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsRUFBRSxLQUFLZCxJQUFJLENBQUM2QixjQUFjLENBQUM7Y0FDbkYsSUFBSSxDQUFDLFdBQVcsR0FBR0QsbUJBQW1CLEdBQUdBLG1CQUFtQixDQUFDZCxFQUFFLEdBQUcsU0FBUztjQUMzRSxJQUFJLENBQUNYLFlBQVksQ0FBQ3RCLE1BQU0sQ0FBQ1csR0FBRyxDQUFDO2dCQUM1Qk4sUUFBUSxFQUFFYyxJQUFJLENBQUNkLFFBQVEsRUFBRTRDLE9BQU8sSUFBSTNDLG1CQUFVLENBQUNEO2VBQy9DLENBQUM7Y0FDRjtjQUNBYyxJQUFJLENBQUNWLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBSztnQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBR1UsSUFBSSxDQUFDRixRQUFRLEVBQUVJLEtBQUs7Z0JBQ3JDLElBQUksQ0FBQzZCLFlBQVksQ0FBQyxhQUFhLENBQUM7Y0FDakMsQ0FBQyxDQUFDO2NBRUYsSUFBSSxDQUFDLEtBQUssR0FBRy9CLElBQUk7Y0FDakIsTUFBTWdDLElBQUksR0FBRyxNQUFNYixzQkFBVSxDQUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUVtQyxJQUFJLENBQUNpQyxRQUFRLENBQUM7Y0FDbkVELElBQUksQ0FBQ0UsT0FBTyxDQUFDLENBQUNDLFNBQVMsRUFBRUMsS0FBSyxLQUFJLENBQUUsQ0FBQyxDQUFDO2NBRXRDLElBQUksQ0FBQyxXQUFXLENBQUNGLE9BQU8sQ0FBQyxDQUFDQyxTQUFTLEVBQUVDLEtBQUssS0FBSTtnQkFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQzVDLEdBQUcsQ0FBQzJDLFNBQVMsRUFBRUgsSUFBSSxDQUFDSSxLQUFLLENBQUMsQ0FBQztjQUM3QyxDQUFDLENBQUM7Y0FFRixJQUFJLENBQUMsU0FBUyxHQUFHcEMsSUFBSSxDQUFDRixRQUFRLENBQUNJLEtBQUs7Y0FDcEMsSUFBSSxDQUFDbUIsUUFBUSxHQUFHLEtBQUs7Y0FDckIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtjQUNqQixJQUFJLENBQUNaLFFBQVEsR0FBRyxLQUFLO1lBQ3RCLENBQUM7WUFFRCxNQUFNMkIsV0FBVyxDQUFDQyxPQUFzQjtjQUN2QyxJQUFJO2dCQUNIQyxXQUFXLENBQUNDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUdDLFNBQVM7Z0JBRWhDLElBQUksT0FBT0gsT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDRyxTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUNKLE9BQU8sQ0FBQyxFQUFFO2dCQUU1RSxJQUFJLENBQUNqQixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsSUFBSSxDQUFDc0IsZUFBZSxHQUFHLElBQUk7Z0JBQzNCLE1BQU07a0JBQUUxQixPQUFPO2tCQUFFMkI7Z0JBQVEsQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQ1AsV0FBVyxDQUFDQyxPQUFPLENBQUM7Z0JBRW5FLElBQUksQ0FBQ00sUUFBUSxHQUFHQSxRQUFRO2dCQUN4QjtnQkFDQSxJQUFJLENBQUMsZUFBZSxHQUFHM0IsT0FBTztnQkFDOUIsTUFBTTRCLFFBQVEsR0FBRyxNQUFLO2tCQUNyQixJQUFJLENBQUNkLFlBQVksQ0FBQyxXQUFXYSxRQUFRLENBQUM5QixFQUFFLFVBQVUsQ0FBQztnQkFDcEQsQ0FBQztnQkFFRCxNQUFNZ0MsS0FBSyxHQUFHLE1BQUs7a0JBQ2xCN0IsT0FBTyxDQUFDOEIsR0FBRyxDQUFDLGlCQUFpQixFQUFFRixRQUFRLENBQUM7a0JBQ3hDLElBQUksQ0FBQ2QsWUFBWSxDQUFDLGdCQUFnQixDQUFDO2tCQUNuQyxJQUFJLENBQUNBLFlBQVksQ0FBQyxXQUFXYSxRQUFRLENBQUM5QixFQUFFLFdBQVcsQ0FBQztrQkFDcERHLE9BQU8sQ0FBQzhCLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRUQsS0FBSyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVEN0IsT0FBTyxDQUFDM0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFdUQsUUFBUSxDQUFDO2dCQUN2QzVCLE9BQU8sQ0FBQzNCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRXdELEtBQUssQ0FBQztnQkFFdEMsSUFBSSxDQUFDSCxlQUFlLEdBQUcsS0FBSztnQkFDNUIsSUFBSSxDQUFDWixZQUFZLENBQUMsYUFBYSxDQUFDO2VBQ2hDLENBQUMsT0FBT2lCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ0wsZUFBZSxHQUFHLEtBQUs7Z0JBQzVCLElBQUksQ0FBQ3RCLFFBQVEsR0FBRyxLQUFLOztZQUV2Qjs7VUFDQWxEOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9MRDtVQUNBO1VBQ0E7VUFFTSxTQUFVZ0YsU0FBUyxDQUFDO1lBQUUxRixLQUFLO1lBQUUyRjtVQUFTLENBQUU7WUFDN0MsTUFBTUMsSUFBSSxHQUFHQyxjQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFL0Isb0JBQVMsRUFBQyxDQUFDOUYsS0FBSyxDQUFDLEVBQUUsTUFBTUQsVUFBVSxDQUFDZ0csVUFBVSxDQUFDLE1BQU1DLGNBQWMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLGFBQWEsQ0FBQztZQUMzRixNQUFNQSxjQUFjLEdBQUcsTUFBSztjQUMzQkwsU0FBUyxDQUFDTSxPQUFPLEVBQUVDLGNBQWMsQ0FBQztnQkFBRUMsS0FBSyxFQUFFLEtBQUs7Z0JBQUVDLFFBQVEsRUFBRTtjQUFRLENBQUUsQ0FBQztZQUN4RSxDQUFDO1lBRUQsTUFBTUMsYUFBYSxHQUFHLE1BQUs7Y0FDMUIsTUFBTUMsU0FBUyxHQUFHWCxTQUFTLENBQUNNLE9BQU8sRUFBRU0sVUFBVTtjQUMvQyxJQUFJLENBQUNELFNBQVMsRUFBRSxPQUFPLElBQUk7Y0FDM0IsTUFBTUUsYUFBYSxHQUFHRixTQUFTLENBQUNHLHFCQUFxQixFQUFFO2NBQ3ZELE1BQU1DLE9BQU8sR0FBR2YsU0FBUyxDQUFDTSxPQUFPLENBQUNRLHFCQUFxQixFQUFFO2NBQ3pELE1BQU1FLFNBQVMsR0FBRyxDQUFDO2NBQ25CLE9BQU9ELE9BQU8sQ0FBQ0UsTUFBTSxHQUFHRCxTQUFTLElBQUlILGFBQWEsQ0FBQ0ksTUFBTTtZQUMxRCxDQUFDO1lBRURmLGNBQUssQ0FBQ2dCLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1QLFNBQVMsR0FBR1gsU0FBUyxDQUFDTSxPQUFPLEVBQUVNLFVBQVU7Y0FDL0MsSUFBSSxDQUFDRCxTQUFTLEVBQUU7Y0FFaEIsTUFBTVEsWUFBWSxHQUFHLE1BQUs7Z0JBQ3pCLE1BQU1DLE9BQU8sR0FBRyxDQUFDVixhQUFhLEVBQUU7Z0JBQ2hDLElBQUlVLE9BQU8sRUFBRW5CLElBQUksQ0FBQ0ssT0FBTyxFQUFFZSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUM1Q3JCLElBQUksQ0FBQ0ssT0FBTyxFQUFFZSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7Y0FDNUMsQ0FBQztjQUNEWixTQUFTLENBQUNhLGdCQUFnQixDQUFDLFFBQVEsRUFBRUwsWUFBWSxDQUFDO2NBQ2xELE9BQU8sTUFBTVIsU0FBUyxDQUFDYyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVOLFlBQVksQ0FBQztZQUNuRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQ2pCLDREQUNDQSw2QkFBQ3dCLGlCQUFVO2NBQ1ZDLEdBQUcsRUFBRTFCLElBQUk7Y0FDVEEsSUFBSSxFQUFDLFdBQVc7Y0FDaEIyQixPQUFPLEVBQUMsVUFBVTtjQUNsQkMsU0FBUyxFQUFDLDJCQUEyQjtjQUNyQ0MsT0FBTyxFQUFFekI7WUFBYyxFQUN0QixDQUNBO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NBO1VBQ0E7VUFFQTtVQUNBO1VBQ0E7VUFFTSxTQUFVMEIsT0FBTyxDQUFDO1lBQUUvQjtVQUFTLENBQUU7WUFDcEMsTUFBTTtjQUFFM0Y7WUFBSyxDQUFFLEdBQUcsMkJBQWMsR0FBRTtZQUVsQyxNQUFNLENBQUNzSCxHQUFHLEVBQUV6RCxLQUFLLEVBQUU4RCxnQkFBZ0IsQ0FBQyxHQUFHLDhCQUFZLEVBQUMsWUFBWSxDQUFDO1lBRWpFLE9BQ0M5QjtjQUFLMkIsU0FBUyxFQUFDO1lBQWUsR0FDN0IzQiw2QkFBQytCLG9DQUFpQjtjQUFDQyxTQUFTLEVBQUVGLGdCQUFnQjtjQUFFRyxTQUFTLEVBQUVSO1lBQUcsRUFBSSxFQUVqRXpELEtBQUssSUFDTGdDLDREQUNDQSw2QkFBQ2tDLGtCQUFRO2NBQUNwQyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUNsQ0U7Y0FBS3lCLEdBQUcsRUFBRTNCLFNBQVM7Y0FBRTZCLFNBQVMsRUFBQztZQUFXLEVBQUcsQ0FFOUMsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQTtVQUVBO1VBREE7O1VBR00sU0FBVUksaUJBQWlCLENBQUM7WUFBRUMsU0FBUztZQUFFQztVQUFTLENBQUU7WUFDekQsTUFBTTtjQUNMOUgsS0FBSyxFQUFFO2dCQUFFdUMsSUFBSTtnQkFBRW1CO2NBQVU7WUFBRSxDQUMzQixHQUFHLDJCQUFjLEdBQUU7WUFFcEIsTUFBTXNFLFNBQVMsR0FBR0gsU0FBUztZQUMzQixJQUFJLENBQUNBLFNBQVMsRUFBRSxPQUFPLElBQUk7WUFDM0IsT0FDQ2hDLDREQUNDQSw2QkFBQ21DLFNBQVM7Y0FBQ1YsR0FBRyxFQUFFUSxTQUFTO2NBQUV0RCxRQUFRLEVBQUV5RCxJQUFJLENBQUNDLFNBQVMsQ0FBQzNGLElBQUksQ0FBQ2lDLFFBQVE7WUFBQyxFQUFJLENBQ3BFO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBO1VBQ0E7VUFFQTtVQUNBO1VBRUE7VUFFQTtVQVVBLE1BQU07WUFBRXNCO1VBQU0sQ0FBRSxHQUFHRCxjQUFLO1VBRWpCO1VBQVUsU0FBVS9CLElBQUk7WUFDOUIsTUFBTTtjQUFFOUQ7WUFBSyxDQUFFLEdBQUcsMkJBQWMsR0FBRTtZQUNsQyxNQUFNbUksU0FBUyxHQUFHbkksS0FBSyxDQUFDMEQsVUFBVSxDQUFDbkQsR0FBRyxDQUFDLFlBQVksQ0FBQztZQUNwRCxNQUFNLENBQUM2SCxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHeEMsY0FBSyxDQUFDeUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNM0MsU0FBUyxHQUFHRSxjQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEMsTUFBTXlDLEdBQUcsR0FBRyx1QkFBdUJILE1BQU0sR0FBRyxvQkFBb0IsR0FBRyxFQUFFLEVBQUU7WUFFdkUsT0FDQ3ZDO2NBQUsyQixTQUFTLEVBQUVlO1lBQUcsR0FDbEIxQyw2QkFBQzJDLGNBQU07Y0FBQ0osTUFBTSxFQUFFQSxNQUFNO2NBQUVDLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ2hEeEMsNkJBQUM2QixnQkFBTztjQUFDL0IsU0FBUyxFQUFFQTtZQUFTLEVBQUksRUFDakNFLDZCQUFDSCxvQkFBUztjQUFDMUYsS0FBSyxFQUFFQSxLQUFLO2NBQUUyRixTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUNoRCxDQUFDd0MsU0FBUyxFQUFFM0QsUUFBUSxFQUFFaUUsU0FBUyxJQUMvQjVDLDREQUNDQTtjQUFLMkIsU0FBUyxFQUFDO1lBQU0sR0FDcEIzQiw2QkFBQzZDLGdCQUFTO2NBQUMxSSxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUN0QixDQUVQLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0E7VUFDQTtVQUNBO1VBRU8sTUFBTTJJLGVBQWUsR0FBRyxNQUFLO1lBQ25DLE9BQ0M5QztjQUFLMkIsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDM0IsNkJBQUMrQyxXQUFJO2NBQUNwQixTQUFTLEVBQUMsSUFBSTtjQUFDNUIsSUFBSSxFQUFFaUQsYUFBSyxDQUFDLFlBQVk7WUFBQyxFQUFJLEVBQ2xEaEQ7Y0FBSzJCLFNBQVMsRUFBQztZQUFlLEdBQzdCM0I7Y0FBTTJCLFNBQVMsRUFBQztZQUFLLEVBQVEsRUFDN0IzQjtjQUFNMkIsU0FBUyxFQUFDO1lBQUssRUFBUSxFQUM3QjNCO2NBQU0yQixTQUFTLEVBQUM7WUFBSyxFQUFRLENBQ3hCLENBQ0Q7VUFFUixDQUFDO1VBQUM5Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmRjtVQUNBO1VBRUE7VUFDQTtVQUNBO1VBRU0sU0FBVXFILFFBQVEsQ0FBQztZQUFFcEM7VUFBUyxDQUFFO1lBQ3JDLE1BQU07Y0FBRTNGO1lBQUssQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDbEMsTUFBTSxDQUFDOEksYUFBYSxFQUFFQyxXQUFXLENBQUMsR0FBR2xELGNBQUssQ0FBQ3lDLFFBQVEsQ0FBU3RJLEtBQUssQ0FBQ3FDLFFBQVEsQ0FBQzJHLE1BQU0sSUFBSSxFQUFFLENBQUNBLE1BQU0sQ0FBQztZQUUvRixvQkFBUyxFQUNSLENBQUNoSixLQUFLLENBQUMsRUFDUCxNQUFLO2NBQ0orSSxXQUFXLENBQUMvSSxLQUFLLENBQUNxQyxRQUFRLENBQUMyRyxNQUFNLENBQUM7WUFDbkMsQ0FBQyxFQUNELGFBQWEsQ0FDYjtZQUVELE1BQU1DLE1BQU0sR0FBR2pKLEtBQUssQ0FBQ3FDLFFBQVEsQ0FBQzZHLEdBQUcsQ0FBQyxDQUFDMUYsT0FBTyxFQUFFSixDQUFDLEtBQUk7Y0FDaEQsTUFBTStGLElBQUksR0FBRy9GLENBQUMsS0FBSzBGLGFBQWEsR0FBRyxDQUFDO2NBQ3BDLE9BQU9qRCw2QkFBQ3VELGdCQUFPO2dCQUFDQyxHQUFHLEVBQUUsV0FBV2pHLENBQUMsRUFBRTtnQkFBRXVDLFNBQVMsRUFBRUEsU0FBUztnQkFBRW5DLE9BQU8sRUFBRUEsT0FBTztnQkFBRTJGLElBQUksRUFBRUE7Y0FBSSxFQUFJO1lBQzVGLENBQUMsQ0FBQztZQUVGLE9BQ0N0RCw0REFDRW9ELE1BQU0sRUFDTmpKLEtBQUssQ0FBQ2tGLGVBQWUsSUFBSVcsNkJBQUM4QywwQkFBZSxPQUFHLENBQzNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVVyxjQUFjLENBQUM7WUFBRTlGLE9BQU87WUFBRStGLElBQUk7WUFBRUMsYUFBYTtZQUFFQyxJQUFJLEdBQUc7VUFBSSxDQUFFO1lBQzNFLE1BQU07Y0FBRXpKLEtBQUs7Y0FBRW9CO1lBQU0sQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFFMUMsTUFBTSxDQUFDc0ksTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBRzlELGNBQUssQ0FBQ3lDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEQsTUFBTSxDQUFDc0IsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR2hFLGNBQUssQ0FBQ3lDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFekQsb0JBQVMsRUFBQyxDQUFDbEgsTUFBTSxDQUFDLEVBQUUsTUFBTXlJLGFBQWEsQ0FBQ3pJLE1BQU0sQ0FBQzBJLFFBQVEsQ0FBQyxDQUFDO1lBRXpELE1BQU1DLFFBQVEsR0FBRyxNQUFLO2NBQ3JCRixhQUFhLENBQUMsS0FBSyxDQUFDO2NBQ3BCRixTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQztZQUNELG9CQUFTLEVBQUMsQ0FBQ3ZJLE1BQU0sQ0FBQyxFQUFFMkksUUFBUSxFQUFFLFdBQVcsQ0FBQztZQUUxQyxNQUFNQyxNQUFNLEdBQUcsT0FBTztjQUFFQztZQUFNLENBQUUsS0FBSTtjQUNuQ04sU0FBUyxDQUFDLE1BQU0sQ0FBQztjQUNqQjNKLEtBQUssQ0FBQ3VELGNBQWMsR0FBR0MsT0FBTztjQUM5QnBDLE1BQU0sQ0FBQzhJLGFBQWEsR0FBRyxDQUFDO2NBQ3hCLE1BQU05SSxNQUFNLENBQUNxSSxJQUFJLENBQUNGLElBQUksRUFBRS9GLE9BQU8sQ0FBQ0gsRUFBRSxDQUFDO1lBQ3BDLENBQUM7WUFDRCxNQUFNOEcsT0FBTyxHQUFHLE9BQU87Y0FBRUY7WUFBTSxDQUFFLEtBQUk7Y0FDcEMsTUFBTTdJLE1BQU0sQ0FBQ2dKLElBQUksRUFBRTtjQUNuQlQsU0FBUyxDQUFDLE1BQU0sQ0FBQztjQUNqQkUsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyQixDQUFDO1lBRUQsTUFBTVEsV0FBVyxHQUFHLFlBQVc7Y0FDOUIsTUFBTXRLLFVBQVUsRUFBRXVLLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUNqQixJQUFJLENBQUM7Y0FDckRrQixZQUFLLENBQUNDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQztZQUM3QyxDQUFDO1lBRUQsTUFBTUMsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRTtZQUFJLENBQUU7WUFDbkMsTUFBTUMsS0FBSyxHQUFHNUssS0FBSyxDQUFDdUQsY0FBYyxFQUFFRixFQUFFLEtBQUtHLE9BQU8sRUFBRUgsRUFBRSxJQUFJdUcsVUFBVTtZQUVwRSxNQUFNaEUsSUFBSSxHQUFHZ0YsS0FBSyxJQUFJbEIsTUFBTSxLQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTTtZQUN6RCxNQUFNakMsT0FBTyxHQUFHbUQsS0FBSyxJQUFJbEIsTUFBTSxLQUFLLE1BQU0sR0FBR1MsT0FBTyxHQUFHSCxNQUFNO1lBRTdELE9BQ0NuRSwwQ0FDQ0E7Y0FBSzJCLFNBQVMsRUFBQztZQUFnQixHQUM5QjNCLDZCQUFDd0IsaUJBQVU7Y0FBQ0ksT0FBTyxFQUFFNEMsV0FBVztjQUFFekUsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUMvQzZELElBQUksSUFBSTVELDZCQUFDd0IsaUJBQVU7Y0FBQ0ksT0FBTyxFQUFFQSxPQUFPO2NBQUEsZUFBYyxLQUFLO2NBQUM3QixJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNsRSxFQUNMNEQsYUFBYSxJQUFJM0Q7Y0FBSzJCLFNBQVMsRUFBQztZQUFpQixHQUFFZ0MsYUFBYSxZQUFjLENBQzFFO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERBO1VBQ0E7VUFDQTtVQUNBO1VBRU0sU0FBVXFCLFdBQVcsQ0FBQztZQUFFQztVQUFJLENBQUU7WUFDbkMsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLG1CQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU1wRixJQUFJLEdBQUdrRixJQUFJLEtBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxZQUFZO1lBQ3BELE1BQU1HLFNBQVMsR0FBR0MsdUJBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxhQUFhLEVBQUU7WUFDckQsTUFBTUMsZUFBZSxHQUFHLE1BQU1MLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFFaEQsT0FDQ25GLDREQUNFb0YsU0FBUyxDQUFDSyxRQUFRLElBQUlSLElBQUksS0FBSyxNQUFNLElBQUksQ0FBQ0MsU0FBUyxHQUNuRGxGO2NBQUswRixHQUFHLEVBQUMsb0JBQW9CO2NBQUNDLEdBQUcsRUFBRVAsU0FBUyxDQUFDSyxRQUFRO2NBQUVHLE9BQU8sRUFBRUo7WUFBZSxFQUFJLEdBRW5GeEYsNkJBQUMrQyxXQUFJO2NBQUNwQixTQUFTLEVBQUMsSUFBSTtjQUFDNUIsSUFBSSxFQUFFaUQsYUFBSyxDQUFDakQsSUFBSSxDQUFDLElBQUlBO1lBQUksRUFDOUMsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ00sU0FBVThGLFdBQVcsQ0FBQztZQUFFbEksT0FBTztZQUFFbUk7VUFBUSxDQUFFO1lBQ2hELE1BQU07Y0FBRTNMLEtBQUs7Y0FBRTJELFFBQVE7Y0FBRXZDLE1BQU07Y0FBRXdLO1lBQUssQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDM0QsTUFBTXJDLElBQUksR0FBRy9GLE9BQU8sRUFBRXFCLE9BQU8sSUFBSSxFQUFFO1lBQ25DLE1BQU15QyxHQUFHLEdBQUd6QixjQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUIsTUFBTStGLGVBQWUsR0FBRyxNQUN2QnZFLEdBQUcsQ0FBQ3JCLE9BQU8sQ0FBQzZGLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDckgsT0FBTyxDQUFDc0gsT0FBTyxJQUFJQSxPQUFPLENBQUMvRSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVyRyxvQkFBUyxFQUFDLENBQUM5RixNQUFNLENBQUMsRUFBRXlLLGVBQWUsRUFBRSxXQUFXLENBQUM7WUFDakQsSUFBSSxPQUFPdEMsSUFBSSxLQUFLLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFekMsTUFBTXlDLFdBQVcsR0FBR0MsS0FBSyxJQUFLak0sS0FBSyxDQUFDdUQsY0FBYyxHQUFHQyxPQUFRO1lBQzdELE1BQU0wSSxXQUFXLEdBQUcxSSxPQUFPLElBQUlBLE9BQU8sQ0FBQ3NILElBQUksS0FBSyxNQUFNLElBQUluSCxRQUFRO1lBQ2xFLE1BQU13SSxhQUFhLEdBQUczSSxPQUFPLENBQUNILEVBQUUsS0FBS3JELEtBQUssQ0FBQ3VELGNBQWMsRUFBRUYsRUFBRSxJQUFJNkksV0FBVztZQUU1RSxPQUNDckc7Y0FBSzJCLFNBQVMsRUFBQyx5QkFBeUI7Y0FBQ0YsR0FBRyxFQUFFQTtZQUFHLEdBQy9DaUMsSUFBSSxJQUNKMUQsNkJBQUN1RyxrQkFBUTtjQUNSdkgsT0FBTyxFQUFFMEUsSUFBSTtjQUNiOEMsU0FBUyxFQUFFVCxLQUFLLENBQUNVLEtBQUs7Y0FDdEJYLFFBQVEsRUFBRUEsUUFBUTtjQUNsQnRJLEVBQUUsRUFBRUcsT0FBTyxDQUFDSCxFQUFFO2NBQ2QySSxXQUFXLEVBQUVBLFdBQVc7Y0FDeEI1SyxNQUFNLEVBQUVBLE1BQU07Y0FDZHVDLFFBQVEsRUFBRXdJLGFBQWEsSUFBSUQ7WUFBVyxFQUV2QyxFQUNBMUksT0FBTyxDQUFDK0ksS0FBSyxJQUFJMUcsNkJBQUMyRyx3QkFBVztjQUFDaEIsR0FBRyxFQUFFaEksT0FBTyxDQUFDK0ksS0FBSztjQUFFRSxPQUFPO1lBQUEsRUFBRyxDQUN4RDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BDQTtVQUdPLE1BQU1DLGtCQUFrQixHQUFHN0csY0FBSyxDQUFDOEcsYUFBYSxDQUFDLEVBQXlCLENBQUM7VUFBQ2pNO1VBQzFFLE1BQU1rTSxxQkFBcUIsR0FBRyxNQUFNL0csY0FBSyxDQUFDZ0gsVUFBVSxDQUFDSCxrQkFBa0IsQ0FBQztVQUFDaE07Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSmhGO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFQSxTQUFTb00sZ0JBQWdCLENBQUM7WUFBRW5ILFNBQVM7WUFBRW5DLE9BQU87WUFBRTJGO1VBQUksQ0FBRTtZQUNyRCxNQUFNLENBQUN0RSxPQUFPLEVBQUVrSSxVQUFVLENBQUMsR0FBR2xILGNBQUssQ0FBQ3lDLFFBQVEsQ0FBUzlFLE9BQU8sRUFBRXFCLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDNUU7OztZQUdBLE1BQU0sQ0FBQ21JLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdwSCxjQUFLLENBQUN5QyxRQUFRLENBQVUsSUFBSSxDQUFDO1lBQzdELE1BQU1DLEdBQUcsR0FBRyxXQUFXL0UsT0FBTyxDQUFDc0gsSUFBSSxFQUFFO1lBQ3JDLE1BQU10QixhQUFhLEdBQUdoRyxPQUFPLENBQUNzSCxJQUFJLEtBQUssV0FBVyxHQUFHdEgsT0FBTyxDQUFDMEosS0FBSyxFQUFFQyxXQUFXLEdBQUcsSUFBSTtZQUV0RixNQUFNO2NBQUVuTjtZQUFLLENBQUUsR0FBRywyQkFBYyxHQUFFO1lBQ2xDLE1BQU1vTixPQUFPLEdBQUcsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQztZQUMzRyxNQUFNLENBQUNDLE1BQU0sRUFBRUMsZUFBZSxFQUFFQyxPQUFPLENBQUMsR0FBRyx1QkFBUyxFQUFDL0osT0FBTyxDQUFDSCxFQUFFLEVBQUVHLE9BQU8sQ0FBQ3FCLE9BQU8sRUFBRXVJLE9BQU8sQ0FBQztZQUUxRixNQUFNcEgsY0FBYyxHQUFHLE1BQUs7Y0FDM0JMLFNBQVMsQ0FBQ00sT0FBTyxFQUFFQyxjQUFjLENBQUM7Z0JBQUVDLEtBQUssRUFBRSxLQUFLO2dCQUFFQyxRQUFRLEVBQUU7Y0FBUSxDQUFFLENBQUM7WUFDeEUsQ0FBQztZQUVELG9CQUFTLEVBQ1IsQ0FBQ3BHLEtBQUssQ0FBQyxFQUNQLE1BQUs7Y0FDSmlOLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJGLFVBQVUsQ0FBQy9NLEtBQUssQ0FBQ21GLFFBQVEsQ0FBQ04sT0FBTyxDQUFDO2NBQ2xDbUIsY0FBYyxFQUFFO1lBQ2pCLENBQUMsRUFDRCxXQUFXeEMsT0FBTyxDQUFDSCxFQUFFLFVBQVUsQ0FDL0I7WUFDRCxvQkFBUyxFQUFDLENBQUNHLE9BQU8sQ0FBQyxFQUFFLE1BQUs7Y0FDekJ1SixVQUFVLENBQUMvTSxLQUFLLEVBQUVtRixRQUFRLEVBQUVOLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDM0MsQ0FBQyxDQUFDO1lBQ0Ysb0JBQVMsRUFDUixDQUFDN0UsS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKK00sVUFBVSxDQUFDL00sS0FBSyxDQUFDbUYsUUFBUSxDQUFDTixPQUFPLENBQUM7Y0FDbENvSSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2xCLENBQUMsRUFDRCxXQUFXekosT0FBTyxDQUFDSCxFQUFFLFdBQVcsQ0FDaEM7WUFFRCxPQUNDd0M7Y0FBSzJCLFNBQVMsRUFBRWUsR0FBRztjQUFBLFdBQVcvRSxPQUFPLENBQUNIO1lBQUUsR0FDdkN3QztjQUFTMkIsU0FBUyxFQUFDO1lBQW9CLEdBQ3RDM0IsNkJBQUNnRix3QkFBVztjQUFDQyxJQUFJLEVBQUV0SCxPQUFPLENBQUNzSDtZQUFJLEVBQUksQ0FDMUIsRUFFVmpGO2NBQVMyQixTQUFTLEVBQUM7WUFBb0IsR0FDdEMzQiw2QkFBQzJILDRCQUFhO2NBQUNELE9BQU8sRUFBRUE7WUFBTyxFQUFJLEVBQ25DMUgsNkJBQUM2RixpQkFBVztjQUFDQyxRQUFRLEVBQUVxQixRQUFRO2NBQUV4SixPQUFPLEVBQUVBO1lBQU8sRUFBSSxDQUM1QyxFQUNWcUM7Y0FBUzJCLFNBQVMsRUFBQztZQUFrQixHQUNwQzNCLDZCQUFDeUQsdUJBQWM7Y0FDZEcsSUFBSSxFQUFFLENBQUNqRyxPQUFPLENBQUMrSSxLQUFLO2NBQ3BCL0ksT0FBTyxFQUFFQSxPQUFPO2NBQ2hCK0YsSUFBSSxFQUFFK0QsZUFBZTtjQUNyQjlELGFBQWEsRUFBRUE7WUFBYSxFQUMzQixDQUNPLENBQ0w7VUFFUjtVQUVPLE1BQU1KLE9BQU8sR0FBR3ZELGNBQUssQ0FBQzRILElBQUksQ0FBQ1gsZ0JBQWdCLENBQUM7VUFBQ3BNOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JFcEQ7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7Ozs7Ozs7O1VBVU0sU0FBVWdOLE1BQU0sQ0FBQztZQUFFdkUsSUFBSSxHQUFHLEtBQUs7WUFBRXdFLElBQUksRUFBRTtjQUFFQyxJQUFJO2NBQUVEO1lBQUksQ0FBRTtZQUFFbkc7VUFBUyxDQUFFO1lBQ3ZFLE1BQU16QyxJQUFJLEdBQUcsb0JBQVMsR0FBRTtZQUN4QixNQUFNO2NBQ0w2RyxLQUFLLEVBQUU7Z0JBQUVpQyxhQUFhLEVBQUVqQztjQUFLO1lBQUUsQ0FDL0IsR0FBRywyQkFBYyxHQUFFO1lBQ3BCLE1BQU1rQyxTQUFTLEdBQUcsQ0FBQztjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBaUQsS0FBSTtjQUN4RixNQUFNQyxLQUFLLEdBQUc7Z0JBQUV6RyxTQUFTLEVBQUUsa0JBQWtCb0csSUFBSSxHQUFHekUsSUFBSSxHQUFHLGNBQWMsR0FBRyxFQUFFO2NBQUUsQ0FBRTtjQUNsRixNQUFNMkUsU0FBUyxHQUFHM0UsSUFBSSxHQUFHK0UsOEJBQWlCLEdBQUdySSxjQUFLLENBQUNzSSxRQUFRO2NBQzNELE9BQ0N0STtnQkFBQSxHQUFTb0k7Y0FBSyxHQUNicEksNkJBQUNpSSxTQUFTLFFBQ1RqSSw2Q0FDQ0EseUNBQUtrSSxLQUFLLENBQU0sQ0FDUixFQUNUbEk7Z0JBQVMyQixTQUFTLEVBQUM7Y0FBaUIsR0FBRXdHLFFBQVEsQ0FBVyxDQUM5QyxDQUNQO1lBRVIsQ0FBQztZQUVELElBQUlKLElBQUksS0FBSyxvQkFBb0IsRUFBRTtjQUNsQyxPQUFPL0gsNkJBQUNpSSxTQUFTO2dCQUFDQyxLQUFLLEVBQUVuQyxLQUFLLENBQUNnQyxJQUFJO2NBQUMsRUFBSTs7WUFFekMsSUFBSUEsSUFBSSxLQUFLLGFBQWEsRUFBRTtjQUMzQixNQUFNM0UsTUFBTSxHQUFHMEUsSUFBSSxDQUFDUyxPQUFPLENBQUNsRixHQUFHLENBQUNtRixJQUFJLElBQUl4STtnQkFBSXdELEdBQUcsRUFBRWdGLElBQUksQ0FBQ2hMO2NBQUUsR0FBR2dMLElBQUksQ0FBQ0MsU0FBUyxDQUFNLENBQUM7Y0FDaEYsT0FDQ3pJLDZCQUFDaUksU0FBUztnQkFBQ0MsS0FBSyxFQUFFbkMsS0FBSyxDQUFDZ0MsSUFBSTtjQUFDLEdBQzVCL0gseUNBQUtvRCxNQUFNLENBQU0sQ0FDTjs7WUFHZCxJQUFJMkUsSUFBSSxLQUFLLHVCQUF1QixFQUFFO2NBQ3JDLE9BQ0MvSCw2QkFBQ2lJLFNBQVM7Z0JBQUNDLEtBQUssRUFBRW5DLEtBQUssQ0FBQ2dDLElBQUk7Y0FBQyxHQUM1Qi9IO2dCQUFLMEksdUJBQXVCLEVBQUU7a0JBQUVDLE1BQU0sRUFBRXpKLElBQUksQ0FBQzRJLElBQUksQ0FBQ3hJLFFBQVE7Z0JBQUM7Y0FBRSxFQUFJLENBQ3REOztZQUlkLElBQUl5SSxJQUFJLEtBQUssZUFBZSxFQUFFO2NBQzdCLE9BQ0MvSCw2QkFBQ2lJLFNBQVM7Z0JBQUNDLEtBQUssRUFBRW5DLEtBQUssQ0FBQzZDO2NBQWEsR0FDcEM1SSx3Q0FBSThILElBQUksQ0FBQ2MsYUFBYSxDQUFLLENBQ2hCOztZQUdkLElBQUliLElBQUksS0FBSyxVQUFVLElBQUlELElBQUksQ0FBQ3pMLElBQUksS0FBSyxJQUFJLEVBQUU7Y0FDOUMsSUFBSTtnQkFDSCxNQUFNO2tCQUFFcUg7Z0JBQUksQ0FBRSxHQUFHdEIsSUFBSSxDQUFDeUcsS0FBSyxDQUFDZixJQUFJLENBQUNnQixNQUFNLENBQUM7Z0JBQ3hDLE9BQ0M5SSw2QkFBQ2lJLFNBQVM7a0JBQUNDLEtBQUssRUFBRW5DLEtBQUssQ0FBQ2dELFNBQVMsQ0FBQ2pCLElBQUksQ0FBQ3pMLElBQUk7Z0JBQUMsR0FDM0MyRCx3Q0FBSTBELElBQUksQ0FBSyxDQUNGO2VBRWIsQ0FBQyxPQUFPaEUsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOzs7WUFJbEIsT0FBT007Y0FBSzJCLFNBQVMsRUFBRSxrQkFBa0JvRyxJQUFJO1lBQUUsR0FBR0EsSUFBSSxDQUFPO1VBQzlEOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFFQTtVQUNBO1VBQ0E7VUFDTSxTQUFVSixhQUFhLENBQUM7WUFBRUQ7VUFBTyxDQUFFO1lBQ3hDLElBQUksQ0FBQ0EsT0FBTyxFQUFFdkUsTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUNqQyxNQUFNRyxJQUFJLEdBQUdvRSxPQUFPLENBQUNBLE9BQU8sQ0FBQ3ZFLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFFeEMsT0FDQ25EO2NBQVMyQixTQUFTLEVBQUM7WUFBNEIsR0FDOUMzQiw2QkFBQ2dKLGlDQUFvQixRQUNwQmhKLDZCQUFDNkgsY0FBTTtjQUFDQyxJQUFJLEVBQUV4RSxJQUFJO2NBQUVBLElBQUk7WUFBQSxHQUN2QnRELDZCQUFDcUksOEJBQWlCLFlBQXNCLENBQ2hDLEVBRVRySSw2QkFBQ2lKLCtCQUFrQixRQUNsQmpKO2NBQVMyQixTQUFTLEVBQUM7WUFBYyxHQUMvQitGLE9BQU8sQ0FBQ3JFLEdBQUcsQ0FBQyxDQUFDUSxNQUFNLEVBQUV0RyxDQUFDLEtBQ3RCeUMsNkJBQUM2SCxjQUFNO2NBQUNyRSxHQUFHLEVBQUUsVUFBVWpHLENBQUMsRUFBRTtjQUFFdUssSUFBSSxFQUFFakU7WUFBTSxFQUN4QyxDQUFDLENBQ08sQ0FDVSxDQUNDLENBQ2Q7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkE7VUFDQTtVQUVBO1VBQ0E7VUFDTSxTQUFVcUYsWUFBWTtZQUMzQixNQUFNO2NBQUUvTztZQUFLLENBQUUsR0FBRywyQkFBYyxHQUFFO1lBQ2xDLE9BQ0M2RjtjQUFLMkIsU0FBUyxFQUFDO1lBQWdCLEdBQzlCM0IsNkJBQUNxSSw2QkFBaUI7Y0FBQ0gsS0FBSyxFQUFFbEksNkJBQUNtSixnQkFBTztnQkFBQ0MsS0FBSyxFQUFDLE9BQU87Z0JBQUNDLE1BQU0sRUFBQztjQUFNO1lBQUcsRUFBc0IsRUFDdkZySjtjQUFLMkIsU0FBUyxFQUFDO1lBQU0sRUFBRyxDQUNuQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7VUFDTSxTQUFVMkgsWUFBWSxDQUFDak4sSUFBSTtZQUNoQyxNQUFNLENBQUMyQixLQUFLLEVBQUV1TCxRQUFRLENBQUMsR0FBR3ZKLGNBQUssQ0FBQ3lDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDL0MsTUFBTWhCLEdBQUcsR0FBR3pCLGNBQUssQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNO2NBQ0w5RixLQUFLLEVBQUU7Z0JBQUUwRDtjQUFVO1lBQUUsQ0FDckIsR0FBRywyQkFBYyxHQUFFO1lBRXBCLE1BQU1pRSxnQkFBZ0IsR0FBR2pFLFVBQVUsQ0FBQ25ELEdBQUcsQ0FBQzJCLElBQUksQ0FBQyxFQUFFbU4sT0FBTztZQUN0RHhKLGNBQUssQ0FBQ2dCLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU15SSxPQUFPLEdBQUdyRCxLQUFLLElBQUltRCxRQUFRLENBQUMsSUFBSSxDQUFDO2NBQ3ZDLElBQUksQ0FBQzlILEdBQUcsRUFBRXJCLE9BQU8sRUFBRTtjQUNuQnFCLEdBQUcsQ0FBQ3JCLE9BQU8sQ0FBQ2tCLGdCQUFnQixDQUFDLE9BQU8sRUFBRW1JLE9BQU8sQ0FBQztjQUM5QyxPQUFPLE1BQU1oSSxHQUFHLENBQUNyQixPQUFPLEVBQUVtQixtQkFBbUIsQ0FBQyxPQUFPLEVBQUVrSSxPQUFPLENBQUM7WUFDaEUsQ0FBQyxFQUFFLENBQUNoSSxHQUFHLEVBQUVyQixPQUFPLENBQUMsQ0FBQztZQUVsQixPQUFPLENBQUNxQixHQUFHLEVBQUV6RCxLQUFLLEVBQUU4RCxnQkFBZ0IsQ0FBQztVQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkE7VUFXTyxNQUFNNEgsV0FBVyxHQUFHMUosY0FBSyxDQUFDOEcsYUFBYSxDQUFDLEVBQWtCLENBQUM7VUFBQ2pNO1VBQzVELE1BQU04TyxjQUFjLEdBQUcsTUFBTTNKLGNBQUssQ0FBQ2dILFVBQVUsQ0FBQzBDLFdBQVcsQ0FBQztVQUFDN087Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWmxFO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVOEgsTUFBTSxDQUFDO1lBQUVKLE1BQU07WUFBRUM7VUFBUyxDQUFFO1lBQzNDLE1BQU07Y0FBRXJJO1lBQUssQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDbEMsTUFBTSxDQUFDeVAsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBRyxtQkFBUSxFQUFDLEVBQUUsQ0FBQztZQUN4QyxNQUFNLENBQUMvTCxRQUFRLEVBQUVnTSxXQUFXLENBQUMsR0FBRyxtQkFBUSxFQUFDM1AsS0FBSyxDQUFDMkQsUUFBUSxDQUFDO1lBQ3hELE1BQU0sQ0FBQ2lNLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUcsbUJBQVEsR0FBVztZQUNyRCxNQUFNQyxvQkFBb0IsR0FBRyxNQUFLO2NBQ2pDOVAsS0FBSyxDQUFDMkQsUUFBUSxHQUFHLENBQUMzRCxLQUFLLENBQUMyRCxRQUFRO1lBQ2pDLENBQUM7WUFDRCxvQkFBUyxFQUFDLENBQUMzRCxLQUFLLENBQUMsRUFBRSxNQUFNMlAsV0FBVyxDQUFDM1AsS0FBSyxDQUFDMkQsUUFBUSxDQUFDLENBQUM7WUFFckQsTUFBTW9NLGdCQUFnQixHQUFHeEssQ0FBQyxJQUFHO2NBQzVCQSxDQUFDLENBQUN5SyxjQUFjLEVBQUU7Y0FDbEJOLFNBQVMsQ0FBQ25LLENBQUMsQ0FBQzBLLE1BQU0sQ0FBQ3JQLEtBQUssQ0FBQztZQUMxQixDQUFDO1lBRUQsTUFBTXNQLFFBQVEsR0FBRyxNQUFLO2NBQ3JCN0gsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztjQUNsQnlILFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbkIsQ0FBQztZQUVELE9BQ0NoSyw2QkFBQ3FJLDZCQUFpQjtjQUFDSCxLQUFLLEVBQUUvTixLQUFLLENBQUN1QyxJQUFJLENBQUNMLElBQUksSUFBSSxVQUFVO2NBQUUwTixTQUFTLEVBQUVBO1lBQVMsR0FDNUUvSjtjQUFLMkIsU0FBUyxFQUFDO1lBQWMsR0FDNUIzQjtjQUFLMkIsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDM0IsNkJBQUMrQyxXQUFJO2NBQUNoRCxJQUFJLEVBQUM7WUFBUSxFQUFHLEVBQ3RCQywyQ0FBTzdGLEtBQUssQ0FBQ2tELGNBQWMsQ0FBUSxDQUM5QixFQUNOMkM7Y0FBSzJCLFNBQVMsRUFBQztZQUF5QixHQUN2QzNCLDZCQUFDK0MsV0FBSTtjQUFDaEQsSUFBSSxFQUFDO1lBQVEsRUFBRyxFQUN0QkMsMkNBQU83RixLQUFLLENBQUMrQyxhQUFhLENBQVEsQ0FDN0IsRUFDTjhDLDZCQUFDc0ssaUJBQUs7Y0FDTGpPLElBQUksRUFBQyxNQUFNO2NBQ1hrTyxLQUFLLEVBQUMsZ0JBQWdCO2NBQ3RCeFAsS0FBSyxFQUFFNk8sTUFBTTtjQUNiMUYsUUFBUSxFQUFFZ0csZ0JBQWdCO2NBQzFCTSxRQUFRO2NBQ1J6QyxJQUFJLEVBQUM7WUFBUSxFQUNaLEVBQ0YvSCwwQ0FDQ0EsNkJBQUMrQyxXQUFJO2NBQ0poRCxJQUFJLEVBQUVqQyxRQUFRLEdBQUcsU0FBUyxHQUFHLGFBQWE7Y0FDMUM2RCxTQUFTLEVBQUMsZ0JBQWdCO2NBQzFCQyxPQUFPLEVBQUVxSTtZQUFvQixFQUM1QixFQUNGakssNkJBQUN3QixpQkFBVTtjQUFDRyxTQUFTLEVBQUMsUUFBUTtjQUFDRCxPQUFPLEVBQUMsU0FBUztjQUFDM0IsSUFBSSxFQUFDLEtBQUs7Y0FBQzZCLE9BQU8sRUFBRXlJO1lBQVEsRUFBSSxDQUM1RSxDQUNELENBQ2E7VUFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVaFEsSUFBSSxDQUFDO1lBQUVGO1VBQUssQ0FBRTtZQUM3QixNQUFNLENBQUM0RCxRQUFRLEVBQUUwTSxXQUFXLENBQUMsR0FBR3pLLGNBQUssQ0FBQ3lDLFFBQVEsQ0FBQ3RJLEtBQUssQ0FBQzRELFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUNDLEtBQUssRUFBRXVMLFFBQVEsQ0FBQyxHQUFHdkosY0FBSyxDQUFDeUMsUUFBUSxDQUFDdEksS0FBSyxDQUFDNkQsS0FBSyxDQUFDO1lBRXJELE1BQU0sQ0FBQzBNLFVBQVUsRUFBRTNFLEtBQUssQ0FBQyxHQUFHLG9CQUFRLEVBQUM0RSxzQkFBTSxDQUFDQyxTQUFTLENBQUM7WUFFdEQsb0JBQVMsRUFBQyxDQUFDelEsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QnNRLFdBQVcsQ0FBQ3RRLEtBQUssQ0FBQzRELFFBQVEsQ0FBQztjQUMzQndMLFFBQVEsQ0FBQ3BQLEtBQUssQ0FBQzZELEtBQUssQ0FBQztZQUN0QixDQUFDLENBQUM7WUFFRixNQUFNNk0sWUFBWSxHQUFHO2NBQ3BCMVEsS0FBSztjQUNMNEwsS0FBSztjQUNMakksUUFBUSxFQUFFM0QsS0FBSyxDQUFDMkQsUUFBUTtjQUN4QnRCLFFBQVEsRUFBRXJDLEtBQUssQ0FBQ3FDLFFBQVE7Y0FDeEJqQixNQUFNLEVBQUVwQixLQUFLLENBQUMwQyxZQUFZLENBQUN0QjthQUMzQjtZQUNELE1BQU11UCxPQUFPLEdBQUcsQ0FBQzNRLEtBQUssQ0FBQ2lELFFBQVEsR0FBR2EsVUFBSSxHQUFHOE0sc0JBQVk7WUFDckQsTUFBTTFRLElBQUksR0FBRzJELEtBQUssSUFBSTBNLFVBQVUsR0FBR0ksT0FBTyxHQUFHNUIsc0JBQVk7WUFFekQsT0FDQ2xKLDZCQUFDMEosb0JBQVcsQ0FBQ3NCLFFBQVE7Y0FBQ2pRLEtBQUssRUFBRThQO1lBQVksR0FDeEM3Syw2QkFBQzNGLElBQUksT0FBRyxDQUNjO1VBRXpCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQTtVQVNPLE1BQU00USxZQUFZLEdBQUdqTCxjQUFLLENBQUM4RyxhQUFhLENBQUMsSUFBcUIsQ0FBQztVQUFDak07VUFDaEUsTUFBTXFRLGVBQWUsR0FBRyxNQUFNbEwsY0FBSyxDQUFDZ0gsVUFBVSxDQUFDaUUsWUFBWSxDQUFDO1VBQUNwUTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWcEU7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBRU87VUFBVyxNQUFNZ0ksU0FBUyxHQUFHLENBQUM7WUFBRTFJLEtBQUs7WUFBRWdSLFNBQVMsR0FBRztVQUFLLENBQStDLEtBQUk7WUFDakgsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHckwsY0FBSyxDQUFDeUMsUUFBUSxDQUFVLEtBQUssQ0FBQztZQUNoRSxNQUFNLENBQUMxRSxRQUFRLEVBQUUwTSxXQUFXLENBQUMsR0FBR3pLLGNBQUssQ0FBQ3lDLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDOUQsTUFBTSxDQUFDNkksT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3ZMLGNBQUssQ0FBQ3lDLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFFNUQsTUFBTSxDQUFDaUIsSUFBSSxFQUFFOEgsT0FBTyxDQUFDLEdBQUd4TCxjQUFLLENBQUN5QyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFDLE1BQU07Y0FDTDVGLFlBQVk7Y0FDWkEsWUFBWSxFQUFFO2dCQUFFM0I7Y0FBUTtZQUFFLENBQzFCLEdBQUdmLEtBQUs7WUFFVCxvQkFBUyxFQUFDLENBQUNBLEtBQUssQ0FBQyxFQUFFLE1BQU1vUixVQUFVLENBQUNwUixLQUFLLENBQUNrRixlQUFlLENBQUMsQ0FBQztZQUUzRCxNQUFNeUYsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRTtZQUFLLENBQUU7WUFDcEMsTUFBTTJHLFNBQVMsR0FBRyxNQUFNckYsS0FBSyxJQUFHO2NBQy9CcUUsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQnJFLEtBQUssQ0FBQytELGNBQWMsRUFBRTtjQUN0QixNQUFNekQsS0FBSyxHQUFHLE1BQU14TCxRQUFRLENBQUNxSixJQUFJLEVBQUU7Y0FDbkNwSyxLQUFLLENBQUM0RSxXQUFXLENBQUMySCxLQUFLLENBQUM7Y0FDeEIyRSxZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDO2NBQ3hCWCxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUM7WUFFRCxNQUFNaUIsVUFBVSxHQUFHLFlBQVc7Y0FDN0JGLE9BQU8sQ0FBQyxFQUFFLENBQUM7Y0FDWGYsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQnRRLEtBQUssQ0FBQzRFLFdBQVcsQ0FBQzJFLElBQUksQ0FBQztZQUN4QixDQUFDO1lBQ0QsTUFBTWlJLFFBQVEsR0FBRyxDQUFDLENBQUNqSSxJQUFJLENBQUNQLE1BQU0sR0FBR3VJLFVBQVUsR0FBR0QsU0FBUztZQUV2RCxJQUFJLENBQUMsRUFBRSxFQUFFdE0sU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUNzRSxJQUFJLENBQUNrSSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQ2xJLElBQUksQ0FBQ21JLElBQUksRUFBRSxDQUFDMUksTUFBTSxFQUFFMkIsUUFBUSxDQUFDQSxRQUFRLEdBQUcsSUFBSTtZQUU5RyxNQUFNcEMsR0FBRyxHQUFHLG1CQUFtQjRJLE9BQU8sSUFBSUgsU0FBUyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUU7WUFDdEU7WUFDQSxNQUFNO2NBQUVXO1lBQU0sQ0FBRSxHQUFHQyxlQUFNLENBQUNqRCxNQUFNLENBQUNpRCxNQUFNO1lBRXZDLE9BQ0MvTDtjQUFLMkIsU0FBUyxFQUFFZTtZQUFHLEdBQ2xCMUMsNkJBQUNpTCxxQkFBWSxDQUFDRCxRQUFRO2NBQUNqUSxLQUFLLEVBQUU7Z0JBQUVaLEtBQUs7Z0JBQUV3UixRQUFRO2dCQUFFelEsUUFBUTtnQkFBRW1RLFlBQVk7Z0JBQUVEO2NBQVM7WUFBRSxHQUNsRlUsTUFBTSxJQUFJOUwsNkJBQUNnTSxrQkFBVztjQUFDdFAsSUFBSSxFQUFFdkMsS0FBSyxDQUFDdUM7WUFBSSxFQUFJLEVBQzVDc0QsNkJBQUNpTSxVQUFJO2NBQUNOLFFBQVEsRUFBRUEsUUFBUTtjQUFFaEssU0FBUyxFQUFDO1lBQWlCLEdBQ3BEM0IsNkJBQUNrTSxvQkFBUztjQUNUL1IsS0FBSyxFQUFFQSxLQUFLO2NBQ1p1SixJQUFJLEVBQUVBLElBQUk7Y0FDVitHLFdBQVcsRUFBRUEsV0FBVztjQUN4QjFNLFFBQVEsRUFBRUEsUUFBUSxJQUFJcU4sU0FBUyxJQUFJRSxPQUFPLElBQUlILFNBQVM7Y0FDdkRLLE9BQU8sRUFBRUEsT0FBTztjQUNoQkUsVUFBVSxFQUFFQTtZQUFVLEVBQ3JCLEVBQ0YxTDtjQUFNMkIsU0FBUyxFQUFFO1lBQWlDLEdBQ2hELENBQUMsQ0FBQytCLElBQUksQ0FBQ1AsTUFBTSxHQUNibkQsNkJBQUNtTSxrQkFBTTtjQUNOcE0sSUFBSSxFQUFDLFlBQVk7Y0FDakI2QixPQUFPLEVBQUU4SixVQUFVO2NBQ25CNUcsUUFBUSxFQUFFQSxRQUFRLENBQUNBLFFBQVEsSUFBSTNLLEtBQUssQ0FBQ2tGO1lBQWUsRUFDbkQsR0FFRlcsNkJBQUNvTSwwQkFBZTtjQUFDalMsS0FBSyxFQUFFQSxLQUFLO2NBQUUySyxRQUFRLEVBQUVzRyxTQUFTLElBQUlqUixLQUFLLENBQUNrRjtZQUFlLEVBQzNFLENBQ0ssQ0FDRCxDQUNnQixDQUNuQjtVQUVSLENBQUM7VUFBQ3hFOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNFRjtVQUNBO1VBQ0E7VUFDQTtVQUVPLE1BQU13UixNQUFNLEdBQUcsTUFBSztZQUMxQixNQUFNO2NBQUVWLFFBQVE7Y0FBRXpRLFFBQVE7Y0FBRW1RO1lBQVksQ0FBRSxHQUFHLDRCQUFlLEdBQUU7WUFFOUQsTUFBTWlCLE1BQU0sR0FBRyxNQUFNbEcsS0FBSyxJQUFHO2NBQzVCQSxLQUFLLENBQUMrRCxjQUFjLEVBQUU7Y0FDdEIsTUFBTWpQLFFBQVEsQ0FBQ3FKLElBQUksRUFBRTtjQUNyQjhHLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUNELE9BQ0NyTDtjQUFLMkIsU0FBUyxFQUFDO1lBQTZCLEdBQzNDM0IsNkJBQUN3QixpQkFBVTtjQUFDRyxTQUFTLEVBQUMsUUFBUTtjQUFDNUIsSUFBSSxFQUFDLFFBQVE7Y0FBQzZCLE9BQU8sRUFBRTBLO1lBQU0sRUFBSSxFQUNoRXRNLDZCQUFDdU0sWUFBSztjQUFDMUksTUFBTSxFQUFDO1lBQU8sRUFBRyxFQUN4QjdELDZCQUFDd0IsaUJBQVU7Y0FBQ3pCLElBQUksRUFBQyxNQUFNO2NBQUM0QixTQUFTLEVBQUMsUUFBUTtjQUFDRCxPQUFPLEVBQUMsU0FBUztjQUFDRSxPQUFPLEVBQUUrSjtZQUFRLEVBQUksQ0FDN0U7VUFFUixDQUFDO1VBQUM5UTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkY7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDTztVQUFXLE1BQU11UixlQUFlLEdBQUcsQ0FBQztZQUFFalMsS0FBSyxFQUFFO2NBQUUwQztZQUFZLENBQUU7WUFBRWlJO1VBQVEsQ0FBRSxLQUFJO1lBQ25GLE1BQU07Y0FBRTVKLFFBQVE7Y0FBRWtRLFNBQVM7Y0FBRUM7WUFBWSxDQUFFLEdBQUcsNEJBQWUsR0FBRTtZQUMvRCxNQUFNLENBQUN0TixRQUFRLEVBQUUwTSxXQUFXLENBQUMsR0FBRyxtQkFBUSxFQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUMrQixTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLG1CQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU07Y0FBRTFHO1lBQUssQ0FBRSxHQUFHLDRCQUFjLEdBQUU7WUFDbEMsTUFBTTJHLFVBQVUsR0FBRyxNQUFNdEcsS0FBSyxJQUFHO2NBQ2hDLElBQUk7Z0JBQ0hBLEtBQUssQ0FBQytELGNBQWMsRUFBRTtnQkFDdEJNLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1rQyxVQUFVLEdBQUcsTUFBTXpSLFFBQVEsQ0FBQzBSLGNBQWMsRUFBRTtnQkFDbEQsSUFBSUQsVUFBVSxDQUFDRSxLQUFLLEtBQUssU0FBUyxFQUFFSixZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUN0RCxNQUFNdlIsUUFBUSxDQUFDNFIsTUFBTSxFQUFFO2dCQUN2QnpCLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7ZUFDeEIsQ0FBQyxPQUFPMUwsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QrSyxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsTUFBTXNDLE9BQU8sR0FBRzNHLEtBQUssSUFBRztjQUN2QnFFLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJnQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFFRCxJQUFJckIsU0FBUyxFQUFFLE9BQU9wTCw2QkFBQ3FNLGNBQU0sT0FBRztZQUVoQyxPQUNDck0sNERBQ0V3TSxTQUFTLElBQ1R4TSw2QkFBQ2dOLFlBQUs7Y0FBQ0MsSUFBSSxFQUFFLElBQUk7Y0FBRTNTLElBQUksRUFBRSxJQUFJO2NBQUV5UyxPQUFPLEVBQUVBO1lBQU8sR0FDOUMvTSx5Q0FBSytGLEtBQUssQ0FBQ21ILFdBQVcsQ0FBQ2hGLEtBQUssQ0FBTSxFQUNsQ2xJLDZCQUFDbU4sWUFBSztjQUFDeEgsR0FBRyxFQUFDO1lBQTBCLEVBQUcsRUFDeEMzRix3Q0FBSStGLEtBQUssQ0FBQ21ILFdBQVcsQ0FBQ0UsV0FBVyxDQUFLLEVBQ3RDcE47Y0FBUTJCLFNBQVMsRUFBQztZQUFPLEdBQ3hCM0IsNkJBQUNtTSxrQkFBTTtjQUFDekssT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsT0FBTyxFQUFFbUw7WUFBTyxHQUN4Q2hILEtBQUssQ0FBQ21ILFdBQVcsQ0FBQ0csTUFBTSxDQUNqQixDQUNELENBRVYsRUFDRHJOLDZCQUFDbU0sa0JBQU07Y0FBQ3BNLElBQUksRUFBQyxLQUFLO2NBQUNoQyxRQUFRLEVBQUVBLFFBQVE7Y0FBRTZELE9BQU8sRUFBRThLLFVBQVU7Y0FBRTVILFFBQVEsRUFBRUEsUUFBUSxJQUFJL0c7WUFBUSxFQUFJLENBQzVGO1VBRUwsQ0FBQztVQUFDbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERGO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTyxNQUFNeVMsTUFBTSxHQUFHLENBQUM7WUFBRTVRLElBQUk7WUFBRTZRO1VBQVUsQ0FBRSxLQUFJO1lBQzlDLE1BQU0sQ0FBQ3hTLEtBQUssRUFBRXlTLFFBQVEsQ0FBQyxHQUFHeE4sY0FBSyxDQUFDeUMsUUFBUSxDQUFDL0YsSUFBSSxFQUFFb1AsTUFBTSxDQUFDO1lBQ3RELE1BQU0sQ0FBQ2xNLEtBQUssRUFBRTZOLFFBQVEsQ0FBQyxHQUFHek4sY0FBSyxDQUFDeUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUNpTCxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHM04sY0FBSyxDQUFDeUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNO2NBQUVzRDtZQUFLLENBQUUsR0FBRywyQkFBYyxHQUFFO1lBRWxDLFNBQVM2SCxZQUFZLENBQUN4SCxLQUFLO2NBQzFCLE1BQU07Z0JBQUVyTCxLQUFLLEVBQUU4UztjQUFhLENBQUUsR0FBR3pILEtBQUssQ0FBQ2dFLE1BQU07Y0FDN0NvRCxRQUFRLENBQUNLLGFBQWEsQ0FBQztZQUN4QjtZQUVBLFNBQVNDLFdBQVc7Y0FDbkJMLFFBQVEsQ0FBQyxLQUFLLENBQUM7Y0FDZkUsVUFBVSxDQUFDLEtBQUssQ0FBQztjQUNqQkgsUUFBUSxDQUFDOVEsSUFBSSxFQUFFb1AsTUFBTSxDQUFDO2NBQ3RCeUIsVUFBVSxFQUFFO1lBQ2I7WUFFQSxNQUFNUSxZQUFZLEdBQUcsTUFBTTNILEtBQUssSUFBRztjQUNsQ0EsS0FBSyxDQUFDK0QsY0FBYyxFQUFFO2NBQ3RCd0QsVUFBVSxDQUFDLElBQUksQ0FBQztjQUNoQixNQUFNck8sUUFBUSxHQUFHLE1BQU01QyxJQUFJLENBQUNzUixPQUFPLENBQUM7Z0JBQUVsQyxNQUFNLEVBQUUvUTtjQUFLLENBQUUsQ0FBQztjQUN0RCxJQUFJLENBQUN1RSxRQUFRLENBQUMyTyxNQUFNLEVBQUVSLFFBQVEsQ0FBQ25PLFFBQVEsQ0FBQ00sS0FBSyxDQUFDO2NBRTlDZ0YsWUFBSyxDQUFDQyxPQUFPLENBQUNrQixLQUFLLENBQUMrRixNQUFNLENBQUNqSCxPQUFPLENBQUM7Y0FDbkNpSixXQUFXLEVBQUU7WUFDZCxDQUFDO1lBRUQsT0FDQzlOLDZCQUFDaU0sVUFBSTtjQUFDTixRQUFRLEVBQUVvQyxZQUFZO2NBQUVwTSxTQUFTLEVBQUM7WUFBYSxHQUNuRC9CLEtBQUssSUFBSUk7Y0FBSzJCLFNBQVMsRUFBQztZQUF1QixHQUFFL0IsS0FBSyxDQUFPLEVBQzlESSw2QkFBQ2tPLGNBQVE7Y0FBQ0MsSUFBSSxFQUFFLENBQUM7Y0FBRXBULEtBQUssRUFBRUEsS0FBSztjQUFFcVQsV0FBVyxFQUFDLHdCQUF3QjtjQUFDbEssUUFBUSxFQUFFMEo7WUFBWSxFQUFJLEVBQ2hHNU4sNkNBQ0NBLDZCQUFDbU0sa0JBQU07Y0FBQ3BNLElBQUksRUFBQyxjQUFjO2NBQUN3SyxLQUFLLEVBQUMsUUFBUTtjQUFDN0ksT0FBTyxFQUFDLGNBQWM7Y0FBQ0UsT0FBTyxFQUFFa007WUFBVyxFQUFJLEVBQzFGOU4sNkJBQUNtTSxrQkFBTTtjQUFDcEUsSUFBSSxFQUFDLFFBQVE7Y0FBQ2hJLElBQUksRUFBQyxNQUFNO2NBQUM2QixPQUFPLEVBQUVtTSxZQUFZO2NBQUV4RCxLQUFLLEVBQUMsUUFBUTtjQUFDbUQsT0FBTyxFQUFFQTtZQUFPLEVBQUksQ0FDcEYsQ0FDSDtVQUVULENBQUM7VUFBQzdTOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDRjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU87VUFBVyxNQUFNbVIsV0FBVyxHQUFHLENBQUM7WUFBRXRQO1VBQUksQ0FBRSxLQUFJO1lBQ2xELE1BQU0yUixTQUFTLEdBQUdyTyxjQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEMsTUFBTTtjQUNMOEYsS0FBSyxFQUFFO2dCQUFFdUksU0FBUyxFQUFFdkk7Y0FBSztZQUFFLENBQzNCLEdBQUcsMkJBQWMsR0FBRTtZQUNwQixNQUFNd0ksU0FBUyxHQUFHLE1BQU1GLFNBQVMsQ0FBQ2pPLE9BQU8sQ0FBQ29NLFNBQVMsRUFBRTtZQUNyRCxNQUFNZSxVQUFVLEdBQUcsTUFBTWMsU0FBUyxDQUFDak8sT0FBTyxDQUFDb08sS0FBSyxFQUFFO1lBRWxELE9BQ0N4TztjQUFLMkIsU0FBUyxFQUFFO1lBQWdDLEdBQy9DM0IsNkJBQUNtTSxrQkFBTTtjQUFDcE0sSUFBSSxFQUFDLE1BQU07Y0FBQzZCLE9BQU8sRUFBRTJNLFNBQVM7Y0FBRUUsSUFBSSxFQUFDO1lBQVMsRUFBRyxFQUV4RHpPO2NBQVF5QixHQUFHLEVBQUU0TSxTQUFTO2NBQUV0QixPQUFPLEVBQUVRO1lBQVUsR0FDMUN2Tiw2QkFBQ3dCLGlCQUFVO2NBQUN6QixJQUFJLEVBQUMsT0FBTztjQUFDNEIsU0FBUyxFQUFDLE9BQU87Y0FBQ0MsT0FBTyxFQUFFMkw7WUFBVSxFQUFJLEVBQ2xFdk4sNkNBQ0NBLHlDQUFLK0YsS0FBSyxDQUFDdUksU0FBUyxDQUFNLENBQ2xCLEVBQ1R0TywwQ0FDQ0Esd0NBQUkrRixLQUFLLENBQUNwSSxPQUFPLENBQUssQ0FDakIsRUFDTnFDLDZCQUFDc04sWUFBTTtjQUFDNVEsSUFBSSxFQUFFQSxJQUFJO2NBQUU2USxVQUFVLEVBQUVBO1lBQVUsRUFBSSxDQUN0QyxDQUVMO1VBRVIsQ0FBQztVQUFDMVM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JGO1VBQ0E7VUFFTSxTQUFVcVIsU0FBUyxDQUFDO1lBQUV6QixXQUFXO1lBQUV0USxLQUFLO1lBQUVxUixPQUFPO1lBQUVFLFVBQVU7WUFBRTNOLFFBQVE7WUFBRTJGO1VBQUksQ0FBRTtZQUNwRixNQUFNZ0wsV0FBVyxHQUFHMU8sY0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3RDRCxjQUFLLENBQUNnQixTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNb0osTUFBTSxHQUFHc0UsV0FBVyxDQUFDdE8sT0FBTztjQUNsQ2dLLE1BQU0sQ0FBQ3VFLEtBQUssQ0FBQ3RGLE1BQU0sR0FBRyxNQUFNO2NBQzVCZSxNQUFNLENBQUN1RSxLQUFLLENBQUN0RixNQUFNLEdBQUczRixJQUFJLENBQUNQLE1BQU0sSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHaUgsTUFBTSxDQUFDd0UsWUFBWSxHQUFHLElBQUk7Y0FDNUUsSUFBSSxDQUFDLFdBQVcsRUFBRXpQLFNBQVMsQ0FBQyxDQUFDQyxRQUFRLENBQUNzRSxJQUFJLENBQUNrSSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDbkUsQ0FBQyxFQUFFLENBQUNsSSxJQUFJLENBQUMsQ0FBQztZQUVWLG9CQUFTLEVBQ1IsQ0FBQ3ZKLEtBQUssQ0FBQyxFQUNQLE1BQUs7Y0FDSkQsVUFBVSxDQUFDZ0csVUFBVSxDQUFDLE1BQU13TyxXQUFXLENBQUN0TyxPQUFPLENBQUN5TyxLQUFLLEVBQUUsRUFBRSxHQUFHLENBQUM7Y0FDN0RwRSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUMsRUFDRCxnQkFBZ0IsQ0FDaEI7WUFFRCxNQUFNcUUsZ0JBQWdCLEdBQUc7Y0FBRWhLLFFBQVEsRUFBRS9HO1lBQVEsQ0FBRTtZQUMvQyxNQUFNZ1IsaUJBQWlCLEdBQUdyUCxDQUFDLElBQUc7Y0FDN0IsTUFBTTtnQkFBRTNFO2NBQUssQ0FBRSxHQUFHMkUsQ0FBQyxDQUFDMEssTUFBTTtjQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFakwsU0FBUyxDQUFDLENBQUNDLFFBQVEsQ0FBQ3JFLEtBQUssQ0FBQzZRLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2NBQy9ESixPQUFPLENBQUN6USxLQUFLLENBQUM7WUFDZixDQUFDO1lBQ0QsTUFBTWlVLGFBQWEsR0FBR3RQLENBQUMsSUFBRztjQUN6QixJQUFJQSxDQUFDLENBQUM4RCxHQUFHLEtBQUssT0FBTyxFQUFFO2NBQ3ZCLE1BQU15TCxFQUFFLEdBQUdDLFNBQVMsSUFBSUEsU0FBUyxHQUFHLElBQUk7Y0FDeEMsTUFBTW5VLEtBQUssR0FBRzJFLENBQUMsQ0FBQzBLLE1BQU0sQ0FBQ3JQLEtBQUssQ0FBQzZRLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDN0MsSUFBSSxDQUFDLEVBQUUsRUFBRXpNLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxDQUFDckUsS0FBSyxDQUFDLEVBQUU7Y0FDM0MyRSxDQUFDLENBQUN5UCxRQUFRLEdBQUczRCxPQUFPLENBQUN5RCxFQUFFLENBQUMsR0FBR3ZELFVBQVUsRUFBRTtZQUN4QyxDQUFDO1lBRUQsT0FDQzFMO2NBQUEsR0FDSzhPLGdCQUFnQjtjQUNwQlgsSUFBSSxFQUFFLENBQUM7Y0FDUHBULEtBQUssRUFBRTJJLElBQUk7Y0FDWFEsUUFBUSxFQUFFNkssaUJBQWlCO2NBQzNCSyxTQUFTLEVBQUVKLGFBQWE7Y0FDeEJLLFNBQVMsRUFBRSxJQUFJO2NBQ2YxTixTQUFTLEVBQUMsaUJBQWlCO2NBQzNCRixHQUFHLEVBQUVpTjtZQUFXLEVBQ2Y7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0E7VUFDQTtVQUZBOztVQVFNLFNBQVVuQyxLQUFLLENBQUM7WUFBRTFJO1VBQU0sQ0FBYztZQUMzQyxNQUFNeUwsU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDbFEsUUFBUSxDQUFDeUUsTUFBTSxDQUFDO1lBQ3ZELE1BQU0wTCxPQUFPLEdBQUcxTCxNQUFNLEtBQUssU0FBUztZQUNwQyxNQUFNLENBQUMyTCxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUMsR0FBRyxzQkFBUSxFQUFDTCxTQUFTLEVBQUVDLE9BQU8sQ0FBQztZQUM1RSxNQUFNSyxXQUFXLEdBQUdGLE9BQU8sQ0FBQ0csUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ3ZELE1BQU1DLGVBQWUsR0FBR04sT0FBTyxDQUFDSSxRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDM0QsT0FDQzlQO2NBQUsyQixTQUFTLEVBQUM7WUFBMEIsR0FDeEMzQiwyQ0FBTyxHQUFHK1AsZUFBZSxFQUFFLE1BQVMsRUFDcEMvUCwyQ0FBTyxHQUFHNFAsV0FBVyxFQUFFLENBQVEsQ0FDMUI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkE7VUFEQTs7VUFFQSxNQUFNO1lBQUVuTixRQUFRO1lBQUV6QjtVQUFTLENBQUUsR0FBR2hCLGNBQUs7VUFFL0IsU0FBVWdRLFFBQVEsQ0FBQ1YsU0FBa0IsRUFBRUMsT0FBZ0I7WUFDNUQsTUFBTSxDQUFDVSxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHek4sUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVuQ3pCLFNBQVMsQ0FBQyxNQUFLO2NBQ2QsSUFBSW1QLFVBQTBCO2NBRTlCLElBQUliLFNBQVMsRUFBRTtnQkFDZGEsVUFBVSxHQUFHQyxXQUFXLENBQUMsTUFBSztrQkFDN0JGLE9BQU8sQ0FBQ0csUUFBUSxJQUFJQSxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O2NBR1QsT0FBTyxNQUFLO2dCQUNYQyxhQUFhLENBQUNILFVBQVUsQ0FBQztjQUMxQixDQUFDO1lBQ0YsQ0FBQyxFQUFFLENBQUNiLFNBQVMsQ0FBQyxDQUFDO1lBRWZ0TyxTQUFTLENBQUMsTUFBSztjQUNkLElBQUl1TyxPQUFPLEVBQUU7Z0JBQ1pXLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1lBRVosQ0FBQyxFQUFFLENBQUNYLE9BQU8sQ0FBQyxDQUFDO1lBRWIsTUFBTUksWUFBWSxHQUFHTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDakMsTUFBTVAsT0FBTyxHQUFHYSxJQUFJLENBQUNDLEtBQUssQ0FBRVAsSUFBSSxHQUFHLEdBQUcsR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU1SLE9BQU8sR0FBR2MsSUFBSSxDQUFDQyxLQUFLLENBQUVQLElBQUksR0FBRyxJQUFJLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNVCxLQUFLLEdBQUdlLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV6QyxPQUFPLENBQUNULEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQztVQUMvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVNUUsWUFBWTtZQUMzQixTQUFTMEYsVUFBVTtjQUNsQkMsa0JBQVMsQ0FBQ0MsV0FBVyxHQUFHLElBQUk7WUFDN0I7WUFFQSxJQUFJLENBQUM5VSxtQkFBVSxDQUFDbUMsS0FBSyxFQUFFLE9BQU9nQyw2QkFBQzRRLDBCQUFhLE9BQUc7WUFDL0MsT0FDQzVRO2NBQUsyQixTQUFTLEVBQUM7WUFBa0IsR0FDaEMzQjtjQUFLMkYsR0FBRyxFQUFDLHVCQUF1QjtjQUFDRCxHQUFHLEVBQUM7WUFBZ0IsRUFBRyxFQUN4RDFGO2NBQU0yQixTQUFTLEVBQUM7WUFBcUIsR0FDcEMzQiw2QkFBQytDLFdBQUk7Y0FBQ2hELElBQUksRUFBRWlELGFBQUssQ0FBQyxlQUFlLENBQUM7Y0FBRXJCLFNBQVMsRUFBQztZQUFtQixFQUFHLEVBQ3BFM0IsMERBQXVCLEVBQ3ZCQSx3Q0FDQ0EsZ0dBQWlFLE9BQUNBLHdDQUFNLHFEQUVyRSxFQUNKQSw2QkFBQ21NLGtCQUFNO2NBQUNwTSxJQUFJLEVBQUMsTUFBTTtjQUFDNkIsT0FBTyxFQUFFNk8sVUFBVTtjQUFFbEcsS0FBSyxFQUFDO1lBQWdCLEVBQUcsQ0FDNUQsQ0FDRjtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImdsb2JhbFRoaXMiLCJzdG9yZSIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiT2JqZWN0IiwidmFsdWUiLCJBdWRpb01hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicmVjb3JkZXIiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJsYW5ndWFnZSIsIkFwcFdyYXBwZXIiLCJyYXRlIiwiYXVkaW9TcGVlZCIsIm9uIiwiTGlzdGVuQXBwQ2hhbmdlcyIsInNldCIsImxhbmd1dWFnZSIsInNlbGVjdFBsYXllciIsIm5hbWUiLCJFcnJvciIsInRyaWdnZXIiLCJtZXNzYWdlcyIsImNhdGVnb3J5IiwiY2hhdCIsImNoYXRzIiwiaXRlbXMiLCJhdWRpb01hbmFnZXIiLCJrbm93bGVkZ2VCb3hlcyIsImticyIsInNlbGVjdGVkS2IiLCJrYiIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsImlkIiwicGF0aCIsImN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZSIsIk1hcCIsImV4dGVuc2lvbnMiLCJhdXRvcGxheSIsImZldGNoaW5nIiwicmVhZHkiLCJDaGF0IiwiaXNSZWFkeSIsImxvYWRBbGwiLCJjdXJyZW50Q2hhdCIsImZvdW5kIiwia25vd2xlZGVCb3hTZWxlY3RlZCIsImtub3dsZWRnZUJveElkIiwiZGVmYXVsdCIsInRyaWdnZXJFdmVudCIsImV4dHMiLCJtZXRhZGF0YSIsImZvckVhY2giLCJleHRlbnNpb24iLCJpbmRleCIsInNlbmRNZXNzYWdlIiwiY29udGVudCIsInBlcmZvcm1hbmNlIiwibWFyayIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwid2FpdGluZ1Jlc3BvbnNlIiwicmVzcG9uc2UiLCJvbkxpc3RlbiIsIm9uRW5kIiwib2ZmIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkJhY2tBcnJvdyIsInNlcGFyYXRvciIsImljb24iLCJSZWFjdCIsInVzZVJlZiIsInNldFRpbWVvdXQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJpc0luQ29udGFpbmVyIiwiY29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbmRSZWN0IiwidGhyZXNob2xkIiwiYm90dG9tIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSWNvbkJ1dHRvbiIsInJlZiIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiQ29udGVudCIsIndlYkNvbXBvbmVudE5hbWUiLCJFeHRlbnNpb25SZW5kZXJlciIsImNvbXBvbmVudCIsInJlZmVyZW5jZSIsIk1lc3NhZ2VzIiwiQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImNoYXRJbnRybyIsInJlYWRlciIsInNldFJlYWRlciIsInVzZVN0YXRlIiwiY2xzIiwiSGVhZGVyIiwiYXZvaWRDaGF0IiwiQ2hhdElucHV0IiwiU3lzdGVtQW5zd2VyaW5nIiwiSWNvbiIsIklDT05TIiwidG90YWxNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibGVuZ3RoIiwib3V0cHV0IiwibWFwIiwibGFzdCIsIk1lc3NhZ2UiLCJrZXkiLCJNZXNzYWdlQWN0aW9ucyIsInRleHQiLCJtZXNzYWdlVG9rZW5zIiwicGxheSIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJvblBhdXNlIiwic3RvcCIsImNvcHlNZXNzYWdlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiZGlzYWJsZWQiLCJhcHBseSIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsImFsdCIsInNyYyIsIm9uRXJyb3IiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwidGV4dHMiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsIm9uQ2xpY2tXb3JkIiwiZXZlbnQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsInRvb2xUZXh0cyIsInRvb2xzIiwiYXVkaW8iLCJBdWRpb1BsYXllciIsImNvbnZlcnQiLCJDaGF0TWVzc2FnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2hhdE1lc3NhZ2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk1lc3NhZ2VDb21wb25lbnQiLCJzZXRDb250ZW50IiwiZmluaXNoZWQiLCJzZXRGaW5pc2hlZCIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwiYmxvY2tzIiwicGxheWFibGVDb250ZW50IiwiYWN0aW9ucyIsIlN5c3RlbUFjdGlvbnMiLCJtZW1vIiwiQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJzeXN0ZW1BY3Rpb25zIiwiQ29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsImF0dHJzIiwiQ29sbGFwc2libGVIZWFkZXIiLCJGcmFnbWVudCIsIm1hdGNoZXMiLCJpdGVtIiwicGFyYWdyYXBoIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJ0cmFuc2NyaXB0aW9uIiwicGFyc2UiLCJwYXJhbXMiLCJmdW5jdGlvbnMiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIkNoYXRTa2VsZXRvbiIsIlByZWxvYWQiLCJ3aWR0aCIsImhlaWdodCIsInVzZUV4dGVuc2lvbiIsInNldFJlYWR5IiwiY29udHJvbCIsIm9uUmVhZHkiLCJDaGF0Q29udGV4dCIsInVzZUNoYXRDb250ZXh0Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2V0QXV0b3BsYXkiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJoYW5kbGVBdXRvcGxheVRvZ2dsZSIsImhhbmRsZUNoYXRTZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm9uUmVhZGVyIiwiSW5wdXQiLCJsYWJlbCIsInJlcXVpcmVkIiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlByb3ZpZGVyIiwiSW5wdXRDb250ZXh0IiwidXNlSW5wdXRDb250ZXh0IiwiaXNXYWl0aW5nIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJzZXRUZXh0Iiwic2VuZEF1ZGlvIiwiaGFuZGxlU2VuZCIsIm9uU3VibWl0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJzeXN0ZW0iLCJjb25maWciLCJTeXN0ZW1Nb2RhbCIsIkZvcm0iLCJUZXh0SW5wdXQiLCJCdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInBsYXlBY3Rpb24iLCJwZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbnMiLCJzdGF0ZSIsInJlY29yZCIsIm9uQ2xvc2UiLCJNb2RhbCIsIm9wZW4iLCJwZXJtaXNzaW9ucyIsIkltYWdlIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJVSUZvcm0iLCJjbG9zZU1vZGFsIiwic2V0VmFsdWUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFyZWFWYWx1ZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwicHVibGlzaCIsInN0YXR1cyIsIlRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwiZGlhbG9nUmVmIiwiYXNzaXN0YW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJtb2RlIiwidGV4dEFyZWFSZWYiLCJzdHlsZSIsInNjcm9sbEhlaWdodCIsImZvY3VzIiwiZGlzYWJsZWRUZXh0YXJlYSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlS2V5RG93biIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInVzZVRpbWVyIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJvcGVuRGlhbG9nIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvaW50ZXJmYWNlcy9tZXNzYWdlcy50cyIsInRzL3N0b3JlL2F1ZGlvLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy92aWV3cy9jaGF0L0JhY2tBcnJvdy50c3giLCJ0cy92aWV3cy9jaGF0L2NvbnRlbnQudHN4IiwidHMvdmlld3MvY2hhdC9leHRlbnNpb24tcmVuZGVyZXIudHN4IiwidHMvdmlld3MvY2hhdC9pbmRleC50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL2Fuc3dlcmluZy50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCJ0cy92aWV3cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9jb250ZXh0LnRzIiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9hY3Rpb24udHN4IiwidHMvdmlld3MvY2hhdC9tZXNzYWdlcy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2luZGV4LnRzeCIsInRzL3ZpZXdzL2NoYXQvc2tlbGV0b24udHN4IiwidHMvdmlld3MvY2hhdC91c2UtZXh0ZW5zaW9uLnRzeCIsInRzL3ZpZXdzL2NvbnRleHQudHN4IiwidHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2lucHV0L2NvbnRleHQudHN4IiwidHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvcGxheWVyLnRzeCIsInRzL3ZpZXdzL2lucHV0L3JlY29yZGluZy50c3giLCJ0cy92aWV3cy9pbnB1dC9zeXN0ZW0vZm9ybS50c3giLCJ0cy92aWV3cy9pbnB1dC9zeXN0ZW0vaW5kZXgudHN4IiwidHMvdmlld3MvaW5wdXQvdGV4dC1pbnB1dC50c3giLCJ0cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCJ0cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwidHMvdmlld3Mvbm90LWZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19