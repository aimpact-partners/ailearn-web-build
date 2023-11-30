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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.18"]]);
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
        hash: 875828011,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Playable = void 0;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
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
            const mark = (0, _hooks2.useMarked)();
            const [blocks, playableContent] = (0, _parseContent.parseText)(id, mark(content), ACTIONS);
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
        hash: 2441909481,
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
        hash: 1729126614,
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
              ref.current.querySelector(`[data-index="${finalPosition}"]`)?.classList.add('highlight');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiUGxheWVyQnV0dG9uIiwicHJvcHMiLCJwbGF5ZXIiLCJpZCIsImNvbnRlbnQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJhcHBseSIsImljb24iLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJjbGFzc05hbWUiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJQcmlzbSIsIl9jbGlwYm9hcmQiLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJ2YWxpZGF0ZVRvb2xzIiwiRXJyb3IiLCJyZWdleCIsIm91dHB1dEFycmF5IiwicHJldmlvdXNJbmRleCIsIm1hdGNoIiwibWF0Y2hBbGwiLCJmdWxsTWF0Y2giLCJpbm5lckNvbnRlbnQiLCJwcmVjZWRpbmdUZXh0Iiwic2xpY2UiLCJpbmRleCIsInB1c2giLCJ0eXBlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsInJlbWFpbmluZ1RleHQiLCJjYWNoZSIsInBhcnNlVGV4dCIsImtleSIsIkFDVElPTlMiLCJpbml0aWFsIiwiZWxlbWVudHMiLCJhY3Rpb25zIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmNsdWRlcyIsInJlc3VsdCIsInNwbGl0IiwiZmlsdGVyIiwiYmxvY2siLCJ0cmltIiwibWFwIiwic3RhcnRzV2l0aCIsInBsYXlhYmxlIiwiam9pbiIsImV4cG9ydHMiLCJfaG9va3MiLCJfaG9va3MyIiwiX3VzZUJvdW5kYXJ5IiwiX3BhcnNlQ29udGVudCIsIl9pdGVtIiwiTWFwIiwiUGxheWFibGVDb21wb25lbnQiLCJ0b29sVGV4dHMiLCJvbkNsaWNrV29yZCIsImF1dG9wbGF5IiwibWFyayIsInVzZU1hcmtlZCIsImJsb2NrcyIsInBsYXlhYmxlQ29udGVudCIsInJlbW92ZUhpZ2hsaWdodCIsInVzZUJvdW5kYXJ5IiwidXNlRWZmZWN0IiwidXNlQmluZGVyIiwiZmluYWxCbG9ja3MiLCJvdXRwdXQiLCJyZXNwb25zZSIsImkiLCJQbGF5YWJsZUl0ZW0iLCJQbGF5YWJsZSIsIm1lbW8iLCJfY29kZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGFpbnMiLCJ3b3JkIiwid29yZHNBcnJheSIsInRleHRUb1BsYXkiLCJwYXJzZUludCIsInRleHRJZCIsImF0dHJzIiwicmVwbGFjZUFsbCIsImNyZWF0ZVNwYW4iLCJzZXRUZXh0IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50V29yZCIsImZpbmFsUG9zaXRpb24iLCJzZWdtZW50VG9DdXQiLCJzZWdtZW50Il0sInNvdXJjZXMiOlsiL3RzL2J1dHRvbi9QbGF5ZXJCdXR0b24udHN4IiwiL3RzL2NsaXBib2FyZC50c3giLCIvdHMvY29kZS50c3giLCIvdHMvcGFyc2UtY29udGVudC50cyIsIi90cy9wbGF5YWJsZS9pbmRleC50c3giLCIvdHMvcGxheWFibGUvaXRlbS50c3giLCIvdHMvdXNlLWJvdW5kYXJ5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNPO1VBQVcsU0FBVUUsWUFBWUEsQ0FBQ0MsS0FBSztZQUM3QyxNQUFNO2NBQUVDLE1BQU07Y0FBRUMsRUFBRTtjQUFFQztZQUFPLENBQUUsR0FBR0gsS0FBSztZQUNyQyxNQUFNLENBQUNJLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdULE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2xELE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR2IsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTUcsTUFBTSxHQUFHLE1BQUFBLENBQU87Y0FBRUM7WUFBTSxDQUFFLEtBQUk7Y0FDbkNOLFNBQVMsQ0FBQyxNQUFNLENBQUM7Y0FDakJKLE1BQU0sQ0FBQ1csYUFBYSxHQUFHLENBQUM7Y0FDeEIsTUFBTVgsTUFBTSxDQUFDWSxJQUFJLENBQUNWLE9BQU8sRUFBRUQsRUFBRSxDQUFDO1lBQy9CLENBQUM7WUFDRCxNQUFNWSxPQUFPLEdBQUcsTUFBQUEsQ0FBTztjQUFFSDtZQUFNLENBQUUsS0FBSTtjQUNwQyxNQUFNVixNQUFNLENBQUNjLElBQUksRUFBRTtjQUNuQlYsU0FBUyxDQUFDLE1BQU0sQ0FBQztjQUNqQkksYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyQixDQUFD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