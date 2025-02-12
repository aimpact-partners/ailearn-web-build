System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/chat-sdk@1.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/empty", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/chat-sdk@1.4.1/audio-player", "wavesurfer.js@7.8.5", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/chat-sdk@1.4.1/widgets/playable", "@aimpact/chat-sdk@1.4.1/chat/messages/item", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/collapsible", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_2 = _pragmateUi100Beta7Icons;
    }, function (_aimpactChatSdk141ComponentsIcons) {
      dependency_3 = _aimpactChatSdk141ComponentsIcons;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_4 = _pragmateUi100Beta7Empty;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_6 = _pragmateUi100Beta7Toast;
    }, function (_aimpactChatSdk141AudioPlayer) {
      dependency_7 = _aimpactChatSdk141AudioPlayer;
    }, function (_wavesurferJs) {
      dependency_8 = _wavesurferJs;
    }, function (_pragmateUi100Beta7Image) {
      dependency_9 = _pragmateUi100Beta7Image;
    }, function (_aimpactChatSdk141WidgetsPlayable) {
      dependency_10 = _aimpactChatSdk141WidgetsPlayable;
    }, function (_aimpactChatSdk141ChatMessagesItem) {
      dependency_11 = _aimpactChatSdk141ChatMessagesItem;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_13 = _pragmateUi100Beta7Collapsible;
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.1/messages"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat-sdk/components/icons', dependency_3], ['pragmate-ui/empty', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/toast', dependency_6], ['@aimpact/chat-sdk/audio-player', dependency_7], ['wavesurfer.js', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/chat-sdk/widgets/playable', dependency_10], ['@aimpact/chat-sdk/chat/messages/item', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.4.1/messages');
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
        hash: 326684797,
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
        hash: 2436134050,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = Messages;
          var _react = require("react");
          var _message = require("./message");
          var _empty = require("pragmate-ui/empty");
          var _context = require("./context");
          /*bundle */
          function Messages({
            chat,
            player,
            messages,
            texts,
            current,
            systemIcon
          }) {
            const [currentMessage, setCurrentMessage] = _react.default.useState(current);
            1;
            const totalMessages = messages.length;
            if (!totalMessages) return _react.default.createElement(_empty.Empty, {
              text: texts.empty
            });
            const output = messages.map((message, i) => {
              return _react.default.createElement(_message.MessageItemContainer, {
                key: `message-${i}`,
                message: message
              });
            });
            const value = {
              chat,
              player,
              messages,
              texts,
              currentMessage,
              setCurrentMessage,
              systemIcon
            };
            return _react.default.createElement(_context.ChatMessagesContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "messages__list"
            }, output));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./message/actions/index
      ***************************************/

      ims.set('./message/actions/index', {
        hash: 61955387,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageActions = MessageActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _toast = require("pragmate-ui/toast");
          var _context = require("../../context");
          function MessageActions({
            text,
            message,
            messageTokens,
            play = true
          }) {
            const {
              player,
              currentMessage,
              setCurrentMessage
            } = (0, _context.useChatMessagesContext)();
            const [action, setAction] = _react.default.useState('stop');
            const [processing, setProcessing] = _react.default.useState(false);
            (0, _hooks.useBinder)([player], () => setProcessing(player.speaking));
            const onChange = () => {
              setProcessing(false);
              setAction('');
            };
            (0, _hooks.useBinder)([player], onChange, 'on.finish');
            const onPlay = async event => {
              event.stopPropagation();
              setCurrentMessage(message);
              player.positionToCut = 0;
              player.textId = message.id;
              const parsedText = text.replaceAll(/[-\\*_#]+/g, '').trim();
              await player.play(parsedText, message.id);
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
            const apply = currentMessage?.id === message?.id && processing;
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
        hash: 1956570049,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
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
            }) : _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: systemIcon,
              onError: handleLoadError
            }));
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

      /*******************************
      INTERNAL MODULE: ./message/index
      *******************************/

      ims.set('./message/index', {
        hash: 1722567549,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageItemContainer = MessageItemContainer;
          var _react = require("react");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _actions = require("./actions");
          var _profileIcon = require("./components/profile-icon");
          var _systemActions = require("./system-actions");
          var _useMessage = require("./use-message");
          var _item = require("@aimpact/chat-sdk/chat/messages/item");
          function MessageItemContainer({
            message
          }) {
            const {
              fetching
            } = (0, _useMessage.useMessage)(message);
            const cls = `message__container ${message.role}`;
            const messageTokens = message.role === 'assistant' ? message.usage?.totalTokens : null;
            const ACTIONS = ['transcription', 'fetching-tool-data', 'kb-processed-response', 'function', 'kb-response'];
            const [, playableContent, actions] = (0, _playable.parseText)(message.id, message.content, ACTIONS);
            console.log(0.1, message);
            return _react.default.createElement("div", {
              className: cls,
              "data-id": message.id
            }, _react.default.createElement(_profileIcon.ProfileIcon, {
              role: message.role
            }), _react.default.createElement("section", {
              className: "message__content"
            }, _react.default.createElement(_systemActions.SystemActions, {
              actions: actions
            }), _react.default.createElement(_item.Message, {
              message: message
            }), _react.default.createElement("section", {
              className: "message__actions"
            }, _react.default.createElement(_actions.MessageActions, {
              play: !message.audio,
              message: message,
              text: playableContent,
              messageTokens: messageTokens
            }))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./message/system-actions/action
      ***********************************************/

      ims.set('./message/system-actions/action', {
        hash: 3020040988,
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
                  __html: mark(data.response)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwiY2hhdCIsInBsYXllciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50Iiwic3lzdGVtSWNvbiIsImN1cnJlbnRNZXNzYWdlIiwic2V0Q3VycmVudE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRvdGFsTWVzc2FnZXMiLCJsZW5ndGgiLCJFbXB0eSIsInRleHQiLCJlbXB0eSIsIm91dHB1dCIsIm1hcCIsIm1lc3NhZ2UiLCJpIiwiTWVzc2FnZUl0ZW1Db250YWluZXIiLCJrZXkiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiX2hvb2tzIiwiX3RvYXN0IiwiTWVzc2FnZUFjdGlvbnMiLCJtZXNzYWdlVG9rZW5zIiwicGxheSIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwidXNlQmluZGVyIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicG9zaXRpb25Ub0N1dCIsInRleHRJZCIsImlkIiwicGFyc2VkVGV4dCIsInJlcGxhY2VBbGwiLCJ0cmltIiwib25QYXVzZSIsImxpc3RlbiIsInN0b3AiLCJjb3B5TWVzc2FnZSIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJhcHBseSIsIm9uQ2xpY2siLCJJY29uQnV0dG9uIiwiUGxheWVyIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYXVkaW8iLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwidHlwZSIsIl9pbWFnZSIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInVzZXIiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsIkltYWdlIiwiYWx0Iiwib25FcnJvciIsIl9hdWRpb1BsYXllciIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJmZXRjaGluZyIsImF1dG9wbGF5IiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2V0VGV4dCIsImNvbnRlbnQiLCJvbkNsaWNrV29yZCIsImNhbkJlUGxheWVkIiwiYXV0b3BsYXlWYWx1ZSIsIl9wbGF5YWJsZSIsIl9hY3Rpb25zIiwiX3Byb2ZpbGVJY29uIiwiX3N5c3RlbUFjdGlvbnMiLCJfdXNlTWVzc2FnZSIsIl9pdGVtIiwidXNlTWVzc2FnZSIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwicGxheWFibGVDb250ZW50IiwiYWN0aW9ucyIsInBhcnNlVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJTeXN0ZW1BY3Rpb25zIiwiTWVzc2FnZSIsIl9tYXJrZG93biIsIl9jb2xsYXBzaWJsZSIsIkFjdGlvbiIsImxhc3QiLCJkYXRhIiwibWFyayIsInVzZU1hcmtlZCIsInN5c3RlbUFjdGlvbnMiLCJhY3Rpb25zVGV4dHMiLCJDb250YWluZXIiLCJ0aXRsZSIsImNoaWxkcmVuIiwiYXR0cnMiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkZyYWdtZW50IiwibWF0Y2hlcyIsIml0ZW0iLCJwYXJhZ3JhcGgiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlc3BvbnNlIiwidHJhbnNjcmlwdGlvbiIsIm5hbWUiLCJKU09OIiwicGFyc2UiLCJwYXJhbXMiLCJmdW5jdGlvbnMiLCJlIiwiZXJyb3IiLCJfYWN0aW9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJzZXRGZXRjaGluZyIsInNldENvbnRlbnQiLCJvblVwZGF0ZSIsIm9uRW5kIiwib24iLCJvZmYiXSwic291cmNlcyI6WyIvdHMvYW5zd2VyaW5nLnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi90cy9tZXNzYWdlL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS91c2UtbWVzc2FnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQUVPLE1BQU1HLGVBQWUsR0FBR0EsQ0FBQSxLQUFLO1lBQ25DLE9BQ0NKLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFt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