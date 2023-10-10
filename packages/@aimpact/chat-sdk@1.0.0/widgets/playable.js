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
        hash: 2578940075,
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
          const parseText = (key, content) => {
            if (!content) return [[], ''];
            // const key = hashContent(content);
            // Ahora puedes usar 'key' como una clave única.
            if (key in cache && cache[key][1]?.length === content.length) {
              console.log(0.4);
              return cache[key];
            }
            console.log(0.7, content);
            if (!content) {
              cache[key] = [[], ''];
              return [[], ''];
            }
            const initial = validateTools(content);
            let elements = [];
            initial.forEach(item => {
              if (['tool', 'function', 'kb-response'].includes(item.type)) {
                elements.push(item);
                return;
              }
              const result = item.value.split(/(```[\s\S]*?```|`[\s\S]*?`)/).filter(block => block.trim() !== '').map(block => ({
                content: block,
                type: block.startsWith('```') || block.startsWith('`') ? 'code' : 'text'
              }));
              elements = [...elements, ...result];
            });
            const playable = elements.filter(item => item.type === 'text').map(item => item.content).join(' ');
            cache[key] = [elements, playable];
            console.log(0.9, cache[key]);
            return cache[key];
          };
          exports.parseText = parseText;
        }
      });

      /**************************
      INTERNAL MODULE: ./playable
      **************************/

      ims.set('./playable', {
        hash: 1134475711,
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
            const [blocks, playableContent] = (0, _parseContent.parseText)(id, content);
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

            const output = (() => {
              console.log(0.91, playable);
              const attrs = playable ? {
                onClick
              } : {};
              return blocks.map((block, i) => {
                const createSpan = (word, index) => `<span data-word="${index}" data-index="${index}${i}" class="word">${word}</span>`;
                if (block.type === 'code') {
                  return _react.default.createElement(_code.Code, {
                    key: `code-${i}`
                  }, block.content.replaceAll('`', ''));
                }
                if (['tool', 'function', 'kb-response'].includes(block.type)) {
                  return _react.default.createElement("div", {
                    key: `${block.type}.${i}`,
                    className: `${block.type}`
                  }, toolTexts[block.type]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiUGxheWVyQnV0dG9uIiwicHJvcHMiLCJwbGF5ZXIiLCJpZCIsImNvbnRlbnQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJhcHBseSIsImljb24iLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJjbGFzc05hbWUiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJQcmlzbSIsIl9jbGlwYm9hcmQiLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJoYXNoQ29udGVudCIsImhhc2giLCJpIiwiY2hyIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwidmFsaWRhdGVUb29scyIsIkVycm9yIiwicmVnZXgiLCJvdXRwdXRBcnJheSIsInByZXZpb3VzSW5kZXgiLCJtYXRjaCIsIm1hdGNoQWxsIiwiZnVsbE1hdGNoIiwiaW5uZXJDb250ZW50IiwicHJlY2VkaW5nVGV4dCIsInNsaWNlIiwiaW5kZXgiLCJwdXNoIiwidHlwZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJyZW1haW5pbmdUZXh0IiwiY2FjaGUiLCJwYXJzZVRleHQiLCJrZXkiLCJpbml0aWFsIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiaXRlbSIsImluY2x1ZGVzIiwicmVzdWx0Iiwic3BsaXQiLCJmaWx0ZXIiLCJibG9jayIsInRyaW0iLCJtYXAiLCJzdGFydHNXaXRoIiwicGxheWFibGUiLCJqb2luIiwiZXhwb3J0cyIsIl9ob29rcyIsIl9ob29rczIiLCJfY29kZSIsIl91c2VCb3VuZGFyeSIsIl9wYXJzZUNvbnRlbnQiLCJQbGF5YWJsZUNvbXBvbmVudCIsInRvb2xUZXh0cyIsIm9uQ2xpY2tXb3JkIiwibWFyayIsInVzZU1hcmtlZCIsImF1dG9wbGF5IiwiYmxvY2tzIiwicGxheWFibGVDb250ZW50IiwicmVtb3ZlSGlnaGxpZ2h0IiwidXNlQm91bmRhcnkiLCJ1c2VFZmZlY3QiLCJ1c2VCaW5kZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRhaW5zIiwid29yZCIsIndvcmRzQXJyYXkiLCJ0ZXh0VG9QbGF5IiwicGFyc2VJbnQiLCJ0ZXh0SWQiLCJvdXRwdXQiLCJhdHRycyIsImNyZWF0ZVNwYW4iLCJyZXBsYWNlQWxsIiwiUGxheWFibGUiLCJtZW1vIiwic2V0VGV4dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwiY3VycmVudEluZGV4IiwiY3VycmVudFdvcmQiLCJmaW5hbFBvc2l0aW9uIiwic2VnbWVudFRvQ3V0Iiwic2VnbWVudCJdLCJzb3VyY2VzIjpbIi90cy9idXR0b24vUGxheWVyQnV0dG9uLnRzeCIsIi90cy9jbGlwYm9hcmQudHN4IiwiL3RzL2NvZGUudHN4IiwiL3RzL3BhcnNlLWNvbnRlbnQudHMiLCIvdHMvcGxheWFibGUudHN4IiwiL3RzL3VzZUJvdW5kYXJ5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDTztVQUFXLFNBQVVFLFlBQVlBLENBQUNDLEtBQUs7WUFDN0MsTUFBTTtjQUFFQyxNQUFNO2NBQUVDLEVBQUU7Y0FBRUM7WUFBTyxDQUFFLEdBQUdILEtBQUs7WUFDckMsTUFBTSxDQUFDSSxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHVCxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNsRCxNQUFNLENBQUNDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdiLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU1HLE1BQU0sR0FBRyxNQUFBQSxDQUFPO2NBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQ25DTixTQUFTLENBQUMsTUFBTSxDQUFDO2NBQ2pCSixNQUFNLENBQUNXLGFBQWEsR0FBRyxDQUFDO2NBQ3hCLE1BQU1YLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDVixPQUFPLEVBQUVELEVBQUUsQ0FBQztZQUMvQixDQUFDO1lBQ0QsTUFBTVksT0FBTyxHQUFHLE1BQUFBLENBQU87Y0FBRUg7WUFBTSxDQUFFLEtBQUk7Y0FDcEMsTUFBTVYsTUFBTSxDQUFDYyxJQUFJLEVBQUU7Y0FDbkJWLFNBQVMsQ0FBQyxNQUFNLENBQUM7Y0FDakJJLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDckIsQ0FBQztZQUVELE1BQU1PLEtBQUssR0FBR2QsRUFBRSxLQUFLRCxNQUFNLENBQUNDLEVBQUU7WUFDOUIsTUFB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