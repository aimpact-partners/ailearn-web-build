System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/icons", "@aimpact/chat@1.0.2/components/icons", "@aimpact/ailearn-app@0.1.0-test.11/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/toast", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/chat@1.0.2/shared/icons", "@aimpact/chat-sdk@1.0.1/widgets/playable", "@aimpact/chat@1.0.2/shared/hooks", "pragmate-ui@1.0.0-beta.1/collapsible"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, AudioPlayer, Messages, __beyond_pkg, hmr;
  _export({
    AudioPlayer: void 0,
    Messages: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_2 = _pragmateUi100Beta1Icons;
    }, function (_aimpactChat102ComponentsIcons) {
      dependency_3 = _aimpactChat102ComponentsIcons;
    }, function (_aimpactAilearnApp010Test11ComponentsUi) {
      dependency_4 = _aimpactAilearnApp010Test11ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_6 = _pragmateUi100Beta1Toast;
    }, function (_aimpactChatSdk101Session) {
      dependency_7 = _aimpactChatSdk101Session;
    }, function (_aimpactChat102SharedIcons) {
      dependency_8 = _aimpactChat102SharedIcons;
    }, function (_aimpactChatSdk101WidgetsPlayable) {
      dependency_9 = _aimpactChatSdk101WidgetsPlayable;
    }, function (_aimpactChat102SharedHooks) {
      dependency_10 = _aimpactChat102SharedHooks;
    }, function (_pragmateUi100Beta1Collapsible) {
      dependency_11 = _pragmateUi100Beta1Collapsible;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-test.11"], ["@aimpact/ailearn-app", "0.1.0-test.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-test.11/chat/messages"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat/components/icons', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/toast', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat/shared/icons', dependency_8], ['@aimpact/chat-sdk/widgets/playable', dependency_9], ['@aimpact/chat/shared/hooks', dependency_10], ['pragmate-ui/collapsible', dependency_11]]);
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

      /******************************
      INTERNAL MODULE: ./audio-player
      ******************************/

      ims.set('./audio-player', {
        hash: 1190578037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          /* bundle */ // audio_player.tsx

          function AudioPlayer({
            src
          }) {
            if (!src) {
              console.warn('not audio to process');
              return null;
            }
            src = URL.createObjectURL(src);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              const onLoadedMetadata = () => {
                if (target.duration !== Infinity) return;
                target.currentTime = 1e101;
                target.ontimeupdate = () => {
                  target.ontimeupdate = null;
                  target.currentTime = 0;
                };
              };
              target.addEventListener('loadedmetadata', onloadeddata);
              return () => target.removeEventListener('loadedmetadata', onLoadedMetadata);
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

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2048350410,
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
            texts,
            userPicture
          }) {
            const [totalMessages, setMessages] = _react.default.useState(messages.length ?? [].length);
            globalThis.s = store;
            if (!messages.length) return _react.default.createElement(_ui.EmptyCard, {
              className: "empty-section__container",
              text: texts.empty,
              icon: "info"
            });
            const output = messages.map((message, i) => {
              const last = i === totalMessages - 1;
              return _react.default.createElement(_message.Message, {
                userPicture: userPicture,
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
        hash: 757370342,
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
            role,
            userPicture
          }) {
            const [loadError, setLoadError] = (0, _react.useState)(false);
            // the local storage is used to store the user's default profile icon while is defined a better way to handle this.
            const icon = role === 'user' ? 'user' : globalThis.localStorage.getItem('chat.app.user.default.profile');
            const userProps = _session.sessionWrapper.user.getProperties();
            const handleLoadError = () => setLoadError(true);
            const src = role === 'user' ? userPicture : globalThis.localStorage.getItem('chat.app.user.default.profile');
            return _react.default.createElement("picture", {
              className: "picture__container"
            }, userProps.photoURL && !loadError || role !== 'user' ? _react.default.createElement("img", {
              alt: "user image profile",
              src: src,
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
        hash: 2882109275,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _audioPlayer = require("../../audio-player");
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
              src: message.audio
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
        hash: 2471031835,
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
            texts,
            userPicture
          }) {
            const [content, setContent] = _react.default.useState(message?.content ?? '');
            const cls = `message__container ${message.role}`;
            const messageTokens = message.role === 'assistant' ? message.usage?.totalTokens : null;
            const ACTIONS = ['transcription', 'fetching-tool-data', 'kb-processed-response', 'function', 'kb-response'];
            const [blocks, playableContent, actions] = (0, _playable.parseText)(message.id, message.content, ACTIONS);
            return _react.default.createElement("div", {
              className: cls,
              "data-id": message.id
            }, _react.default.createElement("section", {
              className: "picture__container"
            }, _react.default.createElement(_profileIcon.ProfileIcon, {
              role: message.role,
              userPicture: userPicture
            })), _react.default.createElement("section", {
              className: "message__content"
            }, _react.default.createElement(_systemActions.SystemActions, {
              texts: texts,
              actions: actions,
              message: message
            }), _react.default.createElement(_text.MessageText, {
              store: store,
              texts: texts,
              playable: true,
              message: message
            }), _react.default.createElement("section", {
              className: "message__actions"
            }, _react.default.createElement(_actions.MessageActions, {
              store: store,
              play: !message.audio,
              message: message,
              text: playableContent,
              messageTokens: messageTokens
            }))));
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
        "im": "./audio-player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
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
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./audio-player').AudioPlayer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJBdWRpb1BsYXllciIsInNyYyIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsInR5cGUiLCJfbWVzc2FnZSIsIl91aSIsIk1lc3NhZ2VzIiwic3RvcmUiLCJtZXNzYWdlcyIsInRleHRzIiwidXNlclBpY3R1cmUiLCJ0b3RhbE1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ1c2VTdGF0ZSIsImxlbmd0aCIsImdsb2JhbFRoaXMiLCJzIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5Iiwib3V0cHV0IiwibWFwIiwibWVzc2FnZSIsImkiLCJsYXN0IiwiTWVzc2FnZSIsImtleSIsIkZyYWdtZW50IiwiX2hvb2tzIiwiX3RvYXN0IiwiTWVzc2FnZUFjdGlvbnMiLCJtZXNzYWdlVG9rZW5zIiwicGxheSIsInBsYXllciIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwidXNlQmluZGVyIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsIm9uUGxheSIsImxpc3RlbiIsImN1cnJlbnRNZXNzYWdlIiwicG9zaXRpb25Ub0N1dCIsInRleHRJZCIsImlkIiwib25QYXVzZSIsInN0b3AiLCJjb3B5TWVzc2FnZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiYXBwbHkiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsIl9zZXNzaW9uIiwiUHJvZmlsZUljb24iLCJyb2xlIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsImFsdCIsIm9uRXJyb3IiLCJfcGxheWFibGUiLCJfYXVkaW9QbGF5ZXIiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwiYXV0b3BsYXkiLCJjb250ZW50IiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib25DbGlja1dvcmQiLCJldmVudCIsImNhbkJlUGxheWVkIiwiYXV0b3BsYXlWYWx1ZSIsIlBsYXlhYmxlIiwidG9vbFRleHRzIiwidG9vbHMiLCJhdWRpbyIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RleHQiLCJfYWN0aW9ucyIsIl9wcm9maWxlSWNvbiIsIl9zeXN0ZW1BY3Rpb25zIiwiTWVzc2FnZUNvbXBvbmVudCIsInNldENvbnRlbnQiLCJjbHMiLCJ1c2FnZSIsInRvdGFsVG9rZW5zIiwiQUNUSU9OUyIsImJsb2NrcyIsInBsYXlhYmxlQ29udGVudCIsImFjdGlvbnMiLCJwYXJzZVRleHQiLCJTeXN0ZW1BY3Rpb25zIiwibWVtbyIsIl9jb2xsYXBzaWJsZSIsIkFjdGlvbiIsImRhdGEiLCJtYXJrIiwidXNlTWFya2VkIiwic3lzdGVtQWN0aW9ucyIsImFjdGlvbnNUZXh0cyIsIkNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdHRycyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwibWF0Y2hlcyIsIml0ZW0iLCJwYXJhZ3JhcGgiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlc3BvbnNlIiwidHJhbnNjcmlwdGlvbiIsIm5hbWUiLCJKU09OIiwicGFyc2UiLCJwYXJhbXMiLCJmdW5jdGlvbnMiLCJlIiwiZXJyb3IiLCJfYWN0aW9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiXSwic291cmNlcyI6WyIvYW5zd2VyaW5nLnRzeCIsIi9hdWRpby1wbGF5ZXIudHN4IiwiL2luZGV4LnRzeCIsIi9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwiL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi9tZXNzYWdlL2NvbnRleHQudHMiLCIvbWVzc2FnZS9pbmRleC50c3giLCIvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9hY3Rpb24udHN4IiwiL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFTyxNQUFNRyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDSixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNKLE1BQUEsQ0FBQU0sSUFBSTtjQUFDRCxTQUFTLEVBQUMsSUFBSTtjQUFDRSxJQUFJLEVBQUVOLE9B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