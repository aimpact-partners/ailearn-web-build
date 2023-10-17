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
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNELFVBQVUsQ0FDVjtZQUVELE9BQU87Y0FBRWpDLEdBQUc7Y0FBRUYsSUFBSTtjQUFFd0c7WUFBZSxDQUFFO1VBQ3RDIiwibmFtZXMiOlsiUGxheWVyQnV0dG9uIiwicHJvcHMiLCJwbGF5ZXIiLCJpZCIsImNvbnRlbnQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvblBsYXkiLCJsaXN0ZW4iLCJwb3NpdGlvblRvQ3V0IiwicGxheSIsIm9uUGF1c2UiLCJzdG9wIiwiYXBwbHkiLCJpY29uIiwib25DbGljayIsIkljb25CdXR0b24iLCJjbGFzc05hbWUiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInN0eWxlIiwidG9wIiwibGVmdCIsInBvc2l0aW9uIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZm9jdXMiLCJzZWxlY3QiLCJzdWNjZXNzZnVsIiwiZXhlY0NvbW1hbmQiLCJtc2ciLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3BhbiIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJlIiwiQ29kZSIsImxhbmd1YWdlIiwiY2hpbGRyZW4iLCJjcmVhdGVNYXJrdXAiLCJfX2h0bWwiLCJodG1sIiwiUHJpc20iLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJoYXNoQ29udGVudCIsImhhc2giLCJpIiwiY2hyIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwidmFsaWRhdGVUb29scyIsIkVycm9yIiwicmVnZXgiLCJvdXRwdXRBcnJheSIsInByZXZpb3VzSW5kZXgiLCJtYXRjaCIsIm1hdGNoQWxsIiwiZnVsbE1hdGNoIiwiaW5uZXJDb250ZW50IiwicHJlY2VkaW5nVGV4dCIsInNsaWNlIiwiaW5kZXgiLCJwdXNoIiwidHlwZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJyZW1haW5pbmdUZXh0IiwiY2FjaGUiLCJwYXJzZVRleHQiLCJrZXkiLCJBQ1RJT05TIiwiaW5pdGlhbCIsImVsZW1lbnRzIiwiYWN0aW9ucyIsImZvckVhY2giLCJpdGVtIiwiaW5jbHVkZXMiLCJyZXN1bHQiLCJzcGxpdCIsImZpbHRlciIsImJsb2NrIiwidHJpbSIsIm1hcCIsInN0YXJ0c1dpdGgiLCJwbGF5YWJsZSIsImpvaW4iLCJleHBvcnRzIiwiUGxheWFibGVDb21wb25lbnQiLCJ0b29sVGV4dHMiLCJvbkNsaWNrV29yZCIsIm1hcmsiLCJhdXRvcGxheSIsImJsb2NrcyIsInBsYXlhYmxlQ29udGVudCIsInJlbW92ZUhpZ2hsaWdodCIsInVzZUVmZmVjdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGFpbnMiLCJ3b3JkIiwid29yZHNBcnJheSIsInRleHRUb1BsYXkiLCJwYXJzZUludCIsInRleHRJZCIsImZpbmFsQmxvY2tzIiwib3V0cHV0IiwiYXR0cnMiLCJjcmVhdGVTcGFuIiwicmVwbGFjZUFsbCIsIlBsYXlhYmxlIiwibWVtbyIsInVzZUJvdW5kYXJ5Iiwic2V0VGV4dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwiY3VycmVudEluZGV4IiwiY3VycmVudFdvcmQiLCJmaW5hbFBvc2l0aW9uIiwic2VnbWVudFRvQ3V0Iiwic2VnbWVudCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvYnV0dG9uL1BsYXllckJ1dHRvbi50c3giLCJ0cy9jbGlwYm9hcmQudHN4IiwidHMvY29kZS50c3giLCJ0cy9wYXJzZS1jb250ZW50LnRzIiwidHMvcGxheWFibGUudHN4IiwidHMvdXNlQm91bmRhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==