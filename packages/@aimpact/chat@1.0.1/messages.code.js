System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.3/empty", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/toast", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.0.3/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/collapsible", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
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
    }, function (_pragmateUi003Components) {
      dependency_10 = _pragmateUi003Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Collapsible) {
      dependency_12 = _pragmateUi003Collapsible;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.18"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat/shared/icons', dependency_3], ['pragmate-ui/empty', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/toast', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat-sdk/widgets/playable', dependency_8], ['@bgroup/media-manager/audio-player', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
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
        hash: 1412336715,
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
          var _components = require("pragmate-ui/components");
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
            }), fetching && _react.default.createElement(_components.Spinner, {
              variant: 'primary',
              size: 'sm',
              active: true,
              className: 'spinner-text'
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
        hash: 2018743933,
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
              const onChange = () => {
                console.log('me actualizo', this.id, message.content);
                setFinished(false);
                setContent(message.content);
              };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwiY2hhdCIsInBsYXllciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50IiwiY3VycmVudE1lc3NhZ2UiLCJzZXRDdXJyZW50TWVzc2FnZSIsInVzZVN0YXRlIiwidG90YWxNZXNzYWdlcyIsImxlbmd0aCIsIkVtcHR5IiwidGV4dCIsImVtcHR5Iiwib3V0cHV0IiwibWFwIiwibWVzc2FnZSIsImkiLCJsYXN0IiwiTWVzc2FnZSIsImtleSIsInZhbHVlIiwiUHJvdmlkZXIiLCJfaG9va3MiLCJfdG9hc3QiLCJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJ1c2VCaW5kZXIiLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwicG9zaXRpb25Ub0N1dCIsInRleHRJZCIsImlkIiwib25QYXVzZSIsInN0b3AiLCJjb3B5TWVzc2FnZSIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJhcHBseSIsIm9uQ2xpY2siLCJJY29uQnV0dG9uIiwiX3Nlc3Npb24iLCJQcm9maWxlSWNvbiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwiRnJhZ21lbnQiLCJwaG90b1VSTCIsImFsdCIsInNyYyIsIm9uRXJyb3IiLCJfcGxheWFibGUiLCJfYXVkaW9QbGF5ZXIiLCJfY29tcG9uZW50cyIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJmZXRjaGluZyIsImF1dG9wbGF5IiwiY29udGVudCIsInJlZiIsInVzZVJlZiIsInJlbW92ZUhpZ2hsaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm9uQ2xpY2tXb3JkIiwiZXZlbnQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsInRvb2xUZXh0cyIsInRvb2xzIiwiU3Bpbm5lciIsInZhcmlhbnQiLCJzaXplIiwiYWN0aXZlIiwiYXVkaW8iLCJBdWRpb1BsYXllciIsImNvbnZlcnQiLCJfdGV4dCIsIl9hY3Rpb25zIiwiX3Byb2ZpbGVJY29uIiwiX3N5c3RlbUFjdGlvbnMiLCJzZXRDb250ZW50IiwiZmluaXNoZWQiLCJzZXRGaW5pc2hlZCIsInNldEZldGNoaW5nIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIm9uVXBkYXRlIiwib25FbmQiLCJvbiIsIm9mZiIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwiYmxvY2tzIiwicGxheWFibGVDb250ZW50IiwiYWN0aW9ucyIsInBhcnNlVGV4dCIsIlN5c3RlbUFjdGlvbnMiLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJkYXRhIiwidHlwZSIsIm1hcmsiLCJ1c2VNYXJrZWQiLCJzeXN0ZW1BY3Rpb25zIiwiYWN0aW9uc1RleHRzIiwiQ29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsImF0dHJzIiwiQ29sbGFwc2libGVIZWFkZXIiLCJtYXRjaGVzIiwiaXRlbSIsInBhcmFncmFwaCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVzcG9uc2UiLCJ0cmFuc2NyaXB0aW9uIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsImUiLCJlcnJvciIsIl9hY3Rpb24iLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCJdLCJzb3VyY2VzIjpbIi90cy9hbnN3ZXJpbmcudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiL3RzL21lc3NhZ2UvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvYWN0aW9uLnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQUVPLE1BQU1HLGVBQWUsR0FBR0EsQ0FBQSxLQUFLO1lBQ25DLE9BQ0NKLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFtQixHQUNqQ1AsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0osTUFBQSxDQUFBTSxJQUFJO2NBQUNELFNBQVMsRUFBQyxJQUFJO2NBQUNFLElBQUksRUFBRU4sT0FBQSxDQUFBTyxLQUFLLENBQUMsWUFBWTtZQUFDLEVBQUksRUFDbERWLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFF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