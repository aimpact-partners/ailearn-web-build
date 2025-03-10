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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.20"]]);
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
        hash: 2892126922,
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
              if (player.textId !== message.id) return;
              setProcessing(false);
              setAction('stop');
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
            const icon = action === 'play' ? 'stop' : 'play';
            const onClick = action === 'play' ? onPause : onPlay;
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
        hash: 2429896100,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
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
            }) : _react.default.createElement(_react.default.Fragment, null, role === 'user' ? _react.default.createElement(_icons.Icon, {
              icon: "user"
            }) : _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: systemIcon,
              onError: handleLoadError
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwiY2hhdCIsInBsYXllciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50Iiwic3lzdGVtSWNvbiIsInNldFVwZGF0ZVNjcm9sbCIsImN1cnJlbnRNZXNzYWdlIiwic2V0Q3VycmVudE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRvdGFsTWVzc2FnZXMiLCJsZW5ndGgiLCJFbXB0eSIsInRleHQiLCJlbXB0eSIsIm91dHB1dCIsIm1hcCIsIm1lc3NhZ2UiLCJpIiwiTWVzc2FnZUl0ZW1Db250YWluZXIiLCJrZXkiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiX2hvb2tzIiwiX3RvYXN0IiwiTWVzc2FnZUFjdGlvbnMiLCJtZXNzYWdlVG9rZW5zIiwicGxheSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJ1c2VCaW5kZXIiLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwidGV4dElkIiwiaWQiLCJvblBsYXkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInBvc2l0aW9uVG9DdXQiLCJwYXJzZWRUZXh0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJvblBhdXNlIiwibGlzdGVuIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImFwcGx5Iiwib25DbGljayIsIkljb25CdXR0b24iLCJQbGF5ZXIiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhdWRpbyIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJ0eXBlIiwiX2ltYWdlIiwiUHJvZmlsZUljb24iLCJyb2xlIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwidXNlciIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwiSW1hZ2UiLCJhbHQiLCJvbkVycm9yIiwiRnJhZ21lbnQiLCJfYXVkaW9QbGF5ZXIiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwiZmV0Y2hpbmciLCJhdXRvcGxheSIsInJlbW92ZUhpZ2hsaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNldFRleHQiLCJvbkNsaWNrV29yZCIsImNhbkJlUGxheWVkIiwiYXV0b3BsYXlWYWx1ZSIsIl9wbGF5YWJsZSIsIl9hY3Rpb25zIiwiX3Byb2ZpbGVJY29uIiwiX3N5c3RlbUFjdGlvbnMiLCJfaXRlbSIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwicGxheWFibGVDb250ZW50IiwiYWN0aW9ucyIsInBhcnNlVGV4dCIsIlN5c3RlbUFjdGlvbnMiLCJNZXNzYWdlIiwiX21hcmtkb3duIiwiX2NvbGxhcHNpYmxlIiwiQWN0aW9uIiwibGFzdCIsImRhdGEiLCJtYXJrIiwidXNlTWFya2VkIiwic3lzdGVtQWN0aW9ucyIsImFjdGlvbnNUZXh0cyIsIkNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdHRycyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwibWF0Y2hlcyIsIml0ZW0iLCJwYXJhZ3JhcGgiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlc3BvbnNlIiwidHJhbnNjcmlwdGlvbiIsIm5hbWUiLCJKU09OIiwicGFyc2UiLCJwYXJhbXMiLCJmdW5jdGlvbnMiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX2FjdGlvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwidXNlTWVzc2FnZSIsInNldEZldGNoaW5nIiwib25VcGRhdGUiLCJvbkVuZCIsIm9uIiwib2ZmIl0sInNvdXJjZXMiOlsiL3RzL2Fuc3dlcmluZy50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS9hY3Rpb25zL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL2NvbXBvbmVudHMvYXVkaW8tcGxheWVyLnRzeCIsIi90cy9tZXNzYWdlL2NvbXBvbmVudHMvcHJvZmlsZS1pY29uLnRzeCIsIi90cy9tZXNzYWdlL2NvbXBvbmVudHMvdGV4dC50c3giLCIvdHMvbWVzc2FnZS9pbmRleC50c3giLCIvdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvdXNlLW1lc3NhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFTyxNQUFNRyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDSixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIs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