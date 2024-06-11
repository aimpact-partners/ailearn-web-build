System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@aimpact/chat@1.0.1/components/icons", "@aimpact/ailearn-app@0.0.46.dev-15/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/toast", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/icons", "@aimpact/chat-sdk@1.0.0/widgets/playable", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/collapsible"], function (_export, _context) {
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
    }, function (_pragmateUi011Icons) {
      dependency_2 = _pragmateUi011Icons;
    }, function (_aimpactChat101ComponentsIcons) {
      dependency_3 = _aimpactChat101ComponentsIcons;
    }, function (_aimpactAilearnApp0046Dev15ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0046Dev15ComponentsUi;
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
    }, function (_aimpactChat101SharedHooks) {
      dependency_10 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Collapsible) {
      dependency_11 = _pragmateUi011Collapsible;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-15"], ["@aimpact/ailearn-app", "0.0.46.dev-15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-15/chat/messages"
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
        hash: 2663511747,
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
              role: message.role
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJBdWRpb1BsYXllciIsInNyYyIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsInR5cGUiLCJfbWVzc2FnZSIsIl91aSIsIk1lc3NhZ2VzIiwic3RvcmUiLCJtZXNzYWdlcyIsInRleHRzIiwidG90YWxNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJsZW5ndGgiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJvdXRwdXQiLCJtYXAiLCJtZXNzYWdlIiwiaSIsImxhc3QiLCJNZXNzYWdlIiwia2V5IiwiRnJhZ21lbnQiLCJfaG9va3MiLCJfdG9hc3QiLCJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwicGxheWVyIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJ1c2VCaW5kZXIiLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwib25QbGF5IiwibGlzdGVuIiwiY3VycmVudE1lc3NhZ2UiLCJwb3NpdGlvblRvQ3V0IiwidGV4dElkIiwiaWQiLCJvblBhdXNlIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiYXBwbHkiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsIl9zZXNzaW9uIiwiUHJvZmlsZUljb24iLCJyb2xlIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsImFsdCIsIm9uRXJyb3IiLCJfcGxheWFibGUiLCJfYXVkaW9QbGF5ZXIiLCJNZXNzYWdlVGV4dCIsInBsYXlhYmxlIiwiYXV0b3BsYXkiLCJjb250ZW50IiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib25DbGlja1dvcmQiLCJldmVudCIsImNhbkJlUGxheWVkIiwiYXV0b3BsYXlWYWx1ZSIsIlBsYXlhYmxlIiwidG9vbFRleHRzIiwidG9vbHMiLCJhdWRpbyIsIkNoYXRNZXNzYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDaGF0TWVzc2FnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RleHQiLCJfYWN0aW9ucyIsIl9wcm9maWxlSWNvbiIsIl9zeXN0ZW1BY3Rpb25zIiwiTWVzc2FnZUNvbXBvbmVudCIsInNldENvbnRlbnQiLCJjbHMiLCJ1c2FnZSIsInRvdGFsVG9rZW5zIiwiQUNUSU9OUyIsImJsb2NrcyIsInBsYXlhYmxlQ29udGVudCIsImFjdGlvbnMiLCJwYXJzZVRleHQiLCJTeXN0ZW1BY3Rpb25zIiwibWVtbyIsIl9jb2xsYXBzaWJsZSIsIkFjdGlvbiIsImRhdGEiLCJtYXJrIiwidXNlTWFya2VkIiwic3lzdGVtQWN0aW9ucyIsImFjdGlvbnNUZXh0cyIsIkNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdHRycyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwibWF0Y2hlcyIsIml0ZW0iLCJwYXJhZ3JhcGgiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlc3BvbnNlIiwidHJhbnNjcmlwdGlvbiIsIm5hbWUiLCJKU09OIiwicGFyc2UiLCJwYXJhbXMiLCJmdW5jdGlvbnMiLCJlIiwiZXJyb3IiLCJfYWN0aW9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiXSwic291cmNlcyI6WyIvYW5zd2VyaW5nLnRzeCIsIi9hdWRpby1wbGF5ZXIudHN4IiwiL2luZGV4LnRzeCIsIi9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwiL21lc3NhZ2UvY29tcG9uZW50cy9wcm9maWxlLWljb24udHN4IiwiL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi9tZXNzYWdlL2NvbnRleHQudHMiLCIvbWVzc2FnZS9pbmRleC50c3giLCIvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9hY3Rpb24udHN4IiwiL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFTyxNQUFNRyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDSixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNKLE1BQUEsQ0FBQU0sSUFBSTtjQUFDRCxTQUFTLEVBQUMsSUFBSTtjQUFDRSxJQUFJLEVBQUVOLE9BQUEsQ0FBQU8sS0FBSyxDQUFD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