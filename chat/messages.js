System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/chat@1.0.1/components/icons", "@aimpact/ailearn-app@0.0.29/components/ui", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.0.6/toast", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/collapsible"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi006Icons) {
      dependency_2 = _pragmateUi006Icons;
    }, function (_aimpactChat101ComponentsIcons) {
      dependency_3 = _aimpactChat101ComponentsIcons;
    }, function (_aimpactAilearnApp0029ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0029ComponentsUi;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_5 = _beyondJsReact18Widgets111Hooks;
    }, function (_pragmateUi006Toast) {
      dependency_6 = _pragmateUi006Toast;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_8 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_9 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactChat101SharedHooks) {
      dependency_10 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Collapsible) {
      dependency_11 = _pragmateUi006Collapsible;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.29"], ["@aimpact/ailearn-app", "0.0.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.29/chat/messages"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat/components/icons', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/toast', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat-sdk/widgets/playable', dependency_8], ['@bgroup/media-manager/audio-player', dependency_9], ['@aimpact/chat/shared/hooks', dependency_10], ['pragmate-ui/collapsible', dependency_11]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./answering
      ***************************/
      ims.set('./answering', {
        hash: 1428612859,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemAnswering = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/components/icons");
          const SystemAnswering = () => {
            return _react.default.createElement("div", {
              className: "message answering"
            }, _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: _icons2.ICONS['ai-profile']
            }), _react.default.createElement("div", {
              className: "dot-animation"
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

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2206451622,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = Messages;
          var _react = require("react");
          var _message = require("./message");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle */
          function Messages({
            store,
            messages,
            texts
          }) {
            const [totalMessages, setMessages] = _react.default.useState(messages.length ?? [].length);
            if (!messages.length) return _react.default.createElement(_ui.EmptyCard, {
              className: "empty-section__container",
              text: texts.empty,
              icon: "info"
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
        hash: 2453634290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _icons2 = require("@aimpact/chat/components/icons");
          function ProfileIcon({
            role
          }) {
            const [loadError, setLoadError] = (0, _react.useState)(false);
            const icon = role === 'user' ? 'user' : 'ai-profile';
            const userProps = _session.sessionWrapper.user.getProperties();
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement(_react.default.Fragment, null, userProps.photoURL && role === 'user' && !loadError ? _react.default.createElement("img", {
              alt: "user image profile",
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: _icons2.ICONS[icon] ?? icon
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./message/components/text
      *****************************************/

      ims.set('./message/components/text', {
        hash: 1049416953,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJfbWVzc2FnZSIsIl91aSIsIk1lc3NhZ2VzIiwic3RvcmUiLCJtZXNzYWdlcyIsInRleHRzIiwidG90YWxNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJsZW5ndGgiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJvdXRwdXQiLCJtYXAiLCJtZXNzYWdlIiwiaSIsImxhc3QiLCJNZXNzYWdlIiwia2V5IiwiRnJhZ21lbnQiLCJfaG9va3MiLCJfdG9hc3QiLCJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwicGxheWVyIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJ1c2VCaW5kZXIiLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwiY3VycmVudE1lc3NhZ2UiLCJwb3NpdGlvblRvQ3V0IiwidGV4dElkIiwiaWQiLCJvblBhdXNlIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiYXBwbHkiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsIl9zZXNzaW9uIiwiUHJvZmlsZUljb24iLCJyb2xlIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiYWx0Iiwic3JjIiwib25FcnJvciIsIl9wbGF5YWJsZSIsIl9hdWRpb1BsYXllciIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJhdXRvcGxheSIsImNvbnRlbnQiLCJyZWYiLCJ1c2VSZWYiLCJyZW1vdmVIaWdobGlnaHQiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib25DbGlja1dvcmQiLCJldmVudCIsImNhbkJlUGxheWVkIiwiYXV0b3BsYXlWYWx1ZSIsIlBsYXlhYmxlIiwidG9vbFRleHRzIiwidG9vbHMiLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwiY29udmVydCIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RleHQiLCJfYWN0aW9ucyIsIl9wcm9maWxlSWNvbiIsIl9zeXN0ZW1BY3Rpb25zIiwiTWVzc2FnZUNvbXBvbmVudCIsInNldENvbnRlbnQiLCJjbHMiLCJ1c2FnZSIsInRvdGFsVG9rZW5zIiwiQUNUSU9OUyIsImJsb2NrcyIsInBsYXlhYmxlQ29udGVudCIsImFjdGlvbnMiLCJwYXJzZVRleHQiLCJTeXN0ZW1BY3Rpb25zIiwibWVtbyIsIl9jb2xsYXBzaWJsZSIsIkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibWFyayIsInVzZU1hcmtlZCIsInN5c3RlbUFjdGlvbnMiLCJhY3Rpb25zVGV4dHMiLCJDb250YWluZXIiLCJ0aXRsZSIsImNoaWxkcmVuIiwiYXR0cnMiLCJDb2xsYXBzaWJsZUhlYWRlciIsIm1hdGNoZXMiLCJpdGVtIiwicGFyYWdyYXBoIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJyZXNwb25zZSIsInRyYW5zY3JpcHRpb24iLCJuYW1lIiwiSlNPTiIsInBhcnNlIiwicGFyYW1zIiwiZnVuY3Rpb25zIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9hY3Rpb24iLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCJdLCJzb3VyY2VzIjpbIi9hbnN3ZXJpbmcudHN4IiwiL2luZGV4LnRzeCIsIi9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwiL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi9tZXNzYWdlL2NvbnRleHQudHMiLCIvbWVzc2FnZS9pbmRleC50c3giLCIvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9hY3Rpb24udHN4IiwiL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBRU8sTUFBTUcsZUFBZSxHQUFHQSxDQUFBLEtBQUs7WUFDbkMsT0FDQ0osTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDUCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixNQUFBLENBQUFNLElBQUk7Y0FBQ0QsU0FBUyxFQUFDLElBQUk7Y0FBQ0UsSUFBSSxFQUFFTixPQUFBLENBQUFPLEtBQUssQ0FBQyxZQUFZO1lBQUMsRUFBSSxFQUNsRFYsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFLLEVBQVEsRUFDN0JQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFLLEVBQVEsRUFDN0JQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZ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