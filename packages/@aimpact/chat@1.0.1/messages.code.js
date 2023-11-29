System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.3/empty", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/toast", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/collapsible", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi003Icons) {
      dependency_2 = _pragmateUi003Icons;
    }, function (_aimpactChat101SharedIcons) {
      dependency_3 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi003Empty) {
      dependency_4 = _pragmateUi003Empty;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_5 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Toast) {
      dependency_6 = _pragmateUi003Toast;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_8 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_9 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactChat101SharedHooks) {
      dependency_10 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Collapsible) {
      dependency_11 = _pragmateUi003Collapsible;
    }, function (_beyondJsKernel019Styles) {
      dependency_12 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.14"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat/shared/icons', dependency_3], ['pragmate-ui/empty', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/toast', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat-sdk/widgets/playable', dependency_8], ['@bgroup/media-manager/audio-player', dependency_9], ['@aimpact/chat/shared/hooks', dependency_10], ['pragmate-ui/collapsible', dependency_11], ['@beyond-js/kernel/styles', dependency_12]]);
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
        hash: 117206143,
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
        hash: 1633745242,
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
              const last = i === totalMessages - 1;
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
        hash: 3114809019,
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
        hash: 1879993991,
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
              className: 'message-text__container',
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
        hash: 4166676619,
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
            const [finished, setFinished] = _react.default.useState(true);
            console.log('message', message, message.id);
            const {
              chat
            } = (0, _context.useChatMessagesContext)();
            _react.default.useEffect(() => {
              const onChange = () => {
                console.log('me actualizo', this.id, message.content);
                setFinished(false);
                setContent(message.content);
              };
              const onEnd = () => {
                console.log('me finalizo');
              };
              message.on('content.updated', onChange);
              message.on('response.finished', onEnd);
              chat.on(`message.${message.id}.updated`, () => {
                setContent(message.content);
              });
              return () => {
                message.off('content.updated', onChange);
                message.off('response.finished', onEnd);
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
          // export const Message = React.memo(MessageComponent);
        }
      });

      /***********************************************
      INTERNAL MODULE: ./message/system-actions/action
      ***********************************************/

      ims.set('./message/system-actions/action', {
        hash: 4254653589,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Action = Action;
          var _react = require("react");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _collapsible = require("pragmate-ui/collapsible");
          function Action({
            last = false,
            texts,
            data: {
              type,
              data
            }
          }) {
            const mark = (0, _hooks.useMarked)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwiY2hhdCIsInBsYXllciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50IiwiY3VycmVudE1lc3NhZ2UiLCJzZXRDdXJyZW50TWVzc2FnZSIsInVzZVN0YXRlIiwidG90YWxNZXNzYWdlcyIsImxlbmd0aCIsIkVtcHR5IiwidGV4dCIsImVtcHR5Iiwib3V0cHV0IiwibWFwIiwibWVzc2FnZSIsImkiLCJsYXN0IiwiTWVzc2FnZSIsImtleSIsInZhbHVlIiwiUHJvdmlkZXIiLCJfaG9va3MiLCJfdG9hc3QiLCJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJ1c2VCaW5kZXIiLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwicG9zaXRpb25Ub0N1dCIsInRleHRJZCIsImlkIiwib25QYXVzZSIsInN0b3AiLCJjb3B5TWVzc2FnZSIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJhcHBseSIsIm9uQ2xpY2siLCJJY29uQnV0dG9uIiwiX3Nlc3Npb24iLCJQcm9maWxlSWNvbiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwiRnJhZ21lbnQiLCJwaG90b1VSTCIsImFsdCIsInNyYyIsIm9uRXJyb3IiLCJfcGxheWFibGUiLCJfYXVkaW9QbGF5ZXIiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwiYXV0b3BsYXkiLCJjb250ZW50IiwicmVmIiwidXNlUmVmIiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib25DbGlja1dvcmQiLCJldmVudCIsImNhbkJlUGxheWVkIiwiYXV0b3BsYXlWYWx1ZSIsIlBsYXlhYmxlIiwidG9vbFRleHRzIiwidG9vbHMiLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwiY29udmVydCIsIl90ZXh0IiwiX2FjdGlvbnMiLCJfcHJvZmlsZUljb24iLCJfc3lzdGVtQWN0aW9ucyIsInNldENvbnRlbnQiLCJmaW5pc2hlZCIsInNldEZpbmlzaGVkIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm9uRW5kIiwib24iLCJvZmYiLCJjbHMiLCJ1c2FnZSIsInRvdGFsVG9rZW5zIiwiQUNUSU9OUyIsImJsb2NrcyIsInBsYXlhYmxlQ29udGVudCIsImFjdGlvbnMiLCJwYXJzZVRleHQiLCJTeXN0ZW1BY3Rpb25zIiwiX2NvbGxhcHNpYmxlIiwiQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJtYXJrIiwidXNlTWFya2VkIiwic3lzdGVtQWN0aW9ucyIsImFjdGlvbnNUZXh0cyIsIkNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdHRycyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwibWF0Y2hlcyIsIml0ZW0iLCJwYXJhZ3JhcGgiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlc3BvbnNlIiwidHJhbnNjcmlwdGlvbiIsIm5hbWUiLCJKU09OIiwicGFyc2UiLCJwYXJhbXMiLCJmdW5jdGlvbnMiLCJlIiwiZXJyb3IiLCJfYWN0aW9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiXSwic291cmNlcyI6WyIvdHMvYW5zd2VyaW5nLnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi90cy9tZXNzYWdlL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBRU8sTUFBTUcsZUFBZSxHQUFHQSxDQUFBLEtBQUs7WUFDbkMsT0FDQ0osTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDUCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixNQUFBLENBQUFNLElBQUk7Y0FBQ0QsU0FBUyxFQUFDLElBQUk7Y0FBQ0UsSUFBSSxFQUFFTixPQUFBLENBQUFPLEtBQUssQ0FBQyxZQUFZO1lBQUMsRUFBSSxFQUNsRFYsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQUUsR0FDaEJQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFLLEVBQVEsRUFDN0JQLE1BQUEsQ0FBQUssT0FBQSxDQUFB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