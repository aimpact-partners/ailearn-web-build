System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.3/empty", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/toast", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/collapsible"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
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
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.16"], ["@aimpact/ailearn-app", "0.0.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.16/chat/messages"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat/shared/icons', dependency_3], ['pragmate-ui/empty', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/toast', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat-sdk/widgets/playable', dependency_8], ['@bgroup/media-manager/audio-player', dependency_9], ['@aimpact/chat/shared/hooks', dependency_10], ['pragmate-ui/collapsible', dependency_11]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./answering
      ***************************/
      ims.set('./answering', {
        hash: 3485726235,
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
              className: 'message answering'
            }, _react.default.createElement(_icons.Icon, {
              className: 'lg',
              icon: _icons2.ICONS['ai-profile']
            }), _react.default.createElement("div", {
              className: 'dot-animation'
            }, _react.default.createElement("span", {
              className: 'dot'
            }), _react.default.createElement("span", {
              className: 'dot'
            }), _react.default.createElement("span", {
              className: 'dot'
            })));
          };
          exports.SystemAnswering = SystemAnswering;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3809982986,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = Messages;
          var _react = require("react");
          var _message = require("./message");
          var _empty = require("pragmate-ui/empty");
          /*bundle */
          function Messages({
            store,
            messages,
            texts
          }) {
            const [totalMessages, setMessages] = _react.default.useState(messages.length ?? [].length);
            if (!messages.length) return _react.default.createElement(_empty.Empty, {
              className: "empty-section__container",
              icon: "info"
            }, _react.default.createElement("h5", null, texts.empty));
            const output = messages.map((message, i) => {
              const last = i === totalMessages - 1;
              return _react.default.createElement(_message.Message, {
                store: store,
                key: `message-${i}`,
                message: message,
                last: last,
                texts: texts
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./message/actions/index
      ***************************************/

      ims.set('./message/actions/index', {
        hash: 3317605633,
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
          function MessageActions({
            store,
            message,
            text,
            messageTokens,
            play = true
          }) {
            const {
              player
            } = store;
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
              store.currentMessage = message;
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
            const disabled = {
              disabled: true
            };
            const apply = store.currentMessage?.id === message?.id && processing;
            const icon = apply || action === 'play' ? 'stop' : 'play';
            const onClick = apply || action === 'play' ? onPause : onPlay;
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "audio__actions"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: copyMessage,
              icon: "copy"
            }), play && _react.default.createElement(_icons.IconButton, {
              onClick: onClick,
              "data-listen": "api",
              icon: icon
            })), messageTokens && _react.default.createElement("div", {
              className: "tokens overline"
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
        hash: 631355806,
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
          function MessageText({
            store,
            texts,
            message,
            playable,
            autoplay = false
          }) {
            const text = message?.content ?? '';
            const ref = _react.default.useRef(null);
            const {
              player
            } = store;
            const removeHighlight = () => ref.current.querySelectorAll('.highlight').forEach(element => element.classList.remove('highlight'));
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const onClickWord = event => store.currentMessage = message;
            const canBePlayed = message && message.role !== 'user' && autoplay;
            const autoplayValue = message.id === store.currentMessage?.id && canBePlayed;
            return _react.default.createElement("div", {
              className: "message-text__container",
              ref: ref
            }, text && _react.default.createElement(_playable.Playable, {
              content: text,
              toolTexts: texts.tools,
              playable: playable,
              id: message.id,
              onClickWord: onClickWord,
              player: player,
              autoplay: autoplayValue && canBePlayed
            }), message.audio && _react.default.createElement(_audioPlayer.AudioPlayer, {
              src: message.audio,
              convert: true
            }));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./message/context
      *********************************/

      ims.set('./message/context', {
        hash: 4149788362,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatMessageContext = exports.ChatMessageContext = void 0;
          var _react = require("react");
          const ChatMessageContext = exports.ChatMessageContext = _react.default.createContext({});
          const useChatMessageContext = () => _react.default.useContext(ChatMessageContext);
          exports.useChatMessageContext = useChatMessageContext;
        }
      });

      /*******************************
      INTERNAL MODULE: ./message/index
      *******************************/

      ims.set('./message/index', {
        hash: 3096191096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _react = require("react");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _text = require("./components/text");
          var _actions = require("./actions");
          var _profileIcon = require("./components/profile-icon");
          var _systemActions = require("./system-actions");
          function MessageComponent({
            store,
            message,
            texts
          }) {
            const [content, setContent] = _react.default.useState(message?.content ?? '');
            const cls = `message ${message.role}`;
            const messageTokens = message.role === 'assistant' ? message.usage?.totalTokens : null;
            const ACTIONS = ['transcription', 'fetching-tool-data', 'kb-processed-response', 'function', 'kb-response'];
            const [blocks, playableContent, actions] = (0, _playable.parseText)(message.id, message.content, ACTIONS);
            return _react.default.createElement("div", {
              className: cls,
              "data-id": message.id
            }, _react.default.createElement("section", {
              className: "picture__container"
            }, _react.default.createElement(_profileIcon.ProfileIcon, {
              role: message.role
            })), _react.default.createElement("section", {
              className: "message__container"
            }, _react.default.createElement(_systemActions.SystemActions, {
              texts: texts,
              actions: actions,
              message: message
            }), _react.default.createElement(_text.MessageText, {
              store: store,
              texts: texts,
              playable: true,
              message: message
            })), _react.default.createElement("section", {
              className: "message__actions"
            }, _react.default.createElement(_actions.MessageActions, {
              store: store,
              play: !message.audio,
              message: message,
              text: playableContent,
              messageTokens: messageTokens
            })));
          }
          const Message = exports.Message = _react.default.memo(MessageComponent);
        }
      });

      /***********************************************
      INTERNAL MODULE: ./message/system-actions/action
      ***********************************************/

      ims.set('./message/system-actions/action', {
        hash: 2639479614,
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
            },
            className
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
        hash: 1979651567,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemActions = SystemActions;
          var _react = require("react");
          var _action = require("./action");
          var _collapsible = require("pragmate-ui/collapsible");
          function SystemActions({
            actions,
            texts,
            message
          }) {
            if (!actions?.length) return null;
            const last = actions[actions.length - 1];
            return _react.default.createElement("section", {
              className: "message-actions__container"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("section", {
              className: "actions__log"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJfbWVzc2FnZSIsIl9lbXB0eSIsIk1lc3NhZ2VzIiwic3RvcmUiLCJtZXNzYWdlcyIsInRleHRzIiwidG90YWxNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJsZW5ndGgiLCJFbXB0eSIsImVtcHR5Iiwib3V0cHV0IiwibWFwIiwibWVzc2FnZSIsImkiLCJsYXN0IiwiTWVzc2FnZSIsImtleSIsIkZyYWdtZW50IiwiX2hvb2tzIiwiX3RvYXN0IiwiTWVzc2FnZUFjdGlvbnMiLCJ0ZXh0IiwibWVzc2FnZVRva2VucyIsInBsYXkiLCJwbGF5ZXIiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInVzZUJpbmRlciIsInNwZWFraW5nIiwib25DaGFuZ2UiLCJvblBsYXkiLCJsaXN0ZW4iLCJjdXJyZW50TWVzc2FnZSIsInBvc2l0aW9uVG9DdXQiLCJ0ZXh0SWQiLCJpZCIsIm9uUGF1c2UiLCJzdG9wIiwiY29weU1lc3NhZ2UiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiZGlzYWJsZWQiLCJhcHBseSIsIm9uQ2xpY2siLCJJY29uQnV0dG9uIiwiX3Nlc3Npb24iLCJQcm9maWxlSWNvbiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJhbHQiLCJzcmMiLCJvbkVycm9yIiwiX3BsYXlhYmxlIiwiX2F1ZGlvUGxheWVyIiwiTWVzc2FnZVRleHQiLCJwbGF5YWJsZSIsImF1dG9wbGF5IiwiY29udGVudCIsInJlZiIsInVzZVJlZiIsInJlbW92ZUhpZ2hsaWdodCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJvbkNsaWNrV29yZCIsImV2ZW50IiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiUGxheWFibGUiLCJ0b29sVGV4dHMiLCJ0b29scyIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJjb252ZXJ0IiwiQ2hhdE1lc3NhZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdGV4dCIsIl9hY3Rpb25zIiwiX3Byb2ZpbGVJY29uIiwiX3N5c3RlbUFjdGlvbnMiLCJNZXNzYWdlQ29tcG9uZW50Iiwic2V0Q29udGVudCIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwiYmxvY2tzIiwicGxheWFibGVDb250ZW50IiwiYWN0aW9ucyIsInBhcnNlVGV4dCIsIlN5c3RlbUFjdGlvbnMiLCJtZW1vIiwiX2NvbGxhcHNpYmxlIiwiQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJtYXJrIiwidXNlTWFya2VkIiwic3lzdGVtQWN0aW9ucyIsImFjdGlvbnNUZXh0cyIsIkNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdHRycyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwibWF0Y2hlcyIsIml0ZW0iLCJwYXJhZ3JhcGgiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlc3BvbnNlIiwidHJhbnNjcmlwdGlvbiIsIm5hbWUiLCJKU09OIiwicGFyc2UiLCJwYXJhbXMiLCJmdW5jdGlvbnMiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX2FjdGlvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50Il0sInNvdXJjZXMiOlsiL2Fuc3dlcmluZy50c3giLCIvaW5kZXgudHN4IiwiL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiL21lc3NhZ2UvY29udGV4dC50cyIsIi9tZXNzYWdlL2luZGV4LnRzeCIsIi9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFTyxNQUFNRyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDSixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNKLE1BQUEsQ0FBQU0sSUFBSTtjQUFDRCxTQUFTLEVBQUMsSUFBSTtjQUFDRSxJQUFJLEVBQUVOLE9BQUEsQ0FBQU8sS0FBSyxDQUFDLFlBQVk7WUFBQyxFQUFJLEVBQ2xEVixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxFQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxFQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lB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