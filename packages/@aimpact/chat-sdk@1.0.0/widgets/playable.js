System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/icons", "prismjs@1.29.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat-sdk@1.0.0/widgets/markdown"], function (_export, _context) {
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
    }, function (_pragmateUi003Icons) {
      dependency_3 = _pragmateUi003Icons;
    }, function (_prismjs) {
      dependency_4 = _prismjs;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_5 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_6 = _aimpactChatSdk100WidgetsMarkdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.6"], ["firebase", "10.5.0"], ["dompurify", "3.0.6"], ["prismjs", "1.29.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["socket.io-client", "4.7.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.21"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['prismjs', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['@aimpact/chat-sdk/widgets/markdown', dependency_6]]);
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

      /********************************
      INTERNAL MODULE: ./code/clipboard
      ********************************/

      ims.set('./code/clipboard', {
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

      /***************************
      INTERNAL MODULE: ./code/code
      ***************************/

      ims.set('./code/code', {
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
        hash: 1506779363,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.parseText = void 0;
          function validateTools(content) {
            if (typeof content !== 'string') {
              throw new Error('Input must be a string.');
            }
            const regex = /😸(.*?)🖋️/g;
            let outputArray = [];
            let previousIndex = 0;
            for (const match of content.matchAll(regex)) {
              const [fullMatch, innerContent] = match;
              // Push preceding text as 'string'
              const precedingText = content.slice(previousIndex, match.index);
              if (precedingText) {
                outputArray.push({
                  type: 'string',
                  value: precedingText
                });
                continue;
              }
              // Push matched text as 'tool'
              try {
                const {
                  type,
                  data
                } = JSON.parse(innerContent);
                outputArray.push({
                  type,
                  data
                });
                previousIndex = match.index + fullMatch.length;
              } catch (e) {
                console.error(e);
              }
            } // end for;
            // Push remaining text as 'string'
            const remainingText = content.slice(previousIndex);
            if (remainingText) {
              outputArray.push({
                type: 'string',
                value: remainingText
              });
            }
            return outputArray;
          }
          const cache = {};
          /**
           *
           * @param key
           * @param content
           * @param ACTIONS
           * @returns
           */
          /*bundle*/
          const parseText = (key, content, ACTIONS) => {
            if (!content) return [[], ''];
            // const key = hashContent(content);
            // Ahora puedes usar 'key' como una clave única.
            if (key in cache && cache[key][1]?.length === content.length) {
              return cache[key];
            }
            if (!content) {
              cache[key] = [[], ''];
              return [[], ''];
            }
            const initial = validateTools(content);
            let elements = [];
            const actions = [];
            initial.forEach(item => {
              if (ACTIONS.includes(item.type)) {
                actions.push(item);
                return;
              }
              const content = item.value;
              const result = content.split(/(```[\s\S]*?```|`[\s\S]*?`)/).filter(block => block.trim() !== '').map(block => ({
                content: block,
                type: block.startsWith('```') || block.startsWith('`') ? 'code' : 'text'
              }));
              elements = [...elements, ...result];
            });
            const playable = elements.filter(item => item.type === 'text').map(item => item.content).join(' ');
            cache[key] = [elements, playable, actions];
            return cache[key];
          };
          exports.parseText = parseText;
        }
      });

      /********************************
      INTERNAL MODULE: ./playable/index
      ********************************/

      ims.set('./playable/index', {
        hash: 403584792,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Playable = void 0;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _useBoundary = require("../use-boundary");
          var _parseContent = require("../parse-content");
          var _item = require("./item");
          const cache = new Map();
          function PlayableComponent({
            className,
            id,
            playable = true,
            content,
            player,
            onClickWord
          }) {
            let autoplay = false;
            const ACTIONS = ['transcription', 'fetching-tool-data', 'kb-processed-response', 'function', 'kb-response'];
            const [blocks, playableContent] = (0, _parseContent.parseText)(id, content, ACTIONS);
            const {
              ref,
              text,
              removeHighlight
            } = (0, _useBoundary.useBoundary)(id, player, playableContent);
            _react.default.useEffect(() => {
              if (!playable) return;
              const playableContent = blocks.filter(item => item.type === 'code');
              if (autoplay) player.play(playableContent.map(item => item.content).join(' '));
            }, [autoplay, playable]);
            if (!player) {
              throw new Error('Player is not defined');
            }
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const finalBlocks = blocks.filter(item => !ACTIONS.includes(item.type));
            const output = (() => {
              const response = finalBlocks.map((block, i) => _react.default.createElement(_item.PlayableItem, {
                key: `content-${i}`,
                onClickWord: onClickWord,
                text: content,
                block: block,
                index: i,
                id: id,
                playable: playable,
                player: player
              }));
              return response;
            })();
            const cls = `playable-container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, output);
          }
          /* bundle */
          const Playable = exports.Playable = _react.default.memo(PlayableComponent);
        }
      });

      /****************************************************
      INTERNAL MODULE: ./playable/interfaces/playable-props
      ****************************************************/

      ims.set('./playable/interfaces/playable-props', {
        hash: 1664916212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./playable/item
      *******************************/

      ims.set('./playable/item', {
        hash: 66337939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PlayableItem = void 0;
          var _react = require("react");
          var _code = require("../code/code");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          /**
           * A  text message can contains more than one block of text,
           * the "block" value represents the number of the block, usually the value
           * is 0 at least you have a message with code blocks.
           *
           */
          const PlayableItem = function ({
            block,
            text,
            id,
            index,
            playable,
            player,
            onClickWord
          }) {
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

            const attrs = playable ? {
              onClick
            } : {};
            if (block.type === 'code') {
              return _react.default.createElement(_code.Code, {
                key: `code-${index}`
              }, block.content.replaceAll('`', ''));
            }
            const createSpan = (word, i) => `<span data-word="${i}" data-index="${i}${index}" class="word">${word}</span>`;
            const content = block.content.split(' ').map(createSpan).join(' ');
            // const content = block.content;
            return _react.default.createElement("div", {
              key: `content-${index}`,
              "data-block": index,
              className: 'message-text__container',
              ...attrs
            }, _react.default.createElement(_markdown.Markdown, {
              content: text
            }));
          };
          exports.PlayableItem = PlayableItem;
        }
      });

      /******************************
      INTERNAL MODULE: ./use-boundary
      ******************************/

      ims.set('./use-boundary', {
        hash: 1299853782,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBoundary = useBoundary;
          var _react = require("react");
          function useBoundary(id, player, content) {
            const ref = _react.default.useRef(null);
            const [text, setText] = _react.default.useState(content ?? '');
            const removeHighlight = () => {
              ref.current.querySelectorAll('.highlight').forEach(element => element.classList.remove('highlight'));
            };
            _react.default.useEffect(() => {
              const onBoundary = () => {
                if (id !== player.textId) return;
                const currentIndex = player.currentWord;
                const block = ref.current.querySelector('.message-text__container')?.dataset.block;
                let finalPosition = `0`;
                if (player.positionToCut > 0) {
                  const segmentToCut = player.text.slice(0, currentIndex).split(' ').length - 1;
                  finalPosition = `${player.positionToCut + segmentToCut}${block}`;
                  removeHighlight();
                  if (!ref.current.querySelector(`[data-index="${finalPosition}"]`)) {
                    return;
                  }
                  ref.current.querySelector(`[data-index="${finalPosition}"]`).classList.add('highlight');
                  return;
                }
                const segment = content.slice(0, currentIndex);
                const position = segment.split(' ').length - 1;
                finalPosition = `${position}${block}`;
                removeHighlight();
                ref.current.querySelector(`[data-index="${finalPosition}"]`)?.classList.add('highlight');
              };
              player.on('boundary', onBoundary);
              return () => {
                player.off('boundary', onBoundary);
              };
            }, [content]);
            return {
              ref,
              text: content,
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
        "im": "./playable/index",
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
        (require || prop === 'Playable') && _export("Playable", Playable = require ? require('./playable/index').Playable : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiUGxheWVyQnV0dG9uIiwicHJvcHMiLCJwbGF5ZXIiLCJpZCIsImNvbnRlbnQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJhcHBseSIsImljb24iLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJjbGFzc05hbWUiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJQcmlzbSIsIl9jbGlwYm9hcmQiLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJ2YWxpZGF0ZVRvb2xzIiwiRXJyb3IiLCJyZWdleCIsIm91dHB1dEFycmF5IiwicHJldmlvdXNJbmRleCIsIm1hdGNoIiwibWF0Y2hBbGwiLCJmdWxsTWF0Y2giLCJpbm5lckNvbnRlbnQiLCJwcmVjZWRpbmdUZXh0Iiwic2xpY2UiLCJpbmRleCIsInB1c2giLCJ0eXBlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsInJlbWFpbmluZ1RleHQiLCJjYWNoZSIsInBhcnNlVGV4dCIsImtleSIsIkFDVElPTlMiLCJpbml0aWFsIiwiZWxlbWVudHMiLCJhY3Rpb25zIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmNsdWRlcyIsInJlc3VsdCIsInNwbGl0IiwiZmlsdGVyIiwiYmxvY2siLCJ0cmltIiwibWFwIiwic3RhcnRzV2l0aCIsInBsYXlhYmxlIiwiam9pbiIsImV4cG9ydHMiLCJfaG9va3MiLCJfdXNlQm91bmRhcnkiLCJfcGFyc2VDb250ZW50IiwiX2l0ZW0iLCJNYXAiLCJQbGF5YWJsZUNvbXBvbmVudCIsIm9uQ2xpY2tXb3JkIiwiYXV0b3BsYXkiLCJibG9ja3MiLCJwbGF5YWJsZUNvbnRlbnQiLCJyZW1vdmVIaWdobGlnaHQiLCJ1c2VCb3VuZGFyeSIsInVzZUVmZmVjdCIsInVzZUJpbmRlciIsImZpbmFsQmxvY2tzIiwib3V0cHV0IiwicmVzcG9uc2UiLCJpIiwiUGxheWFibGVJdGVtIiwiUGxheWFibGUiLCJtZW1vIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY29kZSIsIl9tYXJrZG93biIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGFpbnMiLCJ3b3JkIiwid29yZHNBcnJheSIsInRleHRUb1BsYXkiLCJwYXJzZUludCIsInRleHRJZCIsImF0dHJzIiwicmVwbGFjZUFsbCIsImNyZWF0ZVNwYW4iLCJNYXJrZG93biIsInNldFRleHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsIm9uQm91bmRhcnkiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50V29yZCIsImZpbmFsUG9zaXRpb24iLCJzZWdtZW50VG9DdXQiLCJzZWdtZW50Iiwib24iLCJvZmYiXSwic291cmNlcyI6WyIvdHMvYnV0dG9uL1BsYXllckJ1dHRvbi50c3giLCIvdHMvY29kZS9jbGlwYm9hcmQudHN4IiwiL3RzL2NvZGUvY29kZS50c3giLCIvdHMvcGFyc2UtY29udGVudC50cyIsIi90cy9wbGF5YWJsZS9pbmRleC50c3giLCIvcGxheWFibGUtcHJvcHMudHMiLCIvdHMvcGxheWFibGUvaXRlbS50c3giLCIvdHMvdXNlLWJvdW5kYXJ5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ087VUFBVyxTQUFVRSxZQUFZQSxDQUFDQyxLQUFLO1lBQzdDLE1BQU07Y0FBRUMsTUFBTTtjQUFFQyxFQUFFO2NBQUVDO1lBQU8sQ0FBRSxHQUFHSCxLQUFLO1lBQ3JDLE1BQU0sQ0FBQ0ksTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR1QsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEQsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHYixNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNRyxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFQztZQUFNLENBQUUsS0FBSTtjQUNuQ04sU0FBUyxDQUFDLE1BQU0sQ0FBQztjQUNqQkosTUFBTSxDQUFDVyxhQUFhLEdBQUcsQ0FBQztjQUN4QixNQUFNWCxNQUFNLENBQUNZLElBQUksQ0FBQ1YsT0FBTyxFQUFFRCxFQUFFLENBQUM7WUFDL0IsQ0FBQztZQUNELE1BQU1ZLE9BQU8sR0FBRyxNQUFBQSxDQUFPO2NBQUVIO1lBQU0sQ0FBRSxLQUFJO2NBQ3BDLE1BQU1WLE1BQU0sQ0FBQ2MsSUFBSSxF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