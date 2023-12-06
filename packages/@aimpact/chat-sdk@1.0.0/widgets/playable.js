System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/icons", "prismjs@1.29.0", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat-sdk@1.0.0/widgets/markdown"], function (_export, _context) {
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
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_6 = _aimpactChatSdk100WidgetsMarkdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.19"]]);
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
        hash: 3462327627,
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
                text: text,
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
        hash: 2950421028,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PlayableItem = void 0;
          var _react = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _code = require("../code/code");
          const PlayableItem = exports.PlayableItem = _react.default.memo(function ({
            block,
            text,
            id,
            index,
            playable,
            player,
            onClickWord
          }) {
            const mark = (0, _markdown.useMarked)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiUGxheWVyQnV0dG9uIiwicHJvcHMiLCJwbGF5ZXIiLCJpZCIsImNvbnRlbnQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJhcHBseSIsImljb24iLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJjbGFzc05hbWUiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJQcmlzbSIsIl9jbGlwYm9hcmQiLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJ2YWxpZGF0ZVRvb2xzIiwiRXJyb3IiLCJyZWdleCIsIm91dHB1dEFycmF5IiwicHJldmlvdXNJbmRleCIsIm1hdGNoIiwibWF0Y2hBbGwiLCJmdWxsTWF0Y2giLCJpbm5lckNvbnRlbnQiLCJwcmVjZWRpbmdUZXh0Iiwic2xpY2UiLCJpbmRleCIsInB1c2giLCJ0eXBlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsInJlbWFpbmluZ1RleHQiLCJjYWNoZSIsInBhcnNlVGV4dCIsImtleSIsIkFDVElPTlMiLCJpbml0aWFsIiwiZWxlbWVudHMiLCJhY3Rpb25zIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmNsdWRlcyIsInJlc3VsdCIsInNwbGl0IiwiZmlsdGVyIiwiYmxvY2siLCJ0cmltIiwibWFwIiwic3RhcnRzV2l0aCIsInBsYXlhYmxlIiwiam9pbiIsImV4cG9ydHMiLCJfaG9va3MiLCJfdXNlQm91bmRhcnkiLCJfcGFyc2VDb250ZW50IiwiX2l0ZW0iLCJNYXAiLCJQbGF5YWJsZUNvbXBvbmVudCIsIm9uQ2xpY2tXb3JkIiwiYXV0b3BsYXkiLCJibG9ja3MiLCJwbGF5YWJsZUNvbnRlbnQiLCJyZW1vdmVIaWdobGlnaHQiLCJ1c2VCb3VuZGFyeSIsInVzZUVmZmVjdCIsInVzZUJpbmRlciIsImZpbmFsQmxvY2tzIiwib3V0cHV0IiwicmVzcG9uc2UiLCJpIiwiUGxheWFibGVJdGVtIiwiUGxheWFibGUiLCJtZW1vIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfbWFya2Rvd24iLCJfY29kZSIsIm1hcmsiLCJ1c2VNYXJrZWQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRhaW5zIiwid29yZCIsIndvcmRzQXJyYXkiLCJ0ZXh0VG9QbGF5IiwicGFyc2VJbnQiLCJ0ZXh0SWQiLCJhdHRycyIsInJlcGxhY2VBbGwiLCJjcmVhdGVTcGFuIiwic2V0VGV4dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwiY3VycmVudEluZGV4IiwiY3VycmVudFdvcmQiLCJmaW5hbFBvc2l0aW9uIiwic2VnbWVudFRvQ3V0Iiwic2VnbWVudCJdLCJzb3VyY2VzIjpbIi90cy9idXR0b24vUGxheWVyQnV0dG9uLnRzeCIsIi90cy9jb2RlL2NsaXBib2FyZC50c3giLCIvdHMvY29kZS9jb2RlLnRzeCIsIi90cy9wYXJzZS1jb250ZW50LnRzIiwiL3RzL3BsYXlhYmxlL2luZGV4LnRzeCIsIi9wbGF5YWJsZS1wcm9wcy50cyIsIi90cy9wbGF5YWJsZS9pdGVtLnRzeCIsIi90cy91c2UtYm91bmRhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDTztVQUFXLFNBQVVFLFlBQVlBLENBQUNDLEtBQUs7WUFDN0MsTUFBTTtjQUFFQyxNQUFNO2NBQUVDLEVBQUU7Y0FBRUM7WUFBTyxDQUFFLEdBQUdILEtBQUs7WUFDckMsTUFBTSxDQUFDSSxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHVCxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNsRCxNQUFNLENBQUNDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdiLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU1HLE1BQU0sR0FBRyxNQUFBQSxDQUFPO2NBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQ25DTixTQUFTLENBQUMsTUFBTSxDQUFDO2NBQ2pCSixNQUFNLENBQUNXLGFBQWEsR0FBRyxDQUFDO2NBQ3hCLE1BQU1YLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDVixPQUFPLEVBQUVELEVBQUUsQ0FBQztZQUMvQixDQUFDO1lBQ0QsTUFBTVksT0FBTyxHQUFHLE1BQUFBLENBQU87Y0FBRUg7WUFBTSxDQUFFLEtBQUk7Y0FDcEMsTUFBTVYsTUFBTSxDQUFDYyxJQUFJLEVBQUU7Y0FDbkJWLFNBQVMs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