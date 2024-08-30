System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/icons", "@aimpact/chat-sdk@1.1.0/components/icons", "pragmate-ui@1.0.0-beta.2/empty", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/toast", "@aimpact/chat-sdk@1.1.0/audio-player", "wavesurfer.js@7.8.4", "@aimpact/chat-sdk@1.1.0/session", "pragmate-ui@1.0.0-beta.2/image", "@aimpact/chat-sdk@1.1.0/widgets/playable", "@aimpact/chat-sdk@1.1.0/chat/messages/item", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "pragmate-ui@1.0.0-beta.2/collapsible", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_2 = _pragmateUi100Beta2Icons;
    }, function (_aimpactChatSdk110ComponentsIcons) {
      dependency_3 = _aimpactChatSdk110ComponentsIcons;
    }, function (_pragmateUi100Beta2Empty) {
      dependency_4 = _pragmateUi100Beta2Empty;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_6 = _pragmateUi100Beta2Toast;
    }, function (_aimpactChatSdk110AudioPlayer) {
      dependency_7 = _aimpactChatSdk110AudioPlayer;
    }, function (_wavesurferJs) {
      dependency_8 = _wavesurferJs;
    }, function (_aimpactChatSdk110Session) {
      dependency_9 = _aimpactChatSdk110Session;
    }, function (_pragmateUi100Beta2Image) {
      dependency_10 = _pragmateUi100Beta2Image;
    }, function (_aimpactChatSdk110WidgetsPlayable) {
      dependency_11 = _aimpactChatSdk110WidgetsPlayable;
    }, function (_aimpactChatSdk110ChatMessagesItem) {
      dependency_12 = _aimpactChatSdk110ChatMessagesItem;
    }, function (_aimpactChatSdk110WidgetsMarkdown) {
      dependency_13 = _aimpactChatSdk110WidgetsMarkdown;
    }, function (_pragmateUi100Beta2Collapsible) {
      dependency_14 = _pragmateUi100Beta2Collapsible;
    }, function (_beyondJsKernel019Styles) {
      dependency_15 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.1"], ["highlight.js", "11.10.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-texmath", "1.0.0"], ["mathjax-full", "3.2.2"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.1.0/messages"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat-sdk/components/icons', dependency_3], ['pragmate-ui/empty', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/toast', dependency_6], ['@aimpact/chat-sdk/audio-player', dependency_7], ['wavesurfer.js', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/chat-sdk/widgets/playable', dependency_11], ['@aimpact/chat-sdk/chat/messages/item', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['pragmate-ui/collapsible', dependency_14], ['@beyond-js/kernel/styles', dependency_15]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.1.0/messages');
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
        hash: 3041093355,
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
        hash: 2609015671,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _session = require("@aimpact/chat-sdk/session");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          function ProfileIcon({
            role
          }) {
            const [loadError, setLoadError] = (0, _react.useState)(false);
            const {
              systemIcon
            } = (0, _context.useChatMessagesContext)();
            // the local storage is used to store the user's default profile icon while is defined a better way to handle this.
            const icon = role === 'user' ? 'user' : globalThis.localStorage.getItem('chat.app.user.default.profile');
            const userProps = _session.sessionWrapper.user.getProperties();
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
        hash: 542713724,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 351283860,
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
            return _react.default.createElement("div", {
              className: cls,
              "data-id": message.id
            }, _react.default.createElement(_profileIcon.ProfileIcon, {
              role: message.role
            }), _react.default.createElement("section", {
              className: "message__content"
            }, _react.default.createElement(_systemActions.SystemActions, {
              actions: actions,
              message: message
            }), _react.default.createElement(_item.Message, {
              message: message,
              fetching: fetching
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
        hash: 1180166203,
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
            const mark = (0, _markdown.useMarked)();
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
                className: 'detail__content'
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
        hash: 2581913566,
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
            actions,
            message
          }) {
            if (!actions?.length) return null;
            const {
              texts
            } = (0, _context.useChatMessagesContext)();
            const last = actions[actions.length - 1];
            return _react.default.createElement("section", {
              className: 'message-actions__container'
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_action.Action, {
              data: last,
              last: true,
              texts: texts
            }), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("section", {
              className: 'actions__log'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwiY2hhdCIsInBsYXllciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50Iiwic3lzdGVtSWNvbiIsImN1cnJlbnRNZXNzYWdlIiwic2V0Q3VycmVudE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRvdGFsTWVzc2FnZXMiLCJsZW5ndGgiLCJFbXB0eSIsInRleHQiLCJlbXB0eSIsIm91dHB1dCIsIm1hcCIsIm1lc3NhZ2UiLCJpIiwiTWVzc2FnZUl0ZW1Db250YWluZXIiLCJrZXkiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiX2hvb2tzIiwiX3RvYXN0IiwiTWVzc2FnZUFjdGlvbnMiLCJtZXNzYWdlVG9rZW5zIiwicGxheSIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwidXNlQmluZGVyIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicG9zaXRpb25Ub0N1dCIsInRleHRJZCIsImlkIiwicGFyc2VkVGV4dCIsInJlcGxhY2VBbGwiLCJ0cmltIiwib25QYXVzZSIsImxpc3RlbiIsInN0b3AiLCJjb3B5TWVzc2FnZSIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJhcHBseSIsIm9uQ2xpY2siLCJJY29uQnV0dG9uIiwiUGxheWVyIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYXVkaW8iLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwidHlwZSIsIl9zZXNzaW9uIiwiX2ltYWdlIiwiUHJvZmlsZUljb24iLCJyb2xlIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsIkltYWdlIiwiYWx0Iiwib25FcnJvciIsIl9hdWRpb1BsYXllciIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJmZXRjaGluZyIsImF1dG9wbGF5IiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2V0VGV4dCIsImNvbnRlbnQiLCJvbkNsaWNrV29yZCIsImNhbkJlUGxheWVkIiwiYXV0b3BsYXlWYWx1ZSIsIl9wbGF5YWJsZSIsIl9hY3Rpb25zIiwiX3Byb2ZpbGVJY29uIiwiX3N5c3RlbUFjdGlvbnMiLCJfdXNlTWVzc2FnZSIsIl9pdGVtIiwidXNlTWVzc2FnZSIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwicGxheWFibGVDb250ZW50IiwiYWN0aW9ucyIsInBhcnNlVGV4dCIsIlN5c3RlbUFjdGlvbnMiLCJNZXNzYWdlIiwiX21hcmtkb3duIiwiX2NvbGxhcHNpYmxlIiwiQWN0aW9uIiwibGFzdCIsImRhdGEiLCJtYXJrIiwidXNlTWFya2VkIiwic3lzdGVtQWN0aW9ucyIsImFjdGlvbnNUZXh0cyIsIkNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdHRycyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiRnJhZ21lbnQiLCJtYXRjaGVzIiwiaXRlbSIsInBhcmFncmFwaCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVzcG9uc2UiLCJ0cmFuc2NyaXB0aW9uIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfYWN0aW9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJzZXRGZXRjaGluZyIsInNldENvbnRlbnQiLCJvblVwZGF0ZSIsIm9uRW5kIiwib24iLCJvZmYiXSwic291cmNlcyI6WyIvdHMvYW5zd2VyaW5nLnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi90cy9tZXNzYWdlL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS91c2UtbWVzc2FnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBRU8sTUFBTUcsZUFBZSxHQUFHQSxDQUFB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QUksRUFBRW5HO1lBQU0sRUFDdEQsQ0FBQyxDQUNPLENBQ1UsQ0FDQyxDQUNkO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBLElBQUEvQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBaUIsUUFBQSxHQUFBakIsT0FBQTtVQUVNLFNBQVVtSSxVQUFVQSxDQUFDaEcsT0FBTztZQUNqQyxNQUFNLENBQUM2RSxRQUFRLEVBQUU4RCxXQUFXLENBQUMsR0FBRy9LLE1BQUEsQ0FBQUssT0FBSyxDQUFDdUIsUUFBUSxDQUFVLEtBQUssQ0FBQztZQUM5RCxNQUFNLENBQUM4RixPQUFPLEVBQUVzRCxVQUFVLENBQUMsR0FBR2hMLE1BQUEsQ0FBQUssT0FBSyxDQUFDdUIsUUFBUSxDQUFTUSxPQUFPLEVBQUVzRixPQUFPLElBQUksRUFBRSxDQUFDO1lBQzVFLE1BQU07Y0FBRXRHO1lBQUksQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQUosc0JBQXNCLEdBQUU7WUFDekNkLE1BQUEsQ0FBQUssT0FBSyxDQUFDOEUsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTThGLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2dCQUNyQkYsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFFakJDLFVBQVUsQ0FBQzVJLE9BQU8sQ0FBQ3NGLE9BQU8sQ0FBQztjQUM1QixDQUFDO2NBQ0QsTUFBTXdELEtBQUssR0FBR0EsQ0FBQSxLQUFLO2dCQUNsQkYsVUFBVSxDQUFDNUksT0FBTyxDQUFDc0YsT0FBTyxDQUFDO2dCQUMzQnFELFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbkIsQ0FBQztjQUNEM0osSUFBSSxDQUFDK0osRUFBRSxDQUFDLFdBQVcvSSxPQUFPLENBQUN1QixFQUFFLFVBQVUsRUFBRXNILFFBQVEsQ0FBQztjQUNsRDdKLElBQUksQ0FBQytKLEVBQUUsQ0FBQyxXQUFXL0ksT0FBTyxDQUFDdUIsRUFBRSxRQUFRLEVBQUV1SCxLQUFLLENBQUM7Y0FDN0MsT0FBTyxNQUFLO2dCQUNYOUosSUFBSSxDQUFDZ0ssR0FBRyxDQUFDLFdBQVdoSixPQUFPLENBQUN1QixFQUFFLFVBQVUsRUFBRXNILFFBQVEsQ0FBQztnQkFDbkQ3SixJQUFJLENBQUNnSyxHQUFHLENBQUMsV0FBV2hKLE9BQU8sQ0FBQ3VCLEVBQUUsUUFBUSxFQUFFdUgsS0FBSyxDQUFDO2NBQy9DLENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FBTztjQUFFakUsUUFBUTtjQUFFOEQsV0FBVztjQUFFckQsT0FBTztjQUFFc0Q7WUFBVSxDQUFFO1VBQ3REIiwiaWdub3JlTGlzdCI6W119