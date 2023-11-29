System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/icons", "prismjs@1.29.0", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_5 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_6 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.15"]]);
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
        hash: 1814820268,
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
        hash: 1570986200,
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
            toolTexts,
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
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const finalBlocks = blocks.filter(item => !ACTIONS.includes(item.type));
            const output = (() => {
              const response = finalBlocks.map((block, i) => _react.default.createElement(_item.PlayableItem, {
                key: `content-${i}`,
                onClickWord: onClickWord,
                text: text,
                block: block,
                index: i,
                id: id,
                playable: playable,
                player: player
              }));
              // return getContent(id, finalBlocks, attrs);
              return response;
            })();
            return _react.default.createElement("div", {
              ref: ref
            }, output);
          }
          /* bundle */
          const Playable = exports.Playable = _react.default.memo(PlayableComponent);
        }
      });

      /*******************************
      INTERNAL MODULE: ./playable/item
      *******************************/

      ims.set('./playable/item', {
        hash: 2210567842,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PlayableItem = void 0;
          var _react = require("react");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _code = require("../code");
          const PlayableItem = exports.PlayableItem = _react.default.memo(function ({
            block,
            text,
            id,
            index,
            playable,
            player,
            onClickWord
          }) {
            const mark = (0, _hooks.useMarked)();
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
            const createSpan = (word, index) => `<span data-word="${index}" data-index="${index}${index}" class="word">${word}</span>`;
            // const content = mark(block.content).split(' ').map(createSpan).join(' ');
            const content = block.content.split(' ').map(createSpan).join(' ');
            // const content = block.content;
            return _react.default.createElement("div", {
              key: `content-${index}`,
              "data-block": index,
              className: 'message-text__container',
              ...attrs,
              dangerouslySetInnerHTML: {
                __html: content
              }
            });
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./use-boundary
      ******************************/

      ims.set('./use-boundary', {
        hash: 316195589,
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
              console.log(4.12);
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
              const segment = text.slice(0, currentIndex);
              const position = segment.split(' ').length - 1;
              finalPosition = `${position}${block}`;
              removeHighlight();
              ref.current.querySelector(`[data-index="${finalPosition}"]`).classList.add('highlight');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiUGxheWVyQnV0dG9uIiwicHJvcHMiLCJwbGF5ZXIiLCJpZCIsImNvbnRlbnQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJhcHBseSIsImljb24iLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJjbGFzc05hbWUiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJQcmlzbSIsIl9jbGlwYm9hcmQiLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJ2YWxpZGF0ZVRvb2xzIiwiRXJyb3IiLCJyZWdleCIsIm91dHB1dEFycmF5IiwicHJldmlvdXNJbmRleCIsIm1hdGNoIiwibWF0Y2hBbGwiLCJmdWxsTWF0Y2giLCJpbm5lckNvbnRlbnQiLCJwcmVjZWRpbmdUZXh0Iiwic2xpY2UiLCJpbmRleCIsInB1c2giLCJ0eXBlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsInJlbWFpbmluZ1RleHQiLCJjYWNoZSIsInBhcnNlVGV4dCIsImtleSIsIkFDVElPTlMiLCJpbml0aWFsIiwiZWxlbWVudHMiLCJhY3Rpb25zIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmNsdWRlcyIsInJlc3VsdCIsInNwbGl0IiwiZmlsdGVyIiwiYmxvY2siLCJ0cmltIiwibWFwIiwic3RhcnRzV2l0aCIsInBsYXlhYmxlIiwiam9pbiIsImV4cG9ydHMiLCJfaG9va3MiLCJfdXNlQm91bmRhcnkiLCJfcGFyc2VDb250ZW50IiwiX2l0ZW0iLCJNYXAiLCJQbGF5YWJsZUNvbXBvbmVudCIsInRvb2xUZXh0cyIsIm9uQ2xpY2tXb3JkIiwiYXV0b3BsYXkiLCJibG9ja3MiLCJwbGF5YWJsZUNvbnRlbnQiLCJyZW1vdmVIaWdobGlnaHQiLCJ1c2VCb3VuZGFyeSIsInVzZUVmZmVjdCIsInVzZUJpbmRlciIsImZpbmFsQmxvY2tzIiwib3V0cHV0IiwicmVzcG9uc2UiLCJpIiwiUGxheWFibGVJdGVtIiwiUGxheWFibGUiLCJtZW1vIiwiX2NvZGUiLCJtYXJrIiwidXNlTWFya2VkIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjb250YWlucyIsIndvcmQiLCJ3b3Jkc0FycmF5IiwidGV4dFRvUGxheSIsInBhcnNlSW50IiwidGV4dElkIiwiYXR0cnMiLCJyZXBsYWNlQWxsIiwiY3JlYXRlU3BhbiIsInNldFRleHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRXb3JkIiwiZmluYWxQb3NpdGlvbiIsInNlZ21lbnRUb0N1dCIsInNlZ21lbnQiXSwic291cmNlcyI6WyIvdHMvYnV0dG9uL1BsYXllckJ1dHRvbi50c3giLCIvdHMvY2xpcGJvYXJkLnRzeCIsIi90cy9jb2RlLnRzeCIsIi90cy9wYXJzZS1jb250ZW50LnRzIiwiL3RzL3BsYXlhYmxlL2luZGV4LnRzeCIsIi90cy9wbGF5YWJsZS9pdGVtLnRzeCIsIi90cy91c2UtYm91bmRhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ087VUFBVyxTQUFVRSxZQUFZQSxDQUFDQyxLQUFLO1lBQzdDLE1BQU07Y0FBRUMsTUFBTTtjQUFFQyxFQUFFO2NBQUVDO1lBQU8sQ0FBRSxHQUFHSCxLQUFLO1lBQ3JDLE1BQU0sQ0FBQ0ksTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR1QsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEQsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHYixNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNRyxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFQztZQUFNLENBQUUsS0FBSTtjQUNuQ04sU0FBUyxDQUFDLE1BQU0sQ0FBQztjQUNqQkosTUFBTSxDQUFDVyxhQUFhLEdBQUcsQ0FBQztjQUN4QixNQUFNWCxNQUFNLENBQUNZLElBQUksQ0FBQ1YsT0FBTyxFQUFFRCxFQUFFLENBQUM7WUFDL0IsQ0FBQztZQUNELE1BQU1ZLE9BQU8sR0FBRyxNQUFBQSxDQUFPO2NBQUVIO1lBQU0sQ0FBRSxLQUFJO2NBQ3BDLE1BQU1WLE1BQU0sQ0FBQ2MsSUFBSSxFQUFFO2NBQ25CVixTQUFTLENBQUMsTUFBTSxDQUFDO2NBQ2pCSSxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxNQUFN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