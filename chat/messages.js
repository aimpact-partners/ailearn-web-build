System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.37/icons", "@aimpact/chat@1.0.1/shared/icons", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.37/toast", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/collapsible"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0037Icons) {
      dependency_2 = _pragmateUi0037Icons;
    }, function (_aimpactChat101SharedIcons) {
      dependency_3 = _aimpactChat101SharedIcons;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_4 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0037Toast) {
      dependency_5 = _pragmateUi0037Toast;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactChatSdk100WidgetsPlayable) {
      dependency_7 = _aimpactChatSdk100WidgetsPlayable;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_8 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactChat101SharedHooks) {
      dependency_9 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0037Collapsible) {
      dependency_10 = _pragmateUi0037Collapsible;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/chat/messages"
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
          const ChatMessageContext = _react.default.createContext({});
          exports.ChatMessageContext = ChatMessageContext;
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
          const Message = _react.default.memo(MessageComponent);
          exports.Message = Message;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDcEIsSUFBSSxDQUFDcUIsTUFBTSxDQUFDO2dCQUN4QyxPQUNDNUgsNkJBQUM0RyxTQUFTO2tCQUFDQyxLQUFLLEVBQUVGLFlBQVksQ0FBQ2tCLFNBQVMsQ0FBQ3RCLElBQUksQ0FBQ2tCLElBQUk7Z0JBQUMsR0FDbER6SCx3Q0FBSXNCLElBQUksQ0FBSyxDQUNGO2VBRWIsQ0FBQyxPQUFPd0csQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOzs7WUFJbEIsT0FBTzlIO2NBQUtDLFNBQVMsRUFBRSxrQkFBa0J1RyxJQUFJO1lBQUUsR0FBR0EsSUFBSSxDQUFPO1VBQzlEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xGQTtVQUNBO1VBQ0E7VUFDTSxTQUFVSixhQUFhLENBQUM7WUFBRUQsT0FBTztZQUFFMUYsS0FBSztZQUFFTztVQUFPLENBQUU7WUFDeEQsSUFBSSxDQUFDbUYsT0FBTyxFQUFFdEYsTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUNqQyxNQUFNSyxJQUFJLEdBQUdpRixPQUFPLENBQUNBLE9BQU8sQ0FBQ3RGLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFFeEMsT0FDQ2I7Y0FBU0MsU0FBUyxFQUFDO1lBQTRCLEdBQzlDRCw2QkFBQ2lJLGlDQUFvQixRQUNwQmpJLDZCQUFDa0ksK0JBQWtCLFFBQ2xCbEk7Y0FBU0MsU0FBUyxFQUFDO1lBQWMsR0FDL0JrRyxPQUFPLENBQUNwRixHQUFHLENBQUMsQ0FBQ1csTUFBTSxFQUFFVCxDQUFDLEtBQ3RCakIsNkJBQUNzRyxjQUFNO2NBQUM3RixLQUFLLEVBQUVBLEtBQUs7Y0FBRVcsR0FBRyxFQUFFLFVBQVVILENBQUMsRUFBRTtjQUFFc0YsSUFBSSxFQUFFN0U7WUFBTSxFQUN0RCxDQUFDLENBQ08sQ0FDVSxDQUNDLENBQ2Q7VUFFWiIsIm5hbWVzIjpbIlN5c3RlbUFuc3dlcmluZyIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJNZXNzYWdlcyIsInN0b3JlIiwibWVzc2FnZXMiLCJ0ZXh0cyIsInRvdGFsTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZVN0YXRlIiwibGVuZ3RoIiwib3V0cHV0IiwibWFwIiwibWVzc2FnZSIsImkiLCJsYXN0IiwiTWVzc2FnZSIsImtleSIsIk1lc3NhZ2VBY3Rpb25zIiwidGV4dCIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwicGxheWVyIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwiY3VycmVudE1lc3NhZ2UiLCJwb3NpdGlvblRvQ3V0IiwidGV4dElkIiwiaWQiLCJvblBhdXNlIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiYXBwbHkiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsImFsdCIsInNyYyIsIm9uRXJyb3IiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwiYXV0b3BsYXkiLCJjb250ZW50IiwicmVmIiwidXNlUmVmIiwicmVtb3ZlSGlnaGxpZ2h0IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm9uQ2xpY2tXb3JkIiwiZXZlbnQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJQbGF5YWJsZSIsInRvb2xUZXh0cyIsInRvb2xzIiwiYXVkaW8iLCJBdWRpb1BsYXllciIsImNvbnZlcnQiLCJDaGF0TWVzc2FnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2hhdE1lc3NhZ2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk1lc3NhZ2VDb21wb25lbnQiLCJzZXRDb250ZW50IiwiY2xzIiwidXNhZ2UiLCJ0b3RhbFRva2VucyIsIkFDVElPTlMiLCJibG9ja3MiLCJwbGF5YWJsZUNvbnRlbnQiLCJhY3Rpb25zIiwiU3lzdGVtQWN0aW9ucyIsIm1lbW8iLCJBY3Rpb24iLCJkYXRhIiwidHlwZSIsIm1hcmsiLCJzeXN0ZW1BY3Rpb25zIiwiYWN0aW9uc1RleHRzIiwiQ29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsImF0dHJzIiwiQ29sbGFwc2libGVIZWFkZXIiLCJGcmFnbWVudCIsIm1hdGNoZXMiLCJpdGVtIiwicGFyYWdyYXBoIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJyZXNwb25zZSIsInRyYW5zY3JpcHRpb24iLCJuYW1lIiwiSlNPTiIsInBhcnNlIiwicGFyYW1zIiwiZnVuY3Rpb25zIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhbnN3ZXJpbmcudHN4IiwiaW5kZXgudHN4IiwibWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsIm1lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwibWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwibWVzc2FnZS9jb250ZXh0LnRzIiwibWVzc2FnZS9pbmRleC50c3giLCJtZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCJtZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=