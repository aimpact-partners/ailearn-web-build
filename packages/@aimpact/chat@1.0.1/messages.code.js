System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.1.1/empty", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/toast", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.1.1/components", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.1.1/collapsible", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi011Icons) {
      dependency_2 = _pragmateUi011Icons;
    }, function (_aimpactChat101SharedIcons) {
      dependency_3 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi011Empty) {
      dependency_4 = _pragmateUi011Empty;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Toast) {
      dependency_6 = _pragmateUi011Toast;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_8 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_9 = _bgroupMediaManager100AudioPlayer;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_11 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi011Collapsible) {
      dependency_12 = _pragmateUi011Collapsible;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.3.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
        hash: 704942530,
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
            }, _react.default.createElement("div", {
              className: 'messages__container'
            }, output));
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
        hash: 789679548,
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
            // the local storage is used to store the user's default profile icon while is defined a better way to handle this.
            const icon = role === 'user' ? 'user' : globalThis.localStorage.getItem('chat.app.user.default.profile');
            const userProps = _session.sessionWrapper.user.getProperties();
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement("picture", null, userProps.photoURL && role === 'user' && !loadError ? _react.default.createElement("img", {
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
        hash: 422853557,
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
            const cls = `message__container ${message.role}`;
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
              className: 'message__content'
            }, _react.default.createElement(_systemActions.SystemActions, {
              actions: actions,
              message: message
            }), _react.default.createElement(_text.MessageText, {
              playable: true,
              message: message,
              fetching: fetching
            }), _react.default.createElement("section", {
              className: 'message__actions'
            }, _react.default.createElement(_actions.MessageActions, {
              play: !message.audio,
              message: message,
              text: playableContent,
              messageTokens: messageTokens
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwiY2hhdCIsInBsYXllciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50IiwiY3VycmVudE1lc3NhZ2UiLCJzZXRDdXJyZW50TWVzc2FnZSIsInVzZVN0YXRlIiwidG90YWxNZXNzYWdlcyIsImxlbmd0aCIsIkVtcHR5IiwidGV4dCIsImVtcHR5Iiwib3V0cHV0IiwibWFwIiwibWVzc2FnZSIsImkiLCJNZXNzYWdlIiwia2V5IiwidmFsdWUiLCJQcm92aWRlciIsIl9ob29rcyIsIl90b2FzdCIsIk1lc3NhZ2VBY3Rpb25zIiwibWVzc2FnZVRva2VucyIsInBsYXkiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInVzZUJpbmRlciIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJsaXN0ZW4iLCJwb3NpdGlvblRvQ3V0IiwidGV4dElkIiwiaWQiLCJwYXJzZWRUZXh0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJvblBhdXNlIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImFwcGx5Iiwib25DbGljayIsIkljb25CdXR0b24iLCJfc2Vzc2lvbiIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJhbHQiLCJzcmMiLCJvbkVycm9yIiwiX3BsYXlhYmxlIiwiX2F1ZGlvUGxheWVyIiwiTWVzc2FnZVRleHQiLCJwbGF5YWJsZSIsImZldGNoaW5nIiwiYXV0b3BsYXkiLCJjb250ZW50IiwicmVmIiwidXNlUmVmIiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib25DbGlja1dvcmQiLCJldmVudCIsImNhbkJlUGxheWVkIiwiYXV0b3BsYXlWYWx1ZSIsIlBsYXlhYmxlIiwidG9vbFRleHRzIiwidG9vbHMiLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwiY29udmVydCIsIl90ZXh0IiwiX2FjdGlvbnMiLCJfcHJvZmlsZUljb24iLCJfc3lzdGVtQWN0aW9ucyIsInNldENvbnRlbnQiLCJzZXRGZXRjaGluZyIsInVzZUVmZmVjdCIsIm9uVXBkYXRlIiwib25FbmQiLCJvbiIsIm9mZiIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwiYmxvY2tzIiwicGxheWFibGVDb250ZW50IiwiYWN0aW9ucyIsInBhcnNlVGV4dCIsIlN5c3RlbUFjdGlvbnMiLCJfbWFya2Rvd24iLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJsYXN0IiwiZGF0YSIsInR5cGUiLCJtYXJrIiwidXNlTWFya2VkIiwic3lzdGVtQWN0aW9ucyIsImFjdGlvbnNUZXh0cyIsIkNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdHRycyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiRnJhZ21lbnQiLCJtYXRjaGVzIiwiaXRlbSIsInBhcmFncmFwaCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVzcG9uc2UiLCJ0cmFuc2NyaXB0aW9uIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfYWN0aW9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiXSwic291cmNlcyI6WyIvdHMvYW5zd2VyaW5nLnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi90cy9tZXNzYWdlL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFTyxNQUFNRyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDSixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNKLE1BQUEsQ0FBQU0sSUFBSTtjQUFDRCxTQUFTLEVBQUMsSUFBSTtjQUFDRSxJQUFJLEVBQUVOLE9BQUEsQ0FBQU8sS0FBSyxDQUFDLFlBQVk7WUFBQyxFQUFJLEVBQ2xEVixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBRSxHQUNoQlAsTUFB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