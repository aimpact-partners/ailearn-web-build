System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/icons", "prismjs@1.29.0", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat-sdk@1.0.0/widgets/markdown"], function (_export, _context) {
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
    }, function (_pragmateUi006Icons) {
      dependency_3 = _pragmateUi006Icons;
    }, function (_prismjs) {
      dependency_4 = _prismjs;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_5 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_6 = _aimpactChatSdk100WidgetsMarkdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.10"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["highlight.js", "11.8.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.30"]]);
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
        hash: 1379775263,
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
        hash: 577460672,
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
            const marked = (0, _markdown.useMarked)();
            const onClick = event => {
              event.preventDefault();
              event.stopPropagation();
              if (event.target.classList.contains('word')) {
                const word = event.target.dataset.word;
                const wordsArray = text.split(' ');
                const textToPlay = wordsArray.slice(word).join(' ');
                player.positionToCut = parseInt(word);
                player.textId = id;
                //@ts-ignore
                player.play(textToPlay.replaceAll(/[-\\*_#]+/g, '').trim()); // remove markdown characters to avoid reading them with the text-to-speech engine
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
            function wrapTextWithSpan(htmlString, index) {
              return htmlString.replace(/([^<]+)|(<[^>]+>)/g, (match, text) => {
                // If the match is text (not an HTML tag)
                if (!text) return match;
                // Split the text into words and wrap each word with a span
                return text.split(/\s+/).map(word => {
                  // Ignore special characters or empty strings
                  if (!word.trim() || word.match(/[\.,¿¡!\?;:\-\n\t]/)) return word;
                  return createSpan(word, index++);
                }).join(' ');
              });
            }
            const markedText = marked(block.content);
            //@ts-ignore
            const content = markedText.split(' ').map(wrapTextWithSpan).join(' ');
            return (
              //@ts-ignore
              _react.default.createElement(_markdown.Markdown, {
                key: `content-${index}`,
                "data-block": index,
                className: "message-text__container",
                ...attrs
              }, content)
            );
          };
          exports.PlayableItem = PlayableItem;
        }
      });

      /******************************
      INTERNAL MODULE: ./use-boundary
      ******************************/

      ims.set('./use-boundary', {
        hash: 1124656709,
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
              /**
               * todo: @jircdev content replacemennt is being done here and in item.tsx
               */
              content = content.replaceAll(/[-\\*_#\n\t]+/g, '').trim();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiUGxheWVyQnV0dG9uIiwicHJvcHMiLCJwbGF5ZXIiLCJpZCIsImNvbnRlbnQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJhcHBseSIsImljb24iLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJjbGFzc05hbWUiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJQcmlzbSIsIl9jbGlwYm9hcmQiLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJ2YWxpZGF0ZVRvb2xzIiwiRXJyb3IiLCJyZWdleCIsIm91dHB1dEFycmF5IiwicHJldmlvdXNJbmRleCIsIm1hdGNoIiwibWF0Y2hBbGwiLCJmdWxsTWF0Y2giLCJpbm5lckNvbnRlbnQiLCJwcmVjZWRpbmdUZXh0Iiwic2xpY2UiLCJpbmRleCIsInB1c2giLCJ0eXBlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsInJlbWFpbmluZ1RleHQiLCJjYWNoZSIsInBhcnNlVGV4dCIsImtleSIsIkFDVElPTlMiLCJpbml0aWFsIiwiZWxlbWVudHMiLCJhY3Rpb25zIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmNsdWRlcyIsInJlc3VsdCIsInNwbGl0IiwiZmlsdGVyIiwiYmxvY2siLCJ0cmltIiwibWFwIiwic3RhcnRzV2l0aCIsInBsYXlhYmxlIiwiam9pbiIsImV4cG9ydHMiLCJfaG9va3MiLCJfdXNlQm91bmRhcnkiLCJfcGFyc2VDb250ZW50IiwiX2l0ZW0iLCJNYXAiLCJQbGF5YWJsZUNvbXBvbmVudCIsIm9uQ2xpY2tXb3JkIiwiYXV0b3BsYXkiLCJibG9ja3MiLCJwbGF5YWJsZUNvbnRlbnQiLCJyZW1vdmVIaWdobGlnaHQiLCJ1c2VCb3VuZGFyeSIsInVzZUVmZmVjdCIsInVzZUJpbmRlciIsImZpbmFsQmxvY2tzIiwib3V0cHV0IiwicmVzcG9uc2UiLCJpIiwiUGxheWFibGVJdGVtIiwiUGxheWFibGUiLCJtZW1vIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY29kZSIsIl9tYXJrZG93biIsIm1hcmtlZCIsInVzZU1hcmtlZCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGFpbnMiLCJ3b3JkIiwid29yZHNBcnJheSIsInRleHRUb1BsYXkiLCJwYXJzZUludCIsInRleHRJZCIsInJlcGxhY2VBbGwiLCJhdHRycyIsImNyZWF0ZVNwYW4iLCJ3cmFwVGV4dFdpdGhTcGFuIiwiaHRtbFN0cmluZyIsInJlcGxhY2UiLCJtYXJrZWRUZXh0IiwiTWFya2Rvd24iLCJzZXRUZXh0IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJvbkJvdW5kYXJ5IiwiY3VycmVudEluZGV4IiwiY3VycmVudFdvcmQiLCJmaW5hbFBvc2l0aW9uIiwic2VnbWVudFRvQ3V0Iiwic2VnbWVudCIsIm9uIiwib2ZmIl0sInNvdXJjZXMiOlsiL3RzL2J1dHRvbi9QbGF5ZXJCdXR0b24udHN4IiwiL3RzL2NvZGUvY2xpcGJvYXJkLnRzeCIsIi90cy9jb2RlL2NvZGUudHN4IiwiL3RzL3BhcnNlLWNvbnRlbnQudHMiLCIvdHMvcGxheWFibGUvaW5kZXgudHN4IiwiL3BsYXlhYmxlLXByb3BzLnRzIiwiL3RzL3BsYXlhYmxlL2l0ZW0udHN4IiwiL3RzL3VzZS1ib3VuZGFyeS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNPO1VBQVcsU0FBVUUsWUFBWUEsQ0FBQ0MsS0FBSztZQUM3QyxNQUFNO2NBQUVDLE1BQU07Y0FBRUMsRUFBRTtjQUFFQztZQUFPLENBQUUsR0FBR0gsS0FBSztZQUNyQyxNQUFNLENBQUNJLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdULE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2xELE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR2IsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTUcsTUFBTSxHQUFHLE1BQUFBLENBQU87Y0FBRUM7WUFBTSxDQUFFLEtBQUk7Y0FDbkNOLFNBQVMsQ0FBQyxNQUFNLENBQUM7Y0FDakJKLE1BQU0sQ0FBQ1csYUFBYSxHQUFHLENBQUM7Y0FDeEIsTUFBTVgsTUFBTSxDQUFDWSxJQUFJLENBQUNWLE9BQU8sRUFBRUQsRUFBRSxDQUFDO1lBQy9CLENBQUM7WUFDRCxN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