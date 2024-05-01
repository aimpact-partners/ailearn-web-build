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
        hash: 1667957409,
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
              className: 'messages__list'
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
        hash: 2128465958,
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
            const src = role === 'user' ? userProps.photoURL : globalThis.localStorage.getItem('chat.app.user.default.profile');
            return _react.default.createElement("picture", {
              className: 'picture__container'
            }, userProps.photoURL && !loadError || role !== 'user' ? _react.default.createElement("img", {
              alt: 'user image profile',
              src: src,
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
        hash: 3018165614,
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
            }, _react.default.createElement(_profileIcon.ProfileIcon, {
              role: message.role
            }), _react.default.createElement("section", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwiY2hhdCIsInBsYXllciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50IiwiY3VycmVudE1lc3NhZ2UiLCJzZXRDdXJyZW50TWVzc2FnZSIsInVzZVN0YXRlIiwidG90YWxNZXNzYWdlcyIsImxlbmd0aCIsIkVtcHR5IiwidGV4dCIsImVtcHR5Iiwib3V0cHV0IiwibWFwIiwibWVzc2FnZSIsImkiLCJNZXNzYWdlIiwia2V5IiwidmFsdWUiLCJQcm92aWRlciIsIl9ob29rcyIsIl90b2FzdCIsIk1lc3NhZ2VBY3Rpb25zIiwibWVzc2FnZVRva2VucyIsInBsYXkiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInVzZUJpbmRlciIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJsaXN0ZW4iLCJwb3NpdGlvblRvQ3V0IiwidGV4dElkIiwiaWQiLCJwYXJzZWRUZXh0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJvblBhdXNlIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImFwcGx5Iiwib25DbGljayIsIkljb25CdXR0b24iLCJfc2Vzc2lvbiIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwic3JjIiwicGhvdG9VUkwiLCJhbHQiLCJvbkVycm9yIiwiX3BsYXlhYmxlIiwiX2F1ZGlvUGxheWVyIiwiTWVzc2FnZVRleHQiLCJwbGF5YWJsZSIsImZldGNoaW5nIiwiYXV0b3BsYXkiLCJjb250ZW50IiwicmVmIiwidXNlUmVmIiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib25DbGlja1dvcmQiLCJldmVudCIsImNhbkJlUGxheWVkIiwiYXV0b3BsYXlWYWx1ZSIsIlBsYXlhYmxlIiwidG9vbFRleHRzIiwidG9vbHMiLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwiY29udmVydCIsIl90ZXh0IiwiX2FjdGlvbnMiLCJfcHJvZmlsZUljb24iLCJfc3lzdGVtQWN0aW9ucyIsInNldENvbnRlbnQiLCJzZXRGZXRjaGluZyIsInVzZUVmZmVjdCIsIm9uVXBkYXRlIiwib25FbmQiLCJvbiIsIm9mZiIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwiYmxvY2tzIiwicGxheWFibGVDb250ZW50IiwiYWN0aW9ucyIsInBhcnNlVGV4dCIsIlN5c3RlbUFjdGlvbnMiLCJfbWFya2Rvd24iLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJsYXN0IiwiZGF0YSIsInR5cGUiLCJtYXJrIiwidXNlTWFya2VkIiwic3lzdGVtQWN0aW9ucyIsImFjdGlvbnNUZXh0cyIsIkNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdHRycyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiRnJhZ21lbnQiLCJtYXRjaGVzIiwiaXRlbSIsInBhcmFncmFwaCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVzcG9uc2UiLCJ0cmFuc2NyaXB0aW9uIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfYWN0aW9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiXSwic291cmNlcyI6WyIvdHMvYW5zd2VyaW5nLnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi90cy9tZXNzYWdlL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFTyxNQUFNRyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDSixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNKLE1BQUEsQ0FBQU0sSUFBSTtjQUFDRCxTQUFTLEVBQUMsSUFBSTtjQUFDRSxJQUFJLEVBQUVOLE9BQUEsQ0FBQU8sS0FBSyxDQUFDLFlBQVk7WUFBQyxFQUFJLEVBQ2xEVixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBRSxHQUNoQlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxFQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxFQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxDQUN4QixDQUNEO1VBRVIsQ0FBQztVQUFDSSxPQUFBLENBQUFQLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmRixJQUFBSixNQUFBLEdBQUFDLE9BQUE7VUFVTyxNQUFNVyxtQkFBbUIsR0FBQUQsT0FBQSxDQUFBQyxtQkFBQSxHQUFHWixNQUFBLENBQUFLLE9BQUssQ0FBQ1EsYUFBYSxDQUFDLEVBQTBCLENBQUM7VUFDM0UsTUFBTUMsc0JBQXNCLEdBQUdBLENBQUEsS0FBTWQsTUFBQSxDQUFBSyxPQUFLLENBQUNVLFVBQVUsQ0FBQ0gsbUJBQW1CLENBQUM7VUFBQ0QsT0FBQSxDQUFBRyxzQkFBQSxHQUFBQSxzQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYbEYsSUFBQWQsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQWUsUUFBQSxHQUFBZixPQUFBO1VBQ0EsSUFBQWdCLE1BQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBaUIsUUFBQSxHQUFBakIsT0FBQTtVQUNPO1VBQVcsU0FBVWtCLFFBQVFBLENBQUM7WUFBRUMsSUFBSTtZQUFFQyxNQUFNO1lBQUVDLFFBQVE7WUFBRUMsS0FBSztZQUFFQztVQUFPLENBQUU7WUFDOUUsTUFBTSxDQUFDQyxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUcxQixNQUFBLENBQUFLLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBQ0gsT0FBTyxDQUFDO1lBQ25FLENBQUM7WUFDRCxNQUFNSSxhQUFhLEdBQUdOLFFBQVEsQ0FBQ08sTUFBTTtZQUNyQyxJQUFJLENBQUNELGFBQWEsRUFBRSxPQUFPNUIsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBYSxLQUFLO2NBQUNDLElBQUksRUFBRVIsS0FBSyxDQUFDUztZQUFLLEVBQUk7WUFFdkQsTUFBTUMsTUFBTSxHQUFHWCxRQUFRLENBQUNZLEdBQUcsQ0FBQyxDQUFDQyxPQUFZLEVBQUVDLENBQVMsS0FBSTtjQUN2RCxPQUFPcEMsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1UsUUFBQSxDQUFBcUIsT0FBTztnQkFBQ0MsR0FBRyxFQUFFLFdBQVdGLENBQUMsRUFBRTtnQkFBRUQsT0FBTyxFQUFFQTtjQUFPLEVBQUk7WUFDMUQsQ0FBQyxDQUFDO1lBRUYsTUFBTUksS0FBSyxHQUFHO2NBQUVuQixJQUFJO2NBQUVDLE1BQU07Y0FBRUMsUUFBUTtjQUFFQyxLQUFLO2NBQUVFLGNBQWM7Y0FBRUM7WUFBaUIsQ0FBRTtZQUNsRixPQUNDMUIsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksUUFBQSxDQUFBTixtQkFBbUIsQ0FBQzRCLFFBQVE7Y0FBQ0QsS0FBSyxFQUFFQTtZQUFLLEdBQ3pDdkMsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWdCLEdBQUUwQixNQUFNLENBQU8sQ0FDaEI7VUFFakM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUFqQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBd0MsTUFBQSxHQUFBeEMsT0FBQTtVQUNBLElBQUF5QyxNQUFBLEdBQUF6QyxPQUFBO1VBQ0EsSUFBQWlCLFFBQUEsR0FBQWpCLE9BQUE7VUFDTSxTQUFVMEMsY0FBY0EsQ0FBQztZQUFFWixJQUFJO1lBQUVJLE9BQU87WUFBRVMsYUFBYTtZQUFFQyxJQUFJLEdBQUc7VUFBSSxDQUFFO1lBQzNFLE1BQU07Y0FBRXhCLE1BQU07Y0FBRUksY0FBYztjQUFFQztZQUFpQixDQUFFLEdBQUcsSUFBQVIsUUFBQSxDQUFBSixzQkFBc0IsR0FBRTtZQUU5RSxNQUFNLENBQUNnQyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHL0MsTUFBQSxDQUFBSyxPQUFLLENBQUNzQixRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2xELE1BQU0sQ0FBQ3FCLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdqRCxNQUFBLENBQUFLLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFekQsSUFBQWMsTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQzdCLE1BQU0sQ0FBQyxFQUFFLE1BQU00QixhQUFhLENBQUM1QixNQUFNLENBQUM4QixRQUFRLENBQUMsQ0FBQztZQUV6RCxNQUFNQyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQkgsYUFBYSxDQUFDLEtBQUssQ0FBQztjQUNwQkYsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNkLENBQUM7WUFDRCxJQUFBTixNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDN0IsTUFBTSxDQUFDLEVBQUUrQixRQUFRLEVBQUUsV0FBVyxDQUFDO1lBRTFDLE1BQU1DLE1BQU0sR0FBRyxNQUFBQSxDQUFPO2NBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQ25DUCxTQUFTLENBQUMsTUFBTSxDQUFDO2NBRWpCckIsaUJBQWlCLENBQUNTLE9BQU8sQ0FBQztjQUMxQmQsTUFBTSxDQUFDa0MsYUFBYSxHQUFHLENBQUM7Y0FDeEJsQyxNQUFNLENBQUNtQyxNQUFNLEdBQUdyQixPQUFPLENBQUNzQixFQUFFO2NBQzFCLE1BQU1DLFVBQVUsR0FBRzNCLElBQUksQ0FBQzRCLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUNDLElBQUksRUFBRTtjQUMzRCxNQUFNdkMsTUFBTSxDQUFDd0IsSUFBSSxDQUFDYSxVQUFVLEVBQUV2QixPQUFPLENBQUNzQixFQUFFLENBQUM7WUFDMUMsQ0FBQztZQUNELE1BQU1JLE9BQU8sR0FBRyxNQUFBQSxDQUFPO2NBQUVQO1lBQU0sQ0FBRSxLQUFJO2NBQ3BDLE1BQU1qQyxNQUFNLENBQUN5QyxJQUFJLEVBQUU7Y0FDbkJmLFNBQVMsQ0FBQyxNQUFNLENBQUM7Y0FDakJFLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDckIsQ0FBQztZQUVELE1BQU1jLFdBQVcsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDOUIsTUFBTUMsVUFBVSxFQUFFQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDcEMsSUFBSSxDQUFDO2NBQ3JEVyxNQUFBLENBQUEwQixLQUFLLENBQUNDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQztZQUM3QyxDQUFDO1lBRUQsTUFBTUMsS0FBSyxHQUFHN0MsY0FBYyxFQUFFZ0MsRUFBRSxLQUFLdEIsT0FBTyxFQUFFc0IsRUFBRSxJQUFJVCxVQUFVO1lBRTlELE1BQU12QyxJQUFJLEdBQUc2RCxLQUFLLElBQUl4QixNQUFNLEtBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNO1lBQ3pELE1BQU15QixPQUFPLEdBQUdELEtBQUssSUFBSXhCLE1BQU0sS0FBSyxNQUFNLEdBQUdlLE9BQU8sR0FBR1IsTUFBTTtZQUU3RCxPQUNDckQsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsY0FDQ04sTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWdCLEdBQzlCUCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixNQUFBLENBQUFzRSxVQUFVO2NBQUNELE9BQU8sRUFBRVIsV0FBVztjQUFFdEQsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUMvQ29DLElBQUksSUFBSTdDLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNKLE1BQUEsQ0FBQXNFLFVBQVU7Y0FBQ0QsT0FBTyxFQUFFQSxPQUFPO2NBQUEsZUFBYyxLQUFLO2NBQUM5RCxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNsRSxFQUNMbUMsYUFBYSxJQUFJNUMsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQUVxQyxhQUFhLEUsVUFBYyxDQUMxRTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBNUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFTSxTQUFVeUUsV0FBV0EsQ0FBQztZQUFFQztVQUFJLENBQUU7WUFDbkMsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHLElBQUE3RSxNQUFBLENBQUEyQixRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ2pEO1lBQ0EsTUFBTWxCLElBQUksR0FBR2tFLElBQUksS0FBSyxNQUFNLEdBQUcsTUFBTSxHQUFHWCxVQUFVLENBQUNjLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLCtCQUErQixDQUFDO1lBQ3hHLE1BQU1DLFNBQVMsR0FBR1AsUUFBQSxDQUFBUSxjQUFjLENBQUNDLElBQUksQ0FBQ0MsYUFBYSxFQUFFO1lBQ3JELE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNUCxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ2hELE1BQU1RLEdBQUcsR0FBR1YsSUFBSSxLQUFLLE1BQU0sR0FBR0ssU0FBUyxDQUFDTSxRQUFRLEdBQUd0QixVQUFVLENBQUNjLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLCtCQUErQixDQUFDO1lBQ25ILE9BQ0MvRSxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBb0IsR0FDcEN5RSxTQUFTLENBQUNNLFFBQVEsSUFBSSxDQUFDVixTQUFTLElBQUtELElBQUksS0FBSyxNQUFNLEdBQ3JEM0UsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS2lGLEdBQUcsRUFBQyxvQkFBb0I7Y0FBQ0YsR0FBRyxFQUFFQSxHQUFHO2NBQUVHLE9BQU8sRUFBRUo7WUFBZSxFQUFJLEdBRXBFcEYsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0osTUFBQSxDQUFBTSxJQUFJO2NBQUNELFNBQVMsRUFBQyxJQUFJO2NBQUNFLElBQUksRUFBRU4sT0FBQSxDQUFBTyxLQUFLLENBQUNELElBQUksQ0FBQyxJQUFJQTtZQUFJLEVBQzlDLENBQ1E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQVQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXdDLE1BQUEsR0FBQXhDLE9BQUE7VUFDQSxJQUFBd0YsU0FBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUF5RixZQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQWlCLFFBQUEsR0FBQWpCLE9BQUE7VUFHTSxTQUFVMEYsV0FBV0EsQ0FBQztZQUFFeEQsT0FBTztZQUFFeUQsUUFBUTtZQUFFQyxRQUFRO1lBQUVDLFFBQVEsR0FBRztVQUFLLENBQUU7WUFDNUUsTUFBTS9ELElBQUksR0FBR0ksT0FBTyxFQUFFNEQsT0FBTyxJQUFJLEVBQUU7WUFDbkMsTUFBTUMsR0FBRyxHQUFHaEcsTUFBQSxDQUFBSyxPQUFLLENBQUM0RixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU07Y0FBRTFFLEtBQUs7Y0FBRUYsTUFBTTtjQUFFSSxjQUFjO2NBQUVDO1lBQWlCLENBQUUsR0FBRyxJQUFBUixRQUFBLENBQUFKLHNCQUFzQixHQUFFO1lBQ3JGLE1BQU1vRixlQUFlLEdBQUdBLENBQUEsS0FBSztjQUM1QkYsR0FBRyxDQUFDeEUsT0FBTyxDQUFDMkUsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTyxJQUFJQSxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JHLENBQUM7WUFFRCxJQUFBOUQsTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQzdCLE1BQU0sQ0FBQyxFQUFFNkUsZUFBZSxFQUFFLFdBQVcsQ0FBQztZQUNqRCxJQUFJLE9BQU9uRSxJQUFJLEtBQUssUUFBUSxFQUFFLE9BQU8sSUFBSTtZQUV6QyxNQUFNeUUsV0FBVyxHQUFHQyxLQUFLLElBQUkvRSxpQkFBaUIsQ0FBQ1MsT0FBTyxDQUFDO1lBQ3ZELE1BQU11RSxXQUFXLEdBQUd2RSxPQUFPLElBQUlBLE9BQU8sQ0FBQ3dDLElBQUksS0FBSyxNQUFNLElBQUltQixRQUFRO1lBQ2xFLE1BQU1hLGFBQWEsR0FBR3hFLE9BQU8sQ0FBQ3NCLEVBQUUsS0FBS2hDLGNBQWMsRUFBRWdDLEVBQUUsSUFBSWlELFdBQVc7WUFFdEUsT0FDQzFHLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQyw0QkFBNEI7Y0FBQ3lGLEdBQUcsRUFBRUE7WUFBRyxHQUNsRGpFLElBQUksSUFDSi9CLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNtRixTQUFBLENBQUFtQixRQUFRO2NBQ1JiLE9BQU8sRUFBRWhFLElBQUk7Y0FDYitELFFBQVEsRUFBRWEsYUFBYSxJQUFJRCxXQUFXO2NBQ3RDckYsTUFBTSxFQUFFQSxNQUFNO2NBQ2RvQyxFQUFFLEVBQUV0QixPQUFPLENBQUNzQixFQUFFO2NBQ2RtQyxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJZLFdBQVcsRUFBRUEsV0FBVztjQUN4QkssU0FBUyxFQUFFdEYsS0FBSyxDQUFDdUY7WUFBSyxFQUV2QixFQUVBM0UsT0FBTyxDQUFDNEUsS0FBSyxJQUFJL0csTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ29GLFlBQUEsQ0FBQXNCLFdBQVc7Y0FBQzNCLEdBQUcsRUFBRWxELE9BQU8sQ0FBQzRFLEtBQUs7Y0FBRUUsT0FBTztZQUFBLEVBQUcsQ0FDeEQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2Q0EsSUFBQWpILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF3RixTQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQWlILEtBQUEsR0FBQWpILE9BQUE7VUFDQSxJQUFBa0gsUUFBQSxHQUFBbEgsT0FBQTtVQUNBLElBQUFtSCxZQUFBLEdBQUFuSCxPQUFBO1VBQ0EsSUFBQW9ILGNBQUEsR0FBQXBILE9BQUE7VUFDQSxJQUFBaUIsUUFBQSxHQUFBakIsT0FBQTtVQUVNLFNBQVVvQyxPQUFPQSxDQUFDO1lBQUVGO1VBQU8sQ0FBRTtZQUNsQyxNQUFNLENBQUM0RCxPQUFPLEVBQUV1QixVQUFVLENBQUMsR0FBR3RILE1BQUEsQ0FBQUssT0FBSyxDQUFDc0IsUUFBUSxDQUFTUSxPQUFPLEVBQUU0RCxPQUFPLElBQUksRUFBRSxDQUFDO1lBRTVFLE1BQU0sQ0FBQ0YsUUFBUSxFQUFFMEIsV0FBVyxDQUFDLEdBQUd2SCxNQUFBLENBQUFLLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDOUQsTUFBTTtjQUFFUDtZQUFJLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFKLHNCQUFzQixHQUFFO1lBRXpDZCxNQUFBLENBQUFLLE9BQUssQ0FBQ21ILFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1DLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2dCQUNyQkYsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakJELFVBQVUsQ0FBQ25GLE9BQU8sQ0FBQzRELE9BQU8sQ0FBQztjQUM1QixDQUFDO2NBQ0QsTUFBTTJCLEtBQUssR0FBR0EsQ0FBQSxLQUFLO2dCQUNsQkosVUFBVSxDQUFDbkYsT0FBTyxDQUFDNEQsT0FBTyxDQUFDO2dCQUMzQndCLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbkIsQ0FBQztjQUNEbkcsSUFBSSxDQUFDdUcsRUFBRSxDQUFDLFdBQVd4RixPQUFPLENBQUNzQixFQUFFLFVBQVUsRUFBRWdFLFFBQVEsQ0FBQztjQUNsRHJHLElBQUksQ0FBQ3VHLEVBQUUsQ0FBQyxXQUFXeEYsT0FBTyxDQUFDc0IsRUFBRSxRQUFRLEVBQUVpRSxLQUFLLENBQUM7Y0FDN0MsT0FBTyxNQUFLO2dCQUNYdEcsSUFBSSxDQUFDd0csR0FBRyxDQUFDLFdBQVd6RixPQUFPLENBQUNzQixFQUFFLFVBQVUsRUFBRWdFLFFBQVEsQ0FBQztnQkFDbkRyRyxJQUFJLENBQUN3RyxHQUFHLENBQUMsV0FBV3pGLE9BQU8sQ0FBQ3NCLEVBQUUsUUFBUSxFQUFFaUUsS0FBSyxDQUFDO2NBQy9DLENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sTUFBTUcsR0FBRyxHQUFHLHNCQUFzQjFGLE9BQU8sQ0FBQ3dDLElBQUksRUFBRTtZQUVoRCxNQUFNL0IsYUFBYSxHQUFHVCxPQUFPLENBQUN3QyxJQUFJLEtBQUssV0FBVyxHQUFHeEMsT0FBTyxDQUFDMkYsS0FBSyxFQUFFQyxXQUFXLEdBQUcsSUFBSTtZQUV0RixNQUFNQyxPQUFPLEdBQUcsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQztZQUMzRyxNQUFNLENBQUNDLE1BQU0sRUFBRUMsZUFBZSxFQUFFQyxPQUFPLENBQUMsR0FBRyxJQUFBMUMsU0FBQSxDQUFBMkMsU0FBUyxFQUFDakcsT0FBTyxDQUFDc0IsRUFBRSxFQUFFdEIsT0FBTyxDQUFDNEQsT0FBTyxFQUFFaUMsT0FBTyxDQUFDO1lBRTFGLE9BQ0NoSSxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUVzSCxHQUFHO2NBQUEsV0FBVzFGLE9BQU8sQ0FBQ3NCO1lBQUUsR0FDdkN6RCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOEcsWUFBQSxDQUFBMUMsV0FBVztjQUFDQyxJQUFJLEVBQUV4QyxPQUFPLENBQUN3QztZQUFJLEVBQUksRUFFbkMzRSxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBa0IsR0FDcENQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUMrRyxjQUFBLENBQUFnQixhQUFhO2NBQUNGLE9BQU8sRUFBRUEsT0FBTztjQUFFaEcsT0FBTyxFQUFFQTtZQUFPLEVBQUksRUFDckRuQyxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEcsS0FBQSxDQUFBdkIsV0FBVztjQUFDQyxRQUFRLEVBQUUsSUFBSTtjQUFFekQsT0FBTyxFQUFFQSxPQUFPO2NBQUUwRCxRQUFRLEVBQUVBO1lBQVEsRUFBSSxFQUNyRTdGLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFrQixHQUNwQ1AsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQzZHLFFBQUEsQ0FBQXhFLGNBQWM7Y0FDZEUsSUFBSSxFQUFFLENBQUNWLE9BQU8sQ0FBQzRFLEtBQUs7Y0FDcEI1RSxPQUFPLEVBQUVBLE9BQU87Y0FDaEJKLElBQUksRUFBRW1HLGVBQWU7Y0FDckJ0RixhQUFhLEVBQUVBO1lBQWEsRUFDM0IsQ0FDTyxDQUNELENBQ0w7VUFFUjtVQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFEQSxJQUFBNUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXFJLFNBQUEsR0FBQXJJLE9BQUE7VUFDQSxJQUFBc0ksWUFBQSxHQUFBdEksT0FBQTtVQW9CTSxTQUFVdUksTUFBTUEsQ0FBQztZQUFFQyxJQUFJLEdBQUcsS0FBSztZQUFFbEgsS0FBSztZQUFFbUgsSUFBSSxFQUFFO2NBQUVDLElBQUk7Y0FBRUQ7WUFBSTtVQUFFLENBQVU7WUFDM0UsTUFBTUUsSUFBSSxHQUFHLElBQUFOLFNBQUEsQ0FBQU8sU0FBUyxHQUFFO1lBRXhCLE1BQU07Y0FBRUMsYUFBYSxFQUFFQztZQUFZLENBQUUsR0FBR3hILEtBQUs7WUFDN0MsTUFBTXlILFNBQVMsR0FBR0EsQ0FBQztjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBaUQsS0FBSTtjQUN4RixNQUFNQyxLQUFLLEdBQUc7Z0JBQUU1SSxTQUFTLEVBQUUsa0JBQWtCb0ksSUFBSSxHQUFHRixJQUFJLEdBQUcsY0FBYyxHQUFHLEVBQUU7Y0FBRSxDQUFFO2NBQ2xGLE1BQU1PLFNBQVMsR0FBR1AsSUFBSSxHQUFHRixZQUFBLENBQUFhLGlCQUFpQixHQUFHcEosTUFBQSxDQUFBSyxPQUFLLENBQUNnSixRQUFRO2NBQzNELE9BQ0NySixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtnQkFBQSxHQUFTNkk7Y0FBSyxHQUNibkosTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQzBJLFNBQVMsUUFDVGhKLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLGlCQUNDTixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxhQUFLMkksS0FBSyxDQUFNLENBQ1IsRUFDVGpKLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2dCQUFTQyxTQUFTLEVBQUM7Y0FBaUIsR0FBRTJJLFFBQVEsQ0FBVyxDQUM5QyxDQUNQO1lBRVIsQ0FBQztZQUVELElBQUlQLElBQUksS0FBSyxvQkFBb0IsRUFBRTtjQUNsQyxPQUFPM0ksTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQzBJLFNBQVM7Z0JBQUNDLEtBQUssRUFBRUYsWUFBWSxDQUFDSixJQUFJO2NBQUMsRUFBSTs7WUFFaEQsSUFBSUEsSUFBSSxLQUFLLGFBQWEsRUFBRTtjQUMzQixNQUFNMUcsTUFBTSxHQUFHeUcsSUFBSSxDQUFDWSxPQUFPLENBQUNwSCxHQUFHLENBQUNxSCxJQUFJLElBQUl2SixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtnQkFBSWdDLEdBQUcsRUFBRWlILElBQUksQ0FBQzlGO2NBQUUsR0FBRzhGLElBQUksQ0FBQ0MsU0FBUyxDQUFNLENBQUM7Y0FDaEYsT0FDQ3hKLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUMwSSxTQUFTO2dCQUFDQyxLQUFLLEVBQUVGLFlBQVksQ0FBQ0osSUFBSTtjQUFDLEdBQ25DM0ksTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsYUFBSzJCLE1BQU0sQ0FBTSxDQUNOOztZQUdkLElBQUkwRyxJQUFJLEtBQUssdUJBQXVCLEVBQUU7Y0FDckMsT0FDQzNJLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUMwSSxTQUFTO2dCQUFDQyxLQUFLLEVBQUVGLFlBQVksQ0FBQ0osSUFBSTtjQUFDLEdBQ25DM0ksTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Z0JBQUttSix1QkFBdUIsRUFBRTtrQkFBRUMsTUFBTSxFQUFFZCxJQUFJLENBQUNGLElBQUksQ0FBQ2lCLFFBQVE7Z0JBQUM7Y0FBRSxFQUFJLENBQ3REOztZQUlkLElBQUloQixJQUFJLEtBQUssZUFBZSxFQUFFO2NBQzdCLE9BQ0MzSSxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEksU0FBUztnQkFBQ0MsS0FBSyxFQUFFRixZQUFZLENBQUNhO2NBQWEsR0FDM0M1SixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxZQUFJb0ksSUFBSSxDQUFDa0IsYUFBYSxDQUFLLENBQ2hCOztZQUdkLElBQUlqQixJQUFJLEtBQUssVUFBVSxJQUFJRCxJQUFJLENBQUNtQixJQUFJLEtBQUssSUFBSSxFQUFFO2NBQzlDLElBQUk7Z0JBQ0gsTUFBTTtrQkFBRTlIO2dCQUFJLENBQUUsR0FBRytILElBQUksQ0FBQ0MsS0FBSyxDQUFDckIsSUFBSSxDQUFDc0IsTUFBTSxDQUFDO2dCQUN4QyxPQUNDaEssTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQzBJLFNBQVM7a0JBQUNDLEtBQUssRUFBRUYsWUFBWSxDQUFDa0IsU0FBUyxDQUFDdkIsSUFBSSxDQUFDbUIsSUFBSTtnQkFBQyxHQUNsRDdKLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLFlBQUl5QixJQUFJLENBQUssQ0FDRjtlQUViLENBQUMsT0FBT21JLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7O1lBSWxCLE9BQU9sSyxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUUsa0JBQWtCb0ksSUFBSTtZQUFFLEdBQUdBLElBQUksQ0FBTztVQUM5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRkEsSUFBQTNJLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFvSyxPQUFBLEdBQUFwSyxPQUFBO1VBQ0EsSUFBQXNJLFlBQUEsR0FBQXRJLE9BQUE7VUFDQSxJQUFBaUIsUUFBQSxHQUFBakIsT0FBQTtVQUVNLFNBQVVvSSxhQUFhQSxDQUFDO1lBQUVGLE9BQU87WUFBRWhHO1VBQU8sQ0FBRTtZQUNqRCxJQUFJLENBQUNnRyxPQUFPLEVBQUV0RyxNQUFNLEVBQUUsT0FBTyxJQUFJO1lBRWpDLE1BQU07Y0FBRU47WUFBSyxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBSixzQkFBc0IsR0FBRTtZQUMxQyxNQUFNMkgsSUFBSSxHQUFHTixPQUFPLENBQUNBLE9BQU8sQ0FBQ3RHLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFFeEMsT0FDQzdCLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUE0QixHQUM5Q1AsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lJLFlBQUEsQ0FBQStCLG9CQUFvQixRQUNwQnRLLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUMrSixPQUFBLENBQUE3QixNQUFNO2NBQUNFLElBQUksRUFBRUQsSUFBSTtjQUFFQSxJQUFJO2NBQUNsSCxLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUN6Q3ZCLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNpSSxZQUFBLENBQUFnQyxrQkFBa0IsUUFDbEJ2SyxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBYyxHQUMvQjRILE9BQU8sQ0FBQ2pHLEdBQUcsQ0FBQyxDQUFDWSxNQUFNLEVBQUVWLENBQUMsS0FDdEJwQyxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0osT0FBQSxDQUFBN0IsTUFBTTtjQUFDakgsS0FBSyxFQUFFQSxLQUFLO2NBQUVlLEdBQUcsRUFBRSxVQUFVRixDQUFDLEVBQUU7Y0FBRXNHLElBQUksRUFBRTVGO1lBQU0sRUFDdEQsQ0FBQyxDQUNPLENBQ1UsQ0FDQyxDQUNkO1VBRVoiLCJpZ25vcmVMaXN0IjpbXX0=