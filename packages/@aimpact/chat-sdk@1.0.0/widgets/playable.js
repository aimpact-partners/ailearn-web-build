System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.37/icons", "prismjs@1.29.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, PlayerButton, Playable, __beyond_pkg, hmr;
  _export({
    PlayerButton: void 0,
    Playable: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0037Icons) {
      dependency_3 = _pragmateUi0037Icons;
    }, function (_prismjs) {
      dependency_4 = _prismjs;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_5 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_6 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.0/widgets/playable"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['prismjs', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['@aimpact/chat/shared/hooks', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.0.0/widgets/playable');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./button/PlayerButton
      *************************************/
      ims.set('./button/PlayerButton', {
        hash: 2994120359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PlayerButton = PlayerButton;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /*bundle */
          function PlayerButton(props) {
            const {
              player,
              id,
              content
            } = props;
            const [action, setAction] = _react.default.useState('stop');
            const [processing, setProcessing] = _react.default.useState(false);
            const onPlay = async ({
              listen
            }) => {
              setAction('play');
              player.positionToCut = 0;
              await player.play(content, id);
            };
            const onPause = async ({
              listen
            }) => {
              await player.stop();
              setAction('stop');
              setProcessing(false);
            };
            const apply = id === player.id;
            const icon = apply || action === 'play' ? 'stop' : 'play';
            const onClick = apply || action === 'play' ? onPause : onPlay;
            return _react.default.createElement(_icons.IconButton, {
              onClick: onClick,
              "data-listen": 'api',
              icon: icon,
              className: 'lg'
            });
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./clipboard
      ***************************/

      ims.set('./clipboard', {
        hash: 235325129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Clipboard = Clipboard;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function Clipboard({
            text,
            message
          }) {
            const ref = _react.default.useRef(null);
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
                console.error('some error', e);
              }
            };
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: 'clipboard__container',
              "data-text": text,
              ref: ref,
              onClick: onClick
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'copy'
            }), _react.default.createElement("span", {
              className: 'action-copied'
            }, "Copied")));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./code
      **********************/

      ims.set('./code', {
        hash: 700390424,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Code = Code;
          var _react = require("react");
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
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("pre", null, _react.default.createElement("code", {
              className: `regular__code language-${language}`,
              dangerouslySetInnerHTML: createMarkup()
            })), clipboard && _react.default.createElement(_clipboard.Clipboard, {
              text: children,
              message: ''
            }));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./playable
      **************************/

      ims.set('./playable', {
        hash: 267553883,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Playable = void 0;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _code = require("./code");
          var _useBoundary = require("./useBoundary");
          function PlayableComponent({
            id,
            playable = true,
            content,
            player,
            onClickWord
          }) {
            const mark = (0, _hooks2.useMarked)();
            let autoplay = false;
            const {
              ref,
              text,
              removeHighlight
            } = (0, _useBoundary.useBoundary)(id, player, content);
            /**
             * Split the text into blocks of code and text.
             */
            const blocks = _react.default.useMemo(() => {
              if (!playable) return [];
              return content.split(/(```[\s\S]*?```|`[\s\S]*?`)/).filter(block => block.trim() !== '').map(block => {
                const content = block.trim();
                return {
                  content,
                  isCode: content.startsWith('```') || content.startsWith('`')
                };
              });
            }, [content, playable]);
            _react.default.useEffect(() => {
              if (!playable) return;
              const playableContent = blocks.filter(item => !item.isCode);
              if (autoplay) player.play(playableContent.map(item => item.content).join(' '));
            }, [autoplay, playable]);
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const onClick = event => {
              event.preventDefault();
              event.stopPropagation();
              if (event.target.classList.contains('word')) {
                const index = event.target.dataset.index;
                const word = event.target.dataset.word;
                const wordsArray = text.split(' ');
                const textToPlay = wordsArray.slice(word).join(' ');
                player.positionToCut = parseInt(word);
                player.textId = id;
                player.play(textToPlay);
                if (onClickWord) onClickWord();
                // Implement your logic for playing the text from the clicked word to the end here.
              }
            };

            const output = _react.default.useMemo(() => {
              if (!playable) {
                const output = mark(content);
                return _react.default.createElement("div", {
                  className: 'message-text__container word',
                  dangerouslySetInnerHTML: {
                    __html: output
                  }
                });
              }
              return blocks.map((block, i) => {
                const createSpan = (word, index) => `<span data-word="${index}" data-index="${index}${i}" class="word">${word}</span>`;
                if (block.isCode) {
                  return _react.default.createElement(_code.Code, {
                    key: `code-${i}`
                  }, block.content.replaceAll('`', ''));
                }
                const content = mark(block.content.split(' ').map(createSpan).join(' '));
                //content = mark(block.content);
                return _react.default.createElement("div", {
                  key: `content-${i}`,
                  "data-block": i,
                  className: 'message-text__container',
                  onClick: onClick,
                  dangerouslySetInnerHTML: {
                    __html: content
                  }
                });
              });
            }, [content, playable]);
            return _react.default.createElement("div", {
              ref: ref
            }, output);
          }
          /* bundle */
          const Playable = _react.default.memo(PlayableComponent);
          exports.Playable = Playable;
        }
      });

      /*****************************
      INTERNAL MODULE: ./useBoundary
      *****************************/

      ims.set('./useBoundary', {
        hash: 2666667273,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBoundary = useBoundary;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function useBoundary(id, player, content) {
            const ref = _react.default.useRef(null);
            const [text, setText] = _react.default.useState(content ?? '');
            const removeHighlight = () => {
              ref.current.querySelectorAll('.highlight').forEach(element => element.classList.remove('highlight'));
            };
            (0, _hooks.useBinder)([player], () => {
              console.log('use', id, player.textId);
              if (id !== player.textId) return;
              const currentIndex = player.currentWord;
              const block = ref.current.querySelector('.message-text__container')?.dataset.block;
              if (player.positionToCut > 0) {
                const segmentToCut = player.text.slice(0, currentIndex).split(' ').length - 1;
                const finalPosition = player.positionToCut + segmentToCut;
                removeHighlight();
                if (!ref.current.querySelector(`[data-index="${finalPosition}"]`)) return;
                ref.current.querySelector(`[data-index="${finalPosition}"]`).classList.add('highlight');
                return;
              }
              const segment = text.slice(0, currentIndex);
              const position = segment.split(' ').length - 1;
              removeHighlight();
              ref.current.querySelector(`[data-index="${position}${block}"]`).classList.add('highlight');
            }, 'boundary');
            return {
              ref,
              text,
              removeHighlight
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./button/PlayerButton",
        "from": "PlayerButton",
        "name": "PlayerButton"
      }, {
        "im": "./playable",
        "from": "Playable",
        "name": "Playable"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'PlayerButton') && _export("PlayerButton", PlayerButton = require ? require('./button/PlayerButton').PlayerButton : value);
        (require || prop === 'Playable') && _export("Playable", Playable = require ? require('./playable').Playable : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiUGxheWVyQnV0dG9uIiwicHJvcHMiLCJwbGF5ZXIiLCJpZCIsImNvbnRlbnQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJhcHBseSIsImljb24iLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJjbGFzc05hbWUiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJQcmlzbSIsIl9jbGlwYm9hcmQiLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfaG9va3MiLCJfaG9va3MyIiwiX2NvZGUiLCJfdXNlQm91bmRhcnkiLCJQbGF5YWJsZUNvbXBvbmVudCIsInBsYXlhYmxlIiwib25DbGlja1dvcmQiLCJtYXJrIiwidXNlTWFya2VkIiwiYXV0b3BsYXkiLCJyZW1vdmVIaWdobGlnaHQiLCJ1c2VCb3VuZGFyeSIsImJsb2NrcyIsInVzZU1lbW8iLCJzcGxpdCIsImZpbHRlciIsImJsb2NrIiwidHJpbSIsIm1hcCIsImlzQ29kZSIsInN0YXJ0c1dpdGgiLCJ1c2VFZmZlY3QiLCJwbGF5YWJsZUNvbnRlbnQiLCJpdGVtIiwiam9pbiIsInVzZUJpbmRlciIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGFpbnMiLCJpbmRleCIsIndvcmQiLCJ3b3Jkc0FycmF5IiwidGV4dFRvUGxheSIsInNsaWNlIiwicGFyc2VJbnQiLCJ0ZXh0SWQiLCJvdXRwdXQiLCJpIiwiY3JlYXRlU3BhbiIsImtleSIsInJlcGxhY2VBbGwiLCJQbGF5YWJsZSIsIm1lbW8iLCJleHBvcnRzIiwic2V0VGV4dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRXb3JkIiwic2VnbWVudFRvQ3V0IiwibGVuZ3RoIiwiZmluYWxQb3NpdGlvbiIsInNlZ21lbnQiXSwic291cmNlcyI6WyIvdHMvYnV0dG9uL1BsYXllckJ1dHRvbi50c3giLCIvdHMvY2xpcGJvYXJkLnRzeCIsIi90cy9jb2RlLnRzeCIsIi90cy9wbGF5YWJsZS50c3giLCIvdHMvdXNlQm91bmRhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNPO1VBQVcsU0FBVUUsWUFBWUEsQ0FBQ0MsS0FBSztZQUM3QyxNQUFNO2NBQUVDLE1BQU07Y0FBRUMsRUFBRTtjQUFFQztZQUFPLENBQUUsR0FBR0gs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