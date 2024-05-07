System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@aimpact/chat@1.0.1/components/icons", "@aimpact/ailearn-app@0.0.32/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/toast", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/icons", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/collapsible"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi011Icons) {
      dependency_2 = _pragmateUi011Icons;
    }, function (_aimpactChat101ComponentsIcons) {
      dependency_3 = _aimpactChat101ComponentsIcons;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Toast) {
      dependency_6 = _pragmateUi011Toast;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedIcons) {
      dependency_8 = _aimpactChat101SharedIcons;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_9 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_10 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Collapsible) {
      dependency_12 = _pragmateUi011Collapsible;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/chat/messages"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat/components/icons', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/toast', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat/shared/icons', dependency_8], ['@aimpact/chat-sdk/widgets/playable', dependency_9], ['@bgroup/media-manager/audio-player', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/collapsible', dependency_12]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJfbWVzc2FnZSIsIl91aSIsIk1lc3NhZ2VzIiwic3RvcmUiLCJtZXNzYWdlcyIsInRleHRzIiwidG90YWxNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJsZW5ndGgiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJvdXRwdXQiLCJtYXAiLCJtZXNzYWdlIiwiaSIsImxhc3QiLCJNZXNzYWdlIiwia2V5IiwiRnJhZ21lbnQiLCJfaG9va3MiLCJfdG9hc3QiLCJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwicGxheWVyIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJ1c2VCaW5kZXIiLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwiY3VycmVudE1lc3NhZ2UiLCJwb3NpdGlvblRvQ3V0IiwidGV4dElkIiwiaWQiLCJvblBhdXNlIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiYXBwbHkiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsIl9zZXNzaW9uIiwiUHJvZmlsZUljb24iLCJyb2xlIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJzcmMiLCJwaG90b1VSTCIsImFsdCIsIm9uRXJyb3IiLCJfcGxheWFibGUiLCJfYXVkaW9QbGF5ZXIiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwiYXV0b3BsYXkiLCJjb250ZW50IiwicmVmIiwidXNlUmVmIiwicmVtb3ZlSGlnaGxpZ2h0IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm9uQ2xpY2tXb3JkIiwiZXZlbnQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsInRvb2xUZXh0cyIsInRvb2xzIiwiYXVkaW8iLCJBdWRpb1BsYXllciIsImNvbnZlcnQiLCJDaGF0TWVzc2FnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2hhdE1lc3NhZ2VDb250ZXh0IiwidXNlQ29udGV4dCIsIl90ZXh0IiwiX2FjdGlvbnMiLCJfcHJvZmlsZUljb24iLCJfc3lzdGVtQWN0aW9ucyIsIk1lc3NhZ2VDb21wb25lbnQiLCJzZXRDb250ZW50IiwiY2xzIiwidXNhZ2UiLCJ0b3RhbFRva2VucyIsIkFDVElPTlMiLCJibG9ja3MiLCJwbGF5YWJsZUNvbnRlbnQiLCJhY3Rpb25zIiwicGFyc2VUZXh0IiwiU3lzdGVtQWN0aW9ucyIsIm1lbW8iLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJkYXRhIiwidHlwZSIsIm1hcmsiLCJ1c2VNYXJrZWQiLCJzeXN0ZW1BY3Rpb25zIiwiYWN0aW9uc1RleHRzIiwiQ29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsImF0dHJzIiwiQ29sbGFwc2libGVIZWFkZXIiLCJtYXRjaGVzIiwiaXRlbSIsInBhcmFncmFwaCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVzcG9uc2UiLCJ0cmFuc2NyaXB0aW9uIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfYWN0aW9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiXSwic291cmNlcyI6WyIvYW5zd2VyaW5nLnRzeCIsIi9pbmRleC50c3giLCIvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsIi9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi9tZXNzYWdlL2NvbXBvbmVudHMvdGV4dC50c3giLCIvbWVzc2FnZS9jb250ZXh0LnRzIiwiL21lc3NhZ2UvaW5kZXgudHN4IiwiL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvYWN0aW9uLnRzeCIsIi9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBRU8sTUFBTUcsZUFBZSxHQUFHQSxDQUFBLEtBQUs7WUFDbkMsT0FDQ0osTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDUCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixNQUFBLENBQUFNLElBQUk7Y0FBQ0QsU0FBUyxFQUFDLElBQUk7Y0FBQ0UsSUFBSSxFQUFFTixPQUFBLENBQUFPLEtBQUssQ0FBQyxZQUFZO1lBQUMsRUFBSSxFQUNsRFYsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFLLEVBQVEsRUFDN0JQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFLLEVBQVEsRUFDN0JQLE1BQUEsQ0FBQUssT0FBQSxD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