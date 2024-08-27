System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/icons", "@aimpact/chat@1.0.2/shared/icons", "pragmate-ui@1.0.0-beta.2/empty", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/toast", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/chat-sdk@1.0.1/widgets/playable", "@aimpact/media-manager@0.0.1-beta.1/audio-player", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/chat-sdk@1.0.1/widgets/markdown", "pragmate-ui@1.0.0-beta.2/collapsible", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_2 = _pragmateUi100Beta2Icons;
    }, function (_aimpactChat102SharedIcons) {
      dependency_3 = _aimpactChat102SharedIcons;
    }, function (_pragmateUi100Beta2Empty) {
      dependency_4 = _pragmateUi100Beta2Empty;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_6 = _pragmateUi100Beta2Toast;
    }, function (_aimpactChatSdk101Session) {
      dependency_7 = _aimpactChatSdk101Session;
    }, function (_aimpactChatSdk101WidgetsPlayable) {
      dependency_8 = _aimpactChatSdk101WidgetsPlayable;
    }, function (_aimpactMediaManager001Beta1AudioPlayer) {
      dependency_9 = _aimpactMediaManager001Beta1AudioPlayer;
    }, function (_pragmateUi100Beta2Components) {
      dependency_10 = _pragmateUi100Beta2Components;
    }, function (_aimpactChatSdk101WidgetsMarkdown) {
      dependency_11 = _aimpactChatSdk101WidgetsMarkdown;
    }, function (_pragmateUi100Beta2Collapsible) {
      dependency_12 = _pragmateUi100Beta2Collapsible;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/chat-api", null], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["pragmate-ui", "1.0.0-beta.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@firebase/auth", "1.7.5"], ["@firebase/component", "0.6.8"], ["@firebase/logger", "0.4.2"], ["@firebase/util", "1.9.7"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.19"], ["dayjs", "1.11.11"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.1"], ["highlight.js", "11.10.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.3"], ["marked-mangle", "1.1.8"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.2/messages",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat/shared/icons', dependency_3], ['pragmate-ui/empty', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/toast', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat-sdk/widgets/playable', dependency_8], ['@aimpact/media-manager/audio-player', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.2/messages.code');
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
        hash: 3945705521,
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
            const ref = _react.default.useRef(null);
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
              ref: ref,
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
        hash: 654220471,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _audioPlayer = require("@aimpact/media-manager/audio-player");
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
        hash: 2174524038,
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
              className: "message__content"
            }, _react.default.createElement(_systemActions.SystemActions, {
              actions: actions,
              message: message
            }), _react.default.createElement(_text.MessageText, {
              playable: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwiY2hhdCIsInBsYXllciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50IiwiY3VycmVudE1lc3NhZ2UiLCJzZXRDdXJyZW50TWVzc2FnZSIsInVzZVN0YXRlIiwidG90YWxNZXNzYWdlcyIsImxlbmd0aCIsIkVtcHR5IiwidGV4dCIsImVtcHR5IiwicmVmIiwidXNlUmVmIiwib3V0cHV0IiwibWFwIiwibWVzc2FnZSIsImkiLCJNZXNzYWdlIiwia2V5IiwidmFsdWUiLCJQcm92aWRlciIsIl9ob29rcyIsIl90b2FzdCIsIk1lc3NhZ2VBY3Rpb25zIiwibWVzc2FnZVRva2VucyIsInBsYXkiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInVzZUJpbmRlciIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInBvc2l0aW9uVG9DdXQiLCJ0ZXh0SWQiLCJpZCIsInBhcnNlZFRleHQiLCJyZXBsYWNlQWxsIiwidHJpbSIsIm9uUGF1c2UiLCJsaXN0ZW4iLCJzdG9wIiwiY29weU1lc3NhZ2UiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiYXBwbHkiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsIl9zZXNzaW9uIiwiUHJvZmlsZUljb24iLCJyb2xlIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJzcmMiLCJwaG90b1VSTCIsImFsdCIsIm9uRXJyb3IiLCJfcGxheWFibGUiLCJfYXVkaW9QbGF5ZXIiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwiZmV0Y2hpbmciLCJhdXRvcGxheSIsImNvbnRlbnQiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJvbkNsaWNrV29yZCIsImNhbkJlUGxheWVkIiwiYXV0b3BsYXlWYWx1ZSIsIlBsYXlhYmxlIiwidG9vbFRleHRzIiwidG9vbHMiLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwiY29udmVydCIsIl90ZXh0IiwiX2FjdGlvbnMiLCJfcHJvZmlsZUljb24iLCJfc3lzdGVtQWN0aW9ucyIsInNldENvbnRlbnQiLCJzZXRGZXRjaGluZyIsInVzZUVmZmVjdCIsIm9uVXBkYXRlIiwib25FbmQiLCJvbiIsIm9mZiIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwiYmxvY2tzIiwicGxheWFibGVDb250ZW50IiwiYWN0aW9ucyIsInBhcnNlVGV4dCIsIlN5c3RlbUFjdGlvbnMiLCJfbWFya2Rvd24iLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJsYXN0IiwiZGF0YSIsInR5cGUiLCJtYXJrIiwidXNlTWFya2VkIiwic3lzdGVtQWN0aW9ucyIsImFjdGlvbnNUZXh0cyIsIkNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdHRycyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiRnJhZ21lbnQiLCJtYXRjaGVzIiwiaXRlbSIsInBhcmFncmFwaCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVzcG9uc2UiLCJ0cmFuc2NyaXB0aW9uIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfYWN0aW9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiXSwic291cmNlcyI6WyIvdHMvYW5zd2VyaW5nLnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi90cy9tZXNzYWdlL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFTyxNQUFNRyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDSixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNKLE1BQUEsQ0FBQU0sSUFBSTtjQUFDRCxTQUFTLEVBQUMsSUFBSTtjQUFDRSxJQUFJLEVBQUVOLE9BQUEsQ0FBQU8sS0FBSyxDQUFDLFlBQVk7WUFBQyxFQUFJLEVBQ2xEVixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVB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