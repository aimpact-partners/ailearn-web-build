System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/chat-sdk@1.3.0/components/icons", "pragmate-ui@1.0.0-beta.6/empty", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/toast", "@aimpact/chat-sdk@1.3.0/audio-player", "wavesurfer.js@7.8.5", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/chat-sdk@1.3.0/widgets/playable", "@aimpact/chat-sdk@1.3.0/chat/messages/item", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/collapsible", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_2 = _pragmateUi100Beta6Icons;
    }, function (_aimpactChatSdk130ComponentsIcons) {
      dependency_3 = _aimpactChatSdk130ComponentsIcons;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_4 = _pragmateUi100Beta6Empty;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_6 = _pragmateUi100Beta6Toast;
    }, function (_aimpactChatSdk130AudioPlayer) {
      dependency_7 = _aimpactChatSdk130AudioPlayer;
    }, function (_wavesurferJs) {
      dependency_8 = _wavesurferJs;
    }, function (_pragmateUi100Beta6Image) {
      dependency_9 = _pragmateUi100Beta6Image;
    }, function (_aimpactChatSdk130WidgetsPlayable) {
      dependency_10 = _aimpactChatSdk130WidgetsPlayable;
    }, function (_aimpactChatSdk130ChatMessagesItem) {
      dependency_11 = _aimpactChatSdk130ChatMessagesItem;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_13 = _pragmateUi100Beta6Collapsible;
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.2"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.0"], ["wavesurfer.js", "7.8.6"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.11"], ["@types/react-dom", "18.3.0"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.3.0/messages"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat-sdk/components/icons', dependency_3], ['pragmate-ui/empty', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/toast', dependency_6], ['@aimpact/chat-sdk/audio-player', dependency_7], ['wavesurfer.js', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/chat-sdk/widgets/playable', dependency_10], ['@aimpact/chat-sdk/chat/messages/item', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.3.0/messages');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./answering
      ***************************/
      ims.set('./answering', {
        hash: 373385579,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemAnswering = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat-sdk/components/icons");
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
        hash: 326684797,
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
        hash: 2848480687,
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
            current,
            systemIcon,
            users
          }) {
            const [currentMessage, setCurrentMessage] = _react.default.useState(current);
            1;
            const totalMessages = messages.length;
            if (!totalMessages) return _react.default.createElement(_empty.Empty, {
              text: texts.empty
            });
            const output = messages.map((message, i) => {
              return _react.default.createElement(_message.MessageItemContainer, {
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
              setCurrentMessage,
              systemIcon
            };
            return _react.default.createElement(_context.ChatMessagesContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
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
      INTERNAL MODULE: ./message/components/audio-player
      *************************************************/

      ims.set('./message/components/audio-player', {
        hash: 1138068273,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Player = Player;
          var _react = require("react");
          function Player({
            message
          }) {
            const src = URL.createObjectURL(message.audio);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              target.addEventListener('loadedmetadata', () => {
                if (target.duration === Infinity) {
                  target.currentTime = 1e101;
                  target.ontimeupdate = () => {
                    target.ontimeupdate = null;
                    target.currentTime = 0;
                  };
                }
              });
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src,
              type: "audio/mp3",
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./message/components/profile-icon
      *************************************************/

      ims.set('./message/components/profile-icon', {
        hash: 1956570049,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          function ProfileIcon({
            role
          }) {
            const [loadError, setLoadError] = (0, _react.useState)(false);
            const {
              systemIcon,
              chat
            } = (0, _context.useChatMessagesContext)();
            const userProps = chat.user;
            const handleLoadError = () => setLoadError(true);
            const src = role === 'user' ? userProps.photoURL : systemIcon;
            return _react.default.createElement("picture", {
              className: "picture__container"
            }, userProps.photoURL && !loadError || role !== 'user' ? _react.default.createElement(_image.Image, {
              alt: "agent",
              src: src,
              onError: handleLoadError
            }) : _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: systemIcon,
              onError: handleLoadError
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./message/components/text
      *****************************************/

      ims.set('./message/components/text', {
        hash: 542713724,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _audioPlayer = require("./audio-player");
          function MessageText({
            message,
            playable,
            fetching,
            autoplay = false
          }) {
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
            const [text, setText] = _react.default.useState(message.content ?? '');
            (0, _hooks.useBinder)([message], () => {
              setText(message.content ?? '');
            }, 'change');
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const onClickWord = event => setCurrentMessage(message);
            const canBePlayed = message && message.role !== 'user' && autoplay;
            const autoplayValue = message.id === currentMessage?.id && canBePlayed;
            return _react.default.createElement("div", {
              className: "message-text__container p2",
              ref: ref
            }, _react.default.createElement("div", null, text), message.audio && _react.default.createElement(_audioPlayer.Player, {
              message: message
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./message/index
      *******************************/

      ims.set('./message/index', {
        hash: 351283860,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageItemContainer = MessageItemContainer;
          var _react = require("react");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _actions = require("./actions");
          var _profileIcon = require("./components/profile-icon");
          var _systemActions = require("./system-actions");
          var _useMessage = require("./use-message");
          var _item = require("@aimpact/chat-sdk/chat/messages/item");
          function MessageItemContainer({
            message
          }) {
            const {
              fetching
            } = (0, _useMessage.useMessage)(message);
            const cls = `message__container ${message.role}`;
            const messageTokens = message.role === 'assistant' ? message.usage?.totalTokens : null;
            const ACTIONS = ['transcription', 'fetching-tool-data', 'kb-processed-response', 'function', 'kb-response'];
            const [, playableContent, actions] = (0, _playable.parseText)(message.id, message.content, ACTIONS);
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
            }), _react.default.createElement(_item.Message, {
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

      /*************************************
      INTERNAL MODULE: ./message/use-message
      *************************************/

      ims.set('./message/use-message', {
        hash: 4237060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMessage = useMessage;
          var _react = require("react");
          var _context = require("../context");
          function useMessage(message) {
            const [fetching, setFetching] = _react.default.useState(false);
            const [content, setContent] = _react.default.useState(message?.content ?? '');
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
            return {
              fetching,
              setFetching,
              content,
              setContent
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwiY2hhdCIsInBsYXllciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50Iiwic3lzdGVtSWNvbiIsInVzZXJzIiwiY3VycmVudE1lc3NhZ2UiLCJzZXRDdXJyZW50TWVzc2FnZSIsInVzZVN0YXRlIiwidG90YWxNZXNzYWdlcyIsImxlbmd0aCIsIkVtcHR5IiwidGV4dCIsImVtcHR5Iiwib3V0cHV0IiwibWFwIiwibWVzc2FnZSIsImkiLCJNZXNzYWdlSXRlbUNvbnRhaW5lciIsImtleSIsInZhbHVlIiwiUHJvdmlkZXIiLCJfaG9va3MiLCJfdG9hc3QiLCJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJ1c2VCaW5kZXIiLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwb3NpdGlvblRvQ3V0IiwidGV4dElkIiwiaWQiLCJwYXJzZWRUZXh0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJvblBhdXNlIiwibGlzdGVuIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImFwcGx5Iiwib25DbGljayIsIkljb25CdXR0b24iLCJQbGF5ZXIiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhdWRpbyIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJ0eXBlIiwiX2ltYWdlIiwiUHJvZmlsZUljb24iLCJyb2xlIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwidXNlciIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiSW1hZ2UiLCJhbHQiLCJvbkVycm9yIiwiX2F1ZGlvUGxheWVyIiwiTWVzc2FnZVRleHQiLCJwbGF5YWJsZSIsImZldGNoaW5nIiwiYXV0b3BsYXkiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzZXRUZXh0IiwiY29udGVudCIsIm9uQ2xpY2tXb3JkIiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiX3BsYXlhYmxlIiwiX2FjdGlvbnMiLCJfcHJvZmlsZUljb24iLCJfc3lzdGVtQWN0aW9ucyIsIl91c2VNZXNzYWdlIiwiX2l0ZW0iLCJ1c2VNZXNzYWdlIiwiY2xzIiwidXNhZ2UiLCJ0b3RhbFRva2VucyIsIkFDVElPTlMiLCJwbGF5YWJsZUNvbnRlbnQiLCJhY3Rpb25zIiwicGFyc2VUZXh0IiwiU3lzdGVtQWN0aW9ucyIsIk1lc3NhZ2UiLCJfbWFya2Rvd24iLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJsYXN0IiwiZGF0YSIsIm1hcmsiLCJ1c2VNYXJrZWQiLCJzeXN0ZW1BY3Rpb25zIiwiYWN0aW9uc1RleHRzIiwiQ29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsImF0dHJzIiwiQ29sbGFwc2libGVIZWFkZXIiLCJGcmFnbWVudCIsIm1hdGNoZXMiLCJpdGVtIiwicGFyYWdyYXBoIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJyZXNwb25zZSIsInRyYW5zY3JpcHRpb24iLCJuYW1lIiwiSlNPTiIsInBhcnNlIiwicGFyYW1zIiwiZnVuY3Rpb25zIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9hY3Rpb24iLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsInNldEZldGNoaW5nIiwic2V0Q29udGVudCIsIm9uVXBkYXRlIiwib25FbmQiLCJvbiIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9hbnN3ZXJpbmcudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiL3RzL21lc3NhZ2UvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvYWN0aW9uLnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL3VzZS1tZXNzYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBRU8sTUFBTUcsZUFBZSxHQUFHQSxDQUFBLEtBQUs7WUFDbkMsT0FDQ0osTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lB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