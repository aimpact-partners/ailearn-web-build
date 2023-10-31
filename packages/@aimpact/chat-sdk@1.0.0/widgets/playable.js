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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.10"]]);
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
        hash: 2550701367,
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
              const result = item.value.split(/(```[\s\S]*?```|`[\s\S]*?`)/).filter(block => block.trim() !== '').map(block => ({
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

      /**************************
      INTERNAL MODULE: ./playable
      **************************/

      ims.set('./playable', {
        hash: 754314924,
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
          var _useBoundary = require("./use-boundary");
          var _parseContent = require("./parse-content");
          function PlayableComponent({
            toolTexts,
            id,
            playable = true,
            content,
            player,
            onClickWord
          }) {
            const mark = (0, _hooks2.useMarked)();
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

            const finalBlocks = blocks.filter(item => !ACTIONS.includes(item.type));
            const output = (() => {
              const attrs = playable ? {
                onClick
              } : {};
              return finalBlocks.map((block, i) => {
                const createSpan = (word, index) => `<span data-word="${index}" data-index="${index}${i}" class="word">${word}</span>`;
                if (block.type === 'code') {
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
                  ...attrs,
                  dangerouslySetInnerHTML: {
                    __html: content
                  }
                });
              });
            })();
            return _react.default.createElement("div", {
              ref: ref
            }, output);
          }
          /* bundle */
          const Playable = exports.Playable = _react.default.memo(PlayableComponent);
        }
      });

      /******************************
      INTERNAL MODULE: ./use-boundary
      ******************************/

      ims.set('./use-boundary', {
        hash: 3279561738,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiUGxheWVyQnV0dG9uIiwicHJvcHMiLCJwbGF5ZXIiLCJpZCIsImNvbnRlbnQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJhcHBseSIsImljb24iLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJjbGFzc05hbWUiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJQcmlzbSIsIl9jbGlwYm9hcmQiLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJoYXNoQ29udGVudCIsImhhc2giLCJpIiwiY2hyIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwidmFsaWRhdGVUb29scyIsIkVycm9yIiwicmVnZXgiLCJvdXRwdXRBcnJheSIsInByZXZpb3VzSW5kZXgiLCJtYXRjaCIsIm1hdGNoQWxsIiwiZnVsbE1hdGNoIiwiaW5uZXJDb250ZW50IiwicHJlY2VkaW5nVGV4dCIsInNsaWNlIiwiaW5kZXgiLCJwdXNoIiwidHlwZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJyZW1haW5pbmdUZXh0IiwiY2FjaGUiLCJwYXJzZVRleHQiLCJrZXkiLCJBQ1RJT05TIiwiaW5pdGlhbCIsImVsZW1lbnRzIiwiYWN0aW9ucyIsImZvckVhY2giLCJpdGVtIiwiaW5jbHVkZXMiLCJyZXN1bHQiLCJzcGxpdCIsImZpbHRlciIsImJsb2NrIiwidHJpbSIsIm1hcCIsInN0YXJ0c1dpdGgiLCJwbGF5YWJsZSIsImpvaW4iLCJleHBvcnRzIiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9jb2RlIiwiX3VzZUJvdW5kYXJ5IiwiX3BhcnNlQ29udGVudCIsIlBsYXlhYmxlQ29tcG9uZW50IiwidG9vbFRleHRzIiwib25DbGlja1dvcmQiLCJtYXJrIiwidXNlTWFya2VkIiwiYXV0b3BsYXkiLCJibG9ja3MiLCJwbGF5YWJsZUNvbnRlbnQiLCJyZW1vdmVIaWdobGlnaHQiLCJ1c2VCb3VuZGFyeSIsInVzZUVmZmVjdCIsInVzZUJpbmRlciIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGFpbnMiLCJ3b3JkIiwid29yZHNBcnJheSIsInRleHRUb1BsYXkiLCJwYXJzZUludCIsInRleHRJZCIsImZpbmFsQmxvY2tzIiwib3V0cHV0IiwiYXR0cnMiLCJjcmVhdGVTcGFuIiwicmVwbGFjZUFsbCIsIlBsYXlhYmxlIiwibWVtbyIsInNldFRleHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRXb3JkIiwiZmluYWxQb3NpdGlvbiIsInNlZ21lbnRUb0N1dCIsInNlZ21lbnQiXSwic291cmNlcyI6WyIvdHMvYnV0dG9uL1BsYXllckJ1dHRvbi50c3giLCIvdHMvY2xpcGJvYXJkLnRzeCIsIi90cy9jb2RlLnRzeCIsIi90cy9wYXJzZS1jb250ZW50LnRzIiwiL3RzL3BsYXlhYmxlLnRzeCIsIi90cy91c2UtYm91bmRhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNPO1VBQVcsU0FBVUUsWUFBWUEsQ0FBQ0MsS0FBSztZQUM3QyxNQUFNO2NBQUVDLE1BQU07Y0FBRUMsRUFBRTtjQUFFQztZQUFPLENBQUUsR0FBR0gsS0FBSztZQUNyQyxNQUFNLENBQUNJLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdULE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2xELE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR2IsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTUcsTUFBTSxHQUFHLE1BQUFBLENBQU87Y0FBRUM7WUFBTSxDQUFFLEtBQUk7Y0FDbkNOLFNBQVMsQ0FBQyxNQUFNLENBQUM7Y0FDakJKLE1BQU0sQ0FBQ1csYUFBYSxHQUFHLENBQUM7Y0FDeEIsTUFBTVgsTUFBTSxDQUFDWSxJQUFJLENBQUNWLE9BQU8sRUFBRUQsRUFBRSxDQUFDO1lBQy9CLENBQUM7WUFDRCxNQUFNWSxPQUFPLEdBQUcsTUFBQUEsQ0FBTztjQUFFSDtZQUFNLENBQUUsS0FBSTtjQUNwQyxNQUFNVixNQUFNLENBQUNjLElBQUksRUFBRTtjQUNuQlYsU0FBUyxDQUFDLE1BQU0sQ0FBQztjQUNqQkksYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyQixDQUFDO1lBRUQsTUFBTU8sS0FBSyxHQUFHZCxF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