System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.6/empty", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.0.6/toast", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.0.6/components", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/collapsible", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi006Icons) {
      dependency_2 = _pragmateUi006Icons;
    }, function (_aimpactChat101SharedIcons) {
      dependency_3 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi006Empty) {
      dependency_4 = _pragmateUi006Empty;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_5 = _beyondJsReact18Widgets111Hooks;
    }, function (_pragmateUi006Toast) {
      dependency_6 = _pragmateUi006Toast;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_8 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_9 = _bgroupMediaManager100AudioPlayer;
    }, function (_pragmateUi006Components) {
      dependency_10 = _pragmateUi006Components;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_11 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi006Collapsible) {
      dependency_12 = _pragmateUi006Collapsible;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.3.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.31"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/messages",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat/shared/icons', dependency_3], ['pragmate-ui/empty', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/toast', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat-sdk/widgets/playable', dependency_8], ['@bgroup/media-manager/audio-player', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/messages.code');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./answering
      ***************************/
      ims.set('./answering', {
        hash: 585936996,
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
        hash: 1383344350,
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
        hash: 3856369053,
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
            current
          }) {
            const [currentMessage, setCurrentMessage] = _react.default.useState(current);
            1;
            const totalMessages = messages.length;
            if (!totalMessages) return _react.default.createElement(_empty.Empty, {
              text: texts.empty
            });
            const output = messages.map((message, i) => {
              return _react.default.createElement(_message.Message, {
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
              setCurrentMessage
            };
            return _react.default.createElement(_context.ChatMessagesContext.Provider, {
              value: value
            }, output);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./message/actions/index
      ***************************************/

      ims.set('./message/actions/index', {
        hash: 268873978,
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
            const onPlay = async ({
              listen
            }) => {
              setAction('play');
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
      INTERNAL MODULE: ./message/components/profile-icon
      *************************************************/

      ims.set('./message/components/profile-icon', {
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

      /*****************************************
      INTERNAL MODULE: ./message/components/text
      *****************************************/

      ims.set('./message/components/text', {
        hash: 1813168353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _audioPlayer = require("@bgroup/media-manager/audio-player");
          var _context = require("../../context");
          function MessageText({
            message,
            playable,
            fetching,
            autoplay = false
          }) {
            const text = message?.content ?? '';
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
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const onClickWord = event => setCurrentMessage(message);
            const canBePlayed = message && message.role !== 'user' && autoplay;
            const autoplayValue = message.id === currentMessage?.id && canBePlayed;
            return _react.default.createElement("div", {
              className: 'message-text__container p2',
              ref: ref
            }, text && _react.default.createElement(_playable.Playable, {
              content: text,
              autoplay: autoplayValue && canBePlayed,
              player: player,
              id: message.id,
              playable: playable,
              onClickWord: onClickWord,
              toolTexts: texts.tools
            }), message.audio && _react.default.createElement(_audioPlayer.AudioPlayer, {
              src: message.audio,
              convert: true
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./message/index
      *******************************/

      ims.set('./message/index', {
        hash: 3032734717,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var _react = require("react");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _text = require("./components/text");
          var _actions = require("./actions");
          var _profileIcon = require("./components/profile-icon");
          var _systemActions = require("./system-actions");
          var _context = require("../context");
          function Message({
            message
          }) {
            const [content, setContent] = _react.default.useState(message?.content ?? '');
            const [fetching, setFetching] = _react.default.useState(false);
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
            const cls = `message ${message.role}`;
            const messageTokens = message.role === 'assistant' ? message.usage?.totalTokens : null;
            const ACTIONS = ['transcription', 'fetching-tool-data', 'kb-processed-response', 'function', 'kb-response'];
            const [blocks, playableContent, actions] = (0, _playable.parseText)(message.id, message.content, ACTIONS);
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
              actions: actions,
              message: message
            }), _react.default.createElement(_text.MessageText, {
              playable: true,
              message: message,
              fetching: fetching
            })), _react.default.createElement("section", {
              className: 'message__actions'
            }, _react.default.createElement(_actions.MessageActions, {
              play: !message.audio,
              message: message,
              text: playableContent,
              messageTokens: messageTokens
            })));
          }
          // export const Message = React.memo(MessageComponent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwiY2hhdCIsInBsYXllciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50IiwiY3VycmVudE1lc3NhZ2UiLCJzZXRDdXJyZW50TWVzc2FnZSIsInVzZVN0YXRlIiwidG90YWxNZXNzYWdlcyIsImxlbmd0aCIsIkVtcHR5IiwidGV4dCIsImVtcHR5Iiwib3V0cHV0IiwibWFwIiwibWVzc2FnZSIsImkiLCJNZXNzYWdlIiwia2V5IiwidmFsdWUiLCJQcm92aWRlciIsIl9ob29rcyIsIl90b2FzdCIsIk1lc3NhZ2VBY3Rpb25zIiwibWVzc2FnZVRva2VucyIsInBsYXkiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInVzZUJpbmRlciIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJsaXN0ZW4iLCJwb3NpdGlvblRvQ3V0IiwidGV4dElkIiwiaWQiLCJwYXJzZWRUZXh0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJvblBhdXNlIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImFwcGx5Iiwib25DbGljayIsIkljb25CdXR0b24iLCJfc2Vzc2lvbiIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJGcmFnbWVudCIsInBob3RvVVJMIiwiYWx0Iiwic3JjIiwib25FcnJvciIsIl9wbGF5YWJsZSIsIl9hdWRpb1BsYXllciIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJmZXRjaGluZyIsImF1dG9wbGF5IiwiY29udGVudCIsInJlZiIsInVzZVJlZiIsInJlbW92ZUhpZ2hsaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm9uQ2xpY2tXb3JkIiwiZXZlbnQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsInRvb2xUZXh0cyIsInRvb2xzIiwiYXVkaW8iLCJBdWRpb1BsYXllciIsImNvbnZlcnQiLCJfdGV4dCIsIl9hY3Rpb25zIiwiX3Byb2ZpbGVJY29uIiwiX3N5c3RlbUFjdGlvbnMiLCJzZXRDb250ZW50Iiwic2V0RmV0Y2hpbmciLCJ1c2VFZmZlY3QiLCJvblVwZGF0ZSIsIm9uRW5kIiwib24iLCJvZmYiLCJjbHMiLCJ1c2FnZSIsInRvdGFsVG9rZW5zIiwiQUNUSU9OUyIsImJsb2NrcyIsInBsYXlhYmxlQ29udGVudCIsImFjdGlvbnMiLCJwYXJzZVRleHQiLCJTeXN0ZW1BY3Rpb25zIiwiX21hcmtkb3duIiwiX2NvbGxhcHNpYmxlIiwiQWN0aW9uIiwibGFzdCIsImRhdGEiLCJ0eXBlIiwibWFyayIsInVzZU1hcmtlZCIsInN5c3RlbUFjdGlvbnMiLCJhY3Rpb25zVGV4dHMiLCJDb250YWluZXIiLCJ0aXRsZSIsImNoaWxkcmVuIiwiYXR0cnMiLCJDb2xsYXBzaWJsZUhlYWRlciIsIm1hdGNoZXMiLCJpdGVtIiwicGFyYWdyYXBoIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJyZXNwb25zZSIsInRyYW5zY3JpcHRpb24iLCJuYW1lIiwiSlNPTiIsInBhcnNlIiwicGFyYW1zIiwiZnVuY3Rpb25zIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9hY3Rpb24iLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCJdLCJzb3VyY2VzIjpbIi90cy9hbnN3ZXJpbmcudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiL3RzL21lc3NhZ2UvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvYWN0aW9uLnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQUVPLE1BQU1HLGVBQWUsR0FBR0EsQ0FBQSxLQUFLO1lBQ25DLE9BQ0NKLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFtQixHQUNqQ1AsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0osTUFBQSxDQUFBTSxJQUFJO2NBQUNELFNBQVMsRUFBQyxJQUFJO2NBQUNFLElBQUksRUFBRU4sT0FBQSxDQUFBTyxLQUFLLENBQUMsWUFBWTtZQUFDLEVBQUksRUFDbERWLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFFLEdBQ2hCUCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtj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