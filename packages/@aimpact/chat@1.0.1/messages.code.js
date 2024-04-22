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
        hash: 1599509428,
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
            const a = {
              field: 'status',
              type: 'select',
              actions: {
                onSelect: {
                  hide: ['conditionalField1', 'conditionalField2'],
                  show: ['conditionalField3'],
                  disable: ['conditionalField4'],
                  enable: ['conditionalField5'],
                  setOptions: {
                    dataSource: 'apiEndpoint',
                    params: {
                      key: 'value'
                    }
                  }
                }
              }
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwiY2hhdCIsInBsYXllciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50IiwiY3VycmVudE1lc3NhZ2UiLCJzZXRDdXJyZW50TWVzc2FnZSIsInVzZVN0YXRlIiwidG90YWxNZXNzYWdlcyIsImxlbmd0aCIsIkVtcHR5IiwidGV4dCIsImVtcHR5Iiwib3V0cHV0IiwibWFwIiwibWVzc2FnZSIsImkiLCJNZXNzYWdlIiwia2V5IiwidmFsdWUiLCJQcm92aWRlciIsIl9ob29rcyIsIl90b2FzdCIsIk1lc3NhZ2VBY3Rpb25zIiwibWVzc2FnZVRva2VucyIsInBsYXkiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInVzZUJpbmRlciIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJsaXN0ZW4iLCJwb3NpdGlvblRvQ3V0IiwidGV4dElkIiwiaWQiLCJwYXJzZWRUZXh0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJvblBhdXNlIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImFwcGx5Iiwib25DbGljayIsIkljb25CdXR0b24iLCJfc2Vzc2lvbiIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwiYSIsImZpZWxkIiwidHlwZSIsImFjdGlvbnMiLCJvblNlbGVjdCIsImhpZGUiLCJzaG93IiwiZGlzYWJsZSIsImVuYWJsZSIsInNldE9wdGlvbnMiLCJkYXRhU291cmNlIiwicGFyYW1zIiwiRnJhZ21lbnQiLCJwaG90b1VSTCIsImFsdCIsInNyYyIsIm9uRXJyb3IiLCJfcGxheWFibGUiLCJfYXVkaW9QbGF5ZXIiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwiZmV0Y2hpbmciLCJhdXRvcGxheSIsImNvbnRlbnQiLCJyZWYiLCJ1c2VSZWYiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJvbkNsaWNrV29yZCIsImV2ZW50IiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiUGxheWFibGUiLCJ0b29sVGV4dHMiLCJ0b29scyIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJjb252ZXJ0IiwiX3RleHQiLCJfYWN0aW9ucyIsIl9wcm9maWxlSWNvbiIsIl9zeXN0ZW1BY3Rpb25zIiwic2V0Q29udGVudCIsInNldEZldGNoaW5nIiwidXNlRWZmZWN0Iiwib25VcGRhdGUiLCJvbkVuZCIsIm9uIiwib2ZmIiwiY2xzIiwidXNhZ2UiLCJ0b3RhbFRva2VucyIsIkFDVElPTlMiLCJibG9ja3MiLCJwbGF5YWJsZUNvbnRlbnQiLCJwYXJzZVRleHQiLCJTeXN0ZW1BY3Rpb25zIiwiX21hcmtkb3duIiwiX2NvbGxhcHNpYmxlIiwiQWN0aW9uIiwibGFzdCIsImRhdGEiLCJtYXJrIiwidXNlTWFya2VkIiwic3lzdGVtQWN0aW9ucyIsImFjdGlvbnNUZXh0cyIsIkNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdHRycyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwibWF0Y2hlcyIsIml0ZW0iLCJwYXJhZ3JhcGgiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlc3BvbnNlIiwidHJhbnNjcmlwdGlvbiIsIm5hbWUiLCJKU09OIiwicGFyc2UiLCJmdW5jdGlvbnMiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX2FjdGlvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50Il0sInNvdXJjZXMiOlsiL3RzL2Fuc3dlcmluZy50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi90cy9tZXNzYWdlL2NvbXBvbmVudHMvdGV4dC50c3giLCIvdHMvbWVzc2FnZS9pbmRleC50c3giLCIvdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBRU8sTUFBTUcsZUFBZSxHQUFHQSxDQUFBLEtBQUs7WUFDbkMsT0FDQ0osTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDUCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixNQUFBLENBQUFNLElBQUk7Y0FBQ0QsU0FBUyxFQUFDLElBQUk7Y0FBQ0UsSUFBSSxFQUFFTixPQUFBLENBQUFPLEtBQUssQ0FB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