System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.6/empty", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/toast", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.0.6/components", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/collapsible", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_5 = _beyondJsReact18Widgets104Hooks;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 2727725558,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwiY2hhdCIsInBsYXllciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50IiwiY3VycmVudE1lc3NhZ2UiLCJzZXRDdXJyZW50TWVzc2FnZSIsInVzZVN0YXRlIiwidG90YWxNZXNzYWdlcyIsImxlbmd0aCIsIkVtcHR5IiwidGV4dCIsImVtcHR5Iiwib3V0cHV0IiwibWFwIiwibWVzc2FnZSIsImkiLCJsYXN0IiwiTWVzc2FnZSIsImtleSIsInZhbHVlIiwiUHJvdmlkZXIiLCJfaG9va3MiLCJfdG9hc3QiLCJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJ1c2VCaW5kZXIiLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwicG9zaXRpb25Ub0N1dCIsInRleHRJZCIsImlkIiwicGFyc2VkVGV4dCIsInJlcGxhY2VBbGwiLCJ0cmltIiwib25QYXVzZSIsInN0b3AiLCJjb3B5TWVzc2FnZSIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJhcHBseSIsIm9uQ2xpY2siLCJJY29uQnV0dG9uIiwiX3Nlc3Npb24iLCJQcm9maWxlSWNvbiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwiRnJhZ21lbnQiLCJwaG90b1VSTCIsImFsdCIsInNyYyIsIm9uRXJyb3IiLCJfcGxheWFibGUiLCJfYXVkaW9QbGF5ZXIiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwiZmV0Y2hpbmciLCJhdXRvcGxheSIsImNvbnRlbnQiLCJyZWYiLCJ1c2VSZWYiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJvbkNsaWNrV29yZCIsImV2ZW50IiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiUGxheWFibGUiLCJ0b29sVGV4dHMiLCJ0b29scyIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJjb252ZXJ0IiwiX3RleHQiLCJfYWN0aW9ucyIsIl9wcm9maWxlSWNvbiIsIl9zeXN0ZW1BY3Rpb25zIiwic2V0Q29udGVudCIsImZpbmlzaGVkIiwic2V0RmluaXNoZWQiLCJzZXRGZXRjaGluZyIsInVzZUVmZmVjdCIsIm9uVXBkYXRlIiwib25FbmQiLCJvbiIsIm9mZiIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwiYmxvY2tzIiwicGxheWFibGVDb250ZW50IiwiYWN0aW9ucyIsInBhcnNlVGV4dCIsIlN5c3RlbUFjdGlvbnMiLCJfbWFya2Rvd24iLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJkYXRhIiwidHlwZSIsIm1hcmsiLCJ1c2VNYXJrZWQiLCJzeXN0ZW1BY3Rpb25zIiwiYWN0aW9uc1RleHRzIiwiQ29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsImF0dHJzIiwiQ29sbGFwc2libGVIZWFkZXIiLCJtYXRjaGVzIiwiaXRlbSIsInBhcmFncmFwaCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVzcG9uc2UiLCJ0cmFuc2NyaXB0aW9uIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfYWN0aW9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiXSwic291cmNlcyI6WyIvdHMvYW5zd2VyaW5nLnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL3RzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi90cy9tZXNzYWdlL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFTyxNQUFNRyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDSixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNKLE1BQUEsQ0FBQU0sSUFBSTtjQUFDRCxTQUFTLEVBQUMsSUFBSTtjQUFDRSxJQUFJLEVBQUVOLE9BQUEsQ0FBQU8sS0FBSyxDQUFDLFlBQVk7WUFBQyxFQUFJLEVBQ2xEVixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBRSxHQUNoQlAsTUFB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