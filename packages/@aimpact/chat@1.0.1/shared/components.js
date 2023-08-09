System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "prismjs@1.29.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/spinner", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Playable, AudioPlayer, CollapsibleHeader, ConfirmationModal, LabeledIconButton, Input, Loading, PreloadScreen, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    Playable: void 0,
    AudioPlayer: void 0,
    CollapsibleHeader: void 0,
    ConfirmationModal: void 0,
    LabeledIconButton: void 0,
    Input: void 0,
    Loading: void 0,
    PreloadScreen: void 0,
    ThemeSwitcher: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_2 = _pragmateUi0036Icons;
    }, function (_prismjs) {
      dependency_3 = _prismjs;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_4 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_5 = _aimpactChat101SharedHooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_pragmateUi0036Form) {
      dependency_7 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Spinner) {
      dependency_8 = _pragmateUi0036Spinner;
    }, function (_beyondJsKernel019Styles) {
      dependency_9 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/shared/components"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['prismjs', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['@aimpact/chat/shared/hooks', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/spinner', dependency_8], ['@beyond-js/kernel/styles', dependency_9]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/shared/components');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./chat/clipboard
      ********************************/
      ims.set('./chat/clipboard', {
        hash: 3141817637,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Clipboard = Clipboard;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          function Clipboard({
            text,
            message
          }) {
            const ref = React.useRef(null);
            const polyfill = text => {
              const textArea = document.createElement('textarea');
              textArea.value = text;
              // Avoid scrolling to bottom
              textArea.style.top = '0';
              textArea.style.left = '0';
              textArea.style.position = 'fixed';
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                const successful = document.execCommand('copy');
                const msg = successful ? 'successful' : 'unsuccessful';
                console.log('Fallback: Copying text command was ' + msg);
              } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
              }
            };
            const onClick = async event => {
              const target = event.currentTarget;
              const text = target.dataset.text;
              if (!navigator.clipboard) {
                return polyfill(text);
              }
              try {
                await navigator.clipboard.writeText(text);
                const span = ref.current.querySelector('.action-copied');
                span.classList.add('show');
                globalThis.setTimeout(() => {
                  span.classList.add('hide');
                  globalThis.setTimeout(() => span.classList.remove('show', 'hide'), 300);
                }, 500);
              } catch (e) {
                console.log('some error', e);
              }
            };
            return React.createElement("div", null, React.createElement("div", {
              className: 'clipboard__container',
              "data-text": text,
              ref: ref,
              onClick: onClick
            }, React.createElement(_icons.IconButton, {
              icon: 'copy'
            }), React.createElement("span", {
              className: 'action-copied'
            }, "Copied")));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./chat/code
      ***************************/

      ims.set('./chat/code', {
        hash: 3089612593,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Code = Code;
          var React = require("react");
          var Prism = require("prismjs");
          var _clipboard = require("./clipboard");
          function Code({
            language = 'typescript',
            children,
            clipboard = true
          }) {
            const createMarkup = () => {
              if (!children) {
                return {
                  __html: ''
                };
              }
              const html = Prism.highlight(children, Prism.languages.javascript, language);
              return {
                __html: html
              };
            };
            const cls = `code-container${clipboard ? ' has-clipboard' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("pre", null, React.createElement("code", {
              className: `regular__code language-${language}`,
              dangerouslySetInnerHTML: createMarkup()
            })), clipboard && React.createElement(_clipboard.Clipboard, {
              text: children,
              message: ''
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./chat/playable
      *******************************/

      ims.set('./chat/playable', {
        hash: 2363960937,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Playable = Playable;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _code = require("./code");
          /* bundle */
          function Playable({
            content,
            autoplay,
            player,
            onClickWord
          }) {
            const [text, setText] = React.useState(content ?? '');
            const [cutIndex, setCutIndex] = React.useState(0);
            const ref = React.useRef(null);
            const mark = (0, _hooks2.useMarked)();
            const blocks = text.split(/(```[\s\S]*?```)/).filter(block => block.trim() !== '').map(block => ({
              content: block,
              isCode: block.startsWith('```')
            }));
            React.useEffect(() => {
              const playableContent = blocks.filter(item => !item.isCode);
              if (autoplay) player.play(playableContent.map(item => item.content).join(' '));
            }, [autoplay]);
            const removeHighlight = () => {
              ref.current.querySelectorAll('.highlight').forEach(element => element.classList.remove('highlight'));
            };
            (0, _hooks.useBinder)([player], () => {
              if (!autoplay) return;
              const currentIndex = player.currentWord;
              if (player.positionToCut > 0) {
                const segmentToCut = player.text.slice(0, currentIndex).split(' ').length - 1;
                const finalPosition = player.positionToCut + segmentToCut;
                removeHighlight();
                if (!ref.current.querySelector(`[data-index="${finalPosition}"]`)) return;
                ref.current.querySelector(`[data-index="${finalPosition}"]`).classList.add('highlight');
                return;
              }
              const endOfWordIndex = text.indexOf(' ', currentIndex);
              const segment = text.slice(0, currentIndex);
              const position = segment.split(' ').length - 1;
              removeHighlight();
              ref.current.querySelector(`[data-index="${position}"]`).classList.add('highlight');
            }, 'boundary');
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const onClick = event => {
              event.preventDefault();
              event.stopPropagation();
              if (event.target.classList.contains('word')) {
                const index = event.target.dataset.index;
                const wordsArray = text.split(' ');
                const textToPlay = wordsArray.slice(index).join(' ');
                player.positionToCut = parseInt(index);
                player.play(textToPlay);
                if (onClickWord) onClickWord();
                // Implement your logic for playing the text from the clicked word to the end here.
              }
            };

            const output = blocks.map((block, i) => {
              const createSpan = (word, index) => `<span data-index="${index}${i}" class="word">${word}</span>`;
              if (block.isCode) {
                return React.createElement(_code.Code, {
                  key: `code-${i}`
                }, block.content.replaceAll('```', ''));
              }
              const content = mark(block.content.replaceAll('\n', '').split(' ').map(createSpan).join(' '));
              return React.createElement("div", {
                key: `content-${i}`,
                className: 'message-text__container',
                onClick: onClick,
                dangerouslySetInnerHTML: {
                  __html: content
                }
              });
            });
            return React.createElement("div", {
              ref: ref
            }, output);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./chat/player
      *****************************/

      ims.set('./chat/player', {
        hash: 1737248758,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var React = require("react");
          /* bundle */ // audio_player.tsx

          function AudioPlayer({
            src
          }) {
            if (!src) {
              console.warn('not audio to process');
              return null;
            }
            src = URL.createObjectURL(src);
            const ref = React.useRef(null);
            React.useEffect(() => {
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
            return React.createElement("div", {
              className: 'audio-player'
            }, React.createElement("audio", {
              controls: true,
              preload: 'metadata'
            }, React.createElement("source", {
              src: src,
              type: 'audio/mp3',
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./collapsible
      *****************************/

      ims.set('./collapsible', {
        hash: 1829891359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleHeader = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /* bundle */
          const CollapsibleHeader = ({
            title,
            subtitle,
            navigateBack,
            actions,
            children
          }) => {
            const [isCollapsed, setIsCollapsed] = (0, _react.useState)(!children);
            const handleCollapse = () => setIsCollapsed(!isCollapsed);
            const cls = `collapsible-wrapper ${isCollapsed ? 'collapsed' : ''}`;
            const btnCls = `collapse-button lg primary circle ${isCollapsed ? 'collapsed' : ''}`;
            const menuCls = `collapsible-menu ${isCollapsed ? 'collapsed' : ''}`;
            return _react.default.createElement("header", {
              className: 'collapsible-header'
            }, _react.default.createElement("nav", {
              className: menuCls
            }, _react.default.createElement("div", {
              className: 'collapsible-nav'
            }, navigateBack && _react.default.createElement(_icons.IconButton, {
              className: 'md',
              icon: 'backArrow',
              onClick: navigateBack
            }), _react.default.createElement("span", null, _react.default.createElement(Title, {
              content: title
            }), subtitle && _react.default.createElement("h3", null, subtitle))), _react.default.createElement("div", {
              className: 'collapsible-actions'
            }, actions, children && _react.default.createElement(_icons.IconButton, {
              className: btnCls,
              icon: 'expandMore',
              onClick: handleCollapse
            }))), _react.default.createElement("div", {
              className: cls
            }, children && _react.default.createElement("section", {
              className: 'collapsible-content'
            }, children)));
          };
          exports.CollapsibleHeader = CollapsibleHeader;
          const Title = ({
            content
          }) => typeof content === 'string' ? _react.default.createElement("h1", null, content) : content;
        }
      });

      /************************************
      INTERNAL MODULE: ./confirmation-modal
      ************************************/

      ims.set('./confirmation-modal', {
        hash: 4275696560,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationModal = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          const ConfirmationModal = _react.default.forwardRef((props, ref) => {
            const {
              content,
              cancel,
              submit
            } = props;
            return _react.default.createElement("dialog", {
              ref: ref,
              className: 'confirmation-modal'
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              onClick: cancel
            }), _react.default.createElement("header", null, _react.default.createElement("h1", null, "Atention!")), _react.default.createElement("p", null, content), _react.default.createElement("footer", null, _react.default.createElement(_form.Button, {
              icon: 'close-circle',
              variant: 'link outline',
              onClick: cancel
            }, "Cancel"), _react.default.createElement(_form.Button, {
              icon: 'save',
              variant: 'primary',
              onClick: submit
            }, "Submit")));
          });
          exports.ConfirmationModal = ConfirmationModal;
        }
      });

      /*****************************
      INTERNAL MODULE: ./icon-button
      *****************************/

      ims.set('./icon-button', {
        hash: 505396687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LabeledIconButton = void 0;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          /* bundle */
          const LabeledIconButton = React.forwardRef((props, ref) => {
            const {
              icon,
              label,
              ...rest
            } = props;
            return React.createElement(_form.Button, {
              ref: ref,
              label: React.createElement("div", {
                className: 'icon-button'
              }, React.createElement(_icons.Icon, {
                icon: icon
              }), label),
              ...rest
            });
          });
          exports.LabeledIconButton = LabeledIconButton;
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 2709937976,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = void 0;
          var React = require("react");
          /* bundle */
          const Input = ({
            name,
            label,
            disabled,
            className,
            ...rest
          }) => {
            return React.createElement("div", {
              className: `input-wrapper ${className} `
            }, React.createElement("input", {
              name: name,
              disabled: disabled,
              ...rest
            }), !disabled && React.createElement("label", {
              htmlFor: name
            }, label));
          };
          exports.Input = Input;
        }
      });

      /*************************
      INTERNAL MODULE: ./loading
      *************************/

      ims.set('./loading', {
        hash: 477427642,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Loading = void 0;
          var _react = require("react");
          var _spinner = require("pragmate-ui/spinner");
          /* bundle */
          const Loading = () => {
            return _react.default.createElement("div", {
              className: "spinner-container"
            }, _react.default.createElement(_spinner.Spinner, {
              className: "spinner",
              type: "primary",
              active: true
            }));
          };
          exports.Loading = Loading;
        }
      });

      /**************************
      INTERNAL MODULE: ./pre-load
      **************************/

      ims.set('./pre-load', {
        hash: 2567925015,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PreloadScreen = PreloadScreen;
          var React = require("react");
          var _spinner = require("pragmate-ui/spinner");
          /* bundle */
          function PreloadScreen() {
            return React.createElement("div", {
              className: 'preload-screen active'
            }, React.createElement(_spinner.Spinner, {
              active: true
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./theme-button
      ******************************/

      ims.set('./theme-button', {
        hash: 3429670935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitcher = ThemeSwitcher;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function ThemeSwitcher({
            fetching
          }) {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ?? defaultTheme;
            const [icon, setIcon] = React.useState(userTheme === 'dark' ? 'sun' : 'moon');
            function handleChange(e) {
              e.preventDefault();
              const container = document.querySelector('html');
              const theme = icon === 'sun' ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              setIcon(theme === 'dark' ? 'sun' : 'moon');
            }
            React.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            return React.createElement("div", {
              className: 'sidebar-item theme-switcher',
              onClick: handleChange
            }, React.createElement(_icons.Icon, {
              icon: icon,
              disabled: fetching,
              onClick: handleChange
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./chat/playable",
        "from": "Playable",
        "name": "Playable"
      }, {
        "im": "./chat/player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./collapsible",
        "from": "CollapsibleHeader",
        "name": "CollapsibleHeader"
      }, {
        "im": "./confirmation-modal",
        "from": "ConfirmationModal",
        "name": "ConfirmationModal"
      }, {
        "im": "./icon-button",
        "from": "LabeledIconButton",
        "name": "LabeledIconButton"
      }, {
        "im": "./input",
        "from": "Input",
        "name": "Input"
      }, {
        "im": "./loading",
        "from": "Loading",
        "name": "Loading"
      }, {
        "im": "./pre-load",
        "from": "PreloadScreen",
        "name": "PreloadScreen"
      }, {
        "im": "./theme-button",
        "from": "ThemeSwitcher",
        "name": "ThemeSwitcher"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Playable') && _export("Playable", Playable = require ? require('./chat/playable').Playable : value);
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./chat/player').AudioPlayer : value);
        (require || prop === 'CollapsibleHeader') && _export("CollapsibleHeader", CollapsibleHeader = require ? require('./collapsible').CollapsibleHeader : value);
        (require || prop === 'ConfirmationModal') && _export("ConfirmationModal", ConfirmationModal = require ? require('./confirmation-modal').ConfirmationModal : value);
        (require || prop === 'LabeledIconButton') && _export("LabeledIconButton", LabeledIconButton = require ? require('./icon-button').LabeledIconButton : value);
        (require || prop === 'Input') && _export("Input", Input = require ? require('./input').Input : value);
        (require || prop === 'Loading') && _export("Loading", Loading = require ? require('./loading').Loading : value);
        (require || prop === 'PreloadScreen') && _export("PreloadScreen", PreloadScreen = require ? require('./pre-load').PreloadScreen : value);
        (require || prop === 'ThemeSwitcher') && _export("ThemeSwitcher", ThemeSwitcher = require ? require('./theme-button').ThemeSwitcher : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksQ0FBQyxrQkFBa0IsRUFBRVgsS0FBSyxDQUFDO2NBQ2pESSxZQUFZLENBQUNRLE9BQU8sQ0FBQyxPQUFPLEVBQUVaLEtBQUssQ0FBQztjQUNwQ1EsT0FBTyxDQUFDUixLQUFLLEtBQUssTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDM0M7WUFFQXRKLEtBQUssQ0FBQ3dFLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQ2lGLFlBQVksRUFBRTtjQUNuQixNQUFNTyxTQUFTLEdBQUc1SixRQUFRLENBQUM0QixhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hEZ0ksU0FBUyxDQUFDQyxZQUFZLENBQUMsa0JBQWtCLEVBQUVSLFlBQVksQ0FBQztZQUN6RCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQ3pKO2NBQUt1QyxTQUFTLEVBQUMsNkJBQTZCO2NBQUNqQixPQUFPLEVBQUV5STtZQUFZLEdBQ2pFL0osb0JBQUMySSxXQUFJO2NBQUNsRyxJQUFJLEVBQUVBLElBQUk7Y0FBRXFHLFFBQVEsRUFBRU8sUUFBUTtjQUFFL0gsT0FBTyxFQUFFeUk7WUFBWSxFQUFJLENBQzFEO1VBRVIiLCJuYW1lcyI6WyJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsIlJlYWN0IiwidXNlUmVmIiwicG9seWZpbGwiLCJ0ZXh0QXJlYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsIm9uQ2xpY2siLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3BhbiIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJlIiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsImljb24iLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJQcmlzbSIsImhpZ2hsaWdodCIsImxhbmd1YWdlcyIsImphdmFzY3JpcHQiLCJjbHMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIlBsYXlhYmxlIiwiY29udGVudCIsImF1dG9wbGF5IiwicGxheWVyIiwib25DbGlja1dvcmQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJjdXRJbmRleCIsInNldEN1dEluZGV4IiwibWFyayIsImJsb2NrcyIsInNwbGl0IiwiZmlsdGVyIiwiYmxvY2siLCJ0cmltIiwibWFwIiwiaXNDb2RlIiwic3RhcnRzV2l0aCIsInVzZUVmZmVjdCIsInBsYXlhYmxlQ29udGVudCIsIml0ZW0iLCJwbGF5Iiwiam9pbiIsInJlbW92ZUhpZ2hsaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRXb3JkIiwicG9zaXRpb25Ub0N1dCIsInNlZ21lbnRUb0N1dCIsInNsaWNlIiwibGVuZ3RoIiwiZmluYWxQb3NpdGlvbiIsImVuZE9mV29yZEluZGV4IiwiaW5kZXhPZiIsInNlZ21lbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRhaW5zIiwiaW5kZXgiLCJ3b3Jkc0FycmF5IiwidGV4dFRvUGxheSIsInBhcnNlSW50Iiwib3V0cHV0IiwiaSIsImNyZWF0ZVNwYW4iLCJ3b3JkIiwia2V5IiwicmVwbGFjZUFsbCIsIkF1ZGlvUGxheWVyIiwic3JjIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJ0eXBlIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwibmF2aWdhdGVCYWNrIiwiYWN0aW9ucyIsImlzQ29sbGFwc2VkIiwic2V0SXNDb2xsYXBzZWQiLCJoYW5kbGVDb2xsYXBzZSIsImJ0bkNscyIsIm1lbnVDbHMiLCJUaXRsZSIsImV4cG9ydHMiLCJDb25maXJtYXRpb25Nb2RhbCIsImZvcndhcmRSZWYiLCJwcm9wcyIsImNhbmNlbCIsInN1Ym1pdCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJMYWJlbGVkSWNvbkJ1dHRvbiIsImxhYmVsIiwicmVzdCIsIkljb24iLCJJbnB1dCIsIm5hbWUiLCJkaXNhYmxlZCIsImh0bWxGb3IiLCJMb2FkaW5nIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByZWxvYWRTY3JlZW4iLCJUaGVtZVN3aXRjaGVyIiwiZmV0Y2hpbmciLCJ0aGVtZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidGhlbWVTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsInNldEljb24iLCJoYW5kbGVDaGFuZ2UiLCJjb250YWluZXIiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2NoYXQvY2xpcGJvYXJkLnRzeCIsImNvZGUvdHMvY2hhdC9jb2RlLnRzeCIsImNvZGUvdHMvY2hhdC9wbGF5YWJsZS50c3giLCJjb2RlL3RzL2NoYXQvcGxheWVyLnRzeCIsImNvZGUvdHMvY29sbGFwc2libGUudHN4IiwiY29kZS90cy9jb25maXJtYXRpb24tbW9kYWwudHN4IiwiY29kZS90cy9pY29uLWJ1dHRvbi50c3giLCJjb2RlL3RzL2lucHV0LnRzeCIsImNvZGUvdHMvbG9hZGluZy50c3giLCJjb2RlL3RzL3ByZS1sb2FkLnRzeCIsImNvZGUvdHMvdGhlbWUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19