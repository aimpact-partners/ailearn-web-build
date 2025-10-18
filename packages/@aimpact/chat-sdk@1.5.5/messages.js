System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "pragmate-ui@1.0.8/icons", "@aimpact/chat-sdk@1.5.5/components/icons", "@aimpact/chat-sdk@1.5.5/voice", "pragmate-ui@1.0.8/empty", "@aimpact/chat-sdk@1.5.5/shared/hooks", "pragmate-ui@1.0.8/toast", "@aimpact/chat-sdk@1.5.5/audio-player", "wavesurfer.js@7.9.9", "pragmate-ui@1.0.8/image", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/alert", "pragmate-ui@1.0.8/components", "react-icons@5.5.0/bs", "dayjs@1.11.13", "@aimpact/chat-sdk@1.5.5/chat/messages/item", "@aimpact/chat-sdk@1.5.5/widgets/playable", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/collapsible"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi108Icons) {
      dependency_2 = _pragmateUi108Icons;
    }, function (_aimpactChatSdk155ComponentsIcons) {
      dependency_3 = _aimpactChatSdk155ComponentsIcons;
    }, function (_aimpactChatSdk155Voice) {
      dependency_4 = _aimpactChatSdk155Voice;
    }, function (_pragmateUi108Empty) {
      dependency_5 = _pragmateUi108Empty;
    }, function (_aimpactChatSdk155SharedHooks) {
      dependency_6 = _aimpactChatSdk155SharedHooks;
    }, function (_pragmateUi108Toast) {
      dependency_7 = _pragmateUi108Toast;
    }, function (_aimpactChatSdk155AudioPlayer) {
      dependency_8 = _aimpactChatSdk155AudioPlayer;
    }, function (_wavesurferJs) {
      dependency_9 = _wavesurferJs;
    }, function (_pragmateUi108Image) {
      dependency_10 = _pragmateUi108Image;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_11 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Alert) {
      dependency_12 = _pragmateUi108Alert;
    }, function (_pragmateUi108Components) {
      dependency_13 = _pragmateUi108Components;
    }, function (_reactIcons550Bs) {
      dependency_14 = _reactIcons550Bs;
    }, function (_dayjs2) {
      dependency_15 = _dayjs2;
    }, function (_aimpactChatSdk155ChatMessagesItem) {
      dependency_16 = _aimpactChatSdk155ChatMessagesItem;
    }, function (_aimpactChatSdk155WidgetsPlayable) {
      dependency_17 = _aimpactChatSdk155WidgetsPlayable;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_18 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi108Collapsible) {
      dependency_19 = _pragmateUi108Collapsible;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.4"], ["@google-cloud/storage", "7.17.1"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.6.2"], ["@tiptap/extension-code-block", "3.6.2"], ["@tiptap/extension-horizontal-rule", "3.6.2"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.6.2"], ["@tiptap/extension-task-list", "3.6.2"], ["@tiptap/extension-underline", "3.6.2"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.6.2"], ["@tiptap/starter-kit", "3.6.2"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dompurify", "3.2.7"], ["firebase", "11.10.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.22"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.10"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.1"], ["wavesurfer.js", "7.10.3"], ["zod", "3.25.76"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.25"], ["@types/react-dom", "18.3.7"], ["typescript", "5.9.3"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/messages"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat-sdk/components/icons', dependency_3], ['@aimpact/chat-sdk/voice', dependency_4], ['pragmate-ui/empty', dependency_5], ['@aimpact/chat-sdk/shared/hooks', dependency_6], ['pragmate-ui/toast', dependency_7], ['@aimpact/chat-sdk/audio-player', dependency_8], ['wavesurfer.js', dependency_9], ['pragmate-ui/image', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/alert', dependency_12], ['pragmate-ui/components', dependency_13], ['react-icons/bs', dependency_14], ['dayjs', dependency_15], ['@aimpact/chat-sdk/chat/messages/item', dependency_16], ['@aimpact/chat-sdk/widgets/playable', dependency_17], ['@aimpact/chat-sdk/widgets/markdown', dependency_18], ['pragmate-ui/collapsible', dependency_19]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./answering
      ***************************/
      ims.set('./answering', {
        hash: 373385579,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemAnswering = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat-sdk/components/icons");
          const SystemAnswering = () => {
            return _react.default.createElement("div", {
              className: "message answering"
            }, _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: _icons2.ICONS['ai-profile']
            }), _react.default.createElement("div", {
              className: ""
            }, _react.default.createElement("span", {
              className: "dot"
            }), _react.default.createElement("span", {
              className: "dot"
            }), _react.default.createElement("span", {
              className: "dot"
            })));
          };
          exports.SystemAnswering = SystemAnswering;
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 1675578493,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatMessagesContext = exports.ChatMessagesContext = void 0;
          var _react = require("react");
          const ChatMessagesContext = exports.ChatMessagesContext = _react.default.createContext({});
          const useChatMessagesContext = () => _react.default.useContext(ChatMessagesContext);
          exports.useChatMessagesContext = useChatMessagesContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3451320850,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = Messages;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _context = require("./context");
          var _message = require("./message");
          /*bundle*/
          function Messages(props) {
            const {
              chat,
              player,
              showAvatar,
              messages,
              texts,
              current,
              systemIcon,
              setUpdateScroll
            } = props;
            const [currentMessage, setCurrentMessage] = _react.default.useState(current);
            const totalMessages = messages.length;
            const {
              errors
            } = chat;
            // Show empty state if there are no messages
            if (!totalMessages) return _react.default.createElement(_empty.Empty, {
              text: texts.empty
            });
            // Render each message item
            const messageItems = messages.map((message, i) => _react.default.createElement(_message.MessageItemContainer, {
              key: `message-${i}`,
              message: message,
              setUpdateScroll: setUpdateScroll
            }));
            // Context value for child components
            const contextValue = {
              chat,
              player,
              showAvatar,
              messages,
              texts,
              currentMessage,
              setCurrentMessage,
              systemIcon,
              setUpdateScroll
            };
            return _react.default.createElement(_context.ChatMessagesContext.Provider, {
              value: contextValue
            }, _react.default.createElement("div", {
              className: "messages__list"
            }, messageItems));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./message/actions/index
      ***************************************/

      ims.set('./message/actions/index', {
        hash: 689636903,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageActions = MessageActions;
          var _hooks = require("@aimpact/chat-sdk/shared/hooks");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          var _react = require("react");
          var _context = require("../../context");
          var _formatHour = require("../format-hour");
          function MessageActions({
            text,
            message,
            messageTokens,
            play = true
          }) {
            const {
              player,
              setCurrentMessage
            } = (0, _context.useChatMessagesContext)();
            const processing = player.speaking && player.textId === message.id;
            (0, _hooks.useStore)(player, ['on.finish', 'change']);
            (0, _hooks.useStore)(message);
            const onPlay = async event => {
              event.stopPropagation();
              setCurrentMessage(message.content);
              player.positionToCut = 0;
              player.textId = message.id;
              const parsedText = message.content.replaceAll(/[-\\*_#]+/g, '').trim();
              await player.play(parsedText, message.id);
            };
            const onPause = async ({
              listen
            }) => await player.stop();
            const copyMessage = async () => {
              await globalThis?.navigator.clipboard.writeText(text);
              _toast.toast.success('Message copied to clipboard');
            };
            const icon = processing ? 'stop' : 'play';
            const onClick = icon === 'play' ? onPlay : onPause;
            if (message.streaming) return null;
            return _react.default.createElement("section", {
              className: "message__actions"
            }, _react.default.createElement("span", {
              className: "message__datetime"
            }, (0, _formatHour.formatHour)(message.timestamp)), _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "audio__actions"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: copyMessage,
              icon: "copy"
            }), play && _react.default.createElement(_icons.IconButton, {
              onClick: onClick,
              "data-listen": "api",
              icon: icon
            })), messageTokens && _react.default.createElement("div", {
              className: "tokens overline"
            }, messageTokens, " TOKENS")));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./message/components/audio-player
      *************************************************/

      ims.set('./message/components/audio-player', {
        hash: 1138068273,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Player = Player;
          var _react = require("react");
          function Player({
            message
          }) {
            const src = URL.createObjectURL(message.audio);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              target.addEventListener('loadedmetadata', () => {
                if (target.duration === Infinity) {
                  target.currentTime = 1e101;
                  target.ontimeupdate = () => {
                    target.ontimeupdate = null;
                    target.currentTime = 0;
                  };
                }
              });
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src,
              type: "audio/mp3",
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./message/components/profile-icon
      *************************************************/

      ims.set('./message/components/profile-icon', {
        hash: 2429896100,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          function ProfileIcon({
            role
          }) {
            const [loadError, setLoadError] = (0, _react.useState)(false);
            const {
              systemIcon,
              chat
            } = (0, _context.useChatMessagesContext)();
            const userProps = chat.user;
            const handleLoadError = () => setLoadError(true);
            const src = role === 'user' ? userProps.photoURL : systemIcon;
            return _react.default.createElement("picture", {
              className: "picture__container"
            }, userProps.photoURL && !loadError || role !== 'user' ? _react.default.createElement(_image.Image, {
              alt: "agent",
              src: src,
              onError: handleLoadError
            }) : _react.default.createElement(_react.default.Fragment, null, role === 'user' ? _react.default.createElement(_icons.Icon, {
              icon: "user"
            }) : _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: systemIcon,
              onError: handleLoadError
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./message/components/text
      *****************************************/

      ims.set('./message/components/text', {
        hash: 1130764016,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _context = require("../../context");
          var _audioPlayer = require("./audio-player");
          function MessageText({
            message,
            playable,
            fetching,
            autoplay = false
          }) {
            const ref = _react.default.useRef(null);
            const {
              texts,
              player,
              currentMessage,
              setCurrentMessage
            } = (0, _context.useChatMessagesContext)();
            const removeHighlight = () => {
              ref.current.querySelectorAll('.highlight').forEach(element => element.classList.remove('highlight'));
            };
            const [text, setText] = _react.default.useState(message.content ?? '');
            (0, _hooks.useBinder)([message], () => {
              setText(message.content ?? '');
            }, 'change');
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const onClickWord = event => setCurrentMessage(message);
            const canBePlayed = message && message.role !== 'user' && autoplay;
            const autoplayValue = message.id === currentMessage?.id && canBePlayed;
            return _react.default.createElement("div", {
              className: "message-text__container p2",
              ref: ref
            }, _react.default.createElement("div", null, text), message.audio && _react.default.createElement(_audioPlayer.Player, {
              message: message
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./message/errors-renderer
      *****************************************/

      ims.set('./message/errors-renderer', {
        hash: 3320449480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorsRenderer = void 0;
          var _hooks = require("@aimpact/chat-sdk/shared/hooks");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _bs = require("react-icons/bs");
          var _context = require("../context");
          const ErrorsRenderer = ({
            message
          }) => {
            const {
              chat
            } = (0, _context.useChatMessagesContext)();
            (0, _hooks.useStore)(message, ['error.changed']);
            const {
              texts
            } = (0, _context.useChatMessagesContext)();
            const onRetry = () => chat.retry(message.id);
            if (!message.error) return null;
            return _react.default.createElement("div", {
              className: "message__error"
            }, _react.default.createElement(_alert.Alert, {
              type: "error"
            }, _react.default.createElement("div", null, texts.errors.default), _react.default.createElement("div", {
              className: "error__actions"
            }, _react.default.createElement(_components.Button, {
              onClick: onRetry
            }, _react.default.createElement(_bs.BsArrowCounterclockwise, null), texts.actions.retry))));
          };
          exports.ErrorsRenderer = ErrorsRenderer;
        }
      });

      /*************************************
      INTERNAL MODULE: ./message/format-hour
      *************************************/

      ims.set('./message/format-hour', {
        hash: 674482009,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.formatHour = void 0;
          var _dayjs = require("dayjs");
          const formatHour = timestamp => {
            const now = (0, _dayjs.default)();
            const date = (0, _dayjs.default)(timestamp);
            const isSameDay = date.isSame(now, 'day');
            const hour = date.format('h A');
            return isSameDay ? hour : `${date.format('ddd')} ${hour}`;
          };
          exports.formatHour = formatHour;
        }
      });

      /*******************************
      INTERNAL MODULE: ./message/index
      *******************************/

      ims.set('./message/index', {
        hash: 3252373422,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageItemContainer = MessageItemContainer;
          var _item = require("@aimpact/chat-sdk/chat/messages/item");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _react = require("react");
          var _context = require("../context");
          var _actions = require("./actions");
          var _profileIcon = require("./components/profile-icon");
          var _errorsRenderer = require("./errors-renderer");
          var _systemActions = require("./system-actions");
          function MessageItemContainer({
            message,
            setUpdateScroll
          }) {
            const {
              showAvatar,
              texts,
              chat
            } = (0, _context.useChatMessagesContext)();
            const cls = `message__container message__container--${message.role}${showAvatar ? `has-avatar` : ''}`;
            const messageTokens = message.role === 'assistant' ? message.usage?.totalTokens : null;
            const ACTIONS = ['transcription', 'fetching-tool-data', 'kb-processed-response', 'function', 'kb-response'];
            const [, playableContent, actions] = (0, _playable.parseText)(message.id, message.content, ACTIONS);
            return _react.default.createElement("div", {
              className: cls,
              "data-id": message.id
            }, showAvatar && _react.default.createElement(_profileIcon.ProfileIcon, {
              role: message.role
            }), _react.default.createElement("section", {
              className: "message__content"
            }, _react.default.createElement(_systemActions.SystemActions, {
              actions: actions
            }), !message.error && _react.default.createElement(_item.Message, {
              message: message,
              setUpdateScroll: setUpdateScroll,
              texts: texts.message
            }), _react.default.createElement(_actions.MessageActions, {
              message: message,
              text: playableContent,
              messageTokens: messageTokens
            }), _react.default.createElement(_errorsRenderer.ErrorsRenderer, {
              message: message
            })));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./message/system-actions/action
      ***********************************************/

      ims.set('./message/system-actions/action', {
        hash: 3159523020,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Action = Action;
          var _react = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _collapsible = require("pragmate-ui/collapsible");
          function Action({
            last = false,
            texts,
            data: {
              type,
              data
            }
          }) {
            const mark = _markdown.useMarked;
            const {
              systemActions: actionsTexts
            } = texts;
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
                className: "detail__content"
              }, children)));
            };
            if (type === 'fetching-tool-data') {
              return _react.default.createElement(Container, {
                title: actionsTexts[type]
              });
            }
            if (type === 'kb-response') {
              const output = data.matches.map(item => _react.default.createElement("li", {
                key: item.id
              }, item.paragraph));
              return _react.default.createElement(Container, {
                title: actionsTexts[type]
              }, _react.default.createElement("ul", null, output));
            }
            if (type === 'kb-processed-response') {
              return _react.default.createElement(Container, {
                title: actionsTexts[type]
              }, _react.default.createElement("div", {
                dangerouslySetInnerHTML: {
                  __html: mark(data.response)?.output
                }
              }));
            }
            if (type === 'transcription') {
              return _react.default.createElement(Container, {
                title: actionsTexts.transcription
              }, _react.default.createElement("p", null, data.transcription));
            }
            if (type === 'function' && data.name === 'kb') {
              try {
                const {
                  text
                } = JSON.parse(data.params);
                return _react.default.createElement(Container, {
                  title: actionsTexts.functions[data.name]
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

      /**********************************************
      INTERNAL MODULE: ./message/system-actions/index
      **********************************************/

      ims.set('./message/system-actions/index', {
        hash: 1485603025,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemActions = SystemActions;
          var _react = require("react");
          var _action = require("./action");
          var _collapsible = require("pragmate-ui/collapsible");
          var _context = require("../../context");
          function SystemActions({
            actions
          }) {
            if (!actions?.length) return null;
            const {
              texts
            } = (0, _context.useChatMessagesContext)();
            const last = actions[actions.length - 1];
            return _react.default.createElement("section", {
              className: "message-actions__container"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_action.Action, {
              data: last,
              last: true,
              texts: texts
            }), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("section", {
              className: "actions__log"
            }, actions.map((action, i) => _react.default.createElement(_action.Action, {
              texts: texts,
              key: `action-${i}`,
              data: action
            }))))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./message/use-message
      *************************************/

      ims.set('./message/use-message', {
        hash: 4237060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMessage = useMessage;
          var _react = require("react");
          var _context = require("../context");
          function useMessage(message) {
            const [fetching, setFetching] = _react.default.useState(false);
            const [content, setContent] = _react.default.useState(message?.content ?? '');
            const {
              chat
            } = (0, _context.useChatMessagesContext)();
            _react.default.useEffect(() => {
              const onUpdate = () => {
                setFetching(true);
                setContent(message.content);
              };
              const onEnd = () => {
                setContent(message.content);
                setFetching(false);
              };
              chat.on(`message.${message.id}.updated`, onUpdate);
              chat.on(`message.${message.id}.ended`, onEnd);
              return () => {
                chat.off(`message.${message.id}.updated`, onUpdate);
                chat.off(`message.${message.id}.ended`, onEnd);
              };
            }, []);
            return {
              fetching,
              setFetching,
              content,
              setContent
            };
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./types/IMessageListProps
      *****************************************/

      ims.set('./types/IMessageListProps', {
        hash: 2440750696,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Messages",
        "name": "Messages"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Messages') && _export("Messages", Messages = require ? require('./index').Messages : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2VtcHR5IiwiX2NvbnRleHQiLCJfbWVzc2FnZSIsIk1lc3NhZ2VzIiwicHJvcHMiLCJjaGF0IiwicGxheWVyIiwic2hvd0F2YXRhciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50Iiwic3lzdGVtSWNvbiIsInNldFVwZGF0ZVNjcm9sbCIsImN1cnJlbnRNZXNzYWdlIiwic2V0Q3VycmVudE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRvdGFsTWVzc2FnZXMiLCJsZW5ndGgiLCJlcnJvcnMiLCJFbXB0eSIsInRleHQiLCJlbXB0eSIsIm1lc3NhZ2VJdGVtcyIsIm1hcCIsIm1lc3NhZ2UiLCJpIiwiTWVzc2FnZUl0ZW1Db250YWluZXIiLCJrZXkiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwiX2hvb2tzIiwiX3RvYXN0IiwiX2Zvcm1hdEhvdXIiLCJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwicHJvY2Vzc2luZyIsInNwZWFraW5nIiwidGV4dElkIiwiaWQiLCJ1c2VTdG9yZSIsIm9uUGxheSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGVudCIsInBvc2l0aW9uVG9DdXQiLCJwYXJzZWRUZXh0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJvblBhdXNlIiwibGlzdGVuIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm9uQ2xpY2siLCJzdHJlYW1pbmciLCJmb3JtYXRIb3VyIiwidGltZXN0YW1wIiwiSWNvbkJ1dHRvbiIsIlBsYXllciIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImF1ZGlvIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsInR5cGUiLCJfaW1hZ2UiLCJQcm9maWxlSWNvbiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJ1c2VyIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJJbWFnZSIsImFsdCIsIm9uRXJyb3IiLCJGcmFnbWVudCIsIl9hdWRpb1BsYXllciIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJmZXRjaGluZyIsImF1dG9wbGF5IiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2V0VGV4dCIsInVzZUJpbmRlciIsIm9uQ2xpY2tXb3JkIiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfYnMiLCJFcnJvcnNSZW5kZXJlciIsIm9uUmV0cnkiLCJyZXRyeSIsImVycm9yIiwiQWxlcnQiLCJCdXR0b24iLCJCc0Fycm93Q291bnRlcmNsb2Nrd2lzZSIsImFjdGlvbnMiLCJfZGF5anMiLCJub3ciLCJkYXRlIiwiaXNTYW1lRGF5IiwiaXNTYW1lIiwiaG91ciIsImZvcm1hdCIsIl9pdGVtIiwiX3BsYXlhYmxlIiwiX2FjdGlvbnMiLCJfcHJvZmlsZUljb24iLCJfZXJyb3JzUmVuZGVyZXIiLCJfc3lzdGVtQWN0aW9ucyIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwicGxheWFibGVDb250ZW50IiwicGFyc2VUZXh0IiwiU3lzdGVtQWN0aW9ucyIsIk1lc3NhZ2UiLCJfbWFya2Rvd24iLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJsYXN0IiwiZGF0YSIsIm1hcmsiLCJ1c2VNYXJrZWQiLCJzeXN0ZW1BY3Rpb25zIiwiYWN0aW9uc1RleHRzIiwiQ29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsImF0dHJzIiwiQ29sbGFwc2libGVIZWFkZXIiLCJvdXRwdXQiLCJtYXRjaGVzIiwiaXRlbSIsInBhcmFncmFwaCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVzcG9uc2UiLCJ0cmFuc2NyaXB0aW9uIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsImUiLCJjb25zb2xlIiwiX2FjdGlvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiYWN0aW9uIiwidXNlTWVzc2FnZSIsInNldEZldGNoaW5nIiwic2V0Q29udGVudCIsIm9uVXBkYXRlIiwib25FbmQiLCJvbiIsIm9mZiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiLy90cy9hbnN3ZXJpbmcudHN4IiwiLy90cy9jb250ZXh0LnRzIiwiLy90cy9pbmRleC50c3giLCIvL3RzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvL3RzL21lc3NhZ2UvY29tcG9uZW50cy9hdWRpby1wbGF5ZXIudHN4IiwiLy90cy9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi8vdHMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiLy90cy9tZXNzYWdlL2Vycm9ycy1yZW5kZXJlci50c3giLCIvL3RzL21lc3NhZ2UvZm9ybWF0LWhvdXIudHN4IiwiLy90cy9tZXNzYWdlL2luZGV4LnRzeCIsIi8vdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9hY3Rpb24udHN4IiwiLy90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2luZGV4LnRzeCIsIi8vdHMvbWVzc2FnZS91c2UtbWVzc2FnZS50c3giLCIvL0lNZXNzYWdlTGlzdFByb3BzLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBRU8sTUFBTUcsZUFBZSxHQUFHQSxDQUFBLEtBQUs7WUFDbkMsT0FDQ0osTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDUCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixNQUFBLENBQUFNLElBQUk7Y0FBQ0QsU0FBUyxFQUFDLElBQUk7Y0FBQ0UsSUFBSSxFQUFFTixPQUFBLENBQUFPLEtBQUssQ0FBQyxZQUFZO1lBQUMsRUFBSSxFQUNsRFYsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQUUsR0FDaEJQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFLLEVBQVEsRUFDN0JQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFLLEVBQVEsRUFDN0JQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFLLEVBQVEsQ0FDeEIsQ0FDRDtVQUVSLENBQUM7VUFBQ0ksT0FBQSxDQUFBUCxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkYsSUFBQUosTUFBQSxHQUFBQyxPQUFBO1VBWU8sTUFBTVcsbUJBQW1CLEdBQUFELE9B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