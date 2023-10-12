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
        hash: 3302451478,
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
          const Playable = _react.default.memo(PlayableComponent);
          exports.Playable = Playable;
        }
      });

      /*****************************
      INTERNAL MODULE: ./useBoundary
      *****************************/

      ims.set('./useBoundary', {
        hash: 3826931503,
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
              // console.log('ejecutamos', player.positionToCut, player.currentWord);
              if (player.positionToCut > 0) {
                const segmentToCut = player.text.slice(0, currentIndex).split(' ').length - 1;
                finalPosition = `${player.positionToCut + segmentToCut}${block}`;
                // const finalPosition = player.currentWord;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiUGxheWVyQnV0dG9uIiwicHJvcHMiLCJwbGF5ZXIiLCJpZCIsImNvbnRlbnQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJhcHBseSIsImljb24iLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJjbGFzc05hbWUiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJQcmlzbSIsIl9jbGlwYm9hcmQiLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJoYXNoQ29udGVudCIsImhhc2giLCJpIiwiY2hyIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwidmFsaWRhdGVUb29scyIsIkVycm9yIiwicmVnZXgiLCJvdXRwdXRBcnJheSIsInByZXZpb3VzSW5kZXgiLCJtYXRjaCIsIm1hdGNoQWxsIiwiZnVsbE1hdGNoIiwiaW5uZXJDb250ZW50IiwicHJlY2VkaW5nVGV4dCIsInNsaWNlIiwiaW5kZXgiLCJwdXNoIiwidHlwZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJyZW1haW5pbmdUZXh0IiwiY2FjaGUiLCJwYXJzZVRleHQiLCJrZXkiLCJBQ1RJT05TIiwiaW5pdGlhbCIsImVsZW1lbnRzIiwiYWN0aW9ucyIsImZvckVhY2giLCJpdGVtIiwiaW5jbHVkZXMiLCJyZXN1bHQiLCJzcGxpdCIsImZpbHRlciIsImJsb2NrIiwidHJpbSIsIm1hcCIsInN0YXJ0c1dpdGgiLCJwbGF5YWJsZSIsImpvaW4iLCJleHBvcnRzIiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9jb2RlIiwiX3VzZUJvdW5kYXJ5IiwiX3BhcnNlQ29udGVudCIsIlBsYXlhYmxlQ29tcG9uZW50IiwidG9vbFRleHRzIiwib25DbGlja1dvcmQiLCJtYXJrIiwidXNlTWFya2VkIiwiYXV0b3BsYXkiLCJibG9ja3MiLCJwbGF5YWJsZUNvbnRlbnQiLCJyZW1vdmVIaWdobGlnaHQiLCJ1c2VCb3VuZGFyeSIsInVzZUVmZmVjdCIsInVzZUJpbmRlciIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGFpbnMiLCJ3b3JkIiwid29yZHNBcnJheSIsInRleHRUb1BsYXkiLCJwYXJzZUludCIsInRleHRJZCIsImZpbmFsQmxvY2tzIiwib3V0cHV0IiwiYXR0cnMiLCJjcmVhdGVTcGFuIiwicmVwbGFjZUFsbCIsIlBsYXlhYmxlIiwibWVtbyIsInNldFRleHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRXb3JkIiwiZmluYWxQb3NpdGlvbiIsInNlZ21lbnRUb0N1dCIsInNlZ21lbnQiXSwic291cmNlcyI6WyIvdHMvYnV0dG9uL1BsYXllckJ1dHRvbi50c3giLCIvdHMvY2xpcGJvYXJkLnRzeCIsIi90cy9jb2RlLnRzeCIsIi90cy9wYXJzZS1jb250ZW50LnRzIiwiL3RzL3BsYXlhYmxlLnRzeCIsIi90cy91c2VCb3VuZGFyeS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ087VUFBVyxTQUFVRSxZQUFZQSxDQUFDQyxLQUFLO1lBQzdDLE1BQU07Y0FBRUMsTUFBTTtjQUFFQyxFQUFFO2NBQUVDO1lBQU8sQ0FBRSxHQUFHSCxLQUFLO1lBQ3JDLE1BQU0sQ0FBQ0ksTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR1QsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEQsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHYixNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNRyxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFQztZQUFNLENBQUUsS0FBSTtjQUNuQ04sU0FBUyxDQUFDLE1BQU0sQ0FBQztjQUNqQkosTUFBTSxDQUFDVyxhQUFhLEdBQUcsQ0FBQztjQUN4QixNQUFNWCxNQUFNLENBQUNZLElBQUksQ0FBQ1YsT0FBTyxFQUFFRCxFQUFFLENBQUM7WUFDL0IsQ0FBQztZQUNELE1BQU1ZLE9BQU8sR0FBRyxNQUFBQSxDQUFPO2NBQUVIO1lBQU0sQ0FBRSxLQUFJO2NBQ3BDLE1BQU1WLE1BQU0sQ0FBQ2MsSUFBSSxFQUFFO2NBQ25CVixTQUFTLENBQUMsTUFBTSxDQUFDO2NBQ2pCSSxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxNQUFNTyxLQUFLLEdBQUdkLEVB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