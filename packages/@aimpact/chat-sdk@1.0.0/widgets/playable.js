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
        hash: 4025566980,
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
          const cache = {};
          /*bundle*/
          const parseText = content => {
            if (!content) return [[], ''];
            const key = hashContent(content);
            if (key in cache) {
              return cache[key];
            }
            if (!content) {
              cache[key] = [[], ''];
              return [[], ''];
            }
            const result = content.split(/(```[\s\S]*?```|`[\s\S]*?`)/).filter(block => block.trim() !== '').map(block => ({
              content: block,
              isCode: block.startsWith('```') || block.startsWith('`')
            }));
            const playable = result.filter(item => !item.isCode).map(item => item.content).join(' ');
            cache[key] = [result, playable];
            return cache[key];
          };
          exports.parseText = parseText;
        }
      });

      /**************************
      INTERNAL MODULE: ./playable
      **************************/

      ims.set('./playable', {
        hash: 1658725092,
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
            id,
            playable = true,
            content,
            player,
            onClickWord
          }) {
            const mark = (0, _hooks2.useMarked)();
            let autoplay = false;
            const {
              ref,
              text,
              removeHighlight
            } = (0, _useBoundary.useBoundary)(id, player, content);
            const [blocks] = (0, _parseContent.parseText)(content);
            _react.default.useEffect(() => {
              if (!playable) return;
              const playableContent = blocks.filter(item => !item.isCode);
              if (autoplay) player.play(playableContent.map(item => item.content).join(' '));
            }, [autoplay, playable]);
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const onClick = event => {
              event.preventDefault();
              event.stopPropagation();
              console.log(99, event.target.classList.contains('word'));
              if (event.target.classList.contains('word')) {
                const word = event.target.dataset.word;
                const wordsArray = text.split(' ');
                const textToPlay = wordsArray.slice(word).join(' ');
                player.positionToCut = parseInt(word);
                console.log(100, id, word);
                player.textId = id;
                player.play(textToPlay);
                if (onClickWord) onClickWord();
                // Implement your logic for playing the text from the clicked word to the end here.
              }
            };

            const output = _react.default.useMemo(() => {
              if (!playable) {
                const output = mark(content);
                return _react.default.createElement("div", {
                  className: 'message-text__container word',
                  dangerouslySetInnerHTML: {
                    __html: output
                  }
                });
              }
              return blocks.map((block, i) => {
                const createSpan = (word, index) => `<span data-word="${index}" data-index="${index}${i}" class="word">${word}</span>`;
                if (block.isCode) {
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
                  onClick: onClick,
                  dangerouslySetInnerHTML: {
                    __html: content
                  }
                });
              });
            }, [content, playable]);
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
        hash: 4126409740,
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
              // console.log('ejecutamos', player.positionToCut, player.currentWord);
              if (player.positionToCut > 0) {
                const segmentToCut = player.text.slice(0, currentIndex).split(' ').length - 1;
                // const finalPosition = player.positionToCut + segmentToCut;
                const finalPosition = player.currentWord;
                removeHighlight();
                if (!ref.current.querySelector(`[data-index="${finalPosition}"]`)) {
                  console.log('No', finalPosition, ref.current.querySelector(`[data-index="${finalPosition}"]`));
                  return;
                }
                ref.current.querySelector(`[data-index="${finalPosition}"]`).classList.add('highlight');
                return;
              }
              const segment = text.slice(0, currentIndex);
              const position = segment.split(' ').length - 1;
              removeHighlight();
              ref.current.querySelector(`[data-index="${position}${block}"]`).classList.add('highlight');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsQ0FBQyxnQkFBZ0J5RSxhQUFhLElBQUksQ0FBQyxDQUFDO2tCQUM5Rjs7Z0JBRUR4RyxHQUFHLENBQUM4QixPQUFPLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0J5RSxhQUFhLElBQUksQ0FBQyxDQUFDeEUsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO2dCQUN2Rjs7Y0FHRCxNQUFNd0UsT0FBTyxHQUFHM0csSUFBSSxDQUFDd0YsS0FBSyxDQUFDLENBQUMsRUFBRWUsWUFBWSxDQUFDO2NBQzNDLE1BQU0zRixRQUFRLEdBQUcrRixPQUFPLENBQUM1QyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNQLE1BQU0sR0FBRyxDQUFDO2NBRTlDc0IsZUFBZSxFQUFFO2NBQ2pCNUUsR0FBRyxDQUFDOEIsT0FBTyxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCckIsUUFBUSxHQUFHcUQsS0FBSyxJQUFJLENBQUMsQ0FBQy9CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUMzRixDQUFDLEVBQ0QsVUFBVSxDQUNWO1lBRUQsT0FBTztjQUFFakMsR0FBRztjQUFFRixJQUFJO2NBQUU4RTtZQUFlLENBQUU7VUFDdEMiLCJuYW1lcyI6WyJQbGF5ZXJCdXR0b24iLCJwcm9wcyIsInBsYXllciIsImlkIiwiY29udGVudCIsImFjdGlvbiIsInNldEFjdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJhcHBseSIsImljb24iLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsImNsYXNzTmFtZSIsIkNsaXBib2FyZCIsInRleHQiLCJtZXNzYWdlIiwicmVmIiwidXNlUmVmIiwicG9seWZpbGwiLCJ0ZXh0QXJlYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJQcmlzbSIsImhpZ2hsaWdodCIsImxhbmd1YWdlcyIsImphdmFzY3JpcHQiLCJjbHMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImhhc2hDb250ZW50IiwiaGFzaCIsImkiLCJjaHIiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJjYWNoZSIsInBhcnNlVGV4dCIsImtleSIsInJlc3VsdCIsInNwbGl0IiwiZmlsdGVyIiwiYmxvY2siLCJ0cmltIiwibWFwIiwiaXNDb2RlIiwic3RhcnRzV2l0aCIsInBsYXlhYmxlIiwiaXRlbSIsImpvaW4iLCJleHBvcnRzIiwiUGxheWFibGVDb21wb25lbnQiLCJvbkNsaWNrV29yZCIsIm1hcmsiLCJhdXRvcGxheSIsInJlbW92ZUhpZ2hsaWdodCIsImJsb2NrcyIsInVzZUVmZmVjdCIsInBsYXlhYmxlQ29udGVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGFpbnMiLCJ3b3JkIiwid29yZHNBcnJheSIsInRleHRUb1BsYXkiLCJzbGljZSIsInBhcnNlSW50IiwidGV4dElkIiwib3V0cHV0IiwidXNlTWVtbyIsImNyZWF0ZVNwYW4iLCJpbmRleCIsInJlcGxhY2VBbGwiLCJQbGF5YWJsZSIsIm1lbW8iLCJ1c2VCb3VuZGFyeSIsInNldFRleHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50V29yZCIsInNlZ21lbnRUb0N1dCIsImZpbmFsUG9zaXRpb24iLCJzZWdtZW50Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9idXR0b24vUGxheWVyQnV0dG9uLnRzeCIsInRzL2NsaXBib2FyZC50c3giLCJ0cy9jb2RlLnRzeCIsInRzL3BhcnNlLWNvbnRlbnQudHMiLCJ0cy9wbGF5YWJsZS50c3giLCJ0cy91c2VCb3VuZGFyeS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19