System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.37/icons", "prismjs@1.29.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, PlayerButton, parseText, Playable, __beyond_pkg, hmr;
  _export({
    PlayerButton: void 0,
    parseText: void 0,
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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.2"]]);
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

      /*******************************
      INTERNAL MODULE: ./parse-content
      *******************************/

      ims.set('./parse-content', {
        hash: 4025566980,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.parseText = void 0;
          const hashContent = content => {
            let hash = 0,
              i,
              chr;
            for (i = 0; i < content.length; i++) {
              chr = content.charCodeAt(i);
              hash = (hash << 5) - hash + chr;
              hash |= 0; // Convertir a entero de 32 bits
            }

            return hash.toString();
          };
          const cache = {};
          /*bundle*/
          const parseText = content => {
            if (!content) return [[], ''];
            const key = hashContent(content);
            if (key in cache) {
              return cache[key];
            }
            if (!content) {
              cache[key] = [[], ''];
              return [[], ''];
            }
            const result = content.split(/(```[\s\S]*?```|`[\s\S]*?`)/).filter(block => block.trim() !== '').map(block => ({
              content: block,
              isCode: block.startsWith('```') || block.startsWith('`')
            }));
            const playable = result.filter(item => !item.isCode).map(item => item.content).join(' ');
            cache[key] = [result, playable];
            return cache[key];
          };
          exports.parseText = parseText;
        }
      });

      /**************************
      INTERNAL MODULE: ./playable
      **************************/

      ims.set('./playable', {
        hash: 1989624654,
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
          var _parseContent = require("./parse-content");
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
            const [blocks] = (0, _parseContent.parseText)(content);
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
        hash: 2944344229,
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
        "im": "./parse-content",
        "from": "parseText",
        "name": "parseText"
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
        (require || prop === 'parseText') && _export("parseText", parseText = require ? require('./parse-content').parseText : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiUGxheWVyQnV0dG9uIiwicHJvcHMiLCJwbGF5ZXIiLCJpZCIsImNvbnRlbnQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJhcHBseSIsImljb24iLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJjbGFzc05hbWUiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJQcmlzbSIsIl9jbGlwYm9hcmQiLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJoYXNoQ29udGVudCIsImhhc2giLCJpIiwiY2hyIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwiY2FjaGUiLCJwYXJzZVRleHQiLCJrZXkiLCJyZXN1bHQiLCJzcGxpdCIsImZpbHRlciIsImJsb2NrIiwidHJpbSIsIm1hcCIsImlzQ29kZSIsInN0YXJ0c1dpdGgiLCJwbGF5YWJsZSIsIml0ZW0iLCJqb2luIiwiZXhwb3J0cyIsIl9ob29rcyIsIl9ob29rczIiLCJfY29kZSIsIl91c2VCb3VuZGFyeSIsIl9wYXJzZUNvbnRlbnQiLCJQbGF5YWJsZUNvbXBvbmVudCIsIm9uQ2xpY2tXb3JkIiwibWFyayIsInVzZU1hcmtlZCIsImF1dG9wbGF5IiwicmVtb3ZlSGlnaGxpZ2h0IiwidXNlQm91bmRhcnkiLCJibG9ja3MiLCJ1c2VFZmZlY3QiLCJwbGF5YWJsZUNvbnRlbnQiLCJ1c2VCaW5kZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRhaW5zIiwid29yZCIsIndvcmRzQXJyYXkiLCJ0ZXh0VG9QbGF5Iiwic2xpY2UiLCJwYXJzZUludCIsInRleHRJZCIsIm91dHB1dCIsInVzZU1lbW8iLCJjcmVhdGVTcGFuIiwiaW5kZXgiLCJyZXBsYWNlQWxsIiwiUGxheWFibGUiLCJtZW1vIiwic2V0VGV4dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRXb3JkIiwic2VnbWVudFRvQ3V0IiwiZmluYWxQb3NpdGlvbiIsInNlZ21lbnQiXSwic291cmNlcyI6WyIvdHMvYnV0dG9uL1BsYXllckJ1dHRvbi50c3giLCIvdHMvY2xpcGJvYXJkLnRzeCIsIi90cy9jb2RlLnRzeCIsIi90cy9wYXJzZS1jb250ZW50LnRzIiwiL3RzL3BsYXlhYmxlLnRzeCIsIi90cy91c2VCb3VuZGFyeS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxH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