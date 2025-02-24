System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/chat-sdk@1.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/empty", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/chat-sdk@1.4.1/audio-player", "wavesurfer.js@7.8.5", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/chat-sdk@1.4.1/widgets/playable", "@aimpact/chat-sdk@1.4.1/chat/messages/item", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/collapsible", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_2 = _pragmateUi100Beta7Icons;
    }, function (_aimpactChatSdk141ComponentsIcons) {
      dependency_3 = _aimpactChatSdk141ComponentsIcons;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_4 = _pragmateUi100Beta7Empty;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_5 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_6 = _pragmateUi100Beta7Toast;
    }, function (_aimpactChatSdk141AudioPlayer) {
      dependency_7 = _aimpactChatSdk141AudioPlayer;
    }, function (_wavesurferJs) {
      dependency_8 = _wavesurferJs;
    }, function (_pragmateUi100Beta7Image) {
      dependency_9 = _pragmateUi100Beta7Image;
    }, function (_aimpactChatSdk141WidgetsPlayable) {
      dependency_10 = _aimpactChatSdk141WidgetsPlayable;
    }, function (_aimpactChatSdk141ChatMessagesItem) {
      dependency_11 = _aimpactChatSdk141ChatMessagesItem;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_13 = _pragmateUi100Beta7Collapsible;
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.8"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.1/messages"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat-sdk/components/icons', dependency_3], ['pragmate-ui/empty', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/toast', dependency_6], ['@aimpact/chat-sdk/audio-player', dependency_7], ['wavesurfer.js', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/chat-sdk/widgets/playable', dependency_10], ['@aimpact/chat-sdk/chat/messages/item', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.4.1/messages');
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
        hash: 1368753222,
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
        hash: 3501596396,
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
            setUpdateScroll
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
                message: message,
                setUpdateScroll: setUpdateScroll
              });
            });
            const value = {
              chat,
              player,
              messages,
              texts,
              currentMessage,
              setCurrentMessage,
              systemIcon,
              setUpdateScroll
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
        hash: 2038854118,
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
            const [content, setContent] = _react.default.useState(message.content ?? '');
            const [action, setAction] = _react.default.useState('stop');
            const [processing, setProcessing] = _react.default.useState(false);
            (0, _hooks.useBinder)([player], () => setProcessing(player.speaking));
            (0, _hooks.useBinder)([message], () => {
              setContent(message.content ?? '');
            });
            const onChange = () => {
              setProcessing(false);
              setAction('');
            };
            (0, _hooks.useBinder)([player], onChange, 'on.finish');
            const onPlay = async event => {
              event.stopPropagation();
              setAction('play');
              setCurrentMessage(content);
              player.positionToCut = 0;
              player.textId = message.id;
              const parsedText = content.replaceAll(/[-\\*_#]+/g, '').trim();
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
        hash: 1130764016,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
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
        hash: 3131614793,
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
          var _item = require("@aimpact/chat-sdk/chat/messages/item");
          function MessageItemContainer({
            message,
            setUpdateScroll
          }) {
            // const { fetching } = useMessage(message);
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
              actions: actions
            }), _react.default.createElement(_item.Message, {
              message: message,
              setUpdateScroll: setUpdateScroll
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
        hash: 3020040988,
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
            const mark = _markdown.useMarked;
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
        hash: 1485603025,
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
            actions
          }) {
            if (!actions?.length) return null;
            const {
              texts
            } = (0, _context.useChatMessagesContext)();
            const last = actions[actions.length - 1];
            return _react.default.createElement("section", {
              className: "message-actions__container"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_action.Action, {
              data: last,
              last: true,
              texts: texts
            }), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("section", {
              className: "actions__log"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwiY2hhdCIsInBsYXllciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50Iiwic3lzdGVtSWNvbiIsInNldFVwZGF0ZVNjcm9sbCIsImN1cnJlbnRNZXNzYWdlIiwic2V0Q3VycmVudE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRvdGFsTWVzc2FnZXMiLCJsZW5ndGgiLCJFbXB0eSIsInRleHQiLCJlbXB0eSIsIm91dHB1dCIsIm1hcCIsIm1lc3NhZ2UiLCJpIiwiTWVzc2FnZUl0ZW1Db250YWluZXIiLCJrZXkiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiX2hvb2tzIiwiX3RvYXN0IiwiTWVzc2FnZUFjdGlvbnMiLCJtZXNzYWdlVG9rZW5zIiwicGxheSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJ1c2VCaW5kZXIiLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwb3NpdGlvblRvQ3V0IiwidGV4dElkIiwiaWQiLCJwYXJzZWRUZXh0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJvblBhdXNlIiwibGlzdGVuIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImFwcGx5Iiwib25DbGljayIsIkljb25CdXR0b24iLCJQbGF5ZXIiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhdWRpbyIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJ0eXBlIiwiX2ltYWdlIiwiUHJvZmlsZUljb24iLCJyb2xlIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwidXNlciIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiSW1hZ2UiLCJhbHQiLCJvbkVycm9yIiwiX2F1ZGlvUGxheWVyIiwiTWVzc2FnZVRleHQiLCJwbGF5YWJsZSIsImZldGNoaW5nIiwiYXV0b3BsYXkiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzZXRUZXh0Iiwib25DbGlja1dvcmQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJfcGxheWFibGUiLCJfYWN0aW9ucyIsIl9wcm9maWxlSWNvbiIsIl9zeXN0ZW1BY3Rpb25zIiwiX2l0ZW0iLCJjbHMiLCJ1c2FnZSIsInRvdGFsVG9rZW5zIiwiQUNUSU9OUyIsInBsYXlhYmxlQ29udGVudCIsImFjdGlvbnMiLCJwYXJzZVRleHQiLCJTeXN0ZW1BY3Rpb25zIiwiTWVzc2FnZSIsIl9tYXJrZG93biIsIl9jb2xsYXBzaWJsZSIsIkFjdGlvbiIsImxhc3QiLCJkYXRhIiwibWFyayIsInVzZU1hcmtlZCIsInN5c3RlbUFjdGlvbnMiLCJhY3Rpb25zVGV4dHMiLCJDb250YWluZXIiLCJ0aXRsZSIsImNoaWxkcmVuIiwiYXR0cnMiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkZyYWdtZW50IiwibWF0Y2hlcyIsIml0ZW0iLCJwYXJhZ3JhcGgiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlc3BvbnNlIiwidHJhbnNjcmlwdGlvbiIsIm5hbWUiLCJKU09OIiwicGFyc2UiLCJwYXJhbXMiLCJmdW5jdGlvbnMiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX2FjdGlvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwidXNlTWVzc2FnZSIsInNldEZldGNoaW5nIiwib25VcGRhdGUiLCJvbkVuZCIsIm9uIiwib2ZmIl0sInNvdXJjZXMiOlsiL3RzL2Fuc3dlcmluZy50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL2NvbXBvbmVudHMvYXVkaW8tcGxheWVyLnRzeCIsIi90cy9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi90cy9tZXNzYWdlL2NvbXBvbmVudHMvdGV4dC50c3giLCIvdHMvbWVzc2FnZS9pbmRleC50c3giLCIvdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvdXNlLW1lc3NhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFTyxNQUFNRyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDSixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIs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O1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBLElBQUFsRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBaUIsUUFBQSxHQUFBakIsT0FBQTtVQUVNLFNBQVV5SyxVQUFVQSxDQUFDckksT0FBTztZQUNqQyxNQUFNLENBQUMwRSxRQUFRLEVBQUU0RCxXQUFXLENBQUMsR0FBRzNLLE1BQUEsQ0FBQUssT0FBSyxDQUFDd0IsUUFBUSxDQUFVLEtBQUssQ0FBQztZQUM5RCxNQUFNLENBQUNtQixPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHakQsTUFBQSxDQUFBSyxPQUFLLENBQUN3QixRQUFRLENBQVNRLE9BQU8sRUFBRVcsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUM1RSxNQUFNO2NBQUU1QjtZQUFJLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFKLHNCQUFzQixHQUFFO1lBQ3pDZCxNQUFBLENBQUFLLE9BQUssQ0FBQ2lGLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1zRixRQUFRLEdBQUdBLENBQUEsS0FBSztnQkFDckJELFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBRWpCMUgsVUFBVSxDQUFDWixPQUFPLENBQUNXLE9BQU8sQ0FBQztjQUM1QixDQUFDO2NBQ0QsTUFBTTZILEtBQUssR0FBR0EsQ0FBQSxLQUFLO2dCQUNsQjVILFVBQVUsQ0FBQ1osT0FBTyxDQUFDVyxPQUFPLENBQUM7Z0JBQzNCMkgsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNuQixDQUFDO2NBQ0R2SixJQUFJLENBQUMwSixFQUFFLENBQUMsV0FBV3pJLE9BQU8sQ0FBQ3lCLEVBQUUsVUFBVSxFQUFFOEcsUUFBUSxDQUFDO2NBQ2xEeEosSUFBSSxDQUFDMEosRUFBRSxDQUFDLFdBQVd6SSxPQUFPLENBQUN5QixFQUFFLFFBQVEsRUFBRStHLEtBQUssQ0FBQztjQUM3QyxPQUFPLE1BQUs7Z0JBQ1h6SixJQUFJLENBQUMySixHQUFHLENBQUMsV0FBVzFJLE9BQU8sQ0FBQ3lCLEVBQUUsVUFBVSxFQUFFOEcsUUFBUSxDQUFDO2dCQUNuRHhKLElBQUksQ0FBQzJKLEdBQUcsQ0FBQyxXQUFXMUksT0FBTyxDQUFDeUIsRUFBRSxRQUFRLEVBQUUrRyxLQUFLLENBQUM7Y0FDL0MsQ0FBQztZQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixPQUFPO2NBQUU5RCxRQUFRO2NBQUU0RCxXQUFXO2NBQUUzSCxPQUFPO2NBQUVDO1lBQVUsQ0FBRTtVQUN0RCIsImlnbm9yZUxpc3QiOltdfQ==