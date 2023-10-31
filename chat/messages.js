System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@aimpact/chat@1.0.1/shared/icons", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/toast", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/collapsible"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_4 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Toast) {
      dependency_5 = _pragmateUi003Toast;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_7 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_8 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactChat101SharedHooks) {
      dependency_9 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Collapsible) {
      dependency_10 = _pragmateUi003Collapsible;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.10"], ["@aimpact/ailearn-app", "0.0.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.10/chat/messages"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat/shared/icons', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['pragmate-ui/toast', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/chat-sdk/widgets/playable', dependency_7], ['@bgroup/media-manager/audio-player', dependency_8], ['@aimpact/chat/shared/hooks', dependency_9], ['pragmate-ui/collapsible', dependency_10]]);
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
        hash: 3211986259,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = Messages;
          var _react = require("react");
          var _message = require("./message");
          /*bundle */
          function Messages({
            store,
            messages,
            texts
          }) {
            const [totalMessages, setMessages] = _react.default.useState(messages.length ?? [].length);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJfbWVzc2FnZSIsIk1lc3NhZ2VzIiwic3RvcmUiLCJtZXNzYWdlcyIsInRleHRzIiwidG90YWxNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJsZW5ndGgiLCJvdXRwdXQiLCJtYXAiLCJtZXNzYWdlIiwiaSIsImxhc3QiLCJNZXNzYWdlIiwia2V5IiwiRnJhZ21lbnQiLCJfaG9va3MiLCJfdG9hc3QiLCJNZXNzYWdlQWN0aW9ucyIsInRleHQiLCJtZXNzYWdlVG9rZW5zIiwicGxheSIsInBsYXllciIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwidXNlQmluZGVyIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsImxpc3RlbiIsImN1cnJlbnRNZXNzYWdlIiwicG9zaXRpb25Ub0N1dCIsInRleHRJZCIsImlkIiwib25QYXVzZSIsInN0b3AiLCJjb3B5TWVzc2FnZSIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkaXNhYmxlZCIsImFwcGx5Iiwib25DbGljayIsIkljb25CdXR0b24iLCJfc2Vzc2lvbiIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsImFsdCIsInNyYyIsIm9uRXJyb3IiLCJfcGxheWFibGUiLCJfYXVkaW9QbGF5ZXIiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwiYXV0b3BsYXkiLCJjb250ZW50IiwicmVmIiwidXNlUmVmIiwicmVtb3ZlSGlnaGxpZ2h0IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm9uQ2xpY2tXb3JkIiwiZXZlbnQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsInRvb2xUZXh0cyIsInRvb2xzIiwiYXVkaW8iLCJBdWRpb1BsYXllciIsImNvbnZlcnQiLCJDaGF0TWVzc2FnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2hhdE1lc3NhZ2VDb250ZXh0IiwidXNlQ29udGV4dCIsIl90ZXh0IiwiX2FjdGlvbnMiLCJfcHJvZmlsZUljb24iLCJfc3lzdGVtQWN0aW9ucyIsIk1lc3NhZ2VDb21wb25lbnQiLCJzZXRDb250ZW50IiwiY2xzIiwidXNhZ2UiLCJ0b3RhbFRva2VucyIsIkFDVElPTlMiLCJibG9ja3MiLCJwbGF5YWJsZUNvbnRlbnQiLCJhY3Rpb25zIiwicGFyc2VUZXh0IiwiU3lzdGVtQWN0aW9ucyIsIm1lbW8iLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJkYXRhIiwidHlwZSIsIm1hcmsiLCJ1c2VNYXJrZWQiLCJzeXN0ZW1BY3Rpb25zIiwiYWN0aW9uc1RleHRzIiwiQ29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsImF0dHJzIiwiQ29sbGFwc2libGVIZWFkZXIiLCJtYXRjaGVzIiwiaXRlbSIsInBhcmFncmFwaCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVzcG9uc2UiLCJ0cmFuc2NyaXB0aW9uIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfYWN0aW9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiXSwic291cmNlcyI6WyIvYW5zd2VyaW5nLnRzeCIsIi9pbmRleC50c3giLCIvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsIi9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi9tZXNzYWdlL2NvbXBvbmVudHMvdGV4dC50c3giLCIvbWVzc2FnZS9jb250ZXh0LnRzIiwiL21lc3NhZ2UvaW5kZXgudHN4IiwiL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvYWN0aW9uLnRzeCIsIi9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFTyxNQUFNRyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDSixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNKLE1BQUEsQ0FBQU0sSUFBSTtjQUFDRCxTQUFTLEVBQUMsSUFBSTtjQUFDRSxJQUFJLEVBQUVOLE9BQUEsQ0FBQU8sS0FBSyxDQUFDLFlBQVk7WUFBQyxFQUFJLEVBQ2xEVixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxFQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxFQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxDQUN4QixDQUNEO1VBRVIsQ0FB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