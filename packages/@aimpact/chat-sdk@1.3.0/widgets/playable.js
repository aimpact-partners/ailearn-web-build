System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/icons", "prismjs@1.29.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.3.0/widgets/markdown"], function (_export, _context) {
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
    }, function (_pragmateUi100Beta6Icons) {
      dependency_3 = _pragmateUi100Beta6Icons;
    }, function (_prismjs) {
      dependency_4 = _prismjs;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_6 = _aimpactChatSdk130WidgetsMarkdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.1"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.3.0/widgets/playable"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['prismjs', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['@aimpact/chat-sdk/widgets/markdown', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.3.0/widgets/playable');
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
        hash: 753101501,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.parseText = void 0;
          function validateTools(content) {
            if (typeof content !== 'string') {
              console.warn('Input must be a string.', content);
              return;
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
            if (typeof content !== 'string') {
              console.warn('Input must be a string.', content);
              return [[], ''];
            }
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
        hash: 2930800631,
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
        hash: 4182143472,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiUGxheWVyQnV0dG9uIiwicHJvcHMiLCJwbGF5ZXIiLCJpZCIsImNvbnRlbnQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJhcHBseSIsImljb24iLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJjbGFzc05hbWUiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJQcmlzbSIsIl9jbGlwYm9hcmQiLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJ2YWxpZGF0ZVRvb2xzIiwid2FybiIsInJlZ2V4Iiwib3V0cHV0QXJyYXkiLCJwcmV2aW91c0luZGV4IiwibWF0Y2giLCJtYXRjaEFsbCIsImZ1bGxNYXRjaCIsImlubmVyQ29udGVudCIsInByZWNlZGluZ1RleHQiLCJzbGljZSIsImluZGV4IiwicHVzaCIsInR5cGUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwicmVtYWluaW5nVGV4dCIsImNhY2hlIiwicGFyc2VUZXh0Iiwia2V5IiwiQUNUSU9OUyIsImluaXRpYWwiLCJlbGVtZW50cyIsImFjdGlvbnMiLCJmb3JFYWNoIiwiaXRlbSIsImluY2x1ZGVzIiwicmVzdWx0Iiwic3BsaXQiLCJmaWx0ZXIiLCJibG9jayIsInRyaW0iLCJtYXAiLCJzdGFydHNXaXRoIiwicGxheWFibGUiLCJqb2luIiwiZXhwb3J0cyIsIl9ob29rcyIsIl91c2VCb3VuZGFyeSIsIl9wYXJzZUNvbnRlbnQiLCJfaXRlbSIsIlBsYXlhYmxlQ29tcG9uZW50Iiwib25DbGlja1dvcmQiLCJhdXRvcGxheSIsImJsb2NrcyIsInBsYXlhYmxlQ29udGVudCIsInJlbW92ZUhpZ2hsaWdodCIsInVzZUJvdW5kYXJ5IiwidXNlRWZmZWN0IiwiRXJyb3IiLCJ1c2VCaW5kZXIiLCJmaW5hbEJsb2NrcyIsIm91dHB1dCIsInJlc3BvbnNlIiwiaSIsIlBsYXlhYmxlSXRlbSIsIlBsYXlhYmxlIiwibWVtbyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NvZGUiLCJfbWFya2Rvd24iLCJtYXJrZWQiLCJ1c2VNYXJrZWQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRhaW5zIiwid29yZCIsIndvcmRzQXJyYXkiLCJ0ZXh0VG9QbGF5IiwicGFyc2VJbnQiLCJ0ZXh0SWQiLCJyZXBsYWNlQWxsIiwiYXR0cnMiLCJjcmVhdGVTcGFuIiwid3JhcFRleHRXaXRoU3BhbiIsImh0bWxTdHJpbmciLCJyZXBsYWNlIiwibWFya2VkVGV4dCIsIk1hcmtkb3duIiwic2V0VGV4dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwib25Cb3VuZGFyeSIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRXb3JkIiwiZmluYWxQb3NpdGlvbiIsInNlZ21lbnRUb0N1dCIsInNlZ21lbnQiLCJvbiIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9idXR0b24vUGxheWVyQnV0dG9uLnRzeCIsIi90cy9jb2RlL2NsaXBib2FyZC50c3giLCIvdHMvY29kZS9jb2RlLnRzeCIsIi90cy9wYXJzZS1jb250ZW50LnRzIiwiL3RzL3BsYXlhYmxlL2luZGV4LnRzeCIsIi9wbGF5YWJsZS1wcm9wcy50cyIsIi90cy9wbGF5YWJsZS9pdGVtLnRzeCIsIi90cy91c2UtYm91bmRhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDTztVQUFXLFNBQVVFLFlBQVlBLENBQUNDLEtBQUs7WUFDN0MsTUFBTTtjQUFFQyxNQUFNO2NBQUVDLEVBQUU7Y0FBRUM7WUFBTyxDQUFFLEdBQUdILEtBQUs7WUFDckMsTUFBTSxDQUFDSSxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHVCxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNsRCxNQUFNLENBQUNDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdiLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU1HLE1BQU0sR0FBRyxNQUFBQSxDQUFPO2NBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQ25DTixTQUFTLENBQUMsTUFBTSxDQUFDO2NBQ2pCSixNQUFNLENBQUNXLGFBQWEsR0FBRyxDQUFDO2NBQ3hCLE1BQU1YLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDVixPQUFPLEVBQUVELEVBQUUsQ0FBQztZQUMvQixDQUFDO1lBQ0Qs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