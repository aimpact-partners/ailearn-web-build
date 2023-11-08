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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/chat/messages"
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
        hash: 1358363430,
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
            console.log(20, texts);
            if (!messages.length) return _react.default.createElement(_empty.Empty, {
              text: texts.empty
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJfbWVzc2FnZSIsIl9lbXB0eSIsIk1lc3NhZ2VzIiwic3RvcmUiLCJtZXNzYWdlcyIsInRleHRzIiwidG90YWxNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiRW1wdHkiLCJ0ZXh0IiwiZW1wdHkiLCJvdXRwdXQiLCJtYXAiLCJtZXNzYWdlIiwiaSIsImxhc3QiLCJNZXNzYWdlIiwia2V5IiwiRnJhZ21lbnQiLCJfaG9va3MiLCJfdG9hc3QiLCJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwicGxheWVyIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJ1c2VCaW5kZXIiLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwiY3VycmVudE1lc3NhZ2UiLCJwb3NpdGlvblRvQ3V0IiwidGV4dElkIiwiaWQiLCJvblBhdXNlIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiYXBwbHkiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsIl9zZXNzaW9uIiwiUHJvZmlsZUljb24iLCJyb2xlIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiYWx0Iiwic3JjIiwib25FcnJvciIsIl9wbGF5YWJsZSIsIl9hdWRpb1BsYXllciIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJhdXRvcGxheSIsImNvbnRlbnQiLCJyZWYiLCJ1c2VSZWYiLCJyZW1vdmVIaWdobGlnaHQiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib25DbGlja1dvcmQiLCJldmVudCIsImNhbkJlUGxheWVkIiwiYXV0b3BsYXlWYWx1ZSIsIlBsYXlhYmxlIiwidG9vbFRleHRzIiwidG9vbHMiLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwiY29udmVydCIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RleHQiLCJfYWN0aW9ucyIsIl9wcm9maWxlSWNvbiIsIl9zeXN0ZW1BY3Rpb25zIiwiTWVzc2FnZUNvbXBvbmVudCIsInNldENvbnRlbnQiLCJjbHMiLCJ1c2FnZSIsInRvdGFsVG9rZW5zIiwiQUNUSU9OUyIsImJsb2NrcyIsInBsYXlhYmxlQ29udGVudCIsImFjdGlvbnMiLCJwYXJzZVRleHQiLCJTeXN0ZW1BY3Rpb25zIiwibWVtbyIsIl9jb2xsYXBzaWJsZSIsIkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibWFyayIsInVzZU1hcmtlZCIsInN5c3RlbUFjdGlvbnMiLCJhY3Rpb25zVGV4dHMiLCJDb250YWluZXIiLCJ0aXRsZSIsImNoaWxkcmVuIiwiYXR0cnMiLCJDb2xsYXBzaWJsZUhlYWRlciIsIm1hdGNoZXMiLCJpdGVtIiwicGFyYWdyYXBoIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJyZXNwb25zZSIsInRyYW5zY3JpcHRpb24iLCJuYW1lIiwiSlNPTiIsInBhcnNlIiwicGFyYW1zIiwiZnVuY3Rpb25zIiwiZSIsImVycm9yIiwiX2FjdGlvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50Il0sInNvdXJjZXMiOlsiL2Fuc3dlcmluZy50c3giLCIvaW5kZXgudHN4IiwiL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiL21lc3NhZ2UvY29udGV4dC50cyIsIi9tZXNzYWdlL2luZGV4LnRzeCIsIi9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFTyxNQUFNRyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDSixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNKLE1BQUEsQ0FBQU0sSUFBSTtjQUFDRCxTQUFTLEVBQUMsSUFBSTtjQUFDRSxJQUFJLEVBQUVOLE9BQUEsQ0FBQU8sS0FBSyxDQUFDLFlBQVk7WUFBQyxFQUFJLEVBQ2xEVixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxFQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxFQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxF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